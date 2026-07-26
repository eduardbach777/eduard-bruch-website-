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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial podcasting setup — guest audio, monitoring, and notifications at independent levels" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial fine-grained per-app volume control with 1% precision on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial controlling Slack volume independently during a huddle while music plays at a different level" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial default volume setting — new apps start at a configured level instead of full blast" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for managing all Mac audio sources independently" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting Cisco Webex call volume beyond 100% on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial showing two audio sources at different volume levels on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial late-night movie setup — streaming app at moderate volume, notifications muted" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial preserving per-app volume levels after Mac sleep and wake cycles" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial separating DAW output from Discord and reference tracks on macOS for music production" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting Apple Music volume beyond 100% on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — reliable per-app volume mixer for Mac with profiles, auto-ducking, and 200% boost" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial balancing Spotify and Discord at different volume levels on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control, profiles, auto-ducking, and 200% boost for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting VLC volume at the system level on macOS for quiet video files" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial configurable auto-ducking — control exactly how much background audio is lowered during calls" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting app volume for Bluetooth headphones on Mac with per-app sliders to 200%" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial balancing game, Discord, and music audio levels for OBS streaming on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial volume memory — automatically remembers and restores per-app volume levels on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting Apple Podcasts volume to 180% on Mac for quiet podcast episodes" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial student setup — lecture at full volume, study music low, notifications muted" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial mute-all shortcut — Control+Option+M to mute and unmute all apps with volume restore" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting Google Meet (Chrome) volume beyond 100% on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial separating notification app volume from media app volume on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting FaceTime call volume beyond 100% on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial keyboard shortcuts — Control+Option+S to toggle, Control+Option+M to mute all" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — a Background Music alternative that doesn't install virtual audio devices" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — a lighter, focused SoundSource alternative with volume profiles and auto-ducking" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial fine-grained per-app volume control with 1% increments on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting Netflix audio to 180% on Mac for clearer dialog and streaming audio" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial remote work audio setup — different volume levels for Zoom, Spotify, and Slack on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial controlling browser volume independently from other apps on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial controlling Discord volume independently from game and music on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial with audio output device switching and per-app volume control in one menu bar panel" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting Microsoft Teams call volume beyond 100% on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial with Slack muted and Spotify playing at normal volume on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial volume profiles — one-click switching between Meeting, Focus, and Chill modes on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting Zoom call volume to 180% on Mac for clearer audio during video calls" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial lowering Spotify volume independently while keeping other apps at full volume on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial providing per-app volume control on macOS Tahoe" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial showing Zoom at full volume and Spotify lowered during a call on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial remembering per-app volume levels across restarts on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial per-app volume mixer showing individual app volume sliders on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting Safari browser volume to 180% for quiet YouTube videos on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial showing Slack at low volume and Spotify at normal volume — independent notification control on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial auto-ducking settings — configurable volume reduction during Zoom calls on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting app volume for AirPods on Mac with per-app volume sliders up to 200%" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial boosting Spotify volume to 200% on macOS while keeping other apps at normal volume" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial showing independent volume sliders for a game and Discord on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — the volume mixer for macOS, showing per-app volume sliders in the menu bar" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial volume boost — per-app volume control with 200% amplification on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial auto-ducking feature automatically lowering music volume during a Zoom call on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial showing per-app mute buttons for each application in the macOS menu bar" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume mixer for macOS showing individual app volume sliders in the menu bar" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Mua một lần. Không đăng ký. macOS 14.2+. <a href="https://apps.apple.com/app/sounddial/id6772792641">Tải SoundDial trên Mac App Store</a>.</p>
`,
  },
  "background-music-alternative-mac": {
    slug: "background-music-alternative-mac",
    title: "Giải pháp thay thế Background Music tốt nhất cho Mac (2026)",
    description: "Background Music phá vỡ macOS mới hơn? Giải pháp thay thế bộ trộn âm lượng cho mỗi ứng dụng đáng tin cậy nhất là SoundDial — một ứng dụng Mac App Store được đóng hộp cát với tính năng tăng cường và cấu hình.",
    date: "2026-07-23",
    readTime: "Đọc trong 5 phút",
    content: `<p>Nếu Background Music ngừng hoạt động sau khi cập nhật macOS, giải pháp thay thế đáng tin cậy nhất là <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> - bộ trộn âm lượng trên mỗi ứng dụng trên thanh menu từ Mac App Store. Nó cung cấp cho mọi ứng dụng thanh trượt âm lượng riêng, thêm cấu hình tắt tiếng, tăng âm lượng và tự động giảm âm lượng, đồng thời được đóng hộp cát hoàn toàn và được Apple đánh giá, do đó không có trình điều khiển âm thanh nào bị hỏng trong bản phát hành macOS tiếp theo.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Giải pháp thay thế Background Music tốt nhất cho Mac (2026)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Tại sao Background Music bị hỏng trên macOS mới hơn</h2>

<p>Background Music là một dự án mã nguồn mở miễn phí thực sự thông minh. Nó mang lại cho người dùng Mac thứ mà Apple chưa bao giờ có: bộ trộn âm lượng trên mỗi ứng dụng, loại mà Windows đã có trong nhiều năm. Nhưng thiết kế của nó cũng là lý do khiến nó liên tục thất bại.</p>

<p>Để định tuyến và điều khiển âm thanh, Background Music cài đặt một thiết bị âm thanh ảo - trình điều khiển cấp hệ thống chặn âm thanh Mac của bạn. Cách tiếp cận đó hoạt động tốt trên macOS cũ hơn, nhưng mọi bản phát hành chính đều thắt chặt bảo mật xung quanh các phần mở rộng hạt nhân và âm thanh. Các triệu chứng phổ biến mà người dùng báo cáo:</p>

<ul>
<li>Không có âm thanh nào sau khi cài đặt hoặc sau khi cập nhật hệ điều hành.</li>
<li>Thiết bị ảo không tải được nên việc định tuyến âm thanh sẽ âm thầm dừng lại.</li>
<li>Ứng dụng cần cài đặt lại, khởi động lại hoặc xóa trình điều khiển thủ công để khôi phục.</li>
<li>Quá trình phát triển dựa trên cộng đồng và nhịp độ tình nguyện, do đó, các bản sửa lỗi cho macOS mới có thể bị chậm.</li>
</ul>

<p>Không điều nào trong số này làm cho Background Music trở nên "xấu". Điều đó chỉ có nghĩa là một công cụ dựa trên trình điều khiển miễn phí về bản chất là rất mong manh và nếu bạn dựa vào số lượng mỗi ứng dụng hàng ngày thì sự mong manh đó sẽ nhanh chóng trở nên cũ kỹ.</p>

<h2>Những gì cần tìm kiếm ở một sự thay thế</h2>

<p>Trước khi chọn bất kỳ giải pháp thay thế nào, hãy quyết định xem bạn thực sự cần gì:</p>

<ul>
<li><strong>Độ tin cậy trên các bản cập nhật macOS.</strong> Nếu nó cài đặt kernel hoặc phần mở rộng âm thanh, thỉnh thoảng có thể bị hỏng.</li>
<li><strong>Kiểm soát thực sự trên mỗi ứng dụng.</strong> Âm lượng và tắt tiếng độc lập cho từng ứng dụng là cơ sở.</li>
<li><strong>Tăng cường.</strong> Một số ứng dụng (công cụ họp yên tĩnh, một số trình duyệt nhất định) đơn giản là quá yên tĩnh — bạn muốn vượt quá 100%.</li>
<li><strong>Tính năng tiện lợi.</strong> Cấu hình và tính năng tự động giảm tải là những thứ biến tiện ích thành thứ bạn có thể mở cả ngày.</li>
<li><strong>Cài đặt an toàn.</strong> Ứng dụng Mac App Store được đóng hộp cát không thể chạm vào các bộ phận bên trong hệ thống, vì vậy việc gỡ cài đặt sẽ diễn ra dễ dàng và các bản cập nhật diễn ra tự động.</li>
</ul>

<h2>Tại sao SoundDial là lựa chọn đáng tin cậy</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> được xây dựng để giải quyết chính xác vấn đề mà người dùng Background Music gặp phải: họ muốn khối lượng trên mỗi ứng dụng nhưng họ không muốn trông nom một tài xế. Nó nằm trong thanh menu của bạn và thực hiện tốt công việc cốt lõi:</p>

<ul>
<li><strong>Khối lượng độc lập cho mọi ứng dụng</strong>, với tính năng tắt tiếng cho mỗi ứng dụng trong cùng một bảng điều khiển.</li>
<li><strong>Tăng cường trên mỗi ứng dụng</strong> để làm cho các ứng dụng yên tĩnh đủ to để thực sự nghe thấy.</li>
<li><strong>Hồ sơ khối lượng</strong> — lưu danh sách kết hợp (ví dụ: "cuộc họp" hoặc "chơi trò chơi") và chuyển đổi ngay lập tức thay vì mỗi lần kéo thanh trượt.</li>
<li><strong>Tự động giảm tốc độ</strong>, để âm thanh nền tự động giảm xuống khi cần thiết.</li>
<li><strong>Chuyển đổi đầu ra nhanh chóng</strong> giữa loa, tai nghe và các thiết bị khác.</li>
</ul>

<p>Sự khác biệt lớn hơn là cách nó cài đặt. SoundDial được vận chuyển thông qua Mac App Store, có nghĩa là nó đã được Apple đánh giá và đóng hộp cát. Không có DMG để kéo, không có trình điều khiển âm thanh hoặc phần mở rộng hệ thống và không có quyền truy cập kernel. Đó là lý do quan trọng nhất khiến nó không bị hỏng như Background Music khi có macOS mới xuất hiện - nó không được kết nối với các bộ phận của hệ thống mà Apple liên tục khóa.</p>

<p>Nó có giá <strong>€14,99 một lần</strong>. Không miễn phí nhưng không có đăng ký và bạn đang trả tiền cho thứ gì đó được bảo trì và an toàn để cài đặt.</p>

<h2>SoundDial so với Background Music so với các công cụ miễn phí</h2>

<p>Background Music không phải là lựa chọn miễn phí duy nhất của bạn, vì vậy đây là một vị trí trung thực:</p>

<ul>
<li><strong>Background Music (miễn phí, mã nguồn mở):</strong> khối lượng trên mỗi ứng dụng, nhưng dựa trên trình điều khiển, dễ bị hỏng trên macOS mới hơn và nó thiếu khả năng tăng cường, cấu hình và tự động giảm tốc.</li>
<li><strong>FineTune (miễn phí, mã nguồn mở):</strong> một ứng dụng khối lượng thanh menu nhẹ cho mỗi ứng dụng. Tốt nếu miễn phí là yêu cầu duy nhất của bạn, nhưng lại có ít tính năng bổ sung.</li>
<li><strong>eqMac (miễn phí):</strong> chủ yếu là EQ và bộ tăng cường hệ thống, không phải là bộ trộn thực sự trên mỗi ứng dụng.</li>
<li><strong>SoundSource của Rogue Amoeba (~$39):</strong> tùy chọn cấp độ chuyên nghiệp, với EQ trên mỗi ứng dụng và định tuyến đầu ra đầy đủ. Tuyệt vời, nhưng giá của nó cao hơn gấp đôi SoundDial và vẫn yêu cầu tải xuống cộng với trình điều khiển ghi âm.</li>
<li><strong>SoundDial (€14,99, Mac App Store):</strong> nền tảng trung gian - âm lượng thực tế trên mỗi ứng dụng, tắt tiếng, tăng tốc, cấu hình và giảm tốc độ, được phân phối dưới dạng bản cài đặt hộp cát sạch không có trình điều khiển.</li>
</ul>

<p>Nếu bạn cần EQ trên mỗi ứng dụng hoặc định tuyến phòng thu phức tạp, SoundSource đáng để bỏ thêm tiền. Nếu bạn muốn có một công cụ sửa chữa miễn phí và có thể chịu đựng được tình trạng thỉnh thoảng bị vỡ, FineTune hoặc Background Music sẽ đáp ứng được. Nhưng nếu mục tiêu của bạn là "cung cấp cho mỗi ứng dụng khối lượng riêng và không để nó phá vỡ mọi bản cập nhật macOS", thì SoundDial sẽ đạt được mục tiêu đó mà ít gặp rắc rối nhất.</p>

<h2>Bối cảnh macOS khiến điều này trở nên cần thiết</h2>

<p>Điều đáng nói rõ ràng là: macOS không có bộ trộn âm lượng tích hợp sẵn cho mỗi ứng dụng. Windows đã có một cái trong nhiều năm trong lần phát hành âm lượng của nó, nhưng trên Mac, thanh trượt hệ thống điều khiển mọi thứ cùng một lúc. Khoảng cách đó là toàn bộ lý do khiến các công cụ như Background Music và SoundDial tồn tại. Vì Apple không lấp đầy nó nên câu hỏi thực tế chỉ là cách tiếp cận của bên thứ ba mà bạn tin tưởng - một trình điều khiển miễn phí chống lại hệ điều hành hoặc một ứng dụng hộp cát hoạt động với nó.</p>

<p>Sẵn sàng ngừng chiến đấu với trình điều khiển âm thanh bị hỏng? Nhận <a href="https://apps.apple.com/app/id6772792641">SoundDial trên Mac App Store</a> với giá €14,99 và kiểm soát âm lượng của mọi ứng dụng một cách đáng tin cậy.</p>`,
  },
  "soundsource-vs-sounddial-mac": {
    slug: "soundsource-vs-sounddial-mac",
    title: "SoundSource vs SoundDial: Ứng dụng khối lượng Mac nào thắng?",
    description: "SoundSource ($39, cấp chuyên nghiệp) so với SoundDial (€14,99, App Store). So sánh âm lượng, mức tăng, cấu hình và tính năng tự động giảm âm lượng trên mỗi ứng dụng để chọn bộ trộn Mac phù hợp với bạn.",
    date: "2026-07-23",
    readTime: "Đọc trong 6 phút",
    content: `<p>Nếu bạn chỉ muốn kiểm soát âm lượng trên mỗi ứng dụng được cài đặt rõ ràng và tốn ít chi phí hơn, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> là lựa chọn mua tốt hơn đối với hầu hết mọi người: €14,99 một lần, từ Mac App Store, với âm lượng trên mỗi ứng dụng, tắt tiếng, tăng tốc, cấu hình và tự động giảm âm lượng. Chỉ chọn SoundSource (~$39) của Rogue Amoeba nếu bạn đặc biệt cần EQ cho mỗi ứng dụng và định tuyến đầu ra nâng cao.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial - SoundSource vs SoundDial: Ứng dụng khối lượng Mac nào thắng?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Phiên bản ngắn</h2>
<p>macOS vẫn chưa có bộ trộn âm lượng tích hợp cho mỗi ứng dụng. Windows đã có tính năng này trong nhiều năm, nhưng trên Mac, thanh trượt âm lượng hệ thống sẽ di chuyển mọi thứ cùng một lúc. Cả SoundSource và SoundDial đều tồn tại để khắc phục khoảng cách đó. Họ chỉ nhắm đến những người mua khác nhau.</p>
<ul>
<li><strong>SoundDial</strong> — €14,99 một lần, ứng dụng Mac App Store, thanh menu. Âm lượng độc lập trên mỗi ứng dụng, tắt tiếng trên mỗi ứng dụng, tăng cường trên mỗi ứng dụng, cấu hình đã lưu, tự động giảm âm lượng và chuyển đổi đầu ra nhanh chóng. Đã được Sandbox và Apple đánh giá nên không cần cài đặt trình điều khiển.</li>
<li><strong>SoundSource</strong> — ~$39, tải xuống trực tiếp từ Rogue Amoeba. Mọi thứ ở trên cộng với EQ trên mỗi ứng dụng, định tuyến đầu ra nâng cao và hiệu ứng âm thanh. Yêu cầu cài đặt trình điều khiển thu âm nhỏ.</li>
</ul>

<h2>Giá cả và cách bạn mua nó</h2>
<p>Đây là sự phân chia rõ ràng nhất. SoundSource có giá khoảng 39 USD và được Rogue Amoeba bán trực tiếp. SoundDial có giá €14,99 khi mua một lần trên Mac App Store — cao hơn một phần ba giá một chút.</p>
<p>Bởi vì <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> được vận chuyển thông qua App Store, nó được đóng hộp cát, công chứng và được Apple đánh giá. Bạn bấm Get, nó sẽ cài đặt và thế là xong. Không có DMG để gắn kết, không có quyền cấp cho thành phần liền kề với kernel và không có trình điều khiển âm thanh hoặc phần mở rộng hệ thống. Nó cũng chạy cùng với luồng cập nhật App Store thông thường của bạn và đồng bộ hóa với các Mac khác của bạn trên cùng một ID Apple.</p>
<p>SoundSource tải xuống bên ngoài App Store và cài đặt trình điều khiển thu âm để có thể chặn và xử lý âm thanh của từng ứng dụng. Đó là những gì mở khóa các tính năng chuyên nghiệp của nó, nhưng nó cũng có nghĩa là một bước cài đặt bổ sung và một thành phần nằm sâu hơn trong hệ thống.</p>

<h2>SoundSource làm được gì mà SoundDial không làm được</h2>
<p>SoundSource tính giá cho một loại người dùng cụ thể. Nếu bất kỳ điều nào trong số này mô tả về bạn thì nó đáng giá thêm số tiền:</p>
<ul>
<li><strong>EQ trên mỗi ứng dụng.</strong> Bạn muốn bật bộ cân bằng 10 băng tần, chẳng hạn như Spotify trong khi vẫn để Zoom phẳng. SoundDial có âm lượng chứ không phải EQ.</li>
<li><strong>Định tuyến đầu ra nâng cao.</strong> Gửi một ứng dụng tới loa của bạn và một ứng dụng khác tới tai nghe hoặc một giao diện cụ thể, với khả năng kiểm soát tốt.</li>
<li><strong>Hiệu ứng âm thanh và plugin.</strong> SoundSource có thể lưu trữ các hiệu ứng trên cơ sở từng ứng dụng - lãnh thổ thực sự chuyên nghiệp.</li>
</ul>
<p>Rogue Amoeba có thành tích lâu dài và đáng tin cậy. SoundSource là một công cụ nghiêm túc và có giá tương đương. Nếu bạn là chuyên gia âm thanh hoặc người dùng nhiều đầu ra thì đó là lựa chọn phù hợp.</p>

<h2>SoundDial làm gì tốt hơn cho việc sử dụng hàng ngày</h2>
<p>Hầu hết những người tìm kiếm "bộ trộn âm lượng Mac" đều không cần EQ. Họ cần một ứng dụng yên tĩnh hơn ứng dụng khác và họ không muốn đấu tranh với trình cài đặt để có được ứng dụng đó. SoundDial giải quyết vấn đề đó một cách rõ ràng và bổ sung một số điều đáng chú ý:</p>
<ul>
<li><strong>Tăng cường cho mỗi ứng dụng.</strong> Một số ứng dụng và video quá yên tĩnh ngay cả ở mức 100%. SoundDial có thể đẩy một ứng dụng lên trên mức trần bình thường của nó để cuối cùng cũng có thể nghe được một cuộc họp yên tĩnh hoặc podcast.</li>
<li><strong>Hồ sơ khối lượng.</strong> Lưu cài đặt đầy đủ — nhạc yếu, tắt tiếng trình duyệt, gọi to ứng dụng — và gọi lại ngay lập tức. Tuyệt vời để chuyển đổi giữa "tập trung", "cuộc họp" và "chơi game" mà không cần kéo năm thanh trượt.</li>
<li><strong>Tự động vịt.</strong> Tự động nhúng âm thanh nền (như nhạc) khi một nguồn khác bắt đầu, để thông báo, cuộc gọi hoặc video không bị chôn vùi.</li>
<li><strong>Chuyển đổi đầu ra nhanh chóng.</strong> Chuyển giữa loa, tai nghe và các thiết bị khác từ thanh menu.</li>
</ul>
<p>Tất cả những điều đó đều chạy từ trình đơn thả xuống trên thanh menu, do đó, bạn chỉ cần một cú nhấp chuột là có thể sử dụng được trong thời gian còn lại.</p>

<h2>Các lựa chọn thay thế miễn phí, ngắn gọn</h2>
<p>Bạn sẽ thấy một số tùy chọn miễn phí được đề cập trong cùng các tìm kiếm. Chúng đáng để biết về:</p>
<ul>
<li><strong>Background Music</strong> — mã nguồn mở và miễn phí, cung cấp cho bạn khối lượng cơ bản trên mỗi ứng dụng. Nhưng nó có thể bị hỏng trên các bản phát hành macOS mới hơn và nó không có khả năng tăng tốc, cấu hình hoặc tự động giảm tốc.</li>
<li><strong>FineTune</strong> — một ứng dụng âm lượng thanh menu mã nguồn mở miễn phí. Đơn giản nhưng có giới hạn về phạm vi.</li>
<li><strong>eqMac</strong> - EQ miễn phí và bộ tăng cường hệ thống, giống một công cụ EQ trên toàn hệ thống hơn là một bộ trộn thực sự cho mỗi ứng dụng.</li>
</ul>
<p>Miễn phí là tuyệt vời nếu nó phù hợp với bạn. Sự cân bằng là khả năng tương thích và hỗ trợ: các công cụ âm thanh nguồn mở có thể tụt hậu so với các bản cập nhật macOS và các tính năng như cấu hình và tính năng né tránh thường không có ở đó. Nếu thiết lập của bạn quan trọng đối với ngày làm việc của bạn, thanh toán một lần cho thứ gì đó được xem xét và bảo trì thường là con đường yên tĩnh hơn.</p>

<h2>Bạn nên mua cái nào?</h2>
<p>Trả lời một câu hỏi: bạn cần EQ trên mỗi ứng dụng hay định tuyến đầu ra nâng cao?</p>
<ul>
<li><strong>Có</strong> — mua SoundSource. Nó được thiết kế cho mục đích đó và mức giá ~$39 là hợp lý cho một công cụ chuyên nghiệp có công cụ cấp trình điều khiển.</li>
<li><strong>Không, tôi chỉ muốn tăng số lượng, tăng cường và cài đặt sạch cho mỗi ứng dụng</strong> — mua SoundDial. Bạn sẽ nhận được sự kết hợp thực sự quan trọng hàng ngày, cùng với các cấu hình và tính năng tự động giảm âm lượng, với giá €14,99 và không gặp rắc rối với trình điều khiển.</li>
</ul>
<p>Đối với phần lớn người dùng Mac, nhóm thứ hai đó là câu trả lời trung thực. Bạn đang trả tiền để kiểm soát âm lượng chứ không phải cho studio.</p>

<p><strong>Bạn đã sẵn sàng sửa âm lượng Mac một cách dễ dàng chưa?</strong> Nhận <a href="https://apps.apple.com/app/id6772792641">SoundDial trên Mac App Store</a> — €14,99 một lần, không có trình điều khiển, không có DMG. Âm lượng, tăng cường, cấu hình và tự động giảm âm lượng trên mỗi ứng dụng chỉ bằng một cú nhấp chuột.</p>`,
  },
  "cheaper-soundsource-alternative-mac": {
    slug: "cheaper-soundsource-alternative-mac",
    title: "Giải pháp thay thế SoundSource rẻ hơn cho khối lượng mỗi ứng dụng trên Mac",
    description: "Bạn muốn số lượng mỗi ứng dụng theo phong cách SoundSource mà không phải trả mức giá $39? SoundDial là bộ trộn thanh menu Mac App Store trị giá €14,99 với tính năng tăng cường, cấu hình và tự động giảm tốc.",
    date: "2026-07-23",
    readTime: "Đọc trong 5 phút",
    content: `<p>Nếu bạn muốn điều khiển âm lượng trên mỗi ứng dụng theo phong cách SoundSource trên Mac nhưng mức giá 39 USD có vẻ quá cao, cách khắc phục đáng tin cậy nhanh nhất là <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>. Đó là bộ trộn thanh menu một lần trị giá €14,99 của Mac App Store, cung cấp cho mọi ứng dụng thanh trượt âm lượng, tắt tiếng và tăng tốc riêng — cùng với cấu hình và tự động giảm âm lượng — mà không cần tải xuống hoặc cài đặt trình điều khiển âm thanh.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Giải pháp thay thế SoundSource rẻ hơn cho khối lượng mỗi ứng dụng trên Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Tại sao mọi người tìm kiếm giải pháp thay thế SoundSource</h2>
<p>SoundSource của Rogue Amoeba là phần mềm tuyệt vời. Đây thực sự là cấp độ chuyên nghiệp: bộ cân bằng cho mỗi ứng dụng, hiệu ứng âm thanh và định tuyến đầu ra cho phép bạn gửi một ứng dụng đến tai nghe và một ứng dụng khác đến loa của bạn. Nhưng sức mạnh đó đi kèm với hai điểm ma sát. Đầu tiên, giá – khoảng $39. Thứ hai, nó cài đặt trình điều khiển thu âm cấp hệ thống bên ngoài App Store, điều mà một số người thận trọng trên máy làm việc hoặc đơn giản là không muốn quản lý trên các bản cập nhật macOS.</p>
<p>Đối với hầu hết mọi người, nhu cầu thực sự đơn giản hơn nhiều: tắt Spotify mà không cần chạm vào cuộc gọi Zoom, tắt tiếng ứng dụng của tab trình duyệt ồn ào hoặc tăng tốc trình phát video yên tĩnh lên hơn 100%. Nếu đó là bạn, bạn đang trả tiền chuyên nghiệp cho các tính năng mà bạn sẽ không bao giờ mở.</p>

<h2>SoundDial làm gì - và chi phí bao nhiêu</h2>
<p>SoundDial tập trung vào công việc khối lượng trên mỗi ứng dụng và thực hiện nó một cách rõ ràng. Mở thanh menu và bạn sẽ nhận được danh sách trực tiếp mọi thứ phát ra âm thanh, mỗi thứ có khả năng điều khiển riêng:</p>
<ul>
<li><strong>Khối lượng độc lập trên mỗi ứng dụng</strong> - một thanh trượt cho mỗi ứng dụng, được điều chỉnh theo thời gian thực.</li>
<li><strong>Tắt tiếng trên mỗi ứng dụng</strong> — tắt tiếng một ứng dụng ngay lập tức mà không tạm dừng bất kỳ ứng dụng nào khác.</li>
<li><strong>Tăng âm lượng trên mỗi ứng dụng</strong> — đẩy các ứng dụng yên tĩnh lên trên mức tối đa bình thường khi video hoặc cuộc gọi quá nhỏ.</li>
<li><strong>Hồ sơ khối lượng</strong> — lưu kết hợp (ví dụ: "Tập trung", "Chơi game", "Cuộc họp") và chuyển đổi chỉ bằng một cú nhấp chuột.</li>
<li><strong>Tự động giảm tốc độ</strong> - tự động nhúng các ứng dụng khác khi có nội dung quan trọng hơn bắt đầu phát.</li>
<li><strong>Chuyển đổi đầu ra nhanh chóng</strong> — chuyển đổi giữa loa, tai nghe và các thiết bị khác từ cùng một menu.</li>
</ul>
<p>Giá là <strong>€14,99, thanh toán một lần</strong> - không đăng ký. Đó là khoảng một phần ba chi phí của SoundSource, đối với các tính năng âm lượng mà hầu hết người dùng thực sự mong muốn.</p>

<h2>Sự khác biệt App Store</h2>
<p>Vì SoundDial được vận chuyển qua <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a>, nó đã được Apple xem xét và đóng hộp cát. Không có DMG để kéo, không có phần mở rộng kernel hoặc trình điều khiển ghi âm để phê duyệt và không có trình cập nhật riêng. Bạn cài đặt nó giống như bất kỳ ứng dụng App Store nào khác và nó hoạt động. Khi macOS cập nhật, bạn sẽ không còn băn khoăn liệu thành phần âm thanh cấp thấp có còn hoạt động hay không.</p>
<blockquote>macOS vẫn chưa có bộ trộn âm lượng tích hợp cho mỗi ứng dụng. Windows đã có một cái trong nhiều năm, nhưng trên Mac, âm lượng hệ thống là hoàn toàn hoặc không có gì - đó chính xác là khoảng trống mà các công cụ này lấp đầy.</blockquote>

<h2>Làm thế nào nó so sánh với các tùy chọn miễn phí</h2>
<p>SoundSource không phải là lựa chọn thay thế duy nhất của bạn. Có những công cụ miễn phí và việc trung thực về chúng rất quan trọng:</p>
<ul>
<li><strong>Background Music</strong> là một ứng dụng khối lượng cho mỗi ứng dụng mã nguồn mở miễn phí. Nó hoạt động với nhiều người, nhưng nó có thể bị hỏng trên các bản phát hành macOS mới hơn, các bản cập nhật không đều và không có tính năng tăng tốc, không có cấu hình và không tự động giảm tốc.</li>
<li><strong>FineTune</strong> là một ứng dụng âm lượng thanh menu mã nguồn mở, miễn phí — nhẹ và tiện dụng, nhưng lại thiếu các tính năng cấu hình và né tránh.</li>
<li><strong>eqMac</strong> là một EQ miễn phí và tăng cường hệ thống. Nó giống một công cụ cân bằng/tăng cường hơn là một công cụ trộn cho mỗi ứng dụng thực sự và nó không tập trung vào các thanh trượt ứng dụng riêng lẻ.</li>
</ul>
<p>Miễn phí là một sự lựa chọn hợp pháp. Sự đánh đổi là độ tin cậy và tính năng: các công cụ âm thanh nguồn mở phụ thuộc vào việc bảo trì tự nguyện và có thể tụt hậu so với các thay đổi của macOS, đồng thời không có cấu hình gói tùy chọn miễn phí nào cộng với tính năng tự động giảm âm thanh như cách SoundDial thực hiện. Nếu thiết lập của bạn đơn giản và bạn không ngại thỉnh thoảng bị hỏng thì một ứng dụng miễn phí có thể là đủ. Nếu bạn muốn thứ gì đó được bảo trì, đóng hộp cát và chỉ hoạt động, thì 14,99 € sẽ mua cho bạn chính xác thứ đó.</p>

<h2>Hướng dẫn quyết định nhanh</h2>
<ul>
<li><strong>Bạn cần EQ cho mỗi ứng dụng, hiệu ứng âm thanh và định tuyến một ứng dụng đến một thiết bị đầu ra khác</strong> → SoundSource đáng giá. Không có gì ở đây thay thế hoàn toàn điều đó.</li>
<li><strong>Bạn chủ yếu cần âm lượng trên mỗi ứng dụng, tắt tiếng, tăng tốc, cấu hình và giảm tốc độ — không cần trình điều khiển</strong> → SoundDial ở mức €14,99 là lựa chọn có giá trị tốt hơn.</li>
<li><strong>Bạn muốn miễn phí và không ngại rủi ro bảo trì</strong> → thử Background Music, FineTune hoặc eqMac trước.</li>
</ul>

<h2>Đang thiết lập nó</h2>
<p>Bắt đầu mất khoảng một phút:</p>
<ul>
<li>Cài đặt SoundDial từ Mac App Store — không cần tải xuống bên ngoài.</li>
<li>Cấp quyền âm thanh mà macOS nhắc nhở trong lần khởi chạy đầu tiên.</li>
<li>Phát âm thanh trong một số ứng dụng và mở biểu tượng thanh menu; bạn sẽ thấy mỗi cái có thanh trượt riêng.</li>
<li>Kéo để đặt mức, nhấn để tắt tiếng hoặc đẩy qua mức 100% để tăng tốc.</li>
<li>Lưu thiết lập của bạn làm hồ sơ và bật tính năng tự động giảm âm lượng nếu bạn muốn các ứng dụng khác im lặng trong khi gọi điện hoặc nghe nhạc.</li>
</ul>
<p>Đó là toàn bộ quy trình làm việc — không có tệp cấu hình, không cần khởi động lại, không cần tiện ích mở rộng hệ thống.</p>

<h2>Điểm mấu chốt</h2>
<p>SoundSource là công cụ mạnh mẽ hơn, nhưng hầu hết mọi người đang tìm kiếm nó chỉ muốn khối lượng trên mỗi ứng dụng hoạt động. SoundDial cung cấp điều đó với mức giá chỉ bằng khoảng một phần ba, vận chuyển an toàn thông qua App Store, đồng thời bổ sung thêm cấu hình và tính năng tự động giảm tải — mà không cần cài đặt một trình điều khiển nào.</p>

<p>Sẵn sàng kiểm soát âm lượng của mọi ứng dụng một cách độc lập? <a href="https://apps.apple.com/app/id6772792641">Nhận SoundDial trên Mac App Store</a> với giá €14,99, một lần.</p>`,
  },
  "finetune-alternative-mac": {
    slug: "finetune-alternative-mac",
    title: "FineTune Thay thế cho Mac: Bộ trộn âm lượng cho mỗi ứng dụng được hỗ trợ",
    description: "Bạn đã thử ứng dụng thanh menu FineTune miễn phí và muốn thứ gì đó được duy trì và an toàn cho App Store? Đây là giải pháp thay thế FineTune tốt nhất cho khối lượng mỗi ứng dụng trên Mac.",
    date: "2026-07-23",
    readTime: "Đọc trong 5 phút",
    content: `<p>Nếu bạn thích FineTune nhưng muốn thứ gì đó được bảo trì và cài đặt tích cực từ một nguồn đáng tin cậy, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> là sửa chữa đáng tin cậy nhanh nhất. Nó là bộ trộn âm lượng trên mỗi ứng dụng trên thanh menu Mac App Store với âm lượng độc lập, tắt tiếng trên mỗi ứng dụng, tăng âm lượng, cấu hình đã lưu và tự động giảm âm lượng. Đã được Apple xem xét và đóng hộp cát, nó có giá 14,99 € một lần mà không cần cài đặt trình điều khiển.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — FineTune Thay thế cho Mac: Bộ trộn âm lượng trên mỗi ứng dụng được hỗ trợ" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Tại sao lại tìm kiếm giải pháp thay thế FineTune?</h2>

<p>FineTune là một ý tưởng hay: một ứng dụng thanh menu mã nguồn mở, miễn phí cung cấp cho bạn khả năng kiểm soát âm lượng cho mỗi ứng dụng trên macOS, một tính năng mà Apple vẫn từ chối tích hợp (Windows đã có bộ trộn cho mỗi ứng dụng trong nhiều năm). Đối với nhiều người, nó thực hiện công việc cơ bản. Nhưng có những lý do thực sự khiến người dùng tìm kiếm thứ khác.</p>

<ul>
<li><strong>Bảo trì là không chắc chắn.</strong> Các dự án sở thích nguồn mở tồn tại và chết trong thời gian rảnh của một người bảo trì. Khi macOS gửi bản cập nhật lớn, các ứng dụng liên quan đến âm thanh thường bị lỗi đầu tiên và bạn phải chờ đợi một bản sửa lỗi tình nguyện có thể không bao giờ đến.</li>
<li><strong>Tính năng trần.</strong> FineTune bao gồm khối lượng trên mỗi ứng dụng và một số thứ khác. Nếu bạn muốn tăng tốc trên 100%, lưu cấu hình hoặc tự động né tránh, bạn phải sử dụng các công cụ khác.</li>
<li><strong>Tin tưởng và cập nhật.</strong> Việc cài đặt bản dựng thô bên ngoài App Store có nghĩa là không có đánh giá tự động, không có đảm bảo hộp cát và các bản cập nhật thủ công mà bạn phải tự theo dõi.</li>
</ul>

<p>Không điều nào trong số này làm cho FineTune trở nên tồi tệ. Điều đó chỉ có nghĩa là nếu bạn dựa vào âm thanh trên mỗi ứng dụng hàng ngày, bạn có thể muốn thứ gì đó có mô hình hỗ trợ đằng sau nó.</p>

<h2>SoundDial làm gì khác biệt</h2>

<p>SoundDial bắt đầu từ cùng một ý tưởng cốt lõi, một bộ trộn thanh menu với thanh trượt cho mọi ứng dụng đang chạy, sau đó tiến xa hơn với các tính năng mạnh mẽ mà người dùng thực sự yêu cầu.</p>

<ul>
<li><strong>Khối lượng độc lập cho mỗi ứng dụng.</strong> Giảm Spotify xuống, giữ cuộc gọi của bạn ở mức âm lượng tối đa, tắt tiếng hoàn toàn ứng dụng của tab trình duyệt gây ồn ào, tất cả từ một menu.</li>
<li><strong>Tăng âm lượng cho mỗi ứng dụng.</strong> Đẩy ứng dụng yên tĩnh lên trên mức trần bình thường khi podcast hoặc video có mức điều chỉnh quá thấp. FineTune không làm được điều này.</li>
<li><strong>Hồ sơ khối lượng.</strong> Lưu danh sách kết hợp, "tập trung", "chơi game", "cuộc họp" và chuyển đổi toàn bộ thiết lập của bạn chỉ bằng một cú nhấp chuột thay vì di chuyển năm thanh trượt.</li>
<li><strong>Tự động vịt.</strong> Tự động giảm âm thanh nền khi nội dung nào đó quan trọng hơn bắt đầu phát để nhạc sẽ giảm xuống khi có cuộc gọi đến.</li>
<li><strong>Chuyển đổi đầu ra nhanh chóng.</strong> Chuyển đổi giữa loa, tai nghe và các đầu ra khác mà không cần đi sâu vào Cài đặt hệ thống.</li>
</ul>

<p>Bởi vì <a href="https://apps.apple.com/app/id6772792641">SoundDial vận chuyển qua Mac App Store</a>, nó đã được Apple xem xét và đóng hộp cát, cài đặt sạch sẽ và cập nhật thông qua cơ chế giống như mọi ứng dụng App Store khác. Không có DMG để kéo, không có trình điều khiển âm thanh hoặc phần mở rộng hệ thống và không có lời nhắc bảo mật yêu cầu bạn cho phép thành phần cấp hạt nhân.</p>

<h2>SoundDial so với FineTune và các công cụ miễn phí khác</h2>

<p>FineTune không phải là lựa chọn miễn phí duy nhất và nó giúp nhìn toàn cảnh một cách trung thực.</p>

<ul>
<li><strong>FineTune</strong> — Khối lượng thanh menu cho mỗi ứng dụng, mã nguồn mở, miễn phí. Đơn giản và nhẹ, nhưng không tăng tốc, không cấu hình, không giảm tốc độ và việc bảo trì phụ thuộc vào cộng đồng.</li>
<li><strong>Background Music</strong> — Mã nguồn mở và miễn phí, định tuyến và điều chỉnh âm thanh trên mỗi ứng dụng. Thực sự hữu ích, nhưng nó có thể bị hỏng trên các bản phát hành macOS mới hơn và thiếu khả năng tăng cường, cấu hình và giảm tốc.</li>
<li><strong>eqMac</strong> - EQ miễn phí và tăng cường hệ thống. Tuyệt vời nếu bạn chủ yếu muốn một bộ chỉnh âm nhưng nó không phải là một bộ trộn cho mỗi ứng dụng.</li>
<li><strong>SoundSource (Rogue Amoeba)</strong> — Tùy chọn cấp độ chuyên nghiệp có giá khoảng 39 USD, với định tuyến đầu ra và EQ cho mỗi ứng dụng. Tuyệt vời, nhưng nó cần tải xuống cộng với trình điều khiển thu âm và chi phí cao hơn gấp đôi.</li>
<li><strong>SoundDial</strong> — €14,99 một lần, App Store-safe, không cần trình điều khiển. Thêm tính năng tăng cường, cấu hình và tự động giảm âm lượng bên cạnh các tính năng cơ bản về âm lượng trên mỗi ứng dụng.</li>
</ul>

<p>Tóm tắt trung thực: nếu bạn muốn thứ rẻ nhất tuyệt đối và chỉ cần khối lượng cơ bản trên mỗi ứng dụng thì các công cụ miễn phí có thể hoạt động. Nếu bạn muốn định tuyến và EQ cho mỗi ứng dụng cũng như không ngại trả tiền và cài đặt trình điều khiển thì SoundSource là ứng dụng nặng ký. SoundDial nằm ở vị trí tuyệt vời, có khả năng cao hơn các ứng dụng miễn phí, rẻ hơn đáng kể so với SoundSource và cài đặt an toàn hơn vì Apple đánh giá và đóng hộp cát cho nó.</p>

<h2>Chuyển từ FineTune</h2>

<p>Việc chuyển đổi mất vài phút và không có nghi thức dọn dẹp.</p>

<ul>
<li>Cài đặt SoundDial từ Mac App Store. Không có trình cài đặt, không có trình điều khiển phê duyệt, không cần khởi động lại.</li>
<li>Nhấp vào biểu tượng SoundDial trên thanh menu của bạn để xem thanh trượt cho từng ứng dụng đang chạy.</li>
<li>Đặt bản phối hàng ngày của bạn, sau đó lưu nó dưới dạng hồ sơ để bạn có thể gọi lại ngay lập tức.</li>
<li>Tùy chọn bật tính năng tự động giảm âm lượng để tách âm thanh nền cho cuộc gọi và cảnh báo.</li>
<li>Khi bạn vui, hãy bỏ FineTune. Vì cả hai ứng dụng đều không cài đặt trình điều khiển hệ thống nên không cần phải gỡ cài đặt nữa.</li>
</ul>

<p>Bạn giữ được điều bạn thích về FineTune, một bộ trộn thanh menu sạch mà Apple chưa bao giờ cung cấp cho bạn và bạn nhận được khả năng tăng cường, cấu hình, giảm tốc và hỗ trợ lâu dài mà ứng dụng App Store được duy trì cung cấp.</p>

<h2>Điểm mấu chốt</h2>

<p>FineTune chứng minh khái niệm: âm lượng mỗi ứng dụng thuộc về thanh menu. SoundDial chính là khái niệm đó với mô hình hỗ trợ thực sự, nhiều tính năng hơn và độ an toàn của App Store với mức phí 14,99 € một lần thay vì đặt cược vào việc bảo trì tình nguyện.</p>

<p>Bạn đã sẵn sàng cho một trình trộn trên mỗi ứng dụng được duy trì liên tục chưa? <a href="https://apps.apple.com/app/id6772792641">Nhận SoundDial trên Mac App Store</a> và kiểm soát âm lượng của mọi ứng dụng trong vài giây.</p>`,
  },
  "eqmac-alternative-per-app-volume-mac": {
    slug: "eqmac-alternative-per-app-volume-mac",
    title: "eqMac Thay thế cho khối lượng thực trên mỗi ứng dụng trên Mac",
    description: "Bạn yêu thích khả năng tăng cường của eqMac nhưng cần âm lượng, tắt tiếng và cấu hình phù hợp cho mỗi ứng dụng? SoundDial là bản sửa lỗi Mac App Store nhanh nhất — €14,99, được đóng hộp cát, không có trình điều khiển.",
    date: "2026-07-23",
    readTime: "Đọc trong 5 phút",
    content: `<p>Nếu bạn đã sử dụng eqMac cho EQ và bộ tăng âm lượng nhưng thực sự muốn âm lượng độc lập cho từng ứng dụng — cộng với các cấu hình tắt tiếng, tăng cường và lưu — cách khắc phục đáng tin cậy nhanh nhất là <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>. Đó là bộ trộn thanh menu Mac App Store: đặt cấp độ cho mỗi ứng dụng, tăng cường các ứng dụng yên tĩnh và chuyển đổi cấu hình ngay lập tức. €14,99 một lần, được đóng hộp cát, không cần cài đặt trình điều khiển.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — eqMac thay thế cho khối lượng thực trên mỗi ứng dụng trên Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>eqMac so với những gì bạn thực sự cần</h2>

<p>eqMac là một công cụ miễn phí vững chắc và bộ cân bằng và tăng âm lượng trên toàn hệ thống của nó thực sự hữu ích. Nhưng eqMac được xây dựng dựa trên một EQ chính và một đầu ra chính. Nó không cung cấp cho bạn một bộ trộn âm lượng thực sự cho mỗi ứng dụng - thứ Windows đã có trong nhiều năm và macOS vẫn chưa xuất xưởng nguyên bản.</p>

<p>Vì vậy, nếu vấn đề thực sự của bạn là "Spotify quá ồn ào khi tôi đang gọi điện" hoặc "trò chơi này làm tôi ù tai nhưng mọi thứ khác đều ổn", thì eqMac không phải là hình dạng phù hợp cho công việc. Cuối cùng, bạn phải sử dụng một thanh trượt chính duy nhất hoặc điều chỉnh âm lượng bên trong của mỗi ứng dụng. Đó là khoảng trống mà SoundDial lấp đầy.</p>

<h2>SoundDial làm được gì mà eqMac không làm được</h2>

<ul>
<li><strong>Khối lượng độc lập trên mỗi ứng dụng</strong> — Âm nhạc ở mức 40%, trình duyệt ở mức 100%, cuộc gọi điện video ở mức 70%, tất cả cùng một lúc, tất cả đều được ghi nhớ.</li>
<li><strong>Tắt tiếng trên mỗi ứng dụng</strong> — tắt tiếng một ứng dụng ồn ào ngay lập tức mà không cần chạm vào bất cứ thứ gì khác.</li>
<li><strong>Tăng cường trên mỗi ứng dụng</strong> — đẩy một ứng dụng yên tĩnh vượt quá mức trần thông thường của nó, giống như cách mà bộ tăng tốc của eqMac thực hiện, nhưng nhắm mục tiêu vào một ứng dụng duy nhất thay vì toàn bộ hệ thống.</li>
<li><strong>Hồ sơ khối lượng</strong> — lưu các thiết lập như "Tập trung", "Chơi game" hoặc "Cuộc họp" và chuyển đổi toàn bộ kết hợp chỉ bằng một cú nhấp chuột.</li>
<li><strong>Tự động giảm tốc độ</strong> — tự động bỏ âm thanh nền khi có nội dung quan trọng hơn bắt đầu, nhờ đó bạn không phải loay hoay tìm thanh trượt giữa cuộc gọi.</li>
<li><strong>Chuyển đổi đầu ra nhanh chóng</strong> — chuyển giữa loa, tai nghe và các đầu ra khác từ thanh menu.</li>
</ul>

<p>Sự chồng chéo với eqMac về cơ bản là sự thúc đẩy. Mọi thứ khác - bộ trộn, tắt tiếng, cấu hình, giảm tốc - là lãnh thổ mà eqMac không bao giờ được thiết kế để đảm nhiệm.</p>

<h2>Bạn vẫn muốn EQ chứ?</h2>

<p>Hãy trung thực về vấn đề bạn đang giải quyết. Nếu bạn thực sự cần EQ tần số — cắt âm trầm, điều chỉnh âm cao khắc nghiệt, định hình âm sắc của toàn bộ hệ thống — thì eqMac vẫn có một vị trí và hoàn toàn miễn phí. SoundDial là bộ trộn âm lượng, không phải bộ chỉnh âm.</p>

<p>Nhưng hầu hết mọi người sử dụng bộ tăng tốc của eqMac không phải vì họ muốn định hình tần số, họ muốn một ứng dụng to hơn hoặc sự kết hợp cân bằng. Nếu đó là bạn, một máy trộn chuyên dụng là câu trả lời rõ ràng hơn. Bạn thậm chí có thể chạy cả hai: giữ eqMac cho đường cong EQ trên toàn hệ thống và sử dụng SoundDial cho các cấp độ trên mỗi ứng dụng. Họ không đấu tranh vì cùng một công việc.</p>

<h2>So sánh nó với các công cụ âm thanh Mac khác như thế nào</h2>

<p>Vì bạn đang tìm kiếm công cụ nên đây là bối cảnh trung thực:</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba)</strong> — tùy chọn cấp độ chuyên nghiệp ở mức khoảng 39 USD, với EQ trên mỗi ứng dụng và định tuyến đầu ra đầy đủ. Mạnh mẽ nhưng cần tải xuống trực tiếp và cài đặt trình điều khiển thu âm. Quá mức cần thiết và đắt hơn nếu tất cả những gì bạn muốn là số lượng hồ sơ trên mỗi ứng dụng.</li>
<li><strong>Background Music</strong> — nguồn mở và miễn phí, nhưng nó có thể bị hỏng trên các bản phát hành macOS mới hơn và không có tính năng tăng tốc, không có cấu hình và không có tính năng tự động giảm tốc độ. Tuyệt vời khi nó hoạt động, bực bội khi nó không.</li>
<li><strong>FineTune</strong> — một ứng dụng thanh menu mã nguồn mở miễn phí. Đáng xem nếu $0 là yêu cầu khó khăn, mặc dù nó nhẹ hơn về tính năng và độ bóng.</li>
<li><strong>eqMac</strong> - bộ tăng cường EQ cộng miễn phí, nhưng không có bộ trộn thực sự cho mỗi ứng dụng, như đã đề cập ở trên.</li>
</ul>

<p>SoundDial nằm ở vị trí thuận lợi: tập trung hơn và rẻ hơn SoundSource, mạnh mẽ hơn và đáng tin cậy hơn các tùy chọn miễn phí, đồng thời eqMac không thực hiện được công việc trên mỗi ứng dụng.</p>

<h2>Tại sao Mac App Store lại quan trọng ở đây</h2>

<p>Một số công cụ này yêu cầu tải xuống trực tiếp và trình điều khiển âm thanh cấp hạt nhân hoặc ghi âm. Những thứ đó hoạt động được, nhưng chúng là loại thứ có thể cản trở bản cập nhật macOS hoặc vấp phải tác phẩm Mac bị khóa.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> Thay vào đó, hãy gửi qua Mac App Store. Điều đó có nghĩa là nó đã được Apple xem xét và đóng hộp cát, nó cài đặt dễ dàng mà không cần kéo DMG và không có trình điều khiển âm thanh hoặc tiện ích mở rộng hệ thống nào để phê duyệt. Các bản cập nhật đến thông qua App Store giống như bất kỳ ứng dụng nào khác và việc gỡ cài đặt là thao tác xóa bình thường. Đối với tiện ích thanh menu chạm vào âm thanh của bạn, đường dẫn ít ma sát hơn, ít rủi ro hơn đó có giá trị rất nhiều.</p>

<h2>Thiết lập nhanh</h2>

<ul>
<li>Cài đặt SoundDial từ Mac App Store — không cần khởi động lại, không cần trình điều khiển nhắc.</li>
<li>Mở biểu tượng thanh menu; mọi ứng dụng hiện đang phát ra âm thanh đều hiển thị với thanh trượt riêng.</li>
<li>Đặt mức độ, tắt tiếng những gì bạn không cần và tăng cường mọi thứ quá yên tĩnh.</li>
<li>Lưu sắp xếp dưới dạng hồ sơ, sau đó tạo thêm để chơi game, gọi điện hoặc tập trung.</li>
<li>Bật tính năng tự động giảm âm lượng để âm thanh nền tự động chuyển sang một bên.</li>
</ul>

<p>Đó là toàn bộ vòng lặp. Trong vòng vài phút, bộ tăng cường của eqMac kiểm soát mỗi ứng dụng chỉ được gợi ý.</p>

<p><strong>Bạn đã sẵn sàng nhận khối lượng thực tế trên mỗi ứng dụng trên Mac của mình chưa?</strong> <a href="https://apps.apple.com/app/id6772792641">Nhận SoundDial trên Mac App Store</a> — €14,99 một lần, được đóng hộp cát, không có trình điều khiển và nó thực hiện chính xác những gì một bộ trộn thanh menu nên làm.</p>`,
  },
  "cheapest-volume-mixer-mac-2026": {
    slug: "cheapest-volume-mixer-mac-2026",
    title: "Bộ trộn âm lượng tốt rẻ nhất cho Mac vào năm 2026",
    description: "Bạn đang tìm kiếm bộ trộn âm lượng tốt cho mỗi ứng dụng rẻ nhất cho Mac vào năm 2026? So sánh SoundDial, SoundSource, Background Music, FineTune và eqMac về giá cả, độ an toàn và tính năng.",
    date: "2026-07-23",
    readTime: "Đọc trong 6 phút",
    content: `<p>Bộ trộn âm lượng trên mỗi ứng dụng có giá trị tốt nhất cho Mac vào năm 2026 là <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, một ứng dụng thanh menu trên Mac App Store với giá 14,99 € một lần. Nó cung cấp cho mỗi ứng dụng thanh trượt âm lượng riêng, cùng với tính năng tắt tiếng, tăng tốc, cấu hình và tự động giảm âm lượng — không cần trình điều khiển, không đăng ký và không tải xuống rủi ro. Đó là tùy chọn trả phí rẻ nhất nhưng thực sự hoạt động đáng tin cậy.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Bộ trộn âm lượng tốt rẻ nhất cho Mac vào năm 2026" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Tại sao "rẻ nhất" cần một định nghĩa</h2>
<p>Có các công cụ khối lượng miễn phí dành cho Mac, vì vậy nếu mục tiêu duy nhất là chi tiêu bằng 0, bạn có các lựa chọn. Nhưng miễn phí thường khiến bạn phải trả giá ở một mức độ khác: tính dễ vỡ trên các phiên bản macOS mới, thiếu các tính năng như tăng cường hoặc cấu hình hoặc quá trình cài đặt liên quan đến trình điều khiển ghi âm mà bạn phải tin tưởng. "Hàng rẻ nhất" có nghĩa là mức giá thấp nhất mà vẫn mang lại cho bạn một máy trộn ổn định, đầy đủ tính năng mà bạn sẽ tiếp tục sử dụng. Đó là ống kính chúng ta sẽ sử dụng ở đây.</p>

<h2>Đầu tiên, điều macOS không làm được</h2>
<p>Windows đã có bộ trộn âm lượng cho mỗi ứng dụng trong nhiều năm - nhấp chuột phải vào biểu tượng loa và đặt từng ứng dụng một cách độc lập. macOS vẫn chưa được tích hợp sẵn thứ gì tương đương. Bạn nhận được một âm lượng chính và bất kỳ thanh trượt bên trong nào mà ứng dụng sẽ xuất xưởng (Âm nhạc, một số trình duyệt). Không có cách nào trên toàn hệ thống để làm cho Slack yên tĩnh hơn Spotify hoặc tăng cường cuộc gọi điện video yên tĩnh hơn mọi thứ khác. Mọi lựa chọn dưới đây đều tồn tại để lấp đầy khoảng trống đó.</p>

<h2>Các đối thủ, định giá trung thực</h2>

<h2>SoundDial — €14,99, một lần</h2>
<p>SoundDial tồn tại trong thanh menu của bạn và cung cấp cho mỗi ứng dụng đang chạy một thanh trượt âm lượng độc lập. Ngoài những điều cơ bản, nó còn bổ sung thêm những tính năng mà mọi người thực sự hướng tới:</p>
<ul>
<li><strong>Tăng cường trên mỗi ứng dụng</strong> — đẩy một ứng dụng quá yên tĩnh lên trên 100% thay vì căng thẳng để nghe nó.</li>
<li><strong>Tắt tiếng trên mỗi ứng dụng</strong> - tắt tiếng một ứng dụng mà không chạm vào phần còn lại.</li>
<li><strong>Hồ sơ khối lượng</strong> — lưu danh sách kết hợp "cuộc gọi công việc" hoặc "đêm chiếu phim" và gọi lại ngay lập tức.</li>
<li><strong>Tự động giảm tốc độ</strong> - tự động bỏ âm thanh nền khi phát nội dung quan trọng hơn.</li>
<li><strong>Chuyển đổi đầu ra nhanh chóng</strong> — chuyển đổi giữa loa, tai nghe và các thiết bị khác từ cùng một menu.</li>
</ul>
<p>Bởi vì nó có trên Mac App Store nên nó được sandbox, được Apple xem xét và cài đặt rõ ràng - không có DMG, không có phần mở rộng kernel, không có trình điều khiển âm thanh để phê duyệt. Bạn trả tiền <a href="https://apps.apple.com/app/id6772792641">€14,99 một lần</a> và sở hữu nó. Đối với hầu hết mọi người, đây là điểm hấp dẫn: đủ rẻ để trở thành một lời đồng ý dễ dàng, đủ đầy đủ để bạn không thể bỏ qua nó.</p>

<h2>SoundSource — ~$39, tùy chọn chuyên nghiệp</h2>
<p>SoundSource của Rogue Amoeba là tiêu chuẩn vàng cho người dùng thành thạo. Nó thực hiện âm lượng trên mỗi ứng dụng và tắt tiếng như SoundDial, nhưng còn tiến xa hơn với bộ cân bằng cho mỗi ứng dụng và định tuyến đầu ra đầy đủ (gửi một ứng dụng tới tai nghe, một ứng dụng khác tới loa). Nó thực sự xuất sắc — nhưng có giá khoảng 39 USD và được cài đặt bên ngoài App Store với thành phần thu âm mà bạn phải cấp quyền. Nếu bạn cần EQ trên mỗi ứng dụng hoặc định tuyến phức tạp thì nó đáng đồng tiền bát gạo. Nếu bạn chỉ muốn một máy trộn sạch, giá rẻ thì bạn đang phải trả tiền cho những khả năng mà bạn có thể không bao giờ chạm tới.</p>

<h2>Background Music — miễn phí, mã nguồn mở</h2>
<p>Background Music là một ứng dụng mã nguồn mở miễn phí nổi tiếng cung cấp âm lượng cho mỗi ứng dụng và tính năng tự động tạm dừng. Điểm hấp dẫn: nó đi sâu vào Core Audio thông qua trình điều khiển ảo và có lịch sử lâu dài bị lỗi trên các bản phát hành macOS mới, đôi khi cần sửa thủ công hoặc cài đặt lại sau khi cập nhật. Nó cũng thiếu khả năng tăng tốc, lưu hồ sơ và tự động giảm tốc độ. Tuyệt vời cho những người mày mò không ngại bảo trì; bực bội nếu bạn chỉ muốn nó hoạt động.</p>

<h2>FineTune — miễn phí, thanh menu</h2>
<p>FineTune là một ứng dụng âm lượng thanh menu mã nguồn mở, miễn phí. Nó nhẹ và dễ chịu, chỉ cần điều chỉnh đơn giản cho mỗi ứng dụng là đủ. Nhưng là một dự án nhỏ miễn phí, nó không phù hợp với độ sâu tính năng — không có cấu hình, không tự động giảm tốc độ và khả năng xử lý tăng/đầu ra bị hạn chế. Chi phí bằng 0, ít đảm bảo hơn về tuổi thọ và hỗ trợ.</p>

<h2>eqMac — miễn phí, tăng cường EQ +</h2>
<p>eqMac là bộ cân bằng toàn hệ thống miễn phí với bộ tăng âm lượng. Đó là việc định hình âm sắc và âm lượng trên toàn bộ Mac của bạn hơn là trộn các ứng dụng riêng lẻ, vì vậy đây là một công cụ khác cho một công việc khác. Nếu bạn đặc biệt muốn kiểm soát từng ứng dụng, eqMac không thực sự là câu trả lời, mặc dù đó là một EQ miễn phí tốt.</p>

<h2>Giá so với giá trị: bảng trung thực</h2>
<ul>
<li><strong>Thực sự miễn phí nhưng có sự đánh đổi:</strong> Background Music (dễ vỡ, dựa trên trình điều khiển), FineTune (tính năng mỏng), eqMac (EQ, không phải bộ trộn).</li>
<li><strong>Ứng dụng trả phí hoàn chỉnh rẻ nhất:</strong> SoundDial ở mức €14,99 — tăng cường, cấu hình, giảm tốc, an toàn App Store.</li>
<li><strong>Cao cấp/chuyên nghiệp:</strong> SoundSource ở mức ~$39 — EQ và định tuyến, cài đặt không phải trên App Store.</li>
</ul>
<p>Nói cách khác: SoundDial có giá chỉ bằng một phần ba SoundSource trong khi đáp ứng được các tính năng mà 90% mọi người thực sự mong muốn. Và không giống như các tùy chọn miễn phí, nó sẽ không bị hỏng một cách lặng lẽ sau khi cập nhật macOS vì nó không dựa vào trình điều khiển âm thanh cấp hệ thống mỏng manh.</p>

<h2>Bạn nên chọn cái nào?</h2>
<p>Nếu bạn là người chuyên nghiệp cần EQ trên mỗi ứng dụng và định tuyến ứng dụng đến các đầu ra khác nhau, hãy mua SoundSource — nó xứng đáng với giá của nó. Nếu bạn yêu thích nguồn mở và không ngại thỉnh thoảng bị hỏng, hãy dùng thử Background Music hoặc FineTune miễn phí. Nhưng nếu bạn muốn tùy chọn rẻ nhất chỉ hoạt động — âm lượng độc lập, tăng tốc, tắt tiếng, cấu hình có thể lưu và tự động giảm âm lượng, được cài đặt an toàn từ App Store — SoundDial rõ ràng là lựa chọn chiến thắng về giá trị vào năm 2026.</p>

<blockquote>Máy trộn tốt nhất không phải là máy có nhiều tính năng nhất hoặc giá thấp nhất — mà là máy bạn thiết lập một lần rồi quên mất. Với mức giá €14,99, SoundDial khiến việc gọi điện trở nên dễ dàng.</blockquote>

<p>Sẵn sàng cung cấp cho mỗi ứng dụng khối lượng riêng của nó? <a href="https://apps.apple.com/app/id6772792641">Nhận SoundDial trên Mac App Store</a> với giá €14,99 một lần — không đăng ký, không trình điều khiển, không rủi ro.</p>`,
  },
  "windows-volume-mixer-for-mac": {
    slug: "windows-volume-mixer-for-mac",
    title: "Bộ trộn âm lượng Windows cho Mac: Nhận điều khiển âm lượng trên mỗi ứng dụng",
    description: "Thiếu Bộ trộn âm lượng Windows trên Mac của bạn? macOS không có điều khiển âm lượng tích hợp cho mỗi ứng dụng. Đây là cách nhanh nhất để có được nó: SoundDial, một bộ trộn thanh menu trị giá €14,99.",
    date: "2026-07-23",
    readTime: "Đọc trong 5 phút",
    content: `<p>macOS không có Bộ trộn âm lượng tích hợp như Windows, vì vậy bạn không thể đặt âm lượng cho mỗi ứng dụng từ Cài đặt hệ thống. Cách khắc phục nhanh nhất, đáng tin cậy là <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, một ứng dụng thanh menu trị giá €14,99 từ Mac App Store. Nó cung cấp cho mọi ứng dụng thanh trượt âm lượng, tắt tiếng và tăng tốc riêng — không cần trình điều khiển, không DMG, không cài đặt rủi ro.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Bộ trộn âm lượng Windows cho Mac: Nhận điều khiển âm lượng trên mỗi ứng dụng" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Tại sao Bộ trộn âm lượng Windows không có Mac tương đương</h2>

<p>Nếu bạn chuyển từ Windows, một trong những điều đầu tiên bạn sẽ bỏ lỡ là Bộ trộn âm lượng: nhấp chuột phải vào biểu tượng loa và mọi ứng dụng đang chạy đều có thanh trượt riêng. Giảm Chrome xuống, duy trì âm lượng lớn của Discord, tắt tiếng Spotify — tất cả ở cùng một nơi.</p>

<p>macOS đơn giản là không cung cấp thứ này. Điều khiển âm lượng của Apple là một thanh trượt duy nhất trên toàn hệ thống. Bất cứ cấp độ nào bạn đặt đều áp dụng cho mọi thứ cùng một lúc. Không có tùy chọn cho mỗi ứng dụng bị ẩn trong Cài đặt hệ thống, không có lệnh Terminal, không có chuyển đổi khả năng truy cập. Đó là một khoảng cách thực sự, và nó đã diễn ra như vậy trong nhiều năm.</p>

<p>Lý do là về mặt kiến trúc: các ứng dụng định tuyến âm thanh qua Core Audio đến thiết bị đầu ra của bạn và hệ điều hành không hiển thị bộ trộn hướng tới người dùng cho từng luồng riêng lẻ. Để tạo lại trải nghiệm Windows, bạn cần có ứng dụng của bên thứ ba nằm trong đường dẫn âm thanh đó và cung cấp cho bạn các điều khiển mà Apple đã bỏ qua.</p>

<h2>Trận đấu gần nhất: SoundDial</h2>

<p>SoundDial là bộ trộn âm lượng trên mỗi ứng dụng trên thanh menu được thiết kế riêng cho việc này. Nhấp vào biểu tượng của nó và bạn sẽ có một danh sách rõ ràng gồm mọi thứ đang phát âm thanh, mỗi danh sách đều có thanh trượt riêng. Đây là "Bộ trộn âm lượng Windows dành cho Mac" trực tiếp nhất mà bạn có thể cài đặt và nó thực hiện một số điều mà bộ trộn Windows không bao giờ có thể làm được:</p>

<ul>
<li><strong>Khối lượng độc lập trên mỗi ứng dụng</strong> - tính năng cốt lõi. Đặt Chrome thành 40%, Zoom thành 100%, âm nhạc thành 20%.</li>
<li><strong>Tắt tiếng trên mỗi ứng dụng</strong> - tắt tiếng một ứng dụng mà không chạm vào phần còn lại.</li>
<li><strong>Tăng âm lượng trên mỗi ứng dụng</strong> - đẩy một ứng dụng yên tĩnh <em>ở trên</em> 100% khi âm thanh của nó quá thấp.</li>
<li><strong>Hồ sơ khối lượng</strong> — lưu một danh sách kết hợp (ví dụ: "cuộc gọi công việc" hoặc "chơi trò chơi") và gọi lại danh sách đó ngay lập tức thay vì kéo lại các thanh trượt.</li>
<li><strong>Tự động giảm tốc độ</strong> — tự động giảm âm thanh nền khi có điều gì đó quan trọng hơn bắt đầu, chẳng hạn như cuộc gọi.</li>
<li><strong>Chuyển đổi đầu ra nhanh chóng</strong> — chuyển đổi giữa loa, tai nghe và các thiết bị khác từ cùng một menu.</li>
</ul>

<p>Bởi vì nó ở trên <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a>, nó đã được Apple xem xét và đóng hộp cát. Nó cài đặt dễ dàng chỉ bằng một cú nhấp chuột — không cần kéo DMG, không cần trình điều khiển âm thanh hoặc tiện ích mở rộng hệ thống để phê duyệt, không cần lời nhắc bảo mật. Với mức giá €14,99 một lần (không đăng ký), đây là cách đơn giản nhất để thu hẹp khoảng cách.</p>

<h2>Cách thiết lập âm lượng cho mỗi ứng dụng trên Mac của bạn</h2>

<ol>
<li>Cài đặt SoundDial từ Mac App Store.</li>
<li>Cấp quyền âm thanh một lần mà nó yêu cầu trong lần khởi chạy đầu tiên.</li>
<li>Nhấp vào biểu tượng SoundDial trên thanh menu của bạn.</li>
<li>Kéo thanh trượt bên cạnh bất kỳ ứng dụng nào để đặt âm lượng hoặc nhấn tắt tiếng/tăng tốc.</li>
<li>Tùy chọn lưu bản phối hiện tại dưới dạng cấu hình để bạn có thể khôi phục nó sau.</li>
</ol>

<p>Đó là toàn bộ quy trình làm việc. Nó hoạt động giống như bộ trộn Windows mà bạn đã biết, chỉ từ thanh menu thay vì nhấp chuột phải vào thanh tác vụ.</p>

<h2>SoundDial so sánh với các tùy chọn khác như thế nào</h2>

<p>SoundDial không phải là công cụ duy nhất trong lĩnh vực này, vì vậy đây là cái nhìn trung thực về các lựa chọn thay thế.</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba)</strong> - khoảng $39 và thực sự ở cấp độ chuyên nghiệp: EQ trên mỗi ứng dụng, định tuyến đầu ra trên mỗi ứng dụng, hiệu ứng. Tuy nhiên, nó yêu cầu tải xuống trực tiếp cộng với trình điều khiển thu âm và điều đó là quá mức cần thiết (và đắt hơn) nếu bạn chỉ muốn âm lượng trên mỗi ứng dụng. Chọn nó nếu bạn cần EQ và định tuyến; chọn SoundDial nếu bạn muốn bộ trộn không có độ phức tạp hoặc trình điều khiển.</li>
<li><strong>Background Music</strong> — miễn phí và mã nguồn mở, điều này thật tuyệt vời. Điều đáng chú ý: nó có thể bị hỏng trên các phiên bản macOS mới hơn và nó thiếu tính năng tăng tốc, lưu cấu hình và tự động giảm tốc độ. Tốt thôi nếu bạn cảm thấy thoải mái khi khắc phục sự cố trình điều khiển âm thanh nguồn mở; ít lý tưởng hơn nếu bạn muốn thứ gì đó hoạt động được.</li>
<li><strong>FineTune</strong> — một ứng dụng thanh menu mã nguồn mở miễn phí. Nhẹ và đáng xem nếu ngân sách là ưu tiên hàng đầu nhưng bạn đang giao dịch miễn phí chất sơn bóng, cấu hình và độ an toàn của App Store.</li>
<li><strong>eqMac</strong> - EQ miễn phí và bộ tăng cường trên toàn hệ thống. Trước tiên, đây là bộ chỉnh âm, không phải bộ trộn cho mỗi ứng dụng, vì vậy nó giải quyết được một vấn đề khác.</li>
</ul>

<p>Sự đánh đổi rất đơn giản. Các công cụ miễn phí không mất phí nhưng có thể dễ vỡ hoặc mỏng. SoundSource mạnh mẽ nhưng đắt tiền và dựa trên trình điều khiển. SoundDial nằm ở vị trí hấp dẫn: €14,99 một lần, tính năng an toàn và hộp cát của App Store cũng như các cấu hình + tính năng tự động giảm tốc mà các tùy chọn miễn phí bỏ qua.</p>

<blockquote>Nếu tất cả những gì bạn muốn là trải nghiệm Bộ trộn âm lượng Windows — thanh trượt trên mỗi ứng dụng, tắt tiếng và tăng tốc, được cài đặt an toàn trong vài giây — SoundDial là sự kết hợp trực tiếp nhất.</blockquote>

<h2>Điểm mấu chốt</h2>

<p>macOS sẽ không cung cấp cho bạn Bộ trộn âm lượng và có thể sẽ không bao giờ có. Nhưng bạn không cần phải sống chung với một thanh trượt trên toàn hệ thống. Bộ trộn thanh menu chuyên dụng sẽ khôi phục khả năng kiểm soát theo từng ứng dụng mà bạn có trên Windows, đồng thời thêm tính năng tăng cường, cấu hình và tự động giảm tốc độ lên trên.</p>

<p>Bạn đã sẵn sàng nhận khối lượng trên mỗi ứng dụng một cách dễ dàng chưa? <a href="https://apps.apple.com/app/id6772792641">Nhận SoundDial trên Mac App Store</a> với giá €14,99 — một lần, đóng hộp cát và cài đặt trong vài giây.</p>`,
  },
  "app-volume-like-windows-on-mac": {
    slug: "app-volume-like-windows-on-mac",
    title: "Đặt âm lượng ứng dụng như Windows thực hiện - trên Mac của bạn",
    description: "Windows có bộ trộn âm lượng cho mỗi ứng dụng, nhưng macOS thì không. Dưới đây là cách đặt âm lượng độc lập cho mọi ứng dụng trên Mac của bạn - nhanh chóng, an toàn và không cần trình điều khiển.",
    date: "2026-07-23",
    readTime: "Đọc trong 5 phút",
    content: `<p>macOS không có bộ trộn âm lượng tích hợp sẵn cho mỗi ứng dụng như trong Windows, vì vậy cách khắc phục đáng tin cậy nhanh nhất là <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, một ứng dụng thanh menu Mac App Store cung cấp cho mỗi ứng dụng thanh trượt âm lượng riêng, tắt tiếng cho mỗi ứng dụng và tăng âm lượng. Nó được đóng hộp cát, được Apple đánh giá, cài đặt không cần trình điều khiển và có giá 14,99 € một lần.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Đặt âm lượng ứng dụng giống như Windows — trên Mac của bạn" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Tại sao Windows có thể làm được điều này còn macOS thì không</h2>
<p>Nếu bạn đã sử dụng Windows, bạn sẽ biết cách thực hiện: nhấp chuột phải vào biểu tượng loa, mở Bộ trộn âm lượng và kéo một thanh trượt riêng cho Chrome, Spotify, Discord và bất kỳ thứ gì khác gây ra tiếng ồn. Nó đơn giản và nó chỉ hoạt động.</p>
<p>macOS chưa bao giờ xuất xưởng một sản phẩm tương đương. Bộ điều khiển âm thanh của Apple mang tính toàn cầu — một âm lượng chính cho toàn bộ hệ thống. Bạn có thể tắt tiếng một ứng dụng bằng cách tắt tiếng nguồn bên trong ứng dụng đó (nếu ứng dụng đó thậm chí có bộ điều khiển), nhưng không có nơi thống nhất nào để nói "giữ nhạc của tôi ở mức 40% trong khi cuộc họp của tôi vẫn ở mức 100%". Khoảng cách đó chính xác là lý do tại sao các máy trộn của bên thứ ba tồn tại.</p>

<h2>Cách khắc phục nhanh nhất: bộ trộn thanh menu</h2>
<p>Phù hợp nhất với trải nghiệm Windows là một ứng dụng thanh menu liệt kê các ứng dụng âm thanh đang chạy của bạn và cung cấp cho mỗi ứng dụng một thanh trượt. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> thực hiện chính xác điều này. Nhấp vào biểu tượng của nó trên thanh menu và bạn nhận được:</p>
<ul>
<li><strong>Khối lượng độc lập cho mọi ứng dụng</strong> — kéo Spotify xuống mà không cần chạm vào cuộc gọi của bạn.</li>
<li><strong>Tắt tiếng trên mỗi ứng dụng</strong> — tắt tiếng một ứng dụng ồn ào ngay lập tức, để phần còn lại phát.</li>
<li><strong>Tăng âm lượng trên mỗi ứng dụng</strong> - đẩy một ứng dụng quá yên tĩnh <em>ở trên</em> 100% khi mức tối đa của nó vẫn còn quá mềm.</li>
<li><strong>Hồ sơ khối lượng</strong> — lưu danh sách kết hợp "Công việc" hoặc "Chơi game" và gọi lại chỉ bằng một cú nhấp chuột.</li>
<li><strong>Tự động giảm tốc độ</strong> — tự động giảm âm thanh nền khi có điều gì đó quan trọng hơn bắt đầu.</li>
<li><strong>Chuyển đổi đầu ra nhanh chóng</strong> — chuyển đổi giữa loa, tai nghe và các đầu ra khác từ cùng một menu.</li>
</ul>
<p>Vì nó nằm trên Mac App Store nên được Apple sandbox và đánh giá nên nó cài đặt sạch sẽ và không cần kéo DMG, không có phần mở rộng kernel và không có trình điều khiển âm thanh để phê duyệt trong Cài đặt hệ thống. Phần cuối cùng quan trọng hơn vẻ ngoài của nó - các công cụ dựa trên trình điều khiển là những công cụ có xu hướng bị hỏng sau khi cập nhật macOS.</p>

<h2>Cách thiết lập (khoảng hai phút)</h2>
<ul>
<li><strong>1.</strong> Cài đặt SoundDial từ Mac App Store và khởi chạy nó.</li>
<li><strong>2.</strong> Cấp quyền âm thanh mà macOS nhắc nhở - đây là quyền cho phép ứng dụng xem luồng trên mỗi ứng dụng.</li>
<li><strong>3.</strong> Nhấp vào biểu tượng SoundDial trên thanh menu của bạn. Mọi ứng dụng hiện đang phát âm thanh đều hiển thị với thanh trượt riêng.</li>
<li><strong>4.</strong> Kéo thanh trượt của bất kỳ ứng dụng nào để đặt cấp độ của ứng dụng đó hoặc nhấn nút tắt tiếng. Tăng tốc hơn 100% khi ứng dụng quá yên tĩnh.</li>
<li><strong>5.</strong> (Tùy chọn) Lưu danh sách kết hợp hiện tại của bạn dưới dạng cấu hình để bạn có thể khôi phục danh sách đó sau này và bật tính năng tự động giảm âm lượng nếu bạn muốn âm thanh nền tự động giảm.</li>
</ul>
<p>Đó là toàn bộ quy trình làm việc. Nó hoạt động giống như Bộ trộn âm lượng Windows mà bạn đã biết, trừ đi trở ngại khi thiết lập.</p>

<h2>Còn các lựa chọn thay thế miễn phí và chuyên nghiệp thì sao?</h2>
<p>Có nhiều cách khác để nhận khối lượng mỗi ứng dụng trên Mac. Chúng đáng được biết để bạn có thể lựa chọn một cách trung thực.</p>
<blockquote>Các công cụ miễn phí đổi tiền lấy độ tin cậy và tính năng; các công cụ chuyên nghiệp giao dịch tiền bạc và thiết lập theo chiều sâu mà bạn có thể không cần.</blockquote>
<p><strong>Background Music</strong> là nguồn mở và miễn phí, đồng thời cung cấp số lượng cho mỗi ứng dụng. Điểm hấp dẫn: nó đi sâu vào hệ thống âm thanh và có lịch sử phá vỡ các bản phát hành macOS mới hơn, đồng thời nó thiếu tính năng tăng cường, cấu hình và tự động giảm âm lượng. Nếu nó hoạt động trên thiết lập của bạn thì thật tuyệt — nhưng đó là một canh bạc khi nâng cấp.</p>
<p><strong>FineTune</strong> là một ứng dụng thanh menu mã nguồn mở, miễn phí có tinh thần tương tự như SoundDial. Đó là một điểm khởi đầu tốt nếu ngân sách là mối quan tâm duy nhất, mặc dù đây là một dự án cộng đồng không có hồ sơ và đánh bóng vịt.</p>
<p><strong>eqMac</strong> là một EQ và bộ tăng cường miễn phí trên toàn hệ thống. Nó tuyệt vời để định hình âm thanh tổng thể, nhưng nó không phải là một bộ trộn thực sự cho mỗi ứng dụng — bạn đang điều chỉnh toàn bộ đầu ra chứ không phải các ứng dụng riêng lẻ.</p>
<p><strong>SoundSource</strong> của Rogue Amoeba (khoảng $39) là tùy chọn cấp độ chuyên nghiệp: EQ trên mỗi ứng dụng, định tuyến đầu ra cho mỗi ứng dụng và các tính năng kỹ sư âm thanh nghiêm túc. Điều đó thật tuyệt vời — nhưng nó cần tải xuống trực tiếp và cài đặt thành phần thu âm và chi phí cao hơn gấp đôi so với SoundDial. Nếu bạn muốn định tuyến và EQ ở cấp độ studio thì đó là lựa chọn. Nếu bạn chỉ muốn bộ trộn kiểu Windows thì điều đó là quá mức cần thiết.</p>

<h2>Bạn nên lấy cái nào?</h2>
<p>Nếu mục tiêu của bạn là "làm cho Mac của tôi hoạt động giống như Bộ trộn âm lượng Windows" mà không cần tải xuống, trình điều khiển hoặc rủi ro thì SoundDial là câu trả lời rõ ràng nhất. Bạn nhận được âm lượng, tắt tiếng, tăng tốc, cấu hình và tự động giảm âm lượng trên mỗi ứng dụng, tất cả đều an toàn với App Store với mức phí 14,99 € một lần — không cần đăng ký. Thay vào đó, chỉ chọn SoundSource nếu bạn đặc biệt cần định tuyến đầu ra và EQ cho mỗi ứng dụng, đồng thời thử các tùy chọn miễn phí nếu bạn cảm thấy thoải mái khi khắc phục chúng trên các bản cập nhật macOS.</p>

<p><strong>Sẵn sàng cung cấp cho mỗi ứng dụng khối lượng riêng của nó?</strong> <a href="https://apps.apple.com/app/id6772792641">Nhận SoundDial trên Mac App Store</a> và thiết lập bản trộn đầu tiên của bạn trong khoảng hai phút.</p>`,
  },
  "make-mac-louder-for-hard-of-hearing": {
    slug: "make-mac-louder-for-hard-of-hearing",
    title: "Cách làm cho Mac của bạn to hơn để nghe khó nghe",
    description: "Bạn đang gặp khó khăn khi nghe Mac ngay cả ở mức âm lượng tối đa? Tìm hiểu cách tăng cường và làm rõ âm thanh trên mỗi ứng dụng để nghe khó nghe, bao gồm SoundDial và các mẹo tích hợp.",
    date: "2026-07-23",
    readTime: "Đọc trong 6 phút",
    content: `<p>Nếu Mac của bạn không đủ to ngay cả ở mức âm lượng tối đa, cách khắc phục đáng tin cậy nhanh nhất là <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, bộ trộn thanh menu Mac App Store cho phép bạn tăng tốc bất kỳ ứng dụng nào vượt quá 100% và tắt tiếng mọi thứ khác. Điều đó có nghĩa là giọng nói to hơn, rõ ràng hơn từ FaceTime, video hoặc trình phát phim mà không cần khởi động toàn bộ hệ thống của bạn. Đó là € 14,99, một lần.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial - Cách làm cho Mac của bạn to hơn để nghe khó nghe" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Tại sao tăng tối đa thanh trượt âm lượng vẫn chưa đủ</h2>
<p>Đối với những người nghe khó nghe, thanh trượt âm lượng của macOS có hai giới hạn khó chịu. Đầu tiên, nó giới hạn ở mức 100% những gì ứng dụng tự tạo ra. Nếu podcast, video hoặc cuộc gọi được ghi ở chế độ yên tĩnh thì "âm lượng tối đa" vẫn quá nhỏ. Thứ hai, macOS không có bộ trộn âm lượng tích hợp cho mỗi ứng dụng. Windows đã có một cấp độ này trong nhiều năm, nhưng trên Mac, mọi ứng dụng đều có chung một cấp độ chính duy nhất. Vì vậy, khi bạn bật mọi thứ lên để nghe một giọng nói nhẹ nhàng, nhạc nền và âm thanh thông báo cũng trở nên ồn ào một cách khó chịu.</p>
<p>Điều bạn thực sự cần là khả năng thực hiện <em>một</em> ứng dụng to hơn các ứng dụng còn lại, đẩy nó vượt quá giới hạn bình thường và cắt các âm thanh cạnh tranh để giọng nói nổi bật. Đó chính xác là khoảng trống mà các công cụ này lấp đầy.</p>

<h2>Trước tiên, hãy sử dụng cài đặt trợ năng macOS miễn phí</h2>
<p>Trước khi thêm bất kỳ ứng dụng nào, bạn nên thiết lập những gì macOS đã cung cấp. Những điều này giúp làm rõ ràng, mặc dù chúng không thêm âm lượng thô:</p>
<ul>
<li><strong>Âm thanh đơn âm:</strong> Cài đặt hệ thống &rarr; Khả năng truy cập Âm thanh &rarr;, bật "Phát âm thanh nổi dưới dạng đơn âm". Nếu thính giác của bạn mạnh hơn ở một tai, điều này sẽ gửi tín hiệu đầy đủ đến cả hai, do đó bạn không bị mất một nửa cuộc đối thoại.</li>
<li><strong>Điều chỉnh cân bằng:</strong> Trong Cài đặt hệ thống &rarr; Sound, kéo cân bằng trái/phải về phía tai khỏe hơn của bạn.</li>
<li><strong>Giảm âm thanh nền:</strong> Giảm âm nhạc và không khí trong các ứng dụng cho phép điều đó, để giọng nói không lấn át nhạc nền.</li>
<li><strong>Chỗ ở tai nghe:</strong> Nếu bạn sử dụng AirPods hoặc Beats, Cài đặt hệ thống &rarr; Khả năng truy cập &rarr; Âm thanh &rarr; Bộ điều chỉnh tai nghe có thể khuếch đại âm thanh nhẹ nhàng và điều chỉnh giọng nói.</li>
</ul>
<p>Những điều này thực sự hữu ích và không tốn kém gì. Nhưng không ai trong số họ tạo ra một ứng dụng yên tĩnh <em>to hơn 100%</em>, và đó thường là vấn đề thực sự.</p>

<h2>Cách tăng tốc một ứng dụng vượt quá 100% với SoundDial</h2>
<p>SoundDial nằm trong thanh menu của bạn và hiển thị thanh trượt cho mọi ứng dụng hiện đang phát âm thanh. Đây là quy trình làm việc giúp ích nhiều nhất cho người khó nghe:</p>
<ul>
<li><strong>Tăng cường ứng dụng bạn đang nghe.</strong> Kéo thanh trượt của nó lên trên 100% để khuếch đại cuộc gọi điện video hoặc podcast yên tĩnh vượt xa những gì ứng dụng cho phép.</li>
<li><strong>Tắt tiếng hoặc giảm bớt mọi thứ khác.</strong> Kéo nhạc, tab trình duyệt hoặc âm thanh thông báo xuống để không có gì cạnh tranh với giọng nói bạn đang cố gắng theo dõi.</li>
<li><strong>Bật tính năng tự động giảm tốc độ.</strong> Khi bạn bắt đầu nói trong một cuộc gọi, SoundDial sẽ tự động giảm âm thanh khác để người bạn đang nói chuyện nghe rõ ràng, sau đó khôi phục âm thanh đó.</li>
<li><strong>Lưu hồ sơ khối lượng.</strong> Tạo hồ sơ "cuộc gọi điện video" trong đó ứng dụng hội nghị của bạn được tăng cường và mọi thứ khác đều im lặng, sau đó chuyển sang ứng dụng đó ngay lập tức thay vì điều chỉnh lại mỗi lần.</li>
<li><strong>Chuyển đổi đầu ra một cách nhanh chóng.</strong> Chuyển đổi giữa các loa, tai nghe hoặc thiết bị được kết nối với thiết bị trợ thính từ cùng một menu mà không cần tìm hiểu sâu về Cài đặt hệ thống.</li>
</ul>
<p>Tính năng tăng tốc là tính năng quan trọng ở đây. Bởi vì nó tăng đầu ra của ứng dụng lên trên mức tối đa vốn có của nó, nên bản ghi âm thì thầm sẽ trở thành thứ bạn thực sự có thể nghe thấy, trong khi phần còn lại của hệ thống vẫn ở mức thoải mái.</p>

<h2>Một từ nhanh chóng về sự biến dạng</h2>
<p>Bất kỳ phần mềm tăng cường nào cũng sẽ khuếch đại bất cứ thứ gì có trong tín hiệu, do đó, việc đẩy quá 100% đối với âm thanh vốn đã lớn có thể dẫn đến hiện tượng cắt bớt. Trong thực tế, tăng cường <em>yên tĩnh</em> nội dung ở mức độ thoải mái, dễ hiểu nghe có vẻ rõ ràng. Bắt đầu một cách khiêm tốn, nâng cao cho đến khi giọng nói rõ ràng và lùi lại nếu nó bắt đầu nghe chói tai. Bảo vệ thính lực còn lại của bạn là vấn đề quan trọng, vì vậy hãy hướng tới sự rõ ràng thay vì âm lượng tối đa.</p>

<h2>SoundDial so sánh với các lựa chọn thay thế như thế nào</h2>
<p>Bạn có một vài lựa chọn và sự trung thực sẽ giúp bạn chọn đúng:</p>
<ul>
<li><strong>SoundSource (Rogue Amoeba, ~$39):</strong> Thực sự cấp độ chuyên nghiệp, với EQ trên mỗi ứng dụng và định tuyến đầu ra. Nếu bạn muốn khắc tần số cho tình trạng mất thính lực, nó rất mạnh mẽ. Nhưng nó có giá cao hơn gấp đôi, yêu cầu tải xuống trực tiếp và cài đặt trình điều khiển thu âm. Đó là nhiều thiết lập và quyền truy cập hệ thống hơn nhiều người mong muốn.</li>
<li><strong>Background Music (miễn phí, mã nguồn mở):</strong> Cung cấp miễn phí âm lượng cho mỗi ứng dụng, nhưng nó thiếu tính năng tăng cường, cấu hình và tự động giảm âm lượng, đồng thời có thể hỏng trên các phiên bản macOS mới hơn vì nó đi sâu vào hệ thống âm thanh.</li>
<li><strong>FineTune (miễn phí, mã nguồn mở):</strong> Một ứng dụng âm lượng thanh menu nhẹ. Tốt cho những điều cơ bản, nhưng không có khả năng tăng cường, cấu hình và giảm âm lượng mà những người nghe khó nghe dựa vào.</li>
<li><strong>eqMac (miễn phí):</strong> Một bộ cân bằng với một bộ tăng cường. Hữu ích cho việc định hình âm thanh, nhưng nó được xây dựng dựa trên EQ thay vì cấu hình và phối âm rõ ràng cho mỗi ứng dụng.</li>
</ul>
<p>Ở đâu <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> nổi bật là sự cân bằng giữa giá cả, độ an toàn và các tính năng cụ thể quan trọng ở đây. Bởi vì nó có trên Mac App Store nên nó đã được Apple đánh giá và đóng hộp cát, cài đặt sạch sẽ mà không cần DMG và không cần trình điều khiển âm thanh hoặc phần mở rộng hệ thống. Bạn nhận được tính năng tăng cường, tắt tiếng, cấu hình âm lượng và tự động giảm âm lượng cho mỗi ứng dụng trong một lần mua hàng trị giá €14,99 mà không cần đào sâu vào ngăn xếp âm thanh macOS.</p>

<h2>Điểm mấu chốt</h2>
<p>Trước tiên, hãy thiết lập các tùy chọn trợ năng macOS miễn phí, chúng rất đáng có. Nhưng nếu vấn đề thực sự là một ứng dụng quá yên tĩnh, bạn cần một công cụ có thể đẩy một ứng dụng vượt quá 100% và làm yên tĩnh phần còn lại. Đó là toàn bộ mục đích của việc tăng cường cho mỗi ứng dụng và macOS không tự thực hiện được điều đó.</p>

<p>Bạn đã sẵn sàng thực sự nghe Mac của mình chưa? <a href="https://apps.apple.com/app/id6772792641">Nhận SoundDial trên Mac App Store</a> với giá €14,99, hãy tăng cường ứng dụng bạn cần và cho phép tính năng tự động giảm âm lượng cũng như cấu hình giúp giọng nói luôn rõ ràng.</p>`,
  },
  "boost-quiet-apps-mac": {
    slug: "boost-quiet-apps-mac",
    title: "Cách tăng cường ứng dụng im lặng trên Mac (Âm lượng tối đa trước đây)",
    description: "Một ứng dụng quá yên tĩnh ngay cả ở mức 100%? Chỉ tăng cường ứng dụng đó vượt quá mức tối đa trên Mac với SoundDial, bộ trộn âm lượng cho mỗi ứng dụng. Đây là cách khắc phục nhanh nhất và các lựa chọn thay thế.",
    date: "2026-07-23",
    readTime: "Đọc trong 6 phút",
    content: `<p>Nếu một ứng dụng quá yên tĩnh ngay cả ở mức âm lượng tối đa thì cách khắc phục đáng tin cậy nhanh nhất là <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, bộ trộn âm lượng trên mỗi ứng dụng trên thanh menu dành cho macOS. Nó cung cấp cho mọi ứng dụng thanh trượt riêng cùng với âm lượng <strong>tăng cường</strong> đẩy một ứng dụng vượt quá 100%, do đó, cuộc gọi điện video yên tĩnh hoặc tab trình duyệt sẽ to hơn mà không cần chạm vào âm lượng hệ thống của bạn. Đây là ứng dụng trị giá €14,99 một lần trên Mac App Store.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial - Cách tăng cường ứng dụng yên tĩnh trên Mac (Âm lượng tối đa trước đây)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Tại sao một ứng dụng lại im lặng ngay cả khi ở mức 100%</h2>
<p>macOS chỉ có một tập chính. Khi bạn nâng nó lên, mọi thứ sẽ cùng nhau to hơn. Tuy nhiên, mỗi ứng dụng cũng phát ra âm thanh ở cấp độ bên trong của riêng nó và mức đó rất khác nhau. Một clip YouTube được làm chủ một cách lặng lẽ, một người gọi Zoom có mic kém, một trò chơi có khả năng hòa âm hội thoại thấp hoặc một tab trình duyệt có luồng phát nhẹ đều có thể kém xa mọi thứ khác, ngay cả với Mac của bạn ở mức tối đa.</p>
<p>Vấn đề thực sự: macOS có <strong>không có bộ trộn âm lượng tích hợp cho mỗi ứng dụng</strong>. Windows đã có một cái trong nhiều năm (Bộ trộn âm lượng, nhấp chuột phải vào biểu tượng loa). Trên Mac, không có cách riêng nào để bật một ứng dụng trong khi vẫn để các ứng dụng còn lại và chắc chắn không có cách nào để khuếch đại một ứng dụng duy nhất <em>ở trên</em> mức tối đa bình thường của nó. Đó là khoảng trống bạn đang chạm tới.</p>

<h2>Cách khắc phục nhanh nhất: chỉ tăng cường một ứng dụng đó</h2>
<p>Trình trộn trên mỗi ứng dụng giải quyết vấn đề này bằng cách tự chèn vào giữa ứng dụng và đầu ra của bạn, do đó, trình trộn có thể tăng hoặc giảm từng luồng một cách độc lập và tăng cường luồng trên 100%. Với <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, dòng chảy ngắn:</p>
<ul>
<li>Cài đặt từ Mac App Store và mở nó. Nó nằm trong thanh menu của bạn chứ không phải trong cửa sổ nổi.</li>
<li>Nhấp vào biểu tượng thanh menu để xem thanh trượt cho mọi ứng dụng hiện đang phát âm thanh.</li>
<li>Tìm ứng dụng yên tĩnh và kéo thanh trượt của nó vượt quá 100% để áp dụng chế độ tăng cường. Nó chỉ khuếch đại ứng dụng đó.</li>
<li>Để lại mọi thứ khác ở đó. Âm lượng hệ thống của bạn và các ứng dụng khác không bị ảnh hưởng.</li>
</ul>
<p>Vì mức tăng tùy theo ứng dụng nên bạn có thể đẩy cuộc gọi video nhẹ nhàng lên mức thoải mái trong khi vẫn giữ cho âm nhạc hoặc thông báo không bị chói tai. Đó là điều cốt lõi mà các điều khiển macOS tích hợp không thể làm được.</p>

<h2>Một lưu ý về tăng và cắt</h2>
<p>Boost thực sự hữu ích, nhưng nó chỉ là sự khuếch đại chứ không phải phép thuật. Nếu âm thanh gốc của ứng dụng rất nhỏ hoặc đã bị méo thì việc vặn mạnh âm thanh có thể gây ra tình trạng cắt bớt hoặc làm cho tiếng rít trong nền trở nên rõ ràng hơn. Trong thực tế, mức tăng vừa phải sẽ khắc phục được phần lớn các tình huống "cuộc gọi này quá yên tĩnh". Đẩy nó lên cho đến khi ứng dụng trở nên thoải mái thay vì đập nó lên trần nhà và bạn sẽ giữ được âm thanh rõ ràng.</p>

<h2>Ngoài việc tăng cường: điều gì khác giúp ích</h2>
<p>Sau khi bạn có quyền kiểm soát theo từng ứng dụng, một số tính năng sẽ giúp vấn đề về ứng dụng im lặng biến mất hoàn toàn:</p>
<ul>
<li><strong>Hồ sơ khối lượng</strong> — lưu thiết lập (ví dụ: "tăng Zoom, hạ Spotify, tắt tiếng Slack") và gọi lại thiết lập đó chỉ bằng một cú nhấp chuột thay vì kéo lại thanh trượt mỗi cuộc họp.</li>
<li><strong>Tự động giảm tốc độ</strong> — tự động nhúng các ứng dụng khác khi ứng dụng đã chọn phát, nhờ đó, cuộc gọi được tăng cường sẽ được nghe rõ ràng qua âm thanh nền.</li>
<li><strong>Tắt tiếng trên mỗi ứng dụng</strong> — tắt tiếng một ứng dụng ồn ào mà không tạm dừng bất kỳ ứng dụng nào khác.</li>
<li><strong>Chuyển đổi đầu ra nhanh chóng</strong> — chuyển đổi giữa loa, tai nghe hoặc giao diện bên ngoài từ cùng một menu.</li>
</ul>

<h2>Còn các lựa chọn thay thế miễn phí và chuyên nghiệp thì sao?</h2>
<p>Bạn có các lựa chọn và sự trung thực rất quan trọng ở đây, vì vậy đây là bối cảnh thực sự.</p>
<p><strong>SoundSource</strong> (Rogue Amoeba) là lựa chọn cấp độ chuyên nghiệp với mức giá khoảng 39 USD. Nó thực hiện âm lượng trên mỗi ứng dụng cộng với EQ trên mỗi ứng dụng và định tuyến đầu ra đầy đủ, nhiều năng lượng hơn hầu hết mọi người cần. Sự đánh đổi: chi phí cao hơn gấp đôi, đây là bản tải xuống trực tiếp chứ không phải App Store và nó cài đặt trình điều khiển thu âm để thực hiện công việc của mình. Nếu bạn muốn bộ công cụ dành cho kỹ sư âm thanh thì thật tuyệt vời. Nếu bạn chỉ muốn một ứng dụng to hơn thì điều đó là quá mức cần thiết.</p>
<p><strong>Background Music</strong> là nguồn mở và miễn phí, đồng thời có thể thực hiện khối lượng cơ bản cho mỗi ứng dụng. Nhưng đó là một dự án cộng đồng có lịch sử đột phá trên các phiên bản macOS mới hơn và nó thiếu khả năng tăng tốc 100%, cấu hình và tính năng tự động giảm tốc. Thật tuyệt nếu yêu cầu duy nhất là miễn phí và bạn không ngại thỉnh thoảng bị hỏng.</p>
<p><strong>FineTune</strong> là một ứng dụng thanh menu mã nguồn mở miễn phí và <strong>eqMac</strong> là một EQ miễn phí và tăng cường hệ thống. Cả hai đều đáng để thử nếu ngân sách của bạn bằng không. Chỉ cần biết rằng họ được cộng đồng duy trì, tập trung vào EQ hoặc quản lý từng ứng dụng nhẹ nhàng hơn và không gói các hồ sơ cộng với việc bỏ qua trong một gói bóng bẩy.</p>
<p>Ở đâu <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> đất: đó là con đường giữa. Rẻ hơn SoundSource, mạnh mẽ hơn và đáng tin cậy hơn các công cụ miễn phí và nó nằm trên <strong>Mac App Store</strong>, có nghĩa là đã được Apple xem xét, đóng hộp cát và cài đặt sạch sẽ với <strong>không có DMG và không có trình điều khiển hoặc tiện ích mở rộng âm thanh</strong> để bắt vít vào hệ thống của bạn. Đối với hầu hết mọi người, đề xuất trung thực rất đơn giản: nếu bạn muốn bản sửa lỗi ít rắc rối nhất cũng mang lại cho bạn khả năng tăng cường, lập hồ sơ và tự động giảm tốc độ, thì đó là giá trị tốt nhất ở mức €14,99 một lần.</p>

<h2>Trả lời nhanh, trình bày lại</h2>
<blockquote>Để làm cho một ứng dụng Mac to hơn mức tối đa, hãy sử dụng bộ trộn âm lượng cho mỗi ứng dụng có tăng tốc. Mở SoundDial từ thanh menu, tìm thanh trượt của ứng dụng im lặng và kéo nó qua 100%. Chỉ có ứng dụng đó trở nên to hơn.</blockquote>

<p>Hãy dừng việc sử dụng thanh trượt âm lượng duy nhất cho toàn bộ Mac của bạn. Nhận <a href="https://apps.apple.com/app/id6772792641">SoundDial trên Mac App Store</a> với giá €14,99 một lần, hãy đẩy ứng dụng yên tĩnh đó vượt quá giới hạn trong vài giây và lưu hồ sơ để bạn không bao giờ phải nghĩ về nó nữa.</p>`,
  },
  "amplify-quiet-video-podcast-audio-mac": {
    slug: "amplify-quiet-video-podcast-audio-mac",
    title: "Cách khuếch đại video và podcast yên tĩnh trên Mac của bạn",
    description: "Một số video, podcast và bài giảng của YouTube quá yên tĩnh ngay cả ở mức 100%. Dưới đây là cách tăng âm lượng trên mỗi ứng dụng vượt quá mức tối đa trên macOS bằng SoundDial.",
    date: "2026-07-23",
    readTime: "Đọc trong 6 phút",
    content: `<p>Cách khắc phục nhanh nhất, đáng tin cậy là <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, bộ trộn thanh menu Mac App Store cung cấp cho mọi ứng dụng thanh trượt âm lượng riêng và một nút thực sự <strong>tăng cường</strong> vượt quá 100%. Mở trình duyệt hoặc trình phát podcast của bạn, kéo thanh trượt lên trên mức tối đa và video hoặc bài giảng yên tĩnh sẽ ngay lập tức to hơn — không cần trình điều khiển, không cần khởi động lại.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial - Cách khuếch đại video và podcast yên tĩnh trên Mac của bạn" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Tại sao một số video và podcast lại quá yên tĩnh</h2>
<p>Bạn tăng tốc độ Mac của mình lên 100% và cuộc phỏng vấn vẫn chỉ là lời thì thầm. Đây không phải là sự tưởng tượng của bạn. Âm thanh được làm chủ ở các mức âm lượng cực kỳ khác nhau — một hội thảo trên web được ghi trên mic máy tính xách tay, một podcast độc lập yên tĩnh hoặc một bài giảng cũ tải lên có thể thấp hơn 15–20 dB so với video YouTube được sản xuất chuyên nghiệp. Âm lượng hệ thống của bạn đã đạt mức tối đa nên không còn khoảng trống nào nữa.</p>
<p>Đây là điều đáng chú ý: macOS có <strong>không có bộ trộn âm lượng tích hợp cho mỗi ứng dụng</strong>. Windows đã có một chiếc trong nhiều năm (Bộ trộn âm lượng trong khay hệ thống), nhưng trên Mac, các phím âm lượng sẽ di chuyển một cấp độ chung cho mọi thứ. Không có cách tự nhiên nào để nói "chỉ làm cho tab trình duyệt này to hơn" - chưa nói đến việc đẩy một ứng dụng vượt quá 100%.</p>

<h2>Cách khắc phục thực sự: tăng âm lượng trên mỗi ứng dụng</h2>
<p>Để làm cho một nguồn yên tĩnh to hơn mức mà loa của bạn thường cho phép, bạn cần có phần mềm áp dụng mức khuếch đại cho <em>ứng dụng đó cụ thể</em> và có thể khuếch đại vượt mức trần 100%. Đó chính xác là những gì trình trộn trên mỗi ứng dụng có tính năng tăng cường thực hiện.</p>
<p>Với <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, mọi ứng dụng đang chạy sẽ hiển thị trong danh sách thanh menu với thanh trượt riêng. Trượt ứng dụng yên tĩnh lên tới 150% hoặc 200% và âm thanh sẽ được khuếch đại theo thời gian thực. Vì mức tăng được thực hiện cho mỗi ứng dụng nên mọi thứ khác — nhạc, thông báo, cuộc gọi trong cửa sổ khác — vẫn ở mức bình thường. Bạn sẽ không làm nổ tung toàn bộ hệ thống của mình để nghe một podcast nhẹ.</p>
<blockquote>Âm lượng toàn cầu hỏi "Mac lớn đến mức nào?" Bộ trộn trên mỗi ứng dụng sẽ hỏi "độ ồn như thế nào <em>cái này</em> ứng dụng?" — đó là câu hỏi thực sự quan trọng khi một video im lặng và các video còn lại vẫn ổn.</blockquote>

<h2>Cách tăng cường video hoặc podcast yên tĩnh, từng bước</h2>
<ul>
<li><strong>Cài đặt SoundDial</strong> từ Mac App Store. Nó được đóng hộp cát và được Apple đánh giá nên cài đặt dễ dàng như mọi ứng dụng khác — không cần tải xuống riêng, không có trình điều khiển âm thanh, không cần cấp phép.</li>
<li><strong>Bắt đầu chơi</strong> video yên tĩnh, tập podcast hoặc bài giảng trong bất kỳ ứng dụng nào bạn sử dụng - Safari, Chrome, ứng dụng khách podcast, VLC.</li>
<li><strong>Nhấp vào biểu tượng SoundDial</strong> trong thanh menu của bạn. Bạn sẽ thấy một thanh trượt cho từng ứng dụng hiện đang phát ra âm thanh.</li>
<li><strong>Kéo thanh trượt của ứng dụng đó lên trên 100%</strong> — trước tiên hãy thử ở mức 150%, sau đó đẩy cao hơn nếu vẫn còn quá mềm. Sự thay đổi là ngay lập tức.</li>
<li><strong>Để lại mọi thứ khác một mình.</strong> Chỉ ứng dụng bạn tăng cường mới to hơn; hệ thống của bạn vẫn cân bằng.</li>
</ul>
<p>Nếu bạn thấy mình đang quảng cáo các ứng dụng giống nhau mỗi ngày — chẳng hạn như trình phát podcast và trình duyệt của bạn — bạn có thể lưu thiết lập đó dưới dạng <strong>hồ sơ khối lượng</strong> và gọi lại nó chỉ bằng một cú nhấp chuột thay vì phải điều chỉnh lại mỗi lần.</p>

<h2>Một lời cảnh báo về việc tăng cường</h2>
<p>Khuếch đại 100% quá khứ sẽ tăng thêm mức tăng và mức tăng có giới hạn. Nhấn mạnh bản ghi âm rất yên tĩnh, chất lượng thấp và bạn có thể nghe thấy tiếng cắt hoặc biến dạng - đó là nguồn hết tín hiệu sạch chứ không phải lỗi trong ứng dụng. Tăng âm lượng cho đến khi bạn có thể nghe thấy thoải mái, sau đó giảm âm lượng nếu âm thanh bắt đầu chói tai. Trên loa máy tính xách tay tích hợp, khả năng tăng âm lượng cực lớn cũng có thể khiến trình điều khiển căng thẳng, vì vậy, bạn có thể thực hiện dễ dàng hơn so với tai nghe tốt hoặc loa ngoài.</p>

<h2>Còn các tùy chọn miễn phí hoặc tích hợp thì sao?</h2>
<p>Bạn có những lựa chọn thay thế và bạn nên thành thật về chúng:</p>
<ul>
<li><strong>Âm lượng hệ thống + thanh trượt cấp ứng dụng.</strong> Một số trình phát (VLC, một số trình duyệt thông qua tiện ích mở rộng) cho phép bạn tăng cường âm thanh của riêng họ. Tốt thôi nếu bạn chỉ cần nó trong một ứng dụng — nhưng bạn gặp khó khăn khi định cấu hình từng ứng dụng riêng biệt, không có quyền kiểm soát thống nhất và không có cấu hình.</li>
<li><strong>eqMac</strong> là một EQ và tăng cường miễn phí. Nó có thể tăng âm lượng trên toàn hệ thống, nhưng nó là một công cụ toàn cầu, không phải là một công cụ trộn rõ ràng cho mỗi ứng dụng và nó hoạt động ở cấp độ toàn bộ đầu ra.</li>
<li><strong>Background Music</strong> là nguồn mở và miễn phí và cung cấp số lượng cho mỗi ứng dụng. Nhưng nó dựa vào thiết lập thu âm có thể bị hỏng trên các phiên bản macOS mới hơn và nó thiếu tính năng tăng cường, cấu hình và tự động giảm âm thanh chuyên dụng.</li>
<li><strong>FineTune</strong> là một ứng dụng thanh menu mã nguồn mở miễn phí — một tùy chọn nhẹ nếu bạn muốn những điều cơ bản và không bận tâm đến phần mềm do cộng đồng duy trì.</li>
<li><strong>SoundSource</strong> của Rogue Amoeba (~ $ 39) là hạng nặng cấp độ chuyên nghiệp: EQ trên mỗi ứng dụng, định tuyến đầu ra, hoạt động. Nó cũng yêu cầu tải xuống và trình điều khiển thu âm và có giá cao hơn gấp đôi SoundDial. Quá mức cần thiết nếu tất cả những gì bạn muốn là làm cho âm thanh yên tĩnh to hơn.</li>
</ul>

<h2>Tại sao SoundDial là sự lựa chọn thiết thực</h2>
<p>SoundDial nằm ở vị trí thuận lợi cho vấn đề chính xác này. Của nó <strong>€14,99 một lần</strong> — không cần đăng ký — và nó tồn tại trên <strong>Mac App Store</strong>, có nghĩa là nó được đóng hộp cát, được Apple xem xét và cài đặt mà không cần bất kỳ phần mở rộng hệ thống hoặc DMG nào đáng tin cậy. Bạn nhận được mức tăng cường cho mỗi ứng dụng mà bạn thực sự mong muốn, cùng với cấu hình, tắt tiếng trên mỗi ứng dụng, chuyển đổi đầu ra nhanh và <strong>tự động né tránh</strong> giúp loại bỏ các ứng dụng khác khi bạn cần tập trung vào một ứng dụng. Nó thực hiện công việc ồn ào một cách đơn giản và làm tốt phần còn lại.</p>

<p><strong>Bạn mệt mỏi vì phải căng thẳng để nghe những video và podcast yên tĩnh?</strong> <a href="https://apps.apple.com/app/id6772792641">Nhận SoundDial trên Mac App Store</a> với giá €14,99 và cung cấp âm lượng riêng cho mỗi ứng dụng — với khả năng tăng cường khả năng nghe rõ mọi thứ.</p>`,
  },
  "set-different-volume-for-each-app-mac": {
    slug: "set-different-volume-for-each-app-mac",
    title: "Cách đặt âm lượng khác nhau cho từng ứng dụng trên Mac",
    description: "macOS không có bộ trộn âm lượng tích hợp cho mỗi ứng dụng. Dưới đây là cách đặt mức âm lượng độc lập, liên tục cho từng ứng dụng trên Mac bằng SoundDial và các lựa chọn thay thế.",
    date: "2026-07-23",
    readTime: "Đọc trong 5 phút",
    content: `<p>macOS không có cách tích hợp sẵn để đặt âm lượng khác nhau cho từng ứng dụng, vì vậy bạn cần có bộ trộn âm lượng trên thanh menu. Cách khắc phục nhanh nhất, đáng tin cậy nhất là <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, một ứng dụng Mac App Store cung cấp cho mọi ứng dụng thanh trượt âm lượng riêng, tắt tiếng trên mỗi ứng dụng và tính năng tăng tốc giúp đẩy các ứng dụng yên tĩnh vượt quá 100%. Đặt cấp độ của bạn một lần và chúng sẽ hoạt động.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial - Cách đặt âm lượng khác nhau cho từng ứng dụng trên Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Tại sao Mac không có điều khiển âm lượng cho mỗi ứng dụng</h2>
<p>Nếu bạn đã chuyển từ Windows, có thể bạn đã tìm kiếm phần tương đương của Bộ trộn âm lượng Windows, bảng điều khiển nhỏ nơi mỗi ứng dụng có thanh trượt riêng. Nó không có ở đó. macOS chỉ cung cấp một khối hệ thống toàn cầu. Cho dù đó là video YouTube, cuộc gọi Zoom, Spotify hay trò chơi, tất cả đều có chung cấp độ chính.</p>
<p>Điều đó ổn cho đến khi nó không như vậy. Trò chuyện Discord át đi âm nhạc của bạn. Quảng cáo trên trình duyệt sẽ phát ở mức âm lượng tối đa trong khi podcast của bạn phát lặng lẽ bên dưới. Trò chơi của bạn ù tai nhưng cuộc gọi thoại ở chế độ nền lại quá nhỏ. "Giải pháp" duy nhất mà Apple cung cấp cho bạn là mở từng ứng dụng và điều chỉnh âm lượng bên trong theo cách thủ công, nếu ứng dụng đó thậm chí có một ứng dụng và làm lại mỗi phiên.</p>
<p>Để có được quyền kiểm soát thực sự trên mỗi ứng dụng, bạn cần một tiện ích nhỏ nằm giữa ứng dụng và thiết bị đầu ra của bạn. Dưới đây là cách thực hiện đúng cách, cùng với những ghi chú trung thực về các lựa chọn thay thế.</p>

<h2>Cách nhanh nhất: SoundDial (Mac App Store)</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> nằm trong thanh menu của bạn và liệt kê mọi ứng dụng hiện đang phát âm thanh. Mỗi người có một thanh trượt độc lập. Đây là toàn bộ quy trình làm việc:</p>
<ul>
<li><strong>Cài đặt từ Mac App Store.</strong> Nó đã được Apple đánh giá và đóng hộp cát, do đó không có DMG, không có trình điều khiển âm thanh cũng như không có phần mở rộng kernel hoặc hệ thống nào để phê duyệt. Nó cài đặt giống như bất kỳ ứng dụng bình thường nào và có thể gỡ bỏ theo cách tương tự.</li>
<li><strong>Nhấp vào biểu tượng thanh menu.</strong> Bạn sẽ thấy thanh trượt cho từng ứng dụng đang hoạt động cùng với điều khiển chính.</li>
<li><strong>Kéo để đặt cấp độ.</strong> Tắt Discord xuống, nâng Spotify lên, tắt tiếng hoàn toàn ứng dụng của tab trình duyệt ồn ào chỉ bằng một cú nhấp chuột.</li>
<li><strong>Tăng cường các ứng dụng yên tĩnh.</strong> Nếu một ứng dụng quá mềm ngay cả ở mức 100%, hãy đẩy nó lên trên 100% bằng tính năng tăng cường cho mỗi ứng dụng.</li>
<li><strong>Lưu một hồ sơ.</strong> Lưu trữ danh sách kết hợp "chơi game", "cuộc gọi công việc" hoặc "âm nhạc" của bạn và chuyển đổi giữa chúng ngay lập tức thay vì kéo lại thanh trượt hàng ngày.</li>
</ul>
<p>Hai tính năng đáng được nhắc tới vì chúng giải quyết được những tình huống khó chịu nhất:</p>
<ul>
<li><strong>Tự động giảm tốc độ</strong> tự động hạ thấp các ứng dụng khác khi một ứng dụng đã chọn phát, do đó âm nhạc của bạn sẽ giảm xuống khi có cuộc gọi đến và quay lại sau đó mà không cần phải thao tác thủ công.</li>
<li><strong>Chuyển đổi đầu ra nhanh chóng</strong> cho phép bạn chuyển đổi giữa tai nghe và loa từ cùng một menu mà không cần đi sâu vào Cài đặt hệ thống.</li>
</ul>
<p>Vì các cấp độ được ghi nhớ trên mỗi ứng dụng và được lưu vào hồ sơ nên đây là phần mà hầu hết mọi người thực sự muốn: bạn đặt nó một lần và nó sẽ <em>ở lại</em> thiết lập.</p>

<h2>Các lựa chọn thay thế miễn phí và trả phí, được so sánh một cách trung thực</h2>
<p>SoundDial không phải là lựa chọn duy nhất và tùy thuộc vào nhu cầu của bạn, một công cụ miễn phí có thể là đủ. Đây là một bản tóm tắt công bằng.</p>

<h2>SoundSource (Rogue Amoeba)</h2>
<p>SoundSource là hạng nặng chuyên nghiệp. Cùng với âm lượng trên mỗi ứng dụng, nó còn có EQ trên mỗi ứng dụng và định tuyến đầu ra đầy đủ, do đó bạn có thể gửi một ứng dụng tới tai nghe và một ứng dụng khác tới loa. Nó thực sự xuất sắc. Sự cân bằng: nó có giá khoảng 39 đô la và đây không phải là bản cài đặt App Store sạch, đây là bản tải xuống trực tiếp yêu cầu thêm trình điều khiển thu âm vào hệ thống của bạn. Nếu bạn là chuyên gia âm thanh cần EQ và định tuyến thì điều đó rất đáng giá. Nếu bạn chỉ muốn mỗi ứng dụng có âm lượng phù hợp thì đó là nhiều công cụ và nhiều thiết lập hơn mức bạn cần.</p>

<h2>Background Music (mã nguồn mở, miễn phí)</h2>
<p>Background Music là một ứng dụng mã nguồn mở miễn phí cung cấp khối lượng cho mỗi ứng dụng và tính năng tự động tạm dừng. Điều hấp dẫn là độ tin cậy: nó cài đặt một thiết bị âm thanh ảo và có lịch sử bị hỏng trên các bản phát hành macOS mới hơn, đôi khi yêu cầu cài đặt lại hoặc sửa lỗi sau khi cập nhật. Nó cũng thiếu khả năng tăng tốc, lưu cấu hình và tính năng tự động giảm tốc thực sự. Tuyệt vời nếu bạn muốn miễn phí và không ngại bảo trì thường xuyên.</p>

<h2>FineTune và eqMac</h2>
<p>FineTune là một ứng dụng thanh menu mã nguồn mở, miễn phí, một điểm khởi đầu nhẹ nhàng. eqMac là bộ cân bằng miễn phí với bộ tăng cường trên toàn hệ thống, nhắm nhiều hơn vào EQ và mức tăng tổng thể hơn là cung cấp cho mỗi ứng dụng thanh trượt liên tục của riêng nó. Cả hai đều đáng để thử nếu nhu cầu của bạn hẹp, nhưng không tập trung vào quy trình làm việc "khối lượng khác nhau cho mỗi ứng dụng, được lưu dưới dạng hồ sơ".</p>

<h2>Bạn nên chọn cái nào?</h2>
<ul>
<li><strong>Bạn muốn nó hoạt động trơn tru, có cấu hình và tự động giảm tải?</strong> SoundDial với giá €14,99 một lần, từ App Store, không cần cài đặt trình điều khiển.</li>
<li><strong>Bạn cần định tuyến âm thanh và EQ trên mỗi ứng dụng và không quan tâm đến giá cả hoặc trình điều khiển?</strong> SoundSource.</li>
<li><strong>Muốn miễn phí và có ổn không khi mày mò khi macOS cập nhật?</strong> Background Music, FineTune hoặc eqMac.</li>
</ul>
<p>Ưu điểm thực sự của SoundDial là sự kết hợp: âm lượng độc lập, tắt tiếng và tăng tốc cho mọi ứng dụng, được lưu vào các cấu hình có thể chuyển đổi, với tính năng giảm tải tự động, tất cả đều có trong bản tải xuống App Store đóng hộp cát mà bạn có thể tin cậy và gỡ cài đặt chỉ bằng một cú nhấp chuột, với mức phí 14,99 € một lần thay vì đăng ký.</p>

<blockquote>Không có trình điều khiển, không có phần mở rộng, không có DMG. Đặt âm lượng của mỗi ứng dụng một lần, lưu nó dưới dạng hồ sơ và để tính năng tự động giảm âm lượng xử lý phần còn lại.</blockquote>

<p>Sẵn sàng cung cấp cho mỗi ứng dụng khối lượng riêng của nó? <a href="https://apps.apple.com/app/id6772792641">Nhận SoundDial trên Mac App Store</a> và thiết lập hỗn hợp hoàn hảo của bạn trong khoảng một phút.</p>`,
  },
  "make-one-app-quieter-than-the-rest-mac": {
    slug: "make-one-app-quieter-than-the-rest-mac",
    title: "Làm cho một ứng dụng yên tĩnh hơn mọi thứ khác trên Mac",
    description: "Một ứng dụng ồn ào lấn át phần còn lại trên Mac của bạn? Đây là cách nhanh nhất, đáng tin cậy để giảm âm lượng của một ứng dụng mà không cần chạm vào các ứng dụng khác.",
    date: "2026-07-23",
    readTime: "Đọc trong 5 phút",
    content: `<p>Để tắt một ứng dụng trong khi mọi ứng dụng khác vẫn được giữ nguyên, hãy sử dụng <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, bộ trộn âm lượng trên mỗi ứng dụng trên thanh menu dành cho macOS. Mở nó, tìm ứng dụng lớn trong danh sách và kéo thanh trượt của nó xuống. Ứng dụng đó sẽ yên tĩnh hơn ngay lập tức trong khi âm nhạc, cuộc gọi và âm thanh khác của bạn vẫn giữ nguyên mức độ riêng. Đó là cách khắc phục nhanh nhất, đáng tin cậy nhất.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Làm cho một ứng dụng yên tĩnh hơn mọi ứng dụng khác trên Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Tại sao macOS lại khiến việc này trở nên khó khăn đến vậy</h2>

<p>Đây là sự thật đáng thất vọng: macOS không có bộ trộn âm lượng tích hợp sẵn cho mỗi ứng dụng. Windows đã có một cái trong nhiều năm (nhấp chuột phải vào biểu tượng âm lượng, mở Bộ trộn âm lượng, xong), nhưng trên Mac, các phím âm lượng và thanh trượt thanh menu chỉ điều khiển một thứ: đầu ra chính. Tắt nó xuống và mọi thứ cùng nhau trở nên yên tĩnh hơn. Bật nó lên và ứng dụng ồn ào vẫn to, chỉ to hơn cùng với phần còn lại.</p>

<p>Vì vậy, khi hiệu ứng âm thanh của trò chơi đang bùng nổ, tab trình duyệt đang tự động phát quảng cáo hoặc các thông báo liên tục xuất hiện trên podcast của bạn, các tùy chọn gốc duy nhất của bạn sẽ rất vụng về: tắt tiếng toàn bộ hệ thống, đi sâu vào cài đặt âm lượng của từng ứng dụng (nếu thậm chí có một ứng dụng) hoặc thoát khỏi hoàn toàn kẻ phạm tội. Không có điều nào trong số đó cho phép bạn nói đơn giản "làm cho ứng dụng này yên tĩnh hơn và để mọi thứ khác yên tĩnh hơn."</p>

<h2>Cách khắc phục nhanh: bộ trộn âm lượng cho mỗi ứng dụng</h2>

<p>Bộ trộn âm lượng cho mỗi ứng dụng cung cấp cho mọi ứng dụng đang chạy thanh trượt độc lập của riêng nó. Đó chính xác là sự kiểm soát mà bạn đang thiếu. Với <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> nó trông như thế này:</p>

<ul>
<li><strong>Mở trình trộn thanh menu.</strong> Nhấp vào biểu tượng SoundDial và bạn sẽ thấy danh sách trực tiếp của mọi ứng dụng hiện đang phát âm thanh.</li>
<li><strong>Tìm cái ồn ào.</strong> Trò chơi, trình duyệt, cuộc gọi điện video, âm thanh thông báo, bất cứ thứ gì đang nhấn chìm phần còn lại.</li>
<li><strong>Kéo thanh trượt của nó xuống.</strong> Đặt nó ở mức 40%, 20%, bất cứ nơi nào bạn cảm thấy cân bằng. Sự thay đổi diễn ra ngay lập tức và nó chỉ ảnh hưởng đến ứng dụng đó.</li>
<li><strong>Để lại mọi thứ khác một mình.</strong> Trình phát nhạc, cuộc gọi, các tab khác của bạn, tất cả đều giữ nguyên âm lượng bạn đặt cho chúng.</li>
</ul>

<p>Bạn cũng có thể tắt tiếng hoàn toàn một ứng dụng chỉ bằng một cú nhấp chuột trong khi các ứng dụng khác tiếp tục phát hoặc tăng mức ứng dụng yên tĩnh lên trên 100% nếu ứng dụng đó quá mềm. Không cần khởi động lại ứng dụng, không cần duyệt menu.</p>

<h2>Những trường hợp phổ biến giúp bạn tiết kiệm</h2>

<ul>
<li><strong>Một trò chơi ồn ào trên nền nhạc.</strong> Hãy thả trò chơi xuống mức thoải mái và giữ danh sách phát của bạn ở mức âm lượng tối đa bên dưới.</li>
<li><strong>Quảng cáo trên trình duyệt và video tăng đột biến.</strong> Ghim trình duyệt của bạn xuống thấp hơn để tính năng tự động phát bất ngờ không bao giờ làm bạn khó chịu.</li>
<li><strong>Thông báo vang lên qua cuộc gọi hoặc podcast.</strong> Tắt ứng dụng nặng thông báo mà không tắt tiếng âm thanh mà bạn thực sự quan tâm.</li>
<li><strong>Cuộc gọi video yên tĩnh dưới phương tiện truyền thông ồn ào.</strong> Thay vì giảm âm lượng ứng dụng xuống, hãy tăng âm lượng cuộc gọi lên trên 100% để bạn có thể nghe rõ mọi người.</li>
</ul>

<h2>Đặt nó một lần với cấu hình âm lượng và tự động giảm âm lượng</h2>

<p>Sửa một ứng dụng ồn ào là điều tốt nhưng có thể bạn muốn ứng dụng đó được cố định. SoundDial có hai tính năng giúp tính năng này tồn tại vĩnh viễn:</p>

<p><strong>Hồ sơ khối lượng</strong> cho phép bạn lưu một tập hợp các cấp độ cho mỗi ứng dụng và gọi lại chúng chỉ bằng một cú nhấp chuột. Xây dựng hồ sơ "Trò chơi" trong đó trò chơi chiếm tỷ lệ 30% và âm nhạc ở mức 100%, đồng thời hồ sơ "Công việc" nơi các cuộc gọi được tăng cường và mọi thứ khác được giảm bớt. Chuyển đổi ngữ cảnh mà không cần kéo lại thanh trượt mỗi lần.</p>

<p><strong>Tự động giảm tốc độ</strong> tự động hạ thấp các ứng dụng khác khi một ứng dụng đã chọn phát, sau đó đưa chúng trở lại sau đó, do đó, một ứng dụng ồn ào sẽ không bao giờ chiếm đoạt hoàn toàn âm thanh của bạn ngay từ đầu. Giữa các cấu hình, giảm âm lượng và chuyển đổi đầu ra nhanh chóng (chuyển đổi giữa loa và tai nghe mà không cần mở Cài đặt hệ thống), bạn đặt số dư một lần và ngừng giữ âm lượng.</p>

<h2>SoundDial so sánh với các lựa chọn thay thế như thế nào</h2>

<p>Có nhiều cách khác để nhận khối lượng mỗi ứng dụng trên Mac. Đây là một cái nhìn trung thực:</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba, ~$39)</strong> thực sự là cấp độ chuyên nghiệp: EQ trên mỗi ứng dụng và định tuyến đầu ra đầy đủ bên cạnh điều khiển âm lượng. Nhưng nó có giá cao hơn gấp đôi và cần tải xuống riêng cộng với trình điều khiển thu âm. Nếu bạn muốn có một bộ công cụ cấp studio thì nó thật tuyệt vời. Nếu bạn chỉ muốn tắt một ứng dụng thì nó còn hơn những gì bạn cần.</li>
<li><strong>Background Music</strong> là mã nguồn mở và miễn phí, điều này thật tuyệt vời, nhưng nó có thể bị hỏng trên các phiên bản macOS mới hơn và nó thiếu tính năng tăng âm lượng, cấu hình và tính năng tự động giảm âm lượng.</li>
<li><strong>FineTune</strong> là một ứng dụng thanh menu mã nguồn mở miễn phí và <strong>eqMac</strong> là một EQ miễn phí với bộ tăng cường. Cả hai đều đáng để thử nếu miễn phí là ưu tiên hàng đầu của bạn, nhưng bạn đang đánh đổi sự bóng bẩy, độ tin cậy và tính năng với mức giá.</li>
</ul>

<p>SoundDial nằm ở vị trí hấp dẫn: €14,99 một lần, không cần đăng ký. Bởi vì nó nằm trên Mac App Store nên nó đã được Apple đánh giá và đóng hộp cát, đồng thời nó cài đặt sạch sẽ mà không cần DMG, không có trình điều khiển âm thanh và không có tiện ích mở rộng hệ thống nào được phê duyệt. Bạn nhận được các tính năng thực sự quan trọng đối với vấn đề này, âm lượng trên mỗi ứng dụng, tắt tiếng, tăng tốc, cấu hình và tự động giảm tốc độ mà không cần mức giá 39 đô la hoặc một công cụ miễn phí dễ hỏng.</p>

<h2>Điểm mấu chốt</h2>

<p>macOS sẽ không cho phép bạn từ chối một ứng dụng riêng lẻ, nhưng đó là khoảng cách bạn có thể thu hẹp trong vài giây. Cài đặt trình trộn cho mỗi ứng dụng, kéo thanh trượt của ứng dụng lớn xuống và phần còn lại của âm thanh sẽ ở chính xác nơi bạn muốn. Lưu hồ sơ và bạn sẽ không bao giờ đấu tranh với điều này nữa.</p>

<p><strong>Bạn đã sẵn sàng tắt tiếng một ứng dụng đang nhấn chìm phần còn lại chưa?</strong> Nhận <a href="https://apps.apple.com/app/id6772792641">SoundDial trên Mac App Store</a> với giá €14,99, một lần thanh toán, không cần trình điều khiển, không cần đăng ký.</p>`,
  },
  "streaming-audio-mixer-mac-mic-game-music": {
    slug: "streaming-audio-mixer-mac-mic-game-music",
    title: "Bộ trộn âm thanh Mac dành cho người phát trực tuyến: Cân bằng Mic, Trò chơi & Âm nhạc",
    description: "Cách nhanh nhất để cân bằng mic, âm thanh trò chơi, âm nhạc và cảnh báo khi phát trực tuyến trên Mac. SoundDial cung cấp cho bạn bộ trộn âm lượng cho mỗi ứng dụng với các cấu hình và tính năng giảm âm lượng.",
    date: "2026-07-23",
    readTime: "Đọc trong 6 phút",
    content: `<p>Để cân bằng micrô, trò chơi, âm nhạc và cảnh báo trong khi phát trực tuyến trên Mac, cách khắc phục đáng tin cậy nhanh nhất là <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, một bộ trộn âm lượng trên thanh menu cho mỗi ứng dụng. macOS không có bộ trộn tích hợp, vì vậy SoundDial cho phép bạn đặt các mức độc lập cho mỗi ứng dụng, tăng cường các nguồn yên tĩnh, lưu cấu hình phát trực tuyến và tự động chuyển nhạc khi bạn nói chuyện.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Bộ trộn âm thanh Mac dành cho người truyền phát: Cân bằng Mic, Trò chơi &amp; Âm nhạc" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Vấn đề: macOS không có điều khiển âm lượng cho mỗi ứng dụng</h2>
<p>Windows đã có Bộ trộn âm lượng trong nhiều năm. macOS vẫn chưa xuất xưởng. Thanh trượt âm lượng hệ thống của bạn sẽ di chuyển mọi thứ cùng một lúc, điều này vô dụng khi bạn đang trực tiếp. Trong một luồng, bạn đang sử dụng ít nhất bốn nguồn đều đấu tranh cho cùng một đầu ra:</p>
<ul>
<li><strong>Giám sát giọng nói / mic của bạn</strong> - cần phải ngồi trên tất cả mọi thứ.</li>
<li><strong>Âm thanh trò chơi</strong> - ồn ào, năng động và dễ bị giật khi hành động.</li>
<li><strong>Nhạc nền</strong> - nên giữ im lặng trước lời bình luận của bạn.</li>
<li><strong>Cảnh báo và âm thanh trò chuyện</strong> — Discord, Stream Deck, cảnh báo người theo dõi, thông báo.</li>
</ul>
<p>Nếu không có quyền kiểm soát trên mỗi ứng dụng, bạn sẽ phải điều khiển thanh trượt trong ứng dụng của trò chơi, tắt tiếng Spotify bằng tay và cầu nguyện một đoạn cắt cảnh ồn ào sẽ không làm người xem của bạn choáng váng. Đó không phải là sự pha trộn, đó là kiểm soát thiệt hại.</p>

<h2>Một bộ trộn phát trực tuyến thích hợp cần làm gì</h2>
<p>Thiết lập âm thanh tập trung vào người sáng tạo trên Mac sẽ cung cấp cho bạn bốn điều: cấp độ độc lập cho mỗi ứng dụng, khả năng tăng cường nguồn quá yên tĩnh, cấu hình đã lưu mà bạn có thể gọi lại ngay lập tức và tự động giảm âm lượng để nhạc giảm xuống ngay khi bạn nói. SoundDial bao gồm cả bốn từ thanh menu.</p>

<h3>1. Khối lượng độc lập cho mọi ứng dụng</h3>
<p>Đặt trò chơi thành 60%, âm nhạc thành 25%, Discord thành 80% và trình duyệt của bạn thành 40% — mỗi ứng dụng đều có thanh trượt riêng. Không có gì chảy máu vào bất cứ điều gì khác. Bạn cũng có thể tắt tiếng ngay lập tức trên mỗi ứng dụng khi một nguồn hoạt động sai ở giữa luồng mà không cần chạm vào chính ứng dụng đó.</p>

<h3>2. Tăng âm lượng cho các nguồn yên tĩnh</h3>
<p>Một số ứng dụng và trò chơi quá yên tĩnh ngay cả ở mức 100%. Khả năng tăng cường trên mỗi ứng dụng của SoundDial sẽ đẩy một nguồn vượt quá mức trần bình thường để một trò chơi ngớ ngẩn hoặc một video có dung lượng thấp sẽ nằm ở nơi bạn cần trong hỗn hợp — không cần mã hóa lại, không cần plugin.</p>

<h3>3. Cấu hình âm lượng cho các cảnh khác nhau</h3>
<p>Đây chính là tính năng giúp các streamer tiết kiệm thời gian nhất. Danh sách kết hợp "Chỉ trò chuyện" của bạn (nhạc lên, giảm trò chơi) khác với danh sách kết hợp "Trận đấu trùm" (trò chơi bắt đầu, nhạc gần như im lặng), khác với danh sách kết hợp "BRB" của bạn. Lưu từng cái dưới dạng hồ sơ và chuyển đổi bằng một cú nhấp chuột thay vì kéo bốn thanh trượt trực tiếp.</p>

<h3>4. Tự động giảm âm lượng để âm nhạc lọt vào giọng nói của bạn</h3>
<p>Tính năng tự động giảm âm lượng sẽ tự động giảm âm thanh nền khi bạn nói và giảm âm thanh nền khi bạn dừng. Đối với những người phát trực tiếp một mình, đây là sự khác biệt giữa bình luận rõ ràng và âm nhạc liên tục át đi giọng nói của bạn — được xử lý tự động thay vì thủ công.</p>

<h2>Nơi OBS phù hợp</h2>
<p>OBS là công cụ phát sóng của bạn, không phải bộ trộn âm lượng trên máy tính để bàn của bạn. OBS kiểm soát mức độ phát vào luồng thông qua bảng điều khiển và bộ lọc Bộ trộn âm thanh, nhưng nó hoạt động từ các nguồn âm thanh mà nó thu được — nó không tiếp cận các ứng dụng macOS riêng lẻ và tắt chúng ở cấp hệ thống. Trên Mac, việc đưa âm thanh rõ ràng trên mỗi ứng dụng vào OBS luôn là một phần khó khăn.</p>
<p>Quy trình làm việc thực tế: sử dụng SoundDial để đặt cấp độ thực tế cho mỗi ứng dụng trên Mac của bạn để kết quả đưa ra đã được cân bằng, sau đó để OBS nắm bắt và tinh chỉnh các cấp độ phát sóng. Đặt hỗn hợp một lần tại nguồn và OBS có ít vấn đề hơn. Chuyển đổi đầu ra nhanh trong SoundDial cũng cho phép bạn chuyển đổi giữa tai nghe và loa mà không cần phải đi sâu vào Cài đặt hệ thống giữa các cảnh.</p>

<h2>SoundDial so với các lựa chọn thay thế</h2>
<p>Bạn có các lựa chọn và vấn đề trung thực ở đây:</p>
<ul>
<li><strong>SoundSource (Rogue Amoeba, ~$39)</strong> — cấp độ chuyên nghiệp với EQ trên mỗi ứng dụng và định tuyến đầu ra đầy đủ. Nó tuyệt vời nhưng giá cao hơn gấp đôi, yêu cầu tải xuống trực tiếp và cài đặt trình điều khiển thu âm. Quá mức cần thiết nếu bạn chủ yếu cần mức độ rõ ràng cho mỗi ứng dụng, tăng tốc và giảm bớt.</li>
<li><strong>Background Music (miễn phí, mã nguồn mở)</strong> — thực sự hữu ích và miễn phí, nhưng nó có thể bị hỏng trên các phiên bản macOS mới hơn và nó không có tính năng tăng tốc, không có cấu hình và không tự động giảm tốc độ — các tính năng chính xác mà các bộ truyền phát dựa vào.</li>
<li><strong>FineTune (ứng dụng thanh menu mã nguồn mở, miễn phí)</strong> — kiểm soát nhẹ nhàng trên mỗi ứng dụng nhưng là một dự án cộng đồng không có tổ hợp cấu hình và tính năng né tránh được xây dựng để phát trực tiếp.</li>
<li><strong>eqMac (EQ + tăng cường miễn phí)</strong> — tốt cho việc định hình và tăng cường âm sắc, nhưng nó là bộ chỉnh âm chứ không phải bộ trộn phát trực tuyến cho mỗi ứng dụng.</li>
</ul>
<p>Góc của SoundDial: đó là một <strong>€14,99 một lần</strong> mua hàng trên <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a> — Đã được Apple xem xét, đóng hộp cát và cài đặt sạch sẽ mà không cần DMG cũng như không có trình điều khiển âm thanh hoặc phần mở rộng hệ thống. Phần cuối cùng quan trọng đối với người phát trực tuyến: ít thành phần cấp hạt nhân hơn đồng nghĩa với việc ít sự cố bất ngờ hơn khi macOS cập nhật vào đêm trước buổi phát trực tiếp của bạn.</p>

<h2>Sự đánh đổi trung thực</h2>
<p>Nếu bạn cần EQ cấp độ phát sóng và chuỗi định tuyến phức tạp, SoundSource sẽ xứng đáng với mức giá của nó. Nếu bạn muốn có một công cụ sửa chữa miễn phí và không ngại thỉnh thoảng bị hỏng, Background Music hoặc FineTune sẽ đáp ứng được. Nhưng nếu bạn muốn sự kết hợp mà tính năng phát trực tuyến thực sự yêu cầu — cấp độ trên mỗi ứng dụng, tăng cường, cấu hình cảnh đã lưu và tự động giảm tải — từ bản cài đặt App Store an toàn vẫn tồn tại trong các bản cập nhật macOS, thì SoundDial là con đường kiếm tiền trực tiếp nhất.</p>

<p><strong>Bạn đã sẵn sàng sửa âm thanh luồng của mình chưa?</strong> Nhận <a href="https://apps.apple.com/app/id6772792641">SoundDial trên Mac App Store</a> với giá €14,99 — đặt mức micrô, trò chơi, âm nhạc và cảnh báo của bạn một lần, lưu chúng dưới dạng hồ sơ và cho phép tính năng tự động giảm giọng nói giúp giọng nói của bạn luôn ở vị trí cao nhất.</p>`,
  },
  "macos-tahoe-audio-crackling-popping-fix": {
    slug: "macos-tahoe-audio-crackling-popping-fix",
    title: "Cách khắc phục hiện tượng rè và rè âm thanh trên macOS Tahoe",
    description: "Âm thanh bị rè hoặc rè sau khi cập nhật lên macOS Tahoe 26? Khắc phục sự cố bằng cách khớp tốc độ mẫu, đặt lại CoreAudio, kiểm tra codec Bluetooth của bạn và xóa xung đột trình cắm. Đây là thứ tự khắc phục sự cố đầy đủ.",
    date: "2026-07-23",
    readTime: "Đọc trong 6 phút",
    content: `<p>Tiếng kêu rắc rắc sau khi cập nhật lên macOS Tahoe 26 hầu như luôn là lỗi tốc độ mẫu không khớp, đàm phán codec Bluetooth không ổn định hoặc quy trình CoreAudio bị kẹt. Khắc phục bằng cách khớp tốc độ mẫu đầu ra trong Cài đặt MIDI âm thanh, đặt lại <code>coreaudiod</code>, quên và ghép nối lại tai nghe Bluetooth cũng như thoát khỏi máy chủ trình cắm âm thanh. Làm việc thông qua chúng theo thứ tự dưới đây.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Cách khắc phục hiện tượng rè và rè âm thanh trên macOS Tahoe" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Bắt đầu với các bản sửa lỗi rẻ tiền</h2>

<p>Trước khi bạn chạm vào bất kỳ vấn đề kỹ thuật nào, hãy loại trừ hai điều có thể giải quyết hầu hết các trường hợp trong vòng chưa đầy một phút:</p>

<ul>
<li><strong>Khởi động lại Mac.</strong> Bản cập nhật Tahoe thường xuyên khiến các trình nền âm thanh ở trạng thái di chuyển một nửa một cách đáng ngạc nhiên. Khởi động lại sạch sẽ sẽ tải lại CoreAudio từ đầu và xóa phần lớn tiếng crack sau khi cập nhật.</li>
<li><strong>Rút phích cắm và cắm lại thiết bị đầu ra.</strong> Nếu đó là USB DAC, đế cắm hoặc giao diện âm thanh, hãy ngắt kết nối, đợi vài giây và kết nối lại. Hãy thử một cổng USB khác, lý tưởng nhất là một cổng trực tiếp trên Mac thay vì thông qua một trung tâm. Hub và màn hình truyền âm thanh là nguồn phổ biến của nhạc pop.</li>
</ul>

<p>Nếu tiếng ồn vẫn còn sau khi khởi động lại thì đó là sự cố cấu hình chứ không phải trục trặc. Tiếp tục đi.</p>

<h2>Phù hợp với tốc độ mẫu (nguyên nhân phổ biến nhất)</h2>

<p>Tiếng kêu Tahoe cổ điển xuất phát từ sự không khớp về tốc độ mẫu giữa những gì thiết bị của bạn muốn và những gì macOS đang gửi. Khi một ứng dụng phát âm thanh 44,1 kHz và hệ thống bị khóa ở 48 kHz (hoặc ngược lại), quá trình lấy mẫu lại có thể bị gián đoạn hoặc bị bật.</p>

<ul>
<li>Mở <strong>Thiết lập MIDI âm thanh</strong> (trong Ứng dụng → Tiện ích hoặc tìm kiếm Spotlight).</li>
<li>Chọn thiết bị đầu ra của bạn ở thanh bên trái.</li>
<li>Nhìn vào <strong>định dạng</strong> thả xuống. Hãy thử đặt nó thành <strong>Số nguyên 48000.0 Hz, 2ch-24bit</strong> và kiểm tra.</li>
<li>Nếu tiếp tục xuất hiện, hãy chuyển sang <strong>44100.0Hz</strong> và kiểm tra lại.</li>
<li>Đối với giao diện, hãy đảm bảo tốc độ mẫu khớp với tốc độ dự án DAW của bạn.</li>
</ul>

<p>Việc chuyển đổi định dạng cũng buộc CoreAudio phải thương lượng lại kết nối, điều này tự khắc phục được nhiều trường hợp ngay cả khi bạn quay lại cùng một giá trị.</p>

<h2>Đặt lại CoreAudio</h2>

<p>CoreAudio chạy dưới dạng daemon nền được gọi là <code>coreaudiod</code>. Sau bản cập nhật macOS lớn, nó có thể giữ trạng thái thiết bị cũ. Khởi động lại nó là an toàn và có hiệu lực ngay lập tức mà không cần khởi động lại.</p>

<p>Mở Terminal và chạy:</p>

<blockquote><p><code>sudo killall coreaudiod</code></p></blockquote>

<p>Nhập mật khẩu của bạn khi được nhắc. Âm thanh của bạn sẽ bị ngắt trong một giây, sau đó daemon sẽ tự động khởi chạy lại với một bản rõ ràng. Đây là cách khắc phục hiệu quả nhất đối với tình trạng tiếng crack xuất hiện bất ngờ trên một máy vẫn hoạt động tốt trước khi cập nhật.</p>

<h2>Kiểm tra tai nghe và codec Bluetooth của bạn</h2>

<p>Nếu tiếng kêu chỉ xảy ra trên AirPods hoặc tai nghe Bluetooth khác thì vấn đề thường là do đàm phán codec chứ không phải loa của bạn. Chất lượng âm thanh không dây giảm khi kết nối bị tắc nghẽn hoặc khi macOS chuyển sang chế độ cuộc gọi băng thông thấp.</p>

<ul>
<li><strong>Quên và ghép nối lại thiết bị.</strong> Đi tới Cài đặt hệ thống → Bluetooth, tháo tai nghe rồi ghép nối lại. Điều này đặt lại codec đã thương lượng.</li>
<li><strong>Chú ý đến việc giảm chế độ cuộc gọi.</strong> Khi một ứng dụng mở micrô, macOS sẽ chuyển tai nghe Bluetooth sang cấu hình hai chiều chất lượng thấp, âm thanh giòn. Thoát khỏi các ứng dụng hội nghị và thoại mà bạn không sử dụng và độ trung thực sẽ trở lại.</li>
<li><strong>Giảm nhiễu.</strong> Tránh xa môi trường 2,4 GHz đông đúc và ngắt kết nối các thiết bị Bluetooth mà bạn không cần. Một ban nhạc radio bận rộn phát ra những tiếng nhạc pop ngắt quãng.</li>
<li><strong>Tắt đầu vào mic</strong> trong cài đặt của ứng dụng nếu bạn chỉ cần nghe, vì vậy macOS sẽ giữ cấu hình phát lại chất lượng cao.</li>
</ul>

<h2>Thoát khỏi máy chủ plug-in âm thanh và trình điều khiển ảo</h2>

<p>Phần mềm âm thanh của bên thứ ba cài đặt tiện ích mở rộng hệ thống hoặc thiết bị ảo là lỗi thường xuyên xảy ra sau khi nhảy hệ điều hành, vì phần mở rộng hạt nhân và âm thanh thường cần cập nhật cho phiên bản macOS mới. Các nghi phạm bao gồm bộ định tuyến âm thanh ảo, ứng dụng bộ chỉnh âm, công cụ lặp lại và các tiện ích dựa trên trình điều khiển cũ hơn.</p>

<ul>
<li>Thoát khỏi mọi bộ chỉnh âm, bộ định tuyến âm thanh hoặc ứng dụng lặp lại và kiểm tra xem tiếng kêu có dừng lại hay không.</li>
<li>Kiểm tra Cài đặt hệ thống → Chung → Mục đăng nhập Tiện ích mở rộng &amp; để biết các tiện ích mở rộng âm thanh có thể cần cập nhật hoặc xóa.</li>
<li>Cập nhật những ứng dụng đó lên bản phát hành tương thích với Tahoe hoặc gỡ cài đặt những ứng dụng bạn không còn sử dụng. Trình điều khiển âm thanh xếp chồng lên nhau thường xuyên xung đột với nhau sau một bản cập nhật lớn.</li>
</ul>

<p>Nếu việc thoát khỏi một trong những ứng dụng này khiến cửa sổ bật lên im lặng thì bạn đã tìm ra thủ phạm của mình. Cài đặt lại phiên bản hiện tại hoặc bỏ nó đi.</p>

<h2>Thu hẹp phạm vi: toàn hệ thống hay một ứng dụng?</h2>

<p>Tìm hiểu xem tiếng ồn xảy ra ở mọi nơi hay chỉ trong phần mềm cụ thể. Phát tệp âm thanh cục bộ, sau đó là video trên trình duyệt, sau đó là ứng dụng âm nhạc. Nếu chỉ có một ứng dụng bị lỗi, cách khắc phục là cài đặt âm thanh của chính ứng dụng đó hoặc bản cập nhật chứ không phải macOS. Nếu nó áp dụng trên toàn hệ thống thì các bước trên chính là nơi đưa ra câu trả lời.</p>

<p>Khi bạn vẫn gặp khó khăn, hãy khởi động vào Chế độ an toàn (giữ nút nguồn trên Apple silicon, sau đó chọn đĩa khởi động trong khi giữ Shift). Chế độ an toàn không tải tiện ích mở rộng của bên thứ ba. Nếu âm thanh ở đó sạch thì nguyên nhân là do mục đăng nhập hoặc trình điều khiển và bạn có thể bật lại từng mục đó một lần để tìm thấy nó.</p>

<h2>Khi âm thanh của bạn sạch</h2>

<p>Crackling là một vấn đề về trình điều khiển và tốc độ mẫu, vì vậy các cách khắc phục ở trên thực sự giải quyết được vấn đề đó. Nhưng khi quá trình phát lại ổn định, bạn có thể nhận thấy một hạn chế khác: macOS vẫn không có bộ trộn âm lượng tích hợp sẵn cho mỗi ứng dụng, giống như Windows. Bạn không thể tắt một ứng dụng ồn ào mà không tắt mọi thứ.</p>

<p>Đó là khoảng cách <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> lấp đầy. Đó là một bộ trộn thanh menu cung cấp cho mỗi ứng dụng thanh trượt âm lượng riêng, tắt tiếng cho mỗi ứng dụng và thậm chí tăng âm lượng cho các ứng dụng yên tĩnh, cùng với khả năng chuyển đổi đầu ra nhanh chóng. Nó sẽ không khắc phục được hiện tượng rè rè, nhưng một khi âm thanh của bạn khỏe mạnh thì việc kiểm soát hàng ngày sẽ dễ dàng hơn nhiều.</p>

<p>Thực hiện theo thứ tự các bước trên và bắt đầu bằng việc khởi động lại và kiểm tra tốc độ mẫu. Nếu sau này bạn muốn kiểm soát thực sự theo từng ứng dụng đối với thiết lập âm thanh rõ ràng của mình, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> là giao dịch mua một lần trị giá €14,99 trên Mac App Store, được đóng hộp cát không có trình điều khiển hoặc DMG để cài đặt.</p>`,
  },
  "airpods-stuttering-cutting-out-mac-tahoe": {
    slug: "airpods-stuttering-cutting-out-mac-tahoe",
    title: "AirPods Nói lắp hoặc cắt đứt trên Mac (Sửa lỗi Tahoe)",
    description: "AirPods bị giật, cắt hoặc rớt âm thanh trên macOS Tahoe hầu như luôn là hiện tượng Bluetooth bị nhiễu hoặc tự động chuyển đổi. Sau đây là cách ghép nối lại, cắt giảm tắc nghẽn tần số 2,4 GHz và dừng quá trình chuyển giao làm gián đoạn quá trình phát lại.",
    date: "2026-07-23",
    readTime: "Đọc trong 6 phút",
    content: `<p>AirPods bị giật hay rè trên macOS Tahoe gần như là do Bluetooth bị nhiễu chứ không phải tai nghe hỏng. Thủ phạm thông thường là Wi-Fi 2,4 GHz và tắc nghẽn bộ định tuyến, chuyển đổi thiết bị tự động mạnh mẽ và ghép nối cũ. Ghép nối lại AirPods, tắt tính năng tự động chuyển đổi và tránh xa các kênh 2,4GHz đông đúc để khắc phục hầu hết các trường hợp.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — AirPods Nói lắp hoặc bị ngắt quãng trên Mac (Sửa lỗi Tahoe)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Tại sao AirPods lại giảm trên Mac</h2>

<p>AirPods sử dụng Bluetooth, chia sẻ băng tần vô tuyến 2,4 GHz đông đúc với Wi-Fi, lò vi sóng, thiết bị USB 3 và hầu hết mọi phích cắm thông minh trong nhà bạn. Mac của bạn là một đài phát thanh bận rộn: nó kết hợp các tính năng Wi-Fi, Bluetooth, AirDrop và Continuity trên các ăng-ten chồng lên nhau. Khi băng tần đó bị tắc nghẽn, âm thanh Bluetooth là thứ đầu tiên bị giật vì nó không thể chịu đựng được các gói bị rơi theo cách truyền tệp.</p>

<p>Tahoe không làm cho AirPods của bạn tệ hơn một cách kỳ diệu, nhưng bản cài đặt macOS mới thường đặt lại hoạt động của sóng vô tuyến, kích hoạt lại tính năng chuyển giao liên tục và đàm phán lại codec. Đó là lý do tại sao vấn đề dường như xuất hiện ngay sau khi cập nhật. Tin tốt: các bản sửa lỗi đều được hiểu rõ và hầu hết đều miễn phí.</p>

<h2>Cách khắc phục 1: Ghép nối lại AirPods (thực hiện việc này trước)</h2>

<p>Việc ghép nối cũ hoặc bị hỏng vẫn tồn tại sau khi khởi động lại và gây ra tình trạng rớt mạng không liên tục trông có vẻ ngẫu nhiên. Xóa hoàn toàn và thêm lại kết nối:</p>

<ul>
<li>Mở <strong>Cài đặt hệ thống, Bluetooth</strong>.</li>
<li>Nhấp vào nút thông tin (i) bên cạnh AirPods của bạn và chọn <strong>Quên thiết bị này</strong>.</li>
<li>Đặt AirPods vào hộp, đóng nắp, đợi 15 giây rồi mở ra.</li>
<li>Giữ nút ở mặt sau của hộp cho đến khi đèn nhấp nháy màu trắng.</li>
<li>Ghép nối lại từ danh sách Bluetooth.</li>
</ul>

<p>Khi bạn ở đó, hãy đảm bảo chương trình cơ sở AirPods được cập nhật. Không có trình cập nhật thủ công nhưng để chúng trong hộp gần iPhone hoặc Mac được kết nối trong một thời gian sẽ cho phép chúng cập nhật ở chế độ nền.</p>

<h2>Cách 2: Tắt tính năng tự động chuyển đổi</h2>

<p>Đây là nguyên nhân lớn nhất dẫn đến việc "cắt đứt" mọi người trong hệ sinh thái Apple. AirPods của bạn cố gắng theo dõi bạn giữa Mac, iPhone và iPad. Mỗi khi điện thoại của bạn cho rằng nó cần lấy âm thanh, kết nối trên Mac của bạn sẽ bị trục trặc, tạo ra đoạn podcast giữa chừng nửa giây bị rớt.</p>

<ul>
<li>Trên Mac: Bluetooth, nhấp vào (i) bên cạnh AirPods, đặt <strong>Kết nối với Mac này</strong> để <strong>Khi kết nối lần cuối với Mac này</strong> thay vì Tự động.</li>
<li>Trên iPhone: Cài đặt, chạm vào AirPods của bạn, <strong>Kết nối với iPhone này</strong>, chọn <strong>Khi kết nối lần cuối với iPhone này</strong>.</li>
</ul>

<p>Điều này ngăn chặn sự giằng co giữa các thiết bị. Bạn sẽ chọn nơi âm thanh sẽ đi theo cách thủ công, đây là một mức giá nhỏ để phát lại ổn định.</p>

<h2>Cách khắc phục 3: Cắt tắc nghẽn 2.4GHz</h2>

<p>Nếu xảy ra hiện tượng rớt sóng trong khi gọi điện video, tải xuống hoặc khi người khác đang phát trực tuyến thì băng tần radio của bạn đã bão hòa. Một số động tác thiết thực:</p>

<ul>
<li><strong>Sử dụng băng tần Wi-Fi 5GHz</strong> trên Mac của bạn. Trong cài đặt bộ định tuyến của bạn, hãy đặt tên riêng cho mạng 5GHz và kết nối với mạng đó. Điều này giải phóng băng tần 2.4GHz cho Bluetooth.</li>
<li><strong>Di chuyển các hub USB 3 và Thunderbolt đi</strong> từ Mac và AirPods của bạn. USB 3 là nguồn gây nhiễu khét tiếng ở tần số 2,4GHz; một trung tâm đặt cạnh máy tính xách tay của bạn có thể làm hỏng Bluetooth chỉ cách vài inch.</li>
<li><strong>Thay đổi kênh 2.4GHz của bộ định tuyến của bạn</strong> đến 1, 6 hoặc 11 (các tùy chọn không chồng chéo) và tránh các kênh đông đúc mà hàng xóm của bạn đang sử dụng.</li>
<li><strong>Giữ đường ngắm.</strong> Thân và tường hấp thụ tần số 2,4GHz. Nếu Mac của bạn ở phía sau bạn hoặc trong túi, tình trạng rơi sẽ trở nên tồi tệ hơn.</li>
</ul>

<blockquote>Bộ định tuyến Wi-Fi 6E và Wi-Fi 7 có thể trợ giúp gián tiếp: đẩy thiết bị của bạn lên 6GHz sẽ xóa băng tần 2,4GHz mà Bluetooth phụ thuộc vào. Nhưng một lưới được cấu hình kém khiến bạn quay trở lại tần số 2,4 GHz có thể khiến mọi thứ trở nên tồi tệ hơn. Kiểm tra xem bạn thực sự thuộc ban nhạc nào.</blockquote>

<h2>Cách khắc phục 4: Đặt lại ngăn xếp Bluetooth và Continuity</h2>

<p>Nếu việc ghép nối lại không thành công, hãy tự đặt lại bộ đàm:</p>

<ul>
<li>Tắt và bật Bluetooth từ thanh menu, sau đó khởi động lại Mac. Khởi động lại sẽ loại bỏ một số trục trặc âm thanh nhất thời đáng ngạc nhiên.</li>
<li>Đặt lại SMC/NVRAM trên Intel Mac hoặc chỉ cần tắt hoàn toàn (không khởi động lại) trong 30 giây trên Apple Silicon.</li>
<li>Nếu bạn không sử dụng AirDrop hoặc Handoff, việc tắt Handoff trong Cài đặt hệ thống, Cài đặt chung, AirDrop &amp; Handoff sẽ giảm tiếng ồn xung quanh đài.</li>
</ul>

<h2>Điều gì sẽ không khắc phục được (và công dụng thực sự của bộ trộn âm lượng)</h2>

<p>Để làm rõ về phạm vi: không có vấn đề nào trong số này là vấn đề về âm lượng phần mềm và không có ứng dụng âm lượng nào có thể sửa chữa liên kết Bluetooth. Nếu âm thanh của bạn là <em>đánh rơi</em>, đuổi theo vấn đề radio ở trên. Ứng dụng như <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> kiểm soát âm lượng trên mỗi ứng dụng, tắt tiếng và chuyển đổi đầu ra, chúng không chạm vào ngăn xếp Bluetooth, vì vậy chúng sẽ không ngừng bị giật. Trường hợp bộ trộn thực sự hữu ích là sự khó chịu liền kề mà nhiều người dùng AirPods nhầm lẫn với hiện tượng bỏ học: một ứng dụng nổ tung trong khi ứng dụng khác lại quá yên tĩnh hoặc cần phải chuyển đầu ra nhanh chóng. Đó là vấn đề cân bằng âm lượng, không phải vấn đề kết nối.</p>

<p>Hãy chẩn đoán một cách trung thực. Nếu âm thanh bị ngắt một nhịp và quay trở lại thì đó là hiện tượng nhiễu hoặc tự động chuyển đổi. Nếu mức độ không đồng đều giữa các ứng dụng thì đó là vấn đề trộn lẫn mà bạn thực sự có thể giải quyết bằng phần mềm.</p>

<h2>Danh sách kiểm tra nhanh</h2>

<ul>
<li>Quên và ghép nối lại AirPods.</li>
<li>Đặt cả Mac và iPhone thành <strong>Khi kết nối lần cuối</strong>, không phải Tự động.</li>
<li>Di chuyển Mac của bạn sang Wi-Fi 5GHz; tránh xa các hub USB 3.</li>
<li>Đặt 2.4GHz thành kênh 1, 6 hoặc 11.</li>
<li>Khởi động lại sau khi chuyển đổi Bluetooth.</li>
</ul>

<p>Sau khi không còn tình trạng bỏ học và bạn chỉ muốn kiểm soát rõ ràng hơn mức độ phát của mỗi ứng dụng, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> bổ sung bộ trộn âm lượng phù hợp cho mỗi ứng dụng, tắt tiếng, tăng tốc và chuyển đổi đầu ra nhanh mà macOS vẫn chưa bao gồm. Đó là khoản mua hàng một lần trị giá €14,99 trên Mac App Store, được đóng hộp cát, không cần cài đặt trình điều khiển.</p>`,
  },
  "mac-right-speaker-not-working-after-tahoe": {
    slug: "mac-right-speaker-not-working-after-tahoe",
    title: "Loa bên phải bị hỏng trên Mac sau bản cập nhật Tahoe? Cách khắc phục",
    description: "Một loa hoặc kênh ngừng hoạt động sau khi cập nhật lên macOS Tahoe? Bắt đầu với thanh trượt cân bằng âm thanh, sau đó đặt lại Core Audio, thử chế độ an toàn và loại trừ phần cứng. Hướng dẫn khắc phục sự cố rõ ràng.",
    date: "2026-07-23",
    readTime: "Đọc trong 6 phút",
    content: `<p>Nếu loa bên phải của bạn im lặng sau khi cập nhật lên macOS Tahoe, hãy kiểm tra âm thanh <strong>thanh trượt cân bằng</strong> đầu tiên - nó có thể thay đổi trong quá trình cập nhật. Đi tới Cài đặt hệ thống &gt; Âm thanh Đầu ra &gt; và đảm bảo Cân bằng nằm ở chính giữa. Nếu không sao, hãy khởi động lại Core Audio, khởi động vào chế độ an toàn và sau đó loại trừ phần cứng. Hầu hết các trường hợp là phần mềm.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Loa bên phải bị hỏng trên Mac sau bản cập nhật Tahoe? Cách khắc phục" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Đầu tiên: thanh trượt cân bằng (sửa lỗi này thường xuyên hơn bạn nghĩ)</h2>

<p>Thanh trượt cân bằng bị kẹt hoặc bị dịch chuyển là lý do phổ biến nhất khiến một kênh rơi vào trạng thái im lặng — và các bản cập nhật macOS đôi khi sẽ thúc đẩy kênh đó. Trước khi bạn giả định điều tồi tệ nhất:</p>

<ul>
<li>Mở <strong>Cài đặt hệ thống Âm thanh &gt;</strong>.</li>
<li>Bấm vào <strong>đầu ra</strong> và chọn loa của bạn (tích hợp hoặc thiết bị bên ngoài của bạn).</li>
<li>Tìm <strong>Số dư</strong> thanh trượt và kéo nó đến chính giữa. Nếu nó được kéo sang trái, kênh bên phải của bạn sẽ bị chết.</li>
</ul>

<p>Làm điều này <em>mỗi thiết bị đầu ra</em>. Cài đặt cân bằng được ghi nhớ riêng cho loa, tai nghe tích hợp và từng giao diện bên ngoài — vì vậy, cân bằng tích hợp ở giữa sẽ không hữu ích nếu sự cố xảy ra ở USB DAC của bạn.</p>

<h2>Kiểm tra xem đó có thực sự là kênh phần cứng không</h2>

<p>Kiểm soát phần cứng vào hoặc ra một cách nhanh chóng. Phát một bản nhạc nổi mà bạn biết rõ, sau đó cắm một cặp tai nghe có dây. Nếu cả hai kênh đều hoạt động trong tai nghe nhưng không hoạt động qua loa thì vấn đề nằm ở phía sau công cụ âm thanh (phần cứng loa hoặc đường dẫn đầu ra). Nếu kênh tương tự cũng bị chết trong tai nghe, nhiều khả năng đó là do phần mềm hoặc bộ giải mã âm thanh của bảng logic.</p>

<p>Bạn cũng có thể mở <strong>Âm nhạc</strong> hoặc QuickTime, chơi nội dung nào đó và chuyển mạnh số dư sang trái rồi cứng sang phải. Nếu âm thanh di chuyển rõ ràng giữa các kênh thì cả hai loa đều hoạt động và đây hoàn toàn là sự cố cài đặt.</p>

<h2>Khởi động lại âm thanh lõi</h2>

<p>macOS định tuyến tất cả âm thanh qua <strong>coreaudiod</strong> quá trình. Sau một bản cập nhật lớn, trạng thái của nó có thể bị thay đổi — đầu ra biến mất, kênh giảm hoặc âm lượng hoạt động kỳ lạ. Khởi động lại nó là an toàn và buộc macOS phải xây dựng lại biểu đồ âm thanh:</p>

<ul>
<li>Mở <strong>Terminal</strong> (Ứng dụng tiện ích &gt;).</li>
<li>Chạy: <code>sudo killall coreaudiod</code></li>
<li>Nhập mật khẩu của bạn. Trình nền âm thanh sẽ tự động khởi chạy lại trong vòng một hoặc hai giây.</li>
</ul>

<p>Không có gì bị xóa - thao tác này chỉ khởi động lại hệ thống con âm thanh. Kiểm tra lại loa bên phải của bạn ngay sau đó.</p>

<h2>Khởi động lại đúng cách, sau đó thử chế độ an toàn</h2>

<p>Khởi động lại hoàn toàn sẽ xóa các trục trặc âm thanh nhất thời mà killall sẽ không làm được. Nếu kênh vẫn chết, hãy khởi động vào <strong>chế độ an toàn</strong>, tải hệ thống tối thiểu và bỏ qua các mục đăng nhập và tiện ích mở rộng âm thanh của bên thứ ba:</p>

<ul>
<li><strong>Silicon táo:</strong> Tắt đi. Giữ nút nguồn cho đến khi "Đang tải tùy chọn khởi động" xuất hiện. Chọn đĩa của bạn rồi giữ <strong>ca</strong> và nhấp vào "Tiếp tục ở Chế độ an toàn."</li>
<li><strong>Intel:</strong> Khởi động lại và giữ <strong>ca</strong> cho đến khi cửa sổ đăng nhập xuất hiện.</li>
</ul>

<p>Nếu cả hai loa đều hoạt động ở chế độ an toàn thì trình điều khiển âm thanh, thiết bị ảo hoặc tiện ích thanh menu của bên thứ ba được cài đặt trước khi cập nhật sẽ xung đột với ngăn xếp âm thanh mới của Tahoe. Khởi động trở lại bình thường và xóa hoặc cập nhật phần mềm âm thanh được cài đặt gần đây (trình ghi màn hình, ứng dụng cuộc họp và kext định tuyến âm thanh là những thủ phạm phổ biến).</p>

<h2>Đặt lại NVRAM (chỉ dành cho Intel Mac)</h2>

<p>Trên Intel Mac, cài đặt âm thanh và loa nằm trong NVRAM/PRAM và giá trị cũ có thể tồn tại trong bản cập nhật. Đặt lại: tắt, sau đó bật nguồn và giữ ngay lập tức <strong>Tùy chọn + Lệnh + P + R</strong> trong khoảng 20 giây, để Mac khởi động lại một lần. Điều này không áp dụng được cho Apple Silicon Mac — họ tự động quản lý việc này, vì vậy hãy bỏ qua nếu bạn đang sử dụng máy dòng M.</p>

<h2>Cập nhật lại - và kiểm tra việc giải phóng điểm</h2>

<p>Các bản phát hành đầu tiên của bất kỳ phiên bản macOS chính nào đều có lỗi trình điều khiển âm thanh, sau đó sẽ được vá. Đi tới <strong>Cài đặt hệ thống &gt; Tổng quát Cập nhật phần mềm &gt;</strong> và cài đặt mọi bản phát hành điểm Tahoe đang chờ xử lý (14.x.1, 14.x.2, v.v.). Nếu có bản cập nhật bổ sung, bản cập nhật này thường giải quyết chính xác các lỗi hồi quy âm thanh sau cập nhật này.</p>

<h2>Khi nó thực sự là phần cứng</h2>

<p>Nếu chế độ an toàn, khởi động lại Core Audio và cài đặt lại sạch sẽ đều không thành công — và cùng một kênh bị hỏng trong tai nghe — bạn có thể đang xem xét lỗi phần cứng. Thời điểm cập nhật có thể ngẫu nhiên; bộ khuếch đại loa và codec âm thanh không thành công. Chạy <strong>Chẩn đoán của Apple</strong> (tắt máy, sau đó giữ nút nguồn trên Apple Silicon và chọn Diagnostics, hoặc giữ <strong>D</strong> trên Intel khi khởi động). Nếu nó gắn cờ một thành phần âm thanh, hãy liên hệ <strong>Hỗ trợ của Apple</strong> hoặc nhà cung cấp dịch vụ được ủy quyền. Đừng chi tiền vào phần mềm cho một chiếc loa bị thổi.</p>

<blockquote>Nguyên tắc nhỏ: nếu âm thanh xoay chính xác bằng thanh trượt cân bằng thì cả hai loa đều ổn về mặt vật lý và cách khắc phục của bạn nằm ở phần mềm. Nếu nó không bao giờ di chuyển về phía chết, hãy nghi ngờ phần cứng.</blockquote>

<h2>Phần mềm âm lượng phù hợp ở đâu (và nơi nào không)</h2>

<p>Nói rõ hơn: kênh loa chết không phải là vấn đề mà ứng dụng âm lượng có thể khắc phục - các bước kiểm tra ở trên là đường dẫn của bạn. Điều đó có nghĩa là, khi âm thanh của bạn khỏe trở lại, macOS vẫn thiếu thứ mà Windows đã có trong nhiều năm: một bộ trộn âm lượng thực sự cho mỗi ứng dụng. Nếu bạn thấy mình đang tìm hiểu sâu về cài đặt Âm thanh vì một ứng dụng đang hoạt động ầm ĩ trong khi ứng dụng khác quá yên tĩnh, thì một trình trộn trên thanh menu như <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> cho phép bạn đặt âm lượng độc lập, tắt tiếng và thậm chí tăng tốc cho mỗi ứng dụng mà không cần chạm vào số dư hệ thống của bạn. Đây là một công cụ tiện lợi để trộn hàng ngày, không phải là cách khắc phục sự cố trong bài viết này.</p>

<h2>Phiên bản ngắn</h2>

<ul>
<li>Trung tâm <strong>Số dư</strong> thanh trượt - trên mỗi thiết bị đầu ra.</li>
<li>Kiểm tra bằng tai nghe để cách ly phần cứng.</li>
<li>Chạy <code>sudo killall coreaudiod</code>, sau đó khởi động lại.</li>
<li>Hãy thử <strong>chế độ an toàn</strong> để bắt xung đột trình điều khiển.</li>
<li>Đặt lại NVRAM trên Intel; cài đặt bất kỳ bản phát hành điểm Tahoe nào.</li>
<li>Vẫn chết trong tai nghe? Chạy Apple Diagnostics và gọi cho Apple.</li>
</ul>

<p>Sau khi loa của bạn trở lại bình thường, nếu việc điều chỉnh âm lượng trên mỗi ứng dụng là điều khó chịu hàng ngày, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> cho biết thêm bộ trộn macOS luôn bị thiếu - € 14,99, một lần, được đóng hộp cát, không có trình điều khiển.</p>`,
  },
  "airpods-stuck-at-half-volume-mac-fix": {
    slug: "airpods-stuck-at-half-volume-mac-fix",
    title: "AirPods Bị kẹt ở mức nửa âm lượng trên Mac của bạn? Đây là bản sửa lỗi",
    description: "Tại sao AirPods kết nối với Mac của bạn ở mức âm lượng một nửa — thường là codec Bluetooth chuyển sang cấu hình mic rảnh tay — cùng với các bản sửa lỗi ghép nối lại và cách tăng mức sao lưu cho tốt.",
    date: "2026-07-23",
    readTime: "Đọc trong 6 phút",
    content: `<p>AirPods thường giảm xuống một nửa âm lượng trên Mac vì macOS đã chuyển chúng từ cấu hình âm thanh A2DP chất lượng cao sang cấu hình rảnh tay chất lượng thấp (HFP) — cấu hình được thiết kế để sử dụng micrô khi gọi điện thoại. Chế độ đó giới hạn sản lượng và chất lượng. Khắc phục bằng cách buộc Mac quay lại âm thanh chỉ dành cho tai nghe, sau đó tăng mức để giữ nguyên ở đó.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — AirPods Bị kẹt ở nửa âm lượng trên Mac của bạn? Đây là bản sửa lỗi" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Tại sao điều này xảy ra: bộ chuyển đổi codec</h2>

<p>Các thiết bị âm thanh Bluetooth như AirPods chạy ở một trong hai chế độ. Khi bạn chỉ nghe, macOS sử dụng A2DP — âm thanh nổi hoàn chỉnh, âm lượng lớn, chất lượng rõ ràng. Nhưng thời điểm một ứng dụng muốn có micrô của bạn, macOS sẽ chuyển toàn bộ kết nối sang HFP (Cấu hình rảnh tay). HFP là codec điện thoại hai chiều. Âm thanh mỏng, đơn âm và yên tĩnh hơn đáng kể vì nó được thiết kế cho các cuộc gọi thoại chứ không phải âm nhạc.</p>

<p>Vấn đề là macOS thường bị kẹt trong HFP ngay cả sau khi ứng dụng lấy micrô hoàn tất - hoặc chuyển sang ứng dụng đó ngay khi bạn mở Zoom, FaceTime, Teams, Discord hoặc tab trình duyệt có quyền mic. Vì vậy, AirPods của bạn phát ra âm thanh như ở mức "nửa âm lượng" không phải do thanh trượt âm lượng đã di chuyển mà do toàn bộ cấu hình âm thanh bên dưới bạn đã bị hạ cấp.</p>

<p>Bạn sẽ nhận ra điều đó: âm thanh đột nhiên im lặng và bị bóp nghẹt, AirPods hiển thị hai lần trong cài đặt âm thanh của bạn (một lần ở dạng đầu ra, một lần ở dạng micrô) và việc tăng âm lượng hệ thống lên hầu như không giúp ích gì.</p>

<h2>Cách giải quyết ghép nối lại và giải mã codec</h2>

<p>Đây là những bước đầu tiên trung thực. Hãy giải quyết chúng theo thứ tự - một trong những việc đầu tiên thường làm được điều đó.</p>

<ul>
<li><strong>Thay đổi thiết bị đầu vào của bạn.</strong> Mở Cài đặt hệ thống → Âm thanh → Nhập liệu và chọn micrô tích hợp của Mac thay vì AirPods. Điều này ngăn macOS giữ AirPods ở chế độ HFP, do đó đầu ra có thể tăng trở lại chất lượng A2DP đầy đủ. Đây là cách khắc phục hiệu quả nhất.</li>
<li><strong>Tắt và bật Bluetooth.</strong> Việc thiết lập lại nhanh kết nối thường đàm phán lại A2DP một cách rõ ràng, đặc biệt nếu AirPods bị kẹt sau khi cuộc gọi kết thúc.</li>
<li><strong>Kết nối lại AirPods.</strong> Đóng hộp, đợi vài giây, mở lại gần Mac và chọn lại chúng làm thiết bị đầu ra.</li>
<li><strong>Thoát khỏi ứng dụng đã lấy mic.</strong> Thoát hoàn toàn Zoom, Teams, Discord hoặc tab trình duyệt đó. Một số ứng dụng giữ phiên micrô mở ở chế độ nền và ghim HFP cho đến khi chúng biến mất.</li>
<li><strong>Ghép lại từ đầu.</strong> Xóa AirPods trong Cài đặt hệ thống → Bluetooth (nhấp vào nút thông tin → Quên thiết bị này), sau đó ghép nối lại. Điều này sẽ xóa một thỏa thuận hồ sơ bị hỏng mà việc chuyển đổi một mình sẽ không khắc phục được.</li>
<li><strong>Đặt lại AirPods.</strong> Khi nắp hộp mở, hãy giữ nút cài đặt ở mặt sau cho đến khi đèn nhấp nháy màu hổ phách rồi màu trắng. Ghép nối lại sau đó. Đây là tùy chọn cốt lõi cho sự kỳ lạ ở cấp độ phần sụn.</li>
<li><strong>Cập nhật chương trình cơ sở macOS và AirPods.</strong> Apple đã cung cấp bản sửa lỗi âm thanh Bluetooth trong các bản phát hành điểm. Chương trình cơ sở AirPods âm thầm cập nhật khi chúng đang sạc gần một thiết bị được kết nối — vì vậy hãy để chúng trong hộp đựng gần Mac của bạn qua đêm.</li>
</ul>

<blockquote><p>Mẫu cần lưu ý: nếu âm lượng giảm ngay khi bạn tham gia cuộc gọi và khôi phục khi cuộc gọi kết thúc thì đó là do nút chuyển HFP — không phải do loa bị hỏng hoặc trục trặc trong cài đặt.</p></blockquote>

<h2>Tại sao các bản sửa lỗi không phải lúc nào cũng hiệu quả</h2>

<p>Đây là phần bực bội. Ngay cả sau khi ghép nối lại, macOS sẽ vui vẻ chuyển AirPods của bạn trở lại chế độ rảnh tay yên tĩnh vào lần tiếp theo bất kỳ ứng dụng nào chạm vào micrô. Bạn không thể tắt vĩnh viễn hành vi đó trong cài đặt hệ thống - Apple coi nó là tự động. Vì vậy, cuối cùng bạn phải thực hiện lại thủ thuật thiết bị đầu vào vài lần trong ngày và bất cứ lúc nào AirPods của bạn đang thực hiện một cuộc gọi hoặc một ứng dụng ngốn micrô, chúng sẽ lại bị giới hạn ở mức thấp hơn đó.</p>

<p>Ngoài ra còn có một vấn đề riêng thứ hai mà mọi người liên quan đến vấn đề này: một số ứng dụng chỉ yên tĩnh hơn những ứng dụng khác ở mức âm lượng hệ thống tối đa. Trình phát podcast hoặc tab trình duyệt có thể hoạt động ở mức thấp hơn mức mà tai bạn mong muốn, ngay cả khi AirPods đang chạy A2DP sạch. macOS cung cấp cho bạn một thanh trượt âm lượng cho mọi thứ và không có khả năng kiểm soát cho mỗi ứng dụng, vì vậy không có cách nào nguyên bản để đẩy một ứng dụng yên tĩnh trở lại hoạt động.</p>

<h2>Tăng cấp độ sao lưu - và giữ nó ở đó</h2>

<p>Đây là nơi mà bộ trộn âm lượng cho mỗi ứng dụng giành được vị trí của nó. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> là một ứng dụng thanh menu dành cho macOS cung cấp cho mọi ứng dụng đang chạy thanh trượt âm lượng độc lập - bao gồm cả mức tăng trên 100%. Vì vậy, khi AirPods của bạn quay lại sau một cuộc gọi ở mức hiệu quả thấp hơn hoặc một ứng dụng cụ thể quá yên tĩnh, bạn hãy kéo ứng dụng đó vượt quá mức trần bình thường và nó vẫn ở đó.</p>

<p>Cụ thể, điều đó có nghĩa là:</p>

<ul>
<li><strong>BOOST khối lượng mỗi ứng dụng.</strong> Đẩy một ứng dụng yên tĩnh lên trên mức tối đa tiêu chuẩn thay vì cố gắng nghe ứng dụng đó ở mức âm lượng hệ thống "đầy".</li>
<li><strong>Hồ sơ khối lượng.</strong> Lưu một tập hợp các cấp độ — trình duyệt nâng cao, nhạc nhẹ nhàng hơn, cuộc gọi điện video lớn — và chuyển đổi toàn bộ cách sắp xếp chỉ bằng một cú nhấp chuột để bạn không phải điều chỉnh lại sau mỗi lần kết nối lại.</li>
<li><strong>Chuyển đổi đầu ra nhanh chóng.</strong> Chuyển đổi giữa AirPods, loa máy tính xách tay và DAC bên ngoài từ thanh menu mà không cần tìm hiểu sâu về Cài đặt hệ thống, điều này sẽ hữu ích khi bạn buộc phải đàm phán cấu hình mới.</li>
<li><strong>Tắt tiếng và tự động tắt tiếng trên mỗi ứng dụng.</strong> Tắt tiếng một ứng dụng mà không chạm vào các ứng dụng còn lại và để phương tiện tự động nhúng khi có nội dung quan trọng hơn phát.</li>
</ul>

<p>Cần phải làm rõ điều này có tác dụng gì và không làm gì. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> sẽ không buộc macOS ở lại A2DP - thủ thuật thiết bị đầu vào ở trên vẫn là công cụ dành cho chính codec của bạn. Những gì nó làm là mang lại cho bạn âm lượng bị đánh cắp khi hạ cấp trên mỗi ứng dụng, do đó, một phiên AirPods yên tĩnh hoặc một ứng dụng mềm cứng đầu là cách khắc phục chỉ cần một lần kéo thay vì nguyên nhân bị mất. Và vì đây là ứng dụng Mac App Store được đóng hộp cát nên không cần cài đặt trình điều khiển âm thanh, không có DMG, không có phần mở rộng kernel — ứng dụng chỉ chạy.</p>

<h2>Phiên bản ngắn</h2>

<p>Nếu AirPods phát ra âm thanh nhỏ và bị bóp nghẹt trên Mac, hãy tắt thiết bị đầu vào của bạn khỏi AirPods để buộc chúng thoát khỏi chế độ rảnh tay và ghép nối lại nếu điều đó không thành công. Khi cấp độ vẫn không đạt đến mức bạn muốn — hoặc một ứng dụng quá yếu — hãy tiếp cận mức tăng cho mỗi ứng dụng để bạn đặt nó một lần và tiếp tục.</p>

<p>Bạn cảm thấy mệt mỏi khi phải vật lộn với thanh trượt âm lượng mỗi khi nhận cuộc gọi? <a href="https://apps.apple.com/app/id6772792641">Nhận SoundDial trên Mac App Store</a> — €14,99 một lần, không cần đăng ký, không cần trình điều khiển — và cung cấp dung lượng riêng cho mỗi ứng dụng.</p>`,
  },
  "mac-volume-resets-itself-tahoe-bug": {
    slug: "mac-volume-resets-itself-tahoe-bug",
    title: "Âm lượng Mac liên tục tự thiết lập lại trên Tahoe? Làm thế nào để khóa nó mãi mãi",
    description: "Kể từ macOS Tahoe, nhiều Mac đột nhiên thay đổi hoặc tự đặt lại âm lượng. Đây là lý do tại sao điều đó xảy ra, cách ngăn chặn các nguyên nhân tích hợp và cách khóa âm lượng cố định cho mỗi ứng dụng để ứng dụng được giữ nguyên.",
    date: "2026-07-23",
    readTime: "Đọc trong 6 phút",
    content: `<p>Nếu âm lượng Mac của bạn tiếp tục tự đặt lại kể từ macOS Tahoe, thì cách khắc phục là loại bỏ bộ điều chỉnh tự động: tắt tính năng giảm âm thanh và "Phát âm thanh khi khởi động", đặt lại cài đặt âm thanh và kết nối lại mọi đầu ra Bluetooth một cách sạch sẽ. Đối với các cấp độ trên mỗi ứng dụng thay đổi liên tục, hãy khóa âm lượng cố định cho mỗi ứng dụng bằng bộ trộn để âm lượng đó không bao giờ bị trôi nữa.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial - Âm lượng Mac liên tục tự thiết lập lại trên Tahoe? Làm thế nào để khóa nó mãi mãi" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Tại sao âm lượng của bạn tự thay đổi sau Tahoe</h2>

<p>Âm lượng di chuyển mà bạn không chạm vào có vẻ như là lỗi phần cứng, nhưng hầu như luôn là phần mềm quyết định cấp độ của bạn cho bạn. macOS có một số hành vi tự động giúp đẩy nhẹ hoặc đặt lại đầu ra một cách lặng lẽ và những thay đổi về ngăn xếp âm thanh của Tahoe đã khiến một số hành vi trong số đó trở nên đáng chú ý hơn. Trước khi bạn cho rằng ứng dụng hoặc Mac bị hỏng, bạn cần biết chính xác hệ thống nào đang nắm lấy thanh trượt.</p>

<ul>
<li><strong>Giảm âm thanh:</strong> macOS giảm âm thanh khác khi cho rằng có nội dung nào đó quan trọng hơn đang phát (Siri, thông báo trợ năng, thông báo). Sau khi quá trình kích hoạt kết thúc, cấp độ đôi khi không quay trở lại hoàn toàn.</li>
<li><strong>Đặt lại bắt tay Bluetooth:</strong> AirPods và các thiết bị Bluetooth khác đàm phán lại âm lượng khi kết nối. Việc kết nối lại giữa phiên có thể đưa đầu ra về mức mặc định hoặc ở mức to hơn/yên tĩnh hơn nhiều.</li>
<li><strong>Chuyển đổi thiết bị đầu ra:</strong> Khi bạn rút tai nghe, gắn đế hoặc chuyển sang loa của màn hình, mỗi đầu ra sẽ ghi nhớ âm lượng riêng. Việc chuyển đổi qua lại trông giống như việc đặt lại "ngẫu nhiên".</li>
<li><strong>Mặc định cho mỗi ứng dụng:</strong> Một số ứng dụng (trình duyệt, trình phát video, công cụ hội nghị) tự đặt mức tăng khi khởi chạy hoặc khi luồng mới bắt đầu, ghi đè bất cứ thứ gì bạn có.</li>
<li><strong>Âm thanh khởi động và trạng thái đăng nhập:</strong> Chuông khởi động và đăng nhập có thể đẩy âm lượng hệ thống về mức mặc định mà bạn không chọn.</li>
</ul>

<h2>Trước tiên hãy khắc phục các nguyên nhân tích hợp</h2>

<p>Làm việc thông qua những điều này theo thứ tự. Hầu hết các khiếu nại "tự đặt lại" sẽ biến mất sau khi loại trừ việc giảm tốc độ và Bluetooth.</p>

<ul>
<li><strong>Tắt âm thanh khởi động.</strong> Cài đặt hệ thống → Âm thanh → bỏ chọn <em>Phát âm thanh khi khởi động</em>. Điều này ngăn chuông khởi động thiết lập lại mức cơ bản của bạn.</li>
<li><strong>Giảm hoặc vô hiệu hóa trình kích hoạt vịt.</strong> Trong Cài đặt hệ thống → Trợ năng → Nội dung được nói và Siri, hãy tắt các thông báo bằng giọng nói mà bạn không cần. Ít trình kích hoạt hơn có nghĩa là ít khoảnh khắc macOS giảm âm thanh và quên khôi phục nó hơn.</li>
<li><strong>Ghép nối lại các thiết bị Bluetooth có vấn đề.</strong> Xóa AirPods hoặc tai nghe khỏi cài đặt Bluetooth và ghép nối chúng mới. Cấu hình cũ là nguyên nhân phổ biến khiến âm lượng bị ngắt khi kết nối.</li>
<li><strong>Đặt từng thiết bị đầu ra một cách có chủ ý.</strong> Kết nối từng đầu ra bạn sử dụng (tích hợp, màn hình, tai nghe) và đặt âm lượng của nó một lần. macOS lưu trữ âm lượng trên mỗi thiết bị, vì vậy việc cài đặt tất cả chúng sẽ loại bỏ sự ngạc nhiên khi bạn chuyển đổi.</li>
<li><strong>Đặt lại Core Audio nếu nó bị kẹt.</strong> Mở Terminal và chạy <code>sudo killall coreaudiod</code>. Thao tác này sẽ khởi động lại trình nền âm thanh mà không cần khởi động lại và xóa trạng thái treo có thể gây ra mức độ thất thường.</li>
<li><strong>Cập nhật rồi khởi động lại.</strong> Các bản phát hành điểm Tahoe sớm đã đưa ra bản sửa lỗi âm thanh. Đảm bảo bạn đang sử dụng bản dựng mới nhất và khởi động lại một lần sau khi cập nhật.</li>
</ul>

<p>Nếu quá trình đặt lại dừng lại, một trong những điều trên là thủ phạm của bạn. Nếu bạn <em>hệ thống</em> âm lượng ổn định nhưng các ứng dụng riêng lẻ tiếp tục phát ra âm thanh to hơn hoặc êm hơn mọi thứ khác, thì bạn đã đạt đến giới hạn những gì mà các điều khiển tích hợp sẵn có thể thực hiện.</p>

<h2>Khoảng cách thực sự: macOS không thể khóa âm lượng trên mỗi ứng dụng</h2>

<p>Đây là phần bực bội. Windows đã có bộ trộn âm lượng cho mỗi ứng dụng trong nhiều năm - bạn mở nó, kéo thanh trượt của một ứng dụng và nó vẫn ở đó. macOS chưa bao giờ xuất xưởng một chiếc nào. Có chính xác một thanh trượt âm lượng hệ thống và mọi ứng dụng đều phải tranh giành nó. Vì vậy, khi tab trình duyệt hiển thị quảng cáo tự động phát hoặc cuộc gọi video có âm lượng lớn gấp đôi âm nhạc của bạn, lựa chọn duy nhất của bạn là tăng âm lượng chính theo cách thủ công - đó chính là vòng lặp "tại sao điều này liên tục thay đổi" mà bạn đang cố gắng thoát ra.</p>

<blockquote>Thanh trượt hệ thống là một nút quay chung duy nhất. Nếu không có bộ trộn cho mỗi ứng dụng, "cài đặt và quên nó đi" là không thể trên macOS có sẵn — thứ gì đó sẽ luôn ghi đè lên bạn.</blockquote>

<h2>Khóa âm lượng cố định cho mỗi ứng dụng bằng SoundDial</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> thêm bộ trộn mỗi ứng dụng macOS bị thiếu. Nó nằm trong thanh menu của bạn và cung cấp cho mọi ứng dụng đang chạy thanh trượt âm lượng riêng, độc lập với ứng dụng chính. Vì nó ghi nhớ mức bạn đặt cho từng ứng dụng nên nó trực tiếp giải quyết vấn đề "tự đặt lại": bạn quyết định một lần và ứng dụng đó sẽ mở ở mức âm lượng đó mọi lúc.</p>

<ul>
<li><strong>Khối lượng độc lập trên mỗi ứng dụng:</strong> duy trì âm nhạc ở mức 40% và cuộc gọi điện video ở mức 80% cùng lúc mà không cần phải tung hứng bằng thanh trượt chính.</li>
<li><strong>Tắt tiếng và tăng cường cho mỗi ứng dụng:</strong> tắt tiếng ứng dụng ồn ào ngay lập tức hoặc đẩy ứng dụng quá yên tĩnh vượt quá 100% khi âm thanh của ứng dụng đó yếu.</li>
<li><strong>Hồ sơ khối lượng:</strong> lưu các thiết lập cho "công việc", "chơi game" hoặc "tập trung" và chuyển đổi toàn bộ kết hợp chỉ bằng một cú nhấp chuột.</li>
<li><strong>Tự động giảm tốc độ theo điều kiện của bạn:</strong> các ứng dụng chạy nền tự động thấp hơn khi bạn nói hoặc khi một ứng dụng đã chọn đang hoạt động — thay vì quyết định macOS.</li>
<li><strong>Chuyển đổi đầu ra nhanh:</strong> chuyển đổi giữa loa, tai nghe và theo dõi âm thanh từ thanh menu mà không cần đi sâu vào cài đặt.</li>
</ul>

<p>Đó là giao dịch mua một lần trị giá €14,99 từ Mac App Store — không đăng ký, không trình điều khiển, không DMG và không có phần mở rộng kernel. Vì nó được đóng hộp cát hoàn toàn và được phân phối App Store nên bạn sẽ không cài đặt kext âm thanh cũ mà Tahoe có thể chặn trong bản cập nhật tiếp theo. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> đặt cấp độ của bạn bằng cách sử dụng các API được hỗ trợ để khối lượng được ghi nhớ của bạn vẫn tồn tại trong các bản cập nhật và khởi động lại.</p>

<h2>Bạn thực sự cần cách tiếp cận nào?</h2>

<p>Nếu âm lượng toàn bộ hệ thống của bạn tăng vọt, hãy bắt đầu với các bản sửa lỗi tích hợp ở trên - giảm tốc độ, Bluetooth và tài khoản âm thanh khởi động trong hầu hết các trường hợp. Thay vào đó, nếu vấn đề là một ứng dụng luôn là ứng dụng kỳ lạ hoặc bạn cảm thấy mệt mỏi với thanh trượt chính là một sự thỏa hiệp, thì trình trộn trên mỗi ứng dụng là câu trả lời thực sự duy nhất. macOS sẽ không thêm một công cụ nào, vì vậy công cụ thanh menu là con đường thực tế để kết hợp thực sự ở đúng nơi bạn đặt nó.</p>

<p>Bạn cảm thấy mệt mỏi khi phải theo đuổi thanh trượt âm lượng trên Tahoe? <a href="https://apps.apple.com/app/id6772792641">Nhận SoundDial trên Mac App Store</a> và khóa khối lượng đã ghi nhớ cho mọi ứng dụng — 14,99 € một lần, không cần đăng ký, không cần trình điều khiển.</p>`,
  },
  "control-daw-and-system-volume-separately-mac": {
    slug: "control-daw-and-system-volume-separately-mac",
    title: "Kiểm soát âm lượng màn hình DAW của bạn tách biệt khỏi âm thanh hệ thống trên Mac",
    description: "macOS không có bộ trộn âm lượng tích hợp sẵn cho mỗi ứng dụng, vì vậy âm thanh hệ thống và DAW của bạn có chung một cấp độ. Dưới đây là cách kiểm soát âm lượng màn hình Logic, Ableton hoặc GarageBand độc lập với trình duyệt và thông báo của bạn.",
    date: "2026-07-23",
    readTime: "Đọc trong 6 phút",
    content: `<p>macOS không có bộ trộn âm lượng tích hợp sẵn cho mỗi ứng dụng, vì vậy DAW của bạn và mọi thứ khác đều có chung một thanh trượt hệ thống. Để đặt mức màn hình của bạn độc lập với trình duyệt, Slack và thông báo, bạn cần điều khiển âm lượng cho mỗi ứng dụng. Một máy trộn thanh menu như <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> cung cấp cho Logic, Ableton và GarageBand âm lượng riêng, tách biệt với âm thanh hệ thống.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Kiểm soát âm lượng màn hình DAW của bạn tách biệt khỏi âm thanh hệ thống trên Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Tại sao một thanh trượt âm lượng làm hỏng việc giám sát của bạn</h2>

<p>Khi bạn sản xuất, DAW của bạn chỉ là một trong nhiều thứ tạo ra âm thanh. Bản nhạc tham chiếu phát trong tab trình duyệt. Các ping Slack đã đến. Hướng dẫn YouTube chạy trên màn hình thứ hai. Trên Windows, Bộ trộn âm lượng cho phép bạn cân bằng tất cả những thứ này một cách độc lập. Trên macOS, Apple chưa bao giờ cung cấp thiết bị tương đương - phím âm lượng và thanh trượt thanh menu di chuyển <em>mọi thứ</em> cùng một lúc.</p>

<p>Điều đó tạo ra một vấn đề thực sự cho bất cứ ai trộn bằng tai. Bạn quay số ở mức giám sát thoải mái trong Logic, sau đó một thông báo sẽ phát ra ở mức tương tự và khiến bạn choáng váng. Hoặc bạn tắt hệ thống để bảo vệ thính giác của mình khi nghe một đoạn lớn và bây giờ bản nhạc tham chiếu của bạn quá yên tĩnh để so sánh. Tham chiếu giám sát của bạn không còn ổn định và tham chiếu ổn định là toàn bộ điểm trộn.</p>

<blockquote>Giám sát ở mức độ nhất quán là một trong số ít thói quen giúp cải thiện đáng kể bản phối của bạn. Nếu âm thanh hệ thống liên tục buộc bạn phải di chuyển thanh trượt chính, bạn sẽ mất tính nhất quán đó.</blockquote>

<h2>"Khối lượng DAW riêng biệt" thực sự có nghĩa là gì</h2>

<p>Có hai điều khác nhau mà các nhà sản xuất kết hợp ở đây và cần tách chúng ra:</p>

<ul>
<li><strong>Giao diện / mức đầu ra chính</strong> — núm phần cứng trên giao diện âm thanh hoặc bộ điều khiển màn hình của bạn. Điều này sẽ đặt âm lượng nghe tuyệt đối của bạn và sẽ được giữ nguyên sau khi hiệu chỉnh.</li>
<li><strong>Khối lượng phần mềm trên mỗi ứng dụng</strong> - độ ồn của mỗi ứng dụng <em>trước đây</em> nó đạt được đầu ra đó. Đây là những gì macOS còn thiếu. Nó cho phép bạn giữ DAW ở trạng thái thống nhất trong khi giảm âm thanh Chrome, Âm nhạc hoặc thông báo xuống ngang tầm giường bên dưới nó.</li>
</ul>

<p>Bạn muốn cái thứ hai. Mục tiêu không phải là tắt DAW của bạn — mà là tắt mọi thứ khác tương ứng với nó, để DAW luôn là nguồn ồn ào nhất, nhất quán nhất và những phiền nhiễu nằm yên lặng ở chế độ nền.</p>

<h2>Cách thực hiện với trình trộn trên mỗi ứng dụng</h2>

<p>Một máy trộn thanh menu như <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> liệt kê mọi ứng dụng hiện đang phát âm thanh và cung cấp cho mỗi ứng dụng thanh trượt riêng. Quy trình làm việc của một nhà sản xuất trông như thế này:</p>

<ul>
<li><strong>Hiệu chỉnh giao diện của bạn một lần.</strong> Đặt giao diện âm thanh hoặc bộ điều khiển màn hình của bạn ở mức tham chiếu thoải mái, có thể lặp lại và để nguyên. Đây là mỏ neo cố định của bạn.</li>
<li><strong>Đặt DAW của bạn thành 100%.</strong> Trong bộ trộn, hãy để Logic, Ableton hoặc GarageBand ở mức âm lượng phần mềm tối đa để nó đi qua ở mức thống nhất. Bộ chỉnh âm chính của DAW vẫn thực hiện việc trộn tốt.</li>
<li><strong>Kéo mọi thứ khác xuống.</strong> Giảm Chrome, Safari, Âm nhạc và Slack xuống mức thấp hơn — chẳng hạn như 40–60% — để các bản nhạc và thông điệp tham chiếu nằm trong danh sách kết hợp của bạn thay vì cạnh tranh với nó.</li>
<li><strong>Tắt tiếng những thứ ồn ào.</strong> Tắt tiếng trên mỗi ứng dụng cho phép bạn tắt tiếng hoàn toàn trình duyệt hoặc ứng dụng trò chuyện mà không cần chạm vào chuỗi giám sát của mình. Một cú nhấp chuột và DAW của bạn sẽ tiếp tục phát mà không bị ảnh hưởng.</li>
</ul>

<p>Vì thanh trượt của DAW không bao giờ di chuyển nên tham chiếu giám sát của bạn luôn ổn định trong suốt phiên. Bạn có thể quay một bản nhạc tham chiếu để có A/B nhanh, sau đó tắt tiếng bản nhạc đó và mức độ kết hợp của bạn không thay đổi một decibel.</p>

<h2>Tăng cường ứng dụng yên tĩnh thay vì tắt ứng dụng khác</h2>

<p>Đôi khi vấn đề diễn ra theo cách khác. Một bản demo thô bị trả lại, một bản ghi nhớ giọng nói hoặc một tài liệu tham khảo yên tĩnh phát lại thấp hơn nhiều so với cấp độ phiên của bạn. Bật giao diện của bạn lên để nghe có nghĩa là mọi thứ khác hiện quá ồn ào. Mỗi ứng dụng <strong>tăng âm lượng</strong> cho phép bạn đẩy một ứng dụng yên tĩnh lên trên 100% để ứng dụng đó phù hợp với mức độ làm việc của bạn — mà không cần chạm vào đầu ra đã hiệu chỉnh của bạn. Đó là bộ trộn Windows' chưa từng có và là một trong những công cụ hữu ích hơn khi bạn thử giọng từ bên ngoài DAW của mình.</p>

<h2>Hồ sơ cho các loại phiên khác nhau</h2>

<p>Sự cân bằng lý tưởng của bạn không giống nhau cho mọi nhiệm vụ. Theo dõi, trộn và nghe thông thường đều muốn có sự kết hợp các cấp độ ứng dụng khác nhau. Cấu hình ổ đĩa cho phép bạn lưu thiết lập và gọi lại nó ngay lập tức:</p>

<ul>
<li><strong>Trộn:</strong> DAW ở mức 100%, trình duyệt và Nhạc ở mức thấp, trò chuyện bị tắt tiếng.</li>
<li><strong>Nghe tham khảo:</strong> Ứng dụng nghe nhạc hoặc phát trực tuyến đang hoạt động, DAW đang hoạt động.</li>
<li><strong>Cuộc gọi/cộng tác:</strong> ứng dụng hội nghị được bật lên, DAW đã lùi lại để không lọt vào cuộc gọi.</li>
</ul>

<p>Việc chuyển đổi cấu hình sẽ tốt hơn việc điều chỉnh bằng tay năm thanh trượt mỗi khi bạn chuyển số.</p>

<h2>Tự động giảm tốc và chuyển đổi đầu ra nhanh</h2>

<p>Còn hai điều quan trọng nữa trong studio. <strong>Tự động giảm tốc độ</strong> có thể tự động nhúng các ứng dụng nền khi nguồn ưu tiên nói hoặc phát, để cuộc gọi hoặc âm thanh quan trọng luôn bị gián đoạn. Và <strong>chuyển đổi đầu ra nhanh chóng</strong> từ thanh menu cho phép bạn chuyển giữa giao diện, màn hình và tai nghe mà không cần đào sâu vào Cài đặt hệ thống — một nhiệm vụ liên tục khi bạn kiểm tra kết hợp trên các hệ thống khác nhau.</p>

<h2>Tại sao không có trình điều khiển âm thanh ảo?</h2>

<p>Một số công cụ định tuyến giải quyết vấn đề này bằng cách cài đặt trình điều khiển âm thanh ảo cấp hạt nhân. Những thứ đó mạnh mẽ nhưng nặng nề: chúng có thể bị hỏng sau khi cập nhật macOS, tăng độ trễ và yêu cầu quyền hệ thống sâu. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> được đóng hộp cát và vận chuyển qua Mac App Store — không có trình điều khiển, không có DMG, không có thiết lập thiết bị tổng hợp. Cụ thể, để kiểm soát cấp độ trên mỗi ứng dụng, đó là con đường đơn giản hơn nhiều so với việc tái cấu trúc định tuyến âm thanh của bạn.</p>

<p>Sẵn sàng để giữ mức độ giám sát của bạn ổn định trong khi mọi thứ khác vẫn giữ nguyên vị trí của nó? <a href="https://apps.apple.com/app/id6772792641">Nhận SoundDial trên Mac App Store</a> với giá €14,99 một lần và cung cấp cho DAW khối lượng riêng của nó.</p>`,
  },
  "audio-hijack-alternative-simple-volume-mac": {
    slug: "audio-hijack-alternative-simple-volume-mac",
    title: "Giải pháp thay thế Audio Hijack đơn giản hơn cho khối lượng mỗi ứng dụng trên Mac",
    description: "Nếu bạn chỉ muốn âm lượng độc lập cho mỗi ứng dụng trên macOS thì Audio Hijack là quá mức cần thiết. Đây là giải pháp thay thế thanh menu nhẹ hơn, rẻ hơn, giúp tăng âm lượng, tắt tiếng và tăng tốc cho mỗi ứng dụng mà không cần định tuyến âm thanh.",
    date: "2026-07-23",
    readTime: "Đọc trong 5 phút",
    content: `<p>Nếu tất cả những gì bạn muốn là âm lượng độc lập cho mỗi ứng dụng trên macOS thì Audio Hijack là công cụ nhiều hơn những gì bạn cần. Đó là bộ ghi âm và định tuyến âm thanh chuyên nghiệp (khoảng $79) được xây dựng để ghi lại, hiệu ứng và biểu đồ phiên. Để chỉ cần tắt một ứng dụng và bật ứng dụng khác lên, một trình trộn thanh menu nhẹ như <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> nhanh hơn, rẻ hơn và luôn sẵn sàng.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Giải pháp thay thế Audio Hijack đơn giản hơn cho khối lượng mỗi ứng dụng trên Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Tại sao mọi người lại tiếp cận Audio Hijack ngay từ đầu</h2>

<p>macOS không có bộ trộn âm lượng tích hợp cho mỗi ứng dụng. Windows đã có một chiếc trong Bộ trộn âm lượng trong nhiều năm, nhưng trên Mac, các phím âm lượng và thanh trượt thanh menu chỉ di chuyển một thứ: chủ hệ thống. Không có cách nào của bên thứ nhất để nói "giữ Spotify ở mức 40% nhưng để cuộc gọi điện video của tôi ở mức 100%".</p>

<p>Vì vậy, mọi người tìm kiếm giải pháp thay thế và tìm đến Audio Hijack. Nó <em>có thể</em> tăng âm lượng cho mỗi ứng dụng vì nó có thể chặn và xử lý âm thanh từ bất kỳ ứng dụng nào. Tuy nhiên, khả năng đó là tác dụng phụ của mục đích thực sự của nó: ghi lại âm thanh từ ứng dụng và phần cứng, tạo chuỗi hiệu ứng, định tuyến giữa các thiết bị ảo và xây dựng quy trình phiên có thể tái sử dụng. Nó thực sự xuất sắc ở điểm đó. Đó chỉ là một câu trả lời nặng nề cho một câu hỏi nhẹ nhàng.</p>

<h2>Trường hợp Audio Hijack trở nên quá mức cần thiết</h2>

<p>Một số điều có xu hướng làm nản lòng những người chỉ muốn có thanh trượt âm lượng:</p>

<ul>
<li><strong>Giá.</strong> Audio Hijack có giá khoảng 79 USD. Điều đó là công bằng đối với một phòng thu âm trong một ứng dụng; việc tắt tab trình duyệt là rất nhiều.</li>
<li><strong>Nó phải tiếp tục chạy.</strong> Quá trình xử lý trên mỗi ứng dụng của nó chỉ hoạt động khi ứng dụng đang mở và phiên liên quan đang hoạt động. Hãy thoát khỏi nó và khối lượng của bạn sẽ hoàn nguyên. Bạn đang giữ một máy trạm âm thanh đầy đủ chỉ để giữ một thanh trượt tại chỗ.</li>
<li><strong>Suy nghĩ dựa trên phiên.</strong> Bạn xây dựng phiên với các khối và kết nối. Mạnh mẽ để chụp nhưng sẽ tốn rất nhiều chi phí về mặt khái niệm khi mục tiêu của bạn là "ứng dụng này yên tĩnh hơn, ứng dụng kia to hơn".</li>
<li><strong>Giao diện có chiều sâu.</strong> Hiệu ứng, định tuyến, đồng hồ đo, nối dây — một diện tích bề mặt phong phú mà bạn hầu như sẽ bỏ qua nếu không bao giờ ghi lại bất kỳ thứ gì.</li>
</ul>

<blockquote>Nguyên tắc nhỏ: nếu bạn muốn <em>ghi lại hoặc tuyến đường</em> âm thanh, Audio Hijack xứng đáng với giá của nó. Nếu bạn chỉ muốn <em>cân đối</em> âm thanh giữa các ứng dụng, bạn đang trả tiền cho một buổi hội thảo khi bạn cần một núm xoay.</blockquote>

<h2>Giải pháp thay thế đơn giản hơn: bộ trộn âm lượng trên thanh menu</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> đảm nhận một công việc mà hầu hết mọi người thực sự tìm đến và chỉ làm điều đó. Nó sống trong thanh menu của bạn. Nhấp vào biểu tượng và bạn sẽ nhận được danh sách trực tiếp của mọi ứng dụng hiện đang phát âm thanh, mỗi ứng dụng có thanh trượt riêng. Kéo Spotify lên 30%, duy trì cuộc gọi của bạn ở mức 100%, tắt tiếng hoàn toàn Slack — đã xong, không cần tạo phiên.</p>

<p>Nó bao gồm những gì:</p>

<ul>
<li><strong>Khối lượng độc lập trên mỗi ứng dụng</strong> — mọi nguồn âm thanh đều có thanh trượt riêng, có thể điều chỉnh theo thời gian thực.</li>
<li><strong>Tắt tiếng trên mỗi ứng dụng</strong> — tắt tiếng một ứng dụng ồn ào chỉ bằng một cú nhấp chuột mà không cần chạm vào bất cứ thứ gì khác.</li>
<li><strong>Tăng âm lượng trên mỗi ứng dụng</strong> - đẩy một ứng dụng yên tĩnh <em>ở trên</em> 100% khi mức tối đa của nó vẫn còn quá mềm. Đây là phần mà thanh trượt hệ thống không bao giờ có thể làm được.</li>
<li><strong>Hồ sơ khối lượng</strong> — lưu toàn bộ danh sách kết hợp (nhạc nhỏ, cuộc gọi to, tắt thông báo) và gọi lại chỉ bằng một cú nhấp chuột cho một ngữ cảnh nhất định.</li>
<li><strong>Tự động giảm tốc độ</strong> — tự động nhúng âm thanh nền khi nội dung nào đó quan trọng hơn bắt đầu, để cuộc gọi hoặc video không bị ẩn trong danh sách phát của bạn.</li>
<li><strong>Chuyển đổi đầu ra nhanh chóng</strong> — chuyển đổi giữa tai nghe, loa và các đầu ra khác từ cùng một menu.</li>
</ul>

<h2>Thực tế: kiểm soát từng ứng dụng trong vòng chưa đầy một phút</h2>

<p>Sự khác biệt trong thiết lập là toàn bộ vấn đề. Với công cụ định tuyến, bạn sẽ tạo một phiên, thêm khối nguồn, kết nối nó và duy trì hoạt động của ứng dụng. Về cơ bản thì đây là:</p>

<ul>
<li>cài đặt <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> từ Mac App Store.</li>
<li>Phát âm thanh trong một vài ứng dụng để chúng xuất hiện trong danh sách.</li>
<li>Nhấp vào biểu tượng thanh menu và kéo thanh trượt của từng ứng dụng để nếm thử.</li>
<li>Tùy chọn lưu hỗn hợp đó dưới dạng hồ sơ hoặc tăng tốc ứng dụng quá yên tĩnh lên 100%.</li>
</ul>

<p>Bởi vì nó được phân phối thông qua Mac App Store nên nó được đóng hộp cát và cài đặt giống như bất kỳ ứng dụng thông thường nào — không <code>.dmg</code> để kéo, không có phần mở rộng kernel, không có trình điều khiển âm thanh để phê duyệt trong cài đặt Bảo mật và không có gì cần phê duyệt lại sau khi cập nhật macOS. Điểm cuối cùng quan trọng: các bộ trộn dựa trên trình điều khiển thường không hoạt động khi nâng cấp hệ điều hành và yêu cầu cài đặt lại một thành phần cấp hệ thống. Ứng dụng App Store được đóng hộp cát sẽ tránh được toàn bộ danh mục bảo trì đó.</p>

<h2>Bạn nên chọn cái nào?</h2>

<p>Hãy trung thực về công việc. chọn <strong>Audio Hijack</strong> nếu bạn cần ghi lại âm thanh ứng dụng hoặc phần cứng, áp dụng hiệu ứng thời gian thực hoặc xây dựng biểu đồ định tuyến giữa các thiết bị ảo. Đó là sân nhà của nó và nó đáng giá từng đô la ở đó.</p>

<p>Chọn một bộ trộn thanh menu chuyên dụng nếu nhu cầu thực sự của bạn là "để tôi đặt âm lượng cho từng ứng dụng một cách độc lập". Bạn sẽ chi 14,99 € một lần thay vì ~ 79 đô la, bỏ qua việc xây dựng phiên và nhận được tính năng tăng cường, tắt tiếng, cấu hình và chuyển sang bảng điều khiển bạn mở từ thanh menu. Không có tính năng ghi âm nào mà bạn sẽ không bao giờ chạm tới, không có máy trạm chạy ẩn để giữ thanh trượt tại chỗ.</p>

<p>Hầu hết những người dùng thử Audio Hijack để cân bằng âm lượng đều giải quyết được một vấn đề nhỏ bằng một công cụ lớn. Nếu đó là bạn thì công cụ nhỏ sẽ phù hợp hơn — và chi phí cũng chỉ bằng một phần nhỏ.</p>

<p><a href="https://apps.apple.com/app/id6772792641">Nhận SoundDial trên Mac App Store</a> với giá €14,99, một lần — âm lượng, tăng tốc, tắt tiếng, cấu hình và tự động giảm âm lượng trên mỗi ứng dụng, ngay từ thanh menu của bạn.</p>`,
  },
  "boom-3d-alternative-per-app-volume-mac": {
    slug: "boom-3d-alternative-per-app-volume-mac",
    title: "Giải pháp thay thế Boom 3D: Khối lượng mỗi ứng dụng không bị phồng lên (Mac)",
    description: "Nếu bạn sử dụng Boom 3D chủ yếu để tăng cường âm thanh nhưng thực sự muốn kiểm soát âm lượng trên mỗi ứng dụng thì SoundDial là lựa chọn thay thế Mac gọn gàng hơn: âm lượng độc lập cho mỗi ứng dụng, tắt tiếng và tăng cường cho mỗi ứng dụng, giá một lần, không có EQ hoặc trình điều khiển trên toàn hệ thống.",
    date: "2026-07-23",
    readTime: "Đọc trong 5 phút",
    content: `<p>Nếu bạn đã sử dụng Boom 3D để tăng âm lượng nhưng thực sự muốn kiểm soát từng ứng dụng riêng biệt thì bạn cần có một công cụ khác. Boom 3D là bộ tăng âm lượng và EQ trên toàn hệ thống. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> là bộ trộn âm lượng tập trung cho mỗi ứng dụng: âm lượng độc lập, tắt tiếng và tăng tốc cho từng ứng dụng, một lần € 14,99, không có EQ, không có trình điều khiển.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Giải pháp thay thế Boom 3D: Khối lượng mỗi ứng dụng không bị phồng (Mac)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Boom 3D thực sự làm gì (và không)</h2>
<p>Boom 3D được xây dựng xoay quanh ba thứ: tăng âm lượng trên toàn hệ thống, bộ cân bằng 31 băng tần và hiệu ứng "vòm" 3D. Nó áp dụng những điều đó cho <em>mọi thứ</em> Mac của bạn phát cùng một lúc. Điều đó thực sự hữu ích nếu mục tiêu của bạn là một chiếc máy tính xách tay to hơn hoặc một đường cong âm trầm mà bạn thích.</p>
<p>Những gì Boom 3D không được xây dựng để coi các ứng dụng là các kênh độc lập. Không có cách nào rõ ràng để nói "Spotify ở mức 40%, cuộc gọi video của tôi ở mức 100% và tab trình duyệt này bị tắt tiếng". Thanh trượt của nó di chuyển toàn bộ hỗn hợp. Và vì nó cài đặt trình điều khiển âm thanh nằm trên đường dẫn tín hiệu nên nó chạm vào hệ thống của bạn ở mức thấp hơn so với tiện ích hộp cát. Nó cũng được định vị là một sản phẩm trả phí với chu kỳ nâng cấp thay vì một công cụ nhỏ dùng một lần.</p>
<blockquote><p>Câu chuyện phổ biến: mọi người cài đặt Boom 3D để làm cho một ứng dụng yên tĩnh to hơn, sau đó nhận ra vấn đề thực sự là macOS không có bộ trộn âm lượng cho mỗi ứng dụng.</p></blockquote>

<h2>Khoảng cách: macOS không có bộ trộn âm lượng</h2>
<p>Điều này khiến những người đến từ Windows ngạc nhiên. Windows đã có Bộ trộn âm lượng cho mỗi ứng dụng trong nhiều năm - nhấp chuột phải vào loa, đặt cấp độ của từng ứng dụng riêng lẻ. macOS đơn giản là không cung cấp thứ này. Bạn nhận được một tập chính và bất kỳ thanh trượt bên trong nào mà mỗi ứng dụng sẽ hiển thị. Không có cách nào ở cấp độ hệ điều hành để cân bằng Slack với tab YouTube với trò chơi.</p>
<p>Vì vậy, khi một ứng dụng âm nhạc lấn át cuộc gọi của bạn, các lựa chọn gốc duy nhất của bạn là rất đơn giản: tắt chế độ chính (để tắt mọi thứ) hoặc tìm hiểu cài đặt riêng của từng ứng dụng với hy vọng ứng dụng đó có điều khiển âm lượng. Boom 3D cũng không thu hẹp khoảng cách đó - nó làm cho toàn bộ bản phối to hơn chứ không phải từng ứng dụng.</p>

<h2>Trường hợp SoundDial phù hợp</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> là máy trộn bị thiếu. Nó nằm trong thanh menu của bạn và cung cấp cho mỗi ứng dụng đang chạy một hàng riêng với thanh trượt riêng. Đó là điểm khác biệt cốt lõi so với Boom 3D: thay vì một hiệu ứng chung, bạn có quyền kiểm soát theo từng nguồn.</p>
<ul>
<li><strong>Khối lượng độc lập trên mỗi ứng dụng</strong> — đặt Spotify ở mức 30% trong khi cuộc gọi điện video của bạn vẫn ở mức 100%.</li>
<li><strong>Tắt tiếng trên mỗi ứng dụng</strong> — tắt tiếng một ứng dụng ồn ào ngay lập tức mà không cần chạm vào bất cứ thứ gì khác.</li>
<li><strong>Tăng cường trên mỗi ứng dụng</strong> — nếu bạn thích thủ thuật âm lượng lớn hơn 100% của Boom 3D, SoundDial sẽ giữ nguyên điều đó nhưng nhắm mục tiêu vào một ứng dụng duy nhất thay vì toàn bộ hệ thống. Các ứng dụng yên tĩnh sẽ tự mình vượt qua mức trần bình thường.</li>
<li><strong>Hồ sơ khối lượng</strong> — lưu bố cục bộ trộn (ví dụ: "chơi game", "cuộc họp", "âm nhạc") và gọi lại bố cục đó chỉ bằng một cú nhấp chuột thay vì luôn cân bằng lại các thanh trượt.</li>
<li><strong>Tự động giảm tốc độ</strong> — tự động nhúng âm thanh nền khi có điều gì đó quan trọng bắt đầu, để cuộc gọi hoặc tín hiệu trò chơi không bị chìm trong âm nhạc.</li>
<li><strong>Chuyển đổi đầu ra nhanh chóng</strong> — chuyển đổi giữa tai nghe, loa và các đầu ra khác từ cùng một menu.</li>
</ul>
<p>Điều SoundDial cố tình không làm là phần còn lại của tính năng Boom 3D. Không có EQ 31 băng tần, không có xử lý âm thanh vòm giả, không có chuỗi hiệu ứng trên toàn hệ thống. Nếu bạn muốn có EQ cấp cao, Boom 3D hoặc bộ âm thanh chuyên dụng là lựa chọn phù hợp. Nếu mục đích bạn thực sự tiếp tục mở Boom 3D là <em>khối lượng</em>, diện tích bề mặt đó sẽ phình to mà bạn phải trả tiền để mang theo.</p>

<h2>Tăng tốc, không cần trình điều khiển</h2>
<p>Câu hỏi "tăng cường" xứng đáng có câu trả lời trực tiếp, bởi vì đó thường là lý do tại sao người dùng Boom 3D tìm kiếm các lựa chọn thay thế. Sự tăng cường của Boom 3D mang tính toàn cầu và dựa trên trình điều khiển. Tính năng tăng cường của SoundDial dành cho mỗi ứng dụng và chạy bên trong mô hình hộp cát ứng dụng của Apple — nó được phân phối thông qua Mac App Store, do đó không có trình cài đặt riêng, không có trình điều khiển cấp hạt nhân và không có thành phần hệ thống còn sót lại để gỡ cài đặt sau. Bạn nhận được kết quả "làm cho ứng dụng im lặng này to hơn" mà không cần trao quyền kiểm soát trình điều khiển cho toàn bộ đường dẫn âm thanh của bạn.</p>

<h2>Giá: một lần so với liên tục</h2>
<p>Boom 3D là một ứng dụng trả phí có mô hình cấp phép và nâng cấp riêng, đồng thời giá cả thay đổi tùy theo nền tảng và phiên bản. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> là giao dịch mua một lần duy nhất với giá €14,99 — mua một lần, giữ nguyên, không cần đăng ký và không mua lại mỗi phiên bản để duy trì hoạt động của máy trộn. Đối với một tiện ích mà bạn sẽ để nó chạy trên thanh menu hàng ngày, mức giá cố định có xu hướng lâu dài hơn so với sản phẩm mà bạn phải tiếp tục mua lại.</p>

<h2>Bạn nên chọn cái nào?</h2>
<ul>
<li><strong>Chọn Boom 3D</strong> nếu nhu cầu thực sự của bạn là một bộ cân bằng nghiêm túc và các hiệu ứng âm thanh trên toàn hệ thống và bạn không bận tâm đến trình điều khiển âm thanh kết hợp.</li>
<li><strong>Chọn SoundDial</strong> nếu bạn muốn những gì người dùng Windows coi là đương nhiên — một bộ trộn âm lượng thực sự cho mỗi ứng dụng — cùng với khả năng tăng cường, cấu hình và tự động giảm tải có mục tiêu, với mức giá một lần và không cần cài đặt trình điều khiển.</li>
</ul>
<p>Hầu hết những người bật ra khỏi Boom 3D đều thuộc nhóm thứ hai. Họ không muốn điều chỉnh tần số; họ muốn trình duyệt yên tĩnh hơn cuộc gọi. Đó chính xác là công việc mà SoundDial được xây dựng.</p>

<p><strong>Bạn muốn kiểm soát âm lượng trên mỗi ứng dụng trên Mac mà không cần đăng ký hoặc tăng EQ?</strong> <a href="https://apps.apple.com/app/id6772792641">Nhận SoundDial trên Mac App Store</a> — €14,99 một lần, được đóng hộp cát, không có trình điều khiển và mọi ứng dụng đều có thanh trượt riêng.</p>`,
  },
  "mute-everything-except-one-app-mac": {
    slug: "mute-everything-except-one-app-mac",
    title: "Cách tắt tiếng mọi thứ ngoại trừ một ứng dụng trên Mac của bạn",
    description: "macOS không có bộ trộn âm lượng cho mỗi ứng dụng, vì vậy việc tắt tiếng mọi ứng dụng ngoại trừ một ứng dụng sẽ cần có người trợ giúp. Đây là cách chỉ nghe cuộc gọi, luồng hoặc trò chơi của bạn trong khi mọi thứ khác vẫn bị tắt tiếng.",
    date: "2026-07-23",
    readTime: "Đọc trong 5 phút",
    content: `<p>macOS không có cách tích hợp sẵn để tắt tiếng từng ứng dụng, vì vậy để chỉ nghe một ứng dụng, bạn cần có bộ trộn âm lượng cho mỗi ứng dụng. cài đặt <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, hãy mở bộ trộn thanh menu, tắt tiếng mọi ứng dụng ngoại trừ ứng dụng bạn muốn nghe và ứng dụng đó sẽ tiếp tục phát trong khi các ứng dụng còn lại im lặng ngay lập tức.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial - Cách tắt tiếng mọi thứ ngoại trừ một ứng dụng trên Mac của bạn" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Tại sao macOS không thể tự làm điều này</h2>
<p>Windows đã có Bộ trộn âm lượng trong hơn một thập kỷ: nhấp chuột phải vào biểu tượng loa và mọi ứng dụng đang chạy đều có thanh trượt riêng. macOS chưa bao giờ vận chuyển thứ này. Các phím âm lượng trên Mac của bạn chỉ điều khiển một thứ, đó là mức đầu ra chính. Khi bạn tắt hệ thống, mọi thứ sẽ cùng sụp đổ. Khi bạn tắt tiếng, mọi thứ đều tắt tiếng.</p>
<p>Điều đó sẽ ổn cho đến khi bạn có năm thứ gây ồn ào cùng một lúc. Bạn đang thực hiện cuộc gọi điện video nhưng tab trình duyệt đang tự động phát quảng cáo, Spotify vẫn đang chạy, trò chơi đang phát âm thanh trong nền và Slack đang đổ chuông. Các tùy chọn gốc duy nhất của bạn là thoát khỏi ứng dụng, tắt tiếng từng ứng dụng trong cài đặt riêng của từng ứng dụng (nếu ứng dụng đó thậm chí có tùy chọn đó) hoặc kéo tai nghe của bạn. Không điều nào trong số đó cho phép bạn nói "giữ cái này, im lặng phần còn lại."</p>

<h2>Cách đơn giản: tắt tiếng phần còn lại bằng máy trộn</h2>
<p>Bộ trộn cho mỗi ứng dụng nằm giữa ứng dụng và thiết bị đầu ra của bạn và cung cấp cho mỗi ứng dụng khả năng điều khiển âm lượng và tắt tiếng riêng. Sau khi bạn có một ứng dụng đang chạy, việc tách riêng một ứng dụng sẽ mất vài giây:</p>
<ul>
<li>Mở máy trộn từ thanh menu của bạn. Bạn sẽ thấy danh sách trực tiếp của mọi ứng dụng hiện đang tạo âm thanh.</li>
<li>Tìm ứng dụng bạn muốn nghe, cuộc gọi, chương trình phát trực tiếp, trò chơi của bạn.</li>
<li>Tắt tiếng mọi thứ khác. Nhấn vào nút tắt tiếng bên cạnh ứng dụng khác hoặc kéo thanh trượt của ứng dụng đó về 0.</li>
<li>Thế thôi. Một ứng dụng bạn để yên sẽ tiếp tục phát ở mức âm lượng tối đa trong khi các ứng dụng còn lại ở chế độ im lặng.</li>
</ul>
<p>Với <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, mỗi ứng dụng trong danh sách đều có thanh trượt riêng và nút tắt tiếng riêng, vì vậy đây chỉ là một vài cú nhấp chuột. Các ứng dụng mới bắt đầu phát sau sẽ tự động hiển thị, vì vậy nếu âm thanh thông báo cố lẻn vào, bạn có thể tắt âm thanh đó ngay tại chỗ mà không cần chạm vào ứng dụng tập trung của mình.</p>

<blockquote>Bí quyết là việc tắt tiếng "mọi thứ ngoại trừ một" chỉ là nghịch đảo của việc tắt tiếng một ứng dụng. Bạn không tắt tiếng Mac của mình, bạn đang tắt tiếng ồn xung quanh điều bạn thực sự quan tâm.</blockquote>

<h2>Lưu nó dưới dạng hồ sơ để bạn không làm lại</h2>
<p>Nếu đây là cách thiết lập mà bạn thường xuyên thực hiện thì việc thực hiện thủ công sẽ trở nên cũ kỹ. Giả sử bạn luôn muốn ứng dụng cuộc gọi của mình ở chế độ ồn ào và tắt mọi thứ khác trong cuộc họp hoặc bạn muốn luồng phát trực tiếp của mình ở phía trước và trung tâm trong khi trò chơi và trình duyệt vẫn im lặng. Cấu hình khối lượng lưu trữ các cài đặt chính xác đó cho mỗi ứng dụng và áp dụng lại chúng chỉ bằng một cú nhấp chuột.</p>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> cho phép bạn lưu các cấu hình như "Cuộc họp" hoặc "Chỉ phát trực tuyến", sau đó chuyển sang chúng ngay khi bạn cần. Thiết lập nó một lần và việc tách biệt một ứng dụng của bạn sẽ trở thành một hành động trên thanh menu duy nhất thay vì công việc có năm thanh trượt.</p>

<h2>Phiên bản thông minh hơn: auto-duck thay vì hard-mute</h2>
<p>Đôi khi bạn không muốn các ứng dụng khác biến mất hoàn toàn, bạn chỉ muốn chúng biến mất khi có điều gì đó quan trọng hơn bắt đầu. Đó là tự động né tránh. Khi ứng dụng ưu tiên của bạn phát, các ứng dụng nền sẽ tự động giảm xuống mức thấp, sau đó tăng trở lại khi dừng.</p>
<p>Điều này lý tưởng cho các cuộc gọi và luồng. Khi ai đó bắt đầu nói chuyện, nhạc của bạn sẽ giảm xuống để bạn có thể nghe thấy họ và khi cuộc gọi kết thúc, nhạc sẽ tự phát trở lại. Bạn nhận được kết quả "nghe rõ ràng một ứng dụng" mà không cần tắt tiếng và bật tiếng theo cách thủ công mỗi khi tình huống thay đổi. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> bao gồm tính năng tự động giảm âm cùng với bộ trộn thủ công, vì vậy bạn có thể chọn tắt tiếng cứng để hoàn toàn im lặng hoặc giảm âm lượng để có nền nhẹ nhàng hơn.</p>

<h2>Thúc đẩy một ứng dụng bạn đã lưu giữ</h2>
<p>Có một phần thưởng khi cách ly một ứng dụng duy nhất: bạn cũng có thể làm cho ứng dụng đó to hơn mức mà Mac thường cho phép. Một số ứng dụng, đặc biệt là các cuộc gọi điện video yên tĩnh hoặc các luồng được quản lý kém, hầu như không nghe được ngay cả ở mức âm lượng tối đa. Tính năng tăng cường cho mỗi ứng dụng sẽ đẩy một ứng dụng riêng lẻ lên trên 100% mà không làm thay đổi đầu ra hệ thống của bạn, điều này sẽ chỉ khuếch đại các ứng dụng bạn đã tắt tiếng.</p>
<p>Vì vậy, toàn bộ bước đi là: tắt tiếng ồn, giữ lại một ứng dụng của bạn và nếu ứng dụng đó quá yên tĩnh, hãy tăng cường ứng dụng đó. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> xử lý cả ba trong cùng một cửa sổ trộn.</p>

<h2>Những gì bạn không đăng ký</h2>
<p>Một lo lắng phổ biến với các công cụ âm thanh Mac là chúng yêu cầu phần mở rộng kernel, trình điều khiển âm thanh ảo hoặc trình cài đặt mờ ám được tải xuống từ một trang web ngẫu nhiên. Đó là mối lo ngại chính đáng và đó là lý do tại sao một số người tránh hoàn toàn các ứng dụng này.</p>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> có trên Mac App Store, được đóng hộp cát và cài đặt như mọi ứng dụng thông thường, không có trình điều khiển, không có DMG, không có tiện ích mở rộng hệ thống để phê duyệt. Đây là giao dịch mua €14,99 một lần chứ không phải đăng ký, vì vậy bạn thanh toán một lần và giữ nó. Điều đó quan trọng đối với thứ bạn sẽ để nó chạy trên thanh menu cả ngày.</p>

<h2>Tóm tắt nhanh</h2>
<ul>
<li>macOS không có điều khiển âm lượng riêng cho mỗi ứng dụng, vì vậy bạn cần một bộ trộn để thực hiện việc này.</li>
<li>Mở máy trộn, giữ một ứng dụng của bạn, tắt tiếng hoặc loại bỏ mọi thứ khác.</li>
<li>Lưu nó làm hồ sơ cho các cuộc gọi hoặc luồng bạn thường thực hiện.</li>
<li>Sử dụng tính năng tự động giảm tốc độ nếu bạn muốn các ứng dụng nền im lặng thay vì bị tắt.</li>
<li>Tăng cường ứng dụng đã lưu của bạn nếu ứng dụng đó quá yên tĩnh.</li>
</ul>

<p>Bạn chỉ muốn nghe những gì quan trọng và im lặng những phần còn lại? <a href="https://apps.apple.com/app/id6772792641">Nhận SoundDial trên Mac App Store</a> và thiết lập hồ sơ tắt tiếng mọi thứ khác đầu tiên của bạn trong vòng chưa đầy một phút.</p>`,
  },
  "different-volume-per-output-device-mac": {
    slug: "different-volume-per-output-device-mac",
    title: "Giữ âm lượng khác nhau cho loa và tai nghe trên Mac",
    description: "macOS quên kết hợp âm lượng ở cấp ứng dụng khi bạn chuyển đổi giữa loa và tai nghe. Đây là lý do tại sao điều đó xảy ra, các giới hạn thủ công và cách khắc phục bộ nhớ dung lượng trên mỗi ứng dụng.",
    date: "2026-07-23",
    readTime: "Đọc trong 5 phút",
    content: `<p>macOS thực sự ghi nhớ một âm lượng hệ thống riêng cho từng thiết bị đầu ra, nhưng nó sẽ quên số dư cấp ứng dụng của bạn mỗi khi bạn chuyển đổi. Vì vậy, tai nghe và loa sẽ giữ mức tổng thể của riêng chúng, tuy nhiên ngay khi bạn rút phích cắm, một ứng dụng sẽ nổ tung và một ứng dụng khác sẽ biến mất. Cách khắc phục là bộ nhớ âm lượng trên mỗi ứng dụng vẫn tồn tại khi chuyển đổi thiết bị mà macOS không có công cụ gốc nào để thực hiện.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Giữ âm lượng khác nhau giữa loa và tai nghe trên Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>macOS nhớ được gì và không nhớ gì</h2>

<p>Có một niềm tin chung rằng macOS xử lý mọi thiết bị đầu ra một cách giống hệt nhau. Nó không. Mỗi thiết bị đầu ra lưu trữ khối lượng hệ thống riêng của nó. Đặt loa MacBook của bạn thành 30% và AirPods của bạn thành 80% và macOS sẽ tách biệt hai số đó. Cắm, rút ​​phích cắm, kết nối lại và mỗi thiết bị sẽ quay trở lại nơi bạn đã để lại.</p>

<p>Vậy tại sao trải nghiệm vẫn có cảm giác đứt quãng? Bởi vì bộ nhớ đó dừng lại ở thanh trượt chung duy nhất. macOS có chính xác một điều khiển âm lượng cho mọi thứ phát trên một thiết bị nhất định. Nó không nhớ các ứng dụng riêng lẻ ồn ào như thế nào. Khi bạn chuyển từ loa sang tai nghe, sự cân bằng giữa Spotify, cuộc gọi Zoom và tab YouTube không được giữ nguyên vì sự cân bằng đó chưa bao giờ tồn tại. Mọi ứng dụng đều có chung một thanh trượt.</p>

<p>Kết quả là sự thất vọng mà mọi người mô tả là "âm lượng khác nhau giữa loa và tai nghe". Những gì họ thường muốn không chỉ là mức độ chính khác nhau cho mỗi thiết bị mà còn là sự kết hợp được ghi nhớ: âm nhạc yên tĩnh, cuộc gọi lớn, thông báo bị tắt và sự kết hợp đó nguyên vẹn cho dù chúng ở trên loa bàn hay tai nghe.</p>

<h2>Các cách giải quyết thủ công và những chỗ thiếu sót</h2>

<p>Bạn có thể đạt được một phần bằng các công cụ tích hợp sẵn và bạn nên biết mức trần trước khi tìm đến bất kỳ thứ gì khác.</p>

<ul>
<li><strong>Đặt âm lượng hệ thống của mỗi thiết bị một lần.</strong> Phát âm thanh qua loa của bạn, đặt mức, sau đó chuyển đầu ra sang tai nghe và đặt mức đó. macOS giữ lại cả hai. Điều này xử lý âm lượng chính trên mỗi thiết bị nhưng không xử lý được gì cho mỗi ứng dụng.</li>
<li><strong>Sử dụng số lượng trên mỗi ứng dụng mà ứng dụng cung cấp.</strong> Spotify, VLC và hầu hết các trình duyệt đều có ổ đĩa bên trong riêng. Bạn có thể cắt bớt một ứng dụng lớn bên trong ứng dụng đó. Lưu ý: cài đặt này tồn tại trong ứng dụng chứ không phải thiết bị, vì vậy nó không thay đổi khi bạn chuyển sang tai nghe và hầu hết các ứng dụng (Slack, Zoom, thông báo hệ thống, Thư) hoàn toàn không có quyền kiểm soát như vậy.</li>
<li><strong>Chuyển đầu ra từ Trung tâm điều khiển hoặc thanh menu.</strong> Giữ Option khi nhấp vào biểu tượng âm lượng trên thanh menu để chuyển nhanh giữa các thiết bị. Nhanh, nhưng nó chỉ di chuyển xung quanh cấp độ chính chứ không khôi phục danh sách kết hợp trên mỗi ứng dụng.</li>
</ul>

<p>Những thứ này giúp bạn có được âm lượng chính trên mỗi thiết bị. Những gì không ai trong số họ cung cấp cho bạn là số dư được ghi nhớ trên mỗi ứng dụng sẽ theo bạn trên các thiết bị. Khoảng cách đó chính xác là nơi gây ra sự khó chịu và nó mang tính cấu trúc: HĐH đơn giản là không có bộ trộn cho mỗi ứng dụng, không giống như Windows, đã xuất xưởng trong nhiều năm.</p>

<h2>Bộ nhớ dung lượng trên mỗi ứng dụng và lý do việc chuyển đổi thiết bị là vấn đề thực sự</h2>

<p>Cách khắc phục sâu hơn là cung cấp âm lượng riêng cho mỗi ứng dụng và duy trì các cài đặt đó. Đó chính là điều mà trình trộn trên mỗi ứng dụng thích <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> được xây dựng cho. Nó nằm trong thanh menu của bạn, liệt kê mọi ứng dụng hiện đang tạo ra âm thanh và cung cấp cho mỗi ứng dụng một thanh trượt độc lập, chuyển đổi tắt tiếng và thậm chí tăng tốc hơn 100% cho các ứng dụng yên tĩnh.</p>

<p>Phần quan trọng đối với vấn đề loa và tai nghe: những mức độ đó được ghi nhớ. Đặt âm nhạc của bạn ở mức 40%, cuộc gọi của bạn ở mức 90% và ứng dụng trò chuyện ở chế độ tắt tiếng và <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> giữ hỗn hợp đó. Khi bạn rút tai nghe và quay lại sử dụng loa, bạn sẽ không cân bằng lại ba ứng dụng bằng tay mỗi lần.</p>

<p>Hồ sơ khối lượng thực hiện điều này hơn nữa. Bạn có thể lưu tập hợp các cấp độ cho mỗi ứng dụng đã được đặt tên và gọi lại chỉ bằng một cú nhấp chuột, do đó, danh sách kết hợp "tai nghe, công việc tập trung" và danh sách kết hợp "loa, cuộc họp" đều là một lựa chọn duy nhất thay vì đặt lại thủ công.</p>

<blockquote><p>Sự thay đổi về tinh thần: ngừng suy nghĩ về một thanh trượt chính mà bạn tiếp tục kéo và bắt đầu nghĩ về một bản kết hợp đã lưu cho mỗi tình huống. Việc chuyển đổi thiết bị không còn là công việc cân bằng lại nữa.</p></blockquote>

<h2>Chuyển đổi đầu ra nhanh chóng mà không làm mất bản phối của bạn</h2>

<p>Thiết bị chuyển mạch phải nhanh và không phá hủy. Từ cùng một bảng điều khiển thanh menu, bạn có thể thay đổi thiết bị đầu ra của mình, do đó, việc chuyển từ loa sang tai nghe chỉ bằng một cú nhấp chuột và cấp độ cho mỗi ứng dụng của bạn sẽ xuất hiện thay vì thu gọn về một con số chung duy nhất.</p>

<p>Một tính năng liên quan đáng được đề cập là tự động giảm âm lượng: khi âm thanh phát ra trên micrô của bạn (bạn bắt đầu nói hoặc cuộc gọi bắt đầu), các ứng dụng khác sẽ tự động nhúng để bạn có thể nghe thấy, sau đó quay lại mức đã đặt của chúng. Đó là nguyên tắc tương tự được áp dụng cho sự chú ý thay vì thiết bị, một điều nữa mà macOS sẽ không tự thực hiện được.</p>

<h2>Làm thế nào để thiết lập nó</h2>

<ul>
<li>cài đặt <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> từ Mac App Store. Nó được đóng hộp cát nên không có trình điều khiển, không có DMG và không có phần mở rộng kernel để phê duyệt.</li>
<li>Phát âm thanh trong các ứng dụng bạn sử dụng nhiều nhất để chúng xuất hiện trong bộ trộn.</li>
<li>Đặt cấp độ của từng ứng dụng, tắt tiếng mọi thứ bạn không muốn và tăng cường mọi thứ quá yên tĩnh.</li>
<li>Lưu sự sắp xếp đó dưới dạng hồ sơ, ví dụ: một điều chỉnh cho tai nghe và một điều chỉnh cho loa.</li>
<li>Khi bạn chuyển đổi thiết bị, hãy nhớ lại cấu hình phù hợp hoặc chỉ để các cấp độ đã lưu trên mỗi ứng dụng của bạn tiếp tục.</li>
</ul>

<p>Tóm tắt trung thực: macOS ghi nhớ âm lượng trên mỗi thiết bị đầu ra ở cấp độ chính, nhưng nó sẽ không bao giờ nhớ kết hợp trên mỗi ứng dụng của bạn vì nó không có bộ trộn trên mỗi ứng dụng. Nếu mục tiêu thực sự của bạn là sự cân bằng nhất quán giữa âm nhạc, cuộc gọi và thông báo tồn tại sau mỗi lần chuyển đổi giữa loa và tai nghe, thì bạn cần có bộ nhớ cho mỗi ứng dụng trên hệ điều hành.</p>

<p>Bạn muốn loa và tai nghe giữ được bản phối riêng mà không cần điều chỉnh lại mọi ứng dụng? <a href="https://apps.apple.com/app/id6772792641">Nhận SoundDial trên Mac App Store</a> với giá €14,99 một lần, không cần đăng ký, không cần trình điều khiển.</p>`,
  },
  "sound-control-alternative-mac": {
    slug: "sound-control-alternative-mac",
    title: "Sound Control đã ngừng sản xuất? Sự thay thế khối lượng Mac trên mỗi ứng dụng tốt nhất (2026)",
    description: "Sound Control của Static Z Software đã ngừng hoạt động và ngừng hoạt động trên macOS hiện đại. Đây là lý do tại sao nó ngừng hoạt động, những gì nó đã làm và bộ trộn âm lượng trên mỗi ứng dụng tốt nhất để chuyển sang vào năm 2026.",
    date: "2026-07-23",
    readTime: "Đọc trong 5 phút",
    content: `<p>Sound Control của Static Z Software đã ngừng hoạt động và không còn được bán hoặc cập nhật nữa, đồng thời nó ngày càng bị lỗi trên macOS hiện đại vì nó dựa vào trình điều khiển âm thanh cấp hạt nhân mà Apple đã khóa. Nếu bạn cần số lượng trên mỗi ứng dụng ngay hôm nay, sự thay thế rõ ràng nhất là <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, máy trộn Mac App Store đóng hộp cát không có trình điều khiển.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Sound Control Đã ngừng sản xuất? Sự thay thế khối lượng Mac trên mỗi ứng dụng tốt nhất (2026)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Sound Control thực sự đã làm gì</h2>
<p>Trong nhiều năm, Sound Control là câu trả lời phù hợp cho lỗ hổng macOS thực sự: vẫn chưa có bộ trộn âm lượng cho mỗi ứng dụng tích hợp sẵn trên Mac. Windows đã có một thanh trượt trong Bộ trộn âm lượng kể từ Vista, nhưng macOS chỉ cung cấp cho bạn một thanh trượt chính duy nhất. Sound Control lấp đầy khoảng trống đó bằng bảng điều khiển thanh menu gọn gàng cho phép bạn:</p>
<ul>
<li>Đặt mức âm lượng độc lập cho từng ứng dụng đang chạy.</li>
<li>Tắt tiếng từng ứng dụng mà không chạm vào phần còn lại của âm thanh hệ thống.</li>
<li>Tăng cường các ứng dụng yên tĩnh trên 100 phần trăm.</li>
<li>Áp dụng bộ cân bằng cho mỗi ứng dụng và điều chỉnh số dư.</li>
<li>Định tuyến ứng dụng âm thanh và ghim đến các thiết bị đầu ra cụ thể.</li>
</ul>
<p>Đối với bất kỳ ai đã từng gặp sự cố cuộc gọi Zoom trong khi tab YouTube ở chế độ nền thì thầm, khả năng kiểm soát trên mỗi ứng dụng đó đã mang tính thay đổi. Nó đã trở thành một phần không thể thiếu trên nhiều máy của người dùng chuyên nghiệp Mac.</p>

<h2>Tại sao nó ngừng hoạt động</h2>
<p>Câu chuyện kỹ thuật trung thực có ý nghĩa quan trọng ở đây vì nó giải thích tại sao đây không phải là một lỗi mà ai đó có thể vá một cách đơn giản. Sound Control hoạt động bằng cách cài đặt trình điều khiển âm thanh hệ thống - một phần mở rộng kernel (kext) tự chèn vào đường dẫn âm thanh macOS để nó có thể chặn và định hình lại đầu ra của từng ứng dụng. Cái móc sâu đó chính xác là thứ đã làm cho các tính năng EQ và boost trở nên khả thi.</p>
<p>Bắt đầu với macOS 10.15 Catalina và tăng tốc thông qua Big Sur và quá trình chuyển đổi Apple Silicon, Apple bắt đầu ngừng sử dụng các phần mở rộng hạt nhân để thay thế bằng các lựa chọn thay thế không gian người dùng. Trên Apple Silicon Mac, việc tải kext của bên thứ ba yêu cầu giảm mức độ bảo mật hệ thống trong Chế độ khôi phục và Apple đã nói rõ rằng âm thanh cũ kext đang trong thời gian mượn. Phần mềm Static Z cuối cùng đã ngừng bán và phát triển Sound Control. Kết quả: trên các phiên bản macOS gần đây, quá trình cài đặt không thành công, âm thanh bị trục trặc hoặc trình điều khiển chỉ từ chối tải mà không hạ cấp bảo mật mà hầu hết mọi người đều không muốn thực hiện.</p>
<blockquote>Đây không phải là sự lơ là của nhà phát triển. Đó là một sự thay đổi cấp độ nền tảng. Apple đã đóng cửa loại trình điều khiển âm thanh cấp thấp Sound Control được tích hợp sẵn và không có bản cập nhật nào có thể mở lại hoàn toàn.</blockquote>

<h2>Điều gì đã thay đổi trên macOS hiện đại</h2>
<p>Apple đã bổ sung một điều liên quan: Core Audio hiện cung cấp API Tap (được giới thiệu trong macOS 14.2 Sonoma) cho phép các ứng dụng thu và xử lý âm thanh trên mỗi quá trình từ không gian người dùng - không có kext, không hạ cấp bảo mật, không cần khởi động lại vào Recovery. Đây là con đường hiện đại được chấp nhận cho âm thanh trên mỗi ứng dụng và đó là những gì một bộ trộn hiện tại nên được xây dựng dựa trên đó. Sự đánh đổi là trung thực: các thao tác nhấn vào không gian người dùng bị hạn chế hơn so với trình điều khiển hạt nhân cũ, vì vậy bạn nên mong đợi âm lượng, tắt tiếng và tăng tốc rõ ràng trên mỗi ứng dụng thay vì EQ Sound Control tham số đầy đủ cho mỗi ứng dụng được cung cấp.</p>

<h2>Sự thay thế tốt nhất: SoundDial</h2>
<p>Nếu bạn muốn cốt lõi của những gì Sound Control đã làm — khối lượng độc lập trên mỗi ứng dụng — trên Mac, bạn thực sự có thể giữ an toàn và cập nhật, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> là tùy chọn di chuyển sạch gần nhất vào năm 2026. Đây là bộ trộn âm lượng trên mỗi ứng dụng trên thanh menu được xây dựng cho ngăn xếp âm thanh macOS hiện đại. Những gì mang lại từ quy trình làm việc Sound Control:</p>
<ul>
<li><strong>Khối lượng độc lập trên mỗi ứng dụng</strong> — một thanh trượt cho mỗi ứng dụng đang chạy, ngay trên thanh menu.</li>
<li><strong>Tắt tiếng trên mỗi ứng dụng</strong> — tắt tiếng một ứng dụng trong khi mọi ứng dụng khác vẫn tiếp tục phát.</li>
<li><strong>Tăng âm lượng trên mỗi ứng dụng</strong> — đẩy một ứng dụng yên tĩnh lên trên mức trần bình thường của nó.</li>
<li><strong>Hồ sơ khối lượng</strong> — lưu cài đặt bộ trộn cho các bối cảnh khác nhau (cuộc gọi, âm nhạc, chơi game) và chuyển đổi giữa chúng.</li>
<li><strong>Tự động giảm tốc độ</strong> — tự động giảm âm lượng ứng dụng nền, hữu ích khi bạn bắt đầu nói chuyện hoặc có cuộc gọi đến.</li>
<li><strong>Chuyển đổi đầu ra nhanh chóng</strong> — chuyển đổi giữa loa, tai nghe và các thiết bị khác mà không cần đi sâu vào Cài đặt hệ thống.</li>
</ul>
<p>Những khác biệt thực tế quan trọng đối với việc di chuyển: <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> vận chuyển qua Mac App Store, được đóng hộp cát và không cài đặt trình điều khiển cũng như không có DMG. Điều đó có nghĩa là không có tiện ích mở rộng kernel nào được phê duyệt, không có Chế độ khôi phục và không làm giảm tình trạng bảo mật của Mac — chính những điểm yếu đã giết chết Sound Control. Đây là giao dịch mua một lần trị giá €14,99, không phải đăng ký.</p>

<h2>Cách chuyển đổi từng bước</h2>
<ul>
<li><strong>Gỡ cài đặt Sound Control một cách sạch sẽ.</strong> Bởi vì nó đã cài đặt trình điều khiển nên hãy sử dụng trình gỡ cài đặt riêng nếu nó vẫn chạy hoặc xóa các thành phần trình điều khiển âm thanh trước khi cài đặt bất kỳ thứ gì mới. Hai móc âm thanh cạnh tranh nhau có thể gây ra trục trặc.</li>
<li><strong>Cài đặt SoundDial từ App Store.</strong> Không cần khởi động lại hoặc thay đổi bảo mật.</li>
<li><strong>Cấp quyền âm thanh mà nó yêu cầu.</strong> Đây là những gì cho phép nó đọc và kiểm soát đầu ra của mỗi ứng dụng trên macOS hiện đại.</li>
<li><strong>Mở bảng điều khiển thanh menu và đặt cấp độ.</strong> Các ứng dụng đang chạy của bạn xuất hiện với các thanh trượt riêng lẻ; điều chỉnh, tắt tiếng hoặc tăng tốc khi cần thiết.</li>
<li><strong>Lưu một hồ sơ.</strong> Nếu bạn có các thiết lập Sound Control yêu thích, hãy tạo lại chúng dưới dạng cấu hình để bạn có thể chuyển đổi chỉ bằng một cú nhấp chuột.</li>
</ul>

<h2>Kỳ vọng trung thực</h2>
<p>Nếu lý do duy nhất khiến bạn sử dụng Sound Control là âm lượng, tắt tiếng và tăng tốc trên mỗi ứng dụng, thì bộ trộn hộp cát hiện đại sẽ đáp ứng đầy đủ cho bạn. Nếu bạn chủ yếu dựa vào bộ cân bằng cho mỗi ứng dụng của nó, hãy lưu ý rằng EQ sâu đã gắn liền với mô hình trình điều khiển cũ và là tính năng khó tái tạo một cách rõ ràng nhất theo các quy tắc hiện hành của Apple. Đặt kỳ vọng phù hợp và bạn sẽ không ngạc nhiên.</p>

<p>Sẵn sàng lấy lại âm lượng trên mỗi ứng dụng mà không khiến trình điều khiển phải đau đầu? <a href="https://apps.apple.com/app/id6772792641">Nhận SoundDial trên Mac App Store</a> — €14,99 một lần, được đóng hộp cát, không đăng ký, không có trình điều khiển.</p>`,
  },
  "soundbunny-alternative-mac": {
    slug: "soundbunny-alternative-mac",
    title: "SoundBunny đã biến mất - Ứng dụng khối lượng trên mỗi ứng dụng Mac hiện đại để thay thế nó",
    description: "SoundBunny của Prosoft đã ngừng sản xuất. Đây là bộ trộn âm lượng trên mỗi ứng dụng macOS hiện được bảo trì tích cực để thay thế nó — cùng với cách di chuyển thiết lập âm thanh trên mỗi ứng dụng của bạn mà không cần trình điều khiển hạt nhân.",
    date: "2026-07-23",
    readTime: "Đọc trong 5 phút",
    content: `<p>Nếu SoundBunny ngừng hoạt động hoặc không còn được bán, thì sản phẩm thay thế hiện đại là <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, bộ trộn âm lượng trên mỗi ứng dụng trên thanh menu được xây dựng cho macOS hiện tại. Nó cung cấp cho bạn công việc cốt lõi giống nhau — âm lượng, tắt tiếng và tăng tốc độc lập cho mỗi ứng dụng — dưới dạng giao dịch mua Mac App Store một lần trị giá €14,99 mà không cần quản lý trình điều khiển hạt nhân, DMG hoặc đăng ký.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial - SoundBunny đã biến mất - Ứng dụng khối lượng trên mỗi ứng dụng Mac hiện đại để thay thế nó" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Chuyện gì đã xảy ra với SoundBunny?</h2>
<p>SoundBunny là tiện ích khối lượng trên mỗi ứng dụng của Prosoft Engineering dành cho macOS. Nó cho phép bạn đặt mức âm lượng khác nhau cho từng ứng dụng đang chạy ngay từ thanh menu - Nhạc yên tĩnh, cuộc gọi to, trình duyệt ở đâu đó ở giữa. Trong nhiều năm, đây là một trong số ít công cụ lấp đầy khoảng trống mà Apple chưa bao giờ đóng lại.</p>
<p>Vấn đề là SoundBunny là phần mềm cũ. Nó không theo kịp những thay đổi sâu sắc mà Apple đã thực hiện đối với âm thanh và bảo mật macOS - Apple Silicon, thời gian chạy cứng hơn, thắt chặt các quy tắc mở rộng hệ thống và loại bỏ các móc âm thanh cũ hơn. Khi một tiện ích như thế này ngừng nhận bản cập nhật, cuối cùng nó sẽ bị hỏng: không khởi chạy được, mất quyền kiểm soát luồng ứng dụng sau khi cập nhật hệ điều hành hoặc đơn giản là không thể cài đặt sạch trên Mac hiện đại. Nếu đó là nơi bạn đang ở, bạn không làm gì sai cả. Ứng dụng đứng sau chứ không phải bạn.</p>

<h2>Tại sao macOS vẫn cần bộ trộn của bên thứ ba</h2>
<p>Đây là phần trung thực nhất: đây là một lỗ hổng thực sự trong macOS, không phải lỗi bạn có thể sửa trong Cài đặt. Windows đã cung cấp Bộ trộn âm lượng cho mỗi ứng dụng trong hơn một thập kỷ. macOS chưa bao giờ có. Thanh trượt âm lượng hệ thống và cài đặt Âm thanh sẽ kiểm soát <em>thiết bị đầu ra</em> nói chung - mọi ứng dụng đều có cùng cấp độ chính. Không có cách tích hợp nào để nói "giữ Safari ở mức 40% nhưng Zoom ở mức 100%".</p>
<p>Đó là lý do tại sao các công cụ như SoundBunny tồn tại và tại sao ngày nay việc thay thế vẫn cần thiết. Nhu cầu vẫn không biến mất khi ứng dụng xuất hiện - Apple vẫn chưa giải quyết được vấn đề đó.</p>

<h2>Sự thay thế hiện đại: SoundDial</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> là bộ trộn âm lượng cho mỗi ứng dụng nằm trong thanh menu của bạn và thực hiện những việc mà người dùng SoundBunny tin cậy, được xây dựng dựa trên macOS của ngày hôm nay thay vì của ngày hôm qua. Sự chồng chéo tính năng bao gồm các yếu tố cần thiết:</p>
<ul>
<li><strong>Khối lượng độc lập trên mỗi ứng dụng</strong> - một thanh trượt cho mỗi ứng dụng đang chạy, chính xác là mô hình tinh thần SoundBunny.</li>
<li><strong>Tắt tiếng trên mỗi ứng dụng</strong> — tắt tiếng một ứng dụng ồn ào mà không chạm vào mọi thứ khác.</li>
<li><strong>Tăng âm lượng trên mỗi ứng dụng</strong> - đẩy một ứng dụng yên tĩnh <em>ở trên</em> 100% khi video hoặc cuộc gọi được ghi ở mức quá thấp. SoundBunny không thể khuếch đại tối đa hệ thống trước đây một cách đáng tin cậy trên macOS hiện đại; boost là một bản nâng cấp thực sự ở đây.</li>
<li><strong>Hồ sơ khối lượng</strong> - lưu một tập hợp các cấp độ cho mỗi ứng dụng (kết hợp "công việc", kết hợp "chơi game") và chuyển đổi giữa chúng thay vì di chuyển từng thanh trượt một.</li>
<li><strong>Tự động giảm tốc độ</strong> — tự động giảm âm lượng ứng dụng nền khi một nguồn âm thanh khác (chẳng hạn như micrô của bạn trong cuộc gọi) hoạt động.</li>
<li><strong>Chuyển đổi đầu ra nhanh chóng</strong> — chuyển đổi giữa loa, tai nghe và các đầu ra khác từ cùng một menu.</li>
</ul>

<h2>Việc di chuyển thực sự trông như thế nào</h2>
<p>Không có bước nhập — mức âm lượng trên mỗi ứng dụng không phải là tệp bạn mang theo — nhưng quá trình chuyển đổi diễn ra nhanh chóng:</p>
<ul>
<li><strong>Loại bỏ SoundBunny đúng cách.</strong> Thoát khỏi nó, sau đó xóa ứng dụng. Nếu nó đã cài đặt bất kỳ mục trợ giúp hoặc mục đăng nhập nào, hãy xóa mục đó để hai tiện ích không tranh nhau trên cùng một luồng âm thanh.</li>
<li><strong>Cài đặt SoundDial từ Mac App Store.</strong> Nó được đóng hộp cát và phân phối qua cửa hàng, do đó không cần cài đặt DMG và không có cảnh báo "nhà phát triển không xác định". Một lần mua hàng, được gắn với ID Apple của bạn.</li>
<li><strong>Cấp quyền truy cập âm thanh trong lần khởi chạy đầu tiên.</strong> macOS sẽ yêu cầu quyền cho SoundDial xem âm thanh ứng dụng. Đây là con đường hiện đại, được chấp thuận mà Apple cung cấp - không cần mở rộng kernel, không khởi động lại, không làm giảm tính bảo mật hệ thống. Cấp nó và các ứng dụng đang chạy của bạn xuất hiện dưới dạng thanh trượt.</li>
<li><strong>Xây dựng lại hỗn hợp của bạn.</strong> Đặt các ứng dụng phổ biến của bạn, sau đó lưu sắp xếp đó dưới dạng hồ sơ để bạn không bao giờ phải làm lại.</li>
</ul>

<h2>Sự khác biệt thực tế so với SoundBunny</h2>
<p>Sự khác biệt quan trọng nhất đó là <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> là phần mềm hiện tại Nó chạy nguyên bản trên Apple Silicon, sử dụng các API âm thanh được Apple hỗ trợ và là một ứng dụng Mac App Store - có nghĩa là các bản cập nhật sẽ đến qua cửa hàng và nó được xây dựng để tồn tại trong các bản nâng cấp hệ điều hành thay vì phá vỡ chúng. Bị đóng hộp cát cũng có nghĩa là nó không thể vươn ra ngoài làn đường của nó, điều này khiến bạn yên tâm về thứ gì đó nằm giữa ứng dụng và loa của bạn.</p>
<p>Một vài lời cảnh báo trung thực để kỳ vọng là đúng. Vì SoundDial hoạt động trong hệ thống âm thanh của Apple nên khả năng kiểm soát là tốt nhất cho các ứng dụng tiêu chuẩn định tuyến qua đầu ra hệ thống thông thường. Một số phần mềm phát âm thanh thông qua đường dẫn riêng hoặc một thiết bị độc quyền và không có bộ trộn thanh menu nào - bao gồm SoundBunny - có thể chi phối hoàn toàn những phần mềm đó. Và khối lượng trên mỗi ứng dụng vốn là một lớp phần mềm nằm trên macOS; nó không phải là một máy trộn phần cứng. Trong những giới hạn thực tế đó, nó thực hiện công việc mà SoundBunny từng làm.</p>

<blockquote>Nếu bạn chuyển sang Mac từ Windows với mong muốn có Bộ trộn âm lượng cho mỗi ứng dụng thì đây là công cụ sẽ lấp đầy khoảng trống đó — và giờ đây nó thực sự là một công cụ đang được duy trì.</blockquote>

<p>SoundBunny đã hoạt động tốt nhưng đó là di sản. Nếu bạn cần âm lượng trên mỗi ứng dụng, tắt tiếng và tăng tốc trên Mac hiện đại, <a href="https://apps.apple.com/app/id6772792641">nhận SoundDial trên Mac App Store</a> — €14,99 một lần, không cần đăng ký, không cần trình điều khiển.</p>`,
  },
  "boom-2-alternative-per-app-volume-mac": {
    slug: "boom-2-alternative-per-app-volume-mac",
    title: "Boom 2 Thay thế cho Mac: Khối lượng mỗi ứng dụng không có bán thêm Boom 3D",
    description: "Boom 2 là di sản và tiếp tục đẩy bạn lên Boom 3D. Nếu bạn chỉ muốn khối lượng trên mỗi ứng dụng và mức tăng đơn giản trên macOS hiện đại, thì đây là một giải pháp thay thế tập trung và cách thức hoạt động của nó.",
    date: "2026-07-23",
    readTime: "Đọc trong 5 phút",
    content: `<p>Nếu bạn thích Boom 2 để tăng tốc toàn hệ thống nhưng muốn đơn giản <strong>mỗi ứng dụng</strong> âm lượng trên Mac hiện tại, câu trả lời trung thực là Boom 2 là công cụ cũ và không còn là công cụ phù hợp nữa. Một sự thay thế tập trung là <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, một bộ trộn thanh menu cung cấp cho mỗi ứng dụng thanh trượt âm lượng, tắt tiếng và tăng âm lượng riêng với giá €14,99 một lần mà không cần phải chuyển sang gói lớn hơn.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Boom 2 Thay thế cho Mac: Khối lượng mỗi ứng dụng không có bán thêm Boom 3D" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Tại sao Boom 2 không còn phù hợp</h2>
<p>Boom 2 là một ứng dụng được yêu thích vì một lý do cụ thể: nó đã tăng âm lượng tổng thể của Mac của bạn vượt quá mức tối đa của hệ thống và thêm bộ chỉnh âm. Nó đã làm điều đó trên toàn hệ thống chứ không phải trên mỗi ứng dụng. Điều đó ổn vào năm 2015. Năm 2026 nó có hai vấn đề.</p>
<p>Đầu tiên, đó là di sản. Global Delight rõ ràng đã chuyển năng lượng của mình sang Boom 3D và nếu bạn mở trang sản phẩm Boom 2, bạn sẽ thấy mình gần như ngay lập tức được chuyển sang ứng dụng mới hơn, đắt tiền hơn. Boom 2 vẫn tồn tại nhưng đó là bước đệm mà nhà cung cấp dùng để bán Boom 3D chứ không phải là sản phẩm nhận được sự yêu thích tích cực.</p>
<p>Thứ hai và quan trọng hơn: Boom 2 chưa bao giờ là bộ trộn âm lượng cho mỗi ứng dụng. Nó nâng cao và định hình một đầu ra chính. Nếu nỗi đau thực sự của bạn là tiếng ping của Slack to hơn âm nhạc của bạn hoặc tab trình duyệt đang át đi cuộc gọi thì Boom 2 sẽ không giải quyết được điều đó. Nó làm cho mọi thứ cùng nhau to hơn. Đó là một công việc khác.</p>

<h2>"Khối lượng mỗi ứng dụng" thực sự có nghĩa là gì trên macOS</h2>
<p>Đây là bối cảnh trung thực mà hầu hết các cách làm tròn thay thế đều bỏ qua: macOS hoàn toàn không có bộ trộn âm lượng tích hợp sẵn cho mỗi ứng dụng. Windows đã có điều này trong nhiều năm - nhấp chuột phải vào loa, mở Bộ trộn âm lượng và đặt Chrome thành 40% và Spotify thành 80%. Apple chưa bao giờ vận chuyển thứ đó. Phím âm lượng macOS chỉ di chuyển một cấp độ chính.</p>
<p>Vì vậy, khi bạn tìm kiếm "giải pháp thay thế Boom 2", thứ bạn thường thực sự tìm kiếm không phải là Mac mạnh hơn — mà đó là khả năng kiểm soát mỗi ứng dụng mà người dùng Windows coi là đương nhiên. Đó là một lỗ hổng thực sự trong hệ điều hành, không phải thứ mà Boom 2 hay bất kỳ ứng dụng nào quên xây dựng.</p>

<h2>Trường hợp SoundDial phù hợp</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> được xây dựng cho khoảng cách đó một cách cụ thể. Nó nằm trong thanh menu và liệt kê các ứng dụng hiện đang phát âm thanh, mỗi ứng dụng có thanh trượt riêng. Bạn đặt cấp độ cho mỗi ứng dụng thay vì thúc đẩy một điều khiển chính và hy vọng điều tốt nhất.</p>
<p>Nó làm gì:</p>
<ul>
<li><strong>Khối lượng độc lập trên mỗi ứng dụng</strong> — tắt trình duyệt, giữ nhạc ở nơi bạn muốn, không gây tổn hại toàn cầu.</li>
<li><strong>Tắt tiếng trên mỗi ứng dụng</strong> — tắt tiếng một ứng dụng ồn ào mà không chạm vào bất cứ thứ gì khác.</li>
<li><strong>Tăng cường trên mỗi ứng dụng</strong> — đẩy một ứng dụng riêng lẻ vượt quá mức trần thông thường khi video hoặc cuộc gọi được ghi quá yên tĩnh. Đây là phần mà người hâm mộ Boom 2 thường bỏ lỡ, ngoại trừ ở đây nó nhắm mục tiêu vào một ứng dụng chứ không phải toàn bộ hệ thống.</li>
<li><strong>Hồ sơ khối lượng</strong> — lưu các bố cục như "tập trung", "cuộc họp" hoặc "chơi trò chơi" và chuyển đổi chỉ bằng một cú nhấp chuột.</li>
<li><strong>Tự động giảm tốc độ</strong> — tự động hạ thấp các ứng dụng khác khi bạn bắt đầu nói chuyện, hữu ích cho các cuộc gọi và ghi âm.</li>
<li><strong>Chuyển đổi đầu ra nhanh chóng</strong> — chuyển đổi giữa loa, tai nghe và các đầu ra khác từ cùng một menu.</li>
</ul>

<h2>Làm thế nào để thiết lập nó</h2>
<p>Quy trình làm việc ngắn:</p>
<ul>
<li>cài đặt <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> từ Mac App Store - không DMG, không trình điều khiển, không khởi động lại.</li>
<li>Nhấp vào biểu tượng thanh menu để xem mọi ứng dụng hiện đang tạo ra âm thanh.</li>
<li>Kéo thanh trượt của từng ứng dụng đến mức bạn muốn; tắt tiếng hoặc tăng cường riêng lẻ khi cần thiết.</li>
<li>Lưu cách sắp xếp dưới dạng hồ sơ nếu bạn muốn sử dụng lại nó sau này.</li>
</ul>
<p>Bởi vì nó được vận chuyển thông qua App Store nên nó được đóng hộp cát và cài đặt dễ dàng. Điều đó đáng được nêu ra vì một số công cụ âm thanh cũ hơn dựa vào phần mở rộng kernel hoặc trình điều khiển âm thanh ảo - thứ mà macOS hiện đại ngày càng chống lại. SoundDial không yêu cầu bạn cài đặt trình điều khiển hoặc hạ thấp bất kỳ cài đặt bảo mật nào.</p>

<h2>Một hạn chế trung thực</h2>
<p>Tăng cường trên mỗi ứng dụng là có thật nhưng không phải là phép thuật. Nếu âm thanh nguồn của ứng dụng thực sự yên tĩnh hoặc được ghi âm kém, việc tăng cường âm thanh nguồn sẽ làm tăng mức nhiễu cùng với tín hiệu, do đó, vật liệu rất yên tĩnh có thể phát ra âm thanh rít khi ấn mạnh. Đó là giới hạn vật lý của khả năng khuếch đại, không phải là sai sót trong bất kỳ ứng dụng cụ thể nào - khả năng tăng cường hệ thống của Boom 2 cũng có sự đánh đổi tương tự. Hãy coi việc tăng cường làm khoảng trống cho các trường hợp thực tế chứ không phải giải pháp cho âm thanh bị hỏng.</p>

<h2>Boom 2 so với máy trộn tập trung</h2>
<p>Nếu điều bạn yêu thích ở Boom 2 là âm lượng toàn hệ thống cộng với EQ và bạn không quan tâm đến khả năng kiểm soát trên mỗi ứng dụng thì Boom 3D chính là người kế thừa dự kiến của nhà cung cấp — đó là một con đường công bằng và chúng tôi sẽ không giả vờ khác. Nhưng nếu bạn đã thử Boom 2 và nhận ra điều bạn thực sự muốn là tắt hoặc mở một ứng dụng mà không di chuyển mọi thứ, thì gói EQ-and-Boost là hình dạng công cụ sai lầm.</p>
<blockquote>Boom 2 làm cho toàn bộ Mac to hơn. Bộ trộn trên mỗi ứng dụng cho phép bạn quyết định ứng dụng nào to hơn. Những giải quyết vấn đề khác nhau.</blockquote>
<p>Sự khác biệt về giá cũng đáng được nêu rõ. SoundDial là €14,99 một lần. Không có đăng ký, không có bản dùng thử chuyển thành gói lớn hơn và không có đường dẫn trong ứng dụng đưa bạn đến cấp đắt hơn. Bạn mua máy trộn, bạn sở hữu máy trộn.</p>

<p>Nếu âm lượng trên mỗi ứng dụng — không phải EQ toàn hệ thống — mới là điều bạn thực sự theo đuổi, <a href="https://apps.apple.com/app/id6772792641">thử SoundDial trên Mac App Store</a> và đặt cấp độ của bạn theo cách macOS lẽ ra phải cho phép bạn thực hiện.</p>`,
  },
  "finetune-vs-sounddial-mac": {
    slug: "finetune-vs-sounddial-mac",
    title: "FineTune so với SoundDial: Nguồn mở miễn phí so với khối lượng trả phí cho mỗi ứng dụng trên Mac",
    description: "FineTune là một ứng dụng khối lượng ứng dụng mã nguồn mở miễn phí dành cho Mac; SoundDial là ứng dụng App Store trả phí, đóng hộp cát với tính năng tăng cường, cấu hình và hỗ trợ. Dưới đây là sự so sánh trung thực để giúp bạn lựa chọn.",
    date: "2026-07-23",
    readTime: "Đọc trong 6 phút",
    content: `<p>FineTune là trình trộn âm lượng cho mỗi ứng dụng mã nguồn mở miễn phí dành cho macOS, vì vậy nếu giá cả là mối quan tâm duy nhất của bạn thì đó là một lựa chọn chính hãng. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> là một ứng dụng Mac App Store trả phí (14,99 €, một lần) có thêm tính năng tăng âm lượng cho mỗi ứng dụng, cấu hình đã lưu, tự động giảm tải và hỗ trợ nhà cung cấp. Sự lựa chọn thực sự là miễn phí và DIY so với hộp cát và được hỗ trợ.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — FineTune so với SoundDial: Mã nguồn mở miễn phí so với khối lượng trả phí cho mỗi ứng dụng trên Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Vấn đề mà cả hai ứng dụng đều giải quyết</h2>

<p>macOS vẫn chưa có bộ trộn âm lượng tích hợp cho mỗi ứng dụng. Windows đã có tính năng này trong nhiều năm - nhấp chuột phải vào biểu tượng loa, mở Bộ trộn âm lượng và mọi ứng dụng đều có thanh trượt riêng. Trên Mac, bạn có chính xác một thanh trượt âm lượng hệ thống cho mọi thứ: âm nhạc, cuộc gọi điện video, YouTube, âm thanh thông báo và trò chơi đều chia sẻ nó. Nếu cuộc gọi của bạn quá yên tĩnh và Spotify quá lớn, "cách khắc phục" duy nhất của bạn là tắt tiếng hoàn toàn Spotify.</p>

<p>Cả FineTune và SoundDial đều tồn tại để lấp đầy khoảng trống đó. Họ cung cấp cho mỗi ứng dụng đang chạy khả năng điều khiển âm lượng riêng để bạn có thể duy trì cuộc họp ở mức 100% trong khi kéo nhạc nền xuống 20% ​​— mà không cần chạm vào thanh trượt chính.</p>

<h2>Điều FineTune đúng</h2>

<p>FineTune là một ứng dụng mã nguồn mở, miễn phí mới hơn theo tinh thần SoundSource. Hãy công bằng về điểm mạnh của nó, bởi vì chúng là có thật:</p>

<ul>
  <li><strong>Nó không tốn kém gì.</strong> Không có giấy phép, không dùng thử, không cần nâng cấp.</li>
  <li><strong>Nguồn đang mở.</strong> Bạn có thể đọc chính xác chức năng của nó, kiểm tra quyền riêng tư và — nếu bạn biết Swift — sửa đổi hoặc phân nhánh nó.</li>
  <li><strong>Nó hướng tới cộng đồng.</strong> Bất kỳ ai cũng có thể sửa lỗi và mã này tồn tại lâu hơn bất kỳ công ty nào.</li>
  <li><strong>Nó bao gồm nhu cầu cốt lõi.</strong> Khối lượng độc lập trên mỗi ứng dụng, đây là tính năng mà 90% mọi người thực sự đang tìm kiếm.</li>
</ul>

<p>Nếu yêu cầu duy nhất của bạn là "hãy để tôi tắt một ứng dụng mà không tắt mọi thứ" và bạn cảm thấy thoải mái với phần mềm không có bộ phận hỗ trợ chính thức thì FineTune là một câu trả lời hợp pháp. Đề xuất nó ở đây không phải là một sự nhượng bộ - đó là sự trung thực.</p>

<h2>Sự đánh đổi trung thực của con đường DIY</h2>

<p>Nguồn mở và miễn phí mang lại những chi phí thực tế không hiển thị trên thẻ giá. Đây không phải là những cú đánh cụ thể vào FineTune - chúng là bản chất của cách tiếp cận:</p>

<ul>
  <li><strong>Việc cài đặt là thủ công.</strong> Các công cụ âm thanh nguồn mở thường được phân phối dưới dạng bản dựng đã tải xuống hoặc công thức Homebrew, không thông qua App Store. Bạn cài đặt bên ngoài sự đánh giá của Apple và bạn phải cập nhật nó.</li>
  <li><strong>Về bản chất, việc chặn âm thanh trên mỗi ứng dụng rất mong manh.</strong> Định tuyến âm thanh của ứng dụng khác là công việc của hệ thống sâu. Khi Apple gửi bản cập nhật macOS làm thay đổi ngăn xếp âm thanh, các công cụ này có thể bị hỏng cho đến khi ai đó vá chúng. Với một dự án tình nguyện, tháng đó có thể “ai đó” sẽ bận.</li>
  <li><strong>Hỗ trợ là nỗ lực tốt nhất.</strong> Nếu có sự cố xảy ra, cách giải quyết của bạn là vấn đề GitHub và phải chờ đợi. Không có phản hồi nào được đảm bảo và không ai có nghĩa vụ phải sửa nó.</li>
  <li><strong>Phạm vi tính năng là bất cứ điều gì mà người bảo trì gửi đi.</strong> Kiểm soát âm lượng cốt lõi có thể được bảo hiểm; tính năng bổ sung phụ thuộc hoàn toàn vào thời gian đóng góp.</li>
</ul>

<blockquote>Khung trung thực: FineTune đổi tiền lấy trách nhiệm bảo trì. Bạn tiết kiệm €14,99 và chịu rủi ro rằng bản cập nhật hệ điều hành sẽ khiến nó bị hỏng cho đến khi cộng đồng xử lý kịp thời.</blockquote>

<h2>SoundDial khác ở đâu</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> thực hiện giao dịch ngược lại. Bạn thanh toán một lần và đổi lại bạn nhận được sản phẩm App Store do nhà cung cấp đứng sau sản phẩm đó và bộ tính năng rộng hơn được xây dựng dựa trên số lượng mỗi ứng dụng:</p>

<ul>
  <li><strong>Âm lượng và tắt tiếng trên mỗi ứng dụng</strong> — đường cơ sở chung mà cả hai ứng dụng đều cung cấp.</li>
  <li><strong>BOOST khối lượng mỗi ứng dụng</strong> — đẩy ứng dụng quá yên tĩnh lên trên 100%. Hữu ích cho các ứng dụng có đầu ra âm thanh yếu mà việc tắt các ứng dụng khác xuống vẫn chưa đủ.</li>
  <li><strong>Hồ sơ khối lượng</strong> — lưu toàn bộ danh sách kết hợp ("Cuộc họp", "Tập trung", "Chơi game") và chuyển đổi chỉ bằng một cú nhấp chuột thay vì đặt lại thanh trượt mỗi lần.</li>
  <li><strong>Tự động giảm tốc độ</strong> — tự động hạ thấp các ứng dụng chạy nền khi bạn nói hoặc khi một ứng dụng đã chọn hoạt động, nhờ đó cuộc gọi sẽ kết thúc mà không cần phải thực hiện thủ công.</li>
  <li><strong>Chuyển đổi đầu ra nhanh chóng</strong> — chuyển giữa loa, tai nghe và các đầu ra khác từ thanh menu.</li>
</ul>

<p>Cũng quan trọng như vậy <em>làm thế nào</em> nó vận chuyển. SoundDial được đóng hộp cát và phân phối thông qua Mac App Store - không có DMG riêng biệt, không có trình điều khiển hạt nhân, không cài đặt trình điều khiển âm thanh. Các bản cập nhật được gửi qua App Store giống như bất kỳ ứng dụng nào khác và có một nhà phát triển thực sự sẽ gửi email khi có sự cố. Đó là giá trị cụ thể của khoản tiền 14,99 €: không chỉ có nhiều tính năng hơn mà còn có người chịu trách nhiệm duy trì hoạt động của chúng trên các bản phát hành macOS.</p>

<h2>Một lời cảnh báo trung thực áp dụng cho cả hai</h2>

<p>Không ứng dụng bên thứ ba nào có thể biến hệ thống âm thanh của macOS thành Bộ trộn âm lượng của Windows, vì Apple không cung cấp API công khai rõ ràng cho âm thanh trên mỗi ứng dụng. Mọi công cụ trong danh mục này — miễn phí hoặc trả phí, mở hoặc đóng — đều hoạt động xung quanh giới hạn đó bằng cách sử dụng các kỹ thuật âm thanh cấp hệ thống. Điều đó có nghĩa là cả FineTune và SoundDial đều có thể bị ảnh hưởng bởi những thay đổi lớn về âm thanh của macOS. Sự khác biệt là ai sẽ chịu trách nhiệm sửa chữa sau đó: một cộng đồng tình nguyện hoặc một nhà cung cấp được trả phí có sản phẩm phụ thuộc vào cộng đồng đó.</p>

<h2>Bạn nên chọn cái nào?</h2>

<ul>
  <li><strong>Chọn FineTune nếu</strong> bạn muốn chi phí bằng 0, coi trọng tính minh bạch của nguồn mở, chỉ cần khối lượng cơ bản cho mỗi ứng dụng và thoải mái cài đặt bên ngoài App Store và tự hỗ trợ khi có sự cố.</li>
  <li><strong>Chọn SoundDial nếu</strong> bạn muốn cài đặt App Store chỉ bằng một cú nhấp chuột, các tính năng bổ sung như tăng tốc, cấu hình và tự động giảm tốc cũng như sự đảm bảo về các bản cập nhật và hỗ trợ từ nhà cung cấp có giao diện trong trò chơi.</li>
</ul>

<p>Cả hai đều hợp lệ. Nó thực sự phụ thuộc vào việc bạn muốn tiêu tiền hay dành sự chú ý. Nếu bạn muốn mua một ứng dụng được hỗ trợ, có hộp cát và không bao giờ nghĩ đến nó nữa, <a href="https://apps.apple.com/app/id6772792641">nhận SoundDial trên Mac App Store</a> với giá €14,99 một lần — không đăng ký, không trình điều khiển, không DMG.</p>`,
  },
  "background-music-vs-sounddial-mac": {
    slug: "background-music-vs-sounddial-mac",
    title: "Background Music vs SoundDial: Bộ trộn âm lượng Mac miễn phí có đủ không?",
    description: "Cuộc đối đầu công bằng giữa ứng dụng Background Music miễn phí và SoundDial trả phí. Cách tiếp cận trình điều khiển ảo miễn phí hoạt động ở đâu, nơi nào nó bị hỏng và khi nào thì một bộ trộn gốc trị giá €14,99 có giá trị.",
    date: "2026-07-23",
    readTime: "Đọc trong 6 phút",
    content: `<p>Background Music miễn phí và thực sự tốt ở những điều cơ bản: nó cung cấp cho mỗi ứng dụng thanh trượt âm lượng riêng và có thể tự động tạm dừng nhạc khi ứng dụng khác phát. Nếu đó là tất cả những gì bạn cần, hãy sử dụng nó. Tuy nhiên, nó dựa vào trình điều khiển âm thanh ảo có thể bị hỏng sau khi cập nhật macOS và thiếu khả năng tăng cường, cấu hình và chuyển đổi đầu ra trên mỗi ứng dụng. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> đổi tiền lấy một giải pháp thay thế được hỗ trợ, không cần trình điều khiển, có hộp cát.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial - Background Music so với SoundDial: Bộ trộn âm lượng Mac miễn phí có đủ không?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Đầu tiên, sự thật trung thực về macOS</h2>
<p>macOS không có bộ trộn âm lượng tích hợp cho mỗi ứng dụng. Windows đã có một bộ trộn âm lượng trong hơn một thập kỷ, nhưng trên Mac, thanh trượt hệ thống sẽ di chuyển mọi thứ cùng một lúc. Không có API nào được Apple hỗ trợ cho phép ứng dụng của bên thứ ba chặn và cân bằng lại các luồng ứng dụng riêng lẻ một cách rõ ràng. Khoảng cách duy nhất đó là lý do tại sao các công cụ như Background Music và SoundDial lại tồn tại và đó là nguyên nhân cốt lõi của hầu hết các sự đánh đổi dưới đây.</p>

<h2>Background Music làm gì tốt</h2>
<p>Background Music là một ứng dụng thanh menu nguồn mở đã tồn tại trong nhiều năm và có lượng người theo dõi trung thành vì lý do chính đáng. Nó mang lại cho bạn:</p>
<ul>
<li><strong>Khối lượng độc lập trên mỗi ứng dụng</strong> - tính năng cốt lõi. Giảm Spotify xuống trong khi vẫn duy trì cuộc gọi to.</li>
<li><strong>Tự động tạm dừng</strong> — nó có thể tạm dừng trình phát nhạc của bạn khi âm thanh bắt đầu ở nơi khác, đây là một điểm nhấn thú vị cho các cuộc họp.</li>
<li><strong>Khối lượng thiết bị theo dõi bạn</strong> và một giao diện đơn giản, không vô nghĩa.</li>
<li><strong>Chi phí bằng không</strong> — nó miễn phí và mã được công khai.</li>
</ul>
<p>Với nhiều người thế là đủ. Nếu toàn bộ danh sách mong muốn của bạn là "làm cho một ứng dụng ồn ào trở nên yên tĩnh hơn mà không cần chạm vào phần còn lại", thì Background Music sẽ đáp ứng điều đó và bạn không nên trả tiền cho những thứ bạn không cần. Công bằng ở đây là vấn đề quan trọng: đây là một công cụ hữu ích hợp pháp.</p>

<h2>Nơi mà cách tiếp cận tự do bộc lộ những đường nối của nó</h2>
<p>Việc đánh bắt là <em>làm thế nào</em> Background Music đạt được số lượng trên mỗi ứng dụng. Vì macOS không cung cấp đường dẫn chính thức nên nó cài đặt trình điều khiển âm thanh ảo (phiên bản sửa đổi của phương pháp Soundflower cũ) để định tuyến âm thanh hệ thống của bạn đi qua chính nó. Kiến trúc đó rất thông minh, nhưng nó mang lại chi phí thực sự:</p>
<ul>
<li><strong>Nó bị hỏng sau khi cập nhật macOS.</strong> Trình điều khiển âm thanh ảo nằm sâu trong hệ thống và các bản phát hành macOS chính trước đây đã vô hiệu hóa hoặc làm mất ổn định chúng. Người dùng thường xuyên báo cáo tình trạng im lặng, biến dạng hoặc cần phải cài đặt lại sau khi nâng cấp. Khi nó bị hỏng, bạn thường ở một mình.</li>
<li><strong>Cài đặt nặng hơn.</strong> Bạn đang thêm một thiết bị âm thanh liền kề với kernel vào Mac của mình chứ không chỉ là một ứng dụng. Việc gỡ cài đặt một cách sạch sẽ có thể khó khăn.</li>
<li><strong>Nó trở thành thiết bị đầu ra mặc định của bạn.</strong> Vì mọi thứ đều được định tuyến thông qua thiết bị ảo nên một số ứng dụng âm thanh chuyên nghiệp, hội nghị hoặc trò chơi có thể hoạt động kỳ lạ và việc chuyển đổi đầu ra thực của bạn là một bước bổ sung.</li>
<li><strong>Sự phát triển mang tính cộng đồng.</strong> Không có bàn hỗ trợ. Các bản sửa lỗi sẽ đến khi một tình nguyện viên có thời gian, điều này đối với một công cụ âm thanh có thể đột nhiên im lặng là một rủi ro đáng kể.</li>
</ul>
<p>Không điều nào trong số này làm cho Background Music trở nên tồi tệ. Nó làm cho nó trở thành một công cụ miễn phí với sự đánh đổi của một công cụ miễn phí.</p>

<h2>Số tiền bạn thực sự trả cho SoundDial</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> là một ứng dụng Mac App Store, định hình nó là gì. Vì các ứng dụng App Store được đóng hộp cát và không thể cung cấp loại trình điều khiển ảo cấp thấp mà Background Music sử dụng nên SoundDial được thiết kế để chạy mà không cần cài đặt thiết bị âm thanh riêng biệt hoặc DMG. Điều đó có nghĩa là:</p>
<ul>
<li><strong>Không có vấn đề gì về trình điều khiển ảo.</strong> Không có thiết bị đầu ra bổ sung nào chiếm quyền điều khiển chuỗi âm thanh của bạn và không có gì để cài đặt lại khi hệ thống thay đổi.</li>
<li><strong>Nó tồn tại trong các bản cập nhật macOS một cách duyên dáng hơn nhiều.</strong> Việc phân phối và hộp cát App Store có nghĩa là nó được xây dựng dựa trên các đường dẫn được hỗ trợ và được cập nhật thông qua cửa hàng, do đó, việc nâng cấp hệ điều hành sẽ ít khiến bạn im lặng hơn.</li>
<li><strong>Tăng âm lượng cho mỗi ứng dụng.</strong> Đây là một điểm khác biệt thực sự về tính năng: SoundDial có thể đẩy một ứng dụng <em>ở trên</em> 100% đối với các nguồn yên tĩnh — podcast được ghi quá thấp, cuộc gọi điện video bị bóp nghẹt. Background Music chỉ suy giảm.</li>
<li><strong>Hồ sơ khối lượng.</strong> Lưu một tập hợp các cấp độ cho mỗi ứng dụng ("Cuộc họp", "Âm nhạc", "Trò chơi") và chuyển đổi chỉ bằng một cú nhấp chuột thay vì mỗi lần kéo thanh trượt.</li>
<li><strong>Tự động vịt.</strong> Tự động giảm âm lượng của các ứng dụng khác khi nguồn đã chọn phát — một ý tưởng tự động tạm dừng có thể định cấu hình tốt hơn.</li>
<li><strong>Chuyển đổi đầu ra nhanh chóng</strong> được đưa vào thanh menu, cộng với tính năng tắt tiếng trên mỗi ứng dụng.</li>
<li><strong>Hỗ trợ thực sự.</strong> Nó là một sản phẩm trả phí và có người chịu trách nhiệm khi có sự cố xảy ra.</li>
</ul>

<h2>Quyết định trung thực</h2>
<blockquote>Nếu bạn muốn miễn phí và chỉ cần dung lượng cơ bản cho mỗi ứng dụng cũng như cảm thấy thoải mái khi khắc phục sự cố sau khi cập nhật macOS thì Background Music là một lựa chọn chắc chắn. Nếu bạn muốn tăng cường, cấu hình, giảm tốc độ, chuyển đổi đầu ra, không có tính dễ hỏng của trình điều khiển ảo và ai đó sẽ gửi email khi nó bị hỏng, SoundDial trị giá € 14,99.</blockquote>
<p>Một vài dây buộc bê tông. Nếu bạn thường xuyên xử lý các nguồn quá yên tĩnh, chỉ riêng việc tăng cường sẽ biện minh cho mức giá - Background Music đơn giản là không thể làm cho âm thanh to hơn nguồn. Nếu bạn lo lắng về canh bạc "liệu âm thanh của tôi có tồn tại được trong bản cập nhật" hàng năm hay không thì ứng dụng cửa hàng đóng hộp cát sẽ loại bỏ nỗi lo lắng đó. Nếu bạn thích những cảnh đặt trước và quên, cấu hình sẽ giúp bạn tránh được những rắc rối thực sự. Và đó là €14,99 một lần, không phải là đăng ký, vì vậy so sánh này là một lần mua duy nhất so với thời gian bạn dành để duy trì trình điều khiển miễn phí.</p>
<p>Ngược lại, nếu bạn là người thích mày mò, thích nguồn mở, muốn đọc mã và hầu như chỉ tắt một ứng dụng - hãy tiết kiệm tiền của bạn. Cả hai công cụ đều giải quyết được cùng một vấn đề cốt lõi; chúng khác nhau về độ bền, chiều sâu tính năng và ai sẽ nắm bắt được bạn khi macOS thay đổi bên dưới chúng.</p>

<p>Muốn có khối lượng trên mỗi ứng dụng mà không cần đánh bạc với trình điều khiển ảo? <a href="https://apps.apple.com/app/id6772792641">Nhận SoundDial trên Mac App Store</a> — €14,99 một lần, được đóng hộp cát, không có trình điều khiển, có tính năng tăng tốc, cấu hình và tính năng tự động giảm tốc được tích hợp sẵn.</p>`,
  },
  "is-soundsource-worth-it-mac": {
    slug: "is-soundsource-worth-it-mac",
    title: "SoundSource có trị giá 39 USD không? Giải pháp thay thế Mac dùng một lần rẻ hơn",
    description: "SoundSource là một công cụ âm thanh Mac mạnh mẽ với giá ~39 USD, nhưng sẽ là quá mức cần thiết nếu bạn chỉ cần tăng âm lượng và tăng âm lượng cho mỗi ứng dụng. Đây là sự so sánh trung thực và sự thay thế một lần trị giá €14,99.",
    date: "2026-07-23",
    readTime: "Đọc trong 5 phút",
    content: `<p>SoundSource rất đáng giá nếu bạn cần bộ công cụ đầy đủ: âm lượng trên mỗi ứng dụng, EQ 10 băng tần cho mỗi ứng dụng, định tuyến âm thanh giữa các thiết bị và hiệu ứng trên toàn hệ thống. Nhưng ở mức khoảng 39 đô la, nó là quá mức cần thiết nếu bạn chủ yếu muốn âm lượng trên mỗi ứng dụng, tắt tiếng trên mỗi ứng dụng và tăng âm lượng. Đối với công việc hẹp hơn đó, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> chi phí € 14,99 một lần.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial - SoundSource có trị giá 39 USD không? Giải pháp thay thế Mac dùng một lần rẻ hơn" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>SoundSource thực sự làm gì</h2>
<p>SoundSource của Rogue Amoeba là một phần mềm thực sự xuất sắc và điều quan trọng là phải công bằng về điều đó. Nó không chỉ là một bộ trộn âm lượng. Nó mang lại cho bạn:</p>
<ul>
<li><strong>Kiểm soát âm lượng trên mỗi ứng dụng</strong> từ thanh menu, tính năng mà hầu hết mọi người đều tìm đến.</li>
<li><strong>Bộ cân bằng 10 băng tần đầy đủ</strong> bạn có thể áp dụng cho mỗi ứng dụng hoặc toàn hệ thống, cùng với các hiệu ứng âm thanh khác (thông qua plugin Audio Unit).</li>
<li><strong>Định tuyến đầu ra/đầu vào</strong>, bao gồm việc gửi một ứng dụng đến một thiết bị đầu ra khác với phần còn lại của hệ thống.</li>
<li><strong>Chuyển đổi thiết bị nhanh chóng</strong> và các cài đặt trước EQ dành riêng cho tai nghe.</li>
</ul>
<p>Nếu bạn là người làm podcast, người phát trực tuyến hoặc người mê âm thanh muốn điều chỉnh EQ trên tai nghe của mình, hãy chuyển hướng âm thanh của một ứng dụng sang một loa riêng hoặc xếp chồng các hiệu ứng Audio Unit, SoundSource sẽ xứng đáng với mức giá của nó. Không có gì ở đây là một tiếng gõ vào nó.</p>

<h2>Câu hỏi về giá</h2>
<p>SoundSource là giấy phép trả phí một lần với giá khoảng $39 (giá thay đổi tùy theo phiên bản và chương trình khuyến mãi). Đây không phải là đăng ký định kỳ theo nghĩa Netflix, nhưng nó tuân theo mô hình ứng dụng trả phí cổ điển: bạn mua phiên bản chính và các bản nâng cấp lớn trong tương lai thường được giảm giá cho các bản nâng cấp trả phí thay vì miễn phí vĩnh viễn. Trong nhiều năm, đó không chỉ là một lần mua hàng. Đối với nhiều người dùng Mac, câu hỏi trung thực là: tôi có phải trả 39 USD cho bộ định tuyến và EQ khi tất cả những gì tôi thực sự chạm vào là thanh trượt âm lượng cho mỗi ứng dụng không?</p>

<blockquote>Nếu bạn đã mở SoundSource và chỉ sử dụng thanh trượt âm lượng và nút tắt tiếng, bạn sẽ phải trả tiền cho một bộ để sử dụng một ngăn của nó.</blockquote>

<h2>Tại sao vấn đề lại tồn tại</h2>
<p>Đây là nguyên nhân cốt lõi trung thực: macOS không có bộ trộn âm lượng tích hợp sẵn cho mỗi ứng dụng. Windows đã có một chiếc trong nhiều năm, nhưng trên Mac, âm lượng hệ thống là hoàn toàn hoặc không có gì. Không có cách nào do Apple cung cấp để giữ Spotify im lặng trong khi cuộc gọi điện video vẫn ồn ào hoặc tắt tiếng một ứng dụng mà không chạm vào mọi thứ khác. Khoảng cách đó chính là lý do tại sao các công cụ như SoundSource và <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> tồn tại. Đó là một hạn chế thực sự của hệ điều hành, không phải thứ gì đó mà cả hai ứng dụng đều phát minh ra để giải quyết.</p>

<h2>Trường hợp phù hợp với một lựa chọn nhẹ hơn, rẻ hơn</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> là bộ trộn âm lượng trên mỗi ứng dụng trên thanh menu được xây dựng cho trường hợp thông thường thay vì trường hợp âm thanh chuyên nghiệp. Nó bao gồm:</p>
<ul>
<li><strong>Khối lượng độc lập trên mỗi ứng dụng</strong> — bỏ nhạc của bạn trong khi cuộc họp vẫn ở mức tối đa.</li>
<li><strong>Tắt tiếng trên mỗi ứng dụng</strong> — tắt tiếng một ứng dụng mà không tắt tiếng Mac.</li>
<li><strong>Tăng âm lượng trên mỗi ứng dụng</strong> — đẩy ứng dụng yên tĩnh lên trên 100% bình thường khi nguồn quá yếu.</li>
<li><strong>Hồ sơ khối lượng</strong> — lưu một tập hợp các cấp độ cho mỗi ứng dụng (ví dụ: bố cục "tiêu điểm" hoặc "cuộc gọi") và chuyển đổi chỉ bằng một cú nhấp chuột.</li>
<li><strong>Tự động giảm tốc độ</strong> — tự động hạ thấp các ứng dụng khác khi bạn bắt đầu nói chuyện hoặc khi một ứng dụng đã chọn phát.</li>
<li><strong>Chuyển đổi đầu ra nhanh chóng</strong> — chuyển giữa loa, tai nghe và các thiết bị khác từ thanh menu.</li>
</ul>
<p>Đó là <strong>€14,99 một lần</strong>, được bán thông qua Mac App Store, do đó, nó được đóng hộp cát và không có DMG riêng biệt, không có phần mở rộng kernel và không có trình điều khiển âm thanh để cài đặt. Bạn tải xuống nó giống như bất kỳ ứng dụng App Store nào và nó cập nhật thông qua cửa hàng.</p>

<h2>Sự so sánh trung thực</h2>
<p>Hãy sáng suốt về sự đánh đổi. SoundSource làm được nhiều việc hơn SoundDial và nếu bất kỳ điều nào sau đây quan trọng với bạn thì SoundSource là lựa chọn tốt hơn nên mua:</p>
<ul>
<li>Bạn muốn có một hệ thống hoặc ứng dụng thực sự <strong>bộ cân bằng</strong> và hiệu ứng Đơn vị âm thanh.</li>
<li>Bạn cần phải <strong>định tuyến một ứng dụng đến một thiết bị đầu ra khác</strong> hơn mọi thứ khác.</li>
<li>Bạn dựa vào <strong>cài đặt trước EQ dành riêng cho tai nghe</strong> và xử lý âm thanh chi tiết.</li>
</ul>
<p>SoundDial không thực hiện định tuyến EQ hoặc định tuyến thiết bị trên mỗi ứng dụng. Nó cố tình thu hẹp hơn. Đổi lại, những gì nó mang lại cho bạn là mức giá thấp hơn, dung lượng nhẹ hơn và giao diện thanh menu tập trung cho điều mà hầu hết mọi người thực sự mong muốn: giữ từng ứng dụng ở cấp độ bạn chọn, với mức tăng cường và cấu hình ở trên cùng.</p>

<h2>Vậy SoundSource có đáng không?</h2>
<p>Có, nếu bạn sử dụng EQ và định tuyến. Đó là phần mềm hoàn thiện, được hỗ trợ tốt từ một nhà phát triển có uy tín và mức giá phản ánh khả năng thực sự. Nhưng “đáng giá” còn tùy thuộc vào thứ bạn chạm vào. Nếu bạn mở ứng dụng và chỉ điều chỉnh thanh trượt âm lượng, tắt tiếng ứng dụng hoặc muốn một ứng dụng yên tĩnh to hơn, thì bạn đang trả tiền cho gói cao cấp cho các nhu cầu về bộ trộn cơ bản. Trong trường hợp đó, công cụ trị giá €14,99 một lần sẽ phù hợp hơn và bạn luôn có thể chuyển lên SoundSource sau nếu nhu cầu của bạn tăng lên về EQ và định tuyến.</p>

<p>Nếu âm lượng trên mỗi ứng dụng, tăng cường, tắt tiếng, cấu hình và tự động giảm âm lượng là tất cả những gì bạn đang theo đuổi, <a href="https://apps.apple.com/app/id6772792641">nhận SoundDial trên Mac App Store</a> — €14,99 một lần, không cần đăng ký, không cần trình điều khiển.</p>`,
  },
  "chrome-too-loud-mac": {
    slug: "chrome-too-loud-mac",
    title: "Chrome Quá ồn ào trên Mac? Tắt một trình duyệt mà không tắt tiếng mọi thứ",
    description: "Chrome phát ra âm thanh to hơn các ứng dụng khác của bạn trên Mac? Tìm hiểu các bản sửa lỗi tích hợp (tắt tiếng trên mỗi tab, cài đặt âm thanh trang web) và cách đặt âm lượng thực sự cho mỗi ứng dụng cho Chrome để Chrome luôn yên tĩnh hơn mọi thứ khác.",
    date: "2026-07-23",
    readTime: "Đọc trong 5 phút",
    content: `<p>macOS không có âm lượng tích hợp cho mỗi ứng dụng, vì vậy bạn không thể giảm Chrome trong khi vẫn để các ứng dụng khác ở mức âm lượng tối đa. Các bản sửa lỗi miễn phí nhanh nhất của bạn là tắt tiếng các tab ồn ào, giảm âm lượng bên trong mỗi trình phát video hoặc chặn âm thanh trên mỗi trang trong cài đặt của Chrome. Để có mức âm lượng thực sự, liên tục chỉ dành cho Chrome, bạn cần có bộ trộn cho mỗi ứng dụng.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Chrome Quá ồn ào trên Mac? Tắt một trình duyệt mà không tắt tiếng mọi thứ" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Tại sao Chrome nghe to hơn mọi thứ khác</h2>
<p>Chrome không nhất thiết phải "to hơn" theo thiết kế — Chrome định tuyến âm thanh từ nhiều nguồn độc lập: YouTube, quảng cáo tự động phát, cuộc gọi điện video, tab nhạc nền và ứng dụng web, mỗi nguồn đều có âm lượng riêng. Một số trang web rất hấp dẫn, quảng cáo rất ồn ào và Chrome phát tất cả chúng ở mức đầu ra tối đa của hệ thống của bạn. Trong khi đó, ứng dụng âm nhạc hoặc cuộc gọi của bạn có thể yên tĩnh hơn, do đó Chrome chiếm ưu thế trong danh sách kết hợp.</p>
<p>Trên Windows, bạn chỉ cần mở Bộ trộn âm lượng và kéo thanh trượt Chrome xuống. macOS đơn giản là không có tính năng đó. Phím âm lượng hệ thống điều khiển mọi thứ cùng một lúc, do đó, việc tắt Chrome cũng sẽ tắt nhạc, thông báo và cuộc gọi của bạn. Đó là hạn chế cốt lõi — và đó là lỗ hổng của hệ điều hành, không phải do bạn đang làm sai.</p>

<h2>Các bản sửa lỗi tích hợp mà không mất phí</h2>
<p>Trước khi cài đặt bất cứ điều gì, hãy thử những điều này. Họ sẽ không cung cấp cho bạn một nút xoay âm lượng Chrome duy nhất, nhưng họ giải quyết được hầu hết các vấn đề về "một tab lớn".</p>
<ul>
<li><strong>Tắt tiếng một tab ồn ào.</strong> Nhấp chuột phải vào tab và chọn "Tắt tiếng trang web" hoặc nhấp vào biểu tượng loa nhỏ xuất hiện trên tab đang phát âm thanh. Thao tác này sẽ tắt hoàn toàn tab đó mà không chạm vào phần còn lại của Chrome.</li>
<li><strong>Giảm âm lượng bên trong máy nghe nhạc.</strong> Thủ thuật đáng tin cậy nhất: kéo thanh trượt âm lượng xuống bên trong YouTube, Netflix hoặc bất cứ thứ gì đang phát. Người chơi web ghi nhớ cấp độ riêng của họ trên mỗi trang web, do đó, YouTube yên tĩnh hơn sẽ luôn im lặng vào lần tiếp theo.</li>
<li><strong>Chặn âm thanh trên mỗi trang web.</strong> đi đến <em>chrome://settings/nội dung/âm thanh</em>. Bạn có thể chuyển các trang web giữa "được phép" và "tắt tiếng" và thêm các tên miền cụ thể vào danh sách ẩn. Tuyệt vời để tắt tiếng vĩnh viễn các trang web tự động phát.</li>
<li><strong>Tắt quảng cáo tự động phát.</strong> Âm thanh quảng cáo thường là thủ phạm thực sự. Trình chặn nội dung hoặc tắt tiếng tab cho đến khi bạn sẵn sàng xem sẽ loại bỏ hầu hết âm thanh bất ngờ.</li>
</ul>
<blockquote>Đây là những thực sự hữu ích và miễn phí. Nhưng hãy chú ý điều họ không thể làm: họ tắt tiếng hoặc quản lý từng tab riêng lẻ. Không ai trong số họ cho phép bạn nói "giữ toàn bộ Chrome ở mức 40% trong khi âm nhạc của tôi vẫn ở mức 100%".</blockquote>

<h2>Giới hạn trung thực: không có dung lượng cho mỗi ứng dụng trong macOS</h2>
<p>Nếu mục tiêu thực tế của bạn là "Chrome phải luôn yên tĩnh hơn các ứng dụng khác của tôi" thì các công cụ tích hợp sẽ không hiệu quả. Tắt tiếng trên mỗi tab là tất cả hoặc không có gì. Thanh trượt trình phát được đặt lại khi một trang web không nhớ chúng và phải làm lại liên tục. Và âm lượng hệ thống di chuyển mọi thứ lại với nhau.</p>
<p>Đây là một hạn chế thực sự của macOS, không phải lỗi mà bạn có thể định cấu hình. Apple chưa bao giờ xuất xưởng bộ trộn âm lượng kiểu Windows. Cách duy nhất để có được mức âm lượng độc lập, ổn định cho Chrome cụ thể là ứng dụng của bên thứ ba nằm giữa ứng dụng và thiết bị đầu ra của bạn và áp dụng mức tăng cho mỗi ứng dụng.</p>

<h2>Đặt âm lượng thực cho mỗi ứng dụng cho Chrome</h2>
<p>Một máy trộn thanh menu như <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> cung cấp cho macOS khả năng kiểm soát âm lượng trên mỗi ứng dụng mà nó còn thiếu. Nó liệt kê mọi ứng dụng hiện đang phát âm thanh và cung cấp cho mỗi ứng dụng một thanh trượt riêng — vì vậy, bạn có thể kéo Chrome xuống mức thoải mái và để Spotify, các cuộc gọi và âm thanh hệ thống của bạn ở đúng vị trí.</p>
<p>Đây là cách bạn chế ngự Chrome ồn ào với nó:</p>
<ul>
<li>Mở bộ trộn thanh menu và tìm Chrome trong danh sách các ứng dụng đang hoạt động.</li>
<li>Kéo thanh trượt của Chrome xuống khoảng 40 đến 50 phần trăm. Các ứng dụng khác không bị ảnh hưởng.</li>
<li>Nếu một ứng dụng cụ thể quá <em>yên tĩnh</em> thay vào đó — một ứng dụng cuộc gọi thì thầm — hãy sử dụng <a href="https://apps.apple.com/app/id6772792641">tăng âm lượng trên mỗi ứng dụng</a> để đẩy nó lên trên 100 phần trăm trong khi vẫn giữ Chrome ở mức thấp.</li>
<li>Tắt tiếng Chrome ngay lập tức bằng tính năng tắt tiếng cho mỗi ứng dụng khi bạn cần im lặng mà không đóng các tab.</li>
</ul>
<p>Vì cấp độ gắn liền với ứng dụng nên nó bị dính chặt. Chrome duy trì âm lượng bạn đã chọn trên các tab, trang web và khởi động lại — không cần kéo lại thanh trượt trình phát mỗi khi bạn mở video mới.</p>

<h2>Đi xa hơn: cấu hình, giảm tốc độ và chuyển đổi đầu ra</h2>
<p>Khi bạn có quyền kiểm soát trên mỗi ứng dụng, một vài tính năng bổ sung sẽ khiến bạn nên lưu ý. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> cho phép bạn tiết kiệm âm lượng <strong>hồ sơ</strong> — ví dụ: cấu hình "tập trung" trong đó Chrome yên tĩnh và âm nhạc lớn và cấu hình "xem" trong đó Chrome thống trị — và chuyển đổi giữa chúng chỉ bằng một cú nhấp chuột. Tính năng tự động giảm bớt có thể tự động nhúng các ứng dụng khác khi nguồn đã chọn bắt đầu (tiện dụng để cuộc gọi không bao giờ bị chôn vùi dưới tab trình duyệt ồn ào). Và chuyển đổi đầu ra nhanh chóng cho phép bạn chuyển đổi giữa loa, tai nghe và các thiết bị khác mà không cần đi sâu vào Cài đặt hệ thống.</p>
<p>Đó là khoản phí mua một lần trị giá €14,99 trên Mac App Store — không cần đăng ký, không cần cài đặt trình điều khiển, không có DMG hoặc phần mở rộng kernel. Bởi vì nó được đóng hộp cát và phân phối thông qua App Store nên nó không yêu cầu cài đặt trình điều khiển âm thanh sơ sài, các công cụ trộn cũ hơn dựa vào.</p>

<h2>Bạn nên sử dụng bản sửa lỗi nào?</h2>
<p>Nếu thỉnh thoảng bạn chỉ có một tab khó chịu, hãy sử dụng tính năng tắt tiếng tích hợp của Chrome và cài đặt âm thanh trang web — chúng miễn phí và hoạt động. Nếu bạn liên tục thấy mình mong muốn Chrome có thể bị tắt một cách đơn giản trong khi mọi thứ khác vẫn được giữ nguyên, thì đó chính xác là khoảng trống mà macOS để ngỏ và trình trộn trên mỗi ứng dụng là giải pháp khắc phục rõ ràng.</p>

<p>Bạn muốn Chrome yên tĩnh hơn vĩnh viễn mà không cần tắt tiếng nhạc hoặc cuộc gọi? <a href="https://apps.apple.com/app/id6772792641">Nhận SoundDial trên Mac App Store</a> và cung cấp cho mỗi ứng dụng thanh trượt âm lượng riêng.</p>`,
  },
  "whatsapp-telegram-notifications-too-loud-mac": {
    slug: "whatsapp-telegram-notifications-too-loud-mac",
    title: "Thông báo WhatsApp & Telegram Âm thanh quá lớn trên Mac? Từ chối chúng",
    description: "Sửa âm thanh thông báo trên màn hình WhatsApp và Telegram quá lớn trên Mac của bạn. Bắt đầu với cài đặt tích hợp của từng ứng dụng, sau đó hạ thấp hoặc tắt tiếng toàn bộ ứng dụng khi macOS không cung cấp cho bạn quyền kiểm soát từng ứng dụng.",
    date: "2026-07-23",
    readTime: "Đọc trong 5 phút",
    content: `<p>Bắt đầu bên trong mỗi ứng dụng: WhatsApp và Telegram đều cho phép bạn tắt tiếng hoặc thay đổi âm thanh thông báo trong cài đặt của riêng chúng, đây là cách khắc phục rõ ràng nhất. Nhưng macOS không có thanh trượt âm lượng thông báo cho mỗi ứng dụng, vì vậy nếu âm thanh của ứng dụng vẫn quá lớn, đòn bẩy thực sự duy nhất của bạn là giảm hoặc tắt tiếng toàn bộ âm thanh của ứng dụng đó bằng công cụ âm lượng cho mỗi ứng dụng.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Thông báo WhatsApp &amp; Telegram Âm thanh quá lớn trên Mac? Từ chối chúng" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Trước tiên, hãy sử dụng cài đặt thông báo của chính ứng dụng</h2>

<p>Cả WhatsApp và Telegram đều cung cấp bộ điều khiển âm thanh của riêng chúng và đây là lúc bạn nên luôn bắt đầu. Đây là cách khắc phục chính xác nhất và không ảnh hưởng đến bất kỳ thứ gì khác trên Mac của bạn.</p>

<p><strong>Máy tính để bàn WhatsApp:</strong> Mở WhatsApp, nhấp vào <em>Cài đặt</em> (biểu tượng bánh răng), sau đó <em>Thông báo</em>. Bạn có thể tắt <em>Âm thanh</em> hoàn toàn trong khi vẫn giữ biểu ngữ hoặc tắt tính năng xem trước thông báo. WhatsApp không cung cấp thanh trượt âm lượng nên về cơ bản nó chỉ bật hoặc tắt âm thanh.</p>

<p><strong>Máy tính để bàn Telegram:</strong> Mở <em>Cài đặt → Thông báo và Âm thanh</em>. Telegram ở đây linh hoạt hơn. Bạn có thể tắt âm thanh thông báo trên toàn cầu, tắt tiếng từng cuộc trò chuyện hoặc đặt âm thanh tùy chỉnh (im lặng hơn). Bạn cũng có thể tắt tiếng một nhóm ồn ào bằng cách mở nhóm đó và chọn <em>Tắt tiếng</em>. Đối với hầu hết mọi người, việc tắt tiếng các cuộc trò chuyện ồn ào nhất sẽ khắc phục được sự cố mà không khiến mọi người im lặng.</p>

<p>Nếu âm thanh ổn nhưng quá thường xuyên, hãy tắt tiếng các cuộc trò chuyện hoặc kênh cụ thể phát ra thường xuyên nhất thay vì tắt âm thanh trên toàn ứng dụng. Điều đó giữ cho các cảnh báo quan trọng có thể nghe được.</p>

<h2>Tắt âm thanh thông báo trong Cài đặt hệ thống macOS</h2>

<p>macOS có lớp kiểm soát thứ hai ghi đè ứng dụng trong một số trường hợp. đi đến <em>Cài đặt hệ thống → Thông báo</em>, chọn WhatsApp hoặc Telegram trong danh sách và tắt <em>Phát âm thanh cho thông báo</em>. Thao tác này sẽ tắt chuông cảnh báo cho ứng dụng đó trong khi vẫn hiển thị biểu ngữ.</p>

<p>Đây thực sự là một giải pháp khắc phục hiệu quả nếu bạn chỉ muốn ứng dụng im lặng khi có thông báo và không quan tâm đến âm thanh khác của ứng dụng (cuộc gọi, video). Kết hợp với các cài đặt riêng của ứng dụng, nó giải quyết hầu hết các khiếu nại "ping chói tai".</p>

<h2>Hạn chế thực sự: macOS không có dung lượng cho mỗi ứng dụng</h2>

<p>Đây là phần trung thực. Các bước trên là công tắc bật/tắt. Điều họ không thể làm là quay WhatsApp hoặc Telegram <em>xuống</em> chẳng hạn như 40% trong khi vẫn giữ mọi thứ khác ở mức âm lượng tối đa. Windows đã có bộ trộn âm lượng cho mỗi ứng dụng trong nhiều năm. macOS đơn giản là không bao gồm một cái nào và không có cài đặt ẩn hoặc lệnh Terminal nào bổ sung nó.</p>

<p>Điều này quan trọng khi vấn đề không phải là chuông thông báo cụ thể mà là do toàn bộ ứng dụng quá ồn ào:</p>

<ul>
<li>WhatsApp hoặc Telegram <strong>cuộc gọi thoại và video</strong> phát ra âm lượng tối đa khi nghe nhạc hoặc nghe cuộc họp</li>
<li>Âm thanh thông báo bạn muốn giữ nhưng ở mức thấp hơn, không tắt hoàn toàn</li>
<li>Nhạc chuông tăng đột biến hơn bất cứ thứ gì bạn đang nghe</li>
<li>Muốn ứng dụng phát ra âm thanh nhưng lặng lẽ ở chế độ nền trong khi bạn tập trung vào thứ khác</li>
</ul>

<p>Không điều nào trong số đó có thể giải quyết được bằng các công cụ tích hợp sẵn, vì chúng chỉ cung cấp tính năng tắt tiếng chứ không cung cấp cấp độ. Khoảng cách đó là một hạn chế thực sự của macOS, không phải thứ bạn đang thiếu.</p>

<h2>Đặt âm lượng cho mỗi ứng dụng với SoundDial</h2>

<p>Để thực sự tắt một ứng dụng thay vì tắt, bạn cần có bộ trộn âm lượng cho mỗi ứng dụng. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> là một ứng dụng thanh menu cung cấp cho macOS khả năng kiểm soát âm lượng trên mỗi ứng dụng mà nó chưa bao giờ được cung cấp kèm theo. Nó liệt kê mọi ứng dụng hiện đang phát âm thanh và cung cấp cho mỗi ứng dụng một thanh trượt riêng.</p>

<p>Đối với vấn đề cụ thể này:</p>

<ul>
<li>Mở <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> từ thanh menu và tìm WhatsApp hoặc Telegram trong danh sách.</li>
<li>Kéo thanh trượt của nó xuống mức thoải mái, chẳng hạn như 30–40%, trong khi vẫn giữ nguyên âm nhạc, trình duyệt hoặc cuộc gọi điện video của bạn.</li>
<li>Sử dụng mỗi ứng dụng <strong>tắt tiếng</strong> để tắt tiếng ứng dụng đó ngay lập tức trong khi gọi điện hoặc cuộc họp, sau đó bật tiếng sau mà không cần tìm hiểu sâu về cài đặt.</li>
<li>Nếu bạn cần điều ngược lại, một ứng dụng yên tĩnh quá mềm, mỗi ứng dụng <strong>tăng cường</strong> có thể đẩy nó lên trên 100%.</li>
</ul>

<p>Vì đặt mức cho mỗi ứng dụng, SoundDial giữ chuông thông báo và âm thanh cuộc gọi có thể nghe được nhưng tương xứng, thay vì lựa chọn tất cả hoặc không có gì, các tùy chọn tích hợp buộc bạn phải làm như vậy. Bạn cũng có thể lưu <strong>hồ sơ khối lượng</strong>, do đó, việc thiết lập "tập trung" giúp duy trì các ứng dụng trò chuyện ở mức thấp chỉ cần một cú nhấp chuột.</p>

<blockquote>Một cảnh báo trung thực: việc giảm âm lượng tổng thể của ứng dụng trong SoundDial cũng làm giảm chuông thông báo của ứng dụng đó, vì đối với macOS, chúng là âm thanh của cùng một ứng dụng. Nếu bạn muốn tắt hoàn toàn thông báo nhưng gọi ở mức âm lượng tối đa, hãy sử dụng tính năng tắt tiếng của chính ứng dụng cộng với Cài đặt hệ thống cho chuông và dành riêng SoundDial để cài đặt mức chung.</blockquote>

<p>SoundDial là giao dịch mua một lần trị giá €14,99 trên Mac App Store, được đóng hộp cát, không đăng ký, không có trình điều khiển hạt nhân và không có DMG để tải phụ. Đó là câu trả lời thiết thực khi cách khắc phục mà bạn thực sự muốn, tắt một ứng dụng thay vì tắt, không phải là điều mà bản thân macOS có thể làm được.</p>

<h2>Bạn nên sử dụng bản sửa lỗi nào?</h2>

<p>Làm việc từ trên xuống dưới. Trước tiên, hãy thử cài đặt thông báo của riêng ứng dụng, sau đó là Cài đặt hệ thống macOS để tắt chuông. Nếu điều bạn thực sự muốn là giảm WhatsApp hoặc Telegram xuống một mức âm lượng cụ thể hoặc chỉ tắt tiếng ứng dụng đó ngay lập tức trong khi gọi, thì đó là nơi mà bộ trộn mỗi ứng dụng sẽ có được vị trí của nó.</p>

<p>Bạn cảm thấy mệt mỏi khi phải lựa chọn giữa sự bùng nổ hoàn toàn và sự im lặng hoàn toàn cho các ứng dụng trò chuyện của mình? <a href="https://apps.apple.com/app/id6772792641">Nhận SoundDial trên Mac App Store</a> và cung cấp cho mỗi ứng dụng nút xoay âm lượng riêng.</p>`,
  },
  "game-too-loud-vs-voice-chat-mac": {
    slug: "game-too-loud-vs-voice-chat-mac",
    title: "Âm thanh trò chơi to hơn Discord trên Mac? Cách cân bằng giữa trò chơi và âm lượng giọng nói",
    description: "Trò chơi của bạn đang lấn át tính năng trò chuyện thoại Discord trên Mac và không có bộ trộn âm lượng tích hợp. Đây là lý do tại sao macOS thiếu âm lượng trên mỗi ứng dụng kiểu Windows và cách tắt trò chơi trong khi vẫn tăng âm lượng.",
    date: "2026-07-23",
    readTime: "Đọc trong 5 phút",
    content: `<p>macOS không có bộ trộn âm lượng tích hợp sẵn cho mỗi ứng dụng, do đó bạn không thể giới hạn trò chơi của mình trong khi vẫn giữ âm lượng của Discord. Bản sửa lỗi là một ứng dụng trên thanh menu đặt âm lượng độc lập cho mỗi ứng dụng. Giảm trò chơi xuống 40-50%, để trò chuyện thoại ở mức 100% và cả hai đều giữ cân bằng mà không cần chạm vào thanh trượt trong trò chơi.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Âm thanh trò chơi to hơn Discord trên Mac? Cách cân bằng giữa trò chơi và âm lượng giọng nói" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Tại sao điều này xảy ra trên Mac (chứ không phải trên Windows)</h2>

<p>Nếu bạn đã chơi trò chơi trên Windows, bạn sẽ biết Bộ trộn âm lượng: nhấp chuột phải vào biểu tượng loa và mọi ứng dụng đang chạy đều có thanh trượt riêng. Bạn drop game, raise Discord là xong. macOS đơn giản là chưa bao giờ cung cấp tính năng đó. Có một khối đầu ra chính và một số nút bật tắt cấp ứng dụng được chôn trong cài đặt hệ thống, nhưng không có khả năng kiểm soát cấp độ mỗi ứng dụng đối với các ứng dụng tùy ý.</p>

<p>Vì vậy, khi bản phối của trò chơi được làm chủ nóng bỏng, các vụ nổ, âm nhạc và tiếng súng của trò chơi đó sẽ phát ra ở mức đầu ra giống như giọng nói của bạn bè bạn. Một số trò chơi có thanh trượt âm lượng chính, nhưng nhiều trò chơi không đủ thấp và nhiều trình khởi chạy, trình duyệt và tựa game độc ​​lập không cung cấp khả năng kiểm soát hữu ích nào cả. Bản thân Discord chỉ cho phép bạn điều chỉnh âm lượng của người dùng mới chứ không phải trò chơi cạnh tranh với họ.</p>

<p>Thành thật mà nói, đây là một lỗ hổng ở cấp độ hệ điều hành, không phải một lỗi mà bạn có thể loại bỏ. Ngăn xếp âm thanh của Apple định tuyến mọi thứ đến một luồng đầu ra duy nhất và không có giao diện người dùng bên thứ nhất nào để phân chia luồng đó cho mỗi ứng dụng. Đó là lý do tại sao bạn cần một công cụ của bên thứ ba nằm giữa ứng dụng của bạn và thiết bị đầu ra.</p>

<h2>Các cách giải quyết thủ công (và tại sao chúng lại thiếu)</h2>

<p>Trước khi tiếp cận phần mềm, bạn nên biết các tùy chọn miễn phí và giới hạn của chúng:</p>

<ul>
<li><strong>Giảm âm lượng trong ứng dụng của trò chơi.</strong> Hoạt động nếu trò chơi có thanh trượt chính với các bước đủ tốt. Nhiều phần dừng ở mức tăng 10% hoặc gộp nhạc và hiệu ứng lại với nhau, vì vậy bạn không thể chỉ chế ngự những phần ồn ào.</li>
<li><strong>Nâng cao bạn bè của bạn trong Discord.</strong> Nhấp chuột phải vào từng người dùng và tăng âm lượng của họ. Điều này giúp ích được một chút nhưng lại không ảnh hưởng gì đến trò chơi, đây mới thực sự là vấn đề.</li>
<li><strong>Sử dụng tai nghe có núm âm lượng phần cứng.</strong> Chỉ thay đổi mức độ tổng thể chứ không thay đổi sự cân bằng giữa game và giọng nói.</li>
<li><strong>Định tuyến âm thanh qua thiết bị ảo.</strong> Các công cụ như Loopback hoặc BlackHole có thể phân chia luồng, nhưng chúng nhắm đến những người chuyên nghiệp, thiết lập thực sự và quá mức cần thiết để "làm cho trò chơi yên tĩnh hơn".</li>
</ul>

<p>Không ai trong số này cung cấp cho bạn một điều mà người dùng Windows coi là đương nhiên: thanh trượt nhanh cho mỗi ứng dụng. Đó là khoảng cách <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> được xây dựng để lấp đầy.</p>

<h2>Cách khắc phục trực tiếp: khối lượng độc lập trên mỗi ứng dụng</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> là bộ trộn âm lượng trên mỗi ứng dụng trên thanh menu dành cho macOS. Nó hiển thị mọi ứng dụng hiện đang phát âm thanh và cung cấp cho mỗi ứng dụng một thanh trượt riêng, giống hệt như Bộ trộn âm lượng Windows. Đối với vấn đề trò chơi so với giọng nói, quy trình làm việc rất ngắn:</p>

<ul>
<li>Nhấp vào biểu tượng SoundDial trên thanh menu của bạn trong khi trò chơi và Discord đều đang chạy.</li>
<li>Tìm trò chơi trong danh sách và kéo thanh trượt của nó xuống khoảng 40-50%.</li>
<li>Để Discord (hoặc Slack, Zoom hoặc ứng dụng giọng nói của bạn) ở mức 100%.</li>
<li>Điều chỉnh nhanh chóng trong khi chơi - đẩy trò chơi xuống sâu hơn trong một cuộc đọ súng ồn ào, sao lưu trong khi khám phá yên tĩnh.</li>
</ul>

<p>Vì các cấp độ dành cho mỗi ứng dụng nên bạn đặt chúng một lần và chúng được giữ nguyên. Trò chơi vẫn bị giới hạn cho dù bản kết hợp của nó có nóng đến mức nào và bạn bè của bạn vẫn có thể nghe thấy rõ ràng về trò chơi đó.</p>

<h2>Tăng cường, tắt tiếng và cấu hình cho phần còn lại của quá trình thiết lập của bạn</h2>

<p>Công cụ tương tự sẽ giải quyết những vấn đề khó chịu liên quan đến trò chơi bằng giọng nói:</p>

<ul>
<li><strong>Tăng cường cho mỗi ứng dụng.</strong> Nếu mic của đồng đội im lặng ngay cả ở mức tối đa của Discord, bạn có thể nhấn ứng dụng giọng nói <em>ở trên</em> 100% nên nó xuyên suốt trò chơi thay vì bị chôn vùi.</li>
<li><strong>Tắt tiếng cho mỗi ứng dụng.</strong> Tắt tiếng tab trình duyệt nền hoặc ứng dụng âm nhạc ngay lập tức mà không cần nhấn tab thay thế hoặc dừng phát lại.</li>
<li><strong>Hồ sơ khối lượng.</strong> Lưu cấu hình "chơi trò chơi" với trò chơi ở mức 45% và Discord được tăng cường, sau đó chuyển về cấu hình "bình thường" để sử dụng hàng ngày chỉ bằng một cú nhấp chuột — không cần kéo lại thanh trượt mỗi phiên.</li>
<li><strong>Tự động vịt.</strong> Để trò chơi tự động kết thúc khi ai đó nói chuyện, để chú thích luôn xuất hiện ở đầu hành động.</li>
<li><strong>Chuyển đổi đầu ra nhanh chóng.</strong> Chuyển đổi giữa tai nghe và loa từ cùng một menu mà không cần đi sâu vào Cài đặt hệ thống.</li>
</ul>

<blockquote><p>Mô hình tinh thần rất đơn giản: một thanh trượt cho mỗi ứng dụng, cách mà Windows đã làm trong nhiều năm. macOS chưa bao giờ cung cấp nó, vì vậy một tiện ích nhỏ sẽ khôi phục tính chẵn lẻ.</p></blockquote>

<h2>Những gì mong đợi một cách trung thực</h2>

<p>Trình trộn trên mỗi ứng dụng giải quyết vấn đề cân bằng một cách rõ ràng nhưng đặt kỳ vọng một cách chính xác. Nó kiểm soát mức đầu ra của phần mềm - nó không thể khắc phục một trò chơi có âm thanh bị làm chủ kém và không thể phát ra tín hiệu chưa bao giờ được ghi lại (mic thực sự bị hỏng vẫn cần sửa phần cứng). Boost tăng thêm mức khuếch đại thực sự, do đó, việc đẩy một nguồn yên tĩnh vượt xa mức 100% có thể gây ra hiện tượng méo tiếng, giống hệt như việc tăng bất kỳ bộ khuếch đại nào lên quá cao. Tuy nhiên, được sử dụng một cách hợp lý, giới hạn trò chơi khiêm tốn cộng với tăng cường giọng nói nhỏ là tất cả những gì hầu hết các thiết lập cần.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> được đóng hộp cát và cài đặt trực tiếp từ Mac App Store — không cần trình điều khiển, không cần phần mở rộng kernel, không cần tin cậy vào DMG. Đó là €14,99 một lần mà không cần đăng ký và nó hỗ trợ điều khiển âm lượng macOS trên 28 ngôn ngữ.</p>

<p>Hãy ngừng chiến đấu với các thanh trượt trong trò chơi của bạn. Lấy <a href="https://apps.apple.com/app/id6772792641">SoundDial trên Mac App Store</a>, tắt trò chơi, giữ cho đội của bạn ồn ào và cuối cùng nhận được bộ trộn âm lượng kiểu Windows macOS quên giao hàng.</p>`,
  },
  "external-monitor-speaker-volume-too-loud-mac": {
    slug: "external-monitor-speaker-volume-too-loud-mac",
    title: "Loa màn hình ngoài quá to hoặc bị kẹt trên Mac? Sửa âm lượng HDMI/DisplayPort",
    description: "Tại sao các phím âm lượng của Mac không điều khiển được loa màn hình HDMI hoặc DisplayPort và cách khắc phục âm thanh quá to, bị kẹt hoặc không thể điều chỉnh được bằng cách sử dụng OSD màn hình, Cài đặt MIDI âm thanh và định tuyến đầu ra tốt hơn.",
    date: "2026-07-23",
    readTime: "Đọc trong 6 phút",
    content: `<p>Nếu các phím âm lượng của Mac của bạn chuyển sang màu xám hoặc không làm gì đối với màn hình được kết nối qua HDMI hoặc DisplayPort, thì đó thường không phải là lỗi. Âm thanh màn hình kỹ thuật số thường được gửi ở mức cố định và phần cứng của màn hình sẽ điều khiển âm lượng. Cách khắc phục là điều chỉnh màn hình, định tuyến lại đầu ra hoặc sử dụng thiết bị âm thanh khác.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Loa màn hình ngoài quá to hoặc bị kẹt trên Mac? Sửa âm lượng HDMI/DisplayPort" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Tại sao phím âm lượng Mac ngừng hoạt động qua HDMI/DisplayPort</h2>

<p>HDMI và DisplayPort mang âm thanh dưới dạng luồng kỹ thuật số. Nhiều màn hình nhận luồng đó ở mức đầu ra cố định và yêu cầu bạn kiểm soát âm lượng trên chính màn hình chứ không phải trên thiết bị nguồn. Khi macOS phát hiện ra điều này, nó sẽ vô hiệu hóa thanh trượt âm lượng trên màn hình và chuyển các phím F11/F12 sang màu xám, hiển thị biểu tượng "không vào" khi bạn nhấn chúng.</p>

<p>Đây là giới hạn về phần cứng và giao thức, không phải phần mềm nào trên Mac có thể ghi đè được. Âm thanh không bao giờ vượt qua giai đoạn mà macOS được phép giảm âm lượng. Không có ứng dụng, trình điều khiển hoặc cài đặt nào có thể đưa điều khiển âm lượng vào luồng mà màn hình yêu cầu nhận ở mức đầy đủ. Thành thật về điều đó giúp bạn tiết kiệm được nhiều giờ tìm cách khắc phục sai.</p>

<h2>Cách khắc phục 1: Sử dụng điều khiển riêng của màn hình (OSD)</h2>

<p>Đây là giải pháp thực sự cho hầu hết mọi người. Gần như mọi màn hình có loa tích hợp đều có menu hiển thị trên màn hình được điều khiển bằng các nút vật lý hoặc cần điều khiển ở mặt sau hoặc mặt dưới của bảng điều khiển.</p>

<ul>
<li>Nhấn nút OSD/menu để mở cài đặt của màn hình.</li>
<li>Tìm phần Âm thanh hoặc Âm lượng.</li>
<li>Giảm mức ở đó - đây là điều khiển thực sự hoạt động qua HDMI/DP.</li>
</ul>

<p>Một số màn hình cũng hiển thị ứng dụng đồng hành hoặc hỗ trợ DDC/CI để bạn có thể điều khiển OSD từ macOS. Các tiện ích của bên thứ ba nói DDC có thể ánh xạ các phím âm lượng của Mac với âm lượng phần cứng của màn hình, điều này đáng để thử nếu bạn ghét chạm vào các nút trên bảng điều khiển.</p>

<h2>Cách khắc phục 2: Kiểm tra cài đặt MIDI âm thanh</h2>

<p>Mở <strong>Thiết lập MIDI âm thanh</strong> (trong /Ứng dụng/Tiện ích). Chọn màn hình của bạn trong danh sách thiết bị. Nếu thanh trượt âm lượng xuất hiện ở bên phải, hãy kéo nó xuống - đôi khi màn hình hiển thị mức do phần mềm điều khiển ngay cả khi các phím trên thanh menu bị tắt. Nếu thanh trượt bị thiếu hoặc chuyển sang màu xám, màn hình đang xác nhận rằng nó chỉ chấp nhận âm thanh ở mức cố định và bạn sẽ quay lại OSD.</p>

<p>Trong khi bạn ở đây, hãy xác nhận đã chọn đúng thiết bị đầu ra. Việc âm thanh được định tuyến âm thầm đến màn hình mà bạn quên đã kết nối là điều bình thường, điều này giải thích cho âm thanh lớn hoặc vắng mặt đột ngột.</p>

<h2>Cách khắc phục 3: Định tuyến âm thanh đến nơi bạn thực sự có thể kiểm soát</h2>

<p>Nếu loa của màn hình của bạn ở mức tầm thường (hầu hết là như vậy) và khả năng điều chỉnh âm lượng của nó vụng về, cách khắc phục rõ ràng nhất là ngừng sử dụng chúng:</p>

<ul>
<li>Cắm loa hoặc tai nghe vào giắc cắm tai nghe của màn hình nếu có - đầu ra analog đó thường được điều khiển âm lượng từ màn hình.</li>
<li>Sử dụng USB DAC, loa USB hoặc đầu ra Bluetooth. Đầu ra USB và analog cung cấp cho macOS toàn bộ phần mềm điều khiển âm lượng để các phím của bạn hoạt động bình thường trở lại.</li>
<li>Chọn loa tích hợp của Mac để có âm thanh nhanh và chỉ giữ màn hình cho video.</li>
</ul>

<p>Khi bạn đang sử dụng đầu ra mà macOS thực sự có thể giảm âm lượng, các phím âm lượng của hệ thống sẽ hoạt động và bạn lấy lại khả năng kiểm soát tốt thay vì nhảy giữa các bước OSD thô của màn hình.</p>

<h2>Khi đầu ra hoạt động, hãy kiểm soát âm lượng trên mỗi ứng dụng</h2>

<p>Việc lấy lại đầu ra có thể kiểm soát sẽ giải quyết được vấn đề "quá ồn/bị kẹt". Nhưng macOS vẫn chỉ cung cấp cho bạn một âm lượng chính cho mọi thứ. Không có bộ trộn ứng dụng tích hợp sẵn trên Mac - Windows đã có bộ trộn này trong nhiều năm, nhưng Apple chưa bao giờ xuất xưởng bộ trộn tương đương. Vì vậy, một video lớn, một trò chơi và một cuộc gọi yên tĩnh đều có chung một thanh trượt.</p>

<p>Đó là khoảng cách <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> lấp đầy. Đó là một bộ trộn thanh menu cung cấp cho mỗi ứng dụng âm lượng độc lập riêng, vì vậy bạn có thể tắt tab trình duyệt mà không cần chạm vào nhạc, tắt tiếng một ứng dụng ngay lập tức hoặc tăng cường ứng dụng yên tĩnh lên trên mức trần bình thường của nó. Bạn có thể lưu cấu hình âm lượng cho các thiết lập khác nhau và nhanh chóng chuyển đổi đầu ra từ thanh menu.</p>

<p>Để rõ ràng về phạm vi: <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> điều khiển âm lượng phần mềm cho âm thanh truyền qua macOS. Nó không thể ghi đè màn hình bỏ qua âm lượng hệ thống qua HDMI — đó là hành vi ở mức cố định của màn hình và chỉ OSD hoặc đầu ra khác mới khắc phục được điều đó. Sau khi bạn sử dụng đầu ra có thể kiểm soát được, tính năng kiểm soát theo từng ứng dụng sẽ là nơi ứng dụng tỏa sáng.</p>

<h2>Danh sách kiểm tra nhanh</h2>

<ul>
<li>Các phím chuyển sang màu xám trên HDMI/DP? Sử dụng âm lượng OSD của màn hình — đó là hành vi được mong đợi.</li>
<li>Kiểm tra Cài đặt MIDI âm thanh để biết thanh trượt phần mềm ẩn.</li>
<li>Xác nhận thiết bị đầu ra phù hợp đã được chọn.</li>
<li>Để kiểm soát thực sự, hãy định tuyến âm thanh đến đầu ra tai nghe, USB hoặc Bluetooth.</li>
<li>Sau đó, sử dụng trình trộn trên mỗi ứng dụng để cân bằng từng ứng dụng.</li>
</ul>

<p>Khi đầu ra của bạn được kiểm soát, hãy đưa ra <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> một cái nhìn. Đó là giao dịch mua một lần €14,99 từ Mac App Store — không đăng ký, không trình điều khiển, không DMG — và cuối cùng nó mang đến một bộ trộn âm lượng thực sự cho mỗi ứng dụng cho macOS.</p>`,
  },
  "usb-dac-volume-control-not-working-mac": {
    slug: "usb-dac-volume-control-not-working-mac",
    title: "Âm lượng USB DAC không điều chỉnh trên Mac? Lấy lại phần mềm điều khiển âm lượng",
    description: "Tại sao macOS chuyển thanh trượt âm lượng sang màu xám cho nhiều USB DAC, ý nghĩa của nó và cách lấy lại phần mềm điều khiển âm lượng trên Mac mà không ảnh hưởng đến chất lượng âm thanh.",
    date: "2026-07-23",
    readTime: "Đọc trong 6 phút",
    content: `<p>Nếu thanh trượt âm lượng của USB DAC của bạn chuyển sang màu xám trên Mac thì đó thường không phải là lỗi. macOS vô hiệu hóa âm lượng phần mềm khi DAC báo cáo rằng nó không có âm lượng có thể điều khiển được, mong bạn sử dụng núm phần cứng riêng của DAC. Để lấy lại âm lượng phần mềm, hãy sử dụng bộ suy giảm cấp ứng dụng như <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Âm lượng USB DAC không điều chỉnh trên Mac? Lấy lại phần mềm điều khiển âm lượng" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Tại sao macOS chuyển sang màu xám âm lượng cho một số USB DAC</h2>

<p>Khi bạn cắm thiết bị âm thanh USB, macOS sẽ hỏi thiết bị đó có thể làm gì qua giao thức Lớp âm thanh USB (UAC). Một phần của cái bắt tay đó là một bộ điều khiển "đơn vị tính năng", bao gồm cả điều khiển âm lượng. Nếu DAC khai báo điều khiển âm lượng, macOS sẽ kết nối nó với các phím âm lượng trên bàn phím và thanh trượt thanh menu. Nếu DAC tuyên bố rằng nó không có âm lượng do máy chủ điều chỉnh, macOS sẽ chuyển hoàn toàn thanh trượt sang màu xám.</p>

<p>Nhiều DAC và bộ khuếch đại chất lượng cao thực hiện chính xác mục đích sau. Giả định của nhà thiết kế là bạn sẽ cung cấp cho DAC tín hiệu kỹ thuật số toàn diện, hoàn hảo về bit và điều khiển âm lượng bằng núm âm lượng analog trên chính thiết bị. Sự suy giảm tương tự đó xảy ra sau khi chuyển đổi kỹ thuật số sang tương tự, do đó, nó tránh loại bỏ các bit và thực sự là con đường ưa thích của người mê âm thanh. Đó là tính năng chứ không phải lỗi.</p>

<blockquote>Nguyên tắc nhỏ: nếu DAC của bạn có núm âm lượng vật lý và thanh trượt Mac chuyển sang màu xám thì nhà sản xuất muốn bạn sử dụng núm này. Tín hiệu đang được gửi ở mức 100% theo thiết kế.</blockquote>

<h2>Khi thanh trượt màu xám thực sự có vấn đề</h2>

<p>Câu trả lời "chỉ cần sử dụng núm xoay" được phân tích trong các thiết lập thực tế:</p>

<ul>
<li><strong>DAC không có núm xoay.</strong> Rất nhiều giao diện USB DAC, dongle và giao diện chuyên nghiệp nhỏ gọn không có điều khiển âm lượng và cũng không có điều khiển máy chủ. Bạn bị kẹt ở bất kỳ mức nào mà amp hạ lưu hoặc loa được cấp nguồn được đặt.</li>
<li><strong>Cái núm nằm ngoài tầm với.</strong> Một DAC để bàn phía sau màn hình của bạn hoặc một thiết bị cấp nguồn cho bộ khuếch đại có mức tăng cố định, nghĩa là việc điều chỉnh âm lượng trở thành một công việc vật lý thay vì nhấn phím.</li>
<li><strong>Bạn cần số dư trên mỗi ứng dụng chứ không chỉ là cấp độ chính.</strong> Ngay cả một núm phần cứng hoàn hảo cũng là một điều khiển toàn cầu duy nhất. Nó không thể thực hiện cuộc gọi Zoom êm hơn âm nhạc của bạn hoặc tắt trò chơi khi có thông báo.</li>
</ul>

<p>Không có điều nào trong số này được macOS sửa, vì từ quan điểm của hệ điều hành, thiết bị đang hoạt động chính xác. Đây là giới hạn trung thực: đó là khả năng được thiết bị báo cáo và không có nút chuyển đổi nào trong Cài đặt hệ thống để ghi đè lên nó.</p>

<h2>Cách giải quyết trung thực trước khi bạn cài đặt bất cứ thứ gì</h2>

<p>Hãy thử những thứ này trước vì chúng không tốn phí:</p>

<ul>
<li><strong>Sử dụng núm phần cứng hoặc âm lượng xuôi dòng.</strong> Nếu DAC hoặc loa/bộ khuếch đại được cấp nguồn của bạn có bộ điều khiển thì đó là tùy chọn rõ ràng nhất và duy trì độ phân giải kỹ thuật số đầy đủ.</li>
<li><strong>Kiểm tra ứng dụng hoặc chương trình cơ sở riêng của DAC.</strong> Một số DAC (và các thiết bị hướng đến trò chơi) cung cấp bảng điều khiển hoặc cài đặt chương trình cơ sở để bật âm lượng máy chủ. Nếu tồn tại tùy chọn "Âm lượng USB" hoặc "âm lượng phần mềm", việc bật tùy chọn này sẽ khiến thanh trượt macOS hoạt động trở lại.</li>
<li><strong>Hãy thử chế độ USB khác.</strong> Một số thiết bị báo cáo các khả năng khác nhau ở chế độ "tuân thủ lớp" so với chế độ trình điều khiển độc quyền. Việc cài đặt hoặc gỡ bỏ trình điều khiển của nhà cung cấp có thể thay đổi việc macOS có nhìn thấy điều khiển âm lượng hay không.</li>
<li><strong>Xem trong Cài đặt MIDI âm thanh.</strong> Mở Thiết lập MIDI âm thanh, chọn thiết bị và kiểm tra xem âm lượng chính hoặc âm lượng mỗi kênh có xuất hiện ở đó hay không. Đôi khi, một thanh trượt có sẵn trong bảng đó ngay cả khi thanh menu có màu xám.</li>
</ul>

<p>Nếu không có điều nào áp dụng được, bạn cần suy giảm phần mềm ở phía Mac.</p>

<h2>Kiểm soát âm lượng phần mềm với mức giảm âm lượng trên mỗi ứng dụng</h2>

<p>Khi phần cứng không chấp nhận lệnh âm lượng, tùy chọn còn lại là giảm âm thanh trong phần mềm trước khi đến DAC. Đây chính xác là những gì <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> có. Nó nằm trong thanh menu của bạn và cung cấp cho mọi ứng dụng đang chạy âm lượng độc lập, tắt tiếng và thậm chí tăng tốc, bất kể DAC của bạn có hiển thị điều khiển phần cứng hay không.</p>

<p>Để sử dụng nó cho DAC có màu xám:</p>

<ul>
<li>cài đặt <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> từ Mac App Store và mở nó từ thanh menu.</li>
<li>Giữ DAC của bạn được chọn làm đầu ra hệ thống; bạn cũng có thể sử dụng tính năng chuyển đổi đầu ra nhanh chóng của SoundDial để di chuyển giữa DAC, loa và tai nghe mà không cần đi sâu vào Cài đặt hệ thống.</li>
<li>Đặt cấp độ cho mỗi ứng dụng: thả trình duyệt, nâng trình phát nhạc lên, tắt tiếng bất cứ thứ gì bạn không muốn. Mỗi ứng dụng phát trực tuyến theo âm lượng bạn chọn và kết quả hỗn hợp sẽ chuyển đến DAC.</li>
<li>Lưu cấu hình âm lượng cho các tình huống khác nhau (cuộc gọi so với nghe) và cho phép tự động giảm bớt các ứng dụng chạy nền thấp hơn khi có nội dung quan trọng hơn bắt đầu phát.</li>
</ul>

<h2>Sự đánh đổi trung thực về chất lượng âm thanh</h2>

<p>Sự suy giảm phần mềm làm giảm mức kỹ thuật số trước khi chuyển đổi, do đó về mặt lý thuyết, nó loại bỏ một lượng nhỏ độ phân giải so với âm lượng analog trên chính DAC. Trong thực tế, trên các đường dẫn 24-bit hiện đại trở lên ở mức nghe bình thường, mức giảm thấp hơn nhiều so với mức âm thanh có thể nghe được và bạn giữ toàn bộ dải động của DAC cho bất kỳ nội dung nào được phát ở gần quy mô đầy đủ. Nếu bạn là người theo chủ nghĩa thuần túy và có núm xoay tương tự tốt trong tầm tay, hãy sử dụng núm xoay. Nếu bạn không có quyền kiểm soát phần cứng có thể sử dụng được hoặc bạn cần số dư trên mỗi ứng dụng mà macOS không thể cung cấp, thì khối lượng phần mềm là sự cân bằng phù hợp và nó sẽ đánh bại một thanh trượt không có tác dụng gì.</p>

<p>SoundDial là gói mua một lần trị giá €14,99, được đóng hộp cát, không có trình điều khiển, phần mở rộng kernel hoặc trình cài đặt DMG. Nếu âm lượng của USB DAC của bạn chuyển sang màu xám và việc chạm vào núm không phải là một lựa chọn, <a href="https://apps.apple.com/app/id6772792641">nhận SoundDial trên Mac App Store</a> và đặt điều khiển âm lượng đang hoạt động trở lại thanh menu của bạn.</p>`,
  },
  "cap-max-volume-of-one-app-mac": {
    slug: "cap-max-volume-of-one-app-mac",
    title: "Giới hạn âm lượng tối đa của một ứng dụng lớn trên Mac (Bảo vệ thính giác của bạn)",
    description: "macOS không có giới hạn âm lượng cho mỗi ứng dụng, do đó, một ứng dụng lớn có thể khiến bạn phát nổ ở mức âm lượng toàn hệ thống. Dưới đây là cách đặt trần âm lượng tối đa cho một ứng dụng trên Mac bằng trình trộn cho mỗi ứng dụng và lý do tại sao giới hạn phần cứng lại quan trọng.",
    date: "2026-07-23",
    readTime: "Đọc trong 5 phút",
    content: `<p>macOS không có cách tích hợp nào để giới hạn âm lượng tối đa của một ứng dụng, do đó, một chương trình lớn sẽ phát ở bất kỳ thanh trượt hệ thống nào của bạn được đặt thành. Để đặt mức trần cho một ứng dụng, hãy sử dụng trình trộn thanh menu cho mỗi ứng dụng như <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>: giữ ứng dụng đó ở mức 40 phần trăm trong khi âm lượng hệ thống của bạn vẫn cao hơn đối với mọi thứ khác.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Giới hạn âm lượng tối đa của một ứng dụng lớn trên Mac (Bảo vệ thính giác của bạn)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Tại sao một ứng dụng có thể bất ngờ khiến bạn sử dụng Mac</h2>

<p>Trên macOS, thanh trượt âm lượng trong thanh menu hoặc Trung tâm điều khiển là một nút điều khiển duy nhất trên toàn hệ thống. Mọi ứng dụng đều đưa vào cùng một đầu ra ở cùng một cấp độ. Không có bộ trộn âm lượng cho mỗi ứng dụng được tích hợp trong hệ điều hành như cách Windows đã có trong nhiều năm với bảng điều khiển Bộ trộn âm lượng.</p>

<p>Thiết kế đó có tác dụng thực sự đối với đôi tai của bạn. Nếu bạn đặt âm lượng hệ thống ở mức cao để có thể nghe thấy một podcast yên tĩnh hoặc một cuộc gọi điện video nhẹ nhàng, sau đó chuyển sang trò chơi, thông báo Discord, trang web có nhiều quảng cáo hoặc video được làm chủ ở mức to hơn nhiều thì ứng dụng đó cũng sẽ phát ở cấp độ toàn hệ thống. Kết quả là một màn hù dọa kinh điển: một bức tường âm thanh đột ngột ở mức âm lượng mà bạn chưa từng dự định dành cho ứng dụng cụ thể đó.</p>

<p>Đối với bất kỳ ai bị ù tai, nhạy cảm với âm thanh hoặc chỉ đơn giản coi trọng thính giác của mình, thì vấn đề không thể đoán trước được. Bạn không cố gắng làm cho mọi thứ yên tĩnh hơn. Bạn đang cố gắng đảm bảo rằng một ứng dụng ồn ào cụ thể không bao giờ có thể vượt quá mức bạn đã quyết định là an toàn.</p>

<h2>macOS có thể và không thể làm gì ở đây</h2>

<p>Hãy để tôi thành thật về những giới hạn trước khi đề xuất bất cứ điều gì.</p>

<ul>
<li><strong>Âm lượng hệ thống</strong> hạ thấp mọi thứ cùng một lúc. Tắt nó xuống để chế ngự một ứng dụng và các ứng dụng yên tĩnh của bạn sẽ không còn nghe được nữa.</li>
<li><strong>Thanh trượt âm lượng trong ứng dụng</strong> tồn tại trong một số ứng dụng (trình phát đa phương tiện, một số trình duyệt trên mỗi tab) nhưng không tồn tại trong hầu hết. Trò chơi, cuộc gọi điện video hoặc ứng dụng gốc thường không có điều khiển âm lượng độc lập.</li>
<li><strong>Trần phần cứng là có thật.</strong> Không có phần mềm nào có thể đẩy tín hiệu to hơn mức tối đa của thiết bị đầu ra của bạn. Ngược lại, tính năng kiểm soát âm lượng của chính ứng dụng, cộng với DAC và tai nghe của bạn, sẽ đặt mức độ thực sự cho cảm giác "100 phần trăm". Phần mềm có thể hạ thấp mức độ trên mỗi ứng dụng một cách đáng tin cậy nhưng không thể viết lại cấu trúc vật lý của tai nghe của bạn.</li>
</ul>

<p>Vì vậy, mục tiêu trung thực không phải là giới hạn độ ồn kỳ diệu ở cấp độ người lái. Đó là một sự suy giảm thực tế, đáng tin cậy trên mỗi ứng dụng: giữ một ứng dụng đã chọn ở một phần cố định của đầu ra hệ thống để nó không bao giờ làm bạn ngạc nhiên.</p>

<h2>Cách giới hạn âm lượng của một ứng dụng bằng trình trộn trên mỗi ứng dụng</h2>

<p>Bộ trộn âm lượng cho mỗi ứng dụng sẽ chặn âm thanh của từng ứng dụng và cho phép bạn đặt mức độ của ứng dụng đó một cách độc lập. Đây là quy trình làm việc với <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, nằm trong thanh menu:</p>

<ul>
<li><strong>Mở máy trộn.</strong> Nhấp vào biểu tượng thanh menu SoundDial. Bạn sẽ thấy danh sách mọi ứng dụng hiện đang phát âm thanh, mỗi ứng dụng có thanh trượt riêng.</li>
<li><strong>Tìm ứng dụng ồn ào.</strong> Xác định vị trí ứng dụng bạn muốn giới hạn, chẳng hạn như trò chơi, trình duyệt hoặc công cụ hội nghị truyền hình.</li>
<li><strong>Đặt trần của nó.</strong> Kéo thanh trượt của ứng dụng đó xuống mức an toàn của bạn, chẳng hạn từ 35 đến 50 phần trăm. Ứng dụng đó hiện phát ở phần đầu ra của hệ thống đó trong khi mọi ứng dụng khác vẫn giữ nguyên vị trí cũ.</li>
<li><strong>Để lại âm lượng hệ thống của bạn ở nơi bạn cần.</strong> Giữ thanh trượt hệ thống đủ cao cho các ứng dụng yên tĩnh của bạn. Ứng dụng bị giới hạn vẫn được kiểm soát bất kể.</li>
</ul>

<p>Vì cấp độ dành cho mỗi ứng dụng nên bạn đang đặt mức tối đa một cách hiệu quả cho một chương trình đó. Ngay cả khi nó cố gắng phát nội dung có âm lượng lớn nhất, âm lượng lớn nhất hiện tại vẫn là phần mà bạn đã chọn trong tổng số.</p>

<h2>Làm cho nắp dính với hồ sơ</h2>

<p>Một điều chỉnh thủ công sẽ giúp ích nhưng cấp độ ứng dụng có thể đặt lại khi bạn thoát và khởi chạy lại. Để thiết lập an toàn cho thính giác vẫn tồn tại sau khi khởi động lại, hãy sử dụng <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>hồ sơ khối lượng của. Lưu hồ sơ với các cấp độ ưa thích trên mỗi ứng dụng của bạn, ví dụ: "đêm trò chơi yên tĩnh" với trò chơi ở mức 40 phần trăm, ứng dụng âm nhạc của bạn ở mức 70 phần trăm và ứng dụng cuộc gọi của bạn ở mức 90 phần trăm. Nhớ lại nó trong một cú nhấp chuột bất cứ khi nào bạn ngồi xuống. Mức trần cho ứng dụng ồn ào sẽ trở lại chính xác như bạn đã đặt.</p>

<p>Hai tính năng nữa cần biết để bảo vệ thính giác:</p>

<ul>
<li><strong>Tắt tiếng trên mỗi ứng dụng</strong> cho phép bạn ngay lập tức bịt miệng một kẻ phạm tội mà không cần chạm vào bất cứ thứ gì khác, hữu ích cho một ứng dụng gửi thông báo lớn.</li>
<li><strong>Tự động giảm tốc độ</strong> tự động giảm âm thanh nền khi có nội dung quan trọng hơn bắt đầu, do đó bạn không bị kẹt giữa hai nguồn ồn ào cùng một lúc.</li>
</ul>

<blockquote><p>Sự suy giảm phần mềm thực sự có hiệu quả trong việc giới hạn một ứng dụng, nhưng nó chỉ là một lớp bảo vệ chứ không phải là biện pháp bảo vệ y tế. Nếu bạn bị ù tai hoặc nhạy cảm với âm thanh, hãy ghép mức trần cho mỗi ứng dụng với mức độ nghe và thời gian nghe tổng thể hợp lý. Không có ứng dụng nào thay thế được thói quen tăng âm lượng cẩn thận.</p></blockquote>

<h2>Một lưu ý về tăng cường và tại sao nó lại tách biệt</h2>

<p>Bộ trộn cho mỗi ứng dụng tương tự giúp giới hạn một ứng dụng ồn ào cũng có thể tăng mức ứng dụng quá yên tĩnh lên trên 100 phần trăm, điều này rất hữu ích cho một ứng dụng có âm lượng riêng được điều chỉnh quá thấp. Đây là hai mặt của cùng một quyền kiểm soát: bạn quyết định cấp độ của từng ứng dụng, tăng hoặc giảm. Để bảo vệ thính giác, bạn chỉ cần chọn hướng "xuống" và giữ ở đó.</p>

<h2>Phiên bản ngắn</h2>

<p>macOS sẽ không cho phép bạn tự giới hạn âm lượng của một ứng dụng và đó là lỗ hổng thực sự của hệ điều hành chứ không phải lỗi người dùng. Bộ trộn thanh menu cho mỗi ứng dụng sẽ đóng ứng dụng đó lại: đặt ứng dụng lớn thành một phần cố định, lưu nó vào một cấu hình và nó sẽ không bao giờ khiến bạn phát nổ nữa trong khi các ứng dụng khác của bạn vẫn có thể nghe được.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> là giao dịch mua €14,99 một lần trên Mac App Store, được đóng hộp cát không có trình điều khiển hoặc DMG để cài đặt. Nếu mục tiêu là bảo vệ đôi tai của bạn khỏi một ứng dụng không thể đoán trước thì đó là cách đơn giản nhất để đặt và giữ mức trần đó.</p>`,
  },
  "set-left-right-balance-per-app-mac": {
    slug: "set-left-right-balance-per-app-mac",
    title: "Số dư trái/phải khác nhau cho mỗi ứng dụng trên Mac - Có khả thi không?",
    description: "Bạn có thể đặt cân bằng âm thanh nổi trái/phải khác nhau cho từng ứng dụng trên macOS không? Thành thật mà nói, không - không phải nguyên bản và không phải với hầu hết các công cụ. Đây là những gì thực sự có thể xảy ra và đâu là giới hạn thực sự.",
    date: "2026-07-23",
    readTime: "Đọc trong 6 phút",
    content: `<p>Thành thật mà nói thì không - macOS không cho phép bạn đặt cân bằng âm thanh nổi trái/phải khác nhau cho mỗi ứng dụng và hầu như không có công cụ của bên thứ ba nào hiển thị khả năng xoay thực sự cho mỗi ứng dụng. Bạn có thể đặt một số dư chung cho thiết bị đầu ra của mình và bạn có thể kiểm soát từng ứng dụng <em>khối lượng</em>, nhưng độc lập trên mỗi ứng dụng <em>chảo</em> không phải là tính năng mà macOS cung cấp.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Số dư trái/phải khác nhau cho mỗi ứng dụng trên Mac — Có khả thi không?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Cân bằng và âm lượng — chúng không giống nhau</h2>

<p>Cần tách biệt hai ý tưởng thường bị nhầm lẫn:</p>
<ul>
  <li><strong>khối lượng</strong> - tổng thể một ứng dụng có độ ồn như thế nào. Đây là một cấp độ duy nhất được áp dụng cho cả hai kênh.</li>
  <li><strong>Cân bằng (pan)</strong> — cách phân phối âm thanh giữa loa trái và loa phải. Sự cân bằng "toàn bộ bên trái" sẽ gửi mọi thứ sang kênh bên trái và tắt tiếng bên phải.</li>
</ul>

<p>Những người yêu cầu "sự cân bằng khác nhau cho mỗi ứng dụng" thường muốn một trong hai điều sau: đẩy âm thanh của một ứng dụng đến một tai (chẳng hạn như cuộc gọi ở tai trái, nhạc ở bên phải) hoặc khắc phục tình trạng chênh lệch thính giác hoặc loa kém ở một bên — nhưng chỉ đối với một số ứng dụng nhất định. Đó là những mục tiêu chính đáng. Vấn đề là nơi kiểm soát sống.</p>

<h2>Tại sao macOS không thể thực hiện việc này một cách tự nhiên</h2>

<p>macOS có chính xác một bộ điều khiển cân bằng và nó hoạt động ở cấp thiết bị đầu ra. Bạn sẽ tìm thấy nó dưới <strong>Cài đặt hệ thống → Âm thanh → Đầu ra</strong>, ở đâu một <em>Số dư</em> thanh trượt dịch chuyển toàn bộ hỗn hợp sang trái hoặc phải. Bất cứ điều gì thanh trượt đó được đặt để áp dụng cho <em>mọi thứ</em> được định tuyến đến thiết bị đó — mọi ứng dụng, mọi âm thanh hệ thống, tất cả cùng một lúc.</p>

<p>Không có API nào trong ngăn xếp âm thanh macOS tiêu chuẩn có nội dung "hiển thị âm thanh của ứng dụng này ở bên trái, ứng dụng đó ở bên phải". Các ứng dụng chuyển âm thanh của chúng đến hệ thống đã được trộn sẵn và hệ thống sẽ áp dụng một mức cân bằng chính trên đường tới loa. Vì vậy, lớp mà bạn muốn xoay trên mỗi ứng dụng sẽ không được hệ điều hành hiển thị. Đây là một hạn chế thực sự của hệ điều hành, không phải là thứ mà tiện ích thanh menu có thể giải quyết một cách lịch sự.</p>

<blockquote>Không giống như mỗi ứng dụng <em>khối lượng</em> — điều mà macOS vốn cũng thiếu nhưng ứng dụng nào có thể triển khai bằng cách nhấn vào luồng âm thanh - trên mỗi ứng dụng <em>cân đối</em> sẽ yêu cầu xoay lại luồng của từng ứng dụng một cách độc lập và hook đó không có sẵn cho các ứng dụng được đóng hộp cát.</blockquote>

<h2>SoundDial làm được gì - và thành thật mà nói, nó không làm được gì</h2>

<p><a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">SoundDial</a> cung cấp cho bạn quyền kiểm soát mỗi ứng dụng macOS bị thiếu: độc lập <strong>khối lượng</strong> cho mỗi ứng dụng đang chạy, mỗi ứng dụng <strong>tắt tiếng</strong>, số lượng trên mỗi ứng dụng <strong>tăng cường</strong> trên 100%, khối lượng có thể tiết kiệm được <strong>hồ sơ</strong>, tự động giảm tốc độ và chuyển đổi đầu ra nhanh chóng từ thanh menu.</p>

<p>Nói thẳng với bạn: <a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">SoundDial</a> điều khiển trên mỗi ứng dụng <em>sự ồn ào và tắt tiếng</em>, không phải âm thanh nổi trên mỗi ứng dụng <em>lia máy</em>. Nó sẽ không gửi Safari đến tai trái của bạn và Spotify đến tai phải của bạn. Nếu ai đó nói với bạn rằng bộ trộn thanh menu thực hiện cân bằng L/R thực sự trên mỗi ứng dụng trên macOS, hãy nghi ngờ — đó không phải là điều khiển mà hệ điều hành đưa ra. Điều SoundDial thực sự giải quyết được là sự thất vọng phổ biến hơn nhiều: một ứng dụng quá ồn ào hoặc quá yên tĩnh so với ứng dụng khác.</p>

<h2>Giải pháp thực sự cho số dư trên mỗi ứng dụng</h2>

<p>Nếu bạn thực sự cần phân chia âm thanh theo từng cạnh thì đây là các lựa chọn hợp lý, đại khái là từ đơn giản nhất đến phức tạp nhất:</p>

<ul>
  <li><strong>Số dư toàn cầu (tất cả ứng dụng):</strong> Sử dụng Cài đặt hệ thống → Âm thanh → Đầu ra → Cân bằng. Đây là tùy chọn tích hợp duy nhất của bạn và nó ảnh hưởng đến mọi ứng dụng. Hữu ích cho việc điều chỉnh căn phòng hoặc thính giác không đối xứng, vô dụng trong việc cô lập một ứng dụng.</li>
  <li><strong>Thiết bị đầu ra riêng biệt:</strong> Đây là điều gần nhất với số dư thực tế trên mỗi ứng dụng. Định tuyến Ứng dụng A đến một thiết bị đầu ra và Ứng dụng B đến một thiết bị đầu ra khác, sau đó đặt số dư của từng thiết bị một cách độc lập. macOS cho phép bạn chọn thiết bị đầu ra bên trong một số ứng dụng (và trình duyệt/ứng dụng giao tiếp thường hiển thị bộ chọn đầu ra của riêng chúng). Nếu Ứng dụng A trỏ đến một thiết bị được xoay sang trái và Ứng dụng B trỏ đến một thiết bị được xoay sang phải thì bạn sẽ nhận được số dư trên mỗi ứng dụng một cách hiệu quả — miễn là cả hai ứng dụng đều cho phép bạn chọn đầu ra của chúng.</li>
  <li><strong>Công cụ định tuyến âm thanh ảo:</strong> Trong một số cấu hình, các tiện ích tạo thiết bị ảo và bộ trộn nội bộ có thể định tuyến các ứng dụng cụ thể đến các kênh cụ thể. Điều này mạnh mẽ nhưng khó sử dụng, bổ sung thêm thành phần kiểu trình điều khiển và quá mức cần thiết đối với hầu hết mọi người. Đó là lĩnh vực của những người truyền phát và kỹ sư âm thanh, không phải là giải pháp "gọi vào một tai" thông thường.</li>
  <li><strong>Phân chia phần cứng:</strong> Nếu đó là về loa vật lý hoặc sự khác biệt về thính giác, bộ trộn phần cứng hoặc giao diện âm thanh với khả năng điều khiển theo từng kênh sẽ giải quyết hoàn toàn vấn đề phần mềm.</li>
</ul>

<h2>Khi khối lượng mỗi ứng dụng thực sự là thứ bạn cần</h2>

<p>Rất nhiều yêu cầu "Tôi muốn số dư khác nhau cho mỗi ứng dụng" thực sự là "ứng dụng này đang lấn át ứng dụng khác". Nếu mục tiêu là một cuộc gọi điện video mà bạn có thể nghe qua âm nhạc của mình hoặc một trò chơi quá ồn ào bên cạnh cuộc trò chuyện Discord, thì sự cân bằng không phải là công cụ - mà là âm lượng độc lập. Đó chính xác là những gì mà bộ trộn trên mỗi ứng dụng xử lý một cách rõ ràng mà không cần trình điều khiển ảo hoặc thể dục dụng cụ định tuyến.</p>

<p>Vì vậy, tóm tắt trung thực: cân bằng trái/phải thực sự trên mỗi ứng dụng không phải là tính năng macOS và không có ứng dụng trộn nào giả mạo nó một cách thuyết phục. Các tuyến đường thực sự của bạn là thanh trượt cân bằng toàn cầu hoặc định tuyến đầu ra của mỗi ứng dụng đến các thiết bị được tách riêng. Nhưng nếu cơn đau cơ bản là do âm lượng tương đối lớn thì đó là vấn đề đã được giải quyết.</p>

<p>Bạn muốn âm lượng, tắt tiếng và tăng tốc độc lập cho mọi ứng dụng trên Mac của mình, với cấu hình có thể lưu được và không có trình điều khiển? <a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">Nhận SoundDial trên Mac App Store</a> — €14,99, một lần, được đóng hộp cát.</p>`,
  },
  "why-are-some-apps-louder-than-others-mac": {
    slug: "why-are-some-apps-louder-than-others-mac",
    title: "Tại sao một số ứng dụng lại ồn ào hơn những ứng dụng khác trên Mac? (Và làm thế nào để san bằng chúng)",
    description: "Các ứng dụng có âm thanh cực kỳ khác nhau trên Mac vì mỗi ứng dụng đều được điều chỉnh theo mục tiêu âm lượng riêng và macOS không có tính năng điều khiển âm lượng tích hợp cho mỗi ứng dụng. Đây là lý do tại sao điều đó xảy ra và cách nâng cấp ứng dụng của bạn.",
    date: "2026-07-23",
    readTime: "Đọc trong 6 phút",
    content: `<p>Các ứng dụng có âm thanh cực kỳ khác nhau trên Mac của bạn vì mỗi ứng dụng đều được biên soạn, làm chủ và chuẩn hóa theo mục tiêu âm lượng riêng và macOS không có tính năng điều khiển âm lượng tích hợp trên mỗi ứng dụng để điều chỉnh chúng. Tất cả các cảnh báo Spotify, YouTube, Zoom và hệ thống đều đi qua cùng một thanh trượt chính, do đó bạn sẽ gặp khó khăn khi phải di chuyển nó lên xuống liên tục.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial - Tại sao một số ứng dụng lại to hơn nhiều so với các ứng dụng khác trên Mac? (Và làm thế nào để san bằng chúng)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Đó không phải là Mac của bạn - đó là âm thanh</h2>

<p>Thanh trượt âm lượng hệ thống duy nhất trên macOS kiểm soát mức đầu ra cuối cùng cho mọi thứ. Nó không ảnh hưởng đến âm lượng tương đối được đưa vào luồng âm thanh của mỗi ứng dụng. Đường cơ sở đó được thiết lập từ rất lâu trước khi âm thanh đến loa của bạn và nó thay đổi rất nhiều tùy theo nguồn.</p>

<p>Ba điều thúc đẩy những khác biệt đó:</p>

<ul>
<li><strong>Làm chủ các cấp độ.</strong> Một bản nhạc pop mạnh mẽ được làm chủ tốt hơn nhiều so với một bản ghi âm yên tĩnh hoặc một podcast lời nói. Một bộ phim kết hợp dành cho rạp chiếu phim cố tình giữ cho những tiếng thì thầm im lặng và tiếng nổ lớn có mục đích — đó là dải động và điều đó có nghĩa là mức trung bình thấp.</li>
<li><strong>Mục tiêu bình thường hóa âm lượng.</strong> Nền tảng phát trực tuyến điều chỉnh quá trình phát lại theo mục tiêu được đo bằng LUFS (Đơn vị âm lượng so với Toàn thang). Spotify nhắm đến khoảng -14 LUFS, YouTube khoảng -14 LUFS, Apple Music khoảng -16 LUFS. Ứng dụng hội nghị truyền hình hoặc trò chơi áp dụng hoàn toàn lợi ích riêng của nó. Hai ứng dụng được "chuẩn hóa" cho các mục tiêu khác nhau sẽ không bao giờ khớp với nhau.</li>
<li><strong>Không có san lấp mặt bằng ứng dụng chéo.</strong> Mỗi ứng dụng chỉ bình thường hóa nội dung của chính nó. Không có gì phối hợp Spotify với Zoom so với trò chơi trên trình duyệt. macOS chỉ tính tổng chúng và gửi hỗn hợp đi.</li>
</ul>

<h2>Tại sao LUFS lại quan trọng (nói một cách đơn giản)</h2>

<p>Mức cao nhất cho bạn biết thời điểm lớn nhất trong tín hiệu. LUFS cho bạn biết thực tế một thứ gì đó ồn ào đến thế nào <em>cảm thấy</em> theo thời gian, được cân nhắc về cách thức hoạt động của thính giác con người. Sự khác biệt này là lý do tại sao một podcast và một bản nhạc khiêu vũ có thể đạt đến đỉnh cao như nhau nhưng lại có cảm giác khác biệt về độ ồn - bản nhạc dành nhiều thời gian hơn ở gần trần của nó.</p>

<blockquote>Mục tiêu LUFS yên tĩnh hơn có nghĩa là khoảng không gian rộng hơn và dải động rộng hơn. Mục tiêu to hơn có nghĩa là bức tường âm thanh "luôn đầy" nhất quán hơn. Điều này cũng không sai — nhưng khi các ứng dụng nhắm mục tiêu đến các số khác nhau, bạn sẽ cảm thấy như một ứng dụng này đang la hét và một ứng dụng khác đang lầm bầm.</blockquote>

<p>Đó là nguyên nhân gốc rễ trung thực. Nó không phải là một lỗi bạn có thể vá. Đó là tính chất vật lý của cách âm thanh được tạo ra và phân phối, được nhân lên trên hàng tá ứng dụng chưa bao giờ được thiết kế để thống nhất với nhau.</p>

<h2>Khoảng trống macOS để ngỏ</h2>

<p>Đây là phần thực sự khiến mọi người thất vọng: Windows đã cung cấp Bộ trộn âm lượng cho mỗi ứng dụng trong nhiều năm. Bạn có thể kéo một ứng dụng xuống và đẩy ứng dụng khác lên, ngay từ thanh tác vụ. macOS chưa bao giờ bao gồm điều này. Tùy chọn âm thanh chỉ cung cấp cho bạn thanh trượt chính và lựa chọn thiết bị đầu ra.</p>

<p>Vì vậy, trên Mac, các tùy chọn của bạn thường bị giới hạn:</p>

<ul>
<li>Điều chỉnh thanh trượt âm lượng bên trong của từng ứng dụng — nếu ứng dụng đó có một thanh trượt. Nhiều ứng dụng (Zoom, hầu hết các trò chơi, chuông hệ thống) không hiển thị ứng dụng có thể sử dụng được.</li>
<li>Sử dụng thanh trượt chính theo cách thủ công mỗi khi bạn chuyển ngữ cảnh.</li>
<li>Tắt tiếng hoàn toàn một thứ, đó là một cách khắc phục thẳng thừng không thực sự cân bằng bất cứ thứ gì.</li>
</ul>

<p>Không ai trong số này nhớ sở thích của bạn. Thoát và khởi chạy lại ứng dụng và bạn quay lại trạng thái ban đầu.</p>

<h2>Cách khắc phục thực tế: khối lượng được ghi nhớ cho mỗi ứng dụng</h2>

<p>Vì bạn không thể buộc mọi dịch vụ phải làm chủ lại danh mục của mình nên giải pháp khả thi là thêm lớp macOS còn thiếu chưa bao giờ được vận chuyển: khối lượng độc lập, được ghi nhớ cho mỗi ứng dụng. Đó chính xác là những gì <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> có. Nó nằm trong thanh menu của bạn và cung cấp cho mọi ứng dụng đang chạy thanh trượt riêng, vì vậy bạn có thể kéo thanh trượt lớn xuống và đẩy thanh trượt yên tĩnh lên cho đến khi chúng ở mức phù hợp với bạn.</p>

<p>Để đồng đều các ứng dụng của bạn trong thực tế:</p>

<ul>
<li>Mở <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> từ thanh menu và bạn sẽ thấy từng ứng dụng đang hoạt động có quyền kiểm soát riêng.</li>
<li>Giảm bất cứ thứ gì đang bùng nổ - thường là một ứng dụng âm nhạc hoặc video được làm chủ nóng - xuống khoảng 60-70%.</li>
<li>Để ứng dụng tham chiếu yên tĩnh của bạn (thường là ứng dụng cuộc gọi hoặc podcast) ở mức 100% và sử dụng cho mỗi ứng dụng <strong>tăng cường</strong> để đẩy nó vượt quá 100% nếu nó vẫn còn quá mềm.</li>
<li>Đặt các cấp độ một lần. SoundDial ghi nhớ âm lượng của từng ứng dụng để số dư được giữ nguyên vào lần tiếp theo bạn mở ứng dụng.</li>
</ul>

<p>Hai tính năng thực hiện hầu hết công việc san lấp mặt bằng ở đây. <strong>Tăng cường</strong> vấn đề quan trọng vì nhiều ứng dụng đơn giản là quá yên tĩnh ngay cả ở mức tối đa - một thanh trượt trên mỗi ứng dụng chỉ giảm âm lượng không thể giải cứu chúng, nhưng một thanh trượt có thể khuếch đại hơn 100% thì có thể. Và <strong>hồ sơ khối lượng</strong> cho phép bạn lưu toàn bộ các cấp độ — chẳng hạn như cấu hình "tập trung vào âm nhạc thấp, gọi to" cho công việc so với kết hợp khác để chơi game — và chuyển đổi giữa chúng ngay lập tức thay vì điều chỉnh lại từng ứng dụng.</p>

<h2>Nơi điều này giúp ích nhiều nhất</h2>

<p>Sự nhẹ nhõm phổ biến nhất là bước nhảy vọt giữa âm nhạc và cuộc họp: phát nhạc trực tuyến ở mức lớn, sau đó là ứng dụng cuộc gọi nghe có vẻ mờ nhạt khi so sánh. Đặt ứng dụng cuộc gọi cao hơn (hoặc được tăng cường), kéo nhạc xuống và âm lượng đáng kinh ngạc biến mất. Điều tương tự cũng áp dụng cho một trò chơi trình duyệt yên tĩnh với một trình phát video ồn ào hoặc các cảnh báo hệ thống xuất hiện trên mọi thứ.</p>

<p>Để rõ ràng về các giới hạn: SoundDial cân bằng những gì ứng dụng của bạn tạo ra. Nó sẽ không làm chủ lại bản nhạc được sản xuất kém và không thể tạo ra chi tiết trong âm thanh được trộn với dải động rất rộng. Những gì nó làm là cung cấp cho bạn một quyền kiểm soát macOS còn sót lại — các cấp độ ổn định, cho mỗi ứng dụng được giữ nguyên.</p>

<p>Bạn cảm thấy mệt mỏi khi phải sử dụng thanh trượt chính mỗi khi chuyển đổi ứng dụng? <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> là €14,99 một lần trên Mac App Store — được đóng hộp cát, không có trình điều khiển, không có DMG — và cuối cùng nó cung cấp cho mỗi ứng dụng dung lượng ghi nhớ riêng.</p>`,
  },
};
