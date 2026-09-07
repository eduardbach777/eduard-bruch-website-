import type { ArticleSet } from "./index";

export const esArticles: ArticleSet = {
  "copy-text-from-image-mac": {
    slug: "copy-text-from-image-mac",
    title: "Cómo copiar texto de una imagen en Mac",
    description:
      "Tienes texto atrapado dentro de una imagen: la foto de una pizarra, un documento escaneado, un meme, y no hay forma de seleccionarlo. Así puedes extraerlo al instante.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Alguien te envía una foto de una pizarra llena de notas de una reunión. O capturas una receta de una historia de Instagram. El texto está ahí, en tu pantalla, pero no puedes seleccionarlo, no puedes copiarlo, no puedes pegarlo en ningún sitio útil. Tu única opción es volver a escribir cada palabra a mano, y esperar no cometer errores en el proceso.</p>

<h2>Por qué no puedes simplemente seleccionar texto en una imagen</h2>
<p>Las imágenes son píxeles, no caracteres. Tu Mac ve un JPEG o un PNG como una cuadrícula de puntos de color, no como palabras y frases. Vista Previa te permite anotar imágenes pero no extrae su texto. Vista Rápida te muestra la imagen pero no ofrece ninguna función para copiar las palabras que contiene. Incluso arrastrar la imagen a Notas o Pages solo incrusta la fotografía: el texto sigue bloqueado detrás de los píxeles.</p>
<p>La función Live Text de Apple funciona en algunos contextos, pero requiere apps compatibles, formatos de imagen específicos, y no cubre todos los escenarios. Si el texto está dentro de una pestaña del navegador, una maqueta de diseño o un fotograma de vídeo, Live Text a menudo no llega a él.</p>

<h2>Arrastra para seleccionar, copia al instante con Optic</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> vive en tu barra de menú y te permite dibujar un rectángulo de selección sobre cualquier parte de tu pantalla. Reconoce los caracteres dentro de ese rectángulo al instante, sin importar si el origen es un archivo de imagen, una página web, un PDF o cualquier otra cosa visible en tu pantalla.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic menu bar OCR tool for Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Fotos y capturas de pantalla</h3>
<p>Abre la imagen en cualquier app —Vista Previa, Fotos, un navegador, Slack— y arrastra una selección sobre el texto. Optic reconoce los caracteres y los copia a tu portapapeles. Funciona con notas manuscritas, documentos impresos, carteles en fotografías y texto superpuesto sobre gráficos.</p>

<h3>Archivos de diseño y maquetas</h3>
<p>¿Estás revisando una exportación de Figma o una composición de diseño plana? Arrastra sobre los elementos de texto para extraer el copy sin tener que pedirle al diseñador que lo envíe por separado. Útil para control de calidad, flujos de traducción y auditorías de contenido.</p>

<h3>Historial de capturas</h3>
<p>Cada captura se guarda en la barra de menú, así que puedes volver atrás y recuperar texto que extrajiste antes sin tener que escanear de nuevo. No hace falta pegarlo en un documento provisional solo para conservarlo.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Consigue Optic en la Mac App Store</a></p>
`,
  },

  "screen-ocr-mac": {
    slug: "screen-ocr-mac",
    title: "OCR de pantalla para Mac: selecciona y copia cualquier texto",
    description:
      "Texto en tu pantalla que no puedes seleccionar ni copiar, dentro de imágenes, vídeos, cuadros de diálogo o interfaces bloqueadas. Una herramienta de OCR a nivel de pantalla lo soluciona.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Estás mirando texto en la pantalla de tu Mac que se niega a ser seleccionado. Puede que esté incrustado en un vídeo tutorial, renderizado dentro de un elemento canvas en una página web, o bloqueado detrás de una interfaz no interactiva. Las palabras están ahí, perfectamente legibles, pero tu cursor las trata como si no existieran.</p>

<h2>La brecha entre ver y seleccionar</h2>
<p>macOS ofrece selección de texto en apps nativas y contenido web estándar, pero la pantalla moderna está llena de excepciones. Texto renderizado como gráficos en apps web, subtítulos incrustados en reproductores de vídeo, código mostrado en documentación basada en imágenes, salida de terminal en una sesión de escritorio remoto: nada de esto responde a un clic y arrastre normal. Terminas volviendo a escribir lo que ya tienes delante, algo lento y propenso a errores.</p>
<p>Las herramientas de OCR tradicionales requieren que guardes un archivo primero, luego lo importes y después lo proceses. Ese flujo se rompe en el momento en que tu fuente de texto es una pantalla en vivo: una videollamada, un panel en streaming o una app sin opción de exportar.</p>

<h2>OCR a nivel de pantalla con Optic</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> realiza OCR directamente sobre tu pantalla. Se sitúa en la barra de menú y, cuando lo activas, dibujas un rectángulo sobre cualquier texto visible. Los caracteres se reconocen al instante y se colocan en tu portapapeles: sin guardar archivos, sin importar, sin esperas.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic performing screen OCR on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Cualquier fuente, un solo gesto</h3>
<p>No importa en qué app viva el texto. Una llamada de Zoom con una diapositiva compartida, un tutorial de YouTube que muestra comandos de terminal, un panel de Retool con etiquetas no seleccionables: si puedes verlo, Optic puede leerlo. Un atajo, un arrastre, y el texto es tuyo.</p>

<h3>Historial integrado</h3>
<p>Cada captura de OCR queda registrada en el desplegable de la barra de menú. Retrocede por capturas anteriores para recuperar texto que obtuviste hace minutos u horas sin escanear de nuevo.</p>

<h3>Texto a voz</h3>
<p>¿Necesitas escuchar el texto capturado en lugar de leerlo? Optic incluye conversión de texto a voz para cualquier captura, útil para revisar contenido extraído o para accesibilidad.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Consigue Optic en la Mac App Store</a></p>
`,
  },

  "extract-text-from-screenshot-mac": {
    slug: "extract-text-from-screenshot-mac",
    title: "Cómo extraer texto de una captura de pantalla en Mac",
    description:
      "Hiciste una captura de pantalla para guardar un texto, pero ahora necesitas ese texto como caracteres reales que puedas editar y buscar. Volver a escribirlo anula el propósito.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>La captura de pantalla debía ser un atajo. Guardaste rápidamente un correo importante, una confirmación de envío, unas instrucciones, pensando que habías guardado la información. Pero ahora necesitas pegar ese número de seguimiento en un formulario, o buscar una frase de esas instrucciones, y la captura es solo una imagen plana. El texto que contiene bien podría ser un dibujo.</p>

<h2>Las capturas de pantalla capturan píxeles, no texto</h2>
<p>Cuando pulsas Cmd+Mayús+4 en tu Mac, obtienes una imagen perfecta de lo que había en pantalla. Pero el texto en esa imagen pierde toda su estructura. No puedes seleccionar palabras individuales, no puedes copiar un párrafo, ni siquiera puedes buscar una frase. La captura es un registro visual, no textual.</p>
<p>Podrías abrir la captura en Vista Previa y probar las herramientas de marcado de Apple, pero esas son para anotar —dibujar sobre la imagen— no para extraer el texto que contiene. Algunos usuarios intentan pegar capturas en Google Docs esperando OCR automático, pero eso solo funciona con imágenes subidas a Drive, no con capturas pegadas, y los resultados son inconsistentes.</p>

<h2>Extrae texto directamente de la pantalla</h2>
<p>En lugar de hacer una captura y luego luchar por extraer el texto de la imagen, <a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> te permite saltarte por completo la captura. Actívalo desde la barra de menú, arrastra una selección sobre el texto que necesitas y los caracteres reconocidos van directo a tu portapapeles.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic extracting text from a screenshot on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>¿Ya tienes la captura de pantalla?</h3>
<p>Si ya hiciste la captura, ábrela en cualquier visor —Vista Previa, Vista Rápida, incluso un navegador— y arrastra la selección de Optic sobre el texto de la imagen mostrada. Lee caracteres de cualquier cosa visible en tu pantalla, incluidas las imágenes que ya tienes abiertas.</p>

<h3>El historial de capturas sustituye la acumulación de capturas de pantalla</h3>
<p>Mucha gente hace capturas de pantalla específicamente para recordar texto: números de confirmación, direcciones, códigos de error. El historial de capturas de Optic almacena cada extracción de texto en la barra de menú, dándote un registro buscable de texto capturado. Se acabó desplazarse por una carpeta de capturas para encontrar una cadena.</p>

<h3>Extracción masiva</h3>
<p>¿Necesitas texto de varias zonas de una captura larga? Haz varias selecciones rápidas seguidas. Cada una se guarda en tu historial, así puedes reunir todo lo que necesitas y pegar las piezas donde correspondan.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Consigue Optic en la Mac App Store</a></p>
`,
  },

  "copy-text-non-selectable-pdf-mac": {
    slug: "copy-text-non-selectable-pdf-mac",
    title: "Cómo copiar texto de un PDF no seleccionable en Mac",
    description:
      "Algunos PDF parecen documentos normales pero no te dejan seleccionar ni una sola palabra. El texto está ahí visualmente, pero atrapado como una capa de imagen plana.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Abres un PDF esperando poder copiar un párrafo, pero cuando haces clic y arrastras, no se resalta nada. El cursor se desliza por la página como si el texto no existiera. Pruebas con Cmd+A para seleccionar todo: nada. El documento se ve perfectamente legible, pero en la práctica es una imagen de texto, no texto real.</p>

<h2>Por qué algunos PDF no te dejan seleccionar texto</h2>
<p>Esto ocurre con documentos escaneados, formularios gubernamentales, artículos académicos antiguos y PDF exportados desde ciertas herramientas de diseño. Las páginas se crearon a partir de imágenes —escaneadas en papel o aplanadas durante la exportación— por lo que el PDF contiene capas ráster en lugar de capas de texto. Vista Previa, Adobe Reader y cualquier otro visor de PDF ven lo mismo: píxeles dispuestos para parecer letras, sin datos de caracteres subyacentes que seleccionar.</p>
<p>Algunos PDF también tienen protección contra copia activada. El creador estableció un permiso que impide la selección de texto, aunque la capa de texto exista. Los lectores de PDF estándar respetan este indicador, dejándote sin poder copiar nada.</p>

<h2>Lee el texto directamente desde la pantalla</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> evita ambos problemas. Como lee caracteres desde tu pantalla en lugar de la estructura interna del archivo, no importa si el PDF tiene una capa de texto, es una imagen escaneada o tiene restricciones de copia. Si puedes ver el texto en tu pantalla, Optic puede leerlo.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic reading text from a non-selectable PDF on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Documentos escaneados</h3>
<p>Abre el PDF escaneado en Vista Previa, amplía a un tamaño cómodo de lectura, activa Optic y arrastra sobre el texto que necesitas. Reconoce caracteres impresos del escaneo y los copia como texto editable. Funciona con documentos mecanografiados antiguos, recibos escaneados y páginas fotografiadas.</p>

<h3>PDF protegidos</h3>
<p>Para PDF en los que la capa de texto existe pero la selección está bloqueada, Optic lee la salida renderizada en pantalla. Obtienes el mismo texto sin pelear con indicadores de permisos ni buscar herramientas para desbloquear PDF.</p>

<h3>Extracción de varias páginas</h3>
<p>Desplázate por el documento y haz selecciones en cada página. Cada captura se guarda en el historial de la barra de menú de Optic, así puedes trabajar página por página en un documento escaneado largo y reunir todo el texto que necesitas.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Consigue Optic en la Mac App Store</a></p>
`,
  },

  "qr-code-reader-mac": {
    slug: "qr-code-reader-mac",
    title: "Lector de códigos QR para Mac: escanea desde la pantalla",
    description:
      "Aparece un código QR en la pantalla de tu Mac —en un correo, un documento, una página web— y tu único escáner es el teléfono en tu bolsillo. Hay una forma más rápida.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Alguien comparte un código QR en un mensaje de Slack. O un PDF incluye uno que enlaza a un recurso. O una página web muestra un código QR para descargar una app. El código está ahí, en la pantalla de tu Mac, pero para escanearlo se supone que debes sacar tu teléfono, abrir la cámara, apuntar al monitor, esperar a que enfoque y luego tocar el enlace, que se abre en tu teléfono en lugar de en el ordenador donde realmente lo necesitas.</p>

<h2>Los teléfonos escanean el mundo real, no pantallas</h2>
<p>El escaneo de códigos QR se diseñó para cámaras de teléfono apuntando a objetos físicos. Usar la cámara de un teléfono para escanear la pantalla de tu propio ordenador es una solución torpe: lidias con reflejos de pantalla, la cámara tiene problemas para enfocar de cerca, y el enlace resultante se abre en el dispositivo equivocado. Si quieres la URL en tu Mac, luego tienes que enviártela por AirDrop o mandarte un mensaje, todo para abrir un enlace que ya estaba en tu Mac.</p>
<p>macOS no tiene ningún lector de códigos QR integrado para contenido en pantalla. No puedes hacer clic derecho en un código QR en Safari y elegir "leer código". Vista Previa no decodifica ninguno desde una imagen abierta. Sencillamente no existe una vía nativa entre el código QR en pantalla y el contenido decodificado en el mismo equipo.</p>

<h2>Escanea códigos QR directamente desde tu pantalla</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> incluye un lector de códigos QR que funciona con cualquier cosa visible en tu pantalla. Actívalo desde la barra de menú, arrastra una selección alrededor del código QR y el contenido decodificado —URL, texto, datos de contacto, credenciales de Wi-Fi— está disponible de inmediato en tu Mac.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic scanning a QR code from the Mac screen" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Códigos QR en documentos y correos</h3>
<p>Entradas de eventos, tarjetas de embarque, confirmaciones de pago y guías de configuración incluyen con frecuencia códigos QR. Arrastra una selección sobre el código en tu cliente de correo o visor de PDF y obtén el contenido decodificado sin cambiar de dispositivo.</p>

<h3>Casos de uso para desarrolladores y TI</h3>
<p>Las páginas de configuración de autenticación en dos pasos muestran códigos QR para apps TOTP. La documentación de API a veces codifica endpoints o claves en formato QR. Optic te permite decodificarlos directamente, manteniendo tu flujo de trabajo en una sola pantalla.</p>

<h3>Todo queda en el historial</h3>
<p>El contenido QR decodificado se guarda junto a tus capturas de texto en el historial de la barra de menú. ¿Necesitas esa contraseña de Wi-Fi de un código QR que escaneaste ayer? Desplázate por tus capturas en lugar de volver a escanear.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Consigue Optic en la Mac App Store</a></p>
`,
  },

  "ocr-text-from-video-mac": {
    slug: "ocr-text-from-video-mac",
    title: "Cómo hacer OCR de texto en un vídeo o transmisión en Mac",
    description:
      "Un tutorial muestra un comando de terminal, una transmisión en directo muestra una URL, una clase muestra una fórmula, y no puedes pausar lo bastante rápido para escribirlo todo.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Estás viendo un tutorial de programación y el instructor pega un comando de terminal largo en pantalla. O una transmisión en directo muestra brevemente un código de descuento. O una clase grabada muestra una ecuación compleja. El texto es claramente visible durante unos segundos, pero no hay forma de seleccionarlo desde el reproductor de vídeo. Pausas, entrecierras los ojos y empiezas a escribir, esperando captar cada carácter antes de que el contenido avance.</p>

<h2>Los reproductores de vídeo no exponen texto</h2>
<p>Ya sea que estés viendo en Safari, Chrome, VLC, QuickTime o cualquier app de streaming, el fotograma de vídeo es una imagen renderizada. No hay una capa de texto con la que interactuar. Los subtítulos pueden ser seleccionables en algunos reproductores, pero el texto en pantalla que forma parte del contenido del vídeo —código, URL, títulos, datos— está permanentemente incrustado en el flujo de píxeles.</p>
<p>Pausar ayuda, pero aun así tienes que transcribir manualmente lo que ves. Para comandos largos, URL con parámetros de consulta o contenido técnico con caracteres especiales, la transcripción manual es lenta y poco fiable. Un carácter equivocado en un comando de terminal o una URL y falla en silencio.</p>

<h2>Captura texto de cualquier fotograma de vídeo</h2>
<p>Con <a href="https://apps.apple.com/app/optic/id6806597766">Optic</a>, pausas el vídeo (o no, también funciona con contenido en movimiento), activas la herramienta desde tu barra de menú y arrastras una selección sobre el texto visible en el fotograma del vídeo. Los caracteres se reconocen y se copian a tu portapapeles al instante.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic reading text from a video on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Tutoriales de programación</h3>
<p>Comandos de terminal, fragmentos de configuración, rutas de archivo y nombres de paquetes que aparecen en tutoriales en vídeo: captúralos con una sola selección en lugar de pausar y volver a escribir. Especialmente valioso para comandos de instalación largos o configuraciones de varias líneas.</p>

<h3>Transmisiones en directo y webinars</h3>
<p>Los presentadores a menudo muestran URL, códigos promocionales o datos de contacto en pantalla durante solo unos segundos. Optic captura lo que sea visible en el momento en que lo seleccionas, así que no necesitas escribir a toda velocidad para capturar información efímera.</p>

<h3>Clases y presentaciones</h3>
<p>Las clases grabadas muestran fórmulas, citas y referencias que costarían un esfuerzo considerable volver a escribir. Arrastra sobre la sección relevante y pega el texto extraído directamente en tus notas.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Consigue Optic en la Mac App Store</a></p>
`,
  },

  "copy-error-message-from-dialog-mac": {
    slug: "copy-error-message-from-dialog-mac",
    title: "Cómo copiar mensajes de error de cuadros de diálogo en Mac",
    description:
      "Aparece un cuadro de diálogo de error con un mensaje técnico y sin botón de copiar. Te quedas volviendo a escribir códigos de error incomprensibles solo para buscar una solución.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Una app se bloquea y aparece un cuadro de diálogo con un mensaje de error críptico: un código, una ruta de archivo, quizás una referencia de traza de pila. Necesitas buscar esa cadena exacta en Google para encontrar una solución. Pero el diálogo tiene dos botones —Aceptar y Cancelar— y ninguna forma de seleccionar o copiar el texto. Así que coges tu teléfono, haces una foto de la pantalla y entrecierras los ojos mientras vuelves a escribir el error en un buscador. O empiezas a garabatearlo en una nota adhesiva, carácter por carácter.</p>

<h2>Los diálogos de macOS rara vez te dejan copiar texto</h2>
<p>La mayoría de los diálogos de error, ventanas de alerta y avisos del sistema en macOS renderizan su texto como etiquetas estáticas. No puedes hacer clic dentro de ellos, no puedes resaltar una parte, no puedes hacer clic derecho para una opción de copiar. Esto es cierto para alertas nativas de macOS, diálogos de apps de terceros, ventanas de error de instaladores e informes de bloqueo. Cuanto más técnico e importante es el texto del error, más probable es que esté atrapado en una etiqueta no seleccionable.</p>
<p>Esto es especialmente frustrante para soporte técnico y resolución de problemas. Necesitas el texto exacto del error para buscar soluciones, reportar un fallo o comunicarte con equipos de soporte. Parafrasear un código de error —o escribir mal un carácter— te lleva a resultados irrelevantes.</p>

<h2>Selecciona el texto del error directamente desde el diálogo</h2>
<p>Cuando aparezca el diálogo de error, mantenlo abierto y activa <a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> desde la barra de menú. Arrastra una selección sobre el texto del mensaje de error en el diálogo. Optic lee los caracteres y los copia a tu portapapeles: cadena exacta, puntuación exacta, mayúsculas y minúsculas exactas.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic copying an error message from a dialog on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Busca soluciones al instante</h3>
<p>Pega la cadena exacta del error en Google, Stack Overflow o un foro de soporte de Apple. Las búsquedas de coincidencia exacta muestran resultados relevantes de forma mucho más fiable que las descripciones parafraseadas de lo que decía el error.</p>

<h3>Informes de errores y tickets de soporte</h3>
<p>Incluye el texto exacto del error en informes de errores o correos de soporte. Los desarrolladores y agentes de soporte pueden identificar problemas mucho más rápido con la cadena de error real en lugar de la interpretación de un usuario.</p>

<h3>Errores recurrentes</h3>
<p>Optic guarda cada captura en su historial de la barra de menú. Si el mismo error sigue apareciendo, tienes un registro con marca de tiempo de cada aparición sin necesidad de capturar cada diálogo.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Consigue Optic en la Mac App Store</a></p>
`,
  },

  "mac-live-text-limitations": {
    slug: "mac-live-text-limitations",
    title: "Limitaciones de Live Text en Mac: qué no puede hacer",
    description:
      "Live Text de Apple funciona en algunos sitios pero falla en silencio en muchos otros. Si dependes de él para OCR de pantalla, chocarás con muros rápidamente.",
    date: "2026-09-06",
    readTime: "5 min de lectura",
    content: `
<p>Apple introdujo Live Text como una función a nivel de sistema que reconoce texto en imágenes. En teoría, suena como si resolviera el problema de "no puedo seleccionar texto en imágenes". En la práctica, funciona en un conjunto limitado de escenarios y no hace nada en silencio en muchas situaciones donde realmente lo necesitas.</p>

<h2>Dónde Live Text se queda corto</h2>
<p>Live Text funciona dentro de Fotos, Vista Previa, Safari (en algunas imágenes) y Vista Rápida. Ahí es más o menos donde termina su alcance. Estas son las situaciones habituales en las que no puede ayudar:</p>
<p><strong>Fotogramas de vídeo.</strong> Live Text no funciona con contenido de vídeo. Si aparece texto en un vídeo de YouTube, una pantalla compartida de Zoom, una grabación de QuickTime o cualquier reproductor de streaming, Live Text no lo reconocerá. Vuelves a la transcripción manual.</p>
<p><strong>Interfaces de apps y diálogos.</strong> El texto renderizado como etiquetas en interfaces de apps, diálogos de error, elementos de menú y controles personalizados es invisible para Live Text. Solo se activa en imágenes incrustadas, no en contenido arbitrario en pantalla.</p>
<p><strong>Apps web con texto en canvas o SVG.</strong> Muchas apps web modernas renderizan texto usando elementos canvas o SVG: paneles, herramientas de datos, apps de diseño. Live Text no llega a estos contextos de renderizado.</p>
<p><strong>PDF no seleccionables.</strong> Aunque Vista Previa a veces puede reconocer texto en PDF basados en imágenes, los resultados son inconsistentes y dependen de la calidad del escaneo, la complejidad de la página y la estructura del PDF. Muchos documentos escaneados simplemente no muestran ninguna interacción de Live Text.</p>
<p><strong>Contenido protegido contra copia.</strong> Live Text respeta el DRM y las restricciones de copia. Si una app o documento ha desactivado la selección de texto, Live Text hace lo mismo.</p>
<p><strong>Sin historial de capturas.</strong> Live Text no tiene memoria. Cada reconocimiento es efímero. Si cierras la imagen o navegas a otro lugar, el texto reconocido desaparece. No hay registro ni historial de lo que has extraído.</p>

<h2>OCR a nivel de pantalla sin estos límites</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> funciona a nivel de pantalla en lugar de a nivel de archivo o imagen. Lee caracteres de lo que sea visible en tu pantalla: cualquier app, cualquier fuente, cualquier contexto. Fotogramas de vídeo, cuadros de diálogo, canvas de apps web, PDF bloqueados, sesiones de escritorio remoto: si puedes ver texto, Optic puede leerlo.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic overcoming Live Text limitations on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Historial y texto a voz</h3>
<p>A diferencia de Live Text, Optic guarda cada captura en un historial persistente accesible desde la barra de menú. También incluye texto a voz, permitiéndote escuchar el texto capturado leído en voz alta: útil para revisar o para accesibilidad.</p>

<h3>Escaneo de códigos QR</h3>
<p>Live Text puede leer códigos QR en algunos contextos de imagen, pero no desde vídeo, pantallas compartidas o ventanas de apps arbitrarias. Optic escanea códigos QR desde cualquier lugar de tu pantalla y los decodifica al instante.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Consigue Optic en la Mac App Store</a></p>
`,
  },

  "textsniper-alternative-mac": {
    slug: "textsniper-alternative-mac",
    title: "Alternativa a TextSniper para Mac",
    description:
      "Buscas una herramienta de OCR de pantalla que vaya más allá de la captura básica de texto, con escaneo de QR, historial de capturas y texto a voz integrados.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>TextSniper popularizó la idea del OCR a nivel de pantalla en Mac: dibuja un rectángulo, obtén el texto. Es un concepto sencillo que resuelve un problema real. Pero si lo has usado y te has encontrado queriendo más —un historial de capturas anteriores, soporte para códigos QR o la posibilidad de escuchar el texto extraído leído en voz alta— probablemente hayas buscado alternativas.</p>

<h2>Qué falta en el OCR de pantalla básico</h2>
<p>La mayoría de las herramientas de OCR de pantalla manejan bien la captura principal: activas un atajo, arrastras una región, obtienes texto en tu portapapeles. Pero el flujo de trabajo alrededor de esa única acción importa igual de mucho.</p>
<p><strong>Sin historial de capturas.</strong> Extraes texto, lo pegas en algún sitio y la captura desaparece. Diez minutos después necesitas ese mismo texto otra vez y tienes que volver a escanear. Si olvidaste pegarlo de inmediato, lo siguiente que copies lo sobrescribe.</p>
<p><strong>Sin lectura de códigos QR.</strong> Los códigos QR en tu pantalla —en correos, documentos, páginas web— requieren una herramienta aparte o la cámara de tu teléfono. Una herramienta de captura de pantalla que pueda decodificar códigos QR te evita tener que usar varios dispositivos.</p>
<p><strong>Sin texto a voz.</strong> A veces necesitas escuchar texto en lugar de leerlo: para revisar, por accesibilidad o para hacer varias cosas a la vez. Las herramientas de OCR básicas se detienen en la salida al portapapeles.</p>

<h2>Optic: OCR de pantalla con el flujo de trabajo completo</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> gestiona la misma captura de OCR principal —arrastra para seleccionar cualquier texto en pantalla desde cualquier fuente— y añade las funciones que hacen que el OCR de pantalla sea realmente útil en el día a día.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic as a TextSniper alternative for Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Historial de capturas en la barra de menú</h3>
<p>Cada extracción de texto y cada escaneo de QR se guarda y es accesible desde la barra de menú. Retrocede por capturas anteriores, vuelve a copiar algo de hace una hora, o revisa una serie de extracciones de una sesión de investigación. Se acabó perder texto porque copiaste otra cosa.</p>

<h3>Escáner de códigos QR integrado</h3>
<p>Dibuja una selección alrededor de cualquier código QR visible en tu pantalla y Optic lo decodifica. URL, credenciales de Wi-Fi, tarjetas de contacto, texto plano: lo que sea que contenga el código aparece de inmediato, sin necesidad de teléfono.</p>

<h3>Texto a voz</h3>
<p>Cualquier texto capturado puede leerse en voz alta. Útil para detectar errores de OCR de oído, para necesidades de accesibilidad, o para escuchar contenido extraído mientras trabajas en otra cosa.</p>

<h3>Nativo de la barra de menú</h3>
<p>Optic vive en la barra de menú y no se interpone hasta que lo necesitas. Sin icono en el Dock, sin ventana principal que gestionar: solo una herramienta ligera que siempre está a un clic o un atajo de distancia.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Consigue Optic en la Mac App Store</a></p>
`,
  },

  "copy-code-from-screenshot-mac": {
    slug: "copy-code-from-screenshot-mac",
    title: "Cómo copiar código de una captura de pantalla en Mac",
    description:
      "Un tutorial, un tuit o una documentación muestra código como imagen. Volver a escribirlo introduce errores. Así se extrae como texto seleccionable.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Un desarrollador comparte un fragmento de código como captura de pantalla en Twitter. Una entrada de blog tutorial renderiza sus ejemplos como imágenes en lugar de bloques de código. La documentación de una herramienta interna solo existe como capturas de pantalla de una terminal. El código es perfectamente legible, pero está atrapado dentro de una imagen, y volver a escribir código a partir de una imagen es una de las formas más fiables de introducir errores invisibles.</p>

<h2>Por qué falla volver a escribir código desde imágenes</h2>
<p>El código no perdona la falta de precisión. Un punto y coma que falta, una ele minúscula confundida con el dígito 1, una llave frente a un paréntesis, un guion largo en vez de un guion normal: cualquiera de estos romperá tu código en silencio. Cuando vuelves a escribir desde una captura, estás haciendo un análisis visual carácter por carácter a un ritmo que invita exactamente a esos errores.</p>
<p>El problema está muy extendido. Las redes sociales convierten el código en imágenes para un renderizado más atractivo. La documentación antigua nunca se migró desde capturas de pantalla. Los mensajes de Slack y Teams con código a menudo se capturan y se reenvían. Las wikis internas acumulan años de capturas de terminal pegadas que nadie ha transcrito.</p>

<h2>Extrae código directamente de la pantalla</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> lee los caracteres del código directamente desde tu pantalla. Abre la captura o la página que contiene la imagen del código, activa Optic desde la barra de menú y arrastra una selección sobre el código. El texto extraído va a tu portapapeles, listo para pegar en tu editor o terminal.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic extracting code from a screenshot on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Comandos de terminal</h3>
<p>Comandos de instalación largos, declaraciones de Docker run, peticiones curl con múltiples flags: se comparten habitualmente como capturas de pantalla. Un arrastre con Optic extrae el comando completo, preservando caracteres especiales, flags y rutas que son fáciles de escribir mal.</p>

<h3>Fragmentos de código de redes sociales</h3>
<p>Las publicaciones de Twitter, LinkedIn e Instagram a menudo renderizan código como imágenes usando herramientas como Carbon o Ray.so. Optic extrae el código de estas capturas estilizadas con la misma facilidad que de una salida de terminal simple.</p>

<h3>Extracción de varias líneas</h3>
<p>Selecciona un bloque de código que abarque varias líneas y Optic preserva la estructura de líneas. Pégalo en tu editor y el código mantiene su forma, sin necesidad de reformatear manualmente. Cada captura se guarda en tu historial de la barra de menú, así puedes extraer varios fragmentos de un tutorial y pegarlos uno a uno.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Consigue Optic en la Mac App Store</a></p>
`,
  },

  "read-text-aloud-from-screen-mac": {
    slug: "read-text-aloud-from-screen-mac",
    title: "Lee en voz alta cualquier contenido de pantalla en Mac",
    description:
      "Quieres escuchar en voz alta el texto de tu pantalla —de una imagen, un documento bloqueado, un fotograma de vídeo— pero la voz integrada de tu Mac solo funciona con texto seleccionable.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>macOS tiene una función integrada de "Hablar selección": resalta texto, haz clic derecho y elige "Voz". Funciona bien, cuando el texto es seleccionable. Pero en el momento en que necesitas que se lea en voz alta texto de una imagen, un PDF escaneado, un fotograma de vídeo o un elemento de interfaz no interactivo, la función de voz no tiene con qué trabajar. No puedes hacer hablar lo que no puedes seleccionar.</p>

<h2>La brecha entre el contenido de la pantalla y la voz</h2>
<p>Muchas situaciones requieren que el texto en pantalla se lea en voz alta. La revisión detecta errores que tus ojos pasan por alto. Hacer varias cosas a la vez se beneficia del audio: puedes escuchar contenido extraído mientras trabajas en otra cosa. Las necesidades de accesibilidad se extienden a contenido que no es seleccionable de forma nativa. Los estudiantes de idiomas se benefician al escuchar texto desconocido pronunciado.</p>
<p>Pero las herramientas de voz integradas solo funcionan con selecciones de texto estándar. Si el texto está en una imagen, renderizado como gráfico en una app web, mostrado en un vídeo o bloqueado dentro de un documento escaneado, macOS no ofrece ninguna vía desde "visible en pantalla" hasta "leído en voz alta". Tendrías que transcribir el texto manualmente primero, lo que anula el propósito.</p>

<h2>Selecciona cualquier texto, escúchalo hablado</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> combina OCR a nivel de pantalla con texto a voz. Actívalo desde la barra de menú, arrastra sobre cualquier texto visible —sin importar su origen— y puedes hacer que el texto capturado se lea en voz alta. Sin transcripción manual, sin depender de que el texto sea seleccionable de forma nativa.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic reading text aloud from screen content on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Revisión de resultados de OCR</h3>
<p>Después de extraer texto de un escaneo o imagen, escucharlo en voz alta te ayuda a detectar errores de OCR que parecen correctos en pantalla. Una letra mal leída o una palabra confusa se vuelve obvia al hablarla, pero podría pasar desapercibida en una revisión visual.</p>

<h3>Accesibilidad</h3>
<p>Para usuarios que dependen de lectores de pantalla, el contenido atrapado en imágenes y formatos no seleccionables crea barreras. Optic cierra esa brecha convirtiendo cualquier texto visible tanto en texto de portapapeles como en audio hablado, haciendo accesible contenido antes inaccesible.</p>

<h3>Multitarea y aprendizaje de idiomas</h3>
<p>Extrae un pasaje de un documento o página web y escúchalo mientras cocinas, te desplazas o haces ejercicio. Los estudiantes de idiomas pueden escuchar palabras desconocidas pronunciadas correctamente seleccionando texto en un idioma extranjero y usando la salida de voz.</p>

<h3>Historial de capturas con voz</h3>
<p>Como cada captura se guarda en el historial de la barra de menú, puedes volver a una extracción anterior y hacer que se lea en voz alta de nuevo: útil para revisar notas o retomar contenido de antes en tu sesión.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Consigue Optic en la Mac App Store</a></p>
`,
  },

  "ocr-receipts-mac": {
    slug: "ocr-receipts-mac",
    title: "OCR de recibos en Mac: extrae texto de fotos de recibos",
    description:
      "Fotografiaste un recibo para un informe de gastos, pero ahora necesitas el nombre del proveedor, el total y la fecha como texto copiable, no una foto de la que tengas que volver a escribir.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Haces una foto de un recibo de la comida porque lo vas a necesitar para los gastos más tarde. O recibes un recibo escaneado por correo. La información que necesitas —nombre del proveedor, fecha, totales desglosados, importes de impuestos— está toda ahí en la imagen, pero cuando llega el momento de rellenar el informe de gastos, estás entrecerrando los ojos ante una foto y escribiendo manualmente cada línea. Un dígito trastocado en el total y tu informe queda marcado.</p>

<h2>Por qué las fotos de recibos son tan difíciles de trabajar</h2>
<p>Los recibos son de los peores candidatos para la transcripción manual. Usan fuentes pequeñas, espaciado inconsistente y abreviaturas. El papel térmico se desvanece rápido, haciendo que los recibos antiguos sean aún más difíciles de leer. Y todo sistema de gastos quiere datos estructurados —proveedor, fecha, importe— no un archivo JPEG adjunto.</p>
<p>macOS no tiene ninguna herramienta integrada que extraiga texto de una foto de recibo y lo ponga en tu portapapeles. Vista Previa te muestra la imagen. Fotos la organiza. Ninguna de las dos te deja seleccionar el texto impreso y copiarlo. Existen escáneres de gastos de terceros, pero son apps pesadas diseñadas para flujos de trabajo empresariales, no para obtener rápidamente un total de una foto.</p>

<h2>Arrastra sobre el recibo, obtén el texto</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> lee texto directamente desde tu pantalla. Abre la foto del recibo en cualquier visor —Vista Previa, Vista Rápida, un navegador, incluso tu cliente de correo— activa Optic desde la barra de menú y arrastra una selección sobre la parte del recibo que necesitas. Los caracteres reconocidos aterrizan en tu portapapeles, listos para pegar en una hoja de cálculo o un formulario de gastos.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic extracting text from a receipt photo on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Informes de gastos</h3>
<p>Selecciona el nombre del proveedor y el total de la imagen de un recibo y pégalos directamente en tu herramienta de seguimiento de gastos. Sin volver a escribir, sin errores de trasposición. Obtén partidas individuales o el recibo completo: cada captura se guarda en tu historial de la barra de menú para consultarla.</p>

<h3>Impuestos y contabilidad</h3>
<p>Los autónomos y pequeños empresarios acumulan fotos de recibos durante todo el año. Cuando llega la temporada de impuestos, abre cada imagen de recibo y extrae las cifras relevantes con un solo arrastre. Construye tu hoja de deducciones en minutos en lugar de horas de entrada manual.</p>

<h3>Solicitudes de reembolso</h3>
<p>¿Necesitas incluir importes exactos en un correo de reembolso? Extrae el total, el impuesto y la fecha de la foto del recibo y pégalos en tu mensaje. Las cifras precisas del recibo tienen más peso que números aproximados escritos de memoria.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Consigue Optic en la Mac App Store</a></p>
`,
  },

  "copy-text-from-zoom-screenshare-mac": {
    slug: "copy-text-from-zoom-screenshare-mac",
    title: "Cómo copiar texto de una pantalla compartida en Zoom en Mac",
    description:
      "Un compañero comparte su pantalla en Zoom mostrando una URL, una configuración o datos, pero solo puedes mirar, no seleccionar ni copiar ninguno de los textos que ves.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Estás en una reunión de Zoom y un compañero comparte su pantalla. Está recorriendo un panel, mostrando un archivo de configuración o presentando una app. En su pantalla compartida puedes ver claramente URL, credenciales, comandos de terminal y datos, pero el visor de Zoom no te da ninguna capacidad de interactuar con nada de eso. Puedes mirar, pero no puedes seleccionar. Le pides que pegue el enlace en el chat, se le olvida y la reunión sigue adelante.</p>

<h2>Las pantallas compartidas son de solo lectura por diseño</h2>
<p>Cuando alguien comparte su pantalla por Zoom, Google Meet o Microsoft Teams, lo que ves es una transmisión de vídeo de su pantalla. Tu cursor no interactúa con su contenido. No puedes hacer clic en su editor de texto, no puedes resaltar la salida de su terminal, no puedes hacer clic derecho en las pestañas de su navegador. Todo lo renderizado en la pantalla compartida es una imagen en movimiento desde la perspectiva de tu Mac.</p>
<p>Esto es especialmente doloroso en reuniones técnicas. Un ingeniero de DevOps muestra una configuración de Kubernetes. Un PM recorre analíticas. Un diseñador presenta textos en maquetas. El texto pasa desplazándose, y tus opciones son: pedirle que vaya más despacio y dicte, escribir a toda prisa lo que puedes ver, o esperar que la grabación lo capture con suficiente claridad para revisarlo después.</p>

<h2>Captura texto de cualquier pantalla compartida</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> trata la ventana de Zoom como cualquier otra parte de tu pantalla. Actívalo desde la barra de menú, arrastra una selección sobre el texto visible en la pantalla compartida, y los caracteres reconocidos se copian a tu portapapeles. Funciona tanto si el presentador muestra un navegador, una terminal, una hoja de cálculo o una presentación.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic capturing text from a Zoom screen share on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Reuniones técnicas</h3>
<p>Obtén comandos de terminal, rutas de archivo, endpoints de API y valores de configuración en el momento en que aparecen en la pantalla compartida. Sin pedirle al presentador que se detenga y pegue en el chat. Sin volver a escribir de memoria después de que termine la reunión.</p>

<h3>Datos y paneles</h3>
<p>Cuando una pantalla compartida muestra métricas, KPI o datos tabulares, selecciona los números directamente. Pégalos en tus propias notas o hoja de cálculo con los valores exactos que se mostraron.</p>

<h3>El historial de capturas como notas de reunión</h3>
<p>Cada extracción se guarda en el historial de la barra de menú de Optic. Haz varias capturas durante la reunión y tendrás un registro con marca de tiempo de cada fragmento de texto que obtuviste, funcionando como notas precisas de reunión para el contenido que más importó.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Consigue Optic en la Mac App Store</a></p>
`,
  },

  "mac-screenshot-to-text": {
    slug: "mac-screenshot-to-text",
    title: "De captura de pantalla a texto en Mac: extrae palabras de cualquier captura",
    description:
      "Haces capturas de pantalla constantemente, pero convertir esas capturas en texto editable y buscable todavía requiere volver a escribir todo lo que ves.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Las capturas de pantalla son la forma más rápida de guardar lo que hay en pantalla, pero son la forma más lenta de usar esa información después. Haces Cmd+Mayús+4 a un número de confirmación, una receta, unas credenciales de Wi-Fi o una dirección, y en el momento en que necesitas ese texto en un formulario, un correo o un documento, estás mirando una imagen y volviendo a escribir carácter por carácter.</p>

<h2>La brecha entre captura de pantalla y texto</h2>
<p>macOS hace que tomar capturas de pantalla sea sencillísimo. Los atajos de teclado están integrados, las capturas son de alta calidad y se guardan automáticamente en tu Escritorio o portapapeles. Pero macOS no ofrece ninguna forma integrada de convertir el texto visible de una captura en texto editable real. El flujo de trabajo de captura termina en la imagen. Todo lo que viene después —extraer, copiar, pegar las palabras que contiene— es completamente manual.</p>
<p>Los usuarios que hacen capturas de pantalla como forma de "guardar texto" acumulan rápidamente un Escritorio lleno de imágenes que no pueden buscar, no pueden indexar y no pueden consultar fácilmente. Encontrar ese único número de confirmación significa desplazarse por decenas de capturas y escanear visualmente cada una.</p>

<h2>Sáltate la captura, captura el texto directamente</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> sustituye el flujo de captura-y-luego-transcribir por una sola acción. En lugar de capturar una imagen del texto, activa Optic desde la barra de menú y arrastra una selección sobre las palabras que necesitas. El motor de OCR lee los caracteres y los copia a tu portapapeles como texto editable: sin imagen guardada, sin necesidad de volver a escribir.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic converting screen content to text on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>¿Ya hiciste la captura?</h3>
<p>No hay problema. Abre tu captura existente en cualquier visor y arrastra la selección de Optic sobre el texto que contiene. Lee caracteres de cualquier imagen mostrada en tu pantalla, así que tu biblioteca de capturas existente no se desperdicia: simplemente se vuelve accesible.</p>

<h3>Historial de capturas buscable</h3>
<p>Cada extracción de texto queda registrada en el historial de la barra de menú de Optic. En lugar de una carpeta de imágenes no buscables, obtienes una lista desplazable de cadenas de texto capturadas. ¿Necesitas ese número de confirmación de hace dos días? Desplázate por tu historial en lugar de buscar entre archivos de capturas.</p>

<h3>Más rápido que Cmd+Mayús+4</h3>
<p>El gesto es casi idéntico —activar, arrastrar un rectángulo— pero el resultado es texto inmediatamente útil en lugar de una imagen plana. Para cualquiera que haga capturas principalmente para guardar texto, esto elimina todo el paso de conversión.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Consigue Optic en la Mac App Store</a></p>
`,
  },

  "copy-serial-number-from-image-mac": {
    slug: "copy-serial-number-from-image-mac",
    title: "Cómo copiar un número de serie de una imagen en Mac",
    description:
      "Un número de serie está en una foto o escaneo: largo, alfanumérico, imposible de volver a escribir sin errores. Lo necesitas como texto copiable, no como píxeles.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Necesitas registrar un producto, presentar una reclamación de garantía o contactar con soporte, y te piden el número de serie. El problema: el número de serie está en una pegatina que fotografiaste, en una factura en PDF, en una captura de pantalla de una página de ajustes, o en un correo de confirmación con una imagen incrustada. Es una cadena larga de letras y números —a veces 15 o 20 caracteres— sin ningún patrón que te ayude a recordarla. Volver a escribirla implica una probabilidad casi segura de equivocarte al menos en un carácter.</p>

<h2>Los números de serie están diseñados para frustrar la entrada manual</h2>
<p>Los números de serie combinan letras mayúsculas, minúsculas y dígitos en secuencias deliberadamente diseñadas para ser únicas, no memorables. Caracteres como la O y el 0, la l y el 1, la S y el 5 se ven casi idénticos en la mayoría de las fuentes. Un solo carácter equivocado significa que el número de serie no se valida, y te quedas preguntándote cuál de los 20 caracteres leíste mal.</p>
<p>macOS no te ofrece ningún atajo aquí. Si el número de serie está en una foto o documento escaneado, no puedes seleccionarlo. Si está en una imagen incrustada en un correo, no puedes resaltarlo. Estás atascado, o volviendo a escribir con cuidado y esperando lo mejor, o ampliando carácter por carácter y comprobando cada uno.</p>

<h2>Arrastra sobre el número de serie, cópialo perfectamente</h2>
<p>Abre la imagen, el escaneo o la captura de pantalla que contiene el número de serie en cualquier app, luego activa <a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> desde la barra de menú. Arrastra una selección ajustada alrededor de solo la cadena del número de serie. El motor de OCR lee cada carácter y copia el texto exacto a tu portapapeles. Pégalo en el formulario de registro, el chat de soporte o tus registros.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic copying a serial number from an image on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Registro de productos</h3>
<p>El hardware nuevo a menudo requiere introducir un número de serie durante la configuración o el registro de garantía. Fotografía la etiqueta, ábrela en tu Mac y extrae la cadena con un arrastre. Sin entrecerrar los ojos, sin adivinar entre O y 0.</p>

<h3>Soporte y reclamaciones de garantía</h3>
<p>Los agentes de soporte piden números de serie para buscar tu dispositivo o producto. Tener la cadena exacta en tu portapapeles significa que puedes pegarla en el chat de soporte o correo al instante, evitando idas y venidas por identificadores mal escritos.</p>

<h3>Seguimiento de activos</h3>
<p>Los departamentos de TI fotografían etiquetas de activos y números de serie en el hardware de la empresa. Optic convierte esas fotos en texto copiable, facilitando rellenar hojas de inventario sin transcripción manual de cientos de números de serie.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Consigue Optic en la Mac App Store</a></p>
`,
  },

  "ocr-handwriting-mac": {
    slug: "ocr-handwriting-mac",
    title: "OCR de escritura a mano en Mac: convierte notas manuscritas en texto",
    description:
      "Fotografiaste notas manuscritas —de una pizarra, un cuaderno o una nota adhesiva— y necesitas las palabras como texto digital editable.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>La reunión terminó hace veinte minutos y sacaste una foto de la pizarra antes de que alguien la borrara. O has estado tomando notas a mano en un cuaderno y ahora necesitas enviarlas por correo a tu equipo. Las palabras están en la foto, escritas con suficiente claridad para leerlas, pero no hay forma de seleccionar texto manuscrito de una imagen y pegarlo en un documento. Así que te sientas y empiezas a transcribir tu propia letra, palabra por palabra.</p>

<h2>La escritura a mano vive fuera del mundo del texto digital</h2>
<p>macOS trata las imágenes de escritura a mano igual que cualquier otra imagen: como píxeles sin capa de texto. Vista Previa puede mostrar tu foto de la pizarra pero no extraerá palabras de ella. Live Text de Apple a veces puede reconocer escritura a mano ordenada en Fotos, pero el rendimiento varía enormemente según el estilo de escritura, la calidad de la imagen y el ángulo. La escritura desordenada pero legible a menudo no produce ningún resultado.</p>
<p>Existen apps dedicadas de OCR para escritura a mano, pero la mayoría están orientadas a iOS o requieren subir imágenes a servicios en la nube. Si quieres quedarte en tu Mac y trabajar con una foto que ya está en tu pantalla, las opciones son escasas.</p>

<h2>Selecciona texto manuscrito de cualquier foto</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> realiza OCR sobre lo que sea visible en tu pantalla, incluido texto manuscrito en fotos. Abre la foto de tus notas en cualquier visor, activa Optic desde la barra de menú y arrastra una selección sobre el área manuscrita. El texto reconocido se copia a tu portapapeles para pegarlo en correos, documentos o apps de notas.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic recognizing handwriting from a photo on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Capturas de pizarras</h3>
<p>Las pizarras de reuniones son temporales por naturaleza: siempre hay alguien que necesita el espacio a continuación. Fotografía la pizarra, abre la foto en tu Mac y extrae el contenido escrito con Optic. Convierte sesiones de lluvia de ideas, diagramas con etiquetas y listas de tareas en texto digital antes de que se borre la pizarra.</p>

<h3>Páginas de cuaderno</h3>
<p>Mucha gente todavía prefiere el papel para el pensamiento inicial pero necesita texto digital para compartir y buscar. Fotografía tu página del cuaderno y extrae las secciones clave. No hace falta transcribir toda una página: selecciona solo los párrafos o puntos que necesitas.</p>

<h3>Notas adhesivas y etiquetas</h3>
<p>Notas adhesivas manuscritas en un monitor, etiquetas en cajas de almacenamiento, anotaciones en documentos impresos: fotografíalas y extrae el texto. Especialmente útil cuando está involucrada la letra de otra persona y prefieres dejar que el OCR lo intente antes que descifrarlo carácter por carácter.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Consigue Optic en la Mac App Store</a></p>
`,
  },

  "mac-text-recognition-menu-bar": {
    slug: "mac-text-recognition-menu-bar",
    title: "Reconocimiento de texto desde la barra de menú de Mac",
    description:
      "Necesitas reconocimiento de texto rápido sin abrir una app completa, importar archivos o interrumpir tu flujo de trabajo: solo una captura veloz de lo que hay en pantalla.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Estás en medio de algo —escribiendo un correo, programando, investigando— y detectas texto en tu pantalla que necesitas capturar. Puede que esté en una imagen, un fotograma de vídeo o un elemento de interfaz no seleccionable. Lo último que quieres es romper tu concentración abriendo una app de OCR aparte, importando un archivo, esperando a que se procese y luego copiando el resultado. Necesitas el texto ahora, sin dejar lo que estás haciendo.</p>

<h2>El OCR tradicional interrumpe tu flujo de trabajo</h2>
<p>La mayoría de las herramientas de OCR son aplicaciones independientes con sus propias ventanas, exploradores de archivos y flujos de procesamiento. Para usarlas, guardas o capturas el contenido, cambias a la app de OCR, importas el archivo, esperas el reconocimiento, copias el resultado, vuelves a tu app original y pegas. Son seis cambios de contexto para una tarea que debería tardar un segundo.</p>
<p>Incluso las herramientas más ligeras a menudo requieren su propia ventana o panel. Se sitúan en el Dock, exigen espacio en pantalla y desvían tu atención de la tarea en cuestión. Para capturas de texto rápidas y frecuentes a lo largo de una jornada laboral, esta sobrecarga se acumula rápido.</p>

<h2>Un clic, un arrastre, de vuelta al trabajo</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> vive en la barra de menú de Mac, la ubicación menos intrusiva posible. Haz clic en el icono de la barra de menú o pulsa un atajo de teclado, arrastra un rectángulo sobre el texto que necesitas, y los caracteres reconocidos están en tu portapapeles. Toda la interacción tarda menos de dos segundos, y nunca dejas la app en la que estás trabajando.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic text recognition from the Mac menu bar" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Siempre disponible, nunca en medio</h3>
<p>Sin icono en el Dock, sin ventana principal, sin app que gestionar. Optic se sitúa discretamente en la barra de menú hasta que lo necesitas. Se inicia al arrancar sesión y permanece listo sin consumir tu atención ni espacio en pantalla.</p>

<h3>Acceso por atajo de teclado</h3>
<p>Para una activación aún más rápida, usa el atajo de teclado para iniciar una captura sin tocar la barra de menú. Tus manos permanecen en el teclado, arrastras la selección, y el texto queda capturado, todo sin un solo clic en el icono de la barra de menú.</p>

<h3>Historial sin una ventana aparte</h3>
<p>Cada captura queda registrada en el desplegable de la barra de menú. Haz clic en el icono de Optic para ver tus capturas recientes, volver a copiar una extracción anterior, o revisar lo que has obtenido durante la sesión. El historial vive donde vive la herramienta: en la barra de menú, fuera de tu camino hasta que lo quieras.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Consigue Optic en la Mac App Store</a></p>
`,
  },

  "copy-text-from-youtube-video-mac": {
    slug: "copy-text-from-youtube-video-mac",
    title: "Cómo copiar texto de un vídeo de YouTube en Mac",
    description:
      "Un vídeo de YouTube muestra un comando, un enlace o una información que necesitas, pero el reproductor de vídeo no te deja seleccionar ningún texto del fotograma del vídeo.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Estás siguiendo un tutorial de YouTube y el instructor escribe un comando de terminal largo. O una reseña en vídeo muestra brevemente una tabla comparativa de productos. O un recorrido técnico muestra ajustes que necesitas replicar. El texto es perfectamente visible en pantalla, pero el reproductor de vídeo de YouTube solo está renderizando fotogramas: no hay nada que hacer clic, resaltar o copiar. Pausas el vídeo y empiezas a escribir lo que ves, esperando no perderte una flag o escribir mal una ruta.</p>

<h2>El texto de YouTube está incrustado en el vídeo</h2>
<p>Todo lo que ves en un fotograma de vídeo de YouTube es una imagen decodificada. Ya sea una diapositiva, una sesión de terminal, un editor de código o gráficos en pantalla, el texto forma parte de los datos de píxeles. YouTube no ofrece ningún mecanismo para extraer texto del contenido del vídeo en sí. Los subtítulos y descripciones son cosas aparte: cubren lo que se dice, no lo que se muestra en pantalla.</p>
<p>Algunos creadores ponen comandos y enlaces en la descripción del vídeo o en comentarios fijados, pero muchos no lo hacen. Y para contenido como tablas comparativas, páginas de ajustes o datos mostrados en el vídeo, normalmente no se proporciona ningún equivalente en texto.</p>

<h2>Obtén texto directamente del fotograma del vídeo</h2>
<p>Pausa el vídeo en el momento adecuado (o no, también funciona con contenido en reproducción), activa <a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> desde la barra de menú y arrastra una selección sobre el texto visible en el reproductor de YouTube. Optic lee los caracteres del fotograma renderizado y los copia a tu portapapeles. Funciona en cualquier navegador: Safari, Chrome, Firefox, Arc.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic copying text from a YouTube video on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Comandos y código de tutoriales</h3>
<p>Los tutoriales de programación muestran constantemente comandos de terminal, fragmentos de código y ejemplos de configuración. Un solo arrastre extrae el texto exacto, preservando caracteres especiales, flags y sintaxis que son fáciles de escribir mal manualmente.</p>

<h3>Datos y tablas en pantalla</h3>
<p>Las reseñas de productos, comparativas de rendimiento y contenido educativo a menudo muestran tablas o listas en pantalla. Selecciona la región de datos y pega el texto extraído en tus notas o una hoja de cálculo. Se acabó pausar y transcribir fila por fila.</p>

<h3>URL y referencias</h3>
<p>Cuando un vídeo muestra brevemente una URL, el título de un libro o el nombre de un recurso, captúralo antes de que desaparezca. El historial de capturas de Optic guarda cada extracción, así que aunque captures texto mientras el vídeo está en reproducción, puedes recuperarlo después desde el desplegable de la barra de menú.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Consigue Optic en la Mac App Store</a></p>
`,
  },

  "scan-qr-code-from-screenshot-mac": {
    slug: "scan-qr-code-from-screenshot-mac",
    title: "Cómo escanear un código QR de una captura de pantalla en Mac",
    description:
      "Tienes una captura de pantalla con un código QR en tu Mac, pero ninguna forma de escanearlo: la cámara de tu teléfono no puede leer una pantalla, y macOS no ofrece ningún decodificador integrado.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Alguien te envía por mensaje una captura de pantalla con un código QR. O guardaste un código QR de un sitio web para más tarde. O un archivo PDF adjunto incluye uno que enlaza a una página de registro. El código QR está en la pantalla de tu Mac como imagen, y el instinto natural es "escanearlo", pero ¿cómo? Apuntar la cámara de tu teléfono al monitor de tu ordenador es incómodo, produce reflejos y abre el enlace en el dispositivo equivocado. macOS no ofrece ninguna forma integrada de decodificar un código QR desde una imagen o captura de pantalla.</p>

<h2>Sin decodificador de QR nativo en macOS</h2>
<p>Los iPhone tienen el escaneo de QR integrado en la app Cámara. macOS no tiene nada equivalente. No puedes hacer clic derecho en una imagen de código QR en Finder y elegir "Decodificar". Vista Previa no extrae una URL de un código QR. Safari no reconoce códigos QR en páginas web. Si el código QR ya está en la pantalla de tu Mac, el ecosistema de Apple espera que uses otro dispositivo para leerlo, lo cual no tiene sentido cuando quieres el resultado en el mismo ordenador.</p>
<p>Existen decodificadores de QR en línea, pero requieren subir tu imagen a un servidor de terceros. Para códigos QR que contienen información sensible —contraseñas de Wi-Fi, tokens de autenticación, URL privadas— subirlos a un sitio web cualquiera no es una opción.</p>

<h2>Decodifica códigos QR directamente en tu pantalla</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> incluye un escáner de códigos QR que funciona con cualquier cosa visible en tu pantalla. Abre la captura de pantalla o imagen que contiene el código QR, activa Optic desde la barra de menú y arrastra una selección alrededor del código. El contenido decodificado —URL, texto, credenciales, lo que sea que codifique el código— aparece en tu Mac de inmediato.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic scanning a QR code from a screenshot on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Entradas de eventos y tarjetas de embarque</h3>
<p>Los códigos QR en confirmaciones por correo, entradas reenviadas y tarjetas de embarque guardadas son comunes. Decodifícalos en tu Mac para verificar el contenido, abrir la página enlazada o guardar la información codificada, todo sin cambiar a tu teléfono.</p>

<h3>Códigos de Wi-Fi y autenticación</h3>
<p>Los códigos QR que codifican credenciales de Wi-Fi o URI de configuración de doble factor contienen datos sensibles. Optic los decodifica localmente en tu dispositivo, sin subida a servidores externos, sin exposición de tus credenciales a servicios de terceros.</p>

<h3>Guardado en el historial de capturas</h3>
<p>Cada código QR decodificado se guarda en el historial de la barra de menú de Optic junto a tus capturas de texto. ¿Necesitas la contraseña de Wi-Fi de un código QR que escaneaste la semana pasada? Desplázate por tus capturas en lugar de buscar y volver a escanear la imagen original.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Consigue Optic en la Mac App Store</a></p>
`,
  },

  "ocr-foreign-language-mac": {
    slug: "ocr-foreign-language-mac",
    title: "OCR de texto en idioma extranjero en Mac",
    description:
      "Aparece texto en un idioma extranjero en pantalla —en una imagen, un documento o un vídeo— y necesitas copiarlo aunque no puedas escribir esos caracteres tú mismo.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Estás mirando la etiqueta de un producto japonés en una foto, un documento legal francés que alguien escaneó, o texto chino en un vídeo tutorial. Necesitas ese texto: para pegarlo en un traductor, para enviárselo a un compañero, para incluirlo en un informe. Pero no puedes escribir esos caracteres. No tienes instalada esa distribución de teclado, no conoces el método de entrada, y aunque lo conocieras, mirar un carácter y reproducirlo pulsación por pulsación llevaría una eternidad. El texto está ahí, en pantalla, legible para cualquiera que conozca el idioma, pero imposible de copiar para ti.</p>

<h2>Los caracteres extranjeros sin el teclado adecuado son inalcanzables</h2>
<p>macOS admite muchas distribuciones de teclado, pero cambiar a una y aprender su método de entrada solo para copiar unos pocos caracteres de una imagen es poco práctico. La búsqueda carácter por carácter en una tabla Unicode o una herramienta IME es dolorosamente lenta. Existen métodos de entrada por dibujo para algunos idiomas, pero son incómodos para más de un solo carácter.</p>
<p>El problema se agrava cuando el texto está dentro de una imagen, un documento escaneado o un fotograma de vídeo: contextos en los que no puedes seleccionar texto ni siquiera en tu propio idioma. El texto en idioma extranjero en estos formatos es doblemente inaccesible: no puedes seleccionarlo porque es una imagen, y no podrías escribirlo aunque pudieras ver cada carácter con claridad.</p>

<h2>Selecciona texto extranjero visualmente, cópialo digitalmente</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> reconoce caracteres de tu pantalla sin importar el idioma. Actívalo desde la barra de menú, arrastra sobre el texto en idioma extranjero visible en cualquier imagen, documento o fotograma de vídeo, y los caracteres reconocidos se copian a tu portapapeles, en el guion correcto, con los caracteres Unicode correctos. Pégalos en Google Translate, DeepL o cualquier aplicación.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic recognizing foreign language text on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Flujos de trabajo de traducción</h3>
<p>El camino más rápido desde texto extranjero en una imagen hasta una traducción es: seleccionar con Optic, pegar en un traductor. Sin transcripción manual, sin cambio de teclado, sin búsqueda de caracteres. Funciona con alfabeto latino, cirílico, CJK, árabe y otros sistemas de escritura.</p>

<h3>Documentos internacionales</h3>
<p>Contratos, facturas y formularios escaneados en otros idiomas contienen nombres, direcciones y cifras que puede que necesites extraer. Arrastra sobre la sección relevante y pega los caracteres en tus propios documentos, preservando con precisión el guion original.</p>

<h3>Estudio de idiomas</h3>
<p>¿Encuentras vocabulario nuevo en imágenes o vídeos? Selecciona el texto y pégalo en una app de tarjetas de estudio o un diccionario. Tener los caracteres exactos —en lugar de adivinar una romanización— garantiza búsquedas y estudio precisos.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Consigue Optic en la Mac App Store</a></p>
`,
  },

  "copy-text-from-slack-image-mac": {
    slug: "copy-text-from-slack-image-mac",
    title: "Cómo copiar texto de una imagen en Slack en Mac",
    description:
      "Un compañero comparte una captura de pantalla en Slack —un registro de errores, una configuración, un panel— y el texto que contiene son solo píxeles que no puedes copiar ni buscar.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Sucede varias veces al día. Un compañero pega una captura de pantalla en un canal de Slack: un error de terminal, un panel mostrando métricas, un fragmento de código de su editor, o un panel de configuración. Necesitas el texto de esa captura: un mensaje de error para buscar, una métrica para citar en un informe, o un bloque de código para probar localmente. Pero el visor de imágenes de Slack te muestra la imagen y nada más. El texto que contiene bien podría ser una acuarela en lo que respecta a tu portapapeles.</p>

<h2>Slack trata las imágenes como imágenes</h2>
<p>Cuando alguien comparte una captura de pantalla en Slack, se renderiza como una imagen incrustada o se abre en el visor de imágenes de Slack. No hay capa de OCR, ninguna opción de extracción de texto, ningún "copiar texto de la imagen" en el menú de clic derecho. Puedes descargar la imagen, pero eso solo te da los mismos píxeles como archivo en disco: sigue sin haber texto seleccionable.</p>
<p>Esto es una fricción diaria en equipos de ingeniería, soporte y operaciones. Las capturas de pantalla son la forma más rápida de compartir información visual en el chat, pero toda captura que contiene texto se convierte en un callejón sin salida para quien la recibe. El remitente asume que la información se ha compartido; el receptor tiene que transcribirla manualmente o pedirle al remitente que la pegue como texto, una petición que a menudo queda sin respuesta durante horas.</p>

<h2>Lee texto directamente de imágenes de Slack</h2>
<p>Cuando veas una captura de pantalla en Slack que contiene texto que necesitas, ábrela en el visor de imágenes de Slack o simplemente mira la vista previa incrustada, luego activa <a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> desde la barra de menú y arrastra una selección sobre el texto. Los caracteres se reconocen y se copian a tu portapapeles en segundos, sin descargar, sin cambiar de app, sin esperar a que el remitente vuelva a compartirlo como texto.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic extracting text from a Slack image on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Mensajes de error y registros</h3>
<p>Las capturas de errores y trazas de pila se comparten constantemente en canales de ingeniería. Extrae la cadena exacta del error y pégala en tu buscador o agregador de registros para una búsqueda instantánea, en lugar de volver a escribir un mensaje de error de 200 caracteres.</p>

<h3>Fragmentos de código</h3>
<p>Cuando alguien captura su código en lugar de pegarlo como fragmento, Optic te permite extraerlo como texto de todos modos. Copia el código, pégalo en tu editor y pruébalo localmente, mucho más rápido que volver a escribir el código de otra persona desde una imagen.</p>

<h3>Métricas y datos</h3>
<p>Las capturas de paneles compartidas en canales de Slack contienen números, etiquetas y tendencias. Selecciona las cifras específicas que necesitas y pégalas en tus propios informes o hojas de cálculo sin errores de transcripción manual.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Consigue Optic en la Mac App Store</a></p>
`,
  },

  "mac-preview-ocr-limitations": {
    slug: "mac-preview-ocr-limitations",
    title: "Limitaciones del OCR de Vista Previa en Mac: qué se le escapa",
    description:
      "Vista Previa maneja imágenes y PDF pero no puede extraer texto de la mayoría de ellos. Si has intentado copiar texto de un PDF escaneado o una foto en Vista Previa y no has obtenido nada, aquí está el motivo.",
    date: "2026-09-06",
    readTime: "5 min de lectura",
    content: `
<p>Vista Previa es el visor de imágenes y PDF predeterminado en macOS, y muchos usuarios asumen que puede manejar OCR: reconocer y extraer texto de imágenes y documentos escaneados. En situaciones limitadas puede, gracias a la integración con Live Text. Pero en muchos escenarios comunes, Vista Previa o falla en silencio al reconocer texto o simplemente no ofrece ninguna capacidad de extracción. Si has intentado seleccionar texto de un PDF escaneado o una foto de un documento en Vista Previa y tu cursor solo dibuja un rectángulo de selección sin resaltar texto, has chocado con el muro del OCR de Vista Previa.</p>

<h2>Dónde falla el reconocimiento de texto de Vista Previa</h2>
<p><strong>PDF escaneados con diseños complejos.</strong> Vista Previa a veces puede reconocer texto en documentos limpios de una sola columna bien escaneados. Pero los diseños de varias columnas, tablas, encabezados y pies de página, y documentos con gráficos y texto mezclados a menudo no producen ningún texto seleccionable. El motor de Live Text en Vista Previa no maneja estructuras de documentos complejas de forma fiable.</p>
<p><strong>Texto de bajo contraste o pequeño.</strong> Escaneos de recibos, documentos desvanecidos e imágenes con bajo contraste entre texto y fondo derrotan con frecuencia el reconocimiento de Vista Previa. El texto puede ser perfectamente legible para el ojo humano pero invisible para la detección de Vista Previa.</p>
<p><strong>Texto manuscrito.</strong> El reconocimiento de texto de Vista Previa está ajustado para fuentes impresas. Las notas manuscritas, fotos de pizarras y documentos anotados rara vez se reconocen, incluso cuando la letra es limpia y legible.</p>
<p><strong>Sistemas de escritura no latinos.</strong> El soporte para idiomas no latinos es inconsistente. El texto en CJK, árabe y cirílico en imágenes puede o no detectarse según el estilo de fuente, la calidad de la imagen y la complejidad del documento.</p>
<p><strong>Sin captura desde la pantalla.</strong> Vista Previa solo procesa archivos que has abierto. Si el texto que necesitas está en un fotograma de vídeo, la interfaz de una app web, un cuadro de diálogo de error o la ventana de otra app, Vista Previa no tiene forma de alcanzarlo.</p>

<h2>OCR que funciona en todo lo que hay en pantalla</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> evita por completo las limitaciones de Vista Previa trabajando a nivel de pantalla. En lugar de pedirle a un visor de archivos que reconozca texto dentro de un archivo, Optic lee caracteres de lo que sea visible en tu pantalla. Abre el documento problemático en Vista Previa —o cualquier otra app— y arrastra la selección de Optic sobre el texto que necesitas.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic overcoming Preview OCR limitations on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Diseños de documentos complejos</h3>
<p>Tablas, texto en varias columnas y contenido mixto que confunde a Vista Previa son legibles para Optic porque tú controlas exactamente qué región escanear. Selecciona solo la columna o celda de tabla que necesitas, sin necesidad de analizar la página completa.</p>

<h3>Más allá de los archivos</h3>
<p>Optic no se limita a archivos abiertos. Fotogramas de vídeo, diálogos, apps web, sesiones de escritorio remoto: cualquier cosa renderizada en pantalla es válida. Vista Previa nunca puede alcanzar estas fuentes; Optic las lee con la misma naturalidad que cualquier imagen.</p>

<h3>Historial persistente</h3>
<p>Vista Previa no tiene memoria de intentos anteriores de reconocimiento de texto. Optic guarda cada extracción en la barra de menú, creando un registro de texto capturado que puedes recorrer y volver a copiar en cualquier momento.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Consigue Optic en la Mac App Store</a></p>
`,
  },

  "batch-ocr-screenshots-mac": {
    slug: "batch-ocr-screenshots-mac",
    title: "OCR por lotes de capturas de pantalla en Mac: procesa el historial de capturas",
    description:
      "Tienes una colección de capturas de pantalla con texto que necesitas, pero procesarlas una a una con una herramienta de OCR tradicional es tedioso y lento.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Hiciste una docena de capturas de pantalla durante una sesión de investigación: tablas de precios, comparativas de funciones, paneles de ajustes, material de referencia. Ahora necesitas el texto de todas ellas. Con herramientas de OCR tradicionales, eso significa abrir cada archivo individualmente, ejecutar el reconocimiento, copiar el resultado, pegarlo en algún sitio y repetir. Doce capturas significan doce ciclos de abrir-procesar-copiar-pegar. No es difícil, solo tediosamente lento.</p>

<h2>macOS no ofrece extracción de texto por lotes</h2>
<p>No hay ninguna función de macOS integrada que te permita seleccionar varias imágenes y extraer texto de todas ellas. Vista Previa puede abrir varios archivos pero no tiene una función de "extraer todo el texto". Automator y Atajos pueden encadenar algunas acciones, pero carecen de capacidades de OCR fiables para capturas de pantalla. O procesas cada imagen manualmente, o instalas software pesado de procesamiento de documentos pensado para flujos de trabajo de escaneo empresarial.</p>
<p>La ironía es que capturaste estas capturas de pantalla rápidamente —Cmd+Mayús+4, clic, listo— pero extraer el texto de ellas tarda diez veces más de lo que tardó capturarlas.</p>

<h2>OCR de pantalla rápido con historial integrado</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> convierte la extracción por lotes en un flujo de trabajo rápido y lineal. Abre tus capturas en Vista Rápida o cualquier visor, luego haz selecciones rápidas: arrastra sobre el texto en una imagen, pasa a la siguiente, arrastra de nuevo. Cada extracción se guarda instantáneamente en el historial de capturas de Optic en la barra de menú. Sin gestión de archivos, sin diálogos para guardar, sin hacer malabares copiando y pegando entre ventanas.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic batch processing screenshots on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Sesiones de investigación</h3>
<p>¿Capturaste pantallas de sitios web de la competencia, páginas de precios o documentación? Ábrelas en secuencia y dispara las extracciones. Tu historial de capturas se convierte en un registro de texto limpio de todo lo que reuniste: buscable y recopiable sin volver a abrir ninguna imagen.</p>

<h3>El historial de capturas como tu archivo de texto</h3>
<p>Cada extracción tiene marca de tiempo y se almacena en el desplegable de la barra de menú. Después de procesar un lote de capturas, desplázate por el historial para revisar, volver a copiar o verificar capturas individuales. El historial funciona como un archivo de texto ligero de tu contenido extraído.</p>

<h3>Extracción selectiva</h3>
<p>A diferencia del OCR por lotes automatizado que procesa imágenes completas, tú controlas exactamente qué parte de cada captura extraer. ¿Necesitas solo el precio de una tabla de precios? ¿Solo el código de error de una captura de registro? Selecciona precisamente lo que importa y omite el resto.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Consigue Optic en la Mac App Store</a></p>
`,
  },

  "copy-address-from-image-mac": {
    slug: "copy-address-from-image-mac",
    title: "Cómo copiar una dirección de una imagen en Mac",
    description:
      "Una etiqueta de envío, la foto de una tarjeta de visita o una carta escaneada contiene una dirección que necesitas, pero está atrapada en una imagen sin forma de seleccionarla.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Necesitas copiar una dirección de la foto de una tarjeta de visita, un sobre escaneado, la captura de una página de contacto o una imagen de confirmación de entrega. La dirección está claramente impresa —calle, ciudad, provincia, código postal— pero como está en una imagen, no puedes hacer clic en ella, no puedes seleccionarla, no puedes copiarla. Tienes que leer cada línea y escribirla en tu app de mapas, tus contactos o tu formulario de envío. Un dígito mal escrito en un código postal y el paquete va a parar al lugar equivocado.</p>

<h2>Las direcciones en imágenes requieren una transcripción manual perfecta</h2>
<p>Las direcciones son especialmente arriesgadas de volver a escribir. Contienen una mezcla de números, abreviaturas de nombres de calle, números de unidad y códigos postales, todo lo cual debe ser exacto. Trasponer dos dígitos en un código postal o escribir mal un número de apartamento significa una entrega fallida o correo mal dirigido. Y a diferencia de la mayoría del texto, no puedes verificar fácilmente una dirección leyéndola de nuevo: necesitas comparar carácter por carácter.</p>
<p>macOS no ofrece ningún flujo de trabajo integrado para extraer una dirección de una imagen. Live Text podría resaltar direcciones en algunas imágenes de Fotos y ofrecer abrirlas en Mapas, pero esto solo funciona en apps específicas de Apple, con imágenes limpias, y extrae a Mapas, no a tu portapapeles para pegarlo en otro sitio.</p>

<h2>Arrastra sobre la dirección, pégala donde quieras</h2>
<p>Abre la imagen que contiene la dirección en cualquier app —Vista Previa, Mail, un navegador, Slack— luego activa <a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> desde la barra de menú y arrastra una selección alrededor de la dirección. El texto completo —cada línea, cada número, cada abreviatura— se copia a tu portapapeles. Pégalo en Google Maps, un formulario de envío, tus contactos o un correo.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic copying an address from an image on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Tarjetas de visita</h3>
<p>Las fotos de tarjetas de visita de eventos de networking son famosas por quedarse en tu carrete de fotos sin que sus direcciones lleguen nunca a tus contactos. Abre la foto, selecciona la dirección con Optic y pégala directamente en la entrada de contacto. También funciona para números de teléfono y direcciones de correo visibles en la tarjeta.</p>

<h3>Envíos y devoluciones</h3>
<p>Las etiquetas de envío de devolución, confirmaciones de entrega y fotos de embalaje a menudo contienen direcciones que necesitas consultar o reutilizar. Extrae la dirección de la imagen y pégala en tu plataforma de envíos sin volver a escribirla.</p>

<h3>Inmobiliaria y direcciones</h3>
<p>Las fotos de anuncios, folletos de propiedades y documentos escaneados en el proceso inmobiliario están llenos de direcciones. Obtén cualquier dirección de estas imágenes y pégala en tu app de mapas para direcciones o en una hoja de cálculo para seguimiento.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Consigue Optic en la Mac App Store</a></p>
`,
  },

  "ocr-code-snippets-mac": {
    slug: "ocr-code-snippets-mac",
    title: "OCR de fragmentos de código en Mac: copia código de tutoriales y capturas de pantalla",
    description:
      "El código aparece como imagen en un tutorial, documentación o una captura compartida, y volver a escribirlo significa introducir errores un carácter mal colocado a la vez.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Una entrada de blog renderiza sus ejemplos de código como imágenes estilizadas. Un compañero pega una captura de su IDE en un comentario de pull request. La documentación de una herramienta antigua solo existe como capturas de terminal en una wiki. Las respuestas de Stack Overflow incluyen código incrustado en imágenes porque el formateador estropeó el original. En cada caso, el código es visible y legible, pero es una imagen, y copiar código de una imagen volviéndolo a escribir es la forma de pasarte treinta minutos depurando un punto y coma que creías que era dos puntos.</p>

<h2>El código exige una extracción perfecta carácter por carácter</h2>
<p>A diferencia de la prosa, el código no tolera la aproximación. Un guion en lugar de un guion bajo rompe una importación. Un corchete mal colocado invalida una función. Una letra minúscula donde se necesitaba mayúscula cambia por completo una referencia de variable. Cuando vuelves a escribir código desde una imagen, cada carácter es un punto potencial de fallo, y los errores que introduces son invisibles porque parecen correctos a simple vista.</p>
<p>El problema se magnifica con comandos largos, fragmentos de varias líneas o sintaxis poco familiar. Un comando Docker run con diez flags, un patrón de expresión regular o una tubería de shell con pipes y redirecciones: este es exactamente el tipo de contenido que se comparte como imágenes y es casi imposible de volver a escribir con precisión.</p>

<h2>Extrae código de cualquier imagen en pantalla</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> lee los caracteres del código directamente desde tu pantalla. Abre la imagen, la página del tutorial o la captura que contiene el código, activa Optic desde la barra de menú y arrastra una selección sobre el fragmento. El texto reconocido —preservando la indentación, los caracteres especiales y la estructura de líneas— va directo a tu portapapeles.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic extracting code from a screenshot on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Comandos de terminal</h3>
<p>Scripts de instalación, comandos de compilación y pipelines de despliegue mostrados como capturas de terminal son comunes en documentación y tutoriales. Selecciona el bloque de comando y pégalo en tu terminal con la confianza de que los flags, rutas y argumentos son exactamente correctos.</p>

<h3>Capturas de IDE</h3>
<p>Cuando un compañero comparte una captura de su código —en Slack, en un comentario de GitHub, en un correo— extrae el código y pégalo en tu propio editor. Pruébalo, modifícalo o revísalo correctamente en lugar de entrecerrar los ojos ante una imagen.</p>

<h3>Extracción de varios fragmentos</h3>
<p>Los tutoriales a menudo muestran varios bloques de código a lo largo de una página. Extrae cada uno en secuencia. El historial de capturas de Optic guarda cada extracción, así puedes recorrer todo un tutorial y pegar cada fragmento en tu proyecto uno a uno desde el desplegable del historial.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Consigue Optic en la Mac App Store</a></p>
`,
  },

  "text-to-speech-from-screen-mac": {
    slug: "text-to-speech-from-screen-mac",
    title: "Texto a voz de cualquier contenido en pantalla en Mac",
    description:
      "Quieres escuchar el texto que hay en pantalla —en una imagen, un PDF escaneado, un fotograma de vídeo— pero las herramientas de voz de tu Mac solo funcionan con texto que puedes resaltar.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>macOS incluye una función de contenido hablado que lee en voz alta el texto seleccionado. Resalta un párrafo en Safari, haz clic derecho y tu Mac lo pronuncia. La función funciona bien, hasta que necesitas escuchar texto que no se puede resaltar. Una infografía con estadísticas clave. Un documento escaneado sin capa de texto. Subtítulos incrustados en un fotograma de vídeo. Texto renderizado como gráfico en una app web. En todos estos casos, el contenido hablado de macOS no tiene con qué trabajar porque no hay texto seleccionable que enviarle al motor de voz.</p>

<h2>La mayoría del texto en pantalla no es seleccionable</h2>
<p>La cantidad de texto no seleccionable en una pantalla de Mac moderna es mayor de lo que la mayoría de la gente cree. Imágenes con texto superpuesto, apps web renderizadas en canvas, escaneos de PDF, fotogramas de vídeo, sesiones de escritorio remoto, cuadros de diálogo, interfaces de apps con etiquetas renderizadas de forma personalizada: todo esto muestra texto legible que macOS trata como parte de una imagen. Puedes verlo, puedes leerlo con tus ojos, pero no puedes seleccionarlo, así que no puedes enviarlo al motor de voz.</p>
<p>Para usuarios que dependen del audio por accesibilidad, revisión, multitarea o aprendizaje de idiomas, esta brecha es una barrera real. El texto está en pantalla, el motor de voz está en la misma máquina, pero no hay puente entre ellos para contenido no seleccionable.</p>

<h2>Selecciona cualquier cosa en pantalla, escúchala hablada</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> cierra esta brecha combinando OCR a nivel de pantalla con texto a voz. Actívalo desde la barra de menú, arrastra una selección sobre cualquier texto visible —sin importar la fuente— y Optic reconoce los caracteres. Luego puedes hacer que el texto capturado se lea en voz alta, convirtiendo cualquier contenido visible en pantalla en audio.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic text-to-speech from screen content on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Accesibilidad</h3>
<p>Lectores de pantalla como VoiceOver funcionan bien con elementos de interfaz nativos y texto estándar, pero tropiezan con texto dentro de imágenes y renderizado no estándar. Optic cubre esta brecha haciendo que cualquier texto visible esté disponible tanto como texto de portapapeles como audio hablado. El contenido que antes era inaccesible se vuelve audible.</p>

<h3>Revisión</h3>
<p>Escuchar el texto en voz alta detecta errores que el escaneo visual pasa por alto. Después de extraer texto de un documento escaneado o una imagen, usa el texto a voz para verificar el resultado del OCR. Una palabra confusa o un carácter mal reconocido resulta evidente al hablarlo, pero podría pasar desapercibido en pantalla.</p>

<h3>Multitarea y comprensión</h3>
<p>Extrae un pasaje largo de un documento, artículo o página escaneada y escúchalo mientras haces otra cosa. El procesamiento auditivo activa canales cognitivos distintos a la lectura, lo cual puede ayudar a la comprensión y retención, especialmente en material denso o poco familiar. Cada captura permanece en tu historial de la barra de menú, así puedes volver a revisar y reproducir cualquier extracción anterior.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Consigue Optic en la Mac App Store</a></p>
`,
  },
};
