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

// ANCHOS LOGICOS CANDIDATOS. Una lamina de dos columnas medida a 825px se
// estira a lo alto y hay que encogerla a 0.6 (texto de 10px, ilegible en sala);
// la misma a 1250px cabe casi a tamano natural. Por eso el ancho se ELIGE por
// lamina en vez de fijarlo: se prueban unos pocos y gana el que permita el
// texto mas grande. Empatados, gana el mas estrecho (lineas mas cortas).
const ANCHOS_ESCENA = [700, 825, 950, 1100, 1250]
// El aumento que se busca segun la pantalla: en un proyector de 1920 el texto
// va al doble; en una ventana estrecha, a tamano natural.
const aumentoDe = (anchoVentana) =>
  anchoVentana >= 1600 ? 2 : anchoVentana >= 1100 ? 1.5 : 1

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
  // En presentacion toda actividad tiene un paso final de REMATE, donde recien
  // aparece la leccion. Las paginadas ya lo traen en su cuenta; las demas pasan
  // de 1 a 2 pasos: primero la actividad, despues la conclusion.
  const subpasosDe = (id) => (presentacion ? (SUBPASOS[id] ? SUBPASOS[id](datos) : 2) : 1)
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
  // GARANTIA DE QUE NADA DESBORDA: cada diapositiva se mide y se escala hasta
  // que entra en la pantalla. El taller general no pasa por aqui.
  //
  // Se escala con `transform`, NO con `zoom`. Con zoom la lamina LATE sin
  // parar (visto en video, 2026-09-02): zoom si reflúa el texto, asi que al
  // escalar cambian los saltos de linea, cambia la altura, se recalcula otra
  // escala, y el bucle no converge nunca. `transform` no toca el layout: la
  // altura medida es la misma antes y despues de escalar, y el calculo da el
  // mismo numero a la primera. Por eso el escenario tiene ANCHO FIJO en CSS.
  const contenidoRef = useRef(null)
  useLayoutEffect(() => {
    if (!presentacion) return
    const el = contenidoRef.current
    if (!el) return
    el.style.zoom = ''
    let ultimaFirma = null
    const ajustar = () => {
      const escena = el.querySelector('.seccion')
      if (!escena) return
      const cs = getComputedStyle(el)
      const anchoDisp =
        el.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight)
      const altoDisp =
        el.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom)
      if (anchoDisp <= 0 || altoDisp <= 0) return
      const aumento = aumentoDe(window.innerWidth)

      // FIRMA. Probar anchos toca el elemento que el ResizeObserver vigila, asi
      // que el observador se dispararia por la propia medicion — el bucle de
      // siempre. Se corta aqui: si la lamina mide lo mismo que la ultima vez en
      // el ancho ya aplicado, no hay nada que recalcular y se sale sin tocar
      // nada. La reentrada que provoca la medicion muere en esta linea.
      const firma = anchoDisp + 'x' + altoDisp + '|' + escena.style.width + '|' + escena.scrollHeight
      if (firma === ultimaFirma) return

      let mejor = null
      for (const w of ANCHOS_ESCENA) {
        escena.style.width = w + 'px'
        const h = escena.scrollHeight
        if (!h) continue
        const k = Math.min(aumento, anchoDisp / w, altoDisp / h)
        // Solo gana por un margen real; si empata, se queda el mas estrecho.
        if (!mejor || k > mejor.k * 1.02) mejor = { w, k }
      }
      if (!mejor) return
      escena.style.width = mejor.w + 'px'
      const nuevo = 'scale(' + mejor.k.toFixed(4) + ')'
      if (escena.style.transform !== nuevo) escena.style.transform = nuevo
      ultimaFirma = anchoDisp + 'x' + altoDisp + '|' + escena.style.width + '|' + escena.scrollHeight
      // Si hay que comprimir tanto, esa diapositiva tiene demasiado contenido y
      // hay que partirla, no encogerla mas. Se avisa en vez de callarlo.
      if (import.meta.env.DEV && mejor.k < 0.7) {
        console.warn('[presentacion] lamina muy comprimida:', seccion.id, 'paso', paso, mejor.k.toFixed(2))
      }
    }
    ajustar()
    window.addEventListener('resize', ajustar)
    // Y cuando cambia el contenido SIN que App re-renderice: al revelar el
    // feedback de una pregunta crece la diapositiva, y ese estado vive dentro
    // del componente hijo. La reentrada que provoca el propio ajuste la corta
    // la firma de arriba, no el observador.
    const obs = new ResizeObserver(ajustar)
    const escena = el.querySelector('.seccion')
    if (escena) obs.observe(escena)
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
        <div className="seccion" data-remate={presentacion && paso === pasosDe(seccion) - 1 ? '' : undefined}>
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
              paso >= reparto.total && (
                <>
                  {seccion.consigna && (
                    <p className="actividad__consigna">
                      <span aria-hidden="true">{seccion.consigna.icono ?? '✋'}</span>{' '}
                      {seccion.consigna.texto}
                    </p>
                  )}
                  <Interactivo paso={paso - reparto.total} />
                </>
              )
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
