import type { ArticleSet } from "./index";

export const esArticles: ArticleSet = {
  "best-developer-tools-app-mac": {
    slug: "best-developer-tools-app-mac",
    title: "La mejor app de herramientas para desarrolladores en Mac",
    description:
      "Alternar entre pestañas del navegador, scripts de CLI y carpetas de marcadores para utilidades básicas de desarrollo consume más tiempo que la propia programación.",
    date: "2026-09-06",
    readTime: "5 min de lectura",
    content: `
<p>Necesitas decodificar un JWT, formatear un bloque de JSON, generar un UUID y codificar una cadena en Base64 — todo en los próximos diez minutos. Así que abres cuatro pestañas del navegador, pegas datos sensibles en cuatro sitios web diferentes y esperas que ninguno esté registrando tu portapapeles. Y al día siguiente lo vuelves a hacer.</p>

<p>Los desarrolladores improvisan con marcadores, alias de shell y scripts sueltos para manejar estas micro-tareas. Funciona, técnicamente. Pero cada cambio de contexto — salir del editor, encontrar la pestaña correcta, esperar a que cargue la página — erosiona la concentración que necesitas para el problema real que estás resolviendo.</p>

<h2>Lo que macOS te ofrece de serie</h2>
<p>macOS viene con Terminal, que cubre parte de este terreno si recuerdas los flags correctos. <code>uuidgen</code> te da un UUID. <code>echo -n "text" | base64</code> se encarga de la codificación. <code>python3 -m json.tool</code> formatea JSON. Pero no hay una interfaz unificada, no hay descubrimiento de herramientas, y no hay forma de manejar treinta operaciones distintas sin mantener tu propia chuleta de comandos.</p>

<p>Xcode incluye algunas utilidades enterradas en los menús, pero abrir un IDE de 12 GB para decodificar una cadena URL es como coger un camión para ir a la tienda de la esquina.</p>

<h2>Una sola app con 41 herramientas para desarrolladores</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> reúne 41 herramientas para desarrolladores en una app nativa de macOS — accesible desde la barra de menús o como ventana independiente. Las herramientas están organizadas en cinco categorías: Formateadores, Codificadores, Generadores, Conversores y Herramientas de Texto. Una barra lateral te permite explorar o buscar, y la app registra tus herramientas usadas recientemente para que las operaciones más habituales estén siempre a un clic.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="App de herramientas para desarrolladores Bellows para macOS mostrando 41 herramientas en una barra lateral NavigationSplitView" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Detección del portapapeles</h3>
<p>Copia un JWT a tu portapapeles y abre Bellows — te sugiere el decodificador de JWT. Copia una cadena JSON y te muestra el formateador de JSON. Esta pequeña función elimina por completo el paso de elegir una herramienta; la app lee el contenido de tu portapapeles y te dirige a la utilidad correcta.</p>

<h3>Totalmente offline</h3>
<p>Todas las herramientas funcionan en local. Sin peticiones de red, sin telemetría, sin pegar claves API en un sitio web de alguien que nunca has oído hablar. Para desarrolladores que trabajan con tokens, secretos o datos internos, esto no es un extra agradable — es un requisito.</p>

<h3>Acceso desde la barra de menús</h3>
<p>Bellows vive en tu barra de menús, así que siempre está a un clic sin saturar tu Dock. Haz clic en el icono, elige una herramienta, pega tu entrada y obtén el resultado. La interacción completa lleva segundos y nunca abandonas tu espacio de trabajo actual.</p>

<h2>Para quién es esto</h2>
<p>Ingenieros de backend depurando respuestas de API. Desarrolladores frontend convirtiendo colores entre hex y RGB. Ingenieros DevOps decodificando secretos en Base64. Desarrolladores móviles generando UUIDs para datos de prueba. Cualquiera que alguna vez haya pensado "tiene que haber una forma más rápida de hacer esto" mientras abría una pestaña del navegador.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtén Bellows en la Mac App Store</a></p>
`,
  },

  "json-formatter-mac-app": {
    slug: "json-formatter-mac-app",
    title: "Formateador de JSON para Mac — App nativa, funciona offline",
    description:
      "Pegar JSON sin formato en una herramienta del navegador para poder leerlo es un flujo de trabajo que repites decenas de veces por semana sin cuestionarlo.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Una API devuelve una respuesta JSON de 200 líneas comprimida en una sola línea. Necesitas encontrar un campo anidado. Así que lo copias, abres una pestaña del navegador, navegas a uno de los tantos sitios web formateadores de JSON, lo pegas, haces clic en "Formatear" y entrecierras los ojos para leer el resultado. Si el JSON contiene algo sensible — tokens, datos de usuario, IDs internos — acabas de enviarlo a un servidor de terceros.</p>

<p>Esta es una de las micro-tareas más comunes en el desarrollo de software, y la mayoría de los desarrolladores la manejan de la forma menos eficiente posible.</p>

<h2>El enfoque por Terminal</h2>
<p>macOS incluye <code>python3</code>, así que puedes canalizar JSON a través de <code>python3 -m json.tool</code> en Terminal. Funciona con entrada bien formada. Pero falla con comas finales, da mensajes de error crípticos con JSON mal formado, y la salida queda atrapada en tu ventana de terminal. No hay resaltado de sintaxis, no hay nodos colapsables, y no hay forma de copiar rápidamente una ruta anidada.</p>

<p>Algunos desarrolladores instalan <code>jq</code> a través de Homebrew, que es más potente pero añade otra dependencia y requiere aprender su sintaxis de consulta para cualquier cosa más allá del formateo básico.</p>

<h2>Un formateador de JSON nativo que vive en tu Mac</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye un formateador de JSON como una de sus 41 herramientas integradas para desarrolladores. Pega o escribe JSON en el panel de entrada y obtén una salida formateada y legible al instante. Sin necesidad de conexión a internet — todo se ejecuta localmente en tu Mac.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Herramienta de formato JSON de Bellows mostrando la salida formateada en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Detección del portapapeles</h3>
<p>Copia una cadena JSON a tu portapapeles y abre Bellows. La app detecta el contenido JSON y sugiere el formateador automáticamente. Sin navegar por menús — la herramienta que necesitas ya está esperando.</p>

<h3>Parte de un kit de herramientas más amplio</h3>
<p>El formateo de JSON rara vez ocurre de forma aislada. Puede que necesites decodificar una cadena Base64 para obtener el JSON, o extraer un payload de JWT que contiene JSON, o decodificar un parámetro de URL que almacena un objeto JSON. Con 41 herramientas en una sola app, puedes encadenar estas operaciones sin cambiar entre diferentes utilidades.</p>

<h3>Cuando más lo necesitas</h3>
<p>Depurando un payload de webhook a las 11 de la noche. Revisando un archivo de configuración que un compañero pegó en Slack. Inspeccionando una exportación de Core Data. Verificando la estructura de una respuesta mock antes de escribir un test. Estos son los momentos en que abrir una pestaña del navegador pesa más — y cuando una app nativa en tu barra de menús marca la mayor diferencia.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtén Bellows en la Mac App Store</a></p>
`,
  },

  "base64-encoder-decoder-mac": {
    slug: "base64-encoder-decoder-mac",
    title: "Codificador y decodificador Base64 para Mac",
    description:
      "Decodificar cadenas Base64 mediante comandos de Terminal o herramientas web interrumpe tu flujo cada vez que te encuentras con un valor codificado en logs o configuraciones.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Estás revisando variables de entorno y encuentras un valor que parece un galimatías — <code>eyJhbGciOiJIUzI1NiJ9</code>. Sabes que es Base64, pero no puedes leerlo ahí mismo. Así que lo copias, abres Terminal, escribes <code>echo "..." | base64 --decode</code>, te das cuenta de que olvidaste el flag <code>-D</code> en macOS, lo intentas de nuevo, y por fin ves la salida decodificada. Treinta segundos perdidos para algo que debería llevar dos.</p>

<p>La codificación Base64 aparece en todas partes: cabeceras de autenticación, archivos adjuntos de correo, URIs de datos en CSS, secretos de Kubernetes, configuraciones de pipelines CI/CD. Si trabajas con APIs o infraestructura, decodificas Base64 varias veces al día.</p>

<h2>Por qué Terminal se queda corto</h2>
<p>El comando <code>base64</code> integrado en macOS funciona pero tiene sus peculiaridades. El flag de decodificación es <code>-D</code> (mayúscula) en macOS frente a <code>-d</code> en Linux, lo que confunde a cualquiera que trabaje con ambos sistemas. La entrada multilínea requiere un entrecomillado cuidadoso. Y no hay retroalimentación visual — escribes un comando, recibes una cadena de vuelta, y esperas no haber truncado la entrada por accidente.</p>

<p>Las herramientas basadas en navegador resuelven el problema de usabilidad pero crean uno de seguridad. Los valores codificados en Base64 suelen ser secretos: claves API, tokens, datos de certificados. Pegarlos en un sitio web anula el propósito de haberlos codificado en primer lugar.</p>

<h2>Codifica y decodifica localmente con un solo clic</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye un codificador y decodificador Base64 como parte de su kit de 41 herramientas para desarrolladores en macOS. Pega tu cadena codificada y ve la salida decodificada de inmediato. Cambia de dirección para codificar texto plano a Base64. Todo ocurre en tu máquina — ningún dato sale de tu Mac.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Herramienta de codificación y decodificación Base64 de Bellows en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Casos de uso comunes</h3>
<p>Decodificar secretos de Kubernetes almacenados como Base64 en manifiestos YAML. Inspeccionar el payload de un JWT (que está codificado en Base64url). Convertir una imagen a un URI de datos Base64 para incrustarla en HTML. Codificar credenciales para una cabecera HTTP Basic Auth. Cada uno de estos casos se resuelve con una sola interacción de pegar y leer en lugar de un comando de Terminal o un viaje de ida y vuelta al navegador.</p>

<h3>Consciente del portapapeles</h3>
<p>Copia una cadena Base64 y abre Bellows desde la barra de menús. La app detecta el contenido codificado en tu portapapeles y sugiere la herramienta Base64, para que te saltes el paso de navegar hasta ella manualmente.</p>

<h3>Sin sobrecarga de instalación</h3>
<p>A diferencia de las fórmulas de Homebrew o los scripts de Python que necesitan mantenimiento, Bellows es una única instalación desde la Mac App Store con actualizaciones automáticas. Se ejecuta de forma nativa en Macs con Apple Silicon e Intel sin dependencias.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtén Bellows en la Mac App Store</a></p>
`,
  },

  "devtoys-alternative-mac": {
    slug: "devtoys-alternative-mac",
    title: "Alternativa a DevToys para Mac",
    description:
      "DevToys trajo la idea del kit de herramientas todo-en-uno para desarrolladores a Windows, pero la versión de macOS nunca igualó la experiencia nativa que los usuarios de Mac esperan.",
    date: "2026-09-06",
    readTime: "5 min de lectura",
    content: `
<p>Si has usado DevToys en Windows, conoces su atractivo: una sola app que maneja formateo de JSON, Base64, decodificación de JWT, generación de hashes y una docena de utilidades más. Sin pestañas del navegador, sin comandos de CLI, sin cambios de contexto. Entonces te pasaste a macOS y buscaste lo mismo.</p>

<p>La versión de macOS de DevToys existe, pero siempre se ha sentido más como un port que como una app nativa. La interfaz no sigue las convenciones de macOS, el rendimiento puede ir lento en Apple Silicon y carga con el peso de un framework multiplataforma. Si elegiste un Mac por la calidad de su software, la diferencia se nota.</p>

<h2>Lo que los desarrolladores en Mac realmente quieren</h2>
<p>Los usuarios de macOS esperan apps que se sientan como parte de la plataforma. Eso significa una barra lateral nativa, atajos de teclado estándar, soporte adecuado de modo oscuro e integración con funciones del sistema como la barra de menús. Estas no son preferencias cosméticas — afectan la rapidez con la que puedes entrar, hacer la tarea y salir.</p>

<p>Una app de herramientas para desarrolladores vive en los huecos entre sesiones de trabajo concentrado. Necesita abrirse al instante, aceptar entrada sin fricción y desaparecer cuando terminas. Cada milisegundo de retraso o confusión en la interfaz va en contra de ese propósito.</p>

<h2>Una alternativa nativa para Mac con 41 herramientas</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> está construida en Swift específicamente para macOS. Utiliza una barra lateral NavigationSplitView para organizar 41 herramientas en cinco categorías: Formateadores, Codificadores, Generadores, Conversores y Herramientas de Texto. Funciona tanto como app de barra de menús como ventana independiente — tú eliges según tu forma de trabajar.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows como alternativa nativa a DevToys para macOS con barra lateral NavigationSplitView" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Cómo se compara con DevToys</h3>
<p>Ambas apps cubren el mismo territorio central — formateo de JSON, codificación/decodificación, hashing, generación de UUID, conversión de colores. Donde Bellows se diferencia es en la integración con la plataforma. La detección del portapapeles sugiere la herramienta correcta según lo que acabas de copiar. El acceso desde la barra de menús significa que nunca necesitas Cmd-Tab para encontrar la app. El seguimiento de recientes muestra tus herramientas más usadas en la parte superior. Son detalles pequeños, pero se acumulan a lo largo de cientos de interacciones diarias.</p>

<h3>Totalmente offline</h3>
<p>Al igual que DevToys, Bellows funciona completamente offline. Ningún dato sale de tu máquina, no se requiere cuenta, sin telemetría. Para desarrolladores que trabajan con credenciales, tokens o datos propietarios, esto es lo mínimo imprescindible — pero vale la pena confirmarlo explícitamente.</p>

<h3>Rendimiento nativo</h3>
<p>Como Bellows está construida con frameworks nativos de macOS en lugar de Electron o un toolkit multiplataforma, se abre al instante y usa un mínimo de memoria. Se comporta como una utilidad del sistema, no como una app web disfrazada de app nativa.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtén Bellows en la Mac App Store</a></p>
`,
  },

  "jwt-decoder-mac": {
    slug: "jwt-decoder-mac",
    title: "Decodificador de JWT para Mac — Pega e inspecciona",
    description:
      "Pegar JWTs en jwt.io para leer sus claims funciona hasta que te das cuenta de que acabas de enviar un token válido a un sitio web de terceros.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Tomas un JWT de una cabecera de petición o de un archivo de log. Es una cadena larga separada por puntos que no significa nada a simple vista. Necesitas comprobar el claim de expiración, verificar el emisor o ver qué scopes están incluidos. Así que abres jwt.io, pegas el token y lees el payload decodificado en el panel derecho.</p>

<p>Este flujo de trabajo tiene un problema: acabas de enviar un token de autenticación activo a través de la red a un sitio web que no controlas. Los payloads de JWT suelen contener IDs de usuario, direcciones de correo, roles y permisos. El token en sí puede seguir siendo válido. Incluso si jwt.io es de confianza, la política de seguridad de tu empresa podría no estar de acuerdo.</p>

<h2>Qué contiene realmente un JWT</h2>
<p>Un JSON Web Token tiene tres partes separadas por puntos: una cabecera (algoritmo y tipo), un payload (los claims — expiración, emisor, sujeto, datos personalizados) y una firma. La cabecera y el payload son simplemente JSON codificado en Base64url. No necesitas un servidor ni una librería especial para leerlos — solo necesitas un decodificador Base64 y un formateador JSON. Pero hacer esto manualmente en Terminal cada vez es tedioso.</p>

<h2>Decodifica JWTs localmente en tu Mac</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye un decodificador de JWT dedicado que separa el token en sus tres partes y muestra la cabecera y el payload decodificados como JSON formateado. Pega el token y ve los claims. Sin peticiones de red, sin servidor de terceros, sin riesgo de filtrar un token activo.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Decodificador de JWT de Bellows mostrando la cabecera y el payload decodificados en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Consciente del portapapeles</h3>
<p>Copia un JWT desde las herramientas de desarrollo de tu navegador, un archivo de log o un mensaje de Slack. Abre Bellows y detecta el formato del token en tu portapapeles, sugiriendo el decodificador de JWT de inmediato. El payload decodificado aparece en un solo paso.</p>

<h3>Comprueba la expiración de un vistazo</h3>
<p>La razón más común para decodificar un JWT es comprobar si ha expirado. El claim <code>exp</code> es un timestamp Unix — fácil para las máquinas, sin sentido para los humanos. Ver el payload decodificado te permite leer rápidamente la expiración junto con otros claims como <code>iss</code>, <code>sub</code> y <code>aud</code> sin convertir timestamps de cabeza.</p>

<h3>Parte de un kit de herramientas más amplio</h3>
<p>La decodificación de JWT a menudo lleva a tareas relacionadas: decodificar un valor Base64 dentro de un claim, hashear una cadena para compararla con una huella digital, o decodificar una URI de redirección almacenada en el payload. Con 41 herramientas disponibles en la misma app, estas tareas de seguimiento no requieren cambiar a otra utilidad.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtén Bellows en la Mac App Store</a></p>
`,
  },

  "url-encoder-decoder-mac": {
    slug: "url-encoder-decoder-mac",
    title: "Codificador y decodificador de URLs para Mac",
    description:
      "Leer URLs con codificación porcentual llenas de %20 y %3D es como leer una frase donde cada espacio está reemplazado por un número.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Extraes una URL de los logs del servidor y tiene este aspecto: <code>https://example.com/search?q=hello%20world&redirect=https%3A%2F%2Fother.com%2Fpath</code>. Necesitas leer los parámetros de consulta, pero la codificación porcentual lo hace casi imposible de un vistazo. Así que la pegas en una herramienta del navegador, la decodificas, lees el resultado, y luego vuelves a codificar una versión modificada para probar algo. Dos viajes de ida y vuelta a un sitio web para lo que debería ser una operación trivial.</p>

<p>La codificación de URLs es una de esas cosas con las que los desarrolladores lidian constantemente pero en las que rara vez piensan — hasta que una redirección rota, una cadena de consulta mal formada o un parámetro codificado dos veces convierte una tarea de cinco minutos en una sesión de depuración de una hora.</p>

<h2>Cuando la codificación de URLs causa problemas reales</h2>
<p>La doble codificación es la trampa clásica. Una URL se codifica una vez por tu aplicación y otra vez por una capa de middleware, convirtiendo <code>%20</code> en <code>%2520</code>. Para diagnosticar esto, necesitas decodificar la URL paso a paso y ver exactamente dónde se coló la codificación extra. Hacer esto en Terminal con <code>python3 -c "import urllib.parse; print(urllib.parse.unquote('...'))"</code> funciona pero es lento y propenso a errores con URLs largas.</p>

<p>Los errores de codificación también rompen flujos OAuth, URLs de webhooks y callbacks de API donde la URI de redirección debe coincidir exactamente. Poder codificar y decodificar rápidamente te permite comparar lo que tu app envía con lo que el servidor espera.</p>

<h2>Codifica y decodifica URLs al instante</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye un codificador y decodificador de URLs entre sus 41 herramientas para desarrolladores. Pega una URL codificada para ver la versión legible. Escribe una URL normal para obtener la salida correctamente codificada. Cambia entre codificación y decodificación con un clic, y el resultado se actualiza en tiempo real.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Herramienta de codificación y decodificación de URLs de Bellows en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Depuración de redirecciones</h3>
<p>Los flujos OAuth y SSO pasan URIs de redirección como parámetros de consulta codificados en URL. Cuando una redirección falla, el primer paso es decodificar la URL para verificar que el destino coincide con tu callback registrado. Tener una herramienta local significa que puedes hacer esto sin salir de tu IDE ni pegar URLs de callback potencialmente sensibles en un sitio web público.</p>

<h3>Trabajando con cadenas de consulta</h3>
<p>Las APIs que aceptan filtros complejos o consultas de búsqueda a través de parámetros de URL suelen requerir una codificación cuidadosa de caracteres especiales como <code>&</code>, <code>=</code>, <code>+</code> y espacios. Un codificador dedicado asegura que obtengas la salida correcta sin adivinar qué caracteres necesitan escapado en tu contexto específico.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtén Bellows en la Mac App Store</a></p>
`,
  },

  "hash-generator-mac-app": {
    slug: "hash-generator-mac-app",
    title: "Generador de hashes para Mac — MD5, SHA-256 y más",
    description:
      "Verificar la integridad de archivos o generar hashes de contraseñas mediante comandos de Terminal implica recordar diferentes flags para cada algoritmo cada vez.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Descargas un binario de GitHub y la página de la release lista un checksum SHA-256. Para verificarlo, abres Terminal, escribes <code>shasum -a 256 ~/Downloads/file.tar.gz</code>, esperas a que lo calcule, y luego comparas manualmente dos cadenas hexadecimales de 64 caracteres una al lado de la otra. Un solo carácter erróneo y no puedes saber si el archivo está corrupto o simplemente leíste mal el hash.</p>

<p>O necesitas generar un hash MD5 de una cadena — quizás para una clave de caché, una URL de Gravatar o una API legacy que todavía usa firmas MD5. El comando es <code>md5 -s "text"</code> en macOS pero <code>md5sum</code> en Linux. Diferencias pequeñas, pero suficientes para frenarte cuando cambias entre sistemas.</p>

<h2>Hashing en Terminal: funciona, apenas</h2>
<p>macOS viene con <code>md5</code>, <code>shasum</code> y <code>openssl dgst</code>, cubriendo la mayoría de algoritmos. Pero cada herramienta tiene su propia sintaxis. <code>md5</code> usa <code>-s</code> para entrada de cadena. <code>shasum</code> usa <code>-a</code> para seleccionar el algoritmo. <code>openssl dgst</code> requiere <code>-sha256</code> o <code>-md5</code> como flag. No hay un solo comando que te permita elegir un algoritmo y hashear una cadena sin consultar la página del manual.</p>

<p>Para desarrolladores que ocasionalmente necesitan un hash rápido, la carga cognitiva de recordar estas variaciones es desproporcionada respecto a la simplicidad de la tarea.</p>

<h2>Genera hashes con un solo pegado</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye un generador de hashes que soporta MD5, SHA-1, SHA-256, SHA-384, SHA-512 y otros algoritmos comunes. Escribe o pega tu entrada, selecciona un algoritmo, y el hash aparece al instante. Sin flags que recordar, sin sintaxis que buscar.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Generador de hashes de Bellows mostrando salida MD5 y SHA-256 en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Verificación de descargas</h3>
<p>Cuando una página de release proporciona un checksum, quieres compararlo con el archivo que descargaste. Generar el hash en una herramienta visual hace la comparación más fácil que revisar dos cadenas a ojo en una ventana de terminal — especialmente con hashes SHA-256 de 64 caracteres.</p>

<h3>Firmas de API y claves de caché</h3>
<p>Algunas APIs requieren firmas HMAC o basadas en hash para la autenticación de peticiones. Otras usan hashes MD5 o SHA como claves de caché o identificadores de contenido. Poder generar rápidamente un hash del cuerpo de una petición o de una cadena te permite verificar tu implementación contra los valores esperados durante la depuración.</p>

<h3>Offline y privado</h3>
<p>La entrada para el hashing podría contener datos sensibles — contraseñas, secretos de API, identificadores internos. Bellows se ejecuta completamente en tu Mac sin acceso a la red, así que nada de lo que hasheas sale jamás de tu máquina.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtén Bellows en la Mac App Store</a></p>
`,
  },
  "regex-tester-mac-app": {
    slug: "regex-tester-mac-app",
    title: "Regex Tester para Mac — Nativo y Sin Conexión",
    description:
      "Escribir expresiones regulares sin retroalimentación en tiempo real es como editar código sin resaltado de sintaxis — técnicamente posible, pero innecesariamente doloroso.",
    date: "2026-09-06",
    readTime: "5 min de lectura",
    content: `
<p>Necesitas una regex para validar direcciones de correo electrónico, extraer marcas de tiempo de líneas de log o analizar un campo CSV que a veces contiene comas entre comillas. Escribes un patrón, lo pruebas contra una cadena de ejemplo en tu código, descubres que falla en un caso límite, lo ajustas, recompilas, pruebas de nuevo. Cada iteración toma 30 segundos de compilar-ejecutar-verificar, y la mayoría de los patrones regex necesitan cinco o seis iteraciones antes de funcionar de forma fiable.</p>

<p>La alternativa es regex101.com — una herramienta excelente que muestra coincidencias en tiempo real, explica cada parte del patrón y te permite probar contra múltiples entradas a la vez. Pero funciona en un navegador, lo que significa que estás pegando tus datos de prueba (líneas de log, registros de usuarios, respuestas de API) en un sitio web público. Y necesitas conexión a internet.</p>

<h2>Por qué la retroalimentación en tiempo real importa para regex</h2>
<p>Las expresiones regulares son densas por naturaleza. La diferencia entre <code>.*</code> y <code>.*?</code> (codicioso versus perezoso) puede cambiar si tu patrón coincide con una línea o con un archivo entero. Los lookaheads, las clases de caracteres y los grupos de captura interactúan de formas difíciles de razonar mentalmente. Ver las coincidencias resaltadas mientras escribes el patrón transforma las regex de adivinanzas en un proceso visual e iterativo.</p>

<p>Por eso los testers en navegador son tan populares — proporcionan el ciclo de retroalimentación que escribir regex en el código fuente no ofrece. El problema es que requieren un navegador, conexión a internet y confianza en que tus datos de prueba se mantengan privados.</p>

<h2>Prueba regex localmente en tu Mac</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye un tester de regex como una de sus 41 herramientas para desarrolladores. Escribe tu patrón, pega tu cadena de prueba y ve las coincidencias resaltadas en tiempo real. Ajusta el patrón y los resultados se actualizan al instante — sin compilar, sin recargar la página, sin peticiones de red.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows tester de regex con resaltado de coincidencias en tiempo real en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Patrones comunes simplificados</h3>
<p>Extraer fechas de archivos de log (<code>\\d{4}-\\d{2}-\\d{2}</code>). Validar números de teléfono con códigos de país opcionales. Encontrar URLs en texto libre. Analizar datos estructurados como CSV o TSV donde los campos pueden estar entre comillas. Estos patrones son simples en concepto pero complicados en casos límite — y un tester en tiempo real te permite detectar esos casos antes de que lleguen a producción.</p>

<h3>Ningún dato sale de tu Mac</h3>
<p>Si tus datos de prueba incluyen logs del servidor, información de usuarios o salida de sistemas internos, probar patrones regex sin conexión no es solo conveniente — es la decisión responsable. Bellows se ejecuta completamente en tu máquina sin acceso a la red.</p>

<h3>Siempre disponible</h3>
<p>Bellows se sitúa en tu barra de menú, así que el tester de regex está a un clic de distancia. Sin pestañas del navegador que buscar, sin URLs que recordar, sin indicadores de carga. Ábrelo, prueba tu patrón, copia el resultado, ciérralo. Toda la interacción toma segundos.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtén Bellows en la Mac App Store</a></p>
`,
  },

  "color-picker-hex-rgb-mac": {
    slug: "color-picker-hex-rgb-mac",
    title: "Selector de Color con Hex y RGB para Mac",
    description:
      "Convertir entre códigos hex, valores RGB y notación HSL a mano es propenso a errores e innecesario cuando lo haces varias veces al día.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Un diseñador te envía un color en hex: <code>#1A73E8</code>. Tu framework CSS quiere HSL. Tu código iOS necesita valores RGB entre 0 y 1. Tu proyecto Android usa enteros ARGB. Un color, cuatro formatos, y estás abriendo una pestaña del navegador para convertir entre ellos — otra vez.</p>

<p>La conversión de colores es matemática trivial (hex a RGB es simplemente base 16 a decimal), pero hacerlo mentalmente para tres canales mientras intentas concentrarte en el diseño o el estilo es una distracción que no necesitas.</p>

<h2>Lo que ofrece macOS</h2>
<p>macOS tiene un selector de color integrado accesible desde algunas apps a través del panel de color del sistema. Muestra controles deslizantes RGB y un campo hex, pero está diseñado para elegir colores visualmente, no para convertir entre formatos de forma programática. No hay una manera sencilla de pegar un código hex y obtener el equivalente en HSL, o de introducir enteros RGB y copiar la salida en hex. Y está escondido dentro de apps específicas en lugar de estar disponible en todo el sistema.</p>

<h2>Convierte colores al instante entre formatos</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye un conversor de colores entre sus 41 herramientas para desarrolladores. Introduce un color en cualquier formato soportado — hex, RGB, HSL — y ve los valores equivalentes en todos los demás formatos. Copia la representación que necesites con un solo clic.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows selector de color mostrando conversión entre hex, RGB y HSL en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Del diseño al código</h3>
<p>Figma exporta colores como hex. Tailwind CSS usa valores de color personalizados. SwiftUI necesita <code>Color(red:green:blue:)</code> con valores decimales. Android XML usa <code>#AARRGGBB</code>. Tener todos los formatos visibles a la vez elimina el cálculo mental y los viajes de ida y vuelta a sitios web de conversión.</p>

<h3>Verificar contraste y legibilidad</h3>
<p>Cuando puedes ver el color renderizado junto a sus valores numéricos, puedes comprobar rápidamente si un color de texto será legible sobre un fondo. Esto es más rápido que cambiar a un verificador de contraste separado para cada par de colores en tu hoja de estilos.</p>

<h3>Acceso desde la barra de menú</h3>
<p>¿Necesitas una conversión rápida mientras escribes CSS? Haz clic en el icono de Bellows en tu barra de menú, selecciona la herramienta de color, pega el código hex y copia el valor RGB. Toda la interacción toma menos de cinco segundos y nunca sales de tu editor.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtén Bellows en la Mac App Store</a></p>
`,
  },

  "uuid-generator-mac": {
    slug: "uuid-generator-mac",
    title: "Generador de UUID para Mac — Copia Instantánea",
    description:
      "Generar UUIDs a través de Terminal o fragmentos de código añade fricción a una tarea que debería ser completamente automática.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Necesitas un UUID. Quizás estás escribiendo un test unitario y necesitas un identificador único para un objeto mock. Quizás estás poblando una base de datos y necesitas claves primarias. Quizás estás creando una nueva entidad en un archivo de configuración y el esquema requiere un UUID. Sea cual sea la razón, tienes que dejar lo que estás haciendo, generar el UUID en algún lugar, copiarlo y pegarlo de vuelta en tu código.</p>

<p>Esto ocurre con la frecuencia suficiente como para que la mayoría de los desarrolladores tengan una solución de memoria muscular: <code>uuidgen</code> en Terminal, un marcador en el navegador o un snippet en su editor. Cada uno funciona. Ninguno es realmente libre de fricción.</p>

<h2>La forma con Terminal</h2>
<p>macOS incluye <code>uuidgen</code>, que imprime un UUID v4 en stdout. Es rápido y fiable. Pero genera en mayúsculas por defecto (algunos sistemas esperan minúsculas), genera un UUID a la vez, y usarlo implica cambiar a Terminal, ejecutar el comando, seleccionar la salida, copiarla y volver. Para un solo UUID, está bien. Para diez UUIDs para poblar una base de datos de prueba, se vuelve tedioso.</p>

<h2>Genera UUIDs desde tu barra de menú</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye un generador de UUID como una de sus 41 herramientas para desarrolladores. Ábrelo desde la barra de menú, genera un UUID y cópialo al portapapeles. ¿Necesitas otro? Genera de nuevo. La herramienta está siempre a un clic, funciona sin conexión y produce UUIDs v4 estándar listos para pegar en código, configuraciones o archivos de datos de prueba.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows generador de UUID con copia instantánea en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Testing y datos de prueba</h3>
<p>Los tests unitarios y de integración a menudo necesitan identificadores únicos que parezcan realistas. Usar siempre el mismo UUID lleva a bugs sutiles cuando los tests se ejecutan en paralelo o cuando un test depende accidentalmente de un ID específico. Generar UUIDs nuevos para cada fixture de prueba es un hábito simple que previene toda una clase de fallos intermitentes en los tests.</p>

<h3>Poblado de bases de datos</h3>
<p>Cuando llenas una base de datos de desarrollo con datos de ejemplo, necesitas claves primarias únicas que no colisionen con datos de producción ni con los archivos de otros desarrolladores. Generar UUIDs bajo demanda es más limpio que incrementar enteros o usar patrones predecibles que podrían solaparse.</p>

<h3>Siempre disponible</h3>
<p>Como Bellows vive en tu barra de menú, el generador de UUID es accesible sin abrir Terminal, cambiar de aplicación o navegar a un marcador. Clic, generar, copiar, pegar. La interrupción a tu flujo de trabajo se mide en segundos, no en cambios de contexto.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtén Bellows en la Mac App Store</a></p>
`,
  },

  "all-in-one-dev-tools-mac-offline": {
    slug: "all-in-one-dev-tools-mac-offline",
    title: "Herramientas de Desarrollo Todo en Uno para Mac — 41 Herramientas, Completamente Offline",
    description:
      "Pestañas del navegador para codificar, ventanas de Terminal para hashing, marcadores para formatear — las microtareas de desarrollo están dispersas en una docena de lugares.",
    date: "2026-09-06",
    readTime: "5 min de lectura",
    content: `
<p>Cuenta las herramientas que usas en una sesión típica de depuración. Un formateador de JSON para leer una respuesta de API. Un decodificador Base64 para una cabecera de autenticación. Un inspector de JWT para comprobar los claims del token. Un decodificador de URLs para desenredar una cadena de redirecciones. Un generador de hashes para verificar un checksum. Son cinco pestañas del navegador abiertas, cinco sitios web que ahora tienen tus datos y cinco cambios de contexto que te alejaron del problema real.</p>

<p>No son tareas complejas. Cada una toma diez segundos de trabajo real. Pero la sobrecarga de encontrar la herramienta correcta, cambiar a ella, pegar la entrada y copiar la salida suma minutos por sesión y horas por semana. Peor aún, fragmenta tu atención en los momentos exactos en que necesitas mantener un sistema complejo en tu cabeza.</p>

<h2>El panorama actual</h2>
<p>Los desarrolladores han armado kits de herramientas personales a partir de una mezcla de fuentes. Marcadores del navegador a sitios como jwt.io, regex101.com y jsonformatter.org. Alias y funciones del shell en <code>.zshrc</code>. Extensiones de VS Code que añaden formateo o codificación. Paquetes de Homebrew como <code>jq</code> y <code>htop</code>. Cada herramienta se añadió para resolver un problema, y ninguna se comunica con las demás.</p>

<p>El resultado es una cadena de herramientas que técnicamente funciona pero no tiene coherencia. No puedes predecir dónde estará la próxima utilidad. No puedes encadenar operaciones sin copiar manualmente la salida de una herramienta y pegarla en otra. Y no puedes garantizar que ninguna de las herramientas web mantenga tus datos privados.</p>

<h2>41 herramientas en una app nativa de macOS</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> consolida 41 herramientas para desarrolladores en una sola aplicación macOS organizada en cinco categorías:</p>

<ul>
<li><strong>Formateadores</strong> — JSON, XML, SQL, HTML y más. Pega una entrada desordenada, obtén una salida limpia.</li>
<li><strong>Codificadores</strong> — Base64, codificación de URLs, entidades HTML, decodificación de JWT. Codifica y decodifica en ambas direcciones.</li>
<li><strong>Generadores</strong> — UUIDs, hashes (MD5, SHA-256, SHA-512), Lorem Ipsum, contraseñas. Genera y copia en un solo paso.</li>
<li><strong>Conversores</strong> — Colores (hex/RGB/HSL), bases numéricas, marcas de tiempo, unidades. Convierte entre formatos sin cálculo mental.</li>
<li><strong>Herramientas de texto</strong> — Tester de regex, comparador de diferencias, conversor de mayúsculas/minúsculas, ordenador de líneas, contador de caracteres. Las utilidades de manipulación de texto que usas a diario.</li>
</ul>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows mostrando las 41 herramientas para desarrolladores organizadas por categorías en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Detección del portapapeles</h3>
<p>Copia algo al portapapeles y abre Bellows. La app analiza el contenido del portapapeles y sugiere la herramienta más relevante. Copia un JWT y te ofrece el decodificador. Copia JSON y muestra el formateador. Copia una cadena Base64 y apunta al codificador. Esto elimina el paso de elegir una herramienta — la app lo hace por ti.</p>

<h3>Modo barra de menú y modo ventana</h3>
<p>Bellows funciona como app de barra de menú para operaciones rápidas y puntuales: haz clic en el icono, usa una herramienta, ciérralo. Para sesiones más largas — como probar una serie de patrones regex o convertir múltiples valores de color — cambia al modo ventana y mantenlo junto a tu editor. Ambos modos usan la misma interfaz con una barra lateral NavigationSplitView para explorar categorías.</p>

<h3>Completamente offline</h3>
<p>Todas las herramientas se ejecutan localmente en tu Mac. Sin peticiones de red, sin cuentas, sin telemetría. Esto no es una postura filosófica — es un requisito práctico para desarrolladores que trabajan diariamente con tokens, secretos, credenciales y datos propietarios. Tu entrada se queda en tu máquina.</p>

<h3>Seguimiento de recientes</h3>
<p>Las herramientas que usas con más frecuencia aparecen en la parte superior de la barra lateral. Con el tiempo, Bellows se adapta a tu flujo de trabajo para que las herramientas que necesitas estén siempre al alcance, no enterradas en una categoría que tienes que expandir.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtén Bellows en la Mac App Store</a></p>
`,
  },

  "json-validator-mac-app": {
    slug: "json-validator-mac-app",
    title: "Validador de JSON para Mac — Encuentra Errores al Instante",
    description:
      "Una coma que falta o un corchete de más puede romper un archivo de configuración entero, y encontrarlo revisando línea por línea desperdicia un tiempo que no tienes.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Tu build falla con "Unexpected token in JSON at position 4,821." Genial, gracias. Ahora te toca recorrer un archivo de configuración de cuatro mil caracteres contando corchetes mentalmente, intentando averiguar cuál no tiene pareja. Este es uno de los sumideros de tiempo más evitables en el desarrollo de software, y ocurre constantemente porque JSON tiene tolerancia cero a los pequeños errores.</p>

<p>Una coma al final después del último elemento de un array. Una comilla que falta alrededor de una clave. Una llave de cierre extra copiada de otro lugar. Cualquiera de estos rompe el parsing completamente, y el mensaje de error rara vez apunta al problema real — apunta a donde el parser se rindió, que a menudo está varias líneas lejos del verdadero error.</p>

<h2>Por qué los números de posición no ayudan</h2>
<p>La mayoría de los parsers de JSON reportan errores como un desplazamiento de caracteres, no como una línea y columna a la que puedas saltar en tu editor. Convertir la posición 4.821 en "línea 112, en algún lugar cerca del tercer objeto" requiere contar manualmente o escribir un script desechable. Ninguno es un buen uso de tu tarde.</p>

<p>Algunos editores resaltan errores de sintaxis JSON en línea, lo cual ayuda para archivos que estás escribiendo activamente. Pero para JSON que recibiste de una API, un compañero de trabajo o una configuración heredada, necesitas una herramienta que tome el texto en bruto y te diga exactamente qué está mal y dónde.</p>

<h2>Valida JSON sin salir de tu Mac</h2>
<p>Un formateador de JSON que también valida elimina las conjeturas. Pega el JSON y, si está mal formado, obtienes un error claro que apunta a la línea y carácter específicos en lugar de un desplazamiento de bytes en bruto. Si es válido, se renderiza limpiamente con la indentación correcta para que puedas revisar visualmente la estructura. <a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> maneja ambos casos en la misma herramienta — no necesitas saber de antemano si tu JSON está roto.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows formateador de JSON validando y resaltando un error de sintaxis en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Detectar errores antes de que se publiquen</h3>
<p>Los archivos de configuración, los cuerpos de peticiones API y los datos de fixtures viven o mueren según la validez del JSON. Ejecutar una rápida validación antes de hacer commit a un cambio de configuración o enviar una petición de prueba detecta el tipo de error tipográfico que de otro modo aparecería como un confuso error en tiempo de ejecución mucho más adelante en el pipeline.</p>

<h3>Trabajar con datos no confiables</h3>
<p>Cuando un compañero te pega un bloque de JSON en Slack, o lo sacas de una API de terceros en la que no confías del todo, validarlo localmente significa que nunca tienes que enviar esos datos a un sitio web externo solo para comprobar si se parsea correctamente.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtén Bellows en la Mac App Store</a></p>
`,
  },

  "html-entity-encoder-mac": {
    slug: "html-entity-encoder-mac",
    title: "Codificador y Decodificador de Entidades HTML para Mac",
    description:
      "Renderizar texto enviado por usuarios de forma segura, o leer el código fuente de una página lleno de &amp; y &lt;, se reduce al mismo tedioso problema de conversión.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Estás depurando por qué un texto en una página web aparece como <code>&amp;amp;</code> en lugar de un simple ampersand. O estás escribiendo HTML a mano y necesitas escapar un signo menor-que para que el navegador no lo interprete como el inicio de una etiqueta. En cualquier caso, estás lidiando con entidades HTML — el pequeño conjunto de caracteres que necesitan codificación especial para mostrarse correctamente o para no romper el marcado.</p>

<p>Las más comunes son fáciles de recordar: <code>&amp;</code> se convierte en <code>&amp;amp;</code>, <code>&lt;</code> se convierte en <code>&amp;lt;</code>, <code>&gt;</code> se convierte en <code>&amp;gt;</code>. Pero cuando llegas a las comillas tipográficas, los guiones largos, los espacios de no separación y los caracteres acentuados, los nombres de entidades dejan de ser intuitivos y terminas buscando una tabla de referencia cada vez.</p>

<h2>Un ángulo de seguridad, no solo de formato</h2>
<p>La codificación de entidades HTML no es puramente estética. No codificar el contenido enviado por usuarios antes de renderizarlo en una página web es un vector clásico de cross-site scripting. Si tu aplicación necesita mostrar texto en bruto — comentarios, nombres de usuario, entradas de formulario — dentro de HTML, entender exactamente qué se codifica y cómo es parte de escribir código seguro, no solo de generar una salida con buena apariencia.</p>

<p>A la inversa, decodificar es una necesidad igual de común: hacer scraping de una página web, parsear un feed RSS o leer un documento exportado de un CMS a menudo te deja con texto codificado en entidades que necesita convertirse de vuelta a caracteres normales antes de poder usarlo en otro lugar.</p>

<h2>Codifica y decodifica en un solo paso</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye un codificador y decodificador de entidades HTML entre sus 41 herramientas para desarrolladores. Pega texto en bruto para obtener entidades HTML correctamente escapadas, o pega marcado codificado para ver el texto legible. Ambas direcciones ocurren al instante y completamente sin conexión.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows herramienta de codificación y decodificación de entidades HTML en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Limpiar contenido extraído</h3>
<p>El texto obtenido de feeds RSS, publicaciones de blog exportadas o HTML extraído por scraping frecuentemente llega lleno de códigos de entidades donde debería haber signos de puntuación normales. Decodificarlo en bloque antes de almacenarlo o mostrarlo en otro lugar evita una página llena de <code>&amp;#8217;</code> sueltos donde debería haber un apóstrofo.</p>

<h3>Escribir marcado a mano</h3>
<p>Cuando estás editando manualmente una plantilla HTML o un boletín por correo electrónico y necesitas incluir un ángulo literal o un ampersand en el texto visible, codificarlo correctamente la primera vez te ahorra un bug de renderizado que solo aparece después de que ya enviaste el correo.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtén Bellows en la Mac App Store</a></p>
`,
  },

  "timestamp-converter-mac": {
    slug: "timestamp-converter-mac",
    title: "Conversor de marcas de tiempo Unix para Mac",
    description:
      "Una línea de log muestra 1743984000 y necesitas saber si fue hace tres horas o hace tres semanas, sin hacer el cálculo a mano.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Las marcas de tiempo Unix son perfectas para las máquinas e inútiles para los humanos. Cada agregador de logs, registro de base de datos y respuesta de API parece almacenar el tiempo como un entero crudo que cuenta los segundos desde el 1 de enero de 1970, y todo desarrollador ha intentado, en algún momento, adivinar a ojo si <code>1725580800</code> es reciente o antiguo.</p>

<p>El recurso habitual es una búsqueda rápida en Google — "1725580800 to date" — que funciona pero añade un viaje al navegador para algo que debería resolverse en dos segundos. O escribes una línea en una consola de algún lenguaje: <code>new Date(1725580800000)</code> en la consola JS del navegador, acordándote de multiplicar por 1000 para milisegundos y esperando no haber confundido segundos con milisegundos.</p>

<h2>Segundos vs. milisegundos: la trampa clásica</h2>
<p>El tiempo Unix suele estar en segundos, pero el objeto <code>Date</code> de JavaScript espera milisegundos, y algunas APIs (particularmente las construidas sobre JavaScript) devuelven marcas de tiempo en milisegundos por defecto. Confundir ambos te da una fecha que está o bien absurdamente en el futuro o atrapada cerca de la época en 1970 — un error que todo desarrollador ha cometido al menos una vez mientras depuraba un problema de "por qué esta fecha se ve mal".</p>

<p>Las zonas horarias añaden otra capa. Una marca de tiempo se convierte en un instante específico, pero mostrarla en tu hora local frente a UTC frente a la zona horaria del servidor puede hacer que el mismo valor parezca tres momentos completamente distintos, lo cual importa mucho cuando intentas correlacionar un error con un despliegue.</p>

<h2>Convierte en ambas direcciones al instante</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye un conversor de marcas de tiempo que transforma un timestamp Unix en una fecha y hora legibles, y convierte una fecha de vuelta a timestamp — en ambas direcciones, sin cálculos. Gestiona la ambigüedad entre segundos y milisegundos para que no tengas que adivinar.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Conversor de marcas de tiempo Unix de Bellows mostrando fecha y hora en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Depuración de logs y bases de datos</h3>
<p>Los agregadores de logs, las filas de bases de datos y los payloads de APIs almacenan el tiempo como números crudos con mucha más frecuencia que como cadenas legibles. Convertir un puñado de timestamps mientras investigas un incidente es una tarea pequeña que ocurre docenas de veces durante cualquier sesión seria de depuración.</p>

<h3>Lógica de programación y expiración</h3>
<p>La expiración de caché, la caducidad de tokens y las marcas de tiempo de trabajos programados son tiempo Unix bajo el capó. Comprobar rápidamente a qué corresponde un valor de expiración dado en hora real te ayuda a verificar que tu lógica de TTL está haciendo lo que crees.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Descarga Bellows en la Mac App Store</a></p>
`,
  },

  "markdown-preview-mac-app": {
    slug: "markdown-preview-mac-app",
    title: "Vista previa de Markdown para Mac — Pega y visualiza",
    description:
      "Escribir un README o la descripción de un pull request en Markdown sin formato significa adivinar cómo se renderizarán realmente los encabezados, listas y bloques de código.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Escribes un README con viñetas anidadas, un par de bloques de código y una tabla comparando dos enfoques. Se ve bien como texto plano en tu editor. Luego lo subes a GitHub y la tabla está desalineada, uno de tus bloques de código no se cerró correctamente, y una lista numerada se reinició en 1 a mitad de camino por una línea en blanco perdida. Ahora estás subiendo pequeños commits de corrección solo para que el formato quede bien.</p>

<p>Markdown es lo bastante sencillo como para escribirlo de memoria con formato básico, pero las tablas, las listas anidadas y los bloques de código tienen pequeñas peculiaridades de sintaxis que difieren ligeramente entre renderizadores. GitHub Flavored Markdown no es idéntico a CommonMark, que no es idéntico a lo que use tu generador de sitios estáticos. La brecha entre "se ve bien en mi cabeza" y "se renderiza bien en la página" es exactamente donde una vista previa en vivo demuestra su valor.</p>

<h2>Por qué hacer commit para comprobar es un mal flujo de trabajo</h2>
<p>Subir un commit solo para ver cómo se renderiza un README, luego otro para arreglar una tabla rota, luego otro para arreglar la corrección, llena tu historial de commits con ruido de formato que no tiene nada que ver con el contenido real. También significa que cada ciclo de vista previa tarda lo que un push y una recarga de página — lo bastante lento como para que dejes de molestarte en comprobar y simplemente esperes que se vea bien.</p>

<h2>Ve la salida renderizada mientras escribes</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye una herramienta de vista previa de Markdown que renderiza la salida formateada mientras pegas o escribes Markdown sin formato. Encabezados, listas, tablas, enlaces y bloques de código se renderizan inmediatamente, para que puedas detectar errores de formato antes de que terminen en un commit.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Herramienta de vista previa de Markdown de Bellows renderizando texto formateado en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Escribir READMEs y descripciones de PRs</h3>
<p>Las descripciones de pull requests y los archivos README son a menudo lo primero que lee un revisor o un nuevo colaborador. Comprobar que los encabezados, las listas de verificación y las imágenes enlazadas se renderizan correctamente antes de enviar ahorra una ronda de comentarios de "¿puedes arreglar el formato?".</p>

<h3>Redactar documentación sin conexión</h3>
<p>Escribir documentación en un vuelo o en una zona con internet inestable no significa renunciar a ver tu formato renderizado correctamente. Una herramienta de vista previa local funciona igual estés conectado o no.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Descarga Bellows en la Mac App Store</a></p>
`,
  },

  "lorem-ipsum-generator-mac": {
    slug: "lorem-ipsum-generator-mac",
    title: "Generador de Lorem Ipsum para Mac — Copia cualquier longitud",
    description:
      "Rellenar un mockup de diseño o un fixture de test con texto de relleno no debería requerir una visita a un sitio web cada vez.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Estás construyendo un componente de tarjeta y necesitas tres párrafos de texto de relleno para ver cómo se ajusta. O estás escribiendo un fixture de test que necesita una cadena larga para comprobar el comportamiento de truncado. En cualquier caso, necesitas texto de relleno, y escribir "asdf asdf asdf" en un campo de texto no te da longitudes de palabra ni estructura de oraciones realistas con las que trabajar.</p>

<p>Lorem Ipsum ha sido la respuesta por defecto a este problema durante décadas, precisamente porque su pseudotexto derivado del latín tiene una distribución natural de longitudes de palabras y oraciones que imita la prosa real sin resultar distractivo ni significativo — el ojo del lector no se ve arrastrado a leerlo realmente, que es exactamente el objetivo cuando intentas evaluar un diseño.</p>

<h2>Más allá de copiar y pegar el mismo párrafo</h2>
<p>La mayoría de los desarrolladores guardan un único párrafo de Lorem Ipsum en algún sitio y lo reutilizan en todas partes, lo cual funciona hasta que necesitas un bloque mucho más largo para una prueba de scroll, o uno mucho más corto para comprobar cómo se comporta una elipsis de truncado en una sola línea. Generar texto con la longitud exacta que necesitas — una oración, un párrafo, varios párrafos — es mejor que reutilizar el mismo bloque fijo y recortarlo o duplicarlo manualmente.</p>

<h2>Genera exactamente la longitud que necesitas</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye un generador de Lorem Ipsum que produce texto de relleno con la longitud que tu diseño o caso de prueba requiera, listo para copiar con un solo clic. Sin pestañas del navegador, sin sitios generadores llenos de anuncios, sin esperar a que cargue una página solo para obtener tres oraciones.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Generador de Lorem Ipsum de Bellows produciendo texto de relleno en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Prototipado de diseños de interfaz</h3>
<p>Antes de que exista el contenido real, el texto de relleno te permite evaluar si un diseño maneja con elegancia distintas longitudes de contenido — títulos cortos, títulos largos, párrafos que ocupan dos líneas frente a cinco. Generar texto rápidamente con diferentes longitudes acelera esa evaluación.</p>

<h3>Fixtures de tests y datos semilla</h3>
<p>Las pruebas automatizadas que verifican el truncado de texto, los límites de caracteres o el comportamiento de desbordamiento necesitan cadenas realistas de una longitud conocida. Generarlas bajo demanda es más rápido que codificar la misma cadena de relleno en docenas de archivos de test.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Descarga Bellows en la Mac App Store</a></p>
`,
  },

  "xml-formatter-mac": {
    slug: "xml-formatter-mac",
    title: "Formateador y validador de XML para Mac",
    description:
      "Las respuestas SOAP y los archivos de configuración heredados siguen llegando como XML sin indentar, y leerlos sin formato es más difícil de lo necesario.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>JSON se lleva toda la atención, pero muchos sistemas todavía hablan XML — APIs SOAP, archivos de diseño de Android, el <code>pom.xml</code> de Maven, feeds RSS y un buen número de integraciones empresariales que no han cambiado su formato de datos en quince años. Cuando uno de estos llega minificado en una sola línea, leer la estructura anidada es genuinamente difícil sin una indentación adecuada.</p>

<p>A diferencia de JSON, XML también tiene que lidiar con namespaces, atributos y etiquetas autocerrantes, lo que hace que el formateo manual sea aún más propenso a errores. Contar mal los niveles de anidamiento en un sobre SOAP con estructura profunda es fácil de hacer y difícil de detectar hasta que algo falla más adelante en la cadena.</p>

<h2>Por qué esto sigue importando en 2026</h2>
<p>A pesar del dominio de JSON en el diseño de nuevas APIs, XML no ha desaparecido del software empresarial, los sistemas gubernamentales y el desarrollo Android. Si te integras con la pasarela de pagos de un banco, un sistema de seguros heredado o un servicio web SOAP antiguo, eventualmente necesitarás leer y depurar XML crudo — y entrecerrar los ojos ante una respuesta sin formato no es una forma productiva de emplear ese tiempo.</p>

<h2>Formatea y valida en un solo paso</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye un formateador de XML que indenta correctamente los elementos anidados y señala el marcado malformado — una etiqueta sin cerrar, una comilla de atributo que no coincide, una declaración de namespace rota. Pega XML minificado y obtén de vuelta un documento legible y correctamente indentado de inmediato.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Formateador de XML de Bellows mostrando elementos anidados indentados en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Depuración de SOAP y APIs heredadas</h3>
<p>Los sobres SOAP envuelven el payload real en varias capas de boilerplate, lo que hace que encontrar el campo que realmente te interesa sea tedioso cuando todo está en una sola línea. Formatear la respuesta primero convierte un muro de texto en un árbol navegable.</p>

<h3>Revisión de archivos de configuración y compilación</h3>
<p>El <code>AndroidManifest.xml</code> de Android, el <code>pom.xml</code> de Maven y un sinfín de formatos de configuración de CI son XML bajo el capó. Cuando uno de estos se genera o modifica programáticamente y termina sin indentar, un formateo rápido hace que tanto el diff como el contenido sean más fáciles de revisar.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Descarga Bellows en la Mac App Store</a></p>
`,
  },

  "cron-expression-helper-mac": {
    slug: "cron-expression-helper-mac",
    title: "Asistente de expresiones Cron para Mac",
    description:
      "Escribir una expresión de programación a mano y esperar que signifique lo que crees es la razón por la que los trabajos terminan ejecutándose a las 3 AM en vez de a las 3 PM.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>La sintaxis cron son cinco campos de números y símbolos que de alguna manera necesitan expresar "cada día laborable a las 9 AM excepto festivos" o "cada 15 minutos entre las 8 y las 6." Los campos son minuto, hora, día del mes, mes y día de la semana, en un orden que nadie recuerda correctamente al primer intento, y los asteriscos, comas, guiones y barras significan cosas diferentes según la posición.</p>

<p><code>0 9 * * 1-5</code> parece razonable, pero ¿es a las 9 AM o a las 9 PM, y <code>1-5</code> significa de lunes a viernes o algo completamente distinto dependiendo de si la implementación de cron cuenta el domingo como 0 o como 7? Equivocarse en esto en un pipeline de despliegue, un trabajo de backup o un informe programado significa o bien fallos silenciosos o un trabajo ejecutándose a una hora inconveniente — a veces durante semanas antes de que alguien lo note.</p>

<h2>Cada implementación de cron tiene sus propias peculiaridades</h2>
<p>El cron estándar de Unix, los CronJobs de Kubernetes, AWS EventBridge y diversas plataformas de CI usan aproximadamente la misma sintaxis de cinco campos pero difieren en pequeños detalles — si se soportan segundos, cómo funciona la numeración del día de la semana, si ciertas cadenas abreviadas como <code>@daily</code> son válidas. Escribir una programación que funcione correctamente en el primer despliegue significa entender exactamente qué variante de cron estás utilizando.</p>

<h2>Traduce expresiones a lenguaje natural</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye un asistente de expresiones cron que toma una cadena de programación y explica lo que realmente significa en lenguaje claro, para que puedas verificar tu intención antes de desplegar un trabajo programado en cualquier parte.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Asistente de expresiones cron de Bellows explicando una cadena de programación en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Verificar antes de desplegar</h3>
<p>Un trabajo programado que se ejecuta a la hora equivocada es a menudo un fallo silencioso — nada se rompe, simplemente se ejecuta cuando no pretendías, a veces solapándose con una ventana de mantenimiento o sobrecargando una base de datos durante el pico de tráfico. Comprobar el significado en lenguaje natural de una cadena cron antes de mergear una configuración de despliegue detecta esto antes de que se convierta en una alerta a las 2 AM.</p>

<h3>Leer la programación de otra persona</h3>
<p>Heredar un código base con una docena de trabajos cron existentes significa descifrar qué hace cada uno antes de poder cambiar cualquiera de ellos con seguridad. Traducir cada expresión rápidamente es más ágil que parsear mentalmente cinco campos crípticos un trabajo a la vez.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Descarga Bellows en la Mac App Store</a></p>
`,
  },

  "yaml-to-json-mac": {
    slug: "yaml-to-json-mac",
    title: "Conversor de YAML a JSON para Mac",
    description:
      "Los manifiestos de Kubernetes, los pipelines de CI y los archivos de configuración hablan YAML, pero las herramientas que realmente necesitas para inspeccionar datos suelen esperar JSON.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>YAML está en todas partes de la infraestructura — manifiestos de Kubernetes, workflows de GitHub Actions, archivos Docker Compose, playbooks de Ansible. Es legible y compacto, hasta que la indentación se vuelve ambigua, un tabulador se cuela donde debería haber un espacio, o necesitas pasar los datos a una herramienta que solo entiende JSON.</p>

<p>Convertir entre los dos formatos a mano es mecánico pero tedioso: el anidamiento basado en indentación de YAML se convierte en llaves y corchetes de JSON, las cadenas sin comillas de YAML necesitan comillas, y la sintaxis más permisiva de YAML (booleanos sin comillas, cadenas multilínea, anclas y referencias) no siempre se mapea limpiamente a las reglas más estrictas de JSON.</p>

<h2>Por qué necesitas ambos formatos</h2>
<p>Puede que escribas un manifiesto de Kubernetes en YAML porque es más fácil de leer y versionar, pero necesites el equivalente en JSON para alimentar un script, una llamada a API o un pipeline de <code>jq</code> que espera entrada JSON. O estás depurando por qué la configuración YAML de un pipeline de CI no se parsea como esperas, y ver la estructura JSON subyacente hace que el anidamiento real sea inequívoco de una manera que el YAML sensible a espacios en blanco a veces no logra.</p>

<h2>Convierte entre formatos al instante</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye un conversor de YAML a JSON entre sus 41 herramientas para desarrolladores. Pega YAML y obtén la estructura JSON equivalente inmediatamente, con el anidamiento y los tipos preservados correctamente — sin reformateo manual, sin adivinar niveles de indentación.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Herramienta conversora de YAML a JSON de Bellows en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Depuración de configuraciones de Kubernetes y CI</h3>
<p>Cuando un manifiesto se comporta de forma inesperada, ver la estructura JSON subyacente elimina cualquier ambigüedad sobre cómo se anidó realmente el YAML — útil cuando una indentación mal colocada ha cambiado silenciosamente qué clave pertenece a qué objeto padre.</p>

<h3>Alimentar scripts con configuración</h3>
<p>Muchas herramientas de scripting y automatización trabajan de forma más natural con JSON que con YAML. Convertir un archivo de configuración una vez y pasar la salida JSON a lo largo de la cadena suele ser más simple que enseñar a cada script de tu pipeline a parsear YAML directamente.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Descarga Bellows en la Mac App Store</a></p>
`,
  },

  "text-diff-tool-mac": {
    slug: "text-diff-tool-mac",
    title: "Herramienta de Diff de Texto para Mac — Compara Dos Textos en Paralelo",
    description:
      "Dos versiones de un archivo de configuración, un borrador de email o un párrafo de texto se ven casi idénticas, y encontrar la única palabra que cambió a simple vista es sorprendentemente difícil.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Git maneja los diffs de maravilla para código que ya está registrado en un repositorio. Pero gran parte de la comparación de texto ocurre fuera del control de versiones: dos versiones de una cláusula legal que un abogado devolvió, una respuesta de API antes y después de un cambio en el backend, un párrafo de texto de marketing que un colega "solo ajustó un poco". Leer ambas versiones en paralelo e intentar detectar la diferencia a simple vista es lento y poco fiable, sobre todo en bloques de texto largos.</p>

<p>El ojo humano es malo para este tipo de comparación porque no está buscando diferencias, sino leyendo en busca de significado, y dos párrafos casi idénticos se leen ambos como "correctos" a menos que te detengas específicamente a comparar carácter por carácter.</p>

<h2>Cuando Git Diff No Está Disponible</h2>
<p>No todo lo que vale la pena comparar vive en un repositorio de git. Valores de configuración pegados desde dos entornos distintos, dos borradores de un email, o el antes y después de un buscar-y-reemplazar del que no estás seguro de haber hecho bien, todos necesitan herramientas de comparación que funcionen con texto pegado arbitrario, no solo con archivos rastreados.</p>

<h2>Compara Dos Bloques de Texto al Instante</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye una herramienta de diff de texto que resalta exactamente qué cambió entre dos bloques de texto pegado: adiciones, eliminaciones y modificaciones señaladas visualmente para que no tengas que leer cada carácter tú mismo.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Herramienta de diff de texto de Bellows comparando dos bloques de texto en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Comparar Configuración Entre Entornos</h3>
<p>Cuando staging y producción se comportan de forma diferente, comparar los valores reales de configuración en paralelo suele revelar al culpable más rápido que leer registros de despliegue: una sola variable de entorno con un error tipográfico o un valor desactualizado destaca de inmediato una vez resaltada.</p>

<h3>Revisar Texto Editado</h3>
<p>Cuando alguien devuelve una versión "ligeramente editada" de un documento, ver con precisión qué cambió, en lugar de releer todo esperando notarlo, convierte una revisión lenta en una comprobación visual rápida.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Consigue Bellows en la Mac App Store</a></p>
`,
  },

  "number-base-converter-mac": {
    slug: "number-base-converter-mac",
    title: "Convertidor de Bases Numéricas para Mac — Hex, Binario, Octal, Decimal",
    description:
      "Leer una dirección de memoria, un valor de color o un código de permisos de archivo significa traducir constantemente entre decimal y la base que exija el contexto.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Una dirección de memoria aparece como <code>0x7ffee23a1c40</code>. Un permiso de archivo es <code>0755</code>. Una máscara de bits en la documentación de un driver está escrita en binario. Un valor de canal de color necesita convertirse de decimal a hexadecimal de dos dígitos. Ninguna de estas conversiones es difícil por separado, pero hacerlas repetidamente de cabeza —sobre todo de binario a hexadecimal, que exige agrupar bits en nibbles— es más lento y propenso a errores de lo que debería ser algo tan mecánico.</p>

<p>La programación de bajo nivel, el desarrollo embebido, las redes e incluso el desarrollo web cotidiano (colores hex, otra vez) requieren moverse entre bases numéricas con la frecuencia suficiente como para que mantener una tabla mental de dígitos hexadecimales solo sirva hasta cierto punto, en cuanto los números superan uno o dos bytes.</p>

<h2>Dónde Suele Fallar la Gente</h2>
<p>El octal es el traicionero. Un permiso de archivo como <code>644</code> parece un número decimal pero en realidad es base 8, y tratarlo como decimal al razonar sobre él genera confusión sobre cuál es el patrón de bits real. El binario se vuelve inmanejable pasados los 16 bits: un valor de 32 bits en binario tiene treinta y dos caracteres, difícil de leer y fácil de contar mal cuando intentas aislar bits específicos para comprobar una bandera.</p>

<h2>Convierte Entre las Cuatro Bases a la Vez</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye un convertidor de bases numéricas que muestra un valor en decimal, hexadecimal, octal y binario simultáneamente. Escribe un número en cualquier base y ve cómo se actualizan las cuatro representaciones a la vez, sin conversiones separadas para cada par.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Convertidor de bases numéricas de Bellows mostrando hex, binario, octal y decimal en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Trabajo de Bajo Nivel y Embebido</h3>
<p>Leer valores de registros, máscaras de bits y direcciones de memoria en firmware embebido o programación de sistemas significa moverse con fluidez entre hex y binario. Ver ambos a la vez, junto al decimal, elimina una capa de traducción manual de una tarea ya de por sí cargada de detalles.</p>

<h3>Permisos de Archivo y Redes</h3>
<p>Los permisos de archivo en Unix, las máscaras de subred y varias banderas binarias en protocolos de red se expresan comúnmente en octal o binario, pero se razonan en decimal. Una conversión rápida confirma exactamente qué representa una cadena de permisos o un byte de banderas antes de que lo cambies.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Consigue Bellows en la Mac App Store</a></p>
`,
  },

  "csv-to-json-mac": {
    slug: "csv-to-json-mac",
    title: "Convertidor de CSV a JSON para Mac",
    description:
      "Una exportación de hoja de cálculo necesita convertirse en datos estructurados para una llamada a una API o un fixture de prueba, y escribir un script de usar y tirar cada vez es excesivo.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Alguien del equipo de ventas exporta una hoja de cálculo como CSV y te pide que "simplemente la cargues en el sistema". El sistema espera JSON. Así que escribes un script rápido en Python o Node con una librería de parseo de CSV, mapeas las columnas a campos, gestionas la fila de encabezados, y esperas que ningún valor contenga una coma que rompa tu lógica ingenua de dividir por comas (normalmente sí la contiene, escondida dentro de un campo entre comillas).</p>

<p>Esta es una tarea que los desarrolladores resuelven una y otra vez, escribiendo cada vez código desechable ligeramente distinto, porque el CSV aparece constantemente como formato de exportación de hojas de cálculo, bases de datos y herramientas de analítica, mientras que la mayoría de las herramientas y APIs modernas esperan JSON.</p>

<h2>La Engañosa Simplicidad del CSV</h2>
<p>El CSV parece trivial: divide por comas, divide por saltos de línea, listo. Entonces te encuentras con un campo que contiene una coma, envuelto en comillas según la especificación, y tu parser ingenuo se rompe. O un campo contiene un salto de línea incrustado dentro de comillas, algo que una lectura simple línea por línea no puede manejar correctamente. Parsear CSV correctamente requiere en realidad respetar las reglas de comillado, por eso un convertidor dedicado supera a escribirlo desde cero cada vez.</p>

<h2>Convierte CSV en JSON Estructurado</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye un convertidor de CSV a JSON que maneja correctamente los campos entre comillas y las filas de encabezado, convirtiendo una exportación de hoja de cálculo en un array de objetos JSON listo para pegar en un fixture de prueba, un cuerpo de solicitud o un script.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Herramienta convertidora de CSV a JSON de Bellows en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Cargar Datos de Hojas de Cálculo en APIs</h3>
<p>Cuando una importación de datos puntual no justifica escribir y mantener un script completo, convertir la exportación de CSV directamente a JSON y pegarla en una herramienta de pruebas de API o en un archivo de datos semilla para una base de datos hace el trabajo en una fracción del tiempo.</p>

<h3>Construir Fixtures de Prueba a Partir de Datos Reales</h3>
<p>Exportar una muestra de datos similares a los de producción como CSV desde una hoja de cálculo y convertirla a JSON es una forma rápida de generar fixtures de prueba realistas sin escribir objetos JSON a mano campo por campo.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Consigue Bellows en la Mac App Store</a></p>
`,
  },

  "mac-developer-tools-no-internet": {
    slug: "mac-developer-tools-no-internet",
    title: "Herramientas para Desarrolladores en Mac que Funcionan Sin Internet",
    description:
      "Trabajar en un vuelo, en la sala de servidores de un sótano o simplemente con un Wi-Fi inestable de cafetería no debería significar perder el acceso a las utilidades que usas constantemente.",
    date: "2026-09-06",
    readTime: "5 min de lectura",
    content: `
<p>Intenta formatear un bloque de JSON en un avión sin Wi-Fi y rápidamente notarás cuántas de tus utilidades diarias para desarrolladores son en realidad sitios web disfrazados. jwt.io, regex101, formateadores de JSON, herramientas de Base64: todas excelentes, todas completamente inútiles en cuanto se cae tu conexión. Acabas prescindiendo de ellas o luchando con comandos de Terminal que recuerdas a medias.</p>

<p>Esto no es solo un inconveniente para los viajes. Las salas de servidores, las instalaciones seguras y los entornos con espacio de aire a menudo no tienen acceso a internet por diseño. Incluso una red Wi-Fi de oficina inestable puede convertir una tarea de dos segundos en una frustrante espera por una página que no carga.</p>

<h2>La Dependencia Oculta en tu Caja de Herramientas</h2>
<p>La mayoría de los desarrolladores no se dan cuenta de cuánto depende su trabajo diario de una conexión activa hasta que esta desaparece. Una rápida auditoría mental es reveladora: ¿cuántas de las utilidades a las que recurres varias veces al día son en realidad pestañas del navegador apuntando al servidor de otra persona? Para la mayoría de los desarrolladores, la respuesta es más de lo que esperan.</p>

<p>Más allá del problema de disponibilidad, también hay un problema de datos. Enviar tokens, credenciales o datos internos a un sitio web de terceros para decodificarlos o formatearlos implica confiar en las prácticas de seguridad y privacidad de ese sitio, una confianza que puede no estar justificada, y que muchas políticas de seguridad corporativas prohíben explícitamente.</p>

<h2>Una Caja de Herramientas que Nunca Necesita Conexión</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> reúne 41 herramientas para desarrolladores en una app nativa de macOS que funciona completamente sin conexión, sin excepciones, sin "esta función requiere internet". El formateo de JSON, la decodificación de JWT, el hashing, las pruebas de regex, la codificación y decodificación, y mucho más, funcionan de forma idéntica ya sea que estés conectado a fibra de gigabit o a nueve mil metros de altura sin señal.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="App de herramientas offline para desarrolladores Bellows funcionando en macOS sin conexión de red" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Trabajar en Entornos Seguros o con Espacio de Aire</h3>
<p>Parte del desarrollo ocurre en entornos donde el acceso a internet está restringido o totalmente ausente por política: contratación de defensa, infraestructura financiera, ciertos trabajos gubernamentales. Las herramientas que requieren una conexión activa simplemente no son utilizables ahí, por muy buenas que sean.</p>

<h3>Viajar Sin Perder Productividad</h3>
<p>Los vuelos, los trenes que pasan por túneles y los lugares de trabajo remoto con conectividad poco fiable no deberían dictar qué tareas de desarrollo puedes hacer y cuáles no. Una caja de herramientas pensada primero para lo offline elimina la conectividad de la lista de cosas que pueden frenarte.</p>

<h3>La Privacidad como Efecto Secundario de Estar Offline</h3>
<p>Una app que nunca hace solicitudes de red no puede filtrar tus datos a un servidor, ni intencionalmente ni por accidente. Para los desarrolladores que manejan tokens, secretos o información propietaria, lo offline no es solo cuestión de disponibilidad: es una garantía de privacidad significativa.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Consigue Bellows en la Mac App Store</a></p>
`,
  },

  "clipboard-formatter-mac": {
    slug: "clipboard-formatter-mac",
    title: "Formateador de Portapapeles para Mac — Detecta y Sugiere Herramientas Automáticamente",
    description:
      "Decidir qué formateador, decodificador o convertidor usar es en sí mismo una pequeña decisión que tomas docenas de veces al día sin notar la sobrecarga que supone.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Copias una cadena de texto. Antes de poder hacer algo con ella, tienes que averiguar qué es y qué herramienta la maneja. ¿Es un JWT? ¿Base64? ¿Un color hex? ¿Un simple UUID? Para un desarrollador con experiencia este reconocimiento ocurre casi al instante, pero sigue siendo un pequeño paso cognitivo entre copiar algo y realmente actuar sobre ello, y es un paso que se repite cada vez.</p>

<p>Multiplica ese paso de reconocimiento y navegación por las docenas de pequeñas tareas de utilidad de un día típico, y suma una sorprendente cantidad de esfuerzo mental gastado solo en dirigirte a la herramienta correcta, antes incluso de haber empezado la tarea real.</p>

<h2>El Reconocimiento de Patrones Es un Problema Resoluble</h2>
<p>Los JWT tienen una estructura distintiva de tres partes separadas por puntos con un encabezado Base64url reconocible. Los colores hex empiezan con una almohadilla y tienen exactamente seis u ocho caracteres hexadecimales. Los UUID siguen un formato estricto de ocho-cuatro-cuatro-cuatro-doce separado por guiones. El JSON empieza con una llave o un corchete. Estos patrones son lo bastante precisos como para que un software los reconozca tan rápido como un desarrollador experimentado, sin exigirle a este que haga la identificación manualmente cada vez.</p>

<h2>Deja que el Portapapeles Sugiera la Herramienta</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> lee tu portapapeles cuando lo abres y sugiere automáticamente la herramienta correspondiente. Copia un JWT y el decodificador ya está resaltado. Copia JSON y el formateador está a un clic. Copia un color hex y el convertidor de color está listo. El paso de reconocimiento ocurre al instante, incluso antes de que abras la barra lateral.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Detección de portapapeles de Bellows sugiriendo la herramienta de desarrollador correspondiente en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Menos Clics, Menos Fatiga de Decisión</h3>
<p>Eliminar el paso de "qué herramienta necesito" de una tarea repetitiva suena menor de forma aislada, pero a lo largo de docenas de interacciones diarias elimina una cantidad considerable de fricción, la misma fricción que de otro modo te empuja a dejar los datos sin formatear porque buscar la herramienta correcta parecía demasiado esfuerzo.</p>

<h3>Útil para Herramientas que Olvidas que Existen</h3>
<p>Con 41 herramientas disponibles, es fácil olvidar que un convertidor o generador específico existe siquiera. Las sugerencias basadas en el portapapeles hacen visible la herramienta relevante incluso cuando no se te habría ocurrido buscarla, lo cual suele ser más valioso que el tiempo ahorrado en las herramientas que ya usas a diario.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Consigue Bellows en la Mac App Store</a></p>
`,
  },

  "string-escape-unescape-mac": {
    slug: "string-escape-unescape-mac",
    title: "Escapar y Desescapar Cadenas para Mac — JSON, HTML, URL",
    description:
      "Incrustar un formato de cadena dentro de otro significa escapar comillas, barras y caracteres especiales correctamente, o ver cómo tu parser se atraganta.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Necesitas incrustar una cadena JSON dentro de otra cadena JSON, tal vez un mensaje de log que a su vez contiene una carga útil JSON. O estás escribiendo un comando de shell que incluye una cadena con comillas. O estás construyendo una URL que tiene que llevar otra URL como parámetro de consulta. Cada una de estas situaciones requiere escapar: convertir caracteres que de otro modo se interpretarían como sintaxis en una forma que se trate como dato literal.</p>

<p>Contextos distintos escapan de forma distinta. JSON escapa las comillas con una barra invertida y representa caracteres especiales como los saltos de línea como <code>\\n</code>. El escapado de shell depende de qué estilo de comillado estés usando. El escapado de URL codifica en porcentaje los caracteres reservados de una forma totalmente distinta a los otros dos. Mezclar todo esto —aplicar escapado JSON donde se necesitaba escapado de URL— produce una salida que parece casi correcta y falla de formas confusas.</p>

<h2>El Problema del Doble Escapado</h2>
<p>Uno de los bugs más comunes en este ámbito es el doble escapado: una cadena se escapa una vez en tu código y otra vez en una librería o framework que asume que sigue siendo la cadena original sin procesar, convirtiendo una sola barra invertida en dos y corrompiendo silenciosamente los datos. Diagnosticar esto requiere desescapar paso a paso para ver exactamente dónde se introdujo la capa extra, algo tedioso de hacer a mano, sobre todo en una cadena larga.</p>

<h2>Escapa y Desescapa para Múltiples Formatos</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye herramientas de escapado de cadenas que cubren los formatos JSON, HTML y URL entre sus 41 herramientas para desarrolladores. Pega una cadena sin procesar para verla correctamente escapada para un contexto dado, o pega una cadena escapada para ver el valor original sin procesar.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Herramienta de escapar y desescapar cadenas de Bellows en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Incrustar Cadenas Dentro de Cadenas</h3>
<p>Construir una carga útil JSON que a su vez contiene una cadena JSON como valor de un campo, o construir un mensaje de log que necesita incluir de forma segura una entrada arbitraria del usuario, ambos requieren un escapado correcto para no corromper la estructura externa.</p>

<h3>Diagnosticar Datos con Doble Escapado</h3>
<p>Cuando una cadena parece haber sido escapada más veces de las que debería, desescaparla capa por capa revela exactamente dónde se introdujo la codificación extra, que suele ser la forma más rápida de rastrear el código responsable.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Consigue Bellows en la Mac App Store</a></p>
`,
  },

  "mac-developer-utility-menu-bar": {
    slug: "mac-developer-utility-menu-bar",
    title: "Utilidad para Desarrolladores en Mac desde la Barra de Menú — Acceso Rápido a 41 Herramientas",
    description:
      "El Dock es para las apps que miras. La barra de menú es para las herramientas que usas y cierras en segundos, y la mayoría de las utilidades para desarrolladores pertenecen a la segunda categoría.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Piensa en cómo usas realmente un formateador de JSON o un generador de UUID. No lo abres, admiras la interfaz y te instalas para una sesión. Lo abres, haces una pequeña cosa y lo cierras: toda la interacción dura apenas unos segundos. Ese patrón de uso encaja mal con un icono del Dock, que implica una app a la que cambias y en la que pasas tiempo, y encaja mucho mejor con la barra de menú, construida precisamente para este tipo de interacción rápida, de entrada y salida.</p>

<p>Las apps basadas en el Dock también compiten por espacio con todo lo demás que tienes abierto: Cmd-Tab pasa por ellas, Mission Control agrupa sus ventanas, y encontrar la correcta entre una docena de apps abiertas exige un momento de búsqueda visual. Un icono en la barra de menú ocupa una ubicación fija y predecible que nunca queda enterrada.</p>

<h2>Por Qué la Ubicación Importa Más de lo que Parece</h2>
<p>El valor de una utilidad para desarrolladores es inversamente proporcional a la fricción que hay entre tú y su uso. Una herramienta que tarda diez segundos en abrirse cuesta más que esos diez segundos: cuesta el contexto mental que pierdes al salir de tu tarea actual para ir a buscarla. La ubicación en la barra de menú minimiza ese coste manteniendo la herramienta visualmente presente y a un clic en todo momento, sin ocupar espacio en pantalla ni en el Dock mientras no la usas.</p>

<h2>41 Herramientas, Un Solo Icono en la Barra de Menú</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> vive en tu barra de menú y te da acceso a 41 herramientas para desarrolladores —formateadores, codificadores, generadores, convertidores y herramientas de texto— sin necesitar nunca un icono en el Dock ni una ventana dedicada. Haz clic en el icono, elige una herramienta de la barra lateral, haz lo que necesites, y vuelve a apartarse de tu camino.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Icono de Bellows en la barra de menú ofreciendo acceso rápido a 41 herramientas para desarrolladores en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Cero Huella en el Dock</h3>
<p>Para los desarrolladores que mantienen un Dock reducido solo con las apps que usan en sesiones largas —un editor, un navegador, una terminal—, una utilidad de barra de menú encaja de forma natural con esa filosofía. Está ahí cuando la necesitas e invisible el resto del tiempo.</p>

<h3>Ventana Independiente Cuando la Necesitas</h3>
<p>Algunas tareas —probar varios patrones de regex seguidos, o convertir un lote de colores— se benefician de una ventana persistente en lugar de un desplegable de la barra de menú. Bellows admite ambos modos, de modo que las búsquedas rápidas se quedan en la barra de menú mientras que las sesiones más largas obtienen una ventana propia junto a tu editor.</p>

<h3>Los Recientes Mantienen tus Herramientas Habituales Arriba</h3>
<p>Con 41 herramientas disponibles, las que más usas no deberían requerir la misma búsqueda que las que usas rara vez. Las herramientas usadas recientemente aparecen automáticamente arriba, de modo que tus hábitos diarios dan forma a la interfaz con el tiempo, en lugar de al revés.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Consigue Bellows en la Mac App Store</a></p>
`,
  },
};
