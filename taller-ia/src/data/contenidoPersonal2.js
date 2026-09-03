// Charla de IA · Gerencia de Desarrollo de las Personas (CONAF)
//
// Es /personal contado como CHARLA, no como taller. Mismas secciones, mismo
// orden y las mismas conclusiones. Lo que cambia es que la sala no hace nada:
// donde el taller pedía levantar una tarjeta, votar o gritar "¡tacha!", aquí
// hay una pregunta abierta que se queda en el aire unos segundos y que
// contesta quien expone. Nadie tiene que sacar un dispositivo ni levantarse.
//
// POR QUÉ SIGUEN LOS TRES VISUALES (perceptrón, red neuronal, attention): no
// son actividades de la sala, son demostraciones de quien habla — el momento
// en que se VE funcionar lo que se acaba de contar. En una charla eso no
// sobra: es lo que la gente se lleva a casa.
//
// Todo lo que no sea la lista de secciones se hereda de contenidoPersonal.js.
// Los datos de los ejercicios siguen disponibles (los tres visuales los usan) y
// heredarlos garantiza que este módulo exporte los mismos nombres que los
// otros dos talleres, que es el contrato que comprueba talleres.js.
export * from './contenidoPersonal'

export const marca = {
  id: 'personal2',
  presentacion: true,
  titulo: 'IA en la Gerencia',
  sub: 'UIA · Gerencia de Desarrollo de las Personas',
  subNav: 'UIA · Desarrollo de las Personas',
  docTitle: 'IA en la Gerencia de Desarrollo de las Personas · CONAF',
  pie: 'Gobierno de Chile · UIA · CONAF · 2026',
}

// ===================== Secciones =====================
// Una idea por diapositiva. El patrón se repite: pregunta abierta → lo que
// pasó de verdad → la frase que se llevan. Si una sección necesita más de
// cuatro pasos, es que trae dos ideas y hay que partirla.

