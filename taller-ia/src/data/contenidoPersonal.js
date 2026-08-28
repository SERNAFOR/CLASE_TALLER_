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
  titulo: 'Taller de IA',
  sub: 'UIA · Gerencia de Desarrollo de las Personas',
  // La barra lateral son 270px: ahi va la forma corta.
  subNav: 'UIA · Desarrollo de las Personas',
  docTitle: 'Taller de IA · Gerencia de Desarrollo de las Personas · CONAF',
  pie: 'Gobierno de Chile · UIA · CONAF · 2026',
}

export const grupos = [
  { id: 'inicio', etiqueta: 'Inicio', icono: '👥' },
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
    id: 'inicio',
    grupo: 'inicio',
    icono: '👥',
    titulo: 'Bienvenida',
    subtitulo: 'Unidad de Información y Análisis · Gerencia de Desarrollo de las Personas',
    bloques: [
      {
        tipo: 'hero',
        irA: 'programa',
        irTexto: 'Empecemos',
        kicker: 'JORNADA DE DATOS E IA · GERENCIA DE DESARROLLO DE LAS PERSONAS',
        titulo: 'A ustedes los mandaron. Empecemos por ahí.',
        texto:
          'Nadie viene voluntariamente a un taller de inteligencia artificial a las nueve de la ' +
          'mañana. Así que partamos por lo que están pensando: no, esto no viene a reemplazarlos. ' +
          'Entre otras cosas porque la IA no firma, y aquí el que firma es el que responde. Lo que ' +
          'sí hace es leer rápido y redactar decente. En tres horas vamos a meterle contratos, ' +
          'licencias, dotación y concursos, que es de lo que ustedes saben más que nosotros.',
      },
      {
        tipo: 'tarjetas',
        titulo: 'Cómo van a ser estas tres horas',
        items: [
          { icono: '🗂️', titulo: '1 · Los datos primero', texto: 'Dos actividades cortas. Una IA con datos malos se equivoca más rápido, no menos.' },
          { icono: '📖', titulo: '2 · Qué es esto realmente', texto: 'Sin ciencia ficción y sin vender nada. Qué hace, qué no, y dónde se cae.' },
          { icono: '🧪', titulo: '3 · El laboratorio', texto: 'Ejercicios con casos de personal. Ninguno dura más de siete minutos.' },
          { icono: '🗣️', titulo: '4 · Hablan ustedes', texto: 'Las fricciones reales de la gerencia. Es el bloque más largo y no es casualidad.' },
        ],
      },
      {
        tipo: 'tarjetas',
        titulo: 'Cuatro cosas que se van a llevar sabiendo hacer',
        items: [
          { icono: '✍️', titulo: 'Pedirle bien', texto: 'La diferencia entre "necesito unos datos" y un dato que sirve.' },
          { icono: '🕵️', titulo: 'Pillarla mintiendo', texto: 'Inventa plazos y normas con total seguridad. Se aprende a detectarlo.' },
          { icono: '🔒', titulo: 'Saber qué no pegar', texto: 'Un diagnóstico o un RUT en un chat público no se despega nunca más.' },
          { icono: '👑', titulo: 'Saber quién responde', texto: 'Cuando el dato de dotación no cuadra, la pregunta no es cuál. Es quién.' },
        ],
      },
    ],
  },

  {
    id: 'programa',
    grupo: 'inicio',
    icono: '🗓️',
    titulo: 'Programa del día',
    subtitulo: '09:00 – 12:00 · horario referencial',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'Así se organiza la sesión. Los horarios son referenciales; lo importante es el orden: ' +
          'primero los datos, después la IA, y la última hora es de ustedes.',
      },
      {
        tipo: 'programa',
        items: [
          { hora: '09:00', dur: '10 min', icono: '👋', titulo: 'Bienvenida y la pregunta incómoda', desc: 'Apertura, contexto, y respondemos de frente lo que la sala vino pensando.' },
          { hora: '09:10', dur: '30 min', icono: '🎤', titulo: 'Charla: datos y transformación digital en el Estado', desc: 'Por qué el Estado —y CONAF— se está moviendo hacia la gestión de datos, y qué significa eso para el dato de personas.' },
          { hora: '09:40', dur: '20 min', icono: '🗂️', titulo: 'Datos de personas', desc: 'Los cimientos antes de la IA: 2 actividades prácticas — roles del dato y diagnóstico de madurez de la gerencia.' },
          { hora: '10:00', dur: '15 min', icono: '☕', titulo: 'Coffee break', desc: 'Vuelvan con una pega suya que odien. Una. La vamos a usar a las once.' },
          { hora: '10:15', dur: '45 min', icono: '🧠🧪', titulo: 'Taller de IA + Laboratorio', desc: 'Qué es (y qué no es) la IA, riesgos clave, y los ejercicios del núcleo: pedirle bien, cazar alucinaciones y proteger datos sensibles.' },
          { hora: '11:00', dur: '50 min', icono: '🗣️', titulo: 'La parte donde hablan ustedes', desc: 'Las fricciones reales de la gerencia. Primero cada uno en papel, después en mesas, y al final la lista completa en pantalla.' },
          { hora: '11:50', dur: '10 min', icono: '🏁', titulo: 'Cierre y compromiso', desc: 'Las tres reglas del día, el compromiso escrito y la fecha en que la UIA vuelve.' },
        ],
      },
      {
        tipo: 'descarga',
        archivo: 'programa-jornada.pdf',
        titulo: 'Programa en PDF',
        texto: 'Descarga el programa de la jornada para imprimir o compartir.',
      },
      {
        tipo: 'destacado',
        icono: '💡',
        titulo: 'Para quien facilita',
        texto:
          'El Laboratorio está ordenado con el núcleo primero: recorriendo el menú de arriba abajo ' +
          'se dicta la versión corta. Cada sección dice en su subtítulo si es núcleo, de segundo ' +
          'nivel u opcional. Si la jornada empieza tarde se recorta desde abajo — nunca desde ' +
          '"La parte donde hablan ustedes".',
      },
    ],
  },

  {
    id: 'unidad',
    grupo: 'inicio',
    icono: '🤝',
    titulo: 'La UIA',
    subtitulo: '¿Para qué sirve nuestra Unidad?',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'Somos la Unidad de Información y Análisis Institucional. No venimos a decirles cómo ' +
          'hacer su trabajo: ustedes saben de personas, contratos y licencias mucho más que ' +
          'nosotros. Venimos a que los datos y las herramientas dejen de estorbarles.',
      },
      {
        tipo: 'dosColumnas',
        titulo: 'El modelo de colaboración',
        columnas: [
          {
            titulo: 'Ustedes aportan',
            texto:
              'El conocimiento del negocio: selección y concursos, contratos, remuneraciones, ' +
              'bienestar, relaciones laborales, capacitación, y la normativa que rige todo eso.',
          },
          {
            titulo: 'Nosotros aportamos',
            texto:
              'Datos, sistemas y herramientas de IA — y el tiempo de sentarnos a entender el ' +
              'proceso antes de proponer nada.',
          },
        ],
      },
      {
        tipo: 'frase',
        texto: 'Que se note que la UIA está.',
      },
    ],
  },

  {
    id: 'plan',
    grupo: 'inicio',
    icono: '🗺️',
    titulo: 'Plan UIA 2026–2030',
    subtitulo: 'Datos, sistemas e IA al servicio de CONAF',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'El plan de la Unidad para los próximos años tiene tres frentes: ordenar los datos, ' +
          'modernizar los sistemas y poner la IA a trabajar donde de verdad ahorra tiempo.',
      },
      {
        tipo: 'tarjetas',
        titulo: 'Dónde toca a esta gerencia',
        items: [
          {
            icono: '📚',
            titulo: 'Normativa de personas',
            texto:
              'Un asistente que responde con citas verificables sobre el corpus que ustedes ' +
              'consultan: reglamento interno, circulares, dictámenes. Es una oportunidad, no un ' +
              'producto entregado.',
          },
          {
            icono: '🔁',
            titulo: 'Procesos repetitivos',
            texto: 'Certificados, informes de dotación, respuestas que se escriben veinte veces al mes.',
          },
          {
            icono: '🔒',
            titulo: 'Datos sensibles bien tratados',
            texto: 'La Ley 21.719 llega en diciembre de 2026 y esta gerencia es la más expuesta.',
          },
        ],
      },
      {
        tipo: 'timeline',
        titulo: 'Horizonte 2026 — 2030',
        items: [
          { año: '2026', texto: 'Instalación: gobernanza de datos, primeros pilotos y el plazo de la Ley 21.719.' },
          { año: '2027–2028', texto: 'Sistemas y automatización de lo repetitivo.' },
          { año: '2029–2030', texto: 'Analítica para decidir, no solo para reportar.' },
        ],
      },
    ],
  },

  // ===================== DATOS DE PERSONAS =====================
  {
    id: 'gobernanza',
    grupo: 'gobernanza',
    icono: '📊',
    titulo: 'Por qué gobernanza, por qué ahora',
    subtitulo: 'PMG-MEI y Ley 21.719 · dos plazos, el mismo mes',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'Antes de hablar de inteligencia artificial, hablemos de su alimento: los datos. Una IA ' +
          'alimentada con datos inconsistentes produce resultados inconsistentes, con más ' +
          'confianza y a más velocidad. Y en esta gerencia el dato no es una superficie ni un ' +
          'presupuesto: es una persona con nombre.',
      },
      {
        tipo: 'destacado',
        icono: '📅',
        titulo: 'Diciembre de 2026, dos veces',
        texto:
          'CONAF debe alcanzar el nivel "básico" de madurez en gestión de datos como parte del ' +
          'PMG-MEI. Y en el mismo mes entra en vigencia la Ley 21.719 sobre protección de datos ' +
          'personales. Para esta gerencia esas dos fechas son la misma conversación: quién ' +
          'responde por cada dato, quién puede verlo y qué pasa cuando está malo.',
      },
      {
        tipo: 'lista',
        titulo: 'Por qué el dato de personas es el caso difícil',
        items: [
          'Es el más sensible del servicio: salud, remuneraciones, evaluaciones, denuncias.',
          'Vive repartido entre el sistema de personal, planillas y correos.',
          'Tiene titular: la persona puede pedir acceder a sus datos y corregirlos.',
          'Y cuando está malo, el error no sale en un informe: sale en la vida de alguien.',
        ],
      },
      {
        tipo: 'parrafo',
        texto:
          'Ahora, a practicar: las dos actividades que siguen muestran en carne propia por qué ' +
          'esto importa. Se hacen entre todos, a mano alzada.',
      },
    ],
  },

  {
    id: 'roles-datos',
    grupo: 'gobernanza',
    icono: '🧑‍⚖️',
    titulo: '¿Quién responde por este dato?',
    subtitulo: 'NÚCLEO · Actividad 1 · ~6 min · los roles de la gobernanza',
    interactivo: 'rolesDatos',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'La gobernanza de datos se sostiene en roles claros, y el PMG-MEI exige a CONAF ' +
          'formalizar al menos dos. Primero conocemos los tres. Después voy a leer cinco ' +
          'situaciones y, antes de que yo toque nada, la sala vota: ¿a quién le toca actuar?',
      },
    ],
  },

  {
    id: 'madurez-datos',
    grupo: 'gobernanza',
    icono: '📏',
    titulo: '¿Qué tan maduros son tus datos?',
    subtitulo: 'Opcional · Actividad 2 · ~5 min · censo de la gerencia',
    interactivo: 'madurezDatos',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'Cinco preguntas de sí o no sobre esta gerencia. No es un test individual: lo vamos a ' +
          'responder entre todos, a mano alzada, y marco lo que diga la mayoría. El resultado que ' +
          'salga en pantalla es el diagnóstico de la Gerencia de Desarrollo de las Personas, no ' +
          'el de nadie en particular.',
      },
    ],
  },

  // ===================== TALLER DE IA =====================
  {
    id: 'que-es-ia',
    grupo: 'taller',
    icono: '🧠',
    titulo: '¿Qué es la IA?',
    subtitulo: 'Olviden la ciencia ficción',
    bloques: [
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
    id: 'riesgos',
    grupo: 'taller',
    icono: '⚠️',
    titulo: 'Riesgos',
    subtitulo: 'Y con datos de personas, el doble',
    bloques: [
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

  // ===================== LABORATORIO · NÚCLEO =====================
  {
    id: 'prompt',
    grupo: 'lab',
    icono: '✍️',
    titulo: 'Pídelo bien',
    subtitulo: 'NÚCLEO · ~6 min · la única habilidad que importa hoy',
    interactivo: 'prompt',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'Esto lo armamos entre todos. Parto con una instrucción floja y el medidor va a marcar ' +
          'lo que le falta. Ustedes me gritan qué agregar —quién debe ser, cuánto, sobre qué y en ' +
          'qué formato— y yo escribo. Cuando lleguemos a cuatro de cuatro, ese prompt sirve tal ' +
          'cual el lunes.',
      },
    ],
  },

  {
    id: 'detective',
    grupo: 'lab',
    icono: '🕵️',
    titulo: 'Detective de alucinaciones',
    subtitulo: 'NÚCLEO · ~6 min · caza los datos que la IA inventó',
    interactivo: 'detective',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'Abajo hay un resumen sobre licencias médicas generado por IA. La mayoría es correcto, ' +
          'pero tres frases traen datos inventados. Voy a leerlas una por una: pulgar arriba si ' +
          'creen que es verdad, pulgar abajo si creen que la IA la inventó. Marco lo que diga la ' +
          'sala y después comprobamos.',
      },
    ],
  },

  {
    id: 'privacidad',
    grupo: 'lab',
    icono: '🔒',
    titulo: 'Qué NO contarle a la IA',
    subtitulo: 'NÚCLEO · ~7 min · el ejercicio más importante del día',
    interactivo: 'privacidad',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'Voy a leer en voz alta un prompt que alguien podría escribir un martes cualquiera. ' +
          'Cuando pase por un dato que NO debería ir ahí, ustedes gritan "tacha". Ojo: no todo lo ' +
          'que parece dato es sensible, y tachar de más deja el texto inservible.',
      },
    ],
  },

  {
    id: 'doc-accion',
    grupo: 'lab',
    icono: '⚙️',
    titulo: 'Del artículo a la lista de pendientes',
    subtitulo: 'NÚCLEO · ~4 min · de texto normativo a checklist',
    interactivo: 'docAccion',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'Un párrafo normativo denso, y un botón. Miren lo que devuelve — y fíjense sobre todo ' +
          'en una cosa: para hacer esto no le pegamos ni un dato del caso. Le pegamos el texto de ' +
          'la norma, no el expediente.',
      },
    ],
  },

  // ===================== LABORATORIO · SEGUNDO NIVEL =====================
  {
    id: 'analisis-ley',
    grupo: 'lab',
    icono: '⚖️',
    titulo: 'Una palabra lo cambia todo',
    subtitulo: 'Segundo nivel · ~4 min · caso: el proceso de licencias',
    interactivo: 'analisisLey',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'Mismo documento, misma IA, casi el mismo prompt. Voy a añadir una sola palabra y el ' +
          'análisis entero cambia de naturaleza. Antes de que la pulse: ¿qué creen que va a pasar?',
      },
    ],
  },

  {
    id: 'perceptron',
    grupo: 'lab',
    icono: '📏',
    titulo: 'Dónde se pone la raya',
    subtitulo: 'Segundo nivel · ~5 min · esto es una neurona artificial',
    interactivo: 'perceptron',
    bloques: [
      {
        tipo: 'destacado',
        icono: '🔧',
        titulo: 'Se llama perceptrón y suena a nave espacial',
        texto:
          'Es una raya en un plano que separa dos grupos. Eso es todo. En dos minutos van a poder ' +
          'moverla ustedes, sin leer una sola fórmula — el detalle técnico queda plegado para ' +
          'quien lo quiera.',
      },
      {
        tipo: 'parrafo',
        texto:
          'Abajo hay dos grupos de puntos y una raya. Muevan los controles y miren cómo la raya ' +
          'se inclina y se desplaza. Cuando separe bien los dos colores, el marcador lo dice. ' +
          'Después dejen que aprenda sola.',
      },
      {
        tipo: 'destacado',
        icono: '🤝',
        titulo: 'Esto es lo que ustedes hacen a mano',
        texto:
          'Cada vez que arman una terna están poniendo una raya: de aquí para allá pasa, de aquí ' +
          'para acá no. La diferencia es que ustedes pueden explicar por qué la pusieron ahí, y ' +
          'la máquina no. Por eso la decisión sobre personas es humana y fundada.',
      },
    ],
  },

  // ===================== LABORATORIO · OPCIONALES =====================
  {
    id: 'sube-nivel',
    grupo: 'lab',
    icono: '📈',
    titulo: 'De "necesito unos datos" a un dato que sirve',
    subtitulo: 'Opcional · ~3 min · el mismo encargo, tres niveles',
    interactivo: 'subeNivel',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'Tres versiones del mismo encargo. Voy moviendo el control y ustedes me dicen en cuál ' +
          'empezarían a confiar.',
      },
    ],
  },

  {
    id: 'comparar-ia',
    grupo: 'lab',
    icono: '🤖',
    titulo: 'Le preguntamos a las tres',
    subtitulo: 'Opcional · ~3 min · misma pregunta, ChatGPT, Claude y Gemini',
    interactivo: 'compararIA',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'La misma pregunta a las tres herramientas más usadas. No hay una correcta: hay tres ' +
          'formas válidas, y sirven para cosas distintas.',
      },
    ],
  },

  {
    id: 'publicos',
    grupo: 'lab',
    icono: '🗣️',
    titulo: '¿Y ahora cómo se lo explico a…?',
    subtitulo: 'Opcional · ~4 min · al trabajador, a la jefatura, al gremio, a la Dirección del Trabajo',
    interactivo: 'publicos',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'Los hechos no se mueven; cambia a quién se le habla. Elijan ustedes a quién le ' +
          'explicamos primero.',
      },
    ],
  },

  {
    id: 'red-neuronal',
    grupo: 'lab',
    icono: '🧠',
    titulo: 'Cuando una sola raya no alcanza',
    subtitulo: 'Opcional · ~3 min · de una neurona a muchas, en capas',
    interactivo: 'redNeuronal',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'Una neurona traza una raya. Muchas neuronas en capas trazan fronteras tan complicadas ' +
          'como haga falta. Pulsen y miren cómo la señal recorre la red.',
      },
      {
        tipo: 'destacado',
        icono: '🌲',
        titulo: 'Por qué el ejemplo es de terreno y no de personal',
        texto:
          'Podríamos haber puesto una red que prediga quién va a renunciar a partir de su ' +
          'antigüedad y sus evaluaciones — técnicamente es lo mismo. No lo hicimos a propósito, ' +
          'porque el punto de esta jornada es el contrario: sobre incendios, la máquina propone; ' +
          'sobre personas, la decisión es humana, fundada y firmada.',
      },
    ],
  },

  {
    id: 'attention',
    grupo: 'lab',
    icono: '🎯',
    titulo: 'A qué le pone atención',
    subtitulo: 'Opcional · ~4 min · el mecanismo detrás de ChatGPT. En inglés se llama "attention"',
    interactivo: 'attention',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'Cada palabra reparte su atención entre las demás y se queda con lo que le sirve. Es lo ' +
          'mismo que hace usted revisando una carpeta de postulación: mira el certificado de ' +
          'título, no el color de la carátula.',
      },
    ],
  },

  {
    id: 'alucina',
    grupo: 'lab',
    icono: '🎲',
    titulo: 'Por qué sabe pero alucina',
    subtitulo: 'Opcional · ~4 min · optimizado para sonar plausible, no para decir verdad',
    interactivo: 'alucina',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'Dos respuestas a la misma pregunta sobre licencias médicas: una de un modelo sin ' +
          'pulir y otra ya entrenada con humanos. Ustedes votan cuál es mejor — y de paso hacen ' +
          'exactamente lo que hacen las personas que entrenan estos modelos.',
      },
    ],
  },

  // ===================== PARA CERRAR =====================
  {
    id: 'dolencias',
    grupo: 'final',
    icono: '🗣️',
    titulo: 'La parte donde hablan ustedes',
    subtitulo: 'NÚCLEO · ~50 min · el motivo por el que la UIA vino',
    interactivo: 'dolencias',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'Esto no lo trajimos nosotros. Primero cada uno escribe en silencio, en la guía de ' +
          'papel, ocho minutos. Después lo comparten en su mesa y eligen las tres que más duelen. ' +
          'Y solo entonces las anotamos aquí, por mesas. Nadie tiene que exponerse solo: habla la ' +
          'mesa, no la persona.',
      },
      {
        tipo: 'descarga',
        archivo: 'guia-fricciones-personas.pdf',
        titulo: 'Guía de fricciones en PDF',
        texto: '7 preguntas para hacer el levantamiento en papel. Imprimir una por participante.',
      },
      {
        tipo: 'destacado',
        icono: '💾',
        titulo: 'La lista no se pierde',
        texto:
          'Se guarda sola en este navegador: pueden navegar a otra sección y volver, o recargar, ' +
          'sin perder nada. Aun así, descárguenla como archivo antes de cerrar la sesión — el ' +
          'portapapeles se pierde con el siguiente Ctrl+C.',
      },
    ],
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
          'bien. No es poco para una mañana. Lo que sigue no lo hacemos nosotros: la próxima vez ' +
          'que estén escribiendo el mismo párrafo por décima vez en el mes, ya saben que se puede ' +
          'pedir de otra forma.',
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
  intro: 'Resumen sobre tramitación de licencias médicas, generado por IA. Tres frases son inventadas. ¿Cuáles?',
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

// ===================== Sin cambios respecto al taller general =====================
// "Attention" explica cómo funciona un modelo, no CONAF: se usa tal cual.
export { attention } from './contenido'
