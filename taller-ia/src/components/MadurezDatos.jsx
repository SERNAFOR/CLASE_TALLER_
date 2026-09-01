import { useState } from 'react'
import { useTaller } from '../taller/contexto'

// Actividad de gobernanza G3: autodiagnóstico exprés de madurez de datos.
// 5 preguntas sí/no → nivel (Inicial / En desarrollo / Básico logrado).
export default function MadurezDatos({ paso }) {
  // En sala, una pregunta por diapositiva: se levanta la mano, se marca lo que
  // diga la mayoria, y se pasa. La ultima diapositiva es el resultado.
  const enSala = paso != null
  const { madurezDatos } = useTaller()
  const [respuestas, setRespuestas] = useState({}) // idx → true (sí) / false (no)
  const [resultado, setResultado] = useState(false)

  const responder = (i, valor) => {
    setRespuestas((r) => ({ ...r, [i]: valor }))
    setResultado(false)
  }

  const contestadas = Object.keys(respuestas).length
  const total = madurezDatos.preguntas.length
  const puntaje = Object.values(respuestas).filter(Boolean).length
  const nivel = madurezDatos.niveles.find((n) => puntaje >= n.min && puntaje <= n.max)

  return (
    <div className="mdatos">
      <ol className="mdatos__preguntas">
        {madurezDatos.preguntas.map((p, i) =>
          enSala && i !== paso ? null : (
          <li key={i} className="mdatos__pregunta">
            <span className="mdatos__texto">{p}</span>
            <span className="mdatos__opciones">
              <button
                className={'btn mdatos__btn' + (respuestas[i] === true ? ' mdatos__btn--si' : '')}
                onClick={() => responder(i, true)}
              >
                Sí
              </button>
              <button
                className={'btn mdatos__btn' + (respuestas[i] === false ? ' mdatos__btn--no' : '')}
                onClick={() => responder(i, false)}
              >
                No
              </button>
            </span>
            </li>
          ),
        )}
      </ol>

      {!enSala && (
        <button
          className="btn btn--primary"
          onClick={() => setResultado(true)}
          disabled={contestadas < total || resultado}
        >
          {contestadas < total
            ? `Responde las ${total} preguntas (${contestadas}/${total})`
            : '📏 Ver mi resultado'}
        </button>
      )}

      {(enSala ? paso >= total && nivel : resultado && nivel) && (
        <div className="mdatos__resultado">
          <div className="mdatos__nivel">
            <span className="mdatos__nivel-icono">{nivel.icono}</span>
            <div>
              <strong>{puntaje} de {total} · Nivel: {nivel.nombre}</strong>
              <p>{nivel.texto}</p>
            </div>
          </div>
          <div className="mdatos__barra">
            <div className="mdatos__barra-fill" style={{ width: `${(puntaje / total) * 100}%` }} />
          </div>
        </div>
      )}

      {(!enSala || paso >= total) && (
        <p className="mdatos__leccion">💡 {madurezDatos.leccion}</p>
      )}
    </div>
  )
}
