import { useState } from 'react'

// Quiz de opciones: una lista de alternativas y varias situaciones en las que
// hay que elegir cuál corresponde, con feedback inmediato por situación.
//
// Lo comparten "¿Quién responde por este dato?" (dueño / custodio / usuario) y
// "Verde, ámbar, rojo" (el termómetro de riesgo). Misma pantalla, distintos
// datos: por eso el componente los recibe por prop en vez de leerlos él.
export default function QuizOpciones({ datos, paso }) {
  // En presentacion llega un `paso`: se muestra UNA situacion por diapositiva,
  // y la ultima es el marcador. Sin `paso` (taller general) se muestran todas.
  const enSala = paso != null
  const [respuestas, setRespuestas] = useState({}) // idx situación → id rol elegido

  const responder = (i, rolId) => {
    if (respuestas[i] !== undefined) return
    setRespuestas((r) => ({ ...r, [i]: rolId }))
  }

  const respondidas = Object.keys(respuestas).length
  const aciertos = datos.situaciones.filter((s, i) => respuestas[i] === s.correcto).length

  return (
    <div className="rdatos">
      {/* La leyenda de opciones se muestra una sola vez: repetirla en cada
          pregunta roba la mitad de la pantalla y encoge lo que hay que leer.
          Los botones de cada situacion ya llevan el nombre y el icono. */}
      {(!enSala || paso === 0) && (
      <div className="rdatos__roles">
        {datos.roles.map((r) => (
          <div className="rdatos__rol" key={r.id}>
            <span className="rdatos__rol-icono">{r.icono}</span>
            <div>
              <strong>{r.nombre}</strong>
              <p>{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
      )}

      <div className="rdatos__situaciones">
        {datos.situaciones.map((s, i) => {
          if (enSala && i !== paso) return null
          const elegida = respuestas[i]
          const lista = elegida !== undefined
          return (
            <div className="rdatos__situacion" key={i}>
              <p className="rdatos__texto">
                <span className="rdatos__num">{i + 1}</span> {s.texto}
              </p>
              <div className="rdatos__botones">
                {datos.roles.map((r) => {
                  let clase = 'btn rdatos__btn'
                  if (lista) {
                    if (r.id === s.correcto) clase += ' rdatos__btn--correcto'
                    else if (r.id === elegida) clase += ' rdatos__btn--mal'
                  }
                  return (
                    <button key={r.id} className={clase} onClick={() => responder(i, r.id)} disabled={lista}>
                      {/* Glifo ademas del color: entre 50 adultos hay 3 o 4 que no
                          distinguen el verde del rojo, y proyectado no lo distingue nadie. */}
                      {lista && r.id === s.correcto && '✓ '}
                      {lista && r.id === elegida && r.id !== s.correcto && '✗ '}
                      {r.icono} {r.nombre}
                    </button>
                  )
                })}
              </div>
              {lista && (
                <p className={'rdatos__feedback' + (elegida === s.correcto ? ' rdatos__feedback--ok' : '')}>
                  {elegida === s.correcto ? '✅ ' : '❌ '}
                  {s.explica}
                </p>
              )}
            </div>
          )
        })}
      </div>

      {(enSala ? paso >= datos.situaciones.length : respondidas > 0) && (
        <div className="rdatos__resultado">
          {respondidas === datos.situaciones.length ? (
            <strong>Acertaste {aciertos} de {datos.situaciones.length}.</strong>
          ) : (
            <span>
              {respondidas} de {datos.situaciones.length} respondidas.
            </span>
          )}{' '}
          <button className="btn" onClick={() => setRespuestas({})}>↺ Reintentar</button>
        </div>
      )}

      {/* La leccion es el remate: en sala se guarda para la ultima diapositiva. */}
      {(!enSala || paso >= datos.situaciones.length) && (
        <p className="rdatos__leccion">💡 {datos.leccion}</p>
      )}
    </div>
  )
}
