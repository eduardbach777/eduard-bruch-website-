import type { ArticleSet } from "./index";

export const koArticles: ArticleSet = {
  "best-sqlite-browser-mac": {
    slug: "best-sqlite-browser-mac",
    title: "Mac을 위한 최고의 SQLite 브라우저",
    description:
      "Mac용 SQLite 브라우저 대부분은 크로스 플랫폼 Electron 앱이라 어딘가 어색하게 느껴집니다. 진짜 Mac 앱처럼 동작하는 도구를 찾으려면 생각보다 많은 시간이 걸립니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>검사해야 할 SQLite 데이터베이스가 있습니다. 브라우저를 검색해서 그럴듯해 보이는 것을 다운로드했는데, 네이티브 macOS 기능을 지원하지 않는다는 걸 바로 알아챕니다 — 문서 탭도 없고, 시스템 다크 모드도 없고, Spotlight 통합도 없습니다. 마치 리눅스 앱이 Mac 옷을 입은 것 같은 느낌입니다. 이것이 오늘날 대부분의 SQLite 브라우저가 처한 현실입니다.</p>

<h2>대부분의 SQLite 브라우저가 Mac에서 부족한 이유</h2>
<p>대다수의 데이터베이스 도구는 Electron이나 Java로 만들어져 있으며, 어디서나 실행되도록 설계되었지만 정작 어디에도 최적화되어 있지 않습니다. Finder에서의 드래그 앤 드롭, 제대로 된 윈도우 관리, 대용량 결과 세트의 부드러운 스크롤 같은 Mac 고유의 관례들을 무시합니다. 결국 데이터에 집중하는 대신 도구와 씨름하게 됩니다.</p>
<p>DB Browser for SQLite는 오픈소스이고 기능적으로는 문제없지만 Qt 애플리케이션입니다 — 낯선 키보드 단축키, 네이티브가 아닌 파일 대화상자, macOS 워크플로우와의 통합 부재. TablePlus는 더 나아 보이지만 모든 데이터베이스 엔진을 대상으로 하기 때문에 SQLite는 부수적으로 취급됩니다.</p>

<h2>처음부터 Mac을 위해 만들어진 SQLite 브라우저</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>은 SQLite 데이터베이스를 열고, 탐색하고, 편집하기 위해 특별히 만들어진 네이티브 macOS SQLite 브라우저입니다. AppKit과 Swift를 사용하며 — Electron도, 크로스 플랫폼 타협도 없습니다. 즉시 실행되고, 시스템 외형을 존중하며, Mac 앱이 마땅히 그래야 하는 방식으로 동작합니다.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome — native SQLite browser for Mac showing tables and query editor" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>테이블, 뷰, 인덱스, 트리거 탐색</h3>
<p>.db, .sqlite, .sqlite3 파일을 열면 데이터베이스 안의 모든 테이블, 뷰, 인덱스, 트리거를 즉시 확인할 수 있습니다. 테이블을 클릭하면 빠르고 네이티브한 스크롤로 내용을 탐색할 수 있습니다. 수천 개의 행을 렌더링하기 위해 웹 뷰를 기다릴 필요가 없습니다.</p>

<h3>데이터 인라인 편집</h3>
<p>셀을 클릭하면 바로 편집할 수 있습니다. 새 행을 삽입하거나 기존 행을 삭제하고, 시각적 편집기로 새 테이블을 생성할 수도 있습니다 — 기본적인 작업에는 SQL이 필요 없습니다. SQL이 필요할 때는 구문 강조와 자동완성을 지원하는 쿼리 편집기가 준비되어 있습니다.</p>

<h3>문서 기반 — 여러 데이터베이스를 나란히 열기</h3>
<p>Tome은 문서 기반 구조라서 각 데이터베이스가 자신만의 창이나 탭에서 열립니다. 스테이징과 프로덕션 데이터베이스를 나란히 비교하거나, 다른 작업을 하는 동안 참조용 데이터베이스를 열어둘 수 있습니다. 다른 문서 기반 Mac 앱과 똑같이 동작합니다 — 실제로 그런 앱이기 때문입니다.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Mac App Store에서 Tome 받기</a></p>
`,
  },

  "view-sqlite-database-mac": {
    slug: "view-sqlite-database-mac",
    title: "Mac에서 SQLite 데이터베이스를 보는 방법",
    description:
      "SQLite 파일은 앱 데이터, Core Data 저장소, 브라우저 기록 등 Mac 곳곳에 존재하지만, macOS에는 이를 열어보는 내장 방법이 없습니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>프로젝트 폴더나 앱 컨테이너 깊숙한 곳에서 .sqlite 파일을 발견했습니다. 더블클릭해도 macOS는 어떻게 처리해야 할지 모릅니다. 터미널을 열고 <code>sqlite3 mydatabase.db</code>를 입력할 수도 있지만, 터미널 창에서 표 형태의 데이터를 읽는 것은 고통스럽습니다 — 열 정렬도 없고, 스크롤도 안 되고, 수백 개의 행을 빠르게 훑어볼 방법도 없습니다.</p>

<h2>터미널 방식과 그 한계</h2>
<p>모든 Mac에는 내장 <code>sqlite3</code> 명령줄 도구가 포함되어 있습니다. 기술적으로는 작동합니다. <code>.tables</code>로 테이블 목록을 확인하고 <code>SELECT * FROM tablename;</code>으로 행을 출력할 수 있습니다. 하지만 출력은 그냥 순수 텍스트입니다. 넓은 테이블은 어색하게 줄바꿈됩니다. 값을 클릭해서 편집할 방법도 없습니다. 그리고 만약 당신이 디자이너나 프로덕트 매니저, 혹은 터미널에 익숙하지 않은 사람이라면 이는 현실적인 작업 방식이 아닙니다.</p>
<p>텍스트 편집기로 파일을 열어볼 수도 있지만, SQLite 데이터베이스는 바이너리 형식이라 깨진 문자만 보일 뿐 데이터는 보이지 않습니다.</p>

<h2>Tome으로 SQLite 데이터베이스를 시각적으로 보기</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>은 Mac에서 SQLite 데이터베이스를 위한 제대로 된 시각적 인터페이스를 제공합니다. .db, .sqlite, .sqlite3 파일을 앱 아이콘에 드래그하거나 파일 → 열기를 사용하면 데이터베이스가 즉시 나타납니다 — 사이드바에 테이블 목록이 표시되고, 데이터는 스크롤 가능한 그리드에 표시됩니다.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome showing a SQLite database with tables and row data" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>스키마를 한눈에 파악하기</h3>
<p>모든 테이블, 뷰, 인덱스, 트리거가 사이드바에 나열됩니다. 테이블을 클릭하면 행을 볼 수 있고, 뷰를 클릭하면 결과를 볼 수 있습니다. 외울 필요가 있는 명령어는 없습니다 — 그냥 클릭하면 됩니다.</p>

<h3>필요할 때 쿼리 실행</h3>
<p>단순한 탐색을 넘어서는 작업이 필요할 때는 Tome의 SQL 쿼리 편집기가 준비되어 있습니다. 테이블과 열 이름에 대한 구문 강조와 자동완성을 지원하므로, 열 이름을 기억에 의존해 추측하는 터미널보다 훨씬 빠르게 쿼리를 작성할 수 있습니다.</p>

<h3>일반적인 사용 사례</h3>
<p>SQLite에 데이터를 저장하는 iOS나 Android 앱 디버깅. 웹 스크레이퍼의 출력 데이터베이스 검사. Django나 Rails 개발 데이터베이스 확인. SQLite에 저장된 브라우저 기록이나 북마크 보기. 이 모든 작업이 간단해집니다 — 파일을 열고 데이터를 보면 됩니다.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Mac App Store에서 Tome 받기</a></p>
`,
  },

  "native-sqlite-editor-mac": {
    slug: "native-sqlite-editor-mac",
    title: "Mac용 네이티브 SQLite 편집기 — Electron 없이",
    description:
      "Electron 기반 데이터베이스 도구는 테이블 하나 보여주는 데 수백 메가바이트의 RAM을 소비합니다. 네이티브 macOS 편집기는 '가볍다'는 말의 의미를 바꿔놓습니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>데이터베이스 도구를 열었더니 파일을 로드하기도 전에 활동 모니터에서 이미 400MB의 RAM을 잡아먹고 있습니다. 큰 테이블을 스크롤하면 인터페이스가 버벅입니다. 키보드 단축키는 다른 Mac 앱들과 일치하지 않습니다. 이것이 SQLite 편집기가 사실은 데스크톱 앱 흉내를 내는 웹 브라우저일 때 벌어지는 일입니다.</p>

<h2>Electron의 문제</h2>
<p>Electron 앱은 인터페이스를 렌더링하기 위해 Chromium 브라우저 전체를 번들로 포함합니다. 대부분 텍스트로 된 테이블을 표시하는 데이터베이스 편집기 입장에서는 지나친 오버헤드입니다. 느린 시작 시간, 높은 메모리 사용량, macOS에서 결코 완전히 어울리지 않는 인터페이스를 얻게 됩니다. 파일 대화상자가 이상하게 보이고, 텍스트 렌더링이 미묘하게 다르며, Finder의 "다음으로 열기" 메뉴에도 제대로 나타나지 않습니다.</p>
<p>일부 개발자는 Mac, Windows, Linux에 하나의 코드베이스로 배포할 수 있다는 이유로 Electron을 선택합니다. 사업적으로는 합리적인 결정이지만, 데이터베이스를 열 때마다 그 성능 비용을 치르는 것은 사용자입니다.</p>

<h2>Tome: 웹 브라우저가 아닌 AppKit으로 만들어진 앱</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>은 Swift와 AppKit으로 만들어진 네이티브 macOS 애플리케이션입니다. Finder, Xcode를 비롯한 애플의 모든 순정 앱과 동일한 프레임워크를 사용합니다. 그 결과 1초도 안 되어 실행되고, 수만 개의 행을 부드럽게 스크롤하며, Electron 앱이 필요로 하는 메모리의 일부만 사용하는 SQLite 편집기가 탄생했습니다.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome native macOS SQLite editor with sidebar and data grid" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>진짜 macOS 통합</h3>
<p>Tome은 .db, .sqlite, .sqlite3 파일의 핸들러로 등록됩니다. Finder에서 데이터베이스를 더블클릭하면 바로 열립니다. Dock 아이콘에 파일을 드래그할 수 있습니다. macOS 탭과 윈도우 관리를 사용할 수 있습니다. Mac 앱에서 기대하는 모든 것이 그대로 동작합니다 — 진짜 Mac 앱이기 때문입니다.</p>

<h3>SQL 없이 편집하기</h3>
<p>셀을 클릭하면 값을 인라인으로 편집할 수 있습니다. 시각적 편집기를 사용해 행을 삽입하고, 삭제하고, 새 테이블을 만들 수 있습니다. SQL이 필요할 때는 내장 쿼리 편집기가 구문 강조와 자동완성을 제공합니다 — 하지만 일상적인 편집에서는 굳이 사용할 필요가 없습니다.</p>

<h3>설계부터 가벼움</h3>
<p>Tome은 SQLite라는 한 가지를 잘합니다. PostgreSQL, MySQL, MongoDB에 연결하려 하지 않습니다. SQLite에만 집중함으로써 모든 기능이 실제로 다루는 형식에 최적화되어 있습니다.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Mac App Store에서 Tome 받기</a></p>
`,
  },

  "db-browser-alternative-mac": {
    slug: "db-browser-alternative-mac",
    title: "Mac용 DB Browser for SQLite 대안",
    description:
      "DB Browser for SQLite는 잘 작동하지만, Qt 인터페이스가 macOS에서는 낯설게 느껴집니다 — 잘못된 단축키, 네이티브가 아닌 파일 대화상자, 나머지 워크플로우와의 통합 부재.",
    date: "2026-09-06",
    readTime: "5분 읽기",
    content: `
<p>DB Browser for SQLite(DB4S)는 SQLite 데이터베이스를 보기 위한 대표적인 무료 도구입니다. 오픈소스이고 크로스 플랫폼이며 오랫동안 사용되어 왔습니다. 하지만 Mac에서 사용해봤다면 마찰을 느꼈을 겁니다. Cmd+Q가 예상대로 작동하지 않을 때가 있고, 파일 대화상자는 다른 운영체제 것처럼 보이며, 인터페이스는 다른 앱들과 결코 딱 맞아떨어지지 않습니다. 작동은 하지만 뭔가 옳지 않은 느낌입니다.</p>

<h2>DB Browser가 Mac에서 부족한 부분</h2>
<p>DB4S는 크로스 플랫폼 UI 프레임워크인 Qt로 만들어졌습니다. Mac에서 이는 앱이 네이티브 macOS 컨트롤을 사용하지 않는다는 뜻입니다. 작은 부분들에서 티가 납니다: 탭 바가 Safari와 일치하지 않고, 스크롤 물리감이 어색하며, Handoff나 Spotlight 통합, 제대로 된 다크 모드 지원이 없습니다. 앱은 또한 macOS의 문서 기반 아키텍처를 지원하지 않아서 네이티브 탭으로 여러 데이터베이스를 열 수 없습니다.</p>
<p>성능도 문제입니다. 큰 테이블이 있는 데이터베이스를 열면 느려지는 느낌이 들고, 쿼리를 실행하는 동안 UI가 가끔 멈춥니다. 2026년의 데스크톱 앱이라면 더 나은 반응성을 기대할 만합니다.</p>
<p>이것이 DB4S를 나쁜 도구로 만드는 것은 아닙니다 — 그 자체로는 훌륭합니다. 하지만 Mac에서 네이티브하게 느껴지는 무언가를 원한다면 이 부분에서 아쉬움이 남습니다.</p>

<h2>Tome: 네이티브 macOS 대안</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>은 이 공백을 채웁니다. Swift와 AppKit으로 macOS를 위해 특별히 만들어진 네이티브 SQLite 브라우저이자 편집기입니다. 일상적인 사용에서 DB Browser가 하는 모든 것 — 테이블 탐색, 데이터 편집, 쿼리 실행 — 을 하지만, Mac에 어울리는 인터페이스로 감싸져 있습니다.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome as a native alternative to DB Browser for SQLite on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>DB Browser로 하던 모든 것, 이제는 네이티브로</h3>
<p>깔끔한 사이드바에서 테이블, 뷰, 인덱스, 트리거를 탐색합니다. 빠르고 스크롤 가능한 그리드에서 행 데이터를 확인합니다. SQL을 작성하지 않고 셀을 인라인으로 편집합니다. 클릭 한 번으로 행을 삽입하고 삭제합니다. CREATE TABLE 문을 직접 작성하는 대신 시각적 편집기로 새 테이블을 만듭니다.</p>

<h3>필요할 때 SQL 쿼리 편집기</h3>
<p>Tome은 테이블과 열 이름에 대한 구문 강조와 자동완성을 지원하는 완전한 SQL 쿼리 편집기를 포함합니다. SELECT, UPDATE, DELETE 등 어떤 쿼리든 실행하고 즉시 결과를 확인하세요.</p>

<h3>문서 기반 워크플로우</h3>
<p>DB4S와 달리 Tome은 macOS의 문서 기반 아키텍처를 사용합니다. 각 데이터베이스는 자신만의 창이나 탭에서 열립니다. 여러 데이터베이스를 동시에 열어 나란히 배치하고, 다른 Mac 앱에서 문서를 전환하듯 자유롭게 오갈 수 있습니다.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Mac App Store에서 Tome 받기</a></p>
`,
  },

  "tableplus-alternative-mac-sqlite": {
    slug: "tableplus-alternative-mac-sqlite",
    title: "Mac용 TablePlus 대안 — SQLite 전용",
    description:
      "TablePlus는 모든 데이터베이스를 지원하는데, 이는 곧 SQLite가 온전한 관심을 받지 못한다는 뜻입니다. SQLite만 필요하다면 그 추가적인 복잡함이 오히려 방해가 됩니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>TablePlus는 PostgreSQL, MySQL, SQLite, Redis, MongoDB 등을 지원하는 잘 만들어진 데이터베이스 클라이언트입니다. 정말로 좋은 소프트웨어입니다. 하지만 SQLite 파일만 다룬다면, 절대 사용하지 않을 데이터베이스를 위한 연결 대화상자, 드라이버 설정, 인터페이스 요소들을 헤쳐 나가야 합니다. 칼날 하나만 필요한데 스위스 아미 나이프를 사는 것과 같습니다.</p>

<h2>다중 데이터베이스 도구가 과할 때</h2>
<p>TablePlus를 열 때마다 원격 데이터베이스 서버를 위해 설계된 연결 관리자가 나타납니다. 로컬 파일 기반 데이터베이스인 SQLite에게 이 워크플로우는 불필요한 단계를 추가할 뿐입니다. 연결 문자열도, 포트도, 자격 증명도 필요 없습니다. 그냥 파일을 열면 됩니다.</p>
<p>TablePlus는 또한 폭넓은 기능 세트를 반영한 구독 모델을 사용합니다. PostgreSQL이나 MySQL에 연결하지 않는다면 사용하지 않는 기능에 대해 비용을 지불하는 셈입니다. 무료 등급은 열 수 있는 탭과 행 개수를 제한하는데, 활발히 개발하는 동안에는 답답할 수 있습니다.</p>
<p>인터페이스는 세련되었지만 지원하는 모든 데이터베이스를 수용하도록 설계되어 있습니다. 트리거 탐색이나 파일의 내부 구조 검사 같은 SQLite 전용 기능은 서버 기반 데이터베이스에 더 중요한 기능들에 밀려 뒷전이 됩니다.</p>

<h2>Tome: Mac에서 SQLite만을 위해 만든 앱</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>은 SQLite라는 한 가지 일만 하는 네이티브 macOS 앱입니다. 연결 관리자도, 드라이버 설정도, 사용하지 않는 데이터베이스를 위한 기능도 없습니다. .db, .sqlite, .sqlite3 파일을 열면 바로 작업을 시작할 수 있습니다.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome — focused SQLite browser as an alternative to TablePlus" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>파일 우선 워크플로우</h3>
<p>Finder에서 SQLite 파일을 더블클릭하면 Tome이 이를 엽니다. Dock 아이콘에 파일을 드래그할 수도 있습니다. 파일 → 열기를 사용하세요. 연결 설정도, 서버 구성도 필요 없습니다. SQLite는 파일 형식이고, Tome은 그것을 있는 그대로 다룹니다.</p>

<h3>완전한 SQLite 지원</h3>
<p>테이블, 뷰, 인덱스, 트리거를 탐색합니다. 셀을 인라인으로 편집합니다. 행을 삽입하고 삭제합니다. 시각적 편집기로 테이블을 만듭니다. 구문 강조와 자동완성으로 SQL 쿼리를 실행합니다. 모든 기능이 SQLite에 의미가 있기 때문에 존재합니다.</p>

<h3>여러 데이터베이스, Mac 방식으로</h3>
<p>Tome은 문서 기반입니다. 다섯 개의 데이터베이스를 열면 각각 자신만의 창이나 탭을 얻습니다. 창을 나란히 배치해 데이터베이스 간 데이터를 비교하세요 — 텍스트 파일, 스프레드시트, 또는 Mac의 다른 문서를 다루는 것과 같은 워크플로우입니다.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Mac App Store에서 Tome 받기</a></p>
`,
  },

  "open-sqlite3-file-mac": {
    slug: "open-sqlite3-file-mac",
    title: "터미널 없이 Mac에서 .sqlite3 파일을 여는 방법",
    description:
      "Mac에서 .sqlite3 파일을 더블클릭해도 아무 일도 일어나지 않습니다. macOS는 이 형식을 인식하지 못하며, 터미널이 유일한 내장 옵션입니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>Django 프로젝트에서 내보냈거나, iOS 앱 컨테이너에서 가져왔거나, 동료에게서 받은 .sqlite3 파일이 있습니다. Mac에서 더블클릭하면 "열 수 있는 애플리케이션이 없다"는 대화상자가 뜨거나, 더 나쁘게는 텍스트 편집기에서 열려 바이너리 깨진 문자만 보입니다. macOS는 SQLite 파일을 기본적으로 전혀 이해하지 못합니다.</p>

<h2>기본 옵션들은 모두 부족합니다</h2>
<p>아무것도 설치하지 않는다면 유일한 선택지는 터미널입니다. 열어서 파일이 있는 디렉터리로 이동한 뒤 <code>sqlite3 yourfile.sqlite3</code>를 입력합니다. 거기서 <code>.tables</code>나 <code>SELECT * FROM tablename;</code> 같은 명령을 실행할 수 있지만 — 출력은 서식 없는 순수 텍스트이고, 스크롤도 안 되며, 데이터를 시각적으로 편집할 방법도 없습니다.</p>
<p>터미널에 익숙한 개발자라면 간단한 확인에는 이 방식이 통합니다. 하지만 여러 테이블을 탐색하거나, 값을 편집하거나, 스키마를 이해하는 것처럼 단순한 쿼리를 넘어서는 작업에는 느리고 실수하기 쉽습니다. 개발자가 아니라면 애초에 시작조차 어렵습니다.</p>
<p>일부 사람들은 브라우저에서 실행되는 온라인 SQLite 뷰어를 시도합니다. 이런 도구는 데이터베이스 파일을 서버에 업로드해야 하는데, 특히 데이터베이스에 사용자 데이터나 자격 증명이 포함되어 있다면 명백한 개인정보 보호 문제를 일으킵니다.</p>

<h2>Tome으로 더블클릭해서 .sqlite3 파일 열기</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>은 macOS에서 .sqlite3, .sqlite, .db 파일의 핸들러로 스스로 등록됩니다. 설치 후에는 Finder에서 아무 SQLite 파일이나 더블클릭하면 바로 Tome에서 열립니다 — 사이드바에 테이블이 나열되고, 데이터는 스크롤 가능한 그리드로 표시되어 바로 탐색할 준비가 됩니다.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome opening a .sqlite3 file on Mac with visual table browser" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>터미널 불필요</h3>
<p>모든 테이블, 뷰, 인덱스, 트리거를 시각적으로 탐색합니다. 스프레드시트처럼 행을 스크롤합니다. 열 머리글을 클릭해 스키마를 이해합니다. 모든 것이 시각적이고 즉각적이며, 커맨드라인 지식이 전혀 필요 없습니다.</p>

<h3>SQL 없이 데이터 편집</h3>
<p>값을 바꿔야 하나요? 셀을 클릭하고 입력하세요. 행을 추가해야 하나요? 삽입 버튼을 클릭하세요. 레코드를 제거해야 하나요? 선택하고 삭제하세요. 더 복잡한 작업이 필요하면 Tome에는 구문 강조와 자동완성을 지원하는 SQL 쿼리 편집기가 있습니다 — 하지만 일상적인 작업에서는 거의 쓸 일이 없을 겁니다.</p>

<h3>데이터는 로컬에 남습니다</h3>
<p>Tome은 네이티브 macOS 앱입니다. 데이터베이스 파일은 컴퓨터 밖으로 나가지 않습니다. 업로드도, 클라우드 처리도, 개인정보 걱정도 없습니다. 열고, 탐색하고, 편집하고, 닫는 모든 과정이 로컬에서 이루어집니다.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Mac App Store에서 Tome 받기</a></p>
`,
  },

  "edit-sqlite-database-mac": {
    slug: "edit-sqlite-database-mac",
    title: "Mac에서 SQLite 데이터베이스를 편집하는 방법",
    description:
      "Mac에서 SQLite 데이터베이스를 편집한다는 것은 보통 터미널에서 UPDATE 문을 작성하는 것을 의미합니다. 간단한 값 하나 바꾸는 데 그건 지나친 절차입니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>SQLite 데이터베이스에서 값 하나를 바꿔야 합니다. 플래그를 뒤집어야 할 수도 있고, 사용자 이름을 수정해야 할 수도 있고, 테스트 데이터를 조정해야 할 수도 있습니다. Mac에서 이를 처리하는 내장 방법은 터미널을 열고 <code>sqlite3</code>를 실행한 뒤, 정확한 행을 지정하기 위한 WHERE 절과 함께 UPDATE 문을 작성하고, 오타로 엉뚱한 레코드를 바꾸지 않기를 바라는 것입니다. 값 하나 바꾸는 데 말입니다. 2026년에.</p>

<h2>터미널 기반 편집이 위험한 이유</h2>
<p>UPDATE 문을 수동으로 작성하는 것은 자신이 무엇을 하고 있는지 정확히 알고 있을 때는 괜찮습니다. 하지만 WHERE 절을 깜빡 잊고 테이블의 모든 행을 업데이트하거나, 열 이름을 잘못 입력해서 조용히 오류가 나는 일이 위험할 만큼 쉽게 일어납니다. <code>sqlite3</code> CLI에는 실행 취소 기능이 없습니다 — 트랜잭션을 시작하는 걸 기억하지 않았다면 문이 실행되는 순간 변경 사항은 영구적입니다.</p>
<p>새 테이블을 만드는 것도 마찬가지로 번거롭습니다. 열 이름, 타입, 제약 조건까지 포함한 완전한 CREATE TABLE 문을 작성해야 하는데 — 빠르게 프로토타입을 만들고 반복하는 상황에서는 틀리기 쉬운 구문입니다.</p>
<p>SQL로 사고하는 개발자에게는 이 정도는 감당할 만합니다. 그 외의 사람들 — 그리고 위험 없이 간단한 수정만 하고 싶은 개발자들 — 에게는 더 나은 방법이 있어야 합니다.</p>

<h2>Tome으로 SQLite 데이터베이스를 시각적으로 편집하기</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>은 Mac에서 스프레드시트를 편집하듯 SQLite 데이터베이스를 편집하게 해줍니다. 데이터베이스를 열고, 셀을 클릭하고, 값을 바꾸세요. 기본적인 편집에는 SQL이 필요 없습니다.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome inline cell editing in a SQLite database on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>인라인 셀 편집</h3>
<p>테이블의 아무 셀이나 클릭해 값을 직접 편집하세요. UPDATE 문을 작성하지 않고도 텍스트, 숫자, 날짜를 바꿀 수 있습니다. 변경 사항은 정확히 클릭한 그 행만을 대상으로 합니다 — WHERE 절 누락으로 다른 레코드에 영향을 줄 위험이 없습니다.</p>

<h3>행 삽입 및 삭제</h3>
<p>클릭 한 번으로 어떤 테이블에도 새 행을 추가할 수 있습니다. 선택한 행을 삭제하는 것도 마찬가지로 쉽습니다. Tome이 뒤에서 INSERT와 DELETE SQL을 처리하므로 구문이 아니라 데이터에 집중할 수 있습니다.</p>

<h3>테이블을 시각적으로 만들기</h3>
<p>새 테이블이 필요하신가요? Tome의 시각적 테이블 편집기를 사용하면 폼에서 열, 타입, 제약 조건을 정의할 수 있습니다. CREATE TABLE 문을 기억에 의존해 작성할 필요 없이 필드만 채우면 Tome이 올바른 SQL을 생성합니다.</p>

<h3>복잡한 작업을 위한 SQL 편집기</h3>
<p>조인, 집계, 일괄 업데이트처럼 SQL이 정말 필요할 때는 Tome의 쿼리 편집기가 테이블과 열 이름에 대한 구문 강조와 자동완성으로 준비되어 있습니다.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Mac App Store에서 Tome 받기</a></p>
`,
  },

  "sql-query-editor-mac-native": {
    slug: "sql-query-editor-mac-native",
    title: "Mac용 SQL 쿼리 편집기 — 네이티브하고 빠른",
    description:
      "Mac에서 SQLite 데이터베이스에 대해 SQL 쿼리를 실행하는 데 무거운 IDE나 터미널 창이 필요할 필요는 없습니다. 대부분의 경우 집중된 쿼리 편집기 하나로 충분합니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>로컬 SQLite 데이터베이스에 대해 SQL 쿼리를 실행해야 합니다. 선택지는 두 가지입니다. 구문 강조도, 자동완성도 없는 <code>sqlite3</code> CLI로 터미널을 여는 것, 또는 시작하는 데 10초가 걸리고 500MB의 RAM을 사용하는 완전한 데이터베이스 IDE를 실행하는 것. 둘 다 이 작업에 맞지 않습니다 — 그냥 쿼리를 작성하고, 실행하고, 결과를 보고 싶을 뿐입니다.</p>

<h2>터미널과 완전한 IDE 사이의 간극</h2>
<p><code>sqlite3</code> CLI는 원시적인 쿼리 실행 기능을 제공하지만 개발자를 위한 편의는 전혀 없습니다. 구문 색상도, 테이블이나 열 이름 자동완성도, 시각적 결과 그리드도 없습니다. 쿼리 출력을 순수 텍스트로 읽으며 모든 열을 보기 위해 터미널 너비를 수동으로 조정해야 합니다.</p>
<p>반대쪽 극단에는 DataGrip이나 DBeaver 같은 도구가 있는데, 이들은 엔터프라이즈 데이터베이스 워크플로우 — 원격 서버 연결 관리, 마이그레이션 처리, 스키마 시각화 — 를 위해 만들어졌습니다. 강력하지만 무겁습니다. 로컬 SQLite 파일 하나를 위해 완전한 IDE를 실행하는 것은 동네 편의점에 가려고 대형 트럭을 모는 것 같은 느낌입니다.</p>
<p>부족한 것은 SQLite 파일을 열어서 완전한 IDE의 부담 없이 원하는 편의 기능으로 쿼리를 작성하게 해주는, 빠르고 집중된 SQL 편집기입니다.</p>

<h2>Tome의 SQL 쿼리 편집기</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>에는 SQLite를 위해 특별히 설계된 내장 SQL 쿼리 편집기가 포함되어 있습니다. 네이티브 macOS 앱의 일부이므로 즉시 실행되고 최소한의 리소스로 동작합니다.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome SQL query editor with syntax highlighting on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>구문 강조</h3>
<p>SQL 키워드, 테이블 이름, 문자열 리터럴, 숫자가 가독성을 위해 색상으로 구분됩니다. 나중에 알쏭달쏭한 오류 메시지를 해석하는 대신 쿼리를 실행하기 전에 오류를 미리 발견하세요.</p>

<h3>자동완성</h3>
<p>Tome은 스키마를 파악하고 있습니다. 테이블 이름을 입력하기 시작하면 완성 후보를 제안합니다. FROM 절에서 테이블을 참조하면 열 이름이 제안 목록에 나타납니다. 스키마 브라우저와 쿼리 편집기를 오가며 열 이름을 기억해낼 필요가 없습니다.</p>

<h3>네이티브 그리드에 표시되는 결과</h3>
<p>쿼리 결과는 웹 뷰에 렌더링된 HTML이 아니라 빠르고 스크롤 가능한 네이티브 테이블에 나타납니다. 열을 정렬하고, 크기를 조절하고, macOS 앱에서 기대하는 성능으로 대용량 결과 세트를 스크롤하세요.</p>

<h3>하나의 앱에서 탐색과 쿼리를</h3>
<p>Tome은 단순한 쿼리 편집기가 아닙니다. 사이드바에서 테이블, 뷰, 인덱스, 트리거를 탐색합니다. 데이터를 인라인으로 편집합니다. 새 테이블을 시각적으로 만듭니다. SQL 편집기는 필요할 때 그곳에 있고, 나머지는 앱의 다른 부분이 처리합니다.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Mac App Store에서 Tome 받기</a></p>
`,
  },

  "browse-core-data-sqlite-mac": {
    slug: "browse-core-data-sqlite-mac",
    title: "Mac에서 Core Data SQLite 파일을 탐색하는 방법",
    description:
      "Core Data는 데이터를 SQLite 파일에 저장하지만, Apple은 이를 검사할 시각적 도구를 제공하지 않습니다. 영속 데이터를 디버깅하려면 앱 컨테이너를 뒤지고 원시 SQL 출력을 읽어야 합니다.",
    date: "2026-09-06",
    readTime: "5분 읽기",
    content: `
<p>iOS나 macOS 앱의 Core Data 문제를 디버깅하고 있습니다. UI에 표시되는 데이터가 이상해서 실제로 하위 SQLite 파일에 무엇이 저장되어 있는지 확인해야 합니다. Xcode의 Core Data 모델 편집기는 스키마를 보여주지만 실제로 영속화된 데이터를 탐색하게 해주지는 않습니다. 그래서 직접 찾아 나섭니다 — 앱 컨테이너를 찾고, .sqlite 파일을 위치시키고, 터미널을 열어 ZUSER, ZPOST 같은 이름의 테이블에 대해 원시 쿼리를 실행하기 시작합니다. 모든 열 이름은 Z로 시작하고 엔티티 이름과 직관적으로 맞아떨어지지 않습니다.</p>

<h2>Core Data의 SQLite 파일은 검사하기 어렵습니다</h2>
<p>Core Data는 기본 영속 저장소로 SQLite를 사용하지만 고유의 관례를 추가합니다. 엔티티 이름은 테이블 이름에서 Z 접두사가 붙습니다. 속성은 Z 접두사가 붙은 열 이름을 가집니다. 관계는 즉시 알아보기 어려운 열에 정수 외래 키로 저장됩니다. Core Data가 내부적으로 관리하는 Z_METADATA 테이블과 Z_PRIMARYKEY 테이블도 있습니다.</p>
<p>이 중 어느 것도 수동 검사를 쉽게 만들어주는 방식으로 문서화되어 있지 않습니다. 결국 <code>SELECT * FROM ZUSER;</code> 같은 쿼리를 실행하고 Z 접두사가 붙은 열을 관리 객체 모델과 맞춰보려 애쓰게 됩니다. 구문 강조도 없고 시각적 그리드도 없는 터미널에서는 이 작업이 지루합니다.</p>
<p>Xcode도 여기서는 도움이 안 됩니다. 내장 SQLite 브라우저가 없습니다. Instruments 도구로 Core Data 작업을 프로파일링할 수는 있지만 실제 행 데이터를 보여주지는 않습니다. 별도의 도구가 필요합니다.</p>

<h2>Tome으로 Core Data SQLite 파일 탐색하기</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>은 Core Data의 SQLite 파일을 다른 데이터베이스와 마찬가지로 엽니다. 앱 컨테이너로 이동해 .sqlite 파일을 찾은 뒤 Tome에서 열면, Z 접두사가 붙은 모든 테이블이 사이드바에 나타납니다. 하나를 클릭하면 스크롤 가능한 그리드에서 모든 행과 값을 볼 수 있습니다.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome browsing a Core Data SQLite file showing Z-prefixed tables" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>실제 데이터 확인하기</h3>
<p>앱이 잘못된 값을 표시할 때, Tome에서 SQLite 파일을 열어 실제로 저장된 데이터를 확인하세요. 데이터베이스 안의 값이 잘못된 것인지, 아니면 가져오기/표시 버그인지 몇 초 만에 답을 얻을 수 있습니다.</p>

<h3>관계와 메타데이터 검사하기</h3>
<p>Z_PRIMARYKEY 테이블을 탐색해 Core Data가 엔티티 유형과 기본 키를 어떻게 추적하는지 확인하세요. 외래 키 열을 확인해 관계가 올바르게 저장되었는지 검증하세요. Z_METADATA를 검사해 모델 버전 해시를 확인하세요.</p>

<h3>진단 쿼리 실행하기</h3>
<p>Tome의 SQL 쿼리 편집기를 사용해 Core Data의 Z 접두사 테이블 간 조인을 작성하거나, 특정 레코드를 필터링하거나, 마이그레이션 문제를 나타낼 수 있는 고아 행을 확인하세요. 구문 강조와 자동완성이 터미널에서 원시 쿼리를 실행하는 것보다 훨씬 쉽게 만들어줍니다.</p>

<h3>안전하게 검사하고 쉽게 찾기</h3>
<p>시뮬레이터의 경우 앱의 SQLite 파일은 <code>~/Library/Developer/CoreSimulator/</code> 깊숙한 곳에 있습니다. macOS 앱의 경우 <code>~/Library/Containers/</code>나 <code>~/Library/Application Support/</code>를 확인하세요. 파일을 찾았다면 Tome의 Dock 아이콘에 드래그해서 탐색을 시작하세요.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Mac App Store에서 Tome 받기</a></p>
`,
  },

  "sqlite-viewer-mac-document-based": {
    slug: "sqlite-viewer-mac-document-based",
    title: "Mac용 SQLite 뷰어 — 여러 데이터베이스를 나란히 열기",
    description:
      "두 SQLite 데이터베이스 간 데이터를 비교하려면 보통 탭을 전환하거나 데이터베이스 도구를 두 개 실행해야 합니다. 더 간단한 방법이 있습니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>한 SQLite 데이터베이스에서 다른 데이터베이스로 데이터를 마이그레이션하고 결과를 검증해야 합니다. 또는 스테이징 데이터베이스를 프로덕션과 비교하고 있습니다. 또는 앱 데이터베이스의 두 버전이 있고 무엇이 바뀌었는지 찾아야 합니다. 어느 경우든 두 데이터베이스를 동시에 봐야 하는데 — 대부분의 SQLite 도구는 이를 필요 이상으로 어렵게 만듭니다.</p>

<h2>단일 데이터베이스 도구로 곡예하기</h2>
<p>대부분의 SQLite 브라우저는 한 번에 하나의 데이터베이스 연결을 중심으로 설계되어 있습니다. 두 데이터베이스를 비교하려면 도구가 지원한다면 두 개의 애플리케이션 창을 수동으로 열거나, 열 값을 기억하려 애쓰며 탭 사이를 오가야 합니다. 일부 도구는 다른 것을 열기 전에 하나를 닫아야 합니다.</p>
<p>터미널 방식은 더 심합니다. 각각 다른 파일에 대해 <code>sqlite3</code>를 실행하는 두 개의 터미널 창이 필요하고, 순수 텍스트로 된 출력을 나란히 비교하려 애써야 합니다. 이론적으로는 가능하지만 실제 데이터 양이 조금만 늘어나도 무너집니다.</p>
<p>이런 한계는 대부분의 데이터베이스 도구가 문서 기반 애플리케이션으로 설계되지 않았기 때문에 발생합니다. 데이터베이스를 선택하고, 작업하고, 연결을 끊고, 다른 것을 선택하는 연결 관리자 중심으로 설계되었습니다. 원격 서버 데이터베이스에는 괜찮지만 로컬 SQLite 파일에는 불필요한 마찰입니다.</p>

<h2>Tome: 문서 기반 SQLite 뷰어</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>은 각 SQLite 데이터베이스를 문서로 취급합니다 — TextEdit이 텍스트 파일을 다루거나 미리보기가 PDF를 다루는 것과 같은 방식입니다. 데이터베이스를 열면 자신만의 창을 얻습니다. 다른 것을 열면 그것도 자신만의 창을 얻습니다. 나란히 배치하거나 macOS 네이티브 탭으로 그룹화하세요.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome with multiple SQLite databases open side by side on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>데이터베이스를 시각적으로 비교하기</h3>
<p>원본과 대상 데이터베이스를 두 개의 창에서 여세요. macOS 스플릿 뷰를 사용하거나 창을 드래그해서 나란히 배치하세요. 같은 테이블을 양쪽에서 탐색해 행 수, 열 값, 스키마 차이를 비교하세요. 탭 전환도, 값을 외울 필요도 없습니다.</p>

<h3>프로젝트 간 작업하기</h3>
<p>다른 것을 개발하는 동안 참조용 데이터베이스를 열어두세요. 테스트 픽스처 데이터베이스와 함께 앱의 프로덕션 데이터베이스를 열어두세요. 자신의 것이 여전히 로드된 상태에서 클라이언트의 데이터베이스 파일을 여세요. Tome은 동시에 열 수 있는 데이터베이스 수에 제한을 두지 않습니다.</p>

<h3>모든 창에서 완전한 기능 세트</h3>
<p>각 데이터베이스 창은 완전한 Tome 인터페이스를 갖습니다 — 테이블, 뷰, 인덱스, 트리거가 있는 사이드바, 인라인 편집이 가능한 데이터 그리드, 구문 강조와 자동완성을 갖춘 SQL 쿼리 편집기. "주" 데이터베이스와 "보조" 데이터베이스라는 개념은 없습니다. 열려 있는 모든 데이터베이스가 완전히 기능합니다.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Mac App Store에서 Tome 받기</a></p>
`,
  },

  "inspect-app-database-mac": {
    slug: "inspect-app-database-mac",
    title: "Mac에서 앱의 데이터베이스를 검사하는 방법",
    description:
      "Mac의 앱들은 Library 폴더 깊숙이 숨겨진 SQLite 파일에 데이터를 저장합니다. 앱이 실제로 저장한 것을 검사하려면 컨테이너 경로를 탐색하고 원시 데이터베이스 출력을 해독해야 합니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>메모, 북마크, 메시지, 건강 기록, 할 일 목록 등 데이터를 로컬에 영속화하는 Mac의 모든 앱은 아마 <code>~/Library/</code>나 <code>~/Library/Containers/</code> 안에 숨겨진 SQLite 데이터베이스에 그 데이터를 저장하고 있을 것입니다. 어떤 앱이 수집한 데이터를 보고 싶을 수도 있습니다. UI에서 삭제된 무언가를 복구해야 할 수도 있습니다. 자신의 앱을 디버깅하며 실제로 디스크에 무엇이 기록되었는지 확인해야 할 수도 있습니다. 이유가 무엇이든 macOS는 이런 파일을 시각적으로 검사할 내장 방법을 제공하지 않습니다.</p>

<h2>앱 데이터베이스를 찾고 여는 것은 번거롭습니다</h2>
<p>먼저 파일을 찾아야 합니다. 샌드박스 앱은 <code>~/Library/Containers/com.developer.appname/Data/</code>에 데이터를 저장하고, 샌드박스가 아닌 앱은 <code>~/Library/Application Support/</code>를 사용할 수 있습니다. Library 폴더는 기본적으로 숨겨져 있어서 Finder의 "폴더로 이동"을 사용하거나 터미널을 통해 이동해야 합니다. .sqlite나 .db 파일을 찾은 후에는 터미널에서 <code>sqlite3</code>를 사용해 시각적 구조 없이 원시 쿼리 출력을 읽는 수밖에 없습니다.</p>
<p>시뮬레이터에서 실행되는 iOS 앱의 경우 경로는 더욱 깊습니다: <code>~/Library/Developer/CoreSimulator/Devices/</code> 다음에 UUID, 그리고 앱의 Documents나 Library 폴더로 이어지는 또 다른 중첩 경로. 수십 개의 시뮬레이터 기기 폴더 중에서 올바른 데이터베이스를 찾는 것은 보물찾기와 같습니다.</p>

<h2>Tome으로 어떤 앱 데이터베이스든 검사하기</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>을 사용하면 어떤 SQLite 데이터베이스 파일이든 열어서 즉시 내용을 확인할 수 있습니다 — 테이블, 뷰, 인덱스, 트리거, 행 데이터가 네이티브 macOS 인터페이스로 표시됩니다. 파일을 찾았다면 Tome에 드래그하거나 파일 → 열기를 사용하세요.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome inspecting an app's SQLite database on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>앱이 무엇을 저장하는지 이해하기</h3>
<p>모든 테이블을 탐색해 앱이 정확히 어떤 데이터를 영속화하는지 확인하세요. 열 이름은 스키마 설계를 드러냅니다. 행 데이터는 실제 값을 보여줍니다. 추측도, 터미널 명령도 필요 없습니다 — 사이드바에서 테이블을 클릭하고 내용을 스크롤하기만 하면 됩니다.</p>

<h3>자신의 앱 데이터 계층 디버깅하기</h3>
<p>SQLite나 Core Data를 사용하는 macOS나 iOS 앱을 개발 중이라면, Tome을 통해 데이터가 올바르게 기록되었는지 확인할 수 있습니다. 관계가 온전한지 확인하고, 자동 생성된 열을 검사하고, 구문 강조와 자동완성으로 진단 쿼리를 실행하세요.</p>

<h3>데이터 복구 또는 내보내기</h3>
<p>앱의 UI에서는 삭제되었지만 데이터베이스에는 여전히 남아 있을 수 있는 레코드가 필요하신가요? Tome에서 파일을 열고 관련 테이블을 검색하세요. 데이터가 존재한다면 직접 읽거나 SQL 쿼리로 필요한 것을 정확히 추출할 수 있습니다.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Mac App Store에서 Tome 받기</a></p>
`,
  },

  "sqlite-for-ios-developers-mac": {
    slug: "sqlite-for-ios-developers-mac",
    title: "iOS 개발자를 위한 Mac용 SQLite 브라우저",
    description:
      "iOS 개발은 앱이 로컬 데이터베이스에 무엇을 기록했는지 끊임없이 확인하는 일입니다. Xcode에는 내장 SQLite 뷰어가 없어서 터미널과 서드파티 도구로 워크플로우를 짜맞춰야 합니다.",
    date: "2026-09-06",
    readTime: "5분 읽기",
    content: `
<p>영속성을 위해 Core Data나 순수 SQLite를 사용하는 iOS 앱을 만들고 있습니다. UI에서 뭔가 이상해 보입니다 — 목록이 채워지지 않거나 값이 오래된 것처럼 보일 수 있습니다. 데이터베이스를 확인해야 합니다. Xcode는 데이터 모델 편집기와 Instruments 프로파일러를 제공하지만, 둘 다 SQLite 파일에 실제로 있는 행을 보여주지는 않습니다. 그래서 터미널을 열고 시뮬레이터의 컨테이너 경로를 찾아, Z 접두사가 붙은 테이블에 대해 <code>SELECT *</code> 쿼리를 실행하기 시작합니다. 이 워크플로우는 매번 집중을 깨뜨립니다.</p>

<h2>iOS 개발자의 데이터베이스 문제</h2>
<p>모든 iOS 시뮬레이터 실행은 UUID 이름의 디렉터리 안에 중첩된 <code>~/Library/Developer/CoreSimulator/Devices/</code> 아래에 데이터를 저장합니다. 시뮬레이터를 초기화하거나 기기를 전환하면 경로가 바뀝니다. 위치를 북마크해두어도 다음 Xcode 업데이트가 순서를 뒤섞어버릴 수 있습니다. 올바른 .sqlite 파일을 찾는 것이 절반의 싸움입니다.</p>
<p>일단 찾으면 <code>sqlite3</code> CLI는 원시 텍스트 출력을 줍니다. Core Data의 Z 접두사가 붙은 테이블과 열 이름은 수동 쿼리를 헷갈리게 만듭니다. 열 이름에 대한 자동완성도 없고, 행을 훑어볼 시각적 그리드도 없으며, 전체 UPDATE 문을 작성하지 않고 테스트 값을 빠르게 편집할 방법도 없습니다. 대부분의 개발자는 하루에도 여러 번 이런 춤을 추느라 시간을 낭비합니다.</p>
<p>DB Browser for SQLite 같은 서드파티 도구는 작동하지만 macOS에서는 낯설게 느껴집니다 — 잘못된 키보드 단축키와 네이티브가 아닌 파일 대화상자를 가진 Qt 기반 인터페이스. DBeaver와 DataGrip은 완전한 데이터베이스 IDE로, 로컬 SQLite 파일 하나를 검사하기에는 과합니다.</p>

<h2>Tome: Mac 워크플로우를 위해 만들어진 SQLite 브라우저</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>은 iOS 개발자의 워크플로우에 자연스럽게 녹아드는 네이티브 macOS SQLite 브라우저입니다. 시뮬레이터의 .sqlite 파일을 열면 모든 테이블, 뷰, 인덱스를 즉시 확인할 수 있습니다. 스크롤 가능한 그리드에서 Core Data의 Z 접두사가 붙은 테이블을 탐색하세요. SQL을 작성하지 않고 값을 인라인으로 편집해 테스트 시나리오를 구성하세요.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome browsing an iOS app's SQLite database on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Core Data 저장소를 시각적으로 검사하기</h3>
<p>Core Data의 SQLite 테이블은 터미널에서 해석하기 어려운 Z 접두사 이름을 사용합니다. Tome에서는 모든 테이블이 사이드바에 나타납니다 — 하나를 클릭하면 제대로 정렬된 열과 함께 모든 행을 볼 수 있습니다. ZUSER와 ZPOST 테이블을 관리 객체 모델과 한눈에 맞춰보세요.</p>

<h3>재구성 없이 테스트 데이터 편집하기</h3>
<p>버그를 재현하기 위해 값을 바꿔야 하나요? Tome에서 셀을 클릭하고 새 값을 입력하세요. UPDATE 문을 작성하거나 앱의 시딩 로직을 다시 실행할 필요가 없습니다. 엣지 케이스를 테스트하기 위해 행을 삽입하거나 깨끗한 상태를 시뮬레이션하기 위해 레코드를 삭제하세요.</p>

<h3>진단 쿼리 실행하기</h3>
<p>구문 강조와 자동완성을 갖춘 Tome의 SQL 편집기로 조인, 집계, 필터링된 쿼리를 작성해 앱의 데이터를 검증하세요. 관계를 검증하고, 레코드를 세고, 특정 값을 검색하세요 — 모두 앱을 벗어나지 않고서.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Mac App Store에서 Tome 받기</a></p>
`,
  },

  "view-firefox-history-sqlite-mac": {
    slug: "view-firefox-history-sqlite-mac",
    title: "Mac에서 Firefox 기록(SQLite) 보는 방법",
    description:
      "Firefox는 브라우징 기록을 places.sqlite라는 SQLite 데이터베이스에 저장합니다. 브라우저 밖에서 이를 보려면 잠긴 파일과 원시 SQL 출력을 다뤄야 합니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>Firefox는 전체 브라우징 기록, 북마크, 사이트 메타데이터를 <code>places.sqlite</code>라는 SQLite 데이터베이스에 보관합니다. Firefox의 내장 검색이 잘 찾아내지 못하는 오래된 기록을 검색하거나, 브라우징 데이터를 내보내거나, 습관을 분석하고 싶을 수 있습니다. 하지만 이 파일을 여는 것은 간단하지 않습니다 — Firefox가 실행 중일 때는 파일을 잠그고, 사본을 얻더라도 macOS에는 시각적으로 보는 내장 방법이 없습니다.</p>

<h2>데이터베이스 찾기와 복사하기</h2>
<p>Firefox의 프로필 폴더는 <code>~/Library/Application Support/Firefox/Profiles/xxxxxxxx.default-release/</code>에 있습니다. 그 안에는 <code>cookies.sqlite</code>, <code>formhistory.sqlite</code> 같은 다른 데이터베이스와 함께 <code>places.sqlite</code>가 있습니다. 문제는 브라우저가 실행 중인 동안 Firefox가 이 파일들을 잠근다는 것입니다. Firefox를 먼저 종료하거나, 실행 중인 상태에서 다른 위치로 파일을 복사해야 합니다(다만 그 순간 Firefox가 쓰기 작업을 하고 있다면 사본이 일관되지 않을 수 있습니다).</p>
<p>파일을 확보하면 터미널 방식은 <code>sqlite3 places.sqlite</code>를 실행하고 <code>moz_places</code>, <code>moz_historyvisits</code>, <code>moz_bookmarks</code> 같은 테이블에 대해 쿼리를 작성하는 것을 의미합니다. 스키마는 직관적이지 않습니다 — 방문 타임스탬프는 에포크 이후 마이크로초 단위로 저장되고, URL은 한 테이블에, 방문 메타데이터는 다른 테이블에 있어서 읽을 만한 기록 목록을 얻으려면 JOIN이 필요합니다. SQL에 능숙한 사람에게는 그럭저럭 가능하지만 대부분의 사용자에게는 무리입니다.</p>

<h2>Tome으로 Firefox 기록을 시각적으로 탐색하기</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>은 <code>places.sqlite</code>를 다른 데이터베이스 파일처럼 엽니다. 복사한 파일을 Tome에 드래그하면 <code>moz_places</code>, <code>moz_historyvisits</code>, <code>moz_bookmarks</code> 등 모든 테이블이 사이드바에 나열되는 것을 즉시 볼 수 있습니다. 아무 테이블이나 클릭하면 스크롤 가능한 그리드에서 내용을 탐색할 수 있습니다.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome viewing Firefox places.sqlite history database on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>기록 검색 및 필터링</h3>
<p>Tome의 SQL 쿼리 편집기로 정확한 검색을 작성하세요. 특정 도메인의 모든 방문을 찾거나, 마이크로초 타임스탬프를 사용해 날짜 범위로 필터링하거나, 특정 사이트를 방문한 횟수를 세보세요. 구문 강조와 자동완성이 이런 쿼리를 빠르게 작성하게 해줍니다.</p>

<h3>북마크와 메타데이터 살펴보기</h3>
<p><code>moz_bookmarks</code> 테이블은 부모-자식 관계를 가진 북마크 트리 구조를 저장합니다. Tome에서 탐색해 전체 북마크 계층 구조 — 폴더 구조와 정렬 순서를 포함해 — 를 확인하세요. Firefox의 북마크 관리자가 때때로 가려버리는 세부 사항들입니다.</p>

<h3>다른 Firefox 데이터베이스 검사하기</h3>
<p>같은 프로필 폴더에는 <code>cookies.sqlite</code>, <code>formhistory.sqlite</code>, <code>content-prefs.sqlite</code>도 있습니다. 각각은 Tome이 열 수 있는 표준 SQLite 데이터베이스입니다. 사이트가 설정한 쿠키를 확인하고, 저장된 폼 항목을 검토하고, 사이트별 설정을 검사하세요 — 모두 터미널에서 원시 쿼리를 작성하지 않고 시각적으로.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Mac App Store에서 Tome 받기</a></p>
`,
  },

  "sqlite-vs-realm-browser-mac": {
    slug: "sqlite-vs-realm-browser-mac",
    title: "Mac에서 SQLite와 Realm 브라우저 비교",
    description:
      "모바일 앱은 로컬 저장소로 SQLite나 Realm을 사용하지만, Mac에서 둘을 검사하려면 서로 다른 도구가 필요합니다. 올바른 브라우저를 고르는 것은 앱이 실제로 어떤 형식을 쓰는지에 달려 있습니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>모바일 앱을 개발하며 로컬 데이터베이스를 검사해야 합니다. Realm을 사용한다면 Realm Studio를 찾습니다. SQLite를 사용한다면(직접이든, Core Data, GRDB, Room을 통해서든) 완전히 다른 도구가 필요합니다. 두 형식은 근본적으로 다르며, 탐색 도구도 겹치지 않습니다. 각각이 무엇을 제공하는지 이해하면 올바른 것을 고르거나 — 혹은 둘 다 필요하다는 것을 깨닫는 데 도움이 됩니다.</p>

<h2>Realm과 SQLite는 다른 요구를 충족합니다</h2>
<p>Realm은 객체 데이터베이스입니다 — 데이터를 테이블의 행이 아니라 속성과 관계를 가진 객체로 저장합니다. Realm Studio는 이런 객체를 시각적으로 탐색하고, 관계를 링크로 보고, 속성을 인라인으로 편집하게 해줍니다. Realm 파일 전용으로 만들어졌고 그 외에는 아무것도 하지 않습니다.</p>
<p>SQLite는 단일 파일로 저장되는 관계형 데이터베이스입니다. 행과 열이 있는 표준 SQL 테이블을 사용합니다. iOS의 Core Data, Android의 Room을 비롯한 수많은 프레임워크가 SQLite를 저장 백엔드로 사용합니다. 생태계는 방대하지만, Mac의 검사 도구는 역사적으로 터미널 기반이거나 어색하게 느껴지는 크로스 플랫폼 포팅 버전이었습니다.</p>
<p>프로젝트가 Realm을 사용한다면 Realm Studio가 유일한 현실적인 선택입니다 — 어떤 범용 데이터베이스 브라우저도 .realm 파일을 열 수 없습니다. 하지만 프로젝트가 어떤 형태로든 SQLite를 사용한다면 선택지가 있습니다. 문제는 그 선택지들이 macOS에서 정말로 좋은가 하는 것입니다.</p>

<h2>나머지 절반을 위한 네이티브 SQLite 브라우저</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>은 Realm Studio의 집중력과 완성도를 SQLite 데이터베이스에 맞춰 구현한 네이티브 macOS SQLite 브라우저입니다. Realm Studio가 .realm 파일 전용으로 만들어진 것처럼, Tome은 .sqlite, .db, .sqlite3 파일 전용으로 만들어졌습니다 — 그 외에는 아무것도 없습니다.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome native SQLite browser on Mac compared to Realm Studio" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>동일한 집중된 철학</h3>
<p>Realm Studio는 PostgreSQL 클라이언트가 되려 하지 않습니다. 마찬가지로 Tome은 MySQL이나 MongoDB에 연결하려 하지 않습니다. SQLite에만 집중함으로써 인라인 편집, 테이블 생성, 쿼리 자동완성 등 모든 기능이 실제로 다루는 형식에 최적화되어 있습니다.</p>

<h3>테이블 탐색, 인라인 편집, 편안한 쿼리 작성</h3>
<p>SQLite 데이터베이스를 열고 사이드바에서 테이블, 뷰, 인덱스, 트리거를 탐색하세요. 셀 값을 클릭해서 편집하세요. SQL을 작성하지 않고 행을 삽입하거나 삭제하세요. 쿼리가 필요할 때는 내장 편집기가 스키마에 대한 구문 강조와 자동완성을 제공합니다.</p>

<h3>둘 다 필요할 때</h3>
<p>일부 프로젝트는 한 구성 요소에는 Realm을, 다른 구성 요소에는 SQLite를 사용합니다. Realm Studio와 Tome을 나란히 두세요 — 각각 자신의 형식을 네이티브하게 처리하고, 설계되지 않은 형식을 지원하려고 리소스를 낭비하지 않습니다.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Mac App Store에서 Tome 받기</a></p>
`,
  },

  "mac-sqlite-command-line-vs-gui": {
    slug: "mac-sqlite-command-line-vs-gui",
    title: "Mac SQLite: 커맨드라인 vs GUI — 언제 무엇을 써야 할까",
    description:
      "sqlite3 CLI는 모든 Mac에 기본 탑재되어 빠른 쿼리를 처리하지만, 익숙하지 않은 스키마를 탐색하고 편집하고 이해하는 데는 부족합니다. 언제 도구를 바꿔야 할지 아는 것이 시간을 절약해줍니다.",
    date: "2026-09-06",
    readTime: "5분 읽기",
    content: `
<p>모든 Mac에는 <code>sqlite3</code> 명령줄 도구가 기본 탑재되어 있습니다. 터미널에 익숙한 개발자에게는 빠른 쿼리를 실행하는 믿을 만한 방법입니다. 하지만 CLI가 효율적이지 않게 되고 GUI가 더 빨라지는 지점이 있습니다 — 요령은 그 경계가 어디인지 아는 것입니다. 작업에 맞지 않는 도구를 쓰면 양쪽 방향 모두에서 시간을 낭비하게 됩니다.</p>

<h2>커맨드라인이 이길 때</h2>
<p><code>sqlite3</code> CLI는 스크립트화된 작업에 뛰어납니다. 데이터베이스에서 값을 추출해야 하는 셸 스크립트를 작성한다면 CLI는 다른 명령으로 직접 파이프됩니다. 한 줄짜리 쿼리는 빠릅니다: <code>sqlite3 app.db "SELECT count(*) FROM users;"</code>는 아무것도 실행하지 않고도 답을 줍니다. 자동화, <code>.dump</code>를 이용한 백업, 기존 터미널 세션에서의 빠른 확인에는 CLI가 맞는 도구입니다.</p>
<p>또한 어디서나 사용할 수 있습니다. 설치도, 다운로드도 필요 없습니다. 원격 머신에 SSH로 접속했거나 CI 파이프라인에서 작업한다면 CLI가 유일한 선택지입니다 — 그리고 스키마를 알고 있는 특정 쿼리에는 잘 작동합니다.</p>

<h2>CLI가 실패하는 순간</h2>
<p>CLI는 탐색 작업에서 무너집니다. 낯선 데이터베이스를 열어 스키마를 이해해야 할 때 <code>.tables</code>와 <code>.schema tablename</code>을 반복해서 실행하는 것은 느립니다. 넓은 테이블은 터미널에서 줄바꿈됩니다. 결과를 스크롤할 방법이 없습니다 — 출력이 그냥 지나가 버립니다. 데이터 편집은 정확한 WHERE 절과 함께 UPDATE 문을 작성해야 하는 것을 의미하며, 오타 하나로 의도치 않은 대량 업데이트가 발생할 위험이 있습니다.</p>
<p>개발자가 아닌 사람들 — 데이터 분석가, 디자이너, QA 테스터 — 에게 CLI는 사실상 사용할 수 없는 수준입니다. 그리고 개발자에게도 몇 개 이상의 테이블을 시각적으로 탐색하는 것은 GUI에서 단순히 더 빠릅니다.</p>

<h2>Tome: 방정식의 GUI 쪽</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>은 네이티브 macOS SQLite 브라우저로서 GUI 역할을 채웁니다. CLI를 대체하는 것이 아니라 보완하는 것입니다 — 스크립팅과 빠른 확인에는 CLI를, 데이터베이스를 시각적으로 탐색하고 편집하고 이해하는 데는 Tome을 사용하세요.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome GUI SQLite browser compared to command line on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>낯선 스키마 탐색하기</h3>
<p>아무 데이터베이스나 열어 사이드바에서 모든 테이블, 뷰, 인덱스, 트리거를 확인하세요. 테이블을 클릭해가며 스키마를 이해하고, 샘플 데이터를 훑어보고, 관계를 파악하세요 — 명령을 하나도 입력하지 않고서.</p>

<h3>안전하게 편집하기</h3>
<p>셀을 클릭해 값을 바꾸세요. UPDATE 문도, 틀릴 수 있는 WHERE 절도 없습니다. 클릭 한 번으로 행을 삽입하고 삭제하세요. 각 편집이 정확히 클릭한 셀만을 대상으로 하므로 의도치 않은 대량 변경의 위험이 사라집니다.</p>

<h3>도움을 받으며 쿼리하기</h3>
<p>SQL을 작성해야 할 때 Tome의 쿼리 편집기는 구문 강조와 자동완성을 제공합니다. 순수 CLI와 완전한 데이터베이스 IDE 사이의 중간 지점입니다 — 엔터프라이즈 도구의 부담 없이 쿼리를 더 빠르게 작성할 만큼의 도움을 줍니다.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Mac App Store에서 Tome 받기</a></p>
`,
  },

  "edit-sqlite-without-sql-mac": {
    slug: "edit-sqlite-without-sql-mac",
    title: "Mac에서 SQL 없이 SQLite를 편집하는 방법",
    description:
      "SQLite 데이터베이스에서 값을 바꿔야 하는 모든 사람이 SQL을 아는 것은 아닙니다. 디자이너, QA 테스터, 프로덕트 매니저가 간단한 데이터 수정을 위해 UPDATE 구문을 배울 필요는 없습니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>QA 테스터가 권한 버그를 재현하기 위해 사용자의 역할을 바꿔야 합니다. 디자이너가 프로토타입 데이터베이스의 자리 표시자 텍스트를 바꾸고 싶어 합니다. 프로덕트 매니저가 기능 플래그를 테스트하기 위해 설정 값을 업데이트해야 합니다. 이들 중 누구도 간단한 데이터 변경을 위해 SQL 구문을 배울 필요가 없어야 합니다 — 하지만 Mac에서 SQLite 데이터베이스를 편집하는 기본 도구는 <code>sqlite3</code> 명령줄이며, 여기서는 셀 하나 편집하는 데도 <code>UPDATE tablename SET column = 'value' WHERE id = 42;</code>를 작성해야 합니다.</p>

<h2>SQL은 비개발자에게 장벽입니다</h2>
<p>SQL은 이론적으로 배우기 어렵지 않지만, 압박감 속에서 정확히 작성하는 것은 다른 문제입니다. UPDATE 문에서 WHERE 절을 빠뜨리면 테이블의 모든 행이 바뀝니다. 잘못된 따옴표를 사용하면 구문 오류가 발생합니다. 열 이름을 잘못 입력하면 알쏭달쏭한 오류 메시지가 나옵니다. 불리언 값을 뒤집거나 문자열을 바꾸기만 하면 되는 사람에게 이런 절차는 작업 규모에 비해 과합니다.</p>
<p>개발자조차 사소한 편집을 위해 SQL을 작성하지 않는 것을 선호하는 경우가 많습니다. 터미널을 열고, 파일로 이동하고, <code>sqlite3</code>를 실행하고, 정확한 테이블과 열 이름을 기억하고, 구문적으로 올바른 문을 작성하는 것 — 셀 하나를 바꾸기 위해서라면 — 이는 그냥 클릭하고 입력하는 것보다 느립니다.</p>

<h2>Tome으로 스프레드시트처럼 SQLite 편집하기</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>을 사용하면 누구나 SQL 한 줄 작성하지 않고 Mac에서 SQLite 데이터베이스를 편집할 수 있습니다. 파일을 열고, 테이블을 찾고, 셀을 클릭하고, 새 값을 입력하세요. 스프레드시트를 편집하는 것과 같이 작동합니다 — 간단한 변경에는 정확히 그런 인터페이스가 필요하기 때문입니다.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome editing SQLite data without SQL on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>클릭 한 번으로 어떤 셀이든 편집</h3>
<p>Tome의 데이터 그리드에 있는 모든 셀은 편집 가능합니다. 클릭해서 값을 바꾸면 업데이트가 정확히 그 행과 열을 대상으로 합니다. 빠뜨릴 WHERE 절도, 대량 변경의 위험도, SQL 지식의 필요성도 없습니다.</p>

<h3>명령 없이 삽입 및 삭제</h3>
<p>삽입 버튼을 클릭해 새 행을 추가하세요. 선택하고 삭제해서 행을 제거하세요. Tome이 뒤에서 INSERT와 DELETE SQL을 처리하므로 데이터베이스 명령이 아니라 익숙한 동작으로 데이터를 다룰 수 있습니다.</p>

<h3>테이블을 시각적으로 만들기</h3>
<p>새 테이블이 필요하신가요? Tome의 시각적 테이블 편집기를 사용하면 폼에서 열 이름, 타입, 제약 조건을 정의할 수 있습니다 — <code>CREATE TABLE</code> 구문을 기억에 의존해 작성할 필요가 없습니다. 필드를 채우면 테이블이 올바르게 생성됩니다.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Mac App Store에서 Tome 받기</a></p>
`,
  },

  "sqlite-database-viewer-apple-silicon": {
    slug: "sqlite-database-viewer-apple-silicon",
    title: "Apple 실리콘에 최적화된 SQLite 데이터베이스 뷰어",
    description:
      "많은 데이터베이스 도구가 여전히 Apple 실리콘 Mac에서 Rosetta를 거쳐 실행되며 배터리와 성능을 낭비합니다. 네이티브 ARM 빌드는 하루 종일 켜두는 앱에서 눈에 띄는 차이를 만듭니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>성능과 배터리 수명 때문에 M 시리즈 Mac을 구매했습니다. 그런데 데이터베이스 도구를 설치했더니 호환성을 위해 존재하는, 성능을 위한 것이 아닌 인텔 변환 계층인 Rosetta를 거쳐 실행되는 것을 발견합니다. 앱은 더 많은 메모리를 사용하고, 배터리를 더 많이 소모하고, 예상보다 느리게 실행됩니다. Xcode나 VS Code와 함께 하루 종일 켜둘 수도 있는 도구라면 이 오버헤드는 누적됩니다.</p>

<h2>데이터베이스 도구에 부과되는 Rosetta 세금</h2>
<p>많은 인기 있는 데이터베이스 브라우저는 여전히 인텔 전용 바이너리로 배포되거나, 최근에서야 안정적인 Apple 실리콘 지원을 얻은 Electron으로 만들어져 있습니다. Qt로 만들어진 DB Browser for SQLite는 버전마다 ARM 지원이 일관되지 않았습니다. DBeaver는 Java에서 실행되어 하드웨어 위에 또 다른 추상화 계층을 더합니다. 기술적으로 Apple 실리콘을 지원하는 도구들조차 종종 Electron의 Chromium 엔진을 번들로 포함하는데, 이는 네이티브 앱이 필요로 하는 것보다 훨씬 많은 리소스를 소비합니다.</p>
<p>활동 모니터를 확인해서 "종류" 열을 살펴보세요. M 시리즈 Mac에서 데이터베이스 도구가 "Intel"로 표시된다면 Rosetta를 거쳐 실행되고 있는 것입니다. 즉 네이티브 ARM 바이너리에 비해 시작이 느리고, 메모리 사용량이 높고, 배터리 수명이 줄어든다는 뜻입니다. SQLite 뷰어처럼 가벼워야 할 유틸리티에게 이 성능 격차는 특히 두드러집니다. 앱 자체가 빠르고 작아야 하기 때문입니다.</p>

<h2>Tome: 처음부터 네이티브 Apple 실리콘</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>은 Swift와 AppKit으로 만들어진 유니버설 바이너리로, Apple 실리콘과 인텔 Mac 모두에서 네이티브로 실행됩니다. M 시리즈 Mac에서는 즉시 실행되고, 최소한의 메모리를 사용하며, Rosetta 오버헤드가 전혀 없습니다. Apple 실리콘이 실행하도록 설계된 바로 그런 종류의 앱입니다.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome SQLite viewer running natively on Apple Silicon Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>즉시 실행, 낮은 메모리 사용량</h3>
<p>JVM 시작도, Chromium 엔진 초기화도, Rosetta 변환도 없습니다. Tome은 1초 이내에 열리고 가벼운 상태를 유지합니다 — 보통 Electron 기반 대안이 소비하는 메모리의 일부만 사용합니다. 다른 작업에 영향을 주지 않고 하루 종일 켜두세요.</p>

<h3>큰 테이블도 부드러운 스크롤</h3>
<p>네이티브 AppKit 렌더링은 Tome이 Finder나 Numbers에서 기대하는 것과 같은 부드러움으로 수천 개의 행을 스크롤하게 해줍니다. 프레임 드롭도 없고, 대용량 결과 세트의 끝으로 이동할 때도 지연이 없습니다. M 시리즈 칩은 네이티브 UI를 무리 없이 처리합니다.</p>

<h3>완전한 기능 세트, 최소한의 사용 공간</h3>
<p>테이블, 뷰, 인덱스, 트리거를 탐색하세요. 데이터를 인라인으로 편집하세요. 구문 강조와 자동완성으로 SQL 쿼리를 실행하세요. 테이블을 시각적으로 만들고 수정하세요. 이 모든 것이 플랫폼을 위해 특별히 만들어졌기 때문에 Mac의 리소스를 존중하는 앱에서 이루어집니다.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Mac App Store에서 Tome 받기</a></p>
`,
  },

  "open-whatsapp-backup-sqlite-mac": {
    slug: "open-whatsapp-backup-sqlite-mac",
    title: "Mac에서 WhatsApp 백업 SQLite를 여는 방법",
    description:
      "WhatsApp은 채팅 기록을 SQLite 데이터베이스에 저장합니다. 보관, 법적 목적, 또는 개인적인 이유로 앱 밖에서 이런 메시지를 보려면 Mac에서 데이터베이스 파일을 추출하고 열어야 합니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>WhatsApp은 채팅 메시지, 미디어 참조, 연락처 데이터를 SQLite 데이터베이스에 저장합니다. iMazing 같은 도구로 iPhone에서 백업을 추출했든, iTunes 백업에서 <code>ChatStorage.sqlite</code> 파일을 가져왔든, Android 백업에서 <code>msgstore.db</code>를 꺼냈든, 이제 Mac에 데이터베이스 파일이 있습니다. 더블클릭해도 아무 소용이 없습니다. 이를 열어 안의 대화를 읽을 방법이 필요합니다.</p>

<h2>이것이 예상보다 어려운 이유</h2>
<p>WhatsApp의 SQLite 데이터베이스는 자체 스키마를 사용합니다. 메시지는 <code>ZWAMESSAGE</code>(iOS)나 <code>messages</code>(Android) 같은 테이블에 저장되며, 발신자, 타임스탬프, 텍스트 내용, 미디어 타입, 상태를 위한 열을 갖습니다. 타임스탬프는 비표준 형식으로 저장됩니다 — iOS는 Core Data의 에포크(2001년 1월 1일 이후 초)를 사용하고, Android는 유닉스 밀리초를 사용합니다. 연락처는 읽을 수 있는 이름이 아니라 JID 문자열로 참조됩니다.</p>
<p>터미널에서 <code>sqlite3</code>로 파일을 열면 원시 접근은 가능하지만, 인코딩된 타임스탬프와 JID 식별자가 있는 서식 없는 행으로 채팅 메시지를 읽는 것은 대부분의 사람들에게 사실상 쓸모없습니다. 데이터를 이해하려면 시각적 인터페이스가 필요합니다.</p>
<p>Android 백업은 또 다른 복잡함을 더합니다: <code>msgstore.db.crypt15</code> 파일은 암호화되어 있습니다. 어떤 SQLite 브라우저로든 열기 전에 키 파일을 사용해 먼저 복호화해야 합니다. 복호화가 완료되면 표준 SQLite 데이터베이스가 됩니다.</p>

<h2>Tome으로 WhatsApp 데이터 탐색하기</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>은 WhatsApp의 SQLite 데이터베이스 파일을 다른 데이터베이스처럼 엽니다. 추출한 <code>ChatStorage.sqlite</code>나 복호화된 <code>msgstore.db</code>를 Tome에 드래그하면 사이드바에서 모든 테이블을 볼 수 있습니다. 메시지 테이블을 클릭해 스크롤 가능한 그리드에서 채팅 기록을 탐색하세요.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome opening a WhatsApp backup SQLite database on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>맥락 속에서 메시지 읽기</h3>
<p>메시지 테이블을 탐색해 텍스트 내용, 발신자 식별자, 타임스탬프, 미디어 참조를 확인하세요. 날짜별로 정렬해 대화를 시간순으로 읽으세요. Tome의 SQL 편집기를 사용해 연락처나 날짜 범위로 메시지를 필터링하세요.</p>

<h3>대화 전체에서 검색하기</h3>
<p>특정 메시지를 찾아야 하나요? 자동완성이 있는 Tome의 SQL 편집기에서 빠르게 쿼리를 작성하세요: <code>SELECT * FROM ZWAMESSAGE WHERE ZTEXT LIKE '%keyword%';</code> 결과는 스크롤하고 정렬할 수 있는 네이티브 그리드에 나타납니다 — 터미널에서 grep을 쓰는 것보다 훨씬 실용적입니다.</p>

<h3>데이터는 Mac에 남습니다</h3>
<p>데이터베이스 업로드가 필요한 웹 기반 SQLite 뷰어와 달리 Tome은 완전히 로컬에서 실행됩니다. WhatsApp 메시지는 컴퓨터를 벗어나지 않습니다. 열고, 탐색하고, 쿼리하고, 닫는 모든 과정이 Mac에서 이루어집니다.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Mac App Store에서 Tome 받기</a></p>
`,
  },

  "sqlite-query-editor-autocomplete-mac": {
    slug: "sqlite-query-editor-autocomplete-mac",
    title: "Mac에서 자동완성 기능을 갖춘 SQLite 쿼리 편집기",
    description:
      "자동완성 없이 SQLite 데이터베이스에 SQL 쿼리를 작성하는 것은 스키마 뷰와 편집기 사이를 끊임없이 오가며 테이블과 열 이름을 확인해야 한다는 뜻입니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>테이블이 서른 개인 SQLite 데이터베이스에 대해 SELECT 쿼리를 작성하고 있습니다. 테이블 이름이 <code>user_sessions</code>나 <code>session_logs</code> 비슷한 것이었다고 기억하지만 — 정확히 어느 것일까요? 그리고 타임스탬프 열은 <code>created_at</code>, <code>timestamp</code>, <code>date_created</code> 중 무엇일까요? <code>sqlite3</code> CLI에서는 <code>.schema</code> 모드로 전환해서 테이블을 찾아보고, 다시 쿼리 작성으로 돌아가고, 열을 참조할 때마다 이를 반복해야 합니다. 이 컨텍스트 전환이 쿼리 작성 시간의 대부분을 실제로 잡아먹는 부분입니다.</p>

<h2>자동완성이 없을 때의 비용</h2>
<p><code>sqlite3</code> CLI에는 테이블이나 열 이름에 대한 자동완성이 없습니다. 기억에 의존해 입력하고, 뭔가 잘못 입력하면 입력 중이 아니라 실행 후에 오류를 받습니다. 테이블이 몇 개 없는 단순한 데이터베이스라면 감당할 만합니다. 수십 개의 테이블과 수백 개의 열이 있는 데이터베이스라면 생산성에 지속적인 부담이 됩니다.</p>
<p>일부 개발자는 테이블 스키마를 메모 파일에 복사해두고 쿼리를 작성하면서 참조합니다. 다른 사람들은 <code>.tables</code>와 <code>PRAGMA table_info(tablename);</code>을 반복해서 실행합니다. 두 방식 모두 빠진 기능을 위한 우회책일 뿐입니다 — 쿼리 편집기가 스키마를 알고 올바른 SQL을 작성하도록 도와줘야 합니다.</p>
<p>DataGrip 같은 완전한 데이터베이스 IDE는 훌륭한 자동완성을 제공하지만 비싸고, 무겁고, 엔터프라이즈 워크플로우를 위해 설계되었습니다. 로컬 SQLite 파일 하나를 위해 테이블 이름 제안을 받으려고 구독 기반 IDE가 필요하지는 않아야 합니다.</p>

<h2>Tome의 자동완성 쿼리 편집기</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>에는 데이터베이스 스키마를 아는 SQL 쿼리 편집기가 포함되어 있습니다. 테이블 이름을 입력하기 시작하면 일치하는 항목을 제안합니다. 테이블을 참조하면 열 이름이 완성 후보로 나타납니다. 완전한 IDE는 아니지만 — 복잡함을 더하지 않으면서 SQLite 쿼리 작성을 빠르게 만드는 딱 그만큼의 도움을 줍니다.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome SQL query editor with autocomplete on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>스키마 인식 제안</h3>
<p>Tome은 파일을 열 때 데이터베이스 스키마를 읽습니다. 테이블 이름, 열 이름, SQLite 키워드가 모두 입력하는 동안 제안으로 나타납니다. 열 이름을 외우거나 쿼리 도중 스키마 브라우저로 전환할 필요가 없습니다.</p>

<h3>구문 강조</h3>
<p>SQL 키워드, 문자열 리터럴, 숫자, 식별자가 색상으로 구분됩니다. 오류 메시지를 읽은 후가 아니라 쿼리를 실행하기 전에 빠진 따옴표나 잘못된 키워드를 발견하세요.</p>

<h3>네이티브 그리드에 표시되는 결과</h3>
<p>쿼리 결과는 네이티브 macOS 테이블 뷰에 즉시 나타납니다. 열을 정렬하고, 크기를 조절하고, 대용량 결과 세트를 부드럽게 스크롤하세요. 결과를 복사하거나 특정 셀을 선택하세요 — 그리드는 웹 뷰에 렌더링된 HTML 테이블이 아니라 제대로 된 Mac 데이터 뷰처럼 동작합니다.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Mac App Store에서 Tome 받기</a></p>
`,
  },

  "view-chrome-cookies-sqlite-mac": {
    slug: "view-chrome-cookies-sqlite-mac",
    title: "Mac에서 Chrome 쿠키(SQLite) 보는 방법",
    description:
      "Chrome은 Mac의 SQLite 데이터베이스에 쿠키를 저장합니다. DevTools로 사이트 하나씩 보는 것은 가능하지만, 전체 쿠키 데이터베이스를 검사하려면 다른 접근이 필요합니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>Chrome은 <code>~/Library/Application Support/Google/Chrome/Default/Cookies</code>에 위치한 <code>Cookies</code>(확장자 없음)라는 SQLite 데이터베이스 파일에 모든 쿠키를 저장합니다. Chrome DevTools를 통해 사이트 하나의 쿠키를 볼 수는 있지만, 모든 쿠키를 검색하거나, 추적 패턴을 분석하거나, 사이트들이 저장한 데이터를 감사하고 싶다면 실제 데이터베이스 파일을 열어야 합니다. Chrome은 전체 쿠키 저장소를 시각적으로 탐색할 방법을 제공하지 않습니다.</p>

<h2>DevTools의 한계</h2>
<p>Chrome DevTools의 애플리케이션 탭은 현재 로드된 페이지의 도메인별 쿠키를 보여줍니다. 특정 사이트의 쿠키를 디버깅하는 데는 유용하지만, 모든 사이트에 걸친 모든 쿠키를 보거나, 여러 도메인에서 사용되는 특정 쿠키 이름을 검색하거나, 존재하는 추적 쿠키 수를 세고 싶을 때는 부족합니다. 모든 사이트를 개별적으로 방문해서 각각 검사해야 하는데 — 현실적이지 않습니다.</p>
<p>데이터베이스 방식은 전체 그림을 보여줍니다. 하지만 터미널에서 <code>sqlite3</code>로 Chrome의 <code>Cookies</code> 파일을 열면 호스트 키, 쿠키 이름, 값, 만료 타임스탬프(1601년 1월 1일 이후 마이크로초 단위인 Chrome의 에포크 형식), 그리고 원시 텍스트로 된 암호화된 값이 행으로 표시됩니다. Chrome은 macOS에서 쿠키 값을 암호화하므로 <code>encrypted_value</code> 열에는 직접 읽을 수 없는 바이너리 블롭이 들어 있습니다. 호스트, 이름, 경로, 만료, 플래그 같은 메타데이터 열은 여전히 읽을 수 있고 실제로 필요한 것인 경우가 많습니다.</p>

<h2>Tome으로 Chrome 쿠키 탐색하기</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>은 Chrome의 Cookies 데이터베이스 파일을 열어 <code>cookies</code> 테이블을 스크롤 및 정렬 가능한 그리드로 표시합니다. 먼저 Chrome을 종료한 뒤(파일을 잠그므로), <code>~/Library/Application Support/Google/Chrome/Default/Cookies</code>를 Tome에서 여세요.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome viewing Chrome cookies SQLite database on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>모든 도메인에서 검색하기</h3>
<p>Tome의 SQL 편집기를 사용해 이름, 호스트, 패턴으로 쿠키를 찾으세요. <code>SELECT host_key, name, path FROM cookies WHERE name LIKE '%_ga%';</code> 같은 쿼리는 방문한 모든 사이트에서 설정된 Google Analytics 쿠키를 보여줍니다 — DevTools로는 한 화면에서 볼 수 없는 것입니다.</p>

<h3>쿠키 메타데이터 감사하기</h3>
<p>쿠키 테이블을 탐색해 어떤 도메인이 영구 쿠키를 설정하는지, 어떤 것이 보안 플래그를 사용하는지, 어떤 것이 SameSite 속성을 가지는지 확인하세요. 만료 날짜로 정렬해 몇 년씩 지속되는 쿠키를 찾으세요. 값은 암호화되어 있어도 이 정보는 모두 평문으로 확인 가능합니다.</p>

<h3>다른 Chrome 데이터베이스 검사하기</h3>
<p>Chrome의 프로필 디렉터리에는 <code>History</code>, <code>Login Data</code>, <code>Web Data</code>, <code>Favicons</code> 같은 다른 SQLite 데이터베이스도 있습니다. 각각을 Tome에서 열어 시각적으로 검사할 수 있습니다 — Chrome이 로컬에 어떤 데이터를 저장하는지 이해하는 데 유용합니다.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Mac App Store에서 Tome 받기</a></p>
`,
  },

  "compare-sqlite-databases-mac": {
    slug: "compare-sqlite-databases-mac",
    title: "Mac에서 SQLite 데이터베이스를 나란히 비교하는 방법",
    description:
      "마이그레이션, 스키마 변경, 데이터 동기화 후 두 SQLite 데이터베이스가 일치하는지 검증하는 것은 둘을 동시에 볼 방법이 없으면 지루한 작업이 됩니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>데이터 마이그레이션을 실행했고 결과를 검증해야 합니다. 또는 개발 데이터베이스를 스테이징 사본과 비교하고 있습니다. 또는 동료가 공유 데이터베이스의 자신의 버전을 보내왔고 차이를 찾아야 합니다. 어느 경우든 작업은 같습니다: 두 SQLite 데이터베이스를 보고 무엇이 바뀌었는지 파악하는 것. Mac에서 대부분의 도구는 단일 데이터베이스 연결을 중심으로 설계되어 있어서 이를 놀랍도록 어렵게 만듭니다.</p>

<h2>데이터베이스 비교가 보통 고통스러운 이유</h2>
<p><code>sqlite3</code> CLI로 두 데이터베이스를 비교하려면 두 개의 터미널 창을 열고 각각에서 같은 쿼리를 실행한 뒤 출력을 시각적으로 훑어보며 차이를 찾아야 합니다. 작은 테이블에서는 이 방법이 통합니다. 수백 개의 행과 수십 개의 열이 있는 테이블에서는 실수하기 쉽고 느립니다. 나란히 보는 화면도, 차이를 강조하는 기능도 없이 — 그냥 두 개의 순수 텍스트 스트림뿐입니다.</p>
<p>일부 개발자는 한 데이터베이스를 다른 데이터베이스로 변환하는 데 필요한 SQL 문을 출력하는 커맨드라인 도구인 <code>sqldiff</code>를 사용합니다. 스크립트화된 비교에는 강력하지만 시각적 차이가 아닌 원시 SQL 출력을 만들어냅니다. 실제로 무엇이 바뀌었는지 이해하려면 데이터 자체를 보는 대신 INSERT, UPDATE, DELETE 문을 읽어야 합니다.</p>
<p>대부분의 GUI 데이터베이스 브라우저는 한 번에 하나의 데이터베이스만 지원함으로써 문제를 악화시킵니다. 데이터베이스 A를 열어 검사하고, 닫고, 데이터베이스 B를 열어, 데이터베이스 A에서 무엇을 봤는지 기억하려 애씁니다. 일부 도구는 여러 연결을 지원하지만 각각에 대해 수동 설정이 필요합니다.</p>

<h2>Tome으로 두 데이터베이스를 나란히 열기</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>은 문서 기반 macOS 앱으로, 각 데이터베이스가 완전한 자신만의 인터페이스를 가진 창에서 열립니다. 두 데이터베이스를 열어 macOS 스플릿 뷰를 사용하거나 창을 드래그해서 나란히 배치하세요 — 두 텍스트 파일을 비교하는 것과 같은 방식입니다.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome comparing two SQLite databases side by side on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>시각적 스키마 비교</h3>
<p>두 데이터베이스가 열린 상태에서 각 창의 사이드바를 확인하세요. 원본에는 대상에 없는 테이블이 있나요? 인덱스가 한쪽에는 있고 다른 쪽에는 없나요? 두 사이드바를 시각적으로 훑어보면 이런 질문에 즉시 답할 수 있습니다.</p>

<h3>행 수준 비교</h3>
<p>같은 테이블을 양쪽 창에서 열어 데이터를 스크롤하세요. 같은 열로 양쪽을 정렬해 행을 맞추세요. 두 그리드를 동시에 볼 수 있으면 행 수나 데이터 값의 차이가 눈에 보입니다.</p>

<h3>독립적으로 쿼리하기</h3>
<p>각 창은 자신만의 SQL 쿼리 편집기를 가집니다. 양쪽에서 같은 집계 쿼리를 실행하세요 — <code>SELECT COUNT(*) FROM users;</code> — 결과를 나란히 비교하세요. 더 복잡한 쿼리를 작성해 각 데이터베이스에서 독립적으로 합계, 평균, 특정 레코드 존재 여부를 확인하세요.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Mac App Store에서 Tome 받기</a></p>
`,
  },

  "lightweight-database-browser-mac": {
    slug: "lightweight-database-browser-mac",
    title: "Mac용 경량 데이터베이스 브라우저 — Electron도, Java도 없이",
    description:
      "Chromium이나 JVM을 번들로 포함하는 데이터베이스 브라우저는 파일을 로드하기도 전에 수백 메가바이트를 소비합니다. 가벼운 대안은 macOS가 이미 제공하는 것을 사용해야 합니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>데이터베이스 브라우저를 설치했더니 활동 모니터에서 파일 하나 열지도 않았는데 350MB의 RAM을 사용 중이라고 나옵니다. 앱이 실행되는 데 몇 초가 걸립니다. 테이블을 스크롤하면 버벅입니다. 인터페이스가 다른 Mac 앱들과 일치하지 않습니다. 이것이 Electron과 Java 기반 데이터베이스 도구의 비용입니다: 실제로 무엇을 하고 있든 상관없이 자체 렌더링 엔진, 자체 UI 프레임워크, 자체 메모리 오버헤드를 가져옵니다.</p>

<h2>데이터베이스 브라우저가 불필요하게 무거운 이유</h2>
<p>Electron 앱은 인터페이스를 렌더링하기 위해 완전한 Chromium 브라우저를 배포합니다. 주로 표 형태의 데이터를 표시하는 앱인 데이터베이스 브라우저에게 이는 책상용 램프를 켜기 위해 디젤 발전기를 배송하는 것과 같습니다. DBeaver와 비슷한 도구들은 Java에서 실행되는데, 이는 JVM 시작 비용, 가비지 컬렉션 일시 정지, 시간이 지날수록 커지는 메모리 사용량을 의미합니다. 두 접근 방식 모두 효율성보다 크로스 플랫폼 호환성을 우선시합니다.</p>
<p>macOS에서 이 오버헤드는 특히 답답합니다. 운영체제가 이미 데이터베이스 브라우저에 필요한 모든 것을 제공하기 때문입니다: 네이티브 테이블 뷰를 위한 AppKit, 렌더링을 위한 Core Graphics, 다크 모드, 탭, 윈도우 관리에 대한 내장 지원. 이런 프레임워크를 직접 사용하는 데이터베이스 브라우저는 자체 플랫폼을 가져오는 것보다 훨씬 작고 극적으로 빠를 수 있습니다.</p>

<h2>Tome: 당신의 리소스를 존중하는 데이터베이스 브라우저</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>은 Swift와 AppKit으로 만들어졌습니다 — Electron도, Java도, 웹 뷰도 없습니다. Finder와 미리보기와 동일한 네이티브 프레임워크를 사용해서 즉시 실행되고, 메모리를 가볍게 유지하며, Mac에 어울리는 느낌을 주는 앱이 되었습니다.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome lightweight native SQLite browser for Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>1초 미만의 실행</h3>
<p>JVM 초기화도, Chromium 시작도 없습니다. Tome은 대부분의 Electron 앱이 스플래시 화면을 보여주는 데 걸리는 시간보다 빠르게 열립니다. Dock 아이콘을 클릭하면 데이터베이스가 거의 즉시 탐색할 준비가 됩니다.</p>

<h3>최소한의 메모리 사용량</h3>
<p>네이티브 AppKit 테이블 뷰는 웹 기반 그리드가 소비할 메모리의 일부만으로 수천 개의 행을 렌더링합니다. Xcode, VS Code, 브라우저와 함께 Tome을 열어두어도 리소스를 두고 경쟁하지 않습니다.</p>

<h3>완전한 기능 세트, 작은 패키지</h3>
<p>가볍다는 것이 제한적이라는 뜻은 아닙니다. Tome은 SQLite 작업에 필요한 모든 것을 포함합니다: 테이블, 뷰, 인덱스, 트리거 탐색, 데이터 인라인 편집, 행 삽입 및 삭제, 테이블 시각적 생성, 구문 강조와 자동완성을 갖춘 SQL 쿼리 실행. 이 모든 것이 Mac의 리소스를 존중하는 앱에서 이루어집니다.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Mac App Store에서 Tome 받기</a></p>
`,
  },

  "export-sqlite-to-csv-mac": {
    slug: "export-sqlite-to-csv-mac",
    title: "Mac에서 SQLite를 CSV로 내보내는 방법",
    description:
      "SQLite 데이터베이스의 데이터를 스프레드시트로 가져오려면 sqlite3 CLI의 서식 옵션과 씨름하거나 스크립트를 작성해야 합니다. 시각적 도구를 사용하면 쿼리 한 번으로 끝나는 작업이 됩니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>SQLite 데이터베이스의 데이터를 CSV 파일로 가져와야 합니다 — Excel을 쓰는 동료와 공유하거나, 데이터 시각화 도구에 가져오거나, 이식 가능한 형식으로 레코드를 보관하기 위해서일 수 있습니다. <code>sqlite3</code> CLI로 할 수 있지만 워크플로우가 번거롭습니다: <code>.mode csv</code>로 모드를 설정하고, <code>.output filename.csv</code>로 출력 파일을 설정하고, 쿼리를 실행한 뒤, <code>.output stdout</code>으로 출력을 다시 설정하는 것을 기억해야 합니다. 한 단계라도 놓치면 파일이 생성되지 않거나 출력이 여전히 리디렉션되어 터미널이 조용해집니다.</p>

<h2>CLI 내보내기 워크플로우는 실수하기 쉽습니다</h2>
<p><code>sqlite3</code>로 CSV로 내보내려면 올바른 순서로 여러 점 명령어(dot-command)가 필요합니다. 전형적인 세션은 이렇습니다:</p>
<pre><code>sqlite3 mydb.sqlite
.headers on
.mode csv
.output export.csv
SELECT * FROM products WHERE category = 'electronics';
.output stdout</code></pre>
<p><code>.headers on</code>을 잊으면 CSV에 열 헤더가 없습니다. <code>.output stdout</code>을 잊으면 다음 쿼리 결과가 화면이 아니라 파일로 갑니다. 다른 테이블을 내보내고 싶으신가요? 다른 파일 이름으로 전체 시퀀스를 반복해야 합니다. 일회성 내보내기라면 참을 만합니다. 여러 테이블에 걸친 정기적인 내보내기라면 지루하고 실수하기 쉽습니다.</p>
<p><code>csv</code>와 <code>sqlite3</code> 모듈로 Python 스크립트를 작성할 수도 있지만, 간단한 데이터 추출 작업치고는 지나친 엔지니어링 오버헤드입니다.</p>

<h2>Tome의 쿼리 편집기로 내보내기</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>을 사용하면 아무 SQL 쿼리나 실행하고 결과를 네이티브 그리드에서 볼 수 있습니다. 거기서 데이터를 선택하고 복사하면 스프레드시트에 바로 붙여넣거나 CSV로 저장할 수 있는 형식을 얻게 됩니다. 자동완성으로 쿼리를 작성하고, 실행하고, 데이터를 꺼내세요 — 점 명령어도, 모드 전환도 필요 없습니다.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome exporting SQLite query results on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>먼저 쿼리하고, 필요한 것만 내보내기</h3>
<p>전체 테이블을 내보낸 후 Excel에서 필터링하는 대신, Tome에서 대상을 좁힌 쿼리를 작성하세요: 행을 필터링하고, 테이블을 조인하고, 값을 집계하고, SQL로 열의 형식을 지정하세요. 실제로 필요한 데이터만, 원하는 형태로 이미 정리된 상태로 내보내세요.</p>

<h3>내보내기 전 시각적 확인</h3>
<p>내보내기 전에 스크롤 가능한 그리드에서 쿼리 결과를 확인하세요. 열이 올바른지, 데이터가 맞는지, 행 수가 예상과 일치하는지 확인하세요. 내보내기 전에 오류를 잡아내면 나쁜 CSV를 Excel에서 연 후에 작업을 다시 하는 수고를 덜어줍니다.</p>

<h3>먼저 전체 스키마 탐색하기</h3>
<p>필요한 데이터가 어느 테이블에 있는지 확실하지 않으신가요? Tome의 사이드바에서 테이블, 뷰, 그 열들을 탐색하세요. 샘플 데이터를 클릭해보며 내보내기 쿼리를 작성하기 전에 스키마를 이해하세요. 이런 시각적 탐색은 터미널에서 <code>.schema</code> 명령을 실행하는 것보다 훨씬 빠릅니다.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Mac App Store에서 Tome 받기</a></p>
`,
  },

  "sqlite-for-data-science-mac": {
    slug: "sqlite-for-data-science-mac",
    title: "Mac용 데이터 과학을 위한 SQLite 브라우저",
    description:
      "SQLite로 로컬 데이터셋을 다루는 데이터 과학자에게는 파이프라인 코드를 작성하기 전에 스키마를 탐색하고, 데이터를 미리 보고, 쿼리를 테스트할 방법이 필요합니다 — 완전한 데이터베이스 서버를 띄우지 않고서.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>Kaggle 다운로드, 스크래핑한 데이터셋, 동료의 내보내기 파일, 혹은 자신의 ETL 출력물로 SQLite 파일 형태의 데이터셋을 받았습니다. 이를 처리하는 Python 코드를 작성하기 전에 그 안에 무엇이 있는지 이해해야 합니다: 테이블 이름, 열 타입, 행 수, 데이터 분포, 잠재적인 품질 문제. Jupyter 노트북으로 SQLite를 쿼리할 수는 있지만, 연결을 설정하고, 탐색적 SQL을 작성하고, 노트북 셀에서 결과를 렌더링하는 것은 그냥 데이터를 빠르게 훑어보고 싶을 때는 오버헤드입니다.</p>

<h2>데이터 과학 워크플로우의 탐색 공백</h2>
<p>데이터 과학자는 보통 세 가지 방법 중 하나로 SQLite 파일을 탐색합니다: <code>sqlite3</code> CLI(빠르지만 시각적 출력이 없음), <code>pandas.read_sql()</code>을 사용한 Jupyter 노트북(유연하지만 매 세션마다 설정 필요), 또는 DBeaver 같은 무거운 데이터베이스 IDE(강력하지만 로컬 파일에는 과함). 이 중 어느 것도 "파일을 열고 즉시 데이터를 탐색한다"는 최적의 지점에 도달하지 못합니다.</p>
<p>CLI는 데이터 탐색에 특히 부족합니다. 넓은 테이블에 대한 시각적 서식이 없고, 스크롤 가능한 출력도 없으며, 데이터 분포를 빠르게 훑어볼 방법도 없습니다. 노트북은 분석에는 가치를 더하지만 "이 데이터가 어떻게 생겼나?"라는 초기 단계에서는 느립니다. 결국 단 한 개의 행도 보기 전에 상용구 연결 코드를 작성하게 됩니다.</p>

<h2>Tome으로 데이터셋을 시각적으로 탐색하기</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>을 사용하면 SQLite 데이터셋을 열어 즉시 구조를 이해할 수 있습니다. 모든 테이블이 행 수와 함께 사이드바에 나타납니다. 테이블을 클릭하면 네이티브 그리드에서 데이터를 스크롤할 수 있습니다. 설정도, 연결 문자열도, 상용구 코드도 없이 — 그냥 파일을 열고 보면 됩니다.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome browsing a data science SQLite dataset on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>코드를 작성하기 전에 스키마 이해하기</h3>
<p>테이블을 탐색해 열 이름, 타입, 샘플 값을 확인하세요. 어떤 열에 null이 있는지, 어떤 테이블이 외래 키로 서로 관계를 맺는지, 데이터셋이 어떻게 구조화되어 있는지 파악하세요 — Python 코드를 한 줄도 작성하기 전에. 이런 맥락은 처음부터 분석 코드를 더 정확하게 만들어줍니다.</p>

<h3>쿼리를 대화식으로 테스트하기</h3>
<p>자동완성이 있는 Tome의 SQL 편집기를 사용해 쿼리를 프로토타이핑하세요. WHERE 절, JOIN 조건, 집계를 Tome에서 먼저 테스트한 뒤 작동하는 SQL을 Python 파이프라인에 복사하세요. 시각적 편집기에서 쿼리 오류를 잡아내는 것이 노트북 셀에서 디버깅하는 것보다 빠릅니다.</p>

<h3>ETL 출력 검사하기</h3>
<p>파이프라인이 SQLite 데이터베이스에 결과를 기록한 후, Tome에서 열어 출력을 검증하세요. 행 수를 확인하고, null 값을 찾고, 변환이 예상한 결과를 만들어냈는지 확인하세요 — 추가 검증 코드를 작성하지 않고도.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Mac App Store에서 Tome 받기</a></p>
`,
  },

  "postico-alternative-sqlite-mac": {
    slug: "postico-alternative-sqlite-mac",
    title: "Mac용 SQLite를 위한 Postico 대안",
    description:
      "Postico는 사랑받는 Mac 네이티브 데이터베이스 클라이언트지만 PostgreSQL만 지원합니다. SQLite 파일을 다룬다면 다른 형식을 위한 동일한 네이티브 품질이 필요합니다.",
    date: "2026-09-06",
    readTime: "4분 읽기",
    content: `
<p>Mac에서 PostgreSQL을 위해 Postico를 사용해봤다면 네이티브 데이터베이스 클라이언트가 어떤 느낌이어야 하는지 알 것입니다: 즉각적인 실행, 깔끔한 인터페이스, 제대로 된 macOS 통합, 그리고 어수선함 없이 생산적으로 작업할 수 있을 만큼의 기능. 이 플랫폼에서 최고의 데이터베이스 도구 중 하나로 널리 인정받고 있습니다. 유일한 문제는 Postico가 SQLite를 지원하지 않는다는 것입니다. 데이터가 PostgreSQL 서버가 아니라 .sqlite 파일에 있다면 다른 것을 찾아야 하는데 — 그 "다른 것"은 보통 Postico와는 전혀 다르게 느껴지는 Electron이나 Java 앱입니다.</p>

<h2>Postico와 SQLite 도구 사이의 간극</h2>
<p>Postico는 데이터베이스 클라이언트가 훌륭한 Mac 앱이 될 수 있음을 증명했습니다. 네이티브 macOS 컨트롤을 사용하고, 시스템 관례를 존중하며, 빠르게 실행되고, 방해가 되지 않습니다. 대부분의 SQLite 브라우저가 도달하지 못한 기준을 세웠습니다.</p>
<p>DB Browser for SQLite는 Qt 기반입니다 — 기능적이지만 macOS와는 시각적으로 단절되어 있습니다. TablePlus는 SQLite를 지원하지만 십여 개의 다른 데이터베이스도 지원하기 때문에 Postico가 의도적으로 피한 복잡함을 가져옵니다. DBeaver는 Java에서 실행되어 그에 따른 모든 리소스 오버헤드를 가집니다. 이 중 어느 것도 Postico 사용자가 기대하는 "Mac을 위해 만들어진" 경험을 제공하지 못합니다.</p>
<p>문제는 이런 도구들이 나쁘다는 것이 아닙니다 — 그렇지 않습니다. 문제는 진정으로 네이티브한 Mac 데이터베이스 클라이언트를 경험하고 나면 크로스 플랫폼 대안이 타협처럼 느껴진다는 것입니다. 같은 철학을 다른 형식에 적용한 것을 원하게 됩니다.</p>

<h2>Tome: SQLite를 위한 Postico 경험</h2>
<p><a href="https://apps.apple.com/app/tome/id6806639875">Tome</a>은 Postico가 PostgreSQL에 가져다준 것과 같은 네이티브 Mac 품질을 SQLite에 가져다줍니다. Swift와 AppKit으로 만들어져 즉시 실행되고, macOS 디자인 관례를 따르며, SQLite 데이터베이스를 탐색하고 편집하는 한 가지 일에 집중합니다.</p>

<a href="https://apps.apple.com/app/tome/id6806639875" target="_blank" rel="noopener" style="display:block"><img src="/apps/tome.png" alt="Tome as a Postico-quality SQLite browser for Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>같은 철학, 다른 형식</h3>
<p>Postico처럼 Tome도 철저하게 집중되어 있습니다. PostgreSQL도, MySQL도, MongoDB도 없이 — 오직 SQLite만 있습니다. 모든 기능이 실제로 다루는 형식을 위해 설계되었습니다. 인터페이스는 깔끔하고, 앱은 빠르며, 관심을 분산시키는 불필요한 요소가 없습니다.</p>

<h3>네이티브 macOS 경험</h3>
<p>제대로 된 윈도우와 탭 지원을 갖춘 문서 기반 아키텍처. 시스템 다크 모드. Finder에서의 드래그 앤 드롭. macOS 관례와 일치하는 키보드 단축키. Tome은 Mac 앱처럼 동작합니다 — 실제로 애플이 자사 애플리케이션에 사용하는 것과 같은 프레임워크로 만들어진 Mac 앱이기 때문입니다.</p>

<h3>탐색, 편집, 쿼리</h3>
<p>사이드바에서 테이블, 뷰, 인덱스, 트리거를 탐색하세요. 셀을 인라인으로 편집하세요. SQL을 작성하지 않고 행을 삽입하고 삭제하세요. 쿼리가 필요할 때는 내장 편집기가 스키마에 대한 구문 강조와 자동완성을 제공합니다. SQLite 브라우저에 필요한 모든 것 — 그리고 필요 없는 것은 아무것도 없습니다.</p>

<p><a href="https://apps.apple.com/app/tome/id6806639875">Mac App Store에서 Tome 받기</a></p>
`,
  },
};
