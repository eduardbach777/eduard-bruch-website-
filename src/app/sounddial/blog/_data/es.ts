import type { ArticleSet } from "./index";

export const esArticles: ArticleSet = {
  "mac-audio-podcasting-setup": {
    slug: "mac-audio-podcasting-setup",
    title: "Audio en Mac para podcasting: controla lo que escuchas mientras grabas",
    description:
      "Grabar un podcast mientras monitoreas niveles, escuchas a tu invitado y gestionas notificaciones, todo compitiendo por un solo control de volumen. Aquí tienes una mejor configuración.",
    date: "2026-03-05",
    readTime: "5 min de lectura",
    content: `
<p>Estás grabando un podcast en tu Mac. Necesitas escuchar a tu invitado (por Zoom, Riverside o SquadCast) con claridad. Necesitas monitorear los niveles de grabación de tu DAW. Necesitas silenciar Slack para que ningún ping acabe en la grabación. Y necesitas silenciar completamente los sonidos de notificaciones del sistema: un "ding" de macOS en medio de una entrevista arruina el audio.</p>

<p>macOS te da un solo control de volumen para todo esto. No es suficiente.</p>

<h2>El desafío del audio para podcasting en Mac</h2>

<p>Durante una sesión de grabación de podcast, normalmente tienes:</p>
<ul>
  <li><strong>App de comunicación</strong> (Zoom, Riverside, SquadCast) — audio del invitado, debe ser claro</li>
  <li><strong>DAW / app de grabación</strong> (Logic, GarageBand, Audacity, Hindenburg) — monitoreo de tus propios niveles</li>
  <li><strong>Fuentes de notificaciones</strong> (Slack, Mail, Calendario, Mensajes) — deben estar completamente silenciadas durante la grabación</li>
  <li><strong>Navegador</strong> — puede tener notas del programa, pestañas de investigación o un temporizador en marcha</li>
</ul>

<p>Todo esto al mismo volumen es un caos. Tu invitado compite con los sonidos del sistema. Una notificación de Slack podría arruinar una toma. Y si necesitas ajustar el volumen de tu invitado, cambiar el volumen del sistema también cambia tus niveles de monitoreo.</p>

<h2>La solución habitual</h2>

<p>La mayoría de los podcasters usan una combinación de:</p>
<ul>
  <li>Modo de concentración (No molestar) para suprimir notificaciones</li>
  <li>Cerrar manualmente Slack, Mail y otras apps ruidosas antes de grabar</li>
  <li>Ajustar el volumen interno de la app de comunicación para el invitado</li>
</ul>

<p>Esto funciona, pero es propenso a errores. Si olvidas activar No molestar, una notificación arruina tu toma. Si olvidas cerrar Slack, puede entrar una llamada. Y aún así no puedes controlar de forma independiente el volumen de tu invitado frente a tus niveles de monitoreo.</p>

<h2>Audio por app para podcasting</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> te permite crear un entorno de grabación limpio controlando cada app de forma independiente:</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Configuración de SoundDial para podcasting — audio del invitado, monitoreo y notificaciones a niveles independientes" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Perfil de grabación</h3>
<ul>
  <li><strong>Zoom / Riverside:</strong> 80-100% — audio claro del invitado</li>
  <li><strong>Logic / GarageBand:</strong> 60% — monitoreo cómodo sin fatiga auditiva</li>
  <li><strong>Slack:</strong> silenciado — cero sonidos de notificación</li>
  <li><strong>Mail:</strong> silenciado</li>
  <li><strong>Mensajes:</strong> silenciado</li>
  <li><strong>Calendario:</strong> silenciado</li>
  <li><strong>Navegador:</strong> silenciado — sin reproducciones automáticas sorpresa</li>
</ul>

<p>Guarda esto como un perfil de "Grabación". Antes de pulsar grabar, aplica el perfil con un clic. Todas las fuentes de notificación quedan silenciadas, tu invitado está a volumen completo y tu monitoreo está a un nivel cómodo.</p>

<h3>Perfil de edición</h3>
<ul>
  <li><strong>Logic / Hindenburg:</strong> 100% — monitoreo completo para edición</li>
  <li><strong>Spotify:</strong> silenciado — sin confusión con pistas de referencia</li>
  <li><strong>Slack:</strong> 20% — notificaciones sutiles durante los descansos</li>
  <li><strong>Navegador:</strong> 40% — para notas del programa e investigación</li>
</ul>

<p>Dos perfiles, dos clics, dos entornos de audio completamente diferentes. Sin cerrar y reabrir apps manualmente. Sin olvidar reactivar las notificaciones después de grabar.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "mac-too-loud-full-volume-tame-it": {
    slug: "mac-too-loud-full-volume-tame-it",
    title: "¿Por qué mi Mac suena tan fuerte a volumen máximo? Cómo obtener un control más preciso",
    description:
      "Los altavoces del MacBook Pro son geniales, hasta que retumban. Si incluso los niveles moderados de volumen te parecen demasiado fuertes, aquí tienes cómo obtener un control de audio más preciso.",
    date: "2026-03-08",
    readTime: "4 min de lectura",
    content: `
<p>Los modelos más recientes del MacBook Pro (14" y 16") tienen altavoces notablemente potentes para un portátil. Tan potentes que los niveles moderados de volumen pueden ser genuinamente fuertes — especialmente en una habitación silenciosa, a altas horas de la noche o con auriculares. La diferencia entre "cómodo" y "demasiado" es a veces solo uno o dos pasos de volumen.</p>

<h2>Por qué los pasos de volumen resultan demasiado bruscos</h2>

<p>macOS tiene <strong>16 pasos de volumen</strong> mediante el teclado. Cada paso es aproximadamente el 6,25% del rango total. En altavoces potentes o auriculares sensibles, un solo paso puede representar un cambio significativo de volumen percibido — pasando de "perfecto" a "demasiado fuerte" con solo tocar la tecla de volumen.</p>

<h2>Solución integrada: volumen en cuartos de paso</h2>

<p>Mantén <strong>Option + Shift</strong> y pulsa subir/bajar volumen. Cada pulsación ajusta en un cuarto del paso normal, dándote <strong>64 niveles</strong> en lugar de 16. Este control 4 veces más fino facilita encontrar el volumen exacto, especialmente con altavoces potentes o auriculares.</p>

<p>Este es el truco de audio más útil del Mac que la mayoría de la gente desconoce.</p>

<h2>El problema de fondo: un solo control para todo</h2>

<p>Incluso con 64 niveles, sigues teniendo un solo control que maneja todas las apps. Si ajustas el volumen lo suficientemente bajo para sonidos de notificación cómodos, tu música podría quedar demasiado baja. Si lo ajustas para la música, un ping de notificación podría hacerte saltar.</p>

<p>El verdadero problema es que diferentes fuentes de audio necesitan diferentes volúmenes. Las notificaciones deben ser sutiles. La música debe estar presente. Las llamadas deben ser claras. El video del navegador debe ser moderado. Un solo control no puede atender bien a todos estos.</p>

<h2>Volumen por app para un control preciso</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> le da a cada app su propio control de volumen con <strong>incrementos del 1%</strong> del 0% al 200%. Son 200 niveles de precisión por app, comparado con los 16 (o 64 con el modificador) pasos del sistema de macOS.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Control de volumen por app de SoundDial con precisión del 1% en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Ajusta el volumen del sistema a un nivel base moderado (50-60%), luego usa SoundDial para afinar cada app:</p>
<ul>
  <li><strong>Spotify:</strong> 35% — nivel cómodo de fondo</li>
  <li><strong>Slack:</strong> 12% — ping de notificación sutil</li>
  <li><strong>Zoom:</strong> 85% — audio de llamada claro sin ser abrumador</li>
  <li><strong>Safari:</strong> 45% — reproducción de video moderada</li>
</ul>

<p>De esta forma, ninguna fuente de audio es "demasiado fuerte". Cada una está ajustada a su nivel ideal de forma independiente. Un ping de Slack al 12% apenas se nota, mientras que tu llamada de Zoom al 85% se escucha con total claridad — todo con el mismo volumen del sistema.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "slack-huddle-volume-issues-mac": {
    slug: "slack-huddle-volume-issues-mac",
    title: "Problemas de volumen en huddles de Slack en Mac: demasiado bajo, demasiado alto o peleando con tu música",
    description:
      "Los huddles de Slack compiten con tu música y notificaciones por el mismo volumen. Así puedes controlar el audio del huddle independientemente de todo lo demás en Mac.",
    date: "2026-03-10",
    readTime: "5 min de lectura",
    content: `
<p>Los huddles de Slack son convenientes — haces clic en un botón y estás en una llamada de voz sin programar una reunión. Pero el audio es un desastre. El huddle está al mismo volumen que tu Spotify. Los sonidos de notificación de Slack suenan al mismo nivel que la llamada. Y cuando alguien comparte música o una pantalla con audio en el huddle, o es inaudible o ensordecedor.</p>

<p>El problema no es Slack. Es macOS. Todo pasa por un solo control de volumen, así que el audio del huddle, los sonidos de notificación, la música y el audio del navegador están todos peleando por el mismo espacio.</p>

<h2>Controles de audio internos de Slack</h2>

<p>Slack tiene controles de audio limitados:</p>
<ul>
  <li><strong>Preferencias de notificación:</strong> Slack → Configuración → Notificaciones → Sonido y apariencia. Puedes cambiar el sonido de notificación o desactivar sonidos específicos, pero no puedes ajustar el volumen de notificación independientemente del volumen del huddle.</li>
  <li><strong>Volumen del huddle:</strong> Durante un huddle, no hay un control de volumen separado para la llamada frente a otros sonidos de Slack. Todo en Slack es una sola transmisión de audio para macOS.</li>
  <li><strong>Dispositivo de entrada/salida:</strong> Slack → Configuración → Audio y video te permite seleccionar dispositivos de micrófono y altavoz, pero no niveles de volumen por función.</li>
</ul>

<h2>Los tres problemas de audio de Slack</h2>

<h3>1. Huddle demasiado bajo comparado con la música</h3>
<p>Tu música está a un nivel cómodo. Te unes a un huddle. La voz de tu compañero está al mismo volumen que tu música — no puedes distinguir las palabras con claridad. Subir el volumen del sistema hace que la música quede demasiado fuerte.</p>

<h3>2. Sonidos de notificación durante los huddles</h3>
<p>Estás en una conversación en un huddle. Cada mensaje de Slack que llega suena al mismo volumen que la llamada. En un espacio de trabajo ocupado con canales activos, el ping constante hace que el huddle sea inusable.</p>

<h3>3. Huddle demasiado fuerte para escucha pasiva</h3>
<p>A veces te unes a un huddle para escuchar pasivamente mientras trabajas. Quieres que esté a nivel de fondo — lo suficientemente bajo para no distraerte, lo suficientemente alto para escuchar si alguien dice tu nombre. macOS no te permite poner Slack al 20% mientras mantienes tu navegador al 60%.</p>

<h2>La solución: controla el volumen de Slack de forma independiente</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> le da a Slack su propio control de volumen, separado de todas las demás apps. Como el audio del huddle y los sonidos de notificación de Slack son parte de la misma app, el control maneja ambos — pero eso es lo que realmente quieres la mayor parte del tiempo.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial controlando el volumen de Slack de forma independiente durante un huddle mientras suena música a un nivel diferente" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Configuración optimizada para huddle</h3>
<ul>
  <li><strong>Slack:</strong> 90-100% (audio de huddle claro, las notificaciones suenan fuerte pero estás activamente en Slack)</li>
  <li><strong>Spotify:</strong> 15% (fondo apenas perceptible, no compite con las voces)</li>
  <li><strong>Navegador:</strong> silenciado (sin audio sorpresa de pestañas)</li>
</ul>

<h3>Configuración de huddle pasivo</h3>
<ul>
  <li><strong>Slack:</strong> 30% (nivel de escucha de fondo)</li>
  <li><strong>Spotify:</strong> 40% (tu audio principal es la música)</li>
  <li><strong>Navegador:</strong> 50% (nivel de trabajo normal)</li>
</ul>

<p>Guarda cada uno como perfil. Cuando empiece un huddle, aplica el perfil adecuado con un clic. O usa <strong>auto-ducking</strong> — cuando el huddle active tu micrófono, SoundDial reduce automáticamente todo excepto Slack.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "set-default-volume-new-apps-mac": {
    slug: "set-default-volume-new-apps-mac",
    title: "Cómo establecer un volumen predeterminado para apps nuevas en Mac",
    description:
      "Las apps nuevas se inician a volumen máximo por defecto. Así puedes hacer que cada app nueva empiece a un nivel cómodo — para que nada te pille desprevenido.",
    date: "2026-03-12",
    readTime: "3 min de lectura",
    content: `
<p>Instalas una app nueva. Se abre por primera vez. Inmediatamente reproduce audio — un sonido de introducción, una notificación, un video tutorial — a volumen máximo del sistema. No te lo esperabas. Tienes los auriculares puestos. Te zumban los oídos.</p>

<p>macOS no tiene el concepto de "volumen predeterminado para apps nuevas" porque macOS no tiene volumen por app. Cada app recibe el volumen del sistema, y el volumen del sistema es lo que sea que lo hayas ajustado por última vez. Las apps nuevas no reciben un trato especial — simplemente suenan al nivel que esté todo lo demás.</p>

<h2>Por qué esto es un problema</h2>

<p>Cuando abres una app por primera vez, no tienes idea de lo fuerte que va a sonar. Algunas apps reproducen sonidos inmediatamente (tutoriales de bienvenida, sonidos de notificación, videos de bienvenida). Si tu volumen del sistema está al 80% porque estabas escuchando música, el sonido de esa app nueva también está al 80% — que podría ser mucho más fuerte de lo cómodo para una fuente de audio inesperada.</p>

<p>Esto es especialmente molesto con:</p>
<ul>
  <li>Apps de comunicación (Slack, Teams) que reproducen un sonido al iniciarse</li>
  <li>Apps con tutoriales en video al primer inicio</li>
  <li>Juegos que ponen la música de la pantalla de título al máximo inmediatamente</li>
  <li>Apps basadas en navegador que reproducen contenido automáticamente</li>
</ul>

<h2>La solución: volumen predeterminado para apps nuevas</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> tiene un <strong>volumen predeterminado configurable</strong> para apps nuevas. En los ajustes, estableces a qué nivel de volumen deben empezar las apps recién detectadas — por ejemplo, 70%. La primera vez que cualquier app se inicia y produce audio, SoundDial la establece al 70% en lugar del 100%.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Ajuste de volumen predeterminado de SoundDial — las apps nuevas empiezan a un nivel configurado en lugar de a todo volumen" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Esto significa:</p>
<ul>
  <li>Sin audio sorpresa a todo volumen de apps recién instaladas</li>
  <li>Cada app nueva empieza a un nivel cómodo y predecible</li>
  <li>Luego puedes ajustarla arriba o abajo desde el valor predeterminado según necesites</li>
  <li>Una vez ajustada, la función de <strong>memoria de volumen</strong> recuerda el nivel de esa app para futuros inicios</li>
</ul>

<p>Es una función pequeña, pero resuelve una molestia diaria genuina — el "susto de la app nueva a todo volumen" que pilla desprevenido a todo el mundo al menos una vez.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "mac-startup-sound-too-loud": {
    slug: "mac-startup-sound-too-loud",
    title: "¿El sonido de inicio del Mac es demasiado fuerte? Cómo desactivarlo o reducirlo",
    description:
      "El sonido de inicio del Mac suena a todo volumen cada vez que reinicias — especialmente incómodo en reuniones y habitaciones silenciosas. Así puedes silenciarlo o controlarlo.",
    date: "2026-03-15",
    readTime: "4 min de lectura",
    content: `
<p>Reinicias tu Mac en una oficina silenciosa. La sala de reuniones está en completo silencio. Entonces — <em>BONG</em> — el sonido de inicio suena a todo volumen. Todos te miran. El sonido es icónico, pero también es incontrolable y a menudo vergonzosamente fuerte.</p>

<h2>Cómo desactivar el sonido de inicio</h2>

<p>macOS te permite desactivar completamente el sonido de inicio:</p>

<ol>
  <li>Ve a <strong>Ajustes del Sistema → Sonido</strong></li>
  <li>Busca <strong>"Reproducir sonido de arranque"</strong></li>
  <li>Desmárcalo</li>
</ol>

<p>Listo. Tu Mac se iniciará en silencio a partir de ahora. No necesitas comandos de Terminal — este ajuste está disponible desde macOS Big Sur.</p>

<h3>Método por Terminal (si lo prefieres)</h3>
<p>También puedes desactivarlo vía Terminal:</p>
<p><code>sudo nvram StartupMute=%01</code></p>
<p>Para reactivarlo:</p>
<p><code>sudo nvram StartupMute=%00</code></p>

<h2>¿Se puede bajar el sonido de inicio en lugar de desactivarlo?</h2>

<p>No directamente. El sonido de inicio se reproduce a un volumen fijo que está determinado por el volumen del sistema en el momento del apagado. Si tu Mac estaba al 80% de volumen cuando lo apagaste, el sonido suena aproximadamente al 80%. Si estaba al 20%, el sonido es más bajo.</p>

<p><strong>Truco:</strong> Antes de reiniciar tu Mac, baja el volumen del sistema al 10-20%. El sonido de inicio se reproducirá a ese nivel más bajo. No es ideal — requiere recordarlo — pero funciona si quieres el sonido a un volumen razonable en lugar de silenciarlo por completo.</p>

<h2>El problema más amplio del control de sonido en Mac</h2>

<p>El sonido de inicio es solo un ejemplo del limitado control de audio de macOS. Los sonidos del sistema, los sonidos de notificación y el audio de las apps están todos mezclados con un control independiente mínimo. Si te encuentras ajustando regularmente el volumen para gestionar diferentes fuentes de audio durante el día, el control de volumen por app resuelve el problema de raíz.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> le da a cada app de tu Mac su propio control de volumen. Pon las apps de notificación bajas, la música a un nivel cómodo y las llamadas a volumen completo — todo de forma independiente. Guarda las configuraciones como perfiles y cambia con un clic.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — control de volumen por app para gestionar todas las fuentes de audio del Mac de forma independiente" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "webex-volume-too-low-mac": {
    slug: "webex-volume-too-low-mac",
    title: "¿Volumen de Cisco Webex demasiado bajo en Mac? Cómo solucionarlo",
    description:
      "Las llamadas de Webex apenas se escuchan en tu Mac. Aquí tienes cada solución — desde los ajustes de audio de Webex hasta amplificar el volumen de la llamada más allá del 100% con un mezclador por app.",
    date: "2026-03-18",
    readTime: "5 min de lectura",
    content: `
<p>Webex es una de las herramientas de videoconferencia más usadas en entornos corporativos — y una de las que más quejas recibe por la calidad de audio en Mac. Volumen de llamada bajo, voces apagadas y audio que parece más bajo que Zoom o Teams al mismo volumen del sistema. Si apenas puedes escuchar tus llamadas de Webex, no estás solo.</p>

<h2>1. Verifica los ajustes de audio de Webex</h2>

<p>Durante una reunión de Webex, haz clic en el menú de audio (icono de altavoz o los tres puntos → Ajustes de audio):</p>
<ul>
  <li>Asegúrate de que el dispositivo de <strong>altavoz</strong> correcto esté seleccionado</li>
  <li>Arrastra el control de volumen del altavoz al máximo</li>
  <li>Haz clic en "Probar" para reproducir un tono de prueba y verificar la salida</li>
  <li>Comprueba si el "Modo música" está activado — desactívalo a menos que estés presentando música específicamente</li>
  <li>Revisa los ajustes de eliminación de ruido — "Eliminar ruido de fondo" en modo agresivo puede reducir el volumen percibido de la voz</li>
</ul>

<h2>2. Verifica la salida de macOS</h2>

<p>Ajustes del Sistema → Sonido → Salida. Verifica que el dispositivo correcto esté seleccionado y el volumen esté al máximo. Después de una actualización de macOS o un cambio de dispositivo, Webex podría estar usando una salida inesperada.</p>

<h2>3. Problema con el códec Bluetooth</h2>

<p>¿Usas AirPods o auriculares Bluetooth? Webex al activar tu micrófono fuerza el cambio de códec AAC→SCO, reduciendo la calidad y el volumen del audio. Usa un micrófono separado (el micrófono integrado del Mac o uno USB) y mantén los auriculares Bluetooth solo como salida.</p>

<h2>4. Procesamiento de audio específico de Webex</h2>

<p>Webex tiene un procesamiento de audio agresivo que puede reducir el volumen aparente de los participantes de la llamada. Prueba estos ajustes de Webex:</p>
<ul>
  <li>Establece la eliminación de ruido en "Bajo" en lugar de "Alto"</li>
  <li>Desactiva "Optimizar para mi voz" si está activado</li>
  <li>Intenta cambiar de "Audio del ordenador" a un dispositivo específico</li>
</ul>

<h2>5. El problema de IT/administrador</h2>

<p>En entornos corporativos, Webex a menudo está gestionado por IT con políticas de audio específicas. Algunos ajustes pueden estar bloqueados o preconfigurados. Si las soluciones básicas no funcionan, consulta con tu departamento de IT sobre las políticas de audio de Webex. Algunas organizaciones restringen los niveles máximos de audio o imponen ajustes de procesamiento de audio específicos.</p>

<h2>6. Amplifica Webex más allá del 100%</h2>

<p>Si los ajustes están al máximo y los participantes siguen siendo demasiado bajos, <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> te permite amplificar Webex al <strong>200%</strong>. Esto amplifica el audio de la llamada más allá del máximo integrado de Webex — útil cuando un participante tiene un micrófono deficiente o cuando el procesamiento de audio de Webex reduce demasiado la señal.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial amplificando el volumen de llamada de Cisco Webex más allá del 100% en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>SoundDial también ayuda durante reuniones consecutivas de Webex: usa auto-ducking para bajar automáticamente tu música de fondo cuando cada reunión empieza, y restaurarla durante los descansos. Guarda un perfil de volumen "Reuniones" para establecer instantáneamente tu balance de audio preferido para la jornada laboral.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "mac-two-audio-sources-same-time": {
    slug: "mac-two-audio-sources-same-time",
    title: "Cómo escuchar dos cosas a la vez en Mac sin volverse loco",
    description:
      "Música y un podcast. Una clase y un video de notas. Una llamada y música de fondo. macOS te obliga a elegir un solo volumen para ambos — así puedes equilibrarlos.",
    date: "2026-03-20",
    readTime: "4 min de lectura",
    content: `
<p>Quieres escuchar dos fuentes de audio al mismo tiempo. Música mientras estás en una llamada. Un podcast mientras ves un tutorial. Ambiente de fondo mientras estudias. Dos cosas, dos volúmenes ideales diferentes. macOS te da un solo control para ambos.</p>

<p>Esta es la limitación fundamental de audio de macOS: cada app comparte un mismo volumen. No puedes decir "esta al 30%, aquella al 80%". Es todo al mismo nivel, o nada.</p>

<h2>Cuándo realmente necesitas dos fuentes de audio</h2>

<p>Esto no es un caso excepcional. Es cómo la mayoría de la gente usa su ordenador:</p>

<ul>
  <li><strong>Música + videollamada</strong> — lo más común. Música de fondo durante una reunión de Zoom, pero lo suficientemente baja para escuchar a los colegas.</li>
  <li><strong>Clase + material de referencia</strong> — un estudiante viendo una clase grabada mientras ocasionalmente ve un tutorial de YouTube para contexto.</li>
  <li><strong>Podcast + sonidos ambientales</strong> — escuchando un podcast mientras una app de ruido blanco o lluvia suena suavemente.</li>
  <li><strong>Dos pestañas del navegador</strong> — un video de formación en una pestaña y una demo en otra, a volúmenes diferentes.</li>
  <li><strong>Juego + chat de voz</strong> — audio del juego para inmersión, Discord para comunicación.</li>
</ul>

<p>En cada caso, una fuente es "principal" (más fuerte, más importante) y la otra es "secundaria" (más baja, de apoyo). La proporción ideal es diferente para cada combinación, y cambia a lo largo del día.</p>

<h2>La limitación de macOS</h2>

<p>macOS tiene un solo control de volumen. Pulsa la tecla de volumen y todo cambia por igual. Si ajustas el volumen para escuchar podcasts cómodamente, la app de sonidos de lluvia también está a ese nivel — o demasiado fuerte (distrae) o no la has ajustado en su propia app (si es que tiene un control de volumen).</p>

<p>Algunas apps tienen controles de volumen internos (Spotify, VLC), pero la mayoría no. E incluso cuando los tienen, cambiar entre apps para ajustar dos controles de volumen separados es torpe y lento.</p>

<h2>La solución: volumen por app en un solo panel</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> pone todas las apps en un panel de la barra de menús con controles de volumen independientes. Ambas fuentes de audio, lado a lado, cada una con su propio nivel. Ajusta una sin tocar la otra.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial mostrando dos fuentes de audio a diferentes niveles de volumen en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Ejemplos de configuración:</p>

<p><strong>Música + llamada de Zoom:</strong></p>
<ul>
  <li>Zoom: 100% | Spotify: 20%</li>
</ul>

<p><strong>Podcast + sonidos de lluvia:</strong></p>
<ul>
  <li>App de podcast: 70% | App de lluvia: 15%</li>
</ul>

<p><strong>Clase + tutorial de YouTube:</strong></p>
<ul>
  <li>Zoom (clase): 90% | Chrome (YouTube): 40%</li>
</ul>

<p>Cada combinación es un equilibrio diferente. Guarda las que uses regularmente como <strong>perfiles de volumen</strong> y cambia con un clic. El auto-ducking maneja automáticamente el escenario de música+llamada — cuando una llamada empieza, la música baja a tu nivel configurado sin que toques nada.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "watch-movies-mac-late-night-volume": {
    slug: "watch-movies-mac-late-night-volume",
    title: "Cómo ver películas en Mac sin despertar a todos",
    description:
      "Los diálogos son inaudibles, luego las explosiones hacen temblar las paredes. Así puedes controlar el audio de películas para ver de noche en Mac — sin perderte una palabra.",
    date: "2026-03-22",
    readTime: "5 min de lectura",
    content: `
<p>Es la 1 de la madrugada. Estás viendo una película en tu MacBook en la cama. Los personajes están susurrando — subes el volumen. Entonces empieza una persecución de coches y de repente todo tu apartamento puede escucharla. Te lanzas a la tecla de volumen. Este ciclo se repite durante dos horas.</p>

<p>El problema es el <strong>rango dinámico</strong> — la diferencia entre los momentos más silenciosos y más fuertes de una película. En un cine con un sistema de sonido potente, este rango crea una experiencia inmersiva. En un MacBook a medianoche, crea una lucha constante entre "no escucho los diálogos" y "despertando a los vecinos".</p>

<h2>Por qué las películas suenan más fuerte que la música o los podcasts</h2>

<p>La música normalmente se masteriza con un rango dinámico comprimido — la diferencia entre las partes más silenciosas y más fuertes es relativamente pequeña (quizás 10-15 dB). Los podcasts están aún más comprimidos. Las películas, especialmente las de acción, pueden tener un rango dinámico de <strong>30-40 dB</strong> — las partes silenciosas son un susurro y las partes fuertes están diseñadas para hacer vibrar los asientos del cine.</p>

<p>Cuando ajustas el volumen de tu MacBook para escuchar los diálogos, las escenas de acción son 100 veces más fuertes en términos de presión sonora. No hay un volumen del sistema cómodo que funcione para ambas cosas.</p>

<h2>Solución 1: Usa el modo nocturno del servicio de streaming</h2>

<p>Algunos servicios de streaming tienen una función de compresión de rango dinámico específicamente para esto:</p>
<ul>
  <li><strong>Netflix:</strong> Busca un interruptor "Reducir sonidos fuertes" en los ajustes de audio durante la reproducción</li>
  <li><strong>Apple TV+:</strong> Ajustes del Sistema → Accesibilidad → "Reducir sonidos fuertes"</li>
  <li><strong>Amazon Prime:</strong> "Dialog Boost" en títulos compatibles</li>
  <li><strong>Disney+:</strong> Sin función equivalente actualmente</li>
</ul>

<p>Estas funciones comprimen el rango dinámico para que las partes silenciosas sean más fuertes y las partes fuertes más suaves. El resultado es un audio más uniforme que funciona a volúmenes bajos.</p>

<h2>Solución 2: Usa auriculares</h2>

<p>Los auriculares resuelven la parte de "despertar a todos" — tu audio es privado. Pero no resuelven el problema del rango dinámico. El ciclo diálogo-explosión sigue ocurriendo, solo que en tus oídos. Aquí es donde el control de volumen por app ayuda: ajusta el volumen de tu app de streaming precisamente para escuchar con auriculares.</p>

<h2>Solución 3: Establece un volumen específico para tu app de streaming</h2>

<p>El verdadero problema para ver de noche es que tu app de streaming, los sonidos de notificación y cualquier otro audio están todos al mismo volumen del sistema. Un ping de Slack a las 2 de la madrugada al mismo volumen que los diálogos de tu película es un susto de infarto.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> te permite crear la configuración perfecta para ver de noche:</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Configuración nocturna de SoundDial para películas — app de streaming a volumen moderado, notificaciones silenciadas" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Perfil nocturno para películas</h3>
<ul>
  <li><strong>Netflix / Apple TV / Disney+ / navegador:</strong> 40-50% — nivel cómodo de diálogo sin escenas de acción ensordecedoras</li>
  <li><strong>Slack:</strong> silenciado — sin pings sorpresa</li>
  <li><strong>Mail:</strong> silenciado</li>
  <li><strong>iMessage:</strong> silenciado</li>
  <li><strong>Sonidos del sistema:</strong> silenciados</li>
</ul>

<p>Guarda esto como perfil "Noche". Cuando empieces una película nocturna, aplica el perfil con un clic. Todas las fuentes de notificación quedan silenciadas, y tu app de streaming está a un volumen controlado. Cuando termines, vuelve a tu perfil diurno.</p>

<p>Combina esto con la función "Reducir sonidos fuertes" del servicio de streaming para máximo efecto: el servicio comprime el rango dinámico, y SoundDial asegura que nada más en tu Mac emita un sonido.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "mac-volume-resets-after-sleep": {
    slug: "mac-volume-resets-after-sleep",
    title: "¿El volumen del Mac se reinicia después de suspenderse? Cómo mantener tus ajustes de audio",
    description:
      "Cada vez que tu Mac se despierta de la suspensión, el volumen está mal — se reinicia al máximo, cae a cero o cambia a la salida incorrecta. Aquí está el porqué y cómo solucionarlo.",
    date: "2026-03-25",
    readTime: "5 min de lectura",
    content: `
<p>Cierras la tapa de tu MacBook. La abres después. El volumen es diferente. Quizás está al máximo cuando lo tenías al 40%. Quizás cambió de auriculares a altavoces. Quizás está a cero. Estaba bien antes de suspenderse — ahora está mal.</p>

<p>El reinicio de volumen después de la suspensión es un error persistente de macOS que aparece en diversas formas en diferentes versiones de macOS. Esto es lo que lo causa y cómo lidiar con ello.</p>

<h2>Por qué ocurre</h2>

<h3>1. El dispositivo de salida de audio cambió durante la suspensión</h3>
<p>Si tenías auriculares Bluetooth conectados antes de la suspensión y se desconectan mientras el Mac está dormido (la batería se agotó, te alejaste), macOS cambia a los altavoces integrados al despertar. Como macOS recuerda el volumen por dispositivo, el volumen cambia a lo que sea que los altavoces tuvieran la última vez — que podría ser muy diferente del volumen de tus auriculares.</p>

<h3>2. Reinicio del demonio Core Audio</h3>
<p>El demonio de audio de macOS (coreaudiod) a veces se reinicia durante los ciclos de suspensión/activación. Cuando se reinicia, puede inicializarse con los niveles de volumen predeterminados en lugar de tus últimos ajustes. Este es un error del sistema que Apple ha corregido parcialmente en varias actualizaciones pero nunca ha eliminado completamente.</p>

<h3>3. Reconexión HDMI/DisplayPort</h3>
<p>Si usas un monitor externo vía HDMI o DisplayPort, cerrar y abrir la tapa puede hacer que el monitor se desconecte y reconecte. Algunos monitores también son dispositivos de salida de audio, y macOS puede cambiar hacia o desde los altavoces del monitor durante este proceso, cambiando el volumen en el proceso.</p>

<h3>4. Re-emparejamiento Bluetooth</h3>
<p>Cuando los dispositivos Bluetooth se reconectan después de la suspensión, la negociación de volumen puede resultar en un nivel diferente al que tenías antes. Esto es especialmente común con auriculares Bluetooth de terceros (menos con los AirPods, que Apple ha optimizado).</p>

<h2>Soluciones</h2>

<h3>Evitar la desconexión Bluetooth durante la suspensión</h3>
<p>Ajustes del Sistema → Bluetooth → Avanzado (o haz clic en "i" en tu dispositivo). Algunos ajustes controlan si el Bluetooth permanece activo durante la suspensión. Mantener la conexión activa evita el ciclo de desconexión/reconexión que reinicia el volumen.</p>

<h3>Desactivar el cambio automático de AirPods</h3>
<p>Ajustes del Sistema → Bluetooth → haz clic en "i" junto a los AirPods → "Conectar a este Mac" → establecer en "Cuando se conectó por última vez a este Mac". Esto evita que los AirPods se conecten automáticamente desde otro dispositivo durante la suspensión.</p>

<h3>Establecer un dispositivo de salida consistente</h3>
<p>Después de despertar de la suspensión, mantén Option y haz clic en el icono de Sonido en la barra de menús. Selecciona tu dispositivo de salida preferido. Haz esto consistentemente y macOS debería eventualmente "quedarse" con tu preferencia.</p>

<h3>Restablecer NVRAM (Macs Intel)</h3>
<p>Si los reinicios de volumen son crónicos, restablece la NVRAM: apaga → enciende manteniendo Option+Command+P+R durante 20 segundos. Esto borra los ajustes de audio almacenados y puede solucionar problemas persistentes de volumen.</p>

<h2>Protege tu balance de audio con SoundDial</h2>

<p>Incluso si el volumen del sistema se reinicia después de la suspensión, <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> protege tu balance de volumen <em>por app</em>. Su función de <strong>memoria de volumen</strong> guarda el volumen de cada app de forma independiente y lo restaura después de despertar, reiniciar o relanzar la app.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial preservando los niveles de volumen por app después de los ciclos de suspensión y activación del Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Así, incluso si macOS reinicia el volumen del sistema al 80% después de la suspensión, tu balance por app permanece intacto:</p>
<ul>
  <li>Spotify sigue al 30% del volumen del sistema</li>
  <li>Zoom sigue al 100%</li>
  <li>Slack sigue silenciado</li>
</ul>

<p>Podrías necesitar arreglar el volumen del sistema (un ajuste), pero no necesitas re-equilibrar todas tus apps (que serían seis o siete ajustes). Y con <strong>perfiles de volumen</strong>, incluso la recuperación completa es un clic.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "mac-audio-music-production-daw": {
    slug: "mac-audio-music-production-daw",
    title: "Audio en Mac para producción musical: controla el DAW y la comunicación por separado",
    description:
      "¿Usas Logic Pro o Ableton mientras estás en una llamada de Discord? Así puedes escuchar tu DAW a plena fidelidad mientras mantienes el chat de voz a un nivel cómodo.",
    date: "2026-03-28",
    readTime: "5 min de lectura",
    content: `
<p>Estás produciendo música en Logic Pro (o Ableton, o FL Studio). También estás en Discord con un colaborador. El problema: la salida de tu DAW y Discord están peleando por el mismo nivel de volumen. Si subes Logic para escuchar tu mezcla con claridad, Discord retumba en tus oídos. Si bajas para Discord, tu mezcla queda demasiado baja para evaluarla correctamente.</p>

<p>Este es un problema real para los productores de música en Mac porque el volumen de monitoreo afecta directamente las decisiones de mezcla. Si tu DAW está demasiado bajo porque Discord compite, mezclarás más fuerte de lo previsto. Si Discord ahoga los detalles, te perderás problemas en tu mezcla.</p>

<h2>Por qué esto importa para la producción</h2>

<p>La producción musical requiere <strong>niveles de monitoreo precisos</strong>. Necesitas escuchar tu DAW a un volumen consistente y calibrado para tomar decisiones de mezcla fiables. Las apps de comunicación, notificaciones y otras fuentes de audio interfieren con esto — pero a menudo necesitas tenerlas funcionando simultáneamente para la colaboración remota.</p>

<p>Los estudios profesionales resuelven esto con rutas de monitor separadas y sistemas de talkback. En un portátil, necesitas software.</p>

<h2>El enfoque interno del DAW</h2>

<p>Podrías usar el nivel de monitoreo interno de tu DAW para mantenerlo a una salida consistente, luego ajustar el volumen de Discord internamente. Pero:</p>
<ul>
  <li>El control de volumen de salida de Discord es impreciso y está limitado al 0-100%</li>
  <li>Aún no puedes evitar que los sonidos del sistema y las notificaciones interfieran a niveles inesperados</li>
  <li>Si necesitas referenciar una pista en Spotify o YouTube, esas también están al volumen del sistema</li>
</ul>

<h2>Volumen por app para producción</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> te permite establecer volúmenes exactos para cada app de forma independiente:</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial separando la salida del DAW de Discord y las pistas de referencia en macOS para producción musical" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Configuración de producción</h3>
<ul>
  <li><strong>Logic Pro / Ableton:</strong> 80-100% — tu nivel principal de monitoreo</li>
  <li><strong>Discord / chat de voz:</strong> 40-60% — audible pero claramente secundario a tu mezcla</li>
  <li><strong>Spotify / pistas de referencia:</strong> 80% — coincide con el nivel de tu DAW para comparaciones A/B precisas</li>
  <li><strong>Slack / notificaciones:</strong> silenciado — cero interferencia durante la producción</li>
  <li><strong>Safari / Chrome:</strong> 50% — para ver tutoriales sin reventarte los oídos</li>
</ul>

<h3>Guárdalo como perfil de "Producción"</h3>
<p>Guarda esta configuración y aplícala con un clic cuando te sientes a producir. Cuando termines y cambies a uso casual, aplica tu perfil "Normal". Sin reajustar ocho apps.</p>

<h3>Auto-ducking para sesiones remotas</h3>
<p>Si estás en una llamada con un colaborador, el auto-ducking de SoundDial puede bajar las apps que no son de comunicación cuando el micrófono está activo. Pero para producción, podrías querer <em>desactivar</em> el auto-ducking — necesitas tu DAW a niveles consistentes independientemente de si estás hablando. El interruptor es un clic en los ajustes.</p>

<h2>Una nota sobre la latencia</h2>

<p>SoundDial usa la API Core Audio Tap de Apple para el control de volumen. El procesamiento añade una latencia despreciable — imperceptible para fines de monitoreo. Si estás grabando y monitoreando a través de tu DAW con monitoreo directo activado, SoundDial no interfiere con la ruta de audio de tu DAW. Solo ajusta el nivel de salida que llega a tus altavoces/auriculares.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "apple-music-volume-too-low-mac": {
    slug: "apple-music-volume-too-low-mac",
    title: "¿Volumen de Apple Music demasiado bajo en Mac? Cómo solucionarlo y amplificarlo",
    description:
      "¿Apple Music al máximo volumen en tu Mac pero aún demasiado bajo? Verifica Sound Check, ajustes de EQ y aprende cómo amplificar Apple Music más allá del 100%.",
    date: "2026-03-30",
    readTime: "5 min de lectura",
    content: `
<p>Apple Music está a volumen máximo. Tu Mac está a volumen máximo. Una canción que sabes que debería sonar fuerte es apenas audible. Mientras tanto, al cambiar a Spotify — misma canción, mismo volumen — es notablemente más fuerte. ¿Qué está pasando?</p>

<p>Apple Music tiene varios ajustes que pueden reducir el volumen de reproducción, y no son obvios. Vamos a repasar cada uno.</p>

<h2>1. Verifica Sound Check</h2>

<p>Apple Music tiene una función llamada <strong>Sound Check</strong> que normaliza el volumen de todas las pistas para que se reproduzcan a un nivel de sonoridad percibida similar. Esto evita saltos de volumen bruscos entre canciones, pero lo hace <em>reduciendo</em> el volumen de las pistas más fuertes — haciendo todo más bajo en general.</p>

<p>Para verificar: Abre la app Música → Ajustes (⌘,) → Reproducción → <strong>Sound Check</strong>.</p>

<p>Si Sound Check está activado, prueba a desactivarlo. Las canciones que estaban siendo reducidas para coincidir con las pistas más bajas ahora se reproducirán a su nivel original de masterización — que a menudo es significativamente más fuerte.</p>

<h2>2. Verifica el ajuste de EQ</h2>

<p>Apple Music tiene un ecualizador integrado. Algunos presets de EQ reducen el volumen general para evitar el clipping al amplificar frecuencias específicas.</p>

<p>Verifica: App Música → Ajustes → Reproducción → <strong>EQ</strong>. Si hay un preset de EQ seleccionado (especialmente "Palabra hablada", "Nocturno" o "Altavoces pequeños"), prueba a establecerlo en "Desactivado" y comprueba si el volumen mejora.</p>

<p>El EQ "Nocturno" en particular comprime el rango dinámico — haciendo las partes bajas más fuertes pero las partes fuertes más suaves. Esto puede hacer que todo se sienta "más plano" y más bajo en volumen.</p>

<h2>3. Verifica los ajustes de Audio sin pérdida</h2>

<p>Si tienes activado Audio sin pérdida de Apple Music (Ajustes → Calidad de audio), la transmisión de mayor calidad puede tener un volumen percibido más bajo que la transmisión AAC estándar para algunas pistas. Esto se debe a que el formato sin pérdida no tiene los mismos ajustes de masterización que Apple aplica a las versiones AAC.</p>

<p>Prueba a cambiar temporalmente a calidad AAC para ver si la diferencia de volumen es notable.</p>

<h2>4. Seguridad de auriculares</h2>

<p>Ajustes del Sistema → Sonido → Seguridad de auriculares. Si "Reducir audio fuerte" está activado, macOS está limitando el volumen de tus auriculares globalmente — afectando a Apple Music junto con todo lo demás.</p>

<h2>5. Amplifica Apple Music más allá del 100%</h2>

<p>Si has verificado todo y Apple Music sigue demasiado bajo — ya sea porque Sound Check es agresivo, un álbum silencioso o los altavoces de tu MacBook simplemente no son lo suficientemente potentes — una amplificación de volumen por app lo resuelve.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> te permite amplificar Apple Music al <strong>200%</strong>. La señal de audio se amplifica a nivel del sistema antes de que llegue a tus altavoces o auriculares. Solo Apple Music se vuelve más fuerte — Zoom, Slack y tu navegador permanecen a sus niveles actuales.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial amplificando el volumen de Apple Music más allá del 100% en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Esto también es útil para el problema opuesto: si Apple Music es demasiado fuerte en relación a tu llamada de Zoom, baja Apple Music al 25% en SoundDial mientras mantienes Zoom al 100%. El control por app significa que nunca tienes que comprometer el volumen de una app por el de otra.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "free-volume-mixer-mac": {
    slug: "free-volume-mixer-mac",
    title: "Mezclador de volumen gratuito para Mac: lo que realmente obtienes (y lo que no)",
    description:
      "¿Buscas un mezclador de volumen por app gratuito para Mac? Aquí tienes un análisis honesto de lo que ofrecen las opciones gratuitas, lo que les falta y cuándo vale la pena pagar.",
    date: "2026-04-03",
    readTime: "6 min de lectura",
    content: `
<p>Si buscas "mezclador de volumen gratuito para Mac", encontrarás un resultado principal: <strong>Background Music</strong>. Es la única app gratuita y de código abierto notable para control de volumen por app en macOS. Veamos qué obtienes realmente — y a qué renuncias.</p>

<h2>Background Music: la opción gratuita</h2>

<p>Background Music es una app gratuita y de código abierto alojada en GitHub. Te ofrece:</p>

<ul>
  <li><strong>Controles de volumen por app</strong> — control básico de volumen para cada app en ejecución</li>
  <li><strong>Pausado automático de música</strong> — pausa tu reproductor de música cuando otra app reproduce audio, reanuda cuando se detiene</li>
  <li><strong>Ajuste del dispositivo de salida predeterminado</strong> — anula qué dispositivo usan las apps por defecto</li>
</ul>

<h3>Lo que Background Music no tiene</h3>
<ul>
  <li><strong>Sin amplificación de volumen más allá del 100%</strong> — los controles van del 0% al 100% solamente. No puede amplificar apps silenciosas.</li>
  <li><strong>Sin perfiles de volumen</strong> — no puede guardar y cambiar entre configuraciones</li>
  <li><strong>Sin auto-ducking</strong> — el pausado automático es diferente del auto-ducking. Pausar detiene la música por completo; el ducking la baja a un nivel cómodo de fondo. Muchas personas prefieren música de fondo suave durante las llamadas en lugar de silencio total.</li>
  <li><strong>Sin memoria de volumen</strong> — no recuerda los volúmenes por app entre reinicios</li>
  <li><strong>Sin atajos de teclado</strong> — sin tecla rápida para mostrar el mezclador o silenciar todas las apps</li>
  <li><strong>Sin cambio de dispositivo de salida</strong> — no puede cambiar altavoces/auriculares desde el mismo panel</li>
</ul>

<h3>El problema de fiabilidad</h3>
<p>El mayor problema de Background Music no son las funciones — es la estabilidad. Funciona instalando un <strong>controlador de dispositivo de audio virtual</strong>, y este controlador se rompe con las actualizaciones de macOS. Después de casi cada lanzamiento importante de macOS (Ventura, Sonoma, Sequoia, Tahoe), los usuarios reportan:</p>
<ul>
  <li>El dispositivo virtual no se instala</li>
  <li>Chasquidos y fallos de audio</li>
  <li>Apps no detectadas</li>
  <li>Sin salida de audio en absoluto</li>
  <li>Crashes de la app al iniciar</li>
</ul>

<p>Como es un proyecto de código abierto mantenido por voluntarios, las correcciones no siempre son oportunas. Podrías quedarte sin volumen por app durante semanas después de una actualización de macOS.</p>

<h2>Otras opciones "gratuitas"</h2>

<h3>eqMac (nivel gratuito)</h3>
<p>El nivel gratuito de eqMac proporciona un ecualizador a nivel de sistema pero no control de volumen por app. Las funciones por app requieren eqMac Pro (suscripción). La versión gratuita es útil si principalmente necesitas EQ, no mezcla de volumen.</p>

<h3>macOS integrado</h3>
<p>macOS no tiene un mezclador de volumen integrado. Lo más cercano es el control de volumen de alertas en Ajustes del Sistema → Sonido, que solo afecta los sonidos del sistema — no el audio de las apps.</p>

<h2>Cuándo lo gratuito es suficiente</h2>

<p>Background Music podría ser suficiente si:</p>
<ul>
  <li>Solo necesitas volumen básico por app (0-100%)</li>
  <li>No necesitas perfiles, auto-ducking o amplificación de volumen</li>
  <li>Te sientes cómodo arreglándolo cuando las actualizaciones de macOS lo rompan</li>
  <li>No te importa tener un dispositivo de audio virtual en tu cadena de audio</li>
</ul>

<h2>Cuándo vale la pena pagar</h2>

<p>Un mezclador de volumen de pago vale la pena si necesitas:</p>
<ul>
  <li><strong>Fiabilidad</strong> — funciona después de las actualizaciones de macOS sin esperar correcciones de voluntarios</li>
  <li><strong>Amplificación de volumen al 200%</strong> — amplifica apps silenciosas más allá de su máximo integrado</li>
  <li><strong>Perfiles</strong> — guarda configuraciones y cambia entre Reunión/Concentración/Gaming con un clic</li>
  <li><strong>Auto-ducking</strong> — reducción automática de volumen durante las llamadas, no solo pausado automático</li>
  <li><strong>Sin controladores del sistema</strong> — funciona con la API nativa de Apple, sin dispositivos de audio virtuales que puedan romperse</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> cuesta 14,99 € — una sola vez, no es suscripción. Para contextualizar, es menos de dos meses de suscripción a Spotify, por una herramienta que usarás todos los días. Es menos de la mitad del precio de SoundSource ($39), e incluye funciones (perfiles, auto-ducking) que SoundSource no tiene.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — mezclador de volumen por app fiable para Mac con perfiles, auto-ducking y amplificación al 200%" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Disponible en la <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — revisada por Apple, en sandbox, sin controladores del sistema. 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "balance-music-voice-chat-volume-mac": {
    slug: "balance-music-voice-chat-volume-mac",
    title: "Cómo equilibrar el volumen de la música y el chat de voz en Mac",
    description:
      "La música está demasiado fuerte sobre Discord. O la llamada está demasiado baja bajo Spotify. macOS no te permite equilibrarlos — aquí tienes cómo establecer la proporción perfecta.",
    date: "2026-04-05",
    readTime: "4 min de lectura",
    content: `
<p>Quieres escuchar música mientras hablas con amigos en Discord (o Zoom, o FaceTime). La música necesita estar presente pero no abrumadora. El chat de voz necesita ser claro y dominante. Petición sencilla. macOS la hace imposible.</p>

<p>Con un solo volumen del sistema controlando todo, estás atrapado: si lo subes para la llamada, la música queda demasiado fuerte. Si lo bajas para la música, no puedes escuchar a tus amigos. No hay forma integrada de establecer estas dos cosas a niveles diferentes.</p>

<h2>La solución con el volumen interno de la app</h2>

<p>Tanto Spotify como Discord tienen controles de volumen internos. En teoría, podrías bajar el control de Spotify al 30% y mantener la salida de Discord al 100%. Esto crea una proporción de 30/100.</p>

<p>En la práctica:</p>
<ul>
  <li>Tienes que cambiar a cada app para ajustar su control</li>
  <li>La proporción cambia cuando ajustas el volumen del sistema (ambas escalan proporcionalmente)</li>
  <li>No todas las apps tienen un control de volumen interno</li>
  <li>Es impreciso — control pequeño de Spotify, sin porcentaje mostrado</li>
  <li>Si cierras y reabres Spotify, el control podría reiniciarse</li>
</ul>

<h2>La verdadera solución: volumen independiente por app</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> pone tanto Spotify como Discord en el mismo panel con controles de volumen independientes. Establece la proporción que quieras y déjala:</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial equilibrando Spotify y Discord a diferentes niveles de volumen en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>La proporción perfecta para música + chat de voz</h3>
<p>Basado en cómo la mayoría usa esto:</p>
<ul>
  <li><strong>Chat de voz al 85-100%</strong> — siempre claramente audible, dominante en la mezcla</li>
  <li><strong>Música al 20-35%</strong> — presente pero sin competir nunca con las voces</li>
</ul>

<p>La proporción exacta depende de la música, tus auriculares y tu preferencia personal. El punto es que puedes encontrar el equilibrio perfecto una vez y mantenerlo — en lugar de ajustar constantemente.</p>

<h3>Guárdalo como perfil</h3>
<p>Guarda tu equilibrio de música/chat de voz como perfil. Perfil "Gaming": Discord 100%, juego 50%, Spotify 20%. Perfil "Relax": Discord 70%, Spotify 60%. Cambia entre ellos con un clic.</p>

<h3>Auto-ducking para llamadas</h3>
<p>Si estás escuchando música y entra una llamada, el auto-ducking de SoundDial reduce automáticamente la música a tu nivel configurado. Cuando la llamada termina, la música vuelve a subir. Sin tocar nada.</p>

<p>El problema del equilibrio de audio es algo que cada usuario de Mac enfrenta en el momento en que tiene música y una llamada funcionando simultáneamente. Es una solución única de 14,99 €.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "mac-volume-control-complete-guide": {
    slug: "mac-volume-control-complete-guide",
    title: "Control de volumen en Mac: la guía completa (2026)",
    description:
      "Todo lo que necesitas saber sobre el control de audio en macOS — desde atajos de teclado básicos hasta volumen por app, cambio de salida y automatización.",
    date: "2026-06-12",
    readTime: "12 min de lectura",
    content: `
<p>macOS te da un control de volumen y un botón de silencio. Esa es la extensión del control de audio integrado de Apple. Pero tu Mac en realidad tiene muchas más capacidades de audio de lo que aparenta — atajos de teclado ocultos, herramientas de volumen por app, gestión de dispositivos de salida y funciones de automatización que la mayoría de los usuarios nunca descubren.</p>

<p>Esta es la guía completa para controlar el audio en tu Mac. Desde lo básico hasta funciones de usuarios avanzados, todo en un solo lugar.</p>

<h2>Parte 1: Controles de volumen integrados</h2>

<h3>Las teclas de volumen</h3>
<p>Las teclas de subir volumen (F12), bajar volumen (F11) y silenciar (F10) ajustan el volumen del sistema en 16 pasos. Cada paso es aproximadamente el 6,25% del rango total. El volumen actual se muestra como un indicador en pantalla.</p>

<h3>Volumen de precisión: Option + Shift</h3>
<p>Mantén <strong>Option + Shift</strong> y pulsa subir/bajar volumen. Cada pulsación ajusta en un cuarto del paso normal — dándote <strong>64 niveles de volumen</strong> en lugar de 16. Esencial para encontrar el volumen perfecto de auriculares cuando los pasos normales son demasiado bruscos.</p>

<h3>Ajuste silencioso de volumen: Shift</h3>
<p>Mantén <strong>Shift</strong> y pulsa subir/bajar volumen. El volumen cambia sin el sonido de confirmación "pop". Úsalo cuando ajustes el volumen durante una llamada o presentación.</p>

<h3>Control de volumen en la barra de menús</h3>
<p>Si el icono de Sonido está en tu barra de menús (actívalo en Ajustes del Sistema → Centro de control → Sonido → Mostrar siempre en la barra de menús), al hacer clic se muestra un control de volumen. Este es un control continuo, no escalonado como las teclas del teclado, así que puedes establecer cualquier nivel preciso.</p>

<h3>Centro de control</h3>
<p>Haz clic en el icono del Centro de control (icono de dos interruptores) en la barra de menús → haz clic en la sección de Sonido para un control de volumen y acceso rápido a la selección del dispositivo de salida.</p>

<h2>Parte 2: Gestión de dispositivos de salida</h2>

<h3>Cambiar dispositivos de salida</h3>
<p>El método integrado más rápido: mantén <strong>Option</strong> y haz clic en el icono de Sonido en la barra de menús. Verás una lista de todos los dispositivos de salida y entrada disponibles. Haz clic en uno para cambiar instantáneamente.</p>

<p>Alternativamente: Ajustes del Sistema → Sonido → Salida. Selecciona tu dispositivo preferido de la lista.</p>

<h3>Gestión de dispositivos Bluetooth</h3>
<p>macOS recuerda el nivel de volumen de cada dispositivo de salida por separado. Cuando cambias de altavoces (al 70%) a AirPods (al 40%), el volumen se ajusta a lo que tenía la última vez que usaste ese dispositivo. Esto puede parecer que el volumen "cambia solo" si no lo esperas.</p>

<h3>Dispositivos agregados y de salida múltiple</h3>
<p>Para configuraciones avanzadas, abre Configuración de Audio MIDI (Aplicaciones → Utilidades) para crear dispositivos agregados (combinar varias entradas) o dispositivos de salida múltiple (enviar audio a varias salidas simultáneamente). Estos son principalmente útiles para configuraciones de audio profesional, no para uso diario.</p>

<h2>Parte 3: Volumen de alertas y notificaciones</h2>

<h3>Volumen de alertas del sistema</h3>
<p>macOS tiene un control de volumen de alertas separado: Ajustes del Sistema → Sonido → Volumen de alertas. Este controla el volumen de los sonidos del sistema (Funk, Tink, Bottle, etc.) independientemente del volumen principal. Sin embargo, solo afecta a las alertas del sistema de macOS — no a los sonidos de notificación de apps de terceros como Slack, Discord o Teams.</p>

<h3>Gestión de sonidos de notificación</h3>
<p>Ve a Ajustes del Sistema → Notificaciones. Para cada app, puedes activar o desactivar "Reproducir sonido para notificaciones". Esto es binario — no puedes hacer que las notificaciones de una app sean más bajas, solo completamente activadas o completamente desactivadas.</p>

<h3>Modos de concentración</h3>
<p>Los modos de concentración (Ajustes del Sistema → Concentración) suprimen notificaciones de apps seleccionadas. Pueden silenciar los sonidos de notificación, pero no afectan al volumen de medios. Tu música sigue reproduciéndose a volumen completo incluso en No molestar.</p>

<h2>Parte 4: Controles específicos para auriculares</h2>

<h3>Seguridad de auriculares</h3>
<p>Ajustes del Sistema → Sonido → Seguridad de auriculares. "Reducir audio fuerte" limita el volumen de los auriculares basándose en la exposición acumulada. Puedes desactivarlo o ajustar el umbral. Solo afecta a la salida de auriculares, no a los altavoces.</p>

<h3>Audio espacial</h3>
<p>Para auriculares compatibles (AirPods Pro, AirPods Max, algunos Beats), macOS soporta Audio Espacial con seguimiento de cabeza. Actívalo en Centro de control → Sonido → Audio Espacial. Esto afecta al posicionamiento percibido del sonido pero no al volumen.</p>

<h3>Balance de audio</h3>
<p>Ajustes del Sistema → Accesibilidad → Audio → Balance. Un control izquierda-derecha que ajusta el balance estéreo. Asegúrate de que esté centrado si un lado suena más bajo que el otro.</p>

<h2>Parte 5: Lo que macOS no puede hacer (y cómo solucionarlo)</h2>

<h3>Control de volumen por app</h3>
<p>macOS tiene un solo control de volumen para todas las apps. No hay forma integrada de poner Spotify al 30% y Zoom al 100%. Esta es la función de audio más solicitada en macOS, y Apple nunca la ha añadido.</p>

<h3>Amplificación de volumen más allá del 100%</h3>
<p>El volumen de macOS se limita al 100%. Si el contenido es demasiado bajo incluso al volumen máximo, no hay forma integrada de amplificar más.</p>

<h3>Perfiles de volumen</h3>
<p>No hay forma de guardar una configuración de volumen (Spotify al 30%, Zoom al 100%, Slack silenciado) y cambiar entre presets.</p>

<h3>Auto-ducking</h3>
<p>macOS no reduce automáticamente el audio de fondo cuando te unes a una llamada.</p>

<h3>Memoria de volumen por app</h3>
<p>macOS no recuerda los niveles de volumen por app porque el volumen por app no existe.</p>

<p>Las cinco están disponibles con <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> — una app nativa de macOS en la barra de menús que añade el mezclador de volumen que Apple nunca creó.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — control de volumen por app, perfiles, auto-ducking y amplificación al 200% para macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Parte 6: Volumen por app con SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> llena cada vacío listado arriba:</p>

<ul>
  <li><strong>Volumen por app:</strong> Cada app tiene su propio control, del 0% al 200%</li>
  <li><strong>Silencio por app:</strong> Un clic para silenciar cualquier app</li>
  <li><strong>Amplificación de volumen:</strong> Amplifica apps silenciosas más allá del 100%</li>
  <li><strong>Perfiles de volumen:</strong> Guarda configuraciones y cambia con un clic</li>
  <li><strong>Auto-ducking:</strong> El audio de fondo se reduce durante las llamadas y se restaura después</li>
  <li><strong>Memoria de volumen:</strong> El volumen de cada app se recuerda entre reinicios</li>
  <li><strong>Cambio de dispositivo de salida:</strong> Cambia altavoces/auriculares desde el mismo panel</li>
  <li><strong>Atajos de teclado:</strong> ⌃⌥S para mostrar el mezclador, ⌃⌥M para silenciar todo</li>
</ul>

<p>Usa la API moderna Core Audio Tap de Apple — sin controladores del sistema, sin dispositivos de audio virtuales, sin extensiones del kernel. Disponible en la <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> por 14,99 € (compra única, sin suscripción), revisada por Apple y en sandbox. macOS 14.2+.</p>
`,
  },
  "vlc-volume-too-low-mac": {
    slug: "vlc-volume-too-low-mac",
    title: "¿Volumen de VLC demasiado bajo en Mac? Cómo amplificarlo más allá del 200%",
    description:
      "¿VLC al máximo pero un video sigue siendo demasiado bajo? VLC tiene una amplificación integrada al 200% — además puedes ir aún más lejos con un mezclador de volumen por app.",
    date: "2026-04-08",
    readTime: "4 min de lectura",
    content: `
<p>Estás viendo un video en VLC. Los diálogos están bajos. Subes el volumen de VLC al máximo. Subes el volumen de tu Mac al máximo. Sigue sin escucharse bien. El video simplemente fue grabado demasiado bajo.</p>

<p>La buena noticia: VLC tiene una solución integrada que la mayoría no conoce. La mejor noticia: puedes combinarla con una amplificación a nivel del sistema para aún más volumen.</p>

<h2>Amplificación integrada de VLC (hasta el 200%)</h2>

<p>VLC puede superar el 100% de volumen por sí solo. El control de volumen en la barra del reproductor de VLC se limita al 100%, pero puedes aumentarlo más:</p>

<h3>Método 1: Rueda del ratón</h3>
<p>Pasa el ratón sobre el control de volumen de VLC y desplaza hacia arriba. El control superará la marca visible del 100%, hasta el 200%. Verás el porcentaje mostrado mientras desplazas.</p>

<h3>Método 2: Atajo de teclado</h3>
<p>Pulsa <strong>Command + Flecha arriba</strong> (⌘↑) repetidamente para aumentar el volumen por encima del 100%. Cada pulsación añade un paso. <strong>Command + Flecha abajo</strong> (⌘↓) para disminuir.</p>

<h3>Método 3: Menú de audio</h3>
<p>Ve a VLC → Audio → Aumentar volumen. Repite hasta que el volumen sea suficiente. El nivel actual se muestra en la parte inferior derecha del reproductor.</p>

<p>La amplificación al 200% de VLC funciona amplificando la señal de audio dentro del decodificador de VLC. A niveles extremos puede introducir distorsión, pero para archivos de video genuinamente bajos es muy efectiva.</p>

<h2>Más allá de la amplificación de VLC: amplificación a nivel del sistema</h2>

<p>Si VLC al 200% sigue sin ser suficiente — o si quieres amplificar VLC sin afectar sus ajustes internos de audio — un mezclador de volumen por app a nivel del sistema añade otra capa de amplificación.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> le da a VLC su propio control de volumen del 0% al 200% a nivel del sistema. Esto se acumula con la amplificación interna de VLC:</p>

<ul>
  <li>VLC interno: 200% × SoundDial: 200% = amplificación efectiva del 400%</li>
  <li>VLC interno: 150% × SoundDial: 150% = amplificación efectiva del 225%</li>
</ul>

<p>Esta es una amplificación extrema y introducirá distorsión en algún contenido, pero para material fuente extremadamente bajo podría ser lo que necesitas.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial amplificando el volumen de VLC a nivel del sistema en macOS para archivos de video silenciosos" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Más importante aún, SoundDial te permite amplificar VLC <strong>de forma independiente</strong>. Tu reproductor de música, navegador y apps de comunicación permanecen a sus niveles normales mientras solo VLC se amplifica. Si amplificas VLC al 180% en SoundDial, Spotify no cambia. Esto es algo que la amplificación integrada de VLC no puede hacer — la amplificación de VLC solo afecta a VLC, pero el volumen único del sistema de macOS sigue vinculando todo lo demás.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "disable-audio-ducking-mac": {
    slug: "disable-audio-ducking-mac",
    title: "Cómo desactivar el audio ducking en Mac (o controlarlo tú mismo)",
    description:
      "macOS o tus apps siguen bajando tu música durante las llamadas sin preguntar. Así puedes detener el audio ducking no deseado — o reemplazarlo con un ducking que realmente controles.",
    date: "2026-04-10",
    readTime: "5 min de lectura",
    content: `
<p>Te unes a una llamada de Zoom. Tu música baja a casi nada. No tocaste ningún control de volumen — algo lo hizo por ti. Esto es <strong>audio ducking</strong>: la reducción automática del audio de fondo cuando una llamada o fuente de audio importante está activa.</p>

<p>A algunas personas les encanta. Otras lo odian — especialmente cuando el ducking es demasiado agresivo (la música baja a cero en lugar de un nivel cómodo de fondo) o cuando se activa inesperadamente.</p>

<p>Aquí tienes cómo desactivar el ducking no deseado en Mac, y cómo reemplazarlo con un ducking que funcione como tú quieras.</p>

<h2>De dónde viene el audio ducking en Mac</h2>

<p>macOS en sí <strong>no</strong> tiene una función integrada de audio ducking. Si tu música se vuelve más baja durante las llamadas, alguna de estas causas está detrás:</p>

<h3>1. Procesamiento de audio de Zoom</h3>
<p>Zoom puede reducir el audio del sistema cuando se activa. Verifica Zoom → Ajustes → Audio y desactiva "Ajustar automáticamente el volumen del micrófono". También prueba a reducir la supresión de ruido de "Alto" a "Bajo".</p>

<h3>2. Cambio de códec Bluetooth</h3>
<p>Cuando una app activa el micrófono de tus auriculares Bluetooth, macOS cambia de AAC al códec SCO. Esto no es realmente "ducking" — es un cambio de códec que hace que todo suene más bajo y con menor calidad. Corrígelo usando un micrófono separado.</p>

<h3>3. Una app de terceros lo está haciendo</h3>
<p>Algunas apps de audio (como Background Music) tienen funciones de pausa automática o auto-ducking. Algunas apps multimedia reducen su propio volumen cuando detectan otra fuente de audio. Verifica las apps de utilidad de audio que tengas instaladas.</p>

<h3>4. Apps de comunicación ajustando el audio</h3>
<p>Discord, Teams y otras apps de comunicación tienen su propio procesamiento de audio que puede afectar al volumen percibido de otras apps. Verifica los ajustes de audio de cada app para opciones de "ajustar automáticamente" y desactívalas.</p>

<h2>Cómo detener el ducking no deseado</h2>

<ol>
  <li><strong>Verifica los ajustes de audio de Zoom/Teams/Discord</strong> — desactiva el ajuste automático de volumen/micrófono</li>
  <li><strong>Usa un micrófono separado para llamadas</strong> — evita el cambio de códec Bluetooth</li>
  <li><strong>Elimina utilidades de audio</strong> — Background Music, Soundflower o cualquier app que pueda estar interceptando el audio</li>
  <li><strong>Verifica la Accesibilidad de macOS</strong> — Ajustes del Sistema → Accesibilidad → Audio para ajustes inesperados</li>
</ol>

<h2>Reemplaza el mal ducking por un buen ducking</h2>

<p>La idea detrás del audio ducking es realmente buena — bajar automáticamente el audio de fondo durante las llamadas para que puedas escuchar con claridad. El problema es cuando es demasiado agresivo (la música baja a cero), no configurable (no puedes elegir cuánto bajar) o se activa por la causa incorrecta.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> tiene una función de auto-ducking integrada que te pone a ti al mando:</p>

<ul>
  <li><strong>Nivel de ducking configurable:</strong> Elige exactamente cuánto bajar el audio de fondo durante las llamadas — desde 10% (casi silencioso) hasta 80% (apenas reducido). El valor predeterminado es 30%, que mantiene la música audible pero no distrae.</li>
  <li><strong>Detección inteligente:</strong> Detecta las llamadas monitoreando el uso del micrófono — el mismo indicador que el punto naranja de macOS. Funciona con Zoom, Teams, FaceTime, Discord, Slack, Google Meet, Webex, Skype.</li>
  <li><strong>Restauración perfecta:</strong> Cuando la llamada termina, cada app vuelve exactamente a su volumen anterior. Sin reajustar nada.</li>
  <li><strong>Fácil de activar/desactivar:</strong> Activa o desactiva el auto-ducking en los ajustes de SoundDial. Cuando no lo quieras, desactívalo. Cuando lo quieras de vuelta, actívalo.</li>
</ul>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Auto-ducking configurable de SoundDial — controla exactamente cuánto se reduce el audio de fondo durante las llamadas" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>La diferencia: en lugar de que alguna app decida que tu música debe bajar a cero durante cada llamada, tú decides que baje al 25%. En lugar de perder el control, lo ganas. Y en lugar de intentar desactivar una función oculta en tres apps diferentes, tienes un interruptor en un solo lugar.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "bluetooth-headphones-too-quiet-mac": {
    slug: "bluetooth-headphones-too-quiet-mac",
    title: "¿Auriculares Bluetooth demasiado bajos en Mac? Todas las soluciones que funcionan",
    description:
      "Tus auriculares Bluetooth funcionan bien en el móvil pero suenan bajos en Mac. Aquí tienes cada causa — desde problemas de códec hasta límites de volumen de macOS — y cómo solucionar cada una.",
    date: "2026-04-12",
    readTime: "6 min de lectura",
    content: `
<p>Tus auriculares Bluetooth tienen volumen de sobra en tu teléfono. Los conectas a tu Mac — y todo es más bajo. La música suena apagada. Las llamadas cuestan escucharlas. Has puesto el volumen al máximo pero no es suficiente. ¿Qué pasa?</p>

<p>El audio Bluetooth en Mac tiene varios factores que reducen el volumen y que no existen en los teléfonos. Aquí tienes cada uno y cómo solucionarlo.</p>

<h2>1. La Seguridad de auriculares está limitando tu volumen</h2>

<p>macOS tiene una función integrada que limita el volumen de los auriculares para proteger tu audición. Mide la exposición al sonido a lo largo del tiempo y reduce el volumen máximo si cree que has estado escuchando demasiado fuerte.</p>

<p>Ve a <strong>Ajustes del Sistema → Sonido → Seguridad de auriculares</strong>. Si "Reducir audio fuerte" está activado, desactívalo o sube el umbral. Esta es la causa número uno de que los auriculares Bluetooth sean más bajos en Mac que en un teléfono.</p>

<h2>2. Incompatibilidad de códec Bluetooth</h2>

<p>Tu teléfono podría conectarse a tus auriculares usando un códec de mayor calidad (aptX, LDAC, AAC) mientras tu Mac usa SBC por defecto (el códec Bluetooth básico). Diferentes códecs tienen diferentes características de volumen máximo.</p>

<p>macOS generalmente usa AAC para dispositivos Apple y SBC para auriculares de terceros. Si tus auriculares soportan aptX o LDAC, macOS no los usará — Apple solo soporta AAC y SBC.</p>

<p><strong>Solución:</strong> No hay mucho que puedas hacer sobre la selección de códec en macOS. Pero saberlo explica por qué los mismos auriculares pueden sonar diferente (y potencialmente más bajos) en tu Mac comparado con un teléfono Android usando LDAC.</p>

<h2>3. La activación del micrófono activa SCO</h2>

<p>Cuando cualquier app activa el micrófono de tus auriculares Bluetooth (Zoom, FaceTime, Siri, dictado), macOS cambia de AAC al códec SCO. SCO fue diseñado para llamadas telefónicas en 2004 — suena terrible y es significativamente más bajo.</p>

<p><strong>Solución:</strong> Usa un micrófono separado (el micrófono integrado del Mac o un micrófono USB) y mantén tus auriculares Bluetooth solo como salida. En los ajustes de tu app de llamadas, establece la entrada como el micrófono del Mac y la salida como tus auriculares. Esto evita el cambio a SCO.</p>

<h2>4. Problema de sincronización de volumen Bluetooth</h2>

<p>El audio Bluetooth tiene dos controles de volumen: uno del lado del Mac y otro del lado de los auriculares. Se supone que deben estar sincronizados, pero pueden desincronizarse — el Mac muestra 100% pero los auriculares no están realmente al volumen máximo.</p>

<p><strong>Solución:</strong> Desconecta los auriculares (Ajustes del Sistema → Bluetooth → haz clic en "i" → Desconectar), espera 5 segundos, reconecta. Esto resincroniza el volumen. Algunos auriculares también tienen sus propios botones de volumen — asegúrate de que esos también estén al máximo.</p>

<h2>5. Conexión Bluetooth de baja calidad</h2>

<p>La distancia, las interferencias (routers WiFi, dispositivos USB 3.0) y los obstáculos entre tu Mac y los auriculares pueden reducir la calidad de la señal Bluetooth. Cuando la señal es débil, macOS puede reducir la tasa de bits del audio, lo que puede afectar al volumen y calidad percibidos.</p>

<p><strong>Solución:</strong> Acércate a tu Mac. Desconecta otros dispositivos Bluetooth que no estés usando. Aleja los hubs USB 3.0 de tu Mac (USB 3.0 genera interferencias en la banda de 2,4 GHz que usa Bluetooth).</p>

<h2>6. Los propios auriculares</h2>

<p>Algunos auriculares Bluetooth tienen un volumen máximo más bajo que otros. Los auriculares supraaurales con drivers más grandes generalmente alcanzan mayor volumen que los auriculares intraurales. Los auriculares con cancelación de ruido pueden tener límites de volumen integrados en su firmware.</p>

<p>Verifica la app del fabricante de los auriculares (Sony Headphones Connect, Bose Music, Sennheiser Smart Control, etc.) para ajustes de limitación de volumen. Algunos auriculares tienen un modo de "escucha segura" que limita el volumen.</p>

<h2>¿Sigue bajo? Amplifica más allá del 100%</h2>

<p>Si has verificado todo lo anterior y tus auriculares siguen siendo demasiado bajos en Mac, necesitas amplificación de volumen.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> amplifica el volumen de cualquier app hasta el <strong>200%</strong>. Si Spotify a través de tus auriculares Bluetooth es demasiado bajo, arrastra su control al 160%. La señal de audio se amplifica antes de llegar a tus auriculares, duplicando efectivamente el volumen disponible para esa app.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial amplificando el volumen de apps para auriculares Bluetooth en Mac con controles por app al 200%" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>La amplificación por app es mejor que una amplificación de volumen general porque puedes amplificar solo la app que está baja. Si tu podcast es bajo pero la música está bien, amplifica la app de podcast al 170% mientras mantienes Spotify al 80%. Cada app se queda al nivel correcto.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "mac-audio-obs-streaming-setup": {
    slug: "mac-audio-obs-streaming-setup",
    title: "Audio en Mac para OBS y streaming: cómo controlar lo que escucha tu audiencia",
    description:
      "¿Haciendo streaming en Mac con OBS? Tus espectadores escuchan todo al mismo volumen — juego, música, alertas, Discord. Así puedes equilibrar las fuentes de audio correctamente.",
    date: "2026-04-15",
    readTime: "7 min de lectura",
    content: `
<p>Estás haciendo streaming en tu Mac con OBS. El audio de tu juego retumba. Tu llamada de Discord está funcionando. Spotify reproduce música de fondo. Suenan alertas cuando alguien se suscribe. Tus espectadores escuchan todo esto al mismo volumen — un caos donde las callouts de Discord compiten con explosiones y la música ahoga tu comentario.</p>

<p>El problema central: macOS te da una salida de audio, y OBS la captura como una sola transmisión combinada. No puedes decirle a OBS "captura el juego al 40%, Discord al 80% y Spotify al 20%" porque macOS no los separa.</p>

<h2>El problema del audio para streaming en Mac</h2>

<p>En Windows, OBS puede capturar audio de aplicaciones individuales nativamente. Añades cada app como fuente de audio separada y las mezclas independientemente dentro de OBS. En Mac, esto no está integrado. OBS en macOS puede capturar:</p>

<ul>
  <li><strong>Audio del escritorio</strong> — todo lo que se reproduce en tu Mac, combinado en una sola transmisión</li>
  <li><strong>Micrófono/Auxiliar</strong> — la entrada de tu micrófono</li>
  <li><strong>Captura de audio de aplicación (macOS 13+)</strong> — captura el audio de una app específica, pero la configuración es manual y limitada</li>
</ul>

<p>La fuente de Captura de Audio de Aplicación (añadida en OBS 30+) funciona para aislar una app, pero gestionar cinco fuentes de audio con niveles separados dentro de OBS es complejo y no todas las apps cooperan.</p>

<h2>El enfoque más simple: controlar los niveles antes de que OBS los capture</h2>

<p>En lugar de intentar separar el audio dentro de OBS, controla el volumen de cada app <em>antes</em> de que llegue a la captura de audio del escritorio de OBS. Si bajas Spotify al 20% y subes Discord al 90% a nivel del sistema, la captura de audio del escritorio de OBS recoge la mezcla ya equilibrada.</p>

<p>Esto es exactamente lo que hace <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>. Ajusta cada app al nivel que quieras que escuchen tus espectadores:</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial equilibrando los niveles de audio del juego, Discord y música para streaming con OBS en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Configuración típica de audio para streaming</h3>
<ul>
  <li><strong>Juego:</strong> 50% — presente pero sin ahogar tu voz</li>
  <li><strong>Discord / chat de voz:</strong> 80% — callouts claros de tu equipo</li>
  <li><strong>Spotify / música:</strong> 15% — ambiente sutil de fondo</li>
  <li><strong>Alertas del stream (navegador):</strong> 40% — audibles pero no estridentes</li>
  <li><strong>Slack / notificaciones:</strong> silenciado — los espectadores no necesitan escuchar tus DMs</li>
</ul>

<h3>Guárdalo como perfil de "Streaming"</h3>
<p>Guarda esta configuración como un perfil de volumen en SoundDial. Antes de empezar a emitir, aplica el perfil "Streaming" con un clic. Cada app salta a su nivel optimizado para streaming. Cuando termines de emitir, vuelve a tu perfil "Normal" o "Gaming".</p>

<h2>Lo que tú escuchas vs. lo que escuchan los espectadores</h2>

<p>Con SoundDial ajustando el volumen por app a nivel del sistema, tanto tú como tus espectadores escuchan la misma mezcla equilibrada. Esto es más simple que intentar mantener mezclas separadas (una para ti, otra para el stream) — lo cual requiere dispositivos de audio virtuales y rutas complejas que son frágiles en Mac.</p>

<p>Si necesitas una mezcla completamente separada para tu stream versus tus auriculares (por ejemplo, quieres escuchar Discord más fuerte de lo que lo escuchan tus espectadores), necesitarás una configuración de rutas más compleja con dispositivos de audio virtuales. Pero para la mayoría de los streamers, una sola mezcla bien equilibrada — controlada fácilmente desde la barra de menús — es exactamente lo que se necesita.</p>

<h2>Por qué el control por app supera a la mezcla solo con OBS</h2>

<ul>
  <li><strong>Ajustes instantáneos:</strong> A mitad de stream, un espectador dice que el juego está demasiado fuerte. Haz clic en la barra de menús, arrastra un control. Listo. Sin pausar, sin abrir ajustes de OBS.</li>
  <li><strong>Funciona fuera de OBS:</strong> Tu configuración de audio equilibrada funciona incluso cuando no estás haciendo streaming. Mismos perfiles, misma comodidad.</li>
  <li><strong>Sin dispositivos de audio virtuales:</strong> SoundDial usa la API nativa Audio Tap de Apple — sin Soundflower, sin BlackHole, sin controladores que se rompan en actualizaciones de macOS.</li>
</ul>

<p>Disponible en la <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — revisada por Apple, 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "make-mac-remember-volume-per-app": {
    slug: "make-mac-remember-volume-per-app",
    title: "Cómo hacer que tu Mac recuerde el volumen por app",
    description:
      "Cada vez que reinicias Spotify o relanzas Zoom, tienes que reajustar el volumen. Así puedes hacer que macOS recuerde el nivel de volumen de cada app automáticamente.",
    date: "2026-04-18",
    readTime: "4 min de lectura",
    content: `
<p>Pasas cinco minutos ajustando perfectamente tus niveles de audio. Spotify al 30%, Zoom al 100%, Slack al 15%. Entonces reinicias tu Mac. O Slack se cierra inesperadamente y se relanza. O cierras Spotify y lo reabres después. Cada app se reinicia a su volumen predeterminado. Reajustas todo. Otra vez.</p>

<p>macOS recuerda el volumen del sistema entre reinicios. Pero no recuerda el volumen por app — porque macOS no tiene control de volumen por app en primer lugar. No hay nada que recordar.</p>

<h2>Por qué las apps no recuerdan su propio volumen</h2>

<p>Algunas apps (como Spotify y VLC) tienen controles de volumen internos que se guardan entre sesiones. Pero la mayoría de las apps — navegadores, herramientas de comunicación, utilidades del sistema — no tienen sus propios controles de volumen. E incluso las apps que guardan el volumen interno solo recuerdan la posición de su propio control, no su volumen relativo a otras apps.</p>

<p>Lo que realmente quieres es que el <em>sistema</em> recuerde: "Spotify debería estar al 30% del volumen del sistema, siempre". macOS no soporta este concepto.</p>

<h2>Memoria de volumen con SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> tiene una función de <strong>Memoria de volumen</strong>. Cuando está activada, guarda el nivel de volumen de cada app por su identificador de paquete. Cuando la app se cierra y se relanza — ya sea que la reinicies, se cierre inesperadamente o reinicies tu Mac — SoundDial la restaura automáticamente a su volumen guardado.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Memoria de volumen de SoundDial — recuerda y restaura automáticamente los niveles de volumen por app en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Cómo funciona</h3>
<ol>
  <li>Activa "Recordar volumen por app" en los ajustes de SoundDial</li>
  <li>Establece cada app a tu volumen preferido</li>
  <li>SoundDial guarda el nivel automáticamente</li>
  <li>Cuando la app se relanza, el volumen se restaura exactamente donde estaba</li>
</ol>

<p>Sin guardado manual. Sin reajustes. La primera vez que estableces tus volúmenes es la última.</p>

<h3>Qué se recuerda</h3>
<ul>
  <li><strong>Nivel de volumen</strong> — el porcentaje exacto (0% al 200%)</li>
  <li><strong>Estado de silencio</strong> — si silenciaste una app, permanece silenciada cuando se relanza</li>
  <li><strong>Por app</strong> — el volumen de cada app se almacena independientemente por ID de paquete</li>
</ul>

<h3>Las apps nuevas obtienen un volumen predeterminado</h3>
<p>Cuando una app se inicia por primera vez (una que SoundDial no ha visto antes), obtiene un volumen predeterminado configurable. Puedes establecer este valor en los ajustes de SoundDial — para que las apps nuevas empiecen al 80% (o lo que prefieras) en lugar de potencialmente retumbar al 100%.</p>

<h2>Memoria de volumen + perfiles = configúralo y olvídate</h2>

<p>La memoria de volumen maneja el día a día: las apps mantienen sus niveles entre reinicios. Los perfiles manejan el cambio situacional: modo "Reunión", modo "Concentración", modo "Gaming" — aplica con un clic y cada app salta al nivel correcto para esa situación.</p>

<p>Juntos, casi nunca necesitas ajustar un control de volumen manualmente. La app recuerda su último nivel, y cuando cambias de contexto, un perfil establece todo a la vez.</p>

<p>Disponible en la <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — revisada por Apple, 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "podcast-volume-too-low-mac": {
    slug: "podcast-volume-too-low-mac",
    title: "¿Volumen de podcasts demasiado bajo en Mac? Cómo hacerlo más fuerte",
    description:
      "Algunos podcasts son casi inaudibles en Mac incluso al volumen máximo. Aquí está el porqué — y cómo amplificar el audio del podcast más allá del 100% sin afectar otras apps.",
    date: "2026-04-20",
    readTime: "5 min de lectura",
    content: `
<p>Estás escuchando un podcast en tu Mac. El presentador suena bien, pero el invitado — grabando desde un micrófono de portátil en su cocina — es apenas audible. Subes el volumen al 100%. El presentador ahora está demasiado fuerte, pero el invitado sigue bajo. No hay forma de ganar porque el problema está en la grabación, no en tu Mac.</p>

<p>La calidad de audio de los podcasts varía enormemente. Los programas profesionales se masterizan a niveles consistentes. Pero las entrevistas, los podcasts independientes y las grabaciones en directo a menudo tienen invitados a -20 dB o menos — significativamente más bajos que el presentador o la música de introducción.</p>

<h2>Por qué algunos podcasts son tan bajos</h2>

<ul>
  <li><strong>Calidad del micrófono del invitado:</strong> Un presentador tiene una configuración profesional, el invitado está con AirPods. La diferencia de nivel puede ser de 15+ dB.</li>
  <li><strong>Sin postproducción:</strong> Los podcasts producidos profesionalmente comprimen y normalizan los niveles. Muchos no lo hacen.</li>
  <li><strong>Las apps de podcast no normalizan:</strong> Apple Podcasts y Spotify aplican una normalización de sonoridad mínima o nula al contenido de podcasts (a diferencia de la música).</li>
  <li><strong>Rango dinámico:</strong> Algunos productores de podcasts mantienen intencionalmente un alto rango dinámico para un sonido "natural" — lo que significa que las partes silenciosas son muy silenciosas.</li>
</ul>

<h2>Soluciones dentro de las apps</h2>

<h3>Apple Podcasts</h3>
<p>Apple Podcasts no tiene función de normalización de volumen ni amplificación. Lo que el podcast entrega es lo que recibes. El control de volumen interno en versiones anteriores fue eliminado — ahora solo usa el volumen del sistema.</p>

<h3>Spotify</h3>
<p>El ajuste "Normalizar volumen" de Spotify (Ajustes → Reproducción) puede ayudar con la consistencia de volumen entre diferentes podcasts, pero su efecto en las dinámicas dentro del episodio es limitado. Prueba a establecerlo en "Alto" para máxima normalización.</p>

<h3>Overcast (navegador)</h3>
<p>Si usas Overcast (vía web en overcast.fm), tiene una función "Voice Boost" que amplifica y comprime significativamente el audio del podcast, haciendo las voces silenciosas más fuertes. Esta es una de las mejores soluciones integradas — pero solo funciona dentro de Overcast.</p>

<h2>Solución a nivel del sistema: amplifica apps de podcast más allá del 100%</h2>

<p>La solución universal es amplificar tu app de podcast más allá del límite del 100% de macOS. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> le da a cada app un control de volumen hasta el <strong>200%</strong>.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial amplificando el volumen de Apple Podcasts al 180% en Mac para episodios de podcast silenciosos" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Establece Apple Podcasts o tu app de podcast al 160-180% mientras mantienes Spotify música al 40% y Slack al 15%. El podcast suena más fuerte sin hacer todo lo demás dolorosamente fuerte. Cuando vuelvas a la música, simplemente baja la app de podcast a lo normal — o deja que la memoria de volumen de SoundDial lo recuerde automáticamente.</p>

<p>Este enfoque por app es mejor que una amplificación de volumen general porque:</p>
<ul>
  <li>Solo la app de podcast silenciosa se amplifica</li>
  <li>La música se queda a tu nivel preferido</li>
  <li>El audio de llamada se queda a tu nivel preferido</li>
  <li>Los sonidos de notificación no se vuelven ensordecedores de repente</li>
</ul>

<p>Disponible en la <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — revisada por Apple, 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "mac-audio-online-classes-lectures": {
    slug: "mac-audio-online-classes-lectures",
    title: "Configuración de audio en Mac para clases y conferencias online",
    description:
      "Viendo una clase mientras tomas notas, buscas referencias en Google y chateas con compañeros — todo a diferentes volúmenes. Así puedes gestionar el audio de estudiante en Mac.",
    date: "2026-04-22",
    readTime: "5 min de lectura",
    content: `
<p>Eres estudiante asistiendo a una clase online por Zoom. Tienes un tutorial de YouTube abierto en otra pestaña para referencia. Tus compañeros están chateando en Discord. Spotify reproduce beats de lo-fi de fondo. Tu Mac trata todo esto como un solo volumen. Si bajas el lo-fi no puedes escuchar al profesor. Si subes la clase, los pings de Discord destrozan tu concentración.</p>

<p>macOS tiene un solo control de volumen para todo. Para estudiantes haciendo malabares con múltiples fuentes de audio, esto es un punto de fricción constante.</p>

<h2>El stack de audio típico del estudiante</h2>

<ul>
  <li><strong>Plataforma de clase</strong> (Zoom, Teams, Google Meet, Webex) — necesita ser cristalina, siempre audible</li>
  <li><strong>Material de referencia</strong> (tutoriales de YouTube, clases grabadas) — volumen moderado, necesita poder pausarse/ajustarse</li>
  <li><strong>Música de estudio</strong> (Spotify, Apple Music) — nivel bajo de fondo, no debe competir con la clase</li>
  <li><strong>Chat</strong> (Discord, iMessage, Slack) — sonidos de notificación sutiles, no disruptivos</li>
  <li><strong>Pestañas del navegador</strong> — contenido de reproducción automática ocasional que necesita silenciarse al instante</li>
</ul>

<h2>La limitación de macOS</h2>

<p>Con un solo volumen del sistema, estás obligado a hacer concesiones. Si lo pones lo suficientemente alto para el micrófono silencioso de un profesor, Spotify es demasiado fuerte. Si lo ajustas para música cómoda, la clase es inaudible. Si silencias Spotify pierdes el beneficio de concentración de la música de fondo. No hay un equilibrio cómodo porque cada app está bloqueada al mismo nivel.</p>

<h2>Configurar audio por app para estudiar</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> le da a cada app su propio control de volumen, para que puedas crear la configuración ideal de audio para estudiar:</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Configuración de estudiante de SoundDial — clase a volumen completo, música de estudio baja, notificaciones silenciadas" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Perfil de clase</h3>
<ul>
  <li><strong>Zoom / Teams / Meet:</strong> 100% — no perderte ni una palabra</li>
  <li><strong>Spotify:</strong> 15% — ambiente de fondo apenas perceptible</li>
  <li><strong>Discord:</strong> 10% — solo notificaciones sutiles</li>
  <li><strong>Navegador:</strong> 40% — para videos de referencia cuando sea necesario</li>
  <li><strong>iMessage:</strong> silenciado — revísalo entre clases</li>
</ul>

<h3>Perfil de autoestudio</h3>
<ul>
  <li><strong>Spotify:</strong> 50% — música de estudio motivadora</li>
  <li><strong>Navegador:</strong> 70% — videos tutoriales a un nivel claro</li>
  <li><strong>Discord:</strong> 20% — disponible para grupo de estudio</li>
  <li><strong>Todo lo demás:</strong> silenciado</li>
</ul>

<h3>Perfil de descanso</h3>
<ul>
  <li><strong>Todo:</strong> 60-80% — relájate entre clases</li>
</ul>

<p>Guarda cada uno como perfil de volumen y cambia entre ellos con un clic según avanza tu día. Cuando empiece una clase, aplica "Clase" — el auto-ducking se encargará del resto, bajando automáticamente tu música cuando el profesor hable a través de tu micrófono.</p>

<h2>Por qué esto importa para la concentración</h2>

<p>Los estudios muestran consistentemente que tener el entorno de audio adecuado mejora la concentración y la retención. La mezcla incorrecta — música demasiado fuerte, notificaciones demasiado frecuentes, clase demasiado baja — crea carga cognitiva que no tiene nada que ver con el material que estás estudiando. Configurar el audio bien una vez, guardarlo como perfil y no pensar en ello nunca más elimina una fuente constante de distracción.</p>

<p>Disponible en la <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — revisada por Apple, 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "mac-sound-not-working-after-update": {
    slug: "mac-sound-not-working-after-update",
    title: "¿El sonido del Mac no funciona después de una actualización? Guía completa de solución",
    description:
      "Actualizaste macOS y ahora tu sonido no funciona, crepita o está atascado en el volumen incorrecto. Aquí tienes todas las soluciones para que tu audio del Mac vuelva a funcionar.",
    date: "2026-04-25",
    readTime: "7 min de lectura",
    content: `
<p>Actualizaste macOS. Todo parecía bien — hasta que notaste que no hay sonido. O el sonido crepita. O el volumen está atascado. O tu dispositivo de salida de audio desapareció. Los problemas de audio post-actualización ocurren con casi cada lanzamiento de macOS, y van desde levemente molestos hasta completamente silenciosos.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<p>Aquí tienes una guía sistemática para arreglar el audio del Mac después de una actualización de macOS, cubriendo cada problema y solución conocidos.</p>

<h2>Paso 1: Verifica lo obvio</h2>

<h3>¿Está silenciado?</h3>
<p>Pulsa la tecla de subir volumen. Comprueba si el indicador de volumen aparece en pantalla. A veces las actualizaciones reinician el volumen del sistema a cero o activan el silencio.</p>

<h3>¿Está el dispositivo de salida correcto seleccionado?</h3>
<p>Ve a Ajustes del Sistema → Sonido → Salida. Después de una actualización, macOS a veces cambia a un dispositivo de salida inesperado — los altavoces de un monitor conectado, un dispositivo Bluetooth que no está conectado o los altavoces integrados cuando quieres los externos. Selecciona el dispositivo correcto.</p>

<h3>¿Está la Seguridad de auriculares limitando el volumen?</h3>
<p>Las actualizaciones a veces reinician la Seguridad de auriculares a su valor predeterminado (activada). Verifica Ajustes del Sistema → Sonido → Seguridad de auriculares y desactiva "Reducir audio fuerte" si fue activada por la actualización.</p>

<h2>Paso 2: Reinicia Core Audio</h2>

<p>El demonio de audio (coreaudiod) a menudo queda en mal estado después de una actualización. Reiniciarlo es la solución individual más efectiva.</p>

<p>Abre Terminal y ejecuta:</p>
<p><code>sudo killall coreaudiod</code></p>

<p>El audio se cortará brevemente y se reiniciará. Comprueba si el sonido funciona ahora. Si esto lo soluciona, el problema era un estado obsoleto del demonio de audio — común después de las actualizaciones.</p>

<h2>Paso 3: Restablece NVRAM/PRAM</h2>

<p>Para Macs Intel: apaga completamente, luego enciende manteniendo <strong>Option + Command + P + R</strong> durante unos 20 segundos. Esto restablece la NVRAM, que almacena ajustes de volumen, selección de disco de inicio y otras preferencias de bajo nivel.</p>

<p>Para Macs con Apple Silicon (M1/M2/M3/M4): la NVRAM se restablece automáticamente cuando es necesario. Un reinicio completo (no solo suspensión/activación) es generalmente suficiente.</p>

<h2>Paso 4: Comprueba conflictos con controladores de audio de terceros</h2>

<p>Las actualizaciones de macOS frecuentemente rompen controladores de audio de terceros y extensiones del kernel. Si tienes alguno de estos instalados, podrían estar causando el problema:</p>

<ul>
  <li><strong>Soundflower</strong> — descontinuado, a menudo entra en conflicto con macOS más recientes</li>
  <li><strong>BlackHole</strong> — dispositivo de audio virtual, puede necesitar actualización después de actualizaciones de macOS</li>
  <li><strong>Loopback</strong> — puede necesitar una nueva versión para el macOS actualizado</li>
  <li><strong>Background Music</strong> — instala un dispositivo de audio virtual que se rompe frecuentemente con las actualizaciones</li>
  <li><strong>Controladores de interfaces de audio</strong> — Focusrite, Universal Audio, etc. comprueba si hay controladores actualizados</li>
</ul>

<p><strong>Solución:</strong> Elimina o actualiza el software en conflicto. Para dispositivos de audio virtuales, comprueba si el dispositivo de audio instalado por la app aparece en Ajustes del Sistema → Sonido → Salida — si lo hace y está seleccionado, cambia a tus altavoces reales. Luego actualiza o desinstala la app de terceros.</p>

<h2>Paso 5: Arranque en Modo Seguro</h2>

<p>Arranca en Modo Seguro para determinar si el problema está causado por un elemento de inicio o extensión de terceros:</p>

<ul>
  <li><strong>Apple Silicon:</strong> Apaga → mantén presionado el botón de encendido hasta que aparezca "Cargando opciones de inicio" → selecciona tu disco de inicio → mantén Shift → haz clic en "Continuar en Modo Seguro"</li>
  <li><strong>Intel:</strong> Reinicia → mantén Shift durante el arranque hasta que veas la ventana de inicio de sesión</li>
</ul>

<p>Si el audio funciona en Modo Seguro, una extensión del kernel de terceros o un elemento de inicio es la causa. Investiga el software recientemente instalado.</p>

<h2>Paso 6: Crea una nueva cuenta de usuario</h2>

<p>Si el problema persiste, crea una cuenta de usuario temporal nueva (Ajustes del Sistema → Usuarios y Grupos → Añadir usuario). Inicia sesión en la nueva cuenta y prueba el audio. Si el sonido funciona en la nueva cuenta, el problema está en tu perfil de usuario — un archivo de preferencias corrupto o una configuración de audio.</p>

<h2>Previniendo problemas futuros con SoundDial</h2>

<p>Una ventaja de <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> sobre otras herramientas de audio: no instala un controlador de audio del sistema. Usa la API nativa Core Audio Tap de Apple, lo que significa que funciona limpiamente con las actualizaciones de macOS sin los conflictos que aquejan a las apps de dispositivos de audio virtuales.</p>

<p>Si has estado usando Background Music o Soundflower y se rompieron después de una actualización, SoundDial es un reemplazo que no tendrá el mismo problema. Control de volumen por app, amplificación al 200%, perfiles, auto-ducking — todo sin extensión del kernel ni dispositivo de audio virtual.</p>

<p>Disponible en la <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — revisada por Apple, 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "mute-all-apps-keyboard-shortcut-mac": {
    slug: "mute-all-apps-keyboard-shortcut-mac",
    title: "Cómo silenciar todas las apps a la vez en Mac (y restaurarlas perfectamente)",
    description:
      "¿Necesitas silencio instantáneo? La tecla de silencio silencia todo — pero al restaurar el sonido se pierden tus volúmenes cuidadosamente equilibrados. Aquí tienes una forma mejor de silenciar y restaurar en Mac.",
    date: "2026-04-28",
    readTime: "4 min de lectura",
    content: `
<p>Alguien entra en la habitación. Tu jefe llama inesperadamente. Un cliente comparte su pantalla en una llamada y tu música empieza a sonar a través de sus altavoces. Necesitas silencio instantáneo. Ahora mismo.</p>

<p>Pulsas la tecla de silencio. Todo queda en silencio. Crisis resuelta.</p>

<p>Entonces el momento pasa. Pulsas la tecla de silencio de nuevo. Todo vuelve — pero al nivel de volumen del sistema, que no recuerda que Spotify estaba al 30%, Zoom al 100% y Slack al 15%. ¿Esos niveles individuales? Perdidos. Tienes que reajustar todo manualmente.</p>

<h2>La tecla de silencio del sistema: instrumento tosco</h2>

<p>La tecla de silencio del Mac (F10 o la tecla del altavoz con barra) silencia la <strong>salida de audio del sistema</strong>. Todas las apps se silencian simultáneamente. Al quitar el silencio se restaura el volumen del sistema a donde estaba — pero como macOS solo tiene un control de volumen, no hay niveles por app que recordar o restaurar.</p>

<p>Esto está bien si solo usas una app a la vez. Es un problema si tienes seis apps cuidadosamente equilibradas a diferentes niveles y necesitas silenciar + restaurar todas.</p>

<h2>Un silencio más inteligente: silenciar todo por app</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> tiene un atajo de teclado "Silenciar todo": <strong>Control + Option + M (⌃⌥M)</strong>.</p>

<p>Cuando lo pulsas:</p>
<ol>
  <li>Cada app se silencia individualmente (el estado de volumen de cada app se guarda)</li>
  <li>Silencio instantáneo — igual que la tecla de silencio</li>
</ol>

<p>Cuando lo pulsas de nuevo:</p>
<ol>
  <li>Cada app se restaura</li>
  <li>Cada app vuelve a <strong>exactamente</strong> el volumen que tenía antes de silenciar</li>
  <li>Spotify vuelve al 30%, Zoom al 100%, Slack al 15% — perfectamente restaurado</li>
</ol>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Atajo de silenciar todo de SoundDial — Control+Option+M para silenciar y restaurar todas las apps con recuperación de volumen" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>La diferencia con la tecla de silencio del sistema:</p>
<ul>
  <li><strong>Silencio del sistema:</strong> silencia la salida → al restaurar devuelve un solo volumen del sistema → el balance por app no existe</li>
  <li><strong>Silenciar todo de SoundDial:</strong> silencia cada app individualmente → al restaurar devuelve el volumen individual de cada app → tu balance se preserva</li>
</ul>

<h2>Cuándo esto importa</h2>

<ul>
  <li><strong>Compartir pantalla:</strong> Estás compartiendo tu pantalla y necesitas silenciar tu Mac antes de que la otra persona escuche tu música. ⌃⌥M → silencio → haz lo tuyo → ⌃⌥M → la música vuelve exactamente al nivel correcto.</li>
  <li><strong>Interrupción inesperada:</strong> Alguien entra, necesitas silencio al instante. Un atajo, sin ratón, sin buscar la barra de menús.</li>
  <li><strong>Llamada telefónica rápida:</strong> Tu teléfono de escritorio suena. Silencia el Mac, atiende la llamada, restaura cuando termines. Todo vuelve.</li>
</ul>

<p>Combinado con el atajo <strong>⌃⌥S</strong> (mostrar/ocultar el panel de SoundDial), puedes gestionar todo tu audio enteramente desde el teclado — abrir el mezclador, ajustar niveles, cerrarlo y silenciar/restaurar todo sin tocar el ratón.</p>

<p>Disponible en la <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "google-meet-volume-too-low-mac": {
    slug: "google-meet-volume-too-low-mac",
    title: "¿Volumen de Google Meet demasiado bajo en Mac? Cómo solucionarlo",
    description:
      "Las voces en Google Meet apenas se escuchan incluso al volumen máximo. Aquí tienes el porqué Meet funciona a través de Chrome, qué significa eso para el audio y cómo amplificarlo.",
    date: "2026-05-01",
    readTime: "5 min de lectura",
    content: `
<p>Google Meet no tiene una app nativa para Mac — funciona dentro de tu navegador. Esto significa que el audio de Meet es parte del flujo de audio de Chrome (o Safari), y cualquier problema de volumen está enredado con cómo tu navegador gestiona el audio. Vamos a desenredarlo.</p>

<h2>1. Verifica los propios ajustes de audio de Meet</h2>

<p>Durante una llamada de Meet, haz clic en el menú de tres puntos (⋮) → Ajustes → Audio. Asegúrate de que el dispositivo de altavoz correcto esté seleccionado. Meet a veces se configura con un dispositivo inesperado, especialmente si recientemente conectaste o desconectaste hardware de audio.</p>

<h2>2. Verifica el volumen de la pestaña del navegador</h2>

<p>En Chrome: haz clic derecho en la pestaña de Meet → asegúrate de que "Silenciar sitio" NO esté seleccionado. Un sitio silenciado no produce audio independientemente de otros ajustes.</p>

<p>En Safari: haz clic en el icono de altavoz en la pestaña para asegurarte de que no esté silenciada.</p>

<h2>3. Verifica la salida del sistema</h2>

<p>Ajustes del Sistema → Sonido → Salida. Verifica que el dispositivo correcto esté seleccionado y el volumen esté al máximo. También comprueba la Seguridad de auriculares si estás usando auriculares.</p>

<h2>4. El problema de audio de Chrome</h2>

<p>Google Meet funciona como una pestaña de Chrome, y la salida de audio de Chrome puede ser más baja que las apps dedicadas. Chrome procesa el audio a través de su propio renderizador, que tiene su propio techo de volumen. Si el audio general de Chrome es bajo, Meet es bajo — incluso si el volumen de macOS está al 100%.</p>

<p>No hay forma integrada de amplificar el audio de Chrome más allá de su máximo. macOS trata Chrome como una app con un nivel de volumen, y ese nivel se limita al 100%.</p>

<h2>5. Problema de códec Bluetooth</h2>

<p>Si estás usando AirPods o auriculares Bluetooth, Google Meet al activar tu micrófono fuerza el cambio de códec Bluetooth de AAC a SCO. Esto reduce la calidad y el volumen del audio significativamente.</p>

<p><strong>Solución:</strong> En los ajustes de audio de Meet, selecciona el micrófono integrado de tu Mac como dispositivo de entrada mientras mantienes los auriculares Bluetooth como salida. Esto evita el cambio de códec y mantiene audio de alta calidad.</p>

<h2>6. Amplifica Google Meet (Chrome) más allá del 100%</h2>

<p>Si Meet sigue demasiado bajo después de verificar todo, necesitas amplificar el audio de Chrome más allá de lo que macOS permite.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> le da a Chrome su propio control de volumen que llega al <strong>200%</strong>. Como Google Meet funciona dentro de Chrome, amplificar Chrome amplifica Meet. Arrastra el control al 150% o 180% y el audio de la llamada se amplifica en tiempo real.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial amplificando el volumen de Google Meet (Chrome) más allá del 100% en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Esto también funciona con Safari si usas Meet en Safari. SoundDial controla cada navegador independientemente — amplifica Safari para Meet mientras mantienes Chrome a volumen normal para todo lo demás.</p>

<p>Y con auto-ducking, tu música de fondo se baja automáticamente cuando empieza una llamada de Meet (cuando tu micrófono se activa) y se restaura cuando la llamada termina.</p>

<p>Disponible en la <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — revisada por Apple, 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "mac-alert-volume-separate-from-media": {
    slug: "mac-alert-volume-separate-from-media",
    title: "Cómo separar el volumen de alertas del volumen multimedia en Mac",
    description:
      "macOS tiene un control de volumen de alertas oculto, pero solo cubre los sonidos del sistema. Así puedes separar verdaderamente el volumen de notificaciones del volumen multimedia en Mac.",
    date: "2026-05-02",
    readTime: "5 min de lectura",
    content: `
<p>Tu música está al nivel perfecto. Entonces suena una alerta de macOS — el efecto de sonido "Funk" o "Tink" — y es dolorosamente fuerte comparado con tu música. O lo contrario: tus alertas son inaudibles porque el volumen del sistema está bajo para música de fondo suave.</p>

<p>Quieres dos controles de volumen separados: uno para medios (música, llamadas, video) y otro para alertas y notificaciones. macOS soporta esto parcialmente, pero la solución completa requiere una herramienta de terceros.</p>

<h2>El volumen de alertas integrado de macOS</h2>

<p>macOS sí tiene un volumen de alertas separado. Ve a <strong>Ajustes del Sistema → Sonido</strong> y busca el control de <strong>"Volumen de alertas"</strong>. Este controla el volumen de los sonidos del sistema de macOS — pitidos de error, vaciado de Papelera, obturador de captura de pantalla — independientemente del volumen principal.</p>

<p>También puedes elegir qué sonido de alerta usar y si "Reproducir efectos de sonido a través de" tu dispositivo de salida seleccionado o los altavoces integrados.</p>

<h3>Qué controla el volumen de alertas</h3>
<ul>
  <li>Sonidos de alerta del sistema de macOS (Funk, Tink, Bottle, etc.)</li>
  <li>Sonidos del Finder (Papelera, copia de archivo completada)</li>
  <li>Algunos sonidos de apps integradas</li>
</ul>

<h3>Qué no controla</h3>
<ul>
  <li>Sonidos de notificación de Slack</li>
  <li>Sonidos de notificación de Discord</li>
  <li>Sonidos de Teams/Zoom</li>
  <li>Sonidos de notificación de Mail</li>
  <li>Cualquier sonido de notificación de apps de terceros</li>
  <li>Sonidos de notificación del navegador</li>
</ul>

<p>Las apps de terceros reproducen sus sonidos de notificación a través de su propio motor de audio — se tratan como audio regular de app, no como alertas del sistema. El control de volumen de alertas no tiene efecto sobre ellas. Esto significa que las apps que hacen los sonidos de notificación más molestos (Slack, Discord, Teams) son las que el volumen de alertas de macOS no puede tocar.</p>

<h2>La verdadera solución: volumen por app para apps de notificación</h2>

<p>Para separar verdaderamente el volumen de notificaciones del volumen multimedia, necesitas control de volumen por app. Establece Slack al 15%, Discord al 20% y Mail al 10% — mientras mantienes Spotify al 50% y tu navegador al 60%.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> le da a cada app su propio control de volumen. Puedes establecer las apps con muchas notificaciones a un nivel sutil que sea perceptible pero no estridente, mientras mantienes las apps multimedia a un volumen de escucha cómodo.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial separando el volumen de apps de notificación del volumen de apps multimedia en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Ejemplo de configuración</h3>
<p><strong>Apps multimedia:</strong></p>
<ul>
  <li>Spotify: 50%</li>
  <li>Safari/Chrome: 60%</li>
  <li>QuickTime/VLC: 70%</li>
</ul>

<p><strong>Apps de notificación:</strong></p>
<ul>
  <li>Slack: 15%</li>
  <li>Discord: 20%</li>
  <li>Mail: 10%</li>
  <li>Calendario: 25%</li>
</ul>

<p><strong>Apps de comunicación:</strong></p>
<ul>
  <li>Zoom/Teams: 100%</li>
  <li>FaceTime: 100%</li>
</ul>

<p>Guarda esto como perfil y aplícalo con un clic. La separación entre el volumen de notificaciones y el de medios que macOS no proporciona nativamente — hecho en menos de un minuto.</p>

<p>Disponible en la <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — revisada por Apple, 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "facetime-volume-too-low-mac": {
    slug: "facetime-volume-too-low-mac",
    title: "¿Volumen de llamada de FaceTime demasiado bajo en Mac? Cómo solucionarlo",
    description:
      "El audio de FaceTime apenas se escucha en tu Mac incluso a volumen completo. Aquí tienes cada solución — desde los ajustes de sonido hasta amplificar FaceTime más allá del 100%.",
    date: "2026-05-04",
    readTime: "5 min de lectura",
    content: `
<p>Las llamadas de FaceTime en tu iPhone están bien. Pero en tu Mac, la otra persona suena como si estuviera susurrando desde tres habitaciones de distancia. El volumen está al máximo. Has verificado todo lo que se te ocurre. Sigue demasiado bajo.</p>

<p>El volumen bajo de FaceTime en Mac es un problema común, y tiene varias causas posibles. Vamos a repasar cada una.</p>

<h2>1. Verifica el dispositivo de salida</h2>

<p>Ve a Ajustes del Sistema → Sonido → Salida. Asegúrate de que el dispositivo correcto esté seleccionado. Si recientemente conectaste o desconectaste auriculares, un monitor o dispositivos Bluetooth, macOS podría haber cambiado automáticamente a una salida inesperada — como los altavoces apenas funcionales de un monitor.</p>

<h2>2. Verifica los ajustes de audio de FaceTime</h2>

<p>Durante una llamada de FaceTime, haz clic en la barra de menús y verifica FaceTime → Video → selecciona el dispositivo de salida correcto en Salida de audio. FaceTime a veces puede usar un dispositivo de salida diferente al predeterminado del sistema, especialmente después de cambiar dispositivos.</p>

<h2>3. Desactiva el cambio automático de AirPods</h2>

<p>Si tienes AirPods emparejados con múltiples dispositivos Apple, pueden cambiar automáticamente fuera de tu Mac durante una llamada. Verifica Ajustes del Sistema → Bluetooth → haz clic en "i" junto a tus AirPods → "Conectar a este Mac" → establece en "Cuando se conectó por última vez a este Mac" en lugar de "Automáticamente" para evitar cambios durante la llamada.</p>

<h2>4. Problema de códec Bluetooth</h2>

<p>Usar AirPods o auriculares Bluetooth con FaceTime activa el cambio de códec AAC a SCO (porque FaceTime usa tu micrófono). SCO reduce la calidad y el volumen del audio. Usa un micrófono separado (micrófono integrado del Mac o USB) para mantener los AirPods en modo AAC de alta calidad.</p>

<h2>5. La seguridad de auriculares limitando el volumen</h2>

<p>Ajustes del Sistema → Sonido → Seguridad de auriculares. Si "Reducir audio fuerte" está activado, macOS está limitando el volumen de tus auriculares. Desactívalo o sube el umbral.</p>

<h2>6. Reinicia Core Audio</h2>

<p>Abre Terminal y ejecuta:</p>
<p><code>sudo killall coreaudiod</code></p>
<p>Esto reinicia el demonio de audio y puede solucionar estados de volumen bajo atascados. Vuelve a unirte a la llamada de FaceTime después de que el audio se reinicie.</p>

<h2>7. Amplifica el volumen de FaceTime más allá del 100%</h2>

<p>Si todos los ajustes están correctos y FaceTime sigue demasiado bajo — quizás la otra persona tiene un micrófono débil — necesitas amplificar más allá del límite de macOS.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> te permite amplificar el volumen de FaceTime hasta el <strong>200%</strong>. Abre el panel de la barra de menús, encuentra FaceTime y arrastra su control más allá del 100%. El audio de la llamada se amplifica en tiempo real sin afectar ninguna otra app.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial amplificando el volumen de llamada de FaceTime más allá del 100% en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>SoundDial también ayuda con lo contrario: si el tono de llamada o los sonidos de notificación de FaceTime son demasiado fuertes durante el tiempo de concentración, baja FaceTime al 20% o siléncialo mientras tu música sigue sonando. Un clic para silenciar, un clic para restaurar.</p>

<p>Disponible en la <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — revisada por Apple, en sandbox, compra única, sin suscripción.</p>
`,
  },
  "mac-volume-keyboard-shortcuts": {
    slug: "mac-volume-keyboard-shortcuts",
    title: "Atajos de teclado de volumen del Mac que probablemente no conoces",
    description:
      "Más allá de las teclas básicas de volumen — control de precisión, silenciar apps específicas y atajos de volumen por app. Todos los trucos de audio del Mac con teclado explicados.",
    date: "2026-05-06",
    readTime: "5 min de lectura",
    content: `
<p>Todos los usuarios de Mac conocen las teclas de subir/bajar/silenciar volumen. Las pulsas y el volumen del sistema cambia. Pero macOS tiene varios trucos ocultos de teclado para el control de audio que la mayoría nunca descubre — además de atajos de terceros que hacen la gestión del volumen dramáticamente más rápida.</p>

<h2>Atajos integrados que todos deberían conocer</h2>

<h3>Ajuste de volumen de precisión</h3>
<p>Mantén <strong>Option + Shift</strong> y pulsa la tecla de subir o bajar volumen. Cada pulsación ajusta el volumen en <strong>un cuarto</strong> del paso normal, dándote 64 niveles en lugar de 16. Esto es esencial para encontrar el volumen correcto de auriculares a altas horas de la noche, o cuando el salto entre dos pasos normales es demasiado grande.</p>

<h3>Ajuste silencioso de volumen</h3>
<p>Mantén <strong>Shift</strong> y pulsa subir o bajar volumen. El volumen cambia pero el sonido de confirmación "pop" se suprime. Útil cuando ajustas el volumen durante una llamada o presentación y no quieres que el sonido pop se transmita a todos.</p>

<h3>Ir directamente a Ajustes de sonido</h3>
<p>Mantén <strong>Option</strong> y pulsa cualquier tecla de volumen para abrir directamente Ajustes del Sistema → Sonido. Más rápido que navegar por Ajustes del Sistema manualmente.</p>

<h3>Cambio rápido de dispositivo de salida</h3>
<p>Mantén <strong>Option</strong> y haz clic en el icono de Sonido en la barra de menús para ver una lista de todos los dispositivos de salida (y entrada) disponibles. Haz clic en uno para cambiar al instante. Sin necesidad de abrir Ajustes del Sistema.</p>

<h2>Lo que los atajos de teclado de macOS no pueden hacer</h2>

<p>Todos los atajos anteriores controlan el <strong>volumen del sistema</strong> — un solo control que afecta a todas las apps por igual. No hay atajos de teclado integrados para:</p>

<ul>
  <li>Ajustar el volumen de una app específica</li>
  <li>Silenciar una app sin silenciar todo</li>
  <li>Cambiar entre configuraciones de volumen guardadas</li>
  <li>Mostrar/ocultar un panel de mezclador de volumen</li>
</ul>

<p>macOS simplemente no tiene control de volumen por app, así que no hay atajos para ello.</p>

<h2>Atajos de teclado de volumen por app con SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> añade dos atajos de teclado globales que amplían lo que macOS puede hacer:</p>

<h3>Mostrar/ocultar el mezclador de volumen: Control + Option + S</h3>
<p>Pulsa <strong>⌃⌥S</strong> desde cualquier lugar y el panel emergente de SoundDial se abre en la barra de menús, mostrando cada app con su propio control de volumen. Ajusta lo que necesites, pulsa el atajo de nuevo (o haz clic fuera) para cerrarlo. Nunca abandonas tu app actual.</p>

<h3>Silenciar todas las apps: Control + Option + M</h3>
<p>Pulsa <strong>⌃⌥M</strong> para silenciar instantáneamente el audio de todas las apps. Púlsalo de nuevo para restaurar, devolviendo cada app a su volumen anterior. Este es un botón de "silencio instantáneo" que es más rápido que buscar la tecla de silencio — y a diferencia de la tecla de silencio del sistema, restaura los volúmenes por app cuando restauras el sonido.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Atajos de teclado de SoundDial — Control+Option+S para mostrar/ocultar, Control+Option+M para silenciar todo" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>El flujo de trabajo desde el teclado</h2>

<p>Con los atajos de SoundDial activados, puedes gestionar todo tu audio sin tocar el ratón:</p>

<ol>
  <li><strong>⌃⌥S</strong> — abrir el mezclador</li>
  <li>Usa las teclas de flecha o el ratón para ajustar los controles individuales</li>
  <li><strong>⌃⌥S</strong> — cerrar el mezclador</li>
  <li><strong>⌃⌥M</strong> — silencio instantáneo cuando alguien entra en la habitación</li>
  <li><strong>⌃⌥M</strong> — restaurar cuando se van, todo vuelve a la normalidad</li>
</ol>

<p>Combinado con <strong>perfiles de volumen</strong> (configuraciones guardadas que cambias con un clic), puedes gestionar el audio de una docena de apps sin necesidad de abrir ninguna individualmente.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "background-music-app-not-working-mac": {
    slug: "background-music-app-not-working-mac",
    title: "¿La app Background Music no funciona en macOS? Prueba estas alternativas",
    description:
      "¿La app gratuita Background Music dejó de funcionar después de una actualización de macOS? Aquí está el porqué se rompe, qué hacer y las mejores alternativas que realmente funcionan en 2026.",
    date: "2026-06-08",
    readTime: "5 min de lectura",
    content: `
<p>Background Music es una app gratuita y de código abierto popular para Mac que te da control básico de volumen por app. Funciona instalando un dispositivo de audio virtual y enrutando todo el audio a través de él. El problema: se rompe. Regularmente.</p>

<p>Después de casi cada actualización de macOS — Ventura, Sonoma, Sequoia, Tahoe — los usuarios reportan los mismos problemas: el dispositivo de audio virtual no se instala, aparecen fallos y crepiteos de audio, algunas apps no se detectan, o la app simplemente se cierra al iniciar. Si buscaste "Background Music no funciona", no estás solo.</p>

<h2>Por qué Background Music sigue rompiéndose</h2>

<p>Background Music funciona instalando un <strong>controlador de dispositivo de audio virtual</strong> (un plugin Core Audio HAL). macOS enruta todo el audio del sistema a través de este dispositivo virtual, y Background Music lo intercepta para aplicar el control de volumen por app.</p>

<p>El problema es que Apple cambia cómo funcionan los controladores de audio con casi cada lanzamiento importante de macOS. Las restricciones de seguridad se endurecen, las APIs cambian y los mecanismos de carga de controladores evolucionan. Como Background Music es un proyecto de código abierto mantenido por voluntarios, las actualizaciones para coincidir con los cambios de Apple no siempre son oportunas.</p>

<p>Problemas comunes después de actualizaciones de macOS:</p>
<ul>
  <li><strong>El dispositivo de audio virtual no se instala</strong> — las nuevas políticas de seguridad de macOS bloquean el controlador</li>
  <li><strong>Crepiteos o tartamudeos de audio</strong> — el dispositivo virtual introduce latencia que la versión actual de macOS gestiona mal</li>
  <li><strong>Apps que no aparecen</strong> — los cambios en cómo macOS reporta los procesos en ejecución rompen la detección de apps</li>
  <li><strong>Sin audio en absoluto</strong> — el dispositivo virtual está configurado como salida predeterminada pero no está pasando el audio</li>
  <li><strong>Crash al iniciar</strong> — incompatibilidad con la versión actual de macOS</li>
</ul>

<h2>Cómo arreglar Background Music</h2>

<p>Si Background Music está actualmente roto:</p>

<ol>
  <li><strong>Busca actualizaciones:</strong> Visita la página de lanzamientos en GitHub de Background Music y comprueba si se ha publicado una nueva versión para tu versión de macOS.</li>
  <li><strong>Reinstala:</strong> Desinstala Background Music completamente (incluyendo el dispositivo de audio virtual), reinicia e instala la última versión.</li>
  <li><strong>Restablece el audio:</strong> Si tu audio está atascado en el dispositivo virtual, ve a Ajustes del Sistema → Sonido → Salida y selecciona tus altavoces/auriculares reales. Luego ejecuta <code>sudo killall coreaudiod</code> en Terminal.</li>
  <li><strong>Verifica los permisos:</strong> Ajustes del Sistema → Privacidad y seguridad — asegúrate de que Background Music tenga los permisos necesarios.</li>
</ol>

<h2>Alternativas que no usan dispositivos de audio virtuales</h2>

<p>El problema fundamental de Background Music es arquitectónico: los dispositivos de audio virtuales son frágiles y se rompen con las actualizaciones de macOS. Las alternativas modernas usan la <strong>API Core Audio Tap</strong> de Apple (introducida en macOS 14), que permite a las apps interceptar el audio por proceso sin instalar un controlador a nivel del sistema.</p>

<h3>SoundDial</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> usa la moderna API Audio Tap — sin dispositivo de audio virtual, sin controlador del sistema, sin extensiones del kernel. Se conecta directamente al flujo de audio de cada app usando la API soportada de Apple, lo que significa que no se rompe cuando macOS se actualiza.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — una alternativa a Background Music que no instala dispositivos de audio virtuales" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Lo que obtienes sobre Background Music:</p>
<ul>
  <li><strong>Sin dispositivo de audio virtual</strong> — funciona con el stack de audio nativo de Apple, no se rompe con las actualizaciones</li>
  <li><strong>Amplificación de volumen al 200%</strong> — Background Music se limita al 100%</li>
  <li><strong>Perfiles de volumen</strong> — guarda y cambia entre configuraciones (Background Music no tiene ninguno)</li>
  <li><strong>Auto-ducking</strong> — reducción automática de volumen durante llamadas (Background Music solo tiene pausado automático, no ducking)</li>
  <li><strong>Memoria de volumen</strong> — recuerda los volúmenes por app entre reinicios</li>
  <li><strong>Atajos de teclado</strong> — muestra/oculta el mezclador o silencia todas las apps</li>
  <li><strong>Desarrollo activo</strong> — actualizado regularmente para el último macOS</li>
</ul>

<p>La contrapartida: SoundDial es una compra única de pago, mientras que Background Music es gratuito. Pero una app que realmente funciona vale más que una app gratuita que se rompe cada seis meses. Y como SoundDial está en la <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>, ha sido revisada por Apple, ejecutada en sandbox para seguridad y se instala limpiamente — sin descargar de GitHub, sin compilar desde código fuente, sin conceder permisos de extensiones del sistema.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "soundsource-alternative-mac": {
    slug: "soundsource-alternative-mac",
    title: "Alternativa a SoundSource: control de volumen por app más ligero y económico para Mac",
    description:
      "SoundSource es potente pero caro y complejo. Si solo necesitas control de volumen por app sin el kit de herramientas de ingeniería de audio, aquí tienes qué usar en su lugar.",
    date: "2026-06-06",
    readTime: "6 min de lectura",
    content: `
<p>SoundSource de Rogue Amoeba es la app de control de volumen por app para Mac más longeva. Es potente, bien hecha y viene con funciones como EQ por app, cadenas de efectos de audio y enrutamiento de salida por app. También cuesta $39, requiere un controlador de audio del sistema (ACE) y tiene más funciones de las que la mayoría de la gente usará jamás.</p>

<p>Si todo lo que quieres es bajar Spotify sin afectar a Zoom — y no necesitas un kit de herramientas de ingeniería de audio completo — SoundSource podría ser más de lo que necesitas. Esto es lo que debes considerar.</p>

<h2>Lo que SoundSource hace bien</h2>

<p>Hay que reconocerle el mérito — SoundSource es una app pulida y profesional:</p>
<ul>
  <li><strong>Control de volumen por app</strong> con controles de precisión</li>
  <li><strong>EQ por app</strong> con ecualizadores integrados y soporte para plugins Audio Unit</li>
  <li><strong>Enrutamiento de salida por app</strong> — envía diferentes apps a diferentes altavoces</li>
  <li><strong>Amplificación de volumen</strong> más allá del 100%</li>
  <li><strong>Efectos de audio a nivel del sistema</strong></li>
</ul>

<p>Si eres podcaster, streamer o profesional de audio que necesita EQ por app y cadenas de efectos, SoundSource está diseñado para ti.</p>

<h2>Donde SoundSource se queda corto para usuarios regulares</h2>

<h3>Precio</h3>
<p>$39 USD es caro para una app de control de volumen. Si no usas el EQ, los efectos de audio o el enrutamiento por app, estás pagando por funciones que nunca tocarás.</p>

<h3>Controlador del sistema</h3>
<p>SoundSource instala un controlador de audio del sistema personalizado llamado ACE (Audio Capture Engine). Funciona bien pero añade complejidad — necesita actualizarse con cada lanzamiento de macOS, puede ocasionalmente entrar en conflicto con otro software de audio, y significa que estás ejecutando código de terceros a nivel del audio del sistema. Algunos departamentos de IT en entornos corporativos bloquean extensiones del kernel y controladores de audio a nivel del sistema.</p>

<h3>Sin perfiles de volumen</h3>
<p>A pesar de su extenso conjunto de funciones, SoundSource no tiene un sistema de perfiles. No puedes guardar una configuración de "Reunión" y una de "Concentración" y cambiar entre ellas. Cada vez que tu situación cambia, ajustas cada control manualmente.</p>

<h3>Sin auto-ducking</h3>
<p>SoundSource no reduce automáticamente el audio de fondo cuando te unes a una llamada. No hay detección de llamadas, ni ajuste automático de volumen, ni flujo de trabajo manos libres para el caso de uso más común de un mezclador por app.</p>

<h2>SoundDial: enfocado en lo que la mayoría de la gente realmente necesita</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> toma un enfoque diferente: hacer el trabajo principal perfectamente, saltarse las funciones que la mayoría no necesita, y añadir las funciones de flujo de trabajo que SoundSource no tiene.</p>

<table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;">
<thead>
<tr style="border-bottom:2px solid rgba(255,255,255,0.2);">
  <th style="text-align:left;padding:10px 12px;color:rgba(255,255,255,0.6);">Función</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundDial</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundSource</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Volumen por app</td>
  <td style="text-align:center;padding:10px 12px;">Sí (0-200%)</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Silencio por app</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Perfiles de volumen</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Auto-ducking</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Memoria de volumen</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">EQ por app</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Enrutamiento de salida por app</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Controlador de audio del sistema</td>
  <td style="text-align:center;padding:10px 12px;">No necesario</td>
  <td style="text-align:center;padding:10px 12px;">Requerido (ACE)</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Atajos de teclado</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Precio</td>
  <td style="text-align:center;padding:10px 12px;">14,99 € compra única</td>
  <td style="text-align:center;padding:10px 12px;">$39 USD</td>
</tr>
</tbody>
</table>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — una alternativa más ligera y enfocada a SoundSource con perfiles de volumen y auto-ducking" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>¿Cuál deberías elegir?</h2>

<ul>
  <li><strong>Elige SoundSource si:</strong> Necesitas EQ por app, cadenas de efectos de audio o enrutamiento de salida por app. Eres podcaster, streamer o profesional de audio. No te importa el precio ni el controlador del sistema.</li>
  <li><strong>Elige <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> si:</strong> Quieres control de volumen por app con perfiles y auto-ducking. Quieres algo más ligero que no instale un controlador del sistema. Quieres gastar menos. Eres un trabajador remoto, gamer, estudiante o cualquiera que solo quiera bajar Slack sin afectar a Zoom.</li>
</ul>

<p>SoundDial está disponible en la <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — lo que significa que ha sido revisada por Apple, ejecutada en sandbox para seguridad y se instala/desinstala limpiamente como cualquier app de la App Store. Sin descargar DMGs de sitios web aleatorios, sin instalaciones de controladores del sistema, sin conceder permisos de extensiones del kernel. Compra única, sin suscripción.</p>
`,
  },
  "mac-volume-too-loud-at-lowest-setting": {
    slug: "mac-volume-too-loud-at-lowest-setting",
    title: "¿El Mac sigue demasiado fuerte en el nivel más bajo? Cómo bajar aún más",
    description:
      "Incluso en la muesca de volumen más baja, tu Mac es demasiado fuerte — especialmente de noche con auriculares. Así puedes obtener un control de volumen más fino e ir por debajo del mínimo.",
    date: "2026-05-08",
    readTime: "5 min de lectura",
    content: `
<p>Es medianoche. Llevas auriculares. Pulsas la tecla de bajar volumen hasta que estás en la muesca más baja — una barra. Sigue demasiado fuerte. La siguiente pulsación es silencio total. No hay nada entre medias. Quieres volumen al 3% pero macOS salta de ~6% a 0%.</p>

<p>Esta es una queja común con auriculares y altavoces sensibles. Los 16 pasos de volumen de macOS son demasiado bruscos — el paso audible más bajo sigue siendo más fuerte de lo que necesitas para escuchar tranquilamente de noche.</p>

<h2>Solución integrada: ajuste de volumen en cuartos de paso</h2>

<p>La mayoría de los usuarios de Mac no saben esto: puedes obtener un control de volumen <strong>4 veces más fino</strong> usando un modificador de teclado.</p>

<p>Mantén <strong>Option + Shift</strong> y pulsa las teclas de subir/bajar volumen. Cada pulsación ajusta el volumen en un cuarto del paso normal — dándote 64 pasos en lugar de 16.</p>

<p>Esto te permite encontrar niveles de volumen entre las muescas normales. El hueco entre "una barra" y "silencio" ahora tiene tres niveles adicionales donde puedes aterrizar. Para escuchar con auriculares de noche, esto a menudo es suficiente para encontrar un nivel cómodo.</p>

<h2>Por qué algún contenido suena más fuerte que otro al mismo volumen</h2>

<p>Podrías notar que algunas apps se sienten más fuertes que otras incluso al mismo volumen del sistema. Spotify a una barra se siente más fuerte que un video de YouTube a una barra. Esto es porque cada app emite audio a niveles diferentes, y el volumen del sistema los escala proporcionalmente.</p>

<p>Una canción masterizada a 0 dB (máximo) y un podcast grabado a -15 dB sonarán dramáticamente diferentes al mismo volumen del sistema. La canción es 15 dB más fuerte — lo que se percibe como aproximadamente tres veces más fuerte para tus oídos.</p>

<h2>La verdadera solución: volumen por app para control fino</h2>

<p>El atajo de cuartos de paso ayuda, pero sigue ajustando todas las apps por igual. Si Spotify en el paso más bajo es demasiado fuerte pero tu llamada de Zoom en el paso más bajo es demasiado baja, estás atrapado.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> te da controles de volumen por app de alta precisión — cada control se mueve en incrementos del 1% del 0% al 200%. Puedes poner Spotify al 5% y Zoom al 40% al mismo tiempo. El nivel de control es dramáticamente más fino que los 16 pasos del sistema de macOS.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Control de volumen por app de alta precisión de SoundDial con incrementos del 1% en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Para uso nocturno con auriculares:</p>
<ul>
  <li>Establece el volumen del sistema a un nivel moderado (40-50%)</li>
  <li>Usa SoundDial para afinar cada app exactamente al nivel que quieras</li>
  <li>Spotify al 8% — música de fondo apenas perceptible</li>
  <li>Navegador al 15% — lo suficientemente bajo para video nocturno</li>
  <li>Notificaciones silenciadas — sin pings fuertes sorpresa</li>
</ul>

<p>Guarda esto como perfil "Noche" y aplícalo con un clic cuando te pongas los auriculares fuera de horario.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "one-airpod-louder-than-the-other-fix": {
    slug: "one-airpod-louder-than-the-other-fix",
    title: "¿Un AirPod suena más fuerte que el otro? Todas las soluciones explicadas",
    description:
      "El AirPod izquierdo es más bajo que el derecho (o viceversa). Aquí tienes cada causa — desde cerumen hasta ajustes de balance de macOS — y cómo solucionarlo.",
    date: "2026-05-10",
    readTime: "5 min de lectura",
    content: `
<p>Un AirPod suena bien. El otro es notablemente más bajo. La música se siente descentrada. Las voces suenan como si vinieran de un solo lado. Esta es una de las quejas más comunes sobre los AirPods, y generalmente tiene una solución sencilla.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>1. Limpia tus AirPods</h2>

<p>La causa más común es física: cerumen o suciedad bloqueando parcialmente la malla del altavoz de un AirPod. Incluso una capa fina de acumulación puede reducir significativamente el volumen de ese lado.</p>

<p><strong>Cómo limpiar:</strong></p>
<ul>
  <li>Usa un cepillo seco de cerdas suaves (un cepillo de dientes limpio funciona) para cepillar suavemente la malla del altavoz</li>
  <li>Para las puntas de silicona de AirPods Pro: retira la punta y limpia tanto la punta como la malla del altavoz debajo</li>
  <li>Usa un paño seco sin pelusa para el exterior</li>
  <li><strong>No uses:</strong> agua, alcohol, aire comprimido ni objetos puntiagudos — estos pueden dañar la malla del altavoz o empujar la suciedad más adentro</li>
</ul>

<p>Después de limpiar, prueba ambos AirPods. En la mayoría de los casos, esto soluciona el problema inmediatamente.</p>

<h2>2. Verifica el balance de audio en macOS</h2>

<p>macOS tiene un control de balance de audio izquierda-derecha que podría estar descentrado:</p>

<ol>
  <li>Ve a <strong>Ajustes del Sistema → Accesibilidad → Audio</strong></li>
  <li>Busca el control de <strong>Balance</strong></li>
  <li>Asegúrate de que esté exactamente centrado entre L y R</li>
</ol>

<p>Si el control estaba desplazado a un lado, esa es tu causa. Céntralo y el volumen debería ser igual en ambos lados.</p>

<p>También verifica <strong>Ajustes del Sistema → Sonido</strong> — algunas versiones de macOS tienen un control de balance en los ajustes del dispositivo de salida también.</p>

<h2>3. Restablece tus AirPods</h2>

<p>Si la limpieza y el balance no ayudan, prueba a restablecer tus AirPods a su estado de fábrica:</p>

<ol>
  <li>Pon ambos AirPods en el estuche de carga</li>
  <li>Cierra la tapa y espera 30 segundos</li>
  <li>Abre la tapa</li>
  <li>Mantén presionado el botón de configuración en la parte trasera del estuche durante 15 segundos hasta que la luz de estado parpadee en ámbar y luego en blanco</li>
  <li>Vuelve a emparejar los AirPods con tu Mac (Ajustes del Sistema → Bluetooth)</li>
</ol>

<p>Esto restablece cualquier calibración de audio almacenada y puede solucionar desequilibrios de volumen del software.</p>

<h2>4. Verifica el Audio Mono</h2>

<p>Si la función de accesibilidad Audio Mono de macOS está activada, el audio estéreo se mezcla en un solo canal y se envía a ambos AirPods por igual. Aunque esto no debería causar diferencias de volumen, puede cambiar la forma en que suena cierto contenido y hacer que un lado parezca "diferente".</p>

<p>Verifica: Ajustes del Sistema → Accesibilidad → Audio → asegúrate de que "Audio Mono" esté desactivado (a menos que lo necesites).</p>

<h2>5. Interferencia Bluetooth</h2>

<p>Los AirPods se comunican con tu Mac vía Bluetooth, y cada AirPod también se comunica con el otro. Si hay interferencia Bluetooth significativa (routers WiFi, hubs USB 3.0, otros dispositivos Bluetooth), un AirPod podría recibir una señal más débil.</p>

<p><strong>Solución:</strong> Acércate a tu Mac. Desconecta dispositivos Bluetooth que no estés usando. Si estás cerca de un hub USB 3.0, prueba a alejarlo — USB 3.0 es conocido por interferir con Bluetooth de 2,4 GHz.</p>

<h2>6. Problema de hardware</h2>

<p>Si ninguna de las soluciones anteriores funciona, un AirPod podría tener un defecto de hardware — un driver de altavoz degradado o una malla dañada. Esto ocurre con el tiempo con uso intensivo.</p>

<p><strong>Solución:</strong> Contacta con el Soporte de Apple o visita una Apple Store. Si tus AirPods están bajo garantía o AppleCare+, Apple reemplazará el AirPod afectado. Los reemplazos individuales de AirPods también están disponibles para compra fuera de garantía.</p>

<h2>Mejor balance de audio con control de volumen por app</h2>

<p>Aunque el control de volumen por app no soluciona un desequilibrio de hardware entre AirPods, resuelve un problema relacionado: cuando algunas apps son más fuertes que otras en tus AirPods, puede exagerar la percepción de un desequilibrio.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> te permite establecer cada app a un nivel de volumen consistente. Cuando Spotify está al 40%, Zoom al 100% y Safari al 60%, sabes exactamente qué esperar de cada app — sin saltos de volumen repentinos que hagan que un AirPod parezca más fuerte porque una notificación acaba de sonar al 100%.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "netflix-streaming-audio-too-quiet-mac": {
    slug: "netflix-streaming-audio-too-quiet-mac",
    title: "¿Audio de Netflix y streaming demasiado bajo en Mac? Cómo solucionarlo",
    description:
      "Los diálogos son un susurro, luego una explosión sacude la habitación. Así puedes arreglar los niveles de audio de streaming en Mac — y amplificar contenido silencioso más allá del 100%.",
    date: "2026-05-17",
    readTime: "5 min de lectura",
    content: `
<p>Estás viendo una película en Netflix. Dos personajes están teniendo una conversación — apenas puedes escucharlos. Subes el volumen. Empieza una escena de acción. Las explosiones son ensordecedoras. Te lanzas a buscar la tecla de volumen. Esta es la queja más común sobre el audio de streaming, y es peor en los altavoces integrados del Mac.</p>

<p>El problema no es tu Mac. Es cómo las películas y series están masterizadas — y el hecho de que macOS no te da herramientas para solucionarlo.</p>

<h2>Por qué el audio de streaming tiene cambios de volumen extremos</h2>

<p>Las películas y series se masterizan con alto <strong>rango dinámico</strong> — la diferencia entre los sonidos más silenciosos y más fuertes. En un cine con altavoces potentes y un subwoofer, esto suena increíble. Los susurros son íntimos, las explosiones son viscerales.</p>

<p>En los altavoces de 5 cm de un MacBook, ese rango dinámico se convierte en un problema. Las partes silenciosas están por debajo de lo que los altavoces pequeños pueden reproducir con claridad, mientras que las partes fuertes alcanzan los límites físicos del altavoz. Terminas ajustando constantemente el volumen — subiendo para los diálogos, bajando para la acción.</p>

<h2>Solución 1: Activa "Reducir sonidos fuertes" en la app de streaming</h2>

<p>Algunos servicios de streaming tienen una función de normalización de volumen:</p>
<ul>
  <li><strong>Netflix:</strong> Durante la reproducción, haz clic en el icono de altavoz → comprueba si hay una opción "Reducir sonidos fuertes" (disponible en el navegador y la app nativa)</li>
  <li><strong>Apple TV+:</strong> Ajustes → Accesibilidad → "Reducir sonidos fuertes"</li>
  <li><strong>Disney+:</strong> Sin ajuste equivalente actualmente disponible</li>
  <li><strong>Amazon Prime Video:</strong> Función "Dialogue Boost" (si está disponible para el título)</li>
</ul>

<p>Estas funciones comprimen el rango dinámico — haciendo los sonidos silenciosos más fuertes y los sonidos fuertes más suaves. El resultado es un volumen más uniforme que funciona mejor en altavoces pequeños y a niveles bajos de escucha.</p>

<h2>Solución 2: Verifica el mejorador de sonido de tu Mac</h2>

<p>En algunos modelos de Mac, macOS aplica procesamiento de audio a los altavoces integrados. Verifica Ajustes del Sistema → Sonido para ver si hay opciones de mejora para tu dispositivo de salida. En los modelos MacBook Pro 14" y 16", el sistema de altavoces tiene procesamiento de audio espacial que puede afectar al volumen percibido.</p>

<h2>Solución 3: Usa auriculares con cable</h2>

<p>Los auriculares eliminan completamente el problema del tamaño del altavoz. Incluso unos auriculares baratos con cable pueden reproducir diálogos silenciosos con claridad porque el driver está justo al lado de tu tímpano. El rango dinámico que es un problema en altavoces pequeños se convierte en una ventaja con auriculares.</p>

<h2>Solución 4: Amplifica el audio de streaming más allá del 100%</h2>

<p>Si el contenido es simplemente demasiado bajo — incluso con la normalización activada y el volumen al máximo — necesitas amplificación más allá de lo que macOS proporciona.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> te permite amplificar cualquier app al <strong>200%</strong>. Si Safari o la app de Netflix es demasiado baja, arrastra su control más allá del 100%. El audio se amplifica antes de llegar a tus altavoces, duplicando efectivamente el volumen máximo solo para esa app.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial amplificando el audio de Netflix al 180% en Mac para diálogos y audio de streaming más claros" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Esto es especialmente útil cuando:</p>
<ul>
  <li>Ves una película extranjera silenciosa donde los diálogos son suaves</li>
  <li>Reproduces contenido antiguo que fue masterizado a niveles más bajos</li>
  <li>Usas altavoces del MacBook en un entorno ruidoso</li>
  <li>Un servicio de streaming es significativamente más bajo que otro</li>
</ul>

<p>Y como SoundDial controla cada app independientemente, amplificar Netflix al 150% no hace tu Spotify o Slack más fuerte. Cada app se queda a su propio nivel.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "mac-audio-setup-remote-work": {
    slug: "mac-audio-setup-remote-work",
    title: "Configuración de audio en Mac para trabajo remoto: la guía completa",
    description:
      "Llamadas, música, notificaciones y tiempo de concentración — todo en un Mac. Así puedes configurar tu audio para que nada compita por tu atención.",
    date: "2026-05-12",
    readTime: "8 min de lectura",
    content: `
<p>El trabajo remoto en un Mac significa que tu ordenador es simultáneamente tu teléfono de oficina, tu radio, tu centro de notificaciones y tu estación de trabajo profundo. Estos son cuatro modos de audio fundamentalmente diferentes, y macOS los trata todos igual: un control de volumen, todo al mismo nivel, sin forma de priorizar.</p>

<p>Esta guía explica cómo configurar el audio de tu Mac para trabajo remoto de modo que las llamadas sean claras, la música esté presente pero no distraiga, las notificaciones sean sutiles y el tiempo de concentración sea realmente silencioso.</p>

<h2>Los cuatro modos de audio del trabajo remoto</h2>

<h3>1. Modo reunión</h3>
<p>Estás en una llamada de Zoom o Teams. La llamada necesita ser perfectamente clara. La música debería estar silenciada o apenas audible. Slack no debería estar haciendo ping en tu oído.</p>

<h3>2. Modo concentración</h3>
<p>Estás haciendo trabajo profundo. Música de fondo a bajo nivel te ayuda a concentrarte. Las notificaciones deberían ser apenas perceptibles — presentes lo suficiente para notar un mensaje urgente, lo suficientemente bajas para no romper el flujo.</p>

<h3>3. Modo colaborativo</h3>
<p>Estás disponible para mensajes, monitoreando Slack, quizás viendo un video de formación. Todo puede estar a niveles moderados. Notificaciones a volumen normal.</p>

<h3>4. Modo descanso</h3>
<p>Música a todo volumen. YouTube a todo volumen. Las notificaciones pueden esperar.</p>

<h2>Configuración de hardware</h2>

<h3>La cuestión del micrófono</h3>
<p>Si usas AirPods para llamadas, considera usar un micrófono separado. Cuando los AirPods se usan como micrófono y altavoces, macOS cambia al códec Bluetooth SCO de menor calidad, que reduce tanto la calidad como el volumen del audio. Usar el micrófono integrado de tu Mac (o un micrófono USB) mientras mantienes los AirPods como salida evita esto por completo.</p>

<p>Para la mejor calidad de llamada: un micrófono USB o unos auriculares con micrófono integrado. El Blue Yeti, Elgato Wave, o incluso unos auriculares USB básicos sonarán dramáticamente mejor que el micrófono de los AirPods para tus colegas.</p>

<h3>Dispositivos de salida</h3>
<p>Muchos trabajadores remotos usan dos dispositivos de salida:</p>
<ul>
  <li><strong>Auriculares</strong> para llamadas — privacidad, sin eco, audio claro</li>
  <li><strong>Altavoces</strong> para música fuera de las llamadas — llena la habitación, más cómodo durante periodos largos</li>
</ul>

<p>Usa Option-clic en el icono de Sonido en la barra de menús para cambiar rápidamente entre dispositivos. O usa el selector de dispositivos integrado de SoundDial, que pone tus dispositivos de salida justo al lado de tus controles de volumen.</p>

<h2>Configuración de software</h2>

<h3>Gestión de notificaciones</h3>
<p>Ve a Ajustes del Sistema → Notificaciones. Para cada app, decide si necesitas notificaciones sonoras:</p>
<ul>
  <li><strong>Mantener sonidos:</strong> Slack (si eres responsivo), Calendario (reuniones), Mensajes</li>
  <li><strong>Desactivar sonidos:</strong> Mail (revísalo según tu horario), Noticias, apps sociales</li>
</ul>

<p>Esto reduce el número de apps que hacen sonidos sorpresa, pero no te da control de volumen — solo encendido/apagado.</p>

<h3>Modos de concentración</h3>
<p>Crea al menos dos modos de concentración en Ajustes del Sistema → Concentración:</p>
<ul>
  <li><strong>"Reunión"</strong> — silencia todas las notificaciones excepto tu app de calendario</li>
  <li><strong>"Trabajo concentrado"</strong> — permite notificaciones de DMs de Slack y tu jefe, silencia todo lo demás</li>
</ul>

<p>Los modos de concentración manejan la supresión de notificaciones. Para el control del volumen de audio, necesitas algo más.</p>

<h2>La pieza que falta: control de volumen por app</h2>

<p>Los modos de concentración controlan <em>qué</em> notificaciones llegan pero no <em>a qué volumen</em> suena nada. Sigues teniendo un solo control de volumen para todo. Si quieres Slack al 15%, Spotify al 35% y Zoom al 100% — macOS no puede hacer eso.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> llena este vacío dando a cada app su propio control de volumen. Configura tu audio de trabajo remoto exactamente como lo quieras:</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Configuración de audio para trabajo remoto de SoundDial — diferentes niveles de volumen para Zoom, Spotify y Slack en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Guarda perfiles para cada modo</h3>

<p><strong>Perfil de reunión:</strong></p>
<ul>
  <li>Zoom/Teams: 100%</li>
  <li>Spotify: silenciado</li>
  <li>Slack: silenciado</li>
  <li>Navegador: silenciado</li>
</ul>

<p><strong>Perfil de trabajo concentrado:</strong></p>
<ul>
  <li>Spotify: 30%</li>
  <li>Slack: 10%</li>
  <li>Zoom: 80% (por si alguien llama)</li>
  <li>Navegador: 40%</li>
</ul>

<p><strong>Perfil colaborativo:</strong></p>
<ul>
  <li>Todo al 50-70%</li>
  <li>Slack: 30%</li>
</ul>

<p>Cambia entre perfiles con un clic. Cuando empieza una llamada, el auto-ducking de SoundDial reduce automáticamente todo excepto tu app de llamada. Cuando termina, los niveles de tu perfil se restauran.</p>

<h2>El flujo de trabajo diario</h2>

<ol>
  <li>Empezar a trabajar → aplica el perfil "Trabajo concentrado"</li>
  <li>Unirse a una reunión → el auto-ducking lo maneja automáticamente (o aplica el perfil "Reunión")</li>
  <li>La reunión termina → los volúmenes se restauran a los niveles de Trabajo concentrado</li>
  <li>Pausa para comer → aplica el perfil "Descanso", sube la música</li>
  <li>Trabajo profundo por la tarde → de vuelta a Trabajo concentrado</li>
</ol>

<p>Esfuerzo manual total: dos o tres clics de perfil al día. Todo lo demás es automático.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "stop-browser-tabs-auto-playing-audio-mac": {
    slug: "stop-browser-tabs-auto-playing-audio-mac",
    title: "Cómo evitar que las pestañas del navegador reproduzcan audio automáticamente en Mac",
    description:
      "Una pestaña en segundo plano empieza a reproducir audio de la nada. Anuncios, videos, sitios de noticias — así puedes silenciar pestañas rebeldes y controlar el audio del navegador en macOS.",
    date: "2026-05-14",
    readTime: "5 min de lectura",
    content: `
<p>Tienes veinte pestañas abiertas. Estás trabajando en una de ellas. De repente — empieza a sonar audio de algún lugar. Un anuncio en video. Un clip de noticias que se reproduce automáticamente. Una pestaña que abriste hace una hora y que decidió que ahora es el momento de hacer ruido. Te apresuras a encontrar cuál es, haciendo clic en una tras otra.</p>

<p>El audio de reproducción automática en las pestañas del navegador es una de las experiencias más molestas en cualquier ordenador, y es peor en Mac porque macOS no tiene forma de silenciar una app específica (y mucho menos una pestaña específica) sin silenciar todo.</p>

<h2>Desactivar la reproducción automática en Safari</h2>

<p>Safari tiene los mejores controles de reproducción automática integrados de cualquier navegador:</p>

<ol>
  <li>Abre Safari → Ajustes (⌘,) → pestaña Sitios web</li>
  <li>Selecciona "Reproducción automática" en la barra lateral izquierda</li>
  <li>Establece el valor predeterminado en la parte inferior como "Nunca reproducir automáticamente" o "Detener medios con sonido"</li>
</ol>

<p>"Detener medios con sonido" es la mejor opción — bloquea los videos que se reproducen automáticamente con audio pero permite la reproducción automática silenciada (que muchos sitios usan para videos de fondo decorativos). "Nunca reproducir automáticamente" bloquea todo.</p>

<p>También puedes configurar ajustes por sitio en este mismo panel si quieres permitir la reproducción automática en sitios específicos como YouTube o Netflix.</p>

<h2>Desactivar la reproducción automática en Chrome</h2>

<p>Los controles de reproducción automática de Chrome son menos granulares:</p>

<ol>
  <li>Ve a <code>chrome://settings/content/sound</code></li>
  <li>Activa/desactiva "Los sitios pueden reproducir sonido" para determinar el comportamiento predeterminado</li>
  <li>Añade sitios específicos a la lista "Silenciar" para silenciarlos permanentemente</li>
</ol>

<p>Chrome también te permite silenciar pestañas individuales: haz clic derecho en una pestaña → "Silenciar sitio". Esto silencia todo el audio de ese sitio hasta que lo reactives.</p>

<h2>Silenciar una pestaña rápidamente</h2>

<p>Tanto Safari como Chrome muestran un icono de altavoz en las pestañas que están produciendo audio. En Safari, haz clic en el icono de altavoz en la pestaña para silenciarla. En Chrome, haz clic derecho en la pestaña y selecciona "Silenciar sitio".</p>

<p>Esto funciona para una pestaña a la vez, pero si tienes múltiples pestañas ruidosas, estás haciendo clic en ellas una por una.</p>

<h2>El problema más amplio: audio del navegador vs. todo lo demás</h2>

<p>Incluso con la reproducción automática desactivada y las pestañas silenciadas, podrías querer controlar qué tan fuerte suena tu navegador en relación con otras apps. Quizás estás viendo un tutorial de YouTube mientras estás en una llamada de Zoom — quieres el tutorial al 30% y Zoom al 100%. O estás reproduciendo música de fondo en una pestaña del navegador y compite con tu Spotify.</p>

<p>macOS trata todo el navegador como una app con un volumen. No puedes hacer una pestaña más baja que otra a nivel del sistema. Pero <em>sí</em> puedes hacer todo el navegador más bajo que otras apps.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> le da a tu navegador su propio control de volumen, independiente de todas las demás apps. Baja Safari al 30% mientras mantienes Zoom al 100%. Silencia Chrome por completo mientras mantienes Spotify sonando. Un clic.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial controlando el volumen del navegador independientemente de otras apps en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Esta es la forma más rápida de manejar una pestaña con reproducción automática sorpresa: en lugar de buscar qué pestaña está haciendo ruido, haz clic en SoundDial en la barra de menús y silencia el navegador. Todo lo demás sigue sonando. Cuando hayas encontrado y cerrado la pestaña infractora, restaura el sonido del navegador y su volumen vuelve a donde estaba.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "discord-volume-too-loud-mac": {
    slug: "discord-volume-too-loud-mac",
    title: "¿Discord demasiado fuerte (o bajo) en Mac? Cómo solucionarlo",
    description:
      "Discord retumba sobre tu juego, o es demasiado bajo para escuchar a tus compañeros. Así puedes controlar el volumen de Discord independientemente de todo lo demás en macOS.",
    date: "2026-05-21",
    readTime: "5 min de lectura",
    content: `
<p>Discord tiene dos problemas de volumen en Mac. O es demasiado fuerte — los sonidos de notificación retumban sobre tu juego y tu música — o es demasiado bajo — no puedes escuchar a tus compañeros de equipo sobre el audio del juego. El problema es que macOS no te permite ajustar el volumen de Discord de forma independiente. Está vinculado al mismo control del sistema que todo lo demás.</p>

<h2>Controles de volumen internos de Discord</h2>

<p>Discord tiene varios ajustes de volumen internos. Antes de buscar soluciones externas, asegúrate de que estos estén configurados:</p>

<h3>Volumen de salida</h3>
<p>Ve a Discord → Ajustes (icono de engranaje) → Voz y video. El control "Volumen de salida" controla lo fuerte que suena Discord para ti. Si Discord es demasiado bajo, asegúrate de que esté al 100%. Si es demasiado fuerte, bájalo aquí.</p>

<p><strong>Limitación:</strong> Esto controla la mezcla interna de Discord, pero no cambia el volumen de Discord <em>en relación con otras apps</em>. Si tu juego está al 80% de volumen del sistema y Discord también está al 80%, ajustar el control interno de Discord cambia el balance — pero sigues atado a un solo volumen del sistema para todo.</p>

<h3>Volumen por usuario</h3>
<p>Haz clic derecho en cualquier usuario en un canal de voz → "Volumen del usuario". Puedes ajustar usuarios individuales del 0% al 200%. Esto es útil si una persona es más fuerte o más baja que otras, pero no resuelve el balance general de Discord vs. otras apps.</p>

<h3>Volumen de notificación</h3>
<p>Discord → Ajustes → Notificaciones. Puedes desactivar sonidos de notificación específicos (mensaje, ensordecimiento, silencio, unirse/salir) individualmente. Esto reduce el número de sonidos disruptivos pero no te permite bajar su volumen — solo encenderlos o apagarlos.</p>

<h2>El verdadero problema: balance de volumen a nivel del sistema</h2>

<p>Los controles internos de Discord ajustan la propia mezcla de Discord. Pero el verdadero problema es el balance entre Discord y todo lo demás en tu Mac: tu juego, tu música, tu navegador. macOS te da un solo control para todos ellos.</p>

<p>Para ajustar el volumen de Discord en relación con tu juego, necesitas control de volumen por app — algo que macOS no proporciona nativamente.</p>

<h2>Soluciónalo con SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> le da a Discord su propio control de volumen en tu barra de menús, independiente de todas las demás apps. Establece Discord exactamente al nivel que quieras — 100% para chat de voz claro, 40% para fondo sutil, o silenciado completamente — sin tocar tu juego, música o cualquier otra cosa.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial controlando el volumen de Discord independientemente del juego y la música en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Configuraciones comunes</h3>

<p><strong>Gaming con Discord:</strong></p>
<ul>
  <li>Discord: 100% (siempre escuchar claramente a los compañeros)</li>
  <li>Juego: 40% (inmersivo pero no abrumador)</li>
  <li>Spotify: 15% (música de fondo sutil)</li>
</ul>

<p><strong>Chat de voz relajado:</strong></p>
<ul>
  <li>Discord: 80%</li>
  <li>Navegador/YouTube: 60%</li>
  <li>Todo lo demás: normal</li>
</ul>

<p><strong>Trabajo concentrado (Discord de fondo):</strong></p>
<ul>
  <li>Discord: silenciado o 10%</li>
  <li>Spotify: 50%</li>
  <li>Slack: 15%</li>
</ul>

<p>Guarda cada uno como un <strong>perfil de volumen</strong> en SoundDial y cambia con un clic. Sin reajustar seis controles cada vez que cambias de actividad.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "switch-audio-output-quickly-mac": {
    slug: "switch-audio-output-quickly-mac",
    title: "Cómo cambiar la salida de audio rápidamente en Mac (sin buscar en los ajustes)",
    description:
      "Cambiar entre altavoces, auriculares y monitores en Mac requiere demasiados clics. Aquí tienes formas más rápidas de cambiar tu dispositivo de salida de audio al instante.",
    date: "2026-05-19",
    readTime: "5 min de lectura",
    content: `
<p>Desconectas tus auriculares y quieres que el audio vaya a tus altavoces. O conectas AirPods y macOS elige el dispositivo equivocado. O entras en una sala de reuniones y necesitas cambiar al altavoz de conferencia. Cada vez, es: Ajustes del Sistema → Sonido → Salida → desplazar → clic. Demasiados clics para algo que debería tomar uno.</p>

<p>Aquí tienes todas las formas de cambiar la salida de audio más rápido en Mac — desde atajos integrados hasta herramientas de barra de menús que eliminan los clics por completo.</p>

<h2>Método 1: Option-clic en el icono de volumen</h2>

<p>Este es el método integrado más rápido y la mayoría de la gente no lo conoce.</p>

<p>Mantén <strong>Option (⌥)</strong> y haz clic en el icono de volumen/sonido en tu barra de menús. En lugar del control de volumen normal, obtienes una lista de todos los dispositivos de salida disponibles. Haz clic en el que quieras. Listo.</p>

<p>Si no ves el icono de sonido en tu barra de menús, actívalo: Ajustes del Sistema → Centro de control → Sonido → selecciona "Mostrar siempre en la barra de menús".</p>

<p><strong>Limitación:</strong> Solo muestra dispositivos de salida — no puedes ajustar el volumen por app ni ver qué se está reproduciendo desde este menú.</p>

<h2>Método 2: Centro de control</h2>

<p>Haz clic en el icono del Centro de control (el icono de dos interruptores) en la barra de menús → haz clic en la sección de Sonido → haz clic en el nombre del dispositivo actual para ver todas las salidas disponibles.</p>

<p><strong>Limitación:</strong> Son tres clics en lugar de uno. Ligeramente más lento que hacer Option-clic en el icono de volumen.</p>

<h2>Método 3: Atajo de Ajustes del Sistema</h2>

<p>Puedes fijar Sonido en la barra lateral de nivel superior de Ajustes del Sistema, pero aún requiere navegar a la pestaña Salida y seleccionar un dispositivo. No es rápido.</p>

<h2>Método 4: Atajo de teclado (con configuración)</h2>

<p>macOS no tiene un atajo de teclado integrado para cambiar dispositivos de audio. Sin embargo, puedes crear uno usando Automator o Atajos:</p>
<ol>
  <li>Abre la app Atajos</li>
  <li>Crea un nuevo atajo que ejecute un script de shell: <code>SwitchAudioSource -s "Nombre del dispositivo"</code> (requiere la herramienta de línea de comandos <code>switchaudio-osx</code> de Homebrew)</li>
  <li>Asigna un atajo de teclado al atajo</li>
</ol>
<p>Esto funciona pero requiere Homebrew, una herramienta de línea de comandos y configuración manual por dispositivo. No es práctico para la mayoría de los usuarios.</p>

<h2>Método 5: El selector de dispositivos integrado de SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> incluye un selector de dispositivo de salida justo en su panel emergente de la barra de menús — junto a tus controles de volumen por app. Un clic para abrir SoundDial, un clic para cambiar de dispositivo. Sin buscar en Ajustes del Sistema.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial con cambio de dispositivo de salida de audio y control de volumen por app en un solo panel de la barra de menús" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>La ventaja de cambiar dispositivos dentro de SoundDial: puedes cambiar tu salida <em>y</em> ajustar volúmenes por app en el mismo panel. Cambia a AirPods e inmediatamente baja Spotify mientras subes tu llamada — todo sin salir del panel emergente.</p>

<p>Combinado con la función de <strong>memoria de volumen</strong> de SoundDial, cada dispositivo de salida puede recordar sus propios niveles de volumen por app. Cambia a altavoces y se aplica tu balance de "altavoces". Cambia a auriculares y se aplica tu balance de "auriculares". Sin reajuste manual.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "fix-audio-crackling-popping-mac": {
    slug: "fix-audio-crackling-popping-mac",
    title: "Solucionar crepiteos y chasquidos de audio en Mac: guía completa",
    description:
      "El audio de tu Mac crepita, chasquea o tartamudea — durante la música, las llamadas o la reproducción de video. Aquí tienes cada causa conocida y solución para los fallos de audio en macOS.",
    date: "2026-05-16",
    readTime: "8 min de lectura",
    content: `
<p>Estás escuchando música y escuchas un chasquido. Luego un crepiteo. Luego un tartamudeo donde el audio se corta durante una fracción de segundo y vuelve. No es la canción — es tu Mac. Los crepiteos de audio en macOS son desesperantemente comunes, y tienen al menos seis causas diferentes.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<p>Esta guía cubre cada causa conocida de crepiteos, chasquidos y tartamudeos de audio en Mac, desde soluciones de software hasta el problema de hardware que deberías conocer.</p>

<h2>1. Reinicia Core Audio (la solución rápida)</h2>

<p>La solución individual más efectiva para crepiteos de audio repentinos es reiniciar el demonio de audio de macOS. Abre Terminal y ejecuta:</p>
<p><code>sudo killall coreaudiod</code></p>

<p>El audio se cortará durante un segundo y se reiniciará. En muchos casos, los crepiteos se detienen inmediatamente. Esto funciona porque coreaudiod — el proceso que gestiona todo el audio en macOS — puede entrar en un estado corrupto después de ciclos de suspensión/activación, conexiones de dispositivos Bluetooth o crashes de apps.</p>

<p>Si esto lo soluciona, los crepiteos fueron causados por un problema temporal del demonio. Si vuelve regularmente, sigue leyendo para soluciones permanentes.</p>

<h2>2. Sobrecarga de CPU</h2>

<p>Los crepiteos de audio a menudo se correlacionan con alto uso de CPU. Cuando la CPU de tu Mac está al máximo, no puede procesar los buffers de audio lo suficientemente rápido, causando huecos que suenan como chasquidos y crepiteos.</p>

<p><strong>Verifica:</strong> Abre Monitor de Actividad (Aplicaciones → Utilidades) y mira la pestaña CPU. Si ves uso de CPU consistentemente alto (80%+), probablemente esa es la causa.</p>

<p><strong>Solución:</strong> Cierra apps innecesarias, especialmente las que consumen muchos recursos como navegadores con muchas pestañas, editores de video o máquinas virtuales. Si un proceso específico está usando CPU excesiva, considera si se está comportando normalmente o necesita reiniciarse.</p>

<h2>3. Problemas de audio Bluetooth</h2>

<p>Bluetooth es la fuente más común de crepiteos para usuarios de auriculares y altavoces inalámbricos. Varias cosas pueden causarlo:</p>

<ul>
  <li><strong>Interferencia:</strong> WiFi, dispositivos USB 3.0 y otros dispositivos Bluetooth pueden interferir con tu conexión de audio. Prueba a acercarte a tu Mac o eliminar fuentes de interferencia.</li>
  <li><strong>Cambio de códec:</strong> Cuando una app activa tu micrófono, macOS cambia del códec AAC al SCO. Esta transición puede causar un breve crepiteo o chasquido.</li>
  <li><strong>Congestión Bluetooth:</strong> Si tienes muchos dispositivos Bluetooth conectados simultáneamente, la radio puede tener dificultades. Desconecta los dispositivos que no estés usando.</li>
</ul>

<p><strong>Solución:</strong> Restablece Bluetooth manteniendo Shift+Option, haciendo clic en el icono Bluetooth de la barra de menús y seleccionando "Restablecer el módulo Bluetooth" (si está disponible). Alternativamente, elimina el dispositivo de los ajustes Bluetooth y vuelve a emparejarlo.</p>

<h2>4. Incompatibilidad de tasa de muestreo</h2>

<p>Si tu dispositivo de salida de audio funciona a una tasa de muestreo diferente al audio que se reproduce, macOS tiene que remuestrear en tiempo real. Este remuestreo puede introducir artefactos — especialmente con tamaños de buffer bajos.</p>

<p><strong>Verifica:</strong> Abre Configuración de Audio MIDI (Aplicaciones → Utilidades), selecciona tu dispositivo de salida y comprueba la tasa de muestreo. Las tasas comunes son 44,1 kHz (calidad CD) y 48 kHz (estándar de video/streaming).</p>

<p><strong>Solución:</strong> Establece la tasa de muestreo para que coincida con tu caso de uso más común. Para música: 44,1 kHz. Para video/streaming: 48 kHz. Si usas una interfaz de audio USB, consulta su documentación para la tasa de muestreo y tamaño de buffer óptimos.</p>

<h2>5. Problemas de buffer con dispositivos de audio USB</h2>

<p>Los dispositivos de audio USB externos (DACs, interfaces de audio, auriculares USB) pueden crepitar si el tamaño del buffer es demasiado pequeño para la carga actual de tu sistema.</p>

<p><strong>Solución:</strong> En Configuración de Audio MIDI, selecciona tu dispositivo USB y prueba a aumentar el tamaño del buffer (si la opción está disponible). En aplicaciones de audio como Logic, Ableton o GarageBand, aumenta el tamaño del buffer I/O en las preferencias de audio. Un buffer más grande significa ligeramente más latencia pero menos fallos de audio.</p>

<h2>6. Regresión por actualización de macOS</h2>

<p>Algunas actualizaciones de macOS introducen bugs de audio. Esto ha ocurrido con casi cada lanzamiento importante de macOS — Catalina, Big Sur, Monterey, Ventura, Sonoma, Sequoia y Tahoe han tenido reportes de crepiteos de audio después del lanzamiento inicial.</p>

<p><strong>Solución:</strong> Comprueba si Apple ha lanzado una actualización menor (ej. 15.0.1, 15.1) que aborde los problemas de audio. También puedes consultar los Foros de Desarrolladores de Apple y Reddit para ver si otros usuarios experimentan el mismo problema. Si es un bug conocido de macOS, una corrección suele llegar en una o dos actualizaciones menores.</p>

<h2>7. Extensiones del kernel o plugins de audio</h2>

<p>Los controladores de audio de terceros, dispositivos de audio virtuales o plugins de audio pueden entrar en conflicto con el stack de audio nativo de macOS. Esto es especialmente común con software de audio antiguo que usa extensiones del kernel (kexts) obsoletas en versiones recientes de macOS.</p>

<p><strong>Solución:</strong> Comprueba si tienes algún software de audio de terceros instalado: Soundflower, BlackHole, Loopback o controladores de interfaces de audio antiguos. Prueba a desactivarlos o desinstalarlos temporalmente para ver si los crepiteos se detienen. Si lo hacen, busca versiones actualizadas compatibles con tu versión de macOS.</p>

<h2>Gestionando la calidad de audio con SoundDial</h2>

<p>Aunque SoundDial no soluciona directamente los crepiteos de hardware o a nivel del sistema, puede ayudarte a gestionar el audio de formas que reduzcan el problema:</p>

<ul>
  <li><strong>Reduce las fuentes de audio competidoras:</strong> Usa SoundDial para silenciar apps que no estés usando activamente. Menos flujos de audio simultáneos significa menos presión de CPU en el procesamiento de audio.</li>
  <li><strong>Amplificación de volumen en lugar del máximo del sistema:</strong> Si estás ejecutando el volumen del sistema al 100% y aún empujando apps más fuerte, la ruta de audio está trabajando al límite. Usa la amplificación por app de <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> para amplificar apps específicas al 200% mientras mantienes el volumen del sistema a un 70-80% más cómodo. Esto puede reducir la distorsión a nivel de la salida del sistema.</li>
  <li><strong>Cambio rápido de dispositivo de salida:</strong> Si los crepiteos están relacionados con un dispositivo de salida específico, SoundDial te permite cambiar dispositivos desde su panel en la barra de menús sin buscar en Ajustes del Sistema.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "teams-volume-too-low-mac": {
    slug: "teams-volume-too-low-mac",
    title: "¿Volumen de Microsoft Teams demasiado bajo en Mac? Todas las soluciones que funcionan",
    description:
      "¿Apenas puedes escuchar a la gente en Teams incluso al máximo? Aquí tienes cada causa — desde ajustes de Teams hasta códecs Bluetooth — y cómo amplificar el audio de la llamada más allá del 100%.",
    date: "2026-06-04",
    readTime: "7 min de lectura",
    content: `
<p>Estás en una reunión de Teams. Tu compañero está presentando, pero su voz suena como si llegara a través de una lata desde tres habitaciones de distancia. Tu volumen del Mac está al 100%. El volumen de Teams está al 100%. Has subido todo lo que puedes encontrar. Sigue demasiado bajo.</p>

<p>El volumen bajo en Microsoft Teams es una de las quejas de audio más comunes del Mac en entornos corporativos. Las causas son diferentes a Zoom, y algunas de las soluciones son específicas de Teams. Vamos a repasar todas.</p>

<h2>1. Verifica los ajustes de audio de Teams</h2>

<p>Haz clic en tu icono de perfil en Teams → Ajustes → Dispositivos (o Ajustes → Dispositivos de audio en el nuevo Teams).</p>
<ul>
  <li>Asegúrate de que el dispositivo de <strong>altavoz</strong> correcto esté seleccionado — no un monitor desconectado o un dispositivo Bluetooth inactivo</li>
  <li>Usa la función "Hacer una llamada de prueba" para verificar que el audio funciona a un volumen razonable</li>
  <li>Comprueba que la "Supresión de ruido" no esté en "Alta" — la supresión de ruido agresiva puede reducir el volumen percibido de la voz</li>
</ul>

<h2>2. Nuevo Teams vs. Teams clásico</h2>

<p>Microsoft reemplazó "Teams clásico" con "Nuevo Teams" (construido sobre un framework diferente). La nueva versión maneja el audio de forma diferente. Si migraste recientemente:</p>
<ul>
  <li>Los ajustes del dispositivo de audio pueden no haberse transferido — vuelve a verificar tu selección de altavoces</li>
  <li>El nuevo Teams usa procesamiento de audio WebRTC, que puede comportarse diferente a la versión clásica</li>
  <li>Prueba a desactivar el "Modo música" si está activado (Ajustes → Dispositivos de audio) — cambia cómo Teams procesa el audio entrante</li>
</ul>

<h2>3. Cambio de códec Bluetooth</h2>

<p>Si usas AirPods o auriculares Bluetooth, unirte a una llamada de Teams fuerza a macOS a cambiar del códec AAC de alta calidad al códec SCO de menor calidad (porque Teams activa tu micrófono). SCO reduce significativamente la calidad y el volumen del audio.</p>

<p><strong>Solución:</strong> Usa el micrófono integrado de tu Mac o un micrófono USB mientras mantienes los auriculares Bluetooth como dispositivo de salida. Ve a Teams → Ajustes → Dispositivos → Micrófono y selecciona "Micrófono del MacBook Pro" (o tu micrófono USB). Esto evita el cambio de códec, manteniendo tus auriculares en modo AAC de alta calidad.</p>

<h2>4. Verifica el dispositivo de salida y el volumen de macOS</h2>

<p>Ve a Ajustes del Sistema → Sonido → Salida. Verifica que el dispositivo correcto esté seleccionado y el volumen de salida esté al máximo. También verifica:</p>
<ul>
  <li><strong>Seguridad de auriculares:</strong> Ajustes del Sistema → Sonido → Seguridad de auriculares. Si "Reducir audio fuerte" está activado, está limitando el volumen de tus auriculares.</li>
  <li><strong>Balance:</strong> Asegúrate de que el control de balance izquierda-derecha esté centrado — si está desviado, un lado será más bajo.</li>
</ul>

<h2>5. Reinicia Core Audio</h2>

<p>El demonio de audio de macOS a veces se queda atascado a un nivel de salida bajo después de la suspensión, cambio de dispositivos o actualizaciones de Teams. Abre Terminal y ejecuta:</p>
<p><code>sudo killall coreaudiod</code></p>
<p>El audio se reinicia después de una breve interrupción. Vuelve a unirte a la reunión de Teams y comprueba si el volumen ha mejorado.</p>

<h2>6. Amplifica el volumen de Teams más allá del 100%</h2>

<p>Si todos los ajustes están al máximo y Teams sigue demasiado bajo — quizás un participante tiene un micrófono deficiente o el audio de la reunión es inherentemente bajo — necesitas amplificar más allá de lo que macOS normalmente permite.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> te permite amplificar el volumen de cualquier app al <strong>200%</strong>, incluyendo Microsoft Teams. Arrastra el control de Teams al 150% o 180% y el audio se amplifica en tiempo real. Solo Teams se amplifica — tu música, navegador y otras apps permanecen a sus niveles actuales.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial amplificando el volumen de llamada de Microsoft Teams más allá del 100% en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>SoundDial también ayuda con el problema inverso: si los sonidos de notificación de Teams son demasiado fuertes durante el tiempo de concentración, baja Teams al 15% o siléncialo completamente mientras tu música sigue sonando. Un clic para silenciar, un clic para restaurar.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "how-to-control-per-app-volume-on-mac": {
    slug: "how-to-control-per-app-volume-on-mac",
    title: "Cómo controlar el volumen por app en Mac",
    description:
      "macOS te da un solo control de volumen para todo. Aquí te explicamos cómo obtener controles de volumen individuales para cada app — y por qué importa más de lo que crees.",
    date: "2026-05-20",
    readTime: "7 min de lectura",
    content: `
<p>Estás en una videollamada. Slack no para de sonar. La música suena de fondo. Pulsas la tecla de volumen y — todo se vuelve más silencioso. La llamada, la música, las notificaciones. macOS tiene exactamente un control de volumen, y controla todo a la vez.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<p>Windows ha tenido un mezclador de volumen por app desde Vista en 2006. Veinte años después, macOS sigue sin tenerlo. Si quieres bajar Spotify sin afectar tu llamada de Zoom, Apple no tiene respuesta integrada para ti.</p>

<p>Esta guía explica qué es el control de volumen por app, por qué macOS no lo tiene y cómo conseguirlo.</p>

<h2>Qué significa realmente el volumen por app</h2>

<p>El volumen por app significa que cada aplicación de tu Mac tiene su propio control de volumen independiente. Puedes poner Spotify al 30%, mantener Zoom al 100%, silenciar Slack completamente y dejar Safari al 50% — todo al mismo tiempo. Cambiar el volumen de una app no afecta en absoluto a ninguna otra.</p>

<p>Esto es diferente del volumen del sistema, que es un único control maestro que escala todo proporcionalmente. Si el volumen del sistema está al 50% y Spotify suena a todo volumen, no hay forma de bajar solo Spotify sin un mezclador por app.</p>

<h2>Por qué macOS no incluye esto</h2>

<p>La arquitectura de audio de Apple (Core Audio) soporta absolutamente el control de volumen por app a nivel de framework. El motivo por el que macOS no lo expone en la interfaz es una decisión de filosofía de diseño: Apple prefiere menos controles y una superficie más simple. Un control es más sencillo que doce.</p>

<p>El problema es que "más simple" deja de ser más simple en el momento en que tienes más de una fuente de audio compitiendo por tu atención. Una sola tecla de volumen que controla todo es elegante cuando haces una sola cosa. Es activamente hostil cuando estás en una llamada con música y notificaciones al mismo tiempo — que es como la mayoría de la gente usa su Mac en la realidad.</p>

<h2>Las alternativas integradas (y por qué no funcionan)</h2>

<h3>1. Controles de volumen dentro de las apps</h3>
<p>Algunas apps tienen sus propios controles de volumen — Spotify, VLC, QuickTime. Pero la mayoría no. Slack no. Las pestañas de Chrome no. Los sonidos del sistema no. E incluso cuando una app tiene un control, tienes que abrir esa app, encontrar el control, ajustarlo y volver a lo que estabas haciendo. Son cinco clics para algo que debería ser uno.</p>

<h3>2. Configuración de Audio MIDI</h3>
<p>macOS incluye la Configuración de Audio MIDI en la carpeta Utilidades. Permite configurar dispositivos de audio y crear dispositivos agregados, pero no tiene ningún control de volumen por app. Es una herramienta de configuración de dispositivos, no un mezclador.</p>

<h3>3. Múltiples dispositivos de salida</h3>
<p>Teóricamente podrías enrutar diferentes apps a diferentes dispositivos de salida (auriculares vs altavoces) y controlar esos dispositivos por separado. Pero eso requiere hardware adicional, enrutamiento manual por app, y en realidad no te da volumen independiente — solo on/off independiente por dispositivo.</p>

<h2>Cómo funciona un mezclador de volumen por app</h2>

<p>Un mezclador de volumen por app adecuado se sienta en tu barra de menús y muestra cada app que actualmente produce audio. Cada app tiene su propio control. Lo arrastras hacia arriba o hacia abajo, y solo cambia el volumen de esa app. El volumen del sistema permanece intacto.</p>

<p>Internamente, esto funciona usando la <strong>API Core Audio Tap</strong> de macOS (introducida en macOS 14) o técnicas antiguas de dispositivos de audio virtuales para interceptar el flujo de audio de cada app de forma independiente y escalar su amplitud antes de que llegue a los altavoces.</p>

<p>Las características clave que separan un buen mezclador de uno malo:</p>

<ul>
  <li><strong>Detección de apps en tiempo real.</strong> Cuando una nueva app empieza a reproducir audio, debe aparecer en el mezclador automáticamente. Sin configuración manual.</li>
  <li><strong>Silencio por app.</strong> Un clic para silenciar una app específica sin tocar su posición de control.</li>
  <li><strong>Amplificación de volumen.</strong> Algunas apps (mirándote a ti, reproductores de podcasts silenciosos) llegan al máximo demasiado bajo. Un buen mezclador permite amplificar más allá del 100%.</li>
  <li><strong>Perfiles.</strong> Diferentes configuraciones de volumen para diferentes situaciones — "Concentración" con todo silenciado excepto la música, "Reunión" con Zoom al 100% y todo lo demás al 20%, "Juegos" con el audio del juego amplificado.</li>
  <li><strong>Atenuación automática.</strong> Bajar automáticamente la música cuando comienzas una llamada, y subirla cuando termina. Esto solo ya vale toda la app.</li>
  <li><strong>Nativo en la barra de menús.</strong> Debe vivir en la barra de menús, no en una ventana del Dock. Miras arriba, ajustas y vuelves al trabajo. Sin cambiar de app.</li>
</ul>

<h2>Quién necesita esto</h2>

<p>Cualquiera que haga más de una cosa de audio a la vez. Eso es la mayoría, pero especialmente:</p>

<ul>
  <li><strong>Trabajadores remotos</strong> — llamadas + música + notificaciones es la colisión más común</li>
  <li><strong>Streamers y podcasters</strong> — control preciso sobre lo que escucha el público vs. lo que escuchas tú</li>
  <li><strong>Músicos y productores</strong> — necesitan aislar la salida del DAW de las pistas de referencia y las herramientas de comunicación</li>
  <li><strong>Jugadores</strong> — el audio del juego vs. Discord vs. música es un equilibrio constante</li>
  <li><strong>Cualquiera con fatiga de notificaciones</strong> — silencia Slack, mantén todo lo demás</li>
</ul>

<h2>SoundDial</h2>

<p>Creé <strong>SoundDial</strong> porque el mezclador de volumen para Mac que quería no existía. Se sienta en tu barra de menús, muestra cada app que está produciendo sonido y le da a cada una su propio control. Silencio por app, amplificación de volumen, perfiles y atenuación automática que baja tu música cuando comienza una llamada. Compra única, macOS 14+, sin suscripción.</p>

<p>El mezclador de volumen que macOS debería tener integrado.</p>
`,
  },
  "mute-slack-notifications-mac-without-muting-everything": {
    slug: "mute-slack-notifications-mac-without-muting-everything",
    title: "Cómo silenciar Slack en Mac sin silenciar todo lo demás",
    description:
      "Las notificaciones de Slack siguen interrumpiendo tu concentración, pero no quieres silenciar tu música o llamadas. Aquí te explicamos cómo silenciar solo Slack en macOS.",
    date: "2026-05-24",
    readTime: "5 min de lectura",
    content: `
<p>Estás en plena concentración. Spotify está reproduciendo la playlist perfecta para concentrarse. Entonces — <em>knock brush</em> — Slack suena. Y otra vez. Y otra vez. Tres canales, dos mensajes directos y una notificación de hilo en treinta segundos. Quieres silenciar Slack pero mantener tu música. macOS dice: silencia todo o no silencies nada.</p>

<p>Los sonidos de notificación de Slack son una de las principales quejas de audio de los trabajadores remotos en Mac. Están diseñados para captar tu atención, que es exactamente el problema cuando necesitas concentrarte.</p>

<h2>Opción 1: Silenciar notificaciones en el propio Slack</h2>

<p>Slack tiene una función de "Pausar notificaciones":</p>
<ol>
  <li>Haz clic en tu foto de perfil en la barra lateral de Slack</li>
  <li>Haz clic en "Pausar notificaciones"</li>
  <li>Elige una duración (30 min, 1 hora, 2 horas, etc.)</li>
</ol>

<p>Esto suprime los badges y sonidos de notificación durante el tiempo seleccionado. También puedes silenciar canales individuales haciendo clic derecho → "Silenciar canal".</p>

<p><strong>Limitación:</strong> Esto es todo o nada por canal. No puedes hacer Slack <em>más silencioso</em> — solo completamente silenciado o completamente activo. Y si olvidas reactivarlo, te pierdes mensajes después de tu sesión de concentración. Tampoco suprime los sonidos internos de Slack si tienes la app abierta.</p>

<h2>Opción 2: Desactivar los sonidos de Slack en las notificaciones de macOS</h2>

<p>Ve a Ajustes del Sistema → Notificaciones → Slack. Desactiva "Reproducir sonido para notificaciones".</p>

<p><strong>Limitación:</strong> Esto elimina todos los sonidos de notificación de Slack de forma permanente (hasta que lo vuelvas a activar). Y solo afecta a las notificaciones a nivel de macOS — si Slack reproduce sonidos a través de su propio motor de audio, la configuración de notificaciones puede no captarlos todos.</p>

<h2>Opción 3: Usar un modo de Concentración</h2>

<p>Crea un modo de Concentración "Concentración" o "Trabajo" en Ajustes del Sistema → Concentración. Añade Slack a la lista de "Silenciados". Cuando activas el modo de Concentración, las notificaciones de Slack se suprimen.</p>

<p><strong>Limitación:</strong> Los modos de Concentración suprimen las notificaciones visual y auditivamente, pero no te dan control de volumen detallado. No puedes decir "notificaciones de Slack al 10% de volumen" — es o completamente permitido o completamente silenciado.</p>

<h2>Opción 4: Control de volumen por app (la solución real)</h2>

<p>Lo que realmente quieres es simple: bajar el volumen de Slack al 10-15% mientras mantienes todo lo demás a niveles normales. Los pings de Slack son audibles si los estás buscando, pero no interrumpen tu flujo. La música se mantiene a volumen completo. Las llamadas se mantienen a volumen completo.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> le da a Slack su propio control de volumen independiente. Ponlo al nivel que funcione para ti — o siléncialo completamente con un clic. Cuando estés listo para prestar atención a Slack de nuevo, dessiléncialo y el volumen vuelve a donde estaba.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial con Slack silenciado y Spotify reproduciendo a volumen normal en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>El flujo de trabajo ideal con Slack</h3>
<ul>
  <li><strong>Tiempo de concentración:</strong> Slack al 10% o silenciado. Spotify al 40%. Sin interrupciones.</li>
  <li><strong>Tiempo disponible:</strong> Slack al 40%. Las notificaciones son perceptibles sin ser sobresaltadoras.</li>
  <li><strong>Tiempo de reunión:</strong> Slack silenciado. Zoom al 100%. La atenuación automática se encarga del resto.</li>
</ul>

<p>Guarda cada uno de estos como un <strong>perfil de volumen</strong> en SoundDial y cambia entre ellos con un clic. Mejor aún, usa la atenuación automática — cuando comienza una llamada, SoundDial baja automáticamente todo (incluido Slack) y lo restaura cuando termina la llamada.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "volume-profiles-for-mac": {
    slug: "volume-profiles-for-mac",
    title: "Cómo configurar perfiles de volumen para diferentes situaciones en Mac",
    description:
      "Diferentes configuraciones de volumen para reuniones, trabajo concentrado, juegos y descanso — cambiables con un clic. Así funcionan los perfiles de volumen en macOS.",
    date: "2026-06-02",
    readTime: "5 min de lectura",
    content: `
<p>A las 9 AM estás en una llamada de Zoom — quieres Zoom al 100%, Spotify silenciado, Slack silenciado. A las 10 AM termina la llamada — quieres Spotify al 40%, Slack al 15%, Zoom no importa. Al mediodía estás jugando — juego al 60%, Discord al 100%, todo lo demás silenciado. A las 6 PM estás viendo YouTube — navegador al 80%, todo lo demás tranquilo.</p>

<p>Cada situación tiene una configuración de volumen ideal diferente. Y cada vez que la situación cambia, tendrías que ajustar cinco o seis apps manualmente. O podrías guardar cada configuración como un perfil y cambiar con un clic.</p>

<h2>¿Qué son los perfiles de volumen?</h2>

<p>Un perfil de volumen es una instantánea guardada del volumen y estado de silencio de cada app. Configuras tus apps como las quieres — Spotify al 30%, Zoom al 100%, Slack silenciado — luego guardas eso como un perfil con nombre como "Trabajo" o "Reunión". Después, aplicas el perfil y cada app salta instantáneamente a su nivel de volumen guardado.</p>

<p>Piénsalo como preajustes de pantalla para el audio: igual que podrías tener una disposición de pantalla para "escritorio" vs "modo presentación", los perfiles de volumen te permiten cambiar entre configuraciones de audio sin ajustar manualmente cada app.</p>

<h2>macOS no tiene perfiles de volumen</h2>

<p>macOS tiene modos de Concentración (No molestar, Trabajo, Personal, etc.) que controlan qué notificaciones llegan. Pero los modos de Concentración no controlan los niveles de volumen. Pueden suprimir los sonidos de notificación completamente, pero no pueden poner Spotify al 30% o Zoom al 100%. No hay forma integrada de guardar y restaurar configuraciones de volumen por app.</p>

<h2>Configurar perfiles con SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> incluye un sistema de perfiles integrado. Aquí te explicamos cómo configurarlo:</p>

<h3>Crear un perfil</h3>
<ol>
  <li>Abre SoundDial desde la barra de menús</li>
  <li>Ajusta el volumen de cada app como la quieras para una situación específica</li>
  <li>Haz clic en el botón "+" en la sección de perfiles</li>
  <li>Dale un nombre (por ejemplo, "Reunión") y elige un icono</li>
  <li>Listo — tu configuración de volumen actual está guardada</li>
</ol>

<h3>Cambiar de perfil</h3>
<p>Tus perfiles guardados aparecen como botones en el panel emergente de SoundDial. Haz clic en uno y cada app cambia instantáneamente a los volúmenes guardados en ese perfil. Un clic reemplaza cinco o seis ajustes manuales.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Perfiles de volumen de SoundDial — cambio con un clic entre modos Reunión, Concentración y Relax en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Perfiles de ejemplo</h3>

<p><strong>Reunión</strong></p>
<ul>
  <li>Zoom / Teams: 100%</li>
  <li>Spotify: silenciado</li>
  <li>Slack: silenciado</li>
  <li>Navegador: silenciado</li>
</ul>

<p><strong>Trabajo concentrado</strong></p>
<ul>
  <li>Spotify: 35%</li>
  <li>Slack: 10%</li>
  <li>Mail: silenciado</li>
  <li>Navegador: 50%</li>
</ul>

<p><strong>Juegos</strong></p>
<ul>
  <li>Juego: 60%</li>
  <li>Discord: 100%</li>
  <li>Spotify: 20%</li>
  <li>Todo lo demás: silenciado</li>
</ul>

<p><strong>Relax</strong></p>
<ul>
  <li>Spotify: 70%</li>
  <li>Navegador: 60%</li>
  <li>Notificaciones: 20%</li>
</ul>

<h3>Actualizar perfiles</h3>
<p>Si tus volúmenes preferidos cambian con el tiempo, simplemente ajusta los controles y actualiza el perfil. La próxima vez que lo apliques, usará la nueva configuración.</p>

<h2>Perfiles + atenuación automática = totalmente automático</h2>

<p>Combina los perfiles con la función de atenuación automática de SoundDial y raramente necesitarás tocar el volumen. Aplica tu perfil de "Trabajo concentrado" por la mañana. Cuando entra una llamada, la atenuación automática baja todo excepto la app de llamada. Cuando termina la llamada, todo vuelve a los niveles de tu perfil. Al final del día, cambia a "Relax" con un clic.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "zoom-call-volume-too-low-mac": {
    slug: "zoom-call-volume-too-low-mac",
    title: "¿Volumen de llamada Zoom demasiado bajo en Mac? Cómo amplificarlo",
    description:
      "Apenas puedes escuchar a la gente en Zoom incluso al máximo. Aquí tienes todas las soluciones — desde los ajustes de Zoom hasta amplificar el audio de la llamada más allá del 100% con un mezclador de volumen por app.",
    date: "2026-05-26",
    readTime: "6 min de lectura",
    content: `
<p>Estás en una llamada de Zoom. La otra persona está hablando, pero su voz apenas se escucha. El volumen de tu Mac está al máximo. El volumen del altavoz de Zoom está al máximo. Te inclinas hacia la pantalla, esforzándote por escuchar. Esto no debería ser tan difícil.</p>

<p>El volumen bajo en llamadas de Zoom es extremadamente común, y tiene múltiples causas. Repasemos cada solución, desde comprobaciones simples de configuración hasta amplificar el audio de Zoom más allá de su límite normal.</p>

<h2>1. Verifica los ajustes de salida de audio de Zoom</h2>

<p>Abre Zoom → Configuración → Audio. En "Altavoz", asegúrate de que:</p>
<ul>
  <li>El dispositivo de salida correcto esté seleccionado (no un monitor inactivo o dispositivo desconectado)</li>
  <li>El control de volumen del altavoz esté al máximo</li>
  <li>Haz clic en "Probar altavoz" para verificar que puedes escuchar el tono de prueba claramente</li>
</ul>

<p>Si el tono de prueba también es silencioso, el problema está entre Zoom y tus altavoces — continúa con las soluciones a continuación. Si el tono de prueba es normal pero las llamadas reales son silenciosas, el otro participante probablemente tiene un problema de micrófono en su lado.</p>

<h2>2. Verifica el dispositivo de salida de tu Mac</h2>

<p>Ve a Ajustes del Sistema → Sonido → Salida. Asegúrate de que el dispositivo correcto esté seleccionado. Si has conectado o desconectado recientemente auriculares, una pantalla o dispositivos Bluetooth, macOS puede haber cambiado automáticamente a una salida inesperada.</p>

<h2>3. Desactiva el ajuste automático de volumen de Zoom</h2>

<p>Zoom tiene un ajuste de "Ajustar automáticamente el volumen del micrófono" (Configuración → Audio) que también puede afectar los niveles de salida percibidos en algunas configuraciones. Intenta desactivarlo y vuelve a probar.</p>

<h2>4. Desactiva la supresión de ruido de fondo (temporalmente)</h2>

<p>La supresión de ruido de Zoom filtra agresivamente el ruido de fondo — pero al hacerlo, a veces puede reducir el volumen percibido de la voz de la otra persona, especialmente en entornos silenciosos. Intenta configurar "Suprimir ruido de fondo" en "Bajo" o "Auto" en lugar de "Alto".</p>

<h2>5. Verifica el códec Bluetooth</h2>

<p>Si usas AirPods o auriculares Bluetooth, unirse a una llamada de Zoom fuerza a macOS a cambiar del códec AAC de alta calidad al códec SCO de menor calidad (porque Zoom usa tu micrófono). SCO reduce la calidad del audio y puede hacer que el audio de la llamada suene más silencioso y más comprimido.</p>

<p><strong>Solución:</strong> Usa un micrófono separado (micrófono integrado del Mac o micrófono USB) mientras mantienes los AirPods como dispositivo de salida. Esto evita el cambio de códec — los AirPods se mantienen en modo AAC con mejor calidad de audio y volumen.</p>

<h2>6. Reinicia Core Audio</h2>

<p>El demonio de audio de macOS a veces entra en un estado donde los niveles de salida se reducen, especialmente después de ciclos de suspensión/activación o cambios de dispositivos. Abre Terminal y ejecuta:</p>
<p><code>sudo killall coreaudiod</code></p>
<p>El audio se reiniciará después de una breve interrupción. Vuelve a unirte a la llamada de Zoom y comprueba si el volumen ha mejorado.</p>

<h2>7. Amplifica el volumen de Zoom más allá del 100%</h2>

<p>Si has probado todo lo anterior y Zoom sigue siendo demasiado silencioso, el problema puede ser que la salida de audio de Zoom simplemente no es suficientemente alta para tu configuración. Algunos participantes tienen micrófonos silenciosos, y solo hay tanto que Zoom puede hacer para amplificar su señal.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> te permite amplificar el volumen de cualquier app al <strong>200%</strong> — incluyendo Zoom. Si un participante es demasiado silencioso, arrastra el control de Zoom al 150% o 180%. La señal de audio se amplifica más allá del máximo integrado de Zoom, haciendo audibles incluso las voces más silenciosas.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial amplificando el volumen de llamada de Zoom al 180% en Mac para audio más claro durante videollamadas" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>La ventaja clave: amplificar Zoom no afecta a nada más. Tu música, notificaciones y otras apps se mantienen a sus niveles actuales. Solo Zoom se vuelve más alto.</p>

<p>Esto también funciona para <strong>Microsoft Teams, Google Meet, FaceTime, Discord, Slack huddles, Webex</strong> y cualquier otra app de llamadas. Si puedes escucharlo, SoundDial puede amplificarlo.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "lower-spotify-without-lowering-everything-mac": {
    slug: "lower-spotify-without-lowering-everything-mac",
    title: "Cómo bajar Spotify sin bajar todo lo demás en Mac",
    description:
      "Quieres Spotify como música de fondo, pero bajarla con las teclas de volumen también baja tu llamada y todo lo demás. Esta es la solución.",
    date: "2026-05-30",
    readTime: "4 min de lectura",
    content: `
<p>Estás trabajando. Spotify está reproduciendo música de fondo. Está un poco alta — compitiendo con el podcast en otra pestaña o dificultando la concentración. Pulsas la tecla de bajar volumen. Spotify se vuelve más silenciosa. Pero también todo lo demás — tu llamada de Zoom, los sonidos de notificación, el audio del navegador. Todo más silencioso. Eso no era lo que querías.</p>

<p>Esto sucede porque macOS tiene un solo control de volumen. Pulsa la tecla de volumen y ajusta el <em>volumen del sistema</em>, que escala cada app por igual. No hay forma de decir "solo baja Spotify" con los controles integrados.</p>

<h2>La solución alternativa: el volumen interno de Spotify</h2>

<p>Spotify tiene su propio control de volumen en la esquina inferior derecha de la app (o en la parte inferior del reproductor). Puedes bajarlo independientemente del volumen del sistema. Si tu sistema está al 80% y el control de Spotify está al 30%, Spotify reproducirá efectivamente al 24% mientras todo lo demás se mantiene al 80%.</p>

<p><strong>El problema:</strong> Tienes que cambiar a la ventana de Spotify, encontrar el control, ajustarlo y volver a lo que estabas haciendo. Y el control de Spotify es pequeño, impreciso y no muestra un porcentaje — solo una barra visual. Si estás en una reunión y necesitas bajar rápidamente tu música, lidiar con un pequeño control en otra app no es ideal.</p>

<h2>La solución real: control de volumen por app</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> pone un control de volumen para cada app en tu barra de menús. Para bajar Spotify sin afectar a nada más:</p>

<ol>
  <li>Haz clic en el icono de SoundDial en la barra de menús</li>
  <li>Encuentra Spotify en la lista</li>
  <li>Arrastra su control hacia abajo</li>
</ol>

<p>Listo. Spotify está más silenciosa. Zoom sin cambios. Las notificaciones sin cambios. Todo lo demás sin cambios. No abandonaste tu app actual — el panel emergente de la barra de menús se abre justo donde estás.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial bajando el volumen de Spotify de forma independiente mientras mantiene otras apps a volumen completo en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Aún mejor: guárdalo como perfil</h2>

<p>Si regularmente quieres Spotify a un nivel de fondo más bajo mientras trabajas, guarda tu configuración de volumen preferida como perfil. Crea un perfil de "Trabajo" con Spotify al 25%, Zoom al 100% y Slack al 15%. La próxima vez que te sientes a trabajar, aplica el perfil con un clic en lugar de ajustar cada app individualmente.</p>

<h2>Aún mejor: atenuación automática durante las llamadas</h2>

<p>SoundDial puede bajar automáticamente Spotify cuando te unes a una llamada. Activa la atenuación automática en los ajustes, elige cuánto reducir el audio de fondo (predeterminado 30%) y SoundDial se encarga del resto. Tu música se atenúa cuando comienza la llamada y vuelve cuando termina. Sin ajuste manual en absoluto.</p>

<p>Este es el flujo de trabajo que macOS debería soportar de forma nativa: "Spotify a este nivel, todo lo demás a ese nivel". Como Apple no lo ha incorporado, <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> llena el hueco.</p>

<p>Compra única en la <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Sin suscripción. macOS 14.2+.</p>
`,
  },
  "macos-tahoe-per-app-volume-control": {
    slug: "macos-tahoe-per-app-volume-control",
    title: "¿Tiene macOS Tahoe control de volumen por app?",
    description:
      "macOS Tahoe (macOS 26) trajo grandes actualizaciones, ¿pero finalmente añadió Apple un mezclador de volumen? Esta es la respuesta — y cómo obtener control de volumen por app ahora mismo.",
    date: "2026-06-12",
    readTime: "4 min de lectura",
    content: `
<p>Cada año, los usuarios de Mac esperan que la próxima versión de macOS incluya finalmente un mezclador de volumen. Cada año, se decepcionan. Con macOS Tahoe (macOS 26), Apple entregó una interfaz rediseñada, nuevas funciones del sistema y mejoras importantes bajo el capó. Pero, ¿añadieron control de volumen por app?</p>

<h2>La respuesta corta: no</h2>

<p>macOS Tahoe no incluye un mezclador de volumen integrado. No hay control de volumen por app en Ajustes del Sistema, Centro de Control o la barra de menús. La experiencia de audio es la misma que en cada versión anterior de macOS: un control de volumen del sistema que controla todo a la vez.</p>

<p>El Centro de Control de Apple sigue mostrando un único control de volumen. Las preferencias de Sonido en Ajustes del Sistema siguen permitiéndote elegir un dispositivo de salida y ajustar un volumen maestro. No hay función oculta, opción avanzada, ni nueva API que exponga el volumen por app a los usuarios.</p>

<h2>Lo que macOS Tahoe sí mejoró en audio</h2>

<p>Aunque el volumen por app sigue faltando, Tahoe sí trajo algunas mejoras relacionadas con el audio:</p>

<ul>
  <li><strong>Mejor estabilidad de audio Bluetooth</strong> — menos desconexiones y problemas de cambio de códec con AirPods y auriculares de terceros</li>
  <li><strong>Mejor procesamiento de audio espacial</strong> — seguimiento de cabeza mejorado y renderizado espacial más preciso para contenido compatible</li>
  <li><strong>Rendimiento de Core Audio</strong> — menor latencia para aplicaciones de audio profesional y producción musical</li>
</ul>

<p>Ninguno de estos aborda la solicitud fundamental: "Déjame bajar Spotify sin afectar Zoom".</p>

<h2>¿Añadirá Apple alguna vez un mezclador de volumen?</h2>

<p>No hay indicación de que Apple planee añadir esta función. No ha aparecido en ninguna beta de macOS, sesión de WWDC o hoja de ruta conocida. La filosofía de diseño de audio de Apple continúa favoreciendo la simplicidad — un control para todo.</p>

<p>La ironía es que el propio framework Core Audio de Apple soporta completamente la captura de audio por proceso y el control de volumen. La API de Audio Tap introducida en macOS 14 (Sonoma) facilitó aún más a los desarrolladores crear herramientas de audio por app. Apple construyó la infraestructura — simplemente no construyó la interfaz de usuario para ello.</p>

<h2>Cómo obtener control de volumen por app en macOS Tahoe</h2>

<p>Como Apple no lo construirá, las apps de terceros llenan el hueco. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> es una app nativa de macOS para la barra de menús que te proporciona un mezclador de volumen — controles de volumen independientes para cada aplicación en ejecución.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial proporcionando control de volumen por app en macOS Tahoe" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>SoundDial es totalmente compatible con macOS Tahoe y usa la moderna API Core Audio Tap de Apple — no se requieren controladores de audio de terceros ni extensiones del kernel. Funciona limpiamente con el modelo de seguridad de macOS y no interfiere con otras apps de audio.</p>

<p>Lo que obtienes:</p>
<ul>
  <li><strong>Controles de volumen por app</strong> — del 0% al 200% para cada app</li>
  <li><strong>Silencio por app</strong> — un clic para silenciar cualquier app</li>
  <li><strong>Perfiles de volumen</strong> — guarda configuraciones y cambia al instante</li>
  <li><strong>Atenuación automática</strong> — el audio de fondo se reduce automáticamente durante las llamadas</li>
  <li><strong>Amplificación de volumen</strong> — amplifica apps silenciosas más allá del 100%</li>
  <li><strong>Memoria de volumen</strong> — recuerda el volumen de cada app entre reinicios</li>
  <li><strong>Atajos de teclado</strong> — activa el mezclador o silencia todo desde el teclado</li>
</ul>

<p>Compra única en la <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Sin suscripción. macOS 14.2+.</p>
`,
  },
  "play-music-speakers-calls-headphones-mac": {
    slug: "play-music-speakers-calls-headphones-mac",
    title: "Cómo reproducir música en altavoces mientras tomas llamadas con auriculares (Mac)",
    description:
      "¿Quieres Spotify en tus altavoces de escritorio y Zoom en tus AirPods al mismo tiempo? macOS no lo facilita — esto es lo que realmente funciona.",
    date: "2026-05-15",
    readTime: "5 min de lectura",
    content: `
<p>Aquí hay algo razonable que podrías querer hacer: reproducir música a través de tus altavoces de escritorio mientras tomas una llamada de Zoom a través de tus AirPods. La música llena la habitación, la llamada es privada en tus oídos. Tiene todo el sentido.</p>

<p>macOS dice que no. Cuando seleccionas un dispositivo de salida de audio, <em>cada</em> app lo usa. Cambia a AirPods para Zoom y Spotify también cambia a AirPods. Cambia a altavoces para Spotify y Zoom también va a los altavoces. Un dispositivo de salida para todo. Sin excepciones.</p>

<h2>Por qué macOS no puede hacer esto de forma nativa</h2>

<p>macOS enruta todo el audio a través de un único dispositivo de salida seleccionado. Eliges "Altavoces del MacBook Pro" o "AirPods Pro" en Ajustes del Sistema → Sonido → Salida, y cada app envía audio a ese dispositivo. No hay enrutamiento de audio por app integrado.</p>

<p>Este diseño tiene sentido para la simplicidad — la mayoría de las personas quieren que todo su audio provenga del mismo lugar. Pero falla en el momento en que quieres apps diferentes en salidas diferentes.</p>

<h2>La solución alternativa del dispositivo agregado</h2>

<p>La Configuración de Audio MIDI de macOS (en Aplicaciones → Utilidades) te permite crear un "Dispositivo Agregado" que combina múltiples salidas en una. Sin embargo, un dispositivo agregado envía el <em>mismo audio</em> a todas las salidas combinadas — no te permite elegir qué app va a qué salida. Está diseñado para configuraciones de múltiples altavoces, no para enrutamiento por app.</p>

<h2>La solución alternativa del dispositivo de salida múltiple</h2>

<p>De manera similar a los dispositivos agregados, puedes crear un "Dispositivo de Salida Múltiple" en la Configuración de Audio MIDI. Esto envía audio idéntico a múltiples salidas simultáneamente. De nuevo, es el mismo audio en todas partes — no puedes enrutar Spotify a altavoces y Zoom a auriculares de esta manera.</p>

<h2>Lo que realmente funciona: apps de enrutamiento de audio por app</h2>

<p>Para enrutar verdaderamente diferentes apps a diferentes dispositivos de salida, necesitas una app de enrutamiento de audio de terceros que intercepte el audio de cada app y lo envíe a la salida que especifiques. Apps como SoundSource (de Rogue Amoeba) soportan esto — te permiten asignar dispositivos de salida específicos a apps individuales.</p>

<h2>Un enfoque más sencillo: separación basada en volumen</h2>

<p>Si tu objetivo principal es escuchar tu llamada claramente sobre tu música (en lugar de enrutarlas a dispositivos físicamente diferentes), el control de volumen por app resuelve el problema de forma más sencilla.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> le da a cada app su propio control de volumen. Durante una llamada, puedes:</p>

<ul>
  <li>Poner Zoom/Teams/FaceTime al <strong>100%</strong></li>
  <li>Bajar Spotify al <strong>20%</strong></li>
  <li>Silenciar todo lo demás</li>
</ul>

<p>Tu llamada es cristalina. La música es un fondo sutil. No se necesita cambiar de dispositivo.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial mostrando Zoom a volumen completo y Spotify bajado durante una llamada en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Aún mejor: la función de <strong>atenuación automática</strong> de SoundDial lo hace automáticamente. Cuando te unes a una llamada, detecta que tu micrófono se activa y baja todas las apps de fondo al nivel que configuras (predeterminado 30%). Cuando termina la llamada, todo vuelve a la normalidad. Sin ajuste manual de controles necesario.</p>

<p>Para la mayoría de las personas, esto resuelve el problema real — "no puedo escuchar mi llamada sobre mi música" — sin la complejidad de enrutar diferentes apps a diferentes dispositivos físicos.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "mac-volume-keeps-changing-by-itself": {
    slug: "mac-volume-keeps-changing-by-itself",
    title: "El volumen del Mac cambia solo: cómo solucionarlo",
    description:
      "El volumen de tu Mac sube, baja o se restablece aleatoriamente a un nivel diferente. Aquí tienes todas las causas conocidas y cómo detenerlo.",
    date: "2026-05-18",
    readTime: "6 min de lectura",
    content: `
<p>Pones tu Mac a un nivel de volumen cómodo. Miras hacia otro lado. Cuando vuelves, es diferente. Más alto. Más bajo. Restablecido al máximo. Sigue ocurriendo y no puedes entender por qué.</p>

<p>Este es uno de los problemas de audio más frustrantes del Mac porque parece aleatorio. Pero casi nunca es verdaderamente aleatorio — siempre hay un desencadenante específico. Aquí tienes todas las causas conocidas y cómo solucionar cada una.</p>

<h2>1. Reconexión de dispositivo Bluetooth</h2>

<p>Esta es la causa más común. Cuando un dispositivo Bluetooth (AirPods, altavoces, auriculares) se conecta o desconecta, macOS restablece el volumen al nivel que se usó por última vez con ese dispositivo. Así que si estabas al 30% en tus altavoces y tus AirPods se conectan automáticamente, el volumen puede saltar al 80% (el último nivel de AirPods).</p>

<p><strong>Solución:</strong> macOS recuerda los niveles de volumen por dispositivo de salida. Cada vez que cambias, ponlo donde lo quieres. Con el tiempo, se recordarán los niveles correctos para cada dispositivo. Si un dispositivo Bluetooth se conecta automáticamente de forma inesperada, ve a Ajustes del Sistema → Bluetooth y elimina los dispositivos que no uses activamente.</p>

<h2>2. Salida HDMI/DisplayPort</h2>

<p>Conectar o desconectar una pantalla externa a través de HDMI o DisplayPort puede causar cambios de volumen. Algunas pantallas también son dispositivos de salida de audio, y macOS cambia a ellas automáticamente. Cuando la pantalla se duerme o desconecta, macOS vuelve a los altavoces y puede restablecer el volumen.</p>

<p><strong>Solución:</strong> Ve a Ajustes del Sistema → Sonido → Salida y comprueba si macOS está cambiando automáticamente a los altavoces de tu pantalla. Si no quieres audio a través de tu pantalla, selecciona tu dispositivo de salida preferido manualmente. Algunas pantallas pueden tener su salida de audio desactivada en sus propios ajustes OSD (pantalla en pantalla).</p>

<h2>3. Una app está cambiando el volumen</h2>

<p>Algunas apps ajustan el volumen del sistema mediante programación. Zoom, por ejemplo, tiene un ajuste de "Ajustar automáticamente el volumen del micrófono" que también puede afectar el volumen de salida. Las apps de música, apps de podcasts y algunos juegos también pueden ajustar el volumen cuando se inician o cuando ocurren eventos específicos.</p>

<p><strong>Solución:</strong> Revisa tus apps abiertas recientemente para ver los ajustes relacionados con el audio. En Zoom: Configuración → Audio → desmarca "Ajustar automáticamente el volumen del micrófono". En Spotify: comprueba si la normalización de volumen está causando cambios de volumen percibidos (Configuración → Reproducción → Normalizar volumen).</p>

<h2>4. Pulsaciones accidentales de teclado o Touch Bar</h2>

<p>Si tienes un teclado con teclas de volumen (todos los teclados de Mac las tienen), las pulsaciones accidentales — o una tecla atascada — pueden cambiar el volumen. El Touch Bar en modelos más antiguos de MacBook Pro es particularmente propenso a cambios de volumen accidentales al rozarlo.</p>

<p><strong>Solución:</strong> Comprueba si una tecla de volumen está atascada observando el indicador de volumen mientras no tocas nada. Para los modelos con Touch Bar, personaliza el Touch Bar en Ajustes del Sistema → Teclado → Ajustes de Touch Bar para eliminar el control de volumen o moverlo a una posición menos accesible.</p>

<h2>5. Restablecimiento del demonio de audio de macOS</h2>

<p>Después de ciclos de suspensión/activación, el demonio de audio de macOS (coreaudiod) a veces se reinicia y restablece el volumen a un nivel predeterminado o almacenado en caché anteriormente. Este es un error a nivel del sistema que aparece en varias versiones de macOS.</p>

<p><strong>Solución:</strong> Si el volumen se restablece consistentemente después de despertar de la suspensión, intenta reiniciar coreaudiod manualmente:</p>
<p><code>sudo killall coreaudiod</code></p>
<p>Si el problema persiste en actualizaciones de macOS, puede resolverse en una actualización futura. Mientras tanto, usar una herramienta que recuerde y restaure los niveles de volumen por app puede compensarlo.</p>

<h2>6. Ajustes de Accesibilidad</h2>

<p>Algunas funciones de Accesibilidad pueden interferir con el audio. Comprueba Ajustes del Sistema → Accesibilidad → Audio para ver si hay ajustes inesperados. También comprueba si VoiceOver o Control de acceso por botón está parcialmente activado — estos pueden producir comportamientos de volumen inesperados.</p>

<h2>Bloquea tus volúmenes por app con SoundDial</h2>

<p>Incluso si no puedes evitar que macOS cambie el volumen del sistema, puedes proteger tu equilibrio de volumen <em>por app</em>. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> recuerda el nivel de volumen de cada app de forma independiente. Cuando una app se reinicia o cuando tu Mac despierta de la suspensión, SoundDial restaura cada app a su volumen guardado.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial recordando los niveles de volumen por app entre reinicios en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Esto significa que incluso si el volumen del sistema cambia, el equilibrio a nivel de app se mantiene constante:</p>
<ul>
  <li>Spotify se mantiene al 40% independientemente de los cambios de volumen del sistema</li>
  <li>Zoom se mantiene al 100% incluso después de reconectar Bluetooth</li>
  <li>Slack se mantiene silenciado incluso después de un reinicio</li>
</ul>

<p>Combinado con los <strong>perfiles de volumen</strong>, puedes restaurar instantáneamente tu configuración de volumen preferida para cualquier situación — un clic para volver exactamente donde quieres estar, independientemente de lo que hiciera macOS mientras no mirabas.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "best-volume-mixer-apps-mac-2026": {
    slug: "best-volume-mixer-apps-mac-2026",
    title: "Las mejores apps de mezclador de volumen para Mac en 2026",
    description:
      "Una comparación directa de todas las apps de Mac que ofrecen control de volumen por app. Características, precios y cuál realmente vale la pena usar.",
    date: "2026-06-12",
    readTime: "10 min de lectura",
    content: `
<p>macOS no tiene un mezclador de volumen integrado. Si quieres controlar el volumen de apps individuales — bajar Spotify sin afectar a Zoom, silenciar Slack sin silenciar todo — necesitas una app de terceros.</p>

<p>Hay varias opciones. Esta guía compara las más destacadas en función de características, precios, compatibilidad y usabilidad real. Sin enlaces de afiliados, sin selecciones patrocinadas.</p>

<h2>Qué debes buscar</h2>

<p>Antes de comparar apps, esto es lo que importa en un mezclador de volumen para Mac:</p>

<ul>
  <li><strong>Controles de volumen por app</strong> — control independiente para cada app en ejecución</li>
  <li><strong>Rango de volumen</strong> — ¿puedes ir por debajo del 100% Y por encima del 100% (amplificación)?</li>
  <li><strong>Silencio por app</strong> — silencia una app sin tocar su posición de control</li>
  <li><strong>Perfiles</strong> — guarda y cambia entre configuraciones de volumen</li>
  <li><strong>Atenuación automática</strong> — baja automáticamente la música durante las llamadas</li>
  <li><strong>Integración en la barra de menús</strong> — acceso rápido sin cambiar de app</li>
  <li><strong>Compatibilidad con macOS</strong> — funciona en la última versión de macOS</li>
  <li><strong>Modelo de precios</strong> — compra única vs. suscripción</li>
</ul>

<h2>Las opciones</h2>

<h3>SoundDial</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> es una app nativa de macOS para la barra de menús centrada en hacer bien una cosa: control de volumen por app.</p>

<ul>
  <li><strong>Volumen por app:</strong> Sí, del 0% al 200%</li>
  <li><strong>Silencio por app:</strong> Sí, con un clic</li>
  <li><strong>Amplificación de volumen:</strong> Sí, hasta el 200%</li>
  <li><strong>Perfiles:</strong> Sí, con nombres e iconos personalizados</li>
  <li><strong>Atenuación automática:</strong> Sí, con nivel de atenuación configurable</li>
  <li><strong>Atajos de teclado:</strong> Sí (alternar mezclador, silenciar todo)</li>
  <li><strong>Cambio de dispositivo de salida:</strong> Sí, desde el mismo panel</li>
  <li><strong>Memoria de volumen:</strong> Sí, recuerda el volumen de cada app entre reinicios</li>
  <li><strong>Precio:</strong> 14,99 € compra única (sin suscripción) — menos de la mitad del precio de SoundSource</li>
  <li><strong>Requiere:</strong> macOS 14.2+</li>
  <li><strong>Disponible en:</strong> Mac App Store (revisado por Apple, en sandbox, sin controladores del sistema)</li>
</ul>

<p>SoundDial usa la moderna API Core Audio Tap de Apple para un control de audio limpio por proceso. Es ligero, funciona completamente en la barra de menús y no requiere configuración compleja. A 14,99 €, es significativamente más barato que SoundSource ($39) mientras incluye características que SoundSource no tiene — perfiles de volumen y atenuación automática. Y al estar en la Mac App Store, ha sido revisado por Apple, está en sandbox y se instala limpiamente sin descargar DMGs ni instalar controladores de audio del sistema.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Mezclador de volumen por app SoundDial mostrando controles deslizantes de volumen individuales por app en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>SoundSource (Rogue Amoeba)</h3>

<p>SoundSource es una de las utilidades de audio para Mac más antiguas y consolidadas. Es potente y rica en características, dirigida a usuarios avanzados y profesionales del audio.</p>

<ul>
  <li><strong>Volumen por app:</strong> Sí</li>
  <li><strong>Silencio por app:</strong> Sí</li>
  <li><strong>Amplificación de volumen:</strong> Sí</li>
  <li><strong>EQ por app:</strong> Sí (soporte para plugins integrados y AU)</li>
  <li><strong>Enrutamiento de salida por app:</strong> Sí (envía diferentes apps a diferentes altavoces)</li>
  <li><strong>Perfiles:</strong> No hay sistema de perfiles integrado</li>
  <li><strong>Atenuación automática:</strong> No</li>
  <li><strong>Precio:</strong> $39 USD (único, las actualizaciones mayores pueden requerir compra adicional)</li>
  <li><strong>Requiere:</strong> macOS 12+ (instala un controlador de audio del sistema)</li>
</ul>

<p>SoundSource es la opción más potente si necesitas EQ por app y cadenas de efectos de audio. Instala un controlador de audio a nivel del sistema (ACE) para interceptar el audio, lo que lo hace muy capaz pero también más invasivo. El precio de $39 es más alto que la mayoría de las alternativas, y no tiene atenuación automática ni sistema de perfiles.</p>

<h3>Background Music (Gratis, Código abierto)</h3>

<p>Background Music es una app gratuita y de código abierto que proporciona control de volumen por app básico. Es una opción popular por ser gratuita.</p>

<ul>
  <li><strong>Volumen por app:</strong> Sí</li>
  <li><strong>Silencio por app:</strong> Sí</li>
  <li><strong>Amplificación de volumen:</strong> No (solo del 0 al 100%)</li>
  <li><strong>Pausa automática de música:</strong> Sí (pausa la música cuando otra app reproduce audio)</li>
  <li><strong>Perfiles:</strong> No</li>
  <li><strong>Atenuación automática:</strong> No (la pausa automática es diferente a la atenuación automática)</li>
  <li><strong>Precio:</strong> Gratis</li>
  <li><strong>Requiere:</strong> macOS 10.13+ (instala un dispositivo de audio virtual)</li>
</ul>

<p>Background Music es una opción gratuita sólida para control de volumen por app básico. Sin embargo, no se ha actualizado consistentemente para las versiones más recientes de macOS. Los usuarios reportan problemas en macOS Sequoia y Tahoe — fallos de audio, el dispositivo de audio virtual falla al instalarse, o la app no detecta algunas aplicaciones. Tampoco puede amplificar el volumen más allá del 100%, no tiene perfiles ni atenuación automática.</p>

<h3>eqMac</h3>

<p>eqMac es principalmente una app de ecualizador que también incluye algunas capacidades de mezcla de volumen.</p>

<ul>
  <li><strong>Volumen por app:</strong> Limitado (enfocado en EQ, no en mezcla)</li>
  <li><strong>EQ de todo el sistema:</strong> Sí, con múltiples opciones de banda</li>
  <li><strong>Amplificación de volumen:</strong> Sí</li>
  <li><strong>Perfiles:</strong> Preajustes de EQ (no perfiles de volumen)</li>
  <li><strong>Atenuación automática:</strong> No</li>
  <li><strong>Precio:</strong> Nivel gratuito + suscripción Pro</li>
  <li><strong>Requiere:</strong> macOS 10.14+</li>
</ul>

<p>eqMac es la mejor opción si tu necesidad principal es la ecualización de todo el sistema (amplificación de graves, ajuste de agudos, etc.) en lugar del control de volumen por app. Sus capacidades de mezcla de volumen son secundarias a sus características de EQ.</p>

<h2>Tabla de comparación rápida</h2>

<table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;">
<thead>
<tr style="border-bottom:2px solid rgba(255,255,255,0.2);">
  <th style="text-align:left;padding:10px 12px;color:rgba(255,255,255,0.6);">Característica</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundDial</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundSource</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">Background Music</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Volumen por app</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Amplificación de volumen (200%)</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Perfiles de volumen</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Atenuación automática</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">EQ por app</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Enrutamiento de salida por app</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Atajos de teclado</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Requiere controlador del sistema</td>
  <td style="text-align:center;padding:10px 12px;">No</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
  <td style="text-align:center;padding:10px 12px;">Sí</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Precio</td>
  <td style="text-align:center;padding:10px 12px;">Único</td>
  <td style="text-align:center;padding:10px 12px;">$39</td>
  <td style="text-align:center;padding:10px 12px;">Gratis</td>
</tr>
</tbody>
</table>

<h2>¿Cuál deberías elegir?</h2>

<ul>
  <li><strong>Si quieres control de volumen por app, perfiles y atenuación automática:</strong> <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> — el mezclador de volumen más completo por su precio, con características (perfiles, atenuación automática) que incluso las alternativas más caras no tienen.</li>
  <li><strong>Si necesitas EQ por app y enrutamiento de audio:</strong> SoundSource — la opción más potente, dirigida a profesionales del audio que necesitan cadenas de efectos y enrutamiento de salida por app.</li>
  <li><strong>Si quieres algo gratuito y básico:</strong> Background Music — decente para control de volumen por app simple, pero puede tener problemas de compatibilidad en versiones más nuevas de macOS y carece de amplificación/perfiles/atenuación.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a>.</p>
`,
  },
  "youtube-too-quiet-safari-chrome-mac": {
    slug: "youtube-too-quiet-safari-chrome-mac",
    title: "¿YouTube demasiado silencioso en Safari o Chrome en Mac? Arréglalo al instante",
    description:
      "Algunos vídeos de YouTube apenas se escuchan incluso al máximo volumen. Aquí tienes por qué el audio del navegador suele ser más silencioso que otras apps — y cómo amplificarlo más allá del 100% en Mac.",
    date: "2026-05-22",
    readTime: "5 min de lectura",
    content: `
<p>Haces clic en un vídeo de YouTube. El creador está hablando, pero apenas puedes escucharle. El volumen del sistema está al máximo. El volumen del reproductor de YouTube está al máximo. Te inclinas hacia los altavoces. Sigue siendo demasiado silencioso. Abres Spotify — la música suena a todo volumen. Así que no son los altavoces. Es YouTube. O más concretamente, el vídeo.</p>

<p>Esto es increíblemente común y no es un error. Algunos vídeos de YouTube simplemente están masterizados a un volumen inferior al de otros, y macOS no te da ninguna forma de amplificar selectivamente el audio del navegador.</p>

<h2>Por qué algunos vídeos de YouTube son tan silenciosos</h2>

<h3>El vídeo fue grabado a bajo volumen</h3>
<p>No todos los creadores tienen equipo de audio profesional. Un vídeo grabado con el micrófono del portátil desde el otro lado de la habitación será significativamente más silencioso que uno grabado con un micrófono de condensador adecuado. YouTube normaliza el volumen hasta cierto punto (su "normalización de volumen" apunta a -14 LUFS), pero esto no compensa completamente el audio de origen extremadamente silencioso.</p>

<h3>La normalización de volumen de YouTube</h3>
<p>YouTube ajusta automáticamente el volumen del vídeo para que los vídeos fuertes y silenciosos se reproduzcan aproximadamente al mismo nivel. Para los vídeos fuertes, esto significa bajarlos. Para los silenciosos, significa subirlos — pero solo hasta cierto punto. Si el audio de origen es muy silencioso, la normalización solo puede hacer tanto sin introducir ruido.</p>

<h3>El audio del navegador es un ciudadano de segunda clase en macOS</h3>
<p>Safari y Chrome manejan el audio de manera diferente a las apps de medios dedicadas. Emiten a través del motor de audio del navegador, que tiene su propio techo de volumen. No hay forma de amplificar el audio de una pestaña del navegador desde dentro de macOS. El navegador es una sola app con un único nivel de volumen — incluso si tienes diez pestañas reproduciendo audio a diferentes niveles.</p>

<h2>Soluciones rápidas a probar</h2>

<h3>Comprueba el volumen del reproductor de YouTube</h3>
<p>Pasa el cursor sobre el icono de altavoz del reproductor de YouTube y asegúrate de que el control esté al máximo. Es fácil arrastrarlo accidentalmente hacia abajo, y se restablece independientemente del volumen del sistema.</p>

<h3>Desactiva la normalización de volumen de YouTube</h3>
<p>YouTube no ofrece un interruptor visible al usuario para la normalización de volumen. Sin embargo, algunas extensiones del navegador pueden omitirla. Busca en la tienda de extensiones de tu navegador "normalizador de volumen de YouTube" o "potenciador de audio de YouTube".</p>

<h3>Prueba con un navegador diferente</h3>
<p>Safari y Chrome manejan el audio de manera diferente. Si un vídeo es demasiado silencioso en un navegador, prueba el otro. Chrome en particular maneja el audio a través de un proceso separado (el "renderer"), que a veces puede resultar en una salida más baja.</p>

<h2>La solución real: amplifica el volumen del navegador más allá del 100%</h2>

<p>El problema subyacente es que macOS no te permite amplificar el volumen de una app específica más allá del 100%. Tu navegador está al máximo, pero "al máximo" no es suficientemente alto.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> resuelve esto dándole a cada app — incluidos Safari y Chrome — un control de volumen independiente que va del 0% al <strong>200%</strong>. Si un vídeo de YouTube es demasiado silencioso, arrastra el control de tu navegador al 150% o al 180%. El audio se amplifica en tiempo real sin afectar a ninguna otra app.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial amplificando el volumen de Safari al 180% para vídeos silenciosos de YouTube en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Esto es especialmente útil porque:</p>
<ul>
  <li><strong>Es instantáneo.</strong> Haz clic en el icono de la barra de menús, arrastra el control. No necesitas instalar una extensión del navegador ni cambiar ningún ajuste.</li>
  <li><strong>Es por app.</strong> Amplificar Chrome no hace que Spotify suene más fuerte. Cada app permanece independiente.</li>
  <li><strong>Funciona con cualquier navegador.</strong> Safari, Chrome, Firefox, Arc, Brave — si es una app en tu Mac, SoundDial puede controlarla.</li>
  <li><strong>Llega hasta el 200%.</strong> El doble del techo de volumen normal. Incluso el vídeo más silencioso se vuelve audible.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "mac-notification-sounds-too-loud-headphones": {
    slug: "mac-notification-sounds-too-loud-headphones",
    title: "¿Los sonidos de notificación del Mac son demasiado fuertes con auriculares? Esta es la solución",
    description:
      "Los pings de Slack y las alertas de macOS son dolorosamente fuertes en tus auriculares mientras la música está bien. Aquí tienes por qué el volumen de las notificaciones es diferente — y cómo controlarlo.",
    date: "2026-05-25",
    readTime: "5 min de lectura",
    content: `
<p>Llevas auriculares, escuchando música a un cómodo 40% de volumen. Salta una notificación de Slack. <em>DING.</em> Es ensordecedoramente fuerte comparado con tu música. Los oídos te pitan. Te quitas los auriculares de golpe.</p>

<p>Esto ocurre porque macOS no te permite controlar por separado el volumen de las notificaciones frente al de los medios. Tu música puede estar a un nivel cómodo, pero los sonidos de alerta — pings de Slack, notificaciones de Mail, recordatorios de Calendario, sonidos del sistema de macOS — suenan a plena intensidad en relación con el volumen del sistema.</p>

<h2>Por qué las notificaciones suenan más fuerte que la música</h2>

<p>Los sonidos de notificación son ráfagas de audio cortas y agudas diseñadas para captar tu atención. Tienen un volumen pico alto por diseño. La música, por el contrario, tiene un amplio rango dinámico — pasajes más silenciosos, más fuertes, y un nivel general masterizado pensado para una escucha sostenida.</p>

<p>Cuando el volumen del sistema está al 40%, tu música está al 40% de su nivel masterizado — que puede ser un cómodo 60-70 dB en tus auriculares. Pero un ping de notificación al 40% del volumen del sistema puede seguir alcanzando los 80+ dB porque el propio archivo de sonido de la notificación está masterizado a un nivel pico mucho más alto. El volumen del sistema escala ambos por igual en porcentaje, pero sus niveles de partida son muy diferentes.</p>

<p>Con auriculares, esto es peor. El sonido va directamente a tu canal auditivo sin espacio para disiparse, por lo que la diferencia de volumen percibida entre música suave y un ping de notificación agudo se amplifica.</p>

<h2>Formas integradas de reducir el volumen de notificaciones</h2>

<h3>Baja el volumen de alerta</h3>
<p>macOS tiene un control deslizante de "Volumen de alerta" oculto en los ajustes. Ve a <strong>Ajustes del Sistema → Sonido</strong> y busca el control deslizante de <strong>Volumen de alerta</strong>. Esto controla el volumen de los sonidos del sistema y las alertas por separado del volumen principal.</p>
<p><strong>Limitación:</strong> Esto solo afecta a las alertas del sistema de macOS (como los pitidos de error y los sonidos de la Papelera). No afecta a los sonidos de notificación de apps como Slack, Discord o Teams, que reproducen su propio audio a través de su propio motor de audio.</p>

<h3>Desactiva los sonidos de notificación por app</h3>
<p>Ve a <strong>Ajustes del Sistema → Notificaciones</strong>, selecciona la app que es demasiado fuerte y desactiva "Reproducir sonido para notificaciones". Esto silencia completamente las notificaciones de esa app.</p>
<p><strong>Limitación:</strong> Es todo o nada. No puedes hacer que las notificaciones de Slack sean <em>más silenciosas</em> — solo completamente activadas o completamente desactivadas. Y pierdes la señal de audio que te indica que algo ha pasado sin mirar la pantalla.</p>

<h3>Usa modos de Concentración</h3>
<p>Los modos de Concentración (No molestar, Trabajo, etc.) pueden suprimir los sonidos de notificación de todas o determinadas apps. Esto funciona durante sesiones de concentración profunda, pero no es práctico todo el día — te perderías notificaciones importantes.</p>

<h2>La solución real: controla el volumen de la app de notificaciones de forma independiente</h2>

<p>Lo que realmente quieres es simple: hacer Slack más silencioso sin hacer tu música más silenciosa. Bajar el volumen de las apps de notificaciones al 15% mientras mantienes Spotify al 50%. macOS no te permite hacer esto.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> sí lo hace. Le da a cada app su propio control de volumen, para que puedas configurar apps con muchas notificaciones como Slack, Mail y Calendario a un volumen mucho más bajo mientras mantienes tus apps de medios a un nivel cómodo.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial mostrando Slack a bajo volumen y Spotify a volumen normal — control independiente de notificaciones en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Una configuración típica para auriculares</h3>
<ul>
  <li><strong>Spotify / Música</strong> — 50% (nivel de escucha cómodo)</li>
  <li><strong>Slack</strong> — 15% (perceptible pero no sobresaltador)</li>
  <li><strong>Mail</strong> — 10% (ping sutil, no te sobresaltará)</li>
  <li><strong>Calendario</strong> — 20% (suficiente para notarlo, no doloroso)</li>
  <li><strong>Zoom / FaceTime</strong> — 90% (audio de llamada claro)</li>
  <li><strong>Navegador</strong> — 40% (igual que el nivel de música para reproducción de vídeo)</li>
</ul>

<p>Guarda esto como un perfil de "Auriculares" en SoundDial y aplícalo con un clic siempre que los conectes. Crea un perfil separado de "Altavoces" con diferentes ratios para cuando trabajas en tu escritorio.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "stop-zoom-lowering-music-mac": {
    slug: "stop-zoom-lowering-music-mac",
    title: "Cómo evitar que Zoom baje tu música en Mac",
    description:
      "Cada vez que te unes a una llamada de Zoom, tu música baja o desaparece. Aquí tienes por qué ocurre y cómo controlar lo que se silencia durante las llamadas — según tus condiciones.",
    date: "2026-05-28",
    readTime: "6 min de lectura",
    content: `
<p>Te unes a una llamada de Zoom. Spotify estaba sonando a un volumen cómodo. La llamada se conecta y — tu música desaparece o baja a casi nada. No has tocado nada. Zoom (o macOS) decidió bajar tu música por ti, sin preguntar.</p>

<p>Esto saca de quicio a la gente porque es invisible y automático. No has silenciado nada. No has ajustado ningún control. Algo en el sistema ha decidido que tu música debería estar más silenciosa, y no tienes ninguna forma obvia de controlarlo.</p>

<p>Esto es lo que está pasando realmente y cómo recuperar el control.</p>

<h2>Por qué tu música se vuelve más silenciosa durante las llamadas de Zoom</h2>

<p>Hay dos posibles causas:</p>

<h3>1. La atenuación de audio integrada de Zoom</h3>
<p>Zoom tiene su propio procesamiento de audio que puede afectar a otro audio de tu sistema. En algunas configuraciones, Zoom reduce el audio del sistema cuando activa tu micrófono, para que el audio de la llamada sea más claro. Esto no siempre es obvio en los ajustes de Zoom.</p>

<p>Comprueba Zoom → Configuración → Audio:</p>
<ul>
  <li>Busca cualquier ajuste de "Ajustar automáticamente el volumen del micrófono" e intenta desactivarlo</li>
  <li>Comprueba "Suprimir ruido de fondo" — esto procesa el audio y puede afectar al volumen percibido</li>
  <li>Asegúrate de que "Usar dispositivo de audio separado para interpretación simultánea" esté desmarcado a menos que lo necesites</li>
</ul>

<h3>2. Cambio de códec de macOS</h3>
<p>Cuando Zoom activa tu micrófono (especialmente con auriculares Bluetooth como AirPods), macOS cambia del códec de audio AAC de alta calidad al códec SCO de menor calidad. Este cambio de códec a menudo reduce el volumen y la calidad generales del audio. No es culpa específica de Zoom — ocurre con cualquier app que use el micrófono vía Bluetooth.</p>

<p>Si usas AirPods u otros auriculares Bluetooth y el volumen baja cuando empieza una llamada, esta es probablemente la causa.</p>

<h2>Soluciones integradas</h2>

<h3>Usa auriculares con cable</h3>
<p>El problema del cambio de códec Bluetooth desaparece completamente con auriculares con cable. Un adaptador de auriculares USB-C o unos auriculares con micrófono integrado evita el cambio AAC→SCO completamente. La calidad del audio se mantiene constante antes, durante y después de las llamadas.</p>

<h3>Usa un micrófono separado</h3>
<p>Si usas el micrófono integrado de tu Mac (o un micrófono USB externo) en lugar del micrófono de tus AirPods, macOS no necesita cambiar el códec Bluetooth. Configura tu dispositivo de entrada al micrófono integrado en Ajustes del Sistema → Sonido → Entrada, mientras mantienes los AirPods como salida. De esta manera los AirPods permanecen en modo AAC y el volumen no se ve afectado.</p>

<h3>Ajusta los ajustes de audio de Zoom</h3>
<p>En Zoom → Configuración → Audio, experimenta desactivando el ajuste automático del micrófono y la supresión de ruido de fondo. Estas características pueden interferir con los niveles de audio de otras apps.</p>

<h2>La solución real: atenuación automática según tus condiciones</h2>

<p>El problema fundamental es que no tienes control sobre <em>cuánto</em> se baja tu música durante las llamadas. El sistema toma esa decisión por ti, y suele ser demasiado agresiva — la música baja a casi cero en lugar de a un nivel de fondo cómodo.</p>

<p>Lo que realmente quieres es atenuación automática configurable: "cuando esté en una llamada, baja mi música al 25% — no a cero, no al 50%, exactamente al 25%".</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> te da exactamente esto. Su función de atenuación automática monitorea tu micrófono y ajusta automáticamente el audio de fondo cuando empieza una llamada — pero <strong>tú controlas el nivel de atenuación</strong>.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Ajustes de atenuación automática de SoundDial — reducción de volumen configurable durante llamadas de Zoom en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Cómo funciona</h3>
<ol>
  <li>Configuras tu nivel de atenuación preferido (del 10% al 80%)</li>
  <li>Te unes a una llamada de Zoom — tu micrófono se activa</li>
  <li>SoundDial detecta la llamada y baja las apps de fondo a tu nivel configurado</li>
  <li>El audio de tu llamada se mantiene a volumen completo</li>
  <li>Cuelgas — todas las apps vuelven a su volumen anterior</li>
</ol>

<p>La diferencia respecto al enfoque de Zoom/macOS:</p>
<ul>
  <li><strong>Tú eliges el nivel.</strong> El 30% es un buen valor predeterminado — la música se escucha pero no interfiere. Puedes ajustarlo desde el 10% (casi silencio) hasta el 80% (apenas reducido).</li>
  <li><strong>Restaura perfectamente.</strong> Cuando termina la llamada, cada app vuelve exactamente a donde estaba.</li>
  <li><strong>Funciona con todas las apps de comunicación.</strong> Zoom, Teams, FaceTime, Discord, Slack, Google Meet, Webex, Skype.</li>
  <li><strong>Puedes desactivarla.</strong> Si quieres gestionar el volumen manualmente para una llamada específica, simplemente desactiva la atenuación automática en los ajustes de SoundDial.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "airpods-volume-too-low-mac": {
    slug: "airpods-volume-too-low-mac",
    title: "¿Volumen de AirPods demasiado bajo en Mac? Todas las soluciones explicadas",
    description:
      "¿Los AirPods suenan silenciosos en tu Mac incluso a volumen máximo? Aquí tienes todas las causas — desde límites de seguridad de auriculares hasta peculiaridades de Bluetooth — y cómo solucionarlas.",
    date: "2026-06-08",
    readTime: "7 min de lectura",
    content: `
<p>Tus AirPods funcionan bien en tu iPhone. Son suficientemente fuertes. Pero conéctalos a tu Mac — de forma inalámbrica, claro — y de repente todo es demasiado silencioso. El volumen del sistema está al máximo. Spotify está al máximo. Los AirPods simplemente... no son suficientemente fuertes.</p>

<p>Esta es una de las quejas de audio más comunes de los usuarios de Mac con AirPods. La buena noticia: casi siempre tiene solución. La mala noticia: hay unas seis causas diferentes que pueden provocarlo, y puede que necesites comprobarlas todas.</p>

<h2>1. La Seguridad de auriculares está limitando tu volumen</h2>

<p>Esta es la causa más común. macOS tiene una función integrada que limita el volumen de los auriculares para proteger tu audición.</p>

<p>Ve a <strong>Ajustes del Sistema → Sonido → Seguridad de auriculares</strong>.</p>

<p>Si "Reducir audio fuerte" está activado, macOS está limitando activamente el volumen máximo de tus AirPods. Mide la exposición al sonido a lo largo del tiempo y reduce el volumen si considera que has estado escuchando demasiado fuerte durante demasiado tiempo.</p>

<p><strong>Solución:</strong> Desactiva "Reducir audio fuerte" por completo, o sube el umbral de decibelios a un nivel más alto. Notarás inmediatamente más margen de volumen.</p>

<h2>2. El volumen Bluetooth está desincronizado</h2>

<p>El audio Bluetooth tiene dos controles de volumen separados: uno del lado del Mac y otro del lado de los AirPods. Se supone que están sincronizados, pero a veces se dessincronizan — el Mac muestra el 100% pero los AirPods están recibiendo realmente una señal de volumen más baja.</p>

<p><strong>Solución:</strong> Desconecta los AirPods (Ajustes del Sistema → Bluetooth → haz clic en la "i" junto a tus AirPods → Desconectar), espera cinco segundos y vuelve a conectarlos. Esto restablece la sincronización de volumen. También prueba a meter los AirPods en su estuche, cerrar la tapa, esperar diez segundos y sacarlos de nuevo.</p>

<h2>3. El códec de audio cambió a una calidad inferior</h2>

<p>Cuando usas el micrófono de tus AirPods (para una llamada, Siri o dictado), macOS cambia del códec AAC de alta calidad al códec SCO de menor calidad. SCO fue diseñado para llamadas telefónicas — reduce la calidad del audio y también puede afectar al volumen percibido.</p>

<p><strong>Solución:</strong> Si no estás en una llamada pero el audio suena tanto silencioso como de baja calidad, desconecta y vuelve a conectar los AirPods. macOS debería volver al códec AAC para la reproducción de música. Si estás en una llamada, este es el comportamiento esperado — el códec volverá a cambiar automáticamente cuando termine la llamada.</p>

<h2>4. Un AirPod suena más bajo que el otro</h2>

<p>Si el volumen parece bajo porque un AirPod está notablemente más silencioso, el problema puede ser físico — cera de oído o suciedad bloqueando la malla del altavoz.</p>

<p><strong>Solución:</strong> Limpia los AirPods con cuidado con un paño seco y sin pelusa. Para la malla del altavoz, usa un cepillo suave y seco de cerdas. No uses líquidos, aire comprimido ni objetos afilados. También comprueba <strong>Ajustes del Sistema → Accesibilidad → Audio</strong> — asegúrate de que el control deslizante de balance izquierda-derecha esté centrado.</p>

<h2>5. La propia app está emitiendo poco volumen</h2>

<p>Algunas apps tienen sus propios controles de volumen internos que son independientes del volumen del sistema. Spotify, VLC, YouTube y Zoom tienen controles de volumen independientes. Si el volumen interno de la app está al 50%, solo estás obteniendo la mitad del volumen — incluso si macOS y tus AirPods están al 100%.</p>

<p><strong>Solución:</strong> Comprueba el control de volumen dentro de la app que estés usando y asegúrate de que esté al máximo.</p>

<h2>6. Core Audio está en un estado incorrecto</h2>

<p>El demonio de audio de macOS (coreaudiod) a veces puede quedarse atascado en un estado en el que el audio Bluetooth se enruta incorrectamente o a un nivel reducido, especialmente después de suspensión/activación o al cambiar entre múltiples dispositivos de audio.</p>

<p><strong>Solución:</strong> Abre Terminal y ejecuta:</p>
<p><code>sudo killall coreaudiod</code></p>
<p>El audio se cortará un segundo y se reiniciará. Los AirPods pueden reconectarse a un nivel de volumen más normal.</p>

<h2>¿Sigue siendo demasiado silencioso? Amplifica el volumen de los AirPods más allá del 100%</h2>

<p>Si has comprobado las seis causas anteriores y los AirPods siguen sin ser suficientemente fuertes, puede que necesites amplificación de volumen — la capacidad de elevar la señal de audio más allá del techo del 100% que impone macOS.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> te permite amplificar el volumen de cualquier app hasta el <strong>200%</strong>. Si Spotify es demasiado silenciosa a través de tus AirPods, arrastra el control de Spotify al 150% o al 180% en SoundDial. La señal de audio se amplifica antes de enviarse a los AirPods, haciéndolos efectivamente más fuertes de lo que Apple pretendía.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial amplificando el volumen de apps para AirPods en Mac con controles deslizantes de volumen por app hasta el 200%" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>La ventaja de la amplificación por app: puedes amplificar la app silenciosa sin hacer todo lo demás más fuerte. Si tu videollamada está bien al 100% pero Spotify necesita el 170%, SoundDial te permite configurar cada una de forma independiente.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "spotify-volume-too-low-mac": {
    slug: "spotify-volume-too-low-mac",
    title: "¿Volumen de Spotify demasiado bajo en Mac? Todas las soluciones",
    description:
      "¿Spotify al máximo volumen pero sigue siendo demasiado silencioso en tu Mac? Esta guía cubre todas las causas — desde el limitador integrado de Spotify hasta los ajustes de macOS — y cómo amplificarlo más allá del 100%.",
    date: "2026-06-11",
    readTime: "7 min de lectura",
    content: `
<p>Spotify está al máximo volumen. Tu Mac está al máximo volumen. Y sigue sin ser suficientemente fuerte. Esta es una de las quejas más comunes sobre Spotify en Mac, y tiene múltiples causas — la mayoría de las cuales no son obvias.</p>

<p>Esta guía repasa cada razón por la que Spotify puede estar demasiado silencioso en tu Mac y cómo solucionar cada una. Incluyendo cómo amplificar el volumen de Spotify más allá del 100% si nada más funciona.</p>

<h2>Comprueba primero el control de volumen propio de Spotify</h2>

<p>Spotify tiene un control de volumen independiente en la esquina inferior derecha de la app (o en la parte inferior de la pantalla en el reproductor rediseñado). Este control es independiente del volumen del sistema de tu Mac. Si está al 50%, Spotify solo está emitiendo la mitad de su volumen potencial — incluso si el volumen del sistema está al 100%.</p>

<p><strong>Solución:</strong> Asegúrate de que el control de volumen interno de Spotify esté completamente a la derecha (100%).</p>

<h2>Comprueba la normalización de volumen de Spotify</h2>

<p>Spotify tiene una función llamada <strong>Normalizar volumen</strong> que ajusta automáticamente el volumen de reproducción para que todas las pistas suenen aproximadamente al mismo nivel. Está pensada para evitar saltos bruscos de volumen entre canciones, pero también puede reducir el volumen general de las pistas más fuertes.</p>

<p>Para comprobarlo: Abre Spotify → Configuración → Reproducción → <strong>Normalizar volumen</strong>.</p>

<p>Tienes tres opciones:</p>
<ul>
  <li><strong>Fuerte</strong> — menos normalización, más cercano a los niveles de masterización originales</li>
  <li><strong>Normal</strong> — normalización moderada (predeterminado)</li>
  <li><strong>Suave</strong> — más normalización, reduce el volumen aún más</li>
</ul>

<p><strong>Solución:</strong> Si Spotify suena demasiado silencioso, desactiva la normalización por completo o configúrala en "Fuerte". Esta es la causa individual más común de que Spotify esté inesperadamente silencioso.</p>

<h2>Comprueba el ajuste de calidad de audio de Spotify</h2>

<p>Los ajustes de calidad de audio más bajos a veces pueden resultar en una reproducción más silenciosa, especialmente en hardware de audio más antiguo. Ve a Spotify → Configuración → Calidad de audio y asegúrate de estar usando "Muy alta" (320 kbps) si tienes una suscripción Premium, o "Alta" (256 kbps) en el nivel gratuito.</p>

<h2>Comprueba los límites de seguridad de auriculares de macOS</h2>

<p>Si usas auriculares (con cable o Bluetooth), macOS puede estar limitando tu volumen. Ve a <strong>Ajustes del Sistema → Sonido → Seguridad de auriculares</strong>. Si "Reducir audio fuerte" está activado, macOS está limitando el volumen de tus auriculares a un nivel que considera seguro.</p>

<p><strong>Solución:</strong> Desactiva "Reducir audio fuerte" o sube el umbral de decibelios. Nota: este ajuste solo afecta a la salida por auriculares, no a los altavoces.</p>

<h2>Comprueba el volumen Bluetooth</h2>

<p>Si usas AirPods o altavoces Bluetooth, hay una capa de volumen separada. Los dispositivos Bluetooth tienen su propio volumen que se negocia entre el Mac y el dispositivo. A veces esto se desincroniza.</p>

<p><strong>Solución:</strong> Desconecta y vuelve a conectar tu dispositivo Bluetooth. También comprueba si el dispositivo tiene sus propios botones de volumen — asegúrate de que también estén al máximo.</p>

<h2>Reinicia Core Audio</h2>

<p>El sistema de audio de macOS puede a veces quedarse atascado en un estado de bajo volumen, especialmente después de ciclos de suspensión/activación o al cambiar entre dispositivos de salida. Reiniciar el demonio de audio suele solucionar esto.</p>

<p>Abre Terminal y ejecuta:</p>
<p><code>sudo killall coreaudiod</code></p>

<p>El audio se cortará un segundo y se reiniciará. Prueba Spotify de nuevo — puede que esté más fuerte.</p>

<h2>Amplifica Spotify más allá del 100% con SoundDial</h2>

<p>Si has probado todo lo anterior y Spotify sigue siendo demasiado silencioso, el problema puede ser que la salida máxima de Spotify simplemente no es suficientemente fuerte para tu configuración. Esto es común con los altavoces integrados del MacBook y algunos dispositivos Bluetooth.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> te permite amplificar el volumen de cualquier app hasta el <strong>200%</strong> — incluyendo Spotify. Intercepta el flujo de audio de Spotify y lo amplifica más allá del máximo integrado de la app, sin afectar al volumen de ninguna otra app.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial amplificando el volumen de Spotify al 200% en macOS mientras mantiene otras apps a volumen normal" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Esta es la diferencia clave frente a los amplificadores de volumen a nivel del sistema: un amplificador de sistema haría <em>todo</em> más fuerte — notificaciones, llamadas, sonidos del sistema — no solo Spotify. SoundDial amplifica Spotify <em>de forma independiente</em>. Configura Spotify al 160% mientras tu navegador se mantiene al 80% y Zoom al 100%.</p>

<h2>Bonus: atenuación automática para música durante las llamadas</h2>

<p>Si también aplica el problema contrario — Spotify es demasiado fuerte durante las videollamadas — la función de atenuación automática de SoundDial baja automáticamente Spotify cuando te unes a una llamada de Zoom, Teams o FaceTime. Cuando termina la llamada, Spotify vuelve a su volumen anterior. Sin ajuste manual necesario.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "separate-game-audio-from-discord-mac": {
    slug: "separate-game-audio-from-discord-mac",
    title: "Cómo separar el audio del juego de Discord en Mac",
    description:
      "¿Las explosiones del juego tapan a tus compañeros en Discord? Así es como puedes controlar el volumen del audio del juego y del chat de voz de forma independiente en macOS.",
    date: "2026-06-10",
    readTime: "6 min de lectura",
    content: `
<p>Estás jugando en tu Mac. Una explosión se produce en el juego. Tus compañeros de Discord están hablando, pero no puedes escucharles por los disparos. Bajas el volumen — ahora Discord también está más silencioso. Lo subes — las explosiones son ensordecedoras.</p>

<p>En Windows, abrirías el mezclador de volumen, bajarías el juego al 40% y dejarías Discord al 100%. En Mac, no puedes. macOS te da un único control de volumen para todo, por lo que el audio del juego y el chat de voz están permanentemente vinculados.</p>

<p>Esta guía te muestra cómo obtener control de volumen independiente para tu juego y Discord (o cualquier chat de voz) en Mac.</p>

<h2>Por qué esto es un problema específico de Mac</h2>

<p>Windows ha tenido un mezclador de volumen integrado desde 2006 que te permite controlar el volumen de cada app de forma independiente. macOS nunca ha añadido esta función. El audio de cada app se mezcla en un único flujo, y el único control que tienes es un único control maestro que afecta a todo por igual.</p>

<p>Esto significa:</p>
<ul>
  <li>Si el juego está demasiado fuerte, bajarlo también baja Discord</li>
  <li>Si Discord está demasiado silencioso, subirlo también sube el juego</li>
  <li>No puedes encontrar un equilibrio porque ambas apps están bloqueadas al mismo volumen</li>
</ul>

<h2>Las soluciones alternativas que realmente no funcionan</h2>

<h3>Usa los ajustes de volumen del juego</h3>
<p>La mayoría de los juegos tienen un menú de ajustes de audio donde puedes bajar el volumen maestro, la música, los efectos de sonido y el chat de voz de forma independiente. Esto ayuda, pero estás cambiando ajustes dentro del juego — lo que significa que tienes que pausar el juego, navegar por los menús y ajustar cada vez que cambien las condiciones. Y si cambias de juego, empiezas de cero.</p>

<h3>Usa los controles de volumen de Discord</h3>
<p>Discord te permite ajustar el volumen de salida en Configuración → Voz y vídeo, y puedes ajustar el volumen de usuarios individuales haciendo clic derecho en su nombre. Pero esto controla la mezcla interna de Discord, no su volumen en relación con otras apps. Si el juego está demasiado fuerte, hacer Discord más fuerte internamente no ayuda porque el volumen del sistema afecta a ambos por igual.</p>

<h3>Usa diferentes dispositivos de salida</h3>
<p>Algunas personas intentan enrutar el audio del juego a los altavoces y Discord a los auriculares (o viceversa). macOS no facilita esto — necesitarías un dispositivo de audio virtual y enrutamiento manual por app. Y llevar auriculares mientras los altavoces también suenan es incómodo en el mejor de los casos.</p>

<h2>La solución real: control de volumen por app</h2>

<p>Lo que necesitas es la capacidad de establecer el volumen de tu juego de forma independiente del volumen de Discord. Esto es exactamente lo que hace un mezclador de volumen por app.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> se sienta en tu barra de menús y le da a cada app su propio control de volumen. Puedes poner el juego al 35% y Discord al 100% — o el ratio que te funcione. Cambia uno y el otro no se mueve.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial mostrando controles deslizantes de volumen independientes para un juego y Discord en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Configuración típica para jugar</h3>
<ul>
  <li><strong>Juego</strong> — 30-50% (suficientemente fuerte para la inmersión, sin abrumar)</li>
  <li><strong>Discord / chat de voz</strong> — 90-100% (siempre claramente audible sobre el audio del juego)</li>
  <li><strong>Spotify / música</strong> — 15-25% (fondo sutil, no interfiere)</li>
  <li><strong>Navegador</strong> — silenciado (sin sorpresas de reproducción automática)</li>
  <li><strong>Slack / notificaciones</strong> — silenciado (tiempo de concentración)</li>
</ul>

<h3>Guárdalo como perfil</h3>
<p>Los <strong>perfiles de volumen</strong> de SoundDial te permiten guardar esta configuración y aplicarla con un clic. Crea un perfil de "Juegos" con tu balance preferido juego/Discord, un perfil de "Trabajo" para música y llamadas, y cambia entre ellos al instante. Sin reajustar controles cada vez que te sientas a jugar.</p>

<h3>Amplificación de volumen para chat de voz silencioso</h3>
<p>A veces el problema no es que el juego esté demasiado fuerte — es que Discord está demasiado silencioso. Algunos compañeros tienen micrófonos deficientes, o la salida de Discord es más baja que la de otras apps. SoundDial te permite amplificar el volumen de cualquier app hasta el <strong>200%</strong>, así que puedes amplificar Discord más allá de su máximo normal sin tocar el volumen del juego.</p>

<h2>Funciona con cualquier juego y cualquier chat de voz</h2>

<p>SoundDial funciona con cada app que produce audio en macOS. No importa si juegas a través de Steam, la App Store, Epic Games o un juego de navegador. No importa si usas Discord, TeamSpeak, Mumble o FaceTime. Si hace sonido, SoundDial puede controlarlo.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "why-doesnt-mac-have-volume-mixer": {
    slug: "why-doesnt-mac-have-volume-mixer",
    title: "¿Por qué Mac no tiene un mezclador de volumen como Windows?",
    description:
      "Windows ha tenido control de volumen por app desde 2006. Es 2026 y macOS sigue sin tenerlo. Aquí está la razón real — y cómo conseguir uno de todas formas.",
    date: "2026-06-09",
    readTime: "6 min de lectura",
    content: `
<p>Cada versión de Windows desde Vista (2006) ha incluido un mezclador de volumen. Haz clic derecho en el icono del altavoz, haz clic en "Mezclador de volumen" y verás cada app con su propio control de volumen. Puedes silenciar Chrome sin afectar a Spotify. Puedes bajar Discord sin tocar tu juego.</p>

<p>¿En macOS? Un control. Eso es todo lo que obtienes. Veinte años de actualizaciones de Mac — Ventura, Sonoma, Sequoia, Tahoe — y Apple nunca ha añadido control de volumen por app.</p>

<p>La gente hace esta pregunta constantemente: <em>¿por qué Mac no tiene un mezclador de volumen?</em></p>

<h2>No es una limitación técnica</h2>

<p>Aclaremos esto: macOS puede absolutamente hacer control de volumen por app. El framework de audio subyacente — <strong>Core Audio</strong> — soporta la captura de audio por proceso, el enrutamiento y el ajuste de ganancia a nivel de API. Apple introdujo la <strong>API Audio Tap</strong> en macOS 14 (Sonoma), haciendo aún más fácil para los desarrolladores interceptar y modificar flujos de audio de apps individuales.</p>

<p>Los desarrolladores de terceros han estado construyendo mezcladores de volumen por app durante años usando estas APIs. La tecnología existe. Apple simplemente no ha construido una versión de cara al usuario.</p>

<h2>Entonces, ¿por qué Apple no lo ha construido?</h2>

<p>Apple nunca lo ha explicado públicamente. Pero mirando sus patrones de diseño, la respuesta es bastante clara: <strong>Apple prioriza la simplicidad sobre las características para usuarios avanzados.</strong></p>

<p>Un control de volumen es más simple que doce. Es más fácil de explicar, más fácil de aprender y no requiere configuración. Para un usuario que solo hace una cosa a la vez — escucha música O hace una llamada O ve un vídeo — un control funciona bien. Apple diseña para este usuario primero.</p>

<p>También hay un argumento filosófico: Apple cree que las apps deben gestionar su propio audio. Si Spotify está demasiado fuerte, bájala en Spotify. Si Zoom está demasiado silencioso, súbelo en Zoom. El sistema operativo no debería necesitar mediar.</p>

<p>El problema es que esta filosofía no coincide con la realidad. En 2026, todo el mundo hace multitarea con audio:</p>

<ul>
  <li>Música sonando mientras se trabaja</li>
  <li>Videollamadas con notificaciones sonando</li>
  <li>Pestañas del navegador reproduciendo anuncios automáticamente</li>
  <li>Jugar con Discord abierto</li>
  <li>Podcasts en un oído, Slack en el otro</li>
</ul>

<p>"Solo ajústalo en cada app" significa cambiar entre seis apps, encontrar seis controles de volumen diferentes (algunos de los cuales no existen) y hacer esto varias veces al día. Es lo contrario de simple.</p>

<h2>¿Añadirá Apple alguna vez esta función?</h2>

<p>No hay ninguna indicación de que Apple planee añadir un mezclador de volumen en ninguna versión próxima de macOS. La función no ha aparecido en ninguna beta de macOS, presentación de patentes o hoja de ruta de WWDC. El Centro de Control de Apple en la barra de menús sigue mostrando solo el único control de volumen del sistema.</p>

<p>Es posible que Apple lo añada eventualmente — han adoptado funciones que inicialmente rechazaban (widgets, disposición de ventanas, iPad con múltiples ventanas). Pero esperar a Apple significa esperar indefinidamente.</p>

<h2>Cómo obtener un mezclador de volumen en Mac ahora mismo</h2>

<p>La respuesta es una app de terceros en la barra de menús. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> es un mezclador de volumen nativo de macOS que hace exactamente lo que hace el mezclador de volumen de Windows — además de más.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — el mezclador de volumen para macOS, mostrando controles deslizantes de volumen por app en la barra de menús" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Lo que obtienes:</p>

<ul>
  <li><strong>Controles deslizantes de volumen por app</strong> — cada app en ejecución tiene su propio control, del 0% al 200%</li>
  <li><strong>Silencio por app</strong> — un clic para silenciar cualquier app, otro clic para desilenciarla</li>
  <li><strong>Perfiles de volumen</strong> — guarda configuraciones para diferentes situaciones (Trabajo, Concentración, Juegos) y cambia con un clic</li>
  <li><strong>Atenuación automática</strong> — el audio de fondo se baja automáticamente cuando te unes a una llamada y se restaura cuando cuelgas</li>
  <li><strong>Amplificación de volumen al 200%</strong> — amplifica apps silenciosas más allá de su máximo normal</li>
  <li><strong>Atajos de teclado</strong> — alterna el mezclador o silencia todas las apps con una tecla de acceso rápido</li>
  <li><strong>Cambio de dispositivo de salida</strong> — cambia entre altavoces, auriculares y dispositivos externos desde el mismo panel</li>
  <li><strong>Memoria de volumen</strong> — el volumen de cada app se recuerda entre reinicios</li>
</ul>

<p>La función que Apple debería haber construido hace veinte años. Compra única en la <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Sin suscripción. macOS 14.2+.</p>

<p>El mezclador de volumen que macOS debería tener integrado.</p>
`,
  },
  "boost-mac-volume-beyond-100-percent": {
    slug: "boost-mac-volume-beyond-100-percent",
    title: "¿Volumen del Mac demasiado bajo? Cómo amplificar el sonido más allá del 100%",
    description:
      "Tu Mac está al máximo volumen y sigue siendo demasiado silencioso. Aquí tienes por qué ocurre y cómo amplificar el audio hasta el 200% sin altavoces externos.",
    date: "2026-06-07",
    readTime: "8 min de lectura",
    content: `
<p>El volumen de tu Mac está al 100%. El control está completamente a la derecha. Y sigue sin ser suficientemente fuerte. El podcast es demasiado silencioso. El participante de la videollamada suena como si estuviera susurrando. El vídeo de YouTube fue grabado a un nivel demasiado bajo. Has llegado al máximo — y no es suficiente.</p>

<p>Esta es una de las quejas de audio más comunes en Mac, especialmente con los altavoces integrados del MacBook Air y modelos más antiguos de MacBook Pro. Los altavoces son físicamente pequeños, y algunos contenidos simplemente se graban a un nivel inferior a otros.</p>

<p>Aquí tienes por qué ocurre y cómo solucionarlo realmente — incluido cómo amplificar el volumen de tu Mac más allá del límite del 100%.</p>

<h2>Por qué tu Mac suena demasiado silencioso al máximo volumen</h2>

<p>Hay varias razones por las que tu Mac puede no ser suficientemente fuerte incluso al volumen máximo:</p>

<h3>1. El contenido en sí es silencioso</h3>
<p>No todo el audio está masterizado al mismo nivel. Un podcast producido profesionalmente puede tener un pico de -3 dB, mientras que un vídeo casual de YouTube o una grabación de Zoom pueden tener un pico de -20 dB. La diferencia es enorme. Cuando el volumen del sistema está al 100%, el contenido silencioso sigue siendo silencioso — macOS solo puede amplificar hasta el nivel de señal original.</p>

<h3>2. Los altavoces del MacBook tienen límites físicos</h3>
<p>Los altavoces integrados en un MacBook Air o un MacBook Pro de 13" son pequeños. Están diseñados para la portabilidad, no para el volumen. Los modelos de MacBook Pro más grandes (14" y 16") tienen altavoces significativamente mejores, pero incluso ellos tienen un techo. Si estás acostumbrado a altavoces externos o auriculares, los altavoces integrados te parecerán débiles.</p>

<h3>3. El volumen Bluetooth está limitado</h3>
<p>Algunos auriculares y altavoces Bluetooth tienen su propio techo de volumen que es independiente de macOS. Incluso si macOS muestra el 100%, el dispositivo Bluetooth puede no estar a su máximo. Esto es especialmente común con los AirPods, donde el limitador de volumen de la UE o la función de seguridad de auriculares en Ajustes → Sonido → Seguridad de auriculares puede limitar la salida.</p>

<h3>4. Los volúmenes individuales de las apps son bajos</h3>
<p>Algunas apps tienen su propio control de volumen interno que es independiente del volumen del sistema. Si el volumen interno de Spotify está al 50% y el volumen del sistema está al 100%, estás escuchando efectivamente al 50%. Zoom suele tener por defecto un nivel de volumen conservador para las llamadas.</p>

<h2>Soluciones integradas a probar primero</h2>

<h3>Comprueba los límites de seguridad de auriculares</h3>
<p>Ve a <strong>Ajustes del Sistema → Sonido → Seguridad de auriculares</strong>. Si "Reducir audio fuerte" está activado, macOS está limitando activamente tu volumen para proteger tu audición. Puedes desactivarlo o subir el umbral. Esto solo afecta a los auriculares — no toca la salida por altavoces.</p>

<h3>Comprueba el volumen del dispositivo Bluetooth</h3>
<p>Algunos dispositivos Bluetooth tienen controles de volumen independientes. Para los AirPods, asegúrate de que el volumen tanto en el Mac como en los AirPods esté al máximo. Para altavoces Bluetooth de terceros, comprueba si el altavoz tiene su propio botón de volumen o app.</p>

<h3>Comprueba el volumen interno de la app</h3>
<p>Abre la app que está demasiado silenciosa y busca su propio control de volumen. Spotify tiene uno en la barra del reproductor. VLC tiene uno en los controles de reproducción. YouTube tiene uno en el reproductor de vídeo. Asegúrate de que estén al 100% antes de concluir que el Mac es el problema.</p>

<h3>Reinicia Core Audio</h3>
<p>A veces el sistema de audio de macOS entra en un estado incorrecto después de ciclos de suspensión/activación o cambios de dispositivos. Abre Terminal y ejecuta:</p>
<p><code>sudo killall coreaudiod</code></p>
<p>Esto reinicia el demonio de audio. Tu audio se cortará un segundo y volverá, a veces a un nivel más normal.</p>

<h2>Cómo amplificar el volumen más allá del 100%</h2>

<p>Si has comprobado todo lo anterior y tu Mac sigue siendo demasiado silencioso, necesitas amplificación de volumen — la capacidad de empujar el audio <em>por encima</em> del techo del 100% que impone macOS.</p>

<p>La amplificación de volumen funciona interceptando la señal de audio antes de que llegue a tus altavoces y multiplicando su amplitud. Al 150%, cada muestra de audio es 1,5 veces más fuerte que la original. Al 200%, está doblada. Esto puede introducir una ligera distorsión a niveles extremos con ciertos contenidos, pero para audio silencioso es la única forma de hacerlo realmente audible.</p>

<h3>SoundDial: amplificación de volumen por app hasta el 200%</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> le da a cada app de tu Mac un control de volumen independiente que va del 0% al <strong>200%</strong>. Si una app específica está demasiado silenciosa — un reproductor de podcasts, una pestaña del navegador, una videollamada — puedes amplificar solo esa app más allá del 100% sin tocar nada más.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Amplificación de volumen de SoundDial — control de volumen por app con amplificación del 200% en macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Esto es especialmente útil para:</p>
<ul>
  <li><strong>Apps de podcasts silenciosas</strong> — algunos reproductores alcanzan el máximo demasiado bajo, especialmente con podcasts grabados en condiciones subóptimas</li>
  <li><strong>Videollamadas con participantes silenciosos</strong> — amplifica Zoom o Teams cuando el micrófono de alguien es bajo, sin hacer tu música más fuerte</li>
  <li><strong>Pestañas del navegador</strong> — los vídeos de YouTube, las apps web y los medios incrustados suelen reproducirse a volúmenes más bajos que las apps de medios dedicadas</li>
  <li><strong>Grabaciones antiguas</strong> — el audio de archivo, la música vintage y el contenido de vídeo más antiguo suele estar masterizado a niveles más bajos</li>
</ul>

<p>La ventaja clave sobre los amplificadores de volumen de todo el sistema es que SoundDial amplifica <em>por app</em>. Puedes amplificar la app silenciosa al 180% mientras mantienes todo lo demás a niveles normales. Un amplificador de todo el sistema amplificaría todo por igual, haciendo tus apps ya fuertes dolorosamente fuertes mientras la silenciosa se vuelve ligeramente menos silenciosa.</p>

<h2>Cuándo las soluciones externas son mejores</h2>

<p>La amplificación de volumen tiene límites. Si intentas llenar una habitación de sonido con los altavoces integrados de un MacBook Air, ningún software puede superar el tamaño físico de esos altavoces. En ese caso:</p>

<ul>
  <li><strong>Auriculares con cable</strong> — evitan completamente las limitaciones de los altavoces, y la mayoría de los auriculares pueden ser más fuertes que los altavoces integrados</li>
  <li><strong>Altavoces externos</strong> — incluso un par barato de altavoces USB o Bluetooth superará a los altavoces integrados del MacBook en volumen bruto</li>
  <li><strong>Interfaz de audio USB</strong> — para uso profesional, una interfaz de audio dedicada proporciona una señal limpia y potente a monitores de estudio o auriculares</li>
</ul>

<p>Pero para el caso cotidiano — una pestaña del navegador que está demasiado silenciosa, una llamada donde alguien está murmurando, un podcast que fue grabado en un armario — la amplificación de volumen por software con <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> es la solución más rápida. Haz clic en el icono de la barra de menús, arrastra el control más allá del 100%, listo.</p>

<p>Compra única en la <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Sin suscripción. macOS 14.2+.</p>
`,
  },
  "auto-lower-music-during-zoom-calls-mac": {
    slug: "auto-lower-music-during-zoom-calls-mac",
    title: "Cómo bajar automáticamente la música durante las llamadas de Zoom en Mac",
    description:
      "Cada vez que empieza una llamada de Zoom, te apresuras a pausar Spotify. Hay una forma mejor — la atenuación automática baja tu música automáticamente cuando se activa el micrófono.",
    date: "2026-06-05",
    readTime: "7 min de lectura",
    content: `
<p>Empieza la llamada. Estás compartiendo tu pantalla. Tu música sigue sonando a todo volumen. Cambias frenéticamente a Spotify, pulsas pausa, vuelves a Zoom — pero todos ya escucharon diez segundos de tu lista de reproducción. Le pasa a todo el mundo, y pasa porque macOS no tiene ninguna conexión entre "acaba de empezar una llamada" y "quizás bajar la música".</p>

<p>En algunos teléfonos, esto es automático — la música se pausa o se atenúa cuando entra una llamada. En Mac, vas por tu cuenta. A menos que configures la atenuación automática.</p>

<h2>¿Qué es la atenuación de audio?</h2>

<p>La <strong>atenuación de audio</strong> significa bajar automáticamente el volumen del audio de fondo cuando algo más importante está ocurriendo — como una llamada de voz. El término proviene de la ingeniería de radiodifusión, donde la música de fondo "se atenúa bajo" la voz del locutor.</p>

<p>En la práctica, funciona así:</p>
<ol>
  <li>Estás escuchando música al 50% de volumen</li>
  <li>Te unes a una llamada de Zoom</li>
  <li>Tu música baja automáticamente al 15%</li>
  <li>Puedes escuchar la llamada claramente sin ajustar nada manualmente</li>
  <li>Termina la llamada</li>
  <li>Tu música vuelve automáticamente al 50%</li>
</ol>

<p>Sin cambiar de app. Sin pausar. Sin olvidarte de activar la música después de la llamada. Es completamente automático.</p>

<h2>¿Tiene macOS atenuación de audio integrada?</h2>

<p>No. macOS no tiene ninguna función de atenuación de audio automática. No hay nada en Ajustes del Sistema, Accesibilidad o modos de Concentración que conecte "el micrófono está activo" con "bajar el audio de fondo". Apple simplemente no ha construido esto.</p>

<p>Hay un ajuste de Accesibilidad llamado "Reproducir audio estéreo como mono" y opciones para alertas de flash visual, pero nada que ajuste automáticamente el volumen según si estás en una llamada.</p>

<h2>Las alternativas manuales (y por qué son dolorosas)</h2>

<h3>Pausa la música manualmente antes de cada llamada</h3>
<p>Esto es lo que hace la mayoría de la gente. Funciona — hasta que se te olvida. O hasta que alguien llama de forma inesperada. O hasta que tienes llamadas consecutivas y estás pausando y activando Spotify doce veces al día. También significa no tener música de fondo durante las llamadas, incluso cuando la querrías a bajo volumen.</p>

<h3>Usa el modo de Concentración para silenciar todo</h3>
<p>Podrías crear un modo de Concentración "Reunión" que bloquee los sonidos de notificación. Pero los modos de Concentración no controlan el volumen de reproducción de medios. Tu música sigue sonando a todo volumen incluso en el modo No molestar — la Concentración solo suprime las notificaciones.</p>

<h3>Configura perfiles de volumen manualmente</h3>
<p>Crea una configuración de "llamada" donde bajas manualmente todo excepto tu app de comunicación antes de cada llamada. Esto funciona pero requiere que lo recuerdes y cambies manualmente cada vez. Y tienes que volver a cambiar después.</p>

<h2>Atenuación automática con SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> tiene una función de atenuación automática integrada que hace exactamente lo que macOS debería hacer de forma nativa. Así es como funciona:</p>

<h3>Cómo detecta las llamadas</h3>
<p>SoundDial monitorea el estado del micrófono de tu Mac — el mismo indicador que muestra el punto naranja en tu barra de menús cuando una app está usando el micrófono. Cuando detecta que una app de comunicación ha activado tu micrófono, sabe que ha empezado una llamada.</p>

<p>Funciona con todas las principales apps de comunicación:</p>
<ul>
  <li><strong>Zoom</strong></li>
  <li><strong>Microsoft Teams</strong></li>
  <li><strong>FaceTime</strong></li>
  <li><strong>Discord</strong></li>
  <li><strong>Slack</strong> (huddles y llamadas)</li>
  <li><strong>Google Meet</strong> (vía Chrome)</li>
  <li><strong>Cisco Webex</strong></li>
  <li><strong>Skype</strong></li>
</ul>

<h3>Qué ocurre cuando empieza una llamada</h3>
<p>En el momento en que tu micrófono se activa para una llamada, SoundDial reduce automáticamente el volumen de todas las apps que no son de comunicación a un nivel que tú configuras — el valor predeterminado es el 30%. El audio de tu llamada se mantiene a volumen completo. La música de fondo baja a un nivel sutil. Los sonidos de notificación se vuelven silenciosos.</p>

<p>Aparece un pequeño indicador verde en la cabecera de SoundDial para confirmar que la atenuación automática está activa.</p>

<h3>Qué ocurre cuando termina la llamada</h3>
<p>Cuando cuelgas y el micrófono se desactiva, SoundDial restaura todos los volúmenes de las apps exactamente a donde estaban antes de que empezara la llamada. Tu música vuelve al 50% (o donde la tenías). Sin necesidad de ajuste manual.</p>

<h3>Configurar el nivel de atenuación</h3>
<p>En los ajustes de SoundDial, puedes ajustar el <strong>nivel de atenuación</strong> — cuánto se reduce el audio de fondo durante una llamada. El control va del 10% (apenas audible) al 80% (todavía bastante presente). El valor predeterminado del 30% funciona bien para la mayoría de la gente: la música se nota pero no interfiere con la conversación.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Función de atenuación automática de SoundDial bajando automáticamente el volumen de la música durante una llamada de Zoom en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>Por qué la atenuación automática es mejor que pausar</h2>

<p>Pausar la música antes de una llamada parece sencillo, pero la atenuación automática es mejor en varios aspectos:</p>

<ul>
  <li><strong>Es automática.</strong> Nunca se te olvida. Sin apresurarse cuando entra una llamada inesperada.</li>
  <li><strong>Mantienes la música de fondo.</strong> Mucha gente prefiere música de fondo suave durante las llamadas en lugar de silencio. La atenuación automática te permite mantenerla a un nivel cómodo.</li>
  <li><strong>Maneja múltiples apps.</strong> No es solo la música — los sonidos de notificación, las pestañas del navegador y cualquier otra fuente de audio también se atenúan simultáneamente.</li>
  <li><strong>Restaura perfectamente.</strong> Cuando termina la llamada, cada app vuelve a su volumen exactamente anterior. Sin reajustes.</li>
  <li><strong>Funciona para llamadas consecutivas.</strong> Si tienes tres reuniones seguidas, la atenuación automática las maneja todas sin que toques nada.</li>
</ul>

<h2>Configuración en menos de un minuto</h2>

<ol>
  <li>Instala <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial desde la Mac App Store</a></li>
  <li>Abre Ajustes → pestaña Atenuar automáticamente</li>
  <li>Activa la atenuación automática</li>
  <li>Ajusta el control del nivel de atenuación a tu preferencia</li>
  <li>Listo — la atenuación automática está activa</li>
</ol>

<p>La próxima vez que te unas a una llamada de Zoom, Teams o FaceTime, tu audio de fondo se bajará automáticamente. Cuando cuelgues, vuelve. Compra única, sin suscripción.</p>
`,
  },
  "how-to-mute-one-app-on-mac": {
    slug: "how-to-mute-one-app-on-mac",
    title: "Cómo silenciar una app en Mac sin silenciar todo lo demás",
    description:
      "Slack está sonando. Estás en una llamada. Quieres silenciar Slack pero seguir escuchando la llamada. macOS no te lo permite — así es como hacerlo de todas formas.",
    date: "2026-06-03",
    readTime: "6 min de lectura",
    content: `
<p>Estás en una llamada de Zoom. Slack sigue haciendo sonidos de notificación. Una pestaña de YouTube que habías olvidado empieza a reproducirse automáticamente. Pulsas la tecla de silencio — y ahora tampoco puedes escuchar la llamada. macOS silencia <em>todo</em>. No hay forma integrada de silenciar solo una app.</p>

<p>En Windows, harías clic derecho en el icono del altavoz, abrirías el mezclador de volumen y pulsarías el botón de silencio junto a Slack. Listo. Slack está en silencio, todo lo demás sigue sonando. macOS no tiene equivalente.</p>

<p>Esta guía cubre todos los métodos disponibles para silenciar una app específica en tu Mac — desde soluciones alternativas integradas hasta la única solución que funciona realmente como un botón de silencio adecuado.</p>

<h2>Por qué macOS no puede silenciar apps individuales</h2>

<p>macOS trata el audio como un único flujo. El audio de cada app se mezcla antes de llegar a los altavoces, y el único control de volumen que te da Apple opera sobre esa salida mezclada final. No hay forma de llegar a esa mezcla y silenciar una app sin afectar al resto.</p>

<p>Esto no es una limitación de hardware — es una decisión de diseño de software. El framework Core Audio de macOS soporta el control de audio por proceso a nivel de API. Apple simplemente no ha construido una forma de acceder a ello de cara al usuario.</p>

<h2>Soluciones alternativas integradas (y sus limitaciones)</h2>

<h3>1. Desactiva las notificaciones de la app</h3>
<p>Ve a <strong>Ajustes del Sistema → Notificaciones</strong> y encuentra la app que quieres silenciar. Puedes desactivar los sonidos de sus notificaciones, o desactivar las notificaciones por completo.</p>
<p><strong>El problema:</strong> Esto solo funciona para los sonidos de notificación. Si la app produce otros sonidos — reproducción de medios, audio de llamadas, sonidos dentro de la app — esto no los tocará. Y también perderás las notificaciones visuales, no solo el sonido.</p>

<h3>2. Usa el modo de Concentración</h3>
<p>Los modos de Concentración de macOS (No molestar, Trabajo, Personal, etc.) pueden suprimir los sonidos de notificación de apps específicas. Puedes configurar qué apps tienen permitido notificarte en cada modo de Concentración.</p>
<p><strong>El problema:</strong> Los modos de Concentración son para notificaciones, no para audio. No silenciarán un huddle de Slack, una pestaña del navegador reproduciendo audio ni ninguna reproducción de medios. También requieren configuración previa para cada modo — no puedes simplemente "silenciar esta app ahora mismo".</p>

<h3>3. Cierra la app</h3>
<p>La opción nuclear. Si cierras Slack por completo, no puede hacer sonidos. Obviamente esto también significa que no puedes ver ningún mensaje hasta que lo vuelvas a abrir.</p>
<p><strong>El problema:</strong> No quieres cerrar la app — quieres <em>seguir usándola</em> sin escucharla. Hay una gran diferencia entre "silenciar" y "cerrar".</p>

<h3>4. Usa los propios ajustes de la app</h3>
<p>Algunas apps tienen un ajuste de "silenciar sonidos" o "silenciar notificaciones" enterrado en algún lugar de sus preferencias. Slack lo tiene en Preferencias → Notificaciones → Sonido y aspecto. Spotify tiene un icono de altavoz en el reproductor.</p>
<p><strong>El problema:</strong> Tienes que encontrar y navegar por los ajustes de cada app individualmente. Muchas apps no tienen esta opción en absoluto. Y cambiar entre "silenciado" y "no silenciado" significa volver a las preferencias cada vez, en lugar de hacer clic en un botón.</p>

<h2>La solución real: un botón de silencio por app</h2>

<p>Lo que realmente quieres es muy simple: un botón de silencio junto a cada app que la silencia instantáneamente, sin afectar a nada más. Clic para silenciar, clic para desilenciar. La app sigue funcionando, sigues viendo su contenido — simplemente no la escuchas.</p>

<p>Esto es exactamente lo que hace un mezclador de volumen por app. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> se sienta en tu barra de menús y muestra cada app en ejecución con su propio control de volumen y botón de silencio.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial mostrando botones de silencio por app para cada aplicación en la barra de menús de macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Para silenciar una app:</p>
<ol>
  <li>Haz clic en el icono de SoundDial en tu barra de menús</li>
  <li>Encuentra la app que quieres silenciar</li>
  <li>Haz clic en el icono de altavoz junto a ella</li>
</ol>

<p>Eso es todo. La app está silenciada. Todo lo demás sigue sonando al volumen que tenía. Vuelve a hacer clic en el icono de altavoz para desilenciar — el volumen vuelve exactamente a donde estaba antes.</p>

<h2>Más allá del silencio: control de volumen por app</h2>

<p>Una vez que tienes un mezclador por app, te das cuenta de que el silencio es solo el extremo de lo que realmente quieres. La mayoría de las veces, no quieres silenciar completamente una app — quieres hacerla <em>más silenciosa</em>.</p>

<ul>
  <li>Notificaciones de Slack al 15% — lo suficientemente sutil para no interrumpir, lo suficientemente presente para notarlo</li>
  <li>Música al 30% — nivel de fondo que no compite con la conversación</li>
  <li>Navegador al 60% — cómodo para la reproducción de vídeo</li>
  <li>Zoom al 100% — volumen completo para la llamada que importa</li>
</ul>

<p>SoundDial le da a cada app un control del 0% al 200%. Puedes hacer apps más silenciosas que su mínimo integrado o más fuertes que su máximo integrado. Y con los <strong>perfiles de volumen</strong>, puedes guardar tu configuración preferida y cambiar entre preajustes — modo "Reunión", modo "Concentración", modo "Música" — con un solo clic.</p>

<p>La función de atenuación automática va aún más lejos: cuando empiezas una llamada, SoundDial baja automáticamente todo excepto tu app de comunicación. Cuando termina la llamada, todo vuelve a subir. Nunca tocas un control.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a> — 14,99 € compra única, sin suscripción, macOS 14.2+.</p>
`,
  },
  "volume-mixer-for-mac": {
    slug: "volume-mixer-for-mac",
    title: "Mezclador de volumen para Mac: la función que falta que macOS sigue sin tener",
    description:
      "Windows ha tenido un mezclador de volumen desde 2006. Aquí tienes por qué macOS sigue sin tenerlo — y la mejor forma de obtener control de volumen por app en tu Mac en 2026.",
    date: "2026-06-01",
    readTime: "9 min de lectura",
    content: `
<p>Haz clic derecho en el icono del altavoz de cualquier PC con Windows y encontrarás el Mezclador de volumen — un panel que muestra cada aplicación que está haciendo sonido, cada una con su propio control de volumen independiente. Puedes bajar Spotify al 20% mientras mantienes la llamada de Zoom al 100%. Puedes silenciar Chrome sin tocar nada más. Está ahí desde Windows Vista en 2006.</p>

<p>Ahora haz lo mismo en un Mac. Haz clic en el icono de sonido en la barra de menús. Obtienes un control. Eso es todo. Un control que controla todo a la vez. Cada app, cada notificación, cada sonido del sistema — todos bloqueados juntos.</p>

<p>Esto no es una queja de nicho. Es la función de audio más solicitada en macOS, y Apple la ha ignorado durante veinte años.</p>

<h2>Qué hace realmente un mezclador de volumen</h2>

<p>Un mezclador de volumen te da <strong>control de volumen independiente para cada aplicación</strong> en tu ordenador. En lugar de un único control maestro, obtienes un control por app. Cada control solo afecta a la salida de audio de esa app específica.</p>

<p>Así es como se ve en la práctica:</p>

<ul>
  <li><strong>Spotify</strong> al 25% — música de fondo a un nivel cómodo</li>
  <li><strong>Zoom</strong> al 100% — escuchar cada palabra de la reunión</li>
  <li><strong>Slack</strong> silenciado — sin pings de notificación durante el tiempo de concentración</li>
  <li><strong>Safari</strong> al 60% — vídeo de YouTube a volumen moderado</li>
  <li><strong>Sonidos del Sistema</strong> al 10% — retroalimentación sutil sin sobresaltarte</li>
</ul>

<p>Todos funcionando simultáneamente, cada uno a su propio volumen. Cambia uno y nada más se mueve. Eso es lo que hace un mezclador de volumen, y eso es lo que macOS no tiene.</p>

<h2>Por qué Apple no ha construido uno</h2>

<p>No es una limitación técnica. El framework de audio de macOS — Core Audio — soporta completamente el enrutamiento y el control de volumen por proceso a nivel de API. Apple usa estas capacidades internamente. Simplemente no las ha expuesto a los usuarios.</p>

<p>La razón probable es la filosofía de diseño de Apple: menos opciones, interfaz más simple. Un control es más limpio que doce. Y para alguien que solo hace una cosa a la vez — escucha música O hace una llamada O ve un vídeo — un control está bien.</p>

<p>Pero así no es como la gente usa los ordenadores en 2026. El trabajo remoto significa que estás en una llamada con música sonando y Slack haciendo ping y una pestaña del navegador reproduciendo un vídeo automáticamente, todo al mismo tiempo. El modelo de "un control para todo" se derrumba completamente cuando tienes cinco fuentes de audio compitiendo por tus oídos.</p>

<h2>Las soluciones alternativas de macOS (y por qué se quedan cortas)</h2>

<h3>Usa el control de volumen integrado de cada app</h3>
<p>Spotify tiene un control de volumen. VLC tiene uno. QuickTime tiene uno. Pero esto significa cambiar a cada app individualmente, encontrar su control de volumen, ajustarlo y volver. Está disperso por docenas de lugares diferentes, y la mayoría de las apps — Slack, Mail, Safari, Chrome — ni siquiera tienen uno.</p>

<h3>Usa "No molestar" para silenciar las notificaciones</h3>
<p>Los modos de Concentración pueden suprimir los sonidos de notificación, pero son binarios — todo o nada. No puedes decir "mantén los sonidos de Slack pero hazlos más silenciosos". Y los modos de Concentración no tocan en absoluto el volumen de medios o llamadas.</p>

<h3>Usa la Configuración de Audio MIDI</h3>
<p>Esta utilidad integrada gestiona los dispositivos de audio y las tasas de muestreo. No tiene nada que ver con el volumen por app. Es una herramienta de configuración de dispositivos, no un mezclador.</p>

<h3>Crea dispositivos de salida múltiple</h3>
<p>Puedes combinar salidas de audio en un dispositivo agregado, pero esto envía el mismo audio a múltiples salidas — no te da control por app. Es útil si quieres sonido tanto en los altavoces como en los auriculares simultáneamente, pero eso es un problema completamente diferente.</p>

<p>Ninguna de estas soluciones alternativas resuelve el problema fundamental: macOS no tiene forma integrada de decir "pon esta app más silenciosa sin afectar a nada más".</p>

<h2>Qué buscar en un mezclador de volumen para Mac</h2>

<p>Si Apple no lo va a construir, las apps de terceros llenarán el hueco. Pero no todos los mezcladores de volumen son iguales. Esto es lo que separa uno bueno de uno mediocre:</p>

<h3>Detección de apps en tiempo real</h3>
<p>El mezclador debería detectar automáticamente cada app que está produciendo audio en ese momento. No deberías tener que añadir apps manualmente ni configurar nada. Abre una app y aparece en el mezclador. Ciérrala y desaparece.</p>

<h3>Rango de volumen más allá del 100%</h3>
<p>Algunas apps son demasiado silenciosas incluso al máximo volumen — reproductores de podcasts silenciosos, pestañas del navegador con audio suave, videollamadas donde el micrófono de alguien es bajo. Un buen mezclador te permite <strong>amplificar el volumen hasta el 200%</strong>, amplificando efectivamente el audio más allá de lo que la propia app puede producir.</p>

<h3>Silencio por app con un clic</h3>
<p>Deberías poder silenciar cualquier app con un solo clic — sin mover el control. Cuando dessilencies, debería volver exactamente a donde estaba. Esto es fundamental para silenciar rápidamente una app ruidosa durante una llamada.</p>

<h3>Perfiles para diferentes situaciones</h3>
<p>No quieres ajustar manualmente ocho controles cada vez que cambias de "trabajar con música" a "videollamada" a "jugar". Los perfiles te permiten guardar una configuración de volumen y aplicarla con un clic. Un perfil de "Reunión" podría poner Zoom al 100%, la música al 15% y las notificaciones al 0%. Un perfil de "Concentración" podría silenciar todo excepto Spotify.</p>

<h3>Atenuación automática durante las llamadas</h3>
<p>La mejor función que puede tener un mezclador de volumen: bajar automáticamente el audio de fondo cuando te unes a una llamada y restaurarlo cuando termina. Sin ajuste manual. Tu música se pone silenciosa cuando Zoom activa tu micrófono, y vuelve cuando cuelgas.</p>

<h3>Integración en la barra de menús</h3>
<p>Un mezclador de volumen debería vivir en la barra de menús — un clic para abrir, ajustar y cerrar. No debería ser una ventana completa, no debería ocupar espacio en el Dock y no debería requerir que cambies de tu app actual. Deberías poder ajustar los volúmenes sin perder el foco en lo que estás haciendo.</p>

<h2>SoundDial: el mezclador de volumen que macOS debería tener integrado</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> es una app nativa de macOS en la barra de menús que te da exactamente lo que Apple no te dará — control de volumen independiente para cada app de tu Mac.</p>

<p>Se sienta en tu barra de menús y muestra cada aplicación en ejecución con su propio control de volumen. Arrastra un control para ajustar el volumen de esa app del 0% al 200%. Haz clic en el icono de altavoz para silenciarla instantáneamente. Cambia entre perfiles guardados para diferentes situaciones. Activa la atenuación automática y tu música baja automáticamente cuando empieza una llamada.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — mezclador de volumen por app para macOS mostrando controles deslizantes de volumen individuales por app en la barra de menús" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Características principales:</p>
<ul>
  <li><strong>Controles deslizantes de volumen por app</strong> — rango del 0% al 200% para cada app en ejecución</li>
  <li><strong>Silencio con un clic</strong> — silencia cualquier app sin mover su control</li>
  <li><strong>Perfiles de volumen</strong> — guarda y cambia entre configuraciones de volumen</li>
  <li><strong>Atenuación automática</strong> — la música baja automáticamente durante las llamadas</li>
  <li><strong>Atajos de teclado</strong> — alterna el mezclador o silencia todas las apps con una tecla de acceso rápido</li>
  <li><strong>Cambio de dispositivo de salida</strong> — cambia altavoces/auriculares desde el mismo panel</li>
  <li><strong>Memoria de volumen</strong> — recuerda el volumen de cada app entre reinicios</li>
</ul>

<p>Compra única. Sin suscripción. macOS 14.2+. <a href="https://apps.apple.com/app/sounddial/id6772792641">Obtén SoundDial en la Mac App Store</a>.</p>
`,
  },
  "background-music-alternative-mac": {
    slug: "background-music-alternative-mac",
    title: "La mejor alternativa a Background Music para Mac (2026)",
    description: "¿Background Music deja de funcionar en macOS más reciente? El mezclador de volumen por app más fiable es SoundDial, una app en la Mac App Store con sandbox, refuerzo y perfiles.",
    date: "2026-07-23",
    readTime: "5 min de lectura",
    content: `<p>Si Background Music ha dejado de funcionar tras una actualización de macOS, la alternativa más fiable es <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>: un mezclador de volumen por app en la barra de menús, desde la Mac App Store. Le da a cada app su propio deslizador de volumen, añade silencio, refuerzo, perfiles de volumen y atenuación automática, y está totalmente en sandbox y revisado por Apple, así que no hay controladores de audio que se rompan en la próxima versión de macOS.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — La mejor alternativa a Background Music para Mac (2026)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Por qué Background Music se rompe en macOS más reciente</h2>

<p>Background Music es un proyecto gratuito y de código abierto realmente ingenioso. Les dio a los usuarios de Mac algo que Apple nunca ha ofrecido: un mezclador de volumen por app, del tipo que Windows tiene desde hace años. Pero su diseño es también la razón por la que sigue fallando.</p>

<p>Para enrutar y controlar el audio, Background Music instala un dispositivo de audio virtual: un controlador a nivel de sistema que intercepta el sonido de tu Mac. Ese enfoque funcionaba bien en macOS más antiguos, pero cada versión importante refuerza la seguridad en torno a las extensiones de kernel y de audio. Los síntomas comunes que reportan los usuarios:</p>

<ul>
<li>Ningún sonido en absoluto tras instalarlo o tras una actualización del sistema.</li>
<li>El dispositivo virtual no carga, así que el enrutamiento de audio se detiene en silencio.</li>
<li>La app necesita una reinstalación, un reinicio o la eliminación manual del controlador para recuperarse.</li>
<li>El desarrollo depende de la comunidad y del ritmo de voluntarios, así que las correcciones para un macOS nuevo pueden retrasarse.</li>
</ul>

<p>Nada de esto hace que Background Music sea "malo". Solo significa que una herramienta gratuita basada en controladores es frágil por naturaleza, y si dependes del volumen por app cada día, esa fragilidad se vuelve molesta rápido.</p>

<h2>Qué buscar en un reemplazo</h2>

<p>Antes de elegir cualquier alternativa, decide qué necesitas realmente:</p>

<ul>
<li><strong>Fiabilidad entre actualizaciones de macOS.</strong> Si instala una extensión de kernel o de audio, espera fallos ocasionales.</li>
<li><strong>Control real por app.</strong> Volumen y silencio independientes para cada app es lo mínimo.</li>
<li><strong>Refuerzo.</strong> Algunas apps (herramientas de reuniones silenciosas, ciertos navegadores) son simplemente demasiado silenciosas: quieres poder superar el 100%.</li>
<li><strong>Funciones prácticas.</strong> Los perfiles y la atenuación automática son lo que convierte una utilidad en algo que mantienes abierto todo el día.</li>
<li><strong>Instalación segura.</strong> Una app de la Mac App Store con sandbox no puede tocar las entrañas del sistema, así que desinstalarla es limpio y las actualizaciones son automáticas.</li>
</ul>

<h2>Por qué SoundDial es la opción fiable</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> se creó para resolver exactamente el problema con el que se topan los usuarios de Background Music: quieren volumen por app, pero no quieren estar cuidando de un controlador. Vive en tu barra de menús y hace bien el trabajo principal:</p>

<ul>
<li><strong>Volumen independiente para cada app</strong>, con silencio por app en el mismo panel.</li>
<li><strong>Refuerzo por app</strong> para hacer que las apps silenciosas suenen lo bastante fuerte como para oírlas de verdad.</li>
<li><strong>Perfiles de volumen</strong>: guarda una mezcla (digamos, "reunión" o "juego") y cambia al instante en lugar de arrastrar deslizadores cada vez.</li>
<li><strong>Atenuación automática</strong>, para que el audio de fondo baje automáticamente cuando corresponde.</li>
<li><strong>Cambio rápido de salida</strong> entre altavoces, auriculares y otros dispositivos.</li>
</ul>

<p>La mayor diferencia es cómo se instala. SoundDial se distribuye a través de la Mac App Store, lo que significa que está revisado por Apple y en sandbox. No hay ningún DMG que arrastrar, ni controlador de audio ni extensión de sistema, ni acceso al kernel. Esa es la razón más importante por la que no se romperá como Background Music cuando llegue un nuevo macOS: no está enganchado en las partes del sistema que Apple sigue bloqueando.</p>

<p>Cuesta <strong>14,99 € un único pago</strong>. No es gratis, pero no hay suscripción, y estás pagando por algo mantenido y seguro de instalar.</p>

<h2>SoundDial frente a Background Music y las herramientas gratuitas</h2>

<p>Background Music no es tu única opción gratuita, así que aquí tienes un panorama honesto:</p>

<ul>
<li><strong>Background Music (gratis, código abierto):</strong> volumen por app, pero basado en controladores, propenso a romperse en macOS más reciente, y carece de refuerzo, perfiles y atenuación automática.</li>
<li><strong>FineTune (gratis, código abierto):</strong> una ligera app de volumen por app en la barra de menús. Buena si lo único que necesitas es que sea gratis, pero escasa en extras.</li>
<li><strong>eqMac (gratis):</strong> principalmente un ecualizador y potenciador del sistema, no un verdadero mezclador por app.</li>
<li><strong>SoundSource de Rogue Amoeba (~$39):</strong> la opción de nivel profesional, con ecualizador por app y enrutamiento de salida completo. Excelente, pero cuesta más del doble que SoundDial y aun así requiere una descarga más un controlador de captura de audio.</li>
<li><strong>SoundDial (14,99 €, Mac App Store):</strong> el término medio: volumen por app real, silencio, refuerzo, perfiles y atenuación, entregado como una instalación limpia en sandbox sin controladores.</li>
</ul>

<p>Si necesitas ecualizador por app o enrutamiento de estudio complejo, SoundSource vale el dinero extra. Si quieres una herramienta gratuita para experimentar y toleras algún fallo ocasional, FineTune o Background Music servirán. Pero si tu objetivo es "darle a cada app su propio volumen y dejar de que se rompa en cada actualización de macOS", SoundDial cumple ese objetivo con el mínimo esfuerzo.</p>

<h2>El contexto de macOS que hace esto necesario</h2>

<p>Vale la pena decirlo claramente: macOS no tiene un mezclador de volumen por app integrado. Windows lo tiene desde hace años en su panel de volumen, pero en un Mac el deslizador del sistema controla todo a la vez. Esa carencia es toda la razón por la que existen herramientas como Background Music y SoundDial. Como Apple no la está cubriendo, la pregunta práctica es simplemente en qué enfoque de terceros confías: un controlador gratuito que lucha contra el sistema operativo, o una app en sandbox que trabaja con él.</p>

<p>¿Listo para dejar de pelearte con controladores de audio rotos? Consigue <a href="https://apps.apple.com/app/id6772792641">SoundDial en la Mac App Store</a> por 14,99 € y controla el volumen de cada app de la forma fiable.</p>`,
  },
  "soundsource-vs-sounddial-mac": {
    slug: "soundsource-vs-sounddial-mac",
    title: "SoundSource frente a SoundDial: ¿qué app de volumen para Mac gana?",
    description: "SoundSource ($39, nivel profesional) frente a SoundDial (14,99 €, App Store). Compara volumen por app, refuerzo, perfiles y atenuación automática para elegir el mezclador de Mac adecuado.",
    date: "2026-07-23",
    readTime: "6 min de lectura",
    content: `<p>Si solo quieres control de volumen por app que se instale de forma limpia y cueste menos, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> es la mejor compra para la mayoría: 14,99 € un único pago, desde la Mac App Store, con volumen por app, silencio, refuerzo, perfiles y atenuación automática. Elige SoundSource de Rogue Amoeba (~$39) solo si necesitas específicamente ecualizador por app y enrutamiento de salida avanzado.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — SoundSource frente a SoundDial: ¿qué app de volumen para Mac gana?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>La versión corta</h2>
<p>macOS todavía no tiene un mezclador de volumen por app integrado. Windows lo tiene desde hace años, pero en un Mac el deslizador de volumen del sistema mueve todo a la vez. Tanto SoundSource como SoundDial existen para cubrir esa carencia. Simplemente apuntan a compradores distintos.</p>
<ul>
<li><strong>SoundDial</strong>: 14,99 € un único pago, Mac App Store, app en la barra de menús. Volumen independiente por app, silencio por app, refuerzo por app, perfiles guardados, atenuación automática y cambio rápido de salida. En sandbox y revisado por Apple, así que sin instalación de controladores.</li>
<li><strong>SoundSource</strong>: ~$39, descarga directa desde Rogue Amoeba. Todo lo anterior más ecualizador por app, enrutamiento de salida avanzado y efectos de audio. Requiere instalar un pequeño controlador de captura de audio.</li>
</ul>

<h2>Precio y cómo lo compras</h2>
<p>Esta es la división más clara. SoundSource cuesta aproximadamente $39 y lo vende directamente Rogue Amoeba. SoundDial cuesta 14,99 € como pago único en la Mac App Store: algo más de un tercio del precio.</p>
<p>Como <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> se distribuye a través de la App Store, está en sandbox, notarizado y revisado por Apple. Pulsas Obtener, se instala y ya está. No hay ningún DMG que montar, ni permisos que otorgar a un componente cercano al kernel, ni controlador de audio ni extensión de sistema. También se actualiza con tu flujo normal de la App Store y se sincroniza con tus otros Mac con el mismo Apple ID.</p>
<p>SoundSource se descarga fuera de la App Store e instala un controlador de captura de audio para poder interceptar y procesar el audio de cada app. Eso es lo que desbloquea sus funciones profesionales, pero también implica un paso de instalación adicional y un componente que vive más adentro del sistema.</p>

<h2>Lo que hace SoundSource que SoundDial no hace</h2>
<p>SoundSource se gana su precio para un tipo concreto de usuario. Si alguno de estos te describe, vale el dinero extra:</p>
<ul>
<li><strong>Ecualizador por app.</strong> Quieres un ecualizador de 10 bandas en, digamos, Spotify mientras dejas Zoom plano. SoundDial hace volumen, no ecualización.</li>
<li><strong>Enrutamiento de salida avanzado.</strong> Enviar una app a tus altavoces y otra a los auriculares o a una interfaz concreta, con control fino.</li>
<li><strong>Efectos de audio y plugins.</strong> SoundSource puede alojar efectos por app: territorio verdaderamente profesional.</li>
</ul>
<p>Rogue Amoeba tiene una trayectoria larga y de confianza. SoundSource es una herramienta seria y tiene el precio de una. Si eres profesional del audio o un usuario intensivo de múltiples salidas, es la decisión correcta.</p>

<h2>Lo que SoundDial hace mejor para el uso diario</h2>
<p>La mayoría de quienes buscan un "mezclador de volumen para Mac" no necesitan un ecualizador. Necesitan una app más silenciosa que otra, y no quieren pelearse con un instalador para conseguirlo. SoundDial cubre eso de forma limpia y añade un par de cosas que vale la pena destacar:</p>
<ul>
<li><strong>Refuerzo por app.</strong> Algunas apps y vídeos son simplemente demasiado silenciosos incluso al 100%. SoundDial puede empujar una sola app por encima de su techo normal para que una reunión o un pódcast silencioso por fin se oiga.</li>
<li><strong>Perfiles de volumen.</strong> Guarda una configuración completa (música baja, navegador silenciado, app de llamadas alta) y recupérala al instante. Genial para cambiar entre "concentración", "reunión" y "juego" sin arrastrar cinco deslizadores.</li>
<li><strong>Atenuación automática.</strong> Baja automáticamente el audio de fondo (como la música) cuando arranca otra fuente, para que las notificaciones, llamadas o vídeos no queden enterrados.</li>
<li><strong>Cambio rápido de salida.</strong> Salta entre altavoces, auriculares y otros dispositivos desde la barra de menús.</li>
</ul>
<p>Todo eso funciona desde un menú desplegable en la barra de menús, así que está a un clic de distancia y fuera de tu vista el resto del tiempo.</p>

<h2>Las alternativas gratuitas, brevemente</h2>
<p>Verás algunas opciones gratuitas mencionadas en las mismas búsquedas. Vale la pena conocerlas:</p>
<ul>
<li><strong>Background Music</strong>: gratis y de código abierto, te da volumen por app básico. Pero puede romperse en versiones más recientes de macOS, y no tiene refuerzo, perfiles ni atenuación automática.</li>
<li><strong>FineTune</strong>: una app de volumen gratuita y de código abierto en la barra de menús. Sencilla, pero limitada en alcance.</li>
<li><strong>eqMac</strong>: ecualizador y potenciador de sistema gratuito, más una herramienta de ecualización a nivel de sistema que un verdadero mezclador por app.</li>
</ul>
<p>Lo gratuito es genial si te funciona. El compromiso es la compatibilidad y el soporte: las herramientas de audio de código abierto pueden quedarse atrás respecto a las actualizaciones de macOS, y funciones como perfiles y atenuación generalmente no están. Si tu configuración importa para tu jornada de trabajo, pagar una vez por algo revisado y mantenido suele ser el camino más tranquilo.</p>

<h2>¿Cuál deberías comprar?</h2>
<p>Responde una pregunta: ¿necesitas ecualizador por app o enrutamiento de salida avanzado?</p>
<ul>
<li><strong>Sí</strong>: compra SoundSource. Está hecho para eso, y los ~$39 son justos por una herramienta profesional con un motor a nivel de controlador.</li>
<li><strong>No, solo quiero volumen por app, refuerzo y una instalación limpia</strong>: compra SoundDial. Obtienes la mezcla que realmente importa a diario, más perfiles y atenuación automática, por 14,99 € y sin líos de controladores.</li>
</ul>
<p>Para la gran mayoría de usuarios de Mac, ese segundo grupo es la respuesta honesta. Estás pagando por control del volumen, no por un estudio.</p>

<p><strong>¿Listo para arreglar el volumen del Mac de forma fácil?</strong> Consigue <a href="https://apps.apple.com/app/id6772792641">SoundDial en la Mac App Store</a>: 14,99 € un único pago, sin controladores, sin DMG. Volumen por app, refuerzo, perfiles y atenuación automática en un clic.</p>`,
  },
  "cheaper-soundsource-alternative-mac": {
    slug: "cheaper-soundsource-alternative-mac",
    title: "Una alternativa más barata a SoundSource para volumen por app en Mac",
    description: "¿Quieres volumen por app al estilo SoundSource sin el precio de $39? SoundDial es un mezclador de la Mac App Store en la barra de menús por 14,99 € con refuerzo, perfiles y atenuación automática.",
    date: "2026-07-23",
    readTime: "5 min de lectura",
    content: `<p>Si quieres control de volumen por app al estilo SoundSource en tu Mac pero $39 te parece caro, la solución fiable más rápida es <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>. Es un mezclador en la barra de menús de 14,99 € un único pago desde la Mac App Store que le da a cada app su propio deslizador de volumen, silencio y refuerzo, más perfiles y atenuación automática, sin ninguna descarga ni controlador de audio que instalar.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Una alternativa más barata a SoundSource para volumen por app en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Por qué la gente busca una alternativa a SoundSource</h2>
<p>SoundSource de Rogue Amoeba es un software excelente. Es realmente de nivel profesional: ecualizadores por app, efectos de audio y enrutamiento de salida que te permite enviar una app a tus auriculares y otra a tus altavoces. Pero ese poder viene con dos puntos de fricción. Primero, el precio: alrededor de $39. Segundo, instala un controlador de captura de audio a nivel de sistema fuera de la App Store, algo con lo que algunas personas son cautelosas en una máquina de trabajo o simplemente no quieren gestionar entre actualizaciones de macOS.</p>
<p>Para la mayoría, la necesidad real es mucho más simple: bajar Spotify sin tocar una llamada de Zoom, silenciar la app de una pestaña ruidosa del navegador, o reforzar un reproductor de vídeo silencioso por encima del 100%. Si ese eres tú, estás pagando dinero de nivel profesional por funciones que nunca abrirás.</p>

<h2>Qué hace SoundDial y cuánto cuesta</h2>
<p>SoundDial se centra en la tarea del volumen por app y lo hace de forma limpia. Abre la barra de menús y obtienes una lista en vivo de todo lo que está produciendo sonido, cada elemento con su propio control:</p>
<ul>
<li><strong>Volumen independiente por app</strong>: un deslizador por aplicación, ajustado en tiempo real.</li>
<li><strong>Silencio por app</strong>: silencia una app al instante sin pausar nada más.</li>
<li><strong>Refuerzo de volumen por app</strong>: empuja las apps silenciosas por encima de su máximo normal cuando un vídeo o una llamada están demasiado bajos.</li>
<li><strong>Perfiles de volumen</strong>: guarda una mezcla (p. ej. "Concentración", "Juego", "Reunión") y cambia en un clic.</li>
<li><strong>Atenuación automática</strong>: baja automáticamente otras apps cuando algo más importante empieza a reproducirse.</li>
<li><strong>Cambio rápido de salida</strong>: salta entre altavoces, auriculares y otros dispositivos desde el mismo menú.</li>
</ul>
<p>El precio es <strong>14,99 €, pagados una sola vez</strong>: sin suscripción. Eso es aproximadamente un tercio del coste de SoundSource, por las funciones de volumen que la mayoría de los usuarios realmente utilizan.</p>

<h2>La diferencia de la App Store</h2>
<p>Como SoundDial se distribuye a través de la <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a>, está revisado por Apple y en sandbox. No hay ningún DMG que arrastrar, ni extensión de kernel ni controlador de captura de audio que aprobar, ni un actualizador aparte. Lo instalas como cualquier otra app de la App Store y funciona. Cuando macOS se actualiza, no te quedas preguntándote si un componente de audio de bajo nivel sigue funcionando.</p>
<blockquote>macOS todavía no tiene un mezclador de volumen por app integrado. Windows lo tiene desde hace años, pero en un Mac el volumen del sistema es todo o nada, que es exactamente la carencia que estas herramientas cubren.</blockquote>

<h2>Cómo se compara con las opciones gratuitas</h2>
<p>SoundSource no es tu única alternativa. Hay herramientas gratuitas, y ser honesto sobre ellas importa:</p>
<ul>
<li><strong>Background Music</strong> es una app de volumen por app gratuita y de código abierto. Funciona para mucha gente, pero puede romperse en versiones más recientes de macOS, las actualizaciones son irregulares, y no tiene refuerzo, ni perfiles, ni atenuación automática.</li>
<li><strong>FineTune</strong> es una app de volumen gratuita y de código abierto en la barra de menús: ligera y práctica, pero de nuevo carece de las funciones de perfiles y atenuación.</li>
<li><strong>eqMac</strong> es un ecualizador y potenciador de sistema gratuito. Es más una herramienta de ecualización/refuerzo que un verdadero mezclador por app, y no está centrada en deslizadores individuales por app.</li>
</ul>
<p>Lo gratuito es una opción legítima. El compromiso es la fiabilidad y las funciones: las herramientas de audio de código abierto dependen del mantenimiento voluntario y pueden quedarse atrás respecto a los cambios de macOS, y ninguna de las opciones gratuitas incluye perfiles más atenuación automática como lo hace SoundDial. Si tu configuración es simple y no te importa algún fallo ocasional, una app gratuita puede ser suficiente. Si quieres algo mantenido, en sandbox y que simplemente funciona, los 14,99 € te están comprando exactamente eso.</p>

<h2>Guía rápida de decisión</h2>
<ul>
<li><strong>Necesitas ecualizador por app, efectos de audio y enrutar una app a un dispositivo de salida distinto</strong> → SoundSource vale su precio. Nada de esto lo reemplaza por completo.</li>
<li><strong>Necesitas principalmente volumen por app, silencio, refuerzo, perfiles y atenuación, sin controladores</strong> → SoundDial a 14,99 € es la opción de mejor relación calidad-precio.</li>
<li><strong>Quieres gratis y no te importa el riesgo de mantenimiento</strong> → prueba primero Background Music, FineTune o eqMac.</li>
</ul>

<h2>Cómo configurarlo</h2>
<p>Empezar lleva alrededor de un minuto:</p>
<ul>
<li>Instala SoundDial desde la Mac App Store: sin descarga externa.</li>
<li>Concede el permiso de audio que macOS solicita en el primer inicio.</li>
<li>Reproduce sonido en un par de apps y abre el icono de la barra de menús; verás cada una con su propio deslizador.</li>
<li>Arrastra para ajustar niveles, toca para silenciar, o supera el 100% para reforzar.</li>
<li>Guarda tu configuración como un perfil, y activa la atenuación automática si quieres que otras apps bajen durante llamadas o contenido multimedia.</li>
</ul>
<p>Ese es todo el flujo de trabajo: sin archivos de configuración, sin reinicio, sin extensión de sistema que autorizar.</p>

<h2>La conclusión</h2>
<p>SoundSource es la herramienta más potente, pero la mayoría de quienes la buscan solo quieren volumen por app que se comporte. SoundDial ofrece eso por alrededor de un tercio del precio, se distribuye de forma segura a través de la App Store y añade perfiles y atenuación automática por encima, sin un solo controlador que instalar.</p>

<p>¿Listo para controlar el volumen de cada app de forma independiente? <a href="https://apps.apple.com/app/id6772792641">Consigue SoundDial en la Mac App Store</a> por 14,99 €, un único pago.</p>`,
  },
  "finetune-alternative-mac": {
    slug: "finetune-alternative-mac",
    title: "Alternativa a FineTune para Mac: un mezclador de volumen por app con soporte",
    description: "¿Probaste la app gratuita FineTune en la barra de menús y quieres algo mantenido y seguro de la App Store? Esta es la mejor alternativa a FineTune para volumen por app en Mac.",
    date: "2026-07-23",
    readTime: "5 min de lectura",
    content: `<p>Si te gustó FineTune pero quieres algo mantenido activamente e instalado desde una fuente de confianza, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> es la solución fiable más rápida. Es un mezclador de volumen por app de la Mac App Store en la barra de menús con volumen independiente, silencio por app, refuerzo de volumen, perfiles guardados y atenuación automática. Revisado por Apple y en sandbox, cuesta 14,99 € una vez sin controladores que instalar.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Alternativa a FineTune para Mac: un mezclador de volumen por app con soporte" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>¿Por qué buscar una alternativa a FineTune?</h2>

<p>FineTune es una buena idea: una app gratuita y de código abierto en la barra de menús que te da control de volumen por app en macOS, algo que Apple todavía se niega a integrar (Windows tiene un mezclador por app desde hace años). Para mucha gente hace el trabajo básico. Pero hay razones reales por las que los usuarios van buscando otra cosa.</p>

<ul>
<li><strong>El mantenimiento es incierto.</strong> Los proyectos de código abierto por afición viven y mueren según el tiempo libre de un único responsable. Cuando macOS lanza una actualización importante, las apps relacionadas con el audio suelen ser las primeras en romperse, y te quedas esperando una corrección de un voluntario que puede que nunca llegue.</li>
<li><strong>Techo de funciones.</strong> FineTune cubre el volumen por app y poco más. Si quieres refuerzo por encima del 100%, perfiles guardados o atenuación automática, tienes que sumar otras herramientas.</li>
<li><strong>Confianza y actualizaciones.</strong> Instalar una compilación en bruto fuera de la App Store significa sin revisión automática, sin garantías de sandbox, y actualizaciones manuales que tienes que rastrear por tu cuenta.</li>
</ul>

<p>Nada de esto hace que FineTune sea malo. Solo significa que si dependes del audio por app cada día, probablemente quieras algo con un modelo de soporte detrás.</p>

<h2>Qué hace SoundDial de forma distinta</h2>

<p>SoundDial parte de la misma idea central, un mezclador en la barra de menús con un deslizador para cada app en ejecución, y luego va más allá con las funciones que los usuarios avanzados realmente piden.</p>

<ul>
<li><strong>Volumen independiente por app.</strong> Baja Spotify, mantén tu llamada a todo volumen, silencia por completo la app de una pestaña ruidosa del navegador, todo desde un solo menú.</li>
<li><strong>Refuerzo de volumen por app.</strong> Empuja una app silenciosa por encima de su techo normal cuando un pódcast o vídeo se masterizó demasiado bajo. FineTune no hace esto.</li>
<li><strong>Perfiles de volumen.</strong> Guarda una mezcla, "concentración", "juego", "reuniones", y cambia toda tu configuración en un clic en lugar de mover cinco deslizadores.</li>
<li><strong>Atenuación automática.</strong> Baja automáticamente el audio de fondo cuando algo más importante empieza a reproducirse, para que la música baje cuando entra una llamada.</li>
<li><strong>Cambio rápido de salida.</strong> Salta entre altavoces, auriculares y otras salidas sin meterte en Ajustes del Sistema.</li>
</ul>

<p>Como <a href="https://apps.apple.com/app/id6772792641">SoundDial se distribuye a través de la Mac App Store</a>, está revisado por Apple y en sandbox, se instala de forma limpia y se actualiza mediante el mismo mecanismo que cualquier otra app de la App Store. No hay ningún DMG que arrastrar, ni controlador de audio ni extensión de sistema, ni un aviso de seguridad pidiéndote que permitas un componente a nivel de kernel.</p>

<h2>SoundDial frente a FineTune y las demás herramientas gratuitas</h2>

<p>FineTune no es la única opción gratuita, y ayuda ver todo el panorama con honestidad.</p>

<ul>
<li><strong>FineTune</strong>: gratis, código abierto, volumen por app en la barra de menús. Sencilla y ligera, pero sin refuerzo, sin perfiles, sin atenuación, y el mantenimiento depende de la comunidad.</li>
<li><strong>Background Music</strong>: gratis y de código abierto, enruta y ajusta el audio por app. Realmente útil, pero puede romperse en versiones más recientes de macOS y carece de refuerzo, perfiles y atenuación.</li>
<li><strong>eqMac</strong>: ecualizador y potenciador de sistema gratuito. Genial si lo que quieres principalmente es un ecualizador, pero no es un mezclador por app.</li>
<li><strong>SoundSource (Rogue Amoeba)</strong>: la opción de nivel profesional a alrededor de $39, con ecualizador por app y enrutamiento de salida. Excelente, pero necesita una descarga más un controlador de captura de audio, y cuesta más del doble.</li>
<li><strong>SoundDial</strong>: 14,99 € un único pago, seguro de la App Store, sin controladores. Añade refuerzo, perfiles y atenuación automática por encima de lo básico del volumen por app.</li>
</ul>

<p>El resumen honesto: si quieres lo absolutamente más barato y solo necesitas volumen por app básico, las herramientas gratuitas pueden servir. Si quieres ecualizador por app y enrutamiento y no te importa pagar e instalar un controlador, SoundSource es el peso pesado. SoundDial se sitúa en el punto ideal, más capaz que las apps gratuitas, drásticamente más barato que SoundSource, y más seguro de instalar que cualquiera de ellos porque Apple lo revisa y lo pone en sandbox.</p>

<h2>Migrar desde FineTune</h2>

<p>Cambiar lleva un par de minutos y no hay ritual de limpieza.</p>

<ul>
<li>Instala SoundDial desde la Mac App Store. Sin instalador, sin aprobación de controladores, sin reinicio.</li>
<li>Haz clic en el icono de SoundDial en tu barra de menús para ver un deslizador por cada app en ejecución.</li>
<li>Ajusta tu mezcla del día a día, luego guárdala como un perfil para poder recuperarla al instante.</li>
<li>Opcionalmente activa la atenuación automática para que el audio de fondo se aparte ante llamadas y alertas.</li>
<li>Cuando estés a gusto, cierra FineTune. Como ninguna de las dos apps instala controladores de sistema, no hay nada residual que desinstalar.</li>
</ul>

<p>Conservas lo que te gustaba de FineTune, un mezclador limpio en la barra de menús que Apple nunca te dio, y ganas el refuerzo, los perfiles, la atenuación y el soporte a largo plazo que ofrece una app mantenida de la App Store.</p>

<h2>La conclusión</h2>

<p>FineTune demuestra el concepto: el volumen por app pertenece a la barra de menús. SoundDial es cómo se ve ese concepto con un modelo de soporte real, más funciones y seguridad de la App Store, por un único pago de 14,99 € en lugar de una apuesta al mantenimiento voluntario.</p>

<p>¿Listo para un mezclador por app que se mantiene actualizado? <a href="https://apps.apple.com/app/id6772792641">Consigue SoundDial en la Mac App Store</a> y controla el volumen de cada app en segundos.</p>`,
  },
  "eqmac-alternative-per-app-volume-mac": {
    slug: "eqmac-alternative-per-app-volume-mac",
    title: "Alternativa a eqMac para volumen por app real en Mac",
    description: "¿Te encantó el refuerzo de eqMac pero necesitas volumen por app, silencio y perfiles de verdad? SoundDial es la solución más rápida de la Mac App Store: 14,99 €, en sandbox, sin controladores.",
    date: "2026-07-23",
    readTime: "5 min de lectura",
    content: `<p>Si usabas eqMac por su ecualizador y potenciador de volumen pero lo que de verdad quieres es volumen independiente para cada app, más silencio, refuerzo y perfiles guardados, la solución fiable más rápida es <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>. Es un mezclador de la Mac App Store en la barra de menús: ajusta un nivel por app, refuerza las silenciosas y cambia de perfil al instante. 14,99 € un único pago, en sandbox, sin controladores que instalar.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Alternativa a eqMac para volumen por app real en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>eqMac frente a lo que realmente necesitas</h2>

<p>eqMac es una herramienta gratuita sólida, y su ecualizador de todo el sistema y su potenciador de volumen son realmente útiles. Pero eqMac está construido en torno a un ecualizador maestro y una salida maestra. No te da un verdadero mezclador de volumen por app, eso que Windows tiene desde hace años y que macOS todavía no incluye de forma nativa.</p>

<p>Así que si tu problema real es "Spotify está demasiado alto mientras estoy en una llamada" o "este juego me revienta los oídos pero todo lo demás está bien", eqMac no tiene la forma adecuada para la tarea. Acabas manejando un único deslizador maestro o toqueteando el volumen interno de cada app. Esa es la carencia que SoundDial cubre.</p>

<h2>Qué hace SoundDial que eqMac no hace</h2>

<ul>
<li><strong>Volumen independiente por app</strong>: música al 40%, un navegador al 100%, una videollamada al 70%, todo a la vez, todo recordado.</li>
<li><strong>Silencio por app</strong>: silencia una app ruidosa al instante sin tocar nada más.</li>
<li><strong>Refuerzo por app</strong>: empuja una app silenciosa por encima de su techo normal, igual que el potenciador de eqMac, pero dirigido a una sola app en lugar de a todo el sistema.</li>
<li><strong>Perfiles de volumen</strong>: guarda configuraciones como "Concentración", "Juego" o "Reunión" y cambia toda la mezcla en un clic.</li>
<li><strong>Atenuación automática</strong>: baja automáticamente el audio de fondo cuando algo más importante empieza, para que no tengas que buscar un deslizador a mitad de llamada.</li>
<li><strong>Cambio rápido de salida</strong>: salta entre altavoces, auriculares y otras salidas desde la barra de menús.</li>
</ul>

<p>El solapamiento con eqMac es básicamente el refuerzo. Todo lo demás (el mezclador, el silencio, los perfiles, la atenuación) es territorio que eqMac nunca fue diseñado para cubrir.</p>

<h2>¿Todavía quieres ecualizador?</h2>

<p>Sé honesto sobre qué problema estás resolviendo. Si realmente necesitas ecualización de frecuencias (recortar graves, domar agudos ásperos, dar forma al tono de todo tu sistema), entonces eqMac todavía tiene su lugar, y es gratis. SoundDial es un mezclador de volumen, no un ecualizador.</p>

<p>Pero la mayoría recurre al potenciador de eqMac no porque quieran modelar frecuencias, sino porque quieren una app más alta o la mezcla equilibrada. Si ese eres tú, un mezclador dedicado es la respuesta más limpia. Incluso puedes usar ambos: conserva eqMac para una curva de ecualización de todo el sistema y usa SoundDial para los niveles por app. No se pelean por la misma tarea.</p>

<h2>Cómo se compara con las demás herramientas de audio de Mac</h2>

<p>Ya que estás buscando herramientas, aquí tienes el panorama honesto:</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba)</strong>: la opción de nivel profesional a alrededor de $39, con ecualizador por app y enrutamiento de salida completo. Potente, pero necesita una descarga directa e instala un controlador de captura de audio. Excesivo y más caro si todo lo que quieres es volumen por app con perfiles.</li>
<li><strong>Background Music</strong>: gratis y de código abierto, pero puede romperse en versiones más recientes de macOS y no tiene refuerzo, ni perfiles, ni atenuación automática. Genial cuando funciona, frustrante cuando no.</li>
<li><strong>FineTune</strong>: una app gratuita y de código abierto en la barra de menús. Vale la pena echarle un vistazo si $0 es el requisito estricto, aunque es más ligera en funciones y acabado.</li>
<li><strong>eqMac</strong>: ecualizador gratuito más potenciador, pero sin verdadero mezclador por app, como se explicó arriba.</li>
</ul>

<p>SoundDial se sitúa en el punto ideal: más enfocado y más barato que SoundSource, más capaz y más fiable que las opciones gratuitas, y hace el trabajo por app que eqMac no hace.</p>

<h2>Por qué la Mac App Store importa aquí</h2>

<p>Varias de estas herramientas requieren una descarga directa y un controlador de audio a nivel de kernel o de captura. Funcionan, pero son el tipo de cosa que puede tropezar con una actualización de macOS o atascarse en un Mac de trabajo bloqueado.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> se distribuye a través de la Mac App Store en su lugar. Eso significa que está revisado por Apple y en sandbox, se instala de forma limpia sin ningún DMG que arrastrar, y no hay controladores de audio ni extensiones de sistema que aprobar. Las actualizaciones llegan a través de la App Store como cualquier otra app, y desinstalar es un borrado normal. Para una utilidad de la barra de menús que toca tu audio, ese camino de menor fricción y menor riesgo vale mucho.</p>

<h2>La configuración rápida</h2>

<ul>
<li>Instala SoundDial desde la Mac App Store: sin reinicio, sin aviso de controladores.</li>
<li>Abre el icono de la barra de menús; cada app que esté produciendo sonido aparece con su propio deslizador.</li>
<li>Ajusta los niveles, silencia lo que no necesites y refuerza lo que esté demasiado silencioso.</li>
<li>Guarda la disposición como un perfil, luego crea más para juego, llamadas o concentración.</li>
<li>Activa la atenuación automática para que el audio de fondo se aparte automáticamente.</li>
</ul>

<p>Ese es todo el ciclo. En un par de minutos tienes el control por app que el potenciador de eqMac solo insinuaba.</p>

<p><strong>¿Listo para volumen por app real en tu Mac?</strong> <a href="https://apps.apple.com/app/id6772792641">Consigue SoundDial en la Mac App Store</a>: 14,99 € un único pago, en sandbox, sin controladores, y hace exactamente lo que un mezclador de la barra de menús debería hacer.</p>`,
  },
  "cheapest-volume-mixer-mac-2026": {
    slug: "cheapest-volume-mixer-mac-2026",
    title: "El mejor mezclador de volumen barato para Mac en 2026",
    description: "¿Buscas el mejor mezclador de volumen por app barato para Mac en 2026? Compara SoundDial, SoundSource, Background Music, FineTune y eqMac por precio, seguridad y funciones.",
    date: "2026-07-23",
    readTime: "6 min de lectura",
    content: `<p>El mezclador de volumen por app con mejor relación calidad-precio para Mac en 2026 es <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, una app en la barra de menús de la Mac App Store por un único pago de 14,99 €. Le da a cada app su propio deslizador de volumen, más silencio, refuerzo, perfiles y atenuación automática: sin controladores, sin suscripción y sin descargas arriesgadas. Es la opción de pago más barata que realmente funciona de forma fiable.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — El mejor mezclador de volumen barato para Mac en 2026" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Por qué "el más barato" necesita una definición</h2>
<p>Existen herramientas de volumen gratuitas para Mac, así que si el único objetivo es gastar cero, tienes opciones. Pero lo gratuito normalmente te cuesta en otro sitio: fragilidad en las nuevas versiones de macOS, funciones ausentes como refuerzo o perfiles, o un proceso de instalación que implica un controlador de captura de audio en el que tienes que confiar. "El más barato bueno" significa el precio más bajo que aun así te da un mezclador estable y completo que seguirás usando. Esa es la lente que usaremos aquí.</p>

<h2>Primero, lo que macOS no hace</h2>
<p>Windows tiene un mezclador de volumen por app desde hace años: haz clic derecho en el icono del altavoz y ajusta cada app de forma independiente. macOS todavía no tiene nada equivalente integrado. Obtienes un volumen maestro y cualquier deslizador interno que una app incluya (Music, algunos navegadores). No hay ninguna forma a nivel de sistema de hacer que Slack esté más silencioso que Spotify, o de reforzar una videollamada silenciosa por encima de todo. Todas las opciones de abajo existen para cubrir esa carencia.</p>

<h2>Los candidatos, con precios honestos</h2>

<h2>SoundDial: 14,99 €, único pago</h2>
<p>SoundDial vive en tu barra de menús y le da a cada app en ejecución un deslizador de volumen independiente. Más allá de lo básico, añade las funciones que la gente realmente utiliza:</p>
<ul>
<li><strong>Refuerzo por app</strong>: empuja una app demasiado silenciosa por encima del 100% en lugar de esforzarte por oírla.</li>
<li><strong>Silencio por app</strong>: silencia una app sin tocar el resto.</li>
<li><strong>Perfiles de volumen</strong>: guarda una mezcla de "llamada de trabajo" o "noche de cine" y recupérala al instante.</li>
<li><strong>Atenuación automática</strong>: baja automáticamente el audio de fondo cuando algo más importante se reproduce.</li>
<li><strong>Cambio rápido de salida</strong>: salta entre altavoces, auriculares y otros dispositivos desde el mismo menú.</li>
</ul>
<p>Como está en la Mac App Store, está en sandbox, revisado por Apple y se instala de forma limpia: sin DMG, sin extensión de kernel, sin controlador de audio que aprobar. Pagas <a href="https://apps.apple.com/app/id6772792641">14,99 € una vez</a> y es tuyo. Para la mayoría, este es el punto ideal: lo bastante barato como para ser un sí fácil, lo bastante completo como para que no se te quede corto.</p>

<h2>SoundSource: ~$39, la opción profesional</h2>
<p>SoundSource de Rogue Amoeba es el estándar de oro para usuarios avanzados. Hace volumen y silencio por app como SoundDial, pero va más allá con ecualizadores por app y enrutamiento de salida completo (envía una app a los auriculares, otra a los altavoces). Es realmente excelente, pero cuesta aproximadamente $39, y se instala fuera de la App Store con un componente de captura de audio al que tienes que dar permiso. Si necesitas ecualizador por app o enrutamiento complejo, vale el dinero. Si solo quieres un mezclador limpio y barato, estás pagando por capacidades que quizá nunca toques.</p>

<h2>Background Music: gratis, código abierto</h2>
<p>Background Music es una conocida app gratuita y de código abierto que ofrece volumen por app y pausa automática. El problema: se engancha en lo profundo de Core Audio a través de un controlador virtual, y tiene un largo historial de romperse en nuevas versiones de macOS, a veces necesitando correcciones manuales o una reinstalación tras las actualizaciones. También carece de refuerzo, perfiles guardados y atenuación automática. Genial para aficionados a los que no les importa el mantenimiento; frustrante si solo quieres que funcione.</p>

<h2>FineTune: gratis, barra de menús</h2>
<p>FineTune es una app de volumen gratuita y de código abierto en la barra de menús. Es ligera y agradable, y para un ajuste simple por app puede bastar. Pero al ser un pequeño proyecto gratuito, no iguala la profundidad de funciones: sin perfiles, sin atenuación automática, y el manejo del refuerzo/salida es limitado. Coste cero, menos garantías de longevidad y soporte.</p>

<h2>eqMac: gratis, ecualizador + potenciador</h2>
<p>eqMac es un ecualizador de todo el sistema gratuito con un potenciador de volumen. Se trata más de dar forma al tono y a la sonoridad en todo tu Mac que de mezclar apps individuales, así que es una herramienta distinta para un trabajo distinto. Si quieres específicamente control por app, eqMac no es realmente la respuesta, aunque es un buen ecualizador gratuito.</p>

<h2>Precio frente a valor: la tabla honesta</h2>
<ul>
<li><strong>Realmente gratis, pero con compromisos:</strong> Background Music (frágil, basado en controladores), FineTune (funciones escasas), eqMac (ecualizador, no mezclador).</li>
<li><strong>La app de pago completa más barata:</strong> SoundDial a 14,99 €: refuerzo, perfiles, atenuación, seguridad de la App Store.</li>
<li><strong>Premium/profesional:</strong> SoundSource a ~$39: ecualizador y enrutamiento, instalación fuera de la App Store.</li>
</ul>
<p>Dicho de otro modo: SoundDial cuesta aproximadamente un tercio de SoundSource mientras cubre las funciones que el 90% de la gente realmente quiere. Y a diferencia de las opciones gratuitas, no se romperá en silencio tras una actualización de macOS, porque no depende de un frágil controlador de audio a nivel de sistema.</p>

<h2>¿Cuál deberías elegir?</h2>
<p>Si eres un profesional que necesita ecualizador por app y enrutar apps a salidas distintas, compra SoundSource: se gana su precio. Si te encanta el código abierto y no te importa algún fallo ocasional, prueba Background Music o FineTune gratis. Pero si quieres la opción más barata que simplemente funciona (volumen independiente, refuerzo, silencio, perfiles guardables y atenuación automática, instalada de forma segura desde la App Store), SoundDial es el claro ganador en relación calidad-precio en 2026.</p>

<blockquote>El mejor mezclador no es el que tiene más funciones o el precio más bajo: es el que configuras una vez y olvidas. A 14,99 €, SoundDial hace que esa sea una decisión fácil.</blockquote>

<p>¿Listo para darle a cada app su propio volumen? <a href="https://apps.apple.com/app/id6772792641">Consigue SoundDial en la Mac App Store</a> por un único pago de 14,99 €: sin suscripción, sin controladores, sin riesgo.</p>`,
  },
  "windows-volume-mixer-for-mac": {
    slug: "windows-volume-mixer-for-mac",
    title: "Mezclador de volumen de Windows para Mac: consigue control de volumen por app",
    description: "¿Echas de menos el Mezclador de volumen de Windows en tu Mac? macOS no tiene control de volumen por app integrado. Esta es la forma más rápida de conseguirlo: SoundDial, un mezclador de barra de menús de 14,99 €.",
    date: "2026-07-23",
    readTime: "5 min de lectura",
    content: `<p>macOS no tiene un Mezclador de volumen integrado como Windows, así que no puedes ajustar el volumen por app desde Ajustes del Sistema. La solución fiable más rápida es <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, una app de la barra de menús de 14,99 € desde la Mac App Store. Le da a cada app su propio deslizador de volumen, silencio y refuerzo: sin controladores, sin DMG, sin instalaciones arriesgadas.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mezclador de volumen de Windows para Mac: consigue control de volumen por app" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Por qué el Mezclador de volumen de Windows no tiene equivalente en Mac</h2>

<p>Si cambiaste desde Windows, una de las primeras cosas que echarás de menos es el Mezclador de volumen: haces clic derecho en el icono del altavoz y cada app en ejecución obtiene su propio deslizador. Baja Chrome, mantén Discord alto, silencia Spotify, todo en un solo lugar.</p>

<p>macOS simplemente no incluye esto. El control de volumen de Apple es un único deslizador de todo el sistema. Cualquier nivel que ajustes se aplica a todo a la vez. No hay ninguna opción por app escondida en Ajustes del Sistema, ningún comando de Terminal, ningún interruptor de accesibilidad. Es una carencia genuina, y ha sido así durante años.</p>

<p>La razón es arquitectónica: las apps enrutan el audio a través de Core Audio hasta tu dispositivo de salida, y el sistema operativo no expone un mezclador de cara al usuario para los flujos individuales. Para recrear la experiencia de Windows, necesitas una app de terceros que se sitúe en esa ruta de audio y te dé los controles que Apple omitió.</p>

<h2>La coincidencia más cercana: SoundDial</h2>

<p>SoundDial es un mezclador de volumen por app en la barra de menús creado específicamente para esto. Haz clic en su icono y obtienes una lista limpia de todo lo que está reproduciendo audio, cada elemento con su propio deslizador. Es el "Mezclador de volumen de Windows para Mac" más directo que puedes instalar, y hace algunas cosas que el mezclador de Windows nunca pudo:</p>

<ul>
<li><strong>Volumen independiente por app</strong>: la función principal. Ajusta Chrome al 40%, Zoom al 100%, la música al 20%.</li>
<li><strong>Silencio por app</strong>: silencia una app sin tocar el resto.</li>
<li><strong>Refuerzo de volumen por app</strong>: empuja una app silenciosa <em>por encima</em> del 100% cuando su propio audio es demasiado bajo.</li>
<li><strong>Perfiles de volumen</strong>: guarda una mezcla (p. ej. "llamada de trabajo" o "juego") y recupérala al instante en lugar de volver a arrastrar deslizadores.</li>
<li><strong>Atenuación automática</strong>: baja automáticamente el audio de fondo cuando algo más importante empieza, como una llamada.</li>
<li><strong>Cambio rápido de salida</strong>: salta entre altavoces, auriculares y otros dispositivos desde el mismo menú.</li>
</ul>

<p>Como está en la <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a>, está revisado por Apple y en sandbox. Se instala de forma limpia con un clic: sin DMG que arrastrar, sin controlador de audio ni extensión de sistema que aprobar, sin avisos de seguridad. A 14,99 € un único pago (sin suscripción), es la forma más simple de cerrar la carencia.</p>

<h2>Cómo configurar el volumen por app en tu Mac</h2>

<ol>
<li>Instala SoundDial desde la Mac App Store.</li>
<li>Concede el permiso de audio único que solicita en el primer inicio.</li>
<li>Haz clic en el icono de SoundDial en tu barra de menús.</li>
<li>Arrastra el deslizador junto a cualquier app para ajustar su volumen, o pulsa silenciar/reforzar.</li>
<li>Opcionalmente, guarda la mezcla actual como un perfil para poder restaurarla más tarde.</li>
</ol>

<p>Ese es todo el flujo de trabajo. Se comporta como el mezclador de Windows que ya conoces, solo que desde la barra de menús en lugar de un clic derecho en la barra de tareas.</p>

<h2>Cómo se compara SoundDial con otras opciones</h2>

<p>SoundDial no es la única herramienta en este espacio, así que aquí tienes una mirada honesta a las alternativas.</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba)</strong>: alrededor de $39, y realmente de nivel profesional: ecualizador por app, enrutamiento de salida por app, efectos. Pero requiere una descarga directa más un controlador de captura de audio, y es excesivo (y más caro) si solo quieres volumen por app. Elígelo si necesitas ecualizador y enrutamiento; elige SoundDial si quieres el mezclador sin la complejidad ni el controlador.</li>
<li><strong>Background Music</strong>: gratis y de código abierto, lo cual es genial. El problema: puede romperse en versiones más recientes de macOS, y carece de refuerzo, perfiles guardados y atenuación automática. Bien si te sientes cómodo solucionando problemas de controladores de audio de código abierto; menos ideal si quieres algo que simplemente funcione.</li>
<li><strong>FineTune</strong>: una app gratuita y de código abierto en la barra de menús. Ligera y digna de considerar si el presupuesto es la prioridad, pero cambias acabado, perfiles y seguridad de la App Store por que sea gratis.</li>
<li><strong>eqMac</strong>: un ecualizador y potenciador de todo el sistema gratuito. Es un ecualizador primero, no un mezclador por app, así que resuelve un problema distinto.</li>
</ul>

<p>El compromiso es simple. Las herramientas gratuitas no cuestan nada pero pueden ser frágiles o escasas en funciones. SoundSource es potente pero caro y basado en controladores. SoundDial se sitúa en el punto ideal: un único pago de 14,99 €, seguridad y sandbox de la App Store, y los perfiles + atenuación automática que las opciones gratuitas se saltan.</p>

<blockquote>Si todo lo que quieres es la experiencia del Mezclador de volumen de Windows (deslizadores por app, silencio y refuerzo, instalado de forma segura en segundos), SoundDial es la coincidencia más directa.</blockquote>

<h2>La conclusión</h2>

<p>macOS no te dará un Mezclador de volumen, y probablemente nunca lo hará. Pero no tienes que conformarte con un único deslizador de todo el sistema. Un mezclador dedicado en la barra de menús restaura el control por app que tenías en Windows, y añade refuerzo, perfiles y atenuación automática por encima.</p>

<p>¿Listo para conseguir volumen por app de forma fácil? <a href="https://apps.apple.com/app/id6772792641">Consigue SoundDial en la Mac App Store</a> por 14,99 €: único pago, en sandbox, y se instala en segundos.</p>`,
  },
  "app-volume-like-windows-on-mac": {
    slug: "app-volume-like-windows-on-mac",
    title: "Ajusta el volumen por app como en Windows, en tu Mac",
    description: "Windows tiene un mezclador de volumen por app, pero macOS no. Aquí te explicamos cómo ajustar el volumen independiente de cada app en tu Mac, rápido, de forma segura y sin controladores.",
    date: "2026-07-23",
    readTime: "5 min de lectura",
    content: `<p>macOS no tiene un mezclador de volumen por app integrado como el de Windows, así que la solución fiable más rápida es <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, una app de la Mac App Store en la barra de menús que le da a cada app su propio deslizador de volumen, silencio por app y refuerzo de volumen. Está en sandbox, revisado por Apple, se instala sin controladores y cuesta 14,99 € una vez.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Ajusta el volumen por app como en Windows, en tu Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Por qué Windows puede hacer esto y macOS no</h2>
<p>Si has usado Windows, conoces la rutina: haz clic derecho en el icono del altavoz, abre el Mezclador de volumen y arrastra un deslizador separado para Chrome, Spotify, Discord y cualquier otra cosa que haga ruido. Es simple y simplemente funciona.</p>
<p>macOS nunca incluyó un equivalente. Los controles de audio de Apple son globales: un volumen maestro para todo el sistema. Puedes silenciar una app silenciando la fuente dentro de esa app (si es que tiene un control), pero no hay un lugar unificado para decir "mantén mi música al 40% mientras mi reunión se queda al 100%". Esa carencia es exactamente por lo que existen los mezcladores de terceros.</p>

<h2>La solución más rápida: un mezclador en la barra de menús</h2>
<p>La coincidencia más cercana a la experiencia de Windows es una app de la barra de menús que lista tus apps de audio en ejecución y le da a cada una un deslizador. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> hace precisamente esto. Haz clic en su icono en la barra de menús y obtienes:</p>
<ul>
<li><strong>Volumen independiente para cada app</strong>: baja Spotify sin tocar tu llamada.</li>
<li><strong>Silencio por app</strong>: silencia una app ruidosa al instante, deja el resto reproduciéndose.</li>
<li><strong>Refuerzo de volumen por app</strong>: empuja una app demasiado silenciosa <em>por encima</em> del 100% cuando su propio máximo sigue siendo demasiado bajo.</li>
<li><strong>Perfiles de volumen</strong>: guarda una mezcla de "Trabajo" o "Juego" y recupérala en un clic.</li>
<li><strong>Atenuación automática</strong>: baja automáticamente el audio de fondo cuando algo más importante empieza.</li>
<li><strong>Cambio rápido de salida</strong>: salta entre altavoces, auriculares y otras salidas desde el mismo menú.</li>
</ul>
<p>Como está en la Mac App Store, está en sandbox y revisado por Apple, se instala de forma limpia, y no hay ningún DMG que arrastrar, ni extensión de kernel, ni controlador de audio que aprobar en Ajustes del Sistema. Esa última parte importa más de lo que parece: las herramientas basadas en controladores son las que tienden a romperse tras las actualizaciones de macOS.</p>

<h2>Cómo configurarlo (unos dos minutos)</h2>
<ul>
<li><strong>1.</strong> Instala SoundDial desde la Mac App Store y ábrelo.</li>
<li><strong>2.</strong> Concede el permiso de audio que macOS solicita: es lo que permite a la app ver los flujos por app.</li>
<li><strong>3.</strong> Haz clic en el icono de SoundDial en tu barra de menús. Cada app que esté reproduciendo audio aparece con su propio deslizador.</li>
<li><strong>4.</strong> Arrastra el deslizador de cualquier app para ajustar su nivel, o pulsa silenciar. Refuerza por encima del 100% cuando una app esté demasiado silenciosa.</li>
<li><strong>5.</strong> (Opcional) Guarda tu mezcla actual como un perfil para poder restaurarla más tarde, y activa la atenuación automática si quieres que el audio de fondo baje automáticamente.</li>
</ul>
<p>Ese es todo el flujo de trabajo. Se comporta como el Mezclador de volumen de Windows que ya conoces, menos la fricción de configuración.</p>

<h2>¿Y las alternativas gratuitas y profesionales?</h2>
<p>Hay otras formas de conseguir volumen por app en un Mac. Vale la pena conocerlas para que puedas elegir con honestidad.</p>
<blockquote>Las herramientas gratuitas cambian dinero por fiabilidad y funciones; las herramientas profesionales cambian dinero y configuración por una profundidad que quizá no necesites.</blockquote>
<p><strong>Background Music</strong> es gratis y de código abierto, y sí ofrece volumen por app. El problema: se engancha en lo profundo del sistema de audio y tiene un historial de romperse en versiones más recientes de macOS, y carece de refuerzo, perfiles y atenuación automática. Si funciona en tu configuración, genial, pero es una apuesta entre actualizaciones.</p>
<p><strong>FineTune</strong> es una app gratuita y de código abierto en la barra de menús con el mismo espíritu que SoundDial. Es un buen punto de partida si el presupuesto es la única preocupación, aunque es un proyecto comunitario sin el acabado de perfiles y atenuación.</p>
<p><strong>eqMac</strong> es un ecualizador y potenciador de todo el sistema gratuito. Es genial para dar forma al sonido general, pero no es un verdadero mezclador por app: estás ajustando toda la salida, no apps individuales.</p>
<p><strong>SoundSource</strong> de Rogue Amoeba (alrededor de $39) es la opción de nivel profesional: ecualizador por app, enrutamiento de salida por app y funciones serias de ingeniería de audio. Es excelente, pero necesita una descarga directa e instala un componente de captura de audio, y cuesta más del doble que SoundDial. Si quieres enrutamiento y ecualización de nivel de estudio, es la elección. Si solo quieres el mezclador al estilo de Windows, es excesivo.</p>

<h2>¿Cuál deberías conseguir?</h2>
<p>Si tu objetivo es "hacer que mi Mac funcione como el Mezclador de volumen de Windows" sin descargas, controladores ni riesgo, SoundDial es la respuesta más limpia. Obtienes volumen por app, silencio, refuerzo, perfiles y atenuación automática, todo seguro de la App Store, por un único pago de 14,99 €: sin suscripción. Elige SoundSource en su lugar solo si necesitas específicamente ecualizador por app y enrutamiento de salida, y prueba las opciones gratuitas si te sientes cómodo solucionando problemas entre actualizaciones de macOS.</p>

<p><strong>¿Listo para darle a cada app su propio volumen?</strong> <a href="https://apps.apple.com/app/id6772792641">Consigue SoundDial en la Mac App Store</a> y configura tu primera mezcla en unos dos minutos.</p>`,
  },
  "make-mac-louder-for-hard-of-hearing": {
    slug: "make-mac-louder-for-hard-of-hearing",
    title: "Cómo hacer que tu Mac suene más fuerte para escuchar con dificultades auditivas",
    description: "¿Te cuesta oír tu Mac incluso al volumen máximo? Aprende a reforzar y aclarar el audio por app para escuchar con dificultades auditivas, incluyendo SoundDial y consejos integrados.",
    date: "2026-07-23",
    readTime: "6 min de lectura",
    content: `<p>Si tu Mac no suena lo bastante fuerte incluso al volumen máximo, la solución fiable más rápida es <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, un mezclador de la Mac App Store en la barra de menús que te permite reforzar cualquier app por encima del 100% y silenciar todo lo demás. Eso significa un habla más fuerte y clara de FaceTime, vídeo o un reproductor de películas sin subir todo tu sistema. Cuesta 14,99 €, un único pago.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Cómo hacer que tu Mac suene más fuerte para escuchar con dificultades auditivas" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Por qué subir el deslizador de volumen al máximo aún no es suficiente</h2>
<p>Para quienes tienen dificultades auditivas, el deslizador de volumen de macOS tiene dos límites frustrantes. Primero, tope al 100% de lo que la propia app produce. Si un pódcast, vídeo o llamada se grabó bajo, el "volumen máximo" sigue siendo demasiado suave. Segundo, macOS no tiene un mezclador de volumen por app integrado. Windows lo tiene desde hace años, pero en un Mac cada app comparte un único nivel maestro. Así que cuando subes todo para oír una voz suave, la música de fondo y los sonidos de notificación también se vuelven incómodamente altos.</p>
<p>Lo que realmente necesitas es la capacidad de hacer <em>una</em> app más fuerte que el resto, empujarla más allá de su techo normal, y recortar los sonidos que compiten para que el habla destaque. Esa es exactamente la carencia que estas herramientas cubren.</p>

<h2>Primero, usa los ajustes de accesibilidad gratuitos de macOS</h2>
<p>Antes de añadir cualquier app, vale la pena configurar lo que macOS ya ofrece. Estos ayudan con la claridad, aunque no añaden sonoridad bruta:</p>
<ul>
<li><strong>Audio mono:</strong> Ajustes del Sistema &rarr; Accesibilidad &rarr; Audio, activa "Reproducir audio estéreo como mono". Si tu audición es más fuerte en un oído, esto envía la señal completa a ambos, para que no pierdas la mitad del diálogo.</li>
<li><strong>Ajuste de balance:</strong> En Ajustes del Sistema &rarr; Sonido, arrastra el balance izquierda/derecha hacia tu oído más fuerte.</li>
<li><strong>Reducir sonidos de fondo:</strong> Baja la música y el ambiente en las apps que lo permitan, para que las voces no compitan con una banda sonora.</li>
<li><strong>Adaptaciones de auriculares:</strong> Si usas AirPods o Beats, Ajustes del Sistema &rarr; Accesibilidad &rarr; Audio &rarr; Adaptaciones de auriculares puede amplificar sonidos suaves y ajustar para el habla.</li>
</ul>
<p>Estos son realmente útiles y no cuestan nada. Pero ninguno hace que una sola app silenciosa suene <em>por encima del 100%</em>, y ese suele ser el verdadero problema.</p>

<h2>Cómo reforzar una app por encima del 100% con SoundDial</h2>
<p>SoundDial vive en tu barra de menús y muestra un deslizador por cada app que esté reproduciendo sonido. Este es el flujo de trabajo que más ayuda para escuchar con dificultades auditivas:</p>
<ul>
<li><strong>Refuerza la app que estás escuchando.</strong> Arrastra su deslizador por encima del 100% para amplificar una videollamada o un pódcast silencioso más allá de lo que la app permite por sí sola.</li>
<li><strong>Silencia o baja todo lo demás.</strong> Baja la música, las pestañas del navegador o los sonidos de notificación para que nada compita con la voz que intentas seguir.</li>
<li><strong>Activa la atenuación automática.</strong> Cuando empiezas a hablar en una llamada, SoundDial baja automáticamente el resto del audio para que la persona con la que hablas se oiga con claridad, y luego lo restaura.</li>
<li><strong>Guarda un perfil de volumen.</strong> Crea un perfil de "videollamadas" donde tu app de conferencias esté reforzada y todo lo demás silenciado, luego cambia a él al instante en lugar de reajustar cada vez.</li>
<li><strong>Cambia de salida rápidamente.</strong> Salta entre altavoces, unos auriculares con micro o un dispositivo conectado a un audífono desde el mismo menú, sin hurgar en Ajustes del Sistema.</li>
</ul>
<p>La función de refuerzo es la clave aquí. Como eleva la salida de la app por encima de su máximo nativo, una grabación tan silenciosa como un susurro se convierte en algo que realmente puedes oír, mientras el resto de tu sistema se mantiene a un nivel cómodo.</p>

<h2>Una breve nota sobre la distorsión</h2>
<p>Cualquier refuerzo por software amplifica lo que haya en la señal, así que empujar muy por encima del 100% en audio ya fuerte puede introducir recorte. En la práctica, reforzar contenido <em>silencioso</em> hasta un nivel cómodo e inteligible suena limpio. Empieza con moderación, sube hasta que el habla sea clara, y baja si empieza a sonar áspero. Proteger tu audición restante importa, así que busca claridad en lugar de la máxima sonoridad.</p>

<h2>Cómo se compara SoundDial con las alternativas</h2>
<p>Tienes algunas opciones, y la honestidad te ayuda a elegir la correcta:</p>
<ul>
<li><strong>SoundSource (Rogue Amoeba, ~$39):</strong> realmente de nivel profesional, con ecualizador por app y enrutamiento de salida. Si quieres esculpir frecuencias para la pérdida auditiva, es potente. Pero cuesta más del doble, requiere una descarga directa e instala un controlador de captura de audio. Eso es más configuración y más acceso al sistema del que mucha gente quiere.</li>
<li><strong>Background Music (gratis, código abierto):</strong> ofrece volumen por app gratis, pero carece de refuerzo, perfiles y atenuación automática, y puede romperse en versiones más recientes de macOS ya que se engancha en lo profundo del sistema de audio.</li>
<li><strong>FineTune (gratis, código abierto):</strong> una ligera app de volumen en la barra de menús. Bien para lo básico, pero sin el refuerzo, los perfiles y la atenuación en los que se apoyan quienes tienen dificultades auditivas.</li>
<li><strong>eqMac (gratis):</strong> un ecualizador con un potenciador. Útil para dar forma al sonido, pero está construido en torno a la ecualización en lugar de una mezcla limpia por app y perfiles.</li>
</ul>
<p>Donde <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> destaca es en el equilibrio de precio, seguridad y las funciones concretas que importan aquí. Como está en la Mac App Store, está revisado por Apple y en sandbox, se instala de forma limpia sin DMG, y no necesita controladores de audio ni extensiones de sistema. Obtienes refuerzo por app, silencio, perfiles de volumen y atenuación automática en una única compra de 14,99 €, sin nada que se meta en la pila de audio de macOS.</p>

<h2>La conclusión</h2>
<p>Configura primero las opciones de accesibilidad gratuitas de macOS, vale la pena tenerlas. Pero si el verdadero problema es que una app es simplemente demasiado silenciosa, necesitas una herramienta que pueda empujar una sola app por encima del 100% y silenciar el resto. Ese es todo el sentido de un refuerzo por app, y macOS no lo hace por su cuenta.</p>

<p>¿Listo para oír de verdad tu Mac? <a href="https://apps.apple.com/app/id6772792641">Consigue SoundDial en la Mac App Store</a> por 14,99 €, refuerza la app que necesites, y deja que la atenuación automática y los perfiles mantengan el habla clara.</p>`,
  },
  "boost-quiet-apps-mac": {
    slug: "boost-quiet-apps-mac",
    title: "Cómo reforzar una app silenciosa en Mac (más allá del volumen máximo)",
    description: "¿Una app demasiado silenciosa incluso al 100%? Refuerza solo esa app por encima de su máximo en Mac con SoundDial, un mezclador de volumen por app. Aquí tienes la solución más rápida más alternativas.",
    date: "2026-07-23",
    readTime: "6 min de lectura",
    content: `<p>Si una app está demasiado silenciosa incluso al volumen máximo, la solución fiable más rápida es <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, un mezclador de volumen por app en la barra de menús para macOS. Le da a cada app su propio deslizador más un <strong>refuerzo</strong> de volumen que empuja una sola app por encima del 100%, para que una videollamada o una pestaña del navegador tan silenciosa como un susurro suene más fuerte sin tocar el volumen de tu sistema. Es una app de un único pago de 14,99 € en la Mac App Store.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Cómo reforzar una app silenciosa en Mac (más allá del volumen máximo)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Por qué una app está silenciosa incluso al 100%</h2>
<p>macOS solo tiene un volumen maestro. Cuando lo subes, todo se vuelve más fuerte a la vez. Pero cada app también produce sonido a su propio nivel interno, y ese nivel varía enormemente. Un clip de YouTube masterizado en voz baja, una persona en Zoom con un mal micrófono, un juego con una mezcla de diálogos baja, o una pestaña del navegador con una transmisión suave pueden situarse muy por debajo de todo lo demás, incluso con tu Mac a todo volumen.</p>
<p>El verdadero problema: macOS <strong>no tiene un mezclador de volumen por app integrado</strong>. Windows lo tiene desde hace años (el Mezclador de volumen, clic derecho en el icono del altavoz). En un Mac, no hay forma nativa de subir una app dejando el resto en paz, y desde luego ninguna forma de amplificar una sola app <em>por encima</em> de su máximo normal. Esa es la carencia con la que te topas.</p>

<h2>La solución más rápida: refuerza solo esa única app</h2>
<p>Un mezclador por app resuelve esto insertándose entre tus apps y tu salida, para poder subir o bajar cada flujo de forma independiente, y reforzar uno por encima del 100%. Con <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, el flujo es corto:</p>
<ul>
<li>Instálalo desde la Mac App Store y ábrelo. Vive en tu barra de menús, no en una ventana flotante.</li>
<li>Haz clic en el icono de la barra de menús para ver un deslizador por cada app que esté reproduciendo audio.</li>
<li>Encuentra la app silenciosa y arrastra su deslizador por encima del 100% para aplicar refuerzo. Amplifica solo esa app.</li>
<li>Deja todo lo demás donde está. El volumen de tu sistema y las otras apps quedan intactos.</li>
</ul>
<p>Como el refuerzo es por app, puedes subir una videollamada suave hasta un nivel cómodo mientras evitas que la música o las notificaciones se vuelvan ensordecedoras. Eso es lo esencial que los controles integrados de macOS simplemente no pueden hacer.</p>

<h2>Una nota sobre el refuerzo y el recorte</h2>
<p>El refuerzo es realmente útil, pero es amplificación, no magia. Si el audio original de una app es muy silencioso o ya está distorsionado, subirlo con fuerza puede introducir recorte o hacer más evidente el siseo de fondo. En la práctica, un refuerzo moderado arregla de forma limpia la gran mayoría de las situaciones de "esta llamada está demasiado silenciosa". Súbelo poco a poco hasta que la app esté cómoda en lugar de llevarlo al tope, y mantendrás el sonido limpio.</p>

<h2>Más allá del refuerzo: qué más ayuda</h2>
<p>Una vez que tienes control por app, unas cuantas funciones hacen que el problema de la app silenciosa desaparezca para siempre:</p>
<ul>
<li><strong>Perfiles de volumen</strong>: guarda una configuración (p. ej. "reforzar Zoom, bajar Spotify, silenciar Slack") y recupérala en un clic en lugar de rearrastrar deslizadores en cada reunión.</li>
<li><strong>Atenuación automática</strong>: baja automáticamente otras apps cuando una app elegida se reproduce, para que una llamada reforzada se oiga con claridad sobre el audio de fondo.</li>
<li><strong>Silencio por app</strong>: silencia una app ruidosa sin pausar nada más.</li>
<li><strong>Cambio rápido de salida</strong>: salta entre altavoces, auriculares o una interfaz externa desde el mismo menú.</li>
</ul>

<h2>¿Y las alternativas gratuitas y profesionales?</h2>
<p>Tienes opciones, y aquí la honestidad importa, así que este es el panorama real.</p>
<p><strong>SoundSource</strong> (Rogue Amoeba) es la opción de nivel profesional a alrededor de $39. Hace volumen por app más ecualizador por app y enrutamiento de salida completo, más poder del que la mayoría necesita. Los compromisos: cuesta más del doble, es una descarga directa en lugar de la App Store, e instala un controlador de captura de audio para hacer su trabajo. Si quieres el kit de herramientas de un ingeniero de audio, es excelente. Si solo quieres una app más fuerte, es excesivo.</p>
<p><strong>Background Music</strong> es gratis y de código abierto, y puede hacer volumen por app básico. Pero es un proyecto comunitario que tiene un historial de romperse en versiones más recientes de macOS, y carece de refuerzo por encima del 100%, perfiles y atenuación automática. Genial si gratis es el único requisito y no te importa algún fallo ocasional.</p>
<p><strong>FineTune</strong> es una app gratuita y de código abierto en la barra de menús, y <strong>eqMac</strong> es un ecualizador y potenciador de sistema gratuito. Ambas vale la pena probarlas si tu presupuesto es cero. Solo ten en cuenta que están mantenidas por la comunidad, están enfocadas en la ecualización o son más ligeras en la gestión por app, y no incluyen perfiles más atenuación en un solo paquete pulido.</p>
<p>Dónde queda <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>: es el camino intermedio. Más barato que SoundSource, más capaz y más fiable que las herramientas gratuitas, y está en la <strong>Mac App Store</strong>, lo que significa revisado por Apple, en sandbox, y se instala de forma limpia <strong>sin DMG y sin controladores de audio ni extensiones</strong> que sumar a tu sistema. Para la mayoría, la recomendación honesta es simple: si quieres la solución con menos líos que además te da refuerzo, perfiles y atenuación automática, es la mejor relación calidad-precio a 14,99 € un único pago.</p>

<h2>Respuesta rápida, reformulada</h2>
<blockquote>Para hacer una app de Mac más fuerte que su máximo, usa un mezclador de volumen por app con refuerzo. Abre SoundDial desde la barra de menús, encuentra el deslizador de la app silenciosa, y arrástralo por encima del 100%. Solo esa app se vuelve más fuerte.</blockquote>

<p>Deja de pelearte con un único deslizador de volumen para todo tu Mac. Consigue <a href="https://apps.apple.com/app/id6772792641">SoundDial en la Mac App Store</a> por 14,99 € una vez, refuerza esa app silenciosa por encima de su límite en segundos, y guarda un perfil para no tener que pensar en ello nunca más.</p>`,
  },
  "amplify-quiet-video-podcast-audio-mac": {
    slug: "amplify-quiet-video-podcast-audio-mac",
    title: "Cómo amplificar vídeos y pódcasts silenciosos en tu Mac",
    description: "Algunos vídeos de YouTube, pódcasts y clases son simplemente demasiado silenciosos incluso al 100%. Aquí te explicamos cómo reforzar el volumen por app más allá del máximo en macOS con SoundDial.",
    date: "2026-07-23",
    readTime: "6 min de lectura",
    content: `<p>La solución fiable más rápida es <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, un mezclador de la Mac App Store en la barra de menús que le da a cada app su propio deslizador de volumen y un <strong>refuerzo</strong> real que supera el 100%. Abre tu navegador o reproductor de pódcasts, arrastra su deslizador por encima del máximo, y un vídeo o una clase silenciosa se vuelve más fuerte al instante: sin controladores, sin reinicio.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Cómo amplificar vídeos y pódcasts silenciosos en tu Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Por qué algunos vídeos y pódcasts son simplemente demasiado silenciosos</h2>
<p>Subes tu Mac al 100%, y la entrevista sigue siendo un susurro. Esto no es tu imaginación. El audio se masteriza a niveles de sonoridad enormemente distintos: un seminario web grabado con el micrófono de un portátil, un pódcast indie silencioso, o la subida de una clase antigua pueden situarse 15-20 dB por debajo de un vídeo de YouTube producido profesionalmente. El volumen de tu sistema ya está al máximo, así que no queda margen que dar.</p>
<p>Aquí está el problema: macOS <strong>no tiene un mezclador de volumen por app integrado</strong>. Windows lo tiene desde hace años (el Mezclador de volumen en la bandeja del sistema), pero en un Mac, las teclas de volumen mueven un único nivel global para todo. No hay forma nativa de decir "haz solo esta pestaña del navegador más fuerte", y mucho menos de empujar una sola app por encima del 100%.</p>

<h2>La verdadera solución: refuerzo de volumen por app</h2>
<p>Para hacer una fuente silenciosa más fuerte de lo que tus altavoces normalmente permiten, necesitas software que aplique ganancia a <em>esa app en concreto</em> y pueda amplificar más allá del techo del 100%. Eso es exactamente lo que hace un mezclador por app con una función de refuerzo.</p>
<p>Con <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, cada app en ejecución aparece en una lista de la barra de menús con su propio deslizador. Desliza una app silenciosa hasta el 150% o el 200% y el audio se amplifica en tiempo real. Como el refuerzo es por app, todo lo demás (tu música, las notificaciones, una llamada en otra ventana) se queda en un nivel normal. No estás reventando todo tu sistema para oír un pódcast suave.</p>
<blockquote>El volumen global pregunta "¿qué tan fuerte suena el Mac?". Un mezclador por app pregunta "¿qué tan fuerte suena <em>esta</em> app?", que es la pregunta que realmente importa cuando un vídeo está silencioso y el resto está bien.</blockquote>

<h2>Cómo reforzar un vídeo o pódcast silencioso, paso a paso</h2>
<ul>
<li><strong>Instala SoundDial</strong> desde la Mac App Store. Está en sandbox y revisado por Apple, así que se instala de forma limpia como cualquier otra app: sin descarga aparte, sin controlador de audio, sin una carrera de obstáculos de permisos.</li>
<li><strong>Empieza a reproducir</strong> el vídeo, el episodio de pódcast o la clase silenciosa en la app que uses: Safari, Chrome, un cliente de pódcasts, VLC.</li>
<li><strong>Haz clic en el icono de SoundDial</strong> en tu barra de menús. Verás un deslizador por cada app que esté produciendo sonido.</li>
<li><strong>Arrastra el deslizador de esa app por encima del 100%</strong>: prueba primero con 150%, luego súbelo más si sigue siendo demasiado suave. El cambio es instantáneo.</li>
<li><strong>Deja todo lo demás en paz.</strong> Solo la app que reforzaste se vuelve más fuerte; tu sistema se mantiene equilibrado.</li>
</ul>
<p>Si te encuentras reforzando las mismas apps cada día (digamos, un reproductor de pódcasts y tu navegador), puedes guardar esa configuración como un <strong>perfil de volumen</strong> y recuperarla en un clic en lugar de reajustar cada vez.</p>

<h2>Una advertencia sobre el refuerzo</h2>
<p>Amplificar por encima del 100% añade ganancia, y la ganancia tiene límites. Empuja con fuerza una grabación muy silenciosa y de baja calidad y puede que oigas recorte o distorsión: eso es la fuente quedándose sin señal limpia, no un defecto de la app. Refuerza hasta que sea cómodamente audible, luego baja si empieza a sonar áspero. En los altavoces integrados de un portátil, un refuerzo extremo también puede forzar los altavoces, así que ve con más cuidado ahí que con buenos auriculares o altavoces externos.</p>

<h2>¿Y las opciones gratuitas o integradas?</h2>
<p>Tienes alternativas, y vale la pena ser honesto sobre ellas:</p>
<ul>
<li><strong>Volumen del sistema + deslizadores a nivel de app.</strong> Algunos reproductores (VLC, algunos navegadores mediante extensiones) te permiten reforzar su propio audio. Bien si solo lo necesitas en una app, pero te quedas configurando cada app por separado, sin control unificado y sin perfiles.</li>
<li><strong>eqMac</strong> es un ecualizador y potenciador gratuito. Puede subir la sonoridad de todo el sistema, pero es una herramienta global, no un mezclador limpio por app, y funciona a nivel de toda la salida.</li>
<li><strong>Background Music</strong> es gratis y de código abierto y sí ofrece volumen por app. Pero depende de una configuración de captura de audio que puede romperse en versiones más recientes de macOS, y carece de un refuerzo dedicado, perfiles y atenuación automática.</li>
<li><strong>FineTune</strong> es una app gratuita y de código abierto en la barra de menús: una opción ligera si quieres lo básico y no te importa el software mantenido por la comunidad.</li>
<li><strong>SoundSource</strong> de Rogue Amoeba (~$39) es el peso pesado de nivel profesional: ecualizador por app, enrutamiento de salida, todo. También requiere una descarga y un controlador de captura de audio, y cuesta más del doble que SoundDial. Excesivo si todo lo que quieres es hacer más fuerte el audio silencioso.</li>
</ul>

<h2>Por qué SoundDial es la opción práctica</h2>
<p>SoundDial se sitúa en el punto ideal para este problema concreto. Cuesta <strong>14,99 € un único pago</strong> (sin suscripción) y vive en la <strong>Mac App Store</strong>, lo que significa que está en sandbox, revisado por Apple, y se instala sin ningún DMG ni extensión de sistema en la que confiar. Obtienes el refuerzo por app por el que realmente viniste, más perfiles, silencio por app, cambio rápido de salida y <strong>atenuación automática</strong> que baja otras apps cuando necesitas centrarte en una. Hace lo de subir el volumen de forma simple, y hace el resto bien.</p>

<p><strong>¿Cansado de esforzarte por oír vídeos y pódcasts silenciosos?</strong> <a href="https://apps.apple.com/app/id6772792641">Consigue SoundDial en la Mac App Store</a> por 14,99 € y dale a cada app su propio volumen, con el refuerzo para oír cualquier cosa con claridad.</p>`,
  },
  "set-different-volume-for-each-app-mac": {
    slug: "set-different-volume-for-each-app-mac",
    title: "Cómo ajustar un volumen distinto para cada app en Mac",
    description: "macOS no tiene un mezclador de volumen por app integrado. Aquí te explicamos cómo ajustar niveles de volumen independientes y persistentes para cada app en Mac usando SoundDial y las alternativas.",
    date: "2026-07-23",
    readTime: "5 min de lectura",
    content: `<p>macOS no tiene una forma integrada de ajustar un volumen distinto para cada app, así que necesitas un mezclador de volumen en la barra de menús. La solución más rápida y fiable es <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, una app de la Mac App Store que le da a cada aplicación su propio deslizador de volumen, silencio por app y un refuerzo que empuja las apps silenciosas por encima del 100%. Ajusta tus niveles una vez y se quedan.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Cómo ajustar un volumen distinto para cada app en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Por qué Mac no tiene control de volumen por app</h2>
<p>Si has cambiado desde Windows, probablemente has ido buscando el equivalente del Mezclador de volumen de Windows, ese pequeño panel donde cada app tiene su propio deslizador. No está ahí. macOS solo ofrece un único volumen de sistema global. Ya sea un vídeo de YouTube, una llamada de Zoom, Spotify o un juego, todos comparten el mismo nivel maestro.</p>
<p>Eso está bien hasta que deja de estarlo. El chat de Discord ahoga tu música. Un anuncio del navegador suena a todo volumen mientras tu pódcast se reproduce bajo por debajo. Tu juego es ensordecedor pero la llamada de voz de fondo está demasiado suave. La única "solución" que te da Apple es abrir cada app y ajustar su volumen interno manualmente, si es que la app siquiera tiene uno, y rehacerlo cada sesión.</p>
<p>Para conseguir control real por app, necesitas una pequeña utilidad que se sitúe entre tus apps y tu dispositivo de salida. A continuación te explicamos cómo hacerlo bien, más notas honestas sobre las alternativas.</p>

<h2>La forma más rápida: SoundDial (Mac App Store)</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> vive en tu barra de menús y lista cada app que esté reproduciendo audio actualmente. Cada una obtiene un deslizador independiente. Este es todo el flujo de trabajo:</p>
<ul>
<li><strong>Instálalo desde la Mac App Store.</strong> Está revisado por Apple y en sandbox, así que no hay DMG, ni controlador de audio, ni extensión de kernel o de sistema que aprobar. Se instala como cualquier app normal y se puede eliminar de la misma forma.</li>
<li><strong>Haz clic en el icono de la barra de menús.</strong> Verás un deslizador por cada app activa, más un control maestro.</li>
<li><strong>Arrastra para ajustar los niveles.</strong> Baja Discord, sube Spotify un poco, silencia por completo la app de una pestaña ruidosa del navegador con un clic.</li>
<li><strong>Refuerza las apps silenciosas.</strong> Si una app está demasiado suave incluso al 100%, empújala por encima del 100% con el refuerzo por app.</li>
<li><strong>Guarda un perfil.</strong> Almacena tu mezcla de "juego", "llamada de trabajo" o "música" y cambia entre ellas al instante en lugar de rearrastrar deslizadores cada día.</li>
</ul>
<p>Dos funciones vale la pena destacarlas porque resuelven los escenarios más molestos:</p>
<ul>
<li><strong>La atenuación automática</strong> baja automáticamente otras apps cuando una app elegida se reproduce, para que tu música baje cuando entra una llamada y vuelva después, sin ajustes manuales.</li>
<li><strong>El cambio rápido de salida</strong> te permite saltar entre auriculares y altavoces desde el mismo menú sin meterte en Ajustes del Sistema.</li>
</ul>
<p>Como los niveles se recuerdan por app y se guardan en perfiles, esta es la parte que la mayoría realmente quiere: lo ajustas una vez y <em>se queda</em> ajustado.</p>

<h2>Las alternativas gratuitas y de pago, comparadas honestamente</h2>
<p>SoundDial no es la única opción, y según tus necesidades, una herramienta gratuita podría bastar. Aquí tienes un resumen justo.</p>

<h2>SoundSource (Rogue Amoeba)</h2>
<p>SoundSource es el peso pesado de nivel profesional. Junto al volumen por app hace ecualizador por app y enrutamiento de salida completo, así que puedes enviar una app a los auriculares y otra a los altavoces. Es realmente excelente. Los compromisos: cuesta alrededor de $39, y no es una instalación limpia de la App Store, es una descarga directa que requiere añadir un controlador de captura de audio a tu sistema. Si eres un profesional del audio que necesita ecualizador y enrutamiento, vale la pena. Si solo quieres cada app al volumen correcto, es más herramienta y más configuración de la que necesitas.</p>

<h2>Background Music (código abierto, gratis)</h2>
<p>Background Music es una app gratuita y de código abierto que ofrece volumen por app y pausa automática. El problema es la fiabilidad: instala un dispositivo de audio virtual y tiene un historial de romperse en versiones más recientes de macOS, a veces requiriendo reinstalaciones o correcciones tras las actualizaciones. También carece de refuerzo, perfiles guardados y verdadera atenuación automática. Genial si quieres gratis y no te importa algo de mantenimiento ocasional.</p>

<h2>FineTune y eqMac</h2>
<p>FineTune es una app gratuita y de código abierto en la barra de menús, un punto de partida ligero. eqMac es un ecualizador gratuito con un potenciador de todo el sistema, orientado más a la ecualización y la ganancia general que a darle a cada app su propio deslizador persistente. Ambas vale la pena probarlas si tu necesidad es concreta, pero ninguna se centra en el flujo de "volumen distinto por app, guardado como perfiles".</p>

<h2>¿Cuál deberías elegir?</h2>
<ul>
<li><strong>¿Quieres que simplemente funcione, de forma limpia, con perfiles y atenuación automática?</strong> SoundDial a 14,99 € un único pago, desde la App Store, sin controladores que instalar.</li>
<li><strong>¿Necesitas ecualizador por app y enrutamiento de audio y no te importa el precio ni el controlador?</strong> SoundSource.</li>
<li><strong>¿Quieres gratis y no te importa trastear cuando macOS se actualiza?</strong> Background Music, FineTune o eqMac.</li>
</ul>
<p>La verdadera ventaja de SoundDial es la combinación: volumen, silencio y refuerzo independientes para cada app, guardados en perfiles intercambiables, con atenuación automática, todo dentro de una descarga en sandbox de la App Store en la que puedes confiar y desinstalar en un clic, por un único pago de 14,99 € en lugar de una suscripción.</p>

<blockquote>Sin controlador, sin extensión, sin DMG. Ajusta el volumen de cada app una vez, guárdalo como un perfil, y deja que la atenuación automática se encargue del resto.</blockquote>

<p>¿Listo para darle a cada app su propio volumen? <a href="https://apps.apple.com/app/id6772792641">Consigue SoundDial en la Mac App Store</a> y ajusta tu mezcla perfecta en aproximadamente un minuto.</p>`,
  },
  "make-one-app-quieter-than-the-rest-mac": {
    slug: "make-one-app-quieter-than-the-rest-mac",
    title: "Baja el volumen de una sola app respecto al resto en Mac",
    description: "¿Una app ruidosa ahoga a las demás en tu Mac? Aquí tienes la forma más rápida y fiable de bajar el volumen de una sola app sin tocar las otras.",
    date: "2026-07-23",
    readTime: "5 min de lectura",
    content: `<p>Para bajar una sola app mientras todo lo demás se queda igual, usa <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, un mezclador de volumen por app en la barra de menús de macOS. Ábrelo, busca la app ruidosa en la lista y arrastra su control deslizante hacia abajo. Esa app baja al instante mientras tu música, llamadas y demás audio conservan sus propios niveles. Es la solución más rápida y fiable.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Baja el volumen de una sola app respecto al resto en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Por qué macOS lo pone tan difícil</h2>

<p>Esta es la frustrante verdad: macOS no tiene un mezclador de volumen por app integrado. Windows lo tiene desde hace años (clic derecho en el icono de volumen, abrir el Mezclador de volumen, listo), pero en un Mac las teclas de volumen y el control deslizante de la barra de menús solo controlan una cosa: la salida maestra. Bájalo y todo se silencia junto. Súbelo y la app ruidosa sigue igual de fuerte, solo que más fuerte junto con el resto.</p>

<p>Así que cuando los efectos de sonido de un juego están a todo volumen, una pestaña del navegador reproduce un anuncio automáticamente o los avisos de notificaciones no dejan de saltar sobre tu pódcast, tus únicas opciones nativas son torpes: silenciar todo el sistema, hurgar en el ajuste de volumen de cada app (si es que lo tiene) o cerrar directamente a la culpable. Nada de eso te permite decir simplemente «baja esta app y deja el resto en paz».</p>

<h2>La solución rápida: un mezclador de volumen por app</h2>

<p>Un mezclador de volumen por app le da a cada app en ejecución su propio control deslizante independiente. Ese es justo el control que te falta. Con <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> se ve así:</p>

<ul>
<li><strong>Abre el mezclador de la barra de menús.</strong> Haz clic en el icono de SoundDial y verás una lista en vivo de todas las apps que están reproduciendo audio.</li>
<li><strong>Encuentra la ruidosa.</strong> El juego, el navegador, la videollamada, los sonidos de notificación, lo que sea que esté ahogando al resto.</li>
<li><strong>Arrastra su control deslizante hacia abajo.</strong> Ponlo al 40 %, al 20 %, donde se sienta equilibrado. El cambio es instantáneo y solo afecta a esa app.</li>
<li><strong>Deja todo lo demás en paz.</strong> Tu reproductor de música, tu llamada, tus otras pestañas, todos conservan el volumen que les pusiste.</li>
</ul>

<p>También puedes silenciar por completo una sola app con un clic mientras las demás siguen sonando, o subir una app silenciosa por encima del 100 % si es demasiado floja. Sin reiniciar la app, sin bucear entre menús.</p>

<h2>Casos habituales en los que esto te salva</h2>

<ul>
<li><strong>Un juego ruidoso sobre música de fondo.</strong> Baja el juego a un nivel cómodo y mantén tu lista de reproducción a todo volumen por debajo.</li>
<li><strong>Anuncios y vídeos del navegador que se disparan.</strong> Deja el navegador más bajo para que una reproducción automática sorpresa nunca te sobresalte.</li>
<li><strong>Avisos de notificación sobre una llamada o pódcast.</strong> Baja la app llena de notificaciones sin silenciar el audio que de verdad te importa.</li>
<li><strong>Una videollamada floja bajo medios ruidosos.</strong> En lugar de bajar la app ruidosa, sube la llamada por encima del 100 % para oír a la gente con claridad.</li>
</ul>

<h2>Configúralo una vez con perfiles de volumen y ducking automático</h2>

<p>Arreglar una app ruidosa está bien, pero seguramente quieres que se quede arreglada. SoundDial tiene dos funciones que lo hacen permanente:</p>

<p>Los <strong>perfiles de volumen</strong> te permiten guardar un conjunto de niveles por app y recuperarlos con un clic. Crea un perfil «Juegos» donde el juego esté al 30 % y la música al 100 %, y un perfil «Trabajo» donde las llamadas estén reforzadas y todo lo demás atenuado. Cambia de contexto sin volver a arrastrar controles cada vez.</p>

<p>El <strong>ducking automático</strong> baja automáticamente las demás apps cuando una app elegida se reproduce, y luego las restaura, de modo que una app ruidosa nunca secuestra por completo tu audio de entrada. Entre los perfiles, el ducking y el cambio rápido de salida (salta entre altavoces y auriculares sin abrir Ajustes del Sistema), configuras tu equilibrio una vez y dejas de vigilar el volumen.</p>

<h2>Cómo se compara SoundDial con las alternativas</h2>

<p>Hay otras formas de conseguir volumen por app en un Mac. Aquí tienes una mirada honesta:</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba, ~39 $)</strong> es de nivel profesional de verdad: EQ por app y enrutamiento de salida completo además del control de volumen. Pero cuesta más del doble y necesita una descarga aparte más un controlador de captura de audio. Si quieres un kit de nivel estudio, es excelente. Si solo quieres bajar una app, es más de lo que necesitas.</li>
<li><strong>Background Music</strong> es gratuito y de código abierto, lo cual está genial, pero puede romperse en versiones más nuevas de macOS y carece de refuerzo de volumen, perfiles y ducking automático.</li>
<li><strong>FineTune</strong> es una app de barra de menús gratuita y de código abierto, y <strong>eqMac</strong> es un EQ gratuito con refuerzo. Ambas merecen una prueba si lo gratis es tu prioridad, pero cambias pulido, fiabilidad y funciones por el precio.</li>
</ul>

<p>SoundDial está en el punto justo: 14,99 € pago único, sin suscripción. Como está en la Mac App Store, está revisada por Apple y aislada en un sandbox, y se instala limpiamente sin DMG, sin controladores de audio y sin extensiones del sistema que aprobar. Obtienes las funciones que de verdad importan para este problema —volumen por app, silenciar, refuerzo, perfiles y ducking automático— sin un precio de 39 $ ni una herramienta gratuita frágil.</p>

<h2>En resumen</h2>

<p>macOS no te deja bajar una sola app por su cuenta, pero es un hueco que puedes cerrar en segundos. Instala un mezclador por app, arrastra hacia abajo el control de la app ruidosa y el resto de tu audio se queda exactamente donde lo quieres. Guarda un perfil y no volverás a pelear con esto.</p>

<p><strong>¿Listo para callar la app que no deja de ahogar a las demás?</strong> Consigue <a href="https://apps.apple.com/app/id6772792641">SoundDial en la Mac App Store</a> por 14,99 €, un solo pago, sin controladores, sin suscripción.</p>`,
  },
  "streaming-audio-mixer-mac-mic-game-music": {
    slug: "streaming-audio-mixer-mac-mic-game-music",
    title: "Mezclador de audio en Mac para streamers: equilibra micro, juego y música",
    description: "La forma más rápida de equilibrar micro, audio del juego, música y alertas mientras haces streaming en Mac. SoundDial te ofrece un mezclador de volumen por app con perfiles y ducking.",
    date: "2026-07-23",
    readTime: "6 min de lectura",
    content: `<p>Para equilibrar tu micro, juego, música y alertas mientras haces streaming en un Mac, la solución más rápida y fiable es <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, un mezclador de volumen por app en la barra de menús. macOS no tiene mezclador integrado, así que SoundDial te permite ajustar niveles independientes por app, reforzar fuentes flojas, guardar perfiles de streaming y aplicar ducking automático a la música cuando hablas.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mezclador de audio en Mac para streamers: equilibra micro, juego y música" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>El problema: macOS no tiene control de volumen por app</h2>
<p>Windows tiene el Mezclador de volumen desde hace años. macOS sigue sin incluir uno. Tu control de volumen del sistema mueve todo a la vez, lo cual es inútil cuando estás en directo. Durante un stream haces malabares con al menos cuatro fuentes que pelean por la misma salida:</p>
<ul>
<li><strong>Tu voz / monitorización del micro</strong> — necesita estar por encima de todo.</li>
<li><strong>Audio del juego</strong> — fuerte, dinámico y propenso a dispararse durante la acción.</li>
<li><strong>Música de fondo</strong> — debería quedar baja bajo tus comentarios.</li>
<li><strong>Alertas y sonidos de chat</strong> — Discord, Stream Deck, alertas de seguidores, notificaciones.</li>
</ul>
<p>Sin control por app acabas gestionando el control interno del juego, silenciando Spotify a mano y rezando para que una cinemática ruidosa no reviente los oídos de tus espectadores. Eso no es una mezcla, es control de daños.</p>

<h2>Lo que un buen mezclador de streaming debe hacer</h2>
<p>Una configuración de audio orientada a creadores en Mac debería darte cuatro cosas: niveles independientes por app, la posibilidad de reforzar una fuente demasiado floja, configuraciones guardadas que puedas recuperar al instante y ducking automático para que la música baje en cuanto hablas. SoundDial cubre las cuatro desde la barra de menús.</p>

<h3>1. Volumen independiente para cada app</h3>
<p>Pon el juego al 60 %, la música al 25 %, Discord al 80 % y el navegador al 40 %: cada app tiene su propio control deslizante. Nada se filtra a lo demás. También puedes silenciar por app al instante cuando una fuente se descontrola a mitad de stream, sin tocar la propia app.</p>

<h3>2. Refuerzo de volumen para fuentes flojas</h3>
<p>Algunas apps y juegos son sencillamente demasiado flojos incluso al 100 %. El refuerzo por app de SoundDial empuja una fuente por encima de su tope normal para que un juego con audio bajo o un vídeo flojo quede donde lo necesitas en la mezcla, sin recodificar ni plugins.</p>

<h3>3. Perfiles de volumen para distintas escenas</h3>
<p>Esta es la función que más tiempo ahorra a los streamers. Tu mezcla «Solo charlando» (música arriba, juego abajo) es distinta de tu mezcla «Pelea de jefe» (juego arriba, música casi en silencio), que a su vez es distinta de tu mezcla «Vuelvo enseguida». Guarda cada una como un perfil y cambia con un clic en vez de arrastrar cuatro controles en directo.</p>

<h3>4. Ducking automático para que la música baje bajo tu voz</h3>
<p>El ducking automático baja el audio de fondo cuando hablas y lo devuelve cuando paras. Para streamers en solitario, esta es la diferencia entre unos comentarios que se entienden y una música que sepulta tu voz constantemente, todo gestionado automáticamente en lugar de a mano.</p>

<h2>Dónde encaja OBS</h2>
<p>OBS es tu herramienta de emisión, no tu mezclador de volumen de escritorio. OBS controla qué niveles entran al stream mediante su panel de Mezclador de audio y sus filtros, pero trabaja a partir de las fuentes de audio que captura: no llega a las apps individuales de macOS para bajarlas a nivel de sistema. En Mac, meter audio de escritorio limpio y por app en OBS siempre ha sido la parte dolorosa.</p>
<p>El flujo práctico: usa SoundDial para ajustar los niveles reales por app en tu Mac de modo que lo que sale ya esté equilibrado, y luego deja que OBS capture y afine los niveles de emisión. Ajusta la mezcla una vez en el origen y OBS tendrá mucho menos con lo que pelear. El cambio rápido de salida en SoundDial también te permite saltar entre auriculares y altavoces sin bucear en Ajustes del Sistema entre escenas.</p>

<h2>SoundDial frente a las alternativas</h2>
<p>Tienes opciones, y aquí la honestidad importa:</p>
<ul>
<li><strong>SoundSource (Rogue Amoeba, ~39 $)</strong> — nivel profesional con EQ por app y enrutamiento de salida completo. Es excelente, pero cuesta más del doble, requiere una descarga directa e instala un controlador de captura de audio. Excesivo si lo que necesitas sobre todo son niveles limpios por app, refuerzo y ducking.</li>
<li><strong>Background Music (gratuito, código abierto)</strong> — realmente útil y gratuito, pero puede romperse en versiones más nuevas de macOS y no tiene refuerzo, ni perfiles, ni ducking automático, justo las funciones en las que se apoyan los streamers.</li>
<li><strong>FineTune (app de barra de menús gratuita, código abierto)</strong> — control ligero por app, pero es un proyecto comunitario sin la combinación de perfiles y ducking pensada para el directo.</li>
<li><strong>eqMac (EQ + refuerzo gratuito)</strong> — bueno para dar forma al tono y reforzar, pero es un ecualizador, no un mezclador de streaming por app.</li>
</ul>
<p>El ángulo de SoundDial: es una compra de <strong>14,99 € pago único</strong> en la <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a> —revisada por Apple, aislada en sandbox y se instala limpiamente sin DMG ni controladores de audio o extensiones del sistema. Esa última parte importa para los streamers: menos componentes a nivel de kernel significan menos roturas sorpresa cuando macOS se actualiza la noche antes de tu stream.</p>

<h2>El compromiso honesto</h2>
<p>Si necesitas EQ de grado de emisión y cadenas de enrutamiento complejas, SoundSource se gana su precio. Si quieres una herramienta gratuita de trastear y no te importa una rotura ocasional, Background Music o FineTune servirán. Pero si quieres la mezcla que el streaming realmente exige —niveles por app, refuerzo, perfiles de escena guardados y ducking automático— desde una instalación segura de App Store que sobreviva a las actualizaciones de macOS, SoundDial es el camino más directo por el precio.</p>

<p><strong>¿Listo para arreglar el audio de tu stream?</strong> Consigue <a href="https://apps.apple.com/app/id6772792641">SoundDial en la Mac App Store</a> por 14,99 €: ajusta tus niveles de micro, juego, música y alertas una vez, guárdalos como perfiles y deja que el ducking automático mantenga tu voz por encima.</p>`,
  },
  "macos-tahoe-audio-crackling-popping-fix": {
    slug: "macos-tahoe-audio-crackling-popping-fix",
    title: "Cómo arreglar el chisporroteo y los chasquidos de audio en macOS Tahoe",
    description: "¿Audio con chisporroteo o chasquidos tras actualizar a macOS Tahoe 26? Arréglalo igualando la frecuencia de muestreo, reiniciando CoreAudio, revisando tu códec Bluetooth y eliminando conflictos de plugins. Aquí tienes el orden completo de resolución.",
    date: "2026-07-23",
    readTime: "6 min de lectura",
    content: `<p>El chisporroteo y los chasquidos tras actualizar a macOS Tahoe 26 casi siempre son un desajuste de frecuencia de muestreo, una negociación inestable del códec Bluetooth o un proceso de CoreAudio atascado. Arréglalo igualando la frecuencia de muestreo de salida en Configuración de Audio MIDI, reiniciando <code>coreaudiod</code>, olvidando y volviendo a emparejar los auriculares Bluetooth y cerrando los anfitriones de plugins de audio. Trabaja en orden a continuación.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Cómo arreglar el chisporroteo y los chasquidos de audio en macOS Tahoe" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Empieza por las soluciones fáciles</h2>

<p>Antes de tocar nada técnico, descarta las dos cosas que resuelven la mayoría de los casos en menos de un minuto:</p>

<ul>
<li><strong>Reinicia el Mac.</strong> Una actualización de Tahoe deja los demonios de audio en un estado a medio migrar con sorprendente frecuencia. Un reinicio limpio recarga CoreAudio desde cero y elimina la mayor parte del chisporroteo posterior a la actualización.</li>
<li><strong>Desconecta y vuelve a conectar el dispositivo de salida.</strong> Si es un DAC USB, un dock o una interfaz de audio, desconéctalo, espera unos segundos y vuelve a conectarlo. Prueba también otro puerto USB, idealmente uno directamente en el Mac en lugar de a través de un hub. Los hubs y las pantallas que transmiten audio son una fuente habitual de chasquidos.</li>
</ul>

<p>Si el ruido sobrevive a un reinicio, es un problema de configuración, no un fallo puntual. Sigue adelante.</p>

<h2>Iguala la frecuencia de muestreo (la causa más común)</h2>

<p>El clásico chisporroteo de Tahoe proviene de un desajuste de frecuencia de muestreo entre lo que quiere tu dispositivo y lo que macOS está enviando. Cuando una app reproduce audio a 44,1 kHz y el sistema está fijado a 48 kHz (o al revés), el remuestreo puede entrecortarse o chasquear.</p>

<ul>
<li>Abre <strong>Configuración de Audio MIDI</strong> (en Aplicaciones → Utilidades, o búscala con Spotlight).</li>
<li>Selecciona tu dispositivo de salida en la barra lateral izquierda.</li>
<li>Mira el menú desplegable <strong>Formato</strong>. Prueba a ajustarlo a <strong>48000.0 Hz, 2 canales-24 bits entero</strong> y comprueba.</li>
<li>Si los chasquidos continúan, cambia a <strong>44100.0 Hz</strong> y vuelve a comprobar.</li>
<li>Para las interfaces, asegúrate de que la frecuencia de muestreo coincide con la del proyecto de tu DAW.</li>
</ul>

<p>Alternar el formato también obliga a CoreAudio a renegociar la conexión, lo que por sí solo arregla muchos casos incluso cuando acabas en el mismo valor.</p>

<h2>Reinicia CoreAudio</h2>

<p>CoreAudio se ejecuta como un demonio en segundo plano llamado <code>coreaudiod</code>. Tras una actualización importante de macOS puede retener un estado de dispositivo obsoleto. Reiniciarlo es seguro y surte efecto al instante, sin necesidad de reiniciar el equipo.</p>

<p>Abre Terminal y ejecuta:</p>

<blockquote><p><code>sudo killall coreaudiod</code></p></blockquote>

<p>Introduce tu contraseña cuando se te pida. Tu audio se cortará durante un segundo y luego el demonio se relanzará automáticamente con la pizarra en blanco. Esta es la solución más eficaz para el chisporroteo que aparece de la nada en una máquina que iba bien antes de la actualización.</p>

<h2>Revisa tus auriculares Bluetooth y el códec</h2>

<p>Si el chisporroteo solo ocurre con AirPods u otros auriculares Bluetooth, el problema suele ser la negociación del códec, no tus altavoces. La calidad del audio inalámbrico se degrada cuando la conexión está congestionada o cuando macOS entra en un modo de llamada de bajo ancho de banda.</p>

<ul>
<li><strong>Olvida y vuelve a emparejar el dispositivo.</strong> Ve a Ajustes del Sistema → Bluetooth, elimina los auriculares y vuelve a emparejarlos. Esto reinicia el códec negociado.</li>
<li><strong>Vigila el cambio a modo de llamada.</strong> Cuando una app abre el micrófono, macOS cambia los auriculares Bluetooth a un perfil bidireccional de baja calidad, que suena crujiente. Cierra las apps de conferencia y de voz que no uses y la fidelidad regresa.</li>
<li><strong>Reduce las interferencias.</strong> Aléjate de entornos de 2,4 GHz saturados y desconecta los dispositivos Bluetooth que no necesites. Una banda de radio ocupada produce chasquidos intermitentes.</li>
<li><strong>Desactiva la entrada del micrófono</strong> en los ajustes de una app si solo necesitas escuchar, para que macOS mantenga el perfil de reproducción de alta calidad.</li>
</ul>

<h2>Cierra los anfitriones de plugins de audio y los controladores virtuales</h2>

<p>El software de audio de terceros que instala una extensión del sistema o un dispositivo virtual es un culpable frecuente tras un salto de sistema operativo, porque las extensiones de kernel y de audio suelen necesitar actualizarse para una nueva versión de macOS. Entre los sospechosos están los enrutadores de audio virtuales, las apps de ecualizador, las herramientas de loopback y las viejas utilidades basadas en controladores.</p>

<ul>
<li>Cierra cualquier app de ecualizador, enrutamiento de audio o loopback y comprueba si el chisporroteo se detiene.</li>
<li>Revisa Ajustes del Sistema → General → Ítems de inicio y extensiones en busca de extensiones de audio que puedan necesitar una actualización o eliminación.</li>
<li>Actualiza esas apps a sus versiones compatibles con Tahoe, o desinstala las que ya no uses. Los controladores de audio apilados suelen entrar en conflicto entre sí tras una actualización importante.</li>
</ul>

<p>Si al cerrar una de estas apps se silencian los chasquidos, has encontrado al culpable. Reinstala la versión actual o déjala desactivada.</p>

<h2>Acótalo: ¿en todo el sistema o en una sola app?</h2>

<p>Averigua si el ruido ocurre en todas partes o solo en un software concreto. Reproduce un archivo de audio local, luego un vídeo del navegador y después una app de música. Si solo una app chisporrotea, la solución está en los propios ajustes de audio de esa app o en una actualización, no en macOS. Si es en todo el sistema, los pasos de arriba son donde está la respuesta.</p>

<p>Cuando sigas atascado, arranca en modo seguro (mantén pulsado el botón de encendido en un Apple silicon y luego elige tu disco de arranque mientras mantienes Mayúsculas). El modo seguro no carga extensiones de terceros. Si ahí el audio es limpio, la causa es un ítem de inicio o un controlador, y puedes volver a activarlos de uno en uno para encontrarlo.</p>

<h2>Una vez que tu audio esté limpio</h2>

<p>El chisporroteo es un problema de controlador y de frecuencia de muestreo, así que las soluciones de arriba son las que de verdad lo resuelven. Pero una vez que la reproducción sea estable, puede que notes una limitación distinta: macOS sigue sin tener un mezclador de volumen por app integrado, como sí lo tiene Windows. No puedes bajar una app ruidosa sin bajarlo todo.</p>

<p>Ese es el hueco que llena <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>. Es un mezclador en la barra de menús que le da a cada app su propio control deslizante de volumen, silenciar por app e incluso un refuerzo de volumen para las apps flojas, además de cambio rápido de salida. No arreglará el chisporroteo, pero una vez que tu audio esté sano hace que el control diario sea mucho más fácil.</p>

<p>Trabaja los pasos de arriba en orden y empieza por el reinicio y la comprobación de la frecuencia de muestreo. Si más adelante quieres control real por app en tu configuración de audio ya limpia, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> es una compra de 14,99 € pago único en la Mac App Store, aislada en sandbox y sin controladores ni DMG que instalar.</p>`,
  },
  "airpods-stuttering-cutting-out-mac-tahoe": {
    slug: "airpods-stuttering-cutting-out-mac-tahoe",
    title: "AirPods que se entrecortan o se cortan en Mac (solución para Tahoe)",
    description: "Que los AirPods se entrecorten, se corten o pierdan audio en macOS Tahoe casi siempre es interferencia Bluetooth o cambios de dispositivo automáticos. Aquí tienes cómo volver a emparejar, reducir la congestión de 2,4 GHz y detener los saltos que rompen la reproducción.",
    date: "2026-07-23",
    readTime: "6 min de lectura",
    content: `<p>Que los AirPods se entrecorten o se corten en macOS Tahoe casi siempre es interferencia Bluetooth, no unos auriculares averiados. Los culpables habituales son la congestión del Wi-Fi de 2,4 GHz y el router, el cambio automático agresivo entre dispositivos y un emparejamiento obsoleto. Vuelve a emparejar los AirPods, desactiva el cambio automático y aléjate de los canales de 2,4 GHz saturados para arreglar la mayoría de los casos.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — AirPods que se entrecortan o se cortan en Mac (solución para Tahoe)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Por qué los AirPods se cortan específicamente en Mac</h2>

<p>Los AirPods usan Bluetooth, que comparte la saturada banda de radio de 2,4 GHz con el Wi-Fi, los microondas, los dispositivos USB 3 y prácticamente cada enchufe inteligente de tu casa. Tu Mac es una radio ajetreada: hace malabares con Wi-Fi, Bluetooth, AirDrop y funciones de Continuidad en antenas que se solapan. Cuando esa banda se congestiona, el audio Bluetooth es lo primero que se entrecorta, porque no tolera los paquetes perdidos como sí lo hace una transferencia de archivos.</p>

<p>Tahoe no empeoró mágicamente tus AirPods, pero una instalación nueva de macOS a menudo reinicia el comportamiento de la radio, reactiva los traspasos de Continuidad y renegocia los códecs. Por eso los problemas parecen aparecer justo después de una actualización. La buena noticia: las soluciones están bien entendidas y en su mayoría son gratuitas.</p>

<h2>Solución 1: vuelve a emparejar los AirPods (hazlo primero)</h2>

<p>Un emparejamiento obsoleto o corrupto sobrevive a los reinicios y provoca cortes intermitentes que parecen aleatorios. Elimina y vuelve a añadir la conexión por completo:</p>

<ul>
<li>Abre <strong>Ajustes del Sistema, Bluetooth</strong>.</li>
<li>Haz clic en el botón de información (i) junto a tus AirPods y elige <strong>Olvidar este dispositivo</strong>.</li>
<li>Mete los AirPods en su estuche, cierra la tapa, espera 15 segundos y ábrela.</li>
<li>Mantén pulsado el botón de la parte trasera del estuche hasta que la luz parpadee en blanco.</li>
<li>Vuelve a emparejar desde la lista de Bluetooth.</li>
</ul>

<p>Ya que estás, asegúrate de que el firmware de los AirPods esté al día. No hay un actualizador manual, pero dejarlos en el estuche cerca de un iPhone o Mac conectado durante un rato les permite actualizarse en segundo plano.</p>

<h2>Solución 2: desactiva el cambio automático</h2>

<p>Esta es la mayor causa de «cortes» para quienes están en el ecosistema de Apple. Tus AirPods intentan seguirte entre tu Mac, tu iPhone y tu iPad. Cada vez que tu teléfono cree que debería apoderarse del audio, la conexión da un tropezón en tu Mac, produciendo un corte de medio segundo a mitad de pódcast.</p>

<ul>
<li>En el Mac: Bluetooth, haz clic en (i) junto a los AirPods, pon <strong>Conectar a este Mac</strong> en <strong>Cuando se conectaron por última vez a este Mac</strong> en lugar de Automáticamente.</li>
<li>En el iPhone: Ajustes, toca tus AirPods, <strong>Conectar a este iPhone</strong>, elige <strong>Cuando se conectaron por última vez a este iPhone</strong>.</li>
</ul>

<p>Esto detiene el tira y afloja entre dispositivos. Elegirás manualmente adónde va el audio, un pequeño precio a cambio de una reproducción estable.</p>

<h2>Solución 3: reduce la congestión de 2,4 GHz</h2>

<p>Si los cortes ocurren durante videollamadas, descargas o cuando otras personas están haciendo streaming, tu banda de radio está saturada. Unas cuantas medidas prácticas:</p>

<ul>
<li><strong>Usa la banda Wi-Fi de 5 GHz</strong> en tu Mac. En los ajustes de tu router, dale a la red de 5 GHz un nombre distinto y conéctate a ella. Esto libera la banda de 2,4 GHz para el Bluetooth.</li>
<li><strong>Aleja los hubs USB 3 y Thunderbolt</strong> de tu Mac y tus AirPods. El USB 3 es una notoria fuente de ruido en 2,4 GHz; un hub junto a tu portátil puede destrozar el Bluetooth desde pocos centímetros.</li>
<li><strong>Cambia el canal de 2,4 GHz de tu router</strong> a 1, 6 u 11 (las opciones que no se solapan) y evita los canales saturados que usen tus vecinos.</li>
<li><strong>Mantén línea de visión.</strong> Los cuerpos y las paredes absorben los 2,4 GHz. Si tu Mac está detrás de ti o en una mochila, los cortes empeoran.</li>
</ul>

<blockquote>Los routers Wi-Fi 6E y Wi-Fi 7 pueden ayudar de forma indirecta: empujar tus dispositivos a los 6 GHz despeja la banda de 2,4 GHz de la que depende el Bluetooth. Pero una malla mal configurada que te sigue redirigiendo a 2,4 GHz puede empeorar las cosas. Comprueba en qué banda estás realmente.</blockquote>

<h2>Solución 4: reinicia la pila de Bluetooth y Continuidad</h2>

<p>Si volver a emparejar no aguantó, reinicia las propias radios:</p>

<ul>
<li>Alterna el Bluetooth apagado y encendido desde la barra de menús y luego reinicia el Mac. Un reinicio elimina un número sorprendente de fallos de audio transitorios.</li>
<li>Restablece el SMC/NVRAM en Macs Intel, o simplemente apaga por completo (no reinicies) durante 30 segundos en Apple Silicon.</li>
<li>Si no usas AirDrop ni Handoff, desactivar Handoff en Ajustes del Sistema, General, AirDrop y Handoff reduce el ruido de radio en segundo plano.</li>
</ul>

<h2>Lo que no lo arreglará (y lo que hace de verdad un mezclador de volumen)</h2>

<p>Para ser claros sobre el alcance: nada de esto es un problema de volumen por software, y ninguna app de volumen puede reparar un enlace Bluetooth. Si tu audio se <em>corta</em>, persigue el problema de radio de arriba. Apps como <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> controlan el volumen por app, el silencio y el cambio de salida, no tocan la pila de Bluetooth, así que no detendrán los entrecortes. Donde un mezclador ayuda de verdad es en la molestia adyacente que muchos usuarios de AirPods confunden con los cortes: una app a todo volumen mientras otra está demasiado floja, o la necesidad de saltar entre salidas rápidamente. Eso es un problema de equilibrio de volumen, no de conexión.</p>

<p>Diagnostica con honestidad. Si el audio se corta un instante y vuelve, es interferencia o cambio automático. Si los niveles simplemente están desiguales entre apps, eso es un problema de mezcla que sí puedes resolver con software.</p>

<h2>Lista rápida de comprobación</h2>

<ul>
<li>Olvida y vuelve a emparejar los AirPods.</li>
<li>Pon tanto el Mac como el iPhone en <strong>Cuando se conectaron por última vez</strong>, no en Automáticamente.</li>
<li>Pasa tu Mac al Wi-Fi de 5 GHz; mantén los hubs USB 3 lejos.</li>
<li>Pon el 2,4 GHz en el canal 1, 6 u 11.</li>
<li>Reinicia tras alternar el Bluetooth.</li>
</ul>

<p>Una vez que los cortes desaparezcan y solo quieras un control más limpio de lo alto que suena cada app, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> añade un mezclador de volumen por app en condiciones, silenciar, refuerzo y cambio rápido de salida que macOS sigue sin incluir. Es una compra de 14,99 € pago único en la Mac App Store, aislada en sandbox y sin controladores que instalar.</p>`,
  },
  "mac-right-speaker-not-working-after-tahoe": {
    slug: "mac-right-speaker-not-working-after-tahoe",
    title: "¿Altavoz derecho mudo en Mac tras la actualización a Tahoe? Cómo arreglarlo",
    description: "¿Un altavoz o canal dejó de funcionar tras actualizar a macOS Tahoe? Empieza por el control de balance de audio, luego reinicia Core Audio, prueba el modo seguro y descarta el hardware. Una guía de resolución clara.",
    date: "2026-07-23",
    readTime: "6 min de lectura",
    content: `<p>Si tu altavoz derecho se quedó mudo tras actualizar a macOS Tahoe, revisa primero el <strong>control de balance</strong> de audio: puede desplazarse durante una actualización. Ve a Ajustes del Sistema &gt; Sonido &gt; Salida y asegúrate de que el balance esté centrado. Si eso está bien, reinicia Core Audio, arranca en modo seguro y luego descarta el hardware. La mayoría de los casos son de software.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — ¿Altavoz derecho mudo en Mac tras la actualización a Tahoe? Cómo arreglarlo" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Primero: el control de balance (arregla esto más a menudo de lo que crees)</h2>

<p>Un control de balance atascado o desplazado es la razón más común por la que un canal se queda mudo, y las actualizaciones de macOS a veces lo desajustan. Antes de suponer lo peor:</p>

<ul>
<li>Abre <strong>Ajustes del Sistema &gt; Sonido</strong>.</li>
<li>Haz clic en la pestaña <strong>Salida</strong> y selecciona tus altavoces (integrados o tu dispositivo externo).</li>
<li>Busca el control de <strong>Balance</strong> y arrástralo al centro exacto. Si estaba tirado hacia la izquierda, tu canal derecho sonaría mudo.</li>
</ul>

<p>Haz esto <em>por cada dispositivo de salida</em>. El ajuste de balance se recuerda por separado para los altavoces integrados, los auriculares y cada interfaz externa, así que un balance centrado en los integrados no ayudará si el problema está en tu DAC USB.</p>

<h2>Comprueba si es realmente un canal de hardware</h2>

<p>Descarta el hardware rápido. Reproduce una pista estéreo que conozcas bien y luego conecta unos auriculares con cable. Si ambos canales funcionan en los auriculares pero no en los altavoces, el problema está aguas abajo del motor de audio (el hardware del altavoz o la ruta de salida). Si el mismo canal también está mudo en los auriculares, lo más probable es que sea software o el códec de audio de la placa lógica.</p>

<p>También puedes abrir <strong>Música</strong> o QuickTime, reproducir algo y llevar el balance del todo a la izquierda y luego del todo a la derecha. Si el audio se mueve limpiamente entre canales, ambos altavoces están vivos y esto es puramente un problema de ajustes.</p>

<h2>Reinicia Core Audio</h2>

<p>macOS enruta todo el sonido a través del proceso <strong>coreaudiod</strong>. Tras una actualización importante, su estado puede quedar bloqueado: desaparecen salidas, se caen canales o el volumen se comporta de forma extraña. Reiniciarlo es seguro y obliga a macOS a reconstruir el grafo de audio:</p>

<ul>
<li>Abre <strong>Terminal</strong> (Aplicaciones &gt; Utilidades).</li>
<li>Ejecuta: <code>sudo killall coreaudiod</code></li>
<li>Introduce tu contraseña. El demonio de audio se relanza automáticamente en un segundo o dos.</li>
</ul>

<p>No se borra nada: esto solo reinicia el subsistema de audio. Vuelve a probar tu altavoz derecho justo después.</p>

<h2>Reinicia como es debido y luego prueba el modo seguro</h2>

<p>Un reinicio completo elimina fallos de audio transitorios que un killall no quitará. Si el canal sigue mudo, arranca en <strong>modo seguro</strong>, que carga un sistema mínimo y omite las extensiones de audio de terceros y los ítems de inicio:</p>

<ul>
<li><strong>Apple Silicon:</strong> Apaga. Mantén pulsado el botón de encendido hasta que aparezca «Cargando opciones de arranque». Selecciona tu disco, luego mantén <strong>Mayúsculas</strong> y haz clic en «Continuar en modo seguro».</li>
<li><strong>Intel:</strong> Reinicia y mantén <strong>Mayúsculas</strong> hasta que aparezca la ventana de inicio de sesión.</li>
</ul>

<p>Si ambos altavoces funcionan en modo seguro, un controlador de audio de terceros, un dispositivo virtual o una utilidad de la barra de menús instalada antes de la actualización está entrando en conflicto con la nueva pila de audio de Tahoe. Vuelve a arrancar en modo normal y elimina o actualiza el software de audio instalado recientemente (los grabadores de pantalla, las apps de reuniones y los kexts de enrutamiento de audio son culpables habituales).</p>

<h2>Restablece la NVRAM (solo Macs Intel)</h2>

<p>En los Macs Intel, los ajustes de sonido y altavoces viven en la NVRAM/PRAM, y un valor obsoleto puede sobrevivir a una actualización. Restablécela: apaga, luego enciende e inmediatamente mantén <strong>Opción + Comando + P + R</strong> durante unos 20 segundos, dejando que el Mac se reinicie una vez. Esto no se aplica a los Macs Apple Silicon: ellos lo gestionan automáticamente, así que sáltatelo si tienes una máquina de la serie M.</p>

<h2>Actualiza de nuevo, y busca una versión de mantenimiento</h2>

<p>Las primeras versiones de cualquier macOS importante llegan con errores en los controladores de audio que luego se corrigen. Ve a <strong>Ajustes del Sistema &gt; General &gt; Actualización de software</strong> e instala cualquier versión de mantenimiento de Tahoe pendiente (14.x.1, 14.x.2, etc.). Si existe una actualización suplementaria, a menudo aborda justo estas regresiones de audio posteriores a la actualización.</p>

<h2>Cuando de verdad es hardware</h2>

<p>Si el modo seguro, un reinicio de Core Audio y una reinstalación limpia fallan todos, y el mismo canal está mudo en los auriculares, puede que estés ante un fallo de hardware. La coincidencia con una actualización puede ser casual; los amplificadores de altavoz y los códecs de audio sí fallan. Ejecuta el <strong>Diagnóstico de Apple</strong> (apaga, luego mantén el botón de encendido en Apple Silicon y elige Diagnóstico, o mantén <strong>D</strong> en Intel al arrancar). Si marca un componente de audio, contacta con el <strong>Soporte de Apple</strong> o con un proveedor de servicios autorizado. No gastes dinero en software por un altavoz reventado.</p>

<blockquote>Regla rápida: si el audio panea correctamente con el control de balance, ambos altavoces están físicamente bien y tu solución está en el software. Si nunca se mueve hacia el lado mudo, sospecha del hardware.</blockquote>

<h2>Dónde encaja el software de volumen (y dónde no)</h2>

<p>Para ser claros: un canal de altavoz muerto no es algo que arregle una app de volumen; las comprobaciones de arriba son tu camino. Dicho esto, una vez que tu audio esté sano de nuevo, macOS sigue careciendo de algo que Windows tiene desde hace años: un verdadero mezclador de volumen por app. Si acabaste hurgando en los ajustes de Sonido porque una app estaba a todo volumen mientras otra estaba demasiado floja, un mezclador de barra de menús como <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> te permite ajustar volumen independiente, silenciar e incluso reforzar por aplicación sin tocar el balance de tu sistema. Es una herramienta de conveniencia para la mezcla diaria, no una reparación para el problema de este artículo.</p>

<h2>La versión corta</h2>

<ul>
<li>Centra el control de <strong>Balance</strong>, por cada dispositivo de salida.</li>
<li>Prueba con auriculares para aislar el hardware.</li>
<li>Ejecuta <code>sudo killall coreaudiod</code> y luego reinicia.</li>
<li>Prueba el <strong>modo seguro</strong> para detectar conflictos de controladores.</li>
<li>Restablece la NVRAM en Intel; instala cualquier versión de mantenimiento de Tahoe.</li>
<li>¿Sigue mudo en los auriculares? Ejecuta el Diagnóstico de Apple y llama a Apple.</li>
</ul>

<p>Una vez que tus altavoces vuelvan a la normalidad, si hacer malabares con el volumen por app es una molestia diaria, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> añade el mezclador que a macOS siempre le ha faltado: 14,99 €, pago único, aislado en sandbox, sin controladores.</p>`,
  },
  "airpods-stuck-at-half-volume-mac-fix": {
    slug: "airpods-stuck-at-half-volume-mac-fix",
    title: "¿AirPods atascados a medio volumen en tu Mac? Aquí está la solución",
    description: "Por qué los AirPods se conectan a tu Mac a medio volumen —normalmente un cambio de códec Bluetooth al perfil de micrófono manos libres— además de las soluciones de reemparejamiento y cómo reforzar el nivel para siempre.",
    date: "2026-07-23",
    readTime: "6 min de lectura",
    content: `<p>Los AirPods suelen bajar a medio volumen en un Mac porque macOS los ha cambiado del perfil de audio de alta calidad A2DP al perfil de manos libres (HFP) de baja calidad, el que está pensado para el micrófono de las llamadas telefónicas. Ese modo limita la salida y la calidad. Arréglalo forzando al Mac a volver al audio solo de auriculares y luego refuerza el nivel para mantenerlo ahí.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — ¿AirPods atascados a medio volumen en tu Mac? Aquí está la solución" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Por qué ocurre esto: el cambio de códec</h2>

<p>Los dispositivos de audio Bluetooth como los AirPods funcionan en uno de dos modos. Cuando solo estás escuchando, macOS usa A2DP: estéreo completo, volumen completo, calidad limpia. Pero en el momento en que una app quiere tu micrófono, macOS cambia toda la conexión a HFP (Perfil de Manos Libres). El HFP es un códec de telefonía bidireccional. Suena delgado, casi mono y notablemente más flojo, porque se diseñó para llamadas de voz, no para música.</p>

<p>El problema es que macOS a menudo se queda atascado en HFP incluso después de que la app que tomó el micrófono haya terminado, o cambia a él en el instante en que abres Zoom, FaceTime, Teams, Discord o una pestaña del navegador con permiso de micrófono. Así que tus AirPods suenan como si estuvieran a «medio volumen» no porque el control se haya movido, sino porque todo el perfil de audio se degradó por debajo.</p>

<p>Lo reconocerás: el audio se vuelve de repente flojo y apagado, los AirPods aparecen dos veces en tus ajustes de sonido (una como salida, otra como micrófono) y subir el volumen del sistema al máximo apenas ayuda.</p>

<h2>Los apaños de reemparejamiento y códec</h2>

<p>Estos son los primeros pasos honestos. Trabájalos en orden, uno de los primeros suele resolverlo.</p>

<ul>
<li><strong>Cambia tu dispositivo de entrada.</strong> Abre Ajustes del Sistema → Sonido → Entrada y elige el micrófono integrado de tu Mac en lugar de los AirPods. Esto impide que macOS mantenga los AirPods en modo HFP, de modo que la salida puede volver a la calidad A2DP completa. Esta es la solución más eficaz.</li>
<li><strong>Alterna el Bluetooth apagado y encendido.</strong> Un reinicio rápido de la conexión a menudo renegocia A2DP limpiamente, sobre todo si los AirPods se quedaron atascados al terminar una llamada.</li>
<li><strong>Vuelve a conectar los AirPods.</strong> Cierra el estuche, espera unos segundos, ábrelo cerca del Mac y vuelve a seleccionarlos como dispositivo de salida.</li>
<li><strong>Cierra la app que tomó el micrófono.</strong> Cierra por completo Zoom, Teams, Discord o esa pestaña del navegador. Algunas apps mantienen la sesión de micrófono abierta en segundo plano y fijan el HFP hasta que desaparecen.</li>
<li><strong>Vuelve a emparejar desde cero.</strong> Elimina los AirPods en Ajustes del Sistema → Bluetooth (haz clic en el botón de información → Olvidar este dispositivo) y luego empareja de nuevo. Esto limpia una negociación de perfil corrupta que la mera alternancia no arreglará.</li>
<li><strong>Restablece los AirPods.</strong> Con ellos en el estuche con la tapa abierta, mantén pulsado el botón de configuración de la parte trasera hasta que la luz parpadee en ámbar y luego en blanco. Vuelve a emparejar después. Esta es la opción nuclear para rarezas a nivel de firmware.</li>
<li><strong>Actualiza macOS y el firmware de los AirPods.</strong> Apple ha lanzado correcciones de audio Bluetooth en versiones de mantenimiento. El firmware de los AirPods se actualiza en silencio cuando se están cargando cerca de un dispositivo conectado, así que déjalos en el estuche cerca de tu Mac durante la noche.</li>
</ul>

<blockquote><p>El patrón a vigilar: si el volumen baja en el instante en que te unes a una llamada y se recupera cuando la llamada termina, es el cambio a HFP, no un altavoz averiado ni un fallo de ajustes.</p></blockquote>

<h2>Por qué las soluciones no siempre aguantan</h2>

<p>Aquí está la parte frustrante. Incluso después de volver a emparejar, macOS volverá alegremente a poner tus AirPods en el modo de manos libres flojo la próxima vez que cualquier app toque el micrófono. No puedes desactivar permanentemente ese comportamiento en los ajustes del sistema: Apple lo trata como automático. Así que acabas rehaciendo el truco del dispositivo de entrada varias veces al día, y en cualquier momento en que tus AirPods estén en una llamada o en una app hambrienta de micrófono, quedan de nuevo limitados a ese nivel más bajo.</p>

<p>Hay también un segundo problema, distinto, que la gente confunde con este: algunas apps son simplemente más flojas que otras al volumen máximo del sistema. Un reproductor de pódcast o una pestaña del navegador pueden quedar muy por debajo de lo que tus oídos quieren, incluso cuando los AirPods funcionan con A2DP limpio. macOS te da un único control de volumen para todo y ningún control por app, así que no hay forma nativa de subir de nuevo una sola app floja.</p>

<h2>Refuerza el nivel de nuevo, y mantenlo ahí</h2>

<p>Aquí es donde un mezclador de volumen por app se gana su lugar. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> es una app de barra de menús para macOS que le da a cada app en ejecución su propio control deslizante de volumen independiente, incluido un refuerzo por encima del 100 %. Así, cuando tus AirPods vuelvan de una llamada a un nivel efectivo más bajo, o una app concreta sea simplemente demasiado floja, arrastras esa app por encima del tope normal y se queda ahí.</p>

<p>En concreto, eso significa:</p>

<ul>
<li><strong>REFUERZO de volumen por app.</strong> Empuja una app floja por encima del máximo estándar en lugar de esforzarte por oírla al volumen «máximo» del sistema.</li>
<li><strong>Perfiles de volumen.</strong> Guarda un conjunto de niveles —navegador reforzado, música más suave, videollamadas fuertes— y cambia toda la disposición con un clic para no tener que reajustar tras cada reconexión.</li>
<li><strong>Cambio rápido de salida.</strong> Salta entre AirPods, altavoces del portátil y un DAC externo desde la barra de menús sin hurgar en Ajustes del Sistema, lo que ayuda cuando estás forzando una nueva negociación de perfil.</li>
<li><strong>Silenciar por app y ducking automático.</strong> Silencia una app sin tocar el resto, y deja que los medios bajen automáticamente cuando algo más importante se reproduce.</li>
</ul>

<p>Conviene tener claro qué hace y qué no. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> no obligará a macOS a permanecer en A2DP; el truco del dispositivo de entrada de arriba sigue siendo tu herramienta para el códec en sí. Lo que hace es devolverte el volumen que la degradación te robó, por app, de modo que una sesión de AirPods floja o una app tercamente baja se arregla con un solo arrastre en lugar de ser una causa perdida. Y como es una app de la Mac App Store aislada en sandbox, no hay controlador de audio que instalar, ni DMG, ni extensión de kernel: simplemente funciona.</p>

<h2>La versión corta</h2>

<p>Si tus AirPods suenan flojos y apagados en tu Mac, cambia tu dispositivo de entrada para sacarlos de los AirPods y forzarlos fuera del modo manos libres, y vuelve a emparejar si eso falla. Cuando el nivel siga sin llegar a donde lo quieres, o una sola app sea simplemente demasiado floja, recurre al refuerzo por app para configurarlo una vez y seguir adelante.</p>

<p>¿Cansado de pelear con el control de volumen cada vez que atiendes una llamada? <a href="https://apps.apple.com/app/id6772792641">Consigue SoundDial en la Mac App Store</a> —14,99 € pago único, sin suscripción, sin controladores— y dale a cada app su propio volumen.</p>`,
  },
  "mac-volume-resets-itself-tahoe-bug": {
    slug: "mac-volume-resets-itself-tahoe-bug",
    title: "¿El volumen de tu Mac se restablece solo en Tahoe? Cómo fijarlo para siempre",
    description: "Desde macOS Tahoe, muchos Macs cambian o restablecen su volumen de repente por sí solos. Aquí tienes por qué ocurre, cómo detener las causas integradas y cómo fijar un volumen constante por app para que se quede quieto.",
    date: "2026-07-23",
    readTime: "6 min de lectura",
    content: `<p>Si el volumen de tu Mac no deja de restablecerse solo desde macOS Tahoe, la solución es eliminar los ajustadores automáticos: desactiva el ducking de audio y «Reproducir sonido al arrancar», restablece los ajustes de sonido y vuelve a conectar limpiamente cualquier salida Bluetooth. Para los niveles por app que saltan, fija un volumen constante por app con un mezclador para que nunca vuelva a desviarse.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — ¿El volumen de tu Mac se restablece solo en Tahoe? Cómo fijarlo para siempre" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Por qué tu volumen cambia solo tras Tahoe</h2>

<p>Un volumen que se mueve sin que lo toques parece un fallo de hardware, pero casi siempre es el software decidiendo tu nivel por ti. macOS tiene varios comportamientos automáticos que ajustan o restablecen la salida en silencio, y los cambios en la pila de audio de Tahoe hicieron algunos de ellos más notorios. Antes de suponer que la app o el Mac están rotos, ayuda saber exactamente qué sistema se está apoderando del control.</p>

<ul>
<li><strong>Ducking de audio:</strong> macOS baja el resto del audio cuando cree que algo más importante se está reproduciendo (Siri, anuncios de accesibilidad, notificaciones). Cuando el disparador termina, a veces el nivel no vuelve del todo.</li>
<li><strong>Reinicios del handshake de Bluetooth:</strong> los AirPods y otros dispositivos Bluetooth renegocian el volumen al conectarse. Reconectar a mitad de sesión puede llevar la salida a un valor por defecto o a un nivel mucho más alto o bajo.</li>
<li><strong>Cambio de dispositivo de salida:</strong> cuando desconectas los auriculares, el dock o cambias a los altavoces de un monitor, cada salida recuerda su propio volumen. Alternar de un lado a otro parece un restablecimiento «aleatorio».</li>
<li><strong>Valores por defecto por app:</strong> algunas apps (navegadores, reproductores de vídeo, herramientas de conferencia) fijan su propia ganancia al arrancar o cuando comienza una nueva transmisión, anulando lo que tenías.</li>
<li><strong>Sonido de arranque y estado de inicio de sesión:</strong> el tono de arranque y el inicio de sesión pueden empujar el volumen del sistema de vuelta a un nivel por defecto que no elegiste.</li>
</ul>

<h2>Arregla primero las causas integradas</h2>

<p>Trabaja estas en orden. La mayoría de las quejas de «se restablece solo» desaparecen una vez que se descartan el ducking y el Bluetooth.</p>

<ul>
<li><strong>Desactiva el sonido de arranque.</strong> Ajustes del Sistema → Sonido → desmarca <em>Reproducir sonido al arrancar</em>. Esto impide que el tono de arranque restablezca tu nivel de referencia.</li>
<li><strong>Reduce o desactiva los disparadores de ducking.</strong> En Ajustes del Sistema → Accesibilidad → Contenido hablado y Siri, desactiva los anuncios hablados que no necesites. Menos disparadores significa menos momentos en los que macOS baja el audio y se olvida de restaurarlo.</li>
<li><strong>Vuelve a emparejar los dispositivos Bluetooth problemáticos.</strong> Elimina los AirPods o auriculares de los ajustes de Bluetooth y empáralos de nuevo. Un perfil obsoleto es una causa común de que el volumen salte al conectar.</li>
<li><strong>Ajusta cada dispositivo de salida deliberadamente.</strong> Conecta cada salida que uses (integrada, monitor, auriculares) y ajusta su volumen una vez. macOS almacena el volumen por dispositivo, así que ajustarlos todos elimina la sorpresa al cambiar.</li>
<li><strong>Reinicia Core Audio si está atascado.</strong> Abre Terminal y ejecuta <code>sudo killall coreaudiod</code>. Esto reinicia el demonio de audio sin reiniciar el equipo y limpia un estado colgado que puede causar niveles erráticos.</li>
<li><strong>Actualiza y luego reinicia.</strong> Las primeras versiones de mantenimiento de Tahoe incluían correcciones de audio. Asegúrate de estar en la última compilación y reinicia una vez tras actualizar.</li>
</ul>

<p>Si los restablecimientos se detienen, uno de los anteriores era tu culpable. Si tu volumen de <em>sistema</em> es estable pero apps individuales siguen desviándose más fuertes o más flojas que todo lo demás, has llegado al límite de lo que pueden hacer los controles integrados.</p>

<h2>El verdadero hueco: macOS no puede fijar el volumen por app</h2>

<p>Aquí está la parte frustrante. Windows tiene un mezclador de volumen por app desde hace años: lo abres, arrastras el control de una app y se queda ahí. macOS nunca ha incluido uno. Hay exactamente un control de volumen del sistema, y todas las apps pelean por él. Así que cuando una pestaña del navegador dispara un anuncio de reproducción automática o una videollamada entra al doble de volumen que tu música, tu única opción es gestionar el volumen maestro a mano, que es justo el bucle de «¿por qué no deja de cambiar esto?» del que intentas escapar.</p>

<blockquote>El control del sistema es un único dial compartido. Sin un mezclador por app, «configurar y olvidar» es imposible en macOS de serie: algo siempre te anulará.</blockquote>

<h2>Fija un volumen constante por app con SoundDial</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> añade el mezclador por app que a macOS le falta. Vive en tu barra de menús y le da a cada app en ejecución su propio control deslizante de volumen, independiente del maestro. Como recuerda el nivel que ajustas para cada app, resuelve directamente el problema de «se restablece solo»: decides una vez y esa app se abre a ese volumen cada vez.</p>

<ul>
<li><strong>Volumen independiente por app:</strong> mantén la música al 40 % y una videollamada al 80 % a la vez, sin malabares con el control maestro.</li>
<li><strong>Silenciar y reforzar por app:</strong> silencia una app ruidosa al instante, o empuja una app demasiado floja por encima del 100 % cuando su propio audio es débil.</li>
<li><strong>Perfiles de volumen:</strong> guarda configuraciones para «trabajo», «juegos» o «concentración» y cambia toda la mezcla con un clic.</li>
<li><strong>Ducking automático en tus términos:</strong> baja las apps de fondo automáticamente cuando hablas o cuando una app elegida está activa, en lugar de que decida macOS.</li>
<li><strong>Cambio rápido de salida:</strong> salta entre altavoces, auriculares y audio del monitor desde la barra de menús sin bucear en los ajustes.</li>
</ul>

<p>Es una compra de 14,99 € pago único en la Mac App Store: sin suscripción, sin controladores, sin DMG y sin extensiones de kernel. Como está totalmente aislada en sandbox y distribuida por la App Store, no estás instalando un kext de audio heredado que Tahoe podría bloquear en la próxima actualización. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> ajusta tus niveles usando APIs compatibles, así que tus volúmenes recordados sobreviven a las actualizaciones y los reinicios.</p>

<h2>¿Qué enfoque necesitas realmente?</h2>

<p>Si es todo tu volumen del sistema el que salta, empieza por las soluciones integradas de arriba: el ducking, el Bluetooth y el sonido de arranque explican la mayoría de los casos. Si en cambio el problema es que una app es siempre la rara, o estás cansado de que el control maestro sea un compromiso, un mezclador por app es la única respuesta real. macOS no añadirá uno, así que una herramienta de barra de menús es la vía práctica hacia una mezcla que de verdad se quede donde la pones.</p>

<p>¿Cansado de perseguir el control de volumen en Tahoe? <a href="https://apps.apple.com/app/id6772792641">Consigue SoundDial en la Mac App Store</a> y fija un volumen recordado para cada app: 14,99 € una vez, sin suscripciones, sin controladores.</p>`,
  },
  "control-daw-and-system-volume-separately-mac": {
    slug: "control-daw-and-system-volume-separately-mac",
    title: "Controla el volumen de monitorización de tu DAW por separado del audio del sistema en Mac",
    description: "macOS no tiene un mezclador de volumen por app integrado, así que tu DAW y los sonidos del sistema comparten un mismo nivel. Aquí tienes cómo controlar el volumen de monitorización de Logic, Ableton o GarageBand de forma independiente de tu navegador y tus notificaciones.",
    date: "2026-07-23",
    readTime: "6 min de lectura",
    content: `<p>macOS no tiene un mezclador de volumen por app integrado, así que tu DAW y todo lo demás comparten un único control del sistema. Para ajustar tu nivel de monitorización de forma independiente de los navegadores, Slack y las notificaciones, necesitas control de volumen por app. Un mezclador de barra de menús como <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> le da a Logic, Ableton y GarageBand su propio volumen, separado del audio del sistema.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Controla el volumen de monitorización de tu DAW por separado del audio del sistema en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Por qué un solo control de volumen arruina tu monitorización</h2>

<p>Cuando estás produciendo, tu DAW es solo una de muchas cosas que hacen sonido. Una pista de referencia suena en una pestaña del navegador. Llegan avisos de Slack. Un tutorial de YouTube corre en un segundo monitor. En Windows, el Mezclador de volumen te permite equilibrar todo esto de forma independiente. En macOS, Apple nunca incluyó un equivalente: las teclas de volumen y el control de la barra de menús mueven <em>todo</em> a la vez.</p>

<p>Eso crea un problema real para cualquiera que mezcle de oído. Ajustas un nivel de monitorización cómodo en Logic y luego una notificación irrumpe al mismo nivel y te revienta los oídos. O bajas el sistema para proteger tu audición durante un pasaje fuerte, y ahora tu pista de referencia es demasiado floja para compararla. Tu referencia de monitorización deja de ser estable, y una referencia estable es todo el sentido de mezclar.</p>

<blockquote>Monitorizar a un nivel constante es uno de los pocos hábitos que mejora tus mezclas de forma medible. Si los sonidos del sistema te obligan a mover el control maestro constantemente, pierdes esa consistencia.</blockquote>

<h2>Qué significa realmente «volumen de DAW separado»</h2>

<p>Hay dos cosas distintas que los productores confunden aquí, y vale la pena separarlas:</p>

<ul>
<li><strong>Nivel de salida de la interfaz / maestro</strong> — la perilla física de tu interfaz de audio o de tu controlador de monitores. Esto ajusta tu volumen absoluto de escucha y debería quedarse quieto una vez calibrado.</li>
<li><strong>Volumen por app por software</strong> — lo alto que suena cada aplicación <em>antes</em> de llegar a esa salida. Esto es lo que le falta a macOS. Te permite mantener el DAW a unidad mientras bajas Chrome, Música o los sonidos de notificación a un nivel de fondo por debajo.</li>
</ul>

<p>Quieres el segundo. El objetivo no es bajar tu DAW, sino bajar todo lo demás en relación con él, para que el DAW siga siendo tu fuente más fuerte y constante y las distracciones queden en silencio de fondo.</p>

<h2>Cómo hacerlo con un mezclador por app</h2>

<p>Un mezclador de barra de menús como <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> lista cada app que reproduce audio en ese momento y le da a cada una su propio control deslizante. El flujo para un productor es así:</p>

<ul>
<li><strong>Calibra tu interfaz una vez.</strong> Ajusta tu interfaz de audio o controlador de monitores a un nivel de referencia cómodo y repetible y déjalo. Este es tu ancla fija.</li>
<li><strong>Pon tu DAW al 100 %.</strong> En el mezclador, deja Logic, Ableton o GarageBand a volumen de software completo para que pase a unidad. El propio fader maestro de tu DAW sigue haciendo la mezcla fina.</li>
<li><strong>Baja todo lo demás.</strong> Baja Chrome, Safari, Música y Slack a un nivel más bajo —digamos 40-60 %— para que las pistas de referencia y los mensajes queden bajo tu mezcla en vez de competir con ella.</li>
<li><strong>Silencia lo ruidoso.</strong> Silenciar por app te permite callar por completo un navegador o una app de chat sin tocar tu cadena de monitorización. Un clic, y tu DAW sigue sonando intacto.</li>
</ul>

<p>Como el control del DAW nunca se mueve, tu referencia de monitorización se mantiene sólida como una roca durante toda una sesión. Puedes subir una pista de referencia para un A/B rápido, luego silenciarla, y tu nivel de mezcla no se ha movido ni un decibelio.</p>

<h2>Reforzar una app floja en lugar de bajar las demás</h2>

<p>A veces el problema va al revés. Una mezcla de demo en bruto, una nota de voz o una referencia floja se reproducen muy por debajo del nivel de tu sesión. Subir tu interfaz para oírla significa que todo lo demás queda ahora demasiado fuerte. El <strong>refuerzo de volumen</strong> por app te permite empujar una sola aplicación floja por encima del 100 % para que iguale tu nivel de trabajo, sin tocar tu salida calibrada. Es la pieza que el mezclador de Windows nunca tuvo y una de las herramientas más útiles cuando estás revisando material de fuera de tu DAW.</p>

<h2>Perfiles para distintos tipos de sesión</h2>

<p>Tu equilibrio ideal no es el mismo para cada tarea. Grabar, mezclar y escuchar de forma casual quieren, cada uno, una mezcla distinta de niveles de app. Los perfiles de volumen te permiten guardar una configuración y recuperarla al instante:</p>

<ul>
<li><strong>Mezcla:</strong> DAW al 100 %, navegador y Música bajos, chat silenciado.</li>
<li><strong>Escucha de referencia:</strong> app de música o streaming arriba, DAW abajo.</li>
<li><strong>Llamadas / colaboración:</strong> app de conferencia arriba, DAW bajado para que no se filtre en la llamada.</li>
</ul>

<p>Cambiar de perfil supera con creces ajustar cinco controles a mano cada vez que cambias de tarea.</p>

<h2>Ducking automático y cambio rápido de salida</h2>

<p>Dos cosas más importan en un estudio. El <strong>ducking automático</strong> puede bajar automáticamente las apps de fondo cuando una fuente prioritaria habla o suena, para que una llamada o un audio importante siempre destaque. Y el <strong>cambio rápido de salida</strong> desde la barra de menús te permite saltar entre tu interfaz, tus monitores y los auriculares sin bucear en Ajustes del Sistema, una tarea constante cuando compruebas una mezcla en distintos sistemas.</p>

<h2>¿Por qué no un controlador de audio virtual?</h2>

<p>Algunas herramientas de enrutamiento resuelven esto instalando un controlador de audio virtual a nivel de kernel. Son potentes pero pesadas: pueden romperse tras las actualizaciones de macOS, añadir latencia y requerir permisos profundos del sistema. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> está aislada en sandbox y se distribuye por la Mac App Store: sin controladores, sin DMG, sin configurar dispositivos agregados. Para el control de niveles por app en concreto, ese es un camino mucho más simple que rearquitecturar tu enrutamiento de audio.</p>

<p>¿Listo para mantener tu nivel de monitorización estable mientras todo lo demás se queda en su sitio? <a href="https://apps.apple.com/app/id6772792641">Consigue SoundDial en la Mac App Store</a> por 14,99 € pago único y dale a tu DAW su propio volumen.</p>`,
  },
  "audio-hijack-alternative-simple-volume-mac": {
    slug: "audio-hijack-alternative-simple-volume-mac",
    title: "Una alternativa más simple a Audio Hijack para volumen por app en Mac",
    description: "Si solo quieres volumen independiente por app en macOS, Audio Hijack es excesivo. Aquí tienes una alternativa de barra de menús más ligera y barata que hace volumen por app, silenciar y refuerzo sin enrutamiento de audio.",
    date: "2026-07-23",
    readTime: "5 min de lectura",
    content: `<p>Si lo único que quieres es volumen independiente por app en macOS, Audio Hijack es más herramienta de la que necesitas. Es una suite profesional de enrutamiento y grabación de audio (unos 79 $) creada para captura, efectos y grafos de sesión. Para simplemente bajar una app y subir otra, un mezclador de barra de menús ligero como <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> es más rápido, más barato y siempre está listo.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Una alternativa más simple a Audio Hijack para volumen por app en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Por qué la gente recurre a Audio Hijack en primer lugar</h2>

<p>macOS no tiene un mezclador de volumen por app integrado. Windows lo tiene desde hace años en su Mezclador de volumen, pero en un Mac las teclas de volumen y el control de la barra de menús solo mueven una cosa: el maestro del sistema. No hay una forma de primera parte de decir «mantén Spotify al 40 % pero deja mi videollamada al 100 %».</p>

<p>Así que la gente busca un apaño y acaba en Audio Hijack. <em>Puede</em> hacer volumen por app, porque puede interceptar y procesar el audio de cualquier aplicación individual. Pero esa capacidad es un efecto secundario de aquello para lo que está realmente diseñado: grabar audio de apps y hardware, encadenar efectos, enrutar entre dispositivos virtuales y construir cadenas de sesión reutilizables. Es genuinamente excelente en eso. Solo que es una respuesta pesada para una pregunta ligera.</p>

<h2>Dónde Audio Hijack se vuelve excesivo</h2>

<p>Unas cuantas cosas suelen frustrar a quienes solo querían un control de volumen:</p>

<ul>
<li><strong>Precio.</strong> Audio Hijack ronda los 79 $. Es justo para un estudio de grabación en una app; es mucho para bajar una pestaña del navegador.</li>
<li><strong>Tiene que seguir en ejecución.</strong> Su procesamiento por app solo funciona mientras la app esté abierta y la sesión relevante esté activa. Ciérrala y tus volúmenes revierten. Estás manteniendo una estación de trabajo de audio completa residente solo para sujetar un control en su sitio.</li>
<li><strong>Pensamiento basado en sesiones.</strong> Construyes sesiones con bloques y conexiones. Potente para captura, pero es mucha carga conceptual cuando tu objetivo es «esta app más floja, esa app más fuerte».</li>
<li><strong>La interfaz es profunda.</strong> Efectos, enrutamiento, medidores, cableado de bloques: una superficie rica que en su mayoría ignorarás si nunca grabas nada.</li>
</ul>

<blockquote>Regla general: si quieres <em>grabar o enrutar</em> audio, Audio Hijack se gana su precio. Si solo quieres <em>equilibrar</em> el audio entre apps, estás pagando por un taller cuando necesitabas una perilla.</blockquote>

<h2>La alternativa más simple: un mezclador de volumen de barra de menús</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> toma el único trabajo por el que la mayoría de la gente vino realmente y hace solo eso. Vive en tu barra de menús. Haz clic en el icono y obtienes una lista en vivo de cada app que reproduce audio en ese momento, cada una con su propio control deslizante. Arrastra Spotify al 30 %, deja tu llamada al 100 %, silencia Slack por completo: listo, sin sesión que construir.</p>

<p>Lo que cubre:</p>

<ul>
<li><strong>Volumen independiente por app</strong> — cada fuente de audio tiene su propio control deslizante, ajustable en tiempo real.</li>
<li><strong>Silenciar por app</strong> — calla una app ruidosa con un clic sin tocar nada más.</li>
<li><strong>Refuerzo de volumen por app</strong> — empuja una app floja <em>por encima</em> del 100 % cuando su propio máximo sigue siendo demasiado bajo. Esta es la pieza que el control del sistema nunca puede hacer.</li>
<li><strong>Perfiles de volumen</strong> — guarda una mezcla completa (música baja, llamadas fuertes, notificaciones silenciadas) y recupérala con un clic para un contexto dado.</li>
<li><strong>Ducking automático</strong> — baja automáticamente el audio de fondo cuando algo más importante comienza, para que una llamada o un vídeo no queden sepultados bajo tu lista de reproducción.</li>
<li><strong>Cambio rápido de salida</strong> — salta entre auriculares, altavoces y otras salidas desde el mismo menú.</li>
</ul>

<h2>En la práctica: control por app en menos de un minuto</h2>

<p>La diferencia de configuración es todo el asunto. Con una herramienta de enrutamiento tendrías que crear una sesión, añadir un bloque de fuente, cablearlo y mantener la app en ejecución. Aquí es esencialmente:</p>

<ul>
<li>Instala <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> desde la Mac App Store.</li>
<li>Reproduce audio en un par de apps para que aparezcan en la lista.</li>
<li>Haz clic en el icono de la barra de menús y arrastra el control de cada app a tu gusto.</li>
<li>Opcionalmente guarda esa mezcla como un perfil, o refuerza una app demasiado floja por encima del 100 %.</li>
</ul>

<p>Como se distribuye a través de la Mac App Store, está aislada en sandbox y se instala como cualquier app normal: sin <code>.dmg</code> que arrastrar, sin extensión de kernel, sin controlador de audio que aprobar en los ajustes de Seguridad, y nada que necesite volver a aprobarse tras una actualización de macOS. Ese último punto importa: los mezcladores basados en controladores históricamente se rompen en las actualizaciones de sistema operativo y requieren reinstalar un componente a nivel de sistema. Una app de App Store aislada en sandbox evita toda esa categoría de mantenimiento.</p>

<h2>¿Cuál deberías elegir?</h2>

<p>Sé honesto sobre el trabajo. Elige <strong>Audio Hijack</strong> si necesitas grabar audio de apps o hardware, aplicar efectos en tiempo real o construir grafos de enrutamiento entre dispositivos virtuales. Ese es su terreno y vale cada dólar ahí.</p>

<p>Elige un mezclador de barra de menús dedicado si tu necesidad real es «déjame ajustar el volumen de cada app de forma independiente». Gastarás 14,99 € una vez en lugar de unos 79 $, te saltarás la construcción de sesiones y obtendrás refuerzo, silenciar, perfiles y ducking en un panel que abres desde la barra de menús. Sin funciones de grabación que nunca tocarás, sin una estación de trabajo corriendo en segundo plano para sujetar un control en su sitio.</p>

<p>La mayoría de quienes probaron Audio Hijack para equilibrar el volumen estaban resolviendo un problema pequeño con una herramienta grande. Si ese eres tú, la herramienta pequeña encaja mejor, y cuesta una fracción.</p>

<p><a href="https://apps.apple.com/app/id6772792641">Consigue SoundDial en la Mac App Store</a> por 14,99 €, pago único: volumen por app, refuerzo, silenciar, perfiles y ducking automático, directamente desde tu barra de menús.</p>`,
  },
  "boom-3d-alternative-per-app-volume-mac": {
    slug: "boom-3d-alternative-per-app-volume-mac",
    title: "Alternativa a Boom 3D: volumen por app sin el exceso (Mac)",
    description: "Si usabas Boom 3D sobre todo para reforzar el audio pero lo que de verdad querías era control de volumen por app, SoundDial es la alternativa más esbelta para Mac: volumen independiente por app, silenciar y reforzar por app, precio único, sin EQ de todo el sistema ni controladores.",
    date: "2026-07-23",
    readTime: "5 min de lectura",
    content: `<p>Si recurriste a Boom 3D para reforzar el volumen pero en realidad querías controlar cada app por separado, quieres una herramienta distinta. Boom 3D es un refuerzo de volumen y EQ de todo el sistema. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> es un mezclador de volumen por app enfocado: volumen independiente, silenciar y refuerzo para cada app, 14,99 € pago único, sin EQ, sin controladores.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Alternativa a Boom 3D: volumen por app sin el exceso (Mac)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Qué hace Boom 3D realmente (y qué no)</h2>
<p>Boom 3D está construido en torno a tres cosas: un refuerzo de volumen de todo el sistema, un ecualizador de 31 bandas y efectos de «surround» 3D. Los aplica a <em>todo</em> lo que tu Mac reproduce a la vez. Eso es genuinamente útil si tu objetivo es un portátil más fuerte o una curva de graves que te guste de forma general.</p>
<p>Para lo que Boom 3D no está construido es para tratar las apps como canales independientes. No hay forma limpia de decir «Spotify al 40 %, mi videollamada al 100 % y esta pestaña del navegador silenciada». Su control mueve toda la mezcla. Y como instala un controlador de audio para situarse en la ruta de la señal, toca tu sistema a un nivel más bajo de lo que lo hace una utilidad aislada en sandbox. También está posicionado como un producto de pago con ciclos de actualización en lugar de una pequeña herramienta de pago único.</p>
<blockquote><p>La historia común: la gente instala Boom 3D para hacer más fuerte una app floja y luego se da cuenta de que el verdadero problema era que macOS no tiene ningún mezclador de volumen por app.</p></blockquote>

<h2>El hueco: macOS no tiene mezclador de volumen</h2>
<p>Esto sorprende a quienes vienen de Windows. Windows tiene un Mezclador de volumen por app desde hace años: clic derecho en el altavoz, ajusta el nivel de cada app individualmente. macOS simplemente no lo incluye. Tienes un volumen maestro y el control interno que cada app decida exponer. No hay forma a nivel de sistema operativo de equilibrar Slack frente a una pestaña de YouTube frente a un juego.</p>
<p>Así que cuando una app de música ahoga tu llamada, tus únicas opciones nativas son toscas: bajar el maestro (lo que baja todo) o hurgar en los ajustes de cada app esperando que tenga control de volumen. Boom 3D tampoco cierra ese hueco: hace toda la mezcla más fuerte, no cada app.</p>

<h2>Dónde encaja SoundDial</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> es el mezclador que falta. Vive en tu barra de menús y le da a cada app en ejecución su propia fila con su propio control deslizante. Esa es la diferencia clave con Boom 3D: en vez de un efecto global, obtienes control por fuente.</p>
<ul>
<li><strong>Volumen independiente por app</strong> — pon Spotify al 30 % mientras tu videollamada se queda al 100 %.</li>
<li><strong>Silenciar por app</strong> — calla una app ruidosa al instante sin tocar nada más.</li>
<li><strong>Refuerzo por app</strong> — si te gustaba el truco de más-del-100 % de Boom 3D, SoundDial lo mantiene, pero dirigido a una sola app en lugar de a todo el sistema. Las apps flojas se empujan por encima de su tope normal por su cuenta.</li>
<li><strong>Perfiles de volumen</strong> — guarda una disposición del mezclador (p. ej. «juegos», «reunión», «música») y recupérala con un clic en vez de reequilibrar controles cada vez.</li>
<li><strong>Ducking automático</strong> — baja automáticamente el audio de fondo cuando algo importante comienza, para que una llamada o un aviso de juego no queden sepultados bajo la música.</li>
<li><strong>Cambio rápido de salida</strong> — salta entre auriculares, altavoces y otras salidas desde el mismo menú.</li>
</ul>
<p>Lo que SoundDial deliberadamente no hace es el resto de la maraña de funciones de Boom 3D. No hay EQ de 31 bandas, ni procesamiento de falso surround, ni cadena de efectos de todo el sistema. Si quieres un EQ de grado de masterización, Boom 3D o una suite de audio dedicada son la elección correcta. Si por lo que en realidad seguías abriendo Boom 3D era el <em>volumen</em>, esa superficie es exceso que pagas por cargar.</p>

<h2>Refuerzo, sin el controlador</h2>
<p>La cuestión del «refuerzo» merece una respuesta directa, porque suele ser el motivo por el que los usuarios de Boom 3D buscan alternativas. El refuerzo de Boom 3D es global y basado en controlador. El refuerzo de SoundDial es por app y funciona dentro del modelo de sandbox de apps de Apple: se distribuye a través de la Mac App Store, así que no hay instalador aparte, ni controlador a nivel de kernel, ni componentes del sistema sobrantes que desinstalar después. Obtienes el resultado de «hacer más fuerte esta app floja» sin ceder a un controlador el control de toda tu ruta de audio.</p>

<h2>Precio: pago único frente a continuo</h2>
<p>Boom 3D es una app de pago con su propio modelo de actualización y licencia, y el precio varía según la plataforma y la versión. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> es una única compra de pago único a 14,99 €: cómprala una vez, consérvala, sin suscripción ni recompra por versión para mantener el mezclador funcionando. Para una utilidad que dejarás corriendo en la barra de menús todos los días, un precio plano tiende a envejecer mejor que un producto que tienes que seguir recomprando.</p>

<h2>¿Cuál deberías elegir?</h2>
<ul>
<li><strong>Elige Boom 3D</strong> si tu necesidad real es un ecualizador serio y efectos de audio de todo el sistema, y no te importa un controlador de audio en la mezcla.</li>
<li><strong>Elige SoundDial</strong> si quieres lo que los usuarios de Windows dan por sentado —un verdadero mezclador de volumen por app— además de refuerzo dirigido, perfiles y ducking automático, a un precio de pago único y sin controladores que instalar.</li>
</ul>
<p>La mayoría de quienes rebotan de Boom 3D caen en el segundo grupo. No querían ajustar frecuencias; querían el navegador más flojo que la llamada. Ese es justo el trabajo para el que está construido SoundDial.</p>

<p><strong>¿Quieres control de volumen por app en tu Mac sin el exceso de EQ ni una suscripción?</strong> <a href="https://apps.apple.com/app/id6772792641">Consigue SoundDial en la Mac App Store</a>: 14,99 € una vez, aislada en sandbox, sin controladores, y cada app tiene su propio control.</p>`,
  },
  "mute-everything-except-one-app-mac": {
    slug: "mute-everything-except-one-app-mac",
    title: "Cómo silenciar todo excepto una app en tu Mac",
    description: "macOS no tiene un mezclador de volumen por app, así que silenciar todas las apps menos una requiere un ayudante. Aquí tienes cómo oír solo tu llamada, tu stream o tu juego mientras todo lo demás se queda en silencio.",
    date: "2026-07-23",
    readTime: "5 min de lectura",
    content: `<p>macOS no tiene una forma integrada de silenciar apps individuales, así que para oír solo una app necesitas un mezclador de volumen por app. Instala <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, abre su mezclador de barra de menús, silencia todas las apps menos la que quieres oír, y esa app sigue sonando mientras el resto queda en silencio al instante.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Cómo silenciar todo excepto una app en tu Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Por qué macOS no puede hacer esto por su cuenta</h2>
<p>Windows tiene el Mezclador de volumen desde hace más de una década: clic derecho en el icono del altavoz y cada app en ejecución tiene su propio control deslizante. macOS nunca lo ha incluido. Las teclas de volumen de tu Mac controlan una sola cosa: el nivel de salida maestro. Cuando bajas el sistema, todo baja junto. Cuando silencias, todo se silencia.</p>
<p>Eso está bien hasta que tienes cinco cosas haciendo ruido a la vez. Estás en una videollamada, pero una pestaña del navegador reproduce un anuncio automáticamente, Spotify sigue en marcha, un juego suena en segundo plano y Slack pita. Tus únicas opciones nativas son cerrar apps, silenciarlas una a una dentro de los ajustes de cada app (si es que tiene esa opción) o arrancarte los auriculares. Nada de eso te permite decir «conserva esta, calla el resto».</p>

<h2>La forma directa: silencia el resto con un mezclador</h2>
<p>Un mezclador por app se sitúa entre tus apps y tu dispositivo de salida y le da a cada app su propio control de volumen y silencio. Una vez que tienes uno en marcha, aislar una sola app lleva segundos:</p>
<ul>
<li>Abre el mezclador desde tu barra de menús. Verás una lista en vivo de cada app que está produciendo audio.</li>
<li>Encuentra la única app que quieres oír: tu llamada, tu stream, tu juego.</li>
<li>Silencia todo lo demás. Toca el interruptor de silencio junto a cada otra app, o lleva su control deslizante a cero.</li>
<li>Ya está. La única app que dejaste en paz sigue sonando a todo volumen mientras el resto permanece en silencio.</li>
</ul>
<p>Con <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, cada app de la lista tiene su propio control deslizante y su propio botón de silencio, así que esto son un puñado de clics. Las apps nuevas que empiezan a sonar más tarde aparecen automáticamente, así que si un sonido de notificación intenta colarse, puedes silenciarlo en el acto sin tocar tu app enfocada.</p>

<blockquote>El truco es que silenciar «todo excepto una» es simplemente el inverso de silenciar una app. No estás callando tu Mac, estás callando el ruido alrededor de aquello que de verdad te importa.</blockquote>

<h2>Guárdalo como un perfil para no rehacerlo</h2>
<p>Si esta es una configuración a la que recurres a menudo, hacerla a mano cada vez se hace pesado. Digamos que siempre quieres tu app de llamadas fuerte y todo lo demás apagado durante las reuniones, o quieres tu stream en primer plano mientras los juegos y los navegadores se quedan bajos. Un perfil de volumen almacena esos ajustes exactos por app y los reaplica con un clic.</p>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> te permite guardar perfiles como «Reunión» o «Solo stream» y luego cambiar a ellos en el instante en que los necesitas. Configúralo una vez, y aislar tu única app se convierte en una sola acción de la barra de menús en lugar de una tarea de cinco controles.</p>

<h2>La versión más inteligente: aplica ducking en lugar de silenciar del todo</h2>
<p>A veces no quieres que las demás apps desaparezcan por completo, solo quieres que se aparten cuando algo más importante comienza. Eso es el ducking automático. Cuando tu app prioritaria suena, las apps de fondo bajan automáticamente a un nivel bajo y luego suben de nuevo cuando para.</p>
<p>Esto es ideal para llamadas y streams. Cuando alguien empieza a hablar, tu música baja para que puedas oírlo, y cuando la llamada termina, la música sube de nuevo por su cuenta. Obtienes el resultado de «oír una app con claridad» sin silenciar y quitar el silencio manualmente cada vez que la situación cambia. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> incluye ducking automático junto al mezclador manual, así que puedes elegir el silencio total para el silencio absoluto o el ducking para un fondo más suave.</p>

<h2>Reforzar la única app que conservaste</h2>
<p>Hay un extra en aislar una sola app: también puedes hacerla más fuerte de lo que tu Mac normalmente permite. Algunas apps, especialmente videollamadas flojas o streams mal masterizados, apenas se oyen incluso al volumen máximo. Un refuerzo por app empuja una app individual por encima del 100 % sin subir la salida de tu sistema, que solo amplificaría las apps que ya silenciaste.</p>
<p>Así que el movimiento completo es: silencia el ruido, conserva tu única app y, si esa app es demasiado floja, refuérzala. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> gestiona las tres en la misma ventana del mezclador.</p>

<h2>A lo que no te estás apuntando</h2>
<p>Una preocupación común con las herramientas de audio de Mac es que requieran extensiones de kernel, controladores de audio virtuales o instaladores dudosos descargados de una web al azar. Es una preocupación legítima, y es por lo que algunas personas evitan estas apps por completo.</p>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> está en la Mac App Store, aislada en sandbox y se instala como cualquier app normal: sin controladores, sin DMG, sin extensiones del sistema que aprobar. Es una compra de 14,99 € pago único en lugar de una suscripción, así que pagas una vez y la conservas. Eso importa para algo que dejarás corriendo en tu barra de menús todo el día.</p>

<h2>Repaso rápido</h2>
<ul>
<li>macOS no tiene control de volumen por app nativo, así que necesitas un mezclador para hacer esto.</li>
<li>Abre el mezclador, conserva tu única app, silencia o pon a cero todo lo demás.</li>
<li>Guárdalo como un perfil para las llamadas o streams que haces a menudo.</li>
<li>Usa el ducking automático si quieres bajar las apps de fondo en lugar de matarlas.</li>
<li>Refuerza tu app conservada si es demasiado floja por su cuenta.</li>
</ul>

<p>¿Quieres oír solo lo que importa y silenciar el resto? <a href="https://apps.apple.com/app/id6772792641">Consigue SoundDial en la Mac App Store</a> y configura tu primer perfil de silenciar-todo-lo-demás en menos de un minuto.</p>`,
  },
  "different-volume-per-output-device-mac": {
    slug: "different-volume-per-output-device-mac",
    title: "Mantén un volumen distinto para altavoces y auriculares en Mac",
    description: "macOS olvida tu mezcla de volumen a nivel de app cuando cambias entre altavoces y auriculares. Aquí tienes por qué ocurre, los límites manuales y cómo la memoria de volumen por app lo soluciona.",
    date: "2026-07-23",
    readTime: "5 min de lectura",
    content: `<p>macOS en realidad recuerda un volumen de sistema distinto para cada dispositivo de salida, pero olvida tu equilibrio a nivel de app cada vez que cambias. Así que los auriculares y los altavoces conservan cada uno su propio nivel general, pero en el momento en que desconectas, una app suena a todo volumen y otra desaparece. La solución es una memoria de volumen por app que sobreviva a los cambios de dispositivo, algo para lo que macOS no tiene herramienta nativa.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mantén un volumen distinto para altavoces y auriculares en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Qué recuerda macOS y qué no</h2>

<p>Hay una creencia común de que macOS trata cada dispositivo de salida de forma idéntica. No es así. Cada dispositivo de salida almacena su propio volumen de sistema. Pon los altavoces de tu MacBook al 30 % y tus AirPods al 80 %, y macOS mantiene esos dos números separados. Conecta, desconecta, reconecta, y cada dispositivo vuelve a donde lo dejaste.</p>

<p>Entonces, ¿por qué la experiencia sigue sintiéndose rota? Porque esa memoria se detiene en el único control global. macOS tiene exactamente un control de volumen para todo lo que suena en un dispositivo dado. No recuerda lo alto que estaban las apps individuales. Cuando cambias de altavoces a auriculares, el equilibrio entre Spotify, una llamada de Zoom y una pestaña de YouTube no se conserva, porque ese equilibrio nunca existió. Todas las apps comparten el mismo control.</p>

<p>El resultado es la frustración que la gente describe como «volumen distinto para altavoces y auriculares». Lo que normalmente quieren no es solo un nivel maestro distinto por dispositivo, sino una mezcla recordada: música baja, llamadas fuertes, notificaciones bajadas, y esa mezcla intacta tanto si están en los altavoces del escritorio como en los auriculares.</p>

<h2>Los apaños manuales y dónde se quedan cortos</h2>

<p>Puedes llegar a medio camino con las herramientas integradas, y vale la pena conocer el techo antes de recurrir a otra cosa.</p>

<ul>
<li><strong>Ajusta el volumen de sistema de cada dispositivo una vez.</strong> Reproduce audio por tus altavoces, ajusta el nivel, luego cambia la salida a los auriculares y ajusta ese nivel. macOS retiene ambos. Esto gestiona el volumen maestro por dispositivo pero nada por app.</li>
<li><strong>Usa el volumen por app donde la app lo ofrezca.</strong> Spotify, VLC y la mayoría de los navegadores tienen su propio volumen interno. Puedes recortar una app ruidosa dentro de la propia app. El problema: este ajuste vive en la app, no en el dispositivo, así que no cambia cuando pasas a los auriculares, y la mayoría de las apps (Slack, Zoom, notificaciones del sistema, Mail) no tienen ese control en absoluto.</li>
<li><strong>Cambia la salida desde el Centro de Control o la barra de menús.</strong> Haz clic con Opción en el icono de volumen de la barra de menús para saltar entre dispositivos rápidamente. Rápido, pero solo mueve el nivel maestro de un lado a otro, no restaura una mezcla por app.</li>
</ul>

<p>Estos te dan un volumen maestro por dispositivo. Lo que ninguno de ellos te da es un equilibrio recordado, por app, que te siga entre dispositivos. Ese hueco es justo donde vive la molestia, y es estructural: el sistema operativo simplemente no tiene mezclador por app, a diferencia de Windows, que ha incluido uno durante años.</p>

<h2>Memoria de volumen por app, y por qué el cambio de dispositivo es el verdadero problema</h2>

<p>La solución más profunda es darle a cada app su propio volumen y hacer que esos ajustes persistan. Para eso está construido un mezclador por app como <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>. Se sitúa en tu barra de menús, lista cada app que está produciendo sonido y le da a cada una un control deslizante independiente, un interruptor de silencio e incluso un refuerzo por encima del 100 % para las apps flojas.</p>

<p>La parte que importa para el problema de altavoces-frente-a-auriculares: esos niveles se recuerdan. Pon tu música al 40 %, tus llamadas al 90 % y una app parlanchina en silencio, y <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> mantiene esa mezcla. Cuando desconectas tus auriculares y vuelves a los altavoces, no estás reequilibrando tres apps a mano cada vez.</p>

<p>Los perfiles de volumen llevan esto más lejos. Puedes guardar un conjunto de niveles por app con nombre y recuperarlo con un clic, de modo que una mezcla «auriculares, trabajo concentrado» y una mezcla «altavoces, reuniones» son cada una una sola selección en lugar de un reinicio manual.</p>

<blockquote><p>El cambio de mentalidad: deja de pensar en un único control maestro que arrastras sin parar, y empieza a pensar en una mezcla guardada por situación. El cambio de dispositivo deja de ser una tarea de reequilibrio.</p></blockquote>

<h2>Cambio rápido de salida sin perder tu mezcla</h2>

<p>Cambiar de dispositivo debería ser rápido y no destructivo. Desde el mismo panel de la barra de menús puedes cambiar tu dispositivo de salida, así que pasar de altavoces a auriculares es un clic, y tus niveles por app te acompañan en lugar de colapsar de vuelta a un único número global.</p>

<p>Una función relacionada que vale la pena mencionar es el ducking automático: cuando entra audio por tu micrófono (empiezas a hablar, o comienza una llamada), las demás apps bajan automáticamente para que se te oiga, y luego vuelven a su nivel ajustado después. Es el mismo principio aplicado a la atención en lugar de a los dispositivos, otra cosa que macOS no hará por su cuenta.</p>

<h2>Cómo configurarlo</h2>

<ul>
<li>Instala <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> desde la Mac App Store. Está aislada en sandbox, así que no hay controlador, ni DMG, ni extensión de kernel que aprobar.</li>
<li>Reproduce audio en las apps que más usas para que aparezcan en el mezclador.</li>
<li>Ajusta el nivel de cada app, silencia lo que no quieras y refuerza lo que sea demasiado flojo.</li>
<li>Guarda esa disposición como un perfil, por ejemplo uno afinado para auriculares y uno para altavoces.</li>
<li>Cuando cambies de dispositivo, recupera el perfil correspondiente, o simplemente deja que tus niveles por app guardados se trasladen.</li>
</ul>

<p>El resumen honesto: macOS sí recuerda el volumen por dispositivo de salida a nivel maestro, pero nunca recordará tu mezcla por app, porque no tiene mezclador por app. Si tu verdadero objetivo es un equilibrio constante entre música, llamadas y notificaciones que sobreviva a cada cambio entre altavoces y auriculares, necesitas memoria por app por encima del sistema operativo.</p>

<p>¿Quieres que los altavoces y los auriculares conserven cada uno su propia mezcla sin reajustar cada app? <a href="https://apps.apple.com/app/id6772792641">Consigue SoundDial en la Mac App Store</a> por 14,99 € pago único, sin suscripción, sin controladores.</p>`,
  },
  "sound-control-alternative-mac": {
    slug: "sound-control-alternative-mac",
    title: "Sound Control ¿Descontinuado? El mejor reemplazo de volumen por aplicación Mac (2026)",
    description: "Sound Control de Static Z Software está descontinuado y se interrumpe en el moderno macOS. A continuación le explicamos por qué dejó de funcionar, qué hizo y cuál es el mejor mezclador de volumen por aplicación al que cambiar en 2026.",
    date: "2026-07-23",
    readTime: "5 min de lectura",
    content: `<p>Sound Control de Static Z Software está descontinuado y ya no se vende ni se actualiza, y falla cada vez más en el macOS moderno porque dependía de un controlador de audio a nivel de kernel que Apple ha bloqueado. Si necesita volumen por aplicación hoy, el reemplazo más limpio es <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, un mezclador Mac App Store en espacio aislado sin controladores.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Sound Control ¿Descontinuado? El mejor reemplazo de volumen por aplicación Mac (2026)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Lo que realmente hizo Sound Control</h2>
<p>Sound Control fue, durante años, la respuesta a una brecha genuina de macOS: todavía no hay un mezclador de volumen por aplicación integrado en el Mac. Windows ha tenido uno en su mezclador de volumen desde Vista, pero macOS solo le ofrece un control deslizante maestro. Sound Control llenó ese vacío con un ordenado panel de barra de menú que le permite:</p>
<ul>
<li>Establezca un nivel de volumen independiente para cada aplicación en ejecución.</li>
<li>Silencia aplicaciones individuales sin tocar el resto del audio de tu sistema.</li>
<li>Impulsa las aplicaciones silenciosas por encima del 100 por ciento.</li>
<li>Aplique ajustes de equilibrio y ecualizador por aplicación.</li>
<li>Enrute audio y fije aplicaciones a dispositivos de salida específicos.</li>
</ul>
<p>Para cualquiera que alguna vez haya recibido una llamada Zoom a todo volumen mientras una pestaña YouTube en segundo plano susurra, ese control por aplicación fue transformador. Se convirtió en un elemento básico silencioso en muchas máquinas de usuarios avanzados de Mac.</p>

<h2>Por qué dejó de funcionar</h2>
<p>La historia técnica honesta importa aquí, porque explica por qué este no es un error que alguien pueda simplemente corregir. Sound Control funcionó instalando un controlador de audio del sistema: una extensión del kernel (kext) que se insertaba en el canal de audio macOS para poder interceptar y remodelar la salida de cada aplicación. Ese gancho profundo es exactamente lo que hizo posibles las funciones de ecualización y refuerzo.</p>
<p>A partir de macOS 10.15 Catalina y acelerando a través de Big Sur y la transición de Apple Silicon, Apple comenzó a desaprobar las extensiones del kernel en favor de alternativas de espacio de usuario. En los Mac de Apple Silicon, cargar kext de terceros requiere reducir la seguridad del sistema en el modo de recuperación, y Apple ha dejado en claro que los kext de audio heredados están en tiempo prestado. Static Z Software finalmente dejó de vender y desarrollar Sound Control. El resultado: en versiones recientes de macOS, las instalaciones fallan, el audio falla o el controlador simplemente se niega a cargarse sin degradaciones de seguridad que la mayoría de la gente, con razón, no quiere hacer.</p>
<blockquote>Esto no es un descuido por parte del desarrollador. Es un cambio a nivel de plataforma. Apple cerró la puerta al tipo de controlador de audio de bajo nivel con el que se creó Sound Control, y ninguna actualización puede reabrirlo por completo.</blockquote>

<h2>¿Qué cambió en el macOS moderno?</h2>
<p>Apple agregó una cosa relevante: Core Audio ahora ofrece una API Tap (introducida en macOS 14.2 Sonoma) que permite a las aplicaciones capturar y procesar audio por proceso desde el espacio del usuario: sin kext, sin degradación de seguridad, sin reinicio en Recovery. Este es el camino moderno aprobado para el audio por aplicación, y es sobre lo que se debe construir un mezclador actual. La compensación es honesta: los grifos del espacio de usuario están más restringidos que un controlador de kernel antiguo, por lo que debe esperar un volumen, silencio y aumento limpios por aplicación en lugar del EQ Sound Control paramétrico completo por aplicación que se ofrece.</p>

<h2>El mejor reemplazo: SoundDial</h2>
<p>Si desea el núcleo de lo que hizo Sound Control (volumen independiente por aplicación) en un Mac, puede mantenerlo seguro y actualizado. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> es la opción de migración limpia más cercana en 2026. Es un mezclador de volumen por aplicación de barra de menú creado para la pila de audio macOS moderna. Qué se transfiere del flujo de trabajo Sound Control:</p>
<ul>
<li><strong>Volumen independiente por aplicación</strong> — un control deslizante por aplicación en ejecución, directamente en la barra de menú.</li>
<li><strong>Silencio por aplicación</strong> — silencia una aplicación mientras todo lo demás sigue reproduciéndose.</li>
<li><strong>Aumento de volumen por aplicación</strong> – empuja una aplicación silenciosa por encima de su límite normal.</li>
<li><strong>Perfiles de volumen</strong> — guarde configuraciones del mezclador para diferentes contextos (llamadas, música, juegos) y cambie entre ellas.</li>
<li><strong>Auto-agacharse</strong> — reduce automáticamente el volumen de la aplicación en segundo plano, útil cuando empiezas a hablar o entra una llamada.</li>
<li><strong>Conmutación rápida de salida</strong> — salta entre parlantes, auriculares y otros dispositivos sin tener que acceder a la Configuración del sistema.</li>
</ul>
<p>Las diferencias prácticas que importan para una migración: <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> se envía a través del Mac App Store, está protegido y no instala controladores ni DMG. Eso significa que no hay que aprobar una extensión del kernel, no hay modo de recuperación y no hay que reducir la postura de seguridad de su Mac: los puntos débiles exactos que acabaron con el Sound Control. Es una compra única de 14,99€, no una suscripción.</p>

<h2>Cómo cambiar, paso a paso</h2>
<ul>
<li><strong>Desinstale Sound Control limpiamente.</strong> Debido a que instaló un controlador, use su propio desinstalador si aún se ejecuta o elimine los componentes del controlador de audio antes de instalar algo nuevo. Dos ganchos de audio en competencia pueden causar fallas.</li>
<li><strong>Instale SoundDial desde App Store.</strong> No es necesario reiniciar ni realizar cambios de seguridad.</li>
<li><strong>Conceda el permiso de audio que solicita.</strong> Esto es lo que le permite leer y controlar la salida por aplicación en el macOS moderno.</li>
<li><strong>Abra el panel de la barra de menú y establezca los niveles.</strong> Las aplicaciones en ejecución aparecen con controles deslizantes individuales; ajustar, silenciar o aumentar según sea necesario.</li>
<li><strong>Guardar un perfil.</strong> Si tenía configuraciones Sound Control favoritas, vuelva a crearlas como perfiles para poder cambiarlas con un solo clic.</li>
</ul>

<h2>Expectativas honestas</h2>
<p>Si su única razón para usar Sound Control fue el volumen, el silencio y el aumento por aplicación, un moderno mezclador de espacio aislado lo cubre completamente. Si se apoyó mucho en su ecualizador por aplicación, tenga en cuenta que el ecualizador profundo estaba vinculado al modelo de controlador anterior y es la característica más difícil de reproducir limpiamente según las reglas actuales de Apple. Establezca expectativas en consecuencia y no se sorprenderá.</p>

<p>¿Listo para recuperar el volumen por aplicación sin los dolores de cabeza del controlador? <a href="https://apps.apple.com/app/id6772792641">Obtenga SoundDial en el Mac App Store</a> — 14,99 € por única vez, en zona protegida, sin suscripción, sin controladores.</p>`,
  },
  "soundbunny-alternative-mac": {
    slug: "soundbunny-alternative-mac",
    title: "SoundBunny ya no existe: la moderna aplicación de volumen por aplicación Mac para reemplazarla",
    description: "SoundBunny de Prosoft está descontinuado. Aquí está el mezclador de volumen por aplicación macOS actual y mantenido activamente para reemplazarlo, además de cómo migrar su configuración de audio por aplicación sin controladores del kernel.",
    date: "2026-07-23",
    readTime: "5 min de lectura",
    content: `<p>Si SoundBunny dejó de funcionar o ya no se vende, el reemplazo moderno es <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, un mezclador de volumen por aplicación de barra de menú creado para el macOS actual. Le ofrece el mismo trabajo principal (volumen independiente, silencio y refuerzo por aplicación) que una compra única de Mac App Store por 14,99 €, sin controlador de kernel, DMG ni suscripción que administrar.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial: SoundBunny ya no existe: la moderna aplicación de volumen por aplicación Mac para reemplazarla" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>¿Qué pasó con SoundBunny?</h2>
<p>SoundBunny fue la utilidad de volumen por aplicación de Prosoft Engineering para macOS. Le permite establecer un nivel de volumen diferente para cada aplicación en ejecución directamente desde la barra de menú: música baja, una llamada alta, un navegador en algún punto intermedio. Durante años fue una de las pocas herramientas que llenó un vacío que Apple nunca cerró.</p>
<p>El problema es que SoundBunny es un software heredado. No ha seguido el ritmo de los cambios profundos que Apple realizó en el audio y la seguridad del macOS: Apple Silicon, el tiempo de ejecución reforzado, reglas más estrictas de extensión del sistema y la eliminación de ganchos de audio más antiguos. Cuando una utilidad como esta deja de recibir actualizaciones, eventualmente falla: no se inicia, pierde el control de los flujos de aplicaciones después de una actualización del sistema operativo o simplemente no se puede instalar limpiamente en un Mac moderno. Si ahí es donde estás, no estás haciendo nada malo. La aplicación está detrás, no tú.</p>

<h2>Por qué macOS todavía necesita un mezclador de terceros</h2>
<p>Aquí está la parte honesta: esta es una brecha genuina en macOS, no un error que puedas corregir en Configuración. Windows ha comercializado un mezclador de volumen por aplicación durante más de una década. macOS nunca ha tenido uno. El control deslizante de volumen del sistema y la configuración de sonido controlan su <em>dispositivo de salida</em> en su conjunto: todas las aplicaciones tienen el mismo nivel maestro. No hay una forma integrada de decir "mantener Safari al 40% pero Zoom al 100%".</p>
<p>Por eso existieron herramientas como SoundBunny y por eso todavía es necesario reemplazarlas hoy en día. La necesidad no desapareció cuando lo hizo la aplicación; Apple simplemente aún no la ha abordado.</p>

<h2>El reemplazo moderno: SoundDial</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> es un mezclador de volumen por aplicación que se encuentra en su barra de menú y hace las cosas en las que confiaban los usuarios de SoundBunny, construido con el macOS de hoy en lugar del de ayer. La superposición de funciones cubre lo esencial:</p>
<ul>
<li><strong>Volumen independiente por aplicación</strong> – un control deslizante por aplicación en ejecución, exactamente el modelo mental SoundBunny.</li>
<li><strong>Silencio por aplicación</strong> — silencia una sola aplicación ruidosa sin tocar todo lo demás.</li>
<li><strong>Aumento de volumen por aplicación</strong> — empuja una aplicación silenciosa <em>arriba</em> 100% cuando un vídeo o una llamada se graban a un nivel demasiado bajo. SoundBunny no pudo amplificar de manera confiable el máximo del sistema anterior en el macOS moderno; boost es una verdadera mejora aquí.</li>
<li><strong>Perfiles de volumen</strong> — guarde un conjunto de niveles por aplicación (una combinación de "trabajo", una combinación de "juegos") y cambie entre ellos en lugar de mover los controles deslizantes uno a la vez.</li>
<li><strong>Auto-agacharse</strong> — reduce automáticamente el volumen de la aplicación en segundo plano cuando se activa otra fuente de audio (como el micrófono en una llamada).</li>
<li><strong>Conmutación rápida de salida</strong> — saltar entre altavoces, auriculares y otras salidas desde el mismo menú.</li>
</ul>

<h2>Cómo es realmente la migración</h2>
<p>No hay ningún paso de importación (los niveles de volumen por aplicación no son un archivo que se transfiere), pero el cambio es rápido:</p>
<ul>
<li><strong>Elimine SoundBunny correctamente.</strong> Salga y luego elimine la aplicación. Si instaló algún asistente o elemento de inicio de sesión, elimínelo también para que dos utilidades no peleen por las mismas transmisiones de audio.</li>
<li><strong>Instale SoundDial desde Mac App Store.</strong> Está protegido y distribuido a través de la tienda, por lo que no hay ningún DMG que montar ni ninguna advertencia de "desarrollador no identificado". Una compra, vinculada a tu ID de Apple.</li>
<li><strong>Otorgue acceso de audio en el primer lanzamiento.</strong> macOS pedirá permiso a SoundDial para ver el audio de la aplicación. Este es el camino moderno y autorizado que ofrece Apple: sin extensión del kernel, sin reinicio, sin reducción de la seguridad del sistema. Concédelo y tus aplicaciones en ejecución aparecerán como controles deslizantes.</li>
<li><strong>Reconstruye tu mezcla.</strong> Configure sus aplicaciones comunes y luego guarde esa disposición como un perfil para no tener que rehacerla nunca.</li>
</ul>

<h2>Las diferencias prácticas con SoundBunny</h2>
<p>La diferencia más importante es que <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> es el software actual. Se ejecuta de forma nativa en Apple Silicon, utiliza las API de audio compatibles de Apple y es una aplicación Mac App Store, lo que significa que las actualizaciones llegan a través de la tienda y está diseñada para sobrevivir a las actualizaciones del sistema operativo en lugar de interrumpirlas. Estar en un espacio aislado también significa que no puede salir de su carril, lo cual es tranquilizador para algo que se encuentra entre sus aplicaciones y sus parlantes.</p>
<p>Un par de advertencias honestas para que las expectativas sean correctas. Debido a que SoundDial funciona dentro del marco de audio de Apple, el control es mejor para aplicaciones estándar que se dirigen a través de la salida normal del sistema. Algunos programas reproducen audio a través de su propia ruta o de un dispositivo exclusivo, y ningún mezclador de barra de menú (incluido el SoundBunny) puede controlarlos por completo. Y el volumen por aplicación es inherentemente una capa de software además de macOS; No es un mezclador de hardware. Dentro de esos límites reales, hace el trabajo que solía hacer SoundBunny.</p>

<blockquote>Si cambió a un Mac desde Windows esperando un mezclador de volumen por aplicación, esta es la herramienta que llena ese vacío, y ahora es una que realmente se mantiene.</blockquote>

<p>SoundBunny tuvo una buena racha, pero es un legado. Si necesita volumen, silenciamiento y aumento por aplicación en un Mac moderno, <a href="https://apps.apple.com/app/id6772792641">obtenga SoundDial en el Mac App Store</a> — 14,99 € una vez, sin suscripción, sin controladores.</p>`,
  },
  "boom-2-alternative-per-app-volume-mac": {
    slug: "boom-2-alternative-per-app-volume-mac",
    title: "Alternativa Boom 2 para Mac: volumen por aplicación sin la venta adicional de Boom 3D",
    description: "Boom 2 es heredado y sigue empujándote hacia Boom 3D. Si solo desea volumen por aplicación y un impulso simple en el macOS moderno, aquí tiene una alternativa enfocada y cómo funciona.",
    date: "2026-07-23",
    readTime: "5 min de lectura",
    content: `<p>Si te gustó Boom 2 para impulsar todo el sistema pero quieres algo simple <strong>por aplicación</strong> volumen en un Mac actual, la respuesta honesta es que Boom 2 es heredado y ya no es la herramienta adecuada. Una alternativa enfocada es <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, un mezclador de barra de menú que le da a cada aplicación su propio control deslizante de volumen, silencio y aumento, por 14,99 € una vez, sin necesidad de comprar un paquete más grande.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial: alternativa Boom 2 para Mac: volumen por aplicación sin la venta adicional de Boom 3D" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Por qué Boom 2 ya no encaja</h2>
<p>Boom 2 era una aplicación muy querida por una razón específica: aumentaba el volumen general de su Mac más allá del máximo del sistema y agregaba un ecualizador. Lo hizo en todo el sistema, no por aplicación. Eso estuvo bien en 2015. En 2026 tiene dos problemas.</p>
<p>Primero, es un legado. Global Delight claramente ha trasladado su energía a Boom 3D, y si abre la página del producto Boom 2, se encontrará con la aplicación más nueva y cara casi de inmediato. Boom 2 todavía existe, pero es un trampolín que el proveedor utiliza para vender Boom 3D, no un producto que recibe amor activo.</p>
<p>En segundo lugar, y más importante: Boom 2 nunca fue un mezclador de volumen por aplicación. Levanta y da forma a una salida maestra. Si su problema real es que un ping de Slack suena más fuerte que su música, o que una pestaña del navegador ahoga una llamada, Boom 2 no resuelve eso. Juntos hacen que todo sea más ruidoso. Ese es un trabajo diferente.</p>

<h2>Qué significa realmente "volumen por aplicación" en macOS</h2>
<p>Este es el contexto honesto que la mayoría de los resúmenes alternativos omiten: macOS no tiene ningún mezclador de volumen incorporado por aplicación. Windows ha tenido uno durante años: haga clic derecho en el altavoz, abra el Mezclador de volumen y configure Chrome al 40% y Spotify al 80%. Apple nunca envió eso. La tecla de volumen macOS solo mueve un nivel maestro.</p>
<p>Entonces, cuando busca una "alternativa Boom 2", lo que a menudo realmente busca no es un Mac más ruidoso, sino el control por aplicación que los usuarios de Windows dan por sentado. Esa es una brecha genuina en el sistema operativo, no algo que Boom 2 o cualquier aplicación haya olvidado crear.</p>

<h2>Donde encaja SoundDial</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> está construido específicamente para esa brecha. Vive en la barra de menú y enumera las aplicaciones que actualmente reproducen audio, cada una con su propio control deslizante. Estableces niveles por aplicación en lugar de presionar un control maestro y esperar lo mejor.</p>
<p>Qué hace:</p>
<ul>
<li><strong>Volumen independiente por aplicación</strong> — silencia el navegador, mantén la música donde quieras, sin compromiso global.</li>
<li><strong>Silencio por aplicación</strong> — silencia una aplicación ruidosa sin tocar nada más.</li>
<li><strong>Aumento por aplicación</strong> — empuja una aplicación individual más allá de su límite normal cuando un video o una llamada se graban en un volumen demasiado bajo. Esta es la pieza que los fanáticos de Boom 2 generalmente pasan por alto, excepto que aquí está dirigida a una aplicación en lugar de a todo el sistema.</li>
<li><strong>Perfiles de volumen</strong> — guarde diseños como "enfoque", "reunión" o "juegos" y cambie con un solo clic.</li>
<li><strong>Auto-agacharse</strong> — baja automáticamente otras aplicaciones cuando empiezas a hablar, útil para llamadas y grabaciones.</li>
<li><strong>Conmutación rápida de salida</strong> — saltar entre altavoces, auriculares y otras salidas desde el mismo menú.</li>
</ul>

<h2>Cómo configurarlo</h2>
<p>El flujo de trabajo es breve:</p>
<ul>
<li>Instalar <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> desde Mac App Store: sin DMG, sin controlador, sin reinicio.</li>
<li>Haga clic en el ícono de la barra de menú para ver todas las aplicaciones que actualmente producen sonido.</li>
<li>Arrastre el control deslizante de cada aplicación al nivel que desee; silenciar o aumentar individualmente según sea necesario.</li>
<li>Guarde el arreglo como perfil si desea reutilizarlo más tarde.</li>
</ul>
<p>Debido a que se envía a través del App Store, está protegido y se instala limpiamente. Vale la pena mencionarlo, porque algunas herramientas de audio más antiguas dependían de extensiones del kernel o controladores de audio virtuales, el tipo de cosas a las que el macOS moderno se resiste cada vez más. SoundDial no le pide que instale un controlador ni reduzca ninguna configuración de seguridad.</p>

<h2>Una limitación honesta</h2>
<p>El impulso por aplicación es real pero no mágico. Si la fuente de audio de una aplicación es realmente silenciosa o está mal grabada, aumentarla eleva el nivel de ruido junto con la señal, por lo que el material muy silencioso puede sonar silbante cuando se presiona con fuerza. Ese es un límite físico de amplificación, no un defecto de ninguna aplicación en particular: el impulso del sistema de Boom 2 tuvo la misma compensación. Trate el impulso como margen de maniobra para casos prácticos, no como un rescate para audio roto.</p>

<h2>Boom 2 frente a un mezclador enfocado</h2>
<p>Si lo que le encantó de Boom 2 fue el volumen de todo el sistema más un ecualizador, y no le importa el control por aplicación, Boom 3D es el sucesor previsto por el proveedor; ese es un camino justo y no pretendemos lo contrario. Pero si probaste Boom 2 y te diste cuenta de que lo que realmente querías era bajar o subir una aplicación sin mover todo, un paquete de ecualización y refuerzo es la forma incorrecta de herramienta.</p>
<blockquote>Boom 2 hace que todo el Mac suene más fuerte. Un mezclador por aplicación te permite decidir qué aplicación suena más fuerte. Esos resuelven diferentes problemas.</blockquote>
<p>También vale la pena mencionar claramente la diferencia de precio. SoundDial cuesta 14,99 € una vez. No hay suscripción, ni prueba que pase a un plan más grande, ni ruta dentro de la aplicación que lo lleve a un nivel más caro. Compras la batidora, eres dueño de la batidora.</p>

<p>Si lo que realmente busca es el volumen por aplicación, no un ecualizador para todo el sistema, <a href="https://apps.apple.com/app/id6772792641">prueba SoundDial en el Mac App Store</a> y establece tus niveles de la manera que macOS debería haberte permitido desde el principio.</p>`,
  },
  "finetune-vs-sounddial-mac": {
    slug: "finetune-vs-sounddial-mac",
    title: "FineTune vs SoundDial: volumen por aplicación de código abierto gratuito versus volumen de pago en Mac",
    description: "FineTune es una aplicación de volumen por aplicación gratuita y de código abierto para Mac; SoundDial es una aplicación App Store paga y protegida con mejoras, perfiles y soporte. Aquí tienes una comparación honesta para ayudarte a elegir.",
    date: "2026-07-23",
    readTime: "6 min de lectura",
    content: `<p>FineTune es un mezclador de volumen por aplicación gratuito y de código abierto para macOS, por lo que si el precio es su única preocupación, es una opción genuina. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> es una aplicación Mac App Store paga (14,99 €, única) que agrega aumento de volumen por aplicación, perfiles guardados, reducción automática y soporte del proveedor. La verdadera elección es la opción gratuita y de bricolaje frente a la zona de pruebas y el soporte.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — FineTune vs SoundDial: volumen por aplicación gratuito versus volumen de pago por aplicación en Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>El problema que resuelven ambas aplicaciones</h2>

<p>macOS todavía no tiene un mezclador de volumen integrado por aplicación. Windows ha tenido uno durante años: haga clic derecho en el ícono del altavoz, abra el Mezclador de volumen y cada aplicación tendrá su propio control deslizante. En un Mac, obtienes exactamente un control deslizante de volumen del sistema para todo: tu música, una videollamada, YouTube, notificaciones y un juego, todo lo comparte. Si su llamada es demasiado baja y Spotify es demasiado alta, su única "solución" es silenciar por completo Spotify.</p>

<p>Tanto FineTune como SoundDial existen para llenar ese vacío. Le dan a cada aplicación en ejecución su propio control de volumen para que pueda, por ejemplo, mantener una reunión al 100% mientras baja la música de fondo al 20%, sin tocar el control deslizante maestro.</p>

<h2>Lo que FineTune hace bien</h2>

<p>FineTune es una aplicación más nueva, gratuita y de código abierto que sigue el espíritu de SoundSource. Seamos justos con sus puntos fuertes, porque son reales:</p>

<ul>
  <li><strong>No cuesta nada.</strong> Sin licencia, sin prueba, sin molestias de actualización.</li>
  <li><strong>La fuente está abierta.</strong> Puede leer exactamente lo que hace, auditarlo para garantizar su privacidad y, si conoce Swift, modificarlo o bifurcarlo.</li>
  <li><strong>Está impulsado por la comunidad.</strong> Cualquiera puede corregir los errores y el código sobrevive a cualquier empresa.</li>
  <li><strong>Cubre la necesidad básica.</strong> Volumen independiente por aplicación, que es la característica que el 90% de las personas realmente busca.</li>
</ul>

<p>Si su único requisito es "permítame cerrar una aplicación sin cerrar todas" y se siente cómodo con el software que viene sin un servicio de soporte formal, FineTune es una respuesta legítima. Recomendarlo aquí no es una concesión, es honesto.</p>

<h2>Las honestas compensaciones de la ruta del bricolaje</h2>

<p>Lo gratuito y de código abierto conlleva costos reales que no aparecen en la etiqueta de precio. Estos no son ataques específicos a FineTune, son la naturaleza del enfoque:</p>

<ul>
  <li><strong>La instalación es manual.</strong> Las herramientas de audio de código abierto generalmente se distribuyen como una compilación descargada o una fórmula Homebrew, no a través de App Store. Lo instalas fuera de la revisión de Apple y estás pendiente de mantenerlo actualizado.</li>
  <li><strong>La interceptación de audio por aplicación es frágil por naturaleza.</strong> Enrutar el audio de otra aplicación es un trabajo profundo del sistema. Cuando Apple envía una actualización macOS que cambia la pila de audio, estas herramientas pueden fallar hasta que alguien las parchee. Con un proyecto de voluntariado, "alguien" puede estar ocupado ese mes.</li>
  <li><strong>El soporte es el mejor esfuerzo.</strong> Si algo se rompe, su recurso es un problema de GitHub y una espera. No hay una respuesta garantizada y nadie está obligado a solucionarlo.</li>
  <li><strong>El alcance de la función es lo que envíen los mantenedores.</strong> Es probable que el control del volumen central esté cubierto; Los extras dependen completamente del tiempo del colaborador.</li>
</ul>

<blockquote>El marco honesto: FineTune cambia dinero por responsabilidad de mantenimiento. Ahorras 14,99 € y asumes el riesgo de que una actualización del sistema operativo lo deje roto hasta que la comunidad se ponga al día.</blockquote>

<h2>Donde SoundDial es diferente</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> toma el oficio opuesto. Paga una vez y, a cambio, obtiene un producto App Store con un proveedor detrás y un conjunto de funciones más amplio creado además del volumen por aplicación:</p>

<ul>
  <li><strong>Volumen y silencio por aplicación</strong> – la línea de base compartida que ofrecen ambas aplicaciones.</li>
  <li><strong>AUMENTO del volumen por aplicación</strong> – empuja una aplicación demasiado silenciosa más allá del 100%. Útil para aplicaciones con salida de audio débil donde rechazar a otros aún no es suficiente.</li>
  <li><strong>Perfiles de volumen</strong> — guarde mezclas completas ("Reunión", "Enfoque", "Juegos") y cambie con un solo clic en lugar de restablecer los controles deslizantes cada vez.</li>
  <li><strong>Auto-agacharse</strong> — reduce automáticamente las aplicaciones en segundo plano cuando hablas o cuando una aplicación elegida se activa, para que las llamadas se realicen sin necesidad de manipularlas manualmente.</li>
  <li><strong>Conmutación rápida de salida</strong> — saltar entre altavoces, auriculares y otras salidas desde la barra de menú.</li>
</ul>

<p>Igual de importante es <em>como</em> se envía. SoundDial está aislado y se distribuye a través de Mac App Store: no hay DMG por separado, ni controladores de kernel, ni instalación de controladores de audio. Las actualizaciones llegan a través de App Store como cualquier otra aplicación, y hay un desarrollador real al que enviar un correo electrónico cuando algo anda mal. Ese es el valor concreto de los 14,99 €: no solo más funciones, sino alguien responsable de mantenerlas funcionando en todas las versiones de macOS.</p>

<h2>Una advertencia honesta que se aplica a ambos.</h2>

<p>Ninguna aplicación de terceros puede convertir el sistema de audio de macOS en el mezclador de volumen de Windows, porque Apple no expone una API pública limpia para el audio por aplicación. Todas las herramientas de esta categoría (gratuitas o de pago, abiertas o cerradas) solucionan esa limitación utilizando técnicas de audio a nivel del sistema. Eso significa que tanto FineTune como SoundDial pueden verse afectados por cambios importantes de audio en macOS. La diferencia es quién es responsable de la solución posterior: una comunidad de voluntarios o un proveedor pago cuyo producto depende de ello.</p>

<h2>¿Cuál deberías elegir?</h2>

<ul>
  <li><strong>Elija FineTune si</strong> desea un costo cero, valora la transparencia del código abierto, solo necesita un volumen básico por aplicación y se siente cómodo con la instalación fuera del App Store y es autosuficiente cuando las cosas se estropean.</li>
  <li><strong>Elija SoundDial si</strong> desea una instalación de App Store con un solo clic, extras como impulso, perfiles y reducción automática, y la seguridad de las actualizaciones y el soporte de un proveedor con skin en el juego.</li>
</ul>

<p>Ambos son válidos. Realmente todo se reduce a si prefieres gastar dinero o prestar atención. Si prefieres comprar una aplicación protegida y compatible y no volver a pensar en ello, <a href="https://apps.apple.com/app/id6772792641">obtenga SoundDial en el Mac App Store</a> por un precio único de 14,99 €: sin suscripción, sin controladores, sin DMG.</p>`,
  },
  "background-music-vs-sounddial-mac": {
    slug: "background-music-vs-sounddial-mac",
    title: "Background Music vs SoundDial: ¿Es suficiente el mezclador de volumen gratuito Mac?",
    description: "Un enfrentamiento justo entre la aplicación gratuita Background Music y la de pago SoundDial. Dónde funciona el enfoque del controlador virtual gratuito, dónde falla y cuándo vale la pena un mezclador nativo de 14,99 €.",
    date: "2026-07-23",
    readTime: "6 min de lectura",
    content: `<p>Background Music es gratuito y realmente bueno en lo básico: le da a cada aplicación su propio control deslizante de volumen y puede pausar automáticamente la música cuando se reproduce otra aplicación. Si eso es todo lo que necesitas, úsalo. Pero se basa en un controlador de audio virtual que puede fallar después de las actualizaciones de macOS y carece de refuerzo, perfiles y conmutación de salida por aplicación. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> cambia dinero por una alternativa compatible, protegida y sin controladores.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Background Music vs SoundDial: ¿Es suficiente el mezclador de volumen gratuito Mac?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Primero, la pura verdad sobre macOS</h2>
<p>macOS no tiene un mezclador de volumen integrado por aplicación. El Windows ha tenido uno durante más de una década en su mezclador de volumen, pero en el Mac el control deslizante del sistema mueve todo a la vez. No existe una API compatible con Apple que permita que una aplicación de terceros intercepte y reequilibre limpiamente los flujos de aplicaciones individuales. Esa única brecha es la razón por la que existen herramientas como Background Music y SoundDial, y es la causa fundamental de la mayoría de las compensaciones siguientes.</p>

<h2>Lo que hace bien Background Music</h2>
<p>Background Music es una aplicación de barra de menús de código abierto que existe desde hace años y tiene seguidores leales por una buena razón. Te da:</p>
<ul>
<li><strong>Volumen independiente por aplicación</strong> - la característica principal. Baje el volumen de Spotify mientras mantiene una llamada en voz alta.</li>
<li><strong>Pausa automática</strong> — puede pausar su reproductor de música cuando el audio comienza en otro lugar, lo cual es un buen toque para las reuniones.</li>
<li><strong>Un volumen de dispositivo que te sigue</strong> y una interfaz sencilla y sensata.</li>
<li><strong>Costo cero</strong> - es gratis y el código es público.</li>
</ul>
<p>Para mucha gente eso es suficiente. Si toda su lista de deseos es "hacer que una aplicación ruidosa sea más silenciosa sin tocar el resto", Background Music lo cubre y no debe pagar por algo que no necesita. Ser justo aquí es importante: ésta es una herramienta legítimamente útil.</p>

<h2>Donde el enfoque libre muestra sus costuras</h2>
<p>El problema es <em>como</em> Background Music logra volumen por aplicación. Debido a que macOS no proporciona una ruta oficial, instala un controlador de audio virtual (una versión modificada del antiguo enfoque de Soundflower) que enruta el audio de su sistema a través de sí mismo. Esa arquitectura es inteligente, pero conlleva costos reales:</p>
<ul>
<li><strong>Se rompe después de las actualizaciones de macOS.</strong> Los controladores de audio virtuales están profundamente arraigados en el sistema y, históricamente, las principales versiones de macOS los han desactivado o desestabilizado. Los usuarios habitualmente informan silencio, distorsión o la necesidad de reinstalar después de la actualización. Cuando se rompe, a menudo estás solo.</li>
<li><strong>La instalación es más pesada.</strong> Está agregando un dispositivo de audio adyacente al kernel a su Mac, no solo una aplicación. Desinstalar limpiamente puede ser complicado.</li>
<li><strong>Se convierte en su dispositivo de salida predeterminado.</strong> Debido a que todo se enruta a través del dispositivo virtual, algunas aplicaciones de audio profesional, conferencias o juegos pueden comportarse de manera extraña, y cambiar su salida real es un paso adicional.</li>
<li><strong>El desarrollo está al ritmo de la comunidad.</strong> No hay mesa de soporte. Las soluciones llegan cuando un voluntario tiene tiempo, lo que para una herramienta de audio que de repente puede quedar en silencio es un riesgo significativo.</li>
</ul>
<p>Nada de esto hace que Background Music sea malo. Esto la convierte en una herramienta gratuita con sus ventajas y desventajas.</p>

<h2>Lo que realmente pagas con SoundDial</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> es una aplicación Mac App Store, que da forma a lo que es. Debido a que las aplicaciones App Store están protegidas y no pueden incluir el tipo de controlador virtual de bajo nivel que usa Background Music, SoundDial está diseñado para ejecutarse sin instalar un dispositivo de audio separado o DMG. Eso significa:</p>
<ul>
<li><strong>Sin peculiaridades del controlador virtual.</strong> No hay ningún dispositivo de salida adicional que se apodere de su cadena de audio y no hay nada que reinstalar cuando cambia el sistema.</li>
<li><strong>Sobrevive a las actualizaciones de macOS con mucha más gracia.</strong> La distribución y el espacio aislado de App Store significan que se basa en rutas compatibles y se actualiza a través de la tienda, por lo que es mucho menos probable que una actualización del sistema operativo lo deje en silencio.</li>
<li><strong>Aumento de volumen por aplicación.</strong> Esta es una verdadera diferencia de características: SoundDial puede impulsar una aplicación <em>arriba</em> 100% para fuentes silenciosas: un podcast grabado a un volumen demasiado bajo, una videollamada apagada. Background Music solo atenúa.</li>
<li><strong>Perfiles de volumen.</strong> Guarde un conjunto de niveles por aplicación ("Reunión", "Música", "Juegos") y cambie con un solo clic en lugar de arrastrar los controles deslizantes cada vez.</li>
<li><strong>Agachamiento automático.</strong> Baja automáticamente el volumen de otras aplicaciones cuando se reproduce una fuente elegida: una versión más configurable de la idea de pausa automática.</li>
<li><strong>Conmutación rápida de salida</strong> integrado en la barra de menú, además de silencio por aplicación.</li>
<li><strong>Un verdadero apoyo.</strong> Es un producto pago con alguien responsable cuando algo sale mal.</li>
</ul>

<h2>La decisión honesta</h2>
<blockquote>Si desea ser gratuito y solo necesita un volumen básico por aplicación, y se siente cómodo solucionando problemas después de las actualizaciones de macOS, Background Music es una opción sólida. Si desea impulso, perfiles, reducción, cambio de salida, sin fragilidad del controlador virtual y alguien a quien enviar un correo electrónico cuando se estropea, SoundDial vale 14,99 €.</blockquote>
<p>Algunos desempates concretos. Si trabaja habitualmente con fuentes demasiado silenciosas, el aumento por sí solo justifica el precio: Background Music simplemente no puede hacer que el audio sea más alto que la fuente. Si temes la apuesta anual de "¿mi audio sobrevivirá a la actualización?", la aplicación de la tienda en espacio aislado elimina esa ansiedad. Si le gustan las escenas de establecer y olvidar, los perfiles le ahorran verdaderas fricciones. Y son 14,99 € por única vez, no una suscripción, por lo que la comparación es una compra única versus el tiempo dedicado a mantener un controlador gratuito.</p>
<p>Por el contrario, si eres un experto que disfruta del código abierto, quiere leer el código y, en su mayoría, simplemente rechaza una aplicación, ahorra dinero. Ambas herramientas resuelven el mismo problema central; Se diferencian en robustez, profundidad de funciones y quién te atrapa cuando macOS cambia debajo de ellos.</p>

<p>¿Quiere volumen por aplicación sin la apuesta del controlador virtual? <a href="https://apps.apple.com/app/id6772792641">Obtenga SoundDial en el Mac App Store</a> — 14,99 € por única vez, en zona protegida, sin controladores, con impulso, perfiles y reducción automática integrados.</p>`,
  },
  "is-soundsource-worth-it-mac": {
    slug: "is-soundsource-worth-it-mac",
    title: "¿SoundSource vale $ 39? Una alternativa más económica al Mac por única vez",
    description: "SoundSource es una poderosa herramienta de audio Mac a ~$39, pero es excesivo si solo necesitas volumen y aumento por aplicación. Aquí tienes una comparación honesta y una alternativa única de 14,99 €.",
    date: "2026-07-23",
    readTime: "5 min de lectura",
    content: `<p>SoundSource vale la pena si necesita su conjunto de herramientas completo: volumen por aplicación, un ecualizador de 10 bandas por aplicación, enrutamiento de audio entre dispositivos y efectos para todo el sistema. Pero por alrededor de $ 39 es excesivo si principalmente deseas volumen por aplicación, silencio por aplicación y un aumento de volumen. Para ese trabajo más limitado, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> cuesta 14,99 € una vez.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial - ¿Vale SoundSource 39 dólares? Una alternativa más económica al Mac por única vez" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Lo que realmente hace SoundSource</h2>
<p>SoundSource de Rogue Amoeba es un software realmente excelente y es importante ser justo al respecto. No es sólo un mezclador de volumen. Te da:</p>
<ul>
<li><strong>Control de volumen por aplicación</strong> desde la barra de menú, la función que busca la mayoría de la gente.</li>
<li><strong>Un ecualizador completo de 10 bandas</strong> puede aplicar por aplicación o en todo el sistema, además de otros efectos de audio (a través de complementos de Audio Unit).</li>
<li><strong>Enrutamiento de salida/entrada</strong>, incluido el envío de una sola aplicación a un dispositivo de salida diferente al del resto del sistema.</li>
<li><strong>Cambio rápido de dispositivo</strong> y ajustes preestablecidos de ecualizador específicos de auriculares.</li>
</ul>
<p>Si eres un podcaster, un streamer o un nerd del audio que quiere sintonizar el ecualizador de tus auriculares, redirigir el sonido de una aplicación a un altavoz separado o apilar efectos de Audio Unit, SoundSource se gana su precio. Nada aquí es un golpe.</p>

<h2>La cuestión del precio</h2>
<p>SoundSource es una licencia paga única de alrededor de $39 (el precio varía según la versión y las promociones). No es una suscripción recurrente en el sentido de Netflix, pero sigue el patrón clásico de aplicación paga: compras una versión principal y las futuras actualizaciones importantes generalmente son actualizaciones pagas con descuento en lugar de ser gratuitas para siempre. Durante varios años, eso es más de una sola compra. Para muchos usuarios de Mac, la pregunta honesta es: ¿estoy pagando $39 por una suite de enrutamiento y ecualización cuando lo único que realmente toco son los controles deslizantes de volumen por aplicación?</p>

<blockquote>Si abrió SoundSource y solo usó los controles deslizantes de volumen y los botones de silencio, está pagando por una suite para usar un cajón.</blockquote>

<h2>¿Por qué existe el problema?</h2>
<p>Aquí está la causa raíz honesta: macOS no tiene un mezclador de volumen integrado por aplicación. El Windows ha tenido uno durante años, pero en el Mac, el volumen del sistema es de todo o nada. No existe una forma proporcionada por Apple de mantener el Spotify en silencio mientras una videollamada permanece alta, o de silenciar una aplicación sin tocar todo lo demás. Esa brecha es exactamente la razón por la cual herramientas como SoundSource y <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> existir. Es una limitación real del sistema operativo, no algo que ninguna de las aplicaciones haya inventado como problema para resolver.</p>

<h2>Dónde cabe una opción más ligera y económica</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> es un mezclador de volumen por aplicación de barra de menú creado para el caso común en lugar del caso de audio profesional. Cubre:</p>
<ul>
<li><strong>Volumen independiente por aplicación</strong> — suelte su música mientras una reunión permanece en el nivel máximo.</li>
<li><strong>Silencio por aplicación</strong> — silenciar una aplicación sin silenciar el Mac.</li>
<li><strong>Aumento de volumen por aplicación</strong> — empuja una aplicación silenciosa por encima de su 100% normal cuando la fuente es demasiado suave.</li>
<li><strong>Perfiles de volumen</strong> — guarde un conjunto de niveles por aplicación (por ejemplo, un diseño de "enfoque" o "llamada") y cambie con un solo clic.</li>
<li><strong>Auto-agacharse</strong> — baja automáticamente otras aplicaciones cuando comienzas a hablar o cuando se reproduce una aplicación elegida.</li>
<li><strong>Conmutación rápida de salida</strong> — saltar entre parlantes, auriculares y otros dispositivos desde la barra de menú.</li>
</ul>
<p>es <strong>14,99€ una sola vez</strong>, vendido a través de Mac App Store, por lo que está en un espacio aislado y no hay un DMG separado, ni una extensión del kernel ni un controlador de audio para instalar. La descargas como cualquier aplicación App Store y se actualiza a través de la tienda.</p>

<h2>Una comparación honesta</h2>
<p>Sea claro acerca de la compensación. SoundSource hace más que SoundDial, y si alguna de las siguientes cosas le importa, SoundSource es la mejor compra:</p>
<ul>
<li>Quieres una aplicación o sistema real <strong>ecualizador</strong> y efectos de unidad de audio.</li>
<li>Necesitas <strong>enrutar una sola aplicación a un dispositivo de salida diferente</strong> que todo lo demás.</li>
<li>tu confías en <strong>ajustes preestablecidos de ecualizador específicos de auriculares</strong> y procesamiento de audio detallado.</li>
</ul>
<p>SoundDial no realiza ecualización ni enrutamiento de dispositivo por aplicación. Es deliberadamente más estrecho. Lo que te ofrece a cambio es un precio más bajo, un espacio más liviano y una interfaz de barra de menú enfocada en lo que la mayoría de la gente realmente quería: mantener cada aplicación en el nivel que elijas, con mejoras y perfiles en la parte superior.</p>

<h2>Entonces, ¿vale la pena SoundSource?</h2>
<p>Sí, si vas a utilizar el ecualizador y el enrutamiento. Es un software maduro y con buen soporte de un desarrollador respetado, y el precio refleja la capacidad real. Pero "vale la pena" depende de lo que toques. Si abres la aplicación y solo ajustas los controles deslizantes de volumen, silencias una aplicación o deseas que una aplicación silenciosa tenga más volumen, estás pagando dinero de la suite premium por las necesidades básicas del mezclador. En ese caso, una herramienta única de 14,99 € es la opción más sensata, y siempre puedes pasar a SoundSource más adelante si tus necesidades aumentan en ecualización y enrutamiento.</p>

<p>Si todo lo que buscas es volumen por aplicación, aumento, silencio, perfiles y reducción automática, <a href="https://apps.apple.com/app/id6772792641">obtenga SoundDial en el Mac App Store</a> — 14,99 € una vez, sin suscripción, sin controladores.</p>`,
  },
  "chrome-too-loud-mac": {
    slug: "chrome-too-loud-mac",
    title: "Chrome ¿Demasiado ruidoso en Mac? Rechace un navegador sin silenciarlo todo",
    description: "¿Chrome suena más fuerte que tus otras aplicaciones en Mac? Conozca las correcciones integradas (silencio por pestaña, configuración de sonido del sitio) y cómo configurar un volumen real por aplicación para Chrome para que permanezca más silencioso que todo lo demás.",
    date: "2026-07-23",
    readTime: "5 min de lectura",
    content: `<p>macOS no tiene volumen por aplicación incorporado, por lo que no puedes bajar Chrome de forma nativa y dejar otras aplicaciones a todo volumen. Las soluciones gratuitas más rápidas son silenciar pestañas ruidosas, bajar el volumen dentro de cada reproductor de video o bloquear el sonido por sitio en la configuración de Chrome. Para obtener un nivel de volumen real y persistente exclusivo de Chrome, necesita un mezclador por aplicación.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial - Chrome ¿Demasiado alto en Mac? Rechace un navegador sin silenciarlo todo" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Por qué Chrome suena más fuerte que todo lo demás</h2>
<p>Chrome no es necesariamente "más ruidoso" por diseño; es que Chrome enruta el audio de muchas fuentes independientes: YouTube, anuncios de reproducción automática, videollamadas, pestañas de música de fondo y aplicaciones web, cada una de las cuales ofrece su propio volumen. Algunos sitios están masterizados en caliente, los anuncios son notoriamente ruidosos y Chrome los reproduce todos al nivel de salida completo de su sistema. Mientras tanto, tu aplicación de música o una llamada pueden ser más silenciosas, por lo que Chrome domina la mezcla.</p>
<p>En Windows, simplemente abriría el Mezclador de volumen y arrastraría el control deslizante Chrome hacia abajo. macOS simplemente no incluye esa característica. La tecla de volumen del sistema controla todo a la vez, por lo que bajar el Chrome también baja la música, las notificaciones y las llamadas. Esa es la limitación principal, y es una brecha del sistema operativo, no algo que estés haciendo mal.</p>

<h2>Correcciones integradas que no cuestan nada</h2>
<p>Antes de instalar cualquier cosa, prueba estos. No le darán un solo dial de volumen Chrome, pero resuelven la mayoría de los problemas de "una pestaña fuerte".</p>
<ul>
<li><strong>Silencia una pestaña ruidosa.</strong> Haga clic derecho en la pestaña y elija "Silenciar sitio" o haga clic en el pequeño icono de altavoz que aparece en una pestaña que reproduce audio. Esto silencia esa pestaña por completo sin tocar el resto de Chrome.</li>
<li><strong>Baje el volumen dentro del reproductor.</strong> El truco más confiable: arrastre el control deslizante de volumen hacia abajo dentro de YouTube, Netflix o lo que se esté reproduciendo. Los reproductores web recuerdan su propio nivel por sitio, por lo que un YouTube más silencioso permanecerá en silencio la próxima vez.</li>
<li><strong>Bloquear sonido por sitio.</strong> Ir a <em>chrome://configuración/contenido/sonido</em>. Puede alternar sitios entre "permitidos" y "silenciados" y agregar dominios específicos a una lista de silenciamiento. Excelente para silenciar permanentemente sitios que se reproducen automáticamente.</li>
<li><strong>Elimina los anuncios de reproducción automática.</strong> El audio de los anuncios suele ser el verdadero culpable. Un bloqueador de contenido o silenciar la pestaña hasta que estés listo para mirar elimina la mayor parte del volumen sorpresa.</li>
</ul>
<blockquote>Estos son realmente útiles y gratuitos. Pero observe lo que no pueden hacer: silencian o administran pestañas individuales. Ninguno de ellos te permite decir "mantener todo Chrome al 40% mientras mi música permanece al 100%".</blockquote>

<h2>La limitación honesta: no hay volumen por aplicación en macOS</h2>
<p>Si su objetivo real es "Chrome siempre debería ser más silencioso que mis otras aplicaciones", las herramientas integradas se quedan cortas. El silenciamiento por pestaña es todo o nada. Los controles deslizantes del reproductor se reinician cuando un sitio no los recuerda y deben rehacerse constantemente. Y el volumen del sistema mueve todo junto.</p>
<p>Esta es una limitación real de macOS, no un error que puedas eliminar. Apple nunca ha enviado un mezclador de volumen estilo Windows. La única forma de obtener un nivel de volumen independiente y persistente para Chrome específicamente es una aplicación de terceros que se ubica entre sus aplicaciones y su dispositivo de salida y aplica una ganancia por aplicación.</p>

<h2>Establecer un volumen real por aplicación para Chrome</h2>
<p>Un mezclador de barra de menú como <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> le da a macOS el control de volumen por aplicación que le falta. Enumera todas las aplicaciones que actualmente reproducen audio y le da a cada una su propio control deslizante, para que pueda bajar Chrome a un nivel cómodo y dejar Spotify, sus llamadas y los sonidos del sistema exactamente donde están.</p>
<p>Así es como domesticarías un Chrome ruidoso con él:</p>
<ul>
<li>Abra el mezclador de la barra de menú y busque Chrome en la lista de aplicaciones activas.</li>
<li>Arrastre el control deslizante de Chrome hacia abajo, digamos, entre un 40 y un 50 por ciento. Otras aplicaciones permanecen intactas.</li>
<li>Si una aplicación específica es demasiado <em>tranquilo</em> en su lugar, una aplicación de llamadas que susurra, usa <a href="https://apps.apple.com/app/id6772792641">aumento de volumen por aplicación</a> para llevarlo por encima del 100 por ciento, manteniendo Chrome bajo.</li>
<li>Silencia Chrome instantáneamente con un silencio por aplicación cuando necesites silencio sin cerrar pestañas.</li>
</ul>
<p>Como el nivel está vinculado a la aplicación, se mantiene. Chrome permanece en el volumen elegido en todas las pestañas, sitios y se reinicia; no es necesario volver a arrastrar los controles deslizantes del reproductor cada vez que abres un nuevo video.</p>

<h2>Yendo más allá: perfiles, ducking y conmutación de salida</h2>
<p>Una vez que tengas el control por aplicación, vale la pena conservar algunos extras. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> te permite ahorrar volumen <strong>perfiles</strong> — por ejemplo, un perfil de "enfoque" donde Chrome está en silencio y la música está alta, y un perfil de "observación" donde domina Chrome, y alterna entre ellos con un solo clic. La reducción automática puede ocultar otras aplicaciones automáticamente cuando se inicia una fuente elegida (útil para que una llamada nunca quede oculta bajo una pestaña ruidosa del navegador). Y el cambio rápido de salida le permite alternar entre parlantes, auriculares y otros dispositivos sin tener que acceder a la Configuración del sistema.</p>
<p>Es una compra única de 14,99 € para el Mac App Store: sin suscripción, sin controladores que instalar, sin DMG ni extensión de kernel. Debido a que está aislado y distribuido a través del App Store, no requiere que el controlador de audio incompleto instale herramientas de mezcla más antiguas en las que se basa.</p>

<h2>¿Qué solución deberías utilizar?</h2>
<p>Si solo tienes una pestaña desagradable de vez en cuando, usa el silencio integrado de Chrome y la configuración de sonido del sitio: son gratuitos y funcionan. Si constantemente deseas que Chrome pueda simplemente rechazarse mientras todo lo demás permanece igual, ese es el espacio exacto que macOS deja abierto, y un mezclador por aplicación es la solución limpia.</p>

<p>¿Quieres que el Chrome esté permanentemente más silencioso sin silenciar tu música o tus llamadas? <a href="https://apps.apple.com/app/id6772792641">Obtenga SoundDial en el Mac App Store</a> y dale a cada aplicación su propio control deslizante de volumen.</p>`,
  },
  "whatsapp-telegram-notifications-too-loud-mac": {
    slug: "whatsapp-telegram-notifications-too-loud-mac",
    title: "¿La notificación WhatsApp y Telegram suena demasiado fuerte en Mac? Rechazarlos",
    description: "Corrija los sonidos de notificación de escritorio de WhatsApp y Telegram que son demasiado fuertes en su Mac. Comience con la configuración integrada de cada aplicación, luego baje o silencie toda la aplicación cuando macOS no le brinde control por aplicación.",
    date: "2026-07-23",
    readTime: "5 min de lectura",
    content: `<p>Comience dentro de cada aplicación: WhatsApp y Telegram le permiten silenciar o cambiar los sonidos de notificación en sus propias configuraciones, que es la solución más limpia. Pero macOS no tiene un control deslizante de volumen de notificación por aplicación, por lo que si el sonido de la aplicación sigue siendo demasiado alto, su única palanca real es bajar o silenciar todo el audio de la aplicación con una herramienta de volumen por aplicación.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial - ¿La notificación WhatsApp y Telegram suena demasiado fuerte en Mac? Rechazarlos" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Primero, use la configuración de notificaciones propia de la aplicación.</h2>

<p>Tanto WhatsApp como Telegram incluyen sus propios controles de sonido, y aquí es donde siempre debes comenzar. Es la solución más precisa y no toca nada más en tu Mac.</p>

<p><strong>Escritorio WhatsApp:</strong> Abra WhatsApp, haga clic <em>Configuración</em> (el ícono de ajustes), luego <em>Notificaciones</em>. Puedes desactivar <em>sonidos</em> por completo manteniendo los banners o deshabilitando las vistas previas de notificaciones. WhatsApp no ofrece un control deslizante de volumen, por lo que esencialmente está activado o desactivado para el sonido en sí.</p>

<p><strong>Escritorio Telegram:</strong> Abierto <em>Ajustes → Notificaciones y Sonidos</em>. Telegram es más flexible aquí. Puede desactivar el sonido de notificación globalmente, silenciar chats individuales o establecer tonos personalizados (más silenciosos). También puedes silenciar un único grupo ruidoso abriéndolo y eligiendo <em>Silenciar</em>. Para la mayoría de las personas, silenciar los chats más ruidosos soluciona el problema sin quedar en silencio en todas partes.</p>

<p>Si el sonido es bueno pero demasiado frecuente, silencia los chats o canales específicos que se activan con mayor frecuencia en lugar de eliminar el sonido en toda la aplicación. Esto mantiene audibles las alertas importantes.</p>

<h2>Desactive los sonidos de notificación en la configuración del sistema macOS</h2>

<p>macOS tiene una segunda capa de control que anula la aplicación en algunos casos. Ir a <em>Configuración del sistema → Notificaciones</em>, seleccione WhatsApp o Telegram en la lista y apague <em>Reproducir sonido para notificaciones</em>. Esto silencia el timbre de alerta de esa aplicación mientras sigue mostrando pancartas.</p>

<p>Esta es una solución realmente buena si solo desea que la aplicación permanezca en silencio con las notificaciones y no le importe el resto del audio (llamadas, videos). Combinado con la configuración propia de la aplicación, cubre la mayoría de las quejas de "el ping es discordante".</p>

<h2>La verdadera limitación: macOS no tiene volumen por aplicación</h2>

<p>Aquí está la parte honesta. Los pasos anteriores son interruptores de encendido/apagado. Lo que no pueden hacer es girar WhatsApp o Telegram <em>abajo</em> a, digamos, 40% mientras se mantiene todo lo demás a todo volumen. Windows ha tenido un mezclador de volumen por aplicación durante años. macOS simplemente no incluye uno y no hay ninguna configuración oculta ni comando Terminal que lo agregue.</p>

<p>Esto es importante cuando el problema no es específicamente el timbre de notificación, sino que toda la aplicación hace demasiado ruido:</p>

<ul>
<li>WhatsApp o Telegram <strong>llamadas de voz y video</strong> que explotan a todo volumen en relación con tu música o una reunión</li>
<li>Un sonido de notificación que deseas mantener pero en un nivel más bajo, no apagado por completo</li>
<li>Tonos de llamada que superan con creces cualquier otra cosa que estés escuchando</li>
<li>Querer que la aplicación sea audible pero silenciosa en segundo plano mientras te concentras en otra cosa</li>
</ul>

<p>Nada de eso se puede solucionar con las herramientas integradas, porque sólo ofrecen silencio, no un nivel. Esa brecha es una limitación real, no algo que te estés perdiendo.</p>

<h2>Establezca un volumen por aplicación con SoundDial</h2>

<p>Para realmente bajar una sola aplicación en lugar de apagarla, necesita un mezclador de volumen por aplicación. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> es una aplicación de barra de menú que le brinda a macOS el control de volumen por aplicación que nunca incluyó. Enumera todas las aplicaciones que actualmente reproducen audio y le da a cada una su propio control deslizante.</p>

<p>Para este problema específico:</p>

<ul>
<li>Abierto <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> desde la barra de menú y busque WhatsApp o Telegram en la lista.</li>
<li>Arrastre el control deslizante hacia abajo hasta un nivel cómodo, por ejemplo, entre 30 y 40 %, sin tocar su música, su navegador o su videollamada.</li>
<li>Utilice la aplicación <strong>silenciar</strong> para silenciar solo esa aplicación instantáneamente durante una llamada o reunión, y luego activar el silencio más tarde sin tener que buscar en la configuración.</li>
<li>Si alguna vez necesitas lo contrario, una aplicación silenciosa que sea demasiado suave, la aplicación por aplicación <strong>impulsar</strong> puede llevarlo por encima del 100%.</li>
</ul>

<p>Debido a que establece un nivel por aplicación, SoundDial mantiene los timbres de notificación y el audio de las llamadas audibles pero proporcionados, en lugar de la elección de todo o nada que le imponen las opciones integradas. También puedes guardar <strong>perfiles de volumen</strong>, por lo que una configuración de "enfoque" que mantenga bajas las aplicaciones de chat está a un clic de distancia.</p>

<blockquote>Una advertencia honesta: bajar el volumen general de una aplicación en SoundDial también reduce sus timbres de notificación, ya que para macOS son el audio de la misma aplicación. Si desea que las notificaciones estén completamente desactivadas pero las llamadas a todo volumen, use el silencio de la aplicación más la Configuración del sistema para el timbre y reserve SoundDial para configurar el nivel general.</blockquote>

<p>SoundDial es una compra única de 14,99 € en el Mac App Store, en espacio aislado, sin suscripción, sin controladores de kernel y sin DMG para descargar. Es la respuesta práctica cuando la solución que realmente desea, desactivar una aplicación en lugar de desactivarla, no es algo que macOS pueda hacer por sí solo.</p>

<h2>¿Qué solución deberías utilizar?</h2>

<p>Trabaja de arriba a abajo. Pruebe primero la configuración de notificaciones de la aplicación, luego la configuración del sistema macOS para apagar el timbre. Si lo que realmente desea es bajar WhatsApp o Telegram a un volumen específico, o silenciar solo esa aplicación sobre la marcha durante las llamadas, ahí es donde un mezclador por aplicación gana su lugar.</p>

<p>¿Estás cansado de elegir entre el máximo y el silencio total para tus aplicaciones de chat? <a href="https://apps.apple.com/app/id6772792641">Obtenga SoundDial en el Mac App Store</a> y dale a cada aplicación su propio control de volumen.</p>`,
  },
  "game-too-loud-vs-voice-chat-mac": {
    slug: "game-too-loud-vs-voice-chat-mac",
    title: "¿El audio del juego es más alto que el del Discord en el Mac? Cómo equilibrar el volumen del juego con el de la voz",
    description: "Tu juego está ahogando el chat de voz Discord en Mac y no hay un mezclador de volumen incorporado. He aquí por qué macOS carece de volumen por aplicación estilo Windows y cómo bajar el volumen del juego manteniendo la voz alta.",
    date: "2026-07-23",
    readTime: "5 min de lectura",
    content: `<p>macOS no tiene un mezclador de volumen integrado por aplicación, por lo que no puedes limitar tu juego de forma nativa mientras mantienes el volumen alto de Discord. La solución es una aplicación de barra de menú que establece un volumen independiente por aplicación. Baje el juego al 40-50 %, deje el chat de voz al 100 % y ambos permanecerán equilibrados sin tocar los controles deslizantes del juego.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial: ¿El audio del juego es más alto que el de Discord en Mac? Cómo equilibrar el volumen del juego con el de la voz" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Por qué sucede esto en Mac (y no en Windows)</h2>

<p>Si has jugado en Windows, conoces el Mezclador de volumen: haz clic con el botón derecho en el icono del altavoz y cada aplicación en ejecución tendrá su propio control deslizante. Dejas el juego, subes Discord y listo. macOS simplemente nunca incluyó esa característica. Hay un volumen de salida maestro y un puñado de opciones a nivel de aplicación ocultas en la configuración del sistema, pero no hay control de nivel por aplicación para aplicaciones arbitrarias.</p>

<p>Entonces, cuando la mezcla de un juego se domina en caliente, sus explosiones, música y disparos se escuchan al mismo nivel de salida que las voces de tus amigos. Algunos juegos exponen un control deslizante de volumen maestro, pero muchos no bajan lo suficiente y muchos lanzadores, navegadores y títulos independientes no ofrecen ningún control útil. Discord en sí solo te permite ajustar el volumen de los usuarios entrantes, no el juego que compite con ellos.</p>

<p>Para ser honesto, esta es una brecha a nivel del sistema operativo, no un error que puedas solucionar. La pila de audio de Apple dirige todo a un único flujo de salida y no hay una interfaz de usuario propia para dividirlo por aplicación. Es por eso que necesita una herramienta de terceros que se encuentre entre sus aplicaciones y el dispositivo de salida.</p>

<h2>Las soluciones manuales (y por qué se quedan cortas)</h2>

<p>Antes de recurrir al software, conviene conocer las opciones gratuitas y sus límites:</p>

<ul>
<li><strong>Baja el volumen de la aplicación del juego.</strong> Funciona si el juego tiene un control deslizante maestro con pasos suficientemente finos. Muchos se detienen en incrementos del 10% o combinan música y efectos, por lo que no puedes controlar solo las partes ruidosas.</li>
<li><strong>Cría a tus amigos en Discord.</strong> Haga clic derecho en cada usuario y aumente su volumen. Esto ayuda un poco, pero es máximo y no toca el juego que en realidad es el problema.</li>
<li><strong>Utilice auriculares con control de volumen de hardware.</strong> Sólo cambia el nivel general, no el equilibrio entre juego y voz.</li>
<li><strong>Enrute el audio a través de un dispositivo virtual.</strong> Herramientas como Loopback o BlackHole pueden dividir transmisiones, pero están dirigidas a profesionales, requieren una configuración real y son excesivas para "hacer el juego más silencioso".</li>
</ul>

<p>Ninguno de estos ofrece lo único que los usuarios de Windows dan por sentado: un control deslizante rápido por aplicación. esa es la brecha <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> está construido para llenar.</p>

<h2>La solución directa: volumen independiente por aplicación</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> es un mezclador de volumen por aplicación de barra de menú para macOS. Muestra cada aplicación que reproduce sonido actualmente y le da a cada una su propio control deslizante, exactamente como el mezclador de volumen Windows. Para el problema de juego versus voz, el flujo de trabajo es breve:</p>

<ul>
<li>Haz clic en el ícono SoundDial en tu barra de menú mientras el juego y Discord se están ejecutando.</li>
<li>Busque el juego en la lista y baje el control deslizante hasta aproximadamente el 40-50%.</li>
<li>Deja Discord (o Slack, Zoom o tu aplicación de voz) al 100%.</li>
<li>Haz ajustes sobre la marcha durante el juego: empuja el juego hacia abajo en un tiroteo ruidoso, retrocede durante una exploración silenciosa.</li>
</ul>

<p>Como los niveles son por aplicación, los configuras una vez y se mantienen. El juego permanece limitado sin importar qué tan caliente sea su propia mezcla, y tus amigos permanecen claramente audibles sobre él.</p>

<h2>Impulsar, silenciar y crear perfiles para el resto de tu configuración</h2>

<p>La misma herramienta cubre las molestias adyacentes que vienen con los juegos de voz:</p>

<ul>
<li><strong>Impulso por aplicación.</strong> Si el micrófono de un compañero de equipo está en silencio incluso al máximo de Discord, puedes presionar la aplicación de voz <em>arriba</em> 100%, por lo que atraviesa el juego en lugar de quedar enterrado.</li>
<li><strong>Silencio por aplicación.</strong> Silencia una pestaña del navegador en segundo plano o una aplicación de música al instante sin necesidad de presionar la tecla Alt ni interrumpir la reproducción.</li>
<li><strong>Perfiles de volumen.</strong> Guarde un perfil de "juegos" con el juego al 45% y Discord potenciado, luego vuelva a un perfil "normal" para uso diario con un solo clic, sin tener que volver a arrastrar los controles deslizantes en cada sesión.</li>
<li><strong>Agachamiento automático.</strong> Haga que el juego baje automáticamente cuando alguien hable, de modo que las llamadas siempre aparezcan encima de la acción.</li>
<li><strong>Conmutación rápida de salida.</strong> Salta entre auriculares y parlantes desde el mismo menú sin tener que acceder a Configuración del sistema.</li>
</ul>

<blockquote><p>El modelo mental es simple: un control deslizante por aplicación, como lo ha hecho Windows durante años. macOS simplemente nunca lo proporcionó, por lo que una pequeña utilidad restaura la paridad.</p></blockquote>

<h2>Que esperar honestamente</h2>

<p>Un mezclador por aplicación resuelve limpiamente el problema del equilibrio, pero establece las expectativas correctamente. Controla los niveles de salida del software: no puede arreglar un juego cuyo propio audio esté mal masterizado y no puede generar una señal que nunca fue capturada (un micrófono realmente roto aún necesita una reparación de hardware). Boost añade ganancia real, por lo que llevar una fuente silenciosa mucho más allá del 100% puede introducir distorsión, exactamente como subir demasiado cualquier amplificador. Sin embargo, si se usa con sensatez, todo lo que necesitan la mayoría de las configuraciones es un límite de juego modesto más un pequeño impulso de voz.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> está protegido y se instala directamente desde Mac App Store: sin controladores, sin extensiones de kernel, sin DMG en quien confiar. Cuesta 14,99 € por única vez sin suscripción y admite control de volumen macOS en 28 idiomas.</p>

<p>Deja de luchar contra los controles deslizantes del juego. agarrar <a href="https://apps.apple.com/app/id6772792641">SoundDial en el Mac App Store</a>, baja el volumen del juego, mantén a tu equipo a todo volumen y finalmente obtén el mezclador de volumen estilo Windows que macOS olvidó enviar.</p>`,
  },
  "external-monitor-speaker-volume-too-loud-mac": {
    slug: "external-monitor-speaker-volume-too-loud-mac",
    title: "¿Los parlantes del monitor externo son demasiado ruidosos o están atascados en el Mac? Reparar el volumen de HDMI/DisplayPort",
    description: "Por qué las teclas de volumen de su Mac no controlan los parlantes del monitor HDMI o DisplayPort, y cómo arreglar el audio que es demasiado alto, atascado o no ajustable usando el OSD del monitor, la configuración de Audio MIDI y un mejor enrutamiento de salida.",
    date: "2026-07-23",
    readTime: "6 min de lectura",
    content: `<p>Si las teclas de volumen de su Mac están atenuadas o no hacen nada en un monitor conectado a través de HDMI o DisplayPort, generalmente no es un error. El audio de la pantalla digital a menudo se envía a un nivel fijo y el propio hardware del monitor controla el volumen. La solución es ajustar la pantalla, redirigir la salida o utilizar un dispositivo de audio diferente.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial: ¿Los parlantes del monitor externo son demasiado ruidosos o están atascados en el Mac? Reparar el volumen de HDMI/DisplayPort" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Por qué las teclas de volumen Mac dejan de funcionar a través de HDMI/DisplayPort</h2>

<p>HDMI y DisplayPort transmiten audio como una transmisión digital. Muchos monitores reciben esa transmisión a un nivel de salida fijo y esperan que usted controle el volumen en la propia pantalla, no en el dispositivo fuente. Cuando macOS detecta esto, desactiva el control deslizante de volumen en pantalla y atenúa las teclas F11/F12, mostrando un símbolo de "no entrada" cuando las presionas.</p>

<p>Esta es una limitación de hardware y protocolo, no algo que el software del Mac pueda anular. El audio nunca pasa por una etapa donde a macOS se le permite atenuarlo. Ninguna aplicación, controlador o configuración puede inyectar control de volumen en una transmisión que la pantalla insiste en recibir al nivel máximo. Ser honesto al respecto le ahorra horas buscando la solución equivocada.</p>

<h2>Solución 1: use los controles propios del monitor (OSD)</h2>

<p>Esta es la verdadera solución para la mayoría de las personas. Casi todos los monitores con parlantes incorporados tienen un menú en pantalla controlado por botones físicos o un joystick en la parte posterior o inferior del panel.</p>

<ul>
<li>Presione el botón OSD/menú para abrir la configuración del monitor.</li>
<li>Busque una sección de Audio o Volumen.</li>
<li>Baje el nivel allí: este es el control que realmente funciona a través de HDMI/DP.</li>
</ul>

<p>Algunos monitores también exponen una aplicación complementaria o compatibilidad con DDC/CI para que pueda controlar el OSD desde macOS. Las utilidades de terceros que hablan DDC pueden asignar las teclas de volumen de su Mac al volumen del hardware del monitor, lo cual vale la pena probar si odia alcanzar los botones del panel.</p>

<h2>Solución 2: verifique la configuración de audio MIDI</h2>

<p>Abierto <strong>Configuración de audio-MIDI</strong> (en /Aplicaciones/Utilidades). Seleccione su monitor en la lista de dispositivos. Si aparece un control deslizante de volumen a la derecha, arrástrelo hacia abajo; a veces la pantalla muestra un nivel controlable por software incluso cuando las teclas de la barra de menú están desactivadas. Si el control deslizante falta o está atenuado, la pantalla confirma que solo acepta audio de nivel fijo y debe volver al OSD.</p>

<p>Mientras esté aquí, confirme que esté seleccionado el dispositivo de salida correcto. Es común que el audio se enrute silenciosamente a un monitor que olvidó que estaba conectado, lo que explica la ausencia o un volumen repentino del sonido.</p>

<h2>Solución 3: enrute el audio a algún lugar que realmente pueda controlar</h2>

<p>Si los parlantes de su monitor son mediocres de todos modos (la mayoría lo son) y su control de volumen es torpe, la solución más limpia es dejar de usarlos:</p>

<ul>
<li>Conecte los parlantes o auriculares a la toma de salida de auriculares del monitor, si la tiene; esa salida analógica generalmente se puede controlar por volumen desde la pantalla.</li>
<li>Utilice un USB DAC, altavoces USB o una salida Bluetooth. Las salidas USB y analógica le dan al macOS un control total del volumen del software, para que sus teclas vuelvan a funcionar normalmente.</li>
<li>Seleccione los parlantes integrados de su Mac para obtener sonidos rápidos y mantenga el monitor solo para video.</li>
</ul>

<p>Una vez que estás en una salida que macOS realmente puede atenuar, las teclas de volumen del sistema se comportan y recuperas el control fino en lugar de saltar entre los pasos gruesos de OSD del monitor.</p>

<h2>Una vez que la salida funcione, controle el volumen por aplicación</h2>

<p>Recuperar una salida controlable resuelve el problema de "demasiado alto/atascado". Pero macOS todavía te ofrece un solo volumen maestro para todo. No hay un mezclador integrado por aplicación en el Mac; el Windows ha tenido uno durante años, pero Apple nunca envió un equivalente. Entonces, un video a alto volumen, un juego y una llamada silenciosa comparten el mismo control deslizante.</p>

<p>esa es la brecha <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> llena. Es un mezclador de barra de menú que le da a cada aplicación su propio volumen independiente, por lo que puedes bajar una pestaña del navegador sin tocar tu música, silenciar una aplicación al instante o aumentar una aplicación silenciosa por encima de su límite normal. Puede guardar perfiles de volumen para diferentes configuraciones y cambiar salidas rápidamente desde la barra de menú.</p>

<p>Para ser claro sobre el alcance: <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> controla el volumen del software para el audio que fluye a través de macOS. No puede anular un monitor que ignora el volumen del sistema a través de HDMI; ese es el comportamiento de nivel fijo de la pantalla y solo el OSD o una salida diferente lo soluciona. Una vez que esté en una salida controlable, el control por aplicación es donde la aplicación brilla.</p>

<h2>Lista de verificación rápida</h2>

<ul>
<li>¿Las teclas aparecen atenuadas en HDMI/DP? Utilice el volumen OSD del monitor: ese es el comportamiento esperado.</li>
<li>Verifique Configuración de Audio MIDI para ver un control deslizante de software oculto.</li>
<li>Confirme que esté seleccionado el dispositivo de salida correcto.</li>
<li>Para un control real, enrute el audio a la salida de auriculares, USB o Bluetooth.</li>
<li>Luego use un mezclador por aplicación para equilibrar aplicaciones individuales.</li>
</ul>

<p>Una vez que su producción esté bajo control, dé <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> una mirada. Es una compra única de 14,99 € del Mac App Store (sin suscripción, sin controladores, sin DMG) y finalmente trae un mezclador de volumen real por aplicación al macOS.</p>`,
  },
  "usb-dac-volume-control-not-working-mac": {
    slug: "usb-dac-volume-control-not-working-mac",
    title: "¿El volumen de USB DAC no se ajusta en Mac? Recuperar el control de volumen del software",
    description: "Por qué macOS atenúa el control deslizante de volumen para muchos USB DAC, qué significa y cómo recuperar el control de volumen del software funcional en su Mac sin afectar la calidad del audio.",
    date: "2026-07-23",
    readTime: "6 min de lectura",
    content: `<p>Si el control deslizante de volumen de su USB DAC está atenuado en Mac, generalmente no es un error. macOS desactiva su volumen de software cuando un DAC informa que no tiene volumen controlable, esperando que usted use la propia perilla de hardware del DAC. Para recuperar el volumen del software, use un atenuador a nivel de aplicación como <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — ¿El volumen de USB DAC no se ajusta en Mac? Recuperar el control de volumen del software" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Por qué macOS atenúa el volumen de algunos USB DAC</h2>

<p>Cuando conecta un dispositivo de audio USB, macOS le pregunta qué puede hacer a través del protocolo USB Audio Class (UAC). Parte de ese apretón de manos es un conjunto de controles de "unidades de funciones", incluido un control de volumen. Si el DAC declara un control de volumen, el macOS lo conecta a las teclas de volumen del teclado y al control deslizante de la barra de menú. Si el DAC declara que no tiene volumen ajustable por el host, el macOS atenúa el control deslizante por completo.</p>

<p>Muchos amplificadores y DAC de alta calidad hacen exactamente lo último, a propósito. La suposición del diseñador es que alimentará al DAC con una señal digital perfecta en bits y a gran escala y controlará el volumen con la perilla de volumen analógico de la propia unidad. Esa atenuación analógica ocurre después de la conversión de digital a analógico, por lo que evita desperdiciar bits y es realmente el camino preferido por los audiófilos. Es una característica, no un defecto.</p>

<blockquote>Regla general: si su DAC tiene una perilla de volumen física y el control deslizante Mac está atenuado, el fabricante quiere que use la perilla. La señal se envía al 100% por diseño.</blockquote>

<h2>Cuando el control deslizante atenuado es realmente un problema</h2>

<p>La respuesta "solo usa la perilla" no funciona en configuraciones reales:</p>

<ul>
<li><strong>El DAC no tiene perilla.</strong> Muchos USB DAC, dongles e interfaces profesionales compactos no exponen control de volumen ni control de host. Estás atascado en cualquier nivel en el que estén configurados el amplificador descendente o los altavoces autoamplificados.</li>
<li><strong>El pomo está fuera de su alcance.</strong> Un DAC de escritorio detrás de su monitor, o una unidad que alimente un amplificador de ganancia fija, significa que ajustar el volumen se convierte en una tarea física en lugar de presionar una tecla.</li>
<li><strong>Necesitas saldo por aplicación, no solo un nivel maestro.</strong> Incluso una perilla de hardware perfecta es un control global único. No puede hacer que una llamada Zoom sea más silenciosa que su música, ni evitar un juego cuando se activa una notificación.</li>
</ul>

<p>macOS no soluciona ninguno de estos problemas porque, desde la perspectiva del sistema operativo, el dispositivo se comporta correctamente. Esta es la verdadera limitación: es una capacidad reportada por el dispositivo y no hay ningún interruptor en la Configuración del sistema para anularla.</p>

<h2>Soluciones honestas antes de instalar cualquier cosa</h2>

<p>Pruebe estos primero, porque no cuestan nada:</p>

<ul>
<li><strong>Utilice la perilla de hardware o el volumen descendente.</strong> Si su DAC o sus parlantes/amplificadores autoamplificados tienen un control, esa es la opción más limpia y conserva la resolución digital completa.</li>
<li><strong>Verifique la propia aplicación o firmware del DAC.</strong> Algunos DAC (y unidades orientadas a juegos) incluyen un panel de control o una configuración de firmware que habilita el volumen del host. Si existe una opción de "volumen USB" o "volumen de software", activarla hace que el control deslizante macOS vuelva a funcionar.</li>
<li><strong>Pruebe con un modo USB diferente.</strong> Algunos dispositivos informan capacidades diferentes en el modo de controlador "compatible con su clase" frente a un modo de controlador propietario. La instalación o eliminación del controlador del proveedor puede cambiar si macOS ve un control de volumen.</li>
<li><strong>Busque en Configuración de Audio MIDI.</strong> Abra Configuración de Audio MIDI, seleccione el dispositivo y verifique si aparece allí un volumen maestro o por canal. Ocasionalmente, hay un control deslizante disponible en ese panel incluso cuando la barra de menú está atenuada.</li>
</ul>

<p>Si nada de eso se aplica, necesita atenuación de software en el lado Mac.</p>

<h2>Control de volumen de software con atenuación por aplicación</h2>

<p>Cuando el hardware no acepta un comando de volumen, la opción restante es atenuar el audio en el software antes de que llegue al DAC. Esto es exactamente lo que <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> lo hace. Se encuentra en la barra de menú y le da a cada aplicación en ejecución su propio volumen, silencio e incluso un impulso independiente, independientemente de si su DAC expone un control de hardware.</p>

<p>Para usarlo para un DAC atenuado:</p>

<ul>
<li>Instalar <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> desde el Mac App Store y ábralo desde la barra de menú.</li>
<li>Mantenga su DAC seleccionado como salida del sistema; También puede utilizar el cambio rápido de salida del SoundDial para moverse entre el DAC, los parlantes y los auriculares sin tener que acceder a la Configuración del sistema.</li>
<li>Establece niveles por aplicación: cierra el navegador, sube el reproductor de música, silencia lo que no quieras. Cada aplicación transmite al volumen que usted elija y el resultado mixto va al DAC.</li>
<li>Guarde perfiles de volumen para diferentes escenarios (llamadas versus escuchas) y permita que las aplicaciones en segundo plano se oculten automáticamente cuando comience a reproducirse algo más importante.</li>
</ul>

<h2>La compensación honesta en calidad de audio</h2>

<p>La atenuación del software reduce el nivel digital antes de la conversión, por lo que, en teoría, descarta una pequeña cantidad de resolución en comparación con el volumen analógico del propio DAC. En la práctica, en rutas modernas de 24 bits y superiores a niveles de escucha normales, la reducción está muy por debajo de cualquier cosa audible y se mantiene el rango dinámico completo del DAC para cualquier cosa que se reproduzca cerca de la escala completa. Si eres un purista y tienes un buen mando analógico a tu alcance, úsalo. Si no tiene control de hardware utilizable, o necesita un equilibrio por aplicación que macOS simplemente no puede proporcionar, el volumen de software es la compensación correcta y supera a un control deslizante que no hace nada.</p>

<p>SoundDial es una compra única de 14,99 €, en espacio aislado, sin controladores, extensiones de kernel ni instaladores de DMG. Si el volumen de su USB DAC está atenuado y alcanzar una perilla no es una opción, <a href="https://apps.apple.com/app/id6772792641">obtenga SoundDial en el Mac App Store</a> y vuelva a colocar el control de volumen de trabajo en la barra de menú.</p>`,
  },
  "cap-max-volume-of-one-app-mac": {
    slug: "cap-max-volume-of-one-app-mac",
    title: "Limite el volumen máximo de una aplicación ruidosa en Mac (Proteja su audición)",
    description: "macOS no tiene límite de volumen por aplicación, por lo que una aplicación con un volumen alto puede alcanzar el volumen máximo del sistema. A continuación se explica cómo establecer un límite de volumen máximo para una sola aplicación en Mac con un mezclador por aplicación y por qué son importantes los límites de hardware.",
    date: "2026-07-23",
    readTime: "5 min de lectura",
    content: `<p>macOS no tiene una forma integrada de limitar el volumen máximo de una aplicación, por lo que se reproduce un programa a alto volumen en cualquier nivel en el que esté configurado el control deslizante del sistema. Para establecer un límite para una sola aplicación, use un mezclador de barra de menú por aplicación como <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>: mantenga esa aplicación en, digamos, 40 por ciento mientras el volumen de su sistema se mantiene alto para todo lo demás.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial: limite el volumen máximo de una aplicación ruidosa en Mac (Proteja su audición)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Por qué una aplicación puede arruinarte repentinamente en un Mac</h2>

<p>En macOS, el control deslizante de volumen en la barra de menú o Centro de control es un control único para todo el sistema. Cada aplicación se vierte en el mismo resultado al mismo nivel. No hay un mezclador de volumen por aplicación integrado en el sistema operativo como lo ha tenido Windows durante años con su panel Mezclador de volumen.</p>

<p>Ese diseño tiene una consecuencia real para tus oídos. Si configura el volumen de su sistema alto para poder escuchar un podcast silencioso o una videollamada suave, luego cambia a un juego, una notificación Discord, un sitio web con muchos anuncios o un video que se masterizó mucho más alto, esa aplicación también se reproduce en todo el nivel del sistema. El resultado es el clásico sobresalto: un repentino muro de sonido a un volumen que nunca pensaste para esa aplicación específica.</p>

<p>Para cualquier persona con tinnitus, sensibilidad al sonido o que simplemente valore su audición, esa imprevisibilidad es el problema. No estás tratando de hacer que todo sea más silencioso. Estás tratando de garantizar que una aplicación ruidosa específica nunca pueda exceder un nivel que hayas decidido que es seguro.</p>

<h2>Qué puede y no puede hacer macOS aquí</h2>

<p>Permítanme ser honesto acerca de los límites antes de recomendar algo.</p>

<ul>
<li><strong>Volumen del sistema</strong> baja todo a la vez. Bájalo para controlar una aplicación y tus aplicaciones silenciosas se volverán inaudibles.</li>
<li><strong>Controles deslizantes de volumen en la aplicación</strong> existen en algunas aplicaciones (reproductores multimedia, algunos navegadores por pestaña), pero no en la mayoría. Un juego, una videollamada o una aplicación nativa a menudo no tienen ningún control de volumen independiente.</li>
<li><strong>El techo de hardware es real.</strong> Ningún software puede enviar una señal más fuerte que el máximo de su dispositivo de salida. Por el contrario, la masterización de volumen de una aplicación, más su DAC y sus auriculares, establecen qué tan alto se siente realmente "100 por ciento". El software puede reducir el nivel por aplicación de manera confiable, pero no puede reescribir la física de sus auriculares.</li>
</ul>

<p>Así que el objetivo honesto no es limitar mágicamente el volumen al nivel del conductor. Es una atenuación por aplicación práctica y confiable: mantenga una aplicación elegida en una fracción fija de la salida del sistema para que nunca lo sorprenda.</p>

<h2>Cómo limitar el volumen de una sola aplicación con un mezclador por aplicación</h2>

<p>Un mezclador de volumen por aplicación intercepta el audio de cada aplicación y le permite configurar su nivel de forma independiente. Aquí está el flujo de trabajo con <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, que se encuentra en la barra de menú:</p>

<ul>
<li><strong>Abre la batidora.</strong> Haga clic en el icono de la barra de menú SoundDial. Verá una lista de todas las aplicaciones que actualmente reproducen audio, cada una con su propio control deslizante.</li>
<li><strong>Encuentra la aplicación ruidosa.</strong> Localice la aplicación que desea limitar, por ejemplo un juego, un navegador o una herramienta de videoconferencia.</li>
<li><strong>Establece su techo.</strong> Arrastre el control deslizante de esa aplicación hacia su nivel seguro, digamos del 35 al 50 por ciento. Esa aplicación ahora se reproduce en esa fracción de la salida del sistema, mientras que todas las demás aplicaciones permanecen donde estaban.</li>
<li><strong>Deje el volumen de su sistema donde lo necesite.</strong> Mantenga el control deslizante del sistema lo suficientemente alto para sus aplicaciones silenciosas. La aplicación limitada permanece controlada independientemente.</li>
</ul>

<p>Debido a que el nivel es por aplicación, efectivamente estás estableciendo un máximo para ese programa. Incluso cuando intenta reproducir su contenido más alto, el más alto ahora es la fracción elegida del máximo.</p>

<h2>Haz que la gorra se pegue con perfiles.</h2>

<p>Un solo ajuste manual ayuda, pero los niveles de la aplicación se pueden restablecer cuando sales y reinicias. Para realizar una configuración segura para la audición que sobreviva a los reinicios, utilice <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>Perfiles de volumen. Guarde un perfil con sus niveles preferidos por aplicación, por ejemplo, "noche de juegos tranquila" con el juego al 40 por ciento, su aplicación de música al 70 por ciento y su aplicación de llamadas al 90 por ciento. Recuérdalo con un clic cada vez que te sientes. Su límite para la aplicación ruidosa vuelve exactamente como lo configuró.</p>

<p>Vale la pena conocer dos características más para la protección auditiva:</p>

<ul>
<li><strong>Silencio por aplicación</strong> te permite silenciar instantáneamente a un solo infractor sin tocar nada más, lo cual es útil para una aplicación que envía spam con notificaciones ruidosas.</li>
<li><strong>Auto-agacharse</strong> reduce automáticamente el audio de fondo cuando comienza algo más importante, para que no quede atrapado entre dos fuentes ruidosas a la vez.</li>
</ul>

<blockquote><p>La atenuación del software es realmente eficaz para limitar una aplicación, pero es una capa de protección, no una salvaguardia médica. Si tiene tinnitus o sensibilidad al sonido, combine un techo por aplicación con pausas y niveles de escucha generales razonables. Ninguna aplicación reemplaza los cuidadosos hábitos de volumen.</p></blockquote>

<h2>Una nota sobre el impulso y por qué está separado</h2>

<p>El mismo mezclador por aplicación que limita una aplicación ruidosa también puede aumentar una demasiado silenciosa por encima del 100 por ciento, lo cual es útil para una aplicación cuyo propio volumen está dominado demasiado bajo. Son dos caras de un mismo control: tú decides el nivel de cada aplicación, subir o bajar. Para la protección auditiva, simplemente elija la dirección "hacia abajo" y manténgala allí.</p>

<h2>La versión corta</h2>

<p>macOS no le permitirá limitar el volumen de una sola aplicación por sí solo, y esa es una brecha genuina del sistema operativo, no un error del usuario. Un mezclador de barra de menú por aplicación lo cierra: configure la aplicación con volumen alto en una fracción fija, guárdela en un perfil y nunca podrá volver a escucharlo mientras sus otras aplicaciones permanecen audibles.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> es una compra única de 14,99 € en el Mac App Store, en un espacio aislado sin controladores ni DMG para instalar. Si el objetivo es proteger sus oídos de una aplicación impredecible, es la forma más sencilla de establecer ese límite y mantenerlo.</p>`,
  },
  "set-left-right-balance-per-app-mac": {
    slug: "set-left-right-balance-per-app-mac",
    title: "Equilibrio diferente entre izquierda y derecha por aplicación en Mac: ¿es posible?",
    description: "¿Puedes configurar un balance estéreo izquierdo/derecho diferente para cada aplicación en macOS? Honestamente, no, no de forma nativa y no con la mayoría de las herramientas. Esto es lo que realmente es posible y dónde están los límites reales.",
    date: "2026-07-23",
    readTime: "6 min de lectura",
    content: `<p>Honestamente, no: macOS no le permite establecer un equilibrio estéreo izquierdo/derecho diferente por aplicación, y casi ninguna herramienta de terceros expone una verdadera panorámica por aplicación. Puede establecer un saldo global para su dispositivo de salida y puede controlar por aplicación <em>volumen</em>, pero independiente por aplicación <em>sartén</em> no es una característica que macOS pone a disposición.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial: Equilibrio diferente entre izquierda y derecha por aplicación en Mac. ¿Es posible?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Equilibrio versus volumen: no son lo mismo</h2>

<p>Vale la pena separar dos ideas que muchas veces se confunden:</p>
<ul>
  <li><strong>Volumen</strong> – qué tan ruidosa es una aplicación en general. Este es un único nivel aplicado a ambos canales.</li>
  <li><strong>Balanza (pan)</strong> — cómo se distribuye el audio entre los altavoces izquierdo y derecho. Un equilibrio de "totalmente a la izquierda" envía todo al canal izquierdo y silencia el derecho.</li>
</ul>

<p>Las personas que piden un "equilibrio diferente por aplicación" generalmente quieren una de dos cosas: llevar el sonido de una aplicación a un oído (por ejemplo, una llamada en el oído izquierdo, música en el derecho) o corregir una diferencia auditiva o un mal altavoz en un lado, pero solo para ciertas aplicaciones. Esos son objetivos legítimos. El problema es dónde vive el control.</p>

<h2>Por qué macOS no puede hacer esto de forma nativa</h2>

<p>macOS tiene exactamente un control de equilibrio y vive en el nivel del dispositivo de salida. Lo encontrarás debajo <strong>Configuración del sistema → Sonido → Salida</strong>, donde un <em>Saldo</em> El control deslizante desplaza toda la mezcla hacia la izquierda o hacia la derecha. Lo que sea que esté configurado ese control deslizante se aplica a <em>todo</em> enrutado a ese dispositivo: cada aplicación, cada sonido del sistema, todo a la vez.</p>

<p>No hay ninguna API en la pila de audio estándar macOS que diga "renderice el audio de esta aplicación a la izquierda, esa aplicación a la derecha". Las aplicaciones entregan su audio al sistema ya mezclado y el sistema aplica un equilibrio maestro en el camino hacia los parlantes. Por lo tanto, la capa en la que desea realizar una panorámica por aplicación simplemente no está expuesta por el sistema operativo. Esta es una limitación genuina del sistema operativo, no algo que una utilidad de barra de menú pueda solucionar cortésmente.</p>

<blockquote>A diferencia de por aplicación <em>volumen</em> – que macOS también carece de forma nativa, pero que aplicaciones pueden implementar tocando la transmisión de audio – por aplicación <em>equilibrio</em> requeriría volver a desplazar la transmisión de cada aplicación de forma independiente, y ese enlace no está disponible para las aplicaciones en espacio aislado.</blockquote>

<h2>Lo que hace SoundDial y, sinceramente, lo que no hace</h2>

<p><a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">SoundDial</a> le brinda el control por aplicación Falta macOS: independiente <strong>volumen</strong> para cada aplicación en ejecución, por aplicación <strong>silenciar</strong>, un volumen por aplicación <strong>impulsar</strong> por encima del 100%, volumen guardable <strong>perfiles</strong>, reducción automática y cambio rápido de salida desde la barra de menú.</p>

<p>Para ser sincero contigo: <a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">SoundDial</a> controles por aplicación <em>volumen y silencio</em>, no estéreo por aplicación <em>panorámica</em>. No enviará Safari a su oído izquierdo y Spotify a su derecho. Si alguien le dice que un mezclador de barra de menú logra un verdadero equilibrio L/R por aplicación en macOS, sea escéptico: ese no es un control que entrega el sistema operativo. Lo que SoundDial realmente resuelve es la frustración mucho más común: una aplicación es demasiado ruidosa o demasiado silenciosa en comparación con otra.</p>

<h2>Las verdaderas soluciones para el saldo por aplicación</h2>

<p>Si realmente necesita audio dividido en paralelo, estas son las opciones honestas, desde las más simples hasta las más complicadas:</p>

<ul>
  <li><strong>Saldo global (todas las aplicaciones):</strong> Utilice Configuración del sistema → Sonido → Salida → Balance. Esta es su única opción integrada y afecta a todas las aplicaciones. Útil para corregir una habitación o una asimetría auditiva, inútil para aislar una aplicación.</li>
  <li><strong>Dispositivos de salida separados:</strong> Esto es lo más parecido al saldo real por aplicación. Dirija la aplicación A a un dispositivo de salida y la aplicación B a otro, luego configure el equilibrio de cada dispositivo de forma independiente. macOS le permite elegir un dispositivo de salida dentro de algunas aplicaciones (y los navegadores/aplicaciones de comunicación a menudo exponen su propio selector de salida). Si la aplicación A apunta a un dispositivo panorámico hacia la izquierda y la aplicación B a un dispositivo panorámico hacia la derecha, efectivamente obtienes saldo por aplicación, siempre que ambas aplicaciones te permitan elegir su salida.</li>
  <li><strong>Herramientas de enrutamiento de audio virtual:</strong> Las utilidades que crean dispositivos virtuales y un mezclador interno pueden, en algunas configuraciones, enrutar aplicaciones específicas a canales específicos. Esto es poderoso pero complicado, agrega un componente de estilo conductor y es excesivo para la mayoría de las personas. Es el dominio de los streamers y los ingenieros de audio, no una solución casual de "llamada en un oído".</li>
  <li><strong>División de hardware:</strong> Si se trata de altavoces físicos o de una diferencia auditiva, un mezclador de hardware o una interfaz de audio con control por canal evita por completo el problema del software.</li>
</ul>

<h2>Cuando el volumen por aplicación es realmente lo que necesitas</h2>

<p>Muchas solicitudes de "Quiero un saldo diferente por aplicación" son en realidad "una aplicación está ahogando a otra". Si el objetivo es una videollamada que puedas escuchar con música o un juego demasiado alto junto a un chat, el equilibrio no es la herramienta: el volumen independiente sí lo es. Eso es exactamente lo que maneja limpiamente un mezclador por aplicación, sin controladores virtuales ni gimnasia de enrutamiento.</p>

<p>Entonces, el resumen honesto: el verdadero equilibrio izquierda/derecha por aplicación no es una característica de macOS, y ninguna aplicación mezcladora lo finge de manera convincente. Sus rutas reales son el control deslizante de equilibrio global o el enrutamiento de salida por aplicación a dispositivos panorámicos por separado. Pero si el dolor subyacente es relativamente fuerte, ese es un problema resuelto.</p>

<p>¿Quiere volumen, silencio y aumento independientes para cada aplicación en su Mac, con perfiles que se puedan guardar y sin controladores? <a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">Obtenga SoundDial en el Mac App Store</a> — 14,99 €, única vez, en zona protegida.</p>`,
  },
  "why-are-some-apps-louder-than-others-mac": {
    slug: "why-are-some-apps-louder-than-others-mac",
    title: "¿Por qué algunas aplicaciones son mucho más ruidosas que otras en Mac? (Y cómo igualarlos)",
    description: "Las aplicaciones suenan muy diferentes en Mac porque cada una está masterizada según su propio objetivo de volumen y macOS no tiene control de volumen incorporado por aplicación. He aquí por qué sucede y cómo nivelar sus aplicaciones.",
    date: "2026-07-23",
    readTime: "6 min de lectura",
    content: `<p>Las aplicaciones suenan tremendamente diferentes en su Mac porque cada una está creada, masterizada y normalizada según su propio objetivo de volumen, y macOS no tiene un control de volumen integrado por aplicación para conciliarlas. Spotify, YouTube, Zoom y las alertas del sistema pasan por el mismo control deslizante maestro, por lo que estás atrapado moviéndolo hacia arriba y hacia abajo constantemente.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial: ¿Por qué algunas aplicaciones son mucho más ruidosas que otras en Mac? (Y cómo igualarlos)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>No es tu Mac, es el audio en sí</h2>

<p>El control deslizante de volumen del sistema único en macOS controla el nivel de salida final para todo. No afecta el volumen relativo incorporado en la transmisión de audio de cada aplicación. Esa línea de base se establece mucho antes de que el sonido llegue a los parlantes y varía enormemente de una fuente a otra.</p>

<p>Tres cosas impulsan esas diferencias:</p>

<ul>
<li><strong>Niveles de dominio.</strong> Una pista pop contundente se masteriza mucho mejor que una grabación acústica tranquila o un podcast de palabra hablada. Una película mezclada para un cine mantiene los susurros silenciosos y las explosiones fuertes a propósito: eso es rango dinámico y significa que el nivel promedio es bajo.</li>
<li><strong>Objetivos de normalización de sonoridad.</strong> Las plataformas de streaming ajustan la reproducción a un objetivo medido en LUFS (Unidades de sonoridad relativas a la escala completa). Spotify apunta a -14 LUFS, YouTube aproximadamente -14 LUFS, Apple Music alrededor de -16 LUFS. Una aplicación de videoconferencia o un juego aplica su propio beneficio por completo. Dos aplicaciones "normalizadas" para objetivos diferentes nunca coincidirán entre sí.</li>
<li><strong>Sin nivelación entre aplicaciones.</strong> Cada aplicación normaliza sólo su propio contenido. Nada coordina Spotify con Zoom con un juego de navegador. macOS simplemente los suma y envía la mezcla.</li>
</ul>

<h2>Por qué es importante LUFS (en términos sencillos)</h2>

<p>El nivel máximo le indica el instante más fuerte de una señal. LUFS te dice qué tan fuerte suena realmente algo. <em>se siente</em> con el tiempo, ponderado según cómo funciona la audición humana. Esta distinción es la razón por la que un podcast y una pista de baile pueden alcanzar el mismo pico y, sin embargo, sentirse muy separados en cuanto a volumen: la pista pasa mucho más tiempo cerca de su techo.</p>

<blockquote>Un objetivo LUFS más silencioso significa más espacio libre y más rango dinámico. Un objetivo más ruidoso significa una pared de sonido más consistente y "siempre llena". Ninguna de las dos cosas está mal, pero cuando las aplicaciones apuntan a números diferentes, lo sientes como si una aplicación gritara y otra murmurara.</blockquote>

<p>Esa es la verdadera causa raíz. No es un error que puedas corregir. Es la física de cómo se produce y entrega el audio, multiplicada en una docena de aplicaciones que nunca fueron diseñadas para concordar entre sí.</p>

<h2>La brecha que macOS deja abierta</h2>

<p>Esta es la parte que realmente frustra a la gente: Windows ha enviado un mezclador de volumen por aplicación durante años. Puedes bajar una aplicación y subir otra, directamente desde la barra de tareas. macOS nunca ha incluido esto. Las preferencias de sonido solo le brindan el control deslizante maestro y la selección del dispositivo de salida.</p>

<p>Entonces, en un Mac, sus opciones tradicionalmente han sido limitadas:</p>

<ul>
<li>Ajuste el control deslizante de volumen interno de cada aplicación, si es que tiene uno. Muchas aplicaciones (Zoom, la mayoría de los juegos, timbres del sistema) no exponen ninguna utilizable.</li>
<li>Utilice el control deslizante maestro manualmente cada vez que cambie de contexto.</li>
<li>Silenciar una cosa por completo, lo cual es una solución contundente que en realidad no equilibra nada.</li>
</ul>

<p>Ninguno de estos recuerda tu preferencia. Salga y reinicie la aplicación y volverá al punto de partida.</p>

<h2>La solución práctica: un volumen recordado por aplicación</h2>

<p>Dado que no se puede obligar a todos los servicios a remasterizar su catálogo, la solución viable es agregar la capa faltante que macOS nunca se envió: volumen independiente y recordado para cada aplicación. Eso es exactamente lo que <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> lo hace. Vive en su barra de menú y le da a cada aplicación en ejecución su propio control deslizante, por lo que puede bajar la más ruidosa y empujar la más silenciosa hacia arriba hasta que se asienten en un nivel que le resulte uniforme.</p>

<p>Para nivelar sus aplicaciones en la práctica:</p>

<ul>
<li>Abierto <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> desde la barra de menú y verás cada aplicación activa con su propio control.</li>
<li>Baje todo lo que esté a todo volumen (generalmente una aplicación de música o video dominada) a algo así como 60-70%.</li>
<li>Deje su aplicación de referencia silenciosa (a menudo una aplicación de llamadas o un podcast) al 100 % y utilícela por aplicación. <strong>impulsar</strong> para empujarlo más allá del 100% si todavía está demasiado blando.</li>
<li>Establezca los niveles una vez. SoundDial recuerda el volumen de cada aplicación, por lo que el saldo se mantiene la próxima vez que la abras.</li>
</ul>

<p>Dos funciones hacen la mayor parte del trabajo de nivelación aquí. <strong>Impulso</strong> importa porque muchas aplicaciones son simplemente demasiado silenciosas incluso al máximo: un control deslizante por aplicación que solo reduce el volumen no puede rescatarlas, pero uno que puede amplificar más del 100% sí puede. y <strong>perfiles de volumen</strong> le permite guardar un conjunto completo de niveles (por ejemplo, un perfil de "enfoque en música baja, llamadas altas" para el trabajo versus una combinación diferente para juegos) y cambiar entre ellos instantáneamente en lugar de reajustar aplicación por aplicación.</p>

<h2>Donde esto ayuda más</h2>

<p>El alivio más común es el salto entre la música y la reunión: escuchar música en streaming a todo volumen y luego una aplicación de llamada que suena débil en comparación. Configure la aplicación de llamada más alta (o potenciada), baje la música y el sorprendente cambio de volumen desaparecerá. Lo mismo se aplica a un juego de navegador silencioso frente a un reproductor de vídeo ruidoso, o a las alertas del sistema que saltan sobre todo.</p>

<p>Para ser claro acerca de los límites: SoundDial equilibra lo que generan sus aplicaciones. No remasterizará una pista mal producida y no puede inventar detalles en el audio mezclado con un rango dinámico muy amplio. Lo que hace es brindarle el único control que macOS dejó fuera: niveles constantes por aplicación que permanecen fijos.</p>

<p>¿Estás cansado de utilizar el control deslizante maestro cada vez que cambias de aplicación? <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> cuesta 14,99 € por única vez en el Mac App Store (espacio aislado, sin controladores, sin DMG) y finalmente le da a cada aplicación su propio volumen recordado.</p>`,
  },
};
