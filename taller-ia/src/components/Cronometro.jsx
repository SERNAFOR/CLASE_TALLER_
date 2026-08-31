import { useEffect, useRef, useState } from 'react'
import { useTaller } from '../taller/contexto'

// "Lo que cuesta hacerlo a mano": la misma tarea real, a mano y con IA, con dos
// relojes corriendo en pantalla a velocidad comprimida.
//
// El remate no es "mira qué rápido". Es que el reloj de la derecha NO se para
// al terminar de redactar: sigue corriendo unos minutos etiquetados "revisar y
// firmar". Lo que la IA ahorra es el tecleo, no el criterio.

const DURACION_MS = 9000 // los dos relojes terminan dentro de estos 9 segundos

function mmss(min) {
  const m = Math.floor(min)
  const s = Math.round((min - m) * 60)
  return `${m}:${String(s).padStart(2, '0')}`
}

function Columna({ via, t, escala }) {
  // Cuánto lleva consumido de cada tramo en el minuto actual. Sin mutar nada:
  // cada tramo mira cuántos minutos van antes que él y se queda con su parte.
  const tramos = via.tramos.map((tr, i) => {
    const antes = via.tramos.slice(0, i).reduce((a, x) => a + x.min, 0)
    return { ...tr, hecho: Math.max(0, Math.min(t - antes, tr.min)) }
  })
  const totalVia = via.tramos.reduce((a, tr) => a + tr.min, 0)
  const terminado = t >= totalVia

  return (
    <div className={'crono__col crono__col--' + via.id}>
      <div className="crono__cab">
        <span className="crono__icono">{via.icono}</span>
        <strong>{via.etiqueta}</strong>
      </div>

      <p className="crono__reloj">
        {mmss(Math.min(t, totalVia))}
        {terminado && <span className="crono__listo"> ✓</span>}
      </p>

      <ul className="crono__tramos">
        {tramos.map((tr, i) => {
          const pct = (tr.hecho / tr.min) * 100
          return (
            <li
              key={i}
              className={
                'crono__tramo' +
                (tr.hecho >= tr.min ? ' crono__tramo--hecho' : '') +
                (tr.revision ? ' crono__tramo--revision' : '')
              }
            >
              <span className="crono__tramo-txt">
                {tr.texto} <em>{tr.min} min</em>
              </span>
              <span className="crono__tramo-barra">
                <span className="crono__tramo-fill" style={{ width: `${pct}%` }} />
              </span>
            </li>
          )
        })}
      </ul>

      {/* La barra total de cada vía, a la misma escala: es la comparación. */}
      <div className="crono__total" aria-hidden="true">
        <div
          className="crono__total-fill"
          style={{ width: `${(Math.min(t, totalVia) / escala) * 100}%` }}
        />
      </div>
    </div>
  )
}

export default function Cronometro() {
  const { cronometro } = useTaller()
  const [t, setT] = useState(0) // minutos simulados transcurridos
  const [corriendo, setCorriendo] = useState(false)
  const rafRef = useRef(null)

  const totalDe = (via) => via.tramos.reduce((a, tr) => a + tr.min, 0)
  const escala = Math.max(...cronometro.vias.map(totalDe))

  useEffect(() => {
    if (!corriendo) return
    const inicio = performance.now()
    const paso = (ahora) => {
      const avance = Math.min((ahora - inicio) / DURACION_MS, 1)
      setT(avance * escala)
      if (avance < 1) rafRef.current = requestAnimationFrame(paso)
      else setCorriendo(false)
    }
    rafRef.current = requestAnimationFrame(paso)
    return () => cancelAnimationFrame(rafRef.current)
  }, [corriendo, escala])

  const arrancar = () => {
    setT(0)
    setCorriendo(true)
  }

  return (
    <div className="crono">
      <p className="crono__tarea">
        <strong>La tarea:</strong> {cronometro.tarea}
      </p>

      <div className="crono__cols">
        {cronometro.vias.map((via) => (
          <Columna key={via.id} via={via} t={t} escala={escala} />
        ))}
      </div>

      <div className="crono__acciones">
        <button className="btn btn--primary" onClick={arrancar} disabled={corriendo}>
          {corriendo ? '⏱️ Corriendo…' : t > 0 ? '↺ Otra vez' : '⏱️ Poner los dos relojes en marcha'}
        </button>
      </div>

      {t >= escala && <p className="crono__remate">{cronometro.remate}</p>}

      <p className="crono__leccion">💡 {cronometro.leccion}</p>
    </div>
  )
}
