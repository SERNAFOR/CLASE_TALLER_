// Taller de IA · Gerencia de Desarrollo de las Personas (CONAF)
//
// Exporta EXACTAMENTE los mismos nombres que contenido.js, así es un reemplazo
// directo. Lo que no cambia se re-exporta al final, en una línea.
//
// DOS REGLAS QUE GOBIERNAN ESTE ARCHIVO
//
// 1. CONAF es corporación de derecho privado: su personal se rige por el
//    CÓDIGO DEL TRABAJO, no por el Estatuto Administrativo. Nada de "feriado
//    de 15 días hábiles", "permiso administrativo" ni "Lista 1": eso es del
//    Estatuto y aquí no aplica.
//
// 2. Esta sala sabe de licencias médicas más que quien escribe el taller.
//    Cada plazo y cada norma citada está listada en VALIDAR-CONTENIDO-LEGAL.md
//    y hay que contrastarla contra el texto oficial ANTES de dictar la jornada.
//    Un dato inventado, en un taller que enseña a cazar datos inventados, no se
//    perdona.
//
// TONO: los textos hablan a UNA SALA, no a alguien con el mouse. El taller se
// proyecta y quien hace clic es el facilitador.

// ===================== Identidad =====================

export const marca = {
  id: 'personal',
  // Esto no es un taller con ejercicios: es una charla proyectada. Activa el
  // motor de diapositivas y el tamano de sala. El taller general no lo pone.
  presentacion: true,
  titulo: 'Taller de IA',
  sub: 'UIA · Gerencia de Desarrollo de las Personas',
  // La barra lateral son 270px: ahi va la forma corta.
  subNav: 'UIA · Desarrollo de las Personas',
  docTitle: 'Taller de IA · Gerencia de Desarrollo de las Personas · CONAF',
  pie: 'Gobierno de Chile · UIA · CONAF · 2026',
}

export const grupos = [
  { id: 'gobernanza', etiqueta: 'Datos de personas', icono: '🗂️' },
  { id: 'taller', etiqueta: 'El Taller de IA', icono: '📖' },
  { id: 'lab', etiqueta: 'El Laboratorio', icono: '🧪' },
  { id: 'final', etiqueta: 'Para cerrar', icono: '🏁' },
]

// ===================== Secciones =====================
// El Laboratorio va ordenado con el NÚCLEO primero: recorriendo el menú de
// arriba abajo se dicta la versión corta. Cada subtítulo dice si la sección es
// núcleo, de segundo nivel u opcional, para poder recortar sin improvisar.

