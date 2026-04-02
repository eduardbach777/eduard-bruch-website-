import type { ArticleSet } from "./index";

export const frArticles: ArticleSet = {
  "how-to-check-cpu-temperature-on-mac": {
    slug: "how-to-check-cpu-temperature-on-mac",
    title: "Comment vérifier la température du CPU sur Mac (Guide 2026)",
    description:
      "Découvrez chaque méthode pour surveiller la température du processeur de votre Mac — des commandes Terminal aux applications tierces. Couvre Apple Silicon et Intel, plages normales et quand s'inquiéter.",
    date: "2026-04-02",
    content: `
<p>La température du CPU de votre Mac est l'une des métriques les plus importantes à surveiller, surtout si vous sollicitez votre machine avec du montage vidéo, du développement logiciel ou des jeux. Un processeur en surchauffe entraîne un throttling thermique, des performances réduites et — à long terme — une durée de vie matérielle raccourcie. Pourtant, macOS n'inclut pas d'affichage de température intégré dans le Moniteur d'activité ou les Réglages Système. Dans ce guide, nous détaillons chaque méthode fiable pour vérifier la température du CPU sur un Mac en 2026, couvrant à la fois les machines Apple Silicon et Intel.</p>

<h2>Pourquoi la température du CPU est importante</h2>
<p>Les processeurs modernes sont conçus pour fonctionner dans une enveloppe thermique spécifique. Lorsque le CPU dépasse cette enveloppe, le système réduit la fréquence d'horloge pour générer moins de chaleur — un processus appelé <strong>throttling thermique</strong>. Sur un MacBook, cela peut transformer une machine réactive en une machine lente en quelques minutes de charge soutenue.</p>
<p>La surveillance de la température vous aide aussi à détecter les problèmes tôt. Un ventilateur obstrué par la poussière, de la pâte thermique séchée ou un système de refroidissement défaillant se manifestent par des températures au repos anormalement élevées bien avant d'autres symptômes.</p>

<h2>Plages de température CPU normales</h2>
<ul>
<li><strong>Repos (navigation légère, email) :</strong> 35 °C – 55 °C pour Apple Silicon, 40 °C – 60 °C pour Intel.</li>
<li><strong>Charge modérée (compilation, édition photo) :</strong> 60 °C – 80 °C sur Apple Silicon, 65 °C – 85 °C sur Intel.</li>
<li><strong>Charge lourde (export vidéo, rendu 3D) :</strong> 80 °C – 100 °C sur Apple Silicon, 85 °C – 100 °C sur Intel.</li>
<li><strong>Seuil de throttling :</strong> Les puces Apple Silicon commencent à throttler autour de 105 °C–110 °C. Les Mac Intel throttlent autour de 100 °C–105 °C.</li>
</ul>

<h2>Apple Silicon vs. Intel : différences clés</h2>
<p>Les puces M d'Apple (M1, M2, M3, M4 et leurs variantes Pro/Max/Ultra) sont basées sur l'architecture ARM et significativement plus économes en énergie que les puces x86 d'Intel. Les Mac Apple Silicon fonctionnent donc généralement plus frais. Certains anciens utilitaires qui s'appuyaient sur les clés SMC d'Intel ne fonctionnent pas sur Apple Silicon.</p>

<h2>Méthode 1 : Terminal avec powermetrics (Apple Silicon)</h2>
<p>Sur les Mac Apple Silicon, la commande intégrée <strong>powermetrics</strong> fournit des données thermiques détaillées :</p>
<p><strong>sudo powermetrics --samplers smc -i 1000 -n 1</strong></p>
<p>Cette méthode est gratuite, ne nécessite aucun logiciel tiers et donne des lectures précises directement depuis les outils système d'Apple.</p>

<h2>Méthode 2 : Terminal avec istats (Mac Intel)</h2>
<p>Si vous utilisez un Mac Intel avec Homebrew installé :</p>
<p><strong>gem install iStats</strong></p>
<p>Puis lancez <strong>istats</strong> dans Terminal pour voir la température CPU, les vitesses des ventilateurs et la température de la batterie.</p>

<h2>Méthode 3 : Applications de barre de menus</h2>

<h3>Pulse</h3>
<p><a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a> est un moniteur système moderne construit avec SwiftUI pour macOS 14+. Il affiche la température CPU, GPU, les lectures par capteur, les vitesses des ventilateurs, la charge CPU, la pression mémoire, la vitesse réseau, la santé de la batterie et l'utilisation disque — le tout depuis des widgets compacts dans la barre de menus. Disponible sur le Mac App Store.</p>

<h3>iStat Menus</h3>
<p>iStat Menus est le moniteur système de référence pour les utilisateurs Mac avancés depuis plus d'une décennie. Il offre des affichages hautement personnalisables pour CPU, mémoire, disques, réseau, capteurs et batterie.</p>

<h3>TG Pro</h3>
<p>TG Pro se concentre spécifiquement sur la surveillance de température et le contrôle des ventilateurs avec des courbes et alertes personnalisées.</p>

<h3>Stats</h3>
<p>Stats est une alternative gratuite et open source qui affiche les métriques système de base dans la barre de menus.</p>

<h2>Que faire si votre Mac chauffe trop</h2>
<ol>
<li><strong>Vérifier le Moniteur d'activité :</strong> Triez par utilisation CPU pour identifier les processus gourmands.</li>
<li><strong>Fermer les onglets et apps inutiles :</strong> Chaque onglet consomme des cycles CPU.</li>
<li><strong>Assurer la circulation d'air :</strong> Évitez les surfaces molles qui bloquent les ventilations.</li>
<li><strong>Nettoyer les ventilateurs :</strong> La poussière s'accumule avec le temps.</li>
<li><strong>Réinitialiser le SMC (Intel) ou redémarrer (Apple Silicon).</strong></li>
<li><strong>Vérifier la pâte thermique :</strong> Sur les Mac Intel anciens (5+ ans), la pâte peut sécher.</li>
</ol>

<h2>Surveiller la température dans le temps</h2>
<p>Des apps comme <a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a> affichent des graphiques en temps réel de la température CPU parallèlement à la charge CPU, facilitant la corrélation entre températures élevées et charges de travail spécifiques.</p>

<h2>Résumé</h2>
<p>Vérifier la température CPU de votre Mac en 2026 est simple, que vous préfériez les commandes Terminal, les outils open source gratuits ou les applications de barre de menus. La surveillance régulière vous aide à détecter les problèmes tôt, maintenir les performances optimales et prolonger la durée de vie de votre matériel.</p>
`,
  },

  "what-is-memory-pressure-on-mac": {
    slug: "what-is-memory-pressure-on-mac",
    title: "Qu'est-ce que la pression mémoire sur Mac et pourquoi c'est important",
    description:
      "Comprenez la pression mémoire macOS — niveaux vert, jaune et rouge — et apprenez comment votre Mac gère la RAM avec la mémoire compressée, câblée et applicative.",
    date: "2026-04-02",
    content: `
<p>Si vous avez déjà ouvert le Moniteur d'activité sur votre Mac et remarqué le graphique de Pression mémoire en bas de l'onglet Mémoire, vous vous êtes peut-être demandé ce qu'il signifie réellement. Contrairement à la simple indication « X Go utilisés sur Y Go », macOS utilise un système plus nuancé appelé <strong>pression mémoire</strong> pour indiquer l'efficacité d'utilisation de votre RAM.</p>

<h2>La pression mémoire expliquée</h2>
<ul>
<li><strong>Vert :</strong> Votre système a beaucoup de mémoire disponible. Les applications fonctionnent sans contrainte. C'est l'état idéal.</li>
<li><strong>Jaune :</strong> Les ressources mémoire deviennent limitées. macOS compresse activement la mémoire et peut commencer à écrire en swap.</li>
<li><strong>Rouge :</strong> Le système est sous forte pression mémoire. macOS utilise massivement le swap et peut terminer des processus en arrière-plan.</li>
</ul>
<p>Le point important est que la quantité de mémoire « utilisée » ne corrèle pas directement avec la pression mémoire. Votre Mac peut afficher 15 Go sur 16 Go « utilisés » et avoir une pression verte, car macOS met intelligemment en cache des fichiers en RAM.</p>

<h2>Comment macOS gère la mémoire</h2>

<h3>Mémoire applicative</h3>
<p>La RAM activement utilisée par les applications en cours d'exécution.</p>

<h3>Mémoire câblée</h3>
<p>La RAM qui ne peut pas être compressée, échangée ou libérée. Utilisée par le noyau et les pilotes système. Typiquement 2–6 Go.</p>

<h3>Mémoire compressée</h3>
<p>Quand la RAM physique devient rare, macOS compresse le contenu des pages mémoire inactives plutôt que de les écrire sur disque. La compression est extrêmement rapide sur les CPU modernes.</p>

<h3>Fichiers en cache</h3>
<p>macOS met en cache les fichiers récemment accédés en RAM pour un accès quasi instantané. Ces données cachées sont « utilisées » mais librement disponibles.</p>

<h3>Swap (mémoire virtuelle)</h3>
<p>Quand la RAM est véritablement épuisée, macOS écrit des données dans un fichier swap sur votre SSD. Le swap est dramatiquement plus lent que la RAM.</p>

<h2>Interpréter la pression mémoire en pratique</h2>
<ol>
<li><strong>Vert avec utilisation élevée :</strong> Parfaitement normal. macOS utilise la RAM efficacement pour le cache.</li>
<li><strong>Jaune après ouverture de nombreuses apps :</strong> Vous approchez les limites de votre RAM physique.</li>
<li><strong>Rouge durant des tâches intensives :</strong> Votre Mac n'a pas assez de RAM pour votre charge actuelle.</li>
<li><strong>Rouge au repos :</strong> Un processus en arrière-plan consomme une quantité anormale de RAM.</li>
</ol>

<h2>Surveiller avec des apps de barre de menus</h2>
<p><a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a> affiche la pression mémoire directement dans votre barre de menus comme un indicateur coloré avec des valeurs numériques pour la mémoire utilisée, compressée et swap.</p>

<h2>De combien de RAM avez-vous réellement besoin ?</h2>
<ul>
<li><strong>8 Go :</strong> Suffisant pour une utilisation légère — navigation web, email, documents.</li>
<li><strong>16 Go :</strong> Le point optimal pour la plupart des utilisateurs.</li>
<li><strong>24 Go – 32 Go :</strong> Recommandé pour les workflows professionnels.</li>
<li><strong>64 Go – 192 Go :</strong> Charges de travail spécialisées.</li>
</ul>

<h2>Résumé</h2>
<p>La pression mémoire est la métrique mémoire la plus importante sur macOS. Elle vous dit en un coup d'œil si votre système a de la marge (vert), fait face mais est tendu (jaune), ou lutte et nécessite une intervention (rouge). Ignorez le nombre brut de « mémoire utilisée » — concentrez-vous sur la pression. Des outils comme le Moniteur d'activité et <a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a> facilitent la surveillance de cette métrique.</p>
`,
  },

  "best-system-monitor-apps-for-mac": {
    slug: "best-system-monitor-apps-for-mac",
    title: "Meilleures applications de monitoring système pour Mac en 2026",
    description:
      "Comparez les meilleurs moniteurs système Mac — iStat Menus, Stats, MenuMeters, TG Pro et Pulse. Fonctionnalités, prix, support Apple Silicon et avis honnêtes.",
    date: "2026-04-02",
    content: `
<p>Garder un œil sur les performances de votre Mac nécessitait autrefois d'ouvrir le Moniteur d'activité et d'interpréter des tableaux denses. Aujourd'hui, des applications dédiées placent toutes les informations critiques directement dans votre barre de menus. Dans cette comparaison complète, nous évaluons les cinq moniteurs système Mac les plus populaires en 2026.</p>

<h2>Critères d'évaluation</h2>
<ul>
<li><strong>Support Apple Silicon :</strong> Prend-il en charge les puces M1 à M4 avec des lectures précises ?</li>
<li><strong>Métriques couvertes :</strong> CPU, mémoire, réseau, disque, température, batterie, GPU, ventilateurs, processus.</li>
<li><strong>Design barre de menus :</strong> Espace occupé, lisibilité, personnalisation.</li>
<li><strong>Consommation de ressources :</strong> Un moniteur gourmand en ressources est contre-productif.</li>
<li><strong>Prix :</strong> Achat unique, abonnement ou gratuit.</li>
</ul>

<h2>iStat Menus</h2>
<p>Le moniteur système le plus établi pour Mac. Profondeur de personnalisation inégalée. Prix : 11,99 $ ou inclus dans Setapp.</p>
<p><strong>Avantages :</strong> Décennies de développement. Notifications par seuils. Intégration météo.</p>
<p><strong>Inconvénients :</strong> Interface datée. Options écrasantes pour les débutants. Pas sur le Mac App Store.</p>

<h2>Stats</h2>
<p>Moniteur gratuit et open source sur GitHub. Couvre CPU, GPU, mémoire, disque, réseau, batterie, capteurs.</p>
<p><strong>Avantages :</strong> Entièrement gratuit. Transparent. Léger.</p>
<p><strong>Inconvénients :</strong> Interface fonctionnelle mais pas polie. Précision des capteurs Apple Silicon historiquement en retard.</p>

<h2>MenuMeters</h2>
<p>Un des plus anciens moniteurs Mac. Métriques limitées : CPU, mémoire, disque, réseau uniquement.</p>
<p><strong>Avantages :</strong> Extrêmement léger. Simple.</p>
<p><strong>Inconvénients :</strong> Pas de température, batterie ni GPU. Rarement mis à jour.</p>

<h2>TG Pro</h2>
<p>Spécialiste de la température et du contrôle des ventilateurs. Prix : 20 $.</p>
<p><strong>Avantages :</strong> Meilleure couverture des capteurs de température. Courbes de ventilateurs personnalisées.</p>
<p><strong>Inconvénients :</strong> Outil à usage unique. Pas de monitoring réseau ou mémoire complet.</p>

<h2>Pulse</h2>
<p><a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a> est une entrée récente, construite avec SwiftUI pour macOS 14+. CPU, GPU, mémoire, réseau, batterie, température, disque, ventilateurs et processus. Prix : 5,99 $ sur le Mac App Store.</p>
<p><strong>Avantages :</strong> Couverture complète rivale d'iStat Menus à une fraction du prix. Interface SwiftUI native et moderne. Très faible consommation. Disponible sur le Mac App Store. Respectueux de la vie privée.</p>
<p><strong>Inconvénients :</strong> App plus récente avec un historique plus court.</p>

<h2>Tableau comparatif</h2>
<table>
<tr><th>Fonctionnalité</th><th>iStat Menus</th><th>Stats</th><th>MenuMeters</th><th>TG Pro</th><th>Pulse</th></tr>
<tr><td>CPU</td><td>Oui</td><td>Oui</td><td>Oui</td><td>Basique</td><td>Oui</td></tr>
<tr><td>Pression mémoire</td><td>Oui</td><td>Oui</td><td>Basique</td><td>Non</td><td>Oui</td></tr>
<tr><td>Réseau</td><td>Oui</td><td>Oui</td><td>Oui</td><td>Non</td><td>Oui</td></tr>
<tr><td>Température</td><td>Oui</td><td>Oui</td><td>Non</td><td>Oui</td><td>Oui</td></tr>
<tr><td>Batterie</td><td>Oui</td><td>Oui</td><td>Non</td><td>Basique</td><td>Oui</td></tr>
<tr><td>Mac App Store</td><td>Non</td><td>Non</td><td>Non</td><td>Non</td><td>Oui</td></tr>
<tr><td>Prix</td><td>11,99 $</td><td>Gratuit</td><td>Gratuit</td><td>20 $</td><td>5,99 $</td></tr>
</table>

<h2>Quel moniteur choisir ?</h2>
<ul>
<li><strong>Personnalisation maximale :</strong> iStat Menus.</li>
<li><strong>Gratuit :</strong> Stats.</li>
<li><strong>Température et ventilateurs :</strong> TG Pro.</li>
<li><strong>Meilleur rapport qualité-prix :</strong> <a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a>.</li>
<li><strong>Minimal :</strong> MenuMeters.</li>
</ul>
`,
  },

  "how-to-monitor-network-speed-on-mac": {
    slug: "how-to-monitor-network-speed-on-mac",
    title: "Comment surveiller la vitesse réseau sur Mac en temps réel",
    description:
      "Apprenez à suivre les vitesses upload et download sur votre Mac avec le Moniteur d'activité, le Terminal et les apps de barre de menus. Inclut des astuces de dépannage.",
    date: "2026-04-02",
    content: `
<p>Que vous téléchargiez un fichier volumineux, participiez à un appel vidéo ou dépanniez une connexion internet lente, connaître la vitesse réseau en temps réel de votre Mac est extrêmement utile. macOS fournit quelques outils de base, mais pour une surveillance continue, les applications tierces sont bien plus pratiques.</p>

<h2>Métriques réseau essentielles</h2>
<ul>
<li><strong>Vitesse de téléchargement :</strong> Mesurée en Mbps ou MB/s. 1 MB/s = 8 Mbps.</li>
<li><strong>Vitesse d'upload :</strong> Importante pour les appels vidéo et les sauvegardes cloud.</li>
<li><strong>Latence (ping) :</strong> Temps aller-retour en millisecondes. Moins de 20 ms est idéal.</li>
</ul>

<h2>Méthode 1 : Moniteur d'activité</h2>
<p>Ouvrez le Moniteur d'activité et cliquez sur l'onglet Réseau. En bas : Données reçues/s et Données envoyées/s. L'onglet liste aussi tous les processus utilisant le réseau.</p>

<h2>Méthode 2 : Commandes Terminal</h2>
<p><strong>nettop</strong> pour une vue en temps réel. <strong>brew install speedtest-cli</strong> puis <strong>speedtest-cli</strong> pour un test de vitesse ponctuel.</p>

<h2>Méthode 3 : Apps de barre de menus</h2>
<p><a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a> affiche la vitesse upload/download en temps réel dans la barre de menus. Cliquez pour voir les graphiques de débit, IP locale, IP publique et interface active.</p>

<h2>Méthode 4 : Diagnostics Wi-Fi</h2>
<p>Maintenez Option et cliquez sur l'icône Wi-Fi pour voir le canal, RSSI, niveau de bruit et débit de transmission.</p>

<h2>Dépannage réseau lent</h2>
<ol>
<li><strong>Exclure le côté serveur :</strong> Lancez un test de vitesse.</li>
<li><strong>Vérifier le signal Wi-Fi :</strong> RSSI de -30 à -50 est excellent, -50 à -70 acceptable, en dessous de -70 faible.</li>
<li><strong>Identifier les consommateurs de bande passante :</strong> Utilisez <a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a> ou le Moniteur d'activité.</li>
<li><strong>Passer à l'Ethernet :</strong> Élimine les variables Wi-Fi.</li>
<li><strong>Changer de serveurs DNS :</strong> Essayez Cloudflare (1.1.1.1) ou Google (8.8.8.8).</li>
<li><strong>Vérifier le VPN :</strong> Déconnectez temporairement pour tester.</li>
<li><strong>Redémarrer le routeur.</strong></li>
</ol>

<h2>Résumé</h2>
<p>Surveiller la vitesse réseau de votre Mac en temps réel vous aide à comprendre votre connexion et résoudre les problèmes efficacement. Une app de barre de menus offre une visibilité continue et instantanée.</p>
`,
  },

  "mac-running-slow-how-to-fix": {
    slug: "mac-running-slow-how-to-fix",
    title: "Mac lent ? Comment diagnostiquer et résoudre les problèmes de performances",
    description:
      "Un guide systématique pour comprendre pourquoi votre Mac est lent. Apprenez à distinguer les goulots d'étranglement CPU, mémoire et disque et à les corriger.",
    date: "2026-04-02",
    content: `
<p>Il y a peu de choses plus frustrantes qu'un Mac lent. La roue tournante, le redimensionnement de fenêtre saccadé, le délai de cinq secondes pour changer d'application — ces symptômes rendent même du matériel puissant inutilisable. Mais « lent » est une description vague qui peut avoir de nombreuses causes différentes.</p>

<h2>Étape 1 : Identifier le type de goulot d'étranglement</h2>
<ul>
<li><strong>Lié au CPU :</strong> Processeur au maximum. Ventilateurs à fond, réponse lente des apps.</li>
<li><strong>Lié à la mémoire :</strong> RAM insuffisante. Roue tournante, pression mémoire jaune/rouge, swap élevé.</li>
<li><strong>Lié au disque :</strong> Stockage presque plein, défaillant ou surchargé par le swap.</li>
<li><strong>Lié au réseau :</strong> Internet lent.</li>
</ul>

<h2>Étape 2 : Ouvrir le Moniteur d'activité</h2>
<p>Vérifiez l'onglet CPU (triez par % CPU), l'onglet Mémoire (graphique de pression et swap) et l'onglet Disque.</p>

<h2>Étape 3 : Utiliser un moniteur de barre de menus</h2>
<p>Un moniteur comme <a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a> garde les métriques clés toujours visibles pour capturer le moment où les choses ralentissent.</p>

<h2>Étape 4 : Résoudre les ralentissements CPU</h2>
<ol>
<li>Quitter le processus fautif.</li>
<li>Mettre à jour vos applications.</li>
<li>Réduire la charge du navigateur.</li>
<li>Désactiver les éléments de connexion inutiles.</li>
</ol>

<h2>Étape 5 : Résoudre les ralentissements mémoire</h2>
<ol>
<li>Fermer les apps gourmandes en mémoire.</li>
<li>Redémarrer votre Mac.</li>
<li>Réduire le nombre d'apps ouvertes.</li>
<li>Augmenter la RAM (si possible).</li>
</ol>

<h2>Étape 6 : Résoudre les ralentissements disque</h2>
<ol>
<li>Libérer de l'espace de stockage.</li>
<li>Vérifier la santé du disque avec Utilitaire de disque.</li>
<li>Réduire la pression swap.</li>
<li>Planifier les sauvegardes en dehors des heures de travail.</li>
</ol>

<h2>Maintenance générale</h2>
<ul>
<li>Garder macOS à jour.</li>
<li>Redémarrer régulièrement.</li>
<li>Préférer les applications natives.</li>
</ul>

<h2>Résumé</h2>
<p>Diagnostiquer un Mac lent nécessite d'identifier si le goulot d'étranglement est le CPU, la mémoire, le disque ou le réseau. Utilisez le Moniteur d'activité pour le diagnostic ponctuel et un outil comme <a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a> pour la surveillance continue.</p>
`,
  },

  "how-to-check-battery-health-on-mac": {
    slug: "how-to-check-battery-health-on-mac",
    title: "Comment vérifier la santé de la batterie de votre MacBook : Guide complet",
    description:
      "Toutes les méthodes pour vérifier la santé de la batterie de votre MacBook — Réglages Système, Terminal, cycles de charge et applications tierces.",
    date: "2026-04-02",
    content: `
<p>La batterie de votre MacBook ne dure pas éternellement. Avec le temps, les processus chimiques dans les cellules lithium-ion se dégradent, réduisant la capacité maximale. Surveiller la santé de la batterie vous aide à planifier un remplacement et ajuster vos habitudes de charge.</p>

<h2>Ce que signifie la santé de la batterie</h2>
<ul>
<li><strong>Capacité maximale :</strong> Le pourcentage de la capacité d'origine restante. Apple considère une batterie consommée sous 80 %.</li>
<li><strong>Nombre de cycles :</strong> Un cycle = utiliser puis recharger 100 % de la capacité. La plupart des MacBook sont conçus pour 1 000 cycles.</li>
</ul>

<h2>Méthode 1 : Réglages Système</h2>
<p>Apple menu > Réglages Système > Batterie > cliquez sur ⓘ à côté de Santé de la batterie.</p>

<h2>Méthode 2 : Informations Système</h2>
<p>Option + clic sur le menu Apple > Informations Système > Alimentation. Affiche le nombre de cycles, la capacité totale et la capacité de conception.</p>

<h2>Méthode 3 : Terminal</h2>
<p><strong>system_profiler SPPowerDataType</strong> pour les informations complètes. <strong>pmset -g batt</strong> pour le pourcentage actuel.</p>

<h2>Méthode 4 : Apps de barre de menus</h2>
<p><a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a> affiche la santé de la batterie, les cycles, la puissance et le temps restant directement dans la barre de menus.</p>

<h2>Comprendre les cycles de charge</h2>
<ul>
<li><strong>0–200 :</strong> Batterie essentiellement neuve. 95–100 % de capacité.</li>
<li><strong>200–500 :</strong> Usage modéré. 85–95 %.</li>
<li><strong>500–800 :</strong> Bien utilisée. 80–90 %.</li>
<li><strong>800–1000 :</strong> Approche de la limite. 75–85 %.</li>
<li><strong>1000+ :</strong> Au-delà de la durée de vie nominale.</li>
</ul>

<h2>Comment prolonger la durée de vie de la batterie</h2>
<ul>
<li>Activer le Chargement optimisé de la batterie.</li>
<li>Éviter les températures extrêmes.</li>
<li>Maintenir la charge entre 20 % et 80 %.</li>
<li>Stocker à 50 % pour le stockage prolongé.</li>
</ul>

<h2>Résumé</h2>
<p>Vérifier la santé de la batterie est facile avec les outils Apple et encore plus simple avec un moniteur de barre de menus comme <a href="https://apps.apple.com/app/pulse-system-monitor/id6744194761">Pulse</a>. Les métriques clés sont la capacité maximale et le nombre de cycles. Adoptez de bonnes habitudes de charge pour maximiser la durée de vie.</p>
`,
  },
};
