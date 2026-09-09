import type { ArticleSet } from "./index";

export const zhArticles: ArticleSet = {
  "best-developer-tools-app-mac": {
    slug: "best-developer-tools-app-mac",
    title: "Mac最佳开发工具应用",
    description: "在浏览器标签页、命令行脚本和书签文件夹之间切换用于基本开发工具会浪费比实际编码更多的时间。",
    date: "2026-09-06",
    readTime: "5分钟阅读",
    content: `
<p>你需要解码JWT、格式化JSON块、生成UUID、将字符串编码为Base64 — 全部要在接下来的十分钟内完成。所以你打开四个浏览器标签页、将敏感数据粘贴到四个不同的网站，希望其中没有一个在记录你的剪贴板。然后明天你又要这样做一遍。</p>

<p>开发人员拼凑书签、shell别名和一次性脚本来处理这些微小任务。从技术上讲它有效。但每次上下文切换 — 离开编辑器、找到正确的标签页、等待页面加载 — 都会削弱你解决实际问题所需的专注力。</p>

<h2>macOS开箱即用提供什么</h2>
<p>macOS附带Terminal，如果你记得正确的标志位，它可以处理其中一些。<code>uuidgen</code>给你一个UUID。<code>echo -n "text" | base64</code>处理编码。<code>python3 -m json.tool</code>格式化JSON。但没有统一的界面、没有可发现性，也没有办法在不维护自己的命令速查表的情况下处理三十种不同的操作。</p>

<p>Xcode在菜单中包含一些实用程序，但启动一个12 GB的IDE来解码URL字符串就像开卡车去拐角商店一样。</p>

<h2>41个开发工具的单一应用</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>将41个开发工具放在一个原生macOS应用中 — 可从菜单栏或独立窗口访问。工具分为五个类别：格式化工具、编码工具、生成工具、转换工具和文本工具。侧边栏允许你浏览或搜索，应用会跟踪你最近使用的工具，这样你最常见的操作总是只需一次点击。</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows开发工具应用程序在macOS中展示导航分割视图侧栏中的41个工具" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>剪贴板检测</h3>
<p>将JWT复制到剪贴板并打开Bellows — 它建议使用JWT解码器。复制JSON字符串，它会弹出JSON格式化工具。这个小功能完全消除了选择工具的步骤；应用读取你的剪贴板内容并指向你正确的实用工具。</p>

<h3>完全离线</h3>
<p>每个工具都在本地运行。没有网络请求、没有遥测、没有将API密钥粘贴到你从未听过的网站。对于处理令牌、密钥或内部数据的开发人员来说，这不是一个很好的事情 — 这是一个要求。</p>

<h3>菜单栏访问</h3>
<p>Bellows驻留在你的菜单栏中，因此总是只需一次点击即可访问，而不会混乱你的Dock。点击图标、选择工具、粘贴输入、获得输出。整个交互只需数秒钟，你永远不会离开当前工作区。</p>

<h2>这对谁有用</h2>
<p>调试API响应的后端工程师。在十六进制和RGB之间转换颜色的前端开发人员。解码Base64编码密钥的DevOps工程师。为测试数据生成UUID的移动开发人员。任何曾经想过"肯定有更快的方法"同时又伸手去拿浏览器标签页的人。</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">在Mac应用商店获取Bellows</a></p>
`,
  },
  "json-formatter-mac-app": {
    slug: "json-formatter-mac-app",
    title: "Mac的JSON格式化工具 — 原生应用、离线工作",
    description: "将未格式化的JSON粘贴到浏览器工具来读取它是你每周重复数十次而不加以质疑的工作流程。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>API返回一个200行JSON响应压缩成单行。你需要找到一个嵌套字段。所以你复制它、打开浏览器标签页、导航到十几个JSON格式化网站之一、粘贴它、点击"格式化"并仔细查看输出。如果JSON包含任何敏感内容 — 令牌、用户数据、内部ID — 你刚才把它发送到第三方服务器。</p>

<p>这是软件开发中最常见的微任务之一，大多数开发人员以最低效的方式处理它。</p>

<h2>命令行方法</h2>
<p>macOS包括<code>python3</code>，所以你可以通过Terminal中的<code>python3 -m json.tool</code>管道JSON。它适用于格式良好的输入。但它在尾部逗号上会出错、为格式错误的JSON提供密码错误消息、输出困在你的终端窗口中。没有语法高亮、没有可折叠节点、没有快速复制嵌套路径的方法。</p>

<p>一些开发人员通过Homebrew安装<code>jq</code>，这更强大但增加了另一个依赖项，需要学习其查询语法。</p>

<h2>驻留在你的Mac上的原生JSON格式化工具</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>将JSON格式化工具作为其41个内置开发工具之一包含。在输入窗格中粘贴或输入JSON，立即获得格式化的可读输出。不需要网络连接 — 一切都在你的Mac上本地运行。</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows JSON格式化工具显示macOS上的格式化输出" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>剪贴板检测</h3>
<p>将JSON字符串复制到剪贴板并打开Bellows。应用自动检测JSON内容并建议格式化工具。无需通过菜单导航 — 你需要的工具已经在等待。</p>

<h3>更大工具包的一部分</h3>
<p>JSON格式化很少单独发生。你可能需要解码一个Base64字符串来获取JSON，或提取一个包含JSON的JWT有效负载，或URL解码包含JSON对象的查询参数。有了一个应用中的41个工具，你可以链接这些操作而无需在不同的实用工具之间切换。</p>

<h3>当你最需要它时</h3>
<p>在晚上11点调试webhook有效负载。查看同事在Slack中粘贴的配置文件。检查Core Data导出。在写测试之前验证模拟响应的结构。这些是伸手去拿浏览器标签页感觉最沉重的时刻 — 以及菜单栏中的原生应用发挥最大作用的时候。</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">在Mac应用商店获取Bellows</a></p>
`,
  },
  "base64-encoder-decoder-mac": {
    slug: "base64-encoder-decoder-mac",
    title: "Mac的Base64编码器和解码器",
    description: "通过Terminal命令或网络工具解码Base64字符串会在你每次碰到日志或配置中的编码值时中断你的流程。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>你正在阅读环境变量，发现一个看起来像乱码的值 — <code>eyJhbGciOiJIUzI1NiJ9</code>。你知道它是Base64，但你无法就地读取它。所以你复制它、打开Terminal、输入<code>echo "..." | base64 --decode</code>、意识到你忘记了macOS上的<code>-D</code>标志、再试一次、最后看到解码的输出。三十秒钟消失了，本来应该花两秒钟。</p>

<p>Base64编码无处不在：身份验证头、电子邮件附件、CSS中的数据URI、Kubernetes密钥、CI/CD管道配置。如果你使用API或基础设施，你每天会多次解码Base64。</p>

<h2>为什么Terminal不够好</h2>
<p>macOS上的内置<code>base64</code>命令有效但有怪癖。在macOS上解码标志是<code>-D</code>（大写），在Linux上是<code>-d</code>，这让在两者间切换的任何人都感到困惑。多行输入需要小心引用。而且没有视觉反馈 — 你键入命令、得到一个字符串、希望你没有意外截断输入。</p>

<p>基于浏览器的工具解决了可用性问题，但造成了安全问题。Base64编码的值通常是机密：API密钥、令牌、证书数据。将它们粘贴到网站会破坏编码它们的目的。</p>

<h2>一键本地编码和解码</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>包括Base64编码器和解码器作为其macOS 41工具开发工具包的一部分。粘贴编码字符串，立即看到解码的输出。切换方向将纯文本编码为Base64。一切都在你的机器上发生 — 没有数据离开你的Mac。</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Base64编码器和解码器工具在macOS上" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>常见使用案例</h3>
<p>解码存储在YAML清单中的Base64 Kubernetes密钥。检查JWT的有效负载（它是Base64url编码的）。将图像转换为Base64数据URI以嵌入HTML。为HTTP基本身份验证头编码凭证。这些都只需单次粘贴和读取交互，而不是Terminal命令或浏览器往返。</p>

<h3>剪贴板感知</h3>
<p>复制Base64字符串并从菜单栏打开Bellows。应用检测剪贴板上的编码内容并建议Base64工具，因此你跳过了手动导航的步骤。</p>

<h3>没有安装开销</h3>
<p>与需要维护的Homebrew公式或Python脚本不同，Bellows是单一Mac应用商店安装，具有自动更新。它在Apple Silicon和Intel Mac上本地运行，没有依赖项。</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">在Mac应用商店获取Bellows</a></p>
`,
  },
  "devtoys-alternative-mac": {
    slug: "devtoys-alternative-mac",
    title: "Mac的DevToys替代品",
    description: "DevToys为Windows带来了一体化开发工具包概念，但macOS版本从未达到Mac用户期望的原生体验。",
    date: "2026-09-06",
    readTime: "5分钟阅读",
    content: `
<p>如果你在Windows上使用过DevToys，你知道它的吸引力：一个处理JSON格式化、Base64、JWT解码、哈希生成和十几个其他实用工具的应用。没有浏览器标签页、没有命令行命令、没有上下文切换。然后你转到macOS并寻找同样的东西。</p>

<p>macOS的DevToys版本存在，但它一直感觉像一个端口而不是原生应用。UI不遵循macOS约定、在Apple Silicon上性能可能滞后、它携带跨平台框架的重量。如果你选择Mac是因为其软件质量，差距是显而易见的。</p>

<h2>Mac开发人员真正想要什么</h2>
<p>macOS用户期望应用感觉像属于平台。这意味着原生侧栏、标准键盘快捷键、适当的暗模式支持、与菜单栏等系统功能的集成。这些不是化妆偏好 — 它们影响你能多快地进入、完成任务并离开。</p>

<p>开发工具应用生活在专注工作会话之间的缝隙中。它需要立即启动、无摩擦地接受输入、完成后消失。每毫秒的延迟或UI混乱都违背了这个目的。</p>

<h2>具有41个工具的Mac原生替代品</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>专为macOS用Swift构建。它使用NavigationSplitView侧栏来组织五个类别中的41个工具：格式化工具、编码工具、生成工具、转换工具和文本工具。它作为菜单栏应用和独立窗口运行 — 根据你的工作方式选择。</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows作为macOS DevToys替代品具有NavigationSplitView侧栏" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>与DevToys的比较</h3>
<p>两个应用覆盖相同的核心领域 — JSON格式化、编码/解码、哈希、UUID生成、颜色转换。Bellows的不同之处在于平台集成。剪贴板检测根据你刚刚复制的内容建议正确的工具。菜单栏访问意味着你永远不需要Cmd-Tab找到应用。最近使用跟踪在顶部显示你最常用的工具。这些是小接触，但它们在数百个日常交互中复合。</p>

<h3>完全离线</h3>
<p>与DevToys一样，Bellows完全离线运行。没有数据离开你的机器、不需要账户、没有遥测。对于处理凭证、令牌或专有数据的开发人员来说，这是必须的 — 但值得明确确认。</p>

<h3>原生性能</h3>
<p>因为Bellows使用原生macOS框架而不是Electron或跨平台工具包构建，它立即启动并使用最少内存。它表现得像一个系统实用工具，而不是一个穿着原生皮肤的网络应用。</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">在Mac应用商店获取Bellows</a></p>
`,
  },
  "jwt-decoder-mac": {
    slug: "jwt-decoder-mac",
    title: "Mac的JWT解码器 — 粘贴并检查",
    description: "将JWT粘贴到jwt.io来读取其声明有效，直到你意识到你刚才发送了一个有效的令牌到第三方网站。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>你从请求头或日志文件中获取JWT。它是一个长的点分隔符字符串，对人眼来说没有意义。你需要检查过期声明、验证发行者或查看嵌入的范围。所以你打开jwt.io、粘贴令牌、在右侧窗格中读取解码的有效负载。</p>

<p>这个工作流有一个问题：你刚才通过网络发送了有效的身份验证令牌到你不控制的网站。JWT有效负载通常包含用户ID、电子邮件地址、角色和权限。令牌本身可能仍然有效。即使jwt.io是可信的，你的公司安全策略可能不同意。</p>

<h2>JWT实际上包含什么</h2>
<p>JSON Web Token有三个由点分隔的部分：头（算法和类型）、有效负载（声明 — 过期、发行者、主题、自定义数据）和签名。头和有效负载只是Base64url编码的JSON。你不需要服务器或特殊库来读取它们 — 你需要一个Base64解码器和JSON格式化工具。但每次都在Terminal中手动执行这个操作很繁琐。</p>

<h2>在你的Mac上本地解码JWT</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>包括一个专用的JWT解码器，将令牌拆分为三个部分并将解码的头和有效负载显示为格式化的JSON。粘贴令牌、看到声明。没有网络请求、没有第三方服务器、没有泄露有效令牌的风险。</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows JWT解码器在macOS上显示解码的头和有效负载" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>剪贴板感知</h3>
<p>从浏览器开发工具、日志文件或Slack消息中复制JWT。打开Bellows，它检测剪贴板上的令牌格式，立即建议JWT解码器。解码的有效负载出现在一步中。</p>

<h3>一目了然检查过期</h3>
<p>解码JWT最常见的原因是检查它是否已过期。<code>exp</code>声明是Unix时间戳 — 对机器很容易，对人类毫无意义。看到解码的有效负载让你快速读取过期时间，同时还能看到其他声明如<code>iss</code>、<code>sub</code>和<code>aud</code>，无需在你的头脑中转换时间戳。</p>

<h3>更大工具包的一部分</h3>
<p>JWT解码通常导致相关任务：解码声明内的Base64值、对字符串进行哈希以与指纹比较或URL解码有效负载中存储的重定向URI。有了应用中的41个工具，这些后续任务不需要切换到不同的实用工具。</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">在Mac应用商店获取Bellows</a></p>
`,
  },
  "url-encoder-decoder-mac": {
    slug: "url-encoder-decoder-mac",
    title: "Mac的URL编码器和解码器",
    description: "读取充满%20和%3D的百分比编码URL就像读一句话，其中每个空格都被数字替换。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>你从服务器日志中提取一个URL，它看起来像这样：<code>https://example.com/search?q=hello%20world&redirect=https%3A%2F%2Fother.com%2Fpath</code>。你需要读取查询参数，但百分比编码使其在一瞥间几乎不可能。所以你将它粘贴到浏览器工具、解码它、读取结果、然后重新编码修改后的版本来测试某些东西。两次往返到网站做一个微不足道的操作。</p>

<p>URL编码是开发人员处理但很少考虑的事情之一 — 直到破坏的重定向、格式错误的查询字符串或双编码参数将五分钟的任务变成一小时的调试会话。</p>

<h2>当URL编码造成真正的问题时</h2>
<p>双编码是经典陷阱。URL被应用程序编码一次，然后被中间件层再次编码，将<code>%20</code>变为<code>%2520</code>。要诊断这个问题，你需要逐步解码URL并看到额外编码从何处渗入。在Terminal中使用<code>python3 -c "import urllib.parse; print(urllib.parse.unquote('...'))"</code>可以工作，但对长URL来说很慢并且容易出错。</p>

<p>编码错误也会破坏OAuth流、webhook URL和API回调，其中重定向URI必须完全匹配。能够快速编码和解码让你比较你的应用发送的内容与服务器期望的内容。</p>

<h2>立即编码和解码URL</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>在其41个开发工具中包括URL编码器和解码器。粘贴编码的URL以看到可读的版本。输入普通URL以获得正确编码的输出。一次点击在编码和解码之间切换，结果实时更新。</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows URL编码器和解码器工具在macOS上" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>调试重定向</h3>
<p>OAuth和SSO流将重定向URI作为URL编码的查询参数传递。当重定向失败时，第一步是解码URL以验证目标与你注册的回调匹配。拥有本地工具意味着你可以在不离开IDE或将可能敏感的回调URL粘贴到公开网站的情况下完成此操作。</p>

<h3>使用查询字符串</h3>
<p>通过URL参数接受复杂过滤器或搜索查询的API通常需要仔细编码特殊字符，如<code>&</code>、<code>=</code>、<code>+</code>和空格。专用编码器确保你获得正确的输出，无需猜测哪些字符在特定上下文中需要转义。</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">在Mac应用商店获取Bellows</a></p>
`,
  },
  "hash-generator-mac-app": {
    slug: "hash-generator-mac-app",
    title: "Mac的哈希生成器 — MD5、SHA-256及更多",
    description: "验证文件完整性或通过Terminal命令生成密码哈希意味着每次都记住每个算法的不同标志。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>你从GitHub下载二进制文件，发布页面列出SHA-256校验和。要验证它，你打开Terminal、输入<code>shasum -a 256 ~/Downloads/file.tar.gz</code>、等待它计算、然后手动并排比较两个64字符十六进制字符串。一个错误的字符，你无法判断文件是否损坏或你只是误读了哈希。</p>

<p>或者你需要生成字符串的MD5哈希 — 也许是缓存键、Gravatar URL或仍使用MD5签名的遗留API。命令在macOS上是<code>md5 -s "text"</code>，在Linux上是<code>md5sum</code>。小差异，但足以在你在系统间切换时拖累你。</p>

<h2>Terminal中的哈希：有效，但勉强</h2>
<p>macOS附带<code>md5</code>、<code>shasum</code>和<code>openssl dgst</code>，涵盖大多数算法。但每个工具都有自己的语法。<code>md5</code>对字符串输入使用<code>-s</code>。<code>shasum</code>使用<code>-a</code>选择算法。<code>openssl dgst</code>需要<code>-sha256</code>或<code>-md5</code>作为标志。没有单一命令让你选择算法并对字符串进行哈希而无需查阅手册页。</p>

<p>对于偶尔需要快速哈希的开发人员，记住这些变化的认知开销与任务的简单性不相称。</p>

<h2>一次粘贴生成哈希</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>包括支持MD5、SHA-1、SHA-256、SHA-384、SHA-512和其他常见算法的哈希生成器。输入或粘贴你的输入、选择算法，哈希立即出现。没有要记住的标志、没有语法可以查阅。</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows哈希生成器在macOS上显示MD5和SHA-256输出" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>验证下载</h3>
<p>当发布页面提供校验和时，你想将其与你下载的文件进行比较。在视觉工具中生成哈希使比较比在终端窗口中盯着两个字符串更容易 — 特别是对于64字符SHA-256哈希。</p>

<h3>API签名和缓存键</h3>
<p>某些API需要用于请求身份验证的HMAC或基于哈希的签名。其他则使用MD5或SHA哈希作为缓存键或内容标识符。能够快速生成请求体或字符串的哈希让你在调试期间验证你的实现是否与预期值匹配。</p>

<h3>离线和私密</h3>
<p>哈希输入可能包含敏感数据 — 密码、API密钥、内部标识符。Bellows完全在你的Mac上运行，没有网络访问，所以你哈希的任何东西都不会离开你的机器。</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">在Mac应用商店获取Bellows</a></p>
`,
  },
  "regex-tester-mac-app": {
    slug: "regex-tester-mac-app",
    title: "Mac的正则表达式测试工具 — 原生和离线",
    description: "在没有实时反馈的情况下编写正则表达式就像在没有语法高亮的情况下编辑代码 — 技术上可能，但不必要地痛苦。",
    date: "2026-09-06",
    readTime: "5分钟阅读",
    content: `
<p>你需要一个正则表达式来验证电子邮件地址、从日志行中提取时间戳或解析有时包含带引号逗号的CSV字段。你写一个模式、针对代码中的一个示例字符串测试它、发现它在边界情况下失败、调整它、重建、再次测试。每次迭代需要30秒的编译-运行-检查，大多数正则表达式模式需要五或六次迭代才能可靠工作。</p>

<p>替代方案是regex101.com — 一个显示实时匹配、解释模式的每一部分、让你针对多个输入测试的出色工具。但它在浏览器中运行，这意味着你将测试数据（日志行、用户记录、API响应）粘贴到公开网站。而且你需要网络连接。</p>

<h2>实时反馈对正则表达式为什么很重要</h2>
<p>正则表达式本质上很密集。<code>.*</code>和<code>.*?</code>（贪心与惰性）之间的区别可以改变你的模式是匹配一行还是整个文件。前向断言、字符类和捕获组以你很难在你的头脑中推理的方式交互。看到与你键入的模式匹配的高亮将正则表达式从猜测转变为可视、迭代的过程。</p>

<p>这就是为什么基于浏览器的测试工具如此受欢迎 — 它们提供了源代码中编写正则表达式所没有的反馈循环。问题是它们需要浏览器、网络连接和信任你的测试数据保持私密。</p>

<h2>在你的Mac上本地测试正则表达式</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>包括一个正则表达式测试工具作为其41个开发工具之一。输入你的模式、粘贴你的测试字符串，看到实时匹配高亮。调整模式，结果立即更新 — 没有编译步骤、没有页面重新加载、没有网络请求。</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows正则表达式测试工具在macOS上具有实时匹配高亮" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>常见模式变得更容易</h3>
<p>从日志文件中提取日期（<code>\\\\d{4}-\\\\d{2}-\\\\d{2}</code>）。使用可选国家代码验证电话号码。在自由格式文本中匹配URL。解析结构化数据，如字段可能被引用的CSV或TSV。这些模式在概念上很简单，但边界情况很棘手 — 实时测试工具让你在到达生产之前捕获这些边缘。</p>

<h3>没有数据离开你的Mac</h3>
<p>如果你的测试数据包括服务器日志、用户信息或内部系统输出，在离线测试正则表达式模式不仅很方便 — 这是负责任的选择。Bellows完全在你的机器上运行，没有网络访问。</p>

<h3>总是可用</h3>
<p>Bellows驻留在你的菜单栏中，所以正则表达式测试工具只需一次点击即可访问。没有浏览器标签页要查找、没有要记住的URL、没有加载轻弹。打开它、测试你的模式、复制结果、关闭它。整个交互只需数秒钟。</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">在Mac应用商店获取Bellows</a></p>
`,
  },
  "color-picker-hex-rgb-mac": {
    slug: "color-picker-hex-rgb-mac",
    title: "Mac的颜色选择器 — 十六进制和RGB",
    description: "手动在十六进制代码、RGB值和HSL表示法之间转换容易出错，当你一天做这件事多次时是不必要的。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>设计师以十六进制发送给你一种颜色：<code>#1A73E8</code>。你的CSS框架想要HSL。你的iOS代码库需要0到1之间的RGB值。你的Android项目使用ARGB整数。一种颜色、四种格式，你又一次打开浏览器标签页在它们之间转换。</p>

<p>颜色转换是微不足道的数学（十六进制到RGB只是基16到十进制），但在你的头脑中为三个通道执行此操作，同时试图保持对布局或样式的专注，是你不需要的干扰。</p>

<h2>macOS提供什么</h2>
<p>macOS有一个从某些应用通过系统颜色面板访问的内置颜色选择器。它显示RGB滑块和十六进制字段，但它设计用于直观地选择颜色，而不是以编程方式在格式之间转换。没有简单的方法来粘贴十六进制代码并获得HSL等价物，或输入RGB整数并复制十六进制输出。而且它被埋在特定应用中，而不是系统范围内可用。</p>

<h2>立即在格式之间转换颜色</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>在其41个开发工具中包括一个颜色转换器。以任何支持的格式输入颜色 — 十六进制、RGB、HSL — 并看到每个其他格式中的等价值。一次点击复制任何你需要的表示。</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows颜色选择器在macOS上显示十六进制、RGB和HSL转换" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>从设计到代码</h3>
<p>Figma导出十六进制的颜色。Tailwind CSS使用自定义颜色值。SwiftUI需要<code>Color(red:green:blue:)</code>与十进制值。Android XML使用<code>#AARRGGBB</code>。一次看到所有格式消除了心理数学和到转换网站的往返。</p>

<h3>检查对比和可读性</h3>
<p>当你可以看到颜色与其数值一起呈现时，你可以快速完整性检查文本颜色是否对背景可读。这比为样式表中的每个颜色对切换到单独的对比度检查器更快。</p>

<h3>菜单栏访问</h3>
<p>需要在编写CSS时快速转换吗？点击菜单栏中的Bellows图标、选择颜色工具、粘贴十六进制代码、复制RGB值。整个交互需要不到五秒钟，你永远不会离开编辑器。</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">在Mac应用商店获取Bellows</a></p>
`,
  },
  "uuid-generator-mac": {
    slug: "uuid-generator-mac",
    title: "Mac的UUID生成器 — 即时复制",
    description: "通过Terminal或代码片段生成UUID会为一个应该完全无脑的任务增加摩擦。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>你需要一个UUID。也许你在编写单元测试，需要一个模拟对象的唯一标识符。也许你在播种数据库，需要主键。也许你在创建一个新实体在配置文件中，模式需要一个UUID。不管什么原因，你必须停止你在做的事情、在某个地方生成UUID、复制它、将其粘贴回你的代码。</p>

<p>这足够频繁地发生，大多数开发人员都有肌肉记忆解决方案：Terminal中的<code>uuidgen</code>、浏览器书签或编辑器中的代码片段。每个都有效。没有一个是真正无摩擦的。</p>

<h2>Terminal方法</h2>
<p>macOS包括<code>uuidgen</code>，它将UUID v4打印到stdout。它快速可靠。但它默认输出大写（某些系统期望小写）、一次生成一个UUID，使用它意味着切换到Terminal、运行命令、选择输出、复制它、切换回来。对于单个UUID，这很好。对于十个UUID来播种测试数据库，它变得繁琐。</p>

<h2>从菜单栏生成UUID</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>作为其41个开发工具之一包括一个UUID生成器。从菜单栏打开它、生成UUID、将其复制到剪贴板。需要另一个吗？再次生成。工具总是一次点击，运行离线，生成标准v4 UUID，可以粘贴到代码、配置或数据库种子文件中。</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows UUID生成器在macOS上具有即时复制" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>测试和模拟数据</h3>
<p>单元测试和集成测试通常需要看起来逼真的唯一标识符。在任何地方硬编码相同的UUID会导致微妙的错误，当测试并行运行或测试意外依赖于特定ID时。为每个测试装置生成新的UUID是一个简单的习惯，防止了整个类别的不稳定测试失败。</p>

<h3>数据库播种</h3>
<p>当用样本数据填充开发数据库时，你需要不会与生产数据碰撞的唯一主键或其他开发人员的种子文件。按需生成UUID比增加整数或使用可能重叠的可预测模式更清洁。</p>

<h3>总是可用</h3>
<p>因为Bellows驻留在你的菜单栏中，UUID生成器无需打开Terminal、切换应用或导航到书签即可访问。点击、生成、复制、粘贴。工作流中的中断以秒计，而不是上下文切换。</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">在Mac应用商店获取Bellows</a></p>
`,
  },
  "all-in-one-dev-tools-mac-offline": {
    slug: "all-in-one-dev-tools-mac-offline",
    title: "Mac的一体化开发工具 — 41个工具、完全离线",
    description: "用于编码的浏览器标签页、用于哈希的Terminal窗口、用于格式化的书签 — 开发者微任务分散在十几个地方。",
    date: "2026-09-06",
    readTime: "5分钟阅读",
    content: `
<p>计算你在典型调试会话中使用的工具数量。一个JSON格式化工具来读取API响应。一个Base64解码器用于身份验证头。一个JWT检查器来检查令牌声明。一个URL解码器来理顺重定向链。一个哈希生成器来验证校验和。那是五个浏览器标签页打开、五个网站现在拥有你的数据、五个上下文切换把你拉离实际问题。</p>

<p>这些不是复杂的任务。每个需要十秒钟的实际工作。但找到正确工具、切换到它、粘贴输入、复制输出的开销加起来是每个会话数分钟，每周数小时。更糟的是，它在你最需要在头脑中持有复杂系统时破裂了你的注意力。</p>

<h2>当前的格局</h2>
<p>开发人员从混合来源组装了个人工具包。书签到网站，如jwt.io、regex101.com和jsonformatter.org。<code>.zshrc</code>中的shell别名和函数。添加格式化或编码的VS Code扩展。Homebrew包，如<code>jq</code>和<code>htop</code>。每个工具被添加来解决一个问题，它们中没有一个彼此交谈。</p>

<p>结果是一个技术上有效但没有一致性的工具链。你无法预测下一个实用工具将驻留在何处。你无法链接操作而无需手动复制一个工具的输出并将其粘贴到另一个。而且你无法保证任何基于网络的工具都在保持你的数据隐私。</p>

<h2>一个原生macOS应用中的41个工具</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>将41个开发工具整合到一个单一macOS应用程序中，组织在五个类别中：</p>

<ul>
<li><strong>格式化工具</strong> — JSON、XML、SQL、HTML等。粘贴混乱输入，获得干净输出。</li>
<li><strong>编码工具</strong> — Base64、URL编码、HTML实体、JWT解码。双向编码和解码。</li>
<li><strong>生成工具</strong> — UUID、哈希（MD5、SHA-256、SHA-512）、Lorem Ipsum、密码。一步生成和复制。</li>
<li><strong>转换工具</strong> — 颜色（十六进制/RGB/HSL）、数字基数、时间戳、单位。在格式之间转换而无需心理数学。</li>
<li><strong>文本工具</strong> — 正则表达式测试工具、差异检查工具、大小写转换器、行排序器、字符计数器。你每天使用的文本操作实用工具。</li>
</ul>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows在macOS上显示组织在类别中的所有41个开发工具" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>剪贴板检测</h3>
<p>将某些东西复制到剪贴板并打开Bellows。应用分析剪贴板内容并建议最相关的工具。复制JWT，它提供解码器。复制JSON，它弹出格式化工具。复制Base64字符串，它指向编码工具。这消除了选择工具的步骤 — 应用为你完成。</p>

<h3>菜单栏和窗口模式</h3>
<p>Bellows作为菜单栏应用运行快速、一次性操作：点击图标、使用工具、关闭它。对于更长的会话 — 如测试一系列正则表达式模式或转换多个颜色值 — 切换到窗口模式并将其与编辑器保持在一起。两种模式都使用相同的接口，具有用于浏览类别的NavigationSplitView侧栏。</p>

<h3>完全离线</h3>
<p>你Mac上的每个工具都在本地运行。没有网络请求、没有账户、没有遥测。这不是一个哲学立场 — 这是对处理令牌、密钥、凭证和每日专有数据的开发人员的实际要求。你的输入留在你的机器上。</p>

<h3>最近使用跟踪</h3>
<p>你最常使用的工具会浮现在侧栏的顶部。随着时间的推移，Bellows适应你的工作流程，所以你需要的工具总是在手边，而不是埋在你必须展开的类别中。</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">在Mac应用商店获取Bellows</a></p>
`,
  },
  "json-validator-mac-app": {
    slug: "json-validator-mac-app",
    title: "Mac的JSON验证器 — 立即找到错误",
    description: "缺少逗号或杂乱的括号可能会破坏整个配置文件，逐行扫描来寻找它会浪费你没有的时间。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>你的构建因"JSON在位置4,821处出现意外令牌"而失败。太好了，谢谢。现在你必须滚动浏览一个四千字符的配置文件，在你的头脑中计数括号，试图找出哪一个不匹配。这是软件开发中最可避免的时间浪费之一，它不断发生，因为JSON对小错误零容忍。</p>

<p>数组中最后一个项目之后的尾部逗号。关键周围缺少引号。从其他地方复制的额外右括号。其中任何一个都完全破坏解析，错误消息很少指向实际问题 — 它指向解析器放弃的地方，这通常远离真实错误。</p>

<h2>为什么位置数字没有帮助</h2>
<p>大多数JSON解析器将错误报告为字符偏移，而不是你可以跳转到编辑器的行和列。将位置4,821转换为"行112，在第三个对象附近某个地方"需要手动计数或编写一次性脚本。两者都不是你下午的好用处。</p>

<p>一些编辑器内联突出显示JSON语法错误，这对你积极编写的文件有帮助。但对于你从API、同事或继承的遗留配置收到的JSON，你需要一个工具来接收原始文本并确切地告诉你什么是错误以及在哪里。</p>

<h2>在Mac上验证JSON而无需离开</h2>
<p>也验证的JSON格式化工具节省猜测。粘贴JSON，如果格式错误，你会得到一个清晰的错误，指向特定的行和字符，而不是原始字节偏移。如果有效，它呈现干净，正确缩进，所以你可以直观地扫描结构。<a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>在同一工具中处理两种情况 — 你不需要提前知道你的JSON是否被破坏。</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows JSON格式化工具在macOS上验证并突出显示语法错误" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>在运送之前捕获错误</h3>
<p>配置文件、API请求体和装置数据都靠有效JSON生存或死亡。在提交配置更改或发送测试请求之前运行快速验证通过会捕获那种否则会在管道中后来作为混乱运行时错误表面的印刷错误。</p>

<h3>使用不信任的输入</h3>
<p>当同事在Slack中粘贴JSON块，或者你从你不完全信任的第三方API中提取，在本地验证它意味着你永远不必将该数据发送到外部网站仅仅检查它是否解析。</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">在Mac应用商店获取Bellows</a></p>
`,
  },
  "html-entity-encoder-mac": {
    slug: "html-entity-encoder-mac",
    title: "Mac的HTML实体编码器和解码器",
    description: "渲染用户提交的文本安全地，或读取充满&amp;和&lt;的页面源，都归结为相同的繁琐转换问题。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>你在调试为什么网页上的文本显示为<code>&amp;amp;</code>而不是纯粹符号。或者你手工编写HTML，需要转义小于号，使浏览器不将其解释为标签的开始。不管怎样，你处理的是HTML实体 — 需要特殊编码来正确显示或避免破坏标记的小字符集。</p>

<p>常见的很容易记住：<code>&amp;</code>变为<code>&amp;amp;</code>，<code>&lt;</code>变为<code>&amp;lt;</code>，<code>&gt;</code>变为<code>&amp;gt;</code>。但一旦你进入卷曲引号、em破折号、不间断空格和口音字符，实体名称停止直观，你最终每次都搜索参考表。</p>

<h2>安全角度，而不仅仅是格式化</h2>
<p>HTML实体编码不是纯粹化妆。未能在渲染于网页中之前编码用户提交的内容是跨站脚本的经典向量。如果你的应用程序曾需要显示原始文本 — 评论、用户名、表单输入 — 在HTML中，理解究竟什么被编码以及如何是编写安全代码的一部分，而不仅仅是清洁外观输出。</p>

<p>相反，解码同样常见的需要：刮网页、解析RSS提要或读取导出的CMS文档通常会留给你需要在其他地方使用之前转换回纯字符的实体编码文本。</p>

<h2>一步中编码和解码</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>在其41个开发工具中包括一个HTML实体编码器和解码器。粘贴原始文本来获得正确转义的HTML实体，或粘贴编码标记来看到可读的文本。两个方向立即完全离线发生。</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows HTML实体编码器和解码器工具在macOS上" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>清理刮取的内容</h3>
<p>从RSS提要、导出的博客文章或刮取的HTML提取的文本经常充满实体代码，其中纯标点符号应该是。在存储或在其他地方显示之前批量解码避免了充满杂乱<code>&amp;#8217;</code>的页面，其中应该是撇号。</p>

<h3>手工编写标记</h3>
<p>当你手工编辑HTML模板或电子邮件通讯并需要在可见文本中包含字面上的角括号或和号时，第一次正确编码会从只有在你已经发送电子邮件后才显示的渲染错误中节省你。</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">在Mac应用商店获取Bellows</a></p>
`,
  },
  "timestamp-converter-mac": {
    slug: "timestamp-converter-mac",
    title: "Mac的Unix时间戳转换器",
    description: "日志行读取1743984000，你需要知道那是三小时前还是三周前，而不是手工做数学。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>Unix时间戳对机器完美，对人类无用。每个日志聚合器、数据库记录和API响应似乎将时间存储为原始整数，计算自1970年1月1日以来的秒数，每个开发人员都曾在某个点尝试目测是否<code>1725580800</code>是最近还是古老的。</p>

<p>通常的退路是快速Google搜索 — "1725580800到日期" — 有效但为某件应该花两秒钟查找的事添加浏览器往返。或者你在语言控制台中写一个单线：浏览器JS控制台中的<code>new Date(1725580800000)</code>，记得乘以1000毫秒，希望你没有在第一位混淆秒和毫秒。</p>

<h2>秒vs毫秒：经典陷阱</h2>
<p>Unix时间通常是秒，但JavaScript的<code>Date</code>对象期望毫秒，某些API（特别是那些基于JavaScript构建的）默认返回毫秒时间戳。混淆这些会给你一个日期，要么疯狂地在未来，要么卡住1970年代的代纪中 — 在调试"为什么这个日期看起来是错的"问题时，每个开发人员至少犯过一次的错误。</p>

<p>时区增加了另一层。时间戳转换为特定的瞬间，但在你的本地时间与UTC与服务器时区中显示它可以使相同值看起来像三个完全不同的时间，当你试图将错误与部署关联时这很重要。</p>

<h2>立即双向转换</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>包括一个时间戳转换器，将Unix时间戳变为可读的日期和时间，并将日期转换回时间戳 — 两个方向，无需数学。它处理秒与毫秒的歧义，所以你不必猜测。</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Unix时间戳转换器在macOS上显示日期和时间输出" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>调试日志和数据库</h3>
<p>日志聚合器、数据库行和API有效负载以原始数字形式存储时间远比作为可读字符串。在追踪事件时转换一些时间戳是在任何严肃调试会话期间发生数十次的小任务。</p>

<h3>调度和到期逻辑</h3>
<p>缓存到期、令牌过期和计划作业时间戳都在底层是Unix时间。快速检查给定的到期值实际对应什么壁钟时间帮助你验证你的TTL逻辑正在做你认为它在做的事情。</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">在Mac应用商店获取Bellows</a></p>
`,
  },
  "markdown-preview-mac-app": {
    slug: "markdown-preview-mac-app",
    title: "Mac的Markdown预览 — 粘贴并查看",
    description: "在原始Markdown中编写README或拉取请求描述意味着猜测头部、列表和代码块将实际呈现如何。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>你用嵌套的项目符号点、几个代码块和一个比较两种方法的表格写README。它在你的编辑器中的纯文本中看起来很好。然后你将其推送到GitHub，表格对齐错误、你的一个代码块没有正确关闭、编号列表因为杂乱的空行而在中途重新开始为1。现在你推送小修复提交仅仅是为了让格式正确。</p>

<p>Markdown足够简单，用于从内存中的基本格式书写，但表、嵌套列表和代码围栏都有小的语法怪癖，在渲染器之间略有不同。GitHub Flavored Markdown与CommonMark不同，与你的静态站点生成器使用的不同。"在我的头脑中看起来正确"与"在页面上呈现正确"之间的差距是实时预览赚取其保留的地方。</p>

<h2>为什么提交来检查是坏工作流程</h2>
<p>推送提交仅仅看README如何呈现，然后推送另一个来修复破坏的表，然后另一个来修复修复，用与实际内容无关的格式噪声混淆了你的提交历史。它也意味着每个预览循环需要与推送和页面重新加载一样长 — 足够慢，你停止费力检查，只是希望它看起来很好。</p>

<h2>看到呈现的输出当你键入时</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>包括一个Markdown预览工具，当你粘贴或键入原始Markdown时呈现格式化的输出。头部、列表、表、链接和代码块都立即呈现，所以你可以在它们最终进入提交之前捕获格式化错误。</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Markdown预览工具在macOS上呈现格式化文本" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>编写README和PR描述</h3>
<p>拉取请求描述和README文件通常是审查人员或新贡献者首先读的东西。在你提交之前检查头部、清单和链接图像呈现正确会节省一轮"能你修复格式化"评论。</p>

<h3>脱机起草文档</h3>
<p>在飞行中或在网络不可靠的地区编写文档不意味着放弃看到你的格式化正确呈现。本地预览工具的工作方式相同，不管你是否连接。</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">在Mac应用商店获取Bellows</a></p>
`,
  },
  "lorem-ipsum-generator-mac": {
    slug: "lorem-ipsum-generator-mac",
    title: "Mac的Lorem Ipsum生成器 — 复制任何长度",
    description: "用占位符文本填充设计模型或测试装置不应该每次都需要访问网站。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>你在构建卡片组件，需要三个段落的占位符文本来看它如何环绕。或者你正在编写需要一个长字符串来检查截断行为的测试装置。不管怎样，你需要填充文本，在文本字段中键入"asdf asdf asdf"不会给你逼真的单词长度或句子结构来处理。</p>

<p>Lorem Ipsum已经是这个问题的默认答案数十年，正是因为其拉丁衍生的伪文本具有模拟真实散文的单词和句子长度的自然分布，而无需分散注意或有意义 — 读者的眼睛不会被拉进实际阅读它，这正是当你试图评估布局时的要点。</p>

<h2>超越复制粘贴相同段落</h2>
<p>大多数开发人员保存单一Lorem Ipsum段落并在任何地方重用它，这有效直到你需要一个更长的块用于滚动测试，或一个更短的块来检查单行截断椭圆的表现。按需生成确切长度的文本 — 一个句子、一个段落、几个段落 — 比重用同一个固定块和手工调整或复制要好。</p>

<h2>生成你需要的确切长度</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>包括一个Lorem Ipsum生成器，生成占位符文本在你的布局或测试情况需要的任何长度，准备好一次点击复制。没有浏览器标签页、没有广告投放生成网站、没有等待页面加载只是为了抓取三个句子。</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Lorem Ipsum生成器在macOS上生成占位符文本" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>原型UI布局</h3>
<p>在真实内容存在之前，占位符文本让你评估设计是否优雅处理不同的内容长度 — 短标题、长标题、环绕两行对五行的段落。快速生成不同长度的文本加速了该评估。</p>

<h3>测试装置和种子数据</h3>
<p>检查文本截断、字符限制或溢出行为的自动化测试需要已知长度的逼真字符串。按需生成它们比在数十个测试文件中硬编码相同占位符字符串更快。</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">在Mac应用商店获取Bellows</a></p>
`,
  },
  "xml-formatter-mac": {
    slug: "xml-formatter-mac",
    title: "Mac的XML格式化工具和验证器",
    description: "SOAP响应和遗留配置文件仍然以未缩进的XML到达，没有格式化读取它比需要的更难。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>JSON得到所有关注，但许多系统仍然使用XML — SOAP API、Android布局文件、Maven的<code>pom.xml</code>、RSS源、无数企业集成在过去十五年没有改变它们的数据格式。当其中之一被最小化为单行时，读取嵌套结构没有适当的缩进真的很困难。</p>

<p>不像JSON，XML也必须处理命名空间、属性和自关闭标签，这使得手工格式化更容易出错。在深度结构化的SOAP信封中误数缩进级别很容易做到，并且很难注意到直到某个下游的东西断裂。</p>

<h2>这在2026年为什么还重要</h2>
<p>尽管JSON在新API设计中的主导地位，XML在企业软件、政府系统和Android开发中没有消失。如果你与银行的支付网关、遗留保险系统或较早的基于SOAP的网络服务集成，你最终将需要读取和调试原始XML — 盯着未格式化的响应不是花费那个时间的生产方式。</p>

<h2>一遍中格式化和验证</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>包括一个XML格式化工具，正确缩进嵌套元素并标记格式错误的标记 — 未关闭的标签、不匹配的属性引号、破坏的命名空间声明。粘贴最小化的XML并立即获得可读的、正确缩进的文档。</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows XML格式化工具在macOS上显示缩进的嵌套元素" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>调试SOAP和遗留API</h3>
<p>SOAP信封用几层样板环绕实际有效负载，这使得找到你实际关心的字段当一切都在一行时很繁琐。先格式化响应将文本墙变为可导航树。</p>

<h3>审查配置和构建文件</h3>
<p>Android的<code>AndroidManifest.xml</code>、Maven的<code>pom.xml</code>和无数CI配置格式是XML下的封面。当其中之一被程序生成或修改并最终未缩进时，快速格式化通过使diff和内容都更容易审查。</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">在Mac应用商店获取Bellows</a></p>
`,
  },
  "cron-expression-helper-mac": {
    slug: "cron-expression-helper-mac",
    title: "Mac的Cron表达式助手",
    description: "手工编写计划表达式并希望它意味着你认为它意味着什么是作业如何最终在上午3点而不是下午3点运行的原因。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>Cron语法是五个数字和符号字段，不知何故需要表达"每个工作日上午9点，假期除外"或"每隔15分钟在8到6点之间"。字段是分钟、小时、日期、月份和星期几，以一个顺序的方式在第一次尝试时没有人记得正确，且星号、逗号、破折号和斜杠所有意味着根据位置不同的东西。</p>

<p><code>0 9 * * 1-5</code>看起来合理，但那是上午9点还是晚上9点，以及<code>1-5</code>是否意味着周一到周五或其他取决于cron实现是否计数周日为0或7？在部署管道、备份作业或计划报告中把这个弄错意味着要么无声失败要么作业在不方便的小时触发 — 有时在任何人注意到之前的几周。</p>

<h2>每个Cron实现都有其自己的怪癖</h2>
<p>标准Unix cron、Kubernetes CronJobs、AWS EventBridge和各种CI平台都大致使用相同的五字段语法，但以小方式不同 — 是否支持秒、星期几编号如何工作、某些速记字符串如<code>@daily</code>是否有效。编写第一次部署时正确工作的计划意味着理解你究竟针对的是cron的哪个风味。</p>

<h2>将表达式翻译为纯英文</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>包括一个cron表达式助手，取一个计划字符串并解释它在纯语言中实际意味着什么，所以你可以在任何地方部署计划作业之前验证你的意图。</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows cron表达式助手在macOS上解释计划字符串" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>在部署前验证</h3>
<p>触发在错误时间的计划作业通常是一个无声的失败 — 没有东西坠毁，它只是在你没有打算时运行，有时与维护窗口重叠或在峰值流量期间锤击数据库。检查cron字符串在合并部署配置之前的纯英文含义在它变为凌晨2点页面之前捕获这个。</p>

<h3>阅读某人else的计划</h3>
<p>继承一个有十几个现有cron作业的代码库意味着在你可以安全地更改任何之前弄清楚每个作业做什么。快速翻译每个表达式比逐个作业地手动解析五个晦涩字段更快。</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">在Mac应用商店获取Bellows</a></p>
`,
  },
  "yaml-to-json-mac": {
    slug: "yaml-to-json-mac",
    title: "Mac的YAML到JSON转换器",
    description: "Kubernetes清单、CI管道和配置文件都使用YAML，但你实际需要检查数据的工具通常期望JSON。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>YAML在基础设施中无处不在 — Kubernetes清单、GitHub Actions工作流、Docker Compose文件、Ansible Playbook。它可读且紧凑，直到缩进变得不明确、制表符潜入一个空格应该在的地方、或你需要将数据提供给只理解JSON的工具。</p>

<p>手工在两者之间转换是机械但繁琐的：YAML的基于缩进的嵌套变为JSON的括号和方括号、未引用的YAML字符串需要引号、YAML的更许可的语法（未引用的布尔值、多行字符串、锚点和引用）并不总是映射干净到JSON的更严格规则。</p>

<h2>为什么你需要两种格式</h2>
<p>你可能在YAML中写Kubernetes清单，因为它更容易读取和版本控制，但需要JSON等价物来提供给脚本、API调用或<code>jq</code>管道，期望JSON输入。或者你在调试为什么CI管道的YAML配置不以你期望的方式解析，看到下面的JSON结构使实际的嵌套以一个空格敏感YAML有时不是的方式明确。</p>

<h2>立即在格式之间转换</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>在其41个开发工具中包括一个YAML到JSON转换器。粘贴YAML并立即获得等价JSON结构，正确的嵌套和类型保留 — 没有手工重新格式化、没有在缩进级别上猜测。</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows YAML到JSON转换器工具在macOS上" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>调试Kubernetes和CI配置</h3>
<p>当清单表现得出人意料时，看到下面的JSON结构移除任何关于YAML实际嵌套方式的歧义 — 当误放的缩进静默地改变了哪个键属于哪个父对象时有用。</p>

<h3>将配置提供给脚本</h3>
<p>大量的脚本和自动化工具更自然地使用JSON而不是YAML。转换一次配置文件并将JSON输出传递下游通常比教你管道中的每个脚本都直接解析YAML更简单。</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">在Mac应用商店获取Bellows</a></p>
`,
  },
  "text-diff-tool-mac": {
    slug: "text-diff-tool-mac",
    title: "Mac的文本差异工具 — 肩并肩比较两个文本",
    description: "一个配置文件、电子邮件草稿或段落副本的两个版本看起来几乎相同，寻找改变的一个词通过眼睛惊人困难。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>Git为已经在仓库中跟踪的代码美妙处理diff。但大量的文本比较发生在版本控制完全外部：律师寄回的法律条款的两个版本、后端更改之前和之后的API响应、营销副本，同事"只是轻微调整"。肩并肩读取两个版本并尽量通过眼睛发现区别很慢且不可靠，特别是对于更长的文本块。</p>

<p>人眼对这种比较很糟糕，因为它没有寻找差异 — 它正在阅读意思，两个几乎相同的段落都被读作"正确"除非你特别停下来字符检查它们相互反对。</p>

<h2>当Git Diff不可用时</h2>
<p>不是一切值得比较的都生活在git仓库中。从两个不同环境粘贴的配置值、电子邮件的两个草稿或查找和替换你不确定是否正确执行的前后都需要比较工具来处理任意粘贴的文本，而不仅仅是跟踪的文件。</p>

<h2>立即比较两个文本块</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>包括一个文本diff工具，高亮显示粘贴的两个文本块之间究竟什么改变 — 添加、删除和修改都被直观地呼出，所以你不必自己读每个字符。</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows文本diff工具在macOS上比较两个文本块" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>在环境间比较配置</h3>
<p>当临时和生产表现不同时，肩并肩比较实际的配置值通常比读通过部署日志更快地显示罪魁祸首 — 单个环境变量，一个拼写错误或过时的值直观地突出一旦高亮显示。</p>

<h3>审查编辑副本</h3>
<p>当有人寄回文档的"轻微编辑"版本时，看到正是改变了什么 — 而不是重新读整个东西希望注意 — 将缓慢校对通过变为快速视觉检查。</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">在Mac应用商店获取Bellows</a></p>
`,
  },
  "number-base-converter-mac": {
    slug: "number-base-converter-mac",
    title: "Mac的数字基数转换器 — 十六进制、二进制、八进制、十进制",
    description: "读取内存地址、颜色值或文件权限代码意味着不断在十进制和上下文要求的任何基数之间翻译。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>一个内存地址显示为<code>0x7ffee23a1c40</code>。一个文件权限是<code>0755</code>。驱动程序文档中的位掩码用二进制写入。颜色通道值需要从十进制转换为两位十六进制。这些都不是单独的困难转换，但反复在你的头脑中执行它们 — 特别是二进制到十六进制，需要将位分组为半字节 — 对于如此机械的东西比它应该是更慢且更容易出错。</p>

<p>低级编程、嵌入式开发、网络和甚至日常网络开发（十六进制颜色，再次）都需要规则地在数字基数之间移动，足够频繁地保持十六进制数字的心理查找表仅仅在你获得大于字节或两个的数字时为你做这么多。</p>

<h2>这在哪里绊倒人们</h2>
<p>八进制是神秘的。一个文件权限，如<code>644</code>看起来像十进制数但实际上是基8，当推理它时把它作为十进制对实际比特模式是什么导致混淆。二进制在16位之外变得不易读 — 一个32位值用二进制是三十二个字符长，很难读和容易在你试图隔离某个位标志检查时误数。</p>

<h2>一次在所有四个基数间转换</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>包括一个数字基数转换器，同时在十进制、十六进制、八进制和二进制中显示值。在任何基数中键入数字，看到所有四个表示更新在一起 — 没有每个对的分开转换。</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows数字基数转换器在macOS上显示十六进制、二进制、八进制和十进制" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>低级和嵌入式工作</h3>
<p>读取寄存器值、位掩码和嵌入式固件或系统编程中的内存地址意味着在十六进制和二进制间流畅移动。一次看到两者，沿着十进制，从已经细节繁重的任务中移除一层手工翻译。</p>

<h3>文件权限和网络</h3>
<p>Unix文件权限、子网掩码和网络协议中的各种二进制标志通常在八进制或二进制中表达但在十进制中推理。快速转换确认权限字符串或标志字节代表什么，在你改变它之前。</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">在Mac应用商店获取Bellows</a></p>
`,
  },
  "csv-to-json-mac": {
    slug: "csv-to-json-mac",
    title: "Mac的CSV到JSON转换器",
    description: "电子表格导出需要变为API调用或测试装置的结构化数据，每次编写一次性脚本是过度。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>销售团队中的某人导出电子表格为CSV并要求你"只是将其加载到系统中"。系统期望JSON。所以你用CSV解析库写一个快速Python或Node脚本、映射列到字段、处理头行、希望没有值包含破坏你幼稚的逗号分隔逻辑的逗号（它们通常做，隐藏在引用字段中）。</p>

<p>这是开发人员反复解决的任务，每次写略微不同的一次性代码，因为CSV不断显示为电子表格、数据库和分析工具的导出格式，同时大多数现代工具和API期望JSON。</p>

<h2>CSV的欺骗性简单性</h2>
<p>CSV看起来微不足道 — 在逗号上分开、在新行上分开、完成。然后你碰到包含逗号的字段，按规范用引号环绕，你的幼稚解析器断裂。或一个字段包含引号内嵌的新行，一个简单的逐行读无法正确处理。获取CSV解析权实际上需要尊重引用规则，这是为什么专用转换器比每次从头写它更好。</p>

<h2>将CSV转换为结构化JSON</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>包括一个CSV到JSON转换器，正确处理引用字段和头行，将电子表格导出变为准备好粘贴到测试装置、请求体或脚本的JSON对象数组。</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows CSV到JSON转换器工具在macOS上" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>将电子表格数据加载到API</h3>
<p>当一次性数据导入不证明编写和维护完整脚本时，直接将CSV导出转换为JSON并粘贴到API测试工具或数据库种子文件在分数时间内完成工作。</p>

<h3>从真实数据构建测试装置</h3>
<p>从电子表格导出生产式样本数据为CSV并转换为JSON是生成逼真测试装置的快速方法，无需一次一个字段地手工编写JSON对象。</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">在Mac应用商店获取Bellows</a></p>
`,
  },
  "mac-developer-tools-no-internet": {
    slug: "mac-developer-tools-no-internet",
    title: "Mac没有网络的开发工具",
    description: "在飞行上工作、地下室服务器房间或刚好在不可靠的咖啡店Wi-Fi上不应该意味着失去访问你不断使用的实用工具。",
    date: "2026-09-06",
    readTime: "5分钟阅读",
    content: `
<p>尝试在没有Wi-Fi的飞行上格式化JSON块，你将快速注意到有多少你的日常开发工具实际上是网站伪装。jwt.io、regex101、JSON格式化工具、Base64工具 — 全部出色的、全部当你的连接下降时完全无用。你要么不使用或摸索通过Terminal命令你半记得。</p>

<p>这不仅仅是旅行的不便。服务器房间、安全设施和气隙环境通常设计上没有网络访问。即使是不稳定的办公室Wi-Fi也可以将一个两秒钟的任务变为等待不会加载的页面的令人沮丧的等待。</p>

<h2>你工具包中的隐藏依赖</h2>
<p>大多数开发人员没有意识到他们一天中多少工具实际上取决于实时连接直到它消失。快速心理审计是启发性的：你一天多次伸手的实用工具有多少实际上是浏览器标签页指向某人else的服务器？对大多数开发人员来说，答案比他们期望更多。</p>

<p>超越可用性问题，有一个数据问题。将令牌、凭证或内部数据发送到第三方网站来解码或格式化它意味着信任该网站的安全和隐私实践 — 信任可能不有理，许多公司安全政策明确禁止。</p>

<h2>一个从不需要连接的工具包</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>将41个开发工具捆绑到一个原生macOS应用中，完全离线运行 — 没有例外、没有"这个功能需要网络"。JSON格式化、JWT解码、哈希、正则表达式测试、编码和解码及更多都完全相同是否在千兆比光纤上或三万英尺高没有信号。</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows脱机开发工具应用在macOS上运行没有网络连接" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>在安全或气隙环境中工作</h3>
<p>某些开发发生在网络访问被限制或政策完全不存在的环境中 — 防御承包、金融基础设施、某些政府工作。需要实时连接的工具简单地不可用在那里，不管它们多么好。</p>

<h3>旅行时不失去生产力</h3>
<p>飞行、通过隧道的火车和不可靠连通性的远程工作位置不应该指示你可以和不能做的开发任务。一个脱机优先工具包从可以减速你的东西列表中移除连通性。</p>

<h3>隐私作为脱机的副作用</h3>
<p>从不进行网络请求的应用无法泄漏你的数据到服务器，有意或否则。对于处理令牌、密钥或专有信息的开发人员，脱机不仅仅关于可用性 — 这是一个有意义的隐私保证。</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">在Mac应用商店获取Bellows</a></p>
`,
  },
  "clipboard-formatter-mac": {
    slug: "clipboard-formatter-mac",
    title: "Mac的剪贴板格式化工具 — 自动检测并建议工具",
    description: "决定伸向哪个格式化工具、解码器或转换器本身是一个小决定，你一天中数十次做，无需注意开销。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>你复制一个字符串。在你可以用它做任何东西之前，你必须弄清楚它是什么以及哪个工具处理它。这是一个JWT？Base64？一个十六进制颜色？一个普通UUID？对于经验丰富的开发人员，这个识别几乎立即发生，但它仍然是在复制某些东西和实际作用于它之间的小认知步骤 — 以及它是在每次单独重复的一个步骤。</p>

<p>将该识别和导航步骤乘以典型一天中数十个小实用工具任务，它加起来令人惊讶的量的心理开销花费仅仅是每次路由你自己到正确的工具，在你甚至开始实际任务之前。</p>

<h2>模式识别是一个可解决的问题</h2>
<p>JWT具有一个独特的三部分、点分隔结构，带有一个可识别的Base64url头。十六进制颜色以磅号开始并完全是六或八个十六进制字符。UUID遵循严格的八-四-四-四-十二连字符格式。JSON以一个括号或方括号开始。这些模式足够精确，软件可以像经验丰富的开发人员一样快速识别它们，无需每次开发人员手工进行识别。</p>

<h2>让剪贴板建议工具</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>当你打开它时读你的剪贴板并自动建议匹配的工具。复制JWT，解码器已经高亮显示。复制JSON，格式化工具是一次点击。复制十六进制颜色，颜色转换器准备好。识别步骤瞬间发生，在你甚至打开侧栏之前。</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows剪贴板检测建议在macOS上匹配的开发工具" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>更少的点击、更少的决策疲劳</h3>
<p>从重复任务中移除"我需要哪个工具"步骤在隔离中听起来很小，但在数十个日常交互中它移除一个有意义的摩擦量 — 摩擦否则会推你朝向仅仅留下数据未格式化因为伸手对正确工具感觉太多努力。</p>

<h3>对你忘记存在的工具有用</h3>
<p>有41个工具可用，很容易忘记特定转换器或生成器甚至存在。基于剪贴板的建议表面相关工具即使你不会想到查找它，这通常比你已经每天使用的工具时间节省更有价值。</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">在Mac应用商店获取Bellows</a></p>
`,
  },
  "string-escape-unescape-mac": {
    slug: "string-escape-unescape-mac",
    title: "Mac的字符串转义和非转义 — JSON、HTML、URL",
    description: "将一个字符串格式嵌入另一个意味着转义引号、斜杠和特殊字符正确，或看你的解析器窒息。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>你需要将一个JSON字符串嵌入另一个JSON字符串 — 也许一个本身包含JSON有效负载的日志消息。或你正在编写包含带引号的字符串的shell命令。或你正在构建一个URL，必须将另一个URL作为查询参数携带。这些情况中的每一个都需要转义：将否则被解释为语法的字符转换为被视为字面数据的形式。</p>

<p>不同的上下文转义不同。JSON用反斜杠转义引号并将特殊字符表示为<code>\\\\n</code>代表换行符。Shell转义取决于你使用的引用风格。URL转义完全不同地百分比编码保留字符。混淆这些 — 在需要URL转义的地方应用JSON转义 — 生成看起来几乎对且以混乱方式失败的输出。</p>

<h2>双转义问题</h2>
<p>这个空间中最常见的错误之一是双转义：字符串被你的代码转义一次，然后再被假设它仍然原始的库或框架转义，将单个反斜杠变为两个并静默地破坏数据。诊断这需要逐步非转义来看到额外层被引入在哪里 — 特别是在长字符串中手工做很繁琐。</p>

<h2>为多格式转义和非转义</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>在其41个开发工具中包括字符串转义工具，涵盖JSON、HTML和URL格式。粘贴原始字符串来看到它对给定上下文正确转义，或粘贴转义字符串来看原始值。</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows字符串转义和非转义工具在macOS上" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>将字符串嵌入字符串中</h3>
<p>构建自己包含JSON字符串作为字段值的JSON有效负载，或构建一个日志消息，需要安全地包括任意用户输入，都需要正确转义以避免破坏外部结构。</p>

<h3>诊断双转义数据</h3>
<p>当字符串看起来被转义的次数比它应该的更多时，逐层非转义显示额外编码被引入在哪里，通常是追踪负责代码的最快方式。</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">在Mac应用商店获取Bellows</a></p>
`,
  },
  "mac-developer-utility-menu-bar": {
    slug: "mac-developer-utility-menu-bar",
    title: "菜单栏中的Mac开发工具实用工具 — 快速访问41个工具",
    description: "Dock用于你看的应用。菜单栏用于你几秒钟内使用并解除的工具 — 大多数开发工具属于第二类。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>考虑你实际如何使用JSON格式化工具或UUID生成器。你不打开它、欣赏接口、定居一个会话。你打开它、做一件小事、关闭它 — 整个交互最后几秒钟。那个使用模式对Dock图标很差适配，这暗示一个你切换进入并花费时间的应用，对菜单栏则好得多，它是为完全这类快速、进出交互构建的。</p>

<p>Dock应用也与打开的一切都竞争空间 — Cmd-Tab循环通过它们、Mission Control将它们的窗口分组、在一个打开应用的dozen中找正确的需要一下眼睛扫描。菜单栏图标坐在一个固定的、可预测的位置，从不被埋葬。</p>

<h2>为什么位置重要比它似乎</h2>
<p>开发工具的值与你和使用它之间的站立摩擦成反比。一个需要十秒钟打开的工具成本不仅仅是十秒钟 — 它花费你在步出当前任务去找它时失去的心理上下文。菜单栏放置通过保持工具直观存在和总是一次点击，无需占据屏幕房地产或Dock空间当你不使用它时，最小化那个成本。</p>

<h2>41个工具、一个菜单栏图标</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>驻留在你的菜单栏中，给你访问41个开发工具 — 格式化工具、编码工具、生成工具、转换工具和文本工具 — 无需从不需要Dock图标或专用窗口。点击图标、从侧栏选择工具、做你需要的，它再次就消失了。</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows菜单栏图标在macOS上提供对41个开发工具的快速访问" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>零Dock占用空间</h3>
<p>对于仅有在用于扩展会话的应用的瘦Dock的开发人员 — 一个编辑器、一个浏览器、一个终端 — 菜单栏实用工具自然地适应哲学。它在需要时在那里，否则无形。</p>

<h3>当你需要它时的独立窗口</h3>
<p>某些任务 — 测试几个正则表达式模式行，或转换批颜色 — 益于持久窗口而不是菜单栏下拉。Bellows支持两种模式，所以快速查询停留在菜单栏中，同时更长的会话获得适当的窗口在你的编辑器旁边。</p>

<h3>最近使用将你的常见工具保持在顶部</h3>
<p>有41个工具可用，你使用最多的不应该需要相同数量的搜索作为你很少使用的那些。最近使用的工具自动浮现，所以你的日常习惯随时间塑造接口而不是相反。</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">在Mac应用商店获取Bellows</a></p>
`,
  },
};
