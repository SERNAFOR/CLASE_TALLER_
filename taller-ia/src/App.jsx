import { useState, useEffect, useLayoutEffect, useRef } from 'react'
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
import Termometro from './components/Termometro'
import Cronometro from './components/Cronometro'
import BolaDeNieve from './components/BolaDeNieve'
import Fuga from './components/Fuga'

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
  termometro: Termometro,
  cronometro: Cronometro,
  cadena: BolaDeNieve,
  fuga: Fuga,
}

// Badge mostrado bajo la cabecera según el grupo de la sección.
const BADGES = {
  gobernanza: '🗂️ Actividad de gobernanza',
  taller: '📖 El Taller de IA',
  lab: '🧪 Laboratorio',
}

// Reparte los bloques de una seccion en pasos de diapositiva. Un bloque con
// `conAnterior: true` aparece en el mismo paso que el de arriba, para pares que
// no tienen sentido separados.
// Los interactivos con lista larga ocupan UNA diapositiva por pregunta: en una
// sala se lee una, se vota, se revela, y se pasa. Los que no estan aqui ocupan
// una sola diapositiva. Solo aplica en modo presentacion.
const SUBPASOS = {
  rolesDatos: (d) => d.rolesDatos.situaciones.length + 1,
  termometro: (d) => d.termometro.situaciones.length + 1,
  detective: (d) => d.detective.frases.length + 1,
  madurezDatos: (d) => d.madurezDatos.preguntas.length + 1,
}

function repartirPasos(bloques) {
  const de = []
  let n = -1
  bloques.forEach((b, i) => {
    if (i === 0 || !b.conAnterior) n++
    de[i] = n
  })
  return { de, total: n + 1 }
}

