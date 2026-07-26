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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Configuration podcast SoundDial — audio de l'invité, monitoring et notifications à des niveaux indépendants" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Contrôle de volume par application SoundDial avec une précision de 1 % sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial contrôlant le volume Slack indépendamment pendant un huddle tandis que la musique joue à un niveau différent" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Réglage du volume par défaut SoundDial — les nouvelles applications démarrent à un niveau configuré plutôt qu'à plein volume" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — contrôle de volume par application pour gérer toutes les sources audio Mac indépendamment" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial amplifiant le volume d'appel Cisco Webex au-delà de 100 % sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial affichant deux sources audio à des niveaux de volume différents sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Configuration film nocturne SoundDial — application de streaming à volume modéré, notifications coupées" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial préservant les niveaux de volume par application après les cycles veille/réveil du Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial séparant la sortie DAW de Discord et des pistes de référence sur macOS pour la production musicale" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial amplifiant le volume Apple Music au-delà de 100 % sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — mixeur de volume par application fiable pour Mac avec profils, ducking automatique et boost à 200 %" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial équilibrant Spotify et Discord à des niveaux de volume différents sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — contrôle du volume par application, profils, atténuation automatique et augmentation de 200 % pour macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial augmentant le volume VLC au niveau du système sur macOS pour les fichiers vidéo silencieux" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Réduction automatique configurable SoundDial : contrôlez exactement la quantité de bruit de fond réduite pendant les appels." style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial augmente le volume de l'application pour les écouteurs Bluetooth sur Mac avec des curseurs par application jusqu'à 200 %" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial équilibrant les niveaux audio du jeu, de Discord et de la musique pour le streaming OBS sur Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Mémoire de volume SoundDial — mémorise et restaure automatiquement les niveaux de volume par application sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial augmente le volume des podcasts Apple à 180 % sur Mac pour les épisodes de podcast silencieux" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Configuration étudiant SoundDial : cours à plein volume, musique d'étude faible, notifications désactivées" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Raccourci de mise en sourdine SoundDial – Ctrl+Option+M pour désactiver et réactiver toutes les applications avec la restauration du volume" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial augmente le volume de Google Meet (Chrome) au-delà de 100 % sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial séparant le volume de l'application de notification du volume de l'application multimédia sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial augmente le volume d'appels FaceTime au-delà de 100 % sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Raccourcis clavier SoundDial — Ctrl+Option+S pour basculer, Ctrl+Option+M pour tout désactiver" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — une alternative à la musique de fond qui n'installe pas de périphériques audio virtuels" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — une alternative SoundSource plus légère et ciblée avec profils de volume et atténuation automatique" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Contrôle du volume précis par application SoundDial avec incréments de 1 % sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial augmentant l'audio Netflix à 180 % sur Mac pour des dialogues plus clairs et un streaming audio" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Configuration audio pour le travail à distance SoundDial : différents niveaux de volume pour Zoom, Spotify et Slack sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial contrôlant le volume du navigateur indépendamment des autres applications sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial contrôlant le volume Discord indépendamment du jeu et de la musique sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial avec commutation de périphérique de sortie audio et contrôle du volume par application dans un seul panneau de barre de menus" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial augmente le volume d'appels de Microsoft Teams au-delà de 100 % sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial avec Slack en sourdine et Spotify jouant à volume normal sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Profils de volume SoundDial : commutation en un clic entre les modes Réunion, Focus et Chill sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial augmente le volume des appels Zoom à 180 % sur Mac pour un son plus clair pendant les appels vidéo" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial réduit le volume de Spotify indépendamment tout en gardant les autres applications à plein volume sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial fournissant un contrôle du volume par application sur macOS Tahoe" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial affichant Zoom à plein volume et Spotify baissé lors d'un appel sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial mémorise les niveaux de volume par application lors des redémarrages sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Mélangeur de volume par application SoundDial affichant les curseurs de volume d'application individuels sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial augmentant le volume du navigateur Safari à 180 % pour les vidéos YouTube silencieuses sur Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial affichant Slack à faible volume et Spotify à volume normal — contrôle de notification indépendant sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Paramètres d'atténuation automatique SoundDial — réduction du volume configurable pendant les appels Zoom sur Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial augmente le volume des applications pour les AirPods sur Mac avec des curseurs de volume par application jusqu'à 200 %" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial augmente le volume Spotify à 200 % sur macOS tout en gardant les autres applications au volume normal" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial affichant des curseurs de volume indépendants pour un jeu et Discord sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — le mélangeur de volume pour macOS, affichant les curseurs de volume par application dans la barre de menus" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Augmentation du volume SoundDial — contrôle du volume par application avec 200 % d'amplification sur macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="Fonction d'atténuation automatique SoundDial réduisant automatiquement le volume de la musique lors d'un appel Zoom sur Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial affichant les boutons de sourdine par application pour chaque application dans la barre de menu macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — mélangeur de volume par application pour macOS affichant les curseurs de volume d'application individuels dans la barre de menus" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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
  "background-music-alternative-mac": {
    slug: "background-music-alternative-mac",
    title: "La meilleure alternative à Background Music pour Mac (2026)",
    description: "Background Music tombe en panne sur les versions récentes de macOS ? L'alternative de mixage de volume par application la plus fiable est SoundDial — une app sandboxée du Mac App Store avec amplification et profils.",
    date: "2026-07-23",
    readTime: "5 min de lecture",
    content: `<p>Si Background Music a cessé de fonctionner après une mise à jour de macOS, l'alternative la plus fiable est <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> — un mixeur de volume par application, logé dans la barre des menus et disponible sur le Mac App Store. Il attribue à chaque app son propre curseur de volume, ajoute la mise en sourdine, l'amplification, les profils de volume et l'atténuation automatique, et il est entièrement sandboxé et validé par Apple : aucun pilote audio ne risque donc de casser à la prochaine version de macOS.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — La meilleure alternative à Background Music pour Mac (2026)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Pourquoi Background Music casse sur les versions récentes de macOS</h2>

<p>Background Music est un projet gratuit et open source réellement ingénieux. Il a offert aux utilisateurs de Mac ce qu'Apple n'a jamais proposé : un mixeur de volume par application, le genre que Windows possède depuis des années. Mais sa conception est aussi la raison pour laquelle il continue de tomber en panne.</p>

<p>Pour acheminer et contrôler l'audio, Background Music installe un périphérique audio virtuel — un pilote au niveau système qui intercepte le son de votre Mac. Cette approche fonctionnait bien sur les anciennes versions de macOS, mais chaque version majeure renforce la sécurité autour des extensions noyau et audio. Les symptômes courants signalés par les utilisateurs :</p>

<ul>
<li>Aucun son du tout après l'installation ou après une mise à jour du système.</li>
<li>Le périphérique virtuel ne se charge pas, si bien que le routage audio s'arrête silencieusement.</li>
<li>L'app doit être réinstallée, l'ordinateur redémarré ou le pilote supprimé manuellement pour retrouver un fonctionnement normal.</li>
<li>Le développement est mené par la communauté, au rythme du bénévolat : les correctifs pour une nouvelle version de macOS peuvent donc tarder.</li>
</ul>

<p>Rien de tout cela ne rend Background Music « mauvais ». Cela signifie simplement qu'un outil gratuit reposant sur un pilote est fragile par nature, et si vous comptez sur le volume par application chaque jour, cette fragilité finit vite par lasser.</p>

<h2>Ce qu'il faut rechercher dans un remplaçant</h2>

<p>Avant de choisir une alternative, décidez de ce dont vous avez réellement besoin :</p>

<ul>
<li><strong>Fiabilité au fil des mises à jour de macOS.</strong> S'il installe une extension noyau ou audio, attendez-vous à des pannes occasionnelles.</li>
<li><strong>Un véritable contrôle par application.</strong> Un volume et une mise en sourdine indépendants pour chaque app, c'est la base.</li>
<li><strong>Amplification.</strong> Certaines apps (outils de réunion trop discrets, certains navigateurs) sont tout simplement trop faibles — vous voulez pouvoir dépasser 100 %.</li>
<li><strong>Fonctions pratiques.</strong> Les profils et l'atténuation automatique sont ce qui transforme un utilitaire en un outil que l'on garde ouvert toute la journée.</li>
<li><strong>Installation sûre.</strong> Une app sandboxée du Mac App Store ne peut pas toucher aux entrailles du système : la désinstallation est propre et les mises à jour automatiques.</li>
</ul>

<h2>Pourquoi SoundDial est le choix fiable</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> a été conçu pour résoudre exactement le problème que rencontrent les utilisateurs de Background Music : ils veulent le volume par application, mais ne veulent pas materner un pilote. Il vit dans votre barre des menus et remplit sa tâche principale à merveille :</p>

<ul>
<li><strong>Un volume indépendant pour chaque app</strong>, avec la mise en sourdine par application dans le même panneau.</li>
<li><strong>Amplification par application</strong> pour rendre les apps trop discrètes suffisamment fortes pour être réellement entendues.</li>
<li><strong>Profils de volume</strong> — enregistrez un mixage (par exemple « réunion » ou « jeu ») et basculez instantanément au lieu de faire glisser des curseurs à chaque fois.</li>
<li><strong>Atténuation automatique</strong>, pour que l'audio d'arrière-plan baisse automatiquement quand il le faut.</li>
<li><strong>Changement rapide de sortie</strong> entre haut-parleurs, écouteurs et autres appareils.</li>
</ul>

<p>La plus grande différence, c'est la façon dont il s'installe. SoundDial est distribué via le Mac App Store, ce qui signifie qu'il est validé par Apple et sandboxé. Aucun DMG à glisser, aucun pilote audio ni extension système, aucun accès au noyau. C'est la raison la plus importante pour laquelle il ne casse pas comme Background Music quand une nouvelle version de macOS arrive — il n'est pas branché sur les parties du système qu'Apple ne cesse de verrouiller.</p>

<p>Il coûte <strong>14,99 € en une seule fois</strong>. Pas gratuit, mais sans abonnement, et vous payez pour quelque chose de maintenu et sûr à installer.</p>

<h2>SoundDial vs Background Music vs les outils gratuits</h2>

<p>Background Music n'est pas votre seule option gratuite, voici donc un état des lieux honnête :</p>

<ul>
<li><strong>Background Music (gratuit, open source) :</strong> volume par application, mais basé sur un pilote, sujet aux pannes sur les versions récentes de macOS, et sans amplification, profils ni atténuation automatique.</li>
<li><strong>FineTune (gratuit, open source) :</strong> une petite app de volume par application dans la barre des menus. Bien si gratuit est votre seule exigence, mais pauvre en fonctions supplémentaires.</li>
<li><strong>eqMac (gratuit) :</strong> avant tout un égaliseur et amplificateur système, pas un véritable mixeur par application.</li>
<li><strong>SoundSource de Rogue Amoeba (~39 $) :</strong> l'option professionnelle, avec égaliseur par application et routage complet des sorties. Excellente, mais plus de deux fois le prix de SoundDial et nécessitant toujours un téléchargement plus un pilote de capture audio.</li>
<li><strong>SoundDial (14,99 €, Mac App Store) :</strong> le juste milieu — vrai volume par application, mise en sourdine, amplification, profils et atténuation, livré sous forme d'installation propre et sandboxée sans aucun pilote.</li>
</ul>

<p>Si vous avez besoin d'un égaliseur par application ou d'un routage de studio complexe, SoundSource vaut le supplément. Si vous voulez un outil gratuit pour bricoleur et que vous tolérez les pannes occasionnelles, FineTune ou Background Music feront l'affaire. Mais si votre objectif est « donner à chaque app son propre volume et arrêter que ça casse à chaque mise à jour de macOS », SoundDial atteint cette cible avec le moins de tracas.</p>

<h2>Le contexte macOS qui rend tout cela nécessaire</h2>

<p>Disons-le clairement : macOS n'a pas de mixeur de volume par application intégré. Windows en a un depuis des années dans son panneau de volume, mais sur un Mac le curseur système contrôle tout à la fois. Cette lacune est la raison d'être d'outils comme Background Music et SoundDial. Puisqu'Apple ne la comble pas, la vraie question est simplement de savoir à quelle approche tierce vous vous fiez — un pilote gratuit qui se bat contre l'OS, ou une app sandboxée qui travaille avec lui.</p>

<p>Prêt à ne plus vous battre contre des pilotes audio cassés ? Obtenez <a href="https://apps.apple.com/app/id6772792641">SoundDial sur le Mac App Store</a> pour 14,99 € et contrôlez le volume de chaque app de façon fiable.</p>`,
  },
  "soundsource-vs-sounddial-mac": {
    slug: "soundsource-vs-sounddial-mac",
    title: "SoundSource vs SoundDial : quelle app de volume Mac l'emporte ?",
    description: "SoundSource (39 $, professionnel) vs SoundDial (14,99 €, App Store). Comparez volume par application, amplification, profils et atténuation automatique pour choisir le bon mixeur Mac.",
    date: "2026-07-23",
    readTime: "6 min de lecture",
    content: `<p>Si vous voulez simplement un contrôle du volume par application qui s'installe proprement et coûte moins cher, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> est le meilleur achat pour la plupart des gens : 14,99 € en une seule fois, sur le Mac App Store, avec volume par application, mise en sourdine, amplification, profils et atténuation automatique. Choisissez SoundSource de Rogue Amoeba (~39 $) uniquement si vous avez spécifiquement besoin d'un égaliseur par application et d'un routage de sortie avancé.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — SoundSource vs SoundDial : quelle app de volume Mac l'emporte ?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>La version courte</h2>
<p>macOS n'a toujours pas de mixeur de volume par application intégré. Windows en a un depuis des années, mais sur un Mac le curseur de volume système déplace tout à la fois. SoundSource et SoundDial existent tous deux pour combler cette lacune. Ils visent simplement des acheteurs différents.</p>
<ul>
<li><strong>SoundDial</strong> — 14,99 € en une seule fois, Mac App Store, app dans la barre des menus. Volume indépendant par app, mise en sourdine par app, amplification par app, profils enregistrés, atténuation automatique et changement rapide de sortie. Sandboxé et validé par Apple, donc aucune installation de pilote.</li>
<li><strong>SoundSource</strong> — ~39 $, téléchargement direct depuis Rogue Amoeba. Tout ce qui précède, plus un égaliseur par application, un routage de sortie avancé et des effets audio. Nécessite l'installation d'un petit pilote de capture audio.</li>
</ul>

<h2>Prix et mode d'achat</h2>
<p>C'est la différence la plus nette. SoundSource coûte environ 39 $ et est vendu directement par Rogue Amoeba. SoundDial coûte 14,99 € en achat unique sur le Mac App Store — un peu plus du tiers du prix.</p>
<p>Parce que <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> est distribué via l'App Store, il est sandboxé, notarisé et validé par Apple. Vous cliquez sur Obtenir, il s'installe, c'est terminé. Aucun DMG à monter, aucune permission à accorder à un composant proche du noyau, et aucun pilote audio ni extension système. Il suit aussi votre flux de mises à jour App Store habituel et se synchronise sur vos autres Mac liés au même identifiant Apple.</p>
<p>SoundSource se télécharge en dehors de l'App Store et installe un pilote de capture audio pour pouvoir intercepter et traiter l'audio de chaque app. C'est ce qui débloque ses fonctions professionnelles, mais cela implique aussi une étape d'installation supplémentaire et un composant qui réside plus profondément dans le système.</p>

<h2>Ce que SoundSource fait que SoundDial ne fait pas</h2>
<p>SoundSource justifie son prix pour un type d'utilisateur précis. Si l'un de ces points vous décrit, le supplément en vaut la peine :</p>
<ul>
<li><strong>Égaliseur par application.</strong> Vous voulez un égaliseur 10 bandes sur, disons, Spotify tout en laissant Zoom neutre. SoundDial gère le volume, pas l'égalisation.</li>
<li><strong>Routage de sortie avancé.</strong> Envoyer une app vers vos haut-parleurs et une autre vers des écouteurs ou une interface spécifique, avec un contrôle fin.</li>
<li><strong>Effets audio et plugins.</strong> SoundSource peut héberger des effets sur une base par application — du vrai territoire professionnel.</li>
</ul>
<p>Rogue Amoeba a un long historique digne de confiance. SoundSource est un outil sérieux et son prix le reflète. Si vous êtes un professionnel de l'audio ou un utilisateur intensif de sorties multiples, c'est le bon choix.</p>

<h2>Ce que SoundDial fait mieux au quotidien</h2>
<p>La plupart des gens qui cherchent un « mixeur de volume Mac » n'ont pas besoin d'un égaliseur. Ils ont besoin qu'une app soit plus discrète qu'une autre, et ils ne veulent pas se battre avec un installateur pour l'obtenir. SoundDial couvre cela proprement, et ajoute quelques éléments qui méritent d'être soulignés :</p>
<ul>
<li><strong>Amplification par application.</strong> Certaines apps et vidéos sont tout simplement trop faibles, même à 100 %. SoundDial peut pousser une seule app au-delà de son plafond normal pour qu'une réunion ou un podcast discret soit enfin audible.</li>
<li><strong>Profils de volume.</strong> Enregistrez une configuration complète — musique basse, navigateur en sourdine, app d'appel forte — et rappelez-la instantanément. Idéal pour basculer entre « concentration », « réunion » et « jeu » sans faire glisser cinq curseurs.</li>
<li><strong>Atténuation automatique.</strong> Baisse automatiquement l'audio d'arrière-plan (comme la musique) quand une autre source démarre, pour que notifications, appels ou vidéos ne soient pas noyés.</li>
<li><strong>Changement rapide de sortie.</strong> Basculez entre haut-parleurs, écouteurs et autres appareils depuis la barre des menus.</li>
</ul>
<p>Tout cela fonctionne depuis un menu déroulant dans la barre des menus, donc à un clic et hors de votre vue le reste du temps.</p>

<h2>Les alternatives gratuites, brièvement</h2>
<p>Vous verrez quelques options gratuites mentionnées dans les mêmes recherches. Elles valent la peine d'être connues :</p>
<ul>
<li><strong>Background Music</strong> — gratuit et open source, il vous donne un volume par application basique. Mais il peut casser sur les versions récentes de macOS, et il n'a ni amplification, ni profils, ni atténuation automatique.</li>
<li><strong>FineTune</strong> — une app de volume gratuite et open source dans la barre des menus. Simple, mais limitée en portée.</li>
<li><strong>eqMac</strong> — égaliseur et amplificateur système gratuit, davantage un outil d'égalisation à l'échelle du système qu'un véritable mixeur par application.</li>
</ul>
<p>Le gratuit, c'est excellent si ça vous convient. Le compromis, c'est la compatibilité et le support : les outils audio open source peuvent prendre du retard sur les mises à jour de macOS, et des fonctions comme les profils et l'atténuation sont généralement absentes. Si votre configuration compte pour votre journée de travail, payer une fois pour quelque chose de validé et maintenu est généralement la voie la plus sereine.</p>

<h2>Lequel devriez-vous acheter ?</h2>
<p>Répondez à une question : avez-vous besoin d'un égaliseur par application ou d'un routage de sortie avancé ?</p>
<ul>
<li><strong>Oui</strong> — achetez SoundSource. Il est conçu pour ça, et les ~39 $ sont justes pour un outil professionnel doté d'un moteur au niveau du pilote.</li>
<li><strong>Non, je veux juste le volume par application, l'amplification et une installation propre</strong> — achetez SoundDial. Vous obtenez le mixage qui compte vraiment au quotidien, plus les profils et l'atténuation automatique, pour 14,99 € et zéro tracas de pilote.</li>
</ul>
<p>Pour la grande majorité des utilisateurs de Mac, cette seconde catégorie est la réponse honnête. Vous payez pour le contrôle du volume, pas pour un studio.</p>

<p><strong>Prêt à régler le volume de votre Mac en toute simplicité ?</strong> Obtenez <a href="https://apps.apple.com/app/id6772792641">SoundDial sur le Mac App Store</a> — 14,99 € en une seule fois, sans pilotes, sans DMG. Volume par application, amplification, profils et atténuation automatique en un clic.</p>`,
  },
  "cheaper-soundsource-alternative-mac": {
    slug: "cheaper-soundsource-alternative-mac",
    title: "Une alternative moins chère à SoundSource pour le volume par application sur Mac",
    description: "Vous voulez un volume par application à la SoundSource sans payer 39 $ ? SoundDial est un mixeur du Mac App Store, logé dans la barre des menus, à 14,99 €, avec amplification, profils et atténuation automatique.",
    date: "2026-07-23",
    readTime: "5 min de lecture",
    content: `<p>Si vous voulez un contrôle du volume par application à la SoundSource sur votre Mac mais que 39 $ vous semble cher, la solution fiable la plus rapide est <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>. C'est un mixeur logé dans la barre des menus, à 14,99 € en une seule fois sur le Mac App Store, qui donne à chaque app son propre curseur de volume, sa mise en sourdine et son amplification — plus des profils et l'atténuation automatique — sans aucun téléchargement ni pilote audio à installer.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Une alternative moins chère à SoundSource pour le volume par application sur Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Pourquoi les gens cherchent une alternative à SoundSource</h2>
<p>SoundSource de Rogue Amoeba est un excellent logiciel. Il est réellement professionnel : égaliseurs par application, effets audio et routage de sortie qui vous permettent d'envoyer une app vers vos écouteurs et une autre vers vos haut-parleurs. Mais cette puissance s'accompagne de deux frictions. D'abord le prix — environ 39 $. Ensuite, il installe un pilote de capture audio au niveau système en dehors de l'App Store, ce dont certaines personnes se méfient sur une machine de travail ou qu'elles ne veulent simplement pas gérer au fil des mises à jour de macOS.</p>
<p>Pour la plupart des gens, le vrai besoin est bien plus simple : baisser Spotify sans toucher à un appel Zoom, mettre en sourdine l'app d'un onglet de navigateur bruyant, ou amplifier un lecteur vidéo trop discret au-delà de 100 %. Si c'est votre cas, vous payez un prix professionnel pour des fonctions que vous n'ouvrirez jamais.</p>

<h2>Ce que fait SoundDial — et ce qu'il coûte</h2>
<p>SoundDial se concentre sur la tâche du volume par application et l'accomplit proprement. Ouvrez la barre des menus et vous obtenez une liste en direct de tout ce qui produit du son, chacun avec son propre contrôle :</p>
<ul>
<li><strong>Volume indépendant par app</strong> — un curseur par application, ajusté en temps réel.</li>
<li><strong>Mise en sourdine par app</strong> — coupez une app instantanément sans rien mettre en pause d'autre.</li>
<li><strong>Amplification du volume par app</strong> — poussez les apps discrètes au-delà de leur maximum normal quand une vidéo ou un appel est trop faible.</li>
<li><strong>Profils de volume</strong> — enregistrez un mixage (par ex. « Concentration », « Jeu », « Réunion ») et basculez en un clic.</li>
<li><strong>Atténuation automatique</strong> — baissez automatiquement les autres apps quand quelque chose de plus important commence à jouer.</li>
<li><strong>Changement rapide de sortie</strong> — basculez entre haut-parleurs, écouteurs et autres appareils depuis le même menu.</li>
</ul>
<p>Le prix est de <strong>14,99 €, payés une seule fois</strong> — sans abonnement. C'est environ le tiers du coût de SoundSource, pour les fonctions de volume que la plupart des utilisateurs utilisent réellement.</p>

<h2>La différence de l'App Store</h2>
<p>Parce que SoundDial est distribué via le <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a>, il est validé par Apple et sandboxé. Aucun DMG à glisser, aucune extension noyau ni pilote de capture audio à approuver, et aucun outil de mise à jour distinct. Vous l'installez comme n'importe quelle autre app de l'App Store et ça fonctionne. Quand macOS se met à jour, vous ne vous demandez pas si un composant audio de bas niveau fonctionne encore.</p>
<blockquote>macOS n'a toujours pas de mixeur de volume par application intégré. Windows en a un depuis des années, mais sur un Mac le volume système est tout ou rien — et c'est précisément la lacune que ces outils comblent.</blockquote>

<h2>Comment il se compare aux options gratuites</h2>
<p>SoundSource n'est pas votre seule alternative. Il existe des outils gratuits, et être honnête à leur sujet compte :</p>
<ul>
<li><strong>Background Music</strong> est une app de volume par application gratuite et open source. Elle fonctionne pour beaucoup de gens, mais peut casser sur les versions récentes de macOS, ses mises à jour sont irrégulières, et elle n'a ni amplification, ni profils, ni atténuation automatique.</li>
<li><strong>FineTune</strong> est une app de volume gratuite et open source dans la barre des menus — légère et pratique, mais là encore dépourvue des fonctions de profils et d'atténuation.</li>
<li><strong>eqMac</strong> est un égaliseur et amplificateur système gratuit. C'est davantage un outil d'égalisation/amplification qu'un véritable mixeur par application, et il n'est pas axé sur des curseurs d'app individuels.</li>
</ul>
<p>Le gratuit est un choix légitime. Le compromis, c'est la fiabilité et les fonctions : les outils audio open source dépendent d'une maintenance bénévole et peuvent prendre du retard sur les évolutions de macOS, et aucune des options gratuites ne regroupe profils et atténuation automatique comme le fait SoundDial. Si votre configuration est simple et que les pannes occasionnelles ne vous dérangent pas, une app gratuite peut suffire. Si vous voulez quelque chose de maintenu, sandboxé et qui fonctionne, les 14,99 € vous achètent exactement cela.</p>

<h2>Guide de décision rapide</h2>
<ul>
<li><strong>Vous avez besoin d'un égaliseur par application, d'effets audio et du routage d'une app vers un périphérique de sortie différent</strong> → SoundSource vaut son prix. Rien ici ne le remplace entièrement.</li>
<li><strong>Vous avez surtout besoin du volume par application, de la mise en sourdine, de l'amplification, des profils et de l'atténuation — sans pilotes</strong> → SoundDial à 14,99 € est le meilleur rapport qualité-prix.</li>
<li><strong>Vous voulez du gratuit et le risque de maintenance ne vous dérange pas</strong> → essayez d'abord Background Music, FineTune ou eqMac.</li>
</ul>

<h2>La configuration</h2>
<p>La prise en main prend environ une minute :</p>
<ul>
<li>Installez SoundDial depuis le Mac App Store — aucun téléchargement externe.</li>
<li>Accordez l'autorisation audio que macOS demande au premier lancement.</li>
<li>Faites jouer du son dans quelques apps et ouvrez l'icône de la barre des menus ; vous verrez chacune avec son propre curseur.</li>
<li>Faites glisser pour régler les niveaux, appuyez pour couper le son, ou dépassez 100 % pour amplifier.</li>
<li>Enregistrez votre configuration en tant que profil, et activez l'atténuation automatique si vous voulez que les autres apps baissent pendant les appels ou les médias.</li>
</ul>
<p>C'est tout le flux de travail — aucun fichier de configuration, aucun redémarrage, aucune extension système à valider.</p>

<h2>En résumé</h2>
<p>SoundSource est l'outil le plus puissant, mais la plupart des gens qui le cherchent veulent juste un volume par application qui se comporte bien. SoundDial offre cela pour environ le tiers du prix, se livre en toute sécurité via l'App Store et ajoute par-dessus des profils et l'atténuation automatique — sans un seul pilote à installer.</p>

<p>Prêt à contrôler le volume de chaque app indépendamment ? <a href="https://apps.apple.com/app/id6772792641">Obtenez SoundDial sur le Mac App Store</a> pour 14,99 €, une seule fois.</p>`,
  },
  "finetune-alternative-mac": {
    slug: "finetune-alternative-mac",
    title: "Alternative à FineTune pour Mac : un mixeur de volume par application maintenu",
    description: "Vous avez essayé la petite app gratuite FineTune et voulez quelque chose de maintenu et sûr via l'App Store ? Voici la meilleure alternative à FineTune pour le volume par application sur Mac.",
    date: "2026-07-23",
    readTime: "5 min de lecture",
    content: `<p>Si vous avez aimé FineTune mais voulez quelque chose d'activement maintenu et installé depuis une source de confiance, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> est la solution fiable la plus rapide. C'est un mixeur de volume par application du Mac App Store, logé dans la barre des menus, avec volume indépendant, mise en sourdine par app, amplification du volume, profils enregistrés et atténuation automatique. Validé par Apple et sandboxé, il coûte 14,99 € une seule fois, sans aucun pilote à installer.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Alternative à FineTune pour Mac : un mixeur de volume par application maintenu" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Pourquoi chercher une alternative à FineTune ?</h2>

<p>FineTune est une bonne idée : une app gratuite et open source, logée dans la barre des menus, qui vous donne un contrôle du volume par application sur macOS, ce qu'Apple refuse encore d'intégrer (Windows a un mixeur par application depuis des années). Pour beaucoup de gens, elle fait le travail de base. Mais il y a de vraies raisons pour lesquelles les utilisateurs cherchent autre chose.</p>

<ul>
<li><strong>La maintenance est incertaine.</strong> Les projets open source de loisir vivent et meurent au gré du temps libre d'un unique mainteneur. Quand macOS publie une mise à jour majeure, les apps liées à l'audio sont souvent les premières à casser, et vous vous retrouvez à attendre un correctif bénévole qui pourrait ne jamais venir.</li>
<li><strong>Un plafond de fonctions.</strong> FineTune couvre le volume par application et peu de choses de plus. Si vous voulez l'amplification au-delà de 100 %, des profils enregistrés ou l'atténuation automatique, vous devez ajouter d'autres outils.</li>
<li><strong>Confiance et mises à jour.</strong> Installer une build brute en dehors de l'App Store signifie aucune validation automatique, aucune garantie de sandbox, et des mises à jour manuelles que vous devez suivre vous-même.</li>
</ul>

<p>Rien de tout cela ne rend FineTune mauvais. Cela signifie simplement que si vous comptez sur l'audio par application chaque jour, vous voulez probablement quelque chose avec un modèle de support derrière.</p>

<h2>Ce que SoundDial fait différemment</h2>

<p>SoundDial part de la même idée de base, un mixeur dans la barre des menus avec un curseur pour chaque app en cours d'exécution, puis va plus loin avec les fonctions que les utilisateurs avancés réclament vraiment.</p>

<ul>
<li><strong>Volume indépendant par app.</strong> Baissez Spotify, gardez votre appel à plein volume, coupez entièrement l'app d'un onglet de navigateur bruyant, le tout depuis un seul menu.</li>
<li><strong>Amplification du volume par app.</strong> Poussez une app discrète au-delà de son plafond normal quand un podcast ou une vidéo a été masterisé trop bas. FineTune ne fait pas cela.</li>
<li><strong>Profils de volume.</strong> Enregistrez un mixage, « concentration », « jeu », « réunions », et basculez toute votre configuration en un clic au lieu d'ajuster cinq curseurs.</li>
<li><strong>Atténuation automatique.</strong> Baissez automatiquement l'audio d'arrière-plan quand quelque chose de plus important commence à jouer, pour que la musique s'atténue à l'arrivée d'un appel.</li>
<li><strong>Changement rapide de sortie.</strong> Basculez entre haut-parleurs, écouteurs et autres sorties sans plonger dans les Réglages Système.</li>
</ul>

<p>Parce que <a href="https://apps.apple.com/app/id6772792641">SoundDial est distribué via le Mac App Store</a>, il est validé par Apple et sandboxé, s'installe proprement et se met à jour par le même mécanisme que toutes les autres apps de l'App Store. Aucun DMG à glisser, aucun pilote audio ni extension système, et aucune alerte de sécurité vous demandant d'autoriser un composant au niveau du noyau.</p>

<h2>SoundDial vs FineTune et les autres outils gratuits</h2>

<p>FineTune n'est pas la seule option gratuite, et il est utile de voir honnêtement l'ensemble du paysage.</p>

<ul>
<li><strong>FineTune</strong> — Gratuit, open source, volume par application dans la barre des menus. Simple et léger, mais sans amplification, sans profils, sans atténuation, et la maintenance dépend de la communauté.</li>
<li><strong>Background Music</strong> — Gratuit et open source, achemine et ajuste l'audio par application. Réellement utile, mais il peut casser sur les versions récentes de macOS et lui manque l'amplification, les profils et l'atténuation.</li>
<li><strong>eqMac</strong> — Égaliseur et amplificateur système gratuit. Bien si vous voulez surtout un égaliseur, mais ce n'est pas un mixeur par application.</li>
<li><strong>SoundSource (Rogue Amoeba)</strong> — L'option professionnelle à environ 39 $, avec égaliseur par application et routage de sortie. Excellente, mais elle nécessite un téléchargement plus un pilote de capture audio, et coûte plus de deux fois plus cher.</li>
<li><strong>SoundDial</strong> — 14,99 € en une seule fois, sûr via l'App Store, sans pilotes. Ajoute amplification, profils et atténuation automatique par-dessus les bases du volume par application.</li>
</ul>

<p>Le résumé honnête : si vous voulez la chose la moins chère et n'avez besoin que d'un volume par application basique, les outils gratuits peuvent fonctionner. Si vous voulez un égaliseur et un routage par application et que payer et installer un pilote ne vous dérange pas, SoundSource est le poids lourd. SoundDial se situe dans le juste milieu, plus capable que les apps gratuites, radicalement moins cher que SoundSource, et plus sûr à installer que l'un ou l'autre parce qu'Apple le valide et le sandboxe.</p>

<h2>Passer de FineTune à SoundDial</h2>

<p>Le changement prend quelques minutes et il n'y a aucun rituel de nettoyage.</p>

<ul>
<li>Installez SoundDial depuis le Mac App Store. Aucun installateur, aucune approbation de pilote, aucun redémarrage.</li>
<li>Cliquez sur l'icône SoundDial dans votre barre des menus pour voir un curseur pour chaque app en cours d'exécution.</li>
<li>Réglez votre mixage quotidien, puis enregistrez-le en tant que profil pour pouvoir le rappeler instantanément.</li>
<li>Éventuellement, activez l'atténuation automatique pour que l'audio d'arrière-plan s'efface au profit des appels et alertes.</li>
<li>Quand vous êtes satisfait, quittez FineTune. Comme aucune des deux apps n'installe de pilotes système, il n'y a rien qui traîne à désinstaller.</li>
</ul>

<p>Vous gardez ce que vous aimiez dans FineTune, un mixeur propre dans la barre des menus qu'Apple ne vous a jamais donné, et vous gagnez l'amplification, les profils, l'atténuation et le support à long terme qu'offre une app App Store maintenue.</p>

<h2>En résumé</h2>

<p>FineTune démontre le concept : le volume par application a sa place dans la barre des menus. SoundDial, c'est à quoi ressemble ce concept avec un vrai modèle de support, plus de fonctions et la sécurité de l'App Store, pour 14,99 € en une seule fois au lieu d'un pari sur l'entretien bénévole.</p>

<p>Prêt pour un mixeur par application qui reste maintenu ? <a href="https://apps.apple.com/app/id6772792641">Obtenez SoundDial sur le Mac App Store</a> et contrôlez le volume de chaque app en quelques secondes.</p>`,
  },
  "eqmac-alternative-per-app-volume-mac": {
    slug: "eqmac-alternative-per-app-volume-mac",
    title: "Alternative à eqMac pour un vrai volume par application sur Mac",
    description: "Vous avez aimé l'amplification d'eqMac mais avez besoin d'un vrai volume par application, de la mise en sourdine et de profils ? SoundDial est la solution la plus rapide du Mac App Store — 14,99 €, sandboxé, sans pilotes.",
    date: "2026-07-23",
    readTime: "5 min de lecture",
    content: `<p>Si vous avez utilisé eqMac pour son égaliseur et son amplificateur de volume mais que vous voulez vraiment un volume indépendant pour chaque app — plus la mise en sourdine, l'amplification et des profils enregistrés — la solution fiable la plus rapide est <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>. C'est un mixeur du Mac App Store logé dans la barre des menus : réglez un niveau par app, amplifiez les plus discrètes et changez de profil instantanément. 14,99 € en une seule fois, sandboxé, sans pilotes à installer.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Alternative à eqMac pour un vrai volume par application sur Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>eqMac face à ce dont vous avez réellement besoin</h2>

<p>eqMac est un bon outil gratuit, et son égaliseur à l'échelle du système ainsi que son amplificateur de volume sont réellement utiles. Mais eqMac est construit autour d'un unique égaliseur maître et d'une unique sortie maître. Il ne vous donne pas un véritable mixeur de volume par application — la chose que Windows possède depuis des années et que macOS ne propose toujours pas nativement.</p>

<p>Donc si votre vrai problème est « Spotify est trop fort pendant que je suis en appel » ou « ce jeu me casse les oreilles mais tout le reste va bien », eqMac n'est pas de la bonne forme pour la tâche. Vous finissez par jouer avec un unique curseur maître ou à bricoler le volume interne de chaque app. C'est la lacune que comble SoundDial.</p>

<h2>Ce que SoundDial fait et qu'eqMac ne fait pas</h2>

<ul>
<li><strong>Volume indépendant par app</strong> — Musique à 40 %, un navigateur à 100 %, un appel vidéo à 70 %, tout en même temps, tout mémorisé.</li>
<li><strong>Mise en sourdine par app</strong> — coupez instantanément une app bruyante sans toucher à rien d'autre.</li>
<li><strong>Amplification par app</strong> — poussez une app discrète au-delà de son plafond normal, comme le fait l'amplificateur d'eqMac, mais ciblé sur une seule app plutôt que sur tout le système.</li>
<li><strong>Profils de volume</strong> — enregistrez des configurations comme « Concentration », « Jeu » ou « Réunion » et basculez tout le mixage en un clic.</li>
<li><strong>Atténuation automatique</strong> — baissez automatiquement l'audio d'arrière-plan quand quelque chose de plus important démarre, pour ne pas avoir à chercher un curseur en plein appel.</li>
<li><strong>Changement rapide de sortie</strong> — basculez entre haut-parleurs, écouteurs et autres sorties depuis la barre des menus.</li>
</ul>

<p>Le recoupement avec eqMac se limite en gros à l'amplification. Tout le reste — le mixeur, la mise en sourdine, les profils, l'atténuation — c'est un terrain qu'eqMac n'a jamais été conçu pour couvrir.</p>

<h2>Voulez-vous encore un égaliseur ?</h2>

<p>Soyez honnête sur le problème que vous résolvez. Si vous avez réellement besoin d'un égaliseur de fréquences — couper les basses, dompter les aigus agressifs, façonner le timbre de tout votre système — alors eqMac a encore sa place, et il est gratuit. SoundDial est un mixeur de volume, pas un égaliseur.</p>

<p>Mais la plupart des gens recourent à l'amplificateur d'eqMac non pas parce qu'ils veulent façonner des fréquences, ils veulent une app plus forte ou le mixage équilibré. Si c'est votre cas, un mixeur dédié est la réponse la plus propre. Vous pouvez même utiliser les deux : gardez eqMac pour une courbe d'égalisation à l'échelle du système et utilisez SoundDial pour les niveaux par application. Ils ne se disputent pas la même tâche.</p>

<h2>Comment il se compare aux autres outils audio Mac</h2>

<p>Puisque vous êtes déjà en quête d'outils, voici le paysage honnête :</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba)</strong> — l'option professionnelle à environ 39 $, avec égaliseur par application et routage de sortie complet. Puissant, mais il nécessite un téléchargement direct et installe un pilote de capture audio. Surdimensionné et plus cher si tout ce que vous voulez, c'est un volume par application avec des profils.</li>
<li><strong>Background Music</strong> — gratuit et open source, mais il peut casser sur les versions récentes de macOS et n'a ni amplification, ni profils, ni atténuation automatique. Excellent quand ça marche, frustrant quand ça ne marche pas.</li>
<li><strong>FineTune</strong> — une app gratuite et open source dans la barre des menus. Vaut le coup d'œil si 0 $ est l'exigence absolue, bien qu'elle soit plus légère en fonctions et en finition.</li>
<li><strong>eqMac</strong> — égaliseur gratuit plus amplificateur, mais pas de véritable mixeur par application, comme évoqué plus haut.</li>
</ul>

<p>SoundDial se situe dans le juste milieu : plus ciblé et moins cher que SoundSource, plus capable et plus fiable que les options gratuites, et il fait le travail par application qu'eqMac ne fait pas.</p>

<h2>Pourquoi le Mac App Store compte ici</h2>

<p>Plusieurs de ces outils nécessitent un téléchargement direct et un pilote audio au niveau du noyau ou de capture. Ils fonctionnent, mais ce sont le genre de choses qui peuvent buter sur une mise à jour de macOS ou trébucher sur un Mac de travail verrouillé.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> est plutôt distribué via le Mac App Store. Cela signifie qu'il est validé par Apple et sandboxé, qu'il s'installe proprement sans aucun DMG à glisser, et qu'il n'y a aucun pilote audio ni extension système à approuver. Les mises à jour arrivent via l'App Store comme pour toute autre app, et la désinstallation est une suppression normale. Pour un utilitaire de la barre des menus qui touche à votre audio, ce chemin à moindre friction et moindre risque vaut beaucoup.</p>

<h2>La configuration rapide</h2>

<ul>
<li>Installez SoundDial depuis le Mac App Store — aucun redémarrage, aucune alerte de pilote.</li>
<li>Ouvrez l'icône de la barre des menus ; chaque app produisant du son apparaît avec son propre curseur.</li>
<li>Réglez les niveaux, coupez ce dont vous n'avez pas besoin et amplifiez tout ce qui est trop discret.</li>
<li>Enregistrez l'arrangement en tant que profil, puis créez-en d'autres pour le jeu, les appels ou la concentration.</li>
<li>Activez l'atténuation automatique pour que l'audio d'arrière-plan s'efface automatiquement.</li>
</ul>

<p>C'est toute la boucle. En quelques minutes, vous avez le contrôle par application que l'amplificateur d'eqMac ne faisait qu'esquisser.</p>

<p><strong>Prêt pour un vrai volume par application sur votre Mac ?</strong> <a href="https://apps.apple.com/app/id6772792641">Obtenez SoundDial sur le Mac App Store</a> — 14,99 € en une seule fois, sandboxé, sans pilotes, et il fait exactement ce qu'un mixeur de barre des menus devrait faire.</p>`,
  },
  "cheapest-volume-mixer-mac-2026": {
    slug: "cheapest-volume-mixer-mac-2026",
    title: "Le meilleur mixeur de volume abordable pour Mac en 2026",
    description: "À la recherche du meilleur mixeur de volume par application abordable pour Mac en 2026 ? Comparez SoundDial, SoundSource, Background Music, FineTune et eqMac sur le prix, la sécurité et les fonctions.",
    date: "2026-07-23",
    readTime: "6 min de lecture",
    content: `<p>Le meilleur rapport qualité-prix parmi les mixeurs de volume par application pour Mac en 2026 est <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, une app de la barre des menus sur le Mac App Store à 14,99 € en une seule fois. Il donne à chaque app son propre curseur de volume, plus la mise en sourdine, l'amplification, les profils et l'atténuation automatique — sans pilotes, sans abonnement et sans téléchargements risqués. C'est l'option payante la moins chère qui fonctionne réellement de façon fiable.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Le meilleur mixeur de volume abordable pour Mac en 2026" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Pourquoi « le moins cher » a besoin d'une définition</h2>
<p>Il existe des outils de volume gratuits pour Mac, donc si le seul objectif est de ne rien dépenser, vous avez des options. Mais le gratuit vous coûte généralement ailleurs : fragilité sur les nouvelles versions de macOS, absence de fonctions comme l'amplification ou les profils, ou un processus d'installation impliquant un pilote de capture audio auquel vous devez vous fier. « Le meilleur abordable » désigne le prix le plus bas qui vous procure quand même un mixeur stable et complet que vous continuerez d'utiliser. C'est le prisme que nous adopterons ici.</p>

<h2>D'abord, ce que macOS ne fait pas</h2>
<p>Windows a un mixeur de volume par application depuis des années — clic droit sur l'icône du haut-parleur et réglez chaque app indépendamment. macOS n'a toujours rien d'équivalent d'intégré. Vous avez un unique volume maître et le curseur interne qu'une app intègre éventuellement (Musique, certains navigateurs). Il n'y a aucun moyen à l'échelle du système de rendre Slack plus discret que Spotify, ou d'amplifier un appel vidéo faible au-dessus de tout le reste. Chaque option ci-dessous existe pour combler cette lacune.</p>

<h2>Les concurrents, chiffrés honnêtement</h2>

<h2>SoundDial — 14,99 €, une seule fois</h2>
<p>SoundDial vit dans votre barre des menus et donne à chaque app en cours d'exécution un curseur de volume indépendant. Au-delà des bases, il ajoute les fonctions que les gens utilisent vraiment :</p>
<ul>
<li><strong>Amplification par app</strong> — poussez une app trop discrète au-delà de 100 % au lieu de tendre l'oreille.</li>
<li><strong>Mise en sourdine par app</strong> — coupez une app sans toucher au reste.</li>
<li><strong>Profils de volume</strong> — enregistrez un mixage « appel de travail » ou « soirée cinéma » et rappelez-le instantanément.</li>
<li><strong>Atténuation automatique</strong> — baissez automatiquement l'audio d'arrière-plan quand quelque chose de plus important joue.</li>
<li><strong>Changement rapide de sortie</strong> — basculez entre haut-parleurs, écouteurs et autres appareils depuis le même menu.</li>
</ul>
<p>Parce qu'il est sur le Mac App Store, il est sandboxé, validé par Apple et s'installe proprement — aucun DMG, aucune extension noyau, aucun pilote audio à approuver. Vous payez <a href="https://apps.apple.com/app/id6772792641">14,99 € une fois</a> et il est à vous. Pour la plupart des gens, c'est le juste milieu : assez bon marché pour dire oui facilement, assez complet pour ne pas le dépasser.</p>

<h2>SoundSource — ~39 $, l'option professionnelle</h2>
<p>SoundSource de Rogue Amoeba est la référence pour les utilisateurs avancés. Il fait le volume et la mise en sourdine par application comme SoundDial, mais va plus loin avec des égaliseurs par application et un routage de sortie complet (envoyer une app vers les écouteurs, une autre vers les haut-parleurs). Il est réellement excellent — mais il coûte environ 39 $, et il s'installe en dehors de l'App Store avec un composant de capture audio auquel vous devez accorder une autorisation. Si vous avez besoin d'un égaliseur par application ou d'un routage complexe, il vaut son prix. Si vous voulez juste un mixeur propre et bon marché, vous payez pour des capacités que vous ne toucherez peut-être jamais.</p>

<h2>Background Music — gratuit, open source</h2>
<p>Background Music est une app gratuite et open source bien connue qui propose le volume par application et la mise en pause automatique. Le hic : elle s'accroche profondément à Core Audio via un pilote virtuel, et elle a une longue histoire de pannes sur les nouvelles versions de macOS, nécessitant parfois des correctifs manuels ou une réinstallation après les mises à jour. Il lui manque aussi l'amplification, les profils enregistrés et l'atténuation automatique. Idéale pour les bricoleurs que la maintenance ne dérange pas ; frustrante si vous voulez juste que ça marche.</p>

<h2>FineTune — gratuit, barre des menus</h2>
<p>FineTune est une app de volume gratuite et open source dans la barre des menus. Elle est légère et agréable, et pour un simple ajustement par application, elle peut suffire. Mais en tant que petit projet gratuit, elle n'a pas la même profondeur de fonctions — pas de profils, pas d'atténuation automatique, et la gestion de l'amplification/sortie est limitée. Coût nul, moins de garanties de longévité et de support.</p>

<h2>eqMac — gratuit, égaliseur + amplificateur</h2>
<p>eqMac est un égaliseur gratuit à l'échelle du système avec un amplificateur de volume. Il s'agit davantage de façonner le timbre et le volume sur tout votre Mac que de mixer des apps individuelles : c'est donc un outil différent pour une tâche différente. Si vous voulez spécifiquement un contrôle par application, eqMac n'est pas vraiment la réponse, même si c'est un bon égaliseur gratuit.</p>

<h2>Prix vs valeur : le tableau honnête</h2>
<ul>
<li><strong>Vraiment gratuit, mais avec des compromis :</strong> Background Music (fragile, basé sur un pilote), FineTune (fonctions limitées), eqMac (égaliseur, pas un mixeur).</li>
<li><strong>L'app payante complète la moins chère :</strong> SoundDial à 14,99 € — amplification, profils, atténuation, sécurité de l'App Store.</li>
<li><strong>Premium/professionnel :</strong> SoundSource à ~39 $ — égaliseur et routage, installation hors App Store.</li>
</ul>
<p>Autrement dit : SoundDial coûte environ le tiers de SoundSource tout en couvrant les fonctions que 90 % des gens veulent réellement. Et contrairement aux options gratuites, il ne cassera pas silencieusement après une mise à jour de macOS, car il ne dépend pas d'un pilote audio fragile au niveau système.</p>

<h2>Lequel devriez-vous choisir ?</h2>
<p>Si vous êtes un professionnel qui a besoin d'un égaliseur par application et de router des apps vers différentes sorties, achetez SoundSource — il justifie son prix. Si vous adorez l'open source et que les pannes occasionnelles ne vous dérangent pas, essayez Background Music ou FineTune gratuitement. Mais si vous voulez l'option la moins chère qui marche tout simplement — volume indépendant, amplification, mise en sourdine, profils enregistrables et atténuation automatique, installée en toute sécurité depuis l'App Store — SoundDial est le gagnant en rapport qualité-prix en 2026.</p>

<blockquote>Le meilleur mixeur n'est pas celui qui a le plus de fonctions ou le prix le plus bas — c'est celui que vous configurez une fois et que vous oubliez. À 14,99 €, SoundDial fait de ce choix une évidence.</blockquote>

<p>Prêt à donner à chaque app son propre volume ? <a href="https://apps.apple.com/app/id6772792641">Obtenez SoundDial sur le Mac App Store</a> pour 14,99 € en une seule fois — sans abonnement, sans pilotes, sans risque.</p>`,
  },
  "windows-volume-mixer-for-mac": {
    slug: "windows-volume-mixer-for-mac",
    title: "Le mixeur de volume Windows pour Mac : obtenez le contrôle du volume par application",
    description: "Le mixeur de volume de Windows vous manque sur votre Mac ? macOS n'a pas de contrôle du volume par application intégré. Voici le moyen le plus rapide de l'obtenir : SoundDial, un mixeur de la barre des menus à 14,99 €.",
    date: "2026-07-23",
    readTime: "5 min de lecture",
    content: `<p>macOS n'a pas de mixeur de volume intégré comme Windows, vous ne pouvez donc pas régler le volume par application depuis les Réglages Système. La solution fiable la plus rapide est <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, une app de la barre des menus à 14,99 € du Mac App Store. Il donne à chaque app son propre curseur de volume, sa mise en sourdine et son amplification — sans pilotes, sans DMG, sans installations risquées.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Le mixeur de volume Windows pour Mac : obtenez le contrôle du volume par application" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Pourquoi le mixeur de volume de Windows n'a pas d'équivalent Mac</h2>

<p>Si vous êtes passé de Windows, l'une des premières choses qui vous manqueront est le mixeur de volume : clic droit sur l'icône du haut-parleur, et chaque app en cours obtient son propre curseur. Baissez Chrome, gardez Discord fort, coupez Spotify — le tout au même endroit.</p>

<p>macOS ne propose tout simplement pas cela. Le contrôle du volume d'Apple est un unique curseur à l'échelle du système. Quel que soit le niveau que vous réglez, il s'applique à tout à la fois. Il n'y a pas d'option par application cachée dans les Réglages Système, pas de commande Terminal, pas de bascule d'accessibilité. C'est une véritable lacune, et c'est ainsi depuis des années.</p>

<p>La raison est architecturale : les apps acheminent l'audio via Core Audio vers votre périphérique de sortie, et l'OS n'expose pas de mixeur destiné à l'utilisateur pour les flux individuels. Pour recréer l'expérience Windows, il vous faut une app tierce qui s'insère dans ce chemin audio et vous donne les contrôles qu'Apple a laissés de côté.</p>

<h2>La correspondance la plus proche : SoundDial</h2>

<p>SoundDial est un mixeur de volume par application dans la barre des menus, conçu spécifiquement pour cela. Cliquez sur son icône et vous obtenez une liste claire de tout ce qui joue de l'audio, chacun avec son propre curseur. C'est le « mixeur de volume Windows pour Mac » le plus direct que vous puissiez installer, et il fait quelques choses que le mixeur Windows n'a jamais pu faire :</p>

<ul>
<li><strong>Volume indépendant par app</strong> — la fonction principale. Réglez Chrome à 40 %, Zoom à 100 %, la musique à 20 %.</li>
<li><strong>Mise en sourdine par app</strong> — coupez une app sans toucher au reste.</li>
<li><strong>Amplification du volume par app</strong> — poussez une app discrète <em>au-delà</em> de 100 % quand son propre audio est trop faible.</li>
<li><strong>Profils de volume</strong> — enregistrez un mixage (par ex. « appel de travail » ou « jeu ») et rappelez-le instantanément au lieu de refaire glisser les curseurs.</li>
<li><strong>Atténuation automatique</strong> — baissez automatiquement l'audio d'arrière-plan quand quelque chose de plus important démarre, comme un appel.</li>
<li><strong>Changement rapide de sortie</strong> — basculez entre haut-parleurs, écouteurs et autres appareils depuis le même menu.</li>
</ul>

<p>Parce qu'il est sur le <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a>, il est validé par Apple et sandboxé. Il s'installe proprement en un clic — aucun DMG à glisser, aucun pilote audio ni extension système à approuver, aucune alerte de sécurité. À 14,99 € en une seule fois (sans abonnement), c'est le moyen le plus simple de combler la lacune.</p>

<h2>Comment configurer le volume par application sur votre Mac</h2>

<ol>
<li>Installez SoundDial depuis le Mac App Store.</li>
<li>Accordez l'autorisation audio unique qu'il demande au premier lancement.</li>
<li>Cliquez sur l'icône SoundDial dans votre barre des menus.</li>
<li>Faites glisser le curseur à côté de n'importe quelle app pour régler son volume, ou appuyez sur sourdine/amplification.</li>
<li>Éventuellement, enregistrez le mixage actuel en tant que profil pour pouvoir le restaurer plus tard.</li>
</ol>

<p>C'est tout le flux de travail. Il se comporte comme le mixeur Windows que vous connaissez déjà, simplement depuis la barre des menus au lieu d'un clic droit sur la barre des tâches.</p>

<h2>Comment SoundDial se compare aux autres options</h2>

<p>SoundDial n'est pas le seul outil dans ce domaine, voici donc un regard honnête sur les alternatives.</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba)</strong> — environ 39 $, et réellement professionnel : égaliseur par application, routage de sortie par app, effets. Mais il nécessite un téléchargement direct plus un pilote de capture audio, et il est surdimensionné (et plus cher) si vous voulez juste le volume par application. Choisissez-le si vous avez besoin d'égaliseur et de routage ; choisissez SoundDial si vous voulez le mixeur sans la complexité ni le pilote.</li>
<li><strong>Background Music</strong> — gratuit et open source, ce qui est bien. Le hic : il peut casser sur les versions récentes de macOS, et il lui manque l'amplification, les profils enregistrés et l'atténuation automatique. Bien si vous êtes à l'aise pour dépanner des pilotes audio open source ; moins idéal si vous voulez quelque chose qui marche tout simplement.</li>
<li><strong>FineTune</strong> — une app gratuite et open source dans la barre des menus. Légère et à considérer si le budget est la priorité, mais vous échangez finition, profils et sécurité de l'App Store contre la gratuité.</li>
<li><strong>eqMac</strong> — un égaliseur et amplificateur système gratuit. C'est avant tout un égaliseur, pas un mixeur par application, il résout donc un problème différent.</li>
</ul>

<p>Le compromis est simple. Les outils gratuits ne coûtent rien mais peuvent être fragiles ou pauvres en fonctions. SoundSource est puissant mais cher et basé sur un pilote. SoundDial se situe dans le juste milieu : 14,99 € en une seule fois, la sécurité et le sandbox de l'App Store, et les profils + l'atténuation automatique que les options gratuites laissent de côté.</p>

<blockquote>Si tout ce que vous voulez, c'est l'expérience du mixeur de volume Windows — curseurs par application, mise en sourdine et amplification, installée en toute sécurité en quelques secondes — SoundDial est la correspondance la plus directe.</blockquote>

<h2>En résumé</h2>

<p>macOS ne vous donnera pas de mixeur de volume, et ne le fera probablement jamais. Mais vous n'avez pas à vous contenter d'un unique curseur à l'échelle du système. Un mixeur dédié dans la barre des menus restaure le contrôle par application que vous aviez sur Windows, et ajoute par-dessus l'amplification, les profils et l'atténuation automatique.</p>

<p>Prêt à obtenir le volume par application en toute simplicité ? <a href="https://apps.apple.com/app/id6772792641">Obtenez SoundDial sur le Mac App Store</a> pour 14,99 € — une seule fois, sandboxé, et s'installe en quelques secondes.</p>`,
  },
  "app-volume-like-windows-on-mac": {
    slug: "app-volume-like-windows-on-mac",
    title: "Réglez le volume par application comme sous Windows — sur votre Mac",
    description: "Windows a un mixeur de volume par application, mais pas macOS. Voici comment régler un volume indépendant pour chaque app sur votre Mac — rapidement, en toute sécurité et sans pilotes.",
    date: "2026-07-23",
    readTime: "5 min de lecture",
    content: `<p>macOS n'a pas de mixeur de volume par application intégré comme celui de Windows, la solution fiable la plus rapide est donc <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, une app de la barre des menus du Mac App Store qui donne à chaque app son propre curseur de volume, sa mise en sourdine par app et son amplification du volume. Il est sandboxé, validé par Apple, s'installe sans pilotes et coûte 14,99 € une seule fois.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Réglez le volume par application comme sous Windows — sur votre Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Pourquoi Windows peut le faire et pas macOS</h2>
<p>Si vous avez utilisé Windows, vous connaissez la routine : clic droit sur l'icône du haut-parleur, ouvrez le mixeur de volume et faites glisser un curseur distinct pour Chrome, Spotify, Discord et tout ce qui fait du bruit. C'est simple et ça marche tout simplement.</p>
<p>macOS n'a jamais livré d'équivalent. Les contrôles audio d'Apple sont globaux — un unique volume maître pour tout le système. Vous pouvez couper une app en coupant la source à l'intérieur de cette app (si tant est qu'elle ait un contrôle), mais il n'y a aucun endroit unifié pour dire « garde ma musique à 40 % pendant que ma réunion reste à 100 % ». Cette lacune est exactement la raison d'être des mixeurs tiers.</p>

<h2>La solution la plus rapide : un mixeur dans la barre des menus</h2>
<p>La correspondance la plus proche de l'expérience Windows est une app de la barre des menus qui liste vos apps audio en cours et donne à chacune un curseur. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> fait précisément cela. Cliquez sur son icône dans la barre des menus et vous obtenez :</p>
<ul>
<li><strong>Volume indépendant pour chaque app</strong> — baissez Spotify sans toucher à votre appel.</li>
<li><strong>Mise en sourdine par app</strong> — coupez instantanément une app bruyante, laissez le reste jouer.</li>
<li><strong>Amplification du volume par app</strong> — poussez une app trop discrète <em>au-delà</em> de 100 % quand son propre maximum est encore trop faible.</li>
<li><strong>Profils de volume</strong> — enregistrez un mixage « Travail » ou « Jeu » et rappelez-le en un clic.</li>
<li><strong>Atténuation automatique</strong> — baissez automatiquement l'audio d'arrière-plan quand quelque chose de plus important démarre.</li>
<li><strong>Changement rapide de sortie</strong> — basculez entre haut-parleurs, écouteurs et autres sorties depuis le même menu.</li>
</ul>
<p>Parce qu'il est sur le Mac App Store, il est sandboxé et validé par Apple, il s'installe proprement, et il n'y a aucun DMG à glisser, aucune extension noyau, aucun pilote audio à approuver dans les Réglages Système. Ce dernier point compte plus qu'il n'y paraît — les outils basés sur un pilote sont ceux qui ont tendance à casser après les mises à jour de macOS.</p>

<h2>Comment le configurer (environ deux minutes)</h2>
<ul>
<li><strong>1.</strong> Installez SoundDial depuis le Mac App Store et lancez-le.</li>
<li><strong>2.</strong> Accordez l'autorisation audio que macOS demande — c'est ce qui permet à l'app de voir les flux par application.</li>
<li><strong>3.</strong> Cliquez sur l'icône SoundDial dans votre barre des menus. Chaque app jouant actuellement de l'audio apparaît avec son propre curseur.</li>
<li><strong>4.</strong> Faites glisser le curseur d'une app pour régler son niveau, ou coupez-la. Amplifiez au-delà de 100 % quand une app est trop discrète.</li>
<li><strong>5.</strong> (Facultatif) Enregistrez votre mixage actuel en tant que profil pour pouvoir le restaurer plus tard, et activez l'atténuation automatique si vous voulez que l'audio d'arrière-plan baisse automatiquement.</li>
</ul>
<p>C'est tout le flux de travail. Il se comporte comme le mixeur de volume Windows que vous connaissez déjà, sans la friction de configuration.</p>

<h2>Qu'en est-il des alternatives gratuites et professionnelles ?</h2>
<p>Il existe d'autres moyens d'obtenir le volume par application sur un Mac. Ils valent la peine d'être connus pour que vous puissiez choisir honnêtement.</p>
<blockquote>Les outils gratuits échangent de l'argent contre de la fiabilité et des fonctions ; les outils professionnels échangent de l'argent et de la configuration contre une profondeur dont vous n'avez peut-être pas besoin.</blockquote>
<p><strong>Background Music</strong> est gratuit et open source, et il fournit bien un volume par application. Le hic : il s'accroche profondément au système audio et a un historique de pannes sur les versions récentes de macOS, et il lui manque l'amplification, les profils et l'atténuation automatique. Si ça marche sur votre configuration, tant mieux — mais c'est un pari au fil des mises à niveau.</p>
<p><strong>FineTune</strong> est une app gratuite et open source dans la barre des menus, dans le même esprit que SoundDial. C'est un bon point de départ si le budget est la seule préoccupation, bien que ce soit un projet communautaire sans la finition des profils et de l'atténuation.</p>
<p><strong>eqMac</strong> est un égaliseur et amplificateur gratuit à l'échelle du système. Il est excellent pour façonner le son global, mais ce n'est pas un véritable mixeur par application — vous ajustez toute la sortie, pas les apps individuelles.</p>
<p><strong>SoundSource</strong> de Rogue Amoeba (environ 39 $) est l'option professionnelle : égaliseur par application, routage de sortie par app et sérieuses fonctions d'ingénieur du son. Il est excellent — mais il nécessite un téléchargement direct et installe un composant de capture audio, et il coûte plus du double de SoundDial. Si vous voulez un routage et un égaliseur de niveau studio, c'est le choix. Si vous voulez juste le mixeur à la Windows, c'est surdimensionné.</p>

<h2>Lequel devriez-vous obtenir ?</h2>
<p>Si votre objectif est de « faire fonctionner mon Mac comme le mixeur de volume Windows » sans téléchargements, pilotes ni risque, SoundDial est la réponse la plus propre. Vous obtenez le volume par application, la mise en sourdine, l'amplification, les profils et l'atténuation automatique, le tout sûr via l'App Store, pour 14,99 € en une seule fois — sans abonnement. Choisissez plutôt SoundSource uniquement si vous avez spécifiquement besoin d'un égaliseur par application et d'un routage de sortie, et essayez les options gratuites si vous êtes à l'aise pour les dépanner au fil des mises à jour de macOS.</p>

<p><strong>Prêt à donner à chaque app son propre volume ?</strong> <a href="https://apps.apple.com/app/id6772792641">Obtenez SoundDial sur le Mac App Store</a> et configurez votre premier mixage en environ deux minutes.</p>`,
  },
  "make-mac-louder-for-hard-of-hearing": {
    slug: "make-mac-louder-for-hard-of-hearing",
    title: "Comment rendre votre Mac plus fort pour l'écoute des malentendants",
    description: "Vous peinez à entendre votre Mac même à volume maximal ? Découvrez comment amplifier et clarifier l'audio par application pour l'écoute des malentendants, avec SoundDial et des astuces intégrées.",
    date: "2026-07-23",
    readTime: "6 min de lecture",
    content: `<p>Si votre Mac n'est pas assez fort même à volume maximal, la solution fiable la plus rapide est <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, un mixeur de la barre des menus du Mac App Store qui vous permet d'amplifier une seule app au-delà de 100 % et de couper tout le reste. Cela signifie une parole plus forte et plus claire depuis FaceTime, une vidéo ou un lecteur de films sans pousser tout votre système. Il coûte 14,99 €, en une seule fois.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Comment rendre votre Mac plus fort pour l'écoute des malentendants" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Pourquoi pousser le curseur de volume au maximum ne suffit toujours pas</h2>
<p>Pour les auditeurs malentendants, le curseur de volume de macOS a deux limites frustrantes. D'abord, il plafonne à 100 % de ce que l'app elle-même produit. Si un podcast, une vidéo ou un appel a été enregistré faiblement, le « volume maximal » reste trop faible. Ensuite, macOS n'a pas de mixeur de volume par application intégré. Windows en a un depuis des années, mais sur un Mac chaque app partage un unique niveau maître. Donc quand vous montez tout pour entendre une voix douce, la musique d'arrière-plan et les sons de notification deviennent eux aussi inconfortablement forts.</p>
<p>Ce dont vous avez réellement besoin, c'est de pouvoir rendre <em>une</em> app plus forte que le reste, la pousser au-delà de son plafond normal et couper les sons concurrents pour que la parole se détache. C'est exactement la lacune que ces outils comblent.</p>

<h2>D'abord, utilisez les réglages d'accessibilité gratuits de macOS</h2>
<p>Avant d'ajouter la moindre app, il vaut la peine de configurer ce que macOS propose déjà. Ils aident à la clarté, même s'ils n'ajoutent pas de volume brut :</p>
<ul>
<li><strong>Audio mono :</strong> Réglages Système &rarr; Accessibilité &rarr; Audio, activez « Lire l'audio stéréo en mono ». Si votre audition est meilleure d'une oreille, cela envoie le signal complet aux deux, pour ne pas perdre la moitié des dialogues.</li>
<li><strong>Ajustement de la balance :</strong> Dans Réglages Système &rarr; Son, faites glisser la balance gauche/droite vers votre meilleure oreille.</li>
<li><strong>Réduire les sons d'arrière-plan :</strong> Baissez la musique et l'ambiance dans les apps qui le permettent, pour que les voix ne se battent pas contre une bande-son.</li>
<li><strong>Réglages pour écouteurs :</strong> Si vous utilisez des AirPods ou des Beats, Réglages Système &rarr; Accessibilité &rarr; Audio &rarr; Réglages du casque peut amplifier les sons faibles et affiner pour la parole.</li>
</ul>
<p>Ils sont réellement utiles et ne coûtent rien. Mais aucun d'eux ne rend une seule app discrète <em>plus forte que 100 %</em>, et c'est généralement le vrai problème.</p>

<h2>Comment amplifier une app au-delà de 100 % avec SoundDial</h2>
<p>SoundDial vit dans votre barre des menus et affiche un curseur pour chaque app jouant actuellement du son. Voici le flux de travail le plus utile pour l'écoute des malentendants :</p>
<ul>
<li><strong>Amplifiez l'app que vous écoutez.</strong> Faites glisser son curseur au-delà de 100 % pour amplifier un appel vidéo ou un podcast discret au-delà de ce que l'app autorise d'elle-même.</li>
<li><strong>Coupez ou baissez tout le reste.</strong> Baissez la musique, les onglets de navigateur ou les sons de notification pour que rien ne concurrence la voix que vous essayez de suivre.</li>
<li><strong>Activez l'atténuation automatique.</strong> Quand vous commencez à parler lors d'un appel, SoundDial baisse automatiquement l'autre audio pour que votre interlocuteur passe clairement, puis le restaure ensuite.</li>
<li><strong>Enregistrez un profil de volume.</strong> Créez un profil « appels vidéo » où votre app de visioconférence est amplifiée et tout le reste est discret, puis basculez-y instantanément au lieu de tout réajuster à chaque fois.</li>
<li><strong>Changez rapidement de sortie.</strong> Basculez entre haut-parleurs, un casque ou un appareil connecté à une aide auditive depuis le même menu, sans fouiller dans les Réglages Système.</li>
</ul>
<p>La fonction d'amplification est la clé ici. Parce qu'elle élève la sortie de l'app au-delà de son maximum natif, un enregistrement à peine audible devient quelque chose que vous pouvez réellement entendre, tandis que le reste de votre système reste à un niveau confortable.</p>

<h2>Un mot rapide sur la distorsion</h2>
<p>Toute amplification logicielle amplifie ce qui se trouve dans le signal, donc pousser bien au-delà de 100 % sur un audio déjà fort peut introduire de l'écrêtage. En pratique, amplifier un contenu <em>discret</em> jusqu'à un niveau confortable et intelligible sonne proprement. Commencez modestement, montez jusqu'à ce que la parole soit claire, et redescendez si ça commence à sonner dur. Protéger votre audition résiduelle compte, alors visez la clarté plutôt que le volume maximal.</p>

<h2>Comment SoundDial se compare aux alternatives</h2>
<p>Vous avez quelques options, et l'honnêteté vous aide à choisir la bonne :</p>
<ul>
<li><strong>SoundSource (Rogue Amoeba, ~39 $) :</strong> Réellement professionnel, avec égaliseur par application et routage de sortie. Si vous voulez sculpter les fréquences pour une perte auditive, il est puissant. Mais il coûte plus du double, nécessite un téléchargement direct et installe un pilote de capture audio. C'est plus de configuration et d'accès système que beaucoup de gens ne le souhaitent.</li>
<li><strong>Background Music (gratuit, open source) :</strong> Offre le volume par application gratuitement, mais il lui manque l'amplification, les profils et l'atténuation automatique, et il peut casser sur les versions récentes de macOS puisqu'il s'accroche profondément au système audio.</li>
<li><strong>FineTune (gratuit, open source) :</strong> Une app de volume légère dans la barre des menus. Bien pour les bases, mais sans l'amplification, les profils et l'atténuation sur lesquels s'appuient les auditeurs malentendants.</li>
<li><strong>eqMac (gratuit) :</strong> Un égaliseur avec un amplificateur. Utile pour façonner le son, mais il est construit autour de l'égalisation plutôt que d'un mixage par application propre et de profils.</li>
</ul>
<p>Là où <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> se démarque, c'est l'équilibre entre prix, sécurité et les fonctions spécifiques qui comptent ici. Parce qu'il est sur le Mac App Store, il est validé par Apple et sandboxé, s'installe proprement sans DMG et ne nécessite aucun pilote audio ni extension système. Vous obtenez l'amplification par application, la mise en sourdine, les profils de volume et l'atténuation automatique dans un unique achat de 14,99 € en une seule fois, sans rien qui s'enfonce dans la pile audio de macOS.</p>

<h2>En résumé</h2>
<p>Configurez d'abord les options d'accessibilité gratuites de macOS, elles valent la peine d'être activées. Mais si le vrai problème est qu'une app est tout simplement trop discrète, vous avez besoin d'un outil capable de pousser une seule app au-delà de 100 % et de baisser le reste. C'est tout l'intérêt d'une amplification par application, et macOS ne le fait pas de lui-même.</p>

<p>Prêt à enfin entendre votre Mac ? <a href="https://apps.apple.com/app/id6772792641">Obtenez SoundDial sur le Mac App Store</a> pour 14,99 €, amplifiez l'app dont vous avez besoin, et laissez l'atténuation automatique et les profils garder la parole claire.</p>`,
  },
  "boost-quiet-apps-mac": {
    slug: "boost-quiet-apps-mac",
    title: "Comment amplifier une app trop discrète sur Mac (au-delà du volume maximal)",
    description: "Une app trop discrète même à 100 % ? Amplifiez uniquement cette app au-delà de son maximum sur Mac avec SoundDial, un mixeur de volume par application. Voici la solution la plus rapide, plus des alternatives.",
    date: "2026-07-23",
    readTime: "6 min de lecture",
    content: `<p>Si une app est trop discrète même à volume maximal, la solution fiable la plus rapide est <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, un mixeur de volume par application dans la barre des menus pour macOS. Il donne à chaque app son propre curseur plus une <strong>amplification</strong> du volume qui pousse une seule app au-delà de 100 %, pour qu'un appel vidéo ou un onglet de navigateur à peine audible devienne plus fort sans toucher à votre volume système. C'est une app à 14,99 € en une seule fois sur le Mac App Store.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Comment amplifier une app trop discrète sur Mac (au-delà du volume maximal)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Pourquoi une app est discrète même à 100 %</h2>
<p>macOS n'a qu'un unique volume maître. Quand vous le montez, tout devient plus fort ensemble. Mais chaque app produit aussi du son à son propre niveau interne, et ce niveau varie énormément. Un extrait YouTube masterisé faiblement, un appelant Zoom avec un mauvais micro, un jeu au mixage de dialogues bas ou un onglet de navigateur avec un flux discret peuvent tous se situer bien en dessous de tout le reste, même avec votre Mac à fond.</p>
<p>Le vrai problème : macOS n'a <strong>aucun mixeur de volume par application intégré</strong>. Windows en a un depuis des années (le mixeur de volume, clic droit sur l'icône du haut-parleur). Sur un Mac, il n'y a aucun moyen natif de monter une app tout en laissant le reste tranquille, et certainement aucun moyen d'amplifier une seule app <em>au-delà</em> de son maximum normal. C'est la lacune que vous rencontrez.</p>

<h2>La solution la plus rapide : amplifier juste cette app</h2>
<p>Un mixeur par application résout cela en s'insérant entre vos apps et votre sortie, de sorte qu'il peut monter ou baisser chaque flux indépendamment, et amplifier une seule au-delà de 100 %. Avec <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, le déroulé est court :</p>
<ul>
<li>Installez depuis le Mac App Store et ouvrez-le. Il vit dans votre barre des menus, pas dans une fenêtre flottante.</li>
<li>Cliquez sur l'icône de la barre des menus pour voir un curseur pour chaque app jouant actuellement de l'audio.</li>
<li>Trouvez l'app discrète et faites glisser son curseur au-delà de 100 % pour appliquer l'amplification. Elle amplifie cette app uniquement.</li>
<li>Laissez tout le reste tel quel. Votre volume système et vos autres apps restent intacts.</li>
</ul>
<p>Parce que l'amplification est par application, vous pouvez pousser un appel vidéo discret à un niveau confortable tout en empêchant la musique ou les notifications de devenir assourdissantes. C'est la chose principale que les contrôles intégrés de macOS ne peuvent tout simplement pas faire.</p>

<h2>Une note sur l'amplification et l'écrêtage</h2>
<p>L'amplification est réellement utile, mais c'est de l'amplification, pas de la magie. Si l'audio d'origine d'une app est très discret ou déjà distordu, le pousser fort peut introduire de l'écrêtage ou rendre le souffle d'arrière-plan plus évident. En pratique, une amplification modérée corrige proprement la grande majorité des situations « cet appel est trop discret ». Montez-la jusqu'à ce que l'app soit confortable plutôt que de la coller au plafond, et vous garderez un son propre.</p>

<h2>Au-delà de l'amplification : quoi d'autre aide</h2>
<p>Une fois que vous avez le contrôle par application, quelques fonctions font disparaître le problème d'app discrète pour de bon :</p>
<ul>
<li><strong>Profils de volume</strong> — enregistrez une configuration (par ex. « amplifier Zoom, baisser Spotify, couper Slack ») et rappelez-la en un clic au lieu de refaire glisser les curseurs à chaque réunion.</li>
<li><strong>Atténuation automatique</strong> — baissez automatiquement les autres apps quand une app choisie joue, pour qu'un appel amplifié soit entendu clairement par-dessus l'audio d'arrière-plan.</li>
<li><strong>Mise en sourdine par app</strong> — coupez une app bruyante sans mettre en pause quoi que ce soit d'autre.</li>
<li><strong>Changement rapide de sortie</strong> — basculez entre haut-parleurs, écouteurs ou une interface externe depuis le même menu.</li>
</ul>

<h2>Qu'en est-il des alternatives gratuites et professionnelles ?</h2>
<p>Vous avez des options, et l'honnêteté compte ici, voici donc le vrai paysage.</p>
<p><strong>SoundSource</strong> (Rogue Amoeba) est le choix professionnel à environ 39 $. Il fait le volume par application plus l'égaliseur par application et le routage de sortie complet, plus de puissance que la plupart des gens n'en ont besoin. Les compromis : il coûte plus du double, c'est un téléchargement direct plutôt que l'App Store, et il installe un pilote de capture audio pour faire son travail. Si vous voulez la trousse à outils d'un ingénieur du son, il est excellent. Si vous voulez juste une app plus forte, il est surdimensionné.</p>
<p><strong>Background Music</strong> est gratuit et open source, et il peut faire un volume par application basique. Mais c'est un projet communautaire qui a un historique de pannes sur les versions récentes de macOS, et il lui manque l'amplification au-delà de 100 %, les profils et l'atténuation automatique. Bien si le gratuit est la seule exigence et que les pannes occasionnelles ne vous dérangent pas.</p>
<p><strong>FineTune</strong> est une app gratuite et open source dans la barre des menus, et <strong>eqMac</strong> est un égaliseur et amplificateur système gratuit. Les deux valent la peine d'être essayés si votre budget est nul. Sachez simplement qu'ils sont maintenus par la communauté, axés sur l'égalisation ou plus légers en gestion par application, et qu'ils ne regroupent pas profils et atténuation dans un package soigné.</p>
<p>Là où se situe <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> : c'est la voie intermédiaire. Moins cher que SoundSource, plus capable et plus fiable que les outils gratuits, et il est sur le <strong>Mac App Store</strong>, ce qui signifie validé par Apple, sandboxé, et il s'installe proprement <strong>sans DMG et sans pilotes ni extensions audio</strong> à greffer sur votre système. Pour la plupart des gens, la recommandation honnête est simple : si vous voulez la solution la moins pénible qui vous donne aussi l'amplification, les profils et l'atténuation automatique, c'est le meilleur rapport qualité-prix à 14,99 € en une seule fois.</p>

<h2>Réponse rapide, reformulée</h2>
<blockquote>Pour rendre une app Mac plus forte que son maximum, utilisez un mixeur de volume par application avec amplification. Ouvrez SoundDial depuis la barre des menus, trouvez le curseur de l'app discrète et faites-le glisser au-delà de 100 %. Seule cette app devient plus forte.</blockquote>

<p>Arrêtez de vous battre contre un unique curseur de volume pour tout votre Mac. Obtenez <a href="https://apps.apple.com/app/id6772792641">SoundDial sur le Mac App Store</a> pour 14,99 € une seule fois, amplifiez cette app discrète au-delà de sa limite en quelques secondes, et enregistrez un profil pour ne plus jamais y penser.</p>`,
  },
  "amplify-quiet-video-podcast-audio-mac": {
    slug: "amplify-quiet-video-podcast-audio-mac",
    title: "Comment amplifier les vidéos et podcasts trop discrets sur votre Mac",
    description: "Certaines vidéos YouTube, podcasts et conférences sont tout simplement trop discrets même à 100 %. Voici comment amplifier le volume par application au-delà du maximum sur macOS avec SoundDial.",
    date: "2026-07-23",
    readTime: "6 min de lecture",
    content: `<p>La solution fiable la plus rapide est <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, un mixeur de la barre des menus du Mac App Store qui donne à chaque app son propre curseur de volume et une véritable <strong>amplification</strong> qui dépasse 100 %. Ouvrez votre navigateur ou votre lecteur de podcasts, faites glisser son curseur au-delà du maximum, et une vidéo ou une conférence discrète devient instantanément plus forte — sans pilotes, sans redémarrage.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Comment amplifier les vidéos et podcasts trop discrets sur votre Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Pourquoi certaines vidéos et podcasts sont tout simplement trop discrets</h2>
<p>Vous poussez votre Mac à 100 %, et l'interview n'est toujours qu'un murmure. Ce n'est pas votre imagination. L'audio est masterisé à des niveaux de volume extrêmement variés — un webinaire enregistré au micro d'un ordinateur portable, un podcast indépendant discret ou un ancien téléversement de conférence peuvent se situer 15 à 20 dB en dessous d'une vidéo YouTube produite professionnellement. Votre volume système est déjà au maximum, il ne reste donc aucune marge à donner.</p>
<p>Voilà le hic : macOS n'a <strong>aucun mixeur de volume par application intégré</strong>. Windows en a un depuis des années (le mixeur de volume dans la zone de notification), mais sur un Mac, les touches de volume déplacent un unique niveau global pour tout. Il n'y a aucun moyen natif de dire « rends seulement cet onglet de navigateur plus fort » — encore moins de pousser une seule app au-delà de 100 %.</p>

<h2>La vraie solution : l'amplification du volume par application</h2>
<p>Pour rendre une source discrète plus forte que ce que vos haut-parleurs autorisent normalement, il vous faut un logiciel qui applique du gain à <em>cette app spécifiquement</em> et qui peut amplifier au-delà du plafond de 100 %. C'est exactement ce que fait un mixeur par application doté d'une fonction d'amplification.</p>
<p>Avec <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, chaque app en cours d'exécution apparaît dans une liste de la barre des menus avec son propre curseur. Faites glisser une app discrète jusqu'à 150 % ou 200 % et l'audio est amplifié en temps réel. Parce que l'amplification est par app, tout le reste — votre musique, vos notifications, un appel dans une autre fenêtre — reste à un niveau normal. Vous ne faites pas hurler tout votre système pour entendre un podcast discret.</p>
<blockquote>Le volume global demande « quel est le volume du Mac ? » Un mixeur par application demande « quel est le volume de <em>cette</em> app ? » — ce qui est la question qui compte vraiment quand une vidéo est discrète et que le reste va bien.</blockquote>

<h2>Comment amplifier une vidéo ou un podcast discret, étape par étape</h2>
<ul>
<li><strong>Installez SoundDial</strong> depuis le Mac App Store. Il est sandboxé et validé par Apple, il s'installe donc proprement comme n'importe quelle autre app — aucun téléchargement séparé, aucun pilote audio, aucun parcours d'autorisations.</li>
<li><strong>Lancez la lecture</strong> de la vidéo, de l'épisode de podcast ou de la conférence discrète dans l'app que vous utilisez — Safari, Chrome, un client de podcasts, VLC.</li>
<li><strong>Cliquez sur l'icône SoundDial</strong> dans votre barre des menus. Vous verrez un curseur pour chaque app produisant actuellement du son.</li>
<li><strong>Faites glisser le curseur de cette app au-delà de 100 %</strong> — essayez d'abord 150 %, puis montez plus haut si c'est encore trop faible. Le changement est instantané.</li>
<li><strong>Laissez tout le reste tranquille.</strong> Seule l'app que vous avez amplifiée devient plus forte ; votre système reste équilibré.</li>
</ul>
<p>Si vous vous retrouvez à amplifier les mêmes apps chaque jour — disons un lecteur de podcasts et votre navigateur — vous pouvez enregistrer cette configuration en tant que <strong>profil de volume</strong> et la rappeler en un clic au lieu de réajuster à chaque fois.</p>

<h2>Un avertissement sur l'amplification</h2>
<p>Amplifier au-delà de 100 % ajoute du gain, et le gain a des limites. Poussez un enregistrement très discret et de mauvaise qualité assez fort et vous pourriez entendre de l'écrêtage ou de la distorsion — c'est la source qui manque de signal propre, pas un défaut de l'app. Amplifiez jusqu'à ce que ce soit confortablement audible, puis redescendez si ça commence à sonner dur. Sur les haut-parleurs intégrés d'un ordinateur portable, une amplification extrême peut aussi solliciter les transducteurs, allez-y donc plus doucement là qu'avec de bons écouteurs ou des haut-parleurs externes.</p>

<h2>Qu'en est-il des options gratuites ou intégrées ?</h2>
<p>Vous avez des alternatives, et il vaut la peine d'être honnête à leur sujet :</p>
<ul>
<li><strong>Volume système + curseurs au niveau des apps.</strong> Certains lecteurs (VLC, quelques navigateurs via des extensions) permettent d'amplifier leur propre audio. Bien si vous n'en avez besoin que dans une seule app — mais vous êtes coincé à configurer chaque app séparément, sans contrôle unifié et sans profils.</li>
<li><strong>eqMac</strong> est un égaliseur et amplificateur gratuit. Il peut augmenter le volume à l'échelle du système, mais c'est un outil global, pas un mixeur par application propre, et il travaille au niveau de la sortie globale.</li>
<li><strong>Background Music</strong> est gratuit et open source et propose bien le volume par application. Mais il repose sur une configuration de capture audio qui peut casser sur les versions récentes de macOS, et il lui manque une amplification dédiée, des profils et l'atténuation automatique.</li>
<li><strong>FineTune</strong> est une app gratuite et open source dans la barre des menus — une option légère si vous voulez les bases et que les logiciels maintenus par la communauté ne vous dérangent pas.</li>
<li><strong>SoundSource</strong> de Rogue Amoeba (~39 $) est le poids lourd professionnel : égaliseur par application, routage de sortie, tout le tralala. Il nécessite aussi un téléchargement et un pilote de capture audio, et il coûte plus du double de SoundDial. Surdimensionné si tout ce que vous voulez, c'est rendre un audio discret plus fort.</li>
</ul>

<h2>Pourquoi SoundDial est le choix pratique</h2>
<p>SoundDial se situe dans le juste milieu pour ce problème précis. Il coûte <strong>14,99 € en une seule fois</strong> — sans abonnement — et il vit sur le <strong>Mac App Store</strong>, ce qui signifie qu'il est sandboxé, validé par Apple et s'installe sans aucun DMG ni extension système à approuver. Vous obtenez l'amplification par application que vous êtes réellement venu chercher, plus les profils, la mise en sourdine par app, le changement rapide de sortie et l'<strong>atténuation automatique</strong> qui baisse les autres apps quand vous devez vous concentrer sur une seule. Il fait la chose « plus fort » simplement, et fait le reste bien.</p>

<p><strong>Fatigué de tendre l'oreille pour entendre les vidéos et podcasts discrets ?</strong> <a href="https://apps.apple.com/app/id6772792641">Obtenez SoundDial sur le Mac App Store</a> pour 14,99 € et donnez à chaque app son propre volume — avec l'amplification pour tout entendre clairement.</p>`,
  },
  "set-different-volume-for-each-app-mac": {
    slug: "set-different-volume-for-each-app-mac",
    title: "Comment régler un volume différent pour chaque app sur Mac",
    description: "macOS n'a pas de mixeur de volume par application intégré. Voici comment régler des niveaux de volume indépendants et persistants pour chaque app sur Mac avec SoundDial et les alternatives.",
    date: "2026-07-23",
    readTime: "5 min de lecture",
    content: `<p>macOS n'a aucun moyen intégré de régler un volume différent pour chaque app, il vous faut donc un mixeur de volume dans la barre des menus. La solution la plus rapide et la plus fiable est <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, une app du Mac App Store qui donne à chaque application son propre curseur de volume, la mise en sourdine par app et une amplification qui pousse les apps discrètes au-delà de 100 %. Réglez vos niveaux une fois et ils restent en place.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Comment régler un volume différent pour chaque app sur Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Pourquoi Mac n'a pas de contrôle du volume par application</h2>
<p>Si vous êtes passé de Windows, vous êtes probablement parti à la recherche de l'équivalent du mixeur de volume Windows, ce petit panneau où chaque app a son propre curseur. Il n'y est pas. macOS n'offre qu'un unique volume système global. Que ce soit une vidéo YouTube, un appel Zoom, Spotify ou un jeu, ils partagent tous le même niveau maître.</p>
<p>C'est très bien jusqu'à ce que ça ne le soit plus. Le chat Discord noie votre musique. Une publicité de navigateur hurle à plein volume pendant que votre podcast joue doucement en dessous. Votre jeu est assourdissant mais l'appel vocal en arrière-plan est trop faible. La seule « solution » qu'Apple vous donne, c'est d'ouvrir chaque app et d'ajuster son volume interne manuellement, si tant est que l'app en ait un, et de recommencer à chaque session.</p>
<p>Pour obtenir un vrai contrôle par application, il vous faut un petit utilitaire qui s'insère entre vos apps et votre périphérique de sortie. Voici comment le faire correctement, plus des notes honnêtes sur les alternatives.</p>

<h2>Le moyen le plus rapide : SoundDial (Mac App Store)</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> vit dans votre barre des menus et liste chaque app jouant actuellement de l'audio. Chacune obtient un curseur indépendant. Voici tout le flux de travail :</p>
<ul>
<li><strong>Installez depuis le Mac App Store.</strong> Il est validé par Apple et sandboxé, il n'y a donc aucun DMG, aucun pilote audio et aucune extension noyau ou système à approuver. Il s'installe comme n'importe quelle app normale et peut être supprimé de la même façon.</li>
<li><strong>Cliquez sur l'icône de la barre des menus.</strong> Vous verrez un curseur pour chaque app active, plus un contrôle maître.</li>
<li><strong>Faites glisser pour régler les niveaux.</strong> Baissez Discord, montez un peu Spotify, coupez entièrement l'app d'un onglet de navigateur bruyant en un clic.</li>
<li><strong>Amplifiez les apps discrètes.</strong> Si une app est trop faible même à 100 %, poussez-la au-delà de 100 % avec l'amplification par application.</li>
<li><strong>Enregistrez un profil.</strong> Stockez votre mixage « jeu », « appel de travail » ou « musique » et basculez entre eux instantanément au lieu de refaire glisser les curseurs chaque jour.</li>
</ul>
<p>Deux fonctions méritent d'être soulignées car elles résolvent les scénarios les plus agaçants :</p>
<ul>
<li><strong>L'atténuation automatique</strong> baisse automatiquement les autres apps quand une app choisie joue, pour que votre musique s'atténue à l'arrivée d'un appel et revienne ensuite, sans manipulation manuelle.</li>
<li><strong>Le changement rapide de sortie</strong> vous permet de basculer entre écouteurs et haut-parleurs depuis le même menu sans plonger dans les Réglages Système.</li>
</ul>
<p>Parce que les niveaux sont mémorisés par app et enregistrés dans des profils, c'est la partie que la plupart des gens veulent vraiment : vous le réglez une fois et ça <em>reste</em> réglé.</p>

<h2>Les alternatives gratuites et payantes, comparées honnêtement</h2>
<p>SoundDial n'est pas la seule option, et selon vos besoins, un outil gratuit pourrait suffire. Voici un tour d'horizon équitable.</p>

<h2>SoundSource (Rogue Amoeba)</h2>
<p>SoundSource est le poids lourd professionnel. En plus du volume par application, il fait l'égaliseur par application et le routage de sortie complet, pour que vous puissiez envoyer une app vers les écouteurs et une autre vers les haut-parleurs. Il est réellement excellent. Les compromis : il coûte environ 39 $, et ce n'est pas une installation propre via l'App Store, c'est un téléchargement direct qui nécessite l'ajout d'un pilote de capture audio à votre système. Si vous êtes un professionnel de l'audio qui a besoin d'un égaliseur et d'un routage, il en vaut la peine. Si vous voulez juste chaque app au bon volume, c'est plus d'outil et plus de configuration que nécessaire.</p>

<h2>Background Music (open source, gratuit)</h2>
<p>Background Music est une app gratuite et open source qui propose le volume par application et la mise en pause automatique. Le hic, c'est la fiabilité : il installe un périphérique audio virtuel et a un historique de pannes sur les versions récentes de macOS, nécessitant parfois des réinstallations ou des correctifs après les mises à jour. Il lui manque aussi l'amplification, les profils enregistrés et une véritable atténuation automatique. Bien si vous voulez du gratuit et que la maintenance occasionnelle ne vous dérange pas.</p>

<h2>FineTune et eqMac</h2>
<p>FineTune est une app gratuite et open source dans la barre des menus, un point de départ léger. eqMac est un égaliseur gratuit avec un amplificateur à l'échelle du système, davantage orienté vers l'égalisation et le gain global que vers le fait de donner à chaque app son propre curseur persistant. Les deux valent la peine d'être essayés si votre besoin est étroit, mais aucun ne s'articule autour du flux de travail « volume différent par app, enregistré en profils ».</p>

<h2>Lequel devriez-vous choisir ?</h2>
<ul>
<li><strong>Vous voulez que ça marche tout simplement, proprement, avec profils et atténuation automatique ?</strong> SoundDial à 14,99 € en une seule fois, depuis l'App Store, sans pilotes à installer.</li>
<li><strong>Vous avez besoin d'un égaliseur par application et de routage audio et le prix ou le pilote ne vous dérangent pas ?</strong> SoundSource.</li>
<li><strong>Vous voulez du gratuit et bricoler quand macOS se met à jour ne vous dérange pas ?</strong> Background Music, FineTune ou eqMac.</li>
</ul>
<p>Le vrai avantage de SoundDial, c'est la combinaison : volume, mise en sourdine et amplification indépendants pour chaque app, enregistrés dans des profils commutables, avec atténuation automatique, le tout dans un téléchargement App Store sandboxé auquel vous pouvez vous fier et que vous désinstallez en un clic, pour 14,99 € en une seule fois plutôt qu'un abonnement.</p>

<blockquote>Aucun pilote, aucune extension, aucun DMG. Réglez le volume de chaque app une fois, enregistrez-le en tant que profil, et laissez l'atténuation automatique gérer le reste.</blockquote>

<p>Prêt à donner à chaque app son propre volume ? <a href="https://apps.apple.com/app/id6772792641">Obtenez SoundDial sur le Mac App Store</a> et réglez votre mixage parfait en environ une minute.</p>`,
  },
  "make-one-app-quieter-than-the-rest-mac": {
    slug: "make-one-app-quieter-than-the-rest-mac",
    title: "Rendre une app plus faible que tout le reste sur Mac",
    description: "Une app trop forte qui noie tout le reste sur votre Mac ? Voici le moyen le plus rapide et fiable de baisser le volume d'une seule app sans toucher aux autres.",
    date: "2026-07-23",
    readTime: "5 min de lecture",
    content: `<p>Pour baisser une seule app pendant que tout le reste reste en place, utilisez <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, un mixeur de volume par app dans la barre des menus pour macOS. Ouvrez-le, trouvez l'app forte dans la liste, et faites glisser son curseur vers le bas. Cette app devient plus faible instantanément pendant que votre musique, vos appels et vos autres sources gardent leurs propres niveaux. C'est le correctif le plus rapide et le plus fiable.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Rendre une app plus faible que tout le reste sur Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Pourquoi macOS rend cela si difficile</h2>

<p>Voici la vérité frustrante : macOS n'a pas de mixeur de volume par app intégré. Windows en a un depuis des années (clic droit sur l'icône de volume, ouvrez le mixeur de volume, terminé), mais sur un Mac les touches de volume et le curseur de la barre des menus ne contrôlent qu'une chose : la sortie principale. Baissez-la et tout devient plus faible ensemble. Montez-la et l'app forte est toujours forte, juste plus forte avec le reste.</p>

<p>Alors quand les effets sonores d'un jeu explosent, qu'un onglet de navigateur lit automatiquement une pub, ou que des bips de notification jaillissent sans cesse par-dessus votre podcast, vos seules options natives sont maladroites : couper tout le système, fouiller dans le propre réglage de volume de chaque app (si elle en a un), ou quitter carrément le fautif. Rien de tout cela ne vous laisse simplement dire « rends cette app plus faible et laisse tout le reste tranquille ».</p>

<h2>Le correctif rapide : un mixeur de volume par app</h2>

<p>Un mixeur de volume par app donne à chaque app en cours d'exécution son propre curseur indépendant. C'est exactement le contrôle qui vous manque. Avec <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, cela ressemble à ceci :</p>

<ul>
<li><strong>Ouvrez le mixeur de la barre des menus.</strong> Cliquez sur l'icône SoundDial et vous verrez une liste en direct de chaque app qui joue de l'audio.</li>
<li><strong>Trouvez la forte.</strong> Le jeu, le navigateur, l'appel vidéo, les sons de notification, quoi qu'il noie le reste.</li>
<li><strong>Faites glisser son curseur vers le bas.</strong> Réglez-la à 40 %, 20 %, là où l'équilibre vous convient. Le changement est instantané et n'affecte que cette app.</li>
<li><strong>Laissez tout le reste tranquille.</strong> Votre lecteur de musique, votre appel, vos autres onglets, tous gardent le volume que vous leur avez réglé.</li>
</ul>

<p>Vous pouvez aussi couper entièrement une seule app d'un clic pendant que les autres continuent de jouer, ou booster une app faible au-dessus de 100 % si elle est trop douce. Aucun redémarrage de l'app, aucune plongée dans les menus.</p>

<h2>Cas courants où cela vous sauve</h2>

<ul>
<li><strong>Un jeu fort par-dessus la musique de fond.</strong> Descendez le jeu à un niveau confortable et gardez votre playlist à plein volume en dessous.</li>
<li><strong>Des pubs et vidéos de navigateur qui jaillissent.</strong> Fixez votre navigateur plus bas pour qu'une lecture automatique surprise ne vous assourdisse jamais.</li>
<li><strong>Des bips de notification par-dessus un appel ou un podcast.</strong> Baissez l'app pleine de notifications sans faire taire l'audio qui vous intéresse vraiment.</li>
<li><strong>Un appel vidéo faible sous des médias forts.</strong> Au lieu de baisser l'app forte, boostez l'appel au-dessus de 100 % pour entendre les gens clairement.</li>
</ul>

<h2>Réglez-le une fois avec les profils de volume et l'atténuation automatique</h2>

<p>Corriger une seule app forte est bien, mais vous voulez probablement que ça reste corrigé. SoundDial a deux fonctions qui rendent cela permanent :</p>

<p>Les <strong>profils de volume</strong> vous laissent enregistrer un ensemble de niveaux par app et les rappeler d'un clic. Créez un profil « Jeu » où le jeu est à 30 % et la musique à 100 %, et un profil « Travail » où les appels sont boostés et tout le reste est atténué. Changez de contexte sans refaire glisser les curseurs à chaque fois.</p>

<p>L'<strong>atténuation automatique</strong> baisse automatiquement les autres apps quand une app choisie joue, puis les rétablit ensuite, pour qu'une app forte ne détourne jamais entièrement votre audio en premier lieu. Entre les profils, l'atténuation et le changement rapide de sortie (passez des haut-parleurs aux écouteurs sans ouvrir les Réglages Système), vous réglez votre équilibre une fois et cessez de surveiller le volume.</p>

<h2>Comment SoundDial se compare aux alternatives</h2>

<p>Il existe d'autres moyens d'obtenir un volume par app sur un Mac. Voici un regard honnête :</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba, environ 39 $)</strong> est vraiment de niveau pro : EQ par app et routage de sortie complet en plus du contrôle de volume. Mais il coûte plus du double, et il nécessite un téléchargement séparé plus un pilote de capture audio. Si vous voulez une boîte à outils de niveau studio, il est excellent. Si vous voulez seulement baisser une app, c'est plus que nécessaire.</li>
<li><strong>Background Music</strong> est gratuit et open source, ce qui est bien, mais il peut casser sur les versions plus récentes de macOS, et il manque de boost de volume, de profils et d'atténuation automatique.</li>
<li><strong>FineTune</strong> est une app gratuite et open source de la barre des menus, et <strong>eqMac</strong> est un EQ gratuit avec un booster. Les deux valent la peine d'être essayés si le gratuit est votre priorité, mais vous échangez la finition, la fiabilité et les fonctions contre le prix.</li>
</ul>

<p>SoundDial se situe dans le juste milieu : 14,99 € unique, sans abonnement. Comme il est sur le Mac App Store, il est examiné par Apple et sandboxé, et il s'installe proprement sans DMG, sans pilote audio, ni extension système à approuver. Vous obtenez les fonctions qui comptent vraiment pour ce problème, volume par app, coupure, boost, profils et atténuation automatique, sans étiquette à 39 $ ni outil gratuit fragile.</p>

<h2>En résumé</h2>

<p>macOS ne vous laissera pas baisser une seule app par lui-même, mais c'est une lacune que vous pouvez combler en quelques secondes. Installez un mixeur par app, faites glisser le curseur de l'app forte vers le bas, et le reste de votre audio reste exactement là où vous le voulez. Enregistrez un profil et vous ne vous battrez plus jamais avec ça.</p>

<p><strong>Prêt à faire taire l'app qui noie sans cesse le reste ?</strong> Obtenez <a href="https://apps.apple.com/app/id6772792641">SoundDial sur le Mac App Store</a> pour 14,99 €, un seul paiement, sans pilote, sans abonnement.</p>`,
  },
  "streaming-audio-mixer-mac-mic-game-music": {
    slug: "streaming-audio-mixer-mac-mic-game-music",
    title: "Mixeur audio Mac pour streamers : équilibrez micro, jeu et musique",
    description: "Le moyen le plus rapide d'équilibrer micro, audio de jeu, musique et alertes en streaming sur Mac. SoundDial vous offre un mixeur de volume par app avec profils et atténuation.",
    date: "2026-07-23",
    readTime: "6 min de lecture",
    content: `<p>Pour équilibrer votre micro, votre jeu, votre musique et vos alertes en streaming sur un Mac, le correctif le plus rapide et fiable est <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, un mixeur de volume par app dans la barre des menus. macOS n'a pas de mixeur intégré, donc SoundDial vous laisse régler des niveaux indépendants par app, booster les sources faibles, enregistrer des profils de streaming et atténuer automatiquement la musique quand vous parlez.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mixeur audio Mac pour streamers : équilibrez micro, jeu et musique" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Le problème : macOS n'a pas de contrôle du volume par app</h2>
<p>Windows a le mixeur de volume depuis des années. macOS n'en livre toujours pas. Votre curseur de volume système déplace tout d'un coup, ce qui est inutile quand vous êtes en direct. Pendant un stream, vous jonglez avec au moins quatre sources qui se disputent toutes la même sortie :</p>
<ul>
<li><strong>Votre voix / retour micro</strong> — doit se placer au-dessus de tout.</li>
<li><strong>L'audio du jeu</strong> — fort, dynamique et sujet à des pics pendant l'action.</li>
<li><strong>La musique de fond</strong> — doit rester discrète sous votre commentaire.</li>
<li><strong>Les alertes et sons de chat</strong> — Discord, Stream Deck, alertes d'abonnés, notifications.</li>
</ul>
<p>Sans contrôle par app, vous finissez par piloter le curseur interne du jeu, couper Spotify à la main et prier pour qu'une cinématique forte ne casse pas les oreilles de vos spectateurs. Ce n'est pas un mix, c'est de la gestion de crise.</p>

<h2>Ce qu'un vrai mixeur de streaming doit faire</h2>
<p>Une configuration audio pensée pour les créateurs sur Mac devrait vous offrir quatre choses : des niveaux indépendants par app, la capacité de booster une source trop faible, des configurations enregistrées que vous pouvez rappeler instantanément, et une atténuation automatique pour que la musique baisse dès que vous parlez. SoundDial couvre les quatre depuis la barre des menus.</p>

<h3>1. Volume indépendant pour chaque app</h3>
<p>Réglez le jeu à 60 %, la musique à 25 %, Discord à 80 % et votre navigateur à 40 % — chaque app a son propre curseur. Rien ne déborde sur rien d'autre. Vous pouvez aussi couper instantanément une app par app quand une source déraille en plein stream, sans toucher à l'app elle-même.</p>

<h3>2. Boost de volume pour les sources faibles</h3>
<p>Certaines apps et certains jeux sont simplement trop faibles même à 100 %. Le boost par app de SoundDial pousse une source au-delà de son plafond normal pour qu'un jeu marmonnant ou une vidéo à faible volume se place là où vous en avez besoin dans le mix — sans réencodage, sans plug-ins.</p>

<h3>3. Profils de volume pour différentes scènes</h3>
<p>C'est la fonction qui fait gagner le plus de temps aux streamers. Votre mix « Just Chatting » (musique montée, jeu baissé) diffère de votre mix « Combat de boss » (jeu monté, musique presque muette), qui diffère de votre mix « BRB ». Enregistrez chacun comme profil et basculez d'un clic au lieu de faire glisser quatre curseurs en direct.</p>

<h3>4. Atténuation automatique pour que la musique baisse sous votre voix</h3>
<p>L'atténuation automatique baisse automatiquement l'audio de fond quand vous parlez et le rétablit quand vous arrêtez. Pour les streamers solo, c'est la différence entre un commentaire clair et une musique qui enterre constamment votre voix — géré automatiquement au lieu de manuellement.</p>

<h2>Où OBS s'inscrit</h2>
<p>OBS est votre outil de diffusion, pas votre mixeur de volume de bureau. OBS contrôle quels niveaux entrent dans le stream via son panneau Mixeur audio et ses filtres, mais il travaille à partir des sources audio qu'il capture — il n'atteint pas les apps macOS individuelles pour les baisser au niveau système. Sur Mac, obtenir un audio de bureau propre par app dans OBS a toujours été la partie pénible.</p>
<p>Le flux de travail pratique : utilisez SoundDial pour régler les vrais niveaux par app sur votre Mac afin que ce qui sort soit déjà équilibré, puis laissez OBS capturer et affiner les niveaux de diffusion. Réglez le mix une fois à la source et OBS a bien moins à combattre. Le changement rapide de sortie dans SoundDial vous laisse aussi passer des écouteurs aux haut-parleurs sans plonger dans les Réglages Système entre les scènes.</p>

<h2>SoundDial contre les alternatives</h2>
<p>Vous avez des options, et l'honnêteté compte ici :</p>
<ul>
<li><strong>SoundSource (Rogue Amoeba, environ 39 $)</strong> — de niveau pro avec EQ par app et routage de sortie complet. Il est excellent, mais il coûte plus du double, nécessite un téléchargement direct et installe un pilote de capture audio. Excessif si vous avez surtout besoin de niveaux propres par app, de boost et d'atténuation.</li>
<li><strong>Background Music (gratuit, open source)</strong> — vraiment utile et gratuit, mais il peut casser sur les versions plus récentes de macOS, et il n'a pas de boost, pas de profils, pas d'atténuation automatique — précisément les fonctions sur lesquelles les streamers s'appuient.</li>
<li><strong>FineTune (app gratuite et open source de la barre des menus)</strong> — contrôle léger par app, mais un projet communautaire sans la combinaison profils-plus-atténuation pensée pour le streaming en direct.</li>
<li><strong>eqMac (EQ gratuit + booster)</strong> — bon pour façonner le timbre et booster, mais c'est un égaliseur, pas un mixeur de streaming par app.</li>
</ul>
<p>L'angle de SoundDial : c'est un achat unique à <strong>14,99 €</strong> sur le <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a> — examiné par Apple, sandboxé, et il s'installe proprement sans DMG ni pilote audio ou extension système. Ce dernier point compte pour les streamers : moins de composants au niveau noyau signifie moins de pannes surprises quand macOS se met à jour la veille de votre stream.</p>

<h2>Le compromis honnête</h2>
<p>Si vous avez besoin d'un EQ de qualité diffusion et de chaînes de routage complexes, SoundSource gagne son prix. Si vous voulez un outil gratuit de bricoleur et que les pannes occasionnelles ne vous dérangent pas, Background Music ou FineTune feront l'affaire. Mais si vous voulez le mix que le streaming exige réellement — niveaux par app, boost, profils de scène enregistrés et atténuation automatique — depuis une installation App Store sûre qui survit aux mises à jour de macOS, SoundDial est la voie la plus directe pour le prix.</p>

<p><strong>Prêt à corriger l'audio de votre stream ?</strong> Obtenez <a href="https://apps.apple.com/app/id6772792641">SoundDial sur le Mac App Store</a> pour 14,99 € — réglez vos niveaux de micro, jeu, musique et alertes une fois, enregistrez-les comme profils, et laissez l'atténuation automatique garder votre voix au-dessus.</p>`,
  },
  "macos-tahoe-audio-crackling-popping-fix": {
    slug: "macos-tahoe-audio-crackling-popping-fix",
    title: "Comment corriger les grésillements et craquements audio sur macOS Tahoe",
    description: "Des grésillements ou craquements audio après la mise à jour vers macOS Tahoe 26 ? Corrigez-les en alignant la fréquence d'échantillonnage, en réinitialisant CoreAudio, en vérifiant votre codec Bluetooth et en éliminant les conflits de plug-ins. Voici l'ordre de dépannage complet.",
    date: "2026-07-23",
    readTime: "6 min de lecture",
    content: `<p>Les grésillements et craquements après la mise à jour vers macOS Tahoe 26 proviennent presque toujours d'une incohérence de fréquence d'échantillonnage, d'une négociation instable de codec Bluetooth ou d'un processus CoreAudio bloqué. Corrigez-les en alignant la fréquence d'échantillonnage de sortie dans Configuration audio et MIDI, en réinitialisant <code>coreaudiod</code>, en oubliant puis ré-appairant vos écouteurs Bluetooth, et en quittant les hôtes de plug-ins audio. Procédez dans l'ordre ci-dessous.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Comment corriger les grésillements et craquements audio sur macOS Tahoe" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Commencez par les solutions les plus simples</h2>

<p>Avant de toucher à quoi que ce soit de technique, écartez les deux choses qui résolvent la plupart des cas en moins d'une minute :</p>

<ul>
<li><strong>Redémarrez le Mac.</strong> Une mise à jour Tahoe laisse étonnamment souvent les démons audio dans un état à moitié migré. Un redémarrage propre recharge CoreAudio de zéro et élimine la majorité des grésillements post-mise à jour.</li>
<li><strong>Débranchez et rebranchez le périphérique de sortie.</strong> S'il s'agit d'un DAC USB, d'une station d'accueil ou d'une interface audio, déconnectez-le, attendez quelques secondes et reconnectez-le. Essayez aussi un autre port USB, idéalement directement sur le Mac plutôt qu'à travers un hub. Les hubs et écrans qui transmettent l'audio sont une source fréquente de craquements.</li>
</ul>

<p>Si le bruit persiste après un redémarrage, c'est un problème de configuration, pas un simple bug. Continuez.</p>

<h2>Alignez la fréquence d'échantillonnage (la cause la plus fréquente)</h2>

<p>Le craquement classique de Tahoe provient d'une incohérence de fréquence d'échantillonnage entre ce que votre périphérique attend et ce que macOS envoie. Quand une app joue de l'audio en 44,1 kHz alors que le système est bloqué en 48 kHz (ou l'inverse), le rééchantillonnage peut bégayer ou craquer.</p>

<ul>
<li>Ouvrez <strong>Configuration audio et MIDI</strong> (dans Applications → Utilitaires, ou via Spotlight).</li>
<li>Sélectionnez votre périphérique de sortie dans la barre latérale de gauche.</li>
<li>Regardez le menu déroulant <strong>Format</strong>. Essayez de le régler sur <strong>48000,0 Hz, 2 canaux, entier 24 bits</strong> et testez.</li>
<li>Si les craquements persistent, passez à <strong>44100,0 Hz</strong> et testez à nouveau.</li>
<li>Pour les interfaces, assurez-vous que la fréquence d'échantillonnage correspond à celle du projet de votre STAN.</li>
</ul>

<p>Basculer le format force aussi CoreAudio à renégocier la connexion, ce qui à soi seul corrige de nombreux cas même lorsque vous revenez à la même valeur.</p>

<h2>Réinitialisez CoreAudio</h2>

<p>CoreAudio fonctionne comme un démon en arrière-plan appelé <code>coreaudiod</code>. Après une mise à jour majeure de macOS, il peut conserver un état de périphérique obsolète. Le redémarrer est sans risque et prend effet instantanément, sans redémarrage complet.</p>

<p>Ouvrez Terminal et exécutez :</p>

<blockquote><p><code>sudo killall coreaudiod</code></p></blockquote>

<p>Saisissez votre mot de passe lorsqu'il est demandé. Votre audio se coupera une seconde, puis le démon se relancera automatiquement avec un état propre. C'est le correctif le plus efficace pour un grésillement qui apparaît de nulle part sur une machine qui fonctionnait bien avant la mise à jour.</p>

<h2>Vérifiez vos écouteurs Bluetooth et le codec</h2>

<p>Si le grésillement ne se produit que sur les AirPods ou d'autres écouteurs Bluetooth, le problème vient généralement de la négociation du codec, pas de vos haut-parleurs. La qualité de l'audio sans fil se dégrade quand la connexion est saturée ou quand macOS bascule dans un mode d'appel à faible bande passante.</p>

<ul>
<li><strong>Oubliez et ré-appairez le périphérique.</strong> Allez dans Réglages Système → Bluetooth, supprimez les écouteurs, puis appairez-les à nouveau. Cela réinitialise le codec négocié.</li>
<li><strong>Surveillez le passage en mode appel.</strong> Quand une app ouvre le microphone, macOS bascule les casques Bluetooth vers un profil bidirectionnel de faible qualité, ce qui donne un son granuleux. Quittez les apps de visioconférence et vocales que vous n'utilisez pas et la fidélité revient.</li>
<li><strong>Réduisez les interférences.</strong> Éloignez-vous des environnements 2,4 GHz saturés et déconnectez les périphériques Bluetooth dont vous n'avez pas besoin. Une bande radio encombrée produit des craquements intermittents.</li>
<li><strong>Désactivez l'entrée micro</strong> dans les réglages d'une app si vous voulez seulement écouter, afin que macOS conserve le profil de lecture haute qualité.</li>
</ul>

<h2>Quittez les hôtes de plug-ins audio et les pilotes virtuels</h2>

<p>Les logiciels audio tiers qui installent une extension système ou un périphérique virtuel sont un coupable fréquent après un changement d'OS, car les extensions noyau et audio doivent souvent être mises à jour pour une nouvelle version de macOS. Parmi les suspects : les routeurs audio virtuels, les apps d'égaliseur, les outils de bouclage et les anciens utilitaires basés sur un pilote.</p>

<ul>
<li>Quittez toute app d'égaliseur, de routage audio ou de bouclage et vérifiez si le grésillement cesse.</li>
<li>Vérifiez dans Réglages Système → Général → Ouverture &amp; extensions les extensions audio qui pourraient nécessiter une mise à jour ou une suppression.</li>
<li>Mettez à jour ces apps vers leurs versions compatibles Tahoe, ou désinstallez celles que vous n'utilisez plus. Les pilotes audio empilés entrent fréquemment en conflit entre eux après une mise à jour majeure.</li>
</ul>

<p>Si le fait de quitter l'une de ces apps fait taire les craquements, vous avez trouvé le coupable. Réinstallez la version actuelle ou laissez-la désactivée.</p>

<h2>Cernez le problème : à l'échelle du système ou d'une seule app ?</h2>

<p>Déterminez si le bruit se produit partout ou seulement dans certains logiciels. Lisez un fichier audio local, puis une vidéo dans le navigateur, puis une app de musique. Si une seule app craque, le correctif se trouve dans les réglages audio de cette app ou dans une mise à jour, pas dans macOS. Si c'est à l'échelle du système, les étapes ci-dessus sont là où se trouve la réponse.</p>

<p>Si vous êtes toujours bloqué, démarrez en mode sans échec (maintenez le bouton d'alimentation sur Apple Silicon, puis choisissez votre disque de démarrage en maintenant Maj). Le mode sans échec ne charge aucune extension tierce. Si l'audio est propre là, un élément d'ouverture ou un pilote en est la cause, et vous pouvez les réactiver un par un pour le trouver.</p>

<h2>Une fois votre audio propre</h2>

<p>Le grésillement est un problème de pilote et de fréquence d'échantillonnage, donc les correctifs ci-dessus sont ce qui le résout réellement. Mais une fois la lecture stable, vous remarquerez peut-être une autre limitation : macOS n'a toujours pas de mixeur de volume par app intégré, comme Windows. Vous ne pouvez pas baisser une app bruyante sans tout baisser.</p>

<p>C'est cette lacune que <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> comble. C'est un mixeur dans la barre des menus qui donne à chaque app son propre curseur de volume, la coupure par app, et même un boost de volume pour les apps trop faibles, plus le changement rapide de sortie. Il ne corrigera pas les grésillements, mais une fois votre audio sain, il rend le contrôle quotidien bien plus facile.</p>

<p>Suivez les étapes ci-dessus dans l'ordre, et commencez par le redémarrage et la vérification de la fréquence d'échantillonnage. Si vous voulez ensuite un vrai contrôle par app sur votre configuration audio propre, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> est un achat unique à 14,99 € sur le Mac App Store, sandboxé, sans pilote ni DMG à installer.</p>`,
  },
  "airpods-stuttering-cutting-out-mac-tahoe": {
    slug: "airpods-stuttering-cutting-out-mac-tahoe",
    title: "AirPods qui saccadent ou coupent sur Mac (correctif Tahoe)",
    description: "Des AirPods qui saccadent, coupent ou perdent l'audio sur macOS Tahoe, c'est presque toujours une interférence Bluetooth ou un va-et-vient de bascule automatique. Voici comment les ré-appairer, réduire la saturation 2,4 GHz et arrêter les transferts qui interrompent la lecture.",
    date: "2026-07-23",
    readTime: "6 min de lecture",
    content: `<p>Des AirPods qui saccadent ou coupent sur macOS Tahoe, c'est presque toujours une interférence Bluetooth, pas un casque défectueux. Les coupables habituels sont le Wi-Fi 2,4 GHz et la saturation du routeur, une bascule automatique de périphérique trop agressive, et un appairage obsolète. Ré-appairez les AirPods, désactivez la bascule automatique, et éloignez-vous des canaux 2,4 GHz encombrés pour corriger la plupart des cas.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — AirPods qui saccadent ou coupent sur Mac (correctif Tahoe)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Pourquoi les AirPods coupent spécifiquement sur Mac</h2>

<p>Les AirPods utilisent le Bluetooth, qui partage la bande radio 2,4 GHz encombrée avec le Wi-Fi, les micro-ondes, les périphériques USB 3 et à peu près chaque prise connectée de votre maison. Votre Mac est une radio très active : il jongle avec le Wi-Fi, le Bluetooth, AirDrop et les fonctions Continuité sur des antennes qui se chevauchent. Quand cette bande est saturée, l'audio Bluetooth est la première chose à saccader, car il ne tolère pas les paquets perdus comme le fait un transfert de fichier.</p>

<p>Tahoe n'a pas rendu vos AirPods pires par magie, mais une installation fraîche de macOS réinitialise souvent le comportement radio, réactive les transferts Continuité et renégocie les codecs. C'est pourquoi les problèmes semblent apparaître juste après une mise à jour. La bonne nouvelle : les correctifs sont bien compris et pour la plupart gratuits.</p>

<h2>Correctif 1 : ré-appairez les AirPods (à faire en premier)</h2>

<p>Un appairage obsolète ou corrompu survit aux redémarrages et provoque des coupures intermittentes qui paraissent aléatoires. Supprimez et rajoutez entièrement la connexion :</p>

<ul>
<li>Ouvrez <strong>Réglages Système, Bluetooth</strong>.</li>
<li>Cliquez sur le bouton d'info (i) à côté de vos AirPods et choisissez <strong>Oublier cet appareil</strong>.</li>
<li>Placez les AirPods dans leur boîtier, fermez le couvercle, attendez 15 secondes, puis ouvrez-le.</li>
<li>Maintenez le bouton à l'arrière du boîtier jusqu'à ce que le voyant clignote en blanc.</li>
<li>Ré-appairez depuis la liste Bluetooth.</li>
</ul>

<p>Pendant que vous y êtes, assurez-vous que le micrologiciel des AirPods est à jour. Il n'y a pas de mise à jour manuelle, mais les laisser dans leur boîtier près d'un iPhone ou d'un Mac connecté un moment leur permet de se mettre à jour en arrière-plan.</p>

<h2>Correctif 2 : désactivez la bascule automatique</h2>

<p>C'est la cause numéro un des « coupures » pour les gens dans l'écosystème Apple. Vos AirPods essaient de vous suivre entre votre Mac, votre iPhone et votre iPad. Chaque fois que votre téléphone estime qu'il devrait capter l'audio, la connexion a un hoquet sur votre Mac, produisant une coupure d'une demi-seconde au milieu d'un podcast.</p>

<ul>
<li>Sur le Mac : Bluetooth, cliquez sur (i) à côté des AirPods, réglez <strong>Se connecter à ce Mac</strong> sur <strong>Lors de la dernière connexion à ce Mac</strong> au lieu de Automatiquement.</li>
<li>Sur l'iPhone : Réglages, touchez vos AirPods, <strong>Se connecter à cet iPhone</strong>, choisissez <strong>Lors de la dernière connexion à cet iPhone</strong>.</li>
</ul>

<p>Cela arrête le bras de fer entre les appareils. Vous choisirez manuellement où va l'audio, un petit prix pour une lecture stable.</p>

<h2>Correctif 3 : réduisez la saturation 2,4 GHz</h2>

<p>Si les coupures surviennent pendant les appels vidéo, les téléchargements ou quand d'autres personnes diffusent en streaming, votre bande radio est saturée. Quelques gestes pratiques :</p>

<ul>
<li><strong>Utilisez la bande Wi-Fi 5 GHz</strong> sur votre Mac. Dans les réglages de votre routeur, donnez au réseau 5 GHz un nom distinct et connectez-vous-y. Cela libère la bande 2,4 GHz pour le Bluetooth.</li>
<li><strong>Éloignez les hubs USB 3 et Thunderbolt</strong> de votre Mac et de vos AirPods. L'USB 3 est une source de bruit 2,4 GHz notoire ; un hub posé à côté de votre ordinateur portable peut ruiner le Bluetooth à quelques centimètres.</li>
<li><strong>Changez le canal 2,4 GHz de votre routeur</strong> pour 1, 6 ou 11 (les options qui ne se chevauchent pas) et évitez les canaux encombrés utilisés par vos voisins.</li>
<li><strong>Gardez une ligne de vue dégagée.</strong> Les corps et les murs absorbent le 2,4 GHz. Si votre Mac est derrière vous ou dans un sac, les coupures s'aggravent.</li>
</ul>

<blockquote>Les routeurs Wi-Fi 6E et Wi-Fi 7 peuvent aider indirectement : en poussant vos appareils sur la bande 6 GHz, ils libèrent la bande 2,4 GHz dont dépend le Bluetooth. Mais un réseau maillé mal configuré qui vous ramène sans cesse en 2,4 GHz peut aggraver les choses. Vérifiez sur quelle bande vous êtes réellement.</blockquote>

<h2>Correctif 4 : réinitialisez la pile Bluetooth et Continuité</h2>

<p>Si le ré-appairage n'a pas tenu, réinitialisez les radios elles-mêmes :</p>

<ul>
<li>Désactivez puis réactivez le Bluetooth depuis la barre des menus, puis redémarrez le Mac. Un redémarrage élimine un nombre surprenant de bugs audio passagers.</li>
<li>Réinitialisez le SMC/NVRAM sur les Mac Intel, ou éteignez simplement complètement (pas un redémarrage) pendant 30 secondes sur Apple Silicon.</li>
<li>Si vous n'utilisez pas AirDrop ni Handoff, désactiver Handoff dans Réglages Système, Général, AirDrop &amp; Handoff réduit le bavardage radio en arrière-plan.</li>
</ul>

<h2>Ce qui ne le corrigera pas (et ce que fait réellement un mixeur de volume)</h2>

<p>Pour être clair sur le périmètre : rien de tout cela n'est un problème de volume logiciel, et aucune app de volume ne peut réparer une liaison Bluetooth. Si votre audio <em>coupe</em>, traquez le problème radio ci-dessus. Des apps comme <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> contrôlent le volume par app, la coupure et le changement de sortie, elles ne touchent pas à la pile Bluetooth, donc elles n'arrêteront pas les saccades. Là où un mixeur aide vraiment, c'est pour la gêne voisine que beaucoup d'utilisateurs d'AirPods confondent avec les coupures : une app qui hurle pendant qu'une autre est trop faible, ou le besoin de changer de sortie rapidement. C'est un problème d'équilibre de volume, pas de connexion.</p>

<p>Diagnostiquez honnêtement. Si l'audio coupe un instant puis revient, c'est une interférence ou la bascule automatique. Si les niveaux sont juste inégaux entre les apps, c'est un problème de mixage que vous pouvez réellement résoudre avec un logiciel.</p>

<h2>Liste de contrôle rapide</h2>

<ul>
<li>Oubliez et ré-appairez les AirPods.</li>
<li>Réglez le Mac et l'iPhone sur <strong>Lors de la dernière connexion</strong>, pas Automatiquement.</li>
<li>Passez votre Mac en Wi-Fi 5 GHz ; éloignez les hubs USB 3.</li>
<li>Réglez le 2,4 GHz sur le canal 1, 6 ou 11.</li>
<li>Redémarrez après avoir basculé le Bluetooth.</li>
</ul>

<p>Une fois les coupures disparues et que vous voulez simplement un contrôle plus propre du volume de chaque app, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> ajoute un vrai mixeur de volume par app, la coupure, le boost et le changement rapide de sortie que macOS n'inclut toujours pas. C'est un achat unique à 14,99 € sur le Mac App Store, sandboxé, sans pilote à installer.</p>`,
  },
  "mac-right-speaker-not-working-after-tahoe": {
    slug: "mac-right-speaker-not-working-after-tahoe",
    title: "Haut-parleur droit muet sur Mac après la mise à jour Tahoe ? Comment le réparer",
    description: "Un haut-parleur ou un canal a cessé de fonctionner après la mise à jour vers macOS Tahoe ? Commencez par le curseur de balance audio, puis réinitialisez Core Audio, essayez le mode sans échec et écartez le matériel. Un guide de dépannage clair.",
    date: "2026-07-23",
    readTime: "6 min de lecture",
    content: `<p>Si votre haut-parleur droit est devenu muet après la mise à jour vers macOS Tahoe, vérifiez d'abord le <strong>curseur de balance</strong> audio — il peut se décaler pendant une mise à jour. Allez dans Réglages Système &gt; Son &gt; Sortie et assurez-vous que la Balance est bien au centre. Si tout va bien de ce côté, redémarrez Core Audio, démarrez en mode sans échec, puis écartez le matériel. La plupart des cas sont logiciels.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Haut-parleur droit muet sur Mac après la mise à jour Tahoe ? Comment le réparer" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>D'abord : le curseur de balance (répare cela plus souvent qu'on ne le croit)</h2>

<p>Un curseur de balance bloqué ou décalé est la raison la plus fréquente pour qu'un canal devienne muet — et les mises à jour de macOS le déplacent parfois. Avant de supposer le pire :</p>

<ul>
<li>Ouvrez <strong>Réglages Système &gt; Son</strong>.</li>
<li>Cliquez sur l'onglet <strong>Sortie</strong> et sélectionnez vos haut-parleurs (intégrés, ou votre périphérique externe).</li>
<li>Trouvez le curseur <strong>Balance</strong> et faites-le glisser exactement au centre. S'il était tiré vers la gauche, votre canal droit paraîtrait muet.</li>
</ul>

<p>Faites-le <em>pour chaque périphérique de sortie</em>. Le réglage de balance est mémorisé séparément pour les haut-parleurs intégrés, les écouteurs et chaque interface externe — donc une balance intégrée centrée n'aidera pas si le problème est sur votre DAC USB.</p>

<h2>Testez s'il s'agit vraiment d'un canal matériel</h2>

<p>Écartez ou confirmez le matériel rapidement. Jouez un morceau stéréo que vous connaissez bien, puis branchez une paire d'écouteurs filaires. Si les deux canaux fonctionnent dans les écouteurs mais pas via les haut-parleurs, le problème est en aval du moteur audio (matériel des haut-parleurs ou chemin de sortie). Si le même canal est muet dans les écouteurs aussi, c'est plus probablement logiciel ou le codec audio de la carte mère.</p>

<p>Vous pouvez aussi ouvrir <strong>Musique</strong> ou QuickTime, lire quelque chose, et basculer la balance à fond à gauche, puis à fond à droite. Si l'audio se déplace proprement entre les canaux, les deux haut-parleurs sont bien vivants et c'est purement un problème de réglages.</p>

<h2>Redémarrez Core Audio</h2>

<p>macOS achemine tout le son via le processus <strong>coreaudiod</strong>. Après une mise à jour majeure, son état peut se coincer — des sorties disparaissent, des canaux tombent, ou le volume se comporte bizarrement. Le redémarrer est sans risque et force macOS à reconstruire le graphe audio :</p>

<ul>
<li>Ouvrez <strong>Terminal</strong> (Applications &gt; Utilitaires).</li>
<li>Exécutez : <code>sudo killall coreaudiod</code></li>
<li>Saisissez votre mot de passe. Le démon audio se relance automatiquement en une ou deux secondes.</li>
</ul>

<p>Rien n'est supprimé — cela ne fait que redémarrer le sous-système audio. Retestez votre haut-parleur droit immédiatement après.</p>

<h2>Redémarrez correctement, puis essayez le mode sans échec</h2>

<p>Un redémarrage complet élimine les bugs audio passagers qu'un killall ne corrige pas. Si le canal est toujours muet, démarrez en <strong>mode sans échec</strong>, qui charge un système minimal et saute les extensions audio tierces et les éléments d'ouverture :</p>

<ul>
<li><strong>Apple Silicon :</strong> Éteignez. Maintenez le bouton d'alimentation jusqu'à l'apparition de « Chargement des options de démarrage ». Sélectionnez votre disque, puis maintenez <strong>Maj</strong> et cliquez sur « Continuer en mode sans échec ».</li>
<li><strong>Intel :</strong> Redémarrez et maintenez <strong>Maj</strong> jusqu'à l'apparition de la fenêtre de connexion.</li>
</ul>

<p>Si les deux haut-parleurs fonctionnent en mode sans échec, un pilote audio tiers, un périphérique virtuel ou un utilitaire de la barre des menus installé avant la mise à jour entre en conflit avec la nouvelle pile audio de Tahoe. Redémarrez normalement et supprimez ou mettez à jour les logiciels audio récemment installés (enregistreurs d'écran, apps de réunion et kexts de routage audio sont des coupables fréquents).</p>

<h2>Réinitialisez la NVRAM (Mac Intel uniquement)</h2>

<p>Sur les Mac Intel, les réglages de son et de haut-parleurs résident dans la NVRAM/PRAM, et une valeur obsolète peut survivre à une mise à jour. Réinitialisez-la : éteignez, puis allumez et maintenez immédiatement <strong>Option + Commande + P + R</strong> pendant environ 20 secondes, en laissant le Mac redémarrer une fois. Cela ne s'applique pas aux Mac Apple Silicon — ils gèrent cela automatiquement, donc ignorez cette étape si vous êtes sur une machine série M.</p>

<h2>Mettez à jour à nouveau — et vérifiez s'il existe une version corrective</h2>

<p>Les premières versions de toute version majeure de macOS livrent des bugs de pilote audio qui sont corrigés plus tard. Allez dans <strong>Réglages Système &gt; Général &gt; Mise à jour de logiciels</strong> et installez toute version corrective de Tahoe en attente (14.x.1, 14.x.2, etc.). Si une mise à jour supplémentaire existe, elle traite souvent exactement ces régressions audio post-mise à jour.</p>

<h2>Quand il s'agit vraiment de matériel</h2>

<p>Si le mode sans échec, un redémarrage de Core Audio et une réinstallation propre échouent tous — et que le même canal est muet dans les écouteurs — vous êtes peut-être face à une panne matérielle. La coïncidence avec une mise à jour peut être fortuite ; les amplificateurs de haut-parleurs et les codecs audio tombent en panne. Lancez <strong>Apple Diagnostics</strong> (éteignez, puis maintenez le bouton d'alimentation sur Apple Silicon et choisissez Diagnostics, ou maintenez <strong>D</strong> sur Intel au démarrage). S'il signale un composant audio, contactez l'<strong>assistance Apple</strong> ou un centre de service agréé. Ne dépensez pas d'argent en logiciel pour un haut-parleur grillé.</p>

<blockquote>Règle empirique : si l'audio se déplace correctement avec le curseur de balance, les deux haut-parleurs sont physiquement intacts et votre correctif est dans le logiciel. S'il ne se déplace jamais vers le côté muet, suspectez le matériel.</blockquote>

<h2>Où se situe le logiciel de volume (et où il ne se situe pas)</h2>

<p>Pour être clair : un canal de haut-parleur muet n'est pas quelque chose qu'une app de volume corrige — les vérifications ci-dessus sont votre voie. Cela dit, une fois votre audio à nouveau sain, macOS manque toujours de ce que Windows a depuis des années : un vrai mixeur de volume par app. Si vous vous êtes retrouvé à fouiller dans les réglages de Son parce qu'une app hurlait pendant qu'une autre était trop faible, un mixeur dans la barre des menus comme <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> vous laisse régler le volume, la coupure et même le boost par application, sans toucher à la balance de votre système. C'est un outil de confort pour le mixage quotidien, pas une réparation du problème de cet article.</p>

<h2>En résumé</h2>

<ul>
<li>Centrez le curseur <strong>Balance</strong> — pour chaque périphérique de sortie.</li>
<li>Testez avec des écouteurs pour isoler le matériel.</li>
<li>Exécutez <code>sudo killall coreaudiod</code>, puis redémarrez.</li>
<li>Essayez le <strong>mode sans échec</strong> pour repérer les conflits de pilotes.</li>
<li>Réinitialisez la NVRAM sur Intel ; installez toute version corrective de Tahoe.</li>
<li>Toujours muet dans les écouteurs ? Lancez Apple Diagnostics et appelez Apple.</li>
</ul>

<p>Une fois vos haut-parleurs revenus à la normale, si jongler avec le volume par app est une gêne quotidienne, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> ajoute le mixeur que macOS a toujours oublié — 14,99 €, unique, sandboxé, sans pilote.</p>`,
  },
  "airpods-stuck-at-half-volume-mac-fix": {
    slug: "airpods-stuck-at-half-volume-mac-fix",
    title: "Vos AirPods bloqués à mi-volume sur votre Mac ? Voici le correctif",
    description: "Pourquoi les AirPods se connectent à votre Mac à mi-volume — généralement une bascule du codec Bluetooth vers le profil micro mains libres — plus les correctifs de ré-appairage et comment remonter le niveau pour de bon.",
    date: "2026-07-23",
    readTime: "6 min de lecture",
    content: `<p>Les AirPods tombent généralement à mi-volume sur un Mac parce que macOS les a fait passer du profil audio A2DP haute qualité au profil mains libres (HFP) de faible qualité — celui conçu pour le microphone des appels téléphoniques. Ce mode plafonne la sortie et la qualité. Corrigez-le en forçant le Mac à revenir à l'audio écouteurs uniquement, puis boostez le niveau pour l'y maintenir.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Vos AirPods bloqués à mi-volume sur votre Mac ? Voici le correctif" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Pourquoi cela arrive : la bascule de codec</h2>

<p>Les périphériques audio Bluetooth comme les AirPods fonctionnent dans l'un de deux modes. Quand vous écoutez simplement, macOS utilise A2DP — stéréo complète, pleine puissance, qualité propre. Mais dès qu'une app veut votre microphone, macOS bascule toute la connexion vers le HFP (profil mains libres). Le HFP est un codec de téléphonie bidirectionnel. Il sonne mince, presque mono et nettement plus faible, car il a été conçu pour les appels vocaux, pas la musique.</p>

<p>Le problème, c'est que macOS reste souvent bloqué en HFP même après que l'app qui a saisi le micro a terminé — ou y bascule à l'instant où vous ouvrez Zoom, FaceTime, Teams, Discord, ou un onglet de navigateur avec l'autorisation micro. Vos AirPods sonnent donc comme s'ils étaient à « mi-volume » non pas parce que le curseur de volume a bougé, mais parce que tout le profil audio a été rétrogradé sous vos pieds.</p>

<p>Vous le reconnaîtrez : l'audio devient soudain faible et étouffé, les AirPods apparaissent deux fois dans vos réglages de son (une fois comme sortie, une fois comme microphone), et monter le volume système à fond n'aide guère.</p>

<h2>Les contournements de ré-appairage et de codec</h2>

<p>Ce sont les premières étapes honnêtes. Procédez dans l'ordre — l'une des premières règle généralement le problème.</p>

<ul>
<li><strong>Changez votre périphérique d'entrée.</strong> Ouvrez Réglages Système → Son → Entrée et choisissez le microphone intégré de votre Mac au lieu des AirPods. Cela empêche macOS de maintenir les AirPods en mode HFP, permettant à la sortie de remonter en qualité A2DP complète. C'est le correctif le plus efficace.</li>
<li><strong>Désactivez puis réactivez le Bluetooth.</strong> Une réinitialisation rapide de la connexion renégocie souvent l'A2DP proprement, surtout si les AirPods se sont coincés après la fin d'un appel.</li>
<li><strong>Reconnectez les AirPods.</strong> Fermez le boîtier, attendez quelques secondes, rouvrez-le près du Mac et resélectionnez-les comme périphérique de sortie.</li>
<li><strong>Quittez l'app qui a saisi le micro.</strong> Quittez complètement Zoom, Teams, Discord, ou cet onglet de navigateur. Certaines apps gardent la session micro ouverte en arrière-plan et bloquent le HFP jusqu'à ce qu'elles soient fermées.</li>
<li><strong>Ré-appairez de zéro.</strong> Supprimez les AirPods dans Réglages Système → Bluetooth (cliquez sur le bouton d'info → Oublier cet appareil), puis appairez à nouveau. Cela efface une négociation de profil corrompue qu'un simple basculement ne corrige pas.</li>
<li><strong>Réinitialisez les AirPods.</strong> Avec le couvercle du boîtier ouvert, maintenez le bouton de configuration à l'arrière jusqu'à ce que le voyant clignote en orange puis en blanc. Ré-appairez ensuite. C'est l'option nucléaire pour les bizarreries au niveau du micrologiciel.</li>
<li><strong>Mettez à jour macOS et le micrologiciel des AirPods.</strong> Apple a livré des correctifs audio Bluetooth dans des versions correctives. Le micrologiciel des AirPods se met à jour silencieusement quand ils se chargent près d'un appareil connecté — laissez-les donc dans le boîtier près de votre Mac pendant la nuit.</li>
</ul>

<blockquote><p>Le schéma à surveiller : si le volume chute à l'instant où vous rejoignez un appel et se rétablit quand l'appel se termine, c'est la bascule HFP — pas un haut-parleur cassé ni un bug de réglages.</p></blockquote>

<h2>Pourquoi les correctifs ne tiennent pas toujours</h2>

<p>Voici la partie frustrante. Même après un ré-appairage, macOS refera volontiers passer vos AirPods en mode mains libres silencieux la prochaine fois qu'une app touche le micro. Vous ne pouvez pas désactiver définitivement ce comportement dans les réglages système — Apple le traite comme automatique. Vous finissez donc par refaire l'astuce du périphérique d'entrée plusieurs fois par jour, et à chaque instant où vos AirPods sont dans un appel ou une app gourmande en micro, ils sont de nouveau plafonnés à ce niveau plus bas.</p>

<p>Il y a aussi un second problème, distinct, que les gens confondent avec celui-ci : certaines apps sont juste plus faibles que d'autres au volume système maximum. Un lecteur de podcast ou un onglet de navigateur peut se situer bien en dessous de ce que vos oreilles veulent, même quand les AirPods fonctionnent en A2DP propre. macOS ne vous donne qu'un seul curseur de volume pour tout et aucun contrôle par app, il n'y a donc aucun moyen natif de remonter une seule app trop faible.</p>

<h2>Remontez le niveau — et maintenez-le</h2>

<p>C'est là qu'un mixeur de volume par app gagne sa place. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> est une app de la barre des menus pour macOS qui donne à chaque app en cours d'exécution son propre curseur de volume indépendant — y compris un boost au-delà de 100 %. Ainsi, quand vos AirPods reviennent d'un appel à un niveau effectif plus bas, ou qu'une app précise est simplement trop faible, vous faites glisser cette app au-delà du plafond normal et elle y reste.</p>

<p>Concrètement, cela signifie :</p>

<ul>
<li><strong>BOOST de volume par app.</strong> Poussez une app faible au-dessus du maximum standard au lieu de forcer pour l'entendre au volume système « maximum ».</li>
<li><strong>Profils de volume.</strong> Enregistrez un ensemble de niveaux — navigateur boosté, musique plus douce, appels vidéo forts — et basculez tout l'agencement en un clic pour ne pas avoir à réajuster après chaque reconnexion.</li>
<li><strong>Changement rapide de sortie.</strong> Passez des AirPods aux haut-parleurs du portable ou à un DAC externe depuis la barre des menus sans fouiller dans les Réglages Système, ce qui aide quand vous forcez une nouvelle négociation de profil.</li>
<li><strong>Coupure par app et atténuation automatique.</strong> Coupez une app sans toucher aux autres, et laissez les médias baisser automatiquement quand quelque chose de plus important se joue.</li>
</ul>

<p>Il faut être clair sur ce que cela fait et ne fait pas. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> ne forcera pas macOS à rester en A2DP — l'astuce du périphérique d'entrée ci-dessus reste votre outil pour le codec lui-même. Ce qu'il fait, c'est vous rendre la puissance que la rétrogradation a volée, par app, pour qu'une session AirPods faible ou une app obstinément douce se corrige d'un seul glissement au lieu d'être une cause perdue. Et comme c'est une app sandboxée du Mac App Store, il n'y a pas de pilote audio à installer, pas de DMG, pas d'extension noyau — elle fonctionne, tout simplement.</p>

<h2>En résumé</h2>

<p>Si vos AirPods sonnent faible et étouffé sur votre Mac, changez votre périphérique d'entrée pour ne plus utiliser les AirPods afin de les forcer à sortir du mode mains libres, et ré-appairez si cela échoue. Quand le niveau ne veut toujours pas atteindre ce que vous voulez — ou qu'une seule app est juste trop douce — utilisez le boost par app pour le régler une fois et passer à autre chose.</p>

<p>Fatigué de vous battre avec le curseur de volume à chaque appel ? <a href="https://apps.apple.com/app/id6772792641">Obtenez SoundDial sur le Mac App Store</a> — un achat unique à 14,99 €, sans abonnement, sans pilote — et donnez à chaque app son propre volume.</p>`,
  },
  "mac-volume-resets-itself-tahoe-bug": {
    slug: "mac-volume-resets-itself-tahoe-bug",
    title: "Le volume de votre Mac se réinitialise tout seul sur Tahoe ? Comment le verrouiller pour de bon",
    description: "Depuis macOS Tahoe, de nombreux Mac changent ou réinitialisent soudainement leur volume tout seuls. Voici pourquoi cela arrive, comment stopper les causes intégrées, et comment verrouiller un volume fixe par app pour qu'il reste en place.",
    date: "2026-07-23",
    readTime: "6 min de lecture",
    content: `<p>Si le volume de votre Mac se réinitialise sans cesse depuis macOS Tahoe, le correctif consiste à éliminer les régulateurs automatiques : désactivez l'atténuation audio et « Émettre un son au démarrage », réinitialisez les réglages de son, et reconnectez proprement toute sortie Bluetooth. Pour les niveaux par app qui sautent, verrouillez un volume fixe par app avec un mixeur pour qu'il ne dérive plus jamais.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Le volume de votre Mac se réinitialise tout seul sur Tahoe ? Comment le verrouiller pour de bon" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Pourquoi votre volume change tout seul après Tahoe</h2>

<p>Un volume qui bouge sans que vous y touchiez ressemble à une panne matérielle, mais c'est presque toujours un logiciel qui décide de votre niveau à votre place. macOS a plusieurs comportements automatiques qui poussent ou réinitialisent discrètement la sortie, et les changements de la pile audio de Tahoe en ont rendu quelques-uns plus visibles. Avant de supposer que l'app ou le Mac est cassé, il est utile de savoir exactement quel système s'empare du curseur.</p>

<ul>
<li><strong>Atténuation audio :</strong> macOS baisse les autres sources quand il estime que quelque chose de plus important se joue (Siri, annonces d'accessibilité, notifications). Après la fin du déclencheur, le niveau ne revient parfois pas totalement.</li>
<li><strong>Réinitialisations de handshake Bluetooth :</strong> les AirPods et autres périphériques Bluetooth renégocient le volume à la connexion. Se reconnecter en pleine session peut faire sauter la sortie à une valeur par défaut ou à un niveau bien plus fort/faible.</li>
<li><strong>Changement de périphérique de sortie :</strong> quand vous débranchez des écouteurs, une station d'accueil, ou passez aux haut-parleurs d'un moniteur, chaque sortie mémorise son propre volume. Alterner entre elles ressemble à des réinitialisations « aléatoires ».</li>
<li><strong>Valeurs par défaut par app :</strong> certaines apps (navigateurs, lecteurs vidéo, outils de visioconférence) fixent leur propre gain au lancement ou quand un nouveau flux démarre, écrasant ce que vous aviez.</li>
<li><strong>Son de démarrage et état de connexion :</strong> le carillon de démarrage et l'ouverture de session peuvent ramener le volume système vers un niveau par défaut que vous n'avez pas choisi.</li>
</ul>

<h2>Corrigez d'abord les causes intégrées</h2>

<p>Procédez dans cet ordre. La plupart des plaintes « se réinitialise tout seul » disparaissent une fois l'atténuation et le Bluetooth écartés.</p>

<ul>
<li><strong>Désactivez le son de démarrage.</strong> Réglages Système → Son → décochez <em>Émettre un son au démarrage</em>. Cela empêche le carillon de démarrage de réinitialiser votre niveau de base.</li>
<li><strong>Réduisez ou désactivez les déclencheurs d'atténuation.</strong> Dans Réglages Système → Accessibilité → Contenu énoncé et Siri, désactivez les annonces vocales dont vous n'avez pas besoin. Moins de déclencheurs signifie moins de moments où macOS baisse l'audio et oublie de le rétablir.</li>
<li><strong>Ré-appairez les périphériques Bluetooth problématiques.</strong> Supprimez les AirPods ou écouteurs des réglages Bluetooth et appairez-les à neuf. Un profil obsolète est une cause fréquente de saut de volume à la connexion.</li>
<li><strong>Réglez délibérément chaque périphérique de sortie.</strong> Connectez chaque sortie que vous utilisez (intégrée, moniteur, écouteurs) et réglez son volume une fois. macOS stocke le volume par périphérique, donc les régler tous supprime la surprise quand vous changez.</li>
<li><strong>Réinitialisez Core Audio s'il est coincé.</strong> Ouvrez Terminal et exécutez <code>sudo killall coreaudiod</code>. Cela redémarre le démon audio sans redémarrage complet et efface un état bloqué qui peut provoquer des niveaux erratiques.</li>
<li><strong>Mettez à jour, puis redémarrez.</strong> Les premières versions correctives de Tahoe ont livré des correctifs audio. Assurez-vous d'être sur la dernière version et redémarrez une fois après la mise à jour.</li>
</ul>

<p>Si les réinitialisations s'arrêtent, l'une des causes ci-dessus était la coupable. Si votre volume <em>système</em> est stable mais que des apps individuelles dérivent sans cesse plus fort ou plus faible que le reste, vous avez atteint la limite de ce que les contrôles intégrés peuvent faire.</p>

<h2>La vraie lacune : macOS ne peut pas verrouiller le volume par app</h2>

<p>Voici la partie frustrante. Windows a un mixeur de volume par app depuis des années — vous l'ouvrez, faites glisser le curseur d'une app, et il y reste. macOS n'en a jamais livré. Il y a exactement un curseur de volume système, et chaque app se le dispute. Ainsi, quand un onglet de navigateur diffuse une pub en lecture automatique ou qu'un appel vidéo arrive deux fois plus fort que votre musique, votre seule option est de piloter le volume principal à la main — ce qui est précisément la boucle « pourquoi ça change sans cesse » que vous essayez de fuir.</p>

<blockquote>Le curseur système est une seule molette partagée. Sans mixeur par app, le « régler puis oublier » est impossible sur macOS d'origine — quelque chose vous écrasera toujours.</blockquote>

<h2>Verrouillez un volume fixe par app avec SoundDial</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> ajoute le mixeur par app qui manque à macOS. Il réside dans votre barre des menus et donne à chaque app en cours d'exécution son propre curseur de volume, indépendant du principal. Comme il mémorise le niveau que vous réglez pour chaque app, il résout directement le problème « se réinitialise tout seul » : vous décidez une fois, et cette app s'ouvre à ce volume à chaque fois.</p>

<ul>
<li><strong>Volume indépendant par app :</strong> gardez la musique à 40 % et un appel vidéo à 80 % en même temps, sans jongler avec le curseur principal.</li>
<li><strong>Coupure et boost par app :</strong> coupez instantanément une app bruyante, ou poussez une app trop faible au-delà de 100 % quand son propre audio est trop bas.</li>
<li><strong>Profils de volume :</strong> enregistrez des configurations pour « travail », « jeu » ou « concentration » et basculez tout le mix en un clic.</li>
<li><strong>Atténuation automatique selon vos règles :</strong> baissez les apps en arrière-plan automatiquement quand vous parlez ou qu'une app choisie est active — au lieu que ce soit macOS qui décide.</li>
<li><strong>Changement rapide de sortie :</strong> passez des haut-parleurs aux écouteurs et à l'audio du moniteur depuis la barre des menus sans plonger dans les réglages.</li>
</ul>

<p>C'est un achat unique à 14,99 € sur le Mac App Store — sans abonnement, sans pilote, sans DMG, et sans extension noyau. Comme il est entièrement sandboxé et distribué via l'App Store, vous n'installez pas un kext audio hérité que Tahoe pourrait bloquer à la prochaine mise à jour. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> règle vos niveaux à l'aide d'API prises en charge, de sorte que vos volumes mémorisés survivent aux mises à jour et aux redémarrages.</p>

<h2>De quelle approche avez-vous réellement besoin ?</h2>

<p>Si tout votre volume système saute, commencez par les correctifs intégrés ci-dessus — l'atténuation, le Bluetooth et le son de démarrage expliquent la plupart des cas. Si en revanche le problème est qu'une app est toujours l'exception, ou que vous en avez assez que le curseur principal soit un compromis, un mixeur par app est la seule vraie réponse. macOS n'en ajoutera pas, donc un outil dans la barre des menus est la voie pratique vers un mix qui reste vraiment là où vous l'avez mis.</p>

<p>Fatigué de courir après le curseur de volume sur Tahoe ? <a href="https://apps.apple.com/app/id6772792641">Obtenez SoundDial sur le Mac App Store</a> et verrouillez un volume mémorisé pour chaque app — 14,99 € une fois, sans abonnement, sans pilote.</p>`,
  },
  "control-daw-and-system-volume-separately-mac": {
    slug: "control-daw-and-system-volume-separately-mac",
    title: "Contrôlez le volume de monitoring de votre STAN séparément de l'audio système sur Mac",
    description: "macOS n'a pas de mixeur de volume par app intégré, donc votre STAN et les sons du système partagent un seul niveau. Voici comment contrôler le volume de monitoring de Logic, Ableton ou GarageBand indépendamment de votre navigateur et de vos notifications.",
    date: "2026-07-23",
    readTime: "6 min de lecture",
    content: `<p>macOS n'a pas de mixeur de volume par app intégré, donc votre STAN et tout le reste partagent un seul curseur système. Pour régler votre niveau de monitoring indépendamment des navigateurs, de Slack et des notifications, il vous faut un contrôle du volume par app. Un mixeur de la barre des menus comme <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> donne à Logic, Ableton et GarageBand leur propre volume, séparé de l'audio système.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Contrôlez le volume de monitoring de votre STAN séparément de l'audio système sur Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Pourquoi un seul curseur de volume ruine votre monitoring</h2>

<p>Quand vous produisez, votre STAN n'est qu'une des nombreuses sources de son. Une piste de référence joue dans un onglet de navigateur. Des pings Slack arrivent. Un tutoriel YouTube tourne sur un second écran. Sous Windows, le mixeur de volume vous laisse équilibrer tout cela indépendamment. Sur macOS, Apple n'a jamais livré d'équivalent — les touches de volume et le curseur de la barre des menus déplacent <em>tout</em> d'un coup.</p>

<p>Cela crée un vrai problème pour quiconque mixe à l'oreille. Vous réglez un niveau de monitoring confortable dans Logic, puis une notification déboule au même niveau et vous casse les oreilles. Ou vous baissez le système pour protéger votre audition pendant un passage fort, et maintenant votre piste de référence est trop faible pour être comparée. Votre référence de monitoring n'est plus stable, et une référence stable est tout l'intérêt du mixage.</p>

<blockquote>Faire du monitoring à un niveau constant est l'une des rares habitudes qui améliorent mesurablement vos mixes. Si les sons du système vous forcent sans cesse à bouger le curseur principal, vous perdez cette constance.</blockquote>

<h2>Ce que « volume de STAN séparé » signifie réellement</h2>

<p>Il y a deux choses différentes que les producteurs confondent ici, et il vaut la peine de les distinguer :</p>

<ul>
<li><strong>Niveau de sortie de l'interface / principal</strong> — le bouton physique de votre interface audio ou de votre contrôleur de monitoring. Il fixe votre volume d'écoute absolu et devrait rester en place une fois calibré.</li>
<li><strong>Volume logiciel par app</strong> — le niveau sonore de chaque application <em>avant</em> qu'elle n'atteigne cette sortie. C'est ce qui manque à macOS. Il vous permet de garder la STAN à l'unité tout en baissant Chrome, Musique ou les sons de notification à un niveau de fond en dessous.</li>
</ul>

<p>C'est le second que vous voulez. Le but n'est pas de baisser votre STAN — c'est de baisser tout le reste par rapport à elle, pour que la STAN reste votre source la plus forte et la plus constante et que les distractions restent discrètes en arrière-plan.</p>

<h2>Comment le faire avec un mixeur par app</h2>

<p>Un mixeur de la barre des menus tel que <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> liste chaque app qui joue de l'audio et donne à chacune son propre curseur. Le flux de travail pour un producteur ressemble à ceci :</p>

<ul>
<li><strong>Calibrez votre interface une fois.</strong> Réglez votre interface audio ou votre contrôleur de monitoring à un niveau de référence confortable et reproductible, et laissez-le. C'est votre ancre fixe.</li>
<li><strong>Réglez votre STAN à 100 %.</strong> Dans le mixeur, laissez Logic, Ableton ou GarageBand au volume logiciel maximum pour qu'ils passent à l'unité. Le fader principal de votre STAN fait toujours le mixage fin.</li>
<li><strong>Baissez tout le reste.</strong> Descendez Chrome, Safari, Musique et Slack à un niveau plus bas — disons 40–60 % — pour que les pistes de référence et les messages restent sous votre mix au lieu de rivaliser avec lui.</li>
<li><strong>Coupez ce qui est bruyant.</strong> La coupure par app vous laisse faire taire entièrement un navigateur ou une app de chat sans toucher à votre chaîne de monitoring. Un clic, et votre STAN continue de jouer intacte.</li>
</ul>

<p>Comme le curseur de la STAN ne bouge jamais, votre référence de monitoring reste solide comme le roc pendant toute une session. Vous pouvez pousser une piste de référence pour un A/B rapide, puis la couper, et votre niveau de mix n'a pas bougé d'un décibel.</p>

<h2>Booster une app faible au lieu de baisser les autres</h2>

<p>Parfois le problème est inverse. Un bounce de démo brut, un mémo vocal, ou une référence faible se lit bien en dessous du niveau de votre session. Monter votre interface pour l'entendre signifie que tout le reste est maintenant trop fort. Le <strong>boost de volume</strong> par app vous laisse pousser une seule application faible au-delà de 100 % pour qu'elle corresponde à votre niveau de travail — sans toucher à votre sortie calibrée. C'est la pièce que le mixeur de Windows n'a jamais eue et l'un des outils les plus utiles quand vous auditionnez du matériel extérieur à votre STAN.</p>

<h2>Des profils pour différents types de session</h2>

<p>Votre équilibre idéal n'est pas le même pour chaque tâche. L'enregistrement, le mixage et l'écoute décontractée veulent chacun un mélange différent de niveaux d'apps. Les profils de volume vous laissent enregistrer une configuration et la rappeler instantanément :</p>

<ul>
<li><strong>Mixage :</strong> STAN à 100 %, navigateur et Musique bas, chat coupé.</li>
<li><strong>Écoute de référence :</strong> app de musique ou de streaming montée, STAN baissée.</li>
<li><strong>Appels / collaboration :</strong> app de visioconférence montée, STAN reculée pour qu'elle ne déborde pas dans l'appel.</li>
</ul>

<p>Basculer des profils vaut mieux qu'ajuster à la main cinq curseurs à chaque changement de tâche.</p>

<h2>Atténuation automatique et changement rapide de sortie</h2>

<p>Deux autres choses comptent en studio. L'<strong>atténuation automatique</strong> peut baisser automatiquement les apps en arrière-plan quand une source prioritaire parle ou joue, pour qu'un appel ou un audio important passe toujours. Et le <strong>changement rapide de sortie</strong> depuis la barre des menus vous laisse passer de votre interface à vos moniteurs et à vos écouteurs sans fouiller dans les Réglages Système — une tâche constante quand vous vérifiez un mix sur différents systèmes.</p>

<h2>Pourquoi pas un pilote audio virtuel ?</h2>

<p>Certains outils de routage résolvent cela en installant un pilote audio virtuel au niveau du noyau. Ils sont puissants mais lourds : ils peuvent casser après les mises à jour de macOS, ajouter de la latence et exiger des autorisations système profondes. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> est sandboxé et distribué via le Mac App Store — pas de pilote, pas de DMG, pas de configuration de périphérique agrégé. Pour le contrôle des niveaux par app spécifiquement, c'est une voie bien plus simple que de réarchitecturer votre routage audio.</p>

<p>Prêt à garder votre niveau de monitoring stable pendant que tout le reste reste à sa place ? <a href="https://apps.apple.com/app/id6772792641">Obtenez SoundDial sur le Mac App Store</a> pour un achat unique à 14,99 € et donnez à votre STAN son propre volume.</p>`,
  },
  "audio-hijack-alternative-simple-volume-mac": {
    slug: "audio-hijack-alternative-simple-volume-mac",
    title: "Une alternative plus simple à Audio Hijack pour le volume par app sur Mac",
    description: "Si vous voulez seulement un volume indépendant par app sur macOS, Audio Hijack est excessif. Voici une alternative de la barre des menus plus légère et moins chère qui gère le volume par app, la coupure et le boost sans routage audio.",
    date: "2026-07-23",
    readTime: "5 min de lecture",
    content: `<p>Si tout ce que vous voulez est un volume indépendant par app sur macOS, Audio Hijack est plus d'outil qu'il n'en faut. C'est une suite pro de routage et d'enregistrement audio (environ 79 $) conçue pour la capture, les effets et les graphes de session. Pour simplement baisser une app et en monter une autre, un mixeur léger de la barre des menus comme <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> est plus rapide, moins cher et toujours prêt.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Une alternative plus simple à Audio Hijack pour le volume par app sur Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Pourquoi les gens se tournent vers Audio Hijack au départ</h2>

<p>macOS n'a pas de mixeur de volume par app intégré. Windows en a un depuis des années dans son mixeur de volume, mais sur un Mac les touches de volume et le curseur de la barre des menus ne déplacent qu'une chose : le principal du système. Il n'y a aucun moyen natif de dire « garde Spotify à 40 % mais laisse mon appel vidéo à 100 % ».</p>

<p>Alors les gens cherchent un contournement et tombent sur Audio Hijack. Il <em>peut</em> faire du volume par app, car il peut intercepter et traiter l'audio de n'importe quelle application unique. Mais cette capacité est un effet secondaire de ce pour quoi il est réellement conçu : enregistrer l'audio des apps et du matériel, chaîner des effets, router entre des périphériques virtuels et construire des pipelines de session réutilisables. Il excelle vraiment à cela. C'est juste une réponse lourde à une question légère.</p>

<h2>Là où Audio Hijack devient excessif</h2>

<p>Quelques points ont tendance à frustrer les gens qui voulaient seulement un curseur de volume :</p>

<ul>
<li><strong>Le prix.</strong> Audio Hijack tourne autour de 79 $. C'est correct pour un studio d'enregistrement dans une app ; c'est beaucoup pour baisser un onglet de navigateur.</li>
<li><strong>Il doit rester en marche.</strong> Son traitement par app ne fonctionne que tant que l'app est ouverte et que la session concernée est active. Quittez-le, et vos volumes reviennent en arrière. Vous gardez une station de travail audio complète résidente juste pour maintenir un curseur en place.</li>
<li><strong>Une logique de session.</strong> Vous construisez des sessions avec des blocs et des connexions. Puissant pour la capture, mais c'est beaucoup de charge conceptuelle quand votre but est « cette app plus faible, cette app plus forte ».</li>
<li><strong>L'interface est profonde.</strong> Effets, routage, indicateurs, câblage de blocs — une surface riche que vous ignorerez surtout si vous n'enregistrez jamais rien.</li>
</ul>

<blockquote>Règle empirique : si vous voulez <em>enregistrer ou router</em> l'audio, Audio Hijack gagne son prix. Si vous voulez seulement <em>équilibrer</em> l'audio entre les apps, vous payez pour un atelier alors que vous aviez besoin d'un bouton.</blockquote>

<h2>L'alternative plus simple : un mixeur de volume dans la barre des menus</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> prend la seule tâche pour laquelle la plupart des gens sont venus et ne fait que cela. Il réside dans votre barre des menus. Cliquez sur l'icône et vous obtenez une liste en direct de chaque app qui joue de l'audio, chacune avec son propre curseur. Faites glisser Spotify à 30 %, laissez votre appel à 100 %, coupez Slack entièrement — terminé, aucune session à construire.</p>

<p>Ce qu'il couvre :</p>

<ul>
<li><strong>Volume indépendant par app</strong> — chaque source audio a son propre curseur, ajustable en temps réel.</li>
<li><strong>Coupure par app</strong> — faites taire une app bruyante d'un clic sans toucher à rien d'autre.</li>
<li><strong>Boost de volume par app</strong> — poussez une app faible <em>au-dessus</em> de 100 % quand son propre maximum est encore trop bas. C'est la pièce que le curseur système ne peut jamais faire.</li>
<li><strong>Profils de volume</strong> — enregistrez tout un mix (musique basse, appels forts, notifications coupées) et rappelez-le en un clic pour un contexte donné.</li>
<li><strong>Atténuation automatique</strong> — baissez automatiquement l'audio de fond quand quelque chose de plus important démarre, pour qu'un appel ou une vidéo ne soit pas enterré sous votre playlist.</li>
<li><strong>Changement rapide de sortie</strong> — passez des écouteurs aux haut-parleurs et à d'autres sorties depuis le même menu.</li>
</ul>

<h2>En pratique : un contrôle par app en moins d'une minute</h2>

<p>La différence de configuration est tout l'intérêt. Avec un outil de routage, vous créeriez une session, ajouteriez un bloc source, le câbleriez et garderiez l'app en marche. Ici, c'est essentiellement :</p>

<ul>
<li>Installez <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> depuis le Mac App Store.</li>
<li>Jouez de l'audio dans quelques apps pour qu'elles apparaissent dans la liste.</li>
<li>Cliquez sur l'icône de la barre des menus et faites glisser le curseur de chaque app à votre goût.</li>
<li>Enregistrez éventuellement ce mix comme profil, ou boostez une app trop faible au-delà de 100 %.</li>
</ul>

<p>Comme il est distribué via le Mac App Store, il est sandboxé et s'installe comme n'importe quelle app normale — pas de <code>.dmg</code> à glisser, pas d'extension noyau, pas de pilote audio à approuver dans les réglages de Sécurité, et rien à ré-approuver après une mise à jour de macOS. Ce dernier point compte : les mixeurs basés sur un pilote cassent historiquement lors des mises à niveau de l'OS et exigent de réinstaller un composant au niveau système. Une app App Store sandboxée évite toute cette catégorie de maintenance.</p>

<h2>Lequel choisir ?</h2>

<p>Soyez honnête sur la tâche. Choisissez <strong>Audio Hijack</strong> si vous devez enregistrer l'audio d'apps ou de matériel, appliquer des effets en temps réel, ou construire des graphes de routage entre périphériques virtuels. C'est son terrain de prédilection et il vaut chaque dollar là.</p>

<p>Choisissez un mixeur dédié de la barre des menus si votre vrai besoin est « laisse-moi régler le volume de chaque app indépendamment ». Vous dépenserez 14,99 € une fois au lieu d'environ 79 $, vous sauterez la construction de sessions, et vous obtiendrez le boost, la coupure, les profils et l'atténuation dans un panneau que vous ouvrez depuis la barre des menus. Aucune fonction d'enregistrement que vous n'utiliserez jamais, aucune station de travail tournant en arrière-plan pour maintenir un curseur en place.</p>

<p>La plupart des gens qui ont essayé Audio Hijack pour l'équilibrage du volume résolvaient un petit problème avec un gros outil. Si c'est votre cas, le petit outil convient mieux — et coûte une fraction du prix.</p>

<p><a href="https://apps.apple.com/app/id6772792641">Obtenez SoundDial sur le Mac App Store</a> pour 14,99 €, unique — volume par app, boost, coupure, profils et atténuation automatique, directement depuis votre barre des menus.</p>`,
  },
  "boom-3d-alternative-per-app-volume-mac": {
    slug: "boom-3d-alternative-per-app-volume-mac",
    title: "Alternative à Boom 3D : le volume par app sans le superflu (Mac)",
    description: "Si vous utilisiez Boom 3D surtout pour booster l'audio mais que vous vouliez en réalité un contrôle du volume par app, SoundDial est l'alternative Mac plus épurée : volume indépendant par app, coupure et boost par app, prix unique, sans EQ système ni pilote.",
    date: "2026-07-23",
    readTime: "5 min de lecture",
    content: `<p>Si vous vous êtes tourné vers Boom 3D pour booster le volume mais que vous vouliez en réalité contrôler chaque app séparément, il vous faut un autre outil. Boom 3D est un booster de volume et un égaliseur à l'échelle du système. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> est un mixeur de volume par app ciblé : volume indépendant, coupure et boost pour chaque app, 14,99 € unique, sans EQ, sans pilote.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Alternative à Boom 3D : le volume par app sans le superflu (Mac)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Ce que fait réellement Boom 3D (et ce qu'il ne fait pas)</h2>
<p>Boom 3D est construit autour de trois choses : un boost de volume à l'échelle du système, un égaliseur à 31 bandes et des effets « surround » 3D. Il les applique à <em>tout</em> ce que votre Mac joue en même temps. C'est vraiment utile si votre but est un ordinateur portable plus fort ou une courbe de basses qui vous plaît de manière générale.</p>
<p>Ce pour quoi Boom 3D n'est pas conçu, c'est traiter les apps comme des canaux indépendants. Il n'y a aucun moyen propre de dire « Spotify à 40 %, mon appel vidéo à 100 %, et cet onglet de navigateur coupé ». Son curseur déplace tout le mix. Et comme il installe un pilote audio pour se placer dans le chemin du signal, il touche votre système à un niveau plus bas qu'un utilitaire sandboxé. Il est aussi positionné comme un produit payant avec des cycles de mise à niveau plutôt qu'un petit outil à achat unique.</p>
<blockquote><p>L'histoire courante : les gens installent Boom 3D pour rendre une app faible plus forte, puis réalisent que le vrai problème était que macOS n'a pas du tout de mixeur de volume par app.</p></blockquote>

<h2>La lacune : macOS n'a pas de mixeur de volume</h2>
<p>Cela surprend les gens venus de Windows. Windows a un mixeur de volume par app depuis des années — clic droit sur le haut-parleur, réglez le niveau de chaque app individuellement. macOS ne le livre tout simplement pas. Vous obtenez un volume principal et le curseur interne que chaque app expose. Il n'y a aucun moyen au niveau de l'OS d'équilibrer Slack contre un onglet YouTube contre un jeu.</p>
<p>Alors quand une app de musique noie votre appel, vos seules options natives sont grossières : baisser le principal (ce qui fait taire tout) ou fouiller dans les réglages de chaque app en espérant qu'elle ait un contrôle de volume. Boom 3D ne comble pas cette lacune non plus — il rend tout le mix plus fort, pas chaque app.</p>

<h2>Là où SoundDial s'inscrit</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> est le mixeur manquant. Il réside dans votre barre des menus et donne à chaque app en cours d'exécution sa propre ligne avec son propre curseur. C'est la différence fondamentale avec Boom 3D : au lieu d'un seul effet global, vous obtenez un contrôle par source.</p>
<ul>
<li><strong>Volume indépendant par app</strong> — réglez Spotify à 30 % pendant que votre appel vidéo reste à 100 %.</li>
<li><strong>Coupure par app</strong> — faites taire instantanément une app bruyante sans toucher à rien d'autre.</li>
<li><strong>Boost par app</strong> — si vous aimiez l'astuce du plus-fort-que-100 % de Boom 3D, SoundDial la conserve, mais ciblée sur une seule app au lieu de tout le système. Les apps faibles sont poussées au-delà de leur plafond normal, chacune de son côté.</li>
<li><strong>Profils de volume</strong> — enregistrez un agencement de mixeur (par ex. « jeu », « réunion », « musique ») et rappelez-le en un clic au lieu de rééquilibrer les curseurs à chaque fois.</li>
<li><strong>Atténuation automatique</strong> — baissez automatiquement l'audio de fond quand quelque chose d'important démarre, pour qu'un appel ou un signal de jeu ne soit pas enterré sous la musique.</li>
<li><strong>Changement rapide de sortie</strong> — passez des écouteurs aux haut-parleurs et à d'autres sorties depuis le même menu.</li>
</ul>
<p>Ce que SoundDial ne fait délibérément pas, c'est le reste de la profusion de fonctions de Boom 3D. Pas d'EQ à 31 bandes, pas de traitement pseudo-surround, pas de chaîne d'effets à l'échelle du système. Si vous voulez un EQ de niveau mastering, Boom 3D ou une suite audio dédiée est le bon choix. Si ce pour quoi vous ouvriez réellement Boom 3D était le <em>volume</em>, cette surface est du superflu que vous payez pour transporter.</p>

<h2>Le boost, sans le pilote</h2>
<p>La question du « boost » mérite une réponse directe, car c'est généralement pourquoi les utilisateurs de Boom 3D cherchent des alternatives. Le boost de Boom 3D est global et basé sur un pilote. Le boost de SoundDial est par app et s'exécute dans le modèle de sandbox d'applications d'Apple — il est distribué via le Mac App Store, donc pas d'installeur séparé, pas de pilote au niveau noyau, et aucun composant système résiduel à désinstaller plus tard. Vous obtenez le résultat « rends cette app faible plus forte » sans confier à un pilote le contrôle de tout votre chemin audio.</p>

<h2>Prix : unique vs récurrent</h2>
<p>Boom 3D est une app payante avec son propre modèle de mise à niveau et de licence, et le prix varie selon la plateforme et la version. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> est un achat unique à 14,99 € — achetez-le une fois, gardez-le, sans abonnement ni rachat par version pour que le mixeur continue de fonctionner. Pour un utilitaire que vous laisserez tourner dans la barre des menus chaque jour, un prix fixe vieillit généralement mieux qu'un produit dans lequel vous devez sans cesse réinvestir.</p>

<h2>Lequel choisir ?</h2>
<ul>
<li><strong>Choisissez Boom 3D</strong> si votre vrai besoin est un égaliseur sérieux et des effets audio à l'échelle du système, et que ça ne vous dérange pas d'avoir un pilote audio dans le mix.</li>
<li><strong>Choisissez SoundDial</strong> si vous voulez ce que les utilisateurs de Windows tiennent pour acquis — un vrai mixeur de volume par app — plus un boost ciblé, des profils et l'atténuation automatique, à un prix unique et sans pilote à installer.</li>
</ul>
<p>La plupart des gens qui abandonnent Boom 3D tombent dans le second groupe. Ils ne voulaient pas régler des fréquences ; ils voulaient le navigateur plus faible que l'appel. C'est exactement la tâche pour laquelle SoundDial est conçu.</p>

<p><strong>Vous voulez un contrôle du volume par app sur votre Mac sans le superflu de l'EQ ni d'abonnement ?</strong> <a href="https://apps.apple.com/app/id6772792641">Obtenez SoundDial sur le Mac App Store</a> — 14,99 € une fois, sandboxé, sans pilote, et chaque app obtient son propre curseur.</p>`,
  },
  "mute-everything-except-one-app-mac": {
    slug: "mute-everything-except-one-app-mac",
    title: "Comment couper tout sauf une seule app sur votre Mac",
    description: "macOS n'a pas de mixeur de volume par app, donc faire taire toutes les apps sauf une nécessite un utilitaire. Voici comment entendre uniquement votre appel, votre stream ou votre jeu pendant que tout le reste reste coupé.",
    date: "2026-07-23",
    readTime: "5 min de lecture",
    content: `<p>macOS n'a aucun moyen intégré de couper des apps individuelles, donc pour n'entendre qu'une seule app il vous faut un mixeur de volume par app. Installez <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, ouvrez son mixeur dans la barre des menus, coupez toutes les apps sauf celle que vous voulez entendre, et cette app continue de jouer pendant que le reste devient silencieux instantanément.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Comment couper tout sauf une seule app sur votre Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Pourquoi macOS ne peut pas faire cela tout seul</h2>
<p>Windows a le mixeur de volume depuis plus d'une décennie : clic droit sur l'icône du haut-parleur, et chaque app en cours d'exécution obtient son propre curseur. macOS ne l'a jamais livré. Les touches de volume de votre Mac contrôlent une seule chose, le niveau de sortie principal. Quand vous baissez le système, tout baisse ensemble. Quand vous coupez, tout se coupe.</p>
<p>C'est très bien jusqu'à ce que cinq choses fassent du bruit en même temps. Vous êtes en appel vidéo, mais un onglet de navigateur lit automatiquement une pub, Spotify tourne encore, un jeu fait des bips en arrière-plan, et Slack sonne. Vos seules options natives sont de quitter des apps, de les couper une par une dans les propres réglages de chaque app (si elle a cette option), ou d'arracher vos écouteurs. Rien de tout cela ne vous laisse dire « garde celle-ci, fais taire le reste ».</p>

<h2>La méthode simple : couper le reste avec un mixeur</h2>
<p>Un mixeur par app se place entre vos apps et votre périphérique de sortie et donne à chaque app son propre contrôle de volume et de coupure. Une fois que vous en avez un en marche, isoler une seule app prend quelques secondes :</p>
<ul>
<li>Ouvrez le mixeur depuis votre barre des menus. Vous verrez une liste en direct de chaque app produisant de l'audio.</li>
<li>Trouvez la seule app que vous voulez entendre, votre appel, votre stream, votre jeu.</li>
<li>Coupez tout le reste. Touchez le bouton de coupure à côté de chaque autre app, ou tirez son curseur à zéro.</li>
<li>C'est tout. La seule app que vous avez laissée continue de jouer à plein volume pendant que le reste reste silencieux.</li>
</ul>
<p>Avec <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, chaque app de la liste a son propre curseur et son propre bouton de coupure, donc c'est une poignée de clics. Les nouvelles apps qui se mettent à jouer plus tard apparaissent automatiquement, donc si un son de notification essaie de se faufiler, vous pouvez le faire taire sur-le-champ sans toucher à votre app focalisée.</p>

<blockquote>L'astuce, c'est que couper « tout sauf une » n'est que l'inverse de couper une app. Vous ne faites pas taire votre Mac, vous faites taire le bruit autour de la chose qui vous intéresse vraiment.</blockquote>

<h2>Enregistrez-le comme profil pour ne pas recommencer</h2>
<p>Si c'est une configuration à laquelle vous recourez souvent, la faire à la main à chaque fois devient lassant. Disons que vous voulez toujours votre app d'appel forte et tout le reste éteint pendant les réunions, ou que vous voulez votre stream au premier plan pendant que jeux et navigateurs restent discrets. Un profil de volume stocke ces réglages exacts par app et les réapplique en un clic.</p>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> vous laisse enregistrer des profils comme « Réunion » ou « Stream uniquement », puis basculer vers eux à l'instant où vous en avez besoin. Configurez-le une fois, et isoler votre unique app devient une seule action dans la barre des menus au lieu d'une corvée à cinq curseurs.</p>

<h2>La version plus futée : atténuer automatiquement au lieu de couper franchement</h2>
<p>Parfois vous ne voulez pas que les autres apps disparaissent totalement, vous voulez juste qu'elles s'écartent quand quelque chose de plus important démarre. C'est l'atténuation automatique. Quand votre app prioritaire joue, les apps en arrière-plan baissent automatiquement à un niveau faible, puis remontent quand elle s'arrête.</p>
<p>C'est idéal pour les appels et les streams. Quand quelqu'un se met à parler, votre musique baisse pour que vous l'entendiez, et quand l'appel se termine, la musique remonte d'elle-même. Vous obtenez le résultat « entendre une app clairement » sans couper et rétablir manuellement à chaque changement de situation. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> inclut l'atténuation automatique aux côtés du mixeur manuel, pour que vous puissiez choisir la coupure franche pour le silence total ou l'atténuation pour un arrière-plan plus doux.</p>

<h2>Booster la seule app que vous avez gardée</h2>
<p>Isoler une seule app a un bonus : vous pouvez aussi la rendre plus forte que ce que votre Mac autorise normalement. Certaines apps, surtout les appels vidéo faibles ou les streams mal masterisés, sont à peine audibles même au volume maximum. Un boost par app pousse une app individuelle au-dessus de 100 % sans monter la sortie de votre système, ce qui ne ferait qu'amplifier les apps que vous avez déjà coupées.</p>
<p>Le geste complet est donc : coupez le bruit, gardez votre unique app, et si cette app est trop faible, boostez-la. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> gère les trois dans la même fenêtre de mixeur.</p>

<h2>Ce à quoi vous ne vous engagez pas</h2>
<p>Une inquiétude fréquente avec les outils audio Mac est qu'ils exigent des extensions noyau, des pilotes audio virtuels ou des installeurs douteux téléchargés depuis un site au hasard. C'est une préoccupation légitime, et c'est pourquoi certaines personnes évitent entièrement ces apps.</p>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> est sur le Mac App Store, sandboxé, et s'installe comme n'importe quelle app normale, sans pilote, sans DMG, sans extension système à approuver. C'est un achat unique à 14,99 € plutôt qu'un abonnement, donc vous payez une fois et vous le gardez. Cela compte pour quelque chose que vous laisserez tourner dans votre barre des menus toute la journée.</p>

<h2>Récapitulatif rapide</h2>
<ul>
<li>macOS n'a pas de contrôle natif du volume par app, il vous faut donc un mixeur pour faire cela.</li>
<li>Ouvrez le mixeur, gardez votre unique app, coupez ou mettez à zéro tout le reste.</li>
<li>Enregistrez-le comme profil pour les appels ou streams que vous faites souvent.</li>
<li>Utilisez l'atténuation automatique si vous voulez baisser les apps en arrière-plan plutôt que les couper.</li>
<li>Boostez votre app gardée si elle est trop faible d'elle-même.</li>
</ul>

<p>Vous voulez entendre uniquement ce qui compte et faire taire le reste ? <a href="https://apps.apple.com/app/id6772792641">Obtenez SoundDial sur le Mac App Store</a> et créez votre premier profil couper-tout-le-reste en moins d'une minute.</p>`,
  },
  "different-volume-per-output-device-mac": {
    slug: "different-volume-per-output-device-mac",
    title: "Gardez un volume différent pour les haut-parleurs et les écouteurs sur Mac",
    description: "macOS oublie votre mix de volume par app quand vous passez des haut-parleurs aux écouteurs. Voici pourquoi cela arrive, les limites manuelles, et comment la mémoire de volume par app corrige le problème.",
    date: "2026-07-23",
    readTime: "5 min de lecture",
    content: `<p>macOS mémorise en réalité un volume système distinct pour chaque périphérique de sortie, mais il oublie votre équilibre au niveau des apps chaque fois que vous changez. Ainsi les écouteurs et les haut-parleurs gardent leur propre niveau global, mais dès que vous débranchez, une app hurle et une autre disparaît. La solution est une mémoire de volume par app qui survit aux changements de périphérique, ce pour quoi macOS n'a aucun outil natif.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Gardez un volume différent pour les haut-parleurs et les écouteurs sur Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Ce que macOS mémorise et ce qu'il ne mémorise pas</h2>

<p>Il existe une croyance répandue selon laquelle macOS traite chaque périphérique de sortie de manière identique. Ce n'est pas le cas. Chaque périphérique de sortie stocke son propre volume système. Réglez les haut-parleurs de votre MacBook à 30 % et vos AirPods à 80 %, et macOS garde ces deux nombres séparés. Branchez, débranchez, reconnectez, et chaque périphérique revient là où vous l'aviez laissé.</p>

<p>Alors pourquoi l'expérience semble-t-elle quand même cassée ? Parce que cette mémoire s'arrête au curseur unique et global. macOS a exactement un contrôle de volume pour tout ce qui joue sur un périphérique donné. Il ne mémorise pas le volume des apps individuelles. Quand vous passez des haut-parleurs aux écouteurs, l'équilibre entre Spotify, un appel Zoom et un onglet YouTube n'est pas préservé, car cet équilibre n'a jamais existé. Chaque app partage le même curseur.</p>

<p>Le résultat est la frustration que les gens décrivent comme « un volume différent pour les haut-parleurs et les écouteurs ». Ce qu'ils veulent généralement, ce n'est pas seulement un niveau principal différent par périphérique, mais un mix mémorisé : musique douce, appels forts, notifications baissées, et ce mix intact qu'ils soient sur des haut-parleurs de bureau ou des écouteurs.</p>

<h2>Les contournements manuels et où ils atteignent leurs limites</h2>

<p>Vous pouvez y arriver en partie avec les outils intégrés, et il vaut la peine de connaître le plafond avant de chercher autre chose.</p>

<ul>
<li><strong>Réglez le volume système de chaque périphérique une fois.</strong> Jouez de l'audio via vos haut-parleurs, réglez le niveau, puis basculez la sortie vers les écouteurs et réglez ce niveau. macOS retient les deux. Cela gère le volume principal par périphérique mais rien par app.</li>
<li><strong>Utilisez le volume par app là où l'app le propose.</strong> Spotify, VLC et la plupart des navigateurs ont leur propre volume interne. Vous pouvez atténuer une app forte dans l'app elle-même. Le hic : ce réglage vit dans l'app, pas dans le périphérique, donc il ne change pas quand vous passez aux écouteurs, et la plupart des apps (Slack, Zoom, notifications système, Mail) n'ont aucun contrôle de ce type.</li>
<li><strong>Changez de sortie depuis le Centre de contrôle ou la barre des menus.</strong> Option-clic sur l'icône de volume dans la barre des menus pour passer rapidement d'un périphérique à l'autre. Rapide, mais cela ne déplace que le niveau principal, cela ne restaure pas un mix par app.</li>
</ul>

<p>Cela vous donne un volume principal par périphérique. Ce qu'aucun de ces moyens ne vous donne, c'est un équilibre mémorisé par app qui vous suit entre les périphériques. Cette lacune est exactement là où réside l'agacement, et elle est structurelle : l'OS n'a tout simplement pas de mixeur par app, contrairement à Windows, qui en livre un depuis des années.</p>

<h2>La mémoire de volume par app, et pourquoi le changement de périphérique est le vrai problème</h2>

<p>La solution plus profonde consiste à donner à chaque app son propre volume et à faire persister ces réglages. C'est ce pour quoi un mixeur par app comme <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> est conçu. Il réside dans votre barre des menus, liste chaque app produisant du son, et donne à chacune un curseur indépendant, un bouton de coupure, et même un boost au-delà de 100 % pour les apps faibles.</p>

<p>Le point qui compte pour le problème haut-parleurs contre écouteurs : ces niveaux sont mémorisés. Réglez votre musique à 40 %, vos appels à 90 %, et une app bavarde sur coupé, et <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> garde ce mix. Quand vous débranchez vos écouteurs et revenez aux haut-parleurs, vous ne rééquilibrez pas trois apps à la main à chaque fois.</p>

<p>Les profils de volume vont plus loin. Vous pouvez enregistrer un ensemble nommé de niveaux par app et le rappeler en un clic, de sorte qu'un mix « écouteurs, travail concentré » et un mix « haut-parleurs, réunions » ne soient chacun qu'une seule sélection plutôt qu'une réinitialisation manuelle.</p>

<blockquote><p>Le changement de mentalité : cessez de penser à un curseur principal que vous faites glisser sans cesse, et commencez à penser à un mix enregistré par situation. Le changement de périphérique cesse d'être une corvée de rééquilibrage.</p></blockquote>

<h2>Changement rapide de sortie sans perdre votre mix</h2>

<p>Changer de périphérique devrait être rapide et non destructif. Depuis le même panneau de la barre des menus, vous pouvez changer de périphérique de sortie, donc passer des haut-parleurs aux écouteurs est un clic, et vos niveaux par app suivent au lieu de s'effondrer vers un unique nombre global.</p>

<p>Une fonction connexe qui mérite d'être mentionnée est l'atténuation automatique : quand l'audio arrive sur votre microphone (vous vous mettez à parler, ou un appel commence), les autres apps baissent automatiquement pour que vous soyez entendu, puis reviennent à leur niveau réglé ensuite. C'est le même principe appliqué à l'attention plutôt qu'aux périphériques, une autre chose que macOS ne fera pas tout seul.</p>

<h2>Comment le configurer</h2>

<ul>
<li>Installez <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> depuis le Mac App Store. Il est sandboxé, donc pas de pilote, pas de DMG, ni d'extension noyau à approuver.</li>
<li>Jouez de l'audio dans les apps que vous utilisez le plus pour qu'elles apparaissent dans le mixeur.</li>
<li>Réglez le niveau de chaque app, coupez ce dont vous ne voulez pas, et boostez ce qui est trop faible.</li>
<li>Enregistrez cet agencement comme profil, par exemple un réglé pour les écouteurs et un pour les haut-parleurs.</li>
<li>Quand vous changez de périphérique, rappelez le profil correspondant, ou laissez simplement vos niveaux par app enregistrés se reporter.</li>
</ul>

<p>Le résumé honnête : macOS mémorise bien le volume par périphérique de sortie au niveau principal, mais il ne mémorisera jamais votre mix par app, car il n'a pas de mixeur par app. Si votre vrai but est un équilibre constant entre musique, appels et notifications qui survit à chaque bascule entre haut-parleurs et écouteurs, il vous faut une mémoire par app par-dessus l'OS.</p>

<p>Vous voulez que les haut-parleurs et les écouteurs gardent leur propre mix sans réajuster chaque app ? <a href="https://apps.apple.com/app/id6772792641">Obtenez SoundDial sur le Mac App Store</a> pour un achat unique à 14,99 €, sans abonnement, sans pilote.</p>`,
  },
  "sound-control-alternative-mac": {
    slug: "sound-control-alternative-mac",
    title: "Sound Control Arrêté ? Le meilleur remplacement de volume par application Mac (2026)",
    description: "Sound Control de Static Z Software est abandonné et tombe en panne sur le macOS moderne. Voici pourquoi il a cessé de fonctionner, ce qu'il a fait et le meilleur mélangeur de volume par application vers lequel passer en 2026.",
    date: "2026-07-23",
    readTime: "5 min de lecture",
    content: `<p>Sound Control de Static Z Software est abandonné et n'est plus vendu ni mis à jour, et il échoue de plus en plus sur le macOS moderne car il reposait sur un pilote audio au niveau du noyau qu'Apple a verrouillé. Si vous avez besoin d'un volume par application aujourd'hui, le remplacement le plus propre est <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, un mélangeur Mac App Store en bac à sable sans pilotes.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Sound Control abandonné ? Le meilleur remplacement de volume par application Mac (2026)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Ce que Sound Control a réellement fait</h2>
<p>Le Sound Control a été, pendant des années, la réponse incontournable à une véritable lacune du macOS : il n'y a toujours pas de mélangeur de volume intégré par application sur le Mac. Windows en a un dans son mélangeur de volume depuis Vista, mais macOS ne vous offre qu'un seul curseur principal. Sound Control a comblé ce trou avec un panneau de barre de menus bien rangé qui vous permet de :</p>
<ul>
<li>Définissez un niveau de volume indépendant pour chaque application en cours d'exécution.</li>
<li>Coupez le son des applications individuelles sans toucher au reste du son de votre système.</li>
<li>Boostez les applications silencieuses au-dessus de 100 %.</li>
<li>Appliquez l'égaliseur et les ajustements de balance par application.</li>
<li>Acheminez les applications audio et épinglez vers des périphériques de sortie spécifiques.</li>
</ul>
<p>Pour tous ceux qui ont déjà reçu un appel Zoom alors qu'un onglet YouTube en arrière-plan murmure, ce contrôle par application a été transformateur. Il est devenu un incontournable sur de nombreuses machines d'utilisateurs expérimentés Mac.</p>

<h2>Pourquoi ça a arrêté de fonctionner</h2>
<p>L’histoire technique honnête est importante ici, car elle explique pourquoi il ne s’agit pas d’un bug que quelqu’un peut simplement corriger. Sound Control a fonctionné en installant un pilote audio système – une extension de noyau (kext) qui s'est insérée dans le pipeline audio macOS afin de pouvoir intercepter et remodeler la sortie de chaque application. Ce crochet profond est exactement ce qui a rendu possible les fonctionnalités d’égalisation et d’amplification.</p>
<p>À partir de macOS 10.15 Catalina et en passant par Big Sur et la transition Apple Silicon, Apple a commencé à déprécier les extensions de noyau au profit d'alternatives d'espace utilisateur. Sur les Apple Silicon Mac, le chargement de kext tiers nécessite de réduire la sécurité du système en mode de récupération, et Apple a clairement indiqué que les anciens kext audio étaient en sursis. Static Z Software a finalement arrêté de vendre et de développer Sound Control. Résultat : sur les versions récentes du macOS, l'installation échoue, des problèmes audio ou le pilote refuse tout simplement de se charger sans mise à niveau de sécurité que la plupart des gens ne veulent pas, à juste titre, effectuer.</p>
<blockquote>Ce n’est pas une négligence de la part du développeur. Il s’agit d’un changement au niveau de la plateforme. Apple a fermé la porte au type de pilote audio de bas niveau autour duquel Sound Control a été construit, et aucune mise à jour ne peut le rouvrir complètement.</blockquote>

<h2>Ce qui a changé sur le macOS moderne</h2>
<p>Apple a ajouté une chose pertinente : Core Audio propose désormais une API Tap (introduite dans macOS 14.2 Sonoma) qui permet aux applications de capturer et de traiter l'audio par processus à partir de l'espace utilisateur – pas de kext, pas de rétrogradation de sécurité, pas de redémarrage dans Recovery. Il s’agit de la voie moderne sanctionnée pour l’audio par application, et c’est sur cela qu’un mixeur actuel devrait être construit. Le compromis est honnête : les taps de l'espace utilisateur sont plus limités qu'un ancien pilote de noyau, vous devez donc vous attendre à un volume propre par application, à une sourdine et à une augmentation plutôt qu'à l'égaliseur paramétrique complet par application Sound Control proposé.</p>

<h2>Le meilleur remplacement : SoundDial</h2>
<p>Si vous voulez l'essentiel de ce que Sound Control a fait - un volume indépendant par application - sur un Mac, vous pouvez réellement le maintenir en sécurité et à jour, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> est l'option de migration propre la plus proche en 2026. Il s'agit d'un mélangeur de volume par application avec barre de menus conçu pour la pile audio moderne macOS. Ce qui découle du flux de travail Sound Control :</p>
<ul>
<li><strong>Volume indépendant par application</strong> — un curseur par application en cours d'exécution, directement dans la barre de menus.</li>
<li><strong>Muet par application</strong> - faites taire une application pendant que tout le reste continue de jouer.</li>
<li><strong>Augmentation du volume par application</strong> - poussez une application silencieuse au-dessus de son plafond normal.</li>
<li><strong>Profils de volumes</strong> - enregistrez les configurations de mixage pour différents contextes (appels, musique, jeux) et basculez entre elles.</li>
<li><strong>Esquive automatique</strong> - diminue automatiquement le volume de l'application en arrière-plan, utile lorsque vous commencez à parler ou qu'un appel arrive.</li>
<li><strong>Commutation de sortie rapide</strong> - passez d'un haut-parleur à un casque et à d'autres appareils sans plonger dans les paramètres système.</li>
</ul>
<p>Les différences pratiques importantes pour une migration : <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> est livré via le Mac App Store, est mis en bac à sable et n'installe aucun pilote ni DMG. Cela signifie aucune extension de noyau à approuver, aucun mode de récupération et aucune réduction de la posture de sécurité de votre Mac – les problèmes exacts qui ont tué Sound Control. Il s'agit d'un achat unique de 14,99 €, pas d'un abonnement.</p>

<h2>Comment changer, étape par étape</h2>
<ul>
<li><strong>Désinstallez Sound Control proprement.</strong> Comme il a installé un pilote, utilisez son propre programme de désinstallation s'il est toujours en cours d'exécution ou supprimez les composants de son pilote audio avant d'installer quoi que ce soit de nouveau. Deux crochets audio concurrents peuvent provoquer des problèmes.</li>
<li><strong>Installez SoundDial à partir du App Store.</strong> Aucun redémarrage ou modification de sécurité requis.</li>
<li><strong>Accordez l’autorisation audio demandée.</strong> C'est ce qui lui permet de lire et de contrôler la sortie par application sur le macOS moderne.</li>
<li><strong>Ouvrez le panneau de la barre de menus et définissez les niveaux.</strong> Vos applications en cours d'exécution apparaissent avec des curseurs individuels ; ajustez, coupez ou augmentez selon les besoins.</li>
<li><strong>Enregistrez un profil.</strong> Si vous aviez des configurations Sound Control préférées, recréez-les sous forme de profils afin de pouvoir basculer en un clic.</li>
</ul>

<h2>Des attentes honnêtes</h2>
<p>Si votre seule raison d'utiliser Sound Control était le volume, la sourdine et l'amplification par application, un mélangeur en bac à sable moderne vous couvre entièrement. Si vous vous appuyez fortement sur son égaliseur par application, sachez que l'égalisation profonde était liée à l'ancien modèle de pilote et constitue la fonctionnalité la plus difficile à reproduire proprement selon les règles actuelles d'Apple. Définissez vos attentes en conséquence et vous ne serez pas surpris.</p>

<p>Prêt à récupérer le volume par application sans les soucis du pilote ? <a href="https://apps.apple.com/app/id6772792641">Obtenez SoundDial sur le Mac App Store</a> — 14,99 € uniques, en sandbox, sans abonnement, sans pilotes.</p>`,
  },
  "soundbunny-alternative-mac": {
    slug: "soundbunny-alternative-mac",
    title: "SoundBunny est parti - l'application de volume par application moderne Mac pour le remplacer",
    description: "SoundBunny de Prosoft est abandonné. Voici le mélangeur de volume par application macOS actuel et activement entretenu pour le remplacer, ainsi que comment migrer votre configuration audio par application sans pilotes de noyau.",
    date: "2026-07-23",
    readTime: "5 min de lecture",
    content: `<p>Si le SoundBunny cesse de fonctionner ou n'est plus vendu, le remplacement moderne est <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, un mélangeur de volume par application avec barre de menus conçu pour le macOS actuel. Il vous offre le même travail de base (volume indépendant, sourdine et boost par application) qu'un achat unique de 14,99 € Mac App Store, sans pilote de noyau, DMG ou abonnement à gérer.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — SoundBunny est parti — l&#x27;application moderne de volume par application Mac pour le remplacer" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Qu'est-il arrivé à SoundBunny ?</h2>
<p>SoundBunny était l'utilitaire de volume par application de Prosoft Engineering pour macOS. Il vous permet de définir un niveau de volume différent pour chaque application en cours d'exécution directement à partir de la barre de menus : une musique silencieuse, un appel fort, un navigateur quelque part entre les deux. Pendant des années, il a été l’un des rares outils à combler une lacune qu’Apple n’a jamais comblée.</p>
<p>Le problème est que SoundBunny est un logiciel existant. Il n'a pas suivi le rythme des changements profonds apportés par Apple à l'audio et à la sécurité du macOS : Apple Silicon, le moteur d'exécution renforcé, les règles d'extension du système renforcées et la suppression des anciens crochets audio. Lorsqu'un utilitaire comme celui-ci cesse de recevoir des mises à jour, il finit par tomber en panne : il ne parvient pas à se lancer, perd le contrôle des flux d'applications après une mise à jour du système d'exploitation ou ne peut tout simplement pas être installé proprement sur un Mac moderne. Si c’est là que vous en êtes, vous ne faites rien de mal. C'est l'application qui est derrière, pas vous.</p>

<h2>Pourquoi macOS a toujours besoin d'un mélangeur tiers</h2>
<p>Voici la partie honnête : il s’agit d’une véritable lacune dans macOS, pas d’un bug que vous pouvez corriger dans les paramètres. Windows propose un mélangeur de volume par application depuis plus d'une décennie. macOS n’en a jamais eu. Le curseur de volume du système et les paramètres audio contrôlent votre <em>périphérique de sortie</em> dans son ensemble – chaque application a le même niveau de maîtrise. Il n'existe aucun moyen intégré de dire « garder Safari à 40 % mais Zoom à 100 %. »</p>
<p>C'est pourquoi des outils comme SoundBunny existaient et pourquoi un remplacement est encore nécessaire aujourd'hui. Le besoin n’a pas disparu avec l’application – Apple n’y a toujours pas répondu.</p>

<h2>Le remplacement moderne : SoundDial</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> est un mélangeur de volume par application qui se trouve dans votre barre de menus et fait les choses sur lesquelles les utilisateurs du SoundBunny s'appuient, construit sur le macOS d'aujourd'hui au lieu de celui d'hier. Le chevauchement des fonctionnalités couvre l’essentiel :</p>
<ul>
<li><strong>Volume indépendant par application</strong> — un curseur par application en cours d'exécution, exactement le modèle mental SoundBunny.</li>
<li><strong>Muet par application</strong> - faites taire une seule application bruyante sans toucher à tout le reste.</li>
<li><strong>Augmentation du volume par application</strong> - pousser une application silencieuse <em>ci-dessus</em> 100 % lorsqu'une vidéo ou un appel est enregistré à un niveau trop bas. Le SoundBunny ne pouvait pas amplifier de manière fiable le maximum du système passé sur le macOS moderne ; boost est une véritable mise à niveau ici.</li>
<li><strong>Profils de volumes</strong> - enregistrez un ensemble de niveaux par application (un mix "travail", un mix "jeu") et basculez entre eux au lieu de déplacer les curseurs un par un.</li>
<li><strong>Esquive automatique</strong> - diminue automatiquement le volume de l'application en arrière-plan lorsqu'une autre source audio (comme votre micro lors d'un appel) devient active.</li>
<li><strong>Commutation de sortie rapide</strong> - sautez entre les haut-parleurs, les écouteurs et les autres sorties du même menu.</li>
</ul>

<h2>À quoi ressemble réellement la migration</h2>
<p>Il n'y a pas d'étape d'importation (les niveaux de volume par application ne sont pas un fichier que vous transférez) mais le changement est rapide :</p>
<ul>
<li><strong>Supprimez correctement SoundBunny.</strong> Quittez-le, puis supprimez l'application. S'il a installé une aide ou un élément de connexion, supprimez-le également afin que deux utilitaires ne se disputent pas les mêmes flux audio.</li>
<li><strong>Installez SoundDial à partir du Mac App Store.</strong> Il est mis en bac à sable et distribué dans le magasin, il n'y a donc pas de DMG à monter ni d'avertissement de « développeur non identifié ». Un seul achat, lié à votre identifiant Apple.</li>
<li><strong>Accordez l’accès audio au premier lancement.</strong> macOS demandera la permission à SoundDial de voir l'audio de l'application. Il s’agit de la voie moderne et sanctionnée proposée par Apple : pas d’extension du noyau, pas de redémarrage, pas de réduction de la sécurité du système. Accordez-le et vos applications en cours d'exécution apparaissent sous forme de curseurs.</li>
<li><strong>Reconstruisez votre mix.</strong> Définissez vos applications communes, puis enregistrez cet arrangement en tant que profil afin de ne jamais avoir à le refaire.</li>
</ul>

<h2>Les différences pratiques par rapport au SoundBunny</h2>
<p>La différence la plus importante est que <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> est le logiciel actuel. Il fonctionne nativement sur Apple Silicon, utilise les API audio prises en charge par Apple et est une application Mac App Store, ce qui signifie que les mises à jour arrivent via le magasin et qu'elle est conçue pour survivre aux mises à niveau du système d'exploitation plutôt que de les interrompre. Être en bac à sable signifie également qu'il ne peut pas sortir de sa voie, ce qui est rassurant pour quelque chose qui se situe entre vos applications et vos haut-parleurs.</p>
<p>Quelques mises en garde honnêtes, donc les attentes sont bonnes. Étant donné que SoundDial fonctionne dans le cadre audio d'Apple, le contrôle est idéal pour les applications standard qui transitent par la sortie système normale. Certains logiciels diffusent l'audio via leur propre chemin ou via un périphérique exclusif, et aucun mélangeur de barre de menus - SoundBunny inclus - ne peut entièrement les gérer. Et le volume par application est intrinsèquement une couche logicielle au-dessus de macOS ; ce n'est pas un mixeur matériel. Dans ces limites réelles, il fait le travail que faisait le SoundBunny.</p>

<blockquote>Si vous êtes passé d'un Windows à un Mac et que vous attendiez un mélangeur de volume par application, c'est l'outil qui comble cette lacune - et c'est maintenant celui qui est réellement maintenu.</blockquote>

<p>SoundBunny a connu un bon parcours, mais c'est un héritage. Si vous avez besoin d'un volume, d'une mise en sourdine et d'un boost par application sur un Mac moderne, <a href="https://apps.apple.com/app/id6772792641">obtenez SoundDial sur le Mac App Store</a> — 14,99 € une fois, sans abonnement, ni chauffeur.</p>`,
  },
  "boom-2-alternative-per-app-volume-mac": {
    slug: "boom-2-alternative-per-app-volume-mac",
    title: "Alternative Boom 2 pour Mac : volume par application sans vente incitative Boom 3D",
    description: "Boom 2 est un héritage et continue de vous pousser vers Boom 3D. Si vous souhaitez simplement un volume par application et un simple boost sur le macOS moderne, voici une alternative ciblée et son fonctionnement.",
    date: "2026-07-23",
    readTime: "5 min de lecture",
    content: `<p>Si vous avez aimé Boom 2 pour un boost à l'échelle du système mais que vous voulez un simple <strong>par application</strong> volume sur un Mac actuel, la réponse honnête est que le Boom 2 est un héritage et n'est plus le bon outil. Une alternative ciblée est <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, un mélangeur de barre de menus qui donne à chaque application son propre curseur de volume, sa sourdine et son boost, pour 14,99 € une fois, sans aucune pression vers un package plus important.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Alternative Boom 2 pour Mac : volume par application sans vente incitative Boom 3D" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Pourquoi Boom 2 ne convient plus</h2>
<p>Boom 2 était une application très appréciée pour une raison spécifique : elle augmentait le volume global de votre Mac au-delà du maximum du système et ajoutait un égaliseur. Il l'a fait à l'échelle du système, et non par application. C’était bien en 2015. En 2026, il y a deux problèmes.</p>
<p>Premièrement, c'est un héritage. Global Delight a clairement déplacé son énergie vers Boom 3D, et si vous ouvrez la page produit Boom 2, vous vous retrouverez presque immédiatement poussé vers l'application la plus récente et la plus chère. Boom 2 existe toujours, mais c'est un tremplin que le vendeur utilise pour vendre le Boom 3D, et non un produit qui suscite un amour actif.</p>
<p>Deuxièmement, et plus important encore : Boom 2 n’a jamais été un mélangeur de volume par application. Il élève et façonne une sortie principale. Si votre véritable problème est qu'un ping Slack est plus fort que votre musique ou qu'un onglet de navigateur noie un appel, Boom 2 ne résout pas ce problème. Cela rend tout plus fort ensemble. C'est un travail différent.</p>

<h2>Que signifie réellement « volume par application » sur macOS ?</h2>
<p>Voici le contexte honnête que la plupart des résumés alternatifs ignorent : macOS n'a aucun mélangeur de volume intégré par application. Le Windows en possède un depuis des années : cliquez avec le bouton droit sur le haut-parleur, ouvrez le mélangeur de volume et réglez Chrome sur 40 % et Spotify sur 80 %. Apple n'a jamais expédié ça. La touche de volume macOS ne déplace qu'un seul niveau principal.</p>
<p>Ainsi, lorsque vous recherchez une « alternative au Boom 2 », ce que vous recherchez souvent n’est pas un Mac plus bruyant – c’est le contrôle par application que les utilisateurs du Windows tiennent pour acquis. Il s'agit d'une véritable lacune dans le système d'exploitation, et non de quelque chose que Boom 2 ou une application unique a oublié de créer.</p>

<h2>Où s'adapte SoundDial</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> est construit spécifiquement pour cet écart. Il se trouve dans la barre de menus et répertorie les applications en cours de lecture audio, chacune avec son propre curseur. Vous définissez des niveaux par application au lieu de pousser un contrôle principal et d'espérer le meilleur.</p>
<p>Ce qu'il fait :</p>
<ul>
<li><strong>Volume indépendant par application</strong> — faites taire le navigateur, conservez la musique là où vous la souhaitez, sans compromis global.</li>
<li><strong>Muet par application</strong> - faites taire une application bruyante sans rien toucher d'autre.</li>
<li><strong>Boost par application</strong> - poussez une application individuelle au-delà de son plafond normal lorsqu'une vidéo ou un appel est enregistré trop silencieusement. C'est la pièce que les fans de Boom 2 manquent généralement, sauf qu'ici, elle est ciblée sur une application plutôt que sur l'ensemble du système.</li>
<li><strong>Profils de volumes</strong> — enregistrez des mises en page telles que « focus », « réunion » ou « jeu » et changez en un clic.</li>
<li><strong>Esquive automatique</strong> — baisse automatiquement les autres applications lorsque vous commencez à parler, utile pour les appels et l'enregistrement.</li>
<li><strong>Commutation de sortie rapide</strong> - sautez entre les haut-parleurs, les écouteurs et les autres sorties du même menu.</li>
</ul>

<h2>Comment le configurer</h2>
<p>Le flux de travail est court :</p>
<ul>
<li>Installer <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> du Mac App Store - pas de DMG, pas de pilote, pas de redémarrage.</li>
<li>Cliquez sur l'icône de la barre de menu pour voir toutes les applications produisant actuellement du son.</li>
<li>Faites glisser le curseur de chaque application jusqu'au niveau souhaité ; couper ou amplifier individuellement selon les besoins.</li>
<li>Enregistrez l'arrangement en tant que profil si vous souhaitez le réutiliser ultérieurement.</li>
</ul>
<p>Parce qu'il est expédié via le App Store, il est mis en bac à sable et s'installe proprement. Cela mérite d'être souligné, car certains outils audio plus anciens reposaient sur des extensions de noyau ou des pilotes audio virtuels – le genre de choses auxquelles le macOS moderne résiste de plus en plus. SoundDial ne vous demande pas d'installer un pilote ni de réduire les paramètres de sécurité.</p>

<h2>Une limitation honnête</h2>
<p>Le boost par application est réel mais pas magique. Si l'audio source d'une application est vraiment faible ou mal enregistré, son amplification augmente le bruit de fond avec le signal, de sorte qu'un contenu très silencieux peut sembler sifflant lorsqu'il est poussé fort. Il s'agit d'une limite physique d'amplification, et non d'un défaut d'une application particulière : le boost du système Boom 2 présentait le même compromis. Considérez le boost comme une marge pour des cas pratiques, et non comme un sauvetage en cas de son cassé.</p>

<h2>Boom 2 vs un mélangeur ciblé</h2>
<p>Si ce que vous avez aimé du Boom 2 était le volume sonore à l'échelle du système plus un égaliseur, et que vous ne vous souciez pas du contrôle par application, Boom 3D est le successeur prévu du fournisseur - c'est une voie juste, et nous ne prétendrons pas le contraire. Mais si vous avez essayé Boom 2 et réalisé que ce que vous vouliez réellement était de désactiver ou d'augmenter une application sans tout déplacer, un ensemble EQ-and-boost n'est pas la bonne forme d'outil.</p>
<blockquote>Boom 2 rend l'ensemble du Mac plus fort. Un mélangeur par application vous permet de décider quelle application est la plus bruyante. Ceux-ci résolvent différents problèmes.</blockquote>
<p>La différence de prix mérite également d’être mentionnée clairement. SoundDial coûte 14,99 € une fois. Il n'y a pas d'abonnement, pas d'essai qui se transforme en un plan plus important et aucun chemin intégré à l'application ne vous dirige vers un niveau plus cher. Vous achetez le mixeur, vous possédez le mixeur.</p>

<p>Si le volume par application – et non un égaliseur à l’échelle du système – est ce que vous recherchiez vraiment, <a href="https://apps.apple.com/app/id6772792641">essayez le SoundDial sur le Mac App Store</a> et définissez vos niveaux comme macOS aurait dû vous le permettre depuis le début.</p>`,
  },
  "finetune-vs-sounddial-mac": {
    slug: "finetune-vs-sounddial-mac",
    title: "FineTune vs SoundDial : volume open source gratuit vs volume par application payant sur Mac",
    description: "FineTune est une application de volume par application gratuite et open source pour Mac ; SoundDial est une application App Store payante et en bac à sable avec boost, profils et support. Voici une comparaison honnête pour vous aider à choisir.",
    date: "2026-07-23",
    readTime: "6 min de lecture",
    content: `<p>FineTune est un mélangeur de volume par application gratuit et open source pour macOS, donc si le prix est votre seule préoccupation, c'est une véritable option. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> est une application Mac App Store payante (14,99 €, unique) qui ajoute une augmentation du volume par application, des profils enregistrés, une réduction automatique et une prise en charge du fournisseur. Le véritable choix est entre le libre et le bricolage et le bac à sable et pris en charge.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — FineTune vs SoundDial : volume open source gratuit ou volume par application payant sur Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Le problème que les deux applications résolvent</h2>

<p>macOS n'a toujours pas de mélangeur de volume intégré par application. Le Windows en possède un depuis des années : cliquez avec le bouton droit sur l'icône du haut-parleur, ouvrez le mélangeur de volume et chaque application obtient son propre curseur. Sur un Mac, vous obtenez exactement un curseur de volume système pour tout : votre musique, un appel vidéo, le YouTube, les sons de notification et un jeu le partagent tous. Si votre appel est trop faible et que le Spotify est trop fort, votre seule « solution » consiste à mettre complètement le Spotify en sourdine.</p>

<p>FineTune et SoundDial existent pour combler cette lacune. Ils donnent à chaque application en cours d'exécution son propre contrôle du volume afin que vous puissiez, par exemple, maintenir une réunion à 100 % tout en réduisant la musique de fond à 20 %, sans toucher au curseur principal.</p>

<h2>Ce que FineTune réussit</h2>

<p>FineTune est une application open source plus récente et gratuite dans l'esprit de SoundSource. Soyons justes quant à ses atouts, car ils sont réels :</p>

<ul>
  <li><strong>Cela ne coûte rien.</strong> Pas de licence, pas d'essai, pas de problème de mise à niveau.</li>
  <li><strong>La source est ouverte.</strong> Vous pouvez lire exactement ce qu'il fait, vérifier sa confidentialité et, si vous connaissez Swift, le modifier ou le créer.</li>
  <li><strong>C'est une initiative communautaire.</strong> Les bogues peuvent être corrigés par n’importe qui et le code survit à n’importe quelle entreprise.</li>
  <li><strong>Il couvre le besoin essentiel.</strong> Volume indépendant par application, qui est la fonctionnalité que 90 % des personnes recherchent réellement.</li>
</ul>

<p>Si votre seule exigence est « laissez-moi refuser une application sans tout refuser » et que vous êtes à l'aise avec les logiciels fournis sans service d'assistance formel, FineTune est une réponse légitime. Le recommander ici n’est pas une concession, c’est honnête.</p>

<h2>Les compromis honnêtes de la voie du bricolage</h2>

<p>La gratuité et l'open source entraînent des coûts réels qui n'apparaissent pas sur l'étiquette de prix. Il ne s’agit pas spécifiquement de FineTune, mais de la nature de l’approche :</p>

<ul>
  <li><strong>L'installation est manuelle.</strong> Les outils audio open source sont généralement distribués sous forme de version téléchargée ou de formule Homebrew, et non via le App Store. Vous installez en dehors de l'examen d'Apple et vous devez le maintenir à jour.</li>
  <li><strong>L’interception audio par application est fragile par nature.</strong> Le routage de l'audio d'une autre application est un travail approfondi du système. Lorsqu'Apple envoie une mise à jour macOS qui modifie la pile audio, ces outils peuvent tomber en panne jusqu'à ce que quelqu'un les corrige. Avec un projet de bénévolat, « quelqu'un » peut être occupé ce mois-là.</li>
  <li><strong>Le support est le meilleur effort.</strong> Si quelque chose tombe en panne, votre recours est un problème GitHub et une attente. Il n'y a aucune réponse garantie et personne n'est obligé de résoudre le problème.</li>
  <li><strong>La portée des fonctionnalités dépend de ce que les responsables fournissent.</strong> Le contrôle du volume principal est probablement couvert ; les extras dépendent entièrement du temps du contributeur.</li>
</ul>

<blockquote>Le cadrage honnête : FineTune échange de l’argent contre la responsabilité de la maintenance. Vous économisez 14,99 € et prenez le risque qu'une mise à jour du système d'exploitation le laisse en panne jusqu'à ce que la communauté rattrape son retard.</blockquote>

<h2>Où SoundDial est différent</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> prend le commerce inverse. Vous payez une seule fois et en retour, vous obtenez un produit App Store avec un fournisseur derrière lui et un ensemble de fonctionnalités plus large construit sur le volume par application :</p>

<ul>
  <li><strong>Volume et sourdine par application</strong> - la référence partagée fournie par les deux applications.</li>
  <li><strong>BOOST du volume par application</strong> — poussez une application trop silencieuse au-delà de 100 %. Utile pour les applications avec une sortie audio faible où refuser les autres ne suffit toujours pas.</li>
  <li><strong>Profils de volumes</strong> - enregistrez des mix entiers ("Meeting", "Focus", "Gaming") et basculez en un clic au lieu de réinitialiser les curseurs à chaque fois.</li>
  <li><strong>Esquive automatique</strong> - réduisez automatiquement les applications en arrière-plan lorsque vous parlez ou lorsqu'une application choisie devient active, afin que les appels soient interrompus sans manipulation manuelle.</li>
  <li><strong>Commutation de sortie rapide</strong> - passez d'un haut-parleur à un casque et à d'autres sorties à partir de la barre de menus.</li>
</ul>

<p>Il est tout aussi important <em>comment</em> il est expédié. SoundDial est mis en bac à sable et distribué via le Mac App Store — pas de DMG séparé, pas de pilotes de noyau, pas d'installation de pilote audio. Les mises à jour arrivent via le App Store comme n'importe quelle autre application, et il y a un véritable développeur à qui envoyer un e-mail en cas de problème. C'est la valeur concrète des 14,99 € : pas seulement plus de fonctionnalités, mais quelqu'un qui est responsable de leur fonctionnement dans les versions de macOS.</p>

<h2>Une mise en garde honnête qui s'applique aux deux</h2>

<p>Aucune application tierce ne peut transformer le système audio du macOS en Volume Mixer du Windows, car Apple n'expose pas d'API publique propre pour l'audio par application. Chaque outil de cette catégorie – gratuit ou payant, ouvert ou fermé – contourne cette limitation en utilisant des techniques audio au niveau du système. Cela signifie que les FineTune et SoundDial peuvent être affectés par des modifications audio majeures du macOS. La différence est de savoir qui est responsable du correctif par la suite : une communauté de bénévoles ou un fournisseur rémunéré dont le produit en dépend.</p>

<h2>Lequel devriez-vous choisir ?</h2>

<ul>
  <li><strong>Choisissez FineTune si</strong> vous voulez un coût nul, valorisez la transparence open source, n'avez besoin que d'un volume de base par application, êtes à l'aise pour l'installation en dehors du App Store et êtes autonome en cas de panne.</li>
  <li><strong>Choisissez SoundDial si</strong> vous voulez une installation App Store en un clic, des extras comme le boost, les profils et l'auto-ducking, ainsi que l'assurance des mises à jour et du support d'un fournisseur avec un skin dans le jeu.</li>
</ul>

<p>Les deux sont valables. Cela dépend vraiment de savoir si vous préférez dépenser de l’argent ou attirer votre attention. Si vous préférez acheter une application sandbox prise en charge et ne plus jamais y penser, <a href="https://apps.apple.com/app/id6772792641">obtenez SoundDial sur le Mac App Store</a> pour 14,99 € uniques — pas d'abonnement, pas de pilotes, pas de DMG.</p>`,
  },
  "background-music-vs-sounddial-mac": {
    slug: "background-music-vs-sounddial-mac",
    title: "Background Music vs SoundDial : le mélangeur de volume gratuit Mac est-il suffisant ?",
    description: "Un face-à-face équitable entre l’application gratuite Background Music et la payante SoundDial. Où l'approche du pilote virtuel gratuit fonctionne, où elle échoue et quand un mélangeur natif à 14,99 € en vaut la peine.",
    date: "2026-07-23",
    readTime: "6 min de lecture",
    content: `<p>Background Music est gratuit et vraiment bon dans les bases : il donne à chaque application son propre curseur de volume et peut mettre automatiquement la musique en pause lorsqu'une autre application est en cours de lecture. Si c'est tout ce dont vous avez besoin, utilisez-le. Mais il repose sur un pilote audio virtuel qui peut tomber en panne après les mises à jour de macOS et qui manque de boost, de profils et de commutation de sortie par application. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> échange de l'argent contre une alternative sans pilote, en bac à sable et prise en charge.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Background Music vs SoundDial : le mélangeur de volume gratuit Mac est-il suffisant ?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Tout d’abord, la vérité honnête sur macOS</h2>
<p>macOS n'a pas de mélangeur de volume intégré par application. Le Windows en possède un depuis plus d'une décennie dans son mélangeur de volume, mais sur le Mac, le curseur système déplace tout en même temps. Il n'existe aucune API prise en charge par Apple qui permette à une application tierce d'intercepter et de rééquilibrer proprement les flux d'applications individuels. Cette seule lacune est la raison pour laquelle des outils comme Background Music et SoundDial existent, et c'est la cause première de la plupart des compromis ci-dessous.</p>

<h2>Ce que Background Music fait bien</h2>
<p>Background Music est une application de barre de menu open source qui existe depuis des années et qui a des adeptes fidèles pour une bonne raison. Cela vous donne :</p>
<ul>
<li><strong>Volume indépendant par application</strong> - la fonctionnalité principale. Baissez le niveau du Spotify tout en gardant un appel fort.</li>
<li><strong>Pause automatique</strong> - il peut mettre votre lecteur de musique en pause lorsque l'audio démarre ailleurs, ce qui est une touche agréable pour les réunions.</li>
<li><strong>Un volume d'appareil qui vous suit</strong> et une interface simple et sans fioritures.</li>
<li><strong>Coût zéro</strong> — c'est gratuit et le code est public.</li>
</ul>
<p>Pour beaucoup de gens, cela suffit. Si toute votre liste de souhaits est de « rendre une application bruyante plus silencieuse sans toucher aux autres », Background Music la couvre et vous ne devriez pas payer pour quelque chose dont vous n'avez pas besoin. Ici, il est important d’être juste : il s’agit d’un outil légitimement utile.</p>

<h2>Où l’approche libre montre ses coutures</h2>
<p>Le piège est <em>comment</em> Background Music atteint un volume par application. Étant donné que macOS ne donne aucun chemin officiel, il installe un pilote audio virtuel (une version modifiée de l'ancienne approche Soundflower) qui achemine l'audio de votre système via lui-même. Cette architecture est intelligente, mais elle entraîne des coûts réels :</p>
<ul>
<li><strong>Il se brise après les mises à jour de macOS.</strong> Les pilotes audio virtuels sont profondément ancrés dans le système et les versions majeures de macOS les ont historiquement désactivés ou déstabilisés. Les utilisateurs signalent régulièrement du silence, une distorsion ou la nécessité de réinstaller après la mise à niveau. Lorsqu'il tombe en panne, vous êtes souvent seul.</li>
<li><strong>L'installation est plus lourde.</strong> Vous ajoutez un périphérique audio adjacent au noyau à votre Mac, pas seulement une application. Une désinstallation propre peut être délicate.</li>
<li><strong>Il devient votre périphérique de sortie par défaut.</strong> Étant donné que tout est acheminé via l'appareil virtuel, certaines applications professionnelles d'audio, de conférence ou de jeu peuvent se comporter de manière étrange, et changer votre sortie réelle est une étape supplémentaire.</li>
<li><strong>Le développement est au rythme de la communauté.</strong> Il n’y a pas de bureau d’assistance. Les correctifs arrivent lorsqu'un volontaire a le temps, ce qui, pour un outil audio qui peut soudainement devenir silencieux, représente un risque important.</li>
</ul>
<p>Rien de tout cela ne rend Background Music mauvais. Cela en fait un outil gratuit avec les compromis d'un outil gratuit.</p>

<h2>Ce que vous payez réellement avec SoundDial</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> est une application Mac App Store, qui façonne ce qu'elle est. Étant donné que les applications App Store sont en bac à sable et ne peuvent pas fournir le type de pilote virtuel de bas niveau utilisé par Background Music, SoundDial est conçu pour fonctionner sans installer de périphérique audio séparé ou DMG. Cela signifie :</p>
<ul>
<li><strong>Aucune bizarrerie de pilote virtuel.</strong> Il n'y a aucun périphérique de sortie supplémentaire détournant votre chaîne audio, et rien à réinstaller lorsque le système change.</li>
<li><strong>Il survit bien plus gracieusement aux mises à jour macOS.</strong> La distribution App Store et le sandboxing signifient qu'il est construit sur les chemins pris en charge et est mis à jour via le magasin, de sorte qu'une mise à niveau du système d'exploitation est beaucoup moins susceptible de vous laisser silencieux.</li>
<li><strong>Augmentation du volume par application.</strong> Il s'agit d'une réelle différence de fonctionnalités : le SoundDial peut pousser une application <em>ci-dessus</em> 100 % pour les sources silencieuses : un podcast enregistré trop bas, un appel vidéo étouffé. Background Music atténue seulement.</li>
<li><strong>Profils de volumes.</strong> Enregistrez un ensemble de niveaux par application (« Réunion », « Musique », « Jeux ») et basculez en un clic au lieu de faire glisser les curseurs à chaque fois.</li>
<li><strong>Esquivement automatique.</strong> Réduisez automatiquement le volume des autres applications lors de la lecture d'une source choisie - une version plus configurable de l'idée de pause automatique.</li>
<li><strong>Commutation de sortie rapide</strong> intégré dans la barre de menus, ainsi que la sourdine par application.</li>
<li><strong>Un vrai soutien.</strong> Il s'agit d'un produit payant avec une personne responsable en cas de problème.</li>
</ul>

<h2>La décision honnête</h2>
<blockquote>Si vous voulez un volume gratuit et n'avez besoin que d'un volume de base par application et que vous êtes à l'aise pour résoudre les problèmes après les mises à jour de macOS, Background Music est un choix solide. Si vous voulez du boost, des profils, du ducking, une commutation de sortie, pas de fragilité du pilote virtuel et quelqu'un à qui envoyer un e-mail en cas de panne, SoundDial vaut 14,99 €.</blockquote>
<p>Quelques départages concrets. Si vous utilisez régulièrement des sources trop silencieuses, le boost justifie à lui seul le prix : le Background Music ne peut tout simplement pas rendre le son plus fort que la source. Si vous redoutez le pari annuel « mon audio survivra-t-il à la mise à jour », l'application de magasin en bac à sable supprime cette anxiété. Si vous aimez les scènes préparées et oubliées, les profils évitent de réelles frictions. Et il s'agit d'un montant unique de 14,99 €, pas d'un abonnement, la comparaison est donc un achat unique par rapport au temps passé à entretenir un pilote gratuit.</p>
<p>À l’inverse, si vous êtes un bricoleur qui aime l’open source, souhaite lire le code et refuse généralement une seule application, économisez votre argent. Les deux outils résolvent le même problème principal ; ils diffèrent par leur robustesse, la profondeur de leurs fonctionnalités et par qui vous surprend lorsque macOS change en dessous d'eux.</p>

<p>Vous voulez un volume par application sans le pari du pilote virtuel ? <a href="https://apps.apple.com/app/id6772792641">Obtenez SoundDial sur le Mac App Store</a> — un prix unique de 14,99 €, en bac à sable, sans pilote, avec boost, profils et auto-ducking intégrés.</p>`,
  },
  "is-soundsource-worth-it-mac": {
    slug: "is-soundsource-worth-it-mac",
    title: "Le SoundSource vaut-il 39 $ ? Une alternative unique et moins chère au Mac",
    description: "SoundSource est un puissant outil audio Mac à ~ 39 $, mais c'est excessif si vous n'avez besoin que d'un volume et d'une augmentation par application. Voici une comparaison honnête et une alternative unique à 14,99 €.",
    date: "2026-07-23",
    readTime: "5 min de lecture",
    content: `<p>SoundSource en vaut la peine si vous avez besoin de sa boîte à outils complète : volume par application, égaliseur 10 bandes par application, routage audio entre appareils et effets à l'échelle du système. Mais à environ 39 $, c'est exagéré si vous souhaitez principalement un volume par application, une sourdine par application et une augmentation du volume. Pour ce travail plus restreint, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> coûte 14,99 € une fois.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Le SoundSource vaut-il 39 $ ? Une alternative unique et moins chère au Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Ce que fait réellement SoundSource</h2>
<p>Le SoundSource de Rogue Amoeba est un logiciel véritablement excellent, et il est important d'être juste à ce sujet. Ce n'est pas seulement un mélangeur de volume. Cela vous donne :</p>
<ul>
<li><strong>Contrôle du volume par application</strong> dans la barre de menus, la fonctionnalité recherchée par la plupart des gens.</li>
<li><strong>Un égaliseur complet 10 bandes</strong> vous pouvez appliquer par application ou à l'échelle du système, ainsi que d'autres effets audio (via les plugins Audio Unit).</li>
<li><strong>Routage sortie/entrée</strong>, y compris l'envoi d'une seule application vers un périphérique de sortie différent du reste du système.</li>
<li><strong>Changement rapide d'appareil</strong> et des préréglages d'égalisation spécifiques au casque.</li>
</ul>
<p>Si vous êtes un podcasteur, un streamer ou un passionné de l'audio qui souhaite régler l'égaliseur de vos écouteurs, rediriger le son d'une application vers un haut-parleur séparé ou empiler les effets Audio Unit, SoundSource gagne son prix. Rien ici n'y fait obstacle.</p>

<h2>La question du prix</h2>
<p>SoundSource est une licence unique payante d'environ 39 $ (le prix varie selon la version et les promotions). Il ne s'agit pas d'un abonnement récurrent au sens de Netflix, mais il suit le modèle classique des applications payantes : vous achetez une version majeure, et les futures mises à niveau majeures sont généralement des mises à niveau payantes à prix réduit plutôt que gratuites pour toujours. Sur plusieurs années, cela représente plus qu'un seul achat. Pour de nombreux utilisateurs de Mac, la question honnête est la suivante : est-ce que je paie 39 $ pour une suite de routage et d'égalisation alors que tout ce que je touche vraiment, ce sont les curseurs de volume par application ?</p>

<blockquote>Si vous avez ouvert SoundSource et utilisé uniquement les curseurs de volume et les boutons de sourdine, vous payez pour une suite pour en utiliser un tiroir.</blockquote>

<h2>Pourquoi le problème existe</h2>
<p>Voici la cause honnête : macOS n’a pas de mixeur de volume intégré par application. Le Windows en possède un depuis des années, mais sur le Mac, le volume du système est tout ou rien. Il n'existe aucun moyen fourni par Apple pour maintenir le Spotify silencieux pendant qu'un appel vidéo reste fort, ou pour désactiver une application sans toucher à tout le reste. Cet écart est exactement la raison pour laquelle des outils comme SoundSource et <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> exister. Il s'agit d'une véritable limitation du système d'exploitation, et non d'un problème à résoudre.</p>

<h2>Où une option plus légère et moins chère convient</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> est un mélangeur de volume par application avec barre de menus conçu pour le cas commun plutôt que pour le cas pro-audio. Il couvre :</p>
<ul>
<li><strong>Volume indépendant par application</strong> - abandonnez votre musique pendant qu'une réunion reste au niveau maximum.</li>
<li><strong>Muet par application</strong> — faites taire une application sans désactiver le Mac.</li>
<li><strong>Augmentation du volume par application</strong> - poussez une application silencieuse au-dessus de ses 100 % normaux lorsque la source est tout simplement trop faible.</li>
<li><strong>Profils de volumes</strong> — enregistrez un ensemble de niveaux par application (par exemple, une disposition « focus » ou « appel ») et changez en un clic.</li>
<li><strong>Esquive automatique</strong> - réduisez automatiquement les autres applications lorsque vous commencez à parler ou lorsqu'une application choisie est en cours de lecture.</li>
<li><strong>Commutation de sortie rapide</strong> - passez d'un haut-parleur à un casque et à d'autres appareils à partir de la barre de menus.</li>
</ul>
<p>C'est <strong>14,99 € une fois</strong>, vendu via le Mac App Store, il est donc en bac à sable et il n'y a pas de DMG séparé, pas d'extension de noyau et pas de pilote audio à installer. Vous le téléchargez comme n’importe quelle application App Store et il se met à jour via la boutique.</p>

<h2>Une comparaison honnête</h2>
<p>Soyez lucide sur le compromis. SoundSource fait plus que SoundDial, et si l'un des éléments suivants vous intéresse, SoundSource est le meilleur achat :</p>
<ul>
<li>Vous voulez une vraie application ou un vrai système <strong>égaliseur</strong> et effets d'unité audio.</li>
<li>Vous devez <strong>acheminer une seule application vers un autre périphérique de sortie</strong> que tout le reste.</li>
<li>Vous comptez sur <strong>préréglages d'égalisation spécifiques au casque</strong> et un traitement audio à grain fin.</li>
</ul>
<p>SoundDial n'effectue pas d'égalisation ou de routage de périphérique par application. C'est volontairement plus étroit. En retour, cela vous offre un prix inférieur, une empreinte plus légère et une interface de barre de menus ciblée pour ce que la plupart des gens voulaient réellement : garder chaque application au niveau que vous choisissez, avec un boost et des profils au sommet.</p>

<h2>Alors, SoundSource en vaut-il la peine ?</h2>
<p>Oui, si vous utilisez l'égalisation et le routage. Il s'agit d'un logiciel mature et bien pris en charge par un développeur respecté, et le prix reflète ses capacités réelles. Mais « ça vaut le coup » dépend de ce que vous toucherez. Si vous ouvrez l'application et ajustez uniquement les curseurs de volume, désactivez une application ou souhaitez qu'une application silencieuse soit plus forte, vous payez de l'argent premium pour les besoins de base du mixeur. Dans ce cas, un outil unique à 14,99 € est la solution la plus judicieuse, et vous pouvez toujours passer à SoundSource plus tard si vos besoins évoluent en matière d'égalisation et de routage.</p>

<p>Si vous recherchez uniquement le volume, l'augmentation, la sourdine, les profils et l'atténuation automatique par application, <a href="https://apps.apple.com/app/id6772792641">obtenez SoundDial sur le Mac App Store</a> — 14,99 € une fois, sans abonnement, ni chauffeur.</p>`,
  },
  "chrome-too-loud-mac": {
    slug: "chrome-too-loud-mac",
    title: "Chrome trop fort sur Mac ? Désactivez un navigateur sans tout désactiver",
    description: "Chrome sonne plus fort que vos autres applications sur Mac ? Découvrez les correctifs intégrés (muet par onglet, paramètres de son du site) et comment définir un véritable volume par application pour Chrome afin qu'il reste plus silencieux que tout le reste.",
    date: "2026-07-23",
    readTime: "5 min de lecture",
    content: `<p>Le macOS n'a pas de volume intégré par application, vous ne pouvez donc pas désactiver le Chrome de manière native tout en laissant les autres applications au volume maximum. Vos solutions gratuites les plus rapides consistent à désactiver les onglets bruyants, à baisser le volume à l'intérieur de chaque lecteur vidéo ou à bloquer le son par site dans les paramètres de Chrome. Pour un niveau de volume réel et persistant uniquement pour le Chrome, vous avez besoin d'un mélangeur par application.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Chrome trop fort sur Mac ? Désactivez un navigateur sans tout désactiver" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Pourquoi Chrome sonne plus fort que tout le reste</h2>
<p>Chrome n'est pas nécessairement « plus fort » de par sa conception — c'est que Chrome achemine l'audio à partir de nombreuses sources indépendantes : YouTube, publicités à lecture automatique, appels vidéo, onglets de musique de fond et applications Web qui fournissent chacune leur propre volume. Certains sites sont masterisés à chaud, les publicités sont notoirement bruyantes et Chrome les lit toutes au niveau de sortie maximum de votre système. Pendant ce temps, votre application musicale ou un appel peut être plus silencieux, donc Chrome domine le mix.</p>
<p>Sur Windows, il vous suffit d'ouvrir le mélangeur de volume et de faire glisser le curseur Chrome vers le bas. macOS n'inclut tout simplement pas cette fonctionnalité. La touche de volume du système contrôle tout en même temps, donc baisser le Chrome réduit également votre musique, vos notifications et vos appels. C'est la principale limitation – et c'est une lacune du système d'exploitation, pas quelque chose que vous faites mal.</p>

<h2>Des correctifs intégrés qui ne coûtent rien</h2>
<p>Avant d'installer quoi que ce soit, essayez-les. Ils ne vous donneront pas une seule molette de volume Chrome, mais ils résolvent la plupart des problèmes de « un seul onglet fort ».</p>
<ul>
<li><strong>Couper un onglet bruyant.</strong> Cliquez avec le bouton droit sur l'onglet et choisissez « Site muet » ou cliquez sur la petite icône de haut-parleur qui apparaît sur un onglet en cours de lecture audio. Cela fait taire complètement cet onglet sans toucher au reste de Chrome.</li>
<li><strong>Baissez le volume à l'intérieur du lecteur.</strong> L'astuce la plus fiable : faites glisser le curseur de volume vers le bas dans YouTube, Netflix ou tout ce qui est en cours de lecture. Les joueurs Web mémorisent leur propre niveau par site, donc un YouTube plus silencieux restera silencieux la prochaine fois.</li>
<li><strong>Bloquer le son par site.</strong> Aller à <em>chrome://settings/content/sound</em>. Vous pouvez basculer les sites entre « autorisés » et « désactivés » et ajouter des domaines spécifiques à une liste muette. Idéal pour faire taire définitivement les sites à lecture automatique.</li>
<li><strong>Tuez les publicités en lecture automatique.</strong> L’audio publicitaire est souvent le véritable coupable. Un bloqueur de contenu ou la désactivation de l'onglet jusqu'à ce que vous soyez prêt à regarder supprime la plupart des sons surprises.</li>
</ul>
<blockquote>Ce sont vraiment utiles et gratuits. Mais remarquez ce qu'ils ne peuvent pas faire : ils coupent le son ou gèrent des onglets individuels. Aucun d'entre eux ne vous permet de dire "gardez tout Chrome à 40 % pendant que ma musique reste à 100 %".</blockquote>

<h2>La limitation honnête : pas de volume par application dans macOS</h2>
<p>Si votre objectif réel est « Chrome devrait toujours être plus silencieux que mes autres applications », les outils intégrés ne suffisent pas. La mise en sourdine par onglet est tout ou rien. Les curseurs du lecteur sont réinitialisés lorsqu'un site ne s'en souvient pas et doivent être refaits constamment. Et le volume du système déplace tout ensemble.</p>
<p>Il s'agit d'une véritable limitation de macOS, pas d'un bug que vous pouvez configurer. Apple n'a jamais livré de mélangeur de volume de style Windows. Le seul moyen d'obtenir un niveau de volume persistant et indépendant pour Chrome en particulier est une application tierce située entre vos applications et votre périphérique de sortie et appliquant un gain par application.</p>

<h2>Définir un volume réel par application pour Chrome</h2>
<p>Un mélangeur de barre de menus comme <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> donne à macOS le contrôle du volume par application qui lui manque. Il répertorie toutes les applications en cours de lecture audio et donne à chacune son propre curseur – afin que vous puissiez abaisser le Chrome à un niveau confortable et laisser le Spotify, vos appels et les sons du système exactement là où ils se trouvent.</p>
<p>Voici comment apprivoiser un Chrome bruyant :</p>
<ul>
<li>Ouvrez le mélangeur de la barre de menus et recherchez Chrome dans la liste des applications actives.</li>
<li>Faites glisser le curseur de Chrome vers le bas, disons, entre 40 et 50 pour cent. Les autres applications restent intactes.</li>
<li>Si une application spécifique l'est également <em>calme</em> à la place - une application d'appel qui murmure - utilisez <a href="https://apps.apple.com/app/id6772792641">augmentation du volume par application</a> pour le pousser au-dessus de 100 pour cent, tout en gardant Chrome bas.</li>
<li>Coupez le son du Chrome instantanément avec une sourdine par application lorsque vous avez besoin de silence sans fermer les onglets.</li>
</ul>
<p>Parce que le niveau est lié à l’application, il reste. Chrome reste au volume que vous avez choisi dans les onglets, les sites et les redémarrages — pas de glisser à nouveau les curseurs du lecteur à chaque fois que vous ouvrez une nouvelle vidéo.</p>

<h2>Pour aller plus loin : profils, ducking et commutation de sortie</h2>
<p>Une fois que vous avez le contrôle par application, quelques extras valent la peine d'être conservés. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> vous permet d'économiser du volume <strong>profils</strong> — par exemple un profil « focus » où Chrome est silencieux et la musique est forte, et un profil « observation » où Chrome domine — et basculez entre eux en un seul clic. L'auto-ducking peut automatiquement plonger d'autres applications lorsqu'une source choisie démarre (pratique pour qu'un appel ne soit jamais enterré sous un onglet de navigateur bruyant). Et la commutation rapide des sorties vous permet de passer d'un haut-parleur à un casque et à d'autres appareils sans avoir à plonger dans les paramètres système.</p>
<p>Il s'agit d'un achat unique de 14,99 € sur le Mac App Store — pas d'abonnement, pas de pilotes à installer, pas de DMG ni d'extension de noyau. Parce qu'il est mis en bac à sable et distribué via le App Store, il ne nécessite pas que le pilote audio sommaire installe les anciens outils de mixage sur lesquels on s'appuie.</p>

<h2>Quel correctif devriez-vous utiliser ?</h2>
<p>Si vous n'avez qu'un seul onglet désagréable de temps en temps, utilisez la sourdine intégrée de Chrome et les paramètres sonores du site : ils sont gratuits et fonctionnent. Si vous souhaitez constamment que Chrome puisse simplement être refusé pendant que tout le reste reste en place, c'est exactement l'écart que macOS laisse ouvert, et un mélangeur par application est la solution idéale.</p>

<p>Vous voulez un Chrome plus silencieux en permanence sans couper votre musique ou vos appels ? <a href="https://apps.apple.com/app/id6772792641">Obtenez SoundDial sur le Mac App Store</a> et donnez à chaque application son propre curseur de volume.</p>`,
  },
  "whatsapp-telegram-notifications-too-loud-mac": {
    slug: "whatsapp-telegram-notifications-too-loud-mac",
    title: "Les notifications WhatsApp et Telegram semblent trop fortes sur Mac ? Baissez-les",
    description: "Corrigez les sons de notification du bureau WhatsApp et Telegram qui sont trop forts sur votre Mac. Commencez par les paramètres intégrés de chaque application, puis réduisez ou désactivez l'ensemble de l'application lorsque macOS ne vous donne aucun contrôle par application.",
    date: "2026-07-23",
    readTime: "5 min de lecture",
    content: `<p>Commencez dans chaque application : WhatsApp et Telegram vous permettent tous deux de désactiver ou de modifier les sons de notification dans leurs propres paramètres, ce qui constitue la solution la plus simple. Mais macOS n'a pas de curseur de volume de notification par application, donc si le son de l'application est encore trop fort, votre seul véritable levier est de baisser ou de couper le son de l'ensemble de cette application avec un outil de volume par application.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Les notifications WhatsApp et Telegram semblent trop fortes sur Mac ? Baissez-les" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Tout d'abord, utilisez les propres paramètres de notification de l'application</h2>

<p>Les WhatsApp et Telegram sont tous deux livrés avec leurs propres commandes sonores, et c'est par là que vous devriez toujours commencer. C'est la solution la plus précise et elle ne touche à rien d'autre sur votre Mac.</p>

<p><strong>Bureau WhatsApp :</strong> Ouvrez WhatsApp, cliquez sur <em>Paramètres</em> (l'icône d'engrenage), puis <em>Notifications</em>. Vous pouvez désactiver <em>Des sons</em> entièrement tout en conservant les bannières, ou désactivez les aperçus des notifications. Le WhatsApp n'offre pas de curseur de volume, il est donc essentiellement activé ou désactivé pour le son lui-même.</p>

<p><strong>Bureau Telegram :</strong> Ouvert <em>Paramètres → Notifications et sons</em>. Telegram est ici plus flexible. Vous pouvez désactiver le son des notifications globalement, désactiver des discussions individuelles ou définir des tonalités personnalisées (plus silencieuses). Vous pouvez également faire taire un seul groupe bruyant en l'ouvrant et en choisissant <em>Muet</em>. Pour la plupart des gens, la mise en sourdine des discussions les plus bruyantes résout le problème sans pour autant se taire partout.</p>

<p>Si le son est bon mais trop fréquent, désactivez les discussions ou les canaux spécifiques qui se déclenchent le plus souvent plutôt que de supprimer le son dans toute l'application. Cela permet de garder les alertes importantes audibles.</p>

<h2>Désactivez les sons de notification dans les paramètres système macOS</h2>

<p>macOS dispose d'une deuxième couche de contrôle qui remplace l'application dans certains cas. Aller à <em>Paramètres système → Notifications</em>, sélectionnez WhatsApp ou Telegram dans la liste et désactivez <em>Jouer du son pour les notifications</em>. Cela fait taire le carillon d'alerte de cette application tout en affichant les bannières.</p>

<p>Il s'agit d'une très bonne solution si vous souhaitez uniquement que l'application soit silencieuse sur les notifications et ne vous souciez pas de ses autres éléments audio (appels, vidéo). Combiné avec les propres paramètres de l'application, il couvre la plupart des plaintes « le ping est discordant ».</p>

<h2>La vraie limitation : macOS n'a pas de volume par application</h2>

<p>Voici la partie honnête. Les étapes ci-dessus sont des interrupteurs marche/arrêt. Ce qu'ils ne peuvent pas faire, c'est tourner WhatsApp ou Telegram <em>vers le bas</em> jusqu'à, disons, 40 % tout en gardant tout le reste à plein volume. Windows dispose d'un mélangeur de volume par application depuis des années. macOS n’en inclut tout simplement pas, et aucun paramètre caché ni commande Terminal ne l’ajoute.</p>

<p>Cela est important lorsque le problème ne vient pas spécifiquement du carillon de notification, mais que l'ensemble de l'application est trop fort :</p>

<ul>
<li>WhatsApp ou Telegram <strong>appels vocaux et vidéo</strong> qui souffle à plein volume par rapport à votre musique ou à une réunion</li>
<li>Un son de notification que vous souhaitez conserver mais à un niveau inférieur, pas complètement désactivé</li>
<li>Des sonneries qui dépassent de loin tout ce que vous écoutez</li>
<li>Vouloir que l'application soit audible mais silencieusement en arrière-plan pendant que vous vous concentrez sur autre chose</li>
</ul>

<p>Rien de tout cela ne peut être résolu avec les outils intégrés, car ils n'offrent que la sourdine, pas un niveau. Cet écart est une véritable limitation du macOS, et non quelque chose qui vous manque.</p>

<h2>Définir un volume par application avec SoundDial</h2>

<p>Pour désactiver une seule application au lieu de la désactiver, vous avez besoin d'un mélangeur de volume par application. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> est une application de barre de menus qui donne à macOS le contrôle du volume par application avec lequel il n'a jamais été livré. Il répertorie toutes les applications en cours de lecture audio et donne à chacune son propre curseur.</p>

<p>Pour ce problème spécifique :</p>

<ul>
<li>Ouvert <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> dans la barre de menu et recherchez WhatsApp ou Telegram dans la liste.</li>
<li>Faites glisser son curseur jusqu'à un niveau confortable, par exemple 30 à 40 %, tout en laissant votre musique, votre navigateur ou votre appel vidéo intact.</li>
<li>Utilisez le par application <strong>muet</strong> pour désactiver instantanément cette application pendant un appel ou une réunion, puis réactiver le son plus tard sans fouiller dans les paramètres.</li>
<li>Si jamais vous avez besoin du contraire, d'une application silencieuse et trop soft, le per-app <strong>stimuler</strong> peut le pousser au-dessus de 100%.</li>
</ul>

<p>Parce qu'il définit un niveau par application, SoundDial maintient les carillons de notification et l'audio des appels audibles mais proportionnés, au lieu du choix tout ou rien que les options intégrées vous imposent. Vous pouvez également enregistrer <strong>profils de volumes</strong>, donc une configuration « ciblée » qui maintient les applications de chat à un niveau bas est à portée de clic.</p>

<blockquote>Une mise en garde honnête : baisser le volume global d'une application dans SoundDial réduit également ses carillons de notification, car pour macOS, il s'agit de l'audio de la même application. Si vous souhaitez que les notifications soient complètement désactivées mais que les appels soient à plein volume, utilisez la sourdine de l'application ainsi que les paramètres système pour le carillon et réservez SoundDial pour définir le niveau général.</blockquote>

<p>SoundDial est un achat unique de 14,99 € sur le Mac App Store, en sandbox, sans abonnement, sans pilotes de noyau et sans DMG à charger latéralement. C'est la réponse pratique lorsque le correctif que vous souhaitez réellement, désactiver une application plutôt que la désactiver, n'est pas quelque chose que macOS lui-même peut faire.</p>

<h2>Quel correctif devriez-vous utiliser ?</h2>

<p>Travaillez de haut en bas. Essayez d'abord les paramètres de notification de l'application, puis les paramètres système macOS pour désactiver le carillon. Si ce que vous voulez vraiment, c'est baisser le volume du WhatsApp ou du Telegram à un volume spécifique, ou désactiver uniquement cette application à la volée pendant les appels, c'est là qu'un mélangeur par application gagne sa place.</p>

<p>Fatigué de choisir entre le plein volume et le silence total pour vos applications de chat ? <a href="https://apps.apple.com/app/id6772792641">Obtenez SoundDial sur le Mac App Store</a> et donnez à chaque application sa propre molette de volume.</p>`,
  },
  "game-too-loud-vs-voice-chat-mac": {
    slug: "game-too-loud-vs-voice-chat-mac",
    title: "Le son du jeu est plus fort que le Discord sur le Mac ? Comment équilibrer le volume du jeu et celui de la voix",
    description: "Votre jeu noie le chat vocal Discord sur Mac et il n'y a pas de mixeur de volume intégré. Voici pourquoi macOS n'a pas de volume par application de style Windows et comment baisser le volume du jeu tout en gardant la voix élevée.",
    date: "2026-07-23",
    readTime: "5 min de lecture",
    content: `<p>Le macOS n'a pas de mixeur de volume intégré par application, vous ne pouvez donc pas limiter nativement votre jeu tout en gardant le Discord fort. Le correctif est une application de barre de menus qui définit un volume indépendant par application. Baissez le jeu à 40-50 %, laissez le chat vocal à 100 % et les deux restent équilibrés sans toucher aux curseurs du jeu.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Le son du jeu est plus fort que le Discord sur le Mac ? Comment équilibrer le volume du jeu et celui de la voix" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Pourquoi cela se produit sur Mac (et pas sur Windows)</h2>

<p>Si vous avez joué sur Windows, vous connaissez le mélangeur de volume : cliquez avec le bouton droit sur l'icône du haut-parleur et chaque application en cours d'exécution obtient son propre curseur. Vous abandonnez le jeu, relancez Discord, c'est fait. macOS n’a tout simplement jamais livré cette fonctionnalité. Il existe un volume de sortie principal et une poignée de bascules au niveau de l'application enfouies dans les paramètres système, mais aucun contrôle de niveau par application pour les applications arbitraires.</p>

<p>Ainsi, lorsque le mix d'un jeu est masterisé à chaud, ses explosions, sa musique et ses coups de feu sont diffusés au même niveau de sortie que les voix de vos amis. Certains jeux exposent un curseur de volume principal, mais beaucoup ne descendent pas assez bas, et de nombreux lanceurs, navigateurs et titres autonomes n'offrent aucun contrôle utile. Discord lui-même vous permet uniquement de régler le volume des utilisateurs entrants, pas celui du jeu en concurrence avec eux.</p>

<p>Pour être honnête, il s’agit d’une lacune au niveau du système d’exploitation, et non d’un bug que vous pouvez éliminer. La pile audio d'Apple achemine tout vers un seul flux de sortie, et il n'existe pas d'interface utilisateur propriétaire pour le diviser par application. C'est pourquoi vous avez besoin d'un outil tiers situé entre vos applications et le périphérique de sortie.</p>

<h2>Les solutions de contournement manuelles (et pourquoi elles échouent)</h2>

<p>Avant d'opter pour un logiciel, il convient de connaître les options gratuites et leurs limites :</p>

<ul>
<li><strong>Baissez le volume du jeu dans l'application.</strong> Fonctionne si le jeu dispose d'un curseur principal avec des étapes suffisamment fines. Beaucoup s'arrêtent par incréments de 10 % ou regroupent musique et effets, de sorte que vous ne pouvez pas apprivoiser uniquement les parties fortes.</li>
<li><strong>Élevez vos amis dans Discord.</strong> Faites un clic droit sur chaque utilisateur et augmentez son volume. Cela aide un peu mais dépasse, et cela ne touche pas au jeu qui est réellement le problème.</li>
<li><strong>Utilisez des écouteurs avec un bouton de volume matériel.</strong> Change uniquement le niveau global, pas l'équilibre entre le jeu et la voix.</li>
<li><strong>Acheminez l’audio via un périphérique virtuel.</strong> Des outils comme Loopback ou BlackHole peuvent diviser les flux, mais ils sont destinés aux professionnels, nécessitent une configuration réelle et sont excessifs pour « rendre le jeu plus silencieux ».</li>
</ul>

<p>Aucun de ceux-ci ne vous offre la seule chose que les utilisateurs de Windows tiennent pour acquise : un curseur rapide par application. C'est l'écart <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> est construit pour remplir.</p>

<h2>La solution directe : volume indépendant par application</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> est un mélangeur de volume par application avec barre de menus pour macOS. Il affiche chaque application en cours de lecture du son et donne à chacune son propre curseur, exactement comme le mélangeur de volume Windows. Pour le problème jeu contre voix, le workflow est court :</p>

<ul>
<li>Cliquez sur l'icône SoundDial dans votre barre de menu pendant que le jeu et Discord sont tous deux en cours d'exécution.</li>
<li>Recherchez le jeu dans la liste et abaissez son curseur jusqu'à environ 40 à 50 %.</li>
<li>Laissez Discord (ou Slack, Zoom ou votre application vocale) à 100 %.</li>
<li>Ajustez à la volée pendant le jeu : poussez le jeu plus bas lors d'un échange de tirs bruyant, reculez lors d'une exploration silencieuse.</li>
</ul>

<p>Étant donné que les niveaux sont par application, vous les définissez une fois et ils tiennent. Le jeu reste limité, quelle que soit la puissance de son propre mix, et vos amis restent clairement audibles.</p>

<h2>Boost, muet et profils pour le reste de votre configuration</h2>

<p>Le même outil couvre les désagréments adjacents liés au jeu vocal :</p>

<ul>
<li><strong>Boost par application.</strong> Si le micro d'un coéquipier est silencieux même au maximum de Discord, vous pouvez appuyer sur l'application vocale <em>ci-dessus</em> 100% donc ça traverse le jeu plutôt que d'être enterré.</li>
<li><strong>Muet par application.</strong> Désactivez instantanément un onglet de navigateur en arrière-plan ou une application musicale sans appuyer sur la touche Alt ou arrêter la lecture.</li>
<li><strong>Profils de volumes.</strong> Enregistrez un profil « gaming » avec le jeu à 45 % et Discord boosté, puis revenez à un profil « normal » pour une utilisation quotidienne en un clic – pas de nouveau glisser les curseurs à chaque session.</li>
<li><strong>Esquivement automatique.</strong> Faites en sorte que le jeu s'abaisse automatiquement lorsque quelqu'un parle, afin que les légendes atterrissent toujours au-dessus de l'action.</li>
<li><strong>Commutation de sortie rapide.</strong> Passez d’un casque à un haut-parleur à partir du même menu sans plonger dans les paramètres système.</li>
</ul>

<blockquote><p>Le modèle mental est simple : un curseur par application, comme le fait Windows depuis des années. macOS ne l'a tout simplement jamais fourni, donc un petit utilitaire rétablit la parité.</p></blockquote>

<h2>À quoi s'attendre honnêtement</h2>

<p>Un mélangeur par application résout proprement le problème d'équilibre, mais définit correctement les attentes. Il contrôle les niveaux de sortie du logiciel – il ne peut pas réparer un jeu dont le son est mal maîtrisé, et il ne peut pas émettre un signal qui n'a jamais été capturé (un micro véritablement cassé nécessite toujours une réparation matérielle). Boost ajoute un gain réel, donc pousser une source silencieuse bien au-delà de 100 % peut introduire une distorsion, exactement comme si vous montiez trop haut n'importe quel ampli. Cependant, utilisé de manière judicieuse, une limite de jeu modeste et un petit boost de voix suffisent à la plupart des configurations.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> est en bac à sable et s'installe directement à partir du Mac App Store — pas de pilotes, pas d'extensions de noyau, pas de DMG auquel faire confiance. Il s'agit d'un prix unique de 14,99 € sans abonnement et prend en charge le contrôle du volume macOS dans 28 langues.</p>

<p>Arrêtez de vous battre avec vos curseurs dans le jeu. Saisir <a href="https://apps.apple.com/app/id6772792641">SoundDial sur le Mac App Store</a>, baissez le jeu, gardez votre équipe bruyante et obtenez enfin le mélangeur de volume de style Windows que macOS a oublié d'expédier.</p>`,
  },
  "external-monitor-speaker-volume-too-loud-mac": {
    slug: "external-monitor-speaker-volume-too-loud-mac",
    title: "Haut-parleurs de moniteur externes trop forts ou bloqués sur le Mac ? Correction du volume HDMI/DisplayPort",
    description: "Pourquoi les touches de volume de votre Mac ne contrôlent pas les haut-parleurs du moniteur HDMI ou DisplayPort, et comment réparer un son trop fort, bloqué ou non réglable à l'aide de l'OSD du moniteur, de la configuration audio MIDI et d'un meilleur routage de sortie.",
    date: "2026-07-23",
    readTime: "6 min de lecture",
    content: `<p>Si les touches de volume de votre Mac sont grisées ou ne font rien pour un moniteur connecté via HDMI ou DisplayPort, ce n'est généralement pas un bug. L'audio de l'affichage numérique est souvent envoyé à un niveau fixe et le matériel du moniteur contrôle le volume. La solution consiste à ajuster l’affichage, à rediriger la sortie ou à utiliser un autre périphérique audio.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Haut-parleurs de moniteur externes trop forts ou bloqués sur le Mac ? Correction du volume HDMI/DisplayPort" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Pourquoi les touches de volume Mac cessent de fonctionner via HDMI/DisplayPort</h2>

<p>HDMI et DisplayPort transportent l'audio sous forme de flux numérique. De nombreux moniteurs reçoivent ce flux à un niveau de sortie fixe et s'attendent à ce que vous contrôliez le volume sur l'écran lui-même, et non sur l'appareil source. Lorsque macOS détecte cela, il désactive le curseur de volume à l'écran et grise les touches F11/F12, affichant un symbole « aucune entrée » lorsque vous appuyez dessus.</p>

<p>Il s'agit d'une limitation matérielle et protocolaire, que le logiciel du Mac ne peut pas contourner. L'audio ne passe jamais par une étape où macOS est autorisé à l'atténuer. Aucune application, pilote ou paramètre ne peut injecter un contrôle du volume dans un flux que l'écran insiste pour recevoir au niveau maximum. Être honnête à ce sujet vous évite des heures de recherche de la mauvaise solution.</p>

<h2>Correctif 1 : utilisez les propres commandes du moniteur (OSD)</h2>

<p>C'est la vraie solution pour la plupart des gens. Presque tous les moniteurs dotés de haut-parleurs intégrés disposent d'un menu d'affichage à l'écran piloté par des boutons physiques ou un joystick à l'arrière ou sous le panneau.</p>

<ul>
<li>Appuyez sur le bouton OSD/menu pour ouvrir les paramètres du moniteur.</li>
<li>Recherchez une section Audio ou Volume.</li>
<li>Baissez le niveau ici – c’est le contrôle qui fonctionne réellement via HDMI/DP.</li>
</ul>

<p>Certains moniteurs exposent également une application compagnon ou une prise en charge DDC/CI afin que vous puissiez piloter l'OSD depuis macOS. Les utilitaires tiers qui parlent DDC peuvent mapper les touches de volume de votre Mac au volume matériel du moniteur, ce qui vaut la peine d'essayer si vous détestez utiliser les boutons du panneau.</p>

<h2>Correctif 2 : vérifier la configuration audio et MIDI</h2>

<p>Ouvert <strong>Configuration audio-MIDI</strong> (dans /Applications/Utilitaires). Sélectionnez votre moniteur dans la liste des appareils. Si un curseur de volume apparaît sur la droite, faites-le glisser vers le bas. Parfois, l'écran expose un niveau contrôlable par logiciel même lorsque les touches de la barre de menus sont désactivées. Si le curseur est manquant ou grisé, l'écran confirme qu'il n'accepte que l'audio à niveau fixe et vous devez revenir à l'OSD.</p>

<p>Pendant que vous êtes ici, confirmez que le bon périphérique de sortie est sélectionné. Il est courant que le son soit acheminé silencieusement vers un moniteur dont vous avez oublié qu'il était connecté, ce qui explique un son soudain fort ou absent.</p>

<h2>Correctif 3 : acheminez l’audio vers un endroit que vous pouvez réellement contrôler</h2>

<p>Si les haut-parleurs de votre moniteur sont de toute façon médiocres (la plupart le sont) et que son contrôle du volume est maladroit, la solution la plus simple consiste à arrêter de les utiliser :</p>

<ul>
<li>Branchez des haut-parleurs ou des écouteurs dans la prise de sortie casque du moniteur s'il en possède une - cette sortie analogique est généralement contrôlable en volume depuis l'écran.</li>
<li>Utilisez un USB DAC, des haut-parleurs USB ou une sortie Bluetooth. Les sorties USB et analogiques donnent au macOS un contrôle complet du volume logiciel, afin que vos touches fonctionnent à nouveau normalement.</li>
<li>Sélectionnez les haut-parleurs intégrés de votre Mac pour des sons rapides et conservez le moniteur pour la vidéo uniquement.</li>
</ul>

<p>Une fois que vous êtes sur une sortie que macOS peut réellement atténuer, les touches de volume du système se comportent et vous reprenez un contrôle précis au lieu de sauter entre les étapes OSD grossières du moniteur.</p>

<h2>Une fois la sortie opérationnelle, contrôlez le volume par application</h2>

<p>Obtenir une sortie contrôlable résout le problème "trop fort / bloqué". Mais le macOS ne vous offre toujours qu'un seul volume principal pour tout. Il n'y a pas de mélangeur par application intégré sur le Mac – le Windows en a un depuis des années, mais Apple n'a jamais livré d'équivalent. Ainsi, une vidéo forte, un jeu et un appel silencieux partagent tous le même curseur.</p>

<p>C'est l'écart <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> remplit. Il s'agit d'un mélangeur de barre de menus qui donne à chaque application son propre volume indépendant, de sorte que vous pouvez baisser un onglet de navigateur sans toucher à votre musique, désactiver instantanément une application ou augmenter une application silencieuse au-dessus de son plafond normal. Vous pouvez enregistrer des profils de volume pour différentes configurations et changer rapidement de sortie à partir de la barre de menu.</p>

<p>Pour être clair sur la portée : <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> contrôle le volume du logiciel pour l'audio circulant via macOS. Il ne peut pas remplacer un moniteur qui ignore le volume du système via HDMI – c'est le comportement de niveau fixe de l'écran, et seul l'OSD ou une autre sortie le corrige. Une fois que vous êtes sur une sortie contrôlable, le contrôle par application est l'endroit où l'application brille.</p>

<h2>Liste de contrôle rapide</h2>

<ul>
<li>Touches grisées en HDMI/DP ? Utilisez le volume OSD du moniteur - c'est le comportement attendu.</li>
<li>Vérifiez Configuration Audio MIDI pour un curseur logiciel caché.</li>
<li>Confirmez que le bon périphérique de sortie est sélectionné.</li>
<li>Pour un contrôle réel, acheminez l'audio vers la sortie casque, USB ou Bluetooth.</li>
<li>Utilisez ensuite un mélangeur par application pour équilibrer les applications individuelles.</li>
</ul>

<p>Une fois votre production sous contrôle, donnez <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> un regard. Il s'agit d'un achat unique de 14,99 € sur le Mac App Store — sans abonnement, sans pilotes, ni DMG — et il apporte enfin un véritable mélangeur de volume par application au macOS.</p>`,
  },
  "usb-dac-volume-control-not-working-mac": {
    slug: "usb-dac-volume-control-not-working-mac",
    title: "Le volume du USB DAC ne s'ajuste pas sur le Mac ? Récupérer le contrôle du volume du logiciel",
    description: "Pourquoi macOS grise le curseur de volume pour de nombreux USB DAC, ce que cela signifie et comment rétablir le contrôle logiciel du volume sur votre Mac sans nuire à la qualité audio.",
    date: "2026-07-23",
    readTime: "6 min de lecture",
    content: `<p>Si le curseur de volume de votre USB DAC est grisé sur Mac, ce n'est généralement pas un bug. Le macOS désactive son volume logiciel lorsqu'un DAC signale qu'il n'a pas de volume contrôlable, s'attendant à ce que vous utilisiez le propre bouton matériel du DAC. Pour récupérer le volume du logiciel, utilisez un atténuateur au niveau de l'application comme <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Le volume du USB DAC ne s&#x27;ajuste pas sur le Mac ? Récupérer le contrôle du volume du logiciel" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Pourquoi macOS grise le volume de certains USB DAC</h2>

<p>Lorsque vous branchez un périphérique audio USB, macOS lui demande ce qu'il peut faire via le protocole USB Audio Class (UAC). Une partie de cette poignée de main est un ensemble de commandes « d'unité fonctionnelle », y compris un contrôle de volume. Si le DAC déclare un contrôle de volume, le macOS le connecte aux touches de volume de votre clavier et au curseur de la barre de menus. Si le DAC déclare qu'il n'a pas de volume réglable par l'hôte, le macOS grise complètement le curseur.</p>

<p>De nombreux DAC et amplis de haute qualité font exactement ce dernier, exprès. L'hypothèse du concepteur est que vous fournirez au DAC un signal numérique à grande échelle, au bit parfait, et que vous contrôlerez le volume avec le bouton de volume analogique sur l'unité elle-même. Cette atténuation analogique se produit après la conversion numérique-analogique, elle évite donc de jeter des bits et constitue véritablement la voie préférée des audiophiles. C'est une fonctionnalité, pas un défaut.</p>

<blockquote>Règle générale : si votre DAC possède un bouton de volume physique et que le curseur du Mac est grisé, le fabricant souhaite que vous utilisiez le bouton. Le signal est envoyé à 100 % par conception.</blockquote>

<h2>Quand le curseur grisé pose réellement un problème</h2>

<p>La réponse « utilisez simplement le bouton » se décompose dans les configurations réelles :</p>

<ul>
<li><strong>Le DAC n'a pas de bouton.</strong> De nombreux USB DAC compacts, dongles et interfaces professionnelles n'exposent aucun contrôle de volume ni aucun contrôle de l'hôte non plus. Vous êtes bloqué quel que soit le niveau auquel l'ampli en aval ou les haut-parleurs amplifiés sont réglés.</li>
<li><strong>Le bouton est hors de portée.</strong> Un DAC de bureau derrière votre moniteur, ou une unité alimentant un ampli à gain fixe, signifie que le réglage du volume devient une corvée physique au lieu d'une simple pression sur une touche.</li>
<li><strong>Vous avez besoin d'un équilibre par application, pas seulement d'un niveau master.</strong> Même un bouton matériel parfait constitue une commande globale unique. Il ne peut pas rendre un appel Zoom plus silencieux que votre musique, ni esquiver un jeu lorsqu'une notification se déclenche.</li>
</ul>

<p>Aucun de ces problèmes n'est résolu par macOS, car du point de vue du système d'exploitation, l'appareil se comporte correctement. C'est la limitation honnête : il s'agit d'une fonctionnalité signalée par l'appareil, et il n'y a aucune bascule dans les paramètres système pour la remplacer.</p>

<h2>Solutions de contournement honnêtes avant d’installer quoi que ce soit</h2>

<p>Essayez-les d’abord, car ils ne coûtent rien :</p>

<ul>
<li><strong>Utilisez le bouton matériel ou le volume en aval.</strong> Si votre DAC ou vos haut-parleurs/amplis amplifiés disposent d'une commande, c'est l'option la plus propre et préserve la pleine résolution numérique.</li>
<li><strong>Vérifiez la propre application ou le micrologiciel du DAC.</strong> Certains DAC (et unités orientées jeux) sont livrés avec un panneau de commande ou un paramètre de micrologiciel qui active le volume de l'hôte. Si une option « Volume USB » ou « Volume logiciel » existe, son activation fait fonctionner à nouveau le curseur macOS.</li>
<li><strong>Essayez un autre mode USB.</strong> Quelques appareils signalent des capacités différentes en mode « conforme à la classe » et en mode pilote propriétaire. L'installation ou la suppression du pilote du fournisseur peut modifier si macOS voit ou non un contrôle de volume.</li>
<li><strong>Regardez dans Configuration Audio MIDI.</strong> Ouvrez la configuration Audio MIDI, sélectionnez l'appareil et vérifiez si un volume principal ou par canal y apparaît. Parfois, un curseur est disponible dans ce panneau même lorsque celui de la barre de menus est grisé.</li>
</ul>

<p>Si aucun de ces éléments ne s'applique, vous avez besoin d'une atténuation logicielle du côté Mac.</p>

<h2>Contrôle du volume logiciel avec atténuation par application</h2>

<p>Lorsque le matériel n'accepte pas une commande de volume, l'option restante consiste à atténuer l'audio dans le logiciel avant qu'il n'atteigne le DAC. C'est exactement ce que <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> fait. Il se trouve dans votre barre de menus et donne à chaque application en cours d'exécution son propre volume indépendant, sa sourdine et même son boost, que votre DAC expose ou non un contrôle matériel.</p>

<p>Pour l'utiliser pour un DAC grisé :</p>

<ul>
<li>Installer <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> depuis le Mac App Store et ouvrez-le depuis la barre de menus.</li>
<li>Gardez votre DAC sélectionné comme sortie système ; vous pouvez également utiliser la commutation de sortie rapide du SoundDial pour vous déplacer entre le DAC, les haut-parleurs et les écouteurs sans plonger dans les paramètres système.</li>
<li>Définissez les niveaux par application : abandonnez le navigateur, augmentez le lecteur de musique, coupez le son de ce que vous ne voulez pas. Chaque application diffuse au volume que vous choisissez et le résultat mitigé va au DAC.</li>
<li>Enregistrez les profils de volume pour différents scénarios (appels ou écoute) et autorisez l'atténuation automatique des applications en arrière-plan lorsque quelque chose de plus important commence à jouer.</li>
</ul>

<h2>Le compromis honnête sur la qualité audio</h2>

<p>L'atténuation logicielle réduit le niveau numérique avant la conversion, donc en théorie elle supprime une petite quantité de résolution par rapport au volume analogique sur le DAC lui-même. En pratique, sur les chemins modernes 24 bits et supérieurs à des niveaux d'écoute normaux, la réduction est bien inférieure à tout ce qui est audible, et vous conservez la plage dynamique complète du DAC pour tout ce qui est joué à pleine échelle. Si vous êtes un puriste avec un bon bouton analogique à portée de main, utilisez le bouton. Si vous n'avez aucun contrôle matériel utilisable ou si vous avez besoin d'un équilibre par application que macOS ne peut tout simplement pas fournir, le volume logiciel est le bon compromis, et il bat un curseur qui ne fait rien.</p>

<p>SoundDial est un achat unique de 14,99 €, en sandbox, sans pilotes, extensions de noyau ou installateurs DMG. Si le volume de votre USB DAC est grisé et qu'il n'est pas possible d'appuyer sur un bouton, <a href="https://apps.apple.com/app/id6772792641">obtenez SoundDial sur le Mac App Store</a> et remettez le contrôle du volume de travail dans votre barre de menus.</p>`,
  },
  "cap-max-volume-of-one-app-mac": {
    slug: "cap-max-volume-of-one-app-mac",
    title: "Limitez le volume maximum d'une application forte sur Mac (protégez votre audition)",
    description: "macOS n'a pas de plafond de volume par application, donc une seule application bruyante peut vous faire exploser au volume complet du système. Voici comment définir un plafond de volume maximum pour une seule application sur Mac avec un mélangeur par application, et pourquoi les limites matérielles sont importantes.",
    date: "2026-07-23",
    readTime: "5 min de lecture",
    content: `<p>macOS n'a aucun moyen intégré pour limiter le volume maximum d'une application, donc un programme fort est lu quel que soit le réglage du curseur de votre système. Pour définir un plafond pour une seule application, utilisez un mélangeur par application dans la barre de menus, tel que <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>: maintenez cette application à, disons, 40 % pendant que le volume de votre système reste plus élevé pour tout le reste.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Limitez le volume maximum d&#x27;une application forte sur Mac (Protégez votre audition)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Pourquoi une application peut soudainement vous exploser sur un Mac</h2>

<p>Sur macOS, le curseur de volume dans la barre de menus ou dans le centre de contrôle est un contrôle unique à l'échelle du système. Chaque application se déverse dans la même sortie au même niveau. Il n'y a pas de mélangeur de volume par application intégré au système d'exploitation comme le Windows en a un depuis des années avec son panneau Volume Mixer.</p>

<p>Cette conception a une réelle conséquence pour vos oreilles. Si vous réglez le volume de votre système à un niveau élevé pour pouvoir entendre un podcast silencieux ou un appel vidéo doux, puis passez à un jeu, à une notification Discord, à un site Web contenant beaucoup de publicité ou à une vidéo masterisée beaucoup plus fort, cette application est également lue au niveau complet du système. Le résultat est la frayeur classique : un mur de son soudain à un volume que vous n'avez jamais prévu pour cette application spécifique.</p>

<p>Pour toute personne souffrant d’acouphènes, de sensibilité sonore ou qui apprécie simplement son audition, cette imprévisibilité est le problème. Vous n’essayez pas de tout rendre plus calme. Vous essayez de garantir qu’une application bruyante spécifique ne pourra jamais dépasser un niveau que vous avez jugé sûr.</p>

<h2>Ce que macOS peut et ne peut pas faire ici</h2>

<p>Permettez-moi d'être honnête sur les limites avant de recommander quoi que ce soit.</p>

<ul>
<li><strong>Volume du système</strong> abaisse tout d'un coup. Baissez-le pour apprivoiser une application et vos applications silencieuses deviennent inaudibles.</li>
<li><strong>Curseurs de volume dans l'application</strong> existent dans certaines applications (lecteurs multimédias, certains navigateurs par onglet) mais pas dans la plupart. Un jeu, un appel vidéo ou une application native n’a souvent aucun contrôle de volume indépendant.</li>
<li><strong>Le plafond matériel est réel.</strong> Aucun logiciel ne peut pousser un signal plus fort que le maximum de votre périphérique de sortie. À l'inverse, la maîtrise du volume sonore d'une application, ainsi que votre DAC et vos écouteurs, déterminent la sensation réelle de « 100 % ». Le logiciel peut abaisser le niveau par application de manière fiable, mais il ne peut pas réécrire la physique de vos écouteurs.</li>
</ul>

<p>L’objectif honnête n’est donc pas de limiter le volume sonore au niveau du conducteur. Il s'agit d'une atténuation par application pratique et fiable : maintenez une application choisie à une fraction fixe de la sortie du système afin qu'elle ne puisse jamais vous surprendre.</p>

<h2>Comment limiter le volume d'une seule application avec un mélangeur par application</h2>

<p>Un mélangeur de volume par application intercepte l'audio de chaque application et vous permet de définir son niveau indépendamment. Voici le workflow avec <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, qui se trouve dans la barre de menu :</p>

<ul>
<li><strong>Ouvrez le mixeur.</strong> Cliquez sur l'icône de la barre de menu SoundDial. Vous verrez une liste de toutes les applications en cours de lecture audio, chacune avec son propre curseur.</li>
<li><strong>Trouvez l'application bruyante.</strong> Localisez l'application que vous souhaitez limiter, par exemple un jeu, un navigateur ou un outil de visioconférence.</li>
<li><strong>Fixez son plafond.</strong> Faites glisser le curseur de cette application jusqu'à votre niveau de sécurité, disons 35 à 50 %. Cette application joue désormais sur cette fraction de la sortie du système tandis que toutes les autres applications restent là où elles étaient.</li>
<li><strong>Laissez le volume de votre système là où vous en avez besoin.</strong> Gardez le curseur du système suffisamment haut pour vos applications silencieuses. L’application plafonnée reste malgré tout maîtrisée.</li>
</ul>

<p>Étant donné que le niveau est par application, vous définissez effectivement un maximum pour ce programme. Même lorsqu'il essaie de lire son contenu le plus fort, le contenu le plus fort correspond désormais à la fraction de contenu que vous avez choisie.</p>

<h2>Faire coller le capuchon avec des profils</h2>

<p>Un seul réglage manuel est utile, mais les niveaux de l'application peuvent être réinitialisés lorsque vous quittez et relancez. Pour créer une configuration de sécurité auditive qui survit aux redémarrages, utilisez <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>les profils de volume de . Enregistrez un profil avec vos niveaux préférés par application, par exemple « soirée de jeu tranquille » avec le jeu à 40 %, votre application musicale à 70 % et votre application d'appel à 90 %. Rappelez-le en un clic chaque fois que vous vous asseyez. Votre plafond pour l'application bruyante revient exactement tel que vous l'avez défini.</p>

<p>Deux autres caractéristiques méritent d’être connues en matière de protection auditive :</p>

<ul>
<li><strong>Muet par application</strong> vous permet de faire taire instantanément un seul délinquant sans rien toucher d'autre, ce qui est utile pour une application qui envoie des notifications bruyantes.</li>
<li><strong>Esquive automatique</strong> diminue automatiquement l'audio de fond lorsque quelque chose de plus important commence, afin que vous ne soyez pas coincé entre deux sources fortes à la fois.</li>
</ul>

<blockquote><p>L’atténuation logicielle est véritablement efficace pour limiter une application, mais il s’agit d’une couche de protection et non d’une protection médicale. Si vous souffrez d'acouphènes ou de sensibilité sonore, associez un plafond par application à des niveaux d'écoute et des pauses globales raisonnables. Aucune application ne remplace des habitudes prudentes en matière de volume.</p></blockquote>

<h2>Une note sur le boost et pourquoi il est séparé</h2>

<p>Le même mélangeur par application qui limite une application bruyante peut également augmenter une application trop silencieuse au-dessus de 100 %, ce qui est pratique pour une application dont le volume est trop faible. Ce sont les deux faces d'un même contrôle : vous décidez du niveau de chaque application, vers le haut ou vers le bas. Pour la protection auditive, vous choisissez simplement la direction « vers le bas » et la maintenez là.</p>

<h2>La version courte</h2>

<p>macOS ne vous permettra pas de limiter le volume d'une seule application, et il s'agit d'une véritable lacune du système d'exploitation, et non d'une erreur de l'utilisateur. Un mélangeur par application dans la barre de menus le ferme : réglez l'application bruyante sur une fraction fixe, enregistrez-la dans un profil et elle ne pourra plus jamais vous exploser pendant que vos autres applications restent audibles.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> est un achat unique de 14,99 € sur le Mac App Store, en mode bac à sable, sans pilote ni DMG à installer. Si l’objectif est de protéger vos oreilles contre une application imprévisible, c’est le moyen le plus simple de fixer ce plafond et de le conserver.</p>`,
  },
  "set-left-right-balance-per-app-mac": {
    slug: "set-left-right-balance-per-app-mac",
    title: "Équilibre gauche/droite différent par application sur Mac — Est-ce possible ?",
    description: "Pouvez-vous définir une balance stéréo gauche/droite différente pour chaque application sur macOS ? Honnêtement, non, pas de manière native, ni avec la plupart des outils. Voici ce qui est réellement possible et quelles sont les véritables limites.",
    date: "2026-07-23",
    readTime: "6 min de lecture",
    content: `<p>Honnêtement, non – macOS ne vous permet pas de définir une balance stéréo gauche/droite différente par application, et presque aucun outil tiers n'expose non plus un véritable panoramique par application. Vous pouvez définir une balance globale pour votre périphérique de sortie et contrôler par application <em>volume</em>, mais indépendant par application <em>casserole</em> n'est pas une fonctionnalité rendue disponible par macOS.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Équilibre gauche/droite différent par application sur Mac — Est-ce possible ?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Équilibre et volume : ce n'est pas la même chose</h2>

<p>Il convient de séparer deux idées qui se confondent souvent :</p>
<ul>
  <li><strong>Volume</strong> - le volume global d'une application. Il s'agit d'un niveau unique appliqué aux deux canaux.</li>
  <li><strong>Balance (casserole)</strong> — comment le son est distribué entre les haut-parleurs gauche et droit. Un équilibre "pleine gauche" envoie le tout vers le canal gauche et fait taire le canal droit.</li>
</ul>

<p>Les personnes qui demandent un « équilibre différent par application » souhaitent généralement l'une des deux choses suivantes : pousser le son d'une application vers une oreille (par exemple, un appel dans votre oreille gauche, de la musique dans votre droite), ou corriger une différence auditive ou un mauvais haut-parleur d'un côté, mais uniquement pour certaines applications. Ce sont des objectifs légitimes. Le problème est où réside le contrôle.</p>

<h2>Pourquoi macOS ne peut pas faire cela de manière native</h2>

<p>macOS a exactement un contrôle de balance, et il se situe au niveau du périphérique de sortie. Vous le trouverez ci-dessous <strong>Paramètres système → Son → Sortie</strong>, où un <em>Solde</em> Le curseur déplace l’ensemble du mix vers la gauche ou la droite. Quel que soit le réglage de ce curseur, il s'applique à <em>tout</em> acheminé vers cet appareil – chaque application, chaque son du système, le tout en même temps.</p>

<p>Il n'y a pas d'API dans la pile audio standard macOS qui dit "rendre l'audio de cette application à gauche, celle de cette application à droite". Les applications transmettent leur audio au système déjà mixé, et le système applique une balance principale sur le chemin vers les haut-parleurs. Ainsi, la couche dans laquelle vous souhaitez un panoramique par application n'est tout simplement pas exposée par le système d'exploitation. Il s'agit d'une véritable limitation du système d'exploitation, et non d'un problème qu'un utilitaire de barre de menus peut contourner poliment.</p>

<blockquote>Contrairement aux applications par application <em>volume</em> - ce qui manque également au macOS de manière native, mais que les applications peuvent implémenter en appuyant sur le flux audio - par application <em>équilibre</em> nécessiterait de repenser le flux de chaque application indépendamment, et ce hook n'est pas disponible pour les applications en bac à sable.</blockquote>

<h2>Ce que fait SoundDial – et honnêtement, ce qu'il ne fait pas</h2>

<p><a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">SoundDial</a> vous donne le contrôle par application. macOS manque : indépendant <strong>volume</strong> pour chaque application en cours d'exécution, par application <strong>muet</strong>, un volume par application <strong>stimuler</strong> au-dessus de 100 %, volume économisable <strong>profils</strong>, esquivement automatique et commutation rapide des sorties à partir de la barre de menus.</p>

<p>Pour être franc avec vous : <a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">SoundDial</a> contrôles par application <em>volume et sourdine</em>, pas de stéréo par application <em>panoramique</em>. Il n'enverra pas Safari à votre oreille gauche et Spotify à votre droite. Si quelqu'un vous dit qu'un mélangeur de barre de menus effectue un véritable équilibre L/R par application sur macOS, soyez sceptique : ce n'est pas un contrôle que le système d'exploitation distribue. Ce que SoundDial résout véritablement, c'est la frustration bien plus courante : une application étant trop bruyante ou trop silencieuse par rapport à une autre.</p>

<h2>Les vraies solutions de contournement pour le solde par application</h2>

<p>Si vous avez vraiment besoin de diviser l'audio côte à côte, voici les options honnêtes, de la plus simple à la plus complexe :</p>

<ul>
  <li><strong>Solde global (toutes les applications) :</strong> Utilisez Paramètres système → Son → Sortie → Balance. Il s’agit de votre seule option intégrée et elle affecte toutes les applications. Utile pour corriger une pièce ou une asymétrie auditive, inutile pour isoler une seule application.</li>
  <li><strong>Périphériques de sortie séparés :</strong> C’est ce qui se rapproche le plus du véritable équilibre par application. Acheminez l'application A vers un périphérique de sortie et l'application B vers un autre, puis définissez la balance de chaque appareil indépendamment. macOS vous permet de choisir un périphérique de sortie dans certaines applications (et les navigateurs/applications de communication exposent souvent leur propre sélecteur de sortie). Si l'application A pointe vers un appareil orienté à gauche et l'application B vers un appareil orienté à droite, vous obtenez effectivement un équilibre par application, à condition que les deux applications vous permettent de choisir leur sortie.</li>
  <li><strong>Outils de routage audio virtuel :</strong> Les utilitaires qui créent des périphériques virtuels et un mixeur interne peuvent, dans certaines configurations, acheminer des applications spécifiques vers des canaux spécifiques. C'est puissant mais délicat, ajoute un composant de type pilote et est excessif pour la plupart des gens. C'est le domaine des streamers et des ingénieurs du son, pas une simple solution "appel dans une oreille".</li>
  <li><strong>Répartition matérielle :</strong> S'il s'agit de haut-parleurs physiques ou d'une différence auditive, un mélangeur matériel ou une interface audio avec contrôle par canal évite complètement le problème logiciel.</li>
</ul>

<h2>Quand le volume par application est réellement ce dont vous aviez besoin</h2>

<p>De nombreuses demandes « Je veux un solde différent par application » sont en réalité « une application en noie une autre ». Si l'objectif est un appel vidéo que vous pouvez entendre sur votre musique, ou un jeu trop fort à côté d'un chat Discord, l'équilibre n'est pas l'outil – le volume indépendant l'est. C'est exactement ce qu'un mélangeur par application gère proprement, sans pilotes virtuels ni gymnastique de routage.</p>

<p>Donc, le résumé honnête : la véritable balance gauche/droite par application n'est pas une fonctionnalité macOS, et aucune application de mixage ne la simule de manière convaincante. Vos véritables itinéraires sont le curseur de balance globale ou le routage de sortie par application vers des appareils panoramiques séparément. Mais si la douleur sous-jacente est relative, le problème est résolu.</p>

<p>Vous souhaitez un volume, une mise en sourdine et un boost indépendants pour chaque application de votre Mac, avec des profils enregistrables et sans pilote ? <a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">Obtenez SoundDial sur le Mac App Store</a> — 14,99 €, unique, en bac à sable.</p>`,
  },
  "why-are-some-apps-louder-than-others-mac": {
    slug: "why-are-some-apps-louder-than-others-mac",
    title: "Pourquoi certaines applications sont-elles tellement plus bruyantes que d'autres sur Mac ? (Et comment les égaliser)",
    description: "Les applications sonnent très différemment sur le Mac, car chacune est maîtrisée selon son propre objectif de volume et le macOS n'a pas de contrôle de volume intégré par application. Voici pourquoi cela se produit et comment mettre à niveau vos applications.",
    date: "2026-07-23",
    readTime: "6 min de lecture",
    content: `<p>Les applications sonnent très différemment sur votre Mac, car chacune est créée, masterisée et normalisée en fonction de son propre objectif de volume, et le macOS n'a pas de contrôle de volume intégré par application pour les réconcilier. Les alertes Spotify, YouTube, Zoom et système passent toutes par le même curseur principal, vous êtes donc obligé de le monter et de le descendre constamment.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Pourquoi certaines applications sont-elles tellement plus bruyantes que d&#x27;autres sur Mac ? (Et comment les égaliser)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Ce n'est pas votre Mac, c'est l'audio lui-même</h2>

<p>Le curseur de volume système unique sur le macOS contrôle le niveau de sortie final pour tout. Cela ne touche pas au volume relatif intégré au flux audio de chaque application. Cette ligne de base est définie bien avant que le son n’atteigne vos haut-parleurs, et elle varie énormément d’une source à l’autre.</p>

<p>Trois éléments expliquent ces différences :</p>

<ul>
<li><strong>Niveaux de maîtrise.</strong> Un morceau pop percutant est masterisé bien plus chaud qu’un enregistrement acoustique silencieux ou qu’un podcast de créations orales. Un film mixé pour un cinéma maintient volontairement les chuchotements silencieux et les explosions fortes - c'est la plage dynamique, et cela signifie que le niveau moyen est faible.</li>
<li><strong>Objectifs de normalisation du volume sonore.</strong> Les plateformes de streaming ajustent la lecture à une cible mesurée en LUFS (Loudness Units relative to Full Scale). Spotify vise environ -14 LUFS, YouTube environ -14 LUFS, Apple Music environ -16 LUFS. Une application de visioconférence ou un jeu applique entièrement son propre gain. Deux applications « normalisées » pour des cibles différentes ne se correspondront jamais.</li>
<li><strong>Pas de mise à niveau entre applications.</strong> Chaque application normalise uniquement son propre contenu. Rien ne coordonne Spotify contre Zoom contre un jeu par navigateur. macOS les additionne simplement et envoie le mix.</li>
</ul>

<h2>Pourquoi LUFS est important (en termes simples)</h2>

<p>Le niveau de crête vous indique l'instant le plus fort d'un signal. LUFS vous indique à quel point quelque chose est fort <em>se sent</em> au fil du temps, pondéré en fonction du fonctionnement de l'audition humaine. Cette distinction explique pourquoi un podcast et un morceau de danse peuvent atteindre le même sommet tout en étant très différents en termes de volume : le morceau passe beaucoup plus de temps près de son plafond.</p>

<blockquote>Une cible LUFS plus silencieuse signifie plus de marge et plus de plage dynamique. Une cible plus forte signifie un mur de son plus cohérent et « toujours plein ». Ni l’un ni l’autre n’est faux, mais lorsque les applications ciblent des nombres différents, vous ressentez cela comme une application criant et une autre marmonnant.</blockquote>

<p>C’est la véritable cause profonde. Ce n'est pas un bug que vous pouvez corriger. C'est la physique de la façon dont l'audio est produit et diffusé, multiplié par une douzaine d'applications qui n'ont jamais été conçues pour s'accorder les unes avec les autres.</p>

<h2>L'écart que macOS laisse ouvert</h2>

<p>Voici la partie qui frustre vraiment les gens : Windows propose depuis des années un mélangeur de volume par application. Vous pouvez dérouler une application vers le bas et en pousser une autre vers le haut, directement depuis la barre des tâches. macOS n'a jamais inclus cela. Les préférences sonores vous donnent uniquement la sélection du curseur principal et du périphérique de sortie.</p>

<p>Ainsi, sur un Mac, vos options sont traditionnellement limitées :</p>

<ul>
<li>Ajustez le curseur de volume interne de chaque application, si elle en possède un. De nombreuses applications (Zoom, la plupart des jeux, les carillons système) n'en exposent pas une utilisable.</li>
<li>Montez manuellement le curseur principal à chaque fois que vous changez de contexte.</li>
<li>Coupez complètement le son d'une chose, ce qui est une solution brutale qui n'équilibre rien.</li>
</ul>

<p>Aucun d’entre eux ne se souvient de vos préférences. Quittez et relancez l'application et vous revenez à la case départ.</p>

<h2>La solution pratique : un volume mémorisé par application</h2>

<p>Puisque vous ne pouvez pas forcer chaque service à remasteriser son catalogue, la solution réalisable consiste à ajouter la couche manquante macOS jamais livrée : un volume indépendant et mémorisé pour chaque application. C'est exactement ce que <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> fait. Il réside dans votre barre de menus et donne à chaque application en cours d'exécution son propre curseur, de sorte que vous pouvez abaisser la plus forte et pousser la plus silencieuse vers le haut jusqu'à ce qu'elle se situe à un niveau qui vous semble égal.</p>

<p>Pour égaliser vos applications en pratique :</p>

<ul>
<li>Ouvert <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> dans la barre de menu et vous verrez chaque application active avec son propre contrôle.</li>
<li>Baissez tout ce qui est explosif – généralement une application musicale ou vidéo maîtrisée à chaud – à quelque chose comme 60 à 70 %.</li>
<li>Laissez votre application de référence silencieuse (souvent une application d'appel ou un podcast) à 100 % et utilisez-la par application <strong>stimuler</strong> pour le pousser au-delà de 100% s'il est encore trop mou.</li>
<li>Réglez les niveaux une fois. SoundDial mémorise le volume de chaque application afin que le solde soit maintenu la prochaine fois que vous l'ouvrirez.</li>
</ul>

<p>Deux fonctionnalités effectuent l’essentiel du travail de mise à niveau ici. <strong>Boostez</strong> est important car de nombreuses applications sont tout simplement trop silencieuses, même au maximum – un curseur par application qui ne fait que réduire le volume ne peut pas les sauver, mais un curseur qui peut amplifier au-delà de 100 % le peut. Et <strong>profils de volumes</strong> vous permet d'enregistrer tout un ensemble de niveaux - par exemple, un profil "concentration sur la musique faible, appels forts" pour le travail par rapport à un mix différent pour les jeux - et de basculer instantanément entre eux au lieu de réajuster application par application.</p>

<h2>Là où cela aide le plus</h2>

<p>Le soulagement le plus courant est le saut entre musique et réunion : diffuser de la musique maîtrisée à haute voix, puis une application d'appel qui semble faible en comparaison. Réglez l'application d'appel plus haut (ou amplifiée), baissez la musique et l'oscillation de volume surprenante disparaît. La même chose s'applique à un jeu par navigateur silencieux contre un lecteur vidéo bruyant ou à des alertes système qui sautent sur tout.</p>

<p>Pour être clair sur les limites : SoundDial équilibre ce que vos applications génèrent. Il ne remasterisera pas une piste mal produite et ne pourra pas inventer des détails audio mixés avec une plage dynamique très large. Ce qu'il fait, c'est vous donner le seul contrôle macOS laissé de côté : des niveaux stables par application qui restent en place.</p>

<p>Fatigué de monter sur le curseur principal à chaque fois que vous changez d'application ? <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> est un prix unique de 14,99 € sur le Mac App Store - en bac à sable, sans pilotes, pas de DMG - et il donne enfin à chaque application son propre volume mémorisé.</p>`,
  },
};
