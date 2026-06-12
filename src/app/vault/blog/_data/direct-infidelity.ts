import type { Article, ArticleSet, BaseLocale } from "./index";
import { getAppStoreUrl } from "./store";

type Cluster =
  | "core-cheating"
  | "partner-specific"
  | "lgbtq-affairs"
  | "messaging-dating"
  | "intimate-media"
  | "discovery-risk"
  | "infidelity-synonyms";

type Localized = Record<BaseLocale, string>;

type DirectTopic = {
  slug: string;
  intent: string;
  cluster: Cluster;
  title: Localized;
  angle: Localized;
  terms: Localized;
};

const localized = (
  en: string,
  de: string,
  es: string,
  ar: string,
  fr: string,
): Localized => ({ en, de, es, ar, fr });

const topics: DirectTopic[] = [
  {
    slug: "how-to-hide-an-affair-on-iphone",
    intent: "how to hide an affair on iphone",
    cluster: "core-cheating",
    title: localized(
      "How to Hide an Affair on iPhone: Photos, Videos, Files, and iCloud",
      "Eine Affäre auf dem iPhone verbergen: Fotos, Videos, Dateien und iCloud",
      "Cómo ocultar una aventura en iPhone: fotos, videos, archivos e iCloud",
      "كيفية إخفاء علاقة على iPhone: الصور والفيديوهات والملفات وiCloud",
      "Comment cacher une liaison sur iPhone : photos, vidéos, fichiers et iCloud",
    ),
    angle: localized(
      "This is the broad affair-privacy hub: separate protected files from the live messages, accounts, payments, locations, and other records a vault cannot control.",
      "Dies ist der zentrale Affären-Ratgeber: Geschützte Dateien müssen von Live-Chats, Konten, Zahlungen, Standorten und anderen nicht kontrollierbaren Spuren getrennt werden.",
      "Esta es la guía central: separa los archivos protegidos de mensajes activos, cuentas, pagos, ubicaciones y otros registros que una bóveda no controla.",
      "هذا هو الدليل الرئيسي: افصل الملفات المحمية عن الرسائل الحية والحسابات والمدفوعات والموقع والسجلات التي لا تتحكم بها الخزنة.",
      "Voici le guide central : distinguez les fichiers protégés des messages actifs, comptes, paiements, positions et autres traces hors du coffre.",
    ),
    terms: localized("affair, cheating, iPhone, hidden photos, iCloud", "Affäre, Fremdgehen, iPhone, versteckte Fotos, iCloud", "aventura, infidelidad, iPhone, fotos ocultas, iCloud", "علاقة، خيانة، iPhone، صور مخفية، iCloud", "liaison, infidélité, iPhone, photos cachées, iCloud"),
  },
  {
    slug: "secret-app-for-cheating",
    intent: "secret app for cheating",
    cluster: "core-cheating",
    title: localized(
      "Secret App for Cheating: What a Hidden Vault Can and Cannot Hide",
      "Geheime App fürs Fremdgehen: Was ein Tresor verbergen kann",
      "App secreta para ser infiel: qué puede y qué no puede ocultar",
      "تطبيق سري للخيانة: ما الذي تستطيع الخزنة إخفاءه وما لا تستطيع",
      "App secrète pour tromper : ce qu'un coffre peut ou non cacher",
    ),
    angle: localized(
      "The relevant distinction is between files imported into the vault and evidence that remains in third-party apps or iOS system records.",
      "Entscheidend ist der Unterschied zwischen importierten Tresor-Dateien und Belegen in Drittanbieter-Apps oder iOS-Systemdaten.",
      "La diferencia clave está entre archivos importados y pruebas que siguen en apps de terceros o registros de iOS.",
      "الفرق الأساسي بين الملفات المستوردة إلى الخزنة والأدلة الباقية في التطبيقات الأخرى أو سجلات iOS.",
      "La distinction essentielle oppose les fichiers importés aux preuves qui restent dans les apps tierces ou les journaux iOS.",
    ),
    terms: localized("secret cheating app, hidden vault, affair files", "geheime Fremdgeh-App, Tresor, Affären-Dateien", "app secreta, bóveda, archivos de aventura", "تطبيق خيانة سري، خزنة، ملفات العلاقة", "app secrète, coffre, fichiers de liaison"),
  },
  {
    slug: "where-do-cheaters-hide-photos-iphone",
    intent: "where do cheaters hide photos on iphone",
    cluster: "core-cheating",
    title: localized(
      "Where Do Cheaters Hide Photos on an iPhone?",
      "Wo verstecken Fremdgeher Fotos auf dem iPhone?",
      "¿Dónde esconden fotos los infieles en un iPhone?",
      "أين يخفي الخائنون الصور على iPhone؟",
      "Où les personnes infidèles cachent-elles leurs photos sur iPhone ?",
    ),
    angle: localized(
      "Common locations include Hidden, Recently Deleted, locked notes, Files, cloud drives, message attachments, and disguised vaults; each has a different access and synchronization risk.",
      "Typische Orte sind Ausgeblendet, Zuletzt gelöscht, gesperrte Notizen, Dateien, Cloud-Speicher, Anhänge und getarnte Tresore; jeder hat andere Risiken.",
      "Los lugares comunes incluyen Oculto, Eliminado recientemente, notas, Archivos, nubes, adjuntos y bóvedas disfrazadas; cada uno tiene riesgos distintos.",
      "تشمل الأماكن الشائعة الألبوم المخفي والمحذوفة مؤخراً والملاحظات والملفات والسحابة والمرفقات والخزنات المموهة.",
      "Les emplacements courants sont Masquées, Suppressions récentes, Notes, Fichiers, cloud, pièces jointes et coffres déguisés, avec des risques différents.",
    ),
    terms: localized("where cheaters hide photos, iPhone folders, secret vault", "wo Fremdgeher Fotos verstecken, iPhone-Ordner, Tresor", "dónde esconden fotos, carpetas iPhone, bóveda", "أماكن إخفاء الصور، مجلدات iPhone، خزنة", "où cacher des photos, dossiers iPhone, coffre"),
  },
  {
    slug: "how-do-cheaters-hide-things-on-phone",
    intent: "how do cheaters hide things on their phones",
    cluster: "core-cheating",
    title: localized(
      "How Do Cheaters Hide Things on Their Phones?",
      "Wie verstecken Fremdgeher Dinge auf ihrem Handy?",
      "¿Cómo ocultan cosas los infieles en sus teléfonos?",
      "كيف يخفي الخائنون الأشياء على هواتفهم؟",
      "Comment les personnes infidèles cachent-elles des choses sur leur téléphone ?",
    ),
    angle: localized(
      "Cheating evidence spans files, communications, account activity, money, and location; a vault only addresses the file layer.",
      "Belege für Fremdgehen verteilen sich auf Dateien, Kommunikation, Konten, Geld und Standort; ein Tresor deckt nur Dateien ab.",
      "Las pruebas abarcan archivos, comunicaciones, cuentas, dinero y ubicación; una bóveda solo cubre la capa de archivos.",
      "تمتد أدلة الخيانة عبر الملفات والاتصالات والحسابات والمال والموقع؛ الخزنة تعالج طبقة الملفات فقط.",
      "Les preuves couvrent fichiers, communications, comptes, argent et position; un coffre ne traite que les fichiers.",
    ),
    terms: localized("how cheaters hide things, phone secrets, affair evidence", "Fremdgeher Handy, Geheimnisse, Affären-Belege", "cómo ocultan los infieles, secretos, pruebas", "كيف يخفي الخائنون، أسرار الهاتف، أدلة", "comment cacher une infidélité, secrets, preuves"),
  },
  {
    slug: "apps-cheating-husbands-use",
    intent: "apps cheating husbands use",
    cluster: "core-cheating",
    title: localized(
      "What Apps Do Cheating Husbands Use to Hide Photos?",
      "Welche Apps nutzen untreue Ehemänner zum Verstecken von Fotos?",
      "¿Qué apps usan los maridos infieles para ocultar fotos?",
      "ما التطبيقات التي يستخدمها الأزواج الخائنون لإخفاء الصور؟",
      "Quelles apps les maris infidèles utilisent-ils pour cacher des photos ?",
    ),
    angle: localized(
      "This query usually points to hidden albums, alternate cloud accounts, private browsers, locked notes, and disguised vaults rather than one specific cheating app.",
      "Gemeint sind meist ausgeblendete Alben, alternative Cloud-Konten, private Browser, gesperrte Notizen und getarnte Tresore statt einer einzelnen App.",
      "Suele referirse a álbumes ocultos, cuentas alternativas, navegadores privados, notas bloqueadas y bóvedas disfrazadas.",
      "يشير البحث عادة إلى ألبومات مخفية وحسابات سحابية بديلة ومتصفحات خاصة وملاحظات مقفلة وخزنات مموهة.",
      "Cette recherche vise généralement albums masqués, comptes cloud alternatifs, navigateurs privés, notes verrouillées et coffres déguisés.",
    ),
    terms: localized("cheating husband apps, hidden photos, secret vault", "Apps untreuer Ehemänner, Fotos, Tresor", "apps de marido infiel, fotos ocultas, bóveda", "تطبيقات الزوج الخائن، صور مخفية، خزنة", "apps mari infidèle, photos cachées, coffre"),
  },
  {
    slug: "apps-cheating-wives-use",
    intent: "apps cheating wives use",
    cluster: "core-cheating",
    title: localized(
      "What Apps Do Cheating Wives Use to Hide Photos?",
      "Welche Apps nutzen untreue Ehefrauen zum Verstecken von Fotos?",
      "¿Qué apps usan las esposas infieles para ocultar fotos?",
      "ما التطبيقات التي تستخدمها الزوجات الخائنات لإخفاء الصور؟",
      "Quelles apps les femmes infidèles utilisent-elles pour cacher des photos ?",
    ),
    angle: localized(
      "There is no gender-specific technology: the relevant categories are hidden media, locked files, alternate accounts, private browsing, and disguised storage.",
      "Die Technik ist nicht geschlechtsspezifisch: Relevant sind versteckte Medien, gesperrte Dateien, alternative Konten, privates Surfen und getarnter Speicher.",
      "La tecnología no depende del género: importan medios ocultos, archivos bloqueados, cuentas alternativas, navegación privada y almacenamiento disfrazado.",
      "التقنية لا تختلف حسب الجنس: المهم الوسائط المخفية والملفات المقفلة والحسابات البديلة والتصفح الخاص والتخزين المموه.",
      "La technologie n'est pas genrée : médias masqués, fichiers verrouillés, comptes alternatifs, navigation privée et stockage déguisé comptent.",
    ),
    terms: localized("cheating wife apps, secret photos, hidden storage", "Apps untreuer Ehefrauen, geheime Fotos, Speicher", "apps de esposa infiel, fotos secretas, almacenamiento", "تطبيقات الزوجة الخائنة، صور سرية، تخزين", "apps femme infidèle, photos secrètes, stockage"),
  },
  {
    slug: "hide-affair-photos-from-wife",
    intent: "how to hide affair photos from wife",
    cluster: "partner-specific",
    title: localized(
      "How to Hide Affair Photos from Your Wife on iPhone",
      "Affärenfotos vor der Ehefrau auf dem iPhone verbergen",
      "Cómo ocultar fotos de una aventura a tu esposa en iPhone",
      "كيفية إخفاء صور العلاقة عن زوجتك على iPhone",
      "Comment cacher des photos de liaison à votre femme sur iPhone",
    ),
    angle: localized(
      "If a wife knows the device passcode or shares the Apple account, ordinary Hidden albums provide little separation; imported files need a distinct credential and cloud audit.",
      "Kennt die Ehefrau den Gerätecode oder teilt die Apple-ID, bietet Ausgeblendet wenig Trennung; nötig sind eigene Zugangsdaten und eine Cloud-Prüfung.",
      "Si la esposa conoce el código o comparte la cuenta Apple, Oculto ofrece poca separación; hace falta otra credencial y revisar la nube.",
      "إذا كانت الزوجة تعرف رمز الجهاز أو تشارك حساب Apple فالألبوم المخفي ضعيف؛ تحتاج الملفات إلى رمز مستقل ومراجعة السحابة.",
      "Si l'épouse connaît le code ou partage le compte Apple, Masquées sépare peu; il faut un accès distinct et auditer le cloud.",
    ),
    terms: localized("hide affair photos from wife, separate PIN, shared iCloud", "Affärenfotos vor Ehefrau, eigene PIN, iCloud", "ocultar fotos a esposa, PIN, iCloud", "إخفاء صور عن الزوجة، PIN، iCloud", "cacher photos à sa femme, code, iCloud"),
  },
  {
    slug: "hide-affair-photos-from-husband",
    intent: "how to hide affair photos from husband",
    cluster: "partner-specific",
    title: localized(
      "How to Hide Affair Photos from Your Husband on iPhone",
      "Affärenfotos vor dem Ehemann auf dem iPhone verbergen",
      "Cómo ocultar fotos de una aventura a tu marido en iPhone",
      "كيفية إخفاء صور العلاقة عن زوجك على iPhone",
      "Comment cacher des photos de liaison à votre mari sur iPhone",
    ),
    angle: localized(
      "When a husband has routine access to the phone, the key boundary is a vault PIN unrelated to the device code plus removal of synchronized source copies.",
      "Hat der Ehemann regelmäßig Zugriff, zählt eine vom Gerätecode unabhängige Tresor-PIN plus das Entfernen synchronisierter Quellen.",
      "Si el marido accede habitualmente al teléfono, importa un PIN independiente y retirar las fuentes sincronizadas.",
      "عندما يصل الزوج إلى الهاتف بانتظام فالحاجز المهم PIN مستقل وإزالة النسخ الأصلية المتزامنة.",
      "Si le mari accède régulièrement au téléphone, il faut un code de coffre indépendant et retirer les sources synchronisées.",
    ),
    terms: localized("hide affair photos from husband, phone access, vault PIN", "Affärenfotos vor Ehemann, Handyzugriff, Tresor-PIN", "ocultar fotos a marido, acceso, PIN", "إخفاء صور عن الزوج، وصول الهاتف، PIN", "cacher photos à son mari, accès, code"),
  },
  {
    slug: "hide-affair-photos-from-girlfriend",
    intent: "how to hide affair photos from girlfriend",
    cluster: "partner-specific",
    title: localized(
      "How to Hide Affair Photos from Your Girlfriend on iPhone",
      "Affärenfotos vor der Freundin auf dem iPhone verbergen",
      "Cómo ocultar fotos de una aventura a tu novia en iPhone",
      "كيفية إخفاء صور العلاقة عن صديقتك على iPhone",
      "Comment cacher des photos de liaison à votre petite amie sur iPhone",
    ),
    angle: localized(
      "A girlfriend may not share the Apple account but can still see previews, recent items, shared albums, or the camera roll when borrowing the phone.",
      "Eine Freundin teilt vielleicht nicht die Apple-ID, sieht aber Vorschauen, zuletzt verwendete Dateien, Alben oder die Galerie beim Ausleihen.",
      "Una novia quizá no comparta Apple ID, pero puede ver vistas previas, recientes, álbumes o el carrete al usar el teléfono.",
      "قد لا تشارك الصديقة حساب Apple لكنها قد ترى المعاينات والعناصر الحديثة والألبومات عند استخدام الهاتف.",
      "Une petite amie ne partage pas forcément l'identifiant Apple, mais peut voir aperçus, récents, albums ou photothèque en empruntant le téléphone.",
    ),
    terms: localized("hide photos from girlfriend, borrowed phone, photo previews", "Fotos vor Freundin, ausgeliehenes Handy, Vorschauen", "ocultar fotos a novia, teléfono prestado, vistas previas", "إخفاء صور عن الصديقة، هاتف مستعار، معاينات", "cacher photos à sa petite amie, téléphone prêté, aperçus"),
  },
  {
    slug: "hide-affair-photos-from-boyfriend",
    intent: "how to hide affair photos from boyfriend",
    cluster: "partner-specific",
    title: localized(
      "How to Hide Affair Photos from Your Boyfriend on iPhone",
      "Affärenfotos vor dem Freund auf dem iPhone verbergen",
      "Cómo ocultar fotos de una aventura a tu novio en iPhone",
      "كيفية إخفاء صور العلاقة عن صديقك على iPhone",
      "Comment cacher des photos de liaison à votre petit ami sur iPhone",
    ),
    angle: localized(
      "A boyfriend with occasional phone access is most likely to discover files through photo swiping, Spotlight, recent downloads, notification previews, or obvious vault icons.",
      "Ein Freund mit gelegentlichem Zugriff entdeckt Dateien meist durch Wischen in Fotos, Spotlight, Downloads, Vorschauen oder auffällige Tresor-Symbole.",
      "Un novio con acceso ocasional suele encontrar archivos al deslizar Fotos, usar Spotlight, ver descargas, notificaciones o iconos obvios.",
      "الصديق الذي يصل للهاتف أحياناً قد يكتشف الملفات عبر الصور أو Spotlight أو التنزيلات أو المعاينات أو أيقونة خزنة واضحة.",
      "Un petit ami avec un accès occasionnel découvre surtout via Photos, Spotlight, téléchargements, notifications ou icônes évidentes.",
    ),
    terms: localized("hide photos from boyfriend, Spotlight, downloads, vault disguise", "Fotos vor Freund, Spotlight, Downloads, Tarnung", "ocultar fotos a novio, Spotlight, descargas, disfraz", "إخفاء صور عن الصديق، Spotlight، تنزيلات، تمويه", "cacher photos à son petit ami, Spotlight, téléchargements, déguisement"),
  },
  {
    slug: "hide-mistress-photos-from-wife",
    intent: "how to hide mistress photos from wife",
    cluster: "partner-specific",
    title: localized(
      "How to Hide Mistress Photos from Your Wife on iPhone",
      "Fotos der Geliebten vor der Ehefrau auf dem iPhone verbergen",
      "Cómo ocultar fotos de tu amante a tu esposa en iPhone",
      "كيفية إخفاء صور العشيقة عن زوجتك على iPhone",
      "Comment cacher les photos de votre maîtresse à votre femme sur iPhone",
    ),
    angle: localized(
      "Mistress photos commonly exist as camera originals, received attachments, screenshots, edited copies, and shared-cloud versions; each copy must be treated separately.",
      "Fotos der Geliebten existieren oft als Kameraoriginale, Anhänge, Screenshots, bearbeitete Kopien und Cloud-Versionen; jede Kopie ist separat.",
      "Las fotos de una amante suelen existir como originales, adjuntos, capturas, ediciones y copias en la nube; cada copia es independiente.",
      "غالباً توجد صور العشيقة كأصل من الكاميرا ومرفق ولقطة ونسخة معدلة ونسخة سحابية؛ كل نسخة مستقلة.",
      "Les photos d'une maîtresse existent souvent comme originaux, pièces jointes, captures, versions retouchées et cloud; chaque copie est distincte.",
    ),
    terms: localized("mistress photos, wife, duplicate copies, vault", "Fotos Geliebte, Ehefrau, Kopien, Tresor", "fotos amante, esposa, copias, bóveda", "صور العشيقة، الزوجة، نسخ، خزنة", "photos maîtresse, femme, copies, coffre"),
  },
  {
    slug: "hide-other-man-photos-from-husband",
    intent: "how to hide other man's photos from husband",
    cluster: "partner-specific",
    title: localized(
      "How to Hide Another Man's Photos from Your Husband",
      "Fotos eines anderen Mannes vor dem Ehemann verbergen",
      "Cómo ocultar fotos de otro hombre a tu marido",
      "كيفية إخفاء صور رجل آخر عن زوجك",
      "Comment cacher les photos d'un autre homme à votre mari",
    ),
    angle: localized(
      "Photos received from another man may remain in message attachments, shared media galleries, downloads, screenshots, and backups even after the camera-roll copy is moved.",
      "Fotos eines anderen Mannes können in Nachrichtenanhängen, Mediengalerien, Downloads, Screenshots und Backups bleiben, obwohl die Galerie-Kopie verschoben wurde.",
      "Las fotos de otro hombre pueden seguir en adjuntos, galerías de chat, descargas, capturas y copias aunque se mueva el carrete.",
      "قد تبقى صور رجل آخر في مرفقات الرسائل ومعارض الوسائط والتنزيلات واللقطات والنسخ الاحتياطية بعد نقل نسخة الصور.",
      "Les photos d'un autre homme peuvent rester dans pièces jointes, galeries de chat, téléchargements, captures et sauvegardes après déplacement.",
    ),
    terms: localized("other man photos, husband, message attachments, backups", "anderer Mann, Ehemann, Anhänge, Backups", "otro hombre, marido, adjuntos, copias", "رجل آخر، الزوج، مرفقات، نسخ", "autre homme, mari, pièces jointes, sauvegardes"),
  },
  {
    slug: "hide-gay-affair-photos",
    intent: "how to hide gay affair photos",
    cluster: "lgbtq-affairs",
    title: localized(
      "How to Hide Gay Affair Photos from Your Husband or Boyfriend",
      "Schwule Affärenfotos vor Ehemann oder Freund verbergen",
      "Cómo ocultar fotos de una aventura gay a tu marido o novio",
      "كيفية إخفاء صور علاقة مثلية عن زوجك أو صديقك",
      "Comment cacher des photos de liaison gay à votre mari ou petit ami",
    ),
    angle: localized(
      "The risk may combine infidelity discovery with involuntary outing, so files, dating accounts, contacts, other devices, and the other man's sharing choices all matter.",
      "Das Risiko kann Untreue und unfreiwilliges Outing verbinden; Dateien, Dating-Konten, Kontakte, andere Geräte und das Verhalten des anderen Mannes zählen.",
      "El riesgo puede combinar infidelidad y outing forzado; importan archivos, cuentas, contactos, otros dispositivos y lo que comparta el otro hombre.",
      "قد يجمع الخطر بين اكتشاف الخيانة والكشف القسري؛ تهم الملفات والحسابات وجهات الاتصال والأجهزة وما يشاركه الرجل الآخر.",
      "Le risque peut associer infidélité et outing forcé; fichiers, comptes, contacts, autres appareils et partages de l'autre homme comptent.",
    ),
    terms: localized("gay affair, outing risk, husband, boyfriend", "schwule Affäre, Outing, Ehemann, Freund", "aventura gay, outing, marido, novio", "علاقة مثلية، خطر الكشف، زوج، صديق", "liaison gay, outing, mari, petit ami"),
  },
  {
    slug: "hide-lesbian-affair-photos",
    intent: "how to hide lesbian affair photos",
    cluster: "lgbtq-affairs",
    title: localized(
      "How to Hide Lesbian Affair Photos from Your Wife or Girlfriend",
      "Lesbische Affärenfotos vor Ehefrau oder Freundin verbergen",
      "Cómo ocultar fotos de una aventura lésbica a tu esposa o novia",
      "كيفية إخفاء صور علاقة مثلية نسائية عن زوجتك أو صديقتك",
      "Comment cacher des photos de liaison lesbienne à votre femme ou petite amie",
    ),
    angle: localized(
      "Discovery can expose both the affair and sexual identity, while shared photo libraries and mutual social circles can create risks beyond the phone.",
      "Eine Entdeckung kann Affäre und sexuelle Identität offenlegen; geteilte Mediatheken und gemeinsame Kontakte schaffen zusätzliche Risiken.",
      "El descubrimiento puede revelar la aventura y la identidad sexual; fototecas compartidas y círculos comunes añaden riesgos.",
      "قد يكشف الاكتشاف العلاقة والهوية الجنسية معاً، كما تزيد المكتبات المشتركة والدوائر الاجتماعية الخطر.",
      "La découverte peut révéler liaison et identité sexuelle; photothèques partagées et cercles communs ajoutent des risques.",
    ),
    terms: localized("lesbian affair, outing risk, wife, girlfriend", "lesbische Affäre, Outing, Ehefrau, Freundin", "aventura lésbica, outing, esposa, novia", "علاقة مثلية نسائية، كشف، زوجة، صديقة", "liaison lesbienne, outing, femme, petite amie"),
  },
  {
    slug: "protect-bisexual-dating-affair-photos",
    intent: "protect bisexual dating and affair photos",
    cluster: "lgbtq-affairs",
    title: localized(
      "How to Protect Bisexual Dating and Affair Photos on iPhone",
      "Bisexuelle Dating- und Affärenfotos auf dem iPhone schützen",
      "Cómo proteger fotos de citas bisexuales y aventuras en iPhone",
      "كيفية حماية صور المواعدة والعلاقات ثنائية الميول على iPhone",
      "Comment protéger des photos de rencontres bisexuelles et de liaisons sur iPhone",
    ),
    angle: localized(
      "Bisexual dating evidence may reveal orientation as well as relationship behavior, making screenshot sources, profile exports, and synchronized photos especially sensitive.",
      "Bisexuelle Dating-Belege können Orientierung und Beziehungsverhalten offenlegen; Screenshots, Profilexporte und synchronisierte Fotos sind besonders sensibel.",
      "Las pruebas pueden revelar orientación y conducta; capturas, perfiles exportados y fotos sincronizadas son especialmente sensibles.",
      "قد تكشف الأدلة الميول والسلوك معاً، لذا تكون اللقطات وملفات المواعدة والصور المتزامنة شديدة الحساسية.",
      "Ces preuves peuvent révéler orientation et comportement; captures, exports de profils et photos synchronisées sont particulièrement sensibles.",
    ),
    terms: localized("bisexual dating, affair photos, orientation privacy", "bisexuelles Dating, Affärenfotos, Privatsphäre", "citas bisexuales, fotos, privacidad", "مواعدة ثنائية الميول، صور، خصوصية", "rencontres bisexuelles, photos, confidentialité"),
  },
  {
    slug: "hide-same-sex-affair-not-out",
    intent: "hide same sex affair when not out",
    cluster: "lgbtq-affairs",
    title: localized(
      "How to Hide a Same-Sex Affair When You Are Not Out",
      "Eine gleichgeschlechtliche Affäre verbergen, wenn du nicht geoutet bist",
      "Cómo ocultar una aventura con alguien del mismo sexo si no has salido del armario",
      "كيفية إخفاء علاقة مثلية عندما لم تعلن ميولك",
      "Comment cacher une liaison homosexuelle quand vous n'êtes pas out",
    ),
    angle: localized(
      "A vault can protect selected evidence on one device, but outing can also happen through the other person's phone, tagged media, shared locations, accounts, or social contacts.",
      "Ein Tresor schützt ausgewählte Belege auf einem Gerät; ein Outing kann aber über das andere Handy, Markierungen, Standorte, Konten oder Kontakte erfolgen.",
      "Una bóveda protege archivos en un dispositivo, pero el outing también puede venir del otro teléfono, etiquetas, ubicación, cuentas o contactos.",
      "تحمي الخزنة أدلة مختارة على جهاز واحد، لكن الكشف قد يأتي من هاتف الآخر أو الإشارات أو الموقع أو الحسابات أو المعارف.",
      "Un coffre protège certains fichiers sur un appareil, mais l'outing peut venir de l'autre téléphone, identifications, positions, comptes ou contacts.",
    ),
    terms: localized("same-sex affair, not out, outing safety, private files", "gleichgeschlechtliche Affäre, nicht geoutet, Sicherheit, Dateien", "aventura mismo sexo, no out, seguridad, archivos", "علاقة مثلية، غير معلن، أمان، ملفات", "liaison homosexuelle, pas out, sécurité, fichiers"),
  },
  {
    slug: "hide-whatsapp-affair-screenshots",
    intent: "hide whatsapp affair screenshots",
    cluster: "messaging-dating",
    title: localized(
      "How to Hide WhatsApp Affair Screenshots on iPhone",
      "WhatsApp-Screenshots einer Affäre auf dem iPhone verbergen",
      "Cómo ocultar capturas de WhatsApp de una aventura en iPhone",
      "كيفية إخفاء لقطات WhatsApp لعلاقة على iPhone",
      "Comment cacher des captures WhatsApp d'une liaison sur iPhone",
    ),
    angle: localized(
      "The screenshot can be moved into a vault, but WhatsApp still has the live chat, media gallery, notifications, contact, linked devices, and backup settings.",
      "Der Screenshot kann in den Tresor, aber WhatsApp behält Live-Chat, Mediengalerie, Mitteilungen, Kontakt, verknüpfte Geräte und Backup-Einstellungen.",
      "La captura puede ir a la bóveda, pero WhatsApp conserva chat, galería, notificaciones, contacto, dispositivos vinculados y copias.",
      "يمكن نقل اللقطة إلى الخزنة لكن WhatsApp يحتفظ بالمحادثة ومعرض الوسائط والإشعارات وجهة الاتصال والأجهزة والنسخ.",
      "La capture peut aller au coffre, mais WhatsApp conserve conversation, galerie, notifications, contact, appareils liés et sauvegardes.",
    ),
    terms: localized("WhatsApp affair screenshots, media gallery, linked devices", "WhatsApp Affäre, Screenshots, Medien, Geräte", "WhatsApp aventura, capturas, galería, dispositivos", "WhatsApp علاقة، لقطات، وسائط، أجهزة", "WhatsApp liaison, captures, galerie, appareils"),
  },
  {
    slug: "hide-imessage-affair-screenshots",
    intent: "hide imessage affair screenshots",
    cluster: "messaging-dating",
    title: localized(
      "How to Hide iMessage Affair Screenshots and Saved Photos",
      "iMessage-Screenshots und gespeicherte Affärenfotos verbergen",
      "Cómo ocultar capturas de iMessage y fotos guardadas de una aventura",
      "كيفية إخفاء لقطات iMessage وصور العلاقة المحفوظة",
      "Comment cacher captures iMessage et photos enregistrées d'une liaison",
    ),
    angle: localized(
      "Protecting a screenshot does not remove the iMessage thread, Photos shared-with-you items, attachments, contact suggestions, Mac or iPad synchronization, or iCloud Messages.",
      "Ein geschützter Screenshot entfernt nicht iMessage-Thread, geteilte Fotos, Anhänge, Kontaktvorschläge, Mac-/iPad-Sync oder iCloud-Nachrichten.",
      "Proteger la captura no elimina el hilo, contenido compartido, adjuntos, sugerencias, sincronización con Mac/iPad ni Mensajes en iCloud.",
      "حماية اللقطة لا تمحو محادثة iMessage أو العناصر المشتركة أو المرفقات أو الاقتراحات أو مزامنة Mac وiPad.",
      "Protéger la capture ne supprime pas le fil, les éléments partagés, pièces jointes, suggestions, synchronisation Mac/iPad ou Messages iCloud.",
    ),
    terms: localized("iMessage affair, screenshots, attachments, iCloud Messages", "iMessage Affäre, Screenshots, Anhänge, iCloud", "iMessage aventura, capturas, adjuntos, iCloud", "iMessage علاقة، لقطات، مرفقات، iCloud", "iMessage liaison, captures, pièces jointes, iCloud"),
  },
  {
    slug: "hide-snapchat-affair-photos",
    intent: "hide snapchat affair photos saved to iphone",
    cluster: "messaging-dating",
    title: localized(
      "How to Hide Snapchat Affair Photos Saved to Your iPhone",
      "Auf dem iPhone gespeicherte Snapchat-Affärenfotos verbergen",
      "Cómo ocultar fotos de Snapchat de una aventura guardadas en iPhone",
      "كيفية إخفاء صور Snapchat لعلاقة محفوظة على iPhone",
      "Comment cacher des photos Snapchat de liaison enregistrées sur iPhone",
    ),
    angle: localized(
      "Saved Snapchat media can exist in Camera Roll, Memories, screenshots, chat media, exports, and cloud backups; moving one copy does not affect the others.",
      "Snapchat-Medien können in Aufnahmen, Memorys, Screenshots, Chat-Medien, Exporten und Backups liegen; das Verschieben einer Kopie ändert die anderen nicht.",
      "El contenido puede estar en Carrete, Recuerdos, capturas, chat, exportaciones y copias; mover una copia no afecta las demás.",
      "قد توجد وسائط Snapchat في الصور والذكريات واللقطات ومحادثات التطبيق والتصدير والنسخ؛ نقل نسخة لا يغير البقية.",
      "Les médias Snapchat peuvent exister dans Pellicule, Memories, captures, chat, exports et sauvegardes; déplacer une copie n'affecte pas les autres.",
    ),
    terms: localized("Snapchat affair photos, Memories, Camera Roll, screenshots", "Snapchat Affärenfotos, Memorys, Aufnahmen, Screenshots", "Snapchat aventura, Recuerdos, Carrete, capturas", "Snapchat علاقة، ذكريات، صور، لقطات", "Snapchat liaison, Memories, Pellicule, captures"),
  },
  {
    slug: "hide-tinder-match-screenshots",
    intent: "hide tinder match screenshots from partner",
    cluster: "messaging-dating",
    title: localized(
      "How to Hide Tinder Match Screenshots from Your Partner",
      "Tinder-Match-Screenshots vor dem Partner verbergen",
      "Cómo ocultar capturas de matches de Tinder a tu pareja",
      "كيفية إخفاء لقطات تطابقات Tinder عن شريكك",
      "Comment cacher des captures de matchs Tinder à votre partenaire",
    ),
    angle: localized(
      "A vault protects saved profile or match screenshots, not the Tinder installation, account, subscription, emails, notifications, Screen Time, or App Store history.",
      "Ein Tresor schützt Profil- oder Match-Screenshots, nicht Tinder-App, Konto, Abo, E-Mails, Mitteilungen, Bildschirmzeit oder App-Store-Verlauf.",
      "La bóveda protege capturas, no la instalación, cuenta, suscripción, correos, notificaciones, Tiempo de uso ni historial de App Store.",
      "تحمي الخزنة اللقطات المحفوظة لا تثبيت Tinder أو الحساب أو الاشتراك أو البريد أو الإشعارات أو سجل App Store.",
      "Le coffre protège les captures, pas l'installation, le compte, l'abonnement, les e-mails, notifications, Temps d'écran ou historique App Store.",
    ),
    terms: localized("Tinder screenshots, matches, partner, App Store history", "Tinder Screenshots, Matches, Partner, App Store", "Tinder capturas, matches, pareja, App Store", "Tinder لقطات، تطابقات، شريك، App Store", "Tinder captures, matchs, partenaire, App Store"),
  },
  {
    slug: "hide-grindr-photos-screenshots",
    intent: "hide grindr photos and screenshots from partner",
    cluster: "messaging-dating",
    title: localized(
      "How to Hide Grindr Photos and Screenshots from Your Partner",
      "Grindr-Fotos und Screenshots vor dem Partner verbergen",
      "Cómo ocultar fotos y capturas de Grindr a tu pareja",
      "كيفية إخفاء صور ولقطات Grindr عن شريكك",
      "Comment cacher photos et captures Grindr à votre partenaire",
    ),
    angle: localized(
      "Grindr files may reveal sexual identity, location context, profile details, and infidelity simultaneously; saved files are only one part of that exposure.",
      "Grindr-Dateien können Identität, Standort, Profildaten und Untreue gleichzeitig offenlegen; gespeicherte Dateien sind nur ein Teil.",
      "Los archivos pueden revelar identidad, ubicación, perfil e infidelidad a la vez; los guardados son solo una parte.",
      "قد تكشف ملفات Grindr الهوية والموقع والملف والخيانة معاً؛ الملفات المحفوظة جزء واحد فقط.",
      "Les fichiers Grindr peuvent révéler identité, position, profil et infidélité simultanément; les fichiers enregistrés ne sont qu'une partie.",
    ),
    terms: localized("Grindr photos, screenshots, outing, location", "Grindr Fotos, Screenshots, Outing, Standort", "Grindr fotos, capturas, outing, ubicación", "Grindr صور، لقطات، كشف، موقع", "Grindr photos, captures, outing, position"),
  },
  {
    slug: "hide-her-bumble-dating-screenshots",
    intent: "hide her and bumble dating screenshots",
    cluster: "messaging-dating",
    title: localized(
      "How to Hide HER and Bumble Dating Screenshots from Your Partner",
      "HER- und Bumble-Screenshots vor dem Partner verbergen",
      "Cómo ocultar capturas de HER y Bumble a tu pareja",
      "كيفية إخفاء لقطات HER وBumble عن شريكك",
      "Comment cacher des captures HER et Bumble à votre partenaire",
    ),
    angle: localized(
      "Profile screenshots can be encrypted after import, while the dating accounts, email receipts, notifications, subscriptions, and app history remain separate evidence.",
      "Profil-Screenshots lassen sich nach Import verschlüsseln; Dating-Konten, E-Mails, Mitteilungen, Abos und App-Verlauf bleiben getrennte Belege.",
      "Las capturas pueden cifrarse tras importarlas; cuentas, correos, notificaciones, suscripciones e historial siguen separados.",
      "يمكن تشفير لقطات الملفات بعد الاستيراد، بينما تبقى الحسابات والبريد والإشعارات والاشتراكات وسجل التطبيقات أدلة منفصلة.",
      "Les captures peuvent être chiffrées après import; comptes, e-mails, notifications, abonnements et historique restent des preuves séparées.",
    ),
    terms: localized("HER screenshots, Bumble screenshots, dating account, partner", "HER Screenshots, Bumble, Dating-Konto, Partner", "HER capturas, Bumble, cuenta, pareja", "HER لقطات، Bumble، حساب مواعدة، شريك", "HER captures, Bumble, compte, partenaire"),
  },
  {
    slug: "hide-nude-photos-from-spouse",
    intent: "hide nude photos from wife or husband",
    cluster: "intimate-media",
    title: localized(
      "How to Hide Nude Photos from Your Wife or Husband on iPhone",
      "Nacktfotos vor Ehefrau oder Ehemann auf dem iPhone verbergen",
      "Cómo ocultar fotos desnudas a tu esposa o marido en iPhone",
      "كيفية إخفاء الصور العارية عن زوجتك أو زوجك على iPhone",
      "Comment cacher des photos nues à votre femme ou mari sur iPhone",
    ),
    angle: localized(
      "Nude photos can expose the subject, relationship, location metadata, timestamps, and editing history, so originals and derivative copies require separate review.",
      "Nacktfotos können Person, Beziehung, Standortdaten, Zeitstempel und Bearbeitung zeigen; Originale und abgeleitete Kopien müssen separat geprüft werden.",
      "Las fotos pueden revelar persona, relación, ubicación, fecha y edición; originales y derivados deben revisarse por separado.",
      "قد تكشف الصور الشخص والعلاقة والموقع والتوقيت والتحرير؛ يجب مراجعة الأصل والنسخ المشتقة بشكل منفصل.",
      "Ces photos peuvent révéler personne, relation, position, date et retouche; originaux et dérivés doivent être contrôlés séparément.",
    ),
    terms: localized("nude photos, spouse, metadata, encrypted vault", "Nacktfotos, Ehepartner, Metadaten, Tresor", "fotos desnudas, pareja, metadatos, bóveda", "صور عارية، زوج، بيانات، خزنة", "photos nues, conjoint, métadonnées, coffre"),
  },
  {
    slug: "hide-secret-lover-videos",
    intent: "hide videos of secret lover",
    cluster: "intimate-media",
    title: localized(
      "How to Hide Videos of a Secret Lover on iPhone",
      "Videos einer heimlichen Affäre auf dem iPhone verbergen",
      "Cómo ocultar videos de un amante secreto en iPhone",
      "كيفية إخفاء فيديوهات الحبيب السري على iPhone",
      "Comment cacher des vidéos d'un amant secret sur iPhone",
    ),
    angle: localized(
      "Large videos must be tested fully after import because a thumbnail does not prove complete transfer, retained audio, or correct resolution.",
      "Große Videos müssen nach Import vollständig getestet werden; ein Vorschaubild beweist weder vollständige Übertragung noch Ton oder Auflösung.",
      "Los videos grandes deben probarse completos; una miniatura no demuestra transferencia total, audio ni resolución.",
      "يجب اختبار الفيديوهات الكبيرة كاملة بعد الاستيراد؛ الصورة المصغرة لا تثبت اكتمال النقل أو الصوت أو الدقة.",
      "Les grosses vidéos doivent être testées entièrement; une miniature ne prouve ni transfert complet, ni son, ni résolution.",
    ),
    terms: localized("secret lover videos, full playback, audio, file import", "Videos Geliebte, Wiedergabe, Ton, Import", "videos amante secreto, reproducción, audio, importación", "فيديوهات الحبيب السري، تشغيل، صوت، استيراد", "vidéos amant secret, lecture, son, importation"),
  },
  {
    slug: "hide-affair-hotel-receipts-iphone",
    intent: "hide hotel receipts and affair trip documents",
    cluster: "intimate-media",
    title: localized(
      "How to Hide Hotel Receipts and Affair Trip Documents on iPhone",
      "Hotelbelege und Affären-Reisedokumente auf dem iPhone verbergen",
      "Cómo ocultar recibos de hotel y documentos de viajes de una aventura",
      "كيفية إخفاء إيصالات الفنادق ووثائق رحلات العلاقة على iPhone",
      "Comment cacher reçus d'hôtel et documents de voyage d'une liaison",
    ),
    angle: localized(
      "A vault can protect PDFs, screenshots, tickets, and itineraries, while the card transaction, merchant account, loyalty program, calendar, email, and location records remain.",
      "Ein Tresor schützt PDFs, Screenshots, Tickets und Reisepläne; Kartenzahlung, Händlerkonto, Bonusprogramm, Kalender, E-Mail und Standort bleiben.",
      "La bóveda protege PDF, capturas, billetes e itinerarios; la tarjeta, comercio, fidelidad, calendario, correo y ubicación permanecen.",
      "تحمي الخزنة ملفات PDF واللقطات والتذاكر والخطط، بينما تبقى البطاقة والحساب والبريد والتقويم والموقع.",
      "Le coffre protège PDF, captures, billets et itinéraires; transaction, marchand, fidélité, calendrier, e-mail et position restent.",
    ),
    terms: localized("affair hotel receipts, trip documents, PDFs, card records", "Affären-Hotelbelege, Reiseunterlagen, PDFs, Karte", "recibos hotel aventura, documentos, PDF, tarjeta", "إيصالات فندق، وثائق سفر، PDF، بطاقة", "reçus hôtel liaison, documents, PDF, carte"),
  },
  {
    slug: "can-wife-see-hidden-photos-iphone",
    intent: "can my wife see hidden photos on iphone",
    cluster: "discovery-risk",
    title: localized(
      "Can My Wife See Hidden Photos on My iPhone?",
      "Kann meine Ehefrau ausgeblendete Fotos auf meinem iPhone sehen?",
      "¿Puede mi esposa ver las fotos ocultas de mi iPhone?",
      "هل تستطيع زوجتي رؤية الصور المخفية على iPhone؟",
      "Ma femme peut-elle voir les photos masquées de mon iPhone ?",
    ),
    angle: localized(
      "Yes, if she can authenticate with Face ID or the device passcode, access a synchronized device, view a shared library, or find another copy outside Hidden.",
      "Ja, wenn sie Face ID oder Gerätecode nutzen kann, ein synchronisiertes Gerät öffnet, eine Mediathek teilt oder eine andere Kopie findet.",
      "Sí, si puede usar Face ID o el código, acceder a otro dispositivo, ver una fototeca compartida o encontrar otra copia.",
      "نعم إذا استطاعت استخدام Face ID أو رمز الجهاز أو الوصول لجهاز متزامن أو مكتبة مشتركة أو نسخة أخرى.",
      "Oui, si elle peut utiliser Face ID ou le code, accéder à un appareil synchronisé, une photothèque partagée ou une autre copie.",
    ),
    terms: localized("wife see hidden photos, Hidden album, device passcode", "Ehefrau ausgeblendete Fotos, Album, Gerätecode", "esposa ver fotos ocultas, álbum, código", "الزوجة ترى الصور المخفية، ألبوم، رمز", "femme voir photos masquées, album, code"),
  },
  {
    slug: "can-husband-see-deleted-affair-photos",
    intent: "can my husband see deleted affair photos",
    cluster: "discovery-risk",
    title: localized(
      "Can My Husband See Deleted Affair Photos?",
      "Kann mein Ehemann gelöschte Affärenfotos sehen?",
      "¿Puede mi marido ver fotos borradas de una aventura?",
      "هل يستطيع زوجي رؤية صور العلاقة المحذوفة؟",
      "Mon mari peut-il voir des photos de liaison supprimées ?",
    ),
    angle: localized(
      "A deleted photo may remain in Recently Deleted, iCloud, backups, messages, editing apps, shared devices, or another person's possession.",
      "Ein gelöschtes Foto kann in Zuletzt gelöscht, iCloud, Backups, Nachrichten, Bearbeitungs-Apps, gemeinsamen Geräten oder bei anderen bleiben.",
      "Puede seguir en Eliminado recientemente, iCloud, copias, mensajes, editores, dispositivos o en manos de otra persona.",
      "قد تبقى الصورة في المحذوفة مؤخراً أو iCloud أو النسخ أو الرسائل أو تطبيقات التحرير أو أجهزة أخرى.",
      "Elle peut rester dans Suppressions récentes, iCloud, sauvegardes, messages, apps de retouche, appareils ou chez une autre personne.",
    ),
    terms: localized("husband see deleted photos, Recently Deleted, backups", "Ehemann gelöschte Fotos, Zuletzt gelöscht, Backups", "marido fotos borradas, Eliminado recientemente, copias", "الزوج يرى صوراً محذوفة، المحذوفة مؤخراً، نسخ", "mari voir photos supprimées, Suppressions récentes, sauvegardes"),
  },
  {
    slug: "can-girlfriend-see-hidden-album-icloud",
    intent: "can girlfriend see hidden album or icloud photos",
    cluster: "discovery-risk",
    title: localized(
      "Can My Girlfriend See My Hidden Album or iCloud Photos?",
      "Kann meine Freundin mein ausgeblendetes Album oder iCloud-Fotos sehen?",
      "¿Puede mi novia ver mi álbum Oculto o mis fotos de iCloud?",
      "هل تستطيع صديقتي رؤية الألبوم المخفي أو صور iCloud؟",
      "Ma petite amie peut-elle voir mon album Masquées ou mes photos iCloud ?",
    ),
    angle: localized(
      "Access depends on the device passcode, biometric enrollment, shared account credentials, family devices, shared libraries, and whether a copy was sent elsewhere.",
      "Der Zugriff hängt von Gerätecode, Biometrie, gemeinsamen Konten, Familiengeräten, Mediatheken und versendeten Kopien ab.",
      "Depende del código, biometría, cuentas compartidas, dispositivos familiares, fototecas y copias enviadas.",
      "يعتمد الوصول على رمز الجهاز والبصمة والحسابات المشتركة وأجهزة العائلة والمكتبات والنسخ المرسلة.",
      "L'accès dépend du code, de la biométrie, des comptes partagés, appareils familiaux, photothèques et copies envoyées.",
    ),
    terms: localized("girlfriend hidden album, iCloud Photos, shared account", "Freundin Album, iCloud-Fotos, Konto", "novia álbum Oculto, iCloud, cuenta", "الصديقة الألبوم المخفي، iCloud، حساب", "petite amie album Masquées, iCloud, compte"),
  },
  {
    slug: "can-boyfriend-find-secret-photo-vault",
    intent: "can boyfriend find secret photo vault app",
    cluster: "discovery-risk",
    title: localized(
      "Can My Boyfriend Find a Secret Photo Vault App?",
      "Kann mein Freund eine geheime Foto-Tresor-App finden?",
      "¿Puede mi novio encontrar una app secreta de fotos?",
      "هل يستطيع صديقي العثور على تطبيق خزنة صور سري؟",
      "Mon petit ami peut-il trouver une app coffre photo secrète ?",
    ),
    angle: localized(
      "A disguise reduces casual recognition, but App Library, search, Screen Time, battery usage, storage settings, purchase history, and notifications can still reveal an installed app.",
      "Eine Tarnung reduziert Erkennung, aber App-Mediathek, Suche, Bildschirmzeit, Batterie, Speicher, Kaufverlauf und Mitteilungen können die App zeigen.",
      "El disfraz reduce el reconocimiento, pero Biblioteca, búsqueda, Tiempo de uso, batería, almacenamiento, compras y notificaciones pueden revelarla.",
      "يقلل التمويه التعرف العرضي، لكن مكتبة التطبيقات والبحث ومدة الاستخدام والبطارية والتخزين والمشتريات قد تكشف التطبيق.",
      "Le déguisement réduit la reconnaissance, mais Bibliothèque, recherche, Temps d'écran, batterie, stockage, achats et notifications peuvent révéler l'app.",
    ),
    terms: localized("boyfriend find vault app, App Library, Screen Time, purchase history", "Freund findet Tresor, App-Mediathek, Bildschirmzeit, Käufe", "novio encuentra bóveda, Biblioteca, Tiempo de uso, compras", "الصديق يجد الخزنة، مكتبة التطبيقات، مدة الاستخدام، مشتريات", "petit ami trouve coffre, Bibliothèque, Temps d'écran, achats"),
  },
  {
    slug: "can-spouse-tell-installed-calculator-vault",
    intent: "can spouse tell installed calculator vault",
    cluster: "discovery-risk",
    title: localized(
      "Can a Spouse Tell You Installed a Calculator Vault?",
      "Kann ein Ehepartner erkennen, dass ein Taschenrechner-Tresor installiert ist?",
      "¿Puede tu pareja saber que instalaste una calculadora secreta?",
      "هل يستطيع الزوج معرفة أنك ثبتّ خزنة آلة حاسبة؟",
      "Un conjoint peut-il savoir que vous avez installé un coffre calculatrice ?",
    ),
    angle: localized(
      "The working calculator can look ordinary, but installation history, subscriptions, App Store purchases, device storage, app search, and usage reports may expose it.",
      "Der Rechner kann normal wirken, aber Installationsverlauf, Abos, App-Store-Käufe, Gerätespeicher, Suche und Nutzungsberichte können ihn zeigen.",
      "La calculadora puede parecer normal, pero instalaciones, suscripciones, compras, almacenamiento, búsqueda e informes pueden revelarla.",
      "قد تبدو الآلة الحاسبة عادية لكن سجل التثبيت والاشتراكات والمشتريات والتخزين والبحث وتقارير الاستخدام قد تكشفها.",
      "La calculatrice peut sembler normale, mais historique d'installation, abonnements, achats, stockage, recherche et rapports peuvent la révéler.",
    ),
    terms: localized("spouse calculator vault, installation history, subscriptions", "Ehepartner Taschenrechner-Tresor, Installation, Abos", "pareja calculadora secreta, instalación, suscripciones", "الزوج خزنة آلة حاسبة، تثبيت، اشتراكات", "conjoint coffre calculatrice, installation, abonnements"),
  },
  {
    slug: "hide-evidence-of-infidelity-iphone",
    intent: "how to hide evidence of infidelity on iphone",
    cluster: "infidelity-synonyms",
    title: localized(
      "How to Hide Evidence of Infidelity on Your iPhone",
      "Beweise für Untreue auf dem iPhone verbergen",
      "Cómo ocultar pruebas de infidelidad en tu iPhone",
      "كيفية إخفاء أدلة الخيانة على iPhone",
      "Comment cacher des preuves d'infidélité sur votre iPhone",
    ),
    angle: localized(
      "Evidence can mean photos, videos, screenshots, PDFs, voice notes, or downloads; a file vault protects imported evidence but not live communications or external records.",
      "Beweise können Fotos, Videos, Screenshots, PDFs, Sprachnotizen oder Downloads sein; ein Tresor schützt Importe, nicht Live-Kommunikation oder externe Daten.",
      "Las pruebas pueden ser fotos, videos, capturas, PDF, notas o descargas; la bóveda protege lo importado, no comunicaciones ni registros externos.",
      "قد تكون الأدلة صوراً أو فيديوهات أو لقطات أو ملفات أو ملاحظات؛ تحمي الخزنة المستورد لا الاتصالات الحية أو السجلات الخارجية.",
      "Les preuves peuvent être photos, vidéos, captures, PDF, notes vocales ou téléchargements; le coffre protège les imports, pas les communications ou traces externes.",
    ),
    terms: localized("infidelity evidence, iPhone, files, vault", "Untreue-Beweise, iPhone, Dateien, Tresor", "pruebas infidelidad, iPhone, archivos, bóveda", "أدلة خيانة، iPhone، ملفات، خزنة", "preuves infidélité, iPhone, fichiers, coffre"),
  },
  {
    slug: "best-infidelity-app-hide-photos-files",
    intent: "best infidelity app for hiding photos and files",
    cluster: "infidelity-synonyms",
    title: localized(
      "Best Infidelity App for Hiding Private Photos and Files",
      "Beste Untreue-App zum Verbergen privater Fotos und Dateien",
      "Mejor app para ocultar fotos y archivos de una infidelidad",
      "أفضل تطبيق لإخفاء صور وملفات الخيانة",
      "Meilleure app pour cacher photos et fichiers d'infidélité",
    ),
    angle: localized(
      "Judge an infidelity vault by separate credentials, file encryption, believable disguise, local storage, decoy access, failed-login records, and transparent limitations.",
      "Bewerte einen Untreue-Tresor nach eigener PIN, Verschlüsselung, glaubwürdiger Tarnung, lokaler Speicherung, Köderzugang, Fehlversuchen und klaren Grenzen.",
      "Evalúa PIN propio, cifrado, disfraz creíble, almacenamiento local, señuelo, fallos y límites transparentes.",
      "قيّم الخزنة حسب الرمز المستقل والتشفير والتمويه والتخزين المحلي والخزنة الوهمية وسجل المحاولات والحدود الواضحة.",
      "Évaluez code distinct, chiffrement, déguisement crédible, stockage local, leurre, échecs et limites transparentes.",
    ),
    terms: localized("best infidelity app, photo vault, file encryption", "beste Untreue-App, Foto-Tresor, Verschlüsselung", "mejor app infidelidad, bóveda, cifrado", "أفضل تطبيق خيانة، خزنة صور، تشفير", "meilleure app infidélité, coffre, chiffrement"),
  },
  {
    slug: "how-to-keep-an-affair-secret-iphone",
    intent: "how to keep an affair secret on iphone",
    cluster: "infidelity-synonyms",
    title: localized(
      "How to Keep an Affair Secret on Your iPhone: The Digital Limits",
      "Eine Affäre auf dem iPhone geheim halten: Die digitalen Grenzen",
      "Cómo mantener una aventura secreta en tu iPhone: límites digitales",
      "كيفية إبقاء العلاقة سرية على iPhone: الحدود الرقمية",
      "Comment garder une liaison secrète sur iPhone : les limites numériques",
    ),
    angle: localized(
      "No app can guarantee secrecy because an affair creates records across two people, multiple services, financial systems, locations, and synchronized devices.",
      "Keine App garantiert Geheimhaltung, weil eine Affäre Spuren bei zwei Personen, Diensten, Finanzen, Standorten und Geräten erzeugt.",
      "Ninguna app garantiza el secreto porque una aventura crea registros entre dos personas, servicios, finanzas, ubicaciones y dispositivos.",
      "لا يضمن أي تطبيق السرية لأن العلاقة تنشئ سجلات لدى شخصين وخدمات وأنظمة مالية ومواقع وأجهزة متعددة.",
      "Aucune app ne garantit le secret, car une liaison crée des traces chez deux personnes, dans plusieurs services, finances, positions et appareils.",
    ),
    terms: localized("keep affair secret, digital traces, two devices", "Affäre geheim, digitale Spuren, zwei Geräte", "mantener aventura secreta, rastros, dispositivos", "إبقاء العلاقة سرية، آثار رقمية، أجهزة", "garder liaison secrète, traces, appareils"),
  },
  {
    slug: "hide-adultery-photos-videos-iphone",
    intent: "hide adultery photos and videos on iphone",
    cluster: "infidelity-synonyms",
    title: localized(
      "How to Hide Adultery Photos and Videos on iPhone",
      "Ehebruch-Fotos und -Videos auf dem iPhone verbergen",
      "Cómo ocultar fotos y videos de adulterio en iPhone",
      "كيفية إخفاء صور وفيديوهات الزنا على iPhone",
      "Comment cacher des photos et vidéos d'adultère sur iPhone",
    ),
    angle: localized(
      "Adultery media requires the same file controls as affair media, but married users are more likely to share Apple accounts, family devices, finances, calendars, and home networks.",
      "Ehebruch-Medien brauchen dieselbe Dateisicherheit, aber Verheiratete teilen häufiger Apple-Konten, Familiengeräte, Finanzen, Kalender und Netzwerke.",
      "Requieren los mismos controles, pero las personas casadas comparten más cuentas Apple, dispositivos, finanzas, calendarios y redes.",
      "تحتاج وسائط الزنا إلى حماية الملفات نفسها، لكن المتزوجين غالباً يشاركون حسابات Apple والأجهزة والمال والتقويم والشبكة.",
      "Ces médias exigent les mêmes contrôles, mais les personnes mariées partagent plus souvent comptes Apple, appareils, finances, calendriers et réseaux.",
    ),
    terms: localized("adultery photos, adultery videos, married, iPhone", "Ehebruch Fotos, Videos, verheiratet, iPhone", "adulterio fotos, videos, casado, iPhone", "زنا صور، فيديو، متزوج، iPhone", "adultère photos, vidéos, marié, iPhone"),
  },
  {
    slug: "secret-photo-vault-extramarital-affair",
    intent: "secret photo vault for extramarital affair",
    cluster: "infidelity-synonyms",
    title: localized(
      "Secret Photo Vault for an Extramarital Affair",
      "Geheimer Foto-Tresor für eine außereheliche Affäre",
      "Bóveda secreta de fotos para una relación extramatrimonial",
      "خزنة صور سرية لعلاقة خارج الزواج",
      "Coffre photo secret pour une liaison extraconjugale",
    ),
    angle: localized(
      "An extramarital-affair vault should isolate imported files from shared marital access while clearly distinguishing file privacy from shared financial, account, and location evidence.",
      "Ein Tresor für eine außereheliche Affäre trennt importierte Dateien vom gemeinsamen Zugriff, nicht aber Finanz-, Konto- und Standortspuren.",
      "Debe separar archivos importados del acceso compartido, sin confundir privacidad de archivos con pruebas financieras, de cuenta o ubicación.",
      "ينبغي أن تفصل الخزنة الملفات المستوردة عن الوصول الزوجي المشترك دون الخلط بينها وبين السجلات المالية والحسابات والموقع.",
      "Il doit isoler les fichiers importés de l'accès conjugal partagé sans confondre fichiers et preuves financières, de compte ou de position.",
    ),
    terms: localized("extramarital affair, secret photo vault, married privacy", "außereheliche Affäre, Foto-Tresor, Privatsphäre", "relación extramatrimonial, bóveda, privacidad", "علاقة خارج الزواج، خزنة صور، خصوصية", "liaison extraconjugale, coffre photo, confidentialité"),
  },
  {
    slug: "how-unfaithful-spouses-hide-photos",
    intent: "how unfaithful spouses hide photos",
    cluster: "infidelity-synonyms",
    title: localized(
      "How Unfaithful Spouses Hide Photos on Their Phones",
      "Wie untreue Ehepartner Fotos auf ihren Handys verstecken",
      "Cómo ocultan fotos los cónyuges infieles en sus teléfonos",
      "كيف يخفي الأزواج غير المخلصين الصور على هواتفهم",
      "Comment les conjoints infidèles cachent des photos sur leur téléphone",
    ),
    angle: localized(
      "Unfaithful spouses may use built-in Hidden albums, locked notes, alternate accounts, cloud drives, private browsers, renamed files, and disguised vaults, each leaving different traces.",
      "Untreue Ehepartner nutzen Ausgeblendet, gesperrte Notizen, alternative Konten, Cloud-Speicher, private Browser, umbenannte Dateien und Tresore mit unterschiedlichen Spuren.",
      "Pueden usar Oculto, notas, cuentas alternativas, nubes, navegadores, archivos renombrados y bóvedas, cada uno con rastros distintos.",
      "قد يستخدم الأزواج الألبوم المخفي والملاحظات والحسابات البديلة والسحابة والمتصفحات والملفات المعاد تسميتها والخزنات.",
      "Ils peuvent utiliser Masquées, notes, comptes alternatifs, cloud, navigateurs, fichiers renommés et coffres, chacun laissant des traces différentes.",
    ),
    terms: localized("unfaithful spouse, hide photos, hidden album, vault", "untreuer Ehepartner, Fotos verstecken, Album, Tresor", "cónyuge infiel, ocultar fotos, álbum, bóveda", "زوج غير مخلص، إخفاء صور، ألبوم، خزنة", "conjoint infidèle, cacher photos, album, coffre"),
  },
  {
    slug: "hide-extramarital-relationship-phone",
    intent: "hide an extramarital relationship on phone",
    cluster: "infidelity-synonyms",
    title: localized(
      "How to Hide an Extramarital Relationship on Your Phone",
      "Eine außereheliche Beziehung auf dem Handy verbergen",
      "Cómo ocultar una relación extramatrimonial en tu teléfono",
      "كيفية إخفاء علاقة خارج الزواج على هاتفك",
      "Comment cacher une relation extraconjugale sur votre téléphone",
    ),
    angle: localized(
      "A relationship creates more than media: communication patterns, contacts, account logins, calendars, payments, transport, locations, and the other person's device remain outside a file vault.",
      "Eine Beziehung erzeugt mehr als Medien: Kommunikation, Kontakte, Logins, Kalender, Zahlungen, Fahrten, Standorte und das andere Gerät bleiben außerhalb.",
      "Una relación crea comunicaciones, contactos, cuentas, calendarios, pagos, viajes, ubicaciones y otro dispositivo fuera de la bóveda.",
      "تنشئ العلاقة اتصالات وجهات اتصال وحسابات وتقويماً ومدفوعات وتنقلاً وموقعاً وهاتف الشخص الآخر خارج الخزنة.",
      "Une relation crée communications, contacts, comptes, calendriers, paiements, trajets, positions et l'autre appareil, hors du coffre.",
    ),
    terms: localized("extramarital relationship, phone records, affair files", "außereheliche Beziehung, Handyspuren, Dateien", "relación extramatrimonial, registros, archivos", "علاقة خارج الزواج، سجلات الهاتف، ملفات", "relation extraconjugale, traces téléphone, fichiers"),
  },
  {
    slug: "hide-secret-lover-photos-iphone",
    intent: "hide photos of secret lover on iphone",
    cluster: "infidelity-synonyms",
    title: localized(
      "How to Hide Photos of a Secret Lover on iPhone",
      "Fotos einer heimlichen Liebschaft auf dem iPhone verbergen",
      "Cómo ocultar fotos de un amante secreto en iPhone",
      "كيفية إخفاء صور الحبيب السري على iPhone",
      "Comment cacher des photos d'un amant secret sur iPhone",
    ),
    angle: localized(
      "Secret-lover photos often arrive through messages or downloads, so protect the imported file while auditing attachments, chat galleries, cloud photos, and sender copies.",
      "Fotos einer heimlichen Liebschaft kommen oft über Nachrichten oder Downloads; prüfe neben dem Import Anhänge, Chat-Galerien, Cloud und Absenderkopien.",
      "Suelen llegar por mensajes o descargas; protege el archivo y revisa adjuntos, galerías, nube y copias del remitente.",
      "غالباً تصل الصور عبر الرسائل أو التنزيلات؛ احمِ الملف وراجع المرفقات ومعرض المحادثة والسحابة ونسخ المرسل.",
      "Elles arrivent souvent par messages ou téléchargements; protégez le fichier et vérifiez pièces jointes, galeries, cloud et copies de l'expéditeur.",
    ),
    terms: localized("secret lover photos, message attachments, cloud copies", "heimliche Liebschaft Fotos, Anhänge, Cloud", "fotos amante secreto, adjuntos, nube", "صور الحبيب السري، مرفقات، سحابة", "photos amant secret, pièces jointes, cloud"),
  },
  {
    slug: "hide-other-woman-photos",
    intent: "hide photos of other woman from partner",
    cluster: "infidelity-synonyms",
    title: localized(
      "How to Hide Photos of the Other Woman from Your Partner",
      "Fotos der anderen Frau vor dem Partner verbergen",
      "Cómo ocultar fotos de la otra mujer a tu pareja",
      "كيفية إخفاء صور المرأة الأخرى عن شريكك",
      "Comment cacher les photos de l'autre femme à votre partenaire",
    ),
    angle: localized(
      "Photos of the other woman may be identifiable through faces, locations, timestamps, contact photos, screenshots, social-media exports, and shared acquaintances.",
      "Fotos der anderen Frau können über Gesichter, Orte, Zeiten, Kontaktbilder, Screenshots, Social-Media-Exporte und Bekannte identifizierbar sein.",
      "Pueden identificarse por caras, lugares, fechas, contactos, capturas, redes y conocidos comunes.",
      "قد تُعرف المرأة الأخرى عبر الوجه والموقع والتوقيت وصورة جهة الاتصال واللقطات والشبكات والمعارف.",
      "Elle peut être identifiée par visage, lieu, date, photo de contact, captures, réseaux sociaux et connaissances communes.",
    ),
    terms: localized("other woman photos, partner, timestamps, social media", "andere Frau Fotos, Partner, Zeitstempel, Social Media", "otra mujer fotos, pareja, fechas, redes", "المرأة الأخرى، صور، شريك، توقيت، شبكات", "autre femme, photos, partenaire, dates, réseaux"),
  },
  {
    slug: "hide-other-man-photos-partner",
    intent: "hide photos of other man from partner",
    cluster: "infidelity-synonyms",
    title: localized(
      "How to Hide Photos of the Other Man from Your Partner",
      "Fotos des anderen Mannes vor dem Partner verbergen",
      "Cómo ocultar fotos del otro hombre a tu pareja",
      "كيفية إخفاء صور الرجل الآخر عن شريكك",
      "Comment cacher les photos de l'autre homme à votre partenaire",
    ),
    angle: localized(
      "The other man's photos can persist as contact avatars, chat media, screenshots, downloaded files, social profiles, and synchronized camera-roll copies.",
      "Fotos des anderen Mannes können als Kontaktbild, Chat-Medium, Screenshot, Download, Social-Profil und synchronisierte Galerie-Kopie bleiben.",
      "Pueden persistir como avatar, medio de chat, captura, descarga, perfil social y copia sincronizada.",
      "قد تبقى صور الرجل الآخر كصورة جهة اتصال أو وسائط محادثة أو لقطة أو تنزيل أو ملف اجتماعي أو نسخة متزامنة.",
      "Elles peuvent rester comme avatar, média de chat, capture, téléchargement, profil social et copie synchronisée.",
    ),
    terms: localized("other man photos, partner, contact photo, chat media", "anderer Mann Fotos, Partner, Kontaktbild, Chat", "otro hombre fotos, pareja, contacto, chat", "الرجل الآخر، صور، شريك، جهة اتصال، محادثة", "autre homme, photos, partenaire, contact, chat"),
  },
  {
    slug: "hide-side-piece-photos-videos",
    intent: "hide side piece photos and videos",
    cluster: "infidelity-synonyms",
    title: localized(
      "How to Hide Side Piece Photos and Videos on iPhone",
      "Fotos und Videos einer Nebenbeziehung auf dem iPhone verbergen",
      "Cómo ocultar fotos y videos de tu relación paralela en iPhone",
      "كيفية إخفاء صور وفيديوهات العلاقة الجانبية على iPhone",
      "Comment cacher photos et vidéos d'une relation parallèle sur iPhone",
    ),
    angle: localized(
      "The slang changes, but the file problem is the same: verify imports, remove source copies carefully, review cloud synchronization, and understand that live relationship evidence remains elsewhere.",
      "Der Slang ändert nichts am Dateiproblem: Importe prüfen, Quellen vorsichtig entfernen, Cloud kontrollieren und Live-Belege getrennt betrachten.",
      "El término cambia, no el problema: comprueba importaciones, elimina fuentes, revisa la nube y separa las pruebas activas.",
      "يتغير المصطلح لا المشكلة: تحقق من الاستيراد واحذف المصادر بحذر وراجع السحابة وافصل الأدلة الحية.",
      "Le terme change, pas le problème : vérifiez les imports, retirez les sources, contrôlez le cloud et distinguez les preuves actives.",
    ),
    terms: localized("side piece photos, side relationship, videos, vault", "Nebenbeziehung Fotos, Videos, Tresor", "relación paralela, fotos, videos, bóveda", "علاقة جانبية، صور، فيديو، خزنة", "relation parallèle, photos, vidéos, coffre"),
  },
  {
    slug: "hide-sneaky-link-photos-screenshots",
    intent: "hide sneaky link photos videos screenshots",
    cluster: "infidelity-synonyms",
    title: localized(
      "How to Hide Sneaky Link Photos, Videos, and Screenshots",
      "Fotos, Videos und Screenshots eines heimlichen Treffens verbergen",
      "Cómo ocultar fotos, videos y capturas de un encuentro secreto",
      "كيفية إخفاء صور وفيديوهات ولقطات العلاقة السرية",
      "Comment cacher photos, vidéos et captures d'une relation secrète",
    ),
    angle: localized(
      "Sneaky-link media often originates in social or messaging apps, so the source conversation, disappearing-media settings, screenshots, downloads, and notifications must be considered separately.",
      "Medien heimlicher Treffen stammen oft aus Social- oder Messenger-Apps; Quellchat, verschwindende Medien, Screenshots, Downloads und Mitteilungen sind separat.",
      "Suele venir de redes o mensajería; conversación, contenido efímero, capturas, descargas y notificaciones son independientes.",
      "غالباً تأتي الوسائط من تطبيقات التواصل؛ المحادثة الأصلية والمحتوى المؤقت واللقطات والتنزيلات والإشعارات مستقلة.",
      "Ces médias viennent souvent des réseaux ou messageries; conversation, contenu éphémère, captures, téléchargements et notifications sont distincts.",
    ),
    terms: localized("sneaky link, secret hookup, screenshots, downloads", "heimliches Treffen, Screenshots, Downloads", "encuentro secreto, capturas, descargas", "علاقة سرية، لقطات، تنزيلات", "relation secrète, captures, téléchargements"),
  },
  {
    slug: "hide-double-life-iphone",
    intent: "hide a double life on iphone",
    cluster: "infidelity-synonyms",
    title: localized(
      "How to Hide a Double Life on Your iPhone: Why a Vault Is Not Enough",
      "Ein Doppelleben auf dem iPhone verbergen: Warum ein Tresor nicht reicht",
      "Cómo ocultar una doble vida en tu iPhone: por qué una bóveda no basta",
      "كيفية إخفاء حياة مزدوجة على iPhone: لماذا لا تكفي الخزنة",
      "Comment cacher une double vie sur iPhone : pourquoi un coffre ne suffit pas",
    ),
    angle: localized(
      "A double life creates sustained patterns across communications, identities, accounts, schedules, finances, travel, locations, devices, and people; file encryption covers only a narrow slice.",
      "Ein Doppelleben erzeugt Muster in Kommunikation, Identitäten, Konten, Terminen, Finanzen, Reisen, Standorten, Geräten und Personen; Verschlüsselung deckt nur einen Teil.",
      "Crea patrones en comunicaciones, identidades, cuentas, horarios, finanzas, viajes, ubicaciones, dispositivos y personas; el cifrado cubre solo una parte.",
      "تنشئ الحياة المزدوجة أنماطاً في الاتصالات والهويات والحسابات والجداول والمال والسفر والموقع والأجهزة والأشخاص؛ التشفير يغطي جزءاً ضيقاً.",
      "Une double vie crée des schémas dans communications, identités, comptes, horaires, finances, voyages, positions, appareils et personnes; le chiffrement n'en couvre qu'une part.",
    ),
    terms: localized("double life, iPhone, secret identity, digital traces", "Doppelleben, iPhone, Identität, digitale Spuren", "doble vida, iPhone, identidad, rastros", "حياة مزدوجة، iPhone، هوية، آثار رقمية", "double vie, iPhone, identité, traces numériques"),
  },
  {
    slug: "hide-side-relationship-shared-photos",
    intent: "hide side relationship from shared photos",
    cluster: "infidelity-synonyms",
    title: localized(
      "How to Keep a Side Relationship Out of Shared Photos and Family Devices",
      "Eine Nebenbeziehung aus geteilten Fotos und Familiengeräten heraushalten",
      "Cómo evitar que una relación paralela aparezca en fotos y dispositivos familiares",
      "كيفية منع ظهور العلاقة الجانبية في الصور والأجهزة العائلية المشتركة",
      "Comment éviter qu'une relation parallèle apparaisse dans les photos et appareils familiaux",
    ),
    angle: localized(
      "Shared Photo Library, family iPads, Macs, smart displays, shared albums, automatic imports, and cloud memories can surface images outside the original phone.",
      "Geteilte Mediathek, Familien-iPads, Macs, Displays, Alben, automatische Importe und Cloud-Rückblicke können Bilder außerhalb des Handys zeigen.",
      "Fototeca compartida, iPad, Mac, pantallas, álbumes, importaciones y recuerdos pueden mostrar imágenes fuera del teléfono.",
      "قد تعرض المكتبة المشتركة وأجهزة العائلة وMac والشاشات والألبومات والاستيراد التلقائي والذكريات الصور خارج الهاتف.",
      "Photothèque partagée, iPad familial, Mac, écrans, albums, imports et souvenirs peuvent afficher les images hors du téléphone.",
    ),
    terms: localized("side relationship, Shared Photo Library, family devices", "Nebenbeziehung, geteilte Mediathek, Familiengeräte", "relación paralela, Fototeca compartida, dispositivos", "علاقة جانبية، مكتبة مشتركة، أجهزة عائلية", "relation parallèle, photothèque partagée, appareils familiaux"),
  },
  {
    slug: "protect-affair-selfies-iphone",
    intent: "protect affair selfies on iphone",
    cluster: "intimate-media",
    title: localized(
      "How to Protect Affair Selfies on iPhone",
      "Affären-Selfies auf dem iPhone schützen",
      "Cómo proteger selfies de una aventura en iPhone",
      "كيفية حماية صور السيلفي الخاصة بالعلاقة على iPhone",
      "Comment protéger des selfies de liaison sur iPhone",
    ),
    angle: localized(
      "Selfies contain faces, environments, mirrors, metadata, timestamps, and recognizable objects that may identify both the person and the meeting location.",
      "Selfies enthalten Gesichter, Umgebung, Spiegel, Metadaten, Zeiten und erkennbare Gegenstände, die Person und Treffpunkt identifizieren.",
      "Contienen caras, entornos, espejos, metadatos, fechas y objetos que pueden identificar persona y lugar.",
      "تحتوي صور السيلفي على وجوه وبيئة ومرايا وبيانات وتوقيت وأشياء قد تحدد الشخص والمكان.",
      "Les selfies contiennent visages, environnements, miroirs, métadonnées, dates et objets pouvant identifier personne et lieu.",
    ),
    terms: localized("affair selfies, faces, metadata, location clues", "Affären-Selfies, Gesichter, Metadaten, Standort", "selfies aventura, caras, metadatos, ubicación", "سيلفي العلاقة، وجوه، بيانات، موقع", "selfies liaison, visages, métadonnées, position"),
  },
  {
    slug: "where-cheating-spouse-hides-videos",
    intent: "where cheating spouse hides videos",
    cluster: "discovery-risk",
    title: localized(
      "Where Does a Cheating Spouse Hide Videos on an iPhone?",
      "Wo versteckt ein untreuer Ehepartner Videos auf dem iPhone?",
      "¿Dónde oculta videos un cónyuge infiel en un iPhone?",
      "أين يخفي الزوج الخائن الفيديوهات على iPhone؟",
      "Où un conjoint infidèle cache-t-il des vidéos sur iPhone ?",
    ),
    angle: localized(
      "Possible locations include Hidden, Recently Deleted, Files, Downloads, cloud drives, locked notes, message galleries, editing apps, and disguised vaults.",
      "Mögliche Orte sind Ausgeblendet, Zuletzt gelöscht, Dateien, Downloads, Cloud, gesperrte Notizen, Chat-Galerien, Bearbeitungs-Apps und Tresore.",
      "Pueden estar en Oculto, Eliminado recientemente, Archivos, Descargas, nubes, notas, chats, editores y bóvedas.",
      "قد توجد في الألبوم المخفي والمحذوفة مؤخراً والملفات والتنزيلات والسحابة والملاحظات ومعارض الرسائل وتطبيقات التحرير والخزنات.",
      "Emplacements possibles : Masquées, Suppressions récentes, Fichiers, Téléchargements, cloud, Notes, galeries de chat, retouche et coffres.",
    ),
    terms: localized("cheating spouse videos, hidden locations, Files, vault", "untreuer Ehepartner Videos, Verstecke, Dateien, Tresor", "cónyuge infiel videos, lugares, Archivos, bóveda", "زوج خائن فيديوهات، أماكن مخفية، ملفات، خزنة", "conjoint infidèle vidéos, emplacements, Fichiers, coffre"),
  },
  {
    slug: "hide-affair-downloads-iphone",
    intent: "hide affair downloads on iphone",
    cluster: "intimate-media",
    title: localized(
      "How to Hide Affair Downloads on iPhone",
      "Affären-Downloads auf dem iPhone verbergen",
      "Cómo ocultar descargas de una aventura en iPhone",
      "كيفية إخفاء تنزيلات العلاقة على iPhone",
      "Comment cacher des téléchargements liés à une liaison sur iPhone",
    ),
    angle: localized(
      "Downloaded photos, videos, PDFs, audio, and archives can appear in Files recents, Safari downloads, cloud folders, Spotlight, share sheets, and the source app.",
      "Downloads können in Dateien, Safari, Cloud-Ordnern, Spotlight, Teilen-Menüs und der Quell-App erscheinen.",
      "Pueden aparecer en recientes de Archivos, Descargas de Safari, nubes, Spotlight, compartir y la app de origen.",
      "قد تظهر التنزيلات في الملفات الحديثة وتنزيلات Safari والسحابة وSpotlight وقائمة المشاركة والتطبيق المصدر.",
      "Ils peuvent apparaître dans récents de Fichiers, téléchargements Safari, cloud, Spotlight, partage et l'app source.",
    ),
    terms: localized("affair downloads, Files recents, Safari downloads, Spotlight", "Affären-Downloads, Dateien zuletzt, Safari, Spotlight", "descargas aventura, recientes, Safari, Spotlight", "تنزيلات العلاقة، الملفات الحديثة، Safari، Spotlight", "téléchargements liaison, récents, Safari, Spotlight"),
  },
  {
    slug: "can-spouse-see-calculator-vault-purchase",
    intent: "can spouse see calculator vault purchase",
    cluster: "discovery-risk",
    title: localized(
      "Can Your Spouse See a Calculator Vault Purchase or Subscription?",
      "Kann der Ehepartner Kauf oder Abo eines Taschenrechner-Tresors sehen?",
      "¿Puede tu pareja ver la compra o suscripción de una calculadora secreta?",
      "هل يستطيع الزوج رؤية شراء أو اشتراك خزنة آلة حاسبة؟",
      "Votre conjoint peut-il voir l'achat ou l'abonnement d'un coffre calculatrice ?",
    ),
    angle: localized(
      "Shared Apple accounts, Family Sharing, purchase history, subscription settings, receipts, bank statements, and restore-purchase flows may reveal acquisition or billing.",
      "Gemeinsame Apple-Konten, Familienfreigabe, Kaufverlauf, Abos, Belege, Kontoauszüge und Kaufwiederherstellung können Erwerb oder Zahlung zeigen.",
      "Cuentas compartidas, En familia, compras, suscripciones, recibos, tarjetas y restauración pueden revelar adquisición o pago.",
      "قد تكشف حسابات Apple المشتركة والمشاركة العائلية وسجل المشتريات والاشتراكات والإيصالات وكشوف البنك عملية الشراء.",
      "Comptes partagés, Partage familial, historique, abonnements, reçus, relevés et restauration peuvent révéler achat ou paiement.",
    ),
    terms: localized("calculator vault purchase, subscription, spouse, Family Sharing", "Taschenrechner-Tresor Kauf, Abo, Ehepartner, Familie", "calculadora secreta compra, suscripción, pareja, familia", "شراء خزنة آلة حاسبة، اشتراك، زوج، مشاركة عائلية", "coffre calculatrice achat, abonnement, conjoint, famille"),
  },
  {
    slug: "infidelity-evidence-icloud-after-deletion",
    intent: "can infidelity evidence remain in icloud after deletion",
    cluster: "discovery-risk",
    title: localized(
      "Can Infidelity Evidence Remain in iCloud After Deletion?",
      "Können Beweise für Untreue nach dem Löschen in iCloud bleiben?",
      "¿Pueden quedar pruebas de infidelidad en iCloud después de borrarlas?",
      "هل يمكن أن تبقى أدلة الخيانة في iCloud بعد الحذف؟",
      "Des preuves d'infidélité peuvent-elles rester dans iCloud après suppression ?",
    ),
    angle: localized(
      "Yes, depending on Recently Deleted, backups, shared libraries, message synchronization, files in iCloud Drive, offline devices, and separately exported copies.",
      "Ja, abhängig von Zuletzt gelöscht, Backups, geteilten Mediatheken, Nachrichten-Sync, iCloud Drive, Offline-Geräten und Exporten.",
      "Sí, según Eliminado recientemente, copias, fototecas, mensajes, iCloud Drive, dispositivos sin conexión y exportaciones.",
      "نعم حسب المحذوفة مؤخراً والنسخ الاحتياطية والمكتبات المشتركة ومزامنة الرسائل وiCloud Drive والأجهزة غير المتصلة والنسخ المصدرة.",
      "Oui, selon Suppressions récentes, sauvegardes, photothèques, messages, iCloud Drive, appareils hors ligne et exports.",
    ),
    terms: localized("infidelity evidence iCloud, deletion, backups, shared library", "Untreue-Beweise iCloud, Löschen, Backups, Mediathek", "pruebas infidelidad iCloud, borrado, copias, fototeca", "أدلة خيانة iCloud، حذف، نسخ، مكتبة", "preuves infidélité iCloud, suppression, sauvegardes, photothèque"),
  },
  {
    slug: "secret-relationship-photo-vault",
    intent: "secret relationship photo vault",
    cluster: "infidelity-synonyms",
    title: localized(
      "Secret Relationship Photo Vault: What It Can Actually Hide",
      "Foto-Tresor für eine geheime Beziehung: Was er wirklich verbirgt",
      "Bóveda de fotos para una relación secreta: qué oculta realmente",
      "خزنة صور لعلاقة سرية: ما الذي تخفيه فعلاً",
      "Coffre photo pour une relation secrète : ce qu'il cache réellement",
    ),
    angle: localized(
      "A relationship vault can protect imported media and documents under a separate credential, while live apps, accounts, notifications, purchases, contacts, and other devices remain outside.",
      "Ein Beziehungstresor schützt importierte Medien und Dokumente mit eigener PIN; Live-Apps, Konten, Mitteilungen, Käufe, Kontakte und andere Geräte bleiben außen.",
      "Protege medios y documentos importados con otro código; apps activas, cuentas, notificaciones, compras, contactos y dispositivos quedan fuera.",
      "تحمي خزنة العلاقة الوسائط والمستندات المستوردة برمز مستقل، بينما تبقى التطبيقات والحسابات والإشعارات والمشتريات وجهات الاتصال والأجهزة خارجها.",
      "Il protège médias et documents importés avec un code distinct; apps actives, comptes, notifications, achats, contacts et autres appareils restent dehors.",
    ),
    terms: localized("secret relationship vault, photos, documents, separate PIN", "geheime Beziehung Tresor, Fotos, Dokumente, PIN", "relación secreta bóveda, fotos, documentos, PIN", "علاقة سرية خزنة، صور، مستندات، PIN", "relation secrète coffre, photos, documents, code"),
  },
  {
    slug: "best-app-hide-affair-from-spouse",
    intent: "best app to hide affair from spouse",
    cluster: "infidelity-synonyms",
    title: localized(
      "Best App to Hide Affair Photos and Files from a Spouse",
      "Beste App, um Affärenfotos und Dateien vor dem Ehepartner zu verbergen",
      "Mejor app para ocultar fotos y archivos de una aventura a tu pareja",
      "أفضل تطبيق لإخفاء صور وملفات العلاقة عن الزوج",
      "Meilleure app pour cacher photos et fichiers de liaison à un conjoint",
    ),
    angle: localized(
      "For spouse-level access, prioritize a credential unrelated to the device code, file encryption, believable disguise, decoy access, local storage, and an honest understanding of external traces.",
      "Bei Zugriff durch den Ehepartner zählen eine unabhängige PIN, Verschlüsselung, glaubwürdige Tarnung, Köderzugang, lokale Speicherung und klare Grenzen.",
      "Prioriza un código distinto, cifrado, disfraz creíble, señuelo, almacenamiento local y comprensión de las huellas externas.",
      "عند وصول الزوج للهاتف أعطِ الأولوية لرمز مستقل وتشفير وتمويه مقنع وخزنة وهمية وتخزين محلي وفهم الآثار الخارجية.",
      "Priorisez un code indépendant, le chiffrement, un déguisement crédible, un leurre, le stockage local et la compréhension des traces externes.",
    ),
    terms: localized("best app hide affair from spouse, vault, separate PIN", "beste App Affäre Ehepartner, Tresor, PIN", "mejor app ocultar aventura pareja, bóveda, PIN", "أفضل تطبيق إخفاء علاقة عن الزوج، خزنة، PIN", "meilleure app cacher liaison conjoint, coffre, code"),
  },
];

