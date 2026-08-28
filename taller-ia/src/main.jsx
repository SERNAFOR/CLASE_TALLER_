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

// Modo proyección: atributo en <html>, activado por ?proyeccion en la URL.
if (proyeccion) document.documentElement.setAttribute('data-proyeccion', '')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TallerProvider valor={DATOS}>
      <App seccionInicial={seccion} proyeccion={proyeccion} />
    </TallerProvider>
  </StrictMode>,
)
