import { useTaller } from '../taller/contexto'
import Cadena from './Cadena'

// Que pasa, paso a paso, cuando un diagnostico se pega en un chat publico.
export default function Fuga() {
  const { fuga } = useTaller()
  return <Cadena datos={fuga} />
}
