import type { ArticleSet } from "./index";

export const frArticles: ArticleSet = {
  "best-developer-tools-app-mac": {
    slug: "best-developer-tools-app-mac",
    title: "La meilleure application d'outils pour développeurs sur Mac",
    description:
      "Jongler entre onglets de navigateur, scripts en ligne de commande et dossiers de favoris pour des utilitaires de développement basiques fait perdre plus de temps que le code lui-même.",
    date: "2026-09-06",
    readTime: "5 min de lecture",
    content: `
<p>Vous devez décoder un JWT, formater un blob JSON, générer un UUID et encoder une chaîne en Base64 — tout cela dans les dix prochaines minutes. Alors vous ouvrez quatre onglets de navigateur, collez des données sensibles sur quatre sites différents, et espérez qu'aucun ne conserve un historique de votre presse-papiers. Puis vous recommencez le lendemain.</p>

<p>Les développeurs bricolent des favoris, des alias shell et des scripts ponctuels pour gérer ces micro-tâches. Cela fonctionne, techniquement. Mais chaque changement de contexte — quitter votre éditeur, retrouver le bon onglet, attendre le chargement d'une page — grignote la concentration dont vous avez besoin pour le problème que vous êtes réellement en train de résoudre.</p>

<h2>Ce que macOS offre par défaut</h2>
<p>macOS est livré avec Terminal, qui couvre une partie du terrain si vous vous souvenez des bons flags. <code>uuidgen</code> vous donne un UUID. <code>echo -n "text" | base64</code> gère l'encodage. <code>python3 -m json.tool</code> formate du JSON. Mais il n'y a aucune interface unifiée, aucune découvrabilité, et aucun moyen de gérer trente opérations différentes sans maintenir votre propre antisèche de commandes.</p>

<p>Xcode inclut quelques utilitaires enfouis dans des menus, mais lancer un IDE de 12 Go pour décoder une chaîne d'URL revient à prendre un camion pour aller à l'épicerie du coin.</p>

<h2>Une seule application pour 41 outils de développement</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> regroupe 41 outils de développement dans une seule application native macOS — accessible depuis votre barre de menus ou en fenêtre autonome. Les outils sont organisés en cinq catégories : Formateurs, Encodeurs, Générateurs, Convertisseurs et Outils texte. Une barre latérale permet de parcourir ou de rechercher, et l'application garde en mémoire vos outils récemment utilisés pour que vos opérations les plus fréquentes restent à un clic.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows developer tools app for macOS showing 41 tools in a NavigationSplitView sidebar" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Détection du presse-papiers</h3>
<p>Copiez un JWT dans votre presse-papiers et ouvrez Bellows — il suggère le décodeur JWT. Copiez une chaîne JSON et il fait remonter le formateur JSON. Cette petite fonctionnalité élimine complètement l'étape de choix d'un outil ; l'application lit le contenu de votre presse-papiers et vous oriente vers le bon utilitaire.</p>

<h3>Entièrement hors ligne</h3>
<p>Chaque outil s'exécute localement. Aucune requête réseau, aucune télémétrie, aucun collage de clés API sur un site appartenant à un inconnu. Pour les développeurs qui manipulent des jetons, des secrets ou des données internes, ce n'est pas un simple confort — c'est une exigence.</p>

<h3>Accès depuis la barre de menus</h3>
<p>Bellows réside dans votre barre de menus, donc il est toujours à un clic sans encombrer votre Dock. Cliquez sur l'icône, choisissez un outil, collez votre entrée, obtenez votre résultat. L'ensemble de l'interaction prend quelques secondes et vous ne quittez jamais votre espace de travail actuel.</p>

<h2>À qui s'adresse cette application</h2>
<p>Aux ingénieurs backend qui déboguent des réponses d'API. Aux développeurs frontend qui convertissent des couleurs entre hex et RGB. Aux ingénieurs DevOps qui décodent des secrets encodés en Base64. Aux développeurs mobiles qui génèrent des UUID pour des données de test. À toute personne qui s'est déjà dit « il doit bien y avoir un moyen plus rapide de faire ça » en tendant la main vers un onglet de navigateur.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenez Bellows sur le Mac App Store</a></p>
`,
  },

  "json-formatter-mac-app": {
    slug: "json-formatter-mac-app",
    title: "Formateur JSON pour Mac — application native, fonctionne hors ligne",
    description:
      "Coller du JSON non formaté dans un outil web pour le lire est un flux de travail que vous répétez des dizaines de fois par semaine sans jamais le remettre en question.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Une API renvoie une réponse JSON de 200 lignes compressée sur une seule ligne. Vous devez trouver un champ imbriqué. Alors vous la copiez, ouvrez un onglet de navigateur, naviguez vers l'un des dizaines de sites de formatage JSON, la collez, cliquez sur « Formater », et plissez les yeux devant le résultat. Si le JSON contient quoi que ce soit de sensible — jetons, données utilisateur, identifiants internes — vous venez de l'envoyer à un serveur tiers.</p>

<p>C'est l'une des micro-tâches les plus courantes du développement logiciel, et la plupart des développeurs la gèrent de la manière la moins efficace possible.</p>

<h2>L'approche par le Terminal</h2>
<p>macOS inclut <code>python3</code>, vous pouvez donc faire transiter du JSON par <code>python3 -m json.tool</code> dans Terminal. Cela fonctionne pour une entrée bien formée. Mais ça s'étouffe sur les virgules finales, donne des messages d'erreur cryptiques pour du JSON malformé, et le résultat reste prisonnier de votre fenêtre de terminal. Pas de coloration syntaxique, pas de nœuds réductibles, et aucun moyen de copier rapidement un chemin imbriqué.</p>

<p>Certains développeurs installent <code>jq</code> via Homebrew, plus puissant mais qui ajoute une dépendance supplémentaire et exige d'apprendre sa syntaxe de requête pour tout ce qui dépasse le formatage basique.</p>

<h2>Un formateur JSON natif installé sur votre Mac</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclut un formateur JSON parmi ses 41 outils de développement intégrés. Collez ou saisissez du JSON dans le panneau d'entrée et obtenez instantanément un résultat formaté et lisible. Aucune connexion réseau requise — tout s'exécute localement sur votre Mac.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows JSON formatter tool showing formatted output on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Détection du presse-papiers</h3>
<p>Copiez une chaîne JSON dans votre presse-papiers et ouvrez Bellows. L'application détecte le contenu JSON et suggère automatiquement le formateur. Pas besoin de naviguer dans des menus — l'outil dont vous avez besoin vous attend déjà.</p>

<h3>Partie d'une boîte à outils plus large</h3>
<p>Le formatage JSON se produit rarement de manière isolée. Vous devrez peut-être décoder une chaîne Base64 pour obtenir le JSON, extraire un payload JWT contenant du JSON, ou décoder une URL un paramètre de requête contenant un objet JSON. Avec 41 outils dans une seule application, vous pouvez enchaîner ces opérations sans changer d'utilitaire.</p>

<h3>Quand vous en avez le plus besoin</h3>
<p>Déboguer un payload de webhook à 23 h. Relire un fichier de configuration qu'un collègue a collé sur Slack. Inspecter un export Core Data. Vérifier la structure d'une réponse fictive avant d'écrire un test. Ce sont précisément les moments où tendre la main vers un onglet de navigateur pèse le plus lourd — et où une application native dans votre barre de menus fait toute la différence.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenez Bellows sur le Mac App Store</a></p>
`,
  },

  "base64-encoder-decoder-mac": {
    slug: "base64-encoder-decoder-mac",
    title: "Encodeur et décodeur Base64 pour Mac",
    description:
      "Décoder des chaînes Base64 via des commandes Terminal ou des outils web interrompt votre flux à chaque valeur encodée rencontrée dans des logs ou des configurations.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous parcourez des variables d'environnement et trouvez une valeur qui ressemble à du charabia — <code>eyJhbGciOiJIUzI1NiJ9</code>. Vous savez que c'est du Base64, mais vous ne pouvez pas la lire telle quelle. Alors vous la copiez, ouvrez Terminal, tapez <code>echo "..." | base64 --decode</code>, réalisez que vous avez oublié le flag <code>-D</code> sur macOS, réessayez, et voyez enfin le résultat décodé. Trente secondes perdues pour quelque chose qui devrait en prendre deux.</p>

<p>L'encodage Base64 apparaît partout : en-têtes d'authentification, pièces jointes d'e-mails, data URI dans le CSS, secrets Kubernetes, configurations de pipelines CI/CD. Si vous travaillez avec des API ou de l'infrastructure, vous décodez du Base64 plusieurs fois par jour.</p>

<h2>Pourquoi le Terminal ne suffit pas</h2>
<p>La commande <code>base64</code> intégrée à macOS fonctionne mais a ses bizarreries. Le flag de décodage est <code>-D</code> (majuscule) sur macOS contre <code>-d</code> sur Linux, ce qui piège quiconque travaille sur les deux systèmes. Les entrées multi-lignes exigent un guillemetage soigné. Et il n'y a aucun retour visuel — vous tapez une commande, récupérez une chaîne, et espérez ne pas avoir tronqué l'entrée par inadvertance.</p>

<p>Les outils web résolvent le problème d'ergonomie mais en créent un de sécurité. Les valeurs encodées en Base64 sont souvent des secrets : clés API, jetons, données de certificats. Les coller sur un site web annule tout l'intérêt de les avoir encodées au départ.</p>

<h2>Encoder et décoder localement en un clic</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclut un encodeur et décodeur Base64 au sein de sa boîte à outils de développement de 41 outils pour macOS. Collez votre chaîne encodée, voyez le résultat décodé immédiatement. Inversez le sens pour encoder du texte brut en Base64. Tout se passe sur votre machine — aucune donnée ne quitte votre Mac.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Base64 encoder and decoder tool on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Cas d'usage courants</h3>
<p>Décoder des secrets Kubernetes stockés en Base64 dans des manifestes YAML. Inspecter le payload d'un JWT (qui est encodé en Base64url). Convertir une image en data URI Base64 pour l'intégrer dans du HTML. Encoder des identifiants pour un en-tête d'authentification HTTP Basic. Chacun de ces cas ne demande qu'un simple copier-lire au lieu d'une commande Terminal ou d'un aller-retour vers un navigateur.</p>

<h3>Sensible au presse-papiers</h3>
<p>Copiez une chaîne Base64 et ouvrez Bellows depuis la barre de menus. L'application détecte le contenu encodé sur votre presse-papiers et suggère l'outil Base64, vous évitant l'étape de navigation manuelle.</p>

<h3>Aucune surcharge d'installation</h3>
<p>Contrairement aux formules Homebrew ou aux scripts Python qui nécessitent une maintenance, Bellows s'installe en une fois via le Mac App Store avec des mises à jour automatiques. Il fonctionne nativement sur Apple Silicon et Intel sans aucune dépendance.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenez Bellows sur le Mac App Store</a></p>
`,
  },

  "devtoys-alternative-mac": {
    slug: "devtoys-alternative-mac",
    title: "Une alternative à DevToys pour Mac",
    description:
      "DevToys a apporté l'idée de la boîte à outils de développement tout-en-un sur Windows, mais sa version macOS n'a jamais offert l'expérience native attendue par les utilisateurs Mac.",
    date: "2026-09-06",
    readTime: "5 min de lecture",
    content: `
<p>Si vous avez utilisé DevToys sur Windows, vous connaissez son attrait : une seule application qui gère le formatage JSON, le Base64, le décodage JWT, la génération de hachages et une douzaine d'autres utilitaires. Aucun onglet de navigateur, aucune commande CLI, aucun changement de contexte. Puis vous êtes passé à macOS et avez cherché la même chose.</p>

<p>La version macOS de DevToys existe, mais elle a toujours donné l'impression d'un portage plutôt que d'une application native. L'interface ne suit pas les conventions de macOS, les performances peuvent traîner sur Apple Silicon, et elle porte le poids d'un framework multiplateforme. Si vous avez choisi un Mac pour la qualité de ses logiciels, l'écart se remarque.</p>

<h2>Ce que les développeurs Mac attendent vraiment</h2>
<p>Les utilisateurs macOS attendent des applications qui semblent appartenir à la plateforme. Cela signifie une barre latérale native, des raccourcis clavier standards, une véritable prise en charge du mode sombre, et une intégration avec les fonctionnalités système comme la barre de menus. Ce ne sont pas de simples préférences esthétiques — elles affectent la vitesse à laquelle vous entrez, réalisez la tâche, et ressortez.</p>

<p>Une application d'outils de développement vit dans les interstices entre vos sessions de travail concentrées. Elle doit se lancer instantanément, accepter les entrées sans friction, et disparaître une fois le travail terminé. Chaque milliseconde de latence ou de confusion dans l'interface va à l'encontre de cet objectif.</p>

<h2>Une alternative native pour Mac avec 41 outils</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> est développée en Swift spécifiquement pour macOS. Elle utilise une barre latérale NavigationSplitView pour organiser 41 outils répartis en cinq catégories : Formateurs, Encodeurs, Générateurs, Convertisseurs et Outils texte. Elle fonctionne à la fois comme application de barre de menus et comme fenêtre autonome — à vous de choisir selon votre façon de travailler.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows as a native macOS DevToys alternative with NavigationSplitView sidebar" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Comment elle se compare à DevToys</h3>
<p>Les deux applications couvrent le même territoire de base — formatage JSON, encodage/décodage, hachage, génération d'UUID, conversion de couleurs. Là où Bellows se distingue, c'est dans l'intégration à la plateforme. La détection du presse-papiers suggère le bon outil en fonction de ce que vous venez de copier. L'accès depuis la barre de menus signifie que vous n'avez jamais besoin de faire Cmd-Tab pour retrouver l'application. Le suivi des outils récents fait remonter vos outils les plus utilisés en haut de liste. Ce sont de petites attentions, mais elles s'accumulent sur des centaines d'interactions quotidiennes.</p>

<h3>Entièrement hors ligne</h3>
<p>Comme DevToys, Bellows fonctionne entièrement hors ligne. Aucune donnée ne quitte votre machine, aucun compte requis, aucune télémétrie. Pour les développeurs qui manipulent des identifiants, des jetons ou des données propriétaires, c'est un prérequis de base — mais qu'il vaut la peine de confirmer explicitement.</p>

<h3>Performances natives</h3>
<p>Parce que Bellows est construite avec des frameworks natifs macOS plutôt qu'Electron ou une boîte à outils multiplateforme, elle se lance instantanément et utilise très peu de mémoire. Elle se comporte comme un utilitaire système, pas comme une application web déguisée en application native.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenez Bellows sur le Mac App Store</a></p>
`,
  },

  "jwt-decoder-mac": {
    slug: "jwt-decoder-mac",
    title: "Décodeur JWT pour Mac — collez et inspectez",
    description:
      "Coller des JWT sur jwt.io pour lire leurs claims fonctionne jusqu'à ce que vous réalisiez que vous venez d'envoyer un jeton valide à un site tiers.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous récupérez un JWT dans un en-tête de requête ou un fichier journal. C'est une longue chaîne séparée par des points qui ne signifie rien à l'œil humain. Vous devez vérifier la claim d'expiration, valider l'émetteur, ou voir quels scopes sont intégrés. Alors vous ouvrez jwt.io, collez le jeton, et lisez le payload décodé dans le panneau de droite.</p>

<p>Ce flux de travail pose un problème : vous venez d'envoyer un jeton d'authentification actif sur le réseau vers un site que vous ne contrôlez pas. Les payloads JWT contiennent souvent des identifiants utilisateur, des adresses e-mail, des rôles et des permissions. Le jeton lui-même peut encore être valide. Même si jwt.io est digne de confiance, la politique de sécurité de votre entreprise pourrait ne pas être du même avis.</p>

<h2>Ce que contient réellement un JWT</h2>
<p>Un JSON Web Token comporte trois parties séparées par des points : un en-tête (algorithme et type), un payload (les claims — expiration, émetteur, sujet, données personnalisées), et une signature. L'en-tête et le payload sont simplement du JSON encodé en Base64url. Vous n'avez besoin ni d'un serveur ni d'une bibliothèque spéciale pour les lire — vous avez besoin d'un décodeur Base64 et d'un formateur JSON. Mais faire cela manuellement dans Terminal à chaque fois est fastidieux.</p>

<h2>Décoder des JWT localement sur votre Mac</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclut un décodeur JWT dédié qui sépare le jeton en ses trois parties et affiche l'en-tête et le payload décodés sous forme de JSON formaté. Collez le jeton, voyez les claims. Aucune requête réseau, aucun serveur tiers, aucun risque de divulguer un jeton actif.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows JWT decoder showing decoded header and payload on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Sensible au presse-papiers</h3>
<p>Copiez un JWT depuis les outils de développement de votre navigateur, un fichier journal, ou un message Slack. Ouvrez Bellows et il détecte le format du jeton sur votre presse-papiers, suggérant immédiatement le décodeur JWT. Le payload décodé apparaît en une seule étape.</p>

<h3>Vérifier l'expiration en un coup d'œil</h3>
<p>La raison la plus courante de décoder un JWT est de vérifier s'il a expiré. La claim <code>exp</code> est un horodatage Unix — facile pour les machines, dénué de sens pour les humains. Voir le payload décodé permet de lire rapidement l'expiration aux côtés d'autres claims comme <code>iss</code>, <code>sub</code> et <code>aud</code> sans avoir à convertir les horodatages de tête.</p>

<h3>Partie d'une boîte à outils plus vaste</h3>
<p>Le décodage JWT mène souvent à des tâches connexes : décoder une valeur Base64 à l'intérieur d'une claim, hacher une chaîne pour la comparer à une empreinte, ou décoder une URL de redirection stockée dans le payload. Avec 41 outils disponibles dans la même application, ces tâches complémentaires ne nécessitent pas de changer d'utilitaire.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenez Bellows sur le Mac App Store</a></p>
`,
  },

  "url-encoder-decoder-mac": {
    slug: "url-encoder-decoder-mac",
    title: "Encodeur et décodeur d'URL pour Mac",
    description:
      "Lire des URL encodées en pourcentage remplies de %20 et %3D revient à lire une phrase où chaque espace a été remplacé par un chiffre.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous extrayez une URL des journaux serveur et elle ressemble à ceci : <code>https://example.com/search?q=hello%20world&redirect=https%3A%2F%2Fother.com%2Fpath</code>. Vous devez lire les paramètres de requête, mais l'encodage en pourcentage rend cela presque impossible d'un coup d'œil. Alors vous la collez dans un outil web, la décodez, lisez le résultat, puis réencodez une version modifiée pour tester quelque chose. Deux allers-retours vers un site web pour ce qui devrait être une opération triviale.</p>

<p>L'encodage d'URL fait partie de ces choses avec lesquelles les développeurs jonglent constamment sans y penser vraiment — jusqu'à ce qu'une redirection cassée, une chaîne de requête malformée, ou un paramètre doublement encodé transforme une tâche de cinq minutes en une session de débogage d'une heure.</p>

<h2>Quand l'encodage d'URL cause de vrais problèmes</h2>
<p>Le double encodage est le piège classique. Une URL est encodée une fois par votre application puis une seconde fois par une couche middleware, transformant <code>%20</code> en <code>%2520</code>. Pour diagnostiquer cela, vous devez décoder l'URL étape par étape et voir exactement où l'encodage supplémentaire s'est glissé. Faire cela dans Terminal avec <code>python3 -c "import urllib.parse; print(urllib.parse.unquote('...'))"</code> fonctionne mais est lent et sujet aux erreurs pour de longues URL.</p>

<p>Les erreurs d'encodage cassent aussi les flux OAuth, les URL de webhooks et les callbacks d'API où l'URI de redirection doit correspondre exactement. Pouvoir encoder et décoder rapidement vous permet de comparer ce que votre application envoie à ce que le serveur attend.</p>

<h2>Encoder et décoder des URL instantanément</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclut un encodeur et décodeur d'URL parmi ses 41 outils de développement. Collez une URL encodée pour voir la version lisible. Saisissez une URL en clair pour obtenir le résultat correctement encodé. Basculez entre encodage et décodage en un clic, et le résultat se met à jour en temps réel.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows URL encoder and decoder tool on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Déboguer des redirections</h3>
<p>Les flux OAuth et SSO transmettent les URI de redirection comme paramètres de requête encodés en URL. Quand une redirection échoue, la première étape consiste à décoder l'URL pour vérifier que la cible correspond à votre callback enregistré. Disposer d'un outil local vous permet de le faire sans quitter votre IDE ni coller des URL de callback potentiellement sensibles sur un site public.</p>

<h3>Travailler avec des chaînes de requête</h3>
<p>Les API qui acceptent des filtres complexes ou des requêtes de recherche via des paramètres d'URL exigent souvent un encodage soigné des caractères spéciaux comme <code>&</code>, <code>=</code>, <code>+</code> et les espaces. Un encodeur dédié garantit d'obtenir le bon résultat sans deviner quels caractères nécessitent un échappement dans votre contexte spécifique.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenez Bellows sur le Mac App Store</a></p>
`,
  },

  "hash-generator-mac-app": {
    slug: "hash-generator-mac-app",
    title: "Générateur de hachage pour Mac — MD5, SHA-256, et plus",
    description:
      "Vérifier l'intégrité d'un fichier ou générer des hachages de mots de passe via des commandes Terminal implique de se souvenir de flags différents pour chaque algorithme à chaque fois.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous téléchargez un binaire depuis GitHub et la page de release indique une somme de contrôle SHA-256. Pour la vérifier, vous ouvrez Terminal, tapez <code>shasum -a 256 ~/Downloads/file.tar.gz</code>, attendez le calcul, puis comparez manuellement deux chaînes hexadécimales de 64 caractères côte à côte. Un seul caractère incorrect et vous ne pouvez pas savoir si le fichier est corrompu ou si vous avez simplement mal lu le hachage.</p>

<p>Ou vous devez générer un hachage MD5 d'une chaîne — peut-être pour une clé de cache, une URL Gravatar, ou une ancienne API qui utilise encore des signatures MD5. La commande est <code>md5 -s "text"</code> sur macOS mais <code>md5sum</code> sur Linux. Des différences minimes, mais suffisantes pour vous ralentir quand vous alternez entre systèmes.</p>

<h2>Le hachage dans Terminal : ça marche, à peine</h2>
<p>macOS est livré avec <code>md5</code>, <code>shasum</code> et <code>openssl dgst</code>, couvrant la plupart des algorithmes. Mais chaque outil a sa propre syntaxe. <code>md5</code> utilise <code>-s</code> pour une entrée en chaîne. <code>shasum</code> utilise <code>-a</code> pour sélectionner l'algorithme. <code>openssl dgst</code> exige <code>-sha256</code> ou <code>-md5</code> comme flag. Il n'existe pas de commande unique permettant de choisir un algorithme et de hacher une chaîne sans consulter la page man.</p>

<p>Pour les développeurs qui ont occasionnellement besoin d'un hachage rapide, la charge cognitive de se souvenir de ces variations est disproportionnée par rapport à la simplicité de la tâche.</p>

<h2>Générer des hachages en un seul collage</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclut un générateur de hachage prenant en charge MD5, SHA-1, SHA-256, SHA-384, SHA-512 et d'autres algorithmes courants. Saisissez ou collez votre entrée, sélectionnez un algorithme, et le hachage apparaît instantanément. Aucun flag à retenir, aucune syntaxe à chercher.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows hash generator showing MD5 and SHA-256 output on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Vérifier des téléchargements</h3>
<p>Lorsqu'une page de release fournit une somme de contrôle, vous voulez la comparer au fichier téléchargé. Générer le hachage dans un outil visuel rend la comparaison plus facile que de comparer deux chaînes à l'œil dans une fenêtre de terminal — particulièrement pour les hachages SHA-256 de 64 caractères.</p>

<h3>Signatures d'API et clés de cache</h3>
<p>Certaines API exigent des signatures HMAC ou basées sur le hachage pour l'authentification des requêtes. D'autres utilisent des hachages MD5 ou SHA comme clés de cache ou identifiants de contenu. Pouvoir générer rapidement le hachage d'un corps de requête ou d'une chaîne vous permet de vérifier votre implémentation par rapport aux valeurs attendues lors du débogage.</p>

<h3>Hors ligne et privé</h3>
<p>Les entrées à hacher peuvent contenir des données sensibles — mots de passe, secrets d'API, identifiants internes. Bellows fonctionne entièrement sur votre Mac sans accès réseau, donc rien de ce que vous hachez ne quitte jamais votre machine.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenez Bellows sur le Mac App Store</a></p>
`,
  },

  "regex-tester-mac-app": {
    slug: "regex-tester-mac-app",
    title: "Testeur d'expressions régulières pour Mac — natif et hors ligne",
    description:
      "Écrire des expressions régulières sans retour visuel en direct, c'est comme éditer du code sans coloration syntaxique — techniquement possible, mais inutilement pénible.",
    date: "2026-09-06",
    readTime: "5 min de lecture",
    content: `
<p>Vous avez besoin d'une regex pour valider des adresses e-mail, extraire des horodatages de lignes de journal, ou analyser un champ CSV qui contient parfois des virgules entre guillemets. Vous écrivez un motif, le testez sur une chaîne d'exemple dans votre code, découvrez qu'il échoue sur un cas limite, l'ajustez, recompilez, retestez. Chaque itération prend 30 secondes de compile-exécute-vérifie, et la plupart des motifs regex nécessitent cinq ou six itérations avant de fonctionner de manière fiable.</p>

<p>L'alternative est regex101.com — un excellent outil qui affiche les correspondances en temps réel, explique chaque partie du motif, et permet de tester plusieurs entrées à la fois. Mais il fonctionne dans un navigateur, ce qui signifie que vous collez vos données de test (lignes de journal, enregistrements utilisateur, réponses d'API) sur un site public. Et il vous faut une connexion internet.</p>

<h2>Pourquoi le retour en direct compte pour les regex</h2>
<p>Les expressions régulières sont denses par nature. La différence entre <code>.*</code> et <code>.*?</code> (gourmand contre paresseux) peut changer si votre motif correspond à une ligne ou à un fichier entier. Les lookaheads, les classes de caractères et les groupes de capture interagissent de manières difficiles à raisonner mentalement. Voir les correspondances surlignées pendant que vous tapez le motif transforme la regex d'un exercice de devinettes en un processus visuel et itératif.</p>

<p>C'est pourquoi les testeurs basés sur navigateur sont si populaires — ils offrent la boucle de rétroaction qu'écrire une regex dans le code source ne fournit pas. Le problème est qu'ils nécessitent un navigateur, une connexion internet, et une confiance dans le fait que vos données de test restent privées.</p>

<h2>Tester des regex localement sur votre Mac</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclut un testeur de regex parmi ses 41 outils de développement. Tapez votre motif, collez votre chaîne de test, et voyez les correspondances surlignées en temps réel. Ajustez le motif et les résultats se mettent à jour instantanément — aucune étape de compilation, aucun rechargement de page, aucune requête réseau.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows regex tester with live match highlighting on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Des motifs courants simplifiés</h3>
<p>Extraire des dates de fichiers journaux (<code>\\d{4}-\\d{2}-\\d{2}</code>). Valider des numéros de téléphone avec indicatifs de pays optionnels. Faire correspondre des URL dans du texte libre. Analyser des données structurées comme du CSV ou du TSV où les champs peuvent être entre guillemets. Ces motifs sont simples en principe mais délicats dans les cas limites — et un testeur en direct vous permet de repérer ces cas avant qu'ils n'atteignent la production.</p>

<h3>Aucune donnée ne quitte votre Mac</h3>
<p>Si vos données de test incluent des journaux serveur, des informations utilisateur, ou une sortie système interne, tester des motifs regex hors ligne n'est pas seulement pratique — c'est le choix responsable. Bellows fonctionne entièrement sur votre machine sans accès réseau.</p>

<h3>Toujours disponible</h3>
<p>Bellows réside dans votre barre de menus, donc le testeur de regex est à un clic. Aucun onglet de navigateur à retrouver, aucune URL à mémoriser, aucun indicateur de chargement. Ouvrez-le, testez votre motif, copiez le résultat, fermez-le. L'ensemble de l'interaction prend quelques secondes.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenez Bellows sur le Mac App Store</a></p>
`,
  },

  "color-picker-hex-rgb-mac": {
    slug: "color-picker-hex-rgb-mac",
    title: "Sélecteur de couleurs avec Hex et RGB pour Mac",
    description:
      "Convertir à la main entre codes hex, valeurs RGB et notation HSL est source d'erreurs et inutile quand vous le faites plusieurs fois par jour.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Un designer vous envoie une couleur en hex : <code>#1A73E8</code>. Votre framework CSS veut du HSL. Votre base de code iOS a besoin de valeurs RGB entre 0 et 1. Votre projet Android utilise des entiers ARGB. Une couleur, quatre formats, et vous ouvrez un onglet de navigateur pour les convertir — encore une fois.</p>

<p>La conversion de couleurs est un calcul trivial (hex vers RGB n'est que de la base 16 vers du décimal), mais le faire de tête pour trois canaux tout en essayant de rester concentré sur la mise en page ou le style est une distraction dont vous n'avez pas besoin.</p>

<h2>Ce que propose macOS</h2>
<p>macOS possède un sélecteur de couleurs intégré, accessible depuis certaines applications via le panneau de couleurs système. Il affiche des curseurs RGB et un champ hex, mais il est conçu pour choisir des couleurs visuellement, pas pour les convertir entre formats de manière programmatique. Il n'y a aucun moyen simple de coller un code hex pour obtenir l'équivalent HSL, ou de saisir des entiers RGB pour copier le résultat en hex. Et il est enfoui à l'intérieur d'applications spécifiques plutôt que disponible dans tout le système.</p>

<h2>Convertir des couleurs instantanément entre formats</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclut un convertisseur de couleurs parmi ses 41 outils de développement. Saisissez une couleur dans n'importe quel format pris en charge — hex, RGB, HSL — et voyez les valeurs équivalentes dans tous les autres formats. Copiez la représentation dont vous avez besoin en un clic.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows color picker showing hex, RGB, and HSL conversion on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>De la conception au code</h3>
<p>Figma exporte les couleurs en hex. Tailwind CSS utilise des valeurs de couleur personnalisées. SwiftUI veut <code>Color(red:green:blue:)</code> avec des valeurs décimales. Android XML utilise <code>#AARRGGBB</code>. Avoir tous les formats visibles en même temps élimine le calcul mental et les allers-retours vers des sites de conversion.</p>

<h3>Vérifier le contraste et la lisibilité</h3>
<p>Quand vous pouvez voir la couleur rendue à côté de ses valeurs numériques, vous pouvez rapidement vérifier si une couleur de texte sera lisible sur un arrière-plan. C'est plus rapide que de basculer vers un vérificateur de contraste séparé pour chaque paire de couleurs de votre feuille de style.</p>

<h3>Accès depuis la barre de menus</h3>
<p>Besoin d'une conversion rapide en écrivant du CSS ? Cliquez sur l'icône Bellows dans votre barre de menus, sélectionnez l'outil couleur, collez le code hex, et copiez la valeur RGB. L'ensemble de l'interaction prend moins de cinq secondes et vous ne quittez jamais votre éditeur.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenez Bellows sur le Mac App Store</a></p>
`,
  },

  "uuid-generator-mac": {
    slug: "uuid-generator-mac",
    title: "Générateur d'UUID pour Mac — copie instantanée",
    description:
      "Générer des UUID via Terminal ou des extraits de code ajoute de la friction à une tâche qui devrait être complètement automatique.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous avez besoin d'un UUID. Peut-être écrivez-vous un test unitaire et avez besoin d'un identifiant unique pour un objet fictif. Peut-être alimentez-vous une base de données et avez besoin de clés primaires. Peut-être créez-vous une nouvelle entité dans un fichier de configuration et le schéma exige un UUID. Quelle que soit la raison, vous devez arrêter ce que vous faites, générer l'UUID quelque part, le copier, et le recoller dans votre code.</p>

<p>Cela arrive assez souvent pour que la plupart des développeurs aient une solution de réflexe : <code>uuidgen</code> dans Terminal, un favori de navigateur, ou un extrait dans leur éditeur. Chacune fonctionne. Aucune n'est vraiment sans friction.</p>

<h2>La méthode du Terminal</h2>
<p>macOS inclut <code>uuidgen</code>, qui affiche un UUID v4 sur la sortie standard. C'est rapide et fiable. Mais il produit des majuscules par défaut (certains systèmes attendent des minuscules), il génère un seul UUID à la fois, et l'utiliser implique de basculer vers Terminal, d'exécuter la commande, de sélectionner le résultat, de le copier, et de revenir en arrière. Pour un seul UUID, ça va. Pour dix UUID destinés à alimenter une base de données de test, ça devient fastidieux.</p>

<h2>Générer des UUID depuis votre barre de menus</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclut un générateur d'UUID parmi ses 41 outils de développement. Ouvrez-le depuis la barre de menus, générez un UUID, et copiez-le dans votre presse-papiers. Besoin d'un autre ? Générez-en un nouveau. L'outil est toujours à un clic, fonctionne hors ligne, et produit des UUID v4 standards prêts à coller dans du code, des configurations, ou des fichiers d'amorçage de base de données.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows UUID generator with instant copy on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Tests et données fictives</h3>
<p>Les tests unitaires et d'intégration ont souvent besoin d'identifiants uniques qui paraissent réalistes. Coder en dur le même UUID partout entraîne des bugs subtils quand les tests s'exécutent en parallèle ou quand un test dépend accidentellement d'un identifiant spécifique. Générer des UUID frais pour chaque fixture de test est une habitude simple qui évite toute une catégorie d'échecs de test intermittents.</p>

<h3>Amorçage de base de données</h3>
<p>Lorsque vous peuplez une base de données de développement avec des données d'exemple, vous avez besoin de clés primaires uniques qui n'entrent pas en collision avec les données de production ou les fichiers d'amorçage d'autres développeurs. Générer des UUID à la demande est plus propre qu'incrémenter des entiers ou utiliser des motifs prévisibles susceptibles de se chevaucher.</p>

<h3>Toujours disponible</h3>
<p>Parce que Bellows réside dans votre barre de menus, le générateur d'UUID est accessible sans ouvrir Terminal, changer d'application, ou naviguer vers un favori. Cliquez, générez, copiez, collez. L'interruption de votre flux de travail se mesure en secondes, pas en changements de contexte.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenez Bellows sur le Mac App Store</a></p>
`,
  },

  "all-in-one-dev-tools-mac-offline": {
    slug: "all-in-one-dev-tools-mac-offline",
    title: "Outils de développement tout-en-un pour Mac — 41 outils, entièrement hors ligne",
    description:
      "Onglets de navigateur pour l'encodage, fenêtres Terminal pour le hachage, favoris pour le formatage — les micro-tâches de développement sont éparpillées sur une douzaine d'endroits.",
    date: "2026-09-06",
    readTime: "5 min de lecture",
    content: `
<p>Comptez les outils que vous utilisez dans une session de débogage typique. Un formateur JSON pour lire une réponse d'API. Un décodeur Base64 pour un en-tête d'authentification. Un inspecteur JWT pour vérifier les claims d'un jeton. Un décodeur d'URL pour démêler une chaîne de redirections. Un générateur de hachage pour vérifier une somme de contrôle. Cela fait cinq onglets de navigateur ouverts, cinq sites web qui possèdent désormais vos données, et cinq changements de contexte qui vous ont éloigné du vrai problème.</p>

<p>Ce ne sont pas des tâches complexes. Chacune ne prend que dix secondes de travail réel. Mais la surcharge de trouver le bon outil, d'y basculer, de coller l'entrée, et de copier le résultat s'accumule en minutes par session et en heures par semaine. Pire, cela fragmente votre attention exactement au moment où vous devez garder un système complexe en tête.</p>

<h2>Le paysage actuel</h2>
<p>Les développeurs se sont constitué des boîtes à outils personnelles à partir d'un mélange de sources. Des favoris de navigateur vers des sites comme jwt.io, regex101.com, et jsonformatter.org. Des alias et fonctions shell dans <code>.zshrc</code>. Des extensions VS Code qui ajoutent du formatage ou de l'encodage. Des paquets Homebrew comme <code>jq</code> et <code>htop</code>. Chaque outil a été ajouté pour résoudre un problème précis, et aucun ne communique avec les autres.</p>

<p>Le résultat est une chaîne d'outils qui fonctionne techniquement mais manque de cohérence. Vous ne pouvez pas prédire où se trouvera le prochain utilitaire. Vous ne pouvez pas enchaîner des opérations sans copier manuellement le résultat d'un outil pour le coller dans un autre. Et vous ne pouvez garantir qu'aucun des outils web ne conserve vos données privées.</p>

<h2>41 outils dans une seule application native macOS</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> regroupe 41 outils de développement dans une seule application macOS organisée en cinq catégories :</p>

<ul>
<li><strong>Formateurs</strong> — JSON, XML, SQL, HTML, et plus. Collez une entrée en désordre, obtenez un résultat propre.</li>
<li><strong>Encodeurs</strong> — Base64, encodage d'URL, entités HTML, décodage JWT. Encodez et décodez dans les deux sens.</li>
<li><strong>Générateurs</strong> — UUID, hachages (MD5, SHA-256, SHA-512), Lorem Ipsum, mots de passe. Générez et copiez en une seule étape.</li>
<li><strong>Convertisseurs</strong> — Couleurs (hex/RGB/HSL), bases numériques, horodatages, unités. Convertissez entre formats sans calcul mental.</li>
<li><strong>Outils texte</strong> — Testeur de regex, vérificateur de différences, convertisseur de casse, trieur de lignes, compteur de caractères. Les utilitaires de manipulation de texte que vous utilisez quotidiennement.</li>
</ul>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows showing all 41 developer tools organized in categories on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Détection du presse-papiers</h3>
<p>Copiez quelque chose dans votre presse-papiers et ouvrez Bellows. L'application analyse le contenu du presse-papiers et suggère l'outil le plus pertinent. Copiez un JWT et elle propose le décodeur. Copiez du JSON et elle fait remonter le formateur. Copiez une chaîne Base64 et elle pointe vers l'encodeur. Cela élimine l'étape de choix d'un outil — l'application le fait pour vous.</p>

<h3>Mode barre de menus et mode fenêtre</h3>
<p>Bellows fonctionne comme application de barre de menus pour des opérations rapides et ponctuelles : cliquez sur l'icône, utilisez un outil, fermez-le. Pour des sessions plus longues — comme tester une série de motifs regex ou convertir plusieurs valeurs de couleur — basculez en mode fenêtre et gardez-le à côté de votre éditeur. Les deux modes utilisent la même interface avec une barre latérale NavigationSplitView pour parcourir les catégories.</p>

<h3>Entièrement hors ligne</h3>
<p>Chaque outil fonctionne localement sur votre Mac. Aucune requête réseau, aucun compte, aucune télémétrie. Ce n'est pas une position philosophique — c'est une exigence pratique pour les développeurs qui manipulent quotidiennement des jetons, des secrets, des identifiants et des données propriétaires. Vos entrées restent sur votre machine.</p>

<h3>Suivi des outils récents</h3>
<p>Les outils que vous utilisez le plus fréquemment remontent en haut de la barre latérale. Au fil du temps, Bellows s'adapte à votre flux de travail pour que les outils dont vous avez besoin restent toujours à portée de main, plutôt qu'enfouis dans une catégorie à déplier.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenez Bellows sur le Mac App Store</a></p>
`,
  },

  "json-validator-mac-app": {
    slug: "json-validator-mac-app",
    title: "Validateur JSON pour Mac — trouvez les erreurs instantanément",
    description:
      "Une virgule manquante ou un crochet égaré peut casser un fichier de configuration entier, et le trouver en parcourant ligne par ligne fait perdre un temps que vous n'avez pas.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Votre build échoue avec « Unexpected token in JSON at position 4,821 ». Formidable, merci. Vous voilà donc à faire défiler un fichier de configuration de quatre mille caractères en comptant les crochets de tête, en essayant de trouver lequel n'est pas apparié. C'est l'un des gouffres à temps les plus évitables du développement logiciel, et cela arrive constamment parce que le JSON n'a aucune tolérance pour les petites erreurs.</p>

<p>Une virgule traînante après le dernier élément d'un tableau. Un guillemet manquant autour d'une clé. Une accolade fermante en trop copiée d'ailleurs. N'importe laquelle de ces erreurs casse complètement l'analyse, et le message d'erreur pointe rarement vers le vrai problème — il indique où l'analyseur a abandonné, ce qui est souvent à plusieurs lignes de la véritable erreur.</p>

<h2>Pourquoi les numéros de position n'aident pas</h2>
<p>La plupart des analyseurs JSON signalent les erreurs sous forme de décalage de caractères, pas d'une ligne et d'une colonne vers lesquelles vous pouvez sauter dans votre éditeur. Convertir la position 4 821 en « ligne 112, quelque part près du troisième objet » nécessite soit de compter manuellement, soit d'écrire un script jetable. Aucune des deux n'est un bon usage de votre après-midi.</p>

<p>Certains éditeurs surlignent les erreurs de syntaxe JSON en ligne, ce qui aide pour les fichiers que vous êtes en train d'écrire activement. Mais pour du JSON reçu d'une API, d'un collègue, ou d'une ancienne configuration héritée, vous avez besoin d'un outil qui prend le texte brut et vous dit exactement ce qui ne va pas et où.</p>

<h2>Valider du JSON sans quitter votre Mac</h2>
<p>Un formateur JSON qui valide aussi élimine les suppositions. Collez le JSON, et s'il est malformé, vous obtenez une erreur claire pointant vers la ligne et le caractère précis plutôt qu'un simple décalage d'octets brut. S'il est valide, il s'affiche proprement avec l'indentation adéquate pour que vous puissiez parcourir visuellement la structure. <a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> gère les deux cas dans le même outil — vous n'avez pas besoin de savoir à l'avance si votre JSON est cassé.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows JSON formatter validating and highlighting a syntax error on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Repérer les erreurs avant qu'elles ne partent en production</h3>
<p>Les fichiers de configuration, les corps de requêtes API, et les données de fixtures vivent ou meurent selon la validité du JSON. Faire un rapide passage de validation avant de valider un changement de configuration ou d'envoyer une requête de test permet de repérer le genre de coquille qui se manifesterait sinon comme une erreur d'exécution confuse bien plus tard dans le pipeline.</p>

<h3>Travailler avec des entrées non fiables</h3>
<p>Quand un collègue vous colle un blob JSON sur Slack, ou que vous en récupérez un depuis une API tierce à laquelle vous ne faites pas entièrement confiance, le valider localement signifie que vous n'avez jamais à envoyer ces données vers un site externe juste pour vérifier qu'elles s'analysent correctement.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenez Bellows sur le Mac App Store</a></p>
`,
  },

  "html-entity-encoder-mac": {
    slug: "html-entity-encoder-mac",
    title: "Encodeur et décodeur d'entités HTML pour Mac",
    description:
      "Afficher en toute sécurité du texte soumis par un utilisateur, ou lire un code source de page rempli de &amp; et &lt;, reviennent tous deux au même problème fastidieux de conversion.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous déboguez pourquoi un morceau de texte sur une page web s'affiche comme <code>&amp;amp;</code> au lieu d'une simple esperluette. Ou vous écrivez du HTML à la main et devez échapper un signe inférieur à pour que le navigateur ne l'interprète pas comme le début d'une balise. Dans les deux cas, vous avez affaire à des entités HTML — ce petit ensemble de caractères nécessitant un encodage spécial pour s'afficher correctement ou pour éviter de casser le balisage.</p>

<p>Les plus courantes sont faciles à retenir : <code>&amp;</code> devient <code>&amp;amp;</code>, <code>&lt;</code> devient <code>&amp;lt;</code>, <code>&gt;</code> devient <code>&amp;gt;</code>. Mais dès que vous entrez dans les guillemets courbes, les tirets cadratins, les espaces insécables et les caractères accentués, les noms d'entités cessent d'être intuitifs et vous finissez par chercher un tableau de référence à chaque fois.</p>

<h2>Un angle de sécurité, pas seulement de formatage</h2>
<p>L'encodage des entités HTML n'est pas purement cosmétique. Ne pas encoder du contenu soumis par l'utilisateur avant de l'afficher sur une page web est un vecteur classique de cross-site scripting. Si votre application doit un jour afficher du texte brut — commentaires, noms d'utilisateur, saisies de formulaire — dans du HTML, comprendre exactement ce qui est encodé et comment fait partie de l'écriture de code sécurisé, pas seulement d'un résultat visuellement propre.</p>

<p>À l'inverse, le décodage est un besoin tout aussi courant : scraper une page web, analyser un flux RSS, ou lire un document exporté d'un CMS vous laisse souvent avec du texte encodé en entités qu'il faut reconvertir en caractères simples avant de pouvoir l'utiliser ailleurs.</p>

<h2>Encoder et décoder en une seule étape</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclut un encodeur et décodeur d'entités HTML parmi ses 41 outils de développement. Collez du texte brut pour obtenir des entités HTML correctement échappées, ou collez du balisage encodé pour voir le texte lisible. Les deux directions se font instantanément et entièrement hors ligne.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows HTML entity encoder and decoder tool on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Nettoyer du contenu scrapé</h3>
<p>Le texte extrait de flux RSS, d'articles de blog exportés, ou de HTML scrapé arrive fréquemment rempli de codes d'entités là où de la simple ponctuation devrait apparaître. Le décoder en masse avant de le stocker ou de l'afficher ailleurs évite une page pleine de <code>&amp;#8217;</code> égarés là où une apostrophe devrait figurer.</p>

<h3>Écrire du balisage à la main</h3>
<p>Quand vous éditez à la main un modèle HTML ou une newsletter par e-mail et devez inclure un chevron ou une esperluette littérale dans le texte visible, l'encoder correctement dès la première fois vous évite un bug d'affichage qui ne se manifeste qu'après avoir déjà envoyé l'e-mail.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenez Bellows sur le Mac App Store</a></p>
`,
  },

  "timestamp-converter-mac": {
    slug: "timestamp-converter-mac",
    title: "Convertisseur d'horodatage Unix pour Mac",
    description:
      "Une ligne de journal indique 1743984000 et vous devez savoir si c'était il y a trois heures ou trois semaines, sans faire le calcul à la main.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Les horodatages Unix sont parfaits pour les machines et inutiles pour les humains. Chaque agrégateur de journaux, enregistrement de base de données et réponse d'API semble stocker le temps sous forme d'entier brut comptant les secondes depuis le 1er janvier 1970, et chaque développeur a, à un moment donné, essayé d'évaluer à l'œil si <code>1725580800</code> est récent ou ancien.</p>

<p>Le recours habituel est une recherche Google rapide — « 1725580800 to date » — qui fonctionne mais ajoute un aller-retour vers le navigateur pour quelque chose qui devrait être une recherche de deux secondes. Ou vous écrivez une ligne dans une console de langage : <code>new Date(1725580800000)</code> dans une console JS de navigateur, en vous souvenant de multiplier par 1000 pour les millisecondes et en espérant ne pas avoir mélangé secondes et millisecondes au départ.</p>

<h2>Secondes contre millisecondes : le piège classique</h2>
<p>Le temps Unix est généralement en secondes, mais l'objet <code>Date</code> de JavaScript attend des millisecondes, et certaines API (particulièrement celles construites sur JavaScript) renvoient des horodatages en millisecondes par défaut. Mélanger les deux donne une date soit follement dans le futur, soit bloquée près de l'époque de 1970 — une erreur que chaque développeur a commise au moins une fois en déboguant un problème du type « pourquoi cette date semble fausse ».</p>

<p>Les fuseaux horaires ajoutent une autre couche. Un horodatage se convertit en un instant précis, mais l'afficher dans votre heure locale plutôt qu'en UTC ou dans le fuseau horaire du serveur peut faire paraître la même valeur comme trois heures complètement différentes, ce qui compte énormément quand vous essayez de corréler une erreur avec un déploiement.</p>

<h2>Convertir dans les deux sens instantanément</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclut un convertisseur d'horodatage qui transforme un horodatage Unix en date et heure lisibles, et reconvertit une date en horodatage — dans les deux sens, sans aucun calcul requis. Il gère l'ambiguïté secondes-versus-millisecondes pour que vous n'ayez pas à deviner.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Unix timestamp converter showing date and time output on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Déboguer journaux et bases de données</h3>
<p>Les agrégateurs de journaux, les lignes de base de données, et les payloads d'API stockent le temps sous forme de nombres bruts bien plus souvent que sous forme de chaînes lisibles. Convertir une poignée d'horodatages en retraçant un incident est une petite tâche qui se produit des dizaines de fois durant n'importe quelle session de débogage sérieuse.</p>

<h3>Planification et logique d'expiration</h3>
<p>L'expiration de cache, l'expiration des jetons, et les horodatages de tâches planifiées sont tous du temps Unix sous le capot. Vérifier rapidement à quoi correspond une valeur d'expiration donnée en heure réelle vous aide à confirmer que votre logique de TTL fait bien ce que vous pensez.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenez Bellows sur le Mac App Store</a></p>
`,
  },

  "markdown-preview-mac-app": {
    slug: "markdown-preview-mac-app",
    title: "Aperçu Markdown pour Mac — collez et visualisez",
    description:
      "Écrire un README ou une description de pull request en Markdown brut implique de deviner comment les titres, listes et blocs de code s'afficheront réellement.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous écrivez un README avec des puces imbriquées, quelques blocs de code, et un tableau comparant deux approches. Ça a l'air correct en texte brut dans votre éditeur. Puis vous le poussez sur GitHub et le tableau est mal aligné, l'un de vos blocs de code ne s'est pas fermé correctement, et une liste numérotée redémarre à 1 au milieu à cause d'une ligne vide égarée. Vous voilà à pousser de petits commits correctifs juste pour obtenir le bon formatage.</p>

<p>Le Markdown est assez simple pour être écrit de mémoire pour du formatage basique, mais les tableaux, les listes imbriquées et les blocs de code ont tous de petites bizarreries de syntaxe qui diffèrent légèrement selon les moteurs de rendu. Le GitHub Flavored Markdown n'est pas identique au CommonMark, qui n'est pas identique à ce qu'utilise votre générateur de site statique. L'écart entre « ça a l'air correct dans ma tête » et « ça s'affiche correctement sur la page » est exactement là qu'un aperçu en direct fait ses preuves.</p>

<h2>Pourquoi valider un commit juste pour vérifier est un mauvais flux de travail</h2>
<p>Pousser un commit juste pour voir comment un README s'affiche, puis un autre pour corriger un tableau cassé, puis un autre pour corriger la correction, encombre votre historique de commits avec du bruit de formatage qui n'a rien à voir avec le contenu réel. Cela signifie aussi que chaque cycle de prévisualisation prend autant de temps qu'un push et un rechargement de page — assez lent pour que vous cessiez de vous en préoccuper et espériez simplement que ça ait l'air correct.</p>

<h2>Voir le résultat rendu au fur et à mesure de la saisie</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclut un outil d'aperçu Markdown qui affiche le résultat formaté pendant que vous collez ou tapez du Markdown brut. Titres, listes, tableaux, liens et blocs de code s'affichent immédiatement, pour que vous puissiez repérer les erreurs de formatage avant qu'elles ne se retrouvent dans un commit.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Markdown preview tool rendering formatted text on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Écrire des README et des descriptions de PR</h3>
<p>Les descriptions de pull requests et les fichiers README sont souvent la première chose qu'un relecteur ou un nouveau contributeur lit. Vérifier que les titres, les listes de contrôle et les images liées s'affichent correctement avant de soumettre vous évite une série de commentaires du type « peux-tu corriger le formatage ».</p>

<h3>Rédiger de la documentation hors ligne</h3>
<p>Écrire de la documentation dans un avion ou dans une zone avec une connexion internet peu fiable ne signifie pas renoncer à voir votre formatage correctement rendu. Un outil d'aperçu local fonctionne de la même manière, connecté ou non.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenez Bellows sur le Mac App Store</a></p>
`,
  },

  "lorem-ipsum-generator-mac": {
    slug: "lorem-ipsum-generator-mac",
    title: "Générateur de Lorem Ipsum pour Mac — copiez n'importe quelle longueur",
    description:
      "Remplir une maquette de design ou une fixture de test avec du texte de remplissage ne devrait pas nécessiter un aller sur un site web à chaque fois.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous construisez un composant de carte et avez besoin de trois paragraphes de texte de remplissage pour voir comment il se comporte au retour à la ligne. Ou vous écrivez une fixture de test qui nécessite une longue chaîne pour vérifier le comportement de troncature. Dans les deux cas, vous avez besoin de texte de remplissage, et taper « asdf asdf asdf » dans un champ de texte ne vous donne pas des longueurs de mots ou une structure de phrase réalistes avec lesquelles travailler.</p>

<p>Le Lorem Ipsum est la réponse par défaut à ce problème depuis des décennies, précisément parce que son pseudo-texte dérivé du latin possède une distribution naturelle de longueurs de mots et de phrases qui imite la prose réelle sans être distrayant ni porteur de sens — l'œil du lecteur ne se laisse pas happer par une lecture réelle, ce qui est exactement le but recherché quand vous évaluez une mise en page.</p>

<h2>Au-delà de copier-coller le même paragraphe</h2>
<p>La plupart des développeurs conservent un seul paragraphe de Lorem Ipsum quelque part et le réutilisent partout, ce qui fonctionne jusqu'à ce que vous ayez besoin d'un bloc beaucoup plus long pour un test de défilement, ou d'un beaucoup plus court pour vérifier le comportement d'une ellipse de troncature sur une seule ligne. Générer du texte à la longueur exacte dont vous avez besoin — une phrase, un paragraphe, plusieurs paragraphes — bat le fait de réutiliser le même bloc fixe et de le tronquer ou le dupliquer manuellement.</p>

<h2>Générer exactement la longueur dont vous avez besoin</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclut un générateur de Lorem Ipsum qui produit du texte de remplissage à la longueur exigée par votre mise en page ou votre cas de test, prêt à copier en un clic. Aucun onglet de navigateur, aucun site générateur bourré de publicités, aucune attente de chargement de page juste pour récupérer trois phrases.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Lorem Ipsum generator producing placeholder text on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Prototyper des mises en page d'interface</h3>
<p>Avant que le vrai contenu n'existe, le texte de remplissage vous permet d'évaluer si un design gère avec élégance des longueurs de contenu variables — titres courts, titres longs, paragraphes qui reviennent à la ligne sur deux versus cinq lignes. Générer rapidement du texte à différentes longueurs accélère cette évaluation.</p>

<h3>Fixtures de test et données d'amorçage</h3>
<p>Les tests automatisés qui vérifient la troncature de texte, les limites de caractères, ou le comportement de débordement ont besoin de chaînes réalistes d'une longueur connue. Les générer à la demande est plus rapide que de coder en dur la même chaîne de remplissage dans des dizaines de fichiers de test.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenez Bellows sur le Mac App Store</a></p>
`,
  },

  "xml-formatter-mac": {
    slug: "xml-formatter-mac",
    title: "Formateur et validateur XML pour Mac",
    description:
      "Les réponses SOAP et les anciens fichiers de configuration arrivent encore en XML non indenté, et le lire sans formatage est plus difficile que nécessaire.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Le JSON accapare toute l'attention, mais de nombreux systèmes parlent encore XML — les API SOAP, les fichiers de mise en page Android, le <code>pom.xml</code> de Maven, les flux RSS, et un nombre non négligeable d'intégrations d'entreprise qui n'ont pas changé de format de données depuis quinze ans. Quand l'un de ces documents arrive minifié sur une seule ligne, lire la structure imbriquée devient réellement difficile sans indentation adéquate.</p>

<p>Contrairement au JSON, le XML doit aussi gérer les espaces de noms, les attributs et les balises auto-fermantes, ce qui rend le formatage manuel encore plus sujet aux erreurs. Se tromper en comptant les niveaux d'imbrication dans une enveloppe SOAP profondément structurée est facile à faire et difficile à remarquer avant qu'un problème n'éclate en aval.</p>

<h2>Pourquoi cela compte encore en 2026</h2>
<p>Malgré la domination du JSON dans la conception de nouvelles API, le XML n'a pas disparu des logiciels d'entreprise, des systèmes gouvernementaux et du développement Android. Si vous intégrez la passerelle de paiement d'une banque, un ancien système d'assurance, ou un service web SOAP plus ancien, vous devrez tôt ou tard lire et déboguer du XML brut — et plisser les yeux devant une réponse non formatée n'est pas une manière productive de passer ce temps.</p>

<h2>Formater et valider en une seule passe</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclut un formateur XML qui indente correctement les éléments imbriqués et signale le balisage malformé — une balise non fermée, un guillemet d'attribut mal assorti, une déclaration d'espace de noms cassée. Collez du XML minifié et obtenez immédiatement un document lisible et correctement indenté.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows XML formatter showing indented nested elements on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Déboguer SOAP et les API historiques</h3>
<p>Les enveloppes SOAP entourent le payload réel de plusieurs couches de code répétitif, ce qui rend fastidieux le fait de trouver le champ qui vous intéresse vraiment quand tout est sur une seule ligne. Formater la réponse en premier transforme un mur de texte en un arbre navigable.</p>

<h3>Relire des fichiers de configuration et de build</h3>
<p>Le <code>AndroidManifest.xml</code> d'Android, le <code>pom.xml</code> de Maven, et d'innombrables formats de configuration CI sont du XML sous le capot. Quand l'un d'eux est généré ou modifié de manière programmatique et se retrouve non indenté, une passe de formatage rapide rend à la fois le diff et le contenu plus faciles à relire.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenez Bellows sur le Mac App Store</a></p>
`,
  },

  "cron-expression-helper-mac": {
    slug: "cron-expression-helper-mac",
    title: "Assistant d'expressions cron pour Mac",
    description:
      "Écrire une expression de planification à la main et espérer qu'elle signifie ce que vous croyez, c'est ainsi que des tâches finissent par s'exécuter à 3 h du matin au lieu de 15 h.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>La syntaxe cron est constituée de cinq champs de nombres et de symboles qui doivent d'une manière ou d'une autre exprimer « chaque jour de semaine à 9 h sauf les jours fériés » ou « toutes les 15 minutes entre 8 h et 18 h ». Les champs sont minute, heure, jour du mois, mois et jour de la semaine, dans un ordre que personne ne retient correctement du premier coup, et les astérisques, virgules, tirets et barres obliques signifient tous des choses différentes selon leur position.</p>

<p><code>0 9 * * 1-5</code> paraît raisonnable, mais est-ce 9 h du matin ou 9 h du soir, et est-ce que <code>1-5</code> signifie du lundi au vendredi ou tout autre chose selon que l'implémentation cron compte dimanche comme 0 ou comme 7 ? Se tromper dans un pipeline de déploiement, une tâche de sauvegarde, ou un rapport planifié se traduit soit par des échecs silencieux, soit par une tâche qui se déclenche à une heure gênante — parfois pendant des semaines avant que quiconque ne le remarque.</p>

<h2>Chaque implémentation cron a ses propres bizarreries</h2>
<p>Le cron Unix standard, les CronJobs Kubernetes, AWS EventBridge, et diverses plateformes CI utilisent tous à peu près la même syntaxe à cinq champs mais diffèrent sur de petits points — la prise en charge des secondes, la manière dont la numérotation des jours de la semaine fonctionne, la validité de raccourcis comme <code>@daily</code>. Écrire une planification qui fonctionne correctement dès le premier déploiement exige de savoir précisément quelle variante de cron vous ciblez.</p>

<h2>Traduire les expressions en langage clair</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclut un assistant d'expressions cron qui prend une chaîne de planification et explique ce qu'elle signifie réellement en langage clair, pour que vous puissiez vérifier votre intention avant de déployer une tâche planifiée où que ce soit.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows cron expression helper explaining a schedule string on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Vérifier avant de déployer</h3>
<p>Une tâche planifiée qui se déclenche au mauvais moment est souvent un échec silencieux — rien ne plante, elle s'exécute simplement quand vous ne le vouliez pas, parfois en se superposant à une fenêtre de maintenance ou en martelant une base de données pendant les heures de pointe. Vérifier la signification en langage clair d'une chaîne cron avant de fusionner une configuration de déploiement permet d'éviter que cela ne devienne une alerte à 2 h du matin.</p>

<h3>Lire la planification de quelqu'un d'autre</h3>
<p>Hériter d'une base de code avec une douzaine de tâches cron existantes implique de comprendre ce que fait chacune avant de pouvoir en modifier une en toute sécurité en toute sécurité. Traduire rapidement chaque expression est plus rapide que d'analyser mentalement cinq champs cryptiques une tâche à la fois.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenez Bellows sur le Mac App Store</a></p>
`,
  },

  "yaml-to-json-mac": {
    slug: "yaml-to-json-mac",
    title: "Convertisseur YAML vers JSON pour Mac",
    description:
      "Les manifestes Kubernetes, les pipelines CI et les fichiers de configuration parlent tous YAML, mais les outils dont vous avez réellement besoin pour inspecter des données attendent généralement du JSON.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Le YAML est partout dans l'infrastructure — manifestes Kubernetes, workflows GitHub Actions, fichiers Docker Compose, playbooks Ansible. Il est lisible et compact, jusqu'à ce que l'indentation devienne ambiguë, qu'une tabulation se glisse là où un espace était attendu, ou que vous deviez transmettre les données à un outil qui ne comprend que le JSON.</p>

<p>Convertir entre les deux à la main est mécanique mais fastidieux : l'imbrication basée sur l'indentation du YAML devient les accolades et crochets du JSON, les chaînes YAML sans guillemets ont besoin de guillemets, et la syntaxe plus permissive du YAML (booléens sans guillemets, chaînes multi-lignes, ancres et références) ne se traduit pas toujours proprement dans les règles plus strictes du JSON.</p>

<h2>Pourquoi vous avez besoin des deux formats</h2>
<p>Vous pourriez écrire un manifeste Kubernetes en YAML parce qu'il est plus facile à lire et à versionner, mais avoir besoin de l'équivalent JSON pour l'injecter dans un script, un appel d'API, ou un pipeline <code>jq</code> qui attend une entrée JSON. Ou vous déboguez pourquoi la configuration YAML d'un pipeline CI ne s'analyse pas comme prévu, et voir la structure JSON sous-jacente rend l'imbrication réelle sans ambiguïté d'une manière que le YAML, sensible aux espaces, ne l'est parfois pas.</p>

<h2>Convertir entre formats instantanément</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclut un convertisseur YAML vers JSON parmi ses 41 outils de développement. Collez du YAML et obtenez immédiatement la structure JSON équivalente, avec imbrication et types préservés — aucun reformatage manuel, aucune supposition sur les niveaux d'indentation.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows YAML to JSON converter tool on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Déboguer Kubernetes et les configurations CI</h3>
<p>Quand un manifeste se comporte de manière inattendue, voir la structure JSON sous-jacente élimine toute ambiguïté sur la manière dont le YAML s'est réellement imbriqué — utile quand une indentation mal placée a silencieusement changé quelle clé appartient à quel objet parent.</p>

<h3>Injecter la configuration dans des scripts</h3>
<p>De nombreux outils de scripting et d'automatisation fonctionnent plus naturellement avec du JSON qu'avec du YAML. Convertir un fichier de configuration une fois et transmettre le résultat JSON en aval est souvent plus simple que d'apprendre à chaque script de votre pipeline à analyser directement le YAML.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenez Bellows sur le Mac App Store</a></p>
`,
  },

  "text-diff-tool-mac": {
    slug: "text-diff-tool-mac",
    title: "Outil de comparaison de texte pour Mac — comparez deux textes côte à côte",
    description:
      "Deux versions d'un fichier de configuration, d'un brouillon d'e-mail, ou d'un paragraphe de contenu semblent presque identiques, et trouver le mot unique qui a changé est étonnamment difficile à l'œil.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Git gère magnifiquement les diffs pour du code déjà suivi dans un dépôt. Mais une grande partie de la comparaison de texte se produit entièrement en dehors du contrôle de version : deux versions d'une clause juridique qu'un avocat a renvoyée, une réponse d'API avant et après un changement backend, un paragraphe de contenu marketing qu'un collègue a « juste légèrement retouché ». Lire les deux versions côte à côte et essayer de repérer la différence à l'œil est lent et peu fiable, surtout pour de longs blocs de texte.</p>

<p>L'œil humain est mauvais dans ce type de comparaison parce qu'il ne cherche pas les différences — il lit pour le sens, et deux paragraphes presque identiques se liront tous deux comme « corrects » à moins que vous ne vous arrêtiez spécifiquement pour les vérifier caractère par caractère l'un contre l'autre.</p>

<h2>Quand git diff n'est pas disponible</h2>
<p>Tout ce qui mérite d'être comparé ne vit pas dans un dépôt git. Des valeurs de configuration collées depuis deux environnements différents, deux brouillons d'un e-mail, ou l'avant-après d'un rechercher-remplacer dont vous n'êtes pas sûr d'avoir bien effectué, ont tous besoin d'outils de comparaison qui fonctionnent sur du texte collé arbitraire, pas seulement sur des fichiers suivis.</p>

<h2>Comparer deux blocs de texte instantanément</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclut un outil de comparaison de texte qui surligne exactement ce qui a changé entre deux blocs de texte collés — ajouts, suppressions et modifications signalés visuellement pour que vous n'ayez pas à lire chaque caractère vous-même.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows text diff tool comparing two blocks of text on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Comparer une configuration entre environnements</h3>
<p>Quand la préproduction et la production se comportent différemment, comparer les valeurs de configuration réelles côte à côte révèle souvent le coupable plus rapidement que de parcourir les journaux de déploiement — une seule variable d'environnement avec une coquille ou une valeur obsolète ressort immédiatement une fois surlignée.</p>

<h3>Relire du contenu édité</h3>
<p>Quand quelqu'un vous renvoie une version « légèrement modifiée » d'un document, voir précisément ce qui a changé — plutôt que de relire l'ensemble en espérant remarquer les différences — transforme une relecture laborieuse en une vérification visuelle rapide.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenez Bellows sur le Mac App Store</a></p>
`,
  },

  "number-base-converter-mac": {
    slug: "number-base-converter-mac",
    title: "Convertisseur de bases numériques pour Mac — Hex, binaire, octal, décimal",
    description:
      "Lire une adresse mémoire, une valeur de couleur, ou un code de permission de fichier implique de traduire constamment entre le décimal et quelle que soit la base exigée par le contexte.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Une adresse mémoire apparaît sous la forme <code>0x7ffee23a1c40</code>. Une permission de fichier est <code>0755</code>. Un masque de bits dans la documentation d'un pilote est écrit en binaire. Une valeur de canal de couleur doit être convertie du décimal vers un hex à deux chiffres. Aucune de ces conversions n'est difficile individuellement, mais les faire répétitivement de tête — surtout du binaire vers le hex, qui exige de regrouper les bits en nibbles — est plus lent et plus sujet aux erreurs que ça ne devrait l'être pour quelque chose d'aussi mécanique.</p>

<p>La programmation bas niveau, le développement embarqué, le réseau, et même le développement web quotidien (les couleurs hex, encore) exigent tous de naviguer régulièrement entre bases numériques, au point que garder une table de correspondance mentale pour les chiffres hexadécimaux n'aide que jusqu'à un certain point, une fois les nombres plus grands qu'un ou deux octets.</p>

<h2>Là où ça coince</h2>
<p>L'octal est le piège sournois. Une permission de fichier comme <code>644</code> ressemble à un nombre décimal mais est en réalité en base 8, et la traiter comme du décimal quand on la raisonne mène à une confusion sur le motif binaire réel. Le binaire devient ingérable au-delà de 16 bits — une valeur 32 bits en binaire fait trente-deux caractères de long, difficile à lire et facile à mal compter quand vous essayez d'isoler des bits spécifiques pour une vérification de flag.</p>

<h2>Convertir entre les quatre bases à la fois</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclut un convertisseur de bases numériques qui affiche une valeur en décimal, hexadécimal, octal et binaire simultanément. Saisissez un nombre dans n'importe quelle base et voyez les quatre représentations se mettre à jour ensemble — aucune conversion séparée pour chaque paire.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows number base converter showing hex, binary, octal, and decimal on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Travail bas niveau et embarqué</h3>
<p>Lire des valeurs de registres, des masques de bits, et des adresses mémoire dans un firmware embarqué ou en programmation système signifie naviguer avec fluidité entre hex et binaire. Voir les deux en même temps, aux côtés du décimal, élimine une couche de traduction manuelle d'une tâche déjà riche en détails.</p>

<h3>Permissions de fichiers et réseau</h3>
<p>Les permissions de fichiers Unix, les masques de sous-réseau, et divers drapeaux binaires dans les protocoles réseau sont couramment exprimés en octal ou en binaire mais raisonnés en décimal. Une conversion rapide confirme exactement ce qu'une chaîne de permission ou un octet de drapeau représente avant de le modifier.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenez Bellows sur le Mac App Store</a></p>
`,
  },

  "csv-to-json-mac": {
    slug: "csv-to-json-mac",
    title: "Convertisseur CSV vers JSON pour Mac",
    description:
      "Un export de tableur doit devenir des données structurées pour un appel d'API ou une fixture de test, et écrire un script ponctuel à chaque fois est excessif.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Quelqu'un de l'équipe commerciale exporte un tableur en CSV et vous demande de « simplement le charger dans le système ». Le système attend du JSON. Alors vous écrivez rapidement un script Python ou Node avec une bibliothèque d'analyse CSV, mappez les colonnes aux champs, gérez la ligne d'en-tête, et espérez qu'aucune valeur ne contienne une virgule qui casserait votre logique naïve de découpage sur les virgules (c'est généralement le cas, cachée à l'intérieur d'un champ entre guillemets).</p>

<p>C'est une tâche que les développeurs résolvent encore et encore, écrivant chaque fois un code jetable légèrement différent, parce que le CSV apparaît constamment comme format d'export depuis des tableurs, des bases de données et des outils analytiques, tandis que la plupart des outils et API modernes attendent du JSON.</p>

<h2>La simplicité trompeuse du CSV</h2>
<p>Le CSV a l'air trivial — découper sur les virgules, découper sur les sauts de ligne, terminé. Puis vous tombez sur un champ contenant une virgule, entouré de guillemets selon la spécification, et votre analyseur naïf casse. Ou un champ contient un saut de ligne intégré entre guillemets, qu'une simple lecture ligne par ligne ne peut pas gérer correctement. Bien analyser le CSV exige en réalité de respecter les règles de guillemetage, ce qui explique pourquoi un convertisseur dédié bat le fait de l'écrire à partir de zéro à chaque fois.</p>

<h2>Convertir du CSV en JSON structuré</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclut un convertisseur CSV vers JSON qui gère correctement les champs entre guillemets et les lignes d'en-tête, transformant un export de tableur en un tableau d'objets JSON prêt à coller dans une fixture de test, un corps de requête, ou un script.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows CSV to JSON converter tool on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Charger des données de tableur dans des API</h3>
<p>Quand un import de données ponctuel ne justifie pas d'écrire et de maintenir un script complet, convertir directement l'export CSV en JSON et le coller dans un outil de test d'API ou un fichier d'amorçage de base de données fait le travail en une fraction du temps.</p>

<h3>Construire des fixtures de test à partir de données réelles</h3>
<p>Exporter un échantillon de données proches de la production sous forme de CSV depuis un tableur et le convertir en JSON est un moyen rapide de générer des fixtures de test réalistes sans écrire d'objets JSON à la main champ par champ.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenez Bellows sur le Mac App Store</a></p>
`,
  },

  "mac-developer-tools-no-internet": {
    slug: "mac-developer-tools-no-internet",
    title: "Outils de développement pour Mac qui fonctionnent sans internet",
    description:
      "Travailler dans un avion, dans une salle serveur au sous-sol, ou simplement sur un Wi-Fi de café capricieux ne devrait pas vous priver des utilitaires que vous utilisez constamment.",
    date: "2026-09-06",
    readTime: "5 min de lecture",
    content: `
<p>Essayez de formater un blob JSON dans un avion sans Wi-Fi et vous remarquerez vite combien de vos utilitaires de développement quotidiens sont en réalité des sites web déguisés. jwt.io, regex101, les formateurs JSON, les outils Base64 — tous excellents, tous complètement inutiles dès que votre connexion tombe. Vous finissez par vous en passer ou par tâtonner avec des commandes Terminal à moitié oubliées.</p>

<p>Ce n'est pas seulement un inconvénient pour les déplacements. Les salles serveur, les installations sécurisées et les environnements isolés du réseau n'ont souvent aucun accès internet par conception. Même un réseau Wi-Fi de bureau capricieux peut transformer une tâche de deux secondes en une attente frustrante d'une page qui ne se charge pas.</p>

<h2>La dépendance cachée dans votre boîte à outils</h2>
<p>La plupart des développeurs ne réalisent pas à quel point leurs outils quotidiens dépendent d'une connexion active jusqu'à ce qu'elle disparaisse. Un rapide audit mental est révélateur : combien des utilitaires que vous utilisez plusieurs fois par jour sont en réalité des onglets de navigateur pointant vers le serveur de quelqu'un d'autre ? Pour la plupart des développeurs, la réponse dépasse leurs attentes.</p>

<p>Au-delà du problème de disponibilité, il y a aussi un problème de données. Envoyer des jetons, des identifiants, ou des données internes à un site tiers pour les décoder ou les formater implique de faire confiance aux pratiques de sécurité et de confidentialité de ce site — une confiance qui n'est peut-être pas justifiée, et que de nombreuses politiques de sécurité d'entreprise interdisent explicitement.</p>

<h2>Une boîte à outils qui n'a jamais besoin de connexion</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> regroupe 41 outils de développement dans une application macOS native qui fonctionne entièrement hors ligne — sans aucune exception, sans « nécessite internet pour cette fonctionnalité ». Formatage JSON, décodage JWT, hachage, test de regex, encodage et décodage, et bien plus fonctionnent tous de manière identique, que vous soyez sur de la fibre gigabit ou à dix mille mètres d'altitude sans aucun signal.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows offline developer tools app running on macOS with no network connection" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Travailler dans des environnements sécurisés ou isolés du réseau</h3>
<p>Une partie du développement se déroule dans des environnements où l'accès internet est restreint ou totalement absent par politique — défense, infrastructure financière, certains travaux gouvernementaux. Les outils qui exigent une connexion active y sont tout simplement inutilisables, aussi bons soient-ils.</p>

<h3>Voyager sans perdre en productivité</h3>
<p>Les vols, les trains dans des tunnels, et les lieux de travail à distance avec une connectivité peu fiable ne devraient pas dicter quelles tâches de développement vous pouvez ou ne pouvez pas faire. Une boîte à outils conçue hors ligne d'abord retire la connectivité de la liste des choses qui peuvent vous ralentir.</p>

<h3>La confidentialité comme effet secondaire du hors ligne</h3>
<p>Une application qui ne fait jamais de requête réseau ne peut pas divulguer vos données à un serveur, intentionnellement ou non. Pour les développeurs manipulant des jetons, des secrets, ou des informations propriétaires, le hors ligne n'est pas qu'une question de disponibilité — c'est une garantie de confidentialité significative.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenez Bellows sur le Mac App Store</a></p>
`,
  },

  "clipboard-formatter-mac": {
    slug: "clipboard-formatter-mac",
    title: "Formateur de presse-papiers pour Mac — détection automatique et suggestion d'outils",
    description:
      "Décider quel formateur, décodeur, ou convertisseur utiliser est en soi une petite décision que vous prenez des dizaines de fois par jour sans remarquer la surcharge qu'elle représente.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous copiez une chaîne. Avant de pouvoir en faire quoi que ce soit, vous devez déterminer ce que c'est et quel outil la gère. Est-ce un JWT ? Du Base64 ? Une couleur hex ? Un simple UUID ? Pour un développeur expérimenté, cette reconnaissance se produit presque instantanément, mais c'est tout de même un petit pas cognitif entre copier quelque chose et agir réellement dessus — et c'est un pas qui se répète à chaque fois.</p>

<p>Multipliez cette étape de reconnaissance et de navigation par les dizaines de petites tâches utilitaires d'une journée typique, et cela s'accumule en une surcharge mentale surprenante, dépensée simplement à vous orienter vers le bon outil, avant même d'avoir commencé la tâche réelle.</p>

<h2>La reconnaissance de motifs est un problème résoluble</h2>
<p>Les JWT ont une structure distinctive en trois parties séparées par des points, avec un en-tête Base64url reconnaissable. Les couleurs hex commencent par un dièse et comptent exactement six ou huit caractères hexadécimaux. Les UUID suivent un format strict à huit-quatre-quatre-quatre-douze séparé par des traits d'union. Le JSON commence par une accolade ou un crochet. Ces motifs sont suffisamment précis pour qu'un logiciel les reconnaisse aussi vite qu'un développeur expérimenté, sans exiger que le développeur fasse l'identification manuellement à chaque fois.</p>

<h2>Laissez le presse-papiers suggérer l'outil</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> lit votre presse-papiers quand vous l'ouvrez et suggère automatiquement l'outil correspondant. Copiez un JWT et le décodeur est déjà surligné. Copiez du JSON et le formateur est à un clic. Copiez une couleur hex et le convertisseur de couleurs est prêt. L'étape de reconnaissance se produit instantanément, avant même que vous n'ouvriez la barre latérale.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows clipboard detection suggesting the matching developer tool on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Moins de clics, moins de fatigue décisionnelle</h3>
<p>Retirer l'étape « quel outil me faut-il » d'une tâche répétitive semble mineur pris isolément, mais sur des dizaines d'interactions quotidiennes cela retire une quantité significative de friction — une friction qui, sinon, vous pousse simplement à laisser les données non formatées parce que chercher le bon outil semblait demander trop d'effort.</p>

<h3>Utile pour les outils dont vous oubliez l'existence</h3>
<p>Avec 41 outils disponibles, il est facile d'oublier qu'un convertisseur ou générateur spécifique existe tout court. Les suggestions basées sur le presse-papiers font remonter l'outil pertinent même quand vous n'auriez pas pensé à le chercher, ce qui est souvent plus précieux que le temps gagné sur les outils que vous utilisez déjà quotidiennement.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenez Bellows sur le Mac App Store</a></p>
`,
  },

  "string-escape-unescape-mac": {
    slug: "string-escape-unescape-mac",
    title: "Échappement et déséchappement de chaînes pour Mac — JSON, HTML, URL",
    description:
      "Intégrer un format de chaîne dans un autre implique d'échapper correctement guillemets, barres obliques et caractères spéciaux, ou de voir votre analyseur s'étouffer.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous devez intégrer une chaîne JSON à l'intérieur d'une autre chaîne JSON — peut-être un message de journal qui contient lui-même un payload JSON. Ou vous écrivez une commande shell qui inclut une chaîne avec des guillemets dedans. Ou vous construisez une URL qui doit transporter une autre URL en tant que paramètre de requête. Chacune de ces situations exige un échappement : convertir des caractères qui seraient sinon interprétés comme de la syntaxe en une forme traitée comme des données littérales.</p>

<p>Les contextes différents échappent différemment. Le JSON échappe les guillemets avec une barre oblique inverse et représente les caractères spéciaux comme les sauts de ligne sous la forme <code>\\n</code>. L'échappement shell dépend du style de guillemetage utilisé. L'échappement d'URL encode en pourcentage les caractères réservés de manière entièrement différente des deux autres. Mélanger tout cela — appliquer un échappement JSON là où un échappement URL était nécessaire — produit un résultat qui a presque l'air correct et échoue de manière confuse.</p>

<h2>Le problème du double échappement</h2>
<p>L'un des bugs les plus courants dans ce domaine est le double échappement : une chaîne est échappée une fois par votre code puis à nouveau par une bibliothèque ou un framework qui suppose qu'elle est encore brute, transformant une seule barre oblique inverse en deux et corrompant silencieusement les données. Diagnostiquer cela nécessite de déséchapper étape par étape pour voir exactement où la couche supplémentaire a été introduite — fastidieux à faire à la main, surtout dans une longue chaîne.</p>

<h2>Échapper et déséchapper plusieurs formats</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclut des outils d'échappement de chaînes couvrant les formats JSON, HTML et URL parmi ses 41 outils de développement. Collez une chaîne brute pour la voir correctement échappée pour un contexte donné, ou collez une chaîne échappée pour voir la valeur brute d'origine.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows string escape and unescape tool on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Intégrer des chaînes à l'intérieur de chaînes</h3>
<p>Construire un payload JSON qui contient lui-même une chaîne JSON comme valeur de champ, ou composer un message de journal qui doit inclure en toute sécurité une saisie utilisateur arbitraire, exigent tous deux un échappement correct pour éviter de corrompre la structure externe.</p>

<h3>Diagnostiquer des données doublement échappées</h3>
<p>Quand une chaîne semble avoir été échappée plus de fois qu'elle ne le devrait, la déséchapper couche par couche révèle exactement où l'encodage supplémentaire a été introduit, ce qui est généralement le moyen le plus rapide de retrouver le code responsable.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenez Bellows sur le Mac App Store</a></p>
`,
  },

  "mac-developer-utility-menu-bar": {
    slug: "mac-developer-utility-menu-bar",
    title: "Utilitaire de développement Mac dans la barre de menus — accès rapide à 41 outils",
    description:
      "Le Dock est fait pour les applications que vous regardez. La barre de menus est faite pour les outils que vous utilisez et refermez en quelques secondes — et la plupart des utilitaires de développement appartiennent à cette seconde catégorie.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Réfléchissez à la manière dont vous utilisez réellement un formateur JSON ou un générateur d'UUID. Vous ne l'ouvrez pas pour admirer l'interface et vous installer pour une session. Vous l'ouvrez, faites une petite chose, et le refermez — l'ensemble de l'interaction ne durant que quelques secondes. Ce mode d'usage convient mal à une icône de Dock, qui implique une application vers laquelle on bascule et dans laquelle on passe du temps, et convient bien mieux à la barre de menus, conçue précisément pour ce genre d'interaction rapide et éphémère.</p>

<p>Les applications basées sur le Dock se disputent aussi l'espace avec tout ce que vous avez d'autre ouvert — Cmd-Tab fait défiler entre elles, Mission Control regroupe leurs fenêtres, et retrouver la bonne parmi une douzaine d'applications ouvertes demande un moment de balayage visuel. Une icône de barre de menus se trouve dans un emplacement fixe et prévisible qui ne se retrouve jamais enseveli.</p>

<h2>Pourquoi l'emplacement compte plus qu'il n'y paraît</h2>
<p>La valeur d'un utilitaire de développement est inversement proportionnelle à la friction qui vous sépare de son utilisation. Un outil qui prend dix secondes à ouvrir coûte plus que ces dix secondes — il coûte le contexte mental que vous perdez en sortant de votre tâche actuelle pour aller le chercher. Le placement dans la barre de menus minimise ce coût en gardant l'outil visuellement présent et à un clic en permanence, sans occuper d'espace à l'écran ni de place dans le Dock quand vous ne l'utilisez pas.</p>

<h2>41 outils, une seule icône de barre de menus</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> réside dans votre barre de menus et vous donne accès à 41 outils de développement — formateurs, encodeurs, générateurs, convertisseurs et outils texte — sans jamais nécessiter d'icône de Dock ni de fenêtre dédiée. Cliquez sur l'icône, choisissez un outil dans la barre latérale, faites ce dont vous avez besoin, et elle disparaît à nouveau de votre chemin.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows menu bar icon providing quick access to 41 developer tools on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Empreinte nulle dans le Dock</h3>
<p>Pour les développeurs qui gardent un Dock épuré avec seulement les applications utilisées pour des sessions prolongées — un éditeur, un navigateur, un terminal — un utilitaire de barre de menus s'inscrit naturellement dans cette philosophie. Il est là quand il faut et invisible autrement.</p>

<h3>Fenêtre autonome quand vous en avez besoin</h3>
<p>Certaines tâches — tester plusieurs motifs regex à la suite, ou convertir un lot de couleurs — bénéficient d'une fenêtre persistante plutôt que d'un menu déroulant de barre de menus. Bellows prend en charge les deux modes, pour que les recherches rapides restent dans la barre de menus tandis que les sessions plus longues obtiennent une fenêtre en bonne et due forme à côté de votre éditeur.</p>

<h3>Les outils récents restent en haut de liste</h3>
<p>Avec 41 outils disponibles, ceux que vous utilisez le plus ne devraient pas exiger la même quantité de recherche que ceux que vous utilisez rarement. Les outils récemment utilisés remontent automatiquement, pour que vos habitudes quotidiennes façonnent l'interface au fil du temps plutôt que l'inverse.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenez Bellows sur le Mac App Store</a></p>
`,
  },
};
