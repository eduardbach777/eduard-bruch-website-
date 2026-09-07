import type { ArticleSet } from "./index";

export const esArticles: ArticleSet = {
  "block-distracting-websites-mac": {
    slug: "block-distracting-websites-mac",
    title: "Cómo Bloquear Sitios Web que Distraen en Mac",
    description:
      "Abres el navegador para comprobar una cosa y 40 minutos después estás perdido en un hilo de Reddit. macOS no incluye un bloqueador de webs de verdad — así puedes solucionarlo.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Te sientas a trabajar, abres Safari o Chrome, y antes de llegar a la pestaña que necesitabas ya has escrito "r-e-d" en la barra de direcciones por pura memoria muscular. Cuarenta minutos después sales a la superficie de un hilo sobre si los perritos calientes son sándwiches. El trabajo sigue esperando.</p>

<p>Esto no es un problema de fuerza de voluntad. Es un problema de diseño. Los navegadores están construidos para llevarte al contenido lo más rápido posible — incluido el contenido que intentas evitar.</p>

<h2>Por Qué macOS No Resuelve Esto</h2>
<p>Apple añadió los límites de sitios web de Tiempo de Uso en macOS Catalina, pero solo funcionan en Safari. Si también usas Chrome, Firefox, Arc o cualquier otro navegador, esos límites no hacen nada. Además, puedes descartar los avisos de Tiempo de Uso con un solo clic — es un badén, no un muro.</p>

<p>Editar tu archivo <code>/etc/hosts</code> funciona en teoría, pero requiere comandos de Terminal, acceso sudo y una limpieza manual cuando terminas. No es práctico para el uso diario y no funciona con un temporizador.</p>

<h2>Bloquea Sitios Web en Todo el Sistema con Lock In!</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> usa una extensión de sistema de macOS para bloquear sitios web que distraen en todos los navegadores de tu Mac — Safari, Chrome, Firefox, Arc, Brave, todos. Eliges los sitios, pones un temporizador y desaparecen hasta que termina la sesión.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! website blocker for Mac showing blocked sites during a focus session" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Listas de Bloqueo Predefinidas</h3>
<p>Lock In! viene con listas de bloqueo seleccionadas para Redes Sociales, Entretenimiento, Noticias y Compras. Un clic bloquea decenas de dominios que te roban tiempo. También puedes añadir URLs personalizadas para cualquier cosa específica de tus propios hábitos de navegación.</p>

<h3>Sesiones con Temporizador</h3>
<p>Configura una sesión de enfoque de 25 minutos, una hora o cualquier duración personalizada. Los sitios bloqueados permanecen bloqueados hasta que se acaba el tiempo. Sin extensión de navegador que desactivar, sin archivo hosts que revertir — funciona a nivel de sistema.</p>

<h3>Modo Estricto</h3>
<p>Si eres de los que cancela un bloqueo a los dos minutos, activa el Modo Estricto. Una vez que empieza una sesión, no hay forma de terminarla antes de tiempo. Los sitios se quedan bloqueados. Punto.</p>

<p>Bloquear sitios web que distraen no debería requerir un título en informática. Debería tomar dos clics desde tu barra de menú. <a href="https://apps.apple.com/app/lockin/id6802325423">Consigue Lock In! en la Mac App Store</a></p>
`,
  },

  "website-blocker-focus-mac": {
    slug: "website-blocker-focus-mac",
    title: "El Mejor Bloqueador de Webs para Concentrarte en Mac",
    description:
      "Las extensiones de navegador son fáciles de desactivar, Tiempo de Uso solo cubre Safari, y los trucos con el archivo hosts necesitan Terminal. Un bloqueador a nivel de sistema que funcione en todos los navegadores es la pieza que faltaba.",
    date: "2026-09-06",
    readTime: "5 min de lectura",
    content: `
<p>Hay docenas de bloqueadores de webs para Mac. La mayoría son extensiones de navegador — y ahí está el problema. Las extensiones se pueden desactivar en tres segundos. Cuando tu cerebro está pidiendo una distracción, tres segundos no son nada.</p>

<p>Un bloqueador de webs orientado a la concentración necesita funcionar por debajo del nivel del navegador. Necesita bloquear sitios sin importar qué navegador abras, y necesita hacer que desbloquear sea lo bastante incómodo como para que no te moleste hacerlo.</p>

<h2>Por Qué la Mayoría de Bloqueadores se Quedan Cortos</h2>
<p>Las extensiones de navegador solo controlan un navegador. Si bloqueas Twitter en Chrome, puedes abrir Safari y desplazarte libremente. Los límites de sitios web de Tiempo de Uso solo se aplican a Safari y se pueden descartar con un clic. Las ediciones del archivo hosts requieren acceso a Terminal y dejan residuos si te olvidas de limpiarlas.</p>

<p>Un bloqueador que depende de tu cooperación no está bloqueando nada de verdad. Está sugiriendo. Y las sugerencias no funcionan cuando hay dopamina de por medio.</p>

<h2>Lock In! — Bloqueo a Nivel de Sistema desde la Barra de Menú</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> funciona como una extensión de sistema de macOS. Eso significa que intercepta las peticiones a nivel de red, antes de que cualquier navegador las vea. Los dominios bloqueados no cargan en Safari, Chrome, Firefox, Arc — cualquier app que use la red.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! menu bar focus blocker for Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Sesiones de Enfoque de Un Clic</h3>
<p>Lock In! vive en tu barra de menú. Haz clic, elige una duración y empieza una sesión. Tu lista de bloqueo se activa al instante. Sin pestañas que cerrar, sin páginas de ajustes que navegar — solo clic y a concentrarte.</p>

<h3>Bloqueo de Apps También</h3>
<p>Los sitios web no son el único problema. Lock In! también puede bloquear apps que distraen. Cuando intentas abrir una app bloqueada durante una sesión, un panel a pantalla completa te intercepta y te devuelve al trabajo. Cubre ambos frentes — navegador y apps.</p>

<h3>Estadísticas Diarias</h3>
<p>Un gráfico de barras de 7 días muestra tu historial de concentración. Ver una racha de sesiones de trabajo profundo motiva. Ver un hueco te dan ganas de rellenarlo. Los datos te mantienen honesto sin resultar moralizantes.</p>

<h3>Atajos Globales</h3>
<p>Inicia o consulta una sesión sin tocar el ratón. Asigna un atajo de teclado global y activa el modo enfoque desde cualquier parte de tu Mac.</p>

<p>El mejor bloqueador de webs es el que no puedes hacer trampa. <a href="https://apps.apple.com/app/lockin/id6802325423">Consigue Lock In! en la Mac App Store</a></p>
`,
  },

  "block-tiktok-mac": {
    slug: "block-tiktok-mac",
    title: "Cómo Bloquear TikTok en Mac Durante el Trabajo",
    description:
      "El algoritmo de TikTok está diseñado para mantenerte deslizando de forma indefinida. Cuando está a una pestaña de distancia de tu trabajo, la fuerza de voluntad sola no basta.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>TikTok es la trampa de atención más efectiva jamás construida. Su algoritmo aprende qué te mantiene viendo y te sirve un flujo infinito de eso. Abrir TikTok "solo un segundo" durante el trabajo es como comer una patata frita de una bolsa diseñada para que la termines entera.</p>

<p>En tu teléfono, puedes eliminar la app o usar Tiempo de Uso de iOS. Pero en tu Mac, tiktok.com siempre está a una pestaña de distancia. Y macOS no te da una forma sencilla de bloquearlo.</p>

<h2>Por Qué TikTok en Mac Es Especialmente Peligroso</h2>
<p>En tu teléfono, TikTok al menos se siente como una actividad separada — físicamente coges otro dispositivo. En tu Mac, es el mismo navegador en el que trabajas. Estás escribiendo un informe en una pestaña, y TikTok está a un Cmd+T de distancia. No hay cambio de contexto, ni fricción, nada que haga que tu cerebro registre que has salido del modo trabajo.</p>

<p>La versión web de TikTok ahora tiene todas las funciones. La página Para Ti funciona igual. El algoritmo es igual de adictivo. Y a diferencia de tu teléfono, tu Mac tiene una pantalla más grande y un teclado — puedes caer aún más profundo en secciones de comentarios y búsquedas.</p>

<h2>Bloquea TikTok en Todo el Sistema con Lock In!</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> bloquea tiktok.com a nivel de sistema usando una extensión de red de macOS. No importa qué navegador uses — Safari, Chrome, Firefox, Arc — TikTok no cargará durante tu sesión de enfoque.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! blocking TikTok on Mac during a focus session" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Añade TikTok a Tu Lista de Bloqueo</h3>
<p>Lock In! incluye una lista de bloqueo predefinida de Redes Sociales que cubre TikTok, Instagram, Twitter, Facebook y más. Activa la lista o añade tiktok.com como entrada personalizada — de cualquier forma, un clic lo bloquea durante toda tu sesión.</p>

<h3>Modo Estricto para Cero Excepciones</h3>
<p>Saber que puedes cancelar un bloqueo y abrir TikTok arruina todo el propósito. Activa el Modo Estricto y el bloqueo se vuelve permanente hasta que se acabe el temporizador. No hay anulación, no hay botón de emergencia, no hay "solo cinco minutos". Fijas la duración de la sesión, y TikTok permanece bloqueado durante toda ella.</p>

<h3>Combínalo con el Bloqueo de Apps</h3>
<p>Si tienes una app de escritorio de TikTok o usas un wrapper como Unite, Lock In! también puede bloquearlas. Su función de bloqueo de apps muestra un panel de interrupción a pantalla completa cuando intentas abrir una app bloqueada, así que cada camino hacia TikTok queda cerrado.</p>

<p>El algoritmo no duerme, así que tu bloqueador no debería tener agujeros. <a href="https://apps.apple.com/app/lockin/id6802325423">Consigue Lock In! en la Mac App Store</a></p>
`,
  },

  "cold-turkey-alternative-mac": {
    slug: "cold-turkey-alternative-mac",
    title: "Alternativa a Cold Turkey para Mac",
    description:
      "Cold Turkey es potente pero está pensado primero para Windows, y la versión de Mac lleva mucho tiempo por detrás. Una alternativa nativa de macOS que usa extensiones de sistema puede llenar ese hueco.",
    date: "2026-09-06",
    readTime: "5 min de lectura",
    content: `
<p>Cold Turkey es uno de los bloqueadores de webs más conocidos, y con razón — su bloqueo estricto es realmente difícil de evadir. Pero Cold Turkey se construyó primero para Windows. La versión de Mac históricamente se ha quedado atrás en actualizaciones, y no siempre se siente como en casa en macOS. Si has estado buscando algo que funcione de forma nativa en Mac y ofrezca el mismo bloqueo sin concesiones, ahora hay una opción mejor.</p>

<h2>Dónde Cold Turkey se Queda Corto en Mac</h2>
<p>La versión de Mac de Cold Turkey usa un mecanismo de bloqueo distinto al de su contraparte de Windows. macOS es un sistema operativo más cerrado, y las herramientas que dependen de soluciones alternativas en lugar de las APIs oficiales de Apple pueden romperse con las actualizaciones del sistema. La app también carece de la integración visual que los usuarios de Mac esperan — no se siente como una app nativa de macOS porque no lo es.</p>

<p>Además, la interfaz de Cold Turkey arrastra la complejidad de sus raíces en Windows. Funciones como bloqueos programados, listas blancas y temporizadores de descanso son potentes pero pueden resultar excesivas si solo quieres bloquear Twitter durante dos horas y ponerte a trabajar.</p>

<h2>Lock In! — Bloqueo Nativo de Mac Sin Trucos</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> está construido exclusivamente para macOS y se distribuye a través de la Mac App Store. Usa el framework oficial Network Extension de Apple para bloquear sitios web a nivel de sistema — sin trucos de navegador, sin trucos de proxy, sin editar el archivo hosts. Esto significa que funciona de forma fiable en las actualizaciones de macOS y no requiere desactivar la Protección de Integridad del Sistema ni conceder permisos inusuales.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! as a Cold Turkey alternative for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>El Modo Estricto Rivaliza con el Bloqueo de Cold Turkey</h3>
<p>La función distintiva de Cold Turkey es su modo estricto que te impide desbloquear. Lock In! ofrece el mismo mecanismo de compromiso — activa el Modo Estricto y tu sesión no se puede cancelar antes de tiempo. Sin trucos de desinstalación, sin atajo para salir. Elegiste tu duración, y la asumes.</p>

<h3>Bloqueo de Webs y Apps Combinado</h3>
<p>Cold Turkey separa el bloqueo de webs y apps en productos distintos (Cold Turkey Blocker y Cold Turkey Writer). Lock In! gestiona ambos en una sola app. Las apps bloqueadas activan un panel de interrupción a pantalla completa, y los sitios web bloqueados no cargan en ningún navegador.</p>

<h3>Simplicidad en la Barra de Menú</h3>
<p>Lock In! vive en tu barra de menú. No hay ventana principal que gestionar, ni interfaz de programación compleja. Haz clic en el icono, elige una duración, inicia una sesión. Las listas de bloqueo predefinidas para Social, Entretenimiento, Noticias y Compras significan que puedes pasar de cero a concentrado en dos clics.</p>

<p>El mismo bloqueo irrompible, experiencia nativa de Mac. <a href="https://apps.apple.com/app/lockin/id6802325423">Consigue Lock In! en la Mac App Store</a></p>
`,
  },

  "block-apps-during-focus-mac": {
    slug: "block-apps-during-focus-mac",
    title: "Cómo Bloquear Apps Durante Sesiones de Enfoque en Mac",
    description:
      "Bloquear sitios web es solo la mitad de la batalla. Slack, Discord, iMessage y los juegos viven fuera del navegador — y el modo Enfoque de macOS en realidad no impide que los abras.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Has bloqueado Reddit y Twitter en tu navegador. Te sientes disciplinado. Entonces haces clic en Discord "para revisar un mensaje", y 30 minutos desaparecen en un canal de memes. O abres Slack para responder a un hilo y terminas leyendo todos los canales en los que estás.</p>

<p>Bloquear sitios web resuelve la mitad del problema de las distracciones. La otra mitad vive en tu carpeta de Aplicaciones.</p>

<h2>Por Qué el Modo Enfoque de macOS No Es Suficiente</h2>
<p>El modo Enfoque integrado de Apple filtra notificaciones — puede silenciar avisos de apps específicas. Pero no te impide abrir esas apps. Puedes seguir abriendo Discord, Slack, Mensajes o Steam durante una sesión de "No Molestar". El modo Enfoque oculta las alertas; no bloquea la fuente.</p>

<p>Esto significa que el modo Enfoque solo ayuda con las interrupciones, no con las distracciones que te provocas tú mismo. Si eres tú quien abre la app, el modo Enfoque no hace nada.</p>

<h2>Lock In! Bloquea Apps y Webs Juntas</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> va más allá del bloqueo de webs. Cuando añades una app a tu lista de bloqueo e inicias una sesión, cualquier intento de abrir esa app activa un panel de interrupción a pantalla completa. Cubre tu pantalla, te dice que la app está bloqueada y te devuelve a lo que estabas haciendo.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! blocking distracting apps during a focus session on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Interrupción a Pantalla Completa, No un Aviso Suave</h3>
<p>Algunos bloqueadores muestran una pequeña notificación cuando abres una app bloqueada. Eso es fácil de descartar. El panel de interrupción de Lock In! toma control de toda la pantalla. Es imposible de ignorar e imposible usar la app bloqueada detrás. Ese es el punto — si el bloqueo es fácil de evadir, no es un bloqueo.</p>

<h3>Combínalo con el Bloqueo de Webs</h3>
<p>El verdadero poder está en combinar ambos. Bloquea sitios web de redes sociales en todos los navegadores mediante la extensión de sistema, y bloquea apps de mensajería y entretenimiento mediante el bloqueador de apps. Durante una sesión de Lock In!, todos los caminos habituales de distracción quedan cerrados — navegador y apps.</p>

<h3>Las Listas Predefinidas Te Dan un Punto de Partida</h3>
<p>Lock In! incluye listas de bloqueo predefinidas para categorías de distracción comunes: Social, Entretenimiento, Noticias y Compras. Estas cubren sitios web populares, y puedes añadir apps específicas junto a ellas. Crea una lista de bloqueo una vez y reutilízala en cada sesión.</p>

<p>Bloquea las apps, no solo las notificaciones. <a href="https://apps.apple.com/app/lockin/id6802325423">Consigue Lock In! en la Mac App Store</a></p>
`,
  },

  "mac-screen-time-website-blocking-limitations": {
    slug: "mac-screen-time-website-blocking-limitations",
    title: "El Bloqueo de Webs de Tiempo de Uso en Mac Está Roto — Aquí Te Decimos Por Qué",
    description:
      "Tiempo de Uso en Mac promete límites de sitios web, pero solo funciona en Safari, se puede descartar con un clic y se rompe regularmente con las actualizaciones de macOS.",
    date: "2026-09-06",
    readTime: "5 min de lectura",
    content: `
<p>Si has intentado usar Tiempo de Uso en tu Mac para bloquear sitios web que distraen, ya has descubierto la frustración. Apple construyó Tiempo de Uso principalmente para el control parental en iPhones. La versión de Mac es una idea tardía, y sus funciones de bloqueo de webs lo reflejan.</p>

<h2>Los Problemas del Bloqueo de Webs de Tiempo de Uso</h2>

<h3>Solo Safari</h3>
<p>Las restricciones de sitios web de Tiempo de Uso solo se aplican a Safari. Si usas Chrome, Firefox, Arc, Brave o cualquier otro navegador — y la mayoría de los profesionales usan al menos un navegador que no es Safari — los límites no se aplican. Puedes bloquear twitter.com en Tiempo de Uso y seguir viendo Twitter en Chrome sin ninguna restricción.</p>

<h3>Descartar con Un Clic</h3>
<p>Cuando alcanzas un límite de sitio web de Tiempo de Uso en Safari, ves un aviso. Ese aviso tiene un botón de "Ignorar Límite". Un clic y vuelves al sitio. El límite se reinicia al día siguiente y lo vuelves a hacer. Es un recordatorio, no un bloqueo — y los recordatorios no funcionan contra las distracciones habituales.</p>

<h3>Poco Fiable en las Actualizaciones</h3>
<p>Tiempo de Uso en Mac tiene un historial de errores. Límites que dejan de sincronizarse, restricciones que se desactivan solas en silencio, categorías que no incluyen los sitios web correctos. Cada actualización de macOS parece arreglar algunos problemas e introducir otros. No es una herramienta con la que puedas contar para la disciplina de concentración diaria.</p>

<h3>Sin Sesiones Basadas en Temporizador</h3>
<p>Tiempo de Uso usa límites de tiempo diarios — "30 minutos de redes sociales al día". Pero así no funciona el trabajo de concentración. Necesitas bloquear sitios durante las próximas 2 horas mientras terminas un proyecto, no gestionar un presupuesto diario. Tiempo de Uso no admite sesiones de enfoque con temporizador en absoluto.</p>

<h2>Lock In! Hace Lo Que Tiempo de Uso Debería</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> se construyó específicamente porque Tiempo de Uso falla en este trabajo. Usa una extensión de sistema de macOS para bloquear sitios web en todos los navegadores — Safari, Chrome, Firefox, Arc, todos ellos. Ningún navegador se libra.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! replacing Screen Time for website blocking on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Sin Botón de Descartar</h3>
<p>Los sitios web bloqueados simplemente no cargan. No hay aviso que ignorar, ni botón que pulsar. En Modo Estricto, ni siquiera puedes terminar la sesión antes de tiempo. El bloqueo es absoluto.</p>

<h3>Basado en Sesiones, No en Presupuestos</h3>
<p>Lock In! usa sesiones con temporizador. Bloquea tus distracciones durante 25 minutos, 1 hora o 4 horas. Cuando termina la sesión, todo se desbloquea automáticamente. Esto encaja con cómo funcionan las sesiones de trabajo reales — ráfagas concentradas, no un racionamiento de todo el día.</p>

<p>Deja de luchar contra las limitaciones de Tiempo de Uso. <a href="https://apps.apple.com/app/lockin/id6802325423">Consigue Lock In! en la Mac App Store</a></p>
`,
  },

  "pomodoro-website-blocker-mac": {
    slug: "pomodoro-website-blocker-mac",
    title: "Temporizador Pomodoro con Bloqueo de Webs para Mac",
    description:
      "La técnica Pomodoro se desmorona cuando tu sprint de concentración de 25 minutos incluye un desvío de 10 minutos a Instagram. Un temporizador solo no basta — necesitas bloqueo durante cada intervalo.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>La Técnica Pomodoro es simple: trabaja 25 minutos, descansa 5 minutos, repite. Es uno de los métodos de productividad más populares porque es fácil de empezar — pones un temporizador y ya está. Pero aquí está el problema: un temporizador no te impide abrir Twitter en el minuto 3.</p>

<p>La mayoría de las apps Pomodoro son solo temporizadores con un icono de tomate. Cuentan hacia atrás. Suenan cuando termina el intervalo. No hacen nada para proteger los 25 minutos intermedios. Si te distraes durante un Pomodoro, el temporizador sigue corriendo y has desperdiciado todo un intervalo.</p>

<h2>Por Qué los Temporizadores Sin Bloqueo No Funcionan</h2>
<p>La Técnica Pomodoro asume que te mantendrás concentrado durante cada sprint. En 2005, cuando se popularizó, eso era más realista. En 2026, con un navegador lleno de contenido optimizado algorítmicamente a una pestaña de distancia, la pura fuerza de voluntad no basta. Los estudios sobre distracción digital muestran que, una vez que cambias de contexto a un sitio de redes sociales, se necesitan una media de 23 minutos para volver a concentrarte por completo. Eso es casi un Pomodoro entero — perdido.</p>

<p>Un temporizador Pomodoro sin bloqueo de webs es como un plan de entrenamiento sin gimnasio. La estructura está ahí, pero el entorno juega en tu contra.</p>

<h2>Lock In! Combina Pomodoro con Bloqueo a Nivel de Sistema</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> tiene soporte Pomodoro integrado. Configura la duración de tu intervalo de trabajo, y Lock In! bloquea los sitios web y apps que elijas durante toda la duración. Cuando termina el intervalo, todo se desbloquea para tu descanso. Cuando termina el descanso, el bloqueo se reanuda para el siguiente sprint.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! Pomodoro timer with website blocking on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Todos los Navegadores, Todas las Apps</h3>
<p>El bloqueo funciona a nivel de sistema de macOS mediante una extensión de red. No importa si usas Safari, Chrome o Arc — los sitios que distraen no cargan. Combínalo con el bloqueo de apps para cerrar Discord, Slack o juegos durante cada sprint.</p>

<h3>Modo Estricto para Pomodoros Honestos</h3>
<p>Activa el Modo Estricto y no podrás cancelar un Pomodoro antes de tiempo. Sin excepciones de "solo voy a echar un vistazo a mi feed". El intervalo se completa en toda su duración con todos los bloqueos activos. Esta es la Técnica Pomodoro tal como se concibió — sprints de concentración ininterrumpidos.</p>

<h3>Sigue Tu Progreso</h3>
<p>Las estadísticas diarias de Lock In! con un gráfico de barras de 7 días muestran cuántas sesiones concentradas has completado. Con el tiempo, verás patrones — qué días eres más productivo, cuándo tiendes a saltarte sesiones y cómo tu concentración mejora semana a semana.</p>

<p>Dale dientes de verdad a tus Pomodoros. <a href="https://apps.apple.com/app/lockin/id6802325423">Consigue Lock In! en la Mac App Store</a></p>
`,
  },

  "strict-mode-website-blocker-mac": {
    slug: "strict-mode-website-blocker-mac",
    title: "Bloqueador de Webs con Modo Estricto para Mac — Sin Forma de Hacer Trampa",
    description:
      "Todo bloqueador de webs tiene un botón de cancelar — y tu yo futuro lo va a usar. Un modo estricto que elimina la opción por completo es la única versión que funciona a largo plazo.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Instalas un bloqueador de webs. Añades Reddit, Twitter, YouTube a la lista. Inicias una sesión de enfoque de 2 horas. Catorce minutos después, piensas "solo voy a revisar una cosa" y pulsas el botón de cancelar. El bloqueo se levanta, abres Reddit, y las dos horas desaparecen.</p>

<p>Esto no es un fallo de la herramienta — es una característica de todo bloqueador que incluye un botón para deshacer. Si tu yo futuro puede cancelar el bloqueo, tu yo presente solo está haciendo un ritual, no imponiendo un límite.</p>

<h2>El Problema del Botón de Cancelar</h2>
<p>La mayoría de los bloqueadores de webs te dejan terminar una sesión cuando quieras. Algunos añaden un pequeño retraso — espera 10 segundos antes de desbloquear. Otros te hacen escribir una frase. Estas son técnicas de fricción, y funcionan para impulsos leves. Pero para antojos fuertes — del tipo en el que llevas 30 minutos peleando con un problema difícil y tu cerebro grita pidiendo dopamina — un retraso de 10 segundos no es nada.</p>

<p>La investigación sobre dispositivos de compromiso muestra que los más efectivos eliminan la opción por completo. No puedes comer comida basura que no está en casa. No puedes gastar dinero que ya has transferido a una cuenta de ahorro bloqueada. Y no puedes navegar por sitios bloqueados si no hay botón de cancelar.</p>

<h2>El Modo Estricto de Lock In! Elimina la Salida</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> ofrece un Modo Estricto que, una vez activado, hace que la sesión actual sea completamente incancelable. No hay botón para terminarla antes de tiempo. No hay atajo de teclado. No hay truco de salir y reabrir la app. Elegiste una duración cuando empezaste la sesión, y los bloqueos permanecen activos durante cada segundo de ella.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! Strict Mode — uncancellable website blocking on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Cómo Funciona</h3>
<p>Cuando inicias una sesión con el Modo Estricto activado, Lock In! activa su extensión de red a nivel de sistema para bloquear sitios web en todos los navegadores, y su bloqueador de apps intercepta cualquier aplicación bloqueada. El temporizador de sesión cuenta hacia atrás en la barra de menú. Durante este tiempo, el control de "Terminar Sesión" desaparece. No puedes acceder a él. La única salida es esperar.</p>

<h3>Empieza en Pequeño</h3>
<p>Si el Modo Estricto suena intimidante, empieza con sesiones de 25 minutos. Puedes sobrevivir 25 minutos sin Instagram. Una vez que eso resulte cómodo, extiéndelo a 50 minutos, luego a 90. La incomodidad se disipa rápido cuando te das cuenta de que realmente conseguiste trabajar.</p>

<h3>Tu Yo Futuro Te Lo Agradecerá</h3>
<p>El Modo Estricto es un trato que haces contigo mismo: "Durante los próximos X minutos, las distracciones no son una opción". Convierte cada sesión en trabajo profundo genuino porque no hay alternativa. Sin negociación, sin excepción, sin vía de escape.</p>

<p>El único bloqueador que funciona es uno que no puedes apagar. <a href="https://apps.apple.com/app/lockin/id6802325423">Consigue Lock In! en la Mac App Store</a></p>
`,
  },

  "block-youtube-mac-during-work": {
    slug: "block-youtube-mac-during-work",
    title: "Cómo Bloquear YouTube en Mac Durante el Horario de Trabajo",
    description:
      "El reproducción automática y la barra lateral de recomendaciones de YouTube convierten una búsqueda rápida en un desvío de una hora. Bloquearlo durante el trabajo requiere algo más fuerte que cerrar la pestaña.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>YouTube es peculiarmente peligroso para la productividad porque se siente productivo. Vas a buscar un tutorial para una tarea de trabajo, y la barra lateral te recomienda un vídeo "relacionado" que en realidad es un documental de 40 minutos sobre agujeros negros. La reproducción automática pasa al siguiente vídeo antes de que hayas decidido verlo. Una búsqueda legítima se convierte en una hora de consumo de contenido.</p>

<p>A diferencia de las redes sociales puras, YouTube tiene una utilidad genuina. Eso es lo que hace tan difícil dejarlo — siempre puedes justificar la visita. Pero la plataforma está diseñada para convertir una visita de 3 minutos en una sesión de 30 minutos, y durante el horario de trabajo, esa tasa de conversión es devastadora.</p>

<h2>Por Qué el Autocontrol Falla Contra YouTube</h2>
<p>El motor de recomendaciones de YouTube funciona con miles de millones de datos sobre lo que mantiene a la gente viendo. Tu fuerza de voluntad funciona con lo que hayas desayunado. Esta no es una pelea justa. La barra lateral, la reproducción automática, las notificaciones y la página de inicio personalizada existen para maximizar tu tiempo en el sitio. Luchar contra eso con "solo voy a ver un vídeo" es una estrategia perdedora.</p>

<p>Las extensiones de navegador que bloquean YouTube se pueden desactivar en segundos. Eliminar YouTube de tus marcadores no ayuda cuando la URL está grabada en tu memoria muscular.</p>

<h2>Bloquea YouTube en Todo el Sistema con Lock In!</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> bloquea youtube.com a nivel de sistema de macOS. Durante una sesión de enfoque, YouTube no cargará en ningún navegador — Safari, Chrome, Firefox, Arc, ninguno de ellos. La extensión de sistema intercepta la petición antes de que llegue al navegador, así que no hay página que cargar, ni barra lateral que te tiente, ni reproducción automática que empiece.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! blocking YouTube on Mac during work hours" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Bloquea YouTube Sin Bloquearlo Todo</h3>
<p>No tienes que ir a lo nuclear. Añade youtube.com a tu lista de bloqueo personalizada mientras mantienes accesibles otros sitios. O usa la lista predefinida de Entretenimiento, que bloquea YouTube junto con otras plataformas de vídeo y streaming. Personaliza la lista para que coincida con tus patrones de distracción reales.</p>

<h3>Modo Estricto para los Adictos a YouTube</h3>
<p>Si has intentado bloquear YouTube antes y siempre has terminado cancelando el bloqueo para "revisar algo rápido", activa el Modo Estricto. La sesión se vuelve incancelable. YouTube permanece bloqueado hasta que el temporizador llegue a cero, sin importar lo tentador que sea el impulso de buscar algo.</p>

<h3>Guarda los Tutoriales para el Descanso</h3>
<p>Con el soporte Pomodoro, Lock In! crea de forma natural ventanas en las que YouTube está disponible — tus intervalos de descanso. ¿Necesitas ver un tutorial? Márcalo y míralo en tu siguiente descanso. De esta forma YouTube te sirve a ti según tu horario, no al revés.</p>

<p>Quita YouTube de la mesa durante el horario de trabajo. <a href="https://apps.apple.com/app/lockin/id6802325423">Consigue Lock In! en la Mac App Store</a></p>
`,
  },

  "selfcontrol-alternative-mac": {
    slug: "selfcontrol-alternative-mac",
    title: "Alternativa a SelfControl para Mac",
    description:
      "SelfControl es un querido bloqueador de código abierto, pero no se ha mantenido al día con el macOS moderno. Sin bloqueo de apps, sin interfaz en la barra de menú, y problemas de compatibilidad con las actualizaciones recientes del sistema.",
    date: "2026-09-06",
    readTime: "5 min de lectura",
    content: `
<p>SelfControl ha sido el bloqueador de webs gratuito de referencia para Mac desde 2009. Su promesa principal — bloquear sitios web durante un tiempo fijo sin forma de deshacerlo — fue revolucionaria. Pero ya estamos en 2026, y SelfControl empieza a acusar el paso del tiempo. Si lo has estado usando y te has topado con limitaciones, no estás solo.</p>

<h2>Dónde SelfControl se Queda Corto en 2026</h2>

<h3>Sin Bloqueo de Apps</h3>
<p>SelfControl solo bloquea sitios web. No puede hacer nada respecto a apps de escritorio que distraen como Discord, Slack, Steam o Mensajes. Si tu problema de distracción va más allá del navegador — y para la mayoría de la gente así es — SelfControl solo cubre la mitad del problema.</p>

<h3>Sin Presencia en la Barra de Menú</h3>
<p>SelfControl requiere que abras su ventana de aplicación completa para iniciar una sesión. No hay icono en la barra de menú, ni interfaz de acceso rápido. Para una herramienta que usas varias veces al día, esta fricción se acumula. Tienes que encontrar la app, abrirla, configurar tu bloqueo e iniciarlo — cada vez.</p>

<h3>Problemas de Compatibilidad</h3>
<p>SelfControl modifica archivos de configuración de red a nivel de sistema para imponer sus bloqueos. Este enfoque se ha vuelto cada vez más frágil a medida que Apple endurece la seguridad de macOS con cada versión. Los usuarios reportan bloqueos que fallan en silencio, bloqueos que persisten más allá de su temporizador, y problemas de instalación tras las actualizaciones de macOS. La app es de código abierto y la mantienen voluntarios, así que las correcciones pueden retrasarse respecto al ciclo de lanzamientos de Apple.</p>

<h3>Sin Funciones de Pomodoro o Sesiones</h3>
<p>SelfControl tiene un solo modo: bloquear durante X minutos. No hay integración con Pomodoro, ni seguimiento de sesiones, ni estadísticas diarias. Es una herramienta de un solo propósito en un mundo donde las apps de concentración han evolucionado significativamente.</p>

<h2>Lock In! — Un Reemplazo Moderno</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> toma todo lo que a la gente le encanta de SelfControl — el bloqueo estricto e incancelable — y lo envuelve en una app moderna de macOS con funciones que SelfControl nunca ofreció.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! as a SelfControl alternative for modern macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Extensión de Sistema, No Trucos con Hosts</h3>
<p>Lock In! usa la API oficial Network Extension de Apple para bloquear sitios web. Esta es la forma soportada y a prueba de futuro de interceptar el tráfico de red en macOS. Sin modificaciones frágiles de archivos, sin roturas tras actualizaciones del sistema, sin entradas residuales si algo sale mal.</p>

<h3>Bloqueo de Webs + Apps</h3>
<p>Bloquea sitios web que distraen en todos los navegadores y apps que distraen mediante paneles de interrupción a pantalla completa. Una sola app cubre ambos frentes. SelfControl no puede bloquear apps en absoluto.</p>

<h3>Barra de Menú Primero</h3>
<p>Lock In! vive en la barra de menú. Clic, configura la duración, empieza. Sin ventana que buscar, sin cambiar de app. Está diseñado para el flujo de trabajo de iniciar sesiones de enfoque varias veces al día.</p>

<h3>Modo Estricto + Estadísticas</h3>
<p>El Modo Estricto refleja la filosofía incancelable de SelfControl. Las estadísticas diarias con un gráfico de 7 días añaden una responsabilidad que SelfControl nunca ofreció. Las listas de bloqueo predefinidas para Social, Entretenimiento, Noticias y Compras significan que estás bloqueando en segundos, no construyendo listas desde cero.</p>

<p>La misma filosofía, ejecución moderna. <a href="https://apps.apple.com/app/lockin/id6802325423">Consigue Lock In! en la Mac App Store</a></p>
`,
  },

  "focus-app-blocks-websites-and-apps-mac": {
    slug: "focus-app-blocks-websites-and-apps-mac",
    title: "App de Enfoque para Mac que Bloquea Tanto Webs como Apps",
    description:
      "La mayoría de las herramientas de enfoque bloquean sitios web o apps, no ambos. Las distracciones no respetan esa frontera — viven en tu navegador y en tu dock.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Has instalado un bloqueador de webs, así que Reddit y Twitter están controlados. Pero entonces abres Discord para "revisar un mensaje" y pierdes 20 minutos. Has instalado un temporizador de apps, así que Discord está controlado. Pero entonces abres reddit.com en Chrome y pierdes 20 minutos. A las distracciones no les importa la línea de categoría entre "webs" y "apps" — explotan cualquier canal que hayas dejado abierto.</p>

<p>Para proteger de verdad una sesión de enfoque, necesitas una única herramienta que bloquee ambas cosas. No dos herramientas, ni una extensión de navegador más un gestor de apps aparte — un bloqueador unificado que cubra cada vector de distracción en tu Mac.</p>

<h2>El Problema de las Dos Herramientas</h2>
<p>Usar herramientas separadas para el bloqueo de webs y apps crea huecos. El bloqueador de webs no sabe nada del horario del bloqueador de apps, y viceversa. Terminas gestionando dos listas de bloqueo, dos temporizadores, dos conjuntos de ajustes. Inevitablemente, uno expira antes que el otro, o uno no está configurado para una nueva distracción que has adquirido. La complejidad hace que sea menos probable que uses cualquiera de las dos herramientas de forma constante.</p>

<p>El propio macOS también divide este problema. Tiempo de Uso puede limitar sitios web de Safari y poner límites de tiempo de apps, pero los límites de webs son solo de Safari y los límites de apps se pueden descartar. El modo Enfoque silencia notificaciones pero no impide que abras nada. Ninguna herramienta está diseñada para sesiones de enfoque intencionales.</p>

<h2>Lock In! Bloquea Ambos desde Un Solo Icono de Barra de Menú</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> es una app de enfoque unificada para Mac que bloquea sitios web y apps que distraen de forma simultánea durante sesiones con temporizador.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! blocking both websites and apps on Mac for focus" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Bloqueo de Webs a Nivel de Sistema</h3>
<p>Una extensión de red de macOS bloquea sitios web en todos los navegadores — Safari, Chrome, Firefox, Arc, Brave, y cualquier otra app que haga peticiones web. Las listas de bloqueo predefinidas para Social, Entretenimiento, Noticias y Compras cubren a los sospechosos habituales. Añade dominios personalizados para cualquier cosa específica de tus hábitos.</p>

<h3>Bloqueo de Apps a Pantalla Completa</h3>
<p>Cuando intentas abrir una app bloqueada durante una sesión, Lock In! intercepta con un panel a pantalla completa. No es una notificación que puedas descartar — es un muro. La app bloqueada resulta inutilizable hasta que termine tu sesión. Esto cubre distracciones de escritorio como Discord, Slack, Steam, Mensajes y cualquier otra cosa en tu carpeta de Aplicaciones.</p>

<h3>Una Lista, Un Temporizador, Una Sesión</h3>
<p>Configura tus bloqueos de webs y apps juntos. Inicia una sesión desde la barra de menú y todo se activa a la vez. Cuando termina la sesión, todo se desactiva. Sin temporizadores separados que gestionar, sin horarios desajustados, sin huecos por los que se cuelen las distracciones.</p>

<h3>Pomodoro, Modo Estricto y Estadísticas</h3>
<p>Añade intervalos Pomodoro para estructurar tus sprints de trabajo. Activa el Modo Estricto para hacer las sesiones incancelables. Sigue tu historial de concentración con un gráfico de barras de 7 días. Estas funciones trabajan tanto en el bloqueo de webs como en el de apps — son parte de la misma sesión, no algo añadido desde una herramienta separada.</p>

<p>Una app, todas las distracciones, cero agujeros. <a href="https://apps.apple.com/app/lockin/id6802325423">Consigue Lock In! en la Mac App Store</a></p>
`,
  },

  "block-social-media-mac": {
    slug: "block-social-media-mac",
    title: "Cómo Bloquear las Redes Sociales en Mac Durante el Trabajo",
    description:
      "Instagram, X y TikTok están diseñados para atraerte de vuelta. Aquí tienes una configuración práctica para mantenerlos fuera de tu jornada laboral sin depender de la fuerza de voluntad.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Cierras la pestaña. Diez minutos después está abierta otra vez. No porque decidieras abrirla — simplemente lo hiciste, como quien se rasca una picazón. Las apps de redes sociales las construyen equipos cuyo trabajo entero es hacer ese bucle lo más sin fricción posible. La fuerza de voluntad no es una pelea justa contra eso.</p>

<p>La solución no es más disciplina. Es eliminar la opción durante las horas que importan.</p>

<h2>Por Qué "Simplemente No lo Abras" No Funciona</h2>
<p>Las plataformas sociales están diseñadas alrededor de recompensas variables — no sabes si el siguiente scroll tiene algo interesante, así que sigues deslizando para averiguarlo. Es el mismo mecanismo que usan las máquinas tragaperras. Decidir no revisar Instagram requiere que ganes una pequeña batalla de fuerza de voluntad docenas de veces al día, y solo necesitas perder una vez para que la sesión desaparezca.</p>

<p>Marcar el sitio, cerrar sesión u ocultar el icono de la app fallan por la misma razón: añaden unos segundos de fricción, pero unos segundos no bastan para detener un impulso habitual. Necesitas que la opción no exista durante el horario de trabajo, no que sea ligeramente más difícil de alcanzar.</p>

<h2>Bloquéalo a Nivel de Sistema</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> bloquea dominios de redes sociales en todo el sistema en Mac, así que Instagram, X, TikTok, Facebook y Reddit quedan inalcanzables en todos los navegadores durante una sesión de enfoque — no solo en el que configuraste.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Blocking social media sites on Mac during a focus session" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Una Lista de Bloqueo Social Predefinida</h3>
<p>En lugar de escribir a mano cada dominio social, una lista predefinida de Social integrada cubre las plataformas principales en un toque. Añade cualquier cosa de nicho — un foro específico, el cliente web de un servidor de Discord — a la misma lista en segundos.</p>

<h3>Funciona en Todos los Navegadores</h3>
<p>Una extensión de red de macOS impone el bloqueo por debajo de la capa del navegador, así que cambiar de Safari a Chrome para evadirlo no sirve de nada. Si el dominio está bloqueado, está bloqueado en todas partes en la máquina.</p>

<h3>Modo Estricto para los Días en que Sabes que Vas a Ceder</h3>
<p>Algunos días un bloqueo simple es suficiente. Otros días — una mañana estresante, una tarea aburrida — sabes que te vas a convencer de desactivarlo. El Modo Estricto elimina esa opción hasta que se acaba el temporizador, así que la decisión se toma una sola vez, al principio, cuando tienes más determinación.</p>

<h3>Combínalo con un Temporizador, No con una Prohibición Permanente</h3>
<p>Bloquear las redes sociales para siempre no es realista ni necesario — solo necesitas que desaparezcan durante los bloques de trabajo profundo. Configura una sesión para tus horas de concentración y deja que se levante automáticamente después, así revisar tu feed a la hora de comer es una elección, no un desliz.</p>

<p>Menos scroll, más trabajo entregado. <a href="https://apps.apple.com/app/lockin/id6802325423">Consigue Lock In! en la Mac App Store</a></p>
`,
  },

  "mac-focus-mode-doesnt-block-websites": {
    slug: "mac-focus-mode-doesnt-block-websites",
    title: "El Modo Enfoque de Mac No Bloquea Sitios Web — Esto Sí lo Hace",
    description:
      "La función Enfoque de Apple silencia notificaciones pero deja tu navegador completamente abierto. Si asumías que también te mantenía alejado de sitios que distraen, aquí está el hueco y cómo cerrarlo.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Activa el modo Enfoque en tu Mac, y las notificaciones se silencian — avisos de Slack, mensajes de texto, alertas de calendario, todo suprimido. Se siente como un modo de productividad. Así que es una suposición razonable que también te mantenga alejado de sitios web que distraen mientras está activo. No lo hace. El modo Enfoque no tiene nada que ver con lo que puedes abrir en tu navegador.</p>

<h2>Lo Que el Modo Enfoque Realmente Hace</h2>
<p>Enfoque es un filtro de notificaciones. Controla qué apps y personas pueden interrumpirte con banners, sonidos e insignias, y puede sincronizarse entre tu Mac, iPhone y iPad. Eso es genuinamente útil para reducir interrupciones de otras personas. Pero no toca el comportamiento saliente — nada te impide abrir Safari y escribir una URL tú mismo. El modo Enfoque te protege de interrupciones externas, no de tus propios hábitos.</p>

<p>Esta es una confusión común porque "Enfoque" suena como si debiera significar "libre de distracciones", y el marketing de Apple se inclina hacia ese encuadre. En la práctica se parece más a No Molestar con reglas más granulares sobre quién puede llegar hasta ti.</p>

<h2>Lo Que Realmente Bloquea Sitios Web</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> se encarga de la parte que el modo Enfoque se salta — bloquea sitios web y apps que distraen directamente, así quedan inalcanzables en lugar de solo silenciados.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Website blocking on Mac, unlike Apple's Focus mode" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Bloqueo de Webs Real, No Filtrado de Notificaciones</h3>
<p>Una extensión de red a nivel de sistema bloquea los dominios que elijas en todos los navegadores de tu Mac. Escribir la URL directamente no sirve de nada — el sitio simplemente no carga mientras hay una sesión activa.</p>

<h3>Usa Ambos Juntos</h3>
<p>El modo Enfoque y un bloqueador de webs de verdad no son herramientas que compiten — resuelven mitades diferentes del mismo problema. Activa un perfil de Enfoque para silenciar notificaciones de personas, e inicia una sesión para bloquear los sitios y apps que tú mismo abrirías. Juntos cubren ambas direcciones de la interrupción.</p>

<h3>Basado en Sesiones, No Todo o Nada</h3>
<p>Configura una duración e inícala desde la barra de menú cuando te sientes a trabajar. Añade intervalos Pomodoro si quieres descansos estructurados, o el Modo Estricto si no confías en ti mismo para parar antes de tiempo. Cuando termina el temporizador, todo se desbloquea automáticamente.</p>

<p>Notificaciones silenciadas es un comienzo. Sitios realmente bloqueados marca la diferencia. <a href="https://apps.apple.com/app/lockin/id6802325423">Consigue Lock In! en la Mac App Store</a></p>
`,
  },

  "website-blocker-all-browsers-mac": {
    slug: "website-blocker-all-browsers-mac",
    title: "Bloqueador de Webs que Funciona en Todos los Navegadores en Mac",
    description:
      "La mayoría de las extensiones de bloqueo solo cubren el navegador en el que están instaladas. Si cambias de navegador para evadir un bloqueo, aquí tienes una configuración que cierra ese agujero.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Instalas una extensión de bloqueo de webs en Chrome. Funciona — durante más o menos un día, hasta que abres inconscientemente Safari en su lugar, donde la extensión no existe, y el sitio carga sin fricción. Ni siquiera pretendías evadirla; tu Mac simplemente tiene más de un navegador, y el bloqueador solo sabía de uno de ellos.</p>

<p>Este es el fallo más común de los bloqueadores basados en extensiones. Están limitados a un solo navegador por diseño, y cambiar de navegador cuesta menos esfuerzo del que la mayoría cree.</p>

<h2>Por Qué los Bloqueadores Basados en Extensiones Tienen Fugas</h2>
<p>Una extensión de navegador solo puede ver y controlar el tráfico dentro del navegador que la aloja. Si tienes Chrome, Safari, Firefox y Arc instalados — algo común en un Mac — una extensión en uno deja los otros tres completamente abiertos. Algunas personas ni siquiera se dan cuenta de que tienen varios navegadores hasta que están buscando activamente una forma de evadir un bloqueo, momento en el que su cerebro encuentra el icono de Safari en el dock sorprendentemente rápido.</p>

<p>Las extensiones también son fáciles de desactivar en unos pocos clics desde los propios ajustes del navegador, lo que anula el propósito en el momento en que tienes una mala tarde.</p>

<h2>Bloquea a Nivel de Sistema en Su Lugar</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> usa una extensión de red de macOS en lugar de un complemento de navegador, así que el bloqueo se aplica por debajo de todos los navegadores a la vez — Safari, Chrome, Firefox, Arc, Brave, y cualquier otro instalado en la máquina.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="System-level website blocking across all Mac browsers" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Un Bloqueo, Todos los Navegadores</h3>
<p>Añade un dominio una vez y queda bloqueado en todo el Mac, inmediatamente. No hay configuración por navegador, ni una extensión separada que instalar cuatro veces, ni un navegador que se te olvide cubrir.</p>

<h3>Sin Extensión que Desactivar a Mitad de Sesión</h3>
<p>Como el bloqueo funciona a nivel de sistema en lugar de dentro de un navegador, no hay un interruptor de extensión que apagar cuando baja la motivación. El Modo Estricto va un paso más allá, haciendo que toda la sesión sea incancelable hasta que termine el temporizador.</p>

<h3>Listas Predefinidas para los Culpables Obvios</h3>
<p>Las listas predefinidas de Social, Entretenimiento, Noticias y Compras cubren las categorías de distracción más comunes desde el primer momento, así que no hace falta buscar e introducir manualmente decenas de dominios en cada servicio que quieres bloquear.</p>

<p>Cambiar de navegador no debería ser un agujero. <a href="https://apps.apple.com/app/lockin/id6802325423">Consigue Lock In! en la Mac App Store</a></p>
`,
  },

  "block-reddit-mac": {
    slug: "block-reddit-mac",
    title: "Cómo Bloquear Reddit en Mac — Detén el Scroll",
    description:
      "El scroll infinito y los subreddits interminables de Reddit lo convierten en una de las formas más fáciles de perder una tarde. Así puedes mantenerlo fuera de tu jornada laboral específicamente.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Reddit es especialmente bueno para devorar tiempo porque nunca se acaba. Terminas un subreddit y hay otro. Terminas la página principal y hay un hilo de comentarios. A diferencia de un solo artículo o vídeo, no tiene un punto de parada natural integrado — el scroll simplemente sigue generando más, y "una publicación más" puede seguir durante una hora sin que te des cuenta.</p>

<p>Si has abierto Reddit "solo para revisar una cosa" y has mirado el reloj 45 minutos después, esta es la razón. No es un fallo de disciplina — es un producto construido para eliminar las señales de parada.</p>

<h2>Bloquear Solo Reddit No Siempre Es Suficiente</h2>
<p>Mucha gente prueba extensiones de navegador que bloquean específicamente reddit.com, lo cual funciona hasta que abren otro navegador sin la extensión, o hasta que old.reddit.com o la versión web móvil se cuelan por una regla de dominio que no era lo bastante específica. Reddit también tiene muchos subdominios y rutas de redirección, así que una lista de bloqueo estrecha puede pasar por alto casos límite.</p>

<h2>Una Forma Más Limpia de Bloquearlo</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> bloquea Reddit a nivel de sistema en Mac, cubriendo el dominio principal y sus variantes en todos los navegadores que tengas instalados, no solo en el que configuraste una regla.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Blocking Reddit on Mac during focus sessions" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Añádelo Una Vez, Bloqueado en Todas Partes</h3>
<p>Añade reddit.com a tu lista de bloqueo — o usa la lista predefinida de Social o Entretenimiento, que ya lo incluye — y queda inalcanzable en Safari, Chrome, Firefox y Arc simultáneamente. Sin configuración por navegador.</p>

<h3>Bloquea la App También</h3>
<p>Si usas la app de escritorio de Reddit o un cliente de terceros envuelto como app de Mac, Lock In! puede bloquearlo directamente con una interrupción a pantalla completa, cerrando el hueco que un bloqueador solo de webs pasaría por alto.</p>

<h3>Limitado a Cuando lo Necesitas</h3>
<p>No tienes que bloquear Reddit para siempre — la mayoría de la gente no quiere eso. Actívalo durante sesiones de trabajo con un temporizador, y se abre normalmente otra vez cuando termina la sesión, así que navegar en tu propio tiempo no se ve afectado.</p>

<h3>Modo Estricto para los Días Honestos</h3>
<p>Si sabes que un descanso de cinco minutos en Reddit tiende a convertirse en cincuenta, el Modo Estricto elimina la opción de terminar la sesión antes de tiempo. El bloqueo se mantiene hasta que el temporizador dice que se acabó.</p>

<p>El scroll termina donde empieza el bloqueo. <a href="https://apps.apple.com/app/lockin/id6802325423">Consigue Lock In! en la Mac App Store</a></p>
`,
  },

  "focus-app-with-stats-mac": {
    slug: "focus-app-with-stats-mac",
    title: "App de Enfoque con Estadísticas Diarias para Mac",
    description:
      "La mayoría de los bloqueadores solo bloquean. Sin un registro de tu tiempo de concentración, es difícil saber si el hábito realmente está mejorando — aquí tienes una configuración que lo registra por ti.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Empiezas a usar una herramienta de enfoque, ejecutas algunas sesiones, y una semana después te preguntan cómo va. Sinceramente no lo sabes. Quizá has sido constante, quizá te has saltado la mitad de los días, quizá tus sesiones se han acortado sin que lo notaras. Sin un registro, "últimamente he estado más concentrado" es una sensación, no un hecho.</p>

<p>La mayoría de los bloqueadores de webs y apps están construidos para hacer exactamente una cosa — bloquear — y ahí se detienen. Eso está bien para el momento en que estás en una sesión, pero te deja sin forma de ver el patrón a lo largo de días o semanas, que es donde los hábitos realmente se forman o se rompen.</p>

<h2>Por Qué el Seguimiento Cambia el Comportamiento</h2>
<p>Ver un registro visible de tu tiempo de concentración hace algo que el bloqueo por sí solo no hace: convierte un hábito invisible en uno medible. Una racha de sesiones constantes motiva de una forma que "creo que he estado concentrándome más" no lo hace. Un hueco en el gráfico es un empujón para volver al camino antes de que se convierta en una caída de dos semanas. El seguimiento no es solo llevar un registro — es retroalimentación que da forma a la siguiente sesión.</p>

<h2>Un Bloqueador que También Te Muestra el Patrón</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> combina el bloqueo de webs y apps con estadísticas diarias, así que cada sesión que ejecutas se suma a un registro visible en lugar de desaparecer en el momento en que termina.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Daily focus stats and 7-day chart on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Un Gráfico de 7 Días, No Solo un Número</h3>
<p>Un gráfico de barras móvil de siete días muestra el tiempo de concentración de un vistazo, así puedes detectar tendencias — una semana fuerte, un lunes lento, una caída que empieza antes de convertirse en una recaída completa a los viejos hábitos.</p>

<h3>Totales Diarios en la Barra de Menú</h3>
<p>Consulta el tiempo concentrado de hoy sin abrir un panel o app separado. Está ahí cuando echas un vistazo a la barra de menú, lo que mantiene el bucle de retroalimentación ajustado en lugar de enterrado en una pantalla de ajustes que olvidas visitar.</p>

<h3>Las Estadísticas Cubren Tanto Webs como Apps</h3>
<p>Como el bloqueo de webs y apps funciona en la misma sesión, las estadísticas reflejan tu tiempo de concentración real, no solo una parte de él. No hace falta reconciliar números de dos herramientas separadas.</p>

<p>Lo que se mide se repite. <a href="https://apps.apple.com/app/lockin/id6802325423">Consigue Lock In! en la Mac App Store</a></p>
`,
  },

  "mac-parental-controls-for-yourself": {
    slug: "mac-parental-controls-for-yourself",
    title: "Control Parental en Mac para Ti Mismo — Bloqueo de Webs Autoimpuesto",
    description:
      "Tiempo de Uso está construido para gestionar la cuenta de un niño, pero muchos adultos lo configuran en su propio Mac esperando el mismo efecto. Aquí está por qué eso resulta incómodo, y una mejor opción.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Hay un tipo específico de búsqueda que va más o menos así: "cómo configurar control parental en mi propio Mac". No es un error tipográfico — muchos adultos quieren la misma restricción que un padre pondría en el portátil de un hijo, solo que aplicada a sí mismos, porque saben exactamente qué sitios se comen sus tardes y quieren un muro que no puedan sortear fácilmente hablándose a sí mismos.</p>

<p>El instinto tiene sentido. La herramienta no encaja del todo.</p>

<h2>Por Qué Tiempo de Uso Se Siente Mal para Esto</h2>
<p>El control parental de Tiempo de Uso está construido alrededor de una estructura de Compartir en Familia — una cuenta de padre gestionando una cuenta infantil, con una contraseña de Tiempo de Uso que el niño no conoce. Cuando intentas aplicar eso a tu propio Mac de un solo usuario, estás fijando una contraseña que obviamente conoces, en una cuenta que controlas por completo, la cual puedes desactivar cuando el bloqueo se vuelva inconveniente. Todo el modelo de seguridad asume que un adulto está restringiendo a otra persona. Gíralo hacia dentro y deja de funcionar como una barrera real.</p>

<p>Además, solo limita Safari para las restricciones de sitios web, así que cualquier otro navegador que tengas instalado queda intacto.</p>

<h2>Una Herramienta Construida para el Bloqueo Autoimpuesto</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> está diseñado específicamente para personas que restringen su propio Mac, no para un padre gestionando la cuenta de un hijo — todo el modelo de interacción asume que tú eres quien fija y respeta el límite.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Self-imposed website and app blocking on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Basado en Sesiones, No en Cuentas</h3>
<p>En lugar de una restricción permanente ligada a una cuenta gestionada, inicias una sesión con temporizador cuando quieras concentrarte. Bloquea tus sitios y apps elegidos durante esa ventana, y luego se levanta automáticamente — sin necesidad de una estructura de cuenta separada.</p>

<h3>Modo Estricto en Lugar de una Contraseña que Conoces</h3>
<p>Como una contraseña que tú mismo fijaste no es un disuasorio real, el Modo Estricto elimina la posibilidad de cancelar una sesión antes de tiempo por completo. El compromiso se hace una sola vez, al principio, en lugar de estar a un clic de deshacerse.</p>

<h3>Cubre Todos los Navegadores, No Solo Safari</h3>
<p>El bloqueo funciona a nivel de sistema, así que se aplica ya sea que estés en Safari, Chrome, Firefox o Arc — sin huecos dejados por restricciones específicas de navegador.</p>

<p>Restricción construida para ti, no para la cuenta prestada de un niño. <a href="https://apps.apple.com/app/lockin/id6802325423">Consigue Lock In! en la Mac App Store</a></p>
`,
  },

  "deep-work-app-mac": {
    slug: "deep-work-app-mac",
    title: "App de Trabajo Profundo para Mac — Bloquea Todo, Concéntrate en Una Cosa",
    description:
      "El trabajo profundo requiere tramos ininterrumpidos de tiempo, pero un solo aviso o pestaña abierta puede terminar una sesión antes de que empiece. Aquí está cómo proteger el bloque como se debe.",
    date: "2026-09-06",
    readTime: "5 min de lectura",
    content: `
<p>El concepto de trabajo profundo de Cal Newport se basa en una idea simple pero exigente: el rendimiento cognitivo significativo requiere tramos largos e ininterrumpidos de concentración, y ese estado tarda tiempo en alcanzarse y casi nada en romperse. Una sola notificación de Slack, un cambio reflejo de pestaña o un aviso de Discord no solo te cuesta los treinta segundos de la interrupción — te cuesta los diez o quince minutos que tarda en volver al flujo después.</p>

<p>Por eso el trabajo profundo es tan difícil de proteger casualmente. No es que la gente no tenga las dos horas; es que las dos horas se cortan en seis fragmentos de veinte minutos por cosas que en el momento parecían inofensivas.</p>

<h2>Lo Que Realmente Requiere un Bloque de Trabajo Profundo</h2>
<p>Proteger una sesión de trabajo profundo significa eliminar cada interrupción plausible antes de que empiece, no reaccionar a las interrupciones a medida que llegan. Eso significa que las apps de comunicación son inalcanzables, los sitios de noticias y redes sociales son inalcanzables, y no hay un interruptor fácil para revisar "solo una cosa" a mitad de camino. La barrera tiene que existir antes que la tentación.</p>

<h2>Construyendo el Bloque en Mac</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> está construido exactamente para esto — inicia una sesión y tanto los sitios web como las apps que distraen quedan bloqueados durante su duración, en todo el sistema.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Deep work session with websites and apps blocked on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Configura el Bloqueo Antes de Empezar a Trabajar</h3>
<p>Configura una lista de bloqueo que cubra apps de comunicación, sitios sociales y cualquier otra cosa que tienda a sacarte del flujo. Inicia la sesión antes de abrir tu trabajo real, así no hay una ventana en la que una distracción pueda colarse antes de que el bloqueo esté activo.</p>

<h3>Pomodoro para Bloques de Trabajo Profundo Estructurados</h3>
<p>Si dos horas ininterrumpidas suenan intimidantes, los intervalos Pomodoro dividen el trabajo profundo en sprints de 25 minutos con descansos cortos — lo bastante largo para entrar en flujo, lo bastante corto para mantenerlo durante un día completo sin agotarte.</p>

<h3>Modo Estricto para las Sesiones que Más Importan</h3>
<p>Para el trabajo que genuinamente necesita protección — una fecha límite, un problema difícil — el Modo Estricto hace la sesión incancelable. No hay un momento de clic-para-desactivar cuando aparece la primera frase difícil del día.</p>

<h3>El Bloqueo de Apps a Pantalla Completa Cubre el Escritorio, No Solo el Navegador</h3>
<p>Las interrupciones del trabajo profundo no solo vienen del navegador. Las notificaciones de Slack, Discord y Mensajes en el escritorio son igual de disruptivas, y Lock In! las bloquea con una interrupción a pantalla completa en lugar de dejarlas para que un bloqueador de webs las pase completamente por alto.</p>

<p>Dos horas protegidas superan a seis fragmentadas. <a href="https://apps.apple.com/app/lockin/id6802325423">Consigue Lock In! en la Mac App Store</a></p>
`,
  },

  "block-news-sites-mac": {
    slug: "block-news-sites-mac",
    title: "Cómo Bloquear Sitios de Noticias en Mac Durante las Horas de Concentración",
    description:
      "Revisar las noticias 'un minuto' durante el trabajo rara vez se queda en un minuto — los titulares están diseñados para arrastrarte a la siguiente noticia. Aquí está cómo mantenerlos fuera de tus bloques de trabajo.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Los sitios de noticias funcionan con un mecanismo similar al de los feeds sociales: siempre hay otro titular, otra noticia relacionada, otro hilo actualizándose en directo. Revisarlos "un minuto" durante una sesión de trabajo se convierte habitualmente en quince, porque el siguiente artículo está a un clic de distancia y el sitio está diseñado específicamente para que ese clic no tenga fricción.</p>

<p>No es que las noticias no sean importantes. Es que la mayoría no son urgentes para ti personalmente en medio de un bloque de trabajo concentrado, y pueden esperar hasta un descanso designado sin que se pierda nada.</p>

<h2>Por Qué Esta Categoría se Cuela Frente a la Fuerza de Voluntad</h2>
<p>Revisar noticias a menudo se disfraza de comportamiento productivo — "me estoy manteniendo informado" se siente diferente de "estoy deslizando en Instagram", aunque el coste de tiempo y la interrupción a la concentración son similares. Ese encuadre lo hace más fácil de justificar en el momento, que es exactamente por qué necesita un bloqueo estructural en lugar de una regla mental que dependes de ti mismo para hacer cumplir.</p>

<h2>Bloquear Sitios de Noticias Durante el Trabajo</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> incluye una lista de bloqueo predefinida de Noticias que cubre los principales medios y agregadores, así puedes eliminar la tentación durante las horas que importan sin decidir renunciar a las noticias por completo.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Blocking news sites on Mac during work hours" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Una Lista Predefinida, los Principales Medios Cubiertos</h3>
<p>La lista predefinida de Noticias te ahorra escribir manualmente cada medio que sueles revisar. Añádela a una sesión y los destinos comunes quedan controlados de inmediato.</p>

<h3>Añade Tus Propios Sitios Habituales</h3>
<p>Si tienes un agregador específico, un subreddit o un medio de nicho que es tu madriguera personal, añádelo como dominio personalizado junto a la lista predefinida. El bloqueo no está limitado a una lista fija.</p>

<h3>Limitado al Horario de Trabajo, No Todo el Día</h3>
<p>Configura una sesión para tu horario laboral y los sitios de noticias se desbloquean automáticamente cuando termina, así ponerte al día durante el almuerzo o por la noche no se ve afectado. El objetivo es proteger el tiempo de concentración, no cortar la información por completo.</p>

<h3>Funciona en Todos los Navegadores</h3>
<p>El bloqueo se aplica en todo el sistema, así que cambiar de Safari a Chrome para revisar un titular no funciona — la misma regla se mantiene en todas partes del Mac.</p>

<p>Mantente informado según tu horario, no el del ciclo de noticias. <a href="https://apps.apple.com/app/lockin/id6802325423">Consigue Lock In! en la Mac App Store</a></p>
`,
  },

  "freedom-app-alternative-mac": {
    slug: "freedom-app-alternative-mac",
    title: "Alternativa a la App Freedom para Mac",
    description:
      "Freedom fue pionera en el bloqueador de webs por suscripción, pero una cuota recurrente por un bloqueo básico ha llevado a mucha gente a buscar una opción más sencilla y nativa.",
    date: "2026-09-06",
    readTime: "5 min de lectura",
    content: `
<p>Freedom lleva años en el mercado e hizo mucho por popularizar la idea de bloquear webs y apps de forma programada en varios dispositivos. Para mucha gente, sin embargo, la suscripción continua por una herramienta que fundamentalmente bloquea una lista de dominios con un temporizador empieza a sentirse excesiva, especialmente una vez que termina la prueba gratuita y el cargo recurrente se vuelve real.</p>

<p>Si solo necesitas esto en tu Mac — no sincronizado en cinco dispositivos — hay argumentos para algo nativo, de pago único y más ligero.</p>

<h2>Lo Que Busca la Gente al Dejar Freedom</h2>
<p>Las peticiones comunes son constantes: bloqueo que realmente funcione en todos los navegadores, una función de bloqueo de apps que no sea una idea de último momento, una forma de hacer que las sesiones sean más difíciles de cancelar, y — muy a menudo — no querer pagar mensualmente de forma indefinida por algo tan específico en alcance. La sincronización entre dispositivos es valiosa para algunos, pero muchos usuarios de Freedom solo lo usaron en su Mac de todos modos.</p>

<h2>Una Alternativa Nativa de Mac</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> cubre lo esencial de lo que Freedom hace para los usuarios de Mac — bloqueo de webs y apps, sesiones programadas, un modo incancelable — construido de forma nativa para macOS en lugar de como un servicio de sincronización multiplataforma.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Native Mac alternative to Freedom for website and app blocking" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Bloqueo a Nivel de Sistema, No un Complemento de Navegador</h3>
<p>Una extensión de red de macOS bloquea sitios web en todos los navegadores a la vez, así que no hay configuración por navegador ni una extensión que desactivar cuando te sientes tentado a mitad de sesión.</p>

<h3>Bloqueo de Apps Integrado desde el Principio</h3>
<p>El bloqueo de apps a pantalla completa es una función central, no un extra añadido después — intenta abrir una app bloqueada durante una sesión y obtienes una interrupción incancelable a pantalla completa en lugar de la app misma.</p>

<h3>Modo Estricto en Lugar de Ajustes Bloqueados</h3>
<p>El Modo Estricto hace que una sesión activa sea imposible de cancelar antes de tiempo, lo cual cubre la misma necesidad de "protégeme de mí mismo" que el modo bloqueado de Freedom aborda.</p>

<h3>Vive en la Barra de Menú</h3>
<p>Inicia y detén sesiones desde un icono de la barra de menú en lugar de una ventana separada, manteniendo la fricción de iniciar una sesión tan baja como debería ser alta la de detenerla.</p>

<p>La misma promesa esencial, construida para el Mac que realmente usas. <a href="https://apps.apple.com/app/lockin/id6802325423">Consigue Lock In! en la Mac App Store</a></p>
`,
  },

  "mac-website-blocker-system-wide": {
    slug: "mac-website-blocker-system-wide",
    title: "Bloqueador de Webs para Todo el Sistema en Mac — No Solo Un Navegador",
    description:
      "Un bloqueo que solo cubre un navegador no es realmente un bloqueo, es una sugerencia. Aquí está cómo se ve una configuración verdaderamente a nivel de sistema en Mac.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Hay una diferencia significativa entre "bloqueado en este navegador" y "bloqueado en este Mac", y normalmente solo se vuelve evidente la primera vez que te descubres abriendo un segundo navegador específicamente para evadir un bloqueo que pusiste en el primero. Rara vez es una decisión consciente de hacer trampa — es simplemente lo fácil que resulta caer en ese hueco.</p>

<h2>Por Qué el Bloqueo a Nivel de Navegador No Es Realmente Bloqueo</h2>
<p>Las extensiones de navegador solo pueden ver el tráfico dentro del navegador que las aloja. La mayoría de los Mac tienen más de un navegador instalado — Safari viene preinstalado, y mucha gente también usa Chrome, Firefox o Arc para diferentes propósitos. Un bloqueador limitado a solo uno de ellos deja cada otro navegador como una puerta abierta, y un cerebro distraído encuentra puertas abiertas rápido, a menudo sin planearlo conscientemente.</p>

<p>Editar <code>/etc/hosts</code> se acerca más a algo a nivel de sistema, ya que funciona por debajo del navegador, pero requiere acceso a Terminal, no funciona con un horario y necesita limpieza manual — poco práctico para el uso diario.</p>

<h2>Bloqueo Verdaderamente a Nivel de Sistema</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> usa una extensión de red de macOS que bloquea dominios a nivel de sistema, por debajo de cada navegador, así que el bloqueo se mantiene sin importar qué app esté haciendo la petición.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="System-wide website blocking across every Mac browser" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Todos los Navegadores, Una Regla</h3>
<p>Añade un dominio una vez y Safari, Chrome, Firefox y Arc quedan cubiertos simultáneamente. No hay un paso de configuración por navegador que olvidar.</p>

<h3>No Se Requieren Comandos de Terminal</h3>
<p>Todo se gestiona desde una interfaz en la barra de menú — añade dominios, elige listas predefinidas, inicia una sesión — sin nada de la edición manual de archivos ni la limpieza que exige un enfoque con el archivo hosts.</p>

<h3>Cubre Apps También, No Solo Navegadores</h3>
<p>Como algunas distracciones viven completamente fuera del navegador — apps de escritorio como Discord o Steam — la misma sesión puede bloquearlas con una interrupción a pantalla completa, cerrando el hueco que dejaría una herramienta solo de navegador.</p>

<p>Todo el sistema significa todo el sistema. <a href="https://apps.apple.com/app/lockin/id6802325423">Consigue Lock In! en la Mac App Store</a></p>
`,
  },

  "unbypassable-website-blocker-mac": {
    slug: "unbypassable-website-blocker-mac",
    title: "Bloqueador de Webs Infranqueable para Mac — Modo Estricto",
    description:
      "Un bloqueador que puedes desactivar en un clic no es un bloqueador, es un recordatorio. Aquí está cómo configurar un bloqueo que se mantenga incluso cuando de verdad quieras que pare.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Todo bloqueador de webs funciona bien en teoría, justo hasta el momento en que realmente quieres revisar el sitio bloqueado con las ganas suficientes como para desactivarlo. Ese momento es todo el propósito de usar un bloqueador en primer lugar — si nunca quisieras revisar el sitio, no necesitarías la herramienta. Así que la verdadera prueba de un bloqueador no es si bloquea cuando estás motivado; es si se mantiene cuando no lo estás.</p>

<p>La mayoría de las herramientas fallan esta prueba. Un interruptor en los ajustes, un clic en la barra de menú, una extensión que puedes desactivar — todo está a una pequeña acción de deshacerse, y una pequeña acción es todo lo que necesita un cerebro distraído.</p>

<h2>Por Qué "Fácil de Apagar" Anula el Propósito</h2>
<p>El valor de un bloqueador viene de eliminar la decisión, no de hacer la decisión un poco más difícil. Si desactivarlo toma los mismos tres segundos que hubiera tomado abrir el sitio bloqueado de todos modos, no has añadido una barrera significativa — solo has añadido un paso que una versión de ti determinada en el momento tomará encantada.</p>

<h2>Un Bloqueo que Se Mantiene</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> incluye el Modo Estricto, que hace que una sesión de bloqueo activa sea incancelable hasta que se acabe su temporizador — no hay interruptor en los ajustes, ni atajo en la barra de menú, ni forma de terminarla antes de tiempo.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Strict Mode uncancellable website blocking on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>La Decisión Ocurre Una Vez, al Principio</h3>
<p>Eliges el Modo Estricto y fijas la duración antes de que empiece la sesión, mientras estás motivado y con la cabeza clara. Desde ese punto, el compromiso queda fijado en lugar de renegociarse cada vez que aparece la tentación.</p>

<h3>Sin Restablecer Contraseña ni Truco de Desinstalación</h3>
<p>El bloqueo se impone a nivel de sistema mediante una extensión de red de macOS, no mediante un ajuste que puedas revertir en silencio. Está diseñado específicamente para sobrevivir el momento en que más quieres evadirlo.</p>

<h3>Combínalo con Apps para un Bloqueo Total</h3>
<p>El Modo Estricto se aplica tanto al bloqueo de apps como al de webs, así que una interrupción a pantalla completa en una app bloqueada tampoco se puede descartar antes de tiempo — ambas mitades del bloqueo se mantienen juntas.</p>

<p>Un bloqueo que solo funciona cuando no lo necesitas no es un bloqueo. <a href="https://apps.apple.com/app/lockin/id6802325423">Consigue Lock In! en la Mac App Store</a></p>
`,
  },

  "block-online-shopping-mac": {
    slug: "block-online-shopping-mac",
    title: "Cómo Bloquear Sitios de Compras Online en Mac",
    description:
      "Un vistazo rápido a Amazon o a una web de ropa durante el trabajo rara vez se queda en rápido, y suele terminar con un carrito lleno de cosas que no planeabas comprar. Aquí está cómo mantenerlo fuera de tu jornada laboral.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Las compras online durante el horario de trabajo tienen una forma específica: abres el sitio para un artículo, te arrastran los "otros clientes también compraron", y veinte minutos después has añadido tres cosas a un carrito que no sabías que necesitabas. En realidad no se trata de comprar — es un bucle de navegación disfrazado de tarea, lo que lo hace fácil de justificar como productivo en el momento.</p>

<p>También es caro de una forma en que las redes sociales no lo son. Veinte minutos perdidos en Reddit te cuestan tiempo. Veinte minutos perdidos en un sitio de compras pueden costarte dinero además del tiempo.</p>

<h2>Por Qué Es Difícil Resistirse a Mitad de una Tarea</h2>
<p>Los sitios de compras están optimizados alrededor de las mismas mecánicas de recomendación y urgencia que los feeds sociales — ofertas por tiempo limitado, artículos relacionados, avisos de poco stock — todo diseñado para mantenerte navegando más allá de tu intención original. Combinado con el hecho de que "solo estoy mirando" se siente inofensivo, es una categoría fácil de subestimar hasta que revisas tu extracto bancario.</p>

<h2>Bloquear Sitios de Compras Durante el Tiempo de Concentración</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> incluye una lista de bloqueo predefinida de Compras que cubre los principales sitios minoristas y de mercado, así quedan inalcanzables durante tus sesiones de trabajo sin que tengas que recordar cada sitio al que sueles ir a parar.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Blocking online shopping sites on Mac during work" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Una Lista Predefinida para Minoristas Comunes</h3>
<p>Añade la lista predefinida de Compras a una sesión y los principales mercados y sitios minoristas quedan cubiertos de inmediato, sin necesidad de construir la lista manualmente.</p>

<h3>Añade Sitios de Nicho que Realmente Usas</h3>
<p>Si tu punto débil personal es una tienda boutique específica o un mercado de segunda mano que no cubre la lista predefinida, añádelo como dominio personalizado — la lista de bloqueo no está limitada a lo que viene integrado.</p>

<h3>Modo Estricto para el Día de Cobro y los Días de Rebajas</h3>
<p>Si ciertos días son más arriesgados que otros — el día de cobro, un gran evento de rebajas — el Modo Estricto elimina la opción de desactivar el bloqueo a mitad de camino, que importa más precisamente en esos días.</p>

<h3>Se Desbloquea Automáticamente Después del Trabajo</h3>
<p>El bloqueo está ligado a tu sesión, no es una restricción permanente, así que comprar en tu propio tiempo por la noche no se ve afectado una vez que termina el temporizador.</p>

<p>Mantén el carrito vacío hasta que termine la jornada laboral. <a href="https://apps.apple.com/app/lockin/id6802325423">Consigue Lock In! en la Mac App Store</a></p>
`,
  },

  "focus-timer-with-website-blocking-mac": {
    slug: "focus-timer-with-website-blocking-mac",
    title: "Temporizador de Enfoque con Bloqueo de Webs Integrado para Mac",
    description:
      "Un temporizador solo no te impide abrir una pestaña que distrae, y un bloqueador solo no le da estructura a tu sesión de trabajo. Aquí está cómo se ve combinado.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Mucha gente usa dos herramientas separadas durante una sesión de trabajo: un temporizador Pomodoro para estructurar el tiempo, y un bloqueador de webs para mantener fuera las distracciones. Funciona, pero significa iniciar dos cosas cada vez que te sientas a concentrarte, y significa que el temporizador no tiene ni idea de si el bloqueador está siquiera funcionando — operan de forma completamente independiente, sin ninguna relación entre sí.</p>

<p>Ese hueco importa más de lo que parece. Si el temporizador dice "concéntrate durante 25 minutos" pero el bloqueador no está activo, la estructura es solo una sugerencia. Si el bloqueador está activo pero no hay temporizador, las sesiones tienden a extenderse indefinidamente o a abandonarse sin un punto final claro.</p>

<h2>Por Qué Combinarlos Importa</h2>
<p>Un temporizador le da a una sesión una forma definida — un inicio, un final e idealmente un ritmo de trabajo y descanso. Un bloqueador le da a esa forma dientes al eliminar la tentación de llenar la parte de "trabajo" con otra cosa. Ninguno de los dos por sí solo resuelve el problema real de mantenerte concentrado durante un periodo fijo; juntos sí.</p>

<h2>Temporizador y Bloqueo en Una Sola Sesión</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> combina un temporizador de enfoque con el bloqueo de webs y apps en una sola sesión, así que iniciar el reloj y activar el bloqueo son la misma acción.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Focus timer with website blocking built in on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Fija una Duración, Todo Empieza Junto</h3>
<p>Elige cuánto tiempo quieres concentrarte desde la barra de menú, y los bloqueos de webs y apps se activan durante exactamente esa ventana. Sin una app separada que abrir para la parte del temporizador.</p>

<h3>Intervalos Pomodoro Integrados</h3>
<p>Para ciclos estructurados de trabajo y descanso, el modo Pomodoro ejecuta el bloqueo en sincronía con los intervalos de trabajo y lo levanta durante los descansos automáticamente, así no tienes que reactivar manualmente el bloqueador cada 25 minutos.</p>

<h3>Las Estadísticas lo Unen Todo</h3>
<p>Como el temporizador y el bloqueo son una sola sesión, las estadísticas diarias reflejan tiempo de concentración real y protegido — no solo el tiempo en que el temporizador estaba corriendo con las distracciones todavía a un cambio de pestaña de distancia.</p>

<p>Una sola sesión, temporizador y bloqueo juntos. <a href="https://apps.apple.com/app/lockin/id6802325423">Consigue Lock In! en la Mac App Store</a></p>
`,
  },

  "mac-productivity-apps-for-adhd": {
    slug: "mac-productivity-apps-for-adhd",
    title: "Apps de Productividad para Mac para el TDAH — Bloquea Distracciones Automáticamente",
    description:
      "El consejo estándar de productividad a menudo asume que recordarás evitar las distracciones. Para un cerebro con TDAH, la solución más fiable es eliminar la opción por completo.",
    date: "2026-09-06",
    readTime: "5 min de lectura",
    content: `
<p>Mucho del consejo de productividad se reduce a "simplemente sé más disciplinado y no revises ese sitio". Para un cerebro con TDAH, ese consejo malinterpreta el problema. No es una falta de saber lo que está bien — es que el control de impulsos y la memoria de trabajo hacen que "recordar no hacerlo" sea un mecanismo poco fiable en el momento, sin importar lo clara que fuera la intención cinco minutos antes.</p>

<p>Lo que suele funcionar mejor no es más fuerza de voluntad, es algo estructural: eliminar la opción para que no haya nada que resistir en primer lugar. Si un sitio o una app que distrae simplemente no es alcanzable, el impulso no tiene adónde ir.</p>

<h2>Por Qué la Eliminación Gana a los Recordatorios</h2>
<p>Los avisos basados en notificaciones y los recordatorios suaves asumen que los notarás y actuarás en el momento — que es exactamente el mecanismo que a menudo resulta menos fiable en el TDAH. Un bloqueo estricto no depende en absoluto de ese mecanismo. No hay recordatorio que perder, ni notificación que descartar sin leer. El sitio es alcanzable o no lo es, y ese binario es mucho más fácil de manejar que un sistema que depende de que te descubras a ti mismo.</p>

<h2>Bloqueo Automático, No Fuerza de Voluntad Manual</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> bloquea sitios web y apps que distraen automáticamente en cuanto empieza una sesión, eliminando la necesidad de notar una distracción y elegir no interactuar con ella en el momento.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Automatic distraction blocking on Mac for ADHD focus" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Un Clic para Empezar, Luego Es Automático</h3>
<p>Iniciar una sesión desde la barra de menú es una única acción de bajo esfuerzo. Después de eso, el bloqueo funciona solo — no se requieren decisiones continuas para mantenerlo activo, lo cual importa cuando la toma de decisiones sostenida es la parte difícil.</p>

<h3>El Modo Estricto Elimina la Vía de Escape</h3>
<p>La impulsividad puede hacer que "solo lo desactivo un segundo" se sienta inofensivo en el momento, incluso cuando anula todo el propósito. El Modo Estricto elimina esa opción hasta que termina el temporizador, así que no hay ninguna pequeña acción disponible para deshacer toda la sesión.</p>

<h3>Pomodoro para Estructura Externa</h3>
<p>Los intervalos de trabajo y descanso integrados proporcionan estructura de tiempo externa, que puede ser más fácil de seguir que el tiempo autogestionado cuando la percepción interna del tiempo es poco fiable.</p>

<h3>Las Listas Predefinidas Eliminan la Fricción de Configuración</h3>
<p>Las listas predefinidas de Social, Entretenimiento, Noticias y Compras significan que no tienes que construir una lista de bloqueo desde cero antes de poder empezar — una tarea que en sí misma puede convertirse en un punto de procrastinación.</p>

<p>Elimina la opción, no solo el recordatorio. <a href="https://apps.apple.com/app/lockin/id6802325423">Consigue Lock In! en la Mac App Store</a></p>
`,
  },

  "schedule-website-blocking-mac": {
    slug: "schedule-website-blocking-mac",
    title: "Cómo Programar el Bloqueo de Webs en Mac",
    description:
      "Iniciar manualmente un bloqueador cada mañana es una cosa más que recordar, y los días que se te olvida suelen ser los días que más lo necesitabas. Aquí está cómo automatizarlo.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Un bloqueador de webs solo ayuda los días que recuerdas activarlo. Si iniciar una sesión es un paso manual al principio de tu jornada laboral, las mañanas en que vas con prisa, distraído o ya vas retrasado — precisamente las mañanas en las que un bloqueador ayudaría más — también son las mañanas en las que es más probable que te lo saltes por completo.</p>

<p>La solución es dejar de depender de recordarlo. Un horario recurrente inicia el bloqueo por ti, así el hábito no depende de tu estado de ánimo a las 9 de la mañana.</p>

<h2>Por Qué los Inicios Manuales Fallan en Silencio</h2>
<p>Nadie decide dejar de usar un bloqueador de golpe — simplemente se va desvaneciendo. Una mañana ajetreada te lo saltas "solo esta vez", y una vez que empieza el patrón de saltárselo, es fácil seguir saltándoselo sin haberlo decidido deliberadamente en ningún momento. Unas semanas después ya no lo usas en absoluto, sin haber elegido nunca dejarlo.</p>

<h2>Programarlo para que No Tengas que Hacerlo Tú</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> admite sesiones de enfoque recurrentes en Mac, así tu bloqueo de webs y apps puede iniciarse automáticamente a horas fijas en lugar de depender de que lo recuerdes cada mañana.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Scheduled website blocking sessions on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Configúralo Una Vez para tu Horario de Trabajo</h3>
<p>Configura una sesión recurrente para tu bloque de trabajo habitual — digamos, de 9am a 1pm entre semana — y el bloqueo se activa según el horario sin ninguna configuración diaria de tu parte.</p>

<h3>Consistencia Sin Depender de la Memoria</h3>
<p>Como el horario funciona de forma independiente a tu estado de ánimo matutino, un inicio de día apresurado o distraído no significa que el bloqueo se salte. El sistema hace lo que tu memoria quizá no haga.</p>

<h3>Ajusta Sin Perder el Hábito</h3>
<p>Las reuniones y las excepciones ocurren — aún puedes iniciar una sesión no programada o terminar una antes de tiempo si realmente lo necesitas, sin abandonar el horario recurrente para todos los demás días.</p>

<h3>Las Estadísticas Muestran si el Horario Se Está Cumpliendo</h3>
<p>El gráfico de estadísticas diarias facilita ver si las sesiones programadas realmente se están ejecutando de forma constante, así detectas un hábito que se está resbalando antes de que se convierta en uno olvidado.</p>

<p>Configúralo una vez, deja que funcione cada día después. <a href="https://apps.apple.com/app/lockin/id6802325423">Consigue Lock In! en la Mac App Store</a></p>
`,
  },
};
