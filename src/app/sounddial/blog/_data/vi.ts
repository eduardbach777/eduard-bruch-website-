import type { ArticleSet } from "./index";

export const viArticles: ArticleSet = {
  "mac-audio-podcasting-setup": {
    slug: "mac-audio-podcasting-setup",
    title: "Âm thanh Mac cho Podcasting: Kiểm soát những gì bạn nghe khi ghi âm",
    description: "Ghi âm podcast trong khi theo dõi mức âm lượng, nghe khách mời và quản lý thông báo — tất cả cùng tranh nhau một thanh trượt âm lượng. Đây là cách thiết lập tốt hơn.",
    date: "2026-03-05",
    readTime: "5 phút đọc",
    content: `
<p>Bạn đang ghi âm podcast trên Mac. Bạn cần nghe rõ khách mời (qua Zoom, Riverside hoặc SquadCast). Bạn cần theo dõi mức ghi âm của DAW. Bạn cần tắt tiếng Slack để không có tiếng ping nào lọt vào bản ghi. Và bạn cần tắt hoàn toàn âm thanh thông báo hệ thống — tiếng "ding" của macOS giữa buổi phỏng vấn là âm thanh không thể sử dụng được.</p>

<p>macOS cho bạn một thanh trượt âm lượng cho tất cả. Điều đó không đủ.</p>

<h2>Thách thức âm thanh podcasting trên Mac</h2>

<p>Trong phiên ghi âm podcast, bạn thường có:</p>
<ul>
  <li><strong>Ứng dụng liên lạc</strong> (Zoom, Riverside, SquadCast) — âm thanh khách mời, cần rõ ràng</li>
  <li><strong>DAW / ứng dụng ghi âm</strong> (Logic, GarageBand, Audacity, Hindenburg) — theo dõi mức âm lượng của chính bạn</li>
  <li><strong>Nguồn thông báo</strong> (Slack, Mail, Calendar, Messages) — phải hoàn toàn im lặng khi ghi âm</li>
  <li><strong>Trình duyệt</strong> — có thể có ghi chú chương trình, tab nghiên cứu hoặc bộ đếm thời gian đang chạy</li>
</ul>

<p>Tất cả ở cùng một mức âm lượng là hỗn loạn. Âm thanh khách mời cạnh tranh với tiếng chuông hệ thống. Một thông báo Slack có thể hỏng cả bản ghi. Và nếu bạn cần điều chỉnh âm lượng khách mời, việc thay đổi âm lượng hệ thống cũng thay đổi mức theo dõi của bạn.</p>

<h2>Cách giải quyết thông thường</h2>

<p>Hầu hết các podcaster sử dụng kết hợp:</p>
<ul>
  <li>Chế độ Tập trung (Không làm phiền) để chặn thông báo</li>
  <li>Thoát thủ công Slack, Mail và các ứng dụng có tiếng ồn khác trước khi ghi âm</li>
  <li>Điều chỉnh âm lượng nội bộ của ứng dụng liên lạc cho khách mời</li>
</ul>

<p>Cách này hoạt động, nhưng dễ mắc lỗi. Quên bật DND và một thông báo hỏng bản ghi. Quên thoát Slack và có cuộc gọi đến. Và bạn vẫn không thể kiểm soát độc lập âm lượng khách mời so với mức theo dõi.</p>

<h2>Âm thanh theo ứng dụng cho podcasting</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> cho phép bạn xây dựng môi trường ghi âm sạch bằng cách kiểm soát từng ứng dụng một cách độc lập:</p>

<img src="/apps/sounddial.png" alt="SoundDial podcasting setup — guest audio, monitoring, and notifications at independent levels" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Hồ sơ ghi âm</h3>
<ul>
  <li><strong>Zoom / Riverside:</strong> 80-100% — âm thanh khách mời rõ ràng</li>
  <li><strong>Logic / GarageBand:</strong> 60% — theo dõi thoải mái không mệt tai</li>
  <li><strong>Slack:</strong> tắt tiếng — không có tiếng thông báo nào</li>
  <li><strong>Mail:</strong> tắt tiếng</li>
  <li><strong>Messages:</strong> tắt tiếng</li>
  <li><strong>Calendar:</strong> tắt tiếng</li>
  <li><strong>Trình duyệt:</strong> tắt tiếng — không có tự động phát bất ngờ</li>
</ul>

<p>Lưu cấu hình này thành hồ sơ "Ghi âm". Trước khi nhấn ghi, áp dụng hồ sơ chỉ với một cú nhấp. Mọi nguồn thông báo đều bị tắt, khách mời ở âm lượng tối đa, và mức theo dõi ở mức thoải mái.</p>

<h3>Hồ sơ chỉnh sửa</h3>
<ul>
  <li><strong>Logic / Hindenburg:</strong> 100% — theo dõi đầy đủ để chỉnh sửa</li>
  <li><strong>Spotify:</strong> tắt tiếng — không nhầm lẫn tham chiếu</li>
  <li><strong>Slack:</strong> 20% — thông báo nhẹ nhàng trong giờ nghỉ</li>
  <li><strong>Trình duyệt:</strong> 40% — cho ghi chú và nghiên cứu chương trình</li>
</ul>

<p>Hai hồ sơ, hai cú nhấp, hai môi trường âm thanh hoàn toàn khác nhau. Không cần thoát và mở lại ứng dụng thủ công. Không lo quên bật lại thông báo sau khi ghi âm.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Tải SoundDial trên Mac App Store</a> — €14.99 mua một lần, không đăng ký, macOS 14.2+.</p>
`,
  },
  "mac-too-loud-full-volume-tame-it": {
    slug: "mac-too-loud-full-volume-tame-it",
    title: "Tại sao Mac quá to ở âm lượng tối đa? Cách kiểm soát chính xác hơn",
    description: "Loa MacBook Pro rất tuyệt — cho đến khi chúng quá to. Nếu ngay cả mức âm lượng vừa phải cũng cảm thấy quá to, đây là cách kiểm soát âm thanh chính xác hơn.",
    date: "2026-03-08",
    readTime: "4 phút đọc",
    content: `
<p>Các mẫu MacBook Pro mới (14" và 16") của Apple có loa cực kỳ mạnh cho một laptop. Mạnh đến mức các mức âm lượng vừa phải có thể thực sự to — đặc biệt trong phòng yên tĩnh, vào đêm khuya hoặc khi đeo tai nghe. Khoảng cách giữa "thoải mái" và "quá to" đôi khi chỉ là một hoặc hai bước âm lượng.</p>

<h2>Tại sao các bước âm lượng cảm thấy quá thô</h2>

<p>macOS có <strong>16 bước âm lượng</strong> qua bàn phím. Mỗi bước khoảng 6.25% tổng phạm vi. Trên loa mạnh hoặc tai nghe nhạy, một bước duy nhất có thể tạo ra sự thay đổi âm lượng đáng kể — từ "hoàn hảo" sang "quá to" chỉ với một lần nhấn phím.</p>

<h2>Cách sửa tích hợp: âm lượng bước một phần tư</h2>

<p>Giữ <strong>Option + Shift</strong> và nhấn phím tăng/giảm âm lượng. Mỗi lần nhấn điều chỉnh một phần tư bước bình thường, cho bạn <strong>64 mức</strong> thay vì 16. Điều khiển chính xác gấp 4 lần này giúp dễ dàng tìm đúng âm lượng, đặc biệt với loa mạnh hoặc tai nghe.</p>

<p>Đây là mẹo âm thanh Mac hữu ích nhất mà hầu hết mọi người không biết.</p>

<h2>Vấn đề sâu hơn: một thanh trượt cho tất cả</h2>

<p>Ngay cả với 64 mức, bạn vẫn chỉ có một thanh trượt kiểm soát mọi ứng dụng. Nếu bạn đặt âm lượng đủ thấp cho tiếng thông báo thoải mái, nhạc có thể quá nhỏ. Nếu bạn đặt cho nhạc, tiếng thông báo có thể khiến bạn giật mình.</p>

<p>Vấn đề thực sự là các nguồn âm thanh khác nhau cần mức âm lượng khác nhau. Thông báo nên nhẹ nhàng. Nhạc nên rõ ràng. Cuộc gọi nên trong trẻo. Video trình duyệt nên vừa phải. Một thanh trượt không thể phục vụ tốt tất cả.</p>

<h2>Âm lượng theo ứng dụng để kiểm soát chính xác</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> cung cấp cho mỗi ứng dụng thanh trượt âm lượng riêng với <strong>bước tăng 1%</strong> từ 0% đến 200%. Đó là 200 mức chính xác cho mỗi ứng dụng, so với 16 (hoặc 64 với phím tắt) bước toàn hệ thống của macOS.</p>

<img src="/apps/sounddial.png" alt="SoundDial fine-grained per-app volume control with 1% precision on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Đặt âm lượng hệ thống ở mức cơ sở vừa phải (50-60%), sau đó sử dụng SoundDial để tinh chỉnh từng ứng dụng:</p>
<ul>
  <li><strong>Spotify:</strong> 35% — mức nền thoải mái</li>
  <li><strong>Slack:</strong> 12% — tiếng ping thông báo nhẹ nhàng</li>
  <li><strong>Zoom:</strong> 85% — âm thanh cuộc gọi rõ ràng mà không quá choáng</li>
  <li><strong>Safari:</strong> 45% — phát lại video vừa phải</li>
</ul>

<p>Bằng cách này, không có nguồn âm thanh nào "quá to". Mỗi nguồn được tinh chỉnh ở mức lý tưởng độc lập.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Tải SoundDial trên Mac App Store</a> — €14.99 mua một lần, không đăng ký, macOS 14.2+.</p>
`,
  },
  "slack-huddle-volume-issues-mac": {
    slug: "slack-huddle-volume-issues-mac",
    title: "Vấn đề âm lượng Slack Huddle trên Mac: Quá nhỏ, quá to, hoặc tranh giành với nhạc",
    description: "Slack huddle cạnh tranh với nhạc và thông báo cho cùng một mức âm lượng. Đây là cách kiểm soát âm thanh huddle độc lập trên Mac.",
    date: "2026-03-10",
    readTime: "5 phút đọc",
    content: `
<p>Slack huddle rất tiện lợi — bạn nhấp một nút và bạn đang trong cuộc gọi thoại. Nhưng âm thanh thì lộn xộn. Huddle ở cùng mức âm lượng với Spotify. Tiếng thông báo Slack ping ở cùng mức với cuộc gọi.</p>

<p>Vấn đề không phải Slack. Đó là macOS. Mọi thứ chạy qua một thanh trượt âm lượng.</p>

<h2>Điều khiển âm thanh nội bộ của Slack</h2>

<p>Slack có các điều khiển âm thanh hạn chế:</p>
<ul>
  <li><strong>Tùy chọn thông báo:</strong> Slack → Settings → Notifications → Sound & appearance. Bạn có thể thay đổi âm thanh thông báo nhưng không thể đặt âm lượng thông báo độc lập với huddle.</li>
  <li><strong>Âm lượng Huddle:</strong> Trong huddle, không có thanh trượt riêng cho cuộc gọi so với các âm thanh khác của Slack.</li>
  <li><strong>Thiết bị đầu vào/đầu ra:</strong> Slack → Settings → Audio & Video cho phép chọn mic và loa, nhưng không có mức âm lượng cho từng tính năng.</li>
</ul>

<h2>Ba vấn đề âm thanh Slack</h2>

<h3>1. Huddle quá nhỏ so với nhạc</h3>
<p>Nhạc ở mức thoải mái. Bạn tham gia huddle. Giọng đồng nghiệp ở cùng mức với nhạc — không thể phân biệt lời rõ ràng. Tăng âm lượng hệ thống làm nhạc quá to.</p>

<h3>2. Tiếng thông báo trong huddle</h3>
<p>Mỗi tin nhắn Slack đến đều ping ở cùng mức với cuộc gọi. Tiếng ping liên tục làm huddle không thể sử dụng.</p>

<h3>3. Huddle quá to để nghe nền</h3>
<p>Đôi khi bạn tham gia huddle để nghe thụ động. Bạn muốn nó ở mức nền. macOS không cho phép đặt Slack ở 20% trong khi giữ trình duyệt ở 60%.</p>

<h2>Giải pháp: kiểm soát âm lượng Slack độc lập</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> cung cấp cho Slack thanh trượt âm lượng riêng, tách biệt với mọi ứng dụng khác.</p>

<img src="/apps/sounddial.png" alt="SoundDial controlling Slack volume independently during a huddle while music plays at a different level" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Thiết lập tối ưu cho huddle</h3>
<ul>
  <li><strong>Slack:</strong> 90-100% (âm thanh huddle rõ ràng)</li>
  <li><strong>Spotify:</strong> 15% (nền nhẹ nhàng)</li>
  <li><strong>Trình duyệt:</strong> tắt tiếng</li>
</ul>

<h3>Thiết lập huddle thụ động</h3>
<ul>
  <li><strong>Slack:</strong> 30% (mức nghe nền)</li>
  <li><strong>Spotify:</strong> 40% (âm thanh chính là nhạc)</li>
  <li><strong>Trình duyệt:</strong> 50% (mức làm việc bình thường)</li>
</ul>

<p>Lưu mỗi cấu hình thành hồ sơ. Hoặc sử dụng <strong>tự động giảm âm</strong> — khi huddle kích hoạt micro, SoundDial tự động giảm mọi thứ trừ Slack.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Tải SoundDial trên Mac App Store</a> — €14.99 mua một lần, không đăng ký, macOS 14.2+.</p>
`,
  },
  "set-default-volume-new-apps-mac": {
    slug: "set-default-volume-new-apps-mac",
    title: "Cách đặt âm lượng mặc định cho ứng dụng mới trên Mac",
    description: "Ứng dụng mới khởi chạy ở âm lượng tối đa theo mặc định. Đây là cách làm cho mọi ứng dụng mới bắt đầu ở mức thoải mái.",
    date: "2026-03-12",
    readTime: "3 phút đọc",
    content: `
<p>Bạn cài đặt một ứng dụng mới. Nó khởi chạy lần đầu. Nó ngay lập tức phát âm thanh — ở âm lượng hệ thống tối đa. Tai nghe đang đeo. Tai bạn ù.</p>

<p>macOS không có khái niệm "âm lượng mặc định cho ứng dụng mới" vì macOS không có âm lượng theo ứng dụng.</p>

<h2>Tại sao đây là vấn đề</h2>

<p>Khi bạn khởi chạy ứng dụng lần đầu, bạn không biết nó sẽ to đến mức nào. Điều này đặc biệt giật mình với:</p>
<ul>
  <li>Ứng dụng liên lạc (Slack, Teams) phát âm thanh khởi động</li>
  <li>Ứng dụng có video hướng dẫn khi khởi chạy lần đầu</li>
  <li>Game phát nhạc màn hình tiêu đề ngay lập tức</li>
  <li>Ứng dụng dựa trên trình duyệt tự động phát nội dung</li>
</ul>

<h2>Giải pháp: âm lượng mặc định cho ứng dụng mới</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> có <strong>âm lượng mặc định có thể cấu hình</strong> cho ứng dụng mới. Trong cài đặt, bạn đặt mức âm lượng cho ứng dụng mới — ví dụ 70%. Lần đầu bất kỳ ứng dụng nào tạo ra âm thanh, SoundDial đặt nó ở 70% thay vì 100%.</p>

<img src="/apps/sounddial.png" alt="SoundDial default volume setting — new apps start at a configured level instead of full blast" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Điều này có nghĩa:</p>
<ul>
  <li>Không có âm thanh bất ngờ ở âm lượng tối đa từ ứng dụng mới</li>
  <li>Mỗi ứng dụng mới bắt đầu ở mức thoải mái, có thể dự đoán</li>
  <li>Bạn có thể điều chỉnh lên hoặc xuống từ mức mặc định</li>
  <li>Tính năng <strong>ghi nhớ âm lượng</strong> sẽ nhớ mức đó cho các lần khởi chạy sau</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Tải SoundDial trên Mac App Store</a> — €14.99 mua một lần, không đăng ký, macOS 14.2+.</p>
`,
  },
  "mac-startup-sound-too-loud": {
    slug: "mac-startup-sound-too-loud",
    title: "Tiếng khởi động Mac quá to? Cách tắt hoặc giảm",
    description: "Tiếng chuông khởi động Mac phát ở âm lượng tối đa mỗi khi bạn khởi động lại — đặc biệt ngại trong cuộc họp. Đây là cách kiểm soát nó.",
    date: "2026-03-15",
    readTime: "4 phút đọc",
    content: `
<p>Bạn khởi động lại Mac trong văn phòng yên tĩnh. Rồi — <em>BONG</em> — tiếng chuông khởi động vang lên ở âm lượng tối đa. Mọi người nhìn bạn.</p>

<h2>Cách tắt tiếng khởi động</h2>

<ol>
  <li>Vào <strong>Cài đặt Hệ thống → Âm thanh</strong></li>
  <li>Tìm <strong>"Phát âm thanh khi khởi động"</strong></li>
  <li>Bỏ chọn</li>
</ol>

<p>Xong. Mac sẽ khởi động im lặng. Cài đặt này đã có từ macOS Big Sur.</p>

<h3>Phương pháp Terminal</h3>
<p><code>sudo nvram StartupMute=%01</code></p>
<p>Để bật lại: <code>sudo nvram StartupMute=%00</code></p>

<h2>Có thể giảm thay vì tắt không?</h2>

<p>Không trực tiếp. Tiếng chuông phát ở mức được xác định bởi âm lượng hệ thống khi tắt máy. <strong>Cách giải quyết:</strong> Trước khi khởi động lại Mac, giảm âm lượng hệ thống xuống 10-20%.</p>

<h2>Vấn đề kiểm soát âm thanh Mac rộng hơn</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> cung cấp cho mọi ứng dụng trên Mac thanh trượt âm lượng riêng. Đặt ứng dụng thông báo thấp, nhạc ở mức thoải mái, cuộc gọi ở âm lượng tối đa — tất cả độc lập.</p>

<img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for managing all Mac audio sources independently" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Tải SoundDial trên Mac App Store</a> — €14.99 mua một lần, không đăng ký, macOS 14.2+.</p>
`,
  },
  "webex-volume-too-low-mac": {
    slug: "webex-volume-too-low-mac",
    title: "Âm lượng Cisco Webex quá nhỏ trên Mac? Cách khắc phục",
    description: "Cuộc gọi Webex hầu như không nghe được trên Mac. Đây là mọi cách sửa — từ cài đặt âm thanh đến tăng âm lượng vượt 100%.",
    date: "2026-03-18",
    readTime: "5 phút đọc",
    content: `
<p>Webex là một trong những công cụ hội nghị video được sử dụng nhiều nhất trong doanh nghiệp — và cũng bị phàn nàn nhiều nhất về chất lượng âm thanh trên Mac.</p>

<h2>1. Kiểm tra cài đặt âm thanh Webex</h2>
<ul>
  <li>Đảm bảo thiết bị <strong>Loa</strong> đúng được chọn</li>
  <li>Kéo thanh trượt âm lượng loa đến mức tối đa</li>
  <li>Nhấp "Test" để xác nhận đầu ra</li>
  <li>Kiểm tra "Music Mode" — tắt nó trừ khi trình bày nhạc</li>
  <li>Kiểm tra loại bỏ tiếng ồn — chế độ mạnh có thể giảm âm lượng giọng nói</li>
</ul>

<h2>2. Kiểm tra đầu ra macOS</h2>
<p>Cài đặt Hệ thống → Âm thanh → Đầu ra. Xác nhận thiết bị đúng được chọn.</p>

<h2>3. Vấn đề codec Bluetooth</h2>
<p>Webex kích hoạt micro buộc chuyển đổi codec AAC→SCO. Sử dụng micro riêng và giữ tai nghe Bluetooth chỉ làm đầu ra.</p>

<h2>4. Xử lý âm thanh Webex</h2>
<ul>
  <li>Đặt loại bỏ tiếng ồn thành "Low"</li>
  <li>Tắt "Optimize for my voice"</li>
  <li>Thử chuyển sang thiết bị cụ thể</li>
</ul>

<h2>5. Vấn đề IT/quản trị</h2>
<p>Trong doanh nghiệp, Webex thường được IT quản lý với chính sách âm thanh cụ thể.</p>

<h2>6. Tăng Webex vượt 100%</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> cho phép tăng Webex lên <strong>200%</strong>.</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting Cisco Webex call volume beyond 100% on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Tải SoundDial trên Mac App Store</a> — €14.99 mua một lần, không đăng ký, macOS 14.2+.</p>
`,
  },
  "mac-two-audio-sources-same-time": {
    slug: "mac-two-audio-sources-same-time",
    title: "Cách nghe hai thứ cùng lúc trên Mac mà không phát điên",
    description: "Nhạc và podcast. Bài giảng và video ghi chú. Cuộc gọi và nhạc nền. macOS buộc bạn chọn một mức âm lượng cho cả hai — đây là cách cân bằng.",
    date: "2026-03-20",
    readTime: "4 phút đọc",
    content: `
<p>Bạn muốn nghe hai nguồn âm thanh cùng lúc. Nhạc khi gọi điện. Podcast khi xem hướng dẫn. macOS cho bạn một thanh trượt cho cả hai.</p>

<h2>Khi bạn thực sự cần hai nguồn âm thanh</h2>
<ul>
  <li><strong>Nhạc + cuộc gọi video</strong> — phổ biến nhất</li>
  <li><strong>Bài giảng + tài liệu tham khảo</strong></li>
  <li><strong>Podcast + âm thanh môi trường</strong></li>
  <li><strong>Hai tab trình duyệt</strong></li>
  <li><strong>Game + trò chuyện thoại</strong></li>
</ul>

<h2>Giải pháp: âm lượng theo ứng dụng trong một bảng</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> đặt mọi ứng dụng trong một bảng thanh menu với thanh trượt độc lập.</p>

<img src="/apps/sounddial.png" alt="SoundDial showing two audio sources at different volume levels on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><strong>Nhạc + Zoom:</strong> Zoom: 100% | Spotify: 20%</p>
<p><strong>Podcast + tiếng mưa:</strong> Podcast: 70% | Mưa: 15%</p>
<p><strong>Bài giảng + YouTube:</strong> Zoom: 90% | Chrome: 40%</p>

<p>Lưu các cấu hình thường dùng thành <strong>hồ sơ âm lượng</strong> và chuyển đổi bằng một cú nhấp. Tự động giảm âm xử lý kịch bản nhạc+cuộc gọi tự động.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Tải SoundDial trên Mac App Store</a> — €14.99 mua một lần, không đăng ký, macOS 14.2+.</p>
`,
  },
  "watch-movies-mac-late-night-volume": {
    slug: "watch-movies-mac-late-night-volume",
    title: "Cách xem phim trên Mac mà không đánh thức mọi người",
    description: "Hội thoại không nghe được, rồi tiếng nổ rung cả tường. Đây là cách kiểm soát âm thanh phim để xem khuya trên Mac.",
    date: "2026-03-22",
    readTime: "5 phút đọc",
    content: `
<p>1 giờ sáng. Bạn đang xem phim trên MacBook. Các nhân vật thì thầm — bạn tăng âm lượng. Cảnh rượt đuổi bắt đầu và cả căn hộ nghe thấy. Vấn đề là <strong>dải động</strong>.</p>

<h2>Cách 1: Sử dụng chế độ ban đêm của dịch vụ streaming</h2>
<ul>
  <li><strong>Netflix:</strong> Tìm "Reduce Loud Sounds"</li>
  <li><strong>Apple TV+:</strong> Cài đặt Hệ thống → Trợ năng → "Reduce Loud Sounds"</li>
  <li><strong>Amazon Prime:</strong> "Dialog Boost"</li>
  <li><strong>Disney+:</strong> Chưa có tính năng tương đương</li>
</ul>

<h2>Cách 2: Sử dụng tai nghe</h2>
<p>Tai nghe giải quyết phần "đánh thức mọi người".</p>

<h2>Cách 3: Đặt ứng dụng streaming ở mức âm lượng cụ thể</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> cho phép tạo thiết lập xem khuya hoàn hảo:</p>

<img src="/apps/sounddial.png" alt="SoundDial late-night movie setup — streaming app at moderate volume, notifications muted" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Hồ sơ phim xem khuya</h3>
<ul>
  <li><strong>Netflix / Apple TV / trình duyệt:</strong> 40-50%</li>
  <li><strong>Slack:</strong> tắt tiếng</li>
  <li><strong>Mail:</strong> tắt tiếng</li>
  <li><strong>iMessage:</strong> tắt tiếng</li>
  <li><strong>Âm thanh hệ thống:</strong> tắt tiếng</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Tải SoundDial trên Mac App Store</a> — €14.99 mua một lần, không đăng ký, macOS 14.2+.</p>
`,
  },
  "mac-volume-resets-after-sleep": {
    slug: "mac-volume-resets-after-sleep",
    title: "Âm lượng Mac bị đặt lại sau khi ngủ? Cách giữ cài đặt âm thanh",
    description: "Mỗi khi Mac thức dậy từ chế độ ngủ, âm lượng bị sai. Đây là lý do và cách khắc phục.",
    date: "2026-03-25",
    readTime: "5 phút đọc",
    content: `
<p>Bạn gập nắp MacBook. Mở lại. Âm lượng khác đi. Đây là lỗi macOS dai dẳng.</p>

<h2>Tại sao điều này xảy ra</h2>

<h3>1. Thiết bị đầu ra thay đổi khi ngủ</h3>
<p>Tai nghe Bluetooth ngắt kết nối khi Mac đang ngủ, macOS chuyển sang loa tích hợp với mức âm lượng khác.</p>

<h3>2. Core Audio daemon khởi động lại</h3>
<p>coreaudiod đôi khi khởi động lại trong chu kỳ ngủ/thức với mức mặc định.</p>

<h3>3. HDMI/DisplayPort kết nối lại</h3>
<p>Màn hình ngoài ngắt kết nối có thể thay đổi thiết bị và âm lượng.</p>

<h3>4. Bluetooth kết nối lại</h3>
<p>Đàm phán âm lượng có thể dẫn đến mức khác.</p>

<h2>Bảo vệ cân bằng âm thanh với SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> bảo vệ cân bằng <em>theo ứng dụng</em>. Tính năng <strong>ghi nhớ âm lượng</strong> lưu và khôi phục âm lượng mỗi ứng dụng.</p>

<img src="/apps/sounddial.png" alt="SoundDial preserving per-app volume levels after Mac sleep and wake cycles" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Ngay cả khi macOS đặt lại âm lượng hệ thống, cân bằng theo ứng dụng vẫn nguyên vẹn. Với <strong>hồ sơ âm lượng</strong>, khôi phục hoàn toàn chỉ cần một cú nhấp.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Tải SoundDial trên Mac App Store</a> — €14.99 mua một lần, không đăng ký, macOS 14.2+.</p>
`,
  },
  "mac-audio-music-production-daw": {
    slug: "mac-audio-music-production-daw",
    title: "Âm thanh Mac cho sản xuất nhạc: Kiểm soát DAW và liên lạc riêng biệt",
    description: "Sử dụng Logic Pro hoặc Ableton trong khi gọi Discord? Đây là cách nghe DAW ở chất lượng đầy đủ trong khi giữ trò chuyện thoại ở mức thoải mái.",
    date: "2026-03-28",
    readTime: "5 phút đọc",
    content: `
<p>Bạn đang sản xuất nhạc trong Logic Pro và trên Discord với người cộng tác. Đầu ra DAW và Discord tranh giành cùng mức âm lượng. Sản xuất nhạc yêu cầu <strong>mức theo dõi chính xác</strong>.</p>

<h2>Âm lượng theo ứng dụng cho sản xuất</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> cho phép đặt âm lượng chính xác cho mọi ứng dụng:</p>

<img src="/apps/sounddial.png" alt="SoundDial separating DAW output from Discord and reference tracks on macOS for music production" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Thiết lập sản xuất</h3>
<ul>
  <li><strong>Logic Pro / Ableton:</strong> 80-100%</li>
  <li><strong>Discord:</strong> 40-60%</li>
  <li><strong>Spotify / tham chiếu:</strong> 80%</li>
  <li><strong>Slack / thông báo:</strong> tắt tiếng</li>
  <li><strong>Safari / Chrome:</strong> 50%</li>
</ul>

<p>SoundDial sử dụng Core Audio Tap API — độ trễ không đáng kể cho mục đích theo dõi.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Tải SoundDial trên Mac App Store</a> — €14.99 mua một lần, không đăng ký, macOS 14.2+.</p>
`,
  },
  "apple-music-volume-too-low-mac": {
    slug: "apple-music-volume-too-low-mac",
    title: "Âm lượng Apple Music quá nhỏ trên Mac? Cách khắc phục và tăng cường",
    description: "Apple Music ở âm lượng tối đa trên Mac nhưng vẫn quá nhỏ? Kiểm tra Sound Check, EQ, và cách tăng vượt 100%.",
    date: "2026-03-30",
    readTime: "5 phút đọc",
    content: `
<p>Apple Music ở âm lượng tối đa. Mac ở tối đa. Vẫn nhỏ. Chuyển sang Spotify — cùng bài hát — to hơn rõ ràng.</p>

<h2>1. Kiểm tra Sound Check</h2>
<p>Sound Check chuẩn hóa âm lượng bằng cách <em>giảm</em> track to. Music → Settings → Playback → Sound Check. Thử tắt nó.</p>

<h2>2. Kiểm tra EQ</h2>
<p>Music → Settings → Playback → EQ. Một số preset giảm âm lượng tổng thể. Đặt "Off" để kiểm tra.</p>

<h2>3. Kiểm tra Lossless Audio</h2>
<p>Luồng lossless có thể ở mức thấp hơn AAC cho một số track.</p>

<h2>4. Headphone Safety</h2>
<p>Cài đặt Hệ thống → Âm thanh → Headphone Safety. Kiểm tra "Reduce Loud Audio".</p>

<h2>5. Tăng Apple Music vượt 100%</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> cho phép tăng Apple Music lên <strong>200%</strong>. Chỉ Apple Music to hơn — các ứng dụng khác giữ nguyên.</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting Apple Music volume beyond 100% on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Tải SoundDial trên Mac App Store</a> — €14.99 mua một lần, không đăng ký, macOS 14.2+.</p>
`,
  },
  "free-volume-mixer-mac": {
    slug: "free-volume-mixer-mac",
    title: "Bộ trộn âm lượng miễn phí cho Mac: Bạn thực sự nhận được gì (và không nhận được gì)",
    description: "Đang tìm bộ trộn âm lượng miễn phí theo ứng dụng cho Mac? Đây là phân tích trung thực.",
    date: "2026-04-03",
    readTime: "6 phút đọc",
    content: `
<p>Nếu bạn tìm "free volume mixer for Mac," kết quả chính là <strong>Background Music</strong>. Đó là ứng dụng miễn phí, mã nguồn mở duy nhất.</p>

<h2>Background Music: lựa chọn miễn phí</h2>
<ul>
  <li><strong>Thanh trượt âm lượng theo ứng dụng</strong></li>
  <li><strong>Tự động tạm dừng nhạc</strong></li>
  <li><strong>Thiết bị đầu ra mặc định</strong></li>
</ul>

<h3>Background Music không có</h3>
<ul>
  <li>Không tăng vượt 100%</li>
  <li>Không có hồ sơ</li>
  <li>Không có tự động giảm âm</li>
  <li>Không ghi nhớ âm lượng</li>
  <li>Không có phím tắt</li>
  <li>Không chuyển đổi thiết bị</li>
</ul>

<h3>Vấn đề độ tin cậy</h3>
<p>Hoạt động bằng <strong>driver thiết bị âm thanh ảo</strong>, hỏng với mỗi cập nhật macOS.</p>

<h2>Khi nào đáng trả tiền</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> có giá €14.99 — một lần. Rẻ hơn một nửa SoundSource ($39), bao gồm hồ sơ và tự động giảm âm.</p>

<img src="/apps/sounddial.png" alt="SoundDial — reliable per-app volume mixer for Mac with profiles, auto-ducking, and 200% boost" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Có trên <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — được Apple kiểm duyệt, sandbox. €14.99, không đăng ký, macOS 14.2+.</p>
`,
  },
  "balance-music-voice-chat-volume-mac": {
    slug: "balance-music-voice-chat-volume-mac",
    title: "Cách cân bằng âm lượng nhạc và trò chuyện thoại trên Mac",
    description: "Nhạc quá to trên Discord. Hoặc cuộc gọi quá nhỏ dưới Spotify. Đây là cách đặt tỷ lệ hoàn hảo.",
    date: "2026-04-05",
    readTime: "4 phút đọc",
    content: `
<p>Bạn muốn nghe nhạc khi nói chuyện trên Discord. macOS buộc bạn chọn một mức cho cả hai.</p>

<h2>Giải pháp: âm lượng theo ứng dụng độc lập</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> đặt cả Spotify và Discord trong cùng bảng với thanh trượt độc lập.</p>

<img src="/apps/sounddial.png" alt="SoundDial balancing Spotify and Discord at different volume levels on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Tỷ lệ vàng</h3>
<ul>
  <li><strong>Trò chuyện thoại ở 85-100%</strong></li>
  <li><strong>Nhạc ở 20-35%</strong></li>
</ul>

<p>Lưu thành hồ sơ và chuyển đổi bằng một cú nhấp. Tự động giảm âm xử lý tự động khi cuộc gọi đến.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Tải SoundDial trên Mac App Store</a> — €14.99 mua một lần, không đăng ký, macOS 14.2+.</p>
`,
  },
  "mac-volume-control-complete-guide": {
    slug: "mac-volume-control-complete-guide",
    title: "Kiểm soát âm lượng Mac: Hướng dẫn đầy đủ (2026)",
    description: "Mọi thứ bạn cần biết về kiểm soát âm thanh trên macOS — từ phím tắt cơ bản đến âm lượng theo ứng dụng, chuyển đổi đầu ra và tự động hóa.",
    date: "2026-06-12",
    readTime: "12 phút đọc",
    content: `
<p>macOS cho bạn thanh trượt âm lượng và nút tắt tiếng. Nhưng Mac thực sự có nhiều khả năng âm thanh hơn. Đây là hướng dẫn đầy đủ.</p>

<h2>Phần 1: Điều khiển âm lượng tích hợp</h2>

<h3>Phím âm lượng</h3>
<p>16 bước, mỗi bước khoảng 6.25%.</p>

<h3>Âm lượng chính xác: Option + Shift</h3>
<p>Giữ <strong>Option + Shift</strong> + phím âm lượng = <strong>64 mức</strong>.</p>

<h3>Điều chỉnh im lặng: Shift</h3>
<p>Giữ <strong>Shift</strong> + phím âm lượng = không có tiếng "pop".</p>

<h2>Phần 2: Quản lý thiết bị đầu ra</h2>
<p>Giữ <strong>Option</strong> và nhấp biểu tượng Âm thanh = danh sách thiết bị, chuyển đổi nhanh.</p>

<h2>Phần 3: Âm lượng cảnh báo và thông báo</h2>
<p>Cài đặt Hệ thống → Âm thanh → Âm lượng cảnh báo. Chỉ ảnh hưởng âm thanh hệ thống, không ảnh hưởng ứng dụng bên thứ ba.</p>

<h2>Phần 4: Điều khiển tai nghe</h2>
<p>Headphone Safety, Spatial Audio, cân bằng âm thanh.</p>

<h2>Phần 5: Những gì macOS không làm được</h2>
<ul>
  <li>Âm lượng theo ứng dụng</li>
  <li>Tăng vượt 100%</li>
  <li>Hồ sơ âm lượng</li>
  <li>Tự động giảm âm</li>
  <li>Ghi nhớ âm lượng theo ứng dụng</li>
</ul>

<h2>Phần 6: Âm lượng theo ứng dụng với SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> lấp mọi khoảng trống trên:</p>

<img src="/apps/sounddial.png" alt="SoundDial — per-app volume control, profiles, auto-ducking, and 200% boost for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<ul>
  <li><strong>Âm lượng theo ứng dụng:</strong> 0% đến 200%</li>
  <li><strong>Tắt tiếng theo ứng dụng</strong></li>
  <li><strong>Tăng âm lượng</strong> vượt 100%</li>
  <li><strong>Hồ sơ âm lượng</strong></li>
  <li><strong>Tự động giảm âm</strong></li>
  <li><strong>Ghi nhớ âm lượng</strong></li>
  <li><strong>Chuyển đổi thiết bị đầu ra</strong></li>
  <li><strong>Phím tắt:</strong> ⌃⌥S để bật/tắt bộ trộn, ⌃⌥M để tắt tiếng tất cả</li>
</ul>

<p>Sử dụng Core Audio Tap API — không driver hệ thống. <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 mua một lần, macOS 14.2+.</p>
`,
  },
  "vlc-volume-too-low-mac": {
    slug: "vlc-volume-too-low-mac",
    title: "Âm lượng VLC quá nhỏ trên Mac? Cách tăng vượt 200%",
    description: "VLC ở âm lượng tối đa nhưng video vẫn quá nhỏ? VLC có tăng 200% tích hợp — và bạn có thể cộng thêm với bộ trộn theo ứng dụng.",
    date: "2026-04-08",
    readTime: "4 phút đọc",
    content: `
<p>VLC có thể vượt 100% tích hợp. Sử dụng cuộn chuột trên thanh trượt, hoặc <strong>Command + Mũi tên lên</strong>, hoặc VLC → Audio → Increase Volume.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> cộng thêm 0-200% ở cấp hệ thống. VLC 200% × SoundDial 200% = khuếch đại hiệu quả 400%.</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting VLC volume at the system level on macOS for quiet video files" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial tăng VLC <strong>độc lập</strong>. Các ứng dụng khác giữ nguyên mức.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Tải SoundDial trên Mac App Store</a> — €14.99 mua một lần, không đăng ký, macOS 14.2+.</p>
`,
  },
  "disable-audio-ducking-mac": {
    slug: "disable-audio-ducking-mac",
    title: "Cách tắt Audio Ducking trên Mac (hoặc kiểm soát nó)",
    description: "macOS hoặc ứng dụng liên tục giảm nhạc trong cuộc gọi. Đây là cách dừng hoặc thay thế bằng ducking bạn kiểm soát.",
    date: "2026-04-10",
    readTime: "5 phút đọc",
    content: `
<p>Bạn tham gia Zoom. Nhạc giảm gần như không. Đây là <strong>audio ducking</strong>: tự động giảm âm thanh nền khi cuộc gọi hoạt động.</p>

<h2>Nguồn gốc audio ducking trên Mac</h2>
<p>macOS <strong>không</strong> có tính năng ducking tích hợp. Nguyên nhân có thể:</p>
<ul>
  <li>Xử lý âm thanh Zoom</li>
  <li>Chuyển đổi codec Bluetooth</li>
  <li>Ứng dụng bên thứ ba</li>
  <li>Ứng dụng liên lạc điều chỉnh âm thanh</li>
</ul>

<h2>Thay thế ducking xấu bằng ducking tốt</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> có tính năng tự động giảm âm mà bạn kiểm soát:</p>
<ul>
  <li><strong>Mức duck có thể cấu hình:</strong> 10% đến 80%</li>
  <li><strong>Phát hiện thông minh:</strong> qua trạng thái micro</li>
  <li><strong>Khôi phục hoàn hảo:</strong> khi cuộc gọi kết thúc</li>
  <li><strong>Bật/tắt dễ dàng</strong></li>
</ul>

<img src="/apps/sounddial.png" alt="SoundDial configurable auto-ducking — control exactly how much background audio is lowered during calls" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Tải SoundDial trên Mac App Store</a> — €14.99 mua một lần, không đăng ký, macOS 14.2+.</p>
`,
  },
  "bluetooth-headphones-too-quiet-mac": {
    slug: "bluetooth-headphones-too-quiet-mac",
    title: "Tai nghe Bluetooth quá nhỏ trên Mac? Mọi cách khắc phục",
    description: "Tai nghe Bluetooth hoạt động tốt trên điện thoại nhưng nhỏ trên Mac. Đây là mọi nguyên nhân và cách sửa.",
    date: "2026-04-12",
    readTime: "6 phút đọc",
    content: `
<p>Tai nghe Bluetooth đủ to trên điện thoại. Kết nối Mac — mọi thứ nhỏ hơn.</p>

<h2>1. Headphone Safety giới hạn âm lượng</h2>
<p>Cài đặt Hệ thống → Âm thanh → Headphone Safety. Tắt "Reduce Loud Audio".</p>

<h2>2. Codec Bluetooth không khớp</h2>
<p>macOS chỉ hỗ trợ AAC và SBC. Điện thoại có thể dùng aptX hoặc LDAC.</p>

<h2>3. Micro kích hoạt SCO</h2>
<p>Sử dụng micro riêng để giữ tai nghe ở chế độ AAC.</p>

<h2>4. Đồng bộ âm lượng Bluetooth</h2>
<p>Ngắt kết nối, đợi 5 giây, kết nối lại.</p>

<h2>5. Kết nối Bluetooth kém</h2>
<p>Di chuyển gần Mac. Tránh nhiễu USB 3.0.</p>

<h2>6. Vẫn nhỏ? Tăng vượt 100%</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> tăng bất kỳ ứng dụng nào lên <strong>200%</strong>.</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting app volume for Bluetooth headphones on Mac with per-app sliders to 200%" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Tải SoundDial trên Mac App Store</a> — €14.99 mua một lần, không đăng ký, macOS 14.2+.</p>
`,
  },
  "mac-audio-obs-streaming-setup": {
    slug: "mac-audio-obs-streaming-setup",
    title: "Âm thanh Mac cho OBS và Streaming: Kiểm soát những gì khán giả nghe",
    description: "Streaming trên Mac với OBS? Khán giả nghe mọi thứ ở cùng mức — game, nhạc, alerts, Discord. Đây là cách cân bằng.",
    date: "2026-04-15",
    readTime: "7 phút đọc",
    content: `
<p>Bạn streaming trên Mac với OBS. Game, Discord, Spotify, alerts — tất cả ở cùng mức âm lượng cho khán giả.</p>

<h2>Cách đơn giản: kiểm soát mức trước khi OBS thu</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> đặt mỗi ứng dụng ở mức bạn muốn khán giả nghe:</p>

<img src="/apps/sounddial.png" alt="SoundDial balancing game, Discord, and music audio levels for OBS streaming on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Thiết lập streaming</h3>
<ul>
  <li><strong>Game:</strong> 50%</li>
  <li><strong>Discord:</strong> 80%</li>
  <li><strong>Spotify:</strong> 15%</li>
  <li><strong>Alerts (trình duyệt):</strong> 40%</li>
  <li><strong>Slack:</strong> tắt tiếng</li>
</ul>

<p>Lưu thành hồ sơ "Streaming". Không cần thiết bị âm thanh ảo. Sử dụng Audio Tap API gốc của Apple.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 mua một lần, macOS 14.2+.</p>
`,
  },
  "make-mac-remember-volume-per-app": {
    slug: "make-mac-remember-volume-per-app",
    title: "Cách làm Mac nhớ âm lượng theo ứng dụng",
    description: "Mỗi khi khởi động lại Spotify hoặc mở lại Zoom, phải điều chỉnh lại. Đây là cách macOS nhớ âm lượng mỗi ứng dụng tự động.",
    date: "2026-04-18",
    readTime: "4 phút đọc",
    content: `
<p>Bạn dành năm phút để có mức âm lượng hoàn hảo. Rồi khởi động lại Mac. Mọi thứ đặt lại.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> có <strong>Ghi nhớ Âm lượng</strong>. Khi bật, nó lưu âm lượng mỗi ứng dụng theo bundle ID. Khi ứng dụng khởi chạy lại, SoundDial khôi phục âm lượng đã lưu.</p>

<img src="/apps/sounddial.png" alt="SoundDial volume memory — automatically remembers and restores per-app volume levels on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Ghi nhớ: mức âm lượng chính xác (0-200%), trạng thái tắt tiếng, và mỗi ứng dụng độc lập. Ứng dụng mới nhận âm lượng mặc định có thể cấu hình.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 mua một lần, macOS 14.2+.</p>
`,
  },
  "podcast-volume-too-low-mac": {
    slug: "podcast-volume-too-low-mac",
    title: "Âm lượng Podcast quá nhỏ trên Mac? Cách làm to hơn",
    description: "Một số podcast nhỏ như thì thầm trên Mac ở âm lượng tối đa. Đây là lý do — và cách tăng vượt 100%.",
    date: "2026-04-20",
    readTime: "5 phút đọc",
    content: `
<p>Host nghe tốt, nhưng khách mời ghi từ micro laptop trong bếp — hầu như không nghe được. Vấn đề ở bản ghi, không phải Mac.</p>

<h2>Giải pháp: tăng ứng dụng podcast vượt 100%</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> cho mỗi ứng dụng thanh trượt lên <strong>200%</strong>.</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting Apple Podcasts volume to 180% on Mac for quiet podcast episodes" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Đặt Apple Podcasts ở 160-180% trong khi Spotify ở 40% và Slack ở 15%. Chỉ podcast to hơn.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 mua một lần, macOS 14.2+.</p>
`,
  },
  "mac-audio-online-classes-lectures": {
    slug: "mac-audio-online-classes-lectures",
    title: "Thiết lập âm thanh Mac cho lớp học trực tuyến",
    description: "Xem bài giảng trong khi ghi chú, Google tài liệu tham khảo, và chat bạn học — tất cả ở mức âm lượng khác nhau.",
    date: "2026-04-22",
    readTime: "5 phút đọc",
    content: `
<p>Bạn là sinh viên tham gia bài giảng trực tuyến trên Zoom. YouTube tutorial ở tab khác. Discord với bạn học. Spotify phát lo-fi. macOS coi tất cả là một mức âm lượng.</p>

<h2>Thiết lập âm thanh theo ứng dụng cho học tập</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> cho mỗi ứng dụng thanh trượt riêng:</p>

<img src="/apps/sounddial.png" alt="SoundDial student setup — lecture at full volume, study music low, notifications muted" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Hồ sơ bài giảng</h3>
<ul>
  <li><strong>Zoom / Teams:</strong> 100%</li>
  <li><strong>Spotify:</strong> 15%</li>
  <li><strong>Discord:</strong> 10%</li>
  <li><strong>Trình duyệt:</strong> 40%</li>
  <li><strong>iMessage:</strong> tắt tiếng</li>
</ul>

<h3>Hồ sơ tự học</h3>
<ul>
  <li><strong>Spotify:</strong> 50%</li>
  <li><strong>Trình duyệt:</strong> 70%</li>
  <li><strong>Discord:</strong> 20%</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 mua một lần, macOS 14.2+.</p>
`,
  },
  "mac-sound-not-working-after-update": {
    slug: "mac-sound-not-working-after-update",
    title: "Âm thanh Mac không hoạt động sau cập nhật? Hướng dẫn sửa hoàn chỉnh",
    description: "Cập nhật macOS và âm thanh biến mất, rè, hoặc kẹt ở mức sai. Đây là mọi cách khắc phục.",
    date: "2026-04-25",
    readTime: "7 phút đọc",
    content: `
<p>Cập nhật macOS. Không có âm thanh. Hoặc rè. Hoặc âm lượng kẹt. Đây là hướng dẫn có hệ thống.</p>

<h2>Bước 1: Kiểm tra cơ bản</h2>
<p>Nhấn phím tăng âm lượng. Kiểm tra thiết bị đầu ra. Kiểm tra Headphone Safety.</p>

<h2>Bước 2: Khởi động lại Core Audio</h2>
<p><code>sudo killall coreaudiod</code></p>

<h2>Bước 3: Đặt lại NVRAM/PRAM</h2>
<p>Intel: Option+Command+P+R trong 20 giây. Apple Silicon: khởi động lại đầy đủ.</p>

<h2>Bước 4: Kiểm tra xung đột driver</h2>
<p>Soundflower, BlackHole, Loopback, Background Music — có thể gây xung đột.</p>

<h2>Bước 5: Khởi động Safe Mode</h2>

<h2>Bước 6: Tạo tài khoản người dùng mới</h2>

<h2>Ngăn ngừa vấn đề với SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> sử dụng Core Audio Tap API gốc — không cài driver hệ thống, không bị hỏng khi cập nhật macOS.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 mua một lần, macOS 14.2+.</p>
`,
  },
  "mute-all-apps-keyboard-shortcut-mac": {
    slug: "mute-all-apps-keyboard-shortcut-mac",
    title: "Cách tắt tiếng tất cả ứng dụng cùng lúc trên Mac (và bật lại hoàn hảo)",
    description: "Cần im lặng ngay? Phím tắt tiếng tắt mọi thứ — nhưng bật lại đặt lại âm lượng đã cân bằng. Đây là cách tốt hơn.",
    date: "2026-04-28",
    readTime: "4 phút đọc",
    content: `
<p>Ai đó vào phòng. Bạn cần im lặng ngay. Nhấn phím tắt tiếng. Bật lại — nhưng mức âm lượng riêng biệt biến mất.</p>

<h2>Tắt tiếng thông minh hơn: ⌃⌥M</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> có phím tắt <strong>⌃⌥M</strong>. Tắt tiếng mỗi ứng dụng riêng lẻ (trạng thái được lưu). Nhấn lại — mỗi ứng dụng trở về <strong>đúng</strong> mức trước đó.</p>

<img src="/apps/sounddial.png" alt="SoundDial mute-all shortcut — Control+Option+M to mute and unmute all apps with volume restore" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Kết hợp với <strong>⌃⌥S</strong> (bật/tắt bộ trộn), bạn quản lý tất cả âm thanh từ bàn phím.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 mua một lần, macOS 14.2+.</p>
`,
  },
  "google-meet-volume-too-low-mac": {
    slug: "google-meet-volume-too-low-mac",
    title: "Âm lượng Google Meet quá nhỏ trên Mac? Cách khắc phục",
    description: "Giọng nói trên Google Meet hầu như không nghe được ở âm lượng tối đa. Đây là lý do Meet chạy qua Chrome và cách tăng.",
    date: "2026-05-01",
    readTime: "5 phút đọc",
    content: `
<p>Google Meet chạy trong trình duyệt. Âm thanh Meet là một phần của luồng Chrome/Safari.</p>

<h2>Kiểm tra cài đặt</h2>
<p>Cài đặt âm thanh Meet, tab không bị tắt tiếng, thiết bị đầu ra macOS, codec Bluetooth.</p>

<h2>Tăng Google Meet (Chrome) vượt 100%</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> cho Chrome thanh trượt lên <strong>200%</strong>. Tăng Chrome = tăng Meet.</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting Google Meet (Chrome) volume beyond 100% on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 mua một lần, macOS 14.2+.</p>
`,
  },
  "mac-alert-volume-separate-from-media": {
    slug: "mac-alert-volume-separate-from-media",
    title: "Cách đặt âm lượng cảnh báo Mac riêng biệt với âm lượng media",
    description: "macOS có thanh trượt âm lượng cảnh báo ẩn, nhưng chỉ cho âm thanh hệ thống. Đây là cách thực sự tách âm lượng thông báo và media.",
    date: "2026-05-02",
    readTime: "5 phút đọc",
    content: `
<p>Nhạc ở mức hoàn hảo. Rồi tiếng cảnh báo macOS to đau tai. Bạn muốn hai điều khiển riêng biệt.</p>

<h2>Âm lượng cảnh báo macOS tích hợp</h2>
<p>Cài đặt Hệ thống → Âm thanh → Âm lượng cảnh báo. Chỉ ảnh hưởng âm thanh hệ thống macOS — <strong>không</strong> ảnh hưởng Slack, Discord, Teams.</p>

<h2>Giải pháp: âm lượng theo ứng dụng</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> cho mỗi ứng dụng thanh trượt riêng. Đặt Slack 15%, Discord 20%, Mail 10% — giữ Spotify 50%.</p>

<img src="/apps/sounddial.png" alt="SoundDial separating notification app volume from media app volume on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 mua một lần, macOS 14.2+.</p>
`,
  },
  "facetime-volume-too-low-mac": {
    slug: "facetime-volume-too-low-mac",
    title: "Âm lượng cuộc gọi FaceTime quá nhỏ trên Mac? Cách khắc phục",
    description: "FaceTime hầu như không nghe được trên Mac ở âm lượng tối đa. Đây là mọi cách sửa — đến tăng vượt 100%.",
    date: "2026-05-04",
    readTime: "5 phút đọc",
    content: `
<p>FaceTime trên iPhone tốt. Trên Mac, người kia như thì thầm từ xa.</p>

<p>Kiểm tra thiết bị đầu ra, cài đặt âm thanh FaceTime, tắt AirPods auto-switching, vấn đề codec Bluetooth, Headphone Safety, đặt lại Core Audio.</p>

<h2>Tăng FaceTime vượt 100%</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> tăng FaceTime lên <strong>200%</strong>.</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting FaceTime call volume beyond 100% on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 mua một lần, macOS 14.2+.</p>
`,
  },
  "mac-volume-keyboard-shortcuts": {
    slug: "mac-volume-keyboard-shortcuts",
    title: "Phím tắt âm lượng Mac bạn có thể chưa biết",
    description: "Ngoài phím âm lượng cơ bản — kiểm soát chính xác, tắt tiếng ứng dụng cụ thể, phím tắt theo ứng dụng. Mọi mẹo bàn phím âm thanh Mac.",
    date: "2026-05-06",
    readTime: "5 phút đọc",
    content: `
<h2>Phím tắt tích hợp</h2>
<ul>
  <li><strong>Option + Shift + Âm lượng:</strong> 64 mức thay vì 16</li>
  <li><strong>Shift + Âm lượng:</strong> không có tiếng "pop"</li>
  <li><strong>Option + Phím âm lượng:</strong> mở Cài đặt Âm thanh</li>
  <li><strong>Option + Nhấp biểu tượng Âm thanh:</strong> danh sách thiết bị</li>
</ul>

<h2>Phím tắt SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> thêm:</p>
<ul>
  <li><strong>⌃⌥S</strong> — bật/tắt bộ trộn</li>
  <li><strong>⌃⌥M</strong> — tắt tiếng tất cả (và bật lại với mức đã lưu)</li>
</ul>

<img src="/apps/sounddial.png" alt="SoundDial keyboard shortcuts — Control+Option+S to toggle, Control+Option+M to mute all" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 mua một lần, macOS 14.2+.</p>
`,
  },
  "background-music-app-not-working-mac": {
    slug: "background-music-app-not-working-mac",
    title: "Ứng dụng Background Music không hoạt động trên macOS? Thử các lựa chọn thay thế",
    description: "Background Music ngừng hoạt động sau cập nhật macOS? Đây là lý do nó hỏng, cách sửa, và lựa chọn thay thế tốt nhất trong 2026.",
    date: "2026-06-08",
    readTime: "5 phút đọc",
    content: `
<p>Background Music hỏng sau hầu hết mỗi cập nhật macOS vì sử dụng <strong>driver thiết bị âm thanh ảo</strong>.</p>

<h2>Lựa chọn thay thế không dùng thiết bị âm thanh ảo</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> sử dụng Audio Tap API — không driver, không hỏng khi cập nhật macOS.</p>

<img src="/apps/sounddial.png" alt="SoundDial — a Background Music alternative that doesn't install virtual audio devices" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>So với Background Music: tăng 200%, hồ sơ, tự động giảm âm, ghi nhớ âm lượng, phím tắt, phát triển tích cực.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 mua một lần, macOS 14.2+.</p>
`,
  },
  "soundsource-alternative-mac": {
    slug: "soundsource-alternative-mac",
    title: "Lựa chọn thay thế SoundSource: Kiểm soát âm lượng nhẹ hơn, rẻ hơn cho Mac",
    description: "SoundSource mạnh nhưng đắt và phức tạp. Nếu bạn chỉ cần âm lượng theo ứng dụng, đây là lựa chọn khác.",
    date: "2026-06-06",
    readTime: "6 phút đọc",
    content: `
<p>SoundSource $39, yêu cầu driver hệ thống (ACE), nhiều tính năng hầu hết người dùng không cần. Không có hồ sơ hay tự động giảm âm.</p>

<h2>SoundDial: tập trung vào nhu cầu thực sự</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>: âm lượng theo ứng dụng (0-200%), hồ sơ, tự động giảm âm, không cần driver hệ thống. €14.99.</p>

<img src="/apps/sounddial.png" alt="SoundDial — a lighter, focused SoundSource alternative with volume profiles and auto-ducking" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Chọn SoundSource nếu cần EQ theo ứng dụng hoặc routing. Chọn <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> nếu muốn kiểm soát âm lượng với hồ sơ và tự động giảm âm, nhẹ hơn, rẻ hơn.</p>
`,
  },
  "mac-volume-too-loud-at-lowest-setting": {
    slug: "mac-volume-too-loud-at-lowest-setting",
    title: "Âm lượng Mac quá to ở mức thấp nhất? Cách giảm thêm",
    description: "Ngay cả ở mức thấp nhất, Mac vẫn quá to — đặc biệt đêm khuya với tai nghe. Đây là cách có kiểm soát chính xác hơn.",
    date: "2026-05-08",
    readTime: "5 phút đọc",
    content: `
<p>Nửa đêm. Tai nghe. Mức thấp nhất — vẫn quá to. Bước tiếp là tắt tiếng. Không có gì ở giữa.</p>

<h2>Cách sửa tích hợp: Option + Shift</h2>
<p>64 mức thay vì 16. Ba mức bổ sung giữa "một vạch" và "tắt tiếng".</p>

<h2>Giải pháp thực sự: âm lượng theo ứng dụng</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> — thanh trượt 1% từ 0% đến 200%. Đặt hệ thống ở 40-50%, rồi tinh chỉnh: Spotify 8%, trình duyệt 15%, thông báo tắt.</p>

<img src="/apps/sounddial.png" alt="SoundDial fine-grained per-app volume control with 1% increments on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 mua một lần, macOS 14.2+.</p>
`,
  },
  "one-airpod-louder-than-the-other-fix": {
    slug: "one-airpod-louder-than-the-other-fix",
    title: "Một AirPod to hơn cái kia? Mọi cách sửa được giải thích",
    description: "AirPod bên trái nhỏ hơn bên phải (hoặc ngược lại). Đây là mọi nguyên nhân — từ ráy tai đến cài đặt cân bằng macOS.",
    date: "2026-05-10",
    readTime: "5 phút đọc",
    content: `
<h2>1. Vệ sinh AirPods</h2>
<p>Bàn chải lông mềm, khô. Không dùng nước, cồn, khí nén.</p>

<h2>2. Kiểm tra cân bằng âm thanh macOS</h2>
<p>Cài đặt Hệ thống → Trợ năng → Âm thanh → Cân bằng. Đảm bảo ở giữa.</p>

<h2>3. Đặt lại AirPods</h2>
<p>Cho vào hộp, đóng nắp 30 giây, mở, giữ nút setup 15 giây.</p>

<h2>4. Kiểm tra Mono Audio</h2>
<h2>5. Nhiễu Bluetooth</h2>
<h2>6. Vấn đề phần cứng</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> giúp đặt mỗi ứng dụng ở mức nhất quán, giảm nhảy âm lượng bất ngờ.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 mua một lần, macOS 14.2+.</p>
`,
  },
  "netflix-streaming-audio-too-quiet-mac": {
    slug: "netflix-streaming-audio-too-quiet-mac",
    title: "Âm thanh Netflix và Streaming quá nhỏ trên Mac? Cách khắc phục",
    description: "Hội thoại nhỏ như thì thầm, rồi tiếng nổ rung phòng. Đây là cách sửa mức âm thanh streaming trên Mac.",
    date: "2026-05-17",
    readTime: "5 phút đọc",
    content: `
<p>Phim trên Netflix — hội thoại nhỏ, hành động điếc tai. Vấn đề là dải động và loa MacBook nhỏ.</p>

<h2>Cách sửa</h2>
<p>Bật "Reduce Loud Sounds" trong dịch vụ streaming. Sử dụng tai nghe. Tăng âm thanh streaming vượt 100%.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> tăng bất kỳ ứng dụng nào lên <strong>200%</strong>. Tăng Netflix mà không làm Spotify hay Slack to hơn.</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting Netflix audio to 180% on Mac for clearer dialog and streaming audio" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 mua một lần, macOS 14.2+.</p>
`,
  },
  "mac-audio-setup-remote-work": {
    slug: "mac-audio-setup-remote-work",
    title: "Thiết lập âm thanh Mac cho làm việc từ xa: Hướng dẫn đầy đủ",
    description: "Cuộc gọi, nhạc, thông báo và thời gian tập trung — tất cả trên một Mac. Đây là cách thiết lập âm thanh.",
    date: "2026-05-12",
    readTime: "8 phút đọc",
    content: `
<p>Làm việc từ xa: Mac đồng thời là điện thoại, radio, trung tâm thông báo và trạm làm việc sâu. macOS coi tất cả giống nhau: một thanh trượt.</p>

<h2>Bốn chế độ âm thanh</h2>
<p>Cuộc họp, tập trung, cộng tác, nghỉ giải lao.</p>

<h2>Thiết lập với SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> cho mỗi ứng dụng thanh trượt riêng:</p>

<img src="/apps/sounddial.png" alt="SoundDial remote work audio setup — different volume levels for Zoom, Spotify, and Slack on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><strong>Hồ sơ Cuộc họp:</strong> Zoom 100%, Spotify tắt, Slack tắt</p>
<p><strong>Hồ sơ Tập trung:</strong> Spotify 30%, Slack 10%, Zoom 80%</p>
<p><strong>Hồ sơ Cộng tác:</strong> Mọi thứ 50-70%</p>

<p>Chuyển đổi bằng một cú nhấp. Tự động giảm âm xử lý cuộc gọi tự động.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 mua một lần, macOS 14.2+.</p>
`,
  },
  "stop-browser-tabs-auto-playing-audio-mac": {
    slug: "stop-browser-tabs-auto-playing-audio-mac",
    title: "Cách chặn tab trình duyệt tự động phát âm thanh trên Mac",
    description: "Tab nền bắt đầu phát âm thanh. Quảng cáo, video, trang tin tức — đây là cách tắt tiếng tab và kiểm soát âm thanh trình duyệt.",
    date: "2026-05-14",
    readTime: "5 phút đọc",
    content: `
<p>Hai mươi tab mở. Đột nhiên — âm thanh phát từ đâu đó. Quảng cáo video. Clip tin tức tự phát.</p>

<h2>Tắt autoplay trong Safari</h2>
<p>Safari → Settings → Websites → Auto-Play → "Never Auto-Play" hoặc "Stop Media with Sound".</p>

<h2>Tắt autoplay trong Chrome</h2>
<p><code>chrome://settings/content/sound</code> — tắt tiếng trang cụ thể.</p>

<h2>Kiểm soát âm thanh trình duyệt</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> cho trình duyệt thanh trượt riêng. Giảm Safari xuống 30% giữ Zoom ở 100%. Tắt tiếng Chrome giữ Spotify phát.</p>

<img src="/apps/sounddial.png" alt="SoundDial controlling browser volume independently from other apps on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 mua một lần, macOS 14.2+.</p>
`,
  },
  "discord-volume-too-loud-mac": {
    slug: "discord-volume-too-loud-mac",
    title: "Âm lượng Discord quá to (hoặc nhỏ) trên Mac? Cách khắc phục",
    description: "Discord gào qua game, hoặc quá nhỏ để nghe đồng đội. Đây là cách kiểm soát âm lượng Discord độc lập trên macOS.",
    date: "2026-05-21",
    readTime: "5 phút đọc",
    content: `
<p>Discord có hai vấn đề âm lượng trên Mac. macOS không cho phép điều chỉnh Discord độc lập.</p>

<h2>Kiểm soát nội bộ Discord</h2>
<p>Output Volume, Per-user volume, Notification volume — tất cả giới hạn.</p>

<h2>Sửa bằng SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> cho Discord thanh trượt riêng.</p>

<img src="/apps/sounddial.png" alt="SoundDial controlling Discord volume independently from game and music on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><strong>Game:</strong> Discord 100%, Game 40%, Spotify 15%</p>
<p><strong>Trò chuyện:</strong> Discord 80%, YouTube 60%</p>
<p><strong>Tập trung:</strong> Discord tắt, Spotify 50%</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 mua một lần, macOS 14.2+.</p>
`,
  },
  "switch-audio-output-quickly-mac": {
    slug: "switch-audio-output-quickly-mac",
    title: "Cách chuyển đổi đầu ra âm thanh nhanh trên Mac",
    description: "Chuyển giữa loa, tai nghe và màn hình trên Mac mất quá nhiều cú nhấp. Đây là các cách nhanh hơn.",
    date: "2026-05-19",
    readTime: "5 phút đọc",
    content: `
<h2>Cách 1: Option-click biểu tượng âm thanh</h2>
<p>Nhanh nhất tích hợp. Danh sách thiết bị đầu ra, nhấp để chuyển.</p>

<h2>Cách 2: Control Center</h2>
<p>Ba cú nhấp thay vì một.</p>

<h2>Cách 3: SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> có bộ chọn thiết bị ngay trong bảng thanh menu — cùng với thanh trượt âm lượng theo ứng dụng.</p>

<img src="/apps/sounddial.png" alt="SoundDial with audio output device switching and per-app volume control in one menu bar panel" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Chuyển thiết bị <em>và</em> điều chỉnh âm lượng trong cùng bảng. Với <strong>ghi nhớ âm lượng</strong>, mỗi thiết bị nhớ cân bằng riêng.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 mua một lần, macOS 14.2+.</p>
`,
  },
  "fix-audio-crackling-popping-mac": {
    slug: "fix-audio-crackling-popping-mac",
    title: "Sửa âm thanh rè và bật trên Mac: Hướng dẫn đầy đủ",
    description: "Âm thanh Mac rè, bật hoặc giật — khi nghe nhạc, gọi điện hoặc xem video. Đây là mọi nguyên nhân và cách sửa.",
    date: "2026-05-16",
    readTime: "8 phút đọc",
    content: `
<p>Nghe nhạc — pop. Rè. Giật. Không phải bài hát — mà là Mac. Ít nhất sáu nguyên nhân.</p>

<h2>1. Khởi động lại Core Audio</h2>
<p><code>sudo killall coreaudiod</code></p>

<h2>2. CPU quá tải</h2>
<p>Kiểm tra Activity Monitor. Đóng ứng dụng nặng.</p>

<h2>3. Vấn đề Bluetooth</h2>
<p>Nhiễu, chuyển codec, tắc nghẽn Bluetooth.</p>

<h2>4. Sample rate không khớp</h2>
<p>Kiểm tra Audio MIDI Setup.</p>

<h2>5. Vấn đề buffer USB</h2>
<h2>6. Lỗi cập nhật macOS</h2>
<h2>7. Kernel extension hoặc audio plugin</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> giúp quản lý âm thanh — tắt tiếng ứng dụng không dùng, tăng theo ứng dụng thay vì hệ thống tối đa, chuyển thiết bị nhanh.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 mua một lần, macOS 14.2+.</p>
`,
  },
  "teams-volume-too-low-mac": {
    slug: "teams-volume-too-low-mac",
    title: "Âm lượng Microsoft Teams quá nhỏ trên Mac? Mọi cách khắc phục",
    description: "Hầu như không nghe được trên Teams ở âm lượng tối đa? Đây là mọi nguyên nhân — và cách tăng âm thanh cuộc gọi vượt 100%.",
    date: "2026-06-04",
    readTime: "7 phút đọc",
    content: `
<p>Âm lượng thấp trên Teams là phàn nàn phổ biến nhất trên Mac trong doanh nghiệp.</p>

<p>Kiểm tra cài đặt âm thanh Teams, New Teams vs Classic Teams, codec Bluetooth, thiết bị đầu ra macOS, đặt lại Core Audio.</p>

<h2>Tăng Teams vượt 100%</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> tăng bất kỳ ứng dụng nào lên <strong>200%</strong>, bao gồm Teams.</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting Microsoft Teams call volume beyond 100% on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 mua một lần, macOS 14.2+.</p>
`,
  },
  "how-to-control-per-app-volume-on-mac": {
    slug: "how-to-control-per-app-volume-on-mac",
    title: "Cách kiểm soát âm lượng theo ứng dụng trên Mac",
    description: "macOS cho bạn một thanh trượt. Đây là cách có kiểm soát âm lượng riêng cho mỗi ứng dụng — và tại sao nó quan trọng.",
    date: "2026-05-20",
    readTime: "7 phút đọc",
    content: `
<p>Windows có bộ trộn âm lượng từ 2006. macOS vẫn chưa có. Đây là cách có kiểm soát âm lượng theo ứng dụng.</p>

<h2>Âm lượng theo ứng dụng nghĩa là gì</h2>
<p>Mỗi ứng dụng có thanh trượt riêng. Spotify 30%, Zoom 100%, Slack tắt, Safari 50%.</p>

<h2>Ai cần</h2>
<p>Người làm việc từ xa, streamer, nhạc sĩ, gamer, bất kỳ ai có nhiều nguồn âm thanh.</p>

<h2>SoundDial</h2>

<p>Tôi xây dựng <strong>SoundDial</strong> vì bộ trộn âm lượng Mac tôi muốn không tồn tại. Nó nằm trong thanh menu, mỗi ứng dụng có thanh trượt riêng. Tắt tiếng theo ứng dụng, tăng âm lượng, hồ sơ, tự động giảm âm. Mua một lần, macOS 14+.</p>
`,
  },
  "mute-slack-notifications-mac-without-muting-everything": {
    slug: "mute-slack-notifications-mac-without-muting-everything",
    title: "Cách tắt tiếng Slack trên Mac mà không tắt mọi thứ khác",
    description: "Thông báo Slack liên tục làm gián đoạn tập trung, nhưng bạn không muốn tắt nhạc hay cuộc gọi. Đây là cách tắt tiếng chỉ Slack.",
    date: "2026-05-24",
    readTime: "5 phút đọc",
    content: `
<p>Bạn đang tập trung. Spotify phát playlist hoàn hảo. Rồi — Slack ping. Và lại. macOS: tắt mọi thứ hoặc không tắt gì.</p>

<h2>Lựa chọn: tạm dừng thông báo Slack, tắt âm thanh macOS, Focus mode</h2>
<p>Tất cả là tất cả-hoặc-không. Không thể làm Slack <em>nhỏ hơn</em>.</p>

<h2>Giải pháp: âm lượng theo ứng dụng</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> cho Slack thanh trượt độc lập. Đặt 10-15% hoặc tắt tiếng hoàn toàn.</p>

<img src="/apps/sounddial.png" alt="SoundDial with Slack muted and Spotify playing at normal volume on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><strong>Tập trung:</strong> Slack 10%, Spotify 40%</p>
<p><strong>Sẵn sàng:</strong> Slack 40%</p>
<p><strong>Cuộc họp:</strong> Slack tắt, Zoom 100%</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 mua một lần, macOS 14.2+.</p>
`,
  },
  "volume-profiles-for-mac": {
    slug: "volume-profiles-for-mac",
    title: "Cách thiết lập hồ sơ âm lượng cho các tình huống khác nhau trên Mac",
    description: "Thiết lập âm lượng khác nhau cho cuộc họp, tập trung, game và thư giãn — chuyển đổi bằng một cú nhấp.",
    date: "2026-06-02",
    readTime: "5 phút đọc",
    content: `
<p>Mỗi tình huống có cấu hình âm lượng lý tưởng khác nhau. Hồ sơ âm lượng cho phép lưu và chuyển đổi bằng một cú nhấp.</p>

<h2>Thiết lập hồ sơ với SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> có hệ thống hồ sơ tích hợp. Điều chỉnh âm lượng, lưu thành hồ sơ với tên và biểu tượng.</p>

<img src="/apps/sounddial.png" alt="SoundDial volume profiles — one-click switching between Meeting, Focus, and Chill modes on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><strong>Cuộc họp:</strong> Zoom 100%, Spotify tắt, Slack tắt</p>
<p><strong>Tập trung:</strong> Spotify 35%, Slack 10%, Mail tắt</p>
<p><strong>Game:</strong> Game 60%, Discord 100%, Spotify 20%</p>
<p><strong>Thư giãn:</strong> Spotify 70%, Trình duyệt 60%</p>

<p>Kết hợp với tự động giảm âm = hoàn toàn tự động.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 mua một lần, macOS 14.2+.</p>
`,
  },
  "zoom-call-volume-too-low-mac": {
    slug: "zoom-call-volume-too-low-mac",
    title: "Âm lượng cuộc gọi Zoom quá nhỏ trên Mac? Cách tăng",
    description: "Hầu như không nghe được trên Zoom ở âm lượng tối đa. Đây là mọi cách sửa — đến tăng vượt 100%.",
    date: "2026-05-26",
    readTime: "6 phút đọc",
    content: `
<p>Trong cuộc gọi Zoom. Âm lượng tối đa. Vẫn nhỏ.</p>

<p>Kiểm tra cài đặt âm thanh Zoom, thiết bị đầu ra macOS, tắt điều chỉnh tự động, giảm nén tiếng ồn, codec Bluetooth, đặt lại Core Audio.</p>

<h2>Tăng Zoom vượt 100%</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> tăng Zoom lên <strong>200%</strong>. Chỉ Zoom to hơn, các ứng dụng khác giữ nguyên.</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting Zoom call volume to 180% on Mac for clearer audio during video calls" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Hoạt động với Teams, Meet, FaceTime, Discord, Slack, Webex, Skype.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 mua một lần, macOS 14.2+.</p>
`,
  },
  "lower-spotify-without-lowering-everything-mac": {
    slug: "lower-spotify-without-lowering-everything-mac",
    title: "Cách giảm Spotify mà không giảm mọi thứ khác trên Mac",
    description: "Bạn muốn Spotify làm nhạc nền, nhưng giảm bằng phím âm lượng làm cuộc gọi và mọi thứ cũng nhỏ. Đây là giải pháp.",
    date: "2026-05-30",
    readTime: "4 phút đọc",
    content: `
<p>Spotify hơi to — cạnh tranh với podcast hoặc gây khó tập trung. Nhấn phím giảm. Mọi thứ nhỏ đi. Không phải điều bạn muốn.</p>

<h2>Giải pháp: âm lượng theo ứng dụng</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>: nhấp biểu tượng thanh menu, tìm Spotify, kéo thanh trượt. Xong. Zoom không thay đổi. Thông báo không thay đổi.</p>

<img src="/apps/sounddial.png" alt="SoundDial lowering Spotify volume independently while keeping other apps at full volume on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Lưu thành hồ sơ "Làm việc" với Spotify 25%, Zoom 100%, Slack 15%. Tự động giảm âm tự động giảm Spotify khi cuộc gọi bắt đầu.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 mua một lần, macOS 14.2+.</p>
`,
  },
  "macos-tahoe-per-app-volume-control": {
    slug: "macos-tahoe-per-app-volume-control",
    title: "macOS Tahoe có kiểm soát âm lượng theo ứng dụng không?",
    description: "macOS Tahoe (macOS 26) mang đến cập nhật lớn, nhưng Apple có thêm bộ trộn âm lượng không? Đây là câu trả lời.",
    date: "2026-06-12",
    readTime: "4 phút đọc",
    content: `
<h2>Câu trả lời ngắn: không</h2>

<p>macOS Tahoe không có bộ trộn âm lượng tích hợp. Không có kiểm soát âm lượng theo ứng dụng trong Cài đặt Hệ thống, Control Center hay thanh menu.</p>

<h2>Cách có kiểm soát âm lượng theo ứng dụng trên macOS Tahoe</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> hoàn toàn tương thích với macOS Tahoe, sử dụng Core Audio Tap API.</p>

<img src="/apps/sounddial.png" alt="SoundDial providing per-app volume control on macOS Tahoe" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<ul>
  <li>Thanh trượt 0-200% cho mỗi ứng dụng</li>
  <li>Tắt tiếng theo ứng dụng</li>
  <li>Hồ sơ âm lượng</li>
  <li>Tự động giảm âm</li>
  <li>Tăng âm lượng vượt 100%</li>
  <li>Ghi nhớ âm lượng</li>
  <li>Phím tắt</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — mua một lần, macOS 14.2+.</p>
`,
  },
  "play-music-speakers-calls-headphones-mac": {
    slug: "play-music-speakers-calls-headphones-mac",
    title: "Cách phát nhạc trên loa trong khi gọi qua tai nghe (Mac)",
    description: "Muốn Spotify trên loa bàn và Zoom trong AirPods cùng lúc? macOS không dễ dàng — đây là giải pháp.",
    date: "2026-05-15",
    readTime: "5 phút đọc",
    content: `
<p>macOS: khi chọn thiết bị đầu ra, <em>mọi</em> ứng dụng sử dụng nó. Không có routing theo ứng dụng tích hợp.</p>

<h2>Cách đơn giản hơn: phân tách bằng âm lượng</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> cho mỗi ứng dụng thanh trượt riêng. Zoom 100%, Spotify 20%, mọi thứ khác tắt. Cuộc gọi rõ ràng, nhạc nền nhẹ.</p>

<img src="/apps/sounddial.png" alt="SoundDial showing Zoom at full volume and Spotify lowered during a call on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Tự động giảm âm tự động xử lý khi cuộc gọi bắt đầu/kết thúc.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 mua một lần, macOS 14.2+.</p>
`,
  },
  "mac-volume-keeps-changing-by-itself": {
    slug: "mac-volume-keeps-changing-by-itself",
    title: "Âm lượng Mac tự thay đổi: Cách khắc phục",
    description: "Âm lượng Mac nhảy lên, giảm xuống hoặc đặt lại ngẫu nhiên. Đây là mọi nguyên nhân và cách dừng.",
    date: "2026-05-18",
    readTime: "6 phút đọc",
    content: `
<p>Bạn đặt âm lượng thoải mái. Quay lại — nó khác đi. Các nguyên nhân:</p>

<h2>1. Bluetooth kết nối lại</h2>
<h2>2. HDMI/DisplayPort</h2>
<h2>3. Ứng dụng thay đổi âm lượng</h2>
<h2>4. Nhấn phím không chủ ý</h2>
<h2>5. Core Audio daemon đặt lại</h2>
<h2>6. Cài đặt Trợ năng</h2>

<h2>Khóa âm lượng theo ứng dụng với SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> nhớ âm lượng mỗi ứng dụng độc lập. Ngay cả khi hệ thống thay đổi, cân bằng ứng dụng giữ nguyên.</p>

<img src="/apps/sounddial.png" alt="SoundDial remembering per-app volume levels across restarts on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 mua một lần, macOS 14.2+.</p>
`,
  },
  "best-volume-mixer-apps-mac-2026": {
    slug: "best-volume-mixer-apps-mac-2026",
    title: "Ứng dụng bộ trộn âm lượng tốt nhất cho Mac năm 2026",
    description: "So sánh thẳng thắn mọi ứng dụng Mac cho kiểm soát âm lượng theo ứng dụng. Tính năng, giá cả, và cái nào đáng dùng.",
    date: "2026-06-12",
    readTime: "10 phút đọc",
    content: `
<p>macOS không có bộ trộn âm lượng tích hợp. Đây là so sánh các lựa chọn.</p>

<h2>SoundDial</h2>
<p>0-200%, tắt tiếng, hồ sơ, tự động giảm âm, phím tắt, ghi nhớ âm lượng. €14.99 mua một lần. Mac App Store. Không cần driver.</p>

<img src="/apps/sounddial.png" alt="SoundDial per-app volume mixer showing individual app volume sliders on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>SoundSource</h2>
<p>Mạnh nhất. EQ theo ứng dụng, routing. $39. Cần driver hệ thống. Không có hồ sơ hay tự động giảm âm.</p>

<h2>Background Music</h2>
<p>Miễn phí. Cơ bản. Không tăng vượt 100%, không hồ sơ, không tự động giảm âm. Hỏng khi cập nhật macOS.</p>

<h2>Nên chọn cái nào?</h2>
<ul>
  <li>Âm lượng + hồ sơ + tự động giảm âm: <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a></li>
  <li>EQ + routing theo ứng dụng: SoundSource</li>
  <li>Miễn phí và cơ bản: Background Music</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Tải SoundDial trên Mac App Store</a>.</p>
`,
  },
  "youtube-too-quiet-safari-chrome-mac": {
    slug: "youtube-too-quiet-safari-chrome-mac",
    title: "YouTube quá nhỏ trong Safari hoặc Chrome trên Mac? Sửa ngay",
    description: "Một số video YouTube hầu như không nghe được ở âm lượng tối đa. Đây là lý do âm thanh trình duyệt nhỏ hơn — và cách tăng vượt 100%.",
    date: "2026-05-22",
    readTime: "5 phút đọc",
    content: `
<p>YouTube ở âm lượng tối đa. Hệ thống tối đa. Vẫn nhỏ. Chuyển Spotify — to. Vậy không phải loa. Đó là video.</p>

<h2>Giải pháp: tăng trình duyệt vượt 100%</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> cho Safari và Chrome thanh trượt lên <strong>200%</strong>.</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting Safari browser volume to 180% for quiet YouTube videos on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Tức thì. Theo ứng dụng. Hoạt động với mọi trình duyệt. Lên 200%.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 mua một lần, macOS 14.2+.</p>
`,
  },
  "mac-notification-sounds-too-loud-headphones": {
    slug: "mac-notification-sounds-too-loud-headphones",
    title: "Tiếng thông báo Mac quá to trong tai nghe? Đây là giải pháp",
    description: "Slack ping và cảnh báo macOS đau tai trong tai nghe trong khi nhạc vừa phải. Đây là lý do âm lượng thông báo khác biệt — và cách kiểm soát.",
    date: "2026-05-25",
    readTime: "5 phút đọc",
    content: `
<p>Đeo tai nghe, nhạc ở 40%. Slack ping — <em>DING.</em> Điếc tai so với nhạc.</p>

<p>macOS không cho phép kiểm soát âm lượng thông báo riêng với media. Tiếng thông báo ngắn, sắc, được thiết kế để gây chú ý.</p>

<h2>Giải pháp: kiểm soát âm lượng ứng dụng thông báo</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> cho mỗi ứng dụng thanh trượt riêng.</p>

<img src="/apps/sounddial.png" alt="SoundDial showing Slack at low volume and Spotify at normal volume — independent notification control on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Thiết lập cho tai nghe</h3>
<ul>
  <li><strong>Spotify:</strong> 50%</li>
  <li><strong>Slack:</strong> 15%</li>
  <li><strong>Mail:</strong> 10%</li>
  <li><strong>Calendar:</strong> 20%</li>
  <li><strong>Zoom:</strong> 90%</li>
  <li><strong>Trình duyệt:</strong> 40%</li>
</ul>

<p>Lưu thành hồ sơ "Tai nghe".</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 mua một lần, macOS 14.2+.</p>
`,
  },
  "stop-zoom-lowering-music-mac": {
    slug: "stop-zoom-lowering-music-mac",
    title: "Cách ngăn Zoom giảm nhạc trên Mac",
    description: "Mỗi khi tham gia Zoom, nhạc giảm hoặc biến mất. Đây là lý do và cách kiểm soát theo ý bạn.",
    date: "2026-05-28",
    readTime: "6 phút đọc",
    content: `
<p>Tham gia Zoom. Spotify đang phát thoải mái. Cuộc gọi kết nối — nhạc biến mất. Nguyên nhân: xử lý âm thanh Zoom hoặc chuyển codec Bluetooth.</p>

<h2>Giải pháp: tự động giảm âm theo ý bạn</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> có tự động giảm âm mà <strong>bạn kiểm soát mức duck</strong>.</p>

<img src="/apps/sounddial.png" alt="SoundDial auto-ducking settings — configurable volume reduction during Zoom calls on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<ol>
  <li>Đặt mức duck (10% đến 80%)</li>
  <li>Tham gia Zoom — micro kích hoạt</li>
  <li>SoundDial giảm ứng dụng nền theo mức bạn cấu hình</li>
  <li>Kết thúc — mọi ứng dụng trở về mức trước</li>
</ol>

<p>Hoạt động với Zoom, Teams, FaceTime, Discord, Slack, Meet, Webex, Skype.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 mua một lần, macOS 14.2+.</p>
`,
  },
  "airpods-volume-too-low-mac": {
    slug: "airpods-volume-too-low-mac",
    title: "Âm lượng AirPods quá nhỏ trên Mac? Mọi cách sửa được giải thích",
    description: "AirPods nhỏ trên Mac ở âm lượng tối đa? Đây là mọi nguyên nhân — từ giới hạn an toàn đến Bluetooth — và cách sửa.",
    date: "2026-06-08",
    readTime: "7 phút đọc",
    content: `
<p>AirPods to trên iPhone. Trên Mac — nhỏ. Sáu nguyên nhân có thể.</p>

<h2>1. Headphone Safety</h2>
<p>Tắt "Reduce Loud Audio".</p>

<h2>2. Bluetooth không đồng bộ</h2>
<p>Ngắt kết nối, đợi 5 giây, kết nối lại.</p>

<h2>3. Codec SCO</h2>
<p>Sử dụng micro riêng.</p>

<h2>4. Một AirPod nhỏ hơn</h2>
<p>Vệ sinh. Kiểm tra cân bằng.</p>

<h2>5. Ứng dụng đầu ra nhỏ</h2>
<h2>6. Core Audio kẹt</h2>
<p><code>sudo killall coreaudiod</code></p>

<h2>Tăng vượt 100%</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> tăng bất kỳ ứng dụng nào lên <strong>200%</strong> cho AirPods.</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting app volume for AirPods on Mac with per-app volume sliders up to 200%" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 mua một lần, macOS 14.2+.</p>
`,
  },
  "spotify-volume-too-low-mac": {
    slug: "spotify-volume-too-low-mac",
    title: "Âm lượng Spotify quá nhỏ trên Mac? Đây là mọi cách sửa",
    description: "Spotify ở âm lượng tối đa nhưng vẫn nhỏ? Hướng dẫn này bao gồm mọi nguyên nhân — từ bộ giới hạn Spotify đến cài đặt macOS — và cách tăng vượt 100%.",
    date: "2026-06-11",
    readTime: "7 phút đọc",
    content: `
<p>Spotify tối đa. Mac tối đa. Vẫn không đủ to.</p>

<p>Kiểm tra thanh trượt Spotify, chuẩn hóa âm lượng (đặt "Loud" hoặc tắt), chất lượng âm thanh, Headphone Safety, Bluetooth, đặt lại Core Audio.</p>

<h2>Tăng Spotify vượt 100%</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> tăng Spotify lên <strong>200%</strong> — độc lập với các ứng dụng khác.</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting Spotify volume to 200% on macOS while keeping other apps at normal volume" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Tự động giảm âm tự động giảm Spotify khi cuộc gọi bắt đầu.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 mua một lần, macOS 14.2+.</p>
`,
  },
  "separate-game-audio-from-discord-mac": {
    slug: "separate-game-audio-from-discord-mac",
    title: "Cách tách âm thanh game khỏi Discord trên Mac",
    description: "Tiếng nổ game lấn át đồng đội trên Discord? Đây là cách kiểm soát âm lượng game và trò chuyện thoại độc lập trên macOS.",
    date: "2026-06-10",
    readTime: "6 phút đọc",
    content: `
<p>Game trên Mac. Tiếng nổ. Đồng đội Discord đang nói — không nghe được. Giảm âm lượng — Discord cũng nhỏ. macOS không có bộ trộn tích hợp.</p>

<h2>Giải pháp: âm lượng theo ứng dụng</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> cho mỗi ứng dụng thanh trượt riêng. Game 35%, Discord 100%.</p>

<img src="/apps/sounddial.png" alt="SoundDial showing independent volume sliders for a game and Discord on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Thiết lập game</h3>
<ul>
  <li><strong>Game:</strong> 30-50%</li>
  <li><strong>Discord:</strong> 90-100%</li>
  <li><strong>Spotify:</strong> 15-25%</li>
  <li><strong>Trình duyệt:</strong> tắt tiếng</li>
  <li><strong>Slack:</strong> tắt tiếng</li>
</ul>

<p>Lưu thành hồ sơ "Game". Tăng Discord lên <strong>200%</strong> nếu đồng đội có micro kém.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 mua một lần, macOS 14.2+.</p>
`,
  },
  "why-doesnt-mac-have-volume-mixer": {
    slug: "why-doesnt-mac-have-volume-mixer",
    title: "Tại sao Mac không có bộ trộn âm lượng như Windows?",
    description: "Windows có kiểm soát âm lượng theo ứng dụng từ 2006. 2026 và macOS vẫn chưa có. Đây là lý do thực sự — và cách có một cái.",
    date: "2026-06-09",
    readTime: "6 phút đọc",
    content: `
<p>Mọi Windows từ Vista (2006) có bộ trộn âm lượng. macOS? Một thanh trượt. Hai mươi năm cập nhật và Apple chưa bao giờ thêm.</p>

<h2>Không phải giới hạn kỹ thuật</h2>
<p>Core Audio hỗ trợ hoàn toàn. Apple giới thiệu Audio Tap API trong macOS 14. Apple xây dựng hạ tầng — chỉ chưa xây giao diện.</p>

<h2>Tại sao Apple chưa xây dựng</h2>
<p>Apple ưu tiên đơn giản. Một thanh trượt đơn giản hơn mười hai cái. Nhưng "đơn giản" không còn đơn giản khi bạn có nhiều nguồn âm thanh cạnh tranh.</p>

<h2>Cách có bộ trộn âm lượng ngay</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> — bộ trộn âm lượng macOS. Thanh trượt 0-200%, tắt tiếng, hồ sơ, tự động giảm âm, phím tắt, chuyển đổi thiết bị, ghi nhớ âm lượng.</p>

<img src="/apps/sounddial.png" alt="SoundDial — the volume mixer for macOS, showing per-app volume sliders in the menu bar" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Tính năng Apple nên xây dựng hai mươi năm trước. <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — mua một lần, macOS 14.2+.</p>
`,
  },
  "boost-mac-volume-beyond-100-percent": {
    slug: "boost-mac-volume-beyond-100-percent",
    title: "Âm lượng Mac quá nhỏ? Cách tăng âm thanh vượt 100%",
    description: "Mac ở âm lượng tối đa và vẫn quá nhỏ. Đây là lý do và cách khuếch đại âm thanh lên 200% mà không cần loa ngoài.",
    date: "2026-06-07",
    readTime: "8 phút đọc",
    content: `
<p>Mac ở 100%. Vẫn không đủ to. Podcast quá nhỏ. Người tham gia cuộc gọi như thì thầm. YouTube thu quá nhỏ.</p>

<h2>Tại sao Mac nhỏ ở âm lượng tối đa</h2>
<p>Nội dung nhỏ, loa MacBook có giới hạn vật lý, Bluetooth bị giới hạn, âm lượng ứng dụng nội bộ thấp.</p>

<h2>Cách tăng vượt 100%</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> cho mỗi ứng dụng thanh trượt 0% đến <strong>200%</strong>. Tăng chỉ ứng dụng nhỏ mà không ảnh hưởng các ứng dụng khác.</p>

<img src="/apps/sounddial.png" alt="SoundDial volume boost — per-app volume control with 200% amplification on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Hữu ích cho podcast nhỏ, cuộc gọi với người micro kém, tab trình duyệt, bản ghi cũ.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — mua một lần, macOS 14.2+.</p>
`,
  },
  "auto-lower-music-during-zoom-calls-mac": {
    slug: "auto-lower-music-during-zoom-calls-mac",
    title: "Cách tự động giảm nhạc khi gọi Zoom trên Mac",
    description: "Mỗi khi Zoom bắt đầu, bạn vội tạm dừng Spotify. Có cách tốt hơn — tự động giảm âm khi micro kích hoạt.",
    date: "2026-06-05",
    readTime: "7 phút đọc",
    content: `
<p>Cuộc gọi bắt đầu. Đang chia sẻ màn hình. Nhạc vẫn gào. Vội chuyển Spotify, tạm dừng — nhưng mọi người đã nghe.</p>

<h2>Audio ducking là gì</h2>
<p>Tự động giảm âm thanh nền khi có gì quan trọng hơn — như cuộc gọi thoại.</p>

<h2>macOS không có audio ducking tích hợp</h2>

<h2>Tự động giảm âm với SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> phát hiện cuộc gọi qua trạng thái micro (chấm cam). Hoạt động với Zoom, Teams, FaceTime, Discord, Slack, Meet, Webex, Skype.</p>

<img src="/apps/sounddial.png" alt="SoundDial auto-ducking feature automatically lowering music volume during a Zoom call on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Đặt mức duck (10-80%). Cuộc gọi bắt đầu → nền giảm. Kết thúc → khôi phục. Tự động. Không cần chạm.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 mua một lần, macOS 14.2+.</p>
`,
  },
  "how-to-mute-one-app-on-mac": {
    slug: "how-to-mute-one-app-on-mac",
    title: "Cách tắt tiếng một ứng dụng trên Mac mà không tắt mọi thứ",
    description: "Slack đang ping. Bạn đang gọi. Bạn muốn tắt Slack nhưng vẫn nghe cuộc gọi. macOS không cho phép — đây là cách.",
    date: "2026-06-03",
    readTime: "6 phút đọc",
    content: `
<p>Đang gọi Zoom. Slack ping liên tục. YouTube tab quên bắt đầu phát. Nhấn tắt tiếng — không nghe cuộc gọi. macOS tắt <em>mọi thứ</em>.</p>

<h2>Tại sao macOS không thể tắt tiếng từng ứng dụng</h2>
<p>macOS coi âm thanh là một luồng duy nhất. Không có cách tích hợp để tắt một ứng dụng mà không ảnh hưởng phần còn lại.</p>

<h2>Giải pháp: nút tắt tiếng theo ứng dụng</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> — thanh menu, mỗi ứng dụng có thanh trượt và nút tắt tiếng.</p>

<img src="/apps/sounddial.png" alt="SoundDial showing per-app mute buttons for each application in the macOS menu bar" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Nhấp biểu tượng loa cạnh ứng dụng. Ứng dụng đó tắt tiếng. Mọi thứ khác tiếp tục phát. Nhấp lại — âm lượng trở về đúng mức trước đó.</p>

<p>Thanh trượt 0-200%, hồ sơ, tự động giảm âm.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14.99 mua một lần, macOS 14.2+.</p>
`,
  },
  "volume-mixer-for-mac": {
    slug: "volume-mixer-for-mac",
    title: "Bộ trộn âm lượng cho Mac: Tính năng thiếu mà macOS vẫn chưa có",
    description: "Windows có bộ trộn âm lượng từ 2006. Đây là lý do macOS vẫn chưa có — và cách tốt nhất để có kiểm soát âm lượng theo ứng dụng trên Mac 2026.",
    date: "2026-06-01",
    readTime: "9 phút đọc",
    content: `
<p>Windows: nhấp phải biểu tượng loa → Volume Mixer → mỗi ứng dụng có thanh trượt riêng. macOS: một thanh trượt. Mọi thứ ở cùng mức.</p>

<p>Đây là tính năng âm thanh được yêu cầu nhiều nhất trong macOS, và Apple đã bỏ qua hai mươi năm.</p>

<h2>Bộ trộn âm lượng thực sự làm gì</h2>
<p>Kiểm soát âm lượng <strong>độc lập cho mỗi ứng dụng</strong>. Spotify 25%, Zoom 100%, Slack tắt, Safari 60%.</p>

<h2>Tại sao Apple chưa xây dựng</h2>
<p>Triết lý thiết kế: ít tùy chọn, giao diện đơn giản hơn. Nhưng "đơn giản" ngừng đơn giản khi bạn có năm nguồn âm thanh cạnh tranh.</p>

<h2>SoundDial: bộ trộn âm lượng macOS nên có</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> nằm trong thanh menu. Mỗi ứng dụng có thanh trượt 0-200%. Tắt tiếng một cú nhấp. Hồ sơ. Tự động giảm âm. Phím tắt. Chuyển đổi thiết bị. Ghi nhớ âm lượng.</p>

<img src="/apps/sounddial.png" alt="SoundDial — per-app volume mixer for macOS showing individual app volume sliders in the menu bar" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Mua một lần. Không đăng ký. macOS 14.2+. <a href="https://apps.apple.com/app/sounddial/id6772792641">Tải SoundDial trên Mac App Store</a>.</p>
`,
  },
};
