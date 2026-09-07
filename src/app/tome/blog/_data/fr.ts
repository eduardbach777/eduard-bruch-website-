import type { ArticleSet } from "./index";

export const frArticles: ArticleSet = {
  "best-sqlite-browser-mac": {
    slug: "best-sqlite-browser-mac",
    title: "Meilleur navigateur SQLite pour Mac",
    description:
      "La plupart des navigateurs SQLite sur Mac sont des applications Electron multiplateformes qui semblent déplacées. Trouver un outil qui se comporte vraiment comme une app Mac demande plus de recherches que ça ne devrait.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous avez une base de données SQLite à inspecter. Vous cherchez un navigateur, téléchargez quelque chose de prometteur, et remarquez immédiatement qu'il ne prend en charge aucune fonctionnalité native de macOS — pas d'onglets de documents, pas de mode sombre système, pas d'intégration Spotlight. On dirait une app Linux déguisée en app Mac. C'est la réalité de la plupart des navigateurs SQLite disponibles aujourd'hui.</p>

<h2>Pourquoi la plupart des navigateurs SQLite déçoivent sur Mac</h2>
<p>La majorité des outils de base de données sont construits avec Electron ou Java, conçus pour fonctionner partout et optimisés pour nulle part. Ils ignorent les conventions Mac dont vous dépendez : glisser-déposer depuis le Finder, gestion correcte des fenêtres, défilement fluide dans de larges ensembles de résultats. Vous finissez par lutter contre l'outil au lieu de vous concentrer sur vos données.</p>
<p>DB Browser for SQLite est open source et fonctionnel, mais c'est une application Qt — raccourcis clavier inhabituels, boîtes de dialogue de fichiers non natives, et aucune intégration avec le reste de votre workflow macOS. TablePlus a une meilleure apparence mais cible tous les moteurs de bases de données, ce qui relègue SQLite au second plan.</p>

<h2>Un navigateur SQLite conçu pour Mac depuis le départ</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> est un navigateur SQLite natif pour macOS, conçu spécifiquement pour ouvrir, parcourir et modifier des bases de données SQLite. Il utilise AppKit et Swift — pas d'Electron, aucun compromis multiplateforme. Il se lance instantanément, respecte l'apparence de votre système, et fonctionne comme les apps Mac devraient fonctionner.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome — navigateur SQLite natif pour Mac affichant des tables et un éditeur de requêtes" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Parcourez tables, vues, index et déclencheurs</h3>
<p>Ouvrez n'importe quel fichier .db, .sqlite ou .sqlite3 et voyez immédiatement toutes les tables, vues, index et déclencheurs de votre base de données. Cliquez sur une table pour parcourir son contenu avec un défilement natif et rapide. Plus besoin d'attendre qu'une vue web affiche des milliers de lignes.</p>

<h3>Modifiez les données directement</h3>
<p>Cliquez sur n'importe quelle cellule pour la modifier directement. Insérez de nouvelles lignes, supprimez celles existantes, ou créez entièrement de nouvelles tables à l'aide d'un éditeur visuel — aucun SQL requis pour les opérations de base. Quand vous avez besoin de SQL, Tome inclut un éditeur de requêtes avec coloration syntaxique et auto-complétion.</p>

<h3>Basé sur des documents — ouvrez plusieurs bases de données côte à côte</h3>
<p>Tome fonctionne sur un modèle de documents, ce qui signifie que chaque base de données s'ouvre dans sa propre fenêtre ou son propre onglet. Comparez vos bases de staging et de production côte à côte, ou gardez une base de référence ouverte pendant que vous travaillez sur une autre. Cela fonctionne exactement comme n'importe quelle app Mac basée sur des documents — parce que c'en est une.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenez Tome sur le Mac App Store</a></p>
`,
  },

  "view-sqlite-database-mac": {
    slug: "view-sqlite-database-mac",
    title: "Comment visualiser une base de données SQLite sur Mac",
    description:
      "Les fichiers SQLite se trouvent partout sur votre Mac — données d'applications, stockages Core Data, historique de navigateur — mais macOS n'offre aucun moyen intégré de les ouvrir et de les consulter.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous avez trouvé un fichier .sqlite dans le dossier de votre projet ou enfoui dans le conteneur d'une application. Vous double-cliquez dessus et macOS ne sait pas quoi en faire. Vous pourriez ouvrir le Terminal et taper <code>sqlite3 mydatabase.db</code>, mais lire des données tabulaires dans une fenêtre de terminal est pénible — pas d'alignement de colonnes, pas de défilement, aucun moyen de parcourir rapidement des centaines de lignes.</p>

<h2>L'approche Terminal et ses limites</h2>
<p>L'outil en ligne de commande <code>sqlite3</code> intégré est livré avec chaque Mac. Il fonctionne, techniquement. Vous pouvez lancer <code>.tables</code> pour lister les tables et <code>SELECT * FROM tablename;</code> pour afficher les lignes. Mais le résultat est du texte brut. Les tables larges s'enroulent maladroitement. Impossible de cliquer sur une valeur pour la modifier. Et si vous êtes designer, chef de produit, ou toute personne qui ne vit pas dans le Terminal, ce n'est pas un workflow réaliste.</p>
<p>Vous pourriez essayer d'ouvrir le fichier dans un éditeur de texte, mais les bases de données SQLite sont binaires — vous verrez des caractères illisibles, pas vos données.</p>

<h2>Visualisez n'importe quelle base SQLite visuellement avec Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> vous offre une véritable interface visuelle pour les bases de données SQLite sur Mac. Glissez un fichier .db, .sqlite ou .sqlite3 sur l'icône de l'application ou utilisez Fichier → Ouvrir, et votre base de données apparaît instantanément — tables listées dans une barre latérale, données affichées dans une grille défilante.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome affichant une base de données SQLite avec ses tables et lignes de données" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Voyez votre schéma d'un coup d'œil</h3>
<p>Chaque table, vue, index et déclencheur est listé dans la barre latérale. Cliquez sur une table pour voir ses lignes. Cliquez sur une vue pour voir ses résultats. Aucune commande à mémoriser — il suffit de pointer et cliquer.</p>

<h3>Exécutez des requêtes quand vous en avez besoin</h3>
<p>Pour tout ce qui dépasse la simple consultation, l'éditeur de requêtes SQL de Tome est prêt. Il inclut la coloration syntaxique et l'auto-complétion des noms de tables et de colonnes, pour écrire des requêtes plus vite que dans le Terminal sans avoir à deviner les noms de colonnes de mémoire.</p>

<h3>Cas d'usage courants</h3>
<p>Déboguer une app iOS ou Android qui stocke des données en SQLite. Inspecter la base de données produite par un scraper web. Vérifier une base de données de développement Django ou Rails. Consulter l'historique ou les favoris de navigateur stockés en SQLite. Tout cela devient simple — ouvrez le fichier, voyez les données.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenez Tome sur le Mac App Store</a></p>
`,
  },

  "native-sqlite-editor-mac": {
    slug: "native-sqlite-editor-mac",
    title: "Éditeur SQLite natif pour Mac — sans Electron",
    description:
      "Les outils de base de données basés sur Electron consomment des centaines de mégaoctets de RAM juste pour afficher une table. Un éditeur natif pour macOS redéfinit ce que « léger » veut vraiment dire.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous ouvrez votre outil de base de données et le Moniteur d'activité affiche 400 Mo de RAM consommés avant même d'avoir chargé un fichier. L'interface saccade en faisant défiler une grande table. Les raccourcis clavier ne correspondent pas à ceux de toutes les autres apps Mac. Voilà ce qui se passe quand votre éditeur SQLite est en réalité un navigateur web déguisé en application de bureau.</p>

<h2>Le problème Electron</h2>
<p>Les applications Electron embarquent un navigateur Chromium complet pour afficher leur interface. Pour un éditeur de base de données — une application qui affiche surtout des tables de texte — c'est une surcharge extrême. Vous obtenez des temps de démarrage lents, une consommation mémoire élevée, et une interface qui ne se sent jamais vraiment à sa place sur macOS. Les boîtes de dialogue de fichiers ont un aspect différent. Le rendu du texte est légèrement décalé. L'app n'apparaît pas correctement dans le menu « Ouvrir avec » du Finder.</p>
<p>Certains développeurs choisissent Electron parce que cela leur permet de sortir une version pour Mac, Windows et Linux à partir d'un seul code source. C'est une décision commerciale raisonnable, mais c'est vous qui payez la facture en performance à chaque ouverture d'une base de données.</p>

<h2>Tome : construit avec AppKit, pas avec un navigateur web</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> est une application native pour macOS construite avec Swift et AppKit. Elle utilise les mêmes frameworks que le Finder, Xcode, et toute autre application Apple de première partie. Le résultat est un éditeur SQLite qui se lance en moins d'une seconde, défile en douceur à travers des dizaines de milliers de lignes, et utilise une fraction de la mémoire qu'exigerait une application Electron.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Éditeur SQLite natif macOS Tome avec barre latérale et grille de données" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Une véritable intégration macOS</h3>
<p>Tome s'enregistre comme gestionnaire pour les fichiers .db, .sqlite et .sqlite3. Double-cliquez sur une base de données dans le Finder et elle s'ouvre directement. Glissez des fichiers sur l'icône du dock. Utilisez les onglets et la gestion des fenêtres de macOS. Tout fonctionne comme vous l'attendez d'une app Mac, parce que c'en est une.</p>

<h3>Modifiez sans écrire de SQL</h3>
<p>Cliquez sur n'importe quelle cellule pour modifier sa valeur directement. Insérez des lignes, supprimez des lignes, et créez de nouvelles tables à l'aide d'un éditeur visuel. Quand vous avez besoin de SQL, l'éditeur de requêtes intégré dispose de coloration syntaxique et d'auto-complétion — mais pour les modifications du quotidien, vous n'avez jamais besoin d'y toucher.</p>

<h3>Léger par conception</h3>
<p>Tome fait une seule chose, mais bien : SQLite. Il n'essaie pas de se connecter à PostgreSQL, MySQL ou MongoDB. En se concentrant exclusivement sur SQLite, chaque fonctionnalité est optimisée pour le format sur lequel vous travaillez réellement.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenez Tome sur le Mac App Store</a></p>
`,
  },

  "db-browser-alternative-mac": {
    slug: "db-browser-alternative-mac",
    title: "Alternative à DB Browser for SQLite sur Mac",
    description:
      "DB Browser for SQLite fonctionne, mais son interface Qt semble étrangère sur macOS — mauvais raccourcis, boîtes de dialogue de fichiers non natives, et aucune intégration avec le reste de votre workflow.",
    date: "2026-09-06",
    readTime: "5 min de lecture",
    content: `
<p>DB Browser for SQLite (DB4S) est l'outil gratuit de référence pour consulter les bases de données SQLite. Il est open source, multiplateforme, et existe depuis des années. Mais si vous l'utilisez sur Mac, vous avez remarqué les frictions : Cmd+Q ne fonctionne parfois pas comme attendu, les boîtes de dialogue de fichiers semblent appartenir à un autre système d'exploitation, et l'interface ne correspond jamais tout à fait à vos autres applications. Ça marche — mais ça ne semble pas juste.</p>

<h2>Où DB Browser pêche sur Mac</h2>
<p>DB4S est construit avec Qt, un framework d'interface multiplateforme. Sur Mac, cela signifie que l'app n'utilise pas les contrôles natifs de macOS. Vous le remarquez dans les petits détails : la barre d'onglets ne correspond pas à celle de Safari, la physique du défilement semble décalée, et il n'y a ni Handoff, ni intégration Spotlight, ni véritable prise en charge du mode sombre. L'app ne prend pas non plus en charge l'architecture basée sur les documents de macOS, donc vous ne pouvez pas ouvrir plusieurs bases de données dans des onglets natifs.</p>
<p>La performance est un autre problème. Ouvrir une base de données avec une grande table peut sembler poussif, et l'interface se fige parfois pendant l'exécution de requêtes. Pour une application de bureau en 2026, les utilisateurs attendent une meilleure réactivité.</p>
<p>Rien de tout cela ne fait de DB4S un mauvais outil — il est excellent pour ce qu'il est. Mais si vous êtes sur Mac et que vous voulez quelque chose qui paraisse natif, il laisse un vide.</p>

<h2>Tome : une alternative native pour macOS</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> comble ce vide. C'est un navigateur et éditeur SQLite natif conçu spécifiquement pour macOS avec Swift et AppKit. Il fait tout ce que fait DB Browser au quotidien — parcourir des tables, modifier des données, exécuter des requêtes — mais dans une interface qui a sa place sur votre Mac.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome comme alternative native à DB Browser for SQLite sur Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Tout ce que vous faites avec DB Browser, mais en natif</h3>
<p>Parcourez tables, vues, index et déclencheurs dans une barre latérale claire. Consultez les données de vos lignes dans une grille rapide et défilante. Modifiez les cellules directement sans écrire de SQL. Insérez et supprimez des lignes d'un clic. Créez de nouvelles tables avec un éditeur visuel au lieu d'écrire des instructions CREATE TABLE à la main.</p>

<h3>Éditeur de requêtes SQL quand vous en avez besoin</h3>
<p>Tome inclut un éditeur de requêtes SQL complet avec coloration syntaxique et auto-complétion pour vos noms de tables et de colonnes. Exécutez SELECT, UPDATE, DELETE ou toute autre requête et voyez les résultats instantanément.</p>

<h3>Workflow basé sur les documents</h3>
<p>Contrairement à DB4S, Tome utilise l'architecture de documents de macOS. Chaque base de données s'ouvre dans sa propre fenêtre ou son propre onglet. Vous pouvez avoir plusieurs bases de données ouvertes simultanément, disposées côte à côte, et basculer entre elles comme vous le feriez entre des documents dans n'importe quelle autre app Mac.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenez Tome sur le Mac App Store</a></p>
`,
  },

  "tableplus-alternative-mac-sqlite": {
    slug: "tableplus-alternative-mac-sqlite",
    title: "Alternative à TablePlus pour Mac — uniquement SQLite",
    description:
      "TablePlus prend en charge toutes les bases de données, ce qui signifie que SQLite n'a jamais toute son attention. Si SQLite est tout ce dont vous avez besoin, la complexité supplémentaire ne fait que gêner.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>TablePlus est un client de base de données bien conçu qui prend en charge PostgreSQL, MySQL, SQLite, Redis, MongoDB, et plus encore. C'est un logiciel réellement bon. Mais si vous ne travaillez qu'avec des fichiers SQLite, vous naviguez entre des boîtes de dialogue de connexion, des paramètres de pilotes, et des éléments d'interface qui existent pour des bases de données que vous n'utiliserez jamais. C'est comme acheter un couteau suisse alors que vous n'avez besoin que de la lame.</p>

<h2>Quand un outil multi-base de données devient excessif</h2>
<p>Chaque fois que vous ouvrez TablePlus, vous voyez un gestionnaire de connexions conçu pour des serveurs de bases de données distants. Pour SQLite — une base de données locale basée sur des fichiers — ce workflow ajoute des étapes inutiles. Vous n'avez pas besoin de chaînes de connexion, de ports, ou d'identifiants. Vous avez simplement besoin d'ouvrir un fichier.</p>
<p>TablePlus utilise aussi un modèle d'abonnement qui reflète son large éventail de fonctionnalités. Si vous ne vous connectez pas à PostgreSQL ou MySQL, vous payez pour des capacités que vous n'utilisez pas. Le forfait gratuit vous limite à un certain nombre d'onglets et de lignes ouverts, ce qui peut être frustrant en plein développement actif.</p>
<p>L'interface, bien que soignée, est conçue pour accommoder toutes les bases de données prises en charge. Des fonctionnalités spécifiques à SQLite comme la consultation des déclencheurs ou l'inspection de la structure interne du fichier passent au second plan derrière des fonctionnalités plus pertinentes pour les bases de données côté serveur.</p>

<h2>Tome : conçu spécifiquement pour SQLite sur Mac</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> est une application native pour macOS qui fait une seule chose : SQLite. Pas de gestionnaire de connexions, pas de configuration de pilotes, pas de fonctionnalités pour des bases de données que vous n'utilisez pas. Ouvrez un fichier .db, .sqlite ou .sqlite3 et commencez à travailler immédiatement.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome — navigateur SQLite ciblé comme alternative à TablePlus" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Un workflow centré sur les fichiers</h3>
<p>Double-cliquez sur un fichier SQLite dans le Finder et Tome l'ouvre. Glissez un fichier sur l'icône du dock. Utilisez Fichier → Ouvrir. Pas de configuration de connexion, pas de configuration serveur. SQLite est un format de fichier, et Tome le traite comme tel.</p>

<h3>Couverture complète de SQLite</h3>
<p>Parcourez tables, vues, index et déclencheurs. Modifiez les cellules directement. Insérez et supprimez des lignes. Créez des tables avec un éditeur visuel. Exécutez des requêtes SQL avec coloration syntaxique et auto-complétion. Chaque fonctionnalité existe parce qu'elle a du sens pour SQLite.</p>

<h3>Plusieurs bases de données, à la manière Mac</h3>
<p>Tome fonctionne sur un modèle de documents. Ouvrez cinq bases de données et chacune obtient sa propre fenêtre ou son propre onglet. Comparez les données entre plusieurs bases en plaçant les fenêtres côte à côte — le même workflow que vous utilisez avec des fichiers texte, des feuilles de calcul, ou tout autre document sur votre Mac.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenez Tome sur le Mac App Store</a></p>
`,
  },

  "open-sqlite3-file-mac": {
    slug: "open-sqlite3-file-mac",
    title: "Comment ouvrir des fichiers .sqlite3 sur Mac sans Terminal",
    description:
      "Double-cliquer sur un fichier .sqlite3 sur Mac ne fait rien d'utile. macOS ne reconnaît pas le format, et le Terminal est la seule option intégrée.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous avez un fichier .sqlite3 — peut-être exporté depuis un projet Django, extrait du conteneur d'une app iOS, ou téléchargé depuis un collègue. Vous double-cliquez dessus sur votre Mac et obtenez la boîte de dialogue « aucune application définie pour ouvrir », ou pire, il s'ouvre dans un éditeur de texte et affiche du charabia binaire. macOS ne sait tout simplement pas quoi faire des fichiers SQLite d'origine.</p>

<h2>Les options par défaut sont toutes mauvaises</h2>
<p>Sans rien installer, votre seule option est le Terminal. Ouvrez-le, naviguez jusqu'au répertoire du fichier, et tapez <code>sqlite3 yourfile.sqlite3</code>. À partir de là, vous pouvez exécuter des commandes comme <code>.tables</code> et <code>SELECT * FROM tablename;</code> — mais le résultat est du texte brut sans mise en forme, sans défilement, et sans aucun moyen de modifier les données visuellement.</p>
<p>Si vous êtes développeur à l'aise dans le Terminal, cela fonctionne pour des vérifications rapides. Mais pour tout ce qui dépasse une simple requête — parcourir plusieurs tables, modifier des valeurs, comprendre un schéma — c'est lent et sujet aux erreurs. Et si vous n'êtes pas développeur, c'est carrément inutilisable.</p>
<p>Certains essaient des visualiseurs SQLite en ligne qui s'exécutent dans le navigateur. Ceux-ci exigent de téléverser votre fichier de base de données vers un serveur, ce qui soulève des questions évidentes de confidentialité — surtout si la base de données contient des données utilisateur ou des identifiants.</p>

<h2>Ouvrez des fichiers .sqlite3 d'un double-clic avec Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> s'enregistre comme gestionnaire pour les fichiers .sqlite3, .sqlite et .db sur macOS. Après l'avoir installé, vous pouvez double-cliquer sur n'importe quel fichier SQLite dans le Finder et il s'ouvre directement dans Tome — tables listées dans la barre latérale, données affichées dans une grille défilante, prêtes à consulter.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome ouvrant un fichier .sqlite3 sur Mac avec navigateur visuel de tables" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Aucun Terminal requis</h3>
<p>Parcourez chaque table, vue, index et déclencheur visuellement. Faites défiler les lignes comme vous le feriez dans une feuille de calcul. Cliquez sur les en-têtes de colonnes pour comprendre votre schéma. Tout est visuel, immédiat, et ne demande aucune connaissance de la ligne de commande.</p>

<h3>Modifiez les données sans SQL</h3>
<p>Besoin de changer une valeur ? Cliquez sur la cellule et tapez. Besoin d'ajouter une ligne ? Cliquez sur insérer. Besoin de supprimer des enregistrements ? Sélectionnez et supprimez. Pour des opérations plus complexes, Tome inclut un éditeur de requêtes SQL avec coloration syntaxique et auto-complétion — mais pour les tâches quotidiennes, vous en aurez rarement besoin.</p>

<h3>Vos données restent locales</h3>
<p>Tome est une application native pour macOS. Votre fichier de base de données ne quitte jamais votre machine. Aucun téléversement, aucun traitement dans le cloud, aucun souci de confidentialité. Ouvrir, parcourir, modifier, fermer — tout se passe localement.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenez Tome sur le Mac App Store</a></p>
`,
  },

  "edit-sqlite-database-mac": {
    slug: "edit-sqlite-database-mac",
    title: "Comment modifier une base de données SQLite sur Mac",
    description:
      "Modifier une base de données SQLite sur Mac signifie généralement écrire des instructions UPDATE dans le Terminal. Pour un simple changement de valeur, c'est beaucoup de cérémonie.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous devez changer une seule valeur dans une base de données SQLite. Peut-être un indicateur à inverser, un nom d'utilisateur à corriger, ou des données de test à ajuster. La méthode intégrée sur Mac consiste à ouvrir le Terminal, lancer <code>sqlite3</code>, écrire une instruction UPDATE avec la clause WHERE exacte pour cibler la bonne ligne, et espérer ne pas avoir fait de faute de frappe qui modifierait les mauvais enregistrements. Pour une seule valeur. En 2026.</p>

<h2>Pourquoi l'édition via Terminal est risquée</h2>
<p>Écrire des instructions UPDATE manuellement est acceptable quand vous savez exactement ce que vous faites. Mais il est dangereusement facile d'oublier une clause WHERE et de mettre à jour chaque ligne de la table, ou de mal orthographier un nom de colonne et d'obtenir une erreur silencieuse. Il n'y a pas d'annulation dans la CLI <code>sqlite3</code> — une fois l'instruction exécutée, le changement est permanent, sauf si vous avez pensé à démarrer une transaction.</p>
<p>Créer de nouvelles tables est tout aussi fastidieux. Vous devez écrire l'instruction CREATE TABLE complète avec noms de colonnes, types et contraintes — une syntaxe facile à mal utiliser quand vous prototypez et itérez rapidement.</p>
<p>Pour les développeurs qui pensent en SQL, c'est gérable. Pour tous les autres — et pour les développeurs qui veulent simplement faire une modification rapide sans le risque — il devrait exister une meilleure méthode.</p>

<h2>Modifiez des bases de données SQLite visuellement avec Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> vous permet de modifier des bases de données SQLite sur Mac comme vous modifieriez une feuille de calcul. Ouvrez la base de données, cliquez sur une cellule, changez la valeur. Aucun SQL requis pour les modifications de base.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Édition de cellule intégrée dans une base de données SQLite avec Tome sur Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Modification de cellule directe</h3>
<p>Cliquez sur n'importe quelle cellule d'une table pour modifier sa valeur directement. Changez du texte, des nombres ou des dates sans écrire d'instruction UPDATE. Le changement cible exactement la ligne sur laquelle vous avez cliqué — aucun risque qu'une clause WHERE manquante affecte d'autres enregistrements.</p>

<h3>Insérer et supprimer des lignes</h3>
<p>Ajoutez de nouvelles lignes à n'importe quelle table en un seul clic. Supprimez des lignes sélectionnées tout aussi facilement. Tome gère le SQL d'INSERT et de DELETE en arrière-plan, pour que vous puissiez vous concentrer sur vos données, pas sur votre syntaxe.</p>

<h3>Créez des tables visuellement</h3>
<p>Besoin d'une nouvelle table ? L'éditeur visuel de tables de Tome vous permet de définir colonnes, types et contraintes dans un formulaire. Pas besoin d'écrire des instructions CREATE TABLE de mémoire — remplissez simplement les champs et Tome génère le SQL correct.</p>

<h3>Éditeur SQL pour les opérations complexes</h3>
<p>Quand vous avez vraiment besoin de SQL — pour des jointures, des agrégations ou des mises à jour groupées — l'éditeur de requêtes de Tome est prêt avec coloration syntaxique et auto-complétion pour vos noms de tables et de colonnes.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenez Tome sur le Mac App Store</a></p>
`,
  },

  "sql-query-editor-mac-native": {
    slug: "sql-query-editor-mac-native",
    title: "Éditeur de requêtes SQL pour Mac — natif et rapide",
    description:
      "Exécuter des requêtes SQL contre une base de données SQLite sur Mac ne devrait pas nécessiter un IDE lourd ni une fenêtre de terminal. Un éditeur de requêtes ciblé suffit souvent.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous devez exécuter une requête SQL contre une base de données SQLite locale. Vos options : ouvrir le Terminal et utiliser la CLI <code>sqlite3</code> sans coloration syntaxique ni auto-complétion, ou lancer un IDE de base de données complet qui met dix secondes à démarrer et utilise un demi-gigaoctet de RAM. Aucune des deux options ne convient à la tâche — vous voulez simplement écrire une requête, l'exécuter, et voir les résultats.</p>

<h2>L'écart entre le Terminal et les IDE complets</h2>
<p>La CLI <code>sqlite3</code> offre l'exécution brute de requêtes mais zéro confort pour le développeur. Pas de coloration syntaxique, pas de complétion des noms de tables ou de colonnes, pas de grille de résultats visuelle. Vous lisez le résultat de la requête sous forme de texte brut, en ajustant manuellement la largeur de votre terminal pour voir toutes les colonnes.</p>
<p>À l'autre extrémité, des outils comme DataGrip ou DBeaver sont construits pour des workflows de base de données d'entreprise — gérer des connexions vers des serveurs distants, gérer des migrations, visualiser des schémas. Ils sont puissants, mais lourds. Pour un fichier SQLite local, lancer un IDE complet, c'est comme conduire un semi-remorque pour aller à l'épicerie du coin.</p>
<p>Ce qui manque, c'est un éditeur SQL rapide et ciblé qui ouvre un fichier SQLite et vous laisse écrire des requêtes avec les fonctionnalités de confort attendues — sans la surcharge d'un IDE complet.</p>

<h2>L'éditeur de requêtes SQL de Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> inclut un éditeur de requêtes SQL intégré, conçu spécifiquement pour SQLite. Il fait partie d'une application native pour macOS, donc il se lance instantanément et fonctionne avec une consommation de ressources minimale.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Éditeur de requêtes SQL de Tome avec coloration syntaxique sur Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Coloration syntaxique</h3>
<p>Les mots-clés SQL, noms de tables, littéraux de chaînes et nombres sont colorés pour une meilleure lisibilité. Repérez les erreurs avant d'exécuter la requête au lieu d'analyser un message d'erreur cryptique après coup.</p>

<h3>Auto-complétion</h3>
<p>Tome connaît votre schéma. Commencez à taper un nom de table et il suggère des complétions. Référencez une table dans une clause FROM et les noms de colonnes apparaissent dans les suggestions. Plus besoin de basculer entre le navigateur de schéma et l'éditeur de requêtes pour vous rappeler comment s'appelle une colonne.</p>

<h3>Résultats dans une grille native</h3>
<p>Les résultats des requêtes apparaissent dans une table native rapide et défilante — pas du HTML rendu dans une vue web. Triez les colonnes, redimensionnez-les, et faites défiler de grands ensembles de résultats avec la performance que vous attendez d'une app macOS.</p>

<h3>Parcourez et interrogez dans une seule app</h3>
<p>Tome n'est pas qu'un éditeur de requêtes. Parcourez tables, vues, index et déclencheurs dans la barre latérale. Modifiez les données directement. Créez de nouvelles tables visuellement. L'éditeur SQL est là quand vous en avez besoin, et le reste de l'app gère tout le reste.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenez Tome sur le Mac App Store</a></p>
`,
  },

  "browse-core-data-sqlite-mac": {
    slug: "browse-core-data-sqlite-mac",
    title: "Comment parcourir les fichiers SQLite de Core Data sur Mac",
    description:
      "Core Data stocke ses données dans des fichiers SQLite, mais Apple ne fournit aucun outil visuel pour les inspecter. Déboguer des données persistantes signifie fouiller dans les conteneurs d'apps et lire du résultat SQL brut.",
    date: "2026-09-06",
    readTime: "5 min de lecture",
    content: `
<p>Vous déboguez un problème Core Data dans votre app iOS ou macOS. Les données semblent incorrectes dans l'interface, et vous devez voir ce qui est réellement stocké dans le fichier SQLite sous-jacent. L'éditeur de modèle Core Data de Xcode affiche votre schéma, mais il ne vous permet pas de parcourir les données réellement persistées. Vous partez donc à la chasse — trouvez le conteneur de l'app, localisez le fichier .sqlite, ouvrez le Terminal, et commencez à exécuter des requêtes brutes contre des tables nommées ZUSER et ZPOST, où chaque colonne est préfixée d'un Z et où rien ne correspond intuitivement aux noms de vos entités.</p>

<h2>Les fichiers SQLite de Core Data sont difficiles à inspecter</h2>
<p>Core Data utilise SQLite comme stockage persistant par défaut, mais y ajoute ses propres conventions. Les noms d'entités reçoivent un préfixe Z dans le nom de la table. Les attributs reçoivent des noms de colonnes préfixés par Z. Les relations sont stockées sous forme de clés étrangères entières dans des colonnes que vous ne reconnaîtrez pas forcément immédiatement. Il y a une table Z_METADATA et une table Z_PRIMARYKEY que Core Data gère en interne.</p>
<p>Rien de tout cela n'est documenté d'une manière qui facilite l'inspection manuelle. Vous finissez par exécuter des requêtes comme <code>SELECT * FROM ZUSER;</code> et essayer de faire correspondre les colonnes préfixées par Z avec votre modèle d'objets géré. Dans le Terminal, sans coloration syntaxique ni grille visuelle, c'est fastidieux.</p>
<p>Xcode n'aide pas non plus. Il n'y a pas de navigateur SQLite intégré. L'outil Instruments peut profiler les opérations Core Data, mais il ne montrera pas les données réelles des lignes. Il vous faut un outil séparé.</p>

<h2>Parcourez les fichiers SQLite de Core Data avec Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> ouvre les fichiers SQLite de Core Data comme n'importe quelle autre base de données. Naviguez jusqu'au conteneur de votre app, trouvez le fichier .sqlite, et ouvrez-le dans Tome. Chaque table préfixée par Z apparaît dans la barre latérale. Cliquez sur l'une d'elles pour voir toutes ses lignes et leurs valeurs dans une grille défilante.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome parcourant un fichier SQLite de Core Data avec ses tables préfixées Z" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Voyez les données réelles</h3>
<p>Quand votre app affiche une valeur erronée, ouvrez le fichier SQLite dans Tome et vérifiez les données réellement stockées. La valeur est-elle incorrecte dans la base de données, ou s'agit-il d'un bug d'affichage/récupération ? Avoir un accès visuel aux données brutes répond à cette question en quelques secondes.</p>

<h3>Inspectez les relations et les métadonnées</h3>
<p>Parcourez la table Z_PRIMARYKEY pour voir comment Core Data suit les types d'entités et les clés primaires. Vérifiez les colonnes de clés étrangères pour confirmer que les relations sont correctement stockées. Inspectez Z_METADATA pour voir le hash de version du modèle.</p>

<h3>Exécutez des requêtes de diagnostic</h3>
<p>Utilisez l'éditeur de requêtes SQL de Tome pour écrire des jointures entre les tables préfixées par Z de Core Data, filtrer des enregistrements spécifiques, ou vérifier l'existence de lignes orphelines pouvant indiquer un problème de migration. La coloration syntaxique et l'auto-complétion facilitent la tâche par rapport à l'exécution de requêtes brutes dans le Terminal.</p>

<h3>Sûr à inspecter, facile à trouver</h3>
<p>Pour le Simulateur, le fichier SQLite de votre app se trouve tout au fond de <code>~/Library/Developer/CoreSimulator/</code>. Pour une app macOS, vérifiez <code>~/Library/Containers/</code> ou <code>~/Library/Application Support/</code>. Une fois le fichier localisé, glissez-le sur l'icône du dock de Tome et commencez à le parcourir.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenez Tome sur le Mac App Store</a></p>
`,
  },

  "sqlite-viewer-mac-document-based": {
    slug: "sqlite-viewer-mac-document-based",
    title: "Visualiseur SQLite pour Mac — ouvrez plusieurs bases de données côte à côte",
    description:
      "Comparer des données entre deux bases de données SQLite implique généralement de basculer entre onglets ou de lancer deux instances de votre outil de base de données. Il existe une approche plus simple.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous migrez des données d'une base de données SQLite vers une autre et devez vérifier les résultats. Ou vous comparez une base de staging à la production. Ou vous avez deux versions de la base de données d'une app et devez repérer ce qui a changé. Dans chaque cas, vous devez regarder deux bases de données simultanément — et la plupart des outils SQLite rendent cela plus difficile que nécessaire.</p>

<h2>Le jonglage avec les outils à connexion unique</h2>
<p>La plupart des navigateurs SQLite sont conçus autour d'une seule connexion de base de données à la fois. Pour comparer deux bases de données, vous ouvrez soit deux fenêtres d'application séparées manuellement (si l'outil le permet), soit vous basculez entre onglets en essayant de garder les valeurs des colonnes en mémoire. Certains outils exigent de fermer une base de données avant d'en ouvrir une autre.</p>
<p>L'approche Terminal est encore pire. Il vous faudrait deux fenêtres de terminal, chacune exécutant <code>sqlite3</code> contre un fichier différent, en essayant de comparer les résultats côte à côte en texte brut. Ça fonctionne en théorie mais s'effondre dès qu'il y a un vrai volume de données.</p>
<p>Cette limitation existe parce que la plupart des outils de base de données n'ont pas été conçus comme des applications basées sur des documents. Ils ont été conçus autour d'un gestionnaire de connexions — choisir une base de données, travailler avec, se déconnecter, en choisir une autre. C'est adapté aux bases de données de serveurs distants, mais c'est une friction inutile pour des fichiers SQLite locaux.</p>

<h2>Tome : un visualiseur SQLite basé sur les documents</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> traite chaque base de données SQLite comme un document — de la même façon que TextEdit traite les fichiers texte ou que Preview traite les PDF. Ouvrez une base de données et elle obtient sa propre fenêtre. Ouvrez-en une autre et elle obtient aussi la sienne. Disposez-les côte à côte, ou utilisez les onglets natifs de macOS pour les regrouper.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome avec plusieurs bases de données SQLite ouvertes côte à côte sur Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Comparez les bases de données visuellement</h3>
<p>Ouvrez vos bases de données source et destination dans deux fenêtres. Placez-les côte à côte à l'aide de la vue Split View de macOS ou en glissant les fenêtres. Parcourez la même table dans les deux pour comparer le nombre de lignes, les valeurs de colonnes, ou les différences de schéma. Aucun changement d'onglet, aucune valeur à mémoriser.</p>

<h3>Travaillez sur plusieurs projets</h3>
<p>Gardez une base de données de référence ouverte pendant que vous développez sur une autre. Ayez la base de données de production de votre app ouverte à côté d'une base de données de test fixe. Ouvrez le fichier de base de données d'un client pendant que le vôtre reste chargé. Tome ne limite pas le nombre de bases de données ouvertes simultanément.</p>

<h3>Ensemble complet de fonctionnalités dans chaque fenêtre</h3>
<p>Chaque fenêtre de base de données possède l'interface complète de Tome — barre latérale avec tables, vues, index et déclencheurs ; grille de données avec édition directe ; éditeur de requêtes SQL avec coloration syntaxique et auto-complétion. Il n'y a pas de notion de base de données « principale » et « secondaire ». Chaque base de données ouverte est pleinement fonctionnelle.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenez Tome sur le Mac App Store</a></p>
`,
  },

  "inspect-app-database-mac": {
    slug: "inspect-app-database-mac",
    title: "Comment inspecter la base de données d'une app sur Mac",
    description:
      "Les apps sur votre Mac stockent leurs données dans des fichiers SQLite cachés, enfouis dans les dossiers Library. Inspecter ce qu'une app a réellement enregistré implique de naviguer dans des chemins de conteneurs et de décoder du résultat de base de données brut.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Chaque app sur votre Mac qui persiste des données localement — notes, favoris, messages, données de santé, listes de tâches — stocke probablement celles-ci dans une base de données SQLite nichée dans <code>~/Library/</code> ou <code>~/Library/Containers/</code>. Peut-être voulez-vous voir quelles données une app a collectées. Peut-être devez-vous récupérer quelque chose supprimé de l'interface. Peut-être déboguez-vous votre propre app et devez vérifier ce qui a réellement été écrit sur le disque. Quelle que soit la raison, macOS ne fournit aucun moyen intégré d'inspecter ces fichiers visuellement.</p>

<h2>Trouver et ouvrir les bases de données d'apps est fastidieux</h2>
<p>D'abord, vous devez localiser le fichier. Les apps en bac à sable stockent leurs données dans <code>~/Library/Containers/com.developer.appname/Data/</code>, tandis que les apps non en bac à sable utilisent parfois <code>~/Library/Application Support/</code>. Le dossier Library est masqué par défaut — vous devez utiliser la fonction « Aller au dossier » du Finder ou naviguer via le Terminal. Une fois le fichier .sqlite ou .db trouvé, vous êtes coincé à utiliser <code>sqlite3</code> dans le Terminal, à lire le résultat de requête brut sans aucune structure visuelle.</p>
<p>Pour les apps iOS exécutées dans le Simulateur, le chemin est encore plus profond : <code>~/Library/Developer/CoreSimulator/Devices/</code> suivi d'un UUID, puis d'un autre chemin imbriqué vers le dossier Documents ou Library de l'app. Trouver la bonne base de données parmi des dizaines de dossiers de simulateurs est une véritable chasse au trésor.</p>

<h2>Inspectez n'importe quelle base de données d'app avec Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> vous permet d'ouvrir n'importe quel fichier de base de données SQLite et de voir immédiatement son contenu — tables, vues, index, déclencheurs et données des lignes — dans une interface native macOS. Une fois le fichier localisé, glissez-le simplement sur Tome ou utilisez Fichier → Ouvrir.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome inspectant la base de données SQLite d'une app sur Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Comprenez ce qu'une app stocke</h3>
<p>Parcourez chaque table pour voir exactement quelles données l'app persiste. Les noms de colonnes révèlent la conception du schéma. Les données des lignes montrent les valeurs réelles. Aucune supposition, aucune commande Terminal — cliquez simplement à travers les tables de la barre latérale et faites défiler leur contenu.</p>

<h3>Déboguez la couche de données de votre propre app</h3>
<p>Si vous développez une app macOS ou iOS qui utilise SQLite ou Core Data, Tome vous permet de vérifier que vos écritures ont bien été effectuées. Vérifiez que les relations sont intactes, inspectez les colonnes générées automatiquement, et exécutez des requêtes de diagnostic avec coloration syntaxique et auto-complétion.</p>

<h3>Récupérez ou exportez des données</h3>
<p>Besoin d'un enregistrement supprimé de l'interface d'une app mais qui existe peut-être encore dans la base de données ? Ouvrez le fichier dans Tome et cherchez dans la table concernée. Si les données sont là, vous pouvez les lire directement ou utiliser une requête SQL pour extraire exactement ce dont vous avez besoin.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenez Tome sur le Mac App Store</a></p>
`,
  },

  "sqlite-for-ios-developers-mac": {
    slug: "sqlite-for-ios-developers-mac",
    title: "Navigateur SQLite pour développeurs iOS sur Mac",
    description:
      "Le développement iOS implique de vérifier constamment ce que votre app a écrit dans sa base de données locale. Xcode n'a pas de visualiseur SQLite intégré, vous laissant assembler un workflow entre Terminal et outils tiers.",
    date: "2026-09-06",
    readTime: "5 min de lecture",
    content: `
<p>Vous développez une app iOS qui utilise Core Data ou du SQLite brut pour la persistance. Quelque chose semble incorrect dans l'interface — peut-être qu'une liste ne se remplit pas, ou qu'une valeur paraît obsolète. Vous devez vérifier la base de données. Xcode propose un éditeur de modèle de données et un profileur Instruments, mais aucun des deux ne vous montre les lignes réelles présentes dans le fichier SQLite. Vous ouvrez donc le Terminal, cherchez le chemin du conteneur du Simulateur, et commencez à exécuter des requêtes <code>SELECT *</code> contre des tables préfixées par Z. Ce workflow casse votre concentration à chaque fois.</p>

<h2>Le problème de base de données du développeur iOS</h2>
<p>Chaque exécution du Simulateur iOS stocke ses données sous <code>~/Library/Developer/CoreSimulator/Devices/</code>, nichée dans un répertoire nommé par UUID. Le chemin change quand vous réinitialisez le simulateur ou changez d'appareil. Même si vous mettez l'emplacement en favori, la prochaine mise à jour de Xcode pourrait tout redistribuer. Trouver le bon fichier .sqlite représente la moitié de la bataille.</p>
<p>Une fois localisé, la CLI <code>sqlite3</code> vous donne un résultat en texte brut. Les noms de tables et de colonnes préfixés par Z de Core Data rendent les requêtes manuelles confuses. Il n'y a pas d'auto-complétion pour les noms de colonnes, pas de grille visuelle pour parcourir les lignes, et aucun moyen de modifier rapidement une valeur de test sans écrire une instruction UPDATE complète. La plupart des développeurs perdent plusieurs minutes dans cette danse, plusieurs fois par jour.</p>
<p>Des outils tiers comme DB Browser for SQLite fonctionnent mais semblent étrangers sur macOS — interfaces basées sur Qt avec de mauvais raccourcis clavier et des boîtes de dialogue de fichiers non natives. DBeaver et DataGrip sont des IDE de base de données complets, excessifs pour inspecter un fichier SQLite local.</p>

<h2>Tome : un navigateur SQLite conçu pour votre workflow Mac</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> est un navigateur SQLite natif pour macOS qui s'intègre naturellement au workflow d'un développeur iOS. Ouvrez le fichier .sqlite du Simulateur et voyez instantanément chaque table, vue et index. Parcourez les tables préfixées par Z de Core Data dans une grille défilante. Modifiez les valeurs directement pour préparer des scénarios de test sans écrire de SQL.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome parcourant la base de données SQLite d'une app iOS sur Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Inspectez visuellement les stockages Core Data</h3>
<p>Les tables SQLite de Core Data utilisent des noms préfixés par Z difficiles à analyser dans le Terminal. Dans Tome, chaque table apparaît dans la barre latérale — cliquez sur l'une d'elles et voyez toutes les lignes avec des colonnes correctement alignées. Faites correspondre les tables ZUSER et ZPOST à votre modèle d'objets géré d'un coup d'œil.</p>

<h3>Modifiez les données de test sans reconstruire</h3>
<p>Besoin de changer une valeur pour reproduire un bug ? Cliquez sur la cellule dans Tome et tapez la nouvelle valeur. Pas besoin d'écrire une instruction UPDATE ou de relancer la logique d'amorçage de votre app. Insérez des lignes pour tester des cas limites ou supprimez des enregistrements pour simuler un état vierge.</p>

<h3>Exécutez des requêtes de diagnostic</h3>
<p>L'éditeur SQL de Tome, avec coloration syntaxique et auto-complétion, vous permet d'écrire des jointures, des agrégations et des requêtes filtrées contre les données de votre app. Vérifiez les relations, comptez les enregistrements, ou cherchez des valeurs spécifiques — le tout sans quitter l'app.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenez Tome sur le Mac App Store</a></p>
`,
  },

  "view-firefox-history-sqlite-mac": {
    slug: "view-firefox-history-sqlite-mac",
    title: "Comment visualiser l'historique Firefox (SQLite) sur Mac",
    description:
      "Firefox stocke votre historique de navigation dans une base de données SQLite nommée places.sqlite. La visualiser en dehors du navigateur implique de gérer des fichiers verrouillés et un résultat SQL brut.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Firefox conserve tout votre historique de navigation, vos favoris et les métadonnées des sites dans une base de données SQLite appelée <code>places.sqlite</code>. Vous voudrez peut-être fouiller un ancien historique que la recherche intégrée de Firefox ne fait pas bien remonter, exporter vos données de navigation, ou analyser vos habitudes. Mais ouvrir ce fichier n'est pas simple — Firefox le verrouille pendant son exécution, et une fois que vous en avez une copie, macOS n'offre aucun moyen intégré de le consulter visuellement.</p>

<h2>Localiser et copier la base de données</h2>
<p>Le dossier de profil de Firefox se trouve dans <code>~/Library/Application Support/Firefox/Profiles/xxxxxxxx.default-release/</code>. À l'intérieur, vous trouverez <code>places.sqlite</code> aux côtés d'autres bases de données comme <code>cookies.sqlite</code> et <code>formhistory.sqlite</code>. Le hic : Firefox verrouille ces fichiers pendant que le navigateur est en cours d'exécution. Vous devez soit quitter Firefox d'abord, soit copier le fichier ailleurs pendant son exécution (bien que la copie puisse être incohérente si Firefox écrit à ce moment-là).</p>
<p>Une fois le fichier en main, l'approche Terminal consiste à exécuter <code>sqlite3 places.sqlite</code> et à écrire des requêtes contre des tables comme <code>moz_places</code>, <code>moz_historyvisits</code>, et <code>moz_bookmarks</code>. Le schéma n'est pas intuitif — les horodatages de visite sont stockés en microsecondes depuis l'epoch, les URL sont dans une table pendant que les métadonnées de visite sont dans une autre, et obtenir une liste d'historique lisible nécessite une JOIN. C'est faisable pour quelqu'un à l'aise en SQL, mais déraisonnable pour la plupart des utilisateurs.</p>

<h2>Parcourez l'historique Firefox visuellement avec Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> ouvre <code>places.sqlite</code> comme n'importe quel autre fichier de base de données. Glissez le fichier copié sur Tome et voyez immédiatement toutes les tables — <code>moz_places</code>, <code>moz_historyvisits</code>, <code>moz_bookmarks</code>, et plus — listées dans la barre latérale. Cliquez sur n'importe quelle table pour parcourir son contenu dans une grille défilante.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome affichant la base de données places.sqlite de l'historique Firefox sur Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Recherchez et filtrez votre historique</h3>
<p>Utilisez l'éditeur de requêtes SQL de Tome pour écrire des recherches ciblées. Trouvez chaque visite à un domaine spécifique, filtrez par plage de dates à l'aide des horodatages en microsecondes, ou comptez combien de fois vous avez visité un site particulier. La coloration syntaxique et l'auto-complétion accélèrent l'écriture de ces requêtes.</p>

<h3>Explorez favoris et métadonnées</h3>
<p>La table <code>moz_bookmarks</code> stocke la structure arborescente de vos favoris avec des relations parent-enfant. Parcourez-la dans Tome pour voir toute votre hiérarchie de favoris, y compris la structure des dossiers et l'ordre de tri — des détails que le gestionnaire de favoris de Firefox masque parfois.</p>

<h3>Inspectez d'autres bases de données Firefox</h3>
<p>Le même dossier de profil contient <code>cookies.sqlite</code>, <code>formhistory.sqlite</code>, et <code>content-prefs.sqlite</code>. Chacune est une base de données SQLite standard que Tome peut ouvrir. Vérifiez quels cookies un site a définis, examinez les entrées de formulaires enregistrées, ou inspectez les préférences par site — le tout visuellement, sans écrire de requêtes brutes dans le Terminal.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenez Tome sur le Mac App Store</a></p>
`,
  },

  "sqlite-vs-realm-browser-mac": {
    slug: "sqlite-vs-realm-browser-mac",
    title: "SQLite contre Realm Browser sur Mac",
    description:
      "Les apps mobiles utilisent SQLite ou Realm pour le stockage local, mais inspecter l'un ou l'autre sur Mac exige un outil différent. Choisir le bon navigateur dépend du format que votre app utilise réellement.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous développez une app mobile et devez inspecter sa base de données locale. Si vous utilisez Realm, vous vous tournez vers Realm Studio. Si vous utilisez SQLite (directement ou via Core Data, GRDB, ou Room), il vous faut un outil complètement différent. Les deux formats sont fondamentalement différents, et les outils de navigation ne se recoupent pas. Comprendre ce qu'offre chacun aide à choisir le bon — ou à réaliser que vous avez besoin des deux.</p>

<h2>Realm et SQLite répondent à des besoins différents</h2>
<p>Realm est une base de données orientée objet — elle stocke les données sous forme d'objets avec des propriétés et des relations, pas de lignes dans des tables. Realm Studio vous permet de parcourir ces objets visuellement, de voir les relations comme des liens, et de modifier les propriétés directement. C'est spécifiquement conçu pour les fichiers Realm et ne fait rien d'autre.</p>
<p>SQLite est une base de données relationnelle stockée dans un fichier unique. Elle utilise des tables SQL standard avec lignes et colonnes. Core Data sur iOS, Room sur Android, et d'innombrables autres frameworks utilisent SQLite comme backend de stockage. L'écosystème est immense, mais les outils d'inspection sur Mac ont historiquement été soit basés sur le Terminal, soit des portages multiplateformes qui semblent déplacés.</p>
<p>Si votre projet utilise Realm, Realm Studio est votre seule vraie option — aucun navigateur de base de données généraliste ne peut ouvrir les fichiers .realm. Mais si votre projet utilise SQLite sous quelque forme que ce soit, vous avez le choix. La question est de savoir si ces choix sont réellement bons sur macOS.</p>

<h2>Un navigateur SQLite natif pour l'autre moitié</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> est un navigateur SQLite natif pour macOS qui égale le niveau de finition et de concentration de Realm Studio, mais pour les bases de données SQLite. Là où Realm Studio est conçu spécifiquement pour les fichiers .realm, Tome est conçu spécifiquement pour les fichiers .sqlite, .db et .sqlite3 — et rien d'autre.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome, navigateur SQLite natif sur Mac, comparé à Realm Studio" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>La même philosophie ciblée</h3>
<p>Realm Studio n'essaie pas d'être un client PostgreSQL. De même, Tome n'essaie pas de se connecter à MySQL ou MongoDB. En se concentrant exclusivement sur SQLite, chaque fonctionnalité — édition directe, création de tables, auto-complétion des requêtes — est optimisée pour le format sur lequel vous travaillez réellement.</p>

<h3>Parcourez les tables, modifiez directement, interrogez confortablement</h3>
<p>Ouvrez une base de données SQLite et parcourez tables, vues, index et déclencheurs dans la barre latérale. Modifiez les valeurs des cellules en cliquant dessus. Insérez ou supprimez des lignes sans écrire de SQL. Quand vous avez besoin de requêtes, l'éditeur intégré offre coloration syntaxique et auto-complétion pour votre schéma.</p>

<h3>Quand vous avez besoin des deux</h3>
<p>Certains projets utilisent Realm pour un composant et SQLite pour un autre. Gardez Realm Studio et Tome côte à côte — chacun gère nativement son format, et aucun des deux ne gaspille de ressources à essayer de prendre en charge des formats pour lesquels il n'a pas été conçu.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenez Tome sur le Mac App Store</a></p>
`,
  },

  "mac-sqlite-command-line-vs-gui": {
    slug: "mac-sqlite-command-line-vs-gui",
    title: "SQLite sur Mac : ligne de commande contre interface graphique — quand utiliser chacune",
    description:
      "La CLI sqlite3 est livrée avec chaque Mac et gère les requêtes rapides, mais s'effondre dès qu'il s'agit de parcourir, modifier et comprendre des schémas peu familiers. Savoir quand changer d'outil fait gagner du temps.",
    date: "2026-09-06",
    readTime: "5 min de lecture",
    content: `
<p>Chaque Mac est livré avec l'outil en ligne de commande <code>sqlite3</code>. Pour les développeurs à l'aise dans le Terminal, c'est un moyen fiable d'exécuter des requêtes rapides. Mais il y a un point où la CLI cesse d'être efficace et où une interface graphique devient plus rapide — l'astuce est de savoir où se situe cette limite. Utiliser le mauvais outil pour la tâche fait perdre du temps dans les deux sens.</p>

<h2>Quand la ligne de commande gagne</h2>
<p>La CLI <code>sqlite3</code> excelle dans les opérations scriptées. Si vous écrivez un script shell qui doit extraire une valeur d'une base de données, la CLI se connecte directement à d'autres commandes via des pipes. Les requêtes en une ligne sont rapides : <code>sqlite3 app.db "SELECT count(*) FROM users;"</code> vous donne une réponse sans rien lancer d'autre. Pour l'automatisation, les sauvegardes avec <code>.dump</code>, et les vérifications rapides dans une session Terminal existante, la CLI est le bon outil.</p>
<p>Elle est aussi disponible partout. Aucune installation nécessaire, aucune app à télécharger. Si vous êtes connecté en SSH à une machine distante ou travaillez dans un pipeline CI, la CLI est tout ce que vous avez — et elle fonctionne bien pour des requêtes ciblées quand vous connaissez le schéma.</p>

<h2>Quand la CLI vous laisse tomber</h2>
<p>La CLI s'effondre pour l'exploration. Quand vous ouvrez une base de données peu familière et devez comprendre son schéma, exécuter <code>.tables</code> et <code>.schema tablename</code> de façon répétée est lent. Les tables larges s'enroulent dans le terminal. Il n'y a aucun défilement dans les résultats — la sortie défile simplement. Modifier des données signifie écrire des instructions UPDATE avec des clauses WHERE précises, au risque de mises à jour massives accidentelles en cas de faute de frappe.</p>
<p>Pour toute personne qui n'est pas développeuse — analystes de données, designers, testeurs QA — la CLI est effectivement inutilisable. Et même pour les développeurs, parcourir visuellement plus de quelques tables est simplement plus rapide dans une interface graphique.</p>

<h2>Tome : le côté interface graphique de l'équation</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> occupe le rôle d'interface graphique en tant que navigateur SQLite natif pour macOS. Ce n'est pas un remplacement de la CLI — c'est son complément. Utilisez la CLI pour les scripts et les vérifications rapides ; utilisez Tome pour parcourir, modifier et comprendre les bases de données visuellement.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome, navigateur SQLite graphique, comparé à la ligne de commande sur Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Explorez des schémas peu familiers</h3>
<p>Ouvrez n'importe quelle base de données et voyez chaque table, vue, index et déclencheur dans la barre latérale. Cliquez à travers les tables pour comprendre le schéma, parcourez des exemples de données, et déduisez les relations — le tout sans taper une seule commande.</p>

<h3>Modifiez en toute sécurité</h3>
<p>Cliquez sur une cellule pour changer sa valeur. Aucune instruction UPDATE, aucune clause WHERE à se tromper. Insérez et supprimez des lignes d'un clic. Le risque de changements groupés accidentels disparaît quand chaque modification cible exactement la cellule sur laquelle vous avez cliqué.</p>

<h3>Interrogez avec assistance</h3>
<p>Quand vous écrivez vraiment du SQL, l'éditeur de requêtes de Tome offre coloration syntaxique et auto-complétion. C'est le juste milieu entre la CLI nue et un IDE de base de données complet — juste assez d'assistance pour écrire des requêtes plus vite sans la surcharge d'un outil d'entreprise.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenez Tome sur le Mac App Store</a></p>
`,
  },

  "edit-sqlite-without-sql-mac": {
    slug: "edit-sqlite-without-sql-mac",
    title: "Comment modifier du SQLite sans écrire de SQL sur Mac",
    description:
      "Tout le monde n'a pas besoin de connaître le SQL pour changer une valeur dans une base de données SQLite. Designers, testeurs QA et chefs de produit ne devraient pas avoir à apprendre la syntaxe UPDATE pour une simple correction de données.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Un testeur QA doit changer le rôle d'un utilisateur pour reproduire un bug de permission. Un designer veut remplacer un texte de substitution dans la base de données d'un prototype. Un chef de produit doit mettre à jour une valeur de configuration pour tester un feature flag. Aucun d'entre eux ne devrait avoir à apprendre la syntaxe SQL pour faire un simple changement de données — mais sur Mac, l'outil par défaut pour modifier des bases de données SQLite est la ligne de commande <code>sqlite3</code>, où même une modification d'une seule cellule exige d'écrire <code>UPDATE tablename SET column = 'value' WHERE id = 42;</code>.</p>

<h2>Le SQL est une barrière pour les non-développeurs</h2>
<p>Le SQL n'est pas difficile à apprendre en théorie, mais bien l'exécuter sous pression est une autre affaire. Oublier la clause WHERE dans une instruction UPDATE change chaque ligne de la table. Utiliser les mauvais guillemets provoque une erreur de syntaxe. Mal orthographier un nom de colonne produit un message d'erreur déroutant. Pour quelqu'un qui a simplement besoin d'inverser un booléen ou de changer une chaîne, cette cérémonie est disproportionnée par rapport à la tâche.</p>
<p>Même les développeurs préfèrent souvent ne pas écrire de SQL pour des modifications triviales. Ouvrir le Terminal, naviguer jusqu'au fichier, lancer <code>sqlite3</code>, se souvenir du nom exact de la table et de la colonne, et écrire une instruction syntaxiquement correcte — tout cela pour changer une seule cellule — est lent comparé à simplement cliquer et taper.</p>

<h2>Modifiez SQLite comme une feuille de calcul avec Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> permet à n'importe qui de modifier une base de données SQLite sur Mac sans écrire une seule ligne de SQL. Ouvrez le fichier, trouvez la table, cliquez sur la cellule, tapez la nouvelle valeur. Cela fonctionne comme la modification d'une feuille de calcul — parce que pour les changements simples, c'est exactement l'interface souhaitée.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome modifiant des données SQLite sans SQL sur Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Cliquez pour modifier n'importe quelle cellule</h3>
<p>Chaque cellule de la grille de données de Tome est modifiable. Cliquez dessus, changez la valeur, et la mise à jour cible exactement cette ligne et cette colonne. Aucune clause WHERE à oublier, aucun risque de changements groupés, aucune connaissance SQL requise.</p>

<h3>Insérez et supprimez sans commandes</h3>
<p>Ajoutez une nouvelle ligne en cliquant sur le bouton d'insertion. Supprimez des lignes en les sélectionnant et en les effaçant. Tome gère les instructions SQL d'INSERT et de DELETE en arrière-plan, pour que vous interagissiez avec vos données via des actions familières plutôt que des commandes de base de données.</p>

<h3>Créez des tables visuellement</h3>
<p>Besoin d'une nouvelle table ? L'éditeur visuel de tables de Tome vous permet de définir noms de colonnes, types et contraintes dans un formulaire — pas besoin d'écrire la syntaxe <code>CREATE TABLE</code> de mémoire. Remplissez les champs et la table est créée correctement.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenez Tome sur le Mac App Store</a></p>
`,
  },

  "sqlite-database-viewer-apple-silicon": {
    slug: "sqlite-database-viewer-apple-silicon",
    title: "Visualiseur de base de données SQLite optimisé pour Apple Silicon",
    description:
      "De nombreux outils de base de données fonctionnent encore via Rosetta sur les Mac Apple Silicon, gaspillant batterie et performance. Une version ARM native fait une différence notable pour une app que vous gardez ouverte toute la journée.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous avez acheté un Mac de la série M pour sa performance et son autonomie. Puis vous installez un outil de base de données et remarquez qu'il fonctionne via Rosetta — la couche de traduction Intel qui existe pour la compatibilité, pas pour la performance. L'app utilise plus de mémoire, épuise plus de batterie, et se lance plus lentement qu'elle ne le devrait. Pour un outil que vous gardez peut-être ouvert aux côtés de Xcode ou VS Code toute la journée, cette surcharge s'accumule.</p>

<h2>La taxe Rosetta sur les outils de base de données</h2>
<p>De nombreux navigateurs de bases de données populaires sont encore distribués sous forme de binaires réservés à Intel, ou sont construits avec Electron, qui n'a que récemment obtenu une prise en charge fiable d'Apple Silicon. DB Browser for SQLite, construit avec Qt, a connu une prise en charge ARM inconsistante selon les versions. DBeaver fonctionne sur Java, ajoutant une couche d'abstraction supplémentaire au-dessus du matériel. Même les outils qui prennent techniquement en charge Apple Silicon embarquent souvent le moteur Chromium d'Electron, qui consomme significativement plus de ressources qu'une app native n'en aurait besoin.</p>
<p>Vérifiez le Moniteur d'activité et regardez la colonne « Genre ». Si votre outil de base de données affiche « Intel » sur un Mac de la série M, il fonctionne via Rosetta. Cela signifie un démarrage plus lent, une consommation mémoire plus élevée, et une autonomie réduite comparé à un binaire ARM natif. Pour un utilitaire léger comme un visualiseur SQLite, l'écart de performance est particulièrement notable parce que l'app elle-même devrait être rapide et légère.</p>

<h2>Tome : natif Apple Silicon dès le premier jour</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> est construit avec Swift et AppKit sous forme de binaire universel qui fonctionne nativement sur les Mac Apple Silicon et Intel. Sur un Mac de la série M, il se lance instantanément, utilise un minimum de mémoire, et n'a aucune surcharge liée à Rosetta. C'est le genre d'app pour lequel Apple Silicon a été conçu.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Visualiseur SQLite Tome fonctionnant nativement sur Mac Apple Silicon" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Lancement instantané, faible consommation mémoire</h3>
<p>Aucun démarrage de JVM, aucune initialisation du moteur Chromium, aucune traduction Rosetta. Tome s'ouvre en moins d'une seconde et reste léger — utilisant généralement une fraction de la mémoire que consommeraient les alternatives basées sur Electron. Gardez-le ouvert toute la journée sans qu'il n'affecte votre autre travail.</p>

<h3>Défilement fluide dans de grandes tables</h3>
<p>Le rendu natif AppKit signifie que Tome défile à travers des milliers de lignes avec la même fluidité que vous attendez du Finder ou de Numbers. Aucune image perdue, aucun décalage en sautant à la fin d'un grand ensemble de résultats. La puce de série M gère l'interface native sans effort.</p>

<h3>Ensemble complet de fonctionnalités, empreinte minimale</h3>
<p>Être léger ne signifie pas être limité. Tome inclut tout ce dont vous avez besoin pour SQLite : parcourir tables, vues, index et déclencheurs ; modifier les données directement ; exécuter des requêtes SQL avec coloration syntaxique et auto-complétion ; créer et modifier des tables visuellement. Tout cela dans une app qui respecte les ressources de votre Mac parce qu'elle a été construite spécifiquement pour la plateforme.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenez Tome sur le Mac App Store</a></p>
`,
  },

  "open-whatsapp-backup-sqlite-mac": {
    slug: "open-whatsapp-backup-sqlite-mac",
    title: "Comment ouvrir une sauvegarde WhatsApp SQLite sur Mac",
    description:
      "WhatsApp stocke l'historique des discussions dans une base de données SQLite. Voir ces messages en dehors de l'app — à des fins d'archivage, juridiques ou personnelles — demande d'extraire et d'ouvrir le fichier de base de données sur votre Mac.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>WhatsApp stocke vos messages de discussion, références de médias et données de contacts dans une base de données SQLite. Que vous ayez extrait une sauvegarde d'un iPhone à l'aide d'un outil comme iMazing, récupéré un fichier <code>ChatStorage.sqlite</code> depuis une sauvegarde iTunes, ou extrait un <code>msgstore.db</code> depuis une sauvegarde Android, vous avez maintenant un fichier de base de données sur votre Mac. Double-cliquer dessus ne fait rien d'utile. Il vous faut un moyen de l'ouvrir et de lire les conversations qu'il contient.</p>

<h2>Pourquoi c'est plus compliqué que ça ne devrait</h2>
<p>Les bases de données SQLite de WhatsApp utilisent leur propre schéma. Les messages vivent dans des tables comme <code>ZWAMESSAGE</code> (iOS) ou <code>messages</code> (Android), avec des colonnes pour l'expéditeur, l'horodatage, le contenu texte, le type de média et le statut. Les horodatages sont stockés dans des formats non standard — iOS utilise l'epoch de Core Data (secondes depuis le 1er janvier 2001), tandis qu'Android utilise les millisecondes Unix. Les contacts sont référencés par des chaînes JID, pas des noms lisibles.</p>
<p>Ouvrir le fichier dans le Terminal avec <code>sqlite3</code> vous donne un accès brut, mais lire des messages de discussion sous forme de lignes de texte non formatées avec des horodatages encodés et des identifiants JID est pratiquement inutile pour la plupart des gens. Il vous faut une interface visuelle pour donner du sens aux données.</p>
<p>Les sauvegardes Android ajoutent une complication supplémentaire : le fichier <code>msgstore.db.crypt15</code> est chiffré. Vous devez d'abord le déchiffrer à l'aide de votre fichier de clé avant qu'un navigateur SQLite quelconque puisse l'ouvrir. Une fois déchiffré, cependant, c'est une base de données SQLite standard.</p>

<h2>Parcourez les données WhatsApp avec Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> ouvre les fichiers de base de données SQLite de WhatsApp comme n'importe quelle autre base de données. Glissez le fichier <code>ChatStorage.sqlite</code> extrait ou le <code>msgstore.db</code> déchiffré sur Tome et voyez chaque table dans la barre latérale. Cliquez sur la table des messages pour parcourir votre historique de discussion dans une grille défilante.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome ouvrant une sauvegarde WhatsApp SQLite sur Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Lisez les messages en contexte</h3>
<p>Parcourez la table des messages pour voir le contenu texte, les identifiants de l'expéditeur, les horodatages et les références de médias. Triez par date pour lire les conversations chronologiquement. Utilisez l'éditeur SQL de Tome pour filtrer les messages par contact ou plage de dates.</p>

<h3>Recherchez dans toutes les conversations</h3>
<p>Besoin de trouver un message spécifique ? Écrivez une requête rapide dans l'éditeur SQL de Tome avec auto-complétion : <code>SELECT * FROM ZWAMESSAGE WHERE ZTEXT LIKE '%keyword%';</code> Les résultats apparaissent dans une grille native que vous pouvez faire défiler et trier — bien plus pratique que grep dans le Terminal.</p>

<h3>Vos données restent sur votre Mac</h3>
<p>Contrairement aux visualiseurs SQLite en ligne qui exigent de téléverser votre base de données, Tome fonctionne entièrement en local. Vos messages WhatsApp ne quittent jamais votre machine. Ouvrir, parcourir, interroger, fermer — tout se passe sur votre Mac.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenez Tome sur le Mac App Store</a></p>
`,
  },

  "sqlite-query-editor-autocomplete-mac": {
    slug: "sqlite-query-editor-autocomplete-mac",
    title: "Éditeur de requêtes SQLite avec auto-complétion sur Mac",
    description:
      "Écrire des requêtes SQL contre une base de données SQLite sans auto-complétion signifie basculer constamment entre la vue de schéma et l'éditeur pour vérifier les noms de tables et de colonnes.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous écrivez une requête SELECT contre une base de données SQLite comportant trente tables. Vous vous souvenez que la table s'appelle quelque chose comme <code>user_sessions</code> ou <code>session_logs</code> — mais laquelle ? Et la colonne d'horodatage — est-ce <code>created_at</code>, <code>timestamp</code>, ou <code>date_created</code> ? Dans la CLI <code>sqlite3</code>, vous basculeriez vers le mode <code>.schema</code>, chercheriez la table, reviendriez à l'écriture de votre requête, et répéteriez pour chaque référence de colonne. Ce basculement de contexte est là où passe réellement la majeure partie de votre temps d'écriture de requêtes.</p>

<h2>Le coût de l'absence d'auto-complétion</h2>
<p>La CLI <code>sqlite3</code> n'a aucune auto-complétion pour les noms de tables ou de colonnes. Vous tapez de mémoire, et si vous faites une faute d'orthographe, vous obtenez une erreur après l'exécution — pas pendant que vous tapez. Pour des bases de données simples avec quelques tables, c'est gérable. Pour des bases de données avec des dizaines de tables et des centaines de colonnes, c'est une taxe constante sur votre productivité.</p>
<p>Certains développeurs copient les schémas de tables dans un fichier de notes et s'y réfèrent en écrivant des requêtes. D'autres exécutent <code>.tables</code> et <code>PRAGMA table_info(tablename);</code> de façon répétée. Les deux approches sont des contournements pour une fonctionnalité manquante — l'éditeur de requêtes devrait connaître votre schéma et vous aider à écrire du SQL correct.</p>
<p>Les IDE de base de données complets comme DataGrip offrent une excellente auto-complétion, mais ils sont coûteux, lourds, et conçus pour des workflows d'entreprise. Pour un fichier SQLite local, vous ne devriez pas avoir besoin d'un IDE par abonnement juste pour obtenir des suggestions de noms de tables.</p>

<h2>L'éditeur de requêtes avec auto-complétion de Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> inclut un éditeur de requêtes SQL qui connaît le schéma de votre base de données. Commencez à taper un nom de table et il suggère des correspondances. Référencez une table et les noms de colonnes apparaissent comme suggestions. Ce n'est pas un IDE complet — c'est exactement le niveau d'assistance qui rend l'écriture de requêtes SQLite rapide sans ajouter de complexité.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Éditeur de requêtes SQL de Tome avec auto-complétion sur Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Suggestions conscientes du schéma</h3>
<p>Tome lit le schéma de votre base de données à l'ouverture du fichier. Noms de tables, noms de colonnes, et mots-clés SQLite apparaissent tous comme suggestions pendant que vous tapez. Plus besoin de mémoriser les noms de colonnes ni de basculer vers un navigateur de schéma en pleine requête.</p>

<h3>Coloration syntaxique</h3>
<p>Mots-clés SQL, littéraux de chaînes, nombres et identifiants sont colorés. Repérez un guillemet manquant ou un mot-clé mal orthographié avant d'exécuter la requête, pas après avoir lu un message d'erreur.</p>

<h3>Résultats dans une grille native</h3>
<p>Les résultats des requêtes apparaissent instantanément dans une vue de table native macOS. Triez les colonnes, redimensionnez-les, et faites défiler de grands ensembles de résultats sans à-coups. Copiez des résultats ou sélectionnez des cellules spécifiques — la grille se comporte comme une vraie vue de données Mac, pas une table HTML rendue dans une vue web.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenez Tome sur le Mac App Store</a></p>
`,
  },

  "view-chrome-cookies-sqlite-mac": {
    slug: "view-chrome-cookies-sqlite-mac",
    title: "Comment visualiser les cookies Chrome (SQLite) sur Mac",
    description:
      "Chrome stocke les cookies dans une base de données SQLite sur votre Mac. Les voir via DevTools fonctionne pour un site à la fois, mais inspecter la base de données complète des cookies exige une autre approche.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Chrome stocke tous les cookies dans un fichier de base de données SQLite nommé <code>Cookies</code> (sans extension), situé dans <code>~/Library/Application Support/Google/Chrome/Default/Cookies</code>. Vous pouvez voir les cookies d'un seul site via les DevTools de Chrome, mais si vous voulez chercher dans tous les cookies, analyser des schémas de suivi, ou auditer quelles données les sites ont stockées, vous devez ouvrir le véritable fichier de base de données. Chrome n'offre aucun moyen de parcourir visuellement son stockage complet de cookies.</p>

<h2>La limite des DevTools</h2>
<p>L'onglet Application des DevTools de Chrome affiche les cookies par domaine pour la page actuellement chargée. Cela fonctionne pour déboguer les cookies d'un site spécifique, mais atteint ses limites quand vous voulez voir tous les cookies sur tous les sites, chercher un nom de cookie spécifique utilisé par plusieurs domaines, ou compter combien de cookies de suivi sont présents. Il vous faudrait visiter chaque site individuellement et inspecter chacun — pas pratique.</p>
<p>L'approche par base de données vous donne la vue d'ensemble. Mais ouvrir le fichier <code>Cookies</code> de Chrome avec <code>sqlite3</code> dans le Terminal signifie lire des lignes de clés d'hôte, de noms de cookies, de valeurs, d'horodatages d'expiration (dans le format epoch de Chrome — microsecondes depuis le 1er janvier 1601), et de valeurs chiffrées sous forme de texte brut. Chrome chiffre les valeurs des cookies sur macOS, donc la colonne <code>encrypted_value</code> contient des blobs binaires qui ne sont pas lisibles directement. Les colonnes de métadonnées — hôte, nom, chemin, expiration, indicateurs — restent lisibles et sont souvent ce dont vous avez réellement besoin.</p>

<h2>Parcourez les cookies Chrome avec Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> ouvre le fichier de base de données Cookies de Chrome et affiche la table <code>cookies</code> dans une grille défilante et triable. Fermez d'abord Chrome (il verrouille le fichier), puis ouvrez <code>~/Library/Application Support/Google/Chrome/Default/Cookies</code> dans Tome.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome affichant la base de données SQLite des cookies Chrome sur Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Recherchez dans tous les domaines</h3>
<p>Utilisez l'éditeur SQL de Tome pour trouver des cookies par nom, hôte ou motif. Une requête comme <code>SELECT host_key, name, path FROM cookies WHERE name LIKE '%_ga%';</code> révèle chaque cookie Google Analytics à travers tous les sites que vous avez visités — quelque chose que les DevTools ne peuvent pas afficher en une seule vue.</p>

<h3>Auditez les métadonnées des cookies</h3>
<p>Parcourez la table des cookies pour voir quels domaines définissent des cookies persistants, lesquels utilisent des indicateurs sécurisés, et lesquels ont des attributs SameSite. Triez par date d'expiration pour trouver les cookies qui persistent pendant des années. Ces informations sont toutes en clair, même si les valeurs sont chiffrées.</p>

<h3>Inspectez d'autres bases de données Chrome</h3>
<p>Le répertoire de profil de Chrome contient aussi d'autres bases de données SQLite : <code>History</code>, <code>Login Data</code>, <code>Web Data</code>, et <code>Favicons</code>. Chacune peut être ouverte dans Tome pour une inspection visuelle — utile pour comprendre quelles données Chrome stocke localement.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenez Tome sur le Mac App Store</a></p>
`,
  },

  "compare-sqlite-databases-mac": {
    slug: "compare-sqlite-databases-mac",
    title: "Comment comparer des bases de données SQLite côte à côte sur Mac",
    description:
      "Après une migration, un changement de schéma, ou une synchronisation de données, vérifier que deux bases de données SQLite correspondent est fastidieux sans moyen de visualiser les deux simultanément.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous avez exécuté une migration de données et devez en vérifier les résultats. Ou vous comparez une base de données de développement à une copie de staging. Ou un collègue vous a envoyé sa version d'une base de données partagée et vous devez repérer les différences. Dans chaque cas, la tâche est la même : regarder deux bases de données SQLite et déterminer ce qui a changé. Sur Mac, la plupart des outils rendent cela étonnamment difficile parce qu'ils sont conçus autour d'une seule connexion de base de données.</p>

<h2>Pourquoi comparer des bases de données est habituellement pénible</h2>
<p>Avec la CLI <code>sqlite3</code>, comparer deux bases de données signifie ouvrir deux fenêtres de terminal, exécuter la même requête dans chacune, et parcourir visuellement le résultat à la recherche de différences. Pour de petites tables, cela fonctionne. Pour des tables avec des centaines de lignes et des dizaines de colonnes, c'est sujet aux erreurs et lent. Il n'y a pas de vue côte à côte, aucune mise en évidence des différences — juste deux flux de texte brut.</p>
<p>Certains développeurs utilisent <code>sqldiff</code>, un outil en ligne de commande qui produit les instructions SQL nécessaires pour transformer une base de données en une autre. Il est puissant pour les comparaisons scriptées mais produit un résultat SQL brut, pas une différence visuelle. Comprendre ce qui a réellement changé exige de lire des instructions INSERT, UPDATE et DELETE plutôt que de voir les données elles-mêmes.</p>
<p>La plupart des navigateurs de bases de données à interface graphique aggravent le problème en ne prenant en charge qu'une seule base de données à la fois. Vous ouvrez la base de données A, l'inspectez, la fermez, ouvrez la base de données B, et essayez de vous rappeler ce que vous avez vu dans la base A. Certains outils prennent en charge plusieurs connexions mais exigent une configuration manuelle pour chacune.</p>

<h2>Ouvrez les deux bases de données côte à côte avec Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> est une application macOS basée sur les documents, ce qui signifie que chaque base de données s'ouvre dans sa propre fenêtre avec sa propre interface complète. Ouvrez deux bases de données et disposez-les côte à côte à l'aide de la vue Split View de macOS ou en glissant les fenêtres — de la même façon que vous compareriez deux fichiers texte.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome comparant deux bases de données SQLite côte à côte sur Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Comparaison visuelle des schémas</h3>
<p>Avec les deux bases de données ouvertes, vérifiez la barre latérale de chaque fenêtre. La source a-t-elle des tables que la destination n'a pas ? Des index sont-ils présents dans une mais absents dans l'autre ? Un balayage visuel des deux barres latérales répond instantanément à ces questions.</p>

<h3>Comparaison ligne par ligne</h3>
<p>Ouvrez la même table dans les deux fenêtres et faites défiler les données. Triez les deux par la même colonne pour aligner les lignes. Les différences de nombre de lignes ou de valeurs de données deviennent visibles quand vous pouvez voir les deux grilles simultanément.</p>

<h3>Interrogez chacune indépendamment</h3>
<p>Chaque fenêtre a son propre éditeur de requêtes SQL. Exécutez la même requête d'agrégation dans les deux — <code>SELECT COUNT(*) FROM users;</code> — et comparez les résultats côte à côte. Écrivez des requêtes plus complexes pour vérifier des sommes, des moyennes, ou l'existence d'enregistrements spécifiques dans chaque base de données indépendamment.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenez Tome sur le Mac App Store</a></p>
`,
  },

  "lightweight-database-browser-mac": {
    slug: "lightweight-database-browser-mac",
    title: "Navigateur de base de données léger pour Mac — sans Electron, sans Java",
    description:
      "Les navigateurs de bases de données qui embarquent Chromium ou la JVM consomment des centaines de mégaoctets avant même que vous ayez chargé un fichier. Une alternative légère devrait utiliser ce que macOS fournit déjà.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous installez un navigateur de base de données, et le Moniteur d'activité révèle qu'il utilise 350 Mo de RAM — avant même que vous n'ayez ouvert un seul fichier. L'app met plusieurs secondes à se lancer. Faire défiler une table saccade. L'interface ne correspond pas à vos autres apps Mac. C'est le coût des outils de base de données basés sur Electron et Java : ils apportent leur propre moteur de rendu, leur propre framework d'interface, et leur propre surcharge mémoire, quelle que soit la tâche que vous effectuez réellement avec eux.</p>

<h2>Pourquoi les navigateurs de bases de données sont inutilement lourds</h2>
<p>Les applications Electron embarquent un navigateur Chromium complet pour afficher leur interface. Pour un navigateur de base de données — une app qui affiche principalement des tables de données — c'est comme envoyer un générateur diesel pour alimenter une lampe de bureau. DBeaver et des outils similaires fonctionnent sur Java, ce qui signifie une pénalité de démarrage de la JVM, des pauses de collecte des déchets, et une consommation mémoire qui augmente avec le temps. Les deux approches privilégient la compatibilité multiplateforme au détriment de l'efficacité.</p>
<p>Sur macOS, cette surcharge est particulièrement frustrante car le système d'exploitation fournit déjà tout ce dont un navigateur de base de données a besoin : AppKit pour les vues de tables natives, Core Graphics pour le rendu, et une prise en charge intégrée du mode sombre, des onglets et de la gestion des fenêtres. Un navigateur de base de données qui utilise directement ces frameworks peut être une fraction de la taille et considérablement plus rapide qu'un outil qui apporte sa propre plateforme.</p>

<h2>Tome : un navigateur de base de données qui respecte vos ressources</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> est construit avec Swift et AppKit — pas d'Electron, pas de Java, pas de vues web. Il utilise les mêmes frameworks natifs que le Finder et Preview, ce qui donne une app qui se lance instantanément, reste légère en mémoire, et semble avoir sa place sur votre Mac.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome, navigateur SQLite natif léger pour Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Lancement en moins d'une seconde</h3>
<p>Aucune initialisation de JVM, aucun démarrage de Chromium. Tome s'ouvre plus vite que le temps que prennent la plupart des apps Electron pour afficher leur écran de démarrage. Cliquez sur l'icône du dock et votre base de données est prête à parcourir presque immédiatement.</p>

<h3>Empreinte mémoire minimale</h3>
<p>Les vues de tables natives AppKit affichent des milliers de lignes en utilisant une fraction de la mémoire qu'une grille basée sur le web consommerait. Gardez Tome ouvert aux côtés de Xcode, VS Code, et de votre navigateur sans qu'il ne se dispute vos ressources.</p>

<h3>Ensemble complet de fonctionnalités, format réduit</h3>
<p>Être léger ne signifie pas être limité. Tome inclut tout ce dont vous avez besoin pour SQLite : parcourir tables, vues, index et déclencheurs ; modifier les données directement ; insérer et supprimer des lignes ; créer des tables visuellement ; et exécuter des requêtes SQL avec coloration syntaxique et auto-complétion. Le tout dans une app qui traite les ressources de votre Mac avec respect.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenez Tome sur le Mac App Store</a></p>
`,
  },

  "export-sqlite-to-csv-mac": {
    slug: "export-sqlite-to-csv-mac",
    title: "Comment exporter SQLite vers CSV sur Mac",
    description:
      "Extraire des données d'une base de données SQLite vers une feuille de calcul implique soit de se battre avec les options de mise en forme de la CLI sqlite3, soit d'écrire un script. Un outil visuel transforme cela en une tâche d'une seule requête.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous devez extraire des données d'une base de données SQLite vers un fichier CSV — peut-être pour les partager avec un collègue qui utilise Excel, les importer dans un outil de visualisation de données, ou archiver des enregistrements dans un format portable. La CLI <code>sqlite3</code> peut le faire, mais le workflow est laborieux : définir le mode en CSV avec <code>.mode csv</code>, définir le fichier de sortie avec <code>.output filename.csv</code>, exécuter votre requête, puis penser à réinitialiser la sortie avec <code>.output stdout</code>. Manquez une étape et vous obtenez soit aucun fichier, soit un terminal silencieux car la sortie est toujours redirigée.</p>

<h2>Le workflow d'export via CLI est source d'erreurs</h2>
<p>Exporter en CSV avec <code>sqlite3</code> exige plusieurs commandes point dans le bon ordre. Une session typique ressemble à ceci :</p>
<pre><code>sqlite3 mydb.sqlite
.headers on
.mode csv
.output export.csv
SELECT * FROM products WHERE category = 'electronics';
.output stdout</code></pre>
<p>Oubliez <code>.headers on</code> et votre CSV n'a pas d'en-têtes de colonnes. Oubliez <code>.output stdout</code> et le résultat de votre prochaine requête va dans le fichier au lieu de l'écran. Vous voulez exporter une deuxième table ? Répétez toute la séquence avec un nom de fichier différent. Pour un export ponctuel, c'est tolérable. Pour des exports réguliers sur plusieurs tables, c'est fastidieux et source d'erreurs.</p>
<p>Vous pourriez écrire un script Python avec les modules <code>csv</code> et <code>sqlite3</code>, mais c'est une surcharge d'ingénierie pour ce qui devrait être une simple tâche d'extraction de données.</p>

<h2>Exportez avec l'éditeur de requêtes de Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> vous permet d'exécuter n'importe quelle requête SQL et de voir les résultats dans une grille native. À partir de là, sélectionner et copier les données vous donne un format que vous pouvez coller directement dans une feuille de calcul ou enregistrer en CSV. Écrivez votre requête avec auto-complétion, exécutez-la, et extrayez les données — sans commandes point, sans changement de mode.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome exportant des résultats de requête SQLite sur Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Interrogez d'abord, exportez ce dont vous avez besoin</h3>
<p>Au lieu d'exporter une table entière et de filtrer dans Excel, écrivez une requête ciblée dans Tome : filtrez des lignes, joignez des tables, agrégez des valeurs, et formatez des colonnes avec SQL. Exportez uniquement les données dont vous avez réellement besoin, déjà mises en forme comme vous le souhaitez.</p>

<h3>Vérification visuelle avant l'export</h3>
<p>Voyez les résultats de votre requête dans une grille défilante avant l'export. Vérifiez que les colonnes sont correctes, que les données ont l'air justes, et que le nombre de lignes correspond aux attentes. Repérer les erreurs avant l'export vous évite de refaire le travail après avoir ouvert un mauvais CSV dans Excel.</p>

<h3>Parcourez d'abord le schéma complet</h3>
<p>Pas sûr de quelle table contient les données dont vous avez besoin ? Parcourez les tables, vues et leurs colonnes dans la barre latérale de Tome. Cliquez à travers des exemples de données pour comprendre le schéma avant d'écrire votre requête d'export. Cette exploration visuelle est bien plus rapide que d'exécuter des commandes <code>.schema</code> dans le Terminal.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenez Tome sur le Mac App Store</a></p>
`,
  },

  "sqlite-for-data-science-mac": {
    slug: "sqlite-for-data-science-mac",
    title: "Navigateur SQLite pour la data science sur Mac",
    description:
      "Les data scientists travaillant avec des jeux de données locaux en SQLite ont besoin d'un moyen d'explorer les schémas, de prévisualiser les données, et de tester des requêtes avant d'écrire du code de pipeline — sans lancer un serveur de base de données complet.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Vous avez reçu un jeu de données sous forme de fichier SQLite — un téléchargement Kaggle, un jeu de données extrait par scraping, l'export d'un collègue, ou le résultat de votre propre pipeline ETL. Avant d'écrire du code Python pour le traiter, vous devez comprendre ce qu'il contient : noms de tables, types de colonnes, nombre de lignes, distributions de données, et problèmes de qualité potentiels. Les notebooks Jupyter peuvent interroger SQLite, mais configurer la connexion, écrire du SQL exploratoire, et afficher les résultats dans des cellules de notebook représente une surcharge quand vous voulez simplement jeter un coup d'œil rapide aux données.</p>

<h2>Le vide d'exploration dans les workflows de data science</h2>
<p>Les data scientists explorent typiquement les fichiers SQLite avec l'une de ces trois approches : la CLI <code>sqlite3</code> (rapide mais sans sortie visuelle), un notebook Jupyter avec <code>pandas.read_sql()</code> (flexible mais nécessite une configuration à chaque session), ou un IDE de base de données lourd comme DBeaver (puissant mais excessif pour un fichier local). Aucune de ces approches ne touche le point idéal du « ouvrir un fichier et parcourir les données immédiatement ».</p>
<p>La CLI est particulièrement médiocre pour l'exploration de données car elle n'a aucune mise en forme visuelle pour les tables larges, aucune sortie défilante, et aucun moyen de rapidement scanner des distributions de données. Les notebooks apportent de la valeur pour l'analyse mais sont lents pour la phase initiale du « à quoi ressemblent ces données ? ». Vous finissez par écrire du code de connexion redondant avant de voir une seule ligne.</p>

<h2>Explorez des jeux de données visuellement avec Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> vous permet d'ouvrir un jeu de données SQLite et de comprendre immédiatement sa structure. Chaque table apparaît dans la barre latérale avec son nombre de lignes. Cliquez sur une table pour faire défiler ses données dans une grille native. Aucune configuration, aucune chaîne de connexion, aucun code redondant — ouvrez simplement le fichier et regardez.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome parcourant un jeu de données SQLite de data science sur Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Comprenez le schéma avant d'écrire du code</h3>
<p>Parcourez les tables pour voir les noms de colonnes, les types et des exemples de valeurs. Identifiez quelles colonnes contiennent des valeurs nulles, quelles tables sont liées entre elles par des clés étrangères, et comment le jeu de données est structuré — le tout avant d'écrire une seule ligne de Python. Ce contexte rend votre code d'analyse plus ciblé dès le départ.</p>

<h3>Testez des requêtes de manière interactive</h3>
<p>Utilisez l'éditeur SQL de Tome avec auto-complétion pour prototyper des requêtes. Testez vos clauses WHERE, conditions JOIN, et agrégations dans Tome d'abord, puis copiez le SQL fonctionnel dans votre pipeline Python. Repérer les erreurs de requête dans un éditeur visuel est plus rapide que de les déboguer dans une cellule de notebook.</p>

<h3>Inspectez le résultat d'un ETL</h3>
<p>Une fois que votre pipeline a écrit ses résultats dans une base de données SQLite, ouvrez-la dans Tome pour vérifier la sortie. Vérifiez le nombre de lignes, repérez les valeurs nulles, et confirmez que les transformations ont produit les résultats attendus — le tout sans écrire de code de vérification supplémentaire.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenez Tome sur le Mac App Store</a></p>
`,
  },

  "postico-alternative-sqlite-mac": {
    slug: "postico-alternative-sqlite-mac",
    title: "Alternative à Postico pour SQLite sur Mac",
    description:
      "Postico est un client de base de données natif pour Mac très apprécié — mais il ne prend en charge que PostgreSQL. Si vous travaillez avec des fichiers SQLite, il vous faut la même qualité native pour un format différent.",
    date: "2026-09-06",
    readTime: "4 min de lecture",
    content: `
<p>Si vous avez utilisé Postico pour PostgreSQL sur Mac, vous savez à quoi devrait ressembler un client de base de données natif : lancement instantané, interface épurée, intégration macOS correcte, et juste assez de fonctionnalités pour être productif sans encombrement. Il est largement considéré comme l'un des meilleurs outils de base de données de la plateforme. Le seul problème est que Postico ne prend pas en charge SQLite. Si vos données vivent dans des fichiers .sqlite plutôt que sur un serveur PostgreSQL, vous devez trouver autre chose — et cet « autre chose » est généralement une app Electron ou Java qui ne ressemble en rien à Postico.</p>

<h2>Le fossé entre Postico et les outils SQLite</h2>
<p>Postico a prouvé qu'un client de base de données peut être une excellente app Mac. Il utilise des contrôles macOS natifs, respecte les conventions système, se lance rapidement, et reste discret. Il a fixé une norme que la plupart des navigateurs SQLite n'ont pas atteinte.</p>
<p>DB Browser for SQLite est basé sur Qt — fonctionnel mais visuellement déconnecté de macOS. TablePlus prend en charge SQLite mais aussi une douzaine d'autres bases de données, apportant une complexité que Postico évite délibérément. DBeaver fonctionne sur Java avec toute la surcharge de ressources que cela implique. Aucun de ces outils ne délivre l'expérience « conçu pour Mac » que les utilisateurs de Postico attendent.</p>
<p>Le problème n'est pas que ce sont de mauvais outils — ils ne le sont pas. C'est qu'une fois que vous avez connu un client de base de données véritablement natif pour Mac, les alternatives multiplateformes ressemblent à un compromis. Vous voulez la même philosophie appliquée à un format différent.</p>

<h2>Tome : l'expérience Postico pour SQLite</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> apporte à SQLite la même qualité native Mac que Postico apporte à PostgreSQL. Construit avec Swift et AppKit, il se lance instantanément, suit les conventions de design de macOS, et se concentre sur une seule chose bien faite — parcourir et modifier des bases de données SQLite.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome comme navigateur SQLite de qualité Postico pour Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Même philosophie, format différent</h3>
<p>Comme Postico, Tome est extrêmement ciblé. Pas de PostgreSQL, pas de MySQL, pas de MongoDB — juste SQLite. Chaque fonctionnalité est conçue pour le format sur lequel vous travaillez. L'interface est épurée, l'app est rapide, et rien de superflu ne vient capter votre attention.</p>

<h3>Une véritable expérience macOS</h3>
<p>Architecture basée sur les documents avec une prise en charge appropriée des fenêtres et des onglets. Mode sombre système. Glisser-déposer depuis le Finder. Raccourcis clavier conformes aux conventions macOS. Tome se comporte comme une app Mac parce que c'en est une — construite avec les mêmes frameworks qu'Apple utilise pour ses propres applications.</p>

<h3>Parcourez, modifiez et interrogez</h3>
<p>Parcourez tables, vues, index et déclencheurs dans la barre latérale. Modifiez les cellules directement. Insérez et supprimez des lignes sans écrire de SQL. Quand vous avez besoin de requêtes, l'éditeur intégré fournit coloration syntaxique et auto-complétion pour votre schéma. C'est tout ce dont un navigateur SQLite a besoin — et rien de plus.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenez Tome sur le Mac App Store</a></p>
`,
  },
};
