import type { ArticleSet } from "./index";

export const ptArticles: ArticleSet = {
  "rename-multiple-files-mac": {
    slug: "rename-multiple-files-mac",
    title: "Como Renomear Vários Arquivos no Mac",
    description: "Renomear arquivos um por um desperdiça horas que você poderia usar em trabalho de verdade. O macOS oferece algumas opções nativas, mas elas se mostram limitadas assim que você precisa de algo além da numeração sequencial básica.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Você tem uma pasta cheia de arquivos com nomes péssimos. Talvez tenham vindo de uma câmera, de um scanner, ou de um cliente que acha que "final_final_v3_REAL.pdf" é um nome de arquivo aceitável. Você precisa renomear todos eles para algo organizado. No Mac, você tem algumas opções — mas a maioria delas esbarra em um limite surpreendentemente rápido.</p>

<p>Se você já passou vinte minutos renomeando arquivos um a um no Finder, já conhece essa dor. E se já experimentou a renomeação em lote nativa do Finder, sabe que ela cobre o básico, mas deixa você na mão assim que precisa de controle de verdade.</p>

<h2>O que o macOS oferece de fábrica</h2>

<p>O Finder tem, sim, uma função de renomear em lote. Selecione vários arquivos, clique com o botão direito e escolha "Renomear". Você tem três modos: substituir texto, adicionar texto ou formatar (numeração sequencial). Para tarefas simples — adicionar um prefixo ou substituir uma palavra — funciona bem. Mas as limitações aparecem rápido:</p>

<ul>
  <li>Nenhum suporte a regex ou correspondência de padrões</li>
  <li>Nenhuma forma de remover caracteres específicos por posição</li>
  <li>Nenhuma pré-visualização de como os nomes finais vão ficar antes de confirmar</li>
  <li>Nenhuma renomeação em várias etapas — você só executa uma operação por vez</li>
  <li>Nenhum desfazer caso cometa um erro em centenas de arquivos</li>
</ul>

<p>Para qualquer coisa além de uma renomeação trivial, você precisa de uma ferramenta dedicada.</p>

<h2>A abordagem de pipeline visual</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> adota uma abordagem diferente para renomeação em lote. Em vez de um único campo de texto e um botão "aplicar", você monta um pipeline visual de ações de renomeação. Cada etapa transforma o nome do arquivo, e você pode empilhar quantas etapas precisar.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Pipeline de renomeação de arquivos em lote do Renym no macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Arraste, pré-visualize, aplique</h3>

<p>Arraste seus arquivos para dentro do Renym e veja imediatamente os nomes atuais ao lado de uma pré-visualização ao vivo de como eles vão ficar. Cada ação que você adiciona atualiza a pré-visualização em tempo real, então você sabe exatamente qual será o resultado antes de tocar em um único arquivo.</p>

<h3>Empilhe várias operações</h3>

<p>Precisa remover um prefixo, substituir sublinhados por hífens e adicionar numeração sequencial? Monte um pipeline de três etapas. Cada etapa alimenta a seguinte, e você pode reordenar ou remover etapas sem começar do zero.</p>

<h3>Desfaça quando algo dá errado</h3>

<p>Renomeou 300 arquivos e percebeu que a segunda etapa estava errada? O Renym oferece suporte a desfazer, então você pode reverter o lote inteiro e tentar de novo. Sem precisar corrigir nomes manualmente, um por um.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Baixe o Renym na Mac App Store</a></p>
`,
  },
  "batch-rename-photos-mac": {
    slug: "batch-rename-photos-mac",
    title: "Como Renomear Fotos em Lote no Mac",
    description: "Arquivos de câmera com nomes como IMG_4872.JPG não dizem nada sobre o que há na foto ou quando o ensaio aconteceu. Renomeá-los manualmente não é realista quando você tem centenas de imagens de uma única sessão.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Toda câmera, seja uma DSLR, uma mirrorless ou o seu iPhone, gera arquivos com nomes como IMG_4872.JPG, DSC_0034.CR2 ou P1040291.RW2. Esses nomes não significam nada. Quando você tem 400 fotos de um casamento ou de uma sessão de produtos, percorrer números sem sentido para encontrar a imagem certa é perda de tempo.</p>

<p>Você quer nomes como "Johnson_Casamento_001.jpg" ou "Sessao_Produtos_Marco_001.CR2" — algo que você consiga de fato pesquisar e organizar. Mas renomear 400 arquivos à mão não é uma opção viável.</p>

<h2>Por que o Finder não é suficiente para renomear fotos</h2>

<p>A renomeação em lote do Finder consegue adicionar numeração sequencial e substituir texto, mas fotógrafos precisam de mais:</p>

<ul>
  <li>Remover o prefixo original da câmera (IMG_, DSC_, etc.) e substituí-lo por um nome personalizado</li>
  <li>Adicionar numeração sequencial com zeros à esquerda (001, 002, 003 em vez de 1, 2, 3)</li>
  <li>Preservar as extensões dos arquivos enquanto tudo o resto muda</li>
  <li>Lidar com formatos mistos do mesmo ensaio (JPG + RAW)</li>
  <li>Pré-visualizar os 400 nomes antes de confirmar a renomeação</li>
</ul>

<p>O Finder consegue fazer algumas dessas coisas, mas não todas ao mesmo tempo, e nunca com uma pré-visualização ao vivo do lote completo.</p>

<h2>Renomeando lotes de fotos com um pipeline</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> lida com a renomeação de fotos por meio de um pipeline visual que permite encadear operações. Veja um fluxo de trabalho típico de renomeação de fotos:</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym renomeando um lote de fotos no macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Etapa 1: remova o prefixo da câmera</h3>

<p>Use localizar e substituir para remover "IMG_" ou "DSC_" de todos os nomes de arquivo. Isso funciona no lote inteiro de uma só vez.</p>

<h3>Etapa 2: insira um nome descritivo</h3>

<p>Adicione seu próprio prefixo — o nome do cliente, do projeto ou a descrição do ensaio. Todos os arquivos do lote recebem o mesmo prefixo.</p>

<h3>Etapa 3: adicione numeração sequencial</h3>

<p>Acrescente números com zeros à esquerda para que os arquivos sejam ordenados corretamente. 001, 002, 003 em vez de 1, 10, 100, 2, 20 — que é o que você obtém sem os zeros à esquerda.</p>

<h3>Pré-visualização ao vivo antes de confirmar</h3>

<p>Cada etapa atualiza uma coluna de pré-visualização ao vivo. Você vê "IMG_4872.JPG" à esquerda e "Johnson_Casamento_001.JPG" à direita. Sem adivinhação, sem erros, sem precisar corrigir manualmente 400 arquivos depois de uma renomeação malfeita.</p>

<p>Se algo parecer errado, reordene as etapas, ajuste um parâmetro ou remova uma etapa por completo. A pré-visualização é atualizada instantaneamente.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Baixe o Renym na Mac App Store</a></p>
`,
  },
  "rename-files-regex-mac": {
    slug: "rename-files-regex-mac",
    title: "Como Renomear Arquivos com Regex no Mac",
    description: "Quando os nomes de arquivo seguem padrões — datas embutidas no texto, números de versão, prefixos aleatórios — a simples localização e substituição não dá conta. Expressões regulares dão, mas o macOS não oferece renomeação por regex de forma nativa.",
    date: "2026-09-06",
    readTime: "5 min de leitura",
    content: `
<p>Você tem uma pasta cheia de arquivos como "report_2026-03-15_draft_v2.pdf" e precisa extrair só a data e reformatá-la, ou remover tudo depois do sublinhado, ou substituir um padrão que varia de arquivo para arquivo. A simples substituição de texto não resolve, porque o texto não é igual em todos os arquivos — ele segue um padrão.</p>

<p>Expressões regulares (regex) são a ferramenta certa para manipulação de texto baseada em padrões. Elas permitem localizar, capturar e reorganizar partes de um nome de arquivo com base em regras, e não em strings exatas. O problema é que o macOS não oferece renomeação por regex em lugar nenhum do Finder.</p>

<h2>A abordagem via Terminal e por que a maioria evita usá-la</h2>

<p>Você pode renomear arquivos com regex usando comandos do Terminal como <code>rename</code>, <code>sed</code> ou um loop bash com expansão de parâmetros. Por exemplo:</p>

<p><code>for f in *.pdf; do mv "$f" "$(echo "$f" | sed 's/draft_v[0-9]*/final/')"; done</code></p>

<p>Isso funciona, mas tem desvantagens reais:</p>

<ul>
  <li>Nenhuma pré-visualização — você só vê o resultado depois que a renomeação acontece</li>
  <li>Um único erro de digitação no regex e você tem nomes de arquivo corrompidos, sem desfazer</li>
  <li>Escrever e depurar regex em uma linha só é doloroso</li>
  <li>Usuários sem conhecimento técnico não conseguem usar essa abordagem na prática</li>
</ul>

<p>Até desenvolvedores experientes evitam renomear pelo Terminal em lotes grandes, porque o risco de erros irreversíveis é alto demais.</p>

<h2>Renomeação por regex com pré-visualização ao vivo</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> inclui suporte completo a regex na sua ação de localizar e substituir. Você escreve um padrão regex, define uma substituição (incluindo referências a grupos de captura) e vê o resultado em cada arquivo em tempo real — antes de qualquer coisa ser renomeada.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renomeação de arquivos por regex com pré-visualização ao vivo do Renym no macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Grupos de captura em ação</h3>

<p>Digamos que seus arquivos se chamem "2026-03-15_project_alpha.pdf" e você queira "project_alpha_2026-03-15.pdf". Escreva um regex que capture a data e o nome do projeto como grupos separados e depois reorganize-os no campo de substituição. A coluna de pré-visualização mostra o novo nome de cada arquivo instantaneamente.</p>

<h3>Remoção baseada em padrões</h3>

<p>Precisa remover todos os sufixos de versão como "_v1", "_v2", "_v14"? Um regex como <code>_v\\d+</code> encontra todos eles, independentemente do número. Uma ação, um padrão, todos os arquivos organizados.</p>

<h3>Combine regex com outras ações</h3>

<p>Regex é só mais uma ação dentro do pipeline. Depois de uma substituição por regex, você pode adicionar numeração sequencial, mudar a capitalização ou inserir texto. Cada etapa se baseia na anterior, e a pré-visualização reflete a cadeia inteira.</p>

<p>Se você já perdeu uma hora depurando um comando de renomeação no Terminal, ou evitou regex por completo porque não havia como pré-visualizar o resultado, o Renym resolve os dois problemas de uma vez.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Baixe o Renym na Mac App Store</a></p>
`,
  },
  "mac-finder-rename-limitations": {
    slug: "mac-finder-rename-limitations",
    title: "A Renomeação do Finder no Mac É Limitada — Veja o Que Ela Não Faz",
    description: "A ferramenta de renomear do Finder dá conta do básico, mas assim que você precisa de regex, operações em várias etapas ou uma pré-visualização de verdade, ela não ajuda. Veja onde ela falha e o que usar no lugar.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>A Apple adicionou a renomeação em lote ao Finder há anos, e para tarefas simples ela funciona bem. Selecione os arquivos, clique com o botão direito, "Renomear X Itens", escolha uma opção, pronto. Mas se você já tentou fazer algo um pouco mais complexo — remover caracteres de uma posição específica, encadear duas operações de renomeação ou usar correspondência de padrões — você esbarrou no limite. A renomeação do Finder é uma ferramenta de entrada, e não evoluiu de forma significativa ao longo dos anos.</p>

<h2>O que a renomeação do Finder consegue fazer</h2>

<p>Para ser justo, o Finder cobre três operações básicas:</p>

<ul>
  <li><strong>Substituir Texto:</strong> localiza uma string e a substitui por outra. Funciona em todos os arquivos selecionados de uma vez.</li>
  <li><strong>Adicionar Texto:</strong> insere uma string no início ou no fim de cada nome de arquivo.</li>
  <li><strong>Formato:</strong> aplica numeração sequencial com um prefixo personalizado. Escolha um número inicial e um incremento.</li>
</ul>

<p>Para renomear "Relatório" para "Fatura" em dez arquivos, ou adicionar um prefixo de data, isso é perfeitamente adequado.</p>

<h2>Onde a renomeação do Finder falha</h2>

<h3>Nenhum suporte a regex ou correspondência de padrões</h3>
<p>A substituição do Finder funciona apenas com texto literal. Você não consegue localizar padrões como "qualquer dígito" ou "tudo depois do último sublinhado". Se os nomes dos seus arquivos variam em estrutura, o Finder não ajuda.</p>

<h3>Nenhuma operação em várias etapas</h3>
<p>Você tem apenas uma operação por renomeação. Se precisar substituir texto E adicionar um número E mudar a capitalização, terá que executar três operações de renomeação separadas, selecionando os arquivos a cada vez.</p>

<h3>Nenhuma pré-visualização de verdade</h3>
<p>O Finder mostra uma amostra do novo nome do primeiro arquivo na caixa de diálogo de renomeação, mas você não consegue ver a lista completa dos nomes de antes e depois. Para 200 arquivos, você está confiando que uma única amostra representa o lote inteiro.</p>

<h3>Nenhuma remoção de caracteres por posição</h3>
<p>Precisa remover os primeiros 4 caracteres de cada nome de arquivo? Ou os últimos 8? O Finder não tem operação para isso. Você teria que construir manualmente uma substituição, e mesmo assim só funcionaria se esses caracteres fossem idênticos em todos os arquivos.</p>

<h3>Nenhum desfazer para renomeações em lote</h3>
<p>Se você renomear 500 arquivos e o resultado sair errado, Command-Z desfaz — mas só imediatamente depois. Feche a janela do Finder ou faça outra operação, e o histórico de desfazer desaparece. Você fica corrigindo os nomes manualmente.</p>

<h2>O que usar no lugar</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> começa exatamente onde o Finder para. Ele oferece tudo o que o Finder tem — além de regex, remoção de caracteres por posição, mudanças de capitalização, pipelines em várias etapas e uma pré-visualização completa de antes e depois para cada arquivo do lote.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Pipeline visual de renomeação do Renym comparado às limitações do Finder" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Você monta um pipeline de ações de renomeação, reordena, pré-visualiza o resultado em cada arquivo e aplica quando estiver satisfeito. Se não estiver satisfeito, desfaz o lote inteiro e ajusta. Sem adivinhação, sem repetir seleções, sem torcer para que os 500 arquivos tenham saído certos.</p>

<p>A renomeação do Finder é boa para os 10% das tarefas de renomeação que são triviais. Para tudo o mais, você precisa de uma ferramenta de verdade.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Baixe o Renym na Mac App Store</a></p>
`,
  },
  "name-mangler-alternative-mac": {
    slug: "name-mangler-alternative-mac",
    title: "Alternativa ao Name Mangler para Mac",
    description: "Procurando um aplicativo de renomeação de arquivos que ofereça regex, numeração sequencial e pipelines em várias etapas sem a curva de aprendizado de ferramentas antigas? Aqui está uma opção moderna.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>O Name Mangler é, há anos, uma referência para renomeação de arquivos em lote no Mac. É poderoso, oferece suporte a regex e lida com cadeias complexas de renomeação. Mas também carrega o peso de um design que não evoluiu muito. Se você já experimentou o Name Mangler e achou que ele é mais complexo do que precisaria ser — ou se está procurando uma alternativa que pareça nativa do macOS atual — existe uma opção mais recente que vale a pena considerar.</p>

<h2>O que as pessoas gostam no Name Mangler</h2>

<p>O Name Mangler conquistou sua reputação por bons motivos:</p>

<ul>
  <li>Suporte a regex para renomeação baseada em padrões</li>
  <li>Cadeias de renomeação em várias etapas (chamadas de "droplets" e modo "avançado")</li>
  <li>Pré-visualização dos nomes de arquivo antes de aplicar</li>
  <li>Suporte a uma ampla gama de operações de renomeação</li>
</ul>

<p>Para usuários avançados que já aprenderam a interface, funciona bem. Mas muitos usuários relatam que a interface parece datada, que a curva de aprendizado é íngreme para algo que deveria ser simples, e que fluxos de trabalho básicos exigem mais cliques do que deveriam.</p>

<h2>O que procurar em uma alternativa</h2>

<p>Uma boa alternativa ao Name Mangler deve manter o poder — regex, pipelines em várias etapas, pré-visualização ao vivo — ao mesmo tempo em que torna a interface mais acessível. Especificamente:</p>

<ul>
  <li>Um construtor de pipeline visual onde você pode ver e reordenar as etapas</li>
  <li>Entrada de arquivos por arrastar e soltar, em vez de seleção via menus</li>
  <li>Pré-visualização em tempo real que se atualiza conforme você edita cada etapa</li>
  <li>Suporte completo a desfazer para toda a operação de renomeação</li>
  <li>Uma aparência nativa do macOS que não parece ter sido projetada há dez anos</li>
</ul>

<h2>Renym como alternativa</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> cobre o mesmo conjunto de funcionalidades essenciais do Name Mangler — localizar e substituir com regex, numeração sequencial, inserir e remover caracteres, mudanças de capitalização — mas envolve tudo isso em uma interface de pipeline visual.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym como alternativa ao Name Mangler no macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Pipeline visual</h3>
<p>Cada ação de renomeação é uma etapa visível em um pipeline. Arraste para reordenar, clique para editar, exclua para remover. Você vê a cadeia inteira de relance, sem precisar navegar por abas ou caixas de diálogo.</p>

<h3>Fluxo de trabalho por arrastar e soltar</h3>
<p>Arraste os arquivos diretamente para dentro do aplicativo. Sem caixas de diálogo de seleção de arquivos, sem navegação por menus. Solte uma pasta ou uma seleção de arquivos e comece a montar seu pipeline imediatamente.</p>

<h3>Pré-visualização ao vivo de antes e depois</h3>
<p>Cada arquivo mostra o nome atual e o novo nome lado a lado. As mudanças são atualizadas em tempo real conforme você edita qualquer etapa do pipeline. Você vê o resultado completo em cada arquivo, não apenas em uma amostra.</p>

<h3>Desfazer completo</h3>
<p>Aplicou uma renomeação e o resultado não ficou certo? Desfaça o lote inteiro e tente de novo. Sem precisar reverter manualmente 500 nomes de arquivo.</p>

<p>Se o Name Mangler sempre foi sua ferramenta de referência e você quer o mesmo poder com uma experiência mais limpa, vale a pena conhecer o Renym.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Baixe o Renym na Mac App Store</a></p>
`,
  },
  "rename-hundreds-of-files-mac": {
    slug: "rename-hundreds-of-files-mac",
    title: "Como Renomear Centenas de Arquivos de Uma Vez no Mac",
    description: "Renomear dez arquivos manualmente já é cansativo. Renomear centenas é impossível sem a ferramenta certa. O macOS tem opções nativas limitadas, e a abordagem via Terminal traz o risco de erros irreversíveis.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Você tem 600 arquivos despejados por um scanner, uma exportação, uma migração de dados ou uma entrega de cliente. Os nomes são um caos — strings aleatórias, prefixos duplicados, formatação inconsistente, extensões erradas. Você precisa que todos os 600 sejam renomeados para algo organizado, pesquisável e consistente. Agora mesmo.</p>

<p>Renomear dez arquivos manualmente leva um minuto. Renomear 600 consome o resto da sua tarde — e você vai cometer erros. Erros de digitação, arquivos esquecidos, formatação inconsistente. Quanto maior o lote, mais propensa a erros se torna a renomeação manual.</p>

<h2>Por que lotes grandes quebram as abordagens habituais</h2>

<h3>Finder</h3>
<p>A renomeação em lote do Finder lida bem com operações simples em qualquer quantidade de arquivos. Mas, para 600 arquivos, a falta de uma pré-visualização completa é um problema real. Você vê apenas um nome de exemplo na caixa de diálogo e espera que os outros 599 saiam certos. E, se não saírem, talvez você só perceba depois — quando o desfazer já não estiver mais disponível.</p>

<h3>Terminal</h3>
<p>Um loop em bash ou um comando <code>rename</code> pode processar 600 arquivos em segundos. Mas não há pré-visualização, não há desfazer, e um único erro no comando significa 600 nomes de arquivo estragados. O risco cresce junto com o tamanho do lote.</p>

<h3>Renomeação via planilha</h3>
<p>Algumas pessoas exportam os nomes dos arquivos para uma planilha, manipulam-nos com fórmulas e depois usam um script para aplicar os novos nomes. Isso funciona, mas exige uma quantidade absurda de preparação para algo que deveria ser uma simples operação de arrastar e soltar.</p>

<h2>Renomeando em grande escala com confiança</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> foi criado exatamente para esse cenário. Arraste centenas de arquivos, monte um pipeline de renomeação, veja a pré-visualização de cada resultado e aplique. Se o resultado estiver errado, desfaça e ajuste.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym renomeando centenas de arquivos de uma vez no macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Pré-visualização completa em qualquer escala</h3>
<p>Seja com 20 arquivos ou 2.000, a pré-visualização mostra o nome atual e o futuro de cada arquivo. Percorra a lista e confira antes de confirmar. Sem adivinhações.</p>

<h3>Pipelines de múltiplas etapas para renomeações complexas</h3>
<p>Lotes grandes costumam exigir várias operações: remover um prefixo, substituir caracteres, adicionar numeração, mudar a capitalização. Monte toda a sequência, veja a pré-visualização do resultado final e aplique tudo de uma vez.</p>

<h3>Desfaça o lote inteiro</h3>
<p>Aplicou a renomeação e percebeu um problema? O desfazer reverte todos os arquivos do lote. Ajuste o pipeline e tente de novo. Sem precisar reverter centenas de nomes manualmente.</p>

<p>Quanto maior o lote, mais uma ferramenta dedicada se paga. Gastar cinco minutos no Renym economiza horas de trabalho manual e elimina o risco de erros irreversíveis.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Baixe o Renym na Mac App Store</a></p>
`,
  },
  "sequential-numbering-files-mac": {
    slug: "sequential-numbering-files-mac",
    title: "Como Adicionar Números Sequenciais aos Nomes de Arquivos no Mac",
    description: "Arquivos que precisam manter uma ordem específica — slides, quadros, páginas, capítulos — só ficam classificados corretamente se tiverem números sequenciais com preenchimento consistente de zeros.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Você tem um conjunto de arquivos que precisa estar em uma ordem específica: slides de apresentação, quadros de animação, capítulos de livro, episódios de podcast ou páginas digitalizadas. A única forma confiável de mantê-los na ordem certa é adicionar números sequenciais aos nomes dos arquivos. Parece simples. Não é — pelo menos não sem a ferramenta certa.</p>

<h2>O problema do preenchimento com zeros</h2>

<p>Se você numerar os arquivos como 1, 2, 3 ... 10, 11, 12, o gerenciador de arquivos vai ordená-los assim:</p>

<ul>
  <li>1, 10, 11, 12, 2, 3, 4, 5, 6, 7, 8, 9</li>
</ul>

<p>Isso acontece porque a maioria dos sistemas de arquivos ordena em ordem alfabética, não numérica. "10" vem antes de "2" porque "1" vem antes de "2" na primeira posição do caractere. A solução é o preenchimento com zeros: 01, 02, 03 ... 10, 11, 12. Para conjuntos maiores, você precisa de mais dígitos: 001, 002, 003 ... 100, 101.</p>

<p>Acertar o preenchimento importa. Poucos dígitos e a ordenação quebra quando você adiciona mais arquivos. Dígitos demais e os nomes ficam poluídos visualmente. E você também precisa decidir se o número vai no início ou no final do nome do arquivo.</p>

<h2>O que o macOS oferece nativamente</h2>

<p>A opção de renomeação "Formato" do Finder pode adicionar números sequenciais com um prefixo de nome personalizado. Ela cuida do preenchimento com zeros e permite definir um número inicial. Para uma numeração simples, isso funciona.</p>

<p>Mas a numeração do Finder tem limitações:</p>

<ul>
  <li>Você só pode colocar o número no início ou no fim — não é possível inseri-lo em uma posição específica</li>
  <li>Não é possível combinar a numeração com outras operações, como substituição de texto</li>
  <li>A numeração substitui todo o nome do arquivo, exceto a extensão — você perde o nome original</li>
  <li>Não é possível controlar o valor do incremento (sempre aumenta de 1 em 1)</li>
</ul>

<h2>Numeração sequencial como parte de um pipeline</h2>

<p>O <a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> inclui a numeração sequencial como uma das várias ações que você pode adicionar a um pipeline de renomeação. Isso significa que você pode combinar a numeração com qualquer outra operação.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym adicionando números sequenciais aos nomes de arquivos no macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Mantenha o nome original e adicione um número</h3>
<p>Ao contrário do modo de formato do Finder, o Renym permite inserir um número sem apagar o nome do arquivo já existente. Adicione "001_" como prefixo mantendo "project_brief.pdf" intacto, resultando em "001_project_brief.pdf."</p>

<h3>Combine com outras ações</h3>
<p>Limpe o nome primeiro — remova prefixos indesejados, corrija a capitalização, substitua caracteres — e depois adicione a numeração como etapa final. A abordagem em pipeline significa que cada operação se baseia na anterior.</p>

<h3>Veja a pré-visualização da sequência</h3>
<p>Veja cada nome de arquivo numerado antes de aplicar. Confirme se o preenchimento está correto, se a sequência está certa e se os números aparecem onde você quer.</p>

<p>A numeração sequencial é uma daquelas tarefas que parecem triviais até você ter 200 arquivos e a ordem sair errada. Acertar na primeira tentativa poupa bastante trabalho de correção depois.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Baixe o Renym na Mac App Store</a></p>
`,
  },
  "remove-characters-from-filenames-mac": {
    slug: "remove-characters-from-filenames-mac",
    title: "Como Remover Caracteres de Nomes de Arquivos em Lote no Mac",
    description: "Nomes de arquivos cheios de caracteres extras, prefixos aleatórios ou sufixos indesejados são difíceis de pesquisar e organizar. Limpá-los um a um não é viável quando você tem dezenas ou centenas deles.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Arquivos exportados adoram acrescentar lixo aos nomes. Um scanner adiciona "Scan_" em tudo. Um CMS coloca um ID de 12 caracteres na frente. Um download acrescenta "(1)" porque o arquivo já existia. Um cliente envia arquivos com espaços, caracteres especiais e capitalização inconsistente, transformando sua pasta organizada em um caos.</p>

<p>Você precisa remover esses caracteres extras de dezenas ou centenas de arquivos. Fazer isso manualmente significa clicar, selecionar, apagar e pressionar Enter para cada arquivo, um por um. Isso não é um fluxo de trabalho — é um castigo.</p>

<h2>O que você não consegue fazer no Finder</h2>

<p>A ferramenta de renomeação do Finder permite localizar e substituir texto, o que resolve alguns casos de remoção de caracteres. Se todos os arquivos tiverem "Scan_" no início, você pode substituir "Scan_" por nada. Mas o Finder não consegue:</p>

<ul>
  <li>Remover caracteres por posição (por exemplo, "excluir os 5 primeiros caracteres")</li>
  <li>Remover caracteres a partir do final (por exemplo, "excluir tudo depois do último underscore")</li>
  <li>Remover caracteres que correspondam a um padrão (por exemplo, "excluir qualquer coisa entre parênteses, como (1), (2), (copy)")</li>
  <li>Encadear várias remoções em uma única operação</li>
</ul>

<p>Se os caracteres que você precisa remover não forem idênticos em todos os arquivos, a correspondência de texto literal do Finder não vai ajudar.</p>

<h2>Remoção de caracteres em lote com o Renym</h2>

<p>O <a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> oferece várias formas de remover caracteres dos nomes de arquivos, e você pode combiná-las em um único pipeline.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym removendo caracteres de nomes de arquivos em lote no macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Remover por posição</h3>
<p>Exclua os primeiros N ou os últimos N caracteres de cada nome de arquivo. Perfeito para remover prefixos ou sufixos de comprimento fixo, mesmo que o conteúdo varie.</p>

<h3>Remover por padrão</h3>
<p>Use expressões regulares (regex) para localizar e remover texto variável. Um padrão como <code>\\s*\\(\\d+\\)</code> remove todos os sufixos "(1)", "(2)", "(3)", independentemente do número. Um padrão como <code>^[A-Z]{3}_</code> remove qualquer prefixo de três letras seguido de um underscore.</p>

<h3>Remover por localizar e substituir</h3>
<p>Para casos simples, localize o texto indesejado e substitua-o por nada. Funciona bem para strings consistentes como "Copy of ", "Scan_" ou " - final".</p>

<h3>Encadeie remoções</h3>
<p>Precisa remover um prefixo E eliminar sufixos entre parênteses E limpar espaços duplos que sobraram? Adicione três ações ao pipeline. Cada uma opera sobre o resultado da etapa anterior, e a pré-visualização em tempo real mostra o resultado final de cada arquivo.</p>

<p>Nomes de arquivo devem ser limpos, consistentes e pesquisáveis. Se não forem, uma sessão de cinco minutos no Renym resolve o lote inteiro.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Baixe o Renym na Mac App Store</a></p>
`,
  },
  "change-file-extension-batch-mac": {
    slug: "change-file-extension-batch-mac",
    title: "Como Alterar Extensões de Arquivo em Lote no Mac",
    description: "Extensões de arquivo erradas quebram fluxos de trabalho, confundem aplicativos e fazem os arquivos abrirem no programa errado. Alterá-las uma a uma é cansativo. Fazer isso pelo Terminal traz o risco de erros, sem nenhuma pré-visualização.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Um desenvolvedor exporta 200 arquivos HTML com a extensão .txt. Um fotógrafo recebe arquivos RAW salvos como .jpg. Um pipeline de dados gera arquivos CSV sem nenhuma extensão. O conteúdo está correto — a extensão é que está errada. E uma extensão errada faz o arquivo abrir no aplicativo errado, ser filtrado de buscas ou quebrar um fluxo de trabalho automatizado.</p>

<p>Você precisa alterar a extensão de todos eles. Não um de cada vez. Todos de uma vez.</p>

<h2>A abordagem pelo Finder</h2>

<p>Tecnicamente, o Finder permite alterar extensões — mas apenas um arquivo por vez. Clique com o botão direito, "Obter informações", altere a extensão no campo do nome, confirme a caixa de diálogo que avisa sobre a mudança de extensão. Para 200 arquivos, isso leva um tempo absurdo.</p>

<p>A renomeação em lote do Finder consegue fazer uma substituição de texto, então você poderia substituir ".txt" por ".html" — mas isso é frágil. Se algum arquivo tiver ".txt" em outra parte do nome (como "notes_txt_backup.txt"), a substituição vai atingir a ocorrência errada. O Finder não distingue entre "a extensão" e "texto que por acaso coincide".</p>

<h2>A abordagem pelo Terminal</h2>

<p>Um comando simples em bash resolve isso:</p>

<p><code>for f in *.txt; do mv "$f" "\\\${f%.txt}.html"; done</code></p>

<p>Rápido e eficaz — mas sem pré-visualização, sem desfazer, e um único erro no comando significa 200 arquivos com nomes bagunçados. Se você esquecer as aspas e um nome de arquivo tiver espaços, o resultado é imprevisível.</p>

<h2>Alteração de extensões em lote com pré-visualização</h2>

<p>O <a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> trata as alterações de extensão como parte do seu pipeline de renomeação. Você pode direcionar especificamente a extensão, sem afetar o restante do nome do arquivo.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym alterando extensões de arquivo em lote no macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Substitua a extensão com segurança</h3>
<p>Use localizar e substituir com uma regex ancorada ao final do nome para alterar apenas a extensão, sem afetar texto semelhante dentro do próprio nome do arquivo. A pré-visualização mostra exatamente o que vai mudar em cada arquivo antes de você aplicar.</p>

<h3>Adicione uma extensão ausente</h3>
<p>Arquivos sem extensão? Acrescente ".csv", ".json" ou o que for a extensão correta. A ação de inserir adiciona texto ao final do nome do arquivo, depois do último caractere.</p>

<h3>Combine com outras limpezas</h3>
<p>Muitas vezes, problemas de extensão vêm acompanhados de outros problemas no nome. Corrija a extensão e limpe o nome do arquivo no mesmo pipeline — remova prefixos, normalize a capitalização, adicione numeração — tudo em uma única passada.</p>

<h3>Desfaça se necessário</h3>
<p>Alterou 200 extensões e percebeu que escolheu a errada? Desfaça o lote inteiro. Ajuste o pipeline e aplique novamente. Sem precisar renomear manualmente 200 arquivos de volta às extensões originais.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Baixe o Renym na Mac App Store</a></p>
`,
  },
  "rename-files-drag-drop-mac": {
    slug: "rename-files-drag-drop-mac",
    title: "Renomeie Arquivos com Arrastar e Soltar no Mac",
    description: "A maioria das ferramentas de renomeação obriga você a navegar até os arquivos por meio de um seletor de arquivos. Se você já tem os arquivos abertos em uma janela do Finder, deveria conseguir simplesmente arrastá-los direto para a ferramenta de renomeação.",
    date: "2026-09-06",
    readTime: "3 min de leitura",
    content: `
<p>Você tem uma janela do Finder aberta com os arquivos que precisa renomear. Você sabe exatamente quais são. Agora precisa levá-los até uma ferramenta de renomeação. Se essa ferramenta obrigar você a passar por uma caixa de diálogo de seleção de arquivos — navegar até a pasta, selecionar os arquivos de novo, clicar em Abrir — você está fazendo o dobro do trabalho sem necessidade.</p>

<p>Arrastar e soltar é a forma mais rápida de levar arquivos para qualquer ferramenta. Selecione no Finder, arraste até o aplicativo, solte. Os arquivos são carregados e você já pode começar a renomear. Parece óbvio, mas nem toda ferramenta de renomeação lida bem com isso.</p>

<h2>Por que arrastar e soltar faz diferença na renomeação</h2>

<p>A renomeação em lote já é uma tarefa que você quer terminar o mais rápido possível. Cada etapa extra — abrir um seletor de arquivos, navegar por diretórios, selecionar de novo arquivos que você já tinha selecionado — gera atrito. Arrastar e soltar elimina esse atrito por completo.</p>

<p>Isso também permite ser seletivo. Talvez você não queira todos os arquivos da pasta — apenas os 30 que selecionou no Finder. Arraste esses 30. Sem necessidade de filtrar dentro da ferramenta de renomeação.</p>

<h2>Como o Renym lida com arrastar e soltar</h2>

<p>O <a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> foi criado em torno de um fluxo de trabalho de arrastar e soltar. Selecione os arquivos no Finder, arraste-os para a janela do aplicativo, e eles aparecem imediatamente na lista de arquivos. A partir daí, você monta o pipeline de renomeação e vê a pré-visualização dos resultados.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym renomeando arquivos com arrastar e soltar no macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Solte arquivos de qualquer lugar</h3>
<p>Arraste arquivos de qualquer janela do Finder, da área de trabalho ou até de outro aplicativo que ofereça suporte a arrastar referências de arquivo. O Renym aceita todos eles.</p>

<h3>Adicione mais arquivos a qualquer momento</h3>
<p>Já carregou um lote, mas percebeu que esqueceu alguns arquivos? Arraste mais. Eles são adicionados à lista existente, sem apagar o que você já tinha.</p>

<h3>Pré-visualize antes de aplicar</h3>
<p>Assim que os arquivos são soltos, cada ação de renomeação que você adiciona mostra uma pré-visualização em tempo real. O nome original fica ao lado do novo nome, para cada arquivo. Percorra a lista, confira e aplique quando estiver seguro.</p>

<h3>O fluxo de trabalho completo</h3>
<ol>
  <li>Selecione os arquivos no Finder</li>
  <li>Arraste-os para o Renym</li>
  <li>Adicione ações de renomeação (localizar/substituir, numeração, mudança de capitalização etc.)</li>
  <li>Revise a pré-visualização de antes e depois</li>
  <li>Clique em aplicar</li>
</ol>

<p>Cinco etapas, sem seletores de arquivo, sem caixas de diálogo, sem precisar navegar de novo. Só arquivos entrando e nomes saindo.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Baixe o Renym na Mac App Store</a></p>
`,
  },
  "photographer-file-naming-mac": {
    slug: "photographer-file-naming-mac",
    title: "Nomenclatura de Arquivos para Fotógrafos no Mac — Automatize o Seu Fluxo de Trabalho",
    description: "Um sistema de nomenclatura de arquivos consistente economiza horas de busca e evita a perda de imagens. Nomes gerados pela câmera, como IMG_4872, não dizem nada sobre a sessão, o cliente ou a data.",
    date: "2026-09-06",
    readTime: "5 min de leitura",
    content: `
<p>Todo fotógrafo profissional já passou por isso: você abre uma pasta com 800 imagens nomeadas de IMG_4001 a IMG_4800 e tenta encontrar as fotos da cerimônia dos Johnson. Ou junta dois cartões de memória e descobre que ambos têm arquivos começando em DSC_0001. Ou um cliente pede o "retrato do vestido azul na recepção" e você não tem como procurá-lo, porque cada arquivo é apenas um número sem sentido.</p>

<p>Um sistema de nomenclatura de arquivos consistente não é opcional — é a diferença entre um arquivo pesquisável e um cemitério de números aleatórios. O problema é que renomear 800 arquivos manualmente depois de cada sessão não é realista. É preciso automação.</p>

<h2>Como é um bom sistema de nomenclatura</h2>

<p>A maioria dos fotógrafos profissionais acaba adotando alguma variação deste padrão:</p>

<p><code>[Date]_[Client/Project]_[Sequence].[ext]</code></p>

<p>Por exemplo: <code>2026-09-06_Johnson_Wedding_001.jpg</code></p>

<p>Isso oferece:</p>

<ul>
  <li><strong>Ordenação cronológica</strong> — arquivos de sessões diferentes são organizados por data automaticamente</li>
  <li><strong>Facilidade de busca</strong> — pesquise "Johnson" e encontre todas as imagens daquele cliente</li>
  <li><strong>Sem colisões</strong> — duas sessões em datas diferentes nunca terão nomes de arquivo sobrepostos</li>
  <li><strong>Ordem de classificação correta</strong> — números com zeros à esquerda (001, 002) são ordenados corretamente, ao contrário de 1, 10, 11, 2</li>
</ul>

<h2>Por que a nomenclatura do Lightroom e do Capture One nem sempre é suficiente</h2>

<p>Tanto o Lightroom quanto o Capture One oferecem renomeação de arquivos na importação. Para fotógrafos que trabalham exclusivamente com uma dessas ferramentas, a renomeação na importação cobre o básico. Mas há situações comuns em que isso não é suficiente:</p>

<ul>
  <li>Você precisa renomear arquivos que já foram importados sem renomeação</li>
  <li>Você trabalha com várias ferramentas e precisa de uma nomenclatura consistente fora de um único catálogo</li>
  <li>Você precisa renomear os entregáveis — JPEGs exportados, não apenas arquivos RAW</li>
  <li>Um cliente devolve arquivos com sua própria nomenclatura e você precisa padronizá-los</li>
  <li>Você está juntando arquivos de câmeras, sistemas ou anos diferentes</li>
</ul>

<p>Nesses casos, você precisa de uma ferramenta de renomeação independente, que funcione com qualquer arquivo, seja qual for o aplicativo que os gerencia.</p>

<h2>Criando um pipeline de nomenclatura para fotógrafos</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> permite criar um pipeline reutilizável para a sua convenção de nomenclatura. Configure uma vez e aplique a cada sessão.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Pipeline de nomenclatura de arquivos para fotógrafos no Renym, no macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Passo 1: Remova o prefixo da câmera</h3>
<p>Remova IMG_, DSC_, P10 ou o que quer que a sua câmera gere. Uma ação de localizar e substituir resolve isso em uma única etapa, ou use uma expressão regular para identificar qualquer padrão de prefixo de câmera.</p>

<h3>Passo 2: Adicione a sua estrutura de nomenclatura</h3>
<p>Insira a data e o nome do cliente ou projeto. Essa parte do nome do arquivo passa a ser pesquisável e fácil de entender.</p>

<h3>Passo 3: Adicione numeração sequencial</h3>
<p>Acrescente números com zeros à esquerda para que os arquivos sejam ordenados na sequência em que foram fotografados. Escolha a quantidade de dígitos com base no tamanho típico das suas sessões — três dígitos para sessões com menos de 1.000 imagens, quatro para conjuntos maiores.</p>

<h3>Passo 4: Visualize e aplique</h3>
<p>Percorra a lista completa com os nomes antes e depois. Confira se a sequência está correta, se o preenchimento com zeros está certo e se a nomenclatura é consistente. Depois, aplique a tudo de uma vez.</p>

<h3>Renomeação de entregáveis</h3>
<p>Ao exportar os JPEGs finais para um cliente, eles costumam precisar de nomes diferentes dos seus arquivos de trabalho. Crie um pipeline separado para os entregáveis: por exemplo, "Johnson_Wedding_Web_001.jpg" para arquivos de redes sociais e "Johnson_Wedding_Print_001.tif" para arquivos de impressão.</p>

<p>Um sistema de nomenclatura só é útil se você realmente o aplicar de forma consistente. Automatizar o processo garante que ele aconteça sempre, em cada sessão, sem a tentação de pular a etapa por estar cansado depois de um casamento de 10 horas.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Obtenha o Renym na Mac App Store</a></p>
`,
  },
  "rename-files-lowercase-mac": {
    slug: "rename-files-lowercase-mac",
    title: "Renomear Arquivos para Letras Minúsculas no Mac",
    description: "Nomes de arquivo com letras maiúsculas e minúsculas misturadas quebram links, causam envios duplicados e parecem inconsistentes em uma pasta compartilhada. Converter um lote inteiro para minúsculas manualmente não vale o tempo de ninguém.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Você herdou uma pasta em que metade dos arquivos é "Report.PDF", um quarto é "report.pdf" e o restante é "REPORT.pdf". No Mac, o sistema de arquivos geralmente trata esses nomes como o mesmo arquivo quando estão na mesma pasta — mas, no momento em que você os envia para um servidor sensível a maiúsculas e minúsculas, os sincroniza com uma máquina Linux ou os referencia em código, essa inconsistência causa problemas reais. Links quebrados, envios duplicados e caminhos de arquivo que só funcionam na sua máquina são sintomas comuns.</p>

<p>A solução é simples em teoria: deixar todos os nomes de arquivo em letras minúsculas. O problema é fazer isso em dezenas ou centenas de arquivos sem precisar renomear cada um individualmente.</p>

<h2>O Finder não tem opção de conversão de maiúsculas/minúsculas</h2>

<p>Essa é uma das lacunas mais surpreendentes da ferramenta de renomeação em lote do Finder. Você tem as opções Substituir Texto, Adicionar Texto e Formato — nenhuma delas mexe na caixa das letras. Se você quiser que "Report.PDF" vire "report.pdf", o Finder simplesmente não oferece um caminho para fazer isso em massa. Seria preciso digitar novamente cada nome à mão, o que anula completamente o propósito do processamento em lote.</p>

<h2>Conversão de maiúsculas/minúsculas como etapa de um pipeline</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> inclui uma ação dedicada de alteração de caixa que converte nomes de arquivo para minúsculas, maiúsculas, iniciais maiúsculas (title case) ou estilo de frase em todo um lote, em uma única etapa.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym convertendo nomes de arquivo para minúsculas no macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Deixe tudo em minúsculas, incluindo a extensão</h3>
<p>Converta "Report.PDF" em "report.pdf" em uma única ação. A alteração de caixa se aplica ao nome completo do arquivo, então você não fica com um nome em minúsculas e uma extensão em maiúsculas sobrando.</p>

<h3>Combine com outras etapas de limpeza</h3>
<p>A inconsistência de caixa raramente aparece sozinha. Encadeie uma conversão para minúsculas com a substituição de espaços por hífens ou uma etapa de remoção de caracteres, e resolva tudo em uma única passagem, em vez de usar ferramentas separadas para cada problema.</p>

<h3>Visualize antes de confirmar</h3>
<p>Veja o resultado em minúsculas de cada arquivo do lote antes de aplicar. Se um arquivo já estiver correto, simplesmente não aparece nenhuma alteração — nada é modificado desnecessariamente.</p>

<p>A consistência entre maiúsculas e minúsculas é um detalhe pequeno até quebrar um envio para a web ou causar arquivos duplicados em um sistema sensível a maiúsculas e minúsculas. Corrigir isso em toda uma pasta exige apenas uma etapa do pipeline.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Obtenha o Renym na Mac App Store</a></p>
`,
  },
  "add-date-to-filename-mac": {
    slug: "add-date-to-filename-mac",
    title: "Adicionar a Data aos Nomes de Arquivo no Mac",
    description: "Arquivos sem data no nome são difíceis de ordenar cronologicamente e impossíveis de diferenciar quando várias versões compartilham o mesmo nome-base. Adicionar datas a uma pasta inteira manualmente é lento e sujeito a erros.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Você tem uma pasta de faturas, relatórios ou exportações, e nenhum deles tem uma data no nome. Ordenar por "data de modificação" no Finder funciona até você copiar os arquivos para outro lugar e a data de modificação ser redefinida, ou até alguém enviar a pasta por e-mail e as datas deixarem de refletir quando os arquivos foram realmente criados. A única solução confiável é colocar a data diretamente no nome do arquivo.</p>

<p>Fazer isso para um único arquivo leva alguns segundos. Fazer isso para oitenta arquivos, cada um com uma data de criação diferente, não é algo que você queira fazer redigitando os nomes um a um.</p>

<h2>Por que o Finder não ajuda nesse caso</h2>

<p>A renomeação em lote do Finder consegue adicionar texto a um nome de arquivo, mas adiciona o mesmo texto fixo a todos os arquivos selecionados. Não há como inserir automaticamente a data real de criação ou modificação de cada arquivo — o Finder não tem o conceito de valores dinâmicos por arquivo na sua caixa de diálogo de renomeação. Se todos os seus arquivos compartilham a mesma data, você pode digitá-la manualmente e adicioná-la como prefixo. Se as datas variam entre os arquivos do lote, o Finder simplesmente não ajuda.</p>

<h2>Inserindo datas como parte de um pipeline</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> permite inserir uma data fixa como prefixo ou sufixo em todo um lote — útil para marcar uma exportação ou entrega inteira com o dia em que foi processada.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym adicionando uma data aos nomes de arquivo no macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Marque uma entrega inteira de uma só vez</h3>
<p>Recebeu hoje um lote de arquivos que precisa diferenciar do lote de amanhã? Adicione "2026-09-06_" como prefixo em todos os arquivos em uma única etapa. Daqui a seis meses, a pasta mostrará exatamente quando cada conjunto chegou.</p>

<h3>Combine com numeração sequencial</h3>
<p>Adicione a data como prefixo e, em seguida, acrescente uma numeração sequencial logo depois: "2026-09-06_001.pdf", "2026-09-06_002.pdf". Isso mantém os arquivos agrupados por data e ordenados corretamente dentro de cada grupo.</p>

<h3>Mantenha o restante do nome intacto</h3>
<p>Insira a data sem alterar a parte descritiva do nome do arquivo. "invoice_client_a.pdf" se torna "2026-09-06_invoice_client_a.pdf" — continua legível, e agora também pode ser ordenado por data.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Obtenha o Renym na Mac App Store</a></p>
`,
  },
  "remove-spaces-from-filenames-mac": {
    slug: "remove-spaces-from-filenames-mac",
    title: "Remover Espaços dos Nomes de Arquivo no Mac",
    description: "Espaços nos nomes de arquivo causam problemas em comandos do Terminal, URLs e scripts que não foram feitos para lidar com eles. Limpar uma pasta inteira arquivo por arquivo não é um bom uso de uma tarde.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Espaços nos nomes de arquivo parecem inofensivos no Finder, mas causam problemas em praticamente todo o resto. Um comando do Terminal falha, a menos que você se lembre de colocar o caminho entre aspas. Uma URL transforma o espaço em "%20", o que torna os links mais difíceis de ler e, às vezes, os quebra completamente. Um script escrito sem levar espaços em conta falha silenciosamente ou divide o nome do arquivo em partes que não deveriam ser separadas.</p>

<p>A solução mais comum é substituir cada espaço por um sublinhado ou um hífen, ou remover os espaços por completo. Simples na teoria. Tedioso na prática quando você tem uma pasta com oitenta arquivos chamados "Final Report March 2026.pdf".</p>

<h2>O que a substituição do Finder consegue e não consegue fazer</h2>

<p>A renomeação em lote do Finder realmente oferece uma função de localizar e substituir literal, então substituir todos os espaços por um hífen é tecnicamente possível — basta procurar por um espaço e substituir por "-". Isso funciona em casos simples. Mas não é suficiente quando:</p>

<ul>
  <li>Você precisa remover os espaços por completo, transformando "Final Report" em "FinalReport" — o que uma única substituição resolve bem, mas combinar isso com outras limpezas (como corrigir espaços duplos) exige várias passagens</li>
  <li>Você quer que os espaços sejam removidos, mas que a extensão do arquivo seja preservada exatamente como está</li>
  <li>Você precisa disso como parte de uma limpeza maior que também corrige a caixa das letras ou remove outros caracteres</li>
</ul>

<h2>Remoção de espaços como uma etapa do pipeline</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> trata a remoção de espaços por meio de localizar e substituir, e permite encadear essa ação com todas as outras etapas de limpeza que você precisar, na mesma passagem.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym removendo espaços dos nomes de arquivo no macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Substitua espaços por hífens ou sublinhados</h3>
<p>Procure por um espaço e substitua por "-" ou "_". Todos os arquivos do lote recebem o mesmo tratamento de uma vez, e a pré-visualização mostra o resultado exato antes de você aplicar qualquer coisa.</p>

<h3>Remova os espaços por completo</h3>
<p>Se você quiser que "Final Report.pdf" se torne "FinalReport.pdf", sem nenhum separador, substitua o espaço por nada. Uma ação, o lote inteiro.</p>

<h3>Corrija espaços duplos ou sobras indesejadas</h3>
<p>Depois de remover certas palavras ou prefixos, os arquivos às vezes acabam com espaços duplos ou lacunas estranhas. Adicione uma etapa com expressão regular, como <code>\\s+</code> substituída por um único espaço ou hífen, para corrigir isso no mesmo pipeline.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Obtenha o Renym na Mac App Store</a></p>
`,
  },
  "rename-files-for-web-mac": {
    slug: "rename-files-for-web-mac",
    title: "Renomear Arquivos para Envio à Web no Mac — Crie Slugs em Lote",
    description: "Arquivos com espaços, letras maiúsculas e caracteres especiais causam links quebrados e URLs bagunçadas depois de enviados para um site. Converter um lote inteiro em nomes limpos e seguros para a web manualmente não é escalável.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Você está prestes a enviar um lote de imagens ou documentos para um site, um CMS ou um gerador de sites estáticos. Os arquivos têm nomes como "Product Photo (Final) 2.jpg" e "Blog Header — Draft.png". Se você os enviar assim, vai acabar com URLs feias, cheias de espaços e caracteres especiais codificados, ou, pior ainda, com um CMS que rejeita o envio de cara por causa de caracteres não suportados.</p>

<p>O que você realmente quer é um "slug" — em minúsculas, separado por hífens, sem caracteres especiais: "product-photo-final-2.jpg". Fazer essa conversão manualmente para alguns poucos arquivos é viável. Para um lote de cinquenta imagens indo para um site novo, não é.</p>

<h2>Por que o Finder não consegue transformar nomes de arquivo em slugs</h2>

<p>Transformar em slug envolve várias mudanças ao mesmo tempo: conversão para minúsculas, remoção de pontuação como parênteses e travessões, e conversão de espaços em hífens. A ferramenta de renomeação do Finder consegue fazer exatamente uma dessas coisas — substituição literal de texto — e não consegue converter texto para minúsculas nem remover diversos caracteres especiais em uma única passagem. Seria necessário fazer várias rodadas manuais de renomeação, e mesmo assim o Finder continua sem conseguir mexer na caixa das letras.</p>

<h2>Transformando um lote em slugs com um pipeline</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> faz essa transformação em slugs encadeando exatamente as etapas necessárias: conversão de caixa, remoção de caracteres e substituição de espaços por hífens, tudo em um único pipeline aplicado ao lote inteiro.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym transformando nomes de arquivo em slugs para upload na web no macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Passo 1: Remova caracteres especiais</h3>
<p>Use uma expressão regular para remover parênteses, travessões e outras pontuações que não deveriam aparecer em uma URL. Um padrão que identifique qualquer coisa fora de letras, números, espaços e hífens resolve isso em uma única etapa.</p>

<h3>Passo 2: Converta espaços em hífens</h3>
<p>Localize e substitua todos os espaços por um hífen, seguindo as convenções padrão de slugs na web.</p>

<h3>Passo 3: Deixe tudo em minúsculas</h3>
<p>Aplique uma conversão para minúsculas como etapa final, para que "Product-Photo-Final-2.jpg" se torne "product-photo-final-2.jpg" — limpo, previsível e seguro para qualquer estrutura de URL.</p>

<p>Configure esse pipeline uma vez e reutilize-o para todos os lotes de arquivos que você enviar dali em diante.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Obtenha o Renym na Mac App Store</a></p>
`,
  },
  "a-better-rename-alternative-mac": {
    slug: "a-better-rename-alternative-mac",
    title: "Uma Alternativa Melhor para Renomear Arquivos em Lote no Mac",
    description: "O A Better Finder Rename é há muito tempo uma opção para renomear arquivos em lote no Mac, mas sua interface densa e cheia de caixas de diálogo não agrada a todos. Veja o que procurar se você quiser o mesmo poder com menos complicação.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>O A Better Finder Rename existe há tempo suficiente para se tornar a recomendação padrão sempre que alguém pergunta como renomear arquivos em lote no Mac. É um aplicativo capaz — regex, múltiplas ações de renomeação, predefinições — e conquistou seu lugar. Mas "capaz" e "agradável de usar" não são a mesma coisa, e muitos usuários o abrem, veem a densa lista de abas e opções e sentem imediatamente que precisam de um manual só para mudar a extensão de um arquivo.</p>

<h2>Por que as pessoas procuram alternativas</h2>

<p>As reclamações costumam se repetir em avaliações e fóruns:</p>

<ul>
  <li>A interface depende fortemente de menus suspensos e painéis de opções densos, em vez de um layout visual</li>
  <li>Criar uma renomeação em várias etapas significa configurar diversas abas, em vez de empilhar visivelmente etapas que você pode ver e reordenar</li>
  <li>O design não é significativamente modernizado há anos, o que faz tarefas simples parecerem mais técnicas do que precisariam ser</li>
  <li>Novos usuários geralmente precisam de um tutorial antes de conseguir renomear seu primeiro lote com confiança</li>
</ul>

<p>Nada disso significa que o aplicativo não funcione — ele funciona. Mas se você renomeia arquivos ocasionalmente, e não como parte central do seu trabalho, a curva de aprendizado pode parecer desproporcional à tarefa.</p>

<h2>Como é uma alternativa mais fluida</h2>

<p>O <a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> cobre o mesmo terreno — buscar e substituir com regex, numeração sequencial, inserir e remover, mudanças de maiúsculas/minúsculas — por meio de um pipeline visual que você constrói adicionando etapas, em vez de configurar ajustes em várias abas.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym como alternativa de renomeação em lote no macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Veja suas etapas, não apenas configurações</h3>
<p>Cada ação de renomeação aparece como um bloco visível no pipeline. Você pode olhar a sequência e entender imediatamente o que vai acontecer, sem precisar abrir um painel de configurações para conferir.</p>

<h3>Arraste arquivos diretamente</h3>
<p>Sem caixa de diálogo de seleção de arquivos para navegar. Arraste arquivos do Finder direto para o aplicativo e comece a montar seu pipeline.</p>

<h3>Pré-visualização e desfazer, sempre disponíveis</h3>
<p>Cada arquivo mostra seu nome atual e futuro antes de você confirmar, e um desfazer completo está disponível caso o resultado não seja o esperado.</p>

<p>Se você já usou o A Better Finder Rename e achou que dava mais trabalho do que a tarefa merecia, vale a pena experimentar esta alternativa.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Baixe o Renym na Mac App Store</a></p>
`,
  },
  "rename-screenshots-mac": {
    slug: "rename-screenshots-mac",
    title: "Como Renomear Capturas de Tela no Mac — Remova o Prefixo \"Screenshot\"",
    description: "O macOS nomeia cada captura de tela como \"Screenshot 2026-09-06 at 3.42.17 PM.png\", o que é preciso, mas desajeitado. Organizar uma pasta cheia delas arquivo por arquivo desperdiça um tempo que você não tem.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Toda captura de tela que você tira no Mac recebe o mesmo tratamento: "Screenshot 2026-09-06 at 3.42.17 PM.png". É tecnicamente informativo, mas é longo, repetitivo em todos os arquivos e incômodo de referenciar em um relatório, um chamado ou uma pasta compartilhada. Se você acumulou cinquenta capturas de tela para um relatório de bug, um tutorial ou uma revisão de design, renomear cada uma manualmente para algo como "step-01.png" é exatamente o tipo de tarefa que consome uma tarde inteira sem necessidade.</p>

<h2>Por que o nome padrão é difícil de usar</h2>

<p>O formato "Screenshot [data] at [hora]" foi criado para garantir exclusividade, não legibilidade. Todo arquivo começa com os mesmos 11 caracteres, o que significa:</p>

<ul>
  <li>Ordenar por nome apenas organiza pela hora em que a captura foi feita, não pela relevância ou pelo conteúdo</li>
  <li>Os nomes são longos demais para ler confortavelmente em uma lista de arquivos ou em um link compartilhado</li>
  <li>Não dá para saber o que uma captura de tela mostra sem abri-la</li>
  <li>A renomeação em lote do Finder consegue remover a palavra "Screenshot", mas ainda deixa a bagunça do timestamp, a menos que você crie uma substituição mais específica</li>
</ul>

<h2>Organizando uma pasta de capturas de tela</h2>

<p>O <a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> resolve essa organização em algumas etapas do pipeline, seja você quem quer um nome totalmente personalizado ou apenas uma versão mais curta do original.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym renomeando um lote de capturas de tela no Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Remova todo o prefixo padrão</h3>
<p>Use regex para identificar e remover todo o padrão "Screenshot [data] at [hora]" em uma única etapa, deixando você com uma folha em branco para adicionar sua própria nomenclatura.</p>

<h3>Insira um nome descritivo e uma sequência</h3>
<p>Adicione um prefixo personalizado como "bug-report_" ou "onboarding-flow_" seguido de numeração sequencial, de modo que suas cinquenta capturas de tela se tornem "bug-report_001.png" até "bug-report_050.png", organizadas na ordem em que foram tiradas.</p>

<h3>Mantenha simples quando só precisar de nomes mais curtos</h3>
<p>Se você não precisa de nomes personalizados, basta remover "Screenshot " e encurtar o timestamp com uma substituição de regex específica, mantendo informação suficiente para saber aproximadamente quando cada captura foi feita, sem toda a bagunça.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Baixe o Renym na Mac App Store</a></p>
`,
  },
  "bulk-rename-utility-mac": {
    slug: "bulk-rename-utility-mac",
    title: "Melhor Utilitário de Renomeação em Lote para Mac",
    description: "Existem alguns aplicativos dedicados à renomeação em lote para Mac, cada um com um equilíbrio diferente entre poder e simplicidade. Veja o que realmente comparar antes de escolher um.",
    date: "2026-09-06",
    readTime: "5 min de leitura",
    content: `
<p>Pesquise por "utilitário de renomeação em lote para Mac" e você vai encontrar uma mistura de guias antigos baseados no Terminal, alguns aplicativos pagos com interfaces de dez anos atrás e a opção integrada do Finder, que só vai até certo ponto. Escolher o certo depende menos de qual aplicativo tem a lista de recursos mais longa e mais de como são, na prática, suas tarefas de renomeação semana após semana.</p>

<h2>O que realmente avaliar</h2>

<p>A maioria das discussões sobre renomeação em lote foca em listas de recursos — se suporta regex, se faz numeração sequencial, se lida com mudanças de maiúsculas/minúsculas. Isso importa, mas deixa de lado as perguntas práticas que determinam se você realmente vai gostar de usar a ferramenta:</p>

<ul>
  <li><strong>Dá para ver o resultado antes de confirmar?</strong> Uma ferramenta sem pré-visualização em tempo real transforma cada renomeação em uma pequena aposta.</li>
  <li><strong>Dá para desfazer um erro?</strong> Operações em lote com centenas de arquivos precisam de uma rede de segurança.</li>
  <li><strong>Quantas etapas são necessárias para combinar operações?</strong> Na prática, renomear raramente exige apenas uma transformação.</li>
  <li><strong>Dá para arrastar arquivos, ou é preciso usar um seletor de arquivos toda vez?</strong></li>
</ul>

<p>O Finder cobre o básico, mas falha completamente nos dois primeiros pontos — sem pré-visualização completa, sem um desfazer duradouro. Abordagens baseadas no Terminal falham nos quatro, a menos que você se sinta à vontade escrevendo scripts. Aplicativos dedicados mais antigos costumam marcar todas as caixas no papel, mas enterram o fluxo de trabalho em menus densos.</p>

<h2>Uma abordagem visual para renomeação em lote</h2>

<p>O <a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> foi criado em torno de responder bem a essas quatro perguntas: um pipeline visual de ações empilhadas, uma pré-visualização de antes e depois em tempo real para cada arquivo, desfazer completo e entrada por arrastar e soltar.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym, utilitário de renomeação em lote para macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Cada ação é visível e pode ser reordenada</h3>
<p>Buscar/substituir, regex, numeração sequencial, inserir, remover e mudanças de maiúsculas/minúsculas estão todos disponíveis como etapas do pipeline que você pode empilhar, reordenar e editar individualmente.</p>

<h3>A pré-visualização acompanha o tamanho do seu lote</h3>
<p>Seja renomeando dez arquivos ou mil, a lista de pré-visualização mostra o nome atual e o futuro de cada um deles, não apenas de uma amostra.</p>

<h3>Erros são reversíveis</h3>
<p>Aplicou uma renomeação que não saiu como esperado? O desfazer reverte o lote inteiro para que você possa ajustar o pipeline e tentar novamente, em vez de corrigir os arquivos manualmente um a um.</p>

<p>O melhor utilitário de renomeação em lote é aquele que permite confiar no resultado antes de você se comprometer com ele. Esse é o critério que vale a pena usar para julgar qualquer ferramenta.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Baixe o Renym na Mac App Store</a></p>
`,
  },
  "rename-video-files-mac": {
    slug: "rename-video-files-mac",
    title: "Como Renomear Arquivos de Vídeo em Lote no Mac",
    description: "Arquivos de vídeo exportados de uma câmera, gravador de tela ou aplicativo de edição raramente têm nomes úteis. Vasculhar uma pasta de clipes nomeados apenas por timestamp torna a edição e o arquivamento mais difíceis do que precisariam ser.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Uma câmera ou drone exporta clipes chamados "DJI_0001.MP4", "DJI_0002.MP4" e assim por diante. Um gravador de tela nomeia os arquivos com o segundo exato em que você começou a gravar. Um aplicativo de edição exporta renders com um genérico "Sequence_01.mov" que não diz nada sobre o projeto. Quando você gerencia material de várias gravações, projetos ou clientes, esses nomes padrão transformam uma simples navegação por pasta em um jogo de adivinhação, no qual é preciso abrir vários clipes só para encontrar o que você precisa.</p>

<h2>Desafios específicos da renomeação de vídeos</h2>

<p>Arquivos de vídeo trazem algumas particularidades que tornam a renomeação em lote ligeiramente diferente de renomear fotos ou documentos:</p>

<ul>
  <li>Extensões misturadas na mesma gravação (MP4, MOV, MTS) que precisam de uma nomenclatura consistente sem quebrar a extensão</li>
  <li>Múltiplos ângulos de câmera ou takes que precisam permanecer agrupados e ordenados corretamente</li>
  <li>Nomes originais longos vindos de exportações de softwares de edição, que precisam ser encurtados sem perder as partes relevantes</li>
  <li>A ferramenta de renomeação do Finder não oferece nenhuma forma de lidar com essas variações em uma única passagem</li>
</ul>

<h2>Um pipeline para renomear material bruto</h2>

<p>O <a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> lida com lotes de vídeo da mesma forma que lida com qualquer tipo de arquivo — por meio de um pipeline visual — preservando a extensão que cada arquivo já tem.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym renomeando arquivos de vídeo em lote no macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Remova prefixos de câmera ou software</h3>
<p>Remova "DJI_", "GH0" ou qualquer prefixo genérico que sua câmera ou gravador adicione, em todos os clipes, independentemente da extensão.</p>

<h3>Adicione estrutura de projeto e take</h3>
<p>Insira um nome de projeto e números sequenciais de take para que "Scene_02_Take_03.mov" substitua um número de clipe sem sentido, mantendo o material organizado por cena e take quando você chegar à linha do tempo de edição.</p>

<h3>Misture extensões sem quebrar nada</h3>
<p>Carregue arquivos MP4, MOV e MTS da mesma gravação em um único lote. As ações de renomeação se aplicam apenas à parte do nome, então cada arquivo mantém sua extensão original correta depois da renomeação.</p>

<p>Nomes de clipes consistentes economizam tempo de verdade quando você está vasculhando uma linha do tempo tentando encontrar "aquela cena específica" três semanas depois da gravação.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Baixe o Renym na Mac App Store</a></p>
`,
  },
  "find-replace-filename-mac": {
    slug: "find-replace-filename-mac",
    title: "Buscar e Substituir em Nomes de Arquivos no Mac",
    description: "Buscar e substituir em nomes de arquivos parece simples, mas fazer isso bem exige mais controle do que uma simples troca de texto — sensibilidade a maiúsculas/minúsculas, correspondência de palavra inteira e lidar com texto que aparece mais de uma vez.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Buscar e substituir é a operação de renomeação em lote mais comum de todas. Você tem uma palavra ou string que aparece em um conjunto de arquivos e precisa trocá-la por outra coisa — um projeto foi renomeado, um cliente mudou o nome da empresa, ou uma convenção de nomenclatura antiga precisa ser atualizada em todo um arquivo. Parece a tarefa de renomeação mais simples possível, e muitas vezes é. Mas no momento em que seus nomes de arquivo não são perfeitamente uniformes, a busca e substituição básica começa a mostrar seus limites.</p>

<h2>Onde a busca e substituição básica encontra problemas</h2>

<p>A função de buscar e substituir do Finder funciona bem em casos limpos e literais. Mas pastas reais são mais bagunçadas do que isso:</p>

<ul>
  <li>O texto que você quer substituir aparece em maiúsculas/minúsculas diferentes nos arquivos ("Draft" vs "draft" vs "DRAFT")</li>
  <li>A string procurada aparece mais de uma vez em um nome de arquivo, e você quer substituir apenas uma ocorrência</li>
  <li>Você precisa substituir um padrão, não um texto exato — como qualquer número de versão, não apenas "v1"</li>
  <li>Você quer executar várias operações de buscar e substituir em sequência, cada uma partindo do resultado da anterior</li>
</ul>

<p>A substituição do Finder lida com exatamente uma troca de texto exato por execução, sem opções de maiúsculas/minúsculas e sem correspondência de padrões.</p>

<h2>Buscar e substituir com mais controle</h2>

<p>O <a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> inclui uma ação de buscar e substituir com suporte a regex, para que você tenha tanto a substituição literal simples quanto a correspondência baseada em padrões na mesma ferramenta.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym buscando e substituindo em nomes de arquivos no macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Trocas simples para casos diretos</h3>
<p>Substitua "OldClientName" por "NewClientName" em todos os arquivos do lote, com a pré-visualização em tempo real confirmando que a mudança está correta antes de você aplicá-la.</p>

<h3>Correspondência de padrões quando o texto varia</h3>
<p>Ative o regex e faça correspondência de padrões em vez de strings exatas — substitua qualquer "draft_v" seguido de um número por "final", independentemente do número que vier depois.</p>

<h3>Encadeie várias substituições</h3>
<p>Precisa corrigir três inconsistências diferentes no mesmo lote? Adicione três etapas de buscar e substituir ao pipeline. Cada uma delas atua sobre o resultado da etapa anterior, e a pré-visualização reflete a cadeia completa.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Baixe o Renym na Mac App Store</a></p>
`,
  },
  "rename-files-with-counter-mac": {
    slug: "rename-files-with-counter-mac",
    title: "Como Renomear Arquivos com Contador no Mac — 001, 002, 003",
    description: "Um contador adicionado aos nomes dos arquivos mantém um conjunto em ordem e evita colisões de nomes, mas acertar o preenchimento de zeros, o número inicial e a posição exige mais do que a numeração básica do Finder.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Você precisa de um conjunto de arquivos numerados 001, 002, 003 em diante — para uma apresentação de slides, um conjunto de imagens de produtos, uma série de páginas exportadas ou qualquer lote em que a ordem importa e nomes duplicados não são uma opção. Um contador resolve os dois problemas ao mesmo tempo: garante nomes únicos e garante uma ordem de classificação previsível, desde que o preenchimento de zeros seja consistente.</p>

<h2>O que o contador do Finder quase acerta</h2>

<p>O modo de renomeação "Formato" do Finder inclui, sim, um contador — você escolhe um número inicial e ele aumenta de um em um entre os arquivos selecionados. Para muitos casos, isso funciona bem. Mas vem com limitações fixas:</p>

<ul>
  <li>O contador substitui todo o nome original do arquivo; não é possível manter nenhuma parte dele junto com o número</li>
  <li>Não é possível controlar o incremento — ele é sempre +1</li>
  <li>Não é possível inserir o contador no meio de um nome, apenas em uma posição fixa determinada pelo modo</li>
  <li>Não há como combinar a numeração com uma etapa de limpeza separada, como corrigir maiúsculas/minúsculas ou remover caracteres indesejados antes</li>
</ul>

<h2>Contadores como uma etapa flexível do pipeline</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> inclui a numeração sequencial como uma entre várias ações, para que você possa combiná-la com qualquer outra coisa que o lote precise.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym adicionando um contador aos nomes de arquivos no macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Escolha o preenchimento de zeros</h3>
<p>Decida antecipadamente se você precisa de 01, 001 ou 0001 com base na quantidade de arquivos do lote, e todos os números recebem o mesmo preenchimento de zeros para que a ordem de classificação nunca se quebre conforme o conjunto cresce.</p>

<h3>Mantenha o nome original, se quiser</h3>
<p>Adicione o contador como prefixo ou sufixo, mantendo intacta a parte descritiva do nome do arquivo — "product_001.jpg" em vez de perder completamente o "product" para um formato de contador genérico.</p>

<h3>Limpe primeiro, depois numere</h3>
<p>Execute uma etapa de localizar e substituir ou de alteração de maiúsculas/minúsculas antes da etapa de numeração, para que os arquivos já estejam limpos quando o contador for aplicado. A pré-visualização mostra o resultado final de toda a sequência.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Baixe o Renym na Mac App Store</a></p>
`,
  },
  "organize-downloads-folder-mac-rename": {
    slug: "organize-downloads-folder-mac-rename",
    title: "Organize a Pasta de Downloads no Mac Renomeando Arquivos em Lote",
    description: "Uma pasta de Downloads cheia de arquivos com nomes como 'file(3).pdf' e 'unnamed-1234567.zip' é quase impossível de pesquisar. Organizar anos de downloads acumulados manualmente não é um projeto realista para um fim de semana.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>A pasta Downloads é onde os nomes de arquivo vão morrer. Os navegadores adicionam "(1)", "(2)" e "(3)" a qualquer coisa que já exista. Alguns sites entregam arquivos com nomes gerados automaticamente, como "file_a8f3k29d.pdf", que não significam nada fora da sessão de download. Anos disso se acumulam em uma pasta onde pesquisar por nome é inútil, porque metade dos nomes são duplicatas genéricas e a outra metade são strings aleatórias.</p>

<h2>Por que esse problema piora com o tempo</h2>

<p>Ao contrário de uma pasta de projeto que você gerencia ativamente, a pasta Downloads se acumula passivamente. Ninguém se senta e decide organizá-la — ela simplesmente cresce até que pesquisar se torne penoso e você acabe recorrendo a ordenar por data, o que só informa quando algo chegou, não o que é. Quando você finalmente decide fazer a limpeza, está diante de centenas ou milhares de arquivos, o que torna a renomeação manual completamente inviável.</p>

<h2>Limpeza em lote sem começar do zero</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> foi criado exatamente para esse tipo de limpeza em lote — um conjunto grande e bagunçado que precisa de várias correções aplicadas de uma só vez, em vez de uma simples renomeação isolada.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym organizando uma pasta de Downloads no macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Remova os sufixos de downloads duplicados</h3>
<p>Use expressões regulares para remover de uma só vez todos os padrões "(1)", "(2)" e "(3)" da pasta, sejam eles resultado do tratamento de duplicatas do navegador ou de downloads repetidos do mesmo arquivo.</p>

<h3>Classifique primeiro por tipo de arquivo</h3>
<p>Agrupe os arquivos por extensão antes de renomear e, em seguida, execute pipelines separados para PDFs, imagens e arquivos compactados — cada um com uma nomenclatura que faça sentido para aquele tipo de arquivo, como adicionar um prefixo de origem ou data.</p>

<h3>Adicione datas para dar contexto</h3>
<p>Insira um intervalo de datas aproximado como prefixo para lotes grandes, de modo que até os arquivos com nomes genéricos indiquem, ao menos, quando chegaram à pasta.</p>

<p>Você não precisa classificar cada arquivo individualmente — algumas passagens de pipeline em lotes agrupados por tipo ou data podem transformar anos de bagunça em algo pesquisável em uma única sessão.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Baixe o Renym na Mac App Store</a></p>
`,
  },
  "rename-files-before-uploading-mac": {
    slug: "rename-files-before-uploading-mac",
    title: "Como Renomear Arquivos Antes de Fazer Upload no Mac",
    description: "Muitos sistemas de upload rejeitam ou tratam mal arquivos com espaços, caracteres especiais ou nomenclatura inconsistente. Corrigir um lote pouco antes do prazo de upload, um arquivo de cada vez, gera um estresse desnecessário.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Você está prestes a enviar um lote de arquivos para um portal, um CMS, um servidor FTP ou o sistema de compartilhamento de arquivos de um cliente, e as regras de nomenclatura não correspondem ao que você tem. Talvez o sistema rejeite espaços. Talvez ele precise de um prefixo específico para que os arquivos sejam classificados corretamente do outro lado. Talvez seus arquivos ainda tenham nomes internos de rascunho que não deveriam ficar visíveis para quem os recebe. Seja qual for o motivo, você precisa que todo o lote seja renomeado corretamente antes de o upload ser concluído — não depois, quando corrigir significa reenviar tudo de novo.</p>

<h2>Por que renomear de última hora no Finder é arriscado</h2>

<p>Sob pressão de prazo, a renomeação em lote do Finder se torna um risco em vez de uma conveniência. Você tem uma operação de cada vez, uma única pré-visualização de amostra e nenhuma forma de verificar o lote inteiro antes de enviá-lo. Se dez arquivos saírem errados, você pode não perceber até que o destinatário aponte o problema — quando o upload já foi enviado.</p>

<h2>Renomeie com confiança antes de enviar</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> oferece uma pré-visualização completa do novo nome de cada arquivo antes que qualquer coisa mude, o que é essencial justamente quando você está correndo contra o prazo e não pode se dar ao luxo de reenviar tudo.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym renomeando arquivos antes de fazer upload no macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Adapte-se às regras de nomenclatura do destino</h3>
<p>Remova espaços e caracteres especiais, force letras minúsculas ou adicione um prefixo obrigatório — seja lá o que o sistema de upload exigir, monte isso como um pipeline uma vez e reutilize-o em futuros envios ao mesmo destino.</p>

<h3>Remova nomes internos ou de rascunho</h3>
<p>Remova palavras como "DRAFT", "internal" ou marcadores de versão que não deveriam ficar visíveis para um destinatário externo, em todo o lote de uma só vez.</p>

<h3>Verifique tudo antes que saia do seu computador</h3>
<p>Percorra a lista completa de antes e depois e confirme que cada arquivo está correto. Só então a renomeação é aplicada, e só então você faz o upload — sem surpresas depois.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Baixe o Renym na Mac App Store</a></p>
`,
  },
  "trim-filename-length-mac": {
    slug: "trim-filename-length-mac",
    title: "Como Reduzir o Tamanho dos Nomes de Arquivo no Mac",
    description: "Nomes de arquivo longos são truncados em listas de arquivos, causam erros em sistemas com limite de tamanho de caminho e são incômodos de manipular em scripts. Encurtar um lote de nomes um de cada vez é um processo lento.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Alguns nomes de arquivo crescem sem controle — um documento exportado mantém o título original, mais uma tag de versão, mais uma data, mais um código de departamento, até o nome do arquivo chegar a 120 caracteres. Isso causa problemas reais: alguns sistemas impõem um comprimento máximo de caminho e rejeitam o arquivo de imediato, algumas listas de arquivos truncam o nome, impedindo que você diferencie os arquivos entre si, e scripts que manipulam o nome podem se comportar de forma imprevisível quando ele é incomumente longo.</p>

<p>Você precisa encurtar os nomes — reduzi-los a um tamanho razoável mantendo as partes que realmente importam.</p>

<h2>O Finder não consegue reduzir por tamanho</h2>

<p>A ferramenta de renomeação do Finder não tem noção de comprimento máximo nem de uma operação de "manter apenas os primeiros N caracteres". Ela pode substituir um texto específico se você souber exatamente o que remover, mas, se o excesso de comprimento vem de informações redundantes ou inconsistentes espalhadas pelo nome, o Finder não oferece nenhuma forma sistemática de reduzi-lo. Resta encurtar cada arquivo manualmente, exatamente o tipo de trabalho repetitivo que as ferramentas de lote existem para eliminar.</p>

<h2>Reduzindo nomes com regras específicas</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> permite remover caracteres por posição ou por padrão, o que cobre a maioria dos casos reais de nomes de arquivo longos demais.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym reduzindo o tamanho dos nomes de arquivo no macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Remova um número fixo de caracteres do final</h3>
<p>Se o excesso de comprimento vem de um sufixo repetido — um código de departamento, uma tag interna — remova um número específico de caracteres do final de cada nome de arquivo em uma única etapa.</p>

<h3>Corte um segmento redundante específico</h3>
<p>Use localizar e substituir ou expressões regulares para remover um segmento que aparece no meio de todos os nomes, como um código de projeto repetido que não precisa mais estar ali depois que os arquivos já estão organizados em uma pasta de projeto.</p>

<h3>Visualize o resultado encurtado</h3>
<p>Confira a lista completa de antes e depois para garantir que os nomes reduzidos ainda sejam distinguíveis entre si — reduzir de forma muito agressiva pode acabar criando nomes duplicados por acidente, e a pré-visualização detecta isso antes de você aplicar qualquer coisa.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Baixe o Renym na Mac App Store</a></p>
`,
  },
  "rename-music-files-mac": {
    slug: "rename-music-files-mac",
    title: "Como Renomear Arquivos de Música no Mac — Artista, Álbum, Faixa",
    description: "Arquivos de áudio baixados ou extraídos de CDs costumam vir com nomes de arquivo enigmáticos que não correspondem aos metadados reais. Organizar uma biblioteca assim torna a navegação por artista, álbum ou faixa quase impossível.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Você tem uma pasta de arquivos de áudio chamados "track01.mp3", "01 - Untitled.flac" ou uma mistura de caracteres aleatórios vindos de um download. Os metadados incorporados podem estar corretos, mas os próprios nomes de arquivo são inúteis para navegar fora de um player de música, sincronizar com certos dispositivos ou organizar um backup em que você está olhando diretamente os nomes de arquivo em vez dos dados de tags. Você quer nomes de arquivo que reflitam o artista, o álbum e o número da faixa reais — de forma consistente, em toda a biblioteca.</p>

<h2>Por que isso não é um problema de um único arquivo</h2>

<p>Um único nome de arquivo incorreto é uma correção de dois minutos. Uma biblioteca com algumas centenas de faixas com nomenclatura inconsistente — algumas já corretas, algumas usando um formato diferente, algumas completamente genéricas — não é algo que se corrige à mão sem perder um fim de semana inteiro. E a ferramenta de renomeação do Finder não tem nenhuma noção de metadados de áudio; ela só enxerga o nome do arquivo como texto simples, então não consegue extrair o artista ou o álbum das tags do arquivo, mesmo que você quisesse.</p>

<h2>Padronizando nomes em toda a biblioteca</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> resolve o lado do nome do arquivo desse problema — depois que você souber o padrão de nomenclatura desejado, basta aplicá-lo de forma consistente a todo o lote.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym renomeando arquivos de música por artista, álbum e faixa no macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Padronize o formato do número da faixa</h3>
<p>Corrija a numeração inconsistente de faixas — alguns arquivos usando "1", outros "01", outros "Track 1" — para um único formato com zeros à esquerda, usando numeração sequencial ou localizar e substituir baseado em expressões regulares.</p>

<h3>Limpe nomes genéricos ou corrompidos</h3>
<p>Remova artefatos de download, strings de ID aleatórias ou textos de espaço reservado como "Untitled" usando localizar e substituir e, em seguida, insira as informações corretas de artista e álbum como um prefixo consistente em toda a pasta de cada álbum.</p>

<h3>Processe em lote por álbum, não pela biblioteca inteira</h3>
<p>Como as convenções de nomenclatura geralmente se aplicam por álbum, arraste a pasta de um álbum de cada vez, monte o pipeline para aquele padrão de nomenclatura e aplique-o — depois passe para o próximo álbum com um lote novo.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Baixe o Renym na Mac App Store</a></p>
`,
  },
  "mac-automator-rename-alternative": {
    slug: "mac-automator-rename-alternative",
    title: "Renomear Arquivos no Automator do Mac É Confuso — Conheça uma Alternativa Visual",
    description: "O Automator até consegue renomear arquivos em lote, mas criar e depurar um workflow para isso leva muito mais tempo do que a própria tarefa de renomear. Veja por quê, e uma forma mais direta de chegar ao mesmo resultado.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>O Automator tem uma ação chamada "Rename Finder Items" (Renomear Itens do Finder) e, em teoria, você pode encadeá-la com outras ações para criar um workflow personalizado de renomeação em lote. Na prática, a maioria das pessoas que tenta isso uma vez não tenta de novo. A interface do Automator é construída em torno de conectar ações genéricas em uma lista no estilo fluxograma, o que é poderoso para automatizar tarefas repetitivas que envolvem vários aplicativos, mas é uma forma desajeitada de resolver um problema tão específico quanto "renomear estes 80 arquivos de forma consistente".</p>

<h2>Onde o Automator torna a renomeação mais difícil do que deveria</h2>

<ul>
  <li>Você precisa saber qual combinação de ações produz o comportamento de renomeação desejado — isso não é nada óbvio pela interface</li>
  <li>Não há pré-visualização em tempo real dentro do editor de workflow; você precisa executá-lo em arquivos reais para ver o resultado</li>
  <li>Erros exigem desfazer a renomeação manualmente ou restaurar a partir de um backup, já que o Automator não controla isso para você</li>
  <li>Salvar um workflow como um aplicativo reutilizável ou Quick Action adiciona mais uma etapa de configuração que a maioria das pessoas pula, então acaba recriando o workflow do zero toda vez</li>
  <li>Descobrir por que uma ação de renomeação não foi aplicada como esperado significa vasculhar os registros do Automator, que não foram feitos para usuários casuais</li>
</ul>

<p>Para uma tarefa que a maioria das pessoas faz algumas vezes por mês, o custo de configuração do Automator raramente compensa.</p>

<h2>Uma alternativa visual direta</h2>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Renym</a> oferece a mesma ideia que o Automator tenta alcançar — encadear operações de renomeação —, mas foi criado especificamente para renomear, sem toda a sobrecarga de um workflow de uso geral.</p>

<a href="https://apps.apple.com/app/renym/id6806640534" target="_blank" rel="noopener" style="display:block"><img src="/apps/renym.png" alt="Renym como alternativa visual ao Automator para renomear arquivos no macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Feito só para renomear</h3>
<p>Todas as ações disponíveis são operações de renomeação — buscar/substituir, regex, numeração, alteração de maiúsculas/minúsculas, inserção, remoção. Sem ações genéricas para filtrar, sem adivinhar qual delas realmente renomeia os arquivos.</p>

<h3>Veja o resultado antes que ele aconteça</h3>
<p>Ao contrário da abordagem "execute e confira" do Automator, a pré-visualização é atualizada em tempo real conforme você monta o pipeline, então você sabe o resultado antes de aplicar qualquer coisa.</p>

<h3>Nenhum arquivo de workflow para salvar ou manter</h3>
<p>Não há nada para exportar como aplicativo ou Quick Action. Abra o Renym, arraste os arquivos, monte o pipeline, aplique. Da próxima vez, você faz a mesma coisa de novo, no mesmo tempo.</p>

<p><a href="https://apps.apple.com/app/renym/id6806640534">Baixe o Renym na Mac App Store</a></p>
`,
  },
};