export const secciones = [
  {
    id: 'apertura',
    grupo: 'gobernanza',
    icono: '✋',
    titulo: 'Antes de empezar',
    subtitulo: 'Tres preguntas, y las contestan ustedes',
    bloques: [
      {
        tipo: 'pregunta',
        icono: '✋',
        consigna: 'A mano alzada — cuento en voz alta',
        texto: '¿Quién NO ha usado nunca ChatGPT, Copilot o Gemini?',
      },
      {
        tipo: 'pregunta',
        icono: '✋',
        consigna: 'A mano alzada',
        texto: 'De los que sí: ¿quién la ha usado para algo del trabajo?',
      },
      {
        tipo: 'pregunta',
        icono: '✋',
        consigna: 'A mano alzada',
        texto: '¿Y a quién le han dicho que no la use?',
      },
      {
        tipo: 'frase',
        texto: 'Eso que acaban de levantar la mano es el punto de partida real. Vamos desde ahí.',
      },
    ],
  },

  {
    id: 'roles-datos',
    grupo: 'gobernanza',
    icono: '🧑‍⚖️',
    titulo: '¿Quién responde por este dato?',
    subtitulo: 'los roles de la gobernanza',
    consigna: { icono: '👑', texto: '¿A quién le toca actuar? Levanten la tarjeta.' },
    interactivo: 'rolesDatos',
    bloques: [],
  },

  {
    id: 'madurez-datos',
    grupo: 'gobernanza',
    icono: '📏',
    titulo: '¿Qué tan maduros son tus datos?',
    subtitulo: 'censo de la gerencia',
    consigna: { icono: '✋', texto: 'Sí o no, a mano alzada. Marco lo que diga la mayoría.' },
    interactivo: 'madurezDatos',
    bloques: [],
  },

  {
    id: 'que-es-ia',
    grupo: 'taller',
    icono: '🧠',
    titulo: '¿Qué es la IA?',
    subtitulo: 'Olviden la ciencia ficción',
    bloques: [
      {
        tipo: 'pregunta',
        icono: '🗣️',
        consigna: 'Que lo diga alguien en voz alta',
        texto: 'Si tuvieran que explicarle a un colega qué es la inteligencia artificial, ¿qué le dirían?',
        nota: 'No hay respuesta mala. Sirve cualquier cosa que se les ocurra.',
      },
      {
        tipo: 'parrafo',
        texto:
          'No es un cerebro ni una conciencia. Es un sistema que ha leído una cantidad enorme de ' +
          'texto y aprendió a predecir qué palabra viene después. Eso es todo — y resulta que ' +
          'con eso ya se puede redactar, resumir y ordenar bastante bien.',
      },
      {
        tipo: 'destacado',
        icono: '🎓',
        titulo: 'El practicante que llegó el lunes',
        texto:
          'Leyó todo el archivo en una noche y no conoce a nadie. Escribe rápido, redacta ' +
          'decente, y no sabe que a esa unidad hay que mandarle el oficio dos veces. Ustedes ' +
          'tramitan practicantes: ya saben exactamente cuánto sirve y cuánto hay que revisarle. ' +
          '(Con todo respeto a los practicantes de verdad, que trabajan más que nadie.)',
      },
      {
        tipo: 'destacado',
        icono: '⏱️',
        titulo: 'Dónde sí ahorra tiempo, hoy',
        texto:
          '"Toma estas 60 páginas de bases de concurso y hazme un resumen para el comité." Te lo ' +
          'devuelve en cinco segundos, y tú lo revisas en diez minutos en vez de escribirlo en ' +
          'dos horas. Ese es el trato.',
      },
      {
        tipo: 'frase',
        texto: 'No firma. Y aquí, el que firma es el que responde.',
      },
    ],
  },

  {
    id: 'cronometro',
    grupo: 'lab',
    icono: '⏱️',
    titulo: 'Lo que cuesta hacerlo a mano',
    subtitulo: 'La misma tarea, con y sin IA, con los relojes a la vista',
    consigna: { icono: '⏱️', texto: '¿Cuánto creen que cuesta hacer esto a mano? Miren los dos relojes.' },
    interactivo: 'cronometro',
    bloques: [],
  },

  // ===================== LABORATORIO · NÚCLEO =====================
  {
    id: 'prompt',
    grupo: 'lab',
    icono: '✍️',
    titulo: 'Pídelo bien',
    subtitulo: 'la única habilidad que importa hoy',
    consigna: { icono: '🗣️', texto: '¿Qué le falta a esta instrucción? Grítenmelo y lo escribo.' },
    interactivo: 'prompt',
    bloques: [],
  },

  // ===================== LABORATORIO · OPCIONALES =====================
  {
    id: 'sube-nivel',
    grupo: 'lab',
    icono: '📈',
    titulo: 'De "necesito unos datos" a un dato que sirve',
    subtitulo: 'el mismo encargo, tres niveles',
    consigna: { icono: '🤔', texto: 'Tres formas de pedir lo mismo. ¿En cuál empezarían a confiar?' },
    interactivo: 'subeNivel',
    bloques: [],
  },

  {
    id: 'detective',
    grupo: 'lab',
    icono: '🕵️',
    titulo: 'Detective de alucinaciones',
    subtitulo: 'caza los datos que la IA inventó',
    consigna: { icono: '👍', texto: '¿Verdad o inventado? Pulgar arriba o abajo.' },
    interactivo: 'detective',
    bloques: [],
  },

  {
    id: 'cadena',
    grupo: 'lab',
    icono: '❄️',
    titulo: 'La bola de nieve',
    subtitulo: 'Un plazo inventado, cinco pasos después',
    consigna: { icono: '❄️', texto: 'El plazo era falso y ya salió del chat. ¿Y ahora qué pasa?' },
    interactivo: 'cadena',
    bloques: [],
  },

  {
    id: 'comparar-ia',
    grupo: 'lab',
    icono: '🤖',
    titulo: 'Le preguntamos a las tres',
    subtitulo: 'misma pregunta, ChatGPT, Claude y Gemini',
    consigna: { icono: '🤖', texto: 'Tres respuestas a la misma pregunta. ¿Cuál usarían, y para qué?' },
    interactivo: 'compararIA',
    bloques: [],
  },

  // ===================== LABORATORIO · SEGUNDO NIVEL =====================
  {
    id: 'analisis-ley',
    grupo: 'lab',
    icono: '⚖️',
    titulo: 'Una palabra lo cambia todo',
    subtitulo: 'caso: el proceso de licencias',
    consigna: { icono: '⚖️', texto: 'Voy a añadir una sola palabra. ¿Qué creen que va a cambiar?' },
    interactivo: 'analisisLey',
    bloques: [],
  },

  {
    id: 'publicos',
    grupo: 'lab',
    icono: '🗣️',
    titulo: '¿Y ahora cómo se lo explico a…?',
    subtitulo: 'al trabajador, a la jefatura, al gremio, a la Dirección del Trabajo',
    consigna: { icono: '🗣️', texto: '¿A quién se lo explicamos primero? Ustedes eligen.' },
    interactivo: 'publicos',
    bloques: [],
  },

  {
    id: 'privacidad',
    grupo: 'lab',
    icono: '🔒',
    titulo: 'Qué NO contarle a la IA',
    subtitulo: 'el ejercicio más importante del día',
    consigna: { icono: '🔒', texto: 'Griten "¡tacha!" cuando pase por algo que NO debería ir ahí.' },
    interactivo: 'privacidad',
    bloques: [],
  },

  {
    id: 'fuga',
    grupo: 'lab',
    icono: '💧',
    titulo: 'El dato que se escapó',
    subtitulo: 'Un diagnóstico pegado en un chat, paso a paso',
    consigna: { icono: '💧', texto: 'El diagnóstico ya salió de la institución. ¿Hasta dónde llega?' },
    interactivo: 'fuga',
    bloques: [],
  },

  {
    id: 'doc-accion',
    grupo: 'lab',
    icono: '⚙️',
    titulo: 'Del artículo a la lista de pendientes',
    subtitulo: 'de texto normativo a checklist',
    consigna: { icono: '⚙️', texto: '¿Cuántos pasos concretos creen que saca de este párrafo?' },
    interactivo: 'docAccion',
    bloques: [],
  },

  {
    id: 'termometro',
    grupo: 'lab',
    icono: '🌡️',
    titulo: 'Verde, ámbar, rojo',
    subtitulo: 'Dónde sí, dónde con cuidado, y dónde no',
    consigna: { icono: '🌡️', texto: '¿Verde, ámbar o rojo? Levanten la tarjeta.' },
    interactivo: 'termometro',
    bloques: [],
  },

  {
    id: 'casos-reales',
    grupo: 'lab',
    icono: '📰',
    titulo: 'A otros ya les pasó',
    subtitulo: 'Casos públicos de IA decidiendo sobre personas',
    bloques: [
      {
        tipo: 'pregunta',
        icono: '🤔',
        consigna: 'Levanten la mano si creen que sí',
        texto: '¿Creen que una IA entrenada con diez años de contrataciones de una empresa contrataría de forma justa?',
      },
      {
        tipo: 'parrafo',
        texto:
          'Esto no es una advertencia teórica. Son casos documentados, de organizaciones grandes ' +
          'y con equipos técnicos buenos. Ninguna de ellas quiso hacer nada malo.',
      },
      {
        tipo: 'destacado',
        icono: '📄',
        titulo: 'La herramienta de reclutamiento que hubo que apagar',
        texto:
          'Una empresa tecnológica muy grande construyó un sistema para puntuar currículums. Lo ' +
          'entrenó con diez años de contrataciones propias. El sistema aprendió a penalizar los ' +
          'currículums que mencionaban la palabra "mujeres". No falló el código: funcionó ' +
          'perfecto y reprodujo exactamente el patrón que se le dio. La descartaron en 2018.',
      },
      {
        tipo: 'destacado',
        icono: '⚖️',
        titulo: 'Y el patrón se repite',
        texto:
          'Sistemas de puntuación de riesgo en administraciones públicas europeas que acabaron ' +
          'señalando desproporcionadamente a personas por su origen o su barrio, y que hubo que ' +
          'retirar por decisión judicial o administrativa. El problema nunca fue el algoritmo: ' +
          'fue que los datos con los que aprendió ya traían la desigualdad dentro.',
      },
      {
        tipo: 'frase',
        texto: 'Un modelo no inventa el sesgo. Lo hereda, lo aplica más rápido y a más gente.',
      },
      {
        tipo: 'destacado',
        icono: '🛡️',
        titulo: 'Por eso la línea roja de hace un minuto',
        texto:
          'La IA puede leer, resumir, ordenar y redactar. Lo que no puede es decidir sobre una ' +
          'persona, porque no puede explicar por qué decidió eso — y ustedes sí tienen que ' +
          'poder explicarlo, por escrito y con su firma.',
      },
    ],
  },

  {
    id: 'riesgos',
    grupo: 'taller',
    icono: '⚠️',
    titulo: 'Riesgos',
    subtitulo: 'Y con datos de personas, el doble',
    bloques: [
      {
        tipo: 'pregunta',
        icono: '🗣️',
        consigna: 'Digan uno, en voz alta',
        texto: 'Ya vieron lo que hace bien. ¿Qué es lo que más les preocuparía si mañana la usa toda la gerencia?',
      },
      {
        tipo: 'tarjetas',
        items: [
          {
            icono: '⚠️',
            titulo: 'Alucinaciones',
            texto:
              'Inventa plazos, artículos y montos que suenan reales. Un plazo mal citado en una ' +
              'respuesta a un trabajador es un problema con nombre y apellido.',
          },
          {
            icono: '🔒',
            titulo: 'Datos de personas',
            texto:
              'RUT, diagnósticos, remuneraciones, evaluaciones, denuncias. La Ley 21.719 trata ' +
              'los datos de salud como sensibles, con estándar reforzado. Una IA pública no es un ' +
              'sistema de CONAF: lo que se pega ahí, se fue.',
          },
          {
            icono: '⚖️',
            titulo: 'Sesgo al decidir sobre personas',
            texto:
              'Un modelo aprende de lo que ya pasó. Si le piden ordenar postulantes, reproducirá ' +
              'los patrones de sus textos de entrenamiento — incluidos los sesgos. La IA puede ' +
              'ayudar a redactar las bases o a ordenar información. Evaluar y seleccionar es ' +
              'humano y fundado.',
          },
          {
            icono: '✍️',
            titulo: 'Responsabilidad final',
            texto:
              'La IA genera borradores. Quien firma el certificado, el informe o la respuesta ' +
              'son ustedes.',
          },
        ],
      },
      {
        tipo: 'frase',
        texto: 'La IA redacta. Usted decide, verifica y firma. Y esas tres cosas son la misma cosa.',
      },
    ],
  },

  {
    id: 'perceptron',
    grupo: 'lab',
    icono: '📏',
    titulo: 'Dónde se pone la raya',
    subtitulo: 'esto es una neurona artificial',
    consigna: { icono: '📏', texto: '¿Dónde pondrían ustedes la raya para separar los dos colores?' },
    interactivo: 'perceptron',
    bloques: [],
  },

  {
    id: 'red-neuronal',
    grupo: 'lab',
    icono: '🧠',
    titulo: 'Cuando una sola raya no alcanza',
    subtitulo: 'de una neurona a muchas, en capas',
    consigna: { icono: '🧠', texto: 'Una raya no alcanza para todo. ¿Qué pasa cuando son muchas?' },
    interactivo: 'redNeuronal',
    bloques: [],
  },

  {
    id: 'attention',
    grupo: 'lab',
    icono: '🎯',
    titulo: 'A qué le pone atención',
    subtitulo: 'el mecanismo detrás de ChatGPT. En inglés se llama "attention"',
    consigna: { icono: '🎯', texto: '¿A qué palabras creen que le presta atención el modelo?' },
    interactivo: 'attention',
    bloques: [],
  },

  {
    id: 'alucina',
    grupo: 'lab',
    icono: '🎲',
    titulo: 'Por qué sabe pero alucina',
    subtitulo: 'optimizado para sonar plausible, no para decir verdad',
    consigna: { icono: '🎲', texto: 'Dos respuestas a la misma pregunta. ¿Cuál es mejor? Voten.' },
    interactivo: 'alucina',
    bloques: [],
  },

  {
    id: 'cierre',
    grupo: 'final',
    icono: '🚀',
    titulo: 'Y ahora, ¿qué?',
    subtitulo: 'Lo que se llevan de esta jornada',
    bloques: [
      {
        tipo: 'hero',
        kicker: '11:58',
        titulo: 'Ya no es magia. Es estadística con buenos modales.',
        texto:
          'Vieron cómo decide, por qué a veces inventa, qué no se le puede pegar y cómo pedirle ' +
          'bien. No es poco para una mañana.',
      },
      {
        tipo: 'parrafo',
        texto:
          'Lo que sigue no lo hacemos nosotros: la próxima vez que estén escribiendo el mismo ' +
          'párrafo por décima vez en el mes, ya saben que se puede pedir de otra forma.',
      },
      {
        tipo: 'tarjetas',
        titulo: 'Las tres reglas del día',
        items: [
          {
            icono: '🔒',
            titulo: 'No pego nada que no publicaría',
            texto: 'Si no lo pondría en un documento público, no va en una IA. El diagnóstico, nunca.',
          },
          {
            icono: '🔍',
            titulo: 'Todo número se verifica',
            texto: 'Plazo, artículo, monto o norma: se comprueba en la fuente antes de firmar.',
          },
          {
            icono: '✍️',
            titulo: 'Le pido como a un practicante',
            texto: 'Quién eres, cuánto, sobre qué y en qué formato. Cuatro cosas, siempre.',
          },
        ],
      },
      {
        tipo: 'autoevaluacion',
        titulo: '¿Se lo llevan claro? Marquen lo que ya sabrían hacer mañana',
        items: [
          'Saber qué datos de una persona NO pegar nunca en una IA pública.',
          'Verificar en la fuente cualquier plazo o norma antes de que salga de mi escritorio.',
          'Escribir un prompt con rol + cantidad + foco + formato.',
        ],
      },
      {
        tipo: 'frase',
        texto:
          'Hay cosas en su semana que se hacen así "porque siempre se han hecho así". Esas son ' +
          'las que vinimos a buscar.',
      },
      {
        tipo: 'destacado',
        icono: '✉️',
        titulo: 'Dónde encontrarnos',
        texto:
          'Somos la Unidad de Información y Análisis. No hay que pedir hora ni mandar un memo: ' +
          'escríbannos y vemos. Y si en seis meses ninguna de las fricciones de esa lista se ' +
          'movió, tienen todo el derecho a venir a decírnoslo. Gracias por la mañana.',
      },
    ],
  },
]

