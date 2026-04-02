import type { ArticleSet } from "./index";

export const esArticles: ArticleSet = {
  "how-to-check-cpu-temperature-on-mac": {
    slug: "how-to-check-cpu-temperature-on-mac",
    title: "Cómo comprobar la temperatura de la CPU en Mac (Guía 2026)",
    description:
      "Aprende todos los métodos para monitorear la temperatura del procesador de tu Mac — desde comandos de Terminal hasta aplicaciones de terceros. Cubre Apple Silicon e Intel.",
    date: "2026-04-02",
    content: `
<p>La temperatura de la CPU de tu Mac es una de las métricas más importantes a vigilar, especialmente si exiges tu máquina con edición de video, desarrollo de software o gaming. Un procesador sobrecalentado lleva al throttling térmico, rendimiento reducido y — con el tiempo — menor vida útil del hardware. Sin embargo, macOS no incluye una lectura de temperatura integrada en el Monitor de Actividad o Configuración del Sistema.</p>

<h2>Por qué importa la temperatura de la CPU</h2>
<p>Los procesadores modernos están diseñados para operar dentro de una envolvente térmica específica. Cuando la CPU excede esa envolvente, el sistema reduce la velocidad del reloj — un proceso llamado <strong>throttling térmico</strong>. En un MacBook, esto puede convertir una máquina ágil en una lenta en minutos.</p>

<h2>Rangos normales de temperatura CPU</h2>
<ul>
<li><strong>Reposo:</strong> 35 °C – 55 °C para Apple Silicon, 40 °C – 60 °C para Intel.</li>
<li><strong>Carga moderada:</strong> 60 °C – 80 °C en Apple Silicon, 65 °C – 85 °C en Intel.</li>
<li><strong>Carga pesada:</strong> 80 °C – 100 °C en Apple Silicon, 85 °C – 100 °C en Intel.</li>
<li><strong>Umbral de throttling:</strong> Apple Silicon: ~105 °C–110 °C. Intel: ~100 °C–105 °C.</li>
</ul>

<h2>Método 1: Terminal con powermetrics (Apple Silicon)</h2>
<p><strong>sudo powermetrics --samplers smc -i 1000 -n 1</strong></p>
<p>Gratis, sin software de terceros, lecturas precisas directamente de las herramientas del sistema de Apple.</p>

<h2>Método 2: Terminal con istats (Mac Intel)</h2>
<p><strong>gem install iStats</strong> y luego <strong>istats</strong> en Terminal.</p>

<h2>Método 3: Apps de barra de menú</h2>
<h3>Pulse</h3>
<p><a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a> es un monitor de sistema moderno construido con SwiftUI para macOS 14+. Muestra temperatura CPU, GPU, sensores, ventiladores, carga CPU, presión de memoria, velocidad de red, salud de batería y uso de disco — todo desde widgets compactos en la barra de menú.</p>

<h3>iStat Menus</h3>
<p>El monitor de sistema de referencia para usuarios avanzados de Mac durante más de una década.</p>

<h3>TG Pro</h3>
<p>Especializado en monitoreo de temperatura y control de ventiladores con curvas personalizadas.</p>

<h2>Qué hacer si tu Mac se calienta demasiado</h2>
<ol>
<li>Revisar el Monitor de Actividad para procesos descontrolados.</li>
<li>Cerrar pestañas y apps innecesarias.</li>
<li>Asegurar buena circulación de aire.</li>
<li>Limpiar los ventiladores.</li>
<li>Reiniciar el SMC (Intel) o reiniciar (Apple Silicon).</li>
</ol>

<h2>Monitorear la temperatura a lo largo del tiempo</h2>
<p>Apps como <a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a> muestran gráficos en tiempo real de la temperatura CPU junto con la carga CPU, facilitando correlacionar temperaturas altas con cargas de trabajo específicas.</p>

<h2>Resumen</h2>
<p>Verificar la temperatura de la CPU de tu Mac en 2026 es sencillo. El monitoreo regular te ayuda a detectar problemas temprano, mantener el rendimiento óptimo y prolongar la vida de tu hardware.</p>
`,
  },

  "what-is-memory-pressure-on-mac": {
    slug: "what-is-memory-pressure-on-mac",
    title: "Qué es la presión de memoria en Mac y por qué importa",
    description:
      "Entiende la presión de memoria de macOS — niveles verde, amarillo y rojo — y aprende cómo tu Mac gestiona la RAM con memoria comprimida, cableada y de aplicaciones.",
    date: "2026-04-02",
    content: `
<p>Si alguna vez abriste el Monitor de Actividad en tu Mac y notaste el gráfico de Presión de Memoria en la parte inferior de la pestaña Memoria, quizás te preguntaste qué significa realmente. macOS usa un sistema más matizado llamado <strong>presión de memoria</strong> para indicar qué tan eficientemente se está utilizando tu RAM.</p>

<h2>Presión de memoria explicada</h2>
<ul>
<li><strong>Verde:</strong> Tu sistema tiene mucha memoria disponible. Estado ideal.</li>
<li><strong>Amarillo:</strong> Los recursos de memoria se están agotando. macOS comprime activamente y puede empezar a usar swap.</li>
<li><strong>Rojo:</strong> El sistema está bajo presión severa de memoria. Swap intensivo, posible cierre de procesos.</li>
</ul>

<h2>Cómo macOS gestiona la memoria</h2>
<h3>Memoria de aplicaciones</h3>
<p>RAM activamente usada por aplicaciones en ejecución.</p>
<h3>Memoria cableada</h3>
<p>RAM que no puede ser comprimida ni intercambiada. Usada por el kernel y controladores del sistema.</p>
<h3>Memoria comprimida</h3>
<p>Cuando la RAM escasea, macOS comprime páginas de memoria inactivas en lugar de escribirlas a disco.</p>
<h3>Swap</h3>
<p>Cuando la RAM se agota y la compresión no basta, macOS escribe datos en un archivo swap en tu SSD.</p>

<h2>Cuánta RAM necesitas realmente</h2>
<ul>
<li><strong>8 GB:</strong> Suficiente para uso ligero.</li>
<li><strong>16 GB:</strong> El punto óptimo para la mayoría.</li>
<li><strong>24–32 GB:</strong> Para flujos profesionales.</li>
<li><strong>64–192 GB:</strong> Cargas especializadas.</li>
</ul>

<h2>Monitoreo con apps de barra de menú</h2>
<p><a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a> muestra la presión de memoria directamente en tu barra de menú como un indicador codificado por colores.</p>

<h2>Resumen</h2>
<p>La presión de memoria es la métrica de memoria más importante en macOS. Ignora el número bruto de memoria usada — enfócate en la presión. Herramientas como <a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a> facilitan este monitoreo.</p>
`,
  },

  "best-system-monitor-apps-for-mac": {
    slug: "best-system-monitor-apps-for-mac",
    title: "Mejores apps de monitor de sistema para Mac en 2026: Comparativa completa",
    description:
      "Compara los mejores monitores de sistema para Mac — iStat Menus, Stats, MenuMeters, TG Pro y Pulse. Características, precios y pros y contras honestos.",
    date: "2026-04-02",
    content: `
<p>Hoy, un puñado de aplicaciones dedicadas colocan toda la información crítica — uso de CPU, presión de memoria, velocidad de red, temperatura, salud de batería y más — directamente en tu barra de menú. En esta comparativa evaluamos los cinco monitores más populares de 2026.</p>

<h2>iStat Menus</h2>
<p>El monitor más establecido. Personalización profunda. 11,99 $ o incluido en Setapp.</p>

<h2>Stats</h2>
<p>Gratuito y open source. Cubre lo esencial. Interfaz funcional pero sin pulir.</p>

<h2>MenuMeters</h2>
<p>Solo CPU, memoria, disco y red. Extremadamente ligero pero limitado.</p>

<h2>TG Pro</h2>
<p>Especialista en temperatura y control de ventiladores. 20 $.</p>

<h2>Pulse</h2>
<p><a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a> ofrece cobertura completa comparable a iStat Menus por 5,99 $ con interfaz SwiftUI moderna. Disponible en el Mac App Store.</p>

<h2>Tabla comparativa</h2>
<table>
<tr><th>Característica</th><th>iStat Menus</th><th>Stats</th><th>MenuMeters</th><th>TG Pro</th><th>Pulse</th></tr>
<tr><td>CPU</td><td>Sí</td><td>Sí</td><td>Sí</td><td>Básico</td><td>Sí</td></tr>
<tr><td>Presión memoria</td><td>Sí</td><td>Sí</td><td>Básico</td><td>No</td><td>Sí</td></tr>
<tr><td>Red</td><td>Sí</td><td>Sí</td><td>Sí</td><td>No</td><td>Sí</td></tr>
<tr><td>Temperatura</td><td>Sí</td><td>Sí</td><td>No</td><td>Sí</td><td>Sí</td></tr>
<tr><td>Mac App Store</td><td>No</td><td>No</td><td>No</td><td>No</td><td>Sí</td></tr>
<tr><td>Precio</td><td>11,99 $</td><td>Gratis</td><td>Gratis</td><td>20 $</td><td>5,99 $</td></tr>
</table>

<h2>Resumen</h2>
<p>La mejor elección depende de tus prioridades. <a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a> ofrece la mejor relación calidad-precio para monitoreo completo.</p>
`,
  },

  "how-to-monitor-network-speed-on-mac": {
    slug: "how-to-monitor-network-speed-on-mac",
    title: "Cómo monitorear la velocidad de red en Mac en tiempo real",
    description:
      "Aprende a rastrear velocidades de carga y descarga en tu Mac usando Monitor de Actividad, Terminal y apps de barra de menú. Incluye consejos de solución de problemas.",
    date: "2026-04-02",
    content: `
<p>Ya sea que estés descargando un archivo grande o solucionando una conexión lenta, conocer la velocidad de red en tiempo real de tu Mac es muy útil.</p>

<h2>Método 1: Monitor de Actividad</h2>
<p>Pestaña Red: Datos recibidos/s y Datos enviados/s. También lista todos los procesos usando la red.</p>

<h2>Método 2: Terminal</h2>
<p><strong>nettop</strong> para vista en tiempo real. <strong>speedtest-cli</strong> para test de velocidad puntual.</p>

<h2>Método 3: Apps de barra de menú</h2>
<p><a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a> muestra velocidad upload/download en tiempo real en la barra de menú con gráficos de throughput, IP local e IP pública.</p>

<h2>Solución de problemas de red lenta</h2>
<ol>
<li>Ejecutar test de velocidad para descartar el ISP.</li>
<li>Verificar señal Wi-Fi (RSSI).</li>
<li>Identificar apps que consumen ancho de banda con <a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a>.</li>
<li>Cambiar a Ethernet.</li>
<li>Cambiar servidores DNS (1.1.1.1 o 8.8.8.8).</li>
<li>Verificar overhead de VPN.</li>
<li>Reiniciar el router.</li>
</ol>

<h2>Resumen</h2>
<p>Monitorear la velocidad de red en tiempo real ayuda a entender tu conexión y resolver problemas eficientemente. Una app de barra de menú ofrece visibilidad continua.</p>
`,
  },

  "mac-running-slow-how-to-fix": {
    slug: "mac-running-slow-how-to-fix",
    title: "¿Mac lento? Cómo diagnosticar y solucionar problemas de rendimiento",
    description:
      "Una guía sistemática para descubrir por qué tu Mac está lento. Aprende a distinguir cuellos de botella de CPU, memoria y disco y solucionarlos paso a paso.",
    date: "2026-04-02",
    content: `
<p>Pocas cosas son más frustrantes que un Mac lento. Pero « lento » es una descripción vaga con muchas causas posibles. Un Mac lento por falta de memoria se comporta diferente a uno limitado por CPU.</p>

<h2>Paso 1: Identificar el tipo de cuello de botella</h2>
<ul>
<li><strong>CPU:</strong> Procesador al máximo. Ventiladores a tope, respuesta lenta.</li>
<li><strong>Memoria:</strong> Sin RAM disponible. Rueda giratoria, presión amarilla/roja.</li>
<li><strong>Disco:</strong> Almacenamiento casi lleno o fallando.</li>
<li><strong>Red:</strong> Internet lento.</li>
</ul>

<h2>Paso 2: Abrir Monitor de Actividad</h2>
<p>Revisa las pestañas CPU, Memoria y Disco para identificar el problema.</p>

<h2>Paso 3: Monitor de barra de menú</h2>
<p>Un monitor como <a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a> mantiene las métricas siempre visibles.</p>

<h2>Solucionar limitaciones de CPU</h2>
<ol>
<li>Cerrar procesos problemáticos.</li>
<li>Actualizar apps.</li>
<li>Reducir pestañas del navegador.</li>
<li>Desactivar elementos de inicio innecesarios.</li>
</ol>

<h2>Solucionar limitaciones de memoria</h2>
<ol>
<li>Cerrar apps con alto consumo de memoria.</li>
<li>Reiniciar el Mac.</li>
<li>Reducir apps abiertas.</li>
<li>Ampliar RAM si es posible.</li>
</ol>

<h2>Solucionar limitaciones de disco</h2>
<ol>
<li>Liberar espacio de almacenamiento.</li>
<li>Verificar salud del disco.</li>
<li>Programar backups fuera de horas de trabajo.</li>
</ol>

<h2>Resumen</h2>
<p>Diagnosticar un Mac lento requiere identificar si el cuello de botella es CPU, memoria, disco o red. Usa el Monitor de Actividad y <a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a> para monitoreo continuo.</p>
`,
  },

  "how-to-check-battery-health-on-mac": {
    slug: "how-to-check-battery-health-on-mac",
    title: "Cómo comprobar la salud de la batería en MacBook: Guía completa",
    description:
      "Todos los métodos para verificar la salud de la batería de tu MacBook — Configuración del Sistema, Terminal, ciclos de carga y apps de terceros.",
    date: "2026-04-02",
    content: `
<p>La batería de tu MacBook no dura para siempre. Con el tiempo, los procesos químicos degradan las celdas de litio, reduciendo la capacidad máxima.</p>

<h2>Qué significa la salud de la batería</h2>
<ul>
<li><strong>Capacidad máxima:</strong> Porcentaje de la capacidad original. Apple considera consumida una batería bajo 80%.</li>
<li><strong>Ciclos de carga:</strong> La mayoría de MacBooks están diseñados para 1.000 ciclos.</li>
</ul>

<h2>Método 1: Configuración del Sistema</h2>
<p>Menú Apple > Configuración del Sistema > Batería > botón ⓘ junto a Salud de la batería.</p>

<h2>Método 2: Información del Sistema</h2>
<p>Option + clic en menú Apple > Información del Sistema > Energía. Muestra ciclos, capacidad y estado.</p>

<h2>Método 3: Terminal</h2>
<p><strong>system_profiler SPPowerDataType</strong> para info completa. <strong>pmset -g batt</strong> para porcentaje actual.</p>

<h2>Método 4: Apps de barra de menú</h2>
<p><a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a> muestra salud de batería, ciclos, vataje y tiempo restante directamente en la barra de menú.</p>

<h2>Cuándo reemplazar la batería</h2>
<ul>
<li><strong>Antes:</strong> Si necesitas batería todo el día para trabajo o viajes.</li>
<li><strong>Después:</strong> Si usas tu MacBook principalmente conectado.</li>
<li><strong>Inmediatamente:</strong> Si hay apagados inesperados o hinchazón visible.</li>
</ul>

<h2>Prolongar la vida de la batería</h2>
<ul>
<li>Usar Carga optimizada de la batería.</li>
<li>Evitar temperaturas extremas.</li>
<li>Mantener la carga entre 20% y 80%.</li>
</ul>

<h2>Resumen</h2>
<p>Verificar la salud de la batería es fácil con las herramientas de Apple y aún más con un monitor de barra de menú como <a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a>. Las métricas clave son capacidad máxima y ciclos de carga.</p>
`,
  },
};