function App({ seccionInicial, proyeccion }) {
  const datos = useTaller()
  const { secciones, marca, grupos } = datos
  const [activa, setActiva] = useState(() =>
    seccionInicial && secciones.some((s) => s.id === seccionInicial)
      ? seccionInicial
      : secciones[0].id,
  )
  const [menuAbierto, setMenuAbierto] = useState(false)
  // Modo presentacion: lo pide el taller, no la URL. El taller general no lo
  // activa nunca, asi que su comportamiento no cambia en absoluto.
  const presentacion = marca.presentacion === true
  // El recorrido es la secuencia de diapositivas. Las secciones con `fuera`
  // siguen existiendo y son accesibles desde el menu, pero no estan en ella.
  const recorrido = presentacion ? secciones.filter((s) => !s.fuera) : secciones
  const [paso, setPaso] = useState(0)
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
    document.documentElement.toggleAttribute('data-presentacion', presentacion)
  }, [marca.docTitle, marca.id, presentacion])

  const alternarTema = () => setTema((t) => (t === 'dark' ? 'light' : 'dark'))

  function ir(id, pasoInicial = 0) {
    setActiva(id)
    setPaso(pasoInicial)
    setMenuAbierto(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Cuantas diapositivas tiene una seccion: un paso por bloque (salvo los
  // agrupados) mas los que ocupe el interactivo.
  const subpasosDe = (id) => (presentacion && SUBPASOS[id] ? SUBPASOS[id](datos) : 1)
  const pasosDe = (s) =>
    repartirPasos(s.bloques).total + (s.interactivo ? subpasosDe(s.interactivo) : 0)

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
      // Esc muestra u oculta el menu sin salir de la diapositiva.
      if (e.key === 'Escape' && presentacion) {
        e.preventDefault()
        setMenuAbierto((v) => !v)
        return
      }
      const i = recorrido.findIndex((s) => s.id === activa)
      const adelante = e.key === 'ArrowRight' || e.key === 'PageDown'
      const atras = e.key === 'ArrowLeft' || e.key === 'PageUp'
      if (!adelante && !atras) return

      // Fuera del modo presentacion se navega seccion a seccion, como siempre.
      if (!presentacion) {
        if (adelante && recorrido[i + 1]) {
          e.preventDefault()
          ir(recorrido[i + 1].id)
        } else if (atras && recorrido[i - 1]) {
          e.preventDefault()
          ir(recorrido[i - 1].id)
        }
        return
      }

      // En presentacion se avanza paso a paso; solo al agotarlos se cambia de
      // seccion. Hacia atras se entra a la anterior por su ULTIMO paso, que es
      // donde estabas cuando la dejaste.
      const ultimo = pasosDe(seccion) - 1
      if (adelante) {
        e.preventDefault()
        if (paso < ultimo) setPaso((v) => v + 1)
        else if (recorrido[i + 1]) ir(recorrido[i + 1].id)
      } else {
        e.preventDefault()
        if (paso > 0) setPaso((v) => v - 1)
        else if (recorrido[i - 1]) ir(recorrido[i - 1].id, pasosDe(recorrido[i - 1]) - 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const Interactivo = seccion.interactivo ? INTERACTIVOS[seccion.interactivo] : null

  // Progreso dentro del Laboratorio (para la barra divulgativa).
  // GARANTIA DE QUE NADA DESBORDA. Con "una diapositiva = un bloque" casi todo
  // cabe, pero un interactivo largo puede seguir sin caber. Aqui se mide lo que
  // hay en pantalla y se encoge hasta que entre: asi "no hace falta scroll" es
  // un hecho medido, no una esperanza. El taller general no pasa por aqui.
  const contenidoRef = useRef(null)
  useLayoutEffect(() => {
    if (!presentacion) return
    const el = contenidoRef.current
    if (!el) return
    const ajustar = () => {
      const seccionEl = el.querySelector('.seccion')
      if (!seccionEl) return
      const cs = getComputedStyle(el)
      // COMPROBADO: scrollHeight de la seccion NO depende del zoom del padre
      // (454 / 453 / 459 px a zoom 1, 2 y 0.5), mientras que el rect si. Por eso
      // se puede medir sin resetear el zoom antes — y hacerlo era justo lo que
      // provocaba medir a medio camino y aplicar un zoom equivocado.
      const relleno = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom)
      const natural = seccionEl.scrollHeight + relleno
      const disponible = window.innerHeight - el.getBoundingClientRect().top - 16
      if (!natural || disponible <= 0) return

      // Base generosa en pantallas grandes. El suelo NO es un numero fijo: lo
      // que importa es que el texto ocupe una fraccion legible de la ALTURA de
      // la pantalla, no un tamano absoluto en pixeles.
      const base = window.innerWidth >= 1600 ? 2 : 1.5
      const suelo = Math.max(0.45, (window.innerHeight / 1080) * 0.6)
      const z = Math.max(suelo, Math.min(base, disponible / natural))
      const nuevo = z.toFixed(3)
      if (el.style.zoom !== nuevo) el.style.zoom = nuevo

      // Si ni con el suelo cabe, esa diapositiva tiene demasiado contenido y hay
      // que partirla, no encogerla mas. Se avisa en vez de callarlo.
      if (import.meta.env.DEV && natural * z > disponible + 2) {
        console.warn(
          '[presentacion] no cabe ni al minimo:',
          seccion.id,
          'paso',
          paso,
          Math.ceil(natural * z - disponible) + 'px de mas',
        )
      }
    }
    ajustar()
    window.addEventListener('resize', ajustar)
    // Y cuando cambia el contenido SIN que App re-renderice: al revelar el
    // feedback de una pregunta crece la diapositiva, y ese estado vive dentro
    // del componente hijo.
    const obs = new ResizeObserver(ajustar)
    const seccionEl = el.querySelector('.seccion')
    if (seccionEl) obs.observe(seccionEl)
    return () => {
      window.removeEventListener('resize', ajustar)
      obs.disconnect()
    }
  })

  const reparto = repartirPasos(seccion.bloques)
  const idxRecorrido = recorrido.findIndex((s) => s.id === activa)
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
            const items = secciones.filter(
              (s) => (s.grupo ?? 'taller') === g.id && !(presentacion && s.fuera),
            )
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
          {presentacion && secciones.some((s) => s.fuera) && (
            <div className="nav__grupo nav__grupo--fuera">
              <p className="nav__grupo-tit">
                <span>📦</span> Fuera del recorrido
              </p>
              {secciones
                .filter((s) => s.fuera)
                .map((s) => (
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
          )}
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

      <main className="contenido" ref={contenidoRef}>
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

          {presentacion ? (
            idxRecorrido >= 0 && (
              <div className="progreso">
                <div className="progreso__barra">
                  <div
                    className="progreso__relleno"
                    style={{ width: `${((idxRecorrido + 1) / recorrido.length) * 100}%` }}
                  />
                </div>
                <span className="progreso__txt">
                  {idxRecorrido + 1} / {recorrido.length}
                </span>
              </div>
            )
          ) : (
            enLab && (
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
            )
          )}

          {seccion.bloques.map((b, i) =>
            presentacion && reparto.de[i] !== paso ? null : (
              <Bloque key={i} bloque={b} ir={ir} />
            ),
          )}

          {Interactivo &&
            (!presentacion ? (
              <Interactivo />
            ) : (
              paso >= reparto.total && <Interactivo paso={paso - reparto.total} />
            ))}

          <Navegacion activa={activa} ir={ir} recorrido={recorrido} />
        </div>
      </main>
    </div>
  )
}

// Botones anterior / siguiente al pie de cada sección.
function Navegacion({ activa, ir, recorrido }) {
  const idx = recorrido.findIndex((s) => s.id === activa)
  // Una seccion fuera del recorrido no tiene anterior ni siguiente: se llega a
  // ella por el menu y se vuelve por el menu.
  const prev = idx >= 0 ? recorrido[idx - 1] : null
  const next = idx >= 0 ? recorrido[idx + 1] : null
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
