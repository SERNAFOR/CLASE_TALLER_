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

## Qué hacer si algo no se puede confirmar

No lo dejes "más o menos". Dos salidas, ambas mejores que un dato dudoso:

1. **Quitar el número** y dejar la formulación general ("dentro del plazo que fija el
   reglamento"). El taller ya está escrito así en casi todas partes.
2. **Cambiar la frase** por otra cuyo contenido sí esté confirmado.

Y si una frase del `detective` no se puede validar a tiempo, **bórrala**: siete frases funcionan
igual de bien que ocho, y una frase dudosa arruina el ejercicio entero.
