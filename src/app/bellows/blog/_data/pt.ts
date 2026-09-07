import type { ArticleSet } from "./index";

export const ptArticles: ArticleSet = {
  "best-developer-tools-app-mac": {
    slug: "best-developer-tools-app-mac",
    title: "O Melhor App de Ferramentas para Desenvolvedores no Mac",
    description:
      "Alternar entre abas do navegador, scripts de terminal e pastas de favoritos para utilitários básicos de desenvolvimento desperdiça mais tempo do que o próprio código.",
    date: "2026-09-06",
    readTime: "5 min de leitura",
    content: `
<p>Você precisa decodificar um JWT, formatar um JSON, gerar um UUID e codificar uma string em Base64 — tudo nos próximos dez minutos. Então você abre quatro abas do navegador, cola dados sensíveis em quatro sites diferentes e espera que nenhum deles esteja registrando sua área de transferência. No dia seguinte, você faz tudo de novo.</p>

<p>Os desenvolvedores reúnem favoritos, aliases de shell e scripts avulsos para lidar com essas microtarefas. Funciona, tecnicamente. Mas cada troca de contexto — sair do editor, encontrar a aba certa, esperar uma página carregar — corrói o foco necessário para o problema real que você está resolvendo.</p>

<h2>O Que o macOS Oferece por Padrão</h2>
<p>O macOS vem com o Terminal, que cobre parte disso se você lembrar das flags certas. <code>uuidgen</code> gera um UUID. <code>echo -n "text" | base64</code> cuida da codificação. <code>python3 -m json.tool</code> formata JSON. Mas não há uma interface unificada, nenhuma descoberta intuitiva e nenhuma forma de lidar com trinta operações diferentes sem manter seu próprio guia de comandos.</p>

<p>O Xcode inclui alguns utilitários escondidos em menus, mas abrir uma IDE de 12 GB para decodificar uma string de URL é como dirigir um caminhão até a loja da esquina.</p>

<h2>Um Único App para 41 Ferramentas de Desenvolvedor</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> reúne 41 ferramentas de desenvolvedor em um único app nativo para macOS — acessível pela barra de menus ou como janela independente. As ferramentas estão organizadas em cinco categorias: Formatadores, Codificadores, Geradores, Conversores e Ferramentas de Texto. Uma barra lateral permite navegar ou pesquisar, e o app acompanha as ferramentas usadas recentemente para que suas operações mais comuns estejam sempre a um clique de distância.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows developer tools app for macOS showing 41 tools in a NavigationSplitView sidebar" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Detecção da Área de Transferência</h3>
<p>Copie um JWT para a área de transferência e abra o Bellows — ele sugere o decodificador de JWT. Copie uma string JSON e ele exibe o formatador de JSON. Esse pequeno recurso elimina totalmente a etapa de escolher uma ferramenta; o app lê o conteúdo da sua área de transferência e aponta para o utilitário certo.</p>

<h3>Totalmente Offline</h3>
<p>Cada ferramenta roda localmente. Sem requisições de rede, sem telemetria, sem colar chaves de API em um site de alguém que você nunca ouviu falar. Para desenvolvedores que trabalham com tokens, segredos ou dados internos, isso não é um extra — é um requisito.</p>

<h3>Acesso pela Barra de Menus</h3>
<p>O Bellows fica na sua barra de menus, sempre a um clique de distância sem ocupar espaço no Dock. Clique no ícone, escolha uma ferramenta, cole sua entrada, obtenha o resultado. Toda a interação leva segundos e você nunca sai do seu espaço de trabalho atual.</p>

<h2>Para Quem É Este App</h2>
<p>Engenheiros back-end depurando respostas de API. Desenvolvedores front-end convertendo cores entre hex e RGB. Engenheiros de DevOps decodificando segredos codificados em Base64. Desenvolvedores mobile gerando UUIDs para dados de teste. Qualquer pessoa que já pensou "deve haver um jeito mais rápido de fazer isso" enquanto abria uma aba do navegador.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenha o Bellows na Mac App Store</a></p>
`,
  },

  "json-formatter-mac-app": {
    slug: "json-formatter-mac-app",
    title: "Formatador de JSON para Mac — App Nativo, Funciona Offline",
    description:
      "Colar JSON desformatado em uma ferramenta do navegador para lê-lo é um fluxo de trabalho que você repete dezenas de vezes por semana sem questionar.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Uma API retorna uma resposta JSON de 200 linhas comprimida em uma única linha. Você precisa encontrar um campo aninhado. Então você copia, abre uma aba do navegador, navega até um dos muitos sites formatadores de JSON, cola o conteúdo, clica em "Formatar" e franze os olhos para o resultado. Se o JSON contiver algo sensível — tokens, dados de usuário, IDs internos — você acabou de enviar isso para um servidor de terceiros.</p>

<p>Essa é uma das microtarefas mais comuns no desenvolvimento de software, e a maioria dos desenvolvedores lida com ela da forma menos eficiente possível.</p>

<h2>A Abordagem pelo Terminal</h2>
<p>O macOS inclui <code>python3</code>, então você pode encaminhar o JSON pelo <code>python3 -m json.tool</code> no Terminal. Funciona para entradas bem formadas. Mas engasga com vírgulas sobrando, dá mensagens de erro crípticas para JSON malformado, e o resultado fica preso na janela do terminal. Não há destaque de sintaxe, nós recolhíveis, nem forma rápida de copiar um caminho aninhado.</p>

<p>Alguns desenvolvedores instalam o <code>jq</code> via Homebrew, que é mais poderoso, mas adiciona outra dependência e exige aprender sua sintaxe de consulta para qualquer coisa além de formatação básica.</p>

<h2>Um Formatador de JSON Nativo Que Vive no Seu Mac</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclui um formatador de JSON como uma de suas 41 ferramentas integradas para desenvolvedores. Cole ou digite JSON no painel de entrada e obtenha um resultado formatado e legível instantaneamente. Nenhuma conexão de rede necessária — tudo roda localmente no seu Mac.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows JSON formatter tool showing formatted output on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Detecção da Área de Transferência</h3>
<p>Copie uma string JSON para a área de transferência e abra o Bellows. O app detecta o conteúdo JSON e sugere o formatador automaticamente. Sem navegar por menus — a ferramenta que você precisa já está esperando.</p>

<h3>Parte de um Conjunto Maior de Ferramentas</h3>
<p>A formatação de JSON raramente acontece isoladamente. Você pode precisar decodificar uma string Base64 para obter o JSON, extrair o payload de um JWT que contém JSON, ou decodificar uma URL cujo parâmetro de consulta guarda um objeto JSON. Com 41 ferramentas em um único app, você pode encadear essas operações sem trocar de utilitário.</p>

<h3>Quando Você Mais Precisa Dele</h3>
<p>Depurando o payload de um webhook às 23h. Revisando um arquivo de configuração que um colega colou no Slack. Inspecionando uma exportação do Core Data. Verificando a estrutura de uma resposta simulada antes de escrever um teste. Esses são os momentos em que abrir uma aba do navegador parece mais pesado — e quando um app nativo na barra de menus faz a maior diferença.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenha o Bellows na Mac App Store</a></p>
`,
  },

  "base64-encoder-decoder-mac": {
    slug: "base64-encoder-decoder-mac",
    title: "Codificador e Decodificador Base64 para Mac",
    description:
      "Decodificar strings Base64 via comandos de Terminal ou ferramentas web interrompe seu fluxo toda vez que você encontra um valor codificado em logs ou configurações.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Você está lendo variáveis de ambiente e encontra um valor que parece um amontoado de letras — <code>eyJhbGciOiJIUzI1NiJ9</code>. Você sabe que é Base64, mas não consegue lê-lo ali mesmo. Então você copia, abre o Terminal, digita <code>echo "..." | base64 --decode</code>, percebe que esqueceu a flag <code>-D</code> no macOS, tenta de novo e finalmente vê o resultado decodificado. Trinta segundos perdidos em algo que deveria levar dois.</p>

<p>A codificação Base64 aparece em todo lugar: cabeçalhos de autenticação, anexos de e-mail, URIs de dados em CSS, segredos do Kubernetes, configurações de pipelines de CI/CD. Se você trabalha com APIs ou infraestrutura, decodifica Base64 várias vezes por dia.</p>

<h2>Por Que o Terminal Não É Suficiente</h2>
<p>O comando <code>base64</code> nativo do macOS funciona, mas tem peculiaridades. A flag de decodificação é <code>-D</code> (maiúscula) no macOS versus <code>-d</code> no Linux, o que confunde quem trabalha com os dois sistemas. Entradas multilinhas exigem aspas cuidadosas. E não há retorno visual — você digita um comando, recebe uma string de volta e espera não ter truncado a entrada por acidente.</p>

<p>Ferramentas baseadas em navegador resolvem o problema de usabilidade, mas criam um problema de segurança. Valores codificados em Base64 costumam ser segredos: chaves de API, tokens, dados de certificados. Colá-los em um site anula o propósito de tê-los codificado em primeiro lugar.</p>

<h2>Codifique e Decodifique Localmente em Um Clique</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclui um codificador e decodificador Base64 como parte do seu conjunto de 41 ferramentas para desenvolvedores no macOS. Cole sua string codificada, veja o resultado decodificado imediatamente. Inverta a direção para codificar texto simples em Base64. Tudo acontece na sua máquina — nenhum dado sai do seu Mac.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Base64 encoder and decoder tool on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Casos de Uso Comuns</h3>
<p>Decodificar segredos do Kubernetes armazenados em Base64 em manifestos YAML. Inspecionar o payload de um JWT (que é codificado em Base64url). Converter uma imagem em um URI de dados Base64 para incorporar em HTML. Codificar credenciais para um cabeçalho de Autenticação Básica HTTP. Cada um desses casos leva uma única interação de colar e ler, em vez de um comando de Terminal ou uma ida e volta ao navegador.</p>

<h3>Consciente da Área de Transferência</h3>
<p>Copie uma string Base64 e abra o Bellows pela barra de menus. O app detecta o conteúdo codificado na sua área de transferência e sugere a ferramenta Base64, então você pula a etapa de navegar até ela manualmente.</p>

<h3>Sem Sobrecarga de Instalação</h3>
<p>Diferente de fórmulas do Homebrew ou scripts Python que precisam de manutenção, o Bellows é uma única instalação pela Mac App Store com atualizações automáticas. Roda nativamente em Macs com Apple Silicon e Intel, sem dependências.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenha o Bellows na Mac App Store</a></p>
`,
  },

  "devtoys-alternative-mac": {
    slug: "devtoys-alternative-mac",
    title: "Alternativa ao DevToys para Mac",
    description:
      "O DevToys trouxe a ideia do kit de ferramentas tudo-em-um para o Windows, mas a versão macOS nunca alcançou a experiência nativa que os usuários de Mac esperam.",
    date: "2026-09-06",
    readTime: "5 min de leitura",
    content: `
<p>Se você já usou o DevToys no Windows, conhece o apelo: um único app que lida com formatação de JSON, Base64, decodificação de JWT, geração de hash e uma dúzia de outros utilitários. Sem abas de navegador, sem comandos de CLI, sem troca de contexto. Depois você migrou para o macOS e procurou pela mesma coisa.</p>

<p>A versão macOS do DevToys existe, mas sempre pareceu mais uma portabilidade do que um app nativo. A interface não segue as convenções do macOS, o desempenho pode travar em Apple Silicon, e carrega o peso de um framework multiplataforma. Se você escolheu um Mac pela qualidade do software, a diferença é perceptível.</p>

<h2>O Que os Desenvolvedores de Mac Realmente Querem</h2>
<p>Usuários do macOS esperam apps que parecem pertencer à plataforma. Isso significa uma barra lateral nativa, atalhos de teclado padrão, suporte adequado ao modo escuro e integração com recursos do sistema como a barra de menus. Não são preferências cosméticas — elas afetam a velocidade com que você entra, faz a tarefa e sai.</p>

<p>Um app de ferramentas para desenvolvedores vive nas frestas entre sessões de trabalho focado. Precisa abrir instantaneamente, aceitar entradas sem atrito e desaparecer quando você termina. Cada milissegundo de atraso ou confusão na interface vai contra esse propósito.</p>

<h2>Uma Alternativa Nativa para Mac com 41 Ferramentas</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> é construído em Swift especificamente para o macOS. Usa uma barra lateral NavigationSplitView para organizar 41 ferramentas em cinco categorias: Formatadores, Codificadores, Geradores, Conversores e Ferramentas de Texto. Funciona tanto como app de barra de menus quanto como janela independente — você escolhe conforme sua forma de trabalhar.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows as a native macOS DevToys alternative with NavigationSplitView sidebar" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Como Se Compara ao DevToys</h3>
<p>Ambos os apps cobrem o mesmo território principal — formatação de JSON, codificação/decodificação, hashing, geração de UUID, conversão de cores. Onde o Bellows se diferencia é na integração com a plataforma. A detecção da área de transferência sugere a ferramenta certa com base no que você acabou de copiar. O acesso pela barra de menus significa que você nunca precisa usar Cmd-Tab para encontrar o app. O rastreamento de recentes exibe as ferramentas mais usadas no topo. São pequenos detalhes, mas se acumulam ao longo de centenas de interações diárias.</p>

<h3>Totalmente Offline</h3>
<p>Assim como o DevToys, o Bellows roda inteiramente offline. Nenhum dado sai da sua máquina, nenhuma conta necessária, nenhuma telemetria. Para desenvolvedores que trabalham com credenciais, tokens ou dados proprietários, isso é básico — mas vale confirmar explicitamente.</p>

<h3>Desempenho Nativo</h3>
<p>Como o Bellows é construído com frameworks nativos do macOS em vez de Electron ou um kit multiplataforma, ele abre instantaneamente e usa memória mínima. Se comporta como um utilitário do sistema, não como um app web vestindo uma pele nativa.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenha o Bellows na Mac App Store</a></p>
`,
  },

  "jwt-decoder-mac": {
    slug: "jwt-decoder-mac",
    title: "Decodificador de JWT para Mac — Cole e Inspecione",
    description:
      "Colar JWTs no jwt.io para ler suas claims funciona até você perceber que acabou de enviar um token válido para um site de terceiros.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Você pega um JWT de um cabeçalho de requisição ou de um arquivo de log. É uma string longa, separada por pontos, que não significa nada para o olho humano. Você precisa verificar a claim de expiração, validar o emissor ou ver quais escopos estão embutidos. Então você abre o jwt.io, cola o token e lê o payload decodificado no painel da direita.</p>

<p>Esse fluxo de trabalho tem um problema: você acabou de enviar um token de autenticação ativo pela rede para um site que você não controla. Os payloads de JWT costumam conter IDs de usuário, endereços de e-mail, funções e permissões. O próprio token ainda pode estar válido. Mesmo que o jwt.io seja confiável, a política de segurança da sua empresa pode discordar.</p>

<h2>O Que um JWT Realmente Contém</h2>
<p>Um JSON Web Token tem três partes separadas por pontos: um cabeçalho (algoritmo e tipo), um payload (as claims — expiração, emissor, assunto, dados personalizados) e uma assinatura. O cabeçalho e o payload são apenas JSON codificado em Base64url. Você não precisa de um servidor ou de uma biblioteca especial para lê-los — precisa de um decodificador Base64 e de um formatador de JSON. Mas fazer isso manualmente no Terminal toda vez é tedioso.</p>

<h2>Decodifique JWTs Localmente no Seu Mac</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclui um decodificador de JWT dedicado que divide o token em suas três partes e exibe o cabeçalho e o payload decodificados como JSON formatado. Cole o token, veja as claims. Sem requisição de rede, sem servidor de terceiros, sem risco de vazar um token ativo.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows JWT decoder showing decoded header and payload on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Consciente da Área de Transferência</h3>
<p>Copie um JWT das ferramentas de desenvolvedor do seu navegador, de um arquivo de log ou de uma mensagem do Slack. Abra o Bellows e ele detecta o formato do token na sua área de transferência, sugerindo imediatamente o decodificador de JWT. O payload decodificado aparece em uma única etapa.</p>

<h3>Verifique a Expiração de Relance</h3>
<p>O motivo mais comum para decodificar um JWT é verificar se ele expirou. A claim <code>exp</code> é um timestamp Unix — fácil para máquinas, sem sentido para humanos. Ver o payload decodificado permite ler a expiração rapidamente junto com outras claims como <code>iss</code>, <code>sub</code> e <code>aud</code>, sem converter timestamps mentalmente.</p>

<h3>Parte de um Kit de Ferramentas Maior</h3>
<p>A decodificação de JWT costuma levar a tarefas relacionadas: decodificar um valor Base64 dentro de uma claim, gerar hash de uma string para comparar com uma impressão digital, ou decodificar uma URL de redirecionamento armazenada no payload. Com 41 ferramentas disponíveis no mesmo app, essas tarefas subsequentes não exigem trocar de utilitário.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenha o Bellows na Mac App Store</a></p>
`,
  },

  "url-encoder-decoder-mac": {
    slug: "url-encoder-decoder-mac",
    title: "Codificador e Decodificador de URL para Mac",
    description:
      "Ler URLs codificadas em percentual cheias de %20 e %3D é como ler uma frase em que todo espaço foi substituído por um número.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Você extrai uma URL dos logs do servidor e ela se parece com isto: <code>https://example.com/search?q=hello%20world&redirect=https%3A%2F%2Fother.com%2Fpath</code>. Você precisa ler os parâmetros de consulta, mas a codificação percentual torna isso quase impossível de relance. Então você cola em uma ferramenta do navegador, decodifica, lê o resultado e depois recodifica uma versão modificada para testar algo. Duas idas e voltas a um site para o que deveria ser uma operação trivial.</p>

<p>A codificação de URL é uma daquelas coisas com as quais os desenvolvedores lidam constantemente, mas raramente pensam — até que um redirecionamento quebrado, uma string de consulta malformada ou um parâmetro codificado duas vezes transforme uma tarefa de cinco minutos em uma sessão de depuração de uma hora.</p>

<h2>Quando a Codificação de URL Causa Problemas Reais</h2>
<p>A codificação dupla é a armadilha clássica. Uma URL é codificada uma vez pela sua aplicação e novamente por uma camada de middleware, transformando <code>%20</code> em <code>%2520</code>. Para diagnosticar isso, você precisa decodificar a URL passo a passo e ver exatamente onde surgiu a codificação extra. Fazer isso no Terminal com <code>python3 -c "import urllib.parse; print(urllib.parse.unquote('...'))"</code> funciona, mas é lento e propenso a erros para URLs longas.</p>

<p>Erros de codificação também quebram fluxos OAuth, URLs de webhook e callbacks de API onde o URI de redirecionamento precisa corresponder exatamente. Poder codificar e decodificar rapidamente permite comparar o que sua aplicação envia com o que o servidor espera.</p>

<h2>Codifique e Decodifique URLs Instantaneamente</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclui um codificador e decodificador de URL entre suas 41 ferramentas para desenvolvedores. Cole uma URL codificada para ver a versão legível. Digite uma URL simples para obter a saída devidamente codificada. Alterne entre codificar e decodificar com um clique, e o resultado é atualizado em tempo real.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows URL encoder and decoder tool on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Depurando Redirecionamentos</h3>
<p>Fluxos OAuth e SSO passam URIs de redirecionamento como parâmetros de consulta codificados em URL. Quando um redirecionamento falha, o primeiro passo é decodificar a URL para verificar se o destino corresponde ao seu callback registrado. Ter uma ferramenta local significa que você pode fazer isso sem sair da sua IDE ou colar URLs de callback potencialmente sensíveis em um site público.</p>

<h3>Trabalhando com Strings de Consulta</h3>
<p>APIs que aceitam filtros complexos ou consultas de pesquisa por parâmetros de URL costumam exigir codificação cuidadosa de caracteres especiais como <code>&</code>, <code>=</code>, <code>+</code> e espaços. Um codificador dedicado garante que você obtenha o resultado correto sem adivinhar quais caracteres precisam de escape no seu contexto específico.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenha o Bellows na Mac App Store</a></p>
`,
  },

  "hash-generator-mac-app": {
    slug: "hash-generator-mac-app",
    title: "Gerador de Hash para Mac — MD5, SHA-256 e Mais",
    description:
      "Verificar a integridade de arquivos ou gerar hashes de senha via comandos de Terminal significa lembrar flags diferentes para cada algoritmo toda vez.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Você baixa um binário do GitHub e a página de lançamento lista uma soma de verificação SHA-256. Para verificá-la, você abre o Terminal, digita <code>shasum -a 256 ~/Downloads/file.tar.gz</code>, espera o cálculo, depois compara manualmente duas strings hexadecimais de 64 caracteres lado a lado. Um caractere errado e você não sabe dizer se o arquivo está corrompido ou se você apenas leu o hash errado.</p>

<p>Ou você precisa gerar um hash MD5 de uma string — talvez para uma chave de cache, uma URL do Gravatar, ou uma API legada que ainda usa assinaturas MD5. O comando é <code>md5 -s "text"</code> no macOS, mas <code>md5sum</code> no Linux. Pequenas diferenças, mas suficientes para te atrasar ao trocar de sistema.</p>

<h2>Hashing no Terminal: Funciona, Mal e Porcamente</h2>
<p>O macOS vem com <code>md5</code>, <code>shasum</code> e <code>openssl dgst</code>, cobrindo a maioria dos algoritmos. Mas cada ferramenta tem sua própria sintaxe. O <code>md5</code> usa <code>-s</code> para entrada de string. O <code>shasum</code> usa <code>-a</code> para selecionar o algoritmo. O <code>openssl dgst</code> exige <code>-sha256</code> ou <code>-md5</code> como flag. Não existe um único comando que permita escolher um algoritmo e gerar hash de uma string sem consultar o manual.</p>

<p>Para desenvolvedores que ocasionalmente precisam de um hash rápido, a carga cognitiva de lembrar essas variações é desproporcional à simplicidade da tarefa.</p>

<h2>Gere Hashes com Um Único Colar</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclui um gerador de hash que suporta MD5, SHA-1, SHA-256, SHA-384, SHA-512 e outros algoritmos comuns. Digite ou cole sua entrada, selecione um algoritmo e o hash aparece instantaneamente. Sem flags para lembrar, sem sintaxe para consultar.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows hash generator showing MD5 and SHA-256 output on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Verificando Downloads</h3>
<p>Quando uma página de lançamento fornece uma soma de verificação, você quer compará-la com o arquivo que baixou. Gerar o hash em uma ferramenta visual torna a comparação mais fácil do que ficar comparando visualmente duas strings em uma janela de terminal — especialmente para hashes SHA-256 de 64 caracteres.</p>

<h3>Assinaturas de API e Chaves de Cache</h3>
<p>Algumas APIs exigem assinaturas HMAC ou baseadas em hash para autenticação de requisições. Outras usam hashes MD5 ou SHA como chaves de cache ou identificadores de conteúdo. Poder gerar rapidamente o hash de um corpo de requisição ou de uma string permite verificar sua implementação em relação aos valores esperados durante a depuração.</p>

<h3>Offline e Privado</h3>
<p>A entrada de hashing pode conter dados sensíveis — senhas, segredos de API, identificadores internos. O Bellows roda inteiramente no seu Mac sem acesso à rede, então nada que você faça hash sai da sua máquina.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenha o Bellows na Mac App Store</a></p>
`,
  },

  "regex-tester-mac-app": {
    slug: "regex-tester-mac-app",
    title: "Testador de Regex para Mac — Nativo e Offline",
    description:
      "Escrever expressões regulares sem retorno em tempo real é como editar código sem destaque de sintaxe — tecnicamente possível, mas desnecessariamente doloroso.",
    date: "2026-09-06",
    readTime: "5 min de leitura",
    content: `
<p>Você precisa de uma regex para validar endereços de e-mail, extrair timestamps de linhas de log, ou analisar um campo CSV que às vezes contém vírgulas entre aspas. Você escreve um padrão, testa contra uma string de exemplo no seu código, descobre que falha em um caso extremo, ajusta, recompila, testa de novo. Cada iteração leva 30 segundos de compilar-executar-verificar, e a maioria dos padrões de regex precisa de cinco ou seis iterações antes de funcionar de forma confiável.</p>

<p>A alternativa é o regex101.com — uma excelente ferramenta que mostra correspondências em tempo real, explica cada parte do padrão e permite testar contra várias entradas ao mesmo tempo. Mas roda em um navegador, o que significa que você está colando seus dados de teste (linhas de log, registros de usuário, respostas de API) em um site público. E você precisa de conexão com a internet.</p>

<h2>Por Que o Retorno em Tempo Real Importa para Regex</h2>
<p>Expressões regulares são densas por natureza. A diferença entre <code>.*</code> e <code>.*?</code> (guloso versus preguiçoso) pode mudar se o seu padrão corresponde a uma linha ou a um arquivo inteiro. Lookaheads, classes de caracteres e grupos de captura interagem de formas difíceis de raciocinar mentalmente. Ver as correspondências destacadas enquanto você digita o padrão transforma a regex de adivinhação em um processo visual e iterativo.</p>

<p>É por isso que os testadores baseados em navegador são tão populares — eles fornecem o ciclo de retorno que escrever regex diretamente no código-fonte não oferece. O problema é que exigem um navegador, uma conexão com a internet e confiança de que seus dados de teste permanecerão privados.</p>

<h2>Teste Regex Localmente no Seu Mac</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclui um testador de regex como uma de suas 41 ferramentas para desenvolvedores. Digite seu padrão, cole sua string de teste e veja as correspondências destacadas em tempo real. Ajuste o padrão e os resultados são atualizados instantaneamente — sem etapa de compilação, sem recarregar página, sem requisição de rede.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows regex tester with live match highlighting on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Padrões Comuns Simplificados</h3>
<p>Extrair datas de arquivos de log (<code>\\d{4}-\\d{2}-\\d{2}</code>). Validar números de telefone com códigos de país opcionais. Encontrar URLs em texto livre. Analisar dados estruturados como CSV ou TSV onde os campos podem estar entre aspas. Esses padrões são simples em conceito, mas complicados em casos extremos — e um testador em tempo real permite capturar essas exceções antes que cheguem à produção.</p>

<h3>Nenhum Dado Sai do Seu Mac</h3>
<p>Se seus dados de teste incluem logs de servidor, informações de usuário ou saídas internas de sistema, testar padrões de regex offline não é apenas conveniente — é a escolha responsável. O Bellows roda inteiramente na sua máquina sem acesso à rede.</p>

<h3>Sempre Disponível</h3>
<p>O Bellows fica na sua barra de menus, então o testador de regex está a um clique de distância. Sem aba de navegador para encontrar, sem URL para lembrar, sem indicador de carregamento. Abra, teste seu padrão, copie o resultado, feche. Toda a interação leva segundos.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenha o Bellows na Mac App Store</a></p>
`,
  },

  "color-picker-hex-rgb-mac": {
    slug: "color-picker-hex-rgb-mac",
    title: "Seletor de Cores com Hex e RGB para Mac",
    description:
      "Converter manualmente entre códigos hex, valores RGB e notação HSL é propenso a erros e desnecessário quando você faz isso várias vezes ao dia.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Um designer te envia uma cor em hex: <code>#1A73E8</code>. Seu framework CSS quer HSL. Sua base de código iOS precisa de valores RGB entre 0 e 1. Seu projeto Android usa inteiros ARGB. Uma cor, quatro formatos, e você está abrindo uma aba do navegador para converter entre eles — de novo.</p>

<p>A conversão de cores é matemática trivial (hex para RGB é apenas base-16 para decimal), mas fazer isso mentalmente para três canais enquanto tenta manter o foco em layout ou estilização é uma distração desnecessária.</p>

<h2>O Que o macOS Oferece</h2>
<p>O macOS tem um seletor de cores integrado acessível em alguns apps através do painel de cores do sistema. Ele mostra controles deslizantes RGB e um campo hex, mas foi projetado para escolher cores visualmente, não para converter entre formatos programaticamente. Não há uma forma fácil de colar um código hex e obter o equivalente em HSL, ou inserir inteiros RGB e copiar a saída em hex. E fica escondido dentro de apps específicos, em vez de disponível em todo o sistema.</p>

<h2>Converta Cores Instantaneamente Entre Formatos</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclui um conversor de cores entre suas 41 ferramentas para desenvolvedores. Insira uma cor em qualquer formato suportado — hex, RGB, HSL — e veja os valores equivalentes em todos os outros formatos. Copie a representação que precisar com um clique.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows color picker showing hex, RGB, and HSL conversion on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Do Design ao Código</h3>
<p>O Figma exporta cores em hex. O Tailwind CSS usa valores de cor personalizados. O SwiftUI quer <code>Color(red:green:blue:)</code> com valores decimais. O XML do Android usa <code>#AARRGGBB</code>. Ter todos os formatos visíveis ao mesmo tempo elimina o cálculo mental e as idas e voltas a sites de conversão.</p>

<h3>Verificando Contraste e Legibilidade</h3>
<p>Quando você pode ver a cor renderizada junto com seus valores numéricos, consegue verificar rapidamente se uma cor de texto será legível contra um fundo. Isso é mais rápido do que trocar para um verificador de contraste separado para cada par de cores na sua folha de estilos.</p>

<h3>Acesso pela Barra de Menus</h3>
<p>Precisa de uma conversão rápida enquanto escreve CSS? Clique no ícone do Bellows na barra de menus, selecione a ferramenta de cores, cole o código hex e copie o valor RGB. Toda a interação leva menos de cinco segundos e você nunca sai do seu editor.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenha o Bellows na Mac App Store</a></p>
`,
  },

  "uuid-generator-mac": {
    slug: "uuid-generator-mac",
    title: "Gerador de UUID para Mac — Cópia Instantânea",
    description:
      "Gerar UUIDs via Terminal ou trechos de código adiciona atrito a uma tarefa que deveria ser completamente automática.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Você precisa de um UUID. Talvez esteja escrevendo um teste unitário e precise de um identificador único para um objeto simulado. Talvez esteja populando um banco de dados e precise de chaves primárias. Talvez esteja criando uma nova entidade em um arquivo de configuração e o esquema exija um UUID. Seja qual for o motivo, você precisa parar o que está fazendo, gerar o UUID em algum lugar, copiá-lo e colá-lo de volta no seu código.</p>

<p>Isso acontece com frequência suficiente para que a maioria dos desenvolvedores tenha uma solução de memória muscular: <code>uuidgen</code> no Terminal, um favorito no navegador, ou um trecho no editor. Cada um funciona. Nenhum é verdadeiramente sem atrito.</p>

<h2>O Jeito Terminal</h2>
<p>O macOS inclui <code>uuidgen</code>, que imprime um UUID v4 na saída padrão. É rápido e confiável. Mas produz maiúsculas por padrão (alguns sistemas esperam minúsculas), gera um UUID de cada vez, e usá-lo significa trocar para o Terminal, executar o comando, selecionar a saída, copiá-la e voltar. Para um único UUID, tudo bem. Para dez UUIDs para popular um banco de dados de teste, isso se torna tedioso.</p>

<h2>Gere UUIDs Pela Sua Barra de Menus</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclui um gerador de UUID como uma de suas 41 ferramentas para desenvolvedores. Abra pela barra de menus, gere um UUID e copie para sua área de transferência. Precisa de outro? Gere novamente. A ferramenta está sempre a um clique de distância, roda offline e produz UUIDs v4 padrão prontos para colar em código, configurações ou arquivos de dados iniciais de banco de dados.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows UUID generator with instant copy on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Testes e Dados Simulados</h3>
<p>Testes unitários e de integração costumam precisar de identificadores únicos que pareçam realistas. Fixar o mesmo UUID em todo lugar leva a bugs sutis quando os testes rodam em paralelo ou quando um teste acidentalmente depende de um ID específico. Gerar UUIDs novos para cada fixture de teste é um hábito simples que previne toda uma classe de falhas intermitentes.</p>

<h3>População de Banco de Dados</h3>
<p>Ao popular um banco de dados de desenvolvimento com dados de exemplo, você precisa de chaves primárias únicas que não colidam com dados de produção ou com arquivos iniciais de outros desenvolvedores. Gerar UUIDs sob demanda é mais limpo do que incrementar inteiros ou usar padrões previsíveis que podem se sobrepor.</p>

<h3>Sempre Disponível</h3>
<p>Como o Bellows fica na sua barra de menus, o gerador de UUID é acessível sem abrir o Terminal, trocar de app ou navegar até um favorito. Clique, gere, copie, cole. A interrupção no seu fluxo de trabalho é medida em segundos, não em trocas de contexto.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenha o Bellows na Mac App Store</a></p>
`,
  },

  "all-in-one-dev-tools-mac-offline": {
    slug: "all-in-one-dev-tools-mac-offline",
    title: "Ferramentas Tudo-em-Um para Desenvolvedores no Mac — 41 Ferramentas, Totalmente Offline",
    description:
      "Abas de navegador para codificação, janelas de Terminal para hashing, favoritos para formatação — microtarefas de desenvolvedor espalhadas por uma dúzia de lugares.",
    date: "2026-09-06",
    readTime: "5 min de leitura",
    content: `
<p>Conte as ferramentas que você usa em uma sessão típica de depuração. Um formatador de JSON para ler uma resposta de API. Um decodificador Base64 para um cabeçalho de autenticação. Um inspetor de JWT para verificar claims de token. Um decodificador de URL para desembaraçar uma cadeia de redirecionamentos. Um gerador de hash para verificar uma soma de verificação. São cinco abas de navegador abertas, cinco sites que agora têm seus dados, e cinco trocas de contexto que te tiraram do problema real.</p>

<p>Essas não são tarefas complexas. Cada uma leva dez segundos de trabalho real. Mas a sobrecarga de encontrar a ferramenta certa, trocar para ela, colar a entrada e copiar a saída se acumula em minutos por sessão e horas por semana. Pior, fragmenta sua atenção exatamente nos momentos em que você precisa manter um sistema complexo na cabeça.</p>

<h2>O Cenário Atual</h2>
<p>Os desenvolvedores montaram kits de ferramentas pessoais a partir de uma mistura de fontes. Favoritos do navegador para sites como jwt.io, regex101.com e jsonformatter.org. Aliases e funções de shell no <code>.zshrc</code>. Extensões do VS Code que adicionam formatação ou codificação. Pacotes do Homebrew como <code>jq</code> e <code>htop</code>. Cada ferramenta foi adicionada para resolver um problema, e nenhuma delas se comunica com as outras.</p>

<p>O resultado é uma cadeia de ferramentas que tecnicamente funciona, mas não tem coerência. Você não consegue prever onde o próximo utilitário vai estar. Você não consegue encadear operações sem copiar manualmente a saída de uma ferramenta e colar em outra. E não pode garantir que nenhuma das ferramentas baseadas na web esteja mantendo seus dados privados.</p>

<h2>41 Ferramentas em Um App Nativo para macOS</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> consolida 41 ferramentas de desenvolvedor em uma única aplicação macOS organizada em cinco categorias:</p>

<ul>
<li><strong>Formatadores</strong> — JSON, XML, SQL, HTML e mais. Cole uma entrada bagunçada, obtenha uma saída limpa.</li>
<li><strong>Codificadores</strong> — Base64, codificação de URL, entidades HTML, decodificação de JWT. Codifique e decodifique em ambas as direções.</li>
<li><strong>Geradores</strong> — UUIDs, hashes (MD5, SHA-256, SHA-512), Lorem Ipsum, senhas. Gere e copie em uma única etapa.</li>
<li><strong>Conversores</strong> — Cores (hex/RGB/HSL), bases numéricas, timestamps, unidades. Converta entre formatos sem cálculo mental.</li>
<li><strong>Ferramentas de Texto</strong> — Testador de regex, verificador de diferenças, conversor de maiúsculas/minúsculas, ordenador de linhas, contador de caracteres. Os utilitários de manipulação de texto que você usa diariamente.</li>
</ul>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows showing all 41 developer tools organized in categories on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Detecção da Área de Transferência</h3>
<p>Copie algo para sua área de transferência e abra o Bellows. O app analisa o conteúdo da área de transferência e sugere a ferramenta mais relevante. Copie um JWT e ele oferece o decodificador. Copie JSON e ele exibe o formatador. Copie uma string Base64 e ele aponta para o codificador. Isso remove a etapa de escolher uma ferramenta — o app faz isso por você.</p>

<h3>Modo Barra de Menus e Janela</h3>
<p>O Bellows roda como um app de barra de menus para operações rápidas e pontuais: clique no ícone, use uma ferramenta, feche. Para sessões mais longas — como testar uma série de padrões de regex ou converter vários valores de cor — troque para o modo em janela e mantenha-o ao lado do seu editor. Ambos os modos usam a mesma interface com uma barra lateral NavigationSplitView para navegar pelas categorias.</p>

<h3>Totalmente Offline</h3>
<p>Cada ferramenta roda localmente no seu Mac. Sem requisições de rede, sem contas, sem telemetria. Isso não é uma postura filosófica — é um requisito prático para desenvolvedores que trabalham diariamente com tokens, segredos, credenciais e dados proprietários. Sua entrada permanece na sua máquina.</p>

<h3>Rastreamento de Recentes</h3>
<p>As ferramentas que você usa com mais frequência aparecem no topo da barra lateral. Com o tempo, o Bellows se adapta ao seu fluxo de trabalho para que as ferramentas de que você precisa estejam sempre ao alcance, não enterradas em uma categoria que você precisa expandir.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenha o Bellows na Mac App Store</a></p>
`,
  },

  "json-validator-mac-app": {
    slug: "json-validator-mac-app",
    title: "Validador de JSON para Mac — Encontre Erros Instantaneamente",
    description:
      "Uma vírgula faltando ou um colchete perdido pode quebrar um arquivo de configuração inteiro, e encontrá-lo escaneando linha por linha desperdiça um tempo que você não tem.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Sua compilação falha com "Unexpected token in JSON at position 4,821." Ótimo, obrigado. Agora você vai rolar por um arquivo de configuração de quatro mil caracteres contando colchetes de cabeça, tentando descobrir qual está sem par. Este é um dos desperdícios de tempo mais evitáveis no desenvolvimento de software, e acontece constantemente porque JSON tem tolerância zero para pequenos erros.</p>

<p>Uma vírgula sobrando depois do último item de um array. Uma aspa faltando ao redor de uma chave. Uma chave de fechamento extra copiada de outro lugar. Qualquer um desses erros quebra completamente a análise, e a mensagem de erro raramente aponta para o problema real — ela aponta para onde o analisador desistiu, o que geralmente fica várias linhas longe do erro de verdade.</p>

<h2>Por Que Números de Posição Não Ajudam</h2>
<p>A maioria dos analisadores de JSON reporta erros como um deslocamento de caractere, não uma linha e coluna para as quais você pode pular no seu editor. Converter a posição 4.821 em "linha 112, em algum lugar perto do terceiro objeto" exige contar manualmente ou escrever um script descartável. Nenhuma das duas é um bom uso da sua tarde.</p>

<p>Alguns editores destacam erros de sintaxe JSON diretamente no texto, o que ajuda para arquivos que você está escrevendo ativamente. Mas para JSON recebido de uma API, de um colega, ou de uma configuração legada que você herdou, você precisa de uma ferramenta que pegue o texto bruto e diga exatamente o que está errado e onde.</p>

<h2>Valide JSON Sem Sair do Seu Mac</h2>
<p>Um formatador de JSON que também valida elimina a adivinhação. Cole o JSON e, se estiver malformado, você recebe um erro claro apontando para a linha e o caractere específicos, em vez de um deslocamento de byte bruto. Se for válido, ele renderiza de forma limpa com indentação adequada para que você possa examinar visualmente a estrutura. <a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> lida com ambos os casos na mesma ferramenta — você não precisa saber de antemão se o seu JSON está quebrado.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows JSON formatter validating and highlighting a syntax error on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Detectando Erros Antes de Serem Lançados</h3>
<p>Arquivos de configuração, corpos de requisição de API e dados de fixture vivem e morrem por causa de JSON válido. Rodar uma verificação rápida de validação antes de fazer commit de uma mudança de configuração ou enviar uma requisição de teste captura o tipo de erro de digitação que, do contrário, apareceria como um erro de execução confuso muito mais adiante no pipeline.</p>

<h3>Trabalhando com Entradas Não Confiáveis</h3>
<p>Quando um colega cola um bloco de JSON no Slack, ou você pega um de uma API de terceiros na qual não confia totalmente, validá-lo localmente significa que você nunca precisa enviar esses dados para um site externo apenas para verificar se ele analisa corretamente.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenha o Bellows na Mac App Store</a></p>
`,
  },

  "html-entity-encoder-mac": {
    slug: "html-entity-encoder-mac",
    title: "Codificador e Decodificador de Entidades HTML para Mac",
    description:
      "Renderizar texto enviado por usuários com segurança, ou ler um código-fonte cheio de &amp; e &lt;, ambos se resumem ao mesmo problema tedioso de conversão.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Você está depurando por que um pedaço de texto em uma página web aparece como <code>&amp;amp;</code> em vez de um simples "e" comercial. Ou está escrevendo HTML manualmente e precisa escapar um sinal de menor-que para que o navegador não o interprete como o início de uma tag. De qualquer forma, você está lidando com entidades HTML — o pequeno conjunto de caracteres que precisam de codificação especial para serem exibidos corretamente ou para não quebrar a marcação.</p>

<p>Os comuns são fáceis de lembrar: <code>&amp;</code> se torna <code>&amp;amp;</code>, <code>&lt;</code> se torna <code>&amp;lt;</code>, <code>&gt;</code> se torna <code>&amp;gt;</code>. Mas quando você entra em aspas curvas, travessões, espaços não separáveis e caracteres acentuados, os nomes das entidades deixam de ser intuitivos e você acaba procurando uma tabela de referência toda vez.</p>

<h2>Um Ângulo de Segurança, Não Apenas de Formatação</h2>
<p>A codificação de entidades HTML não é puramente estética. Deixar de codificar conteúdo enviado pelo usuário antes de renderizá-lo em uma página web é um vetor clássico de cross-site scripting. Se a sua aplicação precisar exibir texto bruto — comentários, nomes de usuário, entradas de formulário — dentro de HTML, entender exatamente o que é codificado e como é parte de escrever código seguro, não apenas produzir uma saída de aparência limpa.</p>

<p>Por outro lado, a decodificação é uma necessidade igualmente comum: fazer scraping de uma página web, analisar um feed RSS, ou ler um documento exportado de um CMS costuma deixar você com texto codificado em entidades que precisa ser convertido de volta para caracteres simples antes de usá-lo em qualquer outro lugar.</p>

<h2>Codifique e Decodifique em Uma Única Etapa</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclui um codificador e decodificador de entidades HTML entre suas 41 ferramentas para desenvolvedores. Cole texto bruto para obter entidades HTML devidamente escapadas, ou cole marcação codificada para ver o texto legível. Ambas as direções acontecem instantaneamente e totalmente offline.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows HTML entity encoder and decoder tool on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Limpando Conteúdo Extraído</h3>
<p>Texto extraído de feeds RSS, posts de blog exportados ou HTML raspado costuma chegar cheio de códigos de entidade onde deveria haver pontuação simples. Decodificá-lo em massa antes de armazenar ou exibir em outro lugar evita uma página cheia de <code>&amp;#8217;</code> soltos onde deveria haver um apóstrofo.</p>

<h3>Escrevendo Marcação Manualmente</h3>
<p>Quando você está editando manualmente um template HTML ou um boletim informativo por e-mail e precisa incluir um colchete angular literal ou um "e" comercial no texto visível, codificá-lo corretamente da primeira vez evita um bug de renderização que só aparece depois que você já enviou o e-mail.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenha o Bellows na Mac App Store</a></p>
`,
  },

  "timestamp-converter-mac": {
    slug: "timestamp-converter-mac",
    title: "Conversor de Timestamp Unix para Mac",
    description:
      "Uma linha de log diz 1743984000 e você precisa saber se isso foi há três horas ou três semanas, sem fazer a conta manualmente.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Os timestamps Unix são perfeitos para máquinas e inúteis para humanos. Todo agregador de logs, registro de banco de dados e resposta de API parece armazenar o tempo como um número inteiro bruto contando segundos desde 1º de janeiro de 1970, e todo desenvolvedor já tentou, em algum momento, adivinhar de relance se <code>1725580800</code> é recente ou antigo.</p>

<p>O recurso habitual é uma busca rápida no Google — "1725580800 to date" — que funciona, mas adiciona uma ida e volta ao navegador para algo que deveria ser uma consulta de dois segundos. Ou você escreve uma linha em um console de linguagem: <code>new Date(1725580800000)</code> no console JS do navegador, lembrando de multiplicar por 1000 para milissegundos e torcendo para não ter confundido segundos com milissegundos desde o início.</p>

<h2>Segundos vs. Milissegundos: A Armadilha Clássica</h2>
<p>O tempo Unix normalmente é em segundos, mas o objeto <code>Date</code> do JavaScript espera milissegundos, e algumas APIs (especialmente as construídas em JavaScript) retornam timestamps em milissegundos por padrão. Confundir isso resulta em uma data que está muito no futuro ou presa perto da época de 1970 — um erro que todo desenvolvedor já cometeu pelo menos uma vez ao depurar um problema de "por que essa data parece errada".</p>

<p>Os fusos horários adicionam outra camada. Um timestamp converte para um instante específico, mas exibi-lo no seu horário local versus UTC versus o fuso horário do servidor pode fazer o mesmo valor parecer três horas completamente diferentes, o que importa muito quando você está tentando correlacionar um erro com uma implantação.</p>

<h2>Converta em Ambas as Direções Instantaneamente</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclui um conversor de timestamp que transforma um timestamp Unix em uma data e hora legíveis, e converte uma data de volta em timestamp — ambas as direções, sem necessidade de cálculo. Ele lida com a ambiguidade entre segundos e milissegundos para que você não precise adivinhar.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Unix timestamp converter showing date and time output on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Depurando Logs e Bancos de Dados</h3>
<p>Agregadores de log, linhas de banco de dados e payloads de API armazenam o tempo como números brutos com muito mais frequência do que como strings legíveis. Converter um punhado de timestamps enquanto rastreia um incidente é uma pequena tarefa que acontece dezenas de vezes em qualquer sessão séria de depuração.</p>

<h3>Agendamento e Lógica de Expiração</h3>
<p>Expiração de cache, expiração de token e timestamps de tarefas agendadas são todos tempo Unix por baixo dos panos. Verificar rapidamente a que um determinado valor de expiração realmente corresponde no relógio real ajuda a confirmar que sua lógica de TTL está fazendo o que você pensa que está fazendo.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenha o Bellows na Mac App Store</a></p>
`,
  },

  "markdown-preview-mac-app": {
    slug: "markdown-preview-mac-app",
    title: "Pré-visualização de Markdown para Mac — Cole e Veja",
    description:
      "Escrever um README ou a descrição de um pull request em Markdown bruto significa adivinhar como os cabeçalhos, listas e blocos de código realmente vão renderizar.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Você escreve um README com marcadores aninhados, alguns blocos de código e uma tabela comparando duas abordagens. Parece bom como texto simples no seu editor. Depois você envia para o GitHub e a tabela está desalinhada, um dos seus blocos de código não fechou corretamente, e uma lista numerada reiniciou em 1 no meio por causa de uma linha em branco perdida. Agora você está enviando pequenos commits de correção só para acertar a formatação.</p>

<p>O Markdown é simples o suficiente para escrever de memória para formatação básica, mas tabelas, listas aninhadas e blocos de código têm pequenas peculiaridades de sintaxe que diferem ligeiramente entre renderizadores. O GitHub Flavored Markdown não é idêntico ao CommonMark, que não é idêntico ao que quer que seu gerador de site estático use. A diferença entre "parece certo na minha cabeça" e "renderiza certo na página" é exatamente onde uma pré-visualização em tempo real se mostra valiosa.</p>

<h2>Por Que Fazer Commit para Verificar É um Fluxo de Trabalho Ruim</h2>
<p>Enviar um commit apenas para ver como um README renderiza, depois enviar outro para corrigir uma tabela quebrada, e mais um para corrigir a correção, enche seu histórico de commits com ruído de formatação que não tem nada a ver com o conteúdo real. Também significa que cada ciclo de pré-visualização leva tanto tempo quanto um push e um recarregamento de página — lento o suficiente para você desistir de verificar e simplesmente esperar que fique bom.</p>

<h2>Veja o Resultado Renderizado Enquanto Digita</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclui uma ferramenta de pré-visualização de Markdown que renderiza a saída formatada enquanto você cola ou digita Markdown bruto. Cabeçalhos, listas, tabelas, links e blocos de código são todos renderizados imediatamente, para que você possa detectar erros de formatação antes que acabem em um commit.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Markdown preview tool rendering formatted text on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Escrevendo READMEs e Descrições de PR</h3>
<p>Descrições de pull request e arquivos README costumam ser a primeira coisa que um revisor ou novo colaborador lê. Verificar se cabeçalhos, listas de verificação e imagens vinculadas renderizam corretamente antes de enviar economiza uma rodada de comentários do tipo "você pode corrigir a formatação".</p>

<h3>Redigindo Documentação Offline</h3>
<p>Escrever documentação em um voo ou em uma área com internet instável não significa desistir de ver sua formatação renderizada corretamente. Uma ferramenta de pré-visualização local funciona da mesma forma, esteja você conectado ou não.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenha o Bellows na Mac App Store</a></p>
`,
  },

  "lorem-ipsum-generator-mac": {
    slug: "lorem-ipsum-generator-mac",
    title: "Gerador de Lorem Ipsum para Mac — Copie Qualquer Tamanho",
    description:
      "Preencher um mockup de design ou uma fixture de teste com texto de preenchimento não deveria exigir uma visita a um site toda vez.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Você está construindo um componente de cartão e precisa de três parágrafos de texto de preenchimento para ver como ele quebra linha. Ou está escrevendo uma fixture de teste que precisa de uma string longa para verificar o comportamento de truncamento. De qualquer forma, você precisa de texto de preenchimento, e digitar "asdf asdf asdf" em um campo de texto não fornece comprimentos de palavra ou estrutura de frase realistas para trabalhar.</p>

<p>O Lorem Ipsum tem sido a resposta padrão para esse problema há décadas, precisamente porque seu pseudotexto derivado do latim tem uma distribuição natural de comprimentos de palavra e frase que imita a prosa real sem ser distrativo ou significativo — o olho do leitor não é puxado para realmente ler o texto, que é exatamente o ponto quando você está tentando avaliar um layout.</p>

<h2>Além de Copiar e Colar o Mesmo Parágrafo</h2>
<p>A maioria dos desenvolvedores guarda um único parágrafo de Lorem Ipsum em algum lugar e o reutiliza em todo lugar, o que funciona até você precisar de um bloco muito mais longo para um teste de rolagem, ou um muito mais curto para verificar como uma reticência de truncamento de linha única se comporta. Gerar texto no comprimento exato de que você precisa — uma frase, um parágrafo, vários parágrafos — supera reutilizar o mesmo bloco fixo e cortá-lo ou duplicá-lo manualmente.</p>

<h2>Gere Exatamente o Tamanho de que Você Precisa</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclui um gerador de Lorem Ipsum que produz texto de preenchimento no comprimento que seu layout ou caso de teste exigir, pronto para copiar com um clique. Sem aba de navegador, sem site gerador cheio de anúncios, sem esperar uma página carregar só para pegar três frases.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Lorem Ipsum generator producing placeholder text on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Prototipando Layouts de Interface</h3>
<p>Antes que o conteúdo real exista, o texto de preenchimento permite avaliar se um design lida bem com comprimentos de conteúdo variados — títulos curtos, títulos longos, parágrafos que quebram em duas linhas versus cinco. Gerar texto rapidamente em diferentes comprimentos agiliza essa avaliação.</p>

<h3>Fixtures de Teste e Dados Iniciais</h3>
<p>Testes automatizados que verificam truncamento de texto, limites de caracteres ou comportamento de overflow precisam de strings realistas de um comprimento conhecido. Gerá-las sob demanda é mais rápido do que fixar a mesma string de preenchimento em dezenas de arquivos de teste.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenha o Bellows na Mac App Store</a></p>
`,
  },

  "xml-formatter-mac": {
    slug: "xml-formatter-mac",
    title: "Formatador e Validador de XML para Mac",
    description:
      "Respostas SOAP e arquivos de configuração legados ainda chegam como XML sem indentação, e lê-los sem formatação é mais difícil do que precisa ser.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>O JSON recebe toda a atenção, mas muitos sistemas ainda falam XML — APIs SOAP, arquivos de layout do Android, o <code>pom.xml</code> do Maven, feeds RSS, e uma quantidade considerável de integrações corporativas que não mudam seu formato de dados há quinze anos. Quando um desses chega minificado em uma única linha, ler a estrutura aninhada é genuinamente difícil sem indentação adequada.</p>

<p>Diferente do JSON, o XML também precisa lidar com namespaces, atributos e tags de fechamento automático, o que torna a formatação manual ainda mais propensa a erros. Contar mal os níveis de aninhamento em um envelope SOAP profundamente estruturado é fácil de fazer e difícil de notar até que algo mais adiante quebre.</p>

<h2>Por Que Isso Ainda Importa em 2026</h2>
<p>Apesar do domínio do JSON no design de novas APIs, o XML não foi a lugar nenhum em software corporativo, sistemas governamentais e desenvolvimento Android. Se você integra com o gateway de pagamento de um banco, um sistema de seguros legado ou um serviço web SOAP mais antigo, eventualmente precisará ler e depurar XML bruto — e ficar franzindo os olhos para uma resposta sem formatação não é uma forma produtiva de gastar esse tempo.</p>

<h2>Formate e Valide em Uma Única Passagem</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclui um formatador de XML que indenta corretamente os elementos aninhados e sinaliza marcação malformada — uma tag não fechada, uma aspa de atributo incompatível, uma declaração de namespace quebrada. Cole XML minificado e receba de volta um documento legível e devidamente indentado imediatamente.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows XML formatter showing indented nested elements on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Depurando SOAP e APIs Legadas</h3>
<p>Envelopes SOAP embrulham o payload real em várias camadas de código repetitivo, o que torna tedioso encontrar o campo que realmente importa quando tudo está em uma única linha. Formatar a resposta primeiro transforma uma parede de texto em uma árvore navegável.</p>

<h3>Revisando Arquivos de Configuração e Build</h3>
<p>O <code>AndroidManifest.xml</code> do Android, o <code>pom.xml</code> do Maven e inúmeros formatos de configuração de CI são XML por baixo dos panos. Quando um desses é gerado ou modificado programaticamente e acaba sem indentação, uma passagem rápida de formatação torna tanto o diff quanto o conteúdo mais fáceis de revisar.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenha o Bellows na Mac App Store</a></p>
`,
  },

  "cron-expression-helper-mac": {
    slug: "cron-expression-helper-mac",
    title: "Assistente de Expressão Cron para Mac",
    description:
      "Escrever uma expressão de agendamento manualmente e torcer para que ela signifique o que você pensa é como as tarefas acabam rodando às 3 da manhã em vez de 3 da tarde.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>A sintaxe do cron é cinco campos de números e símbolos que de alguma forma precisam expressar "toda segunda a sexta às 9h, exceto feriados" ou "a cada 15 minutos entre 8h e 18h." Os campos são minuto, hora, dia do mês, mês e dia da semana, em uma ordem que ninguém lembra corretamente na primeira tentativa, e asteriscos, vírgulas, traços e barras significam coisas diferentes dependendo da posição.</p>

<p><code>0 9 * * 1-5</code> parece razoável, mas isso é 9h ou 21h, e <code>1-5</code> significa segunda a sexta ou algo completamente diferente dependendo se a implementação do cron conta domingo como 0 ou 7? Errar isso em um pipeline de implantação, uma tarefa de backup ou um relatório agendado significa falhas silenciosas ou uma tarefa disparando em um horário inconveniente — às vezes por semanas antes que alguém perceba.</p>

<h2>Cada Implementação de Cron Tem Suas Próprias Peculiaridades</h2>
<p>O cron padrão do Unix, os CronJobs do Kubernetes, o AWS EventBridge e várias plataformas de CI usam aproximadamente a mesma sintaxe de cinco campos, mas diferem em pequenos detalhes — se os segundos são suportados, como funciona a numeração do dia da semana, se certas strings abreviadas como <code>@daily</code> são válidas. Escrever um agendamento que funcione corretamente na primeira implantação significa entender exatamente qual variante de cron você está usando.</p>

<h2>Traduza Expressões para Português Simples</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclui um assistente de expressão cron que pega uma string de agendamento e explica o que ela realmente significa em linguagem simples, para que você possa verificar sua intenção antes de implantar uma tarefa agendada em qualquer lugar.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows cron expression helper explaining a schedule string on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Verificando Antes de Implantar</h3>
<p>Uma tarefa agendada que dispara na hora errada costuma ser uma falha silenciosa — nada quebra, ela simplesmente roda quando você não pretendia, às vezes sobrepondo uma janela de manutenção ou sobrecarregando um banco de dados durante o pico de tráfego. Verificar o significado em português simples de uma string cron antes de mesclar uma configuração de implantação captura isso antes que se torne um alerta às 2 da manhã.</p>

<h3>Lendo o Agendamento de Outra Pessoa</h3>
<p>Herdar uma base de código com uma dúzia de tarefas cron existentes significa descobrir o que cada uma faz antes de poder alterá-las com segurança. Traduzir cada expressão rapidamente é mais rápido do que analisar mentalmente cinco campos crípticos, uma tarefa de cada vez.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenha o Bellows na Mac App Store</a></p>
`,
  },

  "yaml-to-json-mac": {
    slug: "yaml-to-json-mac",
    title: "Conversor de YAML para JSON no Mac",
    description:
      "Manifestos do Kubernetes, pipelines de CI e arquivos de configuração falam YAML, mas as ferramentas que você realmente precisa para inspecionar dados geralmente esperam JSON.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>O YAML está em todo lugar na infraestrutura — manifestos do Kubernetes, fluxos de trabalho do GitHub Actions, arquivos do Docker Compose, playbooks do Ansible. É legível e compacto, até que a indentação se torna ambígua, uma tabulação se infiltra onde deveria haver um espaço, ou você precisa alimentar os dados em uma ferramenta que só entende JSON.</p>

<p>Converter entre os dois manualmente é mecânico, mas tedioso: o aninhamento baseado em indentação do YAML se torna as chaves e colchetes do JSON, as strings sem aspas do YAML precisam de aspas, e a sintaxe mais permissiva do YAML (booleanos sem aspas, strings multilinhas, âncoras e referências) nem sempre se mapeia de forma limpa para as regras mais rígidas do JSON.</p>

<h2>Por Que Você Precisa de Ambos os Formatos</h2>
<p>Você pode escrever um manifesto do Kubernetes em YAML porque é mais fácil de ler e controlar por versão, mas precisar do equivalente em JSON para alimentar um script, uma chamada de API, ou um pipeline <code>jq</code> que espera entrada JSON. Ou você está depurando por que a configuração YAML de um pipeline de CI não está sendo analisada como você espera, e ver a estrutura JSON por baixo torna o aninhamento real inequívoco de uma forma que o YAML, sensível a espaços em branco, às vezes não é.</p>

<h2>Converta Entre Formatos Instantaneamente</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclui um conversor de YAML para JSON entre suas 41 ferramentas para desenvolvedores. Cole YAML e obtenha a estrutura JSON equivalente imediatamente, com aninhamento e tipos adequados preservados — sem reformatação manual, sem adivinhar níveis de indentação.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows YAML to JSON converter tool on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Depurando Configurações do Kubernetes e CI</h3>
<p>Quando um manifesto se comporta de forma inesperada, ver a estrutura JSON subjacente remove qualquer ambiguidade sobre como o YAML realmente se aninhou — útil quando uma indentação mal posicionada mudou silenciosamente qual chave pertence a qual objeto pai.</p>

<h3>Alimentando Scripts com Configurações</h3>
<p>Muitas ferramentas de script e automação funcionam de forma mais natural com JSON do que com YAML. Converter um arquivo de configuração uma vez e passar a saída JSON adiante costuma ser mais simples do que ensinar cada script no seu pipeline a analisar YAML diretamente.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenha o Bellows na Mac App Store</a></p>
`,
  },

  "text-diff-tool-mac": {
    slug: "text-diff-tool-mac",
    title: "Ferramenta de Diferença de Texto para Mac — Compare Dois Textos Lado a Lado",
    description:
      "Duas versões de um arquivo de configuração, um rascunho de e-mail ou um parágrafo de texto parecem quase idênticos, e encontrar a única palavra que mudou é surpreendentemente difícil a olho nu.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>O Git lida lindamente com diferenças para código que já está rastreado em um repositório. Mas muita comparação de texto acontece completamente fora do controle de versão: duas versões de uma cláusula legal que um advogado devolveu, uma resposta de API antes e depois de uma mudança no backend, um parágrafo de texto de marketing que um colega "apenas ajustou um pouco." Ler as duas versões lado a lado e tentar identificar a diferença a olho nu é lento e não confiável, especialmente para blocos de texto mais longos.</p>

<p>O olho humano é ruim nesse tipo de comparação porque não está procurando diferenças — está lendo em busca de significado, e dois parágrafos quase idênticos parecem ambos "corretos", a menos que você especificamente pare e compare caractere por caractere.</p>

<h2>Quando o Git Diff Não Está Disponível</h2>
<p>Nem tudo que vale a pena comparar vive em um repositório git. Valores de configuração colados de dois ambientes diferentes, dois rascunhos de um e-mail, ou o antes-e-depois de uma busca e substituição que você não tem certeza se fez corretamente, todos precisam de ferramentas de comparação que funcionem em texto colado arbitrário, não apenas em arquivos rastreados.</p>

<h2>Compare Dois Blocos de Texto Instantaneamente</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclui uma ferramenta de diferença de texto que destaca exatamente o que mudou entre dois blocos de texto colado — adições, exclusões e modificações destacadas visualmente para que você não precise ler cada caractere sozinho.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows text diff tool comparing two blocks of text on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Comparando Configurações Entre Ambientes</h3>
<p>Quando o staging e a produção se comportam de forma diferente, comparar os valores de configuração reais lado a lado costuma revelar o culpado mais rápido do que ler os logs de implantação — uma única variável de ambiente com um erro de digitação ou um valor desatualizado se destaca imediatamente uma vez destacado.</p>

<h3>Revisando Texto Editado</h3>
<p>Quando alguém devolve uma versão "levemente editada" de um documento, ver precisamente o que mudou — em vez de reler tudo esperando notar — transforma uma revisão lenta em uma verificação visual rápida.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenha o Bellows na Mac App Store</a></p>
`,
  },

  "number-base-converter-mac": {
    slug: "number-base-converter-mac",
    title: "Conversor de Base Numérica para Mac — Hex, Binário, Octal, Decimal",
    description:
      "Ler um endereço de memória, um valor de cor ou um código de permissão de arquivo significa traduzir constantemente entre decimal e qualquer base que o contexto exija.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Um endereço de memória aparece como <code>0x7ffee23a1c40</code>. Uma permissão de arquivo é <code>0755</code>. Uma máscara de bits na documentação de um driver está escrita em binário. Um valor de canal de cor precisa ser convertido de decimal para hex de dois dígitos. Nenhuma dessas conversões é difícil individualmente, mas fazê-las repetidamente de cabeça — especialmente binário para hex, que exige agrupar bits em nibbles — é mais lento e propenso a erros do que deveria ser para algo tão mecânico.</p>

<p>Programação de baixo nível, desenvolvimento embarcado, redes e até o desenvolvimento web cotidiano (cores em hex, novamente) exigem transitar entre bases numéricas com frequência suficiente para que manter uma tabela de referência mental para dígitos hexadecimais só ajude até certo ponto, quando os números ficam maiores que um byte ou dois.</p>

<h2>Onde Isso Confunde as Pessoas</h2>
<p>O octal é o traiçoeiro. Uma permissão de arquivo como <code>644</code> parece um número decimal, mas na verdade é base 8, e tratá-la como decimal ao raciocinar sobre ela leva a confusão sobre qual é o padrão de bits real. O binário fica difícil de manejar depois de 16 bits — um valor de 32 bits em binário tem trinta e dois caracteres de comprimento, difícil de ler e fácil de contar errado quando você está tentando isolar bits específicos para uma verificação de flag.</p>

<h2>Converta Entre as Quatro Bases de Uma Vez</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclui um conversor de base numérica que mostra um valor em decimal, hexadecimal, octal e binário simultaneamente. Digite um número em qualquer base e veja as quatro representações serem atualizadas juntas — sem conversão separada para cada par.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows number base converter showing hex, binary, octal, and decimal on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Trabalho de Baixo Nível e Embarcado</h3>
<p>Ler valores de registrador, máscaras de bits e endereços de memória em firmware embarcado ou programação de sistemas significa transitar fluentemente entre hex e binário. Ver ambos ao mesmo tempo, junto com decimal, remove uma camada de tradução manual de uma tarefa já cheia de detalhes.</p>

<h3>Permissões de Arquivo e Redes</h3>
<p>Permissões de arquivo do Unix, máscaras de sub-rede e várias flags binárias em protocolos de rede são comumente expressas em octal ou binário, mas raciocinadas em decimal. Uma conversão rápida confirma exatamente o que uma string de permissão ou um byte de flag representa antes de você alterá-lo.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenha o Bellows na Mac App Store</a></p>
`,
  },

  "csv-to-json-mac": {
    slug: "csv-to-json-mac",
    title: "Conversor de CSV para JSON no Mac",
    description:
      "Uma exportação de planilha precisa se tornar dados estruturados para uma chamada de API ou uma fixture de teste, e escrever um script pontual para isso toda vez é exagero.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Alguém da equipe de vendas exporta uma planilha como CSV e pede para você "simplesmente carregar no sistema." O sistema espera JSON. Então você escreve um script rápido em Python ou Node com uma biblioteca de análise de CSV, mapeia as colunas para campos, trata a linha de cabeçalho e torce para que nenhum dos valores contenha uma vírgula que quebre sua lógica ingênua de divisão por vírgula (geralmente contém, escondida dentro de um campo entre aspas).</p>

<p>Essa é uma tarefa que os desenvolvedores resolvem repetidamente, cada vez escrevendo um código descartável ligeiramente diferente, porque o CSV aparece constantemente como formato de exportação de planilhas, bancos de dados e ferramentas de análise, enquanto a maioria das ferramentas e APIs modernas espera JSON.</p>

<h2>A Simplicidade Enganosa do CSV</h2>
<p>O CSV parece trivial — divida por vírgulas, divida por quebras de linha, pronto. Depois você encontra um campo contendo uma vírgula, envolto em aspas conforme a especificação, e seu analisador ingênuo quebra. Ou um campo contém uma quebra de linha embutida dentro de aspas, o que uma leitura simples linha por linha não consegue tratar corretamente. Fazer a análise de CSV corretamente na verdade exige respeitar as regras de aspas, por isso um conversor dedicado supera escrevê-lo do zero toda vez.</p>

<h2>Converta CSV em JSON Estruturado</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclui um conversor de CSV para JSON que trata corretamente campos entre aspas e linhas de cabeçalho, transformando uma exportação de planilha em um array de objetos JSON prontos para colar em uma fixture de teste, um corpo de requisição ou um script.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows CSV to JSON converter tool on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Carregando Dados de Planilha em APIs</h3>
<p>Quando uma importação de dados pontual não justifica escrever e manter um script completo, converter a exportação CSV diretamente para JSON e colá-la em uma ferramenta de teste de API ou em um arquivo de dados iniciais de banco de dados faz o trabalho em uma fração do tempo.</p>

<h3>Construindo Fixtures de Teste a Partir de Dados Reais</h3>
<p>Exportar uma amostra de dados semelhantes aos de produção como CSV de uma planilha e convertê-la para JSON é uma forma rápida de gerar fixtures de teste realistas sem escrever objetos JSON manualmente campo por campo.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenha o Bellows na Mac App Store</a></p>
`,
  },

  "mac-developer-tools-no-internet": {
    slug: "mac-developer-tools-no-internet",
    title: "Ferramentas de Desenvolvedor para Mac Que Funcionam Sem Internet",
    description:
      "Trabalhar em um voo, em uma sala de servidores no subsolo, ou apenas em um Wi-Fi instável de cafeteria não deveria significar perder acesso aos utilitários que você usa constantemente.",
    date: "2026-09-06",
    readTime: "5 min de leitura",
    content: `
<p>Tente formatar um JSON em um avião sem Wi-Fi e você vai perceber rapidamente quantos dos seus utilitários diários de desenvolvedor são, na verdade, sites disfarçados. jwt.io, regex101, formatadores de JSON, ferramentas Base64 — todos excelentes, todos completamente inúteis no momento em que sua conexão cai. Você acaba ficando sem, ou tateando por comandos de Terminal que meio que lembra.</p>

<p>Isso não é apenas um incômodo para viagens. Salas de servidores, instalações seguras e ambientes isolados de rede costumam não ter acesso à internet por design. Até um Wi-Fi de escritório instável pode transformar uma tarefa de dois segundos em uma espera frustrante por uma página que não carrega.</p>

<h2>A Dependência Oculta no Seu Kit de Ferramentas</h2>
<p>A maioria dos desenvolvedores não percebe o quanto suas ferramentas do dia a dia dependem de uma conexão ativa até que ela desapareça. Uma rápida auditoria mental é reveladora: quantos dos utilitários que você usa várias vezes ao dia são, na verdade, abas de navegador apontadas para o servidor de outra pessoa? Para a maioria dos desenvolvedores, a resposta é mais do que eles esperam.</p>

<p>Além do problema de disponibilidade, há também um problema de dados. Enviar tokens, credenciais ou dados internos para um site de terceiros para decodificar ou formatar significa confiar nas práticas de segurança e privacidade desse site — confiança que pode não ser justificada, e que muitas políticas de segurança corporativas proíbem explicitamente.</p>

<h2>Um Kit de Ferramentas Que Nunca Precisa de Conexão</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> reúne 41 ferramentas de desenvolvedor em um app nativo para macOS que roda inteiramente offline — sem exceções, sem "precisa de internet para esse recurso específico." Formatação de JSON, decodificação de JWT, hashing, teste de regex, codificação e decodificação, e muito mais, tudo funciona de forma idêntica esteja você em fibra gigabit ou a nove mil metros de altura sem sinal.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows offline developer tools app running on macOS with no network connection" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Trabalhando em Ambientes Seguros ou Isolados de Rede</h3>
<p>Parte do desenvolvimento acontece em ambientes onde o acesso à internet é restrito ou totalmente ausente por política — contratos de defesa, infraestrutura financeira, certos trabalhos governamentais. Ferramentas que exigem uma conexão ativa simplesmente não são utilizáveis ali, não importa quão boas sejam.</p>

<h3>Viajando Sem Perder Produtividade</h3>
<p>Voos, trens que passam por túneis e locais de trabalho remoto com conectividade instável não deveriam ditar quais tarefas de desenvolvedor você pode ou não fazer. Um kit de ferramentas que prioriza o offline remove a conectividade da lista de coisas que podem te atrasar.</p>

<h3>Privacidade Como Efeito Colateral de Estar Offline</h3>
<p>Um app que nunca faz requisições de rede não pode vazar seus dados para um servidor, intencionalmente ou não. Para desenvolvedores que lidam com tokens, segredos ou informações proprietárias, offline não é só sobre disponibilidade — é uma garantia significativa de privacidade.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenha o Bellows na Mac App Store</a></p>
`,
  },

  "clipboard-formatter-mac": {
    slug: "clipboard-formatter-mac",
    title: "Formatador de Área de Transferência para Mac — Detecte e Sugira Ferramentas Automaticamente",
    description:
      "Decidir qual formatador, decodificador ou conversor usar já é, por si só, uma pequena decisão que você toma dezenas de vezes ao dia sem perceber a sobrecarga.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Você copia uma string. Antes de poder fazer qualquer coisa com ela, você precisa descobrir o que ela é e qual ferramenta a trata. É um JWT? Base64? Uma cor hex? Um UUID simples? Para um desenvolvedor experiente, esse reconhecimento acontece quase instantaneamente, mas ainda é um pequeno passo cognitivo entre copiar algo e realmente agir sobre isso — e é um passo que se repete toda vez.</p>

<p>Multiplique essa etapa de reconhecimento e navegação pelas dezenas de pequenas tarefas utilitárias em um dia típico, e isso se acumula em uma quantidade surpreendente de sobrecarga mental gasta apenas para se direcionar à ferramenta certa, antes mesmo de começar a tarefa real.</p>

<h2>Reconhecimento de Padrões É um Problema Solucionável</h2>
<p>JWTs têm uma estrutura distintiva de três partes separadas por pontos, com um cabeçalho Base64url reconhecível. Cores hex começam com um cerquilha e têm exatamente seis ou oito caracteres hexadecimais. UUIDs seguem um formato rígido de oito-quatro-quatro-quatro-doze separado por hífens. JSON começa com uma chave ou colchete. Esses padrões são precisos o suficiente para que o software os reconheça tão rápido quanto um desenvolvedor experiente, sem exigir que o desenvolvedor faça a identificação manualmente toda vez.</p>

<h2>Deixe a Área de Transferência Sugerir a Ferramenta</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> lê sua área de transferência quando você o abre e sugere a ferramenta correspondente automaticamente. Copie um JWT e o decodificador já está destacado. Copie JSON e o formatador está a um clique. Copie uma cor hex e o conversor de cores está pronto. A etapa de reconhecimento acontece instantaneamente, antes mesmo de você abrir a barra lateral.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows clipboard detection suggesting the matching developer tool on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Menos Cliques, Menos Fadiga de Decisão</h3>
<p>Remover a etapa de "qual ferramenta eu preciso" de uma tarefa repetitiva parece pouco isoladamente, mas ao longo de dezenas de interações diárias remove uma quantidade significativa de atrito — atrito que, de outra forma, te empurraria a simplesmente deixar os dados sem formatação porque buscar a ferramenta certa parecia esforço demais.</p>

<h3>Útil para Ferramentas Que Você Esquece Que Existem</h3>
<p>Com 41 ferramentas disponíveis, é fácil esquecer que um conversor ou gerador específico existe. As sugestões baseadas na área de transferência trazem a ferramenta relevante à tona mesmo quando você não pensaria em procurá-la, o que costuma ser mais valioso do que o tempo economizado em ferramentas que você já usa diariamente.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenha o Bellows na Mac App Store</a></p>
`,
  },

  "string-escape-unescape-mac": {
    slug: "string-escape-unescape-mac",
    title: "Escape e Desescape de String para Mac — JSON, HTML, URL",
    description:
      "Incorporar um formato de string dentro de outro significa escapar aspas, barras e caracteres especiais corretamente, ou assistir seu analisador engasgar.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Você precisa incorporar uma string JSON dentro de outra string JSON — talvez uma mensagem de log que ela mesma contenha um payload JSON. Ou está escrevendo um comando shell que inclui uma string com aspas. Ou está construindo uma URL que precisa carregar outra URL como parâmetro de consulta. Cada uma dessas situações exige escape: converter caracteres que de outra forma seriam interpretados como sintaxe em uma forma tratada como dado literal.</p>

<p>Contextos diferentes escapam de formas diferentes. O JSON escapa aspas com uma barra invertida e representa caracteres especiais como quebras de linha como <code>\\n</code>. O escape de shell depende de qual estilo de aspas você está usando. O escape de URL codifica caracteres reservados em percentual de forma totalmente diferente dos outros dois. Confundir isso — aplicar escape de JSON onde era necessário escape de URL — produz uma saída que parece quase certa e falha de formas confusas.</p>

<h2>O Problema do Escape Duplo</h2>
<p>Um dos bugs mais comuns nessa área é o escape duplo: uma string é escapada uma vez pelo seu código e novamente por uma biblioteca ou framework que assume que ela ainda está bruta, transformando uma única barra invertida em duas e corrompendo silenciosamente os dados. Diagnosticar isso exige desescapar passo a passo para ver exatamente onde a camada extra foi introduzida — tedioso de fazer manualmente, especialmente em uma string longa.</p>

<h2>Escape e Desescape para Múltiplos Formatos</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> inclui ferramentas de escape de string cobrindo os formatos JSON, HTML e URL entre suas 41 ferramentas para desenvolvedores. Cole uma string bruta para vê-la corretamente escapada para um determinado contexto, ou cole uma string escapada para ver o valor bruto original.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows string escape and unescape tool on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Incorporando Strings Dentro de Strings</h3>
<p>Construir um payload JSON que ele mesmo contém uma string JSON como valor de campo, ou montar uma mensagem de log que precisa incluir com segurança entrada arbitrária de usuário, ambos exigem escape correto para evitar corromper a estrutura externa.</p>

<h3>Diagnosticando Dados com Escape Duplo</h3>
<p>Quando uma string parece ter sido escapada mais vezes do que deveria, desescapá-la camada por camada revela exatamente onde a codificação extra foi introduzida, que geralmente é a forma mais rápida de rastrear o código responsável.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenha o Bellows na Mac App Store</a></p>
`,
  },

  "mac-developer-utility-menu-bar": {
    slug: "mac-developer-utility-menu-bar",
    title: "Utilitário para Desenvolvedores na Barra de Menus do Mac — Acesso Rápido a 41 Ferramentas",
    description:
      "O Dock é para apps que você olha. A barra de menus é para ferramentas que você usa e dispensa em segundos — e a maioria dos utilitários de desenvolvedor pertence à segunda categoria.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Pense em como você realmente usa um formatador de JSON ou um gerador de UUID. Você não o abre, admira a interface e se acomoda para uma sessão. Você abre, faz uma pequena coisa e fecha — a interação inteira dura alguns segundos. Esse padrão de uso combina mal com um ícone do Dock, que sugere um app para o qual você troca e no qual passa tempo, e combina muito melhor com a barra de menus, construída exatamente para esse tipo de interação rápida, de entrar e sair.</p>

<p>Apps baseados no Dock também competem por espaço com tudo mais que você tem aberto — Cmd-Tab percorre todos eles, o Mission Control agrupa suas janelas, e encontrar o certo entre uma dúzia de apps abertos leva um momento de varredura visual. Um ícone na barra de menus fica em um local fixo e previsível que nunca fica soterrado.</p>

<h2>Por Que a Localização Importa Mais do que Parece</h2>
<p>O valor de um utilitário de desenvolvedor é inversamente proporcional à quantidade de atrito entre você e usá-lo. Uma ferramenta que leva dez segundos para abrir custa mais do que esses dez segundos — custa o contexto mental que você perde ao sair da sua tarefa atual para ir encontrá-la. A localização na barra de menus minimiza esse custo mantendo a ferramenta visualmente presente e a um clique de distância o tempo todo, sem ocupar espaço na tela ou no Dock enquanto você não a está usando.</p>

<h2>41 Ferramentas, Um Ícone na Barra de Menus</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a> fica na sua barra de menus e te dá acesso a 41 ferramentas para desenvolvedores — formatadores, codificadores, geradores, conversores e ferramentas de texto — sem nunca precisar de um ícone no Dock ou de uma janela dedicada. Clique no ícone, escolha uma ferramenta na barra lateral, faça o que precisa, e ele sai do seu caminho novamente.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows menu bar icon providing quick access to 41 developer tools on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Zero Ocupação no Dock</h3>
<p>Para desenvolvedores que mantêm um Dock enxuto apenas com os apps que usam para sessões longas — um editor, um navegador, um terminal — um utilitário de barra de menus se encaixa naturalmente nessa filosofia. Está ali quando necessário e invisível no resto do tempo.</p>

<h3>Janela Independente Quando Você Precisar</h3>
<p>Algumas tarefas — testar vários padrões de regex em sequência, ou converter um lote de cores — se beneficiam de uma janela persistente em vez de um menu suspenso na barra de menus. O Bellows suporta ambos os modos, então consultas rápidas ficam na barra de menus enquanto sessões mais longas ganham uma janela adequada ao lado do seu editor.</p>

<h3>Recentes Mantêm Suas Ferramentas Comuns no Topo</h3>
<p>Com 41 ferramentas disponíveis, as que você usa com mais frequência não deveriam exigir a mesma quantidade de busca que as que você usa raramente. As ferramentas usadas recentemente aparecem automaticamente, para que seus hábitos diários moldem a interface ao longo do tempo, em vez do contrário.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Obtenha o Bellows na Mac App Store</a></p>
`,
  },
};