// ===================== Datos de los ejercicios =====================

// Los cuatro ingredientes de un buen prompt.
export const ingredientesPrompt = [
  { id: 'rol', etiqueta: 'Rol', icono: '🎭', pista: 'Dile QUIÉN debe ser ("Actúa como analista de la Gerencia de Desarrollo de las Personas…").' },
  { id: 'cantidad', etiqueta: 'Cantidad', icono: '🔢', pista: 'Acota el TAMAÑO ("en 5 viñetas", "máximo media plana").' },
  { id: 'foco', etiqueta: 'Foco', icono: '🎯', pista: 'Di SOBRE QUÉ exactamente ("…centrado en los plazos de tramitación").' },
  { id: 'formato', etiqueta: 'Formato', icono: '📐', pista: 'Pide la FORMA ("como checklist", "en una tabla", "como correo", "tono formal").' },
]

// Prompt débil con el que arranca el ejercicio.
export const promptVago = 'Hazme un correo sobre las licencias médicas.'

// Prompt fuerte. Verificado contra las heurísticas de PromptBuilder: enciende
// los cuatro ingredientes. Si se cambia, hay que volver a comprobarlo en
// pantalla ANTES del taller: un ejemplo "fuerte" que marque 3 de 4 proyectado
// destruye el ejercicio en vivo y no hay cómo recuperarlo.
export const promptEjemplo =
  'Actúa como analista de la Gerencia de Desarrollo de las Personas de CONAF. Redacta en 5 ' +
  'viñetas, máximo media plana, la respuesta a una trabajadora que pregunta cómo tramitar su ' +
  'licencia médica, centrado en los plazos y en quién hace cada paso, en tono formal y cercano, ' +
  'como correo.'

