import { useTaller } from '../taller/contexto'
import QuizOpciones from './QuizOpciones'

// En cada situacion, quien deberia actuar: el dueno del dato, el custodio o el usuario.
export default function RolesDatos({ paso }) {
  const { rolesDatos } = useTaller()
  return <QuizOpciones datos={rolesDatos} paso={paso} />
}
