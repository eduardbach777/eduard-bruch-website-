import type { ArticleSet } from "./index";

export const ptArticles: ArticleSet = {
  "best-sqlite-browser-mac": {
    slug: "best-sqlite-browser-mac",
    title: "Melhor Browser SQLite para Mac",
    description: "A maioria dos navegadores SQLite no Mac são aplicativos Electron multiplataforma que parecem deslocados. Encontrar um que realmente se comporta como um aplicativo Mac exige mais pesquisa do que deveria.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Você tem um banco de dados SQLite que precisa inspecionar. Você procura por um navegador, baixa algo promissor e imediatamente percebe que não suporta recursos nativos do macOS — sem abas de documento, sem modo escuro do sistema, sem integração com Spotlight. Parece um aplicativo Linux vestindo fantasia de Mac. Esta é a realidade da maioria dos navegadores SQLite disponíveis hoje.</p>

<h2>Por que a Maioria dos Navegadores SQLite Fica Aquém no Mac</h2>
<p>A maioria das ferramentas de banco de dados é construída com Electron ou Java, projetada para ser executada em qualquer lugar e otimizada para lugar nenhum. Elas ignoram as convenções do Mac em que você confia: arrastar e soltar do Finder, gerenciamento apropriado de janelas, rolagem suave através de grandes conjuntos de resultados. Você acaba lutando contra a ferramenta em vez de se concentrar em seus dados.</p>
<p>DB Browser para SQLite é de código aberto e funcional, mas é um aplicativo Qt — atalhos de teclado estrangeiros, diálogos de arquivo não nativos e nenhuma integração com o resto do seu fluxo de trabalho macOS. TablePlus parece melhor mas visa todos os mecanismos de banco de dados, fazendo SQLite parecer uma reflexão posterior.</p>

<h2>Um Browser SQLite Construído para Mac do Zero</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>is a native macOS SQLite browser built specifically for opening, browsing, and editing SQLite databases. It uses AppKit and Swift — no Electron, no cross-platform compromise. It launches instantly, respects your system appearance, and works the way Mac apps should.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome — native SQLite browser for Mac showing tables and query editor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Navegue em Tabelas, Visualizações, Índices e Gatilhos</h3>
<p>Abra qualquer arquivo .db, .sqlite ou .sqlite3 e veja imediatamente todas as tabelas, visualizações, índices e gatilhos em seu banco de dados. Clique em uma tabela para navegar seu conteúdo com rolagem nativa rápida. Sem esperar que uma visualização da web renderize milhares de linhas.</p>

<h3>Editar Dados em Linha</h3>
<p>Clique em qualquer célula para editá-la diretamente. Insira novas linhas, delete as existentes ou crie tabelas completamente novas usando um editor visual — nenhum SQL necessário para operações básicas. Quando você precisar de SQL, Tome inclui um editor de consultas com destaque de sintaxe e preenchimento automático.</p>

<h3>Baseado em Documento — Abra Múltiplos Bancos de Dados Lado a Lado</h3>
<p>Tome é baseado em documentos, o que significa que cada banco de dados é aberto em sua própria janela ou abas. Compare bancos de dados de preparação e produção lado a lado, ou mantenha um banco de dados de referência aberto enquanto trabalha em outro. Funciona exatamente como qualquer aplicativo Mac baseado em documentos — porque é um.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenha Tome na Mac App Store</a></p>
`,
  },
  "view-sqlite-database-mac": {
    slug: "view-sqlite-database-mac",
    title: "Como Visualizar um Banco de Dados SQLite no Mac",
    description: "Arquivos SQLite estão em toda parte do seu Mac — dados de aplicativos, armazenamentos Core Data, histórico do navegador — mas macOS não possui uma forma integrada de abri-los e visualizá-los.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>You found a .sqlite file in your project folder or buried in an app's container. You double-click it and macOS has no idea what to do with it. You could open Terminal and type<code>sqlite3 mydatabase.db</code>, but reading tabular data in a terminal window is painful — no column alignment, no scrolling, no way to quickly scan hundreds of rows.</p>

<h2>A Abordagem Terminal e Seus Limites</h2>
<p>The built-in<code>sqlite3</code>command-line tool ships with every Mac. It works, technically. You can run<code>.tables</code>to list tables and<code>SELECT * FROM tablename;</code>to dump rows. But the output is raw text. Wide tables wrap awkwardly. There's no way to click a value and edit it. And if you're a designer, product manager, or anyone who doesn't live in Terminal, this isn't a realistic workflow.</p>
<p>Você pode tentar abrir o arquivo em um editor de texto, mas os bancos de dados SQLite são binários — você verá caracteres distorcidos, não seus dados.</p>

<h2>Visualize Qualquer Banco de Dados SQLite Visualmente com Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>gives you a proper visual interface for SQLite databases on Mac. Drag a .db, .sqlite, or .sqlite3 file onto the app icon or use File → Open, and your database appears instantly — tables listed in a sidebar, data displayed in a scrollable grid.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome showing a SQLite database with tables and row data" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Veja Seu Esquema em um Relance</h3>
<p>Cada tabela, visualização, índice e gatilho é listado na barra lateral. Clique em qualquer tabela para ver suas linhas. Clique em uma visualização para ver seus resultados. Nenhum comando para memorizar — apenas apontar e clicar.</p>

<h3>Execute Consultas Quando Precisar</h3>
<p>Para qualquer coisa além de navegação, o editor de consultas SQL do Tome está pronto. Inclui destaque de sintaxe e preenchimento automático para nomes de tabela e coluna, para que você possa escrever consultas mais rápido que no Terminal sem adivinhar nomes de coluna da memória.</p>

<h3>Casos de Uso Comuns</h3>
<p>Depuração de um aplicativo iOS ou Android que armazena dados em SQLite. Inspeção de um banco de dados de saída de web scraper. Verificação de um banco de dados de desenvolvimento Django ou Rails. Visualização do histórico do navegador ou marcadores armazenados em SQLite. Todos esses se tornam simples — abra o arquivo, veja os dados.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenha Tome na Mac App Store</a></p>
`,
  },
  "native-sqlite-editor-mac": {
    slug: "native-sqlite-editor-mac",
    title: "Editor SQLite Nativo para Mac — Sem Electron",
    description: "Ferramentas de banco de dados baseadas em Electron consomem centenas de megabytes de RAM apenas para exibir uma tabela. Um editor nativo do macOS muda o que realmente significa ser leve.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Você abre sua ferramenta de banco de dados e o Monitor de Atividade mostra que ela está consumindo 400 MB de RAM antes mesmo de você carregar um arquivo. A interface gagueja ao rolar uma tabela grande. Os atalhos de teclado não correspondem ao que todos os outros aplicativos Mac usam. Isto é o que acontece quando seu editor SQLite é realmente um navegador da web fingindo ser um aplicativo de desktop.</p>

<h2>O Problema do Electron</h2>
<p>Aplicativos Electron agrupam um navegador Chromium inteiro para renderizar sua interface. Para um editor de banco de dados — um aplicativo que principalmente exibe tabelas de texto — esta é uma sobrecarga extrema. Você obtém tempos de inicialização lentos, alto uso de memória e uma interface que nunca parece certa no macOS. Os diálogos de arquivo parecem diferentes. A renderização de texto está ligeiramente desativada. O aplicativo não aparece corretamente no menu "Abrir com" do Finder.</p>
<p>Alguns desenvolvedores escolhem Electron porque permite que eles façam lançamentos no Mac, Windows e Linux a partir de uma base de código. Essa é uma decisão comercial razoável, mas você é quem paga o imposto de desempenho toda vez que abre um banco de dados.</p>

<h2>Tome: Construído com AppKit, Não um Navegador da Web</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>is a native macOS application built with Swift and AppKit. It uses the same frameworks as Finder, Xcode, and every other first-party Apple app. The result is an SQLite editor that launches in under a second, scrolls smoothly through tens of thousands of rows, and uses a fraction of the memory an Electron app would need.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome native macOS SQLite editor with sidebar and data grid" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Integração Real do macOS</h3>
<p>Tome se registra como manipulador para arquivos .db, .sqlite e .sqlite3. Clique duas vezes em um banco de dados no Finder e ele abre diretamente. Arraste arquivos para o ícone do dock. Use abas do macOS e gerenciamento de janelas. Tudo funciona como você espera de um aplicativo Mac porque é um aplicativo Mac.</p>

<h3>Editar Sem Escrever SQL</h3>
<p>Clique em qualquer célula para editar seu valor em linha. Insira linhas, delete linhas e crie novas tabelas usando um editor visual. Quando você precisa de SQL, o editor de consultas integrado possui destaque de sintaxe e preenchimento automático — mas para edições diárias, você nunca precisa tocá-lo.</p>

<h3>Leve por Design</h3>
<p>Tome faz uma coisa bem: SQLite. Não tenta se conectar a PostgreSQL, MySQL ou MongoDB. Ao se concentrar exclusivamente em SQLite, cada recurso é otimizado para o formato com o qual você realmente está trabalhando.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenha Tome na Mac App Store</a></p>
`,
  },
  "db-browser-alternative-mac": {
    slug: "db-browser-alternative-mac",
    title: "Alternativa ao DB Browser para SQLite no Mac",
    description: "DB Browser para SQLite funciona, mas sua interface Qt parece alienígena no macOS — atalhos incorretos, diálogos de arquivo não nativos e sem integração com o resto do seu fluxo de trabalho.",
    date: "2026-09-06",
    readTime: "5 min de leitura",
    content: `
<p>DB Browser for SQLite (DB4S) is the go-to free tool for viewing SQLite databases. It's open source, cross-platform, and has been around for years. But if you use it on a Mac, you've noticed the friction: Cmd+Q sometimes doesn't work as expected, file dialogs look like they belong on a different operating system, and the interface never quite matches your other apps. It works — but it doesn't feel right.</p>

<h2>Where DB Browser Falls Short on Mac</h2>
<p>DB4S é construído com Qt, um framework de interface do usuário multiplataforma. No Mac, isso significa que o aplicativo não usa controles nativos do macOS. Você percebe isso de pequenas maneiras: a barra de abas não corresponde à do Safari, a física da rolagem se sente desativada, e não há suporte Handoff, integração com Spotlight ou modo escuro adequado. O aplicativo também não suporta arquitetura baseada em documentos do macOS, portanto você não pode abrir vários bancos de dados em abas nativas.</p>
<p>O desempenho é outro problema. Abrir um banco de dados com uma tabela grande pode parecer lento, e a interface ocasionalmente trava ao executar consultas. Para um aplicativo de desktop em 2026, os usuários esperam melhor responsividade.</p>
<p>Nada disso faz DB4S uma má ferramenta — é excelente para o que é. Mas se você está em um Mac e quer algo que se sinta nativo, deixa uma lacuna.</p>

<h2>Tome: Uma Alternativa Nativa do macOS</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>fills that gap. It's a native SQLite browser and editor built specifically for macOS with Swift and AppKit. It does everything DB Browser does for everyday use — browse tables, edit data, run queries — but wrapped in an interface that belongs on your Mac.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome as a native alternative to DB Browser for SQLite on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Tudo o que Você Usa DB Browser Para, Mas Nativo</h3>
<p>Navegue em tabelas, visualizações, índices e gatilhos em uma barra lateral limpa. Visualize dados de linha em uma grade rápida e rolável. Edite células em linha sem escrever SQL. Insira e delete linhas com um clique. Crie novas tabelas com um editor visual em vez de escrever instruções CREATE TABLE manualmente.</p>

<h3>Editor de Consulta SQL Quando Você Precisar</h3>
<p>Tome inclui um editor de consultas SQL completo com destaque de sintaxe e preenchimento automático para seus nomes de tabela e coluna. Execute SELECT, UPDATE, DELETE ou qualquer outra consulta e veja resultados instantaneamente.</p>

<h3>Fluxo de Trabalho Baseado em Documento</h3>
<p>Ao contrário de DB4S, Tome usa arquitetura baseada em documentos do macOS. Cada banco de dados abre em sua própria janela ou abas. Você pode ter múltiplos bancos de dados abertos simultaneamente, organizados lado a lado, e alternar entre eles da mesma forma que você alterna entre documentos em qualquer outro aplicativo Mac.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenha Tome na Mac App Store</a></p>
`,
  },
  "tableplus-alternative-mac-sqlite": {
    slug: "tableplus-alternative-mac-sqlite",
    title: "Alternativa TablePlus para Mac — Apenas SQLite",
    description: "TablePlus suporta todos os bancos de dados, o que significa que SQLite nunca recebe atenção total. Se SQLite é tudo o que você precisa, a complexidade extra apenas fica no caminho.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>TablePlus é um cliente de banco de dados bem projetado que suporta PostgreSQL, MySQL, SQLite, Redis, MongoDB e muito mais. É genuinamente bom software. Mas se você apenas trabalha com arquivos SQLite, está navegando em diálogos de conexão, configurações de driver e elementos de interface que existem para bancos de dados que você nunca usará. É como comprar um canivete suíço quando você só precisa da lâmina.</p>

<h2>Quando uma Ferramenta Multibancos de Dados É Demais</h2>
<p>Toda vez que você abre TablePlus, você vê um gerenciador de conexão projetado para servidores de banco de dados remotos. Para SQLite — um banco de dados baseado em arquivo local — este fluxo de trabalho adiciona etapas desnecessárias. Você não precisa de strings de conexão, portas ou credenciais. Você apenas precisa abrir um arquivo.</p>
<p>TablePlus também usa um modelo de assinatura que reflete seu amplo conjunto de recursos. Se você não está se conectando a PostgreSQL ou MySQL, está pagando por capacidades que não usa. O nível gratuito o limita a um certo número de abas abertas e linhas, o que pode ser frustrante durante o desenvolvimento ativo.</p>
<p>A interface, embora polida, é projetada para acomodar todos os bancos de dados suportados. Recursos específicos do SQLite, como navegação de gatilhos ou inspeção da estrutura interna do arquivo, ficam em segundo plano para recursos que importam mais para bancos de dados baseados em servidor.</p>

<h2>Tome: Construído com Propósito para SQLite no Mac</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>is a native macOS app that does one thing: SQLite. No connection managers, no driver configuration, no features for databases you don't use. Open a .db, .sqlite, or .sqlite3 file and start working immediately.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome — focused SQLite browser as an alternative to TablePlus" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Fluxo de Trabalho Primeiro de Arquivo</h3>
<p>Clique duas vezes em um arquivo SQLite no Finder e Tome o abre. Arraste um arquivo para o ícone do dock. Use Arquivo → Abrir. Nenhuma configuração de conexão, nenhuma configuração de servidor. SQLite é um formato de arquivo e Tome o trata como tal.</p>

<h3>Cobertura Completa do SQLite</h3>
<p>Navegue em tabelas, visualizações, índices e gatilhos. Edite células em linha. Insira e delete linhas. Crie tabelas com um editor visual. Execute consultas SQL com destaque de sintaxe e preenchimento automático. Cada recurso existe porque faz sentido para SQLite.</p>

<h3>Múltiplos Bancos de Dados, Estilo Mac</h3>
<p>Tome é baseado em documentos. Abra cinco bancos de dados e cada um obtém sua própria janela ou abas. Compare dados entre bancos de dados colocando janelas lado a lado — o mesmo fluxo de trabalho que você usa com arquivos de texto, planilhas ou qualquer outro documento no seu Mac.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenha Tome na Mac App Store</a></p>
`,
  },
  "open-sqlite3-file-mac": {
    slug: "open-sqlite3-file-mac",
    title: "Como Abrir Arquivos .sqlite3 no Mac Sem Terminal",
    description: "Clicar duas vezes em um arquivo .sqlite3 no Mac não faz nada útil. macOS não reconhece o formato e o Terminal é a única opção integrada.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Você tem um arquivo .sqlite3 — talvez exportado de um projeto Django, extraído de um contêiner de aplicativo iOS ou baixado de um colega. Você clica duas vezes nele no seu Mac e obtém o diálogo "nenhum aplicativo definido para abrir" ou, pior ainda, ele abre em um editor de texto e mostra gibberish binário. macOS simplesmente não sabe o que fazer com arquivos SQLite imediatamente.</p>

<h2>The Default Options Are All Bad</h2>
<p>Without installing anything, your only option is Terminal. Open it, navigate to the file's directory, and type<code>sqlite3 yourfile.sqlite3</code>. From there you can run commands like<code>.tables</code>and<code>SELECT * FROM tablename;</code>— but the output is plain text with no formatting, no scrolling, and no way to edit data visually.</p>
<p>Se você é um desenvolvedor confortável no Terminal, isso funciona para verificações rápidas. Mas para qualquer coisa além de uma consulta simples — navegação de múltiplas tabelas, edição de valores, compreensão de um esquema — é lento e propenso a erros. E se você não é um desenvolvedor, é um não-iniciador.</p>
<p>Algumas pessoas tentam visualizadores SQLite online que são executados no navegador. Esses exigem fazer upload de seu arquivo de banco de dados para um servidor, o que levanta preocupações óbvias de privacidade — especialmente se o banco de dados contiver dados do usuário ou credenciais.</p>

<h2>Abra Arquivos .sqlite3 com um Clique Duplo Usando Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>registers itself as a handler for .sqlite3, .sqlite, and .db files on macOS. After installing it, you can double-click any SQLite file in Finder and it opens directly in Tome — tables listed in the sidebar, data displayed in a scrollable grid, ready to browse.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome opening a .sqlite3 file on Mac with visual table browser" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Nenhum Terminal Necessário</h3>
<p>Navegue em cada tabela, visualização, índice e gatilho visualmente. Role pelas linhas como você faria em uma planilha. Clique nos cabeçalhos das colunas para entender seu esquema. Tudo é visual, imediato e requer zero conhecimento de linha de comando.</p>

<h3>Edit Data Without SQL</h3>
<p>Need to change a value? Click the cell and type. Need to add a row? Click insert. Need to remove records? Select and delete. For more complex operations, Tome includes a SQL query editor with syntax highlighting and auto-complete — but for everyday tasks, you'll rarely need it.</p>

<h3>Seus Dados Permanecem Locais</h3>
<p>Tome é um aplicativo nativo do macOS. Seu arquivo de banco de dados nunca sai de sua máquina. Sem uploads, sem processamento em nuvem, sem preocupações de privacidade. Abra, navegue, edite, feche — tudo acontece localmente.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenha Tome na Mac App Store</a></p>
`,
  },
  "edit-sqlite-database-mac": {
    slug: "edit-sqlite-database-mac",
    title: "Como Editar um Banco de Dados SQLite no Mac",
    description: "Editar um banco de dados SQLite no Mac geralmente significa escrever instruções UPDATE no Terminal. Para uma mudança rápida de valor, isso é muita cerimônia.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>You need to change a single value in a SQLite database. Maybe a flag needs flipping, a username needs correcting, or test data needs adjusting. The built-in way to do this on Mac is to open Terminal, run<code>sqlite3</code>, write an UPDATE statement with the exact WHERE clause to target the right row, and hope you didn't make a typo that changes the wrong records. For one value. In 2026.</p>

<h2>Por Que Edição Baseada em Terminal É Arriscada</h2>
<p>Writing UPDATE statements manually is fine when you know exactly what you're doing. But it's dangerously easy to forget a WHERE clause and update every row in the table, or to misspell a column name and get a silent error. There's no undo in the<code>sqlite3</code>CLI — once the statement executes, the change is permanent unless you remembered to start a transaction.</p>
<p>Criar novas tabelas é igualmente tedioso. Você deve escrever a instrução CREATE TABLE completa com nomes de coluna, tipos e restrições — sintaxe que é fácil de acertar quando você está prototipando e iterando rapidamente.</p>
<p>Para desenvolvedores que pensam em SQL, isso é gerenciável. Para todos os outros — e para desenvolvedores que apenas querem fazer uma edição rápida sem o risco — deve haver um melhor caminho.</p>

<h2>Editar Bancos de Dados SQLite Visualmente com Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>lets you edit SQLite databases on Mac the way you'd edit a spreadsheet. Open the database, click a cell, change the value. No SQL required for basic edits.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome inline cell editing in a SQLite database on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Edição de Célula em Linha</h3>
<p>Clique em qualquer célula de uma tabela para editar seu valor diretamente. Altere texto, números ou datas sem escrever uma instrução UPDATE. A alteração direciona exatamente a linha que você clicou — sem risco de uma cláusula WHERE ausente afetando outros registros.</p>

<h3>Inserir e Deletar Linhas</h3>
<p>Adicione novas linhas a qualquer tabela com um único clique. Delete linhas selecionadas tão facilmente. Tome lida com o SQL INSERT e DELETE nos bastidores para que você possa se concentrar em seus dados, não em sua sintaxe.</p>

<h3>Criar Tabelas Visualmente</h3>
<p>Precisa de uma nova tabela? O editor de tabela visual do Tome permite definir colunas, tipos e restrições em um formulário. Nenhuma necessidade de escrever instruções CREATE TABLE de memória — apenas preencha os campos e Tome gera o SQL correto.</p>

<h3>Editor SQL para Operações Complexas</h3>
<p>Quando você precisa de SQL — para junções, agregações ou atualizações em lote — o editor de consulta do Tome está pronto com destaque de sintaxe e preenchimento automático para seus nomes de tabela e coluna.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenha Tome na Mac App Store</a></p>
`,
  },
  "sql-query-editor-mac-native": {
    slug: "sql-query-editor-mac-native",
    title: "Editor de Consulta SQL para Mac — Nativo e Rápido",
    description: "Executar consultas SQL em um banco de dados SQLite no Mac não deve exigir um IDE pesado ou uma janela de terminal. Um editor de consulta focado geralmente é tudo o que você precisa.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>You need to run a SQL query against a local SQLite database. Your options: open Terminal and use the<code>sqlite3</code>CLI with no syntax highlighting and no auto-complete, or launch a full database IDE that takes ten seconds to start and uses half a gigabyte of RAM. Neither option fits the task — you just want to write a query, run it, and see the results.</p>

<h2>A Lacuna Entre Terminal e IDEs Completas</h2>
<p>The<code>sqlite3</code>CLI gives you raw query execution but zero developer comfort. No syntax coloring, no completion of table or column names, no visual results grid. You're reading query output as plain text, manually adjusting your terminal width to see all columns.</p>
<p>Do outro lado, ferramentas como DataGrip ou DBeaver são construídas para fluxos de trabalho de banco de dados corporativo — gerenciando conexões com servidores remotos, tratando migrações, visualizando esquemas. São poderosos, mas pesados. Para um arquivo SQLite local, iniciar um IDE completo é como dirigir um caminhão até a loja da esquina.</p>
<p>O que falta é um editor SQL rápido e focado que abre um arquivo SQLite e permite que você escreva consultas com os recursos de conforto que espera — sem a sobrecarga de um IDE completo.</p>

<h2>Editor de Consulta SQL do Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>includes a built-in SQL query editor designed specifically for SQLite. It's part of a native macOS app, so it launches instantly and runs with minimal resource usage.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome SQL query editor with syntax highlighting on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Destaque de Sintaxe</h3>
<p>Palavras-chave SQL, nomes de tabela, literais de string e números são codificados por cor para legibilidade. Identifique erros antes de executar a consulta em vez de analisar uma mensagem de erro enigmática depois.</p>

<h3>Preenchimento Automático</h3>
<p>Tome conhece seu esquema. Comece a digitar um nome de tabela e ele sugere conclusões. Faça referência a uma tabela em uma cláusula FROM e os nomes das colunas aparecem em sugestões. Sem mais alternância entre o navegador de esquema e o editor de consulta para lembrar qual é o nome de uma coluna.</p>

<h3>Resultados em uma Grade Nativa</h3>
<p>Os resultados da consulta aparecem em uma tabela nativa rápida e rolável — não HTML renderizado em uma visualização da web. Classifique colunas, redimensione-as e role por grandes conjuntos de resultados com o desempenho esperado de um aplicativo macOS.</p>

<h3>Navegue e Consulte em Um Aplicativo</h3>
<p>Tome não é apenas um editor de consultas. Navegue em tabelas, visualizações, índices e gatilhos na barra lateral. Edite dados em linha. Crie novas tabelas visualmente. O editor SQL está lá quando você precisa dele e o resto do aplicativo lida com tudo mais.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenha Tome na Mac App Store</a></p>
`,
  },
  "browse-core-data-sqlite-mac": {
    slug: "browse-core-data-sqlite-mac",
    title: "Como Navegar em Arquivos SQLite Core Data no Mac",
    description: "Core Data armazena seus dados em arquivos SQLite, mas a Apple não oferece uma ferramenta visual para inspecioná-los. Depurar dados persistentes significa procurar em contêineres de aplicativos e ler saída SQL bruta.",
    date: "2026-09-06",
    readTime: "5 min de leitura",
    content: `
<p>Você está depurando um problema Core Data em seu aplicativo iOS ou macOS. Os dados parecem incorretos na interface e você precisa ver o que está realmente armazenado no arquivo SQLite subjacente. O editor do modelo Core Data do Xcode mostra seu esquema, mas não permite que você navegue nos dados realmente persistidos. Então você vai procurar — encontre o contêiner do aplicativo, localize o arquivo .sqlite, abra Terminal e comece a executar consultas brutas em tabelas com nomes como ZUSER e ZPOST, onde cada coluna é prefixada com Z e nada corresponde aos seus nomes de entidade intuitivamente.</p>

<h2>Arquivos SQLite Core Data Sont Difficiles a Inspecionar</h2>
<p>Core Data usa SQLite como seu armazenamento persistente padrão, mas adiciona suas próprias convenções. Os nomes das entidades recebem um prefixo Z no nome da tabela. Os atributos recebem nomes de coluna prefixados com Z. As relações são armazenadas como chaves estrangeiras inteiras em colunas que você pode não reconhecer imediatamente. Existe uma tabela Z_METADATA e uma tabela Z_PRIMARYKEY que Core Data gerencia internamente.</p>
<p>None of this is documented in a way that makes manual inspection easy. You end up running queries like<code>SELECT * FROM ZUSER;</code>and trying to match the Z-prefixed columns back to your managed object model. In Terminal, with no syntax highlighting and no visual grid, this is tedious.</p>
<p>Xcode não ajuda aqui. Não há navegador SQLite integrado. A ferramenta Instruments pode perfilar operações Core Data, mas não mostrará os dados de linha reais. Você precisa de uma ferramenta separada.</p>

<h2>Navegue em Arquivos SQLite Core Data com Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>opens Core Data's SQLite files like any other database. Navigate to your app's container, find the .sqlite file, and open it in Tome. Every Z-prefixed table appears in the sidebar. Click one to see all rows and their values in a scrollable grid.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome browsing a Core Data SQLite file showing Z-prefixed tables" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Veja os Dados Reais</h3>
<p>Quando seu aplicativo mostra o valor errado, abra o arquivo SQLite no Tome e verifique os dados realmente armazenados. O valor está errado no banco de dados ou é um bug de busca/exibição? Ter acesso visual aos dados brutos responde essa pergunta em segundos.</p>

<h3>Inspecionar Relacionamentos e Metadados</h3>
<p>Navegue pela tabela Z_PRIMARYKEY para ver como Core Data rastreia tipos de entidade e chaves primárias. Verifique colunas de chave estrangeira para verificar se os relacionamentos estão armazenados corretamente. Inspecione Z_METADATA para ver o hash de versão do modelo.</p>

<h3>Execute Consultas Diagnósticas</h3>
<p>Use o editor de consulta SQL do Tome para escrever junções nas tabelas prefixadas com Z do Core Data, filtrar registros específicos ou verificar linhas órfãs que possam indicar um problema de migração. Destaque de sintaxe e preenchimento automático tornam isso mais fácil do que executar consultas brutas no Terminal.</p>

<h3>Seguro de Inspecionar, Fácil de Encontrar</h3>
<p>For the Simulator, your app's SQLite file lives deep inside<code>~/Library/Developer/CoreSimulator/</code>. For a macOS app, check<code>~/Library/Containers/</code>or<code>~/Library/Application Support/</code>. Once you've located the file, drag it onto Tome's dock icon and start browsing.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenha Tome na Mac App Store</a></p>
`,
  },
  "sqlite-viewer-mac-document-based": {
    slug: "sqlite-viewer-mac-document-based",
    title: "Visualizador SQLite para Mac — Abra Múltiplos Bancos de Dados Lado a Lado",
    description: "Comparar dados em dois bancos de dados SQLite geralmente significa alternar entre abas ou executar duas instâncias de sua ferramenta de banco de dados. Há uma abordagem mais simples.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Você está migrando dados de um banco de dados SQLite para outro e precisa verificar os resultados. Ou você está comparando um banco de dados de preparação com produção. Ou você tem duas versões do banco de dados de um aplicativo e precisa identificar o que mudou. Em cada caso, você precisa olhar para dois bancos de dados simultaneamente — e a maioria das ferramentas SQLite torna isso mais difícil do que deveria.</p>

<h2>O Ato de Malabarismo com Ferramentas de Banco de Dados Único</h2>
<p>A maioria dos navegadores SQLite são projetados em torno de uma única conexão de banco de dados por vez. Para comparar dois bancos de dados, você abre duas janelas de aplicativo separadas manualmente (se a ferramenta até a suporta), ou alterna entre abas tentando manter valores de coluna em sua memória. Algumas ferramentas exigem que você feche um banco de dados antes de abrir outro.</p>
<p>The Terminal approach is even worse. You'd need two terminal windows, each running<code>sqlite3</code>against a different file, trying to compare output side by side in plain text. It works in theory but falls apart with any real data volume.</p>
<p>Essa limitação existe porque a maioria das ferramentas de banco de dados não foi projetada como aplicativos baseados em documentos. Foram projetadas em torno de um gerenciador de conexão — escolha um banco de dados, trabalhe com ele, desconecte, escolha outro. Isso é bom para bancos de dados de servidor remoto, mas fricção desnecessária para arquivos SQLite locais.</p>

<h2>Tome: Um Visualizador SQLite Baseado em Documento</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>treats each SQLite database as a document — the same way TextEdit treats text files or Preview treats PDFs. Open a database and it gets its own window. Open another and it gets its own window too. Arrange them side by side, or use macOS native tabs to group them.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome with multiple SQLite databases open side by side on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Comparar Bancos de Dados Visualmente</h3>
<p>Abra seus bancos de dados de origem e destino em duas janelas. Coloque-os lado a lado usando macOS Split View ou arrastando janelas. Navegue na mesma tabela em ambos para comparar contagens de linhas, valores de coluna ou diferenças de esquema. Sem alternância de abas, sem memorização de valores.</p>

<h3>Trabalhe em Projetos Múltiplos</h3>
<p>Mantenha um banco de dados de referência aberto enquanto desenvolve em outro. Tenha o banco de dados de produção do seu aplicativo aberto ao lado de um banco de dados de fixture de teste. Abra um arquivo de banco de dados do cliente enquanto o seu ainda está carregado. Tome não limita o número de bancos de dados abertos simultaneamente.</p>

<h3>Conjunto Completo de Recursos em Cada Janela</h3>
<p>Cada janela de banco de dados possui a interface completa do Tome — barra lateral com tabelas, visualizações, índices e gatilhos; grade de dados com edição em linha; editor de consulta SQL com destaque de sintaxe e preenchimento automático. Não há conceito de banco de dados "primário" e "secundário". Cada banco de dados aberto é totalmente funcional.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenha Tome na Mac App Store</a></p>
`,
  },
  "inspect-app-database-mac": {
    slug: "inspect-app-database-mac",
    title: "Como Inspecionar o Banco de Dados de um Aplicativo no Mac",
    description: "Apps on your Mac store data in hidden SQLite files buried deep in Library folders. Inspecting what an app actually saved means navigating container paths and decoding raw database output.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Every app on your Mac that persists data locally — notes, bookmarks, messages, health records, to-do lists — likely stores it in a SQLite database tucked inside<code>~/Library/</code>or<code>~/Library/Containers/</code>. Maybe you want to see what data an app collected. Maybe you need to recover something that was deleted from the UI. Maybe you're debugging your own app and need to verify what was actually written to disk. Whatever the reason, macOS gives you no built-in way to inspect these files visually.</p>

<h2>Encontrar e Abrir Bancos de Dados de Aplicativo É Tedioso</h2>
<p>First, you need to locate the file. Sandboxed apps store their data in<code>~/Library/Containers/com.developer.appname/Data/</code>, while non-sandboxed apps may use<code>~/Library/Application Support/</code>. The Library folder is hidden by default — you need to use Finder's "Go to Folder" or navigate via Terminal. Once you find the .sqlite or .db file, you're stuck using<code>sqlite3</code>in Terminal, reading raw query output with no visual structure.</p>
<p>For iOS apps running in the Simulator, the path is even deeper:<code>~/Library/Developer/CoreSimulator/Devices/</code>followed by a UUID, then another nested path to the app's Documents or Library folder. Finding the right database among dozens of simulator device folders is a scavenger hunt.</p>

<h2>Inspecione Qualquer Banco de Dados de Aplicativo com Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>lets you open any SQLite database file and immediately see its contents — tables, views, indexes, triggers, and row data — in a native macOS interface. Once you've located the file, just drag it onto Tome or use File → Open.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome inspecting an app's SQLite database on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Entenda O Que um Aplicativo Armazena</h3>
<p>Navegue em cada tabela para ver exatamente quais dados o aplicativo persiste. Os nomes das colunas revelam o design do esquema. Os dados de linha mostram os valores reais. Sem adivinhação, sem comandos Terminal — apenas clique nas tabelas na barra lateral e role pelo seu conteúdo.</p>

<h3>Depure a Camada de Dados do Seu Próprio Aplicativo</h3>
<p>Se você está desenvolvendo um aplicativo macOS ou iOS que usa SQLite ou Core Data, Tome permite verificar se suas gravações chegaram corretamente. Verifique que as relações estão intactas, inspecione colunas geradas automaticamente e execute consultas diagnósticas com destaque de sintaxe e preenchimento automático.</p>

<h3>Recuperar ou Exportar Dados</h3>
<p>Precisa de um registro que foi excluído da interface de um aplicativo, mas pode ainda existir no banco de dados? Abra o arquivo no Tome e pesquise a tabela relevante. Se os dados estiverem lá, você pode lê-los diretamente ou usar uma consulta SQL para extrair exatamente o que precisa.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenha Tome na Mac App Store</a></p>
`,
  },
  "sqlite-for-ios-developers-mac": {
    slug: "sqlite-for-ios-developers-mac",
    title: "Browser SQLite para Desenvolvedores iOS no Mac",
    description: "O desenvolvimento iOS significa verificar constantemente o que seu aplicativo escreveu em seu banco de dados local. Xcode não possui um visualizador SQLite integrado, deixando você para montar um fluxo de trabalho a partir do Terminal e ferramentas de terceiros.",
    date: "2026-09-06",
    readTime: "5 min de leitura",
    content: `
<p>You're building an iOS app that uses Core Data or raw SQLite for persistence. Something looks wrong in the UI — maybe a list isn't populating, or a value appears stale. You need to check the database. Xcode offers a data model editor and an Instruments profiler, but neither shows you the actual rows sitting in the SQLite file. So you open Terminal, hunt down the Simulator's container path, and start running<code>SELECT *</code>queries against Z-prefixed tables. This workflow breaks your concentration every time.</p>

<h2>O Problema do Banco de Dados do Desenvolvedor iOS</h2>
<p>Every iOS Simulator run stores its data under<code>~/Library/Developer/CoreSimulator/Devices/</code>, nested inside a UUID-named directory. The path changes when you reset the simulator or switch devices. Even if you bookmark the location, the next Xcode update might shuffle things. Finding the right .sqlite file is half the battle.</p>
<p>Once you locate it, the<code>sqlite3</code>CLI gives you raw text output. Core Data's Z-prefixed table and column names make manual queries confusing. There's no auto-complete for column names, no visual grid to scan rows, and no way to quickly edit a test value without writing a full UPDATE statement. Most developers waste minutes on this dance multiple times per day.</p>
<p>Ferramentas de terceiros como DB Browser para SQLite funcionam, mas parecem estranhas no macOS — interfaces baseadas em Qt com atalhos de teclado incorretos e diálogos de arquivo não nativos. DBeaver e DataGrip são IDEs de banco de dados completas, overkill para inspecionar um arquivo SQLite local.</p>

<h2>Tome: Um Browser SQLite Construído para Seu Fluxo de Trabalho Mac</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>is a native macOS SQLite browser that fits naturally into an iOS developer's workflow. Open the Simulator's .sqlite file and instantly see every table, view, and index. Browse Core Data's Z-prefixed tables in a scrollable grid. Edit values inline to set up test scenarios without writing SQL.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome browsing an iOS app's SQLite database on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Inspecionar Armazenamentos Core Data Visualmente</h3>
<p>As tabelas SQLite Core Data usam nomes prefixados com Z que são difíceis de analisar no Terminal. No Tome, cada tabela aparece na barra lateral — clique em uma e veja todas as linhas com colunas devidamente alinhadas. Faça correspondência de tabelas ZUSER e ZPOST de volta ao seu modelo de objeto gerenciado em um relance.</p>

<h3>Editar Dados de Teste Sem Reconstruir</h3>
<p>Precisa alterar um valor para reproduzir um bug? Clique na célula no Tome e digite o novo valor. Nenhuma necessidade de escrever uma instrução UPDATE ou executar novamente a lógica de preenchimento do seu aplicativo. Insira linhas para testar casos extremos ou delete registros para simular um estado limpo.</p>

<h3>Execute Consultas Diagnósticas</h3>
<p>O editor SQL do Tome com destaque de sintaxe e preenchimento automático permite que você escreva junções, agregações e consultas filtradas em relação aos dados do seu aplicativo. Verifique relacionamentos, conte registros ou pesquise valores específicos — tudo sem sair do aplicativo.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenha Tome na Mac App Store</a></p>
`,
  },
  "view-firefox-history-sqlite-mac": {
    slug: "view-firefox-history-sqlite-mac",
    title: "Como Visualizar o Histórico do Firefox (SQLite) no Mac",
    description: "Firefox stores your browsing history in a SQLite database called places.sqlite. Viewing it outside the browser means dealing with locked files and raw SQL output.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Firefox keeps your entire browsing history, bookmarks, and site metadata in a SQLite database called<code>places.sqlite</code>. You might want to search through old history that Firefox's built-in search doesn't surface well, export your browsing data, or analyze your habits. But opening this file isn't straightforward — Firefox locks it while running, and once you get a copy, macOS has no built-in way to view it visually.</p>

<h2>Localizando e Copiando o Banco de Dados</h2>
<p>Firefox's profile folder lives at<code>~/Library/Application Support/Firefox/Profiles/xxxxxxxx.default-release/</code>. Inside, you'll find<code>places.sqlite</code>alongside other databases like<code>cookies.sqlite</code>and<code>formhistory.sqlite</code>. The catch: Firefox locks these files while the browser is running. You need to either quit Firefox first or copy the file to another location while it's running (though the copy may be inconsistent if Firefox is writing at that moment).</p>
<p>Once you have the file, the Terminal approach means running<code>sqlite3 places.sqlite</code>and writing queries against tables like<code>moz_places</code>,<code>moz_historyvisits</code>, and<code>moz_bookmarks</code>. The schema isn't intuitive — visit timestamps are stored in microseconds since epoch, URLs are in one table while visit metadata is in another, and getting a readable history list requires a JOIN. This is workable for someone fluent in SQL but unreasonable for most users.</p>

<h2>Navegue no Histórico do Firefox Visualmente com Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>opens<code>places.sqlite</code>like any other database file. Drag the copied file onto Tome and immediately see every table —<code>moz_places</code>,<code>moz_historyvisits</code>,<code>moz_bookmarks</code>, and more — listed in the sidebar. Click any table to browse its contents in a scrollable grid.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome viewing Firefox places.sqlite history database on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Pesquise e Filtre Seu Histórico</h3>
<p>Use o editor de consulta SQL do Tome para escrever pesquisas direcionadas. Encontre cada visita a um domínio específico, filtre por intervalo de datas usando os carimbos de data/hora de microsegundos ou conte quantas vezes você visitou um site específico. Destaque de sintaxe e preenchimento automático tornam a escrita dessas consultas rápida.</p>

<h3>Explore Marcadores e Metadados</h3>
<p>The<code>moz_bookmarks</code>table stores your bookmark tree structure with parent-child relationships. Browse it in Tome to see your full bookmark hierarchy, including folder structure and sort order — details that Firefox's bookmark manager sometimes obscures.</p>

<h3>Inspecionar Outros Bancos de Dados do Firefox</h3>
<p>The same profile folder contains<code>cookies.sqlite</code>,<code>formhistory.sqlite</code>, and<code>content-prefs.sqlite</code>. Each is a standard SQLite database that Tome can open. Check what cookies a site set, review saved form entries, or inspect per-site preferences — all visually, without writing raw queries in Terminal.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenha Tome na Mac App Store</a></p>
`,
  },
  "sqlite-vs-realm-browser-mac": {
    slug: "sqlite-vs-realm-browser-mac",
    title: "SQLite vs Browser Realm no Mac",
    description: "Aplicativos móveis usam SQLite ou Realm para armazenamento local, mas inspecionar qualquer um no Mac requer uma ferramenta diferente. Escolher o navegador certo depende de qual formato seu aplicativo realmente usa.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Você está desenvolvendo um aplicativo móvel e precisa inspecionar seu banco de dados local. Se você estiver usando Realm, você pega Realm Studio. Se você estiver usando SQLite (diretamente ou por meio de Core Data, GRDB ou Room), você precisa de uma ferramenta totalmente diferente. Os dois formatos são fundamentalmente diferentes e as ferramentas de navegação não se sobrepõem. Entender o que cada um oferece ajuda você a escolher o certo — ou percebe que você precisa de ambos.</p>

<h2>Realm e SQLite Servem Necessidades Diferentes</h2>
<p>Realm é um banco de dados de objetos — ele armazena dados como objetos com propriedades e relacionamentos, não como linhas em tabelas. Realm Studio permite que você navegue nesses objetos visualmente, veja relacionamentos como links e edite propriedades em linha. É construído propositalmente para arquivos Realm e não faz nada mais.</p>
<p>SQLite é um banco de dados relacional armazenado como um único arquivo. Usa tabelas SQL padrão com linhas e colunas. Core Data no iOS, Room no Android e inúmeros outros frameworks usam SQLite como seu backend de armazenamento. O ecossistema é enorme, mas as ferramentas de inspeção no Mac historicamente foram baseadas em Terminal ou portas multiplataforma que parecem deslocadas.</p>
<p>Se seu projeto usa Realm, Realm Studio é sua única opção real — nenhum navegador de banco de dados de propósito geral pode abrir arquivos .realm. Mas se seu projeto usa SQLite de qualquer forma, você tem escolhas. A questão é se essas escolhas são realmente boas no macOS.</p>

<h2>Um Navegador SQLite Nativo para a Outra Metade</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>is a native macOS SQLite browser that matches the focus and polish of Realm Studio but for SQLite databases. Where Realm Studio is purpose-built for .realm files, Tome is purpose-built for .sqlite, .db, and .sqlite3 files — and nothing else.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome native SQLite browser on Mac compared to Realm Studio" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Mesma Filosofia Focada</h3>
<p>Realm Studio não tenta ser um cliente PostgreSQL. Da mesma forma, Tome não tenta se conectar a MySQL ou MongoDB. Ao se concentrar exclusivamente em SQLite, cada recurso — edição em linha, criação de tabela, preenchimento automático de consulta — é otimizado para o formato com o qual você realmente está trabalhando.</p>

<h3>Navegue em Tabelas, Edite em Linha, Consulte com Conforto</h3>
<p>Abra um banco de dados SQLite e navegue em tabelas, visualizações, índices e gatilhos na barra lateral. Edite valores de célula clicando neles. Insira ou delete linhas sem escrever SQL. Quando você precisa de consultas, o editor integrado oferece destaque de sintaxe e preenchimento automático para seu esquema.</p>

<h3>Quando Você Precisa de Ambos</h3>
<p>Alguns projetos usam Realm para um componente e SQLite para outro. Mantenha Realm Studio e Tome lado a lado — cada um lida com seu formato nativamente e nenhum desperdiça recursos tentando suportar formatos para os quais não foi projetado.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenha Tome na Mac App Store</a></p>
`,
  },
  "mac-sqlite-command-line-vs-gui": {
    slug: "mac-sqlite-command-line-vs-gui",
    title: "Mac SQLite: Linha de Comando vs GUI — Quando Usar Cada Uma",
    description: "O CLI sqlite3 é fornecido com todos os Macs e lida com consultas rápidas, mas falha na navegação, edição e compreensão de esquemas desconhecidos. Saber quando trocar de ferramenta economiza tempo.",
    date: "2026-09-06",
    readTime: "5 min de leitura",
    content: `
<p>Every Mac ships with the<code>sqlite3</code>command-line tool. For developers comfortable in Terminal, it's a reliable way to run quick queries. But there's a point where the CLI stops being efficient and a GUI becomes faster — the trick is knowing where that line is. Using the wrong tool for the task wastes time in both directions.</p>

<h2>Quando a Linha de Comando Vence</h2>
<p>The<code>sqlite3</code>CLI excels at scripted operations. If you're writing a shell script that needs to extract a value from a database, the CLI pipes directly into other commands. One-liner queries are fast:<code>sqlite3 app.db "SELECT count(*) FROM users;"</code>gives you an answer without launching anything. For automation, backups with<code>.dump</code>, and quick checks in an existing Terminal session, the CLI is the right tool.</p>
<p>Também está disponível em qualquer lugar. Nenhuma instalação necessária, nenhum aplicativo para baixar. Se você estiver SSH'd em uma máquina remota ou trabalhando em um pipeline de CI, o CLI é tudo o que você tem — e funciona bem para consultas direcionadas onde você conhece o esquema.</p>

<h2>Quando o CLI Falha Você</h2>
<p>The CLI breaks down for exploration. When you open an unfamiliar database and need to understand its schema, running<code>.tables</code>and<code>.schema tablename</code>repeatedly is slow. Wide tables wrap in the terminal. There's no scrolling through results — output just flies past. Editing data means writing UPDATE statements with precise WHERE clauses, risking accidental bulk updates if you make a typo.</p>
<p>Para qualquer pessoa que não seja um desenvolvedor — analistas de dados, designers, testadores de QA — o CLI é efetivamente inutilizável. E até mesmo para desenvolvedores, navegar em mais de poucas tabelas visualmente é simplesmente mais rápido em uma GUI.</p>

<h2>Tome: O Lado GUI da Equação</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>fills the GUI role as a native macOS SQLite browser. It's not a replacement for the CLI — it's the complement. Use the CLI for scripting and quick checks; use Tome for browsing, editing, and understanding databases visually.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome GUI SQLite browser compared to command line on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Explore Esquemas Desconhecidos</h3>
<p>Abra qualquer banco de dados e veja cada tabela, visualização, índice e gatilho na barra lateral. Clique nas tabelas para entender o esquema, verificar dados de amostra e descobrir relacionamentos — tudo sem digitar um único comando.</p>

<h3>Editar com Segurança</h3>
<p>Clique em uma célula para alterar seu valor. Nenhuma instrução UPDATE, nenhuma cláusula WHERE para acertar errado. Insira e delete linhas com um clique. O risco de alterações em massa acidental desaparece quando cada edição direciona exatamente a célula que você clicou.</p>

<h3>Consulte com Assistência</h3>
<p>Quando você escreve SQL, o editor de consulta do Tome oferece destaque de sintaxe e preenchimento automático. É o termo médio entre o CLI simples e um IDE de banco de dados completo — apenas assistência suficiente para escrever consultas mais rápido sem a sobrecarga de ferramentas corporativas.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenha Tome na Mac App Store</a></p>
`,
  },
  "edit-sqlite-without-sql-mac": {
    slug: "edit-sqlite-without-sql-mac",
    title: "Como Editar SQLite Sem Escrever SQL no Mac",
    description: "Nem todos que precisam alterar um valor em um banco de dados SQLite conhecem SQL. Designers, testadores de QA e gerentes de produto não devem precisar aprender a sintaxe UPDATE para uma rápida correção de dados.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>A QA tester needs to change a user's role to reproduce a permission bug. A designer wants to swap placeholder text in a prototype's database. A product manager needs to update a config value to test a feature flag. None of them should have to learn SQL syntax to make a simple data change — but on Mac, the default tool for editing SQLite databases is the<code>sqlite3</code>command line, where even a one-cell edit requires writing<code>UPDATE tablename SET column = 'value' WHERE id = 42;</code>.</p>

<h2>SQL É uma Barreira para Não-Desenvolvedores</h2>
<p>SQL não é difícil de aprender em teoria, mas acertá-lo sob pressão é outra questão. Esquecer a cláusula WHERE em uma instrução UPDATE altera cada linha na tabela. Usar as aspas erradas causa um erro de sintaxe. Missoletrar um nome de coluna produz uma mensagem de erro confusa. Para alguém que apenas precisa ativar um booleano ou alterar uma string, esta cerimônia é desproporcional à tarefa.</p>
<p>Even developers often prefer not to write SQL for trivial edits. Opening Terminal, navigating to the file, launching<code>sqlite3</code>, remembering the exact table and column names, and writing a syntactically correct statement — all to change one cell — is slow compared to just clicking and typing.</p>

<h2>Editar SQLite Como uma Planilha Com Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>lets anyone edit a SQLite database on Mac without writing a single line of SQL. Open the file, find the table, click the cell, type the new value. It works like editing a spreadsheet — because for simple changes, that's exactly the interface you want.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome editing SQLite data without SQL on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Clique para Editar Qualquer Célula</h3>
<p>Cada célula na grade de dados do Tome é editável. Clique nela, altere o valor e a atualização direciona essa linha e coluna exatas. Sem cláusula WHERE para esquecer, sem risco de alterações em massa, sem conhecimento de SQL necessário.</p>

<h3>Inserir e Deletar Sem Comandos</h3>
<p>Adicione uma nova linha clicando no botão inserir. Remova linhas selecionando e deletando-as. Tome lida com o SQL INSERT e DELETE nos bastidores, para que você interaja com seus dados usando ações familiares em vez de comandos de banco de dados.</p>

<h3>Criar Tabelas Visualmente</h3>
<p>Need a new table? Tome's visual table editor lets you define column names, types, and constraints in a form — no need to write<code>CREATE TABLE</code>syntax from memory. Fill in the fields and the table is created correctly.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenha Tome na Mac App Store</a></p>
`,
  },
  "sqlite-database-viewer-apple-silicon": {
    slug: "sqlite-database-viewer-apple-silicon",
    title: "Visualizador de Banco de Dados SQLite Otimizado para Apple Silicon",
    description: "Muitas ferramentas de banco de dados ainda são executadas por meio de Rosetta em Macs com Apple Silicon, desperdiçando bateria e desempenho. Uma compilação ARM nativa faz uma diferença notável para um aplicativo que você mantém aberto o dia todo.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Você comprou um Mac série M pelo seu desempenho e vida útil da bateria. Em seguida, você instala uma ferramenta de banco de dados e percebe que é executada através de Rosetta — a camada de tradução Intel que existe para compatibilidade, não desempenho. O aplicativo usa mais memória, drena mais bateria e inicia mais lentamente do que deveria. Para uma ferramenta que você pode manter aberta ao lado do Xcode ou VS Code o dia todo, essa sobrecarga se acumula.</p>

<h2>O Imposto Rosetta em Ferramentas de Banco de Dados</h2>
<p>Muitos navegadores de banco de dados populares ainda são enviados como binários apenas Intel ou são construídos com Electron, que apenas recentemente ganhou suporte confiável do Apple Silicon. DB Browser para SQLite, construído com Qt, teve suporte ARM inconsistente entre versões. DBeaver é executado em Java, adicionando outra camada de abstração acima do hardware. Até ferramentas que tecnicamente suportam Apple Silicon geralmente agrupam o motor Chromium do Electron, que consome significativamente mais recursos do que um aplicativo nativo precisa.</p>
<p>Verifique o Monitor de Atividade e procure pela coluna "Tipo". Se sua ferramenta de banco de dados mostrar "Intel" em um Mac série M, é porque está sendo executada por meio de Rosetta. Isso significa inicialização mais lenta, maior uso de memória e vida útil reduzida da bateria em comparação com um binário ARM nativo. Para um utilitário leve como um visualizador SQLite, o gap de desempenho é especialmente notável porque o aplicativo em si deveria ser rápido e pequeno.</p>

<h2>Tome: Apple Silicon Nativo Desde o Primeiro Dia</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>is built with Swift and AppKit as a universal binary that runs natively on both Apple Silicon and Intel Macs. On an M-series Mac, it launches instantly, uses minimal memory, and has zero Rosetta overhead. It's the kind of app Apple Silicon was designed to run.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome SQLite viewer running natively on Apple Silicon Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Inicialização Instantânea, Memória Baixa</h3>
<p>Sem inicialização de JVM, sem inicialização do motor Chromium, sem tradução de Rosetta. Tome abre em menos de um segundo e permanece leve — normalmente usando uma fração da memória que as alternativas baseadas em Electron consomem. Mantenha-o aberto o dia todo sem impactar seu outro trabalho.</p>

<h3>Rolagem Suave Através de Tabelas Grandes</h3>
<p>A renderização nativa do AppKit significa que Tome rola através de milhares de linhas com a mesma suavidade que você espera do Finder ou Numbers. Sem quadros perdidos, sem atraso ao pular para o final de um grande conjunto de resultados. O chip série M lida com a interface nativa sem esforço.</p>

<h3>Conjunto Completo de Recursos, Pegada Mínima</h3>
<p>Navegue em tabelas, visualizações, índices e gatilhos. Edite dados em linha. Execute consultas SQL com destaque de sintaxe e preenchimento automático. Crie e modifique tabelas visualmente. Tudo isso em um aplicativo que respeita os recursos do seu Mac porque foi construído especificamente para a plataforma.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenha Tome na Mac App Store</a></p>
`,
  },
  "open-whatsapp-backup-sqlite-mac": {
    slug: "open-whatsapp-backup-sqlite-mac",
    title: "Como Abrir Backup SQLite do WhatsApp no Mac",
    description: "WhatsApp stores chat history in a SQLite database. Viewing those messages outside the app — for archival, legal, or personal reasons — requires extracting and opening the database file on your Mac.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>WhatsApp stores your chat messages, media references, and contact data in a SQLite database. Whether you've extracted a backup from an iPhone using a tool like iMazing, retrieved a<code>ChatStorage.sqlite</code>file from an iTunes backup, or pulled a<code>msgstore.db</code>from an Android backup, you now have a database file on your Mac. Double-clicking it does nothing useful. You need a way to open it and read the conversations inside.</p>

<h2>Why This Is Harder Than It Should Be</h2>
<p>WhatsApp's SQLite databases use their own schema. Messages live in tables like<code>ZWAMESSAGE</code>(iOS) or<code>messages</code>(Android), with columns for sender, timestamp, text content, media type, and status. Timestamps are stored in non-standard formats — iOS uses Core Data's epoch (seconds since 2001-01-01), while Android uses Unix milliseconds. Contacts are referenced by JID strings, not readable names.</p>
<p>Opening the file in Terminal with<code>sqlite3</code>gives you raw access, but reading chat messages as unformatted rows of text with encoded timestamps and JID identifiers is practically useless for most people. You need a visual interface to make sense of the data.</p>
<p>Android backups add another complication: the<code>msgstore.db.crypt15</code>file is encrypted. You need to decrypt it first using your key file before any SQLite browser can open it. Once decrypted, though, it's a standard SQLite database.</p>

<h2>Browse WhatsApp Data With Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>opens WhatsApp's SQLite database files like any other database. Drag the extracted<code>ChatStorage.sqlite</code>or decrypted<code>msgstore.db</code>onto Tome and see every table in the sidebar. Click the messages table to browse your chat history in a scrollable grid.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome opening a WhatsApp backup SQLite database on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Read Messages in Context</h3>
<p>Browse the messages table to see text content, sender identifiers, timestamps, and media references. Sort by date to read conversations chronologically. Use Tome's SQL editor to filter messages by contact or date range.</p>

<h3>Search Across Conversations</h3>
<p>Need to find a specific message? Write a quick query in Tome's SQL editor with auto-complete:<code>SELECT * FROM ZWAMESSAGE WHERE ZTEXT LIKE '%keyword%';</code>Results appear in a native grid you can scroll and sort — far more practical than grep in Terminal.</p>

<h3>Your Data Stays on Your Mac</h3>
<p>Unlike web-based SQLite viewers that require uploading your database, Tome runs entirely locally. Your WhatsApp messages never leave your machine. Open, browse, query, and close — everything happens on your Mac.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenha Tome na Mac App Store</a></p>
`,
  },
  "sqlite-query-editor-autocomplete-mac": {
    slug: "sqlite-query-editor-autocomplete-mac",
    title: "SQLite Query Editor with Autocomplete on Mac",
    description: "Writing SQL queries against a SQLite database without auto-complete means constantly switching between the schema view and the editor to check table and column names.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>You're writing a SELECT query against a SQLite database with thirty tables. You remember the table is called something like<code>user_sessions</code>or<code>session_logs</code>— but which one? And the timestamp column — is it<code>created_at</code>,<code>timestamp</code>, or<code>date_created</code>? In the<code>sqlite3</code>CLI, you'd switch to<code>.schema</code>mode, look up the table, go back to writing your query, and repeat for every column reference. This context-switching is where most of your query-writing time actually goes.</p>

<h2>The Cost of No Auto-Complete</h2>
<p>The<code>sqlite3</code>CLI has no auto-complete for table or column names. You type from memory, and if you misspell something, you get an error after executing — not while typing. For simple databases with a few tables, this is manageable. For databases with dozens of tables and hundreds of columns, it's a constant tax on your productivity.</p>
<p>Some developers copy table schemas to a notes file and reference it while writing queries. Others run<code>.tables</code>and<code>PRAGMA table_info(tablename);</code>repeatedly. Both approaches are workarounds for a missing feature — the query editor should know your schema and help you write correct SQL.</p>
<p>Full database IDEs like DataGrip offer excellent auto-complete, but they're expensive, heavy, and designed for enterprise workflows. For a local SQLite file, you shouldn't need a subscription-based IDE just to get table name suggestions.</p>

<h2>Tome's Auto-Complete Query Editor</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>includes a SQL query editor that knows your database schema. Start typing a table name and it suggests matches. Reference a table and column names appear as completions. It's not a full IDE — it's exactly the level of assistance that makes writing SQLite queries fast without adding complexity.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome SQL query editor with autocomplete on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Schema-Aware Suggestions</h3>
<p>Tome reads your database schema when you open the file. Table names, column names, and SQLite keywords all appear as suggestions while you type. No need to memorize column names or switch to a schema browser mid-query.</p>

<h3>Destaque de Sintaxe</h3>
<p>SQL keywords, string literals, numbers, and identifiers are color-coded. Spot a missing quote or a misspelled keyword before you run the query, not after reading an error message.</p>

<h3>Resultados em uma Grade Nativa</h3>
<p>Query results appear instantly in a native macOS table view. Sort columns, resize them, and scroll through large result sets smoothly. Copy results or select specific cells — the grid behaves like a proper Mac data view, not an HTML table rendered in a web view.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenha Tome na Mac App Store</a></p>
`,
  },
  "view-chrome-cookies-sqlite-mac": {
    slug: "view-chrome-cookies-sqlite-mac",
    title: "Como Ver os Cookies do Chrome (SQLite) no Mac",
    description: "O Chrome armazena os cookies num banco de dados SQLite no seu Mac. Vê-los pelo DevTools funciona para um site de cada vez, mas inspecionar o banco de dados completo de cookies exige uma abordagem diferente.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>O Chrome armazena todos os cookies num arquivo de banco de dados SQLite chamado <code>Cookies</code> (sem extensão), localizado em <code>~/Library/Application Support/Google/Chrome/Default/Cookies</code>. Você pode ver os cookies de um único site através do Chrome DevTools, mas se quiser pesquisar em todos os cookies, analisar padrões de rastreamento ou auditar quais dados os sites armazenaram, precisa abrir o arquivo de banco de dados real. O Chrome não oferece uma forma de navegar visualmente pelo seu armazenamento completo de cookies.</p>

<h2>A Limitação do DevTools</h2>
<p>A aba Application do DevTools do Chrome mostra os cookies por domínio para a página atualmente carregada. Isso funciona para depurar os cookies de um site específico, mas fica aquém quando você quer ver todos os cookies de todos os sites, pesquisar um nome de cookie específico usado por vários domínios ou contar quantos cookies de rastreamento estão presentes. Você precisaria visitar cada site individualmente e inspecionar cada um — não é prático.</p>
<p>A abordagem por banco de dados dá a você o quadro completo. Mas abrir o arquivo <code>Cookies</code> do Chrome com <code>sqlite3</code> no Terminal significa ler linhas de chaves de host, nomes de cookies, valores, timestamps de expiração (no formato de época do Chrome — microssegundos desde 1º de janeiro de 1601) e valores criptografados como texto bruto. O Chrome criptografa os valores dos cookies no macOS, então a coluna <code>encrypted_value</code> contém blobs binários que não são legíveis diretamente. As colunas de metadados — host, nome, caminho, expiração, flags — ainda são legíveis e frequentemente é o que você realmente precisa.</p>

<h2>Navegue pelos Cookies do Chrome com o Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> abre o arquivo de banco de dados Cookies do Chrome e exibe a tabela <code>cookies</code> numa grade rolável e ordenável. Feche o Chrome primeiro (ele bloqueia o arquivo), depois abra <code>~/Library/Application Support/Google/Chrome/Default/Cookies</code> no Tome.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome exibindo o banco de dados SQLite de cookies do Chrome no Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Pesquise em Todos os Domínios</h3>
<p>Use o editor SQL do Tome para encontrar cookies por nome, host ou padrão. Uma consulta como <code>SELECT host_key, name, path FROM cookies WHERE name LIKE '%_ga%';</code> revela todos os cookies do Google Analytics em todos os sites que você visitou — algo que o DevTools não consegue mostrar numa única visualização.</p>

<h3>Audite os Metadados dos Cookies</h3>
<p>Navegue pela tabela de cookies para ver quais domínios definem cookies persistentes, quais usam flags seguras e quais têm atributos SameSite. Ordene por data de expiração para encontrar cookies que persistem por anos. Essa informação está toda visível mesmo que os valores estejam criptografados.</p>

<h3>Inspecione Outros Bancos de Dados do Chrome</h3>
<p>O diretório de perfil do Chrome contém outros bancos de dados SQLite também: <code>History</code>, <code>Login Data</code>, <code>Web Data</code> e <code>Favicons</code>. Cada um pode ser aberto no Tome para inspeção visual — útil para entender quais dados o Chrome armazena localmente.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenha o Tome na Mac App Store</a></p>
`,
  },
  "compare-sqlite-databases-mac": {
    slug: "compare-sqlite-databases-mac",
    title: "Como Comparar Bancos de Dados SQLite Lado a Lado no Mac",
    description: "Depois de uma migração, mudança de esquema ou sincronização de dados, verificar se dois bancos de dados SQLite coincidem é tedioso sem uma forma de ver ambos simultaneamente.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Você executou uma migração de dados e precisa verificar os resultados. Ou está comparando um banco de dados de desenvolvimento com uma cópia de staging. Ou um colega lhe enviou a versão dele de um banco de dados compartilhado e você precisa identificar as diferenças. Em cada caso, a tarefa é a mesma: olhar para dois bancos de dados SQLite e descobrir o que mudou. No Mac, a maioria das ferramentas torna isso surpreendentemente difícil porque são projetadas em torno de uma única conexão de banco de dados.</p>

<h2>Por Que Comparar Bancos de Dados Costuma Ser Doloroso</h2>
<p>Com o CLI <code>sqlite3</code>, comparar dois bancos de dados significa abrir duas janelas do Terminal, executar a mesma consulta em cada uma e vasculhar visualmente a saída em busca de diferenças. Para tabelas pequenas, isso funciona. Para tabelas com centenas de linhas e dezenas de colunas, é propenso a erros e lento. Não há visualização lado a lado, nenhum destaque de diferenças — apenas dois fluxos de texto simples.</p>
<p>Alguns desenvolvedores usam o <code>sqldiff</code>, uma ferramenta de linha de comando que gera as instruções SQL necessárias para transformar um banco de dados no outro. É poderosa para comparações com script, mas produz saída SQL bruta, não um diff visual. Entender o que realmente mudou exige ler instruções INSERT, UPDATE e DELETE em vez de ver os próprios dados.</p>
<p>A maioria dos navegadores de banco de dados com interface gráfica agrava o problema por suportar apenas um banco de dados de cada vez. Você abre o banco de dados A, inspeciona, fecha, abre o banco de dados B e tenta lembrar o que viu no banco de dados A. Algumas ferramentas suportam múltiplas conexões, mas exigem configuração manual para cada uma.</p>

<h2>Abra Ambos os Bancos de Dados Lado a Lado com o Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> é um app macOS baseado em documentos, o que significa que cada banco de dados abre na sua própria janela com sua própria interface completa. Abra dois bancos de dados e organize-os lado a lado usando o Split View do macOS ou arrastando as janelas — da mesma forma que você compararia dois arquivos de texto.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome comparando dois bancos de dados SQLite lado a lado no Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Comparação Visual de Esquema</h3>
<p>Com ambos os bancos de dados abertos, verifique a barra lateral de cada janela. A origem tem tabelas que o destino não tem? Existem índices presentes num mas ausentes no outro? Uma varredura visual de ambas as barras laterais responde a essas perguntas instantaneamente.</p>

<h3>Comparação Linha a Linha</h3>
<p>Abra a mesma tabela em ambas as janelas e percorra os dados. Ordene ambas pela mesma coluna para alinhar as linhas. Diferenças na contagem de linhas ou nos valores dos dados tornam-se visíveis quando você pode ver ambas as grades simultaneamente.</p>

<h3>Consulte Ambos Independentemente</h3>
<p>Cada janela tem seu próprio editor de consultas SQL. Execute a mesma consulta de agregação em ambas — <code>SELECT COUNT(*) FROM users;</code> — e compare os resultados lado a lado. Escreva consultas mais complexas para verificar somas, médias ou a existência de registros específicos em cada banco de dados independentemente.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenha o Tome na Mac App Store</a></p>
`,
  },
  "lightweight-database-browser-mac": {
    slug: "lightweight-database-browser-mac",
    title: "Lightweight Database Browser for Mac — No Electron, No Java",
    description: "Database browsers that bundle Chromium or the JVM consume hundreds of megabytes before you've even loaded a file. A lightweight alternative should use what macOS already provides.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>You install a database browser, and Activity Monitor reveals it's using 350 MB of RAM — before you've opened a single file. The app takes several seconds to launch. Scrolling through a table stutters. The interface doesn't match your other Mac apps. This is the cost of Electron and Java-based database tools: they bring their own rendering engine, their own UI framework, and their own memory overhead, regardless of what you're actually doing with them.</p>

<h2>Why Database Browsers Are Unnecessarily Heavy</h2>
<p>Electron apps ship a full Chromium browser to render their interface. For a database browser — an app that primarily displays tables of data — this is like shipping a diesel generator to power a desk lamp. DBeaver and similar tools run on Java, which means a JVM startup penalty, garbage collection pauses, and memory usage that grows over time. Both approaches prioritize cross-platform compatibility over efficiency.</p>
<p>On macOS, this overhead is especially frustrating because the operating system already provides everything a database browser needs: AppKit for native table views, Core Graphics for rendering, and built-in support for dark mode, tabs, and window management. A database browser that uses these frameworks directly can be a fraction of the size and dramatically faster than one that brings its own platform.</p>

<h2>Tome: A Database Browser That Respects Your Resources</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>is built with Swift and AppKit — no Electron, no Java, no web views. It uses the same native frameworks as Finder and Preview, resulting in an app that launches instantly, stays lightweight in memory, and feels like it belongs on your Mac.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome lightweight native SQLite browser for Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Sub-Second Launch</h3>
<p>No JVM initialization, no Chromium startup. Tome opens faster than the time it takes most Electron apps to show their splash screen. Click the dock icon and your database is ready to browse almost immediately.</p>

<h3>Minimal Memory Footprint</h3>
<p>Native AppKit table views render thousands of rows using a fraction of the memory a web-based grid would consume. Keep Tome open alongside Xcode, VS Code, and your browser without it competing for resources.</p>

<h3>Full Feature Set, Small Package</h3>
<p>Being lightweight doesn't mean being limited. Tome includes everything you need for SQLite work: browse tables, views, indexes, and triggers; edit data inline; insert and delete rows; create tables visually; and run SQL queries with syntax highlighting and auto-complete. All in an app that treats your Mac's resources with respect.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenha Tome na Mac App Store</a></p>
`,
  },
  "export-sqlite-to-csv-mac": {
    slug: "export-sqlite-to-csv-mac",
    title: "Como Exportar SQLite para CSV no Mac",
    description: "Tirar dados de um banco de dados SQLite e colocá-los numa planilha significa lidar com as opções de formatação do CLI sqlite3 ou escrever um script. Uma ferramenta visual transforma isso numa tarefa de uma única consulta.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Você precisa levar dados de um banco de dados SQLite para um arquivo CSV — talvez para compartilhar com um colega que usa Excel, para importar numa ferramenta de visualização de dados ou para arquivar registros num formato portátil. O CLI <code>sqlite3</code> consegue fazer isso, mas o fluxo de trabalho é complicado: definir o modo para CSV com <code>.mode csv</code>, definir o arquivo de saída com <code>.output filename.csv</code>, executar sua consulta e depois lembrar de redefinir a saída com <code>.output stdout</code>. Perca qualquer etapa e você não obtém arquivo nenhum, ou o seu terminal fica silencioso porque a saída ainda está redirecionada.</p>

<h2>O Fluxo de Exportação via CLI é Propenso a Erros</h2>
<p>Exportar para CSV com o <code>sqlite3</code> exige múltiplos comandos-ponto na ordem correta. Uma sessão típica se parece com isto:</p>
<pre><code>sqlite3 mydb.sqlite
.headers on
.mode csv
.output export.csv
SELECT * FROM products WHERE category = 'electronics';
.output stdout</code></pre>
<p>Esqueça <code>.headers on</code> e seu CSV não terá cabeçalhos de coluna. Esqueça <code>.output stdout</code> e o resultado da sua próxima consulta vai para o arquivo em vez da tela. Quer exportar uma segunda tabela? Repita toda a sequência com um nome de arquivo diferente. Para uma exportação única, é tolerável. Para exportações regulares em várias tabelas, é tedioso e propenso a erros.</p>
<p>Você poderia escrever um script Python com os módulos <code>csv</code> e <code>sqlite3</code>, mas isso é sobrecarga de engenharia para o que deveria ser uma simples tarefa de extração de dados.</p>

<h2>Exporte com o Editor de Consultas do Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a> permite executar qualquer consulta SQL e ver os resultados numa grade nativa. A partir daí, selecionar e copiar os dados dá a você um formato que pode colar diretamente numa planilha ou salvar como CSV. Escreva sua consulta com autocompletar, execute-a e obtenha os dados — sem comandos-ponto, sem troca de modo.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome exportando resultados de consulta SQLite no Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Consulte Primeiro, Exporte o Que Você Precisa</h3>
<p>Em vez de exportar uma tabela inteira e filtrar no Excel, escreva uma consulta direcionada no Tome: filtre linhas, junte tabelas, agregue valores e formate colunas com SQL. Exporte apenas os dados que você realmente precisa, já no formato que deseja.</p>

<h3>Verificação Visual Antes da Exportação</h3>
<p>Veja os resultados da sua consulta numa grade rolável antes de exportar. Verifique se as colunas estão corretas, os dados parecem certos e a contagem de linhas corresponde ao esperado. Detectar erros antes da exportação evita que você tenha que refazer o trabalho depois de abrir um CSV ruim no Excel.</p>

<h3>Navegue Primeiro pelo Esquema Completo</h3>
<p>Não tem certeza de qual tabela tem os dados que você precisa? Navegue pelas tabelas, visualizações e suas colunas na barra lateral do Tome. Clique nos dados de amostra para entender o esquema antes de escrever sua consulta de exportação. Essa exploração visual é muito mais rápida do que executar comandos <code>.schema</code> no Terminal.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenha o Tome na Mac App Store</a></p>
`,
  },
  "sqlite-for-data-science-mac": {
    slug: "sqlite-for-data-science-mac",
    title: "SQLite Browser for Data Science on Mac",
    description: "Data scientists working with local datasets in SQLite need a way to explore schemas, preview data, and test queries before writing pipeline code — without spinning up a full database server.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>You've received a dataset as a SQLite file — a Kaggle download, a scraped dataset, a colleague's export, or your own ETL output. Before writing Python code to process it, you need to understand what's inside: table names, column types, row counts, data distributions, and potential quality issues. Jupyter notebooks can query SQLite, but setting up the connection, writing exploratory SQL, and rendering results in notebook cells is overhead when all you want is a quick look at the data.</p>

<h2>The Exploration Gap in Data Science Workflows</h2>
<p>Data scientists typically explore SQLite files using one of three approaches: the<code>sqlite3</code>CLI (fast but no visual output), a Jupyter notebook with<code>pandas.read_sql()</code>(flexible but requires setup for each session), or a heavyweight database IDE like DBeaver (powerful but overkill for a local file). None of these hit the sweet spot of "open a file and browse the data immediately."</p>
<p>The CLI is particularly poor for data exploration because it has no visual formatting for wide tables, no scrollable output, and no way to quickly scan data distributions. Notebooks add value for analysis but are slow for the initial "what does this data look like?" phase. You end up writing boilerplate connection code before seeing a single row.</p>

<h2>Explore Datasets Visually With Tome</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>lets you open a SQLite dataset and immediately understand its structure. Every table appears in the sidebar with its row count. Click a table to scroll through its data in a native grid. No setup, no connection strings, no boilerplate — just open the file and look.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome browsing a data science SQLite dataset on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Understand Schema Before Writing Code</h3>
<p>Browse tables to see column names, types, and sample values. Identify which columns contain nulls, which tables relate to each other through foreign keys, and how the dataset is structured — all before writing a single line of Python. This context makes your analysis code more targeted from the start.</p>

<h3>Test Queries Interactively</h3>
<p>Use Tome's SQL editor with auto-complete to prototype queries. Test your WHERE clauses, JOIN conditions, and aggregations in Tome first, then copy the working SQL into your Python pipeline. Catching query errors in a visual editor is faster than debugging them in a notebook cell.</p>

<h3>Inspect ETL Output</h3>
<p>After your pipeline writes results to a SQLite database, open it in Tome to verify the output. Check row counts, spot null values, and confirm that transformations produced the expected results — all without writing additional verification code.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenha Tome na Mac App Store</a></p>
`,
  },
  "postico-alternative-sqlite-mac": {
    slug: "postico-alternative-sqlite-mac",
    title: "Postico Alternative for SQLite on Mac",
    description: "Postico is a beloved Mac-native database client — but it only supports PostgreSQL. If you work with SQLite files, you need the same native quality for a different format.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>If you've used Postico for PostgreSQL on Mac, you know what a native database client should feel like: instant launch, clean interface, proper macOS integration, and just enough features to be productive without clutter. It's widely regarded as one of the best database tools on the platform. The only problem is that Postico doesn't support SQLite. If your data lives in .sqlite files instead of a PostgreSQL server, you need to find something else — and the "something else" is usually an Electron or Java app that feels nothing like Postico.</p>

<h2>The Gap Between Postico and SQLite Tools</h2>
<p>Postico proved that a database client can be a great Mac app. It uses native macOS controls, respects system conventions, launches quickly, and stays out of your way. It set a standard that most SQLite browsers haven't met.</p>
<p>DB Browser for SQLite is Qt-based — functional but visually disconnected from macOS. TablePlus supports SQLite but also supports a dozen other databases, bringing complexity that Postico deliberately avoids. DBeaver runs on Java with all the resource overhead that implies. None of these tools deliver the "built for Mac" experience that Postico users expect.</p>
<p>The issue isn't that these are bad tools — they're not. It's that once you've experienced a truly native Mac database client, cross-platform alternatives feel like a compromise. You want the same philosophy applied to a different format.</p>

<h2>Tome: The Postico Experience for SQLite</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>brings the same native Mac quality to SQLite that Postico brings to PostgreSQL. Built with Swift and AppKit, it launches instantly, follows macOS design conventions, and focuses on doing one thing well — browsing and editing SQLite databases.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome as a Postico-quality SQLite browser for Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Same Philosophy, Different Format</h3>
<p>Like Postico, Tome is laser-focused. No PostgreSQL, no MySQL, no MongoDB — just SQLite. Every feature is designed for the format you're working with. The interface is clean, the app is fast, and there's nothing extraneous competing for your attention.</p>

<h3>Native macOS Experience</h3>
<p>Document-based architecture with proper window and tab support. System dark mode. Drag-and-drop from Finder. Keyboard shortcuts that match macOS conventions. Tome behaves like a Mac app because it is one — built with the same frameworks Apple uses for its own applications.</p>

<h3>Browse, Edit, and Query</h3>
<p>Browse tables, views, indexes, and triggers in the sidebar. Edit cells inline. Insert and delete rows without writing SQL. When you need queries, the built-in editor provides syntax highlighting and auto-complete for your schema. It's everything a SQLite browser needs — and nothing it doesn't.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Obtenha Tome na Mac App Store</a></p>
`,
  },
};
