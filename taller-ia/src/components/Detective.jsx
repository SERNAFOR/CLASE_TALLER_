import { useState } from 'react'
import { useTaller } from '../taller/contexto'

// Ejercicio "detective de alucinaciones": el usuario marca las frases que cree
// falsas; al comprobar, se revela cuáles eran inventadas y por qué.
export default function Detective({ paso }) {
  // En sala, una frase por diapositiva: se lee, la sala vota con el pulgar, se
  // marca, y al avanzar se revela. La ultima diapositiva es el marcador.
  const enSala = paso != null
  const { detective } = useTaller()
  const [marcadas, setMarcadas] = useState({})
  const [revelarTodo, setRevelarTodo] = useState(false)
  const [revelados, setRevelados] = useState({})

  const toggle = (i) => {
    if (enSala) {
      // Primer clic marca, segundo revela: el ritmo lo lleva quien conduce.
      if (revelados[i]) return
      if (marcadas[i] === undefined) setMarcadas((m) => ({ ...m, [i]: true }))
      else setRevelados((r) => ({ ...r, [i]: true }))
      return
    }
    if (revelarTodo) return
    setMarcadas((m) => ({ ...m, [i]: !m[i] }))
  }

  // Desglose por tipo de error (el error caro para un fiscalizador es dejar pasar la mentira).
  const totalFalsas = detective.frases.filter((f) => f.falsa).length
  const cazadas = detective.frases.filter((f, i) => f.falsa && marcadas[i]).length
  const escapadas = totalFalsas - cazadas // mentiras que pasaron: el error grave
  const falsosPositivos = detective.frases.filter((f, i) => !f.falsa && marcadas[i]).length

  return (
    <div className="detective">
      <p className="detective__intro">{detective.intro}</p>
      {/* Sin contador, un texto que habla de "las ocho frases" contradice a la
          pantalla, que muestra una. El contador las reconcilia y de paso orienta
          a la sala: se sabe cuanto falta. */}
      {enSala && paso < detective.frases.length && (
        <p className="actividad__contador">
          Frase {paso + 1} de {detective.frases.length}
        </p>
      )}

      <ul className="detective__lista">
        {detective.frases.map((f, i) => {
          if (enSala && i !== paso) return null
          const marcada = !!marcadas[i]
          // En sala cada frase se revela en su propia diapositiva, al pulsar.
          const revelado = enSala ? !!revelados[i] : revelarTodo
          const discrepa = revelado && Boolean(f.falsa) !== marcada
          let clase = 'detective__frase'
          if (revelado) {
            if (f.falsa) clase += ' detective__frase--falsa'
            else clase += ' detective__frase--ok'
            if (discrepa) clase += ' detective__frase--discrepa'
          } else if (marcada) {
            clase += ' detective__frase--marcada'
          }
          return (
            <li key={i}>
              <button className={clase} onClick={() => toggle(i)} disabled={revelado}>
                <span className="detective__check">
                  {revelado ? (f.falsa ? '🚫' : '✔️') : marcada ? '🚩' : '○'}
                </span>
                <span className="detective__txt">
                  {f.texto}
                  {revelado && discrepa && f.falsa && (
                    <span className="detective__discrepa-tag">⚠️ Se te pasó esta mentira</span>
                  )}
                  {revelado && discrepa && !f.falsa && (
                    <span className="detective__discrepa-tag detective__discrepa-tag--leve">Era verdadera</span>
                  )}
                  {revelado && f.falsa && (
                    <span className="detective__porque">⚠️ {f.porque}</span>
                  )}
                </span>
              </button>
            </li>
          )
        })}
      </ul>

      {!enSala && !revelarTodo ? (
        <button className="btn btn--primary" onClick={() => setRevelarTodo(true)}>
          🔍 Comprobar mis sospechas
        </button>
      ) : (
        (!enSala || paso >= detective.frases.length) && (
        <div className="detective__resultado">
          <p className="detective__score">
            🎯 Cazaste <strong>{cazadas} de {totalFalsas}</strong> mentiras.
          </p>
          {escapadas > 0 && (
            <p className="detective__fila detective__fila--mal">
              🚨 Se te pasaron <strong>{escapadas}</strong> — y dejar pasar una mentira a un
              documento oficial es el error caro.
            </p>
          )}
          {falsosPositivos > 0 && (
            <p className="detective__fila detective__fila--leve">
              🤨 Marcaste {falsosPositivos} frase{falsosPositivos > 1 ? 's' : ''} verdadera
              {falsosPositivos > 1 ? 's' : ''} como falsa: desconfiar de más también cuesta tiempo.
            </p>
          )}
          {escapadas === 0 && falsosPositivos === 0 && (
            <p className="detective__fila detective__fila--ok">
              👏 Impecable: cazaste todas las mentiras sin descartar ninguna verdad.
            </p>
          )}
          <button
            className="btn"
            onClick={() => {
              setRevelarTodo(false)
              setRevelados({})
              setMarcadas({})
            }}
          >
            ↺ Reintentar
          </button>
        </div>
        )
      )}

      {(!enSala || paso >= detective.frases.length) && (
        <p className="detective__leccion">💡 {detective.leccion}</p>
      )}
    </div>
  )
}
