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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 播客设置——嘉宾音频、监控和通知各自独立" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上以 1% 精度提供精细的独立应用音量控制" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在群聊进行时独立控制 Slack 音量，同时音乐以不同音量播放" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 默认音量设置——新应用以配置的音量级别启动，而不是满音量" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial——独立控制所有 Mac 音频来源的应用音量控制器" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上将 Cisco Webex 通话音量提升到 100% 以上" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上显示两个不同音量级别的音频来源" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 深夜电影设置——流媒体应用适中音量，通知静音" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 Mac 睡眠唤醒周期后保留每个应用的音量级别" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上为音乐制作分离 DAW 输出与 Discord 和参考音轨" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上将 Apple Music 音量提升到 100% 以上" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial——可靠的 Mac 独立应用音量混音器，带配置、自动闪避和 200% 提升" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上以不同音量级别平衡 Spotify 和 Discord" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial——macOS 的独立应用音量控制、配置、自动闪避和 200% 提升" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial在系统层面提升VLC音量macOS以获得安静的视频文件" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial可配置的自动蹲下——精确控制通话时背景音频的降低程度" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial Mac上蓝牙耳机的应用音量调节，每个应用都有滑块调节到200%" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial平衡游戏、Discord和音乐音量，用于OBS流媒体Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 音量内存——自动记住并恢复每个应用的音量水平macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial将Apple Podcast的音量调高到180%，用于安静的播客Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial学生设置——讲座音量开到最大，学习音乐调低，通知静音" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial静音所有快捷方式——Control+Option+M，通过音量恢复静音和取消静音所有应用" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial macOS 上将 Google Meet（Chrome）音量提升到 100% 以上" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial通知应用音量和媒体应用音量分开macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial在macOS上将FaceTime通话音量提升到100%以上" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 键盘快捷键 — Control+Option+S 切换，Control+Option+M 静音所有" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 一种不安装虚拟音频设备的背景音乐替代方案" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 一款更轻盈、聚焦的SoundSource替代品，支持音量曲线和自动低头功能" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial每个应用的细粒度音量控制，macOS 上有 1% 的增量" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial在Mac上将Netflix音频提升到180%，以实现更清晰的对话和流媒体音频" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial远程工作音频设置——Zoom、Spotify 和 Slack 在macOS上提供不同音量级别" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial独立于macOS上的其他应用控制浏览器音量" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial独立控制Discord音量，不依赖游戏和音乐macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial在一个菜单栏面板中实现了音频输出设备切换和每个应用的音量控制" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial Microsoft Teams 通话量提升到 100% 以上macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial Slack静音，Spotify 正常音量播放 macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial音量配置文件——一键切换会议、专注和放松模式macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial将Zoom通话音量调高到180%，Mac视频通话时音频更清晰" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial独立降低Spotify音量，同时保持其他应用开满音量macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial在macOS Tahoe上提供每个应用的音量控制" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial显示Zoom开到最大音量，Spotify在通话中调低了音量macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial记住每个应用在重启时的音量水平macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial每个应用的音量混合器，显示每个应用的音量滑块macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial把Safari浏览器音量调到180%，用于播放安静的YouTube视频Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial显示Slack音量较低，Spotify音量正常——macOS独立控制通知" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 自动低身设置——Zoom 通话时可配置音量降低Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial Mac 上 AirPods 的应用音量提升，每个应用的音量滑块最高可达 200%" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial把Spotify音量调到200%，同时macOS其他应用保持正常音量" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial在macOS上显示游戏和Discord的独立音量滑块" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — macOS音量调音器，菜单栏显示每个应用的音量滑块" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 音量提升——每个应用的音量控制，macOS 200% 放大" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial自动低头功能，在Mac Zoom通话时自动降低音乐音量" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial在macOS菜单栏中显示每个应用的静音按钮" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 每个应用的音量混合器，macOS在菜单栏显示单个应用音量滑块" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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
  "background-music-alternative-mac": {
    slug: "background-music-alternative-mac",
    title: "Mac 上最好的 Background Music 替代方案（2026）",
    description: "Background Music 在较新的 macOS 上失效了？最可靠的单应用音量调节替代方案是 SoundDial——一款来自 Mac App Store、带增益和配置文件的沙盒化应用。",
    date: "2026-07-23",
    readTime: "5 分钟阅读",
    content: `<p>如果 Background Music 在某次 macOS 更新后停止工作，最可靠的替代方案是 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>——一款来自 Mac App Store 的菜单栏单应用音量调节器。它为每个应用提供独立的音量滑块，并加入了静音、增益、音量配置文件和自动闪避功能，而且完全沙盒化、经过 Apple 审核，因此不会有音频驱动在下一个 macOS 版本中出问题。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac 上最好的 Background Music 替代方案（2026）" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>为什么 Background Music 在较新的 macOS 上会失效</h2>

<p>Background Music 是一个真正巧妙的免费开源项目。它为 Mac 用户提供了 Apple 从未提供的东西：单应用音量调节器，也就是 Windows 多年来一直拥有的那种。但它的设计方式也正是它不断失效的原因。</p>

<p>为了路由和控制音频，Background Music 会安装一个虚拟音频设备——一个拦截你 Mac 声音的系统级驱动。这种方式在较旧的 macOS 上运行良好，但每个大版本都会收紧对内核与音频扩展的安全限制。用户报告的常见症状包括：</p>

<ul>
<li>安装后或系统更新后完全没有声音。</li>
<li>虚拟设备加载失败，导致音频路由无声地停止。</li>
<li>需要重新安装、重启或手动移除驱动才能恢复。</li>
<li>开发由社区驱动、按志愿者节奏推进，因此针对新 macOS 的修复可能会滞后。</li>
</ul>

<p>这些都不代表 Background Music 是「差」的。它只是说明，一个基于驱动的免费工具天生脆弱，如果你每天都依赖单应用音量，这种脆弱很快就会让人厌烦。</p>

<h2>在替代品中应该关注什么</h2>

<p>在挑选任何替代方案之前，先想清楚你真正需要什么：</p>

<ul>
<li><strong>跨 macOS 更新的可靠性。</strong>如果它安装内核或音频扩展，就要预料到偶尔会出问题。</li>
<li><strong>真正的单应用控制。</strong>每个应用独立的音量和静音是基础。</li>
<li><strong>增益。</strong>有些应用（安静的会议工具、某些浏览器）实在太小声——你需要能推过 100%。</li>
<li><strong>便利功能。</strong>配置文件和自动闪避正是让一个工具从实用变成你整天都开着的东西。</li>
<li><strong>安全安装。</strong>沙盒化的 Mac App Store 应用无法触及系统内部，因此卸载干净、更新自动。</li>
</ul>

<h2>为什么 SoundDial 是可靠之选</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 正是为了解决 Background Music 用户遇到的问题而打造的：他们想要单应用音量，但不想照看一个驱动。它常驻在你的菜单栏，把核心工作做得很好：</p>

<ul>
<li><strong>为每个应用提供独立音量</strong>，并在同一面板中支持单应用静音。</li>
<li><strong>单应用增益</strong>，让安静的应用足够响亮，真正能听清。</li>
<li><strong>音量配置文件</strong>——保存一套混音（例如「会议」或「游戏」），瞬间切换，而不用每次拖动滑块。</li>
<li><strong>自动闪避</strong>，让背景音频在应该降低时自动降低。</li>
<li><strong>快速输出切换</strong>，在扬声器、耳机和其他设备之间切换。</li>
</ul>

<p>更大的区别在于它的安装方式。SoundDial 通过 Mac App Store 发布，这意味着它经过 Apple 审核并沙盒化。没有 DMG 需要拖动，没有音频驱动或系统扩展，也没有内核访问。这就是它不会像 Background Music 那样在新 macOS 到来时失效的最重要原因——它并没有接入 Apple 一直在锁紧的那些系统部分。</p>

<p>它的价格是<strong>一次性 €14.99</strong>。虽然不免费，但没有订阅，你付的是一个经过维护、可以安全安装的东西。</p>

<h2>SoundDial 对比 Background Music 及各免费工具</h2>

<p>Background Music 并非你唯一的免费选择，因此这里给出一个诚实的全景：</p>

<ul>
<li><strong>Background Music（免费、开源）：</strong>提供单应用音量，但基于驱动，在较新 macOS 上容易失效，且缺少增益、配置文件和自动闪避。</li>
<li><strong>FineTune（免费、开源）：</strong>一款轻量的菜单栏单应用音量应用。如果免费是你唯一的要求，它很不错，但附加功能较少。</li>
<li><strong>eqMac（免费）：</strong>主要是系统 EQ 和增益器，而非真正的单应用调节器。</li>
<li><strong>Rogue Amoeba 的 SoundSource（约 $39）：</strong>专业级选项，带单应用 EQ 和完整输出路由。非常出色，但价格是 SoundDial 的两倍多，而且仍需下载外加一个音频采集驱动。</li>
<li><strong>SoundDial（€14.99，Mac App Store）：</strong>折中之选——真正的单应用音量、静音、增益、配置文件和闪避，以干净的沙盒化安装交付，无需驱动。</li>
</ul>

<p>如果你需要单应用 EQ 或复杂的录音室路由，SoundSource 值这个价。如果你想要一个免费的折腾工具并能忍受偶尔失效，FineTune 或 Background Music 都可以。但如果你的目标是「让每个应用都有自己的音量，并且不再每次 macOS 更新都坏掉」，SoundDial 能以最少的麻烦命中这个目标。</p>

<h2>让这一切变得必要的 macOS 背景</h2>

<p>有必要直说：macOS 没有内置的单应用音量调节器。Windows 在其音量弹窗里已经拥有多年，但在 Mac 上系统滑块一次控制所有声音。这个空缺正是 Background Music 和 SoundDial 之类工具存在的全部原因。既然 Apple 不填补它，实际的问题就只是你信任哪种第三方方案——一个与系统对抗的免费驱动，还是一个与系统协作的沙盒化应用。</p>

<p>准备好不再与坏掉的音频驱动搏斗了吗？以 €14.99 在 <a href="https://apps.apple.com/app/id6772792641">Mac App Store 上获取 SoundDial</a>，用可靠的方式控制每个应用的音量。</p>`,
  },
  "soundsource-vs-sounddial-mac": {
    slug: "soundsource-vs-sounddial-mac",
    title: "SoundSource 对比 SoundDial：哪款 Mac 音量应用胜出？",
    description: "SoundSource（$39，专业级）对比 SoundDial（€14.99，App Store）。比较单应用音量、增益、配置文件和自动闪避，为你挑选合适的 Mac 混音器。",
    date: "2026-07-23",
    readTime: "6 分钟阅读",
    content: `<p>如果你只是想要能干净安装、价格更低的单应用音量控制，对大多数人来说 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 是更划算的选择：一次性 €14.99，来自 Mac App Store，带单应用音量、静音、增益、配置文件和自动闪避。只有在你确实需要单应用 EQ 和高级输出路由时，才选 Rogue Amoeba 的 SoundSource（约 $39）。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — SoundSource 对比 SoundDial：哪款 Mac 音量应用胜出？" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>简短版</h2>
<p>macOS 仍然没有内置的单应用音量调节器。Windows 已经拥有多年，但在 Mac 上系统音量滑块一次移动所有声音。SoundSource 和 SoundDial 都是为填补这个空缺而存在的，它们只是面向不同的买家。</p>
<ul>
<li><strong>SoundDial</strong>——一次性 €14.99，Mac App Store，菜单栏应用。每个应用独立音量、单应用静音、单应用增益、保存的配置文件、自动闪避以及快速输出切换。沙盒化并经 Apple 审核，因此无需安装驱动。</li>
<li><strong>SoundSource</strong>——约 $39，从 Rogue Amoeba 直接下载。包含以上全部，再加上单应用 EQ、高级输出路由和音频效果。需要安装一个小型音频采集驱动。</li>
</ul>

<h2>价格与购买方式</h2>
<p>这是最清晰的分野。SoundSource 大约 $39，由 Rogue Amoeba 直接销售。SoundDial 在 Mac App Store 上一次性 €14.99——大约是前者价格的三分之一多一点。</p>
<p>由于 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 通过 App Store 发布，它是沙盒化、经过公证并由 Apple 审核的。你点击「获取」，它就安装完成。没有 DMG 要装载，没有需要授予内核相邻组件的权限，也没有音频驱动或系统扩展。它还会随你正常的 App Store 更新流程一同更新，并在同一 Apple ID 下同步到你的其他 Mac。</p>
<p>SoundSource 在 App Store 之外下载，并安装一个音频采集驱动，以便拦截并处理每个应用的音频。这正是它解锁专业功能的方式，但也意味着多一个安装步骤，以及一个更深入系统的组件。</p>

<h2>SoundSource 能做而 SoundDial 不能做的</h2>
<p>SoundSource 对某一类特定用户来说物有所值。如果以下任何一项符合你，它就值这份额外的钱：</p>
<ul>
<li><strong>单应用 EQ。</strong>你想给某个应用（比如 Spotify）加上 10 段均衡器，同时让 Zoom 保持平直。SoundDial 做的是音量，不是 EQ。</li>
<li><strong>高级输出路由。</strong>把一个应用送到扬声器，另一个送到耳机或特定接口，并做精细控制。</li>
<li><strong>音频效果和插件。</strong>SoundSource 可以按应用挂载效果——这才是真正的专业领域。</li>
</ul>
<p>Rogue Amoeba 拥有长期、可信的口碑。SoundSource 是一款严肃的工具，定价也与之相称。如果你是音频专业人士或重度多输出用户，选它是对的。</p>

<h2>在日常使用中 SoundDial 做得更好的地方</h2>
<p>大多数搜索「Mac 音量调节器」的人并不需要 EQ。他们需要让一个应用比另一个更小声，而且不想为此和安装程序搏斗。SoundDial 干净地覆盖了这一点，还加入了几个值得一提的东西：</p>
<ul>
<li><strong>单应用增益。</strong>有些应用和视频即使在 100% 时也太小声。SoundDial 可以把单个应用推到其正常上限之上，让一场安静的会议或播客终于能听清。</li>
<li><strong>音量配置文件。</strong>保存一整套设置——音乐调低、浏览器静音、通话应用调响——并瞬间调用。非常适合在「专注」「会议」和「游戏」之间切换，而不用拖动五个滑块。</li>
<li><strong>自动闪避。</strong>当另一个音源开始时自动降低背景音频（如音乐），让通知、通话或视频不被淹没。</li>
<li><strong>快速输出切换。</strong>在菜单栏中于扬声器、耳机和其他设备之间跳转。</li>
</ul>
<p>所有这些都在一个菜单栏下拉中运行，一点即达，其余时间不打扰你。</p>

<h2>简要说说免费替代品</h2>
<p>你会在同样的搜索里看到几个免费选项，它们值得了解：</p>
<ul>
<li><strong>Background Music</strong>——免费开源，提供基本的单应用音量。但它可能在较新的 macOS 版本上失效，而且没有增益、配置文件或自动闪避。</li>
<li><strong>FineTune</strong>——一款免费开源的菜单栏音量应用。简单，但功能范围有限。</li>
<li><strong>eqMac</strong>——免费的 EQ 和系统增益器，更像是一个系统级 EQ 工具，而非真正的单应用调节器。</li>
</ul>
<p>如果免费对你可行，那当然很好。代价是兼容性与支持：开源音频工具可能落后于 macOS 更新，而配置文件和闪避这类功能通常没有。如果你的设置对工作日很重要，一次性为一个经过审核和维护的东西付费，通常是更省心的路径。</p>

<h2>你应该买哪一个？</h2>
<p>回答一个问题：你需要单应用 EQ 或高级输出路由吗？</p>
<ul>
<li><strong>需要</strong>——买 SoundSource。它就是为此打造的，约 $39 对一个带驱动级引擎的专业工具来说很公道。</li>
<li><strong>不需要，我只想要单应用音量、增益和干净的安装</strong>——买 SoundDial。你能获得日常真正重要的混音，加上配置文件和自动闪避，只需 €14.99，且完全没有驱动麻烦。</li>
</ul>
<p>对绝大多数 Mac 用户来说，第二类才是诚实的答案。你付的是对音量的控制，而不是一间录音室。</p>

<p><strong>准备好用轻松的方式搞定 Mac 音量了吗？</strong>在 <a href="https://apps.apple.com/app/id6772792641">Mac App Store 上获取 SoundDial</a>——一次性 €14.99，无驱动，无 DMG。单应用音量、增益、配置文件和自动闪避，一键搞定。</p>`,
  },
  "cheaper-soundsource-alternative-mac": {
    slug: "cheaper-soundsource-alternative-mac",
    title: "更便宜的 SoundSource 替代方案，实现 Mac 单应用音量",
    description: "想要 SoundSource 那样的单应用音量，又不想花 $39？SoundDial 是一款 €14.99 的 Mac App Store 菜单栏混音器，带增益、配置文件和自动闪避。",
    date: "2026-07-23",
    readTime: "5 分钟阅读",
    content: `<p>如果你想在 Mac 上获得 SoundSource 那样的单应用音量控制，但觉得 $39 太贵，最快且可靠的解决办法是 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>。它是一款来自 Mac App Store、一次性 €14.99 的菜单栏混音器，为每个应用提供独立的音量滑块、静音和增益——外加配置文件与自动闪避——且无需下载或安装任何音频驱动。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 更便宜的 SoundSource 替代方案，实现 Mac 单应用音量" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>人们为什么寻找 SoundSource 替代品</h2>
<p>Rogue Amoeba 的 SoundSource 是优秀的软件。它确实是专业级的：单应用均衡器、音频效果，以及可以把一个应用送到耳机、另一个送到扬声器的输出路由。但这份强大伴随两个摩擦点。第一是价格——约 $39。第二是它会在 App Store 之外安装一个系统级的音频采集驱动，有些人在工作机上对此比较谨慎，或者干脆不想在 macOS 更新之间管理它。</p>
<p>对大多数人来说，真正的需求要简单得多：在不影响 Zoom 通话的情况下把 Spotify 调低，把某个吵闹浏览器标签页的应用静音，或者把一个安静的视频播放器推过 100%。如果这就是你，那你是在为永远不会打开的功能付专业级的钱。</p>

<h2>SoundDial 做什么——以及它的价格</h2>
<p>SoundDial 专注于单应用音量这件事，并把它做得很干净。打开菜单栏，你会看到一个实时列表，列出所有正在发声的应用，每个都有自己的控制：</p>
<ul>
<li><strong>每个应用独立音量</strong>——每个应用一个滑块，实时调节。</li>
<li><strong>单应用静音</strong>——瞬间让一个应用静音，而不暂停其他任何东西。</li>
<li><strong>单应用音量增益</strong>——当视频或通话太轻时，把安静的应用推过其正常上限。</li>
<li><strong>音量配置文件</strong>——保存一套混音（如「专注」「游戏」「会议」），一键切换。</li>
<li><strong>自动闪避</strong>——当更重要的内容开始播放时，自动降低其他应用。</li>
<li><strong>快速输出切换</strong>——在同一菜单中于扬声器、耳机和其他设备之间跳转。</li>
</ul>
<p>价格是<strong>一次性 €14.99</strong>——没有订阅。这大约是 SoundSource 成本的三分之一，换来大多数用户真正会用到的音量功能。</p>

<h2>App Store 带来的区别</h2>
<p>由于 SoundDial 通过 <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a> 发布，它经过 Apple 审核并沙盒化。没有 DMG 要拖动，没有内核扩展或音频采集驱动要批准，也没有单独的更新器。你像安装任何其他 App Store 应用一样安装它，它就能用。当 macOS 更新时，你不必担心某个底层音频组件是否还能正常工作。</p>
<blockquote>macOS 仍然没有内置的单应用音量调节器。Windows 已经拥有多年，但在 Mac 上系统音量是全有或全无——这正是这些工具填补的空缺。</blockquote>

<h2>它与免费选项的对比</h2>
<p>SoundSource 并不是你唯一的替代方案。还有一些免费工具，诚实地看待它们很重要：</p>
<ul>
<li><strong>Background Music</strong> 是一款免费开源的单应用音量应用。对很多人有用，但它可能在较新的 macOS 版本上失效，更新不规律，而且没有增益、没有配置文件、没有自动闪避。</li>
<li><strong>FineTune</strong> 是一款免费开源的菜单栏音量应用——轻量方便，但同样缺少配置文件和闪避功能。</li>
<li><strong>eqMac</strong> 是一款免费的 EQ 和系统增益器。它更像是均衡器/增益工具，而非真正的单应用调节器，也不专注于单个应用的滑块。</li>
</ul>
<p>免费是合理的选择。代价是可靠性和功能：开源音频工具依赖志愿者维护，可能落后于 macOS 的变化，而且没有一个免费选项像 SoundDial 那样把配置文件加自动闪避打包在一起。如果你的设置很简单，且不介意偶尔失效，一个免费应用也许就够了。如果你想要一个经过维护、沙盒化、能直接用的东西，这 €14.99 买到的正是它。</p>

<h2>快速决策指南</h2>
<ul>
<li><strong>你需要单应用 EQ、音频效果，以及把一个应用路由到不同的输出设备</strong> → SoundSource 值它的价。这里没有任何东西能完全替代它。</li>
<li><strong>你主要需要单应用音量、静音、增益、配置文件和闪避——且不要驱动</strong> → €14.99 的 SoundDial 是更划算的选择。</li>
<li><strong>你想要免费且不介意维护风险</strong> → 先试试 Background Music、FineTune 或 eqMac。</li>
</ul>

<h2>设置它</h2>
<p>上手大约只需一分钟：</p>
<ul>
<li>从 Mac App Store 安装 SoundDial——无需外部下载。</li>
<li>在首次启动时授予 macOS 提示的音频权限。</li>
<li>在几个应用里播放声音，然后打开菜单栏图标；你会看到每个应用都有自己的滑块。</li>
<li>拖动设定音量、点击静音，或推过 100% 进行增益。</li>
<li>把你的设置保存为配置文件，如果你希望其他应用在通话或媒体播放时安静下来，就开启自动闪避。</li>
</ul>
<p>这就是整个流程——没有配置文件要编辑，无需重启，也没有系统扩展要批准。</p>

<h2>结论</h2>
<p>SoundSource 是更强大的工具，但大多数寻找它的人其实只想要表现正常的单应用音量。SoundDial 以大约三分之一的价格实现了这一点，通过 App Store 安全交付，并在此之上加入了配置文件和自动闪避——而且不需要安装任何一个驱动。</p>

<p>准备好独立控制每个应用的音量了吗？以一次性 €14.99 <a href="https://apps.apple.com/app/id6772792641">在 Mac App Store 上获取 SoundDial</a>。</p>`,
  },
  "finetune-alternative-mac": {
    slug: "finetune-alternative-mac",
    title: "Mac 上的 FineTune 替代方案：一款受支持的单应用音量混音器",
    description: "试过免费的 FineTune 菜单栏应用，想要一个经过维护、App Store 安全的版本？这里是 Mac 上最好的 FineTune 单应用音量替代方案。",
    date: "2026-07-23",
    readTime: "5 分钟阅读",
    content: `<p>如果你喜欢 FineTune，但想要一个持续维护、从可信来源安装的东西，<a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 是最快且可靠的选择。它是一款 Mac App Store 的菜单栏单应用音量混音器，具备独立音量、单应用静音、音量增益、保存的配置文件和自动闪避。经 Apple 审核并沙盒化，一次性 €14.99，无需安装任何驱动。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac 上的 FineTune 替代方案：一款受支持的单应用音量混音器" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>为什么要找 FineTune 的替代方案？</h2>

<p>FineTune 是个不错的点子：一款免费开源的菜单栏应用，为 macOS 提供单应用音量控制，而这正是 Apple 至今仍拒绝内置的东西（Windows 已经拥有单应用调节器很多年了）。对很多人来说，它能完成基本任务。但用户去寻找别的东西确实有真实的理由。</p>

<ul>
<li><strong>维护不确定。</strong>开源业余项目的存亡取决于单个维护者的空闲时间。当 macOS 推出大版本更新时，音频相关应用往往最先出问题，而你只能等一个可能永远不会到来的志愿者修复。</li>
<li><strong>功能上限。</strong>FineTune 只涵盖单应用音量，几乎没别的。如果你想要超过 100% 的增益、保存的配置文件或自动闪避，就得再拼凑其他工具。</li>
<li><strong>信任与更新。</strong>在 App Store 之外安装一个原始构建，意味着没有自动审核、没有沙盒保证，还有你得自己追踪的手动更新。</li>
</ul>

<p>这些都不代表 FineTune 差。只是说明，如果你每天都依赖单应用音频，你大概会想要一个背后有支持模式的东西。</p>

<h2>SoundDial 有何不同</h2>

<p>SoundDial 从同样的核心理念出发——一个为每个运行中应用提供滑块的菜单栏混音器——然后用高级用户真正需要的功能更进一步。</p>

<ul>
<li><strong>每个应用独立音量。</strong>把 Spotify 调低、让通话保持满音量、把吵闹浏览器标签页的应用彻底静音，都在一个菜单里完成。</li>
<li><strong>单应用音量增益。</strong>当播客或视频母带做得太轻时，把安静的应用推过其正常上限。FineTune 做不到这一点。</li>
<li><strong>音量配置文件。</strong>保存一套混音——「专注」「游戏」「会议」——一键切换整套设置，而不用一个个拨动五个滑块。</li>
<li><strong>自动闪避。</strong>当更重要的内容开始播放时自动降低背景音频，让通话进来时音乐自动降低。</li>
<li><strong>快速输出切换。</strong>在扬声器、耳机和其他输出之间跳转，无需进入系统设置。</li>
</ul>

<p>由于 <a href="https://apps.apple.com/app/id6772792641">SoundDial 通过 Mac App Store 发布</a>，它经 Apple 审核并沙盒化，安装干净，并通过与其他所有 App Store 应用相同的机制更新。没有 DMG 要拖动，没有音频驱动或系统扩展，也没有要求你允许内核级组件的安全提示。</p>

<h2>SoundDial 对比 FineTune 及其他免费工具</h2>

<p>FineTune 并非唯一的免费选项，诚实地看清整个格局会有帮助。</p>

<ul>
<li><strong>FineTune</strong>——免费、开源的菜单栏单应用音量。简单轻量，但没有增益、没有配置文件、没有闪避，维护也依赖社区。</li>
<li><strong>Background Music</strong>——免费开源，可路由并调节单应用音频。确实有用，但可能在较新的 macOS 版本上失效，且缺少增益、配置文件和闪避。</li>
<li><strong>eqMac</strong>——免费的 EQ 和系统增益器。如果你主要想要均衡器，它很棒，但它不是单应用混音器。</li>
<li><strong>SoundSource（Rogue Amoeba）</strong>——约 $39 的专业级选项，带单应用 EQ 和输出路由。非常出色，但需要下载外加一个音频采集驱动，而且价格是两倍多。</li>
<li><strong>SoundDial</strong>——一次性 €14.99，App Store 安全，无驱动。在单应用音量基础上加入增益、配置文件和自动闪避。</li>
</ul>

<p>诚实的总结：如果你想要绝对最便宜的东西，且只需要基本的单应用音量，免费工具可以胜任。如果你想要单应用 EQ 和路由，且不介意付费并安装驱动，SoundSource 是重量级选手。SoundDial 处在最佳平衡点——比免费应用更强大，比 SoundSource 便宜得多，而且比两者都更安全，因为 Apple 会审核并沙盒化它。</p>

<h2>从 FineTune 迁移过来</h2>

<p>切换只需几分钟，也没有什么清理仪式。</p>

<ul>
<li>从 Mac App Store 安装 SoundDial。没有安装程序，没有驱动批准，无需重启。</li>
<li>点击菜单栏中的 SoundDial 图标，即可看到每个运行中应用的滑块。</li>
<li>设置好你的日常混音，然后保存为配置文件，以便随时调用。</li>
<li>可选择开启自动闪避，让背景音频为通话和提醒让路。</li>
<li>满意后退出 FineTune。由于两款应用都不安装系统驱动，没有任何残留需要卸载。</li>
</ul>

<p>你保留了自己喜欢 FineTune 的那点——一个 Apple 从未给你的干净菜单栏混音器——并获得了增益、配置文件、闪避，以及一款经过维护的 App Store 应用所提供的长期支持。</p>

<h2>结论</h2>

<p>FineTune 证明了这个概念：单应用音量属于菜单栏。SoundDial 就是这个概念在拥有真实支持模式、更多功能和 App Store 安全性之后的样子，只需一次性 €14.99，而不是押注在志愿者维护上。</p>

<p>准备好换一个能持续维护的单应用混音器了吗？<a href="https://apps.apple.com/app/id6772792641">在 Mac App Store 上获取 SoundDial</a>，几秒内即可控制每个应用的音量。</p>`,
  },
  "eqmac-alternative-per-app-volume-mac": {
    slug: "eqmac-alternative-per-app-volume-mac",
    title: "Mac 上实现真正单应用音量的 eqMac 替代方案",
    description: "喜欢 eqMac 的增益，但需要真正的单应用音量、静音和配置文件？SoundDial 是最快的 Mac App Store 解决方案——€14.99，沙盒化，无驱动。",
    date: "2026-07-23",
    readTime: "5 分钟阅读",
    content: `<p>如果你用 eqMac 是看中它的 EQ 和音量增益器，但其实真正想要的是每个应用的独立音量——外加静音、增益和保存的配置文件——最快且可靠的解决办法是 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>。它是一款 Mac App Store 的菜单栏混音器：为每个应用设置一个音量、把安静的调响，并瞬间切换配置文件。一次性 €14.99，沙盒化，无需安装驱动。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac 上实现真正单应用音量的 eqMac 替代方案" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>eqMac 对比你真正需要的东西</h2>

<p>eqMac 是一款可靠的免费工具，它的系统级均衡器和音量增益器确实有用。但 eqMac 是围绕一个主 EQ 和一个主输出构建的。它并不提供真正的单应用音量调节器——那正是 Windows 拥有多年而 macOS 至今仍未原生提供的东西。</p>

<p>所以如果你真正的问题是「我在通话时 Spotify 太响」或「这个游戏震得我耳朵疼但其他一切都正常」，eqMac 就不是干这活的合适形状。你最终会去拨那个单一的主滑块，或者摆弄每个应用的内部音量。这就是 SoundDial 填补的空缺。</p>

<h2>SoundDial 能做而 eqMac 不能做的</h2>

<ul>
<li><strong>每个应用独立音量</strong>——音乐 40%、浏览器 100%、视频通话 70%，同时进行，且都被记住。</li>
<li><strong>单应用静音</strong>——瞬间让一个吵闹的应用静音，而不碰其他任何东西。</li>
<li><strong>单应用增益</strong>——像 eqMac 的增益器那样把安静的应用推过其正常上限，但针对单个应用，而非整个系统。</li>
<li><strong>音量配置文件</strong>——保存「专注」「游戏」或「会议」等设置，一键切换整套混音。</li>
<li><strong>自动闪避</strong>——当更重要的内容开始时自动降低背景音频，让你不必在通话中途手忙脚乱地找滑块。</li>
<li><strong>快速输出切换</strong>——在菜单栏中于扬声器、耳机和其他输出之间跳转。</li>
</ul>

<p>与 eqMac 的重叠基本上就是增益。其余的一切——混音器、静音、配置文件、闪避——都是 eqMac 从未打算涵盖的领域。</p>

<h2>你还想要 EQ 吗？</h2>

<p>诚实面对你要解决的是哪个问题。如果你确实需要频率 EQ——削减低音、驯服刺耳的高音、塑造整个系统的音色——那 eqMac 仍有一席之地，而且它免费。SoundDial 是音量混音器，不是均衡器。</p>

<p>但大多数人用 eqMac 的增益器不是因为想塑造频率，而是想让一个应用更响或让混音更平衡。如果这就是你，专用的混音器是更干净的答案。你甚至可以两个一起用：用 eqMac 做系统级 EQ 曲线，用 SoundDial 做单应用音量。它们不会争抢同一份工作。</p>

<h2>它与其他 Mac 音频工具的对比</h2>

<p>既然你已经在找工具，这里给出诚实的格局：</p>

<ul>
<li><strong>SoundSource（Rogue Amoeba）</strong>——约 $39 的专业级选项，带单应用 EQ 和完整输出路由。强大，但需要直接下载并安装一个音频采集驱动。如果你只想要带配置文件的单应用音量，它就显得过头且更贵。</li>
<li><strong>Background Music</strong>——免费开源，但可能在较新的 macOS 版本上失效，且没有增益、没有配置文件、没有自动闪避。能用时很棒，不能用时很烦。</li>
<li><strong>FineTune</strong>——一款免费开源的菜单栏应用。如果 $0 是硬性要求，值得一看，不过功能和打磨都更轻。</li>
<li><strong>eqMac</strong>——免费的 EQ 加增益器，但如上所述没有真正的单应用混音器。</li>
</ul>

<p>SoundDial 处在最佳平衡点：比 SoundSource 更专注也更便宜，比免费选项更强大也更可靠，并且能做 eqMac 做不到的单应用工作。</p>

<h2>为什么 Mac App Store 在这里很重要</h2>

<p>这些工具中有几个需要直接下载，并安装一个内核级或采集音频驱动。它们能用，但正是这类东西可能在 macOS 更新时出岔子，或在受管控的工作 Mac 上失效。</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 则通过 Mac App Store 发布。这意味着它经 Apple 审核并沙盒化，安装干净、没有 DMG 要拖动，也没有音频驱动或系统扩展要批准。更新像任何其他应用一样通过 App Store 到达，卸载就是普通的删除。对一个会触及你音频的菜单栏工具来说，这条更低摩擦、更低风险的路径很有价值。</p>

<h2>快速设置</h2>

<ul>
<li>从 Mac App Store 安装 SoundDial——无需重启，无驱动提示。</li>
<li>打开菜单栏图标；每个当前正在发声的应用都会以自己的滑块出现。</li>
<li>设置音量、静音不需要的，把太安静的调响。</li>
<li>把这套安排保存为配置文件，再为游戏、通话或专注创建更多。</li>
<li>开启自动闪避，让背景音频自动让路。</li>
</ul>

<p>这就是整个循环。几分钟内，你就拥有了 eqMac 的增益器只是隐约暗示过的单应用控制。</p>

<p><strong>准备好在 Mac 上实现真正的单应用音量了吗？</strong><a href="https://apps.apple.com/app/id6772792641">在 Mac App Store 上获取 SoundDial</a>——一次性 €14.99，沙盒化，无驱动，把一个菜单栏混音器该做的事都做到位。</p>`,
  },
  "cheapest-volume-mixer-mac-2026": {
    slug: "cheapest-volume-mixer-mac-2026",
    title: "2026 年 Mac 上最便宜的好用音量混音器",
    description: "在寻找 2026 年 Mac 上最便宜的好用单应用音量混音器？从价格、安全性和功能对比 SoundDial、SoundSource、Background Music、FineTune 和 eqMac。",
    date: "2026-07-23",
    readTime: "6 分钟阅读",
    content: `<p>2026 年 Mac 上最超值的单应用音量混音器是 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>，一款 Mac App Store 上一次性 €14.99 的菜单栏应用。它为每个应用提供独立的音量滑块，外加静音、增益、配置文件和自动闪避——无驱动、无订阅，也没有有风险的下载。它是真正能可靠工作的最便宜付费选项。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 2026 年 Mac 上最便宜的好用音量混音器" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>为什么「最便宜」需要一个定义</h2>
<p>Mac 上有免费的音量工具，所以如果唯一目标是零花费，你有的是选择。但免费通常会在别处向你收费：在新 macOS 版本上的脆弱、缺失像增益或配置文件这样的功能，或者一个需要你去信任的音频采集驱动的安装过程。「最便宜的好用」指的是仍能给你一个稳定、功能齐全、会一直用下去的混音器的最低价格。我们将用这个视角来看。</p>

<h2>首先，macOS 做不到的那件事</h2>
<p>Windows 拥有单应用音量混音器已经多年——右键点击扬声器图标即可为每个应用独立设置。macOS 至今仍没有等价的内置功能。你只有一个主音量，加上某个应用碰巧自带的内部滑块（Music、部分浏览器）。没有系统级的方法让 Slack 比 Spotify 更安静，或把一场安静的视频通话增益到高过一切。下面每个选项的存在，都是为了填补这个空缺。</p>

<h2>诚实定价的竞争者</h2>

<h2>SoundDial——€14.99，一次性</h2>
<p>SoundDial 常驻在你的菜单栏，为每个运行中的应用提供一个独立的音量滑块。除了基础之外，它还加入了人们真正会用的功能：</p>
<ul>
<li><strong>单应用增益</strong>——把太安静的应用推过 100%，而不是费力去听。</li>
<li><strong>单应用静音</strong>——让一个应用静音而不碰其余。</li>
<li><strong>音量配置文件</strong>——保存「工作通话」或「电影之夜」混音并瞬间调用。</li>
<li><strong>自动闪避</strong>——当更重要的内容播放时自动降低背景音频。</li>
<li><strong>快速输出切换</strong>——在同一菜单中于扬声器、耳机和其他设备之间跳转。</li>
</ul>
<p>由于它在 Mac App Store 上，它是沙盒化、经 Apple 审核并干净安装的——没有 DMG、没有内核扩展、没有要批准的音频驱动。你<a href="https://apps.apple.com/app/id6772792641">一次性支付 €14.99</a> 即拥有它。对大多数人来说，这就是最佳平衡点：便宜到很容易点头，完整到你不会用腻。</p>

<h2>SoundSource——约 $39，专业选项</h2>
<p>Rogue Amoeba 的 SoundSource 是高级用户的黄金标准。它像 SoundDial 一样做单应用音量和静音，但更进一步，带单应用均衡器和完整输出路由（把一个应用送到耳机、另一个送到扬声器）。它确实优秀——但价格约 $39，而且在 App Store 之外安装，带一个你必须授予权限的音频采集组件。如果你需要单应用 EQ 或复杂路由，它值这个价。如果你只想要一个干净又便宜的混音器，你是在为可能永远不会碰的功能付费。</p>

<h2>Background Music——免费、开源</h2>
<p>Background Music 是一款知名的免费开源应用，提供单应用音量和自动暂停。问题在于：它通过一个虚拟驱动深入挂钩到 Core Audio，并且长期以来在新 macOS 版本上有失效的历史，更新后有时需要手动修复或重新安装。它也缺少增益、保存的配置文件和自动闪避。适合不介意维护的折腾者；如果你只想让它能用，就会很烦。</p>

<h2>FineTune——免费、菜单栏</h2>
<p>FineTune 是一款免费开源的菜单栏音量应用。它轻量又讨喜，对简单的单应用调节来说可能就够了。但作为一个小型免费项目，它在功能深度上不及——没有配置文件、没有自动闪避，增益/输出处理也有限。零成本，在寿命和支持上保证更少。</p>

<h2>eqMac——免费、EQ + 增益器</h2>
<p>eqMac 是一款带音量增益器的免费系统级均衡器。它更侧重于塑造整台 Mac 的音色和响度，而非混合单个应用，所以它是干另一件活的另一种工具。如果你确实想要单应用控制，eqMac 并不是答案，尽管它是一款不错的免费 EQ。</p>

<h2>价格对价值：诚实的表格</h2>
<ul>
<li><strong>真正免费，但有取舍：</strong>Background Music（脆弱、基于驱动）、FineTune（功能单薄）、eqMac（是 EQ，不是混音器）。</li>
<li><strong>最便宜的完整付费应用：</strong>SoundDial，€14.99——增益、配置文件、闪避、App Store 安全。</li>
<li><strong>高端/专业：</strong>SoundSource，约 $39——EQ 和路由，非 App Store 安装。</li>
</ul>
<p>换个说法：SoundDial 的价格大约是 SoundSource 的三分之一，同时覆盖 90% 的人真正想要的功能。而且与免费选项不同，它不会在某次 macOS 更新后悄悄坏掉，因为它不依赖脆弱的系统级音频驱动。</p>

<h2>你该选哪个？</h2>
<p>如果你是需要单应用 EQ、并把应用路由到不同输出的专业用户，买 SoundSource——它对得起价格。如果你热爱开源且不介意偶尔失效，免费试试 Background Music 或 FineTune。但如果你想要能直接用的最便宜选项——独立音量、增益、静音、可保存的配置文件和自动闪避，从 App Store 安全安装——SoundDial 是 2026 年明确的价值赢家。</p>

<blockquote>最好的混音器不是功能最多或价格最低的那个——而是你设置一次就能忘掉的那个。€14.99 的 SoundDial 让这个决定变得轻松。</blockquote>

<p>准备好给每个应用自己的音量了吗？以一次性 €14.99 <a href="https://apps.apple.com/app/id6772792641">在 Mac App Store 上获取 SoundDial</a>——无订阅、无驱动、无风险。</p>`,
  },
  "windows-volume-mixer-for-mac": {
    slug: "windows-volume-mixer-for-mac",
    title: "Mac 上的 Windows 音量混音器：获得单应用音量控制",
    description: "怀念 Mac 上的 Windows 音量混音器？macOS 没有内置的单应用音量控制。这里是获得它的最快方法：SoundDial，一款 €14.99 的菜单栏混音器。",
    date: "2026-07-23",
    readTime: "5 分钟阅读",
    content: `<p>macOS 没有像 Windows 那样的内置音量混音器，所以你无法在系统设置里设置单应用音量。最快且可靠的解决办法是 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>，一款来自 Mac App Store、€14.99 的菜单栏应用。它为每个应用提供独立的音量滑块、静音和增益——无驱动、无 DMG、无有风险的安装。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac 上的 Windows 音量混音器：获得单应用音量控制" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>为什么 Windows 音量混音器在 Mac 上没有等价物</h2>

<p>如果你从 Windows 转过来，最先怀念的东西之一就是音量混音器：右键点击扬声器图标，每个运行中的应用都有自己的滑块。把 Chrome 调低、让 Discord 保持响亮、把 Spotify 静音——全在一处。</p>

<p>macOS 根本没有提供这个。Apple 的音量控制是一个单一的系统级滑块。你设的任何音量都一次应用到所有东西。系统设置里没有隐藏的单应用选项，没有 Terminal 命令，没有辅助功能开关。这是一个真实的空缺，而且多年来一直如此。</p>

<p>原因是架构性的：应用通过 Core Audio 把音频路由到你的输出设备，而系统并未为各个音频流暴露面向用户的混音器。要重现 Windows 的体验，你需要一个坐在那条音频路径上、提供 Apple 遗漏的控制的第三方应用。</p>

<h2>最接近的匹配：SoundDial</h2>

<p>SoundDial 是一款专门为此打造的菜单栏单应用音量混音器。点击它的图标，你会得到一份正在播放音频的所有内容的干净列表，每个都有自己的滑块。它是你能安装的最直接的「Mac 上的 Windows 音量混音器」，并且做了几件 Windows 混音器从未能做的事：</p>

<ul>
<li><strong>每个应用独立音量</strong>——核心功能。把 Chrome 设为 40%、Zoom 设为 100%、音乐设为 20%。</li>
<li><strong>单应用静音</strong>——让一个应用静音而不碰其余。</li>
<li><strong>单应用音量增益</strong>——当一个应用自身音频太低时，把它推到 <em>100% 以上</em>。</li>
<li><strong>音量配置文件</strong>——保存一套混音（如「工作通话」或「游戏」）并瞬间调用，而不用重新拖动滑块。</li>
<li><strong>自动闪避</strong>——当更重要的内容（如通话）开始时自动降低背景音频。</li>
<li><strong>快速输出切换</strong>——在同一菜单中于扬声器、耳机和其他设备之间跳转。</li>
</ul>

<p>由于它在 <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a> 上，它经 Apple 审核并沙盒化。它一键干净安装——没有 DMG 要拖动，没有音频驱动或系统扩展要批准，也没有安全提示。一次性 €14.99（无订阅），它是填补这个空缺最简单的方法。</p>

<h2>如何在 Mac 上设置单应用音量</h2>

<ol>
<li>从 Mac App Store 安装 SoundDial。</li>
<li>在首次启动时授予它请求的一次性音频权限。</li>
<li>点击菜单栏中的 SoundDial 图标。</li>
<li>拖动任意应用旁边的滑块来设置其音量，或点击静音/增益。</li>
<li>可选择把当前混音保存为配置文件，以便日后恢复。</li>
</ol>

<p>这就是整个流程。它的行为就像你已经熟悉的 Windows 混音器，只是从菜单栏而非任务栏右键进入。</p>

<h2>SoundDial 与其他选项的对比</h2>

<p>SoundDial 不是这个领域唯一的工具，所以这里诚实地看看各个替代品。</p>

<ul>
<li><strong>SoundSource（Rogue Amoeba）</strong>——约 $39，确实是专业级：单应用 EQ、按应用输出路由、效果。但它需要直接下载外加一个音频采集驱动，如果你只想要单应用音量，它就显得过头（也更贵）。如果你需要 EQ 和路由就选它；如果你想要没有复杂性也没有驱动的混音器就选 SoundDial。</li>
<li><strong>Background Music</strong>——免费开源，很棒。问题在于：它可能在较新的 macOS 版本上失效，且缺少增益、保存的配置文件和自动闪避。如果你乐于排查开源音频驱动，那还行；如果你想要能直接用的东西，就不太理想。</li>
<li><strong>FineTune</strong>——一款免费开源的菜单栏应用。轻量，若预算是首要考虑就值得一看，但你是在用打磨、配置文件和 App Store 安全性去换免费。</li>
<li><strong>eqMac</strong>——一款免费的 EQ 和系统级增益器。它首先是均衡器，不是单应用混音器，所以解决的是另一个问题。</li>
</ul>

<p>取舍很简单。免费工具不花钱，但可能脆弱或功能单薄。SoundSource 强大但昂贵且基于驱动。SoundDial 处在最佳平衡点：一次性 €14.99，App Store 的安全性和沙盒化，以及免费选项跳过的配置文件加自动闪避。</p>

<blockquote>如果你只想要 Windows 音量混音器的体验——单应用滑块、静音和增益，几秒内安全安装——SoundDial 是最直接的匹配。</blockquote>

<h2>结论</h2>

<p>macOS 不会给你音量混音器，而且大概永远不会。但你不必忍受一个系统级滑块。一个专用的菜单栏混音器能恢复你在 Windows 上拥有的单应用控制，并在此之上加入增益、配置文件和自动闪避。</p>

<p>准备好用轻松的方式获得单应用音量了吗？以 €14.99 <a href="https://apps.apple.com/app/id6772792641">在 Mac App Store 上获取 SoundDial</a>——一次性、沙盒化，几秒安装完成。</p>`,
  },
  "app-volume-like-windows-on-mac": {
    slug: "app-volume-like-windows-on-mac",
    title: "像 Windows 那样在你的 Mac 上设置应用音量",
    description: "Windows 有单应用音量混音器，但 macOS 没有。这里教你如何在 Mac 上为每个应用设置独立音量——快速、安全、无驱动。",
    date: "2026-07-23",
    readTime: "5 分钟阅读",
    content: `<p>macOS 没有像 Windows 那样的内置单应用音量混音器，所以最快且可靠的解决办法是 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>，一款 Mac App Store 的菜单栏应用，为每个应用提供独立的音量滑块、单应用静音和音量增益。它沙盒化、经 Apple 审核，安装无驱动，一次性 €14.99。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 像 Windows 那样在你的 Mac 上设置应用音量" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>为什么 Windows 能做而 macOS 不能</h2>
<p>如果你用过 Windows，你熟悉这套流程：右键点击扬声器图标，打开音量混音器，为 Chrome、Spotify、Discord 以及任何正在发声的东西各拖一个滑块。简单，且真的好用。</p>
<p>macOS 从未提供等价物。Apple 的音频控制是全局的——整个系统一个主音量。你可以通过在应用内部把音源静音来让一个应用静音（如果它有这个控制的话），但没有一个统一的地方让你说「让我的音乐保持 40%，同时会议保持 100%」。这个空缺正是第三方混音器存在的原因。</p>

<h2>最快的解决办法：一个菜单栏混音器</h2>
<p>最接近 Windows 体验的是一个菜单栏应用，它列出你正在运行的音频应用，并为每个提供一个滑块。<a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 正是这么做的。点击菜单栏中的图标，你会得到：</p>
<ul>
<li><strong>每个应用独立音量</strong>——把 Spotify 拖低而不碰你的通话。</li>
<li><strong>单应用静音</strong>——瞬间让一个吵闹的应用静音，其余继续播放。</li>
<li><strong>单应用音量增益</strong>——当一个应用自身的最大音量仍然太轻时，把它推到 <em>100% 以上</em>。</li>
<li><strong>音量配置文件</strong>——保存「工作」或「游戏」混音，一键调用。</li>
<li><strong>自动闪避</strong>——当更重要的内容开始时自动降低背景音频。</li>
<li><strong>快速输出切换</strong>——在同一菜单中于扬声器、耳机和其他输出之间跳转。</li>
</ul>
<p>由于它在 Mac App Store 上，它沙盒化并经 Apple 审核，安装干净，没有 DMG 要拖动，没有内核扩展，也没有要在系统设置里批准的音频驱动。最后这一点比听起来更重要——基于驱动的工具正是那些在 macOS 更新后往往会坏掉的东西。</p>

<h2>如何设置它（大约两分钟）</h2>
<ul>
<li><strong>1.</strong>从 Mac App Store 安装 SoundDial 并启动它。</li>
<li><strong>2.</strong>授予 macOS 提示的音频权限——这正是让应用能看到各单应用音频流的东西。</li>
<li><strong>3.</strong>点击菜单栏中的 SoundDial 图标。每个当前正在播放音频的应用都会以自己的滑块出现。</li>
<li><strong>4.</strong>拖动任意应用的滑块设定其音量，或点击静音。当一个应用太安静时推过 100%。</li>
<li><strong>5.</strong>（可选）把当前混音保存为配置文件以便日后恢复，如果你想让背景音频自动降低，就开启自动闪避。</li>
</ul>
<p>这就是整个流程。它的行为就像你已经熟悉的 Windows 音量混音器，减去了设置的摩擦。</p>

<h2>免费和专业替代品呢？</h2>
<p>在 Mac 上获得单应用音量还有别的方法。了解它们，你才能诚实地选择。</p>
<blockquote>免费工具用金钱换可靠性和功能；专业工具用金钱和设置换你可能并不需要的深度。</blockquote>
<p><strong>Background Music</strong> 免费开源，确实提供单应用音量。问题在于：它深入挂钩到音频系统，且在较新的 macOS 版本上有失效的历史，还缺少增益、配置文件和自动闪避。如果它在你的设置上能用，那很好——但跨版本升级就是一场赌博。</p>
<p><strong>FineTune</strong> 是一款免费开源的菜单栏应用，与 SoundDial 精神相同。如果预算是唯一考虑，它是个不错的起点，不过它是一个社区项目，没有配置文件和闪避的打磨。</p>
<p><strong>eqMac</strong> 是一款免费的系统级 EQ 和增益器。它很适合塑造整体声音，但它不是真正的单应用混音器——你调的是整个输出，而非单个应用。</p>
<p><strong>SoundSource</strong>，来自 Rogue Amoeba（约 $39），是专业级选项：单应用 EQ、按应用输出路由，以及严肃的音频工程师功能。它很出色——但需要直接下载并安装一个音频采集组件，而且价格是 SoundDial 的两倍多。如果你想要录音室级的路由和 EQ，选它。如果你只想要 Windows 风格的混音器，它就过头了。</p>

<h2>你该选哪一个？</h2>
<p>如果你的目标是「让我的 Mac 像 Windows 音量混音器那样工作」，且不要下载、驱动或风险，SoundDial 是最干净的答案。你能获得单应用音量、静音、增益、配置文件和自动闪避，全部 App Store 安全，一次性 €14.99——无订阅。只有当你确实需要单应用 EQ 和输出路由时才改选 SoundSource，如果你乐于跨 macOS 更新排查问题，就试试免费选项。</p>

<p><strong>准备好给每个应用自己的音量了吗？</strong><a href="https://apps.apple.com/app/id6772792641">在 Mac App Store 上获取 SoundDial</a>，大约两分钟就能设置好你的第一套混音。</p>`,
  },
  "make-mac-louder-for-hard-of-hearing": {
    slug: "make-mac-louder-for-hard-of-hearing",
    title: "如何为听力较弱的收听者把 Mac 音量调得更响",
    description: "即使音量拉满也听不清 Mac？了解如何按应用增益并让音频更清晰，以便听力较弱者收听，包括 SoundDial 及内置技巧。",
    date: "2026-07-23",
    readTime: "6 分钟阅读",
    content: `<p>如果你的 Mac 即使在最大音量下也不够响，最快且可靠的解决办法是 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>，一款 Mac App Store 的菜单栏混音器，它能让任意单个应用增益超过 100%，并把其他一切静音。这意味着来自 FaceTime、视频或影片播放器的语音更响、更清晰，而无需把整个系统调到最大。它是一次性 €14.99。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 如何为听力较弱的收听者把 Mac 音量调得更响" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>为什么把音量滑块拉满仍然不够</h2>
<p>对听力较弱的收听者来说，macOS 的音量滑块有两个令人沮丧的限制。第一，它上限是应用自身输出的 100%。如果一个播客、视频或通话录制得很轻，「满音量」仍然太软。第二，macOS 没有内置的单应用音量混音器。Windows 已经拥有多年，但在 Mac 上每个应用共用一个主音量。所以当你把一切都调高以听清一个轻声时，背景音乐和通知声也会响得让人难受。</p>
<p>你真正需要的，是把 <em>一个</em> 应用调得比其余更响、把它推过其正常上限，并削减竞争声音以让语音突出的能力。这正是这些工具填补的空缺。</p>

<h2>首先，使用免费的 macOS 辅助功能设置</h2>
<p>在添加任何应用之前，先把 macOS 已经提供的东西设置好是值得的。这些有助于清晰度，尽管它们不会增加原始响度：</p>
<ul>
<li><strong>单声道音频：</strong>系统设置 &rarr; 辅助功能 &rarr; 音频，开启「以单声道播放立体声音频」。如果你一只耳朵听力更强，这会把完整信号送到两耳，让你不会漏掉一半对白。</li>
<li><strong>平衡调节：</strong>在系统设置 &rarr; 声音中，把左/右平衡拖向你更强的那只耳朵。</li>
<li><strong>降低背景声音：</strong>在允许的应用里降低音乐和环境声，让人声不必与配乐争抢。</li>
<li><strong>耳机适配：</strong>如果你用 AirPods 或 Beats，系统设置 &rarr; 辅助功能 &rarr; 音频 &rarr; 耳机适配可以放大轻声并针对语音优化。</li>
</ul>
<p>这些确实有用且不花钱。但它们都无法让一个安静的应用 <em>响过 100%</em>，而这通常才是真正的问题。</p>

<h2>如何用 SoundDial 把一个应用增益超过 100%</h2>
<p>SoundDial 常驻在你的菜单栏，为每个当前正在发声的应用显示一个滑块。以下是对听力较弱收听最有帮助的流程：</p>
<ul>
<li><strong>增益你正在收听的应用。</strong>把它的滑块拖过 100%，把一场安静的视频通话或播客放大到应用自身所允许的程度之上。</li>
<li><strong>把其余一切静音或调低。</strong>拉低音乐、浏览器标签页或通知声，让什么都不与你想跟上的那个声音争抢。</li>
<li><strong>开启自动闪避。</strong>当你在通话中开始说话时，SoundDial 会自动降低其他音频，让对方能清晰传来，然后再恢复。</li>
<li><strong>保存一个音量配置文件。</strong>创建一个「视频通话」配置文件，其中你的会议应用被增益、其他一切都很安静，然后瞬间切换，而不用每次重新调节。</li>
<li><strong>快速切换输出。</strong>在同一菜单中于扬声器、耳机或连接助听器的设备之间跳转，无需翻找系统设置。</li>
</ul>
<p>增益功能在这里是关键。因为它把应用的输出提升到其原生最大值之上，一段轻若耳语的录音会变成你真正能听见的东西，而系统其余部分仍保持在舒适的水平。</p>

<h2>关于失真的简短说明</h2>
<p>任何软件增益都会放大信号中已有的一切，所以在已经很响的音频上远远推过 100% 可能引入削波。实际上，把 <em>安静</em> 内容增益到一个舒适、可听清的水平听起来很干净。先适度提升，升到语音清晰为止，如果开始变刺耳就往回收。保护你剩余的听力很重要，所以目标是清晰而非最大响度。</p>

<h2>SoundDial 与替代品的对比</h2>
<p>你有几个选择，诚实有助于你挑对：</p>
<ul>
<li><strong>SoundSource（Rogue Amoeba，约 $39）：</strong>确实是专业级，带单应用 EQ 和输出路由。如果你想为听力损失塑造频率，它很强大。但它价格是两倍多，需要直接下载，并安装一个音频采集驱动。这比很多人想要的更多设置和系统访问。</li>
<li><strong>Background Music（免费、开源）：</strong>免费提供单应用音量，但缺少增益、配置文件和自动闪避，而且由于深入挂钩到音频系统，可能在较新的 macOS 版本上失效。</li>
<li><strong>FineTune（免费、开源）：</strong>一款轻量的菜单栏音量应用。做基础没问题，但缺少听力较弱者所依赖的增益、配置文件和闪避。</li>
<li><strong>eqMac（免费）：</strong>一款带增益器的均衡器。用于塑造声音有用，但它围绕 EQ 构建，而非干净的单应用混音和配置文件。</li>
</ul>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 突出之处在于价格、安全性和这里真正重要的那些具体功能之间的平衡。由于它在 Mac App Store 上，它经 Apple 审核并沙盒化，无 DMG 干净安装，不需要音频驱动或系统扩展。你在一次性 €14.99 的购买中获得单应用增益、静音、音量配置文件和自动闪避，且没有任何东西深入 macOS 音频栈。</p>

<h2>结论</h2>
<p>先把免费的 macOS 辅助功能选项设置好，它们值得拥有。但如果真正的问题是某个应用实在太安静，你就需要一个能把单个应用推过 100% 并让其余安静下来的工具。这正是单应用增益的全部意义，而 macOS 自己做不到。</p>

<p>准备好真正听清你的 Mac 了吗？以 €14.99 <a href="https://apps.apple.com/app/id6772792641">在 Mac App Store 上获取 SoundDial</a>，增益你需要的应用，让自动闪避和配置文件保持语音清晰。</p>`,
  },
  "boost-quiet-apps-mac": {
    slug: "boost-quiet-apps-mac",
    title: "如何在 Mac 上把安静的应用调响（超过最大音量）",
    description: "一个应用即使在 100% 时也太安静？用 SoundDial（一款单应用音量混音器）把那个应用在 Mac 上推过其最大值。这里是最快的解决办法及替代品。",
    date: "2026-07-23",
    readTime: "6 分钟阅读",
    content: `<p>如果一个应用即使在最大音量下也太安静，最快且可靠的解决办法是 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>，一款 macOS 的菜单栏单应用音量混音器。它为每个应用提供自己的滑块，外加一个把单个应用推过 100% 的音量 <strong>增益</strong>，让一场轻若耳语的视频通话或浏览器标签页变响，而无需触碰你的系统音量。它是一款 Mac App Store 上一次性 €14.99 的应用。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 如何在 Mac 上把安静的应用调响（超过最大音量）" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>为什么一个应用即使在 100% 时也很安静</h2>
<p>macOS 只有一个主音量。当你调高它时，所有东西一起变响。但每个应用还以自己的内部音量输出声音，而这个音量差异极大。一段安静母带的 YouTube 片段、一个话筒糟糕的 Zoom 通话者、一个对白混音偏低的游戏，或一个流媒体轻柔的浏览器标签页，都可能远低于其他一切，即使你的 Mac 已经开到最大。</p>
<p>真正的问题：macOS <strong>没有内置的单应用音量混音器</strong>。Windows 已经拥有多年（音量混音器，右键点击扬声器图标）。在 Mac 上，没有原生方法把一个应用调高而不碰其余，更没有办法把单个应用放大到其正常最大值 <em>以上</em>。这正是你撞上的空缺。</p>

<h2>最快的解决办法：只增益那一个应用</h2>
<p>单应用混音器通过把自己插入你的应用和输出之间来解决这个问题，从而能独立提升或降低每一条音频流，并把一个推过 100%。用 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>，流程很短：</p>
<ul>
<li>从 Mac App Store 安装并打开它。它常驻在你的菜单栏，而非一个浮动窗口。</li>
<li>点击菜单栏图标，查看每个当前正在播放音频的应用的滑块。</li>
<li>找到那个安静的应用，把它的滑块拖过 100% 以施加增益。它只放大那一个应用。</li>
<li>其余一切保持不变。你的系统音量和其他应用都不受影响。</li>
</ul>
<p>由于增益是按应用的，你可以把一场轻柔的视频通话推到舒适的水平，同时不让音乐或通知变得震耳。这正是 macOS 内置控制根本做不到的核心之事。</p>

<h2>关于增益与削波的说明</h2>
<p>增益确实有用，但它是放大，不是魔法。如果一个应用的原始音频非常安静或已经失真，猛力提升可能引入削波或让背景嘶声更明显。实际上，适度的增益能干净地修好绝大多数「这通话太安静」的情况。把它一点点往上调到应用舒适为止，而不是一下子顶到天花板，你就能保持声音干净。</p>

<h2>不止增益：还有什么有帮助</h2>
<p>一旦你有了单应用控制，几个功能能让安静应用的问题彻底消失：</p>
<ul>
<li><strong>音量配置文件</strong>——保存一套设置（如「增益 Zoom、降低 Spotify、静音 Slack」），一键调用，而不用每次开会都重新拖滑块。</li>
<li><strong>自动闪避</strong>——当选定的应用播放时自动降低其他应用，让被增益的通话在背景音频之上被清晰听到。</li>
<li><strong>单应用静音</strong>——让一个吵闹的应用静音而不暂停其他任何东西。</li>
<li><strong>快速输出切换</strong>——在同一菜单中于扬声器、耳机或外部接口之间跳转。</li>
</ul>

<h2>免费和专业替代品呢？</h2>
<p>你有选择，而这里诚实很重要，所以这是真实的格局。</p>
<p><strong>SoundSource</strong>（Rogue Amoeba）是约 $39 的专业级选择。它做单应用音量，外加单应用 EQ 和完整输出路由，比大多数人需要的更强大。取舍是：它价格两倍多，是直接下载而非 App Store，并安装一个音频采集驱动来工作。如果你想要一套音频工程师的工具箱，它很出色。如果你只想让一个应用更响，它就过头了。</p>
<p><strong>Background Music</strong> 免费开源，能做基本的单应用音量。但它是一个社区项目，在较新的 macOS 版本上有失效历史，且缺少超过 100% 的增益、配置文件和自动闪避。如果免费是唯一要求且你不介意偶尔失效，它很不错。</p>
<p><strong>FineTune</strong> 是一款免费开源的菜单栏应用，<strong>eqMac</strong> 是一款免费的 EQ 和系统增益器。如果你的预算为零，两者都值得一试。只是要知道它们由社区维护、以 EQ 为主或在单应用管理上更轻，并且不会把配置文件加闪避打包在一个打磨过的整体里。</p>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 的落点：它是中间路线。比 SoundSource 便宜，比免费工具更强大也更可靠，而且它在 <strong>Mac App Store</strong> 上，这意味着经 Apple 审核、沙盒化，并干净安装，<strong>没有 DMG，也没有音频驱动或扩展</strong>要附加到你的系统上。对大多数人来说，诚实的建议很简单：如果你想要最省心的解决办法，同时还能获得增益、配置文件和自动闪避，那它是一次性 €14.99 的最佳价值。</p>

<h2>快速答案，重申一遍</h2>
<blockquote>要让一个 Mac 应用超过其最大值变响，使用一个带增益的单应用音量混音器。从菜单栏打开 SoundDial，找到那个安静应用的滑块，把它拖过 100%。只有那个应用会变响。</blockquote>

<p>别再为整台 Mac 与单个音量滑块搏斗了。以一次性 €14.99 <a href="https://apps.apple.com/app/id6772792641">在 Mac App Store 上获取 SoundDial</a>，几秒内把那个安静的应用推过极限，并保存一个配置文件，从此不必再操心。</p>`,
  },
  "amplify-quiet-video-podcast-audio-mac": {
    slug: "amplify-quiet-video-podcast-audio-mac",
    title: "如何在你的 Mac 上放大安静的视频和播客",
    description: "有些 YouTube 视频、播客和讲座即使在 100% 时也太安静。这里教你如何在 macOS 上用 SoundDial 把单应用音量推过最大值。",
    date: "2026-07-23",
    readTime: "6 分钟阅读",
    content: `<p>最快且可靠的解决办法是 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>，一款 Mac App Store 的菜单栏混音器，为每个应用提供独立的音量滑块，以及一个真正能推过 100% 的 <strong>增益</strong>。打开你的浏览器或播客播放器，把它的滑块拖过最大值，一段安静的视频或讲座立刻变响——无驱动，无需重启。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 如何在你的 Mac 上放大安静的视频和播客" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>为什么有些视频和播客就是太安静</h2>
<p>你把 Mac 开到 100%，可访谈仍然细若耳语。这不是你的错觉。音频以差异极大的响度做母带——一个用笔记本话筒录的网络研讨会、一个安静的独立播客，或一段陈旧的讲座上传，可能比专业制作的 YouTube 视频低 15–20 dB。你的系统音量已经拉满，所以没有余量可给了。</p>
<p>问题在于：macOS <strong>没有内置的单应用音量混音器</strong>。Windows 已经拥有多年（系统托盘里的音量混音器），但在 Mac 上，音量键为所有东西移动一个全局音量。没有原生方法说「只把这个浏览器标签页调响」——更别说把单个应用推过 100% 了。</p>

<h2>真正的解决办法：单应用音量增益</h2>
<p>要让一个安静的音源响过扬声器通常允许的程度，你需要软件对 <em>那个应用具体地</em> 施加增益，并能放大超过 100% 的上限。这正是带增益功能的单应用混音器所做的。</p>
<p>用 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>，每个运行中的应用都会以自己的滑块出现在一个菜单栏列表里。把一个安静的应用滑到 150% 或 200%，音频便实时放大。由于增益是按应用的，其他一切——你的音乐、通知、另一个窗口里的通话——都保持正常水平。你不是为了听清一个轻柔的播客而把整个系统炸响。</p>
<blockquote>全局音量问的是「这台 Mac 有多响？」单应用混音器问的是「<em>这个</em>应用有多响？」——当一个视频安静而其余都正常时，这才是真正重要的问题。</blockquote>

<h2>如何逐步增益一个安静的视频或播客</h2>
<ul>
<li><strong>安装 SoundDial</strong>，从 Mac App Store。它沙盒化并经 Apple 审核，因此像任何其他应用一样干净安装——没有单独下载、没有音频驱动、没有权限关卡。</li>
<li><strong>开始播放</strong>那段安静的视频、播客单集或讲座，用你惯用的任何应用——Safari、Chrome、播客客户端、VLC。</li>
<li><strong>点击 SoundDial 图标</strong>，在你的菜单栏中。你会看到每个当前正在发声的应用的滑块。</li>
<li><strong>把那个应用的滑块拖过 100%</strong>——先试 150%，如果仍太软就再往上推。变化即时生效。</li>
<li><strong>其余一切不用碰。</strong>只有你增益的那个应用变响；你的系统保持平衡。</li>
</ul>
<p>如果你发现自己每天都在增益同样的应用——比如一个播客播放器和你的浏览器——你可以把那套设置保存为一个 <strong>音量配置文件</strong>，一键调用，而不用每次重新调节。</p>

<h2>关于增益的一句提醒</h2>
<p>超过 100% 的放大会增加增益，而增益有极限。把一段非常安静、低质量的录音推得足够狠，你可能会听到削波或失真——那是音源用尽了干净信号，而不是应用的缺陷。增益到能舒适听清为止，如果开始变刺耳就往回收。在内置笔记本扬声器上，极端增益还可能让扬声器单元受压，所以在那里要比用好耳机或外置扬声器时更轻些。</p>

<h2>免费或内置选项呢？</h2>
<p>你有替代品，诚实看待它们也值得：</p>
<ul>
<li><strong>系统音量 + 应用级滑块。</strong>有些播放器（VLC、少数通过扩展的浏览器）能增益它们自己的音频。如果你只在一个应用里需要它，那没问题——但你被卡在要分别配置每个应用，没有统一控制，也没有配置文件。</li>
<li><strong>eqMac</strong> 是一款免费的 EQ 和增益器。它能提升系统级响度，但它是个全局工具，不是干净的单应用混音器，且工作在整个输出的层面。</li>
<li><strong>Background Music</strong> 免费开源，确实提供单应用音量。但它依赖一套可能在较新 macOS 版本上失效的音频采集设置，且缺少专门的增益、配置文件和自动闪避。</li>
<li><strong>FineTune</strong> 是一款免费开源的菜单栏应用——如果你想要基础功能且不介意社区维护的软件，它是个轻量选项。</li>
<li><strong>SoundSource</strong>，来自 Rogue Amoeba（约 $39），是专业级重量选手：单应用 EQ、输出路由，样样俱全。它同样需要下载和一个音频采集驱动，价格是 SoundDial 的两倍多。如果你只想把安静的音频调响，它就过头了。</li>
</ul>

<h2>为什么 SoundDial 是务实之选</h2>
<p>SoundDial 正处在这个具体问题的最佳平衡点。它是 <strong>一次性 €14.99</strong>——无订阅——而且在 <strong>Mac App Store</strong> 上，这意味着它沙盒化、经 Apple 审核，安装无需任何 DMG 或系统扩展去信任。你获得了真正想要的单应用增益，外加配置文件、单应用静音、快速输出切换，以及在你需要专注于一个应用时降低其他应用的 <strong>自动闪避</strong>。它把「调响」这件事做得简单，也把其余的事做得好。</p>

<p><strong>厌倦了费力去听安静的视频和播客？</strong>以 €14.99 <a href="https://apps.apple.com/app/id6772792641">在 Mac App Store 上获取 SoundDial</a>，给每个应用自己的音量——并用增益把任何东西听得清清楚楚。</p>`,
  },
  "set-different-volume-for-each-app-mac": {
    slug: "set-different-volume-for-each-app-mac",
    title: "如何在 Mac 上为每个应用设置不同的音量",
    description: "macOS 没有内置的单应用音量混音器。这里教你如何用 SoundDial 及各替代品在 Mac 上为每个应用设置独立、持久的音量。",
    date: "2026-07-23",
    readTime: "5 分钟阅读",
    content: `<p>macOS 没有内置的方法为每个应用设置不同的音量，所以你需要一个菜单栏音量混音器。最快、最可靠的解决办法是 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>，一款 Mac App Store 应用，为每个应用提供自己的音量滑块、单应用静音，以及把安静应用推过 100% 的增益。设置一次，音量就固定下来。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 如何在 Mac 上为每个应用设置不同的音量" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>为什么 Mac 没有单应用音量控制</h2>
<p>如果你从 Windows 转过来，你大概去找过 Windows 音量混音器的等价物，就是那个每个应用都有自己滑块的小面板。它不在那里。macOS 只提供一个全局系统音量。无论是 YouTube 视频、Zoom 通话、Spotify 还是游戏，它们全都共用同一个主音量。</p>
<p>这没问题，直到它出问题为止。Discord 聊天盖过你的音乐。一个浏览器广告以满音量轰鸣，而你的播客在下面轻声播放。你的游戏震耳欲聋，但背景里的语音通话又太软。Apple 给你的唯一「解决方案」是打开每个应用手动调节它的内部音量（如果这个应用有的话），并且每次开机都重来一遍。</p>
<p>要获得真正的单应用控制，你需要一个坐在你的应用和输出设备之间的小工具。下面是正确的做法，外加对各替代品的诚实说明。</p>

<h2>最快的方法：SoundDial（Mac App Store）</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 常驻在你的菜单栏，列出每个当前正在播放音频的应用。每个都有一个独立滑块。以下是整个流程：</p>
<ul>
<li><strong>从 Mac App Store 安装。</strong>它经 Apple 审核并沙盒化，所以没有 DMG、没有音频驱动，也没有要批准的内核或系统扩展。它像任何普通应用一样安装，也能以同样方式移除。</li>
<li><strong>点击菜单栏图标。</strong>你会看到每个活动应用的滑块，外加一个主控制。</li>
<li><strong>拖动设定音量。</strong>把 Discord 调低、把 Spotify 调高、一键把吵闹浏览器标签页的应用彻底静音。</li>
<li><strong>增益安静的应用。</strong>如果一个应用即使在 100% 时也太软，用单应用增益把它推过 100%。</li>
<li><strong>保存一个配置文件。</strong>存下你的「游戏」「工作通话」或「音乐」混音，并瞬间切换，而不用每天重新拖滑块。</li>
</ul>
<p>有两个功能值得特别提出，因为它们解决了最烦人的场景：</p>
<ul>
<li><strong>自动闪避</strong>在选定应用播放时自动降低其他应用，让通话进来时音乐降低、结束后恢复，无需手动摆弄。</li>
<li><strong>快速输出切换</strong>让你在同一菜单里于耳机和扬声器之间跳转，无需进入系统设置。</li>
</ul>
<p>由于音量按应用被记住并保存进配置文件，这正是大多数人真正想要的部分：你设置一次，它就 <em>保持</em> 设置。</p>

<h2>免费和付费替代品，诚实对比</h2>
<p>SoundDial 不是唯一的选项，视你的需求而定，一个免费工具也许就够了。这里给出公道的概述。</p>

<h2>SoundSource（Rogue Amoeba）</h2>
<p>SoundSource 是专业级重量选手。除了单应用音量，它还做单应用 EQ 和完整输出路由，你可以把一个应用送到耳机、另一个送到扬声器。它确实优秀。取舍是：价格约 $39，而且它不是干净的 App Store 安装，而是一个需要向系统添加音频采集驱动的直接下载。如果你是需要 EQ 和路由的音频专业人士，它值得。如果你只想让每个应用处于合适的音量，它就是更多工具和更多设置了。</p>

<h2>Background Music（开源、免费）</h2>
<p>Background Music 是一款免费开源应用，提供单应用音量和自动暂停。问题在于可靠性：它安装一个虚拟音频设备，且在较新的 macOS 版本上有失效历史，更新后有时需要重新安装或修复。它也缺少增益、保存的配置文件和真正的自动闪避。如果你想要免费且不介意偶尔维护，它很不错。</p>

<h2>FineTune 和 eqMac</h2>
<p>FineTune 是一款免费开源的菜单栏应用，一个轻量的起点。eqMac 是一款带系统级增益器的免费均衡器，更侧重 EQ 和整体增益，而非给每个应用一个持久的滑块。如果你的需求很窄，两者都值得一试，但都不以「每个应用不同音量、保存为配置文件」的流程为中心。</p>

<h2>你该选哪个？</h2>
<ul>
<li><strong>想要干净地直接用，还带配置文件和自动闪避？</strong>SoundDial，一次性 €14.99，来自 App Store，无驱动可装。</li>
<li><strong>需要单应用 EQ 和音频路由，且不介意价格或驱动？</strong>SoundSource。</li>
<li><strong>想要免费，且在 macOS 更新时愿意折腾？</strong>Background Music、FineTune 或 eqMac。</li>
</ul>
<p>SoundDial 的真正优势在于组合：为每个应用提供独立音量、静音和增益，保存进可切换的配置文件，配合自动闪避，全部在一个你可以信任、一键即可卸载的沙盒化 App Store 下载里，且只需一次性 €14.99，而非订阅。</p>

<blockquote>无驱动、无扩展、无 DMG。为每个应用设一次音量，保存为配置文件，其余交给自动闪避。</blockquote>

<p>准备好给每个应用自己的音量了吗？<a href="https://apps.apple.com/app/id6772792641">在 Mac App Store 上获取 SoundDial</a>，大约一分钟就能设好你的完美混音。</p>`,
  },
  "make-one-app-quieter-than-the-rest-mac": {
    slug: "make-one-app-quieter-than-the-rest-mac",
    title: "在 Mac 上让某一个应用比其他所有应用更安静",
    description: "某个响亮的应用在 Mac 上盖过了其他所有声音？这是最快、最可靠的方法，可以在不影响其他应用的情况下单独调低某个应用的音量。",
    date: "2026-07-23",
    readTime: "5 分钟阅读",
    content: `<p>要在其他所有应用保持不变的情况下调低某一个应用，请使用 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>，这是一款面向 macOS 的菜单栏分应用音量调音台。打开它，在列表中找到那个响亮的应用，然后把它的滑块往下拖。该应用会立即变得更安静，而你的音乐、通话和其他音频都保持各自的音量。这是最快、最可靠的解决办法。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 在 Mac 上让某一个应用比其他所有应用更安静" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>为什么 macOS 让这件事如此困难</h2>

<p>令人沮丧的事实是：macOS 没有内置的分应用音量调音台。Windows 多年来一直有一个（右键点击音量图标，打开音量合成器，搞定），但在 Mac 上，音量键和菜单栏滑块只能控制一样东西：主输出。调低它，所有声音一起变小；调高它，那个响亮的应用还是很响，只是和其他一切一起更响了。</p>

<p>所以当一个游戏的音效轰鸣、某个浏览器标签页自动播放广告，或者通知声不断盖过你的播客时，你原生的选择只有笨拙的几种：静音整个系统、逐个进入每个应用自己的音量设置（如果它有的话），或者干脆退出那个惹事的应用。这些都无法让你简单地说一句「把这一个应用调小，其他一切保持不变」。</p>

<h2>快速解决办法：分应用音量调音台</h2>

<p>分应用音量调音台会给每个正在运行的应用一个独立的滑块。这正是你所缺少的控制。用 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>，它是这样的：</p>

<ul>
<li><strong>打开菜单栏调音台。</strong>点击 SoundDial 图标，你会看到一个实时列表，列出每个当前正在播放音频的应用。</li>
<li><strong>找到那个响亮的。</strong>游戏、浏览器、视频通话、通知声，任何盖过其他声音的东西。</li>
<li><strong>把它的滑块往下拖。</strong>设为 40%、20%，或者任何你觉得平衡的位置。改动会立即生效，而且只影响那一个应用。</li>
<li><strong>其他一切保持不变。</strong>你的音乐播放器、你的通话、你的其他标签页，它们都保持你为它们设置的音量。</li>
</ul>

<p>你还可以一键完全静音某一个应用，同时其他应用继续播放；如果某个应用太轻，也可以把它提升到 100% 以上。无需重启应用，无需层层翻菜单。</p>

<h2>能帮到你的常见场景</h2>

<ul>
<li><strong>响亮的游戏盖过背景音乐。</strong>把游戏降到舒适的音量，让你的歌单在它下面保持满音量。</li>
<li><strong>浏览器广告和视频突然飙高。</strong>把浏览器音量固定得低一些，这样意外的自动播放就永远不会把你震一下。</li>
<li><strong>通知声盖过通话或播客。</strong>调低那个通知频繁的应用，而不必让你真正关心的音频静音。</li>
<li><strong>安静的视频通话被响亮的媒体压住。</strong>与其调低响亮的应用，不如把通话提升到 100% 以上，让你能听清对方说话。</li>
</ul>

<h2>用音量配置和自动闪避一次设定到位</h2>

<p>修复一个响亮的应用很好，但你多半希望它保持修好。SoundDial 有两个功能能让这一切变成永久性的：</p>

<p><strong>音量配置</strong>让你保存一组分应用的音量，并一键调用它们。建立一个「游戏」配置，让游戏停在 30%、音乐停在 100%，再建一个「工作」配置，让通话被提升、其他一切都调低。切换场景时无需每次重新拖动滑块。</p>

<p><strong>自动闪避</strong>会在某个选定应用播放时自动降低其他应用，之后再把它们恢复，这样响亮的应用从一开始就不会完全劫持你的音频。有了配置、闪避和快速输出切换（在扬声器和耳机之间跳转，无需打开系统设置），你只需一次设定好平衡，就不用再守着音量了。</p>

<h2>SoundDial 与其他替代方案的比较</h2>

<p>在 Mac 上获得分应用音量还有别的办法。下面是坦诚的一览：</p>

<ul>
<li><strong>SoundSource（Rogue Amoeba，约 $39）</strong>确实是专业级的：在音量控制之上还有分应用 EQ 和完整的输出路由。但它的价格是两倍多，而且需要单独下载外加一个音频捕获驱动。如果你想要一套录音室级的工具包，它很出色；如果你只是想把一个应用调小，它就超出所需了。</li>
<li><strong>Background Music</strong>是免费开源的，这很好，但它在较新的 macOS 版本上可能会失效，而且缺少音量提升、配置和自动闪避。</li>
<li><strong>FineTune</strong>是一款免费开源的菜单栏应用，<strong>eqMac</strong>是一款带增强器的免费 EQ。如果免费是你的首要考虑，两者都值得一试，但你是在用抛光度、可靠性和功能来换价格。</li>
</ul>

<p>SoundDial 处在最佳平衡点：€14.99 一次性买断，无订阅。因为它上架于 Mac App Store，所以经过 Apple 审核并处于沙盒中，安装干净利落，没有 DMG、没有音频驱动、也没有需要批准的系统扩展。你能获得对这个问题真正重要的功能——分应用音量、静音、提升、配置和自动闪避——却不用花 $39，也不用忍受脆弱的免费工具。</p>

<h2>结论</h2>

<p>macOS 不会让你单独调低某一个应用，但这个缺口你能在几秒内补上。安装一款分应用调音台，把那个响亮应用的滑块往下拖，其他音频就会一直停在你想要的位置。保存一个配置，你就再也不用为这件事纠结了。</p>

<p><strong>准备好让那个总盖过其他声音的应用安静下来了吗？</strong>去 <a href="https://apps.apple.com/app/id6772792641">Mac App Store 获取 SoundDial</a>，€14.99，一次付费，无驱动，无订阅。</p>`,
  },
  "streaming-audio-mixer-mac-mic-game-music": {
    slug: "streaming-audio-mixer-mac-mic-game-music",
    title: "面向主播的 Mac 音频调音台：平衡麦克风、游戏与音乐",
    description: "在 Mac 上直播时平衡麦克风、游戏音频、音乐和提醒声的最快方法。SoundDial 为你提供一款带配置和闪避的分应用音量调音台。",
    date: "2026-07-23",
    readTime: "6 分钟阅读",
    content: `<p>要在 Mac 上直播时平衡你的麦克风、游戏、音乐和提醒声，最快、最可靠的解决办法是 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>，一款菜单栏分应用音量调音台。macOS 没有内置调音台，所以 SoundDial 让你为每个应用设置独立音量、提升安静的音源、保存直播配置，并在你说话时自动闪避音乐。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 面向主播的 Mac 音频调音台：平衡麦克风、游戏与音乐" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>问题所在：macOS 没有分应用音量控制</h2>
<p>Windows 多年来一直有音量合成器。macOS 至今仍未附带一个。你的系统音量滑块一次性移动所有声音，当你在直播时这毫无用处。直播过程中，你至少要同时应付四个都在争夺同一个输出的音源：</p>
<ul>
<li><strong>你的嗓音／麦克风监听</strong>——需要凌驾于一切之上。</li>
<li><strong>游戏音频</strong>——响亮、动态，在激烈时容易飙高。</li>
<li><strong>背景音乐</strong>——应当在你的解说之下保持安静。</li>
<li><strong>提醒声和聊天提示音</strong>——Discord、Stream Deck、关注提醒、通知。</li>
</ul>
<p>没有分应用控制，你最终只能靠游戏内的滑块、手动静音 Spotify，还得祈祷一段响亮的过场动画不会震坏你的观众。那不是混音，那是损害控制。</p>

<h2>一款合格的直播调音台需要做到什么</h2>
<p>Mac 上以创作者为中心的音频设置应当给你四样东西：独立的分应用音量、提升过于安静音源的能力、可即时调用的已存配置，以及在你说话时让音乐立刻降下来的自动闪避。SoundDial 从菜单栏就覆盖了这全部四点。</p>

<h3>1. 每个应用独立的音量</h3>
<p>把游戏设为 60%、音乐 25%、Discord 80%、浏览器 40%——每个应用都有自己的滑块。互不干扰。当某个音源在直播中出岔子时，你也能即时分应用静音，而无需碰那个应用本身。</p>

<h3>2. 对安静音源的音量提升</h3>
<p>有些应用和游戏即使在 100% 也是太轻。SoundDial 的分应用提升把音源推到它正常上限之上，让含糊的游戏或低音量的视频落在你需要的混音位置——无需重新编码，无需插件。</p>

<h3>3. 为不同场景准备的音量配置</h3>
<p>这是最能为主播省时间的功能。你的「纯聊天」混音（音乐拉高、游戏压低）不同于「Boss 战」混音（游戏拉高、音乐几近静默），又不同于「离开一会儿」混音。把每一种保存为配置，一键切换，而不必在直播中拖四个滑块。</p>

<h3>4. 让音乐在你嗓音之下闪避的自动闪避</h3>
<p>自动闪避会在你说话时自动降低背景音频，并在你停下时把它带回来。对单人主播来说，这就是解说清晰与音乐不断埋没你嗓音之间的区别——自动处理，而不是手动。</p>

<h2>OBS 的定位在哪里</h2>
<p>OBS 是你的推流工具，不是你的桌面音量调音台。OBS 通过其音频混音面板和滤镜控制进入直播的电平，但它是从它所捕获的音源工作的——它无法伸进单独的 macOS 应用并在系统层面把它们调低。在 Mac 上，把干净的分应用桌面音频送进 OBS 一直是最痛苦的部分。</p>
<p>实用的工作流是：用 SoundDial 在你的 Mac 上设置真正的分应用电平，使输出本身就已经平衡，再让 OBS 捕获并微调推流电平。在源头把混音设定一次，OBS 要对付的就少得多了。SoundDial 里的快速输出切换还让你在场景之间的空隙里在耳机和扬声器之间跳转，而无需深入系统设置。</p>

<h2>SoundDial 与替代方案的比较</h2>
<p>你有多种选择，这里坦诚很重要：</p>
<ul>
<li><strong>SoundSource（Rogue Amoeba，约 $39）</strong>——专业级，带分应用 EQ 和完整输出路由。它很出色，但价格是两倍多，需要单独下载，并会安装一个音频捕获驱动。如果你主要需要干净的分应用电平、提升和闪避，它就超出所需了。</li>
<li><strong>Background Music（免费，开源）</strong>——确实有用且免费，但它在较新的 macOS 版本上可能失效，而且没有提升、没有配置、没有自动闪避——这正是主播依赖的功能。</li>
<li><strong>FineTune（免费，开源菜单栏应用）</strong>——轻量的分应用控制，但它是一个社区项目，没有为直播打造的「配置加闪避」组合。</li>
<li><strong>eqMac（免费 EQ + 增强器）</strong>——擅长音色塑造和增强，但它是均衡器，不是分应用直播调音台。</li>
</ul>
<p>SoundDial 的切入点是：它是 <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a> 上一次性 <strong>€14.99</strong> 的买断——经 Apple 审核、处于沙盒中，安装干净利落，没有 DMG，也没有音频驱动或系统扩展。这最后一点对主播很重要：更少的内核级组件意味着当 macOS 在你直播前一晚更新时，更少的意外崩溃。</p>

<h2>坦诚的取舍</h2>
<p>如果你需要播出级的 EQ 和复杂的路由链，SoundSource 值那个价。如果你想要一个免费的折腾型工具、又不介意偶尔失效，Background Music 或 FineTune 也行。但如果你想要直播真正需要的那种混音——分应用电平、提升、已存的场景配置和自动闪避——而且来自一款能扛过 macOS 更新的安全 App Store 安装，那么就这笔钱而言，SoundDial 是最直接的路径。</p>

<p><strong>准备好修好你的直播音频了吗？</strong>去 <a href="https://apps.apple.com/app/id6772792641">Mac App Store 获取 SoundDial</a>，€14.99——一次设定好你的麦克风、游戏、音乐和提醒电平，保存为配置，让自动闪避把你的嗓音托在最上面。</p>`,
  },
  "macos-tahoe-audio-crackling-popping-fix": {
    slug: "macos-tahoe-audio-crackling-popping-fix",
    title: "如何修复 macOS Tahoe 上的音频爆音与噼啪声",
    description: "升级到 macOS Tahoe 26 后出现噼啪或爆音？通过匹配采样率、重置 CoreAudio、检查 Bluetooth 编解码器以及清除插件冲突来修复。这里是完整的排查顺序。",
    date: "2026-07-23",
    readTime: "6 分钟阅读",
    content: `<p>升级到 macOS Tahoe 26 后出现噼啪和爆音，几乎总是采样率不匹配、Bluetooth 编解码器协商不稳，或者某个卡住的 CoreAudio 进程。修复方法：在「音频 MIDI 设置」中匹配输出采样率、重置 <code>coreaudiod</code>、遗忘并重新配对 Bluetooth 耳机，以及退出音频插件宿主程序。请按下面的顺序逐项处理。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 如何修复 macOS Tahoe 上的音频爆音与噼啪声" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>先从省事的办法开始</h2>

<p>在你动任何技术性的东西之前，先排除两件能在一分钟内解决大多数情况的事：</p>

<ul>
<li><strong>重启 Mac。</strong>Tahoe 更新出人意料地经常让音频守护进程处于半迁移状态。一次干净的重启会从头重新加载 CoreAudio，清除大多数更新后的噼啪声。</li>
<li><strong>拔下再插上输出设备。</strong>如果是 USB DAC、扩展坞或音频接口，断开它，等几秒，再接回去。也可以换一个 USB 端口，最好是直接在 Mac 上的端口，而不是通过集线器。会传输音频的集线器和显示器是爆音的常见来源。</li>
</ul>

<p>如果噪声在重启后依然存在，那就是配置问题，而不是偶发故障。继续往下看。</p>

<h2>匹配采样率（最常见的原因）</h2>

<p>经典的 Tahoe 噼啪声来自你的设备想要的采样率与 macOS 正在发送的采样率之间的不匹配。当一个应用播放 44.1 kHz 音频而系统被锁定在 48 kHz（或反之）时，重采样可能会卡顿或爆音。</p>

<ul>
<li>打开<strong>音频 MIDI 设置</strong>（在「应用程序」→「实用工具」中，或用聚焦搜索）。</li>
<li>在左侧边栏选择你的输出设备。</li>
<li>查看<strong>格式</strong>下拉菜单。试着把它设为 <strong>48000.0 Hz, 2ch-24bit Integer</strong> 并测试。</li>
<li>如果爆音仍在，切换到 <strong>44100.0 Hz</strong> 再测一次。</li>
<li>对于音频接口，确保采样率与你的 DAW 工程速率相匹配。</li>
</ul>

<p>切换格式还会强制 CoreAudio 重新协商连接，即便你最后又回到相同的数值，仅此一项就能修复许多情况。</p>

<h2>重置 CoreAudio</h2>

<p>CoreAudio 作为一个名为 <code>coreaudiod</code> 的后台守护进程运行。在一次重大 macOS 更新之后，它可能会保留过时的设备状态。重启它是安全的，会立即生效，无需重启电脑。</p>

<p>打开 Terminal 并运行：</p>

<blockquote><p><code>sudo killall coreaudiod</code></p></blockquote>

<p>出现提示时输入你的密码。你的音频会中断一秒，然后守护进程会以干净的状态自动重新启动。对于在更新前一切正常的机器上凭空出现的噼啪声，这是单项最有效的修复。</p>

<h2>检查你的 Bluetooth 耳机和编解码器</h2>

<p>如果噼啪声只在 AirPods 或其他 Bluetooth 耳机上出现，问题通常出在编解码器协商，而不是你的扬声器。当连接拥塞，或者当 macOS 切换到低带宽的通话模式时，无线音质会下降。</p>

<ul>
<li><strong>遗忘并重新配对设备。</strong>前往「系统设置」→「蓝牙」，移除该耳机，然后再次配对。这会重置已协商的编解码器。</li>
<li><strong>留意通话模式的降级。</strong>当某个应用打开麦克风时，macOS 会把 Bluetooth 耳机切换到一种低质量的双向配置文件，听起来会发脆。退出你没在用的会议和语音应用，保真度就会回来。</li>
<li><strong>减少干扰。</strong>远离拥挤的 2.4 GHz 环境，断开你不需要的 Bluetooth 设备。繁忙的无线电频段会产生间歇性的爆音。</li>
<li>如果你只需要收听，就在应用的设置里<strong>关闭麦克风输入</strong>，这样 macOS 会保持高质量的播放配置文件。</li>
</ul>

<h2>退出音频插件宿主和虚拟驱动</h2>

<p>安装了系统扩展或虚拟设备的第三方音频软件，在系统大版本升级后是常见的元凶，因为内核和音频扩展往往需要为新的 macOS 版本更新。可疑对象包括虚拟音频路由器、均衡器应用、环回工具，以及较旧的基于驱动的实用工具。</p>

<ul>
<li>退出任何均衡器、音频路由或环回应用，测试噼啪声是否停止。</li>
<li>在「系统设置」→「通用」→「登录项与扩展」中检查可能需要更新或移除的音频扩展。</li>
<li>把这些应用更新到它们兼容 Tahoe 的版本，或卸载你不再使用的那些。叠加的音频驱动在大版本更新后经常互相冲突。</li>
</ul>

<p>如果退出其中某个应用让爆音消失了，你就找到了元凶。重新安装当前版本，或者干脆让它保持关闭。</p>

<h2>缩小范围：是全系统还是单个应用？</h2>

<p>弄清楚噪声是到处都有还是只在特定软件里。播放一个本地音频文件，再播放一个浏览器视频，然后是一个音乐应用。如果只有一个应用有噼啪声，那修复的地方是那个应用自己的音频设置或它的更新，而不是 macOS。如果是全系统的，那答案就在上面那些步骤里。</p>

<p>当你仍然卡住时，进入安全模式启动（在 Apple 芯片机型上按住电源键，然后按住 Shift 选择你的启动磁盘）。安全模式不加载任何第三方扩展。如果那里的音频是干净的，那原因就是某个登录项或驱动，你可以一次启用一个来找出它。</p>

<h2>当你的音频恢复干净之后</h2>

<p>噼啪声是一个驱动和采样率问题，所以上面那些修复才是真正能解决它的办法。但一旦播放稳定了，你可能会注意到另一个不同的局限：macOS 仍然没有像 Windows 那样内置的分应用音量调音台。你没法在不把所有声音都调低的情况下单独调低一个响亮的应用。</p>

<p>这正是 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 填补的缺口。它是一款菜单栏调音台，为每个应用提供各自的音量滑块、分应用静音，甚至还有针对安静应用的音量提升，外加快速输出切换。它不会修复噼啪声，但一旦你的音频恢复健康，它会让日常控制轻松得多。</p>

<p>按上面的步骤依次处理，先从重启和采样率检查开始。如果之后你想在干净的音频设置上获得真正的分应用控制，<a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 是 Mac App Store 上一次性 €14.99 的买断，处于沙盒中，没有驱动或 DMG 需要安装。</p>`,
  },
  "airpods-stuttering-cutting-out-mac-tahoe": {
    slug: "airpods-stuttering-cutting-out-mac-tahoe",
    title: "AirPods 在 Mac 上卡顿或断音（Tahoe 修复）",
    description: "AirPods 在 macOS Tahoe 上卡顿、断音或掉音，几乎总是 Bluetooth 干扰或自动切换的折腾。这里教你如何重新配对、减少 2.4GHz 拥塞，并停止那些破坏播放的切换。",
    date: "2026-07-23",
    readTime: "6 分钟阅读",
    content: `<p>AirPods 在 macOS Tahoe 上卡顿或断音，几乎总是 Bluetooth 干扰，而不是耳机坏了。常见的元凶是 2.4GHz Wi-Fi 和路由器拥塞、过于激进的自动设备切换，以及过时的配对。重新配对 AirPods、关闭自动切换，并远离拥挤的 2.4GHz 频道，就能修复大多数情况。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — AirPods 在 Mac 上卡顿或断音（Tahoe 修复）" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>为什么 AirPods 偏偏在 Mac 上掉音</h2>

<p>AirPods 使用 Bluetooth，而它与 Wi-Fi、微波炉、USB 3 设备以及你家里几乎每一个智能插座共用拥挤的 2.4GHz 无线电频段。你的 Mac 是一台繁忙的无线电设备：它在重叠的天线上同时应付 Wi-Fi、Bluetooth、隔空投送和「连续互通」功能。当那个频段变得拥塞时，Bluetooth 音频是第一个卡顿的，因为它不像文件传输那样能容忍丢包。</p>

<p>Tahoe 并没有神奇地让你的 AirPods 变差，但一次全新的 macOS 安装往往会重置无线电行为、重新启用「连续互通」的切换，并重新协商编解码器。这就是为什么问题似乎恰好在更新后出现。好消息是：这些修复都被充分理解，而且大多是免费的。</p>

<h2>修复 1：重新配对 AirPods（先做这个）</h2>

<p>过时或损坏的配对会在重启后存活下来，并造成看似随机的间歇性掉音。彻底移除并重新添加连接：</p>

<ul>
<li>打开<strong>「系统设置」，「蓝牙」</strong>。</li>
<li>点击你的 AirPods 旁边的信息（i）按钮，选择<strong>「忽略此设备」</strong>。</li>
<li>把 AirPods 放回充电盒，合上盖子，等 15 秒，然后打开它。</li>
<li>按住充电盒背面的按钮，直到指示灯闪白光。</li>
<li>从 Bluetooth 列表重新配对。</li>
</ul>

<p>顺便确认一下 AirPods 固件是最新的。没有手动更新工具，但把它们放在充电盒里、靠近一台已连接的 iPhone 或 Mac 待一会儿，就能让它们在后台更新。</p>

<h2>修复 2：关闭自动切换</h2>

<p>对身处 Apple 生态的人来说，这是「断音」的最大单一原因。你的 AirPods 会试图在你的 Mac、iPhone 和 iPad 之间跟着你走。每次你的手机认为它应该抢过音频时，你 Mac 上的连接就会打个嗝，在播客中途产生半秒的掉音。</p>

<ul>
<li>在 Mac 上：「蓝牙」，点击 AirPods 旁的（i），把<strong>「连接到此 Mac」</strong>设为<strong>「上次连接到此 Mac 时」</strong>，而不是「自动」。</li>
<li>在 iPhone 上：「设置」，轻点你的 AirPods，<strong>「连接到此 iPhone」</strong>，选择<strong>「上次连接到此 iPhone 时」</strong>。</li>
</ul>

<p>这会停止设备之间的拉锯战。你需要手动选择音频去哪里，为了稳定的播放，这是很小的代价。</p>

<h2>修复 3：减少 2.4GHz 拥塞</h2>

<p>如果掉音发生在视频通话、下载期间，或者当别人在流媒体时，那你的无线电频段就饱和了。有几个实用的做法：</p>

<ul>
<li><strong>在 Mac 上使用 5GHz Wi-Fi 频段。</strong>在你的路由器设置里，给 5GHz 网络起一个不同的名字并连接它。这会为 Bluetooth 腾出 2.4GHz 频段。</li>
<li><strong>把 USB 3 和 Thunderbolt 集线器移开</strong>，远离你的 Mac 和 AirPods。USB 3 是臭名昭著的 2.4GHz 噪声源；一个紧挨着你笔记本的集线器能从几英寸外毁掉 Bluetooth。</li>
<li><strong>把路由器的 2.4GHz 频道改为</strong> 1、6 或 11（互不重叠的选项），并避开你邻居正在使用的拥挤频道。</li>
<li><strong>保持视线畅通。</strong>人体和墙壁会吸收 2.4GHz。如果你的 Mac 在你身后或在包里，掉音会更严重。</li>
</ul>

<blockquote>Wi-Fi 6E 和 Wi-Fi 7 路由器能间接帮上忙：把你的设备推到 6GHz 上，会清空 Bluetooth 所依赖的 2.4GHz 频段。但一个配置糟糕、不断把你引回 2.4GHz 的 mesh 网络反而会让情况更糟。检查一下你实际上连的是哪个频段。</blockquote>

<h2>修复 4：重置 Bluetooth 与「连续互通」栈</h2>

<p>如果重新配对没能撑住，就重置无线电本身：</p>

<ul>
<li>从菜单栏把 Bluetooth 关掉再打开，然后重启 Mac。一次重启能清除出人意料数量的短暂音频故障。</li>
<li>在 Intel Mac 上重置 SMC/NVRAM，或者在 Apple Silicon 上干脆完全关机（不是重启）30 秒。</li>
<li>如果你不使用隔空投送或接力，在「系统设置」→「通用」→「隔空投送与接力」中停用「接力」会减少后台无线电的杂讯。</li>
</ul>

<h2>什么修不好它（以及音量调音台实际上做什么）</h2>

<p>把范围说清楚：这些都不是软件音量的问题，任何音量应用都无法修复 Bluetooth 链路。如果你的音频正在<em>掉音</em>，就去追上面那个无线电问题。像 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 这样的应用控制的是分应用音量、静音和输出切换，它们不碰 Bluetooth 栈，所以不会阻止卡顿。调音台真正能帮上忙的，是许多 AirPods 用户与掉音混为一谈的那个相邻烦恼：一个应用轰鸣而另一个太安静，或者需要快速切换输出。那是音量平衡问题，不是连接问题。</p>

<p>诚实地诊断。如果音频断一下又回来，那是干扰或自动切换。如果只是应用之间的电平不均衡，那才是一个你真能用软件解决的混音问题。</p>

<h2>快速清单</h2>

<ul>
<li>遗忘并重新配对 AirPods。</li>
<li>把 Mac 和 iPhone 都设为<strong>「上次连接时」</strong>，而不是「自动」。</li>
<li>把你的 Mac 换到 5GHz Wi-Fi；让 USB 3 集线器保持远离。</li>
<li>把 2.4GHz 设为频道 1、6 或 11。</li>
<li>切换 Bluetooth 之后重启。</li>
</ul>

<p>一旦掉音消失，而你只是想更干净地控制每个应用播放的音量，<a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 就补上了 macOS 至今仍不包含的东西：一款合格的分应用音量调音台、静音、提升和快速输出切换。它是 Mac App Store 上一次性 €14.99 的买断，处于沙盒中，没有驱动需要安装。</p>`,
  },
  "mac-right-speaker-not-working-after-tahoe": {
    slug: "mac-right-speaker-not-working-after-tahoe",
    title: "Tahoe 更新后 Mac 右声道扬声器没声音？如何修复",
    description: "升级到 macOS Tahoe 后某个扬声器或声道停止工作？先从音频平衡滑块开始，再重置 Core Audio、尝试安全模式，并排除硬件问题。一份清晰的排查指南。",
    date: "2026-07-23",
    readTime: "6 分钟阅读",
    content: `<p>如果你的右声道扬声器在升级到 macOS Tahoe 后没了声音，先检查音频<strong>平衡滑块</strong>——它可能在更新期间偏移了。前往「系统设置」&gt;「声音」&gt;「输出」，确保「平衡」处于正中央。如果那没问题，就重启 Core Audio、进入安全模式启动，然后再排除硬件。大多数情况是软件问题。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Tahoe 更新后 Mac 右声道扬声器没声音？如何修复" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>首先：平衡滑块（修好这个的次数比你想的更多）</h2>

<p>卡住或偏移的平衡滑块是某个声道变哑的单一最常见原因——而 macOS 更新偶尔会把它挪动。在你往最坏处想之前：</p>

<ul>
<li>打开<strong>「系统设置」&gt;「声音」</strong>。</li>
<li>点击<strong>「输出」</strong>标签页并选择你的扬声器（内置的，或你的外接设备）。</li>
<li>找到<strong>「平衡」</strong>滑块，把它拖到正中央。如果它被拉到了左边，你的右声道就会没声音。</li>
</ul>

<p>要<em>为每个输出设备</em>都这样做。平衡设置是为内置扬声器、耳机和每个外接接口分别记忆的——所以如果问题出在你的 USB DAC 上，把内置扬声器的平衡居中并帮不上忙。</p>

<h2>测试它是否真的是一个硬件声道问题</h2>

<p>快速地把硬件排除进来或排除出去。播放一首你很熟悉的立体声曲目，然后插上一副有线耳机。如果两个声道在耳机里都正常、但通过扬声器不行，那问题就在音频引擎的下游（扬声器硬件或输出通路）。如果同一个声道在耳机里也没声音，那更可能是软件或主板的音频编解码器。</p>

<p>你也可以打开<strong>「音乐」</strong>或 QuickTime，播放点东西，把平衡狠狠拨到最左，再拨到最右。如果音频在声道之间干净地移动，那两个扬声器都是好的，这纯粹是一个设置问题。</p>

<h2>重启 Core Audio</h2>

<p>macOS 通过 <strong>coreaudiod</strong> 进程路由所有声音。在一次重大更新后，它的状态可能会卡住——输出消失、声道掉线，或音量表现异常。重启它是安全的，并会强制 macOS 重建音频图：</p>

<ul>
<li>打开 <strong>Terminal</strong>（「应用程序」&gt;「实用工具」）。</li>
<li>运行：<code>sudo killall coreaudiod</code></li>
<li>输入你的密码。音频守护进程会在一两秒内自动重新启动。</li>
</ul>

<p>什么都不会被删除——这只是重启了音频子系统。做完后立刻再测试你的右声道扬声器。</p>

<h2>正确地重启，然后尝试安全模式</h2>

<p>一次完整的重启会清除 killall 清不掉的短暂音频故障。如果声道仍然没声音，就进入<strong>安全模式</strong>启动，它会加载一个最小化的系统，并跳过第三方音频扩展和登录项：</p>

<ul>
<li><strong>Apple Silicon：</strong>关机。按住电源键，直到出现「正在载入启动选项」。选择你的磁盘，然后按住 <strong>Shift</strong> 并点击「在安全模式下继续」。</li>
<li><strong>Intel：</strong>重启并按住 <strong>Shift</strong>，直到出现登录窗口。</li>
</ul>

<p>如果两个扬声器在安全模式下都正常，那就是在更新前安装的某个第三方音频驱动、虚拟设备或菜单栏工具与 Tahoe 的新音频栈发生了冲突。回到正常启动，移除或更新最近安装的音频软件（录屏软件、会议应用和音频路由 kext 是常见元凶）。</p>

<h2>重置 NVRAM（仅限 Intel Mac）</h2>

<p>在 Intel Mac 上，声音和扬声器设置存在 NVRAM/PRAM 中，一个过时的值可能会在更新后存活下来。重置它：关机，然后开机并立刻按住 <strong>Option + Command + P + R</strong> 约 20 秒，让 Mac 重启一次。这不适用于 Apple Silicon Mac——它们会自动管理这一点，所以如果你用的是 M 系列机型，就跳过它。</p>

<h2>再更新一次——并检查是否有小版本更新</h2>

<p>任何重大 macOS 版本的早期发行版都会带着日后被修补的音频驱动缺陷。前往<strong>「系统设置」&gt;「通用」&gt;「软件更新」</strong>，安装任何待装的 Tahoe 小版本更新（14.x.1、14.x.2 等）。如果存在补充更新，它往往正好处理这些更新后的音频回归问题。</p>

<h2>当它确实是硬件问题时</h2>

<p>如果安全模式、重启 Core Audio 和一次干净的重装都失败了——而且同一个声道在耳机里也没声音——你可能面对的是硬件故障。与更新的时间吻合可能只是巧合；扬声器功放和音频编解码器确实会坏。运行 <strong>Apple 诊断</strong>（关机，然后在 Apple Silicon 上按住电源键并选择「诊断」，或在 Intel 上开机时按住 <strong>D</strong>）。如果它标出某个音频组件有问题，就联系 <strong>Apple 支持</strong>或授权服务提供商。别为一个坏掉的扬声器在软件上花钱。</p>

<blockquote>快速经验法则：如果音频随平衡滑块正确地左右移动，那两个扬声器物理上都没问题，你的修复就在软件里。如果它从不移动到没声音的那一侧，就怀疑硬件。</blockquote>

<h2>音量软件的定位（以及它管不到的地方）</h2>

<p>说清楚：一个坏掉的扬声器声道不是音量应用能修的——上面那些检查才是你的路径。话虽如此，一旦你的音频恢复健康，macOS 仍然缺少一样 Windows 多年前就有的东西：一款真正的分应用音量调音台。如果你之所以翻遍声音设置，是因为一个应用在轰鸣而另一个太安静，那么像 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 这样的菜单栏调音台就能让你为每个应用设置独立音量、静音，甚至提升，而不必碰你的系统平衡。它是日常混音的便利工具，不是对本文所述问题的修复。</p>

<h2>简要版</h2>

<ul>
<li>把<strong>「平衡」</strong>滑块居中——为每个输出设备。</li>
<li>用耳机测试以隔离硬件。</li>
<li>运行 <code>sudo killall coreaudiod</code>，然后重启。</li>
<li>尝试<strong>安全模式</strong>以捕捉驱动冲突。</li>
<li>在 Intel 上重置 NVRAM；安装任何 Tahoe 小版本更新。</li>
<li>在耳机里仍然没声音？运行 Apple 诊断并致电 Apple。</li>
</ul>

<p>一旦你的扬声器恢复正常，如果每天摆弄分应用音量成了一件烦人的事，<a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 就补上了 macOS 一直缺失的那款调音台——€14.99，一次付费，处于沙盒中，无驱动。</p>`,
  },
  "airpods-stuck-at-half-volume-mac-fix": {
    slug: "airpods-stuck-at-half-volume-mac-fix",
    title: "AirPods 在你的 Mac 上卡在一半音量？这里是修复办法",
    description: "为什么 AirPods 连到你的 Mac 时只有一半音量——通常是 Bluetooth 编解码器切换到了免提麦克风配置文件——外加重新配对的修复办法，以及如何把音量彻底提回来。",
    date: "2026-07-23",
    readTime: "6 分钟阅读",
    content: `<p>AirPods 在 Mac 上通常会降到一半音量，是因为 macOS 把它们从高质量的 A2DP 音频配置文件切换到了低质量的免提（HFP）配置文件——那是为通话麦克风用途打造的。那个模式会限制输出和音质。修复方法是强制 Mac 回到仅耳机音频，然后提升音量让它保持住。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — AirPods 在你的 Mac 上卡在一半音量？这里是修复办法" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>为什么会这样：编解码器切换</h2>

<p>像 AirPods 这样的 Bluetooth 音频设备运行在两种模式之一。当你只是在听时，macOS 使用 A2DP——完整立体声、完整响度、干净音质。但一旦某个应用想用你的麦克风，macOS 就会把整个连接切换到 HFP（免提配置文件）。HFP 是一种双向电话编解码器。它听起来单薄、偏单声道，而且明显更安静，因为它是为语音通话而不是音乐设计的。</p>

<p>问题在于，即使抢过麦克风的那个应用已经用完，macOS 也经常卡在 HFP 里——或者在你一打开 Zoom、FaceTime、Teams、Discord，或某个有麦克风权限的浏览器标签页时就切进去。所以你的 AirPods 听起来像是「一半音量」，并不是因为音量滑块动了，而是因为整个音频配置文件在你脚下降级了。</p>

<p>你会认出它来：音频突然变得又轻又闷，AirPods 在你的声音设置里出现两次（一次是输出，一次是麦克风），而且把系统音量拉到顶几乎也没什么用。</p>

<h2>重新配对和编解码器的应对办法</h2>

<p>这些是坦诚的第一步。按顺序逐项处理——通常靠前的某一步就能清除它。</p>

<ul>
<li><strong>更改你的输入设备。</strong>打开「系统设置」→「声音」→「输入」，选择 Mac 的内置麦克风，而不是 AirPods。这会阻止 macOS 把 AirPods 保持在 HFP 模式，从而让输出爬回完整的 A2DP 音质。这是单项最有效的修复。</li>
<li><strong>把 Bluetooth 关掉再打开。</strong>快速重置连接往往能干净地重新协商 A2DP，尤其是在通话结束后 AirPods 卡住的情况下。</li>
<li><strong>重新连接 AirPods。</strong>合上充电盒，等几秒，在 Mac 旁边重新打开它，并重新把它们选为输出设备。</li>
<li><strong>退出抢占麦克风的那个应用。</strong>完全退出 Zoom、Teams、Discord 或那个浏览器标签页。有些应用会在后台保持麦克风会话打开，把 HFP 钉住直到它们被关掉。</li>
<li><strong>从头重新配对。</strong>在「系统设置」→「蓝牙」中移除 AirPods（点击信息按钮→「忽略此设备」），然后再次配对。这会清除仅靠切换无法修复的损坏配置协商。</li>
<li><strong>重置 AirPods。</strong>把它们放在充电盒里、盖子打开，按住背面的设置按钮，直到指示灯先闪琥珀色再闪白色。之后重新配对。这是应对固件级怪异问题的终极手段。</li>
<li><strong>更新 macOS 和 AirPods 固件。</strong>Apple 在小版本更新里发布过 Bluetooth 音频修复。AirPods 固件会在靠近一台已连接设备充电时静默更新——所以把它们放在充电盒里、靠近你的 Mac 放一整夜。</li>
</ul>

<blockquote><p>要留意的规律：如果音量在你加入通话的瞬间掉下去、通话结束时又恢复，那就是 HFP 切换——而不是坏掉的扬声器或设置故障。</p></blockquote>

<h2>为什么这些修复不总能保持住</h2>

<p>令人沮丧的部分来了。即便重新配对之后，下次只要有任何应用碰到麦克风，macOS 也会乐呵呵地把你的 AirPods 切回那个安静的免提模式。你无法在系统设置里永久停用那个行为——Apple 把它当作自动的。于是你一天要重做好几次输入设备那招，而且只要你的 AirPods 处于通话中或某个渴求麦克风的应用里，它们就又被限制在那个较低的音量上。</p>

<p>还有一个人们与此混为一谈的、彼此独立的第二个问题：有些应用在最大系统音量下就是比别的应用更安静。一个播客播放器或一个浏览器标签页，即便 AirPods 正跑着干净的 A2DP，也可能远低于你耳朵想要的水平。macOS 只给你一个音量滑块管一切，没有分应用控制，所以没有原生办法把某一个安静的应用推回去。</p>

<h2>把音量提回来——并让它保持住</h2>

<p>这正是分应用音量调音台大显身手的地方。<a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 是一款面向 macOS 的菜单栏应用，为每个正在运行的应用提供各自独立的音量滑块——包括超过 100% 的提升。所以当你的 AirPods 从通话回来时有效音量偏低，或者某个特定应用就是太安静，你就把那个应用拖到正常上限之上，它便会保持在那里。</p>

<p>具体来说，这意味着：</p>

<ul>
<li><strong>分应用音量提升。</strong>把安静的应用推到标准上限之上，而不必在「满」系统音量下费劲去听。</li>
<li><strong>音量配置。</strong>保存一组电平——提升过的浏览器、更轻的音乐、响亮的视频通话——并一键切换整套安排，这样你就不用在每次重新连接后重新调整。</li>
<li><strong>快速输出切换。</strong>从菜单栏在 AirPods、笔记本扬声器和外接 DAC 之间跳转，而不必翻遍系统设置，这在你强制一次全新的配置协商时很有帮助。</li>
<li><strong>分应用静音和自动闪避。</strong>静音某一个应用而不碰其他，并让媒体在有更重要的东西播放时自动降下来。</li>
</ul>

<p>值得说清楚它做什么、不做什么。<a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 不会强制 macOS 停留在 A2DP——上面那招更改输入设备仍然是你对付编解码器本身的工具。它做的是把降级夺走的响度按应用还给你，这样一段安静的 AirPods 会话或一个顽固地偏轻的应用，就成了拖一下就能解决的事，而不是没救的麻烦。而且因为它是一款沙盒化的 Mac App Store 应用，没有音频驱动要装、没有 DMG、没有内核扩展——它就是能跑起来。</p>

<h2>简要版</h2>

<p>如果你的 AirPods 在 Mac 上听起来又轻又闷，就把你的输入设备从 AirPods 上切走，以强制它们脱离免提模式；如果那没用，就重新配对。当音量仍然达不到你想要的位置——或者某一个应用就是太轻——就动用分应用提升，让你一次设定好就此了事。</p>

<p>厌倦了每次通话都要跟音量滑块较劲？<a href="https://apps.apple.com/app/id6772792641">去 Mac App Store 获取 SoundDial</a>——一次性 €14.99，无订阅，无驱动——给每个应用它自己的音量。</p>`,
  },
  "mac-volume-resets-itself-tahoe-bug": {
    slug: "mac-volume-resets-itself-tahoe-bug",
    title: "Mac 音量在 Tahoe 上不断自行重置？如何彻底锁定它",
    description: "自 macOS Tahoe 以来，许多 Mac 会突然自行更改或重置音量。这里说明为什么会发生、如何停止内置的成因，以及如何为每个应用锁定固定音量，让它保持不变。",
    date: "2026-07-23",
    readTime: "6 分钟阅读",
    content: `<p>如果自 macOS Tahoe 以来你的 Mac 音量不断自行重置，修复办法是消除那些自动调节者：停用音频闪避和「开机时播放声音」、重置声音设置，并干净地重新连接任何 Bluetooth 输出。对于会乱跳的分应用音量，用一款调音台为每个应用锁定固定音量，它就永远不会再漂移了。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac 音量在 Tahoe 上不断自行重置？如何彻底锁定它" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>为什么 Tahoe 之后你的音量会自行变化</h2>

<p>一个你没碰它却自己动的音量感觉像硬件故障，但它几乎总是软件在替你决定音量。macOS 有好几种自动行为会悄悄地拨动或重置输出，而 Tahoe 的音频栈改动让其中几种更明显了。在你断定应用或 Mac 坏了之前，弄清楚究竟是哪个系统在抢那个滑块会很有帮助。</p>

<ul>
<li><strong>音频闪避：</strong>当 macOS 认为有更重要的东西在播放时（Siri、辅助功能播报、通知），它会降低其他音频。触发结束后，音量有时不会完全回来。</li>
<li><strong>Bluetooth 握手重置：</strong>AirPods 和其他 Bluetooth 设备在连接时会重新协商音量。会话中途重新连接会让输出跳到某个默认值，或跳到大得多／小得多的音量。</li>
<li><strong>输出设备切换：</strong>当你拔下耳机、扩展坞，或切换到显示器的扬声器时，每个输出都记着自己的音量。来回切换看起来就像「随机」重置。</li>
<li><strong>分应用默认值：</strong>有些应用（浏览器、视频播放器、会议工具）在启动时或在新的音频流开始时会设置它们自己的增益，覆盖你原先设的值。</li>
<li><strong>开机声音和登录状态：</strong>开机提示音和登录会把系统音量推回一个你没有选择的默认水平。</li>
</ul>

<h2>先修复内置的成因</h2>

<p>按顺序处理这些。大多数「自行重置」的抱怨在排除掉闪避和 Bluetooth 之后就会消失。</p>

<ul>
<li><strong>关闭开机声音。</strong>「系统设置」→「声音」→取消勾选<em>「开机时播放声音」</em>。这会阻止开机提示音重置你的基准音量。</li>
<li><strong>减少或停用闪避触发器。</strong>在「系统设置」→「辅助功能」→「朗读内容」和 Siri 中，关闭你不需要的语音播报。触发器越少，macOS 降低音频却忘了恢复的时刻就越少。</li>
<li><strong>重新配对有问题的 Bluetooth 设备。</strong>从蓝牙设置里移除 AirPods 或耳机，然后重新配对它们。过时的配置文件是连接时音量突变的常见原因。</li>
<li><strong>刻意地设置每个输出设备。</strong>连接你使用的每个输出（内置、显示器、耳机），并各设置一次音量。macOS 按设备存储音量，所以把它们都设好就消除了你切换时的意外。</li>
<li><strong>如果 Core Audio 卡住了就重置它。</strong>打开 Terminal 并运行 <code>sudo killall coreaudiod</code>。这会在无需重启的情况下重启音频守护进程，并清除可能导致音量不稳的挂起状态。</li>
<li><strong>更新，然后重启。</strong>早期的 Tahoe 小版本更新发布过音频修复。确保你在最新版本上，并在更新后重启一次。</li>
</ul>

<p>如果重置停止了，那上面某一项就是你的元凶。如果你的<em>系统</em>音量稳定、但个别应用不断比其他一切飘得更响或更轻，那你就撞上了内置控制所能做到的极限。</p>

<h2>真正的缺口：macOS 无法为每个应用锁定音量</h2>

<p>令人沮丧的部分来了。Windows 多年来一直有一款分应用音量合成器——你打开它，拖动某个应用的滑块，它就停在那里。macOS 从来没有推出过。整台机器就只有一个系统音量滑块，每个应用都在争抢它。所以当某个浏览器标签页轰鸣着自动播放广告，或某个视频通话来时的音量是你音乐的两倍，你唯一的办法就是手动去骑主音量——而这正是你想逃离的那个「为什么它老是变」的循环。</p>

<blockquote>系统滑块是一个共享的单一旋钮。没有分应用调音台，「设一次就不管」在原生 macOS 上是不可能的——总会有东西覆盖你。</blockquote>

<h2>用 SoundDial 为每个应用锁定固定音量</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 补上了 macOS 缺失的那款分应用调音台。它驻留在你的菜单栏，给每个正在运行的应用它自己的、独立于主音量的滑块。因为它记着你为每个应用设置的音量，所以它直接解决了「自行重置」的问题：你只需决定一次，那个应用每次都会以那个音量打开。</p>

<ul>
<li><strong>每个应用独立的音量：</strong>把音乐保持在 40%、视频通话在 80%，两者同时，无需摆弄主滑块。</li>
<li><strong>分应用静音和提升：</strong>即时静音一个吵闹的应用，或在某个应用自身音频偏弱时把它推过 100%。</li>
<li><strong>音量配置：</strong>为「工作」「游戏」或「专注」保存设置，并一键切换整套混音。</li>
<li><strong>由你说了算的自动闪避：</strong>在你说话时或某个选定应用活跃时自动降低背景应用——而不是由 macOS 决定。</li>
<li><strong>快速输出切换：</strong>从菜单栏在扬声器、耳机和显示器音频之间跳转，无需深入设置。</li>
</ul>

<p>它是 Mac App Store 上一次性 €14.99 的买断——无订阅、无驱动、无 DMG，也没有内核扩展。因为它完全沙盒化并通过 App Store 分发，你不会装上一个 Tahoe 可能在下次更新时封锁的老式音频 kext。<a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 使用受支持的 API 来设置你的音量，所以你记住的音量能扛过更新和重启。</p>

<h2>你实际上需要哪种办法？</h2>

<p>如果你整个系统的音量都在跳，就从上面那些内置修复开始——闪避、Bluetooth 和开机声音占了大多数情况。如果问题反而是某一个应用总是那个格格不入的、或者你厌倦了主滑块是个折衷，那分应用调音台就是唯一真正的答案。macOS 不会加上一个，所以一款菜单栏工具就是通往一份真正能停在你放的地方的混音的实用路径。</p>

<p>厌倦了在 Tahoe 上追着音量滑块跑？<a href="https://apps.apple.com/app/id6772792641">去 Mac App Store 获取 SoundDial</a>，为每个应用锁定一个记住的音量——€14.99 一次付费，无订阅，无驱动。</p>`,
  },
  "control-daw-and-system-volume-separately-mac": {
    slug: "control-daw-and-system-volume-separately-mac",
    title: "在 Mac 上把 DAW 监听音量与系统音频分开控制",
    description: "macOS 没有内置的分应用音量调音台，所以你的 DAW 和系统声音共用一个音量。这里教你如何把 Logic、Ableton 或 GarageBand 的监听音量与你的浏览器和通知分开控制。",
    date: "2026-07-23",
    readTime: "6 分钟阅读",
    content: `<p>macOS 没有内置的分应用音量调音台，所以你的 DAW 和其他一切共用一个系统滑块。要把你的监听音量与浏览器、Slack 和通知分开设置，你需要分应用音量控制。像 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 这样的菜单栏调音台会给 Logic、Ableton 和 GarageBand 各自的音量，与系统音频分开。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 在 Mac 上把 DAW 监听音量与系统音频分开控制" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>为什么一个音量滑块会毁掉你的监听</h2>

<p>当你在制作时，你的 DAW 只是众多发声之物中的一个。一段参考曲目在浏览器标签页里播放。Slack 提示不断传来。第二块显示器上跑着一个 YouTube 教程。在 Windows 上，音量合成器让你独立地平衡所有这些。在 macOS 上，Apple 从未推出等价物——音量键和菜单栏滑块一次性移动<em>一切</em>。</p>

<p>这对任何靠耳朵混音的人来说都是个真问题。你在 Logic 里调好了一个舒适的监听音量，然后一条通知以同样的音量炸进来，震坏你的耳朵。或者你为了在一段响亮的乐段保护听力而把系统调低，结果现在你的参考曲目又太安静，没法用来对比。你的监听参考不再稳定，而稳定的参考正是混音的全部意义所在。</p>

<blockquote>在一个恒定的音量下监听，是为数不多能可衡量地改善你混音的习惯之一。如果系统声音不断迫使你去动主滑块，你就失去了那份一致性。</blockquote>

<h2>「独立的 DAW 音量」到底意味着什么</h2>

<p>制作人在这里混淆了两件不同的事，值得把它们分开：</p>

<ul>
<li><strong>接口／主输出电平</strong>——你音频接口上的硬件旋钮或你的监听控制器。这设定你的绝对聆听响度，一旦校准好就应保持不动。</li>
<li><strong>分应用软件音量</strong>——每个应用在抵达那个输出<em>之前</em>有多响。这正是 macOS 所缺的。它让你把 DAW 保持在单位增益，同时把 Chrome、「音乐」或通知声调低到它下面的一个铺垫音量。</li>
</ul>

<p>你想要的是第二个。目标不是把你的 DAW 调低——而是把其他一切相对它调低，让 DAW 保持你最响、最一致的音源，而干扰安静地待在背景里。</p>

<h2>如何用分应用调音台做到这一点</h2>

<p>像 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 这样的菜单栏调音台会列出每个当前正在播放音频的应用，并给每个各自的滑块。对制作人来说，工作流是这样的：</p>

<ul>
<li><strong>把你的接口校准一次。</strong>把你的音频接口或监听控制器设到一个舒适、可重复的参考电平，然后别动它。这是你固定的锚点。</li>
<li><strong>把你的 DAW 设为 100%。</strong>在调音台里，让 Logic、Ableton 或 GarageBand 保持在满软件音量，这样它就以单位增益通过。你 DAW 自己的主推子仍然做精细的混音。</li>
<li><strong>把其他一切拉下来。</strong>把 Chrome、Safari、「音乐」和 Slack 降到一个更低的电平——比如 40–60%——这样参考曲目和消息就待在你混音之下，而不是与它争抢。</li>
<li><strong>静音吵闹的东西。</strong>分应用静音让你完全静音一个浏览器或一个聊天应用，而不碰你的监听链路。一键，你的 DAW 就继续原封不动地播放。</li>
</ul>

<p>因为 DAW 的滑块从不移动，你的监听参考在整个会话中都稳如磐石。你可以把一段参考曲目拉高做一次快速的 A/B 对比，然后静音它，而你的混音电平一个分贝都没变。</p>

<h2>提升一个安静的应用，而不是把其他调低</h2>

<p>有时问题是反过来的。一段粗糙的 demo 导出、一段语音备忘录，或一段安静的参考，回放时远低于你的会话电平。把接口调高去听它，就意味着其他一切现在都太响了。分应用<strong>音量提升</strong>让你把某一个安静的应用推过 100%，使它匹配你的工作电平——而不必碰你校准好的输出。这是 Windows 的合成器从未有过的一环，也是当你在试听来自 DAW 之外的素材时更有用的工具之一。</p>

<h2>为不同会话类型准备的配置</h2>

<p>你理想的平衡对每项任务都不一样。录音、混音和随意聆听各自想要一套不同的应用电平混音。音量配置让你保存一套设置并即时调用它：</p>

<ul>
<li><strong>混音：</strong>DAW 在 100%，浏览器和「音乐」偏低，聊天静音。</li>
<li><strong>参考聆听：</strong>「音乐」或流媒体应用拉高，DAW 调低。</li>
<li><strong>通话／协作：</strong>会议应用拉高，DAW 拉回，以免它渗入通话。</li>
</ul>

<p>切换配置胜过每次换挡时手动调整五个滑块。</p>

<h2>自动闪避和快速输出切换</h2>

<p>在录音室里还有两件事很重要。<strong>自动闪避</strong>能在某个优先音源说话或播放时自动降低背景应用，让通话或重要音频总能穿透出来。而从菜单栏的<strong>快速输出切换</strong>让你在你的接口、监听音箱和耳机之间跳转，无需深入系统设置——当你在不同系统上检查混音时，这是一件常做的事。</p>

<h2>为什么不用虚拟音频驱动？</h2>

<p>有些路由工具通过安装一个内核级虚拟音频驱动来解决这个问题。那些很强大但很重：它们可能在 macOS 更新后失效、增加延迟，并需要深度的系统权限。<a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 是沙盒化的，并通过 Mac App Store 分发——没有驱动、没有 DMG、没有聚合设备的设置。单就分应用电平控制而言，这比重新架构你的音频路由要简单得多。</p>

<p>准备好让你的监听电平保持稳定、同时其他一切各就各位了吗？<a href="https://apps.apple.com/app/id6772792641">去 Mac App Store 获取 SoundDial</a>，一次性 €14.99，给你的 DAW 它自己的音量。</p>`,
  },
  "audio-hijack-alternative-simple-volume-mac": {
    slug: "audio-hijack-alternative-simple-volume-mac",
    title: "在 Mac 上做分应用音量的一款更简单的 Audio Hijack 替代品",
    description: "如果你只想在 macOS 上为每个应用独立设置音量，Audio Hijack 就是杀鸡用牛刀。这里有一款更轻、更便宜的菜单栏替代品，无需音频路由就能做分应用音量、静音和提升。",
    date: "2026-07-23",
    readTime: "5 分钟阅读",
    content: `<p>如果你想要的只是在 macOS 上为每个应用独立设置音量，Audio Hijack 就比你所需的多得多。它是一套专业的音频路由和录制套件（约 $79），为捕获、效果和会话图而打造。要单纯地把一个应用调低、另一个调高，像 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 这样一款轻量的菜单栏调音台更快、更便宜，而且随时待命。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 在 Mac 上做分应用音量的一款更简单的 Audio Hijack 替代品" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>人们一开始为什么会去找 Audio Hijack</h2>

<p>macOS 没有内置的分应用音量调音台。Windows 多年来在它的音量合成器里一直有一个，但在 Mac 上，音量键和菜单栏滑块只移动一样东西：系统主音量。没有第一方的办法说「让 Spotify 停在 40%，但把我的视频通话保持在 100%」。</p>

<p>于是人们去找变通办法，然后落到了 Audio Hijack 上。它<em>能</em>做分应用音量，因为它能拦截并处理来自任何单个应用的音频。但那个能力是它真正被设计来做的事的副产品：从应用和硬件录制音频、串联效果、在虚拟设备之间路由，以及构建可复用的会话流水线。它在那方面确实很出色，只是对一个轻量的问题给了一个很重的答案。</p>

<h2>Audio Hijack 在哪里成了杀鸡用牛刀</h2>

<p>有几件事往往让那些只想要一个音量滑块的人感到沮丧：</p>

<ul>
<li><strong>价格。</strong>Audio Hijack 大约 $79。作为一款把录音室装进应用的软件，这价格算公道；但为了把一个浏览器标签页调低，这就很多了。</li>
<li><strong>它必须一直运行。</strong>它的分应用处理只在那个应用打开、相关会话处于活动状态时才起作用。退出它，你的音量就还原了。你为了把一个滑块固定住，要让一整套音频工作站常驻。</li>
<li><strong>基于会话的思维。</strong>你用模块和连接来构建会话。对捕获很强大，但当你的目标是「这个应用更轻、那个应用更响」时，这是很大的概念负担。</li>
<li><strong>界面很深。</strong>效果、路由、电平表、模块接线——如果你从不录任何东西，你大多会忽略这一大片功能面。</li>
</ul>

<blockquote>经验法则：如果你想<em>录制或路由</em>音频，Audio Hijack 值它的价。如果你只想在应用之间<em>平衡</em>音频，那你就是在需要一个旋钮时买了一整间车间。</blockquote>

<h2>更简单的替代品：一款菜单栏音量调音台</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 只做大多数人真正为之而来的那一件事，也只做那件事。它驻留在你的菜单栏。点击图标，你就得到一个实时列表，列出每个当前正在播放音频的应用，每个都有各自的滑块。把 Spotify 拖到 30%、让你的通话停在 100%、把 Slack 完全静音——搞定，无需构建会话。</p>

<p>它覆盖了什么：</p>

<ul>
<li><strong>每个应用独立的音量</strong>——每个音源都有自己的滑块，可实时调整。</li>
<li><strong>分应用静音</strong>——一键静音某个吵闹的应用而不碰其他任何东西。</li>
<li><strong>分应用音量提升</strong>——当某个应用自身的最大值仍然太轻时，把它推到 100% <em>以上</em>。这是系统滑块永远做不到的一环。</li>
<li><strong>音量配置</strong>——保存整套混音（音乐低、通话响、通知静音），并为某个场景一键调用它。</li>
<li><strong>自动闪避</strong>——在有更重要的东西开始时自动降低背景音频，这样通话或视频就不会被你的歌单埋没。</li>
<li><strong>快速输出切换</strong>——从同一个菜单在耳机、扬声器和其他输出之间跳转。</li>
</ul>

<h2>实操：在一分钟内获得分应用控制</h2>

<p>设置上的差别正是关键所在。用一款路由工具，你得创建一个会话、添加一个源模块、把它接线，并让应用保持运行。而在这里，基本上就是：</p>

<ul>
<li>从 Mac App Store 安装 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>。</li>
<li>在几个应用里播放音频，让它们出现在列表中。</li>
<li>点击菜单栏图标，把每个应用的滑块拖到合适的位置。</li>
<li>可选择把那套混音保存为配置，或把一个过于安静的应用提升过 100%。</li>
</ul>

<p>因为它通过 Mac App Store 分发，所以它处于沙盒中，安装起来跟任何普通应用一样——没有 <code>.dmg</code> 要拖、没有内核扩展、没有需要在「安全性」设置里批准的音频驱动，也没有任何在 macOS 更新后需要重新批准的东西。最后这一点很重要：基于驱动的调音台历来会在系统升级时失效，并需要重装一个系统级组件。一款沙盒化的 App Store 应用避开了这整类维护。</p>

<h2>你该选哪一个？</h2>

<p>对这份活儿要诚实。如果你需要录制应用或硬件音频、施加实时效果，或在虚拟设备之间构建路由图，就选 <strong>Audio Hijack</strong>。那是它的主场，在那里它值每一分钱。</p>

<p>如果你实际的需求是「让我独立地设置每个应用的音量」，就选一款专门的菜单栏调音台。你会一次性花 €14.99 而不是约 $79，省掉会话搭建，并在一个从菜单栏打开的面板里得到提升、静音、配置和闪避。没有你永远用不到的录制功能，也没有一套为了固定一个滑块而在后台运行的工作站。</p>

<p>大多数为了音量平衡而尝试 Audio Hijack 的人，是在用一个大工具解决一个小问题。如果那就是你，那小工具更合适——而且花的钱只是一小部分。</p>

<p><a href="https://apps.apple.com/app/id6772792641">去 Mac App Store 获取 SoundDial</a>，€14.99，一次付费——分应用音量、提升、静音、配置和自动闪避，就在你的菜单栏里。</p>`,
  },
  "boom-3d-alternative-per-app-volume-mac": {
    slug: "boom-3d-alternative-per-app-volume-mac",
    title: "Boom 3D 替代品：没有臃肿的分应用音量（Mac）",
    description: "如果你用 Boom 3D 主要是为了增强音频，但真正想要的是分应用音量控制，那么 SoundDial 是更精简的 Mac 替代品：每个应用独立音量、分应用静音和提升、一次性价格，没有全系统 EQ 或驱动。",
    date: "2026-07-23",
    readTime: "5 分钟阅读",
    content: `<p>如果你动用 Boom 3D 来增强音量，但实际上想要的是分别控制每个应用，那你想要的是另一种工具。Boom 3D 是一款全系统音量增强器和 EQ。<a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 是一款专注的分应用音量调音台：为每个应用提供独立音量、静音和提升，一次性 €14.99，没有 EQ，没有驱动。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Boom 3D 替代品：没有臃肿的分应用音量（Mac）" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Boom 3D 实际上做什么（以及不做什么）</h2>
<p>Boom 3D 围绕三样东西打造：一个全系统音量增强、一个 31 段均衡器，以及 3D「环绕」效果。它把这些一次性应用到你的 Mac 播放的<em>一切</em>上。如果你的目标是一台更响的笔记本，或者一条你在整体上喜欢的低音曲线，那这确实有用。</p>
<p>Boom 3D 不擅长的，是把应用当作独立的声道来对待。没有干净的办法说「Spotify 40%、我的视频通话 100%，而这个浏览器标签页静音」。它的滑块移动整套混音。而且因为它安装一个音频驱动坐在信号通路里，它触及你系统的层级比一个沙盒化的实用工具要低。它还被定位为一款有升级周期的付费产品，而不是一款小巧的一次性工具。</p>
<blockquote><p>常见的故事是：人们装上 Boom 3D 来让一个安静的应用更响，然后意识到真正的问题是 macOS 根本没有分应用音量调音台。</p></blockquote>

<h2>缺口所在：macOS 没有音量调音台</h2>
<p>这让从 Windows 过来的人感到意外。Windows 多年来一直有一个分应用音量合成器——右键点击扬声器，单独设置每个应用的音量。macOS 就是没有推出这个。你得到一个主音量，以及每个应用碰巧暴露出来的内部滑块。没有操作系统级的办法在 Slack、一个 YouTube 标签页和一个游戏之间做平衡。</p>
<p>所以当一个音乐应用盖过你的通话时，你原生的选择只有粗糙的两种：把主音量调低（这会让一切都变安静），或者翻遍每个应用自己的设置、指望它有一个音量控制。Boom 3D 也没有补上那个缺口——它让整套混音更响，而不是每个应用。</p>

<h2>SoundDial 的定位</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 就是那款缺失的调音台。它驻留在你的菜单栏，给每个正在运行的应用它自己的一行、带它自己的滑块。这就是它与 Boom 3D 的核心区别：你得到的不是一个全局效果，而是分音源的控制。</p>
<ul>
<li><strong>每个应用独立的音量</strong>——把 Spotify 设为 30%，同时让你的视频通话停在 100%。</li>
<li><strong>分应用静音</strong>——即时静音某个吵闹的应用而不碰其他任何东西。</li>
<li><strong>分应用提升</strong>——如果你喜欢 Boom 3D 的「超过 100%」这一招，SoundDial 保留了它，但是针对某一个应用而不是整个系统。安静的应用会各自被推过它们正常的上限。</li>
<li><strong>音量配置</strong>——保存一套调音台布局（例如「游戏」「会议」「音乐」），并一键调用它，而不必每次重新平衡滑块。</li>
<li><strong>自动闪避</strong>——在有重要的东西开始时自动降低背景音频，这样通话或游戏提示音就不会被音乐埋没。</li>
<li><strong>快速输出切换</strong>——从同一个菜单在耳机、扬声器和其他输出之间跳转。</li>
</ul>
<p>SoundDial 有意不做的，是 Boom 3D 其余那一大堆功能蔓延。没有 31 段 EQ、没有伪环绕处理、没有全系统效果链。如果你想要一个母带级的 EQ，Boom 3D 或一套专门的音频套件才是对的选择。如果你一次次打开 Boom 3D 实际上是为了<em>音量</em>，那片功能面就是你花钱扛着的臃肿。</p>

<h2>提升，但不用驱动</h2>
<p>「提升」这个问题值得一个直接的答案，因为它通常正是 Boom 3D 用户去找替代品的原因。Boom 3D 的提升是全局的、基于驱动的。SoundDial 的提升是分应用的，并运行在 Apple 的应用沙盒模型内——它通过 Mac App Store 分发，所以没有单独的安装程序、没有内核级驱动，也没有日后要卸载的残留系统组件。你得到「让这一个安静的应用更响」的结果，却不用把一个驱动对你整条音频通路的控制权交出去。</p>

<h2>价格：一次性 vs 持续</h2>
<p>Boom 3D 是一款付费应用，有它自己的升级和授权模式，价格因平台和版本而异。<a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 是单次一次性购买，€14.99——买一次，永久拥有，无订阅，也无需为保持调音台可用而按版本重新购买。对于一款你每天会让它在菜单栏里一直运行的实用工具，一个固定价格往往比一款你得不断重新买入的产品更经得起时间。</p>

<h2>你该选哪一个？</h2>
<ul>
<li><strong>选 Boom 3D</strong>，如果你真正的需求是一个严肃的均衡器和全系统音频效果，而且你不介意混入一个音频驱动。</li>
<li><strong>选 SoundDial</strong>，如果你想要 Windows 用户习以为常的东西——一款真正的分应用音量调音台——外加有针对性的提升、配置和自动闪避，一次性价格，没有驱动需要安装。</li>
</ul>
<p>大多数从 Boom 3D 弹开的人属于第二组。他们不想调频率；他们想让浏览器比通话更安静。那正是 SoundDial 为之而生的活儿。</p>

<p><strong>想在 Mac 上获得分应用音量控制，而不要 EQ 臃肿或订阅？</strong><a href="https://apps.apple.com/app/id6772792641">去 Mac App Store 获取 SoundDial</a>——€14.99 一次付费，处于沙盒中，无驱动，而且每个应用都有它自己的滑块。</p>`,
  },
  "mute-everything-except-one-app-mac": {
    slug: "mute-everything-except-one-app-mac",
    title: "如何在你的 Mac 上静音除某一个应用外的一切",
    description: "macOS 没有分应用音量调音台，所以要静音除某一个之外的每个应用需要一个辅助工具。这里教你如何只听你的通话、直播或游戏，而其他一切保持静音。",
    date: "2026-07-23",
    readTime: "5 分钟阅读",
    content: `<p>macOS 没有内置的静音单个应用的办法，所以要只听一个应用，你需要一款分应用音量调音台。安装 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>，打开它的菜单栏调音台，静音除你想听的那一个之外的每个应用，那个应用就会继续播放，而其余的会立即安静下来。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 如何在你的 Mac 上静音除某一个应用外的一切" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>为什么 macOS 自己做不到这一点</h2>
<p>Windows 十多年来一直有音量合成器：右键点击扬声器图标，每个正在运行的应用都有它自己的滑块。macOS 从来没有推出过这个。你 Mac 上的音量键只控制一样东西，主输出电平。当你把系统调低，一切一起变小。当你静音，一切一起静音。</p>
<p>在你同时有五样东西在发声之前，这都还好。你在视频通话中，但一个浏览器标签页在自动播放广告、Spotify 还在跑、一个游戏在后台叮当作响、Slack 在响。你原生的选择只有：退出应用、在每个应用自己的设置里逐个静音它们（如果它有那个选项的话），或者拔掉你的耳机。这些都无法让你说一句「留下这一个，把其余静音」。</p>

<h2>直截了当的办法：用调音台静音其余</h2>
<p>一款分应用调音台坐在你的应用和你的输出设备之间，给每个应用它自己的音量和静音控制。一旦你有一个在运行，隔离出某一个应用只需几秒：</p>
<ul>
<li>从你的菜单栏打开调音台。你会看到一个实时列表，列出每个当前正在发声的应用。</li>
<li>找到你想听的那一个应用，你的通话、你的直播、你的游戏。</li>
<li>静音其他一切。轻点每个其他应用旁的静音开关，或把它的滑块拉到零。</li>
<li>就这样。你留下不动的那一个应用会以满音量继续播放，而其余的保持静音。</li>
</ul>
<p>用 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>，列表里的每个应用都有它自己的滑块和它自己的静音按钮，所以这只需点几下。稍后开始播放的新应用会自动出现，所以如果一声通知想溜进来，你可以当场把它静音而不碰你专注的那个应用。</p>

<blockquote>诀窍在于，静音「除一个之外的一切」不过是静音一个应用的反向操作。你不是在让你的 Mac 静音，你是在让你真正在意的那样东西周围的噪声安静下来。</blockquote>

<h2>把它保存为配置，这样你就不用重做</h2>
<p>如果这是一套你经常动用的设置，每次都手动来会让人厌烦。比如说，你在开会时总想让你的通话应用响、其他一切关掉，或者你想让你的直播居于中心而游戏和浏览器保持安静。一个音量配置会存下那些确切的分应用设置，并一键重新应用它们。</p>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 让你保存像「会议」或「仅直播」这样的配置，然后在你需要它们的瞬间切换过去。设置一次，隔离出你那一个应用就成了菜单栏里的一个动作，而不是一件拖五个滑块的苦差事。</p>

<h2>更聪明的版本：自动闪避而不是硬静音</h2>
<p>有时你并不想让其他应用完全消失，你只是想让它们在有更重要的东西开始时让开。那就是自动闪避。当你的优先应用播放时，背景应用会自动降到一个低电平，然后在它停下时再升回来。</p>
<p>这对通话和直播来说很理想。当有人开始说话时，你的音乐会降下去让你能听清他们，而当通话结束时，音乐会自己升回来。你得到「清晰地听一个应用」的结果，而无需在情况每次变化时手动静音和取消静音。<a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 在手动调音台之外还包含自动闪避，所以你可以选择硬静音来彻底安静，或选择闪避来获得一个更柔和的背景。</p>

<h2>提升你留下的那一个应用</h2>
<p>隔离出某一个应用还有个额外好处：你也可以让它比你的 Mac 正常允许的更响。有些应用，尤其是安静的视频通话或母带做得差的直播，即便在最大音量下也几乎听不见。分应用提升把某个单独的应用推过 100%，而不必拉高你的系统输出——那只会把你已经静音的那些应用一起放大。</p>
<p>所以完整的操作是：静音噪声、留下你那一个应用，如果那个应用太安静，就提升它。<a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 在同一个调音台窗口里处理这全部三件事。</p>

<h2>你不会被拉去背负的东西</h2>
<p>对 Mac 音频工具的一个常见担忧是它们需要内核扩展、虚拟音频驱动，或从某个随便的网站下载的可疑安装程序。那是个合理的顾虑，也正是有些人干脆避开这类应用的原因。</p>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 上架于 Mac App Store，处于沙盒中，安装起来跟任何普通应用一样，没有驱动、没有 DMG、没有需要批准的系统扩展。它是一次性 €14.99 的购买而不是订阅，所以你付一次就永久拥有。对于一款你会让它在菜单栏里运行一整天的东西，这一点很重要。</p>

<h2>快速回顾</h2>
<ul>
<li>macOS 没有原生的分应用音量控制，所以你需要一款调音台来做这件事。</li>
<li>打开调音台，留下你那一个应用，把其他一切静音或归零。</li>
<li>把它保存为一个配置，用于你经常进行的通话或直播。</li>
<li>如果你想让背景应用变安静而不是被杀掉，就用自动闪避。</li>
<li>如果你留下的那个应用自身太安静，就提升它。</li>
</ul>

<p>想只听要紧的、把其余静音？<a href="https://apps.apple.com/app/id6772792641">去 Mac App Store 获取 SoundDial</a>，在一分钟内设好你的第一个「静音其余」配置。</p>`,
  },
  "different-volume-per-output-device-mac": {
    slug: "different-volume-per-output-device-mac",
    title: "在 Mac 上为扬声器和耳机保留各自不同的音量",
    description: "macOS 在你于扬声器和耳机之间切换时会忘记你的应用级音量混音。这里说明为什么会发生、手动的局限，以及分应用音量记忆如何修复它。",
    date: "2026-07-23",
    readTime: "5 分钟阅读",
    content: `<p>macOS 其实会为每个输出设备记住一个各自的系统音量，但每次你切换时它都会忘记你的应用级平衡。所以耳机和扬声器保留着各自的整体电平，然而你一拔线，一个应用轰鸣、另一个消失。修复办法是能扛过设备切换的分应用音量记忆，而 macOS 对此没有原生工具。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 在 Mac 上为扬声器和耳机保留各自不同的音量" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>macOS 记住什么、又不记住什么</h2>

<p>有一种常见的看法认为 macOS 对每个输出设备一视同仁。它并非如此。每个输出设备存储它自己的系统音量。把你的 MacBook 扬声器设为 30%、AirPods 设为 80%，macOS 会把这两个数字分开记着。插上、拔下、重新连接，每个设备都会回到你离开时的位置。</p>

<p>那为什么体验仍然感觉是坏的？因为那份记忆止步于那个单一的、全局的滑块。macOS 对给定设备上正在播放的一切只有一个音量控制。它不记得个别应用有多响。当你从扬声器切换到耳机时，Spotify、一个 Zoom 通话和一个 YouTube 标签页之间的平衡不会被保留，因为那份平衡从来就不存在。每个应用共用同一个滑块。</p>

<p>结果就是人们所描述的「扬声器和耳机音量不同」的那种沮丧。他们通常想要的不只是每个设备一个不同的主电平，而是一份记住的混音：安静的音乐、响亮的通话、调低的通知，而且无论他们在桌面扬声器还是耳机上，那份混音都完好无损。</p>

<h2>手动的变通办法及其不足之处</h2>

<p>你可以用内置工具做到一部分，在动用别的东西之前值得先了解它的上限。</p>

<ul>
<li><strong>把每个设备的系统音量各设一次。</strong>通过你的扬声器播放音频，设好电平，然后把输出切换到耳机并设好那个电平。macOS 会保留两者。这处理了每个设备的主音量，但对分应用毫无作用。</li>
<li><strong>在应用提供的地方使用分应用音量。</strong>Spotify、VLC 和大多数浏览器都有它们自己的内部音量。你可以在应用内部把一个响亮的应用调低。问题是：这个设置存在应用里、而不是设备里，所以当你切换到耳机时它不会变，而且大多数应用（Slack、Zoom、系统通知、「邮件」）根本没有这样的控制。</li>
<li><strong>从控制中心或菜单栏切换输出。</strong>Option 点击菜单栏里的音量图标，就能在设备之间快速跳转。很快，但它只挪动主电平，并不恢复一份分应用混音。</li>
</ul>

<p>这些给你的是每个设备一个主音量。它们谁都没能给你的，是一份能跨设备跟随你的、记住的分应用平衡。那个缺口正是烦恼所在，而且它是结构性的：这个操作系统根本没有分应用调音台，不像 Windows 多年前就推出了一个。</p>

<h2>分应用音量记忆，以及为什么设备切换才是真正的问题</h2>

<p>更深层的修复是给每个应用它自己的音量，并让那些设置持久保留。那正是像 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 这样的分应用调音台所打造的目标。它驻留在你的菜单栏，列出每个当前正在发声的应用，并给每个一个独立的滑块、一个静音开关，甚至一个针对安静应用的、超过 100% 的提升。</p>

<p>对扬声器与耳机这个问题真正重要的部分是：那些电平会被记住。把你的音乐设为 40%、通话设为 90%、把一个话痨应用设为静音，<a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 就会保留那份混音。当你拔下耳机、退回扬声器时，你不用每次都手动重新平衡三个应用。</p>

<p>音量配置把这一点更推进一步。你可以保存一套命名的分应用电平并一键调用它，这样一份「耳机、专注工作」的混音和一份「扬声器、开会」的混音，就各自是一次单击选择、而不是一次手动重置。</p>

<blockquote><p>思维的转变：别再想着一个你不断拖动的主滑块，而是开始想着每种情境一份已存的混音。设备切换就不再是一件重新平衡的苦差事。</p></blockquote>

<h2>快速输出切换而不丢失你的混音</h2>

<p>切换设备应当既快又不具破坏性。从同一个菜单栏面板，你就能更改你的输出设备，所以从扬声器切到耳机只需一击，而你的分应用电平会一起过来，而不是塌回一个单一的全局数字。</p>

<p>一个值得一提的相关功能是自动闪避：当音频从你的麦克风进来时（你开始说话，或一个通话开始），其他应用会自动降下来让你被听清，之后再回到它们设定的电平。这是把同样的原理应用到注意力而非设备上，又是一件 macOS 自己不会做的事。</p>

<h2>如何设置它</h2>

<ul>
<li>从 Mac App Store 安装 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>。它处于沙盒中，所以没有驱动、没有 DMG，也没有需要批准的内核扩展。</li>
<li>在你最常用的应用里播放音频，让它们出现在调音台中。</li>
<li>设置每个应用的电平，静音你不想要的，提升任何太安静的。</li>
<li>把那套安排保存为一个配置，比如一个为耳机调好的、一个为扬声器调好的。</li>
<li>当你切换设备时，调用匹配的配置，或者干脆让你已存的分应用电平顺延过来。</li>
</ul>

<p>坦诚的总结：macOS 确实在主音量层面为每个输出设备记住音量，但它永远不会记住你的分应用混音，因为它没有分应用调音台。如果你真正的目标是一份在音乐、通话和通知之间的、能扛过每一次扬声器与耳机切换的一致平衡，那你就需要在操作系统之上加一层分应用记忆。</p>

<p>想让扬声器和耳机各自保留它们的混音、而不用重新调整每个应用？<a href="https://apps.apple.com/app/id6772792641">去 Mac App Store 获取 SoundDial</a>，一次性 €14.99，无订阅，无驱动。</p>`,
  },
  "sound-control-alternative-mac": {
    slug: "sound-control-alternative-mac",
    title: "Sound Control 停产了吗？最佳 Mac 每应用卷替换 (2026)",
    description: "Static Z Software 的 Sound Control 已停产，并在现代 macOS 上中断。以下是它停止工作的原因、它做了什么，以及 2026 年最好切换到的每应用音量混合器。",
    date: "2026-07-23",
    readTime: "5 分钟阅读",
    content: `<p>Static Z Software 的 Sound Control 已停产，不再销售或更新，并且它在现代 macOS 上越来越失败，因为它依赖于 Apple 锁定的内核级音频驱动程序。如果您今天需要每个应用程序的数量，最干净的替代品是 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>，一个没有驱动程序的沙盒 Mac App Store 混音器。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Sound Control 停产了吗？最佳 Mac 每应用卷替换 (2026)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Sound Control实际上做了什么</h2>
<p>多年来，Sound Control 一直是解决 macOS 真正差距的首选答案：Mac 上仍然没有内置的每个应用程序音量混合器。自 Vista 以来，Windows 的音量混合器中就有一个，但 macOS 只为您提供一个主滑块。 Sound Control 用整洁的菜单栏面板填补了这个漏洞，让您：</p>
<ul>
<li>为每个正在运行的应用程序设置独立的音量级别。</li>
<li>将单个应用程序静音，而不影响系统音频的其余部分。</li>
<li>将安静的应用程序提升到 100% 以上。</li>
<li>应用每个应用程序的均衡器和平衡调整。</li>
<li>将音频和固定应用程序路由到特定的输出设备。</li>
</ul>
<p>对于任何曾经经历过 Zoom 呼叫爆炸而背景 YouTube 选项卡窃窃私语的人来说，每个应用程序的控制是变革性的。它成为许多 Mac 高级用户机器上的安静主食。</p>

<h2>为什么它停止工作</h2>
<p>诚实的技术故事在这里很重要，因为它解释了为什么这不是一个可以简单修补的错误。 Sound Control 的工作原理是安装系统音频驱动程序 - 一个内核扩展 (kext)，它将自身插入到 macOS 音频管道中，以便它可以拦截和重塑每个应用程序的输出。正是这种深钩使 EQ 和增强功能成为可能。</p>
<p>从 macOS 10.15 Catalina 开始，并通过 Big Sur 和 Apple Silicon 过渡加速，Apple 开始弃用内核扩展，转而采用用户空间替代方案。在 Apple Silicon Mac 上，加载第三方 kext 需要降低恢复模式下的系统安全性，并且 Apple 已明确表示传统音频 kext 已处于借用时间。 Static Z Software 最终停止销售和开发 Sound Control。结果是：在最近的 macOS 版本上，安装失败，音频出现故障，或者驱动程序只是拒绝加载，而没有安全降级，这是大多数人不想做的。</p>
<blockquote>这并不是开发商的疏忽。这是一个平台级别的转变。 Apple 关闭了围绕 Sound Control 构建的低级音频驱动程序的大门，并且没有任何更新可以完全重新打开它。</blockquote>

<h2>现代macOS发生了什么变化</h2>
<p>苹果确实添加了一项相关内容：Core Audio 现在提供了一个 Tap API（在 macOS 14.2 Sonoma 中引入），允许应用程序从用户空间捕获和处理每个进程的音频 - 没有 kext，没有安全降级，没有重新启动到恢复。这是每个应用程序音频的认可现代路径，也是当前混音器应该构建的基础。权衡是诚实的：用户空间点击比旧的内核驱动程序受到更多限制，因此您应该期望干净的每个应用程序音量、静音和增强，而不是提供完整的每个应用程序参数 EQ Sound Control。</p>

<h2>最佳替代品：SoundDial</h2>
<p>如果您想要 Sound Control 所做的核心 - 每个应用程序的独立卷 - 在 Mac 上您实际上可以保持安全和最新， <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 是 2026 年最接近的干净迁移选项。它是一个菜单栏每个应用音量混合器，专为现代 macOS 音频堆栈而构建。 Sound Control 工作流程的继承内容：</p>
<ul>
<li><strong>每个应用程序的独立音量</strong> — 每个正在运行的应用程序有一个滑块，位于菜单栏中。</li>
<li><strong>每个应用程序静音</strong> — 使一个应用程序静音，而其他所有应用程序继续运行。</li>
<li><strong>每个应用程序的音量提升</strong> — 将安静的应用程序推到其正常上限之上。</li>
<li><strong>体积曲线</strong> — 保存不同环境（通话、音乐、游戏）的混音器设置并在它们之间切换。</li>
<li><strong>自动闪避</strong> - 自动降低后台应用程序音量，当您开始讲话或有电话打入时非常有用。</li>
<li><strong>快速输出切换</strong> — 在扬声器、耳机和其他设备之间跳转，无需深入系统设置。</li>
</ul>
<p>对于迁移来说重要的实际差异： <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 通过 Mac App Store 发货，经过沙箱处理，不安装任何驱动程序，也不安装 DMG。这意味着无需批准内核扩展，无需恢复模式，也不会降低 Mac 的安全状况——这正是杀死 Sound Control 的痛点。这是一次性购买，价格为 14.99 欧元，而不是订阅。</p>

<h2>如何切换，一步一步</h2>
<ul>
<li><strong>干净地卸载Sound Control。</strong> 因为它安装了驱动程序，所以如果它仍然运行，请使用自己的卸载程序，或者在安装任何新内容之前删除其音频驱动程序组件。两个竞争的音频挂钩可能会导致故障。</li>
<li><strong>从 App Store 安装 SoundDial。</strong> 无需重新启动或进行安全更改。</li>
<li><strong>授予它请求的音频权限。</strong> 这就是让它读取和控制现代 macOS 上每个应用程序输出的原因。</li>
<li><strong>打开菜单栏面板并设置级别。</strong> 您正在运行的应用程序会显示单独的滑块；根据需要进行调整、静音或增强。</li>
<li><strong>保存个人资料。</strong> 如果您有最喜欢的 Sound Control 设置，请将它们重新创建为配置文件，以便您可以一键切换。</li>
</ul>

<h2>诚实的期望</h2>
<p>如果您使用 Sound Control 的唯一原因是每个应用程序的音量、静音和增强，那么现代的沙盒混音器可以完全满足您的需求。如果您严重依赖其每个应用程序的均衡器，请注意深度均衡器与旧的驱动程序模型相关，并且是在苹果当前规则下最难干净地重现的功能。相应地设定期望，你就不会感到惊讶。</p>

<p>准备好恢复每个应用程序的音量了吗？ <a href="https://apps.apple.com/app/id6772792641">在 Mac App Store 上获取 SoundDial</a> — 一次性 14.99 欧元，沙盒，无需订阅，无需驱动程序。</p>`,
  },
  "soundbunny-alternative-mac": {
    slug: "soundbunny-alternative-mac",
    title: "SoundBunny 已不复存在 — 现代 Mac Per-App Volume 应用程序将取代它",
    description: "Prosoft 的 SoundBunny 已停产。这是当前积极维护的 macOS 每个应用程序音量混合器来替换它 - 以及如何在没有内核驱动程序的情况下迁移每个应用程序音频设置。",
    date: "2026-07-23",
    readTime: "5 分钟阅读",
    content: `<p>如果 SoundBunny 停止工作或不再出售，则现代替代品是 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>，专为当前 macOS 构建的菜单栏每个应用程序音量混合器。它为您提供与一次性购买 Mac App Store 相同的核心功能（每个应用程序的独立音量、静音和增强），无需管理内核驱动程序、DMG 或订阅，只需 14.99 欧元。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — SoundBunny 已消失 — 现代 Mac 每应用卷应用程序将取代它" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>SoundBunny怎么了？</h2>
<p>SoundBunny 是 Prosoft Engineering 针对 macOS 的每应用程序卷实用程序。它允许您直接从菜单栏为每个正在运行的应用程序设置不同的音量级别 - 音乐安静，通话大声，浏览器介于两者之间。多年来，它是填补苹果从未填补空白的少数工具之一。</p>
<p>问题是 SoundBunny 是遗留软件。它没有跟上苹果对 macOS 音频和安全性所做的深刻改变——Apple Silicon、强化的运行时、收紧的系统扩展规则以及删除旧的音频挂钩。当像这样的实用程序停止接收更新时，它最终会崩溃：无法启动，在操作系统更新后失去对应用程序流的控制，或者根本无法在现代 Mac 上干净地安装。如果那是你的处境，那么你就没有做错任何事。落后的是应用程序，而不是你。</p>

<h2>为什么macOS仍然需要第三方混音器</h2>
<p>这是诚实的部分：这是 macOS 中的真正差距，而不是您可以在“设置”中修复的错误。 Windows 十多年来一直为每个应用程序提供音量混合器。 macOS从来没有过。系统音量滑块和声音设置控制您的 <em>输出设备</em> 作为一个整体——每个应用程序都具有相同的大师级别。没有内置方法可以说“将 Safari 保持在 40%，但将 Zoom 保持在 100%”。</p>
<p>这就是像 SoundBunny 这样的工具存在的原因，也是今天仍然需要更换的原因。当应用程序出现时，这种需求并没有消失——苹果只是还没有解决这个问题。</p>

<h2>现代替代品：SoundDial</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 是一个每个应用程序的音量混合器，位于菜单栏中，可以执行 SoundBunny 用户所依赖的功能，是针对今天的 macOS 而不是昨天的 macOS 构建的。功能重叠涵盖了要点：</p>
<ul>
<li><strong>每个应用程序的独立音量</strong> — 每个正在运行的应用程序一个滑块，正是 SoundBunny 心理模型。</li>
<li><strong>每个应用程序静音</strong> — 使一个嘈杂的应用程序静音，而不影响其他所有应用程序。</li>
<li><strong>每个应用程序的音量提升</strong> — 推送一个安静的应用程序 <em>上面</em> 当视频或通话录音太低时为 100%。 SoundBunny 无法可靠地放大现代 macOS 上过去的系统最大值； boost在这里是真正的升级。</li>
<li><strong>体积曲线</strong> - 保存一组每个应用程序的级别（“工作”组合，“游戏”组合）并在它们之间切换，而不是一次轻推一个滑块。</li>
<li><strong>自动闪避</strong> - 当另一个音频源（例如通话中的麦克风）处于活动状态时，自动降低后台应用程序音量。</li>
<li><strong>快速输出切换</strong> — 从同一菜单在扬声器、耳机和其他输出之间跳转。</li>
</ul>

<h2>迁移实际上是什么样子</h2>
<p>没有导入步骤 - 每个应用程序的音量级别不是您保留的文件 - 但切换很快：</p>
<ul>
<li><strong>正确删除SoundBunny。</strong> 退出它，然后删除该应用程序。如果它安装了任何帮助程序或登录项，请将其也删除，这样两个实用程序就不会争夺相同的音频流。</li>
<li><strong>从 Mac App Store 安装 SoundDial。</strong> 它是沙盒化的，并通过商店分发，因此不需要安装 DMG，也没有“身份不明的开发人员”警告。一次购买，与您的 Apple ID 绑定。</li>
<li><strong>首次启动时授予音频访问权限。</strong> macOS 将请求 SoundDial 允许查看应用程序音频。这是苹果公司提供的现代的、经过认可的途径——无需内核扩展，无需重新启动，也不会降低系统安全性。授予它，您正在运行的应用程序将显示为滑块。</li>
<li><strong>重建你的混音。</strong> 设置常用应用程序，然后将该安排保存为配置文件，这样您就无需重做。</li>
</ul>

<h2>与SoundBunny的实际差异</h2>
<p>最重要的区别是 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 是当前软件。它在 Apple Silicon 上本地运行，使用 Apple 支持的音频 API，并且是一个 Mac App Store 应用程序 - 这意味着更新通过商店到达，并且它的构建是为了在操作系统升级中生存而不是破坏它们。沙盒化还意味着它无法超出其通道，这对于位于应用程序和扬声器之间的东西来说是令人放心的。</p>
<p>一些诚实的警告，所以期望是正确的。由于 SoundDial 在 Apple 的音频框架内工作，因此控制最适合通过正常系统输出路由的标准应用程序。一些软件通过自己的路径或专用设备播放音频，并且没有菜单栏混音器（包括 SoundBunny）可以完全控制这些。每个应用程序的体积本质上是 macOS 之上的软件层；它不是硬件混音器。在这些实际限制内，它可以完成 SoundBunny 过去所做的工作。</p>

<blockquote>如果您从 Windows 切换到 Mac，并期望每个应用程序都有音量混合器，那么这个工具可以填补这一空白 - 现在它实际上是一个正在维护的工具。</blockquote>

<p>SoundBunny 运行良好，但它是遗产。如果您需要现代 Mac 上的每个应用程序音量、静音和增强， <a href="https://apps.apple.com/app/id6772792641">在 Mac App Store 上获取 SoundDial</a> — 一次 14.99 欧元，无需订阅，无需驱动程序。</p>`,
  },
  "boom-2-alternative-per-app-volume-mac": {
    slug: "boom-2-alternative-per-app-volume-mac",
    title: "Boom 2 Mac 的替代方案：每应用程序数量，无需 Boom 3D 追加销售",
    description: "Boom 2 是传统的，并不断将您推向 Boom 3D。如果您只想提高每个应用程序的数量并在现代 macOS 上进行简单的提升，这里有一个集中的替代方案及其工作原理。",
    date: "2026-07-23",
    readTime: "5 分钟阅读",
    content: `<p>如果您喜欢 Boom 2 进行系统范围的提升但想要简单 <strong>每个应用程序</strong> 当前 Mac 的音量，诚实的答案是 Boom 2 是遗留的，不再是正确的工具。一个集中的替代方案是 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>，一个菜单栏混音器，为每个应用程序提供自己的音量滑块、静音和增强功能，一次价格为 14.99 欧元，无需推送更大的捆绑包。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac 的 Boom 2 替代方案：无需 Boom 3D 追加销售的按应用程序数量" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>为什么Boom 2不再适合</h2>
<p>Boom 2 成为一款深受喜爱的应用程序有一个特定的原因：它将 Mac 的整体音量提高到超出系统最大音量，并添加了均衡器。它在整个系统范围内执行此操作，而不是每个应用程序。 2015 年还好。到了 2026 年，就会出现两个问题。</p>
<p>首先，它是遗产。 Global Delight 显然已将其精力转移到了 Boom 3D 上，如果您打开 Boom 2 产品页面，您会发现自己几乎立即就会转向更新、价格更高的应用程序。 Boom 2仍然存在，但它是供应商用来销售Boom 3D的垫脚石，而不是受到积极喜爱的产品。</p>
<p>其次，也是更重要的一点：Boom 2 从来都不是每个应用程序的音量混合器。它提高并塑造了一个主输出。如果您真正的痛苦是 Slack ping 的声音比您的音乐更大，或者浏览器选项卡淹没了通话，那么 Boom 2 无法解决这个问题。它让一切都变得更加响亮。那是不同的工作。</p>

<h2>macOS 上的“每个应用程序数量”实际上意味着什么</h2>
<p>这是大多数替代综述都会跳过的诚实背景：macOS 根本没有内置的每个应用程序音量混合器。 Windows 已经使用多年了 - 右键单击​​扬声器，打开音量混合器，然后将 Chrome 设置为 40%，将 Spotify 设置为 80%。苹果从未发货过。 macOS 音量键只能移动一级。</p>
<p>因此，当您寻找“Boom 2 替代品”时，您通常真正寻找的并不是声音更大的 Mac，而是用户认为理所当然的每个应用程序控制 Windows。这是操作系统中真正的差距，而不是 Boom 2 或任何单个应用程序忘记构建的东西。</p>

<h2>SoundDial 适合的地方</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 是专门针对这一差距而设计的。它位于菜单栏中，列出了当前播放音频的应用程序，每个应用程序都有自己的滑块。您可以为每个应用程序设置级别，而不是轻推一个主控制器并希望获得最好的结果。</p>
<p>它的作用：</p>
<ul>
<li><strong>每个应用程序的独立音量</strong> — 使浏览器安静，将音乐保存在您想要的地方，没有全局妥协。</li>
<li><strong>每个应用程序静音</strong> — 使一个嘈杂的应用程序静音，而不接触其他任何东西。</li>
<li><strong>每个应用程序的提升</strong> — 当视频或通话录制得太安静时，单个应用程序就会超过其正常上限。这是 Boom 2 粉丝通常会错过的部分，只不过这里它针对的是一个应用程序而不是整个系统。</li>
<li><strong>体积曲线</strong> — 保存“焦点”、“会议”或“游戏”等布局并一键切换。</li>
<li><strong>自动闪避</strong> — 当您开始讲话时自动降低其他应用程序的音量，这对于通话和录音非常有用。</li>
<li><strong>快速输出切换</strong> — 从同一菜单在扬声器、耳机和其他输出之间跳转。</li>
</ul>

<h2>如何设置</h2>
<p>工作流程很短：</p>
<ul>
<li>安装 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 从 Mac App Store — 没有 DMG，没有驱动程序，无需重新启动。</li>
<li>单击菜单栏图标可查看当前发出声音的每个应用程序。</li>
<li>将每个应用程序的滑块拖动到您想要的级别；根据需要单独静音或增强。</li>
<li>如果您想稍后重复使用，请将排列另存为配置文件。</li>
</ul>
<p>因为它是通过 App Store 提供的，所以它是沙盒的并且可以干净地安装。这是值得指出的，因为一些较旧的音频工具依赖于内核扩展或虚拟音频驱动程序——现代 macOS 越来越抵制这种东西。 SoundDial 不会要求您安装驱动程序或降低任何安全设置。</p>

<h2>诚实的限制</h2>
<p>每个应用程序的提升是真实的，但不是魔法。如果应用程序的源音频确实很安静或录制得很糟糕，则增强它会提高本底噪声以及信号，因此非常安静的材料在用力推动时可能会发出嘶嘶声。这是放大的物理极限，而不是任何特定应用程序的缺陷 - Boom 2 的系统增强也有同样的权衡。将增强视为实际情况的余量，而不是对损坏音频的救援。</p>

<h2>Boom 2 与聚焦混音器对比</h2>
<p>如果您喜欢 Boom 2 的是系统范围的响度加上 EQ，并且您不关心每个应用程序的控制，那么 Boom 3D 就是供应商的预期继任者 - 这是一条公平的道路，我们不会假装不是这样。但是，如果您尝试过 Boom 2 并意识到您真正想要的是调低或调高一个应用程序而不移动所有内容，那么 EQ 和增强捆绑包就是错误的工具形式。</p>
<blockquote>Boom 2使整个Mac声音更大。每个应用程序的混音器可让您决定哪个应用程序声音更大。这些解决不同的问题。</blockquote>
<p>价格差异也值得明确指出。 SoundDial 一次 14.99 欧元。没有订阅，没有试用会变成更大的计划，也没有应用内路径引导您进入更昂贵的级别。您购买了搅拌机，您就拥有了搅拌机。</p>

<p>如果每个应用程序的音量（而不是系统范围的均衡器）才是您真正想要的， <a href="https://apps.apple.com/app/id6772792641">在 Mac App Store 上尝试 SoundDial</a> 并按照 macOS 应该让您一直进行的方式设置您的级别。</p>`,
  },
  "finetune-vs-sounddial-mac": {
    slug: "finetune-vs-sounddial-mac",
    title: "FineTune 与 SoundDial：Mac 上的免费开源与按应用程序付费量",
    description: "FineTune 是一款针对 Mac 的免费开源按应用批量应用； SoundDial 是一款付费沙盒 App Store 应用程序，具有增强功能、配置文件和支持。这是一个诚实的比较，可以帮助您选择。",
    date: "2026-07-23",
    readTime: "6 分钟阅读",
    content: `<p>FineTune 是一款适用于 macOS 的免费开源每应用音量混合器，因此，如果价格是您唯一关心的问题，那么它是一个真正的选择。 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 是一款付费（14.99 欧元，一次性）Mac App Store 应用程序，增加了每个应用程序的音量提升、保存的配置文件、自动闪避和供应商支持。真正的选择是免费和 DIY，而不是沙盒和支持。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — FineTune 与 SoundDial：Mac 上的免费开源与付费按应用程序量" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>两个应用程序解决的问题</h2>

<p>macOS 仍然没有内置的每应用音量混合器。 Windows 多年来一直拥有这一功能 - 右键单击​​扬声器图标，打开音量混合器，每个应用程序都有自己的滑块。在 Mac 上，您可以使用一个系统音量滑块来处理所有事情：您的音乐、视频通话、YouTube、通知铃声和游戏都共享它。如果您的通话太安静而 Spotify 太大声，您唯一的“解决办法”就是完全静音 Spotify。</p>

<p>FineTune 和 SoundDial 的存在就是为了填补这一空白。他们为每个正在运行的应用程序提供了自己的音量控制，这样您就可以将会议音量保持在 100%，同时将背景音乐调低至 20%，而无需触摸主滑块。</p>

<h2>FineTune 的正确之处</h2>

<p>FineTune 是一款秉承 SoundSource 精神的更新、免费、开源应用程序。让我们公平地对待它的优势，因为它们是真实的：</p>

<ul>
  <li><strong>它不需要任何成本。</strong> 无需许可证，无需试用，无需升级。</li>
  <li><strong>来源是开放的。</strong> 你可以准确地阅读它的作用，审核它的隐私，并且 - 如果你了解 Swift - 修改或分叉它。</li>
  <li><strong>它是社区驱动的。</strong> 任何人都可以修复错误，并且代码的寿命比任何一家公司都长。</li>
  <li><strong>它涵盖了核心需求。</strong> 每个应用独立的音量，这是 90% 的人真正在寻找的功能。</li>
</ul>

<p>如果您唯一的要求是“让我关闭一个应用程序而不关闭所有应用程序”，并且您对没有正式支持台的软件感到满意，那么 FineTune 是一个合理的答案。在这里推荐它并不是一种让步——而是诚实的。</p>

<h2>DIY路线的诚实权衡</h2>

<p>免费和开源带来的实际成本不会显示在价格标签上。这些并不是专门针对 FineTune 的，而是该方法的本质：</p>

<ul>
  <li><strong>安装是手动的。</strong> 开源音频工具通常作为下载的版本或 Homebrew 公式分发，而不是通过 App Store。你在苹果审查之外进行安装，并且你有责任保持它的更新。</li>
  <li><strong>每个应用程序的音频拦截本质上是脆弱的。</strong> 路由另一个应用程序的音频是一项深层系统工作。当 Apple 发布更改音频堆栈的 macOS 更新时，这些工具可能会损坏，直到有人修补它们。对于志愿者项目，“某人”那个月可能很忙。</li>
  <li><strong>尽最大努力提供支持。</strong> 如果出现问题，您可以求助于 GitHub 问题并等待。没有保证的响应，也没有人有义务修复它。</li>
  <li><strong>功能范围是维护者提供的任何内容。</strong> 核心音量控制可能已涵盖；额外费用完全取决于贡献者的时间。</li>
</ul>

<blockquote>诚实的框架：FineTune 用金钱换取维护责任。您节省了 14.99 欧元，并承担了操作系统更新导致系统损坏的风险，直到社区赶上。</blockquote>

<h2>其中SoundDial不同</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 采取相反的贸易。您支付一次，作为回报，您将获得 App Store 产品，背后有供应商，以及基于每个应用程序数量构建的更广泛的功能集：</p>

<ul>
  <li><strong>每个应用程序的音量和静音</strong> — 两个应用程序提供的共享基线。</li>
  <li><strong>每个应用程序的音量提升</strong> — 将过于安静的应用程序推至超过 100%。对于音频输出较弱的应用程序很有用，在这种情况下，拒绝其他输出仍然不够。</li>
  <li><strong>体积曲线</strong> — 保存整个混音（“会议”、“焦点”、“游戏”）并一键切换，而不是每次都重置滑块。</li>
  <li><strong>自动闪避</strong> - 当您说话或选定的应用程序处于活动状态时，自动降低后台应用程序的运行速度，因此无需手动操作即可接通通话。</li>
  <li><strong>快速输出切换</strong> — 从菜单栏在扬声器、耳机和其他输出之间跳转。</li>
</ul>

<p>同样重要的是 <em>如何</em> 它发货了。 SoundDial 是沙盒化的，并通过 Mac App Store 分发 - 没有单独的 DMG，没有内核驱动程序，没有安装音频驱动程序。像任何其他应用程序一样通过 App Store 进行更新，并且当出现问题时可以向真正的开发人员发送电子邮件。这就是 14.99 欧元的具体价值：不仅仅是更多的功能，还有人负责让它们在 macOS 版本中正常工作。</p>

<h2>一个适用于两者的诚实警告</h2>

<p>没有第三方应用程序可以将 macOS 的音频系统变成 Windows 的音量混合器，因为 Apple 没有为每个应用程序音频公开干净的公共 API。此类别中的每个工具（免费或付费、开放或封闭）都使用系统级音频技术来解决该限制。这意味着 FineTune 和 SoundDial 都会受到 macOS 音频重大变化的影响。区别在于谁负责事后修复：志愿者社区，还是产品依赖于它的付费供应商。</p>

<h2>你应该选择哪个？</h2>

<ul>
  <li><strong>选择 FineTune 如果</strong> 您想要零成本，重视开源透明度，只需要基本的每个应用程序数量，并且可以轻松地安装在 App Store 之外，并在出现问题时能够自我支持。</li>
  <li><strong>选择 SoundDial 如果</strong> 您想要一键式 App Store 安装、增强、配置文件和自动闪避等附加功能，以及来自参与游戏的供应商的更新和支持保证。</li>
</ul>

<p>两者都有效。这实际上取决于您是否愿意花钱或花注意力。如果您宁愿购买受支持的沙盒应用程序并且不再考虑它， <a href="https://apps.apple.com/app/id6772792641">在 Mac App Store 上获取 SoundDial</a> 一次性 14.99 欧元 — 无需订阅，无需驱动程序，无需 DMG。</p>`,
  },
  "background-music-vs-sounddial-mac": {
    slug: "background-music-vs-sounddial-mac",
    title: "Background Music vs SoundDial：免费的 Mac 音量混合器够用吗？",
    description: "免费 Background Music 应用程序和付费 SoundDial 之间的公平竞争。免费虚拟驱动程序方法在哪里有效，在哪里失效，以及 14.99 欧元的本机混音器何时值得。",
    date: "2026-07-23",
    readTime: "6 分钟阅读",
    content: `<p>Background Music 是免费的，并且真正擅长基础知识：它为每个应用程序提供了自己的音量滑块，并且可以在另一个应用程序播放时自动暂停音乐。如果这就是您所需要的，请使用它。但它依赖于虚拟音频驱动程序，该驱动程序可能会在 macOS 更新后中断，并且缺乏每个应用程序的增强、配置文件和输出切换。 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 用金钱换取无驱动、沙盒、受支持的替代方案。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Background Music 与 SoundDial：免费的 Mac 音量混合器足够吗？" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>首先，关于macOS的诚实事实</h2>
<p>macOS 没有内置的每应用音量混合器。 Windows 的音量混合器中已经有十多年了，但在 Mac 上，系统滑块可以同时移动所有内容。没有 Apple 支持的 API 可以让第三方应用程序干净地拦截和重新平衡各个应用程序流。这个差距就是 Background Music 和 SoundDial 等工具存在的原因，也是下面大多数权衡的根本原因。</p>

<h2>Background Music 擅长什么</h2>
<p>Background Music 是一款开源菜单栏应用程序，已经存在多年，并且有充分的理由拥有忠实的追随者。它为您提供：</p>
<ul>
<li><strong>每个应用程序的独立音量</strong> ——核心特征。在保持通话声音的同时调低 Spotify 的音量。</li>
<li><strong>自动暂停</strong> - 当其他地方开始出现音频时，它可以暂停您的音乐播放器，这对于会议来说是一个很好的选择。</li>
<li><strong>跟随您的设备音量</strong> 以及一个简单、严肃的界面。</li>
<li><strong>零成本</strong> — 它是免费的，代码是公开的。</li>
</ul>
<p>对于很多人来说这就足够了。如果您的整个愿望清单是“让一个嘈杂的应用程序变得更安静而不影响其他应用程序”，Background Music 涵盖了它，并且您不应该为不需要的东西付费。公平在这里很重要：这是一个合法有用的工具。</p>

<h2>自由方法的缺陷在哪里</h2>
<p>问题是 <em>如何</em> Background Music 实现每个应用程序的数量。由于 macOS 没有提供官方路径，因此它会安装一个虚拟音频驱动程序（旧 Soundflower 方法的修改版本），通过自身路由系统音频。这种架构很聪明，但它也带来了实际成本：</p>
<ul>
<li><strong>macOS 更新后它会中断。</strong> 虚拟音频驱动程序位于系统深处，主要的 macOS 版本历史上已禁用或不稳定它们。用户经常报告升级后出现无声、失真或需要重新安装的情况。当它破裂时，你通常只能靠自己。</li>
<li><strong>安装较重。</strong> 您正在向 Mac 添加一个与内核相邻的音频设备，而不仅仅是一个应用程序。干净地卸载可能很麻烦。</li>
<li><strong>它成为您的默认输出设备。</strong> 由于所有内容都通过虚拟设备路由，因此某些专业音频、会议或游戏应用程序可能会表现得很奇怪，并且切换真实输出是一个额外的步骤。</li>
<li><strong>发展是社区节奏的。</strong> 没有支持台。当志愿者有时间时，修复就会到来，这对于突然静音的音频工具来说是一个有意义的风险。</li>
</ul>
<p>这些都不会使 Background Music 变得糟糕。它使其成为一个具有免费工具权衡的免费工具。</p>

<h2>您使用 SoundDial 实际支付的费用</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 是一个 Mac App Store 应用程序，它塑造了它的本质。由于 App Store 应用程序是沙盒的，无法提供 Background Music 使用的低级虚拟驱动程序，因此 SoundDial 无需安装单独的音频设备或 DMG 即可运行。这意味着：</p>
<ul>
<li><strong>没有虚拟驱动程序的怪癖。</strong> 没有额外的输出设备劫持您的音频链，并且在系统更改时无需重新安装任何内容。</li>
<li><strong>它在 macOS 更新中更加优雅地生存。</strong> App Store 分发和沙箱意味着它是根据支持的路径构建的，并通过商店进行更新，因此操作系统升级不太可能让您保持沉默。</li>
<li><strong>每个应用程序的音量提升。</strong> 这是一个真正的功能差异：SoundDial 可以推送应用程序 <em>上面</em> 100% 适用于安静的来源——录音太低的播客、低沉的视频通话。 Background Music 仅衰减。</li>
<li><strong>音量配置文件。</strong> 保存一组每个应用程序级别（“会议”、“音乐”、“游戏”）并单击一次即可切换，而不是每次都拖动滑块。</li>
<li><strong>自动闪避。</strong> 当选定的源播放时，自动降低其他应用程序的音量——这是自动暂停理念的一种更可配置的方式。</li>
<li><strong>快速输出切换</strong> 烘焙到菜单栏中，加上每个应用程序的静音。</li>
<li><strong>真正的支持。</strong> 这是一种付费产品，出现问题时有人负责。</li>
</ul>

<h2>诚实的决定</h2>
<blockquote>如果您想要免费并且只需要基本的每个应用程序数量，并且您可以在 macOS 更新后轻松排除故障，那么 Background Music 是一个不错的选择。如果你想要升压、配置文件、闪避、输出切换、没有虚拟驱动程序的脆弱性，以及在故障时有人发电子邮件，SoundDial 值 14.99 欧元。</blockquote>
<p>一些具体的决胜局。如果您经常处理过于安静的音源，仅使用增强功能就证明了其价格合理——Background Music 根本无法使音频比音源更响亮。如果您害怕每年一度的“我的音频能否在更新后幸存下来”的赌博，那么沙盒商店应用程序可以消除这种焦虑。如果您喜欢一劳永逸的场景，配置文件可以节省真正的麻烦。而且它是一次性的 14.99 欧元，而不是订阅，因此比较的是单次购买与维护免费驱动程序所花费的时间。</p>
<p>相反，如果您是一位喜欢开源的修补匠，想要阅读代码，并且大多数情况下只是拒绝一个应用程序 - 省钱。这两种工具都解决相同的核心问题；它们在鲁棒性、功能深度以及当 macOS 在它们下面发生变化时谁会抓住你方面有所不同。</p>

<p>想要每个应用程序的容量而不需要虚拟驱动程序的赌博吗？ <a href="https://apps.apple.com/app/id6772792641">在 Mac App Store 上获取 SoundDial</a> — 一次性 14.99 欧元，沙盒，无驱动程序，内置增强、配置文件和自动闪避功能。</p>`,
  },
  "is-soundsource-worth-it-mac": {
    slug: "is-soundsource-worth-it-mac",
    title: "SoundSource 值 39 美元吗？更便宜的一次性 Mac 替代品",
    description: "SoundSource 是一款功能强大的 Mac 音频工具，售价约为 39 美元，但如果您只需要每个应用程序的音量和增强，那么它就太过分了。这是一个诚实的比较和 14.99 欧元的一次性替代品。",
    date: "2026-07-23",
    readTime: "5 分钟阅读",
    content: `<p>如果您需要完整的工具包，SoundSource 是值得的：每个应用程序的音量、每个应用程序的 10 频段均衡器、设备之间的音频路由以及系统范围的效果。但如果你主要想要每个应用程序的音量、每个应用程序的静音和音量增强，那么 39 美元左右的价格就显得有些过分了。对于那个范围更窄的工作， <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 一次费用为 14.99 欧元。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — SoundSource 值 39 美元吗？一种更便宜的一次性 Mac 替代品" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>SoundSource 实际上做了什么</h2>
<p>Rogue Amoeba 的 SoundSource 是一款真正优秀的软件，公平地对待这一点很重要。它不仅仅是一个音量混合器。它为您提供：</p>
<ul>
<li><strong>每个应用程序的音量控制</strong> 从菜单栏中，这是大多数人喜欢的功能。</li>
<li><strong>完整的 10 频段均衡器</strong> 您可以在每个应用程序或系统范围内应用，以及其他音频效果（通过音频单元插件）。</li>
<li><strong>输出/输入路由</strong>，包括将单个应用程序发送到与系统其他部分不同的输出设备。</li>
<li><strong>快速设备切换</strong> 和耳机特定的均衡器预设。</li>
</ul>
<p>如果您是播客、流媒体主播或音频迷，想要调整耳机上的均衡器、将应用程序的声音重定向到单独的扬声器或堆叠音频单元效果，那么 SoundSource 就物有所值。这里没有什么是敲门的。</p>

<h2>价格问题</h2>
<p>SoundSource 是一种付费的一次性许可证，价格约为 39 美元（价格因版本和促销活动而异）。它不是 Netflix 意义上的定期订阅，但它遵循经典的付费应用模式：您购买主要版本，未来的主要升级通常是打折的付费升级，而不是永久免费。几年来，这不仅仅是一次购买。对于许多 Mac 用户来说，诚实的问题是：当我真正接触到的只是每个应用程序的音量滑块时，我是否要为路由和均衡器套件支付 39 美元？</p>

<blockquote>如果您打开了 SoundSource 并且只使用过音量滑块和静音按钮，那么您就需要支付一套套件的费用来使用其中的一个抽屉。</blockquote>

<h2>为什么这个问题存在</h2>
<p>这是诚实的根本原因：macOS 没有内置的每个应用程序音量混合器。 Windows已经有多年了，但在Mac上，系统体积是全有或全无。 Apple 没有提供任何方法可以让 Spotify 在视频通话声音很大时保持安静，或者在不接触其他所有内容的情况下将一个应用程序静音。这种差距正是 SoundSource 等工具的原因 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 存在。这是一个真正的操作系统限制，而不是任何一个应用程序发明的问题来解决。</p>

<h2>更轻、更便宜的选择适合的地方</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 是一个菜单栏每个应用程序音量混合器，专为常见情况而不是专业音频情况而构建。它涵盖：</p>
<ul>
<li><strong>每个应用程序的独立音量</strong> — 当会议保持最高音量时，请放下音乐。</li>
<li><strong>每个应用程序静音</strong> — 使一个应用程序静音，而不使 Mac 静音。</li>
<li><strong>每个应用程序的音量提升</strong> — 当信号源太弱时，将安静的应用程序推至正常的 100% 以上。</li>
<li><strong>体积曲线</strong> — 保存一组每个应用程序级别（例如“焦点”或“呼叫”布局）并单击即可切换。</li>
<li><strong>自动闪避</strong> — 当您开始讲话或播放所选应用程序时，自动降低其他应用程序的音量。</li>
<li><strong>快速输出切换</strong> — 从菜单栏在扬声器、耳机和其他设备之间跳转。</li>
</ul>
<p>这是 <strong>€14.99 一次性</strong>，通过 Mac App Store 出售，因此它是沙盒的，没有单独的 DMG，没有内核扩展，也不需要安装音频驱动程序。您可以像任何 App Store 应用程序一样下载它，并通过商店进行更新。</p>

<h2>诚实的比较</h2>
<p>对权衡保持清醒的认识。 SoundSource 比 SoundDial 具有更多功能，如果以下任何一项对您来说很重要，那么 SoundSource 是更好的选择：</p>
<ul>
<li>您想要一个真正的每个应用程序或系统 <strong>均衡器</strong> 和音频单元效果。</li>
<li>你需要 <strong>将单个应用程序路由到不同的输出设备</strong> 比其他一切都重要。</li>
<li>你依靠 <strong>耳机特定的 EQ 预设</strong> 和细粒度的音频处理。</li>
</ul>
<p>SoundDial 不执行 EQ 或每个应用程序设备路由。故意把它弄窄了。它给你带来的回报是更低的价格、更轻的占用空间以及针对大多数人真正想要的东西的集中菜单栏界面：将每个应用程序保持在你选择的级别，并在顶部提供增强和配置文件。</p>

<h2>那么，SoundSource值得吗？</h2>
<p>是的，如果您使用均衡器和路由。它是由受人尊敬的开发商提供的成熟且得到良好支持的软件，而且价格反映了真实的功能。但“值得”取决于你会触摸什么。如果您打开应用程序并且仅调整音量滑块、将应用程序静音或希望一个安静的应用程序声音更大，那么您就需要为基本混音器需求支付高级套件费用。在这种情况下，一次性 14.99 欧元的工具是更明智的选择，如果您的需求扩展到 EQ 和路由，您可以随时升级到 SoundSource。</p>

<p>如果您只需要每个应用程序的音量、增强、静音、配置文件和自动闪避， <a href="https://apps.apple.com/app/id6772792641">在 Mac App Store 上获取 SoundDial</a> — 一次 14.99 欧元，无需订阅，无需驱动程序。</p>`,
  },
  "chrome-too-loud-mac": {
    slug: "chrome-too-loud-mac",
    title: "Chrome Mac 声音太大？关闭一个浏览器而不将所有内容静音",
    description: "Chrome 比 Mac 上的其他应用程序更响亮吗？了解内置修复（每个选项卡静音、站点声音设置）以及如何为 Chrome 设置真正的每个应用程序音量，使其比其他任何东西都更安静。",
    date: "2026-07-23",
    readTime: "5 分钟阅读",
    content: `<p>macOS 没有内置的每个应用程序音量，因此您无法本机调低 Chrome，同时让其他应用程序保持最大音量。您最快的免费修复是将嘈杂的选项卡静音、降低每个视频播放器内的音量，或者在 Chrome 的设置中阻止每个站点的声音。要获得真正、持久的 Chrome 音量级别，您需要每个应用程序混音器。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Chrome 在 Mac 上声音太大？关闭一个浏览器而不将所有内容静音" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>为什么Chrome听起来比其他一切都响亮</h2>
<p>Chrome 在设计上不一定“响亮”——Chrome 路由来自许多独立来源的音频：YouTube、自动播放广告、视频通话、背景音乐选项卡和每个都有自己响度的网络应用程序。有些网站的制作很热门，广告也非常响亮，而 Chrome 会以系统的最大输出电平播放所有这些内容。与此同时，您的音乐应用程序或通话可能会更安静，因此 Chrome 在混音中占据主导地位。</p>
<p>在 Windows 上，您只需打开音量混合器并向下拖动 Chrome 滑块即可。 macOS 根本不包含该功能。系统音量键可同时控制所有内容，因此调低 Chrome 也会调低音乐、通知和通话的音量。这是核心限制——这是操作系统的差距，而不是你做错了什么。</p>

<h2>无需花费任何费用的内置修复</h2>
<p>在安装任何东西之前，请尝试这些。他们不会给你一个 Chrome 音量旋钮，但他们解决了大多数“一个响亮的标签”问题。</p>
<ul>
<li><strong>将嘈杂的标签静音。</strong> 右键单击该选项卡并选择“静音站点”，或单击播放音频的选项卡上显示的小扬声器图标。这会使该选项卡完全静音，而不会影响 Chrome 的其余部分。</li>
<li><strong>降低播放器内部的音量。</strong> 最可靠的技巧：在 YouTube、Netflix 或任何正在播放的内容中向下拖动音量滑块。网络玩家会记住每个站点自己的级别，因此安静的 YouTube 下次会保持安静。</li>
<li><strong>每个站点阻止声音。</strong> 前往 <em>chrome://设置/内容/声音</em>。您可以在“允许”和“静音”之间切换站点，并将特定域添加到静音列表。非常适合永久静音自动播放的网站。</li>
<li><strong>杀死自动播放广告。</strong> 广告音频往往是真正的罪魁祸首。内容拦截器或将选项卡静音直到您准备好观看，可以消除最令人惊讶的响度。</li>
</ul>
<blockquote>这些确实有用且免费。但请注意他们不能做什么：他们静音或管理单个选项卡。他们都不会让你说“将所有 Chrome 保持在 40%，而我的音乐保持在 100%”。</blockquote>

<h2>诚实的限制：macOS 中没有每个应用程序的数量</h2>
<p>如果您的实际目标是“Chrome 应该始终比我的其他应用程序更安静”，那么内置工具就达不到要求。每个选项卡的静音要么全有要么全无。当网站不记得播放器滑块并且必须不断重做时，播放器滑块会重置。系统体积将所有东西移动到一起。</p>
<p>这是一个真正的 macOS 限制，而不是一个可以配置掉的错误。 Apple 从未推出过 Windows 风格的音量调音台。为 Chrome 获得持久、独立的音量级别的唯一方法是使用位于您的应用程序和输出设备之间并应用每个应用程序增益的第三方应用程序。</p>

<h2>为 Chrome 设置每个应用程序的实际音量</h2>
<p>菜单栏混音器，例如 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 为 macOS 提供了它所缺少的每个应用程序的音量控制。它列出了当前正在播放音频的每个应用程序，并为每个应用程序提供了自己的滑块 - 因此您可以将 Chrome 拉至舒适的水平，并将 Spotify、您的通话和系统声音保留在原处。</p>
<p>以下是如何用它来驯服大声的 Chrome：</p>
<ul>
<li>打开菜单栏混音器并在活动应用程序列表中找到 Chrome。</li>
<li>将 Chrome 的滑块向下拖动到 40% 到 50%。其他应用程序保持不变。</li>
<li>如果某个特定应用程序太 <em>安静</em> 相反 - 一个低声通话的应用程序 - 使用 <a href="https://apps.apple.com/app/id6772792641">每个应用程序的音量提升</a> 将其推至 100% 以上，同时保持 Chrome 较低。</li>
<li>当您需要静音而不关闭选项卡时，可以使用每个应用程序静音立即将 Chrome 静音。</li>
</ul>
<p>因为关卡与应用程序相关，所以它会被保留。 Chrome 在各个选项卡、站点和重新启动时都保持您选择的音量 - 每次打开新视频时都无需重新拖动播放器滑块。</p>

<h2>更进一步：配置文件、闪避和输出切换</h2>
<p>一旦您拥有了每个应用程序的控制权，一些额外的功能就值得保留。 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 让您节省音量 <strong>简介</strong> — 例如，Chrome 安静而音乐响亮的“焦点”配置文件，以及 Chrome 占主导地位的“观看”配置文件 — 只需单击一下即可在它们之间切换。当选定的源启动时，自动闪避可以自动隐藏其他应用程序（很方便，因此呼叫永远不会被喧闹的浏览器选项卡淹没）。快速输出切换让您可以在扬声器、耳机和其他设备之间切换，而无需深入了解系统设置。</p>
<p>Mac App Store 一次性购买价格为 14.99 欧元——无需订阅，无需安装驱动程序，无需 DMG 或内核扩展。因为它是沙箱并通过 App Store 分发，所以不需要粗略的音频驱动程序安装所依赖的旧混音器工具。</p>

<h2>您应该使用哪个修复程序？</h2>
<p>如果您偶尔只有一个令人讨厌的选项卡，请使用 Chrome 的内置静音和站点声音设置 - 它们是免费的并且有效。如果你经常发现自己希望 Chrome 可以简单地被关闭，而其他一切都保持不变，那么这正是 macOS 留下的空白，而每个应用程序的混合器就是一个干净的解决方案。</p>

<p>想要 Chrome 永久安静而不将音乐或通话静音吗？ <a href="https://apps.apple.com/app/id6772792641">在 Mac App Store 上获取 SoundDial</a> 并为每个应用程序提供自己的音量滑块。</p>`,
  },
  "whatsapp-telegram-notifications-too-loud-mac": {
    slug: "whatsapp-telegram-notifications-too-loud-mac",
    title: "WhatsApp 和 Telegram 通知在 Mac 上听起来太大声？拒绝他们",
    description: "修复 WhatsApp 和 Telegram 桌面通知声音在 Mac 上太大的问题。从每个应用程序的内置设置开始，然后在 macOS 不为您提供每个应用程序控制时降低或静音整个应用程序。",
    date: "2026-07-23",
    readTime: "5 分钟阅读",
    content: `<p>从每个应用程序内部开始：WhatsApp 和 Telegram 都允许您在自己的设置中静音或更改通知声音，这是最干净的修复。但 macOS 没有每个应用程序的通知音量滑块，因此如果应用程序自己的声音仍然太大，您唯一真正的杠杆是使用每个应用程序的音量工具降低或静音整个应用程序的音频。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — WhatsApp 和 Telegram 通知在 Mac 上听起来太大声？拒绝他们" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>首先，使用应用程序自带的通知设置</h2>

<p>WhatsApp 和 Telegram 都附带了自己的声音控制，这是您应该始终开始的地方。这是最精确的修复，并且不会影响 Mac 上的任何其他内容。</p>

<p><strong>WhatsApp 台式机：</strong> 打开WhatsApp，点击 <em>设置</em> （齿轮图标），然后 <em>通知</em>。您可以关闭 <em>声音</em> 完全同时保留横幅，或禁用通知预览。 WhatsApp 不提供音量滑块，因此它本质上是声音本身的打开或关闭。</p>

<p><strong>Telegram 台式机：</strong> 打开 <em>设置 → 通知和声音</em>。 Telegram 这里更灵活。您可以全局关闭通知声音、将各个聊天静音或设置自定义（更安静）的铃声。您还可以通过打开单个嘈杂的组并选择将其静音 <em>静音</em>。对于大多数人来说，将最吵闹的聊天静音可以解决问题，而不必在任何地方都保持沉默。</p>

<p>如果声音很好但太频繁，请将最常触发的特定聊天或频道静音，而不是在整个应用程序范围内杀死声音。这使重要警报保持清晰可听。</p>

<h2>在macOS系统设置中关闭通知声音</h2>

<p>macOS 有第二层控制，在某些情况下会覆盖应用程序。前往 <em>系统设置 → 通知</em>，在列表中选择WhatsApp或Telegram，然后关闭 <em>播放通知声音</em>。这会静音该应用程序的警报铃声，同时仍显示横幅。</p>

<p>如果您只想让应用程序在通知时保持安静，而不关心其他音频（通话、视频），那么这确实是一个很好的解决方案。结合应用程序自身的设置，它涵盖了大多数“ping 不和谐”的投诉。</p>

<h2>真正的限制：macOS 没有每个应用程序的数量</h2>

<p>这是诚实的部分。上述步骤是开/关开关。他们不能做的是转 WhatsApp 或 Telegram <em>向下</em> 比如说 40%，同时将其他所有内容保持在最大音量。 Windows 多年来一直拥有每个应用程序的音量混合器。 macOS 根本不包含它，并且没有隐藏设置或 Terminal 命令来添加它。</p>

<p>当问题不是具体的通知铃声而是整个应用程序声音太大时，这一点很重要：</p>

<ul>
<li>WhatsApp 或 Telegram <strong>语音和视频通话</strong> 与您的音乐或会议相关的最大音量</li>
<li>您想要保留但处于较低级别而不是完全关闭的通知声音</li>
<li>铃声的声音远远超过您正在听的任何其他声音</li>
<li>当您专注于其他事情时，希望应用程序在后台安静地发出声音</li>
</ul>

<p>这些都无法通过内置工具解决，因为它们只提供静音，而不提供级别。这个差距是一个真正的 macOS 限制，而不是你忽略的东西。</p>

<h2>使用 SoundDial 设置每个应用程序的音量</h2>

<p>要真正关闭而不是关闭单个应用程序，您需要每个应用程序的音量混合器。 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 是一个菜单栏应用程序，为 macOS 提供了它从未附带过的每个应用程序的音量控制。它列出了当前播放音频的每个应用程序，并为每个应用程序提供了自己的滑块。</p>

<p>对于这个具体问题：</p>

<ul>
<li>打开 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 从菜单栏中找到 WhatsApp 或 Telegram 在列表中。</li>
<li>将其滑块向下拖动到舒适的水平，例如 30-40%，同时保持您的音乐、浏览器或视频通话不变。</li>
<li>使用每个应用程序 <strong>静音</strong> 按钮可在通话或会议期间立即使该应用程序静音，然后稍后取消静音，而无需深入了解设置。</li>
<li>如果您需要相反的，一个太软的安静应用程序，每个应用程序 <strong>提升</strong> 可以将其推至100%以上。</li>
</ul>

<p>因为它为每个应用程序设置了一个级别，所以 SoundDial 会保持通知铃声和呼叫音频可听但相称，而不是内置选项强加给您的全有或全无的选择。您还可以保存 <strong>体积分布</strong>，因此只需单击一下即可实现使聊天应用程序保持低功耗的“焦点”设置。</p>

<blockquote>一个诚实的警告：在 SoundDial 中降低应用程序的整体音量也会降低其通知铃声，因为对于 macOS 它们是同一应用程序的音频。如果您希望完全关闭通知但以最大音量通话，请使用应用程序自己的静音加上铃声的系统设置，并保留 SoundDial 来设置一般级别。</blockquote>

<p>SoundDial 是 Mac App Store 的一次性购买产品，价格为 14.99 欧元，沙盒化，无需订阅，无内核驱动程序，也无需侧载 DMG。当您真正想要的修复（关闭而不是关闭）macOS 本身无法做到时，这就是实际的答案。</p>

<h2>您应该使用哪个修复程序？</h2>

<p>从上到下工作。首先尝试应用程序自己的通知设置，然后尝试 macOS 系统设置来消除铃声。如果您真正想要的是将 WhatsApp 或 Telegram 降低到特定音量，或者在通话期间即时静音该应用程序，那么每个应用程序混音器就可以发挥作用。</p>

<p>厌倦了在聊天应用程序的完全静音和完全静音之间进行选择？ <a href="https://apps.apple.com/app/id6772792641">在 Mac App Store 上获取 SoundDial</a> 并为每个应用程序提供自己的音量旋钮。</p>`,
  },
  "game-too-loud-vs-voice-chat-mac": {
    slug: "game-too-loud-vs-voice-chat-mac",
    title: "Mac 上的游戏音频比 Discord 大声吗？如何平衡游戏音量和语音音量",
    description: "您的游戏淹没了 Mac 上的 Discord 语音聊天，并且没有内置音量混合器。这就是为什么 macOS 缺乏 Windows 风格的每个应用程序音量，以及如何在保持声音调高的同时调低游戏音量。",
    date: "2026-07-23",
    readTime: "5 分钟阅读",
    content: `<p>macOS 没有内置的每个应用程序音量混合器，因此您无法在保持 Discord 大声的同时本机限制游戏。解决方案是一个菜单栏应用程序，它可以为每个应用程序设置独立的音量。将游戏速度调低至 40-50%，将语音聊天保持在 100%，两者都保持平衡，无需触摸游戏内滑块。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac 上的游戏音频比 Discord 响亮？如何平衡游戏音量和语音音量" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>为什么这种情况发生在 Mac 上（而不是 Windows 上）</h2>

<p>如果您玩过 Windows 游戏，您就会知道音量混合器：右键单击扬声器图标，每个正在运行的应用程序都会有自己的滑块。你放弃游戏，加注 Discord，完成。 macOS 根本就没有提供该功能。有一个主输出音量和一些应用程序级别的切换隐藏在系统设置中，但没有针对任意应用程序的每个应用程序级别控制。</p>

<p>因此，当游戏的混音掌握得很好时，它的爆炸、音乐和枪声就会以与朋友的声音相同的输出水平出现。有些游戏会提供主音量滑块，但很多游戏的音量滑块都不够低，而且许多启动器、浏览器和独立游戏根本不提供有用的控制。 Discord本身只能让你调整传入用户的音量，而不能调整与他们竞争的游戏。</p>

<p>老实说，这是操作系统级别的差距，而不是可以切换掉的错误。 Apple 的音频堆栈将所有内容路由到单个输出流，并且没有第一方 UI 可以将其拆分为每个应用程序。这就是为什么您需要位于应用程序和输出设备之间的第三方工具。</p>

<h2>手动解决方法（以及它们为何不足）</h2>

<p>在使用软件之前，有必要了解免费选项及其限制：</p>

<ul>
<li><strong>降低游戏的应用内音量。</strong> 如果游戏有一个具有足够精细步长的主滑块，则可以使用。许多会以 10% 的增量停止，或者将音乐和效果捆绑在一起，因此您无法仅抑制响亮的部分。</li>
<li><strong>在Discord中培养你的朋友。</strong> 右键单击每个用户并提高他们的音量。这有一点帮助，但效果最好，而且并没有触及游戏的实际问题。</li>
<li><strong>使用带有硬件音量旋钮的耳机。</strong> 只会改变整体水平，不会改变游戏和语音之间的平衡。</li>
<li><strong>通过虚拟设备路由音频。</strong> 像 Loopback 或 BlackHole 这样的工具可以分割流，但它们针对的是专业人士，需要真正的设置，并且对于“让游戏更安静”来说有些过分了。</li>
</ul>

<p>这些都没有给你 Windows 用户认为理所当然的一件事：每个应用程序都有一个快速滑块。这就是差距 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 是为了填充而建造的。</p>

<h2>直接修复：每个应用程序独立的音量</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 是 macOS 的菜单栏每个应用程序音量混合器。它显示当前正在播放声音的每个应用程序，并为每个应用程序提供自己的滑块，就像 Windows 音量混合器一样。对于游戏与语音问题，工作流程很短：</p>

<ul>
<li>当游戏和 Discord 都运行时，单击菜单栏中的 SoundDial 图标。</li>
<li>在列表中找到该游戏并将其滑块拉至大约 40-50%。</li>
<li>将 Discord（或 Slack、Zoom 或您的语音应用程序）保留为 100%。</li>
<li>在游戏过程中进行动态调整——在喧闹的交火中进一步降低游戏速度，在安静的探索过程中将游戏速度调高。</li>
</ul>

<p>由于级别是针对每个应用程序的，因此您只需设置一次即可保留。无论游戏本身的混音有多热门，游戏都会保持上限，并且您的朋友也能清晰地听到它的声音。</p>

<h2>其余设置的增强、静音和配置文件</h2>

<p>相同的工具涵盖了语音游戏带来的相邻烦恼：</p>

<ul>
<li><strong>每个应用程序的提升。</strong> 如果队友的麦克风即使在 Discord 的最大值下也很安静，您可以推送语音应用程序 <em>上面</em> 100%，所以它会贯穿游戏而不是被埋没。</li>
<li><strong>每个应用程序静音。</strong> 立即使后台浏览器选项卡或音乐应用程序静音，无需按 Alt 键或终止播放。</li>
<li><strong>音量配置文件。</strong> 保存游戏进度为 45% 且 Discord 增强的“游戏”配置文件，然后一键切换回“正常”配置文件以供日常使用 — 每次会话无需重新拖动滑块。</li>
<li><strong>自动闪避。</strong> 当有人说话时，游戏会自动下降，这样标注始终会出现在动作之上。</li>
<li><strong>快速输出切换。</strong> 从同一菜单在耳机和扬声器之间跳转，无需深入系统设置。</li>
</ul>

<blockquote><p>思维模型很简单：每个应用程序一个滑块，Windows 多年来一直这样做。 macOS 只是从未提供过它，因此一个小实用程序可以恢复奇偶校验。</p></blockquote>

<h2>诚实地期待什么</h2>

<p>每个应用程序的混合器干净地解决了平衡问题，但正确设置了期望。它控制软件输出电平——它无法修复音频掌握不好的游戏，也无法发出从未捕获的信号（真正损坏的麦克风仍然需要硬件修复）。 Boost 增加了实际增益，因此将安静的源推到远超过 100% 会导致失真，就像将任何放大器调得太高一样。不过，如果使用得当，大多数设置都需要适度的游戏上限和小幅语音增强。</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 是沙盒的，直接从 Mac App Store 安装 - 没有驱动程序，没有内核扩展，没有值得信任的 DMG。一次性售价 14.99 欧元，无需订阅，支持 28 种语言的 macOS 音量控制。</p>

<p>别再与游戏中的滑块对抗了。抢 <a href="https://apps.apple.com/app/id6772792641">Mac App Store 上的 SoundDial</a>，把游戏调低，让你的队伍保持大声，最后得到Windows风格的音量混合器macOS忘记发货了。</p>`,
  },
  "external-monitor-speaker-volume-too-loud-mac": {
    slug: "external-monitor-speaker-volume-too-loud-mac",
    title: "外接显示器扬声器声音太大或卡在 Mac 上？修复 HDMI/DisplayPort 音量",
    description: "为什么 Mac 的音量键无法控制 HDMI 或 DisplayPort 显示器扬声器，以及如何使用显示器 OSD、音频 MIDI 设置和更好的输出路由来修复声音太大、卡住或无法调节的音频。",
    date: "2026-07-23",
    readTime: "6 分钟阅读",
    content: `<p>如果您的 Mac 的音量键显示为灰色，或者对通过 HDMI 或 DisplayPort 连接的显示器没有任何反应，这通常不是错误。数字显示音频通常以固定电平发送，显示器自身的硬件控制音量。解决方法是调整显示、重新路由输出或使用不同的音频设备。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 外部显示器扬声器声音太大或卡在 Mac 上？修复 HDMI/DisplayPort 音量" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>为什么 Mac 音量键在 HDMI/DisplayPort 上停止工作</h2>

<p>HDMI 和 DisplayPort 将音频作为数字流传输。许多显示器以固定的输出电平接收该流，并希望您控制显示器本身的响度，而不是源设备上的响度。当 macOS 检测到此情况时，它会禁用屏幕上的音量滑块并使 F11/F12 键变灰，在按下这些键时显示“禁止输入”符号。</p>

<p>这是硬件和协议限制，Mac 上的软件无法覆盖。音频永远不会经过允许 macOS 衰减的阶段。任何应用程序、驱动程序或设置都无法将音量控制注入显示器坚持以最高级别接收的流中。诚实地对待这一点可以节省您寻找错误解决方案的时间。</p>

<h2>修复 1：使用显示器自带的控件 (OSD)</h2>

<p>对于大多数人来说，这才是真正的解决方案。几乎所有带有内置扬声器的显示器都有一个屏幕显示菜单，由面板背面或底部的物理按钮或操纵杆驱动。</p>

<ul>
<li>按 OSD/菜单按钮打开显示器的设置。</li>
<li>查找音频或音量部分。</li>
<li>降低那里的电平——这是通过 HDMI/DP 实际工作的控制。</li>
</ul>

<p>有些显示器还提供配套应用程序或 DDC/CI 支持，以便您可以从 macOS 驱动 OSD。使用 DDC 的第三方实用程序可以将 Mac 的音量键映射到显示器的硬件音量，如果您讨厌触摸面板按钮，则值得尝试。</p>

<h2>修复 2：检查音频 MIDI 设置</h2>

<p>打开 <strong>音频 MIDI 设置</strong> （在/应用程序/实用程序中）。在设备列表中选择您的显示器。如果右侧出现音量滑块，请将其向下拖动 - 有时即使菜单栏键被禁用，显示屏也会显示软件可控的级别。如果滑块丢失或变灰，则表明显示屏确认它只接受固定级别的音频，您应该返回到 OSD。</p>

<p>当您在这里时，请确认选择了正确的输出设备。将音频无声地路由到您忘记已连接的显示器是很常见的，这解释了声音突然响亮或消失的原因。</p>

<h2>修复 3：将音频路由到您可以实际控制的位置</h2>

<p>如果你的显示器的扬声器无论如何都是平庸的（大多数都是）并且其音量控制很笨拙，最干净的解决方法是停止使用它们：</p>

<ul>
<li>将扬声器或耳机插入显示器的耳机输出插孔（如果有）——模拟输出通常可以通过显示器控制音量。</li>
<li>使用 USB DAC、USB 扬声器或 Bluetooth 输出。 USB 和模拟输出为 macOS 提供完整的软件音量控制，让您的按键再次正常工作。</li>
<li>选择 Mac 的内置扬声器以获得快速声音，并保留显示器仅用于视频。</li>
</ul>

<p>一旦您使用 macOS 实际上可以衰减的输出，系统音量键就会起作用，您将重新获得精细控制，而不是在显示器的粗略 OSD 步骤之间跳转。</p>

<h2>输出工作后，控制每个应用程序的音量</h2>

<p>恢复可控输出可以解决“声音太大/卡住”的问题。但macOS仍然只为您提供所有内容的一个主卷。 Mac 上没有内置的每个应用程序混音器 - Windows 多年来一直有这样的混音器，但 Apple 从未推出过类似产品。因此，大声的视频、游戏和安静的通话都共享同一个滑块。</p>

<p>这就是差距 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 填充。它是一个菜单栏混音器，为每个应用程序提供了自己独立的音量，因此您可以在不触摸音乐的情况下调低浏览器选项卡，立即将一个应用程序静音，或者将安静的应用程序提高到正常上限以上。您可以保存不同设置的音量配置文件，并从菜单栏快速切换输出。</p>

<p>明确范围： <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 控制流经 macOS 的音频的软件音量。它无法覆盖通过 HDMI 忽略系统音量的显示器——这是显示器的固定级别行为，只有 OSD 或不同的输出才能修复它。一旦您获得可控输出，每个应用程序的控制就是应用程序的亮点。</p>

<h2>快速清单</h2>

<ul>
<li>HDMI/DP 上的按键呈灰色？使用显示器的 OSD 音量 — 这是预期的行为。</li>
<li>检查音频 MIDI 设置中是否有隐藏的软件滑块。</li>
<li>确认选择了正确的输出设备。</li>
<li>如需真正控制，请将音频路由至耳机输出、USB 或 Bluetooth。</li>
<li>然后使用每个应用程序混合器来平衡各个应用程序。</li>
</ul>

<p>一旦你的输出得到控制，给出 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 一看。从 Mac App Store 一次性购买 14.99 欧元——无需订阅、无需驱动程序、无需 DMG——它最终为 macOS 带来了真正的每应用音量混合器。</p>`,
  },
  "usb-dac-volume-control-not-working-mac": {
    slug: "usb-dac-volume-control-not-working-mac",
    title: "USB DAC Mac 音量无法调节？恢复软件音量控制",
    description: "为什么 macOS 使许多 USB DAC 的音量滑块变灰，这意味着什么，以及如何在不损害音频质量的情况下在 Mac 上恢复工作软件音量控制。",
    date: "2026-07-23",
    readTime: "6 分钟阅读",
    content: `<p>如果您的 USB DAC 的音量滑块在 Mac 上呈灰色，通常不是错误。当DAC报告其没有可控音量时，macOS会禁用其软件音量，希望您使用DAC自己的硬件旋钮。要恢复软件音量，请使用应用程序级衰减器，例如 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — USB DAC Mac 上的音量无法调节？恢复软件音量控制" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>为什么 macOS 使某些 USB DAC 的音量变灰</h2>

<p>当您插入 USB 音频设备时，macOS 会询问它可以通过 USB 音频类 (UAC) 协议执行哪些操作。该握手的一部分是一组“功能单元”控件，包括音量控件。如果 DAC 声明了音量控制，则 macOS 将其连接到键盘音量键和菜单栏滑块。如果 DAC 声明它没有主机可调节的音量，则 macOS 会将滑块完全变灰。</p>

<p>许多高品质的 DAC 和放大器都故意采用后者。设计人员的假设是，您将为 DAC 提供全量程、比特完美的数字信号，并使用设备本身的模拟音量旋钮控制响度。模拟衰减发生在数模转换之后，因此它可以避免丢弃比特，并且确实是发烧友的首选路径。这是一个特点，而不是一个缺点。</p>

<blockquote>经验法则：如果您的 DAC 有物理音量旋钮，并且 Mac 滑块呈灰色，则制造商希望您使用该旋钮。信号按设计以 100% 发送。</blockquote>

<h2>当灰色滑块实际上是一个问题时</h2>

<p>“只需使用旋钮”的答案在实际设置中会崩溃：</p>

<ul>
<li><strong>DAC 没有旋钮。</strong> 大量紧凑型 USB DAC、适配器和专业接口不提供音量控制，也不提供主机控制。无论下游放大器或有源扬声器设置为何种级别，您都会陷入困境。</li>
<li><strong>旋钮够不着。</strong> 显示器后面的桌面 DAC 或为固定增益放大器供电的设备，意味着调节音量变成了一项体力活，而不是按键。</li>
<li><strong>您需要每个应用程序的平衡，而不仅仅是大师级别。</strong> 即使是完美的硬件旋钮也是单一的全局控制。它无法使 Zoom 通话比音乐更安静，也无法在通知触发时闪避游戏。</li>
</ul>

<p>macOS 没有修复这些问题，因为从操作系统的角度来看，设备运行正常。这是诚实的限制：它是设备报告的功能，并且系统设置中没有切换来覆盖它。</p>

<h2>安装任何东西之前诚实的解决方法</h2>

<p>首先尝试这些，因为它们不需要任何成本：</p>

<ul>
<li><strong>使用硬件旋钮或下游音量。</strong> 如果您的 DAC 或有源扬声器/放大器具有控制功能，那么这是最干净的选项，并保留完整的数字分辨率。</li>
<li><strong>检查DAC自带的应用程序或固件。</strong> 某些 DAC（以及面向游戏的设备）附带控制面板或可启用主机音量的固件设置。如果存在“USB 卷”或“软件卷”选项，将其打开会使 macOS 滑块再次工作。</li>
<li><strong>尝试不同的 USB 模式。</strong> 一些设备报告“类兼容”与专有驱动程序模式的功能不同。安装或删除供应商驱动程序可以更改 macOS 是否看到音量控制。</li>
<li><strong>查看音频 MIDI 设置。</strong> 打开音频 MIDI 设置，选择设备，然后检查主音量或每通道音量是否出现。有时，即使菜单栏呈灰色显示，该面板中也会有一个滑块可用。</li>
</ul>

<p>如果这些都不适用，则需要在 Mac 侧进行软件衰减。</p>

<h2>软件音量控制与每个应用程序衰减</h2>

<p>当硬件不接受音量命令时，剩下的选项是在软件中衰减音频，然后再到达 DAC。这正是 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 确实如此。它位于您的菜单栏中，为每个正在运行的应用程序提供自己独立的音量、静音甚至增强，无论您的 DAC 是否公开硬件控制。</p>

<p>要将其用于灰显的 DAC：</p>

<ul>
<li>安装 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 从 Mac App Store 并从菜单栏打开它。</li>
<li>保持您的 DAC 选择为系统输出；您还可以使用 SoundDial 的快速输出切换在 DAC、扬声器和耳机之间切换，而无需深入系统设置。</li>
<li>设置每个应用程序的级别：放下浏览器，打开音乐播放器，将您不想要的任何内容静音。每个应用程序都以您选择的音量进行流式传输，混合结果将发送至 DAC。</li>
<li>保存不同场景（通话与收听）的音量配置文件，并在更重要的内容开始播放时自动闪避较低的后台应用程序。</li>
</ul>

<h2>音频质量的诚实权衡</h2>

<p>软件衰减会降低转换前的数字电平，因此理论上与 DAC 本身的模拟音量相比，它会丢弃少量的分辨率。实际上，在正常聆听水平下的现代 24 位和更高路径上，衰减量远低于任何可听见的声音，并且您可以保持 DAC 的完整动态范围，以接近全音阶播放任何内容。如果您是一个纯粹主义者，并且手边有一个好的模拟旋钮，请使用该旋钮。如果您没有可用的硬件控制，或者您需要 macOS 根本无法提供的每个应用程序的平衡，那么软件音量是正确的权衡，并且它击败了不执行任何操作的滑块。</p>

<p>SoundDial 是一次性购买产品，售价 14.99 欧元，沙盒化，不含驱动程序、内核扩展或 DMG 安装程序。如果您的 USB DAC 的音量显示为灰色并且无法使用旋钮， <a href="https://apps.apple.com/app/id6772792641">在 Mac App Store 上获取 SoundDial</a> 并将工作音量控制放回到菜单栏中。</p>`,
  },
  "cap-max-volume-of-one-app-mac": {
    slug: "cap-max-volume-of-one-app-mac",
    title: "限制 Mac 上一个大声应用程序的最大音量（保护您的听力）",
    description: "macOS 没有每个应用程序的音量上限，因此一个大声的应用程序可以以整个系统音量让您震惊。以下是如何使用每个应用程序混合器为 Mac 上的单个应用程序设置最大音量上限，以及为什么硬件限制很重要。",
    date: "2026-07-23",
    readTime: "5 分钟阅读",
    content: `<p>macOS 没有内置方法来限制一个应用程序的最大音量，因此无论您的系统滑块设置如何，大声的程序都会播放。要为单个应用程序设置上限，请使用菜单栏每个应用程序混合器，例如 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>：将应用程序保持在 40%，同时系统音量对于其他所有内容都保持较高。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 限制 Mac 上一个大声应用程序的最大音量（保护您的听力）" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>为什么一个应用程序可以突然让你在 Mac 上爆炸</h2>

<p>在 macOS 上，菜单栏或控制中心中的音量滑块是单个系统范围的控件。每个应用程序都会在同一级别注入相同的输出。操作系统中没有内置每个应用程序的音量混合器，而 Windows 的音量混合器面板多年来已经内置了每个应用程序的音量混合器。</p>

<p>这种设计对您的耳朵有真正的影响。如果您将系统音量设置得较高，以便可以听到安静的播客或轻柔的视频通话，然后切换到游戏、Discord 通知、广告较多的网站或音量大得多的视频，则该应用程序也会在整个系统级别播放。结果就是经典的惊吓：突然出现的音墙，其音量是您从未为该特定应用程序设计的。</p>

<p>对于任何有耳鸣、声音敏感或只重视听力的人来说，不可预测性就是问题所在。你并不是想让一切变得更安静。您试图保证某个特定的响亮应用程序永远不会超过您确定的安全级别。</p>

<h2>macOS 在这里可以做什么和不能做什么</h2>

<p>在推荐任何东西之前，让我诚实地了解一下限制。</p>

<ul>
<li><strong>系统体积</strong> 立刻降低一切。将其调低以驯服一个应用程序，您的安静应用程序将变得听不见。</li>
<li><strong>应用内音量滑块</strong> 存在于某些应用程序（媒体播放器、每个选项卡的某些浏览器）中，但不是大多数。游戏、视频通话或本机应用程序通常根本没有独立的音量控制。</li>
<li><strong>硬件天花板是真实存在的。</strong> 没有软件可以将信号发出的声音超过输出设备的最大音量。相反，应用程序自己的响度母带，加上您的 DAC 和耳机，可以设置“100%”实际感觉的响度。软件可以可靠地降低每个应用程序的级别，但它无法重写耳机的物理原理。</li>
</ul>

<p>因此，诚实的目标不是在驱动器级别限制神奇的响度。这是一种实用、可靠的按应用程序衰减：将所选应用程序保持在系统输出的固定部分，这样它就不会令您感到惊讶。</p>

<h2>如何使用每个应用程序混合器限制单个应用程序的音量</h2>

<p>每个应用程序的音量混合器会拦截每个应用程序的音频，并让您独立设置其级别。这是工作流程 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>，位于菜单栏中：</p>

<ul>
<li><strong>打开搅拌机。</strong> 单击 SoundDial 菜单栏图标。您将看到当前正在播放音频的每个应用程序的列表，每个应用程序都有自己的滑块。</li>
<li><strong>找到响亮的应用程序。</strong> 找到您想要限制的应用程序，例如游戏、浏览器或视频会议工具。</li>
<li><strong>设置其上限。</strong> 将该应用程序的滑块向下拖动到您的安全水平，例如 35% 到 50%。该应用程序现在只使用系统输出的一小部分进行播放，而其他所有应用程序都保持原样。</li>
<li><strong>将系统卷保留在您需要的位置。</strong> 保持系统滑块足够高，以适应安静的应用程序。不管怎样，受限制的应用程序仍然受到控制。</li>
</ul>

<p>由于该级别是针对每个应用程序的，因此您实际上是为该一个程序设置了最大值。即使当它尝试播放其最大声的内容时，其最大声现在也是您选择的全部内容的一部分。</p>

<h2>用型材制作盖子</h2>

<p>一次手动调整会有所帮助，但当您退出并重新启动时，应用程序级别可能会重置。要进行重新启动后仍能保持听力安全的设置，请使用 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>的音量配置文件。保存您喜欢的每个应用级别的配置文件，例如“安静的游戏之夜”，游戏为 40%，音乐应用为 70%，通话应用为 90%。每当您坐下时，只需单击一下即可回忆起来。您的大声应用程序的上限会完全按照您设置的那样恢复。</p>

<p>对于听力保护，还有两个值得了解的功能：</p>

<ul>
<li><strong>每个应用程序静音</strong> 让您可以立即让单个罪犯保持沉默，而无需触摸其他任何东西，这对于发送垃圾通知的应用程序很有用。</li>
<li><strong>自动闪避</strong> 当更重要的事情开始时，会自动降低背景音频，这样您就不会同时陷入两个大声源之间。</li>
</ul>

<blockquote><p>软件衰减对于限制应用程序确实有效，但它只是一层保护，而不是医疗保障。如果您有耳鸣或声音敏感性，请将每个应用程序的上限与合理的整体听力水平和休息时间配对。没有任何应用程序可以取代谨慎的音量习惯。</p></blockquote>

<h2>关于 boost 的说明以及为什么它是独立的</h2>

<p>相同的每个应用程序混音器可以限制大声的应用程序，也可以将太安静的应用程序提高到 100% 以上，这对于本身音量控制得太低的应用程序来说非常方便。这是同一控件的两个方面：您决定每个应用程序的级别，向上或向下。为了保护听力，您只需选择“向下”方向并保持在那里即可。</p>

<h2>简短版本</h2>

<p>macOS 不会让您自行限制单个应用程序的音量，这是真正的操作系统差距，而不是用户错误。每个应用程序的菜单栏混合器将其关闭：将大声的应用程序设置为固定分数，将其保存在配置文件中，并且当您的其他应用程序保持可听状态时，它永远不会再次让您感到震惊。</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> Mac App Store 是一次性购买，价格为 14.99 欧元，沙盒化，无需安装驱动程序或 DMG。如果保护您的耳朵免受不可预测的应用程序的侵害是您的目标，那么这是设置并保持该上限的最简单方法。</p>`,
  },
  "set-left-right-balance-per-app-mac": {
    slug: "set-left-right-balance-per-app-mac",
    title: "Mac 上每个应用程序的左/右平衡不同 - 这可能吗？",
    description: "您可以为macOS上的每个应用程序设置不同的左/右立体声平衡吗？老实说，不 - 本身不是，大多数工具也不是。以下是实际可能的情况以及真正的限制。",
    date: "2026-07-23",
    readTime: "6 分钟阅读",
    content: `<p>老实说，不 - macOS 不允许您为每个应用程序设置不同的左/右立体声平衡，并且几乎没有第三方工具公开真正的每个应用程序平移。您可以为输出设备设置一个全局平衡，并且可以控制每个应用程序 <em>体积</em>，但每个应用程序独立 <em>平底锅</em> 不是 macOS 提供的功能。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac 上每个应用程序的左/右平衡不同 — 有可能吗？" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>平衡与音量——它们不是同一回事</h2>

<p>有必要区分两个经常被混淆的想法：</p>
<ul>
  <li><strong>体积</strong> — 应用程序的整体声音有多大。这是应用于两个通道的单一级别。</li>
  <li><strong>天平（平底锅）</strong> — 音频如何在左右扬声器之间分配。 “全左”平衡将所有内容发送到左声道并使右声道静音。</li>
</ul>

<p>要求“每个应用程序不同的平衡”的人通常想要以下两件事之一：将一个应用程序的声音推送到一只耳朵（例如，左耳听到电话，右耳听到音乐），或者纠正一侧的听力差异或扬声器不良 - 但仅限于某些应用程序。这些都是合法的目标。问题在于控件所在的位置。</p>

<h2>为什么 macOS 本身不能做到这一点</h2>

<p>macOS 只有一个平衡控制，它位于输出设备级别。你会在下面找到它 <strong>系统设置→声音→输出</strong>，其中一个 <em>平衡</em> 滑块将整个混音向左或向右移动。滑块设置的任何内容都适用 <em>一切</em> 路由到该设备 - 每个应用程序、每个系统声音，全部同时发送。</p>

<p>标准 macOS 音频堆栈中没有 API 表示“将此应用程序的音频渲染到左侧，该应用程序的音频渲染到右侧”。应用程序将已混合的音频传递给系统，系统在传递到扬声器的过程中应用一个主平衡。因此，操作系统不会公开您想要按应用程序平移的层。这是一个真正的操作系统限制，不是菜单栏实用程序可以礼貌地解决的问题。</p>

<blockquote>与每个应用程序不同 <em>体积</em> - macOS 本身也缺乏，但哪些应用程序可以通过点击音频流来实现 - 每个应用程序 <em>平衡</em> 需要独立地重新平移每个应用程序的流，并且该挂钩不适用于沙盒应用程序。</blockquote>

<h2>SoundDial 做什么——老实说，它不做什么</h2>

<p><a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">SoundDial</a> 为您提供每个应用程序控制 macOS 缺失：独立 <strong>体积</strong> 对于每个正在运行的应用程序，每个应用程序 <strong>静音</strong>，每个应用程序的体积 <strong>提升</strong> 100%以上，可保存容量 <strong>简介</strong>、自动闪避以及从菜单栏快速切换输出。</p>

<p>跟你说实话： <a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">SoundDial</a> 每个应用程序的控制 <em>响度和静音</em>，不是每个应用程序立体声 <em>平移</em>。它不会将 Safari 发送到您的左耳，将 Spotify 发送到您的右耳。如果有人告诉您菜单栏混音器在 macOS 上实现了真正的每个应用 L/R 平衡，请持怀疑态度 - 这不是操作系统提供的控制。 SoundDial 真正解决的是更常见的挫败感：一个应用程序相对于另一个应用程序来说太大声或太安静。</p>

<h2>每个应用平衡的真正解决方法</h2>

<p>如果您确实需要并排音频分割，这里有一些诚实的选择，大致从最简单到最复杂：</p>

<ul>
  <li><strong>全球平衡（所有应用程序）：</strong> 使用系统设置→声音→输出→平衡。这是您唯一的内置选项，它会影响每个应用程序。对于纠正房间或听力不对称很有用，但对于隔离一个应用程序毫无用处。</li>
  <li><strong>独立的输出设备：</strong> 这是最接近真实的每个应用平衡的东西。将应用程序 A 路由到一个输出设备，将应用程序 B 路由到另一台输出设备，然后独立设置每个设备的平衡。 macOS 允许您在某些应用程序中选择输出设备（浏览器/通信应用程序通常会公开自己的输出选择器）。如果应用程序 A 指向向左平移的设备，而应用程序 B 指向向右平移的设备，则您可以有效地获得每个应用程序的平衡 - 只要这两个应用程序都允许您选择其输出。</li>
  <li><strong>虚拟音频路由工具：</strong> 在某些配置中，创建虚拟设备和内部混音器的实用程序可以将特定应用程序路由到特定通道。这很强大，但很繁琐，添加了一个驱动程序风格的组件，对大多数人来说有点过分了。这是主播和音频工程师的领域，而不是随意的“一只耳朵通话”修复。</li>
  <li><strong>硬件分割：</strong> 如果涉及物理扬声器或听力差异，则硬件混音器或具有每通道控制的音频接口可以完全回避软件问题。</li>
</ul>

<h2>当每个应用程序的数量确实满足您的需求时</h2>

<p>很多“我想要每个应用程序有不同的余额”请求实际上是“一个应用程序淹没了另一个应用程序”。如果目标是您可以在音乐中听到视频通话，或者是在 Discord 聊天旁边太大声的游戏，那么平衡不是工具，独立音量才是。这正是每个应用程序混合器可以干净地处理的事情，无需虚拟驱动程序或路由体操。</p>

<p>所以诚实的总结是：真正的每个应用程序左/右平衡不是 macOS 功能，并且没有任何混合器应用程序能够令人信服地伪造它。您的真实路线是全局平衡滑块或每个应用程序输出路由到单独平移的设备。但如果潜在的痛苦是相对响度，那么问题就解决了。</p>

<p>想要 Mac 上的每个应用程序都有独立的音量、静音和增强功能，并且具有可保存的配置文件且无需驱动程序？ <a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">在 Mac App Store 上获取 SoundDial</a> — €14.99，一次性，沙盒。</p>`,
  },
  "why-are-some-apps-louder-than-others-mac": {
    slug: "why-are-some-apps-louder-than-others-mac",
    title: "为什么 Mac 上有些应用程序的声音比其他应用程序大得多？ （以及如何平衡他们）",
    description: "Mac 上的应用程序听起来截然不同，因为每个应用程序都掌握了自己的响度目标，而 macOS 没有内置的每个应用程序音量控制。以下是发生这种情况的原因以及如何调整您的应用程序。",
    date: "2026-07-23",
    readTime: "6 分钟阅读",
    content: `<p>您的 Mac 上的应用程序听起来截然不同，因为每个应用程序都是根据自己的响度目标创作、掌握和标准化的，并且 macOS 没有内置的每个应用程序音量控制来协调它们。 Spotify、YouTube、Zoom 和系统警报都通过同一个主滑块，因此您只能不断地上下滑动。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 为什么 Mac 上的某些应用程序比其他应用程序声音大得多？ （以及如何平衡他们）" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>这不是你的 Mac — 这是音频本身</h2>

<p>macOS 上的单系统音量滑块控制所有内容的最终输出电平。它不会影响每个应用程序音频流中的相对响度。该基线是在声音到达扬声器之前很久就设定的，并且不同来源的基线差异很大。</p>

<p>三件事导致了这些差异：</p>

<ul>
<li><strong>掌握水平。</strong> 一首有力的流行歌曲比安静的录音或口语播客要热得多。为电影院混音的电影故意保持低语声和爆炸声——这就是动态范围，这意味着平均电平很低。</li>
<li><strong>响度标准化目标。</strong> 流媒体平台将播放调整为以 LUFS（相对于满刻度的响度单位）测量的目标。 Spotify 的目标约为 -14 LUFS，YouTube 的目标约为 -14 LUFS，Apple Music 的目标约为 -16 LUFS。视频会议应用程序或游戏完全应用自己的增益。两个“标准化”到不同目标的应用程序永远不会相互匹配。</li>
<li><strong>没有跨应用程序调平。</strong> 每个应用程序仅标准化其自己的内容。在浏览器游戏中，没有任何东西可以协调 Spotify 与 Zoom 的对抗。 macOS 只是将它们相加并将混音发送出去。</li>
</ul>

<h2>为什么 LUFS 很重要（简单来说）</h2>

<p>峰值电平告诉您信号中最大的单个瞬间。 LUFS 告诉您某件事实际上有多大 <em>感觉</em> 随着时间的推移，根据人类听力的工作原理进行加权。这种区别就是为什么播客和舞曲可以达到相同的峰值，但在响度上却感觉截然不同——曲目在接近上限的时间要长得多。</p>

<blockquote>更安静的 LUFS 目标意味着更多的动态余量和更大的动态范围。响亮的目标意味着更一致、“始终充满”的声墙。两者都没有错，但当应用程序针对不同的数字时，你会感觉一个应用程序在尖叫，另一个应用程序在咕哝。</blockquote>

<p>这就是诚实的根本原因。这不是一个可以修补的错误。这是音频如何产生和传递的物理原理，在十几个从未设计为彼此一致的应用程序中倍增。</p>

<h2>间隙 macOS 保持打开状态</h2>

<p>这是真正令人沮丧的部分：Windows 多年来一直为每个应用程序提供音量混合器。您可以直接从任务栏向下拉一个应用程序并将另一个应用程序向上推。 macOS从来没有包含过这个。声音首选项仅提供主滑块和输出设备选择。</p>

<p>因此，在 Mac 上，您的选择传统上是有限的：</p>

<ul>
<li>调整每个应用程序自己的内部音量滑块 - 如果它有的话。许多应用程序（Zoom、大多数游戏、系统铃声）不会公开可用的应用程序。</li>
<li>每次切换上下文时都手动控制主滑块。</li>
<li>完全静音一件事，这是一个生硬的解决方案，实际上并不能平衡任何事情。</li>
</ul>

<p>这些都不记得您的偏好。退出并重新启动应用程序，您将回到第一个方块。</p>

<h2>实际修复：每个应用程序记住的音量</h2>

<p>由于您无法强制每个服务重新掌握其目录，因此可行的解决方案是添加从未发布的缺失层 macOS：每个应用程序的独立、记住的卷。正是如此 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 确实如此。它位于您的菜单栏中，并为每个正在运行的应用程序提供了自己的滑块，因此您可以将大声的应用程序拉低并将安静的应用程序向上推，直到它们处于您感觉均匀的水平。</p>

<p>为了在实践中平衡您的应用程序：</p>

<ul>
<li>打开 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 从菜单栏中，您将看到每个活动的应用程序都有自己的控件。</li>
<li>将任何爆炸性的内容（通常是热门音乐或视频应用程序）调低至 60-70% 左右。</li>
<li>将安静的参考应用程序（通常是通话应用程序或播客）保持在 100%，并使用每个应用程序 <strong>提升</strong> 如果仍然太软，请将其推至 100% 以上。</li>
<li>设置级别一次。 SoundDial 会记住每个应用程序的音量，因此下次打开它时余额会保持不变。</li>
</ul>

<p>这里有两个功能完成了大部分的调平工作。 <strong>升压</strong> 这很重要，因为很多应用程序即使在最大音量下也太安静了——每个应用程序的滑块只能降低音量无法挽救它们，但可以放大超过 100% 的应用程序可以。并且 <strong>体积分布</strong> 让您保存一整套级别 - 例如，工作时的“音乐焦点低，声音大”配置文件与游戏的不同组合 - 并立即在它们之间切换，而不是逐个应用程序重新调整。</p>

<h2>这最有帮助的地方</h2>

<p>最常见的缓解方法是音乐与会议的跳跃：流媒体音乐声音很大，而相比之下，通话应用程序听起来微弱。将通话应用程序调高（或增强），将音乐调低，惊人的音量波动就会消失。这同样适用于安静的浏览器游戏对抗大声的视频播放器，或者跳出所有内容的系统警报。</p>

<p>要明确限制：SoundDial 平衡应用程序的输出。它不会重新掌握制作不良的曲目，也无法在与非常宽的动态范围混合的音频中创造细节。它的作用是为您提供 macOS 所遗漏的一个控件 - 稳定的、按应用程序保持不变的级别。</p>

<p>厌倦了每次切换应用程序时都乘坐主滑块？ <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> Mac App Store 的一次性价格为 14.99 欧元——沙盒化，无驱动程序，无 DMG——它最终为每个应用程序提供了自己的记忆音量。</p>`,
  },
};
