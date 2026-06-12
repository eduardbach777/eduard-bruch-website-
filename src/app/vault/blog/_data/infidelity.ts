import type { Article, ArticleSet, BaseLocale } from "./index";
import { getAppStoreUrl } from "./store";

type TopicText = {
  title: string;
  description: string;
  answer: string;
  detail: string;
  keywords: string[];
  faqs: { question: string; answer: string }[];
};

type Topic = {
  slug: string;
  text: Record<BaseLocale, TopicText>;
};

const copy: Record<
  BaseLocale,
  {
    direct: string;
    matters: string;
    protects: string;
    protectsIntro: string;
    protectsItems: string[];
    process: string;
    processItems: string[];
    leaks: string;
    leaksIntro: string;
    leaksItems: string[];
    reality: string;
    realityText: string;
    faq: string;
    cta: string;
  }
> = {
  en: {
    direct: "Direct answer",
    matters: "What matters in this situation",
    protects: "What Stash can actually protect",
    protectsIntro:
      "Stash protects files you deliberately import into its encrypted vault. For an affair or discreet relationship, that can include:",
    protectsItems: [
      "Intimate photos and videos removed from the ordinary camera roll after the import is verified.",
      "Screenshots of conversations, dating profiles, travel plans, receipts, gifts, and reservations.",
      "Exported chats, voice notes, PDFs, documents, and downloaded attachments.",
      "A harmless second content space using a decoy PIN, plus records of failed PIN attempts.",
    ],
    process: "A practical privacy process",
    processItems: [
      "Import sensitive files into Stash and open several inside the vault to confirm that photos display and videos play correctly.",
      "Only after verification, remove source copies from Photos or Files and review Recently Deleted.",
      "Use a vault PIN that is different from the iPhone passcode and cannot be guessed from birthdays or anniversaries.",
      "Choose a calculator, fitness, or music disguise that looks normal among the apps already on the phone.",
      "Review iCloud, shared albums, downloads, message attachments, and other synced devices separately.",
    ],
    leaks: "What a file vault does not hide",
    leaksIntro:
      "No vault app makes cheating invisible. Most discoveries happen through information outside the protected file:",
    leaksItems: [
      "Lock-screen notifications, live messages, call logs, contacts, and shared calendars.",
      "Dating-app icons, App Store purchase history, subscriptions, Screen Time, and battery usage.",
      "iCloud Photos, Google Photos, shared libraries, backups, Macs, iPads, and family devices.",
      "Location sharing, tagged posts, card statements, ride history, hotel emails, and another person's phone.",
    ],
    reality: "The relationship and safety reality",
    realityText:
      "Encryption can protect selected files; it does not remove the personal consequences of infidelity. If discovery could lead to violence, coercive control, outing, or homelessness, prioritize a wider safety plan and trusted professional support. A private vault is one technical layer, not protection for an entire situation.",
    faq: "Frequently asked questions",
    cta: "Download Stash from the App Store",
  },
  de: {
    direct: "Direkte Antwort",
    matters: "Was in dieser Situation wichtig ist",
    protects: "Was Stash tatsächlich schützen kann",
    protectsIntro:
      "Stash schützt Dateien, die du bewusst in den verschlüsselten Tresor importierst. Bei einer Affäre oder diskreten Beziehung können das sein:",
    protectsItems: [
      "Intime Fotos und Videos, deren Import geprüft wurde und deren Original nicht mehr in der normalen Galerie liegt.",
      "Screenshots von Chats, Dating-Profilen, Reisen, Belegen, Geschenken und Reservierungen.",
      "Exportierte Unterhaltungen, Sprachnotizen, PDFs, Dokumente und heruntergeladene Anhänge.",
      "Ein harmloser zweiter Inhaltsbereich über eine Köder-PIN und Protokolle fehlgeschlagener PIN-Versuche.",
    ],
    process: "Ein praktischer Ablauf",
    processItems: [
      "Importiere sensible Dateien und öffne mehrere davon im Tresor, um Anzeige und Videowiedergabe zu prüfen.",
      "Entferne erst danach die Quelldateien aus Fotos oder Dateien und kontrolliere 'Zuletzt gelöscht'.",
      "Nutze eine andere PIN als für das iPhone und keine leicht erratbaren Geburtstage oder Jahrestage.",
      "Wähle eine Taschenrechner-, Fitness- oder Musik-Tarnung, die zu den vorhandenen Apps passt.",
      "Prüfe iCloud, geteilte Alben, Downloads, Nachrichtenanhänge und synchronisierte Geräte separat.",
    ],
    leaks: "Was ein Dateitresor nicht versteckt",
    leaksIntro:
      "Keine Tresor-App macht Fremdgehen unsichtbar. Die meisten Entdeckungen entstehen außerhalb der geschützten Datei:",
    leaksItems: [
      "Sperrbildschirm-Mitteilungen, Live-Chats, Anruflisten, Kontakte und geteilte Kalender.",
      "Dating-App-Symbole, App-Store-Käufe, Abonnements, Bildschirmzeit und Batterienutzung.",
      "iCloud-Fotos, Google Fotos, geteilte Mediatheken, Backups, Macs, iPads und Familiengeräte.",
      "Standortfreigabe, Markierungen, Kontoauszüge, Fahrten, Hotel-E-Mails und das Handy der anderen Person.",
    ],
    reality: "Beziehungs- und Sicherheitsrealität",
    realityText:
      "Verschlüsselung schützt ausgewählte Dateien, beseitigt aber nicht die persönlichen Folgen von Untreue. Wenn eine Entdeckung Gewalt, Kontrolle, unfreiwilliges Outing oder Wohnungslosigkeit auslösen könnte, ist ein umfassender Sicherheitsplan wichtiger. Ein Tresor ist nur eine technische Ebene.",
    faq: "Häufig gestellte Fragen",
    cta: "Stash im App Store laden",
  },
  es: {
    direct: "Respuesta directa",
    matters: "Qué importa en esta situación",
    protects: "Qué puede proteger realmente Stash",
    protectsIntro:
      "Stash protege los archivos que importas deliberadamente a su bóveda cifrada. En una infidelidad o relación discreta pueden ser:",
    protectsItems: [
      "Fotos y videos íntimos tras comprobar la importación y retirar el original de la galería normal.",
      "Capturas de chats, perfiles de citas, viajes, recibos, regalos y reservas.",
      "Conversaciones exportadas, notas de voz, PDF, documentos y adjuntos descargados.",
      "Un segundo espacio inocente con PIN señuelo y registros de intentos fallidos.",
    ],
    process: "Un proceso práctico",
    processItems: [
      "Importa los archivos sensibles y abre varios dentro de la bóveda para comprobar fotos y videos.",
      "Solo después elimina las fuentes de Fotos o Archivos y revisa Eliminado recientemente.",
      "Usa un PIN distinto al código del iPhone y evita cumpleaños o aniversarios fáciles de adivinar.",
      "Elige un disfraz de calculadora, fitness o música que parezca normal entre tus apps.",
      "Revisa por separado iCloud, álbumes compartidos, descargas, adjuntos y dispositivos sincronizados.",
    ],
    leaks: "Lo que una bóveda no oculta",
    leaksIntro:
      "Ninguna bóveda vuelve invisible una infidelidad. La mayoría de los descubrimientos ocurre fuera del archivo protegido:",
    leaksItems: [
      "Notificaciones, mensajes activos, llamadas, contactos y calendarios compartidos.",
      "Iconos de apps de citas, compras, suscripciones, Tiempo de uso y consumo de batería.",
      "Fotos de iCloud, Google Fotos, fototecas compartidas, copias, Mac, iPad y dispositivos familiares.",
      "Ubicación, etiquetas, tarjetas, viajes, correos de hoteles y el teléfono de la otra persona.",
    ],
    reality: "La realidad de la relación y la seguridad",
    realityText:
      "El cifrado protege archivos concretos, pero no elimina las consecuencias personales de una infidelidad. Si ser descubierto puede provocar violencia, control, outing forzado o pérdida de vivienda, prioriza un plan de seguridad más amplio. Una bóveda es solo una capa técnica.",
    faq: "Preguntas frecuentes",
    cta: "Descargar Stash en App Store",
  },
  ar: {
    direct: "الإجابة المباشرة",
    matters: "ما المهم في هذه الحالة",
    protects: "ما الذي يستطيع Stash حمايته فعلاً",
    protectsIntro:
      "يحمي Stash الملفات التي تستوردها عمداً إلى خزنته المشفرة. في خيانة أو علاقة سرية قد تشمل:",
    protectsItems: [
      "صوراً وفيديوهات حميمة بعد التحقق من الاستيراد وإزالة الأصل من المعرض العادي.",
      "لقطات للمحادثات وملفات المواعدة وخطط السفر والإيصالات والهدايا والحجوزات.",
      "محادثات مصدرة وملاحظات صوتية وملفات PDF ومستندات ومرفقات.",
      "مساحة ثانية عادية عبر PIN وهمي وسجل محاولات PIN الفاشلة.",
    ],
    process: "خطوات عملية",
    processItems: [
      "استورد الملفات الحساسة وافتح عدداً منها داخل الخزنة للتحقق من الصور وتشغيل الفيديو.",
      "بعد التحقق فقط احذف المصدر من الصور أو الملفات وراجع المحذوفة مؤخراً.",
      "استخدم PIN مختلفاً عن رمز iPhone وتجنب تواريخ الميلاد والذكريات سهلة التخمين.",
      "اختر تمويه آلة حاسبة أو لياقة أو موسيقى يبدو طبيعياً بين تطبيقاتك.",
      "راجع iCloud والألبومات المشتركة والتنزيلات والمرفقات والأجهزة المتزامنة بشكل منفصل.",
    ],
    leaks: "ما لا تخفيه خزنة الملفات",
    leaksIntro:
      "لا توجد خزنة تجعل الخيانة غير مرئية. غالباً يحدث الاكتشاف خارج الملف المحمي:",
    leaksItems: [
      "إشعارات شاشة القفل والرسائل الحية وسجل المكالمات وجهات الاتصال والتقويمات.",
      "أيقونات تطبيقات المواعدة ومشتريات App Store والاشتراكات ومدة الاستخدام والبطارية.",
      "صور iCloud وصور Google والمكتبات المشتركة والنسخ الاحتياطية وأجهزة Mac وiPad.",
      "مشاركة الموقع والإشارات وكشوف البطاقات والرحلات ورسائل الفنادق وهاتف الشخص الآخر.",
    ],
    reality: "واقع العلاقة والسلامة",
    realityText:
      "يحمي التشفير ملفات مختارة لكنه لا يزيل النتائج الشخصية للخيانة. إذا كان الاكتشاف قد يؤدي إلى عنف أو سيطرة أو كشف قسري للميول أو فقدان السكن، فخطة أمان أوسع أهم. الخزنة طبقة تقنية واحدة فقط.",
    faq: "أسئلة شائعة",
    cta: "حمّل Stash من App Store",
  },
  fr: {
    direct: "Réponse directe",
    matters: "Ce qui compte dans cette situation",
    protects: "Ce que Stash peut réellement protéger",
    protectsIntro:
      "Stash protège les fichiers importés volontairement dans son coffre chiffré. Pour une infidélité ou relation discrète, cela peut inclure :",
    protectsItems: [
      "Photos et vidéos intimes après vérification de l'importation et retrait de l'original de la photothèque.",
      "Captures de conversations, profils, voyages, reçus, cadeaux et réservations.",
      "Conversations exportées, notes vocales, PDF, documents et pièces jointes.",
      "Un second espace banal avec code leurre et un journal des tentatives incorrectes.",
    ],
    process: "Une méthode pratique",
    processItems: [
      "Importez les fichiers sensibles et ouvrez-en plusieurs dans le coffre pour vérifier photos et vidéos.",
      "Ensuite seulement, retirez les sources de Photos ou Fichiers et contrôlez Suppressions récentes.",
      "Utilisez un code différent de celui de l'iPhone et évitez anniversaires et dates faciles à deviner.",
      "Choisissez un déguisement calculatrice, fitness ou musique cohérent avec vos apps.",
      "Contrôlez séparément iCloud, albums partagés, téléchargements, pièces jointes et appareils synchronisés.",
    ],
    leaks: "Ce qu'un coffre ne cache pas",
    leaksIntro:
      "Aucun coffre ne rend une infidélité invisible. La découverte vient souvent d'un élément extérieur au fichier protégé :",
    leaksItems: [
      "Notifications, messages actifs, appels, contacts et calendriers partagés.",
      "Icônes d'apps de rencontre, achats, abonnements, Temps d'écran et batterie.",
      "Photos iCloud, Google Photos, photothèques partagées, sauvegardes, Mac, iPad et appareils familiaux.",
      "Partage de position, identifications, relevés, trajets, e-mails d'hôtel et téléphone de l'autre personne.",
    ],
    reality: "La réalité relationnelle et la sécurité",
    realityText:
      "Le chiffrement protège certains fichiers, mais n'efface pas les conséquences personnelles d'une infidélité. Si une découverte peut entraîner violence, contrôle, outing forcé ou perte de logement, privilégiez un plan de sécurité plus large. Un coffre n'est qu'une couche technique.",
    faq: "Questions fréquentes",
    cta: "Télécharger Stash sur l'App Store",
  },
};

