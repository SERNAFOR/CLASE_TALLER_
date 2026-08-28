import { createContext, useContext } from 'react'
import * as conaf from '../data/contenido'

// El valor por defecto es el taller CONAF a proposito: si algun dia faltara el
// Provider, la app muestra el taller de siempre en vez de morir con pantalla
// blanca. En un auditorio en vivo esa diferencia lo es todo.
export const TallerContext = createContext(conaf)

export function useTaller() {
  return useContext(TallerContext)
}