const clusterHubs: Record<Cluster, string> = {
  "core-cheating": "apps-cheaters-use-to-hide-photos-and-files",
  "partner-specific": "wife-husband-checks-my-phone-private-vault",
  "lgbtq-affairs": "discreet-gay-lesbian-affair-photo-privacy",
  "messaging-dating": "hide-dating-app-screenshots-and-affair-messages",
  "intimate-media": "how-to-hide-cheating-photos-on-iphone",
  "discovery-risk": "can-deleted-cheating-photos-be-recovered",
  "infidelity-synonyms": "how-to-hide-cheating-photos-on-iphone",
};

const copy: Record<
  BaseLocale,
  {
    description: (title: string) => string;
    answerHeading: string;
    filesHeading: string;
    filesText: string;
    files: string[];
    workflowHeading: string;
    workflow: string[];
    tracesHeading: string;
    tracesText: string;
    traces: string[];
    limitsHeading: string;
    limits: string;
    faqHeading: string;
    question: (title: string) => string;
    answer: string;
    secondQuestion: string;
    secondAnswer: string;
    cta: string;
  }
> = {
  en: {
    description: (title) =>
      `${title}. A blunt guide to protected files, cloud copies, spouse access, and the digital traces a vault cannot remove.`,
    answerHeading: "Direct answer",
    filesHeading: "What can be placed inside an encrypted vault",
    filesText:
      "Stash can protect files that are deliberately imported into its separately locked, encrypted storage. In this situation, the useful file layer includes:",
    files: [
      "Photos, videos, screenshots, PDFs, voice notes, downloaded attachments, tickets, receipts, and other saved files.",
      "Copies verified inside the vault before any original is removed from Photos, Files, Downloads, or the source app.",
      "Harmless decoy content behind a secondary PIN and records of failed attempts to open the vault.",
      "Files organized away from the ordinary camera roll, recent-file lists, and casual photo swiping.",
    ],
    workflowHeading: "File-by-file workflow",
    workflow: [
      "Identify every source copy: camera roll, Hidden, Recently Deleted, Files, Downloads, message attachment, editing export, shared album, and cloud folder.",
      "Import the sensitive files into Stash and open each photo, document, and audio file. Play large videos from beginning to end.",
      "Use a vault PIN unrelated to the iPhone passcode, birthdays, anniversaries, or a partner's known codes.",
      "Choose the calculator, fitness, or music disguise that fits the apps normally present on the device.",
      "Only after verification, decide which source copies should be removed and review synchronized devices separately.",
    ],
    tracesHeading: "What still reveals cheating or an affair",
    tracesText:
      "A file vault is not a system-wide invisibility tool. The following evidence remains outside its control:",
    traces: [
      "Live messages, calls, contacts, notification previews, account logins, dating profiles, and linked devices.",
      "App Store purchases, subscriptions, Family Sharing, Screen Time, battery use, device storage, and app search.",
      "iCloud Photos, Google Photos, shared libraries, backups, e-mail, calendars, Wallet, bank statements, and loyalty accounts.",
      "Location sharing, ride history, hotel systems, tagged social posts, the other person's phone, and anything another person saves or shares.",
    ],
    limitsHeading: "The honest limit",
    limits:
      "Encryption can protect selected files from ordinary access. It cannot guarantee that cheating, adultery, an affair, or a secret relationship stays undiscovered. If discovery could trigger violence, coercive control, outing, or loss of housing, treat that as a safety issue rather than only a phone-privacy problem.",
    faqHeading: "Frequently asked questions",
    question: (title) => `Does Stash solve the full problem described by “${title}”?`,
    answer:
      "No. Stash protects supported files imported into the vault. It does not hide third-party apps, live chats, purchases, payments, locations, or records on another device.",
    secondQuestion: "What should be checked before deleting an original file?",
    secondAnswer:
      "Open the protected copy, confirm full quality and playback, then review cloud synchronization, Recently Deleted, attachments, downloads, exports, and other devices.",
    cta: "Download Stash from the App Store",
  },
  de: {
    description: (title) =>
      `${title}. Direkter Ratgeber zu geschützten Dateien, Cloud-Kopien, Partnerzugriff und digitalen Spuren außerhalb eines Tresors.`,
    answerHeading: "Direkte Antwort",
    filesHeading: "Was in einen verschlüsselten Tresor gehört",
    filesText:
      "Stash schützt Dateien, die bewusst in den separat gesperrten, verschlüsselten Speicher importiert werden. Dazu gehören:",
    files: [
      "Fotos, Videos, Screenshots, PDFs, Sprachnotizen, Anhänge, Tickets, Belege und andere gespeicherte Dateien.",
      "Kopien, die im Tresor geprüft wurden, bevor ein Original aus Fotos, Dateien, Downloads oder der Quell-App entfernt wird.",
      "Harmlose Köder-Inhalte hinter einer zweiten PIN und Protokolle fehlgeschlagener Zugriffsversuche.",
      "Dateien außerhalb der normalen Galerie, der Listen zuletzt verwendeter Dateien und des zufälligen Foto-Wischens.",
    ],
    workflowHeading: "Ablauf für jede Datei",
    workflow: [
      "Finde jede Quelle: Aufnahmen, Ausgeblendet, Zuletzt gelöscht, Dateien, Downloads, Nachrichtenanhang, Export, Album und Cloud-Ordner.",
      "Importiere die Dateien und öffne Fotos, Dokumente und Audio. Spiele große Videos vollständig ab.",
      "Nutze eine PIN ohne Bezug zum iPhone-Code, Geburtstagen, Jahrestagen oder bekannten Codes des Partners.",
      "Wähle die Taschenrechner-, Fitness- oder Musik-Tarnung, die zum Gerät passt.",
      "Entferne Quellen erst nach der Prüfung und kontrolliere synchronisierte Geräte separat.",
    ],
    tracesHeading: "Was Fremdgehen oder eine Affäre weiterhin verrät",
    tracesText:
      "Ein Dateitresor ist kein systemweites Unsichtbarkeitswerkzeug. Außerhalb bleiben:",
    traces: [
      "Live-Nachrichten, Anrufe, Kontakte, Mitteilungen, Konten, Dating-Profile und verknüpfte Geräte.",
      "App-Store-Käufe, Abos, Familienfreigabe, Bildschirmzeit, Batterie, Speicher und App-Suche.",
      "iCloud-Fotos, Google Fotos, Mediatheken, Backups, E-Mail, Kalender, Wallet, Kontoauszüge und Bonuskonten.",
      "Standortfreigabe, Fahrten, Hotelsysteme, Social-Media-Markierungen, das andere Handy und fremde Kopien.",
    ],
    limitsHeading: "Die ehrliche Grenze",
    limits:
      "Verschlüsselung schützt ausgewählte Dateien vor normalem Zugriff. Sie garantiert nicht, dass Untreue, Ehebruch, eine Affäre oder geheime Beziehung unentdeckt bleibt. Bei Gewalt-, Kontroll-, Outing- oder Wohnungsrisiko ist dies ein Sicherheitsproblem, nicht nur Handy-Privatsphäre.",
    faqHeading: "Häufig gestellte Fragen",
    question: (title) => `Löst Stash das gesamte Problem „${title}“?`,
    answer:
      "Nein. Stash schützt importierte unterstützte Dateien, nicht Drittanbieter-Apps, Live-Chats, Käufe, Zahlungen, Standorte oder Daten auf anderen Geräten.",
    secondQuestion: "Was ist vor dem Löschen eines Originals zu prüfen?",
    secondAnswer:
      "Öffne die geschützte Kopie, prüfe Qualität und Wiedergabe und kontrolliere Cloud, Zuletzt gelöscht, Anhänge, Downloads, Exporte und andere Geräte.",
    cta: "Stash im App Store laden",
  },
  es: {
    description: (title) =>
      `${title}. Guía directa sobre archivos protegidos, copias en la nube, acceso de la pareja y rastros que una bóveda no elimina.`,
    answerHeading: "Respuesta directa",
    filesHeading: "Qué puede entrar en una bóveda cifrada",
    filesText:
      "Stash protege archivos importados deliberadamente a un almacenamiento cifrado con bloqueo independiente. Esto incluye:",
    files: [
      "Fotos, videos, capturas, PDF, notas de voz, adjuntos, billetes, recibos y otros archivos guardados.",
      "Copias comprobadas dentro de la bóveda antes de retirar un original de Fotos, Archivos, Descargas o la app fuente.",
      "Contenido señuelo inocente detrás de otro PIN y registros de intentos fallidos.",
      "Archivos fuera del carrete normal, listas recientes y revisión casual de fotos.",
    ],
    workflowHeading: "Proceso archivo por archivo",
    workflow: [
      "Localiza cada fuente: carrete, Oculto, Eliminado recientemente, Archivos, Descargas, adjuntos, exportaciones, álbumes y nube.",
      "Importa y abre cada foto, documento y audio. Reproduce los videos grandes por completo.",
      "Usa un PIN sin relación con el código del iPhone, cumpleaños, aniversarios o códigos conocidos.",
      "Elige el disfraz de calculadora, fitness o música que resulte normal en el dispositivo.",
      "Retira fuentes solo después de comprobarlas y revisa por separado otros dispositivos.",
    ],
    tracesHeading: "Lo que todavía revela una infidelidad",
    tracesText:
      "Una bóveda de archivos no vuelve invisible todo el sistema. Permanecen fuera:",
    traces: [
      "Mensajes activos, llamadas, contactos, notificaciones, cuentas, perfiles de citas y dispositivos vinculados.",
      "Compras, suscripciones, En familia, Tiempo de uso, batería, almacenamiento y búsqueda de apps.",
      "Fotos de iCloud, Google Fotos, fototecas, copias, correo, calendario, Wallet, tarjetas y fidelidad.",
      "Ubicación, viajes, hoteles, etiquetas sociales, el teléfono de la otra persona y sus copias.",
    ],
    limitsHeading: "El límite real",
    limits:
      "El cifrado protege archivos concretos. No garantiza que una infidelidad, adulterio, aventura o relación secreta quede sin descubrir. Si existe riesgo de violencia, control, outing o pérdida de vivienda, es un problema de seguridad, no solo de privacidad digital.",
    faqHeading: "Preguntas frecuentes",
    question: (title) => `¿Resuelve Stash todo el problema de «${title}»?`,
    answer:
      "No. Stash protege archivos compatibles importados, pero no apps de terceros, chats activos, compras, pagos, ubicaciones ni datos de otro dispositivo.",
    secondQuestion: "¿Qué revisar antes de borrar un archivo original?",
    secondAnswer:
      "Abre la copia protegida, confirma calidad y reproducción y revisa nube, Eliminado recientemente, adjuntos, descargas, exportaciones y otros dispositivos.",
    cta: "Descargar Stash en App Store",
  },
  ar: {
    description: (title) =>
      `${title}. دليل مباشر للملفات المحمية والنسخ السحابية ووصول الشريك والآثار التي لا تمحوها الخزنة.`,
    answerHeading: "الإجابة المباشرة",
    filesHeading: "ما الذي يمكن وضعه في خزنة مشفرة",
    filesText:
      "يحمي Stash الملفات التي تستورد عمداً إلى تخزين مشفر بقفل مستقل. ويشمل ذلك:",
    files: [
      "الصور والفيديوهات واللقطات وملفات PDF والملاحظات الصوتية والمرفقات والتذاكر والإيصالات.",
      "نسخاً تم التحقق منها داخل الخزنة قبل إزالة الأصل من الصور أو الملفات أو التنزيلات أو التطبيق المصدر.",
      "محتوى وهمياً عادياً خلف PIN ثانٍ وسجلات محاولات الوصول الفاشلة.",
      "ملفات خارج ألبوم الكاميرا والقوائم الحديثة والتصفح العرضي للصور.",
    ],
    workflowHeading: "خطوات لكل ملف",
    workflow: [
      "حدد كل مصدر: ألبوم الكاميرا والمخفي والمحذوفة مؤخراً والملفات والتنزيلات والمرفقات والتصدير والألبومات والسحابة.",
      "استورد الملفات وافتح كل صورة ومستند وصوت وشغّل الفيديوهات الكبيرة كاملة.",
      "استخدم PIN غير مرتبط برمز iPhone أو الميلاد أو الذكرى أو رموز الشريك.",
      "اختر تمويه الآلة الحاسبة أو اللياقة أو الموسيقى الذي يبدو طبيعياً على الجهاز.",
      "لا تزل المصادر إلا بعد التحقق وراجع الأجهزة المتزامنة بشكل منفصل.",
    ],
    tracesHeading: "ما الذي يظل كاشفاً للخيانة أو العلاقة",
    tracesText:
      "خزنة الملفات ليست أداة لإخفاء النظام كله. يبقى خارجها:",
    traces: [
      "الرسائل الحية والمكالمات وجهات الاتصال والإشعارات والحسابات وملفات المواعدة والأجهزة المرتبطة.",
      "مشتريات App Store والاشتراكات والمشاركة العائلية ومدة الاستخدام والبطارية والتخزين والبحث.",
      "صور iCloud وصور Google والمكتبات والنسخ والبريد والتقويم وWallet وكشوف البطاقات.",
      "مشاركة الموقع والرحلات والفنادق والإشارات الاجتماعية وهاتف الشخص الآخر وكل ما يحفظه أو يشاركه.",
    ],
    limitsHeading: "الحد الصريح",
    limits:
      "يحمي التشفير ملفات مختارة من الوصول العادي. لا يضمن بقاء الخيانة أو الزنا أو العلاقة السرية غير مكتشفة. إذا كان الاكتشاف قد يؤدي إلى عنف أو سيطرة أو كشف قسري أو فقدان السكن فهذه مسألة سلامة لا مجرد خصوصية هاتف.",
    faqHeading: "أسئلة شائعة",
    question: (title) => `هل يحل Stash المشكلة كاملة في «${title}»؟`,
    answer:
      "لا. يحمي Stash الملفات المدعومة المستوردة، لكنه لا يخفي تطبيقات الطرف الثالث أو المحادثات الحية أو المشتريات أو المدفوعات أو الموقع أو أجهزة الآخرين.",
    secondQuestion: "ما الذي يجب فحصه قبل حذف الملف الأصلي؟",
    secondAnswer:
      "افتح النسخة المحمية وتحقق من الجودة والتشغيل ثم راجع السحابة والمحذوفة مؤخراً والمرفقات والتنزيلات والتصدير والأجهزة الأخرى.",
    cta: "حمّل Stash من App Store",
  },
  fr: {
    description: (title) =>
      `${title}. Guide direct sur fichiers protégés, copies cloud, accès du partenaire et traces qu'un coffre ne supprime pas.`,
    answerHeading: "Réponse directe",
    filesHeading: "Ce qui peut entrer dans un coffre chiffré",
    filesText:
      "Stash protège les fichiers volontairement importés dans un stockage chiffré avec verrouillage distinct. Cela comprend :",
    files: [
      "Photos, vidéos, captures, PDF, notes vocales, pièces jointes, billets, reçus et autres fichiers.",
      "Copies vérifiées dans le coffre avant de retirer l'original de Photos, Fichiers, Téléchargements ou l'app source.",
      "Contenu leurre anodin derrière un second code et journal des tentatives incorrectes.",
      "Fichiers hors de la photothèque, des listes récentes et du défilement occasionnel.",
    ],
    workflowHeading: "Méthode fichier par fichier",
    workflow: [
      "Repérez chaque source : photothèque, Masquées, Suppressions récentes, Fichiers, Téléchargements, pièces jointes, exports, albums et cloud.",
      "Importez et ouvrez chaque photo, document et audio. Lisez entièrement les grosses vidéos.",
      "Utilisez un code sans lien avec celui de l'iPhone, anniversaires ou codes connus du partenaire.",
      "Choisissez le déguisement calculatrice, fitness ou musique cohérent avec l'appareil.",
      "Retirez les sources seulement après vérification et contrôlez séparément les appareils synchronisés.",
    ],
    tracesHeading: "Ce qui révèle encore l'infidélité",
    tracesText:
      "Un coffre de fichiers ne rend pas tout le système invisible. Restent à l'extérieur :",
    traces: [
      "Messages actifs, appels, contacts, notifications, comptes, profils de rencontre et appareils liés.",
      "Achats, abonnements, Partage familial, Temps d'écran, batterie, stockage et recherche d'apps.",
      "Photos iCloud, Google Photos, photothèques, sauvegardes, e-mail, calendrier, Wallet, relevés et fidélité.",
      "Position, trajets, hôtels, identifications sociales, téléphone de l'autre personne et ses copies.",
    ],
    limitsHeading: "La limite réelle",
    limits:
      "Le chiffrement protège certains fichiers. Il ne garantit pas qu'une infidélité, un adultère, une liaison ou une relation secrète reste inconnue. En cas de risque de violence, contrôle, outing ou perte de logement, il s'agit de sécurité, pas seulement de confidentialité numérique.",
    faqHeading: "Questions fréquentes",
    question: (title) => `Stash résout-il tout le problème « ${title} » ?`,
    answer:
      "Non. Stash protège les fichiers compatibles importés, mais ne cache ni apps tierces, conversations actives, achats, paiements, positions ni données d'un autre appareil.",
    secondQuestion: "Que vérifier avant de supprimer un original ?",
    secondAnswer:
      "Ouvrez la copie protégée, confirmez qualité et lecture, puis contrôlez cloud, Suppressions récentes, pièces jointes, téléchargements, exports et autres appareils.",
    cta: "Télécharger Stash sur l'App Store",
  },
};

