import type { ArticleSet } from "./index";

export const zhArticles: ArticleSet = {
  "mac-audio-podcasting-setup": {
    slug: "mac-audio-podcasting-setup",
    title: "Mac 播客录音音频设置：录制时控制你听到的声音",
    description:
      "在监控音量、听取嘉宾声音、管理通知的同时录制播客——这些都在争抢同一个音量滑块。这里有更好的解决方案。",
    date: "2026-03-05",
    readTime: "5 min read",
    content: `
<p>你正在 Mac 上录制播客。你需要清晰地听到嘉宾的声音（通过 Zoom、Riverside 或 SquadCast）。你需要监控 DAW 的录音电平。你需要把 Slack 静音，以免 ping 声出现在录音中。你还需要完全关闭系统通知音——采访途中突然出现 macOS 的"叮"声会让音频无法使用。</p>

<p>macOS 为这一切只提供了一个音量滑块，远远不够。</p>

<h2>Mac 播客录音的音频挑战</h2>

<p>在播客录制过程中，你通常需要同时管理：</p>
<ul>
  <li><strong>通讯应用</strong>（Zoom、Riverside、SquadCast）——嘉宾音频，需要清晰</li>
  <li><strong>DAW / 录音软件</strong>（Logic、GarageBand、Audacity、Hindenburg）——监控自己的电平</li>
  <li><strong>通知来源</strong>（Slack、Mail、Calendar、Messages）——录制期间必须完全静音</li>
  <li><strong>浏览器</strong>——可能有节目笔记、参考标签页或正在运行的计时器</li>
</ul>

<p>所有这些都用同一个音量是一场混乱。嘉宾的声音与系统提示音相互竞争。一个 Slack 通知可能毁掉一段录音。而如果你需要调整嘉宾音量，调整系统音量同时也会改变你的监控电平。</p>

<h2>常见的变通方法</h2>

<p>大多数播客主使用以下组合：</p>
<ul>
  <li>专注模式（勿扰模式）来抑制通知</li>
  <li>录制前手动退出 Slack、Mail 和其他嘈杂应用</li>
  <li>调整通讯应用内部的嘉宾音量</li>
</ul>

<p>这种方法有效，但容易出错。忘记开启勿扰模式，一个通知就能毁掉你的录音。忘记退出 Slack，来电就会进来。而且你仍然无法独立控制嘉宾音量与监控电平。</p>

<h2>为播客录音使用独立应用音量</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 让你可以独立控制每个应用，打造干净的录制环境：</p>

<img src="/apps/sounddial.png" alt="SoundDial 播客设置——嘉宾音频、监控和通知各自独立" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>录制配置</h3>
<ul>
  <li><strong>Zoom / Riverside：</strong>80-100%——嘉宾音频清晰</li>
  <li><strong>Logic / GarageBand：</strong>60%——舒适监控，不疲劳</li>
  <li><strong>Slack：</strong>静音——零通知声</li>
  <li><strong>Mail：</strong>静音</li>
  <li><strong>Messages：</strong>静音</li>
  <li><strong>Calendar：</strong>静音</li>
  <li><strong>浏览器：</strong>静音——防止意外自动播放</li>
</ul>

<p>将其保存为"录制"配置。开始录制前，一键应用该配置。所有通知来源静音，嘉宾音量满格，监控电平舒适。</p>

<h3>编辑配置</h3>
<ul>
  <li><strong>Logic / Hindenburg：</strong>100%——编辑时全量监控</li>
  <li><strong>Spotify：</strong>静音——避免参考混乱</li>
  <li><strong>Slack：</strong>20%——休息时的低调通知</li>
  <li><strong>浏览器：</strong>40%——用于节目笔记和研究</li>
</ul>

<p>两个配置，两次点击，两种完全不同的音频环境。无需手动退出再重新打开应用，也不会忘记在录制后重新开启通知。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 获取 SoundDial</a>——€14.99 一次性购买，无需订阅，macOS 14.2+。</p>
`,
  },
  "mac-too-loud-full-volume-tame-it": {
    slug: "mac-too-loud-full-volume-tame-it",
    title: "Mac 满音量太响？如何获得更精细的音量控制",
    description:
      "MacBook Pro 的扬声器性能出色——直到震耳欲聋。如果即使是适中的音量设置也感觉太响，这里教你如何获得更精确的音频控制。",
    date: "2026-03-08",
    readTime: "4 min read",
    content: `
<p>Apple 较新的 MacBook Pro 机型（14 英寸和 16 英寸）拥有出色的笔记本扬声器。强大到适中的音量都可能真的很响——尤其是在安静的房间、深夜，或者戴着耳机时。"舒适"和"太响"之间有时只差一两个音量格。</p>

<h2>为什么音量级别感觉太粗糙</h2>

<p>macOS 通过键盘提供 <strong>16 个音量档位</strong>。每档约为总范围的 6.25%。对于性能强劲的扬声器或灵敏耳机，一档可能代表显著的感知音量变化——按一下音量键就从"刚刚好"变成"太响了"。</p>

<h2>内置解决方案：四分之一档位音量</h2>

<p>按住 <strong>Option + Shift</strong>，然后按音量加/减键。每次调整为正常档位的四分之一，让你拥有 <strong>64 个音量档位</strong>而不是 16 个。这种 4 倍精细的控制让你更容易找到精确的正确音量，尤其是搭配强劲扬声器或耳机时。</p>

<p>这是大多数人不知道的最有用的 Mac 音频技巧。</p>

<h2>更深层的问题：一个滑块控制一切</h2>

<p>即使有 64 个档位，你仍然只有一个滑块控制所有应用。如果你把音量调低到让通知声舒适，音乐可能太小声。如果为音乐调高，通知 ping 声可能让你一惊。</p>

<p>真正的问题是不同音频来源需要不同的音量。通知应该低调，音乐应该有存在感，通话应该清晰，浏览器视频应该适中。一个滑块无法同时满足所有这些需求。</p>

<h2>精确控制的独立应用音量</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 为每个应用提供独立的音量滑块，精度为 <strong>1%</strong>，范围从 0% 到 200%。与 macOS 系统级 16 档（或使用修饰键的 64 档）相比，每个应用有 200 个精度级别。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上以 1% 精度提供精细的独立应用音量控制" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>将系统音量设置为适中的基准（50-60%），然后使用 SoundDial 微调每个应用：</p>
<ul>
  <li><strong>Spotify：</strong>35%——舒适的背景音量</li>
  <li><strong>Slack：</strong>12%——低调的通知 ping</li>
  <li><strong>Zoom：</strong>85%——清晰的通话音频，不会压倒一切</li>
  <li><strong>Safari：</strong>45%——适中的视频播放</li>
</ul>

<p>这样，没有任何音频来源会"太响"。每个都被独立调到理想水平。Slack 的 ping 在 12% 时几乎不被察觉，而 Zoom 通话在 85% 时则清晰透亮——所有这些都在同一系统音量设置下实现。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 获取 SoundDial</a>——€14.99 一次性购买，无需订阅，macOS 14.2+。</p>
`,
  },
  "slack-huddle-volume-issues-mac": {
    slug: "slack-huddle-volume-issues-mac",
    title: "Mac 上的 Slack 群聊音量问题：太小、太大，还是和音乐抢音量",
    description:
      "Slack 群聊与你的音乐和通知争抢同一个音量。这里教你如何在 Mac 上独立控制群聊音频。",
    date: "2026-03-10",
    readTime: "5 min read",
    content: `
<p>Slack 群聊很方便——点击一个按钮就能开始语音通话，无需安排会议。但音频问题很多。群聊与你的 Spotify 在同一音量。Slack 通知 ping 声与通话音量相同。当有人在群聊中分享音乐或带音频的屏幕时，要么听不见要么震耳欲聋。</p>

<p>问题不在 Slack，而在 macOS。所有内容都通过一个音量滑块，所以群聊音频、通知声、音乐和浏览器音频都在争夺同一空间。</p>

<h2>Slack 内部音频控制</h2>

<p>Slack 的音频控制有限：</p>
<ul>
  <li><strong>通知偏好：</strong>Slack → 设置 → 通知 → 声音与外观。你可以更改通知声音或禁用特定声音，但无法独立于群聊音量来设置通知音量。</li>
  <li><strong>群聊音量：</strong>在群聊中，没有单独的通话音量滑块与 Slack 其他声音分离。Slack 中的一切都是 macOS 的一条音频流。</li>
  <li><strong>输入/输出设备：</strong>Slack → 设置 → 音频与视频 让你选择麦克风和扬声器设备，但不能按功能设置音量级别。</li>
</ul>

<h2>三个 Slack 音频问题</h2>

<h3>1. 群聊声音相对音乐太小</h3>
<p>你的音乐处于舒适音量，你加入群聊。同事的声音与音乐音量相同——你无法清晰辨别话语。调高系统音量会让音乐太响。</p>

<h3>2. 群聊中的通知声</h3>
<p>你正在群聊讨论，每来一条 Slack 消息就 ping 一声，与通话音量相同。在繁忙的工作区，持续的 ping 声让群聊无法使用。</p>

<h3>3. 群聊太响，难以作为背景</h3>
<p>有时你加入群聊只是被动聆听。你希望它处于背景音量——安静到不分散注意力，又足够响以便听到有人叫你名字。macOS 不允许你把 Slack 设为 20% 同时保持浏览器在 60%。</p>

<h2>解决方案：独立控制 Slack 音量</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 为 Slack 提供独立于其他所有应用的音量滑块。由于 Slack 的群聊音频和通知声属于同一应用，滑块控制两者——但大多数情况下这正是你想要的。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在群聊进行时独立控制 Slack 音量，同时音乐以不同音量播放" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>群聊优化设置</h3>
<ul>
  <li><strong>Slack：</strong>90-100%（清晰的群聊音频，通知声响但你在 Slack 中很活跃）</li>
  <li><strong>Spotify：</strong>15%（若隐若现的背景音，不与人声竞争）</li>
  <li><strong>浏览器：</strong>静音（防止标签页意外发声）</li>
</ul>

<h3>被动聆听设置</h3>
<ul>
  <li><strong>Slack：</strong>30%（背景聆听音量）</li>
  <li><strong>Spotify：</strong>40%（主要音频是你的音乐）</li>
  <li><strong>浏览器：</strong>50%（正常工作音量）</li>
</ul>

<p>将每种设置保存为配置。群聊开始时，一键应用合适的配置。或者使用<strong>自动闪避</strong>——当群聊激活你的麦克风时，SoundDial 会自动降低除 Slack 之外的所有音量。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 获取 SoundDial</a>——€14.99 一次性购买，无需订阅，macOS 14.2+。</p>
`,
  },
  "set-default-volume-new-apps-mac": {
    slug: "set-default-volume-new-apps-mac",
    title: "如何在 Mac 上为新应用设置默认音量",
    description:
      "新应用默认以满音量启动。这里教你如何让每个新应用以舒适的音量启动——让任何东西都不会出乎意料地响起。",
    date: "2026-03-12",
    readTime: "3 min read",
    content: `
<p>你安装了一个新应用，它第一次启动，立刻播放音频——介绍音效、通知声、教程视频——音量是系统最大值。你没有预料到。你戴着耳机，耳朵嗡嗡作响。</p>

<p>macOS 没有"新应用默认音量"这个概念，因为 macOS 没有独立应用音量。每个应用都获得系统音量，而系统音量是你最后设置的值。新应用不会受到特殊对待——它们只是以与其他所有内容相同的音量爆出。</p>

<h2>为什么这是个问题</h2>

<p>第一次启动应用时，你不知道它会有多响。有些应用会立即播放声音（引导教程、通知声、欢迎视频）。如果你的系统音量是 80%（因为你在听音乐），那个新应用的声音也是 80%——对于意外音频来源来说可能远比舒适级别响。</p>

<p>这在以下情况中尤为突兀：</p>
<ul>
  <li>启动时播放声音的通讯应用（Slack、Teams）</li>
  <li>首次启动时有视频教程的应用</li>
  <li>立刻爆出标题音乐的游戏</li>
  <li>自动播放内容的基于浏览器的应用</li>
</ul>

<h2>解决方案：新应用的默认音量</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 为新应用提供<strong>可配置的默认音量</strong>。在设置中，你设定新检测到的应用应该从哪个音量级别开始——例如 70%。任何应用第一次启动并产生音频时，SoundDial 将其设为 70% 而不是 100%。</p>

<img src="/apps/sounddial.png" alt="SoundDial 默认音量设置——新应用以配置的音量级别启动，而不是满音量" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>这意味着：</p>
<ul>
  <li>新安装应用不会出现意外满音量音频</li>
  <li>每个新应用以舒适、可预测的音量启动</li>
  <li>之后可以从默认值向上或向下调整</li>
  <li>一旦调整，<strong>音量记忆</strong>功能会记住该应用以后启动时的音量</li>
</ul>

<p>这是一个小功能，但它解决了一个真实的日常烦恼——让每个人都至少被"新应用惊喜爆音"坑过一次。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 获取 SoundDial</a>——€14.99 一次性购买，无需订阅，macOS 14.2+。</p>
`,
  },
  "mac-startup-sound-too-loud": {
    slug: "mac-startup-sound-too-loud",
    title: "Mac 开机声太响？如何关闭或降低它",
    description:
      "Mac 开机音每次重启都以满音量播放——在会议和安静的房间里尤为尴尬。这里教你如何将其静音或控制音量。",
    date: "2026-03-15",
    readTime: "4 min read",
    content: `
<p>你在安静的办公室重启 Mac。会议室一片寂静。然后——<em>当</em>——开机音以满音量爆出。所有人都看向你。这声音很经典，但也无法控制，而且常常响得令人尴尬。</p>

<h2>如何关闭开机声</h2>

<p>macOS 允许你完全关闭开机音：</p>

<ol>
  <li>前往<strong>系统设置 → 声音</strong></li>
  <li>找到<strong>"启动时播放声音"</strong></li>
  <li>取消勾选</li>
</ol>

<p>完成。从现在起，你的 Mac 将静默启动。无需终端命令——此设置自 macOS Big Sur 起即可使用。</p>

<h3>终端方法（如果你更喜欢）</h3>
<p>你也可以通过终端禁用它：</p>
<p><code>sudo nvram StartupMute=%01</code></p>
<p>重新启用：</p>
<p><code>sudo nvram StartupMute=%00</code></p>

<h2>能降低开机声音量而不是完全禁用吗？</h2>

<p>不能直接做到。开机音以固定音量播放，该音量由关机时的系统音量决定。如果你的 Mac 在关机时音量是 80%，开机音大约以 80% 播放。如果是 20%，开机音则更轻。</p>

<p><strong>变通方法：</strong>重启 Mac 前，将系统音量降至 10-20%。开机音将以较低音量播放。不够理想——需要记住这么做——但如果你希望开机音处于合理音量而不是完全静音，这个方法有效。</p>

<h2>更广泛的 Mac 声音控制问题</h2>

<p>开机音只是 macOS 有限音频控制的一个例子。系统声音、通知声和应用音频混在一起，几乎没有独立控制。如果你发现自己整天都在调整音量来管理不同音频来源，独立应用音量控制能解决这个更深层的问题。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 为 Mac 上的每个应用提供独立音量滑块。设置通知应用低音量，音乐舒适音量，通话满音量——全部独立。将配置保存为文件，一键切换。</p>

<img src="/apps/sounddial.png" alt="SoundDial——独立控制所有 Mac 音频来源的应用音量控制器" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 获取 SoundDial</a>——€14.99 一次性购买，无需订阅，macOS 14.2+。</p>
`,
  },
  "webex-volume-too-low-mac": {
    slug: "webex-volume-too-low-mac",
    title: "Cisco Webex 在 Mac 上音量太低？如何修复",
    description:
      "Webex 通话在 Mac 上几乎听不见。这里提供所有解决方案——从 Webex 音频设置到通过独立应用混音器将通话音量提升到 100% 以上。",
    date: "2026-03-18",
    readTime: "5 min read",
    content: `
<p>Webex 是企业环境中最常用的视频会议工具之一，同时也是 Mac 上音频质量最受抱怨的工具之一。通话音量低、声音模糊，以及在相同系统音量下比 Zoom 或 Teams 更安静。如果你几乎听不到 Webex 通话，你不是一个人。</p>

<h2>1. 检查 Webex 音频设置</h2>

<p>在 Webex 会议中，点击音频菜单（扬声器图标或三个点 → 音频设置）：</p>
<ul>
  <li>确保选择了正确的<strong>扬声器</strong>设备</li>
  <li>将扬声器音量滑块拖到最大</li>
  <li>点击"测试"播放测试音并验证输出</li>
  <li>检查是否启用了"音乐模式"——除非你专门在演示音乐，否则禁用它</li>
  <li>检查噪音消除设置——积极模式下的"去除背景噪音"可能降低感知语音音量</li>
</ul>

<h2>2. 检查 macOS 输出</h2>

<p>系统设置 → 声音 → 输出。验证选择了正确的设备且音量最大。macOS 更新或设备切换后，Webex 可能使用了意外的输出。</p>

<h2>3. 蓝牙编解码器问题</h2>

<p>使用 AirPods 或蓝牙耳机？Webex 激活麦克风会强制 AAC 切换到 SCO 编解码器，降低音频质量和音量。使用单独的麦克风（Mac 内置麦克风或 USB 麦克风），保持蓝牙耳机仅作为输出。</p>

<h2>4. Webex 特定音频处理</h2>

<p>Webex 有积极的音频处理，可能降低通话参与者的表观音量。尝试以下 Webex 设置：</p>
<ul>
  <li>将噪音消除设置为"低"而不是"高"</li>
  <li>如果已启用，禁用"为我的声音优化"</li>
  <li>尝试从"计算机音频"切换到特定设备</li>
</ul>

<h2>5. IT/管理员问题</h2>

<p>在企业环境中，Webex 通常由 IT 通过特定音频策略管理。某些设置可能被锁定或预配置。如果基本修复无效，请向 IT 部门咨询 Webex 音频策略。一些组织会限制最大音量或强制执行特定音频处理设置。</p>

<h2>6. 将 Webex 提升到 100% 以上</h2>

<p>如果设置已最大化但参与者仍然太安静，<a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 让你将 Webex 提升到 <strong>200%</strong>。这将通话音频放大到 Webex 内置最大值以上——当参与者麦克风很差或 Webex 音频处理信号损耗过多时非常有用。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上将 Cisco Webex 通话音量提升到 100% 以上" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial 还能帮助处理连续的 Webex 会议：使用自动闪避在每次会议开始时自动降低背景音乐，在会议间隔时恢复。保存"会议"音量配置，一键设置工作日的首选音频平衡。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 获取 SoundDial</a>——€14.99 一次性购买，无需订阅，macOS 14.2+。</p>
`,
  },
  "mac-two-audio-sources-same-time": {
    slug: "mac-two-audio-sources-same-time",
    title: "如何在 Mac 上同时听两件事而不发疯",
    description:
      "音乐和播客，课程和笔记视频，通话和背景音乐。macOS 让你为两者选择同一个音量——这里教你如何平衡它们。",
    date: "2026-03-20",
    readTime: "4 min read",
    content: `
<p>你想同时听两个音频来源：通话时听音乐、看教程时听播客、学习时放背景环境音。两件事，两个理想音量。macOS 给你一个滑块来控制两者。</p>

<p>这是 macOS 的根本音频限制：每个应用共享一个音量。你无法说"这个 30%，那个 80%"。要么所有东西都在一个音量，要么什么都没有。</p>

<h2>你真正需要两个音频来源的场景</h2>

<p>这不是边缘案例，而是大多数人使用电脑的方式：</p>

<ul>
  <li><strong>音乐 + 视频通话</strong>——最常见。Zoom 会议时播放背景音乐，但音量要低到能听清同事。</li>
  <li><strong>讲座 + 参考资料</strong>——学生观看录制讲座，同时偶尔看 YouTube 教程作为参考。</li>
  <li><strong>播客 + 环境音</strong>——听播客时，白噪音或雨声应用轻声播放。</li>
  <li><strong>两个浏览器标签</strong>——一个标签播放培训视频，另一个播放演示，各自不同音量。</li>
  <li><strong>游戏 + 语音聊天</strong>——游戏音效增强沉浸感，Discord 用于交流。</li>
</ul>

<p>在每种情况下，一个来源是"主要"（更响、更重要），另一个是"次要"（更安静、起辅助作用）。理想比例因每种组合而不同，且全天都在变化。</p>

<h2>macOS 的限制</h2>

<p>macOS 只有一个音量滑块。按音量键，所有东西同等变化。如果你为舒适的播客听感设置音量，雨声应用也在那个音量——要么太响（分散注意力），要么你还没有在它自己的应用中调整（如果它有音量控制的话）。</p>

<p>一些应用有内置音量滑块（Spotify、VLC），但大多数没有。即使有，在两个独立的音量控制之间切换也很笨拙且缓慢。</p>

<h2>解决方案：在一个面板中控制每个应用的音量</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 将每个应用放在菜单栏的一个面板中，各自有独立的音量滑块。两个音频来源并排显示，每个都有自己的音量级别。调整一个而不影响另一个。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上显示两个不同音量级别的音频来源" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>示例设置：</p>

<p><strong>音乐 + Zoom 通话：</strong></p>
<ul>
  <li>Zoom：100% | Spotify：20%</li>
</ul>

<p><strong>播客 + 雨声：</strong></p>
<ul>
  <li>播客应用：70% | 雨声应用：15%</li>
</ul>

<p><strong>讲座 + YouTube 教程：</strong></p>
<ul>
  <li>Zoom（讲座）：90% | Chrome（YouTube）：40%</li>
</ul>

<p>每种组合都是不同的平衡。将你常用的组合保存为<strong>音量配置</strong>，一键切换。自动闪避自动处理音乐+通话场景——通话开始时，音乐降到你配置的音量，无需任何操作。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 获取 SoundDial</a>——€14.99 一次性购买，无需订阅，macOS 14.2+。</p>
`,
  },
  "watch-movies-mac-late-night-volume": {
    slug: "watch-movies-mac-late-night-volume",
    title: "如何在 Mac 上看电影而不吵醒所有人",
    description:
      "对话声音几乎听不见，然后爆炸声震动整个房间。这里教你如何在 Mac 上深夜看电影时驯服电影音频——一个字都不会错过。",
    date: "2026-03-22",
    readTime: "5 min read",
    content: `
<p>凌晨 1 点，你在床上用 MacBook 看电影。角色们在低声说话——你调高音量。然后一场追车戏开始，整个公寓都能听到。你扑向音量键。这个循环持续了两个小时。</p>

<p>问题在于<strong>动态范围</strong>——电影最安静和最响亮时刻之间的差距。在拥有强大音响系统的影院里，这种差距创造了身临其境的体验。在午夜的 MacBook 上，它带来了在"听不清对话"和"吵醒邻居"之间不断挣扎的局面。</p>

<h2>为什么电影比音乐或播客更响</h2>

<p>音乐通常以压缩动态范围进行母带处理——最安静和最响亮部分之间的差异相对较小（可能 10-15 dB）。播客压缩更多。电影，尤其是动作片，可以有 <strong>30-40 dB</strong> 的动态范围——安静部分低如耳语，响亮部分设计用于震动影院座椅。</p>

<p>当你将 MacBook 音量设置到能听清对话时，动作场景在声压方面响 100 倍。没有一个舒适的系统音量能同时适合两者。</p>

<h2>方法 1：使用流媒体服务的夜间模式</h2>

<p>一些流媒体服务专门为此提供了动态范围压缩功能：</p>
<ul>
  <li><strong>Netflix：</strong>在播放时的音频设置中寻找"减少响亮声音"开关</li>
  <li><strong>Apple TV+：</strong>系统设置 → 辅助功能 → "减少响亮声音"</li>
  <li><strong>Amazon Prime：</strong>在支持的片源上有"对话增强"</li>
  <li><strong>Disney+：</strong>目前没有等效功能</li>
</ul>

<p>这些功能压缩动态范围，使安静部分更响、响亮部分更安静。结果是在低音量下效果更均匀的音频。</p>

<h2>方法 2：使用耳机</h2>

<p>耳机解决了"吵醒所有人"的问题——你的音频是私密的。但它并不解决动态范围问题。对话-爆炸循环仍然发生，只是在耳朵里。这时独立应用音量控制很有帮助：为耳机听感精确设置流媒体应用的音量。</p>

<h2>方法 3：将流媒体应用设置为特定音量</h2>

<p>深夜观看的真正问题是，你的流媒体应用、通知声和其他任何音频都在同一系统音量。凌晨 2 点与电影对话音量相同的 Slack ping 会让你心跳加速。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 让你创建完美的深夜设置：</p>

<img src="/apps/sounddial.png" alt="SoundDial 深夜电影设置——流媒体应用适中音量，通知静音" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>深夜电影配置</h3>
<ul>
  <li><strong>Netflix / Apple TV / Disney+ / 浏览器：</strong>40-50%——舒适的对话音量，不会因动作场景震耳</li>
  <li><strong>Slack：</strong>静音——没有意外 ping</li>
  <li><strong>Mail：</strong>静音</li>
  <li><strong>iMessage：</strong>静音</li>
  <li><strong>系统声音：</strong>静音</li>
</ul>

<p>将其保存为"夜间"配置。开始深夜电影时，一键应用该配置。所有通知来源静音，流媒体应用处于受控音量。完成后切换回白天配置。</p>

<p>与流媒体服务的"减少响亮声音"功能结合使用效果最佳：服务压缩动态范围，SoundDial 确保 Mac 上没有其他任何声音。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 获取 SoundDial</a>——€14.99 一次性购买，无需订阅，macOS 14.2+。</p>
`,
  },
  "mac-volume-resets-after-sleep": {
    slug: "mac-volume-resets-after-sleep",
    title: "Mac 睡眠后音量重置？如何保留你的音频设置",
    description:
      "每次 Mac 从睡眠唤醒，音量都不对——重置为最大，降为零，或切换到错误的输出。这里解释原因及修复方法。",
    date: "2026-03-25",
    readTime: "5 min read",
    content: `
<p>你合上 MacBook 盖子，稍后再打开。音量不一样了。可能在你设置为 40% 时变成了最大。可能从耳机切换到了扬声器。可能变为零。睡眠前一切正常——现在却不对了。</p>

<p>睡眠后音量重置是一个持续存在的 macOS 错误，在不同 macOS 版本中以各种形式出现。这里解释原因和处理方法。</p>

<h2>原因分析</h2>

<h3>1. 睡眠期间音频输出设备改变</h3>
<p>如果你在睡眠前连接了蓝牙耳机，而它们在 Mac 睡眠时断开（电池耗尽、移出范围），macOS 唤醒时会切换到内置扬声器。由于 macOS 按设备记忆音量，音量变为扬声器上次设置的值——可能与耳机音量大相径庭。</p>

<h3>2. Core Audio 守护进程重启</h3>
<p>macOS 的音频守护进程（coreaudiod）有时在睡眠/唤醒周期中重启。重启时，它可能以默认音量级别初始化，而不是你的最后设置。这是 Apple 在各次更新中部分修复但从未完全消除的系统错误。</p>

<h3>3. HDMI/DisplayPort 重新连接</h3>
<p>如果你通过 HDMI 或 DisplayPort 使用外部显示器，合上和打开盖子可能导致显示器断开并重新连接。一些显示器也是音频输出设备，在此过程中 macOS 可能切换到或切换自显示器扬声器，从而改变音量。</p>

<h3>4. 蓝牙重新配对</h3>
<p>蓝牙设备在睡眠后重新连接时，音量协商可能导致与睡眠前不同的级别。这对第三方蓝牙耳机尤为常见（AirPods 较少，Apple 对其进行了优化）。</p>

<h2>修复方法</h2>

<h3>防止睡眠期间蓝牙断开</h3>
<p>系统设置 → 蓝牙 → 高级（或点击设备旁的"i"）。某些设置控制睡眠期间蓝牙是否保持活跃。保持连接活跃可防止重置音量的断开/重连循环。</p>

<h3>禁用 AirPods 自动切换</h3>
<p>系统设置 → 蓝牙 → 点击 AirPods 旁的"i" → "连接到此 Mac" → 设置为"上次连接到此 Mac 时"。这可防止 AirPods 在睡眠期间从其他设备自动连接。</p>

<h3>设置一致的输出设备</h3>
<p>从睡眠唤醒后，按住 Option 并点击菜单栏中的声音图标。选择首选输出设备。持续这样做，macOS 最终应该会"固定"你的偏好。</p>

<h3>重置 NVRAM（Intel Mac）</h3>
<p>如果音量重置是长期问题，重置 NVRAM：关机 → 按住 Option+Command+P+R 开机，保持 20 秒。这会清除存储的音频设置，可以修复持续的音量问题。</p>

<h2>用 SoundDial 保护你的音频平衡</h2>

<p>即使系统音量在睡眠后重置，<a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 也能保护你的<em>每个应用</em>音量平衡。其<strong>音量记忆</strong>功能独立保存每个应用的音量，并在唤醒、重启或应用重启后恢复它。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 Mac 睡眠唤醒周期后保留每个应用的音量级别" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>所以即使 macOS 在睡眠后将系统音量重置为 80%，你的每个应用平衡保持不变：</p>
<ul>
  <li>Spotify 仍在系统音量的 30%</li>
  <li>Zoom 仍在 100%</li>
  <li>Slack 仍然静音</li>
</ul>

<p>你可能需要修复系统音量（一次调整），但无需重新平衡所有应用（那将是六七次调整）。而使用<strong>音量配置</strong>，即使完全恢复也只需一次点击。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 获取 SoundDial</a>——€14.99 一次性购买，无需订阅，macOS 14.2+。</p>
`,
  },
  "mac-audio-music-production-daw": {
    slug: "mac-audio-music-production-daw",
    title: "Mac 音乐制作音频：独立控制 DAW 与通讯",
    description:
      "使用 Logic Pro 或 Ableton 时同时在 Discord 通话？这里教你如何以完整保真度监听 DAW，同时保持语音聊天在舒适音量。",
    date: "2026-03-28",
    readTime: "5 min read",
    content: `
<p>你在 Logic Pro（或 Ableton、FL Studio）中制作音乐，同时与协作者进行 Discord 通话。问题是：你的 DAW 输出和 Discord 在争夺同一音量级别。调高 Logic 以清晰听到你的混音，Discord 会在耳中爆鸣。为 Discord 调低，混音太小声无法正确评估。</p>

<p>这是 Mac 音乐制作者面临的真实问题，因为监听音量直接影响混音决策。如果 DAW 因 Discord 竞争而太小声，你会混音得比预期响。如果 Discord 盖过了细节，你会错过混音中的问题。</p>

<h2>为什么这对制作很重要</h2>

<p>音乐制作需要<strong>精确的监听音量</strong>。你需要在一致、校准的音量下听你的 DAW，以做出可靠的混音决策。通讯应用、通知和其他音频来源会干扰这一点——但你往往需要它们同时运行以进行远程协作。</p>

<p>专业录音棚通过独立的监听路径和对讲系统来解决这个问题。在笔记本上，你需要软件。</p>

<h2>DAW 内部方法</h2>

<p>你可以使用 DAW 的内部监听级别保持一致输出，然后在 Discord 内部调整音量。但是：</p>
<ul>
  <li>Discord 的输出音量滑块不精确，限制在 0-100%</li>
  <li>你仍然无法防止系统声音和通知以意外音量干扰</li>
  <li>如果你需要在 Spotify 或 YouTube 中参考音轨，这些也处于系统音量</li>
</ul>

<h2>制作的独立应用音量</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 让你为每个应用独立设置精确音量：</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上为音乐制作分离 DAW 输出与 Discord 和参考音轨" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>制作设置</h3>
<ul>
  <li><strong>Logic Pro / Ableton：</strong>80-100%——你的主要监听音量</li>
  <li><strong>Discord / 语音聊天：</strong>40-60%——清晰可听但明显次于你的混音</li>
  <li><strong>Spotify / 参考音轨：</strong>80%——与 DAW 音量匹配以进行精确 A/B 比较</li>
  <li><strong>Slack / 通知：</strong>静音——制作期间零干扰</li>
  <li><strong>Safari / Chrome：</strong>50%——观看教程不会震耳</li>
</ul>

<h3>保存为"制作"配置</h3>
<p>保存此配置，坐下来制作时一键应用。完成后切换到休闲使用，应用"普通"配置。无需重新调整八个应用。</p>

<h3>远程会话的自动闪避</h3>
<p>如果你在与协作者通话，SoundDial 的自动闪避可以在麦克风活跃时降低非通讯应用的音量。但对于制作，你可能想要<em>禁用</em>自动闪避——无论你是否在说话，你都需要 DAW 保持一致的音量。在设置中一键切换。</p>

<h2>关于延迟的说明</h2>

<p>SoundDial 使用 Apple 的 Core Audio Tap API 进行音量控制。处理增加的延迟可以忽略不计——监听目的上无法察觉。如果你在启用直接监听的 DAW 中录制和监听，SoundDial 不会干扰 DAW 的音频路径。它只调整到达扬声器/耳机的输出级别。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 获取 SoundDial</a>——€14.99 一次性购买，无需订阅，macOS 14.2+。</p>
`,
  },
  "apple-music-volume-too-low-mac": {
    slug: "apple-music-volume-too-low-mac",
    title: "Mac 上 Apple Music 音量太低？如何修复和提升",
    description:
      "Apple Music 在 Mac 上已到最大音量但仍然太小声？检查 Sound Check、EQ 设置，并了解如何将 Apple Music 提升到 100% 以上。",
    date: "2026-03-30",
    readTime: "5 min read",
    content: `
<p>Apple Music 音量已满。Mac 音量已满。一首你知道应该很响的歌几乎听不见。同时切换到 Spotify——同一首歌，同一音量——明显更响。怎么回事？</p>

<p>Apple Music 有几个可能降低播放音量的设置，而且并不明显。让我们逐一排查。</p>

<h2>1. 检查 Sound Check</h2>

<p>Apple Music 有一个叫 <strong>Sound Check</strong> 的功能，它对所有曲目的音量进行均一化，使它们以大致相同的感知响度播放。这可以防止歌曲之间突兀的音量跳变，但它是通过<em>降低</em>较响曲目的音量来实现的——使整体更安静。</p>

<p>检查方法：打开 Music 应用 → 设置（⌘,）→ 播放 → <strong>Sound Check</strong>。</p>

<p>如果 Sound Check 已启用，尝试禁用它。原本被降低以匹配较安静曲目的歌曲现在将以其原始母带音量播放——通常会明显更响。</p>

<h2>2. 检查 EQ 设置</h2>

<p>Apple Music 有内置均衡器。某些 EQ 预设会降低整体音量以防止提升特定频率时发生削波。</p>

<p>检查：Music 应用 → 设置 → 播放 → <strong>EQ</strong>。如果选择了某个 EQ 预设（尤其是"Spoken Word"、"Late Night"或"Small Speakers"），尝试将其设置为"Off"并查看音量是否改善。</p>

<p>"Late Night" EQ 特别会压缩动态范围——使安静部分更响但响亮部分更安静。这可能使一切感觉更"平坦"且音量更低。</p>

<h2>3. 检查无损音频设置</h2>

<p>如果你启用了 Apple Music 无损音频（设置 → 音频质量），对于某些曲目，更高质量的流可能实际上比标准 AAC 流的感知音量更低。这是因为无损版本没有 Apple 对 AAC 版本应用的相同母带调整。</p>

<p>尝试暂时切换到 AAC 质量，看看音量差异是否明显。</p>

<h2>4. 耳机安全</h2>

<p>系统设置 → 声音 → 耳机安全。如果"减少响亮音频"已开启，macOS 正在全局限制你的耳机音量——影响 Apple Music 以及其他所有内容。</p>

<h2>5. 将 Apple Music 提升到 100% 以上</h2>

<p>如果你已检查所有内容，Apple Music 仍然太小声——无论是 Sound Check 过于积极、专辑录制音量低，还是 MacBook 扬声器不够响——每个应用音量提升能解决问题。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 让你将 Apple Music 提升到 <strong>200%</strong>。音频信号在系统级别被放大，然后到达你的扬声器或耳机。只有 Apple Music 变响——Zoom、Slack 和浏览器保持在它们当前的音量。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上将 Apple Music 音量提升到 100% 以上" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>这对相反的问题也很有用：如果 Apple Music 相对于 Zoom 通话太响，在 SoundDial 中将 Apple Music 降至 25%，同时保持 Zoom 在 100%。每个应用独立控制意味着你永远不必为一个应用的音量而牺牲另一个。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 获取 SoundDial</a>——€14.99 一次性购买，无需订阅，macOS 14.2+。</p>
`,
  },
  "free-volume-mixer-mac": {
    slug: "free-volume-mixer-mac",
    title: "Mac 的免费音量混音器：你实际能得到什么（以及你得不到什么）",
    description:
      "在寻找 Mac 的免费独立应用音量混音器？这里诚实分析免费选项提供什么、缺少什么，以及何时值得付费。",
    date: "2026-04-03",
    readTime: "6 min read",
    content: `
<p>如果你搜索"Mac 的免费音量混音器"，你会找到一个主要结果：<strong>Background Music</strong>。这是唯一知名的 macOS 免费开源独立应用音量控制应用。让我们看看你实际得到什么——以及你放弃了什么。</p>

<h2>Background Music：免费选项</h2>

<p>Background Music 是托管在 GitHub 上的免费开源应用。它提供：</p>

<ul>
  <li><strong>独立应用音量滑块</strong>——每个运行中的应用的基本音量控制</li>
  <li><strong>自动暂停音乐</strong>——当另一个应用播放音频时暂停你的音乐播放器，停止后恢复</li>
  <li><strong>默认输出设备设置</strong>——覆盖应用默认使用的设备</li>
</ul>

<h3>Background Music 没有的功能</h3>
<ul>
  <li><strong>无法将音量提升到 100% 以上</strong>——滑块只能从 0% 到 100%。无法放大安静的应用。</li>
  <li><strong>没有音量配置</strong>——无法保存并切换配置</li>
  <li><strong>没有自动闪避</strong>——自动暂停与自动闪避不同。暂停完全停止音乐；闪避将音乐降到舒适的背景级别。很多人更希望通话时有轻微背景音乐，而不是完全静音。</li>
  <li><strong>没有音量记忆</strong>——不记得重启之间每个应用的音量</li>
  <li><strong>没有键盘快捷键</strong>——没有切换混音器或静音所有应用的热键</li>
  <li><strong>没有输出设备切换</strong>——无法在同一面板中切换扬声器/耳机</li>
</ul>

<h3>可靠性问题</h3>
<p>Background Music 最大的问题不是功能——而是稳定性。它通过安装一个<strong>虚拟音频设备驱动程序</strong>来工作，而这个驱动程序在 macOS 更新后会损坏。几乎每次主要 macOS 版本发布后（Ventura、Sonoma、Sequoia、Tahoe），用户都会报告：</p>
<ul>
  <li>虚拟设备安装失败</li>
  <li>音频噼啪声和故障</li>
  <li>应用未被检测到</li>
  <li>根本没有音频输出</li>
  <li>启动时应用崩溃</li>
</ul>

<p>由于这是志愿者维护的开源项目，修复不总是及时。macOS 更新后，你可能数周没有独立应用音量控制。</p>

<h2>其他"免费"选项</h2>

<h3>eqMac（免费版）</h3>
<p>eqMac 的免费版提供系统级均衡器，但没有独立应用音量控制。独立应用功能需要 eqMac Pro（订阅）。如果你主要需要 EQ 而不是音量混音，免费版很有用。</p>

<h3>macOS 内置</h3>
<p>macOS 没有内置音量混音器。最接近的是系统设置 → 声音中的提示音量滑块，它只影响系统声音——而不是来自 Slack、Discord 或 Teams 等第三方应用的通知声。</p>

<h2>免费版够用的情况</h2>

<p>Background Music 在以下情况下可能够用：</p>
<ul>
  <li>你只需要基本的独立应用音量（0-100%）</li>
  <li>你不需要配置、自动闪避或音量提升</li>
  <li>你能接受在 macOS 更新后修复它</li>
  <li>你对音频链中的虚拟音频设备感到满意</li>
</ul>

<h2>值得付费的情况</h2>

<p>付费音量混音器在以下情况下值得：</p>
<ul>
  <li><strong>可靠性</strong>——macOS 更新后仍能工作，无需等待志愿者修复</li>
  <li><strong>音量提升到 200%</strong>——将安静应用的内置最大值以外放大</li>
  <li><strong>配置</strong>——保存配置，一键切换会议/专注/游戏</li>
  <li><strong>自动闪避</strong>——通话期间自动降低音量，而不仅仅是自动暂停</li>
  <li><strong>无系统驱动</strong>——使用 Apple 原生 API，无可能损坏的虚拟音频设备</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 售价 €14.99——一次性购买，非订阅。作为参考，这不到两个月的 Spotify 订阅费，但这是一个你每天都会用到的工具。比 SoundSource（$39）便宜一半以上，而且包含 SoundSource 没有的功能（配置、自动闪避）。</p>

<img src="/apps/sounddial.png" alt="SoundDial——可靠的 Mac 独立应用音量混音器，带配置、自动闪避和 200% 提升" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>在 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> 上提供——经 Apple 审核、沙盒化、无系统驱动。€14.99 一次性购买，无需订阅，macOS 14.2+。</p>
`,
  },
  "balance-music-voice-chat-volume-mac": {
    slug: "balance-music-voice-chat-volume-mac",
    title: "如何在 Mac 上平衡音乐和语音聊天音量",
    description:
      "Discord 上音乐太响，或者 Spotify 背景下通话太安静。macOS 不让你平衡它们——这里教你如何设置完美比例。",
    date: "2026-04-05",
    readTime: "4 min read",
    content: `
<p>你想在 Discord（或 Zoom、或 FaceTime）与朋友通话时听音乐。音乐需要存在但不压倒。语音聊天需要清晰且占主导。简单要求，macOS 却让它不可能实现。</p>

<p>一个系统音量控制所有东西，你就被困住了：调高音量通话就好但音乐太响。调低音量音乐舒服但听不到朋友。没有内置方法将这两者设置为不同级别。</p>

<h2>应用内音量变通方法</h2>

<p>Spotify 和 Discord 都有内部音量滑块。理论上，你可以将 Spotify 的滑块调低到 30%，保持 Discord 输出在 100%。这创建了 30/100 的比例。</p>

<p>实际上：</p>
<ul>
  <li>你必须切换到每个应用来调整其滑块</li>
  <li>调整系统音量时比例会改变（两者都按比例缩放）</li>
  <li>不是每个应用都有内部音量滑块</li>
  <li>不精确——小 Spotify 滑块，没有百分比显示</li>
  <li>如果你关闭并重新打开 Spotify，滑块可能会重置</li>
</ul>

<h2>真正的修复：独立的每个应用音量</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 将 Spotify 和 Discord 都放在同一个面板中，各自有独立的音量滑块。设置你想要的比例然后保持它：</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上以不同音量级别平衡 Spotify 和 Discord" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>音乐 + 语音聊天的黄金比例</h3>
<p>基于大多数人的使用方式：</p>
<ul>
  <li><strong>语音聊天 85-100%</strong>——始终清晰可听，在混音中占主导</li>
  <li><strong>音乐 20-35%</strong>——存在但从不与人声竞争</li>
</ul>

<p>确切的比例取决于音乐、你的耳机和个人偏好。关键是你能找到一次完美的平衡并保持它——而不是不断调整。</p>

<h3>保存为配置</h3>
<p>将你的音乐/语音聊天平衡保存为配置。"游戏"配置：Discord 100%，游戏 50%，Spotify 20%。"放松"配置：Discord 70%，Spotify 60%。一键切换。</p>

<h3>通话自动闪避</h3>
<p>如果你在听音乐时来了通话，SoundDial 的自动闪避会自动将音乐降到你配置的级别。通话结束后，音乐恢复。无需任何操作。</p>

<p>音频平衡问题是每个 Mac 用户一旦同时运行音乐和通话就会面临的问题。这是一次性 €14.99 的解决方案。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 获取 SoundDial</a>——€14.99 一次性购买，无需订阅，macOS 14.2+。</p>
`,
  },
  "mac-volume-control-complete-guide": {
    slug: "mac-volume-control-complete-guide",
    title: "Mac 音量控制：完整指南（2026）",
    description:
      "关于在 macOS 上控制音频你需要知道的一切——从基本键盘快捷键到独立应用音量、输出切换和自动化。",
    date: "2026-06-12",
    readTime: "12 min read",
    content: `
<p>macOS 给你一个音量滑块和一个静音按钮。这就是 Apple 内置音频控制的全部范围。但你的 Mac 实际上拥有远超表面所展示的音频功能——隐藏的键盘快捷键、独立应用音量工具、输出设备管理以及大多数用户从未发现的自动化功能。</p>

<p>这是在 Mac 上控制音频的完整指南。从基础到高级用户功能，所有内容汇集一处。</p>

<h2>第一部分：内置音量控制</h2>

<h3>音量键</h3>
<p>音量加（F12）、音量减（F11）和静音（F10）键以 16 步调整系统音量。每步约为总范围的 6.25%。当前音量以屏幕叠加层显示。</p>

<h3>精细音量：Option + Shift</h3>
<p>按住 <strong>Option + Shift</strong>，然后按音量加/减键。每次按键调整正常步幅的四分之一——给你 <strong>64 个音量级别</strong>而不是 16 个。对于当普通步幅太粗糙时找到完美耳机音量至关重要。</p>

<h3>静默音量调整：Shift</h3>
<p>按住 <strong>Shift</strong>，然后按音量加/减键。音量变化时没有可听的反馈"pop"声。在通话或演示时调整音量时使用。</p>

<h3>菜单栏音量滑块</h3>
<p>如果声音图标在菜单栏中（在系统设置 → 控制中心 → 声音 → 始终在菜单栏中显示中启用），点击它会显示音量滑块。这是连续滑块，不像键盘键那样分步，因此你可以设置任何精确级别。</p>

<h3>控制中心</h3>
<p>点击菜单栏中的控制中心图标（双开关图标）→ 点击声音部分，可获得音量滑块和快速访问输出设备选择。</p>

<h2>第二部分：输出设备管理</h2>

<h3>切换输出设备</h3>
<p>最快的内置方法：按住 <strong>Option</strong> 并点击菜单栏中的声音图标。你将看到所有可用输出和输入设备的列表。点击一个即可立即切换。</p>

<p>或者：系统设置 → 声音 → 输出。从列表中选择你的首选设备。</p>

<h3>蓝牙设备管理</h3>
<p>macOS 为每个输出设备单独记忆音量级别。当你从扬声器（70%）切换到 AirPods（40%）时，音量调整为上次使用该设备时的值。如果你不预期的话，这可能感觉像音量"自己在变"。</p>

<h3>聚合和多输出设备</h3>
<p>对于高级设置，打开 Audio MIDI Setup（应用程序 → 实用工具）以创建聚合设备（合并多个输入）或多输出设备（同时向多个输出发送音频）。这些主要用于专业音频设置，而不是日常使用。</p>

<h2>第三部分：提示和通知音量</h2>

<h3>系统提示音量</h3>
<p>macOS 有单独的提示音量滑块：系统设置 → 声音 → 提示音量。这独立于主音量控制系统声音（Funk、Tink、Bottle 等）的音量。但它只影响 macOS 系统提示——不影响来自 Slack、Discord 或 Teams 等第三方应用的通知声。</p>

<h3>通知声音管理</h3>
<p>前往系统设置 → 通知。对于每个应用，你可以打开或关闭"播放通知声音"。这是二进制的——你无法使应用的通知更安静，只能完全开启或关闭。</p>

<h3>专注模式</h3>
<p>专注模式（系统设置 → 专注）抑制来自所选应用的通知。它们可以使通知声静音，但不影响媒体音量。即使在勿扰模式下，你的音乐也会以满音量继续播放。</p>

<h2>第四部分：耳机特定控制</h2>

<h3>耳机安全</h3>
<p>系统设置 → 声音 → 耳机安全。"减少响亮音频"根据累积暴露限制耳机音量。你可以禁用它或调整阈值。只影响耳机输出，不影响扬声器。</p>

<h3>空间音频</h3>
<p>对于支持的耳机（AirPods Pro、AirPods Max、部分 Beats），macOS 支持带头部追踪的空间音频。在控制中心 → 声音 → 空间音频中启用。这影响声音的感知定位，但不影响音量。</p>

<h3>音频平衡</h3>
<p>系统设置 → 辅助功能 → 音频 → 平衡。一个左右滑块，调整立体声平衡。如果一侧听起来比另一侧安静，确保它居中。</p>

<h2>第五部分：macOS 做不到的事（以及如何修复）</h2>

<h3>独立应用音量控制</h3>
<p>macOS 对所有应用只有一个音量滑块。没有内置方法将 Spotify 设为 30% 而 Zoom 设为 100%。这是 macOS 中被请求最多的音频功能，Apple 从未添加它。</p>

<h3>音量提升超过 100%</h3>
<p>macOS 的音量最高为 100%。如果内容在最大音量时仍然太安静，没有内置方法进一步放大。</p>

<h3>音量配置</h3>
<p>没有办法保存音量配置（Spotify 30%、Zoom 100%、Slack 静音）并在预设之间切换。</p>

<h3>自动闪避</h3>
<p>macOS 不会在你加入通话时自动降低背景音频。</p>

<h3>每个应用的音量记忆</h3>
<p>macOS 不记住每个应用的音量级别，因为独立应用音量根本不存在。</p>

<p>所有这五项功能都可以通过 <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 实现——一个原生 macOS 菜单栏应用，添加了 Apple 从未构建的音量混音器。</p>

<img src="/apps/sounddial.png" alt="SoundDial——macOS 的独立应用音量控制、配置、自动闪避和 200% 提升" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>第六部分：使用 SoundDial 的独立应用音量</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 填补了上面列出的每个空缺：</p>

<ul>
  <li><strong>独立应用音量：</strong>每个应用都有自己的滑块，0% 到 200%</li>
  <li><strong>独立应用静音：</strong>一键静音任何应用</li>
  <li><strong>音量提升：</strong>将安静的应用放大超过 100%</li>
  <li><strong>音量配置：</strong>保存配置，一键切换</li>
  <li><strong>自动闪避：</strong>通话期间背景音频降低，通话结束后恢复</li>
  <li><strong>音量记忆：</strong>重启之间记住每个应用的音量</li>
  <li><strong>输出设备切换：</strong>在同一面板中更换扬声器/耳机</li>
  <li><strong>键盘快捷键：</strong>⌃⌥S 切换混音器，⌃⌥M 静音所有</li>
</ul>

<p>它使用 Apple 的现代 Core Audio Tap API——无系统驱动、无虚拟音频设备、无内核扩展。在 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> 上以 €14.99（一次性购买，无需订阅）提供，经 Apple 审核并沙盒化。macOS 14.2+。</p>
`,
  },
  "vlc-volume-too-low-mac": {
    slug: "vlc-volume-too-low-mac",
    title: "Mac VLC 音量太低？如何提升它超过200%",
    description:
      "VLC音量调到最大，但视频还是太小？VLC内置200%的提升——而且你还可以用每个应用的音量调频器提升得更远。",
    date: "2026-04-08",
    readTime: "4 min read",
    content: `
<p>你正在用VLC看视频。对话很轻。你把VLC的音量调到最大。你把Mac音量调到最大。还是听不清楚。视频录制得太安静了。</p>

<p>好消息是：VLC实际上内置了一个大多数人不知道的解决方案。更棒的是：你可以与系统级的加速叠加，获得更大的音量。</p>

<h2>VLC内置音量提升（最高200%）</h2>

<p>VLC本身音量可以超过100%。VLC播放器栏的音量滑块最高可调到100%，但你还可以进一步调高：</p>

<h3>方法1：滚轮</h3>
<p>将鼠标悬停在VLC的音量滑块上，向上滚动。滑块会超过可见的100%点，最高可达200%。你会看到滚动时显示的百分比。</p>

<h3>方法二：键盘快捷键</h3>
<p>媒体 <strong>指令+上箭头</strong> （⌘↑）反复练习以将音量提升到100%以上。每按一次就增加一个步骤。 <strong>指令+下箭头</strong> （⌘↓）减少。</p>

<h3>方法三：音频菜单</h3>
<p>进入VLC的→音频，→提高音量。反复练习，直到音量足够大。当前关卡显示在玩家右下角。</p>

<p>VLC的200%提升通过放大VLC解码器中的音频信号实现。在极端音量下可能会引入失真，但对于真正安静的视频文件来说非常有效。</p>

<h2>超越VLC的提升：系统级放大</h2>

<p>如果 VLC 在 200% 下仍然不够响亮——或者你想提升 VLC 音量而不影响内部音频设置——系统级的每个应用音量混音器可以增加一层放大。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 在系统层面赋予VLC自己的音量滑块，从0%到200%。这与VLC内部的提升叠加：</p>

<ul>
  <li>VLC内部：200% × SoundDial：200% = 有效放大400%</li>
  <li>VLC内部：150% × SoundDial：150% = 有效放大225%</li>
</ul>

<p>这是极端放大，会在某些内容中引入失真，但对于极其安静的源素材来说，这可能正是你需要的。</p>

<img src="/apps/sounddial.png" alt="SoundDial在系统层面提升VLC音量macOS以获得安静的视频文件" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>更重要的是，SoundDial可以让你提升VLC的效果 <strong>独立</strong>.你的音乐播放器、浏览器和通讯应用保持正常音量，只有VLC会变大。如果你在SoundDial中将VLC提升到180%，Spotify也不会改变。这是VLC内置的提升功能做不到的——VLC的提升只影响VLC，但macOS的单一系统音量仍然连接着其他所有设备。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在Mac应用商店SoundDial</a> — 一次性购买14.99欧元，无订阅，macOS 14.2+。</p>
`,
  },
  "disable-audio-ducking-mac": {
    slug: "disable-audio-ducking-mac",
    title: "如何禁用Mac的音频蹲伏（或自己控制）",
    description:
      "macOS或者你的应用在通话时不经允许就把音乐音量调低。以下是阻止不受欢迎的音频闪避的方法——或者用你实际控制的闪避来替代它。",
    date: "2026-04-10",
    readTime: "5 min read",
    content: `
<p>你加入了Zoom会议。你的音乐几乎消失了。你没有碰任何音量控制——有东西帮你做了。这是 <strong>音频闪避</strong>当通话或重要音频源处于激活状态时，自动降低背景音频。</p>

<p>有些人很喜欢。还有人讨厌它——尤其是当蹲得太激烈（音乐降到零而不是舒适的背景音量）或意外触发时。</p>

<p>以下是如何关闭Mac中不需要的鸭子，以及如何用你想要的鸭子功能替代它。</p>

<h2>音频低头的来源是Mac</h2>

<p>macOS自己确实有 <strong>不是</strong> 内置音频闪避功能。如果你的音乐在通话时变得更小，可能是以下原因之一：</p>

<h3>1. Zoom 的音频处理</h3>
<p>Zoom激活时可以减少系统音频。检查Zoom→设置→音频，关闭“自动调整麦克风音量”。也可以试着把降噪效果从“高”调到“低”。</p>

<h3>2. 蓝牙编解码器切换</h3>
<p>当应用激活你的蓝牙耳机麦克风时，macOS会从AAC切换到SCO编解码器。这其实不是“闪避”——而是让一切听起来更安静、更低质量的编解码器变化。用单独的麦克风解决。</p>

<h3>3. 第三方应用</h3>
<p>一些音频应用（比如背景音乐）具备自动暂停或自动蹲伏功能。有些媒体应用在检测到其他音频源时会自行降低音量。检查你安装的任何音频工具应用。</p>

<h3>4. 音频调节的通信应用</h3>
<p>Discord、Teams 和其他通信应用都有自己的音频处理，可以影响其他应用的感知音量。检查每个应用的音频设置中的“自动调整”选项并禁用它们。</p>

<h2>如何阻止不受欢迎的躲避</h2>

<ol>
  <li><strong>检查一下Zoom/Teams/Discord的音频设置</strong> — 关闭自动音量/麦克风调节</li>
  <li><strong>通话时用单独的麦克风</strong> —— 防止蓝牙编解码器切换</li>
  <li><strong>移除音频工具</strong> —— 背景音乐、Soundflower 或任何可能截获音频的应用</li>
  <li><strong>查看macOS无障碍</strong> — 系统设置→ 无障碍→音频，用于任何意外设置</li>
</ol>

<h2>用好的鸭子替代糟糕的鸭子</h2>

<p>音频低沉的原理其实很棒——通话时会自动降低背景音，让你听得更清楚。问题是当声音太激进（音乐归零）、无法自定义（你无法选择降低多少），或者被错误触发时。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 内置自动蹲下功能，让你掌控：</p>

<ul>
  <li><strong>可配置鸭子等级：</strong> 在通话时可以精确选择降低背景音频的幅度——从10%（几乎无声）到80%（几乎没有声音）。默认设置为30%，这样音乐可以听到但不会干扰。</li>
  <li><strong>智能检测：</strong> 通过监控麦克风使用情况来检测来电——这与macOS的橙色点是同一指示器。支持Zoom、Teams、FaceTime、Discord、Slack、Google Meet、Webex、Skype。</li>
  <li><strong>完美修复：</strong> 调用结束后，每个应用都会回到其之前的音量。没有重新调整。</li>
  <li><strong>简单切换：</strong> 在SoundDial的设置里开启或关闭自动蹲下。当你不想要时，关闭它。当你想要恢复时，就启用它。</li>
</ul>

<img src="/apps/sounddial.png" alt="SoundDial可配置的自动蹲下——精确控制通话时背景音频的降低程度" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>区别在于：不是某个应用决定每次通话时你的音乐都归零，而是你决定它应该降到25%。你不是失去控制，而是获得它。而且你不用在三个不同的应用里禁用隐藏功能，而是在一个地方有一个开关。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在Mac应用商店SoundDial</a> — 一次性购买14.99欧元，无订阅，macOS 14.2+。</p>
`,
  },
  "bluetooth-headphones-too-quiet-mac": {
    slug: "bluetooth-headphones-too-quiet-mac",
    title: "蓝牙耳机在Mac上太安静了吗？所有有效的修复方法",
    description:
      "你的蓝牙耳机在手机上用得很好，但Mac听起来很安静。这里列出了所有原因——从编解码器问题到macOS容量限制——以及如何解决每个问题。",
    date: "2026-04-12",
    readTime: "6 min read",
    content: `
<p>你的蓝牙耳机在手机上声音已经足够大了。你把它们连接到你的Mac——一切都变得安静了。音乐听起来闷闷的。电话很难听清。你已经把音量调到最大，但还是不够。这是怎么回事？</p>

<p>Mac蓝牙音频有几个手机没有的音量降低因素。以下是每个问题及其解决方法。</p>

<h2>1. 耳机安全限制了音量</h2>

<p>macOS内置功能可以限制耳机音量，以保护你的听力。它会测量声音暴露随时间的变化，如果它认为你听得太大，会降低最大音量。</p>

<p>前往 <strong>系统设置→声音→耳机安全</strong>.如果启用了“减少大声音频”，请禁用它或提高阈值。这是导致蓝牙耳机在 Mac 上比手机更安静的首要原因。</p>

<h2>2. 蓝牙编解码器不匹配</h2>

<p>你的手机可能用更高质量的编解码器（aptX、LDAC、AAC）连接到耳机，而Mac默认使用SBC（基本蓝牙编解码器）。不同的编解码器有不同的最大音量特性。</p>

<p>macOS通常为苹果设备使用AAC，为第三方耳机使用SBC。如果你的耳机支持 aptX 或 LDAC，macOS不会用它们——苹果只支持 AAC 和 SBC。</p>

<p><strong>修复方法：</strong> macOS上对编解码器的选择也没什么办法。但了解这一点后，为什么同一副耳机在你的Mac上听起来可能不同（而且可能更安静），而用LDAC的安卓手机则可能更安静。</p>

<h2>3. 麦克风激活触发SCO</h2>

<p>当任何应用激活你的蓝牙耳机麦克风（Zoom、FaceTime、Siri、语音输入）时，macOS会从AAC切换到SCO编解码器。SCO最初是为电话设计的，2004年就被设计出来了——它的声音很糟糕，而且音量要小得多。</p>

<p><strong>修复方法：</strong> 使用单独的麦克风（内置Mac麦克风或USB麦克风），蓝牙耳机只输出。在你的通话应用设置里，把输入设为Mac的麦克风，输出到耳机。这阻止了SCO的切换。</p>

<h2>4. 蓝牙音量同步问题</h2>

<p>蓝牙音频有两个音量控制：一个在Mac侧，一个在耳机侧。它们应该保持同步，但可能会分开——Mac显示100%，但耳机音量其实并不全。</p>

<p><strong>修复方法：</strong> 断开耳机（系统设置，蓝牙→→点击“i”→断开连接），等待5秒，重新连接。这会重新同步音量。有些耳机还有自己的音量键——确保音量键也开到最大。</p>

<h2>5. 低质量蓝牙连接</h2>

<p>距离、干扰（WiFi路由器、USB 3.0设备）以及Mac与耳机之间的障碍物都会降低蓝牙信号质量。当信号较弱时，macOS可能会降低音频比特率，这会影响感知音量和音质。</p>

<p><strong>修复方法：</strong> 靠近你的Mac。断开你不使用的其他蓝牙设备。把USB 3.0集线器移离你的Mac（USB 3.0在蓝牙使用的2.4 GHz频段会产生干扰）。</p>

<h2>6. 耳机本身</h2>

<p>有些蓝牙耳机的最大音量比其他的低。带大号驱动单元的头戴式耳机通常比耳塞更响。降噪耳机的固件中可能内置了音量限制。</p>

<p>查看耳机厂商的应用（索尼耳机连接、Bose Music、森海塞尔智能控制等）的音量限制设置。有些耳机有“安全监听”模式，可以限制音量。</p>

<h2>还是很安静？加速超过100%</h2>

<p>如果你检查了以上所有设置，耳机在Mac上还是太小，那你需要音量放大。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 可以提升任何应用的音量到 <strong>200%</strong>.如果蓝牙耳机的Spotify声音太小，可以把滑块拉到160%。音频信号在到达耳机前会被放大，实际上将该应用的可用音量翻倍。</p>

<img src="/apps/sounddial.png" alt="SoundDial Mac上蓝牙耳机的应用音量调节，每个应用都有滑块调节到200%" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>每个应用的音量提升比系统范围的音量提升更好，因为你只能放大安静应用。如果你的播客声音小但音乐正常，可以把播客应用提升到170%，同时保持Spotify在80%。每个应用都能保持在正确的水平。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在Mac应用商店SoundDial</a> — 一次性购买14.99欧元，无订阅，macOS 14.2+。</p>
`,
  },
  "mac-audio-obs-streaming-setup": {
    slug: "mac-audio-obs-streaming-setup",
    title: "Mac OBS和流媒体音频：如何控制观众听到的内容",
    description:
      "用OBS在Mac上直播？你的观众听到的一切都是同一个音量——游戏、音乐、提醒、Discord。以下是如何正确平衡音频源的方法。",
    date: "2026-04-15",
    readTime: "7 min read",
    content: `
<p>你用OBS在Mac上直播。你的游戏音效非常震撼。你的Discord通话正在运行。Spotify 正在播放背景音乐。有人订阅时，警报会响起火警。观众听到的声音是同一声音——混乱的混乱，Discord呼喊与爆炸声相互竞争，音乐淹没了你的解说。</p>

<p>核心问题是：macOS给你一个音频输出，而OBS却把它录成一个合并的流。你不能告诉OBS“游戏捕捉40%，Discord采集80%，Spotify采集20%”，因为macOS不会把它们分开。</p>

<h2>Mac流媒体音频问题</h2>

<p>在Windows上，OBS可以原生捕获单个应用程序的音频。你把每个应用作为独立的音频源添加，并在OBS里独立混音。Mac上，这不是内置的。macOS 上的 OBS 可以捕捉：</p>

<ul>
  <li><strong>桌面音频</strong> ——你Mac上播放的所有内容，汇聚成一条流</li>
  <li><strong>麦克风/辅助</strong> ——你的麦克风输入</li>
  <li><strong>应用音频采集（macOS 13+）</strong> —— 捕捉特定应用的音频，但设置是手动且有限的</li>
</ul>

<p>应用音频采集源（加入于 OBS 30+ ）用于隔离一个应用，但在 OBS 中管理五个不同音量的音频源很复杂，且并非所有应用都能配合。</p>

<h2>更简单的方法是：在OBS捕获之前先控制关卡</h2>

<p>与其试图在OBS里分离音频，不如控制每个应用的音量 <em>之前</em> 它能直接进入OBS的桌面音频采集。如果你把Spotify调到20%，把Discord调到90%，OBS的桌面音频采集会捕捉到已经平衡好的混音。</p>

<p>这正是 <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 确实如此。将每个应用设置为你希望观众听到的音量：</p>

<img src="/apps/sounddial.png" alt="SoundDial平衡游戏、Discord和音乐音量，用于OBS流媒体Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>典型的流媒体音频设置</h3>
<ul>
  <li><strong>比赛：</strong> 50%——声音有但不盖过你的声音</li>
  <li><strong>Discord / 语音聊天：</strong> 80%——团队明确点名</li>
  <li><strong>Spotify / 音乐：</strong> 15% — 微妙的背景氛围</li>
  <li><strong>流式提醒（浏览器）：</strong> 40% — 能听见但不刺耳</li>
  <li><strong>Slack / 通知：</strong> 静音——观众不需要听你的私信</li>
</ul>

<h3>保存为“流媒体”配置文件</h3>
<p>把这个配置保存为SoundDial的卷配置文件。在上线前，只需一键应用“流媒体”配置文件。每个应用都会跳转到其流媒体优化的水平。直播结束后，切回“普通”或“游戏”配置文件。</p>

<h2>你听到的与观众听到的</h2>

<p>通过SoundDial在系统层面调整每个应用的音量，你和观众都能听到同样平衡的混音。这比试图维护独立混音（一个给你，一个给流）要简单——后者需要虚拟音频设备和复杂的路由，Mac上很脆弱。</p>

<p>如果你需要为直播和耳机完全分开混音（比如你想听到比观众更大的Discord声），那你需要更复杂的路由设置，配合虚拟音频设备。但对大多数主播来说，一个平衡良好的混音——通过菜单栏轻松控制——正是所需。</p>

<h2>为什么按应用控制胜过仅用OBS的混音</h2>

<ul>
  <li><strong>即时调整：</strong> 直播中，有观众说游戏声音太大。点击菜单栏，拖动一个滑块。完成了。没有暂停，也没有打开OBS设置。</li>
  <li><strong>在OBS之外工作：</strong> 你的平衡音频设置即使不流媒体也能正常工作。同样的档案，同样的便利。</li>
  <li><strong>禁止虚拟音频设备：</strong> SoundDial使用苹果原生的Audio Tap API——没有Soundflower，没有BlackHole，也没有在macOS更新时会损坏的驱动。</li>
</ul>

<p>可于 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac 应用商店</a> —— 苹果评测，一次性购买14.99欧元，无订阅，14.2+macOS。</p>
`,
  },
  "make-mac-remember-volume-per-app": {
    slug: "make-mac-remember-volume-per-app",
    title: "如何让你的Mac记住每个应用的容量",
    description:
      "每次重启Spotify或重启Zoom，都必须重新调整音量。以下是让macOS自动记住每个应用音量等级的方法。",
    date: "2026-04-18",
    readTime: "4 min read",
    content: `
<p>你花五分钟把音量调到完美。Spotify占30%，Zoom占100%，Slack占15%。然后你重新开始Mac。或者Slack崩溃后重新启动。或者关闭Spotify，稍后再重新打开。每个应用都会重置到默认音量。你得重新调整一切。又一次。</p>

<p>macOS会记住重启时的系统音量。但它不会记住每个应用的音量——因为macOS本身就没有每个应用的音量控制。没什么可记住的。</p>

<h2>为什么应用程序不会记住自己的音量</h2>

<p>有些应用（比如Spotify和VLC）内部有音量滑块，会在会话间保存。但大多数应用——浏览器、通信工具、系统工具——都没有自己的音量控制。即使是保存内部音量的应用，也只记得自己的滑块位置，而不是相对于其他应用的音量。</p>

<p>你真正想要的是 <em>系统</em> 记住：“Spotify 应该保持系统音量的 30%，永远。”macOS不支持这个概念。</p>

<h2>带SoundDial的卷存储器</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 有 <strong>卷存储器</strong> 特色。启用后，它会通过捆绑包标识保存每个应用的音量等级。当应用退出并重新启动时——无论是重启、崩溃还是重启Mac——SoundDial会自动恢复到保存的音量。</p>

<img src="/apps/sounddial.png" alt="SoundDial 音量内存——自动记住并恢复每个应用的音量水平macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>工作原理</h3>
<ol>
  <li>在SoundDial的设置中启用“记住每个应用的音量”</li>
  <li>将每个应用设置为你偏好的音量</li>
  <li>SoundDial会自动保存关卡</li>
  <li>应用重新启动时，音量会恢复到之前的状态</li>
</ol>

<p>没有手动保存。没有重新调整。你第一次设置音量就是最后一次。</p>

<h3>什么会被记住</h3>
<ul>
  <li><strong>音量等级</strong> ——精确百分比（0%到200%）</li>
  <li><strong>静音状态</strong> ——如果你静音了应用，重新启动时它依然静音</li>
  <li><strong>每个应用</strong> ——每个应用的体积通过捆绑ID独立存储</li>
</ul>

<h3>新应用会有默认音量</h3>
<p>当应用第一次启动（SoundDial以前没见过）时，它会获得一个可配置的默认卷。你可以在SoundDial的设置中设置默认设置——新应用从80%（或你喜欢的）开始，而不是可能直接开到100%。</p>

<h2>音量内存 + 配置文件 = 设置好后就不用管了</h2>

<p>卷内存负责日常事务：应用在重启后保持音量。配置文件负责情境切换：“会议”模式“、”专注“模式、”游戏“模式——只需一键应用，所有应用都会跳转到相应的级别。</p>

<p>综合起来，你几乎不用手动调整音量滑块。应用会记住上一个等级，切换上下文时，配置文件会一次性设置所有内容。</p>

<p>可于 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac 应用商店</a> —— 苹果评测，一次性购买14.99欧元，无订阅，14.2+macOS。</p>
`,
  },
  "podcast-volume-too-low-mac": {
    slug: "podcast-volume-too-low-mac",
    title: "Mac 的播客音量太低了？如何让它更响亮",
    description:
      "有些播客即使在最大音量下，在Mac上也非常安静。原因如下——以及如何在不影响其他应用的情况下将播客音频提升至100%以上。",
    date: "2026-04-20",
    readTime: "5 min read",
    content: `
<p>你正在Mac听播客。主持人声音不错，但嘉宾——在厨房用笔记本电脑麦克风录音——几乎听不见。你把音量调到100%。主持人声音太大了，但客人依然安静。没有赢的办法，因为问题出在录音，而不是你的Mac。</p>

<p>播客的音频质量差异很大。专业演出的母带处理水平稳定。但采访、独立播客和现场录音中，嘉宾通常音量在-20分贝或更低——明显比主持人或开场音乐要小得多。</p>

<h2>为什么有些播客如此安静</h2>

<ul>
  <li><strong>嘉宾麦克风质量：</strong> 一位主持人是专业的设备，客人戴着AirPods。电平差可以达到15+ dB。</li>
  <li><strong>无后期制作：</strong> 专业制作的播客会压缩和规范音量。很多人没有。</li>
  <li><strong>播客应用不会归一化：</strong> Apple Podcast和Spotify对播客内容应用最小或无响度归一化（不像音乐）。</li>
  <li><strong>动态范围：</strong> 一些播客制作人有意保持高动态范围以保证“自然”声音——这意味着安静的部分非常安静。</li>
</ul>

<h2>应用内修复</h2>

<h3>苹果播客</h3>
<p>Apple Podcasts 没有音量归一化或提升功能。播客所提供的就是你所得到的。旧版本中的应用内音量控制被移除——现在只使用系统音量。</p>

<h3>Spotify</h3>
<p>Spotify 的“音量归一化”设置（播放设置→）可以帮助不同播客之间保持音量一致性，但对节目内动态的影响有限。试着把音量调到“响亮”，以获得最大归一化。</p>

<h3>Overcast（浏览器）</h3>
<p>如果你使用Overcast（通过网页 overcast.fm），它有一个“语音增强”功能，可以大幅放大和压缩播客音频，使安静的声音变得更响亮。这是最好的内置解决方案之一——但它只在Overcast中有效。</p>

<h2>系统层面修复：将播客应用提升至100%</h2>

<p>万能的解决办法是将播客应用放大到macOS 100%的限制之外。 <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 每个应用都有一个音量滑块，最高可达 <strong>200%</strong>.</p>

<img src="/apps/sounddial.png" alt="SoundDial将Apple Podcast的音量调高到180%，用于安静的播客Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>将Apple Podcasts或播客应用设置为160-180%，同时保持Spotify音乐为40%，Slack为15%。播客音量变大，但又不会让其他声音变得刺耳。当你切换回音乐时，只需将播客应用恢复正常——或者让SoundDial的音量记忆自动记住它。</p>

<p>这种按应用计算的方法比系统范围的流量提升更好，原因包括：</p>
<ul>
  <li>只有安静播客应用声音更大</li>
  <li>音乐保持在你喜欢的音量</li>
  <li>通话音频保持在你偏好的音量</li>
  <li>通知声不会突然变得震耳欲聋</li>
</ul>

<p>可于 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac 应用商店</a> —— 苹果评测，一次性购买14.99欧元，无订阅，14.2+macOS。</p>
`,
  },
  "mac-audio-online-classes-lectures": {
    slug: "mac-audio-online-classes-lectures",
    title: "Mac 在线课程和讲座音频设置",
    description:
      "一边看讲座一边做笔记，谷歌相关资料，和同学聊天——音量各不相同。以下是管理学生音频的方法Mac。",
    date: "2026-04-22",
    readTime: "5 min read",
    content: `
<p>你是一名正在参加Zoom在线讲座的学生。你在另一个标签页开着YouTube教程供参考。你的同学们正在Discord上聊天。Spotify在背景播放低保真节拍。你的Mac把这些都当作一卷来处理。把低保真调小，你就听不到教授说话了。把讲座音量调大，Discord的提示音会打乱你的专注力。</p>

<p>macOS 对所有内容都只有一个音量滑块。对于同时处理多个音频源的学生来说，这是一个持续的摩擦点。</p>

<h2>典型的学生音频堆栈</h2>

<ul>
  <li><strong>讲座平台</strong> （Zoom、Teams、Google Meet、Webex）——必须清晰无误，始终清晰可闻</li>
  <li><strong>参考资料</strong> （YouTube教程，录制讲座）——音量适中，需要可暂停/调整</li>
  <li><strong>学习音乐</strong> （Spotify，Apple Music）——低背景水平，不应该和讲座竞争</li>
  <li><strong>聊天</strong> （Discord、iMessage、Slack）——细微的通知声，不干扰</li>
  <li><strong>浏览器标签页</strong> ——偶尔自动播放的内容需要立即静音</li>
</ul>

<h2>macOS限制</h2>

<p>只有一个系统体积，你不得不妥协。调到教授麦克风安静的程度，Spotify声音太大了。调成舒适的音乐，讲座声就听不见了。静音Spotify，你就会失去背景音乐的专注效果。没有舒适的平衡，因为每个应用都被锁定在同一个水平。</p>

<h2>设置每个应用的音频以便学习</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 每个应用都有自己的音量滑块，这样你就能打造理想的学习音频设置：</p>

<img src="/apps/sounddial.png" alt="SoundDial学生设置——讲座音量开到最大，学习音乐调低，通知静音" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>讲座简介</h3>
<ul>
  <li><strong>Zoom / Teams / 会议：</strong> 百分之百——绝不漏掉任何字</li>
  <li><strong>Spotify：</strong> 15% — 几乎听不见的背景氛围</li>
  <li><strong>Discord：</strong> 10% — 仅提供细微通知</li>
  <li><strong>浏览器：</strong> 40% — 必要时用于参考视频</li>
  <li><strong>iMessage：</strong> 静音——在职业间检查</li>
</ul>

<h3>自学档案</h3>
<ul>
  <li><strong>Spotify：</strong> 50% — 激励学习音乐</li>
  <li><strong>浏览器：</strong> 70% — 清晰的教程视频</li>
  <li><strong>Discord：</strong> 20% — 可用于学习小组</li>
  <li><strong>其他所有内容：</strong> 闷音</li>
</ul>

<h3>断裂轮廓</h3>
<ul>
  <li><strong>一切：</strong> 60-80%——课间休息</li>
</ul>

<p>将每个设置保存为音量档案，随着一天的进行一键切换。讲座开始时，应用“讲座”——自动蹲下会自动处理剩下的部分，教授通过麦克风讲话时会自动降低音乐音量。</p>

<h2>为什么这对聚焦很重要</h2>

<p>研究一再表明，拥有合适的音频环境能提升注意力和记忆力。错误的混合——音乐太大、通知太频繁、讲座太小——会产生与你所学习内容无关的认知负担。把音频做对一次，保存成配置文件，然后再也不去想它，可以消除持续的干扰。</p>

<p>可于 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac 应用商店</a> —— 苹果评测，一次性购买14.99欧元，无订阅，14.2+macOS。</p>
`,
  },
  "mac-sound-not-working-after-update": {
    slug: "mac-sound-not-working-after-update",
    title: "更新后Mac声音不工作了吗？完整修复指南",
    description:
      "你更新了macOS，现在声音就没了，有爆裂声，或者音量卡在错误的音量。以下是让你的Mac音频恢复运行的所有修复方法。",
    date: "2026-04-25",
    readTime: "7 min read",
    content: `
<p>你更新了macOS。一切看起来都正常——直到你注意到没有声音。或者声音在噼啪作响。或者音量卡住了。或者你的音频输出设备没了。几乎每个macOS版本都会有更新后的音频问题，从轻微烦人到完全无声不等。</p>

<p>这里有一份系统化的指南，教你修复macOS更新后的音频Mac，涵盖所有已知问题和解决方案。</p>

<h2>第一步：检查显而易见的事实</h2>

<h3>是消音吗？</h3>
<p>按下音量加大键。检查屏幕上是否有音量指示。有时更新会重置系统音量归零或启用静音。</p>

<h3>正确的输出设备选中了吗？</h3>
<p>进入系统设置→声音→输出。更新后，macOS有时会切换到意想不到的输出设备——连接显示器的扬声器、未连接的蓝牙设备，或者当你想要外接扬声器时，会切换到内置扬声器。选择正确的设备。</p>

<h3>耳机安全是限制音量的吗？</h3>
<p>有时更新会重置耳机安全为默认状态（启用）。检查系统设置→声音→耳机安全，如果更新开启了“降低大声音频”功能，请关闭。</p>

<h2>步骤2：重启核心音频</h2>

<p>音频守护进程（coreaudiod）在更新后经常会进入不良状态。重启它是最有效的解决办法。</p>

<p>打开终端并运行：</p>
<p><code>Sudo Killall CoreAudid</code></p>

<p>音频会短暂中断然后重新开始。现在测试声音是否正常。如果这样能解决问题，问题出在音频守护进程过时——更新后很常见。</p>

<h2>步骤3：重置NVRAM/PRAM</h2>

<p>对于Intel Mac：完全关机，然后按住电源开机 <strong>选项 + 指令 + P + R</strong> 大约持续了20秒。这会重置NVRAM，NVRAM存储卷设置、启动磁盘选择及其他低级偏好设置。</p>

<p>对于苹果硅芯片Mac（M1/M2/M3/M4）：NVRAM在需要时会自动重置。通常完全重启（不仅仅是睡眠/清醒）就足够了。</p>

<h2>步骤4：检查第三方音频驱动冲突</h2>

<p>macOS更新经常会破坏第三方音频驱动和内核扩展。如果你安装了这些，可能是它们引起的问题：</p>

<ul>
  <li><strong>声花</strong> ——停产，常与新macOS冲突</li>
  <li><strong>黑洞</strong> —— 虚拟音频设备，macOS更新后可能需要更新</li>
  <li><strong>环线</strong> ——可能需要新版本以应对更新macOS</li>
  <li><strong>背景音乐</strong> ——安装了一个经常在更新时出问题的虚拟音频设备</li>
  <li><strong>音频接口驱动</strong> —— Focusrite、Universal Audio 等 检查驱动是否更新</li>
</ul>

<p><strong>修复方法：</strong> 删除或更新冲突的软件。对于虚拟音频设备，检查应用安装的音频设备是否出现在系统设置→声音→输出中——如果显示并被选中，切换到真实扬声器。然后更新或卸载第三方应用。</p>

<h2>步骤5：安全模式启动</h2>

<p>进入安全模式以确定问题是由启动程序还是第三方扩展引起：</p>

<ul>
  <li><strong>苹果硅片：</strong> 关机→长按电源键直到出现“加载启动选项”→选择启动盘→按住Shift→点击“安全模式继续”。</li>
  <li><strong>英特尔：</strong> 重启→启动时按住Shift，直到看到登录窗口</li>
</ul>

<p>如果音频在安全模式下能正常工作，可能是第三方内核扩展或登录项目导致的。调查最近安装的软件。</p>

<h2>步骤6：创建一个新用户账户</h2>

<p>如果问题依旧，创建临时新用户账户（系统设置，→用户与组→添加用户）。登录新账户测试音频。如果新账户能正常播放，问题出在你的用户配置文件——可能是偏好设置文件损坏或音频配置。</p>

<h2>防止未来SoundDial问题</h2>

<p>一个优点 <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 相比其他音频工具：它不安装系统音频驱动。它使用苹果原生的Core Audio Tap API，这意味着它能与macOS更新无缝配合，避免了困扰虚拟音频设备应用的冲突。</p>

<p>如果你用过Background Music或Soundflower，更新后坏了，SoundDial替代品就不会有同样的问题。每个应用的音量控制、音量提升至200%、配置文件、自动蹲下——所有这些都无需内核扩展或虚拟音频设备。</p>

<p>可于 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac 应用商店</a> —— 苹果评测，一次性购买14.99欧元，无订阅，14.2+macOS。</p>
`,
  },
  "mute-all-apps-keyboard-shortcut-mac": {
    slug: "mute-all-apps-keyboard-shortcut-mac",
    title: "如何在Mac上一次性静音所有应用（并完美解除静音）",
    description:
      "需要瞬间安静吗？静音键会静音所有声音——但取消静音会重置你精心平衡的音量。这里有个更好的静音和恢复方式，可以在Mac上恢复。",
    date: "2026-04-28",
    readTime: "4 min read",
    content: `
<p>有人走进房间。你老板突然打电话来了。客户在通话中共享屏幕，你的音乐会从他们的扬声器播放。你需要即时安静。现在。</p>

<p>你按下静音键。一切安静下来。危机解除。</p>

<p>然后那一刻过去了。你又按了静音键。所有内容都会回来——但只是系统音量，系统不记得Spotify是30%，Zoom是100%，Slack是15%。那些单独的关卡？消失了。你必须手动重新调整所有东西。</p>

<h2>系统哑音键：钝器</h2>

<p>Mac的静音键（F10或扬声器斜杠键）会静音 <strong>系统音频输出</strong>.所有应用同时静音。取消静音会将系统音量恢复到原位——但由于macOS只有一个音量滑块，没有需要记住或恢复的每个应用音量等级。</p>

<p>如果你一次只用一个应用，这没问题。如果你有六个应用在不同级别上精心平衡，需要全部静音+恢复，那就成了问题。</p>

<h2>更智能的静音：每个应用静音所有</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 有一个“全部静音”键盘快捷键： <strong>控制 + 选项 + M （⌃⌥M）</strong>.</p>

<p>按下去时：</p>
<ol>
  <li>每个应用都单独静音（每个应用的音量状态都会被保存）</li>
  <li>瞬间寂静——就像静音键一样</li>
</ol>

<p>再按一次：</p>
<ol>
  <li>所有应用都未静音</li>
  <li>每个应用都会返回 <strong>没错</strong> 你静音前的音量</li>
  <li>Spotify 恢复到 30%，Zoom 恢复到 100%，Slack 恢复到 15%——完美恢复</li>
</ol>

<img src="/apps/sounddial.png" alt="SoundDial静音所有快捷方式——Control+Option+M，通过音量恢复静音和取消静音所有应用" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>与系统静音键的区别：</p>
<ul>
  <li><strong>系统静音：</strong> 静音输出→取消静音会恢复一个系统音量→每个应用的余额不存在</li>
  <li><strong>SoundDial静音所有：</strong> 每个应用单独静音→取消静音会恢复每个应用的音量，→保持余额</li>
</ul>

<h2>当这很重要时</h2>

<ul>
  <li><strong>屏幕共享：</strong> 你正在共享屏幕，需要在对方听到你的音乐前把Mac静音。⌃⌥M →静默→做你的事 ⌃⌥M 音乐回到了恰到好处的水平→→</li>
  <li><strong>意外中断：</strong> 有人进来，你就得立刻保持安静。只需一个快捷键，不用鼠标，不用摸索菜单栏。</li>
  <li><strong>简短电话：</strong> 你的办公桌电话响了。静音Mac，接听电话，完成后解除静音。一切都会回来。</li>
</ul>

<p>结合 <strong>⌃⌥S</strong> 快捷键（切换SoundDial的弹出），你可以完全用键盘管理所有音频——打开调音器，调整音量，关闭它，静音/取消静音，无需触碰鼠标。</p>

<p>可于 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac 应用商店</a> — 一次性购买14.99欧元，无订阅，macOS 14.2+。</p>
`,
  },
  "google-meet-volume-too-low-mac": {
    slug: "google-meet-volume-too-low-mac",
    title: "Google Meet Mac 的音量太低了吗？如何解决",
    description:
      "即使开到最大音量，Google Meet上的声音也几乎听不见。以下是为什么Meet通过Chrome运行，这对音频意味着什么，以及如何提升音频效果。",
    date: "2026-05-01",
    readTime: "5 min read",
    content: `
<p>Google Meet 没有原生的Mac应用——它运行在浏览器中。这意味着 Meet 的音频是 Chrome（或 Safari）音频流的一部分，任何音量问题都与浏览器对音频的处理方式有关。让我们理清这纠结。</p>

<h2>1. 检查Meet自家的音频设置</h2>

<p>在Meet通话中，点击三点菜单（⋮）→设置→音频。确保选对扬声器设备。Meet有时会默认使用意想不到的设备，尤其是你最近连接或断开音频硬件时。</p>

<h2>2. 检查浏览器标签页的音量</h2>

<p>在Chrome浏览器中：右键点击Meet标签→确保“静音网站”未被选中。静音的网站无论设置如何都不会有声音。</p>

<p>在Safari中：点击标签页上的扬声器图标，确认它没有被静音。</p>

<h2>3. 检查系统输出</h2>

<p>系统设置→声音→输出。确认选对设备且音量已达最大。如果你用耳机，也要检查耳机安全。</p>

<h2>4. Chrome 音频问题</h2>

<p>Google Meet作为Chrome标签页运行，Chrome的音频输出可能比独立应用低。Chrome 通过自己的渲染器处理音频，而渲染器也有自己的音量上限。如果Chrome整体音频很低，Meet也算低——即使macOS音量调到100%。</p>

<p>没有内置方法将Chrome的音频提升到最大之外。macOS把Chrome当作一个音量等级的应用，音量最高是100%。</p>

<h2>5. 蓝牙编解码器问题</h2>

<p>如果你用的是AirPods或蓝牙耳机，Google Meet激活麦克风会强制蓝牙编码从AAC切换到SCO。这会显著降低音质和音量。</p>

<p><strong>修复方法：</strong> 在 Meet 的音频设置中，选择你Mac内置的麦克风作为输入设备，同时保持蓝牙耳机作为输出。这样可以防止编解码器切换，保持高质量音频。</p>

<h2>6. 将Google Meet（Chrome）提升至100%</h2>

<p>如果检查完所有设备后 Meet 依然太安静，你需要把 Chrome 的音频放大到超出 macOS 允许的范围。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Chrome 给它自己的音量滑块，最高可调节到 <strong>200%</strong>.由于 Google Meet 运行在 Chrome 内部，提升 Chrome 会提升 Meet。将滑块拖到150%或180%，通话音频会实时放大。</p>

<img src="/apps/sounddial.png" alt="SoundDial macOS 上将 Google Meet（Chrome）音量提升到 100% 以上" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>如果你在Safari里用Meet，这个功能也适用于Safari。SoundDial独立控制每个浏览器——提升Meet的Safari功能，同时保持Chrome的正常音量用于其他功能。</p>

<p>而且通过自动低身功能，Meet 通话开始时（麦克风激活时）背景音乐会自动降低，通话结束时恢复。</p>

<p>可于 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac 应用商店</a> —— 苹果评测，一次性购买14.99欧元，无订阅，14.2+macOS。</p>
`,
  },
  "mac-alert-volume-separate-from-media": {
    slug: "mac-alert-volume-separate-from-media",
    title: "如何将Mac警报音量与媒体音量分开设置",
    description:
      "macOS有隐藏的警报音量滑块，但它只覆盖系统声音。以下是如何真正区分通知和媒体音量Mac。",
    date: "2026-05-02",
    readTime: "5 min read",
    content: `
<p>你的音乐水平完美。然后响起macOS警觉的声音——“放克”或“叮当”音效——相比你的音乐声音格外响亮。或者相反：你的提醒听不到，是因为系统音量很低，背景音乐很安静。</p>

<p>你需要两个独立的音量控制：一个用于媒体（音乐、通话、视频），另一个用于提醒和通知。macOS部分支持此功能，但完整解决方案需要第三方工具。</p>

<h2>macOS内置警报音量</h2>

<p>macOS确实有一个独立的警报卷。前往 <strong>系统设置→音效</strong> 并寻找 <strong>“警报音量”</strong> 滑行者。它独立控制macOS系统声音的音量——错误提示音、垃圾桶清空、截屏快门——独立于主系统音量。</p>

<p>你还可以选择使用哪种提醒音效，以及是通过你选择的输出设备播放音效，还是通过内置扬声器播放。</p>

<h3>警报音量控制什么</h3>
<ul>
  <li>macOS系统警报声（Funk、Tink、Bottle 等）</li>
  <li>Finder 声音（垃圾，文件副本完成）</li>
  <li>一些内置应用音效</li>
</ul>

<h3>它无法控制的</h3>
<ul>
  <li>Slack通知音</li>
  <li>Discord通知音</li>
  <li>Teams/Zoom 音效</li>
  <li>邮件通知声</li>
  <li>任何第三方应用的通知声都会响起</li>
  <li>浏览器通知音</li>
</ul>

<p>第三方应用通过自己的音频引擎播放通知音——它们被视为普通应用音频，而非系统提醒。警报音量滑块对它们没有影响。这意味着那些发出最烦人通知声的应用（Slack、Discord、Teams）是macOS的警报音量无法影响的。</p>

<h2>真正的解决办法是：通知应用的每个应用体积</h2>

<p>要真正区分通知音量和媒体音量，你需要每个应用的音量控制。将Slack设置为15%，Discord设置为20%，邮件设置为10%——同时保持Spotify为50%，浏览器为60%。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 每个应用都有自己的音量滑块。你可以将通知密集的应用设置到一个细微但不突兀的音量，同时保持媒体应用的听觉音量舒适。</p>

<img src="/apps/sounddial.png" alt="SoundDial通知应用音量和媒体应用音量分开macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>示例设置</h3>
<p><strong>媒体应用：</strong></p>
<ul>
  <li>Spotify：50%</li>
  <li>Safari/Chrome：60%</li>
  <li>QuickTime/VLC：70%</li>
</ul>

<p><strong>通知应用：</strong></p>
<ul>
  <li>松弛：15%</li>
  <li>Discord：20%</li>
  <li>邮件：10%</li>
  <li>日历：25%</li>
</ul>

<p><strong>沟通应用：</strong></p>
<ul>
  <li>Zoom/Teams：100%</li>
  <li>FaceTime：100%</li>
</ul>

<p>将此保存为个人资料，一键应用即可。通知和媒体音量之间的分离，macOS本身不支持——不到一分钟就能完成。</p>

<p>可于 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac 应用商店</a> —— 苹果评测，一次性购买14.99欧元，无订阅，14.2+macOS。</p>
`,
  },
  "facetime-volume-too-low-mac": {
    slug: "facetime-volume-too-low-mac",
    title: "Mac 的 FaceTime 通话音量太低了吗？如何解决",
    description:
      "即使音量开到最大，Mac上FaceTime音频几乎听不见。这里有所有修复方法——从音效设置到将FaceTime提升到超过100%。",
    date: "2026-05-04",
    readTime: "5 min read",
    content: `
<p>用iPhone进行FaceTime通话没问题。但在你的Mac里，对方听起来像是在三个房间外低声耳语。音量已调至最大。你已经检查了所有能想到的。还是太安静了。</p>

<p>Mac FaceTime 音量低是一个常见问题，原因可能有很多。让我们逐一逐一介绍。</p>

<h2>1. 检查输出设备</h2>

<p>进入系统设置→声音→输出。确保选对设备。如果你最近连接或断开了耳机、显示器或蓝牙设备，macOS可能自动切换到一个意想不到的输出——比如带有几乎无法正常使用的内置扬声器的显示器。</p>

<h2>2. 检查FaceTime的音频设置</h2>

<p>在 FaceTime 通话中，点击菜单栏，选择 FaceTime → 视频，→在音频输出中选择正确的输出设备。FaceTime有时会使用与系统默认不同的输出设备，尤其是在切换设备之后。</p>

<h2>3. 禁用AirPods自动切换功能</h2>

<p>如果你的AirPods与多台苹果设备配对，它们可能会在通话中途自动切换Mac。在蓝牙→检查系统设置→点击AirPods旁的“i”→“连接到此Mac”→设置为“最后一次连接此Mac”而不是“自动”，以防止通话中切换。</p>

<h2>4. 蓝牙编解码器问题</h2>

<p>使用AirPods或蓝牙耳机配合FaceTime会触发AAC到SCO的编码切换（因为FaceTime会用你的麦克风）。SCO降低了音质和音量。使用独立麦克风（内置Mac麦克风或USB）来保持AirPods处于高质量AAC模式。</p>

<h2>5. 耳机安全限制音量</h2>

<p>系统设置→声音→耳机安全。如果“降低音量”开启，macOS会限制你的耳机音量。禁用它或提高阈值。</p>

<h2>6. 重置核心音频</h2>

<p>打开终端并运行：</p>
<p><code>Sudo Killall CoreAudid</code></p>
<p>这可以重启音频守护进程，并修复卡住的低音量状态。音频重启后重新加入FaceTime通话。</p>

<h2>7. 将FaceTime音量提升至100%</h2>

<p>如果所有设置都正确，但FaceTime依然太小——也许对方麦克风不够——你需要放大到macOS的极限。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 让你可以把 FaceTime 的音量提升到 <strong>200%</strong>.打开菜单栏面板，找到FaceTime，把滑块拖过100%。通话音频会实时放大，不会影响其他应用。</p>

<img src="/apps/sounddial.png" alt="SoundDial在macOS上将FaceTime通话音量提升到100%以上" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial也有帮助：如果FaceTime的铃声或通知声在专注时间太响，可以把FaceTime调到20%，或者静音，同时保持音乐播放。一键静音，一键解除静音。</p>

<p>可于 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac 应用商店</a> —— 苹果审核，沙盒式，一次性购买，无订阅。</p>
`,
  },
  "mac-volume-keyboard-shortcuts": {
    slug: "mac-volume-keyboard-shortcuts",
    title: "Mac 你可能不知道的音量键盘快捷键",
    description:
      "除了基本的音量键——细致控制、静音特定应用以及每个应用的音量快捷键。每个Mac音频键盘技巧都有详细说明。",
    date: "2026-05-06",
    readTime: "5 min read",
    content: `
<p>每个Mac用户都知道音量的上下/静音键。按下它们，系统音量会变化。但macOS隐藏了几项大多数人都没发现的键盘控制技巧——还有第三方快捷键，让音量管理速度大幅加快。</p>

<h2>每个人都应该知道的内置快捷方式</h2>

<h3>细粒度体积调节</h3>
<p>停 <strong>选项+转移</strong> 然后按音量键。每次按压时，音量调整为 <strong>四分之一</strong> 普通步骤，给你64级，而不是16级。这对于深夜找到合适的耳机音量，或者当两个正常步数之间的跳跃过大时，非常重要。</p>

<h3>静音音量调节</h3>
<p>停 <strong>换班</strong> 然后按音量上下键。音量会变化，但听到的反馈“啪”声会被抑制。当你在电话会议或演示时调节音量，不想让流行音乐传给所有人时，这很有用。</p>

<h3>跳转到声音设置</h3>
<p>停 <strong>选项</strong> 然后按任意音量键直接打开系统设置→音效。比手动浏览系统设置要快。</p>

<h3>快速输出设备开关</h3>
<p>停 <strong>选项</strong> 点击菜单栏中的声音图标，查看所有可用的输出（和输入）设备列表。点击一个即可立即切换。不需要打开系统设置。</p>

<h2>macOS快捷键做不到的事</h2>

<p>上述所有快捷键都控制 <strong>系统体积</strong> ——一个对每个应用均有影响的滑块。以下操作没有内置快捷键：</p>

<ul>
  <li>调整特定应用的音量</li>
  <li>静音一个应用而不静音所有应用</li>
  <li>切换保存卷配置</li>
  <li>切换音量混合面板</li>
</ul>

<p>macOS 根本没有每个应用的音量控制，所以没有快捷方式。</p>

<h2>按应用设置的音量键盘快捷键，SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 增加了两个全局键盘快捷键，扩展了macOS的功能：</p>

<h3>切换音量调音器：控制键 + 选项 + S</h3>
<p>媒体 <strong>⌃⌥S</strong> 从任何地方，SoundDial的弹出覆盖会在菜单栏打开，显示每个应用并配有自己的音量滑块。调整你需要的，再按一次快捷键（或点击离开）关闭它。你永远不会离开当前的应用。</p>

<h3>静音所有应用：控制 + 选项 + M</h3>
<p>媒体 <strong>⌃⌥M</strong> 可以瞬间静音所有应用的音频。再按一次可以解除静音，恢复每个应用的音量。这是一个“瞬间静音”按钮，比按下静音键快——而且与系统静音键不同，解除静音时会恢复每个应用的音量。</p>

<img src="/apps/sounddial.png" alt="SoundDial 键盘快捷键 — Control+Option+S 切换，Control+Option+M 静音所有" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>键盘驱动的工作流程</h2>

<p>启用SoundDial快捷键后，你可以在不触碰鼠标的情况下管理所有音频：</p>

<ol>
  <li><strong>⌃⌥S</strong> ——打开搅拌机</li>
  <li>用方向键或鼠标调整单个滑块</li>
  <li><strong>⌃⌥S</strong> ——关掉搅拌机</li>
  <li><strong>⌃⌥M</strong> ——有人一进房间，立刻静默</li>
  <li><strong>⌃⌥M</strong> ——他们离开时解除静音，一切恢复正常</li>
</ol>

<p>结合 <strong>体积配置文件</strong> （保存配置只需一键切换），你可以管理十几个应用的音频，而无需单独打开任何一个。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在Mac应用商店SoundDial</a> — 一次性购买14.99欧元，无订阅，macOS 14.2+。</p>
`,
  },
  "background-music-app-not-working-mac": {
    slug: "background-music-app-not-working-mac",
    title: "背景音乐应用在macOS上无法工作？试试这些替代方案",
    description:
      "免费的背景音乐应用在macOS更新后停止工作了？以下是为什么它会坏、该怎么办，以及2026年真正有效的最佳替代方案。",
    date: "2026-06-08",
    readTime: "5 min read",
    content: `
<p>Background Music 是一款受欢迎的免费开源Mac应用，提供基础的每个应用音量控制。它的工作原理是安装一个虚拟音频设备，并将所有音频都通过它路由。问题是：它坏了。经常。</p>

<p>几乎每次macOS更新——Ventura、Sonoma、Sequoia、Tahoe——用户都报告相同的问题：虚拟音频设备安装失败，音频出现故障和爆裂声，某些应用无法被检测到，或者应用启动时崩溃。如果你搜索了“背景音乐不工作”，你并不孤单。</p>

<h2>为什么背景音乐总是断裂</h2>

<p>背景音乐通过安装 <strong>虚拟音频设备驱动程序</strong> （Core Audio HAL插件）。macOS 将所有系统音频通过该虚拟设备路由，背景音乐拦截该音频以应用各应用的音量控制。</p>

<p>问题在于苹果几乎在每个主要macOS发布时都会改变音频驱动的工作方式。安全限制加紧，API 变更，驱动加载机制不断演变。由于背景音乐是一个志愿者维护的开源项目，配合苹果变更的更新并不总是及时。</p>

<p>macOS更新后常见的问题：</p>
<ul>
  <li><strong>虚拟音频设备无法安装</strong> —— macOS的新安全政策阻止了司机</li>
  <li><strong>音频爆裂或卡顿</strong> ——虚拟设备引入了当前macOS版本处理不佳的延迟</li>
  <li><strong>应用程序未显示</strong> — 对macOS报告运行进程的变更破坏应用检测</li>
  <li><strong>完全没有声音</strong> ——虚拟设备被设置为默认输出，但没有通过音频</li>
  <li><strong>发射时坠毁</strong> ——与当前macOS版本不兼容</li>
</ul>

<h2>如何修复背景音乐</h2>

<p>如果背景音乐当前坏了：</p>

<ol>
  <li><strong>请关注最新动态：</strong> 请访问GitHub的背景音乐发布页面，看看你的macOS版本是否有新版本发布。</li>
  <li><strong>重新安装：</strong> 完全卸载背景音乐（包括虚拟音频设备），重启，然后安装最新版本。</li>
  <li><strong>重置音频：</strong> 如果你的音频卡在虚拟设备上，进入系统设置→声音→输出，选择你的真实扬声器/耳机。那就跑吧 <code>Sudo Killall CoreAudid</code> 在Terminal。</li>
  <li><strong>检查权限：</strong> 系统设置→隐私与安全——确保背景音乐拥有必要的权限。</li>
</ol>

<h2>不使用虚拟音频设备的替代方案</h2>

<p>背景音乐的根本问题在于架构问题：虚拟音频设备脆弱，更新macOS会损坏。现代替代品使用苹果的 <strong>核心音频分流 API</strong> （macOS 14 引入），允许应用程序在不安装系统级驱动程序的情况下截获每进程音频。</p>

<h3>SoundDial</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 使用现代音频分流接口 API——没有虚拟音频设备，没有系统驱动程序，也没有内核扩展。它通过苹果支持的API直接接入每个应用的音频流，这意味着更新时不会出macOS。</p>

<img src="/apps/sounddial.png" alt="SoundDial — 一种不安装虚拟音频设备的背景音乐替代方案" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>你能胜过背景音乐：</p>
<ul>
  <li><strong>没有虚拟音频设备</strong> —— 支持苹果原生音频栈，更新时不会出故障</li>
  <li><strong>音量提升到200%</strong> —— 背景音乐上限为100%</li>
  <li><strong>体积剖面</strong> — 保存和切换配置（背景音乐无配置）</li>
  <li><strong>自动蹲伏</strong> — 通话时自动降低音量（背景音乐仅有自动暂停功能，不支持低头）</li>
  <li><strong>卷存储器</strong> —— 在重启之间记住每个应用的容量</li>
  <li><strong>键盘快捷键</strong> ——切换调音台或静音所有应用</li>
  <li><strong>积极开发</strong> —— 定期更新以获取最新 macOS</li>
</ul>

<p>权衡是：SoundDial是一次性付费购买，而背景音乐是免费的。但一个真正能用的应用比一个每六个月坏一次的免费应用更有价值。而且因为SoundDial在 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac 应用商店</a>它已经过苹果审核，进行了安全沙盒处理，安装干净——不从GitHub下载，不编译源代码，不授予系统扩展权限。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在Mac应用商店SoundDial</a> — 一次性购买14.99欧元，无订阅，macOS 14.2+。</p>
`,
  },
  "soundsource-alternative-mac": {
    slug: "soundsource-alternative-mac",
    title: "SoundSource 替代方案：更轻、更便宜的每个应用音量控制Mac",
    description:
      "SoundSource 强大但昂贵且复杂。如果你只需要每个应用单独控制音量，不需要音频工程工具包，这里有个替代方案。",
    date: "2026-06-06",
    readTime: "6 min read",
    content: `
<p>Rogue Amoeba 的 SoundSource 是 Mac 应用中使用时间最长的单应用音量控制应用。它强大、做工精良，并配备了按应用均衡、音频效果链和按应用输出路由等功能。它价格是39美元，需要系统音频驱动（ACE），而且功能比大多数人用不到的还多。</p>

<p>如果你只是想调低Spotify而不影响Zoom——而且你不需要完整的音频工程工具包——SoundSource可能比你需要的更强大。以下是需要考虑的因素。</p>

<h2>SoundSource擅长的地方</h2>

<p>功劳归属——SoundSource是一款精致专业的应用：</p>
<ul>
  <li><strong>每个应用的音量控制</strong> 带有细粒滑块</li>
  <li><strong>每个应用的均衡器</strong> 内置均衡器和 Audio Unit 插件支持</li>
  <li><strong>每个应用的输出路由</strong> —— 向不同的发言者发送不同的应用</li>
  <li><strong>音量提升</strong> 超过100%</li>
  <li><strong>系统范围音频效果</strong></li>
</ul>

<p>如果你是需要每个应用均衡和效果链的播客、直播者或音频专业人士，SoundSource 就是为你量身定制的。</p>

<h2>SoundSource对普通用户来说不足之处</h2>

<h3>价格</h3>
<p>39美元对于一个音量控制应用来说价格不菲。如果你不使用均衡器、音频效果或按应用路由，你就在为那些永远不会触碰的功能付费。</p>

<h3>系统驱动</h3>
<p>SoundSource 安装了一个名为 ACE（音频采集引擎）的自定义系统音频驱动。这种方法运行良好，但增加了复杂性——每个macOS版本都需要更新，有时会与其他音频软件冲突，而且你在系统音频层面运行的是第三方代码。一些企业环境中的IT部门会阻挡内核扩展和系统级音频驱动程序。</p>

<h3>没有音量配置文件</h3>
<p>尽管功能丰富，SoundSource 没有个人资料系统。你不能保存“会议”配置和“专注”配置，然后在它们之间切换。每次情况变化，你都会手动调整每个滑块。</p>

<h3>没有自动蹲伏</h3>
<p>SoundSource 不会在你加入通话时自动降低背景音。没有呼叫检测，没有自动音量调节，也没有针对每个应用混音器最常见的使用场景的免提工作流程。</p>

<h2>SoundDial：专注于大多数人真正需要的东西</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 采取不同的方法：完美完成核心工作，跳过大多数人不需要的功能，加入SoundSource缺少的工作流程功能。</p>

<table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;">
<thead>
<tr style="border-bottom:2px solid rgba(255,255,255,0.2);">
  <th style="text-align:left;padding:10px 12px;color:rgba(255,255,255,0.6);">特色</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundDial</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">音源</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">每个应用的体积</td>
  <td style="text-align:center;padding:10px 12px;">是（0-200%）</td>
  <td style="text-align:center;padding:10px 12px;">是的</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">每个应用静音</td>
  <td style="text-align:center;padding:10px 12px;">是的</td>
  <td style="text-align:center;padding:10px 12px;">是的</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">体积剖面</td>
  <td style="text-align:center;padding:10px 12px;">是的</td>
  <td style="text-align:center;padding:10px 12px;">不</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">自动蹲伏</td>
  <td style="text-align:center;padding:10px 12px;">是的</td>
  <td style="text-align:center;padding:10px 12px;">不</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">卷存储器</td>
  <td style="text-align:center;padding:10px 12px;">是的</td>
  <td style="text-align:center;padding:10px 12px;">是的</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">每个应用的均衡器</td>
  <td style="text-align:center;padding:10px 12px;">不</td>
  <td style="text-align:center;padding:10px 12px;">是的</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">每个应用的输出路由</td>
  <td style="text-align:center;padding:10px 12px;">不</td>
  <td style="text-align:center;padding:10px 12px;">是的</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">系统音频驱动</td>
  <td style="text-align:center;padding:10px 12px;">不需要</td>
  <td style="text-align:center;padding:10px 12px;">必修（ACE）</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">键盘快捷键</td>
  <td style="text-align:center;padding:10px 12px;">是的</td>
  <td style="text-align:center;padding:10px 12px;">是的</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">价格</td>
  <td style="text-align:center;padding:10px 12px;">一次性14.99欧元</td>
  <td style="text-align:center;padding:10px 12px;">39美元</td>
</tr>
</tbody>
</table>

<img src="/apps/sounddial.png" alt="SoundDial — 一款更轻盈、聚焦的SoundSource替代品，支持音量曲线和自动低头功能" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>你应该选择哪一个？</h2>

<ul>
  <li><strong>选择SoundSource，满足以下条件：</strong> 你需要每个应用的均衡器、音频效果链，或者每个应用的输出路由。你是播客主持人、主播或音频专业人士。你不介意价格和系统驱动。</li>
  <li><strong>选择 <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 如果：</strong> 你需要每个应用的音量控制，包括配置文件和自动蹲下。你需要更轻量且不安装系统驱动的设备。你想减少开支。你是远程工作者、游戏玩家、学生，或者任何只想关闭Slack而不影响Zoom的人。</li>
</ul>

<p>SoundDial可以在 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac 应用商店</a> ——这意味着它经过了苹果审核，进行了沙盒安全处理，安装和卸载也像任何App Store应用一样干净利落。不允许从随机网站下载DMG，不安装系统驱动，也不允许授予内核扩展权限。一次性购买，无需订阅。</p>
`,
  },
  "mac-volume-too-loud-at-lowest-setting": {
    slug: "mac-volume-too-loud-at-lowest-setting",
    title: "Mac最低档时音量太大了吗？如何更安静地走",
    description:
      "即使在最低音量下，Mac也会太吵——尤其是在深夜戴耳机时。以下是如何获得更细微的音量控制，并低于最低音量的方法。",
    date: "2026-05-08",
    readTime: "5 min read",
    content: `
<p>现在是午夜。你戴着耳机。你按着音量调低键，直到音量调到最低档——一小节。还是太吵了。下一个按键静音。没有中间地带。你需要3%的音量，但macOS从~6%跳到0%。</p>

<p>这是耳机和灵敏音箱常见的抱怨。macOS的16个音量步调过于粗糙——最低可听的步仍然比你在安静的深夜聆听时需要的音量更大。</p>

<h2>内置修复：四分之一级音量调节</h2>

<p>大多数Mac用户不知道：你可以获得 <strong>4倍更细微的音量控制</strong> 使用键盘修饰键。</p>

<p>停 <strong>选项+转移</strong> 然后按音量上下键。每次按压音量调整正常步长的四分之一——总共64步，而非16步。</p>

<p>这样你就能在正常档度之间找到音量水平。“一格”和“静音”之间的空隙现在多了三个额外的关卡。深夜用耳机听音乐时，这通常足以让你找到一个舒适的音量。</p>

<h2>为什么有些内容在相同音量下比其他内容更响</h2>

<p>你可能会注意到，即使系统音量相同，有些应用的声音也比其他应用大。Spotify在一个小节听起来比YouTube视频在一个小节听起来还要响。这是因为每个应用输出的音频音量不同，系统音量会按比例调整音量。</p>

<p>一首在0 dB（最大）下母带制作的歌曲和录制在-15 dB的播客，在同一系统音量下听起来会有很大不同。这首歌比你听起来大了15分贝——这大约是你耳朵听起来大的三倍。</p>

<h2>真正的解决办法是：每个应用的音量，以便细致控制</h2>

<p>四分之一步快捷键有帮助，但它仍然会对所有应用进行平等调整。如果Spotify最低音太吵，但Zoom通话声音太小，那你就卡住了。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 每个应用都提供细致控制的音量滑块——每个滑块以1%的增量从0%到200%移动。你可以同时把Spotify设置为5%，Zoom设置为40%。控制层次远远优于macOS的16个系统步骤。</p>

<img src="/apps/sounddial.png" alt="SoundDial每个应用的细粒度音量控制，macOS 上有 1% 的增量" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>深夜耳机使用：</p>
<ul>
  <li>将系统音量调到中等水平（40-50%）。</li>
  <li>用SoundDial把每个应用都调到你想要的水平</li>
  <li>Spotify 8% — 几乎听不见的背景音乐</li>
  <li>浏览器15%——足够安静，适合深夜视频播放</li>
  <li>通知静音——没有意外的响亮提示音</li>
</ul>

<p>把这个保存为“夜间”配置文件，下班后戴耳机时一键应用。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在Mac应用商店SoundDial</a> — 一次性购买14.99欧元，无订阅，macOS 14.2+。</p>
`,
  },
  "one-airpod-louder-than-the-other-fix": {
    slug: "one-airpod-louder-than-the-other-fix",
    title: "一个AirPods比另一个更吵？所有修复解答",
    description:
      "左边的AirPods比右边安静（或者反过来）。这里列出了所有原因——从耳垢到macOS平衡设置——以及如何解决。",
    date: "2026-05-10",
    readTime: "5 min read",
    content: `
<p>一个AirPods听起来没问题。另一台明显更安静。音乐感觉偏离了中心。声音听起来像是从一侧传来的。这是AirPods最常见的抱怨之一，通常有简单的解决办法。</p>

<h2>1. 清洁你的AirPods</h2>

<p>最常见的原因是物理上的：耳垢或杂物部分挡住了一只AirPods的扬声器网格。即使是薄薄的一层堆积物，也能显著减少那一侧的体积。</p>

<p><strong>如何清洁：</strong></p>
<ul>
  <li>用干燥的软毛刷（干净的牙刷）轻轻刷洗扬声器网格</li>
  <li>关于AirPods Pro硅胶耳塞：拆下耳塞，清洁耳塞和下面的扬声器网</li>
  <li>外墙用干燥无绒布</li>
  <li><strong>不要使用：</strong> 水、酒精、压缩空气或尖锐物体——这些都可能损坏扬声器网或将杂物推得更深</li>
</ul>

<p>清洁后，测试两个AirPods。在大多数情况下，这能立即解决问题。</p>

<h2>2. 检查macOS的音频平衡</h2>

<p>macOS有一个左右音频平衡滑块，可能偏离中心：</p>

<ol>
  <li>前往 <strong>系统设置→无障碍→音频</strong></li>
  <li>找到 <strong>平衡</strong> 滑块</li>
  <li>确保它正好位于左和右之间的中心</li>
</ol>

<p>如果滑块被移到一边，那就是问题所在。把它居中，两边的体积应该相等。</p>

<p>也要检查一下 <strong>系统设置→音效</strong> —— 部分macOS版本在输出设备设置中也带有平衡滑块。</p>

<h2>3. 重置你的AirPods</h2>

<p>如果清洁和平衡都没用，试着把AirPods恢复出厂状态：</p>

<ol>
  <li>把两个AirPods都放进充电盒</li>
  <li>盖上盖子，等待30秒</li>
  <li>打开盖子</li>
  <li>按住机箱背面的设置按钮15秒，直到状态灯闪烁琥珀色，然后变成白色</li>
  <li>重新将AirPods与你的Mac配对（系统设置→蓝牙）</li>
</ol>

<p>这会重置存储的音频校准，并修复软件端音量不平衡。</p>

<h2>4. 检查单声道音频</h2>

<p>如果启用macOS的单声道音频辅助功能，立体声音频会混合到单一通道，并平均传送到两个AirPods。虽然这不应该导致音量差异，但可能会改变某些内容的声音，使其中一侧听起来“不同”。</p>

<p>检查：系统设置→ 可访问性→音频→确保“单声道音频”关闭（除非你需要）。</p>

<h2>5. 蓝牙干扰</h2>

<p>AirPods通过蓝牙与Mac通信，每个AirPods也相互通信。如果有严重的蓝牙干扰（WiFi路由器、USB 3.0集线器、其他蓝牙设备），一只AirPods可能会接收到较弱的信号。</p>

<p><strong>修复方法：</strong> 靠近你的Mac。断开你不用的蓝牙设备。如果你靠近USB 3.0集线器，试着把它移远——USB 3.0已知会干扰2.4 GHz蓝牙。</p>

<h2>6. 硬件问题</h2>

<p>如果以上方法都无效，可能有某个AirPods存在硬件缺陷——扬声器驱动损坏或网格损坏。这种情况是随着大量使用而逐渐发生的。</p>

<p><strong>修复方法：</strong> 请联系苹果客服或访问苹果商店。如果你的AirPods还在保修期内或AppleCare+，苹果会更换受影响的AirPods。AirPods也有单独更换产品，可享受非保修期。</p>

<h2>通过每个应用的音量控制，更好的音频平衡</h2>

<p>虽然按应用控制音量不能解决AirPods之间的硬件不平衡，但它解决了一个相关问题：当某些应用在你的AirPods中音量比其他应用更大时，可能会夸大这种不平衡的感知。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 你可以把每个应用的音量设置成一致的音量。当Spotify开到40%，Zoom开到100%，Safari开到60%时，你就能清楚每个应用会遇到什么——不会有突然的音量骤降，让一个AirPods因为通知突然爆到100%而变得更响。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在Mac应用商店SoundDial</a> — 一次性购买14.99欧元，无订阅，macOS 14.2+。</p>
`,
  },
  "netflix-streaming-audio-too-quiet-mac": {
    slug: "netflix-streaming-audio-too-quiet-mac",
    title: "Netflix 和流媒体音频在Mac上太安静了？如何解决",
    description:
      "对话低声细语，随后一声爆炸震动了整个房间。以下是如何修复Mac流媒体音频音量——并将安静内容提升至100%以上的方法。",
    date: "2026-05-17",
    readTime: "5 min read",
    content: `
<p>你正在看Netflix上的电影。两个角色在对话——你几乎听不到他们的声音。你调大音量。一场动作戏开始。爆炸声震耳欲聋。你慌忙按音量键。这是关于流媒体音频最常见的抱怨，而在Mac内置扬声器上表现更糟。</p>

<p>问题不在你的Mac。这就是电影和电视剧的母处理方式——而且macOS没有给你任何修复工具。</p>

<h2>为什么流媒体音频音量波动很大</h2>

<p>电影和电视剧都用高音母带处理 <strong>动态范围</strong> ——最轻微和最响亮的声音之间的区别。在有强劲音箱和低音炮的影院里，这声音简直令人难以置信。耳语亲密，爆炸感强烈。</p>

<p>在MacBook的2英寸扬声器上，这种动态范围反而成了负担。安静部分低于微小扬声器能清晰重现的范围，而响亮部分则达到扬声器的物理极限。你最终会不断调整音量——对话时音量调高，动作时调低。</p>

<h2>解决方法1：在流媒体应用中启用“减少大声噪音”</h2>

<p>一些流媒体服务支持音量归一化功能：</p>
<ul>
  <li><strong>Netflix：</strong> 播放时，点击扬声器图标→查看浏览器和原生应用中是否有“减少噪音”选项</li>
  <li><strong>Apple TV+：</strong> 设置→无障碍设置→“减少噪音”</li>
  <li><strong>迪士尼+：</strong> 目前没有类似的设置可用</li>
  <li><strong>亚马逊Prime Video：</strong> “对话提升”功能（如果该标题有的话）</li>
</ul>

<p>这些功能压缩了动态范围——使安静的声音变响，响亮的声音更安静。结果是音量更均匀，在小音箱和低音量听力下表现更好。</p>

<h2>解决办法2：检查你Mac的声音增强器</h2>

<p>在部分Mac型号上，macOS对内置扬声器进行了音频处理。查看系统设置→声音，看看你的输出设备是否有增强选项。在 MacBook Pro 14 英寸和 16 英寸型号中，扬声器系统配备了空间音频处理，可以影响感知音量。</p>

<h2>解决办法3：使用有线耳机</h2>

<p>耳机完全绕过了扬声器尺寸的问题。即使是便宜的有线耳机，也能清晰地重现安静的对话，因为驱动器就在耳膜旁边。小音箱上存在的问题动态范围，在耳机中反而成为优势。</p>

<h2>修复4：将流媒体音频提升至100%以上</h2>

<p>如果内容太小——即使开启归一化和最大音量——你需要超出macOS的放大功能。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 允许你提升任何应用 <strong>200%</strong>.如果Safari或Netflix应用太安静，可以把滑块拉过100%。音频在到达扬声器之前就被放大，实际上是该应用的最大音量翻倍。</p>

<img src="/apps/sounddial.png" alt="SoundDial在Mac上将Netflix音频提升到180%，以实现更清晰的对话和流媒体音频" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>这在以下情况下尤为有用：</p>
<ul>
  <li>看一部安静的外国电影，台词柔和</li>
  <li>流媒体那些在低级别制作的老内容</li>
  <li>在嘈杂环境中使用 MacBook 音箱</li>
  <li>有的流媒体服务比其他的安静得多</li>
</ul>

<p>而且因为SoundDial独立控制每个应用，把Netflix提升到150%并不会让你的Spotify或Slack更吵。每个应用都保持在自己的层级。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在Mac应用商店SoundDial</a> — 一次性购买14.99欧元，无订阅，macOS 14.2+。</p>
`,
  },
  "mac-audio-setup-remote-work": {
    slug: "mac-audio-setup-remote-work",
    title: "Mac 远程办公音频设置：完整指南",
    description:
      "通话、音乐、通知和专注时间——全部集中在Mac上。以下是如何设置音频，确保没有任何东西抢夺你的注意力。",
    date: "2026-05-12",
    readTime: "8 min read",
    content: `
<p>Mac远程工作意味着你的电脑同时是你的办公电话、无线电、通知中心和深度工作站。这四种根本不同的音频模式，macOS对它们都一视同仁：一个音量滑块，音量一致，没有优先级。</p>

<p>本指南将详细介绍如何设置远程工作的 Mac 音频，使通话清晰，音乐存在但不干扰，通知细微，专注时间也安静。</p>

<h2>远程工作的四种音频模式</h2>

<h3>1. 会议模式</h3>
<p>你正在参加Zoom或Teams会议。呼吁必须非常清晰。音乐应该是无声或几乎听不见的。松弛不应该在你耳朵里发出响声。</p>

<h3>2. 对焦模式</h3>
<p>你在做深刻的工作。低音背景音乐有助于你集中注意力。通知应该几乎察觉不到——足够明显，让你能察觉到紧急消息，又足够安静，不会打断流程。</p>

<h3>3. 协作模式</h3>
<p>你可以随时收到消息，监控Slack，也许还能看培训视频。所有症状都可以处于中等水平。通知音量正常。</p>

<h3>4. 中断模式</h3>
<p>音乐开到最大音量。YouTube开到最大音量。通知可以等一等。</p>

<h2>硬件配置</h2>

<h3>麦克风问题</h3>
<p>如果你用AirPods打电话，建议用单独的麦克风。当AirPods同时作为麦克风和扬声器使用时，macOS切换到低质量的SCO蓝牙编码器，这会降低音质和音量。用Mac自带的麦克风（或USB麦克风），同时把AirPods当输出，完全避免了这个问题。</p>

<p>为了最佳通话质量：用USB麦克风或带内置麦克风的耳机。Blue Yeti、Elgato Wave，甚至一个基础的USB耳机，在同事眼中听起来都会比AirPods的麦克风好得多。</p>

<h3>输出设备</h3>
<p>许多远程工作者使用两个输出设备：</p>
<ul>
  <li><strong>耳机</strong> 通话方面——隐私，无回声，音频清晰</li>
  <li><strong>演讲者</strong> 非通话时间的音乐——充满房间，长时间播放更舒适</li>
</ul>

<p>在菜单栏中用Option点击声音图标，快速切换设备。或者用SoundDial自带的设备切换器，把输出设备放在音量控制旁边。</p>

<h2>软件设置</h2>

<h3>通知管理</h3>
<p>进入系统设置→通知。对于每个应用，决定是否需要声音通知：</p>
<ul>
  <li><strong>保持声音开启：</strong> Slack（如果你很有响应性）、日历（会议）、消息</li>
  <li><strong>关闭声音：</strong> 邮件（查看你的日程表）、新闻、社交应用</li>
</ul>

<p>这减少了发出惊喜声音的应用数量，但并不能控制音量——只能开关音量。</p>

<h3>对焦模式</h3>
<p>在系统设置中至少创建两个对焦模式→对焦：</p>
<ul>
  <li><strong>“会面”</strong> —— 静音所有通知，除了日历应用</li>
  <li><strong>“专注工作”</strong> ——允许Slack私信和你的经理通知，其他所有内容静音</li>
</ul>

<p>对焦模式负责通知抑制。对于音频音量控制，你需要更多设备。</p>

<h2>缺失的部分：每个应用的音量控制</h2>

<p>对焦模式控制 <em>即</em> 通知会传达，但不会 <em>多吵啊</em> 任何东西都是。你仍然有一个音量滑块。如果你想让Slack用15%，Spotify用35%，Zoom用100%——macOS做不到。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 通过给每个应用单独的音量滑块来填补这个空白。按照你想要的方式设置远程工作音频：</p>

<img src="/apps/sounddial.png" alt="SoundDial远程工作音频设置——Zoom、Spotify 和 Slack 在macOS上提供不同音量级别" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>为每种模式保存配置文件</h3>

<p><strong>会议简介：</strong></p>
<ul>
  <li>Zoom/Teams：100%</li>
  <li>Spotify：静音</li>
  <li>松弛：静音</li>
  <li>浏览器：静音</li>
</ul>

<p><strong>重点工作简介：</strong></p>
<ul>
  <li>Spotify：30%</li>
  <li>松弛：10%</li>
  <li>Zoom：80%（以防有人打电话）</li>
  <li>浏览器：40%</li>
</ul>

<p><strong>协作简介：</strong></p>
<ul>
  <li>所有电量都在50-70%</li>
  <li>松弛：30%</li>
</ul>

<p>只需一键即可切换配置文件。通话开始时，SoundDial的自动闪避会自动降低除通话应用外的所有功能。结束后，你的个人资料等级会恢复。</p>

<h2>日常工作流程</h2>

<ol>
  <li>开始工作→应用“Focus Work”配置文件</li>
  <li>加入会议时→会自动闪避（或者应用“会议”配置文件）</li>
  <li>会议结束时，→卷恢复到专注工作级别</li>
  <li>午休→应用“休息”档案，开大音乐</li>
  <li>下午深度工作→回到专注工作</li>
</ol>

<p>总手工工作量：每天点击两到三次个人资料。其他一切都是自动的。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在Mac应用商店SoundDial</a> — 一次性购买14.99欧元，无订阅，macOS 14.2+。</p>
`,
  },
  "stop-browser-tabs-auto-playing-audio-mac": {
    slug: "stop-browser-tabs-auto-playing-audio-mac",
    title: "如何阻止浏览器标签自动播放音频Mac",
    description:
      "一个后台标签页突然开始播放音频。广告、视频、新闻网站——以下是如何静音macOS的流氓标签页和控制浏览器音频的方法。",
    date: "2026-05-14",
    readTime: "5 min read",
    content: `
<p>你开了二十个标签页。你现在在其中一个工作。突然——音频从某处开始播放。一个视频广告。自动播放的新闻片段。一个你一小时前打开的标签页，决定现在是开始制造噪音的时候。你急忙找是哪个标签页，一个个点击。</p>

<p>浏览器标签页自动播放音频是任何电脑上最烦人的体验之一，Mac更糟的是macOS无法静音某个应用（更别说特定标签页），除非全部静音。</p>

<h2>在Safari中关闭自动播放</h2>

<p>Safari拥有所有浏览器中最好的内置自动播放控制：</p>

<ol>
  <li>打开 Safari →设置（⌘，） → 网站标签页</li>
  <li>在左侧边栏选择“自动播放”</li>
  <li>把底部默认设置为“永不自动播放”或“停止有声音的媒体播放”</li>
</ol>

<p>“停止带声音媒体”是最好的选择——它能屏蔽带音频自动播放的视频，但允许静音自动播放（许多网站用于装饰性背景视频）。“永不自动播放”会屏蔽所有内容。</p>

<p>如果你想在YouTube或Netflix等特定网站启用自动播放，也可以在同一面板里配置每个网站的设置。</p>

<h2>在Chrome中关闭自动播放</h2>

<p>Chrome 的自动播放控制则不那么细致：</p>

<ol>
  <li>前往 <code>chrome://settings/content/sound</code></li>
  <li>切换“站点可以播放声音”以确定默认行为</li>
  <li>将特定站点添加到“静音”列表，永久使其静音</li>
</ol>

<p>Chrome 还允许你静音单个标签页：右键点击“静音网站”→标签页。这会将该网站的所有音频静音，直到你解除静音。</p>

<h2>快速静音标签页</h2>

<p>Safari 和 Chrome 在正在输出音频的标签页上都会显示扬声器图标。在 Safari 中，点击标签页中的扬声器图标来静音。在 Chrome 中，右键点击标签，选择“静音网站”。</p>

<p>这对一个标签页一个标签有效，但如果有多个嘈杂标签，你就得一个一个点击。</p>

<h2>更广泛的问题：浏览器音频与其他设备之间的差异</h2>

<p>即使关闭自动播放和静音标签页，你仍然可能想控制浏览器相对于其他应用的音量。也许你在Zoom通话时正在看YouTube教程——你希望教程开30%，Zoom开到100%。或者你在浏览器标签页里播放背景音乐，结果和你的Spotify竞争。</p>

<p>macOS把整个浏览器当作一个卷的应用。你不能让某个标签页在系统层面比另一个更安静。但你 <em>可以</em> 让整个浏览器比其他应用更安静。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 给浏览器赋予独立音量滑块，独立于其他应用。将Safari调到30%，同时保持Zoom为100%。完全静音Chrome，同时保持Spotify播放。一键。</p>

<img src="/apps/sounddial.png" alt="SoundDial独立于macOS上的其他应用控制浏览器音量" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>这是处理意外自动播放标签页最快的方法：不用去找哪个标签发出声音，而是在菜单栏点击SoundDial并静音浏览器。其他一切都在继续播放。当你找到并关闭了那个有问题的标签页后，取消静音浏览器，它的音量会恢复到原来的位置。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在Mac应用商店SoundDial</a> — 一次性购买14.99欧元，无订阅，macOS 14.2+。</p>
`,
  },
  "discord-volume-too-loud-mac": {
    slug: "discord-volume-too-loud-mac",
    title: "Discord 音量在Mac上太吵（或太小）了吗？如何解决",
    description:
      "Discord在你的游戏中轰鸣，或者声音太小听不到队友的声音。以下是如何独立控制Discord音量的方法，不macOS其他内容。",
    date: "2026-05-21",
    readTime: "5 min read",
    content: `
<p>Discord 在 Mac 上有两个音量问题。要么声音太大——通知声会盖过你的游戏和音乐——要么太小——你听不到队友的声音。问题是macOS不允许你独立调节Discord的音量。它和其他系统一样锁定在同一个系统滑块上。</p>

<h2>Discord内置音量控制</h2>

<p>Discord 有几个内部音量设置。在考虑外部解决方案之前，请确保这些方案已配置：</p>

<h3>输出体积</h3>
<p>进入Discord→设置（齿轮图标）→语音和视频。“输出音量”滑块可以控制Discord听起来的音量。如果Discord太安静，确保音量调到100%。如果声音太大，就在这里调低。</p>

<p><strong>限制：</strong> 这控制了Discord内部的混音，但不会影响Discord的音量 <em>与其他应用相比</em>.如果你的游戏音量是80%，Discord也是80%，调整Discord内部滑块会改变平衡——但你仍然被锁定在一个系统音量。</p>

<h3>每用户体积</h3>
<p>右键点击语音频道中的任意用户→“用户音量”。你可以把单个用户从0%调整到200%。这在某人声音较大或较小时有用，但并不能解决Discord与其他应用之间的整体平衡。</p>

<h3>通知卷</h3>
<p>Discord →设置→通知。你可以单独禁用特定的通知音效（消息、聋哑、静音、加入/离开）。这样可以减少干扰噪音的数量，但不能降低音量——只需开关它们即可。</p>

<h2>真正的问题是：系统层面的音量平衡</h2>

<p>Discord 的内部控制会调整 Discord 自身的混音。但真正的问题是Discord和你Mac上的其他一切之间的平衡：你的游戏、你的音乐、你的浏览器。macOS给你一个滑块，适用于所有角色。</p>

<p>要调整Discord的音量相对于你的游戏，你需要每个应用的音量控制——这是macOS本地没有的功能。</p>

<h2>用SoundDial解决</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 在菜单栏中给Discord单独设置音量滑块，独立于其他应用。将Discord设置为你想要的音量——清晰语音100%，细微背景40%，或者完全静音——但不动游戏、音乐或其他任何东西。</p>

<img src="/apps/sounddial.png" alt="SoundDial独立控制Discord音量，不依赖游戏和音乐macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>常见配置</h3>

<p><strong>用Discord玩游戏：</strong></p>
<ul>
  <li>Discord：100%（始终清楚听到队友的声音）</li>
  <li>游戏：40%（沉浸感强但不过于强烈）</li>
  <li>Spotify：15%（细腻背景音乐）</li>
</ul>

<p><strong>语音聊天聊天：</strong></p>
<ul>
  <li>Discord：80%</li>
  <li>浏览器/YouTube：60%</li>
  <li>其他一切：正常</li>
</ul>

<p><strong>专注工作（背景Discord）：</strong></p>
<ul>
  <li>Discord：静音或10%</li>
  <li>Spotify：50%</li>
  <li>松弛：15%</li>
</ul>

<p>将每个保存为 <strong>体积曲线</strong> SoundDial，一键切换。每次换活动都不用重新调整六个滑块。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在Mac应用商店SoundDial</a> — 一次性购买14.99欧元，无订阅，macOS 14.2+。</p>
`,
  },
  "switch-audio-output-quickly-mac": {
    slug: "switch-audio-output-quickly-mac",
    title: "如何在Mac中快速切换音频输出（无需翻找设置）",
    description:
      "在 Mac 上切换扬声器、耳机和监听音箱需要点击太多次。这里有一些更快的方法可以瞬间更换你的音频输出设备。",
    date: "2026-05-19",
    readTime: "5 min read",
    content: `
<p>你拔掉耳机，想让音频传到扬声器。或者你连接了AirPods，macOS选错了设备。或者你走进会议室，需要切换到会议发言人。每次都是：系统设置→声音→输出→滚动→点击。点击太多了，本该只需一次。</p>

<p>以下是所有在Mac上更快切换音频输出的方法——从内置快捷方式到完全消除点击声的菜单栏工具。</p>

<h2>方法1：按Option点击音量图标</h2>

<p>这是最快的内置方法，大多数人并不知道。</p>

<p>停 <strong>选项 （⌥）</strong> 然后点击菜单栏里的音量/声音图标。你看到的不是正常的音量滑块，而是所有可用输出设备的列表。点击你想要的那个。完成了。</p>

<p>如果你在菜单栏里看不到声音图标，请启用它：在控制中心→系统设置→声音→选择“始终显示在菜单栏”。</p>

<p><strong>限制：</strong> 这只显示输出设备——你不能调整每个应用的音量，也无法从菜单中查看当前播放的内容。</p>

<h2>方法二：控制中心</h2>

<p>点击菜单栏中的控制中心图标（双开关图标），→点击声音部分→点击当前设备名称查看所有可用输出。</p>

<p><strong>限制：</strong> 而是三下，而不是一下。比点击音量图标的Option稍微慢一点。</p>

<h2>方法三：系统设置快捷方式</h2>

<p>你可以把声音固定到顶层的系统设置侧边栏，但仍然需要进入输出标签并选择设备。不快。</p>

<h2>方法4：键盘快捷键（带设置）</h2>

<p>macOS没有内置的键盘快捷键来切换音频设备。不过，你也可以用自动工具或快捷方式创建一个：</p>
<ol>
  <li>打开快捷指令应用</li>
  <li>创建一个新的快捷方式来运行一个 shell 脚本： <code>SwitchAudioSource -s “设备名称”</code> （需要 <code>Switchaudio-OSX</code> Homebrew 中的命令行工具）</li>
  <li>给快捷方式分配一个快捷键</li>
</ol>
<p>这可行，但需要自制软件、命令行工具和每个设备手动设置。对大多数用户来说并不实用。</p>

<h2>方法5：SoundDial内置设备切换器</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 菜单栏弹出时就包含输出设备选择器——同时还有每个应用的音量滑块。一键打开SoundDial，一键切换设备。不用翻系统设置。</p>

<img src="/apps/sounddial.png" alt="SoundDial在一个菜单栏面板中实现了音频输出设备切换和每个应用的音量控制" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial内部切换设备的好处是：你可以切换输出 <em>以及</em> 在同一面板中调整每个应用的音量。切换到 AirPods，立即降低 Spotify 音量，同时提升通话音量——且无需离开弹出窗口。</p>

<p>结合 SoundDial <strong>卷存储器</strong> 每个输出设备都能记住自己每个应用的音量水平。切换到扬声器后，你的“扬声器”音量平衡就会生效。换上耳机后，你的“耳机”平衡就会生效。没有手动重新调整。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在Mac应用商店SoundDial</a> — 一次性购买14.99欧元，无订阅，macOS 14.2+。</p>
`,
  },
  "fix-audio-crackling-popping-mac": {
    slug: "fix-audio-crackling-popping-mac",
    title: "修复Mac音频爆裂和爆裂声：完整指南",
    description:
      "您的Mac音频在音乐、通话或视频播放时会发出爆裂、爆裂或卡顿。以下是所有已知的macOS音频故障原因和修复方法。",
    date: "2026-05-16",
    readTime: "8 min read",
    content: `
<p>你在听音乐，听到啪的一声。然后传来一声噼啪声。然后出现断顿，音频会短暂中断，然后又恢复。问题不在于歌曲——而是你的Mac。macOS的音频爆裂现象令人抓狂，原因至少有六种。</p>

<p>本指南涵盖了Mac上所有已知的音频爆裂、爆裂和卡顿原因，从软件修复到你应该了解的硬件问题。</p>

<h2>1. 重启核心音频（快速修复）</h2>

<p>解决突发音频爆裂最有效的方法就是重启macOS的音频守护进程。打开终端并运行：</p>
<p><code>Sudo Killall CoreAudid</code></p>

<p>音频会中断一秒钟然后重新开始。在很多情况下，爆裂声会立刻停止。这是因为 coreaudiod——负责管理macOS所有音频的过程——在睡眠/唤醒周期、蓝牙设备连接或应用崩溃后可能会损坏。</p>

<p>如果这能解决问题，爆裂声是暂时的守护进程问题引起的。如果问题经常出现，请继续阅读，了解永久修复方法。</p>

<h2>2. CPU 过载</h2>

<p>音频爆裂声通常与高CPU使用率有关。当Mac的CPU满载时，它无法足够快地处理音频缓冲区，导致出现类似爆裂和爆裂声的间隙。</p>

<p><strong>检查：</strong> 打开活动监视器（应用程序→工具），看看CPU标签页。如果你看到CPU使用率持续很高（80%+），很可能就是原因。</p>

<p><strong>修复方法：</strong> 关闭不必要的应用，尤其是那些资源密集的浏览器、多标签页、视频编辑器或虚拟机。如果某个进程占用过多CPU，考虑它是否正常运行还是需要重启。</p>

<h2>3. 蓝牙音频问题</h2>

<p>蓝牙是无线耳机和音箱用户最常见的爆裂声来源。有几种原因可能导致这种情况：</p>

<ul>
  <li><strong>干扰：</strong> WiFi、USB 3.0设备和其他蓝牙设备可能会干扰你的音频连接。试着靠近你的Mac或移除干扰源。</li>
  <li><strong>编解码器切换：</strong> 当应用激活你的麦克风时，macOS会从AAC切换到SCO编解码器。这种过渡可能会引起短暂的噼啪声或爆裂声。</li>
  <li><strong>蓝牙拥塞：</strong> 如果同时连接多个蓝牙设备，收音机可能会吃不消。断开你没用的设备。</li>
</ul>

<p><strong>修复方法：</strong> 按住Shift+Option，点击菜单栏中的蓝牙图标，选择“重置蓝牙模块”（如果有的话）。或者，从蓝牙设置中移除设备并重新配对。</p>

<h2>4. 采样率不匹配</h2>

<p>如果你的音频输出设备采样率与播放音频不同，macOS必须实时重新采样。这种重新采样可能会引入伪影——尤其是在缓冲区较小的情况下。</p>

<p><strong>检查：</strong> 打开音频MIDI设置（应用程序→工具），选择输出设备，检查采样率。常见速率为44.1 kHz（CD质量）和48 kHz（视频/流媒体标准）。</p>

<p><strong>修复方法：</strong> 把采样率设置成符合你最常见的使用场景。音乐：44.1 kHz。视频/流媒体：48 kHz。如果你用的是USB音频接口，请查阅其文档以获取最佳采样率和缓冲区大小。</p>

<h2>5. USB音频设备缓冲区问题</h2>

<p>外接USB音频设备（DAC、音频接口、USB耳机）如果缓冲区大小对系统当前负载来说太小，可能会发出爆裂声。</p>

<p><strong>修复方法：</strong> 在音频MIDI设置中，选择你的USB设备，尝试增加缓冲区大小（如果有的话）。在Logic、Ableton或GarageBand等音频应用中，可以在音频偏好中增加I/O缓冲区大小。更大的缓冲区意味着延迟稍高，但音频故障更少。</p>

<h2>6. macOS更新回归</h2>

<p>一些macOS更新会引入音频漏洞。几乎所有主要macOS发布都发生过类似情况——Catalina、Big Sur、Monterey、Ventura、Sonoma、Sequoia和Tahoe在初次发布后都报告过音频爆裂。</p>

<p><strong>修复方法：</strong> 看看苹果是否发布了针对音频问题的点更新（例如 15.0.1、15.1）。你也可以查看苹果开发者论坛和Reddit，看看是否有其他用户遇到同样的问题。如果是已知的macOS漏洞，修复通常会在一两个版本发布内到账。</p>

<h2>7. 内核扩展或音频插件</h2>

<p>第三方音频驱动、虚拟音频设备或音频插件可能会与macOS的原生音频堆栈发生冲突。这在使用内核扩展（kexts）的老音频软件中尤为常见，这些扩展在近期macOS版本中已被弃用。</p>

<p><strong>修复方法：</strong> 检查你是否安装了第三方音频软件：Soundflower、BlackHole、Loopback，或者更早的音频接口驱动。试着暂时禁用或卸载它们，看看爆裂声是否停止。如果有，检查是否与你macOS版本兼容。</p>

<h2>如何管理音频质量SoundDial</h2>

<p>虽然SoundDial不能直接解决硬件或系统层面的爆裂声，但它可以帮助你以减少问题的方式管理音频：</p>

<ul>
  <li><strong>减少竞争音频源：</strong> 用SoundDial静音你没在用的应用。同时音频流减少意味着CPU对音频处理的压力更小。</li>
  <li><strong>音量提升代替系统最大：</strong> 如果你把系统音量调到100%，但应用音量还在变大，音频路径已经达到极限了。用途 <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 每个应用的提升功能，可以将特定应用放大到200%，同时保持系统音量在70-80%之间，保持更舒适的70-80%。这可以减少系统输出电平的失真。</li>
  <li><strong>快速输出设备切换：</strong> 如果爆裂声是针对某个特定的输出设备，SoundDial允许你在菜单栏面板切换设备，而无需在系统设置里翻找。</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在Mac应用商店SoundDial</a> — 一次性购买14.99欧元，无订阅，macOS 14.2+。</p>
`,
  },
  "teams-volume-too-low-mac": {
    slug: "teams-volume-too-low-mac",
    title: "Microsoft Teams 在 Mac 上的音量太低了？所有有效的修复方法",
    description:
      "即使音量开到最大，几乎听不到Teams上的人们说话？这里有各种原因——从Teams设置到蓝牙编解码器——以及如何将通话音频提升超过100%。",
    date: "2026-06-04",
    readTime: "7 min read",
    content: `
<p>你正在参加Teams会议。你的同事正在做报告，但他们的声音听起来像隔着三个房间隔着铁罐传来的。你的Mac量是100%。Teams的训练量已达到100%。你已经找到了所有能找到的资料。还是太安静了。</p>

<p>Microsoft Teams 音量过低是企业环境中最常见的Mac音频投诉之一。原因与Zoom不同，部分修复是针对Teams的。让我们逐一梳理一下。</p>

<h2>1. 检查Teams的音频设置</h2>

<p>点击Teams→设置中的个人资料图标→设备（或新Teams中的音频设备设置→）。</p>
<ul>
  <li>确保正确的 <strong>议长</strong> 选择的是设备——而不是断开的显示器或不活跃的蓝牙设备</li>
  <li>使用“进行测试通话”功能来验证音频在合理音量下正常</li>
  <li>检查“降噪”设置是否设为“高”——强力降噪可能会降低听到的声音音量</li>
</ul>

<h2>2. 新车队与经典车队</h2>

<p>Microsoft用“New Teams”取代了“经典Teams”（基于不同框架构建）。新版本的音频处理方式有所不同。如果你最近迁移了：</p>
<ul>
  <li>音频设备的设置可能没有继承——请重新检查你的扬声器选择</li>
  <li>新版Teams使用WebRTC音频处理，其表现可能与经典版本不同</li>
  <li>如果启用了“音乐模式”（音频设备设置→），试试关闭它——它改变了Teams处理输入音频的方式</li>
</ul>

<h2>3. 蓝牙编解码器切换</h2>

<p>如果你用AirPods或蓝牙耳机，加入Teams通话时macOS必须从高质量的AAC编解码器切换到低质量的SCO编解码器（因为Teams会激活你的麦克风）。SCO显著降低了音质和音量。</p>

<p><strong>修复方法：</strong> 使用Mac内置麦克风或USB麦克风，输出设备保持蓝牙耳机。进入Teams →设置→设备→麦克风，选择“MacBook Pro 麦克风”（或你的USB麦克风）。这样可以防止编解码器切换，保持耳机处于高质量AAC模式。</p>

<h2>4. 检查macOS输出设备和音量</h2>

<p>进入系统设置→声音→输出。确认选对设备且输出音量为最大。还要检查：</p>
<ul>
  <li><strong>耳机安全：</strong> 系统设置→声音→耳机安全。如果“降低音量”开启，说明你的耳机音量被限制了。</li>
  <li><strong>平衡：</strong> 确保左右平衡滑块居中——如果偏斜，一侧会更安静。</li>
</ul>

<h2>5. 重置核心音频</h2>

<p>macOS的音频守护进程有时在休眠、切换设备或Teams更新后会卡在低输出水平。打开终端并运行：</p>
<p><code>Sudo Killall CoreAudid</code></p>
<p>音频在短暂中断后重新开始。重新加入Teams会议，看看音量是否有所改善。</p>

<h2>6. 提升球队音量至100%</h2>

<p>如果所有设置都开到最大，Teams依然太安静——比如参与者麦克风坏了，或者会议音频本身很低——你需要放大到超出正常macOS允许的范围。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 可以让你把任何应用的音量提升到 <strong>200%</strong>，包括Microsoft Teams。将Teams的滑块拖到150%或180%，音频会实时放大。只有Teams会更吵——你的音乐、浏览器和其他应用保持当前音量。</p>

<img src="/apps/sounddial.png" alt="SoundDial Microsoft Teams 通话量提升到 100% 以上macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial也解决了反过来的问题：如果 Teams 在专注时间内声音太大，可以把 Teams 的音量调到 15% 或完全静音，同时保持音乐播放。一键静音，一键解除静音。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在Mac应用商店SoundDial</a> — 一次性购买14.99欧元，无订阅，macOS 14.2+。</p>
`,
  },
  "how-to-control-per-app-volume-on-mac": {
    slug: "how-to-control-per-app-volume-on-mac",
    title: "如何在Mac上控制每个应用的音量",
    description:
      "macOS会给你一个音量滑块。以下是如何为每个应用获得独立音量控制——以及为什么它比你想象的更重要。",
    date: "2026-05-20",
    readTime: "7 min read",
    content: `
<p>你正在视频通话。Slack一直响。背景里播放着音乐。你伸手去按音量键——一切变得安静下来。电话、音乐、通知。macOS只有一个音量滑块，而且可以同时控制所有功能。</p>

<p>自2006年Vista以来，Windows就有按应用设置音量混合器。二十年后，macOS依然没有。如果你想在不影响Zoom通话的情况下降低Spotify的使用权，苹果没有内置的解决方案。</p>

<p>本指南解释了什么是每个应用的音量控制，为什么macOS没有，以及如何获得它。</p>

<h2>每个应用的数量到底意味着什么</h2>

<p>每个应用的体积意味着你Mac上的每个应用都有独立的音量滑块。你可以把 Spotify 设为 30%，Zoom 保持在 100%，完全静音 Slack，并将 Safari 设置为 50%——这些都同时进行。改变一个应用的音量对其他应用完全没有影响。</p>

<p>这和系统音量不同，后者是一个按比例调整所有内容的主滑块。如果你的系统音量调到50%，Spotify全音量播放，没有每个应用的调音器，是无法单独调低Spotify音量的。</p>

<h2>为什么macOS不包括这个</h2>

<p>苹果的音频架构（Core Audio）绝对支持在框架层面实现每个应用的音量控制。macOS没有在界面中展示它的原因，是设计理念上的选择：苹果更喜欢更少的控制和更简洁的表面。一个滑块比十二个还简单。</p>

<p>问题在于，一旦有多个音频源争夺你的注意力，“更简单”就不再简单了。一个控制所有功能的音量键在做一件事时非常优雅。当你同时通话时，音乐和通知，这种感觉就是敌对的——这正是大多数人实际使用Mac的方式。</p>

<h2>内置的变通方法（以及它们为什么不起作用）</h2>

<h3>1. 应用内音量控制</h3>
<p>有些应用有自己的音量滑块——Spotify、VLC、QuickTime。但大多数人并不喜欢。Slack 没有。Chrome 标签页则不行。系统音效则不行。即使应用有滑块，你也得打开那个应用，找到滑块，调整一下，然后切回去做你之前的操作。本该是一点的，却要五次点击。</p>

<h3>2. 音频MIDI设置</h3>
<p>macOS工具文件夹里包含了音频MIDI设置。它可以配置音频设备和创建聚合设备，但没有每个应用的音量控制。它是一个设备配置工具，不是混音器。</p>

<h3>3. 多输出设备</h3>
<p>理论上你可以把不同的应用路由到不同的输出设备（耳机和扬声器），然后分别控制这些设备。但这需要额外的硬件，每个应用手动路由，而且实际上并没有给你独立的音量——只是每个设备独立的开关。</p>

<h2>按应用计算音量混合器的工作原理</h2>

<p>一个专门的按应用音量调音器放在菜单栏，显示所有正在产生音频的应用。每个应用都有自己的滑块。你上下拖动，只有该应用的音量会改变。系统音量保持不变。</p>

<p>在底层，这通过使用macOS <strong>核心音频分流 API</strong> （macOS 14引入）或更早的虚拟音频设备技术，用于独立截取每个应用的音频流，并在音频进入扬声器前调整其幅度。</p>

<p>区分好调音台和劣质调音台的关键特征：</p>

<ul>
  <li><strong>实时应用检测。</strong> 当一个新应用开始播放音频时，它应该会自动出现在混音器中。没有手动设置。</li>
  <li><strong>每个应用静音。</strong> 只需点击即可静音特定应用，无需触碰滑块位置。</li>
  <li><strong>音量提升。</strong> 有些应用（说的是你，安静的播客玩家）最高设定太低。一个好的混音器能让你加速超过100%。</li>
  <li><strong>个人资料。</strong> 不同场景有不同的音量设置——“专注”时除了音乐外所有声音都静音，“会议”时Zoom调到100%，其他声音调到20%，“游戏”时游戏音频调高。</li>
  <li><strong>自动蹲伏。</strong> 开始通话时自动调低音乐，通话结束时再调回。仅这一点就值得整个应用。</li>
  <li><strong>菜单栏原生。</strong> 它应该在菜单栏，而不是扩展坞窗口。你抬头，调整一下，然后继续工作。没有切换应用。</li>
</ul>

<h2>谁需要这个</h2>

<p>任何同时做多个音频项目的人。大多数人都是这样，但尤其是：</p>

<ul>
  <li><strong>远程工作者</strong> —— 通话 + 音乐 + 通知是最常见的碰撞</li>
  <li><strong>主播和播客</strong> ——对观众听到的内容与你听到的声音的精确控制</li>
  <li><strong>音乐人与制作人</strong> —— 需要将DAW输出与参考轨道和通信工具隔离开来</li>
  <li><strong>玩家</strong> ——游戏音频、Discord和音乐之间，是一场持续的平衡艺术</li>
  <li><strong>有人有通知疲劳吗</strong> ——静音 Slack，其他都保留</li>
</ul>

<h2>SoundDial</h2>

<p>我建造了 <strong>SoundDial</strong> 因为我想要的Mac音量调音台根本不存在。它会显示在菜单栏，显示所有发出声音的应用，并为每个应用分配自己的滑块。按应用静音、音量提升、个人资料，以及自动低音功能，通话开始时会降低音乐音量。一次性购买，macOS 14+，无需订阅。</p>

<p>音量调频器macOS应该内置的。</p>
`,
  },
  "mute-slack-notifications-mac-without-muting-everything": {
    slug: "mute-slack-notifications-mac-without-muting-everything",
    title: "如何在不静音其他内容的情况下静音Mac",
    description:
      "Slack的通知不断打断你的专注，但你不想把音乐或电话静音。这里有如何在macOS上静音仅用Slack。",
    date: "2026-05-24",
    readTime: "5 min read",
    content: `
<p>你正专注于专注工作。Spotify 正在播放完美的专注歌单。然后—— <em>敲刷</em> —— 松弛的提示音。又一次。又一次。三十秒内完成三个频道、两条私信和一个线程通知。你想静音Slack，但保留你的音乐。macOS说：要么静音所有内容，要么什么都不静音。</p>

<p>Slack 的通知音是 Mac 上远程办公者最常抱怨的音频之一。它们的设计目的是吸引你的注意力，而这正是你需要集中注意力时的问题所在。</p>

<h2>选项一：在Slack中静音通知</h2>

<p>Slack 有一个“暂停通知”功能：</p>
<ol>
  <li>点击Slack侧边栏的头像</li>
  <li>点击“暂停通知”</li>
  <li>选择时长（30分钟、1小时、2小时等）。</li>
</ol>

<p>这会在选定的持续时间内抑制通知徽章和声音。你也可以通过右键点击“静音频道”来静音→单个通道。</p>

<p><strong>限制：</strong> 这是每个频道的全有或全无。你不能让Slack出现 <em>更安静</em> ——只有完全静音或全开。如果你忘了解除暂停，专注会话结束后你就会错过消息。如果你打开应用，它也不会抑制 Slack 的应用内声音。</p>

<h2>选项二：关闭macOS通知中的Slack声音</h2>

<p>去系统设置→通知，→ Slack。关闭“播放通知音效”。</p>

<p><strong>限制：</strong> 这会永久移除所有Slack通知音（直到你重新开启通知）。而且它只影响macOS层通知——如果Slack通过自己的音频引擎播放声音，通知设置可能无法捕捉所有声音。</p>

<h2>选项三：使用对焦模式</h2>

<p>在系统设置→对焦中创建一个“对焦”或“工作”对焦模式。把Slack加入“消音”名单。当你激活焦点模式时，Slack 通知会被抑制。</p>

<p><strong>限制：</strong> 对焦模式会在视觉和听觉上抑制通知，但无法提供细致的音量控制。你不能说“Slack 通知音量为 10%”——要么完全允许，要么完全静音。</p>

<h2>选项4：每个应用控制音量（真正的解决办法）</h2>

<p>你真正想要的很简单：把Slack的音量调到10-15%，同时保持其他音量正常。如果你在注意听，松弛的提示音是可以听到的，但它们不会打断你的节奏。音乐音量保持最大。电话音量保持最大。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Slack赋予其独立的音量滑块。你可以根据自己的音量调，或者一键完全静音。当你准备再次关注Slack时，取消静音，音量会恢复到原来的水平。</p>

<img src="/apps/sounddial.png" alt="SoundDial Slack静音，Spotify 正常音量播放 macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>理想的 Slack 工作流程</h3>
<ul>
  <li><strong>专注时间：</strong> 松弛在10%或静音。Spotify的40%。不打扰。</li>
  <li><strong>可用时间：</strong> 松弛度为40%。通知很明显，但不会让人惊讶。</li>
  <li><strong>会议时间：</strong> Slack静音。放大100%。自动蹲下则完成剩下的部分。</li>
</ul>

<p>把这些都保存为 <strong>体积曲线</strong> 在SoundDial中，只需一键切换即可。更好的是，使用自动蹲伏功能——通话开始时，SoundDial会自动降级所有设备（包括Slack），通话结束时恢复通话。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在Mac应用商店SoundDial</a> — 一次性购买14.99欧元，无订阅，macOS 14.2+。</p>
`,
  },
  "volume-profiles-for-mac": {
    slug: "volume-profiles-for-mac",
    title: "如何在Mac上为不同情况设置音量配置文件",
    description:
      "会议、专注工作、游戏和放松时可选择不同的音量设置——只需一键切换。以下是macOS上体积配置的工作原理。",
    date: "2026-06-02",
    readTime: "5 min read",
    content: `
<p>早上9点你在参加Zoom会议——你想把Zoom调到100%，Spotify静音，Slack静音。上午10点通话结束——你想让Spotify占40%，Slack占15%，Zoom无关紧要。中午你在玩游戏——游戏开到60%，Discord开到100%，其他都静音。到了晚上6点，你会在看YouTube——浏览器开到80%，其他一切都安静。</p>

<p>每种情况都有不同的理想体积配置。每次情况变化，你都得手动调整五六个应用。或者你也可以把每个设置保存成配置文件，一键切换。</p>

<h2>什么是音量配置文件？</h2>

<p>音量配置文件是每个应用音量和静音状态的保存快照。你可以按自己的方式配置应用——Spotify 30%，Zoom 100%，Slack 静音——然后把它保存成一个命名的个人资料，比如“工作”或“会议”。之后，你应用配置文件，所有应用都会立即跳转到保存的音量级别。</p>

<p>可以把它想象成音频的显示预设：就像你可能有“桌面设置”和“演示模式”的显示配置，音量配置文件可以让你在不同音频配置之间切换，而无需手动调整每个应用。</p>

<h2>macOS没有音量配置文件</h2>

<p>macOS有专注模式（请勿打扰、工作、个人管理等），可以控制哪些通知能通过。但对焦模式不控制音量。它们可以完全抑制通知音，但不能把Spotify调到30%，Zoom调到100%。没有内置方法可以保存和恢复每个应用的音量配置。</p>

<h2>用SoundDial设置个人资料</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 内置配置文件系统。设置方法如下：</p>

<h3>创建个人资料</h3>
<ol>
  <li>从菜单栏打开SoundDial</li>
  <li>根据具体情况调整每个应用的音量</li>
  <li>点击个人资料部分的“+”按钮</li>
  <li>给它起个名字（例如“会议”）并选择一个图标</li>
  <li>完成——你当前的卷配置已被保存</li>
</ol>

<h3>切换配置文件</h3>
<p>你保存的资料会以按钮的形式出现在SoundDial的弹出窗口中。点击一个，每个应用都会立刻切换到该配置文件中保存的卷。一键就能替代五六次手动调整。</p>

<img src="/apps/sounddial.png" alt="SoundDial音量配置文件——一键切换会议、专注和放松模式macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>示例配置文件</h3>

<p><strong>会议</strong></p>
<ul>
  <li>Zoom / 团队：100%</li>
  <li>Spotify：静音</li>
  <li>松弛：静音</li>
  <li>浏览器：静音</li>
</ul>

<p><strong>聚焦工作</strong></p>
<ul>
  <li>Spotify：35%</li>
  <li>松弛：10%</li>
  <li>邮件：静音</li>
  <li>浏览器：50%</li>
</ul>

<p><strong>游戏</strong></p>
<ul>
  <li>游戏：60%</li>
  <li>Discord：100%</li>
  <li>Spotify：20%</li>
  <li>其他所有内容：静音</li>
</ul>

<p><strong>放轻松</strong></p>
<ul>
  <li>Spotify：70%</li>
  <li>浏览器：60%</li>
  <li>通知：20%</li>
</ul>

<h3>更新配置文件</h3>
<p>如果你喜欢的音量随时间变化，只需调整滑块并更新配置文件即可。下次应用时，它会使用新的设置。</p>

<h2>轮廓 + 自动蹲下 = 全自动</h2>

<p>将配置文件与SoundDial的自动低头功能结合起来，你几乎不需要触碰音量。早上应用你的“Focus Work”配置文件。当有电话进来时，自动蹲下会降低除呼叫应用以外的所有内容。通话结束后，所有内容都会回到你的个人资料等级。一天结束时，只需一键切换到“Chill”。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在Mac应用商店SoundDial</a> — 一次性购买14.99欧元，无订阅，macOS 14.2+。</p>
`,
  },
  "zoom-call-volume-too-low-mac": {
    slug: "zoom-call-volume-too-low-mac",
    title: "Mac的Zoom通话音量太低？如何提升它",
    description:
      "即使在最大音量下，Zoom上你几乎听不到人说话。这里有所有修复方法——从Zoom设置到用每个应用的音量调频器将通话音频提升到100%。",
    date: "2026-05-26",
    readTime: "6 min read",
    content: `
<p>你正在参加Zoom通话。对方在说话，但声音几乎听不见。你的Mac体积已达到最大。Zoom 的扬声器音量调到最大。你正凑近屏幕，努力听清。这不应该这么难。</p>

<p>Zoom通话量低非常常见，原因有很多。让我们一起梳理每一项修复方法，从简单的设置检查到将Zoom音频提升到超出正常限制。</p>

<h2>1. 检查Zoom的音频输出设置</h2>

<p>打开Zoom的设置→音频→。在“议长”栏目下，确保：</p>
<ul>
  <li>选择正确的输出设备（不是非激活的显示器或断开的设备）</li>
  <li>扬声器音量滑块调到最大</li>
  <li>点击“测试扬声器”以确认你能清晰听到测试音</li>
</ul>

<p>如果测试音调也很小，问题出在Zoom和你的扬声器之间——请继续下面的修复方法。如果测试音调正常但实际通话很安静，那对方很可能是麦克风问题。</p>

<h2>2. 检查你Mac的输出设备</h2>

<p>进入系统设置→声音→输出。确保选对设备。如果你最近连接或断开了耳机、显示器或蓝牙设备，macOS可能自动切换到一个意外的输出。</p>

<h2>3. 禁用Zoom的自动音量调节</h2>

<p>Zoom 有一个“自动调整麦克风音量”的设置（音频设置→），在某些配置下也会影响输出电平的感知。试着禁用它再测试一次。</p>

<h2>4. 暂时禁用背景噪声抑制</h2>

<p>Zoom 的噪声抑制功能会积极过滤背景噪音——但在此过程中，有时会降低对方声音的感知响度，尤其是在安静环境中。试试把“抑制背景噪音”设置为“低”或“自动”，而不是“高”。</p>

<h2>5. 检查蓝牙编解码器</h2>

<p>如果你用的是AirPods或蓝牙耳机，加入Zoom通话时macOS必须从高质量的AAC编解码器切换到低质量的SCO编解码器（因为Zoom会用你的麦克风）。SCO会降低音频质量，并使通话音频声音更小、更压缩。</p>

<p><strong>修复方法：</strong> 使用单独的麦克风（内置Mac麦克风或USB麦克风），同时保持AirPods作为输出设备。这样可以防止编解码器切换——AirPods保持AAC模式，音质和音量都更好。</p>

<h2>6. 重置核心音频</h2>

<p>macOS的音频守护进程有时会进入输出电平降低的状态，尤其是在睡眠/唤醒或设备切换后。打开终端并运行：</p>
<p><code>Sudo Killall CoreAudid</code></p>
<p>音频会在短暂中断后重新开始。重新加入Zoom会议，检查音量是否有所改善。</p>

<h2>7. 将Zoom音量提升至100%</h2>

<p>如果你试过以上所有方法，Zoom还是太安静，问题可能是Zoom的音频输出音量不够大，适合你的设置。有些参与者麦克风很安静，而Zoom能放大他们的信号也有限。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 可以让你把任何应用的音量提升到 <strong>200%</strong> ——包括Zoom。如果参与者太安静，可以将Zoom的滑块拖到150%或180%。音频信号被放大到超出Zoom内置最大音量，即使是最轻微的声音也能听见。</p>

<img src="/apps/sounddial.png" alt="SoundDial将Zoom通话音量调高到180%，Mac视频通话时音频更清晰" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>关键优势是：提升Zoom不会影响其他任何东西。你的音乐、通知和其他应用保持在当前的音量。只有Zoom声音更大。</p>

<p>这同样适用于 <strong>Microsoft Teams、Google Meet、FaceTime、Discord、Slack huddles、Webex</strong>，以及任何其他通话应用。如果你能听到，SoundDial可以增强它。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在Mac应用商店SoundDial</a> — 一次性购买14.99欧元，无订阅，macOS 14.2+。</p>
`,
  },
  "lower-spotify-without-lowering-everything-mac": {
    slug: "lower-spotify-without-lowering-everything-mac",
    title: "如何在不降低Spotify其他所有内容的情况下降低Spotify Mac",
    description:
      "你想让Spotify当背景音乐，但用音量键调低音量，通话和其他声音也会更小。解决办法是这样的。",
    date: "2026-05-30",
    readTime: "4 min read",
    content: `
<p>你在工作。Spotify 正在播放背景音乐。声音有点太大——在另一个标签页和播客竞争，或者让人难以集中注意力。你按下音量调低键。Spotify变得更安静了。但其他一切都是——你的Zoom通话、通知音、浏览器音频。一切都安静了许多。那不是你想要的。</p>

<p>这是因为macOS只有一个音量滑块。按下音量键，它会调整 <em>系统体积</em>，这使得每个应用的规模相等。内置控制功能无法直接说“只要降低Spotify音量”。</p>

<h2>变通办法：Spotify 的应用内音量</h2>

<p>Spotify 在应用右下角（或播放器底部）有自己的音量滑块。你可以独立于系统音量来降低这个值。如果你的系统开到80%，而Spotify的滑块是30%，Spotify实际上会以24%播放，而其他设备保持80%。</p>

<p><strong>问题是：</strong> 你得切到Spotify窗口，找到滑块，调整一下，然后切回你之前的操作。而Spotify的滑块非常小，不精确，没有显示百分比——只是一个视觉条。如果你正在开会，需要快速降低音乐音量，在另一个应用里笨拙地调整一个小滑块并不理想。</p>

<h2>真正的解决办法是：按应用控制音量</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 它会在菜单栏里为每个应用放一个音量滑块。要降低Spotify而不影响其他内容：</p>

<ol>
  <li>点击菜单栏中的SoundDial图标</li>
  <li>在列表中找到 Spotify</li>
  <li>把滑块往下拖</li>
</ol>

<p>完成了。Spotify 更安静。Zoom 保持不变。通知保持不变。其他一切都没变。你没有离开当前的应用——菜单栏弹出窗口会直接打开。</p>

<img src="/apps/sounddial.png" alt="SoundDial独立降低Spotify音量，同时保持其他应用开满音量macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>更好的是：把它保存成一个配置文件</h2>

<p>如果你工作时经常想让Spotify调低背景音量，可以把你喜欢的音量设置保存成配置文件。创建一个“工作”个人资料，Spotify 占 25%，Zoom 占 100%，Slack 占 15%。下次你坐下来工作时，只需一键应用配置文件，而不是逐个调整。</p>

<h2>更好的是：通话时自动蹲下</h2>

<p>SoundDial可以自动降低Spotify的音量，因为你加入通话。在设置中启用自动蹲下，选择将背景音频降低多少（默认30%），剩下的部分由SoundDial处理。通话开始时你的音乐会被低头，结束时又会回来。完全没有手动调节。</p>

<p>这是macOS原生支持的工作流程：“Spotify在这个级别，其他一切都在这个级别。”既然苹果还没制造它， <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 填补了空白。</p>

<p>一次性购买 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac 应用商店</a>.没有订阅。macOS 14.2+。</p>
`,
  },
  "macos-tahoe-per-app-volume-control": {
    slug: "macos-tahoe-per-app-volume-control",
    title: "macOS Tahoe有按应用控制音量吗？",
    description:
      "macOS Tahoe（macOS 26）带来了重大更新，但苹果终于加入了音量调频器吗？答案是——以及如何现在就能实现每个应用的音量控制。",
    date: "2026-06-12",
    readTime: "4 min read",
    content: `
<p>每年，Mac用户都希望下一次macOS版本终于能加入音量调音器。每年，他们都会失望。在macOS Tahoe（macOS 26）中，苹果带来了重新设计的界面、新的系统功能以及重大的底层改进。但他们有没有加入每个应用的音量控制？</p>

<h2>简短的回答：没有</h2>

<p>macOS Tahoe没有内置音量调频器。系统设置、控制中心或菜单栏中没有单独的应用音量控制。音频体验与之前的macOS版本相同：一个系统音量滑块，可以同时控制所有内容。</p>

<p>苹果控制中心仍然显示单一音量滑块。系统设置里的声音偏好仍然允许你选择输出设备并调整一个主音量。没有隐藏功能，没有高级选项，也没有新的 API 向用户展示每个应用的音量。</p>

<h2>macOS太浩湖在音效方面有所改进</h2>

<p>虽然每个应用的音量依然缺失，但Tahoe确实带来了一些与音频相关的改进：</p>

<ul>
  <li><strong>蓝牙音频稳定性提升</strong> —— AirPods和第三方耳机的断线和编解码器切换问题更少</li>
  <li><strong>更佳的空间音频处理</strong> —— 增强头部追踪和更准确的空间渲染，支持内容</li>
  <li><strong>核心音频性能</strong> —— 更低的延迟，适用于专业音频应用和音乐制作</li>
</ul>

<p>这些都没有回应根本的要求：“让我在不影响Zoom的情况下降低Spotify的音量。”</p>

<h2>苹果会不会加入音量调频器？</h2>

<p>目前没有迹象表明苹果计划添加此功能。它没有出现在任何macOS测试、WWDC会议或已知路线图中。苹果的音频设计理念依然偏向简洁——所有内容都用一个滑块。</p>

<p>讽刺的是，苹果自家的Core Audio框架完全支持每进程的音频窃听和音量控制。macOS 14（Sonoma）引入的 Audio Tap API，使开发者更容易构建每应用的音频工具。苹果构建了基础设施——只是还没为其构建用户界面。</p>

<h2>如何在 macOS Tahoe 上实现每个应用的音量控制</h2>

<p>既然苹果不愿意开发，第三方应用就填补了这个空白。 <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 是一款原生的macOS菜单栏应用，为每个运行的应用程序提供音量混合器——独立的音量滑块。</p>

<img src="/apps/sounddial.png" alt="SoundDial在macOS Tahoe上提供每个应用的音量控制" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial 完全兼容 macOS Tahoe，并使用苹果现代的 Core Audio Tap API——无需第三方音频驱动或内核扩展。它在macOS的安全模型中运行干净利落，不会干扰其他音频应用。</p>

<p>你能获得什么：</p>
<ul>
  <li><strong>每个应用的音量滑块</strong> ——每个应用的0%到200%</li>
  <li><strong>每个应用静音</strong> —— 一键关闭任何应用</li>
  <li><strong>体积剖面</strong> —— 保存配置并立即切换</li>
  <li><strong>自动蹲伏</strong> —— 通话时背景音频会自动降低</li>
  <li><strong>音量提升</strong> ——将安静应用放大至100%</li>
  <li><strong>卷存储器</strong> —— 记住每个应用在重启之间的音量</li>
  <li><strong>键盘快捷键</strong> —— 从键盘切换调音器或静音</li>
</ul>

<p>一次性购买 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac 应用商店</a>.没有订阅。macOS 14.2+。</p>
`,
  },
  "play-music-speakers-calls-headphones-mac": {
    slug: "play-music-speakers-calls-headphones-mac",
    title: "如何在耳机接电话时用扬声器播放音乐（Mac）",
    description:
      "想让Spotify同时在桌面音箱上播放，同时在AirPods中Zoom播放？macOS并不容易——真正有效的方法如下。",
    date: "2026-05-15",
    readTime: "5 min read",
    content: `
<p>你可以考虑做一个合理的做法：一边通过桌面音箱播放音乐，一边用AirPods进行Zoom通话。音乐充满房间，呼唤在你耳边是私密的。完全说得通。</p>

<p>macOS说不行。当你选择音频输出设备时， <em>每一个</em> 应用就是用它。切换到 AirPods 进行 Zoom 和 Spotify 的 AirPods。切换到Spotify和Zoom的扬声器，也连接到扬声器。所有设备都用一个输出设备。没有例外。</p>

<h2>为什么macOS不能原生实现这一点</h2>

<p>macOS 将所有音频通过一个选定的输出设备路由。你在系统设置→声音→输出中选择“MacBook Pro 扬声器”或“AirPods Pro”，每个应用都会向该设备发送音频。没有内置的每个应用音频路由。</p>

<p>这种设计为了简洁而合理——大多数人希望所有音频都来自同一个地方。但一旦你想在不同输出上使用不同的应用，它就崩溃了。</p>

<h2>聚合设备的变通方法</h2>

<p>macOS的音频MIDI设置（见应用程序→工具）允许你创建一个“聚合设备”，将多个输出合并为一个。然而，聚合设备会发送 <em>同样的音频</em> 对所有合并输出来说——它不允许你选择哪个应用去哪个输出。它设计时是为多扬声器配置设计的，不是针对每个应用的路由。</p>

<h2>多输出设备的变通方法</h2>

<p>类似于聚合设备，你可以在音频MIDI设置中创建“多输出设备”。这会同时向多个输出发送相同的音频。同样，音频在各处都是一样的——你不能这样把Spotify路由到扬声器，Zoom连接到耳机。</p>

<h2>实际有效的方法：按应用设置音频路由应用</h2>

<p>要真正将不同应用路由到不同的输出设备，你需要一个第三方音频路由应用，它能截取每个应用的音频并将其发送到你指定的输出。像 SoundSource（Rogue Amoeba 的）这样的应用支持这个功能——它们允许你为单个应用分配特定的输出设备。</p>

<h2>一种更简单的方法：基于体积的分离</h2>

<p>如果你的主要目标是让通话声音比音乐更清晰（而不是把电话路由到物理上不同的设备），那么每个应用的音量控制能更简单地解决这个问题。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 每个应用都有自己的音量滑块。通话时，您可以：</p>

<ul>
  <li>将Zoom/Teams/FaceTime设置为 <strong>100%</strong></li>
  <li>将Spotify降为 <strong>20%</strong></li>
  <li>把其他所有东西静音</li>
</ul>

<p>你的判断非常明确。音乐是一种微妙的背景。不需要切换设备。</p>

<img src="/apps/sounddial.png" alt="SoundDial显示Zoom开到最大音量，Spotify在通话中调低了音量macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>更棒的是：SoundDial <strong>自动蹲伏</strong> 自动完成。当你加入通话时，它会检测到你的麦克风激活，并将所有后台应用降到你配置的水平（默认30%）。通话结束后，一切恢复正常。不需要手动调节滑块。</p>

<p>对大多数人来说，这解决了实际问题——“我听不到我的电话盖过音乐”——而无需复杂的流程将不同应用路由到不同的物理设备。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在Mac应用商店SoundDial</a> — 一次性购买14.99欧元，无订阅，macOS 14.2+。</p>
`,
  },
  "mac-volume-keeps-changing-by-itself": {
    slug: "mac-volume-keeps-changing-by-itself",
    title: "Mac 音量自己不断变化：如何解决",
    description:
      "你的Mac音量会随机跳升、下降或重置到另一个级别。这里列出了所有已知的原因以及如何阻止它。",
    date: "2026-05-18",
    readTime: "6 min read",
    content: `
<p>你把Mac音量调到一个舒适的水平。你移开视线。当你回来时，情况就不一样了。更大声。更安静。重置到最大。这种情况一直发生，你却搞不明白为什么。</p>

<p>这是Mac音质问题中最令人沮丧的之一，因为它感觉很随机。但几乎从来不是随机的——总有特定的触发点。以下是所有已知的原因及其解决方法。</p>

<h2>1. 蓝牙设备重新连接</h2>

<p>这是最常见的原因。当蓝牙设备（AirPods、扬声器、耳机）连接或断开时，macOS会将音量重置到该设备最后使用的音量。所以如果你的扬声器音量调到30%，AirPods会自动连接，音量可能会跳到80%（AirPods最后一个音量）。</p>

<p><strong>修复方法：</strong> macOS记住每个输出设备的音量水平。每次切换时，把它调到你想要的位置。随着时间推移，每台设备的正确电平会被记住。如果蓝牙设备意外自动连接，进入蓝牙→系统设置，移除你不常用的设备。</p>

<h2>2. HDMI/DisplayPort 输出</h2>

<p>通过HDMI或DisplayPort连接或断开外接显示器可能会导致音量变化。有些显示器也是音频输出设备，macOS会自动切换到它们。当显示器休眠或断开连接时，macOS会切换回扬声器，并可能重置音量。</p>

<p><strong>修复方法：</strong> 进入系统设置→声音→输出，检查macOS是否会自动切换到显示器的扬声器。如果你不想通过显示器输出音频，可以手动选择你偏好的输出设备。有些显示器可以在自己的OSD（屏幕显示）设置中禁用音频输出。</p>

<h2>3. 应用正在调整音量</h2>

<p>有些应用通过程序化调节系统音量。例如，Zoom有一个“自动调整麦克风音量”设置，也会影响输出音量。音乐应用、播客应用以及一些游戏在启动时或特定事件发生时，可能会调整音量。</p>

<p><strong>修复方法：</strong> 检查你最近打开的应用，看看有没有音频相关的设置。在Zoom中：音频→设置→取消勾选“自动调整麦克风音量”。在Spotify里：检查音量归一化是否导致了感知到的音量变化（设置→播放→音量归一化）。</p>

<h2>4. 键盘或触控条的意外按键</h2>

<p>如果你的键盘带有音量键（Mac键盘都有），误按或按键卡住可能会导致音量变化。老款MacBook Pro的触控条特别容易因摩擦而出现意外音量变化。</p>

<p><strong>修复方法：</strong> 检查音量键是否卡住，观察音量指示器，同时不碰任何东西。对于触控条型号，可以在系统设置→键盘→触控条设置中自定义触控条，移除音量滑块或将其移至较难触及的位置。</p>

<h2>5. macOS音频守护进程重置</h2>

<p>睡眠/唤醒周期后，macOS的音频守护进程（coreaudiod）有时会重启并将音量重置到默认或之前缓存的水平。这是一个系统层面的漏洞，在多个macOS版本中都会出现。</p>

<p><strong>修复方法：</strong> 如果从睡眠中醒来后音量持续重置，试着手动重启 coreaudiod：</p>
<p><code>Sudo Killall CoreAudid</code></p>
<p>如果问题在macOS更新中依然存在，可能会在未来的更新中得到解决。与此同时，使用能够记住并恢复每个应用音量水平的工具可以弥补。</p>

<h2>6. 无障碍设置</h2>

<p>一些无障碍功能可能会干扰音频。请查看系统设置→无障碍→音频，看看有没有意外设置。还要检查VoiceOver或Switch Control是否部分启用——这些功能可能导致意想不到的音量表现。</p>

<h2>用SoundDial锁定你的每个应用音量</h2>

<p>即使你无法阻止macOS改变系统音量，你也可以保护你的 <em>每个应用</em> 音量平衡。 <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 独立记住每个应用的音量水平。当应用重启或Mac从睡眠中唤醒时，SoundDial会将每个应用恢复到其保存的音量。</p>

<img src="/apps/sounddial.png" alt="SoundDial记住每个应用在重启时的音量水平macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>这意味着即使系统音量发生变化，你的应用层级余额依然保持稳定：</p>
<ul>
  <li>无论系统音量如何变化，Spotify 都保持在 40%</li>
  <li>即使重新连接蓝牙，Zoom 依然保持 100%</li>
  <li>即使重启后，Slack依然保持静音</li>
</ul>

<p>结合 <strong>体积配置文件</strong>你可以在任何情况下即时恢复你偏好的音量配置——只需一键，就能准确回到你想去的位置，无论你不注意时macOS做了什么。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在Mac应用商店SoundDial</a> — 一次性购买14.99欧元，无订阅，macOS 14.2+。</p>
`,
  },
  "best-volume-mixer-apps-mac-2026": {
    slug: "best-volume-mixer-apps-mac-2026",
    title: "2026年最适合Mac音量调音器应用",
    description:
      "对每个提供单个应用音量控制的Mac应用进行简洁对比。功能、价格，以及哪种产品真正值得使用。",
    date: "2026-06-12",
    readTime: "10 min read",
    content: `
<p>macOS没有内置音量调频器。如果你想控制单个应用的音量——比如调低Spotify而不影响Zoom，静音Slack而不让所有应用静音——你需要第三方应用。</p>

<p>有几种选择。本指南根据功能、定价、兼容性和实际可用性进行了比较。没有联盟链接，没有赞助推荐。</p>

<h2>你应该关注什么</h2>

<p>在比较应用之前，以下是Mac音量混音器中重要的事项：</p>

<ul>
  <li><strong>每个应用的音量滑块</strong> —— 对每个运行中的应用进行独立控制</li>
  <li><strong>音量范围</strong> ——你能降到100%以下和超过100%吗（增压）？</li>
  <li><strong>每个应用静音</strong> ——在不动其音量位置的情况下静音一个应用</li>
  <li><strong>简介</strong> —— 保存并切换音量配置</li>
  <li><strong>自动蹲伏</strong> —— 通话时自动降低音乐</li>
  <li><strong>菜单栏集成</strong> ——无需切换应用即可快速访问</li>
  <li><strong>macOS兼容性</strong> —— 最新版本macOS</li>
  <li><strong>定价模型</strong> ——一次性购买与订阅</li>
</ul>

<h2>选项</h2>

<h3>SoundDial</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 是一款原生的macOS菜单栏应用，专注于做好一件事：每个应用的音量控制。</p>

<ul>
  <li><strong>每个应用的使用量：</strong> 是的，0%到200%</li>
  <li><strong>每个应用静音：</strong> 是的，一键</li>
  <li><strong>提升音量：</strong> 是的，最高可达200%。</li>
  <li><strong>简介：</strong> 是的，用自定义名字和图标</li>
  <li><strong>自动蹲伏：</strong> 是的，有可配置的鸭子水平</li>
  <li><strong>键盘快捷键：</strong> 是的（切换调音器，全部静音）</li>
  <li><strong>输出设备切换：</strong> 是的，来自同一个面板</li>
  <li><strong>卷存储器：</strong> 是的，它会记住每个应用在重启之间的音量</li>
  <li><strong>价格：</strong> 一次性购买14.99欧元（无订阅）——价格不到SoundSource的一半</li>
  <li><strong>要求：</strong> macOS 14.2+</li>
  <li><strong>可访问：</strong> Mac App Store（苹果审核，沙箱，无系统驱动）</li>
</ul>

<p>SoundDial 使用苹果现代的 Core Audio Tap API，实现每进程的干净音频控制。它轻便，完全在菜单栏运行，不需要复杂的设置。售价为14.99欧元，明显比SoundSource（39美元）便宜许多，同时还包含SoundSource所缺乏的功能——音量档和自动低头功能。而且因为它在Mac App Store上线，经过苹果审核，采用沙盒设计，安装干净，无需下载DMG或安装系统音频驱动。</p>

<img src="/apps/sounddial.png" alt="SoundDial每个应用的音量混合器，显示每个应用的音量滑块macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>声源（流浪变形虫）</h3>

<p>SoundSource 是最古老且最成熟的音频工具之一，Mac它功能强大且功能丰富，主要面向高级用户和音频专业人士。</p>

<ul>
  <li><strong>每个应用的使用量：</strong> 是的</li>
  <li><strong>每个应用静音：</strong> 是的</li>
  <li><strong>提升音量：</strong> 是的</li>
  <li><strong>每个应用的均衡器：</strong> 是的（内置和AU插件支持）</li>
  <li><strong>每个应用的输出路由：</strong> 是的（给不同的扬声器发送不同的应用）</li>
  <li><strong>简介：</strong> 无内置配置文件系统</li>
  <li><strong>自动蹲伏：</strong> 不</li>
  <li><strong>价格：</strong> 39美元（一次性，重大升级可能需要额外购买）</li>
  <li><strong>要求：</strong> macOS 12+（安装系统音频驱动）</li>
</ul>

<p>如果你需要每个应用的均衡和音频效果链，SoundSource是最强大的选择。它安装了一个系统级音频驱动（ACE）来截取音频，这使其功能强大，但也更具侵入性。39美元的价格比大多数替代品都高，而且没有自动蹲下或侧面识别系统。</p>

<h3>背景音乐（免费，开源）</h3>

<p>Background Music 是一个免费的开源应用，提供基本的每个应用音量控制。它是个受欢迎的选择，因为它是免费的。</p>

<ul>
  <li><strong>每个应用的使用量：</strong> 是的</li>
  <li><strong>每个应用静音：</strong> 是的</li>
  <li><strong>提升音量：</strong> 没有（只有0-100%）</li>
  <li><strong>自动暂停音乐：</strong> 是的（当另一个应用播放音频时会暂停音乐）</li>
  <li><strong>简介：</strong> 不</li>
  <li><strong>自动蹲伏：</strong> 不（自动暂停和自动蹲下是不同的）</li>
  <li><strong>价格：</strong> 免费</li>
  <li><strong>要求：</strong> macOS 10.13+（安装虚拟音频设备）</li>
</ul>

<p>背景音乐是个不错的免费选项，可以根据应用设置基本音量。不过，对于新版macOS来说，更新并不稳定。用户报告macOS红杉和太浩湖存在问题——音频故障、虚拟音频设备安装失败，或应用无法检测到某些应用。它也无法将音量提升超过100%，没有配置文件，也没有自动低调功能。</p>

<h3>eqMac</h3>

<p>eqMac 主要是一个均衡器应用，同时也包含一些音量混音功能。</p>

<ul>
  <li><strong>每个应用的使用量：</strong> 有限（专注于均衡器，不做混音）</li>
  <li><strong>系统范围的均衡：</strong> 是的，有多种频段选项</li>
  <li><strong>提升音量：</strong> 是的</li>
  <li><strong>简介：</strong> 均衡预设（不是音量配置）</li>
  <li><strong>自动蹲伏：</strong> 不</li>
  <li><strong>价格：</strong> 免费套餐+专业版订阅</li>
  <li><strong>要求：</strong> macOS 10.14+</li>
</ul>

<p>如果你主要需要系统范围的均衡（低音增强、高频调节等），而不是每个应用的音量控制，eqMac是更好的选择。其音量混音功能次于均衡功能。</p>

<h2>快速对比表</h2>

<table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;">
<thead>
<tr style="border-bottom:2px solid rgba(255,255,255,0.2);">
  <th style="text-align:left;padding:10px 12px;color:rgba(255,255,255,0.6);">特色</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundDial</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">音源</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">背景音乐</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">每个应用的体积</td>
  <td style="text-align:center;padding:10px 12px;">是的</td>
  <td style="text-align:center;padding:10px 12px;">是的</td>
  <td style="text-align:center;padding:10px 12px;">是的</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">音量提升（200%）</td>
  <td style="text-align:center;padding:10px 12px;">是的</td>
  <td style="text-align:center;padding:10px 12px;">是的</td>
  <td style="text-align:center;padding:10px 12px;">不</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">体积剖面</td>
  <td style="text-align:center;padding:10px 12px;">是的</td>
  <td style="text-align:center;padding:10px 12px;">不</td>
  <td style="text-align:center;padding:10px 12px;">不</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">自动蹲伏</td>
  <td style="text-align:center;padding:10px 12px;">是的</td>
  <td style="text-align:center;padding:10px 12px;">不</td>
  <td style="text-align:center;padding:10px 12px;">不</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">每个应用的均衡器</td>
  <td style="text-align:center;padding:10px 12px;">不</td>
  <td style="text-align:center;padding:10px 12px;">是的</td>
  <td style="text-align:center;padding:10px 12px;">不</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">每个应用的输出路由</td>
  <td style="text-align:center;padding:10px 12px;">不</td>
  <td style="text-align:center;padding:10px 12px;">是的</td>
  <td style="text-align:center;padding:10px 12px;">不</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">键盘快捷键</td>
  <td style="text-align:center;padding:10px 12px;">是的</td>
  <td style="text-align:center;padding:10px 12px;">是的</td>
  <td style="text-align:center;padding:10px 12px;">不</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">需要系统驱动程序</td>
  <td style="text-align:center;padding:10px 12px;">不</td>
  <td style="text-align:center;padding:10px 12px;">是的</td>
  <td style="text-align:center;padding:10px 12px;">是的</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">价格</td>
  <td style="text-align:center;padding:10px 12px;">一次性</td>
  <td style="text-align:center;padding:10px 12px;">39美元</td>
  <td style="text-align:center;padding:10px 12px;">免费</td>
</tr>
</tbody>
</table>

<h2>你应该选哪一个？</h2>

<ul>
  <li><strong>如果你想要每个应用的音量控制、配置文件和自动蹲下：</strong> <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> —— 这是性价比最完整的音量混合器，具备更昂贵替代品所缺乏的功能（如配置文件、自动低音功能）。</li>
  <li><strong>如果你需要每个应用的均衡和音频路由：</strong> SoundSource——最强大的选项，面向需要效果链和按应用输出路由的音频专业人士。</li>
  <li><strong>如果你想要免费且基础的：</strong> 背景音乐——对于单个应用的简单音量来说还算不错，但在较新的macOS版本上可能存在兼容性问题，且缺少加速/配置文件/低头功能。</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在Mac应用商店SoundDial</a>.</p>
`,
  },
  "youtube-too-quiet-safari-chrome-mac": {
    slug: "youtube-too-quiet-safari-chrome-mac",
    title: "YouTube 在 Safari 或 Chrome 上Mac太安静了？立即修复",
    description:
      "有些YouTube视频即使开到最大音量也几乎听不见。以下是为什么浏览器音频通常比其他应用更安静——以及如何在Mac上将其提升到100%以上。",
    date: "2026-05-22",
    readTime: "5 min read",
    content: `
<p>你点击一个YouTube视频。创造者在说话，但你几乎听不到。系统音量已达到最大。YouTube的播放器数量已经达到最大。你靠近扬声器。还是太安静了。你打开Spotify——音乐音量爆发出。所以问题不在你的扬声器上。是YouTube。更准确地说，是视频。</p>

<p>这非常常见，而且不是bug。有些YouTube视频只是以较低的音量制作，macOS没有选择性增强浏览器音频的功能。</p>

<h2>为什么有些YouTube视频会这么安静</h2>

<h3>视频录制时音量很低</h3>
<p>并非每位创作者都有专业音频设备。用笔记本电脑麦克风从房间另一端录制的视频会比用正规电容麦克风录制的视频要安静得多。YouTube在一定程度上对音量进行了归一化（他们的“响度归一化”目标是-14 LUFS），但这并不能完全弥补极其安静的源音频。</p>

<h3>YouTube的响度归一化</h3>
<p>YouTube会自动调节视频音量，让视频的音量和音量大致相同。对于声音很大的视频，这意味着要把音量调低。对于安静的视频，意味着音量调高——但也只是到一定程度。如果源音频非常安静，归一化只能做到有限，否则会引入噪声。</p>

<h3>浏览器音频在macOS上是二等公民</h3>
<p>Safari和Chrome的音频处理方式与专用媒体应用不同。它们通过浏览器的音频引擎输出，而音频引擎本身有自己的音量上限。没有办法从macOS内提升浏览器标签的音频。浏览器就是一个应用，只有一个音量级别——即使你有十个标签页，播放不同音量的音频。</p>

<h2>快速解决方法</h2>

<h3>看看YouTube播放器的音量</h3>
<p>将鼠标悬停在YouTube播放器的扬声器图标上，确保滑块调到最大。很容易不小心把它拉低，而且它会独立于系统音量重置。</p>

<h3>关闭YouTube的响度归一化功能</h3>
<p>YouTube没有面向用户的响度归一切换开关。不过，一些浏览器扩展可以绕过它。在浏览器的扩展商店里搜索“YouTube 音量归一化”或“YouTube 音频增强器”。</p>

<h3>试试不同的浏览器</h3>
<p>Safari和Chrome对音频的处理方式不同。如果某个浏览器的视频太安静，可以试试另一个浏览器。尤其是Chrome通过一个独立的过程（“渲染器”）处理音频，这有时会导致输出降低。</p>

<h2>真正的解决办法是：把浏览器音量调到100%以上</h2>

<p>根本问题是macOS不允许你把某个应用的音量提升到100%。你的浏览器已经开到最大，但“满”这个词声音还不够大。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 解决方法是给每个应用——包括 Safari 和 Chrome——都设置一个独立的音量滑块，从0%到0% <strong>200%</strong>.如果YouTube视频太安静，可以把浏览器的滑块拖到150%或180%。音频会实时放大，不会影响其他应用。</p>

<img src="/apps/sounddial.png" alt="SoundDial把Safari浏览器音量调到180%，用于播放安静的YouTube视频Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>这尤其有用，因为：</p>
<ul>
  <li><strong>它是瞬间的。</strong> 点击菜单栏图标，拖动滑块。你不需要安装浏览器扩展或更改任何设置。</li>
  <li><strong>是按应用计算的。</strong> 提升Chrome并不会让Spotify变得更响。每个应用都保持独立。</li>
  <li><strong>它支持任何浏览器。</strong> Safari、Chrome、Firefox、Arc、Brave——只要是Mac上的应用，SoundDial都能控制。</li>
  <li><strong>它会升到200%。</strong> 音量上限是正常的两倍。即使是最安静的视频也会被听见。</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在Mac应用商店SoundDial</a> — 一次性购买14.99欧元，无订阅，macOS 14.2+。</p>
`,
  },
  "mac-notification-sounds-too-loud-headphones": {
    slug: "mac-notification-sounds-too-loud-headphones",
    title: "Mac耳机里通知声太大了？解决办法如下",
    description:
      "耳机里的Slackping和macOS提醒声刺耳响亮，而音乐却正常。以下是通知量为何不同——以及如何控制它。",
    date: "2026-05-25",
    readTime: "5 min read",
    content: `
<p>你戴着耳机，听音乐音量调到舒适的40%。Slack 通知响起。 <em>叮。</em> 和你的音乐比起来，声音震耳欲聋。你的耳朵嗡嗡作响。你把耳机摘下来。</p>

<p>这是因为macOS不能单独控制通知和媒体的音量。你的音乐音量可能很舒适，但警报声——Slack提示音、邮件通知、日历提醒macOS系统声音——相对于系统音量会以最大强度播放。</p>

<h2>为什么通知声比音乐还响</h2>

<p>通知音是短促、尖锐的音频爆发，旨在吸引你的注意力。它们设计成高峰值音量。相比之下，音乐拥有宽广的动态范围——有更安静的段落，有更响亮的段落，整体音量是为长时间聆听而设计的。</p>

<p>当系统音量调到40%时，音乐会停留在母带处理音量的40%——在耳机里这可能是舒适的60-70分贝。但当通知提示音在系统音量40%时，可能仍可能达到80+ dB，因为通知音源本身的母带处理在更高的峰值电平。系统体积的百分比比例是相等的，但它们的起始水平差别很大。</p>

<p>在耳机里情况更糟。声音直接进入你的耳道，没有空间散发，所以轻音乐和尖锐通知声之间的音量差异被放大了。</p>

<h2>内置降低通知音量的方法</h2>

<h3>降低警报音量</h3>
<p>macOS设置里有一个单独的“警报音量”滑块。前往 <strong>系统设置→音效</strong> 并寻找 <strong>警报音量</strong> 滑行者。它单独控制系统声音和警报的音量，独立于主音量。</p>
<p><strong>限制：</strong> 这只影响macOS系统警报（比如错误哔声和垃圾桶音）。它不会影响像 Slack、Discord 或 Teams 这类通过自身音频引擎播放音频的应用的通知音效。</p>

<h3>禁用每个应用的通知音效</h3>
<p>前往 <strong>系统设置→通知</strong>选择声音过大的应用，关闭“播放通知音效”。这会完全让该应用的通知静音。</p>
<p><strong>限制：</strong> 这是全有或全无。你不能在Slack上发出通知 <em>更安静</em> ——只有完全开启或完全关闭。而且你会失去那个告诉你发生了什么事的音频提示，不用看屏幕。</p>

<h3>使用对焦模式</h3>
<p>对焦模式（如请勿打扰、工作等）可以抑制所有或部分应用的通知音。这在深度专注时有效，但不适合整天——你会错过重要通知。</p>

<h2>真正的解决办法：独立控制通知应用的音量</h2>

<p>你真正想要的是：让Slack更安静，但你的音乐却不变小。将通知应用音量调到15%，同时保持Spotify的50%。macOS不允许你这么做。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 确实如此。它为每个应用提供独立的音量滑块，这样你可以将通知量大的应用（如 Slack、Mail 和日历）调低音量，同时保持媒体应用的舒适音量。</p>

<img src="/apps/sounddial.png" alt="SoundDial显示Slack音量较低，Spotify音量正常——macOS独立控制通知" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>典型的耳机友好配置</h3>
<ul>
  <li><strong>Spotify / 音乐</strong> — 50%（舒适听力）</li>
  <li><strong>松弛</strong> —— 15%（明显但不算惊人）</li>
  <li><strong>邮件</strong> —— 10%（轻微的叮当声，不会让你震动）</li>
  <li><strong>赛程</strong> —— 20%（足够让人察觉，不疼痛）</li>
  <li><strong>Zoom / FaceTime</strong> —— 90%（通话音频清晰）</li>
  <li><strong>浏览器</strong> — 40%（视频播放时匹配音乐音量）</li>
</ul>

<p>把这个存成“耳机”配置文件SoundDial，插入时一键应用。创建一个单独的“扬声器”配置文件，使用不同比例，方便你在办公桌前工作时使用。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在Mac应用商店SoundDial</a> — 一次性购买14.99欧元，无订阅，macOS 14.2+。</p>
`,
  },
  "stop-zoom-lowering-music-mac": {
    slug: "stop-zoom-lowering-music-mac",
    title: "如何阻止Zoom降低你的音乐音量Mac",
    description:
      "每次你加入Zoom会议时，你的音乐都会中断或消失。以下是为什么会发生这种情况，以及如何按你的节奏控制通话中哪些声音变小。",
    date: "2026-05-28",
    readTime: "6 min read",
    content: `
<p>你加入了Zoom会议。Spotify的音量很舒服。通话接通后——你的音乐消失或几乎消失。你什么都没碰。Zoom（或macOS）决定帮你调低音乐，没经过征求。</p>

<p>这让人抓狂，因为它是隐形且自动的。你什么都没静音。你没调整滑块。系统里有个地方决定你的音乐应该更安静，而你没有明显的控制方式。</p>

<p>事情是这样的，以及如何重新掌控局面。</p>

<h2>为什么你的音乐在Zoom通话时会变小</h2>

<p>可能有两种原因：</p>

<h3>1. Zoom 内置音频闪避功能</h3>
<p>Zoom 有自己的音频处理，可以影响系统里的其他音频。在某些配置中，Zoom 在激活麦克风时会降低系统音频，因此通话音频更清晰。这在Zoom的设置里并不总是很明显。</p>

<p>查看Zoom →设置→音频：</p>
<ul>
  <li>找找任何“自动调整麦克风音量”的设置，试着关闭它</li>
  <li>检查“抑制背景噪音”——这会处理音频并影响感知音量</li>
  <li>除非需要，否则请确保“使用独立音频设备进行同声传译”未被勾选</li>
</ul>

<h3>2. macOS编解码器切换</h3>
<p>当Zoom激活麦克风（尤其是蓝牙耳机如AirPods时），macOS会从高质量的AAC音频编解码器切换到低质量的SCO编解码器。这种编码变化通常会降低整体音频音量和音质。这并不是Zoom的具体问题——任何通过蓝牙使用麦克风的应用都会有这个问题。</p>

<p>如果你用的是AirPods或其他蓝牙耳机，通话开始时音量会下降，这很可能就是原因。</p>

<h2>内置修复</h2>

<h3>用有线耳机</h3>
<p>蓝牙编解码器切换问题在有线耳机中完全消失。USB-C耳机适配器或内置麦克风的耳机可以完全避免AAC→SCO切换。通话前、通话中和通话后音质保持一致。</p>

<h3>用单独的麦克风</h3>
<p>如果你用Mac内置麦克风（或外接USB麦克风）代替AirPods的麦克风，macOS就不需要切换蓝牙编码器。在系统设置→声音→输入中，将输入设备设置为内置麦克风，同时保持AirPods作为输出。这样AirPods会保持AAC模式，音量也不会受到影响。</p>

<h3>调整Zoom的音频设置</h3>
<p>在Zoom→设置→音频中，尝试禁用自动麦克风调节和背景噪音抑制。这些功能可能会干扰其他应用的音频音量。</p>

<h2>真正的解决办法：按你的方式自动蹲下</h2>

<p>根本问题是你无法控制 <em>多少</em> 通话时你的音乐会被调低。系统会帮你做决定，而且通常过于激进——音乐几乎降到零，而不是一个舒适的背景音量。</p>

<p>你真正想要的是可配置的自动低头功能：“当我通话时，把音乐调到25%——不是零，也不是50%，正好是25%。”</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 这正是给你的。它的自动低头功能会监控你的麦克风，并在通话开始时自动调整背景音频——但是 <strong>你控制鸭子的水平</strong>.</p>

<img src="/apps/sounddial.png" alt="SoundDial 自动低身设置——Zoom 通话时可配置音量降低Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>工作原理</h3>
<ol>
  <li>你可以设定你喜欢的鸭子等级（10%到80%）</li>
  <li>你加入Zoom通话——麦克风会被激活</li>
  <li>SoundDial检测到通话，并将后台应用降到你配置的级别</li>
  <li>你的通话音频保持最大音量</li>
  <li>你挂断了电话——所有应用都会回到之前的音量</li>
</ol>

<p>与Zoom/macOS方法的不同之处：</p>
<ul>
  <li><strong>你选择关卡。</strong> 30%是个不错的默认值——音乐能听到但不会干扰。你可以从10%（几乎无声）到80%（几乎没调到）之间调整。</li>
  <li><strong>它恢复得非常完美。</strong> 通话结束后，所有应用都会回到原来的位置。</li>
  <li><strong>它适用于所有沟通应用。</strong> Zoom、Teams、FaceTime、Discord、Slack、Google Meet、Webex、Skype。</li>
  <li><strong>你可以禁用它。</strong> 如果你想手动管理某个通话的音量，只需在SoundDial设置里关闭自动蹲下即可。</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在Mac应用商店SoundDial</a> — 一次性购买14.99欧元，无订阅，macOS 14.2+。</p>
`,
  },
  "airpods-volume-too-low-mac": {
    slug: "airpods-volume-too-low-mac",
    title: "AirPods在Mac上音量太低了？所有修复解答",
    description:
      "AirPods在你Mac上即使音量开到最大，声音也很小？以下是所有原因——从耳机安全限制到蓝牙怪癖——以及如何解决它们。",
    date: "2026-06-08",
    readTime: "7 min read",
    content: `
<p>你的AirPods在iPhone上用得很好。他们声音很大。但一旦无线连接到你的Mac，一切突然变得异常安静。系统音量已达到最大。Spotify 开到最大。AirPods只是......声音不够大。</p>

<p>这是Mac AirPods 用户最常见的音频抱怨之一。好消息是：几乎总是可以修复的。坏消息是：大约有六种不同的原因可能导致，你可能需要检查所有原因。</p>

<h2>1. 耳机安全限制音量</h2>

<p>这是最常见的原因。macOS内置功能可以限制耳机音量，保护听力。</p>

<p>前往 <strong>系统设置→声音→耳机安全</strong>.</p>

<p>如果启用了“降低音量”，macOS实际上是在限制你的AirPods音量。它会测量声音暴露随时间的变化，如果它认为你听得太大声，会降低音量。</p>

<p><strong>修复方法：</strong> 完全关闭“减少响亮音频”，或者将分贝阈值提高到更高的水平。你会立刻感受到更多的音量余量。</p>

<h2>2. 蓝牙音量不同步</h2>

<p>蓝牙音频有两个独立的音量控制：一个在Mac侧，另一个在AirPods那边。这些信号本应同步，但有时会不同步——Mac显示100%，但AirPods实际上接收到的信号音量较低。</p>

<p><strong>修复方法：</strong> 断开你的AirPods（系统设置→蓝牙→点击AirPods旁边的“i”键→断开连接），等待五秒钟，然后重新连接。这会重置音量同步。另外试试把AirPods放回盒子，盖上盖子，等十秒钟，然后再取出来。</p>

<h2>3. 音频编解码器切换为较低音质</h2>

<p>当你使用AirPods的麦克风（无论是打电话、Siri还是语音输入）时，macOS会从高质量的AAC编解码器切换到低质量的SCO编解码器。SCO是为电话设计的——它降低了音质，也可能影响感知音量。</p>

<p><strong>修复方法：</strong> 如果你不在通话中，但音频听起来既轻又低，建议断开再重新连接你的AirPods。macOS应该切回AAC编解码器来播放音乐。如果你正在通话中，这是预期中的行为——通话结束时编解码器会自动切回。</p>

<h2>4. 一个AirPods比另一个更安静</h2>

<p>如果音量感觉低是因为一只AirPods明显更安静，问题可能是物理上的——耳垢或杂物挡住了扬声器网格。</p>

<p><strong>修复方法：</strong> 用干燥无绒布轻柔清洁AirPods。对于扬声器网状，使用干燥的软毛刷。不要使用液体、压缩空气或锋利物品。也要检查一下 <strong>系统设置→无障碍→音频</strong> ——确保左右音频平衡滑块居中。</p>

<h2>5. 应用本身输出的音量很低</h2>

<p>有些应用有独立于系统音量的内部控制。Spotify、VLC、YouTube和Zoom都有独立的音量滑块。如果应用内部音量调到50%，即使macOS和AirPods都开到100%，你也只能听到一半的音量。</p>

<p><strong>修复方法：</strong> 检查你用的应用里的音量控制，确保它开到最大。</p>

<h2>6. 核心音频状况不佳</h2>

<p>macOS的音频守护进程（coreaudiod）有时会卡在蓝牙音频路由错误或电平降低的状态，尤其是在睡眠/唤醒或切换多个音频设备之后。</p>

<p><strong>修复方法：</strong> 打开终端并运行：</p>
<p><code>Sudo Killall CoreAudid</code></p>
<p>音频会中断一秒钟然后重新开始。你的AirPods可能会以更正常的音量重新连接。</p>

<h2>还是太安静了吗？将AirPods音量提升到100%以上</h2>

<p>如果你已经检查了上述六个原因，但AirPods仍然音量不够大，可能需要音量放大——将音频信号提升到超出macOS正常允许的范围。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 可以让你把任何应用的音量提升到 <strong>200%</strong>.如果 Spotify 在 AirPods 里太小，可以把 Spotify 的滑块拖到 150% 或 180%，SoundDial。音频信号在发送到你的AirPods之前会被放大，实际上让它们比苹果预期的声音更大。</p>

<img src="/apps/sounddial.png" alt="SoundDial Mac 上 AirPods 的应用音量提升，每个应用的音量滑块最高可达 200%" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>按应用提升的优势是：你可以提升安静应用，而不会让其他声音变大。如果你的视频通话在100%时没问题，但Spotify需要170%，SoundDial可以让你分别设置。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在Mac应用商店SoundDial</a> — 一次性购买14.99欧元，无订阅，macOS 14.2+。</p>
`,
  },
  "spotify-volume-too-low-mac": {
    slug: "spotify-volume-too-low-mac",
    title: "Spotify Mac音量太低？这里有所有解决方案",
    description:
      "Spotify 音量调到最大，但Mac还是太小？本指南涵盖了所有原因——从Spotify内置的限制器到macOS设置——以及如何将音量提升到100%以上。",
    date: "2026-06-11",
    readTime: "7 min read",
    content: `
<p>Spotify音量开到最大。你的Mac音量开得很大。而且声音还是不够大。这是Mac上最常见的Spotify投诉之一，原因有很多——其中大多数并不明显。</p>

<p>本指南将详细介绍Spotify在你Mac上可能过于安静的所有原因，以及如何解决每个问题。包括如果别无他法，如何将Spotify的音量提升到100%以上。</p>

<h2>先查看Spotify自家的音量滑块</h2>

<p>Spotify 在应用右下角（或重新设计的播放器中屏幕底部）有一个独立的音量控制。这个滑块和你Mac的系统音量是分开的。如果音量调到50%，Spotify输出的音量只有一半——即使你的系统音量是100%。</p>

<p><strong>修复方法：</strong> 确保Spotify应用内的音量滑块调到最右边（100%）。</p>

<h2>检查一下Spotify的音量归一化</h2>

<p>Spotify 有一个功能叫做 <strong>体积归一化</strong> 它会自动调整播放音量，使所有轨道大致保持相同的音量。这样做旨在防止歌曲间出现突兀的音量跳跃，但也能降低较大音量曲目的整体音量。</p>

<p>检查方法是：打开 Spotify →设置→播放→ <strong>归一化体积</strong>.</p>

<p>你有三个选择：</p>
<ul>
  <li><strong>吵闹</strong> ——最小归一化，最接近原始母带处理水平</li>
  <li><strong>普通</strong> — 适度归一化（默认）</li>
  <li><strong>安静</strong> —— 大多数归一化，体积进一步降低</li>
</ul>

<p><strong>修复方法：</strong> 如果Spotify听起来太小，要么完全关闭归一化，要么把音量调到“响亮”。这是Spotify意外安静的最常见原因。</p>

<h2>检查一下Spotify的音频质量设置</h2>

<p>较低的音频质量设置有时会导致播放更安静，尤其是在较老的音频硬件上。进入 Spotify →设置→音频质量，确保你使用“非常高”（320 kbps，如果你有高级订阅），或者使用“高”（256 kbps）作为免费套餐。</p>

<h2>检查macOS耳机的安全限制</h2>

<p>如果你用的是有线或蓝牙耳机，macOS可能会限制音量。前往 <strong>系统设置→声音→耳机安全</strong>.如果启用了“降低音量”，macOS会把耳机音量限制在它认为安全的水平。</p>

<p><strong>修复方法：</strong> 关闭“减少噪音”或提高分贝阈值。注意：这个设置只影响耳机输出，不影响扬声器。</p>

<h2>检查蓝牙音量</h2>

<p>如果你用的是AirPods或蓝牙音箱，还有一个单独的音量层。蓝牙设备有自己的音量，是Mac和设备之间协商的。有时候这种状态会不同步。</p>

<p><strong>修复方法：</strong> 断开再重新连接你的蓝牙设备。还要检查设备是否有自己的音量按钮——确保音量调到最大。</p>

<h2>重置核心音频</h2>

<p>macOS的音频系统有时会卡在低音量状态，尤其是在休眠/唤醒周期或切换输出设备后。重启音频守护进程通常能解决这个问题。</p>

<p>打开终端并运行：</p>
<p><code>Sudo Killall CoreAudid</code></p>

<p>音频会中断一秒钟然后重启。再试试Spotify——声音可能会更大。</p>

<h2>用SoundDial提升Spotify超过100%</h2>

<p>如果你试过以上所有方法，Spotify依然太安静，问题可能是Spotify的最大输出音量不够大，无法满足你的设置需求。这在MacBook内置扬声器和一些蓝牙设备中很常见。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 可以让你把任何应用的音量提升到 <strong>200%</strong> ——包括Spotify。它截获Spotify的音频流，并将其放大到应用内置的最大音量之外，而不影响其他应用的音量。</p>

<img src="/apps/sounddial.png" alt="SoundDial把Spotify音量调到200%，同时macOS其他应用保持正常音量" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>关键区别在于：系统范围内的音量提升会让 <em>一切</em> 声音更大——通知、电话、系统声音——不仅仅是Spotify。SoundDial提升了Spotify的效果 <em>独立</em>.把Spotify设置为160%，而浏览器保持80%，Zoom保持100%。</p>

<h2>额外提示：通话时自动低头播放音乐</h2>

<p>如果出现相反的问题——视频通话时Spotify声音过大——SoundDial的自动低头功能会在你加入Zoom、Teams或FaceTime通话时自动降低Spotify音量。通话结束后，Spotify 会恢复到之前的音量。不需要手动调整。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在Mac应用商店SoundDial</a> — 一次性购买14.99欧元，无订阅，macOS 14.2+。</p>
`,
  },
  "separate-game-audio-from-discord-mac": {
    slug: "separate-game-audio-from-discord-mac",
    title: "如何在Mac上将游戏音频与Discord分离",
    description:
      "游戏爆炸声淹没了你的队友在Discord上？以下是如何在macOS上独立控制游戏音频和语音聊天音量的方法。",
    date: "2026-06-10",
    readTime: "6 min read",
    content: `
<p>你在玩游戏，玩游戏Mac。游戏中会有爆炸发生。你的Discord队友在说话，但你听不到他们在枪声中。你调低了音量——Discord也变得更安静了。你又调大了音量——爆炸声再次震耳欲聋。</p>

<p>在Windows上，你可以打开音量调音器，把游戏音量调到40%，Discord保持100%。Mac，你不能。macOS给你一个音量滑块，游戏音频和语音聊天是永久关联的。</p>

<p>本指南会教你如何为你的游戏和Discord（或任何语音聊天）在Mac上获得独立的音量控制。</p>

<h2>为什么这是一个Mac具体的问题</h2>

<p>自2006年以来，Windows内置了音量混合器，可以独立控制每个应用的音量。macOS从未添加过这个功能。每个应用的音频都会混成一个流，你唯一能控制的是一个主滑块，影响所有内容都一样。</p>

<p>这意味着：</p>
<ul>
  <li>如果你的游戏声音太大，调低音量也会降低Discord音量</li>
  <li>如果Discord太安静，调大音量也会把游戏音量调大</li>
  <li>你找不到平衡点，因为两个应用都锁定在相同的音量</li>
</ul>

<h2>那些其实并不有效的变通方法</h2>

<h3>使用游戏内的音量设置</h3>
<p>大多数游戏都有音频设置菜单，你可以独立降低主音量、音乐、音效和语音聊天。这有帮助，但你是在游戏内更改设置——这意味着你必须暂停游戏、浏览菜单，并在每次条件变化时调整。换游戏时，你得重新开始。</p>

<h3>使用Discord的音量控制</h3>
<p>Discord 允许你在设置→语音与视频中调整输出音量，你还可以通过右键点击用户名字来调整他们的音量。但这控制的是Discord内部的混音，而不是它相对于其他应用的音量。如果游戏声音太大，内部让Discord变大也没用，因为系统音量对两者影响是一样的。</p>

<h3>使用不同的输出设备</h3>
<p>有些人尝试把游戏音频路由到扬声器，Discord转到耳机（反过来）。macOS并不容易做到——你需要一个虚拟音频设备和手动按应用路由。而且戴着同时播放音响的耳机，充其量也只是尴尬。</p>

<h2>真正的解决方案是：每个应用的音量控制</h2>

<p>你需要的是能够独立于Discord音量设置游戏音量。这正是按应用音量混合器所做的。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 它会放在菜单栏里，给每个应用单独的音量滑块。你可以把游戏设置为35%，Discord设置为100%——或者根据你适合的比例。换一个，另一个就留在原地。</p>

<img src="/apps/sounddial.png" alt="SoundDial在macOS上显示游戏和Discord的独立音量滑块" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>典型的游戏配置</h3>
<ul>
  <li><strong>游戏</strong> — 30-50%（音量足够大以增强沉浸感，但不会过于喧闹）</li>
  <li><strong>Discord / 语音聊天</strong> —— 90-100%（游戏音频中始终清晰可听）</li>
  <li><strong>Spotify / 音乐</strong> —— 15-25%（低调背景，不干扰）</li>
  <li><strong>浏览器</strong> ——静音（无意外自动播放视频）</li>
  <li><strong>Slack / 通知</strong> ——静音（对焦时间）</li>
</ul>

<h3>保存为个人资料</h3>
<p>SoundDial <strong>体积配置文件</strong> 让你保存这个配置，只需一键应用即可。创建一个“游戏”档案，里面有你喜欢的游戏/Discord余额，一个“工作”档案用来听音乐和通话，然后可以即时切换。每次坐下来玩都不用重新调整滑块。</p>

<h3>音量提升以实现安静语音聊天</h3>
<p>有时候问题不在于游戏太吵，而是Discord太安静了。有些队友麦克风不好，或者Discord的输出比其他应用低。SoundDial可以把任何应用的音量调到最高 <strong>200%</strong>所以你可以在不动游戏音量的情况下，将Discord的音量放大到超出正常的最大值。</p>

<h2>任何游戏和语音聊天都能用</h2>

<p>SoundDial适用于所有在macOS上产生音频的应用。无论你是在Steam、App Store、Epic Games还是浏览器游戏中玩。无论你用的是Discord、TeamSpeak、Mumble还是FaceTime。如果它发出声音，SoundDial可以控制它。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在Mac应用商店SoundDial</a> — 一次性购买14.99欧元，无订阅，macOS 14.2+。</p>
`,
  },
  "why-doesnt-mac-have-volume-mixer": {
    slug: "why-doesnt-mac-have-volume-mixer",
    title: "为什么Mac没有像Windows那样的音量调音器？",
    description:
      "Windows 自 2006 年起就实现了每个应用的音量控制。现在是2026年，macOS依然没有。真正的原因——以及如何获得一个。",
    date: "2026-06-09",
    readTime: "6 min read",
    content: `
<p>自Vista（2006年）以来，每个Windows版本都包含了音量混合器。右键点击扬声器图标，点击“音量混合器”，你会看到每个应用都有自己的音量滑块。你可以静音Chrome而不影响Spotify。你可以在不碰游戏的情况下降低Discord的音量。</p>

<p>On macOS?一个滑球。这就是你能得到的全部。二十年的Mac更新——Ventura、Sonoma、Sequoia、Tahoe——苹果从未添加过每个应用的音量控制。</p>

<p>人们不断问这个问题： <em>为什么Mac没有音量调音器？</em></p>

<h2>这不是技术上的限制</h2>

<p>先说清楚：macOS完全可以实现每个应用的音量控制。底层音频框架—— <strong>核心音频</strong> —— 支持在 API 层面进行每进程的音频监听、路由和增益调整。苹果推出了 <strong>音频分流 API</strong> macOS 14（索诺玛）中，使开发者更容易拦截和修改单个应用音频流。</p>

<p>多年来，第三方开发者一直利用这些API构建每个应用的音量混合器。技术是存在的。只是苹果还没有开发出面向用户的版本。</p>

<h2>那么，为什么苹果还没有亲自制造呢？</h2>

<p>苹果从未公开解释过原因。但从他们的设计模式来看，答案其实很明确： <strong>苹果优先考虑简洁性而非高级用户功能。</strong></p>

<p>一个音量滑块比十二个还简单。它更容易解释，更容易学习，而且不需要任何配置。对于那些一次只做一件事——听音乐、接电话或看视频的用户——一个滑块就足够了。苹果首先为这个用户设计。</p>

<p>还有一个哲学上的观点：苹果认为应用应该管理自己的音频。如果Spotify声音太大，可以在Spotify里调小音量。如果Zoom太安静，就在Zoom里调大音量。操作系统不应该需要中介。</p>

<p>问题在于，这种理念与现实不符。2026年，大家都开始多任务处理音频：</p>

<ul>
  <li>工作时播放音乐</li>
  <li>视频通话并发出提示音</li>
  <li>浏览器标签页自动播放广告</li>
  <li>运行Discord时的游戏</li>
  <li>一只耳朵听播客，一只耳朵听Slack。</li>
</ul>

<p>“只需在每个应用里调整”意味着在六个应用间切换，找到六个不同的音量控制（其中一些根本不存在），并且一天多次这样做。这完全不是简单的。</p>

<h2>苹果会加入吗？</h2>

<p>目前没有迹象表明苹果计划在任何即将发布的macOS中加入音量混音器。该功能尚未出现在任何macOS测试版、专利申请或WWDC路线图中。苹果菜单栏中的控制中心仍然只显示一个系统音量滑块。</p>

<p>苹果最终可能会加入它——他们采用了之前拒绝的功能（小部件、窗口平铺、多窗口iPad）。但等待苹果意味着无限期等待。</p>

<h2>现在如何给Mac安装音量调音台</h2>

<p>答案是第三方菜单栏应用。 <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 是一个原生macOS音量混合器，功能与Windows音量混合器完全相同，甚至更多。</p>

<img src="/apps/sounddial.png" alt="SoundDial — macOS音量调音器，菜单栏显示每个应用的音量滑块" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>你能获得什么：</p>

<ul>
  <li><strong>每个应用的音量滑块</strong> ——每个跑步应用都有自己的滑块，从0%到200%</li>
  <li><strong>每个应用静音</strong> —— 点击即可静音任何应用，再次点击解除静音</li>
  <li><strong>体积剖面</strong> —— 为不同情境（工作、专注、游戏）保存配置，一键切换</li>
  <li><strong>自动蹲伏</strong> —— 加入通话时背景音频会自动降低，挂断电话时恢复</li>
  <li><strong>音量提升到200%</strong> ——将安静应用放大到超出其正常最大值</li>
  <li><strong>键盘快捷键</strong> —— 切换混合器或用快捷键静音所有应用</li>
  <li><strong>输出设备切换</strong> — 在同一面板上切换扬声器、耳机和外部设备</li>
  <li><strong>卷存储器</strong> ——每个应用的音量在重启之间都会被记住</li>
</ul>

<p>这是苹果二十年前就应该开发的功能。一次性购买 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac 应用商店</a>.没有订阅。macOS 14.2+。</p>

<p>音量调频器macOS应该内置的。</p>
`,
  },
  "boost-mac-volume-beyond-100-percent": {
    slug: "boost-mac-volume-beyond-100-percent",
    title: "Mac音量太低？如何将声音提升到100%",
    description:
      "你的Mac开到最大音量，但还是太小了。以下是为什么会这样，以及如何在没有外接扬声器的情况下将音频放大到200%。",
    date: "2026-06-07",
    readTime: "8 min read",
    content: `
<p>你的Mac量是100%。滑块在最右边。而且声音还是不够大。播客太安静了。视频通话的参与者听起来像是在低声耳语。YouTube视频录制得太低了。你已经用尽了——但这还不够。</p>

<p>这是Mac最常见的音频抱怨之一，尤其是MacBook Air和老款MacBook Pro的内置扬声器。扬声器体积较小，有些内容录制的音量比其他的低。</p>

<p>以下是为什么会这样，以及如何实际解决——包括如何将Mac音量提升到超过100%的限制。</p>

<h2>为什么你的Mac在最大音量下听起来太小了</h2>

<p>即使音量最大，Mac可能声音不够大，原因有几个：</p>

<h3>1. 内容本身安静</h3>
<p>并非所有音频都以相同水平母带处理。专业制作的播客峰值可能达到-3分贝，而一个随意的YouTube视频或录制的Zoom通话可能达到-20分贝。差别非常大。当系统音量调到100%时，安静内容保持安静——macOS只能放大到原始信号水平。</p>

<h3>2. MacBook音箱有物理限制</h3>
<p>MacBook Air或13英寸MacBook Pro的内置扬声器都很小。它们设计是为了便携，而不是体积。苹果的更大 MacBook Pro 型号（14 英寸和 16 英寸）扬声器明显更好，但即便如此也有天花板。如果你习惯了外接扬声器或耳机，内置扬声器会感觉很弱。</p>

<h3>3. 蓝牙音量有上限</h3>
<p>有些蓝牙耳机和音箱有独立的音量上限，和macOS分开。即使macOS显示100%，蓝牙设备也可能没有达到最大性能。这在AirPods中尤为常见，欧盟音量限制器或耳机安全功能→声音→耳机安全设置中可以限制输出。</p>

<h3>4. 单个应用量较少</h3>
<p>有些应用有自己的内部音量控制，和系统音量分开。如果Spotify的应用内音量是50%，系统音量是100%，那你实际上就是在50%收听。Zoom 通常默认会用保守的通话音量。</p>

<h2>先尝试的内置修复</h2>

<h3>检查耳机安全限制</h3>
<p>前往 <strong>系统设置→声音→耳机安全</strong>.如果启用了“降低音量”，macOS就是在主动限制音量以保护听力。你可以禁用这个功能或提高阈值。这只影响耳机——不会接触扬声器输出。</p>

<h3>检查蓝牙设备音量</h3>
<p>有些蓝牙设备有独立的音量控制。对于AirPods，确保Mac和AirPods的音量都开到最大。对于第三方蓝牙扬声器，检查扬声器是否有自己的音量按钮或应用。</p>

<h3>检查应用内音量</h3>
<p>打开那个声音太小的应用，找找它自己的音量滑块。Spotify 在播放器栏里有一个。VLC的播放控制里有个。YouTube的视频播放器里有一个。在断定是Mac有问题之前，确保这些电量是100%。</p>

<h3>重置核心音频</h3>
<p>有时macOS音频系统在睡眠/唤醒周期或设备更换后会出现故障状态。打开终端并运行：</p>
<p><code>Sudo Killall CoreAudid</code></p>
<p>这会重启音频守护进程。你的音频会中断一秒钟，然后恢复，有时音量会恢复正常。</p>

<h2>如何将音量提升到100%以上</h2>

<p>如果你检查了以上所有内容，Mac依然太小，你需要音量放大——也就是推动音频的能力 <em>上图</em> macOS设定的100%上限。</p>

<p>音量提升通过在音频信号到达扬声器前拦截它并将其幅度放大来实现。在150%时，每个音频采样的音量比原声高出1.5倍。200%时，它翻倍了。这在某些内容极端时可能会带来轻微失真，但对于安静的音频，这是唯一能让声音真正听见的方法。</p>

<h3>SoundDial：每个应用的音量提升可达200%</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 给你Mac上的每个应用都有一个独立的音量滑块，从0%到0% <strong>200%</strong>.如果某个应用声音过于安静——比如播客播放器、浏览器标签页、视频通话——你可以只提升该应用的音量超过100%，而不使用其他任何设备。</p>

<img src="/apps/sounddial.png" alt="SoundDial 音量提升——每个应用的音量控制，macOS 200% 放大" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>这对以下情况尤为有用：</p>
<ul>
  <li><strong>安静播客应用</strong> ——有些播放器的最高限制太低，尤其是在录制环境不佳的播客时</li>
  <li><strong>与安静参与者的视频通话</strong> ——当有人麦克风很低时，提升Zoom或Teams音量，但不让音乐变大</li>
  <li><strong>浏览器标签页</strong> —— YouTube 视频、网页应用和嵌入式媒体的播放音量通常低于专用媒体应用</li>
  <li><strong>旧录音</strong> ——档案音频、老音乐和较早的视频内容通常在较低级别进行母带处理</li>
</ul>

<p>相较于系统范围音量增强器的主要优势是SoundDial <em>按应用</em>.你可以把安静应用调到180%，同时保持其他音量正常。系统范围的增强器会让所有声音均匀放大，让你本来就很吵的应用变得异常刺耳，而安静的应用则稍微变得更安静。</p>

<h2>当外部解决方案更好时</h2>

<p>音量提升是有限制的。如果你想用MacBook Air内置扬声器的声音填满整个房间，没有任何软件能克服这些扬声器单元的物理尺寸。那么：</p>

<ul>
  <li><strong>有线耳机</strong> ——完全绕过扬声器限制，大多数耳机的音量可以比内置扬声器更大</li>
  <li><strong>外部扬声器</strong> ——即使是便宜的USB或蓝牙音箱，在原始音量上也能胜过内置MacBook音箱</li>
  <li><strong>USB音频接口</strong> ——对于专业用途，专用音频接口为录音室监听音箱或耳机提供干净且强劲的信号</li>
</ul>

<p>但对于日常情况——浏览器标签太安静，通话中有人嘟囔，播客录制在壁橱里——软件音量提升 <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 是最快的解决办法。点击菜单栏图标，将滑块拖过100%，完成。</p>

<p>一次性购买 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac 应用商店</a>.没有订阅。macOS 14.2+。</p>
`,
  },
  "auto-lower-music-during-zoom-calls-mac": {
    slug: "auto-lower-music-during-zoom-calls-mac",
    title: "如何在Mac的Zoom通话中自动降低音乐音量",
    description:
      "每次Zoom会议开始时，你都会急忙暂停Spotify。还有更好的方法——麦克风激活时，自动低头会自动降低音乐音量。",
    date: "2026-06-05",
    readTime: "7 min read",
    content: `
<p>电话开始了。你正在共享屏幕。你的音乐依然震耳欲聋。你慌忙切换到Spotify，按下暂停键，再切回Zoom——但大家已经听过你播放列表的十秒钟了。这种情况每个人都会遇到，而且是因为macOS“刚开始通话”和“也许把音乐调小点”联系起来。</p>

<p>在某些手机上，这也是自动的——当电话进来时，音乐会暂停或低头播放。Mac，你得靠自己。除非你设置了自动蹲伏。</p>

<h2>什么是音频低头？</h2>

<p><strong>音频鸭嘴</strong> 意味着当发生更重要的事情时，自动降低背景音频的音量——比如语音通话。该术语源自广播工程，背景音乐“躲过”播音员的声音。</p>

<p>实际上，它的运作方式如下：</p>
<ol>
  <li>你在听音乐时音量只有50%</li>
  <li>你加入了Zoom会议</li>
  <li>你的音乐会自动降到15%。</li>
  <li>你无需手动调整就能清楚听到通话声</li>
  <li>通话结束</li>
  <li>你的音乐会自动恢复到50%</li>
</ol>

<p>不能切换应用，不能暂停。通话后别忘了取消静音你的音乐。它是全自动的。</p>

<h2>macOS有内置音频低潜功能吗？</h2>

<p>不。macOS没有自动音频闪避功能。在系统设置、辅助功能或焦点模式中，没有任何将“麦克风激活”和“较低背景音”联系起来的内容。苹果根本没有打造出这样的设备。</p>

<p>有一个叫“播放立体声音频为单声道”的辅助设置和视觉闪光提醒选项，但没有任何能根据通话情况自动调节音量的功能。</p>

<h2>手动替代（以及为什么它们会让人痛苦）</h2>

<h3>每次通话前手动暂停音乐</h3>
<p>大多数人都是这么做的。它奏效——直到你忘记。或者直到有人突然打电话来。或者直到你连续打电话，每天暂停和恢复Spotify十二次。这也意味着通话时不能播放背景音乐，即使你想把音量调低。</p>

<h3>用对焦模式把所有东西都静音</h3>
<p>你可以创建一个“会议”焦点模式，屏蔽通知音。但对焦模式并不控制媒体播放音量。即使在“请勿打扰”模式下，你的音乐依然会以最大音量播放——Focus只抑制通知。</p>

<h3>手动设置音量配置文件</h3>
<p>创建一个“通话”设置，每次通话前手动调低除通讯应用外的所有设备。这个方法有效，但每次都需要记住并手动切换。而且你必须在之后再切换回去。</p>

<h2>自动蹲下SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 内置自动蹲下功能，完全符合macOS本应的功能。具体流程如下：</p>

<h3>它如何检测来电</h3>
<p>SoundDial监控你Mac的麦克风状态——当应用使用麦克风时，菜单栏中显示橙色点的指示器是同一个。当它检测到通讯应用激活了你的麦克风时，就知道通话已经开始。</p>

<p>它适用于所有主要的通信应用：</p>
<ul>
  <li><strong>Zoom</strong></li>
  <li><strong>Microsoft Teams</strong></li>
  <li><strong>FaceTime</strong></li>
  <li><strong>Discord</strong></li>
  <li><strong>松弛</strong> （围拢和呼喊）</li>
  <li><strong>谷歌见面</strong> （通过Chrome）</li>
  <li><strong>Cisco Webex</strong></li>
  <li><strong>Skype</strong></li>
</ul>

<h3>通话开始时会发生什么</h3>
<p>一旦麦克风激活通话，SoundDial会自动将所有非通信应用的音量降低到你配置的30%水平。你的通话音频保持最大音量。背景音乐变得很细腻。通知声渐渐安静。</p>

<p>SoundDial的头部会出现一个小绿色指示器，确认自动蹲伏已激活。</p>

<h3>通话结束后会发生什么</h3>
<p>挂断电话后麦克风关闭后，SoundDial会把所有应用音量恢复到通话开始前的状态。你的音乐会回到50%（或者你原本的音乐水平）。不需要手动调整。</p>

<h3>配置鸭子水平面</h3>
<p>在SoundDial的设置里，你可以调整 <strong>鸭水平</strong> ——通话过程中减少多少背景音频。滑块范围从10%（几乎听不见）到80%（依然很明显）。默认的30%对大多数人来说效果不错：音乐很明显，但不会干扰对话。</p>

<img src="/apps/sounddial.png" alt="SoundDial自动低头功能，在Mac Zoom通话时自动降低音乐音量" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>为什么自动蹲下比暂停更好</h2>

<p>在通话前暂停音乐看似简单，但自动蹲下在多个方面更好：</p>

<ul>
  <li><strong>这是自动的。</strong> 你永远不会忘记。当突发电话打来时，不用慌乱。</li>
  <li><strong>你保留背景音乐。</strong> 许多人在通话时更喜欢安静的背景音乐，而不是安静。自动蹲下让你保持在舒适的水平。</li>
  <li><strong>它能处理多个应用。</strong> 不仅仅是音乐——通知音、浏览器标签页以及其他任何音频源都会同时被屏蔽。</li>
  <li><strong>它恢复得非常完美。</strong> 通话结束后，每个应用都会回到之前的音量。没有重新调整。</li>
  <li><strong>它适合连续接电话。</strong> 如果你连续有三场会议，自动蹲下会自动处理所有会议，而你根本不动任何东西。</li>
</ul>

<h2>不到一分钟就能搭建好</h2>

<ol>
  <li>安装 <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial来自Mac应用商店</a></li>
  <li>打开设置→自动鸭嘴标签页</li>
  <li>启用自动蹲伏</li>
  <li>根据喜好调整鸭子高度滑块</li>
  <li>仅此而已——自动蹲下是激活的</li>
</ol>

<p>下次你加入Zoom、Teams或FaceTime通话时，背景音频会自动降低。挂断电话后，它会回来。一次性购买，无需订阅。</p>
`,
  },
  "how-to-mute-one-app-on-mac": {
    slug: "how-to-mute-one-app-on-mac",
    title: "如何在Mac上静音一个应用而不把所有东西静音",
    description:
      "Slack在ping。你正在通话。你想静音Slack，但还是一直听到你的电话。macOS不允许你——不过这里有个方法。",
    date: "2026-06-03",
    readTime: "6 min read",
    content: `
<p>你正在参加Zoom通话。Slack一直发出通知音。你忘记的YouTube标签页自动开始播放。你按下静音键——现在连电话都听不到了。macOS静音器 <em>一切</em>.没有内置方法只静音一个应用。</p>

<p>在Windows上，你只需右键点击扬声器图标，打开音量混音器，然后点击Slack旁的静音按钮。完成了。Slack静音，其他一切都在播放。macOS没有对应的。</p>

<p>本指南涵盖了所有可用的静Mac音方法——从内置的变通方法到唯一真正像静音按钮一样的解决方案。</p>

<h2>为什么macOS不能静音单个应用</h2>

<p>macOS把音频当作一个单一流来处理。每个应用的音频在到达扬声器前都会被混合在一起，苹果唯一提供的音量控制就是在最终混音输出上操作。没有办法进入这种混合，让一个应用静音而不影响其他应用。</p>

<p>这不是硬件限制——而是软件设计上的选择。macOS 的核心音频框架支持在 API 层面实现每进程音频控制。苹果根本没有构建一个面向用户的访问方式。</p>

<h2>内置变通方法（及其局限）</h2>

<h3>1. 关闭应用通知</h3>
<p>前往 <strong>系统设置→通知</strong> 然后找到你想静音的应用。你可以禁用通知的声音，或者完全关闭通知。</p>
<p><strong>关键是：</strong> 这只能用于通知音。如果应用发出其他声音——媒体播放、通话音频、应用内声音——则不会影响它们。而且你不仅会失去声音，还会丢失视觉通知。</p>

<h3>2. 使用对焦模式</h3>
<p>macOS焦点模式（如请勿打扰、工作、个人等）可以抑制特定应用的通知音。你可以在每个焦点模式下设置哪些应用可以通知你。</p>
<p><strong>关键是：</strong> 对焦模式是关于通知的，不是音频。他们不会静音Slack聚会、播放音频的浏览器标签页，或任何媒体播放。他们还要求每个模式事先配置——你不能现在就“静音这个应用”。</p>

<h3>3. 关闭应用</h3>
<p>核选项。如果你完全退出Slack，它就无法发出声音。显然这意味着你在重新打开之前也看不到任何消息。</p>
<p><strong>关键是：</strong> 你不想退出这个应用——你想 <em>继续用</em> 却听不到。“静音”和“接近”之间有很大区别。</p>

<h3>4. 使用应用本身的设置</h3>
<p>有些应用的偏好设置里藏有“静音音”或“静音通知”的设置。Slack在偏好设置→通知→声音和外观里有。Spotify播放器里有一个扬声器图标。</p>
<p><strong>关键是：</strong> 你必须单独找到并导航每个应用的设置。很多应用根本没有这个选项。而且在“静音”和“未静音”之间切换意味着每次都得回到偏好设置里，而不是点击一个按钮。</p>

<h2>真正的解决方案：每个应用设置静音按钮</h2>

<p>你真正想要的其实非常简单：每个应用旁边有一个静音按钮，可以瞬间静音，不影响其他功能。点击静音，再点击解除静音。应用还在运行，你不断看到它的内容——只是你听不到它。</p>

<p>这正是按应用音量混合器所做的。 <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 它会显示在菜单栏，显示每个正在运行的应用，并配有自己的音量滑块和静音按钮。</p>

<img src="/apps/sounddial.png" alt="SoundDial在macOS菜单栏中显示每个应用的静音按钮" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>静音一个应用：</p>
<ol>
  <li>点击菜单栏中的SoundDial图标</li>
  <li>找到你想静音的应用</li>
  <li>点击旁边的扬声器图标</li>
</ol>

<p>就这样。应用被静音了。其他所有声音都一直以原来的音量播放。再次点击扬声器图标解除静音——音量会恢复到之前的状态。</p>

<h2>除了静音：每个应用的音量控制</h2>

<p>一旦你有了每个应用的混合器，你就会意识到静音只是你真正想要的极端效果。大多数时候，你不想完全让一个应用静音——你想让它变得更好 <em>更安静</em>.</p>

<ul>
  <li>Slack通知15%——足够微妙不打扰，足够明显，能引起注意</li>
  <li>音乐30%——背景音量，无法与对话竞争</li>
  <li>浏览器60%——视频播放舒适</li>
  <li>Zoom全开100%——关键通话音量全开</li>
</ul>

<p>SoundDial给每个应用一个从0%到200%的滑块。你可以让应用声音比内置最小值更安静，也可以比内置最大值更响。并且 <strong>体积配置文件</strong>你可以保存你喜欢的配置，只需一次点击即可切换预设——“会议”模式、“焦点”模式、“音乐”模式。</p>

<p>自动闪避功能更进一步：当你开始通话时，除了通讯应用外，SoundDial会自动降低所有功能。通话结束后，所有内容又恢复了。你从不碰滑球。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在Mac应用商店SoundDial</a> — 一次性购买14.99欧元，无订阅，macOS 14.2+。</p>
`,
  },
  "volume-mixer-for-mac": {
    slug: "volume-mixer-for-mac",
    title: "Mac 音量调音器：macOS至今没有的功能",
    description:
      "Windows 自 2006 年起就有音量混合器。以下是为什么macOS至今仍未实现——以及2026年实现Mac应用音量控制的最佳方式。",
    date: "2026-06-01",
    readTime: "9 min read",
    content: `
<p>在任何 Windows 电脑上右键点击扬声器图标，你会看到音量混合器——这是一个显示当前所有应用程序发声的面板，每个应用都有独立的音量滑块。你可以把Spotify调到20%，同时保持Zoom通话的100%。你可以静音Chrome而不碰其他东西。自2006年Windows Vista以来就一直存在。</p>

<p>现在在Mac上做同样的操作。点击菜单栏中的声音图标。你只有一个滑球。就这样。一个滑块，可以同时控制所有功能。每个应用、每一条通知、每一个系统声音——全都锁在一起。</p>

<p>这不是小众抱怨。这是macOS年来最受欢迎的音频功能，而苹果二十年来一直忽视它。</p>

<h2>音量调音台的实际功能</h2>

<p>音量调音台能给你带来的 <strong>每个应用的独立音量控制</strong> 在你的电脑上。每个应用不再只有一个主滑块，而是只有一个滑块。每个滑块只影响该应用的音频输出。</p>

<p>实际操作中情况如下：</p>

<ul>
  <li><strong>Spotify</strong> 25%——背景音乐，音量舒适</li>
  <li><strong>Zoom</strong> 全力以赴——听清会议的每一个字</li>
  <li><strong>松弛</strong> 静音——专注时不会有提示音</li>
  <li><strong>狩猎</strong> 60%时——YouTube视频，音量适中</li>
  <li><strong>系统音效</strong> 10%——细微反馈而不吓到你</li>
</ul>

<p>这些都同时运行，各自音量不同。只换一个，其他都不动。这就是音量调音台的功能，而macOS没有。</p>

<h2>为什么苹果没有制造过这样的系统</h2>

<p>这不是技术上的限制。macOS 的音频框架——Core Audio——完全支持在 API 层面实现每进程的音频路由和音量控制。苹果内部也使用这些功能。只是他们没有向用户展示这些信息。</p>

<p>很可能原因是苹果的设计理念：选项更少，界面更简单。一个滑块比十二个更干净。对于那些一次只做一件事的人来说——听音乐、接电话或看视频——一个滑块就够了。</p>

<p>但2026年人们使用电脑的方式并非如此。远程工作意味着你在通话中同时播放音乐、Slack信号和浏览器标签自动播放视频，这一切都是同时进行的。“一个滑块涵盖所有声音”的模式在五个音频源争夺你的耳朵时完全失效。</p>

<h2>macOS的变通方法（以及它们为何不足）</h2>

<h3>使用每个应用内置的音量控制</h3>
<p>Spotify 有音量滑块。VLC有一个。QuickTime有一个。但这意味着要单独切换到每个应用，找到它的音量控制，调整它，然后切回来。它散落在十几个不同的地方，大多数应用——Slack、Mail、Safari、Chrome——甚至都没有。</p>

<h3>使用“请勿打扰”来静音通知</h3>
<p>对焦模式可以抑制通知音，但它们是二元的——要么全有，要么什么都没有。你不能说“保留Slack声音但让它们更小声”。而且焦点模式根本不影响媒体或通话音量。</p>

<h3>使用音频MIDI设置</h3>
<p>该内置工具管理音频设备和采样率。这和每个应用的使用量无关。它是一个设备配置工具，不是混音器。</p>

<h3>创建多输出设备</h3>
<p>你可以将音频输出合并到聚合设备中，但这会将相同的音频发送到多个输出——不会给你每个应用单独的控制。如果你想同时在扬声器和耳机上同时输出声音，这很有用，但那是完全不同的问题。</p>

<p>这些变通方法都解决不了根本问题：macOS没有内置方式说“让这个应用更安静而不影响其他任何东西”。</p>

<h2>选择Mac音量调音台时该注意什么</h2>

<p>如果苹果不开发，第三方应用会来做。但并非所有音量混音器都一样。以下是好游戏与平庸游戏的区别：</p>

<h3>实时应用检测</h3>
<p>调音台应该会自动检测当前所有正在生成音频的应用。你不应该需要手动添加应用或配置任何东西。打开一个应用，它就出现在混音器里。关上它，它就消失了。</p>

<h3>音量范围超过100%</h3>
<p>有些应用即使音量最大也太安静——比如安静的播客播放器、带有柔和音频的浏览器标签、视频通话时麦克风声音偏低。一个好的调音台能让你做到 <strong>音量提升至200%</strong>，实际上将音频放大到超出应用本身能产生的范围。</p>

<h3>每个应用一键静音</h3>
<p>你应该能用一键静音任何应用——无需移动滑块。解除静音后，它应该会恢复到原来的位置。这对于在通话中快速让嘈杂的应用静音至关重要。</p>

<h3>不同情境的配置文件</h3>
<p>你不想每次从“使用音乐”切换到“视频通话”再到“游戏”时手动调整八个滑块。配置文件可以让你保存卷配置，一键应用。“会议”配置文件可能会把Zoom设置为100%，音乐设置为15%，通知设置为0%。“Focus”配置文件可能会静音除了Spotify以外的所有内容。</p>

<h3>呼叫时自动蹲伏</h3>
<p>音量调音台最棒的功能是：当你加入通话时自动降低背景音频，通话结束时恢复。不需要手动调整。当Zoom激活麦克风时，你的音乐会变小，挂断电话时音乐又会恢复。</p>

<h3>菜单栏集成</h3>
<p>音量调音台应该放在菜单栏里——只需点击即可打开、调整和关闭。它不应该是完整的窗口，不应该占用 Dock 空间，也不应该要求你切换到当前的应用。你应该能调节音量而不失去对手头动作的专注。</p>

<h2>SoundDial：音量调频器macOS应该内置的</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 是一款原生macOS菜单栏应用，完全能为你提供苹果无法提供的——为你Mac上的每个应用单独控制音量。</p>

<p>它会放在菜单栏里，显示每个运行中的应用程序，并配有自己的音量滑块。拖动滑块可以把应用的音量从0%调整到200%。点击扬声器图标即可立即静音。根据不同情况切换保存的配置文件。启用自动低头功能，通话开始时音乐会自动变小。</p>

<img src="/apps/sounddial.png" alt="SoundDial — 每个应用的音量混合器，macOS在菜单栏显示单个应用音量滑块" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>主要特点：</p>
<ul>
  <li><strong>每个应用的音量滑块</strong> —— 每个跑步应用的0%到200%范围</li>
  <li><strong>一键静音</strong> —— 静音任何应用，但不移动滑块</li>
  <li><strong>体积剖面</strong> —— 保存并切换音量配置</li>
  <li><strong>自动蹲伏</strong> ——通话时音乐会自动降低音量</li>
  <li><strong>键盘快捷键</strong> —— 切换混合器或用快捷键静音所有应用</li>
  <li><strong>输出设备切换</strong> — 更换同一面板中的扬声器/耳机</li>
  <li><strong>卷存储器</strong> —— 记住每个应用在重启之间的音量</li>
</ul>

<p>一次性购买。没有订阅。macOS 14.2+。 <a href="https://apps.apple.com/app/sounddial/id6772792641">在Mac应用商店SoundDial</a>.</p>
`,
  },
};
