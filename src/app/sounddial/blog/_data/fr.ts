import type { ArticleSet } from "./index";

export const frArticles: ArticleSet = {
  "mac-audio-podcasting-setup": {
    slug: "mac-audio-podcasting-setup",
    title: "Audio Mac pour le podcast : contrôler ce que vous entendez pendant l'enregistrement",
    description:
      "Enregistrer un podcast tout en surveillant les niveaux, entendre votre invité et gérer les notifications — le tout via un seul curseur de volume. Voici un meilleur setup.",
    date: "2026-03-05",
    readTime: "5 min read",
    content: `
<p>Vous enregistrez un podcast sur votre Mac. Vous devez entendre votre invité (via Zoom, Riverside ou SquadCast) clairement. Vous devez surveiller les niveaux d'enregistrement de votre DAW. Vous devez couper le son de Slack pour qu'aucun ping ne se retrouve dans l'enregistrement. Et les sons de notification système doivent être complètement silencieux — un « ding » macOS en plein milieu d'une interview ruine l'audio.</p>

<p>macOS vous donne un seul curseur de volume pour tout cela. Ce n'est pas suffisant.</p>

<h2>Le défi audio du podcast sur Mac</h2>

<p>Pendant une session d'enregistrement de podcast, vous avez généralement :</p>
<ul>
  <li><strong>Application de communication</strong> (Zoom, Riverside, SquadCast) — audio de l'invité, doit être clair</li>
  <li><strong>DAW / application d'enregistrement</strong> (Logic, GarageBand, Audacity, Hindenburg) — surveiller vos propres niveaux</li>
  <li><strong>Sources de notifications</strong> (Slack, Mail, Calendrier, Messages) — doivent être complètement silencieuses pendant l'enregistrement</li>
  <li><strong>Navigateur</strong> — peut avoir des notes d'émission, des onglets de recherche ou un minuteur en cours</li>
</ul>

<p>Tout cela au même volume, c'est le chaos. Votre invité est en concurrence avec les sons système. Une notification Slack pourrait ruiner une prise. Et si vous devez ajuster le volume de votre invité, changer le volume système modifie aussi vos niveaux de monitoring.</p>

<h2>Le contournement habituel</h2>

<p>La plupart des podcasteurs utilisent une combinaison de :</p>
<ul>
  <li>Mode concentration (Ne pas déranger) pour supprimer les notifications</li>
  <li>Fermer manuellement Slack, Mail et autres applications bruyantes avant l'enregistrement</li>
  <li>Ajuster le volume interne de l'application de communication pour l'invité</li>
</ul>

<p>Cela fonctionne, mais c'est sujet aux erreurs. Oubliez d'activer le mode Ne pas déranger et une notification ruine votre prise. Oubliez de fermer Slack et un appel arrive. Et vous ne pouvez toujours pas contrôler indépendamment le volume de votre invité par rapport à vos niveaux de monitoring.</p>

<h2>Audio par application pour le podcast</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> vous permet de créer un environnement d'enregistrement propre en contrôlant chaque application indépendamment :</p>

<img src="/apps/sounddial.png" alt="Configuration podcast SoundDial — audio de l'invité, monitoring et notifications à des niveaux indépendants" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Profil d'enregistrement</h3>
<ul>
  <li><strong>Zoom / Riverside :</strong> 80-100 % — audio de l'invité clair</li>
  <li><strong>Logic / GarageBand :</strong> 60 % — monitoring confortable sans fatigue</li>
  <li><strong>Slack :</strong> coupé — zéro son de notification</li>
  <li><strong>Mail :</strong> coupé</li>
  <li><strong>Messages :</strong> coupé</li>
  <li><strong>Calendrier :</strong> coupé</li>
  <li><strong>Navigateur :</strong> coupé — pas de lecture automatique surprise</li>
</ul>

<p>Enregistrez cela comme profil « Enregistrement ». Avant d'appuyer sur enregistrer, appliquez le profil en un clic. Chaque source de notification est coupée, votre invité est à plein volume et votre monitoring est à un niveau confortable.</p>

<h3>Profil de montage</h3>
<ul>
  <li><strong>Logic / Hindenburg :</strong> 100 % — monitoring complet pour le montage</li>
  <li><strong>Spotify :</strong> coupé — pas de confusion de référence</li>
  <li><strong>Slack :</strong> 20 % — notifications discrètes pendant les pauses</li>
  <li><strong>Navigateur :</strong> 40 % — pour les notes d'émission et la recherche</li>
</ul>

<p>Deux profils, deux clics, deux environnements audio complètement différents. Pas de fermeture et réouverture manuelle des applications. Pas d'oubli de réactiver les notifications après l'enregistrement.</p>

  <p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenir SoundDial sur le Mac App Store</a> — achat unique à 14,99 €, sans abonnement, macOS 14.2+.</p>
`,
  },
  "mac-too-loud-full-volume-tame-it": {
    slug: "mac-too-loud-full-volume-tame-it",
    title: "Pourquoi mon Mac est-il si fort à plein volume ? Comment obtenir un contrôle plus précis",
    description:
      "Les haut-parleurs du MacBook Pro sont excellents — jusqu'à ce qu'ils explosent. Si même des réglages de volume modérés semblent trop forts, voici comment obtenir un contrôle audio plus précis.",
    date: "2026-03-08",
    readTime: "4 min read",
    content: `
<p>Les nouveaux modèles de MacBook Pro d'Apple (14" et 16") ont des haut-parleurs remarquablement puissants pour un ordinateur portable. Tellement puissants que des niveaux de volume modérés peuvent être véritablement forts — surtout dans une pièce calme, tard le soir ou avec des écouteurs. L'écart entre « confortable » et « trop fort » n'est parfois que d'un ou deux crans de volume.</p>

<h2>Pourquoi les crans de volume semblent trop grossiers</h2>

<p>macOS dispose de <strong>16 crans de volume</strong> via le clavier. Chaque cran représente environ 6,25 % de la plage totale. Sur des haut-parleurs puissants ou des écouteurs sensibles, un seul cran peut représenter un changement de volume perçu significatif — passant de « parfait » à « trop fort » avec une simple pression de touche.</p>

<h2>Solution intégrée : volume au quart de cran</h2>

<p>Maintenez <strong>Option + Maj</strong> et appuyez sur volume +/-. Chaque pression ajuste d'un quart d'un cran normal, vous donnant <strong>64 niveaux</strong> au lieu de 16. Ce contrôle 4 fois plus fin facilite grandement la recherche du volume exact, surtout avec des haut-parleurs puissants ou des écouteurs.</p>

<p>C'est l'astuce audio Mac la plus utile que la plupart des gens ne connaissent pas.</p>

<h2>Le problème plus profond : un curseur pour tout</h2>

<p>Même avec 64 niveaux, vous avez toujours un seul curseur contrôlant chaque application. Si vous réglez le volume suffisamment bas pour des sons de notification confortables, votre musique peut être trop douce. Si vous le réglez pour la musique, un ping de notification peut vous faire sursauter.</p>

<p>Le vrai problème est que différentes sources audio ont besoin de volumes différents. Les notifications devraient être discrètes. La musique devrait être présente. Les appels devraient être clairs. La vidéo du navigateur devrait être modérée. Un seul curseur ne peut pas bien servir tout cela.</p>

<h2>Volume par application pour un contrôle précis</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> donne à chaque application son propre curseur de volume avec des <strong>incréments de 1 %</strong> de 0 % à 200 %. C'est 200 niveaux de précision par application, contre les 16 (ou 64 avec le modificateur) crans système de macOS.</p>

<img src="/apps/sounddial.png" alt="Contrôle de volume par application SoundDial avec une précision de 1 % sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Réglez votre volume système à un niveau de base modéré (50-60 %), puis utilisez SoundDial pour affiner chaque application :</p>
<ul>
  <li><strong>Spotify :</strong> 35 % — niveau d'arrière-plan confortable</li>
  <li><strong>Slack :</strong> 12 % — ping de notification discret</li>
  <li><strong>Zoom :</strong> 85 % — audio d'appel clair sans être accablant</li>
  <li><strong>Safari :</strong> 45 % — lecture vidéo modérée</li>
</ul>

<p>Ainsi, aucune source audio n'est jamais « trop forte ». Chacune est réglée indépendamment à son niveau idéal. Un ping Slack à 12 % est à peine perceptible, tandis que votre appel Zoom à 85 % est cristallin — le tout au même réglage de volume système.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenir SoundDial sur le Mac App Store</a> — achat unique à 14,99 €, sans abonnement, macOS 14.2+.</p>
`,
  },
  "slack-huddle-volume-issues-mac": {
    slug: "slack-huddle-volume-issues-mac",
    title: "Problèmes de volume Slack Huddle sur Mac : trop silencieux, trop fort ou en conflit avec votre musique",
    description:
      "Les huddles Slack sont en compétition avec votre musique et vos notifications pour le même volume. Voici comment contrôler l'audio des huddles indépendamment de tout le reste sur Mac.",
    date: "2026-03-10",
    readTime: "5 min read",
    content: `
<p>Les huddles Slack sont pratiques — vous cliquez sur un bouton et vous êtes dans un appel vocal sans planifier de réunion. Mais l'audio est un désastre. Le huddle est au même volume que votre Spotify. Les sons de notification Slack sonnent au même niveau que l'appel. Et quand quelqu'un partage de la musique ou un écran avec audio dans le huddle, c'est soit inaudible, soit assourdissant.</p>

<p>Le problème n'est pas Slack. C'est macOS. Tout passe par un seul curseur de volume, donc l'audio du huddle, les sons de notification, la musique et l'audio du navigateur se disputent tous le même espace.</p>

<h2>Les contrôles audio internes de Slack</h2>

<p>Slack dispose de contrôles audio limités :</p>
<ul>
  <li><strong>Préférences de notification :</strong> Slack → Réglages → Notifications → Son et apparence. Vous pouvez changer le son de notification ou désactiver des sons spécifiques, mais vous ne pouvez pas régler le volume de notification indépendamment du volume du huddle.</li>
  <li><strong>Volume du huddle :</strong> Pendant un huddle, il n'y a pas de curseur de volume séparé pour l'appel versus les autres sons de Slack. Tout dans Slack est un seul flux audio pour macOS.</li>
  <li><strong>Périphérique d'entrée/sortie :</strong> Slack → Réglages → Audio et vidéo vous permet de sélectionner les périphériques micro et haut-parleur, mais pas les niveaux de volume par fonctionnalité.</li>
</ul>

<h2>Les trois problèmes audio de Slack</h2>

<h3>1. Huddle trop silencieux par rapport à la musique</h3>
<p>Votre musique est à un niveau confortable. Vous rejoignez un huddle. La voix de votre collègue est au même volume que votre musique — vous ne pouvez pas distinguer les mots clairement. Augmenter le volume système rend la musique trop forte.</p>

<h3>2. Sons de notification pendant les huddles</h3>
<p>Vous êtes dans une discussion en huddle. Chaque message Slack entrant sonne au même volume que l'appel. Dans un espace de travail actif avec des canaux animés, le ping constant rend le huddle inutilisable.</p>

<h3>3. Huddle trop fort pour l'écoute en arrière-plan</h3>
<p>Parfois vous rejoignez un huddle pour écouter passivement pendant que vous travaillez. Vous le voulez à un niveau d'arrière-plan — assez silencieux pour ne pas distraire, assez fort pour entendre si quelqu'un dit votre nom. macOS ne vous permet pas de régler Slack à 20 % tout en gardant votre navigateur à 60 %.</p>

<h2>La solution : contrôler le volume de Slack indépendamment</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> donne à Slack son propre curseur de volume, séparé de chaque autre application. Puisque l'audio du huddle et les sons de notification de Slack font partie de la même application, le curseur contrôle les deux — mais c'est en fait ce que vous voulez la plupart du temps.</p>

<img src="/apps/sounddial.png" alt="SoundDial contrôlant le volume Slack indépendamment pendant un huddle tandis que la musique joue à un niveau différent" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Configuration optimisée pour le huddle</h3>
<ul>
  <li><strong>Slack :</strong> 90-100 % (audio du huddle clair, les notifications sont fortes mais vous êtes actif dans Slack)</li>
  <li><strong>Spotify :</strong> 15 % (arrière-plan à peine perceptible, ne concurrence pas les voix)</li>
  <li><strong>Navigateur :</strong> coupé (pas d'audio surprenant depuis un onglet)</li>
</ul>

<h3>Configuration huddle passif</h3>
<ul>
  <li><strong>Slack :</strong> 30 % (niveau d'écoute en arrière-plan)</li>
  <li><strong>Spotify :</strong> 40 % (l'audio principal est votre musique)</li>
  <li><strong>Navigateur :</strong> 50 % (niveau de travail normal)</li>
</ul>

<p>Enregistrez chacun comme profil. Quand un huddle commence, appliquez le bon profil en un clic. Ou utilisez le <strong>ducking automatique</strong> — quand le huddle active votre microphone, SoundDial abaisse automatiquement tout sauf Slack.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenir SoundDial sur le Mac App Store</a> — achat unique à 14,99 €, sans abonnement, macOS 14.2+.</p>
`,
  },
  "set-default-volume-new-apps-mac": {
    slug: "set-default-volume-new-apps-mac",
    title: "Comment définir un volume par défaut pour les nouvelles applications sur Mac",
    description:
      "Les nouvelles applications se lancent à plein volume par défaut. Voici comment faire démarrer chaque nouvelle application à un niveau confortable — pour ne plus jamais être surpris.",
    date: "2026-03-12",
    readTime: "3 min read",
    content: `
<p>Vous installez une nouvelle application. Elle se lance pour la première fois. Elle joue immédiatement de l'audio — un son d'intro, une notification, une vidéo tutoriel — à plein volume système. Vous ne vous y attendiez pas. Vos écouteurs sont sur. Vos oreilles sifflent.</p>

<p>macOS n'a pas de concept de « volume par défaut pour les nouvelles applications » parce que macOS n'a pas de volume par application. Chaque application obtient le volume système, et le volume système est ce que vous avez réglé en dernier. Les nouvelles applications ne bénéficient pas d'un traitement spécial — elles explosent simplement au niveau de tout le reste.</p>

<h2>Pourquoi c'est un problème</h2>

<p>Quand vous lancez une application pour la première fois, vous n'avez aucune idée de son volume. Certaines applications jouent des sons immédiatement (tutoriels d'intégration, sons de notification, vidéos de bienvenue). Si votre volume système est à 80 % parce que vous écoutiez de la musique, le son de cette nouvelle application est aussi à 80 % — ce qui peut être bien trop fort pour une source audio inattendue.</p>

<p>C'est particulièrement saisissant avec :</p>
<ul>
  <li>Les applications de communication (Slack, Teams) qui jouent un son de démarrage</li>
  <li>Les applications avec des tutoriels vidéo au premier lancement</li>
  <li>Les jeux qui diffusent immédiatement de la musique d'écran titre</li>
  <li>Les applications basées sur le navigateur qui lisent automatiquement du contenu</li>
</ul>

<h2>La solution : volume par défaut pour les nouvelles applications</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> dispose d'un <strong>volume par défaut configurable</strong> pour les nouvelles applications. Dans les réglages, vous définissez le niveau de volume auquel les applications nouvellement détectées doivent démarrer — par exemple 70 %. La première fois qu'une application se lance et produit de l'audio, SoundDial la règle à 70 % au lieu de 100 %.</p>

<img src="/apps/sounddial.png" alt="Réglage du volume par défaut SoundDial — les nouvelles applications démarrent à un niveau configuré plutôt qu'à plein volume" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Cela signifie :</p>
<ul>
  <li>Plus d'audio à plein volume surprise provenant des applications nouvellement installées</li>
  <li>Chaque nouvelle application démarre à un niveau confortable et prévisible</li>
  <li>Vous pouvez ensuite l'ajuster à la hausse ou à la baisse selon vos besoins</li>
  <li>Une fois ajustée, la fonctionnalité de <strong>mémoire de volume</strong> mémorise le niveau de cette application pour les lancements futurs</li>
</ul>

<p>C'est une petite fonctionnalité, mais elle résout un vrai désagrément quotidien — la « surprise à plein volume d'une nouvelle application » qui prend tout le monde par surprise au moins une fois.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenir SoundDial sur le Mac App Store</a> — achat unique à 14,99 €, sans abonnement, macOS 14.2+.</p>
`,
  },
  "mac-startup-sound-too-loud": {
    slug: "mac-startup-sound-too-loud",
    title: "Son de démarrage Mac trop fort ? Comment le désactiver ou le baisser",
    description:
      "Le carillon de démarrage du Mac explose à plein volume à chaque redémarrage — particulièrement gênant en réunion et dans les pièces silencieuses. Voici comment le silencer ou le contrôler.",
    date: "2026-03-15",
    readTime: "4 min read",
    content: `
<p>Vous redémarrez votre Mac dans un bureau calme. La salle de réunion est dans un silence absolu. Puis — <em>BONG</em> — le carillon de démarrage explose à plein volume. Tout le monde vous regarde. Le carillon est emblématique, mais il est aussi incontrôlable et souvent embarrassant de loudeur.</p>

<h2>Comment désactiver le son de démarrage</h2>

<p>macOS vous permet de désactiver complètement le carillon de démarrage :</p>

<ol>
  <li>Allez dans <strong>Réglages Système → Son</strong></li>
  <li>Trouvez <strong>« Lire le son au démarrage »</strong></li>
  <li>Décochez-le</li>
</ol>

<p>Terminé. Votre Mac démarrera silencieusement désormais. Pas de commandes Terminal nécessaires — ce réglage est disponible depuis macOS Big Sur.</p>

<h3>Méthode Terminal (si vous préférez)</h3>
<p>Vous pouvez aussi le désactiver via Terminal :</p>
<p><code>sudo nvram StartupMute=%01</code></p>
<p>Pour le réactiver :</p>
<p><code>sudo nvram StartupMute=%00</code></p>

<h2>Peut-on baisser le son de démarrage plutôt que le désactiver ?</h2>

<p>Pas directement. Le carillon de démarrage joue à un volume fixe déterminé par le volume système au moment de l'extinction. Si votre Mac était à 80 % lors de l'extinction, le carillon joue à environ 80 %. S'il était à 20 %, le carillon est plus silencieux.</p>

<p><strong>Solution de contournement :</strong> Avant de redémarrer votre Mac, baissez le volume système à 10-20 %. Le carillon de démarrage jouera à ce niveau plus bas. Pas idéal — cela demande de s'en souvenir — mais ça fonctionne si vous voulez le carillon à un volume raisonnable plutôt que silencieux.</p>

<h2>Le problème plus large du contrôle audio Mac</h2>

<p>Le carillon de démarrage n'est qu'un exemple du contrôle audio limité de macOS. Les sons système, les sons de notification et l'audio des applications sont tous mélangés ensemble avec un contrôle indépendant minimal. Si vous vous retrouvez régulièrement à ajuster le volume pour gérer différentes sources audio tout au long de la journée, le contrôle de volume par application résout le problème plus général.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> donne à chaque application de votre Mac son propre curseur de volume. Réglez les applications de notification au minimum, la musique à un niveau confortable et les appels à plein volume — le tout indépendamment. Enregistrez des configurations comme profils et basculez en un clic.</p>

<img src="/apps/sounddial.png" alt="SoundDial — contrôle de volume par application pour gérer toutes les sources audio Mac indépendamment" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenir SoundDial sur le Mac App Store</a> — achat unique à 14,99 €, sans abonnement, macOS 14.2+.</p>
`,
  },
  "webex-volume-too-low-mac": {
    slug: "webex-volume-too-low-mac",
    title: "Volume Cisco Webex trop faible sur Mac ? Comment le corriger",
    description:
      "Les appels Webex sont à peine audibles sur votre Mac. Voici toutes les solutions — des réglages audio Webex à l'amplification du volume d'appel au-delà de 100 % avec un mixeur par application.",
    date: "2026-03-18",
    readTime: "5 min read",
    content: `
<p>Webex est l'un des outils de vidéoconférence les plus utilisés en environnement d'entreprise — et l'un des plus critiqués pour la qualité audio sur Mac. Volume d'appel faible, voix étouffées et audio qui semble plus silencieux que Zoom ou Teams au même volume système. Si vous pouvez à peine entendre vos appels Webex, vous n'êtes pas seul.</p>

<h2>1. Vérifiez les réglages audio de Webex</h2>

<p>Pendant une réunion Webex, cliquez sur le menu audio (icône haut-parleur ou trois points → Réglages audio) :</p>
<ul>
  <li>Assurez-vous que le bon périphérique <strong>Haut-parleur</strong> est sélectionné</li>
  <li>Faites glisser le curseur de volume du haut-parleur au maximum</li>
  <li>Cliquez sur « Tester » pour lire un son de test et vérifier la sortie</li>
  <li>Vérifiez si le « Mode musique » est activé — désactivez-le sauf si vous présentez spécifiquement de la musique</li>
  <li>Vérifiez les paramètres de suppression du bruit — « Supprimer le bruit de fond » en mode agressif peut réduire le volume vocal perçu</li>
</ul>

<h2>2. Vérifiez la sortie macOS</h2>

<p>Réglages Système → Son → Sortie. Vérifiez que le bon périphérique est sélectionné et que le volume est au maximum. Après une mise à jour macOS ou un changement de périphérique, Webex pourrait utiliser une sortie inattendue.</p>

<h2>3. Problème de codec Bluetooth</h2>

<p>Vous utilisez des AirPods ou des écouteurs Bluetooth ? L'activation du microphone par Webex force le passage du codec AAC au SCO, réduisant la qualité audio et le volume. Utilisez un microphone séparé (micro intégré du Mac ou USB) et gardez les écouteurs Bluetooth uniquement en sortie.</p>

<h2>4. Traitement audio spécifique à Webex</h2>

<p>Webex dispose d'un traitement audio agressif qui peut réduire le volume apparent des participants à l'appel. Essayez ces réglages Webex :</p>
<ul>
  <li>Réglez la suppression du bruit sur « Faible » plutôt que « Élevé »</li>
  <li>Désactivez « Optimiser pour ma voix » si activé</li>
  <li>Essayez de passer de « Audio informatique » à un périphérique spécifique</li>
</ul>

<h2>5. Le problème IT/admin</h2>

<p>Dans les environnements d'entreprise, Webex est souvent géré par l'IT avec des politiques audio spécifiques. Certains paramètres peuvent être verrouillés ou préconfigurés. Si les correctifs de base ne fonctionnent pas, consultez votre département IT sur les politiques audio Webex.</p>

<h2>6. Amplifier Webex au-delà de 100 %</h2>

<p>Si les paramètres sont au maximum et que les participants sont encore trop silencieux, <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> vous permet d'amplifier Webex jusqu'à <strong>200 %</strong>. Cela amplifie l'audio de l'appel au-delà du maximum intégré de Webex — utile quand un participant a un mauvais micro ou quand le traitement audio de Webex réduit trop le signal.</p>

<img src="/apps/sounddial.png" alt="SoundDial amplifiant le volume d'appel Cisco Webex au-delà de 100 % sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial aide aussi lors de réunions Webex consécutives : utilisez le ducking automatique pour baisser automatiquement votre musique de fond quand chaque réunion commence, et la restaurer pendant les pauses. Enregistrez un profil de volume « Réunions » pour définir instantanément votre équilibre audio préféré pour la journée de travail.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenir SoundDial sur le Mac App Store</a> — achat unique à 14,99 €, sans abonnement, macOS 14.2+.</p>
`,
  },
  "mac-two-audio-sources-same-time": {
    slug: "mac-two-audio-sources-same-time",
    title: "Comment écouter deux choses à la fois sur Mac sans devenir fou",
    description:
      "Musique et podcast. Une conférence et une vidéo de notes. Un appel et de la musique de fond. macOS vous oblige à choisir un seul volume pour les deux — voici comment les équilibrer.",
    date: "2026-03-20",
    readTime: "4 min read",
    content: `
<p>Vous voulez écouter deux sources audio en même temps. De la musique pendant un appel. Un podcast pendant un tutoriel. Une ambiance de fond pendant que vous étudiez. Deux choses, deux volumes idéaux différents. macOS vous donne un seul curseur pour les deux.</p>

<p>C'est la limitation audio fondamentale de macOS : chaque application partage un seul volume. Vous ne pouvez pas dire « celle-ci à 30 %, celle-là à 80 % ». C'est tout au même niveau, ou rien.</p>

<h2>Quand vous avez vraiment besoin de deux sources audio</h2>

<p>Ce n'est pas un cas particulier. C'est comme la plupart des gens utilisent leurs ordinateurs :</p>

<ul>
  <li><strong>Musique + appel vidéo</strong> — le plus courant. Musique de fond pendant une réunion Zoom, mais assez silencieuse pour entendre les collègues.</li>
  <li><strong>Conférence + matériel de référence</strong> — un étudiant regardant une conférence enregistrée tout en regardant occasionnellement un tutoriel YouTube pour le contexte.</li>
  <li><strong>Podcast + sons ambiants</strong> — écouter un podcast pendant qu'une application de bruit blanc ou de pluie joue doucement.</li>
  <li><strong>Deux onglets de navigateur</strong> — une vidéo de formation dans un onglet et une démo dans un autre, à des volumes différents.</li>
  <li><strong>Jeu + chat vocal</strong> — audio du jeu pour l'immersion, Discord pour la communication.</li>
</ul>

<p>Dans chaque cas, une source est « principale » (plus forte, plus importante) et l'autre est « secondaire » (plus silencieuse, de soutien). Le rapport idéal est différent pour chaque combinaison, et il change tout au long de la journée.</p>

<h2>La limitation de macOS</h2>

<p>macOS a un seul curseur de volume. Appuyez sur la touche volume et tout change également. Si vous réglez le volume pour une écoute confortable de podcast, l'application de pluie est aussi à ce niveau — soit trop forte (distrayante), soit vous ne l'avez pas ajustée dans sa propre application (si elle en a un contrôle de volume).</p>

<p>Certaines applications ont des curseurs de volume internes (Spotify, VLC), mais la plupart n'en ont pas. Et même quand ils existent, passer d'une application à l'autre pour ajuster deux contrôles de volume séparés est maladroit et lent.</p>

<h2>La solution : volume par application dans un seul panneau</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> place chaque application dans un panneau de barre de menu unique avec des curseurs de volume indépendants. Les deux sources audio, côte à côte, chacune avec son propre niveau. Ajustez l'une sans toucher à l'autre.</p>

<img src="/apps/sounddial.png" alt="SoundDial affichant deux sources audio à des niveaux de volume différents sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Exemples de configurations :</p>

<p><strong>Musique + appel Zoom :</strong></p>
<ul>
  <li>Zoom : 100 % | Spotify : 20 %</li>
</ul>

<p><strong>Podcast + sons de pluie :</strong></p>
<ul>
  <li>Application podcast : 70 % | Application pluie : 15 %</li>
</ul>

<p><strong>Conférence + tutoriel YouTube :</strong></p>
<ul>
  <li>Zoom (conférence) : 90 % | Chrome (YouTube) : 40 %</li>
</ul>

<p>Chaque combinaison est un équilibre différent. Enregistrez celles que vous utilisez régulièrement comme <strong>profils de volume</strong> et basculez en un clic. Le ducking automatique gère le scénario musique+appel automatiquement — quand un appel commence, la musique descend à votre niveau configuré sans que vous touchiez à quoi que ce soit.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenir SoundDial sur le Mac App Store</a> — achat unique à 14,99 €, sans abonnement, macOS 14.2+.</p>
`,
  },
  "watch-movies-mac-late-night-volume": {
    slug: "watch-movies-mac-late-night-volume",
    title: "Comment regarder des films sur Mac sans réveiller tout le monde",
    description:
      "Les dialogues sont inaudibles, puis les explosions font trembler les murs. Voici comment maîtriser l'audio des films pour regarder tard le soir sur Mac — sans manquer un mot.",
    date: "2026-03-22",
    readTime: "5 min read",
    content: `
<p>Il est 1h du matin. Vous regardez un film sur votre MacBook au lit. Les personnages chuchotent — vous montez le volume. Puis une course-poursuite en voiture commence et soudainement tout votre appartement peut l'entendre. Vous vous précipitez sur la touche volume. Ce cycle se répète pendant deux heures.</p>

<p>Le problème est la <strong>plage dynamique</strong> — l'écart entre les moments les plus silencieux et les plus bruyants d'un film. Dans un cinéma avec un système sonore puissant, cette plage crée une expérience immersive. Sur un MacBook à minuit, elle crée un combat constant entre « les dialogues sont inaudibles » et « le voisinage se réveille ».</p>

<h2>Pourquoi les films sont plus forts que la musique ou les podcasts</h2>

<p>La musique est généralement masterisée avec une plage dynamique compressée — la différence entre les parties les plus silencieuses et les plus bruyantes est relativement petite (peut-être 10-15 dB). Les podcasts sont encore plus compressés. Les films, surtout les films d'action, peuvent avoir une plage dynamique de <strong>30-40 dB</strong> — les parties silencieuses sont à peine audibles et les parties fortes sont conçues pour faire vibrer les sièges de cinéma.</p>

<p>Quand vous réglez le volume de votre MacBook pour entendre les dialogues, les scènes d'action sont 100 fois plus fortes en termes de pression sonore. Il n'existe pas de volume système confortable qui fonctionne pour les deux.</p>

<h2>Correctif 1 : Utilisez le mode nuit du service de streaming</h2>

<p>Certains services de streaming ont une fonctionnalité de compression de plage dynamique spécifiquement pour cela :</p>
<ul>
  <li><strong>Netflix :</strong> Recherchez une option « Réduire les sons forts » dans les réglages audio pendant la lecture</li>
  <li><strong>Apple TV+ :</strong> Réglages Système → Accessibilité → « Réduire les sons forts »</li>
  <li><strong>Amazon Prime :</strong> « Boost des dialogues » sur les titres pris en charge</li>
  <li><strong>Disney+ :</strong> Pas de fonctionnalité équivalente actuellement</li>
</ul>

<p>Ces fonctionnalités compriment la plage dynamique pour que les parties silencieuses soient plus fortes et les parties bruyantes plus silencieuses. Le résultat est un audio plus uniforme qui fonctionne à faible volume.</p>

<h2>Correctif 2 : Utilisez des écouteurs</h2>

<p>Les écouteurs résolvent la partie « réveiller tout le monde » — votre audio est privé. Mais ils ne résolvent pas le problème de plage dynamique. Le cycle dialogues-explosions se produit toujours, juste dans vos oreilles. C'est là que le contrôle de volume par application aide : réglez le volume de votre application de streaming précisément pour l'écoute avec écouteurs.</p>

<h2>Correctif 3 : Réglez votre application de streaming à un volume spécifique</h2>

<p>Le vrai problème pour regarder tard le soir est que votre application de streaming, les sons de notification et tout autre audio sont tous au même volume système. Un ping Slack à 2h du matin au même volume que les dialogues du film est une surprise qui arrête le cœur.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> vous permet de créer la configuration parfaite pour la nuit :</p>

<img src="/apps/sounddial.png" alt="Configuration film nocturne SoundDial — application de streaming à volume modéré, notifications coupées" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Profil film nocturne</h3>
<ul>
  <li><strong>Netflix / Apple TV / Disney+ / navigateur :</strong> 40-50 % — niveau de dialogue confortable sans scènes d'action assourdissantes</li>
  <li><strong>Slack :</strong> coupé — pas de pings surprises</li>
  <li><strong>Mail :</strong> coupé</li>
  <li><strong>iMessage :</strong> coupé</li>
  <li><strong>Sons système :</strong> coupé</li>
</ul>

<p>Enregistrez cela comme profil « Nuit ». Quand vous commencez un film nocturne, appliquez le profil en un clic. Chaque source de notification est silencée et votre application de streaming est à un volume contrôlé. Quand vous avez terminé, repassez à votre profil de jour.</p>

<p>Combinez cela avec la fonctionnalité « Réduire les sons forts » du service de streaming pour un effet maximal : le service compresse la plage dynamique, et SoundDial garantit que rien d'autre sur votre Mac ne fait de bruit.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenir SoundDial sur le Mac App Store</a> — achat unique à 14,99 €, sans abonnement, macOS 14.2+.</p>
`,
  },
  "mac-volume-resets-after-sleep": {
    slug: "mac-volume-resets-after-sleep",
    title: "Le volume Mac se réinitialise après la veille ? Comment conserver vos réglages audio",
    description:
      "Chaque fois que votre Mac sort de veille, le volume est mauvais — réinitialisé au maximum, tombé à zéro ou basculé vers la mauvaise sortie. Voici pourquoi et comment y remédier.",
    date: "2026-03-25",
    readTime: "5 min read",
    content: `
<p>Vous fermez le couvercle de votre MacBook. Vous l'ouvrez plus tard. Le volume est différent. Peut-être au maximum alors que vous l'aviez à 40 %. Peut-être qu'il a basculé des écouteurs aux haut-parleurs. Peut-être à zéro. Il était correct avant la veille — maintenant il est mauvais.</p>

<p>La réinitialisation du volume après la veille est un bug macOS persistant qui apparaît sous diverses formes dans différentes versions de macOS. Voici ce qui le cause et comment y faire face.</p>

<h2>Pourquoi ça se produit</h2>

<h3>1. Le périphérique de sortie audio a changé pendant la veille</h3>
<p>Si vos écouteurs Bluetooth étaient connectés avant la veille et se déconnectent pendant la veille du Mac (batterie vide, hors de portée), macOS passe aux haut-parleurs intégrés au réveil. Puisque macOS mémorise le volume par périphérique, le volume change pour ce que les haut-parleurs avaient en dernier — ce qui peut être très différent de votre volume d'écouteurs.</p>

<h3>2. Redémarrage du daemon Core Audio</h3>
<p>Le daemon audio de macOS (coreaudiod) redémarre parfois lors des cycles veille/réveil. Quand il redémarre, il peut s'initialiser avec des niveaux de volume par défaut au lieu de vos derniers réglages. C'est un bug système qu'Apple a partiellement corrigé dans diverses mises à jour mais jamais complètement éliminé.</p>

<h3>3. Reconnexion HDMI/DisplayPort</h3>
<p>Si vous utilisez un écran externe via HDMI ou DisplayPort, fermer et ouvrir le couvercle peut entraîner la déconnexion et reconnexion de l'écran. Certains écrans sont aussi des périphériques de sortie audio, et macOS peut basculer vers ou depuis les haut-parleurs de l'écran pendant ce processus, changeant le volume au passage.</p>

<h3>4. Ré-association Bluetooth</h3>
<p>Quand les périphériques Bluetooth se reconnectent après la veille, la négociation de volume peut résulter en un niveau différent de ce que vous aviez avant. C'est particulièrement courant avec les écouteurs Bluetooth tiers (moins avec les AirPods, qu'Apple a optimisés).</p>

<h2>Solutions</h2>

<h3>Empêcher la déconnexion Bluetooth pendant la veille</h3>
<p>Réglages Système → Bluetooth → Avancé (ou cliquez sur « i » sur votre périphérique). Certains réglages contrôlent si le Bluetooth reste actif pendant la veille. Maintenir la connexion active évite le cycle déconnexion/reconnexion qui réinitialise le volume.</p>

<h3>Désactiver la connexion automatique pour les AirPods</h3>
<p>Réglages Système → Bluetooth → cliquez sur « i » à côté des AirPods → « Se connecter à ce Mac » → réglez sur « Lors de la dernière connexion à ce Mac ». Cela empêche les AirPods de se connecter automatiquement depuis un autre périphérique pendant la veille.</p>

<h3>Définir un périphérique de sortie cohérent</h3>
<p>Après le réveil de la veille, maintenez Option et cliquez sur l'icône Son dans la barre de menu. Sélectionnez votre périphérique de sortie préféré. Faites-le systématiquement et macOS devrait éventuellement « mémoriser » votre préférence.</p>

<h3>Réinitialiser la NVRAM (Macs Intel)</h3>
<p>Si les réinitialisations de volume sont chroniques, réinitialisez la NVRAM : éteignez → allumez en maintenant Option+Commande+P+R pendant 20 secondes. Cela efface les réglages audio stockés et peut résoudre les problèmes de volume persistants.</p>

<h2>Protégez votre équilibre audio avec SoundDial</h2>

<p>Même si le volume système se réinitialise après la veille, <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> protège votre équilibre de volume <em>par application</em>. Sa fonctionnalité de <strong>mémoire de volume</strong> sauvegarde le volume de chaque application indépendamment et le restaure après le réveil, le redémarrage ou le relancement de l'application.</p>

<img src="/apps/sounddial.png" alt="SoundDial préservant les niveaux de volume par application après les cycles veille/réveil du Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Donc même si macOS réinitialise le volume système à 80 % après la veille, votre équilibre par application reste intact :</p>
<ul>
  <li>Spotify toujours à 30 % du volume système</li>
  <li>Zoom toujours à 100 %</li>
  <li>Slack toujours coupé</li>
</ul>

<p>Vous devrez peut-être corriger le volume système (un seul ajustement), mais vous n'avez pas besoin de rééquilibrer toutes vos applications (ce qui représenterait six ou sept ajustements). Et avec les <strong>profils de volume</strong>, même la récupération complète n'est qu'un clic.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenir SoundDial sur le Mac App Store</a> — achat unique à 14,99 €, sans abonnement, macOS 14.2+.</p>
`,
  },
  "mac-audio-music-production-daw": {
    slug: "mac-audio-music-production-daw",
    title: "Audio Mac pour la production musicale : contrôler DAW et communication séparément",
    description:
      "Utiliser Logic Pro ou Ableton pendant un appel Discord ? Voici comment entendre votre DAW en pleine fidélité tout en maintenant le chat vocal à un niveau confortable.",
    date: "2026-03-28",
    readTime: "5 min read",
    content: `
<p>Vous produisez de la musique dans Logic Pro (ou Ableton, ou FL Studio). Vous êtes aussi sur Discord avec un collaborateur. Le problème : la sortie de votre DAW et Discord se disputent le même niveau de volume. Augmentez Logic pour entendre clairement votre mix et Discord explose dans vos oreilles. Baissez pour Discord et votre mix est trop silencieux pour être correctement évalué.</p>

<p>C'est un vrai problème pour les producteurs de musique sur Mac car le volume de monitoring affecte directement les décisions de mixage. Si votre DAW est trop silencieux parce que Discord est en concurrence, vous mixerez plus fort que prévu. Si Discord noie les détails, vous manquerez des problèmes dans votre mix.</p>

<h2>Pourquoi cela importe pour la production</h2>

<p>La production musicale nécessite des <strong>niveaux de monitoring précis</strong>. Vous devez entendre votre DAW à un volume cohérent et calibré pour prendre des décisions de mixage fiables. Les applications de communication, les notifications et autres sources audio interfèrent — mais vous devez souvent les faire fonctionner simultanément pour la collaboration à distance.</p>

<p>Les studios professionnels résolvent cela avec des chemins de monitoring séparés et des systèmes de talkback. Sur un ordinateur portable, vous avez besoin de logiciel.</p>

<h2>L'approche interne au DAW</h2>

<p>Vous pourriez utiliser le niveau de monitoring interne de votre DAW pour le maintenir à une sortie cohérente, puis ajuster le volume de Discord en interne. Mais :</p>
<ul>
  <li>Le curseur de volume de sortie de Discord est imprécis et limité à 0-100 %</li>
  <li>Vous ne pouvez toujours pas empêcher les sons système et les notifications d'interférer à des niveaux inattendus</li>
  <li>Si vous avez besoin de référencer une piste dans Spotify ou YouTube, ceux-ci sont aussi au volume système</li>
</ul>

<h2>Volume par application pour la production</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> vous permet de définir des volumes exacts pour chaque application indépendamment :</p>

<img src="/apps/sounddial.png" alt="SoundDial séparant la sortie DAW de Discord et des pistes de référence sur macOS pour la production musicale" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Configuration de production</h3>
<ul>
  <li><strong>Logic Pro / Ableton :</strong> 80-100 % — votre niveau de monitoring principal</li>
  <li><strong>Discord / chat vocal :</strong> 40-60 % — audible mais clairement secondaire à votre mix</li>
  <li><strong>Spotify / pistes de référence :</strong> 80 % — faites correspondre au niveau de votre DAW pour des comparaisons A/B précises</li>
  <li><strong>Slack / notifications :</strong> coupé — zéro interférence pendant la production</li>
  <li><strong>Safari / Chrome :</strong> 50 % — pour regarder des tutoriels sans vous exploser les oreilles</li>
</ul>

<h3>Enregistrez-le comme profil « Production »</h3>
<p>Enregistrez cette configuration et appliquez-la en un clic quand vous vous installez pour produire. Quand vous avez terminé et passez à un usage décontracté, appliquez votre profil « Normal ». Pas de réajustement de huit applications.</p>

<h3>Ducking automatique pour les sessions à distance</h3>
<p>Si vous êtes en appel avec un collaborateur, le ducking automatique de SoundDial peut baisser les applications non-communication quand le micro est actif. Mais pour la production, vous voudrez peut-être <em>désactiver</em> le ducking automatique — vous avez besoin de votre DAW à des niveaux cohérents que vous parliez ou non. La bascule est un clic dans les réglages.</p>

<h2>Une note sur la latence</h2>

<p>SoundDial utilise l'API Core Audio Tap d'Apple pour le contrôle de volume. Le traitement ajoute une latence négligeable — imperceptible à des fins de monitoring. Si vous enregistrez et surveillez via votre DAW avec le monitoring direct activé, SoundDial n'interfère pas avec le chemin audio de votre DAW. Il ajuste uniquement le niveau de sortie qui atteint vos haut-parleurs/écouteurs.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenir SoundDial sur le Mac App Store</a> — achat unique à 14,99 €, sans abonnement, macOS 14.2+.</p>
`,
  },
  "apple-music-volume-too-low-mac": {
    slug: "apple-music-volume-too-low-mac",
    title: "Volume Apple Music trop faible sur Mac ? Comment le corriger et l'amplifier",
    description:
      "Apple Music au volume maximum sur votre Mac mais toujours trop silencieux ? Vérifiez Sound Check, les réglages d'égaliseur et apprenez comment amplifier Apple Music au-delà de 100 %.",
    date: "2026-03-30",
    readTime: "5 min read",
    content: `
<p>Apple Music est à plein volume. Votre Mac est à plein volume. Une chanson que vous savez être forte est à peine audible. En passant à Spotify — même chanson, même volume — c'est nettement plus fort. Que se passe-t-il ?</p>

<p>Apple Music dispose de plusieurs réglages qui peuvent réduire le volume de lecture, et ils ne sont pas évidents. Passons en revue chacun d'eux.</p>

<h2>1. Vérifiez Sound Check</h2>

<p>Apple Music dispose d'une fonctionnalité appelée <strong>Sound Check</strong> qui normalise le volume de toutes les pistes pour qu'elles jouent à peu près à la même intensité perçue. Cela évite les sauts de volume saisissants entre les chansons, mais le fait en <em>réduisant</em> le volume des pistes plus fortes — rendant tout plus silencieux dans l'ensemble.</p>

<p>Pour vérifier : Ouvrez l'application Musique → Réglages (⌘,) → Lecture → <strong>Sound Check</strong>.</p>

<p>Si Sound Check est activé, essayez de le désactiver. Les chansons qui étaient réduites pour correspondre aux pistes plus silencieuses joueront maintenant à leur niveau masterisé original — qui est souvent nettement plus fort.</p>

<h2>2. Vérifiez le réglage de l'égaliseur</h2>

<p>Apple Music dispose d'un égaliseur intégré. Certains préréglages d'égaliseur réduisent le volume global pour éviter les écrêtages lors du boost de fréquences spécifiques.</p>

<p>Vérifiez : Application Musique → Réglages → Lecture → <strong>Égaliseur</strong>. Si un préréglage d'égaliseur est sélectionné (surtout « Parole », « Nuit » ou « Petits haut-parleurs »), essayez de le régler sur « Désactivé » et voyez si le volume s'améliore.</p>

<p>L'égaliseur « Nuit » en particulier compresse la plage dynamique — rendant les parties silencieuses plus fortes mais les parties fortes plus silencieuses. Cela peut donner à tout un caractère « plus plat » et plus bas en volume.</p>

<h2>3. Vérifiez les réglages audio Lossless</h2>

<p>Si vous avez activé Apple Music Lossless (Réglages → Qualité audio), le flux de meilleure qualité peut en fait être perçu à un volume plus faible que le flux AAC standard pour certaines pistes. C'est parce que le lossless n'a pas les mêmes ajustements de mastering qu'Apple applique aux versions AAC.</p>

<p>Essayez de passer temporairement à la qualité AAC pour voir si la différence de volume est perceptible.</p>

<h2>4. Sécurité des écouteurs</h2>

<p>Réglages Système → Son → Sécurité des écouteurs. Si « Réduire l'audio fort » est activé, macOS plafonne votre volume d'écouteurs globalement — affectant Apple Music ainsi que tout le reste.</p>

<h2>5. Amplifier Apple Music au-delà de 100 %</h2>

<p>Si vous avez tout vérifié et qu'Apple Music est toujours trop silencieux — que ce soit Sound Check trop agressif, un album silencieux ou simplement des haut-parleurs MacBook pas assez puissants — un boost de volume par application résout le problème.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> vous permet d'amplifier Apple Music jusqu'à <strong>200 %</strong>. Le signal audio est amplifié au niveau système avant d'atteindre vos haut-parleurs ou écouteurs. Seul Apple Music devient plus fort — Zoom, Slack et votre navigateur restent à leurs niveaux actuels.</p>

<img src="/apps/sounddial.png" alt="SoundDial amplifiant le volume Apple Music au-delà de 100 % sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>C'est aussi utile pour le problème inverse : si Apple Music est trop fort par rapport à votre appel Zoom, baissez Apple Music à 25 % dans SoundDial tout en gardant Zoom à 100 %. Le contrôle par application signifie que vous n'avez jamais à compromettre le volume d'une application pour une autre.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenir SoundDial sur le Mac App Store</a> — achat unique à 14,99 €, sans abonnement, macOS 14.2+.</p>
`,
  },
  "free-volume-mixer-mac": {
    slug: "free-volume-mixer-mac",
    title: "Mixeur de volume gratuit pour Mac : ce que vous obtenez vraiment (et ce que vous n'obtenez pas)",
    description:
      "Vous cherchez un mixeur de volume par application gratuit pour Mac ? Voici un aperçu honnête de ce que les options gratuites offrent, ce qui manque, et quand cela vaut la peine de payer.",
    date: "2026-04-03",
    readTime: "6 min read",
    content: `
<p>Si vous cherchez « mixeur de volume gratuit pour Mac », vous trouverez un résultat principal : <strong>Background Music</strong>. C'est la seule application de contrôle de volume par application gratuite et open source notable pour macOS. Voyons ce que vous obtenez vraiment — et ce à quoi vous renoncez.</p>

<h2>Background Music : l'option gratuite</h2>

<p>Background Music est une application gratuite et open source hébergée sur GitHub. Elle vous donne :</p>

<ul>
  <li><strong>Curseurs de volume par application</strong> — contrôle de volume basique pour chaque application en cours d'exécution</li>
  <li><strong>Pause automatique de la musique</strong> — met en pause votre lecteur de musique quand une autre application joue de l'audio, reprend quand elle s'arrête</li>
  <li><strong>Réglage du périphérique de sortie par défaut</strong> — remplace quel périphérique les applications utilisent par défaut</li>
</ul>

<h3>Ce que Background Music n'a pas</h3>
<ul>
  <li><strong>Pas de boost de volume au-delà de 100 %</strong> — les curseurs vont de 0 % à 100 % seulement. Impossible d'amplifier les applications silencieuses.</li>
  <li><strong>Pas de profils de volume</strong> — impossible de sauvegarder et basculer entre configurations</li>
  <li><strong>Pas de ducking automatique</strong> — la pause automatique est différente du ducking automatique. La pause arrête la musique complètement ; le ducking la baisse à un niveau de fond confortable. Beaucoup de gens préfèrent une musique de fond tranquille pendant les appels plutôt que le silence total.</li>
  <li><strong>Pas de mémoire de volume</strong> — ne mémorise pas les volumes par application entre les redémarrages</li>
  <li><strong>Pas de raccourcis clavier</strong> — pas de touche de raccourci pour basculer le mixeur ou couper toutes les applications</li>
  <li><strong>Pas de commutation de périphérique de sortie</strong> — impossible de basculer haut-parleurs/écouteurs depuis le même panneau</li>
</ul>

<h3>Le problème de fiabilité</h3>
<p>Le plus gros problème de Background Music n'est pas les fonctionnalités — c'est la stabilité. Elle fonctionne en installant un <strong>pilote de périphérique audio virtuel</strong>, et ce pilote se casse lors des mises à jour macOS. Après presque chaque version majeure de macOS (Ventura, Sonoma, Sequoia, Tahoe), les utilisateurs signalent :</p>
<ul>
  <li>Le périphérique virtuel ne s'installe pas</li>
  <li>Craquements et bugs audio</li>
  <li>Applications non détectées</li>
  <li>Aucune sortie audio du tout</li>
  <li>L'application plante au lancement</li>
</ul>

<p>Comme c'est un projet open source maintenu par des bénévoles, les correctifs ne sont pas toujours rapides. Vous pourriez être sans volume par application pendant des semaines après une mise à jour macOS.</p>

<h2>Autres options « gratuites »</h2>

<h3>eqMac (niveau gratuit)</h3>
<p>Le niveau gratuit d'eqMac fournit un égaliseur système mais pas de contrôle de volume par application. Les fonctionnalités par application nécessitent eqMac Pro (abonnement). La version gratuite est utile si vous avez principalement besoin d'un égaliseur, pas d'un mixeur de volume.</p>

<h3>macOS intégré</h3>
<p>macOS n'a pas de mixeur de volume intégré. Le plus proche est le curseur de volume d'alerte dans Réglages Système → Son, qui n'affecte que les sons système — pas l'audio des applications.</p>

<h2>Quand la version gratuite suffit</h2>

<p>Background Music pourrait suffire si :</p>
<ul>
  <li>Vous n'avez besoin que d'un volume par application basique (0-100 %)</li>
  <li>Vous n'avez pas besoin de profils, de ducking automatique ou de boost de volume</li>
  <li>Vous êtes à l'aise pour le réparer quand les mises à jour macOS le cassent</li>
  <li>Vous acceptez un périphérique audio virtuel dans votre chaîne audio</li>
</ul>

<h2>Quand cela vaut la peine de payer</h2>

<p>Un mixeur de volume payant vaut la peine si vous avez besoin de :</p>
<ul>
  <li><strong>Fiabilité</strong> — fonctionne après les mises à jour macOS sans attendre des correctifs bénévoles</li>
  <li><strong>Boost de volume à 200 %</strong> — amplifiez les applications silencieuses au-delà de leur maximum intégré</li>
  <li><strong>Profils</strong> — sauvegardez des configurations et basculez entre Réunion/Focus/Jeu en un clic</li>
  <li><strong>Ducking automatique</strong> — réduction automatique du volume pendant les appels, pas seulement la pause automatique</li>
  <li><strong>Pas de pilotes système</strong> — fonctionne avec l'API native d'Apple, pas de périphériques audio virtuels qui peuvent casser</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> coûte 14,99 € — une fois, pas un abonnement. Pour référence, c'est moins de deux mois d'abonnement Spotify, pour un outil que vous utiliserez tous les jours. C'est moins de la moitié du prix de SoundSource (39 $) et inclut des fonctionnalités (profils, ducking automatique) que SoundSource n'a pas.</p>

<img src="/apps/sounddial.png" alt="SoundDial — mixeur de volume par application fiable pour Mac avec profils, ducking automatique et boost à 200 %" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Disponible sur le <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — examiné par Apple, sandboxé, sans pilotes système. 14,99 € unique, sans abonnement, macOS 14.2+.</p>
`,
  },
  "balance-music-voice-chat-volume-mac": {
    slug: "balance-music-voice-chat-volume-mac",
    title: "Comment équilibrer la musique et le volume du chat vocal sur Mac",
    description:
      "La musique est trop forte sur Discord. Ou l'appel est trop silencieux sous Spotify. macOS ne vous laisse pas les équilibrer — voici comment trouver le rapport parfait.",
    date: "2026-04-05",
    readTime: "4 min read",
    content: `
<p>Vous voulez écouter de la musique tout en parlant à des amis sur Discord (ou Zoom, ou FaceTime). La musique doit être présente mais pas envahissante. Le chat vocal doit être clair et dominant. Simple requête. macOS la rend impossible.</p>

<p>Avec un seul volume système contrôlant tout, vous êtes coincé : augmentez-le pour l'appel et la musique est trop forte. Baissez-le pour la musique et vous ne pouvez pas entendre vos amis. Il n'y a pas de moyen intégré de régler ces deux choses à des niveaux différents.</p>

<h2>La solution de contournement avec le volume interne</h2>

<p>Spotify et Discord ont tous deux des curseurs de volume internes. En théorie, vous pourriez baisser le curseur de Spotify à 30 % et garder la sortie de Discord à 100 %. Cela crée un rapport 30/100.</p>

<p>En pratique :</p>
<ul>
  <li>Vous devez passer à chaque application pour ajuster son curseur</li>
  <li>Le rapport change quand vous ajustez le volume système (les deux s'adaptent proportionnellement)</li>
  <li>Toutes les applications n'ont pas de curseur de volume interne</li>
  <li>C'est imprécis — petit curseur Spotify, pas de pourcentage affiché</li>
  <li>Si vous fermez et rouvrez Spotify, le curseur peut se réinitialiser</li>
</ul>

<h2>La vraie solution : volume indépendant par application</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> place Spotify et Discord dans le même panneau avec des curseurs de volume indépendants. Définissez le rapport que vous voulez et laissez-le :</p>

<img src="/apps/sounddial.png" alt="SoundDial équilibrant Spotify et Discord à des niveaux de volume différents sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Le rapport parfait pour musique + chat vocal</h3>
<p>Basé sur la façon dont la plupart des gens utilisent cela :</p>
<ul>
  <li><strong>Chat vocal à 85-100 %</strong> — toujours clairement audible, dominant dans le mix</li>
  <li><strong>Musique à 20-35 %</strong> — présente mais ne concurrençant jamais les voix</li>
</ul>

<p>Le rapport exact dépend de la musique, de vos écouteurs et de vos préférences personnelles. L'essentiel est que vous pouvez trouver l'équilibre parfait une fois et le conserver — au lieu d'ajuster constamment.</p>

<h3>Enregistrez-le comme profil</h3>
<p>Enregistrez votre équilibre musique/chat vocal comme profil. Profil « Jeu » : Discord 100 %, jeu 50 %, Spotify 20 %. Profil « Détente » : Discord 70 %, Spotify 60 %. Basculez entre eux en un clic.</p>

<h3>Ducking automatique pour les appels</h3>
<p>Si vous écoutez de la musique et qu'un appel arrive, le ducking automatique de SoundDial baisse automatiquement la musique à votre niveau configuré. Quand l'appel se termine, la musique remonte. Sans toucher à quoi que ce soit.</p>

<p>Le problème d'équilibre audio est quelque chose que chaque utilisateur Mac rencontre dès qu'il a de la musique et un appel en cours simultanément. C'est un correctif unique à 14,99 €.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenir SoundDial sur le Mac App Store</a> — achat unique à 14,99 €, sans abonnement, macOS 14.2+.</p>
`,
  },
  "mac-volume-control-complete-guide": {
    slug: "mac-volume-control-complete-guide",
    title: "Contrôle du volume Mac : le guide complet (2026)",
    description:
      "Tout ce que vous devez savoir sur le contrôle audio sur macOS — des raccourcis clavier de base au volume par application, en passant par la commutation de sortie et l'automatisation.",
    date: "2026-06-12",
    readTime: "12 min read",
    content: `
<p>macOS vous offre un curseur de volume et un bouton de sourdine. C'est l'étendue du contrôle audio intégré d'Apple. Mais votre Mac possède en réalité bien plus de capacités audio que ce que la surface suggère : des raccourcis clavier cachés, des outils de volume par application, une gestion des périphériques de sortie et des fonctionnalités d'automatisation que la plupart des utilisateurs ne découvrent jamais.</p>

<p>Ceci est le guide complet pour contrôler l'audio sur votre Mac. Des bases aux fonctionnalités destinées aux utilisateurs expérimentés, tout est réuni au même endroit.</p>

<h2>Partie 1 : Commandes de volume intégrées</h2>

<h3>Les touches de volume</h3>
<p>Les touches d'augmentation du volume (F12), de diminution du volume (F11) et de sourdine (F10) règlent le volume du système en 16 étapes. Chaque étape représente environ 6,25 % de la plage totale. Le volume actuel est affiché en superposition à l'écran.</p>

<h3>Volume à granularité fine : Option + Maj</h3>
<p>Tenir <strong>Option + Maj</strong> et appuyez sur le volume haut/bas. Chaque pression s'ajuste d'un quart de pas normal, vous donnant <strong>64 niveaux de volume</strong> au lieu de 16. Indispensable pour trouver le volume parfait du casque lorsque les paliers normaux sont trop grossiers.</p>

<h3>Réglage silencieux du volume : Shift</h3>
<p>Tenir <strong>Changement</strong> et appuyez sur le volume haut/bas. Le volume change sans le retour audible « pop ». Utilisez-le pour régler le volume pendant un appel ou une présentation.</p>

<h3>Curseur de volume de la barre de menus</h3>
<p>Si l'icône Son se trouve dans votre barre de menus (activez-la dans Paramètres système → Centre de contrôle → Son → Toujours afficher dans la barre de menus), cliquez dessus pour afficher un curseur de volume. Il s'agit d'un curseur continu, non étagé comme les touches du clavier, vous pouvez donc définir n'importe quel niveau précis.</p>

<h3>Centre de contrôle</h3>
<p>Cliquez sur l'icône Control Center (icône à deux bascules) dans la barre de menu → cliquez sur la section Son pour un curseur de volume et un accès rapide à la sélection du périphérique de sortie.</p>

<h2>Partie 2 : Gestion des périphériques de sortie</h2>

<h3>Commutation des périphériques de sortie</h3>
<p>La méthode intégrée la plus rapide : maintenir <strong>Options</strong> et cliquez sur l'icône Son dans la barre de menu. Vous verrez une liste de tous les périphériques de sortie et d’entrée disponibles. Cliquez sur un pour changer instantanément.</p>

<p>Alternativement : Paramètres système → Son → Sortie. Sélectionnez votre appareil préféré dans la liste.</p>

<h3>Gestion des appareils Bluetooth</h3>
<p>macOS mémorise le niveau de volume de chaque périphérique de sortie séparément. Lorsque vous passez des haut-parleurs (à 70 %) aux AirPods (à 40 %), le volume s'ajuste à ce qu'il était la dernière fois que vous avez utilisé cet appareil. Cela peut donner l'impression que le volume « change tout seul » si vous ne vous y attendez pas.</p>

<h3>Appareils agrégés et multi-sorties</h3>
<p>Pour les configurations avancées, ouvrez Configuration Audio MIDI (Applications → Utilitaires) pour créer des périphériques agrégés (combiner plusieurs entrées) ou des périphériques multi-sorties (envoyer de l'audio à plusieurs sorties simultanément). Ceux-ci sont principalement utiles pour les configurations audio professionnelles, et non pour une utilisation quotidienne.</p>

<h2>Partie 3 : Volume des alertes et des notifications</h2>

<h3>Volume des alertes système</h3>
<p>macOS dispose d'un curseur de volume d'alerte distinct : Paramètres système → Son → Volume d'alerte. Celui-ci contrôle le volume des sons du système (Funk, Tink, Bottle, etc.) indépendamment du volume principal. Cependant, cela n'affecte que les alertes système macOS, et non les sons de notification provenant d'applications tierces telles que Slack, Discord ou Teams.</p>

<h3>Gestion du son des notifications</h3>
<p>Accédez à Paramètres système → Notifications. Pour chaque application, vous pouvez activer ou désactiver « Lire le son pour les notifications ». C'est binaire : vous ne pouvez pas rendre les notifications d'une application plus silencieuses, seulement complètement activées ou complètement désactivées.</p>

<h3>Modes de mise au point</h3>
<p>Les modes de mise au point (Paramètres système → Mise au point) suppriment les notifications des applications sélectionnées. Ils peuvent désactiver les sons de notification, mais ils n'affectent pas le volume des médias. Votre musique continue de jouer à plein volume même dans Ne pas déranger.</p>

<h2>Partie 4 : Commandes spécifiques au casque</h2>

<h3>Sécurité des écouteurs</h3>
<p>Paramètres système → Son → Sécurité des écouteurs. « Réduire le son bruyant » limite le volume du casque en fonction de l'exposition cumulée. Vous pouvez le désactiver ou ajuster le seuil. N'affecte que la sortie casque, pas les haut-parleurs.</p>

<h3>Audio spatial</h3>
<p>Pour les écouteurs pris en charge (AirPods Pro, AirPods Max, certains Beats), macOS prend en charge Spatial Audio avec suivi de la tête. Activez-le dans Centre de contrôle → Son → Spatial Audio. Cela affecte le positionnement perçu du son mais pas le volume.</p>

<h3>Balance audio</h3>
<p>Paramètres système → Accessibilité → Audio → Balance. Un curseur gauche-droite qui ajuste la balance stéréo. Assurez-vous qu'il est centré si un côté semble plus silencieux que l'autre.</p>

<h2>Partie 5 : Ce que macOS ne peut pas faire (et comment y remédier)</h2>

<h3>Contrôle du volume par application</h3>
<p>macOS possède un curseur de volume pour toutes les applications. Il n'existe aucun moyen intégré de régler Spotify à 30 % et Zoom à 100 %. Il s'agit de la fonctionnalité audio la plus demandée dans macOS, et Apple ne l'a jamais ajoutée.</p>

<h3>Augmentation du volume au-delà de 100 %</h3>
<p>Le volume de macOS atteint un maximum de 100 %. Si le contenu est trop silencieux, même au volume maximum, il n'existe aucun moyen intégré d'amplifier davantage.</p>

<h3>Profils de volumes</h3>
<p>Il n'y a aucun moyen d'enregistrer une configuration de volume (Spotify à 30 %, Zoom à 100 %, Slack coupé) et de basculer entre les préréglages.</p>

<h3>Esquive automatique</h3>
<p>macOS ne réduit pas automatiquement le son de fond lorsque vous rejoignez un appel.</p>

<h3>Mémoire de volume par application</h3>
<p>macOS ne se souvient pas des niveaux de volume par application, car le volume par application n'existe pas.</p>

<p>Tous les cinq sont disponibles avec <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> - une application de barre de menus native macOS qui ajoute le mélangeur de volume qu'Apple n'a jamais construit.</p>

<img src="/apps/sounddial.png" alt="SoundDial — contrôle du volume par application, profils, atténuation automatique et augmentation de 200 % pour macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>Partie 6 : Volume par application avec SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> comble toutes les lacunes énumérées ci-dessus :</p>

<ul>
  <li><strong>Volume par application :</strong> Chaque application possède son propre curseur, de 0 % à 200 %</li>
  <li><strong>Muet par application :</strong> Un clic pour faire taire n'importe quelle application</li>
  <li><strong>Augmentation du volume :</strong> Amplifiez les applications silencieuses au-delà de 100 %</li>
  <li><strong>Profils de volumes :</strong> Enregistrez les configurations et changez en un seul clic</li>
  <li><strong>Esquive automatique :</strong> L'audio de fond diminue pendant les appels, se rétablit après</li>
  <li><strong>Mémoire de volume :</strong> Le volume de chaque application est mémorisé entre les redémarrages</li>
  <li><strong>Commutation du périphérique de sortie :</strong> Changer les haut-parleurs/écouteurs depuis le même panneau</li>
  <li><strong>Raccourcis clavier :</strong> ⌃⌥S pour basculer le mixeur, ⌃⌥M pour tout couper</li>
</ul>

<p>Il utilise l'API Core Audio Tap moderne d'Apple : pas de pilotes système, pas de périphériques audio virtuels, pas d'extensions de noyau. Disponible sur le <a href="https://apps.apple.com/app/sounddial/id6772792641">MacApp Store</a> pour 14,99 € (achat unique, sans abonnement), évalué par Apple et mis en bac à sable. macOS 14.2+.</p>
`,
  },
  "vlc-volume-too-low-mac": {
    slug: "vlc-volume-too-low-mac",
    title: "Volume VLC trop faible sur Mac ? Comment le booster au-delà de 200 %",
    description:
      "VLC au volume max mais une vidéo est encore trop silencieuse ? VLC dispose d'un boost intégré de 200 % et vous pouvez aller encore plus loin avec un mélangeur de volume par application.",
    date: "2026-04-08",
    readTime: "4 min read",
    content: `
<p>Vous regardez une vidéo dans VLC. Le dialogue est calme. Vous augmentez le volume de VLC au maximum. Vous augmentez le volume de votre Mac au maximum. Je n'entends toujours pas correctement. La vidéo a simplement été enregistrée trop silencieusement.</p>

<p>La bonne nouvelle : VLC dispose en fait d’une solution intégrée que la plupart des gens ne connaissent pas. La meilleure nouvelle : vous pouvez l'ajouter à un boost au niveau du système pour encore plus de volume.</p>

<h2>Augmentation du volume intégrée à VLC (jusqu'à 200 %)</h2>

<p>VLC peut dépasser 100 % de volume à lui seul. Le curseur de volume dans la barre du lecteur de VLC atteint un maximum de 100 %, mais vous pouvez l'augmenter davantage :</p>

<h3>Méthode 1 : molette de défilement</h3>
<p>Passez votre souris sur le curseur de volume de VLC et faites défiler vers le haut. Le curseur dépassera la barre visible des 100 %, jusqu'à 200 %. Vous verrez le pourcentage affiché au fur et à mesure que vous faites défiler.</p>

<h3>Méthode 2 : raccourci clavier</h3>
<p>Presse <strong>Commande + Flèche vers le haut</strong> (⌘↑) à plusieurs reprises pour augmenter le volume au-dessus de 100 %. Chaque pression ajoute une étape. <strong>Commande + Flèche vers le bas</strong> (⌘↓) pour diminuer.</p>

<h3>Méthode 3 : menu audio</h3>
<p>Accédez à VLC → Audio → Augmenter le volume. Répétez jusqu'à ce que le volume soit suffisamment élevé. Le niveau actuel est affiché en bas à droite du lecteur.</p>

<p>L'augmentation de 200 % de VLC fonctionne en amplifiant le signal audio dans le décodeur de VLC. À des niveaux extrêmes, cela peut introduire une distorsion, mais pour les fichiers vidéo véritablement silencieux, c'est très efficace.</p>

<h2>Au-delà du boost de VLC : amplification au niveau du système</h2>

<p>Si VLC à 200 % n'est toujours pas assez fort - ou si vous souhaitez augmenter VLC sans affecter ses paramètres audio internes - un mélangeur de volume par application au niveau du système ajoute une autre couche d'amplification.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> donne à VLC son propre curseur de volume de 0% à 200% au niveau du système. Cela se cumule avec le boost interne de VLC :</p>

<ul>
  <li>VLC interne : 200 % × SoundDial : 200 % = amplification efficace de 400 %</li>
  <li>VLC interne : 150 % × SoundDial : 150 % = amplification efficace de 225 %</li>
</ul>

<p>Il s’agit d’une amplification extrême qui introduira une distorsion sur certains contenus, mais pour des sources extrêmement silencieuses, cela pourrait être ce dont vous avez besoin.</p>

<img src="/apps/sounddial.png" alt="SoundDial augmentant le volume VLC au niveau du système sur macOS pour les fichiers vidéo silencieux" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Plus important encore, SoundDial vous permet de booster VLC <strong>indépendamment</strong>. Votre lecteur de musique, votre navigateur et vos applications de communication restent à leurs niveaux normaux tandis que seul VLC devient plus fort. Si vous boostez VLC à 180 % dans SoundDial, Spotify ne change pas. C'est quelque chose que le boost intégré de VLC ne peut pas faire : le boost de VLC n'affecte que VLC, mais le volume système unique de macOS relie toujours tout le reste.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenez SoundDial sur l'App Store Mac</a> — 14,99 € d'achat unique, sans abonnement, macOS 14.2+.</p>
`,
  },
  "disable-audio-ducking-mac": {
    slug: "disable-audio-ducking-mac",
    title: "Comment désactiver le ducking audio sur Mac (ou le contrôler vous-même)",
    description:
      "macOS ou vos applications continuent de baisser votre musique pendant les appels sans demander. Voici comment arrêter l’atténuation audio indésirable – ou la remplacer par une atténuation que vous contrôlez réellement.",
    date: "2026-04-10",
    readTime: "5 min read",
    content: `
<p>Vous rejoignez un appel Zoom. Votre musique tombe à presque rien. Vous n'avez touché à aucune commande de volume : quelque chose l'a fait pour vous. C'est <strong>esquivement audio</strong>: la diminution automatique du son de fond lorsqu'un appel ou une source audio importante est active.</p>

<p>Certaines personnes l'adorent. D'autres le détestent, surtout lorsque l'esquive est trop agressive (la musique tombe à zéro au lieu d'un niveau de fond confortable) ou lorsqu'elle est déclenchée de manière inattendue.</p>

<p>Voici comment désactiver le ducking indésirable sur Mac et comment le remplacer par un ducking qui fonctionne comme vous le souhaitez.</p>

<h2>D'où vient l'atténuation audio sur Mac</h2>

<p>macOS lui-même le fait <strong>pas</strong> avoir une fonction d'atténuation audio intégrée. Si votre musique devient plus faible pendant les appels, l'une des causes suivantes en est la cause :</p>

<h3>1. Le traitement audio de Zoom</h3>
<p>Le zoom peut réduire le son du système lorsqu'il est activé. Cochez Zoom → Paramètres → Audio et désactivez « Ajuster automatiquement le volume du microphone ». Essayez également de réduire la suppression du bruit de « Élevé » à « Faible ».</p>

<h3>2. Commutation de codec Bluetooth</h3>
<p>Lorsqu'une application active le microphone de votre casque Bluetooth, macOS passe du codec AAC au codec SCO. Il ne s’agit pas vraiment d’un « esquive » : il s’agit d’un changement de codec qui rend tout plus silencieux et de moindre qualité. Réparez-le en utilisant un microphone séparé.</p>

<h3>3. Une application tierce qui le fait</h3>
<p>Certaines applications audio (comme Background Music) disposent de fonctionnalités de pause automatique ou de canard automatique. Certaines applications multimédias réduisent leur propre volume lorsqu'elles détectent une autre source audio. Vérifiez toutes les applications utilitaires audio que vous avez installées.</p>

<h3>4. Applications de communication ajustant l'audio</h3>
<p>Discord, Teams et autres applications de communication disposent de leur propre traitement audio qui peut affecter le volume perçu des autres applications. Vérifiez les paramètres audio de chaque application pour les options « Ajuster automatiquement » et désactivez-les.</p>

<h2>Comment arrêter les esquives indésirables</h2>

<ol>
  <li><strong>Vérifiez les paramètres audio Zoom/Teams/Discord</strong> — désactiver le réglage automatique du volume/micro</li>
  <li><strong>Utilisez un micro séparé pour les appels</strong> - empêche la commutation du codec Bluetooth</li>
  <li><strong>Supprimer les utilitaires audio</strong> - Musique de fond, Soundflower ou toute application susceptible d'intercepter l'audio</li>
  <li><strong>Vérifier l'accessibilité de macOS</strong> - Paramètres système → Accessibilité → Audio pour tout paramètre inattendu</li>
</ol>

<h2>Remplacez le mauvais esquive par le bon esquive</h2>

<p>L'idée derrière l'atténuation audio est en fait géniale : réduire automatiquement le son de fond pendant les appels afin que vous puissiez entendre clairement. Le problème est quand il est trop agressif (la musique va à zéro), non configurable (vous ne pouvez pas choisir de combien baisser) ou déclenché par une mauvaise chose.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> dispose d'une fonction d'évitement automatique intégrée qui vous donne le contrôle :</p>

<ul>
  <li><strong>Niveau de canard configurable :</strong> Choisissez exactement de combien réduire le son de fond pendant les appels : de 10 % (presque silencieux) à 80 % (à peine réduit). La valeur par défaut est de 30 %, ce qui permet de garder la musique audible mais sans distraction.</li>
  <li><strong>Détection intelligente :</strong> Détecte les appels en surveillant l'utilisation du microphone - le même indicateur que le point orange de macOS. Fonctionne avec Zoom, Teams, FaceTime, Discord, Slack, Google Meet, Webex, Skype.</li>
  <li><strong>Restauration parfaite :</strong> À la fin de l'appel, chaque application revient exactement à son volume précédent. Pas de réajustement.</li>
  <li><strong>Basculement facile :</strong> Activez ou désactivez l'auto-ducking dans les paramètres de SoundDial. Lorsque vous n'en voulez pas, désactivez-le. Lorsque vous souhaitez le récupérer, activez-le.</li>
</ul>

<img src="/apps/sounddial.png" alt="Réduction automatique configurable SoundDial : contrôlez exactement la quantité de bruit de fond réduite pendant les appels." style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>La différence : au lieu qu'une application décide que votre musique doit passer à zéro à chaque appel, vous décidez qu'elle doit passer à 25 %. Au lieu de perdre le contrôle, vous le gagnez. Et au lieu d'essayer de désactiver une fonctionnalité cachée dans trois applications différentes, vous disposez d'une seule bascule au même endroit.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenez SoundDial sur l'App Store Mac</a> — 14,99 € d'achat unique, sans abonnement, macOS 14.2+.</p>
`,
  },
  "bluetooth-headphones-too-quiet-mac": {
    slug: "bluetooth-headphones-too-quiet-mac",
    title: "Casque Bluetooth trop silencieux sur Mac ? Chaque correctif qui fonctionne",
    description:
      "Vos écouteurs Bluetooth fonctionnent correctement sur votre téléphone mais sonnent silencieusement sur Mac. Voici toutes les causes – des problèmes de codec aux limites de volume macOS – et comment résoudre chacune d'entre elles.",
    date: "2026-04-12",
    readTime: "6 min read",
    content: `
<p>Vos écouteurs Bluetooth sont très bruyants sur votre téléphone. Vous les connectez à votre Mac — et tout est plus silencieux. La musique semble étouffée. Les appels sont difficiles à entendre. Vous avez augmenté le volume au maximum, mais ce n'est toujours pas suffisant. Qu'est-ce qui donne ?</p>

<p>L'audio Bluetooth sur Mac présente plusieurs facteurs de réduction du volume qui n'existent pas sur les téléphones. Voici chacun d’entre eux et comment y remédier.</p>

<h2>1. La sécurité des écouteurs limite votre volume</h2>

<p>macOS dispose d'une fonction intégrée qui limite le volume du casque pour protéger votre audition. Il mesure l'exposition sonore au fil du temps et réduit le volume maximum s'il pense que vous avez écouté trop fort.</p>

<p>Aller à <strong>Paramètres système → Son → Sécurité des écouteurs</strong>. Si « Réduire le son fort » est activé, désactivez-le ou augmentez le seuil. C'est la première cause pour laquelle les écouteurs Bluetooth sont plus silencieux sur Mac que sur un téléphone.</p>

<h2>2. Incompatibilité du codec Bluetooth</h2>

<p>Votre téléphone peut se connecter à vos écouteurs à l'aide d'un codec de meilleure qualité (aptX, LDAC, AAC) tandis que votre Mac est par défaut SBC (le codec Bluetooth de base). Différents codecs ont des caractéristiques de volume maximum différentes.</p>

<p>macOS utilise généralement AAC pour les appareils Apple et SBC pour les écouteurs tiers. Si vos écouteurs prennent en charge aptX ou LDAC, macOS ne les utilisera pas – Apple ne prend en charge que AAC et SBC.</p>

<p><strong>Corriger :</strong> Vous ne pouvez pas faire grand-chose concernant la sélection des codecs sur macOS. Mais savoir cela explique pourquoi les mêmes écouteurs peuvent avoir un son différent (et potentiellement plus silencieux) sur votre Mac par rapport à un téléphone Android utilisant LDAC.</p>

<h2>3. L'activation du microphone déclenche le SCO</h2>

<p>Lorsqu'une application active le microphone de votre casque Bluetooth (Zoom, FaceTime, Siri, dictée), macOS passe de l'AAC au codec SCO. SCO a été conçu pour les appels téléphoniques en 2004 : il sonne terriblement et est nettement plus silencieux.</p>

<p><strong>Corriger :</strong> Utilisez un microphone séparé (micro Mac intégré ou micro USB) et conservez vos écouteurs Bluetooth en sortie uniquement. Dans les paramètres de votre application d'appel, définissez l'entrée sur le micro de votre Mac et la sortie sur vos écouteurs. Cela empêche le commutateur SCO.</p>

<h2>4. Problème de synchronisation du volume Bluetooth</h2>

<p>L'audio Bluetooth dispose de deux commandes de volume : une du côté Mac et une du côté des écouteurs. Ils sont censés rester synchronisés, mais ils peuvent s'écarter : le Mac affiche 100 % mais les écouteurs ne sont pas réellement au volume maximum.</p>

<p><strong>Corriger :</strong> Déconnectez les écouteurs (Paramètres système → Bluetooth → cliquez sur « i » → Déconnecter), attendez 5 secondes, reconnectez-vous. Cela resynchronise le volume. Certains écouteurs ont également leurs propres boutons de volume – assurez-vous également qu’ils sont au maximum.</p>

<h2>5. Connexion Bluetooth de mauvaise qualité</h2>

<p>La distance, les interférences (routeurs WiFi, appareils USB 3.0) et les obstacles entre votre Mac et vos écouteurs peuvent réduire la qualité du signal Bluetooth. Lorsque le signal est faible, macOS peut réduire le débit audio, ce qui peut affecter le volume et la qualité perçus.</p>

<p><strong>Corriger :</strong> Rapprochez-vous de votre Mac. Déconnectez les autres appareils Bluetooth que vous n'utilisez pas. Éloignez les hubs USB 3.0 de votre Mac (l'USB 3.0 génère des interférences dans la bande 2,4 GHz utilisée par Bluetooth).</p>

<h2>6. Les écouteurs eux-mêmes</h2>

<p>Certains écouteurs Bluetooth ont un volume maximum inférieur à d’autres. Les écouteurs supra-auriculaires dotés de haut-parleurs plus gros sont généralement plus bruyants que les écouteurs. Les écouteurs antibruit peuvent avoir des limites de volume intégrées à leur micrologiciel.</p>

<p>Vérifiez l'application du fabricant du casque (Sony Headphones Connect, Bose Music, Sennheiser Smart Control, etc.) pour connaître les paramètres de limitation du volume. Certains écouteurs disposent d'un mode « écoute sécurisée » qui limite le volume.</p>

<h2>Toujours silencieux ? Boost au-delà de 100 %</h2>

<p>Si vous avez tout vérifié ci-dessus et que vos écouteurs sont toujours trop silencieux sur Mac, il vous faut une amplification de volume.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> augmente le volume de n'importe quelle application jusqu'à <strong>200%</strong>. Si Spotify via vos écouteurs Bluetooth est trop silencieux, faites glisser son curseur jusqu'à 160 %. Le signal audio est amplifié avant d'atteindre vos écouteurs, doublant ainsi le volume disponible pour cette application.</p>

<img src="/apps/sounddial.png" alt="SoundDial augmente le volume de l'application pour les écouteurs Bluetooth sur Mac avec des curseurs par application jusqu'à 200 %" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>L'augmentation du volume par application est meilleure qu'une augmentation du volume à l'échelle du système, car vous ne pouvez amplifier que l'application silencieuse. Si votre podcast est silencieux mais que la musique est bonne, augmentez l'application podcast à 170 % tout en gardant Spotify à 80 %. Chaque application reste au bon niveau.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenez SoundDial sur l'App Store Mac</a> — 14,99 € d'achat unique, sans abonnement, macOS 14.2+.</p>
`,
  },
  "mac-audio-obs-streaming-setup": {
    slug: "mac-audio-obs-streaming-setup",
    title: "Mac Audio pour OBS et streaming : comment contrôler ce que votre public entend",
    description:
      "Streaming sur Mac avec OBS ? Vos spectateurs entendent tout au même volume : jeu, musique, alertes, Discord. Voici comment équilibrer correctement les sources audio.",
    date: "2026-04-15",
    readTime: "7 min read",
    content: `
<p>Vous diffusez sur votre Mac avec OBS. Le son de votre jeu est époustouflant. Votre appel Discord est en cours. Spotify diffuse une musique de fond. L'alerte retentit lorsque quelqu'un s'abonne. Vos téléspectateurs entendent tout cela au même volume – un désordre chaotique où les appels Discord rivalisent avec les explosions et la musique noie vos commentaires.</p>

<p>Le problème principal : macOS vous offre une sortie audio et OBS la capture sous la forme d'un flux combiné. Vous ne pouvez pas dire à OBS « capturer le jeu à 40 %, Discord à 80 % et Spotify à 20 % » car macOS ne les sépare pas.</p>

<h2>Le problème du streaming audio Mac</h2>

<p>Sous Windows, OBS peut capturer nativement l’audio d’une application individuelle. Vous ajoutez chaque application en tant que source audio distincte et les mixez indépendamment dans OBS. Sur Mac, ce n'est pas intégré. OBS sur macOS peut capturer :</p>

<ul>
  <li><strong>Audio de bureau</strong> — tout ce qui est diffusé sur votre Mac, combiné en un seul flux</li>
  <li><strong>Micro/Aux.</strong> — votre entrée micro</li>
  <li><strong>Capture audio d'application (macOS 13+)</strong> - capturez l'audio d'une application spécifique, mais la configuration est manuelle et limitée</li>
</ul>

<p>La source Application Audio Capture (ajoutée dans OBS 30+) fonctionne pour isoler une application, mais la gestion de cinq sources audio avec des niveaux séparés dans OBS est complexe et toutes les applications ne coopèrent pas.</p>

<h2>L'approche la plus simple : contrôler les niveaux avant qu'OBS ne les capture</h2>

<p>Au lieu d'essayer de séparer l'audio dans OBS, contrôlez le volume de chaque application <em>avant</em> il atteint la capture audio du bureau d'OBS. Si vous réduisez Spotify à 20 % et augmentez Discord à 90 % au niveau du système, la capture audio du bureau d'OBS récupère le mix déjà équilibré.</p>

<p>C'est exactement ce que <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> fait. Définissez chaque application au niveau que vous souhaitez que vos spectateurs entendent :</p>

<img src="/apps/sounddial.png" alt="SoundDial équilibrant les niveaux audio du jeu, de Discord et de la musique pour le streaming OBS sur Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Configuration typique du streaming audio</h3>
<ul>
  <li><strong>Jeu :</strong> 50 % – présent mais sans dominer votre voix</li>
  <li><strong>Discorde/chat vocal :</strong> 80 % – des appels clairs de votre équipe</li>
  <li><strong>Spotify/musique :</strong> 15 % — ambiance de fond subtile</li>
  <li><strong>Alertes de flux (navigateur) :</strong> 40 % – audible mais pas choquant</li>
  <li><strong>Slack/notifications :</strong> en sourdine : les téléspectateurs n'ont pas besoin d'entendre vos DM</li>
</ul>

<h3>Enregistrez-le en tant que profil "Streaming"</h3>
<p>Enregistrez cette configuration en tant que profil de volume dans SoundDial. Avant de passer en direct, appliquez le profil "Streaming" en un seul clic. Chaque application passe à son niveau optimisé pour le streaming. Lorsque vous avez terminé la diffusion, revenez à votre profil « Normal » ou « Gaming ».</p>

<h2>Ce que vous entendez par rapport à ce que les téléspectateurs entendent</h2>

<p>Avec SoundDial ajustant le volume par application au niveau du système, vous et vos téléspectateurs entendez le même mix équilibré. C'est plus simple que d'essayer de conserver des mixages séparés (un pour vous, un pour le flux), ce qui nécessite des périphériques audio virtuels et un routage complexe et fragile sur Mac.</p>

<p>Si vous avez besoin d'un mixage complètement distinct pour votre flux et pour vos écouteurs (par exemple, vous souhaitez entendre Discord plus fort que vos spectateurs), vous aurez besoin d'une configuration de routage plus complexe avec des périphériques audio virtuels. Mais pour la plupart des streamers, un seul mixage bien équilibré – facilement contrôlé depuis la barre de menus – est exactement ce dont vous avez besoin.</p>

<h2>Pourquoi le contrôle par application surpasse le mixage OBS uniquement</h2>

<ul>
  <li><strong>Ajustements instantanés :</strong> Au milieu de la diffusion, un téléspectateur dit que le jeu est trop bruyant. Cliquez sur la barre de menu, faites glisser un curseur. Fait. Pas de pause, pas d'ouverture des paramètres OBS.</li>
  <li><strong>Fonctionne en dehors d'OBS :</strong> Votre configuration audio équilibrée fonctionne même lorsque vous ne diffusez pas de contenu. Mêmes profils, même confort.</li>
  <li><strong>Aucun périphérique audio virtuel :</strong> SoundDial utilise l'API Audio Tap native d'Apple : pas de Soundflower, pas de BlackHole, pas de pilotes qui s'interrompent lors des mises à jour de macOS.</li>
</ul>

<p>Disponible sur le <a href="https://apps.apple.com/app/sounddial/id6772792641">MacApp Store</a> — Évalué par Apple, 14,99 € d'achat unique, sans abonnement, macOS 14.2+.</p>
`,
  },
  "make-mac-remember-volume-per-app": {
    slug: "make-mac-remember-volume-per-app",
    title: "Comment faire en sorte que votre Mac mémorise le volume par application",
    description:
      "Chaque fois que vous redémarrez Spotify ou relancez Zoom, vous devez réajuster le volume. Voici comment faire en sorte que macOS mémorise automatiquement le niveau de volume de chaque application.",
    date: "2026-04-18",
    readTime: "4 min read",
    content: `
<p>Vous passez cinq minutes à perfectionner vos niveaux audio. Spotify à 30 %, Zoom à 100 %, Slack à 15 %. Ensuite, vous redémarrez votre Mac. Ou Slack plante et se relance. Ou vous fermez Spotify et le rouvrez plus tard. Chaque application est réinitialisée à son volume par défaut. Vous réajustez tout. Encore.</p>

<p>macOS mémorise le volume du système lors des redémarrages. Mais il ne mémorise pas le volume par application, car macOS n'a pas de contrôle de volume par application en premier lieu. Il n'y a rien à retenir.</p>

<h2>Pourquoi les applications ne se souviennent pas de leur propre volume</h2>

<p>Certaines applications (comme Spotify et VLC) disposent de curseurs de volume internes qui sont enregistrés entre les sessions. Mais la plupart des applications (navigateurs, outils de communication, utilitaires système) ne disposent pas de leurs propres commandes de volume. Et même les applications qui enregistrent le volume interne ne mémorisent que leur propre position de curseur, pas leur volume par rapport aux autres applications.</p>

<p>Ce que tu veux vraiment, c'est pour le <em>système</em> à retenir : "Spotify doit toujours être à 30 % du volume du système." macOS ne prend pas en charge ce concept.</p>

<h2>Mémoire de volume avec SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> a un <strong>Mémoire de volume</strong> fonctionnalité. Lorsqu'il est activé, il enregistre le niveau de volume de chaque application par son identifiant de bundle. Lorsque l'application se ferme et se relance (que vous la redémarriez, qu'elle plante ou que vous redémarriez votre Mac), SoundDial la restaure automatiquement sur son volume enregistré.</p>

<img src="/apps/sounddial.png" alt="Mémoire de volume SoundDial — mémorise et restaure automatiquement les niveaux de volume par application sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Comment ça marche</h3>
<ol>
  <li>Activez "Mémoriser le volume par application" dans les paramètres de SoundDial</li>
  <li>Réglez chaque application sur votre volume préféré</li>
  <li>SoundDial enregistre automatiquement le niveau</li>
  <li>Lorsque l'application se relance, le volume est restauré exactement là où il se trouvait</li>
</ol>

<p>Aucune sauvegarde manuelle. Pas de réajustement. La première fois que vous réglez vos volumes est la dernière fois.</p>

<h3>Ce dont on se souvient</h3>
<ul>
  <li><strong>Niveau sonore</strong> — le pourcentage exact (0% à 200%)</li>
  <li><strong>État muet</strong> — si vous avez désactivé une application, elle reste muette lorsqu'elle est relancée</li>
  <li><strong>Par application</strong> — le volume de chaque application est stocké indépendamment par ID de bundle</li>
</ul>

<h3>Les nouvelles applications reçoivent un volume par défaut</h3>
<p>Lorsqu'une application est lancée pour la première fois (une application que SoundDial n'a jamais vue auparavant), elle obtient un volume par défaut configurable. Vous pouvez définir cette valeur par défaut dans les paramètres de SoundDial — afin que les nouvelles applications démarrent à 80 % (ou ce que vous préférez) au lieu de potentiellement exploser à 100 %.</p>

<h2>Mémoire de volume + profils = définissez-le et oubliez-le</h2>

<p>La mémoire de volume gère le quotidien : les applications conservent leurs niveaux lors des redémarrages. Les profils gèrent le changement de situation : mode "Réunion", mode "Focus", mode "Jeu" - appliquez-les en un seul clic et chaque application passe au bon niveau pour cette situation.</p>

<p>Ensemble, vous n’ajustez presque jamais manuellement un curseur de volume. L'application mémorise son dernier niveau et lorsque vous changez de contexte, un profil définit tout en même temps.</p>

<p>Disponible sur le <a href="https://apps.apple.com/app/sounddial/id6772792641">MacApp Store</a> — Évalué par Apple, 14,99 € d'achat unique, sans abonnement, macOS 14.2+.</p>
`,
  },
  "podcast-volume-too-low-mac": {
    slug: "podcast-volume-too-low-mac",
    title: "Volume de podcast trop faible sur Mac ? Comment le rendre plus fort",
    description:
      "Certains podcasts sont silencieux sur Mac, même au volume maximum. Voici pourquoi et comment augmenter l'audio d'un podcast au-delà de 100 % sans affecter les autres applications.",
    date: "2026-04-20",
    readTime: "5 min read",
    content: `
<p>Vous écoutez un podcast sur votre Mac. L'hôte a l'air bien, mais l'invité - enregistrant à partir du micro d'un ordinateur portable dans sa cuisine - est à peine audible. Vous montez le volume à 100 %. L'hôte est désormais trop bruyant, mais l'invité reste silencieux. Il n'y a aucun moyen de gagner car le problème vient de l'enregistrement, pas de votre Mac.</p>

<p>La qualité audio des podcasts varie énormément. Les spectacles professionnels sont maîtrisés à des niveaux constants. Mais les interviews, les podcasts indépendants et les enregistrements en direct ont souvent des invités à -20 dB ou moins, ce qui est nettement plus silencieux que l'animateur ou la musique d'introduction.</p>

<h2>Pourquoi certains podcasts sont si silencieux</h2>

<ul>
  <li><strong>Qualité du micro invité :</strong> Un hôte a une configuration professionnelle, l'invité est sur des AirPods. La différence de niveau peut atteindre plus de 15 dB.</li>
  <li><strong>Pas de post-production :</strong> Les podcasts produits par des professionnels compressent et normalisent les niveaux. Beaucoup ne le font pas.</li>
  <li><strong>Les applications de podcast ne se normalisent pas :</strong> Apple Podcasts et Spotify appliquent une normalisation minimale ou inexistante du volume au contenu des podcasts (contrairement à la musique).</li>
  <li><strong>Plage dynamique :</strong> Certains producteurs de podcast maintiennent intentionnellement une plage dynamique élevée pour un son « naturel », ce qui signifie que les parties silencieuses sont très silencieuses.</li>
</ul>

<h2>Correctifs intégrés à l'application</h2>

<h3>Podcasts Apple</h3>
<p>Apple Podcasts n'a pas de fonction de normalisation ou d'augmentation du volume. Ce que le podcast offre, c'est ce que vous obtenez. Le contrôle du volume dans l'application dans les anciennes versions a été supprimé : il utilise désormais uniquement le volume du système.</p>

<h3>Spotify</h3>
<p>Le paramètre « Normaliser le volume » de Spotify (Paramètres → Lecture) peut aider à assurer la cohérence du volume entre les différents podcasts, mais son effet sur la dynamique au sein des épisodes est limité. Essayez de le régler sur « Fort » pour une normalisation maximale.</p>

<h3>Ciel couvert (navigateur)</h3>
<p>Si vous utilisez Overcast (via le Web sur overcast.fm), il dispose d'une fonction « Voice Boost » qui amplifie et compresse considérablement l'audio du podcast, rendant les voix faibles plus fortes. C'est l'une des meilleures solutions intégrées, mais elle ne fonctionne que dans Overcast.</p>

<h2>Correctif au niveau du système : boostez les applications de podcast au-delà de 100 %</h2>

<p>La solution universelle consiste à amplifier votre application de podcast au-delà de la limite de 100 % de macOS. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> donne à chaque application un curseur de volume jusqu'à <strong>200%</strong>.</p>

<img src="/apps/sounddial.png" alt="SoundDial augmente le volume des podcasts Apple à 180 % sur Mac pour les épisodes de podcast silencieux" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Réglez Apple Podcasts ou votre application de podcast sur 160-180 % tout en gardant la musique Spotify à 40 % et Slack à 15 %. Le podcast devient plus fort sans rendre tout le reste trop fort. Lorsque vous revenez à la musique, ramenez simplement l'application de podcast à la normale - ou laissez la mémoire de volume de SoundDial s'en souvenir automatiquement.</p>

<p>Cette approche par application est meilleure qu'une augmentation du volume à l'échelle du système car :</p>
<ul>
  <li>Seule l'application de podcast silencieuse devient plus bruyante</li>
  <li>La musique reste à votre niveau préféré</li>
  <li>Le son des appels reste à votre niveau préféré</li>
  <li>Les sons des notifications ne deviennent pas soudainement assourdissants</li>
</ul>

<p>Disponible sur le <a href="https://apps.apple.com/app/sounddial/id6772792641">MacApp Store</a> — Évalué par Apple, 14,99 € d'achat unique, sans abonnement, macOS 14.2+.</p>
`,
  },
  "mac-audio-online-classes-lectures": {
    slug: "mac-audio-online-classes-lectures",
    title: "Configuration audio Mac pour les cours et conférences en ligne",
    description:
      "Regarder une conférence tout en prenant des notes, rechercher des références sur Google et discuter avec des camarades de classe, le tout à des volumes différents. Voici comment gérer l'audio des élèves sur Mac.",
    date: "2026-04-22",
    readTime: "5 min read",
    content: `
<p>Vous êtes un étudiant qui suit une conférence en ligne sur Zoom. Vous avez un didacticiel YouTube ouvert dans un autre onglet pour référence. Vos camarades de classe discutent sur Discord. Spotify joue des rythmes lo-fi en arrière-plan. Votre Mac traite tous ces éléments comme un seul volume. Baissez le son et vous n'entendez pas votre professeur. Montez la conférence et les pings Discord brisent votre concentration.</p>

<p>macOS a un curseur de volume pour tout. Pour les étudiants jonglant avec plusieurs sources audio, il s’agit d’un point de friction constant.</p>

<h2>La pile audio typique d’un étudiant</h2>

<ul>
  <li><strong>Plateforme de conférence</strong> (Zoom, Teams, Google Meet, Webex) — doit être clair et toujours audible</li>
  <li><strong>Matériel de référence</strong> (Tutoriels YouTube, conférences enregistrées) — volume modéré, doit être mis en pause/réglable</li>
  <li><strong>Étudier la musique</strong> (Spotify, Apple Music) — niveau d'arrière-plan faible, ne devrait pas rivaliser avec le cours magistral</li>
  <li><strong>Discuter</strong> (Discord, iMessage, Slack) – sons de notification subtils, non perturbateurs</li>
  <li><strong>Onglets du navigateur</strong> — contenu occasionnel en lecture automatique qui doit être désactivé instantanément</li>
</ul>

<h2>La limitation macOS</h2>

<p>Avec un seul volume système, vous êtes obligé de faire des compromis. Réglez-le suffisamment haut pour le micro d'un professeur silencieux, et Spotify est trop fort. Réglez-le sur une musique confortable et la conférence est inaudible. Désactivez Spotify et vous perdez l'avantage de la musique de fond. Il n’y a pas d’équilibre confortable car chaque application est verrouillée au même niveau.</p>

<h2>Configuration de l'audio par application pour étudier</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> donne à chaque application son propre curseur de volume, afin que vous puissiez créer la configuration audio idéale pour l'étude :</p>

<img src="/apps/sounddial.png" alt="Configuration étudiant SoundDial : cours à plein volume, musique d'étude faible, notifications désactivées" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Profil de cours</h3>
<ul>
  <li><strong>Zoom / Equipes / Rencontre :</strong> 100 % – ne manquez jamais un mot</li>
  <li><strong>Spotify :</strong> 15 % — ambiance de fond à peine présente</li>
  <li><strong>Discorde :</strong> 10 % – notifications subtiles uniquement</li>
  <li><strong>Navigateur :</strong> 40 % – pour des vidéos de référence en cas de besoin</li>
  <li><strong>iMessage :</strong> en sourdine – vérifier entre les cours</li>
</ul>

<h3>Profil d'autoformation</h3>
<ul>
  <li><strong>Spotify :</strong> 50 % – musique d'étude motivante</li>
  <li><strong>Navigateur :</strong> 70 % – vidéos didactiques à un niveau clair</li>
  <li><strong>Discorde :</strong> 20 % – disponible pour le groupe d'étude</li>
  <li><strong>Tout le reste :</strong> en sourdine</li>
</ul>

<h3>Profil de rupture</h3>
<ul>
  <li><strong>Tout :</strong> 60-80 % – détendez-vous entre les cours</li>
</ul>

<p>Enregistrez chacun en tant que profil de volume et basculez entre eux en un seul clic au fur et à mesure de votre journée. Lorsqu'un cours commence, appliquez « Lecture » : l'auto-ducking se chargera du reste, réduisant automatiquement votre musique lorsque le professeur parle via votre micro.</p>

<h2>Pourquoi c'est important pour la concentration</h2>

<p>Les études montrent systématiquement qu’avoir le bon environnement audio améliore la concentration et la rétention. Un mauvais mélange – musique trop forte, notifications trop fréquentes, cours trop silencieux – crée une charge cognitive qui n'a rien à voir avec la matière que vous étudiez. Obtenir le bon son une fois, l'enregistrer en tant que profil et ne plus jamais y penser supprime une source constante de distraction.</p>

<p>Disponible sur le <a href="https://apps.apple.com/app/sounddial/id6772792641">MacApp Store</a> — Évalué par Apple, 14,99 € d'achat unique, sans abonnement, macOS 14.2+.</p>
`,
  },
  "mac-sound-not-working-after-update": {
    slug: "mac-sound-not-working-after-update",
    title: "Le son Mac ne fonctionne pas après la mise à jour ? Guide de réparation complet",
    description:
      "Vous avez mis à jour macOS et maintenant votre son a disparu, crépite ou reste bloqué au mauvais volume. Voici toutes les solutions pour que votre audio Mac fonctionne à nouveau.",
    date: "2026-04-25",
    readTime: "7 min read",
    content: `
<p>Vous avez mis à jour macOS. Tout semblait bien, jusqu'à ce que vous remarquiez qu'il n'y avait aucun son. Ou le son crépite. Ou le volume est bloqué. Ou votre périphérique de sortie audio a disparu. Des problèmes audio post-mise à jour surviennent avec presque toutes les versions de macOS, et ils vont de légèrement ennuyeux à complètement silencieux.</p>

<p>Voici un guide systématique pour corriger l'audio Mac après une mise à jour de macOS, couvrant tous les problèmes et solutions connus.</p>

<h2>Étape 1 : Vérifiez l'évidence</h2>

<h3>Est-ce qu'il est en sourdine ?</h3>
<p>Appuyez sur la touche d'augmentation du volume. Vérifiez si l'indicateur de volume apparaît à l'écran. Parfois, les mises à jour réinitialisent le volume du système à zéro ou activent la sourdine.</p>

<h3>Le bon périphérique de sortie est-il sélectionné ?</h3>
<p>Accédez à Paramètres système → Son → Sortie. Après une mise à jour, macOS passe parfois à un périphérique de sortie inattendu : les haut-parleurs d'un moniteur connecté, un périphérique Bluetooth qui n'est pas connecté ou les haut-parleurs intégrés lorsque vous souhaitez des haut-parleurs externes. Sélectionnez le bon appareil.</p>

<h3>La sécurité des écouteurs limite-t-elle le volume ?</h3>
<p>Les mises à jour réinitialisent parfois la sécurité des écouteurs à sa valeur par défaut (activée). Vérifiez Paramètres système → Son → Sécurité des écouteurs et désactivez « Réduire le son fort » s'il a été activé par la mise à jour.</p>

<h2>Étape 2 : Redémarrez Core Audio</h2>

<p>Le démon audio (coreaudiod) se retrouve souvent dans un mauvais état après une mise à jour. Le redémarrer est la solution la plus efficace.</p>

<p>Ouvrez Terminal et exécutez :</p>
<p><code>sudo killall coreaudiod</code></p>

<p>Le son sera brièvement coupé et redémarrera. Testez si le son fonctionne maintenant. Si cela résout le problème, le problème était un état de démon audio obsolète – courant après les mises à jour.</p>

<h2>Étape 3 : Réinitialiser la NVRAM/PRAM</h2>

<p>Pour les Mac Intel : éteignez complètement, puis rallumez tout en maintenant enfoncé <strong>Option + Commande + P + R</strong> pendant environ 20 secondes. Cela réinitialise la NVRAM, qui stocke les paramètres de volume, la sélection du disque de démarrage et d'autres préférences de bas niveau.</p>

<p>Pour les Mac Apple Silicon (M1/M2/M3/M4) : la NVRAM se réinitialise automatiquement en cas de besoin. Un redémarrage complet (pas seulement veille/réveil) est généralement suffisant.</p>

<h2>Étape 4 : Recherchez les conflits de pilotes audio tiers</h2>

<p>Les mises à jour de macOS cassent fréquemment les pilotes audio tiers et les extensions de noyau. Si l'un de ces éléments est installé, il se peut qu'ils soient à l'origine du problème :</p>

<ul>
  <li><strong>Fleur sonore</strong> — abandonné, souvent en conflit avec les nouveaux macOS</li>
  <li><strong>Trou Noir</strong> — périphérique audio virtuel, peut nécessiter une mise à jour après les mises à jour de macOS</li>
  <li><strong>Bouclage</strong> — peut avoir besoin d'une nouvelle version pour le macOS mis à jour</li>
  <li><strong>Musique de fond</strong> - installe un périphérique audio virtuel qui tombe fréquemment en panne lors des mises à jour</li>
  <li><strong>Pilotes d'interface audio</strong> — Focusrite, Universal Audio, etc. vérifiez les pilotes mis à jour</li>
</ul>

<p><strong>Corriger :</strong> Supprimez ou mettez à jour le logiciel en conflit. Pour les appareils audio virtuels, vérifiez si le périphérique audio installé par l'application apparaît dans Paramètres système → Son → Sortie — si c'est le cas et qu'il est sélectionné, passez à vos vrais haut-parleurs. Ensuite, mettez à jour ou désinstallez l'application tierce.</p>

<h2>Étape 5 : Démarrage en mode sans échec</h2>

<p>Démarrez en mode sans échec pour déterminer si le problème est causé par un élément de démarrage ou une extension tierce :</p>

<ul>
  <li><strong>Silicium Apple :</strong> Arrêter → maintenez le bouton d'alimentation enfoncé jusqu'à ce que "Chargement des options de démarrage" apparaisse → sélectionnez votre disque de démarrage → maintenez Shift → cliquez sur "Continuer en mode sans échec"</li>
  <li><strong>Intel :</strong> Redémarrer → maintenez Shift pendant le démarrage jusqu'à ce que vous voyiez la fenêtre de connexion</li>
</ul>

<p>Si l'audio fonctionne en mode sans échec, une extension de noyau tierce ou un élément de connexion en est la cause. Examinez les logiciels récemment installés.</p>

<h2>Étape 6 : Créez un nouveau compte utilisateur</h2>

<p>Si le problème persiste, créez un nouveau compte utilisateur temporaire (Paramètres système → Utilisateurs et groupes → Ajouter un utilisateur). Connectez-vous au nouveau compte et testez l'audio. Si le son fonctionne dans le nouveau compte, le problème vient de votre profil utilisateur : un fichier de préférences ou une configuration audio corrompu.</p>

<h2>Prévenir les problèmes futurs avec SoundDial</h2>

<p>Un avantage de <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> par rapport aux autres outils audio : il n'installe pas de pilote audio système. Il utilise l'API native Core Audio Tap d'Apple, ce qui signifie qu'il fonctionne proprement avec les mises à jour macOS sans les conflits qui affligent les applications de périphériques audio virtuels.</p>

<p>Si vous utilisez Background Music ou Soundflower et qu'ils sont tombés en panne après une mise à jour, SoundDial est un remplacement qui n'aura pas le même problème. Contrôle du volume par application, augmentation du volume jusqu'à 200 %, profils, atténuation automatique, le tout sans extension de noyau ni périphérique audio virtuel.</p>

<p>Disponible sur le <a href="https://apps.apple.com/app/sounddial/id6772792641">MacApp Store</a> — Évalué par Apple, 14,99 € d'achat unique, sans abonnement, macOS 14.2+.</p>
`,
  },
  "mute-all-apps-keyboard-shortcut-mac": {
    slug: "mute-all-apps-keyboard-shortcut-mac",
    title: "Comment désactiver toutes les applications à la fois sur Mac (et les réactiver parfaitement)",
    description:
      "Besoin d'un silence instantané ? La touche de sourdine coupe tout, mais la réactivation réinitialise vos volumes soigneusement équilibrés. Voici une meilleure façon de désactiver et de restaurer le son sur Mac.",
    date: "2026-04-28",
    readTime: "4 min read",
    content: `
<p>Quelqu'un entre dans la pièce. Votre patron vous appelle à l'improviste. Un client partage son écran lors d'un appel et votre musique commence à être diffusée via ses haut-parleurs. Vous avez besoin d'un silence instantané. Tout de suite.</p>

<p>Vous appuyez sur la touche muet. Tout devient calme. Crise évitée.</p>

<p>Puis le moment passe. Vous appuyez à nouveau sur la touche muet. Tout revient — mais au niveau du volume du système, qui ne se souvient pas que Spotify était à 30 %, Zoom à 100 % et Slack à 15 %. Ces niveaux individuels ? Disparu. Vous devez tout réajuster manuellement.</p>

<h2>La touche mute du système : instrument contondant</h2>

<p>La touche de sourdine du Mac (F10 ou la touche barre oblique du haut-parleur) coupe le son du son. <strong>sortie audio du système</strong>. Chaque application devient silencieuse simultanément. La réactivation restaure le volume du système là où il se trouvait, mais comme macOS n'a qu'un seul curseur de volume, il n'y a pas de niveaux par application à mémoriser ou à restaurer.</p>

<p>C'est très bien si vous n'utilisez qu'une seule application à la fois. C'est un problème si vous disposez de six applications soigneusement équilibrées à différents niveaux et que vous devez toutes les désactiver et les restaurer.</p>

<h2>Une sourdine plus intelligente : coupez tout par application</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> a un raccourci clavier « Tout désactiver » : <strong>Contrôle + Option + M (⌃⌥M)</strong>.</p>

<p>Quand vous appuyez dessus :</p>
<ol>
  <li>Chaque application est mise en sourdine individuellement (l'état du volume de chaque application est enregistré)</li>
  <li>Silence instantané — tout comme la touche muet</li>
</ol>

<p>Lorsque vous appuyez à nouveau dessus :</p>
<ol>
  <li>Chaque application est réactivée</li>
  <li>Chaque application revient à <strong>exactement</strong> le volume auquel il était avant que vous ne coupiez le son</li>
  <li>Spotify repasse à 30 %, Zoom à 100 %, Slack à 15 % – parfaitement restauré</li>
</ol>

<img src="/apps/sounddial.png" alt="Raccourci de mise en sourdine SoundDial – Ctrl+Option+M pour désactiver et réactiver toutes les applications avec la restauration du volume" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>La différence avec la touche de sourdine du système :</p>
<ul>
  <li><strong>Système muet :</strong> coupe la sortie → réactiver restaure un volume système → le solde par application n'existe pas</li>
  <li><strong>SoundDial coupe tout :</strong> coupe chaque application individuellement → réactiver restaure le volume individuel de chaque application → votre solde est préservé</li>
</ul>

<h2>Quand c'est important</h2>

<ul>
  <li><strong>Partage d'écran :</strong> Vous partagez votre écran et devez désactiver votre Mac avant que l'autre personne n'entende votre musique. ⌃⌥M → silence → fais ton truc → ⌃⌥M → la musique est de retour exactement au bon niveau.</li>
  <li><strong>Interruption inattendue :</strong> Quelqu'un entre, vous avez besoin de silence instantanément. Un raccourci, pas de souris, pas de fouille dans la barre de menus.</li>
  <li><strong>Appel téléphonique rapide :</strong> Votre téléphone de bureau sonne. Mettez le Mac en mode silencieux, prenez l'appel, réactivez le son lorsque vous avez terminé. Tout revient.</li>
</ul>

<p>Combiné avec le <strong>⌃⌥S</strong> raccourci (basculez le popover de SoundDial), vous pouvez gérer tout votre audio entièrement à partir du clavier : ouvrez le mixeur, ajustez les niveaux, fermez-le et coupez/réactivez tout sans toucher la souris.</p>

<p>Disponible sur le <a href="https://apps.apple.com/app/sounddial/id6772792641">MacApp Store</a> — 14,99 € d'achat unique, sans abonnement, macOS 14.2+.</p>
`,
  },
  "google-meet-volume-too-low-mac": {
    slug: "google-meet-volume-too-low-mac",
    title: "Le volume de Google Meet est trop faible sur Mac ? Comment y remédier",
    description:
      "Les voix sur Google Meet sont à peine audibles, même au volume maximum. Voici pourquoi Meet fonctionne via Chrome, ce que cela signifie pour l'audio et comment l'améliorer.",
    date: "2026-05-01",
    readTime: "5 min read",
    content: `
<p>Google Meet ne dispose pas d'application native Mac : elle s'exécute dans votre navigateur. Cela signifie que l'audio de Meet fait partie du flux audio de Chrome (ou Safari) et que tout problème de volume est lié à la façon dont votre navigateur gère l'audio. Démêleons-le.</p>

<h2>1. Vérifiez les paramètres audio de Meet</h2>

<p>Lors d'un appel Meet, cliquez sur le menu à trois points (⋮) → Paramètres → Audio. Assurez-vous que le bon haut-parleur est sélectionné. Meet utilise parfois par défaut un périphérique inattendu, en particulier si vous avez récemment connecté ou déconnecté du matériel audio.</p>

<h2>2. Vérifiez le volume des onglets de votre navigateur</h2>

<p>Dans Chrome : cliquez avec le bouton droit sur l'onglet Meet → assurez-vous que "Site muet" n'est PAS sélectionné. Un site en sourdine ne produit aucun son quels que soient les autres paramètres.</p>

<p>Dans Safari : cliquez sur l'icône du haut-parleur sur l'onglet pour vous assurer qu'elle n'est pas désactivée.</p>

<h2>3. Vérifiez la sortie du système</h2>

<p>Paramètres système → Son → Sortie. Vérifiez que le bon appareil est sélectionné et que le volume est au maximum. Vérifiez également la sécurité des écouteurs si vous utilisez des écouteurs.</p>

<h2>4. Le problème audio de Chrome</h2>

<p>Google Meet fonctionne comme un onglet Chrome et la sortie audio de Chrome peut être inférieure à celle des applications dédiées. Chrome traite l'audio via son propre moteur de rendu, qui possède son propre plafond de volume. Si le son global de Chrome est faible, Meet est faible, même si le volume macOS est à 100 %.</p>

<p>Il n'existe aucun moyen intégré d'augmenter l'audio de Chrome au-delà de son maximum. macOS traite Chrome comme une seule application avec un seul niveau de volume, et ce niveau atteint un maximum de 100 %.</p>

<h2>5. Problème de codec Bluetooth</h2>

<p>Si vous utilisez des AirPods ou des écouteurs Bluetooth, l'activation de votre microphone par Google Meet force le passage du codec Bluetooth d'AAC à SCO. Cela réduit considérablement la qualité audio et le volume.</p>

<p><strong>Corriger :</strong> Dans les paramètres audio de Meet, sélectionnez le microphone intégré de votre Mac comme périphérique d'entrée tout en conservant les écouteurs Bluetooth comme sortie. Cela empêche le changement de codec et maintient un son de haute qualité.</p>

<h2>6. Boostez Google Meet (Chrome) au-delà de 100 %</h2>

<p>Si Meet est encore trop silencieux après avoir tout vérifié, vous devez amplifier l'audio de Chrome au-delà de ce que permet macOS.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> donne à Chrome son propre curseur de volume qui va jusqu'à <strong>200%</strong>. Étant donné que Google Meet s'exécute dans Chrome, l'amélioration de Chrome améliore Meet. Faites glisser le curseur sur 150 % ou 180 % et l'audio de l'appel est amplifié en temps réel.</p>

<img src="/apps/sounddial.png" alt="SoundDial augmente le volume de Google Meet (Chrome) au-delà de 100 % sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Cela fonctionne également avec Safari si vous utilisez Meet dans Safari. SoundDial contrôle chaque navigateur indépendamment : améliorez Safari pour Meet tout en gardant Chrome au volume normal pour tout le reste.</p>

<p>Et grâce à l'auto-ducking, votre musique de fond diminue automatiquement lorsqu'un appel Meet démarre (lorsque votre micro est activé) et se rétablit à la fin de l'appel.</p>

<p>Disponible sur le <a href="https://apps.apple.com/app/sounddial/id6772792641">MacApp Store</a> — Évalué par Apple, 14,99 € d'achat unique, sans abonnement, macOS 14.2+.</p>
`,
  },
  "mac-alert-volume-separate-from-media": {
    slug: "mac-alert-volume-separate-from-media",
    title: "Comment définir le volume d'alerte Mac séparément du volume multimédia",
    description:
      "macOS possède un curseur de volume d'alerte caché, mais il ne couvre que les sons du système. Voici comment réellement séparer le volume des notifications et celui des médias sur Mac.",
    date: "2026-05-02",
    readTime: "5 min read",
    content: `
<p>Votre musique est à un niveau parfait. Ensuite, un son d'alerte macOS se déclenche – l'effet sonore « Funk » ou « Tink » – et il est terriblement fort par rapport à votre musique. Ou l'inverse : vos alertes sont inaudibles car le volume de votre système est faible pour une musique de fond douce.</p>

<p>Vous souhaitez deux commandes de volume distinctes : une pour les médias (musique, appels, vidéo) et une pour les alertes et notifications. macOS prend en charge cela partiellement, mais la solution complète nécessite un outil tiers.</p>

<h2>Volume d'alerte intégré de macOS</h2>

<p>macOS dispose d'un volume d'alerte distinct. Aller à <strong>Paramètres système → Son</strong> et cherche le <strong>"Volume d'alerte"</strong> curseur. Cela contrôle le volume des sons du système macOS (bips d'erreur, vidage de la corbeille, obturateur de capture d'écran) indépendamment du volume principal du système.</p>

<p>Vous pouvez également choisir le son d'alerte à utiliser et si vous souhaitez « jouer des effets sonores via » votre périphérique de sortie sélectionné ou les haut-parleurs intégrés.</p>

<h3>Ce que contrôle le volume d'alerte</h3>
<ul>
  <li>Sons d'alerte du système macOS (Funk, Tink, Bottle, etc.)</li>
  <li>Sons du Finder (Corbeille, copie du fichier terminée)</li>
  <li>Certains sons d'application intégrés</li>
</ul>

<h3>Ce qu'il ne contrôle pas</h3>
<ul>
  <li>Sons de notification Slack</li>
  <li>Sons de notification Discord</li>
  <li>Équipes/Sons Zoom</li>
  <li>Sons de notification par courrier</li>
  <li>Toute notification d'application tierce retentit</li>
  <li>Sons de notification du navigateur</li>
</ul>

<p>Les applications tierces diffusent leurs sons de notification via leur propre moteur audio : ils sont traités comme du son d'application normal et non comme des alertes système. Le curseur de volume d’alerte n’a aucun effet sur eux. Cela signifie que les applications qui émettent les sons de notification les plus ennuyeux (Slack, Discord, Teams) sont celles que le volume d'alerte de macOS ne peut pas toucher.</p>

<h2>La vraie solution : le volume par application pour les applications de notification</h2>

<p>Pour véritablement séparer le volume des notifications du volume multimédia, vous avez besoin d'un contrôle du volume par application. Réglez Slack sur 15 %, Discord sur 20 % et Mail sur 10 % – tout en gardant Spotify à 50 % et votre navigateur à 60 %.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> donne à chaque application son propre curseur de volume. Vous pouvez définir les applications nécessitant beaucoup de notifications à un niveau subtil, perceptible mais pas choquant, tout en conservant les applications multimédias à un volume d'écoute confortable.</p>

<img src="/apps/sounddial.png" alt="SoundDial séparant le volume de l'application de notification du volume de l'application multimédia sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Exemple de configuration</h3>
<p><strong>Applications multimédia :</strong></p>
<ul>
  <li>Spotify : 50 %</li>
  <li>Safari/Chrome : 60 %</li>
  <li>QuickTime/VLC : 70 %</li>
</ul>

<p><strong>Applications de notifications :</strong></p>
<ul>
  <li>Marge : 15 %</li>
  <li>Discorde : 20 %</li>
  <li>Courrier : 10%</li>
  <li>Calendrier : 25%</li>
</ul>

<p><strong>Applications de communication :</strong></p>
<ul>
  <li>Zoom/Équipes : 100%</li>
  <li>FaceTime : 100 %</li>
</ul>

<p>Enregistrez-le en tant que profil et appliquez-le en un seul clic. La séparation entre les notifications et le volume multimédia que macOS ne fournit pas de manière native, réalisée en moins d'une minute.</p>

<p>Disponible sur le <a href="https://apps.apple.com/app/sounddial/id6772792641">MacApp Store</a> — Évalué par Apple, 14,99 € d'achat unique, sans abonnement, macOS 14.2+.</p>
`,
  },
  "facetime-volume-too-low-mac": {
    slug: "facetime-volume-too-low-mac",
    title: "Le volume des appels FaceTime est trop faible sur Mac ? Comment y remédier",
    description:
      "L'audio FaceTime est à peine audible sur votre Mac, même à plein volume. Voici toutes les solutions, des paramètres sonores à l'augmentation de FaceTime au-delà de 100 %.",
    date: "2026-05-04",
    readTime: "5 min read",
    content: `
<p>Les appels FaceTime sur votre iPhone fonctionnent bien. Mais sur votre Mac, l'autre personne a l'air de chuchoter depuis trois pièces plus loin. Le volume est maximum. Vous avez vérifié tout ce à quoi vous pouvez penser. Encore trop calme.</p>

<p>Le faible volume FaceTime sur Mac est un problème courant et il a plusieurs causes possibles. Passons en revue chacun d'entre eux.</p>

<h2>1. Vérifiez le périphérique de sortie</h2>

<p>Accédez à Paramètres système → Son → Sortie. Assurez-vous que le bon périphérique est sélectionné. Si vous avez récemment connecté ou déconnecté un casque, un écran ou des appareils Bluetooth, macOS peut avoir basculé automatiquement vers une sortie inattendue, comme un moniteur avec des haut-parleurs intégrés à peine fonctionnels.</p>

<h2>2. Vérifiez les paramètres audio de FaceTime</h2>

<p>Pendant un appel FaceTime, cliquez sur la barre de menu et cochez FaceTime → Vidéo → sélectionnez le périphérique de sortie approprié sous Sortie audio. FaceTime peut parfois utiliser un périphérique de sortie différent de celui par défaut du système, en particulier après un changement de périphérique.</p>

<h2>3. Désactivez la commutation automatique des AirPods</h2>

<p>Si vous avez des AirPod associés à plusieurs appareils Apple, ils peuvent s'éloigner automatiquement de votre Mac en cours d'appel. Vérifiez les paramètres système → Bluetooth → cliquez sur « i » à côté de vos AirPods → « Se connecter à ce Mac » → réglez sur « Lors de la dernière connexion à ce Mac » au lieu de « Automatiquement » pour empêcher la commutation en cours d'appel.</p>

<h2>4. Problème de codec Bluetooth</h2>

<p>L'utilisation d'AirPods ou d'écouteurs Bluetooth avec FaceTime déclenche le commutateur de codec AAC vers SCO (car FaceTime utilise votre microphone). SCO réduit la qualité audio et le volume. Utilisez un microphone séparé (micro Mac intégré ou USB) pour maintenir les AirPods en mode AAC de haute qualité.</p>

<h2>5. Volume limite de sécurité des écouteurs</h2>

<p>Paramètres système → Son → Sécurité des écouteurs. Si « Réduire le son fort » est activé, macOS limite le volume de votre casque. Désactivez-le ou augmentez le seuil.</p>

<h2>6. Réinitialiser l'audio de base</h2>

<p>Ouvrez Terminal et exécutez :</p>
<p><code>sudo killall coreaudiod</code></p>
<p>Cela redémarre le démon audio et peut corriger les états bloqués à faible volume. Rejoignez l'appel FaceTime après le redémarrage de l'audio.</p>

<h2>7. Augmentez le volume de FaceTime au-delà de 100 %</h2>

<p>Si tous les paramètres sont corrects et que FaceTime est encore trop silencieux (peut-être que l'autre personne a un microphone faible), vous devez amplifier au-delà de la limite de macOS.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> vous permet d'augmenter le volume de FaceTime jusqu'à <strong>200%</strong>. Ouvrez le panneau de la barre de menus, recherchez FaceTime et faites glisser son curseur au-delà de 100 %. L'audio de l'appel est amplifié en temps réel sans affecter aucune autre application.</p>

<img src="/apps/sounddial.png" alt="SoundDial augmente le volume d'appels FaceTime au-delà de 100 % sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial permet également l'inverse : si la sonnerie ou les sons de notification de FaceTime sont trop forts pendant le temps de mise au point, réduisez FaceTime à 20 % ou coupez-le tout en continuant à jouer votre musique. Un clic pour désactiver le son, un clic pour le réactiver.</p>

<p>Disponible sur le <a href="https://apps.apple.com/app/sounddial/id6772792641">MacApp Store</a> — Évalué par Apple, en bac à sable, achat unique, sans abonnement.</p>
`,
  },
  "mac-volume-keyboard-shortcuts": {
    slug: "mac-volume-keyboard-shortcuts",
    title: "Raccourcis clavier de volume Mac que vous ne connaissez probablement pas",
    description:
      "Au-delà des touches de volume de base : contrôle précis, désactivation d'applications spécifiques et raccourcis de volume par application. Chaque astuce du clavier audio Mac expliquée.",
    date: "2026-05-06",
    readTime: "5 min read",
    content: `
<p>Chaque utilisateur de Mac connaît les touches d'augmentation/diminution/muet du volume. Appuyez dessus et le volume du système change. Mais macOS possède plusieurs astuces de clavier cachées pour le contrôle audio que la plupart des gens ne découvrent jamais, ainsi que des raccourcis tiers qui accélèrent considérablement la gestion du volume.</p>

<h2>Raccourcis intégrés que tout le monde devrait connaître</h2>

<h3>Réglage précis du volume</h3>
<p>Tenir <strong>Option + Maj</strong> et appuyez sur la touche d'augmentation ou de diminution du volume. Chaque pression ajuste le volume par <strong>un quart</strong> d'un pas normal, vous donnant 64 niveaux au lieu de 16. Ceci est essentiel pour trouver le bon volume du casque tard dans la nuit, ou lorsque l'écart entre deux pas normaux est trop important.</p>

<h3>Réglage silencieux du volume</h3>
<p>Tenir <strong>Changement</strong> et appuyez sur le volume vers le haut ou vers le bas. Le volume change mais le son de retour audible « pop » est supprimé. Utile lorsque vous réglez le volume pendant un appel ou une présentation et que vous ne souhaitez pas que le son pop soit diffusé à tout le monde.</p>

<h3>Aller aux paramètres sonores</h3>
<p>Tenir <strong>Options</strong> et appuyez sur n’importe quelle touche de volume pour ouvrir directement Paramètres système → Son. Plus rapide que de naviguer manuellement dans les paramètres système.</p>

<h3>Commutateur de périphérique de sortie rapide</h3>
<p>Tenir <strong>Options</strong> et cliquez sur l'icône Son dans la barre de menu pour voir une liste de tous les périphériques de sortie (et d'entrée) disponibles. Cliquez sur un pour changer instantanément. Pas besoin d'ouvrir les paramètres système.</p>

<h2>Ce que les raccourcis clavier macOS ne peuvent pas faire</h2>

<p>Tous les raccourcis ci-dessus contrôlent le <strong>volume du système</strong> - un curseur qui affecte également chaque application. Il n'existe pas de raccourcis clavier intégrés pour :</p>

<ul>
  <li>Régler le volume d'une application spécifique</li>
  <li>Désactiver une application sans tout désactiver</li>
  <li>Basculer entre les configurations de volume enregistrées</li>
  <li>Basculer un panneau de mixage de volume</li>
</ul>

<p>macOS n'a tout simplement pas de contrôle du volume par application, il n'y a donc pas de raccourcis pour cela.</p>

<h2>Raccourcis clavier de volume par application avec SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> ajoute deux raccourcis clavier globaux qui étendent ce que macOS peut faire :</p>

<h3>Basculer le mixeur de volume : Contrôle + Option + S</h3>
<p>Presse <strong>⌃⌥S</strong> de n'importe où et le popover de SoundDial s'ouvre dans la barre de menu, affichant chaque application avec son propre curseur de volume. Ajustez ce dont vous avez besoin, appuyez à nouveau sur le raccourci (ou cliquez loin) pour le fermer. Vous ne quittez jamais votre application actuelle.</p>

<h3>Désactiver toutes les applications : Ctrl + Option + M</h3>
<p>Presse <strong>⌃⌥M</strong> pour couper instantanément le son de chaque application. Appuyez à nouveau dessus pour tout réactiver et restaurer chaque application à son volume précédent. Il s'agit d'un bouton de « silence instantané » qui est plus rapide que d'appuyer sur la touche de sourdine - et contrairement à la touche de sourdine du système, il restaure les volumes par application lorsque vous réactivez le son.</p>

<img src="/apps/sounddial.png" alt="Raccourcis clavier SoundDial — Ctrl+Option+S pour basculer, Ctrl+Option+M pour tout désactiver" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>Le flux de travail piloté par clavier</h2>

<p>Avec les raccourcis de SoundDial activés, vous pouvez gérer tout votre audio sans toucher la souris :</p>

<ol>
  <li><strong>⌃⌥S</strong> — ouvrir le mixeur</li>
  <li>Utilisez les touches fléchées ou la souris pour ajuster les curseurs individuels</li>
  <li><strong>⌃⌥S</strong> — fermez le mixeur</li>
  <li><strong>⌃⌥M</strong> - muet instantané lorsque quelqu'un entre dans la pièce</li>
  <li><strong>⌃⌥M</strong> - réactiver le son quand ils partent, tout revient à la normale</li>
</ol>

<p>Combiné avec <strong>profils de volumes</strong> (configurations enregistrées que vous changez d'un simple clic), vous pouvez gérer l'audio d'une douzaine d'applications sans jamais avoir besoin d'en ouvrir aucune individuellement.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenez SoundDial sur l'App Store Mac</a> — 14,99 € d'achat unique, sans abonnement, macOS 14.2+.</p>
`,
  },
  "background-music-app-not-working-mac": {
    slug: "background-music-app-not-working-mac",
    title: "L'application de musique de fond ne fonctionne pas sur macOS ? Essayez ces alternatives",
    description:
      "L'application gratuite Background Music a cessé de fonctionner après une mise à jour de macOS ? Voici pourquoi cela tombe en panne, que faire et les meilleures alternatives qui fonctionnent réellement en 2026.",
    date: "2026-06-08",
    readTime: "5 min read",
    content: `
<p>Background Music est une application Mac gratuite et open source populaire qui vous permet de contrôler le volume de base par application. Il fonctionne en installant un périphérique audio virtuel et en acheminant tout l'audio à travers celui-ci. Le problème : ça casse. Régulièrement.</p>

<p>Après presque chaque mise à jour de macOS (Ventura, Sonoma, Sequoia, Tahoe), les utilisateurs signalent les mêmes problèmes : l'installation du périphérique audio virtuel ne parvient pas à s'installer, des problèmes audio et des crépitements apparaissent, certaines applications ne sont pas détectées ou l'application plante simplement au lancement. Si vous avez recherché « La musique de fond ne fonctionne pas », vous n'êtes pas seul.</p>

<h2>Pourquoi la musique de fond continue de se briser</h2>

<p>La musique de fond fonctionne en installant un <strong>pilote de périphérique audio virtuel</strong> (un plugin Core Audio HAL). macOS achemine tout l'audio du système via ce périphérique virtuel et la musique de fond l'intercepte pour appliquer le contrôle du volume par application.</p>

<p>Le problème est qu'Apple modifie le fonctionnement des pilotes audio avec presque toutes les versions majeures de macOS. Les restrictions de sécurité se resserrent, les API changent et les mécanismes de chargement des pilotes évoluent. Étant donné que Background Music est un projet open source géré par des bénévoles, les mises à jour pour correspondre aux modifications d'Apple ne sont pas toujours opportunes.</p>

<p>Problèmes courants après les mises à jour de macOS :</p>
<ul>
  <li><strong>Le périphérique audio virtuel ne s'installe pas</strong> — Les nouvelles politiques de sécurité de macOS bloquent le pilote</li>
  <li><strong>Crépitement ou bégaiement audio</strong> — le périphérique virtuel introduit une latence que la version actuelle de macOS gère mal</li>
  <li><strong>Les applications n'apparaissent pas</strong> - les modifications apportées à la façon dont macOS signale les processus en cours d'exécution interrompent la détection des applications</li>
  <li><strong>Pas de son du tout</strong> - le périphérique virtuel est défini comme sortie par défaut mais ne transmet pas l'audio</li>
  <li><strong>Crash au lancement</strong> — incompatibilité avec la version actuelle de macOS</li>
</ul>

<h2>Comment réparer la musique de fond</h2>

<p>Si la musique de fond est actuellement interrompue :</p>

<ol>
  <li><strong>Vérifiez les mises à jour :</strong> Visitez la page des versions GitHub pour la musique de fond et voyez si une nouvelle version a été publiée pour votre version macOS.</li>
  <li><strong>Réinstaller :</strong> Désinstallez complètement la musique de fond (y compris le périphérique audio virtuel), redémarrez et installez la dernière version.</li>
  <li><strong>Réinitialiser le son :</strong> Si votre audio est bloqué sur le périphérique virtuel, accédez à Paramètres système → Son → Sortie et sélectionnez vos vrais haut-parleurs/écouteurs. Puis cours <code>sudo killall coreaudiod</code> dans Terminal.</li>
  <li><strong>Vérifiez les autorisations :</strong> Paramètres système → Confidentialité et sécurité – assurez-vous que la musique de fond dispose des autorisations nécessaires.</li>
</ol>

<h2>Alternatives qui n'utilisent pas de périphériques audio virtuels</h2>

<p>Le problème fondamental de la musique de fond est architectural : les appareils audio virtuels sont fragiles et rompent avec les mises à jour macOS. Les alternatives modernes utilisent celles d'Apple <strong>API Core Audio Tap</strong> (introduit dans macOS 14), qui permet aux applications d'intercepter l'audio par processus sans installer de pilote au niveau du système.</p>

<h3>SoundDial</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> utilise l'API Audio Tap moderne - pas de périphérique audio virtuel, pas de pilote système, pas d'extensions de noyau. Il exploite le flux audio de chaque application directement à l'aide de l'API prise en charge par Apple, ce qui signifie qu'il ne s'interrompt pas lors de la mise à jour de macOS.</p>

<img src="/apps/sounddial.png" alt="SoundDial — une alternative à la musique de fond qui n'installe pas de périphériques audio virtuels" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Ce que vous obtenez avec la musique de fond :</p>
<ul>
  <li><strong>Aucun périphérique audio virtuel</strong> - fonctionne avec la pile audio native d'Apple, ne s'interrompt pas lors des mises à jour</li>
  <li><strong>Augmentation du volume à 200 %</strong> — La musique de fond est plafonnée à 100 %</li>
  <li><strong>Profils de volumes</strong> - enregistrez et basculez entre les configurations (la musique de fond n'en a pas)</li>
  <li><strong>Esquive automatique</strong> - réduction automatique du volume pendant les appels (la musique de fond n'a qu'une pause automatique, pas d'esquive)</li>
  <li><strong>Mémoire de volume</strong> - mémorise les volumes par application entre les redémarrages</li>
  <li><strong>Raccourcis clavier</strong> - basculer le mixeur ou désactiver toutes les applications</li>
  <li><strong>Développement actif</strong> — régulièrement mis à jour pour la dernière version de macOS</li>
</ul>

<p>Le compromis : SoundDial est un achat payant unique, tandis que la musique de fond est gratuite. Mais une application qui fonctionne réellement vaut plus qu’une application gratuite qui tombe en panne tous les six mois. Et parce que SoundDial est sur le <a href="https://apps.apple.com/app/sounddial/id6772792641">MacApp Store</a>, il a été examiné par Apple, mis en bac à sable pour des raisons de sécurité et s'installe proprement : pas de téléchargement depuis GitHub, pas de compilation à partir des sources, pas d'octroi d'autorisations d'extension système.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenez SoundDial sur l'App Store Mac</a> — 14,99 € d'achat unique, sans abonnement, macOS 14.2+.</p>
`,
  },
  "soundsource-alternative-mac": {
    slug: "soundsource-alternative-mac",
    title: "Alternative SoundSource : contrôle du volume par application plus léger et moins cher pour Mac",
    description:
      "SoundSource est puissant mais coûteux et complexe. Si vous avez simplement besoin d'un contrôle du volume par application sans la boîte à outils d'ingénierie audio, voici ce qu'il faut utiliser à la place.",
    date: "2026-06-06",
    readTime: "6 min read",
    content: `
<p>SoundSource de Rogue Amoeba est l'application de contrôle du volume par application la plus ancienne pour Mac. Il est puissant, bien conçu et doté de fonctionnalités telles que l'égaliseur par application, les chaînes d'effets audio et le routage de sortie par application. Il coûte également 39 $, nécessite un pilote audio système (ACE) et possède plus de fonctionnalités que la plupart des gens n'en utiliseront jamais.</p>

<p>Si tout ce que vous voulez, c'est désactiver Spotify sans affecter Zoom – et que vous n'avez pas besoin d'une boîte à outils complète d'ingénierie audio – SoundSource pourrait être plus que ce dont vous avez besoin. Voici ce qu'il faut considérer.</p>

<h2>Ce que SoundSource fait bien</h2>

<p>Crédit là où il est dû – SoundSource est une application professionnelle et raffinée :</p>
<ul>
  <li><strong>Contrôle du volume par application</strong> avec des curseurs à grain fin</li>
  <li><strong>Égaliseur par application</strong> avec égaliseurs intégrés et prise en charge du plugin Audio Unit</li>
  <li><strong>Routage de sortie par application</strong> - envoyer différentes applications à différents haut-parleurs</li>
  <li><strong>Augmentation du volume</strong> passé 100 %</li>
  <li><strong>Effets audio à l'échelle du système</strong></li>
</ul>

<p>Si vous êtes un podcasteur, un streamer ou un professionnel de l'audio qui a besoin d'un égaliseur et de chaînes d'effets par application, SoundSource est spécialement conçu pour vous.</p>

<h2>Là où SoundSource n’est pas à la hauteur des utilisateurs réguliers</h2>

<h3>Prix</h3>
<p>39 $ USD, c'est cher pour une application de contrôle du volume. Si vous n'utilisez pas l'égaliseur, les effets audio ou le routage par application, vous payez pour des fonctionnalités auxquelles vous ne toucherez jamais.</p>

<h3>Pilote système</h3>
<p>SoundSource installe un pilote audio système personnalisé appelé ACE (Audio Capture Engine). Cela fonctionne bien mais ajoute de la complexité : il doit être mis à jour avec chaque version de macOS, peut parfois entrer en conflit avec d'autres logiciels audio et signifie que vous exécutez du code tiers au niveau audio du système. Certains services informatiques des environnements d'entreprise bloquent les extensions du noyau et les pilotes audio au niveau du système.</p>

<h3>Aucun profil de volume</h3>
<p>Malgré son vaste ensemble de fonctionnalités, SoundSource ne dispose pas de système de profil. Vous ne pouvez pas enregistrer une configuration « Réunion » et une configuration « Focus » et basculer entre elles. Chaque fois que votre situation change, vous ajustez chaque curseur manuellement.</p>

<h3>Pas d'esquive automatique</h3>
<p>SoundSource ne réduit pas automatiquement le son de fond lorsque vous rejoignez un appel. Il n'y a pas de détection d'appel, pas de réglage automatique du volume, pas de flux de travail mains libres pour le cas d'utilisation le plus courant d'un mélangeur par application.</p>

<h2>SoundDial : axé sur ce dont la plupart des gens ont réellement besoin</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> adopte une approche différente : effectuez parfaitement le travail de base, ignorez les fonctionnalités dont la plupart des gens n'ont pas besoin et ajoutez les fonctionnalités de flux de travail qui manquent à SoundSource.</p>

<table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;">
<thead>
<tr style="border-bottom:2px solid rgba(255,255,255,0.2);">
  <th style="text-align:left;padding:10px 12px;color:rgba(255,255,255,0.6);">Caractéristique</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundDial</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">Source sonore</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Volume par application</td>
  <td style="text-align:center;padding:10px 12px;">Oui (0-200%)</td>
  <td style="text-align:center;padding:10px 12px;">Oui</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Muet par application</td>
  <td style="text-align:center;padding:10px 12px;">Oui</td>
  <td style="text-align:center;padding:10px 12px;">Oui</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Profils de volumes</td>
  <td style="text-align:center;padding:10px 12px;">Oui</td>
  <td style="text-align:center;padding:10px 12px;">Non</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Esquive automatique</td>
  <td style="text-align:center;padding:10px 12px;">Oui</td>
  <td style="text-align:center;padding:10px 12px;">Non</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Mémoire de volume</td>
  <td style="text-align:center;padding:10px 12px;">Oui</td>
  <td style="text-align:center;padding:10px 12px;">Oui</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Égaliseur par application</td>
  <td style="text-align:center;padding:10px 12px;">Non</td>
  <td style="text-align:center;padding:10px 12px;">Oui</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Routage de sortie par application</td>
  <td style="text-align:center;padding:10px 12px;">Non</td>
  <td style="text-align:center;padding:10px 12px;">Oui</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Pilote audio système</td>
  <td style="text-align:center;padding:10px 12px;">Pas nécessaire</td>
  <td style="text-align:center;padding:10px 12px;">Obligatoire (ACE)</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Raccourcis clavier</td>
  <td style="text-align:center;padding:10px 12px;">Oui</td>
  <td style="text-align:center;padding:10px 12px;">Oui</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Prix</td>
  <td style="text-align:center;padding:10px 12px;">14,99 € une fois</td>
  <td style="text-align:center;padding:10px 12px;">39 $ USD</td>
</tr>
</tbody>
</table>

<img src="/apps/sounddial.png" alt="SoundDial — une alternative SoundSource plus légère et ciblée avec profils de volume et atténuation automatique" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>Lequel devriez-vous choisir ?</h2>

<ul>
  <li><strong>Choisissez SoundSource si :</strong> Vous avez besoin d'un égaliseur par application, de chaînes d'effets audio ou d'un routage de sortie par application. Vous êtes un podcasteur, un streamer ou un professionnel de l'audio. Le prix et le pilote du système ne vous dérangent pas.</li>
  <li><strong>Choisissez <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> si :</strong> Vous souhaitez un contrôle du volume par application avec des profils et un atténuation automatique. Vous voulez quelque chose de plus léger qui n’installe pas de pilote système. Vous voulez dépenser moins. Vous êtes un travailleur à distance, un joueur, un étudiant ou toute personne souhaitant simplement désactiver Slack sans affecter Zoom.</li>
</ul>

<p>SoundDial est disponible sur le <a href="https://apps.apple.com/app/sounddial/id6772792641">MacApp Store</a> - ce qui signifie qu'il a été examiné par Apple, mis en bac à sable pour des raisons de sécurité et qu'il s'installe/désinstalle proprement comme n'importe quelle application de l'App Store. Pas de téléchargement de DMG à partir de sites Web aléatoires, pas d'installation de pilote système, pas d'octroi d'autorisations d'extension du noyau. Achat unique, sans abonnement.</p>
`,
  },
  "mac-volume-too-loud-at-lowest-setting": {
    slug: "mac-volume-too-loud-at-lowest-setting",
    title: "Mac Volume trop fort au réglage le plus bas ? Comment devenir encore plus silencieux",
    description:
      "Même au niveau de volume le plus bas, votre Mac est trop bruyant, surtout tard dans la nuit avec des écouteurs. Voici comment obtenir un contrôle plus fin du volume et descendre en dessous du minimum.",
    date: "2026-05-08",
    readTime: "5 min read",
    content: `
<p>Il est minuit. Vous portez des écouteurs. Vous appuyez sur la touche de réduction du volume jusqu'à ce que vous soyez à l'encoche la plus basse – une barre. C'est encore trop fort. La prochaine pression est muette. Il n'y a rien entre les deux. Vous voulez un volume à 3 % mais macOS passe d'environ 6 % à 0 %.</p>

<p>Il s’agit d’une plainte courante concernant les écouteurs et les haut-parleurs sensibles. Les 16 niveaux de volume du macOS sont trop grossiers : le niveau audible le plus bas est toujours plus fort que ce dont vous avez besoin pour une écoute silencieuse tard dans la nuit.</p>

<h2>Correctif intégré : réglage du volume par quart de pas</h2>

<p>La plupart des utilisateurs de Mac ne le savent pas : vous pouvez obtenir <strong>Contrôle du volume 4x plus fin</strong> en utilisant un modificateur de clavier.</p>

<p>Tenir <strong>Option + Maj</strong> et appuyez sur les touches d'augmentation/diminution du volume. Chaque pression ajuste le volume d'un quart de pas normal, ce qui vous donne 64 pas au lieu de 16.</p>

<p>Cela vous permet de trouver des niveaux de volume entre les encoches normales. Cet écart entre « une mesure » et « muet » comporte désormais trois niveaux supplémentaires sur lesquels vous pouvez atterrir. Pour une écoute au casque tard dans la nuit, cela suffit souvent pour trouver un niveau confortable.</p>

<h2>Pourquoi certains contenus sont plus forts que d'autres au même volume</h2>

<p>Vous remarquerez peut-être que certaines applications semblent plus bruyantes que d'autres, même avec le même volume système. Spotify sur une barre semble plus fort qu'une vidéo YouTube sur une seule barre. En effet, chaque application émet du son à différents niveaux et le volume du système les adapte proportionnellement.</p>

<p>Une chanson masterisée à 0 dB (maximum) et un podcast enregistré à -15 dB auront un son radicalement différent au même volume du système. La chanson est 15 dB plus forte, ce qui est perçu comme environ trois fois plus forte à vos oreilles.</p>

<h2>La vraie solution : le volume par application pour un contrôle précis</h2>

<p>Le raccourci d'un quart d'étape est utile, mais il ajuste toujours toutes les applications de la même manière. Si Spotify à l'étape la plus basse est trop fort mais que votre appel Zoom à l'étape la plus basse est trop faible, vous êtes bloqué.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> vous propose des curseurs de volume par application avec un contrôle précis : chaque curseur se déplace par incréments de 1 %, de 0 % à 200 %. Vous pouvez régler Spotify sur 5 % et Zoom sur 40 % en même temps. Le niveau de contrôle est considérablement plus fin que les 16 étapes du système macOS.</p>

<img src="/apps/sounddial.png" alt="Contrôle du volume précis par application SoundDial avec incréments de 1 % sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Pour une utilisation du casque en fin de soirée :</p>
<ul>
  <li>Réglez le volume du système à un niveau modéré (40-50 %)</li>
  <li>Utilisez SoundDial pour affiner chaque application exactement au niveau souhaité</li>
  <li>Spotify à 8 % : une musique de fond à peine présente</li>
  <li>Navigateur à 15 % – assez silencieux pour les vidéos de fin de soirée</li>
  <li>Notifications désactivées – pas de pings forts et surprenants</li>
</ul>

<p>Enregistrez-le en tant que profil « Nuit » et appliquez-le en un seul clic lorsque vous mettez des écouteurs en dehors des heures d'ouverture.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenez SoundDial sur l'App Store Mac</a> — 14,99 € d'achat unique, sans abonnement, macOS 14.2+.</p>
`,
  },
  "one-airpod-louder-than-the-other-fix": {
    slug: "one-airpod-louder-than-the-other-fix",
    title: "Un AirPod plus bruyant que l’autre ? Chaque correctif expliqué",
    description:
      "L'AirPod gauche est plus silencieux que le droit (ou vice versa). Voici toutes les causes – du cérumen aux paramètres de balance macOS – et comment y remédier.",
    date: "2026-05-10",
    readTime: "5 min read",
    content: `
<p>Un AirPod, ça sonne bien. L'autre est nettement plus silencieux. La musique semble décentrée. Les voix semblent venir d'un côté. Il s’agit de l’une des plaintes les plus courantes concernant les AirPods, et elle propose généralement une solution simple.</p>

<h2>1. Nettoyez vos AirPod</h2>

<p>La cause la plus courante est physique : du cérumen ou des débris bloquent partiellement le maillage du haut-parleur d’un AirPod. Même une fine couche d’accumulation peut réduire considérablement le volume de ce côté.</p>

<p><strong>Comment nettoyer :</strong></p>
<ul>
  <li>Utilisez une brosse sèche à poils doux (une brosse à dents propre fonctionne) pour brosser délicatement le maillage du haut-parleur.</li>
  <li>Pour les embouts en silicone AirPods Pro : retirez l'embout et nettoyez l'embout ainsi que le maillage du haut-parleur en dessous.</li>
  <li>Utilisez un chiffon sec et non pelucheux pour l'extérieur</li>
  <li><strong>N'utilisez pas :</strong> de l'eau, de l'alcool, de l'air comprimé ou des objets pointus : ils peuvent endommager le maillage du haut-parleur ou pousser les débris plus loin à l'intérieur.</li>
</ul>

<p>Après le nettoyage, testez les deux AirPod. Dans la plupart des cas, cela résout le problème immédiatement.</p>

<h2>2. Vérifiez la balance audio dans macOS</h2>

<p>macOS possède un curseur de balance audio gauche-droite qui peut être décentré :</p>

<ol>
  <li>Aller à <strong>Paramètres système → Accessibilité → Audio</strong></li>
  <li>Trouver le <strong>Solde</strong> curseur</li>
  <li>Assurez-vous qu'il est exactement centré entre L et R</li>
</ol>

<p>Si le curseur a été déplacé d'un côté, c'est votre coupable. Centrez-le et le volume doit être égal des deux côtés.</p>

<p>Vérifiez également <strong>Paramètres système → Son</strong> — Certaines versions de macOS disposent également d'un curseur de balance dans les paramètres du périphérique de sortie.</p>

<h2>3. Réinitialisez vos AirPod</h2>

<p>Si le nettoyage et l'équilibrage ne vous aident pas, essayez de réinitialiser vos AirPod à leur état d'usine :</p>

<ol>
  <li>Mettez les deux AirPod dans l’étui de chargement</li>
  <li>Fermez le couvercle et attendez 30 secondes</li>
  <li>Ouvrez le couvercle</li>
  <li>Appuyez et maintenez enfoncé le bouton de configuration à l'arrière du boîtier pendant 15 secondes jusqu'à ce que le voyant d'état clignote en orange, puis en blanc.</li>
  <li>Réassociez les AirPod à votre Mac (Paramètres système → Bluetooth)</li>
</ol>

<p>Cela réinitialise tout calibrage audio stocké et peut corriger les déséquilibres de volume côté logiciel.</p>

<h2>4. Vérifiez l'audio mono</h2>

<p>Si la fonction d'accessibilité Mono Audio de macOS est activée, l'audio stéréo est mixé sur un seul canal et envoyé de manière égale aux deux AirPod. Bien que cela ne devrait pas entraîner de différences de volume, cela peut modifier la façon dont certains contenus sonnent et donner l’impression qu’un côté est « différent ».</p>

<p>Vérifiez : Paramètres système → Accessibilité → Audio → assurez-vous que « Mono Audio » est désactivé (sauf si vous en avez besoin).</p>

<h2>5. Interférence Bluetooth</h2>

<p>Les AirPod communiquent avec votre Mac via Bluetooth, et chaque AirPod communique également avec l'autre. En cas d'interférences Bluetooth importantes (routeurs WiFi, hubs USB 3.0, autres appareils Bluetooth), un AirPod peut recevoir un signal plus faible.</p>

<p><strong>Corriger :</strong> Rapprochez-vous de votre Mac. Déconnectez les appareils Bluetooth que vous n'utilisez pas. Si vous êtes à proximité d'un hub USB 3.0, essayez de l'éloigner : l'USB 3.0 est connu pour interférer avec le Bluetooth 2,4 GHz.</p>

<h2>6. Problème matériel</h2>

<p>Si aucun des correctifs ci-dessus ne fonctionne, un AirPod peut présenter un défaut matériel : un haut-parleur dégradé ou un maillage endommagé. Cela se produit avec le temps en cas d'utilisation intensive.</p>

<p><strong>Corriger :</strong> Contactez l’assistance Apple ou visitez un Apple Store. Si vos AirPod sont sous garantie ou AppleCare+, Apple remplacera l'AirPod concerné. Des remplacements individuels d’AirPod sont également disponibles à l’achat hors garantie.</p>

<h2>Meilleur équilibre audio avec contrôle du volume par application</h2>

<p>Bien que le contrôle du volume par application ne corrige pas un déséquilibre matériel entre les AirPod, il résout un problème connexe : lorsque certaines applications sont plus bruyantes que d'autres dans vos AirPod, cela peut exagérer la perception d'un déséquilibre.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> vous permet de régler chaque application sur un niveau de volume cohérent. Lorsque Spotify est à 40 %, Zoom à 100 % et Safari à 60 %, vous savez exactement à quoi vous attendre de chaque application : pas de sauts de volume soudains qui rendent un AirPod plus fort parce qu'une notification vient d'exploser à 100 %.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenez SoundDial sur l'App Store Mac</a> — 14,99 € d'achat unique, sans abonnement, macOS 14.2+.</p>
`,
  },
  "netflix-streaming-audio-too-quiet-mac": {
    slug: "netflix-streaming-audio-too-quiet-mac",
    title: "Netflix et le streaming audio sont-ils trop silencieux sur Mac ? Comment y remédier",
    description:
      "Les dialogues sont silencieux, puis une explosion secoue la pièce. Voici comment corriger les niveaux audio de streaming sur Mac et augmenter le contenu silencieux au-delà de 100 %.",
    date: "2026-05-17",
    readTime: "5 min read",
    content: `
<p>Vous regardez un film sur Netflix. Deux personnages sont en conversation – on les entend à peine. Vous augmentez le volume. Une scène d'action commence. Les explosions sont assourdissantes. Vous cherchez la touche de volume. Il s'agit de la plainte la plus courante concernant le streaming audio, et elle est pire sur les haut-parleurs intégrés du Mac.</p>

<p>Le problème ne vient pas de votre Mac. C'est ainsi que les films et les émissions de télévision sont maîtrisés – et le fait que macOS ne vous offre aucun outil pour y remédier.</p>

<h2>Pourquoi le streaming audio présente des variations de volume considérables</h2>

<p>Les films et les émissions de télévision sont maîtrisés avec une haute qualité <strong>plage dynamique</strong> — la différence entre les sons les plus faibles et les plus forts. Dans une salle de cinéma dotée de haut-parleurs puissants et d’un caisson de basses, cela semble incroyable. Les murmures sont intimes, les explosions sont viscérales.</p>

<p>Sur les haut-parleurs 2 pouces d'un MacBook, cette plage dynamique devient un handicap. Les parties silencieuses sont inférieures à ce que les petits haut-parleurs peuvent reproduire clairement, tandis que les parties fortes atteignent les limites physiques du haut-parleur. Vous finissez par ajuster constamment le volume – en augmentant le volume pour le dialogue, en le baissant pour l'action.</p>

<h2>Correctif 1 : activez « Réduire les sons forts » dans l'application de streaming</h2>

<p>Certains services de streaming disposent d'une fonction de normalisation du volume :</p>
<ul>
  <li><strong>Netflix :</strong> Pendant la lecture, cliquez sur l'icône du haut-parleur → vérifiez s'il existe une option "Réduire les sons forts" (disponible dans le navigateur et l'application native)</li>
  <li><strong>Apple TV+ :</strong> Paramètres → Accessibilité → « Réduire les sons forts »</li>
  <li><strong>Disney+ :</strong> Aucun paramètre équivalent actuellement disponible</li>
  <li><strong>Amazon Prime Vidéo :</strong> Fonctionnalité "Dialogue Boost" (si disponible pour le titre)</li>
</ul>

<p>Ces fonctionnalités compressent la plage dynamique, rendant les sons faibles plus forts et les sons forts plus silencieux. Le résultat est un volume plus uniforme qui fonctionne mieux sur les petites enceintes et à faibles niveaux d'écoute.</p>

<h2>Correctif 2 : vérifiez l'amplificateur de son de votre Mac</h2>

<p>Sur certains modèles Mac, macOS applique le traitement audio aux haut-parleurs intégrés. Vérifiez Paramètres système → Son pour voir s'il existe des options d'amélioration pour votre périphérique de sortie. Sur les modèles MacBook Pro 14" et 16", le système de haut-parleurs dispose d'un traitement audio spatial qui peut affecter le volume perçu.</p>

<h2>Correctif 3 : utilisez des écouteurs filaires</h2>

<p>Les écouteurs contournent entièrement le problème de la taille des haut-parleurs. Même les écouteurs filaires bon marché peuvent reproduire clairement un dialogue silencieux car le pilote est juste à côté de votre tympan. La plage dynamique qui pose problème sur les petites enceintes devient un avantage dans les écouteurs.</p>

<h2>Correctif 4 : Augmentez le streaming audio au-delà de 100 %</h2>

<p>Si le contenu est tout simplement trop silencieux – même avec la normalisation activée et le volume au maximum – vous avez besoin d'une amplification au-delà de celle fournie par macOS.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> vous permet de booster n'importe quelle application pour <strong>200%</strong>. Si Safari ou l'application Netflix est trop silencieuse, faites glisser son curseur au-delà de 100 %. L'audio est amplifié avant d'atteindre vos haut-parleurs, doublant ainsi le volume maximum pour cette application uniquement.</p>

<img src="/apps/sounddial.png" alt="SoundDial augmentant l'audio Netflix à 180 % sur Mac pour des dialogues plus clairs et un streaming audio" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Ceci est particulièrement utile lorsque :</p>
<ul>
  <li>Regarder un film étranger tranquille où les dialogues sont doux</li>
  <li>Diffusion de contenu plus ancien maîtrisé à des niveaux inférieurs</li>
  <li>Utiliser les haut-parleurs du MacBook dans un environnement bruyant</li>
  <li>Un service de streaming est nettement plus silencieux qu’un autre</li>
</ul>

<p>Et comme SoundDial contrôle chaque application indépendamment, augmenter Netflix à 150 % ne rend pas votre Spotify ou Slack plus fort. Chaque application reste à son propre niveau.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenez SoundDial sur l'App Store Mac</a> — 14,99 € d'achat unique, sans abonnement, macOS 14.2+.</p>
`,
  },
  "mac-audio-setup-remote-work": {
    slug: "mac-audio-setup-remote-work",
    title: "Mac Configuration audio pour le travail à distance : le guide complet",
    description:
      "Appels, musique, notifications et temps de concentration, le tout sur un seul Mac. Voici comment configurer votre audio pour que rien ne se batte pour attirer votre attention.",
    date: "2026-05-12",
    readTime: "8 min read",
    content: `
<p>Le travail à distance sur un Mac signifie que votre ordinateur est à la fois votre téléphone de bureau, votre radio, votre centre de notification et votre poste de travail en profondeur. Ce sont quatre modes audio fondamentalement différents, et macOS les traite tous de la même manière : un seul curseur de volume, tout au même niveau, aucun moyen de prioriser.</p>

<p>Ce guide explique comment configurer l'audio de votre Mac pour le travail à distance afin que les appels soient clairs, que la musique soit présente mais pas distrayante, que les notifications soient subtiles et que le temps de concentration soit réellement silencieux.</p>

<h2>Les quatre modes audio du travail à distance</h2>

<h3>1. Mode réunion</h3>
<p>Vous êtes en appel Zoom ou Teams. L’appel doit être parfaitement clair. La musique doit être silencieuse ou à peine audible. Slack ne devrait pas sonner dans votre oreille.</p>

<h3>2. Mode de mise au point</h3>
<p>Vous faites un travail en profondeur. Une musique de fond à faible niveau vous aide à vous concentrer. Les notifications doivent être à peine perceptibles – suffisamment présentes pour que vous remarquiez un message urgent, suffisamment silencieuses pour ne pas interrompre le flux.</p>

<h3>3. Mode collaboratif</h3>
<p>Vous êtes disponible pour recevoir des messages, surveiller Slack, peut-être regarder une vidéo de formation. Tout peut être à des niveaux modérés. Notifications à volume normal.</p>

<h3>4. Mode pause</h3>
<p>Musique à plein volume. YouTube à plein volume. Les notifications peuvent attendre.</p>

<h2>Configuration matérielle</h2>

<h3>La question du micro</h3>
<p>Si vous utilisez des AirPod pour les appels, envisagez plutôt d'utiliser un micro séparé. Lorsque les AirPod sont utilisés à la fois comme micro et haut-parleurs, macOS passe au codec Bluetooth SCO de qualité inférieure, ce qui réduit à la fois la qualité audio et le volume. Utiliser le micro intégré de votre Mac (ou un micro USB) tout en conservant les AirPods comme sortie évite complètement cela.</p>

<p>Pour une meilleure qualité d’appel : un microphone USB ou un casque avec micro intégré. Le Blue Yeti, l'Elgato Wave ou même un casque USB de base sonneront nettement mieux que le micro des AirPods pour vos collègues.</p>

<h3>Périphériques de sortie</h3>
<p>De nombreux travailleurs à distance utilisent deux périphériques de sortie :</p>
<ul>
  <li><strong>Écouteurs</strong> pour les appels : confidentialité, pas d'écho, son clair</li>
  <li><strong>Haut-parleurs</strong> pour la musique en dehors des heures d'appel — remplit la pièce, plus confortable pendant de longues périodes</li>
</ul>

<p>Utilisez Option-clic sur l'icône Son dans la barre de menu pour basculer rapidement entre les appareils. Ou utilisez le sélecteur de périphériques intégré de SoundDial, qui place vos périphériques de sortie juste à côté de vos commandes de volume.</p>

<h2>Configuration du logiciel</h2>

<h3>Gestion des notifications</h3>
<p>Accédez à Paramètres système → Notifications. Pour chaque application, décidez si vous avez besoin de notifications sonores :</p>
<ul>
  <li><strong>Garder les sons activés :</strong> Slack (si vous êtes réactif), Calendrier (réunions), Messages</li>
  <li><strong>Désactivez les sons :</strong> Mail (vérifiez votre emploi du temps), Actualités, applications sociales</li>
</ul>

<p>Cela réduit le nombre d'applications qui émettent des sons surprises, mais cela ne vous permet pas de contrôler le volume, mais simplement d'activer/désactiver.</p>

<h3>Modes de mise au point</h3>
<p>Créez au moins deux modes Focus dans Paramètres système → Focus :</p>
<ul>
  <li><strong>"Rencontre"</strong> - faites taire toutes les notifications à l'exception de votre application de calendrier</li>
  <li><strong>"Travail ciblé"</strong> - autorisez les notifications des DM Slack et de votre responsable, faites taire tout le reste</li>
</ul>

<p>Les modes de mise au point gèrent la suppression des notifications. Pour le contrôle du volume audio, vous avez besoin de quelque chose de plus.</p>

<h2>La pièce manquante : le contrôle du volume par application</h2>

<p>Contrôle des modes de mise au point <em>lequel</em> les notifications passent mais pas <em>à quel point</em> tout est. Vous disposez toujours d'un curseur de volume pour tout. Si vous voulez Slack à 15 %, Spotify à 35 % et Zoom à 100 %, macOS ne peut pas le faire.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> comble cette lacune en donnant à chaque application son propre curseur de volume. Configurez le son de votre travail à distance exactement comme vous le souhaitez :</p>

<img src="/apps/sounddial.png" alt="Configuration audio pour le travail à distance SoundDial : différents niveaux de volume pour Zoom, Spotify et Slack sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Enregistrer les profils pour chaque mode</h3>

<p><strong>Profil de la réunion :</strong></p>
<ul>
  <li>Zoom/Équipes : 100%</li>
  <li>Spotify : désactivé</li>
  <li>Slack : en sourdine</li>
  <li>Navigateur : désactivé</li>
</ul>

<p><strong>Profil de travail ciblé :</strong></p>
<ul>
  <li>Spotify : 30 %</li>
  <li>Marge : 10 %</li>
  <li>Zoom : 80 % (au cas où quelqu'un appelle)</li>
  <li>Navigateur : 40 %</li>
</ul>

<p><strong>Profil collaboratif :</strong></p>
<ul>
  <li>Tout à 50-70%</li>
  <li>Marge : 30 %</li>
</ul>

<p>Basculez entre les profils en un seul clic. Lorsqu'un appel démarre, l'auto-ducking de SoundDial abaisse automatiquement tout sauf votre application d'appel. À la fin, vos niveaux de profil sont restaurés.</p>

<h2>Le flux de travail quotidien</h2>

<ol>
  <li>Commencer le travail → appliquer le profil "Focus Work"</li>
  <li>Rejoindre une réunion → l'auto-ducking la gère automatiquement (ou applique le profil "Réunion")</li>
  <li>Fin de la réunion → restauration des volumes aux niveaux Focus Work</li>
  <li>Pause déjeuner → appliquer le profil "Pause", lancer la musique</li>
  <li>Travail approfondi de l'après-midi → retour au travail de concentration</li>
</ol>

<p>Effort manuel total : deux ou trois clics de profil par jour. Tout le reste est automatique.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenez SoundDial sur l'App Store Mac</a> — 14,99 € d'achat unique, sans abonnement, macOS 14.2+.</p>
`,
  },
  "stop-browser-tabs-auto-playing-audio-mac": {
    slug: "stop-browser-tabs-auto-playing-audio-mac",
    title: "Comment empêcher les onglets du navigateur de lire automatiquement l'audio sur Mac",
    description:
      "Un onglet d'arrière-plan commence à lire l'audio de nulle part. Annonces, vidéos, sites d'actualités : voici comment désactiver les onglets malveillants et contrôler le son du navigateur sur macOS.",
    date: "2026-05-14",
    readTime: "5 min read",
    content: `
<p>Vous avez vingt onglets ouverts. Vous travaillez dans l'un d'entre eux. Soudain, le son commence à jouer quelque part. Une publicité vidéo. Un clip d'actualité à lecture automatique. Un onglet que vous avez ouvert il y a une heure et qui a décidé qu'il était temps de commencer à faire du bruit. Vous vous démenez pour trouver de quel onglet il s’agit, en cliquant dessus un par un.</p>

<p>La lecture automatique de l'audio dans les onglets du navigateur est l'une des expériences les plus ennuyeuses sur n'importe quel ordinateur, et c'est pire sur Mac car macOS n'a aucun moyen de désactiver une application spécifique (et encore moins un onglet spécifique) sans tout désactiver.</p>

<h2>Désactiver la lecture automatique dans Safari</h2>

<p>Safari possède les meilleures commandes de lecture automatique intégrées de tous les navigateurs :</p>

<ol>
  <li>Ouvrez Safari → Paramètres (⌘,) → onglet Sites Web</li>
  <li>Sélectionnez "Lecture automatique" dans la barre latérale gauche</li>
  <li>Définissez la valeur par défaut en bas sur « Jamais de lecture automatique » ou « Arrêter le média avec le son ».</li>
</ol>

<p>"Arrêter les médias avec le son" est la meilleure option : il bloque les vidéos qui sont lues automatiquement avec l'audio mais permet la lecture automatique en sourdine (que de nombreux sites utilisent pour les vidéos d'arrière-plan décoratives). "Jamais Auto-Play" bloque tout.</p>

<p>Vous pouvez également configurer les paramètres par site dans ce même panneau si vous souhaitez autoriser la lecture automatique sur des sites spécifiques comme YouTube ou Netflix.</p>

<h2>Désactiver la lecture automatique dans Chrome</h2>

<p>Les commandes de lecture automatique de Chrome sont moins granulaires :</p>

<ol>
  <li>Aller à <code>chrome://settings/content/sound</code></li>
  <li>Activez l'option "Les sites peuvent diffuser du son" pour déterminer le comportement par défaut</li>
  <li>Ajoutez des sites spécifiques à la liste "Muet" pour les faire taire définitivement</li>
</ol>

<p>Chrome vous permet également de désactiver des onglets individuels : cliquez avec le bouton droit sur un onglet → "Site muet". Cela coupe tout le son de ce site jusqu'à ce que vous le rétablissiez.</p>

<h2>Désactiver rapidement un onglet</h2>

<p>Safari et Chrome affichent tous deux une icône de haut-parleur sur les onglets qui produisent de l'audio. Dans Safari, cliquez sur l'icône du haut-parleur dans l'onglet pour le désactiver. Dans Chrome, cliquez avec le bouton droit sur l'onglet et sélectionnez « Site muet ».</p>

<p>Cela fonctionne pour un onglet à la fois, mais si vous avez plusieurs onglets bruyants, vous cliquez dessus un par un.</p>

<h2>Le problème plus large : l'audio du navigateur par rapport à tout le reste</h2>

<p>Même avec la lecture automatique désactivée et les onglets désactivés, vous souhaiterez peut-être toujours contrôler le volume de votre navigateur par rapport aux autres applications. Peut-être que vous regardez un didacticiel YouTube lors d'un appel Zoom : vous voulez le didacticiel à 30 % et le zoom à 100 %. Ou vous écoutez de la musique de fond dans un onglet de navigateur et elle est en concurrence avec votre Spotify.</p>

<p>macOS traite l'ensemble du navigateur comme une seule application avec un seul volume. Vous ne pouvez pas rendre un onglet plus silencieux qu'un autre au niveau du système. Mais toi <em>peut</em> rendre l'ensemble du navigateur plus silencieux que les autres applications.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> donne à votre navigateur son propre curseur de volume, indépendant de toute autre application. Réduisez Safari à 30 % tout en gardant Zoom à 100 %. Désactivez complètement Chrome tout en continuant à jouer sur Spotify. Un clic.</p>

<img src="/apps/sounddial.png" alt="SoundDial contrôlant le volume du navigateur indépendamment des autres applications sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>C'est le moyen le plus rapide de gérer un onglet surprise en lecture automatique : au lieu de rechercher quel onglet fait du bruit, cliquez sur SoundDial dans la barre de menu et coupez le son du navigateur. Tout le reste continue de jouer. Lorsque vous avez trouvé et fermé l'onglet incriminé, réactivez le son du navigateur et son volume revient là où il se trouvait.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenez SoundDial sur l'App Store Mac</a> — 14,99 € d'achat unique, sans abonnement, macOS 14.2+.</p>
`,
  },
  "discord-volume-too-loud-mac": {
    slug: "discord-volume-too-loud-mac",
    title: "Le volume Discord est trop fort (ou silencieux) sur Mac ? Comment y remédier",
    description:
      "La discorde envahit votre jeu ou est trop silencieuse pour entendre vos coéquipiers. Voici comment contrôler le volume de Discord indépendamment de tout le reste sur macOS.",
    date: "2026-05-21",
    readTime: "5 min read",
    content: `
<p>Discord a deux problèmes de volume sur Mac. Soit c'est trop fort - les sons des notifications retentissent sur votre jeu et votre musique - soit c'est trop silencieux - vous ne pouvez pas entendre vos coéquipiers sur l'audio du jeu. Le problème est que macOS ne vous permet pas de régler le volume de Discord indépendamment. Il est verrouillé sur le même curseur système que tout le reste.</p>

<h2>Commandes de volume intégrées à Discord</h2>

<p>Discord dispose de plusieurs paramètres de volume internes. Avant de rechercher des solutions externes, assurez-vous qu'elles sont configurées :</p>

<h3>Volume de sortie</h3>
<p>Accédez à Discord → Paramètres (icône d'engrenage) → Voix et vidéo. Le curseur « Volume de sortie » contrôle le volume sonore de Discord. Si Discord est trop silencieux, assurez-vous qu'il est à 100 %. Si c'est trop fort, baissez-le ici.</p>

<p><strong>Limite :</strong> Cela contrôle le mixage interne de Discord, mais cela ne change pas le volume de Discord <em>par rapport à d'autres applications</em>. Si votre jeu est à 80 % du volume système et que Discord est également à 80 %, le réglage du curseur interne de Discord modifie la balance, mais vous êtes toujours verrouillé sur un seul volume système pour tout.</p>

<h3>Volume par utilisateur</h3>
<p>Cliquez avec le bouton droit sur n'importe quel utilisateur dans un canal vocal → "Volume utilisateur". Vous pouvez ajuster les utilisateurs individuels de 0 % à 200 %. Ceci est utile si une personne est plus bruyante ou plus silencieuse que les autres, mais cela ne résout pas l'équilibre global de Discord par rapport aux autres applications.</p>

<h3>Volume des notifications</h3>
<p>Discord → Paramètres → Notifications. Vous pouvez désactiver des sons de notification spécifiques (message, sourd, muet, rejoindre/quitter) individuellement. Cela réduit le nombre de sons perturbateurs mais ne vous permet pas de baisser leur volume : il suffit de les activer ou de les désactiver.</p>

<h2>Le vrai problème : la balance du volume au niveau du système</h2>

<p>Les commandes internes de Discord ajustent le propre mix de Discord. Mais le vrai problème est l'équilibre entre Discord et tout le reste sur votre Mac : votre jeu, votre musique, votre navigateur. macOS vous offre un seul curseur pour chacun d'eux.</p>

<p>Pour régler le volume de Discord par rapport à votre jeu, vous avez besoin d'un contrôle du volume par application – quelque chose que macOS ne fournit pas nativement.</p>

<h2>Corrigez-le avec SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> donne à Discord son propre curseur de volume dans votre barre de menus, indépendant de toutes les autres applications. Réglez Discord exactement au niveau souhaité – 100 % pour un chat vocal clair, 40 % pour un arrière-plan subtil ou entièrement mis en sourdine – sans toucher à votre jeu, votre musique ou quoi que ce soit d'autre.</p>

<img src="/apps/sounddial.png" alt="SoundDial contrôlant le volume Discord indépendamment du jeu et de la musique sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Configurations courantes</h3>

<p><strong>Jouer avec Discord :</strong></p>
<ul>
  <li>Discorde : 100 % (entendez toujours clairement vos coéquipiers)</li>
  <li>Jeu : 40 % (immersif mais pas écrasant)</li>
  <li>Spotify : 15% (musique de fond subtile)</li>
</ul>

<p><strong>Participer au chat vocal :</strong></p>
<ul>
  <li>Discorde : 80 %</li>
  <li>Navigateur/YouTube : 60 %</li>
  <li>Tout le reste : normal</li>
</ul>

<p><strong>Travail de focus (Discord en arrière-plan) :</strong></p>
<ul>
  <li>Discorde : muet ou 10 %</li>
  <li>Spotify : 50 %</li>
  <li>Marge : 15 %</li>
</ul>

<p>Enregistrez chacun sous un <strong>profil de volume</strong> dans SoundDial et changez en un seul clic. Pas de réajustement de six curseurs à chaque fois que vous changez d'activité.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenez SoundDial sur l'App Store Mac</a> — 14,99 € d'achat unique, sans abonnement, macOS 14.2+.</p>
`,
  },
  "switch-audio-output-quickly-mac": {
    slug: "switch-audio-output-quickly-mac",
    title: "Comment changer rapidement de sortie audio sur Mac (sans fouiller dans les paramètres)",
    description:
      "Basculer entre les haut-parleurs, les écouteurs et les moniteurs sur Mac prend trop de clics. Voici des moyens plus rapides de changer instantanément votre périphérique de sortie audio.",
    date: "2026-05-19",
    readTime: "5 min read",
    content: `
<p>Vous débranchez vos écouteurs et souhaitez que le son soit acheminé vers vos haut-parleurs. Ou vous connectez des AirPods et macOS sélectionne le mauvais appareil. Ou vous entrez dans une salle de réunion et devez passer au haut-parleur de la conférence. À chaque fois, c'est : Paramètres système → Son → Sortie → défilement → clic. Trop de clics pour quelque chose qui devrait en prendre un.</p>

<p>Voici toutes les façons de changer de sortie audio plus rapidement sur Mac — des raccourcis intégrés aux outils de la barre de menus qui éliminent complètement le clic.</p>

<h2>Méthode 1 : Option-cliquez sur l'icône du volume</h2>

<p>Il s’agit de la méthode intégrée la plus rapide et la plupart des gens ne la connaissent pas.</p>

<p>Tenir <strong>Options (⌥)</strong> et cliquez sur l'icône volume/son dans votre barre de menu. Au lieu du curseur de volume normal, vous obtenez une liste de tous les périphériques de sortie disponibles. Cliquez sur celui que vous voulez. Fait.</p>

<p>Si vous ne voyez pas l'icône du son dans votre barre de menus, activez-la : Paramètres système → Centre de contrôle → Son → sélectionnez "Toujours afficher dans la barre de menus".</p>

<p><strong>Limite :</strong> Cela affiche uniquement les périphériques de sortie – vous ne pouvez pas régler le volume par application ni voir ce qui est en cours de lecture à partir de ce menu.</p>

<h2>Méthode 2 : Centre de contrôle</h2>

<p>Cliquez sur l'icône Control Center (l'icône à deux bascules) dans la barre de menu → cliquez sur la section Son → cliquez sur le nom de l'appareil actuel pour voir toutes les sorties disponibles.</p>

<p><strong>Limite :</strong> C'est trois clics au lieu d'un. Légèrement plus lent que Option-clic sur l'icône de volume.</p>

<h2>Méthode 3 : raccourci des paramètres système</h2>

<p>Vous pouvez épingler Sound dans la barre latérale supérieure des paramètres système, mais cela nécessite toujours d'accéder à l'onglet Sortie et de sélectionner un périphérique. Pas vite.</p>

<h2>Méthode 4 : raccourci clavier (avec configuration)</h2>

<p>macOS ne dispose pas de raccourci clavier intégré pour changer de périphérique audio. Cependant, vous pouvez en créer un à l'aide d'Automator ou de raccourcis :</p>
<ol>
  <li>Ouvrir l'application Raccourcis</li>
  <li>Créez un nouveau raccourci qui exécute un script shell : <code>SwitchAudioSource -s "Nom du périphérique"</code> (nécessite le <code>switchaudio-osx</code> outil de ligne de commande de Homebrew)</li>
  <li>Attribuer un raccourci clavier au raccourci</li>
</ol>
<p>Cela fonctionne mais nécessite Homebrew, un outil de ligne de commande et une configuration manuelle par appareil. Pas pratique pour la plupart des utilisateurs.</p>

<h2>Méthode 5 : sélecteur de périphérique intégré à SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> inclut un sélecteur de périphérique de sortie directement dans la fenêtre contextuelle de sa barre de menus, à côté de vos curseurs de volume par application. Un clic pour ouvrir SoundDial, un clic pour changer d'appareil. Pas besoin de fouiller dans les paramètres système.</p>

<img src="/apps/sounddial.png" alt="SoundDial avec commutation de périphérique de sortie audio et contrôle du volume par application dans un seul panneau de barre de menus" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>L'avantage de changer d'appareil à l'intérieur de SoundDial : vous pouvez changer votre sortie <em>et</em> ajustez les volumes par application dans le même panneau. Passez aux AirPods et réduisez immédiatement Spotify tout en augmentant votre appel, le tout sans quitter le popover.</p>

<p>Combiné avec les SoundDial <strong>mémoire de volume</strong> fonctionnalité, chaque périphérique de sortie peut mémoriser ses propres niveaux de volume par application. Passez aux haut-parleurs et la balance du volume de vos « haut-parleurs » s’applique. Passez aux écouteurs et votre solde « écouteurs » s'applique. Pas de réajustement manuel.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenez SoundDial sur l'App Store Mac</a> — 14,99 € d'achat unique, sans abonnement, macOS 14.2+.</p>
`,
  },
  "fix-audio-crackling-popping-mac": {
    slug: "fix-audio-crackling-popping-mac",
    title: "Correction des crépitements et des éclats audio sur Mac : guide complet",
    description:
      "Le son de votre Mac crépite, craque ou bégaie, pendant la musique, les appels ou la lecture vidéo. Voici toutes les causes connues et les correctifs des problèmes audio macOS.",
    date: "2026-05-16",
    readTime: "8 min read",
    content: `
<p>Vous écoutez de la musique et entendez un pop. Puis un crépitement. Puis un bégaiement où le son se coupe pendant une fraction de seconde et revient. Ce n'est pas la chanson, c'est votre Mac. Les crépitements audio sur macOS sont extrêmement courants et ont au moins six causes différentes.</p>

<p>Ce guide couvre toutes les causes connues de crépitements, d'éclats et de bégaiements audio sur Mac, des correctifs logiciels au problème matériel que vous devriez connaître.</p>

<h2>1. Redémarrez Core Audio (la solution rapide)</h2>

<p>La solution la plus efficace aux crépitements audio soudains consiste à redémarrer le démon audio de macOS. Ouvrez Terminal et exécutez :</p>
<p><code>sudo killall coreaudiod</code></p>

<p>Le son sera coupé pendant une seconde et redémarrera. Dans de nombreux cas, les crépitements s’arrêtent immédiatement. Cela fonctionne parce que coreaudiod – le processus qui gère tout l'audio sur macOS – peut entrer dans un état corrompu après des cycles de veille/réveil, des connexions de périphériques Bluetooth ou des pannes d'applications.</p>

<p>Si cela résout le problème, le crépitement était dû à un problème temporaire avec le démon. S'il revient régulièrement, lisez la suite pour des correctifs permanents.</p>

<h2>2. Surcharge du processeur</h2>

<p>Les crépitements audio sont souvent corrélés à une utilisation élevée du processeur. Lorsque le processeur de votre Mac est saturé, il ne peut pas traiter les tampons audio assez rapidement, ce qui provoque des interruptions qui ressemblent à des craquements et des crépitements.</p>

<p><strong>Vérifiez :</strong> Ouvrez le moniteur d'activité (Applications → Utilitaires) et regardez l'onglet CPU. Si vous constatez une utilisation constamment élevée du processeur (80 % et plus), c'est probablement la cause.</p>

<p><strong>Corriger :</strong> Fermez les applications inutiles, en particulier celles qui nécessitent beaucoup de ressources, comme les navigateurs comportant de nombreux onglets, les éditeurs vidéo ou les machines virtuelles. Si un processus spécifique utilise trop de CPU, déterminez s'il se comporte normalement ou s'il doit être redémarré.</p>

<h2>3. Problèmes audio Bluetooth</h2>

<p>Le Bluetooth est la source de crépitement la plus courante pour les utilisateurs de casques et d'enceintes sans fil. Plusieurs choses peuvent en être la cause :</p>

<ul>
  <li><strong>Interférence :</strong> Les appareils WiFi, USB 3.0 et autres appareils Bluetooth peuvent interférer avec votre connexion audio. Essayez de vous rapprocher de votre Mac ou de supprimer les sources d'interférences.</li>
  <li><strong>Commutation de codec :</strong> Lorsqu'une application active votre microphone, macOS passe du codec AAC au codec SCO. Cette transition peut provoquer un bref crépitement ou un pop.</li>
  <li><strong>Encombrement Bluetooth :</strong> Si plusieurs appareils Bluetooth sont connectés simultanément, la radio peut avoir du mal. Déconnectez les appareils que vous n'utilisez pas.</li>
</ul>

<p><strong>Corriger :</strong> Réinitialisez Bluetooth en maintenant Shift + Option, en cliquant sur l'icône Bluetooth dans la barre de menu et en sélectionnant « Réinitialiser le module Bluetooth » (si disponible). Vous pouvez également supprimer l'appareil des paramètres Bluetooth et le réassocier.</p>

<h2>4. Inadéquation du taux d'échantillonnage</h2>

<p>Si votre périphérique de sortie audio fonctionne à une fréquence d'échantillonnage différente de celle de l'audio en cours de lecture, macOS doit rééchantillonner en temps réel. Ce rééchantillonnage peut introduire des artefacts, en particulier avec des tailles de tampon inférieures.</p>

<p><strong>Vérifiez :</strong> Ouvrez la configuration Audio MIDI (Applications → Utilitaires), sélectionnez votre périphérique de sortie et vérifiez la fréquence d'échantillonnage. Les débits courants sont de 44,1 kHz (qualité CD) et 48 kHz (standard vidéo/streaming).</p>

<p><strong>Corriger :</strong> Définissez la fréquence d'échantillonnage en fonction de votre cas d'utilisation le plus courant. Pour la musique : 44,1 kHz. Pour vidéo/streaming : 48 kHz. Si vous utilisez une interface audio USB, consultez sa documentation pour connaître la fréquence d'échantillonnage et la taille de la mémoire tampon optimales.</p>

<h2>5. Problèmes de mémoire tampon du périphérique audio USB</h2>

<p>Les périphériques audio USB externes (DAC, interfaces audio, écouteurs USB) peuvent grésiller si la taille de la mémoire tampon est trop petite pour la charge actuelle de votre système.</p>

<p><strong>Corriger :</strong> Dans Configuration Audio MIDI, sélectionnez votre périphérique USB et essayez d'augmenter la taille du tampon (si l'option est disponible). Dans les applications audio telles que Logic, Ableton ou GarageBand, augmentez la taille du tampon d'E/S dans les préférences audio. Un tampon plus grand signifie un peu plus de latence mais moins de problèmes audio.</p>

<h2>6. Régression de mise à jour macOS</h2>

<p>Certaines mises à jour de macOS introduisent des bugs audio. Cela s'est produit avec presque toutes les versions majeures de macOS : Catalina, Big Sur, Monterey, Ventura, Sonoma, Sequoia et Tahoe ont tous eu des crépitements audio signalés après la sortie initiale.</p>

<p><strong>Corriger :</strong> Vérifiez si Apple a publié une mise à jour ponctuelle (par exemple, 15.0.1, 15.1) qui résout les problèmes audio. Vous pouvez également consulter les forums des développeurs Apple et Reddit pour savoir si d'autres utilisateurs rencontrent le même problème. S'il s'agit d'un bogue macOS connu, un correctif arrive généralement dans une ou deux versions ponctuelles.</p>

<h2>7. Extensions de noyau ou plugins audio</h2>

<p>Les pilotes audio tiers, les périphériques audio virtuels ou les plugins audio peuvent entrer en conflit avec la pile audio native de macOS. Ceci est particulièrement courant avec les anciens logiciels audio qui utilisent des extensions de noyau (kexts) obsolètes dans les versions récentes de macOS.</p>

<p><strong>Corriger :</strong> Vérifiez si un logiciel audio tiers est installé : Soundflower, BlackHole, Loopback ou des pilotes d'interface audio plus anciens. Essayez de les désactiver ou de les désinstaller temporairement pour voir si les crépitements s'arrêtent. Si tel est le cas, recherchez les versions mises à jour compatibles avec votre version de macOS.</p>

<h2>Gestion de la qualité audio avec SoundDial</h2>

<p>Bien que SoundDial ne corrige pas directement les crépitements au niveau du matériel ou du système, il peut vous aider à gérer l'audio de manière à réduire le problème :</p>

<ul>
  <li><strong>Réduisez les sources audio concurrentes :</strong> Utilisez SoundDial pour désactiver les applications que vous n'utilisez pas activement. Moins de flux audio simultanés signifie moins de pression CPU sur le traitement audio.</li>
  <li><strong>Augmentation du volume au lieu du maximum du système :</strong> Si vous utilisez le volume du système à 100 % et continuez à pousser les applications plus fort, le chemin audio fonctionne à ses limites. Utiliser <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial's</a> par application pour amplifier des applications spécifiques à 200 % tout en maintenant le volume du système à un niveau plus confortable de 70 à 80 %. Cela peut réduire la distorsion au niveau de sortie du système.</li>
  <li><strong>Commutation rapide du périphérique de sortie :</strong> Si le crépitement est lié à un périphérique de sortie spécifique, SoundDial vous permet de changer de périphérique à partir de son panneau de barre de menus sans fouiller dans les paramètres système.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenez SoundDial sur l'App Store Mac</a> — 14,99 € d'achat unique, sans abonnement, macOS 14.2+.</p>
`,
  },
  "teams-volume-too-low-mac": {
    slug: "teams-volume-too-low-mac",
    title: "Volume Microsoft Teams trop faible sur Mac ? Chaque correctif qui fonctionne",
    description:
      "Vous pouvez à peine entendre les gens sur Teams, même au volume maximum ? Voici toutes les raisons – des paramètres Teams aux codecs Bluetooth – et comment augmenter le son des appels au-delà de 100 %.",
    date: "2026-06-04",
    readTime: "7 min read",
    content: `
<p>Vous êtes dans une réunion Teams. Votre collègue fait une présentation, mais sa voix semble provenir d'une boîte de conserve provenant de trois pièces à distance. Votre volume Mac est à 100%. Le volume des équipes est à 100%. Vous avez trouvé tout ce que vous pouviez trouver. Encore trop calme.</p>

<p>Le faible volume sur Microsoft Teams est l’une des plaintes les plus courantes Mac audio dans les environnements d’entreprise. Les causes sont différentes de celles de Zoom, et certaines corrections sont spécifiques à Teams. Passons en revue tout cela.</p>

<h2>1. Vérifiez les paramètres audio des équipes</h2>

<p>Cliquez sur l'icône de votre profil dans Teams → Paramètres → Appareils (ou Paramètres → Appareils audio dans les nouvelles équipes).</p>
<ul>
  <li>Assurez-vous que le bon <strong>Haut-parleur</strong> l'appareil est sélectionné - pas un moniteur déconnecté ou un appareil Bluetooth inactif</li>
  <li>Utilisez la fonction « Passer un appel test » pour vérifier que l'audio fonctionne à un volume raisonnable</li>
  <li>Vérifiez que « Suppression du bruit » n'est pas réglé sur « Élevé » : une suppression agressive du bruit peut réduire le volume de la voix perçu.</li>
</ul>

<h2>2. Nouvelles équipes contre équipes classiques</h2>

<p>Microsoft a remplacé « Classic Teams » par « New Teams » (construits sur un framework différent). La nouvelle version gère l'audio différemment. Si vous avez récemment migré :</p>
<ul>
  <li>Les paramètres du périphérique audio n'ont peut-être pas été conservés : vérifiez à nouveau la sélection de vos enceintes.</li>
  <li>La nouvelle Teams utilise le traitement audio WebRTC, qui peut se comporter différemment de la version classique</li>
  <li>Essayez de désactiver le « Mode Musique » s'il est activé (Paramètres → Périphériques audio) : cela modifie la façon dont Teams traite l'audio entrant.</li>
</ul>

<h2>3. Commutation de codec Bluetooth</h2>

<p>Si vous utilisez des AirPods ou des écouteurs Bluetooth, rejoindre un appel Teams oblige macOS à passer du codec AAC de haute qualité au codec SCO de qualité inférieure (car Teams active votre microphone). SCO réduit considérablement la qualité audio et le volume.</p>

<p><strong>Corriger :</strong> Utilisez le microphone intégré de votre Mac ou un micro USB tout en gardant un casque Bluetooth comme périphérique de sortie. Accédez à Teams → Paramètres → Appareils → Microphone et sélectionnez « Microphone MacBook Pro » (ou votre micro USB). Cela empêche le commutateur de codec, gardant vos écouteurs en mode AAC de haute qualité.</p>

<h2>4. Vérifiez le périphérique de sortie et le volume macOS.</h2>

<p>Accédez à Paramètres système → Son → Sortie. Vérifiez que le bon périphérique est sélectionné et que le volume de sortie est au maximum. Vérifiez également :</p>
<ul>
  <li><strong>Sécurité des écouteurs :</strong> Paramètres système → Son → Sécurité des écouteurs. Si « Réduire le son fort » est activé, cela limite le volume de votre casque.</li>
  <li><strong>Solde :</strong> Assurez-vous que le curseur d'équilibre gauche-droite est centré : s'il est incliné, un côté sera plus silencieux.</li>
</ul>

<h2>5. Réinitialiser l'audio de base</h2>

<p>Le démon audio de macOS reste parfois bloqué à un niveau de sortie faible après une mise en veille, un changement d'appareil ou des mises à jour Teams. Ouvrez Terminal et exécutez :</p>
<p><code>sudo killall coreaudiod</code></p>
<p>L'audio redémarre après une brève interruption. Rejoignez la réunion Teams et vérifiez si le volume s'est amélioré.</p>

<h2>6. Augmentez le volume des équipes au-delà de 100 %</h2>

<p>Si chaque paramètre est au maximum et que Teams est encore trop silencieux (peut-être qu'un participant a un mauvais micro ou que le son de la réunion est intrinsèquement faible), vous devez amplifier au-delà de ce que macOS autorise normalement.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> vous permet d'augmenter le volume de n'importe quelle application <strong>200%</strong>, y compris Microsoft Teams. Faites glisser le curseur de Teams sur 150 % ou 180 % et l'audio est amplifié en temps réel. Seul Teams devient plus fort : votre musique, votre navigateur et vos autres applications restent à leurs niveaux actuels.</p>

<img src="/apps/sounddial.png" alt="SoundDial augmente le volume d'appels de Microsoft Teams au-delà de 100 % sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial aide également à résoudre le problème inverse : si les sons des notifications Teams sont trop forts pendant le temps de concentration, réduisez Teams à 15 % ou désactivez-le complètement tout en continuant à jouer votre musique. Un clic pour désactiver le son, un clic pour le réactiver.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenez SoundDial sur l'App Store Mac</a> — 14,99 € d'achat unique, sans abonnement, macOS 14.2+.</p>
`,
  },
  "how-to-control-per-app-volume-on-mac": {
    slug: "how-to-control-per-app-volume-on-mac",
    title: "Comment contrôler le volume par application sur Mac",
    description:
      "macOS vous offre un seul curseur de volume pour tout. Voici comment obtenir des commandes de volume individuelles pour chaque application et pourquoi cela est plus important que vous ne le pensez.",
    date: "2026-05-20",
    readTime: "7 min read",
    content: `
<p>Vous êtes en appel vidéo. Slack continue de sonner. La musique joue en arrière-plan. Vous atteignez la touche de volume et tout devient plus silencieux. L'appel, la musique, les notifications. macOS a exactement un curseur de volume et il contrôle tout en même temps.</p>

<p>Windows dispose d'un mélangeur de volume par application depuis Vista en 2006. Vingt ans plus tard, macOS ne l'a toujours pas. Si vous souhaitez désactiver Spotify sans affecter votre appel Zoom, Apple n'a pas de réponse intégrée pour vous.</p>

<p>Ce guide explique ce qu'est le contrôle du volume par application, pourquoi macOS ne l'a pas et comment l'obtenir.</p>

<h2>Ce que signifie réellement le volume par application</h2>

<p>Le volume par application signifie que chaque application de votre Mac dispose de son propre curseur de volume indépendant. Vous pouvez régler Spotify à 30 %, maintenir Zoom à 100 %, désactiver complètement Slack et laisser Safari à 50 %, le tout en même temps. La modification du volume d'une application n'a aucun effet sur aucune autre application.</p>

<p>Ceci est différent du volume du système, qui est un seul curseur principal qui met tout à l'échelle proportionnellement. Si le volume de votre système est à 50 % et que Spotify joue à plein régime, il n'y a aucun moyen de baisser uniquement Spotify sans un mixeur par application.</p>

<h2>Pourquoi macOS n'inclut pas cela</h2>

<p>L'architecture audio d'Apple (Core Audio) prend absolument en charge le contrôle du volume par application au niveau du framework. La raison pour laquelle macOS ne l'expose pas dans l'interface utilisateur est un choix de philosophie de conception : Apple préfère moins de contrôles et une surface plus simple. Un curseur est plus simple que douze.</p>

<p>Le problème est que « plus simple » ne l'est plus dès lors que plusieurs sources audio rivalisent pour attirer votre attention. Une seule touche de volume qui contrôle tout est élégante lorsque vous faites une chose. Il est activement hostile lorsque vous êtes en communication avec de la musique et des notifications en même temps – c'est ainsi que la plupart des gens utilisent réellement leur Mac.</p>

<h2>Les solutions de contournement intégrées (et pourquoi elles ne fonctionnent pas)</h2>

<h3>1. Contrôles de volume dans l'application</h3>
<p>Certaines applications ont leurs propres curseurs de volume : Spotify, VLC, QuickTime. Mais la plupart ne le font pas. Ce n’est pas le cas de Slack. Ce n'est pas le cas des onglets Chrome. Les sons du système ne le sont pas. Et même lorsqu'une application possède un curseur, vous devez ouvrir cette application, trouver le curseur, l'ajuster, puis revenir à ce que vous faisiez. C'est cinq clics pour quelque chose qui devrait en être un.</p>

<h3>2. Configuration audio-MIDI</h3>
<p>macOS inclut la configuration Audio MIDI dans le dossier Utilitaires. Il vous permet de configurer des périphériques audio et de créer des périphériques agrégés, mais il n'a aucun contrôle de volume par application. C'est un outil de configuration de périphérique, pas un mixeur.</p>

<h3>3. Plusieurs périphériques de sortie</h3>
<p>Vous pouvez théoriquement acheminer différentes applications vers différents périphériques de sortie (écouteurs ou haut-parleurs) et contrôler ces appareils séparément. Mais cela nécessite du matériel supplémentaire, un routage manuel par application et ne vous donne pas réellement de volume indépendant – juste une marche/arrêt indépendante par appareil.</p>

<h2>Comment fonctionne un mélangeur de volume par application</h2>

<p>Un mélangeur de volume approprié par application se trouve dans votre barre de menus et affiche toutes les applications qui produisent actuellement de l'audio. Chaque application possède son propre curseur. Vous le faites glisser vers le haut ou vers le bas, et seul le volume de cette application change. Le volume du système reste intact.</p>

<p>Sous le capot, cela fonctionne en utilisant les ressources de macOS. <strong>API Core Audio Tap</strong> (introduit dans macOS 14) ou des techniques de périphérique audio virtuel plus anciennes pour intercepter le flux audio de chaque application indépendamment et mettre à l'échelle son amplitude avant qu'il n'atteigne les haut-parleurs.</p>

<p>Les principales caractéristiques qui distinguent un bon mixeur d’un mauvais :</p>

<ul>
  <li><strong>Détection d'applications en temps réel.</strong> Lorsqu'une nouvelle application commence à lire de l'audio, elle devrait apparaître automatiquement dans le mixeur. Aucune configuration manuelle.</li>
  <li><strong>Muet par application.</strong> Un clic pour faire taire une application spécifique sans toucher à la position de son curseur.</li>
  <li><strong>Augmentation du volume.</strong> Certaines applications (qui vous regardent, lecteurs de podcast silencieux) atteignent un niveau trop bas. Un bon mixeur vous permet de booster au-delà de 100 %.</li>
  <li><strong>Profils.</strong> Différentes configurations de volume pour différentes situations : "Focus" avec tout en sourdine sauf la musique, "Meeting" avec Zoom à 100 % et tout le reste à 20 %, "Gaming" avec le son du jeu amélioré.</li>
  <li><strong>Esquivement automatique.</strong> Baissez automatiquement la musique lorsque vous démarrez un appel et ramenez-la à la fin de l'appel. Cela vaut à lui seul l’intégralité de l’application.</li>
  <li><strong>Barre de menu native.</strong> Il devrait résider dans la barre de menus, pas dans une fenêtre du dock. Vous levez les yeux, vous vous ajustez et retournez au travail. Pas de changement d'application.</li>
</ul>

<h2>Qui a besoin de ça</h2>

<p>Toute personne qui fait plus d’une chose audio à la fois. C'est le cas de la plupart des gens, mais surtout :</p>

<ul>
  <li><strong>Travailleurs à distance</strong> — appels + musique + notifications est la collision la plus courante</li>
  <li><strong>Streamers et podcasteurs</strong> — un contrôle précis de ce que le public entend par rapport à ce que vous entendez</li>
  <li><strong>Musiciens et producteurs</strong> — nécessité d'isoler la sortie DAW des pistes de référence et des outils de communication</li>
  <li><strong>Joueurs</strong> - L'audio du jeu contre Discord contre la musique est un exercice d'équilibre constant</li>
  <li><strong>Toute personne fatiguée par les notifications</strong> - désactiver Slack, garder tout le reste</li>
</ul>

<h2>SoundDial</h2>

<p>j'ai construit <strong>SoundDial</strong> parce que le mélangeur de volume Mac que je voulais n'existait pas. Il se trouve dans votre barre de menus, affiche toutes les applications qui émettent du son et donne à chacune son propre curseur. Mise en sourdine par application, augmentation du volume, profils et atténuation automatique qui diminuent votre musique lorsqu'un appel démarre. Achat unique, macOS 14+, sans abonnement.</p>

<p>Le mélangeur de volume macOS aurait dû être intégré.</p>
`,
  },
  "mute-slack-notifications-mac-without-muting-everything": {
    slug: "mute-slack-notifications-mac-without-muting-everything",
    title: "Comment désactiver Slack sur Mac sans tout désactiver",
    description:
      "Les notifications Slack continuent d'interrompre votre concentration, mais vous ne voulez pas couper votre musique ou vos appels. Voici comment désactiver uniquement Slack sur macOS.",
    date: "2026-05-24",
    readTime: "5 min read",
    content: `
<p>Vous êtes profondément concentré sur votre travail. Spotify diffuse la playlist de concentration parfaite. Puis... <em>frapper la brosse</em> — Pings lâches. Et encore. Et encore. Trois canaux, deux DM et une notification de fil de discussion en trente secondes. Vous souhaitez désactiver Slack mais conserver votre musique. macOS dit : coupez tout le son ou ne coupez rien.</p>

<p>Les sons de notification de Slack sont l'une des principales plaintes audio des travailleurs à distance sur Mac. Ils sont conçus pour attirer votre attention, ce qui est exactement le problème lorsque vous avez besoin de vous concentrer.</p>

<h2>Option 1 : désactiver les notifications dans Slack lui-même</h2>

<p>Slack dispose d'une fonctionnalité « Suspendre les notifications » :</p>
<ol>
  <li>Cliquez sur votre photo de profil dans la barre latérale de Slack</li>
  <li>Cliquez sur "Suspendre les notifications"</li>
  <li>Choisissez une durée (30 min, 1 heure, 2 heures, etc.)</li>
</ol>

<p>Cela supprime les badges de notification et les sons pour la durée sélectionnée. Vous pouvez également désactiver des canaux individuels en cliquant avec le bouton droit → « Canal muet ».</p>

<p><strong>Limite :</strong> C'est tout ou rien par canal. Vous ne pouvez pas créer Slack <em>plus silencieux</em> - seulement complètement silencieux ou complètement allumé. Et si vous oubliez de reprendre la pause, vous manquerez des messages une fois votre session de discussion terminée. Il ne supprime pas non plus les sons de l'application Slack si l'application est ouverte.</p>

<h2>Option 2 : Désactiver les sons Slack dans les notifications macOS</h2>

<p>Accédez à Paramètres système → Notifications → Slack. Désactivez « Jouer le son pour les notifications ».</p>

<p><strong>Limite :</strong> Cela supprime définitivement tous les sons de notification Slack (jusqu'à ce que vous les réactiviez). Et cela n’affecte que les notifications au niveau macOS : si Slack lit les sons via son propre moteur audio, le paramètre de notification risque de ne pas les capter tous.</p>

<h2>Option 3 : utiliser un mode Focus</h2>

<p>Créez un mode Focus « Focus » ou « Travail » dans Paramètres système → Focus. Ajoutez Slack à la liste « Silence ». Lorsque vous activez le mode Focus, les notifications Slack sont supprimées.</p>

<p><strong>Limite :</strong> Les modes de mise au point suppriment les notifications visuellement et audiblement, mais ils ne vous offrent pas un contrôle précis du volume. Vous ne pouvez pas dire « Notifications Slack à 10 % du volume » : c'est soit entièrement autorisé, soit entièrement désactivé.</p>

<h2>Option 4 : contrôle du volume par application (la vraie solution)</h2>

<p>Ce que vous voulez en réalité est simple : baissez le volume de Slack à 10-15 % tout en gardant tout le reste à des niveaux normaux. Les pings faibles sont audibles si vous les écoutez, mais ils n'interrompent pas votre flux. La musique reste à plein volume. Les appels restent à plein volume.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> donne à Slack son propre curseur de volume indépendant. Réglez-le sur le niveau qui vous convient ou désactivez-le complètement en un seul clic. Lorsque vous êtes prêt à prêter à nouveau attention à Slack, réactivez-le et le volume revient là où il était.</p>

<img src="/apps/sounddial.png" alt="SoundDial avec Slack en sourdine et Spotify jouant à volume normal sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Le flux de travail Slack idéal</h3>
<ul>
  <li><strong>Temps de mise au point :</strong> Slack à 10 % ou en sourdine. Spotify à 40%. Aucune interruption.</li>
  <li><strong>Temps disponible :</strong> Slack à 40%. Les notifications sont perceptibles sans être surprenantes.</li>
  <li><strong>Heure de rendez-vous :</strong> Slack en sourdine. Zoomez à 100%. L'esquive automatique s'occupe du reste.</li>
</ul>

<p>Enregistrez chacun d'eux sous un <strong>profil de volume</strong> dans SoundDial et basculez entre eux en un seul clic. Mieux encore, utilisez l'auto-ducking : lorsqu'un appel démarre, SoundDial abaisse automatiquement tout (y compris Slack) et le rétablit à la fin de l'appel.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenez SoundDial sur l'App Store Mac</a> — 14,99 € d'achat unique, sans abonnement, macOS 14.2+.</p>
`,
  },
  "volume-profiles-for-mac": {
    slug: "volume-profiles-for-mac",
    title: "Comment configurer des profils de volume pour différentes situations sur Mac",
    description:
      "Différentes configurations de volume pour les réunions, le travail de concentration, les jeux et la détente – commutables en un seul clic. Voici comment fonctionnent les profils de volume sur macOS.",
    date: "2026-06-02",
    readTime: "5 min read",
    content: `
<p>À 9 heures du matin, vous participez à un appel Zoom : vous voulez Zoom à 100 %, Spotify désactivé, Slack désactivé. À 10 heures du matin, l'appel se termine : vous voulez Spotify à 40 %, Slack à 15 %, Zoom n'a pas d'importance. À midi, vous jouez : jeu à 60 %, Discord à 100 %, tout le reste en sourdine. À 18 heures, vous regardez YouTube : navigateur à 80 %, tout le reste est silencieux.</p>

<p>Chaque situation a une configuration de volume idéale différente. Et chaque fois que la situation change, vous devrez ajuster cinq ou six applications manuellement. Ou vous pouvez enregistrer chaque configuration en tant que profil et changer en un seul clic.</p>

<h2>Que sont les profils de volume ?</h2>

<p>Un profil de volume est un instantané enregistré du volume et de l'état de sourdine de chaque application. Vous configurez vos applications comme vous le souhaitez – Spotify à 30 %, Zoom à 100 %, Slack en mode sourdine – puis enregistrez-les sous un profil nommé comme « Travail » ou « Réunion ». Plus tard, vous appliquez le profil et chaque application passe instantanément à son niveau de volume enregistré.</p>

<p>Pensez-y comme aux préréglages d'affichage pour l'audio : tout comme vous pourriez avoir une disposition d'affichage pour "configuration du bureau" par rapport au "mode présentation", les profils de volume vous permettent de basculer entre les configurations audio sans ajuster manuellement chaque application.</p>

<h2>macOS n'a pas de profils de volume</h2>

<p>macOS dispose de modes de mise au point (Ne pas déranger, Travail, Personnel, etc.) qui contrôlent les notifications qui passent. Mais les modes Focus ne contrôlent pas les niveaux de volume. Ils peuvent supprimer entièrement les sons de notification, mais ils ne peuvent pas régler Spotify à 30 % ou Zoom à 100 %. Il n'existe aucun moyen intégré pour enregistrer et restaurer les configurations de volume par application.</p>

<h2>Configuration de profils avec SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> comprend un système de profil intégré. Voici comment le configurer :</p>

<h3>Création d'un profil</h3>
<ol>
  <li>Ouvrez SoundDial à partir de la barre de menus</li>
  <li>Ajustez le volume de chaque application comme vous le souhaitez pour une situation spécifique</li>
  <li>Cliquez sur le bouton "+" dans la section profil</li>
  <li>Donnez-lui un nom (par exemple, "Réunion") et choisissez une icône</li>
  <li>Terminé : votre configuration de volume actuelle est enregistrée</li>
</ol>

<h3>Changer de profil</h3>
<p>Vos profils enregistrés apparaissent sous forme de boutons dans le popover de SoundDial. Cliquez sur une application pour basculer instantanément vers les volumes enregistrés dans ce profil. Un clic remplace cinq ou six réglages manuels.</p>

<img src="/apps/sounddial.png" alt="Profils de volume SoundDial : commutation en un clic entre les modes Réunion, Focus et Chill sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Exemples de profils</h3>

<p><strong>Réunion</strong></p>
<ul>
  <li>Zoom / Equipes : 100%</li>
  <li>Spotify : désactivé</li>
  <li>Slack : en sourdine</li>
  <li>Navigateur : désactivé</li>
</ul>

<p><strong>Travail de concentration</strong></p>
<ul>
  <li>Spotify : 35 %</li>
  <li>Marge : 10 %</li>
  <li>Mail : désactivé</li>
  <li>Navigateur : 50 %</li>
</ul>

<p><strong>Jeux</strong></p>
<ul>
  <li>Jeu : 60%</li>
  <li>Discorde : 100%</li>
  <li>Spotify : 20 %</li>
  <li>Tout le reste : en sourdine</li>
</ul>

<p><strong>Refroidir</strong></p>
<ul>
  <li>Spotify : 70 %</li>
  <li>Navigateur : 60 %</li>
  <li>Notifications : 20 %</li>
</ul>

<h3>Mise à jour des profils</h3>
<p>Si vos volumes préférés changent au fil du temps, ajustez simplement les curseurs et mettez à jour le profil. La prochaine fois que vous l'appliquerez, il utilisera les nouveaux paramètres.</p>

<h2>Profils + auto-ducking = entièrement automatique</h2>

<p>Combinez les profils avec la fonction d'atténuation automatique de SoundDial et vous aurez rarement besoin de toucher au volume. Appliquez votre profil « Focus Work » le matin. Lorsqu'un appel arrive, l'auto-ducking réduit tout sauf l'application d'appel. À la fin de l'appel, tout revient aux niveaux de votre profil. À la fin de la journée, passez à « Chill » en un seul clic.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenez SoundDial sur l'App Store Mac</a> — 14,99 € d'achat unique, sans abonnement, macOS 14.2+.</p>
`,
  },
  "zoom-call-volume-too-low-mac": {
    slug: "zoom-call-volume-too-low-mac",
    title: "Le volume des appels Zoom est trop faible sur Mac ? Comment le booster",
    description:
      "Vous pouvez à peine entendre les gens sur Zoom, même au volume maximum. Voici toutes les solutions, des paramètres de zoom à l'augmentation du son des appels au-delà de 100 % avec un mélangeur de volume par application.",
    date: "2026-05-26",
    readTime: "6 min read",
    content: `
<p>Vous êtes en appel Zoom. L’autre personne parle, mais sa voix est à peine audible. Votre volume Mac est au maximum. Le volume du haut-parleur de Zoom est au maximum. Vous vous penchez sur votre écran, vous efforçant d'entendre. Cela ne devrait pas être si difficile.</p>

<p>Un faible volume d’appels Zoom est extrêmement courant et a plusieurs causes. Passons en revue chaque correctif, depuis la simple vérification des paramètres jusqu'à l'amélioration de l'audio de Zoom au-delà de sa limite normale.</p>

<h2>1. Vérifiez les paramètres de sortie audio de Zoom</h2>

<p>Ouvrez Zoom → Paramètres → Audio. Sous « Haut-parleur », assurez-vous :</p>
<ul>
  <li>Le bon périphérique de sortie est sélectionné (pas un moniteur inactif ou un périphérique déconnecté)</li>
  <li>Le curseur de volume du haut-parleur est au maximum</li>
  <li>Cliquez sur « Test du haut-parleur » pour vérifier que vous pouvez entendre clairement la tonalité de test.</li>
</ul>

<p>Si la tonalité de test est également faible, le problème se situe entre Zoom et vos haut-parleurs – continuez avec les correctifs ci-dessous. Si la tonalité de test est correcte mais que les appels réels sont silencieux, l'autre participant a probablement un problème de microphone de son côté.</p>

<h2>2. Vérifiez le périphérique de sortie de votre Mac</h2>

<p>Accédez à Paramètres système → Son → Sortie. Assurez-vous que le bon appareil est sélectionné. Si vous avez récemment connecté/déconnecté un casque, un écran ou des appareils Bluetooth, macOS peut avoir basculé automatiquement vers une sortie inattendue.</p>

<h2>3. Désactivez le réglage automatique du volume de Zoom</h2>

<p>Zoom dispose d'un paramètre « Ajuster automatiquement le volume du microphone » (Paramètres → Audio) qui peut également affecter les niveaux de sortie perçus dans certaines configurations. Essayez de le désactiver et de tester à nouveau.</p>

<h2>4. Désactivez la suppression du bruit de fond (temporairement)</h2>

<p>La suppression du bruit de Zoom filtre de manière agressive le bruit de fond, mais ce faisant, elle peut parfois réduire le volume perçu de la voix de l'autre personne, en particulier dans les environnements calmes. Essayez de régler « Supprimer le bruit de fond » sur « Faible » ou « Auto » au lieu de « Élevé ».</p>

<h2>5. Vérifiez le codec Bluetooth</h2>

<p>Si vous utilisez des AirPods ou des écouteurs Bluetooth, rejoindre un appel Zoom oblige macOS à passer du codec AAC de haute qualité au codec SCO de qualité inférieure (car Zoom utilise votre micro). SCO réduit la qualité audio et peut rendre le son des appels plus silencieux et plus compressé.</p>

<p><strong>Corriger :</strong> Utilisez un microphone séparé (micro Mac intégré ou micro USB) tout en conservant les AirPods comme périphérique de sortie. Cela empêche le changement de codec : les AirPod restent en mode AAC avec une meilleure qualité audio et un meilleur volume.</p>

<h2>6. Réinitialiser l'audio de base</h2>

<p>Le démon audio de macOS entre parfois dans un état où les niveaux de sortie sont réduits, en particulier après des changements de veille/réveil ou de périphérique. Ouvrez Terminal et exécutez :</p>
<p><code>sudo killall coreaudiod</code></p>
<p>L'audio redémarrera après une brève interruption. Rejoignez l'appel Zoom et vérifiez si le volume s'est amélioré.</p>

<h2>7. Augmentez le volume de Zoom au-delà de 100 %</h2>

<p>Si vous avez essayé tout ce qui précède et que Zoom est encore trop silencieux, le problème peut être que la sortie audio de Zoom n'est tout simplement pas assez forte pour votre configuration. Certains participants disposent de microphones silencieux, et Zoom ne peut pas faire grand-chose pour amplifier leur signal.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> vous permet d'augmenter le volume de n'importe quelle application <strong>200%</strong> – y compris Zoom. Si un participant est trop silencieux, faites glisser le curseur de Zoom sur 150 % ou 180 %. Le signal audio est amplifié au-delà du maximum intégré de Zoom, rendant audibles même les voix les plus faibles.</p>

<img src="/apps/sounddial.png" alt="SoundDial augmente le volume des appels Zoom à 180 % sur Mac pour un son plus clair pendant les appels vidéo" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Le principal avantage : booster Zoom n’affecte rien d’autre. Votre musique, vos notifications et autres applications restent à leurs niveaux actuels. Seul Zoom devient plus fort.</p>

<p>Cela fonctionne également pour <strong>Microsoft Teams, Google Meet, FaceTime, Discord, Slack Huddles, Webex</strong>, et toute autre application d'appel. Si vous pouvez l'entendre, SoundDial peut l'amplifier.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenez SoundDial sur l'App Store Mac</a> — 14,99 € d'achat unique, sans abonnement, macOS 14.2+.</p>
`,
  },
  "lower-spotify-without-lowering-everything-mac": {
    slug: "lower-spotify-without-lowering-everything-mac",
    title: "Comment réduire Spotify sans réduire tout le reste sur Mac",
    description:
      "Vous voulez Spotify comme musique de fond, mais le baisser avec les touches de volume rend votre appel et tout le reste plus silencieux également. Voici le correctif.",
    date: "2026-05-30",
    readTime: "4 min read",
    content: `
<p>Vous travaillez. Spotify diffuse une musique de fond. C'est un peu trop fort – en concurrence avec le podcast dans un autre onglet ou ce qui rend la concentration difficile. Vous appuyez sur la touche de réduction du volume. Spotify devient plus silencieux. Mais tout le reste aussi : votre appel Zoom, les sons de vos notifications, le son de votre navigateur. Tout est plus calme. Ce n'est pas ce que tu voulais.</p>

<p>Cela se produit parce que macOS possède un seul curseur de volume. Appuyez sur la touche de volume et il ajuste le <em>volume du système</em>, qui met à l'échelle chaque application de la même manière. Il n'y a aucun moyen de dire « baissez simplement Spotify » avec les commandes intégrées.</p>

<h2>La solution de contournement : le volume intégré à l'application de Spotify</h2>

<p>Spotify possède son propre curseur de volume dans le coin inférieur droit de l'application (ou en bas du lecteur). Vous pouvez le réduire indépendamment du volume du système. Si votre système est à 80 % et que le curseur de Spotify est à 30 %, Spotify jouera effectivement à 24 % tandis que tout le reste reste à 80 %.</p>

<p><strong>Le problème :</strong> Vous devez basculer vers la fenêtre Spotify, trouver le curseur, l'ajuster, puis revenir à ce que vous faisiez. Et le curseur de Spotify est petit, imprécis et n'affiche pas de pourcentage, juste une barre visuelle. Si vous êtes en réunion et que vous avez besoin de baisser rapidement votre musique, il n'est pas idéal de fouiller avec un petit curseur dans une autre application.</p>

<h2>La vraie solution : le contrôle du volume par application</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> place un curseur de volume pour chaque application dans votre barre de menus. Pour baisser Spotify sans affecter autre chose :</p>

<ol>
  <li>Cliquez sur l'icône SoundDial dans la barre de menu.</li>
  <li>Trouvez Spotify dans la liste</li>
  <li>Faites glisser son curseur vers le bas</li>
</ol>

<p>Terminé. Spotify est plus silencieux. Le zoom est inchangé. Les notifications restent inchangées. Tout le reste est inchangé. Vous n'avez pas quitté votre application actuelle : la fenêtre contextuelle de la barre de menus s'ouvre là où vous êtes.</p>

<img src="/apps/sounddial.png" alt="SoundDial réduit le volume de Spotify indépendamment tout en gardant les autres applications à plein volume sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>Mieux encore : enregistrez-le en tant que profil</h2>

<p>Si vous souhaitez régulièrement Spotify à un niveau d'arrière-plan inférieur pendant que vous travaillez, enregistrez votre configuration de volume préférée en tant que profil. Créez un profil « Travail » avec Spotify à 25 %, Zoom à 100 % et Slack à 15 %. La prochaine fois que vous vous mettrez au travail, appliquez le profil en un seul clic au lieu d'ajuster chaque application individuellement.</p>

<h2>Mieux encore : esquivement automatique pendant les appels</h2>

<p>SoundDial peut automatiquement réduire Spotify lorsque vous rejoignez un appel. Activez l'atténuation automatique dans les paramètres, choisissez le degré de réduction de l'audio de fond (30 % par défaut) et SoundDial s'occupe du reste. Votre musique s'esquive au début de l'appel et revient à la fin. Aucun réglage manuel du tout.</p>

<p>Il s'agit du workflow que macOS devrait prendre en charge nativement : "Spotify à ce niveau, tout le reste à ce niveau". Comme Apple ne l'a pas construit, <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> comble le vide.</p>

<p>Achat unique sur le <a href="https://apps.apple.com/app/sounddial/id6772792641">MacApp Store</a>. Pas d'abonnement. macOS 14.2+.</p>
`,
  },
  "macos-tahoe-per-app-volume-control": {
    slug: "macos-tahoe-per-app-volume-control",
    title: "Le macOS Tahoe dispose-t-il d'un contrôle du volume par application ?",
    description:
      "macOS Tahoe (macOS 26) a apporté des mises à jour majeures, mais Apple a-t-il finalement ajouté un mélangeur de volume ? Voici la réponse – et comment obtenir dès maintenant le contrôle du volume par application.",
    date: "2026-06-12",
    readTime: "4 min read",
    content: `
<p>Chaque année, les utilisateurs de Mac espèrent que la prochaine version de macOS inclura enfin un mixeur de volume. Chaque année, ils sont déçus. Avec macOS Tahoe (macOS 26), Apple a proposé une interface repensée, de nouvelles fonctionnalités système et des améliorations majeures sous le capot. Mais ont-ils ajouté un contrôle du volume par application ?</p>

<h2>La réponse courte : non</h2>

<p>macOS Tahoe n'inclut pas de mélangeur de volume intégré. Il n'y a pas de contrôle du volume par application dans les paramètres système, le centre de contrôle ou la barre de menus. L'expérience audio est la même que celle de toutes les versions de macOS précédentes : un curseur de volume système qui contrôle tout en même temps.</p>

<p>Le centre de contrôle d'Apple affiche toujours un seul curseur de volume. Les préférences sonores dans les paramètres système vous permettent toujours de choisir un périphérique de sortie et de régler un volume principal. Il n'y a aucune fonctionnalité cachée, aucune option avancée et aucune nouvelle API qui expose le volume par application aux utilisateurs.</p>

<h2>Ce que macOS Tahoe a amélioré pour l'audio</h2>

<p>Bien que le volume par application soit toujours manquant, Tahoe a apporté quelques améliorations liées à l'audio :</p>

<ul>
  <li><strong>Stabilité audio Bluetooth améliorée</strong> - moins de déconnexions et de problèmes de changement de codec avec les AirPod et les écouteurs tiers</li>
  <li><strong>Meilleur traitement audio spatial</strong> — suivi de tête amélioré et rendu spatial plus précis pour le contenu pris en charge</li>
  <li><strong>Performances audio de base</strong> — latence plus faible pour les applications audio professionnelles et la production musicale</li>
</ul>

<p>Aucun d’entre eux ne répond à la demande fondamentale : « Permettez-moi de désactiver Spotify sans affecter Zoom. »</p>

<h2>Apple ajoutera-t-il un jour un mixeur de volume ?</h2>

<p>Rien n’indique qu’Apple envisage d’ajouter cette fonctionnalité. Il n'est apparu dans aucune version bêta de macOS, session WWDC ou feuille de route connue. La philosophie de conception audio d'Apple continue de privilégier la simplicité : un seul curseur pour tout.</p>

<p>L'ironie est que le framework Core Audio d'Apple prend entièrement en charge l'écoute audio et le contrôle du volume par processus. L'API Audio Tap introduite dans macOS 14 (Sonoma) a permis aux développeurs de créer encore plus facilement des outils audio par application. Apple a construit l'infrastructure, mais ils n'ont tout simplement pas créé l'interface utilisateur correspondante.</p>

<h2>Comment obtenir un contrôle du volume par application sur macOS Tahoe</h2>

<p>Comme Apple ne le construira pas, des applications tierces combleront le vide. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> est une application native de barre de menus macOS qui vous offre un mélangeur de volume — des curseurs de volume indépendants pour chaque application en cours d'exécution.</p>

<img src="/apps/sounddial.png" alt="SoundDial fournissant un contrôle du volume par application sur macOS Tahoe" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial est entièrement compatible avec macOS Tahoe et utilise l'API Core Audio Tap moderne d'Apple — aucun pilote audio tiers ni extension de noyau n'est requis. Il fonctionne parfaitement avec le modèle de sécurité de macOS et n'interfère pas avec d'autres applications audio.</p>

<p>Ce que vous obtenez :</p>
<ul>
  <li><strong>Curseurs de volume par application</strong> — 0 % à 200 % pour chaque application</li>
  <li><strong>Muet par application</strong> - un clic pour faire taire n'importe quelle application</li>
  <li><strong>Profils de volumes</strong> - enregistrez les configurations et changez instantanément</li>
  <li><strong>Esquive automatique</strong> — le son de fond diminue automatiquement pendant les appels</li>
  <li><strong>Augmentation du volume</strong> - amplifiez les applications silencieuses au-delà de 100 %</li>
  <li><strong>Mémoire de volume</strong> - se souvient du volume de chaque application entre les redémarrages</li>
  <li><strong>Raccourcis clavier</strong> - basculer le mixeur ou tout couper depuis le clavier</li>
</ul>

<p>Achat unique sur le <a href="https://apps.apple.com/app/sounddial/id6772792641">MacApp Store</a>. Pas d'abonnement. macOS 14.2+.</p>
`,
  },
  "play-music-speakers-calls-headphones-mac": {
    slug: "play-music-speakers-calls-headphones-mac",
    title: "Comment écouter de la musique sur des haut-parleurs tout en prenant des appels avec des écouteurs (Mac)",
    description:
      "Vous voulez Spotify sur les haut-parleurs de votre bureau et Zoom sur vos AirPods en même temps ? macOS ne rend pas cela facile : voici ce qui fonctionne réellement.",
    date: "2026-05-15",
    readTime: "5 min read",
    content: `
<p>Voici une chose raisonnable que vous voudrez peut-être faire : écouter de la musique sur les haut-parleurs de votre bureau tout en prenant un appel Zoom via vos AirPod. La musique remplit la pièce, l'appel est privé dans vos oreilles. C’est parfaitement logique.</p>

<p>macOS dit non. Lorsque vous sélectionnez un périphérique de sortie audio, <em>chaque</em> l'application l'utilise. Passez aux AirPods pour Zoom et Spotify passe également aux AirPods. Passer aux haut-parleurs pour Spotify et Zoom va également aux haut-parleurs. Un périphérique de sortie pour tout. Aucune exception.</p>

<h2>Pourquoi macOS ne peut pas le faire de manière native</h2>

<p>macOS achemine tout l'audio via un seul périphérique de sortie sélectionné. Vous choisissez « Haut-parleurs MacBook Pro » ou « AirPods Pro » dans Paramètres système → Son → Sortie, et chaque application envoie de l'audio à cet appareil. Il n'y a pas de routage audio intégré par application.</p>

<p>Cette conception est logique par souci de simplicité : la plupart des gens souhaitent que tout leur audio provienne du même endroit. Mais cela s'effondre dès que vous voulez différentes applications sur différentes sorties.</p>

<h2>La solution de contournement du périphérique global</h2>

<p>La configuration Audio MIDI de macOS (trouvée dans Applications → Utilitaires) vous permet de créer un « Périphérique agrégé » qui combine plusieurs sorties en une seule. Cependant, un appareil agrégé envoie le <em>même son</em> à toutes les sorties combinées - cela ne vous permet pas de choisir quelle application va à quelle sortie. Il est conçu pour les configurations multi-enceintes, et non pour le routage par application.</p>

<h2>La solution de contournement du périphérique multi-sorties</h2>

<p>Semblable aux périphériques agrégés, vous pouvez créer un « Périphérique multi-sorties » dans la configuration Audio MIDI. Cela envoie un son identique à plusieurs sorties simultanément. Encore une fois, c'est le même son partout : vous ne pouvez pas acheminer Spotify vers des haut-parleurs et Zoom vers des écouteurs de cette façon.</p>

<h2>Ce qui fonctionne réellement : les applications de routage audio par application</h2>

<p>Pour acheminer véritablement différentes applications vers différents périphériques de sortie, vous avez besoin d'une application de routage audio tierce qui intercepte l'audio de chaque application et l'envoie à la sortie que vous spécifiez. Des applications comme SoundSource (de Rogue Amoeba) prennent en charge cela : elles vous permettent d'attribuer des périphériques de sortie spécifiques à des applications individuelles.</p>

<h2>Une approche plus simple : la séparation basée sur le volume</h2>

<p>Si votre objectif principal est d'entendre clairement votre appel sur votre musique (plutôt que de les acheminer vers des appareils physiquement différents), le contrôle du volume par application résout le problème plus simplement.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> donne à chaque application son propre curseur de volume. Lors d'un appel, vous pouvez :</p>

<ul>
  <li>Réglez Zoom/Équipes/FaceTime sur <strong>100%</strong></li>
  <li>Réduisez Spotify à <strong>20%</strong></li>
  <li>Couper tout le reste</li>
</ul>

<p>Votre appel est limpide. La musique est un fond subtil. Aucun changement d'appareil n'est nécessaire.</p>

<img src="/apps/sounddial.png" alt="SoundDial affichant Zoom à plein volume et Spotify baissé lors d'un appel sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Encore mieux : les SoundDial <strong>esquivement automatique</strong> le fait automatiquement. Lorsque vous rejoignez un appel, il détecte l'activation de votre microphone et réduit toutes les applications en arrière-plan à un niveau que vous configurez (30 % par défaut). Une fois l’appel terminé, tout redevient normal. Aucun réglage manuel du curseur n'est nécessaire.</p>

<p>Pour la plupart des gens, cela résout le problème réel : "Je n'entends pas mon appel sur ma musique" - sans la complexité du routage de différentes applications vers différents appareils physiques.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenez SoundDial sur l'App Store Mac</a> — 14,99 € d'achat unique, sans abonnement, macOS 14.2+.</p>
`,
  },
  "mac-volume-keeps-changing-by-itself": {
    slug: "mac-volume-keeps-changing-by-itself",
    title: "Le volume Mac ne cesse de changer tout seul : comment y remédier",
    description:
      "Le volume de votre Mac augmente, diminue ou se réinitialise de manière aléatoire à un niveau différent. Voici toutes les causes connues et comment l'arrêter.",
    date: "2026-05-18",
    readTime: "6 min read",
    content: `
<p>Vous réglez le volume de votre Mac à un niveau confortable. Vous détournez le regard. Quand tu reviens, c'est différent. Plus fort. Plus silencieux. Réinitialiser au maximum. Cela continue de se produire et vous ne comprenez pas pourquoi.</p>

<p>Il s’agit de l’un des problèmes audio Mac les plus frustrants, car il semble aléatoire. Mais ce n’est presque jamais aléatoire – il y a toujours un déclencheur spécifique. Voici toutes les causes connues et comment les résoudre.</p>

<h2>1. Reconnexion du périphérique Bluetooth</h2>

<p>C'est la cause la plus courante. Lorsqu'un appareil Bluetooth (AirPods, haut-parleurs, écouteurs) se connecte ou se déconnecte, macOS réinitialise le volume au dernier niveau utilisé avec cet appareil. Ainsi, si vous étiez à 30 % sur vos haut-parleurs et que vos AirPods se connectent automatiquement, le volume pourrait passer à 80 % (le dernier niveau des AirPods).</p>

<p><strong>Corriger :</strong> macOS mémorise les niveaux de volume par périphérique de sortie. Chaque fois que vous changez, placez-le là où vous le souhaitez. Au fil du temps, les bons niveaux seront mémorisés pour chaque appareil. Si un appareil Bluetooth se connecte automatiquement de manière inattendue, accédez à Paramètres système → Bluetooth et supprimez les appareils que vous n'utilisez pas activement.</p>

<h2>2. Sortie HDMI/DisplayPort</h2>

<p>La connexion ou la déconnexion d'un écran externe via HDMI ou DisplayPort peut entraîner des changements de volume. Certains écrans sont également des périphériques de sortie audio et macOS y bascule automatiquement. Lorsque l'écran se met en veille ou se déconnecte, macOS revient aux haut-parleurs et peut réinitialiser le volume.</p>

<p><strong>Corriger :</strong> Accédez à Paramètres système → Son → Sortie et vérifiez si macOS passe automatiquement aux haut-parleurs de votre écran. Si vous ne souhaitez pas que le son passe sur votre écran, sélectionnez manuellement votre périphérique de sortie préféré. Certains écrans peuvent avoir leur sortie audio désactivée dans leurs propres paramètres OSD (affichage à l'écran).</p>

<h2>3. Une application modifie le volume</h2>

<p>Certaines applications ajustent le volume du système par programmation. Zoom, par exemple, dispose d'un paramètre « Ajuster automatiquement le volume du microphone » qui peut également affecter le volume de sortie. Les applications musicales, les applications de podcast et certains jeux peuvent également ajuster le volume lors de leur lancement ou lorsque des événements spécifiques se produisent.</p>

<p><strong>Corriger :</strong> Vérifiez vos applications récemment ouvertes pour les paramètres liés à l'audio. Dans Zoom : Paramètres → Audio → décochez "Ajuster automatiquement le volume du microphone". Dans Spotify : vérifiez si la normalisation du volume provoque des changements de volume perçus (Paramètres → Lecture → Normaliser le volume).</p>

<h2>4. Appuis accidentels sur le clavier ou la Touch Bar</h2>

<p>Si vous disposez d'un clavier avec des touches de volume (c'est le cas de tous les claviers Mac), des pressions accidentelles - ou une touche bloquée - peuvent modifier le volume. La Touch Bar des anciens modèles de MacBook Pro est particulièrement sujette aux changements accidentels de volume en la frottant.</p>

<p><strong>Corriger :</strong> Vérifiez si une touche de volume est bloquée en regardant l'indicateur de volume sans rien toucher. Pour les modèles Touch Bar, personnalisez la Touch Bar dans Paramètres système → Clavier → Paramètres de la Touch Bar pour supprimer le curseur de volume ou déplacez-le vers une position moins accessible.</p>

<h2>5. Réinitialisation du démon audio macOS</h2>

<p>Après les cycles veille/réveil, le démon audio de macOS (coreaudiod) redémarre parfois et réinitialise le volume à un niveau par défaut ou précédemment mis en cache. Il s'agit d'un bogue au niveau du système qui apparaît dans diverses versions de macOS.</p>

<p><strong>Corriger :</strong> Si le volume se réinitialise régulièrement après la sortie du mode veille, essayez de redémarrer coreaudiod manuellement :</p>
<p><code>sudo killall coreaudiod</code></p>
<p>Si le problème persiste dans les mises à jour macOS, il pourra être résolu dans une future mise à jour. En attendant, l'utilisation d'un outil qui mémorise et restaure les niveaux de volume par application peut compenser.</p>

<h2>6. Paramètres d'accessibilité</h2>

<p>Certaines fonctionnalités d'accessibilité peuvent interférer avec le son. Vérifiez Paramètres système → Accessibilité → Audio pour tout paramètre inattendu. Vérifiez également si VoiceOver ou Switch Control sont partiellement activés : ils peuvent produire des comportements de volume inattendus.</p>

<h2>Verrouillez vos volumes par application avec SoundDial</h2>

<p>Même si vous ne pouvez pas empêcher macOS de modifier le volume du système, vous pouvez protéger votre <em>par application</em> équilibre des volumes. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> se souvient du niveau de volume de chaque application indépendamment. Lorsqu'une application redémarre ou lorsque votre Mac sort du mode veille, SoundDial restaure chaque application dans son volume enregistré.</p>

<img src="/apps/sounddial.png" alt="SoundDial mémorise les niveaux de volume par application lors des redémarrages sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Cela signifie que même si le volume du système change, le solde de votre application reste cohérent :</p>
<ul>
  <li>Spotify reste à 40 % quels que soient les changements de volume du système</li>
  <li>Le zoom reste à 100 % même après la reconnexion Bluetooth</li>
  <li>Slack reste muet même après un redémarrage</li>
</ul>

<p>Combiné avec <strong>profils de volumes</strong>, vous pouvez restaurer instantanément votre configuration de volume préférée dans n'importe quelle situation : un clic pour revenir exactement là où vous souhaitez être, peu importe ce que macOS a fait pendant que vous ne regardiez pas.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenez SoundDial sur l'App Store Mac</a> — 14,99 € d'achat unique, sans abonnement, macOS 14.2+.</p>
`,
  },
  "best-volume-mixer-apps-mac-2026": {
    slug: "best-volume-mixer-apps-mac-2026",
    title: "Meilleures applications de mixage de volume pour Mac en 2026",
    description:
      "Une comparaison simple de chaque application Mac qui vous permet de contrôler le volume par application. Fonctionnalités, prix et lequel vaut réellement la peine d’être utilisé.",
    date: "2026-06-12",
    readTime: "10 min read",
    content: `
<p>macOS n'a pas de mixeur de volume intégré. Si vous souhaitez contrôler le volume d'applications individuelles – baissez Spotify sans affecter Zoom, désactivez Slack sans tout désactiver – vous avez besoin d'une application tierce.</p>

<p>Il existe plusieurs options. Ce guide compare les plus remarquables en fonction des fonctionnalités, des prix, de la compatibilité et de la convivialité réelle. Pas de liens d'affiliation, pas de choix sponsorisés.</p>

<h2>Ce que vous devriez rechercher</h2>

<p>Avant de comparer les applications, voici ce qui compte dans un mélangeur de volume Mac :</p>

<ul>
  <li><strong>Curseurs de volume par application</strong> — contrôle indépendant pour chaque application en cours d'exécution</li>
  <li><strong>Plage de volumes</strong> — pouvez-vous descendre en dessous de 100 % ET au-dessus de 100 % (boost) ?</li>
  <li><strong>Muet par application</strong> - faire taire une application sans toucher à sa position de volume</li>
  <li><strong>Profils</strong> - enregistrer et basculer entre les configurations de volume</li>
  <li><strong>Esquive automatique</strong> - baisse automatiquement la musique pendant les appels</li>
  <li><strong>Intégration de la barre de menus</strong> — accès rapide sans changer d'application</li>
  <li><strong>Compatibilité macOS</strong> — fonctionne sur la dernière version de macOS</li>
  <li><strong>Modèle de tarification</strong> — achat unique ou abonnement</li>
</ul>

<h2>Les options</h2>

<h3>SoundDial</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> est une application native de barre de menus macOS axée sur une seule chose : le contrôle du volume par application.</p>

<ul>
  <li><strong>Volume par application :</strong> Oui, de 0 % à 200 %</li>
  <li><strong>Muet par application :</strong> Oui, en un clic</li>
  <li><strong>Augmentation du volume :</strong> Oui, jusqu'à 200 %</li>
  <li><strong>Profils :</strong> Oui, avec des noms et des icônes personnalisés</li>
  <li><strong>Esquive automatique :</strong> Oui, avec niveau de canard configurable</li>
  <li><strong>Raccourcis clavier :</strong> Oui (basculer le mixeur, tout couper)</li>
  <li><strong>Commutation du périphérique de sortie :</strong> Oui, du même panneau</li>
  <li><strong>Mémoire de volume :</strong> Oui, mémorise le volume de chaque application entre les redémarrages</li>
  <li><strong>Prix :</strong> 14,99 € d'achat unique (sans abonnement) – moins de la moitié du prix de SoundSource</li>
  <li><strong>Nécessite :</strong> macOS 14.2+</li>
  <li><strong>Disponible sur :</strong> App Store Mac (révisé par Apple, en bac à sable, sans pilotes système)</li>
</ul>

<p>SoundDial utilise l'API Core Audio Tap moderne d'Apple pour un contrôle audio propre par processus. Il est léger, s'exécute entièrement dans la barre de menus et ne nécessite pas de configuration complexe. À 14,99 €, il est nettement moins cher que SoundSource (39 $) tout en incluant les fonctionnalités qui manquent à SoundSource : profils de volume et atténuation automatique. Et comme il se trouve sur l'App Store Mac, il est examiné par Apple, mis en bac à sable et s'installe proprement sans télécharger de DMG ni installer de pilotes audio système.</p>

<img src="/apps/sounddial.png" alt="Mélangeur de volume par application SoundDial affichant les curseurs de volume d'application individuels sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Source sonore (Amoeba voyou)</h3>

<p>SoundSource est l'un des utilitaires audio Mac les plus anciens et les plus établis. Il est puissant et riche en fonctionnalités, destiné aux utilisateurs expérimentés et aux professionnels de l'audio.</p>

<ul>
  <li><strong>Volume par application :</strong> Oui</li>
  <li><strong>Muet par application :</strong> Oui</li>
  <li><strong>Augmentation du volume :</strong> Oui</li>
  <li><strong>EQ par application :</strong> Oui (prise en charge intégrée et du plugin AU)</li>
  <li><strong>Routage de sortie par application :</strong> Oui (envoyer différentes applications à différentes enceintes)</li>
  <li><strong>Profils :</strong> Pas de système de profil intégré</li>
  <li><strong>Esquive automatique :</strong> Non</li>
  <li><strong>Prix :</strong> 39 $ USD (des mises à niveau majeures uniques peuvent nécessiter un achat supplémentaire)</li>
  <li><strong>Nécessite :</strong> macOS 12+ (installe un pilote audio système)</li>
</ul>

<p>SoundSource est l’option la plus puissante si vous avez besoin de chaînes d’égalisation et d’effets audio par application. Il installe un pilote audio au niveau du système (ACE) pour intercepter l'audio, ce qui le rend très performant mais aussi plus invasif. Le prix de 39 $ est plus élevé que la plupart des alternatives, et il n’y a pas de système d’évitement automatique ou de profil.</p>

<h3>Musique de fond (gratuite, open source)</h3>

<p>Background Music est une application gratuite et open source qui fournit un contrôle de volume de base par application. C'est un choix populaire car c'est gratuit.</p>

<ul>
  <li><strong>Volume par application :</strong> Oui</li>
  <li><strong>Muet par application :</strong> Oui</li>
  <li><strong>Augmentation du volume :</strong> Non (0-100 % seulement)</li>
  <li><strong>Musique en pause automatique :</strong> Oui (met la musique en pause lorsqu'une autre application lit de l'audio)</li>
  <li><strong>Profils :</strong> Non</li>
  <li><strong>Esquive automatique :</strong> Non (la pause automatique est différente du canard automatique)</li>
  <li><strong>Prix :</strong> Gratuit</li>
  <li><strong>Nécessite :</strong> macOS 10.13+ (installe un périphérique audio virtuel)</li>
</ul>

<p>La musique de fond est une option gratuite solide pour le volume de base par application. Cependant, il n'a pas été systématiquement mis à jour pour les versions plus récentes de macOS. Les utilisateurs signalent des problèmes sur macOS Sequoia et Tahoe : problèmes audio, échec d'installation du périphérique audio virtuel ou application ne détectant pas certaines applications. Il ne peut pas non plus augmenter le volume au-delà de 100 %, n'a pas de profil et pas d'auto-ducking.</p>

<h3>eqMac</h3>

<p>eqMac est avant tout une application d'égalisation qui inclut également certaines capacités de mixage de volume.</p>

<ul>
  <li><strong>Volume par application :</strong> Limité (concentré sur l'égalisation, pas sur le mixage)</li>
  <li><strong>Égaliseur à l'échelle du système :</strong> Oui, avec plusieurs options de bandes</li>
  <li><strong>Augmentation du volume :</strong> Oui</li>
  <li><strong>Profils :</strong> Préréglages d'égalisation (pas de profils de volume)</li>
  <li><strong>Esquive automatique :</strong> Non</li>
  <li><strong>Prix :</strong> Niveau gratuit + abonnement Pro</li>
  <li><strong>Nécessite :</strong> macOS 10.14+</li>
</ul>

<p>eqMac est le meilleur choix si votre besoin principal est une égalisation à l'échelle du système (amplification des basses, réglage des aigus, etc.) plutôt qu'un contrôle du volume par application. Ses capacités de mixage de volume sont secondaires par rapport à ses fonctionnalités d’égalisation.</p>

<h2>Tableau de comparaison rapide</h2>

<table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;">
<thead>
<tr style="border-bottom:2px solid rgba(255,255,255,0.2);">
  <th style="text-align:left;padding:10px 12px;color:rgba(255,255,255,0.6);">Caractéristique</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundDial</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">Source sonore</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">Musique de fond</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Volume par application</td>
  <td style="text-align:center;padding:10px 12px;">Oui</td>
  <td style="text-align:center;padding:10px 12px;">Oui</td>
  <td style="text-align:center;padding:10px 12px;">Oui</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Augmentation du volume (200%)</td>
  <td style="text-align:center;padding:10px 12px;">Oui</td>
  <td style="text-align:center;padding:10px 12px;">Oui</td>
  <td style="text-align:center;padding:10px 12px;">Non</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Profils de volumes</td>
  <td style="text-align:center;padding:10px 12px;">Oui</td>
  <td style="text-align:center;padding:10px 12px;">Non</td>
  <td style="text-align:center;padding:10px 12px;">Non</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Esquive automatique</td>
  <td style="text-align:center;padding:10px 12px;">Oui</td>
  <td style="text-align:center;padding:10px 12px;">Non</td>
  <td style="text-align:center;padding:10px 12px;">Non</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Égaliseur par application</td>
  <td style="text-align:center;padding:10px 12px;">Non</td>
  <td style="text-align:center;padding:10px 12px;">Oui</td>
  <td style="text-align:center;padding:10px 12px;">Non</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Routage de sortie par application</td>
  <td style="text-align:center;padding:10px 12px;">Non</td>
  <td style="text-align:center;padding:10px 12px;">Oui</td>
  <td style="text-align:center;padding:10px 12px;">Non</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Raccourcis clavier</td>
  <td style="text-align:center;padding:10px 12px;">Oui</td>
  <td style="text-align:center;padding:10px 12px;">Oui</td>
  <td style="text-align:center;padding:10px 12px;">Non</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Pilote système requis</td>
  <td style="text-align:center;padding:10px 12px;">Non</td>
  <td style="text-align:center;padding:10px 12px;">Oui</td>
  <td style="text-align:center;padding:10px 12px;">Oui</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Prix</td>
  <td style="text-align:center;padding:10px 12px;">Une fois</td>
  <td style="text-align:center;padding:10px 12px;">39 $</td>
  <td style="text-align:center;padding:10px 12px;">Gratuit</td>
</tr>
</tbody>
</table>

<h2>Lequel devriez-vous choisir ?</h2>

<ul>
  <li><strong>Si vous souhaitez un contrôle du volume, des profils et un atténuation automatique par application :</strong> <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> — le mélangeur de volume le plus complet pour le prix, avec des fonctionnalités (profils, auto-ducking) qui manquent aux alternatives encore plus chères.</li>
  <li><strong>Si vous avez besoin d'un égaliseur et d'un routage audio par application :</strong> SoundSource — l'option la plus puissante, destinée aux professionnels de l'audio qui ont besoin de chaînes d'effets et d'un routage de sortie par application.</li>
  <li><strong>Si vous voulez quelque chose de gratuit et basique :</strong> Musique de fond : décente pour un volume simple par application, mais peut avoir des problèmes de compatibilité avec les versions plus récentes de macOS et manque de boost/profils/ducking.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenez SoundDial sur l'App Store Mac</a>.</p>
`,
  },
  "youtube-too-quiet-safari-chrome-mac": {
    slug: "youtube-too-quiet-safari-chrome-mac",
    title: "YouTube trop silencieux dans Safari ou Chrome sur Mac ? Réparez-le instantanément",
    description:
      "Certaines vidéos YouTube sont à peine audibles même au volume maximum. Voici pourquoi le son du navigateur est souvent plus silencieux que celui des autres applications et comment l'augmenter au-delà de 100 % sur Mac.",
    date: "2026-05-22",
    readTime: "5 min read",
    content: `
<p>Vous cliquez sur une vidéo YouTube. Le créateur parle, mais on l’entend à peine. Le volume du système est au maximum. Le volume du lecteur YouTube est au maximum. Vous vous rapprochez de vos enceintes. Encore trop calme. Vous ouvrez Spotify – la musique retentit à plein volume. Ce ne sont donc pas vos enceintes. C'est YouTube. Ou plus précisément, c'est la vidéo.</p>

<p>C'est incroyablement courant et ce n'est pas un bug. Certaines vidéos YouTube sont simplement masterisées à un volume inférieur à celui d'autres, et macOS ne vous offre aucun moyen d'améliorer sélectivement le son du navigateur.</p>

<h2>Pourquoi certaines vidéos YouTube sont si silencieuses</h2>

<h3>La vidéo a été enregistrée à faible volume</h3>
<p>Tous les créateurs ne disposent pas d’équipement audio professionnel. Une vidéo enregistrée avec un microphone d'ordinateur portable depuis l'autre côté d'une pièce sera nettement plus silencieuse qu'une vidéo enregistrée avec un micro à condensateur approprié. YouTube normalise le volume dans une certaine mesure (leur « normalisation du volume » cible -14 LUFS), mais cela ne compense pas complètement l'audio source extrêmement silencieux.</p>

<h3>Normalisation du volume de YouTube</h3>
<p>YouTube ajuste automatiquement le volume de la vidéo afin que les vidéos fortes et silencieuses soient lues à peu près au même niveau. Pour les vidéos bruyantes, cela signifie les baisser. Pour les vidéos silencieuses, cela signifie les augmenter, mais seulement jusqu'à un certain point. Si l’audio source est très faible, la normalisation ne peut pas faire grand-chose sans introduire de bruit.</p>

<h3>L'audio du navigateur est un citoyen de seconde zone sur macOS</h3>
<p>Safari et Chrome gèrent l'audio différemment des applications multimédias dédiées. Ils sont diffusés via le moteur audio du navigateur, qui possède son propre plafond de volume. Il n'existe aucun moyen d'améliorer l'audio d'un onglet de navigateur depuis macOS. Le navigateur est une application avec un seul niveau de volume, même si vous disposez de dix onglets lisant de l’audio à différents niveaux.</p>

<h2>Correctifs rapides à essayer</h2>

<h3>Vérifiez le volume du lecteur YouTube</h3>
<p>Passez la souris sur l'icône du haut-parleur sur le lecteur YouTube et assurez-vous que le curseur est au maximum. Il est facile de le faire glisser accidentellement vers le bas et il se réinitialise indépendamment du volume de votre système.</p>

<h3>Désactivez la normalisation du volume de YouTube</h3>
<p>YouTube ne propose pas de bascule destinée à l'utilisateur pour la normalisation du volume. Cependant, certaines extensions de navigateur peuvent le contourner. Recherchez dans la boutique d'extensions de votre navigateur « Normaliseur de volume YouTube » ou « Optimiseur audio YouTube ».</p>

<h3>Essayez un autre navigateur</h3>
<p>Safari et Chrome gèrent l'audio différemment. Si une vidéo est trop silencieuse dans un navigateur, essayez l'autre. Chrome, en particulier, gère l'audio via un processus distinct (le « rendu »), ce qui peut parfois entraîner une sortie inférieure.</p>

<h2>La vraie solution : augmenter le volume du navigateur au-delà de 100 %</h2>

<p>Le problème sous-jacent est que macOS ne vous permet pas d'augmenter le volume d'une application spécifique au-delà de 100 %. Votre navigateur est au maximum, mais « au maximum » n'est pas assez fort.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> résout ce problème en donnant à chaque application – y compris Safari et Chrome – un curseur de volume indépendant qui va de 0 % à <strong>200%</strong>. Si une vidéo YouTube est trop silencieuse, faites glisser le curseur de votre navigateur sur 150 % ou 180 %. L'audio est amplifié en temps réel sans affecter aucune autre application.</p>

<img src="/apps/sounddial.png" alt="SoundDial augmentant le volume du navigateur Safari à 180 % pour les vidéos YouTube silencieuses sur Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Ceci est particulièrement utile car :</p>
<ul>
  <li><strong>C'est instantané.</strong> Cliquez sur l'icône de la barre de menu, faites glisser le curseur. Vous n'avez pas besoin d'installer une extension de navigateur ni de modifier des paramètres.</li>
  <li><strong>C'est par application.</strong> Booster Chrome ne rend pas Spotify plus fort. Chaque application reste indépendante.</li>
  <li><strong>Cela fonctionne avec n’importe quel navigateur.</strong> Safari, Chrome, Firefox, Arc, Brave — s'il s'agit d'une application sur votre Mac, SoundDial peut la contrôler.</li>
  <li><strong>Cela monte à 200 %.</strong> Doublez le plafond de volume normal. Même la vidéo la plus silencieuse devient audible.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenez SoundDial sur l'App Store Mac</a> — 14,99 € d'achat unique, sans abonnement, macOS 14.2+.</p>
`,
  },
  "mac-notification-sounds-too-loud-headphones": {
    slug: "mac-notification-sounds-too-loud-headphones",
    title: "La notification Mac semble trop forte dans les écouteurs ? Voici le correctif",
    description:
      "Les pings faibles et les alertes macOS sont terriblement forts dans vos écouteurs alors que votre musique va bien. Voici pourquoi le volume des notifications est différent et comment l'apprivoiser.",
    date: "2026-05-25",
    readTime: "5 min read",
    content: `
<p>Vous portez des écouteurs et écoutez de la musique à un volume confortable de 40 %. Une notification Slack se déclenche. <em>DING.</em> C'est assourdissant comparé à ta musique. Vos oreilles bourdonnent. Vous arrachez vos écouteurs.</p>

<p>Cela se produit parce que macOS ne vous permet pas de contrôler séparément le volume des notifications par rapport aux médias. Votre musique est peut-être à un niveau confortable, mais les sons d'alerte (pings faibles, notifications de courrier électronique, rappels de calendrier, sons du système macOS) retentissent à pleine intensité par rapport au volume de votre système.</p>

<h2>Pourquoi les notifications sonnent plus fort que la musique</h2>

<p>Les sons de notification sont des rafales audio courtes et nettes conçues pour attirer votre attention. De par leur conception, ils ont un volume de pointe élevé. La musique, en revanche, a une large plage dynamique : des passages plus calmes, des passages plus forts et un niveau global maîtrisé destiné à une écoute soutenue.</p>

<p>Lorsque le volume de votre système est à 40 %, votre musique se situe à 40 % de son niveau masterisé, ce qui peut représenter un niveau confortable de 60 à 70 dB dans vos écouteurs. Mais un signal de notification à 40 % du volume du système peut quand même atteindre plus de 80 dB, car le fichier sonore de notification lui-même est maîtrisé à un niveau de crête beaucoup plus élevé. Le volume du système évolue de manière égale en pourcentage, mais leurs niveaux de départ sont très différents.</p>

<p>Dans les écouteurs, c'est pire. Le son va directement dans votre conduit auditif sans aucune possibilité de se dissiper, de sorte que la différence de volume perçue entre une musique douce et un ping de notification aigu est amplifiée.</p>

<h2>Moyens intégrés pour réduire le volume des notifications</h2>

<h3>Baisser le volume de l'alerte</h3>
<p>macOS dispose d'un curseur « Volume d'alerte » distinct enfoui dans les paramètres. Aller à <strong>Paramètres système → Son</strong> et cherche le <strong>Volume d'alerte</strong> curseur. Cela contrôle le volume des sons et des alertes du système séparément du volume principal.</p>
<p><strong>Limite :</strong> Cela n'affecte que les alertes du système macOS (comme les bips d'erreur et les sons de la corbeille). Cela n'affecte pas les sons de notification d'applications telles que Slack, Discord ou Teams, qui diffusent leur propre audio via leur propre moteur audio.</p>

<h3>Désactiver les sons de notification par application</h3>
<p>Aller à <strong>Paramètres système → Notifications</strong>, sélectionnez l'application qui est trop bruyante et désactivez « Jouer le son pour les notifications ». Cela fait taire complètement les notifications de cette application.</p>
<p><strong>Limite :</strong> C'est tout ou rien. Vous ne pouvez pas envoyer de notifications Slack <em>plus silencieux</em> — seulement complètement allumé ou complètement éteint. Et vous perdez le signal audio qui vous indique que quelque chose s'est passé sans regarder votre écran.</p>

<h3>Utiliser les modes de mise au point</h3>
<p>Les modes de mise au point (Ne pas déranger, Travail, etc.) peuvent supprimer les sons de notification de toutes les applications ou de certaines applications. Cela fonctionne pendant les sessions de concentration approfondie, mais n'est pas pratique toute la journée : vous manqueriez des notifications importantes.</p>

<h2>La vraie solution : contrôler indépendamment le volume de l'application de notification</h2>

<p>Ce que vous voulez en réalité est simple : rendre Slack plus silencieux sans rendre votre musique plus silencieuse. Réduisez les volumes des applications de notification à 15 % tout en gardant Spotify à 50 %. macOS ne vous permet pas de faire cela.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> fait. Il donne à chaque application son propre curseur de volume, ce qui vous permet de définir des applications nécessitant beaucoup de notifications comme Slack, Mail et Calendrier sur un volume beaucoup plus faible tout en gardant vos applications multimédias à un niveau confortable.</p>

<img src="/apps/sounddial.png" alt="SoundDial affichant Slack à faible volume et Spotify à volume normal — contrôle de notification indépendant sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Une configuration typique adaptée aux écouteurs</h3>
<ul>
  <li><strong>Spotify / Musique</strong> — 50% (niveau d'écoute confortable)</li>
  <li><strong>Mou</strong> — 15 % (remarquable mais pas surprenant)</li>
  <li><strong>Courrier</strong> — 10 % (ping subtil, ne vous choquera pas)</li>
  <li><strong>Calendrier</strong> — 20% (assez pour être remarqué, pas douloureux)</li>
  <li><strong>Zoom / FaceTime</strong> - 90 % (audio d'appel clair)</li>
  <li><strong>Navigateur</strong> — 40 % (niveau de musique correspondant à la lecture vidéo)</li>
</ul>

<p>Enregistrez-le en tant que profil « Casque » dans SoundDial et appliquez-le en un seul clic chaque fois que vous le branchez. Créez un profil « Haut-parleurs » distinct avec des ratios différents lorsque vous travaillez à votre bureau.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenez SoundDial sur l'App Store Mac</a> — 14,99 € d'achat unique, sans abonnement, macOS 14.2+.</p>
`,
  },
  "stop-zoom-lowering-music-mac": {
    slug: "stop-zoom-lowering-music-mac",
    title: "Comment empêcher Zoom de réduire votre musique sur Mac",
    description:
      "Chaque fois que vous rejoignez un appel Zoom, votre musique tombe ou disparaît. Voici pourquoi cela se produit et comment contrôler ce qui devient plus silencieux pendant les appels, selon vos conditions.",
    date: "2026-05-28",
    readTime: "6 min read",
    content: `
<p>Vous rejoignez un appel Zoom. Spotify jouait à un volume confortable. L'appel se connecte et votre musique disparaît ou tombe presque à néant. Tu n'as touché à rien. Zoom (ou macOS) a décidé de baisser votre musique pour vous, sans rien demander.</p>

<p>Cela rend les gens fous parce que c'est invisible et automatique. Vous n'avez rien coupé. Vous n'avez pas ajusté de curseur. Quelque chose dans le système a décidé que votre musique devrait être plus silencieuse et vous n'avez aucun moyen évident de la contrôler.</p>

<p>Voici ce qui se passe réellement et comment reprendre le contrôle.</p>

<h2>Pourquoi votre musique devient plus faible pendant les appels Zoom</h2>

<p>Il y a deux causes possibles :</p>

<h3>1. Ducking audio intégré à Zoom</h3>
<p>Zoom possède son propre traitement audio qui peut affecter les autres fichiers audio de votre système. Dans certaines configurations, Zoom réduit le son du système lorsqu'il active votre microphone, afin que le son de l'appel soit plus clair. Ce n'est pas toujours évident dans les paramètres de Zoom.</p>

<p>Vérifiez Zoom → Paramètres → Audio :</p>
<ul>
  <li>Recherchez n'importe quel paramètre « Ajuster automatiquement le volume du microphone » et essayez de le désactiver.</li>
  <li>Cochez « Supprimer le bruit de fond » : cela traite l'audio et peut affecter le volume perçu.</li>
  <li>Assurez-vous que « Utiliser un appareil audio séparé pour l'interprétation simultanée » n'est pas coché, sauf si vous en avez besoin.</li>
</ul>

<h3>2. Commutation de codec macOS</h3>
<p>Lorsque Zoom active votre microphone (en particulier avec des écouteurs Bluetooth comme les AirPods), macOS passe du codec audio AAC de haute qualité au codec SCO de qualité inférieure. Ce changement de codec réduit souvent le volume et la qualité audio globaux. Ce n'est pas spécifiquement la faute de Zoom : cela arrive avec n'importe quelle application qui utilise le microphone via Bluetooth.</p>

<p>Si vous utilisez des AirPods ou d'autres écouteurs Bluetooth et que le volume baisse lorsqu'un appel démarre, c'est probablement la cause.</p>

<h2>Correctifs intégrés</h2>

<h3>Utilisez des écouteurs filaires</h3>
<p>Le problème de commutation du codec Bluetooth disparaît entièrement avec les écouteurs filaires. Un adaptateur casque USB-C ou un casque avec microphone intégré évite complètement le commutateur AAC → SCO. La qualité audio reste constante avant, pendant et après les appels.</p>

<h3>Utilisez un microphone séparé</h3>
<p>Si vous utilisez le microphone intégré de votre Mac (ou un micro USB externe) au lieu du microphone de vos AirPods, macOS n'a pas besoin de changer de codec Bluetooth. Réglez votre périphérique d'entrée sur le micro intégré dans Paramètres système → Son → Entrée, tout en conservant les AirPods comme sortie. De cette façon, les AirPod restent en mode AAC et le volume n'est pas affecté.</p>

<h3>Ajuster les paramètres audio de Zoom</h3>
<p>Dans Zoom → Paramètres → Audio, essayez de désactiver le réglage automatique du microphone et la suppression du bruit de fond. Ces fonctionnalités peuvent interférer avec les niveaux audio d'autres applications.</p>

<h2>La vraie solution : l'esquive automatique selon vos conditions</h2>

<p>Le problème fondamental est que vous n'avez aucun contrôle sur <em>combien</em> votre musique est baissée pendant les appels. Le système prend cette décision à votre place, et elle est généralement trop agressive : la musique tombe à presque zéro au lieu d'un niveau de fond confortable.</p>

<p>Ce que vous voulez en réalité, c'est un atténuation automatique configurable : "lorsque je suis en communication, baissez ma musique à 25 % - pas zéro, pas 50 %, exactement 25 %. »</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> vous donne exactement cela. Sa fonction d'atténuation automatique surveille votre microphone et ajuste automatiquement le son de fond lorsqu'un appel démarre, mais <strong>vous contrôlez le niveau du canard</strong>.</p>

<img src="/apps/sounddial.png" alt="Paramètres d'atténuation automatique SoundDial — réduction du volume configurable pendant les appels Zoom sur Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Comment ça marche</h3>
<ol>
  <li>Vous définissez votre niveau de canard préféré (10 % à 80 %)</li>
  <li>Vous rejoignez un appel Zoom – votre microphone s’active</li>
  <li>SoundDial détecte l'appel et réduit les applications en arrière-plan à votre niveau configuré</li>
  <li>Le son de votre appel reste au volume maximum</li>
  <li>Vous raccrochez : toutes les applications reviennent à leur volume précédent</li>
</ol>

<p>La différence avec l'approche Zoom/macOS :</p>
<ul>
  <li><strong>Vous choisissez le niveau.</strong> 30 % est une bonne valeur par défaut : la musique est audible mais n'interfère pas. Vous pouvez régler entre 10 % (presque silencieux) et 80 % (à peine réduit).</li>
  <li><strong>Il se restaure parfaitement.</strong> À la fin de l’appel, chaque application revient exactement là où elle se trouvait.</li>
  <li><strong>Cela fonctionne avec toutes les applications de communication.</strong> Zoom, équipes, FaceTime, Discord, Slack, Google Meet, Webex, Skype.</li>
  <li><strong>Vous pouvez le désactiver.</strong> Si vous souhaitez gérer manuellement le volume pour un appel spécifique, désactivez simplement la réduction automatique dans les paramètres de SoundDial.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenez SoundDial sur l'App Store Mac</a> — 14,99 € d'achat unique, sans abonnement, macOS 14.2+.</p>
`,
  },
  "airpods-volume-too-low-mac": {
    slug: "airpods-volume-too-low-mac",
    title: "Le volume des AirPods est-il trop faible sur Mac ? Chaque correctif expliqué",
    description:
      "Le son des AirPods est silencieux sur votre Mac, même à plein volume ? Voici toutes les causes – des limites de sécurité des écouteurs aux bizarreries Bluetooth – et comment y remédier.",
    date: "2026-06-08",
    readTime: "7 min read",
    content: `
<p>Vos AirPod fonctionnent correctement sur votre iPhone. Ils sont très bruyants. Mais branchez-les sur votre Mac – sans fil, évidemment – ​​et tout à coup, tout devient trop silencieux. Le volume du système est au maximum. Spotify est au maximum. Les AirPod ne sont tout simplement pas assez bruyants.</p>

<p>Il s’agit de l’une des plaintes audio les plus courantes de la part des utilisateurs de Mac équipés d’AirPods. La bonne nouvelle : c’est presque toujours réparable. La mauvaise nouvelle : il y a environ six causes différentes qui peuvent en être la cause, et vous devrez peut-être toutes les vérifier.</p>

<h2>1. La sécurité des écouteurs limite votre volume</h2>

<p>C'est la cause la plus courante. macOS dispose d'une fonction intégrée qui limite le volume du casque pour protéger votre audition.</p>

<p>Aller à <strong>Paramètres système → Son → Sécurité des écouteurs</strong>.</p>

<p>Si « Réduire le volume audio » est activé, macOS limite activement le volume sonore de vos AirPod. Il mesure l'exposition sonore au fil du temps et réduit le volume s'il pense que vous écoutez trop fort depuis trop longtemps.</p>

<p><strong>Corriger :</strong> Désactivez complètement « Réduire le son fort » ou augmentez le seuil de décibels à un niveau plus élevé. Vous remarquerez immédiatement plus de marge de volume.</p>

<h2>2. Le volume Bluetooth n'est pas synchronisé</h2>

<p>L'audio Bluetooth dispose de deux commandes de volume distinctes : une du côté Mac et une du côté AirPods. Ceux-ci sont censés être synchronisés, mais parfois ils se désynchronisent – ​​le Mac affiche 100 %, mais les AirPod reçoivent en réalité un signal de volume plus faible.</p>

<p><strong>Corriger :</strong> Déconnectez vos AirPods (Paramètres système → Bluetooth → cliquez sur le « i » à côté de vos AirPods → Déconnecter), attendez cinq secondes, puis reconnectez-vous. Cela réinitialise la synchronisation du volume. Essayez également de remettre les AirPod dans leur étui, de fermer le couvercle, d'attendre dix secondes, puis de les retirer.</p>

<h2>3. Le codec audio est passé à une qualité inférieure</h2>

<p>Lorsque vous utilisez le microphone de vos AirPods (pour un appel, Siri ou une dictée), macOS passe du codec AAC de haute qualité au codec SCO de qualité inférieure. SCO a été conçu pour les appels téléphoniques : il réduit la qualité audio et peut également affecter le volume perçu.</p>

<p><strong>Corriger :</strong> Si vous n'êtes pas en communication mais que le son est à la fois faible et de mauvaise qualité, déconnectez et reconnectez vos AirPod. macOS devrait revenir au codec AAC pour la lecture de musique. Si vous êtes en communication, il s'agit d'un comportement attendu : le codec reviendra automatiquement à la fin de l'appel.</p>

<h2>4. Un AirPod est plus silencieux que l’autre</h2>

<p>Si le volume semble faible parce qu’un AirPod est sensiblement plus silencieux, le problème peut être physique : du cérumen ou des débris bloquant le maillage du haut-parleur.</p>

<p><strong>Corriger :</strong> Nettoyez délicatement vos AirPods avec un chiffon sec et non pelucheux. Pour le maillage du haut-parleur, utilisez une brosse sèche à poils doux. N'utilisez pas de liquides, d'air comprimé ou d'objets pointus. Vérifiez également <strong>Paramètres système → Accessibilité → Audio</strong> — assurez-vous que le curseur de balance audio gauche/droite est centré.</p>

<h2>5. L'application elle-même produit un faible volume</h2>

<p>Certaines applications disposent de leurs propres commandes de volume internes distinctes du volume du système. Spotify, VLC, YouTube et Zoom disposent tous de curseurs de volume indépendants. Si le volume interne de l'application est à 50 %, vous n'obtenez que la moitié du volume, même si macOS et vos AirPods sont à 100 %.</p>

<p><strong>Corriger :</strong> Vérifiez le contrôle du volume dans l'application que vous utilisez et assurez-vous qu'il est au maximum.</p>

<h2>6. Core Audio est en mauvais état</h2>

<p>Le démon audio de macOS (coreaudiod) peut parfois rester bloqué dans un état dans lequel l'audio Bluetooth est acheminé de manière incorrecte ou à un niveau réduit, en particulier après une mise en veille/réveil ou une commutation entre plusieurs appareils audio.</p>

<p><strong>Corriger :</strong> Ouvrez Terminal et exécutez :</p>
<p><code>sudo killall coreaudiod</code></p>
<p>L'audio chutera pendant une seconde et redémarrera. Vos AirPod peuvent se reconnecter à un niveau de volume plus normal.</p>

<h2>Toujours trop silencieux ? Augmentez le volume des AirPods au-delà de 100 %</h2>

<p>Si vous avez vérifié les six causes ci-dessus et que vos AirPod ne sont toujours pas assez forts, vous aurez peut-être besoin d'une amplification du volume, augmentant le signal audio au-delà de ce que macOS permet normalement.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> vous permet d'augmenter le volume de n'importe quelle application jusqu'à <strong>200%</strong>. Si Spotify est trop silencieux via vos AirPod, faites glisser le curseur de Spotify sur 150 % ou 180 % dans SoundDial. Le signal audio est amplifié avant d’être envoyé à vos AirPod, ce qui les rend effectivement plus forts que prévu par Apple.</p>

<img src="/apps/sounddial.png" alt="SoundDial augmente le volume des applications pour les AirPods sur Mac avec des curseurs de volume par application jusqu'à 200 %" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>L'avantage du boosting par application : vous pouvez booster l'application silencieuse sans rendre tout le reste plus fort. Si votre appel vidéo se déroule correctement à 100 % mais que Spotify a besoin de 170 %, SoundDial vous permet de définir chacun indépendamment.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenez SoundDial sur l'App Store Mac</a> — 14,99 € d'achat unique, sans abonnement, macOS 14.2+.</p>
`,
  },
  "spotify-volume-too-low-mac": {
    slug: "spotify-volume-too-low-mac",
    title: "Volume Spotify trop faible sur Mac ? Voici chaque correctif",
    description:
      "Spotify au volume max mais toujours trop silencieux sur votre Mac ? Ce guide couvre toutes les causes – du limiteur intégré de Spotify aux paramètres macOS – et comment l'augmenter au-delà de 100 %.",
    date: "2026-06-11",
    readTime: "7 min read",
    content: `
<p>Spotify est à plein volume. Votre Mac est à plein volume. Et ce n'est toujours pas assez fort. Il s'agit de l'une des plaintes Spotify les plus courantes sur Mac, et elle a plusieurs causes, dont la plupart ne sont pas évidentes.</p>

<p>Ce guide présente toutes les raisons pour lesquelles Spotify pourrait être trop silencieux sur votre Mac et comment résoudre chacune d'entre elles. Y compris comment augmenter le volume de Spotify au-delà de 100 % si rien d'autre ne fonctionne.</p>

<h2>Vérifiez d'abord le curseur de volume de Spotify</h2>

<p>Spotify dispose d'un contrôle de volume indépendant dans le coin inférieur droit de l'application (ou en bas de l'écran sur le lecteur repensé). Ce curseur est distinct du volume système de votre Mac. S'il est à 50 %, alors Spotify ne produit que la moitié de son volume potentiel, même si le volume de votre système est à 100 %.</p>

<p><strong>Corriger :</strong> Assurez-vous que le curseur de volume dans l'application Spotify est complètement à droite (100 %).</p>

<h2>Vérifiez la normalisation du volume de Spotify</h2>

<p>Spotify a une fonctionnalité appelée <strong>Normalisation des volumes</strong> qui ajuste automatiquement le volume de lecture afin que toutes les pistes soient lues à peu près au même niveau. Cela vise à éviter les sauts de volume discordants entre les chansons, mais cela peut également réduire le volume global des pistes les plus fortes.</p>

<p>Pour vérifier : ouvrez Spotify → Paramètres → Lecture → <strong>Normaliser le volume</strong>.</p>

<p>Vous avez trois options :</p>
<ul>
  <li><strong>Fort</strong> — le moins de normalisation, le plus proche des niveaux de mastering d'origine</li>
  <li><strong>Normale</strong> — normalisation modérée (par défaut)</li>
  <li><strong>Calme</strong> — plus de normalisation, réduit encore le volume</li>
</ul>

<p><strong>Corriger :</strong> Si Spotify semble trop faible, désactivez complètement la normalisation ou réglez-le sur « Fort ». C’est la cause la plus courante pour laquelle Spotify est étonnamment silencieux.</p>

<h2>Vérifiez le paramètre de qualité audio de Spotify</h2>

<p>Des paramètres de qualité audio inférieurs peuvent parfois entraîner une lecture plus silencieuse, en particulier sur du matériel audio plus ancien. Accédez à Spotify → Paramètres → Qualité audio et assurez-vous que vous utilisez « Très élevé » (320 kbps) si vous disposez d'un abonnement Premium, ou « Élevé » (256 kbps) sur le niveau gratuit.</p>

<h2>Vérifiez les limites de sécurité du casque macOS</h2>

<p>Si vous utilisez des écouteurs (filaires ou Bluetooth), macOS limite peut-être votre volume. Aller à <strong>Paramètres système → Son → Sécurité des écouteurs</strong>. Si « Réduire le son fort » est activé, macOS limite le volume de votre casque à un niveau qu'il considère comme sûr.</p>

<p><strong>Corriger :</strong> Désactivez « Réduire le son fort » ou augmentez le seuil de décibels. Remarque : ce paramètre n'affecte que la sortie casque, pas les haut-parleurs.</p>

<h2>Vérifier le volume Bluetooth</h2>

<p>Si vous utilisez des AirPods ou des haut-parleurs Bluetooth, il existe une couche de volume distincte. Les appareils Bluetooth ont leur propre volume négocié entre le Mac et l'appareil. Parfois, cela n’est pas synchronisé.</p>

<p><strong>Corriger :</strong> Déconnectez et reconnectez votre appareil Bluetooth. Vérifiez également si l'appareil dispose de ses propres boutons de volume – assurez-vous qu'ils sont également au maximum.</p>

<h2>Réinitialiser l'audio de base</h2>

<p>Le système audio du macOS peut parfois rester bloqué dans un état de faible volume, en particulier après des cycles de veille/réveil ou après la commutation entre les périphériques de sortie. Le redémarrage du démon audio résout souvent ce problème.</p>

<p>Ouvrez Terminal et exécutez :</p>
<p><code>sudo killall coreaudiod</code></p>

<p>Le son sera coupé pendant une seconde et redémarrera. Essayez à nouveau Spotify : le son est peut-être plus fort.</p>

<h2>Boostez Spotify au-delà de 100 % avec SoundDial</h2>

<p>Si vous avez tout essayé ci-dessus et que Spotify est encore trop silencieux, le problème peut être que la puissance maximale de Spotify n'est tout simplement pas assez forte pour votre configuration. Ceci est courant avec les haut-parleurs intégrés du MacBook et certains appareils Bluetooth.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> vous permet d'augmenter le volume de n'importe quelle application jusqu'à <strong>200%</strong> – y compris Spotify. Il intercepte le flux audio de Spotify et l'amplifie au-delà du maximum intégré de l'application, sans affecter le volume des autres applications.</p>

<img src="/apps/sounddial.png" alt="SoundDial augmente le volume Spotify à 200 % sur macOS tout en gardant les autres applications au volume normal" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Voici la principale différence : une augmentation du volume à l'échelle du système rendrait <em>tout</em> plus fort – notifications, appels, sons du système – pas seulement Spotify. SoundDial booste Spotify <em>indépendamment</em>. Réglez Spotify à 160 % tandis que votre navigateur reste à 80 % et Zoom reste à 100 %.</p>

<h2>Bonus : réduction automatique de la musique pendant les appels</h2>

<p>Si le problème inverse s'applique également (Spotify est trop fort pendant les appels vidéo), la fonction d'atténuation automatique de SoundDial réduit automatiquement Spotify lorsque vous rejoignez un appel Zoom, Teams ou FaceTime. Une fois l'appel terminé, Spotify revient à son volume précédent. Aucun réglage manuel nécessaire.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenez SoundDial sur l'App Store Mac</a> — 14,99 € d'achat unique, sans abonnement, macOS 14.2+.</p>
`,
  },
  "separate-game-audio-from-discord-mac": {
    slug: "separate-game-audio-from-discord-mac",
    title: "Comment séparer l'audio du jeu de Discord sur Mac",
    description:
      "Des explosions de jeu qui noient vos coéquipiers sur Discord ? Voici comment contrôler indépendamment le volume de l'audio du jeu et du chat vocal sur macOS.",
    date: "2026-06-10",
    readTime: "6 min read",
    content: `
<p>Vous jouez sur votre Mac. Une explosion se produit dans le jeu. Vos coéquipiers Discord parlent, mais vous ne pouvez pas les entendre à cause des coups de feu. Vous baissez le volume – désormais, Discord est également plus silencieux. Vous remontez le volume : les explosions sont à nouveau assourdissantes.</p>

<p>Sous Windows, vous ouvririez le mixeur de volume, baisseriez le jeu à 40 % et laisseriez Discord à 100 %. Sur Mac, vous ne pouvez pas. macOS vous offre un seul curseur de volume pour tout, de sorte que l'audio du jeu et le chat vocal sont liés en permanence.</p>

<p>Ce guide vous montre comment obtenir un contrôle indépendant du volume pour votre jeu et Discord (ou tout autre chat vocal) sur Mac.</p>

<h2>Pourquoi s'agit-il d'un problème spécifique à Mac</h2>

<p>Windows dispose d'un mélangeur de volume intégré depuis 2006 qui vous permet de contrôler le volume de chaque application indépendamment. macOS n’a jamais ajouté cette fonctionnalité. L'audio de chaque application est mixé en un seul flux, et le seul contrôle dont vous disposez est un curseur principal qui affecte tout de la même manière.</p>

<p>Cela signifie :</p>
<ul>
  <li>Si votre jeu est trop fort, le baisser diminue également le volume de Discord.</li>
  <li>Si Discord est trop silencieux, l'augmenter fait également monter le jeu</li>
  <li>Vous ne parvenez pas à trouver un équilibre car les deux applications sont verrouillées sur le même volume</li>
</ul>

<h2>Les solutions de contournement qui ne fonctionnent pas vraiment</h2>

<h3>Utiliser les paramètres de volume du jeu</h3>
<p>La plupart des jeux disposent d'un menu de paramètres audio dans lequel vous pouvez réduire indépendamment le volume principal, la musique, les effets sonores et le chat vocal. Cela aide, mais vous modifiez les paramètres dans le jeu, ce qui signifie que vous devez mettre le jeu en pause, naviguer dans les menus et ajuster à chaque fois que les conditions changent. Et si vous changez de jeu, vous recommencez.</p>

<h3>Utiliser les commandes de volume de Discord</h3>
<p>Discord vous permet de régler le volume de sortie dans Paramètres → Voix et vidéo, et vous pouvez régler le volume de chaque utilisateur en cliquant avec le bouton droit sur son nom. Mais cela contrôle le mixage interne de Discord, et non son volume par rapport aux autres applications. Si le jeu est trop fort, rendre Discord plus fort en interne n'aide pas car le volume du système affecte les deux de la même manière.</p>

<h3>Utiliser différents périphériques de sortie</h3>
<p>Certaines personnes essaient d'acheminer l'audio du jeu vers des haut-parleurs et Discord vers des écouteurs (ou vice versa). macOS ne rend pas cela facile : vous auriez besoin d'un périphérique audio virtuel et d'un routage manuel par application. Et porter des écouteurs avec des haut-parleurs jouant simultanément est pour le moins gênant.</p>

<h2>La vraie solution : le contrôle du volume par application</h2>

<p>Ce dont vous avez besoin, c'est de pouvoir régler le volume de votre jeu indépendamment du volume de Discord. C'est exactement ce que fait un mélangeur de volume par application.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> se trouve dans votre barre de menus et donne à chaque application son propre curseur de volume. Vous pouvez régler votre jeu à 35 % et Discord à 100 % – ou quel que soit le ratio qui vous convient. Changez l'un et l'autre reste en place.</p>

<img src="/apps/sounddial.png" alt="SoundDial affichant des curseurs de volume indépendants pour un jeu et Discord sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Configuration de jeu typique</h3>
<ul>
  <li><strong>Jeu</strong> — 30-50% (assez fort pour l'immersion, pas écrasant)</li>
  <li><strong>Discorde/chat vocal</strong> — 90-100 % (toujours clairement audible sur l'audio du jeu)</li>
  <li><strong>Spotify/musique</strong> — 15-25% (fond subtil, ne gêne pas)</li>
  <li><strong>Navigateur</strong> - en sourdine (pas de vidéos surprises en lecture automatique)</li>
  <li><strong>Slack/notifications</strong> — en sourdine (temps de mise au point)</li>
</ul>

<h3>Enregistrez-le en tant que profil</h3>
<p>SoundDial's <strong>profils de volumes</strong> vous permet de sauvegarder cette configuration et de l'appliquer en un clic. Créez un profil « Gaming » avec votre solde jeu/Discord préféré, un profil « Travail » pour la musique et les appels, et basculez instantanément entre eux. Pas de réajustement des curseurs à chaque fois que vous vous asseyez pour jouer.</p>

<h3>Augmentation du volume pour un chat vocal silencieux</h3>
<p>Parfois, le problème n'est pas que le jeu est trop bruyant, mais que Discord est trop silencieux. Certains coéquipiers ont de mauvais micros ou la sortie de Discord est inférieure à celle des autres applications. SoundDial vous permet d'augmenter le volume de n'importe quelle application jusqu'à <strong>200%</strong>, vous pouvez ainsi amplifier Discord au-delà de son maximum normal sans toucher au volume du jeu.</p>

<h2>Fonctionne avec n'importe quel jeu et n'importe quel chat vocal</h2>

<p>SoundDial fonctionne avec toutes les applications qui produisent de l'audio sur macOS. Peu importe que vous jouiez via Steam, l'App Store, Epic Games ou un jeu par navigateur. Peu importe que vous utilisiez Discord, TeamSpeak, Mumble ou FaceTime. S'il émet du son, SoundDial peut le contrôler.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenez SoundDial sur l'App Store Mac</a> — 14,99 € d'achat unique, sans abonnement, macOS 14.2+.</p>
`,
  },
  "why-doesnt-mac-have-volume-mixer": {
    slug: "why-doesnt-mac-have-volume-mixer",
    title: "Pourquoi Mac n'a-t-il pas de mélangeur de volume comme Windows ?",
    description:
      "Windows dispose d'un contrôle du volume par application depuis 2006. Nous sommes en 2026 et macOS ne le fait toujours pas. Voici la vraie raison – et comment en obtenir une quand même.",
    date: "2026-06-09",
    readTime: "6 min read",
    content: `
<p>Chaque version de Windows depuis Vista (2006) inclut un mélangeur de volume. Cliquez avec le bouton droit sur l'icône du haut-parleur, cliquez sur "Volume Mixer" et vous verrez chaque application avec son propre curseur de volume. Vous pouvez désactiver Chrome sans affecter Spotify. Vous pouvez réduire Discord sans toucher à votre jeu.</p>

<p>Sur macOS ? Un curseur. C'est tout ce que vous obtenez. Vingt ans de mises à jour Mac — Ventura, Sonoma, Sequoia, Tahoe — et Apple n'a jamais ajouté de contrôle du volume par application.</p>

<p>Les gens posent constamment cette question : <em>pourquoi Mac n'a-t-il pas de mixeur de volume ?</em></p>

<h2>Ce n'est pas une limitation technique</h2>

<p>Mettons cela de côté : macOS peut absolument contrôler le volume par application. Le cadre audio sous-jacent — <strong>Audio de base</strong> - prend en charge l'écoute audio par processus, le routage et l'ajustement du gain au niveau de l'API. Apple a présenté le <strong>API de prise audio</strong> dans macOS 14 (Sonoma), ce qui permet aux développeurs d'intercepter et de modifier encore plus facilement les flux audio d'applications individuelles.</p>

<p>Les développeurs tiers créent depuis des années des mélangeurs de volume par application à l'aide de ces API. La technologie existe. Apple n’en a tout simplement pas créé de version destinée aux utilisateurs.</p>

<h2>Alors pourquoi Apple ne l’a-t-il pas construit ?</h2>

<p>Apple n'a jamais expliqué publiquement pourquoi. Mais en regardant leurs modèles de conception, la réponse est assez claire : <strong>Apple donne la priorité à la simplicité plutôt qu'aux fonctionnalités destinées aux utilisateurs expérimentés.</strong></p>

<p>Un curseur de volume est plus simple que douze. C'est plus facile à expliquer, plus facile à apprendre et ne nécessite aucune configuration. Pour un utilisateur qui ne fait qu'une chose à la fois – écouter de la musique OU prendre un appel OU regarder une vidéo – un curseur fonctionne très bien. Apple conçoit d'abord pour cet utilisateur.</p>

<p>Il existe également un argument philosophique : Apple estime que les applications doivent gérer leur propre audio. Si Spotify est trop fort, baissez-le dans Spotify. Si Zoom est trop silencieux, augmentez-le dans Zoom. Le système d'exploitation ne devrait pas avoir besoin de médiation.</p>

<p>Le problème est que cette philosophie ne correspond pas à la réalité. En 2026, tout le monde effectue plusieurs tâches avec l'audio :</p>

<ul>
  <li>Musique jouée pendant le travail</li>
  <li>Appels vidéo avec notifications ping</li>
  <li>Annonces diffusées automatiquement dans les onglets du navigateur</li>
  <li>Jouer avec Discord en cours d'exécution</li>
  <li>Des podcasts dans une oreille, Slack dans l'autre</li>
</ul>

<p>"Ajustez-le simplement dans chaque application" signifie basculer entre six applications, trouver six commandes de volume différentes (dont certaines n'existent pas) et le faire plusieurs fois par jour. C'est le contraire de simple.</p>

<h2>Apple l'ajoutera-t-il un jour ?</h2>

<p>Rien n’indique qu’Apple envisage d’ajouter un mélangeur de volume dans une prochaine version de macOS. La fonctionnalité n'est apparue dans aucune version bêta de macOS, dépôt de brevet ou feuille de route de la WWDC. Le centre de contrôle d'Apple dans la barre de menus affiche toujours uniquement le curseur de volume du système unique.</p>

<p>Il est possible qu'Apple l'ajoute finalement - ils ont adopté des fonctionnalités qu'ils avaient initialement rejetées auparavant (widgets, mosaïque de fenêtres, iPad multi-fenêtres). Mais attendre Apple, c’est attendre indéfiniment.</p>

<h2>Comment obtenir un mélangeur de volume sur Mac dès maintenant</h2>

<p>La réponse est une application de barre de menu tierce. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> est un mélangeur de volume natif macOS qui fait exactement ce que fait le mélangeur de volume Windows – et plus encore.</p>

<img src="/apps/sounddial.png" alt="SoundDial — le mélangeur de volume pour macOS, affichant les curseurs de volume par application dans la barre de menus" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Ce que vous obtenez :</p>

<ul>
  <li><strong>Curseurs de volume par application</strong> — chaque application en cours d'exécution possède son propre curseur, de 0 % à 200 %</li>
  <li><strong>Muet par application</strong> - un clic pour faire taire n'importe quelle application, cliquez à nouveau pour réactiver le son</li>
  <li><strong>Profils de volumes</strong> — enregistrez les configurations pour différentes situations (Travail, Concentration, Jeu) et changez en un seul clic</li>
  <li><strong>Esquive automatique</strong> — le son de fond diminue automatiquement lorsque vous rejoignez un appel et se rétablit lorsque vous raccrochez</li>
  <li><strong>Augmentation du volume à 200 %</strong> - amplifiez les applications silencieuses au-delà de leur maximum normal</li>
  <li><strong>Raccourcis clavier</strong> - basculez le mixeur ou désactivez toutes les applications avec un raccourci clavier</li>
  <li><strong>Commutation de périphérique de sortie</strong> - basculer entre les haut-parleurs, les écouteurs et les appareils externes à partir du même panneau</li>
  <li><strong>Mémoire de volume</strong> — le volume de chaque application est mémorisé entre les redémarrages</li>
</ul>

<p>C'est la fonctionnalité qu'Apple aurait dû créer il y a vingt ans. Achat unique sur le <a href="https://apps.apple.com/app/sounddial/id6772792641">MacApp Store</a>. Pas d'abonnement. macOS 14.2+.</p>

<p>Le mélangeur de volume macOS aurait dû être intégré.</p>
`,
  },
  "boost-mac-volume-beyond-100-percent": {
    slug: "boost-mac-volume-beyond-100-percent",
    title: "Mac Volume trop faible ? Comment augmenter le son au-delà de 100 %",
    description:
      "Votre Mac est à plein volume et il est encore trop silencieux. Voici pourquoi cela se produit et comment amplifier l'audio jusqu'à 200 % sans haut-parleurs externes.",
    date: "2026-06-07",
    readTime: "8 min read",
    content: `
<p>Votre volume Mac est à 100%. Le curseur est complètement à droite. Et ce n'est toujours pas assez fort. Le podcast est trop silencieux. Le participant à l’appel vidéo a l’air de chuchoter. La vidéo YouTube a été enregistrée avec un niveau trop bas. Vous avez atteint le maximum – et ce n'est pas suffisant.</p>

<p>Il s'agit de l'une des plaintes audio les plus courantes sur Mac, en particulier avec les haut-parleurs intégrés du MacBook Air et des anciens modèles de MacBook Pro. Les haut-parleurs sont physiquement petits et certains contenus sont simplement enregistrés à un niveau inférieur à celui d’autres.</p>

<p>Voici pourquoi cela se produit et comment y remédier, y compris comment augmenter le volume de votre Mac au-delà de la limite de 100 %.</p>

<h2>Pourquoi votre Mac semble trop faible à plein volume</h2>

<p>Il existe plusieurs raisons pour lesquelles votre Mac peut ne pas être assez fort, même au volume maximum :</p>

<h3>1. Le contenu lui-même est silencieux</h3>
<p>Tous les fichiers audio ne sont pas masterisés au même niveau. Un podcast produit par des professionnels peut culminer à -3 dB, tandis qu'une vidéo YouTube occasionnelle ou un appel Zoom enregistré peut culminer à -20 dB. La différence est énorme. Lorsque le volume de votre système est à 100 %, le contenu silencieux reste silencieux : macOS ne peut amplifier que jusqu'au niveau du signal d'origine.</p>

<h3>2. Les haut-parleurs MacBook ont des limites physiques</h3>
<p>Les haut-parleurs intégrés d'un MacBook Air ou d'un MacBook Pro 13" sont petits. Ils sont conçus pour la portabilité, pas pour le volume. Les plus grands modèles de MacBook Pro d'Apple (14" et 16") ont des haut-parleurs bien meilleurs, mais même s'ils ont un plafond. Si vous êtes habitué aux haut-parleurs externes ou aux écouteurs, les haut-parleurs intégrés vous sembleront faibles.</p>

<h3>3. Le volume Bluetooth est plafonné</h3>
<p>Certains écouteurs et haut-parleurs Bluetooth ont leur propre plafond de volume distinct de celui du macOS. Même si macOS affiche 100 %, le périphérique Bluetooth n'est peut-être pas au maximum. Ceci est particulièrement courant avec les AirPod, où le limiteur de volume européen ou la fonction de sécurité du casque dans Paramètres → Son → Sécurité du casque peuvent limiter la sortie.</p>

<h3>4. Les volumes d'applications individuelles sont faibles</h3>
<p>Certaines applications disposent de leur propre contrôle de volume interne, distinct du volume du système. Si le volume de l'application Spotify est à 50 % et que le volume du système est à 100 %, vous écoutez effectivement à 50 %. Zoom utilise souvent par défaut un niveau de volume conservateur pour les appels.</p>

<h2>Correctifs intégrés à essayer en premier</h2>

<h3>Vérifiez les limites de sécurité des écouteurs</h3>
<p>Aller à <strong>Paramètres système → Son → Sécurité des écouteurs</strong>. Si « Réduire le son fort » est activé, macOS limite activement votre volume pour protéger votre audition. Vous pouvez désactiver cette option ou augmenter le seuil. Cela n’affecte que les écouteurs – cela ne touche pas la sortie des haut-parleurs.</p>

<h3>Vérifier le volume du périphérique Bluetooth</h3>
<p>Certains appareils Bluetooth disposent de commandes de volume indépendantes. Pour les AirPods, assurez-vous que le volume du Mac et des AirPods est au maximum. Pour les haut-parleurs Bluetooth tiers, vérifiez si le haut-parleur dispose de son propre bouton de volume ou de sa propre application.</p>

<h3>Vérifier le volume dans l'application</h3>
<p>Ouvrez l'application trop silencieuse et recherchez son propre curseur de volume. Spotify en a un dans la barre du lecteur. VLC en a un dans les commandes de lecture. YouTube en a un sur le lecteur vidéo. Assurez-vous qu'ils sont à 100 % avant de conclure que votre Mac est le problème.</p>

<h3>Réinitialiser l'audio de base</h3>
<p>Parfois, le système audio macOS se met en mauvais état après des cycles de veille/réveil ou des changements d'appareil. Ouvrez Terminal et exécutez :</p>
<p><code>sudo killall coreaudiod</code></p>
<p>Cela redémarre le démon audio. Votre son sera coupé pendant une seconde et reviendra, parfois à un niveau plus normal.</p>

<h2>Comment augmenter le volume au-delà de 100 %</h2>

<p>Si vous avez vérifié tout ce qui précède et que votre Mac est encore trop silencieux, vous avez besoin d'une amplification du volume - la possibilité de pousser l'audio <em>ci-dessus</em> le plafond de 100% qu'impose macOS.</p>

<p>L'augmentation du volume fonctionne en interceptant le signal audio avant qu'il n'atteigne vos haut-parleurs et en multipliant son amplitude. À 150 %, chaque échantillon audio est 1,5 fois plus fort que l'original. A 200%, c'est doublé. Cela peut introduire une légère distorsion à des niveaux extrêmes avec certains contenus, mais pour un son faible, c'est le seul moyen de le rendre réellement audible.</p>

<h3>SoundDial : augmentation du volume par application jusqu'à 200 %</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> donne à chaque application de votre Mac un curseur de volume indépendant qui va de 0 % à <strong>200%</strong>. Si une application spécifique est trop silencieuse (un lecteur de podcast, un onglet de navigateur, un appel vidéo), vous pouvez booster uniquement cette application au-delà de 100 % sans rien toucher d'autre.</p>

<img src="/apps/sounddial.png" alt="Augmentation du volume SoundDial — contrôle du volume par application avec 200 % d'amplification sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Ceci est particulièrement utile pour :</p>
<ul>
  <li><strong>Applications de podcast silencieuses</strong> — certains lecteurs maximisent trop bas, en particulier avec des podcasts enregistrés dans des conditions sous-optimales</li>
  <li><strong>Appels vidéo avec des participants silencieux</strong> - boostez Zoom ou Teams lorsque le micro de quelqu'un est faible, sans augmenter le volume de votre musique</li>
  <li><strong>Onglets du navigateur</strong> — Les vidéos YouTube, les applications Web et les médias intégrés sont souvent lus à des volumes inférieurs à ceux des applications multimédias dédiées.</li>
  <li><strong>Anciens enregistrements</strong> — l'audio d'archives, la musique vintage et le contenu vidéo plus ancien sont souvent masterisés à des niveaux inférieurs</li>
</ul>

<p>Le principal avantage par rapport aux amplificateurs de volume à l'échelle du système est que SoundDial augmente <em>par application</em>. Vous pouvez augmenter l'application silencieuse à 180 % tout en gardant tout le reste à des niveaux normaux. Un booster à l’échelle du système amplifierait tout de manière égale, rendant vos applications déjà bruyantes extrêmement bruyantes tandis que la plus silencieuse deviendrait légèrement moins silencieuse.</p>

<h2>Quand les solutions externes sont meilleures</h2>

<p>L’augmentation du volume a des limites. Si vous essayez de remplir une pièce avec le son provenant des haut-parleurs intégrés d'un MacBook Air, aucun logiciel ne peut surmonter la taille physique de ces haut-parleurs. Dans ce cas :</p>

<ul>
  <li><strong>Casque filaire</strong> - contournez complètement les limitations des haut-parleurs, et la plupart des écouteurs peuvent devenir plus forts que les haut-parleurs intégrés</li>
  <li><strong>Haut-parleurs externes</strong> - même une paire de haut-parleurs USB ou Bluetooth bon marché surpassera les haut-parleurs intégrés du MacBook en termes de volume brut</li>
  <li><strong>Interface audio USB</strong> — pour un usage professionnel, une interface audio dédiée fournit un signal clair et puissant aux moniteurs de studio ou aux écouteurs</li>
</ul>

<p>Mais dans le cas quotidien – un onglet de navigateur trop silencieux, un appel pendant lequel quelqu'un marmonne, un podcast enregistré dans un placard – le logiciel augmente le volume avec <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> est la solution la plus rapide. Cliquez sur l'icône de la barre de menu, faites glisser le curseur au-delà de 100 %, c'est fait.</p>

<p>Achat unique sur le <a href="https://apps.apple.com/app/sounddial/id6772792641">MacApp Store</a>. Pas d'abonnement. macOS 14.2+.</p>
`,
  },
  "auto-lower-music-during-zoom-calls-mac": {
    slug: "auto-lower-music-during-zoom-calls-mac",
    title: "Comment baisser automatiquement la musique pendant les appels Zoom sur Mac",
    description:
      "Chaque fois qu’un appel Zoom démarre, vous vous précipitez pour mettre Spotify en pause. Il existe une meilleure solution : l'auto-ducking réduit automatiquement votre musique lorsque votre micro est activé.",
    date: "2026-06-05",
    readTime: "7 min read",
    content: `
<p>L'appel commence. Vous partagez votre écran. Votre musique est toujours aussi explosive. Vous passez frénétiquement à Spotify, appuyez sur pause, revenez à Zoom – mais tout le monde a déjà entendu dix secondes de votre liste de lecture. Cela arrive à tout le monde, et cela arrive parce que macOS n'a aucun lien entre "un appel vient de commencer" et "peut-être baisser la musique".</p>

<p>Sur certains téléphones, cela est automatique : la musique se met en pause ou se baisse lorsqu'un appel arrive. Sur Mac, vous êtes seul. Sauf si vous configurez l’auto-ducking.</p>

<h2>Qu’est-ce que l’atténuation audio ?</h2>

<p><strong>Ducking audio</strong> signifie réduire automatiquement le volume de l'audio de fond lorsque quelque chose de plus important se produit, comme un appel vocal. Le terme vient de l'ingénierie de diffusion, où la musique de fond « se cache » sous la voix de l'annonceur.</p>

<p>En pratique, cela fonctionne ainsi :</p>
<ol>
  <li>Vous écoutez de la musique à 50 % du volume</li>
  <li>Vous rejoignez un appel Zoom</li>
  <li>Votre musique descend automatiquement à 15 %</li>
  <li>Vous pouvez entendre l'appel clairement sans rien régler manuellement</li>
  <li>L'appel se termine</li>
  <li>Votre musique revient automatiquement à 50%</li>
</ol>

<p>Pas de changement d'application. Pas de pause. N'oubliez pas de réactiver votre musique après l'appel. C'est entièrement automatique.</p>

<h2>macOS a-t-il un ducking audio intégré ?</h2>

<p>Non. macOS n'a pas de fonction d'atténuation audio automatique. Il n'y a rien dans les modes Paramètres système, Accessibilité ou Mise au point qui connecte « le microphone est actif » avec « un son de fond inférieur ». Apple n'a tout simplement pas construit cela.</p>

<p>Il existe un paramètre d'accessibilité appelé "Lire l'audio stéréo en mono" et des options d'alertes visuelles flash, mais rien qui ajuste automatiquement le volume selon que vous êtes ou non en appel.</p>

<h2>Les alternatives manuelles (et pourquoi elles sont douloureuses)</h2>

<h3>Mettre la musique en pause manuellement avant chaque appel</h3>
<p>C'est ce que font la plupart des gens. Cela fonctionne – jusqu'à ce que vous l'oubliiez. Ou jusqu'à ce que quelqu'un appelle à l'improviste. Ou jusqu'à ce que vous ayez des appels consécutifs et que vous mettiez en pause et reprenez Spotify douze fois par jour. Cela signifie également qu'il n'y aura pas de musique de fond pendant les appels, même si vous le souhaitez à faible volume.</p>

<h3>Utilisez le mode Focus pour tout faire taire</h3>
<p>Vous pouvez créer un mode Focus « Réunion » qui bloque les sons de notification. Mais les modes Focus ne contrôlent pas le volume de la lecture multimédia. Votre musique continue de jouer à fond même en mode Ne pas déranger – Focus supprime uniquement les notifications.</p>

<h3>Définir les profils de volume manuellement</h3>
<p>Créez une configuration « d'appel » dans laquelle vous abaissez manuellement tout sauf votre application de communication avant chaque appel. Cela fonctionne mais vous oblige à vous en souvenir et à changer manuellement à chaque fois. Et il faudra revenir après.</p>

<h2>Auto-esquive avec SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> dispose d'une fonction d'évitement automatique intégrée qui fait exactement ce que macOS devrait faire nativement. Voici comment cela fonctionne :</p>

<h3>Comment il détecte les appels</h3>
<p>SoundDial surveille l'état du microphone de votre Mac - le même indicateur qui affiche le point orange dans votre barre de menu lorsqu'une application utilise votre micro. Lorsqu'il détecte qu'une application de communication a activé votre microphone, il sait qu'un appel a commencé.</p>

<p>Il fonctionne avec toutes les principales applications de communication :</p>
<ul>
  <li><strong>Zoomer</strong></li>
  <li><strong>Équipes Microsoft</strong></li>
  <li><strong>FaceTime</strong></li>
  <li><strong>Discorde</strong></li>
  <li><strong>Mou</strong> (causés et appels)</li>
  <li><strong>Google Rencontre</strong> (via Chrome)</li>
  <li><strong>CiscoWebex</strong></li>
  <li><strong>Skype</strong></li>
</ul>

<h3>Que se passe-t-il lorsqu'un appel démarre</h3>
<p>Au moment où votre microphone s'active pour un appel, SoundDial réduit automatiquement le volume de toutes les applications non liées à la communication à un niveau que vous configurez — la valeur par défaut est de 30 %. Le son de votre appel reste au volume maximum. La musique de fond descend à un niveau subtil. Les sons des notifications deviennent silencieux.</p>

<p>Un petit indicateur vert apparaît dans l'en-tête de SoundDial pour confirmer que l'auto-ducking est actif.</p>

<h3>Que se passe-t-il à la fin de l'appel</h3>
<p>Lorsque vous raccrochez et que le microphone se désactive, SoundDial restaure tous les volumes de l'application exactement là où ils se trouvaient avant le début de l'appel. Votre musique revient à 50 % (ou partout où vous l'aviez). Aucun réglage manuel nécessaire.</p>

<h3>Configuration du niveau canard</h3>
<p>Dans les paramètres de SoundDial, vous pouvez régler le <strong>niveau de canard</strong> - dans quelle mesure le son de fond est réduit pendant un appel. Le curseur va de 10% (à peine audible) à 80% (toujours bien présent). La valeur par défaut de 30 % convient à la plupart des gens : la musique est perceptible mais n'interfère pas avec la conversation.</p>

<img src="/apps/sounddial.png" alt="Fonction d'atténuation automatique SoundDial réduisant automatiquement le volume de la musique lors d'un appel Zoom sur Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>Pourquoi l'esquive automatique est meilleure que la pause</h2>

<p>Mettre la musique en pause avant un appel semble simple, mais l'auto-esquive est préférable à plusieurs égards :</p>

<ul>
  <li><strong>C'est automatique.</strong> On n'oublie jamais. Pas de brouillage lorsqu'un appel inattendu arrive.</li>
  <li><strong>Vous conservez une musique de fond.</strong> De nombreuses personnes préfèrent une musique de fond douce pendant les appels plutôt que le silence. L'auto-esquive vous permet de le maintenir à un niveau confortable.</li>
  <li><strong>Il gère plusieurs applications.</strong> Il ne s'agit pas seulement de musique : les sons de notification, les onglets du navigateur et toutes les autres sources audio sont tous ignorés simultanément.</li>
  <li><strong>Il se restaure parfaitement.</strong> À la fin de l'appel, chaque application revient exactement à son volume précédent. Pas de réajustement.</li>
  <li><strong>Cela fonctionne pour les appels consécutifs.</strong> Si vous avez trois réunions d'affilée, l'auto-esquive les gère toutes sans que vous ne touchiez à quoi que ce soit.</li>
</ul>

<h2>Installation en moins d'une minute</h2>

<ol>
  <li>Installer <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial depuis l'App Store Mac</a></li>
  <li>Ouvrez Paramètres → onglet Auto-Duck</li>
  <li>Activer l'esquive automatique</li>
  <li>Ajustez le curseur de niveau du canard selon vos préférences</li>
  <li>Ça y est, l'auto-esquive est actif</li>
</ol>

<p>La prochaine fois que vous rejoindrez un appel Zoom, Teams ou FaceTime, votre son en arrière-plan diminuera automatiquement. Quand tu raccroches, ça revient. Achat unique, sans abonnement.</p>
`,
  },
  "how-to-mute-one-app-on-mac": {
    slug: "how-to-mute-one-app-on-mac",
    title: "Comment désactiver une application sur Mac sans tout désactiver",
    description:
      "Slack cingle. Vous êtes en communication. Vous souhaitez désactiver Slack mais continuer à entendre votre appel. macOS ne vous le permet pas – voici quand même comment procéder.",
    date: "2026-06-03",
    readTime: "6 min read",
    content: `
<p>Vous êtes en appel Zoom. Slack continue d'émettre des sons de notification. Un onglet YouTube que vous avez oublié démarre la lecture automatique. Vous appuyez sur la touche muet et maintenant vous n'entendez plus votre appel non plus. Sourdines macOS <em>tout</em>. Il n'existe aucun moyen intégré de désactiver une seule application.</p>

<p>Sous Windows, cliquez avec le bouton droit sur l'icône du haut-parleur, ouvrez le mélangeur de volume et cliquez sur le bouton Muet à côté de Slack. Fait. Slack est silencieux, tout le reste continue de jouer. macOS n’a pas d’équivalent.</p>

<p>Ce guide couvre toutes les méthodes disponibles pour désactiver une application spécifique sur votre Mac – des solutions de contournement intégrées à la solution unique qui fonctionne réellement comme un véritable bouton de sourdine.</p>

<h2>Pourquoi macOS ne peut pas désactiver des applications individuelles</h2>

<p>macOS traite l'audio comme un flux unique. L'audio de chaque application est mélangé avant d'atteindre vos haut-parleurs, et le seul contrôle de volume qu'Apple vous offre fonctionne sur cette sortie mixée finale. Il n'y a aucun moyen d'accéder à ce mix et de faire taire une application sans affecter le reste.</p>

<p>Il ne s'agit pas d'une limitation matérielle, mais d'un choix de conception logicielle. Le framework Core Audio de macOS prend en charge le contrôle audio par processus au niveau de l'API. Apple n'a tout simplement pas créé de moyen d'y accéder directement à l'utilisateur.</p>

<h2>Solutions de contournement intégrées (et leurs limites)</h2>

<h3>1. Désactivez les notifications pour l'application</h3>
<p>Aller à <strong>Paramètres système → Notifications</strong> et recherchez l'application que vous souhaitez désactiver. Vous pouvez désactiver les sons de ses notifications ou désactiver complètement les notifications.</p>
<p><strong>Le piège :</strong> Cela ne fonctionne que pour les sons de notification. Si l'application émet d'autres sons (lecture multimédia, audio d'appel, sons dans l'application), cela ne les touchera pas. Et vous perdez également les notifications visuelles, pas seulement sonores.</p>

<h3>2. Utilisez le mode Mise au point</h3>
<p>Les modes de mise au point macOS (Ne pas déranger, Travail, Personnel, etc.) peuvent supprimer les sons de notification d'applications spécifiques. Vous pouvez configurer quelles applications sont autorisées à vous avertir dans chaque mode Focus.</p>
<p><strong>Le piège :</strong> Les modes de mise au point concernent les notifications, pas l'audio. Ils ne couperont pas le son d'un groupe Slack, d'un onglet de navigateur lisant de l'audio ou de toute lecture multimédia. Ils nécessitent également une configuration initiale pour chaque mode – vous ne pouvez pas simplement « désactiver cette application pour le moment ».</p>

<h3>3. Fermez l'application</h3>
<p>L'option nucléaire. Si vous quittez complètement Slack, il ne peut pas émettre de son. Évidemment, cela signifie que vous ne pourrez voir aucun message tant que vous ne l'aurez pas rouvert.</p>
<p><strong>Le piège :</strong> Vous ne voulez pas quitter l'application, vous voulez <em>continuez à l'utiliser</em> sans l'entendre. Il y a une énorme différence entre « muet » et « fermé ».</p>

<h3>4. Utilisez les propres paramètres de l'application</h3>
<p>Certaines applications ont un paramètre « sons muets » ou « notifications muettes » enfoui quelque part dans leurs préférences. Slack l'a sous Préférences → Notifications → Son et apparence. Spotify a une icône de haut-parleur dans le lecteur.</p>
<p><strong>Le piège :</strong> Vous devez rechercher et parcourir les paramètres de chaque application individuellement. De nombreuses applications n'ont pas du tout cette option. Et passer de « sourdine » à « réactivé » signifie replonger dans les préférences à chaque fois, au lieu de cliquer sur un bouton.</p>

<h2>La vraie solution : un bouton de sourdine par application</h2>

<p>Ce que vous voulez en réalité est très simple : un bouton de sourdine à côté de chaque application qui la fait taire instantanément, sans affecter quoi que ce soit d'autre. Cliquez pour désactiver le son, cliquez à nouveau pour réactiver le son. L'application continue de fonctionner, vous continuez à voir son contenu – vous ne l'entendez tout simplement pas.</p>

<p>C'est exactement ce que fait un mélangeur de volume par application. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> se trouve dans votre barre de menus et affiche chaque application en cours d'exécution avec son propre curseur de volume et son propre bouton de sourdine.</p>

<img src="/apps/sounddial.png" alt="SoundDial affichant les boutons de sourdine par application pour chaque application dans la barre de menu macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Pour désactiver une application :</p>
<ol>
  <li>Cliquez sur l'icône SoundDial dans votre barre de menu</li>
  <li>Trouvez l'application que vous souhaitez désactiver</li>
  <li>Cliquez sur l'icône du haut-parleur à côté</li>
</ol>

<p>C'est tout. L'application est désactivée. Tout le reste continue de jouer quel que soit le volume. Cliquez à nouveau sur l'icône du haut-parleur pour réactiver le son : le volume revient exactement là où il était auparavant.</p>

<h2>Au-delà de la mise en sourdine : contrôle du volume par application</h2>

<p>Une fois que vous disposez d’un mixeur par application, vous réalisez que la mise en sourdine n’est que l’extrême extrémité de ce que vous voulez réellement. La plupart du temps, vous ne souhaitez pas désactiver complètement une application : vous souhaitez la rendre <em>plus silencieux</em>.</p>

<ul>
  <li>Notifications Slack à 15 % – suffisamment subtiles pour ne pas interrompre, suffisamment présentes pour le remarquer</li>
  <li>Musique à 30 % – niveau de fond qui ne rivalise pas avec la conversation</li>
  <li>Navigateur à 60 % – confortable pour la lecture vidéo</li>
  <li>Zoom à 100 % : plein volume pour l'appel qui compte</li>
</ul>

<p>SoundDial donne à chaque application un curseur de 0 % à 200 %. Vous pouvez rendre les applications plus silencieuses que leur minimum intégré ou plus bruyantes que leur maximum intégré. Et avec <strong>profils de volumes</strong>, vous pouvez enregistrer votre configuration préférée et basculer entre les préréglages — mode « Réunion », mode « Focus », mode « Musique » — en un seul clic.</p>

<p>La fonction d'auto-ducking va encore plus loin : lorsque vous démarrez un appel, SoundDial abaisse automatiquement tout sauf votre application de communication. Une fois l'appel terminé, tout revient. Vous ne touchez jamais un curseur.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenez SoundDial sur l'App Store Mac</a> — 14,99 € d'achat unique, sans abonnement, macOS 14.2+.</p>
`,
  },
  "volume-mixer-for-mac": {
    slug: "volume-mixer-for-mac",
    title: "Mélangeur de volume pour Mac : la fonctionnalité manquante que macOS n'a toujours pas",
    description:
      "Windows dispose d'un mélangeur de volume depuis 2006. Voici pourquoi macOS ne l'a toujours pas - et la meilleure façon d'obtenir un contrôle du volume par application sur votre Mac en 2026.",
    date: "2026-06-01",
    readTime: "9 min read",
    content: `
<p>Cliquez avec le bouton droit sur l'icône du haut-parleur sur n'importe quel PC Windows et vous trouverez le mélangeur de volume, un panneau qui affiche toutes les applications qui émettent actuellement du son, chacune avec son propre curseur de volume indépendant. Vous pouvez baisser Spotify à 20 % tout en gardant votre appel Zoom à 100 %. Vous pouvez désactiver Chrome sans rien toucher d'autre. Il existe depuis Windows Vista en 2006.</p>

<p>Faites maintenant la même chose sur un Mac. Cliquez sur l'icône du son dans la barre de menu. Vous obtenez un curseur. C'est ça. Un curseur qui contrôle tout à la fois. Chaque application, chaque notification, chaque son du système, le tout verrouillé ensemble.</p>

<p>Il ne s’agit pas d’une plainte de niche. Il s'agit de la fonctionnalité audio la plus demandée dans macOS, et Apple l'a ignorée pendant vingt ans.</p>

<h2>Que fait réellement un mélangeur de volume</h2>

<p>Un mixeur de volume vous donne <strong>contrôle du volume indépendant pour chaque application</strong> sur votre ordinateur. Au lieu d’un curseur principal, vous obtenez un curseur par application. Chaque curseur affecte uniquement la sortie audio de cette application spécifique.</p>

<p>Voici à quoi cela ressemble en pratique :</p>

<ul>
  <li><strong>Spotify</strong> à 25 % — musique de fond à un niveau confortable</li>
  <li><strong>Zoomer</strong> à 100 % — écoutez chaque mot de la réunion</li>
  <li><strong>Mou</strong> muet - aucune notification ne retentit pendant le temps de mise au point</li>
  <li><strong>Safari</strong> à 60 % – Vidéo YouTube à volume modéré</li>
  <li><strong>Sons du système</strong> à 10 % — retour subtil sans vous surprendre</li>
</ul>

<p>Tous ces éléments fonctionnent simultanément, chacun à son propre volume. Changez-en un et rien d’autre ne bouge. C'est ce que fait un mélangeur de volume, et c'est ce que macOS n'a pas.</p>

<h2>Pourquoi Apple n'en a pas construit</h2>

<p>Ce n'est pas une limitation technique. Le framework audio de macOS — Core Audio — prend entièrement en charge le routage audio par processus et le contrôle du volume au niveau de l'API. Apple utilise ces fonctionnalités en interne. Ils ne les ont tout simplement pas exposés aux utilisateurs.</p>

<p>La raison probable est la philosophie de conception d'Apple : moins d'options, une interface plus simple. Un curseur est plus propre que douze. Et pour quelqu'un qui ne fait qu'une chose à la fois – écouter de la musique OU prendre un appel OU regarder une vidéo – un seul curseur suffit.</p>

<p>Mais ce n'est pas ainsi que les gens utilisent les ordinateurs en 2026. Le travail à distance signifie que vous êtes en communication avec de la musique, un ping Slack et un onglet de navigateur lisant automatiquement une vidéo, le tout en même temps. Le modèle « un curseur pour tout » s'effondre complètement lorsque vous avez cinq sources audio en compétition pour vos oreilles.</p>

<h2>Les solutions de contournement macOS (et pourquoi elles échouent)</h2>

<h3>Utilisez le contrôle du volume intégré à chaque application</h3>
<p>Spotify a un curseur de volume. VLC en a un. QuickTime en a un. Mais cela signifie passer à chaque application individuellement, trouver son contrôle de volume, l’ajuster et revenir en arrière. Il est dispersé dans une douzaine d'endroits différents, et la plupart des applications (Slack, Mail, Safari, Chrome) n'en ont même pas.</p>

<h3>Utilisez « Ne pas déranger » pour désactiver les notifications</h3>
<p>Les modes de mise au point peuvent supprimer les sons de notification, mais ils sont binaires : tout ou rien. Vous ne pouvez pas dire « garder les sons Slack mais les rendre plus silencieux ». Et les modes Focus ne touchent pas du tout aux médias ou au volume des appels.</p>

<h3>Utiliser la configuration audio MIDI</h3>
<p>Cet utilitaire intégré gère les périphériques audio et les fréquences d'échantillonnage. Cela n'a rien à voir avec le volume par application. C'est un outil de configuration de périphérique, pas un mixeur.</p>

<h3>Créer des périphériques multi-sorties</h3>
<p>Vous pouvez combiner des sorties audio dans un périphérique agrégé, mais cela envoie le même audio à plusieurs sorties – cela ne vous donne pas de contrôle par application. C'est utile si vous voulez du son simultanément sur les haut-parleurs et les écouteurs, mais c'est un problème complètement différent.</p>

<p>Aucune de ces solutions de contournement ne résout le problème fondamental : macOS n'a aucun moyen intégré de dire "rendre cette application plus silencieuse sans affecter quoi que ce soit d'autre".</p>

<h2>Que rechercher dans un mélangeur de volume Mac</h2>

<p>Si Apple ne le construit pas, les applications tierces le feront. Mais tous les mélangeurs de volume ne sont pas égaux. Voici ce qui différencie un bon d’un médiocre :</p>

<h3>Détection d'applications en temps réel</h3>
<p>Le mixeur doit détecter automatiquement chaque application qui produit actuellement de l'audio. Vous ne devriez pas avoir à ajouter manuellement des applications ou à configurer quoi que ce soit. Ouvrez une application et elle apparaît dans le mixeur. Fermez-le et il disparaît.</p>

<h3>Plage de volume au-delà de 100 %</h3>
<p>Certaines applications sont trop silencieuses, même au volume maximum : lecteurs de podcast silencieux, onglets de navigateur avec un son doux, appels vidéo où le micro de quelqu'un est faible. Un bon mixeur vous permet <strong>augmenter le volume jusqu'à 200 %</strong>, amplifiant efficacement l'audio au-delà de ce que l'application elle-même peut produire.</p>

<h3>Muet en un clic par application</h3>
<p>Vous devriez pouvoir désactiver n'importe quelle application d'un simple clic, sans déplacer le curseur. Lorsque vous réactivez le son, il devrait revenir exactement là où il se trouvait. Ceci est essentiel pour désactiver rapidement une application bruyante pendant un appel.</p>

<h3>Profils pour différentes situations</h3>
<p>Vous ne souhaitez pas ajuster manuellement huit curseurs à chaque fois que vous passez de « travailler avec de la musique » à « appel vidéo » ou à « jouer ». Les profils vous permettent d'enregistrer une configuration de volume et de l'appliquer en un seul clic. Un profil « Réunion » peut définir le zoom à 100 %, la musique à 15 % et les notifications à 0 %. Un profil « Focus » peut tout désactiver sauf Spotify.</p>

<h3>Auto-esquive pendant les appels</h3>
<p>La meilleure fonctionnalité qu'un mélangeur de volume puisse avoir : réduire automatiquement le son de fond lorsque vous rejoignez un appel et le restaurer à la fin de l'appel. Aucun réglage manuel nécessaire. Votre musique devient silencieuse lorsque Zoom active votre microphone et revient lorsque vous raccrochez.</p>

<h3>Intégration de la barre de menus</h3>
<p>Un mélangeur de volume devrait résider dans la barre de menu – un clic pour ouvrir, régler et fermer. Il ne devrait pas s'agir d'une fenêtre complète, ne devrait pas occuper d'espace dans le Dock et ne devrait pas vous obliger à quitter votre application actuelle. Vous devriez pouvoir régler les volumes sans perdre votre concentration sur ce que vous faites.</p>

<h2>SoundDial : le mélangeur de volume macOS aurait dû être intégré</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> est une application native de la barre de menus macOS qui vous offre exactement ce qu'Apple ne vous offre pas : un contrôle du volume indépendant pour chaque application de votre Mac.</p>

<p>Il se trouve dans votre barre de menus et affiche chaque application en cours d'exécution avec son propre curseur de volume. Faites glisser un curseur pour régler le volume de cette application de 0 % à 200 %. Cliquez sur l'icône du haut-parleur pour le désactiver instantanément. Basculez entre les profils enregistrés pour différentes situations. Activez l'auto-ducking et votre musique devient automatiquement plus silencieuse lorsqu'un appel démarre.</p>

<img src="/apps/sounddial.png" alt="SoundDial — mélangeur de volume par application pour macOS affichant les curseurs de volume d'application individuels dans la barre de menus" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Principales caractéristiques :</p>
<ul>
  <li><strong>Curseurs de volume par application</strong> — Plage de 0 % à 200 % pour chaque application en cours d'exécution</li>
  <li><strong>Muet en un clic</strong> - faire taire n'importe quelle application sans déplacer son curseur</li>
  <li><strong>Profils de volumes</strong> - enregistrer et basculer entre les configurations de volume</li>
  <li><strong>Esquive automatique</strong> — la musique baisse automatiquement pendant les appels</li>
  <li><strong>Raccourcis clavier</strong> - basculez le mixeur ou désactivez toutes les applications avec un raccourci clavier</li>
  <li><strong>Commutation de périphérique de sortie</strong> — changer les haut-parleurs/écouteurs du même panneau</li>
  <li><strong>Mémoire de volume</strong> - se souvient du volume de chaque application entre les redémarrages</li>
</ul>

<p>Achat unique. Pas d'abonnement. macOS 14.2+. <a href="https://apps.apple.com/app/sounddial/id6772792641">Obtenez SoundDial sur l'App Store Mac</a>.</p>
`,
  },
};
