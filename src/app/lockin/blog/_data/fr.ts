import type { ArticleSet } from "./index";

export const frArticles: ArticleSet = {
  "block-distracting-websites-mac": {
    slug: "block-distracting-websites-mac",
    title: "Comment bloquer les sites web qui vous distraient sur Mac",
    description:
      "Vous ouvrez votre navigateur pour vérifier une seule chose et 40 minutes plus tard vous êtes plongé dans un fil Reddit. macOS ne propose pas de véritable bloqueur de sites web — voici comment y remédier.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous vous installez pour travailler, ouvrez Safari ou Chrome, et avant même d'atteindre l'onglet dont vous aviez besoin, vous avez déjà tapé « r-e-d » dans la barre d'adresse par automatisme. Quarante minutes plus tard, vous refaites surface au milieu d'un débat pour savoir si le hot-dog est un sandwich. Le travail, lui, attend toujours.</p>

<p>Ce n'est pas un problème de volonté. C'est un problème de conception. Les navigateurs sont conçus pour vous amener au contenu le plus vite possible — y compris le contenu que vous essayez d'éviter.</p>

<h2>Pourquoi macOS ne résout pas ce problème</h2>
<p>Apple a ajouté des limites de sites web dans Temps d'écran avec macOS Catalina, mais elles ne fonctionnent que dans Safari. Si vous utilisez aussi Chrome, Firefox, Arc ou tout autre navigateur, ces limites ne servent à rien. Vous pouvez également ignorer les alertes de Temps d'écran d'un simple clic — c'est un ralentisseur, pas un mur.</p>

<p>Modifier le fichier <code>/etc/hosts</code> fonctionne en théorie, mais cela nécessite des commandes Terminal, un accès sudo, et un nettoyage manuel une fois terminé. Ce n'est pas pratique au quotidien et cela ne fonctionne pas sur une minuterie.</p>

<h2>Bloquez les sites web sur tout le système avec Lock In!</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> utilise une extension système macOS pour bloquer les sites web distrayants dans tous les navigateurs de votre Mac — Safari, Chrome, Firefox, Arc, Brave, tous. Vous choisissez les sites, réglez une minuterie, et ils disparaissent jusqu'à la fin de la session.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! website blocker for Mac showing blocked sites during a focus session" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Listes de blocage prédéfinies</h3>
<p>Lock In! est fourni avec des listes de blocage organisées pour les Réseaux sociaux, le Divertissement, les Actualités et les Achats en ligne. Un clic bloque des dizaines de domaines chronophages. Vous pouvez aussi ajouter des URL personnalisées pour tout ce qui correspond spécifiquement à vos propres habitudes de navigation.</p>

<h3>Sessions minutées</h3>
<p>Définissez une session de concentration de 25 minutes, une heure, ou toute autre durée personnalisée. Les sites bloqués le restent jusqu'à la fin de la minuterie. Pas d'extension de navigateur à désactiver, pas de fichier hosts à annuler — cela fonctionne au niveau du système.</p>

<h3>Mode strict</h3>
<p>Si vous êtes du genre à annuler un blocage deux minutes après l'avoir démarré, activez le Mode strict. Une fois la session lancée, impossible de la terminer prématurément. Les sites restent bloqués. Point final.</p>

<p>Bloquer les sites web distrayants ne devrait pas nécessiter un diplôme d'informatique. Cela devrait prendre deux clics depuis votre barre de menus. <a href="https://apps.apple.com/app/lockin/id6802325423">Téléchargez Lock In! sur le Mac App Store</a></p>
`,
  },

  "website-blocker-focus-mac": {
    slug: "website-blocker-focus-mac",
    title: "Le meilleur bloqueur de sites web pour se concentrer sur Mac",
    description:
      "Les extensions de navigateur sont faciles à désactiver, Temps d'écran ne couvre que Safari, et les astuces de fichier hosts nécessitent le Terminal. Un bloqueur au niveau système qui fonctionne dans tous les navigateurs, c'est la pièce manquante.",
    date: "2026-09-06",
    readTime: "5 min de lecture",
    content: `
<p>Il existe des dizaines de bloqueurs de sites web pour Mac. La plupart sont des extensions de navigateur — et c'est bien là le problème. Les extensions peuvent être désactivées en trois secondes. Quand votre cerveau réclame une distraction, trois secondes, ce n'est rien.</p>

<p>Un bloqueur de sites web orienté concentration doit fonctionner en dessous du niveau du navigateur. Il doit bloquer les sites quel que soit le navigateur que vous ouvrez, et rendre le déblocage suffisamment contraignant pour que vous ne preniez pas la peine de le faire.</p>

<h2>Pourquoi la plupart des bloqueurs ne suffisent pas</h2>
<p>Les extensions de navigateur ne contrôlent qu'un seul navigateur. Si vous bloquez Twitter dans Chrome, vous pouvez ouvrir Safari et faire défiler librement. Les limites de sites web de Temps d'écran ne s'appliquent qu'à Safari et peuvent être ignorées d'un clic. Les modifications du fichier hosts nécessitent un accès au Terminal et laissent des traces si vous oubliez de les nettoyer.</p>

<p>Un bloqueur qui repose sur votre coopération ne bloque pas vraiment quoi que ce soit. Il suggère. Et les suggestions ne fonctionnent pas quand la dopamine s'en mêle.</p>

<h2>Lock In! — Un blocage au niveau système depuis la barre de menus</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> fonctionne comme une extension système macOS. Cela signifie qu'il intercepte les requêtes au niveau réseau, avant même qu'un navigateur ne les voie. Les domaines bloqués ne se chargent pas dans Safari, Chrome, Firefox, Arc — toutes les applications qui accèdent au réseau.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! menu bar focus blocker for Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Sessions de concentration en un clic</h3>
<p>Lock In! réside dans votre barre de menus. Cliquez dessus, choisissez une durée, et démarrez une session. Votre liste de blocage s'active instantanément. Pas d'onglets à fermer, pas de pages de réglages à parcourir — juste cliquer et se concentrer.</p>

<h3>Le blocage d'applications aussi</h3>
<p>Les sites web ne sont pas le seul problème. Lock In! peut aussi bloquer les applications distrayantes. Quand vous essayez d'ouvrir une application bloquée pendant une session, un panneau plein écran vous intercepte et vous renvoie au travail. Il couvre les deux vecteurs d'attaque — navigateur et application.</p>

<h3>Statistiques quotidiennes</h3>
<p>Un graphique en barres sur 7 jours affiche votre historique de concentration. Voir une série de sessions de travail approfondi est motivant. Voir un trou vous donne envie de le combler. Les données vous tiennent honnête sans être moralisatrices.</p>

<h3>Raccourcis clavier globaux</h3>
<p>Démarrez ou vérifiez une session sans toucher la souris. Attribuez un raccourci clavier global et déclenchez le mode concentration depuis n'importe où sur votre Mac.</p>

<p>Le meilleur bloqueur de sites web est celui que vous ne pouvez pas tricher. <a href="https://apps.apple.com/app/lockin/id6802325423">Téléchargez Lock In! sur le Mac App Store</a></p>
`,
  },

  "block-tiktok-mac": {
    slug: "block-tiktok-mac",
    title: "Comment bloquer TikTok sur Mac pendant le travail",
    description:
      "L'algorithme de TikTok est conçu pour vous faire défiler indéfiniment. Quand il n'est qu'à un onglet de votre travail, la seule volonté ne suffit pas.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>TikTok est le piège à attention le plus efficace jamais créé. Son algorithme apprend ce qui vous garde devant l'écran et vous en sert un flux infini. Ouvrir TikTok « juste une seconde » pendant le travail revient à manger une chips d'un paquet conçu pour vous le faire terminer.</p>

<p>Sur votre téléphone, vous pouvez supprimer l'application ou utiliser Temps d'écran sur iOS. Mais sur votre Mac, tiktok.com n'est jamais qu'à un onglet de distance. Et macOS ne vous offre pas de moyen simple de le bloquer.</p>

<h2>Pourquoi TikTok sur Mac est particulièrement dangereux</h2>
<p>Sur votre téléphone, TikTok donne au moins l'impression d'une activité séparée — vous saisissez physiquement un autre appareil. Sur votre Mac, c'est le même navigateur que celui dans lequel vous travaillez. Vous rédigez un rapport dans un onglet, et TikTok n'est qu'à un Cmd+T. Il n'y a pas de changement de contexte, pas de friction, rien pour signaler à votre cerveau que vous avez quitté le mode travail.</p>

<p>La version web de TikTok est désormais complète. La page Pour toi fonctionne à l'identique. L'algorithme est tout aussi accrocheur. Et contrairement à votre téléphone, votre Mac dispose d'un écran plus grand et d'un clavier — vous pouvez sombrer encore plus profondément dans les sections de commentaires et les recherches.</p>

<h2>Bloquez TikTok sur tout le système avec Lock In!</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> bloque tiktok.com au niveau système grâce à une extension réseau macOS. Peu importe le navigateur utilisé — Safari, Chrome, Firefox, Arc — TikTok ne se chargera pas pendant votre session de concentration.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! blocking TikTok on Mac during a focus session" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Ajoutez TikTok à votre liste de blocage</h3>
<p>Lock In! inclut une liste de blocage prédéfinie Réseaux sociaux qui couvre TikTok, Instagram, Twitter, Facebook, et plus encore. Activez ce préréglage ou ajoutez tiktok.com comme entrée personnalisée — dans les deux cas, un clic suffit à le bloquer pour toute la durée de votre session.</p>

<h3>Le Mode strict pour zéro exception</h3>
<p>Savoir que vous pouvez annuler un blocage et ouvrir TikTok anéantit tout l'intérêt de la démarche. Activez le Mode strict et le blocage devient permanent jusqu'à la fin de la minuterie. Pas de contournement, pas de bouton d'urgence, pas de « juste cinq minutes ». Vous définissez la durée de la session, et TikTok reste bloqué pendant toute sa durée.</p>

<h3>Associez-le au blocage d'applications</h3>
<p>Si vous avez une application de bureau TikTok ou utilisez un wrapper comme Unite, Lock In! peut aussi les bloquer. Sa fonction de blocage d'applications affiche un panneau d'interruption plein écran lorsque vous essayez de lancer une application bloquée, fermant ainsi tous les chemins d'accès à TikTok.</p>

<p>L'algorithme ne dort jamais, votre bloqueur ne devrait donc pas avoir de failles. <a href="https://apps.apple.com/app/lockin/id6802325423">Téléchargez Lock In! sur le Mac App Store</a></p>
`,
  },

  "cold-turkey-alternative-mac": {
    slug: "cold-turkey-alternative-mac",
    title: "Une alternative à Cold Turkey pour Mac",
    description:
      "Cold Turkey est puissant mais conçu d'abord pour Windows, et la version Mac a longtemps accusé du retard. Une alternative native macOS utilisant des extensions système peut combler ce manque.",
    date: "2026-09-06",
    readTime: "5 min de lecture",
    content: `
<p>Cold Turkey est l'un des bloqueurs de sites web les plus connus, et pour de bonnes raisons — son blocage strict est réellement difficile à contourner. Mais Cold Turkey a d'abord été conçu pour Windows. La version Mac a historiquement accusé du retard dans les mises à jour, et ne se sent pas toujours vraiment chez elle sur macOS. Si vous cherchez quelque chose qui fonctionne nativement sur Mac tout en offrant le même blocage sans compromis, il existe désormais une meilleure option.</p>

<h2>Où Cold Turkey pèche sur Mac</h2>
<p>La version Mac de Cold Turkey utilise un mécanisme de blocage différent de son équivalent Windows. macOS est un système d'exploitation plus verrouillé, et les outils qui s'appuient sur des contournements plutôt que sur les API officielles d'Apple peuvent casser lors des mises à jour système. L'application manque également de l'intégration visuelle attendue par les utilisateurs Mac — elle ne ressemble pas à une application macOS native, parce qu'elle n'en est pas une.</p>

<p>De plus, l'interface de Cold Turkey conserve la complexité héritée de ses origines Windows. Des fonctionnalités comme les blocages programmés, les listes blanches et les minuteries de pause sont puissantes mais peuvent sembler excessives si tout ce que vous voulez, c'est bloquer Twitter pendant deux heures pour travailler.</p>

<h2>Lock In! — Un blocage Mac natif, sans contournement</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> est conçu exclusivement pour macOS et distribué via le Mac App Store. Il utilise le framework officiel Network Extension d'Apple pour bloquer les sites web au niveau système — pas de bidouilles de navigateur, pas d'astuces de proxy, pas de modification du fichier hosts. Cela signifie qu'il fonctionne de manière fiable à travers les mises à jour de macOS et ne nécessite pas de désactiver System Integrity Protection ni d'accorder des autorisations inhabituelles.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! as a Cold Turkey alternative for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Un Mode strict qui rivalise avec le verrouillage de Cold Turkey</h3>
<p>La fonctionnalité phare de Cold Turkey est son mode strict qui vous empêche de débloquer. Lock In! offre le même dispositif d'engagement — activez le Mode strict et votre session ne peut pas être annulée prématurément. Pas d'astuce de désinstallation, pas de raccourci pour quitter. Vous choisissez votre durée, et vous vivez avec.</p>

<h3>Blocage de sites web et d'applications réunis</h3>
<p>Cold Turkey sépare le blocage de sites web et d'applications en deux produits différents (Cold Turkey Blocker et Cold Turkey Writer). Lock In! gère les deux dans une seule application. Les applications bloquées déclenchent un panneau d'interruption plein écran, et les sites web bloqués ne se chargent dans aucun navigateur.</p>

<h3>Simplicité de la barre de menus</h3>
<p>Lock In! réside dans votre barre de menus. Pas de fenêtre principale à gérer, pas d'interface de planification complexe. Cliquez sur l'icône, choisissez une durée, démarrez une session. Les listes de blocage prédéfinies pour Réseaux sociaux, Divertissement, Actualités et Achats en ligne vous permettent de passer de zéro à concentré en deux clics.</p>

<p>Le même blocage inviolable, dans une expérience Mac native. <a href="https://apps.apple.com/app/lockin/id6802325423">Téléchargez Lock In! sur le Mac App Store</a></p>
`,
  },

  "block-apps-during-focus-mac": {
    slug: "block-apps-during-focus-mac",
    title: "Comment bloquer des applications pendant les sessions de concentration sur Mac",
    description:
      "Bloquer les sites web n'est que la moitié de la bataille. Slack, Discord, iMessage et les jeux vivent hors du navigateur — et le mode Focus de macOS ne vous empêche pas vraiment de les ouvrir.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous avez bloqué Reddit et Twitter dans votre navigateur. Vous vous sentez discipliné. Puis vous cliquez sur Discord « pour vérifier un message », et 30 minutes s'évaporent dans un canal de mèmes. Ou vous ouvrez Slack pour répondre à un fil de discussion et finissez par lire tous les canaux auxquels vous appartenez.</p>

<p>Le blocage de sites web ne résout que la moitié du problème de distraction. L'autre moitié vit dans votre dossier Applications.</p>

<h2>Pourquoi le mode Focus de macOS ne suffit pas</h2>
<p>Le mode Focus intégré d'Apple filtre les notifications — il peut faire taire les alertes de certaines applications. Mais il ne vous empêche pas d'ouvrir ces applications. Vous pouvez toujours lancer Discord, Slack, Messages ou Steam pendant une session « Ne pas déranger ». Le mode Focus cache les alertes ; il ne bloque pas la source.</p>

<p>Cela signifie que le mode Focus n'aide qu'avec les interruptions, pas avec les distractions auto-infligées. Si c'est vous qui ouvrez l'application, le mode Focus ne fait rien.</p>

<h2>Lock In! bloque applications et sites web ensemble</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> va au-delà du blocage de sites web. Lorsque vous ajoutez une application à votre liste de blocage et démarrez une session, toute tentative d'ouverture de cette application déclenche un panneau d'interruption plein écran. Il recouvre votre écran, vous indique que l'application est bloquée, et vous renvoie à ce que vous faisiez.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! blocking distracting apps during a focus session on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Une interruption plein écran, pas un simple rappel</h3>
<p>Certains bloqueurs affichent une petite notification lorsque vous ouvrez une application bloquée. C'est facile à ignorer. Le panneau d'interruption de Lock In! occupe tout l'écran. Il est impossible à ignorer et impossible d'utiliser l'application bloquée derrière lui. C'est tout l'intérêt — si le blocage est facile à contourner, ce n'est pas un blocage.</p>

<h3>Combinez avec le blocage de sites web</h3>
<p>La véritable puissance vient de la combinaison des deux. Bloquez les sites de réseaux sociaux dans tous les navigateurs via l'extension système, et bloquez les applications de messagerie et de divertissement via le bloqueur d'applications. Pendant une session Lock In!, tous les chemins de distraction courants sont fermés — navigateur et application.</p>

<h3>Des listes prédéfinies pour bien démarrer</h3>
<p>Lock In! inclut des listes de blocage prédéfinies pour les catégories de distraction courantes : Réseaux sociaux, Divertissement, Actualités et Achats en ligne. Elles couvrent les sites web populaires, et vous pouvez y ajouter des applications spécifiques. Construisez une liste de blocage une fois, et réutilisez-la à chaque session.</p>

<p>Bloquez les applications, pas seulement les notifications. <a href="https://apps.apple.com/app/lockin/id6802325423">Téléchargez Lock In! sur le Mac App Store</a></p>
`,
  },

  "mac-screen-time-website-blocking-limitations": {
    slug: "mac-screen-time-website-blocking-limitations",
    title: "Le blocage de sites web de Temps d'écran sur Mac est défaillant — voici pourquoi",
    description:
      "Temps d'écran sur Mac promet des limites de sites web, mais ça ne fonctionne que dans Safari, ça peut être ignoré d'un clic, et ça casse régulièrement lors des mises à jour de macOS.",
    date: "2026-09-06",
    readTime: "5 min de lecture",
    content: `
<p>Si vous avez essayé d'utiliser Temps d'écran sur votre Mac pour bloquer des sites web distrayants, vous avez déjà découvert la frustration. Apple a conçu Temps d'écran d'abord pour le contrôle parental sur iPhone. La version Mac est un ajout secondaire, et ses fonctions de blocage de sites web en portent la marque.</p>

<h2>Les problèmes du blocage de sites web dans Temps d'écran</h2>

<h3>Safari uniquement</h3>
<p>Les restrictions de sites web de Temps d'écran ne s'appliquent qu'à Safari. Si vous utilisez Chrome, Firefox, Arc, Brave, ou tout autre navigateur — et la plupart des professionnels utilisent au moins un navigateur autre que Safari — les limites ne s'appliquent pas. Vous pouvez bloquer twitter.com dans Temps d'écran et continuer à faire défiler Twitter dans Chrome sans aucune restriction.</p>

<h3>Ignoré en un clic</h3>
<p>Lorsque vous atteignez une limite de site web de Temps d'écran dans Safari, une alerte apparaît. Cette alerte comporte un bouton « Ignorer la limite ». Un clic et vous êtes de retour sur le site. La limite se réinitialise le lendemain et vous recommencez. C'est un rappel, pas un blocage — et les rappels ne fonctionnent pas contre les distractions habituelles.</p>

<h3>Peu fiable au fil des mises à jour</h3>
<p>Temps d'écran sur Mac a un historique de bugs. Des limites qui cessent de se synchroniser, des restrictions qui se désactivent silencieusement, des catégories qui n'incluent pas les bons sites web. Chaque mise à jour de macOS semble corriger certains problèmes et en introduire d'autres. Ce n'est pas un outil sur lequel on peut compter pour une discipline de concentration quotidienne.</p>

<h3>Pas de sessions basées sur une minuterie</h3>
<p>Temps d'écran utilise des limites de temps quotidiennes — « 30 minutes de réseaux sociaux par jour ». Mais ce n'est pas ainsi que fonctionne le travail concentré. Vous avez besoin de bloquer des sites pendant les 2 prochaines heures pour terminer un projet, pas de gérer un budget quotidien. Temps d'écran ne prend pas du tout en charge les sessions de concentration minutées.</p>

<h2>Lock In! fait ce que Temps d'écran devrait faire</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> a été conçu spécifiquement parce que Temps d'écran échoue à cette tâche. Il utilise une extension système macOS pour bloquer les sites web dans tous les navigateurs — Safari, Chrome, Firefox, Arc, tous. Aucun navigateur n'est épargné.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! replacing Screen Time for website blocking on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Pas de bouton pour ignorer</h3>
<p>Les sites web bloqués ne se chargent tout simplement pas. Pas d'alerte à ignorer, pas de bouton sur lequel cliquer. En Mode strict, vous ne pouvez même pas terminer la session prématurément. Le blocage est absolu.</p>

<h3>Basé sur des sessions, pas sur un budget</h3>
<p>Lock In! utilise des sessions minutées. Bloquez vos distractions pendant 25 minutes, 1 heure, ou 4 heures. Une fois la session terminée, tout se débloque automatiquement. Cela correspond à la manière dont fonctionnent réellement les sessions de travail — des efforts concentrés, pas un rationnement toute la journée.</p>

<p>Arrêtez de lutter contre les limites de Temps d'écran. <a href="https://apps.apple.com/app/lockin/id6802325423">Téléchargez Lock In! sur le Mac App Store</a></p>
`,
  },

  "pomodoro-website-blocker-mac": {
    slug: "pomodoro-website-blocker-mac",
    title: "Minuteur Pomodoro avec blocage de sites web pour Mac",
    description:
      "La technique Pomodoro s'effondre lorsque votre sprint de concentration de 25 minutes comprend un détour de 10 minutes sur Instagram. Un minuteur seul ne suffit pas — il faut un blocage pendant chaque intervalle.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>La technique Pomodoro est simple : travaillez 25 minutes, faites une pause de 5 minutes, répétez. C'est l'une des méthodes de productivité les plus populaires car elle est facile à démarrer — réglez une minuterie et allez-y. Mais voici le problème : une minuterie ne vous empêche pas d'ouvrir Twitter à la 3e minute.</p>

<p>La plupart des applications Pomodoro ne sont que des minuteries avec une icône de tomate. Elles font le compte à rebours. Elles sonnent quand l'intervalle se termine. Elles ne font rien pour protéger les 25 minutes entre les deux. Si vous êtes distrait pendant un Pomodoro, la minuterie continue de tourner et vous avez gaspillé un intervalle entier.</p>

<h2>Pourquoi les minuteries sans blocage ne fonctionnent pas</h2>
<p>La technique Pomodoro suppose que vous resterez concentré pendant chaque sprint. En 2005, quand elle a été popularisée, c'était plus réaliste. En 2026, avec un navigateur rempli de contenu optimisé algorithmiquement à un onglet de distance, la seule volonté ne suffit pas. Des études sur la distraction numérique montrent qu'une fois que vous changez de contexte vers un site de réseau social, il faut en moyenne 23 minutes pour vous reconcentrer pleinement. C'est presque un Pomodoro entier — disparu.</p>

<p>Un minuteur Pomodoro sans blocage de sites web, c'est comme un programme d'entraînement sans salle de sport. La structure est là, mais l'environnement joue contre vous.</p>

<h2>Lock In! combine Pomodoro et blocage au niveau système</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> intègre une prise en charge Pomodoro. Réglez la durée de votre intervalle de travail, et Lock In! bloque les sites web et applications de votre choix pendant toute la durée. Quand l'intervalle se termine, tout se débloque pour votre pause. Quand la pause se termine, le blocage reprend pour le sprint suivant.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! Pomodoro timer with website blocking on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Tous les navigateurs, toutes les applications</h3>
<p>Le blocage fonctionne au niveau système macOS via une extension réseau. Peu importe que vous utilisiez Safari, Chrome ou Arc — les sites distrayants ne se chargent pas. Associez-le au blocage d'applications pour fermer Discord, Slack, ou des jeux pendant chaque sprint.</p>

<h3>Le Mode strict pour des Pomodoros honnêtes</h3>
<p>Activez le Mode strict et vous ne pouvez pas annuler un Pomodoro prématurément. Pas d'exception du type « je vais juste jeter un œil à mon fil ». L'intervalle se déroule sur toute sa durée avec tous les blocages actifs. C'est la technique Pomodoro telle qu'elle était prévue — des sprints de concentration ininterrompus.</p>

<h3>Suivez votre progression</h3>
<p>Les statistiques quotidiennes de Lock In!, avec un graphique en barres sur 7 jours, montrent combien de sessions concentrées vous avez accomplies. Avec le temps, vous verrez des tendances — quels jours vous êtes le plus productif, quand vous avez tendance à sauter des sessions, et comment votre concentration s'améliore semaine après semaine.</p>

<p>Donnez du mordant à vos Pomodoros. <a href="https://apps.apple.com/app/lockin/id6802325423">Téléchargez Lock In! sur le Mac App Store</a></p>
`,
  },

  "strict-mode-website-blocker-mac": {
    slug: "strict-mode-website-blocker-mac",
    title: "Bloqueur de sites web en Mode strict pour Mac — impossible de tricher",
    description:
      "Chaque bloqueur de sites web a un bouton d'annulation — et votre futur vous l'utilisera. Un mode strict qui supprime totalement cette option est la seule version qui fonctionne sur la durée.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous installez un bloqueur de sites web. Vous ajoutez Reddit, Twitter, YouTube à la liste. Vous démarrez une session de concentration de 2 heures. Quatorze minutes plus tard, vous pensez « je vais juste vérifier une chose » et appuyez sur le bouton d'annulation. Le blocage se lève, vous ouvrez Reddit, et les deux heures s'envolent.</p>

<p>Ce n'est pas un échec de l'outil — c'est une caractéristique de tout bloqueur qui inclut un bouton d'annulation. Si le vous du futur peut annuler le blocage, le vous du présent ne fait qu'accomplir un rituel, pas appliquer une limite.</p>

<h2>Le problème du bouton d'annulation</h2>
<p>La plupart des bloqueurs de sites web vous permettent de terminer une session quand vous le souhaitez. Certains ajoutent un court délai — attendez 10 secondes avant le déblocage. D'autres vous font taper une phrase. Ce sont des techniques de friction, et elles fonctionnent pour les envies légères. Mais pour les envies fortes — le genre où vous vous débattez avec un problème difficile depuis 30 minutes et votre cerveau réclame de la dopamine — un délai de 10 secondes n'est rien.</p>

<p>Les recherches sur les dispositifs d'engagement montrent que les plus efficaces suppriment totalement l'option. Vous ne pouvez pas manger de malbouffe qui n'est pas dans la maison. Vous ne pouvez pas dépenser de l'argent déjà transféré sur un compte d'épargne verrouillé. Et vous ne pouvez pas naviguer sur des sites bloqués s'il n'y a pas de bouton d'annulation.</p>

<h2>Le Mode strict de Lock In! supprime l'échappatoire</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> propose un Mode strict qui, une fois activé, rend la session en cours totalement inannulable. Il n'y a pas de bouton pour la terminer prématurément. Pas de raccourci clavier. Pas d'astuce de type quitter-et-relancer. Vous avez choisi une durée en démarrant la session, et les blocages restent actifs à chaque seconde.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! Strict Mode — uncancellable website blocking on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Comment ça marche</h3>
<p>Lorsque vous démarrez une session avec le Mode strict activé, Lock In! active son extension réseau au niveau système pour bloquer les sites web dans tous les navigateurs, et son bloqueur d'applications intercepte toute application bloquée. La minuterie de session fait le compte à rebours dans la barre de menus. Pendant ce temps, le contrôle « Terminer la session » a disparu. Vous ne pouvez pas y accéder. La seule issue est d'attendre.</p>

<h3>Commencez petit</h3>
<p>Si le Mode strict vous semble intimidant, commencez par des sessions de 25 minutes. Vous pouvez survivre 25 minutes sans Instagram. Une fois à l'aise, passez à 50 minutes, puis 90. L'inconfort s'estompe rapidement quand vous réalisez que vous avez réellement avancé dans votre travail.</p>

<h3>Votre futur vous vous en remerciera</h3>
<p>Le Mode strict est un accord que vous passez avec vous-même : « Pendant les X prochaines minutes, les distractions sont hors de question. » Il transforme chaque session en véritable travail approfondi car il n'y a pas d'alternative. Pas de négociation, pas d'exception, pas d'échappatoire.</p>

<p>Le seul bloqueur qui fonctionne est celui que vous ne pouvez pas désactiver. <a href="https://apps.apple.com/app/lockin/id6802325423">Téléchargez Lock In! sur le Mac App Store</a></p>
`,
  },

  "block-youtube-mac-during-work": {
    slug: "block-youtube-mac-during-work",
    title: "Comment bloquer YouTube sur Mac pendant les heures de travail",
    description:
      "La lecture automatique et la barre latérale de recommandations de YouTube transforment une recherche rapide en un détour d'une heure. Le bloquer pendant le travail nécessite plus que fermer l'onglet.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>YouTube est particulièrement dangereux pour la productivité car il donne l'impression d'être productif. Vous allez chercher un tutoriel pour une tâche professionnelle, et la barre latérale recommande une vidéo « associée » qui s'avère être un documentaire de 40 minutes sur les trous noirs. La lecture automatique enchaîne sur la vidéo suivante avant même que vous n'ayez décidé de la regarder. Une recherche légitime devient une heure de consommation de contenu.</p>

<p>Contrairement aux réseaux sociaux purs, YouTube a une réelle utilité. C'est précisément ce qui le rend si difficile à quitter — vous pouvez toujours justifier la visite. Mais la plateforme est conçue pour convertir une visite de 3 minutes en une session de 30 minutes, et pendant les heures de travail, ce taux de conversion est dévastateur.</p>

<h2>Pourquoi l'autodiscipline échoue face à YouTube</h2>
<p>Le moteur de recommandation de YouTube est alimenté par des milliards de points de données sur ce qui garde les gens en train de regarder. Votre volonté est alimentée par ce que vous avez mangé au petit-déjeuner. Ce n'est pas un combat équitable. La barre latérale, la lecture automatique, les notifications et la page d'accueil personnalisée existent toutes pour maximiser votre temps sur le site. Lutter contre cela avec « je vais juste regarder une vidéo » est une stratégie perdante.</p>

<p>Les extensions de navigateur qui bloquent YouTube peuvent être désactivées en quelques secondes. Retirer YouTube de vos favoris n'aide pas quand l'URL est gravée dans votre mémoire musculaire.</p>

<h2>Bloquez YouTube sur tout le système avec Lock In!</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> bloque youtube.com au niveau système macOS. Pendant une session de concentration, YouTube ne se chargera dans aucun navigateur — Safari, Chrome, Firefox, Arc, aucun d'entre eux. L'extension système intercepte la requête avant qu'elle n'atteigne le navigateur, donc pas de page à charger, pas de barre latérale pour vous tenter, pas de lecture automatique à démarrer.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! blocking YouTube on Mac during work hours" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Bloquez YouTube sans tout bloquer</h3>
<p>Vous n'avez pas besoin d'aller à l'extrême. Ajoutez youtube.com à votre liste de blocage personnalisée tout en gardant les autres sites accessibles. Ou utilisez le préréglage Divertissement, qui bloque YouTube aux côtés d'autres plateformes vidéo et de streaming. Personnalisez la liste selon vos véritables schémas de distraction.</p>

<h3>Le Mode strict pour les accros à YouTube</h3>
<p>Si vous avez déjà essayé de bloquer YouTube mais avez toujours fini par annuler le blocage pour « vérifier rapidement quelque chose », activez le Mode strict. La session devient inannulable. YouTube reste bloqué jusqu'à ce que la minuterie atteigne zéro, peu importe à quel point l'envie de chercher quelque chose est irrésistible.</p>

<h3>Gardez les tutoriels pour les pauses</h3>
<p>Avec la prise en charge Pomodoro, Lock In! crée naturellement des fenêtres où YouTube est disponible — vos intervalles de pause. Besoin de regarder un tutoriel ? Mettez-le en favori et regardez-le lors de votre prochaine pause. Ainsi, YouTube vous sert selon votre emploi du temps, et non l'inverse.</p>

<p>Retirez YouTube de l'équation pendant les heures de travail. <a href="https://apps.apple.com/app/lockin/id6802325423">Téléchargez Lock In! sur le Mac App Store</a></p>
`,
  },

  "selfcontrol-alternative-mac": {
    slug: "selfcontrol-alternative-mac",
    title: "Une alternative à SelfControl pour Mac",
    description:
      "SelfControl est un bloqueur open source très apprécié, mais il n'a pas suivi le rythme des versions récentes de macOS. Pas de blocage d'applications, pas d'interface dans la barre de menus, et des problèmes de compatibilité avec les mises à jour système récentes.",
    date: "2026-09-06",
    readTime: "5 min de lecture",
    content: `
<p>SelfControl est le bloqueur de sites web gratuit de référence pour Mac depuis 2009. Sa promesse fondamentale — bloquer des sites pendant une durée définie sans aucun moyen de revenir en arrière — était révolutionnaire. Mais nous sommes en 2026, et SelfControl montre son âge. Si vous l'utilisez et rencontrez des limites, vous n'êtes pas seul.</p>

<h2>Où SelfControl pèche en 2026</h2>

<h3>Pas de blocage d'applications</h3>
<p>SelfControl ne bloque que les sites web. Il ne peut rien faire contre les applications de bureau distrayantes comme Discord, Slack, Steam ou Messages. Si votre problème de distraction dépasse le navigateur — et c'est le cas pour la plupart des gens — SelfControl ne couvre que la moitié du problème.</p>

<h3>Pas de présence dans la barre de menus</h3>
<p>SelfControl exige d'ouvrir sa fenêtre d'application complète pour démarrer une session. Pas d'icône dans la barre de menus, pas d'interface à accès rapide. Pour un outil que vous utilisez plusieurs fois par jour, cette friction s'accumule. Vous devez trouver l'application, l'ouvrir, configurer votre blocage, et le démarrer — à chaque fois.</p>

<h3>Des soucis de compatibilité</h3>
<p>SelfControl modifie des fichiers de configuration réseau au niveau système pour appliquer ses blocages. Cette approche est devenue de plus en plus fragile à mesure qu'Apple renforce la sécurité de macOS à chaque version. Les utilisateurs rapportent des blocages qui échouent silencieusement, des blocages qui persistent au-delà de leur minuterie, et des problèmes d'installation après les mises à jour de macOS. L'application est open source et maintenue par des bénévoles, donc les correctifs peuvent accuser du retard par rapport au cycle de sortie d'Apple.</p>

<h3>Pas de fonctionnalités Pomodoro ou de session</h3>
<p>SelfControl n'a qu'un seul mode : bloquer pendant X minutes. Pas d'intégration Pomodoro, pas de suivi de session, pas de statistiques quotidiennes. C'est un outil à usage unique dans un monde où les applications de concentration ont considérablement évolué.</p>

<h2>Lock In! — Un remplacement moderne</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> reprend tout ce que les gens aiment chez SelfControl — le blocage strict et inannulable — et l'enveloppe dans une application macOS moderne, avec des fonctionnalités que SelfControl n'a jamais proposées.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! as a SelfControl alternative for modern macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Extension système, pas de bidouille du fichier hosts</h3>
<p>Lock In! utilise l'API officielle Network Extension d'Apple pour bloquer les sites web. C'est la méthode prise en charge et pérenne pour intercepter le trafic réseau sur macOS. Pas de modifications de fichiers fragiles, pas de casse après les mises à jour système, pas d'entrées résiduelles en cas de problème.</p>

<h3>Blocage de sites web + d'applications</h3>
<p>Bloquez les sites web distrayants dans tous les navigateurs et les applications distrayantes via des panneaux d'interruption plein écran. Une seule application couvre les deux vecteurs. SelfControl ne peut bloquer aucune application.</p>

<h3>La barre de menus avant tout</h3>
<p>Lock In! réside dans la barre de menus. Cliquez, réglez la durée, démarrez. Pas de fenêtre à trouver, pas d'application vers laquelle basculer. Il est conçu pour le flux de travail consistant à démarrer des sessions de concentration plusieurs fois par jour.</p>

<h3>Mode strict + statistiques</h3>
<p>Le Mode strict reflète la philosophie inannulable de SelfControl. Les statistiques quotidiennes avec un graphique sur 7 jours ajoutent une redevabilité que SelfControl n'a jamais fournie. Les listes de blocage prédéfinies pour Réseaux sociaux, Divertissement, Actualités et Achats en ligne signifient que vous bloquez en quelques secondes, sans construire de listes depuis zéro.</p>

<p>Même philosophie, exécution moderne. <a href="https://apps.apple.com/app/lockin/id6802325423">Téléchargez Lock In! sur le Mac App Store</a></p>
`,
  },

  "focus-app-blocks-websites-and-apps-mac": {
    slug: "focus-app-blocks-websites-and-apps-mac",
    title: "Une application de concentration pour Mac qui bloque à la fois sites web et applications",
    description:
      "La plupart des outils de concentration bloquent les sites web ou les applications, pas les deux. Les distractions ne respectent pas cette frontière — elles vivent dans votre navigateur et dans votre dock.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous avez installé un bloqueur de sites web, donc Reddit et Twitter sont gérés. Mais ensuite vous ouvrez Discord pour « vérifier un message » et perdez 20 minutes. Vous avez installé une minuterie d'applications, donc Discord est géré. Mais ensuite vous ouvrez reddit.com dans Chrome et perdez 20 minutes. Les distractions se moquent de la frontière catégorielle entre « sites web » et « applications » — elles exploitent quel que soit le canal que vous avez laissé ouvert.</p>

<p>Pour réellement protéger une session de concentration, vous avez besoin d'un seul outil qui bloque les deux. Pas deux outils, pas une extension de navigateur plus un gestionnaire d'applications séparé — un bloqueur unifié qui couvre chaque vecteur de distraction sur votre Mac.</p>

<h2>Le problème des deux outils</h2>
<p>Faire fonctionner des outils séparés pour le blocage de sites web et d'applications crée des failles. Le bloqueur de sites web ne connaît pas le planning du bloqueur d'applications, et vice-versa. Vous finissez par gérer deux listes de blocage, deux minuteries, deux ensembles de réglages. Inévitablement, l'un expire avant l'autre, ou l'un n'est pas configuré pour une nouvelle distraction que vous avez adoptée. La complexité vous rend moins susceptible d'utiliser l'un ou l'autre outil de manière cohérente.</p>

<p>macOS lui-même divise également ce problème. Temps d'écran peut limiter les sites web de Safari et fixer des limites de temps pour les applications, mais les limites de sites web ne concernent que Safari et les limites d'applications peuvent être ignorées. Le mode Focus fait taire les notifications mais ne vous empêche pas d'ouvrir quoi que ce soit. Aucun des deux outils n'est conçu pour des sessions de concentration intentionnelles.</p>

<h2>Lock In! bloque les deux depuis une seule icône dans la barre de menus</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> est une application de concentration unifiée pour Mac qui bloque simultanément les sites web et applications distrayants pendant des sessions minutées.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! blocking both websites and apps on Mac for focus" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Blocage de sites web au niveau système</h3>
<p>Une extension réseau macOS bloque les sites web dans tous les navigateurs — Safari, Chrome, Firefox, Arc, Brave, et toute autre application qui effectue des requêtes web. Des listes de blocage prédéfinies pour Réseaux sociaux, Divertissement, Actualités et Achats en ligne couvrent les suspects habituels. Ajoutez des domaines personnalisés pour tout ce qui correspond à vos habitudes.</p>

<h3>Blocage d'applications plein écran</h3>
<p>Quand vous essayez d'ouvrir une application bloquée pendant une session, Lock In! intercepte avec un panneau plein écran. Ce n'est pas une notification que l'on peut ignorer — c'est un mur. L'application bloquée est inutilisable jusqu'à la fin de votre session. Cela couvre les distractions de bureau comme Discord, Slack, Steam, Messages, et tout autre élément de votre dossier Applications.</p>

<h3>Une liste de blocage, une minuterie, une session</h3>
<p>Configurez vos blocages de sites web et d'applications ensemble. Démarrez une session depuis la barre de menus et tout s'active en même temps. Quand la session se termine, tout se désactive. Pas de minuteries séparées à gérer, pas de plannings incohérents, pas de failles par lesquelles les distractions pourraient se faufiler.</p>

<h3>Pomodoro, Mode strict et statistiques</h3>
<p>Ajoutez des intervalles Pomodoro pour structurer vos sprints de travail. Activez le Mode strict pour rendre les sessions inannulables. Suivez votre historique de concentration avec un graphique en barres sur 7 jours. Ces fonctionnalités s'appliquent à la fois au blocage de sites web et d'applications — elles font partie de la même session, pas rajoutées depuis un outil séparé.</p>

<p>Une application, chaque distraction, zéro faille. <a href="https://apps.apple.com/app/lockin/id6802325423">Téléchargez Lock In! sur le Mac App Store</a></p>
`,
  },

  "block-social-media-mac": {
    slug: "block-social-media-mac",
    title: "Comment bloquer les réseaux sociaux sur Mac pendant le travail",
    description:
      "Instagram, X et TikTok sont conçus pour vous ramener sans cesse. Voici une configuration pratique pour les tenir à l'écart de votre journée de travail sans compter sur la volonté.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous fermez l'onglet. Dix minutes plus tard, il est de nouveau ouvert. Pas parce que vous avez décidé de l'ouvrir — vous l'avez simplement fait, comme on se gratte une démangeaison. Les applications de réseaux sociaux sont conçues par des équipes dont le travail consiste entièrement à rendre cette boucle aussi fluide que possible. La volonté n'est pas un combat équitable face à cela.</p>

<p>La solution n'est pas plus de discipline. C'est de supprimer l'option pendant les heures où cela compte.</p>

<h2>Pourquoi « ne l'ouvre simplement pas » ne fonctionne pas</h2>
<p>Les plateformes sociales sont conçues autour de récompenses variables — vous ne savez pas si le prochain défilement contiendra quelque chose d'intéressant, alors vous continuez à faire défiler pour le découvrir. C'est le même mécanisme que celui des machines à sous. Décider de ne pas consulter Instagram vous oblige à gagner une petite bataille de volonté des dizaines de fois par jour, et il suffit d'en perdre une pour que la session s'envole.</p>

<p>Mettre le site en favori, se déconnecter, ou masquer l'icône de l'application échouent tous pour la même raison : cela ajoute quelques secondes de friction, mais quelques secondes ne suffisent pas à arrêter un réflexe habituel. Vous avez besoin que l'option n'existe pas pendant les heures de travail, pas seulement qu'elle soit légèrement plus difficile à atteindre.</p>

<h2>Bloquez-les au niveau système</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> bloque les domaines de réseaux sociaux sur tout le système Mac, de sorte qu'Instagram, X, TikTok, Facebook et Reddit sont inaccessibles dans tous les navigateurs pendant une session de concentration — pas seulement celui que vous avez configuré par hasard.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Blocking social media sites on Mac during a focus session" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Une liste de blocage prédéfinie pour les réseaux sociaux</h3>
<p>Plutôt que de taper chaque domaine social à la main, un préréglage Réseaux sociaux intégré couvre les principales plateformes en un seul geste. Ajoutez tout ce qui est plus spécifique — un forum particulier, le client web d'un serveur Discord — à la même liste en quelques secondes.</p>

<h3>Fonctionne dans tous les navigateurs</h3>
<p>Une extension réseau macOS applique le blocage en dessous de la couche du navigateur, donc passer de Safari à Chrome pour le contourner ne fait rien. Si le domaine est bloqué, il est bloqué partout sur la machine.</p>

<h3>Le Mode strict pour les jours où vous savez que vous allez craquer</h3>
<p>Certains jours, un simple blocage suffit. D'autres jours — une matinée stressante, une tâche ennuyeuse — vous savez que vous allez vous convaincre de le désactiver. Le Mode strict supprime cette option jusqu'à la fin de la minuterie, afin que la décision soit prise une seule fois, au début, quand vous avez le plus de résolution.</p>

<h3>Associez-le à une minuterie, pas à une interdiction permanente</h3>
<p>Bloquer les réseaux sociaux pour toujours n'est ni réaliste ni nécessaire — vous avez juste besoin qu'ils disparaissent pendant les blocs de travail approfondi. Réglez une session pour vos heures concentrées et laissez-la se lever automatiquement ensuite, afin que consulter votre fil pendant le déjeuner soit un choix, pas un dérapage.</p>

<p>Moins de défilement, plus de travail livré. <a href="https://apps.apple.com/app/lockin/id6802325423">Téléchargez Lock In! sur le Mac App Store</a></p>
`,
  },

  "mac-focus-mode-doesnt-block-websites": {
    slug: "mac-focus-mode-doesnt-block-websites",
    title: "Le mode Focus de Mac ne bloque pas les sites web — voici ce qui le fait",
    description:
      "La fonction Focus d'Apple fait taire les notifications mais laisse votre navigateur grand ouvert. Si vous pensiez qu'elle bloquait aussi les sites distrayants, voici la faille et comment la combler.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Activez le mode Focus sur votre Mac, et les notifications se taisent — les alertes Slack, les textos, les rappels de calendrier, tout est supprimé. On dirait un mode productivité. Il est donc raisonnable de supposer qu'il vous tient aussi à l'écart des sites web distrayants tant qu'il est actif. Ce n'est pas le cas. Le mode Focus n'a rien à voir avec ce que vous pouvez ouvrir dans votre navigateur.</p>

<h2>Ce que fait réellement le mode Focus</h2>
<p>Focus est un filtre de notifications. Il contrôle quelles applications et quelles personnes peuvent vous interrompre avec des bannières, des sons et des badges, et il peut se synchroniser entre votre Mac, votre iPhone et votre iPad. C'est réellement utile pour réduire les interruptions provenant d'autres personnes. Mais cela ne touche pas au comportement sortant — rien ne vous empêche d'ouvrir Safari et de taper une URL vous-même. Le mode Focus vous protège des interruptions extérieures, pas de vos propres habitudes.</p>

<p>C'est une confusion fréquente car « Focus » semble vouloir dire « sans distraction », et le marketing d'Apple entretient cette impression. En pratique, c'est plus proche de Ne pas déranger avec des règles plus précises sur qui peut passer.</p>

<h2>Ce qui bloque réellement les sites web</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> gère la partie que le mode Focus laisse de côté — il bloque purement et simplement les sites web et applications distrayants, les rendant inaccessibles plutôt que simplement silencieux.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Website blocking on Mac, unlike Apple's Focus mode" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Un vrai blocage de sites web, pas un filtrage de notifications</h3>
<p>Une extension réseau au niveau système bloque les domaines que vous choisissez dans tous les navigateurs de votre Mac. Taper l'URL directement ne fait rien — le site ne se charge tout simplement pas pendant qu'une session est en cours.</p>

<h3>Utilisez les deux ensemble</h3>
<p>Le mode Focus et un véritable bloqueur de sites web ne sont pas des outils concurrents — ils résolvent deux moitiés différentes du même problème. Activez un profil Focus pour faire taire les notifications provenant des gens, et démarrez une session pour bloquer les sites et applications que vous ouvririez vous-même autrement. Ensemble, ils couvrent les deux directions de l'interruption.</p>

<h3>Basé sur des sessions, pas tout ou rien</h3>
<p>Réglez une durée et démarrez-la depuis la barre de menus quand vous vous installez pour travailler. Ajoutez des intervalles Pomodoro si vous voulez des pauses structurées, ou le Mode strict si vous ne vous faites pas confiance pour arrêter prématurément. Quand la minuterie se termine, tout se débloque automatiquement.</p>

<p>Des notifications silencieuses, c'est un début. Des sites réellement bloqués, c'est la différence. <a href="https://apps.apple.com/app/lockin/id6802325423">Téléchargez Lock In! sur le Mac App Store</a></p>
`,
  },

  "website-blocker-all-browsers-mac": {
    slug: "website-blocker-all-browsers-mac",
    title: "Un bloqueur de sites web qui fonctionne dans tous les navigateurs sur Mac",
    description:
      "La plupart des extensions bloqueuses ne couvrent que le seul navigateur dans lequel elles sont installées. Si vous changez de navigateur pour contourner un blocage, voici une configuration qui ferme cette faille.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous installez une extension bloqueuse de sites web dans Chrome. Elle fonctionne — pendant environ une journée, jusqu'à ce que vous ouvriez inconsciemment Safari à la place, où l'extension n'existe pas, et le site se charge sans friction. Vous n'avez même pas eu l'intention de la contourner ; votre Mac a simplement plus d'un navigateur, et le bloqueur ne connaissait qu'un seul d'entre eux.</p>

<p>C'est le mode d'échec le plus courant pour les bloqueurs sous forme d'extensions de navigateur. Ils sont, par conception, limités à un seul navigateur, et changer de navigateur demande moins d'effort que la plupart des gens ne le pensent.</p>

<h2>Pourquoi les bloqueurs à base d'extensions présentent des failles</h2>
<p>Une extension de navigateur ne peut voir et contrôler que le trafic à l'intérieur du navigateur qui l'héberge. Si vous avez Chrome, Safari, Firefox et Arc tous installés — ce qui est courant sur un Mac — une extension dans l'un laisse les trois autres complètement ouverts. Certaines personnes ne réalisent même pas qu'elles ont plusieurs navigateurs jusqu'à ce qu'elles cherchent activement un moyen de contourner un blocage, moment où leur cerveau trouve remarquablement vite l'icône Safari dans le dock.</p>

<p>Les extensions sont également faciles à désactiver en quelques clics depuis les réglages du navigateur lui-même, ce qui anéantit l'objectif dès que vous avez un mauvais après-midi.</p>

<h2>Bloquez plutôt au niveau système</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> utilise une extension réseau macOS plutôt qu'un module de navigateur, de sorte que le blocage s'applique en dessous de tous les navigateurs à la fois — Safari, Chrome, Firefox, Arc, Brave, et tout autre navigateur installé sur la machine.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="System-level website blocking across all Mac browsers" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Un blocage, tous les navigateurs</h3>
<p>Ajoutez un domaine une fois et il est bloqué partout sur le Mac, immédiatement. Pas de configuration par navigateur, pas d'extension séparée à installer quatre fois, et pas de navigateur oublié.</p>

<h3>Pas d'extension à désactiver en cours de session</h3>
<p>Comme le blocage fonctionne au niveau système plutôt qu'à l'intérieur d'un navigateur, il n'y a pas de bascule d'extension à désactiver quand la motivation baisse. Le Mode strict va encore plus loin, rendant toute la session inannulable jusqu'à la fin de la minuterie.</p>

<h3>Des listes prédéfinies pour les coupables évidents</h3>
<p>Les préréglages Réseaux sociaux, Divertissement, Actualités et Achats en ligne couvrent d'emblée les catégories de distraction les plus courantes, sans avoir besoin de rechercher et de saisir manuellement des dizaines de domaines pour chaque service que vous voulez bloquer.</p>

<p>Changer de navigateur ne devrait pas être une faille. <a href="https://apps.apple.com/app/lockin/id6802325423">Téléchargez Lock In! sur le Mac App Store</a></p>
`,
  },

  "block-reddit-mac": {
    slug: "block-reddit-mac",
    title: "Comment bloquer Reddit sur Mac — arrêtez le défilement",
    description:
      "Le défilement infini et les innombrables subreddits de Reddit en font l'un des moyens les plus simples de perdre un après-midi. Voici comment le tenir à l'écart spécifiquement de votre journée de travail.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Reddit est particulièrement doué pour dévorer du temps car il ne s'épuise jamais. Terminez un subreddit et il y en a un autre. Terminez la page d'accueil et il y a un fil de commentaires. Contrairement à un article ou une vidéo unique, il n'y a pas de point d'arrêt naturel intégré — le défilement continue simplement à générer plus de contenu, et « encore un post » peut durer une heure sans que vous vous en rendiez compte.</p>

<p>Si vous avez ouvert Reddit « juste pour vérifier une chose » et avez levé les yeux 45 minutes plus tard, c'est pour cette raison. Ce n'est pas un échec de discipline — c'est un produit conçu pour supprimer les signaux d'arrêt.</p>

<h2>Bloquer seulement Reddit ne suffit pas toujours</h2>
<p>Beaucoup de gens essaient des extensions de navigateur qui bloquent spécifiquement reddit.com, ce qui fonctionne jusqu'à ce qu'ils ouvrent un autre navigateur sans l'extension, ou jusqu'à ce que old.reddit.com ou la version web mobile passe à travers une règle de domaine pas assez précise. Reddit a aussi beaucoup de sous-domaines et de chemins de redirection, donc une liste de blocage trop étroite peut manquer des cas particuliers.</p>

<h2>Une manière plus propre de le bloquer</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> bloque Reddit au niveau système sur Mac, couvrant le domaine principal et ses variantes dans tous les navigateurs que vous avez installés, pas seulement celui où vous avez configuré une règle.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Blocking Reddit on Mac during focus sessions" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Ajoutez-le une fois, bloqué partout</h3>
<p>Ajoutez reddit.com à votre liste de blocage — ou utilisez le préréglage Réseaux sociaux ou Divertissement, qui l'inclut déjà — et il devient inaccessible dans Safari, Chrome, Firefox et Arc simultanément. Pas de configuration par navigateur.</p>

<h3>Bloque aussi l'application</h3>
<p>Si vous utilisez l'application de bureau Reddit ou un client tiers packagé comme application Mac, Lock In! peut le bloquer directement avec une interruption plein écran, comblant la faille qu'un bloqueur de sites web seul manquerait.</p>

<h3>Limité aux moments où vous en avez besoin</h3>
<p>Vous n'avez pas besoin de bloquer Reddit pour toujours — la plupart des gens ne le veulent pas. Faites-le tourner pendant les sessions de travail avec une minuterie, et il se rouvre normalement une fois la session terminée, donc naviguer sur votre temps libre n'est pas affecté.</p>

<h3>Le Mode strict pour les jours honnêtes</h3>
<p>Si vous savez qu'une pause Reddit de cinq minutes tend à en devenir cinquante, le Mode strict supprime l'option de terminer la session prématurément. Le blocage tient jusqu'à ce que la minuterie indique que c'est terminé.</p>

<p>Le défilement s'arrête là où le blocage commence. <a href="https://apps.apple.com/app/lockin/id6802325423">Téléchargez Lock In! sur le Mac App Store</a></p>
`,
  },

  "focus-app-with-stats-mac": {
    slug: "focus-app-with-stats-mac",
    title: "Une application de concentration avec statistiques quotidiennes pour Mac",
    description:
      "La plupart des bloqueurs se contentent de bloquer. Sans historique de votre temps de concentration, il est difficile de savoir si l'habitude s'améliore réellement — voici une configuration qui la suit pour vous.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous commencez à utiliser un outil de concentration, faites tourner quelques sessions, puis une semaine plus tard on vous demande comment ça se passe. Vous ne savez honnêtement pas. Peut-être avez-vous été régulier, peut-être avez-vous sauté la moitié des jours, peut-être vos sessions se sont-elles raccourcies sans que vous le remarquiez. Sans historique, « j'ai été plus concentré ces derniers temps » est un ressenti, pas un fait.</p>

<p>La plupart des bloqueurs de sites web et d'applications sont conçus pour faire exactement une chose — bloquer — et s'arrêter là. C'est très bien pour le moment où vous êtes dans une session, mais cela ne vous laisse aucun moyen de voir la tendance sur des jours ou des semaines, ce qui est précisément là où les habitudes se forment ou s'effondrent réellement.</p>

<h2>Pourquoi le suivi change le comportement</h2>
<p>Voir un historique visible de votre temps de concentration fait quelque chose que le blocage seul ne fait pas : cela transforme une habitude invisible en une habitude mesurable. Une série de sessions régulières est motivante d'une manière que « je pense avoir été plus concentré » ne l'est pas. Un trou dans le graphique est un signal pour vous remettre sur la bonne voie avant que cela ne devienne un dérapage de deux semaines. Le suivi n'est pas seulement de la tenue de registre — c'est un retour d'information qui façonne la prochaine session.</p>

<h2>Un bloqueur qui vous montre aussi la tendance</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> associe le blocage de sites web et d'applications à des statistiques quotidiennes, de sorte que chaque session que vous faites tourner s'ajoute à un historique visible au lieu de disparaître dès qu'elle se termine.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Daily focus stats and 7-day chart on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Un graphique sur 7 jours, pas juste un chiffre</h3>
<p>Un graphique en barres glissant sur sept jours montre le temps de concentration en un coup d'œil, afin que vous puissiez repérer des tendances — une bonne semaine, un lundi lent, un dérapage qui commence avant de devenir une rechute complète dans les vieilles habitudes.</p>

<h3>Des totaux quotidiens dans la barre de menus</h3>
<p>Vérifiez le temps concentré d'aujourd'hui sans ouvrir un tableau de bord ou une application séparée. C'est là quand vous jetez un œil à la barre de menus, ce qui garde la boucle de retour serrée au lieu d'être enfouie dans un écran de réglages que vous oubliez de visiter.</p>

<h3>Les statistiques couvrent à la fois sites web et applications</h3>
<p>Comme le blocage de sites web et d'applications s'exécute dans la même session, les statistiques reflètent votre véritable temps de concentration, pas juste une tranche de celui-ci. Pas besoin de réconcilier des chiffres provenant de deux outils séparés.</p>

<p>Ce qui est mesuré se répète. <a href="https://apps.apple.com/app/lockin/id6802325423">Téléchargez Lock In! sur le Mac App Store</a></p>
`,
  },

  "mac-parental-controls-for-yourself": {
    slug: "mac-parental-controls-for-yourself",
    title: "Le contrôle parental de Mac pour vous-même — le blocage de sites web auto-imposé",
    description:
      "Temps d'écran est conçu pour gérer le compte d'un enfant, mais beaucoup d'adultes le configurent sur leur propre Mac en espérant le même effet. Voici pourquoi c'est maladroit, et une meilleure solution.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Il existe une recherche particulière qui ressemble à « comment configurer le contrôle parental sur mon propre Mac ». Ce n'est pas une faute de frappe — beaucoup d'adultes veulent la même restriction qu'un parent imposerait à l'ordinateur d'un enfant, mais appliquée à eux-mêmes, car ils savent exactement quels sites dévorent leurs après-midis et veulent un mur qu'ils ne peuvent pas facilement contourner en se parlant à eux-mêmes.</p>

<p>L'instinct est logique. L'outil ne convient pas tout à fait.</p>

<h2>Pourquoi Temps d'écran semble inadapté pour cela</h2>
<p>Le contrôle parental de Temps d'écran est construit autour d'une structure de Partage familial — un compte parent gérant un compte enfant, avec un code Temps d'écran que l'enfant ne connaît pas. Quand vous essayez d'appliquer cela à votre propre Mac mono-utilisateur, vous définissez un code que vous connaissez évidemment, sur un compte que vous contrôlez entièrement, que vous pouvez simplement désactiver dès que le blocage devient gênant. Tout le modèle de sécurité suppose qu'un adulte restreint quelqu'un d'autre. Retournez-le vers vous-même et il cesse de fonctionner comme une véritable barrière.</p>

<p>Il ne limite également que Safari pour les restrictions de sites web, donc tout autre navigateur que vous avez installé reste intact.</p>

<h2>Un outil conçu pour le blocage auto-imposé</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> est conçu spécifiquement pour les personnes qui restreignent leur propre Mac, et non pour un parent gérant le compte d'un enfant — tout le modèle d'interaction suppose que c'est vous qui définissez et respectez la limite.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Self-imposed website and app blocking on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Basé sur des sessions, pas sur un compte</h3>
<p>Au lieu d'une restriction permanente liée à un compte géré, vous démarrez une session minutée quand vous voulez vous concentrer. Elle bloque vos sites et applications choisis pour cette fenêtre, puis se lève automatiquement — pas besoin d'une structure de compte séparée.</p>

<h3>Le Mode strict plutôt qu'un code que vous connaissez</h3>
<p>Puisqu'un code que vous avez défini vous-même n'est pas un vrai dissuasif, le Mode strict supprime totalement la possibilité d'annuler une session prématurément. L'engagement est pris une fois, au début, plutôt que d'être à un clic d'être annulé.</p>

<h3>Couvre tous les navigateurs, pas seulement Safari</h3>
<p>Le blocage fonctionne au niveau système, il s'applique donc que vous soyez dans Safari, Chrome, Firefox ou Arc — aucune faille laissée par des restrictions spécifiques à un navigateur.</p>

<p>Une restriction conçue pour vous, pas pour le compte emprunté d'un enfant. <a href="https://apps.apple.com/app/lockin/id6802325423">Téléchargez Lock In! sur le Mac App Store</a></p>
`,
  },

  "deep-work-app-mac": {
    slug: "deep-work-app-mac",
    title: "Une application de travail approfondi pour Mac — tout bloquer, se concentrer sur une seule chose",
    description:
      "Le travail approfondi exige des plages de temps ininterrompues, mais un seul ping ou onglet ouvert peut mettre fin à une session avant même qu'elle ne commence. Voici comment protéger correctement ce créneau.",
    date: "2026-09-06",
    readTime: "5 min de lecture",
    content: `
<p>Le concept de travail approfondi de Cal Newport repose sur une idée simple mais exigeante : une production cognitive significative nécessite de longues plages de concentration ininterrompues, et cet état prend du temps à atteindre mais presque aucun pour se briser. Une seule notification Slack, un changement d'onglet réflexe, ou un ping Discord ne vous coûte pas seulement les trente secondes de l'interruption — il vous coûte les dix ou quinze minutes nécessaires pour retrouver ensuite votre état de flow.</p>

<p>C'est pourquoi le travail approfondi est si difficile à protéger de manière décontractée. Ce n'est pas que les gens manquent de deux heures ; c'est que ces deux heures se fragmentent en six morceaux de vingt minutes à cause de choses qui semblaient anodines sur le moment.</p>

<h2>Ce qu'exige réellement un créneau de travail approfondi</h2>
<p>Protéger une session de travail approfondi signifie supprimer chaque interruption plausible avant qu'elle ne commence, et non réagir aux interruptions au fur et à mesure. Cela signifie que les applications de communication sont inaccessibles, que les sites d'actualités et de réseaux sociaux sont inaccessibles, et qu'il n'y a pas de bascule facile pour vérifier « juste une chose » à mi-parcours. La barrière doit exister avant la tentation.</p>

<h2>Construire le blocage sur Mac</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> est conçu exactement pour cela — démarrez une session et les sites web et applications distrayants sont bloqués pour sa durée, sur tout le système.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Deep work session with websites and apps blocked on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Définissez le blocage avant de commencer à travailler</h3>
<p>Configurez une liste de blocage couvrant les applications de communication, les sites sociaux, et tout ce qui tend à vous sortir du flow. Démarrez la session avant d'ouvrir votre véritable travail, afin qu'il n'y ait aucune fenêtre où une distraction pourrait se glisser avant que le blocage ne soit actif.</p>

<h3>Pomodoro pour des créneaux de travail approfondi structurés</h3>
<p>Si deux heures d'affilée semblent intimidantes, les intervalles Pomodoro découpent le travail approfondi en sprints de 25 minutes avec de courtes pauses — assez longs pour entrer dans le flow, assez courts pour tenir toute une journée sans s'épuiser.</p>

<h3>Le Mode strict pour les sessions qui comptent le plus</h3>
<p>Pour le travail qui a véritablement besoin d'être protégé — une échéance, un problème difficile — le Mode strict rend la session inannulable. Pas de moment où l'on clique pour désactiver quand la première phrase difficile de la journée se présente.</p>

<h3>Le blocage d'applications plein écran couvre le bureau, pas seulement le navigateur</h3>
<p>Les interruptions du travail approfondi ne proviennent pas seulement du navigateur. Les notifications Slack, Discord et Messages sur le bureau sont tout aussi perturbatrices, et Lock In! les bloque avec une interruption plein écran plutôt que de les laisser passer à côté d'un bloqueur de sites web.</p>

<p>Deux heures protégées valent mieux que six fragmentées. <a href="https://apps.apple.com/app/lockin/id6802325423">Téléchargez Lock In! sur le Mac App Store</a></p>
`,
  },

  "block-news-sites-mac": {
    slug: "block-news-sites-mac",
    title: "Comment bloquer les sites d'actualités sur Mac pendant les heures de concentration",
    description:
      "Consulter les actualités « une minute » pendant le travail dure rarement une minute — les gros titres sont conçus pour vous entraîner vers l'article suivant. Voici comment les tenir à l'écart de vos créneaux de travail.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Les sites d'actualités fonctionnent selon un mécanisme similaire à celui des fils sociaux : il y a toujours un autre gros titre, une autre histoire connexe, un autre fil en direct. Consulter les actualités « une minute » pendant une session de travail se transforme régulièrement en quinze, car l'article suivant n'est qu'à un clic et le site est spécifiquement conçu pour rendre ce clic sans friction.</p>

<p>Ce n'est pas que l'actualité n'est pas importante. C'est que la plupart du temps, elle n'est pas urgente pour vous personnellement au milieu d'un créneau de travail concentré, et elle peut attendre une pause désignée sans que rien ne soit perdu.</p>

<h2>Pourquoi cette catégorie passe sous le radar de la volonté</h2>
<p>Consulter les actualités se fait souvent passer pour un comportement productif — « je reste informé » a l'air différent de « je fais défiler Instagram », même si le coût en temps et l'interruption de la concentration sont similaires. Ce cadrage rend la chose plus facile à justifier sur le moment, ce qui est précisément pourquoi elle a besoin d'un blocage structurel plutôt que d'une règle mentale que vous comptez sur vous-même pour faire respecter.</p>

<h2>Bloquer les sites d'actualités pendant le travail</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> inclut une liste de blocage prédéfinie Actualités couvrant les principaux médias et agrégateurs, afin que vous puissiez supprimer la tentation pendant les heures où cela compte sans décider de renoncer entièrement à l'actualité.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Blocking news sites on Mac during work hours" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Un préréglage, les principaux médias couverts</h3>
<p>Le préréglage Actualités vous évite de taper manuellement chaque média que vous consultez habituellement. Ajoutez-le à une session et les destinations courantes sont gérées immédiatement.</p>

<h3>Ajoutez vos propres sites habituels</h3>
<p>Si vous avez un agrégateur, un subreddit, ou un média de niche spécifique qui constitue votre trou noir personnel, ajoutez-le comme domaine personnalisé aux côtés du préréglage. Le blocage n'est pas limité à une liste fixe.</p>

<h3>Limité aux heures de travail, pas toute la journée</h3>
<p>Réglez une session pour vos heures de travail et les sites d'actualités se débloquent automatiquement une fois qu'elle se termine, donc rattraper son retard au déjeuner ou le soir n'est pas affecté. L'objectif est de protéger le temps de concentration, pas de couper totalement l'accès à l'information.</p>

<h3>Fonctionne dans tous les navigateurs</h3>
<p>Le blocage s'applique à tout le système, donc passer de Safari à Chrome pour vérifier un gros titre ne fonctionne pas — la même règle s'applique partout sur le Mac.</p>

<p>Restez informé selon votre emploi du temps, pas celui du cycle de l'actualité. <a href="https://apps.apple.com/app/lockin/id6802325423">Téléchargez Lock In! sur le Mac App Store</a></p>
`,
  },

  "freedom-app-alternative-mac": {
    slug: "freedom-app-alternative-mac",
    title: "Une alternative à l'application Freedom pour Mac",
    description:
      "Freedom a été pionnier du bloqueur de sites web par abonnement, mais des frais récurrents pour un blocage basique ont poussé beaucoup de gens à chercher une option plus simple et native.",
    date: "2026-09-06",
    readTime: "5 min de lecture",
    content: `
<p>Freedom existe depuis des années et a beaucoup contribué à populariser l'idée du blocage programmé de sites web et d'applications sur plusieurs appareils. Pour beaucoup de gens, cependant, l'abonnement continu pour un outil qui, fondamentalement, bloque une liste de domaines sur une minuterie commence à sembler excessif, surtout une fois que l'essai gratuit se termine et que les frais récurrents deviennent réels.</p>

<p>Si vous n'en avez besoin que sur votre Mac — pas synchronisé sur cinq appareils — il y a un argument en faveur de quelque chose de natif, à paiement unique, et plus léger.</p>

<h2>Ce que les gens recherchent en quittant Freedom</h2>
<p>Les demandes courantes sont cohérentes : un blocage qui fonctionne réellement dans tous les navigateurs, une fonction de blocage d'applications qui n'est pas une réflexion après coup, un moyen de rendre les sessions plus difficiles à annuler, et — très souvent — ne pas vouloir payer mensuellement indéfiniment pour quelque chose d'aussi limité en portée. La synchronisation entre appareils est précieuse pour certains, mais beaucoup d'utilisateurs de Freedom ne l'ont de toute façon jamais utilisée que sur leur Mac.</p>

<h2>Une alternative native pour Mac</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> couvre l'essentiel de ce que Freedom offre aux utilisateurs Mac — blocage de sites web et d'applications, sessions programmées, un mode inannulable — conçu nativement pour macOS plutôt que comme un service de synchronisation multiplateforme.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Native Mac alternative to Freedom for website and app blocking" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Blocage au niveau système, pas un module de navigateur</h3>
<p>Une extension réseau macOS bloque les sites web dans tous les navigateurs à la fois, donc pas de configuration par navigateur et pas d'extension à désactiver quand la tentation survient en cours de session.</p>

<h3>Le blocage d'applications intégré dès le départ</h3>
<p>Le blocage d'applications en plein écran est une fonctionnalité centrale, pas un ajout tardif — essayez d'ouvrir une application bloquée pendant une session et vous obtenez une interruption plein écran inannulable plutôt que l'application elle-même.</p>

<h3>Le Mode strict au lieu de réglages verrouillés</h3>
<p>Le Mode strict rend une session active impossible à annuler prématurément, ce qui répond au même besoin de « me protéger de moi-même » que traite le mode verrouillé de Freedom.</p>

<h3>Réside dans la barre de menus</h3>
<p>Démarrez et arrêtez des sessions depuis une icône de barre de menus plutôt qu'une fenêtre séparée, gardant la friction de démarrage d'une session aussi faible que celle de son arrêt devrait être élevée.</p>

<p>La même promesse fondamentale, conçue pour le Mac que vous utilisez réellement. <a href="https://apps.apple.com/app/lockin/id6802325423">Téléchargez Lock In! sur le Mac App Store</a></p>
`,
  },

  "mac-website-blocker-system-wide": {
    slug: "mac-website-blocker-system-wide",
    title: "Un bloqueur de sites web sur tout le système pour Mac — pas seulement un navigateur",
    description:
      "Un blocage qui ne couvre qu'un seul navigateur n'est pas vraiment un blocage, c'est une suggestion. Voici à quoi ressemble une véritable configuration à l'échelle du système sur Mac.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Il existe une différence importante entre « bloqué dans ce navigateur » et « bloqué sur ce Mac », et cela ne devient généralement évident que la première fois que vous vous surprenez à ouvrir un second navigateur spécifiquement pour contourner un blocage que vous aviez défini dans le premier. Ce n'est rarement pas une décision consciente de tricher — c'est simplement à quel point la faille est facile à trouver.</p>

<h2>Pourquoi le blocage au niveau navigateur n'est pas vraiment un blocage</h2>
<p>Les extensions de navigateur ne peuvent voir que le trafic à l'intérieur du navigateur qui les héberge. La plupart des Mac ont plus d'un navigateur installé — Safari est préchargé, et beaucoup de gens utilisent aussi Chrome, Firefox ou Arc pour différents usages. Un bloqueur limité à un seul d'entre eux laisse chaque autre navigateur comme une porte ouverte, et un cerveau distrait trouve les portes ouvertes rapidement, souvent sans le planifier consciemment.</p>

<p>Modifier <code>/etc/hosts</code> se rapproche davantage d'un blocage à l'échelle du système, car il fonctionne en dessous du navigateur, mais cela nécessite un accès au Terminal, ne fonctionne pas sur un planning, et nécessite un nettoyage manuel — peu pratique au quotidien.</p>

<h2>Un véritable blocage à l'échelle du système</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> utilise une extension réseau macOS qui bloque les domaines au niveau système, en dessous de chaque navigateur, de sorte que le blocage tient peu importe quelle application effectue la requête.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="System-wide website blocking across every Mac browser" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Chaque navigateur, une seule règle</h3>
<p>Ajoutez un domaine une fois et Safari, Chrome, Firefox et Arc sont tous couverts simultanément. Pas d'étape de configuration par navigateur à oublier.</p>

<h3>Aucune commande Terminal requise</h3>
<p>Tout est géré depuis une interface dans la barre de menus — ajouter des domaines, choisir des préréglages, démarrer une session — sans aucune édition manuelle de fichiers ni nettoyage qu'exigerait une approche par fichier hosts.</p>

<h3>Couvre aussi les applications, pas seulement les navigateurs</h3>
<p>Comme certaines distractions vivent entièrement en dehors du navigateur — des applications de bureau comme Discord ou Steam — la même session peut les bloquer avec une interruption plein écran, comblant la faille qu'un outil limité au navigateur laisserait.</p>

<p>À l'échelle du système signifie à l'échelle du système. <a href="https://apps.apple.com/app/lockin/id6802325423">Téléchargez Lock In! sur le Mac App Store</a></p>
`,
  },

  "unbypassable-website-blocker-mac": {
    slug: "unbypassable-website-blocker-mac",
    title: "Un bloqueur de sites web infranchissable pour Mac — le Mode strict",
    description:
      "Un bloqueur que vous pouvez désactiver en un clic n'est pas un bloqueur, c'est un rappel. Voici comment configurer un blocage qui tient même quand vous voulez vraiment qu'il s'arrête.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Chaque bloqueur de sites web fonctionne bien en théorie, jusqu'au moment où vous voulez réellement consulter le site bloqué au point de le désactiver. Ce moment est tout l'intérêt d'utiliser un bloqueur en premier lieu — si vous n'aviez jamais voulu consulter le site, vous n'auriez pas besoin de l'outil. Le vrai test d'un bloqueur n'est donc pas de savoir s'il bloque quand vous êtes motivé ; c'est de savoir s'il tient quand vous ne l'êtes pas.</p>

<p>La plupart des outils échouent à ce test. Une bascule dans les réglages, un clic dans la barre de menus, une extension que l'on peut désactiver — tout cela n'est qu'à une petite action d'être annulé, et une petite action est tout ce dont un cerveau distrait a besoin.</p>

<h2>Pourquoi « facile à désactiver » va à l'encontre du but recherché</h2>
<p>La valeur d'un bloqueur vient du fait de supprimer la décision, pas de la rendre légèrement plus difficile. Si le désactiver prend les mêmes trois secondes que l'ouverture du site bloqué aurait de toute façon pris, vous n'avez pas ajouté de véritable barrière — vous avez juste ajouté une étape qu'une version de vous-même déterminée sur le moment prendra volontiers.</p>

<h2>Un blocage qui tient</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> inclut le Mode strict, qui rend une session de blocage active inannulable jusqu'à la fin de sa minuterie — pas de bascule dans les réglages, pas de raccourci dans la barre de menus, pas de moyen de la terminer prématurément.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Strict Mode uncancellable website blocking on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>La décision se prend une fois, en amont</h3>
<p>Vous choisissez le Mode strict et réglez la durée avant que la session ne commence, pendant que vous êtes motivé et lucide. À partir de ce moment, l'engagement est verrouillé plutôt que renégocié à chaque fois que la tentation se présente.</p>

<h3>Pas de réinitialisation de mot de passe ni de contournement par désinstallation</h3>
<p>Le blocage est appliqué au niveau système via une extension réseau macOS, pas via un réglage que l'on peut discrètement rebasculer. Il est conçu spécifiquement pour survivre au moment où vous voulez le plus le contourner.</p>

<h3>Combinez avec les applications pour un verrouillage complet</h3>
<p>Le Mode strict s'applique aussi bien au blocage d'applications qu'aux sites web, donc une interruption plein écran sur une application bloquée ne peut pas non plus être ignorée prématurément — les deux moitiés du blocage tiennent ensemble.</p>

<p>Un blocage qui ne fonctionne que quand vous n'en avez pas besoin n'est pas un blocage. <a href="https://apps.apple.com/app/lockin/id6802325423">Téléchargez Lock In! sur le Mac App Store</a></p>
`,
  },

  "block-online-shopping-mac": {
    slug: "block-online-shopping-mac",
    title: "Comment bloquer les sites d'achats en ligne sur Mac",
    description:
      "Un rapide coup d'œil sur Amazon ou un site de vêtements pendant le travail dure rarement rapide, et finit souvent avec un panier rempli de choses que vous n'aviez pas prévu d'acheter. Voici comment les tenir à l'écart de votre journée de travail.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Le shopping en ligne pendant les heures de travail a une forme spécifique : vous ouvrez le site pour un article, vous vous laissez entraîner par « les clients ont aussi acheté », et vingt minutes plus tard vous avez ajouté trois choses à un panier dont vous ne saviez pas avoir besoin. Ce n'est pas vraiment une question de shopping — c'est une boucle de navigation déguisée en tâche, ce qui la rend facile à justifier comme productive sur le moment.</p>

<p>C'est aussi coûteux d'une manière que les réseaux sociaux ne le sont pas. Vingt minutes perdues sur Reddit vous coûtent du temps. Vingt minutes perdues sur un site d'achats peuvent vous coûter de l'argent en plus du temps.</p>

<h2>Pourquoi c'est difficile à résister en pleine tâche</h2>
<p>Les sites d'achats sont optimisés autour des mêmes mécaniques de recommandation et d'urgence que les fils sociaux — offres à durée limitée, articles associés, alertes de stock limité — tous conçus pour vous maintenir en train de naviguer au-delà de votre intention initiale. Combiné au fait que « je regarde juste » semble anodin, c'est une catégorie facile à sous-estimer jusqu'à ce que vous vérifiiez votre relevé bancaire.</p>

<h2>Bloquer les sites d'achats pendant le temps de concentration</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> inclut une liste de blocage prédéfinie Achats en ligne couvrant les principaux sites de vente au détail et de marketplace, afin qu'ils soient inaccessibles pendant vos sessions de travail sans que vous ayez à vous souvenir de chaque site vers lequel vous dérivez habituellement.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Blocking online shopping sites on Mac during work" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Un préréglage pour les enseignes courantes</h3>
<p>Ajoutez le préréglage Achats en ligne à une session et les principales marketplaces et enseignes de vente au détail sont couvertes immédiatement, sans construction manuelle de liste.</p>

<h3>Ajoutez les sites de niche que vous utilisez réellement</h3>
<p>Si votre faiblesse personnelle est une boutique spécifique ou une marketplace de revente non couverte par le préréglage, ajoutez-la comme domaine personnalisé — la liste de blocage ne se limite pas à ce qui est intégré.</p>

<h3>Le Mode strict pour les jours de paie et de soldes</h3>
<p>Si certains jours sont plus risqués que d'autres — jour de paie, un gros événement de soldes — le Mode strict supprime la possibilité de désactiver le blocage en cours de route, ce qui compte le plus précisément ces jours-là.</p>

<h3>Se débloque automatiquement après le travail</h3>
<p>Le blocage est lié à votre session, pas une restriction permanente, donc faire du shopping sur votre temps libre le soir n'est pas affecté une fois la minuterie terminée.</p>

<p>Gardez le panier vide jusqu'à la fin de la journée de travail. <a href="https://apps.apple.com/app/lockin/id6802325423">Téléchargez Lock In! sur le Mac App Store</a></p>
`,
  },

  "focus-timer-with-website-blocking-mac": {
    slug: "focus-timer-with-website-blocking-mac",
    title: "Un minuteur de concentration avec blocage de sites web intégré pour Mac",
    description:
      "Un minuteur seul ne vous empêche pas d'ouvrir un onglet distrayant, et un bloqueur seul ne donne pas de structure à votre session de travail. Voici à quoi ça ressemble une fois combinés.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Beaucoup de gens font tourner deux outils séparés pendant une session de travail : un minuteur Pomodoro pour structurer le temps, et un bloqueur de sites web pour tenir les distractions à l'écart. Ça fonctionne, mais cela signifie démarrer deux choses à chaque fois que vous vous installez pour vous concentrer, et cela signifie que le minuteur n'a aucune idée si le bloqueur est même en cours d'exécution — ils fonctionnent de manière totalement indépendante, sans aucun lien entre eux.</p>

<p>Cette faille compte plus qu'il n'y paraît. Si le minuteur dit « concentrez-vous pendant 25 minutes » mais que le bloqueur n'est pas actif, la structure n'est qu'une suggestion. Si le bloqueur est actif mais qu'il n'y a pas de minuteur, les sessions tendent à durer indéfiniment ou à être abandonnées sans point final clair.</p>

<h2>Pourquoi les combiner compte</h2>
<p>Un minuteur donne une forme définie à une session — un début, une fin, et idéalement un rythme de travail et de repos. Un bloqueur donne du mordant à cette forme en supprimant la tentation de remplir la partie « travail » par autre chose. Aucun des deux seuls ne résout le véritable problème de rester concentré sur une période donnée ; ensemble, ils y parviennent.</p>

<h2>Minuteur et blocage dans une seule session</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> combine un minuteur de concentration avec le blocage de sites web et d'applications dans une seule session, de sorte que démarrer le chronomètre et activer le blocage sont la même action.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Focus timer with website blocking built in on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Réglez une durée, tout démarre ensemble</h3>
<p>Choisissez combien de temps vous voulez vous concentrer depuis la barre de menus, et les blocages de sites web et d'applications s'activent exactement pour cette fenêtre. Pas d'application séparée à lancer pour la partie minuteur.</p>

<h3>Des intervalles Pomodoro intégrés</h3>
<p>Pour des cycles travail-repos structurés, le mode Pomodoro exécute le blocage en synchronisation avec les intervalles de travail et le lève automatiquement pendant les pauses, de sorte que vous n'avez pas à réactiver manuellement le bloqueur toutes les 25 minutes.</p>

<h3>Les statistiques lient le tout ensemble</h3>
<p>Comme le minuteur et le blocage forment une seule session, les statistiques quotidiennes reflètent du temps de concentration réel et protégé — pas juste du temps pendant lequel le minuteur tournait avec des distractions encore à un changement d'onglet.</p>

<p>Une seule session, minuteur et blocage réunis. <a href="https://apps.apple.com/app/lockin/id6802325423">Téléchargez Lock In! sur le Mac App Store</a></p>
`,
  },

  "mac-productivity-apps-for-adhd": {
    slug: "mac-productivity-apps-for-adhd",
    title: "Applications de productivité Mac pour le TDAH — bloquer les distractions automatiquement",
    description:
      "Les conseils de productivité standard supposent souvent que vous vous souviendrez d'éviter les distractions. Pour un cerveau TDAH, la solution la plus fiable est de supprimer totalement l'option.",
    date: "2026-09-06",
    readTime: "5 min de lecture",
    content: `
<p>Beaucoup de conseils de productivité se résument à « soyez juste plus discipliné pour ne pas consulter ce site ». Pour un cerveau TDAH, ce conseil se méprend sur le problème. Ce n'est pas un manque de discernement — c'est que le contrôle des impulsions et la mémoire de travail rendent « se souvenir de ne pas le faire » un mécanisme peu fiable sur le moment, peu importe à quel point l'intention était claire cinq minutes plus tôt.</p>

<p>Ce qui tend à mieux fonctionner, ce n'est pas plus de volonté, c'est structurel : supprimer l'option pour qu'il n'y ait rien à résister en premier lieu. Si un site ou une application distrayante n'est tout simplement pas accessible, l'impulsion n'a nulle part où aller.</p>

<h2>Pourquoi la suppression bat les rappels</h2>
<p>Les nudges basés sur des notifications et les rappels doux supposent que vous les remarquerez et agirez en conséquence sur le moment — ce qui est précisément le mécanisme souvent moins fiable pour le TDAH. Un blocage strict ne repose pas du tout sur ce mécanisme. Il n'y a pas de rappel à manquer, pas de notification à balayer sans la lire. Le site est soit accessible, soit il ne l'est pas, et ce binaire est beaucoup plus facile à gérer qu'un système qui dépend du fait de se surprendre soi-même.</p>

<h2>Un blocage automatique, pas une volonté manuelle</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> bloque automatiquement les sites web et applications distrayants dès qu'une session démarre, supprimant le besoin de remarquer une distraction et de choisir de ne pas s'y engager sur le moment.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Automatic distraction blocking on Mac for ADHD focus" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Un clic pour démarrer, puis c'est automatique</h3>
<p>Démarrer une session depuis la barre de menus est une seule action peu exigeante. Après cela, le blocage fonctionne tout seul — aucune décision continue requise pour le maintenir actif, ce qui compte quand la prise de décision soutenue est la partie difficile.</p>

<h3>Le Mode strict supprime l'échappatoire</h3>
<p>L'impulsivité peut rendre « je vais juste le désactiver une seconde » anodin sur le moment, même quand cela anéantit tout l'intérêt de la démarche. Le Mode strict supprime cette option jusqu'à la fin de la minuterie, de sorte qu'il n'y a pas de petite action disponible pour annuler toute la session.</p>

<h3>Pomodoro pour une structure externe</h3>
<p>Des intervalles travail-repos intégrés fournissent une structure temporelle externe, ce qui peut être plus facile à suivre que le temps auto-surveillé quand la perception interne du temps n'est pas fiable.</p>

<h3>Les préréglages suppriment la friction de configuration</h3>
<p>Les préréglages Réseaux sociaux, Divertissement, Actualités et Achats en ligne signifient que vous n'avez pas à construire une liste de blocage depuis zéro avant de pouvoir démarrer — une tâche qui peut elle-même devenir un point de procrastination.</p>

<p>Supprimez l'option, pas seulement le rappel. <a href="https://apps.apple.com/app/lockin/id6802325423">Téléchargez Lock In! sur le Mac App Store</a></p>
`,
  },

  "schedule-website-blocking-mac": {
    slug: "schedule-website-blocking-mac",
    title: "Comment programmer le blocage de sites web sur Mac",
    description:
      "Démarrer manuellement un bloqueur chaque matin est une chose de plus à se rappeler, et les jours où vous oubliez sont généralement ceux où vous en aviez le plus besoin. Voici comment automatiser cela.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Un bloqueur de sites web n'aide que les jours où vous vous souvenez de l'activer. Si démarrer une session est une étape manuelle en début de journée de travail, les matins où vous êtes pressé, distrait, ou déjà en retard — précisément les matins où un bloqueur aiderait le plus — sont aussi les matins où vous êtes le plus susceptible de le sauter entièrement.</p>

<p>La solution est d'arrêter de compter sur votre mémoire. Un planning récurrent démarre le blocage pour vous, de sorte que l'habitude ne dépend pas de votre état d'esprit à 9h.</p>

<h2>Pourquoi les démarrages manuels échouent discrètement</h2>
<p>Personne ne décide d'arrêter d'utiliser un bloqueur d'un coup — cela s'estompe simplement. Un matin chargé, vous le sautez « juste cette fois », et une fois que le schéma de sauter commence, il est facile de continuer à sauter sans jamais prendre de décision délibérée dans un sens ou dans l'autre. Quelques semaines plus tard, vous ne l'utilisez plus du tout, sans avoir jamais choisi d'arrêter.</p>

<h2>Le programmer pour ne pas avoir à s'en souvenir</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> prend en charge les sessions de concentration récurrentes sur Mac, de sorte que votre blocage de sites web et d'applications peut démarrer automatiquement à des heures définies plutôt que de dépendre de votre mémoire chaque matin.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Scheduled website blocking sessions on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Réglez-le une fois pour vos heures de travail</h3>
<p>Configurez une session récurrente pour votre créneau de travail habituel — disons, de 9h à 13h en semaine — et le blocage s'active selon le planning sans aucune configuration quotidienne de votre part.</p>

<h3>De la cohérence sans dépendre de la mémoire</h3>
<p>Comme le planning fonctionne indépendamment de votre état d'esprit du matin, un début de journée pressé ou distrait ne signifie pas que le blocage sera sauté. Le système fait ce que votre mémoire pourrait ne pas faire.</p>

<h3>Ajustez sans perdre l'habitude</h3>
<p>Les réunions et exceptions arrivent — vous pouvez toujours démarrer une session non programmée ou en terminer une prématurément si réellement nécessaire, sans abandonner le planning récurrent pour tous les autres jours.</p>

<h3>Les statistiques montrent si le planning tient</h3>
<p>Le graphique de statistiques quotidiennes facilite la vérification que les sessions programmées s'exécutent réellement de manière cohérente, afin que vous repériez une habitude qui glisse avant qu'elle ne devienne oubliée.</p>

<p>Configurez-le une fois, laissez-le tourner chaque jour ensuite. <a href="https://apps.apple.com/app/lockin/id6802325423">Téléchargez Lock In! sur le Mac App Store</a></p>
`,
  },
};
