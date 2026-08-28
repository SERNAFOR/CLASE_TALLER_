import { useState, useEffect } from 'react'
import './App.css'
import { useTaller } from './taller/contexto'
import Bloque from './components/Bloque'
import Icon from './components/Icon'
import Perceptron from './components/Perceptron'
import PromptBuilder from './components/PromptBuilder'
import AnalisisLey from './components/AnalisisLey'
import CompararIA from './components/CompararIA'
import SubeNivel from './components/SubeNivel'
import Detective from './components/Detective'
import Publicos from './components/Publicos'
import Privacidad from './components/Privacidad'
import DocAccion from './components/DocAccion'
import RedNeuronal from './components/RedNeuronal'
import Attention from './components/Attention'
import Alucina from './components/Alucina'
import RolesDatos from './components/RolesDatos'
import MadurezDatos from './components/MadurezDatos'
import Dolencias from './components/Dolencias'

// Mapa de id de interactivo → componente.
const INTERACTIVOS = {
  perceptron: Perceptron,
  prompt: PromptBuilder,
  analisisLey: AnalisisLey,
  compararIA: CompararIA,
  subeNivel: SubeNivel,
  detective: Detective,
  publicos: Publicos,
  privacidad: Privacidad,
  docAccion: DocAccion,
  redNeuronal: RedNeuronal,
  attention: Attention,
  alucina: Alucina,
  rolesDatos: RolesDatos,
  madurezDatos: MadurezDatos,
  dolencias: Dolencias,
}

// Badge mostrado bajo la cabecera según el grupo de la sección.
const BADGES = {
  gobernanza: '🗂️ Actividad de gobernanza',
  taller: '📖 El Taller de IA',
  lab: '🧪 Laboratorio',
}

