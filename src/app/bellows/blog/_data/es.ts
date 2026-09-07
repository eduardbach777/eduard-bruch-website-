import type { ArticleSet } from "./index";

export const esArticles: ArticleSet = {
  "best-developer-tools-app-mac": {
    slug: "best-developer-tools-app-mac",
    title: "La Mejor App de Herramientas para Desarrolladores en Mac",
    description:
      "Cambiar entre pestañas del navegador, scripts de terminal y carpetas de marcadores para utilidades básicas de desarrollo te hace perder más tiempo que la programación en sí.",
    date: "2026-09-06",
    readTime: "5 min de lectura",
    content: `
<p>Necesitas decodificar un JWT, formatear un blob de JSON, generar un UUID y codificar un texto en Base64, todo en los próximos diez minutos. Así que abres cuatro pestañas del navegador, pegas datos sensibles en cuatro sitios web distintos y esperas que ninguno esté registrando tu portapapeles. Y mañana lo vuelves a hacer.</p>

<p>Los desarrolladores improvisan marcadores, alias de shell y scripts sueltos para manejar estas microtareas. Funciona, técnicamente. Pero cada cambio de contexto —salir de tu editor, buscar la pestaña correcta, esperar a que cargue una página— desgasta el enfoque que necesitas para el problema real que estás resolviendo.</p>

<h2>Lo Que macOS Te Ofrece de Serie</h2>
<p>macOS incluye Terminal, que cubre parte de esto si recuerdas los flags correctos. <code>uuidgen</code> te da un UUID. <code>echo -n "text" | base64</code> se encarga de la codificación. <code>python3 -m json.tool</code> formatea JSON. Pero no hay una interfaz unificada, ni forma de descubrir las herramientas, ni manera de manejar treinta operaciones distintas sin mantener tu propia chuleta de comandos.</p>

<p>Xcode incluye algunas utilidades escondidas en menús, pero abrir un IDE de 12 GB para decodificar una URL es como llevar un camión a la tienda de la esquina.</p>

<h2>Una Sola App para 41 Herramientas de Desarrollo</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> reúne 41 herramientas de desarrollo en una app nativa de macOS, accesible desde tu barra de menú o como ventana independiente. Las herramientas se organizan en cinco categorías: Formateadores, Codificadores, Generadores, Conversores y Herramientas de Texto. Una barra lateral te permite explorar o buscar, y la app recuerda tus herramientas usadas recientemente para que tus operaciones más habituales estén siempre a un clic.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows developer tools app for macOS showing 41 tools in a NavigationSplitView sidebar" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Detección del Portapapeles</h3>
<p>Copia un JWT a tu portapapeles y abre Bellows: te sugiere el decodificador de JWT. Copia una cadena JSON y te muestra el formateador de JSON. Esta pequeña función elimina por completo el paso de elegir una herramienta; la app lee el contenido de tu portapapeles y te dirige a la utilidad correcta.</p>

<h3>Totalmente Offline</h3>
<p>Cada herramienta se ejecuta localmente. Sin solicitudes de red, sin telemetría, sin pegar claves de API en un sitio web propiedad de alguien que nunca has oído nombrar. Para desarrolladores que trabajan con tokens, secretos o datos internos, esto no es un extra deseable: es un requisito.</p>

<h3>Acceso Desde la Barra de Menú</h3>
<p>Bellows vive en tu barra de menú, así que siempre está a un clic de distancia sin saturar tu Dock. Haz clic en el icono, elige una herramienta, pega tu entrada, obtén tu resultado. Toda la interacción dura segundos y nunca sales de tu espacio de trabajo actual.</p>

<h2>Para Quién Es Esto</h2>
<p>Ingenieros backend depurando respuestas de API. Desarrolladores frontend convirtiendo colores entre hex y RGB. Ingenieros de DevOps decodificando secretos en Base64. Desarrolladores móviles generando UUIDs para datos de prueba. Cualquiera que alguna vez haya pensado "tiene que haber una forma más rápida de hacer esto" mientras abre una pestaña del navegador.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Consigue Bellows en la Mac App Store</a></p>
`,
  },

  "json-formatter-mac-app": {
    slug: "json-formatter-mac-app",
    title: "Formateador de JSON para Mac — App Nativa, Funciona Sin Conexión",
    description:
      "Pegar JSON sin formato en una herramienta del navegador para leerlo es un flujo de trabajo que repites decenas de veces por semana sin cuestionarlo.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Una API devuelve una respuesta JSON de doscientas líneas comprimida en una sola. Necesitas encontrar un campo anidado. Así que la copias, abres una pestaña del navegador, navegas a uno de los muchos sitios formateadores de JSON, la pegas, haces clic en "Format" y entrecierras los ojos para ver el resultado. Si el JSON contiene algo sensible —tokens, datos de usuario, IDs internos— acabas de enviarlo a un servidor de terceros.</p>

<p>Esta es una de las microtareas más comunes en el desarrollo de software, y la mayoría de los desarrolladores la resuelven de la forma menos eficiente posible.</p>

<h2>El Enfoque de Terminal</h2>
<p>macOS incluye <code>python3</code>, así que puedes canalizar el JSON a través de <code>python3 -m json.tool</code> en Terminal. Funciona con entradas bien formadas. Pero falla con comas finales, da mensajes de error crípticos ante JSON malformado y el resultado queda atrapado en tu ventana de terminal. No hay resaltado de sintaxis, ni nodos colapsables, ni forma rápida de copiar una ruta anidada.</p>

<p>Algunos desarrolladores instalan <code>jq</code> vía Homebrew, que es más potente pero añade otra dependencia y exige aprender su sintaxis de consultas para cualquier cosa más allá del formateo básico.</p>

<h2>Un Formateador de JSON Nativo que Vive en Tu Mac</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye un formateador de JSON como una de sus 41 herramientas integradas para desarrolladores. Pega o escribe JSON en el panel de entrada y obtén al instante un resultado formateado y legible. No requiere conexión de red: todo se ejecuta localmente en tu Mac.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows JSON formatter tool showing formatted output on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Detección del Portapapeles</h3>
<p>Copia una cadena JSON a tu portapapeles y abre Bellows. La app detecta el contenido JSON y sugiere el formateador automáticamente. Sin navegar por menús: la herramienta que necesitas ya te está esperando.</p>

<h3>Parte de un Conjunto de Herramientas Más Amplio</h3>
<p>Formatear JSON rara vez ocurre de forma aislada. Puede que necesites decodificar una cadena Base64 para obtener el JSON, o extraer un payload de JWT que contiene JSON, o decodificar de URL un parámetro de consulta que contiene un objeto JSON. Con 41 herramientas en una sola app, puedes encadenar estas operaciones sin cambiar entre distintas utilidades.</p>

<h3>Cuando Más lo Necesitas</h3>
<p>Depurando un payload de webhook a las 11 de la noche. Revisando un archivo de configuración que un colega pegó en Slack. Inspeccionando una exportación de Core Data. Verificando la estructura de una respuesta simulada antes de escribir una prueba. Estos son los momentos en los que abrir una pestaña del navegador pesa más, y en los que una app nativa en tu barra de menú marca la mayor diferencia.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Consigue Bellows en la Mac App Store</a></p>
`,
  },

  "base64-encoder-decoder-mac": {
    slug: "base64-encoder-decoder-mac",
    title: "Codificador y Decodificador Base64 para Mac",
    description:
      "Decodificar cadenas Base64 mediante comandos de Terminal o herramientas web interrumpe tu flujo cada vez que encuentras un valor codificado en logs o configuraciones.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Estás revisando variables de entorno y encuentras un valor que parece un galimatías —<code>eyJhbGciOiJIUzI1NiJ9</code>. Sabes que es Base64, pero no puedes leerlo tal cual. Así que lo copias, abres Terminal, escribes <code>echo "..." | base64 --decode</code>, te das cuenta de que olvidaste el flag <code>-D</code> en macOS, lo intentas de nuevo y finalmente ves el resultado decodificado. Treinta segundos perdidos en algo que debería tomar dos.</p>

<p>La codificación Base64 aparece por todas partes: cabeceras de autenticación, adjuntos de correo, URIs de datos en CSS, secretos de Kubernetes, configuraciones de pipelines de CI/CD. Si trabajas con APIs o infraestructura, decodificas Base64 varias veces al día.</p>

<h2>Por Qué Terminal Se Queda Corto</h2>
<p>El comando <code>base64</code> integrado en macOS funciona pero tiene sus rarezas. El flag de decodificación es <code>-D</code> (mayúscula) en macOS frente a <code>-d</code> en Linux, lo que confunde a cualquiera que trabaje con ambos. La entrada multilínea requiere un entrecomillado cuidadoso. Y no hay retroalimentación visual: escribes un comando, recibes una cadena y esperas no haber truncado la entrada por accidente.</p>

<p>Las herramientas basadas en navegador resuelven el problema de usabilidad pero crean uno de seguridad. Los valores codificados en Base64 suelen ser secretos: claves de API, tokens, datos de certificados. Pegarlos en un sitio web anula el propósito de haberlos codificado en primer lugar.</p>

<h2>Codifica y Decodifica Localmente en Un Clic</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye un codificador y decodificador Base64 como parte de su kit de 41 herramientas para desarrolladores en macOS. Pega tu cadena codificada y ve el resultado decodificado al instante. Cambia de dirección para codificar texto plano a Base64. Todo ocurre en tu equipo: ningún dato sale de tu Mac.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Base64 encoder and decoder tool on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Casos de Uso Comunes</h3>
<p>Decodificar secretos de Kubernetes almacenados en Base64 dentro de manifiestos YAML. Inspeccionar el payload de un JWT (que está codificado en Base64url). Convertir una imagen en una URI de datos Base64 para incrustarla en HTML. Codificar credenciales para una cabecera de autenticación HTTP Basic. Cada una de estas tareas se resuelve con una sola interacción de pegar y leer, en lugar de un comando de Terminal o un viaje de ida y vuelta al navegador.</p>

<h3>Consciente del Portapapeles</h3>
<p>Copia una cadena Base64 y abre Bellows desde la barra de menú. La app detecta el contenido codificado en tu portapapeles y sugiere la herramienta Base64, así te ahorras el paso de navegar hasta ella manualmente.</p>

<h3>Sin Sobrecarga de Instalación</h3>
<p>A diferencia de las fórmulas de Homebrew o los scripts de Python que requieren mantenimiento, Bellows es una única instalación desde la Mac App Store con actualizaciones automáticas. Funciona de forma nativa tanto en Macs con Apple Silicon como con Intel, sin dependencias.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Consigue Bellows en la Mac App Store</a></p>
`,
  },

  "devtoys-alternative-mac": {
    slug: "devtoys-alternative-mac",
    title: "Alternativa a DevToys para Mac",
    description:
      "DevToys trajo la idea del kit de herramientas de desarrollo todo en uno a Windows, pero la versión de macOS nunca alcanzó la experiencia nativa que los usuarios de Mac esperan.",
    date: "2026-09-06",
    readTime: "5 min de lectura",
    content: `
<p>Si has usado DevToys en Windows, conoces el atractivo: una sola app que maneja formateo de JSON, Base64, decodificación de JWT, generación de hashes y otra docena de utilidades. Sin pestañas del navegador, sin comandos de CLI, sin cambios de contexto. Luego te pasaste a macOS y buscaste lo mismo.</p>

<p>La versión de macOS de DevToys existe, pero siempre se ha sentido más como un port que como una app nativa. La interfaz no sigue las convenciones de macOS, el rendimiento puede fallar en Apple Silicon y carga con el peso de un framework multiplataforma. Si elegiste un Mac por la calidad de su software, la diferencia se nota.</p>

<h2>Lo Que los Desarrolladores de Mac Realmente Quieren</h2>
<p>Los usuarios de macOS esperan apps que se sientan parte de la plataforma. Eso significa una barra lateral nativa, atajos de teclado estándar, soporte adecuado para el modo oscuro e integración con funciones del sistema como la barra de menú. No son preferencias cosméticas: afectan a la rapidez con la que puedes entrar, hacer la tarea y salir.</p>

<p>Una app de herramientas de desarrollo vive en los huecos entre sesiones de trabajo concentradas. Necesita abrirse al instante, aceptar entradas sin fricción y desaparecer cuando terminas. Cada milisegundo de retraso o confusión en la interfaz juega en contra de ese propósito.</p>

<h2>Una Alternativa Nativa de Mac con 41 Herramientas</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> está construida en Swift específicamente para macOS. Usa una barra lateral NavigationSplitView para organizar 41 herramientas en cinco categorías: Formateadores, Codificadores, Generadores, Conversores y Herramientas de Texto. Funciona tanto como app de barra de menú como ventana independiente, según cómo trabajes.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows as a native macOS DevToys alternative with NavigationSplitView sidebar" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Cómo se Compara con DevToys</h3>
<p>Ambas apps cubren el mismo terreno principal: formateo de JSON, codificación/decodificación, hashing, generación de UUID, conversión de colores. Donde Bellows se diferencia es en la integración con la plataforma. La detección del portapapeles sugiere la herramienta correcta según lo que acabas de copiar. El acceso desde la barra de menú significa que nunca necesitas usar Cmd-Tab para encontrar la app. El seguimiento de recientes muestra tus herramientas más usadas en la parte superior. Son detalles pequeños, pero se acumulan a lo largo de cientos de interacciones diarias.</p>

<h3>Totalmente Offline</h3>
<p>Al igual que DevToys, Bellows funciona completamente sin conexión. Ningún dato sale de tu equipo, no se requiere cuenta, sin telemetría. Para desarrolladores que trabajan con credenciales, tokens o datos propietarios, esto es lo mínimo esperable, pero vale la pena confirmarlo explícitamente.</p>

<h3>Rendimiento Nativo</h3>
<p>Como Bellows está construida con frameworks nativos de macOS en lugar de Electron o un kit multiplataforma, se abre al instante y usa memoria mínima. Se comporta como una utilidad del sistema, no como una app web disfrazada de nativa.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Consigue Bellows en la Mac App Store</a></p>
`,
  },

  "jwt-decoder-mac": {
    slug: "jwt-decoder-mac",
    title: "Decodificador de JWT para Mac — Pega e Inspecciona",
    description:
      "Pegar JWTs en jwt.io para leer sus claims funciona hasta que te das cuenta de que acabas de enviar un token válido a un sitio web de terceros.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Tomas un JWT de una cabecera de solicitud o un archivo de log. Es una cadena larga separada por puntos que no significa nada a simple vista. Necesitas comprobar el claim de expiración, verificar el emisor o ver qué scopes están incrustados. Así que abres jwt.io, pegas el token y lees el payload decodificado en el panel derecho.</p>

<p>Este flujo tiene un problema: acabas de enviar un token de autenticación activo a través de la red a un sitio web que no controlas. Los payloads de JWT suelen contener IDs de usuario, direcciones de correo, roles y permisos. El token en sí puede seguir siendo válido. Incluso si jwt.io es confiable, la política de seguridad de tu empresa podría no estar de acuerdo.</p>

<h2>Lo Que Realmente Contiene un JWT</h2>
<p>Un JSON Web Token tiene tres partes separadas por puntos: una cabecera (algoritmo y tipo), un payload (los claims: expiración, emisor, sujeto, datos personalizados) y una firma. La cabecera y el payload son solo JSON codificado en Base64url. No necesitas un servidor ni una librería especial para leerlos: necesitas un decodificador Base64 y un formateador JSON. Pero hacerlo manualmente en Terminal cada vez es tedioso.</p>

<h2>Decodifica JWTs Localmente en Tu Mac</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye un decodificador de JWT dedicado que divide el token en sus tres partes y muestra la cabecera y el payload decodificados como JSON formateado. Pega el token, ve los claims. Sin solicitud de red, sin servidor de terceros, sin riesgo de filtrar un token activo.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows JWT decoder showing decoded header and payload on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Consciente del Portapapeles</h3>
<p>Copia un JWT desde las herramientas de desarrollo de tu navegador, un archivo de log o un mensaje de Slack. Abre Bellows y detecta el formato del token en tu portapapeles, sugiriendo el decodificador de JWT de inmediato. El payload decodificado aparece en un solo paso.</p>

<h3>Comprueba la Expiración de un Vistazo</h3>
<p>El motivo más común para decodificar un JWT es comprobar si ha expirado. El claim <code>exp</code> es una marca de tiempo Unix: fácil para las máquinas, sin sentido para los humanos. Ver el payload decodificado te permite leer rápidamente la expiración junto a otros claims como <code>iss</code>, <code>sub</code> y <code>aud</code> sin convertir marcas de tiempo mentalmente.</p>

<h3>Parte de un Kit Más Amplio</h3>
<p>Decodificar un JWT suele llevar a tareas relacionadas: decodificar un valor Base64 dentro de un claim, generar el hash de una cadena para compararla con una huella digital, o decodificar de URL un URI de redirección almacenado en el payload. Con 41 herramientas disponibles en la misma app, estas tareas adicionales no requieren cambiar a otra utilidad.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Consigue Bellows en la Mac App Store</a></p>
`,
  },

  "url-encoder-decoder-mac": {
    slug: "url-encoder-decoder-mac",
    title: "Codificador y Decodificador de URL para Mac",
    description:
      "Leer URLs codificadas con porcentajes llenas de %20 y %3D es como leer una frase donde cada espacio se reemplaza por un número.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Sacas una URL de los logs del servidor y se ve así: <code>https://example.com/search?q=hello%20world&redirect=https%3A%2F%2Fother.com%2Fpath</code>. Necesitas leer los parámetros de consulta, pero la codificación de porcentajes lo hace casi imposible a simple vista. Así que la pegas en una herramienta del navegador, la decodificas, lees el resultado y luego vuelves a codificar una versión modificada para probar algo. Dos viajes a un sitio web para lo que debería ser una operación trivial.</p>

<p>La codificación de URL es una de esas cosas con las que los desarrolladores lidian constantemente pero en las que rara vez piensan, hasta que una redirección rota, una cadena de consulta malformada o un parámetro doblemente codificado convierten una tarea de cinco minutos en una sesión de depuración de una hora.</p>

<h2>Cuando la Codificación de URL Causa Problemas Reales</h2>
<p>La doble codificación es la trampa clásica. Una URL se codifica una vez en tu aplicación y otra vez en una capa de middleware, convirtiendo <code>%20</code> en <code>%2520</code>. Para diagnosticar esto, necesitas decodificar la URL paso a paso y ver exactamente dónde se coló la codificación extra. Hacer esto en Terminal con <code>python3 -c "import urllib.parse; print(urllib.parse.unquote('...'))"</code> funciona, pero es lento y propenso a errores en URLs largas.</p>

<p>Los errores de codificación también rompen flujos de OAuth, URLs de webhooks y callbacks de API donde el URI de redirección debe coincidir exactamente. Poder codificar y decodificar rápidamente te permite comparar lo que tu app envía frente a lo que el servidor espera.</p>

<h2>Codifica y Decodifica URLs al Instante</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye un codificador y decodificador de URL entre sus 41 herramientas de desarrollo. Pega una URL codificada para ver la versión legible. Escribe una URL simple para obtener el resultado correctamente codificado. Cambia entre codificar y decodificar con un clic, y el resultado se actualiza en tiempo real.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows URL encoder and decoder tool on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Depurando Redirecciones</h3>
<p>Los flujos de OAuth y SSO pasan URIs de redirección como parámetros de consulta codificados en URL. Cuando una redirección falla, el primer paso es decodificar la URL para verificar que el destino coincide con tu callback registrado. Tener una herramienta local significa que puedes hacerlo sin salir de tu IDE ni pegar URLs de callback potencialmente sensibles en un sitio web público.</p>

<h3>Trabajando con Cadenas de Consulta</h3>
<p>Las APIs que aceptan filtros complejos o consultas de búsqueda a través de parámetros de URL suelen requerir una codificación cuidadosa de caracteres especiales como <code>&</code>, <code>=</code>, <code>+</code> y espacios. Un codificador dedicado garantiza que obtengas el resultado correcto sin adivinar qué caracteres necesitan escaparse en tu contexto específico.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Consigue Bellows en la Mac App Store</a></p>
`,
  },

  "hash-generator-mac-app": {
    slug: "hash-generator-mac-app",
    title: "Generador de Hashes para Mac — MD5, SHA-256 y Más",
    description:
      "Verificar la integridad de un archivo o generar hashes de contraseñas mediante comandos de Terminal significa recordar flags distintos para cada algoritmo cada vez.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Descargas un binario de GitHub y la página de lanzamiento indica un checksum SHA-256. Para verificarlo, abres Terminal, escribes <code>shasum -a 256 ~/Downloads/file.tar.gz</code>, esperas a que lo calcule y luego comparas manualmente dos cadenas hexadecimales de 64 caracteres una junto a la otra. Un carácter equivocado y no sabrás si el archivo está corrupto o simplemente leíste mal el hash.</p>

<p>O necesitas generar un hash MD5 de una cadena, quizás para una clave de caché, una URL de Gravatar o una API antigua que aún usa firmas MD5. El comando es <code>md5 -s "text"</code> en macOS pero <code>md5sum</code> en Linux. Pequeñas diferencias, pero suficientes para ralentizarte cuando cambias entre sistemas.</p>

<h2>Hashing en Terminal: Funciona, a Duras Penas</h2>
<p>macOS incluye <code>md5</code>, <code>shasum</code> y <code>openssl dgst</code>, cubriendo la mayoría de los algoritmos. Pero cada herramienta tiene su propia sintaxis. <code>md5</code> usa <code>-s</code> para la entrada de texto. <code>shasum</code> usa <code>-a</code> para seleccionar el algoritmo. <code>openssl dgst</code> requiere <code>-sha256</code> o <code>-md5</code> como flag. No hay un único comando que te permita elegir un algoritmo y generar el hash de una cadena sin consultar el manual.</p>

<p>Para desarrolladores que ocasionalmente necesitan un hash rápido, el esfuerzo mental de recordar estas variaciones es desproporcionado respecto a la simplicidad de la tarea.</p>

<h2>Genera Hashes con Solo Pegar</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye un generador de hashes compatible con MD5, SHA-1, SHA-256, SHA-384, SHA-512 y otros algoritmos comunes. Escribe o pega tu entrada, selecciona un algoritmo y el hash aparece al instante. Sin flags que recordar, sin sintaxis que consultar.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows hash generator showing MD5 and SHA-256 output on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Verificando Descargas</h3>
<p>Cuando una página de lanzamiento proporciona un checksum, quieres compararlo con el archivo que descargaste. Generar el hash en una herramienta visual facilita la comparación mucho más que comparar a ojo dos cadenas en una ventana de terminal, especialmente con hashes SHA-256 de 64 caracteres.</p>

<h3>Firmas de API y Claves de Caché</h3>
<p>Algunas APIs requieren firmas HMAC o basadas en hash para autenticar solicitudes. Otras usan hashes MD5 o SHA como claves de caché o identificadores de contenido. Poder generar rápidamente el hash del cuerpo de una solicitud o de una cadena te permite verificar tu implementación contra los valores esperados durante la depuración.</p>

<h3>Offline y Privado</h3>
<p>La entrada que estás hasheando podría contener datos sensibles: contraseñas, secretos de API, identificadores internos. Bellows funciona completamente en tu Mac sin acceso a la red, así que nada de lo que hasheas sale nunca de tu equipo.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Consigue Bellows en la Mac App Store</a></p>
`,
  },

  "regex-tester-mac-app": {
    slug: "regex-tester-mac-app",
    title: "Probador de Expresiones Regulares para Mac — Nativo y Offline",
    description:
      "Escribir expresiones regulares sin retroalimentación en vivo es como editar código sin resaltado de sintaxis: técnicamente posible, pero innecesariamente doloroso.",
    date: "2026-09-06",
    readTime: "5 min de lectura",
    content: `
<p>Necesitas una expresión regular para validar direcciones de correo, extraer marcas de tiempo de líneas de log o analizar un campo CSV que a veces contiene comas entre comillas. Escribes un patrón, lo pruebas contra una cadena de ejemplo en tu código, descubres que falla en un caso límite, lo ajustas, recompilas, vuelves a probar. Cada iteración toma 30 segundos de compilar-ejecutar-revisar, y la mayoría de los patrones de regex necesitan cinco o seis iteraciones antes de funcionar de forma confiable.</p>

<p>La alternativa es regex101.com, una excelente herramienta que muestra coincidencias en tiempo real, explica cada parte del patrón y te permite probar contra múltiples entradas a la vez. Pero funciona en un navegador, lo que significa que estás pegando tus datos de prueba (líneas de log, registros de usuarios, respuestas de API) en un sitio web público. Y necesitas conexión a internet.</p>

<h2>Por Qué la Retroalimentación en Vivo Importa para Regex</h2>
<p>Las expresiones regulares son densas por naturaleza. La diferencia entre <code>.*</code> y <code>.*?</code> (codicioso versus perezoso) puede cambiar si tu patrón coincide con una línea o con un archivo entero. Los lookaheads, las clases de caracteres y los grupos de captura interactúan de formas difíciles de razonar mentalmente. Ver las coincidencias resaltadas mientras escribes el patrón transforma el regex de una conjetura a un proceso visual e iterativo.</p>

<p>Por eso los probadores basados en navegador son tan populares: ofrecen el ciclo de retroalimentación que escribir regex directamente en el código fuente no ofrece. El problema es que requieren un navegador, una conexión a internet y confianza en que tus datos de prueba permanecen privados.</p>

<h2>Prueba Expresiones Regulares Localmente en Tu Mac</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye un probador de regex como una de sus 41 herramientas de desarrollo. Escribe tu patrón, pega tu cadena de prueba y ve las coincidencias resaltadas en tiempo real. Ajusta el patrón y los resultados se actualizan al instante: sin paso de compilación, sin recargar la página, sin solicitud de red.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows regex tester with live match highlighting on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Patrones Comunes Simplificados</h3>
<p>Extraer fechas de archivos de log (<code>\\d{4}-\\d{2}-\\d{2}</code>). Validar números de teléfono con códigos de país opcionales. Encontrar URLs en texto libre. Analizar datos estructurados como CSV o TSV donde los campos pueden estar entre comillas. Estos patrones son simples en concepto pero complicados en los casos límite, y un probador en vivo te permite detectar esos límites antes de que lleguen a producción.</p>

<h3>Ningún Dato Sale de Tu Mac</h3>
<p>Si tus datos de prueba incluyen logs del servidor, información de usuarios o salidas de sistemas internos, probar patrones de regex sin conexión no es solo cómodo: es la opción responsable. Bellows funciona completamente en tu equipo sin acceso a la red.</p>

<h3>Siempre Disponible</h3>
<p>Bellows se aloja en tu barra de menú, así que el probador de regex está a un clic. Sin pestaña que buscar, sin URL que recordar, sin spinner de carga. Ábrelo, prueba tu patrón, copia el resultado, ciérralo. Toda la interacción dura segundos.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Consigue Bellows en la Mac App Store</a></p>
`,
  },

  "color-picker-hex-rgb-mac": {
    slug: "color-picker-hex-rgb-mac",
    title: "Selector de Color con Hex y RGB para Mac",
    description:
      "Convertir a mano entre códigos hex, valores RGB y notación HSL es propenso a errores e innecesario cuando lo haces varias veces al día.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Un diseñador te envía un color en hex: <code>#1A73E8</code>. Tu framework de CSS quiere HSL. Tu código base de iOS necesita valores RGB entre 0 y 1. Tu proyecto de Android usa enteros ARGB. Un color, cuatro formatos, y estás abriendo una pestaña del navegador para convertirlos entre sí, otra vez.</p>

<p>La conversión de color es matemática trivial (de hex a RGB es solo pasar de base 16 a decimal), pero hacerlo mentalmente para tres canales mientras intentas mantener el foco en el layout o los estilos es una distracción que no necesitas.</p>

<h2>Lo Que Ofrece macOS</h2>
<p>macOS tiene un selector de color integrado accesible desde algunas apps a través del panel de color del sistema. Muestra deslizadores RGB y un campo hex, pero está diseñado para elegir colores visualmente, no para convertir entre formatos de forma programática. No hay una manera fácil de pegar un código hex y obtener el equivalente HSL, o de introducir enteros RGB y copiar el resultado en hex. Y está oculto dentro de apps específicas en lugar de estar disponible en todo el sistema.</p>

<h2>Convierte Colores Instantáneamente Entre Formatos</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye un conversor de color entre sus 41 herramientas de desarrollo. Introduce un color en cualquier formato compatible —hex, RGB, HSL— y ve los valores equivalentes en todos los demás formatos. Copia la representación que necesites con un clic.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows color picker showing hex, RGB, and HSL conversion on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Del Diseño al Código</h3>
<p>Figma exporta colores en hex. Tailwind CSS usa valores de color personalizados. SwiftUI quiere <code>Color(red:green:blue:)</code> con valores decimales. Android XML usa <code>#AARRGGBB</code>. Tener todos los formatos visibles a la vez elimina el cálculo mental y los viajes de ida y vuelta a sitios de conversión.</p>

<h3>Comprobando Contraste y Legibilidad</h3>
<p>Cuando puedes ver el color renderizado junto a sus valores numéricos, puedes verificar rápidamente si un color de texto será legible sobre un fondo. Esto es más rápido que cambiar a un verificador de contraste separado para cada par de colores en tu hoja de estilos.</p>

<h3>Acceso Desde la Barra de Menú</h3>
<p>¿Necesitas una conversión rápida mientras escribes CSS? Haz clic en el icono de Bellows en tu barra de menú, selecciona la herramienta de color, pega el código hex y copia el valor RGB. Toda la interacción toma menos de cinco segundos y nunca sales de tu editor.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Consigue Bellows en la Mac App Store</a></p>
`,
  },

  "uuid-generator-mac": {
    slug: "uuid-generator-mac",
    title: "Generador de UUID para Mac — Copia Instantánea",
    description:
      "Generar UUIDs mediante Terminal o fragmentos de código añade fricción a una tarea que debería ser completamente automática.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Necesitas un UUID. Quizás estás escribiendo una prueba unitaria y necesitas un identificador único para un objeto simulado. Quizás estás poblando una base de datos y necesitas claves primarias. Quizás estás creando una nueva entidad en un archivo de configuración y el esquema exige un UUID. Sea cual sea el motivo, tienes que detener lo que estás haciendo, generar el UUID en algún lugar, copiarlo y volver a pegarlo en tu código.</p>

<p>Esto ocurre con la frecuencia suficiente como para que la mayoría de los desarrolladores tenga una solución automática: <code>uuidgen</code> en Terminal, un marcador del navegador o un fragmento en su editor. Cada una funciona. Ninguna es realmente fluida.</p>

<h2>El Camino de Terminal</h2>
<p>macOS incluye <code>uuidgen</code>, que imprime un UUID v4 en stdout. Es rápido y confiable. Pero muestra el resultado en mayúsculas por defecto (algunos sistemas esperan minúsculas), genera un UUID a la vez, y usarlo implica cambiar a Terminal, ejecutar el comando, seleccionar el resultado, copiarlo y volver. Para un solo UUID, está bien. Para diez UUIDs con los que poblar una base de datos de prueba, se vuelve tedioso.</p>

<h2>Genera UUIDs Desde Tu Barra de Menú</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye un generador de UUID como una de sus 41 herramientas de desarrollo. Ábrelo desde la barra de menú, genera un UUID y cópialo a tu portapapeles. ¿Necesitas otro? Genera de nuevo. La herramienta siempre está a un clic, funciona sin conexión y produce UUIDs v4 estándar listos para pegar en código, configuraciones o archivos semilla de bases de datos.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows UUID generator with instant copy on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Pruebas y Datos Simulados</h3>
<p>Las pruebas unitarias y de integración a menudo necesitan identificadores únicos que parezcan realistas. Codificar el mismo UUID en todas partes provoca errores sutiles cuando las pruebas se ejecutan en paralelo o cuando una prueba depende accidentalmente de un ID específico. Generar UUIDs nuevos para cada fixture de prueba es un hábito sencillo que previene toda una categoría de fallos intermitentes.</p>

<h3>Poblado de Bases de Datos</h3>
<p>Al poblar una base de datos de desarrollo con datos de muestra, necesitas claves primarias únicas que no choquen con datos de producción o con los archivos semilla de otros desarrolladores. Generar UUIDs bajo demanda es más limpio que incrementar enteros o usar patrones predecibles que podrían superponerse.</p>

<h3>Siempre Disponible</h3>
<p>Como Bellows vive en tu barra de menú, el generador de UUID es accesible sin abrir Terminal, cambiar de app o navegar hasta un marcador. Clic, genera, copia, pega. La interrupción a tu flujo de trabajo se mide en segundos, no en cambios de contexto.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Consigue Bellows en la Mac App Store</a></p>
`,
  },

  "all-in-one-dev-tools-mac-offline": {
    slug: "all-in-one-dev-tools-mac-offline",
    title: "Herramientas de Desarrollo Todo en Uno para Mac — 41 Herramientas, Totalmente Offline",
    description:
      "Pestañas del navegador para codificar, ventanas de Terminal para hashear, marcadores para formatear: las microtareas de desarrollo están dispersas en una decena de lugares.",
    date: "2026-09-06",
    readTime: "5 min de lectura",
    content: `
<p>Cuenta las herramientas que usas en una sesión de depuración típica. Un formateador de JSON para leer una respuesta de API. Un decodificador Base64 para una cabecera de autenticación. Un inspector de JWT para revisar los claims de un token. Un decodificador de URL para desenredar una cadena de redirecciones. Un generador de hashes para verificar un checksum. Eso son cinco pestañas del navegador abiertas, cinco sitios web que ahora tienen tus datos, y cinco cambios de contexto que te alejaron del problema real.</p>

<p>Estas no son tareas complejas. Cada una toma diez segundos de trabajo real. Pero la sobrecarga de encontrar la herramienta correcta, cambiar a ella, pegar la entrada y copiar la salida suma minutos por sesión y horas por semana. Peor aún, fragmenta tu atención justo en los momentos en que necesitas mantener un sistema complejo en tu cabeza.</p>

<h2>El Panorama Actual</h2>
<p>Los desarrolladores han ensamblado kits de herramientas personales a partir de una mezcla de fuentes. Marcadores del navegador a sitios como jwt.io, regex101.com y jsonformatter.org. Alias y funciones de shell en <code>.zshrc</code>. Extensiones de VS Code que añaden formateo o codificación. Paquetes de Homebrew como <code>jq</code> y <code>htop</code>. Cada herramienta se añadió para resolver un problema, y ninguna se comunica con las demás.</p>

<p>El resultado es una cadena de herramientas que técnicamente funciona pero carece de coherencia. No puedes predecir dónde vivirá la próxima utilidad. No puedes encadenar operaciones sin copiar manualmente el resultado de una herramienta y pegarlo en otra. Y no puedes garantizar que ninguna de las herramientas web esté manteniendo tus datos privados.</p>

<h2>41 Herramientas en Una App Nativa de macOS</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> consolida 41 herramientas de desarrollo en una única aplicación de macOS organizada en cinco categorías:</p>

<ul>
<li><strong>Formateadores</strong> — JSON, XML, SQL, HTML y más. Pega una entrada desordenada, obtén un resultado limpio.</li>
<li><strong>Codificadores</strong> — Base64, codificación de URL, entidades HTML, decodificación de JWT. Codifica y decodifica en ambas direcciones.</li>
<li><strong>Generadores</strong> — UUIDs, hashes (MD5, SHA-256, SHA-512), Lorem Ipsum, contraseñas. Genera y copia en un solo paso.</li>
<li><strong>Conversores</strong> — Colores (hex/RGB/HSL), bases numéricas, marcas de tiempo, unidades. Convierte entre formatos sin cálculo mental.</li>
<li><strong>Herramientas de Texto</strong> — Probador de regex, comparador de diferencias, conversor de mayúsculas/minúsculas, ordenador de líneas, contador de caracteres. Las utilidades de manipulación de texto a las que recurres a diario.</li>
</ul>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows showing all 41 developer tools organized in categories on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Detección del Portapapeles</h3>
<p>Copia algo a tu portapapeles y abre Bellows. La app analiza el contenido del portapapeles y sugiere la herramienta más relevante. Copia un JWT y te ofrece el decodificador. Copia JSON y te muestra el formateador. Copia una cadena Base64 y te dirige al codificador. Esto elimina el paso de elegir una herramienta: la app lo hace por ti.</p>

<h3>Modo Barra de Menú y Ventana</h3>
<p>Bellows funciona como app de barra de menú para operaciones rápidas y puntuales: haz clic en el icono, usa una herramienta, ciérrala. Para sesiones más largas —como probar una serie de patrones de regex o convertir múltiples valores de color— cambia al modo ventana y mantenla junto a tu editor. Ambos modos usan la misma interfaz con una barra lateral NavigationSplitView para navegar por categorías.</p>

<h3>Totalmente Offline</h3>
<p>Cada herramienta funciona localmente en tu Mac. Sin solicitudes de red, sin cuentas, sin telemetría. Esto no es una postura filosófica: es un requisito práctico para desarrolladores que trabajan a diario con tokens, secretos, credenciales y datos propietarios. Tu entrada permanece en tu equipo.</p>

<h3>Seguimiento de Recientes</h3>
<p>Las herramientas que más usas aparecen en la parte superior de la barra lateral. Con el tiempo, Bellows se adapta a tu flujo de trabajo para que las herramientas que necesitas estén siempre a mano, no escondidas en una categoría que tienes que desplegar.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Consigue Bellows en la Mac App Store</a></p>
`,
  },

  "json-validator-mac-app": {
    slug: "json-validator-mac-app",
    title: "Validador de JSON para Mac — Encuentra Errores al Instante",
    description:
      "Una coma faltante o un corchete suelto puede romper todo un archivo de configuración, y encontrarlo escaneando línea por línea te hace perder un tiempo que no tienes.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Tu build falla con "Unexpected token in JSON at position 4,821." Genial, gracias. Ahora te toca desplazarte por un archivo de configuración de cuatro mil caracteres contando llaves mentalmente, tratando de averiguar cuál no tiene su pareja. Este es uno de los mayores desperdicios de tiempo evitables en el desarrollo de software, y ocurre constantemente porque JSON tiene cero tolerancia a los pequeños errores.</p>

<p>Una coma final después del último elemento de un array. Una comilla faltante alrededor de una clave. Una llave de cierre extra copiada de otro lugar. Cualquiera de estos rompe el análisis por completo, y el mensaje de error rara vez señala el problema real: apunta al lugar donde el parser se rindió, que a menudo está varias líneas lejos del error de verdad.</p>

<h2>Por Qué los Números de Posición No Ayudan</h2>
<p>La mayoría de los parsers de JSON reportan errores como un desplazamiento de caracteres, no como una línea y columna a la que puedas saltar en tu editor. Convertir la posición 4.821 en "línea 112, cerca del tercer objeto" requiere contar manualmente o escribir un script desechable. Ninguna de las dos opciones es un buen uso de tu tarde.</p>

<p>Algunos editores resaltan errores de sintaxis JSON en línea, lo que ayuda para archivos que estás escribiendo activamente. Pero para JSON que recibiste de una API, un colega o una configuración antigua que heredaste, necesitas una herramienta que tome el texto sin procesar y te diga exactamente qué está mal y dónde.</p>

<h2>Valida JSON Sin Salir de Tu Mac</h2>
<p>Un formateador de JSON que también valida te ahorra las conjeturas. Pega el JSON, y si está malformado, obtienes un error claro que señala la línea y el carácter específicos en lugar de un desplazamiento de bytes crudo. Si es válido, se renderiza limpiamente con la indentación adecuada para que puedas escanear visualmente la estructura. <a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> maneja ambos casos en la misma herramienta: no necesitas saber de antemano si tu JSON está roto.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows JSON formatter validating and highlighting a syntax error on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Detectando Errores Antes de Publicar</h3>
<p>Los archivos de configuración, los cuerpos de solicitudes de API y los datos de fixtures dependen todos de un JSON válido. Ejecutar una validación rápida antes de confirmar un cambio de configuración o enviar una solicitud de prueba detecta el tipo de error tipográfico que de otro modo aparecería como un confuso error en tiempo de ejecución mucho más adelante en el pipeline.</p>

<h3>Trabajando con Entradas No Confiables</h3>
<p>Cuando un colega te pega un blob de JSON en Slack, o extraes uno de una API de terceros en la que no confías del todo, validarlo localmente significa que nunca tienes que enviar esos datos a un sitio web externo solo para comprobar si se puede analizar.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Consigue Bellows en la Mac App Store</a></p>
`,
  },

  "html-entity-encoder-mac": {
    slug: "html-entity-encoder-mac",
    title: "Codificador y Decodificador de Entidades HTML para Mac",
    description:
      "Renderizar de forma segura texto enviado por usuarios, o leer un código fuente lleno de &amp; y &lt;, se reduce al mismo tedioso problema de conversión.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Estás depurando por qué un fragmento de texto en una página web aparece como <code>&amp;amp;</code> en lugar de un simple ampersand. O estás escribiendo HTML a mano y necesitas escapar un signo de menor que para que el navegador no lo interprete como el inicio de una etiqueta. En cualquier caso, estás lidiando con entidades HTML: el pequeño conjunto de caracteres que necesitan una codificación especial para mostrarse correctamente o evitar romper el marcado.</p>

<p>Las más comunes son fáciles de recordar: <code>&amp;</code> se convierte en <code>&amp;amp;</code>, <code>&lt;</code> se convierte en <code>&amp;lt;</code>, <code>&gt;</code> se convierte en <code>&amp;gt;</code>. Pero en cuanto entras en comillas tipográficas, guiones largos, espacios de no separación y caracteres acentuados, los nombres de las entidades dejan de ser intuitivos y terminas buscando una tabla de referencia cada vez.</p>

<h2>Un Ángulo de Seguridad, No Solo de Formato</h2>
<p>La codificación de entidades HTML no es puramente estética. No codificar el contenido enviado por usuarios antes de renderizarlo en una página web es un vector clásico de cross-site scripting. Si tu aplicación alguna vez necesita mostrar texto sin procesar —comentarios, nombres de usuario, entradas de formulario— dentro de HTML, entender exactamente qué se codifica y cómo forma parte de escribir código seguro, no solo un resultado con buen aspecto.</p>

<p>Por el contrario, decodificar es una necesidad igual de común: extraer datos de una página web, analizar un feed RSS o leer un documento exportado de un CMS a menudo te deja con texto codificado en entidades que necesita convertirse de nuevo a caracteres normales antes de poder usarlo en cualquier otro lugar.</p>

<h2>Codifica y Decodifica en Un Solo Paso</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye un codificador y decodificador de entidades HTML entre sus 41 herramientas de desarrollo. Pega texto sin procesar para obtener entidades HTML correctamente escapadas, o pega marcado codificado para ver el texto legible. Ambas direcciones ocurren al instante y completamente sin conexión.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows HTML entity encoder and decoder tool on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Limpiando Contenido Extraído</h3>
<p>El texto extraído de feeds RSS, publicaciones de blog exportadas o HTML raspado suele llegar lleno de códigos de entidad donde debería haber puntuación normal. Decodificarlo en bloque antes de almacenarlo o mostrarlo en otro lugar evita una página llena de <code>&amp;#8217;</code> perdidos donde debería haber un apóstrofo.</p>

<h3>Escribiendo Marcado a Mano</h3>
<p>Cuando editas manualmente una plantilla HTML o un boletín por correo y necesitas incluir un corchete angular o un ampersand literal en el texto visible, codificarlo correctamente desde el principio te ahorra un error de renderizado que solo aparece después de que ya enviaste el correo.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Consigue Bellows en la Mac App Store</a></p>
`,
  },

  "timestamp-converter-mac": {
    slug: "timestamp-converter-mac",
    title: "Conversor de Marcas de Tiempo Unix para Mac",
    description:
      "Una línea de log dice 1743984000 y necesitas saber si eso fue hace tres horas o hace tres semanas, sin hacer el cálculo a mano.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Las marcas de tiempo Unix son perfectas para las máquinas e inútiles para los humanos. Cada agregador de logs, registro de base de datos y respuesta de API parece almacenar el tiempo como un entero sin procesar que cuenta segundos desde el 1 de enero de 1970, y todo desarrollador ha intentado, en algún momento, calcular a ojo si <code>1725580800</code> es reciente o antiguo.</p>

<p>El recurso habitual es una búsqueda rápida en Google —"1725580800 to date"— que funciona pero añade un viaje al navegador para algo que debería ser una consulta de dos segundos. O escribes una línea en una consola de algún lenguaje: <code>new Date(1725580800000)</code> en la consola JS de un navegador, recordando multiplicar por 1000 para los milisegundos y esperando no haber confundido segundos con milisegundos desde el principio.</p>

<h2>Segundos vs. Milisegundos: La Trampa Clásica</h2>
<p>El tiempo Unix típicamente se mide en segundos, pero el objeto <code>Date</code> de JavaScript espera milisegundos, y algunas APIs (particularmente las construidas sobre JavaScript) devuelven marcas de tiempo en milisegundos por defecto. Confundir esto te da una fecha que está descabelladamente en el futuro o atascada cerca de la época de 1970, un error que todo desarrollador ha cometido al menos una vez mientras depuraba un problema de "por qué esta fecha se ve mal".</p>

<p>Las zonas horarias añaden otra capa. Una marca de tiempo se convierte en un instante específico, pero mostrarlo en tu hora local versus UTC versus la zona horaria del servidor puede hacer que el mismo valor parezca tres horas completamente distintas, lo cual importa mucho cuando intentas correlacionar un error con un despliegue.</p>

<h2>Convierte en Ambas Direcciones al Instante</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye un conversor de marcas de tiempo que transforma una marca de tiempo Unix en una fecha y hora legibles, y convierte una fecha de vuelta en una marca de tiempo: ambas direcciones, sin necesidad de cálculos. Maneja la ambigüedad entre segundos y milisegundos para que no tengas que adivinar.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Unix timestamp converter showing date and time output on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Depurando Logs y Bases de Datos</h3>
<p>Los agregadores de logs, las filas de bases de datos y los payloads de API almacenan el tiempo como números crudos mucho más a menudo que como cadenas legibles. Convertir un puñado de marcas de tiempo mientras rastreas un incidente es una tarea pequeña que ocurre decenas de veces durante cualquier sesión de depuración seria.</p>

<h3>Lógica de Programación y Expiración</h3>
<p>La expiración de caché, la expiración de tokens y las marcas de tiempo de trabajos programados son todas tiempo Unix por debajo. Comprobar rápidamente a qué corresponde un valor de expiración dado en tiempo real te ayuda a verificar que tu lógica de TTL hace lo que crees que hace.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Consigue Bellows en la Mac App Store</a></p>
`,
  },

  "markdown-preview-mac-app": {
    slug: "markdown-preview-mac-app",
    title: "Vista Previa de Markdown para Mac — Pega y Observa",
    description:
      "Escribir un README o la descripción de un pull request en Markdown sin procesar significa adivinar cómo se van a renderizar realmente los encabezados, listas y bloques de código.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Escribes un README con listas anidadas, un par de bloques de código y una tabla comparando dos enfoques. Se ve bien como texto plano en tu editor. Luego lo subes a GitHub y la tabla está desalineada, uno de tus bloques de código no se cerró correctamente, y una lista numerada se reinició en 1 a mitad de camino debido a una línea en blanco suelta. Ahora estás subiendo pequeños commits de corrección solo para arreglar el formato.</p>

<p>Markdown es lo bastante simple como para escribirlo de memoria para el formato básico, pero las tablas, las listas anidadas y los bloques de código tienen pequeñas peculiaridades de sintaxis que varían ligeramente entre renderizadores. GitHub Flavored Markdown no es idéntico a CommonMark, que no es idéntico a lo que sea que use tu generador de sitios estáticos. La brecha entre "se ve bien en mi cabeza" y "se renderiza bien en la página" es exactamente donde una vista previa en vivo demuestra su valor.</p>

<h2>Por Qué Confirmar Cambios Solo para Verificar Es Mal Flujo de Trabajo</h2>
<p>Subir un commit solo para ver cómo se renderiza un README, luego subir otro para arreglar una tabla rota, y luego otro para arreglar el arreglo, llena tu historial de commits con ruido de formato que no tiene nada que ver con el contenido real. También significa que cada ciclo de vista previa toma tanto tiempo como un push y una recarga de página: lo bastante lento como para que dejes de molestarte en revisar y simplemente esperes que se vea bien.</p>

<h2>Ve el Resultado Renderizado Mientras Escribes</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye una herramienta de vista previa de Markdown que renderiza el resultado formateado mientras pegas o escribes Markdown sin procesar. Encabezados, listas, tablas, enlaces y bloques de código se renderizan de inmediato, para que puedas detectar errores de formato antes de que terminen en un commit.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Markdown preview tool rendering formatted text on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Escribiendo READMEs y Descripciones de PR</h3>
<p>Las descripciones de pull requests y los archivos README suelen ser lo primero que lee un revisor o un nuevo colaborador. Comprobar que los encabezados, las listas de verificación y las imágenes enlazadas se renderizan correctamente antes de enviarlo te ahorra una ronda de comentarios de "puedes arreglar el formato".</p>

<h3>Redactando Documentación Sin Conexión</h3>
<p>Escribir documentación en un vuelo o en una zona con internet poco fiable no significa renunciar a ver tu formato correctamente renderizado. Una herramienta de vista previa local funciona igual estés conectado o no.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Consigue Bellows en la Mac App Store</a></p>
`,
  },

  "lorem-ipsum-generator-mac": {
    slug: "lorem-ipsum-generator-mac",
    title: "Generador de Lorem Ipsum para Mac — Copia Cualquier Longitud",
    description:
      "Rellenar una maqueta de diseño o un fixture de prueba con texto de relleno no debería requerir un viaje a un sitio web cada vez.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Estás construyendo un componente de tarjeta y necesitas tres párrafos de texto de relleno para ver cómo se ajusta. O estás escribiendo un fixture de prueba que necesita una cadena larga para comprobar el comportamiento de truncamiento. En cualquier caso, necesitas texto de relleno, y escribir "asdf asdf asdf" en un campo de texto no te da longitudes de palabra ni estructuras de oración realistas con las que trabajar.</p>

<p>El Lorem Ipsum ha sido la respuesta por defecto a este problema durante décadas, precisamente porque su pseudotexto derivado del latín tiene una distribución natural de longitudes de palabras y oraciones que imita la prosa real sin ser distractor ni tener significado: el ojo del lector no se ve atraído a leerlo realmente, que es exactamente el punto cuando estás evaluando un diseño.</p>

<h2>Más Allá de Copiar y Pegar el Mismo Párrafo</h2>
<p>La mayoría de los desarrolladores guardan un único párrafo de Lorem Ipsum en algún lugar y lo reutilizan en todas partes, lo cual funciona hasta que necesitas un bloque mucho más largo para una prueba de desplazamiento, o uno mucho más corto para comprobar cómo se comporta una elipsis de truncamiento de una sola línea. Generar texto exactamente a la longitud que necesitas —una oración, un párrafo, varios párrafos— supera a reutilizar el mismo bloque fijo y recortarlo o duplicarlo manualmente.</p>

<h2>Genera Exactamente la Longitud que Necesitas</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye un generador de Lorem Ipsum que produce texto de relleno a la longitud que tu diseño o caso de prueba requiera, listo para copiar con un clic. Sin pestaña del navegador, sin sitio generador lleno de anuncios, sin esperar a que cargue una página solo para conseguir tres oraciones.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Lorem Ipsum generator producing placeholder text on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Prototipando Diseños de Interfaz</h3>
<p>Antes de que exista contenido real, el texto de relleno te permite evaluar si un diseño maneja con elegancia longitudes de contenido variables: títulos cortos, títulos largos, párrafos que se ajustan a dos líneas frente a cinco. Generar texto rápidamente a distintas longitudes acelera esa evaluación.</p>

<h3>Fixtures de Prueba y Datos Semilla</h3>
<p>Las pruebas automatizadas que comprueban truncamiento de texto, límites de caracteres o comportamiento de desbordamiento necesitan cadenas realistas de una longitud conocida. Generarlas bajo demanda es más rápido que codificar la misma cadena de relleno en docenas de archivos de prueba.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Consigue Bellows en la Mac App Store</a></p>
`,
  },

  "xml-formatter-mac": {
    slug: "xml-formatter-mac",
    title: "Formateador y Validador de XML para Mac",
    description:
      "Las respuestas SOAP y los archivos de configuración antiguos todavía llegan como XML sin sangría, y leerlo sin formato es más difícil de lo necesario.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>JSON acapara toda la atención, pero muchos sistemas siguen hablando XML: APIs SOAP, archivos de diseño de Android, el <code>pom.xml</code> de Maven, feeds RSS, y no pocas integraciones empresariales que no han cambiado su formato de datos en quince años. Cuando uno de estos llega minificado en una sola línea, leer la estructura anidada es genuinamente difícil sin la sangría adecuada.</p>

<p>A diferencia de JSON, XML también tiene que lidiar con namespaces, atributos y etiquetas autocerradas, lo que hace que el formateo manual sea aún más propenso a errores. Contar mal los niveles de anidación en un envelope SOAP profundamente estructurado es fácil de hacer y difícil de notar hasta que algo falla más adelante.</p>

<h2>Por Qué Esto Todavía Importa en 2026</h2>
<p>A pesar del dominio de JSON en el diseño de nuevas APIs, XML no ha desaparecido del software empresarial, los sistemas gubernamentales ni el desarrollo de Android. Si te integras con la pasarela de pago de un banco, un sistema de seguros heredado o un servicio web SOAP antiguo, en algún momento necesitarás leer y depurar XML sin procesar, y entrecerrar los ojos ante una respuesta sin formato no es una forma productiva de pasar ese tiempo.</p>

<h2>Formatea y Valida en Un Solo Paso</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye un formateador de XML que sangra correctamente los elementos anidados y señala el marcado malformado: una etiqueta sin cerrar, una comilla de atributo desajustada, una declaración de namespace rota. Pega XML minificado y obtén de inmediato un documento legible y correctamente sangrado.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows XML formatter showing indented nested elements on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Depurando APIs SOAP y Heredadas</h3>
<p>Los envelopes SOAP envuelven el payload real en varias capas de código repetitivo, lo que hace tedioso encontrar el campo que realmente te importa cuando todo está en una sola línea. Formatear la respuesta primero convierte una pared de texto en un árbol navegable.</p>

<h3>Revisando Archivos de Configuración y Build</h3>
<p>El <code>AndroidManifest.xml</code> de Android, el <code>pom.xml</code> de Maven e innumerables formatos de configuración de CI son XML por debajo. Cuando uno de estos se genera o modifica de forma programática y termina sin sangría, un rápido paso de formateo hace que tanto el diff como el contenido sean más fáciles de revisar.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Consigue Bellows en la Mac App Store</a></p>
`,
  },

  "cron-expression-helper-mac": {
    slug: "cron-expression-helper-mac",
    title: "Asistente de Expresiones Cron para Mac",
    description:
      "Escribir una expresión de programación a mano y esperar que signifique lo que crees que significa es la razón por la que los trabajos terminan ejecutándose a las 3 AM en vez de a las 3 PM.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>La sintaxis de cron son cinco campos de números y símbolos que de alguna manera necesitan expresar "cada día laborable a las 9 AM excepto festivos" o "cada 15 minutos entre las 8 y las 6". Los campos son minuto, hora, día del mes, mes y día de la semana, en un orden que nadie recuerda correctamente al primer intento, y los asteriscos, comas, guiones y barras significan cosas distintas según la posición.</p>

<p><code>0 9 * * 1-5</code> parece razonable, pero ¿es a las 9 AM o a las 9 PM, y significa <code>1-5</code> de lunes a viernes o algo totalmente distinto según si la implementación de cron cuenta el domingo como 0 o como 7? Equivocarse en esto en un pipeline de despliegue, un trabajo de backup o un informe programado significa fallos silenciosos o un trabajo disparándose en un momento inconveniente, a veces durante semanas antes de que alguien lo note.</p>

<h2>Cada Implementación de Cron Tiene Sus Propias Peculiaridades</h2>
<p>El cron estándar de Unix, los CronJobs de Kubernetes, AWS EventBridge y varias plataformas de CI usan aproximadamente la misma sintaxis de cinco campos pero difieren en pequeños detalles: si se admiten segundos, cómo funciona la numeración del día de la semana, si ciertas cadenas abreviadas como <code>@daily</code> son válidas. Escribir una programación que funcione correctamente en el primer despliegue significa entender exactamente qué variante de cron estás usando.</p>

<h2>Traduce Expresiones a Lenguaje Sencillo</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye un asistente de expresiones cron que toma una cadena de programación y explica lo que realmente significa en lenguaje sencillo, para que puedas verificar tu intención antes de desplegar un trabajo programado en cualquier lugar.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows cron expression helper explaining a schedule string on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Verificando Antes de Desplegar</h3>
<p>Un trabajo programado que se dispara en el momento equivocado suele ser un fallo silencioso: nada falla, simplemente se ejecuta cuando no lo pretendías, a veces solapándose con una ventana de mantenimiento o saturando una base de datos durante el pico de tráfico. Comprobar el significado en lenguaje sencillo de una cadena cron antes de fusionar una configuración de despliegue detecta esto antes de que se convierta en una alerta a las 2 AM.</p>

<h3>Leyendo la Programación de Otra Persona</h3>
<p>Heredar un código base con una docena de trabajos cron existentes significa averiguar qué hace cada uno antes de poder cambiar cualquiera de ellos con seguridad. Traducir cada expresión rápidamente es más rápido que analizar mentalmente cinco campos crípticos de un trabajo a la vez.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Consigue Bellows en la Mac App Store</a></p>
`,
  },

  "yaml-to-json-mac": {
    slug: "yaml-to-json-mac",
    title: "Conversor de YAML a JSON para Mac",
    description:
      "Los manifiestos de Kubernetes, los pipelines de CI y los archivos de configuración hablan todos en YAML, pero las herramientas que realmente necesitas para inspeccionar datos suelen esperar JSON.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>YAML está por todas partes en infraestructura: manifiestos de Kubernetes, workflows de GitHub Actions, archivos de Docker Compose, playbooks de Ansible. Es legible y compacto, hasta que la sangría se vuelve ambigua, se cuela un tabulador donde debería haber un espacio, o necesitas alimentar los datos a una herramienta que solo entiende JSON.</p>

<p>Convertir entre ambos a mano es mecánico pero tedioso: el anidamiento basado en sangría de YAML se convierte en las llaves y corchetes de JSON, las cadenas de YAML sin comillas necesitan comillas, y la sintaxis más permisiva de YAML (booleanos sin comillas, cadenas multilínea, anclas y referencias) no siempre se traduce limpiamente a las reglas más estrictas de JSON.</p>

<h2>Por Qué Necesitas Ambos Formatos</h2>
<p>Puede que escribas un manifiesto de Kubernetes en YAML porque es más fácil de leer y versionar, pero necesites el equivalente en JSON para alimentarlo a un script, una llamada a la API o un pipeline de <code>jq</code> que espera entrada JSON. O estás depurando por qué la configuración YAML de un pipeline de CI no se analiza como esperas, y ver la estructura JSON subyacente hace que el anidamiento real sea inequívoco de una manera en que el YAML sensible a espacios en blanco a veces no lo es.</p>

<h2>Convierte Entre Formatos al Instante</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye un conversor de YAML a JSON entre sus 41 herramientas de desarrollo. Pega YAML y obtén la estructura JSON equivalente de inmediato, con anidamiento y tipos preservados correctamente: sin reformateo manual, sin adivinar niveles de sangría.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows YAML to JSON converter tool on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Depurando Kubernetes y Configuraciones de CI</h3>
<p>Cuando un manifiesto se comporta de forma inesperada, ver la estructura JSON subyacente elimina cualquier ambigüedad sobre cómo se anidó realmente el YAML, algo útil cuando una sangría mal colocada ha cambiado silenciosamente a qué padre pertenece qué clave.</p>

<h3>Alimentando Configuraciones a Scripts</h3>
<p>Muchas herramientas de scripting y automatización trabajan de forma más natural con JSON que con YAML. Convertir un archivo de configuración una vez y pasar el resultado JSON aguas abajo suele ser más simple que enseñar a cada script de tu pipeline a analizar YAML directamente.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Consigue Bellows en la Mac App Store</a></p>
`,
  },

  "text-diff-tool-mac": {
    slug: "text-diff-tool-mac",
    title: "Herramienta de Comparación de Texto para Mac — Compara Dos Textos Lado a Lado",
    description:
      "Dos versiones de un archivo de configuración, un borrador de correo o un párrafo de texto se ven casi idénticas, y encontrar la única palabra que cambió es sorprendentemente difícil a simple vista.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Git maneja los diffs maravillosamente para código que ya está rastreado en un repositorio. Pero gran parte de la comparación de texto ocurre completamente fuera del control de versiones: dos versiones de una cláusula legal que un abogado devolvió, una respuesta de API antes y después de un cambio en el backend, un párrafo de texto de marketing que un colega "solo ajustó ligeramente". Leer ambas versiones lado a lado e intentar detectar la diferencia a simple vista es lento y poco fiable, especialmente en bloques de texto largos.</p>

<p>El ojo humano es malo para este tipo de comparación porque no está buscando diferencias, está leyendo en busca de significado, y dos párrafos casi idénticos ambos se leen como "correctos" a menos que específicamente te detengas y los compares carácter por carácter entre sí.</p>

<h2>Cuando Git Diff No Está Disponible</h2>
<p>No todo lo que vale la pena comparar vive en un repositorio git. Valores de configuración pegados de dos entornos distintos, dos borradores de un correo, o el antes y después de un buscar-y-reemplazar del que no estás seguro de haber hecho correctamente, todos necesitan herramientas de comparación que funcionen sobre texto pegado arbitrario, no solo archivos rastreados.</p>

<h2>Compara Dos Bloques de Texto al Instante</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye una herramienta de comparación de texto que resalta exactamente lo que cambió entre dos bloques de texto pegado: adiciones, eliminaciones y modificaciones señaladas visualmente para que no tengas que leer cada carácter tú mismo.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows text diff tool comparing two blocks of text on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Comparando Configuraciones Entre Entornos</h3>
<p>Cuando staging y producción se comportan de manera diferente, comparar los valores de configuración reales lado a lado suele revelar al culpable más rápido que leer registros de despliegue: una sola variable de entorno con un error tipográfico o un valor desactualizado destaca de inmediato una vez resaltada.</p>

<h3>Revisando Texto Editado</h3>
<p>Cuando alguien te devuelve una versión "ligeramente editada" de un documento, ver con precisión qué cambió, en lugar de releer todo esperando notarlo, convierte una lenta revisión de corrección en una rápida comprobación visual.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Consigue Bellows en la Mac App Store</a></p>
`,
  },

  "number-base-converter-mac": {
    slug: "number-base-converter-mac",
    title: "Conversor de Bases Numéricas para Mac — Hex, Binario, Octal, Decimal",
    description:
      "Leer una dirección de memoria, un valor de color o un código de permisos de archivo significa traducir constantemente entre decimal y la base que el contexto exija.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Una dirección de memoria aparece como <code>0x7ffee23a1c40</code>. Un permiso de archivo es <code>0755</code>. Una máscara de bits en la documentación de un controlador está escrita en binario. Un valor de canal de color necesita convertirse de decimal a hexadecimal de dos dígitos. Ninguna de estas conversiones es difícil individualmente, pero hacerlas repetidamente en tu cabeza —especialmente de binario a hexadecimal, que requiere agrupar bits en nibbles— es más lento y propenso a errores de lo que debería ser para algo tan mecánico.</p>

<p>La programación de bajo nivel, el desarrollo embebido, las redes e incluso el desarrollo web cotidiano (colores hex, otra vez) requieren moverse entre bases numéricas con la frecuencia suficiente como para que mantener una tabla de consulta mental de dígitos hexadecimales solo te sirva hasta que los números superen un byte o dos.</p>

<h2>Dónde Esto Confunde a la Gente</h2>
<p>El octal es el traicionero. Un permiso de archivo como <code>644</code> parece un número decimal pero en realidad es base 8, y tratarlo como decimal al razonar sobre él genera confusión sobre cuál es realmente el patrón de bits. El binario se vuelve inmanejable pasados los 16 bits: un valor de 32 bits en binario tiene treinta y dos caracteres de largo, difícil de leer y fácil de contar mal cuando intentas aislar bits específicos para una comprobación de flags.</p>

<h2>Convierte Entre las Cuatro Bases a la Vez</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye un conversor de bases numéricas que muestra un valor en decimal, hexadecimal, octal y binario simultáneamente. Escribe un número en cualquier base y ve las cuatro representaciones actualizarse juntas: sin conversión separada para cada par.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows number base converter showing hex, binary, octal, and decimal on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Trabajo de Bajo Nivel y Embebido</h3>
<p>Leer valores de registros, máscaras de bits y direcciones de memoria en firmware embebido o programación de sistemas significa moverse con fluidez entre hexadecimal y binario. Ver ambos a la vez, junto con el decimal, elimina una capa de traducción manual de una tarea que ya es minuciosa de por sí.</p>

<h3>Permisos de Archivo y Redes</h3>
<p>Los permisos de archivo de Unix, las máscaras de subred y varios flags binarios en protocolos de red se expresan comúnmente en octal o binario pero se razonan en decimal. Una conversión rápida confirma exactamente qué representa una cadena de permisos o un byte de flags antes de que lo cambies.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Consigue Bellows en la Mac App Store</a></p>
`,
  },

  "csv-to-json-mac": {
    slug: "csv-to-json-mac",
    title: "Conversor de CSV a JSON para Mac",
    description:
      "La exportación de una hoja de cálculo necesita convertirse en datos estructurados para una llamada a la API o un fixture de prueba, y escribir un script puntual cada vez es excesivo.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Alguien del equipo de ventas exporta una hoja de cálculo como CSV y te pide que "simplemente la cargues en el sistema". El sistema espera JSON. Así que escribes rápidamente un script de Python o Node con una librería de análisis de CSV, mapeas las columnas a campos, manejas la fila de encabezado y esperas que ningún valor contenga una coma que rompa tu lógica ingenua de dividir por comas (normalmente sí la contiene, escondida dentro de un campo entre comillas).</p>

<p>Esta es una tarea que los desarrolladores resuelven una y otra vez, cada vez escribiendo código desechable ligeramente distinto, porque CSV aparece constantemente como formato de exportación de hojas de cálculo, bases de datos y herramientas de análisis, mientras que la mayoría de las herramientas y APIs modernas esperan JSON.</p>

<h2>La Engañosa Simplicidad del CSV</h2>
<p>El CSV parece trivial: divide por comas, divide por saltos de línea, listo. Luego encuentras un campo que contiene una coma, envuelto en comillas según la especificación, y tu parser ingenuo se rompe. O un campo contiene un salto de línea incrustado dentro de comillas, algo que una lectura simple línea por línea no puede manejar correctamente. Analizar CSV correctamente requiere respetar las reglas de comillado, por eso un conversor dedicado supera a escribirlo desde cero cada vez.</p>

<h2>Convierte CSV a JSON Estructurado</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye un conversor de CSV a JSON que maneja correctamente los campos entre comillas y las filas de encabezado, convirtiendo una exportación de hoja de cálculo en un array de objetos JSON listo para pegar en un fixture de prueba, un cuerpo de solicitud o un script.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows CSV to JSON converter tool on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Cargando Datos de Hojas de Cálculo en APIs</h3>
<p>Cuando una importación de datos puntual no justifica escribir y mantener un script completo, convertir directamente la exportación CSV a JSON y pegarla en una herramienta de prueba de API o un archivo semilla de base de datos completa el trabajo en una fracción del tiempo.</p>

<h3>Construyendo Fixtures de Prueba a Partir de Datos Reales</h3>
<p>Exportar una muestra de datos parecidos a los de producción como CSV desde una hoja de cálculo y convertirla a JSON es una forma rápida de generar fixtures de prueba realistas sin escribir objetos JSON a mano campo por campo.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Consigue Bellows en la Mac App Store</a></p>
`,
  },

  "mac-developer-tools-no-internet": {
    slug: "mac-developer-tools-no-internet",
    title: "Herramientas de Desarrollo para Mac que Funcionan Sin Internet",
    description:
      "Trabajar en un vuelo, en el sótano de una sala de servidores o simplemente con Wi-Fi inestable de una cafetería no debería significar perder acceso a las utilidades que usas constantemente.",
    date: "2026-09-06",
    readTime: "5 min de lectura",
    content: `
<p>Intenta formatear un blob de JSON en un avión sin Wi-Fi y rápidamente notarás cuántas de tus utilidades de desarrollo diarias son en realidad sitios web disfrazados. jwt.io, regex101, formateadores de JSON, herramientas de Base64: todas excelentes, todas completamente inútiles en el momento en que se cae tu conexión. Terminas o pasando sin ellas o luchando con comandos de Terminal que recuerdas a medias.</p>

<p>Esto no es solo un inconveniente para los viajes. Las salas de servidores, las instalaciones seguras y los entornos aislados a menudo no tienen acceso a internet por diseño. Incluso una Wi-Fi de oficina inestable puede convertir una tarea de dos segundos en una espera frustrante por una página que no carga.</p>

<h2>La Dependencia Oculta en Tu Kit de Herramientas</h2>
<p>La mayoría de los desarrolladores no se da cuenta de cuánto depende su herramienta diaria de una conexión activa hasta que desaparece. Una auditoría mental rápida es reveladora: ¿cuántas de las utilidades a las que recurres varias veces al día son en realidad pestañas del navegador apuntando al servidor de otra persona? Para la mayoría de los desarrolladores, la respuesta es más de lo que esperan.</p>

<p>Más allá del problema de disponibilidad, también hay un problema de datos. Enviar tokens, credenciales o datos internos a un sitio web de terceros para decodificarlos o formatearlos significa confiar en las prácticas de seguridad y privacidad de ese sitio web, una confianza que puede no estar justificada, y que muchas políticas de seguridad corporativas prohíben explícitamente.</p>

<h2>Un Kit de Herramientas que Nunca Necesita Conexión</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> agrupa 41 herramientas de desarrollo en una app nativa de macOS que funciona completamente sin conexión: sin excepciones, sin "esta función requiere internet". Formateo de JSON, decodificación de JWT, hashing, prueba de regex, codificación y decodificación, y más, todo funciona de forma idéntica ya sea que estés en fibra de gigabit o a nueve mil metros de altura sin señal.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows offline developer tools app running on macOS with no network connection" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Trabajando en Entornos Seguros o Aislados</h3>
<p>Parte del desarrollo ocurre en entornos donde el acceso a internet está restringido o completamente ausente por política: contratación de defensa, infraestructura financiera, cierto trabajo gubernamental. Las herramientas que requieren una conexión activa simplemente no se pueden usar ahí, sin importar lo buenas que sean.</p>

<h3>Viajando Sin Perder Productividad</h3>
<p>Los vuelos, los trenes que pasan por túneles y los lugares de trabajo remoto con conectividad poco fiable no deberían dictar qué tareas de desarrollo puedes y no puedes hacer. Un kit de herramientas offline elimina la conectividad de la lista de cosas que pueden ralentizarte.</p>

<h3>La Privacidad como Efecto Secundario de Estar Offline</h3>
<p>Una app que nunca hace solicitudes de red no puede filtrar tus datos a un servidor, ni intencional ni accidentalmente. Para desarrolladores que manejan tokens, secretos o información propietaria, offline no se trata solo de disponibilidad: es una garantía de privacidad significativa.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Consigue Bellows en la Mac App Store</a></p>
`,
  },

  "clipboard-formatter-mac": {
    slug: "clipboard-formatter-mac",
    title: "Formateador de Portapapeles para Mac — Detección Automática y Sugerencia de Herramientas",
    description:
      "Decidir qué formateador, decodificador o conversor usar es en sí misma una pequeña decisión que tomas decenas de veces al día sin notar la sobrecarga.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Copias una cadena. Antes de poder hacer algo con ella, tienes que averiguar qué es y qué herramienta la maneja. ¿Es un JWT? ¿Base64? ¿Un color hex? ¿Un UUID simple? Para un desarrollador experimentado, este reconocimiento ocurre casi instantáneamente, pero sigue siendo un pequeño paso cognitivo entre copiar algo y realmente actuar sobre ello, y es un paso que se repite cada vez.</p>

<p>Multiplica ese paso de reconocimiento y navegación por las decenas de pequeñas tareas de utilidad en un día típico, y suma una sobrecarga mental sorprendente dedicada solo a dirigirte a la herramienta correcta, antes de siquiera haber empezado la tarea real.</p>

<h2>El Reconocimiento de Patrones Es un Problema Solucionable</h2>
<p>Los JWT tienen una estructura distintiva de tres partes separadas por puntos con una cabecera Base64url reconocible. Los colores hex empiezan con una almohadilla y tienen exactamente seis u ocho caracteres hexadecimales. Los UUID siguen un formato estricto de ocho-cuatro-cuatro-cuatro-doce con guiones. El JSON empieza con una llave o corchete. Estos patrones son lo bastante precisos como para que el software los reconozca tan rápido como un desarrollador experimentado, sin requerir que el desarrollador haga la identificación manualmente cada vez.</p>

<h2>Deja que el Portapapeles Sugiera la Herramienta</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> lee tu portapapeles cuando lo abres y sugiere automáticamente la herramienta correspondiente. Copia un JWT y el decodificador ya está resaltado. Copia JSON y el formateador está a un clic. Copia un color hex y el conversor de color está listo. El paso de reconocimiento ocurre al instante, antes incluso de abrir la barra lateral.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows clipboard detection suggesting the matching developer tool on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Menos Clics, Menos Fatiga de Decisión</h3>
<p>Eliminar el paso de "qué herramienta necesito" de una tarea repetitiva suena menor de forma aislada, pero a lo largo de docenas de interacciones diarias elimina una cantidad significativa de fricción, fricción que de otro modo te empuja a simplemente dejar los datos sin formatear porque buscar la herramienta correcta parecía demasiado esfuerzo.</p>

<h3>Útil para Herramientas que Olvidas que Existen</h3>
<p>Con 41 herramientas disponibles, es fácil olvidar que un conversor o generador específico existe siquiera. Las sugerencias basadas en el portapapeles muestran la herramienta relevante incluso cuando no se te hubiera ocurrido buscarla, lo cual a menudo es más valioso que el tiempo ahorrado en herramientas que ya usas a diario.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Consigue Bellows en la Mac App Store</a></p>
`,
  },

  "string-escape-unescape-mac": {
    slug: "string-escape-unescape-mac",
    title: "Escapado y Desescapado de Cadenas para Mac — JSON, HTML, URL",
    description:
      "Incrustar un formato de cadena dentro de otro significa escapar comillas, barras y caracteres especiales correctamente, o ver cómo tu parser se atraganta.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Necesitas incrustar una cadena JSON dentro de otra cadena JSON, quizás un mensaje de log que a su vez contiene un payload JSON. O estás escribiendo un comando de shell que incluye una cadena con comillas. O estás construyendo una URL que tiene que llevar otra URL como parámetro de consulta. Cada una de estas situaciones requiere escapado: convertir caracteres que de otro modo se interpretarían como sintaxis en una forma que se trate como dato literal.</p>

<p>Contextos distintos escapan de forma distinta. JSON escapa las comillas con una barra invertida y representa caracteres especiales como saltos de línea con <code>\\n</code>. El escapado de shell depende del estilo de comillado que estés usando. El escapado de URL codifica con porcentaje los caracteres reservados de una forma completamente diferente a los otros dos. Confundir estos —aplicar el escapado de JSON donde se necesitaba escapado de URL— produce un resultado que parece casi correcto y falla de formas confusas.</p>

<h2>El Problema del Doble Escapado</h2>
<p>Uno de los errores más comunes en este ámbito es el doble escapado: una cadena se escapa una vez en tu código y otra vez en una librería o framework que asume que sigue siendo cruda, convirtiendo una sola barra invertida en dos y corrompiendo silenciosamente los datos. Diagnosticar esto requiere desescapar paso a paso para ver exactamente dónde se introdujo la capa extra: tedioso de hacer a mano, especialmente en una cadena larga.</p>

<h2>Escapa y Desescapa para Múltiples Formatos</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> incluye herramientas de escapado de cadenas que cubren los formatos JSON, HTML y URL entre sus 41 herramientas de desarrollo. Pega una cadena sin procesar para verla correctamente escapada para un contexto dado, o pega una cadena escapada para ver el valor original sin procesar.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows string escape and unescape tool on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Incrustando Cadenas Dentro de Cadenas</h3>
<p>Construir un payload JSON que a su vez contiene una cadena JSON como valor de campo, o construir un mensaje de log que necesita incluir de forma segura una entrada de usuario arbitraria, ambos requieren un escapado correcto para evitar corromper la estructura externa.</p>

<h3>Diagnosticando Datos con Doble Escapado</h3>
<p>Cuando una cadena parece haber sido escapada más veces de las que debería, desescaparla capa por capa revela exactamente dónde se introdujo la codificación extra, que suele ser la forma más rápida de rastrear el código responsable.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Consigue Bellows en la Mac App Store</a></p>
`,
  },

  "mac-developer-utility-menu-bar": {
    slug: "mac-developer-utility-menu-bar",
    title: "Utilidad de Desarrollo para Mac en la Barra de Menú — Acceso Rápido a 41 Herramientas",
    description:
      "El Dock es para apps que miras. La barra de menú es para herramientas que usas y descartas en segundos, y la mayoría de las utilidades de desarrollo pertenecen a la segunda categoría.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Piensa en cómo usas realmente un formateador de JSON o un generador de UUID. No lo abres, admiras la interfaz y te instalas para una sesión. Lo abres, haces una pequeña cosa y lo cierras: toda la interacción dura un puñado de segundos. Ese patrón de uso encaja mal con un icono del Dock, que implica una app a la que cambias y en la que pasas tiempo, y encaja mucho mejor con la barra de menú, construida exactamente para este tipo de interacción rápida y puntual.</p>

<p>Las apps basadas en el Dock también compiten por espacio con todo lo demás que tienes abierto: Cmd-Tab recorre todas ellas, Mission Control agrupa sus ventanas, y encontrar la correcta entre una docena de apps abiertas toma un momento de exploración visual. Un icono de la barra de menú se sitúa en una ubicación fija y predecible que nunca se pierde.</p>

<h2>Por Qué la Ubicación Importa Más de lo que Parece</h2>
<p>El valor de una utilidad de desarrollo es inversamente proporcional a la fricción que se interpone entre tú y su uso. Una herramienta que tarda diez segundos en abrirse cuesta más que esos diez segundos: cuesta el contexto mental que pierdes al salir de tu tarea actual para ir a buscarla. La ubicación en la barra de menú minimiza ese costo manteniendo la herramienta visualmente presente y a un clic en todo momento, sin ocupar espacio en pantalla ni en el Dock mientras no la usas.</p>

<h2>41 Herramientas, Un Icono de Barra de Menú</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> vive en tu barra de menú y te da acceso a 41 herramientas de desarrollo —formateadores, codificadores, generadores, conversores y herramientas de texto— sin necesitar nunca un icono del Dock o una ventana dedicada. Haz clic en el icono, elige una herramienta de la barra lateral, haz lo que necesites, y se aparta de tu camino de nuevo.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows menu bar icon providing quick access to 41 developer tools on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Cero Huella en el Dock</h3>
<p>Para desarrolladores que mantienen un Dock minimalista con solo las apps que usan en sesiones extensas —un editor, un navegador, una terminal—, una utilidad de barra de menú encaja de forma natural con esa filosofía. Está ahí cuando se necesita e invisible el resto del tiempo.</p>

<h3>Ventana Independiente Cuando la Necesitas</h3>
<p>Algunas tareas —probar varios patrones de regex seguidos, o convertir un lote de colores— se benefician de una ventana persistente en lugar de un desplegable de la barra de menú. Bellows admite ambos modos, así que las consultas rápidas se quedan en la barra de menú mientras que las sesiones más largas obtienen una ventana propia junto a tu editor.</p>

<h3>Los Recientes Mantienen Tus Herramientas Habituales Arriba</h3>
<p>Con 41 herramientas disponibles, las que más usas no deberían requerir la misma cantidad de búsqueda que las que usas rara vez. Las herramientas usadas recientemente aparecen automáticamente, así que tus hábitos diarios moldean la interfaz con el tiempo en lugar de al revés.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Consigue Bellows en la Mac App Store</a></p>
`,
  },
};
