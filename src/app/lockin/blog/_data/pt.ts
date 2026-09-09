import type { ArticleSet } from "./index";

export const ptArticles: ArticleSet = {
  "block-distracting-websites-mac": {
    slug: "block-distracting-websites-mac",
    title: "Como Bloquear Sites Distraentes no Mac",
    description: "Você abre o navegador para verificar uma coisa e 40 minutos depois está mergulhado em uma thread do Reddit. macOS não vem com um bloqueador de sites real — aqui está como consertar isso.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Você se senta para trabalhar, abre Safari ou Chrome, e antes mesmo de alcançar a aba que precisava, já digitou "r-e-d" na barra de endereços por memória muscular. Quarenta minutos depois você emerge de uma thread sobre se hot dogs são sanduíches. O trabalho ainda está esperando.</p>

<p>Isso não é um problema de força de vontade. É um problema de design. Navegadores são construídos para você chegar ao conteúdo o mais rápido possível — incluindo o conteúdo que você está tentando evitar.</p>

<h2>Por Que macOS Não Resolve Isso</h2>
<p>Apple adicionou limites de sites do Screen Time no macOS Catalina, mas funcionam apenas no Safari. Se você também usa Chrome, Firefox, Arc ou qualquer outro navegador, esses limites não fazem nada. Você também pode descartar prompts do Screen Time com um único clique — é um obstáculo, não uma parede.</p>

<p>Editar seu arquivo <code>/etc/hosts</code> funciona em teoria, mas requer comandos de Terminal, acesso sudo e limpeza manual quando terminar. Não é prático para uso diário e não funciona em um timer.</p>

<h2>Bloquear Websites Em Todo o Sistema com Lock In!</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> usa uma extensão do sistema macOS para bloquear sites distraentes em todos os navegadores do seu Mac — Safari, Chrome, Firefox, Arc, Brave, todos eles. Você escolhe os sites, define um timer, e eles desaparecem até o fim da sessão.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! website blocker for Mac showing blocked sites during a focus session" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Listas de Bloqueio Pré-configuradas</h3>
<p>Lock In! vem com listas de bloqueio curadas para Redes Sociais, Entretenimento, Notícias e Compras. Um clique bloqueia dezenas de domínios que desperdiçam tempo. Você também pode adicionar URLs customizadas para qualquer coisa específica dos seus hábitos de navegação.</p>

<h3>Sessões com Timer</h3>
<p>Defina uma sessão de foco para 25 minutos, uma hora ou qualquer duração customizada. Os sites bloqueados permanecem bloqueados até o timer acabar. Nenhuma extensão de navegador para desabilitar, nenhum arquivo hosts para reverter — funciona no nível do sistema.</p>

<h3>Modo Rigoroso</h3>
<p>Se você é do tipo que cancela um bloqueio dois minutos depois, ative o Modo Rigoroso. Uma vez que uma sessão começa, não há forma de encerrá-la cedo. Os sites permanecem bloqueados. Ponto final.</p>

<p>Bloquear sites distraentes não deveria exigir um diploma em ciência da computação. Deveria levar dois cliques na sua barra de menu. <a href="https://apps.apple.com/app/lockin/id6802325423">Obtenha Lock In! no Mac App Store</a></p>
`,
  },
  "website-blocker-focus-mac": {
    slug: "website-blocker-focus-mac",
    title: "Melhor Bloqueador de Sites para Foco no Mac",
    description: "Extensões de navegador são fáceis de desabilitar, Screen Time só funciona no Safari e hacks de arquivo hosts precisam do Terminal. Um bloqueador no nível do sistema que funciona em todos os navegadores é a peça que falta.",
    date: "2026-09-06",
    readTime: "5 min de leitura",
    content: `
<p>Existem dezenas de bloqueadores de sites para Mac. A maioria deles são extensões de navegador — e esse é o problema. Extensões podem ser alternadas em três segundos. Quando seu cérebro está desejando uma distração, três segundos é nada.</p>

<p>Um bloqueador de sites orientado para foco precisa funcionar abaixo do nível do navegador. Precisa bloquear sites independentemente de qual navegador você abra, e precisa tornar o desbloqueio inconveniente o suficiente para você não se importar.</p>

<h2>Por Que a Maioria dos Bloqueadores Fica Aquém</h2>
<p>Extensões de navegador controlam apenas um navegador. Se você bloquear Twitter no Chrome, pode abrir Safari e rolar livremente. Limites de sites do Screen Time só se aplicam ao Safari e podem ser descartados com um clique. Edições de arquivo hosts requerem acesso ao Terminal e deixam resíduos se você esquecer de limpá-los.</p>

<p>Um bloqueador que depende da sua cooperação não está realmente bloqueando nada. Está sugerindo. E sugestões não funcionam quando dopamina está envolvida.</p>

<h2>Lock In! — Bloqueio no Nível do Sistema da Barra de Menu</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> funciona como uma extensão do sistema macOS. Isso significa que intercepta solicitações no nível da rede, antes de qualquer navegador as ver. Domínios bloqueados falham em carregar no Safari, Chrome, Firefox, Arc — todos os apps que tocam a rede.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! menu bar focus blocker for Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Sessões de Foco de Um Clique</h3>
<p>Lock In! fica na sua barra de menu. Clique, escolha uma duração e inicie uma sessão. Sua lista de bloqueio é ativada instantaneamente. Sem abas de navegador para fechar, sem páginas de configuração para navegar — apenas clique e foque.</p>

<h3>Bloqueio de Apps Também</h3>
<p>Sites não são o único problema. Lock In! também pode bloquear apps distraentes. Quando você tenta abrir um app bloqueado durante uma sessão, um painel de tela cheia o intercepta e envia você de volta ao trabalho. Cobre ambos os vetores de ataque — navegador e app.</p>

<h3>Estatísticas Diárias</h3>
<p>Um gráfico de barras de 7 dias mostra seu histórico de foco. Ver uma série de sessões de trabalho profundo é motivador. Ver uma lacuna faz você querer preenchê-la. Os dados mantêm você honesto sem ser pregador sobre isso.</p>

<h3>Hotkeys Globais</h3>
<p>Inicie ou verifique uma sessão sem tocar o mouse. Atribua um atalho de teclado global e dispare o modo de foco de qualquer lugar no seu Mac.</p>

<p>O melhor bloqueador de sites é aquele que você não consegue enganar. <a href="https://apps.apple.com/app/lockin/id6802325423">Obtenha Lock In! no Mac App Store</a></p>
`,
  },
  "block-tiktok-mac": {
    slug: "block-tiktok-mac",
    title: "Como Bloquear TikTok no Mac Durante o Trabalho",
    description: "O algoritmo do TikTok é projetado para mantê-lo rolando indefinidamente. Quando está uma aba de distância do seu trabalho, apenas força de vontade não é suficiente.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>TikTok é a armadilha de atenção mais eficaz já construída. Seu algoritmo aprende o que o mantém assistindo e serve um fluxo infinito disso. Abrir TikTok "apenas por um segundo" durante o trabalho é como comer um chip de um saco projetado para você terminar.</p>

<p>No seu telefone, você pode deletar o app ou usar Screen Time no iOS. Mas no seu Mac, tiktok.com está sempre uma aba de distância. E macOS não oferece uma forma simples de bloqueá-lo.</p>

<h2>Por Que TikTok no Mac É Especialmente Perigoso</h2>
<p>No seu telefone, TikTok pelo menos parece uma atividade separada — você fisicamente pega um dispositivo diferente. No seu Mac, é o mesmo navegador em que você trabalha. Você está escrevendo um relatório em uma aba, e TikTok está a um Cmd+T de distância. Não há mudança de contexto, sem atrito, nada para fazer seu cérebro registrar que você deixou o modo de trabalho.</p>

<p>A versão web do TikTok é totalmente funcional agora. A página Para Você funciona de forma idêntica. O algoritmo é igualmente pegajoso. E diferentemente do seu telefone, seu Mac tem uma tela maior e um teclado — você pode mergulhar ainda mais fundo em seções de comentários e buscas.</p>

<h2>Bloquear TikTok Em Todo o Sistema com Lock In!</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> bloqueia tiktok.com no nível do sistema usando uma extensão de rede macOS. Não importa qual navegador você use — Safari, Chrome, Firefox, Arc — TikTok não carregará durante sua sessão de foco.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! blocking TikTok on Mac during a focus session" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Adicione TikTok à Sua Lista de Bloqueio</h3>
<p>Lock In! inclui uma lista de bloqueio pré-configurada de Redes Sociais que cobre TikTok, Instagram, Twitter, Facebook e mais. Ative a pré-configuração ou adicione tiktok.com como uma entrada customizada — de qualquer forma, um clique o bloqueia pela duração da sua sessão.</p>

<h3>Modo Rigoroso para Zero Exceções</h3>
<p>Saber que você pode cancelar um bloqueio e abrir TikTok mina todo o ponto. Ative o Modo Rigoroso e o bloqueio se torna permanente até o timer acabar. Não há substituto, sem botão de emergência, sem "apenas cinco minutos". Você define o comprimento da sessão, e TikTok permanece bloqueado para tudo isso.</p>

<h3>Combine com Bloqueio de Apps</h3>
<p>Se você tem um app de desktop TikTok ou usa um wrapper como Unite, Lock In! pode bloquear esses também. Seu recurso de bloqueio de app mostra um painel de interrupção de tela cheia quando você tenta iniciar um app bloqueado, então cada caminho para TikTok está fechado.</p>

<p>O algoritmo não dorme, então seu bloqueador não deveria ter brechas. <a href="https://apps.apple.com/app/lockin/id6802325423">Obtenha Lock In! no Mac App Store</a></p>
`,
  },
  "cold-turkey-alternative-mac": {
    slug: "cold-turkey-alternative-mac",
    title: "Alternativa Cold Turkey para Mac",
    description: "Cold Turkey é poderoso mas voltado para Windows, e a versão Mac ficou para trás. Uma alternativa nativa do macOS que usa extensões do sistema pode preencher essa lacuna.",
    date: "2026-09-06",
    readTime: "5 min de leitura",
    content: `
<p>Cold Turkey é um dos bloqueadores de sites mais bem conhecidos, e por uma boa razão — seu bloqueio rigoroso é genuinamente difícil de contornar. Mas Cold Turkey foi construído para Windows primeiro. A versão Mac historicamente ficou para trás em atualizações, e nem sempre se sente em casa no macOS. Se você tem procurado por algo que funcione nativamente no Mac e entregue o mesmo bloqueio intransigente, há uma opção melhor agora.</p>

<h2>Onde Cold Turkey Fica Aquém no Mac</h2>
<p>A versão Mac do Cold Turkey usa um mecanismo de bloqueio diferente do seu correspondente Windows. macOS é um sistema operacional mais bloqueado, e ferramentas que dependem de workarounds em vez de APIs oficiais da Apple podem quebrar com atualizações do sistema. O app também carece da integração visual que usuários do Mac esperam — não parece um app macOS nativo porque não é.</p>

<p>Além disso, a interface do Cold Turkey carrega complexidade de suas raízes Windows. Recursos como bloqueios programados, listas de permissão e timers de pausa são poderosos mas podem parecer exagerados se tudo que você quer é bloquear Twitter por duas horas e fazer algum trabalho.</p>

<h2>Lock In! — Bloqueio Nativo do Mac Sem Workarounds</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> é construído exclusivamente para macOS e distribuído pelo Mac App Store. Usa o framework oficial Network Extension da Apple para bloquear websites no nível do sistema — não hacks de navegador, não truques de proxy, não edições de arquivo hosts. Isso significa que funciona confiável em atualizações do macOS e não requer desabilitar System Integrity Protection ou conceder permissões incomuns.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! as a Cold Turkey alternative for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Modo Rigoroso Rivaliza com o Lockout do Cold Turkey</h3>
<p>O recurso assinatura do Cold Turkey é seu modo rigoroso que o previne de desbloquear. Lock In! oferece o mesmo dispositivo de comprometimento — ative o Modo Rigoroso e sua sessão não pode ser cancelada cedo. Sem truque de desinstalação, sem atalho de quit. Você escolheu sua duração, e você vive com isso.</p>

<h3>Bloqueio de Website e App Combinados</h3>
<p>Cold Turkey separa bloqueio de website e app em produtos diferentes (Cold Turkey Blocker e Cold Turkey Writer). Lock In! lida com ambos em um app. Apps bloqueados acionam um painel de interrupção de tela cheia, e websites bloqueados falham em carregar em qualquer navegador.</p>

<h3>Simplicidade da Barra de Menu</h3>
<p>Lock In! fica na sua barra de menu. Não há janela principal para gerenciar, sem interface de agendamento complexa. Clique no ícone, escolha uma duração, inicie uma sessão. Listas de bloqueio pré-configuradas para Social, Entretenimento, Notícias e Compras significam que você pode ir de zero a foco em dois cliques.</p>

<p>O mesmo bloqueio inquebrável, experiência nativa do Mac. <a href="https://apps.apple.com/app/lockin/id6802325423">Obtenha Lock In! no Mac App Store</a></p>
`,
  },
  "block-apps-during-focus-mac": {
    slug: "block-apps-during-focus-mac",
    title: "Como Bloquear Apps Durante Sessões de Foco no Mac",
    description: "Bloquear websites é apenas metade da batalha. Slack, Discord, iMessage e jogos vivem fora do navegador — e o modo Focus do macOS não impede você de abri-los.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Você bloqueou Reddit e Twitter no seu navegador. Você está se sentindo disciplinado. Aí você clica em Discord "para verificar uma mensagem" e 30 minutos desaparecem em um canal de memes. Ou você abre Slack para responder a uma thread e acaba lendo cada canal em que está.</p>

<p>Bloquear websites resolve metade do problema de distração. A outra metade vive na sua pasta Aplicativos.</p>

<h2>Por Que o Modo Focus do macOS Não É Suficiente</h2>
<p>O modo Focus integrado da Apple filtra notificações — pode silenciar pings de apps específicos. Mas não o impede de abrir esses apps. Você ainda pode iniciar Discord, Slack, Mensagens ou Steam durante uma sessão "Não Perturbe". O modo Focus esconde os alertas; não bloqueia a fonte.</p>

<p>Isso significa que o modo Focus só ajuda com interrupções, não com distrações auto-infligidas. Se você é o que está abrindo o app, o modo Focus não faz nada.</p>

<h2>Lock In! Bloqueia Apps e Websites Juntos</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> vai além do bloqueio de websites. Quando você adiciona um app à sua lista de bloqueio e inicia uma sessão, qualquer tentativa de abrir esse app aciona um painel de interrupção de tela cheia. Cobre sua tela, diz que o app está bloqueado e envia você de volta ao que estava fazendo.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! blocking distracting apps during a focus session on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Interrupção de Tela Cheia, Não um Sussurro Gentil</h3>
<p>Alguns bloqueadores mostram uma pequena notificação quando você abre um app bloqueado. Isso é fácil de descartar. O painel de interrupção do Lock In! toma a tela inteira. É impossível ignorar e impossível usar o app bloqueado atrás dele. Este é o ponto — se o bloqueio é fácil de contornar, não é um bloqueio.</p>

<h3>Combine com Bloqueio de Website</h3>
<p>O verdadeiro poder é combinar ambos. Bloqueie websites de redes sociais em cada navegador via extensão do sistema e bloqueie apps de mensagens e entretenimento via bloqueador de app. Durante uma sessão Lock In!, cada caminho de distração comum está fechado — navegador e app.</p>

<h3>Listas Pré-configuradas o Deixam Começar</h3>
<p>Lock In! inclui listas de bloqueio pré-configuradas para categorias comuns de distração: Social, Entretenimento, Notícias e Compras. Elas cobrem websites populares e você pode adicionar apps específicos junto com elas. Construa uma lista de bloqueio uma vez e reutilize a cada sessão.</p>

<p>Bloqueie os apps, não apenas as notificações. <a href="https://apps.apple.com/app/lockin/id6802325423">Obtenha Lock In! no Mac App Store</a></p>
`,
  },
  "mac-screen-time-website-blocking-limitations": {
    slug: "mac-screen-time-website-blocking-limitations",
    title: "Bloqueio de Sites do Mac Screen Time Está Quebrado — Aqui Está o Porquê",
    description: "Screen Time no Mac promete limites de sites, mas só funciona no Safari, pode ser descartado com um clique e quebra regularmente com atualizações do macOS.",
    date: "2026-09-06",
    readTime: "5 min de leitura",
    content: `
<p>Se você já tentou usar Screen Time no seu Mac para bloquear websites distraentes, você já descobriu a frustração. Apple construiu Screen Time principalmente para controles parentais em iPhones. A versão Mac é um pensamento posterior, e seus recursos de bloqueio de websites refletem isso.</p>

<h2>Os Problemas com Bloqueio de Websites do Screen Time</h2>

<h3>Apenas Safari</h3>
<p>Restrições de websites do Screen Time se aplicam apenas ao Safari. Se você usa Chrome, Firefox, Arc, Brave ou qualquer outro navegador — e a maioria dos profissionais usa pelo menos um navegador não-Safari — os limites não se aplicam. Você pode bloquear twitter.com no Screen Time e ainda rolar Twitter no Chrome sem restrição alguma.</p>

<h3>Descarte de Um Clique</h3>
<p>Quando você atinge um limite de website do Screen Time no Safari, vê um prompt. Esse prompt tem um botão "Ignorar Limite". Um clique e você está de volta no site. O limite reinicia no próximo dia e você faz isso novamente. É um lembrete, não um bloqueio — e lembretes não funcionam contra distrações habituais.</p>

<h3>Não Confiável Entre Atualizações</h3>
<p>Screen Time no Mac tem um histórico de bugs. Limites que param de sincronizar, restrições que silenciosamente se desabilitam sozinhas, categorias que não incluem os websites corretos. Cada atualização do macOS parece corrigir alguns problemas e introduzir outros. Não é uma ferramenta em que você pode confiar para disciplina de foco diária.</p>

<h3>Sem Sessões Baseadas em Timer</h3>
<p>Screen Time usa limites de tempo diários — "30 minutos de redes sociais por dia". Mas não é assim que o trabalho de foco acontece. Você precisa bloquear sites pelas próximas 2 horas enquanto termina um projeto, não gerenciar um orçamento diário. Screen Time não suporta sessões de foco com timer alguma.</p>

<h2>Lock In! Faz o Que Screen Time Deveria</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> foi construído especificamente porque Screen Time falha neste trabalho. Usa uma extensão do sistema macOS para bloquear websites em cada navegador — Safari, Chrome, Firefox, Arc, todos eles. Nenhum navegador está isento.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! replacing Screen Time for website blocking on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Sem Botão de Descarte</h3>
<p>Websites bloqueados simplesmente não carregam. Não há prompt para ignorar, sem botão para clicar através. No Modo Rigoroso, você nem consegue encerrar a sessão cedo. O bloqueio é absoluto.</p>

<h3>Baseado em Sessão, Não Baseado em Orçamento</h3>
<p>Lock In! usa sessões com timer. Bloqueie suas distrações por 25 minutos, 1 hora ou 4 horas. Quando a sessão termina, tudo desbloqueia automaticamente. Isso se ajusta a como as sessões de trabalho reais funcionam — rajadas concentradas, não racionamento o dia todo.</p>

<p>Pare de lutar contra as limitações do Screen Time. <a href="https://apps.apple.com/app/lockin/id6802325423">Obtenha Lock In! no Mac App Store</a></p>
`,
  },
  "pomodoro-website-blocker-mac": {
    slug: "pomodoro-website-blocker-mac",
    title: "Temporizador Pomodoro com Bloqueio de Websites para Mac",
    description: "A técnica Pomodoro desmorona quando seu sprint de foco de 25 minutos inclui um desvio de 10 minutos para Instagram. Um timer sozinho não é suficiente — você precisa bloqueio durante cada intervalo.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>A Técnica Pomodoro é simples: trabalhe por 25 minutos, descanse por 5 minutos, repita. É um dos métodos de produtividade mais populares porque é fácil começar — defina um timer e vai. Mas aqui está o problema: um timer não o detém de abrir Twitter no minuto 3.</p>

<p>A maioria dos apps Pomodoro são apenas timers com um ícone de tomate. Contam para trás. Tocam quando o intervalo termina. Fazem nada para proteger os 25 minutos intermediários. Se você fica distraído durante um Pomodoro, o timer continua tocando e você desperdiçou um intervalo inteiro.</p>

<h2>Por Que Timers Sem Bloqueio Não Funcionam</h2>
<p>A Técnica Pomodoro assume que você ficará focado durante cada sprint. Em 2005 quando foi popularizada, isso era mais realista. Em 2026, com um navegador cheio de conteúdo otimizado algoritmicamente uma aba de distância, pura força de vontade não é suficiente. Estudos sobre distração digital mostram que uma vez que você muda de contexto para um site de redes sociais, leva uma média de 23 minutos para se refocr totalmente. Isso é quase um Pomodoro inteiro — desaparecido.</p>

<p>Um temporizador Pomodoro sem bloqueio de websites é como um plano de treino sem academia. A estrutura está lá, mas o ambiente trabalha contra você.</p>

<h2>Lock In! Combina Pomodoro com Bloqueio no Nível do Sistema</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> tem suporte Pomodoro integrado. Defina o comprimento do seu intervalo de trabalho e Lock In! bloqueia seus websites e apps escolhidos pela duração inteira. Quando o intervalo termina, tudo desbloqueia para seu descanso. Quando o descanso termina, bloqueio retoma para o próximo sprint.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! Pomodoro timer with website blocking on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Cada Navegador, Cada App</h3>
<p>Bloqueio funciona no nível do sistema macOS via extensão de rede. Não importa se você usa Safari, Chrome ou Arc — sites distraentes não carregam. Combine com bloqueio de app para desligar Discord, Slack ou jogos durante cada sprint.</p>

<h3>Modo Rigoroso para Pomodoros Honestos</h3>
<p>Ative o Modo Rigoroso e você não consegue cancelar um Pomodoro cedo. Nenhuma exceção de "apenas vou verificar meu feed". O intervalo funciona sua duração completa com todos os blocos ativos. Isto é a Técnica Pomodoro como ela foi intencionada — sprints de foco ininterruptos.</p>

<h3>Rastreie Seu Progresso</h3>
<p>Estatísticas diárias do Lock In! com um gráfico de barras de 7 dias mostram quantas sessões focadas você completou. Ao longo do tempo, você verá padrões — quais dias você é mais produtivo, quando tende a pular sessões e como seu foco melhora semana a semana.</p>

<p>Dê aos seus Pomodoros dentes reais. <a href="https://apps.apple.com/app/lockin/id6802325423">Obtenha Lock In! no Mac App Store</a></p>
`,
  },
  "strict-mode-website-blocker-mac": {
    slug: "strict-mode-website-blocker-mac",
    title: "Bloqueador de Sites em Modo Rigoroso para Mac — Nenhuma Forma de Trapacear",
    description: "Cada bloqueador de sites tem um botão de cancelamento — e seu futuro eu o usará. Um modo rigoroso que remove a opção totalmente é a única versão que funciona a longo prazo.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Você instala um bloqueador de sites. Você adiciona Reddit, Twitter, YouTube à lista. Você inicia uma sessão de foco de 2 horas. Quatorze minutos depois, você pensa "apenas verificarei uma coisa" e bate o botão de cancelamento. O bloqueio é removido, você abre Reddit e as duas horas desaparecem.</p>

<p>Isso não é uma falha da ferramenta — é um recurso de cada bloqueador que inclui um botão de desfazer. Se futuro você consegue cancelar o bloqueio, presente você está apenas realizando um ritual, não reforçando um limite.</p>

<h2>O Problema do Botão de Cancelamento</h2>
<p>A maioria dos bloqueadores de websites deixa você encerrar uma sessão sempre que queira. Alguns adicionam um pequeno atraso — espere 10 segundos antes de desbloquear. Outros a fazem digitar uma frase. Estas são técnicas de atrito e funcionam para impulsos leves. Mas para desejos fortes — o tipo onde você está lutando com um problema difícil há 30 minutos e seu cérebro está gritando por dopamina — um atraso de 10 segundos é nada.</p>

<p>Pesquisa em dispositivos de comprometimento mostra que os mais eficazes removem a opção totalmente. Você não consegue comer junk food que não está na casa. Você não consegue gastar dinheiro que já transferiu para uma conta poupança bloqueada. E você não consegue navegar em sites bloqueados se não há botão de cancelamento.</p>

<h2>Modo Rigoroso do Lock In! Remove a Fuga</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> oferece um Modo Rigoroso que, uma vez ativado, torna a sessão atual completamente incancelável. Não há botão para encerrá-la cedo. Não há atalho de teclado. Não há truque de quit-and-relaunch. Você escolheu uma duração quando iniciou a sessão, e os blocos permanecem ativos para cada segundo disso.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! Strict Mode — uncancellable website blocking on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Como Funciona</h3>
<p>Quando você inicia uma sessão com Modo Rigoroso ativado, Lock In! ativa sua extensão de rede no nível do sistema para bloquear websites em cada navegador e seu bloqueador de app intercepta qualquer app bloqueado. O timer da sessão faz contagem regressiva na barra de menu. Durante este tempo, o controle "Encerrar Sessão" desaparece. Você não consegue acessá-lo. A única forma de sair é esperar.</p>

<h3>Comece Pequeno</h3>
<p>Se Modo Rigoroso parece intimidador, comece com sessões de 25 minutos. Você consegue sobreviver 25 minutos sem Instagram. Uma vez que isso fica confortável, estenda para 50 minutos, depois 90. O desconforto desaparece rapidamente quando você percebe que realmente fez trabalho.</p>

<h3>Seu Futuro Você o Agradecerá</h3>
<p>Modo Rigoroso é um acordo que você faz consigo mesmo: "Pelos próximos X minutos, distrações estão fora da mesa". Transforma cada sessão em trabalho profundo genuíno porque não há alternativa. Nenhuma negociação, nenhuma exceção, nenhuma brecha de escape.</p>

<p>O único bloqueador que funciona é aquele que você não consegue desligar. <a href="https://apps.apple.com/app/lockin/id6802325423">Obtenha Lock In! no Mac App Store</a></p>
`,
  },
  "block-youtube-mac-during-work": {
    slug: "block-youtube-mac-during-work",
    title: "Como Bloquear YouTube no Mac Durante Horas de Trabalho",
    description: "A reprodução automática e barra de recomendações do YouTube transformam uma busca rápida em um desvio de uma hora. Bloqueá-lo durante o trabalho requer algo mais forte que fechar a aba.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>YouTube é singularmente perigoso para produtividade porque parece produtivo. Você vai procurar um tutorial para uma tarefa de trabalho e a barra lateral recomenda um vídeo "relacionado" que na verdade é um documentário de 40 minutos sobre buracos negros. A reprodução automática passa para o próximo vídeo antes de você ter decidido assisti-lo. Uma busca legítima se torna uma hora de consumo de conteúdo.</p>

<p>Diferentemente de mídia social pura, YouTube tem utilidade genuína. É o que o torna tão difícil de deixar — você sempre pode justificar a visita. Mas a plataforma é engenharia para converter uma visita de 3 minutos em uma sessão de 30 minutos e durante horas de trabalho, essa taxa de conversão é devastadora.</p>

<h2>Por Que Auto-Controle Falha Contra YouTube</h2>
<p>O mecanismo de recomendação do YouTube é impulsionado por bilhões de pontos de dados sobre o que mantém as pessoas assistindo. Sua força de vontade é impulsionada pelo que quer que você tenha comido no café da manhã. Esta não é uma luta justa. A barra lateral, reprodução automática, notificações e página inicial personalizada existem para maximizar seu tempo no site. Lutar com isso com "apenas assistirei um vídeo" é uma estratégia perdedora.</p>

<p>Extensões de navegador que bloqueiam YouTube podem ser desabilitadas em segundos. Remover YouTube dos seus favoritos não ajuda quando a URL está gravada na memória muscular.</p>

<h2>Bloquear YouTube Em Todo o Sistema com Lock In!</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> bloqueia youtube.com no nível do sistema macOS. Durante uma sessão de foco, YouTube não carregará em nenhum navegador — Safari, Chrome, Firefox, Arc, nenhum deles. A extensão do sistema intercepta a solicitação antes de alcançar o navegador então não há página para carregar, nenhuma barra lateral para tentá-lo, nenhuma reprodução automática para começar.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! blocking YouTube on Mac during work hours" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Bloqueie YouTube Sem Bloquear Tudo</h3>
<p>Você não precisa ir nuclear. Adicione youtube.com à sua lista de bloqueio customizada enquanto mantém outros sites acessíveis. Ou use a pré-configuração de Entretenimento que bloqueia YouTube junto com outras plataformas de vídeo e streaming. Customize a lista para combinar seus padrões de distração reais.</p>

<h3>Modo Rigoroso para Viciados em YouTube</h3>
<p>Se você já tentou bloquear YouTube antes e sempre acabou cancelando o bloqueio para "verificar algo rapidamente", ative o Modo Rigoroso. A sessão se torna incancelável. YouTube permanece bloqueado até o timer chegar a zero não importa o quão compelidor seja o impulso de procurar algo.</p>

<h3>Salve Tutoriais para Tempo de Descanso</h3>
<p>Com suporte Pomodoro, Lock In! cria naturalmente janelas onde YouTube está disponível — seus intervalos de descanso. Precisa assistir um tutorial? Adicione aos favoritos e assista durante seu próximo descanso. Desta forma YouTube o serve em seu horário, não o contrário.</p>

<p>Tire YouTube da mesa durante horas de trabalho. <a href="https://apps.apple.com/app/lockin/id6802325423">Obtenha Lock In! no Mac App Store</a></p>
`,
  },
  "selfcontrol-alternative-mac": {
    slug: "selfcontrol-alternative-mac",
    title: "Alternativa SelfControl para Mac",
    description: "SelfControl é um bloqueador de código aberto amado, mas não acompanhou o macOS moderno. Sem bloqueio de apps, nenhuma interface de barra de menu e problemas de compatibilidade com atualizações recentes.",
    date: "2026-09-06",
    readTime: "5 min de leitura",
    content: `
<p>SelfControl tem sido o bloqueador de sites gratuito de eleição para Mac desde 2009. Sua promessa central — bloqueie websites por um tempo definido sem forma de desfazer — foi revolucionária. Mas estamos em 2026 e SelfControl está mostrando sua idade. Se você tem usado isso e batendo contra limitações, você não está sozinho.</p>

<h2>Onde SelfControl Fica Aquém em 2026</h2>

<h3>Sem Bloqueio de Apps</h3>
<p>SelfControl apenas bloqueia websites. Não consegue fazer nada sobre apps distraentes de desktop como Discord, Slack, Steam ou Mensagens. Se seu problema de distração se estende além do navegador — e para a maioria das pessoas se estende — SelfControl apenas cobre metade do problema.</p>

<h3>Nenhuma Presença de Barra de Menu</h3>
<p>SelfControl requer que você abra sua janela de aplicação completa para iniciar uma sessão. Não há ícone de barra de menu, nenhuma interface de acesso rápido. Para uma ferramenta que você usa múltiplas vezes por dia, este atrito soma. Você tem que encontrar o app, abrir, configurar seu bloqueio e iniciá-lo — toda vez.</p>

<h3>Preocupações de Compatibilidade</h3>
<p>SelfControl modifica arquivos de configuração de rede no nível do sistema para reforçar seus bloqueios. Esta abordagem cresceu cada vez mais frágil conforme Apple aperta a segurança do macOS com cada lançamento. Usuários relatam bloqueios que falham silenciosamente, bloqueios que persistem depois de seu timer, e problemas de instalação depois de atualizações do macOS. O app é código aberto e mantido por voluntários, então correções podem ficar para trás do ciclo de lançamento da Apple.</p>

<h3>Sem Recursos Pomodoro ou Sessão</h3>
<p>SelfControl tem um modo: bloqueie por X minutos. Não há integração Pomodoro, nenhum rastreamento de sessão, nenhuma estatística diária. É uma ferramenta de propósito único em um mundo onde apps de foco evoluíram significativamente.</p>

<h2>Lock In! — Uma Substituição Moderna</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> pega tudo que as pessoas amam sobre SelfControl — o bloqueio rigoroso e incancelável — e envolve em um app macOS moderno com recursos que SelfControl nunca ofereceu.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! as a SelfControl alternative for modern macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Extensão do Sistema, Não Hacking de Hosts</h3>
<p>Lock In! usa a API oficial Network Extension da Apple para bloquear websites. Esta é a forma suportada e à prova do futuro de interceptar tráfego de rede no macOS. Sem modificações frágeis de arquivo, sem quebra depois de atualizações de sistema, sem entradas deixadas para trás se algo der errado.</p>

<h3>Bloqueio de Website + App</h3>
<p>Bloqueie websites distraentes em cada navegador e apps distraentes via painéis de interrupção de tela cheia. Um app cobre ambos os vetores. SelfControl não consegue bloquear apps alguma.</p>

<h3>Menu Bar Primeiro</h3>
<p>Lock In! fica na barra de menu. Clique, defina duração, inicie. Nenhuma janela para encontrar, nenhum app para mudar para. É projetado para o fluxo de trabalho de iniciar sessões de foco múltiplas vezes por dia.</p>

<h3>Modo Rigoroso + Estatísticas</h3>
<p>Modo Rigoroso espelha a filosofia incancelável do SelfControl. Estatísticas diárias com um gráfico de 7 dias adicionam responsabilidade que SelfControl nunca forneceu. Listas de bloqueio pré-configuradas para Social, Entretenimento, Notícias e Compras significam que você está bloqueando em segundos, não construindo listas do zero.</p>

<p>Mesma filosofia, execução moderna. <a href="https://apps.apple.com/app/lockin/id6802325423">Obtenha Lock In! no Mac App Store</a></p>
`,
  },
  "focus-app-blocks-websites-and-apps-mac": {
    slug: "focus-app-blocks-websites-and-apps-mac",
    title: "App de Foco para Mac Que Bloqueia Websites e Apps",
    description: "A maioria das ferramentas de foco bloqueiam websites ou apps, não ambos. Distrações não respeitam essa linha — vivem no seu navegador e na sua dock.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Você instalou um bloqueador de websites, então Reddit e Twitter estão tratados. Mas aí você abre Discord para "verificar uma mensagem" e perde 20 minutos. Você instalou um timer de app, então Discord está tratado. Mas aí você abre reddit.com no Chrome e perde 20 minutos. Distrações não se importam com a linha de categoria entre "websites" e "apps" — exploram qualquer canal que você deixou aberto.</p>

<p>Para realmente proteger uma sessão de foco você precisa de uma única ferramenta que bloqueie ambos. Não duas ferramentas, não uma extensão de navegador mais um gerenciador de app separado — um bloqueador unificado que cobre cada vetor de distração no seu Mac.</p>

<h2>O Problema de Duas Ferramentas</h2>
<p>Executar ferramentas separadas para bloqueio de website e app cria lacunas. O bloqueador de website não sabe sobre o agendamento do bloqueador de app e vice versa. Você acaba gerenciando duas listas de bloqueio, dois timers, duas séries de configurações. Inevitavelmente um expira antes do outro ou um não é configurado para uma nova distração que você pegou. A complexidade o torna menos provável de usar uma ou outra ferramenta consistentemente.</p>

<p>macOS em si divide este problema também. Screen Time pode limitar websites do Safari e definir limites de tempo do app, mas os limites de website são apenas do Safari e os limites do app podem ser descartados. O modo Focus silencia notificações mas não o impede de abrir nada. Nenhuma ferramenta é projetada para sessões de foco intencionais.</p>

<h2>Lock In! Bloqueia Ambos de Um Ícone de Barra de Menu</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> é um app de foco unificado para Mac que bloqueia websites e apps distraentes simultaneamente durante sessões com timer.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Lock In! blocking both websites and apps on Mac for focus" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Bloqueio de Website no Nível do Sistema</h3>
<p>Uma extensão de rede macOS bloqueia websites em cada navegador — Safari, Chrome, Firefox, Arc, Brave e qualquer outro app que faz solicitações web. Listas de bloqueio pré-configuradas para Social, Entretenimento, Notícias e Compras cobrem os suspeitos usuais. Adicione domínios customizados para qualquer coisa específica aos seus hábitos.</p>

<h3>Bloqueio de App de Tela Cheia</h3>
<p>Quando você tenta abrir um app bloqueado durante uma sessão, Lock In! intercepta com um painel de tela cheia. Não é uma notificação que você consegue descartar — é uma parede. O app bloqueado é inutilizável até sua sessão terminar. Isto cobre distrações de desktop como Discord, Slack, Steam, Mensagens e qualquer coisa em sua pasta Aplicativos.</p>

<h3>Uma Lista de Bloqueio, Um Timer, Uma Sessão</h3>
<p>Configure seus bloqueios de website e app juntos. Inicie uma sessão da barra de menu e tudo ativa simultaneamente. Quando a sessão termina tudo desativa. Nenhum timer separado para gerenciar, nenhuma agenda incompatível, nenhuma lacuna para distrações passar por.</p>

<h3>Pomodoro, Modo Rigoroso e Estatísticas</h3>
<p>Coloque intervalos Pomodoro para estruturar seus sprints de trabalho. Ative o Modo Rigoroso para tornar as sessões incanceláveis. Rastreie seu histórico de foco com um gráfico de barras de 7 dias. Esses recursos funcionam em ambos os bloqueios de website e app — são parte da mesma sessão, não presos de uma ferramenta separada.</p>

<p>Um app, cada distração, zero brechas. <a href="https://apps.apple.com/app/lockin/id6802325423">Obtenha Lock In! no Mac App Store</a></p>
`,
  },
  "block-social-media-mac": {
    slug: "block-social-media-mac",
    title: "Como Bloquear Redes Sociais no Mac Durante o Trabalho",
    description: "Instagram, X e TikTok são engenhados para o puxar de volta. Aqui está uma configuração prática para mantê-los fora de seu dia de trabalho sem depender de força de vontade.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Você fecha a aba. Dez minutos depois está aberta novamente. Não porque você decidiu abrir — você apenas fez, do jeito que você poderia se coçar uma coceira. Apps de redes sociais são construídos por equipes cuja obra inteira é tornar esse loop tão sem atrito quanto possível. Força de vontade não é uma luta justa contra isso.</p>

<p>A correção não é mais disciplina. É remover a opção durante as horas em que importa.</p>

<h2>Por Que "Apenas Não Abra" Não Funciona</h2>
<p>Plataformas sociais são projetadas em torno de recompensas variáveis — você não sabe se o próximo scroll tem algo interessante então continua rolando para descobrir. Esse é o mesmo mecanismo que máquinas caça-níqueis usam. Decidir não verificar Instagram requer que você vença uma minúscula batalha de força de vontade dúzias de vezes por dia e você precisa apenas perder uma vez para a sessão desaparecer.</p>

<p>Adicionar o site aos favoritos, fazer logout ou esconder o ícone do app falham pela mesma razão: adicionam alguns segundos de atrito, mas alguns segundos não são o suficiente para parar um alcance habitual. Você precisa que a opção não exista durante horas de trabalho, não apenas seja ligeiramente mais difícil de alcançar.</p>

<h2>Bloqueie No Nível do Sistema</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> bloqueia domínios de redes sociais no nível do sistema no Mac então Instagram, X, TikTok, Facebook e Reddit são inalcançáveis em cada navegador durante uma sessão de foco — não apenas aquele que você acontece ter configurado.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Blocking social media sites on Mac during a focus session" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Uma Lista de Bloqueio Social Pré-configurada</h3>
<p>Em vez de digitar cada domínio social manualmente uma pré-configuração Social cobre as principais plataformas com um toque. Adicione qualquer coisa nicho — um fórum específico, um servidor Discord web client — à mesma lista em segundos.</p>

<h3>Funciona em Cada Navegador</h3>
<p>Uma extensão de rede macOS reforça o bloqueio abaixo da camada do navegador então mudar do Safari para Chrome para contornar não funciona. Se o domínio está bloqueado está bloqueado em todo o lugar na máquina.</p>

<h3>Modo Rigoroso para os Dias Que Você Sabe Que Vai Ceder</h3>
<p>Alguns dias um bloqueio simples é suficiente. Outros dias — uma manhã estressante, uma tarefa chata — você sabe que vai se convencer de desabilitá-lo. Modo Rigoroso remove essa opção até o timer acabar então a decisão é feita uma vez no início quando você tem mais resolução.</p>

<h3>Combine com um Timer, Não Uma Proibição Permanente</h3>
<p>Bloquear redes sociais para sempre não é realista ou necessário — você apenas precisa delas desaparecidas durante blocos de trabalho profundo. Defina uma sessão para suas horas focadas e deixe-a levantar automaticamente depois assim verificar seu feed no almoço é uma escolha, não um deslize.</p>

<p>Menos rolagem mais trabalho enviado. <a href="https://apps.apple.com/app/lockin/id6802325423">Obtenha Lock In! no Mac App Store</a></p>
`,
  },
  "mac-focus-mode-doesnt-block-websites": {
    slug: "mac-focus-mode-doesnt-block-websites",
    title: "Modo Focus do Mac Não Bloqueia Websites — Aqui Está o Que Faz",
    description: "O recurso Focus da Apple silencia notificações mas deixa seu navegador completamente aberto. Se você assumiu que também bloqueava sites distraentes aqui está a lacuna e como fechá-la.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Ative o modo Focus no seu Mac e as notificações ficam silenciosas — pings do Slack, textos, alertas de calendário, todos suprimidos. Parece um modo de produtividade. Então é uma suposição razoável que também mantém você fora de websites distraentes enquanto está ativo. Não faz. O modo Focus não tem nada a ver com o que você consegue abrir no seu navegador.</p>

<h2>O Que Modo Focus Realmente Faz</h2>
<p>Focus é um filtro de notificação. Controla quais apps e pessoas conseguem o interromper com banners sons e badges e consegue sincronizar entre seu Mac iPhone e iPad. Isso é genuinamente útil para reduzir interrupções de outras pessoas. Mas não toca comportamento extrovertido — nada o detém de abrir Safari e digitar uma URL você mesmo. O modo Focus o protege de interrupções externas não dos seus próprios hábitos.</p>

<p>Isto é uma confusão comum porque "Focus" soa como deveria significar "sem distração" e marketing da Apple se inclina neste enquadramento. Na prática é mais próximo a Não Perturbe com regras mais granulares sobre quem passa por.</p>

<h2>O Que Realmente Bloqueia Websites</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> lida com a parte que modo Focus pula — bloqueia websites e apps distraentes completamente então são inalcançáveis em vez de apenas silenciosos.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Website blocking on Mac, unlike Apple's Focus mode" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Bloqueio de Website Real, Não Filtragem de Notificação</h3>
<p>Uma extensão de rede no nível do sistema bloqueia os domínios que você escolhe em cada navegador no seu Mac. Digitar a URL diretamente não faz nada — o site simplesmente não carregará enquanto uma sessão está executando.</p>

<h3>Use Ambos Juntos</h3>
<p>Modo Focus e um bloqueador de website real não são ferramentas concorrentes — resolvem metades diferentes do mesmo problema. Ative um perfil Focus para silenciar notificações de pessoas inicie uma sessão para bloquear os sites e apps que você abriria você mesmo. Juntos cobrem ambas as direções de interrupção.</p>

<h3>Baseado em Sessão, Não Tudo ou Nada</h3>
<p>Defina uma duração e inicie da barra de menu quando você se senta para trabalhar. Adicione intervalos Pomodoro se quiser pausas estruturadas ou Modo Rigoroso se não confia em parar cedo. Quando o timer termina tudo desbloqueia automaticamente.</p>

<p>Notificações silenciosas é um começo Sites realmente bloqueados é a diferença. <a href="https://apps.apple.com/app/lockin/id6802325423">Obtenha Lock In! no Mac App Store</a></p>
`,
  },
  "website-blocker-all-browsers-mac": {
    slug: "website-blocker-all-browsers-mac",
    title: "Bloqueador de Websites Que Funciona em Todos os Navegadores no Mac",
    description: "A maioria das extensões de bloqueador só cobrem o navegador em que estão instaladas. Se você mudar de navegador para contornar um bloqueio aqui está uma configuração que fecha essa brecha.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Você instala uma extensão de bloqueador de websites no Chrome. Funciona — por cerca de um dia até você abrir inconscientemente Safari onde a extensão não existe e o site carrega sem atrito. Você não esperava contorná-lo seu Mac tem apenas mais de um navegador e o bloqueador conhecia apenas um deles.</p>

<p>Este é o modo de falha mais comum para bloqueadores baseados em extensão de navegador. Eles estão escopo para um único navegador por design e mudar de navegador leva menos esforço que a maioria das pessoas percebe.</p>

<h2>Por Que Bloqueadores Baseados em Extensão Vazam</h2>
<p>Uma extensão de navegador só consegue ver e controlar tráfego dentro do navegador que o hospeda. Se você tem Chrome Safari Firefox e Arc todos instalados — que é comum em um Mac — uma extensão em um deixa os outros três completamente abertos. Algumas pessoas nem percebem que têm múltiplos navegadores até estarem ativamente procurando uma forma de contornar um bloqueio e nesse ponto seu cérebro encontra o ícone de dock do Safari notavelmente rápido.</p>

<p>Extensões também são fáceis de desabilitar em alguns cliques das próprias configurações do navegador que derrota o propósito no momento que você tem uma tarde ruim.</p>

<h2>Bloqueie No Nível do Sistema Em Vez Disso</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> usa uma extensão de rede macOS em vez de um add-on de navegador então o bloqueio se aplica abaixo de todos os navegadores de uma vez — Safari Chrome Firefox Arc Brave e qualquer coisa mais instalada na máquina.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="System-level website blocking across all Mac browsers" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Um Bloqueio Cada Navegador</h3>
<p>Adicione um domínio uma vez e está bloqueado em todo o Mac imediatamente. Não há configuração por navegador nenhuma extensão para instalar quatro vezes nenhum navegador que você esqueceu de cobrir.</p>

<h3>Sem Extensão para Desabilitar No Meio da Sessão</h3>
<p>Porque o bloqueio funciona no nível do sistema em vez de dentro de um navegador não há toggle de extensão para mudar quando motivação cai. Modo Rigoroso vai um passo além tornando a sessão inteira incancelável até o timer terminar.</p>

<h3>Listas Pré-configuradas para os Culpados Óbvios</h3>
<p>Presets de Social Entretenimento Notícias e Compras cobrem as categorias de distração mais comuns fora da caixa então não há necessidade de procurar e digitar manualmente dúzias de domínios em todos os serviços que você quer bloquear.</p>

<p>Mudar navegadores não deveria ser uma brecha. <a href="https://apps.apple.com/app/lockin/id6802325423">Obtenha Lock In! no Mac App Store</a></p>
`,
  },
  "block-reddit-mac": {
    slug: "block-reddit-mac",
    title: "Como Bloquear Reddit no Mac — Pare de Rolar",
    description: "A rolagem infinita e subreddits infinitos do Reddit fazem dele uma das formas mais fáceis de perder uma tarde. Aqui está como mantê-lo fora de seu dia de trabalho especificamente.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Reddit é singularmente bom em comer tempo porque nunca termina. Termine um subreddit e há outro. Termine a página inicial e há uma thread de comentários. Diferentemente de um artigo ou vídeo único não há ponto de parada natural integrado — a rolagem apenas continua gerando mais e "mais um post" consegue ir por uma hora sem você notar.</p>

<p>Se você abriu Reddit "apenas para verificar uma coisa" e procurou 45 minutos depois é por isso. Não é uma falha de disciplina — é um produto construído para remover sinais de parada.</p>

<h2>Bloquear Apenas Reddit Nem Sempre É o Suficiente</h2>
<p>Muitas pessoas tentam extensões de navegador que bloqueiam reddit.com especificamente que funciona até abrir um navegador diferente sem a extensão ou até old.reddit.com ou a versão mobile web passa por uma regra de domínio que não foi específica o suficiente. Reddit também tem muitos subdomínios e caminhos de redirecionamento então uma lista de bloqueio estreita consegue perder edge cases.</p>

<h2>Uma Forma Mais Limpa de Bloqueá-lo</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> bloqueia Reddit no nível do sistema no Mac cobrindo o domínio principal e suas variantes em cada navegador que você tem instalado não apenas aquele onde você configurou uma regra.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Blocking Reddit on Mac during focus sessions" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Adicione Uma Vez Bloqueado Em Todo Lugar</h3>
<p>Adicione reddit.com à sua lista de bloqueio — ou use a pré-configuração Social ou Entretenimento que já a inclui — e está inalcançável no Safari Chrome Firefox e Arc simultaneamente. Sem configuração por navegador.</p>

<h3>Bloqueie o App Também</h3>
<p>Se você usa o app de desktop Reddit ou um cliente de terceiros envolvido como um app Mac Lock In! consegue bloquear esses diretamente com uma interrupção de tela cheia fechando a brecha que um bloqueador apenas de website deixaria.</p>

<h3>Escopo para Quando Você Precisar</h3>
<p>Você não precisa bloquear Reddit para sempre — a maioria das pessoas não quer. Execute durante sessões de trabalho com um timer e abre normalmente novamente uma vez que a sessão termina então navegação no seu próprio tempo é inafetada.</p>

<h3>Modo Rigoroso para Dias Honestos</h3>
<p>Se você sabe que um descanso de Reddit de cinco minutos tende a se tornar cinquenta Modo Rigoroso remove a opção de encerrar a sessão cedo. O bloqueio segura até o timer dizer que está pronto.</p>

<p>A rolagem termina onde o bloqueio começa. <a href="https://apps.apple.com/app/lockin/id6802325423">Obtenha Lock In! no Mac App Store</a></p>
`,
  },
  "focus-app-with-stats-mac": {
    slug: "focus-app-with-stats-mac",
    title: "App de Foco com Estatísticas Diárias para Mac",
    description: "A maioria dos bloqueadores apenas bloqueiam. Sem um registro de seu tempo de foco é difícil saber se o hábito realmente está melhorando — aqui está uma configuração que rastreia para você.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Você começa a usar uma ferramenta de foco executa algumas sessões e então uma semana depois é perguntado como está indo. Você honestamente não sabe. Talvez tenha sido consistente talvez tenha pulado metade dos dias talvez suas sessões ficaram mais curtas sem você notar. Sem um registro "tenho estado mais focado ultimamente" é um sentimento não um fato.</p>

<p>A maioria dos bloqueadores de website e app são construídos para fazer exatamente uma coisa — bloquear — e parar aí. Isso é bom para o momento em que você está em uma sessão mas deixa você sem forma de ver o padrão em dias ou semanas que é onde hábitos realmente se formam ou desmoronam.</p>

<h2>Por Que Rastreamento Muda o Comportamento</h2>
<p>Ver um registro visível de seu tempo de foco faz algo que apenas bloqueio não consegue: transforma um hábito invisível em um mensurável. Uma série de sessões consistentes é motivador de um jeito que "acho que tenho estado focando mais" não é. Uma lacuna no gráfico é um empurrão para voltar ao caminho antes de se tornar um deslize de duas semanas. O rastreamento não é apenas manutenção de registros — é feedback que molda a próxima sessão.</p>

<h2>Um Bloqueador Que Também Mostra o Padrão</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> emparelha bloqueio de website e app com estatísticas diárias então cada sessão que você executa adiciona a um registro visível em vez de desaparecer no momento em que termina.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Daily focus stats and 7-day chart on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Um Gráfico de 7-Dias, Não Apenas um Número</h3>
<p>Um gráfico de barras de sete dias rolante mostra tempo de foco num relance então consegue detectar tendências — uma semana forte uma segunda lenta um deslize que está começando antes de se tornar uma regressão total aos hábitos antigos.</p>

<h3>Totais Diários na Barra de Menu</h3>
<p>Verifique o tempo focado de hoje sem abrir um dashboard ou app separado. Está lá quando você olha para a barra de menu que mantém o loop de feedback apertado em vez de enterrado em uma tela de configurações que você esquece de visitar.</p>

<h3>Estatísticas Cobrem Websites e Apps</h3>
<p>Porque bloqueio de website e app executam na mesma sessão as estatísticas refletem tempo de foco real não apenas uma fatia disso. Não há necessidade de reconciliar números de duas ferramentas separadas.</p>

<p>O que é medido é repetido. <a href="https://apps.apple.com/app/lockin/id6802325423">Obtenha Lock In! no Mac App Store</a></p>
`,
  },
  "mac-parental-controls-for-yourself": {
    slug: "mac-parental-controls-for-yourself",
    title: "Controles Parentais do Mac para Você Mesmo — Bloqueio de Website Auto-Imposto",
    description: "Screen Time é construído para gerenciar a conta de uma criança mas muitos adultos a configuram em seu próprio Mac esperando o mesmo efeito. Aqui está por que é estranho e um ajuste melhor.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Há um tipo específico de busca que soa como "como configurar controles parentais no meu próprio Mac". Não é um erro — muitos adultos querem a mesma restrição que um pai colocaria no laptop de uma criança apenas aplicada a eles mesmos porque sabem exatamente quais sites comem suas tardes e querem uma parede que não conseguem facilmente se convencer a passar.</p>

<p>O instinto faz sentido. A ferramenta não se encaixa bem.</p>

<h2>Por Que Screen Time Se Sente Errado Para Isso</h2>
<p>Controles parentais do Screen Time são construídos em torno de uma estrutura de Family Sharing — uma conta pai gerenciando uma conta criança com uma senha do Screen Time que a criança não sabe. Quando você tenta aplicar isso ao seu próprio Mac de usuário único você está definindo uma senha que obviamente sabe em uma conta que você controla totalmente que você consegue apenas desabilitar sempre que o bloqueio ficar inconveniente. Todo o modelo de segurança assume um adulto restringindo alguém mais. Vire para dentro e ele para de funcionar como uma barreira real.</p>

<p>Também apenas limita Safari para restrições de website então qualquer outro navegador que você tem instalado está intocado.</p>

<h2>Uma Ferramenta Construída para Bloqueio Auto-Imposto</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> é projetado especificamente para pessoas restringindo seu próprio Mac não um pai gerenciando a conta de uma criança — todo o modelo de interação assume que você é o que está definindo e honrando o limite.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Self-imposed website and app blocking on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Baseado em Sessão, Não em Conta</h3>
<p>Em vez de uma restrição permanente ligada a uma conta gerenciada você inicia uma sessão com timer sempre que quer focar. Bloqueia seus sites e apps escolhidos para essa janela depois levanta automaticamente — nenhuma estrutura de conta separada necessária.</p>

<h3>Modo Rigoroso Em Vez de uma Senha Que Você Sabe</h3>
<p>Como uma senha auto-definida não é uma barreira real Modo Rigoroso remove a capacidade de cancelar uma sessão cedo totalmente. O comprometimento é feito uma vez no início em vez de estar um clique longe de desfeito.</p>

<h3>Cobre Cada Navegador, Não Apenas Safari</h3>
<p>O bloqueio funciona no nível do sistema então se aplica se você está no Safari Chrome Firefox ou Arc — nenhuma lacuna deixada pelas restrições específicas do navegador.</p>

<p>Restrição que é construída para você não para a conta de uma criança que você está pegando emprestado. <a href="https://apps.apple.com/app/lockin/id6802325423">Obtenha Lock In! no Mac App Store</a></p>
`,
  },
  "deep-work-app-mac": {
    slug: "deep-work-app-mac",
    title: "App de Trabalho Profundo para Mac — Bloqueie Tudo, Foque em Uma Coisa",
    description: "Trabalho profundo requer trechos ininterruptos de tempo mas um ping único ou aba aberta consegue encerrar uma sessão antes de começar. Aqui está como proteger o bloqueio apropriadamente.",
    date: "2026-09-06",
    readTime: "5 min de leitura",
    content: `
<p>O conceito de trabalho profundo de Cal Newport repousa em uma ideia simples mas exigente: saída cognitiva significativa requer longos trechos ininterruptos de concentração e esse estado leva tempo para entrar e quase nenhum tempo para quebrar. Uma notificação Slack única uma mudança reflexiva de aba ou um ping Discord não custam apenas os trinta segundos da interrupção — custam os dez ou quinze minutos que demora para voltar ao fluxo depois.</p>

<p>Isto é por que trabalho profundo é tão difícil de proteger casualmente. Não é que faltam duas horas; é que as duas horas são fatiadas em seis fragmentos de vinte minutos por coisas que pareciam inofensivas no momento.</p>

<h2>O Que Um Bloqueio de Trabalho Profundo Realmente Requer</h2>
<p>Proteger uma sessão de trabalho profundo significa remover cada interrupção plausível antes de começar não reagir a interrupções conforme vêm. Isso significa os apps de comunicação são inalcançáveis os sites noticiosos e sociais são inalcançáveis e não há toggle fácil para verificar "apenas uma coisa" no meio. A barreira tem que existir antes da tentação.</p>

<h2>Construindo o Bloqueio no Mac</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> é construído exatamente para isto — inicie uma sessão e websites distraentes e apps distraentes estão bloqueados por sua duração no nível do sistema.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Deep work session with websites and apps blocked on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Defina o Bloqueio Antes de Começar a Trabalhar</h3>
<p>Configure uma lista de bloqueio cobrindo apps de comunicação sites sociais e qualquer coisa que tende a puxá-lo para fora do fluxo. Inicie a sessão antes de abrir seu trabalho real então não há janela onde uma distração consegue passar antes de o bloqueio estar ao vivo.</p>

<h3>Pomodoro para Blocos de Trabalho Profundo Estruturados</h3>
<p>Se duas horas ininterruptas parece assustador intervalos Pomodoro quebram trabalho profundo em sprints de 25 minutos com pausas curtas — tempo suficiente para entrar em fluxo curto o suficiente para sustentar em um dia completo sem queimar.</p>

<h3>Modo Rigoroso para as Sessões Que Mais Importam</h3>
<p>Para o trabalho que genuinamente precisa de proteção — um prazo um problema difícil — Modo Rigoroso torna a sessão incancelável. Não há momento click-to-disable quando a primeira sentença difícil do dia mostra.</p>

<h3>Bloqueio de App de Tela Cheia Cobre o Desktop, Não Apenas o Navegador</h3>
<p>Interrupções de trabalho profundo não vêm apenas do navegador. Notificações Slack Discord e Mensagens no desktop são igualmente disruptivas e Lock In! bloqueia aquelas com uma interrupção de tela cheia em vez de deixá-las para um bloqueador de website perder inteiramente.</p>

<p>Duas horas protegidas batem seis fragmentadas. <a href="https://apps.apple.com/app/lockin/id6802325423">Obtenha Lock In! no Mac App Store</a></p>
`,
  },
  "block-news-sites-mac": {
    slug: "block-news-sites-mac",
    title: "Como Bloquear Sites de Notícias no Mac Durante Horas de Foco",
    description: "Verificar notícias \"por um minuto\" durante o trabalho raramente fica um minuto — manchetes são projetadas para puxá-lo para a próxima história. Aqui está como mantê-lo fora de seus blocos de trabalho.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Sites de notícias operam em um mecanismo similar a feeds sociais: sempre há outra manchete outra história relacionada outra thread ao vivo atualizando. Verificar "por um minuto" durante uma sessão de trabalho rotineiramente vira quinze porque o próximo artigo está um clique longe e o site é especificamente projetado para tornar esse clique sem atrito.</p>

<p>Não é que notícias não sejam importantes. É que a maioria não é sensível ao tempo para você pessoalmente no meio de um bloco de trabalho focado e consegue esperar até um descanso designado sem nada se perder.</p>

<h2>Por Que Esta Categoria Passa pela Força de Vontade</h2>
<p>Verificação de notícias muitas vezes se mascarada como comportamento produtivo — "estou mantendo informado" se sente diferente de "estou rolando Instagram" mesmo embora o custo de tempo e a interrupção ao foco sejam similares. Esse enquadramento o torna mais fácil de justificar no momento que é exatamente por que precisa de um bloqueio estrutural em vez de uma regra mental que você está contando em você mesmo para reforçar.</p>

<h2>Bloqueando Sites de Notícias Durante Trabalho</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> inclui uma lista de bloqueio pré-configurada de Notícias cobrindo maiores outlets e agregadores então você consegue remover a tentação pelas horas em que importa sem decidir jurar fora notícias inteiramente.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Blocking news sites on Mac during work hours" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Um Pré-configuração Outlets Maiores Cobertos</h3>
<p>A pré-configuração de Notícias salva você de digitar manualmente cada outlet que tende a verificar. Adicione à uma sessão e os destinos comuns estão tratados imediatamente.</p>

<h3>Adicione Seus Próprios Sites Habituais</h3>
<p>Se você tem um agregador específico subreddit ou outlet nicho que é sua toca de coelho pessoal adicione como um domínio customizado junto com a pré-configuração. O bloqueio não é limitado a uma lista fixa.</p>

<h3>Escopo para Horas de Trabalho, Não o Dia Todo</h3>
<p>Defina uma sessão para suas horas de trabalho e sites de notícias desbloqueiam automaticamente uma vez que termina então se atualizando ao almoço ou à noite é inafetado. O objetivo é proteger tempo de foco não cortar informação inteiramente.</p>

<h3>Funciona Em Cada Navegador</h3>
<p>O bloqueio se aplica no nível do sistema então mudar do Safari para Chrome para verificar uma manchete não funciona — a mesma regra segura em todo o lugar no Mac.</p>

<p>Fique informado no seu horário não no ciclo de notícias. <a href="https://apps.apple.com/app/lockin/id6802325423">Obtenha Lock In! no Mac App Store</a></p>
`,
  },
  "freedom-app-alternative-mac": {
    slug: "freedom-app-alternative-mac",
    title: "Alternativa do App Freedom para Mac",
    description: "Freedom popularizou o bloqueador de websites por assinatura mas uma taxa recorrente para bloqueio básico tem empurrado muitas pessoas a procurar uma opção nativa mais simples.",
    date: "2026-09-06",
    readTime: "5 min de leitura",
    content: `
<p>Freedom tem estado por anos e fez muito para popularizar a ideia de bloqueio de website e app agendado entre dispositivos. Para muitas pessoas porém a assinatura em andamento para uma ferramenta que fundamentalmente bloqueia uma lista de domínios em um timer começa a se sentir como muito especialmente uma vez que a avaliação gratuita termina e a cobrança recorrente se torna real.</p>

<p>Se você apenas precisa disso no seu Mac — não sincronizado entre cinco dispositivos — há um argumento para algo nativo única vez e mais leve.</p>

<h2>O Que as Pessoas Procuram Ao Deixar Freedom</h2>
<p>Os pedidos comuns são consistentes: bloqueio que realmente funciona em cada navegador uma recurso de bloqueio de app que não é um pensamento posterior uma forma de tornar sessões mais difíceis de cancelar e — muito frequentemente — não querendo pagar mensalmente indefinidamente por algo tão focado em escopo. Sincronização entre dispositivos é valiosa para alguns mas muitos usuários do Freedom apenas o usaram no seu Mac de qualquer jeito.</p>

<h2>Uma Alternativa Nativa do Mac</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> cobre o núcleo do que Freedom faz para usuários de Mac — bloqueio de website e app sessões agendadas um modo incancelável — construído nativamente para macOS em vez de como um serviço de sincronização entre plataformas.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Native Mac alternative to Freedom for website and app blocking" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Bloqueio no Nível do Sistema, Não um Add-On de Navegador</h3>
<p>Uma extensão de rede macOS bloqueia websites em cada navegador de uma vez então não há configuração por navegador e nenhuma extensão para desabilitar quando você é tentado no meio da sessão.</p>

<h3>Bloqueio de App Construído Desde o Começo</h3>
<p>Bloqueio de app de tela cheia é um recurso central não um extra prêso — tente abrir um app bloqueado durante uma sessão e você recebe uma interrupção de tela cheia incancelável em vez do app em si.</p>

<h3>Modo Rigoroso Em Vez de Configurações Bloqueadas</h3>
<p>Modo Rigoroso torna uma sessão ativa impossível de cancelar cedo que cobre o mesmo "proteja-me de mim mesmo" necessidade modo bloqueado do Freedom aborda.</p>

<h3>Fica na Barra de Menu</h3>
<p>Inicie e pare sessões de um ícone de barra de menu em vez de uma janela separada mantendo o atrito de iniciar uma sessão tão baixo quanto o atrito de parar uma deve ser alto.</p>

<p>A mesma promessa central construída para o Mac que você está realmente usando. <a href="https://apps.apple.com/app/lockin/id6802325423">Obtenha Lock In! no Mac App Store</a></p>
`,
  },
  "mac-website-blocker-system-wide": {
    slug: "mac-website-blocker-system-wide",
    title: "Bloqueador de Websites Em Todo o Sistema para Mac — Não Apenas Um Navegador",
    description: "Um bloqueio que apenas cobre um navegador não é realmente um bloqueio é uma sugestão. Aqui está o que uma configuração verdadeiramente em todo o sistema parece no Mac.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Há uma diferença significativa entre "bloqueado neste navegador" e "bloqueado neste Mac" e usualmente só se torna óbvia a primeira vez que você se pega abrindo um segundo navegador especificamente para contornar um bloqueio que você definiu no primeiro. É raramente uma decisão consciente de trapacear — é apenas como a lacuna é fácil de cair para dentro.</p>

<h2>Por Que Bloqueio no Nível de Navegador Não É Realmente Bloqueio</h2>
<p>Extensões de navegador só conseguem ver tráfego dentro do navegador que os hospeda. A maioria dos Macs tem mais de um navegador instalado — Safari vem pré-carregado e muitas pessoas também usam Chrome Firefox ou Arc para diferentes propósitos. Um bloqueador escopo para apenas um deles deixa cada outro navegador como uma porta aberta e um cérebro distraído encontra portas abertas rápido frequentemente sem planejando consciosamente contornar.</p>

<p>Editar <code>/etc/hosts</code> fica mais perto de em todo o sistema já que funciona abaixo do navegador mas requer acesso ao Terminal não funciona em um horário e precisa limpeza manual — impraticável para uso diário.</p>

<h2>Bloqueio Verdadeiramente Em Todo o Sistema</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> usa uma extensão de rede macOS que bloqueia domínios no nível do sistema abaixo de cada navegador então o bloqueio segura não importa qual app está fazendo a solicitação.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="System-wide website blocking across every Mac browser" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Cada Navegador Uma Regra</h3>
<p>Adicione um domínio uma vez e Safari Chrome Firefox e Arc estão todos cobertos simultaneamente. Não há passo de configuração por navegador para esquecer.</p>

<h3>Nenhum Comando de Terminal Necessário</h3>
<p>Tudo é gerenciado de uma interface de barra de menu — adicione domínios escolha pré-configurações inicie uma sessão — com nenhuma edição manual de arquivo ou limpeza que uma abordagem de arquivo hosts demanda.</p>

<h3>Cobre Apps Também, Não Apenas Navegadores</h3>
<p>Como algumas distrações vivem fora do navegador inteiramente — apps de desktop como Discord ou Steam — a mesma sessão consegue bloquear aqueles com uma interrupção de tela cheia fechando a lacuna que uma ferramenta apenas de navegador deixaria.</p>

<p>Em todo o sistema significa em todo o sistema. <a href="https://apps.apple.com/app/lockin/id6802325423">Obtenha Lock In! no Mac App Store</a></p>
`,
  },
  "unbypassable-website-blocker-mac": {
    slug: "unbypassable-website-blocker-mac",
    title: "Bloqueador de Websites Incontornável para Mac — Modo Rigoroso",
    description: "Um bloqueador que você consegue desabilitar em um clique não é um bloqueador é um lembrete. Aqui está como configurar um bloqueio que segura mesmo quando você realmente quer que pare.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Cada bloqueador de websites funciona bom em teoria certo até o momento você realmente quer verificar o site bloqueado mal o suficiente para desabilitá-lo. Esse momento é o ponto inteiro de usar um bloqueador no primeiro lugar — se você nunca quisesse verificar o site não precisaria da ferramenta. Então o teste real de um bloqueador não é se bloqueia quando você é motivado; é se segura quando você não é.</p>

<p>A maioria das ferramentas falha neste teste. Um toggle de configurações um clique de barra de menu uma extensão que você consegue desabilitar — tudo está um pequeno ação longe de desfeito e uma pequena ação é tudo que um cérebro distraído precisa.</p>

<h2>Por Que "Fácil de Desligar" Derrota o Propósito</h2>
<p>O valor de um bloqueador vem de remover a decisão não de tornar a decisão ligeiramente mais difícil. Se desabilitá-lo leva os mesmos três segundos que abrir o site bloqueado teria levado de qualquer jeito você não adicionou uma barreira significante — você apenas adicionou um passo que uma versão determinada-no-momento de você alegremente tomará.</p>

<h2>Um Bloqueio Que Segura</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> inclui Modo Rigoroso que torna uma sessão de bloqueio ativa incancelável até seu timer acabar — não há toggle de configuração nenhum atalho de barra de menu nenhuma forma de encerrá-la cedo.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Strict Mode uncancellable website blocking on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>A Decisão Acontece Uma Vez, Adiantado</h3>
<p>Você escolhe Modo Rigoroso e define a duração antes da sessão começar enquanto você é motivado e tem a cabeça clara. A partir desse ponto o comprometimento é travado em vez de ser renegociado toda vez tentação mostra.</p>

<h3>Sem Reset de Senha ou Workaround de Desinstalação</h3>
<p>O bloqueio é reforçado no nível do sistema através de uma extensão de rede macOS não através de uma configuração que você consegue tranquilamente virar de volta. É especificamente projetado para sobreviver ao momento que você mais quer contorná-lo.</p>

<h3>Combine com Apps para um Lockdown Completo</h3>
<p>Modo Rigoroso se aplica ao bloqueio de app tão bem quanto websites então uma interrupção de tela cheia em um app bloqueado não consegue ser descartada cedo nem — ambas as metades do bloqueio seguram juntas.</p>

<p>Um bloqueio que apenas funciona quando você não precisa não é um bloqueio. <a href="https://apps.apple.com/app/lockin/id6802325423">Obtenha Lock In! no Mac App Store</a></p>
`,
  },
  "block-online-shopping-mac": {
    slug: "block-online-shopping-mac",
    title: "Como Bloquear Sites de Compras Online no Mac",
    description: "Uma navegação rápida da Amazon ou de um site de roupas durante o trabalho raramente fica rápida e tende a terminar com um carrinho cheio de coisas que você não planejou comprar. Aqui está como mantê-lo fora de seu dia de trabalho.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Compras online durante horas de trabalho tem uma forma específica: você abre o site para um item recebe puxado para "clientes também compraram" e vinte minutos depois você adicionou três coisas a um carrinho que você não sabia que precisava. Não é realmente sobre as compras — é um loop de navegação vestido como tarefa que torna fácil justificar como produtivo no momento.</p>

<p>É também caro de um jeito que redes sociais não são. Um vinte minutos desperdiçado em Reddit custam seu tempo. Vinte minutos desperdiçado em um site de compras consegue custar você dinheiro além do tempo.</p>

<h2>Por Que É Difícil de Resistir No Meio da Tarefa</h2>
<p>Sites de compras são otimizados em torno dos mesmos mecanismos de recomendação e urgência como feeds sociais — ofertas por tempo limitado itens relacionados avisos de estoque baixo — tudo projetado para mantê-lo navegando passado sua intenção original. Combinado com o fato de que "estou apenas olhando" se sente inofensivo é uma categoria fácil de subestimar até você verificar seu extrato bancário.</p>

<h2>Bloqueando Sites de Compras Durante Tempo de Foco</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> inclui uma lista de bloqueio pré-configurada de Compras cobrindo maiores sites de varejo e mercado então estão inalcançáveis durante suas sessões de trabalho sem você ter que lembrar cada site que tende a descer.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Blocking online shopping sites on Mac during work" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Uma Pré-configuração para Varejistas Comuns</h3>
<p>Adicione a pré-configuração de Compras a uma sessão e maiores mercados e sites de varejo estão cobertos imediatamente nenhuma construção de lista manual necessária.</p>

<h3>Adicione Sites Nicho Que Você Realmente Usa</h3>
<p>Se seu ponto fraco pessoal é um site de boutique específico ou mercado de revenda não coberto pela pré-configuração adicione como um domínio customizado — a lista de bloqueio não é limitada ao que está integrado.</p>

<h3>Modo Rigoroso para Dias de Pagamento e Venda</h3>
<p>Se certos dias são mais arriscados que outros — dia de pagamento um grande evento de venda — Modo Rigoroso remove a opção de desabilitar o bloqueio no meio que importa mais exatamente nesses dias.</p>

<h3>Desbloqueia Automaticamente Após Trabalho</h3>
<p>O bloqueio é ligado à sua sessão não uma restrição permanente então compras no seu próprio tempo à noite é inafetado uma vez que o timer termina.</p>

<p>Mantenha o carrinho vazio até o dia de trabalho ser feito. <a href="https://apps.apple.com/app/lockin/id6802325423">Obtenha Lock In! no Mac App Store</a></p>
`,
  },
  "focus-timer-with-website-blocking-mac": {
    slug: "focus-timer-with-website-blocking-mac",
    title: "Temporizador de Foco com Bloqueio de Websites Integrado para Mac",
    description: "Um timer sozinho não o detém de abrir uma aba distraente e um bloqueador sozinho não dá estrutura à sua sessão de trabalho. Aqui está como parece combinado.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Muitas pessoas executam duas ferramentas separadas durante uma sessão de trabalho: um temporizador Pomodoro para estruturar o tempo e um bloqueador de websites para manter distrações fora. Funciona mas significa iniciar duas coisas toda vez que você se senta para focar e significa que o timer não tem ideia se o bloqueador está até mesmo executando — operam completamente independentemente sem relação um ao outro.</p>

<p>Essa lacuna importa mais que parece. Se o timer diz "foco por 25 minutos" mas o bloqueador não está ativo a estrutura é apenas uma sugestão. Se o bloqueador está ativo mas não há timer sessões tendem a executar indefinidamente ou serem abandonadas sem um endpoint claro.</p>

<h2>Por Que Combiná-los Importa</h2>
<p>Um timer dá uma sessão uma forma definida — um começo um fim e idealmente um ritmo de trabalho e descanso. Um bloqueador dá aquela forma dentes removendo a tentação de preencher a porção "trabalho" com algo mais. Nenhum um sozinho resolve o problema real de ficar focado por um período definido; juntos fazem.</p>

<h2>Timer e Bloqueio em Uma Sessão</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> combina um temporizador de foco com bloqueio de website e app em uma sessão única então iniciar o relógio e ativar o bloqueio é a mesma ação.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Focus timer with website blocking built in on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Defina uma Duração, Tudo Começa Junto</h3>
<p>Escolha quanto tempo você quer focar da barra de menu e os bloqueios de website e app ativam para exatamente aquela janela. Nenhum app separado para lançar para a parte do timer.</p>

<h3>Intervalos Pomodoro Integrados</h3>
<p>Para ciclos estruturados de trabalho e descanso o modo Pomodoro executa o bloqueio em sincronia com intervalos de trabalho e levanta durante pausas automaticamente então você não está re-alternando manualmente o bloqueador cada 25 minutos.</p>

<h3>Estatísticas Amarram Tudo Junto</h3>
<p>Porque o timer e o bloqueio são uma sessão as estatísticas diárias refletem tempo de foco real protegido — não apenas tempo que o timer estava correndo com distrações ainda uma mudança de aba longe.</p>

<p>Uma sessão timer e bloqueio juntos. <a href="https://apps.apple.com/app/lockin/id6802325423">Obtenha Lock In! no Mac App Store</a></p>
`,
  },
  "mac-productivity-apps-for-adhd": {
    slug: "mac-productivity-apps-for-adhd",
    title: "Apps de Produtividade do Mac para ADHD — Bloqueie Distrações Automaticamente",
    description: "Conselho de produtividade padrão frequentemente assume que você lembrará de evitar distrações. Para um cérebro ADHD o reparo mais confiável é remover a opção inteiramente.",
    date: "2026-09-06",
    readTime: "5 min de leitura",
    content: `
<p>Muito conselho de produtividade ferve para "apenas seja mais disciplinado sobre não verificar aquele site." Para um cérebro ADHD esse conselho entende mal o problema. Não é falta de conhecer melhor — é que controle de impulso e memória funcional fazem "lembrar não a" um mecanismo não confiável no momento não importa o quão clara a intenção era cinco minutos antes.</p>

<p>O que tende a funcionar melhor não é mais força de vontade é estrutural: removendo a opção para não haver nada para resistir no primeiro lugar. Se um site ou app distraente simplesmente não for alcançável o impulso não tem para onde ir.</p>

<h2>Por Que Remoção Bate Lembretes</h2>
<p>Notificações baseadas em notification e lembretes gentis assumem que você notará e agir sobre eles no momento — que é exatamente o mecanismo que é frequentemente menos confiável para ADHD. Um bloqueio duro não depende daquele mecanismo alguma. Não há lembrete para perder nenhuma notificação para esquecer de ler. O site é tanto alcançável ou não é e aquele binário é muito mais fácil de trabalhar com do que um sistema que depende de você se pegar.</p>

<h2>Bloqueio Automático, Não Força de Vontade Manual</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> bloqueia websites e apps distraentes automaticamente uma vez que uma sessão começa removendo a necessidade de notar uma distração e escolher não se engajar com ela no momento.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Automatic distraction blocking on Mac for ADHD focus" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Um Clique para Começar, Aí É Automático</h3>
<p>Iniciar uma sessão da barra de menu é uma ação única de esforço baixo. Depois disso o bloqueio funciona por conta própria — nenhuma decisão em andamento necessária para mantê-lo ativo que importa quando tomada de decisão sustentada é a parte difícil.</p>

<h3>Modo Rigoroso Remove a Brecha de Escape</h3>
<p>Impulsividade consegue fazer "apenas desabilite por um segundo" se sentir inofensivo no momento mesmo quando derrota o ponto inteiro. Modo Rigoroso remove aquela opção até o timer terminar então não há ação pequena disponível para desfazer a sessão inteira.</p>

<h3>Pomodoro para Estrutura Externa</h3>
<p>Intervalos de trabalho-descanso integrados fornecem estrutura de tempo externa que consegue ser mais fácil de seguir que tempo auto-monitorado quando percepção de tempo interno é não confiável.</p>

<h3>Pré-configurações Removem Atrito de Configuração</h3>
<p>Pré-configurações de Social Entretenimento Notícias e Compras significam que você não tem que construir uma lista de bloqueio do zero antes de poder começar — uma tarefa que ela mesma consegue se tornar um ponto de procrastinação.</p>

<p>Remova a opção não apenas o lembrete. <a href="https://apps.apple.com/app/lockin/id6802325423">Obtenha Lock In! no Mac App Store</a></p>
`,
  },
  "schedule-website-blocking-mac": {
    slug: "schedule-website-blocking-mac",
    title: "Como Agendar Bloqueio de Websites no Mac",
    description: "Iniciar manualmente um bloqueador cada manhã é uma coisa a mais para lembrar e os dias que você esquece são geralmente os dias que mais precisava. Aqui está como automatizar.",
    date: "2026-09-06",
    readTime: "4 min de leitura",
    content: `
<p>Um bloqueador de websites apenas ajuda nos dias que você lembra de ligá-lo. Se iniciar uma sessão é um passo manual no começo de seu dia de trabalho as manhãs que você é apressado distraído ou já atrasado — exatamente as manhãs que um bloqueador ajudaria mais — são também as manhãs que você é mais provável de pular inteiramente.</p>

<p>O reparo é parar de depender de lembrar. Um cronograma recorrente inicia o bloqueio para você então o hábito não depende de seu estado mental às 9am.</p>

<h2>Por Que Inicios Manuais Falham Silenciosamente</h2>
<p>Ninguém decide parar de usar um bloqueador completamente — apenas desaparece. Uma manhã ocupada você pula "apenas desta vez" e uma vez que o padrão de pular começar é fácil continuar pulando sem uma decisão deliberada de qualquer forma. Algumas semanas depois você não está mais usando isso sem nunca ter escolhido parar.</p>

<h2>Agendando Para Você Não Ter Que</h2>
<p><a href="https://apps.apple.com/app/lockin/id6802325423">Lock In!</a> suporta sessões de foco recorrentes no Mac então seu bloqueio de website e app consegue começar automaticamente em tempos definidos em vez de depender de você lembrar cada manhã.</p>

<a href="https://apps.apple.com/app/lockin/id6802325423" target="_blank" rel="noopener" style="display:block"><img src="/apps/lockin.png" alt="Scheduled website blocking sessions on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Defina Uma Vez para Suas Horas de Trabalho</h3>
<p>Configure uma sessão recorrente para seu bloco de trabalho típico — digamos 9am a 1pm nos dias de semana — e o bloqueio ativa no cronograma sem nenhuma configuração diária de sua parte.</p>

<h3>Consistência Sem Depender de Memória</h3>
<p>Porque o cronograma funciona independentemente de seu estado de manhã apressado ou distraído um começo apressado para o dia não significa que o bloqueio recebe pulado. O sistema faz o que sua memória poderia não.</p>

<h3>Ajuste Sem Perder o Hábito</h3>
<p>Reuniões e exceções acontecem — você ainda consegue iniciar uma sessão não agendada ou encerrar uma cedo se genuinamente necessário sem abandonar o cronograma recorrente para cada outro dia.</p>

<h3>Estatísticas Mostram Se o Cronograma Está Pegando</h3>
<p>O gráfico de estatísticas diárias torna fácil ver se sessões agendadas estão realmente executando consistentemente então você pega um hábito que desliza antes de se tornar um inteiramente esquecido.</p>

<p>Configure uma vez deixe executar cada dia depois. <a href="https://apps.apple.com/app/lockin/id6802325423">Obtenha Lock In! no Mac App Store</a></p>
`,
  },
};
