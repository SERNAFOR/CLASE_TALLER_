import { TallerContext } from './contexto'

export function TallerProvider({ valor, children }) {
  // `valor` es un module namespace object: identidad estable, no hace falta useMemo.
  return <TallerContext.Provider value={valor}>{children}</TallerContext.Provider>
}