export const secciones = [
  {
    id: 'apertura',
    grupo: 'gobernanza',
    icono: '✋',
    titulo: 'Antes de empezar',
    subtitulo: 'dos preguntas que no hace falta contestar',
    bloques: [
      {
        tipo: 'pregunta',
        icono: '🤫',
        consigna: 'La primera',
        texto:
          '¿Cuántos de ustedes usaron una inteligencia artificial esta semana para algo del ' +
          'trabajo… y no se lo contaron a nadie?',
      },
      {
        tipo: 'pregunta',
        icono: '🙃',
        consigna: 'Y la incómoda',
        texto: '¿A cuántos les han dado a entender que mejor no la usen?',
      },
      {
        tipo: 'frase',
        texto: 'Toda esta charla cabe entre esas dos preguntas. Vamos desde ahí.',
      },
    ],
  },

  {
    id: 'roles-datos',
    grupo: 'gobernanza',
    icono: '🧑‍⚖️',
    titulo: '¿Quién responde por este dato?',
    subtitulo: 'los roles de la gobernanza',
    bloques: [
      {
        tipo: 'pregunta',
        icono: '🧮',
        consigna: 'Un martes cualquiera',
        texto:
          'Dos sistemas dan una dotación distinta para la misma unidad. ¿Cuál de los dos ' +
          'números está malo?',
      },
      { tipo: 'frase', texto: 'Esa es la pregunta equivocada.' },
      {
        tipo: 'destacado',
        icono: '👑',
        titulo: 'La pregunta correcta es quién responde por él',
        texto:
          'El dueño del dato define qué significa, para qué se puede usar y quién accede — y ' +
          'responde con nombre cuando alguien pide corregirlo. El custodio técnico administra el ' +
          'sistema, los accesos y el registro de quién entra. El usuario lo ocupa para trabajar, ' +
          'no lo saca del sistema y reporta los errores que detecta.',
      },
      {
        tipo: 'frase',
        texto:
          'Si nadie es dueño, nadie corrige. Y el que termina dando la explicación es el que ' +
          'iba pasando.',
      },
    ],
  },

  {
    id: 'madurez-datos',
    grupo: 'gobernanza',
    icono: '📏',
    titulo: '¿Qué tan maduros son tus datos?',
    subtitulo: 'el censo que nadie quiere hacer',
    bloques: [
      {
        tipo: 'pregunta',
        icono: '📋',
        consigna: 'Contéstenselo para adentro',
        texto:
          '¿Sabrían decir hoy, sin buscar, quién responde por cada dato de personas que produce ' +
          'esta gerencia?',
      },
      {
        tipo: 'parrafo',
        texto:
          'Si la respuesta es "más o menos", no está mal: es donde está casi todo el Estado. ' +
          'Pero conviene saberlo ahora y no en diciembre.',
      },
      {
        tipo: 'destacado',
        icono: '📅',
        titulo: 'Diciembre de 2026 trae dos cosas a la vez',
        texto:
          'El diagnóstico de madurez de datos que CONAF debe rendir, y el mes en que empieza a ' +
          'regir la Ley 21.719. Cada "más o menos" de hoy es un punto de esa lista.',
      },
    ],
  },

  {
    id: 'que-es-ia',
    grupo: 'taller',
    icono: '🧠',
    titulo: '¿Qué es la IA?',
    subtitulo: 'olviden la ciencia ficción',
    bloques: [
      {
        tipo: 'pregunta',
        icono: '🗣️',
        consigna: 'Si tuvieran que explicarlo',
        texto:
          'Si un colega les pregunta mañana qué es la inteligencia artificial, ¿qué le dirían ' +
          'en una frase?',
      },
      {
        tipo: 'parrafo',
        texto:
          'No es un cerebro ni una conciencia. Es un sistema que leyó una cantidad enorme de ' +
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
          'tramitan practicantes: ya saben exactamente cuánto sirve y cuánto hay que revisarle.',
      },
      { tipo: 'frase', texto: 'No firma. Y aquí, el que firma es el que responde.' },
    ],
  },

  {
    id: 'cronometro',
    grupo: 'lab',
    icono: '⏱️',
    titulo: 'Lo que cuesta hacerlo a mano',
    subtitulo: 'la misma tarea, con y sin IA',
    bloques: [
      {
        tipo: 'pregunta',
        icono: '⏱️',
        consigna: 'Pónganle un número',
        texto:
          'Responder por escrito a una trabajadora que pregunta cómo tramitar su licencia y qué ' +
          'plazos la afectan. ¿Cuánto se tarda?',
      },
      {
        tipo: 'destacado',
        icono: '✍️',
        titulo: 'Cuarenta y cuatro minutos, hecho como se hace hoy',
        texto:
          'Doce en buscar la norma y confirmar los plazos. Ocho en encontrar un correo parecido ' +
          'para no partir de cero. Dieciocho en redactar. Y seis en revisar y firmar.',
      },
      {
        tipo: 'destacado',
        icono: '🤖',
        titulo: 'Once, con IA',
        texto:
          'Tres en escribir bien lo que se pide. Dos en leer el borrador. Y los mismos seis de ' +
          'revisar y firmar.',
      },
      {
        tipo: 'frase',
        texto:
          'Fíjense en dónde NO hay diferencia: los seis minutos de criterio son idénticos en las ' +
          'dos columnas. Lo que se fue fueron los treinta y tres de buscar y teclear.',
      },
    ],
  },

  {
    id: 'prompt',
    grupo: 'lab',
    icono: '✍️',
    titulo: 'Pídelo bien',
    subtitulo: 'la única habilidad que importa hoy',
    bloques: [
      {
        tipo: 'pregunta',
        icono: '🔍',
        consigna: 'Miren esta instrucción',
        texto: '"Hazme un correo sobre las licencias médicas." ¿Qué le falta?',
      },
      {
        tipo: 'destacado',
        icono: '🧩',
        titulo: 'Le faltan cuatro cosas, siempre las mismas',
        texto:
          'Rol: quién debe ser. Cantidad: de qué tamaño. Foco: sobre qué exactamente. Formato: ' +
          'en qué forma lo quiere. Es lo mismo que uno le explica a alguien que llega nuevo.',
      },
      {
        tipo: 'destacado',
        icono: '✅',
        titulo: 'La misma petición, con las cuatro',
        texto:
          '"Actúa como analista de la Gerencia de Desarrollo de las Personas de CONAF. Redacta ' +
          'en 5 viñetas, máximo media plana, la respuesta a una trabajadora que pregunta cómo ' +
          'tramitar su licencia médica, centrado en los plazos y en quién hace cada paso, en ' +
          'tono formal y cercano, como correo."',
      },
      {
        tipo: 'frase',
        texto: 'No cambió la norma ni cambió la IA. Cambió cómo se pidió.',
      },
    ],
  },

  {
    id: 'sube-nivel',
    grupo: 'lab',
    icono: '📈',
    titulo: 'De "necesito unos datos" a un dato que sirve',
    subtitulo: 'el mismo encargo, tres niveles',
    bloques: [
      {
        tipo: 'pregunta',
        icono: '📨',
        consigna: 'Dos correos que ustedes reciben todas las semanas',
        texto:
          'Uno dice "necesito unos datos". El otro, "necesito la dotación por estamento al 31 de ' +
          'agosto, en Excel". ¿A cuál le responden bien?',
      },
      {
        tipo: 'parrafo',
        texto:
          'Ya saben la respuesta, porque llevan años en el otro lado de ese correo. Con la IA ' +
          'pasa exactamente lo mismo, solo que la IA nunca va a llamarles para preguntar a qué ' +
          'se referían.',
      },
      {
        tipo: 'frase',
        texto: 'Pedir bien no es un truco técnico. Es la misma cortesía de siempre, por escrito.',
      },
    ],
  },

  {
    id: 'detective',
    grupo: 'lab',
    icono: '🕵️',
    titulo: 'Detective de alucinaciones',
    subtitulo: 'caza los datos que la IA inventó',
    bloques: [
      {
        tipo: 'pregunta',
        icono: '🕵️',
        consigna: 'Un resumen generado por IA',
        texto:
          'De ocho frases sobre tramitación de licencias médicas, tres son inventadas. ¿Cuáles ' +
          'creen que son?',
      },
      {
        tipo: 'parrafo',
        texto:
          'Nadie acierta las tres a la primera. Ninguna de las falsas sonaba falsa: estaban bien ' +
          'redactadas, en el tono correcto, y encajaban con lo que uno esperaría leer.',
      },
      {
        tipo: 'destacado',
        icono: '🔢',
        titulo: 'Las tres eran números',
        texto:
          'Un plazo, un artículo y un organismo con fecha. No es casualidad: el modelo fue ' +
          'premiado por sonar bien, nunca por tener razón.',
      },
      {
        tipo: 'frase',
        texto:
          'Si la respuesta trae un plazo, un artículo o un monto, se verifica en la fuente antes ' +
          'de firmar. Esa es la regla del día.',
      },
    ],
  },

  {
    id: 'cadena',
    grupo: 'lab',
    icono: '❄️',
    titulo: 'La bola de nieve',
    subtitulo: 'un plazo inventado, cinco pasos después',
    bloques: [
      {
        tipo: 'pregunta',
        icono: '❄️',
        consigna: 'Sigan la pelota',
        texto: 'Una IA se inventa un plazo y nadie lo comprueba. ¿Hasta dónde llega?',
      },
      {
        tipo: 'destacado',
        icono: '📩',
        titulo: 'Paso a paso, hacia afuera',
        texto:
          'Alguien lo copia en un correo a su jefatura: ya tiene remitente. La jefatura decide ' +
          'con ese plazo y se lo comunica a la persona, que organiza su semana. La decisión se ' +
          'formaliza y entra al expediente. La persona reclama, y hay que reconstruir de dónde ' +
          'salió — y nadie se acuerda de que empezó en un chat.',
      },
      {
        tipo: 'destacado',
        icono: '📈',
        titulo: 'De una persona a cuarenta',
        texto:
          'En el primer paso había una persona involucrada y arreglarlo costaba treinta ' +
          'segundos. En el último hay cuarenta, y cuesta semanas.',
      },
      {
        tipo: 'frase',
        texto:
          'El dato inventado no se queda donde nació: viaja, se copia y se convierte en ' +
          'decisión. Se verifica antes de que salga de su escritorio, no después del reclamo.',
      },
    ],
  },

  {
    id: 'comparar-ia',
    grupo: 'lab',
    icono: '🤖',
    titulo: 'Le preguntamos a las tres',
    subtitulo: 'misma pregunta a ChatGPT, Claude y Gemini',
    bloques: [
      {
        tipo: 'pregunta',
        icono: '🤖',
        consigna: 'Tres respuestas a la misma pregunta',
        texto: '¿Cuál de las tres sabe la respuesta correcta?',
      },
      { tipo: 'frase', texto: 'Ninguna. Y las tres están bien.' },
      {
        tipo: 'parrafo',
        texto:
          'Son tres formas válidas de responder lo mismo, como tres jefaturas revisando el mismo ' +
          'oficio. No existe la IA que "sepa la respuesta": existe la herramienta con la que hay ' +
          'que aprender a conversar.',
      },
      {
        tipo: 'destacado',
        icono: '💳',
        titulo: 'Y una ya está pagada',
        texto: 'CONAF ya paga licencia de Gemini Pro. Esa la tienen disponible desde hoy.',
      },
    ],
  },

  {
    id: 'analisis-ley',
    grupo: 'lab',
    icono: '⚖️',
    titulo: 'Una palabra lo cambia todo',
    subtitulo: 'el sesgo del proceso técnico',
    bloques: [
      {
        tipo: 'pregunta',
        icono: '⚖️',
        consigna: 'Voy a añadir una sola palabra al encargo',
        texto: '¿Qué creen que va a cambiar en la respuesta?',
      },
      {
        tipo: 'parrafo',
        texto:
          'Cambió el análisis entero: de describir, a evaluar. Mismo texto, mismo modelo, misma ' +
          'pregunta. Una palabra.',
      },
      {
        tipo: 'frase',
        texto:
          'En esta gerencia saben mejor que nadie lo que cuesta una palabra: entre "hábiles" y ' +
          '"corridos" hay un plazo vencido.',
      },
    ],
  },

  {
    id: 'publicos',
    grupo: 'lab',
    icono: '🗣️',
    titulo: '¿Y ahora cómo se lo explico a…?',
    subtitulo: 'el mismo hecho, tres destinatarios',
    bloques: [
      {
        tipo: 'pregunta',
        icono: '🗣️',
        consigna: 'Mismo trámite, tres personas',
        texto:
          '¿Se lo explicarían igual a la trabajadora, a la jefatura y a quien viene a ' +
          'fiscalizar?',
      },
      {
        tipo: 'parrafo',
        texto:
          'Claro que no, y lo hacen todos los días sin pensarlo. La novedad es que ahora se ' +
          'puede pedir por escrito: los hechos no se mueven, cambia a quién se le habla.',
      },
      {
        tipo: 'frase',
        texto: 'Si no le dicen para quién es, la IA le escribe a nadie.',
      },
    ],
  },

  {
    id: 'privacidad',
    grupo: 'lab',
    icono: '🔒',
    titulo: 'Qué NO contarle a la IA',
    subtitulo: 'lo más importante del día',
    bloques: [
      {
        tipo: 'pregunta',
        icono: '🔒',
        consigna: 'Un prompt que alguien podría escribir un martes cualquiera',
        texto:
          'Nombre, RUT, diagnóstico, unidad, región, plazo y número de ley. ¿Qué de todo eso NO ' +
          'debería estar ahí?',
      },
      {
        tipo: 'destacado',
        icono: '🩺',
        titulo: 'El diagnóstico, antes que el nombre',
        texto:
          'Es un dato de salud y la Ley 21.719 lo protege con estándar reforzado. Peor todavía: ' +
          'en una licencia médica el diagnóstico va en la sección confidencial — es información ' +
          'que la empresa ni siquiera debería tener.',
      },
      {
        tipo: 'parrafo',
        texto:
          'La unidad, la región, el plazo y el número de la ley son públicos. Tacharlos solo ' +
          'deja el texto inservible.',
      },
      {
        tipo: 'frase',
        texto: 'Si no lo publicaría, no lo pega. Y una IA pública no es un sistema de CONAF.',
      },
    ],
  },

  {
    id: 'fuga',
    grupo: 'lab',
    icono: '💧',
    titulo: 'El dato que se escapó',
    subtitulo: 'un diagnóstico pegado en un chat, paso a paso',
    bloques: [
      {
        tipo: 'pregunta',
        icono: '💧',
        consigna: 'Supongamos que ya pasó',
        texto:
          'El diagnóstico de una persona ya salió de la institución, pegado en un chat. ¿Dónde ' +
          'termina?',
      },
      {
        tipo: 'parrafo',
        texto:
          'De los cinco pasos que vienen después, solo el primero estaba en su mano. Los otros ' +
          'cuatro ya no: dónde queda almacenado, quién puede verlo, para qué se usa y durante ' +
          'cuánto tiempo.',
      },
      {
        tipo: 'destacado',
        icono: '🚫',
        titulo: 'No hay botón de deshacer',
        texto:
          'No hay forma de saber dónde quedó, y la persona afectada nunca eligió que su ' +
          'diagnóstico saliera de aquí.',
      },
      {
        tipo: 'frase',
        texto: 'Por eso la regla no es "ten cuidado". Es no lo pegues.',
      },
    ],
  },

  {
    id: 'doc-accion',
    grupo: 'lab',
    icono: '⚙️',
    titulo: 'Del artículo a la lista de pendientes',
    subtitulo: 'de texto normativo a checklist',
    bloques: [
      {
        tipo: 'pregunta',
        icono: '⚙️',
        consigna: 'Un párrafo denso de reglamento',
        texto: '¿Cuántos pasos concretos creen que salen de aquí?',
      },
      {
        tipo: 'parrafo',
        texto:
          'En segundos, el párrafo se vuelve una lista que se va marcando. Eso es lo que le ' +
          'quita: traducir la norma a pasos, que da lata y no requiere criterio. Lo que no le ' +
          'quita es decidir.',
      },
      {
        tipo: 'destacado',
        icono: '📄',
        titulo: 'Y fíjense de dónde salió la lista',
        texto:
          'Del texto que USTED le pegó. Si en vez de eso le pide que "recuerde" la norma, ahí ' +
          'empieza a inventar.',
      },
      { tipo: 'frase', texto: 'Dale el texto. No le pidas la ley.' },
    ],
  },

  {
    id: 'termometro',
    grupo: 'lab',
    icono: '🌡️',
    titulo: 'Verde, ámbar, rojo',
    subtitulo: 'dónde sí, dónde con cuidado, y dónde no',
    bloques: [
      {
        tipo: 'pregunta',
        icono: '🌡️',
        consigna: 'Seis tareas reales de esta gerencia',
        texto:
          'Resumir sesenta páginas para el comité. Redactar una respuesta sobre permisos. ' +
          'Comparar dos reglamentos. Redactar las bases de un concurso. Preseleccionar los diez ' +
          'mejores currículums. Pegar la planilla con nombres y RUT para que la ordene. ¿Cuáles ' +
          'le darían a una IA?',
      },
      {
        tipo: 'tarjetas',
        items: [
          {
            icono: '🟢',
            titulo: 'Verde',
            texto:
              'Resumir, redactar borradores, comparar textos. La IA puede hacerlo y usted lo ' +
              'revisa, igual que revisaría el trabajo de un practicante nuevo.',
          },
          {
            icono: '🟡',
            titulo: 'Ámbar',
            texto:
              'Redactar bases a partir de un perfil de cargo. Ayuda, pero el resultado se ' +
              'contrasta contra la fuente antes de usarlo para nada.',
          },
          {
            icono: '🔴',
            titulo: 'Rojo',
            texto:
              'Preseleccionar postulantes. Pegar nombres y RUT. Evaluar a una persona. Aquí no ' +
              'entra, y no es por prudencia: es porque no puede explicar por qué decidió eso.',
          },
        ],
      },
      {
        tipo: 'frase',
        texto:
          'La IA lee, resume, ordena y redacta. No decide sobre personas ni ve datos que ' +
          'identifiquen a nadie.',
      },
    ],
  },

  {
    id: 'casos-reales',
    grupo: 'lab',
    icono: '📰',
    titulo: 'A otros ya les pasó',
    subtitulo: 'casos públicos de IA decidiendo sobre personas',
    bloques: [
      {
        tipo: 'pregunta',
        icono: '🤔',
        consigna: 'Antes de que siga',
        texto:
          '¿Creen que una IA entrenada con diez años de contrataciones de una empresa ' +
          'contrataría de forma justa?',
      },
      {
        tipo: 'destacado',
        icono: '📄',
        titulo: 'La herramienta de reclutamiento que hubo que apagar',
        texto:
          'Una empresa tecnológica muy grande construyó un sistema para puntuar currículums y lo ' +
          'entrenó con diez años de contrataciones propias. El sistema aprendió a penalizar los ' +
          'currículums que mencionaban la palabra "mujeres". No falló el código: funcionó ' +
          'perfecto y reprodujo el patrón que se le dio. La descartaron en 2018.',
      },
      {
        tipo: 'destacado',
        icono: '⚖️',
        titulo: 'Y el patrón se repite',
        texto:
          'Sistemas de puntuación de riesgo en administraciones públicas europeas que acabaron ' +
          'señalando desproporcionadamente a personas por su origen o su barrio, y que hubo que ' +
          'retirar. El problema nunca fue el algoritmo: los datos con los que aprendió ya traían ' +
          'la desigualdad dentro.',
      },
      {
        tipo: 'frase',
        texto: 'Un modelo no inventa el sesgo. Lo hereda, lo aplica más rápido y a más gente.',
      },
    ],
  },

  {
    id: 'riesgos',
    grupo: 'taller',
    icono: '⚠️',
    titulo: 'Riesgos',
    subtitulo: 'y con datos de personas, el doble',
    bloques: [
      {
        tipo: 'pregunta',
        icono: '⚠️',
        consigna: 'La pregunta que se estarán haciendo',
        texto:
          'Ya vieron lo que hace bien. ¿Qué es lo que más les preocuparía si mañana la usa toda ' +
          'la gerencia?',
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
              'RUT, diagnósticos, remuneraciones, evaluaciones, denuncias. Lo que se pega en una ' +
              'IA pública, se fue.',
          },
          {
            icono: '⚖️',
            titulo: 'Sesgo al decidir sobre personas',
            texto:
              'Un modelo aprende de lo que ya pasó. Evaluar y seleccionar es humano y fundado.',
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
        texto: 'La IA redacta. Usted decide, verifica y firma. Y esas tres son la misma cosa.',
      },
    ],
  },

  {
    id: 'perceptron',
    grupo: 'lab',
    icono: '📏',
    titulo: 'Dónde se pone la raya',
    subtitulo: 'esto es una neurona artificial',
    consigna: {
      icono: '📏',
      texto: '¿Dónde pondrían ustedes la raya para separar los dos colores?',
    },
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
    subtitulo: 'el mecanismo detrás de ChatGPT',
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
    bloques: [
      {
        tipo: 'pregunta',
        icono: '🎲',
        consigna: 'Dos respuestas a la misma pregunta',
        texto:
          'Una está mejor escrita, mejor ordenada y suena más segura. ¿Es la que dice la verdad?',
      },
      {
        tipo: 'parrafo',
        texto:
          'Cuando a un modelo lo ajustan con personas que puntúan sus respuestas, aprende de ' +
          'ahí. Pero lo que aprende no es la verdad: son los modales.',
      },
      {
        tipo: 'frase',
        texto:
          'Por eso hasta la respuesta ordenada y bien redactada puede traer un dato falso. Es el ' +
          'mismo modelo que hace un rato les inventó un artículo con toda seguridad.',
      },
    ],
  },

  {
    id: 'cierre',
    grupo: 'final',
    icono: '🚀',
    titulo: 'Y ahora, ¿qué?',
    subtitulo: 'lo que se llevan de esta hora',
    bloques: [
      {
        tipo: 'hero',
        titulo: 'Ya no es magia. Es estadística con buenos modales.',
        texto:
          'Vieron cómo decide, por qué a veces inventa, qué no se le puede pegar y cómo pedirle ' +
          'bien. No es poco para una hora.',
      },
      {
        tipo: 'tarjetas',
        titulo: 'Las tres reglas',
        items: [
          {
            icono: '🔒',
            titulo: 'No pego nada que no publicaría',
            texto:
              'Si no lo pondría en un documento público, no va en una IA. El diagnóstico, nunca.',
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
          'escríbannos y vemos.',
      },
    ],
  },
]
