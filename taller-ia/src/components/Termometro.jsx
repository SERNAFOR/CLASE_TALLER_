import { useTaller } from '../taller/contexto'
import QuizOpciones from './QuizOpciones'

// Termometro de riesgo: seis tareas del area, y la sala decide si son verde, ambar o rojo.
export default function Termometro({ paso }) {
  const { termometro } = useTaller()
  return <QuizOpciones datos={termometro} paso={paso} />
}