// EJERCICIO — "De 'necesito unos datos' a un dato que sirve".
export const subeNivel = {
  niveles: [
    {
      etiqueta: 'Nivel 1 · Flojo',
      prompt: 'Explícame las licencias médicas.',
      tono: '#e53935',
      respuesta:
        'La licencia médica es un documento que justifica la ausencia del trabajador por razones ' +
        'de salud. Debe presentarse al empleador y luego ser tramitada ante la entidad que ' +
        'corresponda, que puede aprobarla o rechazarla.',
      critica: 'Genérico. No sé para quién es, ni qué destacar. Sirve de poco.',
    },
    {
      etiqueta: 'Nivel 2 · Mejor',
      prompt: 'Explica cómo se tramita una licencia médica, para una trabajadora que nunca lo ha hecho.',
      tono: '#fb8c00',
      respuesta:
        'Cuando el médico le extiende una licencia, usted debe hacérsela llegar a la empresa ' +
        'dentro del plazo. La empresa la remite a la entidad que la autoriza, y esa entidad puede ' +
        'aprobarla, reducirla o rechazarla. El pago del período depende de la duración de la ' +
        'licencia.',
      critica: 'Ya tiene audiencia y tono. Mejor, pero aún falta foco y formato.',
    },
    {
      etiqueta: 'Nivel 3 · Experto',
      prompt:
        'Actúa como analista de la Gerencia de Desarrollo de las Personas. Explica a una ' +
        'trabajadora cómo tramitar su licencia médica en 4 viñetas de máximo una línea, ' +
        'centrado en los plazos y en quién hace cada paso, como checklist.',
      tono: '#2e7d32',
      respuesta:
        '• Usted entrega la licencia a la empresa dentro del plazo que fija el reglamento.\n' +
        '• La empresa la remite a la entidad que la autoriza, también dentro de plazo.\n' +
        '• Esa entidad —no la empresa— aprueba, reduce o rechaza el reposo.\n' +
        '• Si la rechazan, se reclama ante la instancia que corresponde, no ante la jefatura.',
      critica: 'Audiencia + cantidad + foco + formato. Esto se puede usar tal cual. ✅',
    },
  ],
  leccion:
    'No cambió la norma ni cambió la IA: cambió cómo se pidió. Es la misma diferencia que hay ' +
    'entre el correo que dice "necesito unos datos" y el que dice "necesito la dotación por ' +
    'estamento al 31 de agosto, en Excel". Ustedes reciben los dos todas las semanas y ya saben ' +
    'cuál se responde bien.',
}

// EJERCICIO — "Detective de alucinaciones".
// ⚠️ Las 8 frases tienen que validarse con el área jurídica o de personal ANTES
// del taller. Esta es la única sala del país que sabe la respuesta correcta: si
// una frase marcada como verdadera tiene un error, alguien lo va a decir en voz
// alta y el taller se acaba ahí.
export const detective = {
  intro: 'Resumen sobre tramitación de licencias médicas, generado por IA. De las 8 frases, 3 son inventadas.',
  frases: [
    {
      texto: 'La entidad que autoriza la licencia puede rechazarla, reducir el reposo o ampliarlo.',
      falsa: false,
    },
    {
      texto: 'El diagnóstico va en una sección confidencial: la empresa tramita la licencia sin conocerlo.',
      falsa: false,
    },
    {
      texto: 'El empleador dispone de 10 días hábiles para remitir la licencia a la entidad que la autoriza.',
      falsa: true,
      porque:
        'El plazo real es mucho más corto. Fíjense en lo que pasó: la IA acertó la estructura ' +
        'entera de la frase —hay un plazo, es en días hábiles, es del empleador— y erró justo el ' +
        'único elemento que importaba. Lo que hay que verificar nunca es la frase: es el número.',
    },
    {
      texto: 'En las licencias de corta duración, los primeros días pueden no dar derecho a subsidio.',
      falsa: false,
    },
    {
      texto:
        'Según el artículo 197 ter del Código del Trabajo, el empleador puede exigir una segunda ' +
        'opinión médica antes de tramitar la licencia.',
      falsa: true,
      porque:
        'Ese artículo no existe. Un número de artículo inventado es el error más caro de todos: ' +
        'tiene la forma exacta de un dato real, nadie lo cuestiona dentro de una minuta, y ' +
        'termina firmado. Ningún artículo entra en un documento sin haberlo abierto en la fuente.',
    },
    {
      texto: 'La Ley 21.719 clasifica los datos relativos a la salud como datos sensibles, con protección reforzada.',
      falsa: false,
    },
    {
      texto:
        'Si la licencia es rechazada, la trabajadora tiene 5 días corridos para reclamar ante la ' +
        'Dirección del Trabajo.',
      falsa: true,
      porque:
        'Organismo equivocado y plazo inventado, los dos a la vez. La IA no tenía el dato, y ' +
        'cuando no lo tiene no dice "no sé": rellena con algo que tenga forma de trámite chileno ' +
        'y le pone un número para que se vea sólido. Eso es exactamente una alucinación.',
    },
    {
      texto: 'CONAF, como corporación de derecho privado, rige su personal por el Código del Trabajo.',
      falsa: false,
    },
  ],
  leccion:
    'Ninguna de las falsas sonaba falsa, y las tres eran números: un plazo, un artículo y un ' +
    'organismo con fecha. No es casualidad — el modelo fue premiado por sonar bien, nunca por ' +
    'tener razón. La regla del día: si la respuesta trae un plazo, un artículo o un monto, se ' +
    'verifica en la fuente antes de firmar.',
}

// EJERCICIO — "¿Y ahora cómo se lo explico a…?".
export const publicos = {
  audiencias: [
    {
      id: 'trabajador',
      etiqueta: 'La trabajadora',
      icono: '🙋',
      respuesta:
        'Cuando el médico le dé la licencia, hágasela llegar a la empresa cuanto antes: el plazo ' +
        'corre desde que empieza el reposo, no desde que usted vuelve. La empresa la remite a la ' +
        'entidad que la autoriza, y es esa entidad —no su jefatura— la que decide si se aprueba. ' +
        'Su diagnóstico va en una sección confidencial: nadie de la empresa tiene por qué saberlo.',
    },
    {
      id: 'jefatura',
      etiqueta: 'La jefatura directa',
      icono: '🧑‍💼',
      respuesta:
        'Su rol aquí es corto y claro: recibir, dejar constancia de la fecha y derivar de ' +
        'inmediato al área que corresponde. No le toca evaluar si el reposo es razonable, ni ' +
        'preguntar el diagnóstico, ni comentarlo con el equipo. Lo que sí le toca es reorganizar ' +
        'el trabajo mientras dure la ausencia.',
    },
    {
      id: 'gerencia',
      etiqueta: 'La Gerencia de Personas',
      icono: '⚖️',
      respuesta:
        'Corren plazos y hay que poder demostrarlos: registro de recepción, remisión dentro de ' +
        'plazo y trazabilidad de quién tocó el expediente. Y una obligación que la Ley 21.719 ' +
        'vuelve exigible: los datos de salud tienen acceso restringido, con registro de quién los ' +
        'consulta. Nada de adjuntos sueltos por correo.',
    },
    {
      id: 'fiscalizador',
      etiqueta: 'Quien fiscaliza',
      icono: '🏛️',
      respuesta:
        'Lo que se revisa no es la buena intención: son las fechas y los registros. Si no consta ' +
        'cuándo se recibió y cuándo se remitió, para efectos prácticos no ocurrió. Por eso el ' +
        'registro no es burocracia: es la única defensa que tiene la institución.',
    },
  ],
  leccion:
    'Los hechos no se movieron ni un milímetro: cambió a quién se le habla. Ustedes ya hacen esto ' +
    'todos los días — no le explican igual el mismo trámite a la trabajadora, a la jefatura y a ' +
    'quien fiscaliza. La novedad es que ahora se puede pedir por escrito. Si no le dicen para ' +
    'quién es, la IA le escribe a nadie.',
}