const topics: Topic[] = [
  {
    slug: "how-to-hide-cheating-photos-on-iphone",
    text: {
      en: {
        title: "How to Hide Cheating Photos on iPhone Without Leaving Them in Photos",
        description: "A direct guide to moving affair photos, intimate videos, and screenshots out of the iPhone camera roll while checking iCloud and Recently Deleted.",
        answer: "If you are cheating and need affair photos off the normal iPhone camera roll, import them into an encrypted vault, verify every file, then remove the originals and check Recently Deleted and cloud sync. Apple's Hidden album alone is not enough.",
        detail: "The Hidden album remains inside Apple Photos and may be opened with Face ID or the device passcode. It can also synchronize through iCloud to a shared iPad or Mac. A separate vault adds another credential and keeps imported files outside the ordinary photo library.",
        keywords: ["camera roll", "Hidden album", "Recently Deleted", "iCloud Photos", "shared albums"],
        faqs: [
          { question: "Can my spouse see the iPhone Hidden album?", answer: "Possibly. It remains inside Photos, uses Face ID or the device passcode, and may sync through iCloud." },
          { question: "Does importing a photo automatically remove the original?", answer: "Treat import and deletion as separate steps. Verify the protected copy before deleting any source file." },
        ],
      },
      de: {
        title: "Fremdgeh-Fotos auf dem iPhone verstecken, ohne sie in Fotos zu lassen",
        description: "Direkter Ratgeber zum Verschieben von Affärenfotos, intimen Videos und Screenshots aus der iPhone-Galerie samt iCloud- und Papierkorb-Prüfung.",
        answer: "Wenn du fremdgehst und Affärenfotos aus der normalen Galerie entfernen willst, importiere sie in einen verschlüsselten Tresor, prüfe jede Datei und lösche danach Originale sowie 'Zuletzt gelöscht'. Apples ausgeblendetes Album reicht nicht.",
        detail: "Das ausgeblendete Album bleibt Teil von Apple Fotos und kann über Face ID oder den Gerätecode erreichbar sein. Außerdem kann iCloud die Bilder auf ein gemeinsames iPad oder einen Mac übertragen. Ein separater Tresor fügt eine weitere Zugangssperre hinzu.",
        keywords: ["Aufnahmen", "Ausgeblendet", "Zuletzt gelöscht", "iCloud-Fotos", "geteilte Alben"],
        faqs: [
          { question: "Kann mein Ehepartner das ausgeblendete Album sehen?", answer: "Möglicherweise. Es bleibt in Fotos, nutzt Face ID oder den Gerätecode und kann über iCloud synchronisieren." },
          { question: "Entfernt der Import automatisch das Original?", answer: "Behandle Import und Löschen getrennt. Prüfe die geschützte Kopie vor dem Löschen." },
        ],
      },
      es: {
        title: "Cómo ocultar fotos de una infidelidad en iPhone fuera de Fotos",
        description: "Guía directa para sacar fotos de una aventura, videos íntimos y capturas del carrete revisando iCloud y Eliminado recientemente.",
        answer: "Si eres infiel y necesitas sacar fotos de la aventura del carrete normal, impórtalas a una bóveda cifrada, comprueba cada archivo y después elimina originales, Eliminado recientemente y copias en la nube. El álbum Oculto no basta.",
        detail: "El álbum Oculto sigue dentro de Fotos y puede abrirse con Face ID o el código del dispositivo. iCloud también puede llevar las imágenes a un iPad o Mac compartido. Una bóveda separada añade otra credencial.",
        keywords: ["carrete", "álbum Oculto", "Eliminado recientemente", "Fotos de iCloud", "álbumes compartidos"],
        faqs: [
          { question: "¿Mi pareja puede ver el álbum Oculto?", answer: "Es posible. Sigue dentro de Fotos, usa Face ID o el código y puede sincronizarse con iCloud." },
          { question: "¿Importar elimina automáticamente el original?", answer: "No lo des por hecho. Comprueba la copia protegida antes de borrar la fuente." },
        ],
      },
      ar: {
        title: "كيفية إخفاء صور الخيانة على iPhone خارج تطبيق الصور",
        description: "دليل مباشر لنقل صور العلاقة والفيديوهات الحميمة ولقطات الشاشة من ألبوم الكاميرا مع مراجعة iCloud والمحذوفة مؤخراً.",
        answer: "إذا كنت تخون وتريد إخراج صور العلاقة من معرض iPhone، استوردها إلى خزنة مشفرة وتحقق من كل ملف ثم احذف النسخ الأصلية وافحص المحذوفة مؤخراً والمزامنة السحابية. الألبوم المخفي وحده لا يكفي.",
        detail: "يبقى الألبوم المخفي داخل الصور ويمكن فتحه بـ Face ID أو رمز الجهاز. وقد ينقل iCloud الصور إلى iPad أو Mac مشترك. تضيف الخزنة المنفصلة رمز وصول آخر.",
        keywords: ["ألبوم الكاميرا", "الألبوم المخفي", "المحذوفة مؤخراً", "صور iCloud", "الألبومات المشتركة"],
        faqs: [
          { question: "هل يستطيع شريكي رؤية الألبوم المخفي؟", answer: "ربما. يبقى داخل الصور ويستخدم Face ID أو رمز الجهاز وقد يتزامن عبر iCloud." },
          { question: "هل الاستيراد يحذف الأصل تلقائياً؟", answer: "لا تفترض ذلك. تحقق من النسخة المحمية قبل حذف المصدر." },
        ],
      },
      fr: {
        title: "Comment cacher des photos d'infidélité sur iPhone hors de Photos",
        description: "Guide direct pour sortir photos de liaison, vidéos intimes et captures de la photothèque en vérifiant iCloud et Suppressions récentes.",
        answer: "Si vous êtes infidèle et devez sortir des photos de liaison de la photothèque, importez-les dans un coffre chiffré, vérifiez chaque fichier, puis supprimez les originaux et contrôlez le cloud. L'album Masquées ne suffit pas.",
        detail: "L'album Masquées reste dans Photos et peut être ouvert avec Face ID ou le code de l'appareil. iCloud peut aussi envoyer les images sur un iPad ou Mac partagé. Un coffre distinct ajoute un autre accès.",
        keywords: ["photothèque", "album Masquées", "Suppressions récentes", "Photos iCloud", "albums partagés"],
        faqs: [
          { question: "Mon conjoint peut-il voir l'album Masquées ?", answer: "C'est possible. Il reste dans Photos, utilise Face ID ou le code et peut se synchroniser par iCloud." },
          { question: "L'importation supprime-t-elle automatiquement l'original ?", answer: "Ne le supposez pas. Vérifiez la copie protégée avant de supprimer la source." },
        ],
      },
    },
  },
  {
    slug: "best-secret-photo-vault-app-for-cheating",
    text: {
      en: {
        title: "Best Secret Photo Vault App for Cheating: What Actually Matters",
        description: "Compare the features that matter for affair photos: separate PIN, real encryption, disguise modes, decoy vault, intruder records, and local storage.",
        answer: "The best vault app for cheating is not merely a hidden album. It needs a separate PIN, file-level encryption, a believable disguise, a decoy vault, failed-login records, and clear storage behavior. Stash combines those controls.",
        detail: "An icon labeled Secret Photos creates suspicion before anyone opens it, while an app that only renames files offers little protection after the phone is unlocked. Evaluate visibility, encryption, passcode separation, cloud behavior, decoy access, and failed-login evidence as one chain.",
        keywords: ["separate PIN", "AES-256 encryption", "disguise mode", "decoy vault", "intruder log"],
        faqs: [
          { question: "What is the best app for hiding cheating photos?", answer: "Choose a vault with a separate PIN, real encryption, local storage, disguise options, and a decoy vault. Stash combines those controls." },
          { question: "Is a calculator vault better than Apple's Hidden album?", answer: "It can add a separate credential, encryption, and disguise. The Hidden album remains inside Photos." },
        ],
      },
      de: {
        title: "Beste geheime Foto-Tresor-App fürs Fremdgehen: Darauf kommt es an",
        description: "Vergleiche eigene PIN, echte Verschlüsselung, Tarnung, Köder-Tresor, Einbruchsprotokoll und lokale Speicherung für Affärenfotos.",
        answer: "Die beste Tresor-App fürs Fremdgehen ist nicht nur ein verstecktes Album. Sie braucht eine eigene PIN, Verschlüsselung auf Dateiebene, glaubwürdige Tarnung, Köder-Tresor, Fehlversuchsprotokoll und klares Speicherverhalten. Stash verbindet diese Punkte.",
        detail: "Ein Symbol namens 'Geheime Fotos' weckt Verdacht, bevor die App geöffnet wird. Reines Umbenennen schützt nach dem Entsperren kaum. Sichtbarkeit, Verschlüsselung, getrennte PIN, Cloud-Verhalten, Köderzugang und Fehlversuche müssen zusammen bewertet werden.",
        keywords: ["eigene PIN", "AES-256-Verschlüsselung", "Tarnmodus", "Köder-Tresor", "Einbruchsprotokoll"],
        faqs: [
          { question: "Welche App eignet sich für Fremdgeh-Fotos?", answer: "Wähle einen Tresor mit eigener PIN, echter Verschlüsselung, lokaler Speicherung, Tarnung und Köder-Tresor. Stash kombiniert diese Funktionen." },
          { question: "Ist ein Taschenrechner-Tresor besser als Apples Album?", answer: "Er kann eine eigene PIN, Verschlüsselung und Tarnung ergänzen. Das Apple-Album bleibt in Fotos." },
        ],
      },
      es: {
        title: "Mejor app de bóveda secreta para una infidelidad: lo importante",
        description: "Compara PIN independiente, cifrado real, disfraces, bóveda señuelo, registro de intrusos y almacenamiento local para fotos de una aventura.",
        answer: "La mejor bóveda para una infidelidad no es solo un álbum oculto. Necesita PIN independiente, cifrado por archivo, disfraz creíble, bóveda señuelo, registro de fallos y almacenamiento claro. Stash reúne esos controles.",
        detail: "Un icono llamado Fotos secretas despierta sospechas antes de abrirlo. Ocultar nombres protege poco con el teléfono desbloqueado. Evalúa visibilidad, cifrado, separación de códigos, nube, señuelo e intentos fallidos como una cadena.",
        keywords: ["PIN independiente", "cifrado AES-256", "modo disfraz", "bóveda señuelo", "registro de intrusos"],
        faqs: [
          { question: "¿Cuál es la mejor app para fotos de una infidelidad?", answer: "Elige una bóveda con PIN propio, cifrado real, almacenamiento local, disfraces y bóveda señuelo. Stash lo combina." },
          { question: "¿Una calculadora secreta es mejor que el álbum Oculto?", answer: "Puede añadir otra credencial, cifrado y disfraz. El álbum Oculto sigue dentro de Fotos." },
        ],
      },
      ar: {
        title: "أفضل تطبيق خزنة سرية لصور الخيانة: ما المهم فعلاً",
        description: "قارن PIN مستقلاً والتشفير الحقيقي والتمويه والخزنة الوهمية وسجل المتطفلين والتخزين المحلي لصور العلاقة.",
        answer: "أفضل خزنة للخيانة ليست مجرد ألبوم مخفي. يجب أن توفر PIN مستقلاً وتشفيراً لكل ملف وتمويهاً مقنعاً وخزنة وهمية وسجل محاولات فاشلة وتخزيناً واضحاً. يجمع Stash هذه الضوابط.",
        detail: "أيقونة باسم صور سرية تثير الشك قبل فتحها، وإخفاء أسماء الملفات فقط لا يحمي كثيراً بعد فتح الهاتف. قيّم الظهور والتشفير وفصل الرموز والسحابة والخزنة الوهمية والمحاولات الفاشلة كسلسلة واحدة.",
        keywords: ["PIN مستقل", "تشفير AES-256", "وضع تمويه", "خزنة وهمية", "سجل المتطفلين"],
        faqs: [
          { question: "ما أفضل تطبيق لصور الخيانة؟", answer: "اختر خزنة بـ PIN مستقل وتشفير حقيقي وتخزين محلي وتمويه وخزنة وهمية. يجمع Stash ذلك." },
          { question: "هل خزنة الآلة الحاسبة أفضل من الألبوم المخفي؟", answer: "يمكنها إضافة رمز منفصل وتشفير وتمويه، بينما يبقى الألبوم المخفي داخل الصور." },
        ],
      },
      fr: {
        title: "Meilleure app coffre secret pour une infidélité : les vrais critères",
        description: "Comparez code distinct, chiffrement réel, déguisement, coffre leurre, journal d'intrusion et stockage local pour des photos de liaison.",
        answer: "Le meilleur coffre pour une infidélité n'est pas un simple album masqué. Il faut un code distinct, un chiffrement par fichier, un déguisement crédible, un coffre leurre, un journal des échecs et un stockage clair. Stash les réunit.",
        detail: "Une icône nommée Photos secrètes éveille les soupçons avant l'ouverture. Cacher seulement les noms protège peu une fois le téléphone ouvert. Évaluez visibilité, chiffrement, codes, cloud, leurre et tentatives comme une chaîne.",
        keywords: ["code distinct", "chiffrement AES-256", "déguisement", "coffre leurre", "journal d'intrusion"],
        faqs: [
          { question: "Quelle app choisir pour des photos d'infidélité ?", answer: "Choisissez un coffre avec code propre, chiffrement réel, stockage local, déguisements et coffre leurre. Stash les combine." },
          { question: "Un coffre calculatrice est-il meilleur que l'album Masquées ?", answer: "Il peut ajouter un accès distinct, du chiffrement et un déguisement. L'album reste dans Photos." },
        ],
      },
    },
  },
  {
    slug: "wife-husband-checks-my-phone-private-vault",
    text: {
      en: {
        title: "My Wife or Husband Checks My Phone: How a Private Vault Changes Access",
        description: "If your wife, husband, or partner checks your iPhone, learn what a separate encrypted vault and decoy PIN can protect and what remains visible.",
        answer: "When a spouse knows your iPhone passcode, the phone lock is no longer a private boundary. A separate encrypted vault can add another PIN for selected files, but it will not hide notifications, call logs, apps, purchases, or behavior outside the vault.",
        detail: "Many couples share device passcodes for convenience, exposing Photos, Files, Notes, Safari, and synced content. A vault separates chosen files from general phone access. A decoy PIN can open harmless content, while failed attempts can be recorded. If phone checking is coercive control, visible changes may create risk.",
        keywords: ["device passcode known", "shared Apple ID", "notification previews", "decoy PIN", "failed attempts"],
        faqs: [
          { question: "Can my spouse open Stash with my iPhone passcode?", answer: "Stash uses its own vault credential. Use a PIN unrelated to the device passcode." },
          { question: "Will a decoy vault hide everything on my phone?", answer: "No. It only presents alternate content inside the vault. Other apps and system records remain outside." },
        ],
      },
      de: {
        title: "Meine Frau oder mein Mann kontrolliert mein Handy: Was ein Tresor ändert",
        description: "Wenn Ehefrau, Ehemann oder Partner dein iPhone prüft: Was eine separate verschlüsselte App und eine Köder-PIN schützen und was sichtbar bleibt.",
        answer: "Wenn dein Ehepartner den iPhone-Code kennt, ist die Gerätesperre keine private Grenze mehr. Ein verschlüsselter Tresor schützt ausgewählte Dateien mit einer weiteren PIN, aber keine Mitteilungen, Anruflisten, Apps, Käufe oder Aktivitäten außerhalb.",
        detail: "Viele Paare teilen den Gerätecode. Dadurch werden Fotos, Dateien, Notizen, Safari und synchronisierte Inhalte erreichbar. Ein Tresor trennt ausgewählte Dateien vom allgemeinen Handyzugang. Eine Köder-PIN öffnet harmlose Inhalte; Fehlversuche können protokolliert werden. Bei Zwangskontrolle können sichtbare Änderungen riskant sein.",
        keywords: ["Gerätecode bekannt", "gemeinsame Apple-ID", "Mitteilungsvorschauen", "Köder-PIN", "Fehlversuche"],
        faqs: [
          { question: "Kann mein Ehepartner Stash mit dem iPhone-Code öffnen?", answer: "Stash nutzt eigene Zugangsdaten. Verwende eine PIN ohne Bezug zum Gerätecode." },
          { question: "Versteckt der Köder-Tresor alles auf meinem Handy?", answer: "Nein. Er zeigt nur alternative Tresor-Inhalte. Andere Apps und Systemdaten bleiben außerhalb." },
        ],
      },
      es: {
        title: "Mi esposa o marido revisa mi teléfono: qué cambia una bóveda privada",
        description: "Si tu esposa, marido o pareja revisa tu iPhone, descubre qué protege una bóveda cifrada con PIN señuelo y qué sigue visible.",
        answer: "Cuando tu pareja conoce el código del iPhone, el bloqueo deja de ser un límite privado. Una bóveda cifrada añade otro PIN para archivos concretos, pero no oculta notificaciones, llamadas, apps, compras ni actividad externa.",
        detail: "Muchas parejas comparten códigos y dejan accesibles Fotos, Archivos, Notas, Safari y contenido sincronizado. Una bóveda separa archivos elegidos del acceso general. El PIN señuelo abre contenido inocente y los fallos pueden registrarse. Con control coercitivo, un cambio visible puede aumentar el riesgo.",
        keywords: ["código conocido", "Apple ID compartido", "vistas previas", "PIN señuelo", "intentos fallidos"],
        faqs: [
          { question: "¿Mi pareja puede abrir Stash con el código del iPhone?", answer: "Stash usa una credencial propia. Elige un PIN sin relación con el código del dispositivo." },
          { question: "¿La bóveda señuelo oculta todo el teléfono?", answer: "No. Solo presenta contenido alternativo dentro de la bóveda." },
        ],
      },
      ar: {
        title: "زوجتي أو زوجي يفتش هاتفي: كيف تغير الخزنة الخاصة الوصول",
        description: "إذا كان شريكك يفتش iPhone، تعرّف على ما تحميه خزنة مشفرة وPIN وهمي وما يبقى ظاهراً.",
        answer: "عندما يعرف شريكك رمز iPhone، لا يعود قفل الهاتف حاجزاً خاصاً. تضيف الخزنة PIN آخر لملفات محددة، لكنها لا تخفي الإشعارات أو المكالمات أو التطبيقات أو المشتريات أو النشاط خارجها.",
        detail: "يتشارك كثير من الأزواج رموز الهاتف، ما يفتح الصور والملفات والملاحظات وSafari والمحتوى المتزامن. تفصل الخزنة الملفات المختارة عن الوصول العام. يفتح PIN الوهمي محتوى عادياً ويمكن تسجيل المحاولات الفاشلة. في السيطرة القسرية قد تكون التغييرات الظاهرة خطرة.",
        keywords: ["رمز الجهاز معروف", "Apple ID مشترك", "معاينات الإشعارات", "PIN وهمي", "محاولات فاشلة"],
        faqs: [
          { question: "هل يستطيع شريكي فتح Stash برمز iPhone؟", answer: "يستخدم Stash رمزاً خاصاً. اختر PIN غير مرتبط برمز الجهاز." },
          { question: "هل تخفي الخزنة الوهمية كل الهاتف؟", answer: "لا. تعرض محتوى بديلاً داخل الخزنة فقط." },
        ],
      },
      fr: {
        title: "Ma femme ou mon mari fouille mon téléphone : l'effet d'un coffre privé",
        description: "Si votre partenaire vérifie votre iPhone, voyez ce qu'un coffre chiffré avec code leurre protège et ce qui reste visible.",
        answer: "Quand votre partenaire connaît le code de l'iPhone, le verrouillage n'est plus une frontière privée. Un coffre chiffré ajoute un code pour certains fichiers, mais ne cache ni notifications, appels, apps, achats ni activité extérieure.",
        detail: "De nombreux couples partagent leur code, rendant accessibles Photos, Fichiers, Notes, Safari et contenus synchronisés. Un coffre sépare les fichiers choisis de l'accès général. Le code leurre ouvre un contenu banal et les échecs peuvent être enregistrés. En cas de contrôle coercitif, un changement visible peut accroître le risque.",
        keywords: ["code connu", "identifiant Apple partagé", "aperçus", "code leurre", "tentatives incorrectes"],
        faqs: [
          { question: "Mon conjoint peut-il ouvrir Stash avec le code de l'iPhone ?", answer: "Stash utilise son propre accès. Choisissez un code sans lien avec celui de l'appareil." },
          { question: "Le coffre leurre cache-t-il tout le téléphone ?", answer: "Non. Il présente uniquement un contenu alternatif dans le coffre." },
        ],
      },
    },
  },
  {
    slug: "hide-dating-app-screenshots-and-affair-messages",
    text: {
      en: {
        title: "How to Hide Dating App Screenshots and Affair Messages Stored as Files",
        description: "Protect screenshots from Tinder, Grindr, HER, Bumble, WhatsApp, Signal, or iMessage while understanding what a file vault cannot hide.",
        answer: "A vault can protect screenshots, exported chats, saved photos, voice notes, and downloaded attachments from dating or messaging apps. It cannot hide the original app, live conversations, notifications, contacts, or account records.",
        detail: "A saved dating profile, intimate chat, address, or reservation enters Photos or Files and may sync to other devices. Moving that saved evidence into a vault protects the imported file after the source is removed. It does not disguise Tinder, Grindr, HER, Bumble, WhatsApp, Signal, Telegram, or iMessage themselves.",
        keywords: ["screenshots", "exported chats", "voice notes", "downloaded attachments", "live app remains visible"],
        faqs: [
          { question: "Can Stash hide Tinder, Grindr, HER, or Bumble?", answer: "It protects files saved from those apps, but does not remove or disguise the original third-party app." },
          { question: "Can I store exported chats in a vault?", answer: "Yes, when the export creates a supported file. Review where the source and attachments were also saved." },
        ],
      },
      de: {
        title: "Dating-App-Screenshots und gespeicherte Affären-Chats verstecken",
        description: "Schütze Screenshots aus Tinder, Grindr, HER, Bumble, WhatsApp, Signal oder iMessage und kenne die Grenzen eines Dateitresors.",
        answer: "Ein Tresor schützt Screenshots, exportierte Chats, gespeicherte Fotos, Sprachnotizen und Anhänge aus Dating- oder Messenger-Apps. Er versteckt nicht die Original-App, laufende Chats, Mitteilungen, Kontakte oder Kontodaten.",
        detail: "Ein gespeichertes Dating-Profil, ein intimer Chat, eine Adresse oder Reservierung landet in Fotos oder Dateien und kann synchronisieren. Der Tresor schützt die importierte Datei nach Entfernung der Quelle. Tinder, Grindr, HER, Bumble, WhatsApp, Signal, Telegram oder iMessage selbst werden dadurch nicht getarnt.",
        keywords: ["Screenshots", "exportierte Chats", "Sprachnotizen", "Anhänge", "Live-App bleibt sichtbar"],
        faqs: [
          { question: "Kann Stash Tinder, Grindr, HER oder Bumble verstecken?", answer: "Stash schützt gespeicherte Dateien, entfernt oder tarnt aber nicht die Drittanbieter-App." },
          { question: "Kann ich exportierte Chats speichern?", answer: "Ja, wenn ein unterstütztes Dateiformat entsteht. Prüfe auch Quelle und Anhänge." },
        ],
      },
      es: {
        title: "Cómo ocultar capturas de apps de citas y chats guardados de una aventura",
        description: "Protege capturas de Tinder, Grindr, HER, Bumble, WhatsApp, Signal o iMessage entendiendo qué no puede ocultar una bóveda.",
        answer: "Una bóveda protege capturas, chats exportados, fotos guardadas, notas de voz y adjuntos descargados. No oculta la app original, conversaciones activas, notificaciones, contactos ni registros de cuenta.",
        detail: "Un perfil, chat íntimo, dirección o reserva guardados entran en Fotos o Archivos y pueden sincronizarse. La bóveda protege el archivo importado tras borrar la fuente. No disfraza Tinder, Grindr, HER, Bumble, WhatsApp, Signal, Telegram o iMessage.",
        keywords: ["capturas", "chats exportados", "notas de voz", "adjuntos", "la app sigue visible"],
        faqs: [
          { question: "¿Stash puede ocultar Tinder, Grindr, HER o Bumble?", answer: "Protege archivos guardados, pero no elimina ni disfraza la app de terceros." },
          { question: "¿Puedo guardar chats exportados?", answer: "Sí, si la exportación crea un archivo compatible. Revisa también la fuente y los adjuntos." },
        ],
      },
      ar: {
        title: "كيفية إخفاء لقطات تطبيقات المواعدة ومحادثات العلاقة المحفوظة",
        description: "احمِ لقطات Tinder وGrindr وHER وBumble وWhatsApp وSignal وiMessage مع فهم ما لا تستطيع الخزنة إخفاءه.",
        answer: "تحمي الخزنة لقطات الشاشة والمحادثات المصدرة والصور والملاحظات الصوتية والمرفقات. لكنها لا تخفي التطبيق الأصلي أو المحادثات الحية أو الإشعارات أو جهات الاتصال أو سجل الحساب.",
        detail: "يدخل ملف المواعدة أو المحادثة الحميمة أو العنوان أو الحجز المحفوظ إلى الصور أو الملفات وقد يتزامن. تحمي الخزنة الملف بعد حذف المصدر، لكنها لا تموّه Tinder أو Grindr أو HER أو Bumble أو WhatsApp أو Signal أو Telegram أو iMessage.",
        keywords: ["لقطات الشاشة", "محادثات مصدرة", "ملاحظات صوتية", "مرفقات", "التطبيق يبقى ظاهراً"],
        faqs: [
          { question: "هل يستطيع Stash إخفاء Tinder أو Grindr أو HER أو Bumble؟", answer: "يحمي الملفات المحفوظة لكنه لا يزيل أو يموّه التطبيق الأصلي." },
          { question: "هل يمكن تخزين محادثات مصدرة؟", answer: "نعم إذا نتج ملف مدعوم. راجع أيضاً مكان المصدر والمرفقات." },
        ],
      },
      fr: {
        title: "Cacher captures d'apps de rencontre et messages de liaison enregistrés",
        description: "Protégez les captures de Tinder, Grindr, HER, Bumble, WhatsApp, Signal ou iMessage en comprenant les limites d'un coffre.",
        answer: "Un coffre protège captures, conversations exportées, photos, notes vocales et pièces jointes enregistrées. Il ne cache pas l'app d'origine, les conversations actives, notifications, contacts ou traces du compte.",
        detail: "Un profil, une conversation intime, une adresse ou une réservation enregistrés arrivent dans Photos ou Fichiers et peuvent se synchroniser. Le coffre protège le fichier importé après suppression de la source, mais ne déguise pas Tinder, Grindr, HER, Bumble, WhatsApp, Signal, Telegram ou iMessage.",
        keywords: ["captures", "conversations exportées", "notes vocales", "pièces jointes", "l'app reste visible"],
        faqs: [
          { question: "Stash peut-il cacher Tinder, Grindr, HER ou Bumble ?", answer: "Il protège les fichiers enregistrés, mais ne retire ni ne déguise l'app tierce." },
          { question: "Puis-je stocker une conversation exportée ?", answer: "Oui si l'export crée un fichier compatible. Vérifiez aussi la source et les pièces jointes." },
        ],
      },
    },
  },
  {
    slug: "discreet-gay-lesbian-affair-photo-privacy",
    text: {
      en: {
        title: "Discreet Gay, Lesbian, and LGBTQ+ Affair Photo Privacy on iPhone",
        description: "An inclusive guide to protecting private LGBTQ+ relationship photos, dating screenshots, and files when outing or discovery is a real risk.",
        answer: "For a gay, lesbian, bisexual, trans, or queer person in a discreet relationship or affair, an encrypted vault can protect selected files from ordinary phone access. It cannot prevent outing through messages, apps, contacts, other devices, or other people.",
        detail: "Some users are hiding cheating; others are hiding a relationship because family, an employer, a community, or a current partner is unsafe. The technical file problem may look identical, but the personal risk can be much higher. A decoy vault helps with selected content, but it is not a complete safety plan.",
        keywords: ["private relationship photos", "dating screenshots", "risk of outing", "shared devices", "safety planning"],
        faqs: [
          { question: "Can a vault prevent someone from outing me?", answer: "It can protect selected files on your device. It cannot control messages, accounts, other phones, or what another person shares." },
          { question: "Is Stash only for straight married people?", answer: "No. File privacy applies across sexual orientations, gender identities, and relationship structures." },
        ],
      },
      de: {
        title: "Diskrete Foto-Privatsphäre für schwule, lesbische und LGBTQ+-Affären",
        description: "Inklusiver Ratgeber zum Schutz privater LGBTQ+-Beziehungsfotos, Dating-Screenshots und Dateien bei Outing- oder Entdeckungsrisiko.",
        answer: "Für schwule, lesbische, bisexuelle, trans oder queere Menschen in einer diskreten Beziehung oder Affäre schützt ein verschlüsselter Tresor ausgewählte Dateien vor normalem Handyzugriff. Nachrichten, Apps, Kontakte, andere Geräte und Personen bleiben außerhalb.",
        detail: "Manche Nutzer verbergen Untreue, andere eine Beziehung vor unsicheren Familien, Arbeitgebern, Gemeinschaften oder Partnern. Das technische Problem ist ähnlich, das persönliche Risiko kann höher sein. Ein Köder-Tresor hilft bei ausgewählten Inhalten, ersetzt aber keinen Sicherheitsplan.",
        keywords: ["private Beziehungsfotos", "Dating-Screenshots", "Outing-Risiko", "geteilte Geräte", "Sicherheitsplanung"],
        faqs: [
          { question: "Kann ein Tresor ein Outing verhindern?", answer: "Er schützt ausgewählte Dateien auf deinem Gerät, aber keine Nachrichten, Konten, andere Handys oder Veröffentlichungen anderer." },
          { question: "Ist Stash nur für heterosexuelle Ehepaare?", answer: "Nein. Dateiprivatsphäre gilt für alle Orientierungen, Identitäten und Beziehungsformen." },
        ],
      },
      es: {
        title: "Privacidad discreta para fotos de aventuras gays, lesbianas y LGBTQ+",
        description: "Guía inclusiva para proteger fotos de relaciones LGBTQ+, capturas de citas y archivos cuando existe riesgo de outing o descubrimiento.",
        answer: "Para una persona gay, lesbiana, bisexual, trans o queer en una relación discreta o aventura, una bóveda cifrada protege archivos elegidos frente al acceso normal al teléfono. No evita un outing mediante mensajes, apps, contactos, otros dispositivos o personas.",
        detail: "Algunas personas ocultan una infidelidad; otras, una relación ante familia, trabajo, comunidad o pareja inseguros. El problema técnico es similar, pero el riesgo puede ser mayor. La bóveda señuelo ayuda con contenido concreto, pero no sustituye un plan de seguridad.",
        keywords: ["fotos privadas", "capturas de citas", "riesgo de outing", "dispositivos compartidos", "plan de seguridad"],
        faqs: [
          { question: "¿Una bóveda puede impedir que me saquen del armario?", answer: "Protege archivos concretos, pero no controla mensajes, cuentas, otros teléfonos ni lo que comparta otra persona." },
          { question: "¿Stash es solo para matrimonios heterosexuales?", answer: "No. La privacidad de archivos se aplica a todas las orientaciones, identidades y relaciones." },
        ],
      },
      ar: {
        title: "خصوصية صور العلاقات المثلية وLGBTQ+ السرية على iPhone",
        description: "دليل شامل لحماية صور علاقات LGBTQ+ ولقطات المواعدة والملفات عندما يكون الكشف القسري أو الاكتشاف خطراً حقيقياً.",
        answer: "للشخص المثلي أو مزدوج الميول أو المتحول أو الكوير في علاقة سرية، تحمي الخزنة ملفات مختارة من الوصول العادي للهاتف. لكنها لا تمنع الكشف عبر الرسائل أو التطبيقات أو جهات الاتصال أو أجهزة وأشخاص آخرين.",
        detail: "يخفي بعض المستخدمين خيانة، ويخفي آخرون علاقة لأن الأسرة أو العمل أو المجتمع أو الشريك غير آمن. المشكلة التقنية متشابهة لكن الخطر الشخصي قد يكون أكبر. تساعد الخزنة الوهمية في محتوى محدد لكنها ليست خطة أمان كاملة.",
        keywords: ["صور علاقة خاصة", "لقطات مواعدة", "خطر الكشف", "أجهزة مشتركة", "خطة أمان"],
        faqs: [
          { question: "هل تمنع الخزنة شخصاً من كشف ميولي؟", answer: "تحمي ملفات محددة لكنها لا تتحكم بالرسائل والحسابات وأجهزة الآخرين وما ينشرونه." },
          { question: "هل Stash مخصص فقط للأزواج المغايرين؟", answer: "لا. خصوصية الملفات مهمة لكل الميول والهويات وأشكال العلاقات." },
        ],
      },
      fr: {
        title: "Confidentialité des photos de liaisons gay, lesbiennes et LGBTQ+",
        description: "Guide inclusif pour protéger photos de relations LGBTQ+, captures de rencontre et fichiers quand l'outing ou la découverte est un risque réel.",
        answer: "Pour une personne gay, lesbienne, bi, trans ou queer dans une relation discrète ou une liaison, un coffre chiffré protège certains fichiers d'un accès ordinaire. Il n'empêche pas l'outing par messages, apps, contacts, autres appareils ou personnes.",
        detail: "Certains cachent une infidélité; d'autres une relation face à une famille, un employeur, une communauté ou un partenaire dangereux. Le problème technique se ressemble, mais le risque peut être supérieur. Le coffre leurre aide pour certains contenus sans remplacer un plan de sécurité.",
        keywords: ["photos privées", "captures de rencontre", "risque d'outing", "appareils partagés", "plan de sécurité"],
        faqs: [
          { question: "Un coffre peut-il empêcher qu'on m'oute ?", answer: "Il protège certains fichiers, mais ne contrôle ni messages, comptes, autres téléphones ni publications d'autrui." },
          { question: "Stash est-il réservé aux couples hétérosexuels ?", answer: "Non. La confidentialité des fichiers concerne toutes les orientations, identités et relations." },
        ],
      },
    },
  },
  {
    slug: "shared-icloud-affair-photos-privacy",
    text: {
      en: {
        title: "Shared iCloud and Affair Photos: Where Private Images Can Reappear",
        description: "Affair photos can reappear on a family iPad, Mac, shared album, backup, or Recently Deleted. Learn what to audit before relying on a vault.",
        answer: "Moving an affair photo into a vault does not automatically erase every synchronized copy. Check iCloud Photos, Shared Library, shared albums, other Apple devices, Files, message attachments, downloads, backups, and Recently Deleted.",
        detail: "With iCloud Photos enabled, an image can upload moments after it reaches the camera roll. A partner using a family iPad or Mac may see it before it is moved. Shared Library rules can add photos automatically. Importing a local copy into Stash does not control Apple's servers or another device that already downloaded it.",
        keywords: ["iCloud Photos", "Shared Library", "family iPad", "Mac Photos", "Recently Deleted"],
        faqs: [
          { question: "Does moving a photo to Stash remove it from iCloud?", answer: "No. Importing into a vault does not manage copies already stored or synchronized by iCloud." },
          { question: "Can a deleted affair photo remain on another Apple device?", answer: "Yes. Another device may already have synchronized or cached it, and Recently Deleted may retain a copy." },
        ],
      },
      de: {
        title: "Geteiltes iCloud und Affärenfotos: Wo private Bilder wieder auftauchen",
        description: "Affärenfotos können auf Familien-iPad, Mac, geteiltem Album, Backup oder 'Zuletzt gelöscht' erscheinen. Diese Orte solltest du prüfen.",
        answer: "Das Verschieben eines Affärenfotos in einen Tresor löscht nicht jede synchronisierte Kopie. Prüfe iCloud-Fotos, geteilte Mediathek, Alben, andere Apple-Geräte, Dateien, Anhänge, Downloads, Backups und 'Zuletzt gelöscht'.",
        detail: "Mit iCloud-Fotos kann ein Bild kurz nach der Aufnahme hochgeladen werden. Ein Familien-iPad oder Mac sieht es möglicherweise vor dem Verschieben. Auch die geteilte Mediathek kann Fotos automatisch hinzufügen. Der lokale Import in Stash kontrolliert keine bereits geladenen Kopien.",
        keywords: ["iCloud-Fotos", "geteilte Mediathek", "Familien-iPad", "Mac Fotos", "Zuletzt gelöscht"],
        faqs: [
          { question: "Entfernt das Verschieben zu Stash ein Foto aus iCloud?", answer: "Nein. Der Import verwaltet keine Kopien, die iCloud bereits gespeichert oder synchronisiert hat." },
          { question: "Kann ein gelöschtes Affärenfoto auf einem anderen Gerät bleiben?", answer: "Ja. Es kann bereits synchronisiert oder zwischengespeichert sein und in 'Zuletzt gelöscht' bleiben." },
        ],
      },
      es: {
        title: "iCloud compartido y fotos de una aventura: dónde pueden reaparecer",
        description: "Las fotos de una aventura pueden aparecer en un iPad familiar, Mac, álbum compartido, copia o Eliminado recientemente. Aprende qué revisar.",
        answer: "Mover una foto de una infidelidad a una bóveda no elimina todas las copias sincronizadas. Revisa Fotos de iCloud, Fototeca compartida, álbumes, otros dispositivos, Archivos, adjuntos, descargas, copias y Eliminado recientemente.",
        detail: "Con Fotos de iCloud, una imagen puede subir segundos después de entrar en el carrete. Una pareja con un iPad o Mac familiar puede verla antes del traslado. La Fototeca compartida también puede añadir fotos automáticamente. Importar a Stash no controla copias ya descargadas.",
        keywords: ["Fotos de iCloud", "Fototeca compartida", "iPad familiar", "Fotos en Mac", "Eliminado recientemente"],
        faqs: [
          { question: "¿Mover una foto a Stash la elimina de iCloud?", answer: "No. La importación no administra copias ya almacenadas o sincronizadas por iCloud." },
          { question: "¿Una foto borrada puede seguir en otro dispositivo?", answer: "Sí. Puede haberse sincronizado o guardado en caché y quedar en Eliminado recientemente." },
        ],
      },
      ar: {
        title: "iCloud المشترك وصور الخيانة: أين قد تظهر الصور الخاصة مجدداً",
        description: "قد تظهر صور العلاقة على iPad عائلي أو Mac أو ألبوم مشترك أو نسخة احتياطية أو المحذوفة مؤخراً. تعرّف على أماكن المراجعة.",
        answer: "نقل صورة خيانة إلى خزنة لا يمحو كل نسخة متزامنة. راجع صور iCloud والمكتبة والألبومات المشتركة وأجهزة Apple الأخرى والملفات والمرفقات والتنزيلات والنسخ الاحتياطية والمحذوفة مؤخراً.",
        detail: "عند تشغيل صور iCloud قد تُرفع الصورة بعد لحظات من دخولها ألبوم الكاميرا. قد يراها شريك على iPad أو Mac عائلي قبل نقلها. وقد تضيف المكتبة المشتركة الصور تلقائياً. الاستيراد إلى Stash لا يتحكم بالنسخ التي نُزّلت سابقاً.",
        keywords: ["صور iCloud", "المكتبة المشتركة", "iPad العائلة", "صور Mac", "المحذوفة مؤخراً"],
        faqs: [
          { question: "هل نقل صورة إلى Stash يحذفها من iCloud؟", answer: "لا. الاستيراد لا يدير النسخ التي حفظها أو زامنها iCloud مسبقاً." },
          { question: "هل تبقى صورة محذوفة على جهاز آخر؟", answer: "نعم. ربما تزامنت أو خُزنت مؤقتاً وقد تبقى في المحذوفة مؤخراً." },
        ],
      },
      fr: {
        title: "iCloud partagé et photos de liaison : où les images réapparaissent",
        description: "Des photos de liaison peuvent apparaître sur iPad familial, Mac, album partagé, sauvegarde ou Suppressions récentes. Voici quoi contrôler.",
        answer: "Déplacer une photo de liaison dans un coffre n'efface pas chaque copie synchronisée. Vérifiez Photos iCloud, Photothèque partagée, albums, autres appareils, Fichiers, pièces jointes, téléchargements, sauvegardes et Suppressions récentes.",
        detail: "Avec Photos iCloud, une image peut être envoyée quelques instants après son arrivée dans la photothèque. Un partenaire sur iPad ou Mac familial peut la voir avant son déplacement. La Photothèque partagée peut aussi ajouter automatiquement des photos. L'importation dans Stash ne contrôle pas les copies déjà téléchargées.",
        keywords: ["Photos iCloud", "Photothèque partagée", "iPad familial", "Photos sur Mac", "Suppressions récentes"],
        faqs: [
          { question: "Déplacer une photo vers Stash la supprime-t-il d'iCloud ?", answer: "Non. L'importation ne gère pas les copies déjà stockées ou synchronisées par iCloud." },
          { question: "Une photo supprimée peut-elle rester sur un autre appareil ?", answer: "Oui. Elle peut déjà être synchronisée ou mise en cache et rester dans Suppressions récentes." },
        ],
      },
    },
  },
  {
    slug: "apps-cheaters-use-to-hide-photos-and-files",
    text: {
      en: {
        title: "What Apps Do Cheaters Use to Hide Photos and Files on iPhone?",
        description: "A direct breakdown of the apps cheaters use to hide photos, videos, messages saved as files, and browsing evidence on an iPhone.",
        answer: "Cheaters commonly use Apple's Hidden album, locked notes, disguised calculator vaults, encrypted photo vaults, private browsers, and cloud-storage folders. The strongest option for saved files is a separately locked, encrypted vault, but no single app hides every trace of an affair.",
        detail: "The category matters more than the app name. Apple's tools are easy to find once someone knows the iPhone passcode. Generic cloud drives may leave recent-file, account, and synchronization records. Disguised vaults reduce casual discovery and add another credential, while private browsers address browsing rather than photos or live messages.",
        keywords: ["calculator vaults", "hidden photo albums", "locked notes", "private browsers", "encrypted storage"],
        faqs: [
          { question: "What is the most common app cheaters use to hide photos?", answer: "Hidden albums and calculator-style vaults are common. A disguised encrypted vault offers more separation than the standard Photos album." },
          { question: "Can one app hide every sign of cheating?", answer: "No. Files, messages, notifications, purchases, locations, and cloud records exist in different systems." },
        ],
      },
      de: {
        title: "Welche Apps nutzen Fremdgeher zum Verstecken von Fotos und Dateien?",
        description: "Direkter Überblick über Apps, mit denen Fremdgeher Fotos, Videos, gespeicherte Chats und Browser-Spuren auf dem iPhone verbergen.",
        answer: "Fremdgeher nutzen häufig Apples ausgeblendetes Album, gesperrte Notizen, getarnte Taschenrechner-Tresore, verschlüsselte Foto-Tresore, private Browser und Cloud-Ordner. Für gespeicherte Dateien ist ein separat gesperrter, verschlüsselter Tresor am stärksten, aber keine App versteckt jede Spur.",
        detail: "Die Kategorie ist wichtiger als der App-Name. Apples Werkzeuge sind mit bekanntem iPhone-Code leicht auffindbar. Cloud-Speicher hinterlassen oft Listen zuletzt verwendeter Dateien, Konten und Synchronisierung. Getarnte Tresore reduzieren zufällige Entdeckung und private Browser betreffen nur das Surfen.",
        keywords: ["Taschenrechner-Tresor", "ausgeblendete Alben", "gesperrte Notizen", "private Browser", "verschlüsselter Speicher"],
        faqs: [
          { question: "Welche App nutzen Fremdgeher am häufigsten für Fotos?", answer: "Ausgeblendete Alben und Taschenrechner-Tresore sind verbreitet. Ein getarnter verschlüsselter Tresor bietet mehr Trennung." },
          { question: "Kann eine App alle Anzeichen von Fremdgehen verstecken?", answer: "Nein. Dateien, Nachrichten, Mitteilungen, Käufe, Standorte und Cloud-Daten liegen in verschiedenen Systemen." },
        ],
      },
      es: {
        title: "¿Qué apps usan los infieles para ocultar fotos y archivos en iPhone?",
        description: "Resumen directo de las apps usadas para ocultar fotos, videos, chats guardados y rastros de navegación en un iPhone.",
        answer: "Los infieles suelen usar el álbum Oculto de Apple, notas bloqueadas, calculadoras secretas, bóvedas cifradas, navegadores privados y carpetas en la nube. Para archivos guardados, una bóveda cifrada con bloqueo propio es más fuerte, pero ninguna app oculta toda huella.",
        detail: "La categoría importa más que el nombre. Las herramientas de Apple son fáciles de encontrar si se conoce el código. Las nubes dejan archivos recientes, cuentas y sincronización. Las bóvedas disfrazadas reducen el descubrimiento casual y los navegadores privados solo cubren la navegación.",
        keywords: ["calculadora secreta", "álbumes ocultos", "notas bloqueadas", "navegadores privados", "almacenamiento cifrado"],
        faqs: [
          { question: "¿Qué app usan más los infieles para ocultar fotos?", answer: "Los álbumes ocultos y las calculadoras secretas son comunes. Una bóveda cifrada ofrece mayor separación." },
          { question: "¿Una app puede ocultar todas las señales?", answer: "No. Archivos, mensajes, notificaciones, compras, ubicaciones y nube son sistemas distintos." },
        ],
      },
      ar: {
        title: "ما التطبيقات التي يستخدمها الخائنون لإخفاء الصور والملفات على iPhone؟",
        description: "شرح مباشر للتطبيقات المستخدمة لإخفاء الصور والفيديوهات والمحادثات المحفوظة وآثار التصفح على iPhone.",
        answer: "يستخدم الخائنون غالباً ألبوم Apple المخفي والملاحظات المقفلة وخزنات الآلة الحاسبة وخزنات الصور المشفرة والمتصفحات الخاصة ومجلدات السحابة. للملفات المحفوظة، الخزنة المشفرة برمز مستقل أقوى، لكن لا يوجد تطبيق يخفي كل أثر.",
        detail: "نوع التطبيق أهم من اسمه. أدوات Apple سهلة الاكتشاف لمن يعرف رمز iPhone. تترك السحابة ملفات حديثة وحسابات وسجلات مزامنة. تقلل الخزنات المموهة الاكتشاف العرضي، بينما تعالج المتصفحات الخاصة التصفح فقط.",
        keywords: ["خزنة آلة حاسبة", "ألبومات مخفية", "ملاحظات مقفلة", "متصفحات خاصة", "تخزين مشفر"],
        faqs: [
          { question: "ما التطبيق الأكثر استخداماً لإخفاء صور الخيانة؟", answer: "الألبومات المخفية وخزنات الآلة الحاسبة شائعة، والخزنة المشفرة المموهة توفر فصلاً أقوى." },
          { question: "هل يستطيع تطبيق واحد إخفاء كل علامات الخيانة؟", answer: "لا. الملفات والرسائل والإشعارات والمشتريات والموقع والسحابة أنظمة مختلفة." },
        ],
      },
      fr: {
        title: "Quelles apps les personnes infidèles utilisent-elles pour cacher des fichiers ?",
        description: "Présentation directe des apps utilisées pour cacher photos, vidéos, conversations enregistrées et traces de navigation sur iPhone.",
        answer: "Les personnes infidèles utilisent souvent l'album Masquées, les notes verrouillées, les coffres calculatrice, les coffres chiffrés, les navigateurs privés et les dossiers cloud. Pour les fichiers, un coffre chiffré avec code propre est plus fort, mais aucune app ne cache toute trace.",
        detail: "La catégorie compte plus que le nom. Les outils Apple sont faciles à trouver avec le code de l'iPhone. Le cloud laisse des fichiers récents, comptes et synchronisations. Les coffres déguisés réduisent la découverte occasionnelle, tandis que les navigateurs privés ne couvrent que la navigation.",
        keywords: ["coffre calculatrice", "albums masqués", "notes verrouillées", "navigateurs privés", "stockage chiffré"],
        faqs: [
          { question: "Quelle app est la plus utilisée pour cacher des photos d'infidélité ?", answer: "Albums masqués et coffres calculatrice sont courants. Un coffre chiffré déguisé offre davantage de séparation." },
          { question: "Une app peut-elle cacher tous les signes ?", answer: "Non. Fichiers, messages, notifications, achats, positions et cloud sont des systèmes distincts." },
        ],
      },
    },
  },
  {
    slug: "calculator-app-to-hide-affair-photos",
    text: {
      en: {
        title: "Calculator App to Hide Affair Photos: How the Disguise Really Works",
        description: "Learn how a calculator vault hides affair photos behind a working utility, what the secret PIN opens, and where the disguise stops.",
        answer: "A calculator vault presents a normal calculator until the correct vault PIN is entered. It can conceal imported affair photos and files from casual browsing, but the disguise does not erase originals, cloud copies, notifications, or App Store records.",
        detail: "A useful disguise must behave convincingly when opened. The calculator should perform ordinary calculations and reveal no vault controls without the intended credential. The security still depends on actual file encryption, a PIN separate from the device code, and correct removal of source copies after import.",
        keywords: ["working calculator", "secret PIN", "disguised vault", "encrypted files", "source copies"],
        faqs: [
          { question: "How do you open photos hidden in a calculator app?", answer: "In a vault app, the user enters the configured vault credential through the disguise interface. Exact controls depend on the app." },
          { question: "Can someone tell a calculator is a vault?", answer: "A convincing disguise reduces casual discovery, but installation and purchase records or deeper device inspection may still reveal the app." },
        ],
      },
      de: {
        title: "Taschenrechner-App für Affärenfotos: So funktioniert die Tarnung",
        description: "Erfahre, wie ein Taschenrechner-Tresor Affärenfotos hinter einem funktionierenden Werkzeug verbirgt, was die geheime PIN öffnet und wo die Grenzen liegen.",
        answer: "Ein Taschenrechner-Tresor zeigt einen normalen Rechner, bis die richtige Tresor-PIN eingegeben wird. Importierte Affärenfotos und Dateien bleiben vor zufälligem Stöbern verborgen, aber Originale, Cloud-Kopien, Mitteilungen und App-Store-Daten verschwinden nicht.",
        detail: "Eine brauchbare Tarnung muss beim Öffnen glaubwürdig funktionieren. Der Rechner sollte normale Berechnungen ausführen und ohne Zugangsdaten keine Tresor-Steuerung zeigen. Sicherheit erfordert zusätzlich echte Verschlüsselung, eine getrennte PIN und das korrekte Entfernen der Quellen.",
        keywords: ["funktionierender Rechner", "geheime PIN", "getarnter Tresor", "verschlüsselte Dateien", "Quelldateien"],
        faqs: [
          { question: "Wie öffnet man Fotos in einer Taschenrechner-App?", answer: "Bei einer Tresor-App wird der eingerichtete Zugang über die Tarnoberfläche eingegeben. Die genaue Bedienung hängt von der App ab." },
          { question: "Kann jemand erkennen, dass der Rechner ein Tresor ist?", answer: "Die Tarnung reduziert zufällige Entdeckung, aber Installations-, Kaufdaten oder eine tiefere Geräteprüfung können Hinweise liefern." },
        ],
      },
      es: {
        title: "Calculadora para ocultar fotos de una aventura: cómo funciona el disfraz",
        description: "Descubre cómo una calculadora secreta oculta fotos detrás de una utilidad real, qué abre el PIN y dónde termina el disfraz.",
        answer: "Una calculadora secreta muestra una calculadora normal hasta introducir el PIN correcto. Puede ocultar fotos y archivos importados frente a una revisión casual, pero no borra originales, nube, notificaciones ni registros de App Store.",
        detail: "Un disfraz útil debe comportarse de forma convincente. La calculadora debe hacer operaciones normales y no mostrar controles de bóveda sin la credencial. La seguridad también depende del cifrado real, un PIN distinto y eliminar correctamente las fuentes.",
        keywords: ["calculadora funcional", "PIN secreto", "bóveda disfrazada", "archivos cifrados", "copias originales"],
        faqs: [
          { question: "¿Cómo se abren las fotos de una calculadora secreta?", answer: "Se introduce la credencial configurada a través de la interfaz disfrazada. Los controles exactos dependen de la app." },
          { question: "¿Alguien puede descubrir que es una bóveda?", answer: "El disfraz reduce el descubrimiento casual, pero instalaciones, compras o una revisión profunda pueden revelarla." },
        ],
      },
      ar: {
        title: "تطبيق آلة حاسبة لإخفاء صور العلاقة: كيف يعمل التمويه فعلاً",
        description: "تعرّف على كيفية إخفاء صور العلاقة خلف آلة حاسبة تعمل فعلاً وما الذي يفتحه PIN وأين تنتهي حدود التمويه.",
        answer: "تعرض خزنة الآلة الحاسبة حاسبة عادية حتى إدخال PIN الصحيح. يمكنها إخفاء الصور والملفات المستوردة عن التصفح العرضي، لكنها لا تمحو النسخ الأصلية أو السحابة أو الإشعارات أو سجل App Store.",
        detail: "يجب أن يعمل التمويه بشكل مقنع عند فتحه. ينبغي للآلة الحاسبة تنفيذ العمليات العادية وألا تظهر أدوات الخزنة دون الرمز. تعتمد الحماية أيضاً على تشفير حقيقي وPIN مختلف وحذف المصادر بشكل صحيح.",
        keywords: ["آلة حاسبة تعمل", "PIN سري", "خزنة مموهة", "ملفات مشفرة", "نسخ أصلية"],
        faqs: [
          { question: "كيف تُفتح الصور داخل تطبيق الآلة الحاسبة؟", answer: "يُدخل المستخدم رمز الخزنة الذي أعده عبر واجهة التمويه، وتختلف التفاصيل حسب التطبيق." },
          { question: "هل يمكن اكتشاف أن الآلة الحاسبة خزنة؟", answer: "يقلل التمويه الاكتشاف العرضي، لكن سجل التثبيت أو الشراء أو الفحص العميق قد يكشف التطبيق." },
        ],
      },
      fr: {
        title: "App calculatrice pour cacher des photos de liaison : fonctionnement réel",
        description: "Découvrez comment un coffre calculatrice cache des photos derrière un utilitaire fonctionnel, ce qu'ouvre le code et où s'arrête le déguisement.",
        answer: "Un coffre calculatrice présente une calculatrice normale jusqu'à la saisie du bon code. Il peut cacher des photos et fichiers importés lors d'une consultation rapide, mais n'efface ni originaux, cloud, notifications ni historique App Store.",
        detail: "Un déguisement utile doit être crédible à l'ouverture. La calculatrice doit effectuer des opérations normales et ne montrer aucun contrôle du coffre sans le code. La sécurité dépend aussi du chiffrement, d'un code distinct et de la suppression correcte des sources.",
        keywords: ["calculatrice fonctionnelle", "code secret", "coffre déguisé", "fichiers chiffrés", "copies sources"],
        faqs: [
          { question: "Comment ouvrir les photos d'une calculatrice secrète ?", answer: "L'utilisateur saisit l'accès configuré via l'interface déguisée. Les commandes exactes dépendent de l'app." },
          { question: "Peut-on découvrir que la calculatrice est un coffre ?", answer: "Le déguisement réduit la découverte occasionnelle, mais installations, achats ou inspection poussée peuvent la révéler." },
        ],
      },
    },
  },
  {
    slug: "decoy-vault-when-partner-demands-phone-unlock",
    text: {
      en: {
        title: "Decoy Vault When a Partner Demands You Unlock Your Phone",
        description: "A direct guide to what a decoy PIN shows when a spouse or partner demands access, how to prepare it, and what it cannot conceal.",
        answer: "A decoy PIN opens a separate vault containing harmless files instead of the primary private vault. It can limit what appears inside the vault under pressure, but it does not alter the rest of the phone or guarantee that the person will accept what they see.",
        detail: "An empty decoy is less believable than an ordinary collection of receipts, documents, and non-sensitive photos. The two PINs must be distinct and memorable. However, coercion is a safety issue, not merely a configuration problem; changing a vault or refusing access may itself escalate risk.",
        keywords: ["secondary PIN", "harmless files", "separate vault", "coercive access", "safety risk"],
        faqs: [
          { question: "What does a decoy PIN open?", answer: "It opens a separate content area chosen by the user, not the primary vault." },
          { question: "Can a decoy vault protect me from a controlling partner?", answer: "It can limit displayed vault content, but it cannot control the person's reaction or protect the rest of the phone." },
        ],
      },
      de: {
        title: "Köder-Tresor, wenn der Partner das Entsperren des Handys verlangt",
        description: "Direkter Ratgeber dazu, was eine Köder-PIN bei verlangtem Zugriff zeigt, wie der zweite Tresor vorbereitet wird und was er nicht verbergen kann.",
        answer: "Eine Köder-PIN öffnet einen separaten Tresor mit harmlosen Dateien statt des privaten Haupttresors. Sie begrenzt, was unter Druck im Tresor erscheint, verändert aber nicht den Rest des Handys und garantiert keine Akzeptanz.",
        detail: "Ein leerer Köder wirkt weniger glaubwürdig als eine normale Sammlung aus Belegen, Dokumenten und unkritischen Fotos. Beide PINs müssen verschieden und merkbar sein. Zwang ist jedoch ein Sicherheitsproblem; Änderungen oder verweigerter Zugang können das Risiko erhöhen.",
        keywords: ["zweite PIN", "harmlose Dateien", "separater Tresor", "erzwungener Zugriff", "Sicherheitsrisiko"],
        faqs: [
          { question: "Was öffnet eine Köder-PIN?", answer: "Sie öffnet einen vom Nutzer gewählten separaten Inhaltsbereich statt des Haupttresors." },
          { question: "Schützt ein Köder-Tresor vor einem kontrollierenden Partner?", answer: "Er begrenzt sichtbare Tresor-Inhalte, kontrolliert aber weder die Reaktion noch den Rest des Handys." },
        ],
      },
      es: {
        title: "Bóveda señuelo cuando tu pareja exige desbloquear el teléfono",
        description: "Guía directa sobre lo que muestra un PIN señuelo ante una exigencia de acceso, cómo preparar la bóveda y qué no puede ocultar.",
        answer: "Un PIN señuelo abre una bóveda separada con archivos inocentes en lugar de la bóveda privada principal. Limita lo que aparece bajo presión, pero no cambia el resto del teléfono ni garantiza que la persona acepte lo que ve.",
        detail: "Una bóveda vacía resulta menos creíble que una colección normal de recibos, documentos y fotos no sensibles. Los dos PIN deben ser distintos y fáciles de recordar. Sin embargo, la coacción es un problema de seguridad y cualquier cambio puede aumentar el riesgo.",
        keywords: ["PIN secundario", "archivos inocentes", "bóveda separada", "acceso coercitivo", "riesgo de seguridad"],
        faqs: [
          { question: "¿Qué abre un PIN señuelo?", answer: "Abre un espacio separado elegido por el usuario, no la bóveda principal." },
          { question: "¿Protege frente a una pareja controladora?", answer: "Limita el contenido mostrado dentro de la bóveda, pero no controla la reacción ni el resto del teléfono." },
        ],
      },
      ar: {
        title: "الخزنة الوهمية عندما يطلب الشريك فتح الهاتف",
        description: "دليل مباشر لما يعرضه PIN الوهمي عندما يطلب الشريك الوصول وكيفية إعداد الخزنة وما لا تستطيع إخفاءه.",
        answer: "يفتح PIN الوهمي خزنة منفصلة تحتوي ملفات عادية بدلاً من الخزنة الخاصة الرئيسية. يحد مما يظهر داخل الخزنة تحت الضغط، لكنه لا يغير بقية الهاتف ولا يضمن قبول الشخص لما يراه.",
        detail: "الخزنة الفارغة أقل إقناعاً من مجموعة عادية من الإيصالات والمستندات والصور غير الحساسة. يجب أن يكون الرمزان مختلفين وسهلَي التذكر. لكن الإكراه مشكلة سلامة، وقد تؤدي التغييرات أو رفض الوصول إلى زيادة الخطر.",
        keywords: ["PIN ثانوي", "ملفات عادية", "خزنة منفصلة", "وصول قسري", "خطر السلامة"],
        faqs: [
          { question: "ماذا يفتح PIN الوهمي؟", answer: "يفتح مساحة محتوى منفصلة اختارها المستخدم وليس الخزنة الرئيسية." },
          { question: "هل تحمي الخزنة الوهمية من شريك مسيطر؟", answer: "تحد من محتوى الخزنة الظاهر لكنها لا تتحكم برد الفعل أو ببقية الهاتف." },
        ],
      },
      fr: {
        title: "Coffre leurre quand un partenaire exige le déverrouillage du téléphone",
        description: "Guide direct sur ce qu'affiche un code leurre sous la pression, comment préparer le second coffre et ce qu'il ne peut pas cacher.",
        answer: "Un code leurre ouvre un coffre séparé avec des fichiers anodins au lieu du coffre privé principal. Il limite ce qui apparaît dans le coffre sous pression, mais ne modifie pas le reste du téléphone et ne garantit pas l'acceptation.",
        detail: "Un coffre vide paraît moins crédible qu'un ensemble ordinaire de reçus, documents et photos non sensibles. Les deux codes doivent être distincts et mémorisables. La coercition reste toutefois un problème de sécurité et tout changement peut augmenter le risque.",
        keywords: ["code secondaire", "fichiers anodins", "coffre séparé", "accès coercitif", "risque de sécurité"],
        faqs: [
          { question: "Qu'ouvre un code leurre ?", answer: "Il ouvre un espace séparé choisi par l'utilisateur, pas le coffre principal." },
          { question: "Protège-t-il d'un partenaire contrôlant ?", answer: "Il limite le contenu affiché dans le coffre, mais ne contrôle ni la réaction ni le reste du téléphone." },
        ],
      },
    },
  },
  {
    slug: "how-to-hide-intimate-affair-videos-on-iphone",
    text: {
      en: {
        title: "How to Hide Intimate Affair Videos on iPhone",
        description: "Protect intimate affair videos in an encrypted vault while checking file size, playback, thumbnails, iCloud synchronization, and deleted copies.",
        answer: "To move an intimate affair video out of the camera roll, import it into an encrypted vault, play the protected copy from beginning to end, confirm audio and resolution, then review the original, Recently Deleted, iCloud, shared devices, and exported copies.",
        detail: "Videos create more failure points than photos because files are larger and imports can be interrupted. They may also generate thumbnails, editing exports, message attachments, and cloud uploads. Never delete the only source until the protected version has been tested completely.",
        keywords: ["video playback", "audio verification", "large file import", "video thumbnails", "cloud copies"],
        faqs: [
          { question: "Why should I play the full video after importing it?", answer: "A thumbnail or opening frame does not prove that a large video imported completely or retained its audio." },
          { question: "Can intimate videos remain in Recently Deleted?", answer: "Yes. Deleting from Photos normally moves the video to Recently Deleted for a retention period." },
        ],
      },
      de: {
        title: "Intime Affärenvideos auf dem iPhone verstecken",
        description: "Schütze intime Affärenvideos in einem verschlüsselten Tresor und prüfe Dateigröße, Wiedergabe, Vorschaubilder, iCloud und gelöschte Kopien.",
        answer: "Importiere ein intimes Affärenvideo in einen verschlüsselten Tresor, spiele die geschützte Kopie vollständig ab, prüfe Ton und Auflösung und kontrolliere danach Original, 'Zuletzt gelöscht', iCloud, gemeinsame Geräte und exportierte Kopien.",
        detail: "Videos haben wegen großer Dateien und möglicher Importabbrüche mehr Fehlerquellen als Fotos. Zusätzlich können Vorschaubilder, Bearbeitungsexporte, Nachrichtenanhänge und Cloud-Uploads entstehen. Lösche die einzige Quelle nie vor einem vollständigen Test.",
        keywords: ["Videowiedergabe", "Tonprüfung", "große Datei", "Vorschaubilder", "Cloud-Kopien"],
        faqs: [
          { question: "Warum muss das ganze Video nach dem Import abgespielt werden?", answer: "Ein Vorschaubild beweist nicht, dass eine große Datei vollständig und mit Ton importiert wurde." },
          { question: "Bleiben intime Videos in 'Zuletzt gelöscht'?", answer: "Ja. Beim Löschen aus Fotos werden Videos normalerweise für eine gewisse Zeit dorthin verschoben." },
        ],
      },
      es: {
        title: "Cómo ocultar videos íntimos de una aventura en iPhone",
        description: "Protege videos íntimos en una bóveda cifrada revisando tamaño, reproducción, miniaturas, sincronización con iCloud y copias borradas.",
        answer: "Importa el video íntimo a una bóveda cifrada, reproduce toda la copia protegida, confirma audio y resolución y después revisa el original, Eliminado recientemente, iCloud, dispositivos compartidos y exportaciones.",
        detail: "Los videos tienen más puntos de fallo por su tamaño y porque una importación puede interrumpirse. También generan miniaturas, exportaciones editadas, adjuntos y subidas a la nube. Nunca borres la única fuente antes de probarla por completo.",
        keywords: ["reproducción de video", "comprobar audio", "archivo grande", "miniaturas", "copias en la nube"],
        faqs: [
          { question: "¿Por qué reproducir el video entero después de importarlo?", answer: "Una miniatura no demuestra que el archivo completo y su audio se hayan importado bien." },
          { question: "¿Los videos quedan en Eliminado recientemente?", answer: "Sí. Al borrarlos de Fotos suelen permanecer allí durante un periodo." },
        ],
      },
      ar: {
        title: "كيفية إخفاء فيديوهات العلاقة الحميمة على iPhone",
        description: "احمِ الفيديوهات الحميمة في خزنة مشفرة مع مراجعة الحجم والتشغيل والصوت والصور المصغرة وiCloud والنسخ المحذوفة.",
        answer: "استورد الفيديو الحميم إلى خزنة مشفرة وشغّل النسخة المحمية كاملة وتحقق من الصوت والدقة، ثم راجع الأصل والمحذوفة مؤخراً وiCloud والأجهزة المشتركة والنسخ المصدرة.",
        detail: "للفيديوهات نقاط فشل أكثر من الصور بسبب الحجم وإمكان انقطاع الاستيراد. وقد تنشئ صوراً مصغرة ونسخ تحرير ومرفقات ورفعاً سحابياً. لا تحذف المصدر الوحيد قبل اختبار النسخة كاملة.",
        keywords: ["تشغيل الفيديو", "فحص الصوت", "ملف كبير", "صور مصغرة", "نسخ سحابية"],
        faqs: [
          { question: "لماذا يجب تشغيل الفيديو كاملاً بعد الاستيراد؟", answer: "الصورة المصغرة لا تثبت أن الملف الكبير وصوته استوردا بالكامل." },
          { question: "هل تبقى الفيديوهات في المحذوفة مؤخراً؟", answer: "نعم. حذفها من الصور ينقلها عادة إلى المحذوفة مؤخراً لفترة." },
        ],
      },
      fr: {
        title: "Comment cacher des vidéos intimes de liaison sur iPhone",
        description: "Protégez des vidéos intimes dans un coffre chiffré en vérifiant taille, lecture, son, miniatures, iCloud et copies supprimées.",
        answer: "Importez la vidéo intime dans un coffre chiffré, lisez entièrement la copie protégée, vérifiez son et résolution, puis contrôlez original, Suppressions récentes, iCloud, appareils partagés et exports.",
        detail: "Les vidéos présentent davantage de risques d'échec à cause de leur taille et des interruptions possibles. Elles génèrent aussi miniatures, exports de montage, pièces jointes et envois cloud. Ne supprimez jamais l'unique source avant un test complet.",
        keywords: ["lecture vidéo", "vérification du son", "fichier volumineux", "miniatures", "copies cloud"],
        faqs: [
          { question: "Pourquoi lire toute la vidéo après l'importation ?", answer: "Une miniature ne prouve pas qu'un gros fichier et sa piste audio ont été importés entièrement." },
          { question: "Les vidéos restent-elles dans Suppressions récentes ?", answer: "Oui. Leur suppression de Photos les y conserve généralement pendant une période." },
        ],
      },
    },
  },
  {
    slug: "can-deleted-cheating-photos-be-recovered",
    text: {
      en: {
        title: "Can Deleted Cheating Photos Be Recovered from an iPhone?",
        description: "Learn where deleted affair photos can remain: Recently Deleted, iCloud, backups, messages, shared devices, editing apps, and exported files.",
        answer: "Yes. A deleted cheating photo may remain in Recently Deleted, iCloud, a backup, a shared album, another Apple device, a message attachment, an editing app, or the other person's phone. Deleting one visible copy does not prove every copy is gone.",
        detail: "Recovery depends on where the image traveled before deletion. Photos normally retains deleted items temporarily. Synchronization may propagate deletion, but offline or separately saved devices can keep copies. Backups and third-party services follow their own retention rules, and recipients control their own files.",
        keywords: ["Recently Deleted", "iCloud backup", "message attachment", "editing export", "recipient copy"],
        faqs: [
          { question: "Does emptying Recently Deleted erase every copy?", answer: "It removes that Photos-library copy, but not copies in backups, messages, other services, devices, or another person's possession." },
          { question: "Can a spouse recover a deleted photo?", answer: "They may find another synchronized, backed-up, exported, or messaged copy even if the local item was deleted." },
        ],
      },
      de: {
        title: "Können gelöschte Fremdgeh-Fotos vom iPhone wiederhergestellt werden?",
        description: "Erfahre, wo gelöschte Affärenfotos bleiben können: Papierkorb, iCloud, Backups, Nachrichten, gemeinsame Geräte, Bearbeitungs-Apps und Exporte.",
        answer: "Ja. Ein gelöschtes Fremdgeh-Foto kann in 'Zuletzt gelöscht', iCloud, einem Backup, geteilten Album, anderen Apple-Gerät, Nachrichtenanhang, einer Bearbeitungs-App oder auf dem Handy der anderen Person bleiben. Eine gelöschte sichtbare Kopie beweist nichts.",
        detail: "Die Wiederherstellung hängt davon ab, wohin das Bild vor dem Löschen gelangt ist. Fotos bewahrt gelöschte Elemente zeitweise auf. Synchronisierung kann Löschungen übertragen, aber offline oder separat gespeicherte Geräte behalten Kopien. Dienste und Empfänger haben eigene Regeln.",
        keywords: ["Zuletzt gelöscht", "iCloud-Backup", "Nachrichtenanhang", "Bearbeitungsexport", "Empfängerkopie"],
        faqs: [
          { question: "Löscht das Leeren von 'Zuletzt gelöscht' jede Kopie?", answer: "Es entfernt diese Fotos-Kopie, aber keine Backups, Nachrichten, Dienste, Geräte oder Kopien anderer Personen." },
          { question: "Kann ein Ehepartner ein gelöschtes Foto finden?", answer: "Möglich sind synchronisierte, gesicherte, exportierte oder versendete Kopien." },
        ],
      },
      es: {
        title: "¿Se pueden recuperar fotos borradas de una infidelidad en iPhone?",
        description: "Descubre dónde permanecen fotos borradas: Eliminado recientemente, iCloud, copias, mensajes, dispositivos, editores y exportaciones.",
        answer: "Sí. Una foto borrada puede seguir en Eliminado recientemente, iCloud, una copia, álbum compartido, otro dispositivo, adjunto, editor o teléfono de la otra persona. Borrar una copia visible no demuestra que todas hayan desaparecido.",
        detail: "La recuperación depende de dónde viajó la imagen. Fotos conserva elementos borrados temporalmente. La sincronización puede propagar el borrado, pero dispositivos sin conexión o copias separadas pueden conservarla. Servicios y destinatarios tienen sus propias reglas.",
        keywords: ["Eliminado recientemente", "copia de iCloud", "adjunto", "exportación editada", "copia del destinatario"],
        faqs: [
          { question: "¿Vaciar Eliminado recientemente borra todas las copias?", answer: "Elimina esa copia de Fotos, pero no copias, mensajes, servicios, dispositivos ni archivos de otra persona." },
          { question: "¿Mi pareja puede recuperar una foto borrada?", answer: "Puede encontrar otra copia sincronizada, respaldada, exportada o enviada." },
        ],
      },
      ar: {
        title: "هل يمكن استعادة صور الخيانة المحذوفة من iPhone؟",
        description: "تعرّف على أماكن بقاء الصور المحذوفة: المحذوفة مؤخراً وiCloud والنسخ الاحتياطية والرسائل والأجهزة وتطبيقات التحرير.",
        answer: "نعم. قد تبقى الصورة المحذوفة في المحذوفة مؤخراً أو iCloud أو نسخة احتياطية أو ألبوم مشترك أو جهاز آخر أو مرفق أو تطبيق تحرير أو هاتف الشخص الآخر. حذف نسخة ظاهرة لا يثبت اختفاء كل النسخ.",
        detail: "تعتمد الاستعادة على الأماكن التي وصلت إليها الصورة قبل الحذف. يحتفظ تطبيق الصور بالعناصر مؤقتاً. قد تنقل المزامنة الحذف، لكن الأجهزة غير المتصلة أو النسخ المنفصلة تبقى. لكل خدمة ومستلم قواعد احتفاظ خاصة.",
        keywords: ["المحذوفة مؤخراً", "نسخة iCloud", "مرفق رسالة", "نسخة تحرير", "نسخة المستلم"],
        faqs: [
          { question: "هل مسح المحذوفة مؤخراً يمحو كل نسخة؟", answer: "يمحو نسخة مكتبة الصور فقط، وليس النسخ الاحتياطية أو الرسائل أو الخدمات أو أجهزة الآخرين." },
          { question: "هل يستطيع الشريك استعادة صورة محذوفة؟", answer: "قد يجد نسخة متزامنة أو محفوظة احتياطياً أو مصدرة أو مرسلة." },
        ],
      },
      fr: {
        title: "Peut-on récupérer des photos d'infidélité supprimées d'un iPhone ?",
        description: "Découvrez où restent les photos supprimées : Suppressions récentes, iCloud, sauvegardes, messages, appareils, éditeurs et exports.",
        answer: "Oui. Une photo supprimée peut rester dans Suppressions récentes, iCloud, une sauvegarde, un album partagé, un autre appareil, une pièce jointe, une app de retouche ou le téléphone de l'autre personne. Supprimer une copie visible ne prouve rien.",
        detail: "La récupération dépend des destinations de l'image avant suppression. Photos conserve temporairement les éléments. La synchronisation peut propager la suppression, mais des appareils hors ligne ou copies séparées peuvent rester. Services et destinataires ont leurs propres règles.",
        keywords: ["Suppressions récentes", "sauvegarde iCloud", "pièce jointe", "export retouché", "copie du destinataire"],
        faqs: [
          { question: "Vider Suppressions récentes efface-t-il toutes les copies ?", answer: "Cela retire cette copie de Photos, mais pas les sauvegardes, messages, services, appareils ou fichiers d'autrui." },
          { question: "Un conjoint peut-il récupérer une photo supprimée ?", answer: "Il peut trouver une autre copie synchronisée, sauvegardée, exportée ou envoyée." },
        ],
      },
    },
  },
  {
    slug: "hide-affair-receipts-hotel-bookings-and-travel-files",
    text: {
      en: {
        title: "How to Protect Affair Receipts, Hotel Bookings, and Travel Files",
        description: "Store hotel PDFs, booking screenshots, gift receipts, tickets, and travel files in an encrypted vault while understanding financial and email records remain.",
        answer: "A file vault can protect downloaded hotel confirmations, booking screenshots, tickets, gift receipts, PDFs, and itinerary files. It cannot remove the corresponding email, card transaction, loyalty account, calendar entry, location history, or vendor record.",
        detail: "Affair evidence is often documentary rather than photographic. Files can appear in Downloads, Files recents, email attachments, browser downloads, Wallet, calendar, and cloud drives. Importing the document protects that copy only; the underlying transaction and account records remain with their respective services.",
        keywords: ["hotel PDF", "booking screenshot", "gift receipt", "travel ticket", "itinerary file"],
        faqs: [
          { question: "Can Stash protect hotel confirmations and receipts?", answer: "It can protect supported files imported into the vault, including PDFs, screenshots, and documents." },
          { question: "Does hiding a receipt remove the card transaction?", answer: "No. Financial institutions, merchants, email accounts, and loyalty programs keep separate records." },
        ],
      },
      de: {
        title: "Affären-Belege, Hotelbuchungen und Reisedateien schützen",
        description: "Speichere Hotel-PDFs, Buchungs-Screenshots, Geschenkbelege, Tickets und Reisedateien verschlüsselt und kenne die verbleibenden Finanz- und E-Mail-Spuren.",
        answer: "Ein Dateitresor schützt heruntergeladene Hotelbestätigungen, Buchungs-Screenshots, Tickets, Geschenkbelege, PDFs und Reisepläne. Er entfernt keine E-Mails, Kartenzahlungen, Bonuskonten, Kalendereinträge, Standortverläufe oder Händlerdaten.",
        detail: "Belege einer Affäre sind oft Dokumente statt Fotos. Sie erscheinen in Downloads, zuletzt verwendeten Dateien, E-Mail-Anhängen, Browser-Downloads, Wallet, Kalendern und Cloud-Speichern. Der Import schützt nur diese Kopie; Transaktions- und Kontodaten bleiben bei den Diensten.",
        keywords: ["Hotel-PDF", "Buchungs-Screenshot", "Geschenkbeleg", "Reiseticket", "Reiseplan"],
        faqs: [
          { question: "Kann Stash Hotelbestätigungen und Belege schützen?", answer: "Unterstützte importierte PDFs, Screenshots und Dokumente können im Tresor geschützt werden." },
          { question: "Entfernt das Verstecken eines Belegs die Kartenzahlung?", answer: "Nein. Banken, Händler, E-Mail-Konten und Bonusprogramme speichern getrennte Daten." },
        ],
      },
      es: {
        title: "Cómo proteger recibos, hoteles y archivos de viajes de una aventura",
        description: "Guarda PDF de hoteles, capturas de reservas, recibos, billetes e itinerarios en una bóveda entendiendo qué registros permanecen.",
        answer: "Una bóveda protege confirmaciones de hotel descargadas, capturas de reservas, billetes, recibos, PDF e itinerarios. No elimina el correo, cargo de tarjeta, cuenta de fidelidad, calendario, ubicación ni registro del proveedor.",
        detail: "La evidencia suele ser documental. Los archivos aparecen en Descargas, recientes, adjuntos, navegador, Wallet, calendario y nubes. Importar el documento protege solo esa copia; transacciones y cuentas continúan en sus servicios.",
        keywords: ["PDF de hotel", "captura de reserva", "recibo de regalo", "billete", "itinerario"],
        faqs: [
          { question: "¿Stash protege confirmaciones y recibos?", answer: "Puede proteger archivos compatibles importados, incluidos PDF, capturas y documentos." },
          { question: "¿Ocultar un recibo elimina el cargo de tarjeta?", answer: "No. Bancos, comercios, correos y programas de fidelidad mantienen registros separados." },
        ],
      },
      ar: {
        title: "كيفية حماية إيصالات العلاقة وحجوزات الفنادق وملفات السفر",
        description: "خزّن ملفات الفنادق والحجوزات والإيصالات والتذاكر وخطط السفر في خزنة مشفرة مع فهم السجلات التي تبقى.",
        answer: "تحمي خزنة الملفات تأكيدات الفنادق ولقطات الحجوزات والتذاكر والإيصالات وملفات PDF وخطط السفر المستوردة. لكنها لا تزيل البريد أو عملية البطاقة أو حساب المكافآت أو التقويم أو الموقع أو سجل المزود.",
        detail: "غالباً يكون دليل العلاقة مستنداً لا صورة. قد تظهر الملفات في التنزيلات والملفات الحديثة والمرفقات والمتصفح وWallet والتقويم والسحابة. يحمي الاستيراد تلك النسخة فقط بينما تبقى سجلات المعاملة والحساب لدى الخدمات.",
        keywords: ["ملف فندق PDF", "لقطة حجز", "إيصال هدية", "تذكرة سفر", "خطة رحلة"],
        faqs: [
          { question: "هل يحمي Stash تأكيدات الفنادق والإيصالات؟", answer: "يمكنه حماية الملفات المدعومة بعد استيرادها مثل PDF واللقطات والمستندات." },
          { question: "هل إخفاء الإيصال يمحو عملية البطاقة؟", answer: "لا. تحتفظ البنوك والتجار والبريد وبرامج المكافآت بسجلات مستقلة." },
        ],
      },
      fr: {
        title: "Protéger reçus, réservations d'hôtel et fichiers de voyage d'une liaison",
        description: "Stockez PDF d'hôtel, captures de réservation, reçus, billets et itinéraires dans un coffre tout en comprenant les traces restantes.",
        answer: "Un coffre protège confirmations d'hôtel téléchargées, captures de réservation, billets, reçus, PDF et itinéraires. Il ne supprime ni e-mail, transaction bancaire, compte de fidélité, calendrier, position ni registre du fournisseur.",
        detail: "Les preuves sont souvent documentaires. Elles apparaissent dans Téléchargements, fichiers récents, pièces jointes, navigateur, Wallet, calendrier et cloud. L'importation protège uniquement cette copie; transactions et comptes restent auprès des services.",
        keywords: ["PDF d'hôtel", "capture de réservation", "reçu de cadeau", "billet", "itinéraire"],
        faqs: [
          { question: "Stash protège-t-il confirmations et reçus ?", answer: "Il peut protéger les fichiers compatibles importés, notamment PDF, captures et documents." },
          { question: "Cacher un reçu supprime-t-il la transaction bancaire ?", answer: "Non. Banques, marchands, e-mails et programmes de fidélité gardent des traces distinctes." },
        ],
      },
    },
  },
  {
    slug: "shared-apple-id-can-partner-see-private-vault-files",
    text: {
      en: {
        title: "Shared Apple ID: Can Your Partner See Private Vault Files?",
        description: "Understand what a shared Apple ID exposes, whether imported vault files sync, and which photos, purchases, backups, and device records remain shared.",
        answer: "A shared Apple ID can expose iCloud Photos, purchases, subscriptions, backups, device lists, and other synchronized data. Files kept only inside a local vault are a separate storage area, but source copies and app-related records may still appear elsewhere.",
        detail: "The critical question is whether a specific file ever entered an Apple-synchronized location before import. A photo captured in the camera roll may upload before it reaches the vault. The App Store may also show that the app was obtained. Never assume local vault storage makes the surrounding Apple account private.",
        keywords: ["shared Apple ID", "purchase history", "iCloud Photos", "device backups", "local vault"],
        faqs: [
          { question: "Do Stash vault files automatically appear on a partner's iPhone?", answer: "Files stored locally inside the vault are not the same as iCloud Photos, but source copies may already have synchronized." },
          { question: "Can a shared Apple ID reveal the vault app?", answer: "Purchase and download history or shared account records may show that the app was obtained." },
        ],
      },
      de: {
        title: "Gemeinsame Apple-ID: Kann der Partner private Tresor-Dateien sehen?",
        description: "Verstehe, was eine gemeinsame Apple-ID offenlegt, ob Tresor-Dateien synchronisieren und welche Fotos, Käufe, Backups und Gerätedaten geteilt bleiben.",
        answer: "Eine gemeinsame Apple-ID kann iCloud-Fotos, Käufe, Abos, Backups, Gerätelisten und weitere Daten offenlegen. Rein lokal im Tresor gespeicherte Dateien sind ein separater Bereich, aber Quellen und App-Daten können anderswo erscheinen.",
        detail: "Entscheidend ist, ob die Datei vor dem Import einen synchronisierten Apple-Speicherort berührt hat. Ein Foto in den Aufnahmen kann hochladen, bevor es den Tresor erreicht. Auch der App Store kann den Bezug der App zeigen. Lokale Speicherung macht das gesamte Apple-Konto nicht privat.",
        keywords: ["gemeinsame Apple-ID", "Kaufverlauf", "iCloud-Fotos", "Geräte-Backups", "lokaler Tresor"],
        faqs: [
          { question: "Erscheinen Stash-Dateien automatisch auf dem iPhone des Partners?", answer: "Lokale Tresor-Dateien sind nicht iCloud-Fotos, aber Quelldateien können bereits synchronisiert worden sein." },
          { question: "Kann die gemeinsame Apple-ID die Tresor-App verraten?", answer: "Kauf-, Download- oder gemeinsame Kontodaten können zeigen, dass die App bezogen wurde." },
        ],
      },
      es: {
        title: "Apple ID compartido: ¿puede tu pareja ver archivos de la bóveda?",
        description: "Entiende qué expone un Apple ID compartido, si los archivos de la bóveda se sincronizan y qué fotos, compras, copias y dispositivos siguen compartidos.",
        answer: "Un Apple ID compartido puede exponer Fotos de iCloud, compras, suscripciones, copias, dispositivos y otros datos. Los archivos locales de una bóveda son un espacio separado, pero fuentes y registros de la app pueden aparecer en otros lugares.",
        detail: "La pregunta clave es si el archivo pasó por una ubicación sincronizada antes de importarlo. Una foto del carrete puede subir antes de llegar a la bóveda. App Store también puede mostrar que la app fue obtenida. El almacenamiento local no vuelve privada toda la cuenta Apple.",
        keywords: ["Apple ID compartido", "historial de compras", "Fotos de iCloud", "copias", "bóveda local"],
        faqs: [
          { question: "¿Los archivos de Stash aparecen en el iPhone de mi pareja?", answer: "Los archivos locales no son Fotos de iCloud, pero las fuentes pueden haberse sincronizado antes." },
          { question: "¿El Apple ID compartido puede revelar la app?", answer: "El historial de compras, descargas o registros compartidos puede mostrar que se obtuvo." },
        ],
      },
      ar: {
        title: "Apple ID مشترك: هل يستطيع الشريك رؤية ملفات الخزنة الخاصة؟",
        description: "افهم ما يكشفه Apple ID المشترك وهل تتزامن ملفات الخزنة وما الصور والمشتريات والنسخ والأجهزة التي تبقى مشتركة.",
        answer: "قد يكشف Apple ID المشترك صور iCloud والمشتريات والاشتراكات والنسخ الاحتياطية والأجهزة وبيانات أخرى. ملفات الخزنة المحلية مساحة منفصلة، لكن المصادر وسجلات التطبيق قد تظهر في أماكن أخرى.",
        detail: "السؤال المهم هو ما إذا دخل الملف إلى مكان متزامن قبل الاستيراد. قد تُرفع صورة ألبوم الكاميرا قبل وصولها إلى الخزنة. وقد يظهر App Store الحصول على التطبيق. التخزين المحلي لا يجعل حساب Apple المحيط خاصاً.",
        keywords: ["Apple ID مشترك", "سجل المشتريات", "صور iCloud", "نسخ الأجهزة", "خزنة محلية"],
        faqs: [
          { question: "هل تظهر ملفات Stash تلقائياً على iPhone الشريك؟", answer: "ملفات الخزنة المحلية ليست صور iCloud، لكن النسخ الأصلية ربما تزامنت سابقاً." },
          { question: "هل يكشف Apple ID المشترك تطبيق الخزنة؟", answer: "قد يُظهر سجل الشراء أو التنزيل أو الحساب المشترك الحصول على التطبيق." },
        ],
      },
      fr: {
        title: "Identifiant Apple partagé : votre partenaire voit-il les fichiers du coffre ?",
        description: "Comprenez ce qu'expose un identifiant partagé, si les fichiers du coffre se synchronisent et quelles photos, achats, sauvegardes et appareils restent partagés.",
        answer: "Un identifiant Apple partagé peut exposer Photos iCloud, achats, abonnements, sauvegardes, appareils et autres données. Les fichiers locaux d'un coffre sont séparés, mais sources et traces de l'app peuvent apparaître ailleurs.",
        detail: "La question essentielle est de savoir si le fichier est passé par un emplacement synchronisé avant importation. Une photo de la photothèque peut être envoyée avant d'atteindre le coffre. L'App Store peut aussi montrer l'obtention de l'app. Le stockage local ne rend pas tout le compte privé.",
        keywords: ["identifiant Apple partagé", "historique d'achats", "Photos iCloud", "sauvegardes", "coffre local"],
        faqs: [
          { question: "Les fichiers Stash apparaissent-ils sur l'iPhone du partenaire ?", answer: "Les fichiers locaux ne sont pas Photos iCloud, mais les sources peuvent déjà avoir été synchronisées." },
          { question: "L'identifiant partagé peut-il révéler l'app ?", answer: "L'historique des achats, téléchargements ou données partagées peut montrer son obtention." },
        ],
      },
    },
  },
  {
    slug: "private-browser-for-affair-searches-and-dating-sites",
    text: {
      en: {
        title: "Private Browser for Affair Searches and Dating Sites: What It Hides",
        description: "Understand what a vault-based private browser can hide from local history when visiting dating sites or researching an affair, and what remains visible.",
        answer: "A private browser can avoid keeping ordinary local history, cookies, and open tabs from a session, especially when it runs inside a locked vault. It does not make activity invisible to websites, accounts, network providers, employers, routers, downloads, or screenshots.",
        detail: "Browsing privacy has separate device, account, and network layers. A vault browser focuses on traces left on the phone. Signing into a dating site still creates account-side history, and downloading a photo creates a file that must be protected separately. A work or managed network may retain its own logs.",
        keywords: ["local browser history", "dating websites", "account activity", "network logs", "downloaded files"],
        faqs: [
          { question: "Does private browsing hide dating-site activity from my spouse?", answer: "It can reduce local browser traces, but account records, notifications, downloads, network logs, and other devices may still reveal activity." },
          { question: "Does a vault browser replace a VPN?", answer: "No. A vault browser protects local device traces; a VPN addresses a different network layer and has its own trust limits." },
        ],
      },
      de: {
        title: "Privater Browser für Affären-Suchen und Dating-Seiten: Was er verbirgt",
        description: "Verstehe, was ein Tresor-Browser bei Dating-Seiten lokal nicht speichert und welche Konto-, Netzwerk-, Download- und Geräte-Spuren bleiben.",
        answer: "Ein privater Browser kann normalen lokalen Verlauf, Cookies und offene Tabs einer Sitzung vermeiden, besonders innerhalb eines gesperrten Tresors. Er macht Aktivitäten nicht unsichtbar für Websites, Konten, Anbieter, Arbeitgeber, Router, Downloads oder Screenshots.",
        detail: "Browser-Privatsphäre hat Geräte-, Konto- und Netzwerkebenen. Ein Tresor-Browser konzentriert sich auf Handyspeuren. Die Anmeldung auf einer Dating-Seite erzeugt Kontodaten, ein Download erzeugt eine separat zu schützende Datei und verwaltete Netzwerke können eigene Protokolle führen.",
        keywords: ["lokaler Verlauf", "Dating-Websites", "Kontoaktivität", "Netzwerkprotokolle", "Downloads"],
        faqs: [
          { question: "Versteckt privates Surfen Dating-Aktivität vor dem Ehepartner?", answer: "Lokale Browser-Spuren werden reduziert, aber Konten, Mitteilungen, Downloads, Netzwerke und andere Geräte können Aktivität zeigen." },
          { question: "Ersetzt ein Tresor-Browser ein VPN?", answer: "Nein. Der Tresor schützt lokale Spuren; ein VPN betrifft die Netzwerkebene und hat eigene Vertrauensgrenzen." },
        ],
      },
      es: {
        title: "Navegador privado para búsquedas de una aventura y sitios de citas",
        description: "Entiende qué rastros locales evita un navegador dentro de una bóveda al visitar sitios de citas y qué datos de cuenta, red y descargas permanecen.",
        answer: "Un navegador privado puede evitar historial local, cookies y pestañas de una sesión, especialmente dentro de una bóveda bloqueada. No vuelve invisible la actividad ante sitios, cuentas, proveedores, empresas, routers, descargas o capturas.",
        detail: "La privacidad tiene capas de dispositivo, cuenta y red. Un navegador de bóveda se centra en rastros del teléfono. Iniciar sesión crea historial en la cuenta, descargar una foto crea un archivo separado y una red administrada puede guardar sus propios registros.",
        keywords: ["historial local", "sitios de citas", "actividad de cuenta", "registros de red", "descargas"],
        faqs: [
          { question: "¿La navegación privada oculta las citas a mi pareja?", answer: "Reduce rastros locales, pero cuentas, notificaciones, descargas, redes y otros dispositivos pueden revelar actividad." },
          { question: "¿Un navegador de bóveda sustituye una VPN?", answer: "No. Protege rastros locales; una VPN aborda otra capa de red con límites distintos." },
        ],
      },
      ar: {
        title: "متصفح خاص لعمليات بحث العلاقة ومواقع المواعدة: ما الذي يخفيه",
        description: "افهم ما الذي يمنع متصفح داخل خزنة حفظه محلياً عند زيارة مواقع المواعدة وما بيانات الحساب والشبكة والتنزيلات التي تبقى.",
        answer: "يمكن للمتصفح الخاص تجنب حفظ السجل والكوكيز والتبويبات محلياً، خصوصاً داخل خزنة مقفلة. لكنه لا يجعل النشاط غير مرئي للمواقع والحسابات ومزودي الشبكة والعمل وأجهزة الراوتر والتنزيلات واللقطات.",
        detail: "للخصوصية طبقات جهاز وحساب وشبكة. يركز متصفح الخزنة على آثار الهاتف. تسجيل الدخول ينشئ نشاطاً في الحساب، وتنزيل صورة ينشئ ملفاً منفصلاً، وقد تحتفظ شبكة العمل بسجلاتها.",
        keywords: ["سجل محلي", "مواقع مواعدة", "نشاط الحساب", "سجلات الشبكة", "ملفات التنزيل"],
        faqs: [
          { question: "هل يخفي التصفح الخاص نشاط المواعدة عن الشريك؟", answer: "يقلل آثار المتصفح المحلية، لكن الحسابات والإشعارات والتنزيلات والشبكات والأجهزة الأخرى قد تكشف النشاط." },
          { question: "هل يحل متصفح الخزنة محل VPN؟", answer: "لا. يحمي آثار الجهاز المحلية بينما يعالج VPN طبقة الشبكة وله حدود مختلفة." },
        ],
      },
      fr: {
        title: "Navigateur privé pour recherches de liaison et sites de rencontre",
        description: "Comprenez les traces locales évitées par un navigateur dans un coffre et les données de compte, réseau et téléchargement qui restent.",
        answer: "Un navigateur privé peut éviter historique local, cookies et onglets d'une session, surtout dans un coffre verrouillé. Il ne rend pas l'activité invisible aux sites, comptes, fournisseurs, employeurs, routeurs, téléchargements ou captures.",
        detail: "La confidentialité comporte des couches appareil, compte et réseau. Un navigateur de coffre vise les traces du téléphone. Se connecter crée un historique de compte, télécharger une photo crée un fichier séparé et un réseau administré peut garder ses journaux.",
        keywords: ["historique local", "sites de rencontre", "activité du compte", "journaux réseau", "téléchargements"],
        faqs: [
          { question: "La navigation privée cache-t-elle les sites de rencontre au conjoint ?", answer: "Elle réduit les traces locales, mais comptes, notifications, téléchargements, réseaux et autres appareils peuvent révéler l'activité." },
          { question: "Un navigateur de coffre remplace-t-il un VPN ?", answer: "Non. Il protège les traces locales; un VPN traite une autre couche réseau avec ses propres limites." },
        ],
      },
    },
  },
];

