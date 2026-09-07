import type { ArticleSet } from "./index";

export const koArticles: ArticleSet = {
  "best-developer-tools-app-mac": {
    slug: "best-developer-tools-app-mac",
    title: "맥용 최고의 개발자 도구 앱",
    description:
      "기본적인 개발 유틸리티를 위해 브라우저 탭, CLI 스크립트, 북마크 폴더를 오가는 것은 실제 코딩보다 더 많은 시간을 낭비합니다.",
    date: "2026-09-06",
    readTime: "5분 읽기",
    content: `
<p>JWT를 디코딩하고, JSON 데이터를 정리하고, UUID를 생성하고, 문자열을 Base64로 인코딩해야 합니다 — 이 모든 것을 앞으로 10분 안에 끝내야 합니다. 그래서 브라우저 탭 4개를 열고, 민감한 데이터를 4개의 서로 다른 웹사이트에 붙여넣고, 그중 어느 곳도 클립보드를 기록하지 않기를 바랍니다. 그리고 내일 또 똑같이 반복합니다.</p>

<p>개발자들은 이런 소소한 작업을 처리하기 위해 북마크, 셸 별칭, 일회성 스크립트를 조합해 사용합니다. 기술적으로는 작동합니다. 하지만 에디터를 벗어나고, 올바른 탭을 찾고, 페이지가 로드되기를 기다리는 모든 맥락 전환은 실제로 해결해야 할 문제에 필요한 집중력을 조금씩 갉아먹습니다.</p>

<h2>macOS가 기본으로 제공하는 것</h2>
<p>macOS에는 Terminal이 내장되어 있어서, 올바른 플래그를 기억하고 있다면 어느 정도는 이 작업을 처리할 수 있습니다. <code>uuidgen</code>은 UUID를 생성해 줍니다. <code>echo -n "text" | base64</code>는 인코딩을 처리합니다. <code>python3 -m json.tool</code>은 JSON을 포맷팅해 줍니다. 하지만 통합된 인터페이스도 없고, 무엇을 할 수 있는지 알아내기도 어렵고, 자신만의 명령어 치트시트를 관리하지 않고서는 30가지의 서로 다른 작업을 처리할 방법이 없습니다.</p>

<p>Xcode에는 메뉴 안 깊숙이 몇 가지 유틸리티가 숨어 있지만, URL 문자열 하나를 디코딩하기 위해 12GB짜리 IDE를 실행하는 것은 근처 편의점에 트럭을 몰고 가는 것과 다름없습니다.</p>

<h2>41가지 개발자 도구를 담은 하나의 앱</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>는 41가지 개발자 도구를 하나의 네이티브 macOS 앱에 담았습니다 — 메뉴 바에서든 독립된 창에서든 바로 접근할 수 있습니다. 도구는 포맷터, 인코더, 생성기, 변환기, 텍스트 도구의 다섯 가지 카테고리로 정리되어 있습니다. 사이드바를 통해 둘러보거나 검색할 수 있고, 앱이 최근에 사용한 도구를 기억해 두어 자주 쓰는 작업은 언제나 클릭 한 번으로 열 수 있습니다.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows developer tools app for macOS showing 41 tools in a NavigationSplitView sidebar" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>클립보드 감지</h3>
<p>JWT를 클립보드에 복사하고 Bellows를 열면 JWT 디코더를 제안해 줍니다. JSON 문자열을 복사하면 JSON 포맷터를 보여줍니다. 이 작은 기능 덕분에 어떤 도구를 선택할지 고민하는 단계 자체가 사라집니다 — 앱이 클립보드 내용을 읽고 알맞은 유틸리티로 안내해 줍니다.</p>

<h3>완전한 오프라인 작동</h3>
<p>모든 도구는 로컬에서 실행됩니다. 네트워크 요청도 없고, 텔레메트리도 없고, 이름도 모르는 누군가가 운영하는 웹사이트에 API 키를 붙여넣을 필요도 없습니다. 토큰, 시크릿, 내부 데이터를 다루는 개발자에게 이것은 선택 사항이 아니라 필수 조건입니다.</p>

<h3>메뉴 바 접근</h3>
<p>Bellows는 메뉴 바에 상주하기 때문에 Dock을 어지럽히지 않으면서도 언제나 클릭 한 번 거리에 있습니다. 아이콘을 클릭하고, 도구를 선택하고, 입력값을 붙여넣고, 결과를 얻습니다. 전체 과정은 몇 초밖에 걸리지 않고, 현재 작업 중인 화면을 벗어날 필요도 없습니다.</p>

<h2>이런 분들께 적합합니다</h2>
<p>API 응답을 디버깅하는 백엔드 엔지니어. hex와 RGB 사이에서 색상을 변환하는 프런트엔드 개발자. Base64로 인코딩된 시크릿을 디코딩하는 데브옵스 엔지니어. 테스트 데이터를 위해 UUID를 생성하는 모바일 개발자. 그리고 "이거 좀 더 빠르게 할 방법이 있을 텐데"라고 생각하며 브라우저 탭을 여는 모든 사람들.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Mac App Store에서 Bellows 받기</a></p>
`,
  },

  "json-formatter-mac-app": {
    slug: "json-formatter-mac-app",
    title: "맥용 JSON 포맷터 — 오프라인으로 작동하는 네이티브 앱",
    description:
      "포맷되지 않은 JSON을 읽기 위해 브라우저 도구에 붙여넣는 작업은 일주일에 수십 번씩 반복하면서도 의문을 갖지 않는 워크플로입니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>API가 한 줄로 압축된 200줄짜리 JSON 응답을 반환합니다. 중첩된 필드 하나를 찾아야 합니다. 그래서 이를 복사하고, 브라우저 탭을 열고, 수십 개의 JSON 포맷터 웹사이트 중 하나로 이동해서 붙여넣고, "Format"을 클릭한 다음 결과를 눈을 찌푸리며 들여다봅니다. 만약 JSON에 토큰이나 사용자 데이터, 내부 ID처럼 민감한 정보가 담겨 있다면, 방금 그것을 제3자 서버로 전송한 셈입니다.</p>

<p>이는 소프트웨어 개발에서 가장 흔한 소소한 작업 중 하나이며, 대부분의 개발자가 가장 비효율적인 방식으로 이를 처리하고 있습니다.</p>

<h2>터미널을 이용하는 방법</h2>
<p>macOS에는 <code>python3</code>이 포함되어 있어서, Terminal에서 <code>python3 -m json.tool</code>로 JSON을 파이프 처리할 수 있습니다. 형식이 올바른 입력에는 잘 작동합니다. 하지만 쉼표가 하나 더 붙어 있거나 하면 제대로 작동하지 않고, 형식이 잘못된 JSON에는 알아보기 힘든 오류 메시지를 내놓으며, 결과물은 터미널 창 안에 갇혀 있습니다. 구문 강조도 없고, 접었다 펼 수 있는 노드도 없고, 중첩된 경로를 빠르게 복사할 방법도 없습니다.</p>

<p>일부 개발자는 Homebrew를 통해 <code>jq</code>를 설치하는데, 더 강력하긴 하지만 또 다른 의존성이 추가되고 기본 포맷팅 이상의 작업을 하려면 쿼리 문법을 익혀야 합니다.</p>

<h2>맥에 상주하는 네이티브 JSON 포맷터</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>는 41가지 내장 개발자 도구 중 하나로 JSON 포맷터를 제공합니다. 입력 창에 JSON을 붙여넣거나 입력하면 즉시 포맷팅되어 읽기 쉬운 결과물을 얻을 수 있습니다. 네트워크 연결이 필요 없습니다 — 모든 작업이 로컬에서 이루어집니다.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows JSON formatter tool showing formatted output on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>클립보드 감지</h3>
<p>JSON 문자열을 클립보드에 복사하고 Bellows를 엽니다. 앱이 JSON 콘텐츠를 감지해 자동으로 포맷터를 제안합니다. 메뉴를 헤맬 필요 없이, 필요한 도구가 이미 준비되어 있습니다.</p>

<h3>더 큰 도구 모음의 일부</h3>
<p>JSON 포맷팅은 단독으로 이루어지는 경우가 드뭅니다. Base64 문자열을 디코딩해서 JSON을 얻어야 할 수도 있고, JSON을 담고 있는 JWT 페이로드를 추출해야 할 수도 있으며, JSON 객체를 담고 있는 URL 쿼리 파라미터를 디코딩해야 할 수도 있습니다. 하나의 앱에 41가지 도구가 있으면, 서로 다른 유틸리티로 전환하지 않고도 이런 작업을 연달아 처리할 수 있습니다.</p>

<h3>가장 필요할 때</h3>
<p>밤 11시에 웹훅 페이로드를 디버깅할 때. 동료가 Slack에 붙여넣은 설정 파일을 검토할 때. Core Data 내보내기 파일을 살펴볼 때. 테스트를 작성하기 전에 목(mock) 응답의 구조를 확인할 때. 이런 순간이 바로 브라우저 탭을 여는 일이 가장 부담스럽게 느껴지는 때이며, 메뉴 바에 있는 네이티브 앱이 가장 큰 차이를 만드는 때입니다.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Mac App Store에서 Bellows 받기</a></p>
`,
  },

  "base64-encoder-decoder-mac": {
    slug: "base64-encoder-decoder-mac",
    title: "맥용 Base64 인코더 및 디코더",
    description:
      "터미널 명령어나 웹 도구로 Base64 문자열을 디코딩하는 일은 로그나 설정 파일에서 인코딩된 값을 만날 때마다 작업 흐름을 끊어놓습니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>환경 변수를 읽다가 <code>eyJhbGciOiJIUzI1NiJ9</code>처럼 알아볼 수 없는 값을 발견합니다. Base64라는 것은 알지만 그 자리에서 읽을 수는 없습니다. 그래서 이를 복사하고, Terminal을 열고, <code>echo "..." | base64 --decode</code>를 입력한 뒤 macOS에서는 <code>-D</code> 플래그를 써야 한다는 것을 뒤늦게 깨닫고 다시 시도해서 겨우 디코딩된 결과를 봅니다. 2초면 끝날 일에 30초를 써버린 셈입니다.</p>

<p>Base64 인코딩은 어디에서나 등장합니다: 인증 헤더, 이메일 첨부파일, CSS의 데이터 URI, Kubernetes 시크릿, CI/CD 파이프라인 설정. API나 인프라 작업을 한다면 하루에도 여러 번 Base64를 디코딩하게 됩니다.</p>

<h2>터미널이 부족한 이유</h2>
<p>macOS에 내장된 <code>base64</code> 명령어는 작동은 하지만 까다로운 부분이 있습니다. 디코드 플래그가 macOS에서는 <code>-D</code>(대문자)인데 Linux에서는 <code>-d</code>여서, 두 환경을 오가며 작업하는 사람에게는 헷갈리기 쉽습니다. 여러 줄에 걸친 입력은 인용부호 처리에 신경을 써야 합니다. 그리고 시각적 피드백이 전혀 없어서, 명령어를 입력하고 문자열을 받은 뒤 입력값이 실수로 잘리지 않았기를 바라야 합니다.</p>

<p>브라우저 기반 도구는 사용성 문제는 해결해 주지만 보안 문제를 만들어 냅니다. Base64로 인코딩된 값은 API 키, 토큰, 인증서 데이터 같은 시크릿인 경우가 많습니다. 이런 것을 웹사이트에 붙여넣는 순간 애초에 인코딩한 의미가 사라져버립니다.</p>

<h2>로컬에서 한 번의 클릭으로 인코딩·디코딩</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>는 macOS용 41가지 개발자 도구 모음의 일부로 Base64 인코더와 디코더를 제공합니다. 인코딩된 문자열을 붙여넣으면 즉시 디코딩된 결과를 볼 수 있습니다. 방향을 바꿔서 평문을 Base64로 인코딩할 수도 있습니다. 모든 작업이 사용자의 기기 안에서만 이루어지며, 어떤 데이터도 맥을 벗어나지 않습니다.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Base64 encoder and decoder tool on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>흔한 사용 사례</h3>
<p>YAML 매니페스트에 Base64로 저장된 Kubernetes 시크릿을 디코딩하는 일. Base64url로 인코딩된 JWT의 페이로드를 확인하는 일. 이미지를 HTML에 삽입하기 위해 Base64 데이터 URI로 변환하는 일. HTTP 기본 인증 헤더에 쓸 자격 증명을 인코딩하는 일. 이 모든 작업은 터미널 명령이나 브라우저 왕복 대신 붙여넣고 읽는 한 번의 상호작용으로 끝납니다.</p>

<h3>클립보드 인식</h3>
<p>Base64 문자열을 복사하고 메뉴 바에서 Bellows를 엽니다. 앱이 클립보드의 인코딩된 콘텐츠를 감지해 Base64 도구를 제안하므로, 직접 찾아 이동하는 단계를 건너뛸 수 있습니다.</p>

<h3>설치 부담 없음</h3>
<p>유지관리가 필요한 Homebrew 포뮬러나 파이썬 스크립트와 달리, Bellows는 Mac App Store에서 한 번 설치하면 자동으로 업데이트됩니다. Apple Silicon과 Intel 맥 모두에서 별도의 의존성 없이 네이티브로 작동합니다.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Mac App Store에서 Bellows 받기</a></p>
`,
  },

  "devtoys-alternative-mac": {
    slug: "devtoys-alternative-mac",
    title: "맥용 DevToys 대안",
    description:
      "DevToys는 올인원 개발자 도구 모음이라는 아이디어를 Windows에 가져왔지만, macOS 버전은 Mac 사용자가 기대하는 네이티브 경험을 따라잡지 못했습니다.",
    date: "2026-09-06",
    readTime: "5분 읽기",
    content: `
<p>Windows에서 DevToys를 써본 적이 있다면 그 매력을 알 것입니다: JSON 포맷팅, Base64, JWT 디코딩, 해시 생성 등 십여 가지 유틸리티를 하나의 앱에서 처리할 수 있습니다. 브라우저 탭도, CLI 명령어도, 맥락 전환도 필요 없습니다. 그러다 macOS로 넘어와서 같은 것을 찾아봅니다.</p>

<p>DevToys의 macOS 버전은 존재하지만, 언제나 네이티브 앱이라기보다는 이식판처럼 느껴졌습니다. UI는 macOS의 관례를 따르지 않고, Apple Silicon에서 성능이 처지기도 하며, 크로스 플랫폼 프레임워크의 무게를 그대로 안고 있습니다. 소프트웨어 품질 때문에 Mac을 선택했다면 그 격차가 눈에 띌 수밖에 없습니다.</p>

<h2>Mac 개발자가 실제로 원하는 것</h2>
<p>macOS 사용자는 앱이 이 플랫폼에 자연스럽게 녹아들기를 기대합니다. 네이티브 사이드바, 표준 키보드 단축키, 제대로 된 다크 모드 지원, 그리고 메뉴 바 같은 시스템 기능과의 통합을 의미합니다. 이는 단순한 미적 취향이 아니라, 얼마나 빠르게 들어가서 작업을 끝내고 빠져나올 수 있는지에 직접 영향을 미칩니다.</p>

<p>개발자 도구 앱은 집중해서 작업하는 세션들 사이의 틈새에서 살아갑니다. 즉시 실행되어야 하고, 마찰 없이 입력을 받아들여야 하며, 작업이 끝나면 사라져야 합니다. 조금이라도 지연되거나 UI가 헷갈리면 그 목적을 거스르게 됩니다.</p>

<h2>41가지 도구를 갖춘 Mac 네이티브 대안</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>는 macOS를 위해 Swift로 만들어졌습니다. NavigationSplitView 사이드바를 사용해 포맷터, 인코더, 생성기, 변환기, 텍스트 도구라는 다섯 카테고리에 걸쳐 41가지 도구를 정리해 두었습니다. 메뉴 바 앱과 독립된 창 모드로 모두 실행할 수 있어, 작업 방식에 맞게 선택할 수 있습니다.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows as a native macOS DevToys alternative with NavigationSplitView sidebar" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>DevToys와의 비교</h3>
<p>두 앱 모두 JSON 포맷팅, 인코딩/디코딩, 해싱, UUID 생성, 색상 변환 같은 핵심 영역을 다룹니다. Bellows가 다른 지점은 플랫폼 통합입니다. 클립보드 감지는 방금 복사한 내용을 바탕으로 알맞은 도구를 제안합니다. 메뉴 바 접근 덕분에 앱을 찾기 위해 Cmd-Tab을 누를 필요가 없습니다. 최근 사용 목록은 자주 쓰는 도구를 상단에 노출합니다. 사소해 보이지만, 하루에도 수백 번 반복되는 상호작용에서 그 차이가 쌓입니다.</p>

<h3>완전한 오프라인 작동</h3>
<p>DevToys와 마찬가지로 Bellows도 완전히 오프라인으로 작동합니다. 데이터가 기기를 벗어나지 않고, 계정도 필요 없으며, 텔레메트리도 없습니다. 자격 증명, 토큰, 독점 데이터를 다루는 개발자에게 이는 기본 요건이지만, 명시적으로 확인해 둘 가치가 있습니다.</p>

<h3>네이티브 성능</h3>
<p>Bellows는 Electron이나 크로스 플랫폼 툴킷이 아니라 네이티브 macOS 프레임워크로 만들어졌기 때문에 즉시 실행되고 메모리 사용량도 최소한입니다. 네이티브 껍데기를 두른 웹 앱이 아니라 진짜 시스템 유틸리티처럼 동작합니다.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Mac App Store에서 Bellows 받기</a></p>
`,
  },

  "jwt-decoder-mac": {
    slug: "jwt-decoder-mac",
    title: "맥용 JWT 디코더 — 붙여넣고 바로 확인",
    description:
      "jwt.io에 JWT를 붙여넣어 클레임을 읽는 방식은 유효한 토큰을 제3자 웹사이트로 그대로 전송했다는 사실을 깨닫기 전까지만 통합니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>요청 헤더나 로그 파일에서 JWT 하나를 가져옵니다. 점으로 구분된 길고 사람 눈에는 아무 의미 없는 문자열입니다. 만료 클레임을 확인하거나, 발급자를 검증하거나, 어떤 스코프가 들어 있는지 봐야 합니다. 그래서 jwt.io를 열고 토큰을 붙여넣은 뒤 오른쪽 창에서 디코딩된 페이로드를 읽습니다.</p>

<p>이 워크플로에는 문제가 있습니다: 방금 살아 있는 인증 토큰을 자신이 관리하지 않는 웹사이트로 네트워크를 통해 전송한 것입니다. JWT 페이로드에는 사용자 ID, 이메일 주소, 역할, 권한 정보가 담겨 있는 경우가 많습니다. 토큰 자체가 여전히 유효할 수도 있습니다. jwt.io가 신뢰할 만한 사이트라 해도, 회사의 보안 정책은 이를 허용하지 않을 수 있습니다.</p>

<h2>JWT가 실제로 담고 있는 것</h2>
<p>JSON 웹 토큰은 점으로 구분된 세 부분으로 이루어져 있습니다: 헤더(알고리즘과 타입), 페이로드(만료 시간, 발급자, 주체, 커스텀 데이터 등 클레임), 그리고 서명입니다. 헤더와 페이로드는 그저 Base64url로 인코딩된 JSON일 뿐입니다. 이를 읽는 데 서버나 특별한 라이브러리가 필요한 것이 아니라 Base64 디코더와 JSON 포맷터만 있으면 됩니다. 하지만 매번 터미널에서 수동으로 이 작업을 하는 것은 번거롭습니다.</p>

<h2>맥에서 로컬로 JWT 디코딩하기</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>는 토큰을 세 부분으로 분리하고 디코딩된 헤더와 페이로드를 포맷된 JSON으로 보여주는 전용 JWT 디코더를 포함합니다. 토큰을 붙여넣으면 클레임이 바로 보입니다. 네트워크 요청도, 제3자 서버도, 살아 있는 토큰이 유출될 위험도 없습니다.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows JWT decoder showing decoded header and payload on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>클립보드 인식</h3>
<p>브라우저 개발자 도구, 로그 파일, 또는 Slack 메시지에서 JWT를 복사합니다. Bellows를 열면 클립보드에서 토큰 형식을 감지해 즉시 JWT 디코더를 제안합니다. 디코딩된 페이로드가 한 단계 만에 나타납니다.</p>

<h3>만료 여부를 한눈에 확인</h3>
<p>JWT를 디코딩하는 가장 흔한 이유는 만료 여부를 확인하기 위해서입니다. <code>exp</code> 클레임은 유닉스 타임스탬프여서 기계에게는 쉽지만 사람에게는 아무 의미가 없습니다. 디코딩된 페이로드를 보면 <code>iss</code>, <code>sub</code>, <code>aud</code> 같은 다른 클레임과 함께 만료 시간을 머릿속으로 타임스탬프를 변환하지 않고도 빠르게 읽을 수 있습니다.</p>

<h3>더 큰 도구 모음의 일부</h3>
<p>JWT 디코딩은 종종 관련 작업으로 이어집니다: 클레임 안에 있는 Base64 값을 디코딩하거나, 문자열을 해싱해서 지문과 비교하거나, 페이로드에 저장된 리다이렉트 URI를 URL 디코딩하는 일 등입니다. 같은 앱 안에 41가지 도구가 있으면 이런 후속 작업을 위해 다른 유틸리티로 전환할 필요가 없습니다.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Mac App Store에서 Bellows 받기</a></p>
`,
  },

  "url-encoder-decoder-mac": {
    slug: "url-encoder-decoder-mac",
    title: "맥용 URL 인코더 및 디코더",
    description:
      "%20과 %3D로 가득한 퍼센트 인코딩된 URL을 읽는 것은 모든 공백이 숫자로 바뀐 문장을 읽는 것과 같습니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>서버 로그에서 URL 하나를 가져왔더니 이렇게 생겼습니다: <code>https://example.com/search?q=hello%20world&redirect=https%3A%2F%2Fother.com%2Fpath</code>. 쿼리 파라미터를 읽어야 하지만, 퍼센트 인코딩 때문에 한눈에 알아보기가 거의 불가능합니다. 그래서 브라우저 도구에 붙여넣고, 디코딩하고, 결과를 읽은 다음 무언가를 테스트하기 위해 수정된 버전을 다시 인코딩합니다. 사소한 작업 하나에 웹사이트를 두 번이나 왕복하는 셈입니다.</p>

<p>URL 인코딩은 개발자가 끊임없이 다루면서도 잘 신경 쓰지 않는 대상입니다 — 깨진 리다이렉트, 잘못된 쿼리 문자열, 또는 이중으로 인코딩된 파라미터가 5분짜리 작업을 한 시간짜리 디버깅 세션으로 바꿔놓기 전까지는 말입니다.</p>

<h2>URL 인코딩이 실제 문제를 일으킬 때</h2>
<p>이중 인코딩은 대표적인 함정입니다. URL이 애플리케이션에서 한 번 인코딩되고 미들웨어 계층에서 또 한 번 인코딩되면 <code>%20</code>이 <code>%2520</code>으로 바뀝니다. 이를 진단하려면 URL을 단계별로 디코딩하면서 추가 인코딩이 정확히 어디서 끼어들었는지 확인해야 합니다. Terminal에서 <code>python3 -c "import urllib.parse; print(urllib.parse.unquote('...'))"</code>로 이 작업을 할 수는 있지만, 긴 URL의 경우 느리고 실수하기 쉽습니다.</p>

<p>인코딩 실수는 OAuth 흐름, 웹훅 URL, 그리고 리다이렉트 URI가 정확히 일치해야 하는 API 콜백도 망가뜨립니다. 빠르게 인코딩과 디코딩을 할 수 있으면 앱이 보내는 값과 서버가 기대하는 값을 비교할 수 있습니다.</p>

<h2>URL을 즉시 인코딩·디코딩하기</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>는 41가지 개발자 도구 중 하나로 URL 인코더와 디코더를 제공합니다. 인코딩된 URL을 붙여넣으면 읽기 쉬운 버전을 볼 수 있습니다. 평문 URL을 입력하면 올바르게 인코딩된 결과를 얻습니다. 클릭 한 번으로 인코딩과 디코딩을 전환할 수 있으며, 결과는 실시간으로 갱신됩니다.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows URL encoder and decoder tool on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>리다이렉트 디버깅</h3>
<p>OAuth와 SSO 흐름은 리다이렉트 URI를 URL로 인코딩된 쿼리 파라미터로 전달합니다. 리다이렉트가 실패하면 첫 단계는 URL을 디코딩해서 목표 값이 등록된 콜백과 일치하는지 확인하는 것입니다. 로컬 도구가 있으면 IDE를 벗어나거나 민감할 수 있는 콜백 URL을 공개 웹사이트에 붙여넣지 않고도 이 작업을 할 수 있습니다.</p>

<h3>쿼리 문자열 다루기</h3>
<p>URL 파라미터를 통해 복잡한 필터나 검색어를 받는 API는 <code>&</code>, <code>=</code>, <code>+</code>, 공백 같은 특수 문자를 신중하게 인코딩해야 하는 경우가 많습니다. 전용 인코더를 사용하면 해당 맥락에서 어떤 문자를 이스케이프해야 하는지 추측하지 않고도 올바른 결과를 얻을 수 있습니다.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Mac App Store에서 Bellows 받기</a></p>
`,
  },

  "hash-generator-mac-app": {
    slug: "hash-generator-mac-app",
    title: "맥용 해시 생성기 — MD5, SHA-256 등",
    description:
      "터미널 명령어로 파일 무결성을 검증하거나 비밀번호 해시를 생성하려면 알고리즘마다 다른 플래그를 매번 기억해야 합니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>GitHub에서 바이너리 파일을 다운로드했는데 릴리스 페이지에 SHA-256 체크섬이 적혀 있습니다. 이를 검증하려면 Terminal을 열고 <code>shasum -a 256 ~/Downloads/file.tar.gz</code>를 입력한 다음 계산이 끝나기를 기다리고, 64자리 16진수 문자열 두 개를 직접 나란히 놓고 비교해야 합니다. 글자 하나만 틀려도 파일이 손상된 건지 해시를 잘못 읽은 건지 알 수 없습니다.</p>

<p>혹은 문자열의 MD5 해시를 생성해야 할 수도 있습니다 — 캐시 키를 위해서든, Gravatar URL을 위해서든, 아니면 여전히 MD5 서명을 쓰는 레거시 API를 위해서든 말이죠. macOS에서는 <code>md5 -s "text"</code>이지만 Linux에서는 <code>md5sum</code>입니다. 사소한 차이지만, 시스템을 오갈 때마다 발목을 잡기에는 충분합니다.</p>

<h2>터미널에서의 해싱: 작동은 하지만 겨우</h2>
<p>macOS에는 <code>md5</code>, <code>shasum</code>, <code>openssl dgst</code>가 내장되어 있어 대부분의 알고리즘을 커버합니다. 하지만 각 도구마다 문법이 다릅니다. <code>md5</code>는 문자열 입력에 <code>-s</code>를 사용합니다. <code>shasum</code>은 알고리즘을 선택할 때 <code>-a</code>를 씁니다. <code>openssl dgst</code>는 <code>-sha256</code>이나 <code>-md5</code>를 플래그로 요구합니다. man 페이지를 확인하지 않고 알고리즘을 고르고 문자열을 해싱할 수 있는 단일 명령어는 없습니다.</p>

<p>가끔 빠른 해시가 필요한 개발자에게는, 이런 변형들을 기억하는 데 드는 인지적 부담이 작업의 단순함에 비해 지나치게 큽니다.</p>

<h2>한 번의 붙여넣기로 해시 생성하기</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>는 MD5, SHA-1, SHA-256, SHA-384, SHA-512를 비롯한 다른 일반적인 알고리즘을 지원하는 해시 생성기를 포함합니다. 입력값을 입력하거나 붙여넣고, 알고리즘을 선택하면 해시가 즉시 나타납니다. 기억해야 할 플래그도, 찾아봐야 할 문법도 없습니다.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows hash generator showing MD5 and SHA-256 output on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>다운로드 검증하기</h3>
<p>릴리스 페이지에 체크섬이 제공되면 다운로드한 파일과 비교하고 싶을 것입니다. 시각적인 도구에서 해시를 생성하면 터미널 창에서 두 문자열을 눈으로 대조하는 것보다 훨씬 쉽게 비교할 수 있습니다 — 특히 64자리인 SHA-256 해시라면 더욱 그렇습니다.</p>

<h3>API 서명과 캐시 키</h3>
<p>일부 API는 요청 인증을 위해 HMAC이나 해시 기반 서명을 요구합니다. 다른 API는 MD5나 SHA 해시를 캐시 키나 콘텐츠 식별자로 사용합니다. 요청 본문이나 문자열의 해시를 빠르게 생성할 수 있으면 디버깅 중에 구현이 기대값과 일치하는지 확인할 수 있습니다.</p>

<h3>오프라인이며 안전함</h3>
<p>해싱할 입력값에는 비밀번호, API 시크릿, 내부 식별자 같은 민감한 데이터가 담겨 있을 수 있습니다. Bellows는 네트워크 접근 없이 완전히 맥 안에서 실행되므로, 해싱하는 어떤 것도 기기를 벗어나지 않습니다.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Mac App Store에서 Bellows 받기</a></p>
`,
  },

  "regex-tester-mac-app": {
    slug: "regex-tester-mac-app",
    title: "맥용 정규식 테스터 — 네이티브 앱, 오프라인 작동",
    description:
      "실시간 피드백 없이 정규식을 작성하는 것은 구문 강조 없이 코드를 편집하는 것과 같습니다 — 기술적으로는 가능하지만 불필요하게 고통스럽습니다.",
    date: "2026-09-06",
    readTime: "5분 읽기",
    content: `
<p>이메일 주소를 검증하거나, 로그 줄에서 타임스탬프를 추출하거나, 가끔 쉼표가 인용부호 안에 들어 있는 CSV 필드를 파싱하기 위해 정규식이 필요합니다. 패턴을 작성하고 코드 안의 샘플 문자열 하나로 테스트해 봤더니 예외 케이스에서 실패한다는 걸 발견하고, 수정하고, 다시 빌드하고, 다시 테스트합니다. 매 반복마다 컴파일-실행-확인에 30초가 걸리고, 대부분의 정규식 패턴은 안정적으로 작동하기까지 대여섯 번의 반복이 필요합니다.</p>

<p>대안은 regex101.com입니다 — 매칭을 실시간으로 보여주고, 패턴의 각 부분을 설명해 주며, 여러 입력값에 동시에 테스트할 수 있게 해주는 훌륭한 도구입니다. 하지만 브라우저에서 실행되기 때문에 테스트 데이터(로그 줄, 사용자 레코드, API 응답)를 공개 웹사이트에 붙여넣어야 하고, 인터넷 연결도 필요합니다.</p>

<h2>정규식에서 실시간 피드백이 중요한 이유</h2>
<p>정규 표현식은 본질적으로 밀도가 높습니다. <code>.*</code>와 <code>.*?</code>(탐욕적 매칭과 게으른 매칭)의 차이가 패턴이 한 줄에 매칭되는지 파일 전체에 매칭되는지를 좌우할 수 있습니다. 룩어헤드, 문자 클래스, 캡처 그룹은 머릿속으로 추론하기 어려운 방식으로 상호작용합니다. 패턴을 입력하는 동안 매칭이 강조 표시되는 것을 보면 정규식이 추측 게임에서 시각적이고 반복적인 과정으로 바뀝니다.</p>

<p>이것이 브라우저 기반 테스터가 인기 있는 이유입니다 — 소스 코드에 정규식을 작성하는 것만으로는 얻을 수 없는 피드백 루프를 제공합니다. 문제는 브라우저, 인터넷 연결, 그리고 테스트 데이터가 비공개로 유지된다는 신뢰가 필요하다는 점입니다.</p>

<h2>맥에서 로컬로 정규식 테스트하기</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>는 41가지 개발자 도구 중 하나로 정규식 테스터를 포함합니다. 패턴을 입력하고 테스트 문자열을 붙여넣으면 매칭이 실시간으로 강조 표시됩니다. 패턴을 조정하면 결과가 즉시 업데이트됩니다 — 컴파일 단계도, 페이지 새로고침도, 네트워크 요청도 없습니다.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows regex tester with live match highlighting on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>흔한 패턴을 더 쉽게</h3>
<p>로그 파일에서 날짜 추출하기(<code>\\d{4}-\\d{2}-\\d{2}</code>). 국가 코드가 있을 수도 없을 수도 있는 전화번호 검증. 자유 형식 텍스트에서 URL 매칭. 필드가 인용부호로 감싸질 수 있는 CSV나 TSV 같은 구조화된 데이터 파싱. 이런 패턴은 개념적으로는 단순하지만 예외 케이스에서 까다로워지며, 실시간 테스터를 사용하면 그 예외 케이스가 프로덕션에 도달하기 전에 잡아낼 수 있습니다.</p>

<h3>어떤 데이터도 맥을 벗어나지 않음</h3>
<p>테스트 데이터에 서버 로그, 사용자 정보, 내부 시스템 출력이 포함되어 있다면 정규식 패턴을 오프라인으로 테스트하는 것은 단순히 편리한 것이 아니라 책임 있는 선택입니다. Bellows는 네트워크 접근 없이 완전히 사용자의 기기 안에서 실행됩니다.</p>

<h3>언제나 사용 가능</h3>
<p>Bellows는 메뉴 바에 자리하고 있어 정규식 테스터가 클릭 한 번 거리에 있습니다. 찾아야 할 브라우저 탭도, 기억해야 할 URL도, 로딩 스피너도 없습니다. 열고, 패턴을 테스트하고, 결과를 복사하고, 닫습니다. 전체 상호작용은 몇 초면 끝납니다.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Mac App Store에서 Bellows 받기</a></p>
`,
  },

  "color-picker-hex-rgb-mac": {
    slug: "color-picker-hex-rgb-mac",
    title: "맥용 Hex 및 RGB 색상 선택기",
    description:
      "hex 코드, RGB 값, HSL 표기법을 손으로 변환하는 것은 하루에도 여러 번 해야 하는 일이라면 오류가 생기기 쉽고 불필요한 일입니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>디자이너가 hex로 색상을 보냅니다: <code>#1A73E8</code>. CSS 프레임워크는 HSL을 원합니다. iOS 코드베이스는 0에서 1 사이의 RGB 값이 필요합니다. Android 프로젝트는 ARGB 정수를 사용합니다. 색상 하나에 형식 네 가지, 그리고 이를 서로 변환하기 위해 또 브라우저 탭을 엽니다.</p>

<p>색상 변환은 사소한 수학입니다(hex를 RGB로 바꾸는 것은 16진수를 10진수로 바꾸는 것에 불과합니다). 하지만 레이아웃이나 스타일링에 집중하려는 와중에 세 채널을 머릿속으로 계산하는 것은 불필요한 방해입니다.</p>

<h2>macOS가 제공하는 것</h2>
<p>macOS에는 일부 앱에서 시스템 색상 패널을 통해 접근할 수 있는 내장 색상 선택기가 있습니다. RGB 슬라이더와 hex 필드를 보여주지만, 형식을 프로그래밍적으로 변환하기 위한 것이 아니라 시각적으로 색상을 고르기 위해 설계되었습니다. hex 코드를 붙여넣고 HSL 값을 얻거나 RGB 정수를 입력하고 hex 출력을 복사할 손쉬운 방법이 없습니다. 그리고 시스템 전역에서 사용할 수 있는 것이 아니라 특정 앱 안에 묻혀 있습니다.</p>

<h2>형식 사이에서 색상을 즉시 변환하기</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>는 41가지 개발자 도구 중 하나로 색상 변환기를 포함합니다. 지원되는 형식(hex, RGB, HSL) 중 어느 것으로든 색상을 입력하면 다른 모든 형식에 해당하는 값을 볼 수 있습니다. 필요한 표기법을 클릭 한 번으로 복사할 수 있습니다.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows color picker showing hex, RGB, and HSL conversion on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>디자인에서 코드로</h3>
<p>Figma는 색상을 hex로 내보냅니다. Tailwind CSS는 커스텀 색상 값을 사용합니다. SwiftUI는 소수점 값을 사용하는 <code>Color(red:green:blue:)</code>를 원합니다. Android XML은 <code>#AARRGGBB</code>를 사용합니다. 모든 형식을 한 번에 볼 수 있으면 암산과 변환 웹사이트 왕복이 사라집니다.</p>

<h3>대비와 가독성 확인</h3>
<p>색상이 숫자 값과 함께 렌더링되어 보이면 텍스트 색상이 배경과 비교해 읽기 편한지 빠르게 확인할 수 있습니다. 스타일시트의 모든 색상 조합마다 별도의 대비 검사기로 전환하는 것보다 빠릅니다.</p>

<h3>메뉴 바 접근</h3>
<p>CSS를 작성하다가 빠르게 변환이 필요하신가요? 메뉴 바의 Bellows 아이콘을 클릭하고, 색상 도구를 선택하고, hex 코드를 붙여넣고, RGB 값을 복사하세요. 전체 상호작용은 5초 이내에 끝나고 에디터를 벗어날 필요도 없습니다.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Mac App Store에서 Bellows 받기</a></p>
`,
  },

  "uuid-generator-mac": {
    slug: "uuid-generator-mac",
    title: "맥용 UUID 생성기 — 즉시 복사",
    description:
      "터미널이나 코드 스니펫으로 UUID를 생성하는 것은 완전히 단순해야 할 작업에 불필요한 마찰을 더합니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>UUID가 필요합니다. 단위 테스트를 작성하면서 목(mock) 객체를 위한 고유 식별자가 필요할 수도 있습니다. 데이터베이스를 시딩하면서 기본 키가 필요할 수도 있습니다. 설정 파일에 새 엔티티를 만드는데 스키마가 UUID를 요구할 수도 있습니다. 이유가 무엇이든, 하던 일을 멈추고 어딘가에서 UUID를 생성한 뒤 복사해서 다시 코드에 붙여넣어야 합니다.</p>

<p>이런 일이 워낙 자주 일어나기 때문에 대부분의 개발자는 몸에 밴 해결책을 가지고 있습니다: Terminal의 <code>uuidgen</code>, 브라우저 북마크, 아니면 에디터의 스니펫. 모두 작동은 합니다. 하지만 어느 것도 완전히 마찰이 없지는 않습니다.</p>

<h2>터미널 방식</h2>
<p>macOS에는 <code>uuidgen</code>이 내장되어 있어 UUID v4를 stdout으로 출력합니다. 빠르고 안정적입니다. 하지만 기본적으로 대문자로 출력되고(일부 시스템은 소문자를 기대합니다), 한 번에 UUID 하나만 생성하며, 사용하려면 Terminal로 전환해서 명령어를 실행하고 출력을 선택해 복사한 뒤 다시 돌아가야 합니다. UUID 하나라면 괜찮습니다. 테스트 데이터베이스를 시딩하기 위해 열 개가 필요하다면 지루한 작업이 됩니다.</p>

<h2>메뉴 바에서 UUID 생성하기</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>는 41가지 개발자 도구 중 하나로 UUID 생성기를 포함합니다. 메뉴 바에서 열어 UUID를 생성하고 클립보드에 복사하세요. 또 필요하신가요? 다시 생성하면 됩니다. 이 도구는 언제나 클릭 한 번 거리에 있고, 오프라인으로 작동하며, 코드나 설정, 데이터베이스 시드 파일에 바로 붙여넣을 수 있는 표준 v4 UUID를 생성합니다.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows UUID generator with instant copy on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>테스트와 목 데이터</h3>
<p>단위 테스트와 통합 테스트는 종종 사실적으로 보이는 고유 식별자가 필요합니다. 모든 곳에 동일한 UUID를 하드코딩하면 테스트가 병렬로 실행되거나 특정 ID에 우연히 의존하게 될 때 미묘한 버그로 이어집니다. 각 테스트 픽스처마다 새로운 UUID를 생성하는 것은 간단한 습관이지만 이런 종류의 불안정한 테스트 실패를 예방합니다.</p>

<h3>데이터베이스 시딩</h3>
<p>개발용 데이터베이스에 샘플 데이터를 채울 때는 프로덕션 데이터나 다른 개발자의 시드 파일과 충돌하지 않을 고유한 기본 키가 필요합니다. 필요할 때마다 UUID를 생성하는 것이 정수를 증가시키거나 겹칠 수 있는 예측 가능한 패턴을 사용하는 것보다 깔끔합니다.</p>

<h3>언제나 사용 가능</h3>
<p>Bellows가 메뉴 바에 상주하기 때문에, Terminal을 열거나 앱을 전환하거나 북마크로 이동할 필요 없이 UUID 생성기에 접근할 수 있습니다. 클릭하고, 생성하고, 복사하고, 붙여넣습니다. 작업 흐름의 방해는 맥락 전환이 아니라 몇 초 단위로 측정됩니다.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Mac App Store에서 Bellows 받기</a></p>
`,
  },

  "all-in-one-dev-tools-mac-offline": {
    slug: "all-in-one-dev-tools-mac-offline",
    title: "맥용 올인원 개발자 도구 — 41가지 도구, 완전한 오프라인",
    description:
      "인코딩을 위한 브라우저 탭, 해싱을 위한 터미널 창, 포맷팅을 위한 북마크 — 개발자의 소소한 작업들은 십여 군데에 흩어져 있습니다.",
    date: "2026-09-06",
    readTime: "5분 읽기",
    content: `
<p>일반적인 디버깅 세션에서 사용하는 도구의 개수를 세어 보세요. API 응답을 읽기 위한 JSON 포맷터. 인증 헤더를 위한 Base64 디코더. 토큰 클레임을 확인하기 위한 JWT 검사기. 리다이렉트 체인을 풀기 위한 URL 디코더. 체크섬을 검증하기 위한 해시 생성기. 브라우저 탭 다섯 개가 열려 있고, 이제 다섯 개의 웹사이트가 사용자의 데이터를 가지고 있으며, 실제 문제에서 주의를 앗아간 맥락 전환이 다섯 번 일어났습니다.</p>

<p>이는 복잡한 작업이 아닙니다. 각각은 실제로 10초짜리 작업입니다. 하지만 올바른 도구를 찾고, 전환하고, 입력값을 붙여넣고, 출력값을 복사하는 오버헤드는 세션당 몇 분, 일주일에 몇 시간으로 쌓입니다. 더 나쁜 것은, 복잡한 시스템을 머릿속에 붙잡고 있어야 할 바로 그 순간에 집중력을 흩어놓는다는 점입니다.</p>

<h2>현재의 상황</h2>
<p>개발자들은 여러 출처에서 개인 도구 모음을 조합해 왔습니다. jwt.io, regex101.com, jsonformatter.org 같은 사이트의 브라우저 북마크. <code>.zshrc</code>에 있는 셸 별칭과 함수. 포맷팅이나 인코딩을 추가하는 VS Code 확장. <code>jq</code>나 <code>htop</code> 같은 Homebrew 패키지. 각 도구는 한 가지 문제를 해결하기 위해 추가되었고, 서로 대화하지 않습니다.</p>

<p>그 결과는 기술적으로는 작동하지만 일관성이 없는 도구 모음입니다. 다음 유틸리티가 어디에 있을지 예측할 수 없습니다. 한 도구의 출력을 수동으로 복사해서 다른 도구에 붙여넣지 않고는 작업을 연결할 수 없습니다. 그리고 웹 기반 도구가 데이터를 비공개로 유지하는지 보장할 수도 없습니다.</p>

<h2>하나의 네이티브 macOS 앱에 담긴 41가지 도구</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>는 41가지 개발자 도구를 다섯 가지 카테고리에 걸쳐 하나의 macOS 애플리케이션으로 통합했습니다:</p>

<ul>
<li><strong>포맷터</strong> — JSON, XML, SQL, HTML 등. 지저분한 입력을 붙여넣으면 깔끔한 출력을 얻습니다.</li>
<li><strong>인코더</strong> — Base64, URL 인코딩, HTML 엔티티, JWT 디코딩. 양방향으로 인코딩과 디코딩이 가능합니다.</li>
<li><strong>생성기</strong> — UUID, 해시(MD5, SHA-256, SHA-512), Lorem Ipsum, 비밀번호. 한 단계로 생성하고 복사합니다.</li>
<li><strong>변환기</strong> — 색상(hex/RGB/HSL), 진법, 타임스탬프, 단위. 암산 없이 형식 간 변환이 가능합니다.</li>
<li><strong>텍스트 도구</strong> — 정규식 테스터, 차이 비교 도구, 대소문자 변환기, 줄 정렬기, 문자 카운터. 매일 손이 가는 텍스트 조작 유틸리티입니다.</li>
</ul>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows showing all 41 developer tools organized in categories on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>클립보드 감지</h3>
<p>클립보드에 무언가를 복사하고 Bellows를 엽니다. 앱이 클립보드 콘텐츠를 분석해서 가장 관련성 높은 도구를 제안합니다. JWT를 복사하면 디코더를 제안합니다. JSON을 복사하면 포맷터를 보여줍니다. Base64 문자열을 복사하면 인코더를 가리킵니다. 도구를 선택하는 단계 자체가 사라집니다 — 앱이 대신 해줍니다.</p>

<h3>메뉴 바와 창 모드</h3>
<p>Bellows는 빠르고 일회성인 작업을 위한 메뉴 바 앱으로 실행됩니다: 아이콘을 클릭하고, 도구를 사용하고, 닫습니다. 여러 정규식 패턴을 테스트하거나 여러 색상 값을 변환하는 것처럼 더 긴 세션이 필요할 때는 창 모드로 전환해서 에디터 옆에 두고 사용할 수 있습니다. 두 모드 모두 카테고리를 둘러볼 수 있는 NavigationSplitView 사이드바를 갖춘 동일한 인터페이스를 사용합니다.</p>

<h3>완전한 오프라인 작동</h3>
<p>모든 도구는 사용자의 맥 안에서 로컬로 실행됩니다. 네트워크 요청도, 계정도, 텔레메트리도 없습니다. 이는 철학적인 입장이 아니라 토큰, 시크릿, 자격 증명, 독점 데이터를 매일 다루는 개발자에게 실질적으로 필요한 요건입니다. 입력값은 항상 기기 안에 머무릅니다.</p>

<h3>최근 사용 추적</h3>
<p>가장 자주 사용하는 도구가 사이드바 상단에 노출됩니다. 시간이 지나면서 Bellows는 작업 흐름에 맞춰 조정되므로 필요한 도구는 언제나 손에 닿는 곳에 있고, 펼쳐야 하는 카테고리 안에 묻히지 않습니다.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Mac App Store에서 Bellows 받기</a></p>
`,
  },

  "json-validator-mac-app": {
    slug: "json-validator-mac-app",
    title: "맥용 JSON 검증기 — 오류를 즉시 찾기",
    description:
      "쉼표 하나가 빠지거나 괄호 하나가 잘못 놓이면 설정 파일 전체가 망가질 수 있고, 이를 한 줄씩 훑어보며 찾는 것은 여유가 없는 시간을 낭비합니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>빌드가 "Unexpected token in JSON at position 4,821."라는 오류로 실패합니다. 아주 훌륭하네요, 고맙습니다. 이제 4천 자짜리 설정 파일을 스크롤하며 머릿속으로 괄호를 세면서 어느 것이 짝을 이루지 않았는지 알아내야 합니다. 이는 소프트웨어 개발에서 가장 피할 수 있는 시간 낭비 중 하나이며, JSON이 사소한 실수에 전혀 관대하지 않기 때문에 끊임없이 발생합니다.</p>

<p>배열의 마지막 항목 뒤에 남은 쉼표. 키를 감싸는 인용부호 누락. 다른 곳에서 복사해온 여분의 닫는 중괄호. 이런 것들 중 무엇이든 파싱을 완전히 망가뜨리며, 오류 메시지는 실제 문제가 있는 곳이 아니라 파서가 포기한 지점을 가리키는 경우가 많습니다 — 실제 실수와는 몇 줄이나 떨어져 있는 경우가 대부분입니다.</p>

<h2>위치 번호가 도움이 되지 않는 이유</h2>
<p>대부분의 JSON 파서는 오류를 에디터에서 바로 이동할 수 있는 줄과 열이 아니라 문자 오프셋으로 보고합니다. 4,821번째 위치를 "세 번째 객체 근처, 112번째 줄"로 바꾸려면 직접 세거나 일회성 스크립트를 작성해야 합니다. 둘 다 오후 시간을 잘 쓰는 방법은 아닙니다.</p>

<p>일부 에디터는 JSON 구문 오류를 인라인으로 강조 표시해 주는데, 이는 직접 작성 중인 파일에는 도움이 됩니다. 하지만 API에서 받았거나 동료가 보냈거나 물려받은 레거시 설정 파일의 JSON이라면, 원시 텍스트를 받아 정확히 무엇이 어디서 잘못되었는지 알려주는 도구가 필요합니다.</p>

<h2>맥을 벗어나지 않고 JSON 검증하기</h2>
<p>검증까지 함께 하는 JSON 포맷터는 추측을 없애줍니다. JSON을 붙여넣으면, 형식이 잘못되었을 경우 원시 바이트 오프셋 대신 특정 줄과 문자를 가리키는 명확한 오류를 얻습니다. 유효하다면 적절한 들여쓰기로 깔끔하게 렌더링되어 구조를 시각적으로 훑어볼 수 있습니다. <a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>는 하나의 도구에서 두 경우를 모두 처리합니다 — JSON이 깨졌는지 미리 알 필요가 없습니다.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows JSON formatter validating and highlighting a syntax error on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>배포 전에 실수 잡아내기</h3>
<p>설정 파일, API 요청 본문, 픽스처 데이터는 모두 유효한 JSON에 생사가 걸려 있습니다. 설정 변경을 커밋하거나 테스트 요청을 보내기 전에 빠르게 검증을 거치면, 그렇지 않았을 경우 파이프라인 훨씬 뒤쪽에서 혼란스러운 런타임 오류로 나타났을 오타를 미리 잡아낼 수 있습니다.</p>

<h3>신뢰할 수 없는 입력값 다루기</h3>
<p>동료가 Slack에 JSON 데이터를 붙여넣거나, 완전히 신뢰하지 않는 제3자 API에서 하나를 가져올 때, 로컬에서 검증하면 파싱이 되는지 확인하려고 외부 웹사이트로 데이터를 보낼 필요가 없어집니다.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Mac App Store에서 Bellows 받기</a></p>
`,
  },

  "html-entity-encoder-mac": {
    slug: "html-entity-encoder-mac",
    title: "맥용 HTML 엔티티 인코더 및 디코더",
    description:
      "사용자가 입력한 텍스트를 안전하게 렌더링하는 것과 &amp;나 &lt;로 가득한 페이지 소스를 읽는 것은 결국 같은 지루한 변환 문제로 귀결됩니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>웹페이지의 텍스트 일부가 일반 앰퍼샌드 대신 <code>&amp;amp;</code>로 표시되는 이유를 디버깅하고 있습니다. 또는 HTML을 직접 작성하면서 부등호 기호가 태그의 시작으로 해석되지 않도록 이스케이프해야 합니다. 어느 쪽이든, HTML 엔티티를 다루고 있는 것입니다 — 올바르게 표시되거나 마크업을 망가뜨리지 않으려면 특별한 인코딩이 필요한 소수의 문자들입니다.</p>

<p>흔한 것들은 기억하기 쉽습니다: <code>&amp;</code>는 <code>&amp;amp;</code>가 되고, <code>&lt;</code>는 <code>&amp;lt;</code>가 되고, <code>&gt;</code>는 <code>&amp;gt;</code>가 됩니다. 하지만 곡선 따옴표, 줄표, 줄바꿈 없는 공백, 악센트가 있는 문자로 넘어가면 엔티티 이름이 더 이상 직관적이지 않아서 매번 참조표를 검색하게 됩니다.</p>

<h2>포맷팅만이 아니라 보안 문제</h2>
<p>HTML 엔티티 인코딩은 단순히 미적인 문제가 아닙니다. 사용자가 입력한 콘텐츠를 웹페이지에 렌더링하기 전에 인코딩하지 않는 것은 크로스 사이트 스크립팅의 전형적인 경로입니다. 애플리케이션이 댓글, 사용자 이름, 폼 입력값 같은 원시 텍스트를 표시해야 한다면, 정확히 무엇이 어떻게 인코딩되는지 이해하는 것은 깔끔해 보이는 출력을 만드는 것을 넘어 안전한 코드를 작성하는 일의 일부입니다.</p>

<p>반대로 디코딩도 그만큼 흔한 요구사항입니다: 웹페이지를 스크래핑하거나, RSS 피드를 파싱하거나, 내보낸 CMS 문서를 읽다 보면 다른 곳에서 사용하기 전에 평문 문자로 되돌려야 하는 엔티티 인코딩된 텍스트를 자주 만나게 됩니다.</p>

<h2>한 단계로 인코딩·디코딩하기</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>는 41가지 개발자 도구 중 하나로 HTML 엔티티 인코더와 디코더를 포함합니다. 원시 텍스트를 붙여넣으면 올바르게 이스케이프된 HTML 엔티티를 얻고, 인코딩된 마크업을 붙여넣으면 읽기 쉬운 텍스트를 볼 수 있습니다. 양방향 모두 즉시, 완전히 오프라인으로 처리됩니다.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows HTML entity encoder and decoder tool on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>스크래핑한 콘텐츠 정리하기</h3>
<p>RSS 피드, 내보낸 블로그 게시물, 스크래핑한 HTML에서 가져온 텍스트에는 평문 구두점이 있어야 할 자리에 엔티티 코드가 가득한 경우가 많습니다. 다른 곳에 저장하거나 표시하기 전에 대량으로 디코딩하면, 아포스트로피가 있어야 할 자리에 <code>&amp;#8217;</code>가 나타나는 페이지를 피할 수 있습니다.</p>

<h3>마크업을 직접 작성할 때</h3>
<p>HTML 템플릿이나 이메일 뉴스레터를 직접 편집하면서 눈에 보이는 텍스트에 실제 부등호나 앰퍼샌드를 포함해야 할 때, 처음부터 올바르게 인코딩하면 이메일을 이미 보낸 후에야 나타나는 렌더링 버그를 피할 수 있습니다.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Mac App Store에서 Bellows 받기</a></p>
`,
  },

  "timestamp-converter-mac": {
    slug: "timestamp-converter-mac",
    title: "맥용 유닉스 타임스탬프 변환기",
    description:
      "로그 한 줄에 1743984000이라고 적혀 있고, 이것이 3시간 전인지 3주 전인지 손으로 계산하지 않고 알아야 합니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>유닉스 타임스탬프는 기계에게는 완벽하지만 사람에게는 무용지물입니다. 모든 로그 수집기, 데이터베이스 레코드, API 응답이 시간을 1970년 1월 1일부터 흐른 초 단위 정수로 저장하는 것 같고, 모든 개발자는 언젠가 <code>1725580800</code>이 최근인지 오래된 것인지 눈대중으로 판단하려 해본 적이 있습니다.</p>

<p>보통의 대안은 빠른 구글 검색입니다 — "1725580800 to date" — 이는 작동하지만 2초짜리 조회 작업에 브라우저 왕복을 추가합니다. 아니면 언어 콘솔에서 한 줄짜리 코드를 씁니다: 브라우저 JS 콘솔에서 <code>new Date(1725580800000)</code>를 쓰면서 밀리초를 위해 1000을 곱해야 한다는 것을 기억해야 하고, 애초에 초와 밀리초를 혼동하지 않았기를 바랍니다.</p>

<h2>초 대 밀리초: 고전적인 함정</h2>
<p>유닉스 시간은 보통 초 단위지만, JavaScript의 <code>Date</code> 객체는 밀리초를 기대하며, (특히 JavaScript 기반의) 일부 API는 기본적으로 밀리초 단위 타임스탬프를 반환합니다. 이를 혼동하면 날짜가 터무니없이 미래이거나 1970년 시작 지점 근처에 멈춰 있게 됩니다 — "왜 이 날짜가 이상해 보이지"라는 문제를 디버깅하다가 모든 개발자가 적어도 한 번은 저지르는 실수입니다.</p>

<p>시간대는 또 다른 층을 더합니다. 타임스탬프는 특정 순간으로 변환되지만, 이를 로컬 시간, UTC, 서버 시간대 중 무엇으로 표시하느냐에 따라 같은 값이 완전히 다른 세 가지 시간처럼 보일 수 있습니다 — 오류를 배포와 연관 짓고자 할 때는 이 차이가 상당히 중요합니다.</p>

<h2>양방향으로 즉시 변환하기</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>는 유닉스 타임스탬프를 읽기 쉬운 날짜와 시간으로 바꿔주고, 날짜를 다시 타임스탬프로 변환해 주는 타임스탬프 변환기를 포함합니다 — 계산이 필요 없이 양방향 모두 가능합니다. 초와 밀리초의 모호함도 처리해 주므로 추측할 필요가 없습니다.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Unix timestamp converter showing date and time output on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>로그와 데이터베이스 디버깅</h3>
<p>로그 수집기, 데이터베이스 행, API 페이로드는 시간을 읽기 쉬운 문자열보다 원시 숫자로 저장하는 경우가 훨씬 많습니다. 인시던트를 추적하는 동안 몇 개의 타임스탬프를 변환하는 것은 심각한 디버깅 세션 중에 수십 번씩 일어나는 작은 작업입니다.</p>

<h3>스케줄링과 만료 로직</h3>
<p>캐시 만료, 토큰 만료, 예약된 작업 타임스탬프는 모두 내부적으로 유닉스 시간입니다. 특정 만료 값이 실제 벽시계 시간으로 무엇을 의미하는지 빠르게 확인하면 TTL 로직이 의도한 대로 작동하는지 검증하는 데 도움이 됩니다.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Mac App Store에서 Bellows 받기</a></p>
`,
  },

  "markdown-preview-mac-app": {
    slug: "markdown-preview-mac-app",
    title: "맥용 마크다운 미리보기 — 붙여넣고 바로 확인",
    description:
      "README나 풀 리퀘스트 설명을 순수 마크다운으로 작성하는 것은 헤더, 목록, 코드 블록이 실제로 어떻게 렌더링될지 추측하는 일입니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>중첩된 글머리 기호, 코드 블록 몇 개, 두 가지 접근 방식을 비교하는 표가 있는 README를 작성합니다. 에디터에서 순수 텍스트로 보면 괜찮아 보입니다. 그런데 GitHub에 푸시하니 표가 정렬이 어긋나 있고, 코드 블록 하나가 제대로 닫히지 않았으며, 어느 지점에서 우연히 들어간 빈 줄 때문에 번호 목록이 중간에 1부터 다시 시작합니다. 이제 포맷팅을 바로잡기 위해 작은 수정 커밋을 계속 올리고 있습니다.</p>

<p>마크다운은 기본적인 포맷팅이라면 기억만으로 작성할 수 있을 만큼 단순하지만, 표, 중첩 목록, 코드 펜스는 렌더러마다 미묘하게 다른 구문상의 특이점을 가지고 있습니다. GitHub Flavored Markdown은 CommonMark와 똑같지 않고, CommonMark도 정적 사이트 생성기가 쓰는 것과 똑같지 않습니다. "머릿속에서는 맞아 보인다"와 "페이지에서 제대로 렌더링된다" 사이의 간극이야말로 실시간 미리보기가 진가를 발휘하는 지점입니다.</p>

<h2>커밋으로 확인하는 것이 나쁜 워크플로인 이유</h2>
<p>README가 어떻게 렌더링되는지 보기 위해 커밋을 푸시하고, 깨진 표를 고치기 위해 또 하나를 푸시하고, 그 수정을 또 수정하기 위해 하나를 더 푸시하는 것은 실제 콘텐츠와 무관한 포맷팅 노이즈로 커밋 히스토리를 어지럽힙니다. 또한 미리보기 주기마다 푸시와 페이지 새로고침만큼의 시간이 걸린다는 뜻이기도 합니다 — 너무 느려서 확인을 아예 포기하고 괜찮기를 바라게 됩니다.</p>

<h2>입력하는 즉시 렌더링된 결과 보기</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>는 원시 마크다운을 붙여넣거나 입력하는 대로 포맷된 결과를 렌더링해 주는 마크다운 미리보기 도구를 포함합니다. 헤더, 목록, 표, 링크, 코드 블록이 모두 즉시 렌더링되므로 포맷팅 실수를 커밋에 담기 전에 잡아낼 수 있습니다.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Markdown preview tool rendering formatted text on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>README와 PR 설명 작성하기</h3>
<p>풀 리퀘스트 설명과 README 파일은 종종 리뷰어나 신규 기여자가 가장 먼저 읽는 것입니다. 제출하기 전에 헤더, 체크리스트, 링크된 이미지가 올바르게 렌더링되는지 확인하면 "포맷팅 좀 고쳐주세요"라는 댓글 한 라운드를 아낄 수 있습니다.</p>

<h3>오프라인으로 문서 작성하기</h3>
<p>비행기 안이나 인터넷이 불안정한 곳에서 문서를 작성한다고 해서 포맷팅이 제대로 렌더링되는지 확인하는 것을 포기할 필요는 없습니다. 로컬 미리보기 도구는 연결 여부와 상관없이 동일하게 작동합니다.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Mac App Store에서 Bellows 받기</a></p>
`,
  },

  "lorem-ipsum-generator-mac": {
    slug: "lorem-ipsum-generator-mac",
    title: "맥용 Lorem Ipsum 생성기 — 원하는 길이로 복사",
    description:
      "디자인 목업이나 테스트 픽스처를 자리표시자 텍스트로 채우는 일에 매번 웹사이트를 방문할 필요는 없습니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>카드 컴포넌트를 만들면서 줄바꿈이 어떻게 되는지 보려고 세 문단짜리 자리표시자 텍스트가 필요합니다. 또는 잘림 동작을 확인하기 위해 긴 문자열이 필요한 테스트 픽스처를 작성하고 있습니다. 어느 쪽이든 채움용 텍스트가 필요하며, 텍스트 필드에 "asdf asdf asdf"를 입력하는 것으로는 다룰 만한 현실적인 단어 길이나 문장 구조를 얻을 수 없습니다.</p>

<p>Lorem Ipsum은 수십 년 동안 이 문제에 대한 기본 답이었는데, 라틴어에서 파생된 이 유사 텍스트가 실제 산문을 모방하는 자연스러운 단어 및 문장 길이 분포를 가지면서도 주의를 흩트리거나 의미를 갖지 않기 때문입니다 — 독자의 눈이 실제로 읽어들이는 데 끌려가지 않으며, 레이아웃을 평가하려 할 때 정확히 필요한 특성입니다.</p>

<h2>같은 문단을 계속 복사·붙여넣는 것을 넘어서</h2>
<p>대부분의 개발자는 Lorem Ipsum 한 문단을 어딘가에 저장해 두고 계속 재사용하는데, 이는 스크롤 테스트를 위해 훨씬 긴 블록이 필요하거나 한 줄 잘림 말줄임표 동작을 확인하기 위해 훨씬 짧은 것이 필요할 때까지만 통합니다. 필요한 정확한 길이의 텍스트(문장 하나, 문단 하나, 여러 문단)를 생성하는 것이 같은 고정 블록을 재사용하며 수동으로 자르거나 복제하는 것보다 낫습니다.</p>

<h2>필요한 길이만큼 정확히 생성하기</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>는 레이아웃이나 테스트 케이스가 요구하는 길이만큼 자리표시자 텍스트를 생성해 클릭 한 번으로 복사할 수 있는 Lorem Ipsum 생성기를 포함합니다. 브라우저 탭도, 광고로 뒤덮인 생성기 사이트도, 문장 세 개를 얻기 위해 페이지 로딩을 기다릴 필요도 없습니다.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows Lorem Ipsum generator producing placeholder text on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>UI 레이아웃 프로토타이핑</h3>
<p>실제 콘텐츠가 존재하기 전에, 자리표시자 텍스트를 사용하면 디자인이 다양한 콘텐츠 길이 — 짧은 제목, 긴 제목, 두 줄로 줄바꿈되는 문단부터 다섯 줄까지 — 를 우아하게 처리하는지 평가할 수 있습니다. 서로 다른 길이의 텍스트를 빠르게 생성하면 이 평가 속도가 빨라집니다.</p>

<h3>테스트 픽스처와 시드 데이터</h3>
<p>텍스트 잘림, 글자 수 제한, 오버플로 동작을 확인하는 자동화된 테스트는 알려진 길이의 현실적인 문자열이 필요합니다. 필요할 때 생성하는 것이 수십 개의 테스트 파일에 동일한 자리표시자 문자열을 하드코딩하는 것보다 빠릅니다.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Mac App Store에서 Bellows 받기</a></p>
`,
  },

  "xml-formatter-mac": {
    slug: "xml-formatter-mac",
    title: "맥용 XML 포맷터 및 검증기",
    description:
      "SOAP 응답과 레거시 설정 파일은 여전히 들여쓰기 없는 XML로 도착하며, 포맷팅 없이 이를 읽는 것은 필요 이상으로 힘든 일입니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>JSON이 모든 주목을 받고 있지만, 여전히 많은 시스템이 XML을 사용합니다 — SOAP API, Android 레이아웃 파일, Maven의 <code>pom.xml</code>, RSS 피드, 그리고 15년 동안 데이터 형식을 바꾸지 않은 수많은 엔터프라이즈 통합들. 이런 것 중 하나가 한 줄로 압축되어 도착하면, 적절한 들여쓰기 없이 중첩 구조를 읽는 것은 정말로 어렵습니다.</p>

<p>JSON과 달리 XML은 네임스페이스, 속성, 자체 닫힘 태그도 다뤄야 하기 때문에 수동 포맷팅이 훨씬 더 오류에 취약합니다. 깊게 중첩된 SOAP 봉투에서 중첩 수준을 잘못 세는 것은 쉽게 저지를 수 있으면서도 다운스트림에서 뭔가 망가지기 전까지는 알아차리기 어렵습니다.</p>

<h2>2026년에도 여전히 중요한 이유</h2>
<p>새로운 API 설계에서 JSON이 지배적이지만, XML은 엔터프라이즈 소프트웨어, 정부 시스템, Android 개발에서 여전히 건재합니다. 은행 결제 게이트웨이, 레거시 보험 시스템, 오래된 SOAP 기반 웹 서비스와 통합한다면 언젠가 원시 XML을 읽고 디버깅해야 할 것이며, 포맷되지 않은 응답을 눈을 찌푸리며 보는 것은 생산적인 시간 사용이 아닙니다.</p>

<h2>한 번에 포맷팅하고 검증하기</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>는 중첩된 요소를 적절히 들여쓰고 형식이 잘못된 마크업 — 닫히지 않은 태그, 일치하지 않는 속성 인용부호, 깨진 네임스페이스 선언 — 을 표시해 주는 XML 포맷터를 포함합니다. 압축된 XML을 붙여넣으면 읽기 쉽고 적절히 들여쓰기된 문서를 즉시 얻을 수 있습니다.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows XML formatter showing indented nested elements on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>SOAP와 레거시 API 디버깅하기</h3>
<p>SOAP 봉투는 실제 페이로드를 여러 겹의 상용구로 감싸고 있어서, 모든 것이 한 줄에 있으면 실제로 필요한 필드를 찾는 것이 지루한 작업이 됩니다. 응답을 먼저 포맷팅하면 텍스트 벽이 탐색 가능한 트리로 바뀝니다.</p>

<h3>설정 및 빌드 파일 검토하기</h3>
<p>Android의 <code>AndroidManifest.xml</code>, Maven의 <code>pom.xml</code>, 그리고 수많은 CI 설정 형식은 내부적으로 XML입니다. 이런 것들이 프로그래밍적으로 생성되거나 수정되어 들여쓰기 없이 남으면, 빠르게 포맷팅 작업을 거치면 diff와 콘텐츠 모두 검토하기 쉬워집니다.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Mac App Store에서 Bellows 받기</a></p>
`,
  },

  "cron-expression-helper-mac": {
    slug: "cron-expression-helper-mac",
    title: "맥용 크론 표현식 도우미",
    description:
      "스케줄 표현식을 손으로 작성하고 의도한 대로 작동하기를 바라는 것은 작업이 오후 3시가 아니라 새벽 3시에 실행되는 원인이 됩니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>크론 문법은 숫자와 기호로 이루어진 다섯 개의 필드로 "공휴일을 제외한 평일 오전 9시마다" 또는 "8시부터 6시 사이 15분마다"를 표현해야 합니다. 필드는 분, 시, 일, 월, 요일 순서인데 아무도 처음에는 정확히 기억하지 못하고, 별표, 쉼표, 대시, 슬래시는 위치에 따라 각기 다른 의미를 가집니다.</p>

<p><code>0 9 * * 1-5</code>는 그럴듯해 보이지만, 이것이 오전 9시인지 오후 9시인지, 그리고 크론 구현체가 일요일을 0으로 세는지 7로 세는지에 따라 <code>1-5</code>가 월요일부터 금요일을 의미하는지 완전히 다른 것을 의미하는지 알 수 없습니다. 배포 파이프라인, 백업 작업, 예약된 리포트에서 이를 잘못 설정하면 조용한 실패이거나 불편한 시간에 작업이 실행되는 결과로 이어지며, 때로는 아무도 눈치채지 못한 채 몇 주가 지나기도 합니다.</p>

<h2>모든 크론 구현체는 저마다의 특이점이 있습니다</h2>
<p>표준 유닉스 크론, Kubernetes CronJob, AWS EventBridge, 그리고 다양한 CI 플랫폼은 모두 대략 같은 다섯 필드 문법을 사용하지만 미묘한 차이가 있습니다 — 초를 지원하는지, 요일 번호가 어떻게 작동하는지, <code>@daily</code> 같은 특정 축약 문자열이 유효한지 등입니다. 첫 배포에서 제대로 작동하는 스케줄을 작성하려면 정확히 어떤 종류의 크론을 대상으로 하는지 이해해야 합니다.</p>

<h2>표현식을 평범한 문장으로 번역하기</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>는 스케줄 문자열을 받아 실제로 무엇을 의미하는지 평범한 언어로 설명해 주는 크론 표현식 도우미를 포함해서, 예약된 작업을 어디에든 배포하기 전에 의도한 바를 확인할 수 있습니다.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows cron expression helper explaining a schedule string on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>배포 전에 확인하기</h3>
<p>잘못된 시간에 실행되는 예약 작업은 종종 조용한 실패입니다 — 아무것도 크래시하지 않고, 그저 의도하지 않은 시점에 실행될 뿐이며, 때로는 유지보수 윈도우와 겹치거나 트래픽이 몰리는 시간에 데이터베이스를 두드릴 수 있습니다. 배포 설정을 머지하기 전에 크론 문자열의 평범한 의미를 확인하면 이것이 새벽 2시의 호출로 이어지기 전에 막을 수 있습니다.</p>

<h3>다른 사람의 스케줄 읽기</h3>
<p>이미 십여 개의 크론 작업이 있는 코드베이스를 물려받으면, 어느 것이든 안전하게 변경하기 전에 각각이 무엇을 하는지 알아내야 합니다. 각 표현식을 빠르게 번역하는 것이 다섯 개의 알쏭달쏭한 필드를 한 번에 하나씩 머릿속으로 파싱하는 것보다 빠릅니다.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Mac App Store에서 Bellows 받기</a></p>
`,
  },

  "yaml-to-json-mac": {
    slug: "yaml-to-json-mac",
    title: "맥용 YAML to JSON 변환기",
    description:
      "Kubernetes 매니페스트, CI 파이프라인, 설정 파일은 모두 YAML을 사용하지만, 데이터를 검사하기 위해 실제로 필요한 도구는 보통 JSON을 기대합니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>YAML은 인프라 곳곳에 있습니다 — Kubernetes 매니페스트, GitHub Actions 워크플로, Docker Compose 파일, Ansible 플레이북. 읽기 쉽고 간결하지만, 들여쓰기가 모호해지거나 공백 대신 탭이 들어가거나 JSON만 이해하는 도구에 데이터를 넣어야 할 때까지만 그렇습니다.</p>

<p>둘 사이를 손으로 변환하는 것은 기계적이지만 지루한 작업입니다: YAML의 들여쓰기 기반 중첩이 JSON의 중괄호와 대괄호로 바뀌어야 하고, 따옴표 없는 YAML 문자열에는 따옴표가 필요하며, YAML의 더 관대한 문법(따옴표 없는 불리언, 여러 줄 문자열, 앵커와 참조)이 항상 JSON의 더 엄격한 규칙에 깔끔하게 대응되는 것도 아닙니다.</p>

<h2>두 형식이 모두 필요한 이유</h2>
<p>읽고 버전 관리하기 쉽다는 이유로 Kubernetes 매니페스트를 YAML로 작성하지만, JSON을 기대하는 스크립트나 API 호출, <code>jq</code> 파이프라인에 넣기 위해 JSON 버전이 필요할 수 있습니다. 또는 CI 파이프라인의 YAML 설정이 예상대로 파싱되지 않는 이유를 디버깅하고 있는데, 아래에 있는 JSON 구조를 보면 공백에 민감한 YAML이 때때로 그렇지 않은 방식으로 실제 중첩을 명확하게 만들어 줍니다.</p>

<h2>형식 간 즉시 변환하기</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>는 41가지 개발자 도구 중 하나로 YAML to JSON 변환기를 포함합니다. YAML을 붙여넣으면 중첩과 타입이 그대로 보존된 동등한 JSON 구조를 즉시 얻을 수 있습니다 — 수동 재포맷팅도, 들여쓰기 수준을 추측할 필요도 없습니다.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows YAML to JSON converter tool on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Kubernetes와 CI 설정 디버깅하기</h3>
<p>매니페스트가 예기치 않게 동작할 때, 기저의 JSON 구조를 보면 YAML이 실제로 어떻게 중첩되었는지에 대한 모호함이 사라집니다 — 잘못 놓인 들여쓰기가 조용히 어떤 키가 어느 부모 객체에 속하는지 바꿔놓았을 때 유용합니다.</p>

<h3>스크립트에 설정 값 넣기</h3>
<p>많은 스크립팅 및 자동화 도구는 YAML보다 JSON을 더 자연스럽게 다룹니다. 설정 파일을 한 번 변환해서 JSON 출력을 다운스트림으로 전달하는 것이, 파이프라인의 모든 스크립트에 YAML을 직접 파싱하도록 가르치는 것보다 대체로 더 간단합니다.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Mac App Store에서 Bellows 받기</a></p>
`,
  },

  "text-diff-tool-mac": {
    slug: "text-diff-tool-mac",
    title: "맥용 텍스트 비교 도구 — 두 텍스트를 나란히 비교",
    description:
      "설정 파일 두 버전, 이메일 초안, 또는 카피 한 문단이 거의 똑같아 보이는데, 바뀐 단어 하나를 눈으로 찾는 것은 생각보다 어렵습니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>Git은 이미 저장소에서 추적 중인 코드의 diff를 훌륭하게 처리해 줍니다. 하지만 버전 관리 밖에서 이루어지는 텍스트 비교도 많습니다: 변호사가 수정해서 돌려보낸 법률 조항의 두 버전, 백엔드 변경 전후의 API 응답, 동료가 "약간만 손봤다"는 마케팅 카피 한 문단. 두 버전을 나란히 놓고 눈으로 차이를 찾으려는 것은 느리고 신뢰할 수 없습니다, 특히 긴 텍스트 블록일수록 더욱 그렇습니다.</p>

<p>사람의 눈은 이런 종류의 비교에 서투른데, 차이를 찾는 것이 아니라 의미를 읽으려 하기 때문입니다 — 그래서 거의 동일한 두 문단을 특별히 멈춰서 문자 단위로 대조하지 않는 한 둘 다 "맞다"고 읽게 됩니다.</p>

<h2>Git diff를 쓸 수 없을 때</h2>
<p>비교할 가치가 있는 모든 것이 git 저장소에 있는 것은 아닙니다. 두 개의 다른 환경에서 붙여넣은 설정 값, 이메일 초안 두 개, 또는 찾기-바꾸기를 제대로 했는지 확신할 수 없는 전후 비교 모두 추적된 파일이 아니라 임의로 붙여넣은 텍스트에서 작동하는 비교 도구가 필요합니다.</p>

<h2>두 텍스트 블록을 즉시 비교하기</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>는 붙여넣은 두 텍스트 블록 사이에서 정확히 무엇이 바뀌었는지 강조해 주는 텍스트 비교 도구를 포함합니다 — 추가, 삭제, 수정 사항이 시각적으로 표시되어 직접 모든 문자를 읽을 필요가 없습니다.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows text diff tool comparing two blocks of text on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>환경 간 설정 비교하기</h3>
<p>스테이징과 프로덕션이 다르게 동작할 때, 실제 설정 값을 나란히 비교하면 배포 로그를 읽는 것보다 더 빠르게 원인을 드러내는 경우가 많습니다 — 오타가 있거나 오래된 환경 변수 하나가 강조되면 즉시 눈에 띕니다.</p>

<h3>수정된 카피 검토하기</h3>
<p>누군가 "가볍게 수정한" 문서 버전을 보내왔을 때, 전체를 다시 읽으며 눈치채기를 바라는 대신 정확히 무엇이 바뀌었는지 보면 느린 교정 작업이 빠른 시각적 확인으로 바뀝니다.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Mac App Store에서 Bellows 받기</a></p>
`,
  },

  "number-base-converter-mac": {
    slug: "number-base-converter-mac",
    title: "맥용 진법 변환기 — 16진수, 2진수, 8진수, 10진수",
    description:
      "메모리 주소, 색상 값, 파일 권한 코드를 읽는 것은 상황이 요구하는 진법과 10진수 사이를 끊임없이 변환하는 일입니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>메모리 주소가 <code>0x7ffee23a1c40</code>처럼 나타납니다. 파일 권한은 <code>0755</code>입니다. 드라이버 문서의 비트마스크는 2진수로 적혀 있습니다. 색상 채널 값을 10진수에서 두 자리 16진수로 변환해야 합니다. 이 중 개별적으로는 어려운 변환이 없지만, 특히 비트를 니블로 묶어야 하는 2진수-16진수 변환을 머릿속에서 반복적으로 하는 것은 이렇게 기계적인 작업치고는 느리고 실수하기 쉽습니다.</p>

<p>저수준 프로그래밍, 임베디드 개발, 네트워킹, 그리고 (다시 언급하지만) 일상적인 웹 개발(16진수 색상)까지 모두 진법 사이를 자주 오가야 하는 만큼, 16진수 자릿수에 대한 머릿속 조회표만으로는 숫자가 1~2바이트를 넘어가면 한계가 있습니다.</p>

<h2>사람들이 흔히 헷갈리는 지점</h2>
<p>8진수는 은근히 함정입니다. <code>644</code> 같은 파일 권한은 10진수처럼 보이지만 실제로는 8진법이며, 이를 10진수로 취급하면 실제 비트 패턴이 무엇인지 혼란스러워집니다. 2진수는 16비트를 넘어가면 다루기 어려워집니다 — 32비트 값은 2진수로 서른두 글자나 되어서, 특정 비트를 플래그 확인을 위해 분리하려 할 때 읽기 어렵고 잘못 세기 쉽습니다.</p>

<h2>네 가지 진법을 한 번에 변환하기</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>는 값을 10진수, 16진수, 8진수, 2진수로 동시에 보여주는 진법 변환기를 포함합니다. 어떤 진법으로든 숫자를 입력하면 네 가지 표현이 모두 함께 업데이트됩니다 — 각 쌍마다 별도로 변환할 필요가 없습니다.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows number base converter showing hex, binary, octal, and decimal on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>저수준 및 임베디드 작업</h3>
<p>임베디드 펌웨어나 시스템 프로그래밍에서 레지스터 값, 비트마스크, 메모리 주소를 읽으려면 16진수와 2진수 사이를 자유롭게 오가야 합니다. 10진수와 함께 둘을 동시에 보면 이미 세부 사항이 많은 작업에서 수동 변환이라는 한 단계를 덜 수 있습니다.</p>

<h3>파일 권한과 네트워킹</h3>
<p>유닉스 파일 권한, 서브넷 마스크, 네트워킹 프로토콜의 다양한 이진 플래그는 흔히 8진수나 2진수로 표현되지만 10진수로 사고됩니다. 빠른 변환은 권한 문자열이나 플래그 바이트가 실제로 무엇을 나타내는지 변경하기 전에 확인해 줍니다.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Mac App Store에서 Bellows 받기</a></p>
`,
  },

  "csv-to-json-mac": {
    slug: "csv-to-json-mac",
    title: "맥용 CSV to JSON 변환기",
    description:
      "스프레드시트 내보내기 파일을 API 호출이나 테스트 픽스처를 위한 구조화된 데이터로 바꿔야 하는데, 매번 일회성 스크립트를 작성하는 것은 과합니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>영업팀 누군가가 스프레드시트를 CSV로 내보내고 "그냥 시스템에 불러와 달라"고 요청합니다. 시스템은 JSON을 기대합니다. 그래서 CSV 파싱 라이브러리를 쓰는 짧은 Python이나 Node 스크립트를 작성하고, 열을 필드에 매핑하고, 헤더 행을 처리하고, 값 안에 쉼표가 들어 있어서 단순한 쉼표 분리 로직이 망가지지 않기를 바랍니다(보통 인용부호 안에 숨어서 망가뜨립니다).</p>

<p>이는 개발자가 매번 조금씩 다른 일회성 코드를 작성하며 반복해서 해결하는 작업입니다. CSV는 스프레드시트, 데이터베이스, 분석 도구의 내보내기 형식으로 끊임없이 등장하는 반면, 대부분의 최신 도구와 API는 JSON을 기대하기 때문입니다.</p>

<h2>CSV의 기만적인 단순함</h2>
<p>CSV는 사소해 보입니다 — 쉼표로 나누고, 줄바꿈으로 나누면 끝. 그러다 쉼표를 포함한 필드가 사양에 따라 인용부호로 감싸져 있는 것을 만나면 단순한 파서가 망가집니다. 또는 인용부호 안에 줄바꿈이 포함된 필드를 만나면 한 줄씩 읽는 방식으로는 제대로 처리할 수 없습니다. CSV 파싱을 제대로 하려면 실제로 인용 규칙을 존중해야 하며, 이것이 매번 처음부터 작성하는 것보다 전용 변환기가 나은 이유입니다.</p>

<h2>CSV를 구조화된 JSON으로 변환하기</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>는 인용된 필드와 헤더 행을 올바르게 처리하는 CSV to JSON 변환기를 포함해서, 스프레드시트 내보내기 파일을 테스트 픽스처, 요청 본문, 스크립트에 바로 붙여넣을 수 있는 JSON 객체 배열로 바꿔줍니다.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows CSV to JSON converter tool on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>스프레드시트 데이터를 API에 불러오기</h3>
<p>일회성 데이터 임포트가 전체 스크립트를 작성하고 유지관리할 정도의 가치가 없을 때, CSV 내보내기를 바로 JSON으로 변환해서 API 테스트 도구나 데이터베이스 시드 파일에 붙여넣으면 훨씬 짧은 시간에 작업을 끝낼 수 있습니다.</p>

<h3>실제 데이터로 테스트 픽스처 만들기</h3>
<p>스프레드시트에서 프로덕션과 비슷한 데이터 샘플을 CSV로 내보내고 JSON으로 변환하는 것은 JSON 객체를 필드별로 직접 작성하지 않고도 현실적인 테스트 픽스처를 빠르게 만드는 방법입니다.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Mac App Store에서 Bellows 받기</a></p>
`,
  },

  "mac-developer-tools-no-internet": {
    slug: "mac-developer-tools-no-internet",
    title: "인터넷 없이도 작동하는 맥 개발자 도구",
    description:
      "비행기 안이나 지하 서버실, 불안정한 카페 와이파이에서 작업한다고 해서 자주 사용하는 유틸리티에 접근할 수 없어서는 안 됩니다.",
    date: "2026-09-06",
    readTime: "5분 읽기",
    content: `
<p>와이파이 없는 비행기에서 JSON 데이터를 포맷팅하려고 해보면, 일상적인 개발자 유틸리티 중 얼마나 많은 것이 사실은 위장한 웹사이트인지 금세 알게 됩니다. jwt.io, regex101, JSON 포맷터, Base64 도구 — 모두 훌륭하지만, 연결이 끊기는 순간 완전히 쓸모없어집니다. 결국 포기하거나 어렴풋이 기억나는 터미널 명령어를 더듬거리게 됩니다.</p>

<p>이는 여행에만 국한된 불편함이 아닙니다. 서버실, 보안 시설, 에어갭 환경은 설계상 인터넷 접근이 아예 없는 경우가 많습니다. 불안정한 사무실 와이파이만으로도 2초짜리 작업이 로드되지 않는 페이지를 답답하게 기다리는 일로 바뀔 수 있습니다.</p>

<h2>도구 모음에 숨어 있는 의존성</h2>
<p>대부분의 개발자는 연결이 끊기기 전까지 일상적인 도구가 얼마나 실시간 연결에 의존하는지 깨닫지 못합니다. 빠르게 머릿속으로 점검해 보면 드러납니다: 하루에도 여러 번 손이 가는 유틸리티 중 실제로는 다른 누군가의 서버를 가리키는 브라우저 탭인 것이 몇 개나 될까요? 대부분의 개발자에게 그 답은 예상보다 많습니다.</p>

<p>가용성 문제를 넘어 데이터 문제도 있습니다. 토큰, 자격 증명, 내부 데이터를 디코딩하거나 포맷팅하기 위해 제3자 웹사이트로 보내는 것은 그 웹사이트의 보안 및 개인정보 보호 관행을 신뢰한다는 뜻이며, 그 신뢰는 정당하지 않을 수 있고 많은 회사의 보안 정책이 명시적으로 이를 금지합니다.</p>

<h2>연결이 전혀 필요 없는 도구 모음</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>는 41가지 개발자 도구를 완전히 오프라인으로 작동하는 네이티브 macOS 앱에 담았습니다 — 예외 없이, "이 기능만은 인터넷이 필요합니다" 같은 것도 없습니다. JSON 포맷팅, JWT 디코딩, 해싱, 정규식 테스트, 인코딩과 디코딩 등이 기가비트 광랜에서든 신호 없는 3만 피트 상공에서든 동일하게 작동합니다.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows offline developer tools app running on macOS with no network connection" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>보안 또는 에어갭 환경에서 작업하기</h3>
<p>일부 개발 작업은 정책상 인터넷 접근이 제한되거나 아예 없는 환경에서 이루어집니다 — 방위 산업, 금융 인프라, 특정 정부 업무 등입니다. 실시간 연결이 필요한 도구는 아무리 훌륭해도 그런 환경에서는 사용할 수 없습니다.</p>

<h3>생산성을 잃지 않고 이동하기</h3>
<p>비행기, 터널을 지나는 기차, 연결이 불안정한 원격 근무 장소가 어떤 개발 작업을 할 수 있고 없는지를 좌우해서는 안 됩니다. 오프라인 우선 도구 모음은 연결 상태를 발목을 잡을 수 있는 목록에서 제거해 줍니다.</p>

<h3>오프라인의 부수 효과로서의 프라이버시</h3>
<p>네트워크 요청을 전혀 하지 않는 앱은 의도적이든 아니든 데이터를 서버로 유출할 수 없습니다. 토큰, 시크릿, 독점 정보를 다루는 개발자에게 오프라인은 단순한 가용성 문제가 아니라 의미 있는 프라이버시 보장입니다.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Mac App Store에서 Bellows 받기</a></p>
`,
  },

  "clipboard-formatter-mac": {
    slug: "clipboard-formatter-mac",
    title: "맥용 클립보드 포맷터 — 자동 감지 및 도구 제안",
    description:
      "어떤 포맷터, 디코더, 변환기를 써야 할지 결정하는 것 자체가 하루에도 수십 번 반복하면서 그 부담을 눈치채지 못하는 작은 결정입니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>문자열 하나를 복사합니다. 무엇이든 하려면 먼저 이것이 무엇이고 어떤 도구가 이를 다루는지 알아내야 합니다. JWT인가? Base64인가? 16진수 색상인가? 그냥 UUID인가? 경험 많은 개발자에게는 이 인식이 거의 즉각적으로 일어나지만, 여전히 무언가를 복사하는 것과 실제로 그것에 대해 행동을 취하는 것 사이의 작은 인지적 단계이며, 매번 반복되는 단계입니다.</p>

<p>이 인식-탐색 단계를 하루의 수십 가지 소소한 유틸리티 작업에 곱하면, 실제 작업을 시작하기도 전에 그저 올바른 도구로 자신을 안내하는 데만 놀라울 정도로 많은 정신적 부담이 쌓입니다.</p>

<h2>패턴 인식은 해결 가능한 문제입니다</h2>
<p>JWT는 알아볼 수 있는 Base64url 헤더를 가진 세 부분, 점으로 구분된 독특한 구조를 가지고 있습니다. 16진수 색상은 파운드 기호로 시작하고 정확히 6자 또는 8자의 16진수 문자입니다. UUID는 8-4-4-4-12 하이픈 형식을 엄격하게 따릅니다. JSON은 중괄호나 대괄호로 시작합니다. 이런 패턴들은 소프트웨어가 개발자가 매번 수동으로 식별할 필요 없이 경험 많은 개발자만큼 빠르게 인식할 수 있을 만큼 명확합니다.</p>

<h2>클립보드가 도구를 제안하게 하기</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>는 여는 순간 클립보드를 읽고 일치하는 도구를 자동으로 제안합니다. JWT를 복사하면 디코더가 이미 강조되어 있습니다. JSON을 복사하면 포맷터가 클릭 한 번 거리에 있습니다. 16진수 색상을 복사하면 색상 변환기가 준비되어 있습니다. 사이드바를 열기도 전에 인식 단계가 즉시 이루어집니다.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows clipboard detection suggesting the matching developer tool on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>더 적은 클릭, 더 적은 결정 피로</h3>
<p>반복적인 작업에서 "어떤 도구가 필요한지" 결정하는 단계를 없애는 것은 그 자체로는 사소해 보이지만, 하루의 수십 번의 상호작용 전체에서 상당한 마찰을 제거합니다 — 그렇지 않았다면 올바른 도구를 찾는 것이 너무 큰 노력처럼 느껴져서 그냥 데이터를 포맷팅하지 않은 채로 두게 만드는 그런 마찰입니다.</p>

<h3>존재하는 줄 잊고 있던 도구에도 유용함</h3>
<p>41가지 도구가 있으면 특정 변환기나 생성기가 존재한다는 사실 자체를 잊기 쉽습니다. 클립보드 기반 제안은 찾아볼 생각조차 하지 못했을 관련 도구를 표면화해 주며, 이는 매일 쓰는 도구에서 절약하는 시간보다 더 가치 있는 경우가 많습니다.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Mac App Store에서 Bellows 받기</a></p>
`,
  },

  "string-escape-unescape-mac": {
    slug: "string-escape-unescape-mac",
    title: "맥용 문자열 이스케이프 및 언이스케이프 — JSON, HTML, URL",
    description:
      "한 문자열 형식을 다른 형식 안에 삽입하려면 따옴표, 슬래시, 특수 문자를 올바르게 이스케이프해야 합니다. 그렇지 않으면 파서가 오류를 내며 멈춥니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>JSON 문자열 하나를 다른 JSON 문자열 안에 삽입해야 합니다 — 이를테면 그 자체로 JSON 페이로드를 담고 있는 로그 메시지 같은 경우입니다. 아니면 인용부호가 포함된 문자열을 담은 셸 명령어를 작성하고 있습니다. 또는 다른 URL을 쿼리 파라미터로 담아야 하는 URL을 만들고 있습니다. 이런 상황들은 모두 이스케이프를 요구합니다: 그렇지 않으면 구문으로 해석될 문자를 리터럴 데이터로 취급되는 형태로 바꾸는 작업입니다.</p>

<p>맥락마다 이스케이프 방식이 다릅니다. JSON은 백슬래시로 따옴표를 이스케이프하고 줄바꿈 같은 특수 문자를 <code>\\n</code>으로 표현합니다. 셸 이스케이프는 어떤 인용 스타일을 쓰는지에 따라 다릅니다. URL 이스케이프는 예약된 문자를 앞의 두 방식과는 완전히 다르게 퍼센트 인코딩합니다. 이를 혼동해서 URL 이스케이프가 필요한 곳에 JSON 이스케이프를 적용하면 거의 맞는 것처럼 보이지만 헷갈리는 방식으로 실패하는 결과물이 나옵니다.</p>

<h2>이중 이스케이프 문제</h2>
<p>이 분야에서 가장 흔한 버그 중 하나는 이중 이스케이프입니다: 문자열이 코드에서 한 번 이스케이프되고, 여전히 원시 상태라고 가정하는 라이브러리나 프레임워크에서 또 한 번 이스케이프되면서 백슬래시 하나가 두 개로 바뀌고 데이터가 조용히 손상됩니다. 이를 진단하려면 정확히 어디서 추가 계층이 들어갔는지 확인하기 위해 단계별로 언이스케이프해야 합니다 — 특히 긴 문자열에서 손으로 하기에는 지루한 작업입니다.</p>

<h2>여러 형식에 대해 이스케이프 및 언이스케이프하기</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>는 41가지 개발자 도구 중 하나로 JSON, HTML, URL 형식을 다루는 문자열 이스케이프 도구를 포함합니다. 원시 문자열을 붙여넣으면 특정 맥락에 맞게 올바르게 이스케이프된 결과를 볼 수 있고, 이스케이프된 문자열을 붙여넣으면 원래의 원시 값을 볼 수 있습니다.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows string escape and unescape tool on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>문자열 안에 문자열 삽입하기</h3>
<p>그 자체로 JSON 문자열을 필드 값으로 담고 있는 JSON 페이로드를 만들거나, 임의의 사용자 입력을 안전하게 포함해야 하는 로그 메시지를 구성하는 것 모두 외부 구조를 손상시키지 않으려면 올바른 이스케이프가 필요합니다.</p>

<h3>이중으로 이스케이프된 데이터 진단하기</h3>
<p>문자열이 필요 이상으로 여러 번 이스케이프된 것처럼 보일 때, 이를 층별로 언이스케이프하면 추가 인코딩이 정확히 어디서 들어갔는지 드러나며, 이는 보통 원인이 된 코드를 추적하는 가장 빠른 방법입니다.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Mac App Store에서 Bellows 받기</a></p>
`,
  },

  "mac-developer-utility-menu-bar": {
    slug: "mac-developer-utility-menu-bar",
    title: "메뉴 바에 있는 맥 개발자 유틸리티 — 41가지 도구에 빠르게 접근",
    description:
      "Dock은 바라보는 앱을 위한 곳입니다. 메뉴 바는 몇 초 만에 쓰고 닫는 도구를 위한 곳이며, 대부분의 개발자 유틸리티는 후자에 속합니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>실제로 JSON 포맷터나 UUID 생성기를 어떻게 사용하는지 생각해 보세요. 열어서 인터페이스를 감상하며 오래 머무르지 않습니다. 열어서 작은 일 하나를 처리하고 닫습니다 — 전체 상호작용이 몇 초밖에 걸리지 않습니다. 이런 사용 패턴은 전환해서 시간을 보내는 앱을 암시하는 Dock 아이콘과는 잘 맞지 않고, 바로 이런 빠르고 잠깐 쓰고 나가는 상호작용을 위해 만들어진 메뉴 바와 훨씬 더 잘 맞습니다.</p>

<p>Dock 기반 앱은 열려 있는 다른 모든 것과 공간을 두고 경쟁하기도 합니다 — Cmd-Tab이 그것들을 순환하고, Mission Control이 창을 그룹화하며, 십여 개의 열린 앱 중에서 원하는 것을 찾는 데 잠깐의 시각적 탐색이 필요합니다. 메뉴 바 아이콘은 고정되고 예측 가능한 위치에 있어서 절대 파묻히지 않습니다.</p>

<h2>위치가 보이는 것보다 더 중요한 이유</h2>
<p>개발자 유틸리티의 가치는 그것을 사용하기까지 얼마나 많은 마찰이 있는지에 반비례합니다. 여는 데 10초가 걸리는 도구는 그 10초보다 더 많은 비용을 치릅니다 — 현재 작업에서 벗어나 그것을 찾으러 가면서 잃는 정신적 맥락이라는 비용입니다. 메뉴 바 배치는 사용하지 않을 때는 화면 공간이나 Dock 공간을 차지하지 않으면서도 도구를 시각적으로 늘 존재하게 하고 언제나 클릭 한 번 거리에 두어 이 비용을 최소화합니다.</p>

<h2>41가지 도구, 하나의 메뉴 바 아이콘</h2>
<p><a href="https://apps.apple.com/app/bellows/id6805032839">Bellows</a>는 메뉴 바에 상주하며 Dock 아이콘이나 전용 창 없이도 포맷터, 인코더, 생성기, 변환기, 텍스트 도구 등 41가지 개발자 도구에 접근할 수 있게 해줍니다. 아이콘을 클릭하고, 사이드바에서 도구를 고르고, 필요한 작업을 하면 다시 눈에 띄지 않게 사라집니다.</p>

<a href="https://apps.apple.com/app/bellows/id6805032839" target="_blank" rel="noopener" style="display:block"><img src="/apps/bellows.png" alt="Bellows menu bar icon providing quick access to 41 developer tools on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Dock 공간 제로</h3>
<p>긴 세션을 위한 앱 — 에디터, 브라우저, 터미널 — 만 담은 깔끔한 Dock을 유지하는 개발자에게 메뉴 바 유틸리티는 그 철학에 자연스럽게 들어맞습니다. 필요할 때는 있고, 그렇지 않을 때는 보이지 않습니다.</p>

<h3>필요할 때는 독립된 창으로</h3>
<p>정규식 패턴을 연달아 여러 개 테스트하거나 여러 색상 값을 변환하는 것 같은 일부 작업은 메뉴 바 드롭다운보다 지속되는 창의 도움을 받습니다. Bellows는 두 모드를 모두 지원하므로, 빠른 조회는 메뉴 바에서, 더 긴 세션은 에디터 옆의 제대로 된 창에서 처리할 수 있습니다.</p>

<h3>최근 사용 목록이 자주 쓰는 도구를 상단에 유지</h3>
<p>41가지 도구가 있으면 가장 자주 쓰는 것들이 드물게 쓰는 것들과 같은 정도의 검색을 요구해서는 안 됩니다. 최근에 사용한 도구가 자동으로 노출되므로, 일상의 습관이 인터페이스를 시간이 지나면서 형성하게 되며 그 반대가 아닙니다.</p>

<p><a href="https://apps.apple.com/app/bellows/id6805032839">Mac App Store에서 Bellows 받기</a></p>
`,
  },
};
