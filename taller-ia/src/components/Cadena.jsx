import { useState } from 'react'

// Cadena de consecuencia: cinco pasos que se revelan de uno en uno, y en cada
// uno crece el número de personas involucradas y el tiempo que cuesta deshacerlo.
//
// La comparten "La bola de nieve" (una alucinación hasta la impugnación) y
// "El dato que se escapó" (un diagnóstico pegado en un chat). Misma pantalla,
// distintos datos: por eso los recibe por prop.
//
// Pensada para proyectar: el facilitador pulsa, la sala mira, y el remate es
// que el primer paso era el único barato de arreglar.
export default function Cadena({ datos }) {
  const [visibles, setVisibles] = useState(1)
  const total = datos.pasos.length
  const completa = visibles >= total
  const ultimo = datos.pasos[Math.min(visibles, total) - 1]

  return (
    <div className="cadena">
      <p className="cadena__pregunta">{datos.pregunta}</p>

      <ol className="cadena__lista">
        {datos.pasos.slice(0, visibles).map((p, i) => (
          <li
            key={i}
            className={'cadena__paso' + (i === visibles - 1 ? ' cadena__paso--nuevo' : '')}
          >
            <span className="cadena__n">{i + 1}</span>
            <div className="cadena__cuerpo">
              <p className="cadena__que">{p.que}</p>
              <div className="cadena__coste">
                <span className="cadena__dato">
                  <strong>{p.gente}</strong> {p.gente === 1 ? 'persona' : 'personas'}
                </span>
                <span className="cadena__dato">
                  <strong>{p.arreglo}</strong> para deshacerlo
                </span>
              </div>
            </div>
          </li>
        ))}
      </ol>

      {/* La barra crece con la cadena: es la imagen de la bola de nieve. */}
      <div className="cadena__barra" aria-hidden="true">
        <div
          className="cadena__barra-fill"
          style={{ width: `${(visibles / total) * 100}%` }}
        />
      </div>

      <div className="cadena__acciones">
        {!completa ? (
          <button className="btn btn--primary" onClick={() => setVisibles((v) => v + 1)}>
            ¿Y después? →
          </button>
        ) : (
          <button className="btn" onClick={() => setVisibles(1)}>
            ↺ Desde el principio
          </button>
        )}
        <span className="cadena__contador">
          paso {Math.min(visibles, total)} de {total}
        </span>
      </div>

      {completa && <p className="cadena__remate">{datos.remate}</p>}

      <p className="cadena__leccion">💡 {datos.leccion}</p>

      {/* Accesible para lectores de pantalla aunque no se haya revelado todo. */}
      <span className="u-oculto">{ultimo ? ultimo.que : ''}</span>
    </div>
  )
}
