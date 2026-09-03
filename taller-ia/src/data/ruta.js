// Decide qué taller (y opcionalmente qué sección) mostrar al arrancar.
// Se evalúa UNA sola vez: no hay listeners ni history, porque entre talleres
// no se navega. Menos piezas móviles = menos cosas que fallen en vivo.

const ALIAS = {
  '': 'conaf',
  conaf: 'conaf',
  uia: 'conaf',
  'index.html': 'conaf',
  personal: 'personal',
  rrhh: 'personal',
  personas: 'personal',
  // La misma jornada contada como charla: sin actividades, solo preguntas.
  personal2: 'personal2',
  charla: 'personal2',
  ted: 'personal2',
}

function norm(s) {
  return (s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // por si alguien teclea acentos
    .replace(/^[/#]+|\/+$/g, '') // barras y # de los extremos
    .trim()
}

// Devuelve { taller, seccion, proyeccion }. `seccion` puede ser null.
export function resolverInicio(loc = window.location) {
  const q = new URLSearchParams(loc.search)

  // Red de seguridad 1: ?taller=personal no depende de nada del servidor.
  // Ojo: solo se consulta si el parámetro viene de verdad. ALIAS[''] es 'conaf',
  // así que sin este guard la query ganaría siempre y taparía a la ruta.
  const porQuery = q.has('taller') ? ALIAS[norm(q.get('taller'))] : undefined
  const seccionQuery = norm(q.get('s')) || null

  // Red de seguridad 2: el hash ni siquiera llega a GitHub Pages.
  // Acepta #personal, #privacidad y #personal/privacidad.
  const partes = norm(loc.hash).split('/').filter(Boolean)
  let porHash = null
  let seccionHash = null
  if (partes.length) {
    if (ALIAS[partes[0]] !== undefined) {
      porHash = ALIAS[partes[0]]
      seccionHash = partes[1] || null
    } else {
      seccionHash = partes[0]
    }
  }

  // La ruta real, relativa al base del sitio.
  const base = norm(import.meta.env.BASE_URL) // 'clase_taller_'
  let ruta = norm(decodeURIComponent(loc.pathname))
  if (base && (ruta === base || ruta.startsWith(base + '/'))) {
    ruta = norm(ruta.slice(base.length))
  }
  const porRuta = ALIAS[ruta.split('/')[0]]

  return {
    taller: porQuery ?? porHash ?? porRuta ?? 'conaf',
    seccion: seccionQuery ?? seccionHash ?? null,
    // Modo proyección: se activa por URL, no por botón. Un parámetro no se
    // pulsa por accidente delante de 50 personas.
    proyeccion: q.has('proyeccion'),
  }
}
