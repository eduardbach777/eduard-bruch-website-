import type { ArticleSet } from "./index";

export const esArticles: ArticleSet = {
  "best-sqlite-browser-mac": {
    slug: "best-sqlite-browser-mac",
    title: "El Mejor Navegador SQLite para Mac",
    description:
      "La mayoría de los navegadores SQLite en Mac son aplicaciones Electron multiplataforma que se sienten fuera de lugar. Encontrar uno que se comporte realmente como una app de Mac requiere más búsqueda de la que debería.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Tienes una base de datos SQLite que necesitas inspeccionar. Buscas un navegador, descargas algo prometedor, y de inmediato notas que no soporta funciones nativas de macOS: sin pestañas de documentos, sin modo oscuro del sistema, sin integración con Spotlight. Se siente como una app de Linux disfrazada de Mac. Esta es la realidad de la mayoría de los navegadores SQLite disponibles hoy.</p>

<h2>Por Qué la Mayoría de los Navegadores SQLite Fallan en Mac</h2>
<p>La mayoría de las herramientas de bases de datos están construidas con Electron o Java, diseñadas para funcionar en todas partes y optimizadas para ninguna. Ignoran las convenciones de Mac de las que dependes: arrastrar y soltar desde Finder, gestión adecuada de ventanas, desplazamiento fluido en conjuntos de resultados grandes. Terminas peleando con la herramienta en lugar de concentrarte en tus datos.</p>
<p>DB Browser for SQLite es de código abierto y funcional, pero es una aplicación Qt: atajos de teclado extraños, cuadros de diálogo de archivos no nativos, y ninguna integración con el resto de tu flujo de trabajo en macOS. TablePlus se ve mejor, pero apunta a todos los motores de bases de datos, haciendo que SQLite se sienta como algo secundario.</p>

<h2>Un Navegador SQLite Construido para Mac Desde Cero</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> es un navegador SQLite nativo de macOS creado específicamente para abrir, explorar y editar bases de datos SQLite. Usa AppKit y Swift — sin Electron, sin compromisos multiplataforma. Se abre al instante, respeta la apariencia de tu sistema y funciona como deben funcionar las apps de Mac.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome — navegador SQLite nativo para Mac mostrando tablas y editor de consultas" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Explora Tablas, Vistas, Índices y Disparadores</h3>
<p>Abre cualquier archivo .db, .sqlite o .sqlite3 y ve inmediatamente cada tabla, vista, índice y disparador de tu base de datos. Haz clic en una tabla para explorar su contenido con desplazamiento nativo y rápido. Sin esperar a que una vista web renderice miles de filas.</p>

<h3>Edita Datos en Línea</h3>
<p>Haz clic en cualquier celda para editarla directamente. Inserta filas nuevas, elimina las existentes o crea tablas completamente nuevas usando un editor visual — sin necesidad de SQL para operaciones básicas. Cuando sí necesitas SQL, Tome incluye un editor de consultas con resaltado de sintaxis y autocompletado.</p>

<h3>Basado en Documentos — Abre Varias Bases de Datos en Paralelo</h3>
<p>Tome está basado en documentos, lo que significa que cada base de datos se abre en su propia ventana o pestaña. Compara bases de datos de staging y producción una junto a la otra, o mantén una base de datos de referencia abierta mientras trabajas en otra. Funciona exactamente como cualquier app de Mac basada en documentos — porque lo es.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Consigue Tome en la Mac App Store</a></p>
`,
  },

  "view-sqlite-database-mac": {
    slug: "view-sqlite-database-mac",
    title: "Cómo Ver una Base de Datos SQLite en Mac",
    description:
      "Los archivos SQLite están por todas partes en tu Mac — datos de apps, almacenes de Core Data, historial del navegador — pero macOS no tiene una forma integrada de abrirlos y verlos.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Encontraste un archivo .sqlite en la carpeta de tu proyecto o enterrado en el contenedor de una app. Haces doble clic y macOS no tiene idea de qué hacer con él. Podrías abrir Terminal y escribir <code>sqlite3 mibasededatos.db</code>, pero leer datos tabulares en una ventana de terminal es doloroso — sin alineación de columnas, sin desplazamiento, sin forma de escanear rápidamente cientos de filas.</p>

<h2>El Enfoque de Terminal y Sus Límites</h2>
<p>La herramienta de línea de comandos integrada <code>sqlite3</code> viene con todos los Mac. Funciona, técnicamente. Puedes ejecutar <code>.tables</code> para listar tablas y <code>SELECT * FROM tablename;</code> para volcar filas. Pero la salida es texto sin formato. Las tablas anchas se ajustan de forma incómoda. No hay manera de hacer clic en un valor y editarlo. Y si eres diseñador, gerente de producto, o cualquiera que no viva en Terminal, esto no es un flujo de trabajo realista.</p>
<p>Podrías intentar abrir el archivo en un editor de texto, pero las bases de datos SQLite son binarias — verás caracteres codificados, no tus datos.</p>

<h2>Ve Cualquier Base de Datos SQLite Visualmente Con Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> te da una interfaz visual apropiada para bases de datos SQLite en Mac. Arrastra un archivo .db, .sqlite o .sqlite3 al icono de la app o usa Archivo → Abrir, y tu base de datos aparece al instante — tablas listadas en una barra lateral, datos mostrados en una cuadrícula desplazable.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome mostrando una base de datos SQLite con tablas y datos de filas" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Ve Tu Esquema de un Vistazo</h3>
<p>Cada tabla, vista, índice y disparador aparece en la barra lateral. Haz clic en cualquier tabla para ver sus filas. Haz clic en una vista para ver sus resultados. Sin comandos que memorizar — solo apuntar y hacer clic.</p>

<h3>Ejecuta Consultas Cuando lo Necesites</h3>
<p>Para cualquier cosa más allá de la navegación, el editor de consultas SQL de Tome está listo. Incluye resaltado de sintaxis y autocompletado para nombres de tablas y columnas, así puedes escribir consultas más rápido que en Terminal sin adivinar los nombres de columnas de memoria.</p>

<h3>Casos de Uso Comunes</h3>
<p>Depurar una app de iOS o Android que almacena datos en SQLite. Inspeccionar la base de datos de salida de un scraper web. Revisar una base de datos de desarrollo de Django o Rails. Ver el historial o marcadores del navegador guardados en SQLite. Todo esto se vuelve simple — abre el archivo, ve los datos.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Consigue Tome en la Mac App Store</a></p>
`,
  },

  "native-sqlite-editor-mac": {
    slug: "native-sqlite-editor-mac",
    title: "Editor SQLite Nativo para Mac — Sin Electron",
    description:
      "Las herramientas de bases de datos basadas en Electron consumen cientos de megabytes de RAM solo para mostrar una tabla. Un editor nativo de macOS cambia lo que realmente significa ser ligero.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Abres tu herramienta de base de datos y el Monitor de Actividad muestra que consume 400 MB de RAM antes incluso de haber cargado un archivo. La interfaz se traba al desplazarse por una tabla grande. Los atajos de teclado no coinciden con los que usa cualquier otra app de Mac. Esto es lo que pasa cuando tu editor SQLite en realidad es un navegador web disfrazado de app de escritorio.</p>

<h2>El Problema de Electron</h2>
<p>Las apps Electron empaquetan un navegador Chromium completo para renderizar su interfaz. Para un editor de bases de datos — una app que principalmente muestra tablas de texto — esto es una sobrecarga extrema. Obtienes tiempos de inicio lentos, alto uso de memoria y una interfaz que nunca se siente del todo bien en macOS. Los cuadros de diálogo de archivos se ven diferentes. El renderizado de texto está ligeramente desalineado. La app no aparece correctamente en el menú "Abrir con" de Finder.</p>
<p>Algunos desarrolladores eligen Electron porque les permite lanzar en Mac, Windows y Linux desde una sola base de código. Esa es una decisión de negocio razonable, pero eres tú quien paga el impuesto de rendimiento cada vez que abres una base de datos.</p>

<h2>Tome: Construido Con AppKit, No un Navegador Web</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> es una aplicación nativa de macOS construida con Swift y AppKit. Usa los mismos frameworks que Finder, Xcode y todas las demás apps propias de Apple. El resultado es un editor SQLite que se abre en menos de un segundo, se desplaza suavemente por decenas de miles de filas, y usa una fracción de la memoria que necesitaría una app Electron.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Editor SQLite nativo de macOS Tome con barra lateral y cuadrícula de datos" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Integración Real con macOS</h3>
<p>Tome se registra como manejador de archivos .db, .sqlite y .sqlite3. Haz doble clic en una base de datos en Finder y se abre directamente. Arrastra archivos al icono del dock. Usa pestañas y gestión de ventanas de macOS. Todo funciona como esperas de una app de Mac porque es una app de Mac.</p>

<h3>Edita Sin Escribir SQL</h3>
<p>Haz clic en cualquier celda para editar su valor en línea. Inserta filas, elimina filas y crea tablas nuevas usando un editor visual. Cuando necesites SQL, el editor de consultas integrado tiene resaltado de sintaxis y autocompletado — pero para ediciones cotidianas, nunca tienes que tocarlo.</p>

<h3>Ligero por Diseño</h3>
<p>Tome hace una cosa bien: SQLite. No intenta conectarse a PostgreSQL, MySQL o MongoDB. Al enfocarse exclusivamente en SQLite, cada función está optimizada para el formato con el que realmente trabajas.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Consigue Tome en la Mac App Store</a></p>
`,
  },

  "db-browser-alternative-mac": {
    slug: "db-browser-alternative-mac",
    title: "Alternativa a DB Browser for SQLite en Mac",
    description:
      "DB Browser for SQLite funciona, pero su interfaz Qt se siente ajena en macOS — atajos incorrectos, cuadros de diálogo de archivos no nativos y ninguna integración con el resto de tu flujo de trabajo.",
    date: "2026-09-06",
    readTime: "5 min de lectura",
    content: `
<p>DB Browser for SQLite (DB4S) es la herramienta gratuita de referencia para ver bases de datos SQLite. Es de código abierto, multiplataforma, y lleva años existiendo. Pero si lo usas en un Mac, habrás notado la fricción: Cmd+Q a veces no funciona como se espera, los cuadros de diálogo de archivos parecen pertenecer a otro sistema operativo, y la interfaz nunca termina de coincidir con tus otras apps. Funciona — pero no se siente bien.</p>

<h2>Dónde DB Browser Se Queda Corto en Mac</h2>
<p>DB4S está construido con Qt, un framework de interfaz multiplataforma. En Mac, esto significa que la app no usa controles nativos de macOS. Lo notas en pequeños detalles: la barra de pestañas no coincide con la de Safari, la física del desplazamiento se siente rara, y no hay Handoff, integración con Spotlight, ni soporte adecuado de modo oscuro. La app tampoco soporta la arquitectura de macOS basada en documentos, así que no puedes abrir varias bases de datos en pestañas nativas.</p>
<p>El rendimiento es otro problema. Abrir una base de datos con una tabla grande puede sentirse lento, y la interfaz a veces se congela mientras ejecuta consultas. Para una app de escritorio en 2026, los usuarios esperan mejor capacidad de respuesta.</p>
<p>Nada de esto hace que DB4S sea una mala herramienta — es excelente para lo que es. Pero si estás en un Mac y quieres algo que se sienta nativo, deja un vacío.</p>

<h2>Tome: Una Alternativa Nativa de macOS</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> llena ese vacío. Es un navegador y editor SQLite nativo construido específicamente para macOS con Swift y AppKit. Hace todo lo que DB Browser hace para el uso diario — explorar tablas, editar datos, ejecutar consultas — pero envuelto en una interfaz que pertenece a tu Mac.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome como alternativa nativa a DB Browser for SQLite en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Todo lo Que Usas de DB Browser, Pero Nativo</h3>
<p>Explora tablas, vistas, índices y disparadores en una barra lateral limpia. Ve los datos de las filas en una cuadrícula rápida y desplazable. Edita celdas en línea sin escribir SQL. Inserta y elimina filas con un clic. Crea tablas nuevas con un editor visual en lugar de escribir sentencias CREATE TABLE a mano.</p>

<h3>Editor de Consultas SQL Cuando lo Necesitas</h3>
<p>Tome incluye un editor de consultas SQL completo con resaltado de sintaxis y autocompletado para los nombres de tus tablas y columnas. Ejecuta SELECT, UPDATE, DELETE o cualquier otra consulta y ve los resultados al instante.</p>

<h3>Flujo de Trabajo Basado en Documentos</h3>
<p>A diferencia de DB4S, Tome usa la arquitectura de macOS basada en documentos. Cada base de datos se abre en su propia ventana o pestaña. Puedes tener varias bases de datos abiertas simultáneamente, organizadas una junto a otra, y cambiar entre ellas de la misma manera que cambias entre documentos en cualquier otra app de Mac.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Consigue Tome en la Mac App Store</a></p>
`,
  },

  "tableplus-alternative-mac-sqlite": {
    slug: "tableplus-alternative-mac-sqlite",
    title: "Alternativa a TablePlus para Mac — Solo SQLite",
    description:
      "TablePlus soporta todas las bases de datos, lo que significa que SQLite nunca recibe toda la atención. Si solo necesitas SQLite, la complejidad extra simplemente estorba.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>TablePlus es un cliente de bases de datos bien diseñado que soporta PostgreSQL, MySQL, SQLite, Redis, MongoDB y más. Es un software genuinamente bueno. Pero si solo trabajas con archivos SQLite, terminas navegando por diálogos de conexión, configuraciones de drivers y elementos de interfaz que existen para bases de datos que nunca usarás. Es como comprar una navaja suiza cuando solo necesitas la hoja.</p>

<h2>Cuando una Herramienta Multi-Base de Datos Es Demasiado</h2>
<p>Cada vez que abres TablePlus, ves un gestor de conexiones diseñado para servidores de bases de datos remotos. Para SQLite — una base de datos local basada en archivos — este flujo de trabajo añade pasos innecesarios. No necesitas cadenas de conexión, puertos ni credenciales. Solo necesitas abrir un archivo.</p>
<p>TablePlus también usa un modelo de suscripción que refleja su amplio conjunto de funciones. Si no te conectas a PostgreSQL o MySQL, estás pagando por capacidades que no usas. El nivel gratuito te limita a cierto número de pestañas y filas abiertas, lo cual puede ser frustrante durante el desarrollo activo.</p>
<p>La interfaz, aunque pulida, está diseñada para dar cabida a todas las bases de datos soportadas. Funciones específicas de SQLite como explorar disparadores o inspeccionar la estructura interna del archivo quedan en segundo plano frente a funciones que importan más para bases de datos basadas en servidor.</p>

<h2>Tome: Diseñado Específicamente para SQLite en Mac</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> es una app nativa de macOS que hace una sola cosa: SQLite. Sin gestores de conexión, sin configuración de drivers, sin funciones para bases de datos que no usas. Abre un archivo .db, .sqlite o .sqlite3 y empieza a trabajar de inmediato.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome — navegador SQLite enfocado como alternativa a TablePlus" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Flujo de Trabajo Basado en Archivos</h3>
<p>Haz doble clic en un archivo SQLite en Finder y Tome lo abre. Arrastra un archivo al icono del dock. Usa Archivo → Abrir. Sin configuración de conexión, sin configuración de servidor. SQLite es un formato de archivo, y Tome lo trata como tal.</p>

<h3>Cobertura Completa de SQLite</h3>
<p>Explora tablas, vistas, índices y disparadores. Edita celdas en línea. Inserta y elimina filas. Crea tablas con un editor visual. Ejecuta consultas SQL con resaltado de sintaxis y autocompletado. Cada función existe porque tiene sentido para SQLite.</p>

<h3>Múltiples Bases de Datos, al Estilo Mac</h3>
<p>Tome está basado en documentos. Abre cinco bases de datos y cada una obtiene su propia ventana o pestaña. Compara datos entre bases de datos colocando ventanas una junto a otra — el mismo flujo de trabajo que usas con archivos de texto, hojas de cálculo o cualquier otro documento en tu Mac.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Consigue Tome en la Mac App Store</a></p>
`,
  },

  "open-sqlite3-file-mac": {
    slug: "open-sqlite3-file-mac",
    title: "Cómo Abrir Archivos .sqlite3 en Mac Sin Terminal",
    description:
      "Hacer doble clic en un archivo .sqlite3 en Mac no hace nada útil. macOS no reconoce el formato, y Terminal es la única opción integrada.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Tienes un archivo .sqlite3 — quizás exportado de un proyecto Django, extraído del contenedor de una app de iOS, o descargado de un colega. Haces doble clic en él en tu Mac y aparece el diálogo de "no hay aplicación establecida para abrir", o peor, se abre en un editor de texto y muestra caracteres binarios ilegibles. macOS simplemente no sabe qué hacer con los archivos SQLite de forma predeterminada.</p>

<h2>Las Opciones Predeterminadas Son Todas Malas</h2>
<p>Sin instalar nada, tu única opción es Terminal. Ábrelo, navega al directorio del archivo, y escribe <code>sqlite3 tuarchivo.sqlite3</code>. Desde ahí puedes ejecutar comandos como <code>.tables</code> y <code>SELECT * FROM tablename;</code> — pero la salida es texto plano sin formato, sin desplazamiento, y sin forma de editar datos visualmente.</p>
<p>Si eres un desarrollador cómodo en Terminal, esto funciona para revisiones rápidas. Pero para cualquier cosa más allá de una simple consulta — explorar múltiples tablas, editar valores, entender un esquema — es lento y propenso a errores. Y si no eres desarrollador, es directamente inviable.</p>
<p>Algunas personas prueban visores SQLite en línea que se ejecutan en el navegador. Estos requieren subir tu archivo de base de datos a un servidor, lo cual plantea preocupaciones obvias de privacidad — especialmente si la base de datos contiene datos de usuarios o credenciales.</p>

<h2>Abre Archivos .sqlite3 Con un Doble Clic Usando Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> se registra como manejador de archivos .sqlite3, .sqlite y .db en macOS. Después de instalarlo, puedes hacer doble clic en cualquier archivo SQLite en Finder y se abre directamente en Tome — tablas listadas en la barra lateral, datos mostrados en una cuadrícula desplazable, listos para explorar.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome abriendo un archivo .sqlite3 en Mac con navegador visual de tablas" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Sin Necesidad de Terminal</h3>
<p>Explora cada tabla, vista, índice y disparador visualmente. Desplázate por las filas como lo harías en una hoja de cálculo. Haz clic en los encabezados de columna para entender tu esquema. Todo es visual, inmediato, y no requiere ningún conocimiento de línea de comandos.</p>

<h3>Edita Datos Sin SQL</h3>
<p>¿Necesitas cambiar un valor? Haz clic en la celda y escribe. ¿Necesitas añadir una fila? Haz clic en insertar. ¿Necesitas eliminar registros? Selecciona y elimina. Para operaciones más complejas, Tome incluye un editor de consultas SQL con resaltado de sintaxis y autocompletado — pero para tareas cotidianas, rara vez lo necesitarás.</p>

<h3>Tus Datos Permanecen Locales</h3>
<p>Tome es una app nativa de macOS. Tu archivo de base de datos nunca sale de tu máquina. Sin subidas, sin procesamiento en la nube, sin preocupaciones de privacidad. Abrir, explorar, editar, cerrar — todo sucede localmente.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Consigue Tome en la Mac App Store</a></p>
`,
  },

  "edit-sqlite-database-mac": {
    slug: "edit-sqlite-database-mac",
    title: "Cómo Editar una Base de Datos SQLite en Mac",
    description:
      "Editar una base de datos SQLite en Mac normalmente significa escribir sentencias UPDATE en Terminal. Para un cambio rápido de valor, eso es mucha ceremonia.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Necesitas cambiar un solo valor en una base de datos SQLite. Quizás una bandera necesita invertirse, un nombre de usuario necesita corregirse, o datos de prueba necesitan ajustarse. La forma integrada de hacer esto en Mac es abrir Terminal, ejecutar <code>sqlite3</code>, escribir una sentencia UPDATE con la cláusula WHERE exacta para apuntar a la fila correcta, y esperar no haber cometido un error tipográfico que cambie los registros equivocados. Por un solo valor. En 2026.</p>

<h2>Por Qué Editar Desde Terminal Es Riesgoso</h2>
<p>Escribir sentencias UPDATE manualmente está bien cuando sabes exactamente lo que haces. Pero es peligrosamente fácil olvidar una cláusula WHERE y actualizar cada fila de la tabla, o escribir mal el nombre de una columna y obtener un error silencioso. No hay deshacer en la CLI de <code>sqlite3</code> — una vez que la sentencia se ejecuta, el cambio es permanente a menos que recordaras iniciar una transacción.</p>
<p>Crear tablas nuevas es igual de tedioso. Tienes que escribir toda la sentencia CREATE TABLE con nombres de columnas, tipos y restricciones — sintaxis fácil de equivocar cuando estás prototipando e iterando rápidamente.</p>
<p>Para desarrolladores que piensan en SQL, esto es manejable. Para todos los demás — y para desarrolladores que solo quieren hacer una edición rápida sin el riesgo — debería haber una mejor manera.</p>

<h2>Edita Bases de Datos SQLite Visualmente Con Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> te permite editar bases de datos SQLite en Mac de la misma forma en que editarías una hoja de cálculo. Abre la base de datos, haz clic en una celda, cambia el valor. No se requiere SQL para ediciones básicas.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Edición de celdas en línea de Tome en una base de datos SQLite en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Edición de Celdas en Línea</h3>
<p>Haz clic en cualquier celda de una tabla para editar su valor directamente. Cambia texto, números o fechas sin escribir una sentencia UPDATE. El cambio afecta exactamente la fila en la que hiciste clic — sin riesgo de que una cláusula WHERE faltante afecte otros registros.</p>

<h3>Inserta y Elimina Filas</h3>
<p>Añade filas nuevas a cualquier tabla con un solo clic. Elimina filas seleccionadas con la misma facilidad. Tome maneja el SQL de INSERT y DELETE detrás de escena para que puedas concentrarte en tus datos, no en tu sintaxis.</p>

<h3>Crea Tablas Visualmente</h3>
<p>¿Necesitas una tabla nueva? El editor visual de tablas de Tome te permite definir columnas, tipos y restricciones en un formulario. No hace falta escribir sentencias CREATE TABLE de memoria — solo completa los campos y Tome genera el SQL correcto.</p>

<h3>Editor SQL para Operaciones Complejas</h3>
<p>Cuando sí necesitas SQL — para joins, agregaciones o actualizaciones en lote — el editor de consultas de Tome está listo con resaltado de sintaxis y autocompletado para los nombres de tus tablas y columnas.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Consigue Tome en la Mac App Store</a></p>
`,
  },

  "sql-query-editor-mac-native": {
    slug: "sql-query-editor-mac-native",
    title: "Editor de Consultas SQL para Mac — Nativo y Rápido",
    description:
      "Ejecutar consultas SQL contra una base de datos SQLite en Mac no debería requerir un IDE pesado o una ventana de terminal. Un editor de consultas enfocado suele ser todo lo que necesitas.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Necesitas ejecutar una consulta SQL contra una base de datos SQLite local. Tus opciones: abrir Terminal y usar la CLI <code>sqlite3</code> sin resaltado de sintaxis ni autocompletado, o lanzar un IDE de base de datos completo que tarda diez segundos en iniciar y usa medio gigabyte de RAM. Ninguna opción encaja con la tarea — solo quieres escribir una consulta, ejecutarla, y ver los resultados.</p>

<h2>La Brecha Entre Terminal y los IDEs Completos</h2>
<p>La CLI de <code>sqlite3</code> te da ejecución de consultas en bruto pero cero comodidad para el desarrollador. Sin coloreado de sintaxis, sin autocompletado de nombres de tablas o columnas, sin cuadrícula visual de resultados. Lees la salida de la consulta como texto plano, ajustando manualmente el ancho de tu terminal para ver todas las columnas.</p>
<p>En el otro extremo, herramientas como DataGrip o DBeaver están construidas para flujos de trabajo de bases de datos empresariales — gestionando conexiones a servidores remotos, manejando migraciones, visualizando esquemas. Son potentes, pero pesadas. Para un archivo SQLite local, lanzar un IDE completo se siente como manejar un camión semirremolque a la tienda de la esquina.</p>
<p>Lo que falta es un editor SQL rápido y enfocado que abra un archivo SQLite y te permita escribir consultas con las comodidades que esperas — sin la sobrecarga de un IDE completo.</p>

<h2>El Editor de Consultas SQL de Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> incluye un editor de consultas SQL integrado diseñado específicamente para SQLite. Es parte de una app nativa de macOS, así que se abre al instante y funciona con un uso mínimo de recursos.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Editor de consultas SQL de Tome con resaltado de sintaxis en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Resaltado de Sintaxis</h3>
<p>Las palabras clave SQL, nombres de tablas, literales de cadena y números están codificados por color para facilitar la lectura. Detecta errores antes de ejecutar la consulta en lugar de interpretar un mensaje de error críptico después.</p>

<h3>Autocompletado</h3>
<p>Tome conoce tu esquema. Empieza a escribir el nombre de una tabla y sugiere autocompletados. Referencia una tabla en una cláusula FROM y los nombres de columnas aparecen en las sugerencias. No más cambiar entre el explorador de esquema y el editor de consultas para recordar cómo se llama una columna.</p>

<h3>Resultados en una Cuadrícula Nativa</h3>
<p>Los resultados de las consultas aparecen en una tabla nativa rápida y desplazable — no HTML renderizado en una vista web. Ordena columnas, redimensiónalas, y desplázate por conjuntos de resultados grandes con el rendimiento que esperas de una app de macOS.</p>

<h3>Explora y Consulta en Una Sola App</h3>
<p>Tome no es solo un editor de consultas. Explora tablas, vistas, índices y disparadores en la barra lateral. Edita datos en línea. Crea tablas nuevas visualmente. El editor SQL está ahí cuando lo necesitas, y el resto de la app se encarga de todo lo demás.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Consigue Tome en la Mac App Store</a></p>
`,
  },

  "browse-core-data-sqlite-mac": {
    slug: "browse-core-data-sqlite-mac",
    title: "Cómo Explorar Archivos SQLite de Core Data en Mac",
    description:
      "Core Data almacena sus datos en archivos SQLite, pero Apple no te da ninguna herramienta visual para inspeccionarlos. Depurar datos persistentes significa rastrear contenedores de apps y leer salida SQL en bruto.",
    date: "2026-09-06",
    readTime: "5 min de lectura",
    content: `
<p>Estás depurando un problema de Core Data en tu app de iOS o macOS. Los datos se ven mal en la interfaz, y necesitas ver qué está realmente almacenado en el archivo SQLite subyacente. El editor de modelos de Core Data de Xcode muestra tu esquema, pero no te permite explorar los datos persistidos reales. Así que sales a buscar — encuentras el contenedor de la app, localizas el archivo .sqlite, abres Terminal, y empiezas a ejecutar consultas en bruto contra tablas con nombres como ZUSER y ZPOST, donde cada columna tiene el prefijo Z y nada coincide intuitivamente con los nombres de tus entidades.</p>

<h2>Los Archivos SQLite de Core Data Son Difíciles de Inspeccionar</h2>
<p>Core Data usa SQLite como su almacén persistente predeterminado, pero añade sus propias convenciones. Los nombres de entidades reciben un prefijo Z en el nombre de la tabla. Los atributos reciben nombres de columna con prefijo Z. Las relaciones se almacenan como claves foráneas enteras en columnas que quizás no reconozcas de inmediato. Hay una tabla Z_METADATA y una tabla Z_PRIMARYKEY que Core Data gestiona internamente.</p>
<p>Nada de esto está documentado de una forma que facilite la inspección manual. Terminas ejecutando consultas como <code>SELECT * FROM ZUSER;</code> e intentando hacer coincidir las columnas con prefijo Z con tu modelo de objetos gestionado. En Terminal, sin resaltado de sintaxis ni cuadrícula visual, esto es tedioso.</p>
<p>Xcode no ayuda aquí. No hay un navegador SQLite integrado. La herramienta Instruments puede perfilar operaciones de Core Data, pero no te mostrará los datos reales de las filas. Necesitas una herramienta separada.</p>

<h2>Explora Archivos SQLite de Core Data Con Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> abre los archivos SQLite de Core Data como cualquier otra base de datos. Navega al contenedor de tu app, encuentra el archivo .sqlite, y ábrelo en Tome. Cada tabla con prefijo Z aparece en la barra lateral. Haz clic en una para ver todas las filas y sus valores en una cuadrícula desplazable.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome explorando un archivo SQLite de Core Data mostrando tablas con prefijo Z" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Ve los Datos Reales</h3>
<p>Cuando tu app muestra el valor equivocado, abre el archivo SQLite en Tome y revisa los datos realmente almacenados. ¿El valor está mal en la base de datos, o es un error de obtención/visualización? Tener acceso visual a los datos en bruto responde esta pregunta en segundos.</p>

<h3>Inspecciona Relaciones y Metadatos</h3>
<p>Explora la tabla Z_PRIMARYKEY para ver cómo Core Data rastrea los tipos de entidad y las claves primarias. Revisa las columnas de claves foráneas para verificar que las relaciones estén almacenadas correctamente. Inspecciona Z_METADATA para ver el hash de la versión del modelo.</p>

<h3>Ejecuta Consultas de Diagnóstico</h3>
<p>Usa el editor de consultas SQL de Tome para escribir joins entre las tablas con prefijo Z de Core Data, filtrar registros específicos, o buscar filas huérfanas que podrían indicar un problema de migración. El resaltado de sintaxis y el autocompletado hacen que sea más fácil que ejecutar consultas en bruto en Terminal.</p>

<h3>Seguro de Inspeccionar, Fácil de Encontrar</h3>
<p>Para el Simulador, el archivo SQLite de tu app vive en lo profundo de <code>~/Library/Developer/CoreSimulator/</code>. Para una app de macOS, revisa <code>~/Library/Containers/</code> o <code>~/Library/Application Support/</code>. Una vez localizado el archivo, arrástralo al icono del dock de Tome y empieza a explorar.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Consigue Tome en la Mac App Store</a></p>
`,
  },

  "sqlite-viewer-mac-document-based": {
    slug: "sqlite-viewer-mac-document-based",
    title: "Visor SQLite para Mac — Abre Varias Bases de Datos en Paralelo",
    description:
      "Comparar datos entre dos bases de datos SQLite normalmente significa cambiar entre pestañas o ejecutar dos instancias de tu herramienta de base de datos. Hay un enfoque más sencillo.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Estás migrando datos de una base de datos SQLite a otra y necesitas verificar los resultados. O estás comparando una base de datos de staging con producción. O tienes dos versiones de la base de datos de una app y necesitas detectar qué cambió. En cada caso, necesitas mirar dos bases de datos simultáneamente — y la mayoría de las herramientas SQLite hacen esto más difícil de lo que debería ser.</p>

<h2>El Malabarismo Con Herramientas de Una Sola Base de Datos</h2>
<p>La mayoría de los navegadores SQLite están diseñados en torno a una sola conexión de base de datos a la vez. Para comparar dos bases de datos, o abres manualmente dos ventanas de aplicación separadas (si la herramienta siquiera lo soporta), o cambias de un lado a otro entre pestañas intentando retener valores de columnas en tu memoria. Algunas herramientas requieren que cierres una base de datos antes de abrir otra.</p>
<p>El enfoque de Terminal es aún peor. Necesitarías dos ventanas de terminal, cada una ejecutando <code>sqlite3</code> contra un archivo diferente, tratando de comparar la salida una junto a la otra en texto plano. Funciona en teoría pero se desmorona con cualquier volumen real de datos.</p>
<p>Esta limitación existe porque la mayoría de las herramientas de bases de datos no fueron diseñadas como aplicaciones basadas en documentos. Fueron diseñadas en torno a un gestor de conexiones — elige una base de datos, trabaja con ella, desconéctate, elige otra. Eso está bien para bases de datos de servidores remotos, pero es fricción innecesaria para archivos SQLite locales.</p>

<h2>Tome: Un Visor SQLite Basado en Documentos</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> trata cada base de datos SQLite como un documento — de la misma forma que TextEdit trata los archivos de texto o Preview trata los PDF. Abre una base de datos y obtiene su propia ventana. Abre otra y también obtiene la suya. Organízalas una junto a otra, o usa las pestañas nativas de macOS para agruparlas.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome con varias bases de datos SQLite abiertas en paralelo en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Compara Bases de Datos Visualmente</h3>
<p>Abre tus bases de datos de origen y destino en dos ventanas. Colócalas una junto a otra usando Split View de macOS o arrastrando ventanas. Explora la misma tabla en ambas para comparar recuentos de filas, valores de columnas, o diferencias de esquema. Sin cambiar de pestaña, sin memorizar valores.</p>

<h3>Trabaja en Varios Proyectos</h3>
<p>Mantén una base de datos de referencia abierta mientras desarrollas contra otra. Ten la base de datos de producción de tu app abierta junto a una base de datos de prueba. Abre el archivo de base de datos de un cliente mientras el tuyo sigue cargado. Tome no limita la cantidad de bases de datos abiertas simultáneamente.</p>

<h3>Conjunto Completo de Funciones en Cada Ventana</h3>
<p>Cada ventana de base de datos tiene la interfaz completa de Tome — barra lateral con tablas, vistas, índices y disparadores; cuadrícula de datos con edición en línea; editor de consultas SQL con resaltado de sintaxis y autocompletado. No existe el concepto de base de datos "primaria" y "secundaria". Cada base de datos abierta es completamente funcional.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Consigue Tome en la Mac App Store</a></p>
`,
  },

  "inspect-app-database-mac": {
    slug: "inspect-app-database-mac",
    title: "Cómo Inspeccionar la Base de Datos de una App en Mac",
    description:
      "Las apps en tu Mac almacenan datos en archivos SQLite ocultos enterrados en carpetas Library. Inspeccionar lo que una app realmente guardó significa navegar rutas de contenedores y decodificar salida de bases de datos en bruto.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Cada app en tu Mac que persiste datos localmente — notas, marcadores, mensajes, registros de salud, listas de tareas — probablemente los almacena en una base de datos SQLite guardada dentro de <code>~/Library/</code> o <code>~/Library/Containers/</code>. Quizás quieras ver qué datos recopiló una app. Quizás necesites recuperar algo que fue eliminado de la interfaz. Quizás estés depurando tu propia app y necesites verificar qué se escribió realmente en disco. Sea cual sea la razón, macOS no te da ninguna forma integrada de inspeccionar estos archivos visualmente.</p>

<h2>Encontrar y Abrir Bases de Datos de Apps Es Tedioso</h2>
<p>Primero, necesitas localizar el archivo. Las apps en sandbox almacenan sus datos en <code>~/Library/Containers/com.developer.appname/Data/</code>, mientras que las apps sin sandbox pueden usar <code>~/Library/Application Support/</code>. La carpeta Library está oculta por defecto — necesitas usar "Ir a la carpeta" de Finder o navegar mediante Terminal. Una vez que encuentras el archivo .sqlite o .db, te quedas atascado usando <code>sqlite3</code> en Terminal, leyendo la salida de consultas en bruto sin estructura visual.</p>
<p>Para apps de iOS que corren en el Simulador, la ruta es aún más profunda: <code>~/Library/Developer/CoreSimulator/Devices/</code> seguido de un UUID, y luego otra ruta anidada hacia la carpeta Documents o Library de la app. Encontrar la base de datos correcta entre docenas de carpetas de dispositivos simulados es una búsqueda del tesoro.</p>

<h2>Inspecciona Cualquier Base de Datos de App Con Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> te permite abrir cualquier archivo de base de datos SQLite y ver de inmediato su contenido — tablas, vistas, índices, disparadores y datos de filas — en una interfaz nativa de macOS. Una vez que hayas localizado el archivo, solo arrástralo a Tome o usa Archivo → Abrir.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome inspeccionando la base de datos SQLite de una app en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Entiende Qué Almacena una App</h3>
<p>Explora cada tabla para ver exactamente qué datos persiste la app. Los nombres de columnas revelan el diseño del esquema. Los datos de las filas muestran los valores reales. Sin conjeturas, sin comandos de Terminal — solo haz clic entre las tablas de la barra lateral y desplázate por su contenido.</p>

<h3>Depura la Capa de Datos de Tu Propia App</h3>
<p>Si estás desarrollando una app de macOS o iOS que usa SQLite o Core Data, Tome te permite verificar que tus escrituras se realizaron correctamente. Comprueba que las relaciones estén intactas, inspecciona columnas autogeneradas, y ejecuta consultas de diagnóstico con resaltado de sintaxis y autocompletado.</p>

<h3>Recupera o Exporta Datos</h3>
<p>¿Necesitas un registro que fue eliminado de la interfaz de una app pero que podría seguir existiendo en la base de datos? Abre el archivo en Tome y busca en la tabla correspondiente. Si los datos están ahí, puedes leerlos directamente o usar una consulta SQL para extraer exactamente lo que necesitas.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Consigue Tome en la Mac App Store</a></p>
`,
  },

  "sqlite-for-ios-developers-mac": {
    slug: "sqlite-for-ios-developers-mac",
    title: "Navegador SQLite para Desarrolladores de iOS en Mac",
    description:
      "El desarrollo de iOS implica revisar constantemente qué escribió tu app en su base de datos local. Xcode no tiene un visor SQLite integrado, dejándote armar un flujo de trabajo con Terminal y herramientas de terceros.",
    date: "2026-09-06",
    readTime: "5 min de lectura",
    content: `
<p>Estás construyendo una app de iOS que usa Core Data o SQLite en bruto para persistencia. Algo se ve mal en la interfaz — quizás una lista no se está llenando, o un valor parece desactualizado. Necesitas revisar la base de datos. Xcode ofrece un editor de modelos de datos y un perfilador Instruments, pero ninguno te muestra las filas reales dentro del archivo SQLite. Así que abres Terminal, rastreas la ruta del contenedor del Simulador, y empiezas a ejecutar consultas <code>SELECT *</code> contra tablas con prefijo Z. Este flujo de trabajo rompe tu concentración cada vez.</p>

<h2>El Problema de Base de Datos del Desarrollador de iOS</h2>
<p>Cada ejecución del Simulador de iOS almacena sus datos bajo <code>~/Library/Developer/CoreSimulator/Devices/</code>, anidado dentro de un directorio con nombre UUID. La ruta cambia cuando reinicias el simulador o cambias de dispositivo. Incluso si guardas la ubicación como marcador, la próxima actualización de Xcode podría reorganizar todo. Encontrar el archivo .sqlite correcto es la mitad de la batalla.</p>
<p>Una vez que lo localizas, la CLI <code>sqlite3</code> te da salida de texto en bruto. Los nombres de tablas y columnas con prefijo Z de Core Data hacen que las consultas manuales sean confusas. No hay autocompletado para nombres de columnas, ninguna cuadrícula visual para escanear filas, y ninguna forma de editar rápidamente un valor de prueba sin escribir una sentencia UPDATE completa. La mayoría de los desarrolladores desperdician minutos en este baile múltiples veces al día.</p>
<p>Herramientas de terceros como DB Browser for SQLite funcionan pero se sienten ajenas en macOS — interfaces basadas en Qt con atajos de teclado incorrectos y cuadros de diálogo de archivos no nativos. DBeaver y DataGrip son IDEs de bases de datos completos, excesivos para inspeccionar un archivo SQLite local.</p>

<h2>Tome: Un Navegador SQLite Construido para Tu Flujo de Trabajo en Mac</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> es un navegador SQLite nativo de macOS que encaja naturalmente en el flujo de trabajo de un desarrollador de iOS. Abre el archivo .sqlite del Simulador y ve instantáneamente cada tabla, vista e índice. Explora las tablas con prefijo Z de Core Data en una cuadrícula desplazable. Edita valores en línea para configurar escenarios de prueba sin escribir SQL.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome explorando la base de datos SQLite de una app de iOS en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Inspecciona Almacenes de Core Data Visualmente</h3>
<p>Las tablas SQLite de Core Data usan nombres con prefijo Z que son difíciles de interpretar en Terminal. En Tome, cada tabla aparece en la barra lateral — haz clic en una y ve todas las filas con columnas correctamente alineadas. Relaciona las tablas ZUSER y ZPOST con tu modelo de objetos gestionado de un vistazo.</p>

<h3>Edita Datos de Prueba Sin Reconstruir</h3>
<p>¿Necesitas cambiar un valor para reproducir un error? Haz clic en la celda en Tome y escribe el nuevo valor. No hace falta escribir una sentencia UPDATE ni volver a ejecutar la lógica de siembra de tu app. Inserta filas para probar casos extremos o elimina registros para simular un estado limpio.</p>

<h3>Ejecuta Consultas de Diagnóstico</h3>
<p>El editor SQL de Tome con resaltado de sintaxis y autocompletado te permite escribir joins, agregaciones y consultas filtradas contra los datos de tu app. Verifica relaciones, cuenta registros, o busca valores específicos — todo sin salir de la app.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Consigue Tome en la Mac App Store</a></p>
`,
  },

  "view-firefox-history-sqlite-mac": {
    slug: "view-firefox-history-sqlite-mac",
    title: "Cómo Ver el Historial de Firefox (SQLite) en Mac",
    description:
      "Firefox almacena tu historial de navegación en una base de datos SQLite llamada places.sqlite. Verlo fuera del navegador significa lidiar con archivos bloqueados y salida SQL en bruto.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Firefox guarda todo tu historial de navegación, marcadores y metadatos de sitios en una base de datos SQLite llamada <code>places.sqlite</code>. Quizás quieras buscar en historial antiguo que la búsqueda integrada de Firefox no muestra bien, exportar tus datos de navegación, o analizar tus hábitos. Pero abrir este archivo no es sencillo — Firefox lo bloquea mientras se ejecuta, y una vez que obtienes una copia, macOS no tiene ninguna forma integrada de verlo visualmente.</p>

<h2>Localizar y Copiar la Base de Datos</h2>
<p>La carpeta de perfil de Firefox vive en <code>~/Library/Application Support/Firefox/Profiles/xxxxxxxx.default-release/</code>. Dentro, encontrarás <code>places.sqlite</code> junto a otras bases de datos como <code>cookies.sqlite</code> y <code>formhistory.sqlite</code>. El truco: Firefox bloquea estos archivos mientras el navegador está en ejecución. Necesitas cerrar Firefox primero o copiar el archivo a otra ubicación mientras se ejecuta (aunque la copia puede ser inconsistente si Firefox está escribiendo en ese momento).</p>
<p>Una vez que tienes el archivo, el enfoque de Terminal significa ejecutar <code>sqlite3 places.sqlite</code> y escribir consultas contra tablas como <code>moz_places</code>, <code>moz_historyvisits</code> y <code>moz_bookmarks</code>. El esquema no es intuitivo — las marcas de tiempo de las visitas se almacenan en microsegundos desde el epoch, las URLs están en una tabla mientras que los metadatos de las visitas están en otra, y obtener una lista de historial legible requiere un JOIN. Esto es manejable para alguien fluido en SQL pero poco razonable para la mayoría de los usuarios.</p>

<h2>Explora el Historial de Firefox Visualmente Con Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> abre <code>places.sqlite</code> como cualquier otro archivo de base de datos. Arrastra el archivo copiado a Tome y ve de inmediato cada tabla — <code>moz_places</code>, <code>moz_historyvisits</code>, <code>moz_bookmarks</code>, y más — listadas en la barra lateral. Haz clic en cualquier tabla para explorar su contenido en una cuadrícula desplazable.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome viendo la base de datos de historial places.sqlite de Firefox en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Busca y Filtra Tu Historial</h3>
<p>Usa el editor de consultas SQL de Tome para escribir búsquedas específicas. Encuentra cada visita a un dominio en particular, filtra por rango de fechas usando las marcas de tiempo en microsegundos, o cuenta cuántas veces visitaste un sitio en concreto. El resaltado de sintaxis y el autocompletado hacen que escribir estas consultas sea rápido.</p>

<h3>Explora Marcadores y Metadatos</h3>
<p>La tabla <code>moz_bookmarks</code> almacena la estructura de árbol de tus marcadores con relaciones padre-hijo. Explórala en Tome para ver tu jerarquía completa de marcadores, incluyendo la estructura de carpetas y el orden de clasificación — detalles que el gestor de marcadores de Firefox a veces oculta.</p>

<h3>Inspecciona Otras Bases de Datos de Firefox</h3>
<p>La misma carpeta de perfil contiene <code>cookies.sqlite</code>, <code>formhistory.sqlite</code> y <code>content-prefs.sqlite</code>. Cada una es una base de datos SQLite estándar que Tome puede abrir. Revisa qué cookies estableció un sitio, examina entradas de formularios guardadas, o inspecciona preferencias por sitio — todo visualmente, sin escribir consultas en bruto en Terminal.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Consigue Tome en la Mac App Store</a></p>
`,
  },

  "sqlite-vs-realm-browser-mac": {
    slug: "sqlite-vs-realm-browser-mac",
    title: "SQLite vs Realm Browser en Mac",
    description:
      "Las apps móviles usan SQLite o Realm para el almacenamiento local, pero inspeccionar cualquiera de los dos en Mac requiere una herramienta diferente. Elegir el navegador correcto depende de qué formato use realmente tu app.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Estás desarrollando una app móvil y necesitas inspeccionar su base de datos local. Si usas Realm, recurres a Realm Studio. Si usas SQLite (directamente o a través de Core Data, GRDB o Room), necesitas una herramienta completamente diferente. Los dos formatos son fundamentalmente distintos, y las herramientas de exploración no se superponen. Entender qué ofrece cada uno te ayuda a elegir el correcto — o darte cuenta de que necesitas ambos.</p>

<h2>Realm y SQLite Cubren Necesidades Diferentes</h2>
<p>Realm es una base de datos de objetos — almacena datos como objetos con propiedades y relaciones, no como filas en tablas. Realm Studio te permite explorar estos objetos visualmente, ver relaciones como enlaces, y editar propiedades en línea. Está diseñado específicamente para archivos Realm y no hace nada más.</p>
<p>SQLite es una base de datos relacional almacenada como un solo archivo. Usa tablas SQL estándar con filas y columnas. Core Data en iOS, Room en Android, y muchísimos otros frameworks usan SQLite como su backend de almacenamiento. El ecosistema es enorme, pero las herramientas de inspección en Mac históricamente han sido basadas en Terminal o ports multiplataforma que se sienten fuera de lugar.</p>
<p>Si tu proyecto usa Realm, Realm Studio es tu única opción real — ningún navegador de bases de datos genérico puede abrir archivos .realm. Pero si tu proyecto usa SQLite en cualquier forma, tienes opciones. La pregunta es si esas opciones son realmente buenas en macOS.</p>

<h2>Un Navegador SQLite Nativo para la Otra Mitad</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> es un navegador SQLite nativo de macOS que iguala el enfoque y el pulido de Realm Studio pero para bases de datos SQLite. Donde Realm Studio está diseñado específicamente para archivos .realm, Tome está diseñado específicamente para archivos .sqlite, .db y .sqlite3 — y nada más.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome navegador SQLite nativo en Mac comparado con Realm Studio" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>La Misma Filosofía Enfocada</h3>
<p>Realm Studio no intenta ser un cliente de PostgreSQL. De manera similar, Tome no intenta conectarse a MySQL o MongoDB. Al enfocarse exclusivamente en SQLite, cada función — edición en línea, creación de tablas, autocompletado de consultas — está optimizada para el formato con el que realmente trabajas.</p>

<h3>Explora Tablas, Edita en Línea, Consulta con Comodidad</h3>
<p>Abre una base de datos SQLite y explora tablas, vistas, índices y disparadores en la barra lateral. Edita valores de celdas haciendo clic en ellas. Inserta o elimina filas sin escribir SQL. Cuando necesitas consultas, el editor integrado ofrece resaltado de sintaxis y autocompletado para tu esquema.</p>

<h3>Cuando Necesitas Ambos</h3>
<p>Algunos proyectos usan Realm para un componente y SQLite para otro. Mantén Realm Studio y Tome uno junto al otro — cada uno maneja su formato de forma nativa, y ninguno desperdicia recursos intentando soportar formatos para los que no fue diseñado.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Consigue Tome en la Mac App Store</a></p>
`,
  },

  "mac-sqlite-command-line-vs-gui": {
    slug: "mac-sqlite-command-line-vs-gui",
    title: "SQLite en Mac: Línea de Comandos vs GUI — Cuándo Usar Cada Una",
    description:
      "La CLI de sqlite3 viene con todos los Mac y maneja consultas rápidas, pero falla al explorar, editar y entender esquemas desconocidos. Saber cuándo cambiar de herramienta ahorra tiempo.",
    date: "2026-09-06",
    readTime: "5 min de lectura",
    content: `
<p>Todos los Mac vienen con la herramienta de línea de comandos <code>sqlite3</code>. Para desarrolladores cómodos en Terminal, es una forma confiable de ejecutar consultas rápidas. Pero hay un punto donde la CLI deja de ser eficiente y una GUI se vuelve más rápida — el truco está en saber dónde está esa línea. Usar la herramienta equivocada para la tarea desperdicia tiempo en ambas direcciones.</p>

<h2>Cuándo Gana la Línea de Comandos</h2>
<p>La CLI de <code>sqlite3</code> sobresale en operaciones con scripts. Si estás escribiendo un script de shell que necesita extraer un valor de una base de datos, la CLI canaliza directamente hacia otros comandos. Las consultas de una línea son rápidas: <code>sqlite3 app.db "SELECT count(*) FROM users;"</code> te da una respuesta sin lanzar nada. Para automatización, respaldos con <code>.dump</code>, y revisiones rápidas en una sesión de Terminal ya abierta, la CLI es la herramienta correcta.</p>
<p>También está disponible en todas partes. No requiere instalación, ninguna app que descargar. Si estás conectado por SSH a una máquina remota o trabajando en un pipeline de CI, la CLI es todo lo que tienes — y funciona bien para consultas específicas donde ya conoces el esquema.</p>

<h2>Cuándo la CLI Te Falla</h2>
<p>La CLI se desmorona en la exploración. Cuando abres una base de datos desconocida y necesitas entender su esquema, ejecutar <code>.tables</code> y <code>.schema tablename</code> repetidamente es lento. Las tablas anchas se ajustan en la terminal. No hay desplazamiento por los resultados — la salida simplemente pasa volando. Editar datos significa escribir sentencias UPDATE con cláusulas WHERE precisas, arriesgándose a actualizaciones masivas accidentales si cometes un error tipográfico.</p>
<p>Para cualquiera que no sea desarrollador — analistas de datos, diseñadores, testers de QA — la CLI es efectivamente inutilizable. E incluso para desarrolladores, explorar más de unas pocas tablas visualmente es simplemente más rápido en una GUI.</p>

<h2>Tome: El Lado GUI de la Ecuación</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> cumple el papel de la GUI como navegador SQLite nativo de macOS. No es un reemplazo de la CLI — es el complemento. Usa la CLI para scripts y revisiones rápidas; usa Tome para explorar, editar y entender bases de datos visualmente.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Navegador SQLite con GUI de Tome comparado con la línea de comandos en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Explora Esquemas Desconocidos</h3>
<p>Abre cualquier base de datos y ve cada tabla, vista, índice y disparador en la barra lateral. Haz clic entre las tablas para entender el esquema, escanea datos de muestra, y descubre relaciones — todo sin escribir un solo comando.</p>

<h3>Edita con Seguridad</h3>
<p>Haz clic en una celda para cambiar su valor. Sin sentencia UPDATE, sin cláusula WHERE que equivocar. Inserta y elimina filas con un clic. El riesgo de cambios masivos accidentales desaparece cuando cada edición apunta exactamente a la celda en la que hiciste clic.</p>

<h3>Consulta con Asistencia</h3>
<p>Cuando sí escribes SQL, el editor de consultas de Tome ofrece resaltado de sintaxis y autocompletado. Es el punto medio entre la CLI desnuda y un IDE de base de datos completo — justo la asistencia suficiente para escribir consultas más rápido sin la sobrecarga de herramientas empresariales.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Consigue Tome en la Mac App Store</a></p>
`,
  },

  "edit-sqlite-without-sql-mac": {
    slug: "edit-sqlite-without-sql-mac",
    title: "Cómo Editar SQLite Sin Escribir SQL en Mac",
    description:
      "No todo el que necesita cambiar un valor en una base de datos SQLite sabe SQL. Diseñadores, testers de QA y gerentes de producto no deberían necesitar aprender sintaxis UPDATE para una corrección rápida de datos.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Un tester de QA necesita cambiar el rol de un usuario para reproducir un error de permisos. Un diseñador quiere cambiar texto de marcador de posición en la base de datos de un prototipo. Un gerente de producto necesita actualizar un valor de configuración para probar una feature flag. Ninguno de ellos debería tener que aprender sintaxis SQL para hacer un cambio simple de datos — pero en Mac, la herramienta predeterminada para editar bases de datos SQLite es la línea de comandos <code>sqlite3</code>, donde incluso la edición de una sola celda requiere escribir <code>UPDATE tablename SET column = 'value' WHERE id = 42;</code>.</p>

<h2>SQL Es una Barrera para los No Desarrolladores</h2>
<p>SQL no es difícil de aprender en teoría, pero acertarlo bajo presión es otra cuestión. Olvidar la cláusula WHERE en una sentencia UPDATE cambia todas las filas de la tabla. Usar las comillas equivocadas causa un error de sintaxis. Escribir mal el nombre de una columna produce un mensaje de error confuso. Para alguien que solo necesita cambiar un booleano o modificar una cadena, esta ceremonia es desproporcionada para la tarea.</p>
<p>Incluso los desarrolladores a menudo prefieren no escribir SQL para ediciones triviales. Abrir Terminal, navegar al archivo, lanzar <code>sqlite3</code>, recordar el nombre exacto de la tabla y la columna, y escribir una sentencia sintácticamente correcta — todo para cambiar una celda — es lento comparado con simplemente hacer clic y escribir.</p>

<h2>Edita SQLite Como una Hoja de Cálculo Con Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> permite que cualquiera edite una base de datos SQLite en Mac sin escribir una sola línea de SQL. Abre el archivo, encuentra la tabla, haz clic en la celda, escribe el nuevo valor. Funciona como editar una hoja de cálculo — porque para cambios simples, esa es exactamente la interfaz que quieres.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome editando datos SQLite sin SQL en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Haz Clic para Editar Cualquier Celda</h3>
<p>Cada celda en la cuadrícula de datos de Tome es editable. Haz clic en ella, cambia el valor, y la actualización apunta exactamente a esa fila y columna. Sin cláusula WHERE que olvidar, sin riesgo de cambios masivos, sin necesidad de conocimientos de SQL.</p>

<h3>Inserta y Elimina Sin Comandos</h3>
<p>Añade una fila nueva haciendo clic en el botón de insertar. Elimina filas seleccionándolas y borrándolas. Tome maneja el SQL de INSERT y DELETE detrás de escena, así interactúas con tus datos usando acciones familiares en lugar de comandos de base de datos.</p>

<h3>Crea Tablas Visualmente</h3>
<p>¿Necesitas una tabla nueva? El editor visual de tablas de Tome te permite definir nombres de columnas, tipos y restricciones en un formulario — sin necesidad de escribir sintaxis de <code>CREATE TABLE</code> de memoria. Completa los campos y la tabla se crea correctamente.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Consigue Tome en la Mac App Store</a></p>
`,
  },

  "sqlite-database-viewer-apple-silicon": {
    slug: "sqlite-database-viewer-apple-silicon",
    title: "Visor de Bases de Datos SQLite Optimizado para Apple Silicon",
    description:
      "Muchas herramientas de bases de datos todavía se ejecutan a través de Rosetta en Mac con Apple Silicon, desperdiciando batería y rendimiento. Una versión nativa ARM marca una diferencia notable en una app que mantienes abierta todo el día.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Compraste un Mac de la serie M por su rendimiento y duración de batería. Luego instalas una herramienta de base de datos y notas que se ejecuta a través de Rosetta — la capa de traducción de Intel que existe por compatibilidad, no por rendimiento. La app usa más memoria, consume más batería, y se abre más lento de lo que debería. Para una herramienta que quizás mantengas abierta junto a Xcode o VS Code todo el día, esa sobrecarga se acumula.</p>

<h2>El Impuesto de Rosetta en las Herramientas de Bases de Datos</h2>
<p>Muchos navegadores de bases de datos populares todavía se distribuyen como binarios exclusivos de Intel o están construidos con Electron, que solo recientemente obtuvo soporte confiable para Apple Silicon. DB Browser for SQLite, construido con Qt, ha tenido soporte ARM inconsistente entre versiones. DBeaver corre sobre Java, añadiendo otra capa de abstracción sobre el hardware. Incluso las herramientas que técnicamente soportan Apple Silicon a menudo empaquetan el motor Chromium de Electron, que consume significativamente más recursos de los que una app nativa necesita.</p>
<p>Revisa el Monitor de Actividad y mira la columna "Tipo". Si tu herramienta de base de datos muestra "Intel" en un Mac de la serie M, se está ejecutando a través de Rosetta. Eso significa arranque más lento, mayor uso de memoria, y menor duración de batería comparado con un binario ARM nativo. Para una utilidad ligera como un visor SQLite, la brecha de rendimiento es especialmente notable porque la app en sí debería ser rápida y pequeña.</p>

<h2>Tome: Apple Silicon Nativo Desde el Primer Día</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> está construido con Swift y AppKit como un binario universal que se ejecuta nativamente tanto en Mac con Apple Silicon como con Intel. En un Mac de la serie M, se abre al instante, usa memoria mínima, y no tiene ninguna sobrecarga de Rosetta. Es el tipo de app para el que Apple Silicon fue diseñado.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Visor SQLite Tome ejecutándose nativamente en Mac con Apple Silicon" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Inicio Instantáneo, Memoria Baja</h3>
<p>Sin arranque de JVM, sin inicialización del motor Chromium, sin traducción de Rosetta. Tome se abre en menos de un segundo y se mantiene ligero — usando típicamente una fracción de la memoria que consumen las alternativas basadas en Electron. Mantenlo abierto todo el día sin afectar tu otro trabajo.</p>

<h3>Desplazamiento Fluido en Tablas Grandes</h3>
<p>El renderizado nativo de AppKit significa que Tome se desplaza por miles de filas con la misma suavidad que esperas de Finder o Numbers. Sin fotogramas perdidos, sin retraso al saltar al final de un conjunto de resultados grande. El chip de la serie M maneja la interfaz nativa sin esfuerzo.</p>

<h3>Conjunto Completo de Funciones, Huella Mínima</h3>
<p>Explora tablas, vistas, índices y disparadores. Edita datos en línea. Ejecuta consultas SQL con resaltado de sintaxis y autocompletado. Crea y modifica tablas visualmente. Todo esto en una app que respeta los recursos de tu Mac porque fue construida específicamente para la plataforma.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Consigue Tome en la Mac App Store</a></p>
`,
  },

  "open-whatsapp-backup-sqlite-mac": {
    slug: "open-whatsapp-backup-sqlite-mac",
    title: "Cómo Abrir un Respaldo de WhatsApp SQLite en Mac",
    description:
      "WhatsApp almacena el historial de chats en una base de datos SQLite. Ver esos mensajes fuera de la app — por motivos de archivo, legales o personales — requiere extraer y abrir el archivo de base de datos en tu Mac.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>WhatsApp almacena tus mensajes de chat, referencias de medios y datos de contactos en una base de datos SQLite. Ya sea que hayas extraído un respaldo de un iPhone usando una herramienta como iMazing, recuperado un archivo <code>ChatStorage.sqlite</code> de un respaldo de iTunes, o extraído un <code>msgstore.db</code> de un respaldo de Android, ahora tienes un archivo de base de datos en tu Mac. Hacer doble clic en él no hace nada útil. Necesitas una forma de abrirlo y leer las conversaciones dentro.</p>

<h2>Por Qué Esto Es Más Difícil de lo Que Debería Ser</h2>
<p>Las bases de datos SQLite de WhatsApp usan su propio esquema. Los mensajes viven en tablas como <code>ZWAMESSAGE</code> (iOS) o <code>messages</code> (Android), con columnas para remitente, marca de tiempo, contenido de texto, tipo de medio y estado. Las marcas de tiempo se almacenan en formatos no estándar — iOS usa el epoch de Core Data (segundos desde el 1 de enero de 2001), mientras que Android usa milisegundos Unix. Los contactos se referencian mediante cadenas JID, no nombres legibles.</p>
<p>Abrir el archivo en Terminal con <code>sqlite3</code> te da acceso en bruto, pero leer mensajes de chat como filas de texto sin formato con marcas de tiempo codificadas e identificadores JID es prácticamente inútil para la mayoría de las personas. Necesitas una interfaz visual para darle sentido a los datos.</p>
<p>Los respaldos de Android añaden una complicación más: el archivo <code>msgstore.db.crypt15</code> está encriptado. Necesitas desencriptarlo primero usando tu archivo de clave antes de que cualquier navegador SQLite pueda abrirlo. Una vez desencriptado, sin embargo, es una base de datos SQLite estándar.</p>

<h2>Explora Datos de WhatsApp Con Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> abre los archivos de base de datos SQLite de WhatsApp como cualquier otra base de datos. Arrastra el <code>ChatStorage.sqlite</code> extraído o el <code>msgstore.db</code> desencriptado a Tome y ve cada tabla en la barra lateral. Haz clic en la tabla de mensajes para explorar tu historial de chats en una cuadrícula desplazable.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome abriendo una base de datos SQLite de respaldo de WhatsApp en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Lee Mensajes en Contexto</h3>
<p>Explora la tabla de mensajes para ver contenido de texto, identificadores de remitente, marcas de tiempo y referencias de medios. Ordena por fecha para leer conversaciones cronológicamente. Usa el editor SQL de Tome para filtrar mensajes por contacto o rango de fechas.</p>

<h3>Busca en Todas las Conversaciones</h3>
<p>¿Necesitas encontrar un mensaje específico? Escribe una consulta rápida en el editor SQL de Tome con autocompletado: <code>SELECT * FROM ZWAMESSAGE WHERE ZTEXT LIKE '%palabraclave%';</code> Los resultados aparecen en una cuadrícula nativa que puedes desplazar y ordenar — mucho más práctico que grep en Terminal.</p>

<h3>Tus Datos Permanecen en Tu Mac</h3>
<p>A diferencia de los visores SQLite basados en web que requieren subir tu base de datos, Tome se ejecuta completamente en local. Tus mensajes de WhatsApp nunca salen de tu máquina. Abrir, explorar, consultar y cerrar — todo sucede en tu Mac.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Consigue Tome en la Mac App Store</a></p>
`,
  },

  "sqlite-query-editor-autocomplete-mac": {
    slug: "sqlite-query-editor-autocomplete-mac",
    title: "Editor de Consultas SQLite con Autocompletado en Mac",
    description:
      "Escribir consultas SQL contra una base de datos SQLite sin autocompletado significa cambiar constantemente entre la vista de esquema y el editor para revisar nombres de tablas y columnas.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Estás escribiendo una consulta SELECT contra una base de datos SQLite con treinta tablas. Recuerdas que la tabla se llama algo como <code>user_sessions</code> o <code>session_logs</code> — pero ¿cuál es? Y la columna de marca de tiempo — ¿es <code>created_at</code>, <code>timestamp</code>, o <code>date_created</code>? En la CLI de <code>sqlite3</code>, cambiarías al modo <code>.schema</code>, buscarías la tabla, volverías a escribir tu consulta, y repetirías para cada referencia de columna. Este cambio de contexto es donde realmente se va la mayor parte de tu tiempo escribiendo consultas.</p>

<h2>El Costo de No Tener Autocompletado</h2>
<p>La CLI de <code>sqlite3</code> no tiene autocompletado para nombres de tablas o columnas. Escribes de memoria, y si escribes mal algo, obtienes un error después de ejecutar — no mientras escribes. Para bases de datos simples con pocas tablas, esto es manejable. Para bases de datos con docenas de tablas y cientos de columnas, es un impuesto constante a tu productividad.</p>
<p>Algunos desarrolladores copian esquemas de tablas a un archivo de notas y los consultan mientras escriben consultas. Otros ejecutan <code>.tables</code> y <code>PRAGMA table_info(tablename);</code> repetidamente. Ambos enfoques son soluciones alternativas para una función faltante — el editor de consultas debería conocer tu esquema y ayudarte a escribir SQL correcto.</p>
<p>Los IDEs de bases de datos completos como DataGrip ofrecen excelente autocompletado, pero son costosos, pesados, y diseñados para flujos de trabajo empresariales. Para un archivo SQLite local, no deberías necesitar un IDE basado en suscripción solo para obtener sugerencias de nombres de tablas.</p>

<h2>El Editor de Consultas con Autocompletado de Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> incluye un editor de consultas SQL que conoce el esquema de tu base de datos. Empieza a escribir el nombre de una tabla y sugiere coincidencias. Referencia una tabla y los nombres de columnas aparecen como autocompletados. No es un IDE completo — es exactamente el nivel de asistencia que hace que escribir consultas SQLite sea rápido sin añadir complejidad.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Editor de consultas SQL de Tome con autocompletado en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Sugerencias Conscientes del Esquema</h3>
<p>Tome lee el esquema de tu base de datos cuando abres el archivo. Los nombres de tablas, nombres de columnas y palabras clave de SQLite aparecen todos como sugerencias mientras escribes. No hace falta memorizar nombres de columnas ni cambiar a un explorador de esquema a mitad de consulta.</p>

<h3>Resaltado de Sintaxis</h3>
<p>Las palabras clave SQL, literales de cadena, números e identificadores están codificados por color. Detecta una comilla faltante o una palabra clave mal escrita antes de ejecutar la consulta, no después de leer un mensaje de error.</p>

<h3>Resultados en una Cuadrícula Nativa</h3>
<p>Los resultados de las consultas aparecen al instante en una vista de tabla nativa de macOS. Ordena columnas, redimensiónalas, y desplázate por conjuntos de resultados grandes sin problemas. Copia resultados o selecciona celdas específicas — la cuadrícula se comporta como una vista de datos de Mac apropiada, no como una tabla HTML renderizada en una vista web.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Consigue Tome en la Mac App Store</a></p>
`,
  },

  "view-chrome-cookies-sqlite-mac": {
    slug: "view-chrome-cookies-sqlite-mac",
    title: "Cómo Ver las Cookies de Chrome (SQLite) en Mac",
    description:
      "Chrome almacena las cookies en una base de datos SQLite en tu Mac. Verlas mediante DevTools funciona para un sitio a la vez, pero inspeccionar la base de datos completa de cookies requiere un enfoque diferente.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Chrome almacena todas las cookies en un archivo de base de datos SQLite llamado <code>Cookies</code> (sin extensión) ubicado en <code>~/Library/Application Support/Google/Chrome/Default/Cookies</code>. Puedes ver las cookies de un solo sitio a través de Chrome DevTools, pero si quieres buscar en todas las cookies, analizar patrones de rastreo, o auditar qué datos han almacenado los sitios, necesitas abrir el archivo de base de datos real. Chrome no ofrece una forma de explorar visualmente su almacén completo de cookies.</p>

<h2>La Limitación de DevTools</h2>
<p>La pestaña Application de DevTools de Chrome muestra las cookies por dominio para la página actualmente cargada. Esto funciona para depurar las cookies de un sitio específico pero se queda corto cuando quieres ver todas las cookies de todos los sitios, buscar un nombre de cookie específico usado por múltiples dominios, o contar cuántas cookies de rastreo están presentes. Tendrías que visitar cada sitio individualmente e inspeccionar cada uno — no es práctico.</p>
<p>El enfoque de base de datos te da el panorama completo. Pero abrir el archivo <code>Cookies</code> de Chrome con <code>sqlite3</code> en Terminal significa leer filas de claves de host, nombres de cookies, valores, marcas de tiempo de expiración (en el formato epoch de Chrome — microsegundos desde el 1 de enero de 1601), y valores encriptados como texto en bruto. Chrome encripta los valores de las cookies en macOS, así que la columna <code>encrypted_value</code> contiene blobs binarios que no son legibles directamente. Las columnas de metadatos — host, name, path, expiration, flags — siguen siendo legibles y a menudo son lo que realmente necesitas.</p>

<h2>Explora las Cookies de Chrome Con Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> abre el archivo de base de datos Cookies de Chrome y muestra la tabla <code>cookies</code> en una cuadrícula desplazable y ordenable. Cierra Chrome primero (bloquea el archivo), luego abre <code>~/Library/Application Support/Google/Chrome/Default/Cookies</code> en Tome.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome viendo la base de datos SQLite de cookies de Chrome en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Busca en Todos los Dominios</h3>
<p>Usa el editor SQL de Tome para encontrar cookies por nombre, host, o patrón. Una consulta como <code>SELECT host_key, name, path FROM cookies WHERE name LIKE '%_ga%';</code> revela cada cookie de Google Analytics en todos los sitios que has visitado — algo que DevTools no puede mostrarte en una sola vista.</p>

<h3>Audita los Metadatos de las Cookies</h3>
<p>Explora la tabla de cookies para ver qué dominios establecen cookies persistentes, cuáles usan banderas seguras, y cuáles tienen atributos SameSite. Ordena por fecha de expiración para encontrar cookies que persisten durante años. Esta información está toda visible aunque los valores estén encriptados.</p>

<h3>Inspecciona Otras Bases de Datos de Chrome</h3>
<p>El directorio de perfil de Chrome contiene otras bases de datos SQLite también: <code>History</code>, <code>Login Data</code>, <code>Web Data</code>, y <code>Favicons</code>. Cada una puede abrirse en Tome para inspección visual — útil para entender qué datos almacena Chrome localmente.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Consigue Tome en la Mac App Store</a></p>
`,
  },

  "compare-sqlite-databases-mac": {
    slug: "compare-sqlite-databases-mac",
    title: "Cómo Comparar Bases de Datos SQLite en Paralelo en Mac",
    description:
      "Después de una migración, un cambio de esquema, o una sincronización de datos, verificar que dos bases de datos SQLite coincidan es tedioso sin una forma de ver ambas simultáneamente.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Ejecutaste una migración de datos y necesitas verificar los resultados. O estás comparando una base de datos de desarrollo con una copia de staging. O un colega te envió su versión de una base de datos compartida y necesitas detectar las diferencias. En cada caso, la tarea es la misma: mirar dos bases de datos SQLite y descubrir qué cambió. En Mac, la mayoría de las herramientas hacen esto sorprendentemente difícil porque están diseñadas en torno a una sola conexión de base de datos.</p>

<h2>Por Qué Comparar Bases de Datos Suele Ser Doloroso</h2>
<p>Con la CLI de <code>sqlite3</code>, comparar dos bases de datos significa abrir dos ventanas de Terminal, ejecutar la misma consulta en cada una, y escanear visualmente la salida en busca de diferencias. Para tablas pequeñas esto funciona. Para tablas con cientos de filas y docenas de columnas, es propenso a errores y lento. No hay vista en paralelo, ningún resaltado de diferencias — solo dos flujos de texto plano.</p>
<p>Algunos desarrolladores usan <code>sqldiff</code>, una herramienta de línea de comandos que genera las sentencias SQL necesarias para transformar una base de datos en la otra. Es potente para comparaciones con scripts pero produce salida SQL en bruto, no una diferencia visual. Entender qué cambió realmente requiere leer sentencias INSERT, UPDATE y DELETE en lugar de ver los datos en sí.</p>
<p>La mayoría de los navegadores de bases de datos con GUI agravan el problema al soportar solo una base de datos a la vez. Abres la base de datos A, la inspeccionas, la cierras, abres la base de datos B, y tratas de recordar qué viste en la base de datos A. Algunas herramientas soportan múltiples conexiones pero requieren configuración manual para cada una.</p>

<h2>Abre Ambas Bases de Datos en Paralelo Con Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> es una app de macOS basada en documentos, lo que significa que cada base de datos se abre en su propia ventana con su propia interfaz completa. Abre dos bases de datos y organízalas una junto a otra usando Split View de macOS o arrastrando ventanas — de la misma forma que compararías dos archivos de texto.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome comparando dos bases de datos SQLite en paralelo en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Comparación Visual de Esquemas</h3>
<p>Con ambas bases de datos abiertas, revisa la barra lateral de cada ventana. ¿La fuente tiene tablas que el destino no tiene? ¿Hay índices presentes en una pero ausentes en la otra? Un vistazo visual a ambas barras laterales responde estas preguntas al instante.</p>

<h3>Comparación a Nivel de Fila</h3>
<p>Abre la misma tabla en ambas ventanas y desplázate por los datos. Ordena ambas por la misma columna para alinear las filas. Las diferencias en el recuento de filas o en los valores de los datos se vuelven visibles cuando puedes ver ambas cuadrículas simultáneamente.</p>

<h3>Consulta Ambas de Forma Independiente</h3>
<p>Cada ventana tiene su propio editor de consultas SQL. Ejecuta la misma consulta de agregación en ambas — <code>SELECT COUNT(*) FROM users;</code> — y compara los resultados uno junto al otro. Escribe consultas más complejas para verificar sumas, promedios, o la existencia de registros específicos en cada base de datos de forma independiente.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Consigue Tome en la Mac App Store</a></p>
`,
  },

  "lightweight-database-browser-mac": {
    slug: "lightweight-database-browser-mac",
    title: "Navegador de Bases de Datos Ligero para Mac — Sin Electron, Sin Java",
    description:
      "Los navegadores de bases de datos que empaquetan Chromium o la JVM consumen cientos de megabytes antes de que hayas cargado un archivo siquiera. Una alternativa ligera debería usar lo que macOS ya ofrece.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Instalas un navegador de bases de datos, y el Monitor de Actividad revela que está usando 350 MB de RAM — antes de haber abierto un solo archivo. La app tarda varios segundos en abrirse. Desplazarse por una tabla se traba. La interfaz no coincide con tus otras apps de Mac. Este es el costo de las herramientas de bases de datos basadas en Electron y Java: traen su propio motor de renderizado, su propio framework de interfaz, y su propia sobrecarga de memoria, sin importar lo que realmente estés haciendo con ellas.</p>

<h2>Por Qué los Navegadores de Bases de Datos Son Innecesariamente Pesados</h2>
<p>Las apps Electron empaquetan un navegador Chromium completo para renderizar su interfaz. Para un navegador de bases de datos — una app que principalmente muestra tablas de datos — esto es como enviar un generador diésel para alimentar una lámpara de escritorio. DBeaver y herramientas similares corren sobre Java, lo que implica una penalización de arranque de la JVM, pausas de recolección de basura, y un uso de memoria que crece con el tiempo. Ambos enfoques priorizan la compatibilidad multiplataforma sobre la eficiencia.</p>
<p>En macOS, esta sobrecarga es especialmente frustrante porque el sistema operativo ya provee todo lo que un navegador de bases de datos necesita: AppKit para vistas de tabla nativas, Core Graphics para renderizado, y soporte integrado para modo oscuro, pestañas y gestión de ventanas. Un navegador de bases de datos que use estos frameworks directamente puede ser una fracción del tamaño y dramáticamente más rápido que uno que trae su propia plataforma.</p>

<h2>Tome: Un Navegador de Bases de Datos Que Respeta Tus Recursos</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> está construido con Swift y AppKit — sin Electron, sin Java, sin vistas web. Usa los mismos frameworks nativos que Finder y Preview, resultando en una app que se abre al instante, se mantiene ligera en memoria, y se siente como si perteneciera a tu Mac.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome navegador SQLite nativo y ligero para Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Inicio en Menos de un Segundo</h3>
<p>Sin inicialización de JVM, sin arranque de Chromium. Tome se abre más rápido de lo que tardan la mayoría de las apps Electron en mostrar su pantalla de carga. Haz clic en el icono del dock y tu base de datos está lista para explorar casi de inmediato.</p>

<h3>Huella de Memoria Mínima</h3>
<p>Las vistas de tabla nativas de AppKit renderizan miles de filas usando una fracción de la memoria que consumiría una cuadrícula basada en web. Mantén Tome abierto junto a Xcode, VS Code y tu navegador sin que compita por recursos.</p>

<h3>Conjunto Completo de Funciones, Paquete Pequeño</h3>
<p>Ser ligero no significa estar limitado. Tome incluye todo lo que necesitas para trabajar con SQLite: explorar tablas, vistas, índices y disparadores; editar datos en línea; insertar y eliminar filas; crear tablas visualmente; y ejecutar consultas SQL con resaltado de sintaxis y autocompletado. Todo en una app que trata los recursos de tu Mac con respeto.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Consigue Tome en la Mac App Store</a></p>
`,
  },

  "export-sqlite-to-csv-mac": {
    slug: "export-sqlite-to-csv-mac",
    title: "Cómo Exportar SQLite a CSV en Mac",
    description:
      "Sacar datos de una base de datos SQLite hacia una hoja de cálculo significa lidiar con las opciones de formato de la CLI de sqlite3 o escribir un script. Una herramienta visual convierte esto en una tarea de una sola consulta.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Necesitas llevar datos de una base de datos SQLite a un archivo CSV — quizás para compartir con un colega que usa Excel, para importar en una herramienta de visualización de datos, o para archivar registros en un formato portátil. La CLI de <code>sqlite3</code> puede hacer esto, pero el flujo de trabajo es torpe: establece el modo a CSV con <code>.mode csv</code>, establece el archivo de salida con <code>.output filename.csv</code>, ejecuta tu consulta, y luego recuerda restablecer la salida con <code>.output stdout</code>. Olvida cualquier paso y no obtienes ningún archivo o tu terminal se queda en silencio porque la salida sigue redirigida.</p>

<h2>El Flujo de Exportación desde la CLI Es Propenso a Errores</h2>
<p>Exportar a CSV con <code>sqlite3</code> requiere múltiples comandos punto en el orden correcto. Una sesión típica se ve así:</p>
<pre><code>sqlite3 mydb.sqlite
.headers on
.mode csv
.output export.csv
SELECT * FROM products WHERE category = 'electronics';
.output stdout</code></pre>
<p>Olvida <code>.headers on</code> y tu CSV no tendrá encabezados de columna. Olvida <code>.output stdout</code> y el resultado de tu próxima consulta irá al archivo en lugar de a la pantalla. ¿Quieres exportar una segunda tabla? Repite toda la secuencia con un nombre de archivo diferente. Para una exportación única es tolerable. Para exportaciones regulares en múltiples tablas, es tedioso y propenso a errores.</p>
<p>Podrías escribir un script de Python con los módulos <code>csv</code> y <code>sqlite3</code>, pero eso es sobrecarga de ingeniería para lo que debería ser una simple tarea de extracción de datos.</p>

<h2>Exporta Con el Editor de Consultas de Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> te permite ejecutar cualquier consulta SQL y ver los resultados en una cuadrícula nativa. Desde ahí, seleccionar y copiar los datos te da un formato que puedes pegar directamente en una hoja de cálculo o guardar como CSV. Escribe tu consulta con autocompletado, ejecútala, y obtén los datos — sin comandos punto, sin cambios de modo.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome exportando resultados de consultas SQLite en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Consulta Primero, Exporta lo Que Necesites</h3>
<p>En lugar de exportar una tabla completa y filtrar en Excel, escribe una consulta específica en Tome: filtra filas, une tablas, agrega valores, y formatea columnas con SQL. Exporta solo los datos que realmente necesitas, ya moldeados de la forma que quieres.</p>

<h3>Verificación Visual Antes de Exportar</h3>
<p>Ve los resultados de tu consulta en una cuadrícula desplazable antes de exportar. Verifica que las columnas sean correctas, que los datos se vean bien, y que el recuento de filas coincida con lo esperado. Detectar errores antes de exportar te ahorra tener que rehacer el trabajo después de abrir un mal CSV en Excel.</p>

<h3>Explora Todo el Esquema Primero</h3>
<p>¿No estás seguro de qué tabla tiene los datos que necesitas? Explora tablas, vistas y sus columnas en la barra lateral de Tome. Haz clic entre los datos de muestra para entender el esquema antes de escribir tu consulta de exportación. Esta exploración visual es mucho más rápida que ejecutar comandos <code>.schema</code> en Terminal.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Consigue Tome en la Mac App Store</a></p>
`,
  },

  "sqlite-for-data-science-mac": {
    slug: "sqlite-for-data-science-mac",
    title: "Navegador SQLite para Ciencia de Datos en Mac",
    description:
      "Los científicos de datos que trabajan con conjuntos de datos locales en SQLite necesitan una forma de explorar esquemas, previsualizar datos y probar consultas antes de escribir código de pipeline — sin levantar un servidor de base de datos completo.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Has recibido un conjunto de datos como archivo SQLite — una descarga de Kaggle, un conjunto de datos extraído por scraping, la exportación de un colega, o la salida de tu propio ETL. Antes de escribir código Python para procesarlo, necesitas entender qué hay dentro: nombres de tablas, tipos de columnas, recuentos de filas, distribuciones de datos, y posibles problemas de calidad. Los notebooks de Jupyter pueden consultar SQLite, pero configurar la conexión, escribir SQL exploratorio, y renderizar resultados en celdas de notebook es sobrecarga cuando todo lo que quieres es una vista rápida de los datos.</p>

<h2>La Brecha de Exploración en los Flujos de Trabajo de Ciencia de Datos</h2>
<p>Los científicos de datos típicamente exploran archivos SQLite usando uno de tres enfoques: la CLI de <code>sqlite3</code> (rápida pero sin salida visual), un notebook de Jupyter con <code>pandas.read_sql()</code> (flexible pero requiere configuración para cada sesión), o un IDE de base de datos pesado como DBeaver (potente pero excesivo para un archivo local). Ninguno de estos da en el punto óptimo de "abrir un archivo y explorar los datos de inmediato".</p>
<p>La CLI es particularmente pobre para la exploración de datos porque no tiene formato visual para tablas anchas, ninguna salida desplazable, y ninguna forma de escanear rápidamente distribuciones de datos. Los notebooks añaden valor para el análisis pero son lentos para la fase inicial de "¿cómo se ven estos datos?". Terminas escribiendo código de conexión repetitivo antes de ver una sola fila.</p>

<h2>Explora Conjuntos de Datos Visualmente Con Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> te permite abrir un conjunto de datos SQLite y entender inmediatamente su estructura. Cada tabla aparece en la barra lateral con su recuento de filas. Haz clic en una tabla para desplazarte por sus datos en una cuadrícula nativa. Sin configuración, sin cadenas de conexión, sin código repetitivo — solo abre el archivo y mira.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome explorando un conjunto de datos SQLite de ciencia de datos en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Entiende el Esquema Antes de Escribir Código</h3>
<p>Explora tablas para ver nombres de columnas, tipos y valores de muestra. Identifica qué columnas contienen nulos, qué tablas se relacionan entre sí mediante claves foráneas, y cómo está estructurado el conjunto de datos — todo antes de escribir una sola línea de Python. Este contexto hace que tu código de análisis sea más específico desde el principio.</p>

<h3>Prueba Consultas de Forma Interactiva</h3>
<p>Usa el editor SQL de Tome con autocompletado para prototipar consultas. Prueba tus cláusulas WHERE, condiciones JOIN, y agregaciones en Tome primero, luego copia el SQL funcional en tu pipeline de Python. Detectar errores de consulta en un editor visual es más rápido que depurarlos en una celda de notebook.</p>

<h3>Inspecciona la Salida del ETL</h3>
<p>Después de que tu pipeline escriba resultados en una base de datos SQLite, ábrela en Tome para verificar la salida. Revisa recuentos de filas, detecta valores nulos, y confirma que las transformaciones produjeron los resultados esperados — todo sin escribir código de verificación adicional.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Consigue Tome en la Mac App Store</a></p>
`,
  },

  "postico-alternative-sqlite-mac": {
    slug: "postico-alternative-sqlite-mac",
    title: "Alternativa a Postico para SQLite en Mac",
    description:
      "Postico es un querido cliente de base de datos nativo de Mac — pero solo soporta PostgreSQL. Si trabajas con archivos SQLite, necesitas la misma calidad nativa para un formato diferente.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Si has usado Postico para PostgreSQL en Mac, sabes cómo debería sentirse un cliente de base de datos nativo: apertura instantánea, interfaz limpia, integración adecuada con macOS, y justo las funciones necesarias para ser productivo sin desorden. Es ampliamente considerado una de las mejores herramientas de base de datos en la plataforma. El único problema es que Postico no soporta SQLite. Si tus datos viven en archivos .sqlite en lugar de un servidor PostgreSQL, necesitas buscar algo más — y ese "algo más" suele ser una app Electron o Java que no se parece en nada a Postico.</p>

<h2>La Brecha Entre Postico y las Herramientas SQLite</h2>
<p>Postico demostró que un cliente de base de datos puede ser una gran app de Mac. Usa controles nativos de macOS, respeta las convenciones del sistema, se abre rápidamente, y se mantiene fuera de tu camino. Estableció un estándar que la mayoría de los navegadores SQLite no han alcanzado.</p>
<p>DB Browser for SQLite está basado en Qt — funcional pero visualmente desconectado de macOS. TablePlus soporta SQLite pero también soporta una docena de otras bases de datos, trayendo una complejidad que Postico evita deliberadamente. DBeaver corre sobre Java con toda la sobrecarga de recursos que eso implica. Ninguna de estas herramientas ofrece la experiencia "construida para Mac" que esperan los usuarios de Postico.</p>
<p>El problema no es que estas sean malas herramientas — no lo son. Es que una vez que has experimentado un cliente de base de datos verdaderamente nativo de Mac, las alternativas multiplataforma se sienten como un compromiso. Quieres la misma filosofía aplicada a un formato diferente.</p>

<h2>Tome: La Experiencia Postico para SQLite</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> trae la misma calidad nativa de Mac a SQLite que Postico trae a PostgreSQL. Construido con Swift y AppKit, se abre al instante, sigue las convenciones de diseño de macOS, y se enfoca en hacer una cosa bien — explorar y editar bases de datos SQLite.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome como navegador SQLite con calidad Postico para Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Misma Filosofía, Formato Diferente</h3>
<p>Como Postico, Tome está láser enfocado. Sin PostgreSQL, sin MySQL, sin MongoDB — solo SQLite. Cada función está diseñada para el formato con el que trabajas. La interfaz es limpia, la app es rápida, y no hay nada superfluo compitiendo por tu atención.</p>

<h3>Experiencia Nativa de macOS</h3>
<p>Arquitectura basada en documentos con soporte adecuado de ventanas y pestañas. Modo oscuro del sistema. Arrastrar y soltar desde Finder. Atajos de teclado que coinciden con las convenciones de macOS. Tome se comporta como una app de Mac porque es una — construida con los mismos frameworks que Apple usa para sus propias aplicaciones.</p>

<h3>Explora, Edita y Consulta</h3>
<p>Explora tablas, vistas, índices y disparadores en la barra lateral. Edita celdas en línea. Inserta y elimina filas sin escribir SQL. Cuando necesitas consultas, el editor integrado ofrece resaltado de sintaxis y autocompletado para tu esquema. Es todo lo que un navegador SQLite necesita — y nada de lo que no necesita.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Consigue Tome en la Mac App Store</a></p>
`,
  },
};

