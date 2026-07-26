import type { ArticleSet } from "./index";

export const koArticles: ArticleSet = {
  "mac-audio-podcasting-setup": {
    slug: "mac-audio-podcasting-setup",
    title: "Mac 팟캐스트 오디오: 녹음 중 듣는 소리를 제어하는 방법",
    description:
      "팟캐스트를 녹음하면서 레벨을 모니터링하고, 게스트 소리를 듣고, 알림을 관리하는 것 — 모두 하나의 볼륨 슬라이더로 경쟁합니다. 더 나은 설정을 소개합니다.",
    date: "2026-03-05",
    readTime: "5분 소요",
    content: `
<p>Mac에서 팟캐스트를 녹음하고 있습니다. Zoom, Riverside 또는 SquadCast를 통해 게스트의 목소리를 명확하게 들어야 합니다. DAW의 녹음 레벨을 모니터링해야 합니다. Slack은 음소거해서 알림음이 녹음에 들어가지 않도록 해야 합니다. 그리고 시스템 알림 소리는 완전히 차단해야 합니다 — 인터뷰 중간에 macOS의 "딩" 소리가 들어가면 사용할 수 없는 오디오가 됩니다.</p>

<p>macOS는 이 모든 것에 대해 하나의 볼륨 슬라이더만 제공합니다. 이것으로는 부족합니다.</p>

<h2>Mac에서의 팟캐스트 오디오 과제</h2>

<p>팟캐스트 녹음 세션 중에는 일반적으로 다음이 실행됩니다:</p>
<ul>
  <li><strong>커뮤니케이션 앱</strong> (Zoom, Riverside, SquadCast) — 게스트 오디오, 명확해야 함</li>
  <li><strong>DAW / 녹음 앱</strong> (Logic, GarageBand, Audacity, Hindenburg) — 자신의 레벨 모니터링</li>
  <li><strong>알림 소스</strong> (Slack, Mail, Calendar, Messages) — 녹음 중 완전히 무음이어야 함</li>
  <li><strong>브라우저</strong> — 쇼 노트, 리서치 탭 또는 타이머가 실행 중일 수 있음</li>
</ul>

<p>이 모든 것이 같은 볼륨이면 혼란스럽습니다. 게스트의 목소리가 시스템 알림음과 경쟁합니다. Slack 알림이 테이크를 망칠 수 있습니다. 게스트의 볼륨을 조정하려면 시스템 볼륨을 변경해야 하는데, 그러면 모니터링 레벨도 바뀝니다.</p>

<h2>일반적인 해결 방법</h2>

<p>대부분의 팟캐스터는 다음을 조합하여 사용합니다:</p>
<ul>
  <li>알림을 억제하기 위한 집중 모드(방해 금지)</li>
  <li>녹음 전 Slack, Mail 및 기타 시끄러운 앱을 수동으로 종료</li>
  <li>게스트용 커뮤니케이션 앱의 내부 볼륨 조정</li>
</ul>

<p>이 방법은 작동하지만 실수하기 쉽습니다. 방해 금지 모드를 켜는 것을 잊으면 알림이 테이크를 망칩니다. Slack을 종료하는 것을 잊으면 전화가 올 수 있습니다. 그리고 여전히 게스트 볼륨과 모니터링 레벨을 독립적으로 제어할 수 없습니다.</p>

<h2>팟캐스팅을 위한 앱별 오디오</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>을 사용하면 각 앱을 독립적으로 제어하여 깨끗한 녹음 환경을 구축할 수 있습니다:</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 팟캐스트 설정 — 게스트 오디오, 모니터링 및 알림을 독립적인 레벨로 설정" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>녹음 프로필</h3>
<ul>
  <li><strong>Zoom / Riverside:</strong> 80-100% — 명확한 게스트 오디오</li>
  <li><strong>Logic / GarageBand:</strong> 60% — 피로 없이 편안한 모니터링</li>
  <li><strong>Slack:</strong> 음소거 — 알림음 없음</li>
  <li><strong>Mail:</strong> 음소거</li>
  <li><strong>Messages:</strong> 음소거</li>
  <li><strong>Calendar:</strong> 음소거</li>
  <li><strong>Browser:</strong> 음소거 — 예기치 않은 자동 재생 없음</li>
</ul>

<p>이것을 "녹음" 프로필로 저장하세요. 녹음을 시작하기 전에 한 번의 클릭으로 프로필을 적용하세요. 모든 알림 소스가 음소거되고, 게스트는 최대 볼륨이며, 모니터링은 편안한 레벨입니다.</p>

<h3>편집 프로필</h3>
<ul>
  <li><strong>Logic / Hindenburg:</strong> 100% — 편집을 위한 전체 모니터링</li>
  <li><strong>Spotify:</strong> 음소거 — 레퍼런스 혼동 방지</li>
  <li><strong>Slack:</strong> 20% — 쉬는 시간에 미세한 알림</li>
  <li><strong>Browser:</strong> 40% — 쇼 노트 및 리서치용</li>
</ul>

<p>두 개의 프로필, 두 번의 클릭, 완전히 다른 두 개의 오디오 환경. 앱을 수동으로 종료하고 다시 여는 번거로움이 없습니다. 녹음 후 알림을 다시 활성화하는 것을 잊을 걱정도 없습니다.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>
`,
  },
  "mac-too-loud-full-volume-tame-it": {
    slug: "mac-too-loud-full-volume-tame-it",
    title: "Mac 볼륨이 너무 큰가요? 더 정밀한 제어를 하는 방법",
    description:
      "MacBook Pro 스피커는 훌륭합니다 — 너무 시끄러워질 때까지. 적당한 볼륨 설정에서도 너무 크게 느껴진다면, 더 정밀한 오디오 제어 방법을 알려드립니다.",
    date: "2026-03-08",
    readTime: "4분 소요",
    content: `
<p>Apple의 최신 MacBook Pro 모델(14" 및 16")은 노트북치고는 놀라울 정도로 강력한 스피커를 가지고 있습니다. 너무 강력해서 적당한 볼륨 레벨도 정말 시끄러울 수 있습니다 — 특히 조용한 방에서, 밤 늦게, 또는 헤드폰을 사용할 때. "편안함"과 "너무 큼" 사이의 간격이 때로는 한두 단계에 불과합니다.</p>

<h2>왜 볼륨 단계가 너무 거칠게 느껴지는가</h2>

<p>macOS에는 키보드를 통해 <strong>16단계의 볼륨</strong>이 있습니다. 각 단계는 전체 범위의 약 6.25%입니다. 강력한 스피커나 민감한 헤드폰에서는 한 단계가 상당한 볼륨 변화를 나타낼 수 있습니다 — 볼륨 키 한 번 탭으로 "완벽"에서 "너무 큼"으로 바뀌는 것입니다.</p>

<h2>내장 해결법: 4분의 1 단계 볼륨</h2>

<p><strong>Option + Shift</strong>를 누른 채로 볼륨 올리기/내리기를 누르세요. 각 누름은 일반 단계의 4분의 1만큼 조정하여 16단계 대신 <strong>64단계</strong>를 제공합니다. 이 4배 더 정밀한 제어로 특히 강력한 스피커나 헤드폰에서 정확한 볼륨을 찾기가 훨씬 쉬워집니다.</p>

<p>이것은 대부분의 사람들이 모르는 가장 유용한 Mac 오디오 팁입니다.</p>

<h2>더 깊은 문제: 모든 것에 하나의 슬라이더</h2>

<p>64단계가 있더라도 모든 앱을 제어하는 슬라이더는 여전히 하나입니다. 편안한 알림 소리를 위해 볼륨을 충분히 낮추면 음악이 너무 작을 수 있습니다. 음악에 맞추면 알림 소리가 깜짝 놀라게 할 수 있습니다.</p>

<p>진짜 문제는 다른 오디오 소스에는 다른 볼륨이 필요하다는 것입니다. 알림은 은은해야 합니다. 음악은 존재감이 있어야 합니다. 통화는 명확해야 합니다. 브라우저 비디오는 적당해야 합니다. 하나의 슬라이더로는 이 모든 것을 잘 할 수 없습니다.</p>

<h2>정밀한 제어를 위한 앱별 볼륨</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>은 각 앱에 <strong>1% 단위</strong>로 0%에서 200%까지의 자체 볼륨 슬라이더를 제공합니다. macOS의 시스템 전체 16단계(또는 수정자 키 사용 시 64단계)에 비해 앱당 200단계의 정밀도입니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial macOS에서 1% 정밀도의 앱별 세밀한 볼륨 제어" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>시스템 볼륨을 적당한 기본 레벨(50-60%)로 설정한 다음 SoundDial로 각 앱을 미세 조정하세요:</p>
<ul>
  <li><strong>Spotify:</strong> 35% — 편안한 배경 레벨</li>
  <li><strong>Slack:</strong> 12% — 미세한 알림 소리</li>
  <li><strong>Zoom:</strong> 85% — 부담 없이 명확한 통화 오디오</li>
  <li><strong>Safari:</strong> 45% — 적당한 비디오 재생</li>
</ul>

<p>이렇게 하면 어떤 오디오 소스도 "너무 크지" 않습니다. 각각이 독립적으로 이상적인 레벨에 맞춰져 있습니다. 12%의 Slack 알림은 거의 느껴지지 않지만, 85%의 Zoom 통화는 수정처럼 맑습니다 — 모두 같은 시스템 볼륨 설정에서.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>
`,
  },
  "slack-huddle-volume-issues-mac": {
    slug: "slack-huddle-volume-issues-mac",
    title: "Mac에서 Slack 허들 볼륨 문제: 너무 작거나, 너무 크거나, 음악과 충돌하거나",
    description:
      "Slack 허들이 음악 및 알림과 같은 볼륨을 놓고 경쟁합니다. Mac에서 허들 오디오를 다른 모든 것과 독립적으로 제어하는 방법을 알아보세요.",
    date: "2026-03-10",
    readTime: "5분 소요",
    content: `
<p>Slack 허들은 편리합니다 — 버튼을 클릭하면 회의를 예약하지 않고도 음성 통화에 참여할 수 있습니다. 하지만 오디오는 엉망입니다. 허들이 Spotify와 같은 볼륨입니다. Slack 알림 소리가 통화와 같은 레벨로 울립니다. 누군가 허들에서 음악이나 오디오가 포함된 화면을 공유하면 들리지 않거나 귀가 멍할 정도입니다.</p>

<p>문제는 Slack이 아닙니다. macOS입니다. 모든 것이 하나의 볼륨 슬라이더를 통해 작동하므로 허들 오디오, 알림 소리, 음악, 브라우저 오디오가 모두 같은 공간을 놓고 경쟁합니다.</p>

<h2>Slack의 내부 오디오 컨트롤</h2>

<p>Slack에는 제한된 오디오 컨트롤이 있습니다:</p>
<ul>
  <li><strong>알림 설정:</strong> Slack → 설정 → 알림 → 소리 및 외관. 알림 소리를 변경하거나 특정 소리를 비활성화할 수 있지만, 허들 볼륨과 별도로 알림 볼륨을 설정할 수 없습니다.</li>
  <li><strong>허들 볼륨:</strong> 허들 중에는 통화와 Slack의 다른 소리에 대한 별도의 볼륨 슬라이더가 없습니다. Slack의 모든 것은 macOS에 대한 하나의 오디오 스트림입니다.</li>
  <li><strong>입력/출력 장치:</strong> Slack → 설정 → 오디오 및 비디오에서 마이크와 스피커 장치를 선택할 수 있지만, 기능별 볼륨 레벨은 설정할 수 없습니다.</li>
</ul>

<h2>세 가지 Slack 오디오 문제</h2>

<h3>1. 음악에 비해 허들이 너무 조용함</h3>
<p>음악이 편안한 레벨입니다. 허들에 참여합니다. 동료의 목소리가 음악과 같은 볼륨이라 단어를 명확하게 구분할 수 없습니다. 시스템 볼륨을 올리면 음악이 너무 커집니다.</p>

<h3>2. 허들 중 알림 소리</h3>
<p>허들에서 토론 중입니다. 들어오는 모든 Slack 메시지가 통화와 같은 볼륨으로 알림을 울립니다. 활발한 채널이 있는 바쁜 작업 공간에서 끊임없는 알림 소리는 허들을 사용할 수 없게 만듭니다.</p>

<h3>3. 배경 듣기에 허들이 너무 큼</h3>
<p>때로는 작업하면서 수동적으로 듣기 위해 허들에 참여합니다. 배경 레벨을 원합니다 — 방해하지 않을 정도로 조용하면서도 누군가 이름을 부르면 들을 수 있을 정도로. macOS에서는 Slack을 20%로, 브라우저를 60%로 설정할 수 없습니다.</p>

<h2>해결법: Slack 볼륨을 독립적으로 제어</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>은 다른 모든 앱과 별도로 Slack에 자체 볼륨 슬라이더를 제공합니다. Slack의 허들 오디오와 알림 소리는 같은 앱의 일부이므로 슬라이더가 둘 다 제어하지만 — 대부분의 경우 이것이 원하는 바입니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial이 음악 재생 중 허들에서 Slack 볼륨을 독립적으로 제어" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>허들 최적화 설정</h3>
<ul>
  <li><strong>Slack:</strong> 90-100% (명확한 허들 오디오, Slack을 적극적으로 사용 중이므로 알림은 크지만 괜찮음)</li>
  <li><strong>Spotify:</strong> 15% (아주 은은한 배경, 목소리와 경쟁하지 않음)</li>
  <li><strong>Browser:</strong> 음소거 (예기치 않은 탭 오디오 없음)</li>
</ul>

<h3>수동 허들 설정</h3>
<ul>
  <li><strong>Slack:</strong> 30% (배경 듣기 레벨)</li>
  <li><strong>Spotify:</strong> 40% (주 오디오는 음악)</li>
  <li><strong>Browser:</strong> 50% (일반 작업 레벨)</li>
</ul>

<p>각각을 프로필로 저장하세요. 허들이 시작되면 한 번의 클릭으로 적절한 프로필을 적용하세요. 또는 <strong>자동 더킹</strong>을 사용하세요 — 허들이 마이크를 활성화하면 SoundDial이 자동으로 Slack을 제외한 모든 것의 볼륨을 낮춥니다.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>
`,
  },
  "set-default-volume-new-apps-mac": {
    slug: "set-default-volume-new-apps-mac",
    title: "Mac에서 새 앱의 기본 볼륨을 설정하는 방법",
    description:
      "새 앱은 기본적으로 최대 볼륨으로 실행됩니다. 모든 새 앱이 편안한 레벨로 시작하도록 하는 방법을 알아보세요 — 갑작스러운 소리에 놀라지 않도록.",
    date: "2026-03-12",
    readTime: "3분 소요",
    content: `
<p>새 앱을 설치합니다. 처음으로 실행합니다. 즉시 오디오를 재생합니다 — 인트로 소리, 알림, 튜토리얼 비디오 — 최대 시스템 볼륨으로. 예상하지 못했습니다. 헤드폰을 쓰고 있습니다. 귀가 울립니다.</p>

<p>macOS에는 "새 앱의 기본 볼륨"이라는 개념이 없습니다. macOS에는 앱별 볼륨이 없기 때문입니다. 모든 앱이 시스템 볼륨을 받고, 시스템 볼륨은 마지막으로 설정한 값입니다. 새 앱은 특별 대우를 받지 않습니다 — 다른 모든 것과 같은 레벨로 재생됩니다.</p>

<h2>왜 이것이 문제인가</h2>

<p>앱을 처음 실행할 때 얼마나 시끄러울지 알 수 없습니다. 일부 앱은 즉시 소리를 재생합니다(온보딩 튜토리얼, 알림 소리, 환영 비디오). 시스템 볼륨이 음악을 듣느라 80%였다면 새 앱의 소리도 80%입니다 — 예상치 못한 오디오 소스로는 편안한 수준보다 훨씬 클 수 있습니다.</p>

<p>이것은 특히 다음과 같은 경우에 충격적입니다:</p>
<ul>
  <li>시작 소리를 재생하는 커뮤니케이션 앱(Slack, Teams)</li>
  <li>처음 실행 시 비디오 튜토리얼이 있는 앱</li>
  <li>즉시 타이틀 화면 음악을 재생하는 게임</li>
  <li>콘텐츠를 자동 재생하는 브라우저 기반 앱</li>
</ul>

<h2>해결법: 새 앱의 기본 볼륨</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>에는 새 앱을 위한 <strong>구성 가능한 기본 볼륨</strong>이 있습니다. 설정에서 새로 감지된 앱이 시작해야 하는 볼륨 레벨을 설정합니다 — 예를 들어 70%. 어떤 앱이든 처음 실행되어 오디오를 생성하면 SoundDial이 100% 대신 70%로 설정합니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 기본 볼륨 설정 — 새 앱이 최대 볼륨 대신 구성된 레벨로 시작" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>이것은 다음을 의미합니다:</p>
<ul>
  <li>새로 설치된 앱의 갑작스러운 최대 볼륨 오디오 없음</li>
  <li>모든 새 앱이 편안하고 예측 가능한 레벨로 시작</li>
  <li>필요에 따라 기본값에서 위아래로 조정 가능</li>
  <li>한번 조정하면 <strong>볼륨 메모리</strong> 기능이 다음 실행을 위해 그 앱의 레벨을 기억</li>
</ul>

<p>작은 기능이지만 진짜 일상의 불편함을 해결합니다 — 누구나 한 번은 당하는 "새 앱 깜짝 폭발" 소리.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>
`,
  },
  "mac-startup-sound-too-loud": {
    slug: "mac-startup-sound-too-loud",
    title: "Mac 시작 소리가 너무 큰가요? 비활성화하거나 줄이는 방법",
    description:
      "Mac 시작 차임 소리가 재시작할 때마다 최대 볼륨으로 울립니다 — 회의실이나 조용한 공간에서 특히 당혹스럽습니다. 음소거하거나 제어하는 방법을 알아보세요.",
    date: "2026-03-15",
    readTime: "4분 소요",
    content: `
<p>조용한 사무실에서 Mac을 재시작합니다. 회의실은 완전히 조용합니다. 그런데 — <em>봉</em> — 시작 차임이 최대 볼륨으로 울립니다. 모두가 당신을 쳐다봅니다. 차임은 상징적이지만 제어할 수 없고 종종 당혹스러울 정도로 큽니다.</p>

<h2>시작 소리를 비활성화하는 방법</h2>

<p>macOS에서는 시작 차임을 완전히 끌 수 있습니다:</p>

<ol>
  <li><strong>시스템 설정 → 사운드</strong>로 이동</li>
  <li><strong>"시작 시 사운드 재생"</strong>을 찾기</li>
  <li>체크 해제</li>
</ol>

<p>완료. Mac이 이제부터 조용히 시작됩니다. 터미널 명령은 필요 없습니다 — 이 설정은 macOS Big Sur 이후부터 사용 가능합니다.</p>

<h3>터미널 방법 (선호하는 경우)</h3>
<p>터미널을 통해서도 비활성화할 수 있습니다:</p>
<p><code>sudo nvram StartupMute=%01</code></p>
<p>다시 활성화하려면:</p>
<p><code>sudo nvram StartupMute=%00</code></p>

<h2>시작 소리를 비활성화 대신 줄일 수 있나요?</h2>

<p>직접적으로는 불가능합니다. 시작 차임은 종료 시점의 시스템 볼륨에 의해 결정되는 고정 볼륨으로 재생됩니다. Mac이 80% 볼륨에서 종료되었다면 차임은 대략 80%로 재생됩니다. 20%였다면 차임은 더 조용합니다.</p>

<p><strong>해결 방법:</strong> Mac을 재시작하기 전에 시스템 볼륨을 10-20%로 낮추세요. 시작 차임이 더 낮은 레벨로 재생됩니다. 이상적이지는 않습니다 — 기억해야 하므로 — 하지만 완전히 음소거하는 것보다 합리적인 볼륨의 차임을 원한다면 효과적입니다.</p>

<h2>더 광범위한 Mac 사운드 제어 문제</h2>

<p>시작 차임은 macOS의 제한된 오디오 제어의 한 가지 예일 뿐입니다. 시스템 소리, 알림 소리, 앱 오디오가 최소한의 독립적 제어로 모두 함께 섞여 있습니다. 하루 종일 다양한 오디오 소스를 관리하기 위해 정기적으로 볼륨을 조정하고 있다면, 앱별 볼륨 제어가 더 광범위한 문제를 해결합니다.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>은 Mac의 모든 앱에 자체 볼륨 슬라이더를 제공합니다. 알림 앱은 낮게, 음악은 편안한 레벨로, 통화는 최대 볼륨으로 — 모두 독립적으로 설정하세요. 구성을 프로필로 저장하고 한 번의 클릭으로 전환하세요.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 모든 Mac 오디오 소스를 독립적으로 관리하는 앱별 볼륨 제어" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>
`,
  },
  "webex-volume-too-low-mac": {
    slug: "webex-volume-too-low-mac",
    title: "Mac에서 Cisco Webex 볼륨이 너무 작은가요? 해결 방법",
    description:
      "Mac에서 Webex 통화가 거의 들리지 않습니다. Webex 오디오 설정부터 앱별 믹서로 통화 볼륨을 100% 이상으로 높이는 방법까지 모든 해결책을 알려드립니다.",
    date: "2026-03-18",
    readTime: "5분 소요",
    content: `
<p>Webex는 기업 환경에서 가장 많이 사용되는 화상 회의 도구 중 하나이며 — Mac에서 오디오 품질에 대한 불만이 가장 많은 도구 중 하나이기도 합니다. 낮은 통화 볼륨, 뭉개진 목소리, 같은 시스템 볼륨에서 Zoom이나 Teams보다 더 조용하게 들리는 오디오. Webex 통화가 거의 들리지 않는다면 혼자가 아닙니다.</p>

<h2>1. Webex 오디오 설정 확인</h2>

<p>Webex 회의 중 오디오 메뉴(스피커 아이콘 또는 점 세 개 → 오디오 설정)를 클릭하세요:</p>
<ul>
  <li>올바른 <strong>스피커</strong> 장치가 선택되어 있는지 확인</li>
  <li>스피커 볼륨 슬라이더를 최대로 드래그</li>
  <li>"테스트"를 클릭하여 테스트 톤을 재생하고 출력 확인</li>
  <li>"음악 모드"가 활성화되어 있는지 확인 — 특별히 음악을 발표하는 경우가 아니면 비활성화</li>
  <li>노이즈 제거 설정 확인 — "배경 소음 제거"가 공격적 모드이면 인지되는 음성 볼륨이 줄어들 수 있음</li>
</ul>

<h2>2. macOS 출력 확인</h2>

<p>시스템 설정 → 사운드 → 출력. 올바른 장치가 선택되어 있고 볼륨이 최대인지 확인하세요. macOS 업데이트 또는 장치 전환 후 Webex가 예상치 못한 출력을 사용할 수 있습니다.</p>

<h2>3. Bluetooth 코덱 문제</h2>

<p>AirPods나 Bluetooth 헤드폰을 사용 중인가요? Webex가 마이크를 활성화하면 AAC→SCO 코덱 전환이 강제되어 오디오 품질과 볼륨이 저하됩니다. 별도의 마이크(내장 Mac 마이크 또는 USB)를 사용하고 Bluetooth 헤드폰은 출력만으로 유지하세요.</p>

<h2>4. Webex 전용 오디오 처리</h2>

<p>Webex에는 통화 참가자의 표면적 볼륨을 줄일 수 있는 공격적인 오디오 처리가 있습니다. 다음 Webex 설정을 시도해 보세요:</p>
<ul>
  <li>노이즈 제거를 "높음" 대신 "낮음"으로 설정</li>
  <li>"내 목소리에 최적화"가 활성화되어 있으면 비활성화</li>
  <li>"컴퓨터 오디오"에서 특정 장치로 전환 시도</li>
</ul>

<h2>5. IT/관리자 문제</h2>

<p>기업 환경에서는 IT가 특정 오디오 정책으로 Webex를 관리하는 경우가 많습니다. 일부 설정은 잠겨 있거나 사전 구성되어 있을 수 있습니다. 기본적인 해결 방법이 작동하지 않으면 IT 부서에 Webex 오디오 정책에 대해 문의하세요. 일부 조직은 최대 오디오 레벨을 제한하거나 특정 오디오 처리 설정을 강제합니다.</p>

<h2>6. Webex를 100% 이상으로 증폭</h2>

<p>설정이 최대인데 참가자가 여전히 너무 조용하다면, <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>을 사용하면 Webex를 <strong>200%</strong>까지 증폭할 수 있습니다. Webex의 내장 최대값을 넘어 통화 오디오를 증폭합니다 — 참가자의 마이크가 불량하거나 Webex의 오디오 처리가 신호를 너무 많이 줄일 때 유용합니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial이 macOS에서 Cisco Webex 통화 볼륨을 100% 이상으로 증폭" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>SoundDial은 연속 Webex 회의 중에도 도움이 됩니다: 자동 더킹을 사용하여 각 회의 시작 시 자동으로 배경 음악을 낮추고 휴식 중에 복원합니다. "회의" 볼륨 프로필을 저장하여 근무일에 선호하는 오디오 밸런스를 즉시 설정하세요.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>
`,
  },
  "mac-two-audio-sources-same-time": {
    slug: "mac-two-audio-sources-same-time",
    title: "Mac에서 두 가지를 동시에 듣는 방법",
    description:
      "음악과 팟캐스트. 강의와 노트 비디오. 통화와 배경 음악. macOS는 둘 다 하나의 볼륨으로 선택하게 합니다 — 균형을 맞추는 방법을 알아보세요.",
    date: "2026-03-20",
    readTime: "4분 소요",
    content: `
<p>동시에 두 개의 오디오 소스를 듣고 싶습니다. 통화 중 음악. 팟캐스트 들으면서 튜토리얼 시청. 공부하면서 배경 분위기 음악. 두 가지, 두 가지 다른 이상적인 볼륨. macOS는 둘 다에 하나의 슬라이더만 제공합니다.</p>

<p>이것이 macOS의 근본적인 오디오 제한입니다: 모든 앱이 하나의 볼륨을 공유합니다. "이것은 30%, 저것은 80%"라고 할 수 없습니다. 모든 것이 하나의 레벨이거나 아무것도 아닙니다.</p>

<h2>실제로 두 개의 오디오 소스가 필요한 경우</h2>

<p>이것은 특수한 경우가 아닙니다. 대부분의 사람들이 컴퓨터를 사용하는 방식입니다:</p>

<ul>
  <li><strong>음악 + 화상 통화</strong> — 가장 일반적. Zoom 회의 중 배경 음악, 하지만 동료의 말을 들을 수 있을 정도로 조용하게.</li>
  <li><strong>강의 + 참고 자료</strong> — 녹화된 강의를 보면서 맥락을 위해 가끔 YouTube 튜토리얼을 시청하는 학생.</li>
  <li><strong>팟캐스트 + 분위기 음악</strong> — 팟캐스트를 들으면서 백색 소음이나 빗소리 앱이 은은하게 재생.</li>
  <li><strong>두 개의 브라우저 탭</strong> — 한 탭에 교육 비디오, 다른 탭에 데모, 다른 볼륨으로.</li>
  <li><strong>게임 + 음성 채팅</strong> — 몰입감을 위한 게임 오디오, 소통을 위한 Discord.</li>
</ul>

<p>모든 경우에서 하나의 소스가 "주"(더 크게, 더 중요)이고 다른 하나가 "부"(더 조용하게, 보조적)입니다. 이상적인 비율은 각 조합마다 다르며 하루 종일 변합니다.</p>

<h2>macOS의 한계</h2>

<p>macOS에는 하나의 볼륨 슬라이더가 있습니다. 볼륨 키를 누르면 모든 것이 동일하게 변합니다. 편안한 팟캐스트 청취를 위해 볼륨을 설정하면 빗소리 앱도 그 레벨이 됩니다 — 너무 크거나(산만) 자체 앱에서 조정하지 않았거나(볼륨 컨트롤이 있는 경우).</p>

<p>일부 앱에는 내부 볼륨 슬라이더가 있지만(Spotify, VLC) 대부분은 없습니다. 있는 경우에도 두 개의 별도 볼륨 컨트롤을 조정하기 위해 앱 간에 전환하는 것은 번거롭고 느립니다.</p>

<h2>해결법: 하나의 패널에서 앱별 볼륨</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>은 모든 앱을 독립적인 볼륨 슬라이더와 함께 하나의 메뉴 바 패널에 넣습니다. 두 오디오 소스를 나란히, 각각 자체 레벨로. 다른 하나를 건드리지 않고 하나를 조정하세요.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial이 macOS에서 두 오디오 소스를 다른 볼륨 레벨로 표시" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>설정 예시:</p>

<p><strong>음악 + Zoom 통화:</strong></p>
<ul>
  <li>Zoom: 100% | Spotify: 20%</li>
</ul>

<p><strong>팟캐스트 + 빗소리:</strong></p>
<ul>
  <li>팟캐스트 앱: 70% | 빗소리 앱: 15%</li>
</ul>

<p><strong>강의 + YouTube 튜토리얼:</strong></p>
<ul>
  <li>Zoom (강의): 90% | Chrome (YouTube): 40%</li>
</ul>

<p>각 조합은 다른 밸런스입니다. 정기적으로 사용하는 것을 <strong>볼륨 프로필</strong>로 저장하고 한 번의 클릭으로 전환하세요. 자동 더킹은 음악+통화 시나리오를 자동으로 처리합니다 — 통화가 시작되면 음악이 구성된 레벨로 떨어지며 아무것도 건드리지 않아도 됩니다.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>
`,
  },
  "watch-movies-mac-late-night-volume": {
    slug: "watch-movies-mac-late-night-volume",
    title: "Mac에서 영화 볼 때 모두를 깨우지 않는 방법",
    description:
      "대사가 안 들리다가 폭발 장면에서 벽이 흔들립니다. Mac에서 야간 영화 시청 시 오디오를 길들이는 방법 — 한 마디도 놓치지 않으면서.",
    date: "2026-03-22",
    readTime: "5분 소요",
    content: `
<p>새벽 1시입니다. 침대에서 MacBook으로 영화를 보고 있습니다. 등장인물들이 속삭이고 있어서 볼륨을 올립니다. 그런데 자동차 추격 장면이 시작되고 갑자기 아파트 전체가 들을 수 있습니다. 볼륨 키를 향해 달려갑니다. 이 순환이 두 시간 동안 반복됩니다.</p>

<p>문제는 <strong>다이나믹 레인지</strong> — 영화의 가장 조용한 순간과 가장 큰 순간 사이의 간격입니다. 강력한 사운드 시스템이 있는 극장에서는 이 범위가 몰입감을 만듭니다. 자정의 MacBook에서는 "대사를 들을 수 없음"과 "이웃을 깨움" 사이의 끊임없는 싸움을 만듭니다.</p>

<h2>왜 영화는 음악이나 팟캐스트보다 더 큰가</h2>

<p>음악은 일반적으로 압축된 다이나믹 레인지로 마스터링됩니다 — 가장 조용한 부분과 가장 큰 부분의 차이가 비교적 작습니다(약 10-15 dB). 팟캐스트는 더 압축됩니다. 영화, 특히 액션 영화는 <strong>30-40 dB</strong>의 다이나믹 레인지를 가질 수 있습니다 — 조용한 부분은 속삭임처럼 조용하고 큰 부분은 극장 좌석을 흔들도록 설계되었습니다.</p>

<p>MacBook 볼륨을 대사를 들을 수 있게 설정하면 액션 장면은 음압 측면에서 100배 더 큽니다. 둘 다에 편안한 시스템 볼륨은 없습니다.</p>

<h2>해결법 1: 스트리밍 서비스의 나이트 모드 사용</h2>

<p>일부 스트리밍 서비스에는 이를 위한 다이나믹 레인지 압축 기능이 있습니다:</p>
<ul>
  <li><strong>Netflix:</strong> 재생 중 오디오 설정에서 "큰 소리 줄이기" 토글 찾기</li>
  <li><strong>Apple TV+:</strong> 시스템 설정 → 손쉬운 사용 → "큰 소리 줄이기"</li>
  <li><strong>Amazon Prime:</strong> 지원되는 타이틀에서 "대사 부스트"</li>
  <li><strong>Disney+:</strong> 현재 동등한 기능 없음</li>
</ul>

<p>이 기능들은 다이나믹 레인지를 압축하여 조용한 부분은 더 크게, 큰 부분은 더 조용하게 만듭니다. 결과는 낮은 볼륨에서도 작동하는 더 균일한 오디오입니다.</p>

<h2>해결법 2: 헤드폰 사용</h2>

<p>헤드폰은 "모두를 깨우는" 문제를 해결합니다 — 오디오가 프라이빗합니다. 하지만 다이나믹 레인지 문제는 해결하지 못합니다. 대사-폭발 순환은 여전히 발생하며 귀 안에서만 듣게 됩니다. 여기서 앱별 볼륨 제어가 도움이 됩니다: 스트리밍 앱의 볼륨을 헤드폰 청취에 정확하게 설정하세요.</p>

<h2>해결법 3: 스트리밍 앱을 특정 볼륨으로 설정</h2>

<p>야간 시청의 실제 문제는 스트리밍 앱, 알림 소리, 기타 오디오가 모두 같은 시스템 볼륨이라는 것입니다. 새벽 2시에 영화 대사와 같은 볼륨의 Slack 알림은 심장마비 수준의 놀람입니다.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>로 완벽한 야간 설정을 만들 수 있습니다:</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 야간 영화 설정 — 스트리밍 앱은 적당한 볼륨, 알림은 음소거" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>야간 영화 프로필</h3>
<ul>
  <li><strong>Netflix / Apple TV / Disney+ / 브라우저:</strong> 40-50% — 귀를 멍하게 하지 않는 편안한 대사 레벨</li>
  <li><strong>Slack:</strong> 음소거 — 갑작스러운 알림 없음</li>
  <li><strong>Mail:</strong> 음소거</li>
  <li><strong>iMessage:</strong> 음소거</li>
  <li><strong>시스템 사운드:</strong> 음소거</li>
</ul>

<p>이것을 "야간" 프로필로 저장하세요. 야간 영화를 시작할 때 한 번의 클릭으로 프로필을 적용하세요. 모든 알림 소스가 음소거되고 스트리밍 앱은 제어된 볼륨입니다. 끝나면 주간 프로필로 다시 전환하세요.</p>

<p>최대 효과를 위해 스트리밍 서비스의 "큰 소리 줄이기" 기능과 결합하세요: 서비스가 다이나믹 레인지를 압축하고, SoundDial이 Mac의 다른 모든 소리를 차단합니다.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>
`,
  },
  "mac-volume-resets-after-sleep": {
    slug: "mac-volume-resets-after-sleep",
    title: "Mac 볼륨이 잠자기 후 초기화되나요? 오디오 설정을 유지하는 방법",
    description:
      "Mac이 잠자기에서 깨어날 때마다 볼륨이 잘못됩니다 — 최대로 재설정되거나, 0으로 떨어지거나, 잘못된 출력으로 전환됩니다. 이유와 해결 방법을 알아보세요.",
    date: "2026-03-25",
    readTime: "5분 소요",
    content: `
<p>MacBook 덮개를 닫습니다. 나중에 엽니다. 볼륨이 달라져 있습니다. 40%였는데 최대일 수도 있습니다. 헤드폰에서 스피커로 전환되었을 수도 있습니다. 0이 되었을 수도 있습니다. 잠자기 전에는 괜찮았는데 — 이제 틀립니다.</p>

<p>잠자기 후 볼륨 재설정은 다양한 macOS 버전에서 다양한 형태로 나타나는 지속적인 macOS 버그입니다. 원인과 대처 방법은 다음과 같습니다.</p>

<h2>왜 발생하는가</h2>

<h3>1. 잠자기 중 오디오 출력 장치 변경</h3>
<p>잠자기 전에 Bluetooth 헤드폰이 연결되어 있었는데 Mac이 잠든 동안 분리되면(배터리 방전, 범위 밖으로 이동), macOS는 깨어날 때 내장 스피커로 전환합니다. macOS가 장치별로 볼륨을 기억하므로 볼륨이 스피커가 마지막으로 설정된 값으로 변경됩니다 — 헤드폰 볼륨과 매우 다를 수 있습니다.</p>

<h3>2. Core Audio 데몬 재시작</h3>
<p>macOS의 오디오 데몬(coreaudiod)이 잠자기/깨우기 주기 중에 때때로 재시작됩니다. 재시작될 때 마지막 설정 대신 기본 볼륨 레벨로 초기화될 수 있습니다. 이것은 Apple이 다양한 업데이트에서 부분적으로 수정했지만 완전히 제거하지 못한 시스템 버그입니다.</p>

<h3>3. HDMI/DisplayPort 재연결</h3>
<p>HDMI 또는 DisplayPort를 통해 외부 디스플레이를 사용하는 경우, 덮개를 닫고 여는 것이 디스플레이 연결 해제 및 재연결을 유발할 수 있습니다. 일부 디스플레이는 오디오 출력 장치이기도 하며, macOS가 이 과정에서 디스플레이 스피커로 전환하거나 전환 해제할 수 있어 볼륨이 변경됩니다.</p>

<h3>4. Bluetooth 재페어링</h3>
<p>잠자기 후 Bluetooth 장치가 재연결될 때 볼륨 협상이 이전과 다른 레벨을 초래할 수 있습니다. 이것은 특히 타사 Bluetooth 헤드폰에서 흔합니다(Apple이 최적화한 AirPods보다 덜함).</p>

<h2>해결 방법</h2>

<h3>잠자기 중 Bluetooth 연결 해제 방지</h3>
<p>시스템 설정 → Bluetooth → 고급(또는 장치에서 "i"를 클릭). 일부 설정이 잠자기 중 Bluetooth 활성 상태를 제어합니다. 연결을 활성 상태로 유지하면 볼륨을 재설정하는 연결 해제/재연결 주기를 방지합니다.</p>

<h3>AirPods 자동 전환 비활성화</h3>
<p>시스템 설정 → Bluetooth → AirPods 옆의 "i" 클릭 → "이 Mac에 연결" → "이 Mac에 마지막으로 연결된 경우"로 설정. 이렇게 하면 잠자기 중 AirPods가 다른 장치에서 자동 연결되는 것을 방지합니다.</p>

<h3>일관된 출력 장치 설정</h3>
<p>잠자기에서 깨어난 후 Option을 누른 채로 메뉴 바의 사운드 아이콘을 클릭하세요. 선호하는 출력 장치를 선택하세요. 이것을 일관되게 수행하면 macOS가 결국 선호도를 "유지"해야 합니다.</p>

<h3>NVRAM 재설정 (Intel Mac)</h3>
<p>볼륨 재설정이 만성적이라면 NVRAM을 재설정하세요: 종료 → Option+Command+P+R을 20초간 누른 채 전원 켜기. 이것은 저장된 오디오 설정을 지우고 지속적인 볼륨 문제를 해결할 수 있습니다.</p>

<h2>SoundDial로 오디오 밸런스 보호</h2>

<p>시스템 볼륨이 잠자기 후 재설정되더라도, <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>은 <em>앱별</em> 볼륨 밸런스를 보호합니다. <strong>볼륨 메모리</strong> 기능은 각 앱의 볼륨을 독립적으로 저장하고 깨우기, 재시작 또는 앱 재실행 후 복원합니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial이 Mac 잠자기 및 깨우기 주기 후 앱별 볼륨 레벨을 유지" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>따라서 macOS가 잠자기 후 시스템 볼륨을 80%로 재설정하더라도 앱별 밸런스는 유지됩니다:</p>
<ul>
  <li>Spotify는 시스템 볼륨의 30% 유지</li>
  <li>Zoom은 100% 유지</li>
  <li>Slack은 음소거 유지</li>
</ul>

<p>시스템 볼륨을 수정해야 할 수 있지만(한 번의 조정), 모든 앱을 다시 밸런스할 필요는 없습니다(여섯일곱 번의 조정이 될 것). 그리고 <strong>볼륨 프로필</strong>을 사용하면 전체 복구도 한 번의 클릭입니다.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>
`,
  },
  "mac-audio-music-production-daw": {
    slug: "mac-audio-music-production-daw",
    title: "Mac 음악 제작 오디오: DAW와 커뮤니케이션을 별도로 제어하기",
    description:
      "Logic Pro 또는 Ableton을 사용하면서 Discord 통화를 하고 있나요? 음성 채팅은 편안한 레벨로 유지하면서 DAW를 완전한 충실도로 듣는 방법을 알아보세요.",
    date: "2026-03-28",
    readTime: "5분 소요",
    content: `
<p>Logic Pro(또는 Ableton, FL Studio)에서 음악을 프로듀싱하고 있습니다. 동시에 Discord에서 협업자와 대화 중입니다. 문제: DAW 출력과 Discord가 같은 볼륨 레벨을 놓고 싸웁니다. 믹스를 명확하게 듣기 위해 Logic을 올리면 Discord가 귀에서 폭발합니다. Discord를 위해 줄이면 믹스가 제대로 평가하기에 너무 조용합니다.</p>

<p>이것은 Mac 음악 프로듀서에게 실제 문제입니다. 모니터링 볼륨이 믹싱 결정에 직접 영향을 미치기 때문입니다. Discord가 경쟁해서 DAW가 너무 조용하면 의도한 것보다 더 크게 믹스하게 됩니다. Discord가 디테일을 가리면 믹스의 문제를 놓치게 됩니다.</p>

<h2>왜 프로덕션에 이것이 중요한가</h2>

<p>음악 프로덕션에는 <strong>정확한 모니터링 레벨</strong>이 필요합니다. 신뢰할 수 있는 믹싱 결정을 내리려면 DAW를 일관되고 보정된 볼륨으로 들어야 합니다. 커뮤니케이션 앱, 알림, 기타 오디오 소스가 이를 방해합니다 — 하지만 원격 협업을 위해 종종 동시에 실행해야 합니다.</p>

<p>전문 스튜디오는 별도의 모니터 경로와 토크백 시스템으로 이를 해결합니다. 노트북에서는 소프트웨어가 필요합니다.</p>

<h2>DAW 내부 접근 방식</h2>

<p>DAW의 내부 모니터링 레벨을 사용하여 일관된 출력을 유지한 다음 Discord의 볼륨을 내부적으로 조정할 수 있습니다. 하지만:</p>
<ul>
  <li>Discord의 출력 볼륨 슬라이더는 부정확하고 0-100%로 제한됨</li>
  <li>여전히 시스템 소리와 알림이 예상치 못한 레벨로 방해하는 것을 방지할 수 없음</li>
  <li>Spotify나 YouTube에서 트랙을 참조해야 하는 경우 그것들도 시스템 볼륨</li>
</ul>

<h2>프로덕션을 위한 앱별 볼륨</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>로 모든 앱의 정확한 볼륨을 독립적으로 설정할 수 있습니다:</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial이 음악 프로덕션을 위해 macOS에서 DAW 출력을 Discord 및 레퍼런스 트랙과 분리" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>프로덕션 설정</h3>
<ul>
  <li><strong>Logic Pro / Ableton:</strong> 80-100% — 주 모니터링 레벨</li>
  <li><strong>Discord / 음성 채팅:</strong> 40-60% — 들리지만 믹스보다 명확히 부차적</li>
  <li><strong>Spotify / 레퍼런스 트랙:</strong> 80% — 정확한 A/B 비교를 위해 DAW 레벨과 일치</li>
  <li><strong>Slack / 알림:</strong> 음소거 — 프로덕션 중 방해 없음</li>
  <li><strong>Safari / Chrome:</strong> 50% — 귀를 망치지 않고 튜토리얼 시청</li>
</ul>

<h3>"프로덕션" 프로필로 저장</h3>
<p>이 구성을 저장하고 프로듀싱할 때 한 번의 클릭으로 적용하세요. 끝나고 일상 사용으로 전환할 때는 "일반" 프로필을 적용하세요. 여덟 개 앱을 다시 조정할 필요 없습니다.</p>

<h3>원격 세션용 자동 더킹</h3>
<p>협업자와 통화 중이라면 SoundDial의 자동 더킹이 마이크가 활성화될 때 커뮤니케이션이 아닌 앱의 볼륨을 자동으로 낮출 수 있습니다. 하지만 프로덕션에서는 자동 더킹을 <em>비활성화</em>하는 것이 좋을 수 있습니다 — 말하고 있든 아니든 DAW를 일관된 레벨로 유지해야 합니다. 토글은 설정에서 한 번의 클릭입니다.</p>

<h2>레이턴시에 관한 참고</h2>

<p>SoundDial은 볼륨 제어를 위해 Apple의 Core Audio Tap API를 사용합니다. 처리는 무시할 수 있는 레이턴시를 추가합니다 — 모니터링 목적으로는 감지할 수 없습니다. 다이렉트 모니터링이 활성화된 상태에서 DAW를 통해 녹음 및 모니터링하는 경우, SoundDial은 DAW의 오디오 경로를 방해하지 않습니다. 스피커/헤드폰에 도달하는 출력 레벨만 조정합니다.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>
`,
  },
  "apple-music-volume-too-low-mac": {
    slug: "apple-music-volume-too-low-mac",
    title: "Mac에서 Apple Music 볼륨이 너무 작은가요? 해결 및 증폭 방법",
    description:
      "Mac에서 Apple Music이 최대 볼륨인데도 너무 조용한가요? Sound Check, EQ 설정을 확인하고, Apple Music을 100% 이상으로 증폭하는 방법을 알아보세요.",
    date: "2026-03-30",
    readTime: "5분 소요",
    content: `
<p>Apple Music이 최대 볼륨입니다. Mac이 최대 볼륨입니다. 크게 들려야 할 곡이 거의 들리지 않습니다. 한편 Spotify로 전환하면 — 같은 곡, 같은 볼륨 — 눈에 띄게 더 큽니다. 무슨 일인가요?</p>

<p>Apple Music에는 재생 볼륨을 줄일 수 있는 여러 설정이 있으며, 이것들은 명확하지 않습니다. 하나씩 살펴보겠습니다.</p>

<h2>1. Sound Check 확인</h2>

<p>Apple Music에는 모든 트랙의 볼륨을 정규화하여 거의 같은 인지 음량으로 재생하는 <strong>Sound Check</strong>라는 기능이 있습니다. 이것은 곡 사이의 갑작스러운 볼륨 점프를 방지하지만, 더 큰 트랙의 볼륨을 <em>줄여서</em> — 전체적으로 모든 것을 더 조용하게 만듭니다.</p>

<p>확인하려면: Music 앱 → 설정(⌘,) → 재생 → <strong>Sound Check</strong>를 여세요.</p>

<p>Sound Check가 활성화되어 있으면 비활성화해 보세요. 더 조용한 트랙에 맞추기 위해 줄어들었던 곡들이 원래 마스터링된 레벨로 재생됩니다 — 이것은 종종 상당히 더 큽니다.</p>

<h2>2. EQ 설정 확인</h2>

<p>Apple Music에는 내장 이퀄라이저가 있습니다. 일부 EQ 프리셋은 특정 주파수를 부스트할 때 클리핑을 방지하기 위해 전체 볼륨을 줄입니다.</p>

<p>확인: Music 앱 → 설정 → 재생 → <strong>EQ</strong>. EQ 프리셋이 선택되어 있으면(특히 "Spoken Word," "Late Night," 또는 "Small Speakers") "끔"으로 설정하고 볼륨이 개선되는지 확인하세요.</p>

<p>특히 "Late Night" EQ는 다이나믹 레인지를 압축합니다 — 조용한 부분은 더 크게, 큰 부분은 더 조용하게. 이것은 모든 것이 "평평"하고 볼륨이 낮게 느껴지게 할 수 있습니다.</p>

<h2>3. Lossless Audio 설정 확인</h2>

<p>Apple Music Lossless가 활성화되어 있으면(설정 → 오디오 품질), 고품질 스트림이 일부 트랙에서 표준 AAC 스트림보다 실제로 인지 볼륨이 낮을 수 있습니다. 이것은 무손실이 Apple이 AAC 버전에 적용하는 동일한 마스터링 조정을 가지고 있지 않기 때문입니다.</p>

<p>볼륨 차이가 눈에 띄는지 확인하기 위해 일시적으로 AAC 품질로 전환해 보세요.</p>

<h2>4. 헤드폰 안전</h2>

<p>시스템 설정 → 사운드 → 헤드폰 안전. "큰 오디오 줄이기"가 켜져 있으면 macOS가 헤드폰 볼륨을 전체적으로 제한하고 있습니다 — 다른 모든 것과 함께 Apple Music에 영향을 줍니다.</p>

<h2>5. Apple Music을 100% 이상으로 증폭</h2>

<p>모든 것을 확인했는데 Apple Music이 여전히 너무 조용하다면 — Sound Check가 공격적이든, 조용한 앨범이든, MacBook 스피커가 충분히 크지 않든 — 앱별 볼륨 부스트가 해결합니다.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>로 Apple Music을 <strong>200%</strong>까지 증폭할 수 있습니다. 오디오 신호가 스피커나 헤드폰에 도달하기 전에 시스템 레벨에서 증폭됩니다. Apple Music만 더 커집니다 — Zoom, Slack, 브라우저는 현재 레벨을 유지합니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial이 macOS에서 Apple Music 볼륨을 100% 이상으로 증폭" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>이것은 반대 문제에도 유용합니다: Apple Music이 Zoom 통화에 비해 너무 크면 SoundDial에서 Apple Music을 25%로 낮추고 Zoom을 100%로 유지하세요. 앱별 제어는 한 앱의 볼륨을 다른 앱 때문에 타협할 필요가 없다는 것을 의미합니다.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>
`,
  },
  "free-volume-mixer-mac": {
    slug: "free-volume-mixer-mac",
    title: "Mac용 무료 볼륨 믹서: 실제로 얻을 수 있는 것 (그리고 빠진 것)",
    description:
      "Mac용 무료 앱별 볼륨 믹서를 찾고 있나요? 무료 옵션이 제공하는 것, 빠진 것, 유료가 가치 있는 경우에 대한 솔직한 분석입니다.",
    date: "2026-04-03",
    readTime: "6분 소요",
    content: `
<p>"Mac용 무료 볼륨 믹서"를 검색하면 하나의 주요 결과를 찾을 수 있습니다: <strong>Background Music</strong>. macOS용 유일한 주목할 만한 무료 오픈 소스 앱별 볼륨 제어 앱입니다. 실제로 얻는 것과 포기하는 것을 살펴보겠습니다.</p>

<h2>Background Music: 무료 옵션</h2>

<p>Background Music은 GitHub에 호스팅된 무료 오픈 소스 앱입니다. 다음을 제공합니다:</p>

<ul>
  <li><strong>앱별 볼륨 슬라이더</strong> — 실행 중인 각 앱에 대한 기본 볼륨 제어</li>
  <li><strong>자동 음악 일시 정지</strong> — 다른 앱이 오디오를 재생하면 음악 플레이어를 일시 정지, 중지되면 재개</li>
  <li><strong>기본 출력 장치 설정</strong> — 앱이 기본으로 사용하는 장치 재정의</li>
</ul>

<h3>Background Music에 없는 것</h3>
<ul>
  <li><strong>100% 이상 볼륨 부스트 없음</strong> — 슬라이더가 0%에서 100%만. 조용한 앱을 증폭할 수 없음.</li>
  <li><strong>볼륨 프로필 없음</strong> — 구성을 저장하고 전환할 수 없음</li>
  <li><strong>자동 더킹 없음</strong> — 자동 일시 정지는 자동 더킹과 다름. 일시 정지는 음악을 완전히 멈춤; 더킹은 편안한 배경 레벨로 낮춤. 많은 사람들은 통화 중 완전한 침묵보다 조용한 배경 음악을 선호함.</li>
  <li><strong>볼륨 메모리 없음</strong> — 재시작 간 앱별 볼륨을 기억하지 않음</li>
  <li><strong>키보드 단축키 없음</strong> — 믹서 토글 또는 모든 앱 음소거를 위한 핫키 없음</li>
  <li><strong>출력 장치 전환 없음</strong> — 같은 패널에서 스피커/헤드폰을 전환할 수 없음</li>
</ul>

<h3>안정성 문제</h3>
<p>Background Music의 가장 큰 문제는 기능이 아니라 안정성입니다. <strong>가상 오디오 장치 드라이버</strong>를 설치하여 작동하는데, 이 드라이버는 macOS 업데이트와 함께 고장납니다. 거의 모든 주요 macOS 릴리스(Ventura, Sonoma, Sequoia, Tahoe) 후에 사용자들이 보고합니다:</p>
<ul>
  <li>가상 장치 설치 실패</li>
  <li>오디오 끊김 및 글리치</li>
  <li>앱이 감지되지 않음</li>
  <li>오디오 출력 전혀 없음</li>
  <li>실행 시 앱 크래시</li>
</ul>

<p>자원봉사자가 유지 관리하는 오픈 소스 프로젝트이므로 수정이 항상 적시에 이루어지지는 않습니다. macOS 업데이트 후 몇 주 동안 앱별 볼륨 없이 지낼 수 있습니다.</p>

<h2>기타 "무료" 옵션</h2>

<h3>eqMac (무료 등급)</h3>
<p>eqMac의 무료 등급은 시스템 전체 이퀄라이저를 제공하지만 앱별 볼륨 제어는 아닙니다. 앱별 기능에는 eqMac Pro(구독)가 필요합니다. 무료 버전은 볼륨 믹싱이 아닌 주로 EQ가 필요한 경우 유용합니다.</p>

<h3>macOS 내장</h3>
<p>macOS에는 내장 볼륨 믹서가 없습니다. 가장 가까운 것은 시스템 설정 → 사운드의 경고 볼륨 슬라이더인데, 이것은 시스템 소리만 영향을 주고 앱 오디오에는 영향을 주지 않습니다.</p>

<h2>무료로 충분한 경우</h2>

<p>Background Music은 다음과 같은 경우 괜찮을 수 있습니다:</p>
<ul>
  <li>기본 앱별 볼륨(0-100%)만 필요</li>
  <li>프로필, 자동 더킹 또는 볼륨 부스트가 필요 없음</li>
  <li>macOS 업데이트가 고장낼 때 수정하는 것이 편안함</li>
  <li>오디오 체인에 가상 오디오 장치가 있어도 괜찮음</li>
</ul>

<h2>유료가 가치 있는 경우</h2>

<p>유료 볼륨 믹서는 다음이 필요한 경우 가치가 있습니다:</p>
<ul>
  <li><strong>안정성</strong> — 자원봉사자 수정을 기다리지 않고 macOS 업데이트 후에도 작동</li>
  <li><strong>200%까지 볼륨 부스트</strong> — 조용한 앱을 내장 최대값 이상으로 증폭</li>
  <li><strong>프로필</strong> — 구성을 저장하고 회의/집중/게이밍 간 한 번의 클릭으로 전환</li>
  <li><strong>자동 더킹</strong> — 통화 중 자동 볼륨 감소, 단순 자동 일시 정지가 아님</li>
  <li><strong>시스템 드라이버 없음</strong> — Apple의 네이티브 API로 작동, 고장날 수 있는 가상 오디오 장치 없음</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>은 €14.99입니다 — 일회성, 구독이 아닙니다. 참고로 Spotify 구독 두 달도 안 되는 가격이며, 매일 사용할 도구입니다. SoundSource($39)의 절반 미만 가격이며, SoundSource에 없는 기능(프로필, 자동 더킹)을 포함합니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 프로필, 자동 더킹, 200% 부스트를 갖춘 Mac용 안정적인 앱별 볼륨 믹서" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>에서 제공 — Apple 검토, 샌드박스, 시스템 드라이버 없음. €14.99 일회성, 구독 없음, macOS 14.2+.</p>
`,
  },
  "balance-music-voice-chat-volume-mac": {
    slug: "balance-music-voice-chat-volume-mac",
    title: "Mac에서 음악과 음성 채팅 볼륨의 균형을 맞추는 방법",
    description:
      "Discord에서 음악이 너무 큽니다. 또는 Spotify에서 통화가 너무 조용합니다. macOS에서는 균형을 맞출 수 없습니다 — 완벽한 비율을 설정하는 방법을 알아보세요.",
    date: "2026-04-05",
    readTime: "4분 소요",
    content: `
<p>Discord(또는 Zoom, FaceTime)에서 친구들과 대화하면서 음악을 듣고 싶습니다. 음악은 존재감이 있되 압도적이지 않아야 합니다. 음성 채팅은 명확하고 지배적이어야 합니다. 간단한 요청입니다. macOS는 이를 불가능하게 만듭니다.</p>

<p>모든 것을 제어하는 하나의 시스템 볼륨으로 선택의 여지가 없습니다: 통화를 위해 올리면 음악이 너무 큽니다. 음악을 위해 줄이면 친구들 말이 안 들립니다. 이 두 가지를 다른 레벨로 설정하는 내장 방법이 없습니다.</p>

<h2>앱 내 볼륨 해결 방법</h2>

<p>Spotify와 Discord 모두 내부 볼륨 슬라이더가 있습니다. 이론적으로 Spotify의 슬라이더를 30%로 낮추고 Discord의 출력을 100%로 유지할 수 있습니다. 이것은 30/100 비율을 만듭니다.</p>

<p>실제로는:</p>
<ul>
  <li>각 앱으로 전환하여 슬라이더를 조정해야 함</li>
  <li>시스템 볼륨을 조정하면 비율이 변함(둘 다 비례적으로 스케일링)</li>
  <li>모든 앱에 내부 볼륨 슬라이더가 있는 것은 아님</li>
  <li>부정확함 — 작은 Spotify 슬라이더, 백분율 표시 없음</li>
  <li>Spotify를 닫고 다시 열면 슬라이더가 재설정될 수 있음</li>
</ul>

<h2>진짜 해결법: 독립적인 앱별 볼륨</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>은 Spotify와 Discord를 독립적인 볼륨 슬라이더와 함께 같은 패널에 넣습니다. 원하는 비율을 설정하고 그대로 두세요:</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial이 macOS에서 Spotify와 Discord를 다른 볼륨 레벨로 밸런싱" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>음악 + 음성 채팅의 황금 비율</h3>
<p>대부분의 사용 방식에 기반하여:</p>
<ul>
  <li><strong>음성 채팅 85-100%</strong> — 항상 명확하게 들림, 믹스에서 지배적</li>
  <li><strong>음악 20-35%</strong> — 존재하지만 목소리와 경쟁하지 않음</li>
</ul>

<p>정확한 비율은 음악, 헤드폰, 개인 취향에 따라 다릅니다. 중요한 것은 완벽한 밸런스를 한 번 찾고 유지할 수 있다는 것입니다 — 끊임없이 조정하는 대신.</p>

<h3>프로필로 저장</h3>
<p>음악/음성 채팅 밸런스를 프로필로 저장하세요. "게이밍" 프로필: Discord 100%, 게임 50%, Spotify 20%. "릴랙스" 프로필: Discord 70%, Spotify 60%. 한 번의 클릭으로 전환하세요.</p>

<h3>통화 시 자동 더킹</h3>
<p>음악을 듣고 있는데 전화가 오면 SoundDial의 자동 더킹이 자동으로 음악을 구성된 레벨로 낮춥니다. 통화가 끝나면 음악이 다시 올라갑니다. 아무것도 건드리지 않아도 됩니다.</p>

<p>오디오 밸런스 문제는 음악과 통화를 동시에 실행하는 모든 Mac 사용자가 직면하는 것입니다. 일회성 €14.99로 해결됩니다.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>
`,
  },
  "mac-volume-control-complete-guide": {
    slug: "mac-volume-control-complete-guide",
    title: "Mac 볼륨 제어: 완전 가이드 (2026)",
    description:
      "macOS에서 오디오를 제어하는 데 필요한 모든 것 — 기본 키보드 단축키부터 앱별 볼륨, 출력 전환, 자동화까지.",
    date: "2026-06-12",
    readTime: "12분 소요",
    content: `
<p>macOS는 볼륨 슬라이더와 음소거 버튼을 제공합니다. 이것이 Apple의 내장 오디오 제어의 전부입니다. 하지만 Mac에는 실제로 표면에 드러나는 것보다 훨씬 더 많은 오디오 기능이 있습니다 — 숨겨진 키보드 단축키, 앱별 볼륨 도구, 출력 장치 관리, 대부분의 사용자가 발견하지 못하는 자동화 기능.</p>

<p>이것은 Mac에서 오디오를 제어하는 완전한 가이드입니다. 기초부터 파워 유저 기능까지 모든 것을 한 곳에.</p>

<h2>파트 1: 내장 볼륨 컨트롤</h2>

<h3>볼륨 키</h3>
<p>볼륨 올리기(F12), 볼륨 내리기(F11), 음소거(F10) 키는 시스템 볼륨을 16단계로 조정합니다. 각 단계는 전체 범위의 약 6.25%입니다. 현재 볼륨은 화면 오버레이로 표시됩니다.</p>

<h3>세밀한 볼륨: Option + Shift</h3>
<p><strong>Option + Shift</strong>를 누른 채로 볼륨 올리기/내리기를 누르세요. 각 누름은 일반 단계의 4분의 1만큼 조정하여 16단계 대신 <strong>64단계 볼륨</strong>을 제공합니다. 강력한 스피커나 헤드폰에서 정확한 볼륨을 찾는 데 필수적입니다.</p>

<h3>무음 볼륨 조정: Shift</h3>
<p><strong>Shift</strong>를 누른 채 볼륨 올리기/내리기를 누르세요. 볼륨이 오디오 피드백 "팝" 소리 없이 변합니다. 통화나 프레젠테이션 중에 볼륨을 조정할 때 사용하세요.</p>

<h3>메뉴 바 볼륨 슬라이더</h3>
<p>사운드 아이콘이 메뉴 바에 있으면(시스템 설정 → 제어 센터 → 사운드 → 메뉴 바에 항상 표시에서 활성화) 클릭하면 볼륨 슬라이더가 표시됩니다. 이것은 키보드 키처럼 단계적이지 않은 연속 슬라이더이므로 정확한 레벨을 설정할 수 있습니다.</p>

<h3>제어 센터</h3>
<p>메뉴 바의 제어 센터 아이콘(두 개의 토글 아이콘)을 클릭 → 사운드 섹션을 클릭하면 볼륨 슬라이더와 출력 장치 선택에 빠르게 접근할 수 있습니다.</p>

<h2>파트 2: 출력 장치 관리</h2>

<h3>출력 장치 전환</h3>
<p>가장 빠른 내장 방법: <strong>Option</strong>을 누른 채 메뉴 바의 사운드 아이콘을 클릭하세요. 사용 가능한 모든 출력 및 입력 장치 목록이 표시됩니다. 하나를 클릭하면 즉시 전환됩니다.</p>

<p>대안으로: 시스템 설정 → 사운드 → 출력. 목록에서 선호하는 장치를 선택하세요.</p>

<h3>Bluetooth 장치 관리</h3>
<p>macOS는 각 출력 장치에 대해 볼륨 레벨을 별도로 기억합니다. 스피커(70%)에서 AirPods(40%)로 전환하면 볼륨이 마지막으로 해당 장치를 사용했을 때의 값으로 조정됩니다. 예상하지 못하면 볼륨이 "스스로 변하는" 것처럼 느껴질 수 있습니다.</p>

<h3>통합 및 다중 출력 장치</h3>
<p>고급 설정을 위해 Audio MIDI 설정(응용 프로그램 → 유틸리티)을 열어 통합 장치(여러 입력 결합) 또는 다중 출력 장치(여러 출력에 동시에 오디오 전송)를 만들 수 있습니다. 이것들은 주로 전문 오디오 설정에 유용하며 일상적 사용에는 해당되지 않습니다.</p>

<h2>파트 3: 경고 및 알림 볼륨</h2>

<h3>시스템 경고 볼륨</h3>
<p>macOS에는 별도의 경고 볼륨 슬라이더가 있습니다: 시스템 설정 → 사운드 → 경고 볼륨. 이것은 시스템 소리(Funk, Tink, Bottle 등)의 볼륨을 주 볼륨과 독립적으로 제어합니다. 그러나 macOS 시스템 경고만 영향을 줍니다 — Slack, Discord, Teams 같은 타사 앱의 알림 소리에는 영향을 주지 않습니다.</p>

<h3>알림 소리 관리</h3>
<p>시스템 설정 → 알림으로 이동하세요. 각 앱에 대해 "알림 소리 재생"을 켜거나 끌 수 있습니다. 이것은 이진적입니다 — 앱의 알림을 더 조용하게 만들 수 없고 완전히 켜거나 끌 수만 있습니다.</p>

<h3>집중 모드</h3>
<p>집중 모드(시스템 설정 → 집중)는 선택한 앱의 알림을 억제합니다. 알림 소리를 침묵시킬 수 있지만 미디어 볼륨에는 영향을 주지 않습니다. 방해 금지에서도 음악은 최대 볼륨으로 계속 재생됩니다.</p>

<h2>파트 4: 헤드폰 전용 컨트롤</h2>

<h3>헤드폰 안전</h3>
<p>시스템 설정 → 사운드 → 헤드폰 안전. "큰 오디오 줄이기"는 누적 노출에 기반하여 헤드폰 볼륨을 제한합니다. 비활성화하거나 임계값을 조정할 수 있습니다. 헤드폰 출력에만 영향을 주고 스피커에는 영향을 주지 않습니다.</p>

<h3>공간 오디오</h3>
<p>지원되는 헤드폰(AirPods Pro, AirPods Max, 일부 Beats)의 경우 macOS는 머리 추적 기능이 있는 공간 오디오를 지원합니다. 제어 센터 → 사운드 → 공간 오디오에서 활성화하세요. 이것은 소리의 인지 위치에 영향을 주지만 볼륨에는 영향을 주지 않습니다.</p>

<h3>오디오 밸런스</h3>
<p>시스템 설정 → 손쉬운 사용 → 오디오 → 밸런스. 스테레오 밸런스를 조정하는 좌우 슬라이더입니다. 한쪽이 다른 쪽보다 조용하게 들리면 중앙에 있는지 확인하세요.</p>

<h2>파트 5: macOS가 할 수 없는 것 (그리고 해결 방법)</h2>

<h3>앱별 볼륨 제어</h3>
<p>macOS에는 모든 앱에 대해 하나의 볼륨 슬라이더가 있습니다. Spotify를 30%, Zoom을 100%로 설정하는 내장 방법이 없습니다. 이것은 macOS에서 가장 많이 요청된 오디오 기능이며 Apple은 이를 추가한 적이 없습니다.</p>

<h3>100% 이상 볼륨 부스트</h3>
<p>macOS의 볼륨은 100%에서 최대입니다. 최대 볼륨에서도 콘텐츠가 너무 조용하면 더 증폭하는 내장 방법이 없습니다.</p>

<h3>볼륨 프로필</h3>
<p>볼륨 구성(Spotify 30%, Zoom 100%, Slack 음소거)을 저장하고 프리셋 간에 전환하는 방법이 없습니다.</p>

<h3>자동 더킹</h3>
<p>macOS는 통화에 참여할 때 배경 오디오를 자동으로 낮추지 않습니다.</p>

<h3>앱별 볼륨 메모리</h3>
<p>macOS는 앱별 볼륨이 없으므로 앱별 볼륨 레벨을 기억하지 않습니다.</p>

<p>이 다섯 가지 모두 <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>에서 사용할 수 있습니다 — Apple이 만들지 않은 볼륨 믹서를 추가하는 네이티브 macOS 메뉴 바 앱입니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — macOS용 앱별 볼륨 제어, 프로필, 자동 더킹, 200% 부스트" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>파트 6: SoundDial로 앱별 볼륨</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>은 위에 나열된 모든 간격을 채웁니다:</p>

<ul>
  <li><strong>앱별 볼륨:</strong> 모든 앱이 0%에서 200%까지 자체 슬라이더를 가짐</li>
  <li><strong>앱별 음소거:</strong> 한 번의 클릭으로 모든 앱 음소거</li>
  <li><strong>볼륨 부스트:</strong> 조용한 앱을 100% 이상으로 증폭</li>
  <li><strong>볼륨 프로필:</strong> 구성을 저장하고 한 번의 클릭으로 전환</li>
  <li><strong>자동 더킹:</strong> 통화 중 배경 오디오가 낮아지고 통화 후 복원</li>
  <li><strong>볼륨 메모리:</strong> 재시작 간 각 앱의 볼륨 기억</li>
  <li><strong>출력 장치 전환:</strong> 같은 패널에서 스피커/헤드폰 변경</li>
  <li><strong>키보드 단축키:</strong> ⌃⌥S로 믹서 토글, ⌃⌥M으로 모두 음소거</li>
</ul>

<p>Apple의 최신 Core Audio Tap API를 사용합니다 — 시스템 드라이버 없음, 가상 오디오 장치 없음, 커널 확장 없음. <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>에서 €14.99(일회성 구매, 구독 없음)으로 제공, Apple 검토 및 샌드박스. macOS 14.2+.</p>
`,
  },
  "vlc-volume-too-low-mac": {
    slug: "vlc-volume-too-low-mac",
    title: "Mac에서 VLC 볼륨이 너무 작은가요? 200% 이상으로 증폭하는 방법",
    description:
      "VLC가 최대 볼륨인데 비디오가 여전히 너무 조용한가요? VLC에는 내장 200% 부스트가 있으며 — 앱별 볼륨 믹서로 더 높일 수도 있습니다.",
    date: "2026-04-08",
    readTime: "4분 소요",
    content: `
<p>VLC에서 비디오를 보고 있습니다. 대사가 조용합니다. VLC의 볼륨을 최대로 올립니다. Mac의 볼륨을 최대로 올립니다. 여전히 제대로 들리지 않습니다. 비디오가 너무 조용하게 녹음된 것입니다.</p>

<p>좋은 소식: VLC에는 실제로 대부분의 사람들이 모르는 내장 해결책이 있습니다. 더 좋은 소식: 시스템 레벨 부스트와 결합하면 더 많은 볼륨을 얻을 수 있습니다.</p>

<h2>VLC의 내장 볼륨 부스트 (최대 200%)</h2>

<p>VLC는 자체적으로 100% 이상으로 갈 수 있습니다. VLC의 플레이어 바 볼륨 슬라이더는 100%에서 최대이지만 더 올릴 수 있습니다:</p>

<h3>방법 1: 스크롤 휠</h3>
<p>VLC의 볼륨 슬라이더 위에서 마우스를 올리고 위로 스크롤하세요. 슬라이더가 보이는 100% 표시를 넘어 200%까지 갑니다. 스크롤하면서 백분율이 표시됩니다.</p>

<h3>방법 2: 키보드 단축키</h3>
<p><strong>Command + 위 화살표</strong>(⌘↑)를 반복적으로 눌러 100% 이상으로 볼륨을 높이세요. 각 누름은 한 단계를 추가합니다. <strong>Command + 아래 화살표</strong>(⌘↓)로 줄이세요.</p>

<h3>방법 3: 오디오 메뉴</h3>
<p>VLC → 오디오 → 볼륨 높이기로 이동하세요. 볼륨이 충분히 높아질 때까지 반복하세요. 현재 레벨은 플레이어 오른쪽 하단에 표시됩니다.</p>

<p>VLC의 200% 부스트는 VLC 디코더 내에서 오디오 신호를 증폭하여 작동합니다. 극단적인 레벨에서는 왜곡이 발생할 수 있지만 정말 조용한 비디오 파일에는 매우 효과적입니다.</p>

<h2>VLC의 부스트를 넘어: 시스템 레벨 증폭</h2>

<p>VLC 200%에서도 여전히 부족하거나 — VLC의 내부 오디오 설정을 변경하지 않고 VLC를 증폭하려면 — 시스템 레벨 앱별 볼륨 믹서가 다른 계층의 증폭을 추가합니다.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>은 시스템 레벨에서 VLC에 0%에서 200%까지의 자체 볼륨 슬라이더를 제공합니다. 이것은 VLC의 내부 부스트와 결합됩니다:</p>

<ul>
  <li>VLC 내부: 200% × SoundDial: 200% = 유효 400% 증폭</li>
  <li>VLC 내부: 150% × SoundDial: 150% = 유효 225% 증폭</li>
</ul>

<p>이것은 극단적인 증폭이며 일부 콘텐츠에서 왜곡이 발생하겠지만, 극히 조용한 소스 자료에는 필요할 수 있습니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial이 macOS에서 조용한 비디오 파일을 위해 시스템 레벨에서 VLC 볼륨 증폭" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>더 중요한 것은 SoundDial이 VLC를 <strong>독립적으로</strong> 부스트한다는 것입니다. 음악 플레이어, 브라우저, 커뮤니케이션 앱은 정상 레벨을 유지하면서 VLC만 더 커집니다. SoundDial에서 VLC를 180%로 증폭해도 Spotify는 변하지 않습니다. VLC의 내장 부스트로는 이것이 불가능합니다 — VLC의 부스트는 VLC만 영향을 주지만 macOS의 단일 시스템 볼륨이 여전히 다른 모든 것을 묶어둡니다.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>
`,
  },
  "disable-audio-ducking-mac": {
    slug: "disable-audio-ducking-mac",
    title: "Mac에서 오디오 더킹을 비활성화하는 방법 (또는 직접 제어하기)",
    description:
      "macOS 또는 앱이 통화 중 묻지 않고 음악을 계속 낮춥니다. 원치 않는 오디오 더킹을 중지하거나 — 실제로 제어할 수 있는 더킹으로 대체하는 방법을 알아보세요.",
    date: "2026-04-10",
    readTime: "5분 소요",
    content: `
<p>Zoom 통화에 참여합니다. 음악이 거의 아무것도 안 들리게 줄어듭니다. 볼륨 컨트롤을 건드리지 않았는데 — 무언가가 대신 해준 것입니다. 이것이 <strong>오디오 더킹</strong>입니다: 통화나 중요한 오디오 소스가 활성화될 때 배경 오디오를 자동으로 낮추는 것.</p>

<p>어떤 사람들은 좋아합니다. 다른 사람들은 싫어합니다 — 특히 더킹이 너무 공격적이거나(음악이 편안한 배경 레벨이 아닌 0으로 떨어지는) 예상치 않게 트리거될 때.</p>

<p>Mac에서 원치 않는 더킹을 비활성화하는 방법과 원하는 방식으로 작동하는 더킹으로 대체하는 방법을 알아보세요.</p>

<h2>Mac에서 오디오 더킹의 출처</h2>

<p>macOS 자체에는 내장 오디오 더킹 기능이 <strong>없습니다</strong>. 통화 중 음악이 조용해진다면 다음 중 하나가 원인입니다:</p>

<h3>1. Zoom의 오디오 처리</h3>
<p>Zoom은 활성화될 때 시스템 오디오를 줄일 수 있습니다. Zoom → 설정 → 오디오를 확인하고 "마이크 볼륨 자동 조정"을 비활성화해 보세요. 또한 소음 억제를 "높음"에서 "낮음"으로 줄여보세요.</p>

<h3>2. Bluetooth 코덱 전환</h3>
<p>앱이 Bluetooth 헤드폰의 마이크를 활성화하면 macOS가 AAC에서 SCO 코덱으로 전환합니다. 이것은 실제로 "더킹"이 아닙니다 — 모든 것이 더 조용하고 낮은 품질로 들리게 하는 코덱 변경입니다. 별도의 마이크를 사용하여 해결하세요.</p>

<h3>3. 타사 앱이 하는 것</h3>
<p>일부 오디오 앱(예: Background Music)에는 자동 일시 정지 또는 자동 더킹 기능이 있습니다. 일부 미디어 앱은 다른 오디오 소스를 감지하면 자체 볼륨을 줄입니다. 설치된 오디오 유틸리티 앱을 확인하세요.</p>

<h3>4. 커뮤니케이션 앱이 오디오를 조정</h3>
<p>Discord, Teams 및 기타 커뮤니케이션 앱은 다른 앱의 인지 볼륨에 영향을 줄 수 있는 자체 오디오 처리를 가지고 있습니다. 각 앱의 오디오 설정에서 "자동 조정" 옵션을 확인하고 비활성화하세요.</p>

<h2>원치 않는 더킹을 중지하는 방법</h2>

<ol>
  <li><strong>Zoom/Teams/Discord 오디오 설정 확인</strong> — 자동 볼륨/마이크 조정 비활성화</li>
  <li><strong>통화에 별도 마이크 사용</strong> — Bluetooth 코덱 전환 방지</li>
  <li><strong>오디오 유틸리티 제거</strong> — Background Music, Soundflower, 또는 오디오를 가로챌 수 있는 모든 앱</li>
  <li><strong>macOS 손쉬운 사용 확인</strong> — 시스템 설정 → 손쉬운 사용 → 오디오에서 예상치 못한 설정 확인</li>
</ol>

<h2>나쁜 더킹을 좋은 더킹으로 대체</h2>

<p>오디오 더킹의 아이디어는 실제로 훌륭합니다 — 통화 중 배경 오디오를 자동으로 낮추면 명확하게 들을 수 있습니다. 문제는 너무 공격적이거나(음악이 0으로 감), 구성할 수 없거나(얼마나 낮출지 선택 불가), 잘못된 것에 의해 트리거될 때입니다.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>에는 제어할 수 있는 내장 자동 더킹 기능이 있습니다:</p>

<ul>
  <li><strong>구성 가능한 더킹 레벨:</strong> 통화 중 배경 오디오를 얼마나 낮출지 정확하게 선택 — 10%(거의 무음)에서 80%(거의 줄지 않음). 기본값은 30%로, 음악이 들리지만 방해하지 않는 수준.</li>
  <li><strong>스마트 감지:</strong> 마이크 사용을 모니터링하여 통화를 감지 — macOS의 주황색 점과 같은 표시기. Zoom, Teams, FaceTime, Discord, Slack, Google Meet, Webex, Skype와 작동.</li>
  <li><strong>완벽한 복원:</strong> 통화가 끝나면 모든 앱이 정확히 이전 볼륨으로 돌아감. 재조정 필요 없음.</li>
  <li><strong>쉬운 토글:</strong> SoundDial 설정에서 자동 더킹을 켜거나 끌 수 있음. 원하지 않으면 비활성화. 다시 원하면 활성화.</li>
</ul>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 구성 가능한 자동 더킹 — 통화 중 배경 오디오가 얼마나 낮아지는지 제어" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>차이점: 어떤 앱이 모든 통화 중 음악을 0으로 보내야 한다고 결정하는 대신, 당신이 25%로 가야 한다고 결정합니다. 제어를 잃는 대신 얻습니다. 세 개의 다른 앱에서 숨겨진 기능을 비활성화하려는 대신 한 곳에서 하나의 토글이 있습니다.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>
`,
  },
  "bluetooth-headphones-too-quiet-mac": {
    slug: "bluetooth-headphones-too-quiet-mac",
    title: "Mac에서 Bluetooth 헤드폰이 너무 조용한가요? 효과적인 모든 해결 방법",
    description:
      "Bluetooth 헤드폰이 전화에서는 잘 작동하는데 Mac에서는 조용합니다. 코덱 문제에서 macOS 볼륨 제한까지 모든 원인과 해결 방법을 알아보세요.",
    date: "2026-04-12",
    readTime: "6분 소요",
    content: `
<p>Bluetooth 헤드폰이 전화에서는 충분히 큽니다. Mac에 연결하면 — 모든 것이 더 조용합니다. 음악이 뭉개져 들립니다. 통화가 듣기 어렵습니다. 볼륨을 최대로 해도 충분하지 않습니다. 왜 그런 걸까요?</p>

<p>Mac의 Bluetooth 오디오에는 전화에는 존재하지 않는 여러 볼륨 감소 요인이 있습니다. 각각의 원인과 해결 방법을 알아보세요.</p>

<h2>1. 헤드폰 안전이 볼륨을 제한하고 있음</h2>

<p>macOS에는 청력 보호를 위해 헤드폰 볼륨을 제한하는 내장 기능이 있습니다. 시간이 지남에 따라 소리 노출을 측정하고 너무 크게 듣고 있다고 판단하면 최대 볼륨을 줄입니다.</p>

<p><strong>시스템 설정 → 사운드 → 헤드폰 안전</strong>으로 이동하세요. "큰 오디오 줄이기"가 활성화되어 있으면 비활성화하거나 임계값을 높이세요. 이것이 Mac에서 Bluetooth 헤드폰이 전화보다 더 조용한 가장 큰 원인입니다.</p>

<h2>2. Bluetooth 코덱 불일치</h2>

<p>전화가 헤드폰에 고품질 코덱(aptX, LDAC, AAC)을 사용하여 연결하는 반면 Mac은 SBC(기본 Bluetooth 코덱)를 기본으로 사용할 수 있습니다. 다른 코덱은 다른 최대 볼륨 특성을 가집니다.</p>

<p>macOS는 일반적으로 Apple 장치에는 AAC, 타사 헤드폰에는 SBC를 사용합니다. 헤드폰이 aptX 또는 LDAC를 지원하더라도 macOS는 사용하지 않습니다 — Apple은 AAC와 SBC만 지원합니다.</p>

<p><strong>해결:</strong> macOS에서 코덱 선택에 대해 할 수 있는 것이 많지 않습니다. 하지만 같은 헤드폰이 LDAC를 사용하는 Android 전화에서 왜 다르게(그리고 잠재적으로 더 조용하게) 들리는지 설명해 줍니다.</p>

<h2>3. 마이크 활성화가 SCO를 트리거</h2>

<p>어떤 앱이든 Bluetooth 헤드폰의 마이크를 활성화하면(Zoom, FaceTime, Siri, 받아쓰기) macOS가 AAC에서 SCO 코덱으로 전환합니다. SCO는 2004년 전화 통화를 위해 설계되었습니다 — 음질이 끔찍하고 상당히 더 조용합니다.</p>

<p><strong>해결:</strong> 별도의 마이크(내장 Mac 마이크 또는 USB 마이크)를 사용하고 Bluetooth 헤드폰은 출력 전용으로 유지하세요. 통화 앱의 설정에서 입력을 Mac의 마이크로, 출력을 헤드폰으로 설정하세요. SCO 전환을 방지합니다.</p>

<h2>4. Bluetooth 볼륨 동기화 문제</h2>

<p>Bluetooth 오디오에는 두 가지 볼륨 컨트롤이 있습니다: Mac 측과 헤드폰 측. 동기화되어야 하지만 어긋날 수 있습니다 — Mac은 100%를 표시하지만 헤드폰은 실제로 최대 볼륨이 아닙니다.</p>

<p><strong>해결:</strong> 헤드폰을 연결 해제(시스템 설정 → Bluetooth → "i" 클릭 → 연결 해제)하고 5초 기다린 후 다시 연결하세요. 볼륨이 다시 동기화됩니다. 일부 헤드폰은 자체 볼륨 버튼이 있습니다 — 그것도 최대인지 확인하세요.</p>

<h2>5. 저품질 Bluetooth 연결</h2>

<p>거리, 간섭(WiFi 라우터, USB 3.0 장치), Mac과 헤드폰 사이의 장애물이 Bluetooth 신호 품질을 저하시킬 수 있습니다. 신호가 약하면 macOS가 오디오 비트레이트를 줄일 수 있으며, 인지 볼륨과 품질에 영향을 줄 수 있습니다.</p>

<p><strong>해결:</strong> Mac에 더 가까이 이동하세요. 사용하지 않는 Bluetooth 장치를 연결 해제하세요. USB 3.0 허브가 Mac 근처에 있으면 멀리 옮겨보세요 — USB 3.0은 Bluetooth가 사용하는 2.4 GHz 대역에서 간섭을 발생시킵니다.</p>

<h2>6. 헤드폰 자체</h2>

<p>일부 Bluetooth 헤드폰은 다른 것보다 최대 볼륨이 낮습니다. 더 큰 드라이버가 있는 오버이어 헤드폰은 일반적으로 이어버드보다 더 커집니다. 노이즈 캔슬링 헤드폰은 펌웨어에 볼륨 제한이 내장되어 있을 수 있습니다.</p>

<p>헤드폰 제조사의 앱(Sony Headphones Connect, Bose Music, Sennheiser Smart Control 등)에서 볼륨 제한 설정을 확인하세요. 일부 헤드폰에는 볼륨을 제한하는 "안전한 청취" 모드가 있습니다.</p>

<h2>여전히 조용한가요? 100% 이상으로 증폭</h2>

<p>위의 모든 것을 확인했는데 헤드폰이 여전히 Mac에서 너무 조용하면 볼륨 증폭이 필요합니다.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>은 모든 앱의 볼륨을 <strong>200%</strong>까지 증폭합니다. Bluetooth 헤드폰에서 Spotify가 너무 조용하면 슬라이더를 160%로 드래그하세요. 오디오 신호가 헤드폰에 도달하기 전에 증폭되어 해당 앱의 사용 가능한 볼륨을 효과적으로 두 배로 만듭니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial이 Mac에서 Bluetooth 헤드폰을 위한 앱별 볼륨을 200%까지 슬라이더로 증폭" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>앱별 증폭이 시스템 전체 볼륨 부스트보다 나은 이유는 조용한 앱만 증폭할 수 있기 때문입니다. 팟캐스트가 조용하지만 음악은 괜찮으면 팟캐스트 앱을 170%로 증폭하면서 Spotify를 80%로 유지하세요. 각 앱이 적절한 레벨로 유지됩니다.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>
`,
  },
  "mac-audio-obs-streaming-setup": {
    slug: "mac-audio-obs-streaming-setup",
    title: "Mac에서 OBS 및 스트리밍 오디오: 시청자가 듣는 것을 제어하는 방법",
    description:
      "Mac에서 OBS로 스트리밍 중인가요? 시청자들이 모든 것을 같은 볼륨으로 듣습니다 — 게임, 음악, 알림, Discord. 오디오 소스의 밸런스를 맞추는 방법을 알아보세요.",
    date: "2026-04-15",
    readTime: "7분 소요",
    content: `
<p>Mac에서 OBS로 스트리밍 중입니다. 게임 오디오가 쿵쿵울립니다. Discord 통화가 실행 중입니다. Spotify가 배경 음악을 재생합니다. 누군가 구독하면 알림 소리가 납니다. 시청자들은 이 모든 것을 같은 볼륨으로 듣습니다 — Discord 호출이 폭발과 경쟁하고 음악이 해설을 덮는 혼란스러운 엉망.</p>

<p>핵심 문제: macOS는 하나의 오디오 출력을 제공하고 OBS가 이를 하나의 결합된 스트림으로 캡처합니다. macOS가 이를 분리하지 않으므로 OBS에 "게임은 40%, Discord는 80%, Spotify는 20%로 캡처"라고 할 수 없습니다.</p>

<h2>Mac 스트리밍 오디오 문제</h2>

<p>Windows에서는 OBS가 개별 애플리케이션 오디오를 기본적으로 캡처할 수 있습니다. 각 앱을 별도의 오디오 소스로 추가하고 OBS 내에서 독립적으로 믹스합니다. Mac에서는 이것이 내장되어 있지 않습니다. macOS의 OBS가 캡처할 수 있는 것:</p>

<ul>
  <li><strong>데스크톱 오디오</strong> — Mac에서 재생 중인 모든 것이 하나의 스트림으로 결합</li>
  <li><strong>마이크/보조</strong> — 마이크 입력</li>
  <li><strong>애플리케이션 오디오 캡처 (macOS 13+)</strong> — 특정 앱의 오디오 캡처, 하지만 설정이 수동적이고 제한적</li>
</ul>

<p>애플리케이션 오디오 캡처 소스(OBS 30+에서 추가)는 하나의 앱을 분리하는 데 작동하지만 OBS 내에서 별도 레벨의 다섯 개 오디오 소스를 관리하는 것은 복잡하고 모든 앱이 협력하지는 않습니다.</p>

<h2>더 간단한 접근: OBS가 캡처하기 전에 레벨 제어</h2>

<p>OBS 내에서 오디오를 분리하려는 대신, 각 앱의 볼륨을 OBS의 데스크톱 오디오 캡처에 도달하기 <em>전에</em> 제어하세요. Spotify를 20%로 낮추고 Discord를 90%로 높이면 OBS의 데스크톱 오디오 캡처가 이미 밸런스된 믹스를 받습니다.</p>

<p>이것이 정확히 <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>이 하는 것입니다. 시청자에게 들려주고 싶은 레벨로 각 앱을 설정하세요:</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial이 Mac에서 OBS 스트리밍을 위한 게임, Discord, 음악 오디오 레벨 밸런싱" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>일반적인 스트리밍 오디오 설정</h3>
<ul>
  <li><strong>게임:</strong> 50% — 존재하지만 목소리를 압도하지 않음</li>
  <li><strong>Discord / 음성 채팅:</strong> 80% — 팀의 명확한 호출</li>
  <li><strong>Spotify / 음악:</strong> 15% — 미세한 배경 분위기</li>
  <li><strong>스트림 알림 (브라우저):</strong> 40% — 들리지만 거슬리지 않음</li>
  <li><strong>Slack / 알림:</strong> 음소거 — 시청자가 DM을 들을 필요 없음</li>
</ul>

<h3>"스트리밍" 프로필로 저장</h3>
<p>이 구성을 SoundDial의 볼륨 프로필로 저장하세요. 방송 전에 한 번의 클릭으로 "스트리밍" 프로필을 적용하세요. 모든 앱이 스트리밍에 최적화된 레벨로 점프합니다. 스트리밍이 끝나면 "일반" 또는 "게이밍" 프로필로 전환하세요.</p>

<h2>자신이 듣는 것 vs. 시청자가 듣는 것</h2>

<p>SoundDial이 시스템 레벨에서 앱별 볼륨을 조정하므로 당신과 시청자 모두 같은 밸런스된 믹스를 듣습니다. 이것은 별도 믹스(하나는 당신용, 하나는 스트림용)를 유지하는 것보다 간단합니다 — 이것은 가상 오디오 장치와 Mac에서 취약한 복잡한 라우팅이 필요합니다.</p>

<p>스트림 대 헤드폰에 완전히 별도의 믹스가 필요한 경우(예: 시청자보다 Discord를 더 크게 듣고 싶은 경우) 가상 오디오 장치를 사용한 더 복잡한 라우팅 설정이 필요합니다. 하지만 대부분의 스트리머에게는 메뉴 바에서 쉽게 제어할 수 있는 단일 밸런스된 믹스가 정확히 필요한 것입니다.</p>

<h2>앱별 제어가 OBS 전용 믹싱보다 나은 이유</h2>

<ul>
  <li><strong>즉각적인 조정:</strong> 스트리밍 중 시청자가 게임이 너무 크다고 합니다. 메뉴 바를 클릭하고 하나의 슬라이더를 드래그하세요. 완료. 일시 정지하거나 OBS 설정을 열 필요 없음.</li>
  <li><strong>OBS 외부에서도 작동:</strong> 밸런스된 오디오 설정은 스트리밍하지 않을 때도 작동합니다. 같은 프로필, 같은 편의성.</li>
  <li><strong>가상 오디오 장치 없음:</strong> SoundDial은 Apple의 네이티브 Audio Tap API를 사용 — Soundflower, BlackHole, macOS 업데이트에서 고장나는 드라이버 없음.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>에서 제공 — Apple 검토, €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>
`,
  },
  "make-mac-remember-volume-per-app": {
    slug: "make-mac-remember-volume-per-app",
    title: "Mac이 앱별 볼륨을 기억하게 하는 방법",
    description:
      "Spotify를 재시작하거나 Zoom을 다시 실행할 때마다 볼륨을 재조정해야 합니다. macOS가 각 앱의 볼륨 레벨을 자동으로 기억하게 하는 방법을 알아보세요.",
    date: "2026-04-18",
    readTime: "4분 소요",
    content: `
<p>오디오 레벨을 완벽하게 맞추는 데 5분을 보냅니다. Spotify 30%, Zoom 100%, Slack 15%. 그런데 Mac을 재시작합니다. 또는 Slack이 충돌해서 다시 실행됩니다. 또는 Spotify를 닫고 나중에 다시 엽니다. 모든 앱이 기본 볼륨으로 재설정됩니다. 모든 것을 다시 조정합니다. 또다시.</p>

<p>macOS는 재시작 간에 시스템 볼륨을 기억합니다. 하지만 앱별 볼륨은 기억하지 않습니다 — macOS에는 앱별 볼륨 제어가 없기 때문입니다. 기억할 것이 없습니다.</p>

<h2>왜 앱이 자체 볼륨을 기억하지 않는가</h2>

<p>일부 앱(Spotify, VLC)에는 세션 간에 저장되는 내부 볼륨 슬라이더가 있습니다. 하지만 대부분의 앱 — 브라우저, 커뮤니케이션 도구, 시스템 유틸리티 — 에는 자체 볼륨 컨트롤이 없습니다. 내부 볼륨을 저장하는 앱도 자체 슬라이더 위치만 기억하며, 다른 앱에 대한 상대적 볼륨은 기억하지 않습니다.</p>

<p>정말 원하는 것은 <em>시스템</em>이 기억하는 것입니다: "Spotify는 항상 시스템 볼륨의 30%여야 한다." macOS는 이 개념을 지원하지 않습니다.</p>

<h2>SoundDial의 볼륨 메모리</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>에는 <strong>볼륨 메모리</strong> 기능이 있습니다. 활성화하면 각 앱의 볼륨 레벨을 번들 식별자로 저장합니다. 앱이 종료되고 다시 실행되면 — 재시작하든, 충돌하든, Mac을 재시작하든 — SoundDial이 자동으로 저장된 볼륨으로 복원합니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 볼륨 메모리 — macOS에서 앱별 볼륨 레벨을 자동으로 기억하고 복원" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>작동 방식</h3>
<ol>
  <li>SoundDial 설정에서 "앱별 볼륨 기억" 활성화</li>
  <li>각 앱을 선호하는 볼륨으로 설정</li>
  <li>SoundDial이 레벨을 자동 저장</li>
  <li>앱이 다시 실행되면 볼륨이 정확히 이전 위치로 복원</li>
</ol>

<p>수동 저장 없음. 재조정 없음. 처음 볼륨을 설정하는 것이 마지막이 됩니다.</p>

<h3>기억되는 것</h3>
<ul>
  <li><strong>볼륨 레벨</strong> — 정확한 백분율 (0%에서 200%)</li>
  <li><strong>음소거 상태</strong> — 앱을 음소거했으면 다시 실행 시 음소거 유지</li>
  <li><strong>앱별</strong> — 각 앱의 볼륨이 번들 ID로 독립적으로 저장</li>
</ul>

<h3>새 앱은 기본 볼륨을 받음</h3>
<p>앱이 처음 실행될 때(SoundDial이 이전에 본 적 없는) 구성 가능한 기본 볼륨을 받습니다. SoundDial 설정에서 이 기본값을 설정할 수 있습니다 — 새 앱이 잠재적으로 100%로 폭발하는 대신 80%(또는 선호하는 값)로 시작합니다.</p>

<h2>볼륨 메모리 + 프로필 = 설정 후 잊기</h2>

<p>볼륨 메모리는 일상을 처리합니다: 앱이 재시작 간 레벨을 유지합니다. 프로필은 상황 전환을 처리합니다: "회의" 모드, "집중" 모드, "게이밍" 모드 — 한 번의 클릭으로 적용하면 모든 앱이 해당 상황에 적합한 레벨로 점프합니다.</p>

<p>함께 사용하면 수동으로 볼륨 슬라이더를 거의 조정할 필요가 없습니다. 앱이 마지막 레벨을 기억하고, 상황이 바뀌면 프로필이 모든 것을 한 번에 설정합니다.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>에서 제공 — Apple 검토, €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>
`,
  },
  "podcast-volume-too-low-mac": {
    slug: "podcast-volume-too-low-mac",
    title: "Mac에서 팟캐스트 볼륨이 너무 작은가요? 더 크게 만드는 방법",
    description:
      "일부 팟캐스트는 Mac에서 최대 볼륨에서도 속삭임 수준으로 조용합니다. 이유와 — 다른 앱에 영향을 주지 않고 팟캐스트 오디오를 100% 이상으로 증폭하는 방법을 알아보세요.",
    date: "2026-04-20",
    readTime: "5분 소요",
    content: `
<p>Mac에서 팟캐스트를 듣고 있습니다. 호스트는 괜찮게 들리지만 게스트는 — 주방에서 노트북 마이크로 녹음한 — 거의 들리지 않습니다. 볼륨을 100%로 올립니다. 호스트는 이제 너무 크지만 게스트는 여전히 조용합니다. 문제가 녹음에 있으므로 이길 방법이 없습니다, Mac이 아니라.</p>

<p>팟캐스트 오디오 품질은 크게 다릅니다. 전문적인 쇼는 일관된 레벨로 마스터링됩니다. 하지만 인터뷰, 인디 팟캐스트, 라이브 녹음은 종종 게스트가 -20 dB 이하 — 호스트나 인트로 음악보다 상당히 더 조용합니다.</p>

<h2>왜 일부 팟캐스트가 그렇게 조용한가</h2>

<ul>
  <li><strong>게스트 마이크 품질:</strong> 한 호스트는 전문 장비, 게스트는 AirPods. 레벨 차이가 15+ dB일 수 있음.</li>
  <li><strong>후반 작업 없음:</strong> 전문적으로 제작된 팟캐스트는 레벨을 압축하고 정규화함. 많은 것은 그렇지 않음.</li>
  <li><strong>팟캐스트 앱이 정규화하지 않음:</strong> Apple 팟캐스트와 Spotify는 팟캐스트 콘텐츠에 최소한의 또는 전혀 음량 정규화를 적용하지 않음(음악과 다르게).</li>
  <li><strong>다이나믹 레인지:</strong> 일부 팟캐스트 프로듀서는 "자연스러운" 사운드를 위해 의도적으로 높은 다이나믹 레인지를 유지 — 조용한 부분이 매우 조용하다는 의미.</li>
</ul>

<h2>앱 내 해결 방법</h2>

<h3>Apple 팟캐스트</h3>
<p>Apple 팟캐스트에는 볼륨 정규화나 부스트 기능이 없습니다. 팟캐스트가 제공하는 것이 그대로입니다. 이전 버전의 인앱 볼륨 컨트롤은 제거되었습니다 — 이제 시스템 볼륨만 사용합니다.</p>

<h3>Spotify</h3>
<p>Spotify의 "볼륨 정규화" 설정(설정 → 재생)은 다른 팟캐스트 간의 볼륨 일관성에 도움이 될 수 있지만, 에피소드 내 다이나믹에 대한 효과는 제한적입니다. 최대 정규화를 위해 "크게"로 설정해 보세요.</p>

<h3>Overcast (브라우저)</h3>
<p>Overcast(overcast.fm에서 웹으로)를 사용하면 팟캐스트 오디오를 상당히 증폭하고 압축하여 조용한 목소리를 더 크게 만드는 "Voice Boost" 기능이 있습니다. 최고의 내장 솔루션 중 하나입니다 — 하지만 Overcast 내에서만 작동합니다.</p>

<h2>시스템 레벨 해결: 팟캐스트 앱을 100% 이상으로 증폭</h2>

<p>범용 해결책은 팟캐스트 앱을 macOS의 100% 제한을 넘어 증폭하는 것입니다. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>은 모든 앱에 <strong>200%</strong>까지의 볼륨 슬라이더를 제공합니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial이 Mac에서 조용한 팟캐스트 에피소드를 위해 Apple 팟캐스트 볼륨을 180%로 증폭" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Spotify 음악은 40%, Slack은 15%로 유지하면서 Apple 팟캐스트 또는 팟캐스트 앱을 160-180%로 설정하세요. 팟캐스트가 더 커지지만 다른 모든 것이 고통스러울 정도로 커지지는 않습니다. 음악으로 전환할 때는 팟캐스트 앱을 다시 정상으로 낮추세요 — 또는 SoundDial의 볼륨 메모리가 자동으로 기억하게 하세요.</p>

<p>이 앱별 접근 방식이 시스템 전체 볼륨 부스트보다 나은 이유:</p>
<ul>
  <li>조용한 팟캐스트 앱만 더 커짐</li>
  <li>음악은 선호하는 레벨 유지</li>
  <li>통화 오디오는 선호하는 레벨 유지</li>
  <li>알림 소리가 갑자기 귀청이 터질 정도로 커지지 않음</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>에서 제공 — Apple 검토, €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>
`,
  },
  "mac-audio-online-classes-lectures": {
    slug: "mac-audio-online-classes-lectures",
    title: "온라인 수업 및 강의를 위한 Mac 오디오 설정",
    description:
      "강의를 보면서 노트를 작성하고, 참고 자료를 검색하고, 학우들과 채팅하는 것 — 모두 다른 볼륨으로. Mac에서 학생 오디오를 관리하는 방법을 알아보세요.",
    date: "2026-04-22",
    readTime: "5분 소요",
    content: `
<p>Zoom에서 온라인 강의에 참석 중인 학생입니다. 다른 탭에 참고용 YouTube 튜토리얼이 열려 있습니다. 학우들이 Discord에서 채팅 중입니다. Spotify가 배경에서 로파이 비트를 재생 중입니다. Mac은 이 모든 것을 하나의 볼륨으로 처리합니다. 로파이를 줄이면 교수님 말이 안 들립니다. 강의를 올리면 Discord 알림이 집중력을 산산조각냅니다.</p>

<p>macOS에는 모든 것에 대해 하나의 볼륨 슬라이더가 있습니다. 여러 오디오 소스를 다루는 학생에게는 끊임없는 마찰 포인트입니다.</p>

<h2>일반적인 학생 오디오 스택</h2>

<ul>
  <li><strong>강의 플랫폼</strong> (Zoom, Teams, Google Meet, Webex) — 수정처럼 맑아야 하고 항상 들려야 함</li>
  <li><strong>참고 자료</strong> (YouTube 튜토리얼, 녹화된 강의) — 적당한 볼륨, 일시 정지/조정 가능해야 함</li>
  <li><strong>공부 음악</strong> (Spotify, Apple Music) — 낮은 배경 레벨, 강의와 경쟁하면 안 됨</li>
  <li><strong>채팅</strong> (Discord, iMessage, Slack) — 미세한 알림 소리, 방해가 되면 안 됨</li>
  <li><strong>브라우저 탭</strong> — 즉시 음소거해야 하는 가끔의 자동 재생 콘텐츠</li>
</ul>

<h2>macOS의 한계</h2>

<p>하나의 시스템 볼륨으로 타협해야 합니다. 조용한 교수님의 마이크에 충분히 높게 설정하면 Spotify가 너무 큽니다. 편안한 음악을 위해 설정하면 강의가 안 들립니다. Spotify를 음소거하면 배경 음악의 집중 효과를 잃습니다. 모든 앱이 같은 레벨에 잠겨 있으므로 편안한 밸런스가 없습니다.</p>

<h2>공부를 위한 앱별 오디오 설정</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>은 각 앱에 자체 볼륨 슬라이더를 제공하여 이상적인 공부 오디오 설정을 구축할 수 있습니다:</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 학생 설정 — 강의는 최대 볼륨, 공부 음악은 낮게, 알림은 음소거" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>강의 프로필</h3>
<ul>
  <li><strong>Zoom / Teams / Meet:</strong> 100% — 한 마디도 놓치지 않음</li>
  <li><strong>Spotify:</strong> 15% — 아주 은은한 배경 분위기</li>
  <li><strong>Discord:</strong> 10% — 미세한 알림만</li>
  <li><strong>Browser:</strong> 40% — 필요 시 참고 비디오용</li>
  <li><strong>iMessage:</strong> 음소거 — 수업 사이에 확인</li>
</ul>

<h3>자율 학습 프로필</h3>
<ul>
  <li><strong>Spotify:</strong> 50% — 동기 부여 공부 음악</li>
  <li><strong>Browser:</strong> 70% — 튜토리얼 비디오를 명확한 레벨로</li>
  <li><strong>Discord:</strong> 20% — 스터디 그룹에 참여 가능</li>
  <li><strong>나머지:</strong> 음소거</li>
</ul>

<h3>휴식 프로필</h3>
<ul>
  <li><strong>모든 것:</strong> 60-80% — 수업 사이 릴랙스</li>
</ul>

<p>각각을 볼륨 프로필로 저장하고 하루가 진행되면서 한 번의 클릭으로 전환하세요. 강의가 시작되면 "강의"를 적용 — 자동 더킹이 나머지를 처리하며 교수님이 마이크를 통해 말할 때 자동으로 음악을 낮춥니다.</p>

<h2>왜 집중에 이것이 중요한가</h2>

<p>연구에 따르면 적절한 오디오 환경이 집중력과 기억력을 향상시킵니다. 잘못된 믹스 — 음악이 너무 크거나, 알림이 너무 자주, 강의가 너무 조용 — 는 공부하는 자료와 무관한 인지적 부하를 만듭니다. 오디오를 한 번 맞추고 프로필로 저장하고 다시는 생각하지 않는 것은 끊임없는 산만함의 원천을 제거합니다.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>에서 제공 — Apple 검토, €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>
`,
  },
  "mac-sound-not-working-after-update": {
    slug: "mac-sound-not-working-after-update",
    title: "업데이트 후 Mac 사운드가 작동하지 않나요? 완전 해결 가이드",
    description:
      "macOS를 업데이트했는데 소리가 안 나거나, 끊기거나, 잘못된 볼륨에 고정되어 있습니다. Mac 오디오를 다시 작동시키는 모든 해결 방법을 알아보세요.",
    date: "2026-04-25",
    readTime: "7분 소요",
    content: `
<p>macOS를 업데이트했습니다. 모든 것이 괜찮아 보였습니다 — 소리가 없다는 것을 알아차릴 때까지. 또는 소리가 끊깁니다. 또는 볼륨이 고정되어 있습니다. 또는 오디오 출력 장치가 사라졌습니다. 업데이트 후 오디오 문제는 거의 모든 macOS 릴리스에서 발생하며, 약간 짜증나는 것부터 완전히 무음까지 다양합니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<p>macOS 업데이트 후 Mac 오디오를 수정하는 체계적인 가이드입니다. 알려진 모든 문제와 해결 방법을 다룹니다.</p>

<h2>단계 1: 명확한 것 확인</h2>

<h3>음소거되었나요?</h3>
<p>볼륨 올리기 키를 누르세요. 볼륨 표시기가 화면에 나타나는지 확인하세요. 때로는 업데이트가 시스템 볼륨을 0으로 재설정하거나 음소거를 활성화합니다.</p>

<h3>올바른 출력 장치가 선택되었나요?</h3>
<p>시스템 설정 → 사운드 → 출력으로 이동하세요. 업데이트 후 macOS가 때때로 예상치 못한 출력 장치로 전환합니다 — 연결된 모니터의 스피커, 연결되지 않은 Bluetooth 장치, 또는 외부 장치를 원할 때 내장 스피커. 올바른 장치를 선택하세요.</p>

<h3>헤드폰 안전이 볼륨을 제한하고 있나요?</h3>
<p>업데이트가 때때로 헤드폰 안전을 기본값(활성화)으로 재설정합니다. 시스템 설정 → 사운드 → 헤드폰 안전을 확인하고 업데이트에 의해 켜졌다면 "큰 오디오 줄이기"를 비활성화하세요.</p>

<h2>단계 2: Core Audio 재시작</h2>

<p>오디오 데몬(coreaudiod)은 업데이트 후 종종 나쁜 상태에 빠집니다. 재시작이 가장 효과적인 단일 해결책입니다.</p>

<p>터미널을 열고 실행하세요:</p>
<p><code>sudo killall coreaudiod</code></p>

<p>오디오가 잠시 끊기고 재시작됩니다. 소리가 이제 작동하는지 테스트하세요. 이것이 해결되면 문제는 오래된 오디오 데몬 상태였습니다 — 업데이트 후 흔함.</p>

<h2>단계 3: NVRAM/PRAM 재설정</h2>

<p>Intel Mac의 경우: 완전히 종료한 후 <strong>Option + Command + P + R</strong>을 약 20초간 누른 채 전원을 켜세요. NVRAM을 재설정하며 볼륨 설정, 시작 디스크 선택 및 기타 저수준 설정을 저장합니다.</p>

<p>Apple Silicon Mac(M1/M2/M3/M4)의 경우: NVRAM은 필요할 때 자동으로 재설정됩니다. 잠자기/깨우기가 아닌 완전한 재시작이 보통 충분합니다.</p>

<h2>단계 4: 타사 오디오 드라이버 충돌 확인</h2>

<p>macOS 업데이트는 타사 오디오 드라이버와 커널 확장을 자주 깨뜨립니다. 다음이 설치되어 있으면 문제의 원인일 수 있습니다:</p>

<ul>
  <li><strong>Soundflower</strong> — 중단됨, 최신 macOS와 종종 충돌</li>
  <li><strong>BlackHole</strong> — 가상 오디오 장치, macOS 업데이트 후 업데이트가 필요할 수 있음</li>
  <li><strong>Loopback</strong> — 업데이트된 macOS를 위한 새 버전이 필요할 수 있음</li>
  <li><strong>Background Music</strong> — 업데이트 시 자주 고장나는 가상 오디오 장치 설치</li>
  <li><strong>오디오 인터페이스 드라이버</strong> — Focusrite, Universal Audio 등 업데이트된 드라이버 확인</li>
</ul>

<p><strong>해결:</strong> 충돌하는 소프트웨어를 제거하거나 업데이트하세요. 가상 오디오 장치의 경우 앱이 설치한 오디오 장치가 시스템 설정 → 사운드 → 출력에 나타나는지 확인하세요 — 나타나고 선택되어 있으면 실제 스피커로 전환하세요. 그런 다음 타사 앱을 업데이트하거나 제거하세요.</p>

<h2>단계 5: 안전 모드 부팅</h2>

<p>안전 모드로 부팅하여 시작 항목이나 타사 확장이 원인인지 확인하세요:</p>

<ul>
  <li><strong>Apple Silicon:</strong> 종료 → "시작 옵션 로드 중"이 나타날 때까지 전원 버튼 누르고 있기 → 시작 디스크 선택 → Shift 누르기 → "안전 모드에서 계속"을 클릭</li>
  <li><strong>Intel:</strong> 재시작 → 로그인 창이 보일 때까지 Shift를 누른 채 부팅</li>
</ul>

<p>안전 모드에서 오디오가 작동하면 타사 커널 확장이나 로그인 항목이 원인입니다. 최근 설치한 소프트웨어를 조사하세요.</p>

<h2>단계 6: 새 사용자 계정 만들기</h2>

<p>문제가 지속되면 임시 새 사용자 계정을 만드세요(시스템 설정 → 사용자 및 그룹 → 사용자 추가). 새 계정으로 로그인하고 오디오를 테스트하세요. 새 계정에서 소리가 작동하면 문제는 사용자 프로필에 있습니다 — 손상된 환경설정 파일이나 오디오 구성.</p>

<h2>SoundDial로 미래 문제 예방</h2>

<p>다른 오디오 도구에 비해 <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>의 한 가지 장점: 시스템 오디오 드라이버를 설치하지 않습니다. Apple의 네이티브 Core Audio Tap API를 사용하여 가상 오디오 장치 앱을 괴롭히는 충돌 없이 macOS 업데이트와 깔끔하게 작동합니다.</p>

<p>Background Music이나 Soundflower를 사용하다가 업데이트 후 고장났다면, SoundDial은 같은 문제가 없는 대체품입니다. 앱별 볼륨 제어, 200% 볼륨 부스트, 프로필, 자동 더킹 — 모두 커널 확장이나 가상 오디오 장치 없이.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>에서 제공 — Apple 검토, €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>
`,
  },
  "mute-all-apps-keyboard-shortcut-mac": {
    slug: "mute-all-apps-keyboard-shortcut-mac",
    title: "Mac에서 모든 앱을 한 번에 음소거하는 방법 (그리고 완벽하게 복원하기)",
    description:
      "즉각적인 정적이 필요한가요? 음소거 키는 모든 것을 음소거합니다 — 하지만 음소거 해제하면 신중하게 밸런스한 볼륨이 재설정됩니다. Mac에서 더 나은 음소거 및 복원 방법을 알아보세요.",
    date: "2026-04-28",
    readTime: "4분 소요",
    content: `
<p>누군가 방에 들어옵니다. 상사가 예상치 않게 전화합니다. 클라이언트가 통화에서 화면을 공유하는데 당신의 음악이 그들의 스피커로 재생되기 시작합니다. 즉각적인 정적이 필요합니다. 지금 당장.</p>

<p>음소거 키를 누릅니다. 모든 것이 조용해집니다. 위기가 해소됩니다.</p>

<p>그런 다음 그 순간이 지나갑니다. 다시 음소거 키를 누릅니다. 모든 것이 돌아옵니다 — 하지만 시스템 볼륨 레벨에서, Spotify가 30%였고 Zoom이 100%였고 Slack이 15%였다는 것을 기억하지 않습니다. 그 개별 레벨은? 사라졌습니다. 모든 것을 수동으로 재조정해야 합니다.</p>

<h2>시스템 음소거 키: 둔탁한 도구</h2>

<p>Mac의 음소거 키(F10 또는 스피커-슬래시 키)는 <strong>시스템 오디오 출력</strong>을 음소거합니다. 모든 앱이 동시에 침묵합니다. 음소거 해제하면 시스템 볼륨을 이전 위치로 복원합니다 — 하지만 macOS에는 하나의 볼륨 슬라이더만 있으므로 기억하거나 복원할 앱별 레벨이 없습니다.</p>

<p>한 번에 하나의 앱만 사용한다면 괜찮습니다. 여섯 개의 앱을 다른 레벨로 신중하게 밸런스하고 모두 음소거 + 복원해야 한다면 문제입니다.</p>

<h2>더 스마트한 음소거: 앱별 모두 음소거</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>에는 "모두 음소거" 키보드 단축키가 있습니다: <strong>Control + Option + M (⌃⌥M)</strong>.</p>

<p>누르면:</p>
<ol>
  <li>모든 앱이 개별적으로 음소거됩니다(각 앱의 볼륨 상태가 저장됨)</li>
  <li>즉각적인 정적 — 음소거 키와 동일</li>
</ol>

<p>다시 누르면:</p>
<ol>
  <li>모든 앱이 음소거 해제됩니다</li>
  <li>각 앱이 음소거 전 <strong>정확히</strong> 그 볼륨으로 돌아갑니다</li>
  <li>Spotify가 30%로, Zoom이 100%로, Slack이 15%로 — 완벽하게 복원됩니다</li>
</ol>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 모두 음소거 단축키 — Control+Option+M으로 볼륨 복원과 함께 모든 앱 음소거 및 해제" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>시스템 음소거 키와의 차이:</p>
<ul>
  <li><strong>시스템 음소거:</strong> 출력 음소거 → 음소거 해제하면 하나의 시스템 볼륨 복원 → 앱별 밸런스 존재하지 않음</li>
  <li><strong>SoundDial 모두 음소거:</strong> 각 앱을 개별적으로 음소거 → 음소거 해제하면 각 앱의 개별 볼륨 복원 → 밸런스 보존</li>
</ul>

<h2>이것이 중요한 경우</h2>

<ul>
  <li><strong>화면 공유:</strong> 화면을 공유 중이고 상대방이 음악을 듣기 전에 Mac을 음소거해야 합니다. ⌃⌥M → 정적 → 할 일 수행 → ⌃⌥M → 음악이 정확한 레벨로 돌아옵니다.</li>
  <li><strong>예상치 못한 중단:</strong> 누군가 들어와서 즉각적인 정적이 필요합니다. 하나의 단축키, 마우스 없이, 메뉴 바 찾기 없이.</li>
  <li><strong>빠른 전화 통화:</strong> 책상 전화가 울립니다. Mac을 음소거하고 전화를 받고 끝나면 음소거 해제합니다. 모든 것이 돌아옵니다.</li>
</ul>

<p><strong>⌃⌥S</strong> 단축키(SoundDial의 팝오버 토글)와 결합하면 키보드에서 전적으로 모든 오디오를 관리할 수 있습니다 — 믹서 열기, 레벨 조정, 닫기, 모든 것 음소거/해제 — 마우스를 건드리지 않고.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>에서 제공 — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>
`,
  },
  "google-meet-volume-too-low-mac": {
    slug: "google-meet-volume-too-low-mac",
    title: "Mac에서 Google Meet 볼륨이 너무 작은가요? 해결 방법",
    description:
      "최대 볼륨에서도 Google Meet의 목소리가 거의 들리지 않습니다. Meet가 Chrome을 통해 실행되는 이유, 오디오에 미치는 영향, 증폭하는 방법을 알아보세요.",
    date: "2026-05-01",
    readTime: "5분 소요",
    content: `
<p>Google Meet에는 네이티브 Mac 앱이 없습니다 — 브라우저 안에서 실행됩니다. 이것은 Meet의 오디오가 Chrome(또는 Safari)의 오디오 스트림의 일부라는 것을 의미하며, 볼륨 문제가 브라우저가 오디오를 처리하는 방식과 얽혀 있습니다. 풀어보겠습니다.</p>

<h2>1. Meet의 자체 오디오 설정 확인</h2>

<p>Meet 통화 중 점 세 개 메뉴(⋮) → 설정 → 오디오를 클릭하세요. 올바른 스피커 장치가 선택되어 있는지 확인하세요. Meet는 특히 최근에 오디오 하드웨어를 연결하거나 분리한 경우 예상치 못한 장치를 기본으로 선택할 때가 있습니다.</p>

<h2>2. 브라우저의 탭 볼륨 확인</h2>

<p>Chrome: Meet 탭을 우클릭 → "사이트 음소거"가 선택되지 않았는지 확인하세요. 음소거된 사이트는 다른 설정에 관계없이 오디오가 나오지 않습니다.</p>

<p>Safari: 탭의 스피커 아이콘을 클릭하여 음소거되지 않았는지 확인하세요.</p>

<h2>3. 시스템 출력 확인</h2>

<p>시스템 설정 → 사운드 → 출력. 올바른 장치가 선택되어 있고 볼륨이 최대인지 확인하세요. 헤드폰을 사용 중이라면 헤드폰 안전도 확인하세요.</p>

<h2>4. Chrome 오디오 문제</h2>

<p>Google Meet는 Chrome 탭으로 실행되며, Chrome의 오디오 출력은 전용 앱보다 낮을 수 있습니다. Chrome은 자체 렌더러를 통해 오디오를 처리하며 자체 볼륨 상한이 있습니다. Chrome의 전체 오디오가 낮으면 macOS 볼륨이 100%이더라도 Meet가 낮습니다.</p>

<p>Chrome의 오디오를 최대 이상으로 높이는 내장 방법은 없습니다. macOS는 Chrome을 하나의 볼륨 레벨을 가진 하나의 앱으로 취급하며, 그 레벨은 100%에서 최대입니다.</p>

<h2>5. Bluetooth 코덱 문제</h2>

<p>AirPods이나 Bluetooth 헤드폰을 사용 중이라면 Google Meet가 마이크를 활성화하면 Bluetooth 코덱이 AAC에서 SCO로 전환됩니다. 오디오 품질과 볼륨이 크게 감소합니다.</p>

<p><strong>해결:</strong> Meet의 오디오 설정에서 Bluetooth 헤드폰을 출력으로 유지하면서 Mac의 내장 마이크를 입력 장치로 선택하세요. 코덱 전환을 방지하고 고품질 오디오를 유지합니다.</p>

<h2>6. Google Meet(Chrome)를 100% 이상으로 증폭</h2>

<p>모든 것을 확인한 후에도 Meet가 여전히 너무 조용하다면, Chrome의 오디오를 macOS가 허용하는 것 이상으로 증폭해야 합니다.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>은 Chrome에 <strong>200%</strong>까지 올라가는 자체 볼륨 슬라이더를 제공합니다. Google Meet가 Chrome 안에서 실행되므로 Chrome을 증폭하면 Meet가 증폭됩니다. 슬라이더를 150% 또는 180%로 드래그하면 통화 오디오가 실시간으로 증폭됩니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial이 macOS에서 Google Meet(Chrome) 볼륨을 100% 이상으로 증폭" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Safari에서 Meet를 사용하는 경우에도 작동합니다. SoundDial은 각 브라우저를 독립적으로 제어합니다 — 다른 모든 것을 위한 Chrome을 정상 볼륨으로 유지하면서 Meet를 위한 Safari를 증폭하세요.</p>

<p>그리고 자동 더킹으로 Meet 통화가 시작되면(마이크가 활성화되면) 배경 음악이 자동으로 낮아지고 통화가 끝나면 복원됩니다.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>에서 제공 — Apple 검토, €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>
`,
  },
  "mac-alert-volume-separate-from-media": {
    slug: "mac-alert-volume-separate-from-media",
    title: "Mac 경고 볼륨을 미디어 볼륨과 별도로 설정하는 방법",
    description:
      "macOS에는 숨겨진 경고 볼륨 슬라이더가 있지만 시스템 사운드만 커버합니다. Mac에서 알림 볼륨과 미디어 볼륨을 실제로 분리하는 방법을 알아보세요.",
    date: "2026-05-02",
    readTime: "5분 소요",
    content: `
<p>음악이 완벽한 레벨입니다. 그런데 macOS 경고 소리가 울립니다 — "Funk"이나 "Tink" 효과음 — 음악에 비해 고통스러울 정도로 큽니다. 또는 반대: 조용한 배경 음악을 위해 시스템 볼륨이 낮아서 경고가 안 들립니다.</p>

<p>두 개의 별도 볼륨 컨트롤을 원합니다: 하나는 미디어(음악, 통화, 비디오)용, 하나는 경고 및 알림용. macOS는 이것을 부분적으로 지원하지만 완전한 솔루션에는 타사 도구가 필요합니다.</p>

<h2>macOS의 내장 경고 볼륨</h2>

<p>macOS에는 별도의 경고 볼륨이 있습니다. <strong>시스템 설정 → 사운드</strong>로 이동하여 <strong>"경고 볼륨"</strong> 슬라이더를 찾으세요. 이것은 macOS 시스템 사운드 — 오류 비프, 휴지통 비우기, 스크린샷 셔터 — 의 볼륨을 주 시스템 볼륨과 독립적으로 제어합니다.</p>

<p>어떤 경고 소리를 사용할지와 "효과음 재생 위치"를 선택한 출력 장치 또는 내장 스피커로 할지도 선택할 수 있습니다.</p>

<h3>경고 볼륨이 제어하는 것</h3>
<ul>
  <li>macOS 시스템 경고 소리 (Funk, Tink, Bottle 등)</li>
  <li>Finder 소리 (휴지통, 파일 복사 완료)</li>
  <li>일부 내장 앱 소리</li>
</ul>

<h3>제어하지 않는 것</h3>
<ul>
  <li>Slack 알림 소리</li>
  <li>Discord 알림 소리</li>
  <li>Teams/Zoom 소리</li>
  <li>Mail 알림 소리</li>
  <li>모든 타사 앱 알림 소리</li>
  <li>브라우저 알림 소리</li>
</ul>

<p>타사 앱은 자체 오디오 엔진을 통해 알림 소리를 재생합니다 — 시스템 경고가 아닌 일반 앱 오디오로 취급됩니다. 경고 볼륨 슬라이더는 이에 영향을 주지 않습니다. 이것은 가장 짜증나는 알림 소리를 내는 앱(Slack, Discord, Teams)이 macOS의 경고 볼륨이 건드릴 수 없는 앱이라는 것을 의미합니다.</p>

<h2>진짜 해결법: 알림 앱의 앱별 볼륨</h2>

<p>알림 볼륨과 미디어 볼륨을 진정으로 분리하려면 앱별 볼륨 제어가 필요합니다. Slack을 15%, Discord를 20%, Mail을 10%로 설정하세요 — Spotify를 50%, 브라우저를 60%로 유지하면서.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>은 모든 앱에 자체 볼륨 슬라이더를 제공합니다. 알림이 많은 앱을 눈에 띄지만 거슬리지 않는 미세한 레벨로, 미디어 앱은 편안한 청취 볼륨으로 설정할 수 있습니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial이 macOS에서 알림 앱 볼륨을 미디어 앱 볼륨과 분리" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>설정 예시</h3>
<p><strong>미디어 앱:</strong></p>
<ul>
  <li>Spotify: 50%</li>
  <li>Safari/Chrome: 60%</li>
  <li>QuickTime/VLC: 70%</li>
</ul>

<p><strong>알림 앱:</strong></p>
<ul>
  <li>Slack: 15%</li>
  <li>Discord: 20%</li>
  <li>Mail: 10%</li>
  <li>Calendar: 25%</li>
</ul>

<p><strong>커뮤니케이션 앱:</strong></p>
<ul>
  <li>Zoom/Teams: 100%</li>
  <li>FaceTime: 100%</li>
</ul>

<p>이것을 프로필로 저장하고 한 번의 클릭으로 적용하세요. macOS가 기본적으로 제공하지 않는 알림 볼륨과 미디어 볼륨의 분리 — 1분 이내에 완료.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>에서 제공 — Apple 검토, €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>
`,
  },
  "facetime-volume-too-low-mac": {
    slug: "facetime-volume-too-low-mac",
    title: "Mac에서 FaceTime 통화 볼륨이 너무 작은가요? 해결 방법",
    description:
      "최대 볼륨에서도 Mac에서 FaceTime 오디오가 거의 들리지 않습니다. 사운드 설정부터 FaceTime을 100% 이상으로 증폭하는 방법까지 모든 해결책을 알아보세요.",
    date: "2026-05-04",
    readTime: "5분 소요",
    content: `
<p>iPhone에서의 FaceTime 통화는 괜찮습니다. 하지만 Mac에서는 상대방이 세 방 건너에서 속삭이는 것처럼 들립니다. 볼륨은 최대입니다. 생각할 수 있는 모든 것을 확인했습니다. 여전히 너무 조용합니다.</p>

<p>Mac에서의 낮은 FaceTime 볼륨은 흔한 문제이며, 여러 가능한 원인이 있습니다. 하나씩 살펴보겠습니다.</p>

<h2>1. 출력 장치 확인</h2>

<p>시스템 설정 → 사운드 → 출력으로 이동하세요. 올바른 장치가 선택되어 있는지 확인하세요. 최근에 헤드폰, 디스플레이 또는 Bluetooth 장치를 연결하거나 분리한 경우 macOS가 예상치 못한 출력으로 자동 전환했을 수 있습니다 — 거의 기능하지 않는 내장 스피커가 있는 모니터처럼.</p>

<h2>2. FaceTime의 오디오 설정 확인</h2>

<p>FaceTime 통화 중 메뉴 바를 클릭하고 FaceTime → 비디오 → 오디오 출력에서 올바른 출력 장치를 선택하세요. FaceTime은 특히 장치 전환 후 시스템 기본값과 다른 출력 장치를 사용할 때가 있습니다.</p>

<h2>3. AirPods 자동 전환 비활성화</h2>

<p>여러 Apple 기기에 AirPods가 페어링되어 있으면 통화 중에 Mac에서 자동 전환될 수 있습니다. 시스템 설정 → Bluetooth → AirPods 옆의 "i" 클릭 → "이 Mac에 연결" → "자동"이 아닌 "이 Mac에 마지막으로 연결된 경우"로 설정하여 통화 중 전환을 방지하세요.</p>

<h2>4. Bluetooth 코덱 문제</h2>

<p>FaceTime과 함께 AirPods이나 Bluetooth 헤드폰을 사용하면 AAC에서 SCO 코덱으로의 전환이 트리거됩니다(FaceTime이 마이크를 사용하므로). SCO는 오디오 품질과 볼륨을 감소시킵니다. AirPods를 고품질 AAC 모드로 유지하기 위해 별도의 마이크(내장 Mac 마이크 또는 USB)를 사용하세요.</p>

<h2>5. 헤드폰 안전이 볼륨을 제한</h2>

<p>시스템 설정 → 사운드 → 헤드폰 안전. "큰 오디오 줄이기"가 켜져 있으면 macOS가 헤드폰 볼륨을 제한하고 있습니다. 비활성화하거나 임계값을 높이세요.</p>

<h2>6. Core Audio 재설정</h2>

<p>터미널을 열고 실행하세요:</p>
<p><code>sudo killall coreaudiod</code></p>
<p>오디오 데몬을 재시작하고 고정된 저볼륨 상태를 해결할 수 있습니다. 오디오가 재시작된 후 FaceTime 통화에 다시 참여하세요.</p>

<h2>7. FaceTime 볼륨을 100% 이상으로 증폭</h2>

<p>모든 설정이 올바른데 FaceTime이 여전히 너무 조용하다면 — 상대방의 마이크가 약할 수 있습니다 — macOS의 제한을 넘어 증폭해야 합니다.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>로 FaceTime의 볼륨을 <strong>200%</strong>까지 증폭할 수 있습니다. 메뉴 바 패널을 열고 FaceTime을 찾아 슬라이더를 100% 이상으로 드래그하세요. 통화 오디오가 다른 앱에 영향을 주지 않고 실시간으로 증폭됩니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial이 macOS에서 FaceTime 통화 볼륨을 100% 이상으로 증폭" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>SoundDial은 반대의 경우에도 도움이 됩니다: 집중 시간에 FaceTime의 벨소리나 알림 소리가 너무 크면 FaceTime을 20%로 낮추거나 음소거하면서 음악은 계속 재생하세요. 한 번의 클릭으로 음소거, 한 번의 클릭으로 해제.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>에서 제공 — Apple 검토, 샌드박스, 일회성 구매, 구독 없음.</p>
`,
  },
  "mac-volume-keyboard-shortcuts": {
    slug: "mac-volume-keyboard-shortcuts",
    title: "아마 모르셨을 Mac 볼륨 키보드 단축키",
    description:
      "기본 볼륨 키 이상 — 세밀한 제어, 특정 앱 음소거, 앱별 볼륨 단축키. Mac 오디오 키보드 트릭을 모두 설명합니다.",
    date: "2026-05-06",
    readTime: "5분 소요",
    content: `
<p>모든 Mac 사용자가 볼륨 올리기/내리기/음소거 키를 알고 있습니다. 누르면 시스템 볼륨이 변합니다. 하지만 macOS에는 대부분의 사람들이 발견하지 못하는 여러 숨겨진 오디오 제어 키보드 트릭이 있습니다 — 타사 단축키까지 포함하면 볼륨 관리가 극적으로 빨라집니다.</p>

<h2>모두가 알아야 할 내장 단축키</h2>

<h3>세밀한 볼륨 조정</h3>
<p><strong>Option + Shift</strong>를 누른 채 볼륨 올리기 또는 내리기 키를 누르세요. 각 누름은 일반 단계의 <strong>4분의 1</strong>만큼 볼륨을 조정하여 16단계 대신 64단계를 제공합니다. 밤 늦게 적절한 헤드폰 볼륨을 찾거나 두 일반 단계 사이의 점프가 너무 클 때 필수적입니다.</p>

<h3>무음 볼륨 조정</h3>
<p><strong>Shift</strong>를 누른 채 볼륨 올리기 또는 내리기를 누르세요. 볼륨이 변하지만 오디오 피드백 "팝" 소리가 억제됩니다. 통화나 프레젠테이션 중에 볼륨을 조정할 때 팝 소리가 모두에게 방송되는 것을 원하지 않을 때 유용합니다.</p>

<h3>사운드 설정으로 바로 가기</h3>
<p><strong>Option</strong>을 누른 채 아무 볼륨 키나 누르면 시스템 설정 → 사운드가 직접 열립니다. 시스템 설정을 수동으로 탐색하는 것보다 빠릅니다.</p>

<h3>빠른 출력 장치 전환</h3>
<p><strong>Option</strong>을 누른 채 메뉴 바의 사운드 아이콘을 클릭하면 사용 가능한 모든 출력(및 입력) 장치 목록이 표시됩니다. 하나를 클릭하면 즉시 전환됩니다. 시스템 설정을 열 필요 없습니다.</p>

<h2>macOS 키보드 단축키로 할 수 없는 것</h2>

<p>위의 모든 단축키는 <strong>시스템 볼륨</strong>을 제어합니다 — 모든 앱에 동일하게 영향을 주는 하나의 슬라이더. 다음을 위한 내장 키보드 단축키는 없습니다:</p>

<ul>
  <li>특정 앱의 볼륨 조정</li>
  <li>모든 것을 음소거하지 않고 하나의 앱 음소거</li>
  <li>저장된 볼륨 구성 간 전환</li>
  <li>볼륨 믹서 패널 토글</li>
</ul>

<p>macOS에는 단순히 앱별 볼륨 제어가 없으므로 이에 대한 단축키가 없습니다.</p>

<h2>SoundDial의 앱별 볼륨 키보드 단축키</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>은 macOS가 할 수 있는 것을 확장하는 두 가지 전역 키보드 단축키를 추가합니다:</p>

<h3>볼륨 믹서 토글: Control + Option + S</h3>
<p>어디서든 <strong>⌃⌥S</strong>를 누르면 SoundDial의 팝오버가 메뉴 바에 열리며 모든 앱과 자체 볼륨 슬라이더를 표시합니다. 필요한 것을 조정하고 단축키를 다시 누르거나(또는 클릭하여) 닫으세요. 현재 앱을 떠나지 않습니다.</p>

<h3>모든 앱 음소거: Control + Option + M</h3>
<p><strong>⌃⌥M</strong>을 누르면 모든 앱의 오디오가 즉시 음소거됩니다. 다시 누르면 모든 것이 음소거 해제되어 각 앱이 이전 볼륨으로 복원됩니다. 이것은 음소거 키보다 빠른 "즉각적인 정적" 버튼이며 — 시스템 음소거 키와 달리 음소거 해제 시 앱별 볼륨을 복원합니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 키보드 단축키 — Control+Option+S로 토글, Control+Option+M으로 모두 음소거" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>키보드 중심 워크플로우</h2>

<p>SoundDial의 단축키가 활성화되면 마우스를 건드리지 않고 모든 오디오를 관리할 수 있습니다:</p>

<ol>
  <li><strong>⌃⌥S</strong> — 믹서 열기</li>
  <li>화살표 키 또는 마우스를 사용하여 개별 슬라이더 조정</li>
  <li><strong>⌃⌥S</strong> — 믹서 닫기</li>
  <li><strong>⌃⌥M</strong> — 누군가 방에 들어오면 즉각적인 음소거</li>
  <li><strong>⌃⌥M</strong> — 나가면 음소거 해제, 모든 것이 정상으로</li>
</ol>

<p><strong>볼륨 프로필</strong>(한 번의 클릭으로 전환하는 저장된 구성)과 결합하면 개별적으로 열지 않고도 여러 앱의 오디오를 관리할 수 있습니다.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>
`,
  },
  "background-music-app-not-working-mac": {
    slug: "background-music-app-not-working-mac",
    title: "macOS에서 Background Music 앱이 작동하지 않나요? 대안을 알아보세요",
    description:
      "무료 Background Music 앱이 macOS 업데이트 후 작동이 멈췄나요? 왜 고장나는지, 어떻게 해야 하는지, 2026년에 실제로 작동하는 최고의 대안을 알아보세요.",
    date: "2026-06-08",
    readTime: "5분 소요",
    content: `
<p>Background Music은 기본적인 앱별 볼륨 제어를 제공하는 인기 있는 무료 오픈 소스 Mac 앱입니다. 가상 오디오 장치를 설치하고 모든 오디오를 그것을 통해 라우팅하여 작동합니다. 문제: 고장납니다. 정기적으로.</p>

<p>거의 모든 macOS 업데이트 — Ventura, Sonoma, Sequoia, Tahoe — 후에 사용자들이 같은 문제를 보고합니다: 가상 오디오 장치 설치 실패, 오디오 글리치 및 끊김 발생, 일부 앱 감지 불가, 또는 실행 시 앱 충돌. "Background Music 작동 안 함"을 검색했다면 혼자가 아닙니다.</p>

<h2>Background Music이 계속 고장나는 이유</h2>

<p>Background Music은 <strong>가상 오디오 장치 드라이버</strong>(Core Audio HAL 플러그인)를 설치하여 작동합니다. macOS가 모든 시스템 오디오를 이 가상 장치를 통해 라우팅하고 Background Music이 이를 가로채 앱별 볼륨 제어를 적용합니다.</p>

<p>문제는 Apple이 거의 모든 주요 macOS 릴리스에서 오디오 드라이버 작동 방식을 변경한다는 것입니다. 보안 제한이 강화되고, API가 변하고, 드라이버 로딩 메커니즘이 발전합니다. Background Music은 자원봉사자가 유지 관리하는 오픈 소스 프로젝트이므로 Apple의 변경사항에 맞춘 업데이트가 항상 적시에 이루어지지는 않습니다.</p>

<p>macOS 업데이트 후 흔한 문제:</p>
<ul>
  <li><strong>가상 오디오 장치 설치 안 됨</strong> — macOS의 새로운 보안 정책이 드라이버를 차단</li>
  <li><strong>오디오 끊김 또는 더듬거림</strong> — 가상 장치가 현재 macOS 버전이 잘 처리하지 못하는 레이턴시 도입</li>
  <li><strong>앱이 나타나지 않음</strong> — macOS가 실행 중인 프로세스를 보고하는 방식 변경이 앱 감지를 중단</li>
  <li><strong>오디오 전혀 없음</strong> — 가상 장치가 기본 출력으로 설정되었지만 오디오를 통과시키지 않음</li>
  <li><strong>실행 시 충돌</strong> — 현재 macOS 버전과 비호환</li>
</ul>

<h2>Background Music 수정 방법</h2>

<p>Background Music이 현재 고장난 경우:</p>

<ol>
  <li><strong>업데이트 확인:</strong> Background Music의 GitHub 릴리스 페이지를 방문하여 현재 macOS 버전에 대한 새 버전이 릴리스되었는지 확인.</li>
  <li><strong>재설치:</strong> Background Music을 완전히 제거(가상 오디오 장치 포함)하고 재시작한 후 최신 버전 설치.</li>
  <li><strong>오디오 재설정:</strong> 오디오가 가상 장치에 고정된 경우 시스템 설정 → 사운드 → 출력으로 이동하여 실제 스피커/헤드폰을 선택. 터미널에서 <code>sudo killall coreaudiod</code>를 실행.</li>
  <li><strong>권한 확인:</strong> 시스템 설정 → 개인정보 및 보안 — Background Music에 필요한 권한이 있는지 확인.</li>
</ol>

<h2>가상 오디오 장치를 사용하지 않는 대안</h2>

<p>Background Music의 근본적 문제는 구조적입니다: 가상 오디오 장치는 취약하고 macOS 업데이트에 고장납니다. 현대적 대안은 Apple의 <strong>Core Audio Tap API</strong>(macOS 14에서 도입)를 사용하여 시스템 레벨 드라이버를 설치하지 않고 프로세스별 오디오를 가로챕니다.</p>

<h3>SoundDial</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>은 최신 Audio Tap API를 사용합니다 — 가상 오디오 장치 없음, 시스템 드라이버 없음, 커널 확장 없음. Apple의 지원 API를 사용하여 각 앱의 오디오 스트림에 직접 탭하므로 macOS 업데이트 시 고장나지 않습니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 가상 오디오 장치를 설치하지 않는 Background Music 대안" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>Background Music에 비해 얻는 것:</p>
<ul>
  <li><strong>가상 오디오 장치 없음</strong> — Apple의 네이티브 오디오 스택으로 작동, 업데이트 시 고장나지 않음</li>
  <li><strong>200%까지 볼륨 부스트</strong> — Background Music은 100%에서 최대</li>
  <li><strong>볼륨 프로필</strong> — 구성 저장 및 전환(Background Music에는 없음)</li>
  <li><strong>자동 더킹</strong> — 통화 중 자동 볼륨 감소(Background Music은 자동 일시 정지만 있고 더킹은 없음)</li>
  <li><strong>볼륨 메모리</strong> — 재시작 간 앱별 볼륨 기억</li>
  <li><strong>키보드 단축키</strong> — 믹서 토글 또는 모든 앱 음소거</li>
  <li><strong>활발한 개발</strong> — 최신 macOS에 정기적으로 업데이트</li>
</ul>

<p>트레이드오프: SoundDial은 일회성 유료 구매이고 Background Music은 무료입니다. 하지만 실제로 작동하는 앱이 6개월마다 고장나는 무료 앱보다 가치가 있습니다. 그리고 SoundDial은 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>에 있으므로 Apple이 검토하고, 보안을 위해 샌드박스되며, 깔끔하게 설치됩니다 — GitHub에서 다운로드하거나, 소스에서 컴파일하거나, 시스템 확장 권한을 부여할 필요 없습니다.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>
`,
  },
  "soundsource-alternative-mac": {
    slug: "soundsource-alternative-mac",
    title: "SoundSource 대안: Mac을 위한 더 가볍고 저렴한 앱별 볼륨 제어",
    description:
      "SoundSource는 강력하지만 비싸고 복잡합니다. 오디오 엔지니어링 툴킷 없이 앱별 볼륨 제어만 필요하다면 대신 사용할 것을 알아보세요.",
    date: "2026-06-06",
    readTime: "6분 소요",
    content: `
<p>Rogue Amoeba의 SoundSource는 Mac용 가장 오래된 앱별 볼륨 제어 앱입니다. 강력하고 잘 만들어졌으며 앱별 EQ, 오디오 이펙트 체인, 앱별 출력 라우팅 같은 기능이 있습니다. 또한 $39이고, 시스템 오디오 드라이버(ACE)가 필요하며, 대부분의 사람들이 사용할 것보다 더 많은 기능이 있습니다.</p>

<p>Zoom에 영향을 주지 않고 Spotify를 낮추기만 하면 되고 — 완전한 오디오 엔지니어링 툴킷이 필요 없다면 — SoundSource는 필요 이상일 수 있습니다. 고려해야 할 것은 다음과 같습니다.</p>

<h2>SoundSource의 장점</h2>

<p>공정하게 — SoundSource는 세련되고 전문적인 앱입니다:</p>
<ul>
  <li><strong>앱별 볼륨 제어</strong> — 세밀한 슬라이더</li>
  <li><strong>앱별 EQ</strong> — 내장 이퀄라이저 및 Audio Unit 플러그인 지원</li>
  <li><strong>앱별 출력 라우팅</strong> — 다른 앱을 다른 스피커로 전송</li>
  <li><strong>볼륨 부스트</strong> — 100% 이상</li>
  <li><strong>시스템 전체 오디오 이펙트</strong></li>
</ul>

<p>앱별 EQ 및 이펙트 체인이 필요한 팟캐스터, 스트리머 또는 오디오 전문가라면 SoundSource가 맞춤 제작된 앱입니다.</p>

<h2>일반 사용자에게 SoundSource가 부족한 점</h2>

<h3>가격</h3>
<p>볼륨 제어 앱에 $39 USD는 비쌉니다. EQ, 오디오 이펙트 또는 앱별 라우팅을 사용하지 않는다면 건드리지 않을 기능에 대해 돈을 내는 것입니다.</p>

<h3>시스템 드라이버</h3>
<p>SoundSource는 ACE(Audio Capture Engine)라는 커스텀 시스템 오디오 드라이버를 설치합니다. 잘 작동하지만 복잡성을 추가합니다 — 각 macOS 릴리스마다 업데이트해야 하고, 때때로 다른 오디오 소프트웨어와 충돌할 수 있으며, 시스템 오디오 레벨에서 타사 코드를 실행한다는 것을 의미합니다. 기업 환경의 일부 IT 부서는 커널 확장과 시스템 레벨 오디오 드라이버를 차단합니다.</p>

<h3>볼륨 프로필 없음</h3>
<p>광범위한 기능 세트에도 불구하고 SoundSource에는 프로필 시스템이 없습니다. "회의" 구성과 "집중" 구성을 저장하고 전환할 수 없습니다. 상황이 바뀔 때마다 각 슬라이더를 수동으로 조정합니다.</p>

<h3>자동 더킹 없음</h3>
<p>SoundSource는 통화에 참여할 때 배경 오디오를 자동으로 낮추지 않습니다. 통화 감지 없음, 자동 볼륨 조정 없음, 앱별 믹서의 가장 일반적인 사용 사례에 대한 핸즈프리 워크플로우 없음.</p>

<h2>SoundDial: 대부분의 사람들이 실제로 필요한 것에 집중</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>은 다른 접근 방식을 취합니다: 핵심 기능을 완벽하게, 대부분의 사람들이 필요 없는 기능은 건너뛰고, SoundSource가 놓치는 워크플로우 기능을 추가합니다.</p>

<table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;">
<thead>
<tr style="border-bottom:2px solid rgba(255,255,255,0.2);">
  <th style="text-align:left;padding:10px 12px;color:rgba(255,255,255,0.6);">기능</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundDial</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundSource</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);"><td style="padding:10px 12px;">앱별 볼륨</td><td style="text-align:center;padding:10px 12px;">예 (0-200%)</td><td style="text-align:center;padding:10px 12px;">예</td></tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);"><td style="padding:10px 12px;">앱별 음소거</td><td style="text-align:center;padding:10px 12px;">예</td><td style="text-align:center;padding:10px 12px;">예</td></tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);"><td style="padding:10px 12px;">볼륨 프로필</td><td style="text-align:center;padding:10px 12px;">예</td><td style="text-align:center;padding:10px 12px;">아니오</td></tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);"><td style="padding:10px 12px;">자동 더킹</td><td style="text-align:center;padding:10px 12px;">예</td><td style="text-align:center;padding:10px 12px;">아니오</td></tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);"><td style="padding:10px 12px;">볼륨 메모리</td><td style="text-align:center;padding:10px 12px;">예</td><td style="text-align:center;padding:10px 12px;">예</td></tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);"><td style="padding:10px 12px;">앱별 EQ</td><td style="text-align:center;padding:10px 12px;">아니오</td><td style="text-align:center;padding:10px 12px;">예</td></tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);"><td style="padding:10px 12px;">앱별 출력 라우팅</td><td style="text-align:center;padding:10px 12px;">아니오</td><td style="text-align:center;padding:10px 12px;">예</td></tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);"><td style="padding:10px 12px;">시스템 오디오 드라이버</td><td style="text-align:center;padding:10px 12px;">불필요</td><td style="text-align:center;padding:10px 12px;">필요 (ACE)</td></tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);"><td style="padding:10px 12px;">키보드 단축키</td><td style="text-align:center;padding:10px 12px;">예</td><td style="text-align:center;padding:10px 12px;">예</td></tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);"><td style="padding:10px 12px;">가격</td><td style="text-align:center;padding:10px 12px;">€14.99 일회성</td><td style="text-align:center;padding:10px 12px;">$39 USD</td></tr>
</tbody>
</table>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 볼륨 프로필과 자동 더킹이 있는 더 가볍고 집중된 SoundSource 대안" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h2>어떤 것을 선택해야 하나요?</h2>

<ul>
  <li><strong>SoundSource를 선택하는 경우:</strong> 앱별 EQ, 오디오 이펙트 체인 또는 앱별 출력 라우팅이 필요한 경우. 팟캐스터, 스트리머 또는 오디오 전문가인 경우. 가격과 시스템 드라이버가 상관없는 경우.</li>
  <li><strong><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>을 선택하는 경우:</strong> 프로필과 자동 더킹이 있는 앱별 볼륨 제어를 원하는 경우. 시스템 드라이버를 설치하지 않는 더 가벼운 것을 원하는 경우. 더 적게 지출하고 싶은 경우. 원격 근무자, 게이머, 학생 또는 Zoom에 영향을 주지 않고 Slack을 줄이고 싶은 모든 사람인 경우.</li>
</ul>

<p>SoundDial은 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>에서 제공됩니다 — Apple이 검토하고, 보안을 위해 샌드박스되며, 다른 App Store 앱처럼 깔끔하게 설치/제거됩니다. 임의 웹사이트에서 DMG를 다운로드하거나, 시스템 드라이버를 설치하거나, 커널 확장 권한을 부여할 필요 없습니다. 일회성 구매, 구독 없음.</p>
`,
  },
  "mac-volume-too-loud-at-lowest-setting": {
    slug: "mac-volume-too-loud-at-lowest-setting",
    title: "Mac 볼륨이 최소 설정에서도 너무 큰가요? 더 조용하게 만드는 방법",
    description:
      "가장 낮은 볼륨 단계에서도 Mac이 너무 큽니다 — 특히 밤 늦게 헤드폰으로. 더 세밀한 볼륨 제어와 최소값 이하로 가는 방법을 알아보세요.",
    date: "2026-05-08",
    readTime: "5분 소요",
    content: `
<p>자정입니다. 헤드폰을 쓰고 있습니다. 볼륨 내리기 키를 가장 낮은 단계까지 누릅니다 — 한 칸. 여전히 너무 큽니다. 다음 누름은 음소거입니다. 그 사이에 아무것도 없습니다. 3%를 원하지만 macOS는 ~6%에서 0%로 점프합니다.</p>

<p>이것은 헤드폰과 민감한 스피커에서 흔한 불만입니다. macOS의 16단계 볼륨은 너무 거칩니다 — 가장 낮은 가청 단계는 여전히 조용한 야간 청취에 필요한 것보다 큽니다.</p>

<h2>내장 해결법: 4분의 1 단계 볼륨 조정</h2>

<p>대부분의 Mac 사용자가 모르는 것: 키보드 수정자를 사용하여 <strong>4배 더 세밀한 볼륨 제어</strong>를 얻을 수 있습니다.</p>

<p><strong>Option + Shift</strong>를 누른 채 볼륨 올리기/내리기 키를 누르세요. 각 누름은 일반 단계의 4분의 1만큼 볼륨을 조정하여 16단계 대신 64단계를 제공합니다.</p>

<p>이것으로 일반 단계 사이의 볼륨 레벨을 찾을 수 있습니다. "한 칸"과 "음소거" 사이의 간격에 이제 세 개의 추가 레벨이 있습니다. 야간 헤드폰 청취에는 이것으로 편안한 레벨을 찾기에 충분한 경우가 많습니다.</p>

<h2>왜 같은 볼륨에서 일부 콘텐츠가 더 큰가</h2>

<p>같은 시스템 볼륨에서 일부 앱이 다른 것보다 더 크게 느껴질 수 있습니다. 한 칸의 Spotify가 한 칸의 YouTube 비디오보다 더 크게 느껴집니다. 이것은 각 앱이 다른 레벨로 오디오를 출력하고 시스템 볼륨이 비례적으로 스케일링하기 때문입니다.</p>

<p>0 dB(최대)로 마스터링된 곡과 -15 dB로 녹음된 팟캐스트는 같은 시스템 볼륨에서 극적으로 다르게 들립니다. 곡이 15 dB 더 큽니다 — 귀에는 대략 세 배 더 크게 인지됩니다.</p>

<h2>진짜 해결법: 세밀한 제어를 위한 앱별 볼륨</h2>

<p>4분의 1 단계 단축키가 도움이 되지만 여전히 모든 앱을 동일하게 조정합니다. 가장 낮은 단계에서 Spotify가 너무 크지만 가장 낮은 단계에서 Zoom 통화가 너무 조용하면 선택의 여지가 없습니다.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>은 세밀한 제어의 앱별 볼륨 슬라이더를 제공합니다 — 각 슬라이더가 0%에서 200%까지 1% 단위로 이동합니다. Spotify를 5%, Zoom을 40%로 동시에 설정할 수 있습니다. 제어의 정밀도가 macOS의 16단계 시스템 단계보다 극적으로 세밀합니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial macOS에서 1% 단위의 세밀한 앱별 볼륨 제어" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>야간 헤드폰 사용:</p>
<ul>
  <li>시스템 볼륨을 적당한 레벨로 설정 (40-50%)</li>
  <li>SoundDial로 각 앱을 정확히 원하는 레벨로 미세 조정</li>
  <li>Spotify 8% — 아주 은은한 배경 음악</li>
  <li>브라우저 15% — 야간 비디오에 충분히 조용</li>
  <li>알림 음소거 — 갑작스러운 큰 알림 없음</li>
</ul>

<p>이것을 "야간" 프로필로 저장하고 퇴근 후 헤드폰을 쓸 때 한 번의 클릭으로 적용하세요.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>
`,
  },
  "one-airpod-louder-than-the-other-fix": {
    slug: "one-airpod-louder-than-the-other-fix",
    title: "AirPod 한쪽이 다른 쪽보다 큰가요? 모든 해결 방법 설명",
    description:
      "왼쪽 AirPod이 오른쪽보다 조용합니다(또는 반대). 귀지부터 macOS 밸런스 설정까지 모든 원인과 해결 방법을 알아보세요.",
    date: "2026-05-10",
    readTime: "5분 소요",
    content: `
<p>한쪽 AirPod은 괜찮습니다. 다른 쪽은 눈에 띄게 더 조용합니다. 음악이 중심이 벗어난 것처럼 들립니다. 목소리가 한쪽에서만 나오는 것 같습니다. 이것은 가장 흔한 AirPods 불만 중 하나이며 대개 간단한 해결책이 있습니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>1. AirPods 청소</h2>

<p>가장 흔한 원인은 물리적입니다: 귀지나 이물질이 한쪽 AirPod의 스피커 메시를 부분적으로 막고 있습니다. 얇은 층의 축적도 해당 측의 볼륨을 상당히 줄일 수 있습니다.</p>

<p><strong>청소 방법:</strong></p>
<ul>
  <li>부드러운 솔(깨끗한 칫솔도 가능)을 사용하여 스피커 메시를 부드럽게 브러싱</li>
  <li>AirPods Pro 실리콘 팁: 팁을 제거하고 팁과 그 아래의 스피커 메시 모두 청소</li>
  <li>외부에는 마른 보풀 없는 천 사용</li>
  <li><strong>사용하지 마세요:</strong> 물, 알코올, 압축 공기 또는 뾰족한 물체 — 스피커 메시를 손상시키거나 이물질을 더 안으로 밀어넣을 수 있음</li>
</ul>

<p>청소 후 양쪽 AirPods를 테스트하세요. 대부분의 경우 즉시 문제가 해결됩니다.</p>

<h2>2. macOS의 오디오 밸런스 확인</h2>

<p>macOS에는 중앙에서 벗어날 수 있는 좌우 오디오 밸런스 슬라이더가 있습니다:</p>

<ol>
  <li><strong>시스템 설정 → 손쉬운 사용 → 오디오</strong>로 이동</li>
  <li><strong>밸런스</strong> 슬라이더 찾기</li>
  <li>L과 R 사이 정확히 중앙에 있는지 확인</li>
</ol>

<p>슬라이더가 한쪽으로 이동했다면 그것이 원인입니다. 중앙에 놓으면 양쪽 볼륨이 동일해집니다.</p>

<p><strong>시스템 설정 → 사운드</strong>도 확인하세요 — 일부 macOS 버전은 출력 장치 설정에도 밸런스 슬라이더가 있습니다.</p>

<h2>3. AirPods 재설정</h2>

<p>청소와 밸런스가 도움이 되지 않으면 AirPods를 공장 초기화해 보세요:</p>

<ol>
  <li>양쪽 AirPods를 충전 케이스에 넣기</li>
  <li>덮개를 닫고 30초 대기</li>
  <li>덮개 열기</li>
  <li>케이스 뒤의 설정 버튼을 상태 표시등이 호박색으로 깜빡인 다음 흰색이 될 때까지 15초간 누르고 있기</li>
  <li>Mac과 AirPods 다시 페어링 (시스템 설정 → Bluetooth)</li>
</ol>

<p>저장된 오디오 보정을 재설정하고 소프트웨어 측 볼륨 불균형을 해결할 수 있습니다.</p>

<h2>4. 모노 오디오 확인</h2>

<p>macOS의 모노 오디오 손쉬운 사용 기능이 활성화되어 있으면 스테레오 오디오가 단일 채널로 혼합되어 양쪽 AirPods에 동일하게 전송됩니다. 이것은 볼륨 차이를 일으키지 않아야 하지만 특정 콘텐츠가 들리는 방식을 변경하여 한쪽이 "다르게" 느껴지게 할 수 있습니다.</p>

<p>확인: 시스템 설정 → 손쉬운 사용 → 오디오 → "모노 오디오"가 꺼져 있는지 확인(필요하지 않는 한).</p>

<h2>5. Bluetooth 간섭</h2>

<p>AirPods는 Bluetooth를 통해 Mac과 통신하고 각 AirPod도 다른 쪽과 통신합니다. 상당한 Bluetooth 간섭(WiFi 라우터, USB 3.0 허브, 기타 Bluetooth 장치)이 있으면 한쪽 AirPod이 더 약한 신호를 받을 수 있습니다.</p>

<p><strong>해결:</strong> Mac에 더 가까이 이동하세요. 사용하지 않는 Bluetooth 장치를 연결 해제하세요. USB 3.0 허브 근처에 있으면 옮겨보세요 — USB 3.0은 2.4 GHz Bluetooth와 간섭합니다.</p>

<h2>6. 하드웨어 문제</h2>

<p>위의 어떤 해결 방법도 효과가 없으면 한쪽 AirPod에 하드웨어 결함이 있을 수 있습니다 — 열화된 스피커 드라이버 또는 손상된 메시. 이것은 오래 사용하면 시간이 지남에 따라 발생합니다.</p>

<p><strong>해결:</strong> Apple 지원에 연락하거나 Apple Store를 방문하세요. AirPods가 보증 기간이거나 AppleCare+가 있으면 Apple이 해당 AirPod을 교체합니다. 보증 외에서도 개별 AirPod 교체를 구매할 수 있습니다.</p>

<h2>앱별 볼륨 제어로 더 나은 오디오 밸런스</h2>

<p>앱별 볼륨 제어는 AirPods 간의 하드웨어 불균형을 해결하지 못하지만, 일부 앱이 AirPods에서 다른 것보다 더 크면 불균형의 인지를 악화시킬 수 있는 관련 문제를 해결합니다.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>로 각 앱을 일관된 볼륨 레벨로 설정할 수 있습니다. Spotify가 40%, Zoom이 100%, Safari가 60%이면 각 앱에서 무엇을 기대해야 하는지 정확히 알 수 있습니다 — 알림이 100%로 폭발해서 한쪽 AirPod이 더 크게 느껴지는 갑작스러운 볼륨 점프가 없습니다.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>
`,
  },
  "netflix-streaming-audio-too-quiet-mac": {
    slug: "netflix-streaming-audio-too-quiet-mac",
    title: "Mac에서 Netflix 및 스트리밍 오디오가 너무 조용한가요? 해결 방법",
    description: "대사가 속삭임 수준으로 조용하다가 폭발 장면에서 방이 흔들립니다. Mac에서 스트리밍 오디오 레벨을 수정하고 — 조용한 콘텐츠를 100% 이상으로 증폭하는 방법을 알아보세요.",
    date: "2026-05-17",
    readTime: "5분 소요",
    content: `
<p>Netflix에서 영화를 보고 있습니다. 두 등장인물이 대화 중 — 거의 들리지 않습니다. 볼륨을 올립니다. 액션 장면이 시작됩니다. 폭발이 귀청이 터집니다. 볼륨 키를 향해 달려갑니다. 스트리밍 오디오에 대한 가장 흔한 불만이며, Mac의 내장 스피커에서 더 심합니다.</p>

<p>문제는 Mac이 아닙니다. 영화와 TV 쇼가 마스터링되는 방식 — 그리고 macOS가 이를 수정할 도구를 제공하지 않는다는 사실입니다.</p>

<h2>왜 스트리밍 오디오의 볼륨이 크게 변동하는가</h2>

<p>영화와 TV 쇼는 높은 <strong>다이나믹 레인지</strong>로 마스터링됩니다 — 가장 조용한 소리와 가장 큰 소리의 차이. 강력한 스피커와 서브우퍼가 있는 극장에서는 놀라운 효과입니다. 속삭임은 친밀하고 폭발은 생생합니다.</p>

<p>MacBook의 2인치 스피커에서는 다이나믹 레인지가 문제가 됩니다. 조용한 부분은 작은 스피커가 명확하게 재생할 수 있는 수준 이하이고, 큰 부분은 스피커의 물리적 한계에 도달합니다. 끊임없이 볼륨을 조정하게 됩니다 — 대사를 위해 올리고 액션을 위해 내리고.</p>

<h2>해결법 1: 스트리밍 앱에서 "큰 소리 줄이기" 활성화</h2>

<p>일부 스트리밍 서비스에는 볼륨 정규화 기능이 있습니다:</p>
<ul>
  <li><strong>Netflix:</strong> 재생 중 스피커 아이콘 클릭 → "큰 소리 줄이기" 옵션이 있는지 확인(브라우저 및 네이티브 앱에서 사용 가능)</li>
  <li><strong>Apple TV+:</strong> 설정 → 손쉬운 사용 → "큰 소리 줄이기"</li>
  <li><strong>Disney+:</strong> 현재 동등한 설정 없음</li>
  <li><strong>Amazon Prime Video:</strong> "대사 부스트" 기능(해당 타이틀에 사용 가능한 경우)</li>
</ul>

<p>이 기능들은 다이나믹 레인지를 압축하여 — 조용한 소리를 더 크게, 큰 소리를 더 조용하게 만듭니다. 결과는 작은 스피커와 낮은 청취 레벨에서 더 잘 작동하는 더 균일한 볼륨입니다.</p>

<h2>해결법 2: Mac의 사운드 향상 확인</h2>

<p>일부 Mac 모델에서 macOS는 내장 스피커에 오디오 처리를 적용합니다. 시스템 설정 → 사운드에서 출력 장치에 대한 향상 옵션이 있는지 확인하세요. MacBook Pro 14" 및 16" 모델에서 스피커 시스템은 인지 볼륨에 영향을 줄 수 있는 공간 오디오 처리가 있습니다.</p>

<h2>해결법 3: 유선 헤드폰 사용</h2>

<p>헤드폰은 스피커 크기 문제를 완전히 우회합니다. 저렴한 유선 이어버드도 조용한 대사를 명확하게 재생할 수 있습니다. 드라이버가 고막 바로 옆에 있기 때문입니다. 작은 스피커에서 문제인 다이나믹 레인지가 헤드폰에서는 장점이 됩니다.</p>

<h2>해결법 4: 스트리밍 오디오를 100% 이상으로 증폭</h2>

<p>콘텐츠가 정말 너무 조용하면 — 정규화를 켜고 볼륨을 최대로 해도 — macOS가 제공하는 것 이상의 증폭이 필요합니다.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>로 모든 앱을 <strong>200%</strong>까지 증폭할 수 있습니다. Safari나 Netflix 앱이 너무 조용하면 슬라이더를 100% 이상으로 드래그하세요. 해당 앱만 스피커에 도달하기 전에 오디오가 증폭되어 효과적으로 최대 볼륨을 두 배로 만듭니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial이 더 명확한 대사와 스트리밍 오디오를 위해 Mac에서 Netflix 오디오를 180%로 증폭" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<p>특히 유용한 경우:</p>
<ul>
  <li>대사가 부드러운 조용한 외국 영화를 볼 때</li>
  <li>낮은 레벨로 마스터링된 오래된 콘텐츠를 스트리밍할 때</li>
  <li>시끄러운 환경에서 MacBook 스피커를 사용할 때</li>
  <li>하나의 스트리밍 서비스가 다른 것보다 상당히 더 조용할 때</li>
</ul>

<p>SoundDial은 각 앱을 독립적으로 제어하므로 Netflix를 150%로 증폭해도 Spotify나 Slack이 더 커지지 않습니다. 각 앱이 자체 레벨을 유지합니다.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>
`,
  },
  "mac-audio-setup-remote-work": { slug: "mac-audio-setup-remote-work", title: "원격 근무를 위한 Mac 오디오 설정: 완전 가이드", description: "통화, 음악, 알림, 집중 시간 — 모두 하나의 Mac에서. 아무것도 관심을 놓고 싸우지 않도록 오디오를 설정하는 방법을 알아보세요.", date: "2026-05-12", readTime: "8분 소요", content: `<p>Mac에서의 원격 근무는 컴퓨터가 동시에 사무실 전화, 라디오, 알림 센터, 딥 워크 스테이션이 된다는 것을 의미합니다. 이것들은 근본적으로 다른 네 가지 오디오 모드이며, macOS는 모두 같게 취급합니다: 하나의 볼륨 슬라이더, 모든 것이 같은 레벨, 우선순위를 정할 방법 없음.</p><p>이 가이드는 통화가 명확하고, 음악은 존재하지만 산만하지 않고, 알림은 미세하고, 집중 시간은 정말 조용하도록 Mac 오디오를 설정하는 방법을 안내합니다.</p><h2>원격 근무의 네 가지 오디오 모드</h2><h3>1. 회의 모드</h3><p>Zoom 또는 Teams 통화 중입니다. 통화가 수정처럼 명확해야 합니다. 음악은 무음이거나 거의 들리지 않아야 합니다. Slack이 귀에서 울리면 안 됩니다.</p><h3>2. 집중 모드</h3><p>딥 워크 중입니다. 낮은 레벨의 배경 음악이 집중에 도움됩니다. 알림은 거의 인지할 수 없어야 합니다 — 긴급 메시지를 알아차릴 정도로 존재하되, 흐름을 깨뜨리지 않을 정도로 조용하게.</p><h3>3. 협업 모드</h3><p>메시지에 응대 가능, Slack 모니터링, 트레이닝 비디오 시청. 모든 것이 적당한 레벨. 알림은 정상 볼륨.</p><h3>4. 휴식 모드</h3><p>음악 최대 볼륨. YouTube 최대 볼륨. 알림은 기다릴 수 있음.</p><h2>소프트웨어 설정: 빠진 조각</h2><p>집중 모드는 <em>어떤</em> 알림이 통과하는지 제어하지만 <em>얼마나 큰지</em>는 제어하지 않습니다. 여전히 모든 것에 대해 하나의 볼륨 슬라이더가 있습니다. Slack을 15%, Spotify를 35%, Zoom을 100%로 원한다면 — macOS는 할 수 없습니다.</p><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>이 이 간격을 채워줍니다. 모든 앱에 자체 볼륨 슬라이더를 제공합니다.</p><a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 원격 근무 오디오 설정 — macOS에서 Zoom, Spotify, Slack에 다른 볼륨 레벨" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a><h3>각 모드에 대한 프로필 저장</h3><p><strong>회의 프로필:</strong> Zoom/Teams: 100%, Spotify: 음소거, Slack: 음소거, 브라우저: 음소거</p><p><strong>집중 근무 프로필:</strong> Spotify: 30%, Slack: 10%, Zoom: 80%, 브라우저: 40%</p><p><strong>협업 프로필:</strong> 모든 것 50-70%, Slack: 30%</p><p>한 번의 클릭으로 프로필 간 전환하세요. 통화가 시작되면 SoundDial의 자동 더킹이 자동으로 통화 앱을 제외한 모든 것을 낮춥니다. 끝나면 프로필 레벨로 복원됩니다.</p><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>` },
  "stop-browser-tabs-auto-playing-audio-mac": { slug: "stop-browser-tabs-auto-playing-audio-mac", title: "Mac에서 브라우저 탭 자동 재생 오디오를 중지하는 방법", description: "배경 탭에서 갑자기 오디오가 재생됩니다. 광고, 비디오, 뉴스 사이트 — 불량 탭을 음소거하고 macOS에서 브라우저 오디오를 제어하는 방법을 알아보세요.", date: "2026-05-14", readTime: "5분 소요", content: `<p>20개의 탭이 열려 있습니다. 하나에서 작업 중입니다. 갑자기 — 어딘가에서 오디오가 재생됩니다. 비디오 광고. 자동 재생 뉴스 클립. 한 시간 전에 열었던 탭이 지금 소리를 내기로 결정했습니다.</p><h2>Safari에서 자동 재생 비활성화</h2><p>Safari에는 최고의 내장 자동 재생 컨트롤이 있습니다: Safari → 설정(⌘,) → 웹사이트 탭 → 왼쪽 사이드바에서 "자동 재생" 선택 → 하단의 기본값을 "자동 재생 안 함" 또는 "소리가 있는 미디어 중지"로 설정.</p><h2>Chrome에서 자동 재생 비활성화</h2><p><code>chrome://settings/content/sound</code>로 이동 → "사이트에서 소리 재생 가능" 토글로 기본 동작 결정. 특정 사이트를 "음소거" 목록에 추가하여 영구적으로 음소거.</p><h2>더 넓은 문제: 브라우저 오디오 vs. 나머지</h2><p>macOS는 전체 브라우저를 하나의 볼륨의 하나의 앱으로 취급합니다. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>은 브라우저에 다른 모든 앱과 독립적인 자체 볼륨 슬라이더를 제공합니다. Zoom을 100%로 유지하면서 Safari를 30%로 낮추세요. Spotify를 재생하면서 Chrome을 완전히 음소거하세요. 한 번의 클릭.</p><a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial이 macOS에서 브라우저 볼륨을 다른 앱과 독립적으로 제어" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>` },
  "discord-volume-too-loud-mac": { slug: "discord-volume-too-loud-mac", title: "Mac에서 Discord 볼륨이 너무 큰 (또는 작은) 가요? 해결 방법", description: "Discord가 게임 소리를 덮거나 팀원 말이 안 들립니다. macOS에서 Discord 볼륨을 다른 모든 것과 독립적으로 제어하는 방법을 알아보세요.", date: "2026-05-21", readTime: "5분 소요", content: `<p>Discord는 Mac에서 두 가지 볼륨 문제가 있습니다. 너무 크거나 — 알림 소리가 게임과 음악 위로 폭발 — 너무 작거나 — 게임 오디오 때문에 팀원 말이 안 들립니다. macOS가 Discord의 볼륨을 독립적으로 조정할 수 없기 때문입니다.</p><h2>진짜 문제: 시스템 레벨 볼륨 밸런스</h2><p>Discord의 내부 컨트롤은 Discord의 자체 믹스를 조정합니다. 하지만 진짜 문제는 Discord와 Mac의 나머지 모든 것 사이의 밸런스입니다. macOS가 모두에 대해 하나의 슬라이더를 제공합니다.</p><h2>SoundDial로 해결</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>은 메뉴 바에서 다른 모든 앱과 독립적인 Discord 자체 볼륨 슬라이더를 제공합니다.</p><a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial이 macOS에서 게임과 음악과 독립적으로 Discord 볼륨 제어" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a><p><strong>게이밍 설정:</strong> Discord: 100%, 게임: 40%, Spotify: 15%. <strong>집중 근무:</strong> Discord: 음소거 또는 10%, Spotify: 50%, Slack: 15%. 각각을 <strong>볼륨 프로필</strong>로 저장하고 한 번의 클릭으로 전환하세요.</p><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>` },
  "switch-audio-output-quickly-mac": { slug: "switch-audio-output-quickly-mac", title: "Mac에서 오디오 출력을 빠르게 전환하는 방법 (설정 뒤지기 없이)", description: "Mac에서 스피커, 헤드폰, 모니터 간 전환이 너무 많은 클릭이 필요합니다. 오디오 출력 장치를 즉시 변경하는 더 빠른 방법을 알아보세요.", date: "2026-05-19", readTime: "5분 소요", content: `<p>헤드폰을 빼고 스피커로 오디오를 보내고 싶습니다. 또는 AirPods를 연결했는데 macOS가 잘못된 장치를 선택합니다. 매번: 시스템 설정 → 사운드 → 출력 → 스크롤 → 클릭. 하나의 동작이어야 하는 것에 너무 많은 클릭입니다.</p><h2>방법 1: 볼륨 아이콘 Option 클릭</h2><p>가장 빠른 내장 방법입니다. <strong>Option(⌥)</strong>을 누른 채 메뉴 바의 볼륨/사운드 아이콘을 클릭하세요. 사용 가능한 모든 출력 장치 목록이 나타납니다. 원하는 것을 클릭하세요. 완료.</p><h2>방법 5: SoundDial의 내장 장치 전환기</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>은 메뉴 바 팝오버에 앱별 볼륨 슬라이더와 함께 출력 장치 선택기를 포함합니다. 한 번 클릭으로 SoundDial 열기, 한 번 클릭으로 장치 전환.</p><a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 하나의 메뉴 바 패널에서 오디오 출력 장치 전환과 앱별 볼륨 제어" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>` },
  "fix-audio-crackling-popping-mac": { slug: "fix-audio-crackling-popping-mac", title: "Mac 오디오 끊김 및 팝 소리 해결: 완전 가이드", description: "Mac 오디오가 끊기고, 팝 소리가 나고, 더듬거립니다 — 음악, 통화, 비디오 재생 중. macOS 오디오 글리치의 모든 알려진 원인과 해결 방법을 알아보세요.", date: "2026-05-16", readTime: "8분 소요", content: `<p>음악을 듣고 있는데 팝 소리가 들립니다. 그리고 끊김. 오디오가 잠깐 끊겼다가 돌아오는 더듬거림. 곡이 아닙니다 — Mac입니다. macOS의 오디오 끊김은 미칠 듯이 흔하며 최소 여섯 가지 다른 원인이 있습니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>
<h2>1. Core Audio 재시작 (빠른 해결)</h2><p>터미널을 열고 실행하세요: <code>sudo killall coreaudiod</code></p><p>오디오가 1초간 끊기고 재시작됩니다. 많은 경우 즉시 끊김이 멈춥니다.</p><h2>2. CPU 과부하</h2><p>Mac의 CPU가 최대이면 오디오 버퍼를 충분히 빨리 처리할 수 없어 팝과 끊김처럼 들리는 간격이 발생합니다. Activity Monitor에서 CPU 사용량을 확인하세요.</p><h2>3. Bluetooth 오디오 문제</h2><p>간섭, 코덱 전환, Bluetooth 혼잡이 끊김을 일으킬 수 있습니다. Mac에 더 가까이 이동하고 사용하지 않는 장치를 연결 해제하세요.</p><h2>SoundDial로 오디오 품질 관리</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>은 사용하지 않는 앱을 음소거하여 오디오 처리에 대한 CPU 압력을 줄이고, 시스템 볼륨 100% 대신 앱별 부스트를 사용하여 시스템 출력 레벨의 왜곡을 줄일 수 있습니다.</p><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>` },
  "teams-volume-too-low-mac": { slug: "teams-volume-too-low-mac", title: "Mac에서 Microsoft Teams 볼륨이 너무 작은가요? 효과적인 모든 해결 방법", description: "최대 볼륨에서도 Teams에서 사람 목소리가 거의 들리지 않나요? Teams 설정부터 Bluetooth 코덱까지 모든 원인과 통화 오디오를 100% 이상으로 증폭하는 방법을 알아보세요.", date: "2026-06-04", readTime: "7분 소요", content: `<p>Teams 회의 중입니다. 동료가 발표하고 있지만 목소리가 세 방 건너에서 양철통을 통해 오는 것처럼 들립니다. Mac 볼륨 100%. Teams 볼륨 100%. 모든 것을 최대로 올렸습니다. 여전히 너무 조용합니다.</p><h2>Teams 오디오 설정 확인</h2><p>Teams → 설정 → 장치에서 올바른 스피커가 선택되어 있는지, "노이즈 억제"가 "높음"으로 설정되지 않았는지 확인하세요.</p><h2>Bluetooth 코덱 전환</h2><p>AirPods을 사용 중이면 Teams 통화가 AAC에서 SCO 코덱으로의 전환을 강제합니다. 별도의 마이크를 사용하여 이를 방지하세요.</p><h2>Teams 볼륨을 100% 이상으로 증폭</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>로 Teams를 <strong>200%</strong>까지 증폭할 수 있습니다. Teams만 더 커지고 음악, 브라우저, 기타 앱은 현재 레벨을 유지합니다.</p><a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial이 macOS에서 Microsoft Teams 통화 볼륨을 100% 이상으로 증폭" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>` },
  "how-to-control-per-app-volume-on-mac": { slug: "how-to-control-per-app-volume-on-mac", title: "Mac에서 앱별 볼륨을 제어하는 방법", description: "macOS는 모든 것에 대해 하나의 볼륨 슬라이더를 제공합니다. 모든 앱에 대해 개별 볼륨 컨트롤을 얻는 방법과 — 왜 생각보다 중요한지 알아보세요.", date: "2026-05-20", readTime: "7분 소요", content: `<p>화상 통화 중입니다. Slack이 계속 울립니다. 배경에서 음악이 재생됩니다. 볼륨 키를 누르면 — 모든 것이 조용해집니다. macOS에는 정확히 하나의 볼륨 슬라이더가 있으며 모든 것을 한 번에 제어합니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>
<p>Windows는 Vista(2006) 이후부터 앱별 볼륨 믹서를 가지고 있습니다. 20년 후에도 macOS는 여전히 없습니다.</p><h2>앱별 볼륨이 실제로 의미하는 것</h2><p>앱별 볼륨은 Mac의 모든 애플리케이션이 자체 독립적인 볼륨 슬라이더를 얻는 것을 의미합니다. Spotify를 30%로, Zoom을 100%로, Slack을 완전히 음소거하고, Safari를 50%로 — 모두 동시에 설정할 수 있습니다.</p><h2>SoundDial</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>은 원하는 Mac 볼륨 믹서가 존재하지 않아서 만들었습니다. 메뉴 바에 위치하고 소리를 내는 모든 앱을 표시하며 각각에 자체 슬라이더를 제공합니다. 앱별 음소거, 볼륨 부스트, 프로필, 통화 시작 시 음악을 낮추는 자동 더킹. 일회성 구매, macOS 14+, 구독 없음.</p>` },
  "mute-slack-notifications-mac-without-muting-everything": { slug: "mute-slack-notifications-mac-without-muting-everything", title: "다른 모든 것을 음소거하지 않고 Mac에서 Slack을 음소거하는 방법", description: "Slack 알림이 집중을 방해하지만 음악이나 통화를 음소거하고 싶지 않습니다. macOS에서 Slack만 음소거하는 방법을 알아보세요.", date: "2026-05-24", readTime: "5분 소요", content: `<p>딥 워크 중입니다. Spotify가 완벽한 집중 플레이리스트를 재생 중입니다. 그런데 — Slack이 울립니다. 또 또 또. Slack을 음소거하고 싶지만 음악은 유지하고 싶습니다. macOS: 모든 것을 음소거하거나 아무것도 음소거하지 않거나.</p><h2>진짜 해결법: 앱별 볼륨 제어</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>은 Slack에 자체 독립적인 볼륨 슬라이더를 제공합니다. 원하는 레벨로 설정하세요 — 또는 한 번의 클릭으로 완전히 음소거하세요.</p><a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial에서 Slack 음소거, Spotify는 macOS에서 정상 볼륨으로 재생" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a><p><strong>집중 시간:</strong> Slack 10% 또는 음소거, Spotify 40%. <strong>회의 시간:</strong> Slack 음소거, Zoom 100%. 각각을 <strong>볼륨 프로필</strong>로 저장하고 한 번의 클릭으로 전환하세요.</p><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>` },
  "volume-profiles-for-mac": { slug: "volume-profiles-for-mac", title: "Mac에서 다양한 상황에 맞는 볼륨 프로필을 설정하는 방법", description: "회의, 집중 근무, 게이밍, 릴랙스를 위한 다른 볼륨 설정 — 한 번의 클릭으로 전환 가능. macOS에서 볼륨 프로필이 작동하는 방법을 알아보세요.", date: "2026-06-02", readTime: "5분 소요", content: `<p>오전 9시에는 Zoom 통화 — Zoom 100%, Spotify 음소거. 오전 10시에 통화 종료 — Spotify 40%, Slack 15%. 정오에 게이밍 — 게임 60%, Discord 100%. 오후 6시에 YouTube — 브라우저 80%.</p><p>모든 상황에 다른 이상적인 볼륨 구성이 있습니다. 상황이 바뀔 때마다 5~6개 앱을 수동으로 조정하거나, 각 설정을 프로필로 저장하고 한 번의 클릭으로 전환할 수 있습니다.</p><h2>SoundDial로 프로필 설정</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>에는 내장 프로필 시스템이 있습니다. 각 앱의 볼륨을 원하는 대로 조정하고 "+" 버튼을 클릭하여 프로필을 저장하세요. 한 번의 클릭으로 적용합니다.</p><a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 볼륨 프로필 — macOS에서 회의, 집중, 릴랙스 모드 간 한 번의 클릭으로 전환" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>` },
  "zoom-call-volume-too-low-mac": { slug: "zoom-call-volume-too-low-mac", title: "Mac에서 Zoom 통화 볼륨이 너무 작은가요? 증폭하는 방법", description: "최대 볼륨에서도 Zoom에서 사람 목소리가 거의 들리지 않습니다. Zoom 설정부터 앱별 볼륨 믹서로 통화 오디오를 100% 이상으로 증폭하는 방법까지 모든 해결책을 알아보세요.", date: "2026-05-26", readTime: "6분 소요", content: `<p>Zoom 통화 중입니다. 상대방이 말하고 있지만 거의 들리지 않습니다. Mac 볼륨 최대. Zoom 스피커 볼륨 최대. 화면에 기대어 듣고 있습니다. 이렇게 어려우면 안 됩니다.</p><h2>Zoom 볼륨을 100% 이상으로 증폭</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>로 Zoom을 <strong>200%</strong>까지 증폭할 수 있습니다. 참가자가 너무 조용하면 Zoom의 슬라이더를 150% 또는 180%로 드래그하세요. Zoom의 내장 최대값을 넘어 오디오 신호가 증폭되어 가장 조용한 목소리도 들릴 수 있게 됩니다.</p><a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial이 화상 통화 중 더 명확한 오디오를 위해 Mac에서 Zoom 통화 볼륨을 180%로 증폭" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>` },
  "lower-spotify-without-lowering-everything-mac": { slug: "lower-spotify-without-lowering-everything-mac", title: "Mac에서 다른 모든 것을 낮추지 않고 Spotify만 낮추는 방법", description: "Spotify를 배경 음악으로 듣고 싶은데 볼륨 키로 줄이면 통화와 나머지도 모두 조용해집니다. 해결 방법을 알아보세요.", date: "2026-05-30", readTime: "4분 소요", content: `<p>작업 중입니다. Spotify가 배경 음악을 재생 중입니다. 좀 크네요. 볼륨 내리기 키를 탭합니다. Spotify가 조용해집니다. 하지만 Zoom 통화, 알림 소리, 브라우저 오디오도 모두 조용해집니다. 원하던 것이 아닙니다.</p><h2>진짜 해결법: 앱별 볼륨 제어</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>은 메뉴 바에 모든 앱의 볼륨 슬라이더를 넣습니다. Spotify만 낮추려면: SoundDial 아이콘 클릭, Spotify 찾기, 슬라이더 드래그. 완료. 다른 모든 것은 변하지 않습니다.</p><a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial이 macOS에서 다른 앱을 최대 볼륨으로 유지하면서 Spotify 볼륨만 독립적으로 낮춤" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a><p>자동 더킹으로 통화에 참여하면 SoundDial이 자동으로 Spotify를 낮출 수 있습니다. 수동 조정이 전혀 필요 없습니다.</p><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>에서 일회성 구매. 구독 없음. macOS 14.2+.</p>` },
  "macos-tahoe-per-app-volume-control": { slug: "macos-tahoe-per-app-volume-control", title: "macOS Tahoe에 앱별 볼륨 제어가 있나요?", description: "macOS Tahoe(macOS 26)는 주요 업데이트를 가져왔지만 Apple이 드디어 볼륨 믹서를 추가했나요? 답과 — 지금 앱별 볼륨 제어를 얻는 방법을 알아보세요.", date: "2026-06-12", readTime: "4분 소요", content: `<p>매년 Mac 사용자들은 다음 macOS 릴리스에 볼륨 믹서가 포함되기를 바랍니다. 매년 실망합니다. macOS Tahoe(macOS 26)에서 Apple은 재설계된 인터페이스, 새로운 시스템 기능, 주요 내부 개선을 제공했습니다. 하지만 앱별 볼륨 제어를 추가했을까요?</p><h2>짧은 답: 아니오</h2><p>macOS Tahoe에는 내장 볼륨 믹서가 없습니다. 시스템 설정, 제어 센터, 메뉴 바에 앱별 볼륨 제어가 없습니다.</p><h2>macOS Tahoe에서 앱별 볼륨 제어를 얻는 방법</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>은 macOS Tahoe와 완전히 호환되며 Apple의 최신 Core Audio Tap API를 사용합니다.</p><a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial이 macOS Tahoe에서 앱별 볼륨 제어 제공" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>에서 일회성 구매. 구독 없음. macOS 14.2+.</p>` },
  "play-music-speakers-calls-headphones-mac": { slug: "play-music-speakers-calls-headphones-mac", title: "Mac에서 스피커로 음악을 재생하면서 헤드폰으로 통화하는 방법", description: "데스크 스피커로 Spotify를 재생하면서 AirPods로 Zoom 통화를 하고 싶나요? macOS는 이를 쉽게 만들지 않습니다 — 실제로 작동하는 것을 알아보세요.", date: "2026-05-15", readTime: "5분 소요", content: `<p>합리적인 것을 하고 싶습니다: 데스크 스피커로 음악을 재생하면서 AirPods으로 Zoom 통화. macOS: 안 됩니다. 출력 장치를 선택하면 <em>모든</em> 앱이 사용합니다.</p><h2>더 간단한 접근: 볼륨 기반 분리</h2><p>주요 목표가 음악보다 통화를 명확하게 듣는 것이라면 앱별 볼륨 제어가 더 간단하게 문제를 해결합니다.</p><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>은 모든 앱에 자체 볼륨 슬라이더를 제공합니다. 통화 중: Zoom을 <strong>100%</strong>, Spotify를 <strong>20%</strong>로 설정. 자동 더킹으로 자동 처리됩니다.</p><a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial이 macOS에서 통화 중 Zoom을 최대 볼륨으로, Spotify를 낮춘 모습" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>` },
  "mac-volume-keeps-changing-by-itself": { slug: "mac-volume-keeps-changing-by-itself", title: "Mac 볼륨이 저절로 변하는 문제: 해결 방법", description: "Mac의 볼륨이 무작위로 올라가거나 내려가거나 다른 레벨로 재설정됩니다. 모든 알려진 원인과 중지하는 방법을 알아보세요.", date: "2026-05-18", readTime: "6분 소요", content: `<p>Mac 볼륨을 편안한 레벨로 설정합니다. 잠시 후 돌아보면 달라져 있습니다. 더 크거나. 더 작거나. 최대로 재설정. 계속 반복되는데 이유를 모르겠습니다.</p><h2>1. Bluetooth 장치 재연결</h2><p>가장 흔한 원인입니다. Bluetooth 장치가 연결되거나 연결 해제되면 macOS가 해당 장치와 마지막으로 사용한 레벨로 볼륨을 재설정합니다.</p><h2>SoundDial로 앱별 볼륨 잠금</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>은 모든 앱의 볼륨 레벨을 독립적으로 기억합니다. 시스템 볼륨이 변해도 앱 레벨 밸런스는 일관됩니다.</p><a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial이 macOS에서 재시작 간 앱별 볼륨 레벨 기억" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>` },
  "best-volume-mixer-apps-mac-2026": { slug: "best-volume-mixer-apps-mac-2026", title: "2026년 Mac용 최고의 볼륨 믹서 앱", description: "Mac에서 앱별 볼륨 제어를 제공하는 모든 앱의 솔직한 비교. 기능, 가격, 실제로 사용할 가치가 있는 것.", date: "2026-06-12", readTime: "10분 소요", content: `<p>macOS에는 내장 볼륨 믹서가 없습니다. 개별 앱의 볼륨을 제어하려면 타사 앱이 필요합니다. 여러 옵션이 있습니다.</p><h2>SoundDial</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>: 앱별 볼륨 0-200%, 프로필, 자동 더킹, 볼륨 메모리, 키보드 단축키. €14.99 일회성. Mac App Store. 시스템 드라이버 불필요.</p><h2>SoundSource</h2><p>앱별 EQ, 출력 라우팅 포함. $39. 시스템 드라이버(ACE) 필요. 프로필 없음, 자동 더킹 없음.</p><h2>Background Music</h2><p>무료, 오픈 소스. 기본 앱별 볼륨. 100% 이상 부스트 없음, 프로필 없음. macOS 업데이트 시 자주 고장.</p><a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial macOS에서 개별 앱 볼륨 슬라이더를 보여주는 앱별 볼륨 믹서" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a>.</p>` },
  "youtube-too-quiet-safari-chrome-mac": { slug: "youtube-too-quiet-safari-chrome-mac", title: "Mac에서 Safari 또는 Chrome의 YouTube가 너무 조용한가요? 즉시 해결", description: "일부 YouTube 비디오는 최대 볼륨에서도 거의 들리지 않습니다. 브라우저 오디오가 다른 앱보다 종종 더 조용한 이유와 — Mac에서 100% 이상으로 증폭하는 방법을 알아보세요.", date: "2026-05-22", readTime: "5분 소요", content: `<p>YouTube 비디오를 클릭합니다. 크리에이터가 말하고 있지만 거의 들리지 않습니다. 시스템 볼륨 최대. YouTube 플레이어 볼륨 최대. Spotify를 열면 — 음악이 최대 볼륨으로 폭발합니다. 스피커 문제가 아닙니다. YouTube입니다.</p><h2>진짜 해결법: 브라우저 볼륨을 100% 이상으로 증폭</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>은 Safari와 Chrome을 포함한 모든 앱에 0%에서 <strong>200%</strong>까지의 독립적인 볼륨 슬라이더를 제공합니다. YouTube 비디오가 너무 조용하면 브라우저 슬라이더를 150% 또는 180%로 드래그하세요.</p><a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial이 Mac에서 조용한 YouTube 비디오를 위해 Safari 브라우저 볼륨을 180%로 증폭" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>` },
  "mac-notification-sounds-too-loud-headphones": { slug: "mac-notification-sounds-too-loud-headphones", title: "헤드폰에서 Mac 알림 소리가 너무 큰가요? 해결 방법", description: "음악은 괜찮은데 Slack 알림과 macOS 경고가 헤드폰에서 고통스러울 정도로 큽니다. 알림 볼륨이 다른 이유와 — 길들이는 방법을 알아보세요.", date: "2026-05-25", readTime: "5분 소요", content: `<p>헤드폰을 쓰고 편안한 40% 볼륨으로 음악을 듣고 있습니다. Slack 알림이 울립니다. <em>띵.</em> 음악에 비해 귀청이 터질 정도로 큽니다.</p><h2>진짜 해결법: 알림 앱 볼륨을 독립적으로 제어</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>은 모든 앱에 자체 볼륨 슬라이더를 제공합니다. Slack, Mail, Calendar 같은 알림 앱을 미디어 앱보다 훨씬 낮은 볼륨으로 설정하세요.</p><a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial이 Slack을 낮은 볼륨, Spotify를 정상 볼륨으로 표시 — macOS에서 독립적인 알림 제어" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a><p>"헤드폰" 프로필로 저장하고 플러그인할 때 한 번의 클릭으로 적용하세요.</p><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>` },
  "stop-zoom-lowering-music-mac": { slug: "stop-zoom-lowering-music-mac", title: "Mac에서 Zoom이 음악을 낮추는 것을 중지하는 방법", description: "Zoom 통화에 참여할 때마다 음악이 줄어들거나 사라집니다. 왜 그런지와 통화 중 조용해지는 것을 — 당신의 조건에 따라 제어하는 방법을 알아보세요.", date: "2026-05-28", readTime: "6분 소요", content: `<p>Zoom 통화에 참여합니다. Spotify가 편안한 볼륨으로 재생 중이었습니다. 통화가 연결되면 — 음악이 사라지거나 거의 아무것도 안 들리게 줄어듭니다. 아무것도 건드리지 않았습니다.</p><h2>진짜 해결법: 당신의 조건에 따른 자동 더킹</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>의 자동 더킹 기능은 마이크를 모니터링하고 통화가 시작되면 배경 오디오를 자동 조정합니다 — 하지만 <strong>더킹 레벨은 당신이 제어합니다</strong>.</p><a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 자동 더킹 설정 — Mac에서 Zoom 통화 중 구성 가능한 볼륨 감소" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a><p>30%가 좋은 기본값입니다 — 음악이 들리지만 방해하지 않습니다. 10%(거의 무음)에서 80%(거의 줄지 않음)까지 어디든 조정할 수 있습니다.</p><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>` },
  "airpods-volume-too-low-mac": { slug: "airpods-volume-too-low-mac", title: "Mac에서 AirPods 볼륨이 너무 작은가요? 모든 해결 방법 설명", description: "최대 볼륨에서도 Mac에서 AirPods가 조용하게 들리나요? 헤드폰 안전 제한부터 Bluetooth 특이점까지 모든 원인과 해결 방법을 알아보세요.", date: "2026-06-08", readTime: "7분 소요", content: `<p>AirPods가 iPhone에서는 잘 작동합니다. 충분히 큽니다. 하지만 Mac에 연결하면 — 모든 것이 너무 조용합니다. 시스템 볼륨 최대. Spotify 최대. AirPods가... 충분히 크지 않습니다.</p><h2>1. 헤드폰 안전이 볼륨을 제한 중</h2><p>시스템 설정 → 사운드 → 헤드폰 안전에서 "큰 오디오 줄이기"를 비활성화하세요.</p><h2>여전히 조용? AirPods 볼륨을 100% 이상으로 증폭</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>로 모든 앱을 <strong>200%</strong>까지 증폭할 수 있습니다. AirPods에서 Spotify가 너무 조용하면 Spotify의 슬라이더를 150% 또는 180%로 드래그하세요.</p><a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial이 Mac에서 AirPods를 위한 앱별 볼륨을 200%까지 슬라이더로 증폭" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>` },
  "spotify-volume-too-low-mac": { slug: "spotify-volume-too-low-mac", title: "Mac에서 Spotify 볼륨이 너무 작은가요? 모든 해결 방법", description: "Mac에서 Spotify가 최대 볼륨인데도 너무 조용한가요? Spotify의 내장 리미터부터 macOS 설정까지 모든 원인과 — 100% 이상으로 증폭하는 방법을 알아보세요.", date: "2026-06-11", readTime: "7분 소요", content: `<p>Spotify 최대 볼륨. Mac 최대 볼륨. 여전히 부족합니다. Mac에서 가장 흔한 Spotify 불만 중 하나이며 여러 원인이 있습니다.</p><h2>Spotify의 볼륨 정규화 확인</h2><p>Spotify → 설정 → 재생 → <strong>볼륨 정규화</strong>. "크게"로 설정하거나 완전히 비활성화하세요. Spotify가 예상치 않게 조용한 가장 흔한 원인입니다.</p><h2>SoundDial로 Spotify를 100% 이상으로 증폭</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>로 Spotify를 <strong>200%</strong>까지 증폭할 수 있습니다 — 다른 앱의 볼륨에 영향을 주지 않고.</p><a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial이 macOS에서 다른 앱을 정상 볼륨으로 유지하면서 Spotify 볼륨을 200%로 증폭" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>` },
  "separate-game-audio-from-discord-mac": { slug: "separate-game-audio-from-discord-mac", title: "Mac에서 게임 오디오를 Discord와 분리하는 방법", description: "게임 폭발이 Discord 팀원의 말을 덮나요? macOS에서 게임 오디오와 음성 채팅 볼륨을 독립적으로 제어하는 방법을 알아보세요.", date: "2026-06-10", readTime: "6분 소요", content: `<p>Mac에서 게임 중입니다. 게임 내 폭발이 터집니다. Discord 팀원이 말하고 있지만 총소리 너머로 들리지 않습니다. 볼륨을 줄이면 Discord도 조용해집니다.</p><p>Windows에서는 볼륨 믹서를 열어 게임을 40%로 줄이고 Discord를 100%로 두면 됩니다. Mac에서는 불가능합니다.</p><h2>실제 솔루션: 앱별 볼륨 제어</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>은 메뉴 바에 위치하며 모든 앱에 자체 볼륨 슬라이더를 제공합니다. 게임을 35%, Discord를 100%로 설정하세요.</p><a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial이 macOS에서 게임과 Discord에 독립적인 볼륨 슬라이더 표시" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a><p>"게이밍" 프로필로 저장하고 한 번의 클릭으로 적용하세요.</p><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>` },
  "why-doesnt-mac-have-volume-mixer": { slug: "why-doesnt-mac-have-volume-mixer", title: "왜 Mac에는 Windows처럼 볼륨 믹서가 없을까요?", description: "Windows는 2006년부터 앱별 볼륨 제어가 있었습니다. 2026년인데 macOS에는 아직 없습니다. 진짜 이유와 — 어쨌든 하나를 얻는 방법을 알아보세요.", date: "2026-06-09", readTime: "6분 소요", content: `<p>Vista(2006) 이후 모든 Windows 버전에 볼륨 믹서가 포함되어 있습니다. macOS에는? 하나의 슬라이더. 20년간의 Mac 업데이트에도 Apple은 앱별 볼륨 제어를 추가한 적이 없습니다.</p><h2>기술적 한계가 아닙니다</h2><p>macOS의 Core Audio는 API 레벨에서 프로세스별 오디오 탭핑을 절대적으로 지원합니다. Apple이 사용자용 인터페이스를 만들지 않았을 뿐입니다.</p><h2>지금 Mac에서 볼륨 믹서를 얻는 방법</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>은 Windows 볼륨 믹서가 하는 것을 정확히 하는 네이티브 macOS 메뉴 바 앱입니다 — 더 많은 기능과 함께.</p><a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — macOS용 볼륨 믹서, 메뉴 바에서 앱별 볼륨 슬라이더 표시" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a><p>Apple이 20년 전에 만들었어야 할 기능. <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>에서 일회성 구매. 구독 없음. macOS 14.2+.</p>` },
  "boost-mac-volume-beyond-100-percent": { slug: "boost-mac-volume-beyond-100-percent", title: "Mac 볼륨이 너무 작은가요? 100% 이상으로 사운드를 증폭하는 방법", description: "Mac이 최대 볼륨인데도 너무 조용합니다. 왜 그런지와 외부 스피커 없이 오디오를 200%까지 증폭하는 방법을 알아보세요.", date: "2026-06-07", readTime: "8분 소요", content: `<p>Mac 볼륨 100%. 슬라이더가 오른쪽 끝까지 가 있습니다. 여전히 부족합니다. 팟캐스트가 너무 조용합니다. 화상 통화 참가자가 속삭이는 것 같습니다. YouTube 비디오가 너무 낮게 녹음되었습니다.</p><h2>100% 이상으로 볼륨 증폭하는 방법</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>은 Mac의 모든 앱에 0%에서 <strong>200%</strong>까지의 독립적인 볼륨 슬라이더를 제공합니다. 특정 앱이 너무 조용하면 — 팟캐스트 플레이어, 브라우저 탭, 화상 통화 — 해당 앱만 100% 이상으로 증폭할 수 있습니다.</p><a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 볼륨 부스트 — macOS에서 200% 증폭의 앱별 볼륨 제어" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a><p>시스템 전체 볼륨 부스터에 비한 핵심 장점은 SoundDial이 <em>앱별로</em> 증폭한다는 것입니다. 다른 모든 것을 정상 레벨로 유지하면서 조용한 앱을 180%로 증폭할 수 있습니다.</p><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>에서 일회성 구매. 구독 없음. macOS 14.2+.</p>` },
  "auto-lower-music-during-zoom-calls-mac": { slug: "auto-lower-music-during-zoom-calls-mac", title: "Mac에서 Zoom 통화 중 자동으로 음악을 낮추는 방법", description: "Zoom 통화가 시작될 때마다 Spotify를 일시 정지하려고 허둥지둥합니다. 더 나은 방법이 있습니다 — 자동 더킹이 마이크가 활성화되면 음악을 자동으로 낮춥니다.", date: "2026-06-05", readTime: "7분 소요", content: `<p>통화가 시작됩니다. 화면을 공유 중입니다. 음악이 여전히 재생 중입니다. 황급히 Spotify로 전환, 일시 정지, 다시 Zoom으로 — 하지만 모두가 이미 플레이리스트 10초를 들었습니다.</p><h2>오디오 더킹이란?</h2><p><strong>오디오 더킹</strong>은 음성 통화 같은 더 중요한 일이 일어날 때 배경 오디오의 볼륨을 자동으로 낮추는 것입니다.</p><h2>SoundDial의 자동 더킹</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>에는 macOS가 기본적으로 해야 할 일을 정확히 하는 내장 자동 더킹 기능이 있습니다. 마이크가 활성화되면(통화 시작) 모든 비통화 앱을 구성된 레벨(기본 30%)로 자동 감소합니다. 통화가 끝나면 모든 앱이 정확히 이전 볼륨으로 복원됩니다.</p><a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 자동 더킹 기능이 Mac에서 Zoom 통화 중 음악 볼륨을 자동으로 낮춤" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a><p>Zoom, Teams, FaceTime, Discord, Slack, Google Meet, Webex, Skype 모두와 작동합니다.</p><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>` },
  "how-to-mute-one-app-on-mac": { slug: "how-to-mute-one-app-on-mac", title: "모든 것을 음소거하지 않고 Mac에서 하나의 앱을 음소거하는 방법", description: "Slack이 울립니다. 통화 중입니다. Slack을 음소거하고 싶지만 통화는 계속 들으려 합니다. macOS에서는 불가능합니다 — 방법을 알아보세요.", date: "2026-06-03", readTime: "6분 소요", content: `<p>Zoom 통화 중입니다. Slack이 계속 알림을 울립니다. 잊고 있던 YouTube 탭이 자동 재생을 시작합니다. 음소거 키를 누르면 — 통화도 안 들립니다. macOS는 <em>모든 것</em>을 음소거합니다. 하나의 앱만 음소거하는 내장 방법이 없습니다.</p><h2>진짜 솔루션: 앱별 음소거 버튼</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>은 메뉴 바에 위치하며 실행 중인 모든 앱과 자체 볼륨 슬라이더 및 음소거 버튼을 표시합니다.</p><a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial이 macOS 메뉴 바에서 각 애플리케이션의 앱별 음소거 버튼 표시" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a><p>하나의 앱을 음소거하려면: SoundDial 아이콘 클릭, 앱 찾기, 스피커 아이콘 클릭. 끝. 다시 클릭하면 볼륨이 이전 위치로 복원됩니다.</p><p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a> — €14.99 일회성 구매, 구독 없음, macOS 14.2+.</p>` },
  "volume-mixer-for-mac": { slug: "volume-mixer-for-mac", title: "Mac용 볼륨 믹서: macOS에 아직 없는 빠진 기능", description: "Windows는 2006년부터 볼륨 믹서가 있었습니다. macOS에 아직 없는 이유와 — 2026년 Mac에서 앱별 볼륨 제어를 얻는 최고의 방법을 알아보세요.", date: "2026-06-01", readTime: "9분 소요", content: `<p>Windows PC에서 스피커 아이콘을 우클릭하면 볼륨 믹서가 나옵니다 — 현재 소리를 내는 모든 애플리케이션이 각각 독립적인 볼륨 슬라이더와 함께 표시되는 패널. Spotify를 20%로 줄이면서 Zoom 통화를 100%로 유지할 수 있습니다.</p><p>Mac에서 같은 것을 해보세요. 메뉴 바의 사운드 아이콘을 클릭합니다. 슬라이더 하나. 그것뿐입니다. 모든 것을 한 번에 제어하는 하나의 슬라이더.</p><h2>SoundDial: macOS가 만들었어야 할 볼륨 믹서</h2><p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>은 Apple이 제공하지 않는 것을 정확히 제공하는 네이티브 macOS 메뉴 바 앱입니다 — Mac의 모든 앱에 대한 독립적인 볼륨 제어.</p><a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 메뉴 바에서 앱별 볼륨 슬라이더를 보여주는 macOS용 앱별 볼륨 믹서" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a><p>주요 기능: 앱별 볼륨 슬라이더(0-200%), 원클릭 음소거, 볼륨 프로필, 자동 더킹, 키보드 단축키, 출력 장치 전환, 볼륨 메모리.</p><p>일회성 구매. 구독 없음. macOS 14.2+. <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store에서 SoundDial 받기</a>.</p>` },
  "background-music-alternative-mac": {
    slug: "background-music-alternative-mac",
    title: "Mac(2026)를 위한 최고의 Background Music 대안",
    description: "Background Music가 최신 macOS를 깨고 있습니까? 가장 신뢰할 수 있는 앱별 볼륨 믹서 대안은 부스트 ​​및 프로필을 갖춘 샌드박스 Mac App Store 앱인 SoundDial입니다.",
    date: "2026-07-23",
    readTime: "5분 읽기",
    content: `<p>macOS 업데이트 후 Background Music 작동이 중지된 경우 가장 신뢰할 수 있는 대안은 다음과 같습니다. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> — Mac App Store의 메뉴 표시줄 앱별 볼륨 믹서입니다. 모든 앱에 자체 볼륨 슬라이더를 제공하고 음소거, 부스트, 볼륨 프로필 및 자동 더킹을 추가하며 완전히 샌드박스 처리되고 Apple의 검토를 거쳤으므로 다음 macOS 릴리스에서 중단될 오디오 드라이버가 없습니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac를 위한 최고의 Background Music 대안(2026)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Background Music가 최신 macOS에서 중단되는 이유</h2>

<p>Background Music는 진정으로 영리한 무료 오픈 소스 프로젝트입니다. 이는 Mac 사용자에게 Apple이 결코 갖지 못한 기능, 즉 Windows가 수년 동안 사용해 왔던 앱별 볼륨 믹서를 제공했습니다. 하지만 디자인이 계속 실패하는 이유이기도 합니다.</p>

<p>오디오를 라우팅하고 제어하기 위해 Background Music는 Mac의 사운드를 가로채는 시스템 수준 드라이버인 가상 오디오 장치를 설치합니다. 이러한 접근 방식은 이전 macOS에서 잘 작동했지만 모든 주요 릴리스에서는 커널 및 오디오 확장에 대한 보안을 강화했습니다. 사용자가 보고하는 일반적인 증상은 다음과 같습니다.</p>

<ul>
<li>설치 후 또는 OS 업데이트 후 소리가 전혀 들리지 않습니다.</li>
<li>가상 장치가 로드되지 않아 오디오 라우팅이 자동으로 중지됩니다.</li>
<li>복구하려면 앱을 다시 설치하거나 재부팅하거나 드라이버를 수동으로 제거해야 합니다.</li>
<li>개발은 커뮤니티 중심이며 자원 봉사에 의해 진행되므로 새로운 macOS에 대한 수정이 지연될 수 있습니다.</li>
</ul>

<p>이 중 어느 것도 Background Music를 "나쁜" 것으로 만들지 않습니다. 이는 무료 드라이버 기반 도구가 본질적으로 취약하다는 것을 의미하며 매일 앱별 볼륨에 의존하면 취약성이 빨리 낡아진다는 의미입니다.</p>

<h2>교체에서 찾아야 할 사항</h2>

<p>대안을 선택하기 전에 실제로 필요한 것이 무엇인지 결정하십시오.</p>

<ul>
<li><strong>macOS 업데이트 전반에 걸친 안정성.</strong> 커널이나 오디오 확장을 설치하는 경우 가끔 손상될 수 있습니다.</li>
<li><strong>실제 앱별 제어.</strong> 각 앱에 대한 독립적인 볼륨 및 음소거가 기본입니다.</li>
<li><strong>부스트.</strong> 일부 앱(조용한 회의 도구, 특정 브라우저)은 너무 조용합니다. 100%를 넘어서고 싶습니다.</li>
<li><strong>편의 기능.</strong> 프로필과 자동 더킹은 유틸리티를 하루 종일 열어두는 기능으로 바꿔줍니다.</li>
<li><strong>안전하게 설치하세요.</strong> 샌드박스 처리된 Mac App Store 앱은 시스템 내부를 건드릴 수 없으므로 제거가 깔끔하게 이루어지고 업데이트가 자동으로 이루어집니다.</li>
</ul>

<h2>SoundDial가 믿을 수 있는 선택인 이유</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> Background Music 사용자가 직면하는 문제를 정확하게 해결하기 위해 만들어졌습니다. 그들은 앱당 볼륨을 원하지만 운전자를 돌보고 싶지 않습니다. 메뉴 표시줄에 있으며 핵심 작업을 잘 수행합니다.</p>

<ul>
<li><strong>모든 앱에 대한 독립 볼륨</strong>, 동일한 패널에 앱별 음소거 기능이 있습니다.</li>
<li><strong>앱별 부스트</strong> 조용한 앱을 실제로 들을 수 있을 만큼 크게 만듭니다.</li>
<li><strong>볼륨 프로필</strong> — 믹스(예: "회의" 또는 "게임")를 저장하고 매번 슬라이더를 드래그하는 대신 즉시 전환합니다.</li>
<li><strong>자동 더킹</strong>, 따라서 배경 오디오가 필요할 때 자동으로 낮아집니다.</li>
<li><strong>빠른 출력 전환</strong> 스피커, 헤드폰 및 기타 장치 사이.</li>
</ul>

<p>가장 큰 차이점은 설치 방법입니다. SoundDial는 Mac App Store를 통해 배송됩니다. 이는 Apple의 검토를 거쳐 샌드박스 처리되었음을 의미합니다. 드래그할 DMG도 없고 오디오 드라이버나 시스템 확장도 없으며 커널 액세스도 없습니다. 이것이 새로운 macOS가 출시될 때 Background Music가 수행하는 방식을 깨지지 않는 가장 중요한 이유입니다. 이는 Apple이 계속 잠그는 시스템 부분에 연결되어 있지 않습니다.</p>

<p>비용이 든다 <strong>€14.99 일회성</strong>. 무료는 아니지만 구독이 없으며 유지 관리되고 안전하게 설치할 수 있는 것에 대한 비용을 지불하고 있습니다.</p>

<h2>SoundDial vs. Background Music vs. 무료 도구</h2>

<p>Background Music는 유일한 무료 옵션이 아니므로 여기에 정직한 위치가 있습니다.</p>

<ul>
<li><strong>Background Music(무료, 오픈 소스):</strong> 앱별 볼륨이지만 드라이버 기반이며 최신 macOS에서 깨지기 쉽고 부스트, 프로필 및 자동 더킹이 부족합니다.</li>
<li><strong>FineTune(무료, 오픈 소스):</strong> 가벼운 메뉴바 앱별 볼륨 앱입니다. 무료가 유일한 요구 사항이라면 좋지만 추가 기능은 부족합니다.</li>
<li><strong>eqMac(무료):</strong> 진정한 앱별 믹서가 아닌 주로 시스템 EQ 및 부스터입니다.</li>
<li><strong>Rogue Amoeba의 SoundSource(~$39):</strong> 앱별 EQ 및 전체 출력 라우팅을 갖춘 프로급 옵션입니다. 훌륭하지만 가격이 SoundDial의 두 배 이상이고 여전히 다운로드와 오디오 캡처 드라이버가 필요합니다.</li>
<li><strong>SoundDial(€14.99, Mac App Store):</strong> 중간 지점 — 실제 앱별 볼륨, 음소거, 부스트, 프로필 및 더킹이 드라이버 없이 깨끗한 샌드박스 설치로 제공됩니다.</li>
</ul>

<p>앱별 EQ 또는 복잡한 스튜디오 라우팅이 필요한 경우 SoundSource는 추가 비용을 지불할 가치가 있습니다. 무료 Tinkerer's Tool을 원하고 간헐적인 파손을 견딜 수 있다면 FineTune 또는 Background Music가 적합합니다. 그러나 목표가 "모든 앱에 자체 볼륨을 제공하고 macOS 업데이트마다 중단되는 것을 방지하는 것"이라면 SoundDial는 번거로움을 최소화하면서 해당 목표를 달성합니다.</p>

<h2>이를 필요하게 만드는 macOS 컨텍스트</h2>

<p>분명히 말할 가치가 있습니다. macOS에는 앱별 볼륨 믹서가 내장되어 있지 않습니다. Windows는 수년 동안 볼륨 플라이아웃을 해왔지만 Mac에서는 시스템 슬라이더가 모든 것을 한 번에 제어합니다. 이러한 격차는 Background Music 및 SoundDial와 같은 도구가 존재하는 전체 이유입니다. Apple이 이를 채우지 않기 때문에 실질적인 질문은 어떤 타사 접근 방식을 신뢰하는지입니다. 즉, OS와 싸우는 무료 드라이버 또는 OS와 함께 작동하는 샌드박스 앱입니다.</p>

<p>고장난 오디오 드라이버와의 싸움을 멈출 준비가 되셨나요? 받기 <a href="https://apps.apple.com/app/id6772792641">Mac App Store의 SoundDial</a> €14.99에 모든 앱의 볼륨을 안정적으로 제어하세요.</p>`,
  },
  "soundsource-vs-sounddial-mac": {
    slug: "soundsource-vs-sounddial-mac",
    title: "SoundSource 대 SoundDial: 어떤 Mac 볼륨 앱이 승리하나요?",
    description: "SoundSource($39, 프로급) 대 SoundDial(€14.99, App Store). 앱별 볼륨, 부스트, 프로필 및 자동 더킹을 비교하여 귀하에게 적합한 Mac 믹서를 선택하세요.",
    date: "2026-07-23",
    readTime: "6분 읽기",
    content: `<p>깔끔하게 설치되고 비용도 적게 드는 앱별 볼륨 조절을 원하신다면, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 앱별 볼륨, 음소거, 부스트, 프로필 및 자동 더킹 기능을 갖춘 Mac App Store에서 일회성 €14.99로 대부분의 사람들에게 더 나은 구매입니다. 특별히 앱별 EQ 및 고급 출력 라우팅이 필요한 경우에만 Rogue Amoeba의 SoundSource(~$39)를 선택하세요.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — SoundSource 대 SoundDial: 어느 Mac 볼륨 앱이 승리합니까?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>짧은 버전</h2>
<p>macOS에는 여전히 앱별 볼륨 믹서가 내장되어 있지 않습니다. Windows는 수년 동안 하나를 가지고 있었지만 Mac에서는 시스템 볼륨 슬라이더가 모든 것을 한 번에 이동합니다. SoundSource와 SoundDial는 모두 그 격차를 해소하기 위해 존재합니다. 그들은 단지 다른 구매자를 목표로 하고 있습니다.</p>
<ul>
<li><strong>SoundDial</strong> — €14.99 일회성, Mac App Store, 메뉴 표시줄 앱. 앱별 독립 볼륨, 앱별 음소거, 앱별 부스트, 저장된 프로필, 자동 더킹 및 빠른 출력 전환. 샌드박스 및 Apple 검토를 거쳤으므로 드라이버를 설치할 필요가 없습니다.</li>
<li><strong>SoundSource</strong> — ~$39, Rogue Amoeba에서 직접 다운로드. 위의 모든 기능에 앱별 EQ, 고급 출력 라우팅 및 오디오 효과가 추가됩니다. 작은 오디오 캡처 드라이버를 설치해야 합니다.</li>
</ul>

<h2>가격과 구매방법</h2>
<p>이것은 가장 명확한 분할입니다. SoundSource의 가격은 대략 39달러이며 Rogue Amoeba에서 직접 판매됩니다. SoundDial는 Mac App Store에서 일회성 구매로 €14.99로 가격의 1/3이 조금 넘습니다.</p>
<p>왜냐하면 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> App Store를 통해 배송되며 샌드박스 처리되고 공증되며 Apple의 검토를 거칩니다. Get을 클릭하면 설치가 완료됩니다. 마운트할 DMG도 없고, 커널 인접 구성 요소에 부여할 권한도 없으며, 오디오 드라이버나 시스템 확장도 없습니다. 또한 일반적인 App Store 업데이트 흐름을 따라 진행되며 동일한 Apple ID의 다른 Mac와 동기화됩니다.</p>
<p>SoundSource는 App Store 외부에서 다운로드하고 오디오 캡처 드라이버를 설치하여 각 앱의 오디오를 가로채서 처리할 수 있습니다. 이것이 프로 기능의 잠금을 해제하는 것이지만 추가 설치 단계와 시스템 더 깊은 곳에 있는 구성 요소를 의미하기도 합니다.</p>

<h2>SoundSource는 수행하지만 SoundDial는 수행하지 않는 작업</h2>
<p>SoundSource는 특정 유형의 사용자에 대해 가격을 얻습니다. 다음 중 하나라도 귀하를 설명한다면 추가 비용을 지불할 가치가 있습니다.</p>
<ul>
<li><strong>앱별 EQ.</strong> 예를 들어 Zoom는 플랫 상태로 유지하면서 Spotify에 10밴드 이퀄라이저를 원합니다. SoundDial는 EQ가 아닌 볼륨을 담당합니다.</li>
<li><strong>고급 출력 라우팅.</strong> 세밀한 제어를 통해 하나의 앱을 스피커로 보내고 다른 앱을 헤드폰이나 특정 인터페이스로 보냅니다.</li>
<li><strong>오디오 효과 및 플러그인.</strong> SoundSource는 앱별로 효과를 호스팅할 수 있습니다. 이는 진정한 전문가의 영역입니다.</li>
</ul>
<p>Rogue Amoeba는 오랫동안 신뢰할 수 있는 실적을 보유하고 있습니다. SoundSource는 진지한 도구이며 가격도 비슷합니다. 오디오 전문가이거나 다중 출력을 많이 사용하는 사용자라면 올바른 선택입니다.</p>

<h2>SoundDial가 일상적인 사용에 더 좋은 점</h2>
<p>"Mac 볼륨 믹서"를 검색하는 대부분의 사람들은 EQ가 필요하지 않습니다. 그들은 다른 앱보다 조용한 앱이 필요하며 앱을 얻기 위해 설치 프로그램과 싸우고 싶지 않습니다. SoundDial는 이를 깔끔하게 다루고 언급할 가치가 있는 몇 가지 사항을 추가합니다.</p>
<ul>
<li><strong>앱별 부스트.</strong> 일부 앱과 비디오는 100%에서도 너무 조용합니다. SoundDial는 단일 앱을 일반 한도 이상으로 밀어서 조용한 회의나 팟캐스트를 들을 수 있습니다.</li>
<li><strong>볼륨 프로필.</strong> 낮은 음악, 브라우저 음소거, 앱 소리 크게 호출 등 전체 설정을 저장하고 즉시 불러올 수 있습니다. 5개의 슬라이더를 끌지 않고도 "집중", "회의", "게임" 간을 전환하는 데 적합합니다.</li>
<li><strong>자동 더킹.</strong> 다른 소스가 시작되면 자동으로 배경 오디오(예: 음악)를 낮추므로 알림, 통화 또는 비디오가 묻히지 않습니다.</li>
<li><strong>빠른 출력 전환.</strong> 메뉴 표시줄에서 스피커, 헤드폰 및 기타 장치 사이를 이동하세요.</li>
</ul>
<p>이 모든 기능은 메뉴바 드롭다운에서 실행되므로 클릭 한 번만으로 나머지 시간에는 눈에 띄지 않습니다.</p>

<h2>무료 대안에 대해 간략히 설명합니다.</h2>
<p>동일한 검색에서 언급된 몇 가지 무료 옵션이 표시됩니다. 다음에 대해 알 가치가 있습니다.</p>
<ul>
<li><strong>Background Music</strong> — 무료 오픈 소스로 기본 앱별 볼륨을 제공합니다. 그러나 최신 macOS 릴리스에서는 중단될 수 있으며 부스트, 프로필 또는 자동 더킹이 없습니다.</li>
<li><strong>FineTune</strong> — 무료 오픈 소스 메뉴바 볼륨 앱입니다. 간단하지만 범위가 제한되어 있습니다.</li>
<li><strong>eqMac</strong> — 무료 EQ 및 시스템 부스터, 진정한 앱별 믹서라기보다 시스템 전체 EQ 도구에 더 가깝습니다.</li>
</ul>
<p>당신에게 적합하다면 무료가 좋습니다. 단점은 호환성과 지원입니다. 오픈 소스 오디오 도구는 macOS 업데이트보다 뒤처질 수 있으며 프로필 및 더킹과 같은 기능은 일반적으로 없습니다. 설정이 업무에 중요한 경우 검토하고 유지 관리하는 항목에 대해 한 번만 비용을 지불하는 것이 일반적으로 더 차분한 방법입니다.</p>

<h2>어느 것을 사야 할까요?</h2>
<p>한 가지 질문에 답해 보세요. 앱별 EQ 또는 고급 출력 라우팅이 필요합니까?</p>
<ul>
<li><strong>예</strong> — SoundSource를 구매하세요. 이를 위해 제작되었으며 ~$39는 드라이버 수준 엔진을 갖춘 프로 도구에 적합합니다.</li>
<li><strong>아니요, 앱별 볼륨, 부스트 및 새로 설치를 원합니다.</strong> — SoundDial를 구매하세요. 매일매일 실제로 중요한 믹싱과 프로필 및 자동 더킹을 €14.99에 제공하며 운전자의 번거로움도 전혀 없습니다.</li>
</ul>
<p>대다수의 Mac 사용자에게는 두 번째 버킷이 정직한 답변입니다. 스튜디오가 아닌 볼륨 제어 비용을 지불하고 있는 것입니다.</p>

<p><strong>Mac 볼륨을 쉽게 수정할 준비가 되셨나요?</strong> 받기 <a href="https://apps.apple.com/app/id6772792641">Mac App Store의 SoundDial</a> — 일회성 €14.99, 드라이버 없음, DMG 없음. 한 번의 클릭으로 앱별 볼륨, 부스트, 프로필 및 자동 더킹이 가능합니다.</p>`,
  },
  "cheaper-soundsource-alternative-mac": {
    slug: "cheaper-soundsource-alternative-mac",
    title: "Mac의 앱별 볼륨을 위한 더 저렴한 SoundSource 대안",
    description: "39달러 가격 없이 SoundSource 스타일의 앱별 볼륨을 원하시나요? SoundDial는 부스트, 프로필 및 자동 더킹 기능을 갖춘 €14.99 Mac App Store 메뉴 바 믹서입니다.",
    date: "2026-07-23",
    readTime: "5분 읽기",
    content: `<p>Mac에서 SoundSource 스타일의 앱별 볼륨 제어를 원하지만 39달러가 너무 비싸다고 느껴진다면 가장 빠르고 신뢰할 수 있는 수정 방법은 다음과 같습니다. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>. Mac App Store의 €14.99 일회성 메뉴 바 믹서는 다운로드나 오디오 드라이버 설치 없이 모든 앱에 고유한 볼륨 슬라이더, 음소거, 부스트 기능과 프로필 및 자동 더킹 기능을 제공합니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac의 앱별 볼륨에 대한 더 저렴한 SoundSource 대안" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>사람들이 SoundSource 대안을 찾는 이유</h2>
<p>Rogue Amoeba의 SoundSource는 뛰어난 소프트웨어입니다. 앱별 이퀄라이저, 오디오 효과, 하나의 앱을 헤드폰으로, 다른 앱을 스피커로 보낼 수 있는 출력 라우팅 등 진정한 프로급 기능을 제공합니다. 하지만 그 힘에는 두 가지 마찰 지점이 있습니다. 첫째, 가격은 약 39달러입니다. 둘째, App Store 외부에 시스템 수준 오디오 캡처 드라이버를 설치합니다. 일부 사람들은 작업 기계에서 주의를 기울이거나 단순히 macOS 업데이트를 관리하고 싶지 않습니다.</p>
<p>대부분의 사람들에게 실제로 필요한 것은 훨씬 간단합니다. Zoom 통화를 건드리지 않고 Spotify를 끄거나, 시끄러운 브라우저 탭의 앱을 음소거하거나, 조용한 비디오 플레이어를 100% 이상 높이면 됩니다. 그것이 당신이라면, 당신은 결코 열지 않을 기능에 대해 프로 돈을 지불하고 있는 것입니다.</p>

<h2>SoundDial의 기능과 비용</h2>
<p>SoundDial는 앱별 볼륨 작업에 중점을 두고 깔끔하게 수행합니다. 메뉴 표시줄을 열면 소리를 내는 모든 항목의 실시간 목록이 표시되며 각각 자체적으로 제어할 수 있습니다.</p>
<ul>
<li><strong>앱별 독립 볼륨</strong> — 애플리케이션당 하나의 슬라이더가 실시간으로 조정됩니다.</li>
<li><strong>앱별 음소거</strong> — 다른 앱을 일시 중지하지 않고 한 앱을 즉시 무음으로 설정합니다.</li>
<li><strong>앱별 볼륨 부스트</strong> — 영상이나 통화가 너무 약할 경우 조용한 앱을 정상 최대값 이상으로 푸시합니다.</li>
<li><strong>볼륨 프로필</strong> — 믹스(예: "포커스", "게임", "회의")를 저장하고 한 번의 클릭으로 전환합니다.</li>
<li><strong>자동 더킹</strong> — 더 중요한 앱이 재생되기 시작하면 자동으로 다른 앱을 딥핑합니다.</li>
<li><strong>빠른 출력 전환</strong> — 동일한 메뉴에서 스피커, 헤드폰 및 기타 장치 간에 이동합니다.</li>
</ul>
<p>가격은 <strong>€14.99, 한 번만 지불</strong> — 구독이 없습니다. 이는 대부분의 사용자가 실제로 도달하는 볼륨 기능에 대한 SoundSource 비용의 약 3분의 1에 해당합니다.</p>

<h2>App Store 차이점</h2>
<p>SoundDial는 다음을 통해 배송되기 때문에 <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a>, Apple의 검토를 거쳐 샌드박스 처리되었습니다. 드래그할 DMG도 없고 승인할 커널 확장이나 오디오 캡처 드라이버도 없으며 별도의 업데이트 프로그램도 없습니다. 다른 App Store 앱처럼 설치하면 작동합니다. macOS가 업데이트되면 낮은 수준의 오디오 구성 요소가 여전히 작동하는지 궁금해할 필요가 없습니다.</p>
<blockquote>macOS에는 여전히 앱별 볼륨 믹서가 내장되어 있지 않습니다. Windows는 수년 동안 하나를 가지고 있었지만 Mac에서는 시스템 볼륨이 전부 아니면 전무입니다. 이는 정확히 이 도구가 메우는 공백입니다.</blockquote>

<h2>무료 옵션과 비교하는 방법</h2>
<p>SoundSource가 유일한 대안은 아닙니다. 무료 도구가 있으며 이에 대해 솔직하게 말하는 것이 중요합니다.</p>
<ul>
<li><strong>Background Music</strong> 무료 오픈 소스 앱별 볼륨 앱입니다. 많은 사람들에게 작동하지만 최신 macOS 릴리스에서는 작동이 중단될 수 있고 업데이트가 불규칙하며 부스트, 프로필 및 자동 더킹이 없습니다.</li>
<li><strong>FineTune</strong> 무료 오픈 소스 메뉴 바 볼륨 앱입니다. 가볍고 편리하지만 프로필과 더킹 기능이 부족합니다.</li>
<li><strong>eqMac</strong> 무료 EQ 및 시스템 부스터입니다. 이는 진정한 앱별 믹서라기보다는 이퀄라이저/부스트 도구에 가깝고 개별 앱 슬라이더에 초점을 맞추지 않습니다.</li>
</ul>
<p>무료는 합법적인 선택입니다. 단점은 안정성과 기능입니다. 오픈 소스 오디오 도구는 자원 봉사 유지 관리에 의존하고 macOS 변경보다 뒤처질 수 있으며 무료 옵션 번들 프로필과 SoundDial 방식의 자동 더킹은 없습니다. 설정이 간단하고 가끔 파손되는 것을 개의치 않는다면 무료 앱이면 충분할 수 있습니다. 유지 관리되고 샌드박스 처리되어 제대로 작동하는 제품을 원한다면 €14.99로 바로 구매하실 수 있습니다.</p>

<h2>빠른 의사결정 가이드</h2>
<ul>
<li><strong>앱별 EQ, 오디오 효과 및 하나의 앱을 다른 출력 장치로 라우팅해야 합니다.</strong> → SoundSource는 그만한 가치가 있습니다. 여기에서는 그것을 완전히 대체할 수 있는 것이 없습니다.</li>
<li><strong>주로 드라이버 없이 앱별 볼륨, 음소거, 부스트, 프로필, 더킹이 필요합니다.</strong> → €14.99의 SoundDial가 더 나은 가치를 지닌 선택입니다.</li>
<li><strong>무료를 원하고 유지 관리 위험을 신경 쓰지 않는 경우</strong> → Background Music, FineTune 또는 eqMac를 먼저 시도해 보세요.</li>
</ul>

<h2>설정하기</h2>
<p>시작하는 데 약 1분 정도 걸립니다.</p>
<ul>
<li>외부 다운로드 없이 Mac App Store에서 SoundDial를 설치하세요.</li>
<li>처음 실행 시 macOS 프롬프트에 오디오 권한을 부여합니다.</li>
<li>몇 가지 앱에서 사운드를 재생하고 메뉴 표시줄 아이콘을 엽니다. 각각의 슬라이더가 표시됩니다.</li>
<li>레벨을 설정하려면 드래그하고, 음소거하려면 탭하고, 부스트하려면 100%를 누르세요.</li>
<li>설정을 프로필로 저장하고, 통화나 미디어 중에 다른 앱을 조용히 시키려면 자동 더킹을 켜세요.</li>
</ul>
<p>이것이 전체 작업 흐름입니다. 구성 파일도 없고, 다시 시작도 없고, 축복할 시스템 확장도 없습니다.</p>

<h2>결론</h2>
<p>SoundSource는 더 강력한 도구이지만 이를 찾는 대부분의 사람들은 작동하는 앱별 볼륨만 원합니다. SoundDial는 약 1/3 가격으로 이를 제공하고 App Store를 통해 안전하게 배송되며 단일 드라이버를 설치할 필요 없이 프로필과 자동 더킹을 추가합니다.</p>

<p>모든 앱의 볼륨을 독립적으로 제어할 준비가 되셨나요? <a href="https://apps.apple.com/app/id6772792641">Mac App Store에서 SoundDial 가져오기</a> €14.99에 한 번.</p>`,
  },
  "finetune-alternative-mac": {
    slug: "finetune-alternative-mac",
    title: "Mac의 FineTune 대안: 지원되는 앱별 볼륨 믹서",
    description: "무료 FineTune 메뉴 표시줄 앱을 사용해 보고 유지 관리되고 App Store가 안전한 것을 원하십니까? Mac의 앱별 볼륨에 대한 최고의 FineTune 대안은 다음과 같습니다.",
    date: "2026-07-23",
    readTime: "5분 읽기",
    content: `<p>FineTune가 마음에 들었지만 신뢰할 수 있는 소스에서 적극적으로 유지 관리하고 설치하려는 경우, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 가장 빠르고 안정적인 수정입니다. 독립적인 볼륨, 앱별 음소거, 볼륨 부스트, 저장된 프로필 및 자동 더킹 기능을 갖춘 Mac App Store 메뉴 표시줄 앱별 볼륨 믹서입니다. Apple이 검토하고 샌드박스 처리한 이 제품은 드라이버를 설치할 필요 없이 한 번에 €14.99의 비용이 듭니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac의 FineTune 대안: 지원되는 앱별 볼륨 믹서" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>FineTune 대안을 찾는 이유는 무엇입니까?</h2>

<p>FineTune는 좋은 아이디어입니다. macOS의 앱별 볼륨 제어 기능을 제공하는 무료 오픈 소스 메뉴 표시줄 앱입니다. Apple은 여전히 이를 거부하고 있습니다(Windows에는 수년간 앱별 믹서가 있었습니다). 많은 사람들에게 그것은 기본적인 일을 합니다. 하지만 사용자가 다른 것을 찾는 데는 실제 이유가 있습니다.</p>

<ul>
<li><strong>유지 관리가 불확실합니다.</strong> 오픈 소스 취미 프로젝트는 단일 관리자의 자유 시간에 살고 죽습니다. macOS가 주요 업데이트를 제공하면 오디오 관련 앱이 가장 먼저 중단되는 경우가 많으며 결코 오지 않을 자원 봉사 수정을 기다리게 됩니다.</li>
<li><strong>천장 기능.</strong> FineTune는 앱별 볼륨만 다루며 그 외의 볼륨은 거의 다루지 않습니다. 100% 이상의 부스트, 저장된 프로필 또는 자동 더킹을 원한다면 다른 도구를 추가해야 합니다.</li>
<li><strong>신뢰하고 업데이트하세요.</strong> App Store 외부에 원시 빌드를 설치한다는 것은 자동 검토가 없고 샌드박스가 보장되지 않으며 직접 추적해야 하는 수동 업데이트를 의미합니다.</li>
</ul>

<p>이 중 어느 것도 FineTune를 나쁘게 만들지 않습니다. 이는 매일 앱별 오디오에 의존한다면 지원 모델이 포함된 무언가를 원할 것이라는 의미입니다.</p>

<h2>SoundDial의 차이점</h2>

<p>SoundDial는 실행 중인 모든 앱에 대한 슬라이더가 있는 메뉴 표시줄 믹서라는 동일한 핵심 아이디어에서 시작한 다음 고급 사용자가 실제로 요구하는 기능으로 더 나아갑니다.</p>

<ul>
<li><strong>앱별 독립 볼륨.</strong> Spotify를 낮추고, 통화를 최대 볼륨으로 유지하고, 시끄러운 브라우저 탭의 앱을 완전히 음소거하는 등 이 모든 작업을 하나의 메뉴에서 수행할 수 있습니다.</li>
<li><strong>앱별 볼륨 부스트.</strong> 팟캐스트나 비디오가 너무 낮게 마스터링된 경우 조용한 앱을 일반 한도 이상으로 밀어 넣으세요. FineTune는 이 작업을 수행하지 않습니다.</li>
<li><strong>볼륨 프로필.</strong> 다섯 개의 슬라이더를 누르는 대신 "집중", "게임", "회의" 믹스를 저장하고 한 번의 클릭으로 전체 설정을 전환할 수 있습니다.</li>
<li><strong>자동 더킹.</strong> 더 중요한 내용이 재생되기 시작하면 배경 오디오를 자동으로 낮추어 전화가 올 때 음악 소리를 줄입니다.</li>
<li><strong>빠른 출력 전환.</strong> 시스템 설정으로 들어가지 않고도 스피커, 헤드폰 및 기타 출력 간을 이동할 수 있습니다.</li>
</ul>

<p>왜냐하면 <a href="https://apps.apple.com/app/id6772792641">SoundDial는 Mac App Store를 통해 배송됩니다.</a>, Apple의 검토를 거쳐 샌드박스 처리되었으며, 깔끔하게 설치되고, 다른 모든 App Store 앱과 동일한 메커니즘을 통해 업데이트됩니다. 드래그할 DMG도 없고, 오디오 드라이버나 시스템 확장도 없으며, 커널 수준 구성 요소를 허용할지 묻는 보안 프롬프트도 없습니다.</p>

<h2>SoundDial 대 FineTune 및 기타 무료 도구</h2>

<p>FineTune는 유일한 무료 옵션이 아니며, 전체 풍경을 솔직하게 보는 데 도움이 됩니다.</p>

<ul>
<li><strong>FineTune</strong> — 무료 오픈소스 메뉴바 앱별 볼륨. 간단하고 가볍지만 부스트, 프로필, 더킹이 없고 유지 관리가 커뮤니티에 달려 있습니다.</li>
<li><strong>Background Music</strong> — 무료 오픈 소스이며 앱별 오디오를 라우팅하고 조정합니다. 실제로 유용하지만 최신 macOS 릴리스에서는 중단될 수 있으며 부스트, 프로필 및 더킹이 부족합니다.</li>
<li><strong>eqMac</strong> — 무료 EQ 및 시스템 부스터. 주로 이퀄라이저를 원하지만 앱별 믹서는 아닌 경우에 적합합니다.</li>
<li><strong>SoundSource (Rogue Amoeba)</strong> — 앱별 EQ 및 출력 라우팅이 포함된 약 39달러의 프로급 옵션입니다. 훌륭하지만 다운로드와 오디오 캡처 드라이버가 필요하고 비용이 두 배 이상 비쌉니다.</li>
<li><strong>SoundDial</strong> — 일회성 €14.99, App Store 안전, 드라이버 없음. 앱별 볼륨 기본 사항 외에 부스트, 프로필 및 자동 더킹을 추가합니다.</li>
</ul>

<p>솔직한 요약: 가장 저렴한 제품을 원하고 기본 앱별 볼륨만 필요한 경우 무료 도구가 작동할 수 있습니다. 앱별 EQ 및 라우팅을 원하고 드라이버 비용 지불 및 설치에 신경 쓰지 않는다면 SoundSource가 가장 좋습니다. SoundDial는 무료 앱보다 성능이 뛰어나고, SoundSource보다 훨씬 저렴하며, Apple이 검토하고 샌드박스를 적용하기 때문에 설치가 더 안전한 최적의 위치에 있습니다.</p>

<h2>FineTune에서 이동</h2>

<p>전환에는 몇 분이 걸리며 정리 의식이 없습니다.</p>

<ul>
<li>Mac App Store에서 SoundDial를 설치합니다. 설치 프로그램, 드라이버 승인, 재시작이 없습니다.</li>
<li>메뉴 표시줄에서 SoundDial 아이콘을 클릭하면 실행 중인 각 앱에 대한 슬라이더를 볼 수 있습니다.</li>
<li>일상적인 믹스를 설정한 다음 즉시 불러올 수 있도록 프로필로 저장하세요.</li>
<li>선택적으로 자동 더킹을 켜서 통화 및 알림을 위해 배경 오디오가 따로 들리도록 합니다.</li>
<li>만족스러우면 FineTune를 종료하세요. 두 앱 모두 시스템 드라이버를 설치하지 않으므로 제거할 필요가 없습니다.</li>
</ul>

<p>Apple이 결코 제공하지 않은 깔끔한 메뉴 바 믹서인 FineTune에 대해 마음에 드는 점을 그대로 유지하면서 유지 관리된 App Store 앱이 제공하는 부스트, 프로필, 더킹 및 장기 지원을 얻을 수 있습니다.</p>

<h2>결론</h2>

<p>FineTune는 앱별 볼륨이 메뉴 표시줄에 속한다는 개념을 증명합니다. SoundDial는 자원 봉사 유지에 대한 베팅 대신 일회성 €14.99에 실제 지원 모델, 더 많은 기능 및 App Store 안전을 갖춘 개념입니다.</p>

<p>유지 관리되는 앱별 믹서를 사용할 준비가 되셨나요? <a href="https://apps.apple.com/app/id6772792641">Mac App Store에서 SoundDial 가져오기</a> 단 몇 초 만에 모든 앱의 볼륨을 제어할 수 있습니다.</p>`,
  },
  "eqmac-alternative-per-app-volume-mac": {
    slug: "eqmac-alternative-per-app-volume-mac",
    title: "Mac의 실제 앱별 볼륨을 위한 eqMac 대안",
    description: "eqMac의 부스트가 마음에 들지만 적절한 앱별 볼륨, 음소거 및 프로필이 필요합니까? SoundDial는 가장 빠른 Mac App Store 수정 프로그램입니다 — €14.99, 샌드박스, 드라이버 없음.",
    date: "2026-07-23",
    readTime: "5분 읽기",
    content: `<p>EQ 및 볼륨 부스터에 eqMac를 사용했지만 실제로 각 앱에 대한 독립적인 볼륨과 음소거, 부스트 및 저장된 프로필을 원하는 경우 가장 빠르고 안정적인 수정은 다음과 같습니다. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>. Mac App Store 메뉴바 믹서입니다. 앱별로 레벨을 설정하고, 조용한 앱의 레벨을 높이고, 프로필을 즉시 전환할 수 있습니다. €14.99 일회성, 샌드박스, 설치할 드라이버 없음.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac의 실제 앱별 볼륨을 위한 eqMac 대안" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>eqMac와 실제로 필요한 것</h2>

<p>eqMac는 견고한 무료 도구이며 시스템 전반에 걸친 이퀄라이저와 볼륨 부스터는 정말 유용합니다. 그러나 eqMac는 하나의 마스터 EQ와 하나의 마스터 출력을 중심으로 구축되었습니다. Windows가 수년 동안 사용해 왔지만 macOS는 여전히 기본적으로 제공되지 않는 실제 앱별 볼륨 믹서를 제공하지 않습니다.</p>

<p>따라서 실제 문제가 "통화 중에 Spotify가 너무 시끄럽습니다." 또는 "이 게임 하나 때문에 귀가 아프지만 다른 모든 것은 괜찮습니다."라면 eqMac는 해당 작업에 적합한 형태가 아닙니다. 결국 단일 마스터 슬라이더를 타거나 각 앱의 내부 볼륨을 조작하게 됩니다. 이것이 바로 SoundDial가 채우는 격차입니다.</p>

<h2>SoundDial는 수행하지만 eqMac는 수행하지 않는 작업</h2>

<ul>
<li><strong>앱별 독립 볼륨</strong> — 음악 40%, 브라우저 100%, 영상통화 70%를 한꺼번에 모두 기억합니다.</li>
<li><strong>앱별 음소거</strong> — 다른 것을 건드리지 않고 시끄러운 앱 하나를 즉시 침묵시킵니다.</li>
<li><strong>앱별 부스트</strong> — eqMac의 부스터처럼 조용한 앱을 일반 한도 이상으로 푸시하지만 전체 시스템 대신 단일 앱을 대상으로 합니다.</li>
<li><strong>볼륨 프로필</strong> — "Focus", "Gaming" 또는 "Meeting"과 같은 설정을 저장하고 한 번의 클릭으로 전체 믹스를 전환합니다.</li>
<li><strong>자동 더킹</strong> — 더 중요한 일이 시작되면 자동으로 배경 오디오를 삭제하므로 통화 중에 슬라이더를 찾기 위해 애쓰지 않아도 됩니다.</li>
<li><strong>빠른 출력 전환</strong> — 메뉴 표시줄에서 스피커, 헤드폰 및 기타 출력 사이를 이동합니다.</li>
</ul>

<p>eqMac와의 오버랩은 기본적으로 부스트입니다. 그 밖의 모든 것(믹서, 음소거, 프로필, 더킹)은 eqMac가 결코 다루도록 설계되지 않은 영역입니다.</p>

<h2>아직도 EQ를 원하시나요?</h2>

<p>어떤 문제를 해결하고 있는지 솔직하게 말하세요. 베이스를 자르고, 거친 고음을 조절하고, 전체 시스템의 톤을 형성하는 등 주파수 EQ가 정말로 필요한 경우 eqMac는 여전히 자리가 있으며 무료입니다. SoundDial는 이퀄라이저가 아닌 볼륨 믹서입니다.</p>

<p>그러나 대부분의 사람들은 주파수를 조절하기 위해 eqMac의 부스터를 사용하는 것이 아니라 하나의 앱을 더 크게 하거나 믹스의 균형을 맞추기를 원합니다. 그것이 당신이라면 전용 믹서가 더 깔끔한 답입니다. 둘 다 실행할 수도 있습니다. 시스템 전체 EQ 곡선에는 eqMac를 유지하고 앱별 레벨에는 SoundDial를 사용합니다. 같은 일 때문에 싸우지 않아요.</p>

<h2>다른 Mac 오디오 도구와 비교하는 방법</h2>

<p>이미 도구를 찾고 있으므로 솔직한 상황은 다음과 같습니다.</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba)</strong> — 앱별 EQ 및 전체 출력 라우팅을 갖춘 약 39달러의 프로급 옵션입니다. 강력하지만 직접 다운로드하고 오디오 캡처 드라이버를 설치해야 합니다. 원하는 것이 프로필이 포함된 앱별 볼륨뿐이라면 과도하고 가격이 더 비쌉니다.</li>
<li><strong>Background Music</strong> — 무료 오픈 소스이지만 최신 macOS 릴리스에서 중단될 수 있으며 부스트, 프로필 및 자동 더킹이 없습니다. 효과가 있을 때는 훌륭하고, 그렇지 않을 때는 실망스럽습니다.</li>
<li><strong>FineTune</strong> — 무료 오픈 소스 메뉴 바 앱. $0이 어려운 요구 사항이라면 살펴볼 가치가 있지만 기능과 광택이 더 가볍습니다.</li>
<li><strong>eqMac</strong> — 무료 EQ와 부스터가 있지만 위에서 설명한 진정한 앱별 믹서는 없습니다.</li>
</ul>

<p>SoundDial는 최적의 위치에 있습니다. SoundSource보다 더 집중적이고 저렴하며 무료 옵션보다 더 유능하고 안정적이며 eqMac가 수행하지 않는 앱별 작업을 수행합니다.</p>

<h2>여기서 Mac App Store가 중요한 이유</h2>

<p>이러한 도구 중 일부에는 직접 다운로드와 커널 수준 또는 캡처 오디오 드라이버가 필요합니다. 작동하지만 macOS 업데이트에 문제가 있거나 잠긴 작업 Mac에서 넘어질 수 있는 종류입니다.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 대신 Mac App Store를 통해 배송됩니다. 즉, Apple의 검토를 거쳐 샌드박스 처리되었으며, 드래그할 DMG 없이 깔끔하게 설치되며, 승인할 오디오 드라이버나 시스템 확장이 없습니다. 업데이트는 다른 앱과 마찬가지로 App Store를 통해 도착하며 제거는 일반적인 삭제입니다. 오디오와 관련된 메뉴 표시줄 유틸리티의 경우 마찰이 적고 위험도가 낮은 경로는 많은 가치가 있습니다.</p>

<h2>빠른 설정</h2>

<ul>
<li>Mac App Store에서 SoundDial를 설치합니다. 다시 시작하지 않고 드라이버 프롬프트도 표시하지 않습니다.</li>
<li>메뉴 표시줄 아이콘을 엽니다. 현재 소리를 내는 모든 앱에는 자체 슬라이더가 표시됩니다.</li>
<li>레벨을 설정하고, 필요하지 않은 소리를 음소거하고, 너무 조용한 소리를 높이세요.</li>
<li>배열을 프로필로 저장한 다음 게임, 통화 또는 집중을 위해 더 많은 것을 만듭니다.</li>
<li>자동 더킹을 켜면 배경 오디오가 자동으로 멀어집니다.</li>
</ul>

<p>이것이 전체 루프입니다. 몇 분 안에 힌트만 제공되는 앱별 제어 eqMac의 부스터를 갖게 됩니다.</p>

<p><strong>Mac에서 실제 앱별 볼륨을 사용할 준비가 되셨나요?</strong> <a href="https://apps.apple.com/app/id6772792641">Mac App Store에서 SoundDial 가져오기</a> — €14.99 일회성, 샌드박스, 드라이버 없음, 메뉴바 믹서가 해야 할 일을 정확히 수행합니다.</p>`,
  },
  "cheapest-volume-mixer-mac-2026": {
    slug: "cheapest-volume-mixer-mac-2026",
    title: "2026년 Mac용 가장 저렴하고 좋은 볼륨 믹서",
    description: "2026년 Mac용 가장 저렴하고 좋은 앱별 볼륨 믹서를 찾고 계십니까? 가격, 안전성 및 기능에 대해 SoundDial, SoundSource, Background Music, FineTune 및 eqMac를 비교하세요.",
    date: "2026-07-23",
    readTime: "6분 읽기",
    content: `<p>2026년 Mac의 최고의 가치를 지닌 앱별 볼륨 믹서는 다음과 같습니다. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, 일회성 €14.99에 대한 Mac App Store의 메뉴 표시줄 앱입니다. 모든 앱에 고유한 볼륨 슬라이더와 음소거, 부스트, 프로필 및 자동 더킹을 제공합니다. 드라이버도, 구독도, 위험한 다운로드도 없습니다. 실제로 안정적으로 작동하는 가장 저렴한 유료 옵션입니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 2026년 Mac용 가장 저렴하고 우수한 볼륨 믹서" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>"가장 저렴한"에 대한 정의가 필요한 이유</h2>
<p>Mac용 무료 볼륨 도구가 있으므로 지출을 전혀 하지 않는 것이 유일한 목표라면 옵션이 있습니다. 그러나 무료는 일반적으로 새로운 macOS 버전의 취약성, 부스트 또는 프로필과 같은 기능 누락, 신뢰할 수 있는 오디오 캡처 드라이버와 관련된 설치 프로세스 등 다른 곳에서 비용이 듭니다. "가장 저렴한 제품"이란 계속 사용하게 될 안정적이고 모든 기능을 갖춘 믹서를 얻을 수 있는 최저 가격을 의미합니다. 이것이 우리가 여기서 사용할 렌즈입니다.</p>

<h2>첫째, macOS가 하지 않는 일</h2>
<p>Windows는 수년 동안 앱별 볼륨 믹서를 사용해 왔습니다. 스피커 아이콘을 마우스 오른쪽 버튼으로 클릭하고 각 앱을 독립적으로 설정하세요. macOS에는 아직 그에 상응하는 것이 내장되어 있지 않습니다. 하나의 마스터 볼륨과 앱이 제공하는 모든 내부 슬라이더(음악, 일부 브라우저)가 제공됩니다. Slack를 Spotify보다 더 조용하게 만들거나 다른 모든 것보다 조용한 화상 통화를 강화할 수 있는 시스템 전체의 방법은 없습니다. 아래의 모든 옵션은 그 격차를 메우기 위해 존재합니다.</p>

<h2>정직하게 가격을 책정한 경쟁자</h2>

<h2>SoundDial — €14.99, 일회성</h2>
<p>SoundDial는 메뉴 표시줄에 있으며 실행 중인 각 앱에 독립적인 볼륨 슬라이더를 제공합니다. 기본 사항 외에도 사람들이 실제로 원하는 기능을 추가합니다.</p>
<ul>
<li><strong>앱별 부스트</strong> — 듣기 위해 애쓰는 대신 너무 조용한 앱을 100% 이상으로 밀어 넣으세요.</li>
<li><strong>앱별 음소거</strong> — 나머지 앱을 건드리지 않고 하나의 앱을 무음으로 설정합니다.</li>
<li><strong>볼륨 프로필</strong> — "업무 통화" 또는 "영화 감상" 믹스를 저장하고 즉시 불러올 수 있습니다.</li>
<li><strong>자동 더킹</strong> — 더 중요한 내용이 재생되면 자동으로 배경 오디오를 삭제합니다.</li>
<li><strong>빠른 출력 전환</strong> — 동일한 메뉴에서 스피커, 헤드폰 및 기타 장치 간에 이동합니다.</li>
</ul>
<p>Mac App Store에 있기 때문에 샌드박스 처리되고 Apple의 검토를 거쳐 깔끔하게 설치됩니다. DMG도 없고 커널 확장도 없고 승인할 오디오 드라이버도 없습니다. 당신은 지불 <a href="https://apps.apple.com/app/id6772792641">€14.99 한 번</a> 그리고 그것을 소유하십시오. 대부분의 사람들에게 이것이 최적의 장소입니다. 쉽게 동의할 만큼 저렴하고, 더 이상 성장하지 않을 만큼 완벽합니다.</p>

<h2>SoundSource — ~$39, 프로 옵션</h2>
<p>Rogue Amoeba의 SoundSource는 파워 유저를 위한 최고의 표준입니다. SoundDial처럼 앱별 볼륨 및 음소거 기능을 제공하지만 앱별 이퀄라이저 및 전체 출력 라우팅(하나의 앱은 헤드폰으로, 다른 앱은 스피커로 전송)으로 더욱 발전합니다. 정말 훌륭하지만 가격은 대략 39달러이며, 권한을 부여해야 하는 오디오 캡처 구성 요소와 함께 App Store 외부에 설치됩니다. 앱별 EQ나 복잡한 라우팅이 필요한 경우에는 그만한 가치가 있습니다. 깨끗하고 저렴한 믹서를 원한다면, 결코 만질 수 없는 기능에 대한 비용을 지불하는 것입니다.</p>

<h2>Background Music — 무료 오픈 소스</h2>
<p>Background Music는 앱별 볼륨 및 자동 일시 중지 기능을 제공하는 잘 알려진 무료 오픈 소스 앱입니다. 문제점: 가상 드라이버를 통해 Core Audio에 깊숙이 연결되며 새로운 macOS 릴리스를 중단한 오랜 역사를 가지고 있으며 때로는 업데이트 후 수동 수정이나 재설치가 필요합니다. 또한 부스트, 저장된 프로필 및 자동 더킹이 부족합니다. 유지 관리에 신경 쓰지 않는 수리공에게 적합합니다. 단지 작동하기를 원한다면 실망스럽습니다.</p>

<h2>FineTune — 무료, 메뉴바</h2>
<p>FineTune는 무료 오픈 소스 메뉴 표시줄 볼륨 앱입니다. 가볍고 쾌적하며 간단한 앱별 조정에는 충분할 수 있습니다. 그러나 소규모 무료 프로젝트이기 때문에 기능 깊이와 일치하지 않습니다. 프로필도 없고 자동 더킹도 없으며 부스트/출력 처리가 제한됩니다. 비용이 없고 수명과 지원에 대한 보장이 적습니다.</p>

<h2>eqMac — 무료, EQ + 부스터</h2>
<p>eqMac는 볼륨 부스터가 포함된 시스템 전체에 적용되는 무료 이퀄라이저입니다. 개별 앱을 믹싱하는 것보다 Mac 전체에 걸쳐 톤과 음량을 형성하는 것이 더 중요하므로 다른 작업을 위한 다른 도구입니다. 특별히 앱별 제어를 원한다면 eqMac가 실제로 답은 아니지만 훌륭한 무료 EQ입니다.</p>

<h2>가격 대 가치: 정직한 테이블</h2>
<ul>
<li><strong>정말 무료이지만 단점이 있습니다.</strong> Background Music(취약한 드라이버 기반), FineTune(얇은 기능), eqMac(믹서가 아닌 EQ).</li>
<li><strong>가장 저렴한 완전 유료 앱:</strong> SoundDial(€14.99) — 부스트, 프로필, 더킹, App Store 안전.</li>
<li><strong>프리미엄/프로:</strong> SoundSource 가격 ~$39 — EQ 및 라우팅, 비App Store 설치.</li>
</ul>
<p>다르게 말하면 SoundDial의 가격은 SoundSource의 약 3분의 1에 불과하며 실제로 90%의 사람들이 원하는 기능을 포함합니다. 그리고 무료 옵션과 달리 취약한 시스템 수준 오디오 드라이버에 의존하지 않기 때문에 macOS 업데이트 후에도 조용히 중단되지 않습니다.</p>

<h2>어느 것을 선택해야 할까요?</h2>
<p>앱별 EQ가 필요하고 앱을 다른 출력으로 라우팅하려는 전문가라면 SoundSource를 구입하세요. 오픈 소스를 좋아하고 가끔 깨지는 것을 개의치 않는다면 Background Music 또는 FineTune를 무료로 사용해 보세요. 그러나 App Store에서 안전하게 설치되는 독립적인 볼륨, 부스트, 음소거, 저장 가능한 프로필 및 자동 더킹 등 제대로 작동하는 가장 저렴한 옵션을 원한다면 SoundDial가 2026년의 확실한 가치 승자입니다.</p>

<blockquote>최고의 믹서는 가장 많은 기능을 갖춘 믹서나 가장 저렴한 가격의 믹서가 아닙니다. 한 번 설정하고 잊어버리는 믹서입니다. €14.99에 SoundDial를 사용하면 쉽게 전화할 수 있습니다.</blockquote>

<p>모든 앱에 고유한 볼륨을 부여할 준비가 되셨나요? <a href="https://apps.apple.com/app/id6772792641">Mac App Store에서 SoundDial 가져오기</a> 일회성 €14.99 - 구독도, 운전자도, 위험도 없습니다.</p>`,
  },
  "windows-volume-mixer-for-mac": {
    slug: "windows-volume-mixer-for-mac",
    title: "Mac용 Windows 볼륨 믹서: 앱별 볼륨 제어 기능 제공",
    description: "Mac에 Windows 볼륨 믹서가 없습니까? macOS에는 앱별 볼륨 제어 기능이 내장되어 있지 않습니다. 이를 얻는 가장 빠른 방법은 €14.99 메뉴 바 믹서인 SoundDial입니다.",
    date: "2026-07-23",
    readTime: "5분 읽기",
    content: `<p>macOS에는 Windows와 같은 내장 볼륨 믹서가 없으므로 시스템 설정에서 앱별 볼륨을 설정할 수 없습니다. 가장 빠르고 안정적인 수정은 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, Mac App Store의 €14.99 메뉴 표시줄 앱입니다. 모든 앱에 고유한 볼륨 슬라이더, 음소거 및 부스트 기능을 제공합니다. 드라이버도, DMG도, 위험한 설치도 없습니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac용 Windows 볼륨 믹서: 앱별 볼륨 제어 기능 제공" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Windows 볼륨 믹서에 Mac와 동등한 기능이 없는 이유</h2>

<p>Windows에서 전환한 경우 가장 먼저 놓치게 될 것 중 하나는 볼륨 믹서입니다. 스피커 아이콘을 마우스 오른쪽 버튼으로 클릭하면 실행 중인 모든 앱에 자체 슬라이더가 표시됩니다. Chrome를 낮추고, Discord를 크게 유지하고, Spotify를 음소거하는 등 이 모든 작업을 한 곳에서 수행할 수 있습니다.</p>

<p>macOS는 단순히 이것을 배송하지 않습니다. Apple의 볼륨 컨트롤은 시스템 전체에 적용되는 단일 슬라이더입니다. 어떤 수준을 설정하든 모든 것에 동시에 적용됩니다. 시스템 설정에 숨겨진 앱별 옵션, Terminal 명령, 접근성 토글이 없습니다. 그것은 진정한 격차이며 수년 동안 그랬습니다.</p>

<p>그 이유는 구조적입니다. 앱은 Core Audio를 통해 오디오를 출력 장치로 라우팅하고 OS는 개별 스트림에 대한 사용자 지향 믹서를 노출하지 않습니다. Windows 경험을 재현하려면 해당 오디오 경로에 있고 Apple이 생략한 제어 기능을 제공하는 타사 앱이 필요합니다.</p>

<h2>가장 가까운 일치: SoundDial</h2>

<p>SoundDial는 이를 위해 특별히 제작된 메뉴 표시줄 앱별 볼륨 믹서입니다. 해당 아이콘을 클릭하면 오디오를 재생하는 모든 항목의 깔끔한 목록이 표시되며 각 항목에는 자체 슬라이더가 있습니다. 이것은 설치할 수 있는 가장 직접적인 "Mac용 Windows 볼륨 믹서"이며, Windows 믹서로는 절대 할 수 없는 몇 가지 작업을 수행합니다.</p>

<ul>
<li><strong>앱별 독립 볼륨</strong> — 핵심 기능. Chrome를 40%, Zoom를 100%, 음악을 20%로 설정합니다.</li>
<li><strong>앱별 음소거</strong> — 나머지 앱을 건드리지 않고 하나의 앱을 무음으로 설정합니다.</li>
<li><strong>앱별 볼륨 부스트</strong> — 조용한 앱을 푸시하세요 <em>위에</em> 자체 오디오가 너무 낮을 경우 100%입니다.</li>
<li><strong>볼륨 프로필</strong> — 믹스(예: "업무 통화" 또는 "게임")를 저장하고 슬라이더를 다시 드래그하는 대신 즉시 불러올 수 있습니다.</li>
<li><strong>자동 더킹</strong> — 통화와 같이 더 중요한 일이 시작되면 자동으로 배경 오디오를 낮춥니다.</li>
<li><strong>빠른 출력 전환</strong> — 동일한 메뉴에서 스피커, 헤드폰 및 기타 장치 간에 이동합니다.</li>
</ul>

<p>에 있기 때문에 <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a>, Apple의 검토를 거쳐 샌드박스 처리되었습니다. 한 번의 클릭으로 깔끔하게 설치됩니다. 드래그할 DMG도 없고, 승인할 오디오 드라이버나 시스템 확장도 없으며, 보안 메시지도 표시되지 않습니다. 일회성 €14.99(구독 없음)로 격차를 줄이는 가장 간단한 방법입니다.</p>

<h2>Mac에서 앱별 볼륨을 설정하는 방법</h2>

<ol>
<li>Mac App Store에서 SoundDial를 설치합니다.</li>
<li>처음 시작할 때 요청하는 일회성 오디오 권한을 부여합니다.</li>
<li>메뉴 표시줄에서 SoundDial 아이콘을 클릭하세요.</li>
<li>앱 옆에 있는 슬라이더를 드래그하여 볼륨을 설정하거나 음소거/증폭을 누르세요.</li>
<li>선택적으로 현재 믹스를 프로필로 저장하면 나중에 복원할 수 있습니다.</li>
</ol>

<p>이것이 전체 작업 흐름입니다. 작업 표시줄을 마우스 오른쪽 버튼으로 클릭하는 대신 메뉴 표시줄에서 이미 알고 있는 Windows 믹서처럼 작동합니다.</p>

<h2>SoundDial가 다른 옵션과 비교되는 방식</h2>

<p>SoundDial는 이 분야의 유일한 도구가 아니므로 여기에 대안을 솔직하게 살펴보겠습니다.</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba)</strong> — 약 39달러, 진정한 프로급: 앱별 EQ, 앱별 출력 라우팅, 효과. 그러나 직접 다운로드와 오디오 캡처 드라이버가 필요하며, 앱별 볼륨만 원하는 경우에는 과도하고 비용이 많이 듭니다. EQ와 라우팅이 필요한 경우 선택하세요. 복잡성이나 드라이버가 없는 믹서를 원한다면 SoundDial를 선택하십시오.</li>
<li><strong>Background Music</strong> — 무료이며 오픈 소스입니다. 정말 좋습니다. 문제점: 최신 macOS 버전에서는 작동이 중단될 수 있으며 부스트, 저장된 프로필 및 자동 더킹이 부족합니다. 오픈 소스 오디오 드라이버 문제 해결에 능숙하다면 괜찮습니다. 제대로 작동하는 것을 원한다면 덜 이상적입니다.</li>
<li><strong>FineTune</strong> — 무료 오픈 소스 메뉴 바 앱. 예산이 우선이라면 가볍고 볼만한 가치가 있지만 광택, 프로필 및 App Store 안전을 무료로 거래하고 있습니다.</li>
<li><strong>eqMac</strong> — 무료 EQ 및 시스템 전체 부스터. 앱별 믹서가 아닌 먼저 이퀄라이저이므로 다른 문제를 해결합니다.</li>
</ul>

<p>절충안은 간단합니다. 무료 도구는 비용이 들지 않지만 취약하거나 기능이 얇을 수 있습니다. SoundSource는 강력하지만 비용이 많이 들고 드라이버 기반입니다. SoundDial는 일회성 €14.99, App Store 안전 및 샌드박싱, 무료 옵션이 건너뛰는 프로필 + 자동 더킹 등 최적의 위치에 있습니다.</p>

<blockquote>원하는 것이 Windows 볼륨 믹서 경험(앱별 슬라이더, 음소거 및 부스트, 몇 초 만에 안전하게 설치)이라면 SoundDial가 가장 직접적으로 일치합니다.</blockquote>

<h2>결론</h2>

<p>macOS는 볼륨 믹서를 제공하지 않으며 아마도 앞으로도 제공하지 않을 것입니다. 하지만 시스템 전반에 걸쳐 하나의 슬라이더를 사용할 필요는 없습니다. 전용 메뉴 표시줄 믹서는 Windows에서 사용했던 앱별 제어 기능을 복원하고 그 위에 부스트, 프로필 및 자동 더킹을 추가합니다.</p>

<p>앱별 볼륨을 쉽게 확보할 준비가 되셨나요? <a href="https://apps.apple.com/app/id6772792641">Mac App Store에서 SoundDial 가져오기</a> €14.99 — 일회성, 샌드박스 처리, 몇 초 만에 설치.</p>`,
  },
  "app-volume-like-windows-on-mac": {
    slug: "app-volume-like-windows-on-mac",
    title: "Windows처럼 앱 볼륨 설정 — Mac에서",
    description: "Windows에는 앱별 볼륨 믹서가 있지만 macOS에는 없습니다. Mac의 모든 앱에 대해 드라이버 없이 빠르고 안전하게 독립적인 볼륨을 설정하는 방법은 다음과 같습니다.",
    date: "2026-07-23",
    readTime: "5분 읽기",
    content: `<p>macOS에는 Windows와 같은 앱별 볼륨 믹서가 내장되어 있지 않으므로 가장 빠르고 안정적인 수정은 다음과 같습니다. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, 모든 앱에 자체 볼륨 슬라이더, 앱별 음소거 및 볼륨 부스트를 제공하는 Mac App Store 메뉴 표시줄 앱입니다. 샌드박스 처리되고 Apple의 검토를 거쳤으며 드라이버 없이 설치되며 한 번에 €14.99의 비용이 듭니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Windows처럼 앱 볼륨 설정 — Mac에서" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Windows는 이것을 할 수 있고 macOS는 이것을 할 수 없는 이유</h2>
<p>Windows를 사용해 본 적이 있다면 훈련 방법을 알고 계실 것입니다. 스피커 아이콘을 마우스 오른쪽 버튼으로 클릭하고 볼륨 믹서를 연 다음 Chrome, Spotify, Discord 및 기타 소음을 발생시키는 항목에 대한 별도의 슬라이더를 드래그하세요. 간단하고 작동합니다.</p>
<p>macOS는 이에 상응하는 제품을 배송한 적이 없습니다. Apple의 오디오 컨트롤은 전역적입니다. 즉, 전체 시스템에 대한 하나의 마스터 볼륨입니다. 해당 앱 내부의 소스를 음소거하여 앱을 음소거할 수 있지만(컨트롤이 있는 경우) "회의가 100%로 유지되는 동안 내 음악을 40%로 유지"라고 말할 수 있는 통일된 장소가 없습니다. 이러한 격차가 바로 타사 믹서가 존재하는 이유입니다.</p>

<h2>가장 빠른 수정: 메뉴바 믹서</h2>
<p>Windows 경험과 가장 가까운 것은 실행 중인 오디오 앱을 나열하고 각 앱에 슬라이더를 제공하는 메뉴 표시줄 앱입니다. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 바로 이것을 합니다. 메뉴 표시줄에서 해당 아이콘을 클릭하면 다음이 표시됩니다.</p>
<ul>
<li><strong>모든 앱에 대한 독립 볼륨</strong> — 통화를 건드리지 않고 Spotify를 아래로 드래그하세요.</li>
<li><strong>앱별 음소거</strong> — 시끄러운 앱 하나를 즉시 무음으로 설정하고 나머지는 계속 재생되도록 하세요.</li>
<li><strong>앱별 볼륨 부스트</strong> — 너무 조용한 앱을 푸시하세요 <em>위에</em> 자체 최대값이 여전히 너무 부드러울 때 100%입니다.</li>
<li><strong>볼륨 프로필</strong> — "업무" 또는 "게임" 믹스를 저장하고 한 번의 클릭으로 불러올 수 있습니다.</li>
<li><strong>자동 더킹</strong> — 더 중요한 일이 시작되면 자동으로 배경 오디오를 낮춥니다.</li>
<li><strong>빠른 출력 전환</strong> — 동일한 메뉴에서 스피커, 헤드폰 및 기타 출력 사이를 이동합니다.</li>
</ul>
<p>Mac App Store에 있기 때문에 Apple의 샌드박스 처리 및 검토를 거쳐 깔끔하게 설치되며, 드래그할 DMG도 없고, 커널 확장도 없으며, 시스템 설정에서 승인할 오디오 드라이버도 없습니다. 마지막 부분은 들리는 것보다 더 중요합니다. 드라이버 기반 도구는 macOS 업데이트 후에 중단되는 경향이 있습니다.</p>

<h2>설정방법(약 2분)</h2>
<ul>
<li><strong>1.</strong> Mac App Store에서 SoundDial를 설치하고 실행합니다.</li>
<li><strong>2.</strong> macOS가 요청하는 오디오 권한을 부여합니다. 이를 통해 앱이 앱별 스트림을 볼 수 있습니다.</li>
<li><strong>3.</strong> 메뉴 표시줄에서 SoundDial 아이콘을 클릭하세요. 현재 오디오를 재생하는 모든 앱에는 자체 슬라이더가 표시됩니다.</li>
<li><strong>4.</strong> 앱의 슬라이더를 드래그하여 레벨을 설정하거나 음소거를 누르세요. 앱이 너무 조용하면 100% 이상 부스트합니다.</li>
<li><strong>5.</strong> (선택 사항) 현재 믹스를 프로필로 저장하면 나중에 복원할 수 있고, 배경 오디오가 자동으로 떨어지도록 하려면 자동 더킹을 켜세요.</li>
</ul>
<p>이것이 전체 작업 흐름입니다. 설정 마찰을 제외하면 이미 알고 있는 Windows 볼륨 믹서처럼 작동합니다.</p>

<h2>무료 및 프로 대안은 어떻습니까?</h2>
<p>Mac에서 앱별 볼륨을 얻는 다른 방법이 있습니다. 알 가치가 있으므로 정직하게 선택할 수 있습니다.</p>
<blockquote>무료 도구는 신뢰성과 기능을 위해 돈을 교환합니다. 프로 도구는 필요하지 않을 수도 있는 깊이를 위해 돈과 설정을 교환합니다.</blockquote>
<p><strong>Background Music</strong> 무료이며 오픈 소스이며 앱별 볼륨을 제공합니다. 문제점: 오디오 시스템에 깊숙이 연결되어 있으며 최신 macOS 릴리스를 중단한 이력이 있으며 부스트, 프로필 및 자동 더킹이 부족합니다. 설정에서 작동한다면 좋습니다. 하지만 업그레이드 전반에 걸쳐 도박을 하는 것입니다.</p>
<p><strong>FineTune</strong> SoundDial와 동일한 정신을 지닌 무료 오픈 소스 메뉴 바 앱입니다. 예산이 유일한 관심사라면 좋은 출발점이 될 수 있지만, 프로필과 더킹 폴리시가 없는 커뮤니티 프로젝트입니다.</p>
<p><strong>eqMac</strong> 시스템 전체에 적용되는 무료 EQ 및 부스터입니다. 전반적인 사운드를 형성하는 데는 좋지만 진정한 앱별 믹서는 아닙니다. 개별 앱이 아닌 전체 출력을 조정하는 것입니다.</p>
<p><strong>SoundSource</strong> by Rogue Amoeba(약 39달러)는 앱별 EQ, 앱별 출력 라우팅 및 심각한 오디오 엔지니어 기능을 갖춘 프로급 옵션입니다. 훌륭하지만 직접 다운로드하고 오디오 캡처 구성 요소를 설치해야 하며 비용이 SoundDial보다 두 배 이상 높습니다. 스튜디오 수준의 라우팅과 EQ를 원한다면 이것이 바로 선택입니다. 단지 Windows 스타일 믹서를 원한다면 과잉입니다.</p>

<h2>어느 것을 얻어야 할까요?</h2>
<p>귀하의 목표가 다운로드, 드라이버 또는 위험 없이 "내 Mac가 Windows 볼륨 믹서처럼 작동하도록 만드는 것"이라면 SoundDial가 가장 깨끗한 대답입니다. 구독 없이 일회성 €14.99에 앱별 볼륨, 음소거, 부스트, 프로필, 자동 더킹 등 App Store 안전 기능을 모두 이용할 수 있습니다. 특별히 앱별 EQ 및 출력 라우팅이 필요한 경우에만 SoundSource를 선택하고, macOS 업데이트에서 문제를 해결할 수 있는 경우 무료 옵션을 사용해 보세요.</p>

<p><strong>모든 앱에 고유한 볼륨을 부여할 준비가 되셨나요?</strong> <a href="https://apps.apple.com/app/id6772792641">Mac App Store에서 SoundDial 가져오기</a> 약 2분 안에 첫 번째 믹스를 설정하세요.</p>`,
  },
  "make-mac-louder-for-hard-of-hearing": {
    slug: "make-mac-louder-for-hard-of-hearing",
    title: "난청이 있는 청취를 위해 Mac를 더 크게 만드는 방법",
    description: "최대 볼륨에서도 Mac를 듣는 데 어려움을 겪고 계십니까? SoundDial 및 내장된 팁을 포함하여 난청이 있는 청취를 위해 앱별로 오디오를 증폭하고 명확하게 하는 방법을 알아보세요.",
    date: "2026-07-23",
    readTime: "6분 읽기",
    content: `<p>Mac가 최대 볼륨에서도 소리가 충분히 크지 않으면 가장 빠르고 안정적인 해결 방법은 다음과 같습니다. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, 단일 앱을 100% 이상 증폭시키고 다른 모든 앱은 음소거할 수 있는 Mac App Store 메뉴 바 믹서입니다. 이는 전체 시스템을 작동시키지 않고도 FaceTime, 비디오 또는 영화 플레이어에서 더 크고 더 명확한 음성을 의미합니다. 일회성 가격은 €14.99입니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 난청이 있는 청취를 위해 Mac를 더 크게 만드는 방법" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>볼륨 슬라이더를 최대화하는 것만으로는 충분하지 않은 이유</h2>
<p>난청이 있는 청취자를 위해 macOS 볼륨 슬라이더에는 두 가지 실망스러운 한계가 있습니다. 첫째, 앱 자체 출력의 100%로 제한됩니다. 팟캐스트, 비디오 또는 통화가 조용히 녹음된 경우에도 "최대 볼륨"은 너무 약합니다. 둘째, macOS에는 앱별 볼륨 믹서가 내장되어 있지 않습니다. Windows는 수년간 하나의 레벨을 갖고 있었지만 Mac에서는 모든 앱이 단일 마스터 레벨을 공유합니다. 따라서 부드러운 목소리를 듣기 위해 모든 것을 켜면 배경 음악과 알림 소리도 불편할 정도로 커집니다.</p>
<p>실제로 필요한 것은 만드는 능력이다. <em>하나</em> 앱을 나머지 앱보다 더 크게 설정하고, 일반 천장 이상으로 밀어넣고, 경쟁 사운드를 차단하여 음성이 돋보이도록 합니다. 이것이 바로 이 도구가 채워주는 공백입니다.</p>

<h2>먼저 무료 macOS 접근성 설정을 사용하세요.</h2>
<p>앱을 추가하기 전에 macOS가 이미 제공하는 기능을 설정하는 것이 좋습니다. 이는 선명도를 높이는 데 도움이 되지만 원시 음량을 추가하지는 않습니다.</p>
<ul>
<li><strong>모노 오디오:</strong> 시스템 설정 &rarr; 접근성 &rarr; 오디오, "스테레오 오디오를 모노로 재생"을 켜세요. 한쪽 귀의 청력이 강하면 양쪽 귀에 전체 신호가 전송되므로 대화의 절반도 잃지 않습니다.</li>
<li><strong>밸런스 조정:</strong> 시스템 설정 &rarr; 사운드에서 왼쪽/오른쪽 밸런스를 더 강한 귀 쪽으로 드래그하세요.</li>
<li><strong>배경 소리 줄이기:</strong> 이를 허용하는 앱에서는 음악과 분위기를 낮추어 목소리가 사운드트랙과 싸우지 않도록 합니다.</li>
<li><strong>헤드폰 조정:</strong> AirPods 또는 Beats를 사용하는 경우 시스템 설정 &rarr; 접근성 &rarr; 오디오 &rarr; 헤드폰 조정을 통해 부드러운 소리를 증폭하고 음성에 맞게 조정할 수 있습니다.</li>
</ul>
<p>이것들은 정말로 유용하며 비용도 전혀 들지 않습니다. 하지만 그들 중 누구도 조용한 앱을 만들지 않습니다 <em>100%보다 크게</em>, 그리고 그것이 대개 진짜 문제입니다.</p>

<h2>SoundDial를 사용하여 하나의 앱을 100% 이상 향상시키는 방법</h2>
<p>SoundDial는 메뉴 표시줄에 있으며 현재 사운드를 재생하는 모든 앱에 대한 슬라이더를 표시합니다. 난청이 있는 청취에 가장 도움이 되는 작업 흐름은 다음과 같습니다.</p>
<ul>
<li><strong>듣고 있는 앱을 강화하세요.</strong> 슬라이더를 100% 위로 드래그하면 앱 자체에서 허용하는 것 이상으로 조용한 화상 통화나 팟캐스트를 증폭할 수 있습니다.</li>
<li><strong>다른 모든 것을 음소거하거나 낮춥니다.</strong> 음악, 브라우저 탭 또는 알림 소리를 내려서 따라가려는 음성과 경쟁하는 것이 없도록 하세요.</li>
<li><strong>자동 더킹을 켭니다.</strong> 통화 중에 말하기 시작하면 SoundDial는 자동으로 다른 오디오를 낮춰 상대방이 명확하게 전달되도록 한 다음 나중에 복원합니다.</li>
<li><strong>볼륨 프로필을 저장합니다.</strong> 회의 앱이 향상되고 다른 모든 것이 조용해지는 "화상 통화" 프로필을 만든 다음 매번 다시 조정하는 대신 즉시 해당 프로필로 전환하세요.</li>
<li><strong>출력을 빠르게 전환하십시오.</strong> 시스템 설정을 탐색할 필요 없이 동일한 메뉴에서 스피커, 헤드셋 또는 보청기 연결 장치 사이를 이동합니다.</li>
</ul>
<p>부스트 기능이 여기서 핵심입니다. 앱의 출력을 기본 최대치 이상으로 높이기 때문에 속삭이듯 조용한 녹음을 실제로 들을 수 있는 동시에 시스템의 나머지 부분은 편안한 수준으로 유지됩니다.</p>

<h2>왜곡에 대한 간략한 설명</h2>
<p>모든 소프트웨어 부스트는 신호에 있는 모든 것을 증폭하므로 이미 시끄러운 오디오를 100% 이상 밀어붙이면 클리핑이 발생할 수 있습니다. 실제로는 부스팅 <em>조용한</em> 편안하고 이해하기 쉬운 수준까지의 콘텐츠는 깨끗하게 들립니다. 겸손하게 시작하여 말소리가 명확해질 때까지 올리고 거친 소리가 들리기 시작하면 뒤로 물러서십시오. 남은 청력 문제를 보호하려면 최대 음량보다는 선명도를 목표로 하세요.</p>

<h2>SoundDial를 대안과 비교하는 방법</h2>
<p>몇 가지 옵션이 있으며 정직함은 올바른 옵션을 선택하는 데 도움이 됩니다.</p>
<ul>
<li><strong>SoundSource (Rogue Amoeba, ~$39):</strong> 앱별 EQ 및 출력 라우팅을 갖춘 진정한 프로급 제품입니다. 청력 손실을 위해 주파수를 조각하고 싶다면 강력합니다. 하지만 가격이 두 배 이상 비싸고 직접 다운로드가 필요하며 오디오 캡처 드라이버를 설치해야 합니다. 이는 많은 사람들이 원하는 것보다 더 많은 설정 및 시스템 액세스입니다.</li>
<li><strong>Background Music(무료, 오픈 소스):</strong> 앱별 볼륨을 무료로 제공하지만 부스트, 프로필, 자동 더킹이 부족하고 오디오 시스템에 깊숙이 연결되어 있기 때문에 최신 macOS 버전에서는 작동하지 않을 수 있습니다.</li>
<li><strong>FineTune(무료, 오픈 소스):</strong> 가벼운 메뉴바 볼륨 앱입니다. 기본 사항에는 적합하지만 청각 장애가 있는 청취자가 기대하는 부스트, 프로필 및 더킹은 없습니다.</li>
<li><strong>eqMac(무료):</strong> 부스터가 포함된 이퀄라이저. 사운드를 형성하는 데 유용하지만 깔끔한 앱별 믹싱 및 프로필보다는 EQ를 중심으로 구축되었습니다.</li>
</ul>
<p>어디에 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 여기서 중요한 점은 가격, 안전성 및 특정 기능의 균형입니다. Mac App Store에 있기 때문에 Apple의 검토를 거쳐 샌드박스 처리되었으며 DMG 없이 깔끔하게 설치되며 오디오 드라이버나 시스템 확장이 필요하지 않습니다. macOS 오디오 스택을 파헤칠 필요 없이 €14.99의 일회성 구매로 앱별 부스트, 음소거, 볼륨 프로필 및 자동 더킹 기능을 이용할 수 있습니다.</p>

<h2>결론</h2>
<p>무료 macOS 접근성 옵션을 먼저 설정하면 가치가 있습니다. 그러나 실제 문제가 하나의 앱이 너무 조용하다는 것이라면 단일 앱을 100% 이상으로 밀어넣고 나머지는 조용하게 만들 수 있는 도구가 필요합니다. 이것이 앱별 부스트의 핵심이며 macOS는 자체적으로 이를 수행하지 않습니다.</p>

<p>실제로 Mac를 들을 준비가 되셨나요? <a href="https://apps.apple.com/app/id6772792641">Mac App Store에서 SoundDial 가져오기</a> €14.99에 필요한 앱을 강화하고 자동 더킹 및 프로필을 통해 음성을 명확하게 유지하세요.</p>`,
  },
  "boost-quiet-apps-mac": {
    slug: "boost-quiet-apps-mac",
    title: "Mac에서 조용한 앱을 강화하는 방법(과거 최대 볼륨)",
    description: "하나의 앱이 100%에서도 너무 조용합니까? 앱별 볼륨 믹서인 SoundDial를 사용하여 해당 앱을 Mac의 최대 성능 이상으로 향상시키세요. 가장 빠른 수정 사항과 대안은 다음과 같습니다.",
    date: "2026-07-23",
    readTime: "6분 읽기",
    content: `<p>최대 볼륨에서도 하나의 앱이 너무 조용하다면 가장 빠르고 안정적인 해결 방법은 다음과 같습니다. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, macOS용 메뉴 표시줄 앱별 볼륨 믹서입니다. 모든 앱에 자체 슬라이더와 볼륨을 제공합니다. <strong>부스트</strong> 단일 앱의 성능을 100% 이상으로 끌어올리므로 시스템 볼륨을 건드리지 않고도 조용한 화상 통화나 브라우저 탭 소리가 더 커집니다. Mac App Store의 일회성 €14.99 앱입니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac에서 조용한 앱을 강화하는 방법(과거 최대 볼륨)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>하나의 앱이 100%에서도 조용한 이유</h2>
<p>macOS에는 마스터 볼륨이 하나만 있습니다. 높이면 모든 것이 함께 커집니다. 그러나 각 앱은 자체 내부 수준에서도 사운드를 출력하며 그 수준은 매우 다양합니다. 조용히 마스터링된 YouTube 클립, 마이크가 불량한 Zoom 발신자, 대화 믹싱이 낮은 게임 또는 소프트 스트림이 있는 브라우저 탭은 Mac를 최대로 사용하더라도 다른 모든 것보다 훨씬 낮을 수 있습니다.</p>
<p>진짜 문제: macOS는 <strong>앱별 볼륨 믹서가 내장되어 있지 않습니다.</strong>. Windows는 수년 동안 하나를 사용해 왔습니다(볼륨 믹서, 스피커 아이콘을 마우스 오른쪽 버튼으로 클릭). Mac에는 나머지 앱을 그대로 두고 하나의 앱을 활성화하는 기본 방법이 없으며 단일 앱을 증폭할 방법도 없습니다. <em>위에</em> 정상적인 최대치입니다. 그것이 바로 당신이 겪고 있는 격차입니다.</p>

<h2>가장 빠른 수정: 해당 앱 하나만 강화</h2>
<p>앱별 믹서는 앱과 출력 사이에 자신을 삽입하여 이 문제를 해결하므로 각 스트림을 독립적으로 높이거나 낮추고 100% 이상으로 높일 수 있습니다. 와 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, 흐름이 짧습니다.</p>
<ul>
<li>Mac App Store에서 설치하고 엽니다. 떠다니는 창이 아닌 메뉴 표시줄에 있습니다.</li>
<li>현재 오디오를 재생하는 모든 앱의 슬라이더를 보려면 메뉴 표시줄 아이콘을 클릭하세요.</li>
<li>부스트를 적용하려면 조용한 앱을 찾아 슬라이더를 100% 이상 드래그하세요. 해당 앱만 증폭합니다.</li>
<li>다른 모든 것은 그대로 두십시오. 시스템 볼륨과 기타 앱은 그대로 유지됩니다.</li>
</ul>
<p>부스트 기능은 앱별로 적용되므로 음악이나 알림이 귀에 거슬리는 것을 방지하면서 부드러운 영상 통화를 편안한 수준까지 끌어올릴 수 있습니다. 이것이 내장된 macOS 컨트롤이 할 수 없는 핵심입니다.</p>

<h2>부스트 및 클리핑에 대한 참고 사항</h2>
<p>부스트(Boost)는 정말 유용하지만 마법이 아니라 증폭입니다. 앱의 원본 오디오가 매우 조용하거나 이미 왜곡된 경우, 세게 돌리면 클리핑이 발생하거나 배경 소리가 더 분명해질 수 있습니다. 실제로 적당한 부스트를 사용하면 대부분의 "이 호출이 너무 조용합니다" 상황이 깔끔하게 해결됩니다. 앱을 천장에 세게 밀어붙이는 대신 편안해질 때까지 살짝 밀어 올리면 깨끗한 사운드를 유지할 수 있습니다.</p>

<h2>부스팅 그 이상: 또 다른 도움이 되는 것</h2>
<p>앱별로 제어할 수 있게 되면 다음과 같은 몇 가지 기능을 통해 조용한 앱 문제가 완전히 사라집니다.</p>
<ul>
<li><strong>볼륨 프로필</strong> — 설정을 저장하고(예: "Zoom 강화, Spotify 낮추기, Slack 음소거") 회의마다 슬라이더를 다시 드래그하는 대신 클릭 한 번으로 불러올 수 있습니다.</li>
<li><strong>자동 더킹</strong> — 선택한 앱이 재생되면 자동으로 다른 앱을 딥핑하여 증폭된 통화가 배경 오디오를 통해 선명하게 들립니다.</li>
<li><strong>앱별 음소거</strong> — 다른 것을 일시 중지하지 않고 시끄러운 앱 하나를 침묵시킵니다.</li>
<li><strong>빠른 출력 전환</strong> — 동일한 메뉴에서 스피커, 헤드폰 또는 외부 인터페이스 사이를 이동합니다.</li>
</ul>

<h2>무료 및 프로 대안은 어떻습니까?</h2>
<p>여기에서는 선택권이 있고 정직이 중요하므로 실제 상황은 다음과 같습니다.</p>
<p><strong>SoundSource</strong> (Rogue Amoeba)는 약 $39의 프로급 선택입니다. 앱별 볼륨과 앱별 EQ 및 전체 출력 라우팅을 수행하여 대부분의 사람들에게 필요한 것보다 더 많은 전력을 제공합니다. 단점: 비용이 두 배 이상이고, App Store보다 직접 다운로드하며, 작업을 수행하기 위해 오디오 캡처 드라이버를 설치합니다. 오디오 엔지니어용 툴킷을 원한다면 아주 좋습니다. 하나의 앱을 더 크게 만들고 싶다면 과잉입니다.</p>
<p><strong>Background Music</strong> 무료이며 오픈 소스이며 기본 앱별 볼륨을 수행할 수 있습니다. 그러나 최신 macOS 버전을 출시한 이력이 있는 커뮤니티 프로젝트이며 100%를 넘는 부스트, 프로필 및 자동 더킹이 부족합니다. 무료가 유일한 요구 사항이고 가끔 파손되는 것을 신경 쓰지 않는다면 좋습니다.</p>
<p><strong>FineTune</strong> 무료 오픈 소스 메뉴 표시줄 앱입니다. <strong>eqMac</strong> 무료 EQ 및 시스템 부스터입니다. 예산이 0이라면 둘 다 시도해 볼 가치가 있습니다. 커뮤니티에서 관리하고 EQ에 중점을 두거나 앱별 관리가 더 가볍다는 점만 알아두세요. 프로필과 더킹을 하나의 세련된 패키지에 묶지 않습니다.</p>
<p>어디에 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 토지 : 중간 경로입니다. SoundSource보다 저렴하고 무료 도구보다 성능과 안정성이 뛰어납니다. <strong>Mac App Store</strong>, 이는 Apple이 검토하고 샌드박스 처리되었으며 다음을 사용하여 깔끔하게 설치됨을 의미합니다. <strong>DMG 없음 및 오디오 드라이버 또는 확장 없음</strong> 시스템에 볼트로 고정하십시오. 대부분의 사람들에게 정직한 권장 사항은 간단합니다. 부스트, 프로필 및 자동 더킹을 제공하는 가장 번거롭지 않은 수정을 원한다면 일회성 €14.99의 최고의 가치입니다.</p>

<h2>빠른 답변, 다시 설명됨</h2>
<blockquote>하나의 Mac 앱을 최대 크기보다 크게 만들려면 부스트 기능이 있는 앱별 볼륨 믹서를 사용하세요. 메뉴 표시줄에서 SoundDial를 열고 조용한 앱의 슬라이더를 찾아 100% 이상으로 드래그합니다. 해당 앱만 소리가 커집니다.</blockquote>

<p>전체 Mac에 대해 단일 볼륨 슬라이더와 싸우지 마세요. 받기 <a href="https://apps.apple.com/app/id6772792641">Mac App Store의 SoundDial</a> €14.99로 한 번에 조용한 앱을 단 몇 초 만에 한계를 뛰어넘고 프로필을 저장하면 다시는 생각할 필요가 없습니다.</p>`,
  },
  "amplify-quiet-video-podcast-audio-mac": {
    slug: "amplify-quiet-video-podcast-audio-mac",
    title: "Mac에서 조용한 비디오 및 팟캐스트를 증폭시키는 방법",
    description: "일부 YouTube 동영상, 팟캐스트, 강의는 100%에서도 너무 조용합니다. SoundDial를 사용하여 macOS의 최대치 이상으로 앱별 볼륨을 높이는 방법은 다음과 같습니다.",
    date: "2026-07-23",
    readTime: "6분 읽기",
    content: `<p>가장 빠르고 안정적인 수정은 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, 모든 앱에 자체 볼륨 슬라이더와 실제 볼륨 슬라이더를 제공하는 Mac App Store 메뉴 바 믹서 <strong>부스트</strong> 100%를 넘어서는 거죠. 브라우저나 팟캐스트 플레이어를 열고 슬라이더를 최대값 위로 드래그하면 조용한 비디오나 강의 소리가 즉시 커집니다. 드라이버도 없고 다시 시작할 필요도 없습니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac에서 조용한 비디오 및 팟캐스트를 증폭시키는 방법" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>일부 비디오와 팟캐스트가 너무 조용한 이유</h2>
<p>Mac를 100%로 올려도 인터뷰는 여전히 속삭임입니다. 이것은 당신의 상상이 아닙니다. 오디오는 매우 다양한 음량 수준으로 마스터링됩니다. 노트북 마이크에 녹음된 웹 세미나, 조용한 인디 팟캐스트 또는 오래된 강의 업로드는 전문적으로 제작된 YouTube 비디오보다 15~20dB 아래에 위치할 수 있습니다. 시스템 볼륨이 이미 최대에 도달했으므로 더 이상 제공할 여유 공간이 없습니다.</p>
<p>문제는 다음과 같습니다. macOS는 <strong>앱별 볼륨 믹서가 내장되어 있지 않습니다.</strong>. Windows는 수년간 하나(시스템 트레이의 볼륨 믹서)를 갖고 있었지만 Mac에서는 볼륨 키가 모든 것에 대해 하나의 전역 수준을 이동합니다. 단일 앱을 100% 이상으로 푸시하는 것은 말할 것도 없고 "이 브라우저 탭만 더 크게 설정"이라고 말하는 기본 방법은 없습니다.</p>

<h2>실제 해결 방법: 앱별 볼륨 향상</h2>
<p>스피커가 일반적으로 허용하는 것보다 조용한 소스를 더 크게 만들려면 게인을 적용하는 소프트웨어가 필요합니다. <em>그 앱은 구체적으로</em> 100% 상한선 이상으로 증폭할 수 있습니다. 이것이 바로 부스트 기능을 갖춘 앱별 믹서가 하는 일입니다.</p>
<p>와 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, 실행 중인 모든 앱은 자체 슬라이더가 있는 메뉴 표시줄 목록에 표시됩니다. 조용한 앱을 150% 또는 200%까지 슬라이드하면 오디오가 실시간으로 증폭됩니다. 부스트는 앱별로 이루어지기 때문에 음악, 알림, 다른 창의 통화 등 다른 모든 항목은 정상 수준으로 유지됩니다. 하나의 소프트 팟캐스트를 듣기 위해 전체 시스템을 폭발시키는 것이 아닙니다.</p>
<blockquote>글로벌 볼륨이 "Mac의 소리는 얼마나 큽니까?"라고 묻습니다. 앱별 믹서가 "얼마나 큰지 묻습니다. <em>이</em> 앱?" — 한 비디오가 조용하고 나머지는 괜찮을 때 실제로 중요한 질문입니다.</blockquote>

<h2>조용한 비디오나 팟캐스트의 볼륨을 높이는 방법을 단계별로 살펴보세요.</h2>
<ul>
<li><strong>SoundDial 설치</strong> Mac App Store에서. 샌드박스 처리되고 Apple의 검토를 거쳤기 때문에 다른 앱처럼 깔끔하게 설치됩니다. 별도의 다운로드나 오디오 드라이버, 권한 부여가 필요하지 않습니다.</li>
<li><strong>재생 시작</strong> Safari, Chrome, 팟캐스트 클라이언트, VLC 등 어떤 앱을 사용하든 조용한 비디오, 팟캐스트 에피소드 또는 강의를 즐길 수 있습니다.</li>
<li><strong>SoundDial 아이콘을 클릭하세요.</strong> 메뉴 표시줄에 현재 소리를 내는 각 앱에 대한 슬라이더가 표시됩니다.</li>
<li><strong>해당 앱의 슬라이더를 100% 위로 드래그하세요.</strong> — 먼저 150%로 시도한 다음 여전히 너무 부드러우면 더 높이 올려보세요. 변화는 즉각적입니다.</li>
<li><strong>다른 모든 것을 그대로 두십시오.</strong> 증폭한 앱만 소리가 커집니다. 시스템이 균형을 유지합니다.</li>
</ul>
<p>매일 같은 앱(예: 팟캐스트 플레이어 및 브라우저)을 강화하는 경우 해당 설정을 <strong>볼륨 프로필</strong> 매번 다시 조정하는 대신 한 번의 클릭으로 다시 불러올 수 있습니다.</p>

<h2>부스팅에 대한 주의사항</h2>
<p>100%를 초과하여 증폭하면 게인이 추가되고 게인에는 제한이 있습니다. 매우 조용하고 품질이 낮은 녹음을 충분히 세게 누르면 클리핑이나 왜곡이 들릴 수 있습니다. 이는 앱의 결함이 아니라 깨끗한 신호가 부족한 소스입니다. 편안하게 들릴 때까지 증폭한 다음 거친 소리가 들리기 시작하면 뒤로 물러서세요. 내장된 노트북 스피커에서는 극단적인 부스트가 드라이버에 부담을 줄 수 있으므로 좋은 헤드폰이나 외부 스피커를 사용하는 것보다 더 쉽게 이동할 수 있습니다.</p>

<h2>무료 또는 내장 옵션은 어떻습니까?</h2>
<p>대안이 있으며 이에 대해 솔직하게 말할 가치가 있습니다.</p>
<ul>
<li><strong>시스템 볼륨 + 앱 수준 슬라이더.</strong> 일부 플레이어(VLC, 확장 프로그램을 통한 몇 가지 브라우저)에서는 자체 오디오를 강화할 수 있습니다. 하나의 앱에서만 필요하다면 괜찮습니다. 그러나 통합 제어나 프로필 없이 각 앱을 별도로 구성해야 합니다.</li>
<li><strong>eqMac</strong> 무료 EQ 및 부스터입니다. 시스템 전체의 음량을 높일 수 있지만 깔끔한 앱별 믹서가 아닌 전역 도구이며 전체 출력 수준에서 작동합니다.</li>
<li><strong>Background Music</strong> 무료이며 오픈 소스이며 앱별 볼륨을 제공합니다. 그러나 최신 버전의 macOS에서 작동하지 않을 수 있는 오디오 캡처 설정에 의존하며 전용 부스트, 프로필 및 자동 더킹이 부족합니다.</li>
<li><strong>FineTune</strong> 무료 오픈 소스 메뉴 표시줄 앱입니다. 기본 기능을 원하고 커뮤니티에서 관리하는 소프트웨어에 신경 쓰지 않는 경우 가벼운 옵션입니다.</li>
<li><strong>SoundSource</strong> by Rogue Amoeba(~$39)는 앱별 EQ, 출력 라우팅 등 프로급 헤비급 제품입니다. 또한 다운로드와 오디오 캡처 드라이버가 필요하며 가격은 SoundDial의 두 배 이상입니다. 당신이 원하는 것이 조용한 오디오를 더 크게 만드는 것이라면 과잉입니다.</li>
</ul>

<h2>SoundDial가 실용적인 선택인 이유</h2>
<p>SoundDial는 이 정확한 문제에 대한 최적의 위치에 있습니다. 그것은 <strong>€14.99 일회성</strong> — 구독 없음 — 그리고 그것은 <strong>Mac App Store</strong>, 이는 샌드박스 처리되고 Apple의 검토를 거쳐 DMG 또는 신뢰할 수 있는 시스템 확장 없이 설치된다는 의미입니다. 실제로 원하는 앱별 부스트와 함께 프로필, 앱별 음소거, 빠른 출력 전환 등을 얻을 수 있습니다. <strong>자동 더킹</strong> 하나에 집중해야 할 때 다른 앱을 잠그는 것입니다. 시끄러운 작업은 간단하게 수행하고 나머지는 잘 수행합니다.</p>

<p><strong>조용한 비디오와 팟캐스트를 듣기 위해 애쓰는 데 지치셨나요?</strong> <a href="https://apps.apple.com/app/id6772792641">Mac App Store에서 SoundDial 가져오기</a> €14.99에 모든 앱에 고유한 볼륨을 부여하여 무엇이든 선명하게 들을 수 있습니다.</p>`,
  },
  "set-different-volume-for-each-app-mac": {
    slug: "set-different-volume-for-each-app-mac",
    title: "Mac에서 각 앱에 대해 서로 다른 볼륨을 설정하는 방법",
    description: "macOS에는 앱별 볼륨 믹서가 내장되어 있지 않습니다. SoundDial 및 대안을 사용하여 Mac의 각 앱에 대해 독립적이고 지속적인 볼륨 수준을 설정하는 방법은 다음과 같습니다.",
    date: "2026-07-23",
    readTime: "5분 읽기",
    content: `<p>macOS에는 각 앱에 대해 서로 다른 볼륨을 설정하는 기본 제공 방법이 없으므로 메뉴 표시줄 볼륨 믹서가 필요합니다. 가장 빠르고 안정적인 수정은 다음과 같습니다. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, 모든 애플리케이션에 고유한 볼륨 슬라이더, 앱별 음소거 및 조용한 앱을 100% 이상 밀어내는 부스트를 제공하는 Mac App Store 앱입니다. 레벨을 한 번 설정하면 그대로 유지됩니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac의 각 앱에 대해 서로 다른 볼륨을 설정하는 방법" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Mac에 앱별 볼륨 조절 기능이 없는 이유</h2>
<p>Windows에서 전환했다면 아마도 각 앱마다 자체 슬라이더가 있는 작은 패널인 Windows 볼륨 믹서와 동등한 제품을 찾았을 것입니다. 거기에 없습니다. macOS는 하나의 글로벌 시스템 볼륨만 제공합니다. YouTube 비디오, Zoom 통화, Spotify 또는 게임이든 모두 동일한 마스터 레벨을 공유합니다.</p>
<p>그렇지 않을 때까지는 괜찮습니다. Discord 채팅은 음악을 압도합니다. 팟캐스트가 아래에서 조용히 재생되는 동안 브라우저 광고는 최고 볼륨으로 폭발합니다. 게임은 귀가 먹먹할 정도로 들리는데, 백그라운드에서 들리는 음성 통화가 너무 약합니다. Apple이 제공하는 유일한 "솔루션"은 각 앱을 열고 앱에 내부 볼륨이 있는 경우 수동으로 내부 볼륨을 조정하고 세션마다 다시 실행하는 것입니다.</p>
<p>실제 앱별 제어를 얻으려면 앱과 출력 장치 사이에 있는 작은 유틸리티가 필요합니다. 아래에는 올바르게 수행하는 방법과 대안에 대한 솔직한 메모가 나와 있습니다.</p>

<h2>가장 빠른 방법: SoundDial (Mac App Store)</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 메뉴 표시줄에 있으며 현재 오디오를 재생 중인 모든 앱을 나열합니다. 각각은 독립적인 슬라이더를 갖습니다. 전체 작업 흐름은 다음과 같습니다.</p>
<ul>
<li><strong>Mac App Store에서 설치합니다.</strong> Apple이 검토하고 샌드박스 처리되었기 때문에 DMG, 오디오 드라이버, 승인할 커널이나 시스템 확장이 없습니다. 일반 앱처럼 설치되며 같은 방식으로 제거할 수 있습니다.</li>
<li><strong>메뉴바 아이콘을 클릭하세요.</strong> 각 활성 앱에 대한 슬라이더와 마스터 컨트롤이 표시됩니다.</li>
<li><strong>드래그하여 레벨을 설정하세요.</strong> 한 번의 클릭으로 Discord를 낮추고, Spotify를 위로 올리고, 시끄러운 브라우저 탭의 앱을 완전히 음소거할 수 있습니다.</li>
<li><strong>조용한 앱을 강화하세요.</strong> 앱이 100%에서도 너무 부드럽다면 앱별 부스트를 사용하여 100% 이상으로 올리세요.</li>
<li><strong>프로필을 저장합니다.</strong> 매일 슬라이더를 다시 끌 필요 없이 "게임", "업무 통화" 또는 "음악" 믹스를 저장하고 즉시 전환할 수 있습니다.</li>
</ul>
<p>가장 성가신 시나리오를 해결하기 때문에 두 가지 기능을 언급할 가치가 있습니다.</p>
<ul>
<li><strong>자동 더킹</strong> 선택한 앱이 재생되면 자동으로 다른 앱의 수준을 낮추므로 전화가 올 때 음악이 낮아지고 나중에 돌아올 때 수동으로 조작할 필요가 없습니다.</li>
<li><strong>빠른 출력 전환</strong> 시스템 설정으로 들어가지 않고도 동일한 메뉴에서 헤드폰과 스피커 사이를 이동할 수 있습니다.</li>
</ul>
<p>레벨은 앱별로 기억되고 프로필에 저장되기 때문에 대부분의 사람들이 실제로 원하는 부분은 다음과 같습니다. <em>숙박</em> 설정합니다.</p>

<h2>무료 및 유료 대안을 솔직하게 비교</h2>
<p>SoundDial가 유일한 옵션은 아니며 필요에 따라 무료 도구로도 충분할 수 있습니다. 여기에 공정한 요약이 있습니다.</p>

<h2>SoundSource (Rogue Amoeba)</h2>
<p>SoundSource는 프로급 헤비급 선수입니다. 앱별 볼륨과 함께 앱별 EQ 및 전체 출력 라우팅을 수행하므로 하나의 앱을 헤드폰으로 보내고 다른 앱을 스피커로 보낼 수 있습니다. 정말 훌륭합니다. 단점: 비용은 약 39달러이며 App Store를 새로 설치하는 것이 아니며 시스템에 오디오 캡처 드라이버를 추가해야 하는 직접 다운로드입니다. EQ와 라우팅이 필요한 오디오 전문가라면 그만한 가치가 있습니다. 각 앱을 적절한 볼륨으로 원한다면 필요한 것보다 더 많은 도구와 설정이 필요합니다.</p>

<h2>Background Music(오픈 소스, 무료)</h2>
<p>Background Music는 앱별 볼륨 및 자동 일시 중지 기능을 제공하는 무료 오픈 소스 앱입니다. 문제는 안정성입니다. 가상 오디오 장치를 설치하고 최신 macOS 릴리스에서 중단된 이력이 있으며 업데이트 후 재설치나 수정이 필요한 경우도 있습니다. 또한 부스트, 저장된 프로필 및 진정한 자동 더킹이 부족합니다. 무료를 원하고 가끔 유지 관리를 신경 쓰지 않는 경우 좋습니다.</p>

<h2>FineTune 및 eqMac</h2>
<p>FineTune는 가벼운 시작점인 무료 오픈 소스 메뉴 표시줄 앱입니다. eqMac는 각 앱에 고유한 영구 슬라이더를 제공하는 것보다 EQ와 전반적인 게인을 더 목표로 하는 시스템 전체 부스터가 포함된 무료 이퀄라이저입니다. 요구 사항이 좁은 경우 둘 다 시도해 볼 가치가 있지만 둘 다 "프로필로 저장되는 앱당 다른 볼륨" 작업 흐름에 중점을 두지 않습니다.</p>

<h2>어느 것을 선택해야 합니까?</h2>
<ul>
<li><strong>프로필과 자동 더킹을 통해 깔끔하게 작동하길 원하시나요?</strong> SoundDial는 €14.99의 일회성으로 App Store에서 제공되며 설치할 드라이버가 없습니다.</li>
<li><strong>앱별 EQ 및 오디오 라우팅이 필요하고 가격이나 드라이버에 신경쓰지 않으시나요?</strong> SoundSource.</li>
<li><strong>무료를 원하고 macOS 업데이트 시 수정해도 괜찮습니까?</strong> Background Music, FineTune 또는 eqMac.</li>
</ul>
<p>SoundDial의 진정한 장점은 모든 앱에 대한 독립적인 볼륨, 음소거 및 부스트, 전환 가능한 프로필에 저장, 자동 더킹 기능이 모두 샌드박스 처리된 App Store 다운로드 내부에 있다는 점입니다. 구독이 아닌 일회성 €14.99의 비용으로 클릭 한 번으로 믿고 제거할 수 있습니다.</p>

<blockquote>드라이버 없음, 확장 없음, DMG 없음. 각 앱의 볼륨을 한 번 설정하고 프로필로 저장하면 나머지는 자동 더킹으로 처리됩니다.</blockquote>

<p>모든 앱에 고유한 볼륨을 부여할 준비가 되셨나요? <a href="https://apps.apple.com/app/id6772792641">Mac App Store에서 SoundDial 가져오기</a> 약 1분 안에 완벽한 믹스를 설정하세요.</p>`,
  },
  "make-one-app-quieter-than-the-rest-mac": {
    slug: "make-one-app-quieter-than-the-rest-mac",
    title: "Mac에서 하나의 앱을 다른 앱보다 조용하게 만드세요",
    description: "하나의 시끄러운 앱이 Mac의 나머지 앱을 압도하고 있습니까? 다른 앱을 건드리지 않고 단일 앱의 볼륨을 줄이는 가장 빠르고 안정적인 방법은 다음과 같습니다.",
    date: "2026-07-23",
    readTime: "5분 읽기",
    content: `<p>다른 모든 앱은 그대로 두고 하나의 앱을 종료하려면 다음을 사용하세요. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, macOS용 메뉴 표시줄 앱별 볼륨 믹서입니다. 그것을 열고 목록에서 시끄러운 앱을 찾아 슬라이더를 아래로 끕니다. 음악, 통화 및 기타 오디오가 자체 수준을 유지하는 동안 해당 앱은 즉시 조용해집니다. 가장 빠르고 안정적인 수정입니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac의 다른 앱보다 하나의 앱을 더 조용하게 만드세요" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>macOS가 이것을 그렇게 어렵게 만드는 이유</h2>

<p>실망스러운 진실은 다음과 같습니다. macOS에는 앱별 볼륨 믹서가 내장되어 있지 않습니다. Windows는 수년 동안 하나를 사용해왔지만(볼륨 아이콘을 마우스 오른쪽 버튼으로 클릭하고 볼륨 믹서 열기 완료) Mac에서는 볼륨 키와 메뉴 표시줄 슬라이더가 마스터 출력 하나만 제어합니다. 볼륨을 낮추면 모든 것이 함께 더 조용해집니다. 볼륨을 높이면 시끄러운 앱의 소리가 여전히 커지고 나머지 앱과 함께 더 커집니다.</p>

<p>따라서 게임의 음향 효과가 폭발적이거나, 브라우저 탭에서 광고가 자동 재생되거나, 팟캐스트에 알림 소리가 계속 급증할 때 유일한 기본 옵션은 서투른 것뿐입니다. 즉, 전체 시스템을 음소거하고, 각 앱의 자체 볼륨 설정을 자세히 살펴보거나(있는 경우) 위반자를 완전히 종료하는 것입니다. 그 어느 것도 단순히 "이 앱을 더 조용하게 만들고 다른 모든 것을 그대로 두십시오"라고 말할 수는 없습니다.</p>

<h2>빠른 수정: 앱별 볼륨 믹서</h2>

<p>앱별 볼륨 믹서는 실행 중인 모든 앱에 독립적인 슬라이더를 제공합니다. 이것이 바로 당신이 놓치고 있는 컨트롤입니다. 와 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 그것은 다음과 같습니다</p>

<ul>
<li><strong>메뉴바 믹서를 엽니다.</strong> SoundDial 아이콘을 클릭하면 현재 오디오를 재생하는 모든 앱의 실시간 목록이 표시됩니다.</li>
<li><strong>시끄러운 것을 찾으십시오.</strong> 게임, 브라우저, 화상 통화, 알림 소리 등 무엇이든 나머지를 압도합니다.</li>
<li><strong>슬라이더를 아래로 드래그하세요.</strong> 균형이 잡힌 느낌이 들 때마다 40%, 20%로 설정하세요. 변경 사항은 즉시 적용되며 해당 앱에만 영향을 미칩니다.</li>
<li><strong>다른 모든 것을 그대로 두십시오.</strong> 음악 플레이어, 통화, 기타 탭 등 모두 사용자가 설정한 볼륨을 유지합니다.</li>
</ul>

<p>또한 다른 앱이 계속 재생되는 동안 한 번의 클릭으로 단일 앱을 완전히 음소거하거나 너무 조용한 경우 조용한 앱을 100% 이상 높일 수도 있습니다. 앱을 다시 시작하거나 메뉴 다이빙을 할 필요가 없습니다.</p>

<h2>이것이 당신을 구하는 일반적인 경우</h2>

<ul>
<li><strong>배경 음악을 통한 시끄러운 게임.</strong> 게임을 편안한 수준으로 낮추고 그 아래에서 재생 목록을 최대 볼륨으로 유지하세요.</li>
<li><strong>급증하는 브라우저 광고 및 비디오.</strong> 브라우저를 더 낮게 고정하면 놀라운 자동 재생이 발생하지 않습니다.</li>
<li><strong>통화나 팟캐스트를 통해 알림이 울립니다.</strong> 실제로 관심 있는 오디오를 무음으로 설정하지 않고 알림이 많은 앱을 끄세요.</li>
<li><strong>시끄러운 미디어 속에서 조용한 화상 통화.</strong> 시끄러운 앱의 소리를 낮추는 대신 통화 소리를 100% 이상으로 높여서 사람들의 소리를 또렷하게 들을 수 있습니다.</li>
</ul>

<h2>볼륨 프로필 및 자동 더킹으로 한 번 설정</h2>

<p>시끄러운 앱 하나를 수정하는 것은 좋지만 아마도 계속 수정되기를 원할 것입니다. SoundDial에는 이를 영구적으로 만드는 두 가지 기능이 있습니다.</p>

<p><strong>볼륨 프로필</strong> 앱별 레벨 세트를 저장하고 클릭 한 번으로 불러올 수 있습니다. 게임이 30%, 음악이 100%인 "게임" 프로필과 통화량이 증가하고 다른 모든 것이 감소된 "작업" 프로필을 구축하세요. 매번 슬라이더를 다시 드래그하지 않고도 상황을 전환할 수 있습니다.</p>

<p><strong>자동 더킹</strong> 선택한 앱이 재생될 때 다른 앱의 속도를 자동으로 낮추었다가 나중에 다시 가져오므로 시끄러운 앱이 애초에 오디오를 완전히 가로채지 않습니다. 프로필, 더킹 및 빠른 출력 전환(시스템 설정을 열지 않고 스피커와 헤드폰 사이를 이동) 사이에서 밸런스를 한 번 설정하고 볼륨 관리를 중단합니다.</p>

<h2>SoundDial를 대안과 비교하는 방법</h2>

<p>Mac에서 앱별 볼륨을 얻는 다른 방법이 있습니다. 솔직한 모습은 이렇습니다.</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba, ~$39)</strong> 진정한 프로급입니다. 앱별 EQ와 볼륨 제어 외에 전체 출력 라우팅이 가능합니다. 하지만 가격이 두 배 이상 비싸고 별도의 다운로드와 오디오 캡처 드라이버가 필요합니다. 스튜디오 수준의 툴킷을 원한다면 훌륭합니다. 하나의 앱만 비활성화하고 싶다면 필요한 것 이상입니다.</li>
<li><strong>Background Music</strong> 무료이며 오픈 소스이므로 훌륭하지만 최신 macOS 버전에서는 문제가 발생할 수 있으며 볼륨 부스트, 프로필 및 자동 더킹이 부족합니다.</li>
<li><strong>FineTune</strong> 무료 오픈 소스 메뉴 표시줄 앱입니다. <strong>eqMac</strong> 부스터가 포함된 무료 EQ입니다. 무료가 최우선이라면 두 가지 모두 시도해 볼 가치가 있지만 가격 때문에 세련미, 신뢰성, 기능을 포기하게 됩니다.</li>
</ul>

<p>SoundDial는 일회성 €14.99이며 구독이 필요하지 않은 최적의 위치에 있습니다. Mac App Store에 있기 때문에 Apple의 검토와 샌드박스 처리를 거쳤으며 DMG, 오디오 드라이버, 승인할 시스템 확장 없이 깔끔하게 설치됩니다. 39달러의 가격표나 깨지기 쉬운 무료 도구 없이도 이 문제에 실제로 중요한 기능인 앱별 볼륨, 음소거, 부스트, 프로필 및 자동 더킹을 얻을 수 있습니다.</p>

<h2>결론</h2>

<p>macOS를 사용하면 단일 앱을 자체적으로 거부할 수는 없지만 몇 초 안에 그 격차를 줄일 수 있습니다. 앱별 믹서를 설치하고 시끄러운 앱의 슬라이더를 아래로 드래그하면 나머지 오디오가 정확히 원하는 위치에 유지됩니다. 프로필을 저장하면 다시는 이 문제로 싸울 일이 없습니다.</p>

<p><strong>나머지 앱을 계속 익사시키는 앱 하나를 침묵시킬 준비가 되셨나요?</strong> 받기 <a href="https://apps.apple.com/app/id6772792641">Mac App Store의 SoundDial</a> €14.99, 한 번의 결제, 운전자 없음, 구독 없음.</p>`,
  },
  "streaming-audio-mixer-mac-mic-game-music": {
    slug: "streaming-audio-mixer-mac-mic-game-music",
    title: "스트리머용 Mac 오디오 믹서: 밸런스 마이크, 게임 및 음악",
    description: "Mac에서 스트리밍하는 동안 마이크, 게임 오디오, 음악 및 알림의 균형을 맞추는 가장 빠른 방법입니다. SoundDial는 프로필과 더킹이 포함된 앱별 볼륨 믹서를 제공합니다.",
    date: "2026-07-23",
    readTime: "6분 읽기",
    content: `<p>Mac에서 스트리밍하는 동안 마이크, 게임, 음악 및 알림의 균형을 맞추려면 가장 빠르고 안정적인 수정이 필요합니다. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, 메뉴 표시줄 앱별 볼륨 믹서입니다. macOS에는 믹서가 내장되어 있지 않으므로 SoundDial를 사용하면 앱별로 독립적인 레벨을 설정하고, 조용한 소스를 강화하고, 스트리밍 프로필을 저장하고, 말할 때 음악을 자동으로 더킹할 수 있습니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 스트리머용 Mac 오디오 믹서: 밸런스 마이크, 게임 및 음악" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>문제: macOS에는 앱별 볼륨 조절 기능이 없습니다.</h2>
<p>Windows는 수년간 볼륨 믹서를 사용해 왔습니다. macOS는 여전히 배송되지 않습니다. 시스템 볼륨 슬라이더는 모든 것을 한 번에 이동하므로 라이브 중에는 쓸모가 없습니다. 스트리밍 중에는 동일한 출력을 위해 싸우는 최소 4개의 소스를 저글링하게 됩니다.</p>
<ul>
<li><strong>귀하의 음성 / 마이크 모니터링</strong> — 모든 것 위에 앉아야 합니다.</li>
<li><strong>게임 오디오</strong> — 시끄럽고 역동적이며 행동 중에 스파이크가 발생하기 쉽습니다.</li>
<li><strong>배경음악</strong> — 논평을 할 때는 조용히 있어야 합니다.</li>
<li><strong>알림 및 채팅 소리</strong> — Discord, Stream Deck, 팔로어 경고, 알림.</li>
</ul>
<p>앱별 제어가 없으면 게임의 인앱 슬라이더를 타고 Spotify를 손으로 음소거하고 시끄러운 컷씬이 시청자를 날려버리지 않기를 기도하게 됩니다. 그것은 혼합이 아니라 피해 통제입니다.</p>

<h2>적절한 스트리밍 믹서가 수행해야 할 작업</h2>
<p>Mac의 제작자 중심 오디오 설정은 앱별 독립 레벨, 너무 조용한 소스를 증폭시키는 기능, 즉시 불러올 수 있는 저장된 구성, 말하는 순간 음악이 떨어지도록 자동 더킹이라는 네 가지 기능을 제공해야 합니다. SoundDial는 메뉴 표시줄의 네 가지를 모두 다룹니다.</p>

<h3>1. 모든 앱에 대한 독립적인 볼륨</h3>
<p>게임을 60%로, 음악을 25%로, Discord를 80%로, 브라우저를 40%로 설정하세요. 각 앱에는 자체 슬라이더가 있습니다. 다른 어떤 것에도 피가 흐르지 않습니다. 소스가 스트림 중간에 오작동하는 경우 앱 자체를 건드리지 않고도 앱별로 즉시 음소거할 수도 있습니다.</p>

<h3>2. 조용한 소스를 위한 볼륨 증폭</h3>
<p>일부 앱과 게임은 100%에서도 너무 조용합니다. SoundDial의 앱별 부스트는 소스를 정상 한도 이상으로 밀어넣어 재인코딩이나 플러그인 없이 멍한 게임이나 저용량 비디오를 믹스에서 필요한 위치에 배치합니다.</p>

<h3>3. 다양한 장면에 대한 볼륨 프로필</h3>
<p>이는 스트리머의 시간을 가장 많이 절약해 주는 기능입니다. "Just Chatting" 믹스(음악 증가, 게임 종료)는 "Boss Fight" 믹스(게임 시작, 거의 무음에 가까운 음악)와 다르며 "BRB" 믹스와도 다릅니다. 각각을 프로필로 저장하고 4개의 슬라이더를 실시간으로 드래그하는 대신 한 번의 클릭으로 전환할 수 있습니다.</p>

<h3>4. 자동 더킹 기능으로 음악이 사용자의 목소리에 맞춰지도록 합니다.</h3>
<p>자동 더킹은 말할 때 배경 오디오를 자동으로 낮추고, 멈추면 다시 들립니다. 솔로 스트리머의 경우 이는 명확한 해설과 지속적으로 목소리를 묻어두는 음악의 차이입니다. 수동이 아닌 자동으로 처리됩니다.</p>

<h2>OBS가 적합한 곳</h2>
<p>OBS는 데스크탑 볼륨 믹서가 아닌 방송 도구입니다. OBS는 오디오 믹서 패널과 필터를 통해 스트림에 들어가는 레벨을 제어하지만 캡처하는 오디오 소스에서 작동합니다. 개별 macOS 앱에 도달하여 시스템 수준에서 낮추지는 않습니다. Mac에서 깨끗한 앱별 데스크톱 오디오를 OBS로 가져오는 것은 항상 고통스러운 부분이었습니다.</p>
<p>실용적인 작업 흐름: SoundDial를 사용하여 Mac에서 실제 앱별 레벨을 설정하여 출력되는 내용이 이미 균형을 이루도록 한 다음 OBS가 방송 레벨을 캡처하고 미세 조정하도록 합니다. 소스에서 믹스를 한 번 설정하면 OBS와 싸울 일이 훨씬 줄어듭니다. SoundDial의 빠른 출력 전환을 통해 장면 사이에 시스템 설정으로 들어가지 않고도 헤드폰과 스피커 사이를 이동할 수 있습니다.</p>

<h2>SoundDial 대 대안</h2>
<p>선택 사항이 있으며 여기서 정직성이 중요합니다.</p>
<ul>
<li><strong>SoundSource (Rogue Amoeba, ~$39)</strong> — 앱별 EQ 및 전체 출력 라우팅을 갖춘 전문가 수준입니다. 훌륭하지만 가격이 두 배 이상이고 직접 다운로드가 필요하며 오디오 캡처 드라이버를 설치해야 합니다. 깨끗한 앱별 레벨, 부스트 및 더킹이 주로 필요한 경우 과잉입니다.</li>
<li><strong>Background Music(무료, 오픈 소스)</strong> — 정말 유용하고 무료이지만 최신 macOS 버전에서는 작동하지 않을 수 있으며 부스트, 프로필, 자동 더킹도 없습니다. 스트리머가 기대하는 정확한 기능입니다.</li>
<li><strong>FineTune(무료 오픈 소스 메뉴 표시줄 앱)</strong> — 가벼운 앱별 제어이지만 라이브 스트리밍용으로 제작된 프로필과 더킹 콤보가 없는 커뮤니티 프로젝트입니다.</li>
<li><strong>eqMac(무료 EQ + 부스터)</strong> — 톤 쉐이핑 및 부스팅에 적합하지만 앱별 스트리밍 믹서가 아닌 이퀄라이저입니다.</li>
</ul>
<p>SoundDial의 각도: 그것은 <strong>€14.99 일회성</strong> 에서 구매하세요 <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a> — Apple의 검토를 거쳐 샌드박스 처리되었으며 DMG나 오디오 드라이버 또는 시스템 확장 없이 깔끔하게 설치됩니다. 마지막 부분은 스트리머에게 중요합니다. 커널 수준 구성 요소가 적다는 것은 macOS가 스트리밍 전날 밤에 업데이트할 때 예상치 못한 중단이 적다는 것을 의미합니다.</p>

<h2>정직한 트레이드오프</h2>
<p>방송급 EQ와 복잡한 라우팅 체인이 필요한 경우 SoundSource가 제격입니다. 무료 Tinkerer's Tool을 원하고 가끔 파손되는 것을 개의치 않는다면 Background Music 또는 FineTune가 적합합니다. 그러나 macOS 업데이트 후에도 안전한 App Store 설치를 통해 스트리밍이 실제로 요구하는 믹스(앱별 레벨, 부스트, 저장된 장면 프로필 및 자동 더킹)를 원한다면 SoundDial가 가장 직접적인 비용 절감 경로입니다.</p>

<p><strong>스트림 오디오를 수정할 준비가 되셨나요?</strong> 받기 <a href="https://apps.apple.com/app/id6772792641">Mac App Store의 SoundDial</a> 가격: €14.99 — 마이크, 게임, 음악 및 알림 수준을 한 번 설정하고 프로필로 저장하면 자동 더킹을 통해 목소리가 가장 잘 들리게 됩니다.</p>`,
  },
  "macos-tahoe-audio-crackling-popping-fix": {
    slug: "macos-tahoe-audio-crackling-popping-fix",
    title: "macOS Tahoe에서 오디오 크랙 및 터지는 문제를 해결하는 방법",
    description: "macOS Tahoe 26으로 업데이트한 후 오디오가 딱딱거리거나 터지는 현상이 발생합니까? 샘플 속도를 일치시키고, CoreAudio를 재설정하고, Bluetooth 코덱을 확인하고, 플러그인 충돌을 삭제하여 문제를 해결하세요. 전체 문제 해결 순서는 다음과 같습니다.",
    date: "2026-07-23",
    readTime: "6분 읽기",
    content: `<p>macOS Tahoe 26으로 업데이트한 후 딱딱거리고 터지는 현상은 거의 항상 샘플링 속도 불일치, 불안정한 Bluetooth 코덱 협상 또는 중단된 CoreAudio 프로세스로 인해 발생합니다. 오디오 MIDI 설정에서 출력 샘플 속도를 일치시키고 재설정하여 문제를 해결하세요. <code>coreaudiod</code>, Bluetooth 헤드폰을 잊어버리고 다시 페어링하고 오디오 플러그인 호스트를 종료합니다. 아래 순서대로 진행해 보세요.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — macOS Tahoe에서 오디오 크랙 및 팝핑 문제를 해결하는 방법" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>저렴한 수정으로 시작하세요</h2>

<p>기술적인 내용을 다루기 전에 대부분의 경우 1분 안에 해결되는 두 가지 사항을 제외하세요.</p>

<ul>
<li><strong>Mac를 다시 시작하십시오.</strong> Tahoe 업데이트로 인해 오디오 데몬이 놀랍게도 절반만 마이그레이션된 상태로 방치되는 경우가 많습니다. 완전히 재부팅하면 CoreAudio가 처음부터 다시 로드되고 업데이트 후 딱딱거리는 소리가 대부분 해결됩니다.</li>
<li><strong>출력 장치를 분리했다가 다시 연결하십시오.</strong> USB DAC, 도크 또는 오디오 인터페이스인 경우 연결을 해제하고 몇 초간 기다렸다가 다시 연결하세요. 다른 USB 포트도 사용해 보십시오. 이상적으로는 허브를 통하지 않고 Mac에 직접 연결하는 것이 좋습니다. 오디오를 전달하는 허브와 디스플레이는 팝의 일반적인 소스입니다.</li>
</ul>

<p>재부팅 후에도 소음이 지속된다면 이는 결함이 아니라 구성 문제입니다. 계속하세요.</p>

<h2>샘플링 속도 일치(가장 일반적인 원인)</h2>

<p>전형적인 Tahoe 크래클은 장치가 원하는 것과 macOS가 보내는 것 사이의 샘플링 속도 불일치로 인해 발생합니다. 앱이 44.1kHz 오디오를 재생하고 시스템이 48kHz로 잠겨 있으면(또는 그 반대) 리샘플링이 끊기거나 터질 수 있습니다.</p>

<ul>
<li>열기 <strong>오디오 MIDI 설정</strong> (응용 프로그램 → 유틸리티에서 또는 Spotlight를 검색하세요).</li>
<li>왼쪽 사이드바에서 출력 장치를 선택합니다.</li>
<li>보세요 <strong>형식</strong> 드롭다운. 로 설정해 보세요 <strong>48000.0Hz, 2ch-24bit 정수</strong> 그리고 테스트.</li>
<li>팝핑이 계속되면 다음으로 전환하십시오. <strong>44100.0Hz</strong> 그리고 다시 테스트해 보세요.</li>
<li>인터페이스의 경우 샘플링 속도가 DAW의 프로젝트 속도와 일치하는지 확인하세요.</li>
</ul>

<p>형식을 전환하면 CoreAudio가 연결을 재협상하게 되며, 이는 동일한 값으로 다시 돌아오는 경우에도 많은 경우를 수정합니다.</p>

<h2>CoreAudio 재설정</h2>

<p>CoreAudio는 백그라운드 데몬으로 실행됩니다. <code>coreaudiod</code>. 주요 macOS 업데이트 후에는 오래된 장치 상태를 유지할 수 있습니다. 다시 시작하는 것은 안전하며 재부팅 없이 즉시 적용됩니다.</p>

<p>Terminal를 열고 다음을 실행합니다.</p>

<blockquote><p><code>sudo killall coreaudiod</code></p></blockquote>

<p>메시지가 나타나면 비밀번호를 입력하세요. 오디오가 잠시 끊긴 다음 데몬이 깨끗한 상태로 자동으로 다시 시작됩니다. 이것은 업데이트 전에는 괜찮았던 컴퓨터에서 갑자기 나타나는 딱딱거리는 소리에 대한 가장 효과적인 단일 수정 사항입니다.</p>

<h2>Bluetooth 헤드폰 및 코덱을 확인하세요.</h2>

<p>딱딱거리는 소리가 AirPods 또는 다른 Bluetooth 헤드폰에서만 발생하는 경우 문제는 일반적으로 스피커가 아니라 코덱 협상에 있는 것입니다. 연결이 혼잡하거나 macOS가 낮은 대역폭 통화 모드로 전환되면 무선 오디오 품질이 저하됩니다.</p>

<ul>
<li><strong>장치를 잊어버리고 다시 페어링하십시오.</strong> 시스템 설정 → Bluetooth로 이동하여 헤드폰을 제거한 후 다시 페어링하세요. 그러면 협상된 코덱이 재설정됩니다.</li>
<li><strong>통화 모드가 중단되는지 확인하세요.</strong> 앱이 마이크를 열면 macOS는 Bluetooth 헤드셋을 저품질 양방향 프로필로 전환하여 바삭바삭한 소리를 냅니다. 사용하지 않는 회의 및 음성 앱을 종료하면 충실도가 회복됩니다.</li>
<li><strong>간섭을 줄입니다.</strong> 혼잡한 2.4GHz 환경에서 벗어나 필요하지 않은 Bluetooth 장치의 연결을 끊으세요. 바쁜 라디오 밴드가 간헐적으로 팝을 생성합니다.</li>
<li><strong>마이크 입력 끄기</strong> 듣기만 하면 되는 경우 앱 설정에서 macOS가 고품질 재생 프로필을 유지합니다.</li>
</ul>

<h2>오디오 플러그인 호스트 및 가상 드라이버 종료</h2>

<p>시스템 확장 또는 가상 장치를 설치하는 타사 오디오 소프트웨어는 OS 점프 후 자주 발생하는 문제입니다. 커널 및 오디오 확장을 새로운 macOS 버전으로 업데이트해야 하는 경우가 많기 때문입니다. 용의자에는 가상 오디오 라우터, 이퀄라이저 앱, 루프백 도구 및 이전 드라이버 기반 유틸리티가 포함됩니다.</p>

<ul>
<li>이퀄라이저, 오디오 라우터 또는 루프백 앱을 종료하고 딱딱거리는 소리가 멈추는지 테스트하세요.</li>
<li>업데이트 또는 제거가 필요할 수 있는 오디오 확장에 대해서는 시스템 설정 → 일반 → 로그인 항목 &amp; 확장을 확인하세요.</li>
<li>해당 앱을 Tahoe 호환 릴리스로 업데이트하거나 더 이상 사용하지 않는 앱을 제거하십시오. 대규모 업데이트 후에 스택된 오디오 드라이버가 서로 충돌하는 경우가 자주 있습니다.</li>
</ul>

<p>이러한 앱 중 하나를 종료하면 팝업이 조용해지면 범인을 찾은 것입니다. 현재 버전을 다시 설치하거나 그대로 두십시오.</p>

<h2>범위를 좁혀보세요. 시스템 전체인가요 아니면 하나의 앱인가요?</h2>

<p>소음이 모든 곳에서 발생하는지 아니면 특정 소프트웨어에서만 발생하는지 파악하십시오. 로컬 오디오 파일을 재생한 다음 브라우저 비디오를 재생하고 음악 앱을 재생합니다. 하나의 앱에서만 문제가 발생하는 경우 해결 방법은 macOS가 아닌 해당 앱의 자체 오디오 설정이나 업데이트입니다. 시스템 전체라면 위의 단계에 답이 있습니다.</p>

<p>여전히 멈춘 경우 안전 모드로 부팅하십시오(Apple 실리콘의 전원 버튼을 누른 다음 Shift를 누른 상태에서 시동 디스크를 선택하십시오). 안전 모드에서는 타사 확장 프로그램이 로드되지 않습니다. 그곳에서 오디오가 깨끗하다면 로그인 항목이나 드라이버가 원인이므로 하나씩 다시 활성화하여 찾아보시면 됩니다.</p>

<h2>오디오가 깨끗해지면</h2>

<p>크래킹은 드라이버 및 샘플링 속도 문제이므로 위의 수정 사항을 통해 실제로 문제가 해결됩니다. 그러나 재생이 안정적이면 다른 제한 사항을 발견할 수 있습니다. macOS에는 Windows와 마찬가지로 앱별 볼륨 믹서가 내장되어 있지 않습니다. 모든 것을 끄지 않고서는 시끄러운 앱을 끌 수 없습니다.</p>

<p>그 갭이군요 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 채운다. 각 앱에 고유한 볼륨 슬라이더, 앱별 음소거, 조용한 앱을 위한 볼륨 부스트 기능과 빠른 출력 전환 기능을 제공하는 메뉴 표시줄 믹서입니다. 딱딱거리는 소리가 해결되지는 않지만 오디오가 건강해지면 일상적인 제어가 훨씬 쉬워집니다.</p>

<p>위의 단계를 순서대로 진행하고 재부팅 및 샘플링 속도 확인을 시작하세요. 나중에 깨끗한 오디오 설정에서 앱별 제어를 원할 경우, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> Mac App Store에서 €14.99의 일회성 구매이며, 설치할 드라이버나 DMG가 없는 샌드박스입니다.</p>`,
  },
  "airpods-stuttering-cutting-out-mac-tahoe": {
    slug: "airpods-stuttering-cutting-out-mac-tahoe",
    title: "AirPods Mac에서 끊김 또는 잘림(Tahoe Fix)",
    description: "AirPods macOS Tahoe에서 오디오가 끊기거나 끊기거나 끊기는 현상은 거의 항상 Bluetooth 간섭 또는 자동 스위치 변동입니다. 다시 페어링하고, 2.4GHz 혼잡을 줄이고, 재생을 중단시키는 핸드오프를 중지하는 방법은 다음과 같습니다.",
    date: "2026-07-23",
    readTime: "6분 읽기",
    content: `<p>macOS Tahoe에서 AirPods가 끊기거나 끊어지는 현상은 헤드셋이 파손된 것이 아니라 거의 항상 Bluetooth 간섭입니다. 일반적인 원인은 2.4GHz Wi-Fi 및 라우터 혼잡, 공격적인 자동 장치 전환 및 오래된 페어링입니다. 대부분의 경우를 해결하려면 AirPods를 다시 페어링하고 자동 스위치를 끄고 혼잡한 2.4GHz 채널에서 멀리 이동하세요.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial - AirPods Mac에서 끊김 또는 잘림(Tahoe Fix)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>AirPods가 Mac에 특히 떨어지는 이유</h2>

<p>AirPods는 Wi-Fi, 전자레인지, USB 3 장치 및 집에 있는 거의 모든 스마트 플러그와 혼잡한 2.4GHz 무선 대역을 공유하는 Bluetooth를 사용합니다. Mac는 바쁜 라디오입니다. 겹치는 안테나에서 Wi-Fi, Bluetooth, AirDrop 및 연속성 기능을 저글링합니다. 해당 대역이 정체되면 Bluetooth 오디오가 가장 먼저 끊깁니다. 왜냐하면 파일 전송처럼 패킷 손실을 허용할 수 없기 때문입니다.</p>

<p>Tahoe가 마술처럼 AirPods를 악화시키지는 않았지만 macOS를 새로 설치하면 종종 무선 동작이 재설정되고 연속성 핸드오프가 다시 활성화되며 코덱이 다시 협상됩니다. 그렇기 때문에 업데이트 직후에 문제가 나타나는 것 같습니다. 좋은 소식은 수정 사항이 잘 알려져 있으며 대부분 무료라는 점입니다.</p>

<h2>수정 1: AirPods 다시 페어링(먼저 수행)</h2>

<p>오래되거나 손상된 페어링은 재부팅 후에도 유지되며 무작위로 보이는 간헐적인 삭제를 유발합니다. 연결을 완전히 제거하고 다시 추가하십시오.</p>

<ul>
<li>열기 <strong>시스템 설정, Bluetooth</strong>.</li>
<li>AirPods 옆에 있는 정보(i) 버튼을 클릭하고 다음을 선택하세요. <strong>이 장치를 잊어버리세요</strong>.</li>
<li>AirPods를 케이스에 넣고 뚜껑을 닫은 후 15초 동안 기다린 후 엽니다.</li>
<li>표시등이 흰색으로 깜박일 때까지 케이스 뒷면의 버튼을 누르고 있습니다.</li>
<li>Bluetooth 목록에서 다시 페어링하세요.</li>
</ul>

<p>거기 있는 동안 AirPods 펌웨어가 최신 버전인지 확인하세요. 수동 업데이트 프로그램은 없지만 연결된 iPhone 또는 Mac 근처에 케이스를 잠시 놓아두면 백그라운드에서 업데이트할 수 있습니다.</p>

<h2>수정 2: 자동 전환 끄기</h2>

<p>이것이 Apple 생태계의 사람들이 "단절"되는 가장 큰 단일 원인입니다. AirPods는 Mac, iPhone 및 iPad 사이에서 사용자를 따라가려고 합니다. 휴대폰에서 오디오를 잡아야 한다고 생각할 때마다 Mac의 연결 문제가 발생하여 팟캐스트 중간에 0.5초 정도 끊기는 현상이 발생합니다.</p>

<ul>
<li>Mac: Bluetooth에서 AirPods 옆에 있는 (i)를 클릭하고 설정합니다. <strong>이 Mac에 연결하세요</strong> 에 <strong>이 Mac에 마지막으로 연결되었을 때</strong> 자동 대신.</li>
<li>iPhone의 경우: 설정에서 AirPods를 탭한 다음 <strong>이 iPhone에 연결</strong>, 선택 <strong>이 iPhone에 마지막으로 연결되었을 때</strong>.</li>
</ul>

<p>이렇게 하면 장치 간의 줄다리기가 중지됩니다. 오디오가 어디로 갈지 수동으로 선택하게 되는데, 이는 안정적인 재생을 위한 작은 비용입니다.</p>

<h2>수정 3: 2.4GHz 혼잡을 줄입니다.</h2>

<p>화상 통화, 다운로드 또는 다른 사람이 스트리밍하는 동안 신호 끊김이 발생하면 라디오 대역이 포화된 것입니다. 몇 가지 실용적인 조치:</p>

<ul>
<li><strong>5GHz Wi-Fi 대역 사용</strong> 당신의 Mac에. 라우터 설정에서 5GHz 네트워크에 고유한 이름을 지정하고 연결하세요. 이렇게 하면 Bluetooth의 2.4GHz 대역이 해제됩니다.</li>
<li><strong>USB 3 및 Thunderbolt 허브를 멀리 옮기세요</strong> Mac 및 AirPods에서. USB 3은 악명 높은 2.4GHz 잡음 소스입니다. 노트북 옆에 있는 허브는 몇 인치 떨어진 곳에서 Bluetooth를 망가뜨릴 수 있습니다.</li>
<li><strong>라우터의 2.4GHz 채널 변경</strong> 1, 6 또는 11(겹치지 않는 옵션)로 설정하고 이웃이 사용하는 혼잡한 채널을 피하세요.</li>
<li><strong>시선을 유지하십시오.</strong> 몸체와 벽은 2.4GHz를 흡수합니다. Mac가 뒤에 있거나 가방 안에 있으면 낙하 현상이 더욱 심해집니다.</li>
</ul>

<blockquote>Wi-Fi 6E 및 Wi-Fi 7 라우터는 간접적으로 도움이 될 수 있습니다. 장치를 6GHz로 푸시하면 Bluetooth가 의존하는 2.4GHz 대역이 지워집니다. 그러나 계속해서 2.4GHz로 돌아가게 하는 잘못 구성된 메시는 상황을 더욱 악화시킬 수 있습니다. 실제로 어떤 밴드에 속해 있는지 확인하세요.</blockquote>

<h2>수정 4: Bluetooth 및 연속성 스택 재설정</h2>

<p>재페어링이 진행되지 않으면 무선 자체를 재설정하십시오.</p>

<ul>
<li>메뉴 표시줄에서 Bluetooth를 껐다가 켠 다음 Mac를 재부팅합니다. 재부팅하면 놀랄 만큼 많은 일시적인 오디오 결함이 해결됩니다.</li>
<li>Intel Mac에서 SMC/NVRAM을 재설정하거나 Apple Silicon에서 30초 동안 완전히 종료(다시 시작하지 않음)하세요.</li>
<li>AirDrop 또는 Handoff를 사용하지 않는 경우 시스템 설정, 일반, AirDrop &amp; Handoff에서 Handoff를 비활성화하면 배경 무선 채팅이 줄어듭니다.</li>
</ul>

<h2>문제가 해결되지 않는 것(그리고 볼륨 믹서가 실제로 하는 일)</h2>

<p>범위를 명확히 하자면, 이 중 어느 것도 소프트웨어 볼륨 문제가 아니며 어떤 볼륨 앱도 Bluetooth 링크를 복구할 수 없습니다. 귀하의 오디오가 <em>떨어지는</em>, 위의 라디오 문제를 추적하세요. 다음과 같은 앱 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 앱별 볼륨, 음소거 및 출력 전환을 제어하며 Bluetooth 스택을 건드리지 않으므로 끊김이 멈추지 않습니다. 믹서가 진정으로 도움이 되는 부분은 많은 AirPods 사용자가 드롭아웃과 혼동하는 인접한 성가심입니다. 한 앱은 폭발하는 반면 다른 앱은 너무 조용하거나 출력을 빠르게 점프해야 합니다. 그건 연결 문제가 아니라 볼륨 밸런스 문제입니다.</p>

<p>솔직하게 진단해보세요. 오디오가 비트에 맞춰 끊겼다가 다시 돌아오는 경우 간섭 또는 자동 전환입니다. 앱 간에 레벨이 고르지 않은 경우 이는 실제로 소프트웨어로 해결할 수 있는 혼합 문제입니다.</p>

<h2>빠른 체크리스트</h2>

<ul>
<li>AirPods를 잊어버리고 다시 페어링하세요.</li>
<li>Mac와 iPhone을 모두 다음으로 설정합니다. <strong>마지막으로 연결했을 때</strong>, 자동이 아닙니다.</li>
<li>Mac를 5GHz Wi-Fi로 이동하세요. USB 3 허브를 멀리 두세요.</li>
<li>2.4GHz를 채널 1, 6 또는 11로 설정합니다.</li>
<li>Bluetooth를 전환한 후 재부팅합니다.</li>
</ul>

<p>드롭아웃이 사라지고 각 앱의 재생 크기를 더욱 깔끔하게 제어하고 싶다면, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> macOS에는 아직 포함되지 않은 적절한 앱별 볼륨 믹서, 음소거, 부스트 및 빠른 출력 전환이 추가되었습니다. 드라이버를 설치할 필요 없이 샌드박스 처리된 Mac App Store에서 €14.99의 일회성 구매입니다.</p>`,
  },
  "mac-right-speaker-not-working-after-tahoe": {
    slug: "mac-right-speaker-not-working-after-tahoe",
    title: "Tahoe 업데이트 후 Mac의 오른쪽 스피커가 작동하지 않습니까? 문제를 해결하는 방법",
    description: "macOS Tahoe로 업데이트한 후 하나의 스피커 또는 채널이 작동하지 않습니까? 오디오 밸런스 슬라이더로 시작한 다음 Core Audio를 재설정하고 안전 모드를 시도한 다음 하드웨어를 제외하십시오. 명확한 문제 해결 가이드.",
    date: "2026-07-23",
    readTime: "6분 읽기",
    content: `<p>macOS Tahoe로 업데이트한 후 오른쪽 스피커가 조용해지면 오디오를 확인하세요. <strong>밸런스 슬라이더</strong> 첫째, 업데이트 중에 이동할 수 있습니다. 시스템 설정 &gt; 사운드 &gt; 출력으로 이동하여 밸런스가 정중앙에 있는지 확인하세요. 괜찮다면 Core Audio를 다시 시작하고 안전 모드로 부팅한 다음 하드웨어를 제외하십시오. 대부분의 경우는 소프트웨어입니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Tahoe 업데이트 후 Mac의 오른쪽 스피커가 작동하지 않습니까? 문제를 해결하는 방법" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>첫째: 밸런스 슬라이더(생각보다 자주 수정됨)</h2>

<p>고착되거나 이동된 밸런스 슬라이더는 한 채널이 조용해지는 가장 일반적인 이유이며, macOS 업데이트가 가끔 채널을 조금씩 움직이게 합니다. 최악의 상황을 가정하기 전에:</p>

<ul>
<li>열기 <strong>시스템 설정 &gt; 사운드</strong>.</li>
<li>다음을 클릭하세요. <strong>출력</strong> 탭을 클릭하고 스피커(내장 또는 외부 장치)를 선택합니다.</li>
<li>찾기 <strong>잔액</strong> 슬라이더를 끌어 정확한 중앙으로 드래그합니다. 왼쪽으로 당기면 오른쪽 채널이 죽은 것처럼 들립니다.</li>
</ul>

<p>이렇게 하세요 <em>출력 장치당</em>. 밸런스 설정은 내장 스피커, 헤드폰 및 각 외부 인터페이스에 대해 별도로 기억됩니다. 따라서 USB DAC에 문제가 있는 경우 중앙에 위치한 내장 밸런스는 도움이 되지 않습니다.</p>

<h2>실제로 하드웨어 채널인지 테스트</h2>

<p>하드웨어를 신속하게 추가 또는 제외합니다. 잘 알고 있는 스테레오 트랙을 재생한 다음 유선 헤드폰을 연결하세요. 두 채널이 모두 헤드폰에서는 작동하지만 스피커를 통해서는 작동하지 않는 경우 문제는 오디오 엔진의 다운스트림(스피커 하드웨어 또는 출력 경로)에 있는 것입니다. 헤드폰에서도 동일한 채널이 작동하지 않는 경우 소프트웨어나 로직 보드의 오디오 코덱일 가능성이 높습니다.</p>

<p>당신은 또한 열 수 있습니다 <strong>음악</strong> 또는 QuickTime을 사용하여 무언가를 재생하고 밸런스를 왼쪽으로 전환한 다음 오른쪽으로 전환합니다. 오디오가 채널 간에 깨끗하게 이동하는 경우 두 스피커가 모두 활성화된 것이며 이는 순전히 설정 문제입니다.</p>

<h2>코어 오디오 다시 시작</h2>

<p>macOS는 모든 사운드를 <strong>코어오디오</strong> 프로세스. 주요 업데이트 후에는 출력이 사라지거나 채널이 떨어지거나 볼륨이 이상하게 작동하는 등 상태가 불안정해질 수 있습니다. 다시 시작하는 것은 안전하며 macOS가 오디오 그래프를 다시 작성하도록 합니다.</p>

<ul>
<li>열기 <strong>Terminal</strong> (응용 프로그램 &gt; 유틸리티).</li>
<li>실행: <code>sudo killall coreaudiod</code></li>
<li>비밀번호를 입력하세요. 오디오 데몬은 1~2초 내에 자동으로 다시 시작됩니다.</li>
</ul>

<p>아무것도 삭제되지 않습니다. 오디오 하위 시스템만 재부팅됩니다. 그 후 즉시 오른쪽 스피커를 다시 테스트하십시오.</p>

<h2>제대로 재부팅한 다음 안전 모드를 사용해 보세요.</h2>

<p>완전히 다시 시작하면 killall이 해결하지 못하는 일시적인 오디오 결함이 해결됩니다. 채널이 여전히 작동하지 않는 경우 다음으로 부팅하세요. <strong>안전 모드</strong>, 최소 시스템을 로드하고 타사 오디오 확장 프로그램 및 로그인 항목을 건너뜁니다.</p>

<ul>
<li><strong>애플 실리콘:</strong> 종료하세요. "시작 옵션 로드 중"이 나타날 때까지 전원 버튼을 누르고 있습니다. 디스크를 선택한 다음 잠시 기다리세요. <strong>교대</strong> "안전 모드에서 계속"을 클릭하세요.</li>
<li><strong>인텔:</strong> 다시 시작하고 기다리기 <strong>교대</strong> 로그인 창이 나타날 때까지.</li>
</ul>

<p>두 스피커가 모두 안전 모드에서 작동하는 경우 업데이트 전에 설치된 타사 오디오 드라이버, 가상 장치 또는 메뉴 표시줄 유틸리티가 Tahoe의 새로운 오디오 스택과 충돌합니다. 정상으로 다시 부팅하고 최근에 설치한 오디오 소프트웨어를 제거하거나 업데이트합니다(스크린 레코더, 회의 앱 및 오디오 라우팅 kext가 일반적인 원인입니다).</p>

<h2>NVRAM 재설정(Intel Mac만 해당)</h2>

<p>Intel Mac에서 사운드 및 스피커 설정은 NVRAM/PRAM에 적용되며 오래된 값은 업데이트 후에도 유지될 수 있습니다. 재설정: 종료한 후 전원을 켜고 즉시 유지 <strong>옵션 + 명령 + P + R</strong> 약 20초 동안 Mac를 한 번 다시 시작합니다. 이는 Apple Silicon Mac에는 적용되지 않습니다. 자동으로 관리되므로 M 시리즈 시스템을 사용하는 경우 건너뛰십시오.</p>

<h2>다시 업데이트하고 포인트 릴리스를 확인하세요.</h2>

<p>주요 macOS 버전의 초기 릴리스에는 나중에 패치되는 오디오 드라이버 버그가 포함되어 있습니다. 향하다 <strong>시스템 설정 &gt; 일반 &gt; 소프트웨어 업데이트</strong> 보류 중인 Tahoe 포인트 릴리스(14.x.1, 14.x.2 등)를 설치합니다. 보충 업데이트가 있는 경우 이러한 업데이트 후 오디오 회귀 문제를 정확하게 해결하는 경우가 많습니다.</p>

<h2>진정한 하드웨어인 경우</h2>

<p>안전 모드, Core Audio 다시 시작 및 새로 재설치가 모두 실패하고 헤드폰에서 동일한 채널이 작동하지 않는 경우 하드웨어 오류가 발생한 것일 수 있습니다. 업데이트 시기는 우연일 수 있습니다. 스피커 증폭기와 오디오 코덱은 실패합니다. 실행 <strong>Apple 진단</strong> (종료한 다음 Apple Silicon의 전원 버튼을 누른 상태에서 진단을 선택하거나 <strong>디</strong> 시작 시 Intel에서). 오디오 구성요소에 플래그가 지정되면 문의하세요. <strong>애플 지원</strong> 또는 공인 서비스 제공업체. 고장난 스피커를 위한 소프트웨어에 돈을 쓰지 마십시오.</p>

<blockquote>간단한 경험 법칙: 밸런스 슬라이더를 사용하여 오디오가 올바르게 패닝되면 두 스피커 모두 물리적으로 문제가 없으며 소프트웨어에서 문제를 해결할 수 있습니다. 전혀 작동하지 않는 경우 하드웨어를 의심해 보세요.</blockquote>

<h2>볼륨 소프트웨어가 적합한 경우와 적합하지 않은 경우</h2>

<p>명확하게 말하면 죽은 스피커 채널은 볼륨 앱으로 해결되는 문제가 아닙니다. 위의 확인 사항이 경로입니다. 즉, 오디오가 다시 건강해지면 macOS에는 Windows가 수년 동안 가지고 있던 기능인 실제 앱별 볼륨 믹서가 여전히 부족합니다. 한 앱은 폭발적인데 다른 앱은 너무 조용해서 소리 설정을 뒤지는 경우, 다음과 같은 메뉴 표시줄 믹서를 사용하세요. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 시스템 밸런스를 건드리지 않고도 독립적인 볼륨, 음소거 및 애플리케이션별 부스트를 설정할 수 있습니다. 일상적인 믹싱을 위한 편의 도구이지 이 글에서 언급한 문제에 대한 수리는 아닙니다.</p>

<h2>짧은 버전</h2>

<ul>
<li>중앙에 <strong>잔액</strong> 슬라이더 — 출력 장치당.</li>
<li>하드웨어를 분리하려면 헤드폰을 사용하여 테스트하세요.</li>
<li>실행 <code>sudo killall coreaudiod</code>을 누른 다음 다시 시작하세요.</li>
<li>시도해 보세요 <strong>안전 모드</strong> 드라이버 충돌을 포착합니다.</li>
<li>Intel에서 NVRAM을 재설정합니다. Tahoe 포인트 릴리스를 설치하십시오.</li>
<li>아직도 헤드폰에 빠져 있나요? Apple 진단을 실행하고 Apple에 전화하십시오.</li>
</ul>

<p>스피커가 정상으로 돌아오면 앱별 볼륨을 조정하는 것이 일상적인 귀찮은 일이라면, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 믹서 macOS가 항상 누락되었다고 추가합니다 — €14.99, 일회성, 샌드박스, 드라이버 없음.</p>`,
  },
  "airpods-stuck-at-half-volume-mac-fix": {
    slug: "airpods-stuck-at-half-volume-mac-fix",
    title: "AirPods Mac의 볼륨이 절반으로 멈췄습니까? 여기에 수정 사항이 있습니다.",
    description: "AirPods가 절반 볼륨(일반적으로 Bluetooth 코덱을 핸즈프리 마이크 프로필로 전환)으로 Mac에 연결하는 이유와 수리 수정 사항 및 레벨 백업을 영원히 높이는 방법.",
    date: "2026-07-23",
    readTime: "6분 읽기",
    content: `<p>AirPods는 일반적으로 Mac의 볼륨을 절반으로 줄입니다. 왜냐하면 macOS가 고품질 A2DP 오디오 프로필에서 전화 통화 마이크용으로 제작된 저품질 핸즈프리(HFP) 프로필로 전환했기 때문입니다. 해당 모드는 출력과 품질을 제한합니다. Mac를 강제로 헤드폰 전용 오디오로 되돌려 문제를 해결한 다음 레벨을 높여서 그 상태를 유지하세요.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — AirPods가 Mac의 절반 볼륨에서 멈췄습니까? 여기에 수정 사항이 있습니다." style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>이런 일이 발생하는 이유: 코덱 스위치</h2>

<p>AirPods와 같은 Bluetooth 오디오 장치는 두 가지 모드 중 하나로 실행됩니다. 듣기만 할 때 macOS는 풀 스테레오, 풀 라우드니스, 깨끗한 품질의 A2DP를 사용합니다. 하지만 앱이 마이크를 원하는 순간, macOS는 전체 연결을 HFP(Hands-Free Profile)로 전환합니다. HFP는 양방향 전화 통신 코덱입니다. 음악이 아닌 음성 통화용으로 설계되었기 때문에 얇고 단조로우며 눈에 띄게 조용하게 들립니다.</p>

<p>문제는 마이크를 잡은 앱이 완료된 후에도 macOS가 HFP에 머물거나 Zoom, FaceTime, Teams, Discord 또는 마이크 권한이 있는 브라우저 탭을 여는 순간 HFP로 전환되는 경우가 많다는 것입니다. 따라서 AirPods 소리가 "절반 볼륨"에 있는 것처럼 들리는 이유는 볼륨 슬라이더가 이동했기 때문이 아니라 전체 오디오 프로필이 아래로 다운그레이드되었기 때문입니다.</p>

<p>당신은 그것을 인식할 것입니다: 오디오가 갑자기 조용해지고 약해지며, AirPods가 사운드 설정에 두 번 나타나며(한 번은 출력으로, 한 번은 마이크로) 시스템 볼륨을 최대로 높이면 거의 도움이 되지 않습니다.</p>

<h2>재페어링 및 코덱 해결 방법</h2>

<p>이것이 정직한 첫걸음입니다. 순서대로 작업하세요. 초기 단계 중 하나가 일반적으로 문제를 해결합니다.</p>

<ul>
<li><strong>입력 장치를 변경해 보세요.</strong> 시스템 설정 → 사운드 → 입력을 열고 AirPods 대신 Mac의 내장 마이크를 선택하세요. 이렇게 하면 macOS가 HFP 모드에서 AirPods를 유지하는 것이 중지되므로 출력이 전체 A2DP 품질로 다시 올라갈 수 있습니다. 이것이 가장 효과적인 해결책입니다.</li>
<li><strong>Bluetooth를 껐다가 켜세요.</strong> 연결을 빠르게 재설정하면 A2DP를 깔끔하게 재협상하는 경우가 많습니다. 특히 통화가 끝난 후 AirPods가 멈춘 경우에는 더욱 그렇습니다.</li>
<li><strong>AirPods를 다시 연결합니다.</strong> 케이스를 닫고 몇 초간 기다린 후 Mac 근처에서 다시 열고 출력 장치로 다시 선택하세요.</li>
<li><strong>마이크를 잡은 앱을 종료하세요.</strong> Zoom, Teams, Discord 또는 해당 브라우저 탭을 완전히 종료합니다. 일부 앱은 백그라운드에서 마이크 세션을 열어두고 사라질 때까지 HFP를 고정합니다.</li>
<li><strong>처음부터 다시 페어링하세요.</strong> 시스템 설정 → Bluetooth(정보 버튼 클릭 → 이 장치 지우기)에서 AirPods를 제거한 후 다시 페어링하세요. 이렇게 하면 토글만으로는 해결되지 않는 손상된 프로필 협상이 지워집니다.</li>
<li><strong>AirPods를 재설정합니다.</strong> 케이스 덮개를 연 상태에서 표시등이 황색으로 깜박인 다음 흰색으로 깜박일 때까지 뒷면의 설정 버튼을 누르고 있습니다. 나중에 다시 페어링하세요. 이것은 펌웨어 수준의 기이함에 대한 핵 옵션입니다.</li>
<li><strong>macOS 및 AirPods 펌웨어를 업데이트합니다.</strong> Apple은 포인트 릴리스에서 Bluetooth 오디오 수정 사항을 출시했습니다. AirPods 펌웨어는 연결된 장치 근처에서 충전 중일 때 자동으로 업데이트되므로 밤새 Mac 근처의 케이스에 넣어 두십시오.</li>
</ul>

<blockquote><p>주의해야 할 패턴: 통화에 참여하는 순간 볼륨이 떨어졌다가 통화가 끝나면 볼륨이 복구되는 경우 이는 스피커 고장이나 설정 결함이 아니라 HFP 스위치입니다.</p></blockquote>

<h2>수정 사항이 항상 적용되지 않는 이유</h2>

<p>실망스러운 부분이 여기에 있습니다. 다시 페어링한 후에도 다음에 앱이 마이크에 닿으면 macOS는 AirPods를 조용한 핸즈프리 모드로 다시 전환합니다. 시스템 설정에서 해당 동작을 영구적으로 비활성화할 수는 없습니다. Apple에서는 이를 자동으로 처리합니다. 따라서 하루에 여러 번 입력 장치 트릭을 다시 수행하게 되며 AirPods가 통화 중이거나 마이크가 부족한 앱을 사용하는 순간 언제든지 다시 낮은 수준으로 제한됩니다.</p>

<p>사람들이 이것과 혼동하는 두 번째 별도의 문제도 있습니다. 일부 앱은 최대 시스템 볼륨에서 다른 앱보다 조용합니다. AirPods가 깨끗한 A2DP를 실행하는 경우에도 팟캐스트 플레이어나 브라우저 탭은 귀가 원하는 것보다 훨씬 아래에 위치할 수 있습니다. macOS는 모든 것에 대해 하나의 볼륨 슬라이더를 제공하고 앱별 제어가 없으므로 단일 조용한 앱을 백업할 수 있는 기본 방법은 없습니다.</p>

<h2>레벨 백업을 강화하고 유지하세요.</h2>

<p>이것이 앱별 볼륨 믹서가 자리를 잡는 곳입니다. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 100% 이상의 부스트를 포함하여 실행 중인 모든 앱에 독립적인 볼륨 슬라이더를 제공하는 macOS용 메뉴 바 앱입니다. 따라서 AirPods가 낮은 유효 수준의 통화에서 돌아오거나 특정 앱이 너무 조용할 때 해당 앱을 일반 한도 이상으로 드래그하면 그대로 유지됩니다.</p>

<p>구체적으로 이는 다음을 의미합니다.</p>

<ul>
<li><strong>앱별 볼륨 BOOST.</strong> "전체" 시스템 볼륨에서 듣기 위해 애쓰는 대신 표준 최대값 이상으로 조용한 앱을 푸시하세요.</li>
<li><strong>볼륨 프로필.</strong> 향상된 브라우저, 부드러운 음악, 시끄러운 화상 통화 등 일련의 레벨을 저장하고 한 번의 클릭으로 전체 배열을 전환하므로 다시 연결할 때마다 다시 조정할 필요가 없습니다.</li>
<li><strong>빠른 출력 전환.</strong> 시스템 설정을 탐색하지 않고도 메뉴 표시줄에서 AirPods, 노트북 스피커, 외부 DAC 사이를 이동할 수 있어 새로운 프로필 협상을 강요할 때 도움이 됩니다.</li>
<li><strong>앱별 음소거 및 자동 더킹.</strong> 나머지 앱을 건드리지 않고 하나의 앱을 무음으로 설정하고 더 중요한 앱이 재생될 때 미디어가 자동으로 꺼지도록 하세요.</li>
</ul>

<p>이것이 무엇을 하고 무엇을 하지 않는지 명확히 하는 것은 가치가 있습니다. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> macOS를 A2DP에 유지하도록 강요하지 않습니다. 위의 입력 장치 트릭은 여전히 코덱 자체를 위한 도구입니다. 그것이 하는 일은 앱별로 다운그레이드로 인해 빼앗긴 음량을 돌려주는 것입니다. 따라서 조용한 AirPods 세션이나 완고하게 부드러운 앱은 원인을 잃는 대신 한 번의 드래그로 해결할 수 있습니다. 샌드박스 Mac App Store 앱이기 때문에 설치할 오디오 드라이버나 DMG, 커널 확장이 필요하지 않으며 그냥 실행됩니다.</p>

<h2>짧은 버전</h2>

<p>AirPods 소리가 Mac에서 조용하고 약하게 들리면 입력 장치를 AirPods에서 꺼서 핸즈프리 모드를 강제로 종료하고 실패하면 다시 페어링하세요. 레벨이 여전히 원하는 수준에 도달하지 않거나 단일 앱이 너무 부드럽다면 앱별 부스트를 사용하여 한 번 설정하고 계속 진행하세요.</p>

<p>전화를 받을 때마다 볼륨 슬라이더를 조작하는 데 지치셨나요? <a href="https://apps.apple.com/app/id6772792641">Mac App Store에서 SoundDial 가져오기</a> — 일회성 €14.99, 구독 없음, 드라이버 없음 — 모든 앱에 자체 볼륨을 제공합니다.</p>`,
  },
  "mac-volume-resets-itself-tahoe-bug": {
    slug: "mac-volume-resets-itself-tahoe-bug",
    title: "Mac 볼륨이 Tahoe에서 계속 재설정됩니까? 영원히 잠그는 방법",
    description: "macOS Tahoe 이후 많은 Mac가 갑자기 자체적으로 볼륨을 변경하거나 재설정합니다. 이런 일이 발생하는 이유, 내장된 원인을 중지하는 방법, 앱별로 고정된 볼륨을 잠그어 그대로 유지하는 방법은 다음과 같습니다.",
    date: "2026-07-23",
    readTime: "6분 읽기",
    content: `<p>macOS Tahoe 이후 Mac 볼륨이 계속 재설정되는 경우 해결 방법은 자동 조정기를 제거하는 것입니다. 즉, 오디오 덕킹 및 "시작 시 사운드 재생"을 비활성화하고 사운드 설정을 재설정한 다음 Bluetooth 출력을 깔끔하게 다시 연결합니다. 뛰어다니는 앱별 레벨의 경우 믹서를 사용하여 앱별로 고정된 볼륨을 잠가서 다시는 표류하지 않도록 하세요.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac 볼륨이 Tahoe에서 계속 재설정됩니까? 영원히 잠그는 방법" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Tahoe 이후 볼륨이 저절로 변하는 이유</h2>

<p>사용자가 건드리지 않고도 움직이는 볼륨은 하드웨어 결함처럼 느껴지지만, 사용자 수준을 결정하는 것은 거의 항상 소프트웨어입니다. macOS에는 출력을 조용히 조금씩 움직이거나 재설정하는 몇 가지 자동 동작이 있으며 Tahoe의 오디오 스택 변경으로 인해 그 중 몇 가지가 더욱 눈에 띄게 되었습니다. 앱이나 Mac가 고장났다고 가정하기 전에 어떤 시스템이 슬라이더를 잡고 있는지 정확히 아는 것이 도움이 됩니다.</p>

<ul>
<li><strong>오디오 더킹:</strong> macOS는 더 중요한 내용(Siri, 접근성 안내, 알림)이 재생되고 있다고 판단되면 다른 오디오의 소리를 낮춥니다. 트리거가 끝난 후 레벨이 완전히 돌아오지 않는 경우가 있습니다.</li>
<li><strong>Bluetooth 핸드셰이크 재설정:</strong> AirPods 및 기타 Bluetooth 장치는 연결 시 볼륨을 재협상합니다. 세션 중간에 다시 연결하면 출력이 기본값으로 설정되거나 훨씬 더 크거나 더 조용한 수준으로 조정될 수 있습니다.</li>
<li><strong>출력 장치 전환:</strong> 헤드폰, 도크를 분리하거나 모니터 스피커로 전환하면 각 출력이 자체 볼륨을 기억합니다. 앞뒤로 전환하는 것은 "무작위" 재설정처럼 보입니다.</li>
<li><strong>앱별 기본값:</strong> 일부 앱(브라우저, 비디오 플레이어, 회의 도구)은 실행 시 또는 새 스트림이 시작될 때 자체 이득을 설정하여 기존의 모든 항목을 재정의합니다.</li>
<li><strong>시작음 및 로그인 상태:</strong> 부팅 차임벨과 로그인을 통해 시스템 볼륨을 선택하지 않은 기본 수준으로 되돌릴 수 있습니다.</li>
</ul>

<h2>내장된 원인을 먼저 수정하세요.</h2>

<p>이를 순서대로 진행하세요. 대부분의 "자체 재설정" 불만 사항은 더킹 및 Bluetooth가 배제되면 사라집니다.</p>

<ul>
<li><strong>시작음을 끕니다.</strong> 시스템 설정 → 소리 → 체크 해제 <em>시작 시 소리 재생</em>. 이렇게 하면 부팅 차임 소리가 기준 수준을 재설정하는 것을 중지합니다.</li>
<li><strong>더킹 트리거를 줄이거나 비활성화합니다.</strong> 시스템 설정 → 접근성 → 음성 콘텐츠 및 Siri에서 필요하지 않은 음성 안내를 끄세요. 트리거가 적다는 것은 macOS가 오디오를 낮추고 복원하는 것을 잊어버리는 순간이 적다는 것을 의미합니다.</li>
<li><strong>문제가 있는 Bluetooth 장치를 다시 페어링하세요.</strong> Bluetooth 설정에서 AirPods 또는 헤드폰을 제거하고 새로 페어링하세요. 오래된 프로필은 연결 시 볼륨 스냅이 발생하는 일반적인 원인입니다.</li>
<li><strong>각 출력 장치를 의도적으로 설정하십시오.</strong> 사용하는 각 출력(내장, 모니터, 헤드폰)을 연결하고 볼륨을 한 번 설정하십시오. macOS는 장치별로 볼륨을 저장하므로 모두 설정하면 전환할 때 놀라움이 사라집니다.</li>
<li><strong>멈춘 경우 Core Audio를 재설정하세요.</strong> Terminal를 열고 실행 <code>sudo killall coreaudiod</code>. 이렇게 하면 재부팅 없이 오디오 데몬이 다시 시작되고 불규칙한 레벨을 유발할 수 있는 정지 상태가 해결됩니다.</li>
<li><strong>업데이트한 후 다시 시작하세요.</strong> 초기 Tahoe 포인트 릴리스에는 오디오 수정 사항이 포함되어 있습니다. 최신 빌드인지 확인하고 업데이트 후 한 번 재부팅하세요.</li>
</ul>

<p>재설정이 중지되면 위 중 하나가 원인인 것입니다. 만약 당신의 <em>시스템</em> 볼륨은 안정적이지만 개별 앱이 계속해서 다른 앱보다 더 크거나 조용하게 표류하는 경우 내장 컨트롤이 수행할 수 있는 작업의 한계에 도달한 것입니다.</p>

<h2>실제 격차: macOS는 앱당 볼륨을 잠글 수 없습니다.</h2>

<p>실망스러운 부분이 여기에 있습니다. Windows에는 수년 동안 앱별 볼륨 믹서가 있었습니다. 이를 열고 한 앱의 슬라이더를 드래그하면 그대로 유지됩니다. macOS는 제품을 출시한 적이 없습니다. 정확히 하나의 시스템 볼륨 슬라이더가 있으며 모든 앱이 이를 두고 싸웁니다. 따라서 브라우저 탭에서 자동 재생 광고가 나오거나 영상 통화 소리가 음악보다 두 배 더 크게 들릴 때 유일한 옵션은 마스터 볼륨을 수동으로 조절하는 것입니다. 이는 탈출하려는 "이게 계속 바뀌는 이유" 루프입니다.</p>

<blockquote>시스템 슬라이더는 단일 공유 다이얼입니다. 앱별 믹서가 없으면 "설정하고 잊어버리세요"는 기본 macOS에서는 불가능합니다. — 무언가가 항상 당신을 무시할 것입니다.</blockquote>

<h2>SoundDial로 앱당 고정 볼륨 잠금</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 앱별 믹서 macOS가 누락되었습니다. 메뉴 표시줄에 있으며 실행 중인 모든 앱에 마스터와 관계없이 자체 볼륨 슬라이더를 제공합니다. 각 앱에 대해 설정한 수준을 기억하기 때문에 "자체 재설정" 문제를 직접 해결합니다. 한 번 결정하면 해당 앱이 매번 해당 볼륨으로 열립니다.</p>

<ul>
<li><strong>앱별 독립 볼륨:</strong> 마스터 슬라이더 저글링 없이 음악을 40%로 유지하고 화상 통화를 80%로 동시에 유지하세요.</li>
<li><strong>앱별 음소거 및 증폭:</strong> 시끄러운 앱을 즉시 무음으로 설정하거나, 자체 오디오가 약할 때 너무 조용한 앱을 100% 이상으로 밀어냅니다.</li>
<li><strong>볼륨 프로필:</strong> "업무", "게임" 또는 "집중"에 대한 설정을 저장하고 한 번의 클릭으로 전체 믹스를 전환하세요.</li>
<li><strong>원하는 대로 자동 더킹:</strong> macOS가 결정하는 대신 말하거나 선택한 앱이 활성화되면 자동으로 백그라운드 앱을 낮춥니다.</li>
<li><strong>빠른 출력 전환:</strong> 설정으로 들어가지 않고도 메뉴 표시줄에서 스피커, 헤드폰, 오디오 모니터링 사이를 이동할 수 있습니다.</li>
</ul>

<p>Mac App Store에서 €14.99 일회성 구매로 구독, 드라이버, DMG 및 커널 확장이 없습니다. 완전히 샌드박스 처리되고 App Store 배포되기 때문에 Tahoe가 다음 업데이트에서 차단할 수 있는 레거시 오디오 kext를 설치하지 않습니다. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 지원되는 API를 사용하여 레벨을 설정하므로 기억된 볼륨이 업데이트 및 재부팅 후에도 유지됩니다.</p>

<h2>실제로 어떤 접근 방식이 필요합니까?</h2>

<p>전체 시스템 볼륨이 급증하는 경우 위의 기본 제공 수정 사항(대부분의 경우 더킹, Bluetooth 및 시작 사운드 계정)으로 시작하십시오. 대신 문제가 하나의 앱이 항상 이상한 앱이거나 마스터 슬라이더가 타협하는 것에 지쳤다면 앱별 믹서가 유일한 실제 답입니다. macOS는 추가하지 않으므로 메뉴 막대 도구는 실제로 놓은 위치에 그대로 유지되는 믹스를 위한 실용적인 경로입니다.</p>

<p>Tahoe의 볼륨 슬라이더를 쫓는 데 지치셨나요? <a href="https://apps.apple.com/app/id6772792641">Mac App Store에서 SoundDial 가져오기</a> 모든 앱에 대해 기억된 볼륨을 잠급니다. 1회 €14.99, 구독 없음, 드라이버 없음.</p>`,
  },
  "control-daw-and-system-volume-separately-mac": {
    slug: "control-daw-and-system-volume-separately-mac",
    title: "Mac의 시스템 오디오와 별도로 DAW 모니터 볼륨을 제어하세요",
    description: "macOS에는 앱별 볼륨 믹서가 내장되어 있지 않으므로 DAW와 시스템 사운드는 한 레벨을 공유합니다. 브라우저 및 알림과 별도로 Logic, Ableton 또는 GarageBand 모니터 볼륨을 제어하는 ​​방법은 다음과 같습니다.",
    date: "2026-07-23",
    readTime: "6분 읽기",
    content: `<p>macOS에는 앱별 볼륨 믹서가 내장되어 있지 않으므로 DAW와 다른 모든 항목은 하나의 시스템 슬라이더를 공유합니다. 브라우저, Slack 및 알림과 별도로 모니터 수준을 설정하려면 앱별 볼륨 제어가 필요합니다. 다음과 같은 메뉴바 믹서 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> Logic, Ableton 및 GarageBand에는 시스템 오디오와 별도로 자체 볼륨을 제공합니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac의 시스템 오디오와 별도로 DAW 모니터 볼륨을 제어합니다." style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>하나의 볼륨 슬라이더가 모니터링을 망치는 이유</h2>

<p>프로듀싱할 때 DAW는 사운드를 만드는 많은 것 중 하나일 뿐입니다. 참조 트랙은 브라우저 탭에서 재생됩니다. Slack 핑이 도착합니다. YouTube 튜토리얼은 두 번째 모니터에서 실행됩니다. Windows에서 볼륨 믹서를 사용하면 이 모든 것의 균형을 독립적으로 맞출 수 있습니다. macOS에서 Apple은 볼륨 키와 메뉴 막대 슬라이더 이동과 같은 기능을 출시한 적이 없습니다. <em>모든 것</em> 즉시.</p>

<p>이는 귀로 믹싱하는 사람에게 실제 문제를 야기합니다. Logic에서 편안한 모니터링 수준으로 전화를 걸면 동일한 수준으로 알림이 울리고 귀가 터질 것입니다. 또는 큰 소리가 나는 동안 청력을 보호하기 위해 시스템을 낮추면 참조 트랙이 비교하기에는 너무 조용해집니다. 모니터링 참조는 더 이상 안정적이지 않으며 안정적인 참조가 믹싱의 전체 지점입니다.</p>

<blockquote>일관된 수준으로 모니터링하는 것은 믹스를 눈에 띄게 향상시키는 몇 가지 습관 중 하나입니다. 시스템 사운드 때문에 계속해서 마스터 슬라이더를 움직여야 한다면 일관성을 잃게 됩니다.</blockquote>

<h2>"별도의 DAW 볼륨"이 실제로 의미하는 것</h2>

<p>여기에는 생산자가 두 가지 다른 사항을 합치므로 분리할 가치가 있습니다.</p>

<ul>
<li><strong>인터페이스/마스터 출력 레벨</strong> — 오디오 인터페이스 또는 모니터 컨트롤러의 하드웨어 손잡이. 이는 절대적인 청취 음량을 설정하고 보정된 후에는 그대로 유지되어야 합니다.</li>
<li><strong>앱별 소프트웨어 볼륨</strong> — 각 애플리케이션의 소리 크기 <em>전에</em> 그 출력에 도달합니다. 이것이 macOS에 누락된 것입니다. Chrome, 음악 또는 알림 소리를 침대 아래 수준으로 낮추면서 DAW를 통일성 있게 유지할 수 있습니다.</li>
</ul>

<p>당신은 두 번째를 원합니다. 목표는 DAW를 낮추는 것이 아닙니다. 다른 모든 것을 낮추는 것입니다. 따라서 DAW는 가장 시끄럽고 일관된 소스를 유지하고 방해 요소는 배경에 조용히 남아 있습니다.</p>

<h2>앱별 믹서를 사용하여 수행하는 방법</h2>

<p>다음과 같은 메뉴바 믹서 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 현재 오디오를 재생하는 모든 앱을 나열하고 각 앱에 자체 슬라이더를 제공합니다. 생산자의 워크플로는 다음과 같습니다.</p>

<ul>
<li><strong>인터페이스를 한 번 교정하십시오.</strong> 오디오 인터페이스나 모니터 컨트롤러를 편안하고 반복 가능한 기준 레벨로 설정하고 그대로 두십시오. 이것이 고정 앵커입니다.</li>
<li><strong>DAW를 100%로 설정하세요.</strong> 믹서에서 Logic, Ableton 또는 GarageBand를 전체 소프트웨어 볼륨으로 유지하여 단일하게 통과하도록 합니다. DAW의 자체 마스터 페이더는 여전히 정밀한 믹싱을 수행합니다.</li>
<li><strong>다른 모든 것을 아래로 당깁니다.</strong> Chrome, Safari, 음악 및 Slack를 더 낮은 레벨(예: 40~60%)로 낮추면 참조 트랙과 메시지가 믹스와 경쟁하는 대신 믹스 아래에 놓이게 됩니다.</li>
<li><strong>시끄러운 것을 음소거하세요.</strong> 앱별 음소거를 사용하면 모니터링 체인을 건드리지 않고도 브라우저나 채팅 앱을 완전히 음소거할 수 있습니다. 한 번의 클릭으로 DAW는 그대로 유지됩니다.</li>
</ul>

<p>DAW의 슬라이더는 절대 움직이지 않기 때문에 모니터링 참조는 전체 세션에서 견고하게 유지됩니다. 빠른 A/B를 위해 참조 트랙을 크랭킹한 다음 음소거할 수 있으며 믹스 레벨은 데시벨 하나도 변하지 않습니다.</p>

<h2>다른 앱을 거절하는 대신 조용한 앱을 강화하세요</h2>

<p>때로는 문제가 다른 방향으로 진행되는 경우도 있습니다. 대략적인 데모 바운스, 음성 메모 또는 조용한 참조가 세션 수준보다 훨씬 낮은 수준에서 재생됩니다. 듣기 위해 인터페이스를 켜는 것은 이제 다른 모든 소리가 너무 크다는 것을 의미합니다. 앱별 <strong>볼륨 부스트</strong> 보정된 출력을 건드리지 않고도 단일 조용한 애플리케이션을 100% 이상으로 푸시하여 작업 수준과 일치하도록 할 수 있습니다. 이것은 Windows' 믹서가 결코 가지고 있지 않은 제품이며 DAW 외부에서 자료를 오디션할 때 더 유용한 도구 중 하나입니다.</p>

<h2>다양한 세션 유형에 대한 프로필</h2>

<p>이상적인 균형은 모든 작업에 동일하지 않습니다. 추적, 믹싱 및 캐주얼 청취는 각각 서로 다른 앱 레벨 조합을 원합니다. 볼륨 프로필을 사용하면 설정을 저장하고 즉시 불러올 수 있습니다.</p>

<ul>
<li><strong>혼합:</strong> DAW 100%, 브라우저 및 음악 부족, 채팅 음소거.</li>
<li><strong>참고 청취:</strong> 음악 또는 스트리밍 앱은 위로, DAW는 아래로.</li>
<li><strong>통화/협업:</strong> 회의 앱을 실행한 후 DAW는 통화에 방해가 되지 않도록 뒤로 물러났습니다.</li>
</ul>

<p>프로필을 전환하면 기어를 변경할 때마다 5개의 슬라이더를 수동으로 조정하는 것보다 빠릅니다.</p>

<h2>자동 더킹 및 빠른 출력 전환</h2>

<p>스튜디오에서는 두 가지가 더 중요합니다. <strong>자동 더킹</strong> 우선순위 소스가 말하거나 재생할 때 백그라운드 앱을 자동으로 딥핑할 수 있으므로 통화나 중요한 오디오가 항상 끊어집니다. 그리고 <strong>빠른 출력 전환</strong> 메뉴 표시줄을 사용하면 시스템 설정에 들어가지 않고도 인터페이스, 모니터, 헤드폰 사이를 이동할 수 있습니다. 이는 여러 시스템에서 믹스를 확인할 때 계속되는 작업입니다.</p>

<h2>가상 오디오 드라이버가 아닌 이유는 무엇입니까?</h2>

<p>일부 라우팅 도구는 커널 수준의 가상 오디오 드라이버를 설치하여 이 문제를 해결합니다. 강력하지만 무거워서 macOS 업데이트 후에 작동이 중단되고 대기 시간이 추가되며 깊은 시스템 권한이 필요할 수 있습니다. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 샌드박스 처리되어 Mac App Store를 통해 배송됩니다. 드라이버도, DMG도, 통합 장치 설정도 없습니다. 특히 앱별 수준 제어의 경우 이는 오디오 라우팅을 다시 설계하는 것보다 훨씬 간단한 경로입니다.</p>

<p>다른 모든 것이 그대로 유지되는 동안 모니터링 수준을 안정적으로 유지할 준비가 되셨습니까? <a href="https://apps.apple.com/app/id6772792641">Mac App Store에서 SoundDial 가져오기</a> 일회성 €14.99로 DAW에 자체 볼륨을 제공하세요.</p>`,
  },
  "audio-hijack-alternative-simple-volume-mac": {
    slug: "audio-hijack-alternative-simple-volume-mac",
    title: "Mac의 앱별 볼륨에 대한 더 간단한 Audio Hijack 대안",
    description: "macOS에서 앱당 독립적인 볼륨만 원하는 경우 Audio Hijack는 과잉입니다. 오디오 라우팅 없이 앱별 볼륨, 음소거, 증폭을 수행하는 더 가볍고 저렴한 메뉴 모음 대안이 있습니다.",
    date: "2026-07-23",
    readTime: "5분 읽기",
    content: `<p>원하는 것이 macOS의 앱당 독립적인 볼륨뿐이라면 Audio Hijack는 필요한 것보다 더 많은 도구입니다. 캡처, 효과 및 세션 그래프용으로 제작된 전문 오디오 라우팅 및 녹음 제품군(약 79달러)입니다. 단순히 하나의 앱을 낮추고 다른 앱을 높이려면 다음과 같은 가벼운 메뉴 표시줄 믹서를 사용하세요. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 더 빠르고, 저렴하며, 항상 준비되어 있습니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac의 앱별 볼륨에 대한 더 간단한 Audio Hijack 대안" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>사람들이 애초에 Audio Hijack에 도달하는 이유</h2>

<p>macOS에는 앱별 볼륨 믹서가 내장되어 있지 않습니다. Windows는 수년 동안 볼륨 믹서에 하나를 사용했지만 Mac에서는 볼륨 키와 메뉴 표시줄 슬라이더가 시스템 마스터 하나만 움직입니다. "Spotify를 40%로 유지하고 화상 통화를 100%로 유지"라고 말하는 자사 방식은 없습니다.</p>

<p>그래서 사람들은 해결 방법을 검색하고 Audio Hijack에 착수합니다. 그것 <em>할 수 있다</em> 단일 애플리케이션의 오디오를 가로채서 처리할 수 있으므로 앱별 볼륨을 수행합니다. 하지만 이 기능은 앱과 하드웨어에서 오디오 녹음, 효과 연결, 가상 장치 간 라우팅, 재사용 가능한 세션 파이프라인 구축 등 실제로 설계된 기능의 부작용입니다. 그 점에서는 정말 뛰어납니다. 가벼운 질문에 대한 무거운 대답일 뿐이다.</p>

<h2>Audio Hijack가 과잉이 되는 곳</h2>

<p>볼륨 슬라이더만 원하는 사람들을 좌절시키는 몇 가지 사항은 다음과 같습니다.</p>

<ul>
<li><strong>가격.</strong> Audio Hijack의 가격은 약 79달러입니다. 앱의 녹음 스튜디오에는 공평합니다. 브라우저 탭을 거절하는 것은 많은 일입니다.</li>
<li><strong>계속 실행되어야 합니다.</strong> 앱별 처리는 앱이 열려 있고 관련 세션이 활성화되어 있는 동안에만 작동합니다. 종료하면 볼륨이 원래대로 돌아갑니다. 슬라이더를 제자리에 고정하기 위해 전체 오디오 워크스테이션을 상주하게 유지하는 것입니다.</li>
<li><strong>세션 기반 사고.</strong> 블록과 연결을 사용하여 세션을 구축합니다. 캡처에는 강력하지만 목표가 "이 앱은 더 조용하고, 저 앱은 더 크게"인 경우 개념적 오버헤드가 많이 발생합니다.</li>
<li><strong>인터페이스가 깊습니다.</strong> 효과, 라우팅, 미터, 블록 배선 — 아무것도 녹음하지 않으면 대부분 무시하게 될 풍부한 표면적입니다.</li>
</ul>

<blockquote>경험 법칙: 원한다면 <em>기록 또는 경로</em> 오디오, Audio Hijack는 그 가격을 얻습니다. 당신이 원한다면 <em>균형</em> 앱 간 오디오를 사용하려면 손잡이가 필요할 때 워크숍 비용을 지불해야 합니다.</blockquote>

<h2>더 간단한 대안: 메뉴바 볼륨 믹서</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 대부분의 사람들이 실제로 왔던 한 가지 직업을 선택하고 그 일만 합니다. 메뉴 표시줄에 있습니다. 아이콘을 클릭하면 현재 오디오를 재생하는 모든 앱의 실시간 목록이 표시되며 각 앱에는 자체 슬라이더가 있습니다. Spotify를 30%로 드래그하고 통화를 100%로 두고 Slack를 완전히 음소거합니다. 완료되었으며 세션을 구축할 필요가 없습니다.</p>

<p>다루는 내용:</p>

<ul>
<li><strong>앱별 독립 볼륨</strong> — 모든 오디오 소스에는 실시간으로 조정 가능한 자체 슬라이더가 있습니다.</li>
<li><strong>앱별 음소거</strong> — 다른 것을 건드리지 않고 클릭 한 번으로 시끄러운 앱 하나를 침묵시킵니다.</li>
<li><strong>앱별 볼륨 부스트</strong> — 조용한 앱을 푸시하세요 <em>위에</em> 자체 최대값이 여전히 너무 부드러울 때 100%입니다. 이것은 시스템 슬라이더로는 절대 할 수 없는 부분입니다.</li>
<li><strong>볼륨 프로필</strong> — 전체 믹스(낮은 음악, 큰 통화, 알림 음소거)를 저장하고 주어진 상황에 대해 한 번의 클릭으로 불러올 수 있습니다.</li>
<li><strong>자동 더킹</strong> — 더 중요한 일이 시작되면 자동으로 배경 오디오를 낮추어 통화나 비디오가 재생 목록 아래에 묻히지 않도록 합니다.</li>
<li><strong>빠른 출력 전환</strong> — 동일한 메뉴에서 헤드폰, 스피커 및 기타 출력 사이를 이동합니다.</li>
</ul>

<h2>실용적: 1분 안에 앱별 제어 가능</h2>

<p>설정 차이가 핵심입니다. 라우팅 도구를 사용하면 세션을 생성하고, 소스 블록을 추가하고, 연결하고, 앱을 계속 실행할 수 있습니다. 기본적으로는 다음과 같습니다.</p>

<ul>
<li>설치 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> Mac App Store에서.</li>
<li>목록에 표시되도록 몇 가지 앱에서 오디오를 재생합니다.</li>
<li>메뉴 표시줄 아이콘을 클릭하고 각 앱의 슬라이더를 끌어서 맛보세요.</li>
<li>선택적으로 해당 믹스를 프로필로 저장하거나 너무 조용한 앱을 100% 이상으로 강화하세요.</li>
</ul>

<p>Mac App Store를 통해 배포되기 때문에 샌드박스 처리되어 일반 앱처럼 설치됩니다. <code>.dmg</code> 드래그, 커널 확장, 보안 설정에서 승인할 오디오 드라이버, macOS 업데이트 후 재승인이 필요한 항목이 없습니다. 마지막 사항이 중요합니다. 드라이버 기반 믹서는 역사적으로 OS 업그레이드 시 작동하지 않으며 시스템 수준 구성 요소를 다시 설치해야 합니다. 샌드박스 처리된 App Store 앱은 전체 유지 관리 범주를 방지합니다.</p>

<h2>어느 것을 선택해야합니까?</h2>

<p>일에 대해 솔직하게 말하세요. 선택 <strong>Audio Hijack</strong> 앱이나 하드웨어 오디오를 녹음해야 하는 경우 실시간 효과를 적용하거나 가상 장치 간 라우팅 그래프를 구축하세요. 그곳은 홈그라운드이고 거기에는 1달러의 가치가 있습니다.</p>

<p>실제 필요한 것이 "각 앱의 볼륨을 독립적으로 설정"하는 것이라면 전용 메뉴바 믹서를 선택하세요. ~$79 대신 €14.99를 한 번 지출하고 세션 구축을 건너뛰고 메뉴 표시줄에서 여는 패널에서 부스트, 음소거, 프로필 및 더킹 기능을 사용할 수 있습니다. 절대 만질 수 없는 녹음 기능도 없고 슬라이더를 제자리에 고정하기 위해 백그라운드에서 실행되는 워크스테이션도 없습니다.</p>

<p>볼륨 밸런싱을 위해 Audio Hijack를 시도한 대부분의 사람들은 작은 문제를 큰 도구로 해결하고 있었습니다. 귀하에게 적합하다면 소형 도구가 더 잘 맞으며 비용도 훨씬 저렴합니다.</p>

<p><a href="https://apps.apple.com/app/id6772792641">Mac App Store에서 SoundDial 가져오기</a> €14.99의 일회성 — 메뉴 표시줄에서 바로 앱별 볼륨, 부스트, 음소거, 프로필 및 자동 더킹을 수행할 수 있습니다.</p>`,
  },
  "boom-3d-alternative-per-app-volume-mac": {
    slug: "boom-3d-alternative-per-app-volume-mac",
    title: "Boom 3D 대안: 부풀림 없는 앱별 볼륨(Mac)",
    description: "주로 오디오를 증폭하기 위해 Boom 3D를 사용했지만 실제로 앱별 볼륨 제어를 원했다면 SoundDial는 더 간결한 Mac 대안입니다. 앱별 독립적인 볼륨, 앱별 음소거 및 증폭, 일회성 가격, 시스템 전체 EQ 또는 드라이버가 없습니다.",
    date: "2026-07-23",
    readTime: "5분 읽기",
    content: `<p>볼륨을 높이기 위해 Boom 3D를 사용했지만 실제로 각 앱을 개별적으로 제어하고 싶다면 다른 도구가 필요합니다. Boom 3D는 시스템 전체의 볼륨 부스터 및 EQ입니다. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 집중된 앱별 볼륨 믹서: 각 앱에 대한 독립적인 볼륨, 음소거 및 부스트, 일회성 €14.99, EQ 없음, 드라이버 없음.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Boom 3D 대안: 부풀림 없는 앱별 볼륨(Mac)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Boom 3D가 실제로 수행하는 작업(및 수행하지 않는 작업)</h2>
<p>Boom 3D는 시스템 전반의 볼륨 부스트, 31밴드 이퀄라이저 및 3D "서라운드" 효과라는 세 가지 요소를 중심으로 구축되었습니다. 이는 다음에 적용됩니다. <em>모든 것</em> Mac가 한 번에 재생됩니다. 귀하의 목표가 더 큰 노트북이나 전반적으로 마음에 드는 저음 곡선인 경우 이는 정말 유용합니다.</p>
<p>Boom 3D가 구축되지 않은 이유는 앱을 독립 채널로 취급하는 것입니다. "Spotify는 40%, 내 화상 통화는 100%, 이 브라우저 탭은 음소거되었습니다."라고 말할 수 있는 명확한 방법은 없습니다. 슬라이더는 전체 믹스를 이동합니다. 그리고 신호 경로에 오디오 드라이버를 설치하기 때문에 샌드박스 유틸리티보다 낮은 수준에서 시스템에 영향을 미칩니다. 또한 작은 일회성 도구가 아닌 업그레이드 주기가 있는 유료 제품으로 포지셔닝됩니다.</p>
<blockquote><p>일반적인 이야기: 사람들은 하나의 조용한 앱을 더 크게 만들기 위해 Boom 3D를 설치한 다음 macOS에 앱별 볼륨 믹서가 전혀 없다는 것이 진짜 문제라는 것을 깨닫습니다.</p></blockquote>

<h2>격차: macOS에는 볼륨 믹서가 없습니다.</h2>
<p>이것은 Windows에서 오는 사람들을 놀라게 합니다. Windows는 수년간 앱별 볼륨 믹서를 사용해 왔습니다. 스피커를 마우스 오른쪽 버튼으로 클릭하고 각 앱의 레벨을 개별적으로 설정하세요. macOS는 단순히 이것을 배송하지 않습니다. 하나의 마스터 볼륨과 각 앱이 노출하는 내부 슬라이더가 제공됩니다. 게임에 대해 Slack와 YouTube 탭의 균형을 맞추는 OS 수준의 방법은 없습니다.</p>
<p>따라서 음악 앱이 통화를 방해할 때 유일한 기본 옵션은 조야합니다. 마스터를 낮추거나(모든 것을 조용하게 함) 볼륨 조절 기능이 있기를 바라며 각 앱의 자체 설정을 살펴보는 것입니다. Boom 3D도 그 격차를 좁히지 못합니다. 각 앱이 아닌 전체 믹스를 더 크게 만듭니다.</p>

<h2>SoundDial가 맞는 곳</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 누락된 믹서입니다. 메뉴 표시줄에 있으며 실행 중인 모든 앱에 자체 슬라이더가 있는 자체 행을 제공합니다. 이것이 Boom 3D와의 핵심 차이점입니다. 하나의 전역 효과 대신 소스별 제어가 가능합니다.</p>
<ul>
<li><strong>앱별 독립 볼륨</strong> — 화상 통화가 100%로 유지되는 동안 Spotify를 30%로 설정하세요.</li>
<li><strong>앱별 음소거</strong> — 다른 것을 건드리지 않고 시끄러운 앱 하나를 즉시 침묵시킵니다.</li>
<li><strong>앱별 부스트</strong> — Boom 3D의 100%보다 큰 트릭이 마음에 드셨다면 SoundDial는 이를 유지하지만 전체 시스템이 아닌 단일 앱을 대상으로 합니다. 조용한 앱은 스스로 정상적인 한계를 넘어섰습니다.</li>
<li><strong>볼륨 프로필</strong> — 믹서 레이아웃(예: "게임", "회의", "음악")을 저장하고 매번 슬라이더의 균형을 재조정하는 대신 한 번의 클릭으로 다시 불러올 수 있습니다.</li>
<li><strong>자동 더킹</strong> — 중요한 일이 시작되면 자동으로 배경 오디오를 낮추어 통화나 게임 신호가 음악 아래에 묻히지 않도록 합니다.</li>
<li><strong>빠른 출력 전환</strong> — 동일한 메뉴에서 헤드폰, 스피커 및 기타 출력 사이를 이동합니다.</li>
</ul>
<p>SoundDial가 의도적으로 수행하지 않는 것은 나머지 Boom 3D 기능 확장입니다. 31밴드 EQ도 없고, 가짜 서라운드 처리도 없고, 시스템 전반에 걸친 효과 체인도 없습니다. 마스터링급 EQ를 원한다면 Boom 3D 또는 전용 오디오 제품군이 올바른 선택입니다. 실제로 Boom 3D를 계속 열어 본 이유가 <em>볼륨</em>, 그 표면적은 당신이 운반하기 위해 비용을 지불하는 부풀어 오른 것입니다.</p>

<h2>드라이버 없이 부스트</h2>
<p>"부스트" 질문은 일반적으로 Boom 3D 사용자가 대안을 찾는 이유이기 때문에 직접적인 대답을 할 가치가 있습니다. Boom 3D의 부스트는 글로벌 드라이버 기반입니다. SoundDial의 부스트는 앱별로 이루어지며 Apple의 앱 샌드박스 모델 내에서 실행됩니다. Mac App Store를 통해 배포되므로 별도의 설치 프로그램, 커널 수준 드라이버 및 나중에 제거할 남은 시스템 구성 요소가 없습니다. 전체 오디오 경로를 운전자에게 제어하지 않고도 "이 조용한 앱을 더 크게 만들기" 결과를 얻을 수 있습니다.</p>

<h2>가격: 일회성 vs. 지속적</h2>
<p>Boom 3D는 자체 업그레이드 및 라이선스 모델을 갖춘 유료 앱이며 가격은 플랫폼과 버전에 따라 다릅니다. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> €14.99의 일회성 구매입니다. 한 번 구매하면 유지되며 믹서 작동을 유지하기 위해 구독이나 버전별 재구매가 필요하지 않습니다. 매일 메뉴 표시줄에서 실행되는 유틸리티의 경우 계속해서 재구매해야 하는 제품보다 정액 가격이 더 오래 지속되는 경향이 있습니다.</p>

<h2>어느 것을 선택해야합니까?</h2>
<ul>
<li><strong>Boom 3D를 선택하세요</strong> 당신의 진짜 필요가 심각한 이퀄라이저와 시스템 전반의 오디오 효과이고 믹스에 오디오 드라이버가 있어도 상관없다면 말이죠.</li>
<li><strong>SoundDial를 선택하세요</strong> Windows 사용자가 당연하게 여기는 실제 앱별 볼륨 믹서와 타겟 부스트, 프로필, 자동 더킹을 일회성 가격으로 드라이버를 설치할 필요 없이 원하는 경우.</li>
</ul>
<p>Boom 3D를 튕겨내는 대부분의 사람들은 두 번째 그룹에 속합니다. 그들은 주파수를 조정하고 싶지 않았습니다. 그들은 통화보다 더 조용한 브라우저를 원했습니다. 이것이 바로 SoundDial의 목적입니다.</p>

<p><strong>EQ 부풀림이나 구독 없이 Mac에서 앱별 볼륨 제어를 원하십니까?</strong> <a href="https://apps.apple.com/app/id6772792641">Mac App Store에서 SoundDial 가져오기</a> — 1회 €14.99, 샌드박스 처리, 드라이버 없음, 모든 앱에 자체 슬라이더가 있습니다.</p>`,
  },
  "mute-everything-except-one-app-mac": {
    slug: "mute-everything-except-one-app-mac",
    title: "Mac에서 하나의 앱을 제외한 모든 것을 음소거하는 방법",
    description: "macOS에는 앱별 볼륨 믹서가 없으므로 하나를 제외한 모든 앱을 음소거하려면 도우미가 필요합니다. 다른 모든 항목은 음소거 상태로 유지하면서 통화, 스트림 또는 게임만 듣는 방법은 다음과 같습니다.",
    date: "2026-07-23",
    readTime: "5분 읽기",
    content: `<p>macOS에는 개별 앱을 음소거하는 방법이 내장되어 있지 않으므로 하나의 앱만 들으려면 앱별 볼륨 믹서가 필요합니다. 설치 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, 메뉴 표시줄 믹서를 열고 듣고 싶은 앱을 제외한 모든 앱을 음소거하면 해당 앱은 계속 재생되고 나머지 앱은 즉시 무음으로 전환됩니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac에서 하나의 앱을 제외한 모든 것을 음소거하는 방법" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>macOS가 스스로 이 작업을 수행할 수 없는 이유</h2>
<p>Windows는 10년 넘게 볼륨 믹서를 사용해 왔습니다. 스피커 아이콘을 마우스 오른쪽 버튼으로 클릭하면 실행 중인 모든 앱에 자체 슬라이더가 표시됩니다. macOS는 이것을 배송한 적이 없습니다. Mac의 볼륨 키는 마스터 출력 레벨 하나만 제어합니다. 시스템을 끄면 모든 것이 함께 다운됩니다. 음소거하면 모든 것이 음소거됩니다.</p>
<p>동시에 소리를 내는 다섯 가지가 있을 때까지는 괜찮습니다. 화상 통화 중인데 브라우저 탭에서 광고가 자동 재생되고 있고, Spotify가 계속 실행 중이고, 게임이 백그라운드에서 핑 소리를 내고 있고, Slack가 차임벨을 울리고 있습니다. 유일한 기본 옵션은 앱을 종료하고, 각 앱의 자체 설정에서 하나씩 음소거하거나(해당 옵션이 있는 경우) 헤드폰을 잡아당기는 것입니다. 그 어느 것도 "이것은 유지하고 나머지는 침묵시키세요"라고 말할 수는 없습니다.</p>

<h2>간단한 방법: 믹서로 나머지 부분을 음소거</h2>
<p>앱별 믹서는 앱과 출력 장치 사이에 위치하며 각 앱에 자체 볼륨 및 음소거 제어 기능을 제공합니다. 하나를 실행하면 단일 앱을 분리하는 데 몇 초가 걸립니다.</p>
<ul>
<li>메뉴 표시줄에서 믹서를 엽니다. 현재 오디오를 생성하는 모든 앱의 실시간 목록이 표시됩니다.</li>
<li>듣고 싶은 앱, 통화, 스트림, 게임을 찾으세요.</li>
<li>다른 모든 것을 음소거합니다. 각 앱 옆에 있는 음소거 토글을 탭하거나 해당 앱의 슬라이더를 0으로 당깁니다.</li>
<li>그게 다야. 혼자 남겨둔 하나의 앱은 계속 최대 볼륨으로 재생되고 나머지 앱은 조용하게 유지됩니다.</li>
</ul>
<p>와 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, 목록의 각 앱에는 자체 슬라이더와 음소거 버튼이 있으므로 몇 번의 클릭만으로 충분합니다. 나중에 재생되기 시작하는 새로운 앱은 자동으로 표시되므로 알림 소리가 몰래 들어오려고 하면 집중된 앱을 터치하지 않고도 그 자리에서 소리를 무음으로 설정할 수 있습니다.</p>

<blockquote>비결은 "하나를 제외한 모든 것"을 음소거하는 것은 하나의 앱을 음소거하는 것과 반대라는 것입니다. Mac를 침묵시키는 것이 아니라 실제로 관심을 갖고 있는 주변의 소음을 침묵시키는 것입니다.</blockquote>

<h2>다시 실행하지 않도록 프로필로 저장하세요.</h2>
<p>자주 사용하는 설정이라면 매번 손으로 하는 것이 시간이 지나면 지날수록 좋습니다. 회의 중에 통화 앱을 항상 크게 켜고 다른 모든 것을 끄고 싶거나, 게임과 브라우저가 조용하게 유지되는 동안 스트림을 전면 중앙에 두고 싶다고 가정해 보세요. 볼륨 프로필은 정확한 앱별 설정을 저장하고 한 번의 클릭으로 다시 적용합니다.</p>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> "회의" 또는 "스트림 전용"과 같은 프로필을 저장한 다음 필요할 때 즉시 전환할 수 있습니다. 한 번 설정하면 하나의 앱을 분리하는 것이 5개의 슬라이더 작업 대신 단일 메뉴 표시줄 작업이 됩니다.</p>

<h2>더 스마트한 버전: 하드 음소거 대신 자동 덕</h2>
<p>때로는 다른 앱이 완전히 사라지는 것을 원하지 않고, 더 중요한 일이 시작될 때 해당 앱이 방해가 되지 않기를 바라는 경우도 있습니다. 자동 더킹입니다. 우선 순위 앱이 재생되면 백그라운드 앱이 자동으로 낮은 수준으로 떨어졌다가 중지되면 다시 시작됩니다.</p>
<p>이는 통화 및 스트림에 이상적입니다. 누군가 말하기 시작하면 그 사람의 목소리를 들을 수 있도록 음악이 낮아지고, 통화가 끝나면 음악이 저절로 다시 재생됩니다. 상황이 바뀔 때마다 수동으로 음소거하거나 음소거 해제하지 않고도 "하나의 앱을 명확하게 듣기" 결과를 얻을 수 있습니다. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 수동 믹서와 함께 자동 더킹 기능이 포함되어 있어 완전한 침묵을 위해 하드 음소거를 선택하거나 더 부드러운 배경을 위해 더킹을 선택할 수 있습니다.</p>

<h2>당신이 보관하고 있던 하나의 앱을 부스트하기</h2>
<p>단일 앱을 분리하면 보너스가 있습니다. Mac가 일반적으로 허용하는 것보다 더 크게 만들 수도 있습니다. 일부 앱, 특히 조용한 화상 통화나 제대로 마스터되지 않은 스트림은 최대 볼륨에서도 거의 들리지 않습니다. 앱별 부스트는 시스템 출력을 크랭킹하지 않고도 개별 앱을 100% 이상으로 푸시하며, 이는 이미 음소거한 앱을 증폭시킬 뿐입니다.</p>
<p>따라서 전체적인 조치는 소음을 음소거하고 하나의 앱을 유지하며 해당 앱이 너무 조용하면 성능을 높이는 것입니다. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 동일한 믹서 창에서 세 가지를 모두 처리합니다.</p>

<h2>귀하가 가입하지 않은 항목</h2>
<p>Mac 오디오 도구에 대한 일반적인 걱정은 커널 확장, 가상 오디오 드라이버 또는 임의의 웹 사이트에서 다운로드한 그늘진 설치 프로그램이 필요하다는 것입니다. 이는 타당한 우려이며 일부 사람들이 이러한 앱을 완전히 피하는 이유입니다.</p>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> Mac App Store에 있고 샌드박스 처리되어 일반 앱처럼 설치되며 드라이버도 없고 DMG도 없으며 승인할 시스템 확장도 없습니다. 구독이 아닌 일회성 €14.99 구매이므로 한 번만 결제하면 유지됩니다. 이는 하루 종일 메뉴 표시줄에 실행 상태를 유지하는 작업에 중요합니다.</p>

<h2>빠른 요약</h2>
<ul>
<li>macOS에는 기본 앱별 볼륨 제어 기능이 없으므로 이를 수행하려면 믹서가 필요합니다.</li>
<li>믹서를 열고, 하나의 앱을 유지하고, 다른 모든 앱을 음소거하거나 0으로 설정하세요.</li>
<li>자주 통화하거나 스트리밍하는 경우 프로필로 저장하세요.</li>
<li>백그라운드 앱을 종료하지 않고 조용하게 하려면 자동 더킹을 사용하세요.</li>
<li>자체적으로 너무 조용한 경우 보관된 앱을 강화하세요.</li>
</ul>

<p>중요한 것만 듣고 나머지는 침묵시키고 싶으십니까? <a href="https://apps.apple.com/app/id6772792641">Mac App Store에서 SoundDial 가져오기</a> 1분 안에 첫 번째 음소거 프로필을 설정하세요.</p>`,
  },
  "different-volume-per-output-device-mac": {
    slug: "different-volume-per-output-device-mac",
    title: "Mac에서 스피커와 헤드폰의 볼륨을 다르게 유지",
    description: "macOS는 스피커와 헤드폰 사이를 전환할 때 앱 수준 볼륨 믹스를 잊어버립니다. 이러한 현상이 발생하는 이유, 수동 제한 및 앱별 볼륨 메모리가 문제를 해결하는 방법은 다음과 같습니다.",
    date: "2026-07-23",
    readTime: "5분 읽기",
    content: `<p>macOS는 실제로 각 출력 장치에 대해 별도의 시스템 볼륨을 기억하지만 전환할 때마다 앱 수준 밸런스를 잊어버립니다. 따라서 헤드폰과 스피커는 자체적인 전체 레벨을 유지하지만 플러그를 뽑는 순간 하나의 앱이 작동하고 다른 앱은 사라집니다. 해결책은 macOS에 기본 도구가 없는 장치 전환 후에도 유지되는 앱별 볼륨 메모리입니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac에서 스피커와 헤드폰의 볼륨을 다르게 유지" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>macOS가 기억하는 것과 기억하지 않는 것</h2>

<p>macOS는 모든 출력 장치를 동일하게 취급한다는 일반적인 믿음이 있습니다. 그렇지 않습니다. 각 출력 장치는 자체 시스템 볼륨을 저장합니다. MacBook 스피커를 30%로 설정하고 AirPods를 80%로 설정하면 macOS는 이 두 숫자를 별도로 유지합니다. 플러그를 꽂았다가 뽑았다가 다시 연결하면 각 장치가 원래 있던 위치로 돌아갑니다.</p>

<p>그렇다면 왜 경험이 여전히 깨졌다고 느껴지는 걸까요? 그 메모리는 단일 전역 슬라이더에서 멈추기 때문입니다. macOS에는 특정 장치에서 재생되는 모든 항목에 대해 정확히 하나의 볼륨 컨트롤이 있습니다. 개별 앱의 소리가 얼마나 큰지 기억하지 못합니다. 스피커에서 헤드폰으로 전환하면 Spotify, Zoom 통화 및 YouTube 탭 간의 균형이 유지되지 않습니다. 해당 균형이 존재한 적이 없기 때문입니다. 모든 앱은 동일한 슬라이더를 공유합니다.</p>

<p>그 결과 사람들은 "스피커와 헤드폰의 볼륨이 다르다"고 설명하는 좌절감을 느끼게 됩니다. 그들이 일반적으로 원하는 것은 장치마다 다른 마스터 레벨이 아니라 기억에 남는 믹스입니다. 조용한 음악, 시끄러운 통화, 알림이 꺼져 있고 책상 스피커나 헤드폰을 사용하든 그 믹스가 그대로 유지됩니다.</p>

<h2>수동 해결 방법 및 부족한 부분</h2>

<p>내장된 도구를 사용하면 중간에 도달할 수 있으며, 다른 것을 찾기 전에 한계를 아는 것이 좋습니다.</p>

<ul>
<li><strong>각 장치의 시스템 볼륨을 한 번씩 설정합니다.</strong> 스피커를 통해 오디오를 재생하고 레벨을 설정한 다음 출력을 헤드폰으로 전환하고 해당 레벨을 설정합니다. macOS는 둘 다 유지합니다. 이는 장치별로 마스터 볼륨을 처리하지만 앱별로는 처리하지 않습니다.</li>
<li><strong>앱에서 제공하는 앱별 볼륨을 사용하세요.</strong> Spotify, VLC 및 대부분의 브라우저에는 자체 내부 볼륨이 있습니다. 앱 자체 내에서 시끄러운 앱을 다듬을 수 있습니다. 문제: 이 설정은 기기가 아닌 앱에 있으므로 헤드폰으로 전환해도 변경되지 않으며 대부분의 앱(Slack, Zoom, 시스템 알림, 메일)에는 그러한 제어 기능이 전혀 없습니다.</li>
<li><strong>제어 센터 또는 메뉴 막대에서 출력을 전환합니다.</strong> 장치 사이를 빠르게 이동하려면 메뉴 막대에서 볼륨 아이콘을 Option 키를 누른 채 클릭하세요. 빠르지만 마스터 레벨만 이동할 뿐 앱별 믹스를 복원하지는 않습니다.</li>
</ul>

<p>이를 통해 장치별 마스터 볼륨을 얻을 수 있습니다. 그 중 어느 것도 당신에게 제공하지 않는 것은 여러 장치에서 당신을 따라다니는 기억된 앱별 잔액입니다. 그 격차는 바로 성가심이 존재하는 곳이며 구조적입니다. OS에는 수년간 하나를 출시한 Windows와 달리 앱별 믹서가 없습니다.</p>

<h2>앱별 볼륨 메모리, 기기 전환이 진짜 문제인 이유</h2>

<p>더 깊은 수정은 각 앱에 자체 볼륨을 제공하고 해당 설정을 유지하는 것입니다. 이것이 앱별 믹서와 같은 것입니다. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 위해 만들어졌습니다. 메뉴 표시줄에 있으며 현재 사운드를 생성하는 모든 앱을 나열하고 각 앱에 독립적인 슬라이더, 음소거 토글 및 조용한 앱의 경우 100% 이상의 부스트 기능도 제공합니다.</p>

<p>스피커 대 헤드폰 문제에서 중요한 부분: 해당 레벨이 기억됩니다. 음악을 40%로, 통화를 90%로, 채팅 앱을 음소거로 설정하세요. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 그 혼합을 유지합니다. 헤드폰을 뽑고 스피커로 돌아가면 매번 손으로 세 가지 앱의 균형을 다시 맞추는 것이 아닙니다.</p>

<p>볼륨 프로필은 이를 더욱 발전시킵니다. 앱별 레벨의 이름이 지정된 세트를 저장하고 한 번의 클릭으로 불러올 수 있으므로 "헤드폰, 집중 작업" 믹스와 "스피커, 회의" 믹스는 각각 수동 재설정이 아닌 단일 선택이 됩니다.</p>

<blockquote><p>정신적 변화: 계속 드래그하는 하나의 마스터 슬라이더에 대해 생각하지 말고 상황별로 저장된 믹스에 대해 생각하기 시작하십시오. 장치 전환은 더 이상 균형을 재조정하는 일이 아닙니다.</p></blockquote>

<h2>믹스 손실 없이 빠른 출력 전환</h2>

<p>스위칭 장치는 빠르고 비파괴적이어야 합니다. 동일한 메뉴 표시줄 패널에서 출력 장치를 변경할 수 있으므로 한 번의 클릭으로 스피커에서 헤드폰으로 이동할 수 있으며 단일 글로벌 숫자로 다시 축소되는 대신 앱별 레벨이 표시됩니다.</p>

<p>언급할 가치가 있는 관련 기능은 자동 더킹입니다. 마이크에 오디오가 들어오면(말하기 시작하거나 통화 시작) 다른 앱이 자동으로 낮아져 사용자의 목소리를 들을 수 있게 한 다음 나중에 설정된 수준으로 돌아갑니다. 이는 장치가 아닌 주의에 적용되는 것과 동일한 원리이며, macOS가 자체적으로 수행할 수 없는 또 다른 작업입니다.</p>

<h2>설정 방법</h2>

<ul>
<li>설치 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> Mac App Store에서. 샌드박스이므로 승인할 드라이버, DMG 및 커널 확장이 없습니다.</li>
<li>가장 많이 사용하는 앱에서 오디오를 재생하면 믹서에 표시됩니다.</li>
<li>각 앱의 레벨을 설정하고, 원하지 않는 앱을 음소거하고, 너무 조용한 앱의 레벨을 높이세요.</li>
<li>해당 배열을 프로필로 저장합니다(예: 헤드폰용으로 조정된 프로필과 스피커용으로 조정된 프로필).</li>
<li>장치를 전환할 때 일치하는 프로필을 불러오거나 저장된 앱별 레벨이 그대로 유지되도록 하세요.</li>
</ul>

<p>솔직한 요약: macOS는 마스터 레벨에서 출력 장치당 볼륨을 기억하지만 앱별 믹서가 없기 때문에 앱별 믹스는 전혀 기억하지 않습니다. 실제 목표가 스피커와 헤드폰을 전환할 때마다 유지되는 음악, 통화, 알림 간의 일관된 균형을 유지하는 것이라면 OS 위에 앱별 메모리가 필요합니다.</p>

<p>모든 앱을 다시 조정하지 않고도 스피커와 헤드폰이 자체 믹스를 유지하길 원하시나요? <a href="https://apps.apple.com/app/id6772792641">Mac App Store에서 SoundDial 가져오기</a> 일회성 €14.99, 구독 없음, 드라이버 없음.</p>`,
  },
  "sound-control-alternative-mac": {
    slug: "sound-control-alternative-mac",
    title: "Sound Control 단종되었나요? 최고의 Mac 앱별 볼륨 교체(2026)",
    description: "Static Z Software의 Sound Control는 단종되었으며 최신 macOS에서 중단됩니다. 작동이 중지된 이유, 수행한 작업 및 2026년에 전환할 최고의 앱별 볼륨 믹서는 다음과 같습니다.",
    date: "2026-07-23",
    readTime: "5분 읽기",
    content: `<p>Static Z Software의 Sound Control는 단종되어 더 이상 판매 또는 업데이트되지 않으며 Apple이 잠근 커널 수준 오디오 드라이버에 의존하기 때문에 최신 macOS에서는 점점 더 실패합니다. 현재 앱별 볼륨이 필요한 경우 가장 깔끔한 대체 방법은 다음과 같습니다. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, 드라이버가 없는 샌드박스 Mac App Store 믹서입니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Sound Control 단종되었나요? 최고의 Mac 앱별 볼륨 교체(2026)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Sound Control가 실제로 한 일</h2>
<p>Sound Control는 수년 동안 진정한 macOS 격차에 대한 해답이었습니다. Mac에는 아직 앱별 볼륨 믹서가 내장되어 있지 않습니다. Windows는 Vista 이후 볼륨 믹서에 하나가 있었지만 macOS는 단일 마스터 슬라이더만 제공합니다. Sound Control는 다음과 같은 작업을 수행할 수 있는 깔끔한 메뉴 표시줄 패널로 그 구멍을 채웠습니다.</p>
<ul>
<li>실행 중인 각 앱에 대해 독립적인 볼륨 수준을 설정합니다.</li>
<li>시스템 오디오의 나머지 부분을 건드리지 않고 개별 앱을 음소거합니다.</li>
<li>조용한 앱을 100% 이상 향상시킵니다.</li>
<li>앱별 이퀄라이저 및 밸런스 조정을 적용합니다.</li>
<li>오디오 및 핀 앱을 특정 출력 장치로 라우팅합니다.</li>
</ul>
<p>배경 YouTube 탭이 속삭이는 동안 Zoom 통화가 터지는 것을 경험한 사람이라면 앱별 제어가 혁신적이었습니다. 많은 Mac 고급 사용자 컴퓨터에서 조용한 필수 요소가 되었습니다.</p>

<h2>작동이 중지된 이유</h2>
<p>여기서는 솔직한 기술적인 이야기가 중요합니다. 왜 이것이 누군가가 간단히 패치할 수 있는 버그가 아닌지 설명하기 때문입니다. Sound Control는 시스템 오디오 드라이버를 설치하여 작동했습니다. 커널 확장(kext)은 macOS 오디오 파이프라인에 자체적으로 삽입되어 각 앱의 출력을 가로채서 재구성할 수 있었습니다. 그 깊은 후크가 바로 EQ와 부스트 기능을 가능하게 만든 것입니다.</p>
<p>macOS 10.15 Catalina부터 시작하여 Big Sur 및 Apple Silicon 전환을 가속화하면서 Apple은 사용자 공간 대안을 위해 커널 확장을 더 이상 사용하지 않기 시작했습니다. Apple Silicon Mac에서 타사 kext를 로드하려면 복구 모드에서 시스템 보안을 낮추어야 하며 Apple은 레거시 오디오 kext가 차용 시간에 있음을 분명히 했습니다. Static Z Software는 궁극적으로 Sound Control 판매 및 개발을 중단했습니다. 결과: 최신 macOS 버전에서는 설치가 실패하고, 오디오 결함이 발생하거나, 대부분의 사람들이 당연히 원하지 않는 보안 다운그레이드 없이 드라이버가 로드를 거부합니다.</p>
<blockquote>이는 개발자 측에서 무시한 것이 아닙니다. 이는 플랫폼 수준의 변화입니다. Apple은 일종의 저수준 오디오 드라이버 Sound Control의 문을 닫았으며 어떤 업데이트도 완전히 다시 열 수 없습니다.</blockquote>

<h2>최신 macOS에서 변경된 사항</h2>
<p>Apple은 관련 사항 한 가지를 추가했습니다. Core Audio는 이제 앱이 사용자 공간에서 프로세스별 오디오를 캡처하고 처리할 수 있는 Tap API(macOS 14.2 Sonoma에 도입됨)를 제공합니다. kext도 없고, 보안 다운그레이드도 없고, 복구로 재부팅할 필요도 없습니다. 이는 앱별 오디오에 대해 승인된 최신 경로이며 현재 믹서를 구축해야 하는 기반입니다. 트레이드오프는 정직합니다. 사용자 공간 탭은 이전 커널 드라이버보다 더 제한적이므로 제공되는 전체 앱별 매개변수 EQ Sound Control보다는 깨끗한 앱별 볼륨, 음소거 및 부스트를 기대해야 합니다.</p>

<h2>최고의 대체품: SoundDial</h2>
<p>Sound Control가 수행한 핵심 기능(앱당 독립적인 볼륨)을 Mac에서 원한다면 실제로 보안과 최신 상태를 유지할 수 있습니다. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 2026년에 가장 가까운 깔끔한 마이그레이션 옵션입니다. 최신 macOS 오디오 스택용으로 제작된 메뉴 표시줄 앱별 볼륨 믹서입니다. Sound Control 워크플로우에서 이어지는 내용은 다음과 같습니다.</p>
<ul>
<li><strong>앱별 독립 볼륨</strong> — 메뉴 표시줄 오른쪽에 실행 중인 애플리케이션당 하나의 슬라이더가 있습니다.</li>
<li><strong>앱별 음소거</strong> — 다른 모든 앱이 계속 재생되는 동안 하나의 앱을 무음으로 설정하세요.</li>
<li><strong>앱별 볼륨 부스트</strong> — 조용한 앱을 정상 천장 이상으로 밀어 넣으십시오.</li>
<li><strong>볼륨 프로필</strong> — 다양한 상황(통화, 음악, 게임)에 대한 믹서 설정을 저장하고 그 사이를 전환합니다.</li>
<li><strong>자동 더킹</strong> — 백그라운드 앱 볼륨을 자동으로 낮추어 통화를 시작하거나 전화가 올 때 유용합니다.</li>
<li><strong>빠른 출력 전환</strong> — 시스템 설정으로 들어가지 않고도 스피커, 헤드폰 및 기타 장치 사이를 이동할 수 있습니다.</li>
</ul>
<p>마이그레이션에 중요한 실질적인 차이점은 다음과 같습니다. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> Mac App Store를 통해 배송되고 샌드박스 처리되며 드라이버나 DMG를 설치하지 않습니다. 이는 승인할 커널 확장이 없고, 복구 모드가 없으며, Mac의 보안 상태가 저하되지 않음을 의미합니다. 이는 Sound Control를 죽인 정확한 문제점입니다. 구독이 아닌 €14.99의 일회성 구매입니다.</p>

<h2>단계별 전환 방법</h2>
<ul>
<li><strong>Sound Control를 깨끗하게 제거합니다.</strong> 드라이버가 설치되었으므로 여전히 실행 중인 경우 자체 제거 프로그램을 사용하거나 새 항목을 설치하기 전에 오디오 드라이버 구성 요소를 제거하십시오. 두 개의 경쟁 오디오 후크로 인해 결함이 발생할 수 있습니다.</li>
<li><strong>App Store에서 SoundDial를 설치합니다.</strong> 재부팅이나 보안 변경이 필요하지 않습니다.</li>
<li><strong>요청한 오디오 권한을 부여합니다.</strong> 이를 통해 최신 macOS에서 앱별 출력을 읽고 제어할 수 있습니다.</li>
<li><strong>메뉴바 패널을 열고 레벨을 설정하세요.</strong> 실행 중인 앱은 개별 슬라이더와 함께 표시됩니다. 필요에 따라 조정, 음소거 또는 증폭을 수행합니다.</li>
<li><strong>프로필을 저장합니다.</strong> 즐겨 사용하는 Sound Control 설정이 있는 경우 한 번의 클릭으로 전환할 수 있도록 해당 설정을 프로필로 다시 생성하세요.</li>
</ul>

<h2>정직한 기대</h2>
<p>Sound Control를 사용하는 유일한 이유가 앱별 볼륨, 음소거 및 부스트뿐이라면 최신 샌드박스 믹서가 모든 기능을 지원합니다. 앱별 이퀄라이저에 크게 의존했다면 Deep EQ는 이전 드라이버 모델과 연결되어 있으며 Apple의 현재 규칙에 따라 깔끔하게 재현하기 가장 어려운 기능이라는 점을 기억하세요. 그에 따라 기대치를 설정하면 놀라지 않을 것입니다.</p>

<p>드라이버 문제 없이 앱별 볼륨을 다시 확보할 준비가 되셨나요? <a href="https://apps.apple.com/app/id6772792641">Mac App Store에서 SoundDial 가져오기</a> — 일회성 €14.99, 샌드박스, 구독 없음, 드라이버 없음.</p>`,
  },
  "soundbunny-alternative-mac": {
    slug: "soundbunny-alternative-mac",
    title: "SoundBunny는 사라졌습니다 — 이를 대체할 최신 Mac 앱별 볼륨 앱",
    description: "Prosoft의 SoundBunny가 단종되었습니다. 다음은 이를 대체하기 위해 적극적으로 유지 관리되는 macOS 앱별 볼륨 믹서와 커널 드라이버 없이 앱별 오디오 설정을 마이그레이션하는 방법입니다.",
    date: "2026-07-23",
    readTime: "5분 읽기",
    content: `<p>SoundBunny가 작동을 멈추거나 더 이상 판매되지 않는 경우 최신 교체품은 다음과 같습니다. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, 현재 macOS용으로 제작된 메뉴 표시줄 앱별 볼륨 믹서입니다. 커널 드라이버, DMG 또는 관리할 구독 없이 €14.99 일회성 Mac App Store 구매와 동일한 핵심 작업(애플리케이션별 독립적인 볼륨, 음소거 및 부스트)을 제공합니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — SoundBunny는 사라졌습니다 — 이를 대체할 최신 Mac 앱별 볼륨 앱" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>SoundBunny에게 무슨 일이 일어났나요?</h2>
<p>SoundBunny는 Prosoft Engineering의 macOS용 앱별 볼륨 유틸리티였습니다. 메뉴 막대에서 바로 실행 중인 각 앱에 대해 서로 다른 볼륨 수준을 설정할 수 있습니다. 음악은 조용하게, 통화는 크게, 브라우저는 그 사이에서 할 수 있습니다. 수년 동안 이는 Apple이 결코 좁히지 못한 격차를 메우는 몇 안 되는 도구 중 하나였습니다.</p>
<p>문제는 SoundBunny가 레거시 소프트웨어라는 것입니다. 이는 Apple Silicon, 강화된 런타임, 강화된 시스템 확장 규칙, 이전 오디오 후크 제거 등 Apple이 macOS 오디오 및 보안에 적용한 근본적인 변화와 보조를 맞추지 못했습니다. 이와 같은 유틸리티가 업데이트 수신을 중단하면 결국 작동이 중단됩니다. 실행에 실패하거나, OS 업데이트 후 앱 스트림 제어를 잃거나, 최신 Mac에 완전히 설치할 수 없게 됩니다. 만약 당신이 거기 있다면, 당신은 아무 잘못도 하지 않습니다. 당신이 아니라 앱이 뒤에 있습니다.</p>

<h2>macOS에 여전히 타사 믹서가 필요한 이유</h2>
<p>솔직한 부분은 다음과 같습니다. 이는 macOS의 실제 격차이며 설정에서 수정할 수 있는 버그가 아닙니다. Windows는 10년 넘게 앱별 볼륨 믹서를 출시해 왔습니다. macOS에는 그런 적이 없습니다. 시스템 볼륨 슬라이더와 사운드 설정은 <em>출력 장치</em> 전체적으로 모든 앱은 동일한 마스터 레벨을 따릅니다. "Safari를 40%로 유지하고 Zoom를 100%로 유지"라고 말하는 기본 제공 방법은 없습니다.</p>
<p>그렇기 때문에 SoundBunny와 같은 도구가 존재했고 오늘날에도 여전히 교체가 필요한 이유입니다. 앱이 생겼을 때 그 필요성은 사라지지 않았습니다. Apple은 여전히 ​​이 문제를 해결하지 않았습니다.</p>

<h2>최신 대체품: SoundDial</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 메뉴 표시줄에 있으며 SoundBunny 사용자가 의존하는 작업을 수행하는 앱별 볼륨 믹서는 어제의 macOS 대신 오늘의 macOS를 기반으로 구축되었습니다. 기능 중복은 필수 사항을 다룹니다.</p>
<ul>
<li><strong>앱별 독립 볼륨</strong> — 실행 중인 애플리케이션당 하나의 슬라이더, 정확히 SoundBunny 정신 모델입니다.</li>
<li><strong>앱별 음소거</strong> — 다른 모든 것을 건드리지 않고 시끄러운 앱 하나를 침묵시킵니다.</li>
<li><strong>앱별 볼륨 부스트</strong> — 조용한 앱을 푸시하세요 <em>위에</em> 영상이나 통화가 너무 낮게 녹음된 경우 100%입니다. SoundBunny는 최신 macOS에서 과거 시스템 최대치를 안정적으로 증폭할 수 없습니다. 부스트(boost)는 여기서 진짜 업그레이드입니다.</li>
<li><strong>볼륨 프로필</strong> — 앱별 레벨 세트("작업" 믹스, "게임" 믹스)를 저장하고 한 번에 하나씩 슬라이더를 이동하는 대신 레벨 간에 전환합니다.</li>
<li><strong>자동 더킹</strong> — 다른 오디오 소스(예: 통화 중 마이크)가 활성화되면 자동으로 백그라운드 앱 볼륨을 낮춥니다.</li>
<li><strong>빠른 출력 전환</strong> — 동일한 메뉴에서 스피커, 헤드폰 및 기타 출력 사이를 이동합니다.</li>
</ul>

<h2>마이그레이션의 실제 모습</h2>
<p>가져오기 단계는 없습니다. 앱별 볼륨 수준은 파일로 가져갈 수 없지만 전환은 빠릅니다.</p>
<ul>
<li><strong>SoundBunny를 올바르게 제거하십시오.</strong> 종료한 다음 앱을 삭제하세요. 도우미 또는 로그인 항목을 설치한 경우 두 유틸리티가 동일한 오디오 스트림을 놓고 싸우지 않도록 해당 항목도 제거하십시오.</li>
<li><strong>Mac App Store에서 SoundDial를 설치합니다.</strong> 샌드박스 처리되어 스토어를 통해 배포되므로 마운트할 DMG도 없고 "확인되지 않은 개발자" 경고도 없습니다. 한 번의 구매로 Apple ID에 연결됩니다.</li>
<li><strong>처음 실행 시 오디오 액세스 권한을 부여합니다.</strong> macOS는 SoundDial가 앱 오디오를 볼 수 있도록 권한을 요청합니다. 이는 Apple이 제공하는 현대적이고 승인된 경로입니다. 커널 확장도 없고, 재부팅도 없고, 시스템 보안도 저하되지 않습니다. 이를 승인하면 실행 중인 앱이 슬라이더로 나타납니다.</li>
<li><strong>믹스를 재구성하세요.</strong> 공통 앱을 설정한 다음 해당 배열을 프로필로 저장하면 다시 실행할 필요가 없습니다.</li>
</ul>

<h2>SoundBunny와의 실질적인 차이점</h2>
<p>가장 중요한 차이점은 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 현재 소프트웨어입니다. 기본적으로 Apple Silicon에서 실행되고 Apple에서 지원하는 오디오 API를 사용하며 Mac App Store 앱입니다. 즉, 업데이트가 스토어를 통해 도착하고 OS 업그레이드 시 중단되지 않고 살아남도록 구축되었습니다. 샌드박스가 적용된다는 것은 차선 밖으로 도달할 수 없다는 의미이기도 합니다. 이는 앱과 스피커 사이에 있는 무언가에 대해 안심할 수 있습니다.</p>
<p>몇 가지 정직한 경고가 있으므로 기대가 옳습니다. SoundDial는 Apple의 오디오 프레임워크 내에서 작동하므로 일반 시스템 출력을 통해 라우팅하는 표준 앱에 대한 제어가 가장 좋습니다. 일부 소프트웨어는 자체 경로나 전용 장치를 통해 오디오를 재생하며 SoundBunny를 포함한 메뉴 바 믹서는 이를 완전히 제어할 수 없습니다. 그리고 앱당 볼륨은 본질적으로 macOS 위에 있는 소프트웨어 계층입니다. 하드웨어 믹서가 아닙니다. 이러한 실제 한계 내에서 SoundBunny가 수행했던 작업을 수행합니다.</p>

<blockquote>앱별 볼륨 믹서를 기대하면서 Windows에서 Mac로 전환했다면 이 도구가 그 격차를 메워주는 도구이며 이제 실제로 유지 관리되고 있는 도구입니다.</blockquote>

<p>SoundBunny는 좋은 성과를 거두었지만 이는 유산입니다. 최신 Mac에서 앱별 볼륨, 음소거 및 부스트가 필요한 경우, <a href="https://apps.apple.com/app/id6772792641">Mac App Store에서 SoundDial를 얻으세요</a> — 1회 €14.99, 구독 없음, 드라이버 없음.</p>`,
  },
  "boom-2-alternative-per-app-volume-mac": {
    slug: "boom-2-alternative-per-app-volume-mac",
    title: "Mac를 위한 Boom 2 대안: Boom 3D 상향 판매가 없는 앱별 볼륨",
    description: "Boom 2는 레거시이며 계속해서 Boom 3D로 이동합니다. 앱별 볼륨과 최신 macOS의 간단한 향상을 원하는 경우 여기에 초점을 맞춘 대안과 작동 방식이 있습니다.",
    date: "2026-07-23",
    readTime: "5분 읽기",
    content: `<p>시스템 전반의 부스트를 위해 Boom 2를 좋아하지만 단순함을 원하는 경우 <strong>앱별</strong> 현재 Mac 볼륨에 대한 솔직한 대답은 Boom 2가 레거시이며 더 이상 올바른 도구가 아니라는 것입니다. 집중된 대안은 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, 각 앱에 고유한 볼륨 슬라이더, 음소거 및 부스트를 제공하는 메뉴 바 믹서입니다. 가격은 €14.99이며 더 큰 번들을 푸시할 필요가 없습니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac의 Boom 2 대안: Boom 3D 상향 판매가 없는 앱별 볼륨" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Boom 2가 더 이상 적합하지 않은 이유</h2>
<p>Boom 2는 특별한 이유로 사랑받는 앱이었습니다. Mac의 전체 볼륨을 시스템 최대치 이상으로 높이고 이퀄라이저를 추가했습니다. 앱별로가 아니라 시스템 전체에서 그렇게 했습니다. 2015년에는 괜찮았습니다. 2026년에는 두 가지 문제가 있습니다.</p>
<p>첫째, 유산입니다. Global Delight는 분명히 Boom 3D로 에너지를 옮겼으며, Boom 2 제품 페이지를 열면 거의 즉시 더 새롭고 값비싼 앱을 접하게 될 것입니다. Boom 2는 아직 존재하지만, 활발한 사랑을 받는 제품이 아니라 판매업체가 Boom 3D를 판매하기 위해 사용하는 디딤돌일 뿐입니다.</p>
<p>둘째, 더 중요한 점은 Boom 2가 앱별 볼륨 믹서가 아니라는 것입니다. 하나의 마스터 출력을 높이고 형성합니다. 실제로 문제가 Slack 핑 소리가 음악보다 크거나 브라우저 탭이 통화를 방해하는 것이라면 Boom 2는 이를 해결하지 못합니다. 그것은 모든 것을 함께 더 크게 만듭니다. 그건 다른 직업이에요.</p>

<h2>macOS에서 "앱별 볼륨"이 실제로 의미하는 것</h2>
<p>대부분의 대체 라운드 업이 건너뛰는 정직한 맥락은 다음과 같습니다. macOS에는 내장된 앱별 볼륨 믹서가 전혀 없습니다. Windows는 수년 동안 하나를 사용해 왔습니다. 스피커를 마우스 오른쪽 버튼으로 클릭하고 볼륨 믹서를 열고 Chrome를 40%로 설정하고 Spotify를 80%로 설정합니다. Apple은 그런 제품을 출시한 적이 없습니다. macOS 볼륨 키는 하나의 마스터 레벨만 이동합니다.</p>
<p>따라서 "Boom 2 대안"을 찾을 때 실제로 찾는 것은 더 큰 Mac가 아니라 사용자가 당연하게 여기는 앱별 제어 Windows입니다. 이는 Boom 2나 단일 앱이 구축하는 것을 잊어버린 것이 아니라 운영 체제의 진정한 격차입니다.</p>

<h2>SoundDial가 맞는 곳</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 그 격차를 위해 특별히 제작되었습니다. 메뉴 표시줄에 있으며 현재 오디오를 재생하는 앱을 나열하며 각 앱에는 자체 슬라이더가 있습니다. 하나의 마스터 컨트롤을 밀고 최선을 다하는 대신 앱별로 레벨을 설정합니다.</p>
<p>기능:</p>
<ul>
<li><strong>앱별 독립 볼륨</strong> — 브라우저를 조용하게 하고, 원하는 곳에 음악을 보관하세요. 전체적으로 타협하지 않습니다.</li>
<li><strong>앱별 음소거</strong> — 다른 것을 건드리지 않고 시끄러운 앱 하나를 침묵시킵니다.</li>
<li><strong>앱별 부스트</strong> — 비디오나 통화가 너무 조용하게 녹음되면 개별 앱을 정상 한도 이상으로 밀어냅니다. 이것은 Boom 2 팬들이 일반적으로 놓치는 부분입니다. 단, 여기서는 전체 시스템이 아닌 하나의 앱을 대상으로 합니다.</li>
<li><strong>볼륨 프로필</strong> — "집중", "회의" 또는 "게임"과 같은 레이아웃을 저장하고 한 번의 클릭으로 전환합니다.</li>
<li><strong>자동 더킹</strong> — 말하기 시작하면 자동으로 다른 앱의 수준을 낮추어 통화 및 녹음에 유용합니다.</li>
<li><strong>빠른 출력 전환</strong> — 동일한 메뉴에서 스피커, 헤드폰 및 기타 출력 사이를 이동합니다.</li>
</ul>

<h2>설정 방법</h2>
<p>워크플로는 짧습니다.</p>
<ul>
<li>설치 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> Mac App Store에서 — DMG 없음, 드라이버 없음, 재부팅 없음.</li>
<li>현재 사운드를 생성하는 모든 앱을 보려면 메뉴 표시줄 아이콘을 클릭하세요.</li>
<li>각 앱의 슬라이더를 원하는 수준으로 드래그하세요. 필요에 따라 개별적으로 음소거하거나 증폭합니다.</li>
<li>나중에 다시 사용하려면 배열을 프로필로 저장하세요.</li>
</ul>
<p>App Store를 통해 배송되기 때문에 샌드박스 처리되어 깔끔하게 설치됩니다. 일부 오래된 오디오 도구는 커널 확장이나 가상 오디오 드라이버에 의존했기 때문에 이는 주목할 가치가 있습니다. 최신 macOS는 점점 더 거부하고 있습니다. SoundDial는 드라이버를 설치하거나 보안 설정을 낮추도록 요청하지 않습니다.</p>

<h2>정직한 한계</h2>
<p>앱별 부스트(boost)는 실제적이지만 마술은 아닙니다. 앱의 소스 오디오가 실제로 조용하거나 잘못 녹음된 경우 이를 증폭하면 신호와 함께 노이즈 플로어가 높아지므로 매우 조용한 자료를 세게 누르면 쉿소리가 들릴 수 있습니다. 이는 특정 앱의 결함이 아니라 증폭의 물리적 한계입니다. Boom 2의 시스템 부스트도 동일한 절충안을 가졌습니다. 손상된 오디오에 대한 구조가 아니라 부스트를 실제 사례의 헤드룸으로 취급하십시오.</p>

<h2>Boom 2 대 집중형 믹서</h2>
<p>Boom 2에 대해 마음에 들었던 점은 시스템 전체의 음량과 EQ였으며 앱별 제어에 관심이 없다면 Boom 3D는 공급업체가 의도한 후속 제품입니다. 이는 공정한 경로이며 우리는 그렇지 않은 척하지 않을 것입니다. 그러나 Boom 2를 사용해 보고 실제로 원하는 것이 모든 것을 이동하지 않고 하나의 앱을 낮추거나 높이는 것임을 깨달았다면 EQ 및 부스트 번들은 잘못된 형태의 도구입니다.</p>
<blockquote>Boom 2는 Mac 전체를 더 크게 만듭니다. 앱별 믹서를 사용하면 어떤 앱의 소리가 더 큰지 결정할 수 있습니다. 그것들은 다른 문제를 해결합니다.</blockquote>
<p>가격 차이도 분명하게 언급할 가치가 있습니다. SoundDial는 한 번에 €14.99입니다. 구독도 없고, 더 큰 요금제로 전환되는 평가판도 없으며, 더 비싼 등급으로 안내하는 인앱 경로도 없습니다. 믹서를 구입하면 믹서를 소유하게 됩니다.</p>

<p>시스템 전반의 EQ가 아닌 앱별 볼륨이 실제로 원하는 것이라면, <a href="https://apps.apple.com/app/id6772792641">Mac App Store에서 SoundDial를 사용해 보세요.</a> macOS가 허용했던 방식으로 레벨을 설정하세요.</p>`,
  },
  "finetune-vs-sounddial-mac": {
    slug: "finetune-vs-sounddial-mac",
    title: "FineTune vs SoundDial: Mac의 무료 오픈 소스 vs 유료 앱별 볼륨",
    description: "FineTune는 Mac용 무료 오픈 소스 앱별 볼륨 앱입니다. SoundDial는 부스트, 프로필 및 지원을 갖춘 유료 샌드박스 App Store 앱입니다. 선택하는 데 도움이 되는 솔직한 비교를 소개합니다.",
    date: "2026-07-23",
    readTime: "6분 읽기",
    content: `<p>FineTune는 macOS를 위한 무료 오픈 소스 앱별 볼륨 믹서이므로 가격이 유일한 관심사라면 이것이 진정한 옵션입니다. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 앱별 볼륨 부스트, 저장된 프로필, 자동 더킹 및 공급업체 지원을 추가하는 유료(€14.99, 일회성) Mac App Store 앱입니다. 실제 선택은 무료 및 DIY와 샌드박스 및 지원입니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — FineTune vs SoundDial: Mac의 무료 오픈 소스 vs 유료 앱별 볼륨" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>두 앱 모두 해결되는 문제</h2>

<p>macOS에는 여전히 앱별 볼륨 믹서가 내장되어 있지 않습니다. Windows는 수년 동안 하나를 사용해 왔습니다. 스피커 아이콘을 마우스 오른쪽 버튼으로 클릭하고 볼륨 믹서를 열면 모든 앱에 자체 슬라이더가 있습니다. Mac에는 음악, 화상 통화, YouTube, 알림 소리, 게임 등 모든 항목에 대해 정확히 하나의 시스템 볼륨 슬라이더가 제공됩니다. 통화가 너무 조용하고 Spotify의 소리가 너무 큰 경우 유일한 "수정"은 Spotify를 완전히 음소거하는 것입니다.</p>

<p>FineTune와 SoundDial는 모두 그 격차를 메우기 위해 존재합니다. 실행 중인 각 앱에 자체 볼륨 제어 기능이 제공되므로 마스터 슬라이더를 건드리지 않고도 배경 음악을 20%로 낮추면서 회의를 100%로 유지할 수 있습니다.</p>

<h2>FineTune가 옳은 것</h2>

<p>FineTune는 SoundSource 정신을 바탕으로 한 최신 무료 오픈 소스 앱입니다. 그 강점에 대해 공평하게 짚어보겠습니다. 왜냐하면 그것이 실제이기 때문입니다.</p>

<ul>
  <li><strong>비용은 전혀 들지 않습니다.</strong> 라이센스도 없고, 평가판도 없고, 업그레이드 잔소리도 없습니다.</li>
  <li><strong>소스가 공개되어 있습니다.</strong> 그것이 무엇을 하는지 정확히 읽고, 개인 정보 보호를 위해 감사하고, Swift를 알고 있다면 수정하거나 분기할 수 있습니다.</li>
  <li><strong>커뮤니티 중심입니다.</strong> 버그는 누구나 수정할 수 있으며 코드는 단일 회사보다 오래 지속됩니다.</li>
  <li><strong>핵심 요구 사항을 다룹니다.</strong> 독립적인 앱별 볼륨, 이는 실제로 90%의 사람들이 찾고 있는 기능입니다.</li>
</ul>

<p>귀하의 유일한 요구 사항이 "모든 것을 종료하지 않고 하나의 앱만 종료하겠습니다"이고 공식적인 지원 데스크 없이 제공되는 소프트웨어에 익숙하다면 FineTune가 합법적인 대답입니다. 여기서 추천하는 것은 양보가 아니라 솔직한 것입니다.</p>

<h2>DIY 경로의 정직한 절충안</h2>

<p>무료 및 오픈 소스에는 가격표에 표시되지 않는 실제 비용이 발생합니다. 이는 특히 FineTune에 대한 노크가 아니라 접근 방식의 특성입니다.</p>

<ul>
  <li><strong>설치는 수동입니다.</strong> 오픈 소스 오디오 도구는 일반적으로 App Store를 통하지 않고 다운로드된 빌드 또는 Homebrew 공식으로 배포됩니다. Apple의 검토를 거치지 않고 설치하면 업데이트 상태를 유지할 수 있습니다.</li>
  <li><strong>앱별 오디오 가로채기는 본질적으로 취약합니다.</strong> 다른 앱의 오디오를 라우팅하는 것은 심층적인 시스템 작업입니다. Apple이 오디오 스택을 변경하는 macOS 업데이트를 제공하면 누군가 패치를 적용할 때까지 이러한 도구가 중단될 수 있습니다. 자원봉사 프로젝트로 인해 그 달에는 "누군가"가 바쁠 수도 있습니다.</li>
  <li><strong>지원은 최선의 노력입니다.</strong> 문제가 발생하면 GitHub 문제를 해결하고 기다리면 됩니다. 보장된 응답은 없으며 이를 고칠 의무가 있는 사람도 없습니다.</li>
  <li><strong>기능 범위는 관리자가 제공하는 모든 것입니다.</strong> 핵심 볼륨 제어가 다루어질 가능성이 높습니다. 추가 기능은 전적으로 기여자의 시간에 따라 달라집니다.</li>
</ul>

<blockquote>정직한 구성: FineTune는 유지 관리 책임을 위해 돈을 교환합니다. €14.99를 절약하고 커뮤니티가 따라잡을 때까지 OS 업데이트로 인해 문제가 발생할 위험을 감수하세요.</blockquote>

<h2>SoundDial가 다른 곳</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 반대 거래를 합니다. 한 번만 지불하면 그 대가로 공급업체가 지원하는 App Store 제품과 앱별 볼륨을 기반으로 구축된 더 넓은 기능 세트를 받게 됩니다.</p>

<ul>
  <li><strong>앱별 볼륨 및 음소거</strong> — 두 앱이 모두 제공하는 공유 기준선입니다.</li>
  <li><strong>앱별 볼륨 BOOST</strong> — 너무 조용한 앱을 100% 이상 푸시합니다. 다른 사람의 소리를 줄이는 것만으로는 충분하지 않은 약한 오디오 출력을 가진 앱에 유용합니다.</li>
  <li><strong>볼륨 프로필</strong> — 매번 슬라이더를 재설정하는 대신 전체 믹스("회의", "집중", "게임")를 저장하고 한 번의 클릭으로 전환합니다.</li>
  <li><strong>자동 더킹</strong> — 말을 하거나 선택한 앱이 활성화되면 자동으로 백그라운드 앱을 낮추므로 수동으로 조작할 필요 없이 통화가 중단됩니다.</li>
  <li><strong>빠른 출력 전환</strong> — 메뉴 표시줄에서 스피커, 헤드폰 및 기타 출력 사이를 이동합니다.</li>
</ul>

<p>마찬가지로 중요한 것은 <em>어떻게</em> 배송됩니다. SoundDial는 샌드박스 처리되어 Mac App Store를 통해 배포됩니다. 별도의 DMG, 커널 드라이버, 오디오 드라이버 설치가 없습니다. 업데이트는 다른 앱과 마찬가지로 App Store를 통해 제공되며 문제가 있을 때 이메일을 보낼 실제 개발자가 있습니다. 이것이 €14.99의 구체적인 가치입니다. 더 많은 기능을 제공할 뿐만 아니라 macOS 릴리스 전반에 걸쳐 이러한 기능을 계속 작동시킬 책임이 있는 사람입니다.</p>

<h2>두 가지 모두에 적용되는 정직한 경고</h2>

<p>Apple은 앱별 오디오에 대한 명확한 공개 API를 공개하지 않기 때문에 타사 앱은 macOS의 오디오 시스템을 Windows' 볼륨 믹서로 만들 수 없습니다. 이 범주의 모든 도구(무료 또는 유료, 공개 또는 비공개)는 시스템 수준 오디오 기술을 사용하여 이러한 제한을 해결합니다. 이는 FineTune 및 SoundDial가 모두 주요 macOS 오디오 변경의 영향을 받을 수 있음을 의미합니다. 차이점은 나중에 수정을 담당하는 사람이 누구인지입니다. 즉, 자원 봉사 커뮤니티 또는 이에 의존하는 제품을 판매하는 유료 공급업체입니다.</p>

<h2>어느 것을 선택해야 할까요?</h2>

<ul>
  <li><strong>다음과 같은 경우 FineTune를 선택하세요.</strong> 비용이 전혀 들지 않고, 오픈 소스 투명성을 높이며, 기본 앱별 볼륨만 필요하고, App Store 외부에 편안하게 설치하고 문제가 발생하면 자체 지원되는 것을 원합니다.</li>
  <li><strong>다음과 같은 경우 SoundDial를 선택하세요.</strong> 원클릭 App Store 설치, 부스트, 프로필, 자동 더킹과 같은 추가 기능, 게임 내 스킨이 있는 공급업체의 업데이트 및 지원 보장을 원합니다.</li>
</ul>

<p>둘 다 유효합니다. 돈을 쓸 것인지 아니면 관심을 쓸 것인지에 따라 결정됩니다. 지원되는 샌드박스 앱을 구입하고 다시는 생각하지 않으려면 <a href="https://apps.apple.com/app/id6772792641">Mac App Store에서 SoundDial를 얻으세요</a> 일회성 €14.99 — 구독 없음, 드라이버 없음, DMG 없음.</p>`,
  },
  "background-music-vs-sounddial-mac": {
    slug: "background-music-vs-sounddial-mac",
    title: "Background Music 대 SoundDial: 무료 Mac 볼륨 믹서로 충분합니까?",
    description: "무료 Background Music 앱과 유료 SoundDial 간의 공정한 대결입니다. 무료 가상 드라이버 접근 방식이 작동하는 곳, 중단되는 곳, €14.99 기본 믹서가 그만한 가치가 있는 곳.",
    date: "2026-07-23",
    readTime: "6분 읽기",
    content: `<p>Background Music는 무료이며 기본에 충실합니다. 각 앱에 자체 볼륨 슬라이더를 제공하고 다른 앱이 재생될 때 음악을 자동으로 일시 중지할 수 있습니다. 그것이 필요한 전부라면 그것을 사용하십시오. 그러나 macOS 업데이트 후 중단될 수 있고 앱별 부스트, 프로필 및 출력 전환이 부족한 가상 오디오 드라이버에 의존합니다. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 드라이버가 없고 샌드박스가 있으며 지원되는 대안을 위해 돈을 교환합니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Background Music vs SoundDial: 무료 Mac 볼륨 믹서로 충분합니까?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>첫째, macOS에 대한 솔직한 진실</h2>
<p>macOS에는 앱별 볼륨 믹서가 내장되어 있지 않습니다. Windows는 볼륨 믹서에서 10년 넘게 하나를 사용했지만 Mac에서는 시스템 슬라이더가 모든 것을 한 번에 이동합니다. 타사 앱이 개별 애플리케이션 스트림을 깔끔하게 가로채고 재조정할 수 있도록 하는 Apple 지원 API는 없습니다. 이 단일 격차는 Background Music 및 SoundDial와 같은 도구가 존재하는 이유이며 아래 대부분의 절충안의 근본 원인입니다.</p>

<h2>Background Music가 잘하는 일</h2>
<p>Background Music는 수년간 사용되어 온 오픈 소스 메뉴 바 앱으로, 그럴 만한 이유가 있어 충성스러운 추종자를 보유하고 있습니다. 그것은 당신에게 다음을 제공합니다:</p>
<ul>
<li><strong>앱별 독립 볼륨</strong> — 핵심 기능. 통화 소리를 크게 유지하면서 Spotify를 낮추세요.</li>
<li><strong>자동 일시중지</strong> — 다른 곳에서 오디오가 시작되면 음악 플레이어를 일시 중지할 수 있으며 이는 회의에 좋은 기능입니다.</li>
<li><strong>당신을 따라다니는 장치 볼륨</strong> 간단하고 말도 안되는 인터페이스.</li>
<li><strong>비용 제로</strong> — 무료이며 코드는 공개되어 있습니다.</li>
</ul>
<p>많은 사람들에게는 그것으로 충분합니다. 전체 희망 목록이 "나머지 앱을 건드리지 않고 하나의 시끄러운 앱을 더 조용하게 만드는 것"이라면 Background Music가 이를 해결하므로 필요하지 않은 것에 대해 비용을 지불해서는 안 됩니다. 여기에서는 공정함이 중요합니다. 이는 합법적으로 유용한 도구입니다.</p>

<h2>자유로운 접근 방식이 솔기를 보여주는 곳</h2>
<p>캐치는 <em>어떻게</em> Background Music는 앱당 볼륨을 달성합니다. macOS는 공식적인 경로를 제공하지 않기 때문에 시스템 오디오를 자체적으로 라우팅하는 가상 오디오 드라이버(이전 Soundflower 접근 방식의 수정된 버전)를 설치합니다. 해당 아키텍처는 영리하지만 실제 비용이 발생합니다.</p>
<ul>
<li><strong>macOS 업데이트 후에는 중단됩니다.</strong> 가상 오디오 드라이버는 시스템 깊숙한 곳에 위치하며 주요 macOS 릴리스는 역사적으로 이를 비활성화하거나 불안정하게 만들었습니다. 사용자들은 침묵, 왜곡 또는 업그레이드 후 재설치 필요성을 일상적으로 보고합니다. 고장나면 혼자 있는 경우가 많습니다.</li>
<li><strong>설치가 더 무겁습니다.</strong> 앱뿐만 아니라 Mac에 커널 인접 오디오 장치를 추가하고 있습니다. 깨끗하게 제거하는 것은 까다로울 수 있습니다.</li>
<li><strong>기본 출력 장치가 됩니다.</strong> 모든 것이 가상 장치를 통해 라우팅되기 때문에 일부 프로 오디오, 회의 또는 게임 앱이 이상하게 작동할 수 있으며 실제 출력을 전환하는 것은 추가 단계입니다.</li>
<li><strong>개발은 커뮤니티 중심으로 진행됩니다.</strong> 지원 데스크가 없습니다. 자원 봉사자가 시간이 있을 때 수정 사항이 도착하는데, 갑자기 조용해질 수 있는 오디오 도구의 경우 이는 의미 있는 위험입니다.</li>
</ul>
<p>이 중 어느 것도 Background Music를 나쁘게 만들지 않습니다. 무료 도구의 장단점을 고려하여 무료 도구로 만듭니다.</p>

<h2>SoundDial로 실제로 지불하는 비용</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 그것이 무엇인지를 형성하는 Mac App Store 앱입니다. App Store 앱은 샌드박스 처리되어 Background Music가 사용하는 일종의 저수준 가상 드라이버를 제공할 수 없기 때문에 SoundDial는 별도의 오디오 장치나 DMG를 설치하지 않고도 실행되도록 제작되었습니다. 이는 다음을 의미합니다.</p>
<ul>
<li><strong>가상 드라이버 문제가 없습니다.</strong> 오디오 체인을 가로채는 추가 출력 장치가 없으며 시스템이 변경될 때 다시 설치할 것도 없습니다.</li>
<li><strong>macOS 업데이트를 훨씬 더 우아하게 유지합니다.</strong> App Store 배포 및 샌드박싱은 지원되는 경로에 대해 구축되고 스토어를 통해 업데이트된다는 것을 의미하므로 OS 업그레이드로 인해 사용자가 침묵할 가능성이 훨씬 적습니다.</li>
<li><strong>앱별 볼륨 부스트.</strong> 이것이 실제 기능 차이입니다. SoundDial는 앱을 푸시할 수 있습니다. <em>위에</em> 조용한 소스의 경우 100% — 팟캐스트의 녹음 속도가 너무 낮고 영상 통화 소리가 약합니다. Background Music는 감쇠만 됩니다.</li>
<li><strong>볼륨 프로필.</strong> 앱별 수준 세트("회의", "음악", "게임")를 저장하고 매번 슬라이더를 드래그하는 대신 한 번의 클릭으로 전환합니다.</li>
<li><strong>자동 더킹.</strong> 선택한 소스가 재생되면 다른 앱의 볼륨을 자동으로 낮춥니다. 자동 일시 중지 아이디어를 더욱 구성 가능하게 적용한 것입니다.</li>
<li><strong>빠른 출력 전환</strong> 메뉴 표시줄에 구워지고 앱별 음소거도 포함됩니다.</li>
<li><strong>진정한 지원.</strong> 문제가 생겼을 때 책임을 지는 사람이 있는 유료상품입니다.</li>
</ul>

<h2>정직한 결정</h2>
<blockquote>무료를 원하고 기본 앱별 볼륨만 필요하고 macOS 업데이트 후 문제 해결이 편안하다면 Background Music가 확실한 선택입니다. 부스트, 프로필, 더킹, 출력 전환, 가상 드라이버 취약성 없음, 고장 시 이메일 전송을 원하는 경우 SoundDial의 가치는 €14.99입니다.</blockquote>
<p>몇 가지 콘크리트 타이브레이커. 너무 조용한 소스를 정기적으로 처리하는 경우 부스트만으로도 가격이 정당화됩니다. Background Music는 단순히 소스보다 오디오를 더 크게 만들 수 없습니다. 매년 "내 오디오가 업데이트 후에도 살아남을 것인가"라는 도박을 두려워한다면 샌드박스 스토어 앱이 그러한 불안을 제거합니다. 설정하고 잊어버리는 장면을 좋아한다면 프로필을 사용하면 실제 마찰을 줄일 수 있습니다. 그리고 구독이 아닌 일회성 €14.99이므로 단일 구매와 무료 드라이버를 유지하는 데 소요된 시간을 비교합니다.</p>
<p>반대로, 오픈 소스를 즐기고 코드를 읽고 싶어하며 대부분 하나의 앱을 거부하는 땜장이라면 비용을 절약하십시오. 두 도구 모두 동일한 핵심 문제를 해결합니다. 견고성, 기능 깊이 및 macOS가 그 아래에서 변경될 때 사용자를 사로잡는 사람이 다릅니다.</p>

<p>가상 드라이버 도박 없이 앱별 볼륨을 원하시나요? <a href="https://apps.apple.com/app/id6772792641">Mac App Store에서 SoundDial 가져오기</a> — 일회성 €14.99, 샌드박스, 드라이버 없음, 부스트, 프로필 및 자동 더킹이 내장되어 있습니다.</p>`,
  },
  "is-soundsource-worth-it-mac": {
    slug: "is-soundsource-worth-it-mac",
    title: "SoundSource는 $39의 가치가 있나요? 더 저렴한 일회성 Mac 대안",
    description: "SoundSource는 ~$39의 강력한 Mac 오디오 도구이지만 앱별 볼륨과 부스트만 필요한 경우 과잉입니다. 다음은 정직한 비교와 €14.99의 일회성 대안입니다.",
    date: "2026-07-23",
    readTime: "5분 읽기",
    content: `<p>앱별 볼륨, 앱당 10밴드 EQ, 장치 간 오디오 라우팅, 시스템 전체 효과 등 전체 툴킷이 필요한 경우 SoundSource는 그만한 가치가 있습니다. 그러나 주로 앱별 볼륨, 앱별 음소거 및 볼륨 부스트를 원하는 경우 약 39달러는 과잉입니다. 그 좁은 직업의 경우, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 한 번 비용은 €14.99입니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — SoundSource는 $39의 가치가 있나요? 더 저렴한 일회성 Mac 대안" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>SoundSource가 실제로 하는 일</h2>
<p>Rogue Amoeba의 SoundSource는 진정으로 뛰어난 소프트웨어이므로 공정하게 평가하는 것이 중요합니다. 단순한 볼륨 믹서가 아닙니다. 그것은 당신에게 다음을 제공합니다:</p>
<ul>
<li><strong>앱별 볼륨 제어</strong> 메뉴 표시줄에서 대부분의 사람들이 찾는 기능입니다.</li>
<li><strong>완전한 10밴드 이퀄라이저</strong> 앱별로 또는 시스템 전체에 적용할 수 있으며 기타 오디오 효과(Audio Unit 플러그인을 통해)도 적용할 수 있습니다.</li>
<li><strong>출력/입력 라우팅</strong>, 단일 앱을 시스템의 나머지 부분과 다른 출력 장치로 보내는 것을 포함합니다.</li>
<li><strong>빠른 장치 전환</strong> 및 헤드폰별 EQ 사전 설정.</li>
</ul>
<p>헤드폰의 EQ를 조정하거나 하나의 앱 사운드를 별도의 스피커로 리디렉션하거나 오디오 장치 효과를 스택하려는 팟캐스터, 스트리머 또는 오디오 전문가라면 SoundSource가 그만한 가치를 얻습니다. 여기에는 아무 것도 없습니다.</p>

<h2>가격 질문</h2>
<p>SoundSource는 약 39달러 정도의 유료 일회성 라이선스입니다(가격은 버전과 프로모션에 따라 다름). Netflix 의미에서 반복 구독은 아니지만 고전적인 유료 앱 패턴을 따릅니다. 주요 버전을 구매하면 향후 주요 업그레이드는 일반적으로 영원히 무료가 아닌 할인된 유료 업그레이드입니다. 몇 년에 걸쳐 이는 단일 구매 이상입니다. 많은 Mac 사용자에게 솔직한 질문은 다음과 같습니다. 내가 실제로 만지는 것은 앱별 볼륨 슬라이더뿐인데 라우팅 및 EQ 제품군에 39달러를 지불하고 있습니까?</p>

<blockquote>SoundSource를 열고 볼륨 슬라이더와 음소거 버튼만 사용한 적이 있다면 서랍 하나를 사용하기 위해 제품군에 대한 비용을 지불하는 것입니다.</blockquote>

<h2>왜 문제가 존재하는가?</h2>
<p>정직한 근본 원인은 다음과 같습니다. macOS에는 앱별 볼륨 믹서가 내장되어 있지 않습니다. Windows는 수년 동안 하나를 가지고 있었지만 Mac에서는 시스템 볼륨이 전부 아니면 전무입니다. 화상 통화가 계속되는 동안 Spotify를 조용하게 유지하거나 다른 앱을 건드리지 않고 하나의 앱을 음소거하는 방법은 Apple에서 제공하는 방법이 없습니다. 이러한 격차가 바로 SoundSource 및 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 존재합니다. 이는 실제 OS 제한 사항이며 어느 앱에서나 해결하기 위해 문제를 고안한 것이 아닙니다.</p>

<h2>더 가볍고 저렴한 옵션이 적합한 경우</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 프로 오디오 케이스가 아닌 일반적인 케이스를 위해 제작된 메뉴 표시줄 앱별 볼륨 믹서입니다. 그것은 다음을 다룬다:</p>
<ul>
<li><strong>앱별 독립 볼륨</strong> — 회의가 전체 수준으로 진행되는 동안 음악을 중단하십시오.</li>
<li><strong>앱별 음소거</strong> — Mac를 음소거하지 않고 하나의 앱을 침묵시킵니다.</li>
<li><strong>앱별 볼륨 부스트</strong> — 소스가 너무 부드러우면 조용한 앱을 일반 100% 이상으로 푸시합니다.</li>
<li><strong>볼륨 프로필</strong> — 앱별 레벨 세트(예: "포커스" 또는 "통화" 레이아웃)를 저장하고 한 번의 클릭으로 전환합니다.</li>
<li><strong>자동 더킹</strong> — 말하기를 시작하거나 선택한 앱이 재생되면 자동으로 다른 앱의 수준을 낮춥니다.</li>
<li><strong>빠른 출력 전환</strong> — 메뉴 표시줄에서 스피커, 헤드폰 및 기타 장치 사이를 이동합니다.</li>
</ul>
<p>그것은 <strong>€14.99 일회성</strong>, Mac App Store를 통해 판매되므로 샌드박스 처리되어 있으며 별도의 DMG도 없고 커널 확장도 없으며 설치할 오디오 드라이버도 없습니다. App Store 앱처럼 다운로드하면 스토어를 통해 업데이트됩니다.</p>

<h2>솔직한 비교</h2>
<p>트레이드 오프에 대해 명확하게 생각하십시오. SoundSource는 SoundDial보다 더 많은 기능을 수행하며 다음 중 하나라도 중요하다면 SoundSource를 구입하는 것이 더 좋습니다.</p>
<ul>
<li>실제 앱별 또는 시스템을 원합니다. <strong>이퀄라이저</strong> 및 오디오 유닛 효과.</li>
<li>당신은 <strong>단일 앱을 다른 출력 장치로 라우팅</strong> 다른 모든 것보다.</li>
<li>당신은 의지 <strong>헤드폰별 EQ 사전 설정</strong> 세밀한 오디오 처리.</li>
</ul>
<p>SoundDial는 EQ 또는 앱별 장치 라우팅을 수행하지 않습니다. 일부러 좁게 만들었습니다. 그 대가로 제공되는 것은 더 낮은 가격, 더 가벼운 설치 공간, 그리고 대부분의 사람들이 실제로 원했던 것에 집중된 메뉴 표시줄 인터페이스입니다. 각 앱을 선택한 수준으로 유지하고 상단에 부스트와 프로필을 제공합니다.</p>

<h2>그렇다면 SoundSource는 그만한 가치가 있습니까?</h2>
<p>예, EQ와 라우팅을 사용한다면 가능합니다. 존경받는 개발자가 제공하는 성숙하고 잘 지원되는 소프트웨어이며 가격은 실제 기능을 반영합니다. 그러나 "그만한 가치"는 당신이 무엇을 만질 것인지에 달려 있습니다. 앱을 열고 볼륨 슬라이더만 조정하거나, 앱을 음소거하거나, 하나의 조용한 앱의 소리가 더 크게 들리기를 원한다면 기본 믹서 요구에 맞는 프리미엄 제품군 비용을 지불하는 것입니다. 이 경우 일회성 €14.99 도구가 더 합리적이며 EQ 및 라우팅에 대한 요구가 커지면 나중에 언제든지 SoundSource로 이동할 수 있습니다.</p>

<p>앱별 볼륨, 증폭, 음소거, 프로필 및 자동 더킹만 원하는 경우 <a href="https://apps.apple.com/app/id6772792641">Mac App Store에서 SoundDial를 얻으세요</a> — 1회 €14.99, 구독 없음, 드라이버 없음.</p>`,
  },
  "chrome-too-loud-mac": {
    slug: "chrome-too-loud-mac",
    title: "Chrome Mac에서 소리가 너무 크나요? 모든 것을 음소거하지 않고 하나의 브라우저를 끄십시오",
    description: "Chrome가 Mac의 다른 앱보다 더 크게 폭발합니까? 내장된 수정 사항(탭별 음소거, 사이트 사운드 설정)과 Chrome에 대한 실제 앱별 볼륨을 설정하여 다른 모든 것보다 더 조용하게 유지하는 방법을 알아보세요.",
    date: "2026-07-23",
    readTime: "5분 읽기",
    content: `<p>macOS에는 앱별 볼륨이 내장되어 있지 않으므로 다른 앱을 최대 볼륨으로 유지하면서 기본적으로 Chrome를 끌 수 없습니다. 가장 빠른 무료 수정 방법은 시끄러운 탭을 음소거하거나, 각 비디오 플레이어 내부의 볼륨을 낮추거나, Chrome 설정에서 사이트별 사운드를 차단하는 것입니다. 실제적이고 지속적인 Chrome 전용 볼륨 레벨을 위해서는 앱별 믹서가 필요합니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Chrome Mac에서 너무 시끄럽나요? 모든 것을 음소거하지 않고 하나의 브라우저를 끄십시오" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Chrome가 다른 것보다 더 크게 들리는 이유</h2>
<p>Chrome는 설계상 반드시 "더 크게" 설계된 것은 아닙니다. Chrome는 YouTube, 자동 재생 광고, 영상 통화, 배경 음악 탭, 각각 고유한 음량을 제공하는 웹 앱 등 여러 독립적인 소스에서 오디오를 라우팅합니다. 일부 사이트는 뜨겁게 마스터되고 광고 소리는 악명 높으며 Chrome는 모든 사이트를 시스템의 전체 출력 레벨로 재생합니다. 그 동안 음악 앱이나 통화가 더 조용해질 수 있으므로 Chrome가 믹스를 지배합니다.</p>
<p>Windows에서는 볼륨 믹서를 열고 Chrome 슬라이더를 아래로 끌면 됩니다. macOS에는 해당 기능이 포함되어 있지 않습니다. 시스템 볼륨 키는 모든 것을 한 번에 제어하므로 Chrome를 낮추면 음악, 알림 및 통화도 줄어듭니다. 이것이 핵심 제한 사항입니다. 이는 OS 격차이지 잘못하고 있는 것이 아닙니다.</p>

<h2>비용이 전혀 들지 않는 기본 수정 사항</h2>
<p>무엇이든 설치하기 전에 다음을 시도해 보세요. 단일 Chrome 볼륨 다이얼을 제공하지는 않지만 대부분의 "큰 탭 하나" 문제를 해결합니다.</p>
<ul>
<li><strong>시끄러운 탭을 음소거합니다.</strong> 탭을 마우스 오른쪽 버튼으로 클릭하고 '사이트 음소거'를 선택하거나 오디오 재생 탭에 나타나는 작은 스피커 아이콘을 클릭하세요. 이렇게 하면 Chrome의 나머지 부분을 건드리지 않고 해당 탭이 완전히 침묵됩니다.</li>
<li><strong>플레이어 내부의 볼륨을 낮추십시오.</strong> 가장 신뢰할 수 있는 방법은 YouTube, Netflix 또는 재생 중인 모든 항목에서 볼륨 슬라이더를 아래로 드래그하는 것입니다. 웹 플레이어는 사이트별로 자신의 레벨을 기억하므로 다음번에는 더 조용한 YouTube가 조용하게 유지됩니다.</li>
<li><strong>사이트별로 소리를 차단합니다.</strong> 이동 <em>크롬://설정/콘텐츠/사운드</em>. 사이트를 "허용"과 "음소거" 간에 전환하고 특정 도메인을 음소거 목록에 추가할 수 있습니다. 자동 재생되는 사이트를 영구적으로 침묵시키는 데 적합합니다.</li>
<li><strong>자동재생 광고를 종료하세요.</strong> 광고 오디오가 진짜 원인인 경우가 많습니다. 시청할 준비가 될 때까지 콘텐츠 차단기나 탭을 음소거하면 대부분의 놀라운 소음이 제거됩니다.</li>
</ul>
<blockquote>이것들은 정말 유용하고 무료입니다. 하지만 그들이 할 수 없는 일이 무엇인지 알아보세요. 개별 탭을 음소거하거나 관리하는 것입니다. 그들 중 누구도 "내 음악은 100%로 유지되는 동안 Chrome는 모두 40%로 유지하세요"라고 말할 수는 없습니다.</blockquote>

<h2>정직한 제한: macOS에는 앱별 볼륨이 없습니다.</h2>
<p>실제 목표가 "Chrome는 항상 다른 앱보다 조용해야 합니다."라면 내장 도구는 부족합니다. 탭별 음소거는 전부 아니면 전무입니다. 플레이어 슬라이더는 사이트가 이를 기억하지 못할 때 재설정되며 지속적으로 다시 수행되어야 합니다. 그리고 시스템 볼륨은 모든 것을 함께 움직입니다.</p>
<p>이는 실제 macOS 제한 사항이며 구성할 수 있는 버그가 아닙니다. Apple은 Windows 스타일 볼륨 믹서를 출시한 적이 없습니다. 특히 Chrome에 대한 지속적이고 독립적인 볼륨 레벨을 얻는 유일한 방법은 앱과 출력 장치 사이에 위치하여 앱별 게인을 적용하는 타사 앱입니다.</p>

<h2>Chrome에 대한 실제 앱별 볼륨 설정</h2>
<p>다음과 같은 메뉴바 믹서 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> macOS에는 누락된 앱별 볼륨 제어 기능이 제공됩니다. 현재 오디오를 재생하는 모든 앱을 나열하고 각 앱에 자체 슬라이더를 제공하므로 Chrome를 편안한 수준으로 낮추고 Spotify, 통화 및 시스템 사운드를 그대로 둘 수 있습니다.</p>
<p>시끄러운 Chrome를 길들이는 방법은 다음과 같습니다.</p>
<ul>
<li>메뉴 표시줄 믹서를 열고 활성 앱 목록에서 Chrome를 찾으세요.</li>
<li>Chrome의 슬라이더를 40~50%까지 아래로 드래그합니다. 다른 앱은 그대로 유지됩니다.</li>
<li>특정 앱이 너무 <em>조용한</em> 대신 — 속삭이는 통화 앱 — 사용 <a href="https://apps.apple.com/app/id6772792641">앱별 볼륨 부스트</a> Chrome를 낮게 유지하면서 100% 이상으로 끌어올립니다.</li>
<li>탭을 닫지 않고 침묵이 필요할 때 앱별 음소거를 사용하여 Chrome를 즉시 음소거하세요.</li>
</ul>
<p>레벨이 앱에 묶여 있기 때문에 고정됩니다. Chrome는 탭, 사이트 및 재시작 전반에 걸쳐 선택한 볼륨을 유지합니다. 새 비디오를 열 때마다 플레이어 슬라이더를 다시 끌 필요가 없습니다.</p>

<h2>더 나아가: 프로파일, 더킹 및 출력 전환</h2>
<p>앱별로 제어할 수 있게 되면 몇 가지 추가 기능을 통해 계속 사용할 가치가 있습니다. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 볼륨을 절약할 수 있습니다 <strong>프로필</strong> — 예를 들어 Chrome가 조용하고 음악이 큰 "집중" 프로필과 Chrome가 지배적인 "감시" 프로필 — 한 번의 클릭으로 전환할 수 있습니다. 자동 더킹은 선택한 소스가 시작될 때 자동으로 다른 앱을 딥시킬 수 있습니다(통화가 시끄러운 브라우저 탭 아래에 묻히지 않도록 편리함). 그리고 빠른 출력 전환을 통해 시스템 설정에 들어가지 않고도 스피커, 헤드폰 및 기타 장치 간에 이동할 수 있습니다.</p>
<p>Mac App Store에서 €14.99의 일회성 구매로 구독, 설치할 드라이버, DMG 또는 커널 확장이 필요하지 않습니다. App Store를 통해 샌드박스 처리되고 배포되기 때문에 의존하는 오래된 믹서 도구를 설치하기 위한 개략적인 오디오 드라이버가 필요하지 않습니다.</p>

<h2>어떤 수정 프로그램을 사용해야 합니까?</h2>
<p>가끔 불쾌한 탭이 하나 있다면 Chrome에 내장된 음소거 및 사이트 사운드 설정을 사용하세요. 무료이며 작동합니다. 다른 모든 것은 그대로 유지하면서 Chrome만 간단히 꺼질 수 있기를 계속해서 바란다면, 이것이 바로 macOS가 열어둔 정확한 간격이며, 앱별 믹서가 완벽한 해결책입니다.</p>

<p>음악이나 통화를 음소거하지 않고 Chrome를 영구적으로 더 조용하게 만들고 싶으십니까? <a href="https://apps.apple.com/app/id6772792641">Mac App Store에서 SoundDial 가져오기</a> 모든 앱에 자체 볼륨 슬라이더를 제공하세요.</p>`,
  },
  "whatsapp-telegram-notifications-too-loud-mac": {
    slug: "whatsapp-telegram-notifications-too-loud-mac",
    title: "WhatsApp 및 Telegram 알림이 Mac에서 너무 크게 들립니까? 거절하세요",
    description: "Mac에서 너무 큰 WhatsApp 및 Telegram 데스크톱 알림 소리를 수정하세요. 각 앱의 내장 설정으로 시작한 다음 macOS가 앱별 제어 기능을 제공하지 않으면 전체 앱을 낮추거나 음소거합니다.",
    date: "2026-07-23",
    readTime: "5분 읽기",
    content: `<p>각 앱 내에서 시작하세요. WhatsApp 및 Telegram 모두 자체 설정에서 알림 소리를 음소거하거나 변경할 수 있습니다. 이는 가장 깔끔한 수정 사항입니다. 그러나 macOS에는 앱별 알림 볼륨 슬라이더가 없으므로 앱 자체 소리가 여전히 너무 큰 경우 앱별 볼륨 도구를 사용하여 전체 앱의 오디오를 낮추거나 음소거하는 것이 유일한 방법입니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — WhatsApp 및 Telegram Mac에서 알림 소리가 너무 큽니까? 거절하세요" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>먼저 앱 자체 알림 설정을 사용하세요.</h2>

<p>WhatsApp와 Telegram는 모두 자체 사운드 컨트롤을 제공하며 항상 여기서 시작해야 합니다. 이는 가장 정확한 수정이며 Mac의 다른 어떤 것도 건드리지 않습니다.</p>

<p><strong>WhatsApp 데스크탑:</strong> WhatsApp를 열고 클릭하세요. <em>설정</em> (기어 아이콘), 그런 다음 <em>알림</em>. 끌 수 있습니다 <em>소리</em> 배너를 유지하면서 완전히 삭제하거나 알림 미리보기를 비활성화하세요. WhatsApp는 볼륨 슬라이더를 제공하지 않으므로 기본적으로 사운드 자체를 켜거나 끕니다.</p>

<p><strong>Telegram 데스크탑:</strong> 열기 <em>설정 → 알림 및 소리</em>. 여기서는 Telegram가 더 유연합니다. 알림 소리를 전체적으로 끄거나, 개별 채팅을 음소거하거나, 사용자 정의(더 조용한) 톤을 설정할 수 있습니다. 하나의 시끄러운 그룹을 열고 선택하여 침묵시킬 수도 있습니다. <em>음소거</em>. 대부분의 사람들은 가장 시끄러운 채팅을 음소거하면 모든 곳에서 침묵하지 않고도 문제를 해결할 수 있습니다.</p>

<p>소리가 양호하지만 너무 빈번하다면 앱 전체에서 소리를 죽이는 대신 가장 자주 발생하는 특정 채팅이나 채널을 음소거하세요. 그러면 중요한 경고가 계속해서 들립니다.</p>

<h2>macOS 시스템 설정에서 알림 소리 끄기</h2>

<p>macOS에는 경우에 따라 앱을 재정의하는 두 번째 제어 계층이 있습니다. 이동 <em>시스템 설정 → 알림</em>, 목록에서 WhatsApp 또는 Telegram를 선택하고 끄십시오. <em>알림 소리 재생</em>. 이렇게 하면 배너는 계속 표시되지만 해당 앱의 알림 소리는 무음이 됩니다.</p>

<p>앱이 알림을 받을 때만 조용하게 하고 다른 오디오(통화, 비디오)에는 신경 쓰지 않으려는 경우 이는 정말 좋은 수정입니다. 앱 자체 설정과 결합하면 대부분의 "핑이 거슬린다"는 불만 사항이 해결됩니다.</p>

<h2>실제 제한 사항: macOS에는 앱별 볼륨이 없습니다.</h2>

<p>여기에 정직한 부분이 있습니다. 위의 단계는 켜기/끄기 스위치입니다. 그들이 할 수 없는 것은 WhatsApp 또는 Telegram를 돌리는 것입니다. <em>아래로</em> 예를 들어 40%로 설정하고 다른 모든 볼륨은 최대 볼륨으로 유지합니다. Windows는 수년 동안 앱별 볼륨 믹서를 사용해 왔습니다. macOS에는 단순히 하나도 포함되지 않으며 이를 추가하는 숨겨진 설정이나 Terminal 명령도 없습니다.</p>

<p>이는 문제가 구체적으로 알림 소리가 아니지만 전체 앱 소리가 너무 큰 경우에 중요합니다.</p>

<ul>
<li>WhatsApp 또는 Telegram <strong>음성 및 영상 통화</strong> 음악이나 회의에 맞춰 최고 볼륨으로 폭발적인 소리를 내세요.</li>
<li>유지하고 싶지만 완전히 꺼지지 않은 낮은 수준의 알림 소리</li>
<li>당신이 듣고 있는 다른 음악보다 훨씬 더 강력한 벨소리</li>
<li>다른 일에 집중하는 동안 앱이 들리지만 조용히 백그라운드에서 실행되기를 원함</li>
</ul>

<p>내장된 도구로는 레벨이 아닌 음소거만 제공하므로 이 중 어느 것도 해결할 수 없습니다. 그 격차는 실제 macOS 제한 사항이지 누락된 부분이 아닙니다.</p>

<h2>SoundDial로 앱별 볼륨 설정</h2>

<p>실제로 단일 앱을 끄는 대신 끄려면 앱별 볼륨 믹서가 필요합니다. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> macOS에 함께 제공되지 않은 앱별 볼륨 제어 기능을 제공하는 메뉴 표시줄 앱입니다. 현재 오디오를 재생하는 모든 앱을 나열하고 각 앱에 자체 슬라이더를 제공합니다.</p>

<p>이 특정 문제의 경우:</p>

<ul>
<li>열기 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 메뉴 표시줄을 열고 목록에서 WhatsApp 또는 Telegram를 찾으세요.</li>
<li>음악, 브라우저 또는 화상 통화를 그대로 유지하면서 슬라이더를 편안한 수준(예: 30~40%)으로 아래로 끕니다.</li>
<li>앱별 사용 <strong>음소거</strong> 버튼을 누르면 통화나 회의 중에 해당 앱만 즉시 무음 처리되고 나중에 설정을 살펴보지 않고도 음소거를 해제할 수 있습니다.</li>
<li>그 반대, 너무 부드럽지만 조용한 앱이 필요한 경우, 앱별 <strong>부스트</strong> 100% 이상으로 올릴 수 있습니다.</li>
</ul>

<p>앱별로 레벨을 설정하기 때문에 SoundDial는 내장 옵션이 강제하는 전부 아니면 전무의 선택 대신 알림 차임과 통화 오디오를 들을 수 있지만 비례적으로 유지합니다. 저장할 수도 있습니다 <strong>볼륨 프로필</strong>, 따라서 채팅 앱을 낮게 유지하는 "집중" 설정은 클릭 한 번이면 됩니다.</p>

<blockquote>한 가지 정직한 주의 사항: SoundDial에서 앱의 전체 볼륨을 낮추면 알림 소리도 낮아집니다. macOS에서는 동일한 앱의 오디오이기 때문입니다. 알림을 완전히 끄고 통화를 최대 볼륨으로 하려면 앱의 자체 음소거와 차임벨 시스템 설정을 사용하고 일반 수준 설정을 위해 SoundDial를 예약하세요.</blockquote>

<p>SoundDial는 샌드박스 처리된 Mac App Store에서 일회성 €14.99 구매이며 구독도 없고 커널 드라이버도 없으며 사이드로드할 DMG도 없습니다. 하나의 앱을 끄는 대신 종료하는 등 실제로 원하는 수정 사항이 macOS 자체에서 수행할 수 있는 작업이 아닐 때 실용적인 대답입니다.</p>

<h2>어떤 수정 프로그램을 사용해야 합니까?</h2>

<p>위에서 아래로 작업하십시오. 먼저 앱의 자체 알림 설정을 시도한 다음 macOS 시스템 설정을 시도하여 차임을 종료하세요. 정말로 원하는 것이 WhatsApp 또는 Telegram를 특정 볼륨으로 낮추거나 통화 중에 해당 앱만 음소거하는 것이라면 앱별 믹서가 그 자리를 차지합니다.</p>

<p>채팅 앱의 완전한 폭발과 완전한 침묵 사이에서 선택하는 데 지치셨나요? <a href="https://apps.apple.com/app/id6772792641">Mac App Store에서 SoundDial 가져오기</a> 모든 앱에 자체 볼륨 다이얼을 제공하세요.</p>`,
  },
  "game-too-loud-vs-voice-chat-mac": {
    slug: "game-too-loud-vs-voice-chat-mac",
    title: "Mac의 게임 오디오가 Discord보다 더 큽니까? 게임과 음성 볼륨의 균형을 맞추는 방법",
    description: "게임에서 Mac의 Discord 음성 채팅이 빠져 있고 내장된 볼륨 믹서가 없습니다. macOS에 Windows 스타일의 앱별 볼륨이 부족한 이유와 음성을 높이면서 게임을 낮추는 방법은 다음과 같습니다.",
    date: "2026-07-23",
    readTime: "5분 읽기",
    content: `<p>macOS에는 앱별 볼륨 믹서가 내장되어 있지 않으므로 Discord를 크게 유지하면서 기본적으로 게임을 제한할 수 없습니다. 수정 사항은 애플리케이션별로 독립적인 볼륨을 설정하는 메뉴바 앱입니다. 게임을 40~50%로 낮추고 음성채팅을 100%로 두세요. 게임 내 슬라이더를 건드리지 않고도 둘 다 균형을 유지합니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac의 Discord보다 게임 오디오가 더 큽니까? 게임과 음성 볼륨의 균형을 맞추는 방법" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Mac에서 이런 일이 발생하는 이유(Windows에서는 발생하지 않음)</h2>

<p>Windows로 게임을 해보셨다면 볼륨 믹서를 아실 겁니다. 스피커 아이콘을 마우스 오른쪽 버튼으로 클릭하면 실행 중인 모든 앱에 자체 슬라이더가 표시됩니다. 게임을 중단하고 Discord를 올리면 완료됩니다. macOS는 해당 기능을 결코 제공하지 않았습니다. 하나의 마스터 출력 볼륨과 소수의 앱 수준 토글이 시스템 설정에 묻혀 있지만 임의 앱에 대한 애플리케이션별 수준 제어는 없습니다.</p>

<p>따라서 게임의 믹스가 뜨겁게 마스터되면 폭발, 음악, 총성이 친구의 목소리와 동일한 출력 레벨로 전달됩니다. 일부 게임은 마스터 볼륨 슬라이더를 표시하지만 많은 게임이 충분히 낮아지지 않으며 많은 런처, 브라우저 및 독립 실행형 타이틀이 유용한 제어 기능을 전혀 제공하지 않습니다. Discord 자체에서는 들어오는 사용자의 볼륨만 조정할 수 있으며 게임과 경쟁하는 것은 아닙니다.</p>

<p>솔직히 말해서 이는 OS 수준의 격차이지, 없앨 수 있는 버그는 아닙니다. Apple의 오디오 스택은 모든 것을 단일 출력 스트림으로 라우팅하며 이를 앱별로 분할하는 자사 UI가 없습니다. 이것이 바로 앱과 출력 장치 사이에 위치하는 타사 도구가 필요한 이유입니다.</p>

<h2>수동 해결 방법(및 부족한 이유)</h2>

<p>소프트웨어를 구입하기 전에 무료 옵션과 그 제한 사항을 알아 두는 것이 좋습니다.</p>

<ul>
<li><strong>게임의 인앱 볼륨을 낮추세요.</strong> 게임에 충분히 미세한 단계가 포함된 마스터 슬라이더가 있는 경우 작동합니다. 많은 경우 10% 증가에서 멈추거나 음악과 효과를 함께 묶기 때문에 시끄러운 부분만 다룰 수는 없습니다.</li>
<li><strong>Discord에서 친구를 키워보세요.</strong> 각 사용자를 마우스 오른쪽 버튼으로 클릭하고 볼륨을 높이세요. 이는 약간 도움이 되지만 실제로 문제가 되는 게임에는 영향을 주지 않습니다.</li>
<li><strong>하드웨어 볼륨 손잡이가 있는 헤드폰을 사용하십시오.</strong> 전체적인 레벨만 변경되며 게임과 음성 간의 밸런스는 변경되지 않습니다.</li>
<li><strong>가상 장치를 통해 오디오를 라우팅합니다.</strong> Loopback이나 BlackHole과 같은 도구는 스트림을 분할할 수 있지만 전문가를 대상으로 하고 실제 설정이 필요하며 "게임을 더 조용하게 만들기"에는 과잉입니다.</li>
</ul>

<p>이들 중 어느 것도 Windows 사용자가 당연하게 여기는 한 가지, 즉 앱별 빠른 슬라이더를 제공하지 않습니다. 그 갭이군요 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 채우기 위해 만들어졌습니다.</p>

<h2>직접 수정: 앱당 독립적인 볼륨</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> macOS용 메뉴 표시줄 앱별 볼륨 믹서입니다. 현재 사운드를 재생하는 모든 앱을 표시하고 각 앱에 Windows 볼륨 믹서와 똑같은 자체 슬라이더를 제공합니다. 게임 대 음성 문제의 경우 워크플로가 짧습니다.</p>

<ul>
<li>게임과 Discord가 모두 실행되는 동안 메뉴 표시줄에서 SoundDial 아이콘을 클릭하세요.</li>
<li>목록에서 게임을 찾아 슬라이더를 대략 40-50%까지 아래로 당깁니다.</li>
<li>Discord(또는 Slack, Zoom 또는 음성 앱)를 100%로 둡니다.</li>
<li>플레이하는 동안 즉시 조정하세요. 시끄러운 총격전에서는 게임을 더욱 느리게 만들고, 조용한 탐험 중에는 백업하세요.</li>
</ul>

<p>레벨은 앱마다 다르므로 한 번 설정하면 유지됩니다. 게임 자체 믹스가 아무리 뜨거워도 게임은 계속 제한되며 친구들은 그 게임을 통해 명확하게 들을 수 있습니다.</p>

<h2>나머지 설정을 위한 부스트, 음소거 및 프로필</h2>

<p>동일한 도구는 음성 게임과 관련된 인접한 성가심을 다룹니다.</p>

<ul>
<li><strong>앱별 부스트.</strong> Discord 최대치에서도 팀원의 마이크가 조용하면 음성 앱을 푸시할 수 있습니다. <em>위에</em> 100%이므로 묻히지 않고 게임을 중단합니다.</li>
<li><strong>앱별 음소거.</strong> Alt 키를 누르거나 재생을 종료하지 않고도 백그라운드 브라우저 탭이나 음악 앱을 즉시 음소거할 수 있습니다.</li>
<li><strong>볼륨 프로필.</strong> 45%의 게임과 Discord 부스트가 적용된 "게임" 프로필을 저장한 다음 한 번의 클릭으로 일상적으로 사용할 수 있는 "일반" 프로필로 다시 전환합니다. 각 세션마다 슬라이더를 다시 끌 필요가 없습니다.</li>
<li><strong>자동 더킹.</strong> 누군가가 말할 때 게임이 자동으로 중단되도록 하여 콜아웃이 항상 작업 위에 표시되도록 합니다.</li>
<li><strong>빠른 출력 전환.</strong> 시스템 설정으로 들어가지 않고도 동일한 메뉴에서 헤드폰과 스피커 사이를 이동할 수 있습니다.</li>
</ul>

<blockquote><p>정신 모델은 간단합니다. Windows가 수년 동안 해왔던 방식으로 앱당 하나의 슬라이더입니다. macOS는 이를 제공한 적이 없으므로 작은 유틸리티로 패리티를 복원합니다.</p></blockquote>

<h2>솔직히 무엇을 기대해야합니까?</h2>

<p>앱별 믹서는 밸런스 문제를 깔끔하게 해결하면서도 기대치를 올바르게 설정합니다. 소프트웨어 출력 레벨을 제어합니다. 자체 오디오가 제대로 마스터링되지 않은 게임을 고칠 수 없으며 캡처되지 않은 신호를 올릴 수 없습니다(진짜로 고장난 마이크에는 여전히 하드웨어 수리가 필요합니다). 부스트(Boost)는 실제 게인을 추가하므로 조용한 소스를 100% 이상으로 올리면 앰프를 너무 높게 올리는 것과 마찬가지로 왜곡이 발생할 수 있습니다. 그러나 현명하게 사용하면 적당한 게임 캡과 작은 음성 부스트만 있으면 대부분의 설정에 필요합니다.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 샌드박스 처리되어 Mac App Store에서 바로 설치됩니다. 드라이버도 없고, 커널 확장도 없고, 신뢰할 수 있는 DMG도 없습니다. 구독 없이 일회성 €14.99에 구입할 수 있으며 28개 언어에 걸쳐 macOS 볼륨 제어를 지원합니다.</p>

<p>게임 내 슬라이더와 싸우지 마세요. 잡아 <a href="https://apps.apple.com/app/id6772792641">Mac App Store의 SoundDial</a>, 게임을 끄고 팀을 시끄럽게 유지하고 마침내 배송을 잊어버린 Windows 스타일 볼륨 믹서 macOS를 구입하세요.</p>`,
  },
  "external-monitor-speaker-volume-too-loud-mac": {
    slug: "external-monitor-speaker-volume-too-loud-mac",
    title: "Mac에서 외부 모니터 스피커의 소리가 너무 크거나 멈췄습니까? HDMI/DisplayPort 볼륨 수정",
    description: "Mac의 볼륨 키가 HDMI 또는 DisplayPort 모니터 스피커를 제어하지 못하는 이유와 모니터 OSD, 오디오 MIDI 설정 및 더 나은 출력 라우팅을 사용하여 너무 크거나, 멈추거나, 조정할 수 없는 오디오를 수정하는 방법.",
    date: "2026-07-23",
    readTime: "6분 읽기",
    content: `<p>Mac의 볼륨 키가 회색으로 표시되거나 HDMI 또는 DisplayPort를 통해 연결된 모니터에 대해 아무 작업도 수행하지 않는 경우 이는 일반적으로 버그가 아닙니다. 디지털 디스플레이 오디오는 고정된 레벨로 전송되는 경우가 많으며 모니터 자체 하드웨어가 볼륨을 제어합니다. 해결 방법은 디스플레이를 조정하거나, 출력 경로를 변경하거나, 다른 오디오 장치를 사용하는 것입니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 외부 모니터 스피커가 Mac에서 너무 크거나 멈췄습니까? HDMI/DisplayPort 볼륨 수정" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Mac 볼륨 키가 HDMI/DisplayPort를 통해 작동하지 않는 이유</h2>

<p>HDMI 및 DisplayPort는 오디오를 디지털 스트림으로 전달합니다. 많은 모니터는 고정된 출력 레벨에서 해당 스트림을 수신하며 소스 장치가 아닌 디스플레이 자체에서 음량을 제어할 것으로 기대합니다. macOS가 이를 감지하면 화면 볼륨 슬라이더를 비활성화하고 F11/F12 키를 회색으로 표시하여 해당 키를 누를 때 "입력 없음" 기호를 표시합니다.</p>

<p>이는 하드웨어 및 프로토콜 제한 사항이며 Mac의 소프트웨어가 무시할 수 있는 것이 아닙니다. 오디오는 macOS가 감쇠할 수 있는 단계를 절대 통과하지 않습니다. 어떤 앱, 드라이버 또는 설정도 디스플레이가 전체 레벨에서 수신하도록 요구하는 스트림에 볼륨 제어를 주입할 수 없습니다. 이에 대해 솔직하게 말하면 잘못된 수정 사항을 찾는 데 드는 시간을 절약할 수 있습니다.</p>

<h2>수정 1: 모니터 자체 컨트롤(OSD) 사용</h2>

<p>이것이 대부분의 사람들을 위한 실제 솔루션입니다. 스피커가 내장된 거의 모든 모니터에는 패널 뒷면이나 아래쪽에 있는 물리적 버튼이나 조이스틱으로 구동되는 화면 디스플레이 메뉴가 있습니다.</p>

<ul>
<li>OSD/메뉴 버튼을 눌러 모니터 설정을 엽니다.</li>
<li>오디오 또는 볼륨 섹션을 찾으세요.</li>
<li>레벨을 낮추세요. 이는 실제로 HDMI/DP에서 작동하는 컨트롤입니다.</li>
</ul>

<p>일부 모니터는 동반 앱이나 DDC/CI 지원도 제공하므로 macOS에서 OSD를 구동할 수 있습니다. DDC를 지원하는 타사 유틸리티는 Mac의 볼륨 키를 모니터의 하드웨어 볼륨에 매핑할 수 있습니다. 이는 패널 버튼을 누르는 것이 싫다면 시도해 볼 가치가 있습니다.</p>

<h2>수정 2: 오디오 MIDI 설정 확인</h2>

<p>열기 <strong>오디오 MIDI 설정</strong> (/응용 프로그램/유틸리티에서). 장치 목록에서 모니터를 선택하세요. 오른쪽에 볼륨 슬라이더가 나타나면 아래로 드래그하십시오. 때로는 메뉴 표시줄 키가 비활성화된 경우에도 디스플레이에 소프트웨어 제어 가능 수준이 표시되는 경우가 있습니다. 슬라이더가 없거나 회색으로 표시된 경우 디스플레이는 고정 레벨 오디오만 허용함을 확인하는 것이므로 OSD로 돌아가야 합니다.</p>

<p>여기 있는 동안 올바른 출력 장치가 선택되었는지 확인하세요. 연결되어 있는 것을 잊어버린 모니터에 오디오가 자동으로 라우팅되는 것이 일반적이며, 이는 갑자기 소리가 크거나 들리지 않는 이유입니다.</p>

<h2>수정 3: 실제로 제어할 수 있는 위치로 오디오 라우팅</h2>

<p>어쨌든 모니터 스피커가 평범하고(대부분이) 볼륨 조절이 서투른 경우 가장 깔끔한 해결 방법은 사용을 중단하는 것입니다.</p>

<ul>
<li>스피커나 헤드폰을 모니터의 헤드폰 출력 잭에 연결하십시오. 해당 아날로그 출력은 일반적으로 디스플레이에서 볼륨을 조절할 수 있습니다.</li>
<li>USB DAC, USB 스피커 또는 Bluetooth 출력을 사용하십시오. USB 및 아날로그 출력은 macOS에 전체 소프트웨어 볼륨 제어 기능을 제공하므로 키가 다시 정상적으로 작동합니다.</li>
<li>빠른 사운드를 위해 Mac의 내장 스피커를 선택하고 모니터는 비디오 전용으로 유지하세요.</li>
</ul>

<p>macOS가 실제로 감쇠할 수 있는 출력에 도달하면 시스템 볼륨 키가 작동하고 모니터의 거친 OSD 단계 사이를 이동하는 대신 미세한 제어를 다시 얻습니다.</p>

<h2>출력이 작동되면 앱별 볼륨 조절</h2>

<p>제어 가능한 출력을 다시 얻으면 "너무 시끄럽거나 막히는" 문제가 해결됩니다. 그러나 macOS는 여전히 모든 것에 대해 하나의 마스터 볼륨만 제공합니다. Mac에는 내장된 앱별 믹서가 없습니다. Windows는 수년 동안 믹서를 갖고 있었지만 Apple은 이에 상응하는 제품을 출시한 적이 없습니다. 따라서 시끄러운 비디오, 게임, 조용한 통화는 모두 동일한 슬라이더를 공유합니다.</p>

<p>그 갭이군요 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 채운다. 각 앱에 독립적인 볼륨을 제공하는 메뉴 표시줄 믹서이므로 음악을 건드리지 않고도 브라우저 탭을 낮추거나, 앱 하나를 즉시 음소거하거나, 조용한 앱을 일반 한도 이상으로 높일 수 있습니다. 다양한 설정에 대한 볼륨 프로필을 저장하고 메뉴 표시줄에서 빠르게 출력을 전환할 수 있습니다.</p>

<p>범위를 명확히 하려면 다음을 수행하세요. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> macOS를 통해 흐르는 오디오의 소프트웨어 볼륨을 제어합니다. HDMI를 통한 시스템 볼륨을 무시하는 모니터는 무시할 수 없습니다. 이는 디스플레이의 고정 레벨 동작이며 OSD 또는 다른 출력으로만 문제를 해결할 수 있습니다. 제어 가능한 출력을 사용하면 앱별 제어가 앱이 빛나는 곳입니다.</p>

<h2>빠른 체크리스트</h2>

<ul>
<li>HDMI/DP에서 키가 회색으로 표시됩니까? 모니터의 OSD 볼륨을 사용하십시오. 이는 예상된 동작입니다.</li>
<li>숨겨진 소프트웨어 슬라이더에 대해서는 오디오 MIDI 설정을 확인하세요.</li>
<li>올바른 출력 장치가 선택되었는지 확인하세요.</li>
<li>실제 제어를 위해 오디오를 헤드폰 출력, USB 또는 Bluetooth로 라우팅하세요.</li>
<li>그런 다음 앱별 믹서를 사용하여 개별 앱의 균형을 유지합니다.</li>
</ul>

<p>출력이 통제되면 다음을 제공하십시오. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 봐. Mac App Store에서 €14.99의 일회성 구매로 구독, 드라이버, DMG가 없으며 마침내 macOS에 실제 앱별 볼륨 믹서가 제공됩니다.</p>`,
  },
  "usb-dac-volume-control-not-working-mac": {
    slug: "usb-dac-volume-control-not-working-mac",
    title: "USB DAC 볼륨이 Mac에서 조정되지 않습니까? 소프트웨어 볼륨 제어를 다시 가져오기",
    description: "macOS가 많은 USB DAC의 볼륨 슬라이더를 회색으로 표시하는 이유와 그 의미, 오디오 품질을 저하시키지 않고 Mac에서 작동하는 소프트웨어 볼륨 제어를 다시 얻는 방법.",
    date: "2026-07-23",
    readTime: "6분 읽기",
    content: `<p>USB DAC의 볼륨 슬라이더가 Mac에서 회색으로 표시되는 경우 일반적으로 버그가 아닙니다. macOS는 DAC가 제어 가능한 볼륨이 없다고 보고하면 DAC의 자체 하드웨어 손잡이를 사용할 것으로 예상하여 소프트웨어 볼륨을 비활성화합니다. 소프트웨어 볼륨을 다시 얻으려면 다음과 같은 앱 수준 감쇠기를 사용하십시오. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — USB DAC 볼륨이 Mac에서 조정되지 않습니까? 소프트웨어 볼륨 제어를 다시 가져오기" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>macOS가 일부 USB DAC의 볼륨을 회색으로 표시하는 이유</h2>

<p>USB 오디오 장치를 연결하면 macOS는 USB 오디오 클래스(UAC) 프로토콜을 통해 무엇을 할 수 있는지 묻습니다. 해당 핸드셰이크의 일부는 볼륨 컨트롤을 포함한 일련의 "기능 단위" 컨트롤입니다. DAC가 볼륨 컨트롤을 선언하면 macOS는 이를 키보드 볼륨 키와 메뉴 표시줄 슬라이더에 연결합니다. DAC가 호스트 조정 가능한 볼륨이 없다고 선언하면 macOS는 슬라이더를 완전히 회색으로 표시합니다.</p>

<p>많은 고품질 DAC 및 앰프는 의도적으로 후자를 수행합니다. 설계자의 가정은 DAC에 완전한 비트 완벽한 디지털 신호를 공급하고 장치 자체의 아날로그 볼륨 노브를 사용하여 음량을 제어하는 ​​것입니다. 이러한 아날로그 감쇠는 디지털을 아날로그로 변환한 후에 발생하므로 비트를 버리는 것을 방지하며 실제로 오디오 애호가가 선호하는 경로입니다. 이는 결함이 아닌 기능입니다.</p>

<blockquote>경험 법칙: DAC에 물리적 볼륨 손잡이가 있고 Mac 슬라이더가 회색으로 표시되면 제조업체에서는 손잡이를 사용하기를 원합니다. 신호는 의도적으로 100% 전송됩니다.</blockquote>

<h2>회색으로 표시된 슬라이더가 실제로 문제가 되는 경우</h2>

<p>"그냥 손잡이를 사용하세요"라는 대답은 실제 설정에서 세분화됩니다.</p>

<ul>
<li><strong>DAC에는 손잡이가 없습니다.</strong> 다양한 소형 USB DAC, 동글 및 프로 인터페이스에는 볼륨 제어 기능과 호스트 제어 기능이 없습니다. 다운스트림 앰프나 파워 스피커가 설정된 레벨에서 멈췄습니다.</li>
<li><strong>손잡이가 손이 닿지 않는 곳에 있습니다.</strong> 모니터 뒤의 데스크톱 DAC 또는 고정 이득 앰프에 전원을 공급하는 장치는 볼륨 조정이 키를 누르는 대신 물리적인 일이 된다는 것을 의미합니다.</li>
<li><strong>마스터 레벨뿐만 아니라 앱별 잔액도 필요합니다.</strong> 완벽한 하드웨어 노브라도 단일 전역 컨트롤입니다. Zoom 통화를 음악보다 더 조용하게 만들 수 없으며 알림이 울릴 때 게임을 더킹할 수 없습니다.</li>
</ul>

<p>OS의 관점에서 장치가 올바르게 작동하기 때문에 이들 중 어느 것도 macOS로 수정되지 않습니다. 이는 솔직한 제한 사항입니다. 이는 장치에서 보고하는 기능이며 시스템 설정에 이를 무시할 수 있는 토글이 없습니다.</p>

<h2>무엇이든 설치하기 전에 정직한 해결 방법</h2>

<p>비용이 전혀 들지 않으므로 먼저 시도해 보세요.</p>

<ul>
<li><strong>하드웨어 노브나 다운스트림 볼륨을 사용하십시오.</strong> DAC 또는 전원 스피커/앰프에 제어 기능이 있는 경우 이것이 가장 깔끔한 옵션이며 전체 디지털 해상도를 유지합니다.</li>
<li><strong>DAC의 자체 앱이나 펌웨어를 확인해보세요.</strong> 일부 DAC(및 게임 지향 장치)에는 호스트 볼륨을 활성화하는 제어판 또는 펌웨어 설정이 제공됩니다. "USB 볼륨" 또는 "소프트웨어 볼륨" 옵션이 있는 경우 해당 옵션을 켜면 macOS 슬라이더가 다시 작동합니다.</li>
<li><strong>다른 USB 모드를 사용해 보세요.</strong> 일부 장치는 "클래스 호환"과 독점 드라이버 모드에서 서로 다른 기능을 보고합니다. 공급업체 드라이버를 설치하거나 제거하면 macOS에서 볼륨 컨트롤을 볼 수 있는지 여부가 변경될 수 있습니다.</li>
<li><strong>오디오 MIDI 설정을 살펴보세요.</strong> 오디오 MIDI 설정을 열고 장치를 선택한 다음 마스터 또는 채널별 볼륨이 나타나는지 확인하세요. 메뉴 표시줄이 회색으로 표시되어 있어도 해당 패널에서 슬라이더를 사용할 수 있는 경우가 있습니다.</li>
</ul>

<p>이들 중 어느 것도 적용되지 않으면 Mac 측에서 소프트웨어 감쇠가 필요합니다.</p>

<h2>앱별 감쇠를 통한 소프트웨어 볼륨 제어</h2>

<p>하드웨어가 볼륨 명령을 받아들이지 않는 경우 남은 옵션은 소프트웨어에서 오디오가 DAC에 도달하기 전에 오디오를 감쇠시키는 것입니다. 바로 이것이다 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 그렇습니다. 메뉴 표시줄에 있으며 DAC가 하드웨어 컨트롤을 노출하는지 여부에 관계없이 실행 중인 모든 앱에 독립적인 볼륨, 음소거 및 부스트 기능을 제공합니다.</p>

<p>회색으로 표시된 DAC에 사용하려면:</p>

<ul>
<li>설치 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> Mac App Store에서 메뉴 표시줄에서 엽니다.</li>
<li>DAC를 시스템 출력으로 선택한 상태로 유지하십시오. SoundDial의 빠른 출력 전환을 사용하면 시스템 설정으로 들어가지 않고도 DAC, 스피커, 헤드폰 사이를 이동할 수도 있습니다.</li>
<li>앱별 레벨 설정: 브라우저를 내리고, 음악 플레이어를 올리고, 원하지 않는 모든 것을 음소거하세요. 각 앱은 선택한 볼륨으로 스트리밍되며 혼합된 결과는 DAC로 전달됩니다.</li>
<li>다양한 시나리오(통화 대 청취)에 맞게 볼륨 프로필을 저장하고, 더 중요한 내용이 재생되기 시작하면 자동 더킹으로 백그라운드 앱을 낮추도록 할 수 있습니다.</li>
</ul>

<h2>오디오 품질에 대한 정직한 균형</h2>

<p>소프트웨어 감쇠는 변환 전 디지털 레벨을 감소시키므로 이론적으로는 DAC 자체의 아날로그 볼륨에 비해 해상도가 약간 낮아집니다. 실제로 일반 청취 수준의 최신 24비트 이상의 경로에서는 감소량이 가청 수준보다 훨씬 낮으며 풀 스케일에 가까운 재생에 대해 DAC의 전체 동적 범위를 유지합니다. 손이 닿는 곳에 좋은 아날로그 손잡이가 있는 순수주의자라면 그 손잡이를 사용하십시오. 사용 가능한 하드웨어 제어 기능이 없거나 macOS가 제공할 수 없는 앱별 균형이 필요한 경우 소프트웨어 볼륨이 올바른 절충안이며 아무것도 하지 않는 슬라이더보다 좋습니다.</p>

<p>SoundDial는 드라이버, 커널 확장 또는 DMG 설치 프로그램이 없는 샌드박스형 €14.99 일회성 구매 제품입니다. USB DAC의 볼륨이 회색으로 표시되고 손잡이를 잡을 수 없는 경우, <a href="https://apps.apple.com/app/id6772792641">Mac App Store에서 SoundDial를 얻으세요</a> 메뉴 표시줄에 작동 중인 볼륨 제어 기능을 다시 추가하세요.</p>`,
  },
  "cap-max-volume-of-one-app-mac": {
    slug: "cap-max-volume-of-one-app-mac",
    title: "Mac에서 하나의 Loud 앱의 최대 볼륨 제한(청각 보호)",
    description: "macOS에는 앱별 볼륨 제한이 없으므로 시끄러운 앱 하나로 시스템 볼륨을 최대로 높일 수 있습니다. 앱별 믹서를 사용하여 Mac에서 단일 앱의 최대 볼륨 한도를 설정하는 방법과 하드웨어 제한이 중요한 이유는 다음과 같습니다.",
    date: "2026-07-23",
    readTime: "5분 읽기",
    content: `<p>macOS에는 하나의 앱의 최대 볼륨을 제한하는 기본 제공 방법이 없으므로 시스템 슬라이더가 설정된 대로 큰 프로그램이 재생됩니다. 단일 앱의 최대 한도를 설정하려면 다음과 같은 메뉴 표시줄 앱별 믹서를 사용하세요. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>: 시스템 볼륨이 다른 모든 것보다 높게 유지되는 동안 해당 앱을 40%로 유지하세요.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac에서 하나의 시끄러운 앱의 최대 볼륨 제한(청각 보호)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>하나의 앱이 Mac에서 갑자기 당신을 놀라게 할 수 있는 이유</h2>

<p>macOS에서 메뉴 막대 또는 제어 센터의 볼륨 슬라이더는 단일 시스템 전체 제어 기능입니다. 모든 앱은 동일한 수준에서 동일한 출력을 쏟아냅니다. Windows가 수년 동안 볼륨 믹서 패널을 사용했던 방식처럼 운영 체제에 앱별 볼륨 믹서가 내장되어 있지 않습니다.</p>

<p>그 디자인은 귀에 실제로 영향을 미칩니다. 조용한 팟캐스트나 부드러운 화상 통화를 들을 수 있도록 시스템 볼륨을 높게 설정한 다음 게임, Discord 알림, 광고가 많은 웹 사이트 또는 훨씬 더 큰 소리로 마스터링된 비디오로 전환하면 해당 앱도 전체 시스템 수준에서 재생됩니다. 그 결과는 전형적인 점프 겁입니다. 즉, 해당 특정 앱에 대해 의도하지 않은 볼륨의 갑작스러운 소리 벽입니다.</p>

<p>이명, 소리 민감성이 있는 사람 또는 단순히 청력을 중요하게 생각하는 사람에게는 예측 불가능성이 문제입니다. 당신은 모든 것을 더 조용하게 만들려고 노력하지 않습니다. 당신은 하나의 특정 시끄러운 앱이 안전하다고 결정한 수준을 결코 초과할 수 없음을 보장하려고 합니다.</p>

<h2>macOS가 여기서 할 수 있는 것과 할 수 없는 것</h2>

<p>어떤 것을 추천하기 전에 한계에 대해 솔직하게 말씀드리겠습니다.</p>

<ul>
<li><strong>시스템 볼륨</strong> 한꺼번에 다 낮춰줍니다. 하나의 앱을 길들이기 위해 낮추면 조용한 앱이 들리지 않게 됩니다.</li>
<li><strong>인앱 볼륨 슬라이더</strong> 일부 앱(미디어 플레이어, 탭별 일부 브라우저)에는 존재하지만 대부분은 그렇지 않습니다. 게임, 화상 통화 또는 기본 앱에는 독립적인 볼륨 제어 기능이 전혀 없는 경우가 많습니다.</li>
<li><strong>하드웨어 천장은 진짜입니다.</strong> 어떤 소프트웨어도 출력 장치의 최대치보다 더 큰 신호를 보낼 수 없습니다. 반대로, 앱 자체의 음량 마스터링과 DAC 및 헤드폰을 사용하여 "100%" 실제로 느끼는 음량을 설정합니다. 소프트웨어는 앱별 수준을 안정적으로 낮출 수 있지만 헤드폰의 물리적 특성을 다시 작성할 수는 없습니다.</li>
</ul>

<p>따라서 정직한 목표는 드라이버 수준에서 마법의 음량 제한을 두는 것이 아닙니다. 이는 실용적이고 신뢰할 수 있는 앱별 감쇠입니다. 선택한 앱을 시스템 출력의 고정된 비율로 유지하여 결코 놀라지 않도록 하세요.</p>

<h2>앱별 믹서를 사용하여 단일 앱의 볼륨을 제한하는 방법</h2>

<p>앱별 볼륨 믹서는 각 앱의 오디오를 가로채서 레벨을 독립적으로 설정할 수 있도록 해줍니다. 다음은 워크플로입니다. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, 메뉴 표시줄에 있습니다.</p>

<ul>
<li><strong>믹서를 엽니다.</strong> SoundDial 메뉴 표시줄 아이콘을 클릭합니다. 현재 오디오를 재생하는 모든 앱의 목록이 표시되며 각 앱에는 자체 슬라이더가 있습니다.</li>
<li><strong>시끄러운 앱을 찾으세요.</strong> 게임, 브라우저, 화상 회의 도구 등 제한하려는 앱을 찾습니다.</li>
<li><strong>천장을 설정하세요.</strong> 해당 앱의 슬라이더를 안전한 수준(예: 35~50%)까지 아래로 드래그하세요. 이제 해당 앱은 시스템 출력의 일부만 재생되고 다른 모든 앱은 원래 위치에 유지됩니다.</li>
<li><strong>필요한 곳에 시스템 볼륨을 남겨두십시오.</strong> 조용한 앱을 사용하려면 시스템 슬라이더를 충분히 높게 유지하세요. 제한된 앱은 상관없이 계속 통제됩니다.</li>
</ul>

<p>레벨은 앱별로 적용되므로 해당 프로그램에 대한 최대값을 효과적으로 설정하게 됩니다. 가장 큰 소리의 콘텐츠를 재생하려고 시도하는 경우에도 이제 가장 큰 소리는 사용자가 선택한 전체 부분입니다.</p>

<h2>프로필로 캡을 고정시키세요</h2>

<p>한 번의 수동 조정이 도움이 되지만 종료했다가 다시 시작하면 앱 수준이 재설정될 수 있습니다. 다시 시작해도 지속되는 청각 안전 설정을 만들려면 다음을 사용하세요. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>의 볼륨 프로필입니다. 예를 들어 게임이 40%, 음악 앱이 70%, 통화 앱이 90%인 "조용한 게임 밤"과 같이 선호하는 앱별 수준으로 프로필을 저장하세요. 앉을 때마다 한 번의 클릭으로 불러올 수 있습니다. 시끄러운 앱의 최대 한도는 설정한 대로 정확하게 돌아옵니다.</p>

<p>청력 보호를 위해 알아야 할 두 가지 추가 기능은 다음과 같습니다.</p>

<ul>
<li><strong>앱별 음소거</strong> 다른 것을 건드리지 않고도 범죄자 한 명을 즉시 침묵시킬 수 있으며, 시끄러운 알림을 스팸으로 보내는 앱에 유용합니다.</li>
<li><strong>자동 더킹</strong> 더 중요한 일이 시작되면 자동으로 배경 오디오를 낮추므로 두 개의 큰 소스 사이에 동시에 끼어들지 않습니다.</li>
</ul>

<blockquote><p>소프트웨어 감쇠는 실제로 앱 제한에 효과적이지만 의료적 보호 장치가 아닌 보호의 한 계층입니다. 이명이나 소리 민감도가 있는 경우 앱별 최대 한도를 합리적인 전체 청취 수준 및 휴식 시간과 연결하세요. 신중한 볼륨 습관을 대체할 수 있는 앱은 없습니다.</p></blockquote>

<h2>부스트에 대한 참고 사항 및 부스트가 별도인 이유</h2>

<p>시끄러운 앱을 제한하는 동일한 앱별 믹서는 너무 조용한 앱을 100% 이상으로 높일 수도 있습니다. 이는 자체 볼륨이 너무 낮게 마스터링된 앱에 유용합니다. 이는 동일한 컨트롤의 양면입니다. 즉, 각 앱의 레벨을 위 또는 아래로 결정합니다. 청력 보호를 위해서는 간단히 "아래" 방향을 선택하고 그 방향을 유지하면 됩니다.</p>

<h2>짧은 버전</h2>

<p>macOS는 단일 앱의 볼륨을 자체적으로 제한할 수 없으며 이는 사용자 오류가 아닌 진정한 OS 격차입니다. 메뉴 바별 앱 믹서가 앱을 닫습니다. 시끄러운 앱을 고정된 분수로 설정하고 프로필에 저장하면 다른 앱이 계속 들리는 동안에는 다시는 폭발하지 않습니다.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> Mac App Store에서 일회성 €14.99 구매로, 드라이버나 설치할 DMG 없이 샌드박스 처리됩니다. 예측할 수 없는 하나의 앱으로부터 귀를 보호하는 것이 목표라면, 그 한도를 설정하고 유지하는 가장 간단한 방법입니다.</p>`,
  },
  "set-left-right-balance-per-app-mac": {
    slug: "set-left-right-balance-per-app-mac",
    title: "Mac에서 앱별로 왼쪽/오른쪽 밸런스가 다릅니다. 가능합니까?",
    description: "macOS의 각 앱에 대해 서로 다른 왼쪽/오른쪽 스테레오 밸런스를 설정할 수 있습니까? 솔직히 말해서, 아니요. 기본적으로는 아니며 대부분의 도구에서는 그렇지 않습니다. 실제로 가능한 것과 실제 한계는 다음과 같습니다.",
    date: "2026-07-23",
    readTime: "6분 읽기",
    content: `<p>솔직히 말해서, 아닙니다. macOS를 사용하면 애플리케이션별로 왼쪽/오른쪽 스테레오 밸런스를 다르게 설정할 수 없으며, 진정한 앱별 패닝을 표시하는 타사 도구도 거의 없습니다. 출력 장치에 대해 하나의 글로벌 밸런스를 설정할 수 있으며, 앱별로 제어할 수 있습니다. <em>볼륨</em>, 그러나 앱별로 독립적임 <em>팬</em> macOS가 제공하는 기능이 아닙니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac의 앱별로 왼쪽/오른쪽 밸런스가 다릅니다 — 가능합니까?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>균형과 볼륨 — 둘은 같은 것이 아닙니다</h2>

<p>종종 혼동되는 두 가지 아이디어를 분리하는 것이 좋습니다.</p>
<ul>
  <li><strong>볼륨</strong> — 앱의 전반적인 소리가 얼마나 큰지. 이는 두 채널 모두에 적용되는 단일 레벨입니다.</li>
  <li><strong>밸런스(팬)</strong> — 왼쪽과 오른쪽 스피커 사이에 오디오가 분배되는 방식. "완전 왼쪽" 밸런스는 모든 것을 왼쪽 채널로 보내고 오른쪽 채널은 묵음시킵니다.</li>
</ul>

<p>"앱별 다른 균형"을 요구하는 사람들은 일반적으로 두 가지 중 하나를 원합니다. 즉, 한 앱의 소리를 한쪽 귀로 전달하는 것(예: 왼쪽 귀의 통화, 오른쪽 귀의 음악), 청력 차이 또는 한쪽의 불량한 스피커를 교정하는 것입니다. 그러나 특정 앱에만 해당됩니다. 그것은 합법적인 목표입니다. 문제는 컨트롤이 어디에 있는지입니다.</p>

<h2>macOS가 이 작업을 기본적으로 수행할 수 없는 이유</h2>

<p>macOS에는 정확히 하나의 밸런스 컨트롤이 있으며 출력 장치 수준에서 작동합니다. 아래에서 찾을 수 있습니다. <strong>시스템 설정 → 소리 → 출력</strong>, 여기서 <em>잔액</em> 슬라이더는 전체 믹스를 왼쪽이나 오른쪽으로 이동합니다. 해당 슬라이더가 무엇이든 적용되도록 설정되어 있습니다. <em>모든 것</em> 해당 장치로 라우팅됩니다. 모든 앱, 모든 시스템 사운드를 한 번에.</p>

<p>표준 macOS 오디오 스택에는 "이 앱의 오디오를 왼쪽으로, 해당 앱의 오디오를 오른쪽으로 렌더링"이라는 API가 없습니다. 앱은 이미 믹스된 시스템에 오디오를 전달하고 시스템은 스피커에 전달되는 도중에 하나의 마스터 밸런스를 적용합니다. 따라서 앱별 이동을 원하는 레이어는 운영 체제에서 노출되지 않습니다. 이는 진정한 OS 제한 사항이며 메뉴 표시줄 유틸리티가 정중하게 해결할 수 있는 문제는 아닙니다.</p>

<blockquote>앱별과 달리 <em>볼륨</em> — macOS도 기본적으로 부족하지만 오디오 스트림을 탭하여 구현할 수 있는 앱 — 앱별 <em>균형</em> 각 앱의 스트림을 독립적으로 다시 패닝해야 하며 샌드박스가 적용된 앱에서는 해당 후크를 사용할 수 없습니다.</blockquote>

<h2>SoundDial가 하는 일과 하지 않는 일</h2>

<p><a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">SoundDial</a> 앱별 제어 기능 제공 macOS 누락: 독립 <strong>볼륨</strong> 실행 중인 각 앱에 대해, 앱별로 <strong>음소거</strong>, 앱별 볼륨 <strong>부스트</strong> 100% 이상, 저장 가능 볼륨 <strong>프로필</strong>, 자동 더킹 및 메뉴 표시줄에서 빠른 출력 전환이 가능합니다.</p>

<p>솔직하게 말하면: <a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">SoundDial</a> 앱별 제어 <em>음량 및 음소거</em>, 앱별 스테레오가 아님 <em>패닝</em>. Safari를 왼쪽 귀로 보내고 Spotify를 오른쪽 귀로 보내지 않습니다. 누군가 메뉴 바 믹서가 macOS에서 진정한 앱별 L/R 균형을 유지한다고 말하면 회의적이어야 합니다. 이는 OS가 제공하는 제어가 아닙니다. SoundDial가 진정으로 해결하는 것은 훨씬 더 일반적인 불만입니다. 즉, 한 앱이 다른 앱에 비해 너무 크거나 너무 조용합니다.</p>

<h2>앱별 잔액에 대한 실제 해결 방법</h2>

<p>오디오를 나란히 분할해야 하는 경우 대략 가장 단순한 것부터 가장 복잡한 것까지 정직한 옵션이 있습니다.</p>

<ul>
  <li><strong>글로벌 잔액(모든 앱):</strong> 시스템 설정 → 사운드 → 출력 → 밸런스를 사용하세요. 이것은 유일한 기본 제공 옵션이며 모든 앱에 영향을 미칩니다. 방이나 청력 비대칭을 교정하는 데 유용하며 하나의 앱을 분리하는 데는 쓸모가 없습니다.</li>
  <li><strong>별도의 출력 장치:</strong> 이는 실제 앱별 잔액에 가장 가까운 것입니다. 앱 A를 하나의 출력 장치로, 앱 B를 다른 출력 장치로 라우팅한 다음 각 장치의 밸런스를 독립적으로 설정합니다. macOS를 사용하면 일부 앱 내에서 출력 장치를 선택할 수 있습니다(브라우저/통신 앱은 종종 자체 출력 선택기를 노출함). 앱 A가 왼쪽으로 패닝된 장치를 가리키고 앱 B가 오른쪽으로 패닝된 장치를 가리키면 두 앱 모두 사용자가 출력을 선택할 수 있는 한 효과적으로 앱별 잔액을 얻을 수 있습니다.</li>
  <li><strong>가상 오디오 라우팅 도구:</strong> 가상 장치 및 내부 믹서를 생성하는 유틸리티는 일부 구성에서 특정 앱을 특정 채널로 라우팅할 수 있습니다. 이것은 강력하지만 까다롭고 드라이버 스타일 구성 요소를 추가하며 대부분의 사람들에게 과잉입니다. 이는 스트리머와 오디오 엔지니어의 영역이지, 일반적인 "한 귀로 통화" 수정이 아닙니다.</li>
  <li><strong>하드웨어 분할:</strong> 물리적 스피커 또는 청각 차이에 관한 경우 하드웨어 믹서 또는 채널별 제어 기능이 있는 오디오 인터페이스가 소프트웨어 문제를 완전히 회피합니다.</li>
</ul>

<h2>실제로 앱별 볼륨이 필요한 경우</h2>

<p>"앱별로 다른 잔액을 원합니다"라는 요청은 실제로 "한 앱이 다른 앱을 압도하고 있습니다."라는 요청이 많습니다. 목표가 음악을 통해 들을 수 있는 영상 통화이거나 Discord 채팅 옆에 너무 시끄러운 게임인 경우 균형은 도구가 아닙니다. 독립적인 볼륨이 중요합니다. 이것이 바로 가상 드라이버나 라우팅 체조 없이 앱별 믹서가 깔끔하게 처리하는 것입니다.</p>

<p>따라서 솔직하게 요약하자면, 앱별 진정한 왼쪽/오른쪽 균형은 macOS 기능이 아니며, 이를 설득력 있게 위조하는 믹서 앱은 없습니다. 실제 경로는 글로벌 밸런스 슬라이더 또는 개별 패닝 장치로의 앱별 출력 라우팅입니다. 그러나 근본적인 고통이 상대적인 크기라면 문제는 해결됩니다.</p>

<p>저장 가능한 프로필과 드라이버 없이 Mac의 모든 앱에 대해 독립적인 볼륨, 음소거 및 부스트를 원하십니까? <a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">Mac App Store에서 SoundDial 가져오기</a> — €14.99, 일회성, 샌드박스.</p>`,
  },
  "why-are-some-apps-louder-than-others-mac": {
    slug: "why-are-some-apps-louder-than-others-mac",
    title: "Mac에서 일부 앱이 다른 앱보다 소리가 더 큰 이유는 무엇입니까? (그리고 균등화하는 방법)",
    description: "Mac에서는 각 앱이 자체 음량 목표에 맞게 마스터링되고 macOS에는 앱별 볼륨 제어 기능이 내장되어 있지 않기 때문에 앱 소리가 크게 다릅니다. 이런 일이 발생하는 이유와 앱의 레벨을 조정하는 방법은 다음과 같습니다.",
    date: "2026-07-23",
    readTime: "6분 읽기",
    content: `<p>Mac에서는 각 앱이 고유한 음량 목표에 맞게 제작, 마스터링 및 정규화되어 있으며 macOS에는 이를 조정할 수 있는 앱별 볼륨 제어 기능이 내장되어 있지 않기 때문에 Mac에서 앱의 소리가 크게 다릅니다. Spotify, YouTube, Zoom 및 시스템 경고는 모두 동일한 마스터 슬라이더를 통과하므로 지속적으로 위아래로 타고 있어야 합니다.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac에서 일부 앱이 다른 앱보다 소리가 더 큰 이유는 무엇입니까? (그리고 균등화하는 방법)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Mac가 아니라 오디오 그 자체입니다.</h2>

<p>macOS의 단일 시스템 볼륨 슬라이더는 모든 것에 대한 최종 출력 레벨을 제어합니다. 각 앱의 오디오 스트림에 구운 상대적 음량은 건드리지 않습니다. 이 기준선은 사운드가 스피커에 도달하기 훨씬 전에 설정되며 소스마다 엄청나게 다릅니다.</p>

<p>이러한 차이를 가져오는 세 가지 요소는 다음과 같습니다.</p>

<ul>
<li><strong>마스터링 레벨.</strong> 펀치감 있는 팝 트랙은 조용한 어쿠스틱 녹음이나 음성 팟캐스트보다 훨씬 더 뜨겁게 마스터링됩니다. 영화관용으로 믹싱된 영화는 의도적으로 속삭임은 조용하게, 폭발음은 크게 유지합니다. 이것이 다이내믹 레인지이며 평균 레벨이 낮다는 것을 의미합니다.</li>
<li><strong>음량 정규화 목표.</strong> 스트리밍 플랫폼은 LUFS(풀 스케일에 상대적인 음량 단위)로 측정된 대상에 맞게 재생을 조정합니다. Spotify는 약 -14 LUFS, YouTube는 약 -14 LUFS, Apple Music은 약 -16 LUFS를 목표로 합니다. 화상 회의 앱이나 게임은 자체 이득을 전적으로 적용합니다. 서로 다른 대상으로 "정규화된" 두 앱은 서로 일치하지 않습니다.</li>
<li><strong>앱 간 레벨링이 없습니다.</strong> 각 앱은 자체 콘텐츠만 정규화합니다. 브라우저 게임에 대해 Zoom에 대해 Spotify를 조정하는 것은 없습니다. macOS는 그것들을 합산하여 믹스를 보냅니다.</li>
</ul>

<h2>LUFS가 중요한 이유(간단한 용어로)</h2>

<p>피크 레벨은 신호에서 가장 큰 단일 순간을 알려줍니다. LUFS는 실제로 소리가 얼마나 큰지 알려줍니다. <em>느낌</em> 시간이 지남에 따라 인간의 청각이 어떻게 작동하는지에 따라 가중치가 부여됩니다. 이러한 차이는 팟캐스트와 댄스 트랙이 동일한 최고점에 도달하면서도 음량 면에서 서로 다른 느낌을 받을 수 있는 이유입니다. 트랙은 천장 근처에서 훨씬 더 많은 시간을 보냅니다.</p>

<blockquote>더 조용한 LUFS 타겟은 더 많은 헤드룸과 더 많은 다이내믹 레인지를 의미합니다. 더 큰 타겟은 더 일관되고 "항상 가득 찬" 사운드 벽을 의미합니다. 둘 다 틀린 것은 아닙니다. 하지만 앱이 서로 다른 숫자를 대상으로 할 때 한 앱은 비명을 지르고 다른 앱은 중얼거리는 것처럼 느껴집니다.</blockquote>

<p>그것이 정직한 근본 원인입니다. 패치할 수 있는 버그가 아닙니다. 이는 서로 일치하도록 설계되지 않은 수십 개의 앱에 걸쳐 오디오가 생성되고 전달되는 방식에 대한 물리학입니다.</p>

<h2>간격 macOS는 열린 상태로 유지됩니다.</h2>

<p>사람들을 진정으로 좌절시키는 부분은 다음과 같습니다. Windows는 수년 동안 앱별 볼륨 믹서를 출시해 왔습니다. 작업 표시줄에서 바로 하나의 앱을 아래로 내리고 다른 앱을 위로 밀 수 있습니다. macOS는 이것을 포함하지 않았습니다. 사운드 기본 설정은 마스터 슬라이더 및 출력 장치 선택만 제공합니다.</p>

<p>따라서 Mac에서는 옵션이 전통적으로 제한되어 있습니다.</p>

<ul>
<li>각 앱의 내부 볼륨 슬라이더가 있는 경우 이를 조정하세요. 많은 앱(Zoom, 대부분의 게임, 시스템 차임벨)은 사용 가능한 앱을 노출하지 않습니다.</li>
<li>컨텍스트를 전환할 때마다 수동으로 마스터 슬라이더를 타십시오.</li>
<li>한 가지를 완전히 음소거하는 것은 실제로 균형을 맞추지 않는 무뚝뚝한 수정입니다.</li>
</ul>

<p>이들 중 어느 것도 귀하의 선호도를 기억하지 못합니다. 앱을 종료했다가 다시 시작하면 원점으로 돌아갑니다.</p>

<h2>실용적인 해결책: 앱당 기억되는 볼륨</h2>

<p>모든 서비스가 카탈로그를 리마스터하도록 강제할 수는 없으므로 실행 가능한 솔루션은 배송되지 않은 누락된 레이어 macOS, 즉 각 앱에 대해 독립적이고 기억되는 볼륨을 추가하는 것입니다. 그게 바로 그거야 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 그렇습니다. 이 기능은 메뉴 표시줄에 있으며 실행 중인 모든 앱에 자체 슬라이더를 제공하므로 자신에게 딱 맞는 수준이 될 때까지 시끄러운 슬라이더를 아래로 당기고 조용한 슬라이더를 위로 살짝 올릴 수 있습니다.</p>

<p>실제로 앱을 균일하게 만들려면 다음을 수행하세요.</p>

<ul>
<li>열기 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 메뉴 표시줄에서 자체 컨트롤이 있는 각 활성 앱을 볼 수 있습니다.</li>
<li>폭발적인 인기를 누리고 있는 음악이나 비디오 앱 등의 볼륨을 60~70% 정도로 낮춰보세요.</li>
<li>조용한 참조 앱(종종 통화 앱이나 팟캐스트)을 100%로 두고 앱별 사용 <strong>부스트</strong> 여전히 너무 부드러우면 100% 이상으로 밀어 넣으세요.</li>
<li>레벨을 한 번 설정하십시오. SoundDial는 각 앱의 볼륨을 기억하므로 다음에 앱을 열 때 잔액이 유지됩니다.</li>
</ul>

<p>두 가지 기능이 여기서 대부분의 레벨링 작업을 수행합니다. <strong>부스트</strong> 많은 앱이 최대치에서도 너무 조용하기 때문에 중요합니다. 볼륨만 줄이는 앱별 슬라이더로는 이를 구제할 수 없지만 100% 이상 증폭할 수 있는 슬라이더는 가능합니다. 그리고 <strong>볼륨 프로필</strong> 전체 레벨 세트를 저장하고(예를 들어 업무용 "음악에 낮게 집중, 통화 시 크게" 프로필과 게임용 다른 믹스) 앱별로 앱을 다시 조정하는 대신 즉시 전환할 수 있습니다.</p>

<h2>이것이 가장 도움이 되는 곳</h2>

<p>가장 일반적인 안도감은 음악 대 회의 점프입니다. 스트리밍 음악을 큰 소리로 마스터한 다음 통화 앱을 비교하면 희미하게 들립니다. 통화 앱을 더 높게(또는 증폭) 설정하고 음악을 낮추면 놀라운 볼륨 스윙이 사라집니다. 시끄러운 비디오 플레이어에 대한 조용한 브라우저 게임이나 모든 것 위에 튀어 나오는 시스템 경고에도 동일하게 적용됩니다.</p>

<p>한계를 명확히 하기 위해: SoundDial는 앱 출력의 균형을 맞춥니다. 잘못 제작된 트랙을 리마스터링하지 않으며, 매우 넓은 다이내믹 레인지로 믹싱된 오디오의 디테일을 만들어낼 수도 없습니다. 그것이 하는 일은 macOS가 제외된 하나의 컨트롤, 즉 꾸준하게 유지되는 앱별 수준을 제공하는 것입니다.</p>

<p>앱을 전환할 때마다 마스터 슬라이더를 타는 데 지치셨나요? <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> Mac App Store에서 일회성 €14.99(샌드박스 처리, 드라이버 없음, DMG 없음)이며 마침내 모든 앱에 고유한 기억 볼륨을 제공합니다.</p>`,
  },
};
