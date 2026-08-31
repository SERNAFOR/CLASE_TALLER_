# Validar antes de dictar el taller de la GDP

Este taller enseña a **cazar datos inventados**. Si su propio material trae un plazo mal citado,
el argumento entero se cae — y se cae delante de la única sala del país que sabe la respuesta:
la Gerencia de Desarrollo de las Personas.

Por eso el contenido de `taller-ia/src/data/contenidoPersonal.js` se escribió **sin inventar
cifras**: donde había duda se dejó la formulación general ("dentro del plazo reglamentario",
"la entidad competente") en vez de un número concreto. Aun así, **todo lo que sigue hay que
contrastarlo contra el texto oficial y validarlo con el área jurídica o de personal antes del
taller**.

Marca cada casilla cuando esté comprobada.

## Marco general

- [ ] **CONAF se rige por el Código del Trabajo**, no por el Estatuto Administrativo (Ley 18.834).
      Es la premisa de todo el contenido. Si esto cambiara —por SERNAFOR o por alguna
      particularidad—, hay que revisar el archivo entero.
      *Aparece en:* cabecera del archivo, `detective` frase 8, y el tono de todo el taller.
- [ ] **Ley 21.719** sobre protección de datos personales: fecha exacta de entrada en vigencia.
      El taller dice "diciembre de 2026" y lo cruza con el plazo del PMG-MEI.
      *Aparece en:* sección `gobernanza`, `riesgos`, `privacidad`, `rolesDatos`, `madurezDatos`,
      `detective` frase 6.
- [ ] **Los datos de salud son categoría sensible** con estándar reforzado en la Ley 21.719.
      *Aparece en:* `privacidad` (lección), `riesgos`, `detective` frase 6.
- [ ] **Derecho de acceso y rectificación** con responsable y plazo.
      *Aparece en:* `rolesDatos` situación 5.
- [ ] **PMG-MEI**: nivel "básico" de madurez de datos a diciembre de 2026.
      *Aparece en:* `gobernanza`, `rolesDatos`, `madurezDatos`.

## Licencias médicas — el caso central del taller

- [ ] **Plazo del trabajador** para hacer llegar la licencia al empleador.
      El texto dice "dentro del plazo" sin número. **Si se decide poner el número, verificarlo.**
      *Aparece en:* `subeNivel` nivel 3, `publicos` (la trabajadora).
- [ ] **Plazo del empleador** para remitirla a la entidad competente.
      ⚠️ El ejercicio `detective` usa **"10 días hábiles" como frase FALSA**. Hay que confirmar
      cuál es el plazo real para poder explicarlo al revelar. Si resultara ser 10, la frase
      deja de ser falsa y **el ejercicio se rompe**.
- [ ] **Qué entidad autoriza** (COMPIN / Isapre según previsión) y que puede rechazar, reducir
      o ampliar el reposo.
      *Aparece en:* `detective` frase 1, `publicos`, `analisisLey`, `docAccion`.
- [ ] **Confidencialidad del diagnóstico**: que el empleador tramita sin conocerlo.
      Es el corazón pedagógico del ejercicio `privacidad`. **Verificar con especial cuidado.**
      *Aparece en:* `detective` frase 2, `privacidad` (lección), `docAccion`, `publicos`.
- [ ] **Subsidio en licencias cortas**: que los primeros días pueden no dar derecho a subsidio.
      El texto lo dice sin números a propósito.
      *Aparece en:* `detective` frase 4.
- [ ] **Ante quién se reclama** un rechazo de licencia.
      ⚠️ `detective` frase 7 afirma que es la **Dirección del Trabajo** y la marca como FALSA.
      Confirmar cuál es el organismo correcto, porque la explicación al revelar lo nombra.
- [ ] **El artículo 197 ter del Código del Trabajo NO existe** (o no dice lo que la frase afirma).
      ⚠️ Se usa como alucinación en `detective` frase 5 y en `alucina`. Si existiera y dijera
      algo parecido, hay que cambiar el ejemplo.

## Las tres frases falsas del "Detective" — revisión obligatoria

El ejercicio solo funciona si las 5 verdaderas son **verdaderas** y las 3 falsas son **falsas**.
Que alguien de la gerencia lea las 8 frases y firme esta casilla:

- [ ] Las 8 frases de `detective` revisadas por _______________________ el ___/___/______

## Las actividades nuevas de la presentación

### "A otros ya les pasó" — los casos públicos

Es la única parte del material que cita hechos externos. Si un caso está mal contado, se cae
justo el argumento que sostiene la línea roja del termómetro.

- [ ] **El caso de la herramienta de reclutamiento (2018).** El taller dice: una empresa
      tecnológica grande construyó un sistema para puntuar currículums, lo entrenó con diez años
      de contrataciones propias, el sistema aprendió a penalizar los currículums que mencionaban
      la palabra "mujeres", y lo descartaron. **Verificar contra la nota de prensa original antes
      de contarlo**, y decidir si se nombra a la empresa o se deja como "una empresa tecnológica
      grande" (el material la deja sin nombrar a propósito: el argumento no depende de quién fue).
- [ ] **Los sistemas de puntuación de riesgo en administraciones europeas.** El taller lo cuenta
      en genérico y sin nombres ni fechas, a propósito. Si se decide nombrar un caso concreto,
      hay que verificarlo entero: qué organismo, qué decisión judicial o administrativa, qué año.
      **Si no se puede verificar, se deja en genérico como está.**

### "Verde, ámbar, rojo" — el criterio, no los hechos

Las seis tareas no citan normas, así que no hay datos que verificar. Pero sí hay un juicio que
conviene contrastar con el área:

- [ ] ¿Está de acuerdo la gerencia con que **redactar bases de concurso** sea ámbar y no rojo?
- [ ] ¿Y con que **comparar dos versiones de un reglamento** sea ámbar y no verde?
      Las respuestas "correctas" del ejercicio son una postura institucional, no un hecho.

### "Lo que cuesta hacerlo a mano" — los minutos

- [ ] Los tiempos (12 + 8 + 18 + 6 a mano, 3 + 2 + 6 con IA) son estimaciones conservadoras de
      una tarea real. **Contrastarlos con alguien que la haga todas las semanas.** Si son
      exagerados, se nota, y el resto de la charla pierde credibilidad. Mejor quedarse corto.

### "La bola de nieve" y "El dato que se escapó"

- [ ] Ninguna cita normas ni cifras oficiales: describen un encadenamiento plausible. El único
      dato a confirmar es que **el diagnóstico va en la sección confidencial de la licencia y el
      empleador no debe conocerlo** — que ya está en la lista de arriba y es el eje de las dos.

## Qué hacer si algo no se puede confirmar

No lo dejes "más o menos". Dos salidas, ambas mejores que un dato dudoso:

1. **Quitar el número** y dejar la formulación general ("dentro del plazo que fija el
   reglamento"). El taller ya está escrito así en casi todas partes.
2. **Cambiar la frase** por otra cuyo contenido sí esté confirmado.

Y si una frase del `detective` no se puede validar a tiempo, **bórrala**: siete frases funcionan
igual de bien que ocho, y una frase dudosa arruina el ejercicio entero.
