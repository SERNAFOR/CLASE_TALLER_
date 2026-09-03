// Registro de talleres. Los dos módulos viajan en el mismo bundle a propósito:
// no hay nada que ocultar y un import() dinámico volvería asíncrono el arranque
// a cambio de nada. No lo "optimices" con lazy loading.
import * as conaf from './contenido'
import * as personal from './contenidoPersonal'
import * as personal2 from './contenidoPersonal2'

export const TALLERES = { conaf, personal, personal2 }
export const TALLER_POR_DEFECTO = 'conaf'

// El contrato es "ambos módulos exportan los mismos nombres". Sin esto, un
// typo (promptEjmplo) da undefined en silencio y revienta delante de la sala.
if (import.meta.env.DEV) {
  // Se comprueban TODOS los talleres derivados, no solo uno: en cuanto hubo un
  // segundo, revisar solo el primero es una prueba que ya no prueba lo que dice.
  for (const [nombre, mod] of Object.entries({ personal, personal2 })) {
    // Solo los que FALTAN son un problema: una sección apuntando a un dato que
    // no existe revienta en pantalla. Que exporte de más es esperado — tienen
    // actividades propias que el taller general no tiene.
    const faltan = Object.keys(conaf).filter((k) => !(k in mod))
    if (faltan.length) {
      console.error(`[talleres] a ${nombre} le faltan exports →`, faltan)
    }
    // Y que una sección apunte a un interactivo sin datos, también.
    const sinDatos = mod.secciones
      .filter((s) => s.interactivo && !(s.interactivo in mod))
      .map((s) => `${s.id} → ${s.interactivo}`)
    if (sinDatos.length) {
      console.error(`[talleres] ${nombre}: interactivos sin datos →`, sinDatos)
    }
  }
}