// EJERCICIO — "Qué NO contarle a la IA". El corazón del taller.
export const privacidad = {
  intro: 'El prompt que alguien podría escribir un martes cualquiera:',
  tokens: [
    { t: 'Redáctame un correo para la jefatura sobre la situación de ', rol: 'relleno' },
    { t: 'Marcela Ríos Quintana', rol: 'sensible', tipo: 'Nombre' },
    { t: ', RUT ', rol: 'relleno' },
    { t: '15.876.432-1', rol: 'sensible', tipo: 'RUT' },
    { t: ', que presentó licencia médica con diagnóstico de ', rol: 'relleno' },
    { t: 'trastorno ansioso depresivo', rol: 'sensible', tipo: 'Diagnóstico — dato de salud' },
    { t: ', folio ', rol: 'relleno' },
    { t: '62-4471820', rol: 'sensible', tipo: 'Folio de la licencia' },
    { t: '. Trabaja en el ', rol: 'relleno' },
    { t: 'Departamento de Gestión de Personas', rol: 'senuelo', tipo: 'Unidad (dato público)' },
    { t: ' de la ', rol: 'relleno' },
    { t: 'Dirección Regional de La Araucanía', rol: 'senuelo', tipo: 'Dependencia (dato público)' },
    { t: '. Escríbele a su correo personal ', rol: 'relleno' },
    { t: 'mrios.temuco@gmail.com', rol: 'sensible', tipo: 'Correo personal' },
    { t: ' y menciona el plazo de ', rol: 'relleno' },
    { t: '3 días hábiles', rol: 'senuelo', tipo: 'Plazo (no identifica a nadie)' },
    { t: ' que fija la ', rol: 'relleno' },
    { t: 'Ley 21.719', rol: 'senuelo', tipo: 'Norma pública' },
    { t: '.', rol: 'relleno' },
  ],
  leccion:
    'Lo grave aquí no es solo el nombre y el RUT: el diagnóstico es un dato de salud, y la Ley ' +
    '21.719 lo protege con estándar reforzado. Peor todavía — en una licencia médica el ' +
    'diagnóstico va en la sección confidencial: es información que la empresa ni siquiera ' +
    'debería tener. En cambio la unidad, la región, el plazo y el número de la ley son públicos: ' +
    'tacharlos solo deja el texto inservible. Y una advertencia extra: aunque borre el nombre y ' +
    'el RUT, si deja la unidad, la región y el diagnóstico, en un equipo de ocho personas ' +
    'cualquiera sabe de quién habla. Eso también es identificar.',
}

// EJERCICIO — "Del artículo a la lista de pendientes".
export const docAccion = {
  promptUsado:
    'Convierte este texto en una checklist de pasos concretos para mí, que trabajo en la ' +
    'Gerencia de Desarrollo de las Personas y acabo de recibir una licencia médica.',
  textoLegal:
    '"Recibida la licencia médica, el empleador deberá dejar constancia de la fecha de recepción ' +
    'y remitirla, dentro del plazo reglamentario, a la entidad competente para su autorización. ' +
    'La sección de diagnóstico es confidencial y no podrá ser conocida por el empleador. El ' +
    'pronunciamiento sobre la procedencia del reposo corresponde exclusivamente a dicha entidad."',
  checklist: [
    '¿Registré la fecha y la hora exactas de recepción? De ahí corren todos los plazos.',
    '¿La sección confidencial sigue cerrada, y puedo demostrarlo?',
    '¿Está remitida a la entidad competente dentro del plazo, con comprobante?',
    '¿El expediente queda en un lugar con acceso restringido y registro de quién lo abre?',
    '¿Tengo claro que la decisión sobre el reposo no es mía, y que así se lo comunico a la jefatura?',
  ],
  leccion:
    'En segundos, un párrafo denso se volvió una lista que se va marcando. Eso es lo que le ' +
    'quita: la parte de traducir la norma a pasos, que da lata y no requiere criterio. Lo que no ' +
    'le quita es decidir. Y fíjense en lo importante: la checklist salió del texto que USTED le ' +
    'pegó. Si en vez de eso le pide que "recuerde" la norma, ahí empieza a inventar. Regla: dale ' +
    'el texto, no le pidas la ley.',
}

// EJERCICIO — "Una palabra lo cambia todo".
export const analisisLey = {
  promptBase: 'Realiza un análisis',
  palabra: ' crítico',
  promptCola: ' del proceso de tramitación de licencias médicas en el servicio.',

  neutral: {
    titulo: 'Análisis (neutral)',
    tono: 'Descriptivo y equilibrado: explica cómo funciona el proceso.',
    puntos: [
      { icono: '🎯', texto: 'Objetivo: justificar la ausencia por salud y activar el pago que corresponda.' },
      { icono: '📋', texto: 'La trabajadora entrega la licencia; la empresa deja constancia y la remite.' },
      { icono: '🔒', texto: 'El diagnóstico es confidencial: la empresa tramita sin conocerlo.' },
      { icono: '⚖️', texto: 'La entidad competente aprueba, reduce o rechaza el reposo. La empresa no decide.' },
      { icono: '⏱️', texto: 'Cada etapa tiene plazo, y cada plazo tiene que poder demostrarse.' },
      { icono: '💰', texto: 'El pago del período depende de la duración de la licencia.' },
    ],
    conclusion:
      'Es un proceso con roles bien repartidos: la empresa tramita y registra, un tercero ' +
      'decide, y la persona conserva su privacidad.',
  },

  critico: {
    titulo: 'Análisis CRÍTICO',
    tono: 'Mismo proceso, pero ahora evalúa fortalezas Y debilidades.',
    puntos: [
      { icono: '🎯', texto: 'Mantiene lo que funciona: roles repartidos y confidencialidad del diagnóstico.' },
      { icono: '✅', texto: 'Fortalezas: plazos ciertos, decisión en un tercero, trazabilidad posible.' },
      { icono: '⚠️', nuevo: true, texto: 'El plazo corre desde el inicio del reposo, justo cuando la persona está enferma y no puede gestionar nada.' },
      { icono: '⚠️', nuevo: true, texto: 'La recepción depende de la jefatura directa, que no siempre sabe que hay un reloj corriendo.' },
      { icono: '⚠️', nuevo: true, texto: 'En un servicio desconcentrado en regiones, el documento físico viaja — y el plazo no espera.' },
      { icono: '⚠️', nuevo: true, texto: 'La trazabilidad suele vivir en correos y planillas, no en un sistema con registro de accesos.' },
      { icono: '⚠️', nuevo: true, texto: 'Y el dato más sensible del servicio circula por el canal menos controlado que existe: el adjunto de correo.' },
    ],
    conclusion:
      'El problema no está en el diseño del proceso sino en dónde vive: mientras la trazabilidad ' +
      'sea un correo, la institución no puede demostrar que cumplió — ni proteger lo que debe.',
  },

  leccion:
    'Una palabra movió el análisis entero: de describir, a evaluar. Y en esta gerencia, más que ' +
    'en ninguna, saben lo que cuesta una palabra — entre "hábiles" y "corridos" hay un plazo ' +
    'vencido. Con la IA es igual: la palabra que ustedes ponen en el prompt es la que decide la ' +
    'respuesta.',
}

