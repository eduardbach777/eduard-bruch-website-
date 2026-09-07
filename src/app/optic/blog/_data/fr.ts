import type { ArticleSet } from "./index";

export const frArticles: ArticleSet = {
  "copy-text-from-image-mac": {
    slug: "copy-text-from-image-mac",
    title: "Comment copier du texte depuis une image sur Mac",
    description:
      "Vous avez du texte piégé dans une image — la photo d'un tableau blanc, un document scanné, un mème — et aucun moyen de le sélectionner. Voici comment l'extraire instantanément.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Quelqu'un vous envoie la photo d'un tableau blanc couvert de notes de réunion. Ou vous capturez une recette depuis une story Instagram. Le texte est bien là, sous vos yeux, mais vous ne pouvez ni le sélectionner, ni le copier, ni le coller où que ce soit d'utile. Votre seule option est de retaper chaque mot à la main — en espérant ne pas introduire de fautes de frappe en cours de route.</p>

<h2>Pourquoi vous ne pouvez pas simplement sélectionner du texte dans une image</h2>
<p>Les images sont des pixels, pas des caractères. Votre Mac voit un JPEG ou un PNG comme une grille de points colorés, pas comme des mots et des phrases. Aperçu vous permet d'annoter des images mais n'en extrait pas le texte. Quick Look affiche l'image mais n'offre aucune fonction de copie pour les mots qu'elle contient. Même glisser l'image dans Notes ou Pages se contente d'y intégrer l'image — le texte reste enfermé derrière les pixels.</p>
<p>La fonction Texte en direct d'Apple fonctionne dans certains contextes, mais elle nécessite des applications compatibles, des formats d'image spécifiques, et ne couvre pas tous les scénarios. Si le texte se trouve dans un onglet de navigateur, une maquette de design ou une image vidéo, Texte en direct ne peut souvent pas l'atteindre.</p>

<h2>Faites glisser pour sélectionner, copiez instantanément avec Optic</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> se loge dans votre barre de menus et vous permet de tracer un rectangle de sélection sur n'importe quelle partie de votre écran. Il lit instantanément les caractères à l'intérieur de ce rectangle — peu importe que la source soit un fichier image, une page web, un PDF ou tout autre élément visible sur votre écran.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic menu bar OCR tool for Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Photos et captures d'écran</h3>
<p>Ouvrez l'image dans n'importe quelle application — Aperçu, Photos, un navigateur, Slack — et faites glisser une sélection sur le texte. Optic reconnaît les caractères et les copie dans votre presse-papiers. Fonctionne avec les notes manuscrites, les documents imprimés, les panneaux sur des photos et le texte superposé à des graphismes.</p>

<h3>Fichiers de design et maquettes</h3>
<p>Vous examinez un export Figma ou une maquette de design plate ? Faites glisser une sélection sur les éléments de texte pour en extraire le contenu sans demander au designer de vous l'envoyer séparément. Utile pour l'assurance qualité, les flux de traduction et les audits de contenu.</p>

<h3>Historique des captures</h3>
<p>Chaque capture est enregistrée dans la barre de menus, ce qui vous permet de revenir en arrière et de récupérer un texte extrait précédemment sans avoir à rescanner. Plus besoin de le coller dans un document brouillon juste pour le conserver.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Obtenez Optic sur le Mac App Store</a></p>
`,
  },

  "screen-ocr-mac": {
    slug: "screen-ocr-mac",
    title: "OCR d'écran pour Mac — Sélectionnez et copiez n'importe quel texte",
    description:
      "Du texte sur votre écran que vous ne pouvez ni sélectionner ni copier — dans des images, des vidéos, des boîtes de dialogue ou des interfaces verrouillées. Un outil d'OCR au niveau de l'écran résout ce problème.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous fixez un texte sur votre écran Mac qui refuse de se laisser sélectionner. Peut-être est-il intégré dans un tutoriel vidéo, rendu à l'intérieur d'un élément canvas sur une page web, ou verrouillé derrière une interface non interactive. Les mots sont bien là, parfaitement lisibles, mais votre curseur les traite comme s'ils n'existaient pas.</p>

<h2>L'écart entre voir et sélectionner</h2>
<p>macOS propose la sélection de texte dans les applications natives et le contenu web standard, mais l'écran moderne regorge d'exceptions. Le texte affiché sous forme de graphisme dans les applications web, les sous-titres incrustés dans les lecteurs vidéo, le code affiché dans une documentation en image, la sortie d'un terminal lors d'une session de bureau à distance — rien de tout cela ne répond à un simple clic-glisser. Vous finissez par retaper ce qui se trouve déjà sous vos yeux, ce qui est lent et source d'erreurs.</p>
<p>Les outils d'OCR traditionnels vous obligent d'abord à enregistrer un fichier, puis à l'importer, puis à le traiter. Ce flux de travail s'effondre dès que votre source de texte est un écran en direct — un appel vidéo, un tableau de bord en streaming, ou une application sans option d'export.</p>

<h2>OCR au niveau de l'écran avec Optic</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> effectue l'OCR directement sur votre écran. Il se trouve dans la barre de menus, et lorsque vous l'activez, vous tracez un rectangle sur n'importe quel texte visible. Les caractères sont reconnus instantanément et placés dans votre presse-papiers — sans enregistrement de fichier, sans importation, sans attente.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic performing screen OCR on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>N'importe quelle source, un seul geste</h3>
<p>Peu importe l'application dans laquelle se trouve le texte. Un appel Zoom avec une diapositive partagée, un tutoriel YouTube montrant des commandes de terminal, un tableau de bord Retool avec des libellés non sélectionnables — si vous pouvez le voir, Optic peut le lire. Un raccourci, un glissement, et le texte est à vous.</p>

<h3>Historique intégré</h3>
<p>Chaque capture OCR est enregistrée dans le menu déroulant de la barre de menus. Faites défiler les captures précédentes pour récupérer un texte saisi il y a quelques minutes ou quelques heures sans avoir à rescanner.</p>

<h3>Synthèse vocale</h3>
<p>Besoin d'entendre le texte capturé plutôt que de le lire ? Optic inclut la synthèse vocale pour chaque capture, utile pour relire le contenu extrait ou pour l'accessibilité.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Obtenez Optic sur le Mac App Store</a></p>
`,
  },

  "extract-text-from-screenshot-mac": {
    slug: "extract-text-from-screenshot-mac",
    title: "Comment extraire du texte d'une capture d'écran sur Mac",
    description:
      "Vous avez pris une capture d'écran pour conserver du texte, mais vous avez maintenant besoin de ce texte sous forme de vrais caractères modifiables et recherchables. Le retaper va à l'encontre du but recherché.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>La capture d'écran devait être un raccourci. Vous avez saisi rapidement un e-mail important, une confirmation d'expédition, une série d'instructions — pensant avoir sauvegardé l'information. Mais maintenant vous devez coller ce numéro de suivi dans un formulaire, ou rechercher une phrase issue de ces instructions, et la capture d'écran n'est qu'une image plate. Le texte qu'elle contient pourrait tout aussi bien être un dessin.</p>

<h2>Les captures d'écran saisissent des pixels, pas du texte</h2>
<p>Lorsque vous appuyez sur Cmd+Maj+4 sur votre Mac, vous obtenez une image pixel par pixel de ce qui était à l'écran. Mais le texte de cette image perd toute sa structure. Vous ne pouvez pas sélectionner des mots individuels, ni copier un paragraphe, ni même rechercher une phrase. La capture d'écran est un enregistrement visuel, pas textuel.</p>
<p>Vous pourriez ouvrir la capture d'écran dans Aperçu et essayer les outils de balisage d'Apple, mais ceux-ci servent à l'annotation — dessiner par-dessus l'image — pas à en extraire le texte. Certains utilisateurs essaient de coller des captures d'écran dans Google Docs en espérant un OCR automatique, mais cela ne fonctionne que pour les images téléchargées dans Drive, pas pour les captures collées, et les résultats sont inégaux.</p>

<h2>Extrayez le texte directement depuis l'écran</h2>
<p>Plutôt que de d'abord faire une capture d'écran puis de lutter pour en extraire le texte, <a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> vous permet de sauter complètement l'étape de la capture. Activez-le depuis la barre de menus, faites glisser une sélection sur le texte dont vous avez besoin, et les caractères reconnus vont directement dans votre presse-papiers.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic extracting text from a screenshot on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Vous avez déjà la capture d'écran ?</h3>
<p>Si vous avez déjà pris la capture d'écran, ouvrez-la dans n'importe quelle visionneuse — Aperçu, Quick Look, même un navigateur — et faites glisser la sélection d'Optic sur le texte dans l'image affichée. Il lit les caractères de tout ce qui est visible sur votre écran, y compris les images que vous avez déjà ouvertes.</p>

<h3>L'historique des captures remplace l'accumulation de captures d'écran</h3>
<p>Beaucoup de gens prennent des captures d'écran spécifiquement pour se souvenir d'un texte — numéros de confirmation, adresses, codes d'erreur. L'historique des captures d'Optic stocke chaque extraction de texte dans la barre de menus, vous offrant un journal consultable du texte capturé. Fini de faire défiler un dossier de captures d'écran pour retrouver une chaîne de caractères.</p>

<h3>Extraction en masse</h3>
<p>Besoin de texte provenant de plusieurs zones d'une longue capture d'écran ? Effectuez plusieurs sélections rapides à la suite. Chacune est enregistrée dans votre historique, afin que vous puissiez récupérer tout ce dont vous avez besoin et coller les éléments là où ils doivent aller.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Obtenez Optic sur le Mac App Store</a></p>
`,
  },

  "copy-text-non-selectable-pdf-mac": {
    slug: "copy-text-non-selectable-pdf-mac",
    title: "Comment copier du texte depuis un PDF non sélectionnable sur Mac",
    description:
      "Certains PDF ressemblent à des documents normaux mais ne vous laissent sélectionner aucun mot. Le texte est là visuellement, mais il est piégé dans une couche d'image plate.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous ouvrez un PDF en pensant copier un paragraphe, mais lorsque vous cliquez et faites glisser, rien ne se surligne. Le curseur glisse sur la page comme si le texte n'existait pas. Vous essayez Cmd+A pour tout sélectionner — rien. Le document semble parfaitement lisible, mais il s'agit en réalité d'une image de texte, pas de texte véritable.</p>

<h2>Pourquoi certains PDF ne vous laissent pas sélectionner le texte</h2>
<p>Cela arrive avec les documents scannés, les formulaires administratifs, les anciens articles universitaires et les PDF exportés depuis certains outils de design. Les pages ont été créées à partir d'images — soit scannées depuis du papier, soit aplaties lors de l'export — de sorte que le PDF contient des couches raster plutôt que des couches de texte. Aperçu, Adobe Reader et tous les autres lecteurs de PDF voient la même chose : des pixels agencés pour ressembler à des lettres, sans données de caractères sous-jacentes à sélectionner.</p>
<p>Certains PDF ont également une protection contre la copie activée. Le créateur a défini un indicateur de permission qui empêche la sélection de texte, même si la couche de texte existe. Les lecteurs de PDF standards respectent cet indicateur, vous laissant incapable de copier quoi que ce soit.</p>

<h2>Lisez le texte directement depuis l'écran</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> contourne les deux problèmes. Comme il lit les caractères depuis votre écran plutôt que depuis la structure interne du fichier, peu importe que le PDF ait une couche de texte, soit une image scannée, ou comporte des restrictions de copie. Si vous pouvez voir le texte sur votre écran, Optic peut le lire.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic reading text from a non-selectable PDF on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Documents scannés</h3>
<p>Ouvrez le PDF scanné dans Aperçu, zoomez à une taille de lecture confortable, activez Optic, et faites glisser sur le texte dont vous avez besoin. Il reconnaît les caractères imprimés du scan et les copie sous forme de texte modifiable. Fonctionne avec d'anciens documents dactylographiés, des reçus scannés et des pages photographiées.</p>

<h3>PDF protégés</h3>
<p>Pour les PDF où la couche de texte existe mais où la sélection est verrouillée, Optic lit le rendu affiché à l'écran. Vous obtenez le même texte sans lutter contre des indicateurs de permission ni chercher des outils de déverrouillage de PDF.</p>

<h3>Extraction multi-pages</h3>
<p>Faites défiler le document et effectuez des sélections sur chaque page. Chaque capture est enregistrée dans l'historique de la barre de menus d'Optic, ce qui vous permet de parcourir un long document scanné page par page et de rassembler tout le texte dont vous avez besoin.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Obtenez Optic sur le Mac App Store</a></p>
`,
  },

  "qr-code-reader-mac": {
    slug: "qr-code-reader-mac",
    title: "Lecteur de code QR pour Mac — Scannez depuis l'écran",
    description:
      "Un code QR apparaît sur votre écran Mac — dans un e-mail, un document, une page web — et votre seul scanner est le téléphone dans votre poche. Il existe une méthode plus rapide.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Quelqu'un partage un code QR dans un message Slack. Ou un PDF en inclut un renvoyant vers une ressource. Ou une page web affiche un code QR pour télécharger une application. Le code est bien là, sur votre écran Mac, mais pour le scanner, on s'attend à ce que vous sortiez votre téléphone, ouvriez l'appareil photo, le pointiez vers votre écran, attendiez la mise au point, puis touchiez le lien — qui s'ouvre alors sur votre téléphone plutôt que sur l'ordinateur où vous en avez réellement besoin.</p>

<h2>Les téléphones scannent le monde réel, pas les écrans</h2>
<p>Le scan de codes QR a été conçu pour des appareils photo de téléphone pointés vers des objets physiques. Utiliser l'appareil photo d'un téléphone pour scanner son propre écran d'ordinateur est une solution de contournement maladroite : vous devez gérer les reflets de l'écran, l'appareil photo peine à faire la mise au point à courte distance, et le lien résultant s'ouvre sur le mauvais appareil. Si vous voulez l'URL sur votre Mac, vous devez ensuite l'envoyer par AirDrop ou vous l'envoyer par message — tout ça pour ouvrir un lien qui était déjà sur votre Mac.</p>
<p>macOS n'a aucun lecteur de code QR intégré pour le contenu à l'écran. Vous ne pouvez pas cliquer avec le bouton droit sur un code QR dans Safari et choisir « lire le code ». Aperçu ne décode pas un code depuis une image ouverte. Il n'existe tout simplement aucun chemin natif entre un code QR à l'écran et son contenu décodé sur la même machine.</p>

<h2>Scannez les codes QR directement depuis votre écran</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> inclut un lecteur de code QR qui fonctionne sur tout ce qui est visible sur votre écran. Activez-le depuis la barre de menus, faites glisser une sélection autour du code QR, et le contenu décodé — URL, texte, informations de contact, identifiants Wi-Fi — est immédiatement disponible sur votre Mac.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic scanning a QR code from the Mac screen" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Codes QR dans les documents et e-mails</h3>
<p>Les billets d'événements, cartes d'embarquement, confirmations de paiement et guides d'installation incluent fréquemment des codes QR. Faites glisser une sélection sur le code dans votre client de messagerie ou votre visionneuse de PDF et obtenez le contenu décodé sans changer d'appareil.</p>

<h3>Cas d'usage pour développeurs et IT</h3>
<p>Les pages de configuration de l'authentification à deux facteurs affichent des codes QR pour les applications TOTP. La documentation d'API encode parfois des points de terminaison ou des clés au format QR. Optic vous permet de les décoder directement, gardant votre flux de travail sur un seul écran.</p>

<h3>Tout reste dans l'historique</h3>
<p>Le contenu QR décodé est enregistré aux côtés de vos captures de texte dans l'historique de la barre de menus. Besoin de ce mot de passe Wi-Fi issu d'un code QR scanné hier ? Faites défiler vos captures au lieu de scanner à nouveau.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Obtenez Optic sur le Mac App Store</a></p>
`,
  },

  "ocr-text-from-video-mac": {
    slug: "ocr-text-from-video-mac",
    title: "Comment faire de l'OCR sur du texte dans une vidéo ou un stream sur Mac",
    description:
      "Un tutoriel montre une commande de terminal, un stream affiche brièvement une URL, un cours affiche une formule — et vous ne pouvez pas mettre en pause assez vite pour tout retaper.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous regardez un tutoriel de code et l'instructeur colle une longue commande de terminal à l'écran. Ou un stream en direct affiche brièvement un code de réduction. Ou un cours enregistré affiche une équation complexe. Le texte est clairement visible pendant quelques secondes, mais impossible de le sélectionner depuis le lecteur vidéo. Vous mettez en pause, plissez les yeux, et commencez à taper — en espérant capter chaque caractère avant que le contenu ne change.</p>

<h2>Les lecteurs vidéo n'exposent pas le texte</h2>
<p>Que vous regardiez dans Safari, Chrome, VLC, QuickTime ou n'importe quelle application de streaming, l'image vidéo est une image rendue. Il n'y a aucune couche de texte avec laquelle interagir. Les sous-titres peuvent être sélectionnables dans certains lecteurs, mais le texte à l'écran qui fait partie du contenu vidéo — code, URL, titres, données — est définitivement incrusté dans le flux de pixels.</p>
<p>Mettre en pause aide, mais vous devez tout de même transcrire manuellement ce que vous voyez. Pour de longues commandes, des URL avec paramètres de requête, ou du contenu technique avec des caractères spéciaux, la transcription manuelle est lente et peu fiable. Un seul caractère erroné dans une commande de terminal ou une URL et elle échoue silencieusement.</p>

<h2>Capturez du texte depuis n'importe quelle image vidéo</h2>
<p>Avec <a href="https://apps.apple.com/app/optic/id6806597766">Optic</a>, vous mettez la vidéo en pause (ou non — cela fonctionne aussi sur du contenu en mouvement), activez l'outil depuis votre barre de menus, et faites glisser une sélection sur le texte visible dans l'image vidéo. Les caractères sont reconnus et copiés dans votre presse-papiers instantanément.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic reading text from a video on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Tutoriels de code</h3>
<p>Commandes de terminal, extraits de configuration, chemins de fichiers et noms de paquets affichés dans des tutoriels vidéo — récupérez-les en une seule sélection plutôt que de mettre en pause et de retaper. Particulièrement utile pour les longues commandes d'installation ou les configurations multi-lignes.</p>

<h3>Streams en direct et webinaires</h3>
<p>Les présentateurs affichent souvent des URL, des codes promo ou des coordonnées à l'écran pendant seulement quelques secondes. Optic capture ce qui est visible au moment où vous le sélectionnez, vous n'avez donc pas besoin d'une frappe éclair pour saisir une information éphémère.</p>

<h3>Cours et présentations</h3>
<p>Les cours enregistrés affichent des formules, des citations et des références qui demanderaient un effort considérable à retaper. Faites glisser sur la section pertinente et collez le texte extrait directement dans vos notes.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Obtenez Optic sur le Mac App Store</a></p>
`,
  },

  "copy-error-message-from-dialog-mac": {
    slug: "copy-error-message-from-dialog-mac",
    title: "Comment copier des messages d'erreur depuis des boîtes de dialogue sur Mac",
    description:
      "Une boîte de dialogue d'erreur apparaît avec un message technique et aucun bouton de copie. Vous voilà à retaper des codes d'erreur incompréhensibles juste pour chercher une solution.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Une application plante et une boîte de dialogue apparaît avec un message d'erreur cryptique : un code, un chemin de fichier, peut-être une référence de trace de pile. Vous devez rechercher cette chaîne exacte sur Google pour trouver une solution. Mais la boîte de dialogue n'a que deux boutons — OK et Annuler — et aucun moyen de sélectionner ou copier le texte. Alors vous prenez votre téléphone, photographiez l'écran, et plissez les yeux en retapant l'erreur dans une barre de recherche. Ou vous commencez à la griffonner sur un post-it, caractère par caractère.</p>

<h2>Les boîtes de dialogue macOS vous laissent rarement copier du texte</h2>
<p>La plupart des boîtes de dialogue d'erreur, des fenêtres d'alerte et des invites système sur macOS affichent leur texte sous forme d'étiquettes statiques. Vous ne pouvez pas cliquer dedans, ne pouvez pas en surligner une partie, ne pouvez pas faire de clic droit pour une option de copie. C'est vrai pour les alertes natives de macOS, les boîtes de dialogue d'applications tierces, les fenêtres d'erreur d'installateurs et les rapports de plantage. Plus le texte d'erreur est technique et important, plus il a de chances d'être piégé dans une étiquette non sélectionnable.</p>
<p>C'est particulièrement frustrant pour le support IT et le dépannage. Vous avez besoin du texte d'erreur exact pour rechercher des solutions, signaler un bug, ou communiquer avec les équipes de support. Paraphraser un code d'erreur — ou mal taper un seul caractère — vous mène vers des résultats hors sujet.</p>

<h2>Sélectionnez le texte d'erreur directement depuis la boîte de dialogue</h2>
<p>Lorsque la boîte de dialogue d'erreur apparaît, laissez-la ouverte et activez <a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> depuis la barre de menus. Faites glisser une sélection sur le texte du message d'erreur dans la boîte de dialogue. Optic lit les caractères et les copie dans votre presse-papiers — chaîne exacte, ponctuation exacte, capitalisation exacte.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic copying an error message from a dialog on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Recherchez des solutions instantanément</h3>
<p>Collez la chaîne d'erreur exacte dans Google, Stack Overflow ou un forum de support Apple. Les recherches de correspondance exacte font apparaître des résultats pertinents bien plus fiablement que des descriptions paraphrasées de ce que disait l'erreur.</p>

<h3>Rapports de bugs et tickets de support</h3>
<p>Incluez le texte d'erreur précis dans les rapports de bugs ou les e-mails de support. Les développeurs et les agents de support peuvent identifier les problèmes bien plus rapidement avec la chaîne d'erreur réelle plutôt qu'avec l'interprétation d'un utilisateur.</p>

<h3>Erreurs récurrentes</h3>
<p>Optic enregistre chaque capture dans son historique de la barre de menus. Si la même erreur continue d'apparaître, vous disposez d'un enregistrement horodaté de chaque occurrence sans avoir besoin de capturer chaque boîte de dialogue.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Obtenez Optic sur le Mac App Store</a></p>
`,
  },

  "mac-live-text-limitations": {
    slug: "mac-live-text-limitations",
    title: "Limites de Texte en direct sur Mac — Ce qu'il ne peut pas faire",
    description:
      "Texte en direct d'Apple fonctionne à quelques endroits mais échoue silencieusement dans bien d'autres. Si vous en dépendez pour l'OCR d'écran, vous allez vite vous heurter à des murs.",
    date: "2026-09-06",
    readTime: "5 min de lecture",
    content: `
<p>Apple a introduit Texte en direct comme une fonction système qui reconnaît le texte dans les images. En théorie, cela semble résoudre le problème du « texte non sélectionnable dans les images ». En pratique, cela ne fonctionne que dans un ensemble restreint de scénarios et ne fait silencieusement rien dans de nombreuses situations où vous en avez réellement besoin.</p>

<h2>Où Texte en direct montre ses limites</h2>
<p>Texte en direct fonctionne dans Photos, Aperçu, Safari (sur certaines images) et Quick Look. C'est à peu près là que s'arrête sa portée. Voici les situations courantes où il ne peut pas vous aider :</p>
<p><strong>Images vidéo.</strong> Texte en direct ne fonctionne pas sur le contenu vidéo. Si du texte apparaît dans une vidéo YouTube, un partage d'écran Zoom, un enregistrement QuickTime, ou n'importe quel lecteur de streaming, Texte en direct ne le reconnaîtra pas. Vous revoilà à la transcription manuelle.</p>
<p><strong>Interfaces d'applications et boîtes de dialogue.</strong> Le texte affiché sous forme d'étiquettes dans les interfaces d'applications, les boîtes de dialogue d'erreur, les éléments de menu et les contrôles personnalisés est invisible pour Texte en direct. Il ne s'active que sur les images intégrées, pas sur un contenu d'écran arbitraire.</p>
<p><strong>Applications web avec texte en canvas ou SVG.</strong> De nombreuses applications web modernes affichent du texte à l'aide d'éléments canvas ou SVG — tableaux de bord, outils de données, applications de design. Texte en direct n'atteint pas ces contextes de rendu.</p>
<p><strong>PDF non sélectionnables.</strong> Bien qu'Aperçu puisse parfois reconnaître du texte dans des PDF basés sur des images, les résultats sont inégaux et dépendent de la qualité du scan, de la complexité de la page et de la structure du PDF. De nombreux documents scannés n'affichent tout simplement aucune interaction avec Texte en direct.</p>
<p><strong>Contenu protégé contre la copie.</strong> Texte en direct respecte les DRM et les restrictions de copie. Si une application ou un document a désactivé la sélection de texte, Texte en direct fait de même.</p>
<p><strong>Aucun historique de captures.</strong> Texte en direct n'a aucune mémoire. Chaque reconnaissance est éphémère. Si vous fermez l'image ou naviguez ailleurs, le texte reconnu a disparu. Il n'existe aucun journal ni historique de ce que vous avez extrait.</p>

<h2>L'OCR au niveau de l'écran sans ces limites</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> fonctionne au niveau de l'écran plutôt qu'au niveau du fichier ou de l'image. Il lit les caractères de tout ce qui est visible sur votre écran — n'importe quelle application, n'importe quelle source, n'importe quel contexte. Images vidéo, boîtes de dialogue, canvas d'applications web, PDF verrouillés, sessions de bureau à distance — si vous pouvez voir du texte, Optic peut le lire.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic overcoming Live Text limitations on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Historique et synthèse vocale</h3>
<p>Contrairement à Texte en direct, Optic enregistre chaque capture dans un historique persistant accessible depuis la barre de menus. Il inclut également la synthèse vocale, vous permettant d'entendre le texte capturé lu à voix haute — utile pour la relecture ou l'accessibilité.</p>

<h3>Scan de codes QR</h3>
<p>Texte en direct peut lire des codes QR dans certains contextes d'image, mais pas depuis une vidéo, un partage d'écran, ou une fenêtre d'application arbitraire. Optic scanne les codes QR depuis n'importe où sur votre écran et les décode instantanément.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Obtenez Optic sur le Mac App Store</a></p>
`,
  },

  "textsniper-alternative-mac": {
    slug: "textsniper-alternative-mac",
    title: "Alternative à TextSniper pour Mac",
    description:
      "Vous cherchez un outil d'OCR d'écran qui va au-delà de la simple capture de texte — avec scan de codes QR, historique des captures et synthèse vocale intégrés.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>TextSniper a popularisé l'idée de l'OCR au niveau de l'écran sur Mac : tracer un rectangle, récupérer le texte. C'est un concept simple qui résout un vrai problème. Mais si vous l'avez utilisé et que vous vous êtes surpris à en vouloir davantage — un historique des captures passées, la prise en charge des codes QR, ou la possibilité d'entendre le texte extrait lu à voix haute — vous avez probablement cherché des alternatives.</p>

<h2>Ce qui manque à l'OCR d'écran basique</h2>
<p>La plupart des outils d'OCR d'écran gèrent bien la capture de base : activer un raccourci, faire glisser une zone, obtenir du texte dans le presse-papiers. Mais le flux de travail autour de cette action unique compte tout autant.</p>
<p><strong>Aucun historique des captures.</strong> Vous extrayez du texte, le collez quelque part, et la capture disparaît. Dix minutes plus tard, vous avez besoin de ce même texte à nouveau, et vous devez rescanner. Si vous avez oublié de le coller immédiatement, la prochaine chose que vous copiez l'écrase.</p>
<p><strong>Aucune lecture de codes QR.</strong> Les codes QR sur votre écran — dans des e-mails, des documents, des pages web — nécessitent un outil séparé ou l'appareil photo de votre téléphone. Un outil de capture d'écran capable de décoder des codes QR vous évite de jongler entre plusieurs appareils.</p>
<p><strong>Aucune synthèse vocale.</strong> Parfois, vous avez besoin d'entendre du texte plutôt que de le lire — pour la relecture, l'accessibilité, ou le multitâche. Les outils d'OCR basiques s'arrêtent à la sortie vers le presse-papiers.</p>

<h2>Optic : l'OCR d'écran avec le flux de travail complet</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> gère la même capture OCR de base — glisser pour sélectionner n'importe quel texte à l'écran depuis n'importe quelle source — et ajoute les fonctionnalités qui rendent l'OCR d'écran réellement utile au quotidien.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic as a TextSniper alternative for Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Historique des captures dans la barre de menus</h3>
<p>Chaque extraction de texte et chaque scan QR sont enregistrés et accessibles depuis la barre de menus. Faites défiler les captures précédentes, recopiez quelque chose d'il y a une heure, ou passez en revue une série d'extractions issues d'une session de recherche. Fini de perdre du texte parce que vous avez copié autre chose.</p>

<h3>Scanner de codes QR intégré</h3>
<p>Tracez une sélection autour de n'importe quel code QR visible sur votre écran et Optic le décode. URL, identifiants Wi-Fi, cartes de contact, texte brut — tout ce que le code contient apparaît immédiatement, sans besoin de téléphone.</p>

<h3>Synthèse vocale</h3>
<p>Tout texte capturé peut être lu à voix haute. Utile pour repérer les erreurs d'OCR à l'oreille, pour les besoins d'accessibilité, ou pour écouter le contenu extrait pendant que vous travaillez sur autre chose.</p>

<h3>Natif de la barre de menus</h3>
<p>Optic se loge dans la barre de menus et reste hors de votre chemin jusqu'à ce que vous en ayez besoin. Pas d'icône dans le Dock, pas de fenêtre principale à gérer — juste un outil léger toujours à portée d'un clic ou d'un raccourci.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Obtenez Optic sur le Mac App Store</a></p>
`,
  },

  "copy-code-from-screenshot-mac": {
    slug: "copy-code-from-screenshot-mac",
    title: "Comment copier du code depuis une capture d'écran sur Mac",
    description:
      "Un tutoriel, un tweet ou une documentation affiche du code sous forme d'image. Le retaper introduit des bugs. Voici comment l'extraire sous forme de texte sélectionnable.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Un développeur partage un extrait de code sous forme de capture d'écran sur Twitter. Un article de blog tutoriel affiche ses exemples sous forme d'images plutôt que de blocs de code. La documentation d'un outil interne n'existe que sous forme de captures d'écran d'un terminal. Le code est parfaitement lisible, mais il est piégé dans une image — et retaper du code depuis une image est l'un des moyens les plus fiables d'introduire des bugs invisibles.</p>

<h2>Pourquoi retaper du code depuis des images échoue</h2>
<p>Le code n'est pas indulgent en matière de précision. Un point-virgule manquant, un L minuscule confondu avec le chiffre 1, une accolade contre une parenthèse, un tiret cadratin au lieu d'un trait d'union — n'importe lequel de ces éléments brisera votre code silencieusement. Quand vous retapez depuis une capture d'écran, vous faites un décryptage visuel caractère par caractère à un rythme qui invite exactement à ce genre d'erreurs.</p>
<p>Le problème est répandu. Les réseaux sociaux convertissent le code en images pour un rendu plus joli. Une ancienne documentation n'a jamais été migrée depuis des captures d'écran. Les messages Slack et Teams contenant du code sont souvent capturés en image et transférés. Les wikis internes accumulent des années de captures de terminal collées que personne n'a transcrites.</p>

<h2>Extrayez le code directement depuis l'écran</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> lit les caractères du code directement depuis votre écran. Ouvrez la capture d'écran ou la page contenant l'image de code, activez Optic depuis la barre de menus, et faites glisser une sélection sur le code. Le texte extrait va dans votre presse-papiers, prêt à être collé dans votre éditeur ou terminal.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic extracting code from a screenshot on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Commandes de terminal</h3>
<p>Longues commandes d'installation, instructions Docker run, requêtes curl avec plusieurs options — celles-ci sont couramment partagées sous forme de captures d'écran. Un seul glissement avec Optic extrait la commande entière, en préservant les caractères spéciaux, les options et les chemins faciles à mal saisir.</p>

<h3>Extraits de code depuis les réseaux sociaux</h3>
<p>Twitter, LinkedIn et Instagram affichent souvent du code sous forme d'images à l'aide d'outils comme Carbon ou Ray.so. Optic extrait le code de ces captures d'écran stylisées aussi facilement que depuis une simple sortie de terminal.</p>

<h3>Extraction multi-lignes</h3>
<p>Sélectionnez un bloc de code s'étendant sur plusieurs lignes et Optic préserve la structure des lignes. Collez-le dans votre éditeur et le code conserve sa forme — aucune mise en forme manuelle nécessaire. Chaque capture est enregistrée dans votre historique de la barre de menus, ce qui vous permet d'extraire plusieurs extraits d'un tutoriel et de les coller un par un.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Obtenez Optic sur le Mac App Store</a></p>
`,
  },

  "read-text-aloud-from-screen-mac": {
    slug: "read-text-aloud-from-screen-mac",
    title: "Lire à voix haute n'importe quel contenu d'écran sur Mac",
    description:
      "Vous voulez entendre un texte à l'écran lu à voix haute — depuis une image, un document verrouillé, une image vidéo — mais la synthèse vocale intégrée de votre Mac ne fonctionne que sur du texte sélectionnable.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>macOS dispose d'une fonction intégrée « Énoncer la sélection » : surlignez du texte, faites un clic droit, et choisissez « Parole ». Cela fonctionne bien — quand le texte est sélectionnable. Mais dès que vous avez besoin d'entendre un texte lu à voix haute depuis une image, un PDF scanné, une image vidéo, ou un élément d'interface non interactif, la fonction de synthèse vocale n'a rien sur quoi travailler. Vous ne pouvez pas faire énoncer ce que vous ne pouvez pas sélectionner.</p>

<h2>L'écart entre le contenu à l'écran et la parole</h2>
<p>De nombreuses situations nécessitent de faire lire du texte à l'écran à voix haute. La relecture permet de repérer des erreurs que vos yeux sautent. Le multitâche profite de l'audio — vous pouvez écouter le contenu extrait tout en travaillant sur autre chose. Les besoins d'accessibilité s'étendent à un contenu qui n'est pas nativement sélectionnable. Les apprenants en langues bénéficient d'entendre un texte peu familier prononcé.</p>
<p>Mais les outils de synthèse vocale intégrés ne fonctionnent que sur des sélections de texte standard. Si le texte est dans une image, affiché comme un graphisme dans une application web, présenté dans une vidéo, ou verrouillé dans un document scanné, macOS n'offre aucun chemin de « visible à l'écran » vers « lu à voix haute ». Il vous faudrait d'abord transcrire manuellement le texte, ce qui va à l'encontre du but recherché.</p>

<h2>Sélectionnez n'importe quel texte, entendez-le prononcé</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> combine l'OCR au niveau de l'écran avec la synthèse vocale. Activez-le depuis la barre de menus, faites glisser sur n'importe quel texte visible — quelle que soit sa source — et vous pouvez faire lire le texte capturé à voix haute. Aucune transcription manuelle, aucune dépendance à ce que le texte soit nativement sélectionnable.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic reading text aloud from screen content on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Relecture des résultats d'OCR</h3>
<p>Après avoir extrait du texte d'un scan ou d'une image, l'entendre lu à voix haute vous aide à repérer des erreurs d'OCR qui semblent correctes à l'écran. Une lettre mal lue ou un mot déformé devient évident lorsqu'il est prononcé mais pourrait échapper à une relecture visuelle.</p>

<h3>Accessibilité</h3>
<p>Pour les utilisateurs qui dépendent de lecteurs d'écran, le contenu piégé dans des images et des formats non sélectionnables crée des obstacles. Optic comble cet écart en convertissant tout texte visible à la fois en texte dans le presse-papiers et en audio prononcé, rendant accessible un contenu auparavant inaccessible.</p>

<h3>Multitâche et apprentissage des langues</h3>
<p>Extrayez un passage d'un document ou d'une page web et écoutez-le pendant que vous cuisinez, vous déplacez, ou faites de l'exercice. Les apprenants en langues peuvent entendre des mots peu familiers prononcés correctement en sélectionnant du texte dans une langue étrangère et en utilisant la sortie vocale.</p>

<h3>Historique des captures avec la parole</h3>
<p>Comme chaque capture est enregistrée dans l'historique de la barre de menus, vous pouvez revenir à une extraction précédente et la faire lire à voix haute à nouveau — utile pour revoir des notes ou revisiter un contenu antérieur dans votre session.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Obtenez Optic sur le Mac App Store</a></p>
`,
  },

  "ocr-receipts-mac": {
    slug: "ocr-receipts-mac",
    title: "OCR de reçus sur Mac — Extraire du texte depuis des photos de reçus",
    description:
      "Vous avez photographié un reçu pour une note de frais, mais vous avez maintenant besoin du nom du commerçant, du total et de la date sous forme de texte copiable — pas d'une photo à partir de laquelle retaper.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous prenez en photo un reçu de déjeuner car vous en aurez besoin plus tard pour vos frais. Ou vous recevez un reçu scanné par e-mail. L'information dont vous avez besoin — nom du commerçant, date, totaux détaillés, montants de taxe — est bien là dans l'image, mais au moment de remplir la note de frais, vous plissez les yeux devant une photo et tapez manuellement chaque ligne. Un chiffre transposé dans le total et votre note est signalée.</p>

<h2>Pourquoi les photos de reçus sont si difficiles à exploiter</h2>
<p>Les reçus font partie des pires candidats à la transcription manuelle. Ils utilisent de petites polices, un espacement incohérent et des abréviations. Le papier thermique s'estompe rapidement, rendant les vieux reçus encore plus difficiles à lire. Et chaque système de notes de frais veut des données structurées — commerçant, date, montant — pas une pièce jointe JPEG.</p>
<p>macOS n'a aucun outil intégré qui extrait le texte d'une photo de reçu et le place dans votre presse-papiers. Aperçu vous montre l'image. Photos l'organise. Aucun des deux ne vous laisse sélectionner le texte imprimé et le copier. Des scanners de dépenses tiers existent, mais ce sont des applications lourdes conçues pour des flux de travail d'entreprise, pas pour récupérer rapidement un total depuis une photo.</p>

<h2>Faites glisser sur le reçu, obtenez le texte</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> lit le texte directement depuis votre écran. Ouvrez la photo du reçu dans n'importe quelle visionneuse — Aperçu, Quick Look, un navigateur, même votre client de messagerie — activez Optic depuis la barre de menus, et faites glisser une sélection sur la partie du reçu dont vous avez besoin. Les caractères reconnus atterrissent dans votre presse-papiers, prêts à être collés dans une feuille de calcul ou un formulaire de note de frais.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic extracting text from a receipt photo on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Notes de frais</h3>
<p>Sélectionnez le nom du commerçant et le total depuis une image de reçu et collez-les directement dans votre outil de suivi des frais. Pas de retaper, pas d'erreurs de transposition. Récupérez des lignes individuelles ou le reçu entier — chaque capture est enregistrée dans votre historique de la barre de menus pour référence.</p>

<h3>Fiscalité et comptabilité</h3>
<p>Les indépendants et les propriétaires de petites entreprises accumulent des photos de reçus tout au long de l'année. Quand arrive la saison des impôts, ouvrez chaque image de reçu et extrayez les chiffres pertinents en un seul glissement. Construisez votre feuille de calcul de déductions en quelques minutes plutôt qu'en des heures de saisie manuelle.</p>

<h3>Demandes de remboursement</h3>
<p>Besoin d'inclure des montants exacts dans un e-mail de remboursement ? Extrayez le total, la taxe et la date depuis la photo du reçu et collez-les dans votre message. Les chiffres précis du reçu ont plus de poids que des nombres approximatifs tapés de mémoire.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Obtenez Optic sur le Mac App Store</a></p>
`,
  },

  "copy-text-from-zoom-screenshare-mac": {
    slug: "copy-text-from-zoom-screenshare-mac",
    title: "Comment copier du texte depuis un partage d'écran Zoom sur Mac",
    description:
      "Un collègue partage son écran sur Zoom en montrant une URL, une configuration ou des données — mais vous ne pouvez que regarder, pas sélectionner ni copier le texte que vous voyez.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous êtes dans une réunion Zoom et un collègue partage son écran. Il parcourt un tableau de bord, montre un fichier de configuration, ou fait une démo d'application. Sur son écran partagé, vous pouvez clairement voir des URL, des identifiants, des commandes de terminal et des données — mais la visionneuse Zoom ne vous donne aucune capacité d'interagir avec quoi que ce soit. Vous pouvez regarder, mais pas sélectionner. Vous lui demandez de coller le lien dans le chat, il oublie, et la réunion continue.</p>

<h2>Les partages d'écran sont conçus pour être en lecture seule</h2>
<p>Lorsque quelqu'un partage son écran via Zoom, Google Meet ou Microsoft Teams, ce que vous voyez est un flux vidéo de son affichage. Votre curseur n'interagit pas avec son contenu. Vous ne pouvez pas cliquer dans son éditeur de texte, ne pouvez pas surligner la sortie de son terminal, ne pouvez pas faire de clic droit sur ses onglets de navigateur. Tout ce qui est affiché sur l'écran partagé est une image en mouvement du point de vue de votre Mac.</p>
<p>C'est particulièrement pénible lors de réunions techniques. Un ingénieur DevOps montre une configuration Kubernetes. Un chef de produit parcourt des analyses. Un designer présente du texte sur des maquettes. Le texte défile, et vos options sont : demander de ralentir et de dicter, taper frénétiquement ce que vous pouvez voir, ou espérer que l'enregistrement le capture assez clairement pour le revoir plus tard.</p>

<h2>Capturez du texte depuis n'importe quel écran partagé</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> traite la fenêtre Zoom comme n'importe quelle autre partie de votre écran. Activez-le depuis la barre de menus, faites glisser une sélection sur le texte visible dans l'écran partagé, et les caractères reconnus sont copiés dans votre presse-papiers. Cela fonctionne que le présentateur montre un navigateur, un terminal, une feuille de calcul, ou une présentation.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic capturing text from a Zoom screen share on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Réunions techniques</h3>
<p>Récupérez les commandes de terminal, les chemins de fichiers, les points de terminaison d'API et les valeurs de configuration dès qu'ils apparaissent sur l'écran partagé. Pas besoin de demander au présentateur de faire une pause et de coller dans le chat. Pas de retaper de mémoire après la réunion.</p>

<h3>Données et tableaux de bord</h3>
<p>Lorsqu'un écran partagé montre des métriques, des indicateurs clés ou des données tabulaires, sélectionnez directement les chiffres. Collez-les dans vos propres notes ou feuille de calcul avec les valeurs exactes qui étaient affichées.</p>

<h3>Historique des captures comme notes de réunion</h3>
<p>Chaque extraction est enregistrée dans l'historique de la barre de menus d'Optic. Effectuez plusieurs captures tout au long de la réunion et vous aurez un journal horodaté de chaque élément de texte que vous avez récupéré — fonctionnant comme des notes de réunion précises pour le contenu qui comptait le plus.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Obtenez Optic sur le Mac App Store</a></p>
`,
  },

  "mac-screenshot-to-text": {
    slug: "mac-screenshot-to-text",
    title: "De la capture d'écran au texte sur Mac — Extraire les mots de n'importe quelle capture",
    description:
      "Vous prenez des captures d'écran en permanence, mais transformer ces captures en texte modifiable et recherchable nécessite encore de retaper tout ce que vous voyez.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Les captures d'écran sont le moyen le plus rapide de saisir ce qui est à l'écran, mais le moyen le plus lent d'exploiter l'information plus tard. Vous faites Cmd+Maj+4 sur un numéro de confirmation, une recette, une série d'identifiants Wi-Fi, ou une adresse — et au moment où vous avez besoin de ce texte dans un formulaire, un e-mail ou un document, vous fixez une image et retapez caractère par caractère.</p>

<h2>L'écart entre capture d'écran et texte</h2>
<p>macOS rend la prise de captures d'écran sans effort. Les raccourcis clavier sont intégrés, les captures sont de haute qualité, et elles s'enregistrent automatiquement sur votre bureau ou dans le presse-papiers. Mais macOS n'offre aucun moyen intégré de transformer le texte visible d'une capture d'écran en texte réellement modifiable. Le flux de travail de la capture d'écran s'arrête à l'image. Tout ce qui suit — extraire, copier, coller les mots à l'intérieur — est entièrement manuel.</p>
<p>Les utilisateurs qui prennent des captures d'écran comme moyen de « sauvegarder du texte » accumulent rapidement un bureau plein d'images qu'ils ne peuvent ni rechercher, ni indexer, ni référencer facilement. Trouver ce numéro de confirmation signifie faire défiler des dizaines de captures et les scanner visuellement une par une.</p>

<h2>Sautez la capture d'écran, capturez directement le texte</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> remplace le flux de travail capture-puis-retaper par une seule action. Au lieu de capturer une image du texte, activez Optic depuis la barre de menus et faites glisser une sélection sur les mots dont vous avez besoin. Le moteur d'OCR lit les caractères et les copie dans votre presse-papiers sous forme de texte modifiable — aucune image enregistrée, aucun retapage nécessaire.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic converting screen content to text on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Vous avez déjà pris la capture d'écran ?</h3>
<p>Aucun problème. Ouvrez votre capture d'écran existante dans n'importe quelle visionneuse et faites glisser la sélection d'Optic sur le texte qu'elle contient. Il lit les caractères de n'importe quelle image affichée sur votre écran, de sorte que votre bibliothèque de captures d'écran existante n'est pas gaspillée — elle devient simplement accessible.</p>

<h3>Historique des captures consultable</h3>
<p>Chaque extraction de texte est enregistrée dans l'historique de la barre de menus d'Optic. Au lieu d'un dossier d'images non consultables, vous obtenez une liste défilante de chaînes de texte capturées. Besoin de ce numéro de confirmation d'il y a deux jours ? Faites défiler votre historique au lieu de fouiller dans des fichiers de captures d'écran.</p>

<h3>Plus rapide que Cmd+Maj+4</h3>
<p>Le geste est presque identique — activer, faire glisser un rectangle — mais le résultat est un texte immédiatement utile plutôt qu'une image plate. Pour quiconque prend des captures d'écran principalement pour sauvegarder du texte, cela élimine toute l'étape de conversion.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Obtenez Optic sur le Mac App Store</a></p>
`,
  },

  "copy-serial-number-from-image-mac": {
    slug: "copy-serial-number-from-image-mac",
    title: "Comment copier un numéro de série depuis une image sur Mac",
    description:
      "Un numéro de série se trouve dans une photo ou un scan — long, alphanumérique, impossible à retaper sans erreurs. Vous en avez besoin sous forme de texte copiable, pas de pixels.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous devez enregistrer un produit, déposer une demande de garantie, ou contacter le support — et on vous demande le numéro de série. Le problème : le numéro de série se trouve sur un autocollant que vous avez photographié, dans une facture PDF, sur une capture d'écran d'une page de paramètres, ou dans un e-mail de confirmation avec une image intégrée. C'est une longue chaîne de lettres et de chiffres — parfois 15 ou 20 caractères — sans motif pour vous aider à vous en souvenir. Le retaper signifie une quasi-certitude de se tromper sur au moins un caractère.</p>

<h2>Les numéros de série sont conçus pour déjouer la saisie manuelle</h2>
<p>Les numéros de série combinent des lettres majuscules, des lettres minuscules et des chiffres dans des séquences délibérément conçues pour être uniques, pas mémorables. Des caractères comme O et 0, l et 1, S et 5 se ressemblent presque dans la plupart des polices. Un seul caractère erroné et le numéro de série ne se valide pas, et vous vous demandez lequel des 20 caractères vous avez mal lu.</p>
<p>macOS ne vous offre aucun raccourci ici. Si le numéro de série se trouve dans une photo ou un document scanné, vous ne pouvez pas le sélectionner. S'il se trouve dans une image intégrée dans un e-mail, vous ne pouvez pas le surligner. Vous êtes coincé à soit retaper prudemment en espérant que ça passe, soit zoomer caractère par caractère et vérifier chacun.</p>

<h2>Faites glisser sur le numéro de série, copiez-le parfaitement</h2>
<p>Ouvrez l'image, le scan ou la capture d'écran contenant le numéro de série dans n'importe quelle application, puis activez <a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> depuis la barre de menus. Faites glisser une sélection précise autour de la chaîne du numéro de série. Le moteur d'OCR lit chaque caractère et copie le texte exact dans votre presse-papiers. Collez-le dans le formulaire d'enregistrement, le chat de support, ou vos dossiers.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic copying a serial number from an image on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Enregistrement de produit</h3>
<p>Le nouveau matériel exige souvent de saisir un numéro de série lors de l'installation ou de l'enregistrement de la garantie. Photographiez l'étiquette, ouvrez-la sur votre Mac, et extrayez la chaîne en un seul glissement. Pas de plissement d'yeux, pas de devinettes entre O et 0.</p>

<h3>Support et demandes de garantie</h3>
<p>Les agents de support demandent des numéros de série pour identifier votre appareil ou produit. Avoir la chaîne exacte dans votre presse-papiers signifie que vous pouvez la coller instantanément dans le chat ou l'e-mail de support, évitant les allers-retours dus à des identifiants mal saisis.</p>

<h3>Suivi des actifs</h3>
<p>Les services informatiques photographient les étiquettes d'actifs et de numéros de série sur le matériel de l'entreprise. Optic transforme ces photos en texte copiable, facilitant le remplissage de feuilles de calcul d'inventaire sans transcription manuelle de centaines de numéros de série.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Obtenez Optic sur le Mac App Store</a></p>
`,
  },

  "ocr-handwriting-mac": {
    slug: "ocr-handwriting-mac",
    title: "OCR d'écriture manuscrite sur Mac — Convertir des notes écrites en texte",
    description:
      "Vous avez photographié des notes manuscrites — d'un tableau blanc, d'un carnet, ou d'un post-it — et avez besoin des mots sous forme de texte numérique modifiable.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>La réunion s'est terminée il y a vingt minutes et vous avez pris en photo le tableau blanc avant que quelqu'un ne l'efface. Ou vous prenez des notes à la main dans un carnet et devez maintenant les envoyer par e-mail à votre équipe. Les mots sont dans la photo, écrits assez clairement pour être lus, mais il n'y a aucun moyen de sélectionner du texte manuscrit depuis une image et de le coller dans un document. Alors vous vous asseyez et commencez à transcrire votre propre écriture, mot par mot.</p>

<h2>L'écriture manuscrite vit en dehors du monde du texte numérique</h2>
<p>macOS traite les images d'écriture manuscrite comme n'importe quelle autre image — comme des pixels sans couche de texte. Aperçu peut afficher votre photo de tableau blanc mais n'en extraira pas les mots. Texte en direct d'Apple peut parfois reconnaître une écriture soignée dans Photos, mais les performances varient énormément selon le style d'écriture, la qualité de l'image et l'angle de prise de vue. Une écriture désordonnée mais lisible ne produit souvent aucun résultat.</p>
<p>Des applications d'OCR d'écriture manuscrite dédiées existent, mais la plupart sont axées sur iOS ou nécessitent de télécharger des images vers des services cloud. Si vous voulez rester sur votre Mac et travailler avec une photo déjà à l'écran, les options sont limitées.</p>

<h2>Sélectionnez du texte manuscrit depuis n'importe quelle photo</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> effectue l'OCR sur tout ce qui est visible sur votre écran, y compris le texte manuscrit dans les photos. Ouvrez la photo de vos notes dans n'importe quelle visionneuse, activez Optic depuis la barre de menus, et faites glisser une sélection sur la zone manuscrite. Le texte reconnu est copié dans votre presse-papiers pour être collé dans des e-mails, des documents, ou des applications de prise de notes.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic recognizing handwriting from a photo on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Captures de tableau blanc</h3>
<p>Les tableaux blancs de réunion sont temporaires par nature — quelqu'un a toujours besoin de l'espace ensuite. Photographiez le tableau, ouvrez la photo sur votre Mac, et extrayez le contenu écrit avec Optic. Transformez des sessions de brainstorming, des diagrammes annotés et des listes de tâches en texte numérique avant que le tableau ne soit effacé.</p>

<h3>Pages de carnet</h3>
<p>Beaucoup de gens préfèrent encore le papier et le stylo pour la réflexion initiale mais ont besoin de texte numérique pour le partage et la recherche. Photographiez votre page de carnet et extrayez les sections clés. Pas besoin de transcrire une page entière — sélectionnez juste les paragraphes ou les puces dont vous avez besoin.</p>

<h3>Post-its et étiquettes</h3>
<p>Post-its manuscrits sur un moniteur, étiquettes sur des cartons de rangement, annotations sur des documents imprimés — photographiez-les et extrayez le texte. Particulièrement utile lorsqu'il s'agit de l'écriture de quelqu'un d'autre et que vous préférez laisser l'OCR tenter sa chance plutôt que de la déchiffrer caractère par caractère.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Obtenez Optic sur le Mac App Store</a></p>
`,
  },

  "mac-text-recognition-menu-bar": {
    slug: "mac-text-recognition-menu-bar",
    title: "Reconnaissance de texte depuis la barre de menus Mac",
    description:
      "Vous avez besoin d'une reconnaissance de texte rapide sans ouvrir une application complète, importer des fichiers, ou perturber votre flux de travail — juste une capture rapide de ce qui est à l'écran.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous êtes en plein milieu de quelque chose — rédiger un e-mail, coder, parcourir des recherches — et vous repérez du texte à l'écran dont vous avez besoin. Peut-être est-il dans une image, une image vidéo, ou un élément d'interface non sélectionnable. La dernière chose que vous voulez, c'est briser votre élan en ouvrant une application d'OCR séparée, en important un fichier, en attendant le traitement, puis en copiant le résultat. Vous avez besoin du texte maintenant, sans quitter ce que vous êtes en train de faire.</p>

<h2>L'OCR traditionnel perturbe votre flux de travail</h2>
<p>La plupart des outils d'OCR sont des applications autonomes avec leurs propres fenêtres, navigateurs de fichiers et pipelines de traitement. Pour les utiliser, vous enregistrez ou capturez le contenu, passez à l'application d'OCR, importez le fichier, attendez la reconnaissance, copiez le résultat, revenez à votre application d'origine, et collez. Cela fait six changements de contexte pour une tâche qui devrait prendre une seconde.</p>
<p>Même les outils plus légers nécessitent souvent leur propre fenêtre ou panneau. Ils occupent le Dock, exigent de l'espace à l'écran, et détournent votre attention de la tâche en cours. Pour des captures de texte rapides et fréquentes tout au long d'une journée de travail, cette surcharge s'accumule rapidement.</p>

<h2>Un clic, un glissement, retour au travail</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> se loge dans la barre de menus Mac — l'emplacement le moins intrusif possible. Cliquez sur l'icône de la barre de menus ou appuyez sur un raccourci clavier, faites glisser un rectangle sur le texte dont vous avez besoin, et les caractères reconnus se trouvent dans votre presse-papiers. L'interaction entière prend moins de deux secondes, et vous ne quittez jamais l'application dans laquelle vous travaillez.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic text recognition from the Mac menu bar" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Toujours disponible, jamais dans vos pattes</h3>
<p>Pas d'icône dans le Dock, pas de fenêtre principale, pas d'application à gérer. Optic se tient tranquillement dans la barre de menus jusqu'à ce que vous en ayez besoin. Il se lance à la connexion et reste prêt sans consommer votre attention ou l'espace de votre écran.</p>

<h3>Accès par raccourci clavier</h3>
<p>Pour une activation encore plus rapide, utilisez le raccourci clavier pour déclencher une capture sans toucher la barre de menus. Vos mains restent sur le clavier, vous faites glisser la sélection, et le texte est capturé — le tout sans un seul clic sur l'icône de la barre de menus.</p>

<h3>Historique sans fenêtre séparée</h3>
<p>Chaque capture est enregistrée dans le menu déroulant de la barre de menus. Cliquez sur l'icône Optic pour voir vos captures récentes, recopier une extraction précédente, ou passer en revue ce que vous avez récupéré pendant la session. L'historique vit là où vit l'outil — dans la barre de menus, hors de votre chemin jusqu'à ce que vous le vouliez.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Obtenez Optic sur le Mac App Store</a></p>
`,
  },

  "copy-text-from-youtube-video-mac": {
    slug: "copy-text-from-youtube-video-mac",
    title: "Comment copier du texte depuis une vidéo YouTube sur Mac",
    description:
      "Une vidéo YouTube affiche une commande, un lien, ou une information dont vous avez besoin — mais le lecteur vidéo ne vous laisse sélectionner aucun texte depuis l'image vidéo.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous suivez un tutoriel YouTube et l'instructeur tape une longue commande de terminal. Ou une critique vidéo montre brièvement un tableau comparatif de produits. Ou une présentation technique affiche des paramètres que vous devez reproduire. Le texte est parfaitement visible à l'écran, mais le lecteur vidéo de YouTube ne fait qu'afficher des images — il n'y a rien à cliquer, surligner ou copier. Vous mettez la vidéo en pause et commencez à taper ce que vous voyez, en espérant ne pas manquer une option ou mal orthographier un chemin.</p>

<h2>Le texte YouTube est incrusté dans la vidéo</h2>
<p>Tout ce que vous voyez dans une image vidéo YouTube est une image décodée. Qu'il s'agisse d'une diapositive, d'une session de terminal, d'un éditeur de code, ou de graphismes à l'écran, le texte fait partie des données de pixels. YouTube ne fournit aucun mécanisme pour extraire du texte du contenu vidéo lui-même. Les sous-titres et les descriptions sont séparés — ils couvrent ce qui est dit, pas ce qui est montré à l'écran.</p>
<p>Certains créateurs mettent les commandes et les liens dans la description de la vidéo ou dans les commentaires épinglés, mais beaucoup ne le font pas. Et pour du contenu comme des tableaux comparatifs, des pages de paramètres, ou des données affichées dans la vidéo, il n'y a généralement aucun équivalent textuel fourni.</p>

<h2>Récupérez le texte directement depuis l'image vidéo</h2>
<p>Mettez la vidéo en pause au bon moment (ou non — cela fonctionne aussi sur du contenu en lecture), activez <a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> depuis la barre de menus, et faites glisser une sélection sur le texte visible dans le lecteur YouTube. Optic lit les caractères de l'image affichée et les copie dans votre presse-papiers. Fonctionne dans n'importe quel navigateur — Safari, Chrome, Firefox, Arc.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic copying text from a YouTube video on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Commandes et code de tutoriels</h3>
<p>Les tutoriels de programmation affichent constamment des commandes de terminal, des extraits de code et des exemples de configuration. Un seul glissement extrait le texte exact — en préservant les caractères spéciaux, les options et la syntaxe faciles à mal saisir manuellement.</p>

<h3>Données et tableaux à l'écran</h3>
<p>Les critiques de produits, les comparatifs de performances et le contenu éducatif montrent souvent des tableaux ou des listes à l'écran. Sélectionnez la zone de données et collez le texte extrait dans vos notes ou une feuille de calcul. Fini de mettre en pause et de transcrire ligne par ligne.</p>

<h3>URL et références</h3>
<p>Quand une vidéo affiche brièvement une URL, un titre de livre, ou un nom de ressource, capturez-le avant qu'il ne disparaisse. L'historique des captures d'Optic enregistre chaque extraction, donc même si vous récupérez du texte pendant que la vidéo joue, vous pouvez le retrouver plus tard depuis le menu déroulant de la barre de menus.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Obtenez Optic sur le Mac App Store</a></p>
`,
  },

  "scan-qr-code-from-screenshot-mac": {
    slug: "scan-qr-code-from-screenshot-mac",
    title: "Comment scanner un code QR depuis une capture d'écran sur Mac",
    description:
      "Vous avez une capture d'écran d'un code QR sur votre Mac, mais aucun moyen de le scanner — l'appareil photo de votre téléphone ne peut pas lire un écran, et macOS n'offre aucun décodeur intégré.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Quelqu'un vous envoie par SMS une capture d'écran contenant un code QR. Ou vous avez enregistré un code QR depuis un site web pour plus tard. Ou une pièce jointe PDF en inclut un renvoyant vers une page d'inscription. Le code QR se trouve sur votre écran Mac sous forme d'image, et l'instinct naturel est de le « scanner » — mais comment ? Pointer l'appareil photo de votre téléphone vers votre moniteur d'ordinateur est maladroit, produit des reflets, et ouvre le lien sur le mauvais appareil. macOS n'offre aucun moyen intégré de décoder un code QR depuis une image ou une capture d'écran.</p>

<h2>Aucun décodeur QR natif sur macOS</h2>
<p>Les iPhones ont le scan de codes QR intégré à l'application Appareil photo. macOS n'a rien d'équivalent. Vous ne pouvez pas faire un clic droit sur une image de code QR dans le Finder et choisir « Décoder ». Aperçu n'extrait pas d'URL d'un code QR. Safari ne reconnaît pas les codes QR sur les pages web. Si le code QR est déjà sur votre écran Mac, l'écosystème Apple s'attend à ce que vous utilisiez un autre appareil pour le lire — ce qui n'a aucun sens quand vous voulez le résultat sur le même ordinateur.</p>
<p>Des décodeurs QR en ligne existent, mais ils nécessitent de télécharger votre image vers un serveur tiers. Pour les codes QR contenant des informations sensibles — mots de passe Wi-Fi, jetons d'authentification, URL privées — télécharger vers un site web aléatoire n'est pas envisageable.</p>

<h2>Décodez les codes QR directement sur votre écran</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> inclut un scanner de codes QR qui fonctionne sur tout ce qui est visible sur votre écran. Ouvrez la capture d'écran ou l'image contenant le code QR, activez Optic depuis la barre de menus, et faites glisser une sélection autour du code. Le contenu décodé — URL, texte, identifiants, quoi que le code encode — apparaît immédiatement sur votre Mac.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic scanning a QR code from a screenshot on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Billets d'événements et cartes d'embarquement</h3>
<p>Les codes QR sur les confirmations par e-mail, les billets transférés et les cartes d'embarquement enregistrées sont courants. Décodez-les sur votre Mac pour vérifier le contenu, ouvrir la page liée, ou enregistrer l'information encodée — le tout sans passer par votre téléphone.</p>

<h3>Codes Wi-Fi et d'authentification</h3>
<p>Les codes QR encodant des identifiants Wi-Fi ou des URI de configuration à deux facteurs contiennent des données sensibles. Optic les décode localement sur votre appareil — aucun téléchargement vers des serveurs externes, aucune exposition de vos identifiants à des services tiers.</p>

<h3>Enregistré dans l'historique des captures</h3>
<p>Chaque code QR décodé est enregistré dans l'historique de la barre de menus d'Optic aux côtés de vos captures de texte. Besoin du mot de passe Wi-Fi d'un code QR scanné la semaine dernière ? Faites défiler vos captures au lieu de retrouver et rescanner l'image originale.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Obtenez Optic sur le Mac App Store</a></p>
`,
  },

  "ocr-foreign-language-mac": {
    slug: "ocr-foreign-language-mac",
    title: "OCR de texte en langue étrangère sur Mac",
    description:
      "Du texte dans une langue étrangère apparaît à l'écran — dans une image, un document, ou une vidéo — et vous devez le copier même si vous ne pouvez pas taper ces caractères vous-même.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous regardez l'étiquette d'un produit japonais dans une photo, un document juridique français que quelqu'un a scanné, ou du texte chinois dans un tutoriel vidéo. Vous avez besoin de ce texte — pour le coller dans un traducteur, l'envoyer à un collègue, l'inclure dans un rapport. Mais vous ne pouvez pas taper ces caractères. Vous n'avez pas la disposition de clavier installée, vous ne connaissez pas la méthode de saisie, et même si vous la connaissiez, regarder un caractère et le reproduire touche par touche prendrait une éternité. Le texte est bien là à l'écran, lisible par quiconque connaît la langue, mais impossible à copier pour vous.</p>

<h2>Les caractères étrangers sans le bon clavier sont inaccessibles</h2>
<p>macOS prend en charge de nombreuses dispositions de clavier, mais passer à l'une d'elles et apprendre sa méthode de saisie juste pour copier quelques caractères d'une image est peu pratique. La recherche caractère par caractère dans une table Unicode ou un outil IME est douloureusement lente. Des méthodes de saisie manuscrite existent pour certaines langues mais sont maladroites au-delà d'un seul caractère.</p>
<p>Le problème s'aggrave lorsque le texte se trouve dans une image, un document scanné, ou une image vidéo — des contextes où vous ne pouvez pas sélectionner de texte même dans votre propre langue. Le texte en langue étrangère dans ces formats est doublement inaccessible : vous ne pouvez pas le sélectionner car c'est une image, et vous ne pourriez pas le taper même si vous pouviez voir chaque caractère clairement.</p>

<h2>Sélectionnez visuellement le texte étranger, copiez-le numériquement</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> reconnaît les caractères depuis votre écran quelle que soit la langue. Activez-le depuis la barre de menus, faites glisser sur le texte en langue étrangère visible dans n'importe quelle image, document, ou image vidéo, et les caractères reconnus sont copiés dans votre presse-papiers — dans le bon script, avec les bons caractères Unicode. Collez-les dans Google Translate, DeepL, ou n'importe quelle application.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic recognizing foreign language text on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Flux de traduction</h3>
<p>Le chemin le plus rapide entre un texte étranger dans une image et une traduction est : sélectionner avec Optic, coller dans un traducteur. Aucune transcription manuelle, aucun changement de clavier, aucune recherche de caractères. Fonctionne avec le latin, le cyrillique, les langues CJC, l'arabe et d'autres écritures.</p>

<h3>Documents internationaux</h3>
<p>Les contrats, factures et formulaires scannés dans d'autres langues contiennent des noms, des adresses et des chiffres que vous pourriez avoir besoin d'extraire. Faites glisser sur la section pertinente et collez les caractères dans vos propres documents, en préservant fidèlement le script original.</p>

<h3>Apprentissage des langues</h3>
<p>Vous rencontrez du nouveau vocabulaire dans des images ou des vidéos ? Sélectionnez le texte et collez-le dans une application de cartes mémoire ou un dictionnaire. Avoir les caractères exacts — plutôt qu'une supposition de romanisation — garantit des recherches et un apprentissage précis.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Obtenez Optic sur le Mac App Store</a></p>
`,
  },

  "copy-text-from-slack-image-mac": {
    slug: "copy-text-from-slack-image-mac",
    title: "Comment copier du texte depuis une image dans Slack sur Mac",
    description:
      "Un collègue partage une capture d'écran dans Slack — un journal d'erreurs, une configuration, un tableau de bord — et le texte qu'elle contient n'est que des pixels que vous ne pouvez ni copier ni rechercher.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Cela arrive plusieurs fois par jour. Un collègue publie une capture d'écran dans un canal Slack : une erreur de terminal, un tableau de bord montrant des métriques, un extrait de code de son éditeur, ou un panneau de configuration. Vous avez besoin du texte de cette capture d'écran — un message d'erreur à rechercher, une métrique à citer dans un rapport, ou un bloc de code à tester localement. Mais la visionneuse d'images de Slack vous montre l'image et rien d'autre. Le texte qu'elle contient pourrait tout aussi bien être une peinture à l'aquarelle en ce qui concerne votre presse-papiers.</p>

<h2>Slack traite les images comme des images</h2>
<p>Lorsque quelqu'un partage une capture d'écran dans Slack, elle est affichée en tant qu'image intégrée ou s'ouvre dans la visionneuse d'images de Slack. Il n'y a aucune couche d'OCR, aucune option d'extraction de texte, aucun « copier le texte de l'image » dans le menu contextuel. Vous pouvez télécharger l'image, mais cela vous donne juste les mêmes pixels sous forme de fichier sur disque — toujours pas de texte sélectionnable.</p>
<p>C'est un point de friction quotidien dans les équipes d'ingénierie, de support et d'opérations. Les captures d'écran sont le moyen le plus rapide de partager des informations visuelles dans un chat, mais chaque capture d'écran contenant du texte devient une impasse pour le destinataire. L'expéditeur suppose que l'information est partagée ; le destinataire doit la transcrire manuellement ou demander à l'expéditeur de la coller sous forme de texte — une demande qui reste souvent sans réponse pendant des heures.</p>

<h2>Lisez le texte directement depuis les images Slack</h2>
<p>Lorsque vous voyez une capture d'écran dans Slack qui contient du texte dont vous avez besoin, ouvrez-la dans la visionneuse d'images de Slack ou regardez simplement l'aperçu intégré, puis activez <a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> depuis la barre de menus et faites glisser une sélection sur le texte. Les caractères sont reconnus et copiés dans votre presse-papiers en quelques secondes — pas de téléchargement, pas de changement d'application, pas d'attente pour que l'expéditeur repartage sous forme de texte.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic extracting text from a Slack image on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Messages d'erreur et journaux</h3>
<p>Des captures d'écran d'erreurs et de traces de pile sont partagées en permanence dans les canaux d'ingénierie. Extrayez la chaîne d'erreur exacte et collez-la dans votre moteur de recherche ou votre agrégateur de journaux pour une recherche instantanée, plutôt que de retaper un message d'erreur de 200 caractères.</p>

<h3>Extraits de code</h3>
<p>Quand quelqu'un capture son code en image au lieu de le coller comme extrait, Optic vous permet de l'extraire quand même sous forme de texte. Copiez le code, collez-le dans votre éditeur, et testez-le localement — bien plus rapide que de retaper le code de quelqu'un d'autre depuis une image.</p>

<h3>Métriques et données</h3>
<p>Les captures d'écran de tableaux de bord partagées dans les canaux Slack contiennent des chiffres, des libellés et des tendances. Sélectionnez les chiffres spécifiques dont vous avez besoin et collez-les dans vos propres rapports ou feuilles de calcul sans erreurs de transcription manuelle.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Obtenez Optic sur le Mac App Store</a></p>
`,
  },

  "mac-preview-ocr-limitations": {
    slug: "mac-preview-ocr-limitations",
    title: "Limites de l'OCR d'Aperçu sur Mac — Ce qu'il manque",
    description:
      "Aperçu gère les images et les PDF mais ne peut pas en extraire le texte dans la plupart des cas. Si vous avez essayé de copier du texte depuis un PDF scanné ou une photo dans Aperçu et n'avez rien obtenu, voici pourquoi.",
    date: "2026-09-06",
    readTime: "5 min de lecture",
    content: `
<p>Aperçu est la visionneuse d'images et de PDF par défaut sur macOS, et de nombreux utilisateurs supposent qu'elle peut gérer l'OCR — reconnaître et extraire du texte depuis des images et des documents scannés. Dans des situations limitées, c'est le cas, grâce à l'intégration de Texte en direct. Mais dans de nombreux scénarios courants, Aperçu échoue silencieusement à reconnaître le texte ou ne fournit aucune capacité d'extraction. Si vous avez essayé de sélectionner du texte dans un PDF scanné ou une photo d'un document dans Aperçu et que votre curseur ne fait que tracer un rectangle de sélection sans surligner de texte, vous avez heurté le mur de l'OCR d'Aperçu.</p>

<h2>Où la reconnaissance de texte d'Aperçu s'effondre</h2>
<p><strong>PDF scannés avec mise en page complexe.</strong> Aperçu peut parfois reconnaître du texte dans des documents propres, bien scannés, à colonne unique. Mais les mises en page multi-colonnes, les tableaux, les en-têtes et pieds de page, et les documents mélangeant graphismes et texte ne produisent souvent aucun texte sélectionnable du tout. Le moteur Texte en direct d'Aperçu ne gère pas de manière fiable les structures de documents complexes.</p>
<p><strong>Texte à faible contraste ou petit.</strong> Les scans de reçus, les documents fanés, et les images à faible contraste entre le texte et l'arrière-plan déjouent fréquemment la reconnaissance d'Aperçu. Le texte peut être parfaitement lisible pour l'œil humain mais invisible pour la détection d'Aperçu.</p>
<p><strong>Texte manuscrit.</strong> La reconnaissance de texte d'Aperçu est calibrée pour les polices imprimées. Les notes manuscrites, les photos de tableaux blancs et les documents annotés sont rarement reconnus, même quand l'écriture est propre et lisible.</p>
<p><strong>Écritures non latines.</strong> La prise en charge des langues non latines est inégale. Le texte CJC, arabe et cyrillique dans les images peut être détecté ou non selon le style de police, la qualité de l'image et la complexité du document.</p>
<p><strong>Aucune capture depuis l'écran.</strong> Aperçu ne traite que les fichiers que vous avez ouverts. Si le texte dont vous avez besoin se trouve dans une image vidéo, une interface d'application web, une boîte de dialogue d'erreur, ou la fenêtre d'une autre application, Aperçu n'a aucun moyen de l'atteindre.</p>

<h2>Un OCR qui fonctionne sur tout ce qui est à l'écran</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> contourne entièrement les limites d'Aperçu en fonctionnant au niveau de l'écran. Au lieu de demander à une visionneuse de fichiers de reconnaître le texte à l'intérieur d'un fichier, Optic lit les caractères de tout ce qui est visible sur votre écran. Ouvrez le document problématique dans Aperçu — ou toute autre application — et faites glisser la sélection d'Optic sur le texte dont vous avez besoin.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic overcoming Preview OCR limitations on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Mises en page de documents complexes</h3>
<p>Les tableaux, le texte multi-colonnes et le contenu mixte qui déjouent Aperçu sont lisibles par Optic car vous contrôlez exactement quelle région scanner. Sélectionnez juste la colonne ou la cellule du tableau dont vous avez besoin — aucune analyse complète de la page requise.</p>

<h3>Au-delà des fichiers</h3>
<p>Optic ne se limite pas aux fichiers ouverts. Images vidéo, boîtes de dialogue, applications web, sessions de bureau à distance — tout ce qui est affiché à l'écran est éligible. Aperçu ne peut jamais atteindre ces sources ; Optic les lit aussi naturellement que n'importe quelle image.</p>

<h3>Historique persistant</h3>
<p>Aperçu n'a aucune mémoire des tentatives de reconnaissance de texte passées. Optic enregistre chaque extraction dans la barre de menus, constituant un journal de texte capturé que vous pouvez faire défiler et recopier à tout moment.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Obtenez Optic sur le Mac App Store</a></p>
`,
  },

  "batch-ocr-screenshots-mac": {
    slug: "batch-ocr-screenshots-mac",
    title: "OCR par lots de captures d'écran sur Mac — Traiter l'historique des captures",
    description:
      "Vous avez une collection de captures d'écran contenant du texte dont vous avez besoin — mais les traiter une par une avec un outil d'OCR traditionnel est fastidieux et lent.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous avez pris une douzaine de captures d'écran pendant une session de recherche — tableaux de tarification, comparatifs de fonctionnalités, panneaux de paramètres, documentation de référence. Maintenant vous avez besoin du texte de toutes ces captures. Avec les outils d'OCR traditionnels, cela signifie ouvrir chaque fichier individuellement, lancer la reconnaissance, copier le résultat, le coller quelque part, et recommencer. Douze captures d'écran signifient douze cycles d'ouverture-traitement-copie-collage. Ce n'est pas difficile — juste fastidieusement lent.</p>

<h2>macOS n'offre aucune extraction de texte par lots</h2>
<p>Il n'existe aucune fonction macOS intégrée qui vous permette de sélectionner plusieurs images et d'en extraire le texte en une fois. Aperçu peut ouvrir plusieurs fichiers mais n'a aucune fonction « extraire tout le texte ». Automator et Raccourcis peuvent enchaîner certaines actions mais manquent de capacités d'OCR fiables pour les captures d'écran. Vous traitez soit chaque image manuellement, soit vous installez un logiciel de traitement de documents lourd conçu pour des flux de numérisation d'entreprise.</p>
<p>L'ironie est que vous avez capturé ces captures d'écran rapidement — Cmd+Maj+4, clic, terminé — mais extraire le texte qu'elles contiennent prend dix fois plus de temps que leur capture.</p>

<h2>OCR d'écran rapide avec historique intégré</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> transforme l'extraction par lots en un flux de travail rapide et linéaire. Ouvrez vos captures d'écran dans Quick Look ou n'importe quelle visionneuse, puis effectuez des sélections rapides — faites glisser sur le texte d'une image, passez à la suivante, faites glisser à nouveau. Chaque extraction est instantanément enregistrée dans l'historique des captures d'Optic dans la barre de menus. Aucune gestion de fichiers, aucune boîte de dialogue d'enregistrement, aucun jonglage copier-coller entre fenêtres.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic batch processing screenshots on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Sessions de recherche</h3>
<p>Vous avez capturé des captures d'écran de sites concurrents, de pages de tarification, ou de documentation ? Ouvrez-les en séquence et lancez les extractions. Votre historique des captures devient un journal de texte propre de tout ce que vous avez rassemblé — consultable et recopiable sans rouvrir aucune image.</p>

<h3>L'historique des captures comme archive de texte</h3>
<p>Chaque extraction est horodatée et stockée dans le menu déroulant de la barre de menus. Après avoir traité un lot de captures d'écran, faites défiler l'historique pour réviser, recopier, ou vérifier des captures individuelles. L'historique fonctionne comme une archive de texte légère de votre contenu extrait.</p>

<h3>Extraction sélective</h3>
<p>Contrairement à l'OCR par lots automatisé qui traite des images entières, vous contrôlez exactement quelle portion de chaque capture d'écran extraire. Besoin juste du prix d'un tableau de tarification ? Juste du code d'erreur d'une capture de journal ? Sélectionnez précisément ce qui compte et ignorez le reste.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Obtenez Optic sur le Mac App Store</a></p>
`,
  },

  "copy-address-from-image-mac": {
    slug: "copy-address-from-image-mac",
    title: "Comment copier une adresse depuis une image sur Mac",
    description:
      "Une étiquette de livraison, la photo d'une carte de visite, ou une lettre scannée contient une adresse dont vous avez besoin — mais elle est piégée dans une image sans aucun moyen de la sélectionner.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous devez copier une adresse depuis la photo d'une carte de visite, une enveloppe scannée, une capture d'écran d'une page de contact, ou une image de confirmation de livraison. L'adresse est clairement imprimée — rue, ville, région, code postal — mais comme elle se trouve dans une image, vous ne pouvez pas cliquer dessus, ne pouvez pas la sélectionner, ne pouvez pas la copier. Vous devez lire chaque ligne et la taper dans votre application de cartes, vos contacts, ou votre formulaire d'expédition. Un chiffre mal tapé dans un code postal et le colis part au mauvais endroit.</p>

<h2>Les adresses dans les images exigent une transcription manuelle parfaite</h2>
<p>Les adresses sont particulièrement risquées à retaper. Elles contiennent un mélange de chiffres, d'abréviations de noms de rues, de numéros d'unité, et de codes postaux — qui doivent tous être exacts. Transposer deux chiffres dans un code postal ou mal orthographier un numéro d'appartement signifie une livraison échouée ou du courrier mal dirigé. Et contrairement à la plupart des textes, vous ne pouvez pas facilement vérifier une adresse en la relisant à voix haute — vous devez comparer caractère par caractère.</p>
<p>macOS n'offre aucun flux de travail intégré pour extraire une adresse d'une image. Texte en direct peut surligner des adresses dans certaines images de Photos et proposer de les ouvrir dans Plans, mais cela ne fonctionne que dans des applications Apple spécifiques, avec des images propres, et cela extrait vers Plans — pas vers votre presse-papiers pour un collage ailleurs.</p>

<h2>Faites glisser sur l'adresse, collez-la n'importe où</h2>
<p>Ouvrez l'image contenant l'adresse dans n'importe quelle application — Aperçu, Mail, un navigateur, Slack — puis activez <a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> depuis la barre de menus et faites glisser une sélection autour de l'adresse. Le texte complet — chaque ligne, chaque chiffre, chaque abréviation — est copié dans votre presse-papiers. Collez-le dans Google Maps, un formulaire d'expédition, vos contacts, ou un e-mail.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic copying an address from an image on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Cartes de visite</h3>
<p>Les photos de cartes de visite prises lors d'événements de réseautage sont notoirement connues pour rester dans votre pellicule sans que leurs adresses ne finissent jamais dans vos contacts. Ouvrez la photo, sélectionnez l'adresse avec Optic, et collez-la directement dans la fiche de contact. Fonctionne aussi pour les numéros de téléphone et adresses e-mail visibles sur la carte.</p>

<h3>Expédition et retours</h3>
<p>Les étiquettes de retour d'expédition, les confirmations de livraison, et les photos d'emballages contiennent souvent des adresses que vous devez référencer ou réutiliser. Extrayez l'adresse de l'image et collez-la dans votre plateforme d'expédition sans retaper.</p>

<h3>Immobilier et itinéraires</h3>
<p>Les photos d'annonces, les prospectus immobiliers, et les documents scannés dans le processus immobilier regorgent d'adresses. Récupérez n'importe quelle adresse depuis ces images et collez-la dans votre application de cartes pour obtenir un itinéraire ou dans une feuille de calcul pour le suivi.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Obtenez Optic sur le Mac App Store</a></p>
`,
  },

  "ocr-code-snippets-mac": {
    slug: "ocr-code-snippets-mac",
    title: "OCR d'extraits de code sur Mac — Copier du code depuis des tutoriels et captures d'écran",
    description:
      "Du code apparaît sous forme d'image dans un tutoriel, une documentation, ou une capture d'écran partagée — et le retaper signifie introduire des bugs un caractère mal placé à la fois.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Un article de blog affiche ses exemples de code sous forme d'images stylisées. Un collègue colle une capture d'écran de son IDE dans un commentaire de pull request. La documentation d'un outil hérité n'existe que sous forme de captures d'écran de terminal sur un wiki. Les réponses Stack Overflow incluent du code intégré dans des images parce que le formateur a dénaturé l'original. Dans chaque cas, le code est visible et lisible, mais c'est une image — et copier du code depuis une image en le retapant est le meilleur moyen de passer trente minutes à déboguer un point-virgule que vous pensiez être un deux-points.</p>

<h2>Le code exige une extraction parfaitement fidèle</h2>
<p>Contrairement à la prose, le code n'a aucune tolérance pour l'approximation. Un trait d'union au lieu d'un tiret bas brise un import. Une seule parenthèse mal placée rend une fonction invalide. Une lettre minuscule là où une majuscule était nécessaire change entièrement une référence de variable. Quand vous retapez du code depuis une image, chaque caractère est un point de défaillance potentiel — et les bugs que vous introduisez sont invisibles car ils semblent corrects à première vue.</p>
<p>Le problème est amplifié avec de longues commandes, des extraits multi-lignes, ou une syntaxe peu familière. Une commande Docker run avec dix options, un motif regex, ou un pipeline shell avec des tubes et des redirections — c'est exactement le type de contenu qui est partagé sous forme d'images et qui est presque impossible à retaper avec précision.</p>

<h2>Extrayez du code depuis n'importe quelle image à l'écran</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> lit les caractères du code directement depuis votre écran. Ouvrez l'image, la page de tutoriel, ou la capture d'écran contenant le code, activez Optic depuis la barre de menus, et faites glisser une sélection sur l'extrait. Le texte reconnu — préservant l'indentation, les caractères spéciaux, et la structure des lignes — va directement dans votre presse-papiers.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic extracting code from a screenshot on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Commandes de terminal</h3>
<p>Les scripts d'installation, les commandes de build, et les pipelines de déploiement affichés sous forme de captures d'écran de terminal sont courants dans la documentation et les tutoriels. Sélectionnez le bloc de commande et collez-le dans votre terminal avec la certitude que les options, chemins et arguments sont exactement corrects.</p>

<h3>Captures d'écran d'IDE</h3>
<p>Quand un collègue partage une capture d'écran de son code — dans Slack, dans un commentaire GitHub, dans un e-mail — extrayez le code et collez-le dans votre propre éditeur. Testez-le, modifiez-le, ou révisez-le correctement au lieu de plisser les yeux devant une image.</p>

<h3>Extraction multi-extraits</h3>
<p>Les tutoriels montrent souvent plusieurs blocs de code à travers une page. Extrayez-les un par un. L'historique des captures d'Optic enregistre chaque extraction, ce qui vous permet de parcourir un tutoriel entier et de coller chaque extrait dans votre projet un par un depuis le menu déroulant de l'historique.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Obtenez Optic sur le Mac App Store</a></p>
`,
  },

  "text-to-speech-from-screen-mac": {
    slug: "text-to-speech-from-screen-mac",
    title: "Synthèse vocale depuis n'importe quel contenu d'écran sur Mac",
    description:
      "Vous voulez écouter du texte à l'écran — dans une image, un PDF scanné, une image vidéo — mais les outils de synthèse vocale de votre Mac ne fonctionnent que sur du texte que vous pouvez surligner.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>macOS inclut une fonction de contenu énoncé qui lit à voix haute le texte sélectionné. Surlignez un paragraphe dans Safari, faites un clic droit, et votre Mac le prononce. La fonction fonctionne bien — jusqu'à ce que vous ayez besoin d'entendre un texte qui ne peut pas être surligné. Une infographie avec des statistiques clés. Un document scanné sans couche de texte. Des sous-titres incrustés dans une image vidéo. Du texte affiché comme un graphisme dans une application web. Dans tous ces cas, le contenu énoncé de macOS n'a rien sur quoi travailler car il n'y a pas de texte sélectionnable à fournir au moteur.</p>

<h2>La plupart du texte à l'écran n'est pas sélectionnable</h2>
<p>La quantité de texte non sélectionnable sur un écran Mac moderne est plus grande que ce que la plupart des gens réalisent. Images avec superpositions de texte, applications web rendues en canvas, scans PDF, images vidéo, sessions de bureau à distance, boîtes de dialogue, interfaces d'applications avec des étiquettes rendues sur mesure — tout cela affiche du texte lisible que macOS traite comme faisant partie d'une image. Vous pouvez le voir, vous pouvez le lire des yeux, mais vous ne pouvez pas le sélectionner, donc vous ne pouvez pas l'envoyer au moteur de synthèse vocale.</p>
<p>Pour les utilisateurs qui dépendent de la sortie audio pour l'accessibilité, la relecture, le multitâche, ou l'apprentissage des langues, cet écart est un véritable obstacle. Le texte est à l'écran, le moteur de synthèse vocale est sur la même machine, mais il n'y a aucun pont entre les deux pour le contenu non sélectionnable.</p>

<h2>Sélectionnez n'importe quoi à l'écran, entendez-le prononcé</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> comble cet écart en combinant l'OCR au niveau de l'écran avec la synthèse vocale. Activez-le depuis la barre de menus, faites glisser une sélection sur n'importe quel texte visible — quelle que soit sa source — et Optic reconnaît les caractères. Vous pouvez ensuite faire lire le texte capturé à voix haute, transformant n'importe quel contenu d'écran visible en audio.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic text-to-speech from screen content on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Accessibilité</h3>
<p>Les lecteurs d'écran comme VoiceOver fonctionnent bien avec les éléments d'interface natifs et le texte standard, mais peinent avec le texte dans des images et un rendu non standard. Optic comble cet écart en rendant tout texte visible disponible à la fois comme texte dans le presse-papiers et comme audio prononcé. Un contenu auparavant inaccessible devient audible.</p>

<h3>Relecture</h3>
<p>Entendre un texte lu à voix haute permet de repérer des erreurs que la lecture visuelle manque. Après avoir extrait du texte d'un document scanné ou d'une image, utilisez la synthèse vocale pour vérifier le résultat de l'OCR. Un mot déformé ou un caractère mal reconnu devient immédiatement évident lorsqu'il est prononcé mais pourrait passer inaperçu à l'écran.</p>

<h3>Multitâche et compréhension</h3>
<p>Extrayez un long passage d'un document, d'un article, ou d'une page scannée et écoutez-le pendant que vous faites autre chose. Le traitement audio sollicite des canaux cognitifs différents de la lecture, ce qui peut favoriser la compréhension et la rétention — particulièrement pour du contenu dense ou peu familier. Chaque capture reste dans votre historique de la barre de menus, ce qui vous permet de revisiter et de réécouter n'importe quelle extraction précédente.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Obtenez Optic sur le Mac App Store</a></p>
`,
  },
};
