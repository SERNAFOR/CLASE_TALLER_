// Registro de talleres. Los dos módulos viajan en el mismo bundle a propósito:
// no hay nada que ocultar y un import() dinámico volvería asíncrono el arranque
// a cambio de nada. No lo "optimices" con lazy loading.
import * as conaf from './contenido'
import * as personal from './contenidoPersonal'

export const TALLERES = { conaf, personal }
export const TALLER_POR_DEFECTO = 'conaf'

// El contrato es "ambos módulos exportan los mismos nombres". Sin esto, un
// typo (promptEjmplo) da undefined en silencio y revienta delante de la sala.
if (import.meta.env.DEV) {
  const faltan = Object.keys(conaf).filter((k) => !(k in personal))
  const sobran = Object.keys(personal).filter((k) => !(k in conaf))
  if (faltan.length || sobran.length) {
    console.error('[talleres] desajuste de exports →', { faltan, sobran })
  }
}