function makeList(items: string[], ordered = false): string {
  const tag = ordered ? "ol" : "ul";
  return `<${tag}>${items.map((item) => `<li>${item}</li>`).join("")}</${tag}>`;
}

function buildArticle(locale: BaseLocale, topic: Topic): Article {
  const text = topic.text[locale];
  const shared = copy[locale];
  const faqHtml = text.faqs
    .map(({ question, answer }) => `<h3>${question}</h3><p>${answer}</p>`)
    .join("");

  return {
    slug: topic.slug,
    title: text.title,
    description: text.description,
    date: "2026-06-12",
    primaryIntent: topic.slug.replaceAll("-", " "),
    cluster: "direct-infidelity",
    relatedSlugs: topics
      .filter((candidate) => candidate.slug !== topic.slug)
      .slice(0, 3)
      .map((candidate) => candidate.slug),
    faqs: text.faqs,
    content: `
<h2>${shared.direct}</h2>
<p><strong>${text.answer}</strong></p>
<h2>${shared.matters}</h2>
<p>${text.detail}</p>
${makeList(text.keywords.map((keyword) => `<strong>${keyword}</strong>`))}
<h2>${shared.protects}</h2>
<p>${shared.protectsIntro}</p>
${makeList(shared.protectsItems)}
<h2>${shared.process}</h2>
${makeList(shared.processItems, true)}
<h2>${shared.leaks}</h2>
<p>${shared.leaksIntro}</p>
${makeList(shared.leaksItems)}
<h2>${shared.reality}</h2>
<p>${shared.realityText}</p>
<h2>${shared.faq}</h2>
${faqHtml}
<p><a href="${getAppStoreUrl(locale)}"><strong>${shared.cta}</strong></a>.</p>
`,
  };
}

function buildLocale(locale: BaseLocale): ArticleSet {
  return Object.fromEntries(
    topics.map((topic) => [topic.slug, buildArticle(locale, topic)]),
  );
}

export const infidelityArticles: Record<BaseLocale, ArticleSet> = {
  en: buildLocale("en"),
  de: buildLocale("de"),
  es: buildLocale("es"),
  ar: buildLocale("ar"),
  fr: buildLocale("fr"),
};