function App({ seccionInicial, proyeccion }) {
  const { secciones, marca, grupos } = useTaller()
  const [activa, setActiva] = useState(() =>
    seccionInicial && secciones.some((s) => s.id === seccionInicial)
      ? seccionInicial
      : secciones[0].id,
  )
  const [menuAbierto, setMenuAbierto] = useState(false)
  // Claro por defecto, a propósito: un proyector no produce negro, produce gris,
  // y en una sala con luz el modo oscuro se lava. El toggle sigue disponible
  // para quien lo quiera en su escritorio.
  const [tema, setTema] = useState(() => {
    if (proyeccion) return 'light'
    const g = typeof localStorage !== 'undefined' && localStorage.getItem('tema')
    return g === 'dark' || g === 'light' ? g : 'light'
  })
  const seccion = secciones.find((s) => s.id === activa) ?? secciones[0]

  useEffect(() => {
    document.documentElement.dataset.theme = tema
    document.documentElement.style.colorScheme = tema
    try {
      localStorage.setItem('tema', tema)
    } catch {
      // Modo privado: el tema simplemente no se recuerda.
    }
  }, [tema])

  useEffect(() => {
    document.title = marca.docTitle
    document.documentElement.dataset.taller = marca.id
  }, [marca.docTitle, marca.id])

  const alternarTema = () => setTema((t) => (t === 'dark' ? 'light' : 'dark'))

  function ir(id) {
    setActiva(id)
    setMenuAbierto(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // PageUp/PageDown y flechas recorren las secciones en orden. Es lo que manda
  // un presentador inalámbrico, y despega al facilitador del notebook.
  useEffect(() => {
    const onKey = (e) => {
      // Sin este guard, las flechas le robarían el valor a los <input range>
      // del perceptrón y de "Sube el nivel".
      // e.target puede ser window o document (sin foco): comprobar antes de
      // llamar a closest(), o el handler revienta y no navega nunca.
      const t = e.target
      if (t instanceof Element && t.closest('input, textarea, select')) return
      if (e.altKey || e.ctrlKey || e.metaKey) return
      const i = secciones.findIndex((s) => s.id === activa)
      const adelante = e.key === 'ArrowRight' || e.key === 'PageDown'
      const atras = e.key === 'ArrowLeft' || e.key === 'PageUp'
      if (adelante && secciones[i + 1]) {
        e.preventDefault()
        ir(secciones[i + 1].id)
      } else if (atras && secciones[i - 1]) {
        e.preventDefault()
        ir(secciones[i - 1].id)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const Interactivo = seccion.interactivo ? INTERACTIVOS[seccion.interactivo] : null

  // Progreso dentro del Laboratorio (para la barra divulgativa).
  const lab = secciones.filter((s) => s.grupo === 'lab')
  const labIdx = lab.findIndex((s) => s.id === activa)
  const enLab = labIdx >= 0

  return (
    <div className="layout">
      <header className="topbar">
        <button
          className="topbar__burger"
          onClick={() => setMenuAbierto((v) => !v)}
          aria-label="Abrir menú"
          aria-expanded={menuAbierto}
        >
          <Icon name="menu" />
        </button>
        <div className="topbar__marca">
          <span className="topbar__logo">
            <Icon name="leaf" size={18} />
          </span>
          <div>
            <strong>{marca.titulo}</strong>
            <span className="topbar__sub">{marca.sub}</span>
          </div>
        </div>
        <span className="topbar__spacer" />
        <button
          className="topbar__burger"
          onClick={alternarTema}
          aria-label={tema === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
        >
          <Icon name={tema === 'dark' ? 'sun' : 'moon'} size={22} />
        </button>
      </header>

      <aside className={'nav' + (menuAbierto ? ' nav--abierto' : '')}>
        <div className="nav__marca">
          <span className="nav__marca-logo">
            <Icon name="leaf" size={22} />
          </span>
          <span className="nav__marca-txt">
            <span className="nav__marca-tit">{marca.titulo}</span>
            <span className="nav__marca-sub">{marca.subNav ?? marca.sub}</span>
          </span>
        </div>
        <nav>
          {grupos.map((g) => {
            const items = secciones.filter((s) => (s.grupo ?? 'taller') === g.id)
            if (!items.length) return null
            return (
              <div className="nav__grupo" key={g.id}>
                <p className="nav__grupo-tit">
                  <span>{g.icono}</span> {g.etiqueta}
                </p>
                {items.map((s) => (
                  <button
                    key={s.id}
                    className={'nav__item' + (s.id === activa ? ' nav__item--activa' : '')}
                    onClick={() => ir(s.id)}
                  >
                    <span className="nav__icono">{s.icono}</span>
                    <span className="nav__txt">{s.titulo}</span>
                  </button>
                ))}
              </div>
            )
          })}
        </nav>
        <button
          className="tema-toggle"
          onClick={alternarTema}
          aria-label={tema === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
        >
          <Icon name={tema === 'dark' ? 'sun' : 'moon'} size={16} />
          {tema === 'dark' ? 'Modo claro' : 'Modo oscuro'}
        </button>
        <p className="nav__pie">{marca.pie}</p>
      </aside>

      {menuAbierto && <div className="overlay" onClick={() => setMenuAbierto(false)} />}

      <main className="contenido">
        <div className="seccion">
          <header className="seccion__cabecera">
            <span className="seccion__icono-grande">{seccion.icono}</span>
            <div>
              {seccion.interactivo && BADGES[seccion.grupo] && (
                <span className="seccion__badge">{BADGES[seccion.grupo]}</span>
              )}
              <h1>{seccion.titulo}</h1>
              {seccion.subtitulo && <p className="seccion__sub">{seccion.subtitulo}</p>}
            </div>
          </header>

          {enLab && (
            <div className="progreso">
              <div className="progreso__barra">
                <div
                  className="progreso__relleno"
                  style={{ width: `${((labIdx + 1) / lab.length) * 100}%` }}
                />
              </div>
              <span className="progreso__txt">
                Laboratorio · {labIdx + 1} de {lab.length}
              </span>
            </div>
          )}

          {seccion.bloques.map((b, i) => (
            <Bloque key={i} bloque={b} ir={ir} />
          ))}

          {Interactivo && <Interactivo />}

          <Navegacion activa={activa} ir={ir} />
        </div>
      </main>
    </div>
  )
}

// Botones anterior / siguiente al pie de cada sección.
function Navegacion({ activa, ir }) {
  const { secciones } = useTaller()
  const idx = secciones.findIndex((s) => s.id === activa)
  const prev = secciones[idx - 1]
  const next = secciones[idx + 1]
  return (
    <div className="seccion__nav">
      {prev ? (
        <button className="btn" onClick={() => ir(prev.id)}>
          ← {prev.titulo}
        </button>
      ) : (
        <span />
      )}
      {next ? (
        <button className="btn btn--primary" onClick={() => ir(next.id)}>
          {next.titulo} →
        </button>
      ) : (
        <span />
      )}
    </div>
  )
}

export default App