// EJERCICIO — "Le preguntamos a las tres".
export const compararIA = {
  prompt:
    'Explica cómo debe tramitar una unidad de personal una licencia médica y qué obligaciones ' +
    'tiene con los datos de salud de la persona.',
  modelos: [
    {
      id: 'chatgpt',
      nombre: 'ChatGPT',
      icono: '💬',
      estilo: 'Pedagógico y accesible',
      color: '#10a37f',
      ideal: 'Explicarle el trámite al resto de la institución.',
      rasgos: [
        'Ordena por etapas: recepción, remisión, decisión y pago.',
        'Separa "qué obliga la norma" de "qué tiene que hacer usted el lunes".',
        'Lenguaje cercano: sirve casi tal cual para un correo a la dotación.',
        'Cierra con una checklist de implementación.',
      ],
    },
    {
      id: 'claude',
      nombre: 'Claude',
      icono: '📚',
      estilo: 'Jurídico y exhaustivo',
      color: '#d97757',
      ideal: 'Redactar el procedimiento interno y defenderlo ante una fiscalización.',
      rasgos: [
        'Distingue con precisión los roles de empleador, entidad autorizadora y trabajador.',
        'Cruza el trámite con las obligaciones de la Ley 21.719 sobre datos de salud.',
        'Levanta tensiones finas: custodia del expediente, registro de accesos, conservación.',
        'Es, con diferencia, la respuesta más larga y detallada.',
      ],
    },
    {
      id: 'gemini',
      nombre: 'Gemini',
      icono: '✨',
      estilo: 'Conciso y al grano',
      color: '#4285f4',
      ideal: 'Una minuta de una plana para la jefatura.',
      rasgos: [
        'Tabla de etapas, responsables y productos.',
        'Va directo a lo esencial, sin extenderse en análisis.',
        'Ofrece profundizar en el punto que se elija.',
      ],
    },
  ],
  leccion:
    'Ninguna de las tres está equivocada: son tres formas válidas de responder lo mismo, como ' +
    'tres jefaturas revisando el mismo oficio. No existe la IA que "sepa la respuesta": existe ' +
    'la herramienta con la que hay que aprender a conversar. Dato práctico: CONAF ya paga ' +
    'licencia de Gemini Pro, así que esa la tienen disponible desde hoy.',
}

// ACTIVIDAD G1 — "¿Quién responde por este dato?".
export const rolesDatos = {
  etiquetaItem: 'Situación',
  roles: [
    { id: 'dueno', nombre: 'Dueño del dato', icono: '👑', desc: 'Del negocio: define qué significa el dato de personas, para qué se puede usar y quién accede. Y responde con nombre cuando alguien pide corregirlo.' },
    { id: 'custodio', nombre: 'Custodio técnico', icono: '🛠️', desc: 'De informática: administra el sistema donde vive el dato, los respaldos, los perfiles de acceso y el registro de quién entra.' },
    { id: 'usuario', nombre: 'Usuario del dato', icono: '🙋', desc: 'Lo usa para trabajar: debe usarlo solo para lo que corresponde, no sacarlo del sistema, y reportar los errores que detecta.' },
  ],
  situaciones: [
    {
      texto: 'Bienestar pide el listado de personas con licencia médica del último semestre para un estudio interno. ¿Quién autoriza o niega el acceso?',
      correcto: 'dueno',
      explica:
        'Lo decide quien responde por el dato, no informática. Y antes hay una segunda pregunta: ' +
        '¿la finalidad de Bienestar justifica acceder a datos de salud? La Ley 21.719 exige ' +
        'finalidad determinada. Informática solo implementa el acceso que el dueño ya autorizó.',
    },
    {
      texto: 'Hay que configurar el sistema para que el detalle de las licencias solo sea visible para dos perfiles, con registro de cada consulta. ¿Quién lo ejecuta?',
      correcto: 'custodio',
      explica:
        'El dueño define la regla ("solo dos perfiles, con trazabilidad"); el custodio la ' +
        'implementa y responde por que el registro exista de verdad y no solo en el papel.',
    },
    {
      texto: 'Preparando el informe de dotación aparece una persona con fecha de ingreso posterior a su fecha de término. ¿A quién le toca reportarlo?',
      correcto: 'usuario',
      explica:
        'Quien usa el dato y ve el error, lo reporta. Si se calla porque "ese sistema no es mío", ' +
        'el error llega al informe de dotación y de ahí a todas partes.',
    },
    {
      texto: 'Se decide que la antigüedad se contará siempre desde el primer contrato, sin importar los cambios posteriores, en TODOS los informes. ¿Quién define eso?',
      correcto: 'dueno',
      explica:
        'Definir qué significa exactamente un dato es la esencia del rol de dueño. Sin esa ' +
        'definición cada informe da un número distinto y nadie está mintiendo: cada uno contó ' +
        'distinto.',
    },
    {
      texto: 'Una trabajadora pide por escrito que se corrija su fecha de ingreso, mal registrada desde 2011. ¿Quién debe responderle?',
      correcto: 'dueno',
      explica:
        'Es un derecho de rectificación. Con la Ley 21.719 tiene que existir un responsable y un ' +
        'procedimiento con plazo. El custodio ejecuta el cambio; responder es del dueño. Y el ' +
        'plazo corre igual aunque nadie sepa a quién le tocaba.',
    },
  ],
  leccion:
    'Cuando la dotación no cuadra entre dos sistemas, la pregunta no es "¿cuál número está ' +
    'malo?". Es "¿quién responde por ese número?". Si nadie es dueño, nadie corrige — y el que ' +
    'termina dando la explicación es el que iba pasando. El PMG-MEI pide formalizar dos roles ' +
    'este año: esto es para qué sirven.',
}

