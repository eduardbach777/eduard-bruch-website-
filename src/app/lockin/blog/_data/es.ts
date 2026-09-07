import type { ArticleSet } from "./index";

export const esArticles: ArticleSet = {
  "block-distracting-websites-mac": {
    slug: "block-distracting-websites-mac",
    title: "Cómo bloquear sitios web que distraen en Mac",
    description:
      "Abres el navegador para revisar una cosa y 40 minutos después estás metido en un hilo de Reddit. macOS no incluye un bloqueador de sitios web real — aquí te explicamos cómo solucionarlo.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Te sientas a trabajar, abres Safari o Chrome, y antes de siquiera llegar a la pestaña que necesitabas ya escribiste "r-e-d" en la barra de direcciones por pura memoria muscular. Cuarenta minutos después emerges de un hilo sobre si los hot dogs son sándwiches. El trabajo sigue esperando.</p>

<p>Esto no es un problema de fuerza de voluntad. Es un problema de diseño. Los navegadores están hechos para llevarte al contenido lo más rápido posible — incluyendo el contenido que intentas evitar.</p>

<h2>Por qué macOS no resuelve esto</h2>
<p>Apple añadió límites de sitios web con Tiempo en Pantalla en macOS Catalina, pero solo funcionan en Safari. Si también usas Chrome, Firefox, Arc o cualquier otro navegador, esos límites no hacen nada. Además, puedes ignorar los avisos de Tiempo en Pantalla con un solo clic — es un bache en el camino, no un muro.</p>

<p>Editar tu archivo <code>/etc/hosts</code> funciona en teoría, pero requiere comandos de Terminal, acceso sudo y limpieza manual cuando terminas. No es práctico para uso diario y no funciona con temporizador.</p>

<h2>Bloquea sitios web en todo el sistema con Lock In!</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> usa una extensión de sistema de macOS para bloquear sitios web que distraen en todos los navegadores de tu Mac — Safari, Chrome, Firefox, Arc, Brave, todos. Tú eliges los sitios, configuras un temporizador y desaparecen hasta que la sesión termine.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! bloqueador de sitios web para Mac mostrando sitios bloqueados durante una sesión de concentración" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Listas de bloqueo predefinidas</h3>
<p>Lock In! incluye listas de bloqueo seleccionadas para Redes Sociales, Entretenimiento, Noticias y Compras. Un clic bloquea docenas de dominios que te hacen perder tiempo. También puedes añadir URLs personalizadas para cualquier sitio específico de tus propios hábitos de navegación.</p>

<h3>Sesiones con temporizador</h3>
<p>Configura una sesión de concentración de 25 minutos, una hora o cualquier duración personalizada. Los sitios bloqueados permanecen bloqueados hasta que se acabe el temporizador. Sin extensiones de navegador que desactivar, sin archivos hosts que revertir — funciona a nivel de sistema.</p>

<h3>Modo Estricto</h3>
<p>Si eres de los que cancelan un bloqueo a los dos minutos, activa el Modo Estricto. Una vez que la sesión comienza, no hay forma de terminarla antes. Los sitios permanecen bloqueados. Punto.</p>

<p>Bloquear sitios web que distraen no debería requerir un título en informática. Debería tomar dos clics desde tu barra de menú. <a href="https://apps.apple.com/app/lockin/id6802325423">Obtén Lock In! en la Mac App Store</a></p>
`,
  },
  "website-blocker-focus-mac": {
    slug: "website-blocker-focus-mac",
    title: "El mejor bloqueador de sitios web para concentrarte en Mac",
    description:
      "Las extensiones de navegador son fáciles de desactivar, Tiempo en Pantalla solo cubre Safari y los trucos con el archivo hosts necesitan Terminal. Un bloqueador a nivel de sistema que funcione en todos los navegadores es la pieza que falta.",
    date: "2026-09-06",
    readTime: "5 min de lectura",
    content: `
<p>Hay docenas de bloqueadores de sitios web para Mac. La mayoría son extensiones de navegador — y ese es el problema. Las extensiones se pueden desactivar en tres segundos. Cuando tu cerebro está deseando una distracción, tres segundos no son nada.</p>

<p>Un bloqueador de sitios web orientado a la concentración necesita funcionar por debajo del nivel del navegador. Necesita bloquear sitios sin importar qué navegador abras, y necesita hacer que desbloquear sea lo suficientemente incómodo como para que no te molestes en hacerlo.</p>

<h2>Por qué la mayoría de los bloqueadores se quedan cortos</h2>
<p>Las extensiones de navegador solo controlan un navegador. Si bloqueas Twitter en Chrome, puedes abrir Safari y navegar libremente. Los límites de sitios web de Tiempo en Pantalla solo aplican a Safari y se pueden ignorar con un clic. Las ediciones del archivo hosts requieren acceso a Terminal y dejan residuos si olvidas limpiarlas.</p>

<p>Un bloqueador que depende de tu cooperación en realidad no está bloqueando nada. Está sugiriendo. Y las sugerencias no funcionan cuando la dopamina está de por medio.</p>

<h2>Lock In! — Bloqueo a nivel de sistema desde la barra de menú</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> funciona como una extensión de sistema de macOS. Eso significa que intercepta las solicitudes a nivel de red, antes de que cualquier navegador las vea. Los dominios bloqueados no cargan en Safari, Chrome, Firefox, Arc — en cualquier app que acceda a la red.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! bloqueador de concentración en la barra de menú para Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Sesiones de concentración con un clic</h3>
<p>Lock In! vive en tu barra de menú. Haz clic, elige una duración e inicia una sesión. Tu lista de bloqueo se activa al instante. Sin pestañas del navegador que cerrar, sin páginas de configuración que navegar — solo haz clic y concéntrate.</p>

<h3>Bloqueo de apps también</h3>
<p>Los sitios web no son el único problema. Lock In! también puede bloquear apps que distraen. Cuando intentas abrir una app bloqueada durante una sesión, un panel a pantalla completa te intercepta y te devuelve al trabajo. Cubre ambos frentes — navegador y aplicaciones.</p>

<h3>Estadísticas diarias</h3>
<p>Un gráfico de barras de 7 días muestra tu historial de concentración. Ver una racha de sesiones de trabajo profundo es motivador. Ver un hueco te da ganas de llenarlo. Los datos te mantienen honesto sin ser sermoneador al respecto.</p>

<h3>Atajos de teclado globales</h3>
<p>Inicia o consulta una sesión sin tocar el ratón. Asigna un atajo de teclado global y activa el modo de concentración desde cualquier lugar de tu Mac.</p>

<p>El mejor bloqueador de sitios web es el que no puedes burlar. <a href="https://apps.apple.com/app/lockin/id6802325423">Obtén Lock In! en la Mac App Store</a></p>
`,
  },
  "block-tiktok-mac": {
    slug: "block-tiktok-mac",
    title: "Cómo bloquear TikTok en Mac durante el trabajo",
    description:
      "El algoritmo de TikTok está diseñado para mantenerte haciendo scroll indefinidamente. Cuando está a una pestaña de distancia de tu trabajo, la fuerza de voluntad sola no es suficiente.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>TikTok es la trampa de atención más efectiva jamás creada. Su algoritmo aprende qué te mantiene mirando y te sirve un flujo infinito de eso. Abrir TikTok "solo un segundo" durante el trabajo es como comer una papa frita de una bolsa diseñada para que te la acabes entera.</p>

<p>En tu teléfono, puedes eliminar la app o usar Tiempo en Pantalla de iOS. Pero en tu Mac, tiktok.com siempre está a una pestaña de distancia. Y macOS no te da una forma sencilla de bloquearlo.</p>

<h2>Por qué TikTok en Mac es especialmente peligroso</h2>
<p>En tu teléfono, TikTok al menos se siente como una actividad separada — físicamente agarras un dispositivo diferente. En tu Mac, es el mismo navegador en el que trabajas. Estás escribiendo un informe en una pestaña, y TikTok está a un Cmd+T de distancia. No hay cambio de contexto, no hay fricción, nada que haga que tu cerebro registre que dejaste el modo de trabajo.</p>

<p>La versión web de TikTok ahora tiene todas las funciones. La página Para Ti funciona de forma idéntica. El algoritmo es igual de adictivo. Y a diferencia de tu teléfono, tu Mac tiene una pantalla más grande y un teclado — puedes caer aún más profundo en secciones de comentarios y búsquedas.</p>

<h2>Bloquea TikTok en todo el sistema con Lock In!</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> bloquea tiktok.com a nivel de sistema usando una extensión de red de macOS. No importa qué navegador uses — Safari, Chrome, Firefox, Arc — TikTok no cargará durante tu sesión de concentración.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! bloqueando TikTok en Mac durante una sesión de concentración" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Añade TikTok a tu lista de bloqueo</h3>
<p>Lock In! incluye una lista de bloqueo predefinida de Redes Sociales que cubre TikTok, Instagram, Twitter, Facebook y más. Activa la lista predefinida o añade tiktok.com como entrada personalizada — de cualquier forma, un clic lo bloquea durante toda tu sesión.</p>

<h3>Modo Estricto para cero excepciones</h3>
<p>Saber que puedes cancelar un bloqueo y abrir TikTok socava todo el propósito. Activa el Modo Estricto y el bloqueo se vuelve permanente hasta que el temporizador se acabe. No hay anulación, no hay botón de emergencia, no hay "solo cinco minutos". Tú estableces la duración de la sesión, y TikTok permanece bloqueado durante toda ella.</p>

<h3>Combínalo con el bloqueo de apps</h3>
<p>Si tienes la app de escritorio de TikTok o usas un wrapper como Unite, Lock In! también puede bloquearlos. Su función de bloqueo de apps muestra un panel de interrupción a pantalla completa cuando intentas abrir una app bloqueada, así que cada camino hacia TikTok queda cerrado.</p>

<p>El algoritmo no duerme, así que tu bloqueador no debería tener lagunas. <a href="https://apps.apple.com/app/lockin/id6802325423">Obtén Lock In! en la Mac App Store</a></p>
`,
  },
  "cold-turkey-alternative-mac": {
    slug: "cold-turkey-alternative-mac",
    title: "Alternativa a Cold Turkey para Mac",
    description:
      "Cold Turkey es potente pero está pensado primero para Windows, y la versión para Mac siempre ha ido por detrás. Una alternativa nativa de macOS que usa extensiones de sistema puede llenar ese hueco.",
    date: "2026-09-06",
    readTime: "5 min de lectura",
    content: `
<p>Cold Turkey es uno de los bloqueadores de sitios web más conocidos, y con razón — su bloqueo estricto es genuinamente difícil de eludir. Pero Cold Turkey fue creado primero para Windows. La versión para Mac históricamente ha ido por detrás en actualizaciones, y no siempre se siente como en casa en macOS. Si has estado buscando algo que funcione de forma nativa en Mac y ofrezca el mismo bloqueo sin compromisos, ahora hay una mejor opción.</p>

<h2>Dónde Cold Turkey se queda corto en Mac</h2>
<p>La versión de Cold Turkey para Mac usa un mecanismo de bloqueo diferente al de su contraparte en Windows. macOS es un sistema operativo más cerrado, y las herramientas que dependen de soluciones alternativas en lugar de las APIs oficiales de Apple pueden fallar con las actualizaciones del sistema. La app tampoco tiene la integración visual que los usuarios de Mac esperan — no se siente como una app nativa de macOS porque no lo es.</p>

<p>Además, la interfaz de Cold Turkey arrastra complejidad de sus raíces en Windows. Funciones como bloqueos programados, listas de permitidos y temporizadores de descanso son potentes pero pueden resultar excesivas si lo único que quieres es bloquear Twitter durante dos horas y hacer algo de trabajo.</p>

<h2>Lock In! — Bloqueo nativo en Mac sin atajos</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> está desarrollado exclusivamente para macOS y se distribuye a través de la Mac App Store. Usa el framework oficial de Extensiones de Red de Apple para bloquear sitios web a nivel de sistema — sin trucos de navegador, sin artimañas de proxy, sin ediciones del archivo hosts. Esto significa que funciona de manera confiable con las actualizaciones de macOS y no requiere desactivar la Protección de Integridad del Sistema ni conceder permisos inusuales.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! como alternativa a Cold Turkey para macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>El Modo Estricto rivaliza con el bloqueo de Cold Turkey</h3>
<p>La función estrella de Cold Turkey es su modo estricto que te impide desbloquear. Lock In! ofrece el mismo mecanismo de compromiso — activa el Modo Estricto y tu sesión no se puede cancelar antes de tiempo. Sin truco de desinstalación, sin atajo para cerrar. Elegiste tu duración, y vives con ella.</p>

<h3>Bloqueo de sitios web y apps combinado</h3>
<p>Cold Turkey separa el bloqueo de sitios web y apps en productos diferentes (Cold Turkey Blocker y Cold Turkey Writer). Lock In! maneja ambos en una sola app. Las apps bloqueadas activan un panel de interrupción a pantalla completa, y los sitios web bloqueados no cargan en ningún navegador.</p>

<h3>Simplicidad desde la barra de menú</h3>
<p>Lock In! vive en tu barra de menú. No hay ventana principal que gestionar, no hay interfaz de programación compleja. Haz clic en el icono, elige una duración, inicia una sesión. Las listas de bloqueo predefinidas para Social, Entretenimiento, Noticias y Compras significan que puedes pasar de cero a concentrado en dos clics.</p>

<p>El mismo bloqueo inquebrantable, experiencia nativa de Mac. <a href="https://apps.apple.com/app/lockin/id6802325423">Obtén Lock In! en la Mac App Store</a></p>
`,
  },
  "block-apps-during-focus-mac": {
    slug: "block-apps-during-focus-mac",
    title: "Cómo bloquear apps durante sesiones de concentración en Mac",
    description:
      "Bloquear sitios web es solo la mitad de la batalla. Slack, Discord, iMessage y los juegos viven fuera del navegador — y el modo Concentración de macOS en realidad no te impide abrirlos.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Has bloqueado Reddit y Twitter en tu navegador. Te sientes disciplinado. Entonces haces clic en Discord "para revisar un mensaje", y 30 minutos se desvanecen en un canal de memes. O abres Slack para responder a un hilo y terminas leyendo todos los canales en los que estás.</p>

<p>El bloqueo de sitios web resuelve la mitad del problema de las distracciones. La otra mitad vive en tu carpeta de Aplicaciones.</p>

<h2>Por qué el modo Concentración de macOS no es suficiente</h2>
<p>El modo Concentración integrado de Apple filtra las notificaciones — puede silenciar los avisos de apps específicas. Pero no te impide abrir esas apps. Puedes seguir abriendo Discord, Slack, Mensajes o Steam durante una sesión de "No Molestar". El modo Concentración oculta las alertas; no bloquea la fuente.</p>

<p>Esto significa que el modo Concentración solo ayuda con las interrupciones, no con las distracciones autoinfligidas. Si eres tú quien abre la app, el modo Concentración no hace nada.</p>

<h2>Lock In! bloquea apps y sitios web juntos</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> va más allá del bloqueo de sitios web. Cuando añades una app a tu lista de bloqueo e inicias una sesión, cualquier intento de abrir esa app activa un panel de interrupción a pantalla completa. Cubre tu pantalla, te dice que la app está bloqueada y te devuelve a lo que estabas haciendo.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! bloqueando apps que distraen durante una sesión de concentración en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Interrupción a pantalla completa, no un aviso suave</h3>
<p>Algunos bloqueadores muestran una pequeña notificación cuando abres una app bloqueada. Eso es fácil de ignorar. El panel de interrupción de Lock In! ocupa toda la pantalla. Es imposible de ignorar e imposible usar la app bloqueada detrás de él. Ese es el objetivo — si el bloqueo es fácil de eludir, no es un bloqueo.</p>

<h3>Combínalo con el bloqueo de sitios web</h3>
<p>El verdadero poder está en combinar ambos. Bloquea sitios web de redes sociales en todos los navegadores mediante la extensión de sistema, y bloquea apps de mensajería y entretenimiento con el bloqueador de apps. Durante una sesión de Lock In!, cada camino común de distracción está cerrado — navegador y aplicaciones.</p>

<h3>Listas predefinidas para empezar</h3>
<p>Lock In! incluye listas de bloqueo predefinidas para categorías comunes de distracción: Social, Entretenimiento, Noticias y Compras. Estas cubren sitios web populares, y puedes añadir apps específicas junto a ellos. Crea una lista de bloqueo una vez y reutilízala en cada sesión.</p>

<p>Bloquea las apps, no solo las notificaciones. <a href="https://apps.apple.com/app/lockin/id6802325423">Obtén Lock In! en la Mac App Store</a></p>
`,
  },
  "mac-screen-time-website-blocking-limitations": {
    slug: "mac-screen-time-website-blocking-limitations",
    title: "El bloqueo de sitios web de Tiempo en Pantalla en Mac está roto — aquí te explicamos por qué",
    description:
      "Tiempo en Pantalla en Mac promete límites de sitios web, pero solo funciona en Safari, se puede ignorar con un clic y falla regularmente con las actualizaciones de macOS.",
    date: "2026-09-06",
    readTime: "5 min de lectura",
    content: `
<p>Si has intentado usar Tiempo en Pantalla en tu Mac para bloquear sitios web que distraen, ya descubriste la frustración. Apple creó Tiempo en Pantalla principalmente para controles parentales en iPhones. La versión para Mac es una ocurrencia tardía, y sus funciones de bloqueo de sitios web lo reflejan.</p>

<h2>Los problemas del bloqueo de sitios web con Tiempo en Pantalla</h2>

<h3>Solo Safari</h3>
<p>Las restricciones de sitios web de Tiempo en Pantalla solo aplican a Safari. Si usas Chrome, Firefox, Arc, Brave o cualquier otro navegador — y la mayoría de los profesionales usan al menos un navegador que no es Safari — los límites no aplican. Puedes bloquear twitter.com en Tiempo en Pantalla y aun así navegar Twitter en Chrome sin ninguna restricción.</p>

<h3>Se ignora con un clic</h3>
<p>Cuando alcanzas un límite de sitio web de Tiempo en Pantalla en Safari, ves un aviso. Ese aviso tiene un botón de "Ignorar límite". Un clic y estás de vuelta en el sitio. El límite se reinicia al día siguiente y lo vuelves a hacer. Es un recordatorio, no un bloqueo — y los recordatorios no funcionan contra las distracciones habituales.</p>

<h3>Poco confiable entre actualizaciones</h3>
<p>Tiempo en Pantalla en Mac tiene un historial de errores. Límites que dejan de sincronizarse, restricciones que se desactivan silenciosamente, categorías que no incluyen los sitios web correctos. Cada actualización de macOS parece arreglar algunos problemas e introducir otros. No es una herramienta en la que puedas confiar para la disciplina de concentración diaria.</p>

<h3>Sin sesiones basadas en temporizador</h3>
<p>Tiempo en Pantalla usa límites de tiempo diarios — "30 minutos de redes sociales al día". Pero así no funciona el trabajo enfocado. Necesitas bloquear sitios durante las próximas 2 horas mientras terminas un proyecto, no gestionar un presupuesto diario. Tiempo en Pantalla no admite sesiones de concentración con temporizador en absoluto.</p>

<h2>Lock In! hace lo que Tiempo en Pantalla debería hacer</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> fue creado específicamente porque Tiempo en Pantalla falla en esta tarea. Usa una extensión de sistema de macOS para bloquear sitios web en todos los navegadores — Safari, Chrome, Firefox, Arc, todos. Ningún navegador queda exento.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! reemplazando a Tiempo en Pantalla para el bloqueo de sitios web en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Sin botón de ignorar</h3>
<p>Los sitios web bloqueados simplemente no cargan. No hay aviso que ignorar, no hay botón que presionar. En Modo Estricto, ni siquiera puedes terminar la sesión antes de tiempo. El bloqueo es absoluto.</p>

<h3>Basado en sesiones, no en presupuesto</h3>
<p>Lock In! usa sesiones con temporizador. Bloquea tus distracciones durante 25 minutos, 1 hora o 4 horas. Cuando la sesión termina, todo se desbloquea automáticamente. Esto se adapta a cómo funcionan las sesiones de trabajo reales — ráfagas concentradas, no racionamiento durante todo el día.</p>

<p>Deja de luchar contra las limitaciones de Tiempo en Pantalla. <a href="https://apps.apple.com/app/lockin/id6802325423">Obtén Lock In! en la Mac App Store</a></p>
`,
  },
  "pomodoro-website-blocker-mac": {
    slug: "pomodoro-website-blocker-mac",
    title: "Temporizador Pomodoro con bloqueo de sitios web para Mac",
    description:
      "La técnica Pomodoro se desmorona cuando tu sprint de concentración de 25 minutos incluye un desvío de 10 minutos a Instagram. Un temporizador solo no es suficiente — necesitas bloqueo durante cada intervalo.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>La Técnica Pomodoro es simple: trabaja 25 minutos, descansa 5 minutos, repite. Es uno de los métodos de productividad más populares porque es fácil de empezar — configura un temporizador y adelante. Pero aquí está el problema: un temporizador no te impide abrir Twitter en el minuto 3.</p>

<p>La mayoría de las apps Pomodoro son solo temporizadores con un icono de tomate. Hacen cuenta regresiva. Suenan cuando el intervalo termina. No hacen nada para proteger los 25 minutos intermedios. Si te distraes durante un Pomodoro, el temporizador sigue corriendo y desperdiciaste un intervalo entero.</p>

<h2>Por qué los temporizadores sin bloqueo no funcionan</h2>
<p>La Técnica Pomodoro asume que te mantendrás concentrado durante cada sprint. En 2005, cuando se popularizó, eso era más realista. En 2026, con un navegador lleno de contenido algorítmicamente optimizado a una pestaña de distancia, la pura fuerza de voluntad no es suficiente. Los estudios sobre distracción digital muestran que una vez que cambias de contexto a un sitio de redes sociales, tardas un promedio de 23 minutos en volver a concentrarte por completo. Eso es casi un Pomodoro entero — perdido.</p>

<p>Un temporizador Pomodoro sin bloqueo de sitios web es como un plan de entrenamiento sin gimnasio. La estructura está ahí, pero el entorno trabaja en tu contra.</p>

<h2>Lock In! combina Pomodoro con bloqueo a nivel de sistema</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> tiene soporte integrado para Pomodoro. Configura la duración de tu intervalo de trabajo, y Lock In! bloquea los sitios web y apps que elegiste durante toda la duración. Cuando el intervalo termina, todo se desbloquea para tu descanso. Cuando el descanso termina, el bloqueo se reanuda para el siguiente sprint.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! temporizador Pomodoro con bloqueo de sitios web en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Todos los navegadores, todas las apps</h3>
<p>El bloqueo funciona a nivel de sistema de macOS mediante una extensión de red. No importa si usas Safari, Chrome o Arc — los sitios que distraen no cargan. Combínalo con el bloqueo de apps para cerrar Discord, Slack o juegos durante cada sprint.</p>

<h3>Modo Estricto para Pomodoros honestos</h3>
<p>Activa el Modo Estricto y no podrás cancelar un Pomodoro antes de tiempo. Sin excepciones de "solo voy a echar un vistazo a mi feed". El intervalo se ejecuta en su duración completa con todos los bloqueos activos. Esta es la Técnica Pomodoro como fue concebida — sprints de concentración ininterrumpidos.</p>

<h3>Rastrea tu progreso</h3>
<p>Las estadísticas diarias de Lock In! con un gráfico de barras de 7 días muestran cuántas sesiones enfocadas has completado. Con el tiempo, verás patrones — qué días eres más productivo, cuándo tiendes a saltarte sesiones y cómo mejora tu concentración semana a semana.</p>

<p>Dale a tus Pomodoros verdadero poder. <a href="https://apps.apple.com/app/lockin/id6802325423">Obtén Lock In! en la Mac App Store</a></p>
`,
  },
  "strict-mode-website-blocker-mac": {
    slug: "strict-mode-website-blocker-mac",
    title: "Bloqueador de sitios web con Modo Estricto para Mac — Imposible de saltarse",
    description:
      "Todos los bloqueadores de sitios web tienen un botón de cancelar — y tu yo del futuro lo usará. Un modo estricto que elimina la opción por completo es la única versión que funciona a largo plazo.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Instalas un bloqueador de sitios web. Añades Reddit, Twitter y YouTube a la lista. Inicias una sesión de concentración de 2 horas. Catorce minutos después, piensas "solo voy a mirar una cosa" y pulsas el botón de cancelar. El bloqueo se levanta, abres Reddit, y las dos horas desaparecen.</p>

<p>Esto no es un fallo de la herramienta — es una característica de todo bloqueador que incluye un botón de deshacer. Si tu yo del futuro puede cancelar el bloqueo, tu yo del presente solo está realizando un ritual, no imponiendo un límite.</p>

<h2>El problema del botón de cancelar</h2>
<p>La mayoría de los bloqueadores de sitios web te permiten terminar una sesión cuando quieras. Algunos añaden un breve retraso — espera 10 segundos antes de desbloquear. Otros te hacen escribir una frase. Estas son técnicas de fricción, y funcionan para impulsos leves. Pero para antojos fuertes — del tipo que aparecen cuando llevas 30 minutos luchando con un problema difícil y tu cerebro está pidiendo dopamina a gritos — un retraso de 10 segundos no es nada.</p>

<p>La investigación sobre dispositivos de compromiso muestra que los más efectivos eliminan la opción por completo. No puedes comer comida basura que no está en casa. No puedes gastar dinero que ya transferiste a una cuenta de ahorro bloqueada. Y no puedes navegar por sitios bloqueados si no hay botón de cancelar.</p>

<h2>El Modo Estricto de Lock In! elimina la escapatoria</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> ofrece un Modo Estricto que, una vez activado, hace que la sesión actual sea completamente incancelable. No hay botón para terminarla antes. No hay atajo de teclado. No hay truco de cerrar y reabrir la app. Elegiste una duración cuando iniciaste la sesión, y los bloqueos permanecen activos durante cada segundo.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Modo Estricto de Lock In! — bloqueo de sitios web incancelable en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Cómo funciona</h3>
<p>Cuando inicias una sesión con el Modo Estricto activado, Lock In! activa su extensión de red a nivel de sistema para bloquear sitios web en todos los navegadores, y su bloqueador de apps intercepta cualquier aplicación bloqueada. El temporizador de la sesión hace la cuenta atrás en la barra de menú. Durante este tiempo, el control "Terminar sesión" desaparece. No puedes acceder a él. La única salida es esperar.</p>

<h3>Empieza poco a poco</h3>
<p>Si el Modo Estricto suena intimidante, empieza con sesiones de 25 minutos. Puedes sobrevivir 25 minutos sin Instagram. Una vez que te sientas cómodo, amplía a 50 minutos, luego a 90. La incomodidad desaparece rápido cuando te das cuenta de que realmente has conseguido trabajar.</p>

<h3>Tu yo del futuro te lo agradecerá</h3>
<p>El Modo Estricto es un pacto que haces contigo mismo: "Durante los próximos X minutos, las distracciones quedan fuera de la mesa." Convierte cada sesión en trabajo profundo genuino porque no hay alternativa. Sin negociación, sin excepción, sin escapatoria.</p>

<p>El único bloqueador que funciona es uno que no puedes desactivar. <a href="https://apps.apple.com/app/lockin/id6802325423">Descarga Lock In! en la Mac App Store</a></p>
`,
  },
  "block-youtube-mac-during-work": {
    slug: "block-youtube-mac-during-work",
    title: "Cómo bloquear YouTube en Mac durante las horas de trabajo",
    description:
      "La reproducción automática y la barra lateral de recomendaciones de YouTube convierten una búsqueda rápida en un desvío de una hora. Bloquearlo durante el trabajo requiere algo más fuerte que cerrar la pestaña.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>YouTube es especialmente peligroso para la productividad porque parece productivo. Vas a buscar un tutorial para una tarea de trabajo, y la barra lateral te recomienda un vídeo "relacionado" que en realidad es un documental de 40 minutos sobre agujeros negros. La reproducción automática pasa al siguiente vídeo antes de que hayas decidido verlo. Una búsqueda legítima se convierte en una hora de consumo de contenido.</p>

<p>A diferencia de las redes sociales puras, YouTube tiene una utilidad genuina. Eso es lo que lo hace tan difícil de dejar — siempre puedes justificar la visita. Pero la plataforma está diseñada para convertir una visita de 3 minutos en una sesión de 30 minutos, y durante las horas de trabajo, esa tasa de conversión es devastadora.</p>

<h2>Por qué el autocontrol falla contra YouTube</h2>
<p>El motor de recomendaciones de YouTube está impulsado por miles de millones de datos sobre lo que mantiene a la gente viendo. Tu fuerza de voluntad está impulsada por lo que hayas desayunado. Esta no es una lucha justa. La barra lateral, la reproducción automática, las notificaciones y la página de inicio personalizada existen para maximizar tu tiempo en el sitio. Luchar contra eso con "solo voy a ver un vídeo" es una estrategia perdedora.</p>

<p>Las extensiones de navegador que bloquean YouTube se pueden desactivar en segundos. Eliminar YouTube de tus marcadores no ayuda cuando la URL está grabada en tu memoria muscular.</p>

<h2>Bloquea YouTube a nivel de sistema con Lock In!</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> bloquea youtube.com a nivel del sistema macOS. Durante una sesión de concentración, YouTube no cargará en ningún navegador — Safari, Chrome, Firefox, Arc, ninguno. La extensión de sistema intercepta la solicitud antes de que llegue al navegador, así que no hay página que cargar, no hay barra lateral que te tiente, no hay reproducción automática que se inicie.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! bloqueando YouTube en Mac durante las horas de trabajo" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Bloquea YouTube sin bloquearlo todo</h3>
<p>No tienes que ir a por todas. Añade youtube.com a tu lista de bloqueo personalizada mientras mantienes otros sitios accesibles. O usa el preset de Entretenimiento, que bloquea YouTube junto con otras plataformas de vídeo y streaming. Personaliza la lista para que coincida con tus patrones reales de distracción.</p>

<h3>Modo Estricto para adictos a YouTube</h3>
<p>Si ya has intentado bloquear YouTube antes y siempre acabaste cancelando el bloqueo para "mirar algo rápidamente", activa el Modo Estricto. La sesión se vuelve incancelable. YouTube permanece bloqueado hasta que el temporizador llegue a cero, sin importar lo fuerte que sea la urgencia de buscar algo.</p>

<h3>Guarda los tutoriales para el descanso</h3>
<p>Con soporte Pomodoro, Lock In! crea naturalmente ventanas donde YouTube está disponible — tus intervalos de descanso. ¿Necesitas ver un tutorial? Guárdalo en marcadores y míralo durante tu próximo descanso. Así YouTube te sirve a ti según tu horario, no al revés.</p>

<p>Quita YouTube de la mesa durante las horas de trabajo. <a href="https://apps.apple.com/app/lockin/id6802325423">Descarga Lock In! en la Mac App Store</a></p>
`,
  },
  "selfcontrol-alternative-mac": {
    slug: "selfcontrol-alternative-mac",
    title: "Alternativa a SelfControl para Mac",
    description:
      "SelfControl es un querido bloqueador de código abierto, pero no ha seguido el ritmo de macOS moderno. Sin bloqueo de apps, sin interfaz en la barra de menú, y problemas de compatibilidad con las últimas actualizaciones del sistema.",
    date: "2026-09-06",
    readTime: "5 min de lectura",
    content: `
<p>SelfControl ha sido el bloqueador de sitios web gratuito de referencia para Mac desde 2009. Su promesa principal — bloquear sitios web durante un tiempo determinado sin poder deshacerlo — fue revolucionaria. Pero estamos en 2026, y SelfControl muestra su edad. Si lo has estado usando y te has topado con limitaciones, no eres el único.</p>

<h2>Dónde se queda corto SelfControl en 2026</h2>

<h3>Sin bloqueo de apps</h3>
<p>SelfControl solo bloquea sitios web. No puede hacer nada con apps de escritorio que distraen como Discord, Slack, Steam o Mensajes. Si tu problema de distracción va más allá del navegador — y para la mayoría de las personas es así — SelfControl solo cubre la mitad del problema.</p>

<h3>Sin presencia en la barra de menú</h3>
<p>SelfControl requiere que abras la ventana completa de la aplicación para iniciar una sesión. No hay icono en la barra de menú, no hay interfaz de acceso rápido. Para una herramienta que usas varias veces al día, esta fricción se acumula. Tienes que encontrar la app, abrirla, configurar tu bloqueo e iniciarlo — cada vez.</p>

<h3>Problemas de compatibilidad</h3>
<p>SelfControl modifica archivos de configuración de red a nivel de sistema para aplicar sus bloqueos. Este enfoque se ha vuelto cada vez más frágil a medida que Apple refuerza la seguridad de macOS con cada versión. Los usuarios reportan bloqueos que fallan silenciosamente, bloqueos que persisten más allá del temporizador, y problemas de instalación después de actualizaciones de macOS. La app es de código abierto y mantenida por voluntarios, por lo que las correcciones pueden retrasarse respecto al ciclo de lanzamiento de Apple.</p>

<h3>Sin Pomodoro ni funciones de sesión</h3>
<p>SelfControl tiene un solo modo: bloquear durante X minutos. No hay integración Pomodoro, no hay seguimiento de sesiones, no hay estadísticas diarias. Es una herramienta de propósito único en un mundo donde las apps de concentración han evolucionado significativamente.</p>

<h2>Lock In! — Un reemplazo moderno</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> toma todo lo que la gente ama de SelfControl — el bloqueo estricto e incancelable — y lo envuelve en una app moderna de macOS con funciones que SelfControl nunca ofreció.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! como alternativa a SelfControl para macOS moderno" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Extensión de sistema, no modificación del archivo hosts</h3>
<p>Lock In! usa la API oficial de Extensión de Red de Apple para bloquear sitios web. Esta es la forma soportada y preparada para el futuro de interceptar tráfico de red en macOS. Sin modificaciones frágiles de archivos, sin fallos tras actualizaciones del sistema, sin entradas residuales si algo sale mal.</p>

<h3>Bloqueo de sitios web + apps</h3>
<p>Bloquea sitios web que distraen en todos los navegadores y apps que distraen mediante paneles de interrupción a pantalla completa. Una sola app cubre ambos frentes. SelfControl no puede bloquear apps en absoluto.</p>

<h3>Barra de menú ante todo</h3>
<p>Lock In! vive en la barra de menú. Haz clic, establece la duración, inicia. Sin ventana que buscar, sin app a la que cambiar. Está diseñado para el flujo de trabajo de iniciar sesiones de concentración varias veces al día.</p>

<h3>Modo Estricto + Estadísticas</h3>
<p>El Modo Estricto refleja la filosofía incancelable de SelfControl. Las estadísticas diarias con un gráfico de 7 días añaden la responsabilidad que SelfControl nunca proporcionó. Listas de bloqueo predefinidas para Redes Sociales, Entretenimiento, Noticias y Compras significan que estás bloqueando en segundos, no construyendo listas desde cero.</p>

<p>Misma filosofía, ejecución moderna. <a href="https://apps.apple.com/app/lockin/id6802325423">Descarga Lock In! en la Mac App Store</a></p>
`,
  },
  "focus-app-blocks-websites-and-apps-mac": {
    slug: "focus-app-blocks-websites-and-apps-mac",
    title: "App de concentración para Mac que bloquea tanto sitios web como apps",
    description:
      "La mayoría de las herramientas de concentración bloquean sitios web o apps, no ambos. Las distracciones no respetan esa frontera — viven en tu navegador y en tu dock.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Has instalado un bloqueador de sitios web, así que Reddit y Twitter están controlados. Pero entonces abres Discord para "mirar un mensaje" y pierdes 20 minutos. Has instalado un temporizador de apps, así que Discord está controlado. Pero entonces abres reddit.com en Chrome y pierdes 20 minutos. A las distracciones no les importa la línea que separa "sitios web" de "apps" — explotan el canal que hayas dejado abierto.</p>

<p>Para proteger realmente una sesión de concentración, necesitas una sola herramienta que bloquee ambos. No dos herramientas, no una extensión de navegador más un gestor de apps por separado — un bloqueador unificado que cubra todos los vectores de distracción en tu Mac.</p>

<h2>El problema de las dos herramientas</h2>
<p>Usar herramientas separadas para el bloqueo de sitios web y apps crea huecos. El bloqueador de sitios web no sabe nada del horario del bloqueador de apps, y viceversa. Acabas gestionando dos listas de bloqueo, dos temporizadores, dos conjuntos de ajustes. Inevitablemente, uno caduca antes que el otro, o uno no está configurado para una nueva distracción que has adquirido. La complejidad hace que sea menos probable que uses cualquiera de las dos herramientas de forma consistente.</p>

<p>El propio macOS también divide este problema. Tiempo de Uso puede limitar sitios web en Safari y establecer límites de tiempo en apps, pero las limitaciones de sitios web son solo para Safari y los límites de apps se pueden descartar. El Modo Concentración silencia las notificaciones pero no te impide abrir nada. Ninguna de las dos herramientas está diseñada para sesiones de concentración intencionales.</p>

<h2>Lock In! bloquea ambos desde un solo icono en la barra de menú</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> es una app de concentración unificada para Mac que bloquea sitios web y apps que distraen simultáneamente durante sesiones cronometradas.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! bloqueando tanto sitios web como apps en Mac para la concentración" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Bloqueo de sitios web a nivel de sistema</h3>
<p>Una extensión de red de macOS bloquea sitios web en todos los navegadores — Safari, Chrome, Firefox, Arc, Brave y cualquier otra app que haga peticiones web. Listas de bloqueo predefinidas para Redes Sociales, Entretenimiento, Noticias y Compras cubren los sospechosos habituales. Añade dominios personalizados para cualquier cosa específica de tus hábitos.</p>

<h3>Bloqueo de apps a pantalla completa</h3>
<p>Cuando intentas abrir una app bloqueada durante una sesión, Lock In! intercepta con un panel a pantalla completa. No es una notificación que puedas descartar — es un muro. La app bloqueada es inutilizable hasta que tu sesión termine. Esto cubre las distracciones de escritorio como Discord, Slack, Steam, Mensajes y cualquier otra cosa en tu carpeta de Aplicaciones.</p>

<h3>Una lista de bloqueo, un temporizador, una sesión</h3>
<p>Configura tus bloqueos de sitios web y apps juntos. Inicia una sesión desde la barra de menú y todo se activa a la vez. Cuando la sesión termina, todo se desactiva. Sin temporizadores separados que gestionar, sin horarios desincronizados, sin huecos por los que las distracciones se cuelen.</p>

<h3>Pomodoro, Modo Estricto y Estadísticas</h3>
<p>Añade intervalos Pomodoro para estructurar tus sprints de trabajo. Activa el Modo Estricto para hacer las sesiones incancelables. Haz seguimiento de tu historial de concentración con un gráfico de barras de 7 días. Estas funciones se aplican tanto al bloqueo de sitios web como al de apps — son parte de la misma sesión, no añadidas desde una herramienta separada.</p>

<p>Una app, todas las distracciones, cero escapatorias. <a href="https://apps.apple.com/app/lockin/id6802325423">Descarga Lock In! en la Mac App Store</a></p>
`,
  },
  "block-social-media-mac": {
    slug: "block-social-media-mac",
    title: "Cómo bloquear las redes sociales en Mac durante el trabajo",
    description:
      "Instagram, X y TikTok están diseñados para atraerte de vuelta. Aquí tienes una configuración práctica para mantenerlos fuera de tu jornada laboral sin depender de la fuerza de voluntad.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Cierras la pestaña. Diez minutos después está abierta de nuevo. No porque hayas decidido abrirla — simplemente lo hiciste, como quien se rasca una picazón. Las apps de redes sociales están creadas por equipos cuyo único trabajo es hacer ese bucle lo más fluido posible. La fuerza de voluntad no es rival justo contra eso.</p>

<p>La solución no es más disciplina. Es eliminar la opción durante las horas que importan.</p>

<h2>Por qué "simplemente no lo abras" no funciona</h2>
<p>Las plataformas sociales están diseñadas en torno a recompensas variables — no sabes si el próximo scroll tiene algo interesante, así que sigues desplazándote para descubrirlo. Es el mismo mecanismo que usan las máquinas tragamonedas. Decidir no mirar Instagram requiere que ganes una pequeña batalla de fuerza de voluntad docenas de veces al día, y solo necesitas perder una vez para que la sesión desaparezca.</p>

<p>Guardar el sitio en marcadores, cerrar sesión u ocultar el icono de la app fallan por la misma razón: añaden unos segundos de fricción, pero unos segundos no son suficientes para detener un impulso habitual. Necesitas que la opción no exista durante las horas de trabajo, no que sea ligeramente más difícil de alcanzar.</p>

<h2>Bloquéalo a nivel de sistema</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> bloquea los dominios de redes sociales a nivel de sistema en Mac, de modo que Instagram, X, TikTok, Facebook y Reddit son inaccesibles en todos los navegadores durante una sesión de concentración — no solo en el que hayas configurado.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Bloqueando sitios de redes sociales en Mac durante una sesión de concentración" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Una lista de bloqueo social predefinida</h3>
<p>En lugar de escribir cada dominio social a mano, un preset Social integrado cubre las principales plataformas con un solo toque. Añade cualquier cosa específica — un foro concreto, el cliente web de un servidor de Discord — a la misma lista en segundos.</p>

<h3>Funciona en todos los navegadores</h3>
<p>Una extensión de red de macOS aplica el bloqueo por debajo de la capa del navegador, así que cambiar de Safari a Chrome para saltártelo no sirve de nada. Si el dominio está bloqueado, está bloqueado en toda la máquina.</p>

<h3>Modo Estricto para los días que sabes que vas a caer</h3>
<p>Algunos días un simple bloqueo es suficiente. Otros días — una mañana estresante, una tarea aburrida — sabes que te convencerás de desactivarlo. El Modo Estricto elimina esa opción hasta que se agote el temporizador, así que la decisión se toma una vez, al principio, cuando tienes más determinación.</p>

<h3>Combínalo con un temporizador, no con una prohibición permanente</h3>
<p>Bloquear las redes sociales para siempre no es realista ni necesario — solo necesitas que desaparezcan durante los bloques de trabajo profundo. Establece una sesión para tus horas de concentración y deja que se levante automáticamente después, para que mirar tu feed a la hora de comer sea una elección, no un desliz.</p>

<p>Menos scroll, más trabajo enviado. <a href="https://apps.apple.com/app/lockin/id6802325423">Descarga Lock In! en la Mac App Store</a></p>
`,
  },
  "mac-focus-mode-doesnt-block-websites": {
    slug: "mac-focus-mode-doesnt-block-websites",
    title: "El Modo Concentración de Mac no bloquea sitios web — esto es lo que sí funciona",
    description:
      "La función Concentración de Apple silencia las notificaciones pero deja tu navegador completamente abierto. Si asumías que también bloqueaba sitios que distraen, aquí está la brecha y cómo cerrarla.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Activas el Modo Concentración en tu Mac y las notificaciones se silencian — pings de Slack, mensajes, alertas de calendario, todo suprimido. Se siente como un modo de productividad. Así que es una suposición razonable que también te mantiene alejado de sitios web que distraen mientras está activo. No lo hace. El Modo Concentración no tiene nada que ver con lo que puedes abrir en tu navegador.</p>

<h2>Qué hace realmente el Modo Concentración</h2>
<p>Concentración es un filtro de notificaciones. Controla qué apps y personas pueden interrumpirte con banners, sonidos e insignias, y puede sincronizarse entre tu Mac, iPhone e iPad. Eso es genuinamente útil para reducir las interrupciones de otras personas. Pero no afecta al comportamiento de salida — nada te impide abrir Safari y escribir una URL tú mismo. El Modo Concentración te protege de las interrupciones externas, no de tus propios hábitos.</p>

<p>Esta es una confusión común porque "Concentración" suena como si debería significar "libre de distracciones", y el marketing de Apple refuerza ese enfoque. En la práctica es más parecido a No Molestar con reglas más detalladas sobre quién puede pasar.</p>

<h2>Qué bloquea realmente los sitios web</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> se encarga de la parte que el Modo Concentración omite — bloquea sitios web y apps que distraen directamente, haciéndolos inaccesibles en lugar de simplemente silenciosos.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Bloqueo de sitios web en Mac, a diferencia del Modo Concentración de Apple" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Bloqueo real de sitios web, no filtrado de notificaciones</h3>
<p>Una extensión de red a nivel de sistema bloquea los dominios que elijas en todos los navegadores de tu Mac. Escribir la URL directamente no sirve de nada — el sitio simplemente no cargará mientras haya una sesión en marcha.</p>

<h3>Usa ambos juntos</h3>
<p>El Modo Concentración y un bloqueador de sitios web real no son herramientas que compiten — resuelven mitades diferentes del mismo problema. Activa un perfil de Concentración para silenciar las notificaciones de personas, e inicia una sesión para bloquear los sitios y apps que de otro modo abrirías tú mismo. Juntos cubren ambas direcciones de interrupción.</p>

<h3>Basado en sesiones, no todo o nada</h3>
<p>Establece una duración e inícialo desde la barra de menú cuando te sientes a trabajar. Añade intervalos Pomodoro si quieres descansos estructurados, o Modo Estricto si no confías en ti mismo para parar antes de tiempo. Cuando el temporizador termina, todo se desbloquea automáticamente.</p>

<p>Silenciar las notificaciones es un comienzo. Bloquear los sitios de verdad es lo que marca la diferencia. <a href="https://apps.apple.com/app/lockin/id6802325423">Descarga Lock In! en la Mac App Store</a></p>
`,
  },
  "website-blocker-all-browsers-mac": {
    slug: "website-blocker-all-browsers-mac",
    title: "Bloqueador de sitios web que funciona en todos los navegadores de Mac",
    description:
      "La mayoría de extensiones de bloqueo solo cubren el navegador en el que están instaladas. Si cambias de navegador para esquivar un bloqueo, aquí tienes una solución que cierra esa brecha.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Instalas una extensión de bloqueo de sitios web en Chrome. Funciona — durante un día, hasta que inconscientemente abres Safari, donde la extensión no existe, y el sitio carga sin fricción. Ni siquiera pretendías saltarte el bloqueo; simplemente tu Mac tiene más de un navegador, y el bloqueador solo conocía uno de ellos.</p>

<p>Este es el modo de fallo más común de los bloqueadores basados en extensiones. Están limitados a un solo navegador por diseño, y cambiar de navegador requiere menos esfuerzo del que la mayoría de la gente cree.</p>

<h2>Por qué los bloqueadores de extensiones tienen fugas</h2>
<p>Una extensión de navegador solo puede ver y controlar el tráfico dentro del navegador que la aloja. Si tienes Chrome, Safari, Firefox y Arc instalados — algo habitual en un Mac — una extensión en uno deja los otros tres completamente abiertos. Algunas personas ni siquiera se dan cuenta de que tienen varios navegadores hasta que buscan activamente una forma de esquivar un bloqueo, momento en el cual su cerebro encuentra el icono de Safari en el dock con una rapidez asombrosa.</p>

<p>Las extensiones también se desactivan fácilmente con unos pocos clics desde los propios ajustes del navegador, lo que anula su propósito en cuanto tienes una mala tarde.</p>

<h2>Bloquea a nivel del sistema</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> usa una extensión de red de macOS en lugar de un complemento del navegador, así que el bloqueo se aplica por debajo de todos los navegadores a la vez — Safari, Chrome, Firefox, Arc, Brave y cualquier otro instalado en la máquina.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Bloqueo de sitios web a nivel del sistema en todos los navegadores de Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Un bloqueo, todos los navegadores</h3>
<p>Añade un dominio una vez y queda bloqueado en todo el Mac, al instante. No hay configuración por navegador, no hay una extensión separada que instalar cuatro veces, ni ningún navegador que olvidaste cubrir.</p>

<h3>Sin extensión que desactivar en medio de una sesión</h3>
<p>Como el bloqueo funciona a nivel del sistema en lugar de dentro de un navegador, no hay un interruptor de extensión que apagar cuando baja la motivación. El Modo Estricto va un paso más allá, haciendo que toda la sesión sea incancelable hasta que termine el temporizador.</p>

<h3>Listas predefinidas para los culpables habituales</h3>
<p>Las listas predefinidas de Redes Sociales, Entretenimiento, Noticias y Compras cubren las categorías de distracción más comunes desde el primer momento, así que no necesitas buscar y escribir manualmente docenas de dominios de cada servicio que quieras bloquear.</p>

<p>Cambiar de navegador no debería ser una escapatoria. <a href="https://apps.apple.com/app/lockin/id6802325423">Descarga Lock In! en la Mac App Store</a></p>
`,
  },
  "block-reddit-mac": {
    slug: "block-reddit-mac",
    title: "Cómo bloquear Reddit en Mac — Deja de hacer scroll infinito",
    description:
      "El scroll infinito de Reddit y sus interminables subreddits lo convierten en una de las formas más fáciles de perder toda una tarde. Aquí te explicamos cómo mantenerlo fuera de tu jornada laboral.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Reddit es excepcionalmente bueno devorando tiempo porque nunca se acaba. Terminas un subreddit y hay otro. Terminas la página principal y hay un hilo de comentarios. A diferencia de un solo artículo o vídeo, no hay un punto de parada natural integrado — el scroll simplemente sigue generando más contenido, y "un post más" puede alargarse una hora sin que te des cuenta.</p>

<p>Si alguna vez has abierto Reddit "solo para ver una cosa" y has levantado la vista 45 minutos después, esta es la razón. No es un fallo de disciplina — es un producto diseñado para eliminar las señales de parada.</p>

<h2>Bloquear solo Reddit no siempre es suficiente</h2>
<p>Mucha gente prueba extensiones de navegador que bloquean reddit.com específicamente, lo cual funciona hasta que abren otro navegador sin la extensión, o hasta que old.reddit.com o la versión web móvil se cuelan por una regla de dominio que no era lo bastante específica. Reddit también tiene muchos subdominios y rutas de redirección, así que una lista de bloqueo limitada puede dejar pasar casos imprevistos.</p>

<h2>Una forma más limpia de bloquearlo</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> bloquea Reddit a nivel del sistema en Mac, cubriendo el dominio principal y sus variantes en todos los navegadores que tengas instalados, no solo en el que configuraste una regla.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Bloqueando Reddit en Mac durante sesiones de concentración" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Añádelo una vez, bloqueado en todas partes</h3>
<p>Añade reddit.com a tu lista de bloqueo — o usa la lista predefinida de Redes Sociales o Entretenimiento, que ya lo incluye — y será inaccesible en Safari, Chrome, Firefox y Arc simultáneamente. Sin configuración por navegador.</p>

<h3>También bloquea la app</h3>
<p>Si usas la app de escritorio de Reddit o un cliente de terceros empaquetado como app de Mac, Lock In! puede bloquearlo directamente con una interrupción a pantalla completa, cerrando la brecha que un bloqueador solo de sitios web dejaría abierta.</p>

<h3>Limitado a cuando lo necesitas</h3>
<p>No tienes que bloquear Reddit para siempre — la mayoría de la gente no quiere hacerlo. Ejecútalo durante sesiones de trabajo con un temporizador y se abrirá normalmente cuando termine la sesión, así que navegar en tu tiempo libre no se ve afectado.</p>

<h3>Modo Estricto para los días sinceros</h3>
<p>Si sabes que un descanso de cinco minutos en Reddit tiende a convertirse en cincuenta, el Modo Estricto elimina la opción de terminar la sesión antes de tiempo. El bloqueo se mantiene hasta que el temporizador diga que se acabó.</p>

<p>El scroll termina donde empieza el bloqueo. <a href="https://apps.apple.com/app/lockin/id6802325423">Descarga Lock In! en la Mac App Store</a></p>
`,
  },
  "focus-app-with-stats-mac": {
    slug: "focus-app-with-stats-mac",
    title: "App de concentración con estadísticas diarias para Mac",
    description:
      "La mayoría de bloqueadores solo bloquean. Sin un registro de tu tiempo de concentración, es difícil saber si el hábito realmente está mejorando — aquí tienes una herramienta que lo rastrea por ti.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Empiezas a usar una herramienta de concentración, ejecutas algunas sesiones, y una semana después te preguntan cómo va. Sinceramente no lo sabes. Quizá has sido constante, quizá te has saltado la mitad de los días, quizá tus sesiones se han acortado sin que te dieras cuenta. Sin un registro, "últimamente me concentro más" es una sensación, no un hecho.</p>

<p>La mayoría de bloqueadores de sitios web y apps están diseñados para hacer exactamente una cosa — bloquear — y ahí se quedan. Eso está bien en el momento en que estás en una sesión, pero te deja sin forma de ver el patrón a lo largo de días o semanas, que es donde los hábitos realmente se forman o se desmoronan.</p>

<h2>Por qué el seguimiento cambia el comportamiento</h2>
<p>Ver un registro visible de tu tiempo de concentración hace algo que el bloqueo por sí solo no logra: convierte un hábito invisible en uno medible. Una racha de sesiones consistentes motiva de una forma que "creo que me he concentrado más" no consigue. Un hueco en el gráfico es un empujón para retomar el rumbo antes de que se convierta en una caída de dos semanas. El seguimiento no es solo llevar un registro — es retroalimentación que moldea la siguiente sesión.</p>

<h2>Un bloqueador que también te muestra el patrón</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> combina el bloqueo de sitios web y apps con estadísticas diarias, así que cada sesión que ejecutas se añade a un registro visible en lugar de desaparecer en el momento en que termina.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Estadísticas diarias de concentración y gráfico de 7 días en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Un gráfico de 7 días, no solo un número</h3>
<p>Un gráfico de barras móvil de siete días muestra el tiempo de concentración de un vistazo, para que puedas detectar tendencias — una semana fuerte, un lunes flojo, una caída que está empezando antes de que se convierta en una recaída total en viejos hábitos.</p>

<h3>Totales diarios en la barra de menú</h3>
<p>Consulta el tiempo de concentración de hoy sin abrir un panel de control o app separados. Está ahí cuando miras la barra de menú, lo que mantiene el ciclo de retroalimentación corto en lugar de enterrado en una pantalla de ajustes que olvidas visitar.</p>

<h3>Las estadísticas cubren tanto sitios web como apps</h3>
<p>Como el bloqueo de sitios web y apps funciona en la misma sesión, las estadísticas reflejan tu tiempo real de concentración, no solo una parte. No necesitas reconciliar números de dos herramientas distintas.</p>

<p>Lo que se mide se repite. <a href="https://apps.apple.com/app/lockin/id6802325423">Descarga Lock In! en la Mac App Store</a></p>
`,
  },
  "mac-parental-controls-for-yourself": {
    slug: "mac-parental-controls-for-yourself",
    title: "Controles parentales de Mac para ti mismo — Bloqueo de sitios web autoimpuesto",
    description:
      "Tiempo de Uso está diseñado para gestionar la cuenta de un niño, pero muchos adultos lo configuran en su propio Mac esperando el mismo efecto. Aquí te explicamos por qué resulta incómodo, y una alternativa mejor.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Hay un tipo específico de búsqueda que va algo así como "cómo poner controles parentales en mi propio Mac". No es un error — muchos adultos quieren la misma restricción que un padre pondría en el portátil de un niño, pero aplicada a sí mismos, porque saben exactamente qué sitios devoran sus tardes y quieren un muro que no puedan convencerse fácilmente de saltar.</p>

<p>El instinto tiene sentido. La herramienta no encaja del todo.</p>

<h2>Por qué Tiempo de Uso no funciona bien para esto</h2>
<p>Los controles parentales de Tiempo de Uso están construidos alrededor de una estructura de Compartir en Familia — una cuenta de padre gestionando una cuenta de hijo, con un código de Tiempo de Uso que el hijo no conoce. Cuando intentas aplicar eso en tu propio Mac de un solo usuario, estás estableciendo un código que obviamente conoces, en una cuenta que controlas totalmente, y que puedes desactivar cuando el bloqueo se vuelva inconveniente. Todo el modelo de seguridad asume que un adulto está restringiendo a otra persona. Invierte la dirección y deja de funcionar como una barrera real.</p>

<p>Además, solo limita Safari para restricciones de sitios web, así que cualquier otro navegador que tengas instalado queda intacto.</p>

<h2>Una herramienta pensada para el bloqueo autoimpuesto</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> está diseñado específicamente para personas que se restringen a sí mismas en su Mac, no para un padre gestionando la cuenta de un hijo — todo el modelo de interacción asume que eres tú quien establece y respeta el límite.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Bloqueo autoimpuesto de sitios web y apps en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Basado en sesiones, no en cuentas</h3>
<p>En lugar de una restricción permanente vinculada a una cuenta gestionada, inicias una sesión con temporizador cuando quieras concentrarte. Bloquea los sitios y apps que elijas durante esa ventana de tiempo y se levanta automáticamente — sin necesidad de una estructura de cuentas separada.</p>

<h3>Modo Estricto en lugar de un código que ya conoces</h3>
<p>Como un código autoestablecido no es un verdadero disuasorio, el Modo Estricto elimina por completo la capacidad de cancelar una sesión antes de tiempo. El compromiso se hace una vez, al inicio, en lugar de estar a un clic de deshacerse.</p>

<h3>Cubre todos los navegadores, no solo Safari</h3>
<p>El bloqueo funciona a nivel del sistema, así que se aplica tanto si estás en Safari, Chrome, Firefox o Arc — sin brechas por restricciones específicas de un navegador.</p>

<p>Restricciones pensadas para ti, no para la cuenta de un niño que estás tomando prestada. <a href="https://apps.apple.com/app/lockin/id6802325423">Descarga Lock In! en la Mac App Store</a></p>
`,
  },
  "deep-work-app-mac": {
    slug: "deep-work-app-mac",
    title: "App de trabajo profundo para Mac — Bloquea todo, concéntrate en una cosa",
    description:
      "El trabajo profundo requiere períodos ininterrumpidos de tiempo, pero una sola notificación o pestaña abierta puede acabar con una sesión antes de que empiece. Aquí te explicamos cómo proteger ese bloque correctamente.",
    date: "2026-09-06",
    readTime: "5 min de lectura",
    content: `
<p>El concepto de trabajo profundo de Cal Newport se basa en una idea simple pero exigente: la producción cognitiva significativa requiere períodos largos e ininterrumpidos de concentración, y ese estado tarda en alcanzarse pero se rompe en un instante. Una sola notificación de Slack, un cambio reflexivo de pestaña o un ping de Discord no solo te cuestan los treinta segundos de la interrupción — te cuestan los diez o quince minutos que tardas en volver a entrar en estado de flujo.</p>

<p>Por eso el trabajo profundo es tan difícil de proteger de forma casual. No es que a la gente le falten las dos horas; es que las dos horas se trocean en seis fragmentos de veinte minutos por cosas que parecían inofensivas en el momento.</p>

<h2>Qué necesita realmente un bloque de trabajo profundo</h2>
<p>Proteger una sesión de trabajo profundo significa eliminar cada posible interrupción antes de que comience, no reaccionar a las interrupciones conforme llegan. Eso significa que las apps de comunicación son inaccesibles, los sitios de noticias y redes sociales son inaccesibles, y no hay un interruptor fácil para comprobar "solo una cosa" a mitad de sesión. La barrera tiene que existir antes que la tentación.</p>

<h2>Construyendo el bloqueo en Mac</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> está diseñado exactamente para esto — inicia una sesión y tanto los sitios web distractores como las apps distractoras quedan bloqueados durante su duración, a nivel de todo el sistema.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Sesión de trabajo profundo con sitios web y apps bloqueados en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Configura el bloqueo antes de empezar a trabajar</h3>
<p>Configura una lista de bloqueo que cubra apps de comunicación, sitios de redes sociales y cualquier otra cosa que tienda a sacarte del estado de flujo. Inicia la sesión antes de abrir tu trabajo real, para que no haya una ventana donde una distracción pueda colarse antes de que el bloqueo esté activo.</p>

<h3>Pomodoro para bloques de trabajo profundo estructurados</h3>
<p>Si dos horas seguidas sin parar resulta intimidante, los intervalos Pomodoro dividen el trabajo profundo en sprints de 25 minutos con descansos cortos — lo suficientemente largos para entrar en flujo, lo suficientemente cortos para sostenerlo durante todo el día sin agotarte.</p>

<h3>Modo Estricto para las sesiones que más importan</h3>
<p>Para el trabajo que genuinamente necesita protección — una fecha límite, un problema difícil — el Modo Estricto hace que la sesión sea incancelable. No hay un momento de clic-para-desactivar cuando aparece la primera frase difícil del día.</p>

<h3>El bloqueo de apps a pantalla completa cubre el escritorio, no solo el navegador</h3>
<p>Las interrupciones del trabajo profundo no solo vienen del navegador. Las notificaciones de Slack, Discord y Mensajes en el escritorio son igual de disruptivas, y Lock In! las bloquea con una interrupción a pantalla completa en lugar de dejar que un bloqueador solo de sitios web las ignore por completo.</p>

<p>Dos horas protegidas superan a seis fragmentadas. <a href="https://apps.apple.com/app/lockin/id6802325423">Descarga Lock In! en la Mac App Store</a></p>
`,
  },
  "block-news-sites-mac": {
    slug: "block-news-sites-mac",
    title: "Cómo bloquear sitios de noticias en Mac durante las horas de concentración",
    description:
      "Consultar las noticias 'un momento' durante el trabajo rara vez dura un momento — los titulares están diseñados para arrastrarte a la siguiente historia. Aquí te explicamos cómo mantenerlos fuera de tus bloques de trabajo.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Los sitios de noticias funcionan con un mecanismo similar al de los feeds sociales: siempre hay otro titular, otra historia relacionada, otro hilo que se actualiza en tiempo real. Entrar "un momento" durante una sesión de trabajo se convierte rutinariamente en quince minutos, porque el siguiente artículo está a un clic y el sitio está diseñado específicamente para que ese clic sea sin fricción.</p>

<p>No es que las noticias no sean importantes. Es que la mayoría no son urgentes para ti personalmente en medio de un bloque de trabajo concentrado, y pueden esperar hasta un descanso designado sin que se pierda nada.</p>

<h2>Por qué esta categoría se cuela más allá de la fuerza de voluntad</h2>
<p>Consultar noticias a menudo se disfraza de comportamiento productivo — "estoy manteniéndome informado" se siente diferente a "estoy haciendo scroll en Instagram", aunque el coste de tiempo y la interrupción de la concentración son similares. Ese encuadre hace más fácil justificarlo en el momento, que es exactamente por lo que necesita un bloqueo estructural en lugar de una regla mental que dependes de ti mismo para aplicar.</p>

<h2>Bloqueando sitios de noticias durante el trabajo</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> incluye una lista predefinida de Noticias que cubre los principales medios y agregadores, para que puedas eliminar la tentación durante las horas que importan sin decidir renunciar a las noticias por completo.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Bloqueando sitios de noticias en Mac durante las horas de trabajo" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Una lista predefinida, los principales medios cubiertos</h3>
<p>La lista predefinida de Noticias te ahorra tener que escribir manualmente cada medio que sueles consultar. Añádela a una sesión y los destinos habituales quedan cubiertos al instante.</p>

<h3>Añade tus propios sitios habituales</h3>
<p>Si tienes un agregador específico, subreddit o medio de nicho que es tu madriguera personal, añádelo como dominio personalizado junto a la lista predefinida. El bloqueo no se limita a una lista fija.</p>

<h3>Limitado a las horas de trabajo, no a todo el día</h3>
<p>Configura una sesión para tus horas laborales y los sitios de noticias se desbloquean automáticamente cuando termina, así que ponerte al día durante la comida o por la noche no se ve afectado. El objetivo es proteger el tiempo de concentración, no cortar el acceso a la información por completo.</p>

<h3>Funciona en todos los navegadores</h3>
<p>El bloqueo se aplica a todo el sistema, así que cambiar de Safari a Chrome para ver un titular no funciona — la misma regla se aplica en todas partes del Mac.</p>

<p>Mantente informado según tu horario, no según el ciclo de noticias. <a href="https://apps.apple.com/app/lockin/id6802325423">Descarga Lock In! en la Mac App Store</a></p>
`,
  },
  "freedom-app-alternative-mac": {
    slug: "freedom-app-alternative-mac",
    title: "Alternativa a Freedom App para Mac",
    description:
      "Freedom fue pionero en el bloqueador de sitios web por suscripción, pero una cuota recurrente por un bloqueo básico ha llevado a mucha gente a buscar una opción más sencilla y nativa.",
    date: "2026-09-06",
    readTime: "5 min de lectura",
    content: `
<p>Freedom lleva años en el mercado e hizo mucho para popularizar la idea del bloqueo programado de sitios web y apps en múltiples dispositivos. Sin embargo, para mucha gente la suscripción continua por una herramienta que fundamentalmente bloquea una lista de dominios con un temporizador empieza a parecer excesiva, especialmente cuando termina la prueba gratuita y el cargo recurrente se vuelve real.</p>

<p>Si solo necesitas esto en tu Mac — sin sincronización entre cinco dispositivos — hay argumentos a favor de algo nativo, de pago único y más ligero.</p>

<h2>Qué busca la gente cuando deja Freedom</h2>
<p>Las peticiones habituales son consistentes: un bloqueo que realmente funcione en todos los navegadores, una función de bloqueo de apps que no sea un añadido de última hora, una forma de hacer las sesiones más difíciles de cancelar y — muy a menudo — no querer pagar mensualmente de forma indefinida por algo tan específico en alcance. La sincronización entre dispositivos es valiosa para algunos, pero muchos usuarios de Freedom solo lo usaban en su Mac de todos modos.</p>

<h2>Una alternativa nativa para Mac</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> cubre la esencia de lo que Freedom hace para usuarios de Mac — bloqueo de sitios web y apps, sesiones programadas, un modo incancelable — construido nativamente para macOS en lugar de como un servicio de sincronización multiplataforma.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Alternativa nativa para Mac a Freedom para bloqueo de sitios web y apps" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Bloqueo a nivel del sistema, no un complemento del navegador</h3>
<p>Una extensión de red de macOS bloquea sitios web en todos los navegadores a la vez, así que no hay configuración por navegador ni extensión que desactivar cuando te sientas tentado en medio de una sesión.</p>

<h3>Bloqueo de apps integrado desde el inicio</h3>
<p>El bloqueo de apps a pantalla completa es una función central, no un extra añadido después — intenta abrir una app bloqueada durante una sesión y obtendrás una interrupción incancelable a pantalla completa en lugar de la app en sí.</p>

<h3>Modo Estricto en lugar de ajustes bloqueados</h3>
<p>El Modo Estricto hace que una sesión activa sea imposible de cancelar antes de tiempo, lo que cubre la misma necesidad de "protégeme de mí mismo" que aborda el modo bloqueado de Freedom.</p>

<h3>Vive en la barra de menú</h3>
<p>Inicia y detén sesiones desde un icono en la barra de menú en lugar de una ventana separada, manteniendo baja la fricción para iniciar una sesión, mientras que la fricción para detenerla debería ser alta.</p>

<p>La misma promesa esencial, construida para el Mac que realmente usas. <a href="https://apps.apple.com/app/lockin/id6802325423">Descarga Lock In! en la Mac App Store</a></p>
`,
  },
  "mac-website-blocker-system-wide": {
    slug: "mac-website-blocker-system-wide",
    title: "Bloqueador de sitios web para Mac a nivel de sistema — no solo un navegador",
    description:
      "Un bloqueo que solo cubre un navegador no es realmente un bloqueo, es una sugerencia. Así es como se ve una configuración verdaderamente a nivel de sistema en Mac.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Hay una diferencia importante entre "bloqueado en este navegador" y "bloqueado en este Mac", y normalmente solo se vuelve evidente la primera vez que te sorprendes abriendo un segundo navegador específicamente para saltarte un bloqueo que configuraste en el primero. Casi nunca es una decisión consciente de hacer trampa — simplemente es así de fácil caer en ese hueco.</p>

<h2>Por qué el bloqueo a nivel de navegador no es realmente un bloqueo</h2>
<p>Las extensiones de navegador solo pueden ver el tráfico dentro del navegador que las aloja. La mayoría de los Mac tienen más de un navegador instalado — Safari viene preinstalado, y muchas personas también usan Chrome, Firefox o Arc para distintos propósitos. Un bloqueador limitado a uno solo de ellos deja a todos los demás navegadores como una puerta abierta, y un cerebro distraído encuentra puertas abiertas rápido, muchas veces sin planearlo conscientemente.</p>

<p>Editar <code>/etc/hosts</code> se acerca más a un bloqueo a nivel de sistema, ya que funciona por debajo del navegador, pero requiere acceso a Terminal, no funciona con un horario programado y necesita limpieza manual — poco práctico para el uso diario.</p>

<h2>Bloqueo verdaderamente a nivel de sistema</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> usa una extensión de red de macOS que bloquea dominios a nivel de sistema, por debajo de todos los navegadores, así que el bloqueo se mantiene sin importar qué app esté haciendo la solicitud.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Bloqueo de sitios web a nivel de sistema en todos los navegadores de Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Todos los navegadores, una sola regla</h3>
<p>Añade un dominio una vez y Safari, Chrome, Firefox y Arc quedan cubiertos simultáneamente. No hay ningún paso de configuración por navegador que se te pueda olvidar.</p>

<h3>Sin necesidad de comandos de Terminal</h3>
<p>Todo se gestiona desde una interfaz en la barra de menú — añade dominios, elige listas predefinidas, inicia una sesión — sin nada de la edición manual de archivos ni la limpieza que exige el método de hosts.</p>

<h3>También cubre apps, no solo navegadores</h3>
<p>Como algunas distracciones viven completamente fuera del navegador — apps de escritorio como Discord o Steam — la misma sesión puede bloquearlas con una interrupción a pantalla completa, cerrando el hueco que dejaría una herramienta enfocada solo en el navegador.</p>

<p>A nivel de sistema significa a nivel de sistema. <a href="https://apps.apple.com/app/lockin/id6802325423">Consigue Lock In! en la Mac App Store</a></p>
`,
  },

  "unbypassable-website-blocker-mac": {
    slug: "unbypassable-website-blocker-mac",
    title: "Bloqueador de sitios web infranqueable para Mac — Modo Estricto",
    description:
      "Un bloqueador que puedes desactivar con un clic no es un bloqueador, es un recordatorio. Así es como se configura un bloqueo que se mantiene incluso cuando de verdad quieres que pare.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Todo bloqueador de sitios web funciona bien en teoría, hasta el momento en que realmente quieres entrar al sitio bloqueado con las ganas suficientes como para desactivarlo. Ese momento es precisamente el motivo por el que usas un bloqueador en primer lugar — si nunca quisieras entrar al sitio, no necesitarías la herramienta. Así que la verdadera prueba de un bloqueador no es si bloquea cuando estás motivado; es si aguanta cuando no lo estás.</p>

<p>La mayoría de las herramientas fallan esta prueba. Un interruptor en los ajustes, un clic en la barra de menú, una extensión que puedes desactivar — todo eso está a una pequeña acción de deshacerse, y una pequeña acción es todo lo que necesita un cerebro distraído.</p>

<h2>Por qué "fácil de desactivar" anula el propósito</h2>
<p>El valor de un bloqueador viene de eliminar la decisión, no de hacerla ligeramente más difícil. Si desactivarlo toma los mismos tres segundos que habría tomado abrir el sitio bloqueado de todos modos, no has añadido una barrera significativa — solo has añadido un paso que tu versión decidida-en-el-momento tomará con gusto.</p>

<h2>Un bloqueo que aguanta</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> incluye el Modo Estricto, que hace que una sesión de bloqueo activa sea imposible de cancelar hasta que se acabe el temporizador — no hay interruptor en los ajustes, no hay atajo en la barra de menú, no hay forma de terminarla antes de tiempo.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Modo Estricto: bloqueo de sitios web incancelable en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>La decisión ocurre una sola vez, al principio</h3>
<p>Eliges el Modo Estricto y defines la duración antes de que empiece la sesión, cuando estás motivado y con la cabeza despejada. A partir de ese punto, el compromiso queda fijado en lugar de renegociarse cada vez que aparece la tentación.</p>

<h3>Sin reinicio de contraseña ni truco de desinstalación</h3>
<p>El bloqueo se aplica a nivel de sistema mediante una extensión de red de macOS, no mediante un ajuste que puedas revertir discretamente. Está diseñado específicamente para sobrevivir el momento en que más quieres saltártelo.</p>

<h3>Combínalo con apps para un bloqueo total</h3>
<p>El Modo Estricto también se aplica al bloqueo de apps además de sitios web, así que una interrupción a pantalla completa en una app bloqueada tampoco se puede cerrar antes de tiempo — las dos mitades del bloqueo se mantienen juntas.</p>

<p>Un bloqueo que solo funciona cuando no lo necesitas no es un bloqueo. <a href="https://apps.apple.com/app/lockin/id6802325423">Consigue Lock In! en la Mac App Store</a></p>
`,
  },

  "block-online-shopping-mac": {
    slug: "block-online-shopping-mac",
    title: "Cómo bloquear sitios de compras online en Mac",
    description:
      "Una rápida mirada a Amazon o a una tienda de ropa durante el trabajo rara vez se queda en rápida, y suele terminar con un carrito lleno de cosas que no planeabas comprar. Así es como puedes mantenerlo fuera de tu jornada laboral.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Las compras online durante el horario laboral tienen una forma muy particular: abres el sitio para un solo artículo, te arrastran los "otros clientes también compraron" y veinte minutos después has añadido tres cosas a un carrito que no sabías que necesitabas. En realidad no se trata tanto de comprar — es un bucle de navegación disfrazado de tarea, lo que hace fácil justificarlo como productivo en el momento.</p>

<p>También es caro de una forma en que las redes sociales no lo son. Veinte minutos perdidos en Reddit te cuestan tiempo. Veinte minutos perdidos en un sitio de compras te pueden costar dinero además del tiempo.</p>

<h2>Por qué es difícil resistirse a mitad de una tarea</h2>
<p>Los sitios de compras están optimizados con la misma mecánica de recomendaciones y urgencia que los feeds sociales — ofertas por tiempo limitado, artículos relacionados, avisos de poco stock — todo diseñado para mantenerte navegando más allá de tu intención original. Sumado a que "solo estoy mirando" se siente inofensivo, es una categoría fácil de subestimar hasta que revisas el estado de tu cuenta bancaria.</p>

<h2>Bloquear sitios de compras durante el tiempo de enfoque</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> incluye una lista predefinida de Compras que cubre los principales sitios de venta minorista y mercados online, así que quedan inaccesibles durante tus sesiones de trabajo sin que tengas que recordar cada sitio al que sueles ir a parar.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Bloqueo de sitios de compras online en Mac durante el trabajo" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Una lista predefinida para las tiendas más comunes</h3>
<p>Añade la lista predefinida de Compras a una sesión y los principales mercados y sitios minoristas quedan cubiertos de inmediato, sin necesidad de construir una lista manualmente.</p>

<h3>Añade sitios específicos que realmente usas</h3>
<p>Si tu punto débil personal es una boutique concreta o un mercado de reventa que no está en la lista predefinida, añádelo como dominio personalizado — la lista de bloqueo no se limita a lo que viene incluido.</p>

<h3>Modo Estricto para los días de pago y de rebajas</h3>
<p>Si hay días más peligrosos que otros — el día de pago, una gran oferta — el Modo Estricto elimina la opción de desactivar el bloqueo a medio camino, algo que importa precisamente en esos días.</p>

<h3>Se desbloquea automáticamente después del trabajo</h3>
<p>El bloqueo está ligado a tu sesión, no es una restricción permanente, así que comprar en tu tiempo libre por la noche no se ve afectado una vez que termina el temporizador.</p>

<p>Mantén el carrito vacío hasta que termine la jornada laboral. <a href="https://apps.apple.com/app/lockin/id6802325423">Consigue Lock In! en la Mac App Store</a></p>
`,
  },

  "focus-timer-with-website-blocking-mac": {
    slug: "focus-timer-with-website-blocking-mac",
    title: "Temporizador de enfoque con bloqueo de sitios web integrado para Mac",
    description:
      "Un temporizador solo no evita que abras una pestaña que te distrae, y un bloqueador solo no le da estructura a tu sesión de trabajo. Así es como se ve combinado.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Mucha gente usa dos herramientas separadas durante una sesión de trabajo: un temporizador Pomodoro para estructurar el tiempo, y un bloqueador de sitios web para mantener las distracciones fuera. Funciona, pero significa iniciar dos cosas cada vez que te sientas a enfocarte, y significa que el temporizador no tiene ni idea de si el bloqueador siquiera está activo — operan de forma completamente independiente, sin ninguna relación entre sí.</p>

<p>Ese hueco importa más de lo que parece. Si el temporizador dice "enfócate durante 25 minutos" pero el bloqueador no está activo, la estructura es solo una sugerencia. Si el bloqueador está activo pero no hay temporizador, las sesiones tienden a alargarse indefinidamente o a abandonarse sin un final claro.</p>

<h2>Por qué combinarlos importa</h2>
<p>Un temporizador le da a una sesión una forma definida — un inicio, un final y, idealmente, un ritmo de trabajo y descanso. Un bloqueador le da a esa forma dientes de verdad al eliminar la tentación de llenar la parte de "trabajo" con otra cosa. Ninguno por sí solo resuelve el problema real de mantenerse enfocado durante un período determinado; juntos sí lo hacen.</p>

<h2>Temporizador y bloqueo en una sola sesión</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> combina un temporizador de enfoque con el bloqueo de sitios web y apps en una sola sesión, así que iniciar el reloj y activar el bloqueo son la misma acción.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Temporizador de enfoque con bloqueo de sitios web integrado en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Define una duración, todo empieza junto</h3>
<p>Elige cuánto tiempo quieres enfocarte desde la barra de menú, y los bloqueos de sitios web y apps se activan durante exactamente esa ventana. No hay que abrir una app aparte para la parte del temporizador.</p>

<h3>Intervalos Pomodoro integrados</h3>
<p>Para ciclos estructurados de trabajo y descanso, el modo Pomodoro ejecuta el bloqueo en sincronía con los intervalos de trabajo y lo levanta automáticamente durante los descansos, así que no tienes que reactivar el bloqueador manualmente cada 25 minutos.</p>

<h3>Las estadísticas lo unen todo</h3>
<p>Como el temporizador y el bloqueo son una sola sesión, las estadísticas diarias reflejan tiempo de enfoque real y protegido — no solo el tiempo en que el temporizador estaba corriendo con las distracciones a un cambio de pestaña de distancia.</p>

<p>Una sola sesión, temporizador y bloqueo juntos. <a href="https://apps.apple.com/app/lockin/id6802325423">Consigue Lock In! en la Mac App Store</a></p>
`,
  },

  "mac-productivity-apps-for-adhd": {
    slug: "mac-productivity-apps-for-adhd",
    title: "Apps de productividad para Mac con TDAH — bloquea distracciones automáticamente",
    description:
      "Los consejos de productividad estándar suelen asumir que recordarás evitar las distracciones. Para un cerebro con TDAH, la solución más fiable es eliminar la opción por completo.",
    date: "2026-09-06",
    readTime: "5 min de lectura",
    content: `
<p>Muchos consejos de productividad se resumen en "simplemente ten más disciplina para no revisar ese sitio". Para un cerebro con TDAH, ese consejo malinterpreta el problema. No es falta de saber que no deberías hacerlo — es que el control de impulsos y la memoria de trabajo hacen que "acordarme de no hacerlo" sea un mecanismo poco fiable en el momento, sin importar cuán clara fuera la intención cinco minutos antes.</p>

<p>Lo que suele funcionar mejor no es más fuerza de voluntad, sino algo estructural: eliminar la opción para que no haya nada que resistir en primer lugar. Si un sitio o app que distrae simplemente no es accesible, el impulso no tiene a dónde ir.</p>

<h2>Por qué eliminar funciona mejor que recordar</h2>
<p>Los avisos basados en notificaciones y los recordatorios amables asumen que los notarás y actuarás en consecuencia en el momento — que es exactamente el mecanismo que suele ser menos fiable con el TDAH. Un bloqueo real no depende de ese mecanismo en absoluto. No hay recordatorio que se te pueda pasar, ni notificación que descartes sin leer. El sitio es accesible o no lo es, y ese binario es mucho más fácil de manejar que un sistema que depende de que te des cuenta a tiempo.</p>

<h2>Bloqueo automático, no fuerza de voluntad manual</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> bloquea automáticamente sitios web y apps que distraen en cuanto comienza una sesión, eliminando la necesidad de notar una distracción y decidir no engancharte con ella en el momento.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Bloqueo automático de distracciones en Mac para enfoque con TDAH" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Un clic para empezar, luego es automático</h3>
<p>Iniciar una sesión desde la barra de menú es una sola acción de poco esfuerzo. Después de eso, el bloqueo funciona solo — no se requieren decisiones continuas para mantenerlo activo, algo que importa cuando la toma de decisiones sostenida es la parte difícil.</p>

<h3>El Modo Estricto elimina la vía de escape</h3>
<p>La impulsividad puede hacer que "solo lo desactivo un segundo" se sienta inofensivo en el momento, aunque eso anule por completo el propósito. El Modo Estricto elimina esa opción hasta que termina el temporizador, así que no hay ninguna pequeña acción disponible para deshacer toda la sesión.</p>

<h3>Pomodoro para estructura externa</h3>
<p>Los intervalos integrados de trabajo y descanso ofrecen una estructura de tiempo externa, que puede ser más fácil de seguir que el tiempo autogestionado cuando la percepción interna del tiempo no es fiable.</p>

<h3>Las listas predefinidas eliminan la fricción de configuración</h3>
<p>Las listas predefinidas de Social, Entretenimiento, Noticias y Compras significan que no tienes que construir una lista de bloqueo desde cero antes de poder empezar — una tarea que en sí misma puede convertirse en un punto de procrastinación.</p>

<p>Elimina la opción, no solo el recordatorio. <a href="https://apps.apple.com/app/lockin/id6802325423">Consigue Lock In! en la Mac App Store</a></p>
`,
  },

  "schedule-website-blocking-mac": {
    slug: "schedule-website-blocking-mac",
    title: "Cómo programar el bloqueo de sitios web en Mac",
    description:
      "Iniciar manualmente un bloqueador cada mañana es una cosa más que recordar, y los días que se te olvida suelen ser los días que más lo necesitabas. Así es como puedes automatizarlo.",
    date: "2026-09-06",
    readTime: "4 min de lectura",
    content: `
<p>Un bloqueador de sitios web solo ayuda los días en que te acuerdas de activarlo. Si iniciar una sesión es un paso manual al comienzo de tu jornada laboral, las mañanas en las que vas con prisa, distraído o ya con retraso — exactamente las mañanas en las que un bloqueador ayudaría más — son también las mañanas en las que es más probable que te lo saltes por completo.</p>

<p>La solución es dejar de depender de acordarte. Un horario recurrente inicia el bloqueo por ti, así que el hábito no depende de tu estado de ánimo a las 9 de la mañana.</p>

<h2>Por qué los inicios manuales fallan en silencio</h2>
<p>Nadie decide dejar de usar un bloqueador de golpe — simplemente se va desvaneciendo. Una mañana ajetreada te lo saltas "solo esta vez", y en cuanto empieza el patrón de saltártelo, es fácil seguir haciéndolo sin una decisión deliberada en ningún sentido. Unas semanas después ya no lo usas en absoluto, sin haber elegido nunca dejarlo.</p>

<h2>Programarlo para no tener que hacerlo tú</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> admite sesiones de enfoque recurrentes en Mac, así que el bloqueo de tus sitios web y apps puede iniciarse automáticamente a horas fijas en lugar de depender de que te acuerdes cada mañana.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Sesiones programadas de bloqueo de sitios web en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Configúralo una vez para tu horario laboral</h3>
<p>Configura una sesión recurrente para tu bloque de trabajo habitual — digamos, de 9 de la mañana a 1 de la tarde entre semana — y el bloqueo se activa según lo programado sin ninguna configuración diaria de tu parte.</p>

<h3>Consistencia sin depender de la memoria</h3>
<p>Como el horario funciona de forma independiente a tu estado de ánimo por la mañana, un comienzo de día apresurado o distraído no significa que el bloqueo se salte. El sistema hace lo que tu memoria quizás no haga.</p>

<h3>Ajusta sin perder el hábito</h3>
<p>Las reuniones y las excepciones pasan — todavía puedes iniciar una sesión no programada o terminar una antes de tiempo si de verdad hace falta, sin abandonar el horario recurrente para todos los demás días.</p>

<h3>Las estadísticas muestran si el horario se está manteniendo</h3>
<p>El gráfico de estadísticas diarias facilita ver si las sesiones programadas realmente se están ejecutando de forma consistente, así puedes detectar un hábito que se está resbalando antes de que se convierta en uno olvidado.</p>

<p>Configúralo una vez, deja que funcione todos los días después. <a href="https://apps.apple.com/app/lockin/id6802325423">Consigue Lock In! en la Mac App Store</a></p>
`,
  },
};
