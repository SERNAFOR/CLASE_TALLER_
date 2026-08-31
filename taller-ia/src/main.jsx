import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TALLERES, TALLER_POR_DEFECTO } from './data/talleres'
import { TallerProvider } from './taller/TallerContext'
import { resolverInicio } from './data/ruta'

// La URL se lee una sola vez, aquí. App queda ignorante de rutas.
const { taller, seccion, proyeccion } = resolverInicio()
const DATOS = TALLERES[taller] ?? TALLERES[TALLER_POR_DEFECTO]

// Modo proyección: tamaño de sala. Se activa con ?proyeccion en la URL y,
// además, siempre que el taller sea una presentación — no tiene sentido que
// una charla para 50 personas arranque en tamaño de escritorio. Con ?web se
// desactiva, para poder revisar el contenido cómodamente en el notebook.
const enSala = (proyeccion || DATOS.marca?.presentacion === true) &&
  !new URLSearchParams(window.location.search).has('web')
if (enSala) document.documentElement.setAttribute('data-proyeccion', '')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TallerProvider valor={DATOS}>
      <App seccionInicial={seccion} proyeccion={enSala} />
    </TallerProvider>
  </StrictMode>,
)