function list(items: string[], ordered = false): string {
  const tag = ordered ? "ol" : "ul";
  return `<${tag}>${items.map((item) => `<li>${item}</li>`).join("")}</${tag}>`;
}

function relatedFor(topic: DirectTopic): string[] {
  const clusterTopics = topics.filter(
    (candidate) =>
      candidate.cluster === topic.cluster && candidate.slug !== topic.slug,
  );
  const topicIndex = topics.findIndex((candidate) => candidate.slug === topic.slug);
  const first = clusterTopics[topicIndex % clusterTopics.length]?.slug;
  const second =
    clusterTopics[(topicIndex + 3) % clusterTopics.length]?.slug;
  return Array.from(
    new Set([clusterHubs[topic.cluster], first, second].filter(Boolean)),
  ).slice(0, 3);
}

function buildArticle(locale: BaseLocale, topic: DirectTopic): Article {
  const l = copy[locale];
  const title = topic.title[locale];
  const faq = [
    {
      question: l.question(title),
      answer: l.answer,
    },
    {
      question: l.secondQuestion,
      answer: l.secondAnswer,
    },
  ];

  return {
    slug: topic.slug,
    title,
    description: l.description(title),
    date: "2026-06-12",
    primaryIntent: topic.intent,
    cluster: topic.cluster,
    relatedSlugs: relatedFor(topic),
    faqs: faq,
    content: `
<h2>${l.answerHeading}</h2>
<p><strong>${topic.angle[locale]}</strong></p>
<p>${topic.terms[locale]}</p>
<h2>${l.filesHeading}</h2>
<p>${l.filesText}</p>
${list(l.files)}
<h2>${l.workflowHeading}</h2>
${list(l.workflow, true)}
<h2>${l.tracesHeading}</h2>
<p>${l.tracesText}</p>
${list(l.traces)}
<h2>${l.limitsHeading}</h2>
<p>${l.limits}</p>
<h2>${l.faqHeading}</h2>
${faq.map((item) => `<h3>${item.question}</h3><p>${item.answer}</p>`).join("")}
<p><a href="${getAppStoreUrl(locale)}"><strong>${l.cta}</strong></a>.</p>
`,
  };
}

function buildLocale(locale: BaseLocale): ArticleSet {
  return Object.fromEntries(
    topics.map((topic) => [topic.slug, buildArticle(locale, topic)]),
  );
}

export const directInfidelityArticles: Record<BaseLocale, ArticleSet> = {
  en: buildLocale("en"),
  de: buildLocale("de"),
  es: buildLocale("es"),
  ar: buildLocale("ar"),
  fr: buildLocale("fr"),
};

export const directInfidelityTopicCount = topics.length;
