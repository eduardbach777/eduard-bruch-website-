import type { ArticleSet } from "./index";

export const zhArticles: ArticleSet = {
  "best-media-converter-mac": {
    slug: "best-media-converter-mac",
    title: "Mac 上最好用的媒体转换工具",
    description:
      "为视频、图片、音频转换分别使用不同的应用会浪费大量时间。一款原生工具就能在一个窗口内处理这三种媒体类型。",
    date: "2026-09-06",
    readTime: "5分钟阅读",
    content: `
<p>你需要把一批产品照片转换成 JPEG,把一段屏幕录制转码为 MP4,再把一段播客音频导出为 MP3。在大多数电脑上,这意味着要打开三个不同的应用,学习三种不同的界面,还要盯着三个不同的处理队列。如果其中有一个工具是 Electron 套壳应用,你的风扇早就开始狂转了。</p>

<p>在 macOS 上做媒体转换不应该像项目管理一样繁琐。你只想把文件拖进去,选个格式,然后继续忙别的事。</p>

<h2>为什么 macOS 没有自带一个像样的转换工具</h2>

<p>访达的"快速操作"可以在 HEIC、JPEG 和 PNG 之间转换图片——仅此而已。视频方面你只能求助于 iMovie 或 Compressor,而这两者都不是简单的格式转换工具。音频转换则需要 GarageBand,或者去终端里折腾 <code>ffmpeg</code>。没有一款内置工具能同时处理视频、图片和音频。</p>

<h2>一款称职的媒体转换工具应该是什么样</h2>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> 把三条转换队列——视频、图片和音频——都放进了一个原生 macOS 窗口里。你把文件拖到对应类型的队列中,选择输出格式,点击转换即可。没有浏览器运行时,没有订阅,也没有上传到云端的花招。</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Mediasmith media converter for Mac showing video, image, and audio queues" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>视频转换</h3>
<p>将 MOV、AVI、MKV 和 WebM 转换为 MP4 或其他格式。由于这是一款原生 Swift 应用,在 Apple Silicon 上会自动启用硬件加速编码——4K 视频的转换时间只是 Electron 应用所需时间的一小部分。</p>

<h3>图片批量处理</h3>
<p>拖入成百上千张图片,在 HEIC、JPEG、PNG、WebP 和 TIFF 之间转换。有序的像素处理流水线可以让你把多个操作串联起来——先调整大小,再裁剪,再打上水印——每个操作都会按你设定的顺序依次执行。</p>

<h3>音频与 MP3 导出</h3>
<p>音频队列支持格式转换,包括通过内置的 LAME 编码器导出 MP3。无需安装 Homebrew、编译库文件,也不用去研究 ffmpeg 的参数。</p>

<h3>预设与并发处理</h3>
<p>把常用的格式和流水线组合保存为预设,重复性任务只需点一下即可完成。批量处理支持可配置的并发数,大批量队列能更快完成,同时不会拖慢系统其他部分的运行。</p>

<p>如果你一直在用 Preview、Handbrake 和终端窗口拼凑工作流,一款单一的原生转换工具会带来真正的效率提升。</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">前往 Mac App Store 获取 Mediasmith</a></p>
`,
  },

  "batch-convert-images-mac": {
    slug: "batch-convert-images-mac",
    title: "如何在 Mac 上批量转换图片",
    description:
      "在预览中一张一张地转换图片非常繁琐。这里介绍在 macOS 上批量转换数百张照片格式的更快方法。",
    date: "2026-09-06",
    readTime: "5分钟阅读",
    content: `
<p>你刚从 Lightroom 导出了 200 张产品照片,格式是 TIFF,而你的网页开发人员需要 JPEG。或者你从客户那里下载了一整个文件夹的 WebP 图片,需要转换成 PNG 才能放进 Keynote 演示文稿。在预览中打开每个文件、点导出、选格式、保存——重复 200 次——这算不上是正经的工作流程。</p>

<p>批量图片转换本该是三十秒就能搞定的事,但在 macOS 上不知怎么就能吃掉一整个下午。</p>

<h2>macOS 能做到什么(以及它的极限)</h2>

<p>访达的"快速操作"可以转换选中的图片,但只支持 HEIC、JPEG 和 PNG 之间的转换。没有 WebP 输出,没有 TIFF,也无法控制质量或分辨率。预览一次只能导出一张图片——能用,但批量处理起来慢得令人抓狂。<code>sips</code> 命令行工具能处理一些转换,但在 WebP 这类格式上会出问题,流水线选项也很有限。</p>

<p>如果需求超出基础范畴,你就需要一款专门的工具。</p>

<h2>用像素流水线批量转换</h2>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> 是一款专为此而生的原生 macOS 转换工具。把一整个文件夹的图片拖到图片队列上,选择输出格式——JPEG、PNG、WebP、HEIC 或 TIFF——然后转换。所有文件都会并行处理,并发数可配置。</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Batch image conversion on Mac with format and pipeline options" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>有序操作</h3>
<p>像素流水线让你按特定顺序串联调整大小、裁剪和水印操作。需要先调整为 1200px 宽,再裁剪成 4:3,再打上你的 logo?设置一次流水线,它就会以完全相同的方式应用到批次中的每一张图片上。</p>

<h3>质量控制</h3>
<p>JPEG 和 WebP 输出都带有质量滑块,方便你在文件大小和视觉保真度之间取得平衡。对于每个字节都很重要的电商场景,光是这一点就能省去一趟在线压缩工具的往返操作。</p>

<h3>预设系统</h3>
<p>如果你经常执行同样的转换——比如"客户交付文件:JPEG,2000px 宽,85% 质量,加水印"——把它保存为预设。下次只需一次点击,即可将整个流水线应用到新的一批文件上。</p>

<p>批量图片转换本是个已经被解决的问题。关键在于找到一款原生、快速、且不要求你把文件上传到别人服务器上的工具。</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">前往 Mac App Store 获取 Mediasmith</a></p>
`,
  },

  "permute-alternative-mac": {
    slug: "permute-alternative-mac",
    title: "Mac 上的 Permute 替代方案",
    description:
      "寻找一款无需订阅、能处理视频、图片和音频的媒体转换工具。一款支持批量处理和像素流水线的原生 macOS 应用。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>多年来,Permute 一直是 macOS 上的主流媒体转换工具。它以简洁的拖放界面处理视频、音频和图片。但如果你一直在寻找更精细的图片处理能力——一套有序的操作流水线,而不是简单的格式转换——或者只是想看看还有什么别的选择,了解一下其他方案还是值得的。</p>

<p>不是每一款转换工具都适合每一种工作流程。合适的工具取决于你更侧重视频转码、图片批量处理,还是音频导出。</p>

<h2>寻找 Permute 替代方案时该看什么</h2>

<p>任何认真的替代品都应该满足同样的核心要求:原生 macOS 应用(非 Electron)、拖放式批量转换,以及在一个界面里支持视频、图片和音频格式。除此之外,有序像素流水线、并发批量处理和预设系统等功能开始成为区分工具优劣的关键。</p>

<h2>Mediasmith 作为一种替代方案</h2>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> 是一款原生 Swift 编写的 macOS 应用,它把转换功能组织成三条专属队列——视频、图片和音频——都在同一个窗口内。它专为那些需要的不仅是"输入格式,输出格式"的用户而打造。</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Mediasmith as a Permute alternative for Mac media conversion" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>有序的像素流水线</h3>
<p>最突出的区别在于图片处理的像素流水线。它不只是转换格式,而是让你构建一系列按顺序执行的操作——调整大小、裁剪、水印。顺序很重要:先调整大小再裁剪,和先裁剪再调整大小,产生的结果是不同的。你可以自己掌控这个顺序。</p>

<h3>通过内置 LAME 实现 MP3 转换</h3>
<p>音频转换支持通过内置的 LAME 编码器导出 MP3。无需安装 Homebrew,也不用四处寻找编解码器包。开箱即用。</p>

<h3>批量并发</h3>
<p>大批量任务会以可配置的并发数进行处理。在 Apple Silicon Mac 上,这意味着数百张图片可以在后台转换,而不会拖慢系统其他部分的运行。</p>

<h3>预设</h3>
<p>把你最常用的格式和流水线组合保存为预设。诸如"网页导出:WebP,1600px,加水印"这类常见任务就能变成一键操作。</p>

<p>如果 Permute 已经满足了你的所有需求,那没有理由更换。但如果你一直想要更深入的图片处理能力,或者不同的工作流模式,Mediasmith 值得一试。</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">前往 Mac App Store 获取 Mediasmith</a></p>
`,
  },

  "heic-to-jpg-batch-mac": {
    slug: "heic-to-jpg-batch-mac",
    title: "如何在 Mac 上批量将 HEIC 转换为 JPG",
    description:
      "iPhone 拍摄的成百上千张 HEIC 照片,苹果生态之外的软件几乎都打不开。批量转换成 JPG 本该很简单。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>自 iOS 11 起,每一张 iPhone 照片默认都是 HEIC 格式。这个格式很优秀——在同等画质下,文件体积只有 JPEG 的一半。问题出现在你需要把这些照片分享给苹果生态之外的任何人时。你的 WordPress 网站不接受 HEIC 上传。你的冲印店要 JPEG。你在 Windows 10 上的客户甚至根本打不开这些文件。</p>

<p>在预览中把一张 HEIC 转成 JPG 大概只需要十秒钟。但把一场婚礼拍摄的 300 张照片全部转换,会花掉你一整晚。</p>

<h2>macOS 自带的选项</h2>

<p>访达的"快速操作"可以把选中的图片转换成 JPEG。选中文件,右键点击,快速操作,转换图像。这个功能能用,但没有质量控制——输出质量是固定的,转换过程中也无法调整大小或做其他处理。预览可以导出单个文件,但没有批量导出功能。<code>sips</code> 命令能处理 HEIC 转 JPEG,但需要熟悉终端操作,而且没有流水线选项。</p>

<h2>完全可控的批量 HEIC 转 JPG</h2>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> 通过像素流水线批量转换 HEIC 为 JPG,让你掌控输出结果。把 HEIC 文件拖到图片队列上,设置 JPEG 为输出格式,调整质量滑块,然后转换。</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Batch HEIC to JPG conversion on Mac with quality control" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>顺便添加更多操作</h3>
<p>既然都在转换了,你还可以在像素流水线中串联额外操作。把所有照片调整为适合网页使用的最大宽度。裁剪成统一的宽高比。为作品集图片添加水印。流水线会按顺序执行,所以"先调整大小再加水印"和"先加水印再调整大小"会得到刻意不同的结果。</p>

<h3>保留或清除元数据</h3>
<p>HEIC 文件携带 EXIF 数据——相机设置、GPS 坐标、时间戳。根据你的使用场景,你可能想保留这些元数据用于存档,或者在上传到网上分享前将其清除以保护隐私。</p>

<h3>保存这个工作流程</h3>
<p>如果 HEIC 转 JPG 是一项常规任务——每月从手机导出照片、给客户交付文件——把格式和流水线保存为预设。下一批文件,只需一次点击。</p>

<p>HEIC 是很适合存储的格式。JPEG 依然是通用的分享格式。批量转换它们不应该需要终端或云端上传。</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">前往 Mac App Store 获取 Mediasmith</a></p>
`,
  },

  "video-converter-mac-native": {
    slug: "video-converter-mac-native",
    title: "Mac 原生视频转换工具——不用 Electron",
    description:
      "基于 Electron 的转换工具会占用大量内存,让风扇狂转。原生 macOS 视频转换工具使用硬件加速,运行更轻量。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>你下载了一款视频转换工具,拖入一个 4K 文件,MacBook 的风扇立刻像喷气发动机一样转起来。活动监视器显示这个应用占用了 800 MB 内存——就为了一个格式转换工具。罪魁祸首几乎总是 Electron:在转换工具的界面背后运行着一整个 Chromium 浏览器。这款应用看起来很精致,但它把资源都消耗在了渲染网页上,而不是转码你的视频。</p>

<p>在一台专为媒体工作打造的电脑上,转换工具本身不应该成为性能瓶颈。</p>

<h2>为什么原生应用对视频处理至关重要</h2>

<p>macOS 通过 VideoToolbox 内置了硬件加速的视频编解码功能。Apple Silicon 芯片配有专用的媒体引擎,能以远低于软件编码的功耗转码 H.264 和 H.265。但只有采用原生框架构建的转换工具才能利用这些优势。Electron 应用通常会调用以软件模式运行的 ffmpeg,完全绕过了硬件。</p>

<p>差距是可以量化的:一段 10 分钟的 4K 视频,在原生应用中只需 3 分钟就能完成,而在 Electron 套壳应用中可能要花 12 分钟,同时消耗更多电量和内存。</p>

<h2>一款真正物尽其用的转换工具</h2>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> 使用 Swift 和原生 macOS 框架构建。视频转码在 Apple Silicon 上会自动使用硬件加速。这款应用以单一窗口呈现,内含三条队列——视频、图片和音频——由于没有内嵌浏览器,它的内存占用一直很小。</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Native macOS video converter with hardware-accelerated encoding" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>格式支持</h3>
<p>在 MOV、MP4、AVI、MKV 和 WebM 之间转换。对大多数工作流来说,把屏幕录制从 MOV 转成 MP4 用于分享,或者把客户素材转码成交付格式,都是拖入、拖放、完成这么简单。</p>

<h3>与其他工具并行运行</h3>
<p>因为这款应用本身很轻量,你可以在 Final Cut Pro 或 Premiere 中剪辑的同时,在后台运行一次批量转换,而不会与转换工具争抢资源。在 MacBook 上,这也意味着更少的发热和更长的续航。</p>

<p>如果你现在用的转换工具在只是改变一下容器格式时,就能让你的 Mac 听起来像在渲染一部电影,那么换一款原生应用就是解决方案。</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">前往 Mac App Store 获取 Mediasmith</a></p>
`,
  },

  "convert-webp-to-png-mac": {
    slug: "convert-webp-to-png-mac",
    title: "如何在 Mac 上批量将 WebP 转换为 PNG",
    description:
      "下载了一个文件夹的 WebP 图片,却没有任何工具能正常打开它们。在 macOS 上批量转换为 PNG,无需网页上传工具。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>你从某个网站保存了十几张图片,结果每一张都是 .webp 文件。预览能打开它们,但你的其他一些应用不行——旧版本的 Photoshop、Keynote 模板、邮件客户端,以及大多数印刷服务,依然只认 JPEG 或 PNG。如果你的工作涉及下载素材、竞品调研中的产品图片,或从网上抓取的参考图集,WebP 转 PNG 就是一项每周都会遇到的杂务。</p>

<p>在预览里一次转一个文件,几十个还行,再多就不行了。</p>

<h2>macOS 与 WebP:差一步就到位</h2>

<p>自 macOS Ventura 起,预览已经可以打开并显示 WebP 文件。但访达的"快速操作"——这个内置的批量工具中最快的一个——只提供 HEIC、JPEG 和 PNG 作为输出格式,输入端也只接受这几种格式。WebP 文件会被直接忽略。<code>sips</code> 命令行工具则完全不支持 WebP。所以 macOS 能显示 WebP 图片,但没有第三方帮助就无法批量转换它们。</p>

<h2>用一款原生应用批量将 WebP 转为 PNG</h2>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> 同时支持将 WebP 作为输入和输出格式。把一整个文件夹的 WebP 文件拖到图片队列上,选择 PNG 作为输出,然后转换。批次处理支持可配置的并发数,因此即便是数百个文件也能很快完成。</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Bulk WebP to PNG conversion on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>反方向转换</h3>
<p>WebP 同样是一种实用的输出格式。如果你正在为网站准备图片,把 PNG 或 JPEG 转换成 WebP 可以在几乎不损失视觉效果的情况下,将文件体积缩小 25% 到 35%。同一条队列双向都能用——PNG 转 WebP 用于网页优化,WebP 转 PNG 用于兼容性需求。</p>

<h3>添加处理步骤</h3>
<p>在转换的同时,你还可以添加流水线操作。把图片调整为统一宽度以符合你的设计系统。裁剪成标准宽高比。像素流水线会在保存最终的 PNG 之前,按顺序执行每个操作。</p>

<h3>无需上传</h3>
<p>在线 WebP 转换工具确实存在,但它们要求把你的文件上传到第三方服务器。对于客户项目、内部素材,或任何稍微敏感一点的内容来说,这是不可接受的。本地应用会在你自己的电脑上完成所有转换。</p>

<p>WebP 是网络的格式。PNG 是其他所有人的格式。批量转换它们应该是拖放操作,而不是一个研究课题。</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">前往 Mac App Store 获取 Mediasmith</a></p>
`,
  },

  "resize-images-batch-mac": {
    slug: "resize-images-batch-mac",
    title: "如何在 Mac 上批量调整图片大小",
    description:
      "在预览中逐张调整照片大小非常耗时。无需 Photoshop,在 macOS 上批量将数百张图片调整为精确尺寸。",
    date: "2026-09-06",
    readTime: "5分钟阅读",
    content: `
<p>你的电商网站需要产品图片精确为 1200×1200 像素。你的博客模板一旦主图宽度超过 1600px 就会显示错乱。客户的品牌规范对社交媒体素材有最大尺寸限制。你手上有 400 张相机原始分辨率的图片,每一张在上传前都需要调整大小。</p>

<p>macOS 上的预览可以调整图片大小——一次一张,通过一个对话框,然后文件 > 导出。对于少量文件,这没问题。对于成百上千张,这就成了无偿劳动。</p>

<h2>内置的批量调整大小选项</h2>

<p>macOS 没有自带专门的批量调整大小工具。访达的"快速操作"可以转换格式,但不提供调整大小的控制项。Automator(或"快捷指令")可以配置成调整图片大小,但要搭建一个可靠的工作流,就得学习 Automator 的界面,处理竖版与横版方向等边缘情况,还得祈祷这个工作流不会在遇到不常见格式时悄悄出错。<code>sips</code> 命令行工具可以通过循环来调整大小,但一个 shell 脚本算不上是能交给同事使用的工作流。</p>

<h2>用有序流水线批量调整大小</h2>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> 把批量调整大小作为其像素流水线的一部分来处理。把图片拖到图片队列上,添加一个调整大小操作,设置目标尺寸或最大宽度,然后处理整个批次。这款应用会以可配置的并发数调整队列中每一张图片的大小。</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Batch image resizing on Mac with pixel pipeline" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>串联操作</h3>
<p>调整大小往往只是第一步。像素流水线让你按顺序串联操作:先调整为 1200px 宽,再裁剪成正方形,再添加水印。每个操作都按你设定的顺序执行,让整个批次都能得到可预测、可重复的结果。</p>

<h3>内置格式转换</h3>
<p>如果你为网页使用调整图片大小,大概率也想把 TIFF 或 PNG 转换为 JPEG 或 WebP。输出格式会和流水线一起设置,所以调整大小和格式转换在一次处理中就能同时完成——无需通过第二个工具再跑一遍这批文件。</p>

<h3>为重复性任务设置预设</h3>
<p>如果你经常按同样的规格调整大小——比如"Instagram:1080×1080,JPEG,90% 质量"或"网页主图:1600px 宽,WebP"——把这条流水线保存为预设。下次拖入文件,选择预设,转换即可。保存的是整套规格,而不仅仅是格式。</p>

<p>批量调整大小是那种感觉本该是操作系统自带功能的任务之一。在苹果同意之前,一款带有完整流水线的专用工具就是从相机分辨率到上传就绪状态的最快路径。</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">前往 Mac App Store 获取 Mediasmith</a></p>
`,
  },

  "convert-mov-to-mp4-mac": {
    slug: "convert-mov-to-mp4-mac",
    title: "如何在 Mac 上将 MOV 转换为 MP4",
    description:
      "屏幕录制和 iPhone 视频默认保存为 MOV,但大多数平台要的是 MP4。在 macOS 上无损画质、无需重新编码地完成转换。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>你录制了一段用于教程的屏幕录像,macOS 把它保存成了 .mov 文件。你把它拖进 CMS,上传失败——只接受 MP4。你试着把它添加到邮件附件,或上传到客户门户,结果一样。MOV 是苹果的默认容器格式,但 MP4 才是世界其他地方所期待的格式。</p>

<p>这是 macOS 上最常见的一种视频转换需求,而操作系统本身却没有提供一个干净利落的一键解决方案。</p>

<h2>不用第三方软件时你有哪些选择</h2>

<p>iMovie 可以导出为 MP4,但为了改变一下容器格式,把屏幕录像导入 iMovie 再重新导出,这个开销大得离谱。QuickTime Player 的"文件 > 导出为"菜单提供了固定的分辨率预设(1080p、720p、480p),但没有"保持原分辨率,只是改成 MP4"这个选项。<code>ffmpeg</code> 命令行工具能完美完成这个任务——<code>ffmpeg -i input.mov -c copy output.mp4</code>——但需要通过 Homebrew 安装,并且要熟悉终端操作。</p>

<p>"打开 iMovie"和"安装 Homebrew"之间存在一个空白地带,理应由一款简单的转换工具来填补。</p>

<h2>用原生转换工具完成 MOV 转 MP4</h2>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> 通过拖放来处理这项转换。把 MOV 文件拖到视频队列上,选择 MP4 作为输出格式,然后转换。在 Apple Silicon 上,硬件加速编码意味着即使是长视频也能快速完成,对电池的影响也很小。</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="MOV to MP4 conversion on Mac with hardware acceleration" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>批量转换 MOV</h3>
<p>如果你手上有一整个文件夹的屏幕录像、iPhone 视频或相机素材——全都是 MOV 格式——一次性全部拖入。批次会并发处理,所以你不需要等一个文件转完才开始下一个。</p>

<h3>不止是视频</h3>
<p>同一款应用还能在单独的队列中处理图片和音频。如果你的工作流涉及转换屏幕录像(MOV 转 MP4)、优化截图(PNG 转 WebP),以及导出音频片段(WAV 转 MP3),这三项工作都能在一个窗口内完成,无需切换工具。</p>

<p>MOV 转 MP4 本该是个两秒钟就能搞定的任务,但 macOS 却让它变得出奇困难。一款原生转换工具让这一切回归本质——拖入,拖放,完成。</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">前往 Mac App Store 获取 Mediasmith</a></p>
`,
  },

  "add-watermark-batch-images-mac": {
    slug: "add-watermark-batch-images-mac",
    title: "如何在 Mac 上批量为图片添加水印",
    description:
      "一张一张地给数百张照片盖上 logo 简直是折磨。在 macOS 上批量添加水印,支持位置和流水线控制。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>你拍摄了一套客户预览相册——150 张照片——需要在发送样片之前给每一张都加上水印。或者你正在把作品集上传到公开网站,想在每张图片上都放上你的 logo。手动在编辑器中打开每张照片、放置水印、调整位置、导出,这些花费的时间比拍摄本身还长。</p>

<p>加水印本质上是一项批量操作。没有人只给单独一张图片加水印。然而 macOS 上的大多数工具都把它当作逐文件处理的任务。</p>

<h2>macOS 没有内置的水印功能</h2>

<p>预览、快速操作和访达都完全没有水印支持。Automator 有一个"为 PDF 文档添加水印"的操作——但仅限 PDF,不支持图片。快捷指令可以叠加图片,但要搭建一个能处理不同图片尺寸、始终如一地定位水印、并输出正确格式的可靠快捷指令,是一个耗时数小时的工程。大多数摄影师最终会使用 Lightroom 的导出水印功能,如果你本来就在用 Lightroom 那还行——但如果只是想盖个 logo,这就有点大材小用了。</p>

<h2>在像素流水线中批量加水印</h2>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> 把加水印作为图片批处理流水线中的一个操作。在像素流水线中添加一个水印步骤,选择你的 logo 文件,设置位置和不透明度,队列中的每一张图片都会得到同样的处理。</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Batch watermarking images on Mac with pipeline operations" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>顺序很重要</h3>
<p>像素流水线按顺序执行操作,而顺序会改变结果。如果你在加水印之前先调整图片大小,水印会以相对于输出图片一致的视觉大小呈现。如果你先加水印再调整大小,水印会随图片一起缩放。两种方式都有各自的用处——流水线让你自己决定想要哪种行为。</p>

<h3>与其他操作组合</h3>
<p>加水印很少是孤立发生的。一条典型的样片相册流水线可能是:先调整为 1600px 宽(这样样片就不是全分辨率),再裁剪成 3:2,再加水印。这三个操作会在整个批次上一次性全部完成。</p>

<h3>保存为预设</h3>
<p>如果你经常给样片加水印,把这条流水线——格式、调整尺寸、水印文件和位置——保存为预设。下一次的相册处理就只是拖放加点击的活。</p>

<p>加水印只在你搭建流水线的那一次比较麻烦。之后,一切都是自动的。</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">前往 Mac App Store 获取 Mediasmith</a></p>
`,
  },

  "handbrake-alternative-mac-images-too": {
    slug: "handbrake-alternative-mac-images-too",
    title: "同时支持图片处理的 HandBrake 替代方案",
    description:
      "HandBrake 在视频处理上表现出色,但完全不涉及图片。一款能在一个工具中同时处理视频、图片和音频的 macOS 转换工具。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>HandBrake 是一款可靠、免费、开源的视频转码工具。如果你的工作只是转换视频文件,很难找到比它更好的选择。但一旦你的工作流涉及图片——调整产品照片大小、把 HEIC 转成 JPEG、批量给作品集加水印——HandBrake 就帮不上忙了。你最终得为视频运行 HandBrake,再为图片用另一个工具,在两个应用之间来回切换,而这本该属于同一类工作:媒体转换。</p>

<p>如果你的工作涉及多种媒体类型,整合到一个工具中能减少不少摩擦。</p>

<h2>HandBrake 的强项与局限</h2>

<p>HandBrake 在视频转码方面提供了深度控制:编解码器选择、码率目标、滤镜、字幕、章节标记。对于 DVD 抓取和视频存档,它非常出色。但它不支持图片,没有纯音频转换功能,而且它的界面虽然强大,对于只是想把 MOV 转成 MP4 的人来说学习曲线相当陡峭。</p>

<p>如果你需要 HandBrake 的高级视频功能(字幕烧录、去隔行、特定编码器调优),没有什么能替代它。但如果你的视频需求比较简单,同时还需要处理图片和音频,一款统一的工具能覆盖更多场景。</p>

<h2>视频、图片、音频集于一个窗口</h2>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> 是一款原生 macOS 应用,拥有三条队列——视频、图片和音频——都在同一个窗口内。它不会取代 HandBrake 在高级视频工作中的地位,但它能处理常见的转换需求(MOV 转 MP4、MKV 转 MP4),同时兼顾图片批处理和音频导出。</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="HandBrake alternative for Mac with image and audio conversion" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>HandBrake 没有的图片流水线</h3>
<p>图片队列包含一条有序的像素流水线:调整大小、裁剪、水印,以及格式转换(HEIC、JPEG、PNG、WebP、TIFF)。操作按顺序串联,批次并发处理。这正是原本需要 Photoshop 动作或另一款批处理工具才能实现的功能。</p>

<h3>内置 MP3 导出</h3>
<p>音频队列支持在多种格式之间转换,包括通过内置的 LAME 编码器导出 MP3。如果你要从视频中提取音频,或转换播客录音,它无需额外工具或安装 Homebrew 即可完成。</p>

<h3>原生性能</h3>
<p>使用 Swift 构建,这款应用在 Apple Silicon 上使用硬件加速编码。对于常规的视频转换,这意味着快速转码,功耗低——一次简单的格式变更不会带来风扇噪音。</p>

<p>HandBrake 用于深度视频工作;一款统一的转换工具用于其他一切。两者并不互斥。</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">前往 Mac App Store 获取 Mediasmith</a></p>
`,
  },

  "mp3-converter-mac": {
    slug: "mp3-converter-mac",
    title: "Mac 上的 MP3 转换工具——音频、视频、图片全在一个应用里",
    description:
      "在 macOS 上导出 MP3 通常意味着要安装 ffmpeg 或使用来路不明的免费应用。一款内置 LAME 编码器的原生转换工具。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>你有一段语音录音的 WAV 文件,需要转成 MP3 放到网站上。或者一段导出为 AIFF 的播客剪辑,发布时需要 MP3。又或者一个视频文件,你只想要它的音轨作为 MP3。在 macOS 上,这项简单的任务会把你引向一堆可疑的免费应用、把你的音频上传到未知服务器的网页转换工具,或者为了跑一条命令而去安装 Homebrew 和 ffmpeg。</p>

<p>MP3 是地球上最通用的音频格式。在 Mac 上转换成它,不应该需要一个计算机科学学位。</p>

<h2>为什么 macOS 不原生支持导出 MP3</h2>

<p>MP3 编码需要 LAME 库(或等效工具),而苹果没有内置它。iTunes(现在的音乐)可以把 CD 导入为 MP3,但操作系统里没有一个通用的"把这个文件转成 MP3"功能。GarageBand 可以导出 MP3,但为了转换一个音频文件而打开 GarageBand,就像为了裁剪一段视频而打开 Final Cut 一样离谱。QuickTime Player 只能把音频导出为 M4A。这个空白之所以存在,是因为 MP3 编码是一项授权技术,苹果选择不把它整合进自己的转换工作流中。</p>

<h2>内置编码器的 MP3 导出</h2>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> 直接在应用内部集成了 LAME MP3 编码器。无需 Homebrew,无需终端,无需下载编解码器。把音频文件拖到音频队列上,选择 MP3 作为输出格式,然后转换。编码器已经内置——打开应用的那一刻就能用。</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="MP3 converter for Mac with bundled LAME encoder" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>不只是音频</h3>
<p>同一款应用还能在独立的队列中处理视频转换(MOV 转 MP4、MKV 转 MP4)和图片批处理(调整大小、裁剪、水印、格式转换)。如果你的工作流涉及多种媒体类型——大多数创意工作流都是如此——一个应用就能覆盖全部三种类型,无需在多个工具间来回切换。</p>

<h3>批量音频转换</h3>
<p>需要把一整个文件夹的 WAV 录音转成 MP3?一次性全部拖入。批次以可配置的并发数处理,即便是大量音频文件也能很快转换完成。</p>

<h3>本地且私密</h3>
<p>每一次转换都在你自己的电脑上完成。不会有任何文件被上传到任何地方。对于客户录音、采访音频,或任何机密内容,这一点比便利性更重要——它是一项硬性要求。</p>

<p>MP3 转换是 macOS 遗漏的一项基础功能。一款内置编码器的原生应用填补了这一空白,而且没有多余的负担。</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">前往 Mac App Store 获取 Mediasmith</a></p>
`,
  },

  "convert-png-to-jpg-batch-mac": {
    slug: "convert-png-to-jpg-batch-mac",
    title: "如何在 Mac 上批量将 PNG 转换为 JPG",
    description:
      "截图和设计导出文件很快就会堆积成一堆 PNG。这里介绍如何在 macOS 上把整个文件夹转换成 JPG,而不用逐个打开文件。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>PNG 对截图和带透明度的图形来说是个不错的格式,但作为照片和网页图片的默认格式却表现平平——文件体积往往是同等画质 JPG 的两到五倍,却看不出明显的质量提升。如果你手上有一整个文件夹、上百张即将用于网站、邮件附件或客户交付物的 PNG,在预览中一张一张转换绝对不是明智之选。</p>

<h2>为什么 PNG 会一开始就堆积成山</h2>
<p>截图工具默认保存为 PNG。设计软件默认把导出的平面化图片保存为 PNG。扫描仪和一些相机也保存 PNG。这些做法本身都没有错——PNG 是无损的,并且支持透明度——但这意味着即便 JPG 更适合实际用途,PNG 依然会在下载和桌面文件夹中不断堆积。</p>

<h2>手动方式为何行不通</h2>
<p>预览可以通过"文件 > 导出"把单个 PNG 转成 JPG。在访达中选中多个文件、右键点击,你也会找到用于图片转换的快速操作——但它不让你设置 JPG 质量,而且会悄悄保留相同的文件名,如果不小心的话就会覆盖原始文件。对于少量文件这还能忍受。但对上百个文件,你需要能控制质量,并且可以无人值守运行的队列。</p>

<h2>带质量控制的批量转换</h2>
<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> 有一条专门的图片队列,正是为此而生。把一整个文件夹的 PNG 拖进去,选择 JPG 作为输出格式,设置压缩质量,一次性转换整个批次。文件会并发处理而不是逐个处理,所以一百张图片的文件夹不会让你等上一百倍的时间。</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Batch converting PNG files to JPG on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>顺便调整大小</h3>
<p>由于格式转换和调整大小、裁剪在同一条流水线上,你可以在转换的同时把超大的截图缩小到合适的宽度——如果这些 PNG 来自 5K 显示器却要用在博客文章中,这个功能就很有用。</p>

<h3>原始文件保持不变</h3>
<p>转换后的文件会作为新的输出写入,不会覆盖你的源 PNG 文件。如果你日后还需要透明度或无损画质,这一点很重要。</p>

<p>一旦不再逐个文件处理,批量 PNG 转 JPG 就是一个五分钟的活儿,而不是一个下午的工程。</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">前往 Mac App Store 获取 Mediasmith</a></p>
`,
  },

  "compress-images-batch-mac": {
    slug: "compress-images-batch-mac",
    title: "如何在 Mac 上批量压缩图片",
    description:
      "大量照片文件夹会拖慢上传速度、占用存储空间。这里介绍如何在 macOS 上一次性压缩数百张图片,而不用手动逐个操作。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>一个相机照片或导出图形的文件夹很容易就达到几个 GB,而这些体积中的大部分对肉眼来说是察觉不到的——一张以 80% JPEG 质量压缩的照片,看起来几乎和未压缩版本一模一样,却只占用了一小部分空间。问题不在于知道压缩有用;而在于如何在不逐个打开数十上百个文件的情况下完成压缩。</p>

<h2>为什么在 Mac 上"随便压缩一下"没那么简单</h2>
<p>macOS 没有内置的批量压缩工具。预览可以用质量滑块一次导出一张图片,单张照片没问题,但无法扩展到批量场景。邮件在添加照片附件时的"图片大小"选项确实做了一种压缩,但它绑定在发送邮件这个动作上,而不是用来生成你能保留或上传到别处的压缩文件。对于真正的批量工作,你需要一款基于队列的工具。</p>

<h2>不动原始文件的批量压缩</h2>
<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> 通过它的图片队列来处理这个问题。拖入一个文件夹,保持相同的输出格式(如果同时也想转换格式则切换格式),然后设置一个质量等级。整个批次一次运行完成压缩,任务并发处理,大文件夹也不会耗时太久。</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Batch compressing a folder of images on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>找到合适的质量等级</h3>
<p>没有一个放之四海而皆准的"正确"压缩设置——这取决于图片本身及其用途。面向线上商店的产品摄影通常可以压得更狠一些,而面向全屏展示的作品集图片则需要更谨慎。先跑一小批测试,以实际尺寸查看输出效果,再决定是否将设置应用到成千上万张图片上。</p>

<h3>把调整大小作为压缩的一部分</h3>
<p>文件大小来自两个方面:质量和尺寸。一张 6000px 宽、却将在网页上以 800px 显示的照片,携带的像素数据根本没人会看到。因为调整大小和压缩处于同一条流水线,你可以先缩小尺寸再做质量压缩,这往往比单靠压缩更能减小文件体积。</p>

<h3>为重复性任务设置预设</h3>
<p>如果你经常压缩同一类图片——比如商店每周的产品照片——把格式、质量和调整尺寸设置保存为预设,未来的批次就只需一次点击。</p>

<p>一旦压缩变成一项批量操作,而不是逐文件的琐事,就再没有理由继续发布体积过大的图片了。</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">前往 Mac App Store 获取 Mediasmith</a></p>
`,
  },

  "convert-mkv-to-mp4-mac": {
    slug: "convert-mkv-to-mp4-mac",
    title: "如何在 Mac 上将 MKV 转换为 MP4",
    description:
      "MKV 文件在 QuickTime 中无法播放,也无法顺利上传到大多数平台。这里介绍如何在 macOS 上无需安装 ffmpeg 就将其转换为 MP4。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>MKV 是一种功能强大的容器格式——它因能够在一个文件中容纳多条音轨、字幕流和高质量视频而广受欢迎,这也是为什么这么多下载或抓取的内容都是以 MKV 打包的。问题在于 macOS 把它当作二等公民对待。QuickTime Player 打不开它。AirPlay 无法将其投送到 Apple TV。大多数接受视频的上传表单和消息应用都期望 MP4,要么直接拒绝 MKV,要么悄无声息地无法预览它。</p>

<h2>为什么 MKV 和 macOS 处不来</h2>
<p>苹果的框架是围绕兼容 QuickTime 的容器格式构建的,而 MKV 从来都不在其中。VLC 能顺利播放 MKV 文件,是因为它内置了自己的解码器,但能播放不等于兼容——一旦你需要分享这个文件、在 Final Cut 中编辑它,或者上传到会检查文件类型的地方,MKV 就从单纯的不便变成了实实在在的麻烦。</p>

<h2>不用命令行也能转换</h2>
<p>传统的解决办法是 <code>ffmpeg -i input.mkv -c copy output.mp4</code>,它在不重新编码的情况下重新封装容器——速度快,但需要通过 Homebrew 安装 ffmpeg,并且要为每个文件正确输入命令。这对单个文件来说是可以接受的一次性操作;但对二十个文件的文件夹来说就很繁琐了。</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> 通过拖放式队列提供同样的结果。把你的 MKV 文件拖到视频队列上,选择 MP4 作为输出,然后转换。Apple Silicon 上的硬件加速编码能让即使是较长的文件也保持较快的处理速度。</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Converting MKV video files to MP4 on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>批量处理整个文件夹</h3>
<p>如果你有一整季剧集或一个文件夹的下载片段,全都是 MKV 格式,把它们一起放入队列,而不是逐个转换。队列以可配置的并发数处理文件,所以十个文件的批次完成时间大致相当于连续转换两三个文件所需的时间。</p>

<h3>额外音轨和字幕会怎样</h3>
<p>MKV 文件有时携带多条音轨或内嵌字幕流,MP4 对这些的处理方式不同。如果你的源文件有不止一条音轨,请检查最终输出中保留了哪一条——对于普通的单音轨文件这不是问题,但多音轨内容转换后值得快速回放检查一下。</p>

<p>一旦你的视频变成了 MP4,它就能在 QuickTime 中播放,在访达中正确预览,并且能顺利上传到任何期望标准视频格式的地方。</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">前往 Mac App Store 获取 Mediasmith</a></p>
`,
  },

  "mac-preview-batch-convert-limitations": {
    slug: "mac-preview-batch-convert-limitations",
    title: "Mac 预览批量转换的局限——它做不到的事",
    description:
      "预览在技术上可以一次转换多张图片,但这项功能存在实实在在的短板。这里介绍它擅长什么,又在哪些地方力不从心。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>预览是大多数 Mac 用户在需要转换少量图片时首先想到的应用,对于基础任务它确实好用:在访达中选中几个文件,在预览中打开它们,用"文件 > 导出所选图像"选择新格式。它是系统自带的,免费,对于简单的一次性任务能胜任。但你越依赖它来处理真正的批量工作,它的局限性就越明显。</p>

<h2>预览的批量导出实际能做什么</h2>
<p>选中多张图片,选择"导出所选图像",预览会让你为整个批次选择一种输出格式和一个目标文件夹。这对于简单的格式转换——比如 HEIC 转 JPEG——在数量不多的文件上确实很实用。</p>

<h2>它在哪些地方力不从心</h2>
<h3>没有逐文件的质量控制</h3>
<p>你只能得到一个统一应用的质量设置。没办法根据内容对一批照片做不同程度的压缩,也没有在提交之前预览输出大小的功能。</p>

<h3>无法在同一次处理中调整大小、裁剪或加水印</h3>
<p>如果你手动打开单张图片,预览的标记工具可以一次调整一张图片的大小,但批量导出并不提供调整大小、裁剪或加水印作为转换的一部分。如果你需要转换并调整一百张图片的大小,那就是两次单独的手动操作,或者一百次手动编辑。</p>

<h3>不支持视频或音频</h3>
<p>预览的批量工具仅限图片。它没有转换视频文件或导出音频的概念,所以一旦你的工作流涉及多种媒体类型,你就已经需要用别的软件了。</p>

<h3>没有预设或队列</h3>
<p>每次批量导出都要从头开始设置。没办法把"调整为 1200px、转换为 JPG、右下角加水印"保存为一个可重复使用的操作——你每次都要重新选择相同的选项。</p>

<h2>什么时候值得用专门的批量工具</h2>
<p>如果你的批量任务偶尔才发生、需求也很简单——只是换个格式,别无其他——预览完全够用,没必要再装别的软件。但一旦你需要调整大小、裁剪和加水印一起完成,或者你在同一个工作流中需要转换图片、视频和音频,像 <a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> 这样的专用工具能用一条有序的像素流水线和针对每种媒体类型的独立队列填补这些空白。</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Batch image processing pipeline beyond Preview's limits" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>预览把基础功能做得不错。清楚地了解它的边界,能帮你判断什么时候该换一款专为批量工作打造的工具。</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">前往 Mac App Store 获取 Mediasmith</a></p>
`,
  },

  "convert-tiff-to-jpg-mac": {
    slug: "convert-tiff-to-jpg-mac",
    title: "如何在 Mac 上将 TIFF 转换为 JPG",
    description:
      "扫描仪和相机生成的 TIFF 文件体积庞大,且经常不被网页工具支持。这里介绍如何在 macOS 上将其转换为 JPG,无论是单个文件还是整批处理。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>TIFF 是扫描仪、拍摄无压缩画面的专业相机以及印刷工作流的首选格式,因为它在不使用有损压缩的情况下保留了每一比特的图像数据。这正是 TIFF 文件体积庞大的原因——单张扫描文档页面就可能有数十兆字节——也是大多数网页表单、邮件客户端和消息应用要么直接拒绝它,要么处理不当的原因。</p>

<h2>为什么 TIFF 不适合到处传输</h2>
<p>浏览器通常无法内嵌显示 TIFF。大多数内容管理系统不接受它作为上传格式。而且因为对于照片内容来说 TIFF 文件比 JPG 大得多,在不再需要印刷级原始文件之后继续保留它们只会浪费磁盘空间。转换成 JPG 能同时解决这两个问题:更小的文件,并且能在你需要的地方正常显示。</p>

<h2>转换单个文件</h2>
<p>预览可以原生打开 TIFF 文件,并通过"文件 > 导出"导出为 JPG——选择 JPEG,设置质量等级,保存。对于一两页扫描文件,这已经够快了,也不需要额外的软件。</p>

<h2>转换一批扫描文件</h2>
<p>扫描仪很少只生成一个文件。一份多页文档扫描、一箱用平板扫描仪扫过的老照片,或者单反相机以 TIFF 拍摄导出的一批文件,都可能留给你数十个需要相同处理的文件。在预览中手动打开并逐个导出,会把一个五分钟的任务变成一个小时。</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> 把这项工作当作一条队列来处理,而不是一系列手动导出。把整个 TIFF 文件夹拖到图片队列上,设置 JPG 作为输出格式并选择一个质量等级,一次性转换全部文件。</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Converting TIFF scans to JPG on Mac in batch" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>转换的同时调整扫描页面大小</h3>
<p>扫描仪的输出通常设置为印刷分辨率的 DPI,产生的像素数量远超任何屏幕所需。由于调整大小和格式转换处于同一条流水线上,你可以在同一次批处理中把扫描页面缩放到合适的宽度,在格式转换的基础上进一步减小文件体积。</p>

<h3>保留 TIFF 原始文件</h3>
<p>如果这些 TIFF 是存档扫描件或来自印刷工作,转换后不要删除它们——TIFF 的无损画质正是它们最初被创建成这种格式的原因。把 JPG 当作分发副本,把 TIFF 当作存档文件。</p>

<p>TIFF 有它自己的用武之地,但它不适合用来分享。把整批扫描文件一次性转换成 JPG,能把数小时的手动导出变成几分钟的事。</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">前往 Mac App Store 获取 Mediasmith</a></p>
`,
  },

  "image-resizer-mac-app": {
    slug: "image-resizer-mac-app",
    title: "Mac 图片调整大小工具——无需 Photoshop 的批量调整",
    description:
      "在预览中调整少量照片大小没问题。要为网站或商品列表调整数百张图片,需要的是真正的批量工具,而不是 Photoshop 动作。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>每一张最终出现在网站、邮件或产品列表中的照片,最终都需要调整大小以适配它所在的空间。做一次,预览的"工具 > 调整大小"对话框就已经绰绰有余。为一份产品目录重复两百次,你就需要一款不要求逐个打开文件的工具。</p>

<h2>Photoshop 动作这条弯路</h2>
<p>批量调整大小的传统答案一直是 Photoshop 的图像处理器,或者通过"自动 > 批处理"运行的一个录制动作。这确实有效,但意味着为了一件其实就是"把这些图片缩小"的事,你得拥有或订阅 Photoshop,还要正确设置一个动作,并通过一个相当不友好的对话框指定输入和输出文件夹。</p>

<h2>一款只做调整大小这一件事的工具</h2>
<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> 把调整大小作为其图片流水线的一个阶段,而不需要为了用这个功能而携带一整套图片编辑器。把一批照片拖到图片队列上,设置目标尺寸,转换。调整大小操作会一次性应用到批次中的每一个文件。</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Batch resizing photos on Mac without Photoshop" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>先调整大小,再裁剪,再加水印——按顺序进行</h3>
<p>因为调整大小是与裁剪、水印并列的一个有序流水线阶段,你可以按顺序串联操作:先缩小图片,再裁剪成特定宽高比,再在角落盖上 logo。每个操作都基于上一个操作的结果运行,所以你设定的顺序就是实际执行的顺序。</p>

<h3>在同一次处理中完成格式转换</h3>
<p>如果你的源图片是 HEIC 或 PNG,而目标需要 JPG 或 WebP,格式转换会与调整大小一起进行,而不是作为单独的一步。一批处理,一次完成。</p>

<h3>为重复的尺寸需求设置预设</h3>
<p>如果你一直调整到同样的目标尺寸——比如博客用的 1200px 宽,或者某个市场平台要求的固定方形尺寸——把它保存为预设,以后的批次就不需要重新输入尺寸。</p>

<p>调整图片大小是一项范围狭窄、机械性的任务。它不需要背负一整套图片编辑器的价格和复杂度。</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">前往 Mac App Store 获取 Mediasmith</a></p>
`,
  },

  "convert-audio-files-mac": {
    slug: "convert-audio-files-mac",
    title: "如何在 Mac 上转换音频文件——WAV、FLAC、MP3、AAC",
    description:
      "语音备忘录、抓取的音频和播客导出文件很少一开始就是你真正需要的格式。这里介绍如何在 macOS 上在 WAV、FLAC、MP3 和 AAC 之间转换。",
    date: "2026-09-06",
    readTime: "5分钟阅读",
    content: `
<p>音频格式的存在各有其原因——WAV 和 FLAC 为编辑和存档保留完整画质,MP3 和 AAC 则用一定的保真度换取更小的文件体积,以便在任何地方都能播放——你很容易碰上一个格式不对的文件,而恰好接下来要用它做点别的事。一段需要变成网站用 MP3 的 WAV 录音。一段需要转成 AAC 才能真正塞进手机存储空间的 FLAC 抓轨。一段需要变成 MP3 才能被不接受其他格式的播客托管平台接受的语音备忘录。</p>

<h2>macOS 在这方面的不足</h2>
<p>苹果的工具能很好地处理它偏好的格式,处理其他格式时则显得笨拙。"音乐"应用可以通过自己的导入设置在部分格式间转换,但它是围绕你的资料库构建的,而不是一个通用文件转换工具,处理 WAV 或 FLAC 时也不太顺手。QuickTime Player 可以导出音频,但只能导出为 M4A。苹果自带的应用没有一个提供直接的"输入任意格式,输出任意格式"的音频转换器,而 MP3 导出特别需要一个苹果没有内置的授权编码器。</p>

<h2>不用终端完成格式转换</h2>
<p>常见的变通方法是通过 Homebrew 安装 ffmpeg,并为每一对格式使用正确的编解码器参数运行命令——能用,但前提是你熟悉终端,并记得住各格式之间不同的参数语法。</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> 则把这一切放到了一个拖放式队列背后。把 WAV、FLAC、AAC 或其他音频文件拖到音频队列上,选择你的输出格式,然后转换。MP3 导出通过内置的 LAME 编码器开箱即用——无需额外的安装步骤。</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Converting audio files between WAV, FLAC, MP3, and AAC on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>整场录音的批量转换</h3>
<p>如果你录制了多条素材,或者把一个录音会话导出为多个独立的 WAV 音轨,在一次队列运行中转换整个文件夹,而不是逐个文件导出。并发处理意味着批次不会随着文件数量增加而成比例地变慢。</p>

<h3>选择合适的输出格式</h3>
<p>MP3 是兼容性最好的选择——每一种设备和平台都能播放它。AAC 在相同码率下通常音质更好,也是苹果自己偏好的格式,如果目标是苹果生态系统内的应用,这一点很重要。只有在需要为后续编辑保留无损画质时,才保留 WAV 或 FLAC。</p>

<p>音频转换本该是一件不需要多想的事。一条能接受任意常见格式并输出到任意其他格式的队列,消除了所有的猜测。</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">前往 Mac App Store 获取 Mediasmith</a></p>
`,
  },

  "crop-images-batch-mac": {
    slug: "crop-images-batch-mac",
    title: "如何在 Mac 上批量裁剪图片",
    description:
      "把一百张产品照片逐一裁剪成同样的宽高比,是在浪费一个下午。这里介绍如何在 macOS 上批量裁剪。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>裁剪单张图片在预览中是个三十秒的活儿:打开它,拖动选区,点击裁剪。把两百张图片裁剪成完全相同的宽高比——用于市场列表、网格布局,或一组需要对齐的缩略图——完全是另一个层级的问题,预览根本不是为此设计的。</p>

<h2>为什么手动裁剪无法规模化</h2>
<p>在预览中,每一次手动裁剪都需要你为那张特定的图片凭眼力或手动输入选区,因为预览没有"把这批图片裁剪成固定比例"这个概念。即便你很仔细,凭手工让两百次裁剪做到像素级一致也会引入微小差异,一旦这些图片在网格中一起展示,就会显现为错位的缩略图。</p>

<h2>用固定目标进行裁剪</h2>
<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> 把裁剪当作一项带有明确目标的批量操作,而不是逐文件重复的手动选择。设置一次裁剪参数,把整批图片拖到队列上,每一张图片都会以同样的方式在一次处理中完成裁剪。</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Batch cropping product photos to a fixed aspect ratio on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>先调整大小再裁剪,结果更可预测</h3>
<p>因为裁剪与调整大小处于同一条有序流水线上,你可以先把图片统一调整为一个基准尺寸,再从这个已知尺寸开始裁剪——这比直接裁剪原始尺寸参差不齐的图片,结果要可预测得多。</p>

<h3>常见使用场景</h3>
<p>为社交媒体网格做正方形裁剪、按市场平台的列表要求裁剪固定宽高比,或者从一批扫描图像中裁掉统一的边框,这些其实都是同一个底层问题:把一条裁剪规则应用到许多文件上。批量工具能把这些任务从手动的一整个下午,变成一个排队执行的作业。</p>

<h3>与加水印结合</h3>
<p>如果裁剪后的图片在发布前还需要加上 logo 或水印,这可以作为同一条流水线中的下一个阶段来运行,这样裁剪加水印的输出就来自同一次队列运行,而不是分两次经过两个不同的工具。</p>

<p>批量裁剪不是大多数人一开始就会想到要找的功能——直到他们手动裁完第五十张图片,才意识到肯定有更好的办法。</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">前往 Mac App Store 获取 Mediasmith</a></p>
`,
  },

  "ffmpeg-alternative-mac-gui": {
    slug: "ffmpeg-alternative-mac-gui",
    title: "带图形界面的 Mac FFmpeg 替代方案",
    description:
      "FFmpeg 几乎能对媒体文件做任何事,但每次任务都要记住命令参数语法会让人厌烦。这里介绍一种针对人们实际需要的转换的图形界面方案。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>毫不夸张地说,FFmpeg 是有史以来最强大的开源软件之一。它几乎能在所有存在的视频、音频和容器格式之间进行转换,只要你知道正确的参数组合,几乎没有它做不到的事。问题恰恰在于此:你每次、针对每一种不同的任务,都需要知道正确的参数组合,而命令中一个打字错误就会产生一个错误,或者更糟——一个悄无声息的错误输出。</p>

<h2>为什么人们会去找替代方案</h2>
<p>安装 ffmpeg 意味着要用 Homebrew,如果你还没有的话还得装 Xcode 命令行工具,对于只想转换一个视频文件的人来说,这是相当大的前置工作。即便装好了,基于终端的工作流也意味着没有可视化队列,没有拖放操作,除了滚动的日志之外没有直观的进度提示——用于脚本编写没问题,但作为其他任务之间的一次性转换就不太合适了。</p>

<h2>覆盖常见 90% 场景的图形界面</h2>
<p>没有人会说图形界面应用能取代 ffmpeg 的全部参数功能——滤镜图、冷门编解码器和脚本化流水线依然属于命令行的地盘。但大多数使用 ffmpeg 的人做的其实就是那么几件常见的事:把这个视频转成 MP4,把这些图片转成 JPG,把这段音频导出为 MP3。这正是 <a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> 用原生拖放界面而非终端所覆盖的领域。</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="GUI media converter alternative to ffmpeg on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>三条队列取代三套命令模式</h3>
<p>不必为视频、音频和图片转换分别记住不同的参数组合,这里有三条独立的队列——每种媒体类型一条——每条队列都把相关选项呈现为控件,而不是语法。</p>

<h3>无需配置即可使用硬件加速</h3>
<p>要让 ffmpeg 在 Apple Silicon 上使用硬件编码,需要指定正确的编码器参数(比如 <code>-c:v h264_videotoolbox</code>)。一款原生应用会自动处理这一点,默认使用硬件加速,你甚至不需要知道它的存在。</p>

<h3>什么时候依然要用终端</h3>
<p>对成千上万个文件进行自定义逻辑的批量脚本处理、不常见的滤镜链,或者图形界面没有暴露的编解码器选项——这些依然是 ffmpeg 的地盘,那些时刻你还是应该保留它的安装。图形界面工具和 ffmpeg 并不是竞争对手;它们覆盖的是同一件工作的不同部分。</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">前往 Mac App Store 获取 Mediasmith</a></p>
`,
  },

  "convert-raw-to-jpg-mac": {
    slug: "convert-raw-to-jpg-mac",
    title: "如何在 Mac 上将 RAW 照片转换为 JPG",
    description:
      "RAW 文件保留了相机传感器捕捉到的每一个细节,但除了照片编辑器之外几乎没有软件能打开它们。这里介绍如何在 macOS 上把一整场拍摄的照片转换成 JPG。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>拍摄 RAW 格式能给你相机所能提供的最大编辑空间——完整的动态范围,没有内置在文件中的机内压缩决策,后期拥有完全的控制权。这也意味着每个文件都非常庞大,而且除了专业照片编辑器之外,几乎什么软件都读不了它。在一张 RAW 照片能被放上网站、进入客户相册,或发布到社交媒体之前,它需要先变成 JPG。</p>

<h2>RAW 转换通常发生在哪里</h2>
<p>大多数摄影师会把 RAW 转 JPG 作为在 Lightroom、Capture One 或"照片"应用中编辑流程的一部分,导出最终修好的版本。当每一张图片都需要单独调整时,这是正确的工作流。但有时你只是需要把一批 RAW 文件不经编辑地转成 JPG——一套快速的客户预览集、一份未编辑照片的备份,或者已经在机内做过色彩校正、只需要改个格式的图片。</p>

<h2>不打开编辑器就能批量转换</h2>
<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> 在其图片队列上把普通的 RAW 转 JPG 处理为一项批量任务,不需要你先在编辑应用中打开每一个文件。把文件夹拖进去,设置 JPG 作为输出并选择一个质量等级,一次性转换整场拍摄的照片。</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Converting a batch of RAW camera photos to JPG on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>什么时候适合用这种方式</h3>
<p>不经编辑的批量 RAW 转换,适用于那些不需要单独调整的图片——曝光良好的照片、给客户挑选用的快速联系样张,或者稍后会选择性编辑、目前只需要能预览的图片。如果每一张图片都需要单独的曝光和色彩调整,那么一款完整的 RAW 编辑器仍然是那道工序的正确工具。</p>

<h3>同时调整大小</h3>
<p>RAW 文件通常会产生全传感器分辨率的 JPG,这远超大多数用途所需。因为调整大小和格式转换处于同一条流水线上,你可以在同一次批处理中把输出缩放到适合网页的尺寸,而不是事后再单独进行一次调整大小的步骤。</p>

<h3>保留 RAW 文件</h3>
<p>把 JPG 当作可丢弃的预览图或交付副本。RAW 原始文件才是你真正的资产——有了 JPG 之后不要删除它们,因为 RAW 文件保留了日后重新编辑的可能性。</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">前往 Mac App Store 获取 Mediasmith</a></p>
`,
  },

  "mac-sips-command-vs-gui-converter": {
    slug: "mac-sips-command-vs-gui-converter",
    title: "Mac sips 命令与图形界面转换工具——该用哪一个",
    description:
      "macOS 内置了一个隐藏的命令行图片工具,名叫 sips。这里介绍它能做什么、在哪些地方力不从心,以及什么时候图形界面的批量转换工具更合适。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>macOS 深处藏着 <code>sips</code>——全称 Scriptable Image Processing System——一个已经是操作系统一部分多年的命令行工具,而大多数 Mac 用户从未听说过它,更别提用过了。它可以完全在终端中调整图片大小、旋转和转换格式,无需安装任何第三方软件。对于脚本编写场景,它确实是个实用的工具。但对于日常的批量工作,它存在不小的摩擦。</p>

<h2>sips 擅长什么</h2>
<p>一条像 <code>sips -s format jpeg input.png --out output.jpg</code> 这样的命令就能转换一个文件,而无需安装任何东西——它已经在每台 Mac 上了。包裹在一个 shell 循环中,它可以处理整个文件夹:<code>for f in *.png; do sips -s format jpeg "$f" --out "\${f%.png}.jpg"; done</code>。如果你熟悉终端操作,只需要一个快速的一次性脚本,sips 能以零安装成本完成任务。</p>

<h2>它在哪些地方让人不太舒服</h2>
<p>它的语法不太直观,也很容易出错——像 <code>-Z</code> 这种用于保持宽高比调整大小的参数,和用于精确尺寸的 <code>--resampleWidth</code>,并不是大多数人在多次使用之间还能记住的东西。没有可视化队列,除了终端输出之外没有进度提示,也没办法在不写更复杂脚本的情况下把调整大小、裁剪和水印串联起来。而且如果你不熟悉 shell 循环,转换一个文件夹而不是单个文件,本身就是一个小小的研究课题。</p>

<h2>什么时候图形界面工具更胜一筹</h2>
<p>如果批量转换是你工作流中经常性的一部分,而不是偶尔才有的脚本任务,像 <a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> 这样的图形界面工具能完全省去语法这一环。把文件拖到队列上,通过可视化选项设置格式、调整大小、裁剪和水印,然后转换。</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="GUI batch image converter compared to the Mac sips command" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>诚实的对比</h3>
<p>sips 免费、预装好,如果你本来就在因为其他原因写 shell 脚本,把它整合进更大的自动化工作流中会非常合适。图形界面转换工具在处理日常的一次性和批量任务时更快,尤其是涉及调整大小、裁剪或水印链的任务,而且不需要在几个月的间隔之后还要记得命令语法。</p>

<p>两者没有绝对的优劣——这取决于你是在搭建一条自动化流水线,还是今天只是需要转换几个文件。</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">前往 Mac App Store 获取 Mediasmith</a></p>
`,
  },

  "reduce-image-file-size-mac": {
    slug: "reduce-image-file-size-mac",
    title: "如何在不损失画质的情况下在 Mac 上减小图片文件体积",
    description:
      "过大的图片文件会拖慢网站速度、占用存储空间,但过度压缩又会让照片看起来很糟糕。这里介绍如何在 macOS 上在保持画质的同时缩小文件体积。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>"在不损失画质的情况下减小文件体积"听起来像是在要求一件不可能的事,严格来说确实如此——任何有损压缩都会丢弃一些数据。但实际上,大多数图片携带的数据量远超过任何人能感知到的程度,这意味着存在一个很宽的区间,在这个区间内文件体积会大幅下降,而肉眼却察觉不到差异。诀窍在于找到这个区间,并在整个批次上稳定地命中它,而不是在单张图片上凭感觉操作。</p>

<h2>真正起作用的两个杠杆</h2>
<p>文件体积归结为两件事:像素尺寸和压缩质量。大多数人会直接去调低 JPEG 质量,这是更明显的那个杠杆——推得太狠就会出现块状伪影。不那么明显的杠杆是尺寸:一张实际以 1000px 宽显示、却以 4000px 宽保存的图片,携带了四倍的像素数据,却对实际显示效果没有任何视觉上的好处。</p>

<h2>先调整大小,再轻度压缩</h2>
<p>把文件体积压到最小、同时保持视觉上无损的组合方式,是先把图片调整到实际显示尺寸,再进行适度的压缩——而不是保持全分辨率、靠猛烈压缩来弥补。把一张过大的图片缩小到它真正的目标尺寸,往往比单靠压缩更能减小文件体积,而且这样你还能在此基础上使用更高、更安全的质量设置。</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> 把调整大小和质量压缩作为同一条流水线中的阶段来运行,因此两者在一次批处理中就能完成,而不需要两个独立的工具或步骤。</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Reducing image file size while preserving visual quality on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>格式选择同样重要</h3>
<p>在同等视觉质量下,WebP 通常比 JPG 生成更小的文件,而且现在已经被浏览器和平台广泛支持。如果目标平台接受它,仅仅切换格式就能在完全不动质量或尺寸的情况下缩小文件体积。</p>

<h3>提交批处理之前先测试</h3>
<p>先用你选定的设置处理几张有代表性的图片,以实际输出尺寸查看效果,确认无误后再把设置应用到整个批次。一张风景照看起来没问题的设置,放到带有细小文字或锐利边缘的照片上可能会显现出伪影。</p>

<p>在不损失可见画质的前提下缩小文件体积并非神话——这只是调整大小和压缩协同工作的结果,而不是单靠压缩包办一切。</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">前往 Mac App Store 获取 Mediasmith</a></p>
`,
  },

  "convert-gif-to-mp4-mac": {
    slug: "convert-gif-to-mp4-mac",
    title: "如何在 Mac 上将 GIF 转换为 MP4",
    description:
      "GIF 相对于其实际承载的内容——短循环视频——来说体积臃肿。这里介绍如何在 macOS 上把它们转换为 MP4,获得更小的文件体积和更好的播放效果。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>GIF 是一个奇特的幸存格式——诞生于 1987 年,最初为简单图形设计,如今却成了在网络上分享短循环片段的事实标准,尽管它在这项任务上的效率低得惊人。GIF 用有限的 256 色调色板编码每一帧,几乎没有真正的帧间压缩,这意味着一段作为 MP4 只有几百 KB 的五秒片段,作为 GIF 很容易膨胀到几十 MB,画质还明显更差。</p>

<h2>为什么要彻底放弃 GIF</h2>
<p>如果一个 GIF 只是发在聊天消息里,它的低效大多无关紧要。但一旦它需要放到网站上、进入视频编辑器,或者任何在乎文件体积或画质的场合,对同样的内容来说 MP4 在各方面都更胜一筹:文件更小、色彩范围完整,而且它作为真正的视频元素播放,而不是动图,大多数平台处理起来也更高效。</p>

<h2>把 GIF 转换成 MP4</h2>
<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> 在其视频队列上把 GIF 当作一种视频源来处理——拖进去,设置 MP4 作为输出,然后转换。GIF 强加在源文件上的色带和有限调色板问题,在转换过程中会消失,因为 MP4 不受限于 256 色,不过原始的视觉内容(以及它变成 GIF 时已经损失的画质)保持不变。</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Converting an animated GIF to MP4 video on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>批量转换一个文件夹的 GIF</h3>
<p>如果你收集或生成了一整个文件夹的 GIF——保存为 GIF 的屏幕录像、表情包、UI 演示——在一次队列运行中把它们全部转换成 MP4,能大幅削减总存储占用,因为对于同样的视觉内容,MP4 编码的效率要高得多。</p>

<h3>MP4 依然需要 GIF 兜底的场合</h3>
<p>一些较旧的平台和邮件客户端仍然不会像内嵌显示 GIF 那样自动播放 MP4,所以在假设 MP4 能直接替代所有场景之前,先检查一下目标平台。对于现代网站、视频编辑器和大多数社交平台,MP4 是没有附加条件的更优选择。</p>

<p>把一个 GIF 库转换成 MP4,通常能大幅缩小总存储占用——在文件体积成为实际问题之前就值得动手做。</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">前往 Mac App Store 获取 Mediasmith</a></p>
`,
  },

  "batch-watermark-photos-mac": {
    slug: "batch-watermark-photos-mac",
    title: "如何在 Mac 上批量为照片加水印",
    description:
      "一张一张地给每张照片盖上 logo,超过少量图片就无法扩展。这里介绍如何在 macOS 上为一整批照片一致地加上水印。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>在公开分享照片之前加上水印——摄影师的 logo、版权声明、产品照片上的品牌标志——对你发布的每一张图片来说都是合理的诉求。在预览的标记工具中手动完成这件事,给每张照片手动定位一个 logo 图片,对一张照片来说是合理的,但对上百张来说就是折磨,而且手动放置会导致水印在每张图片上的位置都略有不同。</p>

<h2>手动加水印的问题</h2>
<p>预览在技术上可以用标记功能把一张图片叠加到另一张上,但没有批量模式,没办法在一组图片之间锁定水印的位置和大小,也没办法自动化这个过程。每张照片都变成了一次小型的手动编辑,而在大批量图片之间靠肉眼保持一致性几乎不可能。</p>

<h2>整批一致的位置</h2>
<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> 把加水印作为其有序图片流水线中的一个阶段。设置一次水印图片、位置和大小,把你的照片批次拖到队列上,每张照片都会在同一位置得到同样的水印——无需逐文件手动重新定位。</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Batch watermarking a set of photos consistently on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>先调整大小以保持水印比例一致</h3>
<p>如果你的源照片尺寸不一,一个为某张照片设置好大小的水印,放到更大的图片上会显得太小,放到更小的图片上又会显得过大。在流水线中先运行调整大小,让每张照片在进入水印阶段之前都达到相同的尺寸,能让水印的相对大小在整个批次中保持一致。</p>

<h3>顺带完成格式转换</h3>
<p>如果加了水印的照片还需要格式变更——比如为了更广泛的兼容性把 HEIC 转成 JPG——这会在同一次处理中完成,而不是作为单独的一步,所以一次队列运行就能产生调整好大小、加上水印、转换好格式、可以直接发布的输出。</p>

<h3>保存为预设</h3>
<p>如果你发布的每一批照片都要加水印,把水印设置保存为预设,这样未来的拍摄就能跳过设置步骤,直接开始转换。</p>

<p>一整个相册中一致的水印,读起来是刻意为之、专业可靠的;每隔几张位置就有点偏差的水印,读起来则像是临时补上的。批量工具正是这两者之间的区别所在。</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">前往 Mac App Store 获取 Mediasmith</a></p>
`,
  },

  "convert-avif-to-png-mac": {
    slug: "convert-avif-to-png-mac",
    title: "如何在 Mac 上将 AVIF 转换为 PNG",
    description:
      "AVIF 是一个很棒的网页格式,但不太适合编辑或那些期望旧式图片类型的应用。这里介绍如何在 macOS 上把它转换回 PNG。",
    date: "2026-09-06",
    readTime: "4分钟阅读",
    content: `
<p>AVIF 作为一种格式确实令人印象深刻——在同等视觉质量下,它的压缩效率远高于 JPEG 或 PNG,这正是越来越多网站开始用它来提供图片的原因。但同样的这种先进性,在你需要在浏览器之外对一个 AVIF 文件做点什么的那一刻,就成了问题:较旧的软件、部分图片编辑器,以及许多在说"一张图片"时依然默认指 JPEG 或 PNG 的工具,根本不知道该拿一个 AVIF 文件怎么办。</p>

<h2>为什么你最终需要转换回旧格式</h2>
<p>在一个现代网站上右键点击"存储图像",如今越来越多情况下保存下来的是一个 AVIF 文件,因为这就是这个网站现在实际提供的格式。如果你接着试图在一个较旧的设计工具中打开这个文件,把它添加到某个严格校验文件扩展名的地方,或者交给一位使用尚未支持 AVIF 的软件的同事,它就是打不开。转换成 PNG——一种从 2003 年至今几乎所有软件都能理解的格式——能立刻解决这个兼容性问题。</p>

<h2>在 macOS 上转换 AVIF 文件</h2>
<p>macOS 在最近的版本中加入了原生的 AVIF 查看支持,所以预览通常能打开并显示一个 AVIF 文件,并可以从那里一次导出一个为 PNG。对单张图片来说,这就够用了。但对于一整个文件夹——比如从一个把所有图片都以 AVIF 提供的网站下载的一批图片——基于队列的方式能省去重复的操作。</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">Mediasmith</a> 把 AVIF 转 PNG(或任何其他支持的格式)当作一项批量操作来处理。把 AVIF 文件拖到图片队列上,选择 PNG 作为输出,一次性转换整组文件。</p>

<a href="https://apps.apple.com/app/mediasmith/id6805031846" target="_blank" rel="noopener" style="display:block"><img src="/apps/mediasmith.png" alt="Converting AVIF images to PNG on Mac in batch" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>PNG 还是 JPG 作为目标格式</h3>
<p>如果图片需要保留透明度,或者你想要一个无损的中间格式以便后续编辑,选择 PNG。如果图片是没有透明度的照片,而你更想要一个更小的文件,那就选 JPG——AVIF 转 JPG 走的是同一条流水线,只是选择了不同的输出格式。</p>

<h3>为什么这个需求会越来越常见</h3>
<p>随着越来越多的网络出于性能原因采用 AVIF 和 WebP,"把现代格式转换回普遍兼容的格式"正在成为一种越来越常见的需求,而不是一种罕见的边缘情况,尤其是对任何从活跃网站上抓取参考图片或素材的人来说。</p>

<p><a href="https://apps.apple.com/app/mediasmith/id6805031846">前往 Mac App Store 获取 Mediasmith</a></p>
`,
  },
};
