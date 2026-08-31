import { useTaller } from '../taller/contexto'
import Cadena from './Cadena'

// Una alucinacion que empieza en un plazo inventado y acaba en una impugnacion.
export default function BolaDeNieve() {
  const { cadena } = useTaller()
  return <Cadena datos={cadena} />
}