// ACTIVIDAD G2 — "¿Qué tan maduros son tus datos?". Se responde a mano alzada.
export const madurezDatos = {
  preguntas: [
    '¿Esta gerencia tiene claro quién responde por cada dato de personas que produce?',
    '¿Existe UNA fuente oficial de la dotación, o conviven varias planillas con cifras distintas?',
    '¿Hay reglas escritas sobre quién puede ver los datos sensibles, y queda registro de quién los abre?',
    'Cuando el dato de una persona está malo, ¿existe un procedimiento conocido para corregirlo, con plazo?',
    '¿Los datos de personal se cruzan con remuneraciones o capacitación sin retipearlos a mano?',
  ],
  niveles: [
    { min: 0, max: 1, nombre: 'Inicial', icono: '🌱', texto: 'Los datos dependen de personas, no de procesos: si esa persona está con licencia, el dato no existe. Es el punto de partida de la mayoría — y justo lo que vienen a ordenar el PMG-MEI y la Ley 21.719.' },
    { min: 2, max: 3, nombre: 'En desarrollo', icono: '🌿', texto: 'Hay prácticas buenas pero parciales, y normalmente sostenidas por una sola persona. Formalizar roles y una fuente oficial los llevaría al siguiente nivel.' },
    { min: 4, max: 5, nombre: 'Básico logrado', icono: '🌳', texto: 'La gerencia ya opera como se le pedirá a fines de 2026. El desafío ahora es sostenerlo cuando cambie la jefatura, y poder demostrarlo.' },
  ],
  leccion:
    'Si respondieron "no" en tres o más, no está mal: están donde está casi todo el Estado. Este ' +
    'test es la versión de bolsillo del diagnóstico que CONAF debe rendir en diciembre de 2026 — ' +
    'el mismo mes en que empieza a regir la Ley 21.719. Cada "no" que marcaron es, literalmente, ' +
    'un punto de la lista que vamos a armar a las once.',
}

// SECCIÓN FINAL — levantamiento de fricciones, para proyectar.
export const dolencias = {
  preguntas: [
    { n: 1, q: '¿Qué trámite de personal se repite igual todas las semanas y les consume más horas?', pista: 'Certificados, constancias, respuestas sobre licencias, cargas familiares…' },
    { n: 2, q: '¿Qué dato de personas necesitan seguido y nunca cuadra entre los sistemas?', pista: 'Dotación, antigüedad, capacitación. ¿Cuál planilla termina siendo "la buena"?' },
    { n: 3, q: '¿Qué documento se posterga siempre porque nadie quiere redactarlo?', pista: 'Bases de concurso, perfiles de cargo, informes de dotación, respuestas a solicitudes.' },
    { n: 4, q: '¿Dónde retipean a mano información de un sistema a otro?', pista: 'La licencia llega en papel, se digita, y alguien la vuelve a digitar en otra planilla.' },
    { n: 5, q: '¿Qué pregunta les hacen una y otra vez, que podría responderse sola?', pista: '"Necesito un certificado de antigüedad para el banco." ¿Cuántos van este año?' },
    { n: 6, q: '¿En qué decisión de su área desconfían de los datos que tienen?', pista: '¿La dotación real? ¿La antigüedad? ¿Hay versiones distintas del mismo número?' },
    { n: 7, q: 'Si pudieran eliminar UNA fricción mañana, ¿cuál sería?', pista: '¿Qué cambiaría en su mes si desapareciera?' },
  ],
  categorias: [
    { id: 'datos', etiqueta: 'Datos de personas', icono: '👥' },
    { id: 'documentos', etiqueta: 'Documentos', icono: '📄' },
    { id: 'procesos', etiqueta: 'Procesos repetitivos', icono: '🔁' },
    { id: 'otra', etiqueta: 'Otra', icono: '💬' },
  ],
  placeholder: 'Escribe la fricción…',
  encabezadoCopia: 'Fricciones levantadas — jornada UIA · Gerencia de Desarrollo de las Personas:',
  leccion:
    'Esta lista es lo único de hoy que no trajimos nosotros. Con ella la UIA decide qué se ataca ' +
    'primero, y si en seis meses no se movió nada, ustedes tienen derecho a venir a reclamarnos. ' +
    'Descárguenla antes de salir de la sala: después no la manda nadie.',
}

// CONCEPTO LLM — "Por qué sabe pero alucina", con caso de personal.
export const alucina = {
  prompt: '¿Qué plazo tiene el empleador para remitir una licencia médica?',
  antes: {
    etiqueta: 'Antes · solo pre-entrenado',
    descripcion: 'Autocompleta lo más plausible. Suena bien… pero cuela un dato falso.',
    partes: [
      { t: 'El empleador debe remitir la licencia médica a la entidad competente dentro del plazo reglamentario. ' },
      { t: 'Además, según el artículo 197 ter del Código del Trabajo, dispone de 10 días hábiles para hacerlo.', alucinacion: true },
    ],
  },
  despues: {
    etiqueta: 'Después · fine-tuning + RLHF',
    descripcion: 'Más estructurada y honesta: marca lo que conviene verificar.',
    partes: [
      { t: 'El empleador debe dejar constancia de la fecha de recepción y remitir la licencia a la entidad competente dentro del plazo que fija el reglamento. ' },
      { t: 'El diagnóstico es confidencial y la decisión sobre el reposo no le corresponde al empleador. ' },
      { t: '(Verifica el plazo exacto y su fuente en el texto oficial vigente.)', honesto: true },
    ],
  },
  rlhf: {
    pregunta: 'Ustedes son las personas que entrenan al modelo. ¿Cuál respuesta es mejor?',
    opciones: ['La de la izquierda (Antes)', 'La de la derecha (Después)'],
    correcta: 1,
    feedbackOk:
      '✅ Subieron la recompensa. Repetido millones de veces, así el modelo aprende a preferir ' +
      'respuestas útiles y honestas. Ustedes son la señal de error.',
    feedbackMal:
      '🤔 La de la izquierda inventa un artículo y un plazo que no existen. Premiarla le enseñaría ' +
      'a alucinar con más seguridad.',
  },
  leccion:
    'Ni el ajuste fino ni el entrenamiento con humanos le enseñan la verdad: le enseñan modales. ' +
    'Por eso hasta la respuesta ordenada y bien redactada puede traer un dato falso, y por eso la ' +
    'IA propone y usted confirma. Es el mismo modelo que hace un rato les inventó un artículo con ' +
    'toda seguridad.',
}

// ===================== Actividades nuevas de la presentación =====================

// "Lo que cuesta hacerlo a mano": la misma tarea, con y sin IA, con dos relojes
// corriendo. Los minutos son los de una tarea real y conservadora — es mejor
// quedarse corto que exagerar delante de quien la hace todas las semanas.
export const cronometro = {
  tarea:
    'responder por escrito la consulta de una trabajadora que pregunta cómo tramitar su licencia ' +
    'médica y qué plazos la afectan.',
  vias: [
    {
      id: 'mano',
      icono: '✍️',
      etiqueta: 'Cómo se hace hoy',
      tramos: [
        { texto: 'Buscar la norma y confirmar los plazos', min: 12 },
        { texto: 'Buscar un correo anterior parecido para no partir de cero', min: 8 },
        { texto: 'Redactar la respuesta', min: 18 },
        { texto: 'Revisar y firmar', min: 6, revision: true },
      ],
    },
    {
      id: 'ia',
      icono: '🤖',
      etiqueta: 'Con IA',
      tramos: [
        { texto: 'Escribir el prompt (rol + cantidad + foco + formato)', min: 3 },
        { texto: 'Leer el borrador que devuelve', min: 2 },
        { texto: 'Revisar contra la fuente y firmar', min: 6, revision: true },
      ],
    },
  ],
  remate:
    'Once minutos contra cuarenta y cuatro. Pero fíjense en dónde NO hay diferencia: los seis ' +
    'minutos de revisar y firmar son idénticos en las dos columnas. Eso es lo que no se delega.',
  leccion:
    'Lo que la IA se llevó fueron los treinta y tres minutos de buscar y teclear. Los seis de ' +
    'criterio siguen siendo suyos, y son exactamente los mismos de antes. Por eso esto no ' +
    'reemplaza a nadie: le quita a cada uno la parte de la pega que nadie echa de menos.',
}

// "La bola de nieve": una alucinación seguida hasta donde llega de verdad.
export const cadena = {
  pregunta: 'Una IA se inventa un plazo. ¿Hasta dónde llega?',
  pasos: [
    {
      que:
        'La IA responde una consulta interna y se inventa un plazo. Suena bien, tiene forma de ' +
        'norma, y nadie lo comprueba.',
      gente: 1,
      arreglo: '30 segundos',
    },
    {
      que:
        'Quien preguntó copia la respuesta en un correo a su jefatura. El plazo ya salió del chat ' +
        'y ahora tiene remitente.',
      gente: 3,
      arreglo: '5 minutos',
    },
    {
      que:
        'La jefatura decide con ese plazo y se lo comunica a la persona afectada, que organiza su ' +
        'semana en función de lo que le dijeron.',
      gente: 8,
      arreglo: 'una conversación incómoda',
    },
    {
      que:
        'La decisión se formaliza por escrito y entra al expediente. El plazo inventado ya es un ' +
        'documento de la institución.',
      gente: 20,
      arreglo: 'un documento que corregir',
    },
    {
      que:
        'La persona reclama. Hay que reconstruir de dónde salió ese plazo, y nadie se acuerda de ' +
        'que empezó en un chat.',
      gente: 40,
      arreglo: 'semanas',
    },
  ],
  remate:
    'Los cinco pasos vienen del mismo error. Y en el primero, comprobarlo costaba treinta segundos.',
  leccion:
    'El dato inventado no se queda donde nació: viaja, se copia y se convierte en decisión. Y ' +
    'cuanto más viaja, más caro sale sacarlo. Por eso la regla es verificar antes de que salga de ' +
    'su escritorio, no después de que llegue el reclamo.',
}

// "El dato que se escapó": la misma mecánica, aplicada a un dato de salud.
export const fuga = {
  pregunta: 'Un diagnóstico pegado en un chat de IA. ¿Dónde termina?',
  pasos: [
    {
      que:
        'A las seis de la tarde, alguien pega el párrafo completo —con nombre y diagnóstico— en un ' +
        'chat de IA para que se lo redacte mejor. Con toda la buena intención del mundo.',
      gente: 1,
      arreglo: 'no pegarlo',
    },
    {
      que:
        'El texto sale de la institución y queda almacenado en el servidor de un tercero, ' +
        'probablemente fuera de Chile.',
      gente: 1,
      arreglo: 'nada que usted controle',
    },
    {
      que:
        'Según el servicio y la configuración de la cuenta, ese texto puede quedar disponible para ' +
        'revisión humana o para mejorar el sistema.',
      gente: 5,
      arreglo: 'imposible saberlo',
    },
    {
      que:
        'La persona del diagnóstico nunca supo que su dato de salud salió, y por tanto no pudo ' +
        'oponerse ni pedir que se borrara.',
      gente: 6,
      arreglo: 'ya no se le puede pedir permiso',
    },
    {
      que:
        'Si alguien pregunta —ella misma, o quien fiscalice—, la institución tiene que explicar ' +
        'cómo salió ese dato y quién lo autorizó.',
      gente: 40,
      arreglo: 'no hay respuesta buena',
    },
  ],
  remate:
    'De los cinco pasos, solo el primero estaba en su mano. Los otros cuatro ya no.',
  leccion:
    'Un dato de salud que sale de la institución no vuelve. No hay botón de deshacer, no hay forma ' +
    'de saber dónde quedó, y la persona afectada nunca eligió. Por eso la regla no es "ten ' +
    'cuidado": es no lo pegues.',
}

// "Verde, ámbar, rojo": el termómetro de riesgo. Reutiliza el componente de
// quiz de opciones, el mismo de "¿Quién responde por este dato?".
export const termometro = {
  etiquetaItem: 'Tarea',
  roles: [
    {
      id: 'verde',
      nombre: 'Verde',
      icono: '🟢',
      desc: 'La IA puede hacerlo. Usted revisa el resultado, igual que revisaría el de un practicante nuevo.',
    },
    {
      id: 'ambar',
      nombre: 'Ámbar',
      icono: '🟡',
      desc: 'Ayuda, pero el resultado hay que contrastarlo contra la fuente antes de usarlo para nada.',
    },
    {
      id: 'rojo',
      nombre: 'Rojo',
      icono: '🔴',
      desc: 'No. O decide sobre una persona, o saca de la institución datos que identifican a alguien.',
    },
  ],
  situaciones: [
    {
      texto: 'Resumir en una plana un documento de sesenta páginas para el comité.',
      correcto: 'verde',
      explica:
        'Leer mucho y comprimir es exactamente para lo que sirve. El documento es público o interno, ' +
        'no identifica a nadie, y usted lee el resumen antes de pasarlo.',
    },
    {
      texto: 'Redactar el borrador de una respuesta a una consulta sobre permisos.',
      correcto: 'verde',
      explica:
        'Un borrador es un borrador. Lo escribe en segundos y usted lo corrige en dos minutos — ' +
        'siempre que la consulta vaya sin los datos de quien pregunta.',
    },
    {
      texto: 'Comparar dos versiones de un reglamento interno y listar las diferencias.',
      correcto: 'ambar',
      explica:
        'Lo hace bien casi siempre, y "casi siempre" no basta con un reglamento. Sirve para no ' +
        'partir de cero, pero cada diferencia se confirma mirando los dos textos.',
    },
    {
      texto: 'Redactar las bases de un concurso a partir del perfil de cargo.',
      correcto: 'ambar',
      explica:
        'Como borrador, muy útil. Pero las bases fijan requisitos y ponderaciones que después se ' +
        'pueden impugnar: cada línea se revisa contra la normativa antes de publicar.',
    },
    {
      texto: 'Preseleccionar los diez mejores currículums de una convocatoria.',
      correcto: 'rojo',
      explica:
        'Aquí decide sobre personas. Reproducirá los patrones de sus datos de entrenamiento, y ' +
        'sobre todo: no puede explicar por qué dejó fuera a alguien. Ustedes sí tienen que poder.',
    },
    {
      texto: 'Pegar la planilla de dotación con nombres y RUT para que la ordene.',
      correcto: 'rojo',
      explica:
        'No es un problema de criterio, es de datos: esa planilla identifica a cientos de personas ' +
        'y saldría de la institución. Si necesita ordenarla, quítele los identificadores primero.',
    },
  ],
  leccion:
    'El criterio cabe en una frase: la IA lee, resume, ordena y redacta; no decide sobre personas ' +
    'ni ve datos que identifiquen a nadie. Fíjense en lo que tienen en común el verde y el ámbar — ' +
    'el resultado lo revisa y lo firma usted. Y lo que tiene en común todo el rojo: no hay forma de ' +
    'explicar por qué decidió lo que decidió.',
}

// ===================== Sin cambios respecto al taller general =====================
// "Attention" explica cómo funciona un modelo, no CONAF: se usa tal cual.
export { attention } from './contenido'
