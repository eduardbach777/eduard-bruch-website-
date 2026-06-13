import type { ArticleSet } from "./index";

export const zhHantArticles: ArticleSet = {
  "mac-audio-podcasting-setup": {
    slug: "mac-audio-podcasting-setup",
    title: "Mac Podcast 音訊設定：錄音時控制你聽到的聲音",
    description:
      "在 Podcast 錄音時，監聽音量、來賓聲音和通知管理都在爭用同一個音量滑桿。這裡有更好的設定方式。",
    date: "2026-03-05",
    readTime: "5 min read",
    content: `
<p>你正在 Mac 上錄製 Podcast。你需要清楚聽到來賓的聲音（透過 Zoom、Riverside 或 SquadCast）。你需要監控 DAW 的錄音電平。你需要將 Slack 靜音，以免通知聲出現在錄音中。而且你需要完全消除系統通知聲——訪談進行中出現 macOS 的「叮」聲是無法使用的音訊。</p>

<p>macOS 只為所有這些提供一個音量滑桿。這是不夠的。</p>

<h2>Mac 上的 Podcast 音訊挑戰</h2>

<p>在 Podcast 錄音期間，你通常有：</p>
<ul>
  <li><strong>通訊應用程式</strong>（Zoom、Riverside、SquadCast）——來賓音訊，需要清晰</li>
  <li><strong>DAW／錄音應用程式</strong>（Logic、GarageBand、Audacity、Hindenburg）——監控自己的電平</li>
  <li><strong>通知來源</strong>（Slack、Mail、行事曆、訊息）——錄音時必須完全靜音</li>
  <li><strong>瀏覽器</strong>——可能有節目筆記、研究分頁或計時器在運行</li>
</ul>

<p>所有這些都在相同音量下是一片混亂。你的來賓聲音與系統叮聲競爭。Slack 通知可能會毀掉一個錄音片段。而如果你需要調整來賓音量，更改系統音量也會改變你的監聽電平。</p>

<h2>一般的應對方式</h2>

<p>大多數 Podcast 主持人使用以下組合：</p>
<ul>
  <li>專注模式（請勿打擾）來抑制通知</li>
  <li>在錄音前手動關閉 Slack、Mail 和其他有噪音的應用程式</li>
  <li>透過通訊應用程式的內部音量調整來賓音量</li>
</ul>

<p>這可以運作，但容易出錯。忘記啟用請勿打擾，通知就會毀掉你的錄音片段。忘記關閉 Slack，來電就會進來。而且你仍然無法獨立控制來賓音量與監聽電平。</p>

<h2>Podcast 的逐應用程式音訊控制</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 讓你透過獨立控制每個應用程式來建立清晰的錄音環境：</p>

<img src="/apps/sounddial.png" alt="SoundDial Podcast 設定——來賓音訊、監聽和通知在獨立的音量等級" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>錄音配置</h3>
<ul>
  <li><strong>Zoom／Riverside：</strong>80-100%——清晰的來賓音訊</li>
  <li><strong>Logic／GarageBand：</strong>60%——舒適的監聽，不會疲勞</li>
  <li><strong>Slack：</strong>靜音——零通知聲</li>
  <li><strong>Mail：</strong>靜音</li>
  <li><strong>訊息：</strong>靜音</li>
  <li><strong>行事曆：</strong>靜音</li>
  <li><strong>瀏覽器：</strong>靜音——沒有意外的自動播放</li>
</ul>

<p>將此儲存為「錄音」配置。在按下錄音前，一鍵套用配置。所有通知來源都被靜音，來賓音量全開，監聽在舒適的等級。</p>

<h3>編輯配置</h3>
<ul>
  <li><strong>Logic／Hindenburg：</strong>100%——編輯時的完整監聽</li>
  <li><strong>Spotify：</strong>靜音——沒有參考混淆</li>
  <li><strong>Slack：</strong>20%——休息時的細微通知</li>
  <li><strong>瀏覽器：</strong>40%——用於節目筆記和研究</li>
</ul>

<p>兩個配置，兩次點擊，兩個完全不同的音訊環境。不需要手動關閉和重新開啟應用程式。不會忘記在錄音後重新啟用通知。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "mac-too-loud-full-volume-tame-it": {
    slug: "mac-too-loud-full-volume-tame-it",
    title: "為什麼 Mac 全音量時這麼響？如何獲得更精細的控制",
    description:
      "MacBook Pro 的喇叭很棒——直到它震耳欲聾為止。如果即使是中等音量設定也感覺太大聲，這裡有更精確的音訊控制方法。",
    date: "2026-03-08",
    readTime: "4 min read",
    content: `
<p>Apple 較新的 MacBook Pro 型號（14 吋和 16 吋）搭載了筆記型電腦中非常強勁的喇叭。強勁到中等音量等級可能真的很響——特別是在安靜的房間、深夜或戴著耳機時。「舒適」和「太大聲」之間的差距有時只有一兩個音量步驟。</p>

<h2>為什麼音量步驟感覺太粗糙</h2>

<p>macOS 透過鍵盤有 <strong>16 個音量步驟</strong>。每個步驟約為總範圍的 6.25%。在強勁的喇叭或靈敏的耳機上，單個步驟可能代表顯著的感知音量變化——按一下音量鍵就從「完美」變成「太大聲」。</p>

<h2>內建修復：四分之一步驟音量</h2>

<p>按住 <strong>Option + Shift</strong> 並按音量上下鍵。每次按下調整四分之一個正常步驟，給你 <strong>64 個等級</strong>而不是 16 個。這種 4 倍精細的控制讓你更容易找到恰到好處的音量，特別是使用強勁的喇叭或耳機時。</p>

<p>這是大多數人不知道的最有用的 Mac 音訊技巧。</p>

<h2>更深層的問題：所有東西共用一個滑桿</h2>

<p>即使有 64 個等級，你仍然只有一個滑桿控制所有應用程式。如果你把音量設得足夠低以舒適地聽通知聲，你的音樂可能太安靜。如果你為音樂設定，通知聲的叮聲可能會讓你跳起來。</p>

<p>真正的問題是不同的音訊來源需要不同的音量。通知應該是細微的。音樂應該有存在感。通話應該清晰。瀏覽器影片應該中等。一個滑桿無法同時滿足所有這些需求。</p>

<h2>精確控制的逐應用程式音量</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 為每個應用程式提供其自己的音量滑桿，從 0% 到 200% 以 <strong>1% 為增量</strong>。與 macOS 的 16 個（或使用修飾鍵時 64 個）全系統步驟相比，每個應用程式有 200 個精確度等級。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上對每個應用程式提供 1% 精確度的精細音量控制" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>將系統音量設定為中等基準（50-60%），然後使用 SoundDial 微調每個應用程式：</p>
<ul>
  <li><strong>Spotify：</strong>35%——舒適的背景音量</li>
  <li><strong>Slack：</strong>12%——細微的通知叮聲</li>
  <li><strong>Zoom：</strong>85%——清晰的通話音訊，不會讓人不知所措</li>
  <li><strong>Safari：</strong>45%——中等的影片播放</li>
</ul>

<p>這樣，沒有任何單一音訊來源會「太大聲」。每個都獨立調整到理想的等級。Slack 叮聲在 12% 時幾乎不引人注意，而你的 Zoom 通話在 85% 時非常清晰——所有這些都在相同的系統音量設定下。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "slack-huddle-volume-issues-mac": {
    slug: "slack-huddle-volume-issues-mac",
    title: "Mac 上的 Slack 即時通話音量問題：太安靜、太大聲，或與音樂爭鬥",
    description:
      "Slack 即時通話與你的音樂和通知爭用相同的音量。以下是如何在 Mac 上獨立控制即時通話音訊與其他一切。",
    date: "2026-03-10",
    readTime: "5 min read",
    content: `
<p>Slack 即時通話很方便——你點擊一個按鈕就進入了語音通話，無需安排會議。但音訊很混亂。即時通話與你的 Spotify 音量相同。Slack 通知聲與通話同一音量地叮響。當有人在即時通話中分享音樂或帶音訊的螢幕時，要麼聽不見，要麼震耳欲聾。</p>

<p>問題不在於 Slack。問題在於 macOS。一切都通過一個音量滑桿，所以即時通話音訊、通知聲、音樂和瀏覽器音訊都在爭用同一個空間。</p>

<h2>Slack 的內部音訊控制</h2>

<p>Slack 的音訊控制有限：</p>
<ul>
  <li><strong>通知偏好設定：</strong>Slack→設定→通知→聲音和外觀。你可以更改通知聲音或停用特定聲音，但無法獨立設定通知音量與即時通話音量。</li>
  <li><strong>即時通話音量：</strong>在即時通話期間，通話與 Slack 其他聲音沒有單獨的音量滑桿。Slack 中的所有內容對 macOS 來說都是一個音訊流。</li>
  <li><strong>輸入/輸出裝置：</strong>Slack→設定→音訊和視訊讓你選擇麥克風和喇叭裝置，但不是每個功能的音量等級。</li>
</ul>

<h2>三個 Slack 音訊問題</h2>

<h3>1. 即時通話相對於音樂太安靜</h3>
<p>你的音樂在舒適的音量。你加入即時通話。你同事的聲音與你的音樂音量相同——你無法清楚地分辨文字。調高系統音量使音樂太大聲。</p>

<h3>2. 即時通話中的通知聲</h3>
<p>你在即時通話中討論。每條傳入的 Slack 訊息都以與通話相同的音量叮響。在有活躍頻道的繁忙工作空間中，不斷的叮響使即時通話無法使用。</p>

<h3>3. 即時通話對於背景收聽太大聲</h3>
<p>有時你加入即時通話只是被動地收聽同時工作。你希望它在背景等級——安靜到不會分心，大聲到如果有人說你的名字時能聽到。macOS 不讓你將 Slack 設定為 20% 同時保持瀏覽器在 60%。</p>

<h2>修復方式：獨立控制 Slack 的音量</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 為 Slack 提供其自己的音量滑桿，與所有其他應用程式分開。由於 Slack 的即時通話音訊和通知聲是同一應用程式的一部分，滑桿控制兩者——但大多數情況下這正是你想要的。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 Mac 上即時通話期間獨立控制 Slack 音量，同時音樂在不同音量播放" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>即時通話最佳化設定</h3>
<ul>
  <li><strong>Slack：</strong>90-100%（清晰的即時通話音訊，通知很大聲但你在積極使用 Slack）</li>
  <li><strong>Spotify：</strong>15%（幾乎聽不到的背景，不與聲音競爭）</li>
  <li><strong>瀏覽器：</strong>靜音（沒有意外的分頁音訊）</li>
</ul>

<h3>被動即時通話設定</h3>
<ul>
  <li><strong>Slack：</strong>30%（背景收聽等級）</li>
  <li><strong>Spotify：</strong>40%（主要音訊是你的音樂）</li>
  <li><strong>瀏覽器：</strong>50%（正常工作等級）</li>
</ul>

<p>將每個儲存為配置。當即時通話開始時，一鍵套用正確的配置。或使用<strong>自動閃避</strong>——當即時通話啟動你的麥克風時，SoundDial 會自動降低除 Slack 以外的所有音量。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "set-default-volume-new-apps-mac": {
    slug: "set-default-volume-new-apps-mac",
    title: "如何在 Mac 上為新應用程式設定預設音量",
    description:
      "新應用程式預設以全音量啟動。以下是如何讓每個新應用程式以舒適的等級開始——這樣就不會有任何意外驚嚇。",
    date: "2026-03-12",
    readTime: "3 min read",
    content: `
<p>你安裝了一個新應用程式。它第一次啟動。它立即播放音訊——一個介紹聲、一個通知、一個教學影片——以全系統音量。你沒有預期到。你的耳機已戴上。你的耳朵在嗡嗡作響。</p>

<p>macOS 沒有「新應用程式的預設音量」概念，因為 macOS 沒有逐應用程式音量。每個應用程式都獲得系統音量，而系統音量是你上次設定的任何值。新應用程式不會得到特殊待遇——它們就是以其他所有應用程式所在的音量爆炸。</p>

<h2>為什麼這是個問題</h2>

<p>當你第一次啟動一個應用程式時，你不知道它會有多大聲。有些應用程式立即播放聲音（入門教學、通知聲、歡迎影片）。如果你的系統音量在 80%，因為你在聽音樂，那個新應用程式的聲音也在 80%——這可能遠比意外音訊來源所需的音量大得多。</p>

<p>這在以下情況特別令人不安：</p>
<ul>
  <li>播放啟動聲的通訊應用程式（Slack、Teams）</li>
  <li>第一次啟動時有影片教學的應用程式</li>
  <li>立即爆出標題螢幕音樂的遊戲</li>
  <li>自動播放內容的瀏覽器應用程式</li>
</ul>

<h2>修復方式：新應用程式的預設音量</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 有一個新應用程式的<strong>可配置預設音量</strong>。在設定中，你設定新偵測到的應用程式應該從什麼音量等級開始——例如 70%。任何應用程式第一次啟動並產生音訊時，SoundDial 將其設定為 70% 而不是 100%。</p>

<img src="/apps/sounddial.png" alt="SoundDial 預設音量設定——新應用程式以配置的等級開始，而不是全爆" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>這意味著：</p>
<ul>
  <li>新安裝的應用程式沒有意外的全音量音訊</li>
  <li>每個新應用程式以舒適、可預測的等級開始</li>
  <li>然後你可以根據需要從預設值調高或調低</li>
  <li>一旦調整，<strong>音量記憶</strong>功能會記住該應用程式未來啟動時的等級</li>
</ul>

<p>這是一個小功能，但它解決了一個真實的日常煩惱——「新應用程式意外爆炸」，這至少讓每個人都措手不及一次。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "mac-startup-sound-too-loud": {
    slug: "mac-startup-sound-too-loud",
    title: "Mac 啟動聲太大聲？如何停用或降低它",
    description:
      "每次重新啟動時，Mac 啟動聲都以全音量爆出——在會議和安靜的房間裡特別尷尬。以下是如何靜音或控制它。",
    date: "2026-03-15",
    readTime: "4 min read",
    content: `
<p>你在安靜的辦公室重新啟動 Mac。會議室死寂無聲。然後——<em>嗡——</em>啟動音效以全音量爆出。每個人都看著你。這個聲音很有標誌性，但它也是無法控制的，而且往往令人尷尬地大聲。</p>

<h2>如何停用啟動聲</h2>

<p>macOS 讓你完全關閉啟動音效：</p>

<ol>
  <li>前往<strong>系統設定→聲音</strong></li>
  <li>找到<strong>「啟動時播放聲音」</strong></li>
  <li>取消勾選它</li>
</ol>

<p>完成了。你的 Mac 從此以後將以靜默方式啟動。不需要終端機指令——此設定自 macOS Big Sur 以來一直可用。</p>

<h3>終端機方法（如果你偏好）</h3>
<p>你也可以透過終端機停用它：</p>
<p><code>sudo nvram StartupMute=%01</code></p>
<p>重新啟用：</p>
<p><code>sudo nvram StartupMute=%00</code></p>

<h2>你能降低啟動聲而不是停用它嗎？</h2>

<p>不能直接降低。啟動音效以固定音量播放，該音量由關機時的系統音量決定。如果你的 Mac 在關機時音量在 80%，音效大約在 80% 播放。如果在 20%，音效較安靜。</p>

<p><strong>解決方法：</strong>在重新啟動 Mac 之前，將系統音量降低到 10-20%。啟動音效將以該較低等級播放。這不理想——它需要記住——但如果你想要音效在合理音量而不是完全靜音，這是有效的。</p>

<h2>更廣泛的 Mac 聲音控制問題</h2>

<p>啟動音效只是 macOS 有限音訊控制的一個例子。系統聲音、通知聲音和應用程式音訊都混合在一起，幾乎沒有獨立控制。如果你發現自己整天定期調整音量來管理不同的音訊來源，逐應用程式音量控制解決了更廣泛的問題。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 為你 Mac 上的每個應用程式提供自己的音量滑桿。將通知應用程式設低，音樂在舒適的等級，通話在全音量——全部獨立。將配置儲存為配置，一鍵切換。</p>

<img src="/apps/sounddial.png" alt="SoundDial——獨立管理所有 Mac 音訊來源的逐應用程式音量控制" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "webex-volume-too-low-mac": {
    slug: "webex-volume-too-low-mac",
    title: "Mac 上 Cisco Webex 音量太低？如何修復",
    description:
      "Webex 通話在你的 Mac 上幾乎聽不到。這裡列出每個修復方法——從 Webex 音訊設定到使用逐應用程式混音器將通話音量提升超過 100%。",
    date: "2026-03-18",
    readTime: "5 min read",
    content: `
<p>Webex 是企業環境中最常用的視訊會議工具之一——也是 Mac 上音訊品質最多抱怨的工具之一。通話音量低、聲音模糊，以及音訊似乎比相同系統音量下的 Zoom 或 Teams 更安靜。如果你幾乎聽不到 Webex 通話，你並不孤單。</p>

<h2>1. 檢查 Webex 音訊設定</h2>

<p>在 Webex 會議期間，點擊音訊選單（喇叭圖示或三個點→音訊設定）：</p>
<ul>
  <li>確保選擇了正確的<strong>喇叭</strong>裝置</li>
  <li>將喇叭音量滑桿拖到最大</li>
  <li>點擊「測試」播放測試音並驗證輸出</li>
  <li>檢查是否啟用了「音樂模式」——除非你特別在呈現音樂，否則停用它</li>
  <li>檢查降噪設定——「移除背景噪音」在積極模式下可以降低感知的聲音音量</li>
</ul>

<h2>2. 檢查 macOS 輸出</h2>

<p>系統設定→聲音→輸出。驗證選擇了正確的裝置且音量最大。在 macOS 更新或裝置切換後，Webex 可能使用意外的輸出。</p>

<h2>3. 藍牙編解碼器問題</h2>

<p>使用 AirPods 或藍牙耳機？Webex 啟動你的麥克風會強制 AAC→SCO 編解碼器切換，降低音訊品質和音量。使用單獨的麥克風（Mac 內建麥克風或 USB）並僅將藍牙耳機作為輸出。</p>

<h2>4. Webex 特定的音訊處理</h2>

<p>Webex 有積極的音訊處理，可以降低通話參與者的明顯音量。嘗試以下 Webex 設定：</p>
<ul>
  <li>將降噪設定為「低」而不是「高」</li>
  <li>如果啟用，停用「針對我的聲音最佳化」</li>
  <li>嘗試從「電腦音訊」切換到特定裝置</li>
</ul>

<h2>5. IT/管理員問題</h2>

<p>在企業環境中，Webex 通常由 IT 部門管理，具有特定的音訊政策。某些設定可能被鎖定或預先配置。如果基本修復無效，請與你的 IT 部門聯繫關於 Webex 音訊政策。某些組織限制最大音訊等級或強制執行特定的音訊處理設定。</p>

<h2>6. 將 Webex 提升超過 100%</h2>

<p>如果設定已最大化且參與者仍然太安靜，<a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 讓你將 Webex 提升到 <strong>200%</strong>。這將通話音訊放大超過 Webex 的內建最大值——當參與者有劣質麥克風或 Webex 的音訊處理過度降低訊號時很有用。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上將 Cisco Webex 通話音量提升超過 100%" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial 在連續的 Webex 會議中也有幫助：使用自動閃避在每次會議開始時自動降低背景音樂，並在休息期間恢復。儲存「會議」音量配置以便立即設定工作日的首選音訊平衡。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "mac-two-audio-sources-same-time": {
    slug: "mac-two-audio-sources-same-time",
    title: "如何在 Mac 上同時收聽兩件事而不瘋掉",
    description:
      "音樂和 Podcast。講座和筆記影片。通話和背景音樂。macOS 讓你為兩者選擇一個音量——以下是如何平衡它們。",
    date: "2026-03-20",
    readTime: "4 min read",
    content: `
<p>你想同時收聽兩個音訊來源。通話時聽音樂。看教學時聽 Podcast。學習時聽背景環境聲。兩件事，兩個不同的理想音量。macOS 為兩者提供一個滑桿。</p>

<p>這是 macOS 的基本音訊限制：每個應用程式共用一個音量。你不能說「這個 30%，那個 80%。」一切都在一個等級，或什麼都沒有。</p>

<h2>當你真正需要兩個音訊來源時</h2>

<p>這不是邊緣情況。這是大多數人使用電腦的方式：</p>

<ul>
  <li><strong>音樂 + 視訊通話</strong>——最常見的。Zoom 會議中的背景音樂，但要夠安靜才能聽到同事。</li>
  <li><strong>講座 + 參考資料</strong>——學生在觀看錄製的講座時，偶爾觀看 YouTube 教學以了解背景。</li>
  <li><strong>Podcast + 環境聲</strong>——收聽 Podcast 同時輕聲播放白噪音或雨聲應用程式。</li>
  <li><strong>兩個瀏覽器分頁</strong>——一個分頁的培訓影片和另一個分頁的演示，音量不同。</li>
  <li><strong>遊戲 + 語音聊天</strong>——遊戲音訊用於沉浸感，Discord 用於通訊。</li>
</ul>

<p>在每種情況下，一個來源是「主要的」（更大聲、更重要），另一個是「次要的」（更安靜、支持性的）。理想比例對每種組合都不同，而且全天都在變化。</p>

<h2>macOS 的限制</h2>

<p>macOS 有一個音量滑桿。按音量鍵，一切都等比例變化。如果你把音量設定在舒適的 Podcast 聆聽等級，雨聲應用程式也在那個等級——要麼太大聲（分心）要麼你沒有在它自己的應用程式中調整它（如果它甚至有音量控制的話）。</p>

<p>某些應用程式有內部音量滑桿（Spotify、VLC），但大多數沒有。即使有，在兩個獨立的應用程式之間切換調整兩個單獨的音量控制也很笨拙和緩慢。</p>

<h2>修復方式：在一個面板中的逐應用程式音量</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 將每個應用程式放在一個選單列面板中，具有獨立的音量滑桿。兩個音訊來源，並排，各有自己的等級。調整一個而不觸碰另一個。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上顯示兩個音訊來源在不同音量等級" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>範例設定：</p>

<p><strong>音樂 + Zoom 通話：</strong></p>
<ul>
  <li>Zoom：100% | Spotify：20%</li>
</ul>

<p><strong>Podcast + 雨聲：</strong></p>
<ul>
  <li>Podcast 應用程式：70% | 雨聲應用程式：15%</li>
</ul>

<p><strong>講座 + YouTube 教學：</strong></p>
<ul>
  <li>Zoom（講座）：90% | Chrome（YouTube）：40%</li>
</ul>

<p>每種組合都是不同的平衡。將你定期使用的儲存為<strong>音量配置</strong>，一鍵切換。自動閃避自動處理音樂+通話的場景——當通話開始時，音樂降到你配置的等級，無需你觸碰任何東西。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "watch-movies-mac-late-night-volume": {
    slug: "watch-movies-mac-late-night-volume",
    title: "如何在 Mac 上看電影而不吵醒所有人",
    description:
      "對話幾乎聽不到，然後爆炸聲震動牆壁。以下是如何在 Mac 上馴服深夜觀影的電影音訊——同時不錯過任何一句話。",
    date: "2026-03-22",
    readTime: "5 min read",
    content: `
<p>現在是凌晨 1 點。你在床上用 MacBook 看電影。角色在低語——你把音量調高。然後開始了一場車追，突然你整個公寓都能聽到。你猛撲向音量鍵。這個循環持續了兩個小時。</p>

<p>問題是<strong>動態範圍</strong>——電影最安靜和最大聲時刻之間的差距。在有強大音響系統的電影院中，這個範圍創造了沉浸式體驗。在午夜的 MacBook 上，它創造了一場「聽不到對話」和「吵醒鄰居」之間的持續戰鬥。</p>

<h2>為什麼電影比音樂或 Podcast 更大聲</h2>

<p>音樂通常以壓縮的動態範圍進行母帶處理——最安靜和最大聲部分之間的差異相對較小（可能是 10-15 dB）。Podcast 甚至更加壓縮。電影，特別是動作片，動態範圍可以達到 <strong>30-40 dB</strong>——安靜的部分非常輕柔，而大聲的部分設計為震動電影院座椅。</p>

<p>當你將 MacBook 音量設定為聽對話時，動作場景在聲壓方面大 100 倍。沒有舒適的系統音量能同時適合兩者。</p>

<h2>修復方案 1：使用串流服務的夜間模式</h2>

<p>一些串流服務有專門為此設計的動態範圍壓縮功能：</p>
<ul>
  <li><strong>Netflix：</strong>在播放期間尋找「降低響亮聲音」切換（在瀏覽器和原生應用程式的音訊設定中可用）</li>
  <li><strong>Apple TV+：</strong>系統設定→輔助使用→「降低響亮聲音」</li>
  <li><strong>Amazon Prime：</strong>在支援的標題上有「對話增強」功能</li>
  <li><strong>Disney+：</strong>目前沒有等效功能</li>
</ul>

<p>這些功能壓縮動態範圍，使安靜的部分更大聲，大聲的部分更安靜。結果是更均勻的音訊，在低音量下效果更好。</p>

<h2>修復方案 2：使用耳機</h2>

<p>耳機解決了「吵醒所有人」的部分——你的音訊是私人的。但它們不解決動態範圍問題。對話-爆炸的循環仍然發生，只是在你的耳朵裡。這就是逐應用程式音量控制有幫助的地方：精確設定串流應用程式的音量用於耳機收聽。</p>

<h2>修復方案 3：將你的串流應用程式設定到特定音量</h2>

<p>深夜觀影的真正問題是你的串流應用程式、通知聲音和任何其他音訊都在相同的系統音量下。凌晨 2 點的 Slack 叮聲與電影對話音量相同是心臟病級別的驚嚇。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 讓你創建完美的深夜設定：</p>

<img src="/apps/sounddial.png" alt="SoundDial 深夜電影設定——串流應用程式在中等音量，通知靜音" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>深夜電影配置</h3>
<ul>
  <li><strong>Netflix／Apple TV／Disney+／瀏覽器：</strong>40-50%——舒適的對話等級，沒有震耳欲聾的動作場景</li>
  <li><strong>Slack：</strong>靜音——沒有意外叮聲</li>
  <li><strong>Mail：</strong>靜音</li>
  <li><strong>iMessage：</strong>靜音</li>
  <li><strong>系統聲音：</strong>靜音</li>
</ul>

<p>將此儲存為「夜間」配置。當你開始深夜電影時，一鍵套用配置。所有通知來源都被靜音，你的串流應用程式在受控音量。完成後，切換回你的白天配置。</p>

<p>將此與串流服務的「降低響亮聲音」功能結合以獲得最大效果：服務壓縮動態範圍，SoundDial 確保你的 Mac 上沒有其他東西發出聲音。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "mac-volume-resets-after-sleep": {
    slug: "mac-volume-resets-after-sleep",
    title: "Mac 睡眠後音量重置？如何保持你的音訊設定",
    description:
      "每次 Mac 從睡眠中喚醒，音量就不對了——重置為最大、降到零或切換到錯誤的輸出。以下是原因和修復方法。",
    date: "2026-03-25",
    readTime: "5 min read",
    content: `
<p>你關上 MacBook 蓋子。你稍後打開它。音量不同了。也許它在最大值，而你之前設在 40%。也許它從耳機切換到喇叭。也許它在零。睡眠前一切都好——現在不對了。</p>

<p>睡眠後音量重置是一個持久的 macOS 錯誤，以不同形式出現在不同的 macOS 版本中。以下是它的原因和處理方法。</p>

<h2>為什麼會發生</h2>

<h3>1. 睡眠期間音訊輸出裝置改變</h3>
<p>如果你在睡眠前連接了藍牙耳機，而它們在 Mac 睡眠期間斷開連接（電池耗盡、移出範圍），macOS 在喚醒時切換到內建喇叭。由於 macOS 記住每個裝置的音量，音量變為喇叭上次設定的值——這可能與你的耳機音量非常不同。</p>

<h3>2. Core Audio 守護程序重啟</h3>
<p>macOS 的音訊守護程序（coreaudiod）有時在睡眠/喚醒循環期間重啟。當它重啟時，可能以預設音量等級而不是你的上次設定初始化。這是一個系統錯誤，Apple 在各種更新中部分修復了它，但從未完全消除。</p>

<h3>3. HDMI/DisplayPort 重新連接</h3>
<p>如果你透過 HDMI 或 DisplayPort 使用外接顯示器，關閉和打開蓋子可能導致顯示器斷開和重新連接。某些顯示器也是音訊輸出裝置，macOS 可能在此過程中切換到或從顯示器的喇叭，在此過程中改變音量。</p>

<h3>4. 藍牙重新配對</h3>
<p>當藍牙裝置在睡眠後重新連接時，音量協商可能導致與之前不同的等級。這在第三方藍牙耳機中特別常見（AirPods 較少，Apple 已針對此進行了最佳化）。</p>

<h2>修復方法</h2>

<h3>防止藍牙在睡眠期間斷開</h3>
<p>系統設定→藍牙→進階（或點擊裝置上的「i」）。某些設定控制藍牙是否在睡眠期間保持活動。保持連接活動可防止重置音量的斷開/重新連接循環。</p>

<h3>停用 AirPods 自動切換</h3>
<p>系統設定→藍牙→點擊 AirPods 旁邊的「i」→「連接到此 Mac」→設定為「上次連接到此 Mac 時」。這可防止 AirPods 在睡眠期間從另一個裝置自動連接。</p>

<h3>設定一致的輸出裝置</h3>
<p>從睡眠喚醒後，按住 Option 並點擊選單列中的聲音圖示。選擇你喜歡的輸出裝置。一致地這樣做，macOS 應該最終「固定」你的偏好。</p>

<h3>重置 NVRAM（Intel Mac）</h3>
<p>如果音量重置是長期問題，重置 NVRAM：關機→按住 Option+Command+P+R 開機 20 秒。這清除儲存的音訊設定，可以修復持久的音量問題。</p>

<h2>使用 SoundDial 保護你的音訊平衡</h2>

<p>即使系統音量在睡眠後重置，<a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 也保護你的<em>逐應用程式</em>音量平衡。它的<strong>音量記憶</strong>功能獨立儲存每個應用程式的音量，並在喚醒、重啟或應用程式重新啟動後恢復。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 Mac 睡眠和喚醒循環後保留逐應用程式音量等級" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>因此，即使 macOS 在睡眠後將系統音量重置為 80%，你的逐應用程式平衡保持不變：</p>
<ul>
  <li>Spotify 仍在系統音量的 30%</li>
  <li>Zoom 仍在 100%</li>
  <li>Slack 仍然靜音</li>
</ul>

<p>你可能需要修復系統音量（一個調整），但你不需要重新平衡所有應用程式（這將是六或七個調整）。而使用<strong>音量配置</strong>，即使完整恢復也只需一鍵。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "mac-audio-music-production-daw": {
    slug: "mac-audio-music-production-daw",
    title: "Mac 音樂製作音訊：獨立控制 DAW 和通訊",
    description:
      "在使用 Logic Pro 或 Ableton 時進行 Discord 通話？以下是如何以完整保真度聆聽你的 DAW，同時將語音聊天保持在舒適的等級。",
    date: "2026-03-28",
    readTime: "5 min read",
    content: `
<p>你在 Logic Pro（或 Ableton，或 FL Studio）中製作音樂。你也在 Discord 上與合作者通話。問題是：你的 DAW 輸出和 Discord 在爭用相同的音量等級。調高 Logic 以清楚聽到你的混音，Discord 在你耳中爆炸。為 Discord 調低，你的混音太安靜，無法正確評估。</p>

<p>這對 Mac 上的音樂製作者來說是一個真實的問題，因為監聽音量直接影響混音決策。如果你的 DAW 因 Discord 競爭而太安靜，你會混音得比預期更響。如果 Discord 淹沒了細節，你會錯過混音中的問題。</p>

<h2>為什麼這對製作很重要</h2>

<p>音樂製作需要<strong>精確的監聽等級</strong>。你需要以一致的、經過校準的音量聆聽你的 DAW，以做出可靠的混音決策。通訊應用程式、通知和其他音訊來源會干擾這一點——但你通常需要它們同時運行以進行遠端協作。</p>

<p>專業錄音室通過單獨的監聽路徑和對講系統解決這個問題。在筆記型電腦上，你需要軟體。</p>

<h2>DAW 內部方法</h2>

<p>你可以使用 DAW 的內部監聽等級將其保持在一致的輸出，然後在內部調整 Discord 的音量。但：</p>
<ul>
  <li>Discord 的輸出音量滑桿不精確，限制在 0-100%</li>
  <li>你仍然無法防止系統聲音和通知以意外等級干擾</li>
  <li>如果你需要在 Spotify 或 YouTube 中參考一個音軌，那些也在系統音量下</li>
</ul>

<h2>製作的逐應用程式音量</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 讓你為每個應用程式獨立設定精確音量：</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上分離 DAW 輸出與 Discord 和參考音軌進行音樂製作" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>製作設定</h3>
<ul>
  <li><strong>Logic Pro／Ableton：</strong>80-100%——你的主要監聽等級</li>
  <li><strong>Discord／語音聊天：</strong>40-60%——可聽到但明顯次於你的混音</li>
  <li><strong>Spotify／參考音軌：</strong>80%——匹配你的 DAW 等級以進行精確的 A/B 比較</li>
  <li><strong>Slack／通知：</strong>靜音——製作期間零干擾</li>
  <li><strong>Safari／Chrome：</strong>50%——觀看教學而不爆耳</li>
</ul>

<h3>將其儲存為「製作」配置</h3>
<p>儲存此配置並在坐下製作時一鍵套用。完成後切換到休閒使用，套用你的「正常」配置。無需重新調整八個應用程式。</p>

<h3>遠端作業的自動閃避</h3>
<p>如果你與合作者通話，SoundDial 的自動閃避可以在麥克風活動時降低非通訊應用程式的音量。但對於製作，你可能想要<em>停用</em>自動閃避——無論你是否在說話，你都需要 DAW 在一致的等級。設定中只需一鍵切換。</p>

<h2>關於延遲的說明</h2>

<p>SoundDial 使用 Apple 的 Core Audio Tap API 進行音量控制。處理添加的延遲可以忽略不計——對於監聽目的來說是察覺不到的。如果你在啟用直接監聽的情況下透過 DAW 錄音和監聽，SoundDial 不會干擾你 DAW 的音訊路徑。它只調整到達你喇叭/耳機的輸出等級。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "apple-music-volume-too-low-mac": {
    slug: "apple-music-volume-too-low-mac",
    title: "Mac 上 Apple Music 音量太低？如何修復和提升",
    description:
      "Apple Music 在你的 Mac 上音量最大但仍然太安靜？檢查聲音均衡、EQ 設定，並了解如何將 Apple Music 提升超過 100%。",
    date: "2026-03-30",
    readTime: "5 min read",
    content: `
<p>Apple Music 音量全開。你的 Mac 音量全開。你知道應該很大聲的歌曲幾乎聽不到。同時，切換到 Spotify——同一首歌，相同音量——明顯更大聲。怎麼回事？</p>

<p>Apple Music 有幾個可以降低播放音量的設定，而且它們並不明顯。讓我們逐一介紹。</p>

<h2>1. 檢查聲音均衡</h2>

<p>Apple Music 有一個叫做<strong>聲音均衡</strong>的功能，它將所有音軌的音量正規化，使它們以大致相同的感知響度播放。這可以防止歌曲之間令人不安的音量跳躍，但它透過<em>降低</em>更響亮音軌的音量來實現——讓一切整體上更安靜。</p>

<p>要檢查：開啟音樂應用程式→設定（⌘,）→播放→<strong>聲音均衡</strong>。</p>

<p>如果聲音均衡已啟用，嘗試停用它。原本被降低以匹配安靜音軌的歌曲現在將以其原始母帶等級播放——這通常顯著更大聲。</p>

<h2>2. 檢查 EQ 設定</h2>

<p>Apple Music 有內建的均衡器。一些 EQ 預設在提升特定頻率時降低整體音量以防止削波。</p>

<p>檢查：音樂應用程式→設定→播放→<strong>EQ</strong>。如果選擇了 EQ 預設（特別是「口語」、「深夜」或「小喇叭」），嘗試設定為「關閉」看看音量是否改善。</p>

<p>特別是「深夜」EQ 壓縮動態範圍——使安靜的部分更大聲但大聲的部分更安靜。這可以使一切感覺「更平坦」且音量更低。</p>

<h2>3. 檢查無損音訊設定</h2>

<p>如果你啟用了 Apple Music 無損音訊（設定→音訊品質），對某些音軌來說，更高品質的串流實際上可能比標準 AAC 串流有更低的感知音量。這是因為無損版本沒有 Apple 應用於 AAC 版本的相同母帶調整。</p>

<p>嘗試暫時切換到 AAC 品質，看看音量差異是否明顯。</p>

<h2>4. 耳機安全</h2>

<p>系統設定→聲音→耳機安全。如果「降低響亮的音訊」已開啟，macOS 正在全域限制你的耳機音量——影響 Apple Music 以及所有其他內容。</p>

<h2>5. 將 Apple Music 提升超過 100%</h2>

<p>如果你已檢查了所有設定，Apple Music 仍然太安靜——無論是聲音均衡過於積極、安靜的專輯，還是你的 MacBook 喇叭根本不夠大聲——逐應用程式音量提升解決了它。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 讓你將 Apple Music 提升到 <strong>200%</strong>。音訊訊號在系統等級上被放大，在到達你的喇叭或耳機之前。只有 Apple Music 變得更大聲——Zoom、Slack 和你的瀏覽器保持在它們當前的等級。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上將 Apple Music 音量提升超過 100%" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>這對相反的問題也有用：如果 Apple Music 相對於你的 Zoom 通話太大聲，在 SoundDial 中將 Apple Music 降低到 25%，同時保持 Zoom 在 100%。逐應用程式控制意味著你永遠不必為了另一個應用程式的音量而犧牲一個應用程式。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "free-volume-mixer-mac": {
    slug: "free-volume-mixer-mac",
    title: "Mac 的免費音量混音器：你實際得到什麼（以及你得不到什麼）",
    description:
      "尋找 Mac 的免費逐應用程式音量混音器？這裡是對免費選項提供什麼、缺少什麼，以及何時值得付費的誠實分析。",
    date: "2026-04-03",
    readTime: "6 min read",
    content: `
<p>如果你搜索「Mac 的免費音量混音器」，你會找到一個主要結果：<strong>Background Music</strong>。它是 macOS 唯一值得注意的免費、開源逐應用程式音量控制應用程式。讓我們看看你實際得到什麼——以及你放棄什麼。</p>

<h2>Background Music：免費選項</h2>

<p>Background Music 是一個免費的開源應用程式，託管在 GitHub 上。它提供：</p>

<ul>
  <li><strong>逐應用程式音量滑桿</strong>——每個運行應用程式的基本音量控制</li>
  <li><strong>自動暫停音樂</strong>——當另一個應用程式播放音訊時暫停你的音樂播放器，停止時繼續</li>
  <li><strong>預設輸出裝置設定</strong>——覆蓋應用程式預設使用哪個裝置</li>
</ul>

<h3>Background Music 沒有的</h3>
<ul>
  <li><strong>無法將音量提升超過 100%</strong>——滑桿只從 0% 到 100%。無法放大安靜的應用程式。</li>
  <li><strong>無音量配置</strong>——無法儲存和在配置之間切換</li>
  <li><strong>無自動閃避</strong>——自動暫停與自動閃避不同。暫停完全停止音樂；閃避將其降低到舒適的背景等級。在通話期間許多人更喜歡安靜的背景音樂而不是完全靜音。</li>
  <li><strong>無音量記憶</strong>——在重啟之間不記住逐應用程式音量</li>
  <li><strong>無鍵盤快捷鍵</strong>——沒有切換混音器或靜音所有應用程式的快速鍵</li>
  <li><strong>無輸出裝置切換</strong>——無法從同一面板切換喇叭/耳機</li>
</ul>

<h3>可靠性問題</h3>
<p>Background Music 的最大問題不是功能——而是穩定性。它透過安裝<strong>虛擬音訊裝置驅動程式</strong>來工作，而這個驅動程式會在 macOS 更新時中斷。在幾乎每次主要 macOS 發布（Ventura、Sonoma、Sequoia、Tahoe）後，使用者報告：</p>
<ul>
  <li>虛擬裝置無法安裝</li>
  <li>音訊爆音和故障</li>
  <li>應用程式未被偵測到</li>
  <li>完全沒有音訊輸出</li>
  <li>啟動時應用程式崩潰</li>
</ul>

<p>由於它是志願者維護的開源專案，修復並不總是及時。你可能在 macOS 更新後幾週內都沒有逐應用程式音量。</p>

<h2>其他「免費」選項</h2>

<h3>eqMac（免費版）</h3>
<p>eqMac 的免費版提供系統範圍的均衡器，但不提供逐應用程式音量控制。逐應用程式功能需要 eqMac Pro（訂閱）。如果你主要需要 EQ 而不是音量混音，免費版很有用。</p>

<h3>macOS 內建</h3>
<p>macOS 沒有內建的音量混音器。最接近的是系統設定→聲音中的警示音量滑桿，它只影響系統聲音——而不是應用程式音訊。</p>

<h2>何時免費就夠了</h2>

<p>如果以下情況，Background Music 可能就夠了：</p>
<ul>
  <li>你只需要基本的逐應用程式音量（0-100%）</li>
  <li>你不需要配置、自動閃避或音量提升</li>
  <li>你可以接受在 macOS 更新破壞它時修復它</li>
  <li>你可以接受音訊鏈中的虛擬音訊裝置</li>
</ul>

<h2>何時值得付費</h2>

<p>如果你需要以下功能，付費音量混音器是值得的：</p>
<ul>
  <li><strong>可靠性</strong>——在 macOS 更新後工作，無需等待志願者修復</li>
  <li><strong>音量提升至 200%</strong>——放大安靜的應用程式超過其內建最大值</li>
  <li><strong>配置</strong>——儲存配置並一鍵在會議/專注/遊戲之間切換</li>
  <li><strong>自動閃避</strong>——通話期間自動降低音量，而不只是自動暫停</li>
  <li><strong>無系統驅動程式</strong>——使用 Apple 的原生 API，沒有可能中斷的虛擬音訊裝置</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 售價 €14.99——一次性，不是訂閱。作為參考，這比兩個月的 Spotify 訂閱費用還少，而這是你每天都會使用的工具。它的價格不到 SoundSource（$39）的一半，並且包含 SoundSource 沒有的功能（配置、自動閃避）。</p>

<img src="/apps/sounddial.png" alt="SoundDial——可靠的 Mac 逐應用程式音量混音器，具有配置、自動閃避和 200% 提升" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>在 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> 上提供——Apple 審查，沙盒化，無系統驅動程式。€14.99 一次性，無訂閱，macOS 14.2+。</p>
`,
  },
  "balance-music-voice-chat-volume-mac": {
    slug: "balance-music-voice-chat-volume-mac",
    title: "如何在 Mac 上平衡音樂和語音聊天音量",
    description:
      "Discord 上音樂太大聲。或者通話在 Spotify 下太安靜。macOS 不讓你平衡它們——以下是如何設定完美比例。",
    date: "2026-04-05",
    readTime: "4 min read",
    content: `
<p>你想在 Discord（或 Zoom，或 FaceTime）上與朋友聊天時收聽音樂。音樂需要有存在感但不能過於強勢。語音聊天需要清晰且主導。簡單的要求。macOS 使它不可能。</p>

<p>一個系統音量控制所有東西，你陷入困境：調高通話音量，音樂就太大聲。為音樂調低，你聽不到朋友。沒有內建方法將這兩件事設置在不同等級。</p>

<h2>應用程式內音量的解決方法</h2>

<p>Spotify 和 Discord 都有內部音量滑桿。理論上，你可以將 Spotify 的滑桿降低到 30%，保持 Discord 的輸出在 100%。這創造了 30/100 的比例。</p>

<p>在實踐中：</p>
<ul>
  <li>你必須切換到每個應用程式以調整其滑桿</li>
  <li>當你調整系統音量時比例會改變（兩者按比例縮放）</li>
  <li>不是每個應用程式都有內部音量滑桿</li>
  <li>這不精確——小的 Spotify 滑桿，沒有顯示百分比</li>
  <li>如果你關閉並重新打開 Spotify，滑桿可能重置</li>
</ul>

<h2>真正的修復：獨立的逐應用程式音量</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 將 Spotify 和 Discord 都放在同一個面板中，具有獨立的音量滑桿。設定你想要的比例並保持它：</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上平衡 Spotify 和 Discord 在不同音量等級" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>音樂 + 語音聊天的黃金比例</h3>
<p>基於大多數人的使用方式：</p>
<ul>
  <li><strong>語音聊天在 85-100%</strong>——始終清晰可聽，主導混音</li>
  <li><strong>音樂在 20-35%</strong>——有存在感但從不與聲音競爭</li>
</ul>

<p>確切的比例取決於音樂、你的耳機和個人偏好。重點是你可以找到完美的平衡一次並保持它——而不是不斷地調整。</p>

<h3>將其儲存為配置</h3>
<p>將你的音樂/語音聊天平衡儲存為配置。「遊戲」配置：Discord 100%，遊戲 50%，Spotify 20%。「放鬆」配置：Discord 70%，Spotify 60%。一鍵切換。</p>

<h3>通話的自動閃避</h3>
<p>如果你在收聽音樂時有來電，SoundDial 的自動閃避會自動將音樂降低到你配置的等級。通話結束時，音樂恢復。無需觸碰任何東西。</p>

<p>音訊平衡問題是每個 Mac 使用者在同時運行音樂和通話時立即面臨的問題。這是一次性的 €14.99 修復。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "mac-volume-control-complete-guide": {
    slug: "mac-volume-control-complete-guide",
    title: "Mac 音量控制：完整指南（2026）",
    description:
      "關於在 macOS 上控制音訊你需要知道的一切——從基本鍵盤快捷鍵到逐應用程式音量、輸出切換和自動化。",
    date: "2026-06-12",
    readTime: "12 min read",
    content: `
<p>macOS 給你一個音量滑桿和一個靜音按鈕。這就是 Apple 內建音訊控制的全部範圍。但你的 Mac 實際上擁有比表面所顯示的更多音訊功能——隱藏的鍵盤快捷鍵、逐應用程式音量工具、輸出裝置管理和大多數使用者從未發現的自動化功能。</p>

<p>這是在 Mac 上控制音訊的完整指南。從基礎到進階使用者功能，一切都在一個地方。</p>

<h2>第一部分：內建音量控制</h2>

<h3>音量鍵</h3>
<p>音量上（F12）、音量下（F11）和靜音（F10）鍵以 16 個步驟調整系統音量。每個步驟約為總範圍的 6.25%。當前音量以覆蓋層顯示在螢幕上。</p>

<h3>精細音量：Option + Shift</h3>
<p>按住 <strong>Option + Shift</strong> 並按音量上/下。每次按下調整四分之一個正常步驟——給你 <strong>64 個音量等級</strong>而不是 16。在正常步驟太粗糙時找到完美的耳機音量是必不可少的。</p>

<h3>靜默音量調整：Shift</h3>
<p>按住 <strong>Shift</strong> 並按音量上/下。音量變化時沒有可聽見的反饋「啪」聲。在通話或演示期間調整音量時使用。</p>

<h3>選單列音量滑桿</h3>
<p>如果聲音圖示在你的選單列中（在系統設定→控制中心→聲音→始終在選單列中顯示中啟用它），點擊它顯示音量滑桿。這是一個連續滑桿，不像鍵盤鍵那樣是步進的，所以你可以設置任何精確的等級。</p>

<h3>控制中心</h3>
<p>點擊選單列中的控制中心圖示（兩個切換圖示）→點擊聲音部分以獲得音量滑桿和快速訪問輸出裝置選擇。</p>

<h2>第二部分：輸出裝置管理</h2>

<h3>切換輸出裝置</h3>
<p>最快的內建方法：按住 <strong>Option</strong> 並點擊選單列中的聲音圖示。你將看到所有可用輸出和輸入裝置的列表。點擊一個即可立即切換。</p>

<p>或者：系統設定→聲音→輸出。從列表中選擇你喜歡的裝置。</p>

<h3>藍牙裝置管理</h3>
<p>macOS 分別記住每個輸出裝置的音量等級。當你從喇叭（70%）切換到 AirPods（40%）時，音量調整為你上次使用該裝置時的值。如果你不期望，這可能感覺像音量「自己改變」。</p>

<h3>聚合和多輸出裝置</h3>
<p>對於進階設定，開啟音訊 MIDI 設定（應用程式→工具程式）以創建聚合裝置（組合多個輸入）或多輸出裝置（同時向多個輸出發送音訊）。這些主要對專業音訊設定有用，對日常使用沒有用。</p>

<h2>第三部分：警示和通知音量</h2>

<h3>系統警示音量</h3>
<p>macOS 有一個單獨的警示音量滑桿：系統設定→聲音→警示音量。這獨立於主音量控制系統聲音（Funk、Tink、Bottle 等）的音量。然而，它只影響 macOS 系統警示——不影響來自第三方應用程式如 Slack、Discord 或 Teams 的通知聲音。</p>

<h3>通知聲音管理</h3>
<p>前往系統設定→通知。對於每個應用程式，你可以切換「通知時播放聲音」開啟或關閉。這是二元的——你不能使應用程式的通知更安靜，只能完全開啟或關閉。</p>

<h3>專注模式</h3>
<p>專注模式（系統設定→專注）抑制來自選定應用程式的通知。它們可以靜音通知聲音，但不影響媒體音量。即使在請勿打擾中，你的音樂也會繼續以全音量播放。</p>

<h2>第四部分：耳機特定控制</h2>

<h3>耳機安全</h3>
<p>系統設定→聲音→耳機安全。「降低響亮的音訊」根據累積暴露限制耳機音量。你可以停用它或調整閾值。只影響耳機輸出，不影響喇叭。</p>

<h3>空間音訊</h3>
<p>對於支援的耳機（AirPods Pro、AirPods Max、某些 Beats），macOS 支援帶頭部追蹤的空間音訊。在控制中心→聲音→空間音訊中啟用它。這影響聲音的感知定位，而不是音量。</p>

<h3>音訊平衡</h3>
<p>系統設定→輔助使用→音訊→平衡。一個左右滑桿，調整立體聲平衡。如果一側聽起來比另一側安靜，確保它居中。</p>

<h2>第五部分：macOS 不能做的（以及如何修復它）</h2>

<h3>逐應用程式音量控制</h3>
<p>macOS 為所有應用程式提供一個音量滑桿。沒有內建方法將 Spotify 設定為 30% 而 Zoom 設定為 100%。這是 macOS 中最受請求的音訊功能，Apple 從未添加它。</p>

<h3>音量提升超過 100%</h3>
<p>macOS 的音量最大在 100%。如果內容在最大音量時仍然太安靜，沒有內建方法進一步放大。</p>

<h3>音量配置</h3>
<p>沒有辦法儲存音量配置（Spotify 在 30%，Zoom 在 100%，Slack 靜音）並在預設之間切換。</p>

<h3>自動閃避</h3>
<p>macOS 在你加入通話時不會自動降低背景音訊。</p>

<h3>每個應用程式的音量記憶</h3>
<p>macOS 不記住逐應用程式音量等級，因為逐應用程式音量不存在。</p>

<p>所有這五個都可以使用 <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>——一個原生 macOS 選單列應用程式，添加了 Apple 從未建立的音量混音器。</p>

<img src="/apps/sounddial.png" alt="SoundDial——macOS 的逐應用程式音量控制、配置、自動閃避和 200% 提升" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>第六部分：使用 SoundDial 的逐應用程式音量</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 填補了上面列出的每個空缺：</p>

<ul>
  <li><strong>逐應用程式音量：</strong>每個應用程式都有自己的滑桿，0% 到 200%</li>
  <li><strong>逐應用程式靜音：</strong>一鍵靜音任何應用程式</li>
  <li><strong>音量提升：</strong>放大安靜的應用程式超過 100%</li>
  <li><strong>音量配置：</strong>儲存配置並一鍵切換</li>
  <li><strong>自動閃避：</strong>通話期間背景音訊降低，之後恢復</li>
  <li><strong>音量記憶：</strong>每個應用程式的音量在重啟之間被記住</li>
  <li><strong>輸出裝置切換：</strong>從同一面板更改喇叭/耳機</li>
  <li><strong>鍵盤快捷鍵：</strong>⌃⌥S 切換混音器，⌃⌥M 靜音所有</li>
</ul>

<p>它使用 Apple 的現代 Core Audio Tap API——沒有系統驅動程式，沒有虛擬音訊裝置，沒有核心擴充功能。在 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> 上提供，售價 €14.99（一次性購買，無訂閱），Apple 審查和沙盒化。macOS 14.2+。</p>
`,
  },
  "vlc-volume-too-low-mac": {
    slug: "vlc-volume-too-low-mac",
    title: "Mac 上 VLC 音量太低？如何提升超過 200%",
    description:
      "VLC 在最大音量但影片仍然太安靜？VLC 有內建的 200% 提升——加上你可以使用逐應用程式音量混音器進一步提升。",
    date: "2026-04-08",
    readTime: "4 min read",
    content: `
<p>你在 VLC 中觀看影片。對話很安靜。你把 VLC 的音量調到最大。你把 Mac 的音量調到最大。仍然無法正常聽到。影片只是錄製得太安靜了。</p>

<p>好消息：VLC 實際上有一個大多數人不知道的內建解決方案。更好的消息：你可以用系統等級的提升來疊加它以獲得更多音量。</p>

<h2>VLC 的內建音量提升（高達 200%）</h2>

<p>VLC 本身可以超過 100% 音量。VLC 播放器欄中的音量滑桿最大到 100%，但你可以進一步增加：</p>

<h3>方法 1：滾輪</h3>
<p>將滑鼠懸停在 VLC 的音量滑桿上並向上滾動。滑桿將超過可見的 100% 標記，最高達 200%。你將看到百分比在你滾動時顯示。</p>

<h3>方法 2：鍵盤快捷鍵</h3>
<p>反覆按 <strong>Command + 向上箭頭（⌘↑）</strong>以將音量提升到 100% 以上。每次按下添加一個步驟。<strong>Command + 向下箭頭（⌘↓）</strong>降低。</p>

<h3>方法 3：音訊選單</h3>
<p>前往 VLC→音訊→增加音量。重複直到音量足夠高。當前等級顯示在播放器的右下角。</p>

<p>VLC 的 200% 提升透過在 VLC 的解碼器中放大音訊訊號來工作。在極端等級下可能引入失真，但對於真正安靜的影片檔案非常有效。</p>

<h2>超越 VLC 的提升：系統等級放大</h2>

<p>如果 VLC 在 200% 仍然不夠大聲——或者如果你想在不影響其內部音訊設定的情況下提升 VLC——系統等級的逐應用程式音量混音器添加了另一層放大。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 為 VLC 提供其自己的音量滑桿，從 0% 到系統等級的 200%。這與 VLC 的內部提升疊加：</p>

<ul>
  <li>VLC 內部：200% × SoundDial：200% = 有效 400% 放大</li>
  <li>VLC 內部：150% × SoundDial：150% = 有效 225% 放大</li>
</ul>

<p>這是極端的放大，對某些內容會引入失真，但對於極其安靜的源材料，這可能正是你需要的。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上在系統等級提升 VLC 音量，用於安靜的影片檔案" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>更重要的是，SoundDial 讓你<strong>獨立地</strong>提升 VLC。你的音樂播放器、瀏覽器和通訊應用程式保持在其正常等級，只有 VLC 變得更大聲。如果你在 SoundDial 中將 VLC 提升到 180%，Spotify 不會改變。這是 VLC 的內建提升做不到的——VLC 的提升只影響 VLC，但 macOS 的單個系統音量仍然將其他所有東西捆綁在一起。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "disable-audio-ducking-mac": {
    slug: "disable-audio-ducking-mac",
    title: "如何在 Mac 上停用音訊閃避（或自己控制它）",
    description:
      "macOS 或你的應用程式在通話期間不斷降低你的音樂音量而不詢問。以下是如何停止不想要的音訊閃避——或用你真正控制的閃避替換它。",
    date: "2026-04-10",
    readTime: "5 min read",
    content: `
<p>你加入 Zoom 通話。你的音樂幾乎降到零。你沒有觸碰任何音量控制——某些東西為你做了。這就是<strong>音訊閃避</strong>：在通話或重要音訊來源活動時自動降低背景音訊。</p>

<p>有些人喜歡它。其他人討厭它——特別是當閃避太過積極時（音樂降到零而不是舒適的背景等級）或在意外情況下觸發時。</p>

<p>以下是如何在 Mac 上停用不想要的閃避，以及如何用按你想要的方式工作的閃避替換它。</p>

<h2>Mac 上音訊閃避的來源</h2>

<p>macOS 本身<strong>沒有</strong>內建的音訊閃避功能。如果你的音樂在通話期間變安靜，其中一個正在造成這種情況：</p>

<h3>1. Zoom 的音訊處理</h3>
<p>Zoom 可以在它啟動時降低系統音訊。在 Zoom→設定→音訊中檢查並停用「自動調整麥克風音量」。也嘗試將降噪從「高」降低到「低」。</p>

<h3>2. 藍牙編解碼器切換</h3>
<p>當應用程式啟動你的藍牙耳機的麥克風時，macOS 從 AAC 切換到 SCO 編解碼器。這不是真正的「閃避」——它是一個使一切聽起來更安靜和品質更低的編解碼器更改。使用單獨的麥克風修復它。</p>

<h3>3. 第三方應用程式在做它</h3>
<p>一些音訊應用程式（如 Background Music）有自動暫停或自動閃避功能。一些媒體應用程式在偵測到另一個音訊來源時會降低自己的音量。檢查你安裝的任何音訊工具應用程式。</p>

<h3>4. 通訊應用程式調整音訊</h3>
<p>Discord、Teams 和其他通訊應用程式有自己的音訊處理，可以影響其他應用程式的感知音量。在每個應用程式的音訊設定中檢查「自動調整」選項並停用它們。</p>

<h2>如何停止不想要的閃避</h2>

<ol>
  <li><strong>檢查 Zoom/Teams/Discord 音訊設定</strong>——停用自動音量/麥克風調整</li>
  <li><strong>在通話中使用單獨的麥克風</strong>——防止藍牙編解碼器切換</li>
  <li><strong>移除音訊工具</strong>——Background Music、Soundflower 或任何可能攔截音訊的應用程式</li>
  <li><strong>檢查 macOS 輔助使用</strong>——系統設定→輔助使用→音訊，查看任何意外設定</li>
</ol>

<h2>用好的閃避替換壞的閃避</h2>

<p>音訊閃避背後的想法實際上很棒——在通話期間自動降低背景音訊以便清楚聽到。問題是當它太過積極（音樂降到零）、不可配置（你不能選擇降低多少）或被錯誤的事情觸發時。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 有一個內建的自動閃避功能，讓你掌控：</p>

<ul>
  <li><strong>可配置的閃避等級：</strong>選擇在通話期間降低背景音訊多少——從 10%（幾乎靜音）到 80%（幾乎沒有降低）。預設為 30%，讓音樂可聽到但不分心。</li>
  <li><strong>智慧偵測：</strong>透過監控麥克風使用情況偵測通話——與 macOS 橙色點相同的指示器。適用於 Zoom、Teams、FaceTime、Discord、Slack、Google Meet、Webex、Skype。</li>
  <li><strong>完美恢復：</strong>通話結束時，每個應用程式恢復到其確切的前一個音量。無需重新調整。</li>
  <li><strong>輕鬆切換：</strong>在 SoundDial 的設定中開啟或關閉自動閃避。當你不想要它時，停用它。當你想要它回來時，啟用它。</li>
</ul>

<img src="/apps/sounddial.png" alt="SoundDial 可配置的自動閃避——控制通話期間背景音訊降低多少" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>區別在於：不是某個應用程式決定你的音樂在每次通話期間應該降到零，而是你決定它應該降到 25%。不是失去控制，而是獲得控制。不是試圖在三個不同的應用程式中停用一個隱藏功能，而是在一個地方有一個切換。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "bluetooth-headphones-too-quiet-mac": {
    slug: "bluetooth-headphones-too-quiet-mac",
    title: "Mac 上藍牙耳機太安靜？每個有效的修復方法",
    description:
      "你的藍牙耳機在手機上工作得很好，但在 Mac 上聽起來很安靜。以下是每個原因——從編解碼器問題到 macOS 音量限制——以及如何修復每個問題。",
    date: "2026-04-12",
    readTime: "6 min read",
    content: `
<p>你的藍牙耳機在手機上足夠大聲。你將它們連接到 Mac——一切都更安靜了。音樂聽起來模糊。通話很難聽清楚。你已經把音量調到最大，但仍然不夠。怎麼了？</p>

<p>Mac 上的藍牙音訊有幾個音量降低因素在手機上不存在。以下是每個因素及其修復方法。</p>

<h2>1. 耳機安全正在限制你的音量</h2>

<p>macOS 有一個限制耳機音量以保護你聽力的內建功能。它隨時間測量聲音暴露，如果認為你聽得太響，就降低最大音量。</p>

<p>前往<strong>系統設定→聲音→耳機安全</strong>。如果「降低響亮的音訊」已啟用，請停用它或提高閾值。這是藍牙耳機在 Mac 上比手機更安靜的第一大原因。</p>

<h2>2. 藍牙編解碼器不匹配</h2>

<p>你的手機可能使用更高品質的編解碼器（aptX、LDAC、AAC）連接到你的耳機，而你的 Mac 預設為 SBC（基本藍牙編解碼器）。不同的編解碼器有不同的最大音量特性。</p>

<p>macOS 通常對 Apple 裝置使用 AAC，對第三方耳機使用 SBC。如果你的耳機支援 aptX 或 LDAC，macOS 不會使用它們——Apple 只支援 AAC 和 SBC。</p>

<p><strong>修復方法：</strong>在 macOS 上你對編解碼器選擇做不了多少。但知道這解釋了為什麼相同的耳機在你的 Mac 上與使用 LDAC 的 Android 手機上聽起來不同（且可能更安靜）。</p>

<h2>3. 麥克風啟動觸發 SCO</h2>

<p>當任何應用程式啟動你的藍牙耳機的麥克風（Zoom、FaceTime、Siri、聽寫）時，macOS 從 AAC 切換到 SCO 編解碼器。SCO 是在 2004 年為電話通話設計的——它聽起來很糟糕，且明顯更安靜。</p>

<p><strong>修復方法：</strong>使用單獨的麥克風（Mac 內建麥克風或 USB 麥克風）並將你的藍牙耳機僅作為輸出使用。在你的通話應用程式的設定中，將輸入設為你 Mac 的麥克風，輸出設為你的耳機。這可以防止 SCO 切換。</p>

<h2>4. 藍牙音量同步問題</h2>

<p>藍牙音訊有兩個音量控制：一個在 Mac 端，一個在耳機端。它們應該保持同步，但它們可能會分離——Mac 顯示 100% 但耳機實際上不在全音量。</p>

<p><strong>修復方法：</strong>斷開耳機連接（系統設定→藍牙→點擊「i」→斷開），等待 5 秒，重新連接。這重新同步音量。一些耳機也有自己的音量按鈕——確保那些也在最大。</p>

<h2>5. 低品質藍牙連接</h2>

<p>距離、干擾（WiFi 路由器、USB 3.0 裝置）以及你的 Mac 和耳機之間的障礙物可以降低藍牙訊號品質。當訊號弱時，macOS 可能會降低音訊位元率，這可能影響感知音量和品質。</p>

<p><strong>修復方法：</strong>靠近你的 Mac。斷開你不使用的其他藍牙裝置。將 USB 3.0 集線器移離你的 Mac（USB 3.0 在藍牙使用的 2.4 GHz 頻段中產生干擾）。</p>

<h2>6. 耳機本身</h2>

<p>一些藍牙耳機的最大音量比其他耳機低。帶較大驅動器的頭戴式耳機通常比耳塞更大聲。降噪耳機的韌體中可能內建音量限制。</p>

<p>在耳機製造商的應用程式中檢查音量限制設定（索尼耳機連接、Bose Music、Sennheiser Smart Control 等）。一些耳機有「安全聆聽」模式來限制音量。</p>

<h2>仍然太安靜？提升超過 100%</h2>

<p>如果你已檢查上面所有內容，你的耳機在 Mac 上仍然太安靜，你需要音量放大。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 將任何應用程式的音量提升到 <strong>200%</strong>。如果透過藍牙耳機的 Spotify 太安靜，將其滑桿拖到 160%。音訊訊號在到達你的耳機之前被放大，有效地為該應用程式增倍可用音量。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 Mac 上為藍牙耳機提升應用程式音量，逐應用程式滑桿最高 200%" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>逐應用程式提升比系統範圍的音量提升更好，因為你只能放大安靜的應用程式。如果你的 Podcast 安靜但音樂正常，將 Podcast 應用程式提升到 170%，同時保持 Spotify 在 80%。每個應用程式保持在正確的等級。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "mac-audio-obs-streaming-setup": {
    slug: "mac-audio-obs-streaming-setup",
    title: "Mac 音訊用於 OBS 和直播：如何控制觀眾聽到的內容",
    description:
      "在 Mac 上使用 OBS 直播？你的觀眾以相同音量聽到一切——遊戲、音樂、警示、Discord。以下是如何正確平衡音訊來源。",
    date: "2026-04-15",
    readTime: "7 min read",
    content: `
<p>你在 Mac 上用 OBS 直播。你的遊戲音訊在爆炸。你的 Discord 通話在運行。Spotify 在播放背景音樂。當有人訂閱時警示聲響起。你的觀眾以相同音量聽到所有這些——一片混亂，Discord 的呼喊與爆炸競爭，音樂淹沒你的評論。</p>

<p>核心問題：macOS 給你一個音訊輸出，OBS 將其捕獲為一個組合流。你無法告訴 OBS「以 40% 捕獲遊戲，Discord 以 80%，Spotify 以 20%」，因為 macOS 不分離它們。</p>

<h2>Mac 直播音訊問題</h2>

<p>在 Windows 上，OBS 可以原生捕獲單個應用程式音訊。你將每個應用程式添加為單獨的音訊來源，並在 OBS 內部獨立混合它們。在 Mac 上，這不是內建的。Mac 上的 OBS 可以捕獲：</p>

<ul>
  <li><strong>桌面音訊</strong>——你 Mac 上播放的一切，組合成一個流</li>
  <li><strong>麥克風/輔助</strong>——你的麥克風輸入</li>
  <li><strong>應用程式音訊捕獲（macOS 13+）</strong>——捕獲特定應用程式的音訊，但設定是手動的且有限制</li>
</ul>

<p>應用程式音訊捕獲來源（在 OBS 30+ 中添加）可以隔離一個應用程式，但在 OBS 內部管理五個具有獨立等級的音訊來源很複雜，且不是每個應用程式都能配合。</p>

<h2>更簡單的方法：在 OBS 捕獲之前控制等級</h2>

<p>不要嘗試在 OBS 內部分離音訊，而是在它到達 OBS 的桌面音訊捕獲<em>之前</em>控制每個應用程式的音量。如果你將 Spotify 降低到 20%，Discord 提升到 90%，在系統等級，OBS 的桌面音訊捕獲獲取已經平衡的混音。</p>

<p>這正是 <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 所做的。將每個應用程式設定為你希望觀眾聽到的等級：</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 Mac 上平衡遊戲、Discord 和音樂音訊等級用於 OBS 直播" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>典型的直播音訊設定</h3>
<ul>
  <li><strong>遊戲：</strong>50%——有存在感但不壓過你的聲音</li>
  <li><strong>Discord／語音聊天：</strong>80%——來自你隊友的清晰呼喊</li>
  <li><strong>Spotify／音樂：</strong>15%——細微的背景氣氛</li>
  <li><strong>串流警示（瀏覽器）：</strong>40%——可聽到但不刺耳</li>
  <li><strong>Slack／通知：</strong>靜音——觀眾不需要聽到你的私訊</li>
</ul>

<h3>將其儲存為「直播」配置</h3>
<p>在 SoundDial 中將此配置儲存為音量配置。在你上線之前，一鍵套用「直播」配置。每個應用程式跳到其直播最佳化等級。直播結束後，切換回你的「正常」或「遊戲」配置。</p>

<h2>你聽到的與觀眾聽到的</h2>

<p>由於 SoundDial 在系統等級調整逐應用程式音量，你和你的觀眾都聽到相同的平衡混音。這比嘗試維護單獨的混音（一個給你，一個給直播）更簡單——這需要虛擬音訊裝置和在 Mac 上很脆弱的複雜路由。</p>

<p>如果你需要完全不同的混音給你的直播與你的耳機（例如，你想聽 Discord 比你的觀眾更大聲），你需要使用虛擬音訊裝置進行更複雜的路由設定。但對於大多數直播主來說，一個單一的均衡混音——從選單列輕鬆控制——正是所需要的。</p>

<h2>為什麼逐應用程式控制勝過僅 OBS 混音</h2>

<ul>
  <li><strong>即時調整：</strong>直播中途，觀眾說遊戲太大聲。點擊選單列，拖動一個滑桿。完成。無需暫停，無需打開 OBS 設定。</li>
  <li><strong>在 OBS 之外工作：</strong>你的平衡音訊設定即使不直播時也有效。相同的配置，相同的便利。</li>
  <li><strong>沒有虛擬音訊裝置：</strong>SoundDial 使用 Apple 的原生音訊 Tap API——沒有 Soundflower，沒有 BlackHole，沒有在 macOS 更新時中斷的驅動程式。</li>
</ul>

<p>在 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> 上提供——Apple 審查，€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "make-mac-remember-volume-per-app": {
    slug: "make-mac-remember-volume-per-app",
    title: "如何讓你的 Mac 記住每個應用程式的音量",
    description:
      "每次你重新啟動 Spotify 或重新啟動 Zoom，你就必須重新調整音量。以下是如何讓 macOS 自動記住每個應用程式的音量等級。",
    date: "2026-04-18",
    readTime: "4 min read",
    content: `
<p>你花了五分鐘讓你的音訊等級完美。Spotify 在 30%，Zoom 在 100%，Slack 在 15%。然後你重新啟動 Mac。或者 Slack 崩潰並重新啟動。或者你關閉 Spotify 稍後重新打開它。每個應用程式重置為其預設音量。你重新調整所有東西。再次。</p>

<p>macOS 在重啟之間記住系統音量。但它不記住逐應用程式音量——因為 macOS 首先沒有逐應用程式音量控制。沒有任何東西需要記住。</p>

<h2>為什麼應用程式不記住它們自己的音量</h2>

<p>一些應用程式（如 Spotify 和 VLC）在會話之間儲存內部音量滑桿。但大多數應用程式——瀏覽器、通訊工具、系統工具——沒有自己的音量控制。即使有自己音量控制的應用程式也只記住自己的滑桿位置，而不是相對於其他應用程式的音量。</p>

<p>你真正想要的是<em>系統</em>記住：「Spotify 應該始終在系統音量的 30%。」macOS 不支援這個概念。</p>

<h2>使用 SoundDial 的音量記憶</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 有一個<strong>音量記憶</strong>功能。啟用後，它透過捆綁識別符儲存每個應用程式的音量等級。當應用程式退出並重新啟動——無論你重新啟動它、它崩潰，還是你重新啟動 Mac——SoundDial 會自動將其恢復到儲存的音量。</p>

<img src="/apps/sounddial.png" alt="SoundDial 音量記憶——自動記住並恢復 macOS 上的逐應用程式音量等級" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>它如何工作</h3>
<ol>
  <li>在 SoundDial 的設定中啟用「記住每個應用程式的音量」</li>
  <li>將每個應用程式設定為你喜歡的音量</li>
  <li>SoundDial 自動儲存等級</li>
  <li>當應用程式重新啟動時，音量恢復到確切的位置</li>
</ol>

<p>無需手動儲存。無需重新調整。第一次設定你的音量就是最後一次。</p>

<h3>什麼被記住</h3>
<ul>
  <li><strong>音量等級</strong>——確切的百分比（0% 到 200%）</li>
  <li><strong>靜音狀態</strong>——如果你靜音了一個應用程式，它在重新啟動時保持靜音</li>
  <li><strong>逐應用程式</strong>——每個應用程式的音量透過捆綁 ID 獨立儲存</li>
</ul>

<h3>新應用程式獲得預設音量</h3>
<p>當應用程式第一次啟動（SoundDial 之前沒有見過的）時，它獲得一個可配置的預設音量。你可以在 SoundDial 的設定中設定這個預設——所以新應用程式以 80%（或你喜歡的任何值）開始，而不是可能以 100% 爆炸。</p>

<h2>音量記憶 + 配置 = 設定後不管</h2>

<p>音量記憶處理日常事務：應用程式在重啟之間保持其等級。配置處理情境切換：「會議」模式、「專注」模式、「遊戲」模式——一鍵套用，每個應用程式立即跳到該情境的正確等級。</p>

<p>加在一起，你幾乎不需要手動調整音量滑桿。應用程式記住其上次等級，當你更改情境時，配置一次性設定所有內容。</p>

<p>在 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> 上提供——Apple 審查，€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "podcast-volume-too-low-mac": {
    slug: "podcast-volume-too-low-mac",
    title: "Mac 上 Podcast 音量太低？如何讓它更大聲",
    description:
      "某些 Podcast 在 Mac 上即使調到最大音量也輕聲細語。以下說明原因——以及如何在不影響其他應用程式的情況下將 Podcast 音訊提升到 100% 以上。",
    date: "2026-04-20",
    readTime: "5 min read",
    content: `
<p>你在 Mac 上收聽 Podcast。主持人聽起來沒問題，但那位——在廚房用筆記型電腦麥克風錄音的來賓——幾乎聽不見。你把音量調到 100%。主持人現在太大聲了，但來賓依然很安靜。沒有辦法取得平衡，因為問題出在錄音本身，而不是你的 Mac。</p>

<p>Podcast 音訊品質差異極大。專業節目以一致的音量進行後期製作。但訪談節目、獨立 Podcast 和現場錄音的來賓通常在 -20 dB 或更低——比主持人或片頭音樂安靜得多。</p>

<h2>為什麼某些 Podcast 那麼安靜</h2>

<ul>
  <li><strong>來賓麥克風品質：</strong>一位主持人有專業設備，來賓用 AirPods。音量差異可以達到 15+ dB。</li>
  <li><strong>沒有後期製作：</strong>專業製作的 Podcast 會壓縮並標準化音量。許多節目沒有。</li>
  <li><strong>Podcast 應用程式不做標準化：</strong>Apple Podcasts 和 Spotify 對 Podcast 內容幾乎不進行響度標準化（與音樂不同）。</li>
  <li><strong>動態範圍：</strong>部分 Podcast 製作者為了「自然」聲音而刻意保持高動態範圍——這意味著安靜的部分非常安靜。</li>
</ul>

<h2>應用程式內建修正</h2>

<h3>Apple Podcasts</h3>
<p>Apple Podcasts 沒有音量標準化或提升功能。Podcast 播放什麼音量就是什麼音量。較舊版本的應用程式內建音量控制已被移除——現在只使用系統音量。</p>

<h3>Spotify</h3>
<p>Spotify 的「標準化音量」設定（設定 → 播放）可以幫助不同 Podcast 之間的音量一致性，但對節目內部動態的影響有限。嘗試將其設為「大聲」以獲得最大標準化效果。</p>

<h3>Overcast（瀏覽器）</h3>
<p>如果你使用 Overcast（透過 overcast.fm 網頁），它有一個「Voice Boost」功能，可以顯著放大並壓縮 Podcast 音訊，讓安靜的聲音更響亮。這是最佳的內建解決方案之一——但只在 Overcast 中有效。</p>

<h2>系統層面修正：將 Podcast 應用程式提升到 100% 以上</h2>

<p>通用修正方法是將你的 Podcast 應用程式音量放大超過 macOS 的 100% 限制。<a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 為每個應用程式提供最高 <strong>200%</strong> 的音量滑桿。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 Mac 上將 Apple Podcasts 音量提升到 180% 以播放安靜的 Podcast 節目" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>將 Apple Podcasts 或你的 Podcast 應用程式設為 160-180%，同時將 Spotify 音樂保持在 40%，Slack 在 15%。Podcast 變大聲了，而不會讓其他所有東西也痛苦地大聲。當你切換回音樂時，只需將 Podcast 應用程式調回正常——或讓 SoundDial 的音量記憶自動記住它。</p>

<p>這種逐應用程式的方法比系統範圍的音量提升更好，因為：</p>
<ul>
  <li>只有安靜的 Podcast 應用程式變大聲</li>
  <li>音樂保持在你偏好的音量</li>
  <li>通話音訊保持在你偏好的音量</li>
  <li>通知聲音不會突然變得震耳欲聾</li>
</ul>

<p>在 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> 上提供——Apple 審查，€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "mac-audio-online-classes-lectures": {
    slug: "mac-audio-online-classes-lectures",
    title: "網路課程與講座的 Mac 音訊設定",
    description:
      "一邊看講座、一邊做筆記、查找資料、和同學聊天——全都需要不同的音量。以下說明如何在 Mac 上管理學生音訊。",
    date: "2026-04-22",
    readTime: "5 min read",
    content: `
<p>你是一位在 Zoom 上上網路講座的學生。你在另一個分頁開著一個 YouTube 教學影片作為參考資料。你的同學在 Discord 上聊天。Spotify 在背景播放 Lo-fi 音樂。你的 Mac 把所有這些都視為同一個音量。調低 Lo-fi 就聽不到教授的聲音。調高講座音量，Discord 的訊息聲就會打斷你的專注。</p>

<p>macOS 為所有東西只有一個音量滑桿。對於同時管理多個音訊來源的學生來說，這是持續的摩擦點。</p>

<h2>典型的學生音訊組合</h2>

<ul>
  <li><strong>講座平台</strong>（Zoom、Teams、Google Meet、Webex）——需要清晰，始終可聽</li>
  <li><strong>參考資料</strong>（YouTube 教學、錄製講座）——適中音量，需要可暫停/調整</li>
  <li><strong>學習音樂</strong>（Spotify、Apple Music）——低背景音量，不應與講座競爭</li>
  <li><strong>聊天</strong>（Discord、iMessage、Slack）——細微的通知聲，不打擾</li>
  <li><strong>瀏覽器分頁</strong>——偶爾自動播放的內容需要立即靜音</li>
</ul>

<h2>macOS 的限制</h2>

<p>只有一個系統音量，你被迫妥協。調高到能聽見安靜教授麥克風的音量，Spotify 就太大聲了。調到舒適的音樂音量，講座就聽不見了。靜音 Spotify 就失去了背景音樂的專注好處。因為每個應用程式鎖定在同一個音量，所以無法找到舒適的平衡。</p>

<h2>設定逐應用程式音訊來學習</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 為每個應用程式提供自己的音量滑桿，讓你可以建立理想的學習音訊設定：</p>

<img src="/apps/sounddial.png" alt="SoundDial 學生設定——講座全音量、學習音樂低音量、通知靜音" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>講座配置</h3>
<ul>
  <li><strong>Zoom / Teams / Meet：</strong>100%——絕不錯過任何一個字</li>
  <li><strong>Spotify：</strong>15%——幾乎聽不見的背景氛圍</li>
  <li><strong>Discord：</strong>10%——僅細微通知</li>
  <li><strong>瀏覽器：</strong>40%——需要時播放參考影片</li>
  <li><strong>iMessage：</strong>靜音——在課間查看</li>
</ul>

<h3>自習配置</h3>
<ul>
  <li><strong>Spotify：</strong>50%——激勵的學習音樂</li>
  <li><strong>瀏覽器：</strong>70%——教學影片以清晰音量播放</li>
  <li><strong>Discord：</strong>20%——可用於學習小組</li>
  <li><strong>其他所有：</strong>靜音</li>
</ul>

<h3>休息配置</h3>
<ul>
  <li><strong>所有：</strong>60-80%——在課間放鬆</li>
</ul>

<p>將每個設定儲存為音量配置，隨著你的一天進展，一鍵切換。當講座開始時，套用「講座」配置——自動閃避功能會自動處理其餘部分，在教授透過你的麥克風說話時自動降低你的音樂音量。</p>

<h2>為什麼這對專注很重要</h2>

<p>研究始終表明，擁有正確的音訊環境可以提高專注力和記憶力。錯誤的組合——音樂太大聲、通知太頻繁、講座太安靜——會產生與你學習的材料無關的認知負荷。一次設定好音訊、儲存為配置，然後不再需要考慮它，可以消除一個持續的分心來源。</p>

<p>在 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> 上提供——Apple 審查，€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "mac-sound-not-working-after-update": {
    slug: "mac-sound-not-working-after-update",
    title: "更新後 Mac 聲音無法使用？完整修復指南",
    description:
      "你更新了 macOS，現在聲音消失了、出現雜音或卡在錯誤的音量。以下列出讓 Mac 音訊恢復正常的所有修復方法。",
    date: "2026-04-25",
    readTime: "7 min read",
    content: `
<p>你更新了 macOS。一切看起來都很好——直到你注意到沒有聲音。或者聲音出現雜音。或者音量卡住了。或者你的音訊輸出裝置消失了。更新後的音訊問題幾乎在每個 macOS 版本都會發生，從輕微煩人到完全無聲都有。</p>

<p>以下是修復 macOS 更新後 Mac 音訊的系統性指南，涵蓋所有已知問題和解決方法。</p>

<h2>步驟 1：檢查明顯的問題</h2>

<h3>是否已靜音？</h3>
<p>按音量增加鍵。檢查畫面上是否出現音量指示器。有時更新會將系統音量重置為零或啟用靜音。</p>

<h3>是否選擇了正確的輸出裝置？</h3>
<p>前往系統設定 → 聲音 → 輸出。更新後，macOS 有時會切換到意外的輸出裝置——連接的顯示器喇叭、未連接的藍牙裝置，或者當你想要外接喇叭時切換回內建喇叭。選擇正確的裝置。</p>

<h3>耳機安全設定是否限制了音量？</h3>
<p>更新有時會將耳機安全設定重置為預設值（已啟用）。前往系統設定 → 聲音 → 耳機安全，如果更新開啟了「降低大聲音訊」，請停用它。</p>

<h2>步驟 2：重新啟動 Core Audio</h2>

<p>更新後，音訊常駐程式（coreaudiod）經常進入異常狀態。重新啟動它是最有效的單一修復方法。</p>

<p>開啟終端機並執行：</p>
<p><code>sudo killall coreaudiod</code></p>

<p>音訊會短暫中斷然後重新啟動。測試聲音是否現在可以正常工作。如果這樣修復了問題，那麼問題是過時的音訊常駐程式狀態——更新後常見。</p>

<h2>步驟 3：重置 NVRAM/PRAM</h2>

<p>對於 Intel Mac：完全關機，然後按住 <strong>Option + Command + P + R</strong> 約 20 秒後開機。這會重置儲存音量設定、啟動磁碟選擇和其他低層偏好設定的 NVRAM。</p>

<p>對於 Apple Silicon Mac（M1/M2/M3/M4）：NVRAM 在需要時會自動重置。完整重新啟動（而非只是睡眠/喚醒）通常就足夠了。</p>

<h2>步驟 4：檢查第三方音訊驅動程式衝突</h2>

<p>macOS 更新經常會破壞第三方音訊驅動程式和核心擴充功能。如果你安裝了以下任何軟體，它們可能正在造成問題：</p>

<ul>
  <li><strong>Soundflower</strong>——已停止維護，常與較新的 macOS 衝突</li>
  <li><strong>BlackHole</strong>——虛擬音訊裝置，macOS 更新後可能需要更新</li>
  <li><strong>Loopback</strong>——更新的 macOS 可能需要新版本</li>
  <li><strong>Background Music</strong>——安裝的虛擬音訊裝置在更新後經常損壞</li>
  <li><strong>音訊介面驅動程式</strong>——Focusrite、Universal Audio 等，請檢查更新的驅動程式</li>
</ul>

<p><strong>修復方法：</strong>移除或更新衝突的軟體。對於虛擬音訊裝置，檢查應用程式安裝的音訊裝置是否出現在系統設定 → 聲音 → 輸出中——如果出現且被選中，切換到你的真實喇叭。然後更新或解除安裝第三方應用程式。</p>

<h2>步驟 5：安全模式開機</h2>

<p>以安全模式開機以確定問題是否由啟動項目或第三方擴充功能引起：</p>

<ul>
  <li><strong>Apple Silicon：</strong>關機 → 按住電源按鈕直到出現「載入啟動選項」→ 選擇你的啟動磁碟 → 按住 Shift → 點擊「以安全模式繼續」</li>
  <li><strong>Intel：</strong>重新啟動 → 在開機期間按住 Shift 直到出現登入視窗</li>
</ul>

<p>如果音訊在安全模式下工作，則第三方核心擴充功能或登入項目是原因。調查最近安裝的軟體。</p>

<h2>步驟 6：建立新使用者帳戶</h2>

<p>如果問題持續，建立一個臨時新使用者帳戶（系統設定 → 使用者與群組 → 新增使用者）。登入新帳戶並測試音訊。如果聲音在新帳戶中有效，問題出在你的使用者設定檔——損壞的偏好設定檔案或音訊設定。</p>

<h2>使用 SoundDial 預防未來問題</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 相較於其他音訊工具的一個優點：它不安裝系統音訊驅動程式。它使用 Apple 的原生 Core Audio Tap API，這意味著它在 macOS 更新時可以乾淨地工作，不會受到虛擬音訊裝置應用程式所困擾的衝突。</p>

<p>如果你一直在使用 Background Music 或 Soundflower，而它們在更新後損壞了，SoundDial 是一個不會有同樣問題的替代品。逐應用程式音量控制、音量提升到 200%、配置、自動閃避——全部無需核心擴充功能或虛擬音訊裝置。</p>

<p>在 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> 上提供——Apple 審查，€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "mute-all-apps-keyboard-shortcut-mac": {
    slug: "mute-all-apps-keyboard-shortcut-mac",
    title: "如何在 Mac 上一次靜音所有應用程式（並完美恢復音量）",
    description:
      "需要立即靜音？靜音鍵會讓所有東西靜音——但取消靜音時會重置你精心平衡的音量。以下是在 Mac 上更好的靜音和恢復方式。",
    date: "2026-04-28",
    readTime: "4 min read",
    content: `
<p>有人走進房間。你的老闆突然打電話。客戶在通話中分享螢幕，你的音樂開始透過他們的喇叭播放。你需要立即靜音。就在現在。</p>

<p>你按下靜音鍵。一切變得安靜。危機解除。</p>

<p>然後那一刻過去了。你再次按下靜音鍵。一切恢復——但以系統音量等級恢復，它不記得 Spotify 在 30%、Zoom 在 100%、Slack 在 15%。那些個別音量？消失了。你必須手動重新調整所有東西。</p>

<h2>系統靜音鍵：粗糙的工具</h2>

<p>Mac 的靜音鍵（F10 或帶斜線的喇叭鍵）靜音<strong>系統音訊輸出</strong>。每個應用程式同時變得安靜。取消靜音會將系統音量恢復到原來的位置——但由於 macOS 只有一個音量滑桿，沒有逐應用程式音量可以記住或恢復。</p>

<p>如果你一次只使用一個應用程式，這沒問題。如果你有六個應用程式在不同音量精心平衡，並且需要靜音然後恢復所有應用程式，這就是個問題。</p>

<h2>更聰明的靜音：逐應用程式全部靜音</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 有一個「全部靜音」鍵盤快捷鍵：<strong>Control + Option + M（⌃⌥M）</strong>。</p>

<p>當你按下它時：</p>
<ol>
  <li>每個應用程式都被單獨靜音（每個應用程式的音量狀態被儲存）</li>
  <li>立即靜音——就像靜音鍵一樣</li>
</ol>

<p>當你再次按下它時：</p>
<ol>
  <li>每個應用程式取消靜音</li>
  <li>每個應用程式恢復到靜音前<strong>完全相同</strong>的音量</li>
  <li>Spotify 回到 30%，Zoom 回到 100%，Slack 回到 15%——完美恢復</li>
</ol>

<img src="/apps/sounddial.png" alt="SoundDial 全部靜音快捷鍵——Control+Option+M 靜音和取消靜音所有應用程式並恢復音量" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>與系統靜音鍵的區別：</p>
<ul>
  <li><strong>系統靜音：</strong>靜音輸出 → 取消靜音恢復一個系統音量 → 逐應用程式平衡不存在</li>
  <li><strong>SoundDial 全部靜音：</strong>單獨靜音每個應用程式 → 取消靜音恢復每個應用程式的個別音量 → 你的平衡被保留</li>
</ul>

<h2>何時這很重要</h2>

<ul>
  <li><strong>螢幕分享：</strong>你正在分享螢幕，需要在對方聽到你的音樂之前讓你的 Mac 靜音。⌃⌥M → 靜音 → 做你的事 → ⌃⌥M → 音樂恢復到完全正確的音量。</li>
  <li><strong>意外打擾：</strong>有人走進來，你需要立即靜音。一個快捷鍵，不用滑鼠，不用摸索選單列。</li>
  <li><strong>快速電話：</strong>你的辦公桌電話響了。讓 Mac 靜音，接電話，完成後取消靜音。一切都恢復了。</li>
</ul>

<p>結合 <strong>⌃⌥S</strong> 快捷鍵（切換 SoundDial 的彈出視窗），你可以完全從鍵盤管理所有音訊——開啟混音器、調整音量、關閉它，以及靜音/取消靜音所有東西，無需觸碰滑鼠。</p>

<p>在 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> 上提供——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "google-meet-volume-too-low-mac": {
    slug: "google-meet-volume-too-low-mac",
    title: "Mac 上 Google Meet 音量太低？如何修復",
    description:
      "即使調到最大音量，Google Meet 上的聲音也幾乎聽不見。以下說明為何 Meet 透過 Chrome 運作、這對音訊意味著什麼，以及如何提升音量。",
    date: "2026-05-01",
    readTime: "5 min read",
    content: `
<p>Google Meet 沒有原生 Mac 應用程式——它在你的瀏覽器內運行。這意味著 Meet 的音訊是 Chrome（或 Safari）音訊串流的一部分，任何音量問題都與瀏覽器處理音訊的方式糾纏在一起。讓我們來解開這個謎。</p>

<h2>1. 檢查 Meet 自己的音訊設定</h2>

<p>在 Meet 通話中，點擊三點選單（⋮）→ 設定 → 音訊。確保選擇了正確的喇叭裝置。Meet 有時會預設為意外的裝置，尤其是在你最近連接或斷開音訊硬體之後。</p>

<h2>2. 檢查瀏覽器的分頁音量</h2>

<p>在 Chrome 中：右鍵點擊 Meet 分頁 → 確保「靜音網站」未被選中。被靜音的網站無論其他設定如何都不會產生音訊。</p>

<p>在 Safari 中：點擊分頁上的喇叭圖示確保它沒有被靜音。</p>

<h2>3. 檢查系統輸出</h2>

<p>系統設定 → 聲音 → 輸出。確認選擇了正確的裝置且音量在最大值。如果你使用耳機，也請檢查耳機安全設定。</p>

<h2>4. Chrome 音訊問題</h2>

<p>Google Meet 作為 Chrome 分頁運行，Chrome 的音訊輸出可能低於專用應用程式。Chrome 透過自己的渲染器處理音訊，有自己的音量上限。如果 Chrome 的整體音訊很低，Meet 也會很低——即使 macOS 音量在 100%。</p>

<p>沒有內建方法可以將 Chrome 的音訊提升超過其最大值。macOS 將 Chrome 視為一個具有一個音量等級的應用程式，而該等級最高到 100%。</p>

<h2>5. 藍牙編解碼器問題</h2>

<p>如果你使用 AirPods 或藍牙耳機，Google Meet 啟用你的麥克風會迫使藍牙編解碼器從 AAC 切換到 SCO。這會顯著降低音訊品質和音量。</p>

<p><strong>修復方法：</strong>在 Meet 的音訊設定中，選擇你的 Mac 內建麥克風作為輸入裝置，同時保留藍牙耳機作為輸出。這可以防止編解碼器切換，並保持高品質音訊。</p>

<h2>6. 將 Google Meet（Chrome）提升到 100% 以上</h2>

<p>如果在檢查所有設定後 Meet 仍然太安靜，你需要將 Chrome 的音訊放大超過 macOS 允許的範圍。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 為 Chrome 提供最高 <strong>200%</strong> 的獨立音量滑桿。由於 Google Meet 在 Chrome 內運行，提升 Chrome 就等於提升 Meet。將滑桿拖到 150% 或 180%，通話音訊會即時放大。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上將 Google Meet（Chrome）音量提升超過 100%" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>如果你在 Safari 中使用 Meet，這也有效。SoundDial 獨立控制每個瀏覽器——為 Meet 提升 Safari，同時將 Chrome 保持在其他所有內容的正常音量。</p>

<p>透過自動閃避，當 Meet 通話開始時（當你的麥克風啟動時），你的背景音樂會自動降低，通話結束時恢復。</p>

<p>在 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> 上提供——Apple 審查，€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "mac-alert-volume-separate-from-media": {
    slug: "mac-alert-volume-separate-from-media",
    title: "如何將 Mac 提示音量與媒體音量分開設定",
    description:
      "macOS 有一個隱藏的提示音量滑桿，但它只涵蓋系統聲音。以下說明如何在 Mac 上真正分開通知音量和媒體音量。",
    date: "2026-05-02",
    readTime: "5 min read",
    content: `
<p>你的音樂在完美的音量。然後 macOS 提示音響起——「Funk」或「Tink」音效——比你的音樂還要痛苦地大聲。或者相反：由於系統音量為了安靜的背景音樂而調低，你的提示音幾乎聽不見。</p>

<p>你想要兩個獨立的音量控制：一個用於媒體（音樂、通話、影片），一個用於提示和通知。macOS 部分支援這功能，但完整解決方案需要第三方工具。</p>

<h2>macOS 內建的提示音量</h2>

<p>macOS 確實有一個獨立的提示音量。前往<strong>系統設定 → 聲音</strong>，尋找<strong>「提示音量」</strong>滑桿。這獨立於主系統音量控制 macOS 系統聲音的音量——錯誤提示音、清空垃圾桶、截圖快門聲。</p>

<p>你也可以選擇使用哪種提示音，以及是否「透過」你選擇的輸出裝置或內建喇叭播放音效。</p>

<h3>提示音量控制的範圍</h3>
<ul>
  <li>macOS 系統提示音（Funk、Tink、Bottle 等）</li>
  <li>Finder 聲音（垃圾桶、檔案複製完成）</li>
  <li>部分內建應用程式聲音</li>
</ul>

<h3>它無法控制的範圍</h3>
<ul>
  <li>Slack 通知聲音</li>
  <li>Discord 通知聲音</li>
  <li>Teams/Zoom 聲音</li>
  <li>Mail 通知聲音</li>
  <li>任何第三方應用程式通知聲音</li>
  <li>瀏覽器通知聲音</li>
</ul>

<p>第三方應用程式透過自己的音訊引擎播放通知聲音——它們被視為常規應用程式音訊，而不是系統提示。提示音量滑桿對它們沒有影響。這意味著發出最煩人通知聲音的應用程式（Slack、Discord、Teams）正是 macOS 的提示音量無法觸及的那些。</p>

<h2>真正的修復方法：通知應用程式的逐應用程式音量</h2>

<p>要真正將通知音量與媒體音量分開，你需要逐應用程式音量控制。將 Slack 設為 15%，Discord 設為 20%，Mail 設為 10%——同時將 Spotify 保持在 50%，瀏覽器在 60%。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 為每個應用程式提供自己的音量滑桿。你可以將通知頻繁的應用程式設為細微的音量，明顯但不刺耳，同時將媒體應用程式保持在舒適的收聽音量。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上分開通知應用程式音量和媒體應用程式音量" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>範例設定</h3>
<p><strong>媒體應用程式：</strong></p>
<ul>
  <li>Spotify：50%</li>
  <li>Safari/Chrome：60%</li>
  <li>QuickTime/VLC：70%</li>
</ul>

<p><strong>通知應用程式：</strong></p>
<ul>
  <li>Slack：15%</li>
  <li>Discord：20%</li>
  <li>Mail：10%</li>
  <li>Calendar：25%</li>
</ul>

<p><strong>通訊應用程式：</strong></p>
<ul>
  <li>Zoom/Teams：100%</li>
  <li>FaceTime：100%</li>
</ul>

<p>將此儲存為配置，一鍵套用。macOS 原本無法提供的通知音量和媒體音量分離——不到一分鐘就完成。</p>

<p>在 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> 上提供——Apple 審查，€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "facetime-volume-too-low-mac": {
    slug: "facetime-volume-too-low-mac",
    title: "Mac 上 FaceTime 通話音量太低？如何修復",
    description:
      "即使在最大音量下，Mac 上的 FaceTime 音訊也幾乎聽不見。以下列出所有修復方法——從聲音設定到將 FaceTime 音量提升超過 100%。",
    date: "2026-05-04",
    readTime: "5 min read",
    content: `
<p>你 iPhone 上的 FaceTime 通話沒問題。但在你的 Mac 上，對方聽起來像是在三個房間外小聲說話。音量已調到最大。你已檢查了所有能想到的設定。仍然太安靜。</p>

<p>Mac 上 FaceTime 音量低是一個常見問題，有幾個可能的原因。讓我們逐一解決。</p>

<h2>1. 檢查輸出裝置</h2>

<p>前往系統設定 → 聲音 → 輸出。確保選擇了正確的裝置。如果你最近連接或斷開了耳機、顯示器或藍牙裝置，macOS 可能已自動切換到意外的輸出——比如幾乎無法使用的顯示器內建喇叭。</p>

<h2>2. 檢查 FaceTime 的音訊設定</h2>

<p>在 FaceTime 通話中，點擊選單列並查看 FaceTime → 視訊 → 在音訊輸出下選擇正確的輸出裝置。FaceTime 有時可能使用與系統預設不同的輸出裝置，尤其是在裝置切換後。</p>

<h2>3. 停用 AirPods 自動切換</h2>

<p>如果你有與多個 Apple 裝置配對的 AirPods，它們可能在通話中途自動切換到其他裝置。前往系統設定 → 藍牙 → 點擊 AirPods 旁邊的「i」→「連接到此 Mac」→ 設為「最後連接到此 Mac 時」而不是「自動」以防止通話中途切換。</p>

<h2>4. 藍牙編解碼器問題</h2>

<p>使用 AirPods 或藍牙耳機進行 FaceTime 通話會觸發 AAC 到 SCO 的編解碼器切換（因為 FaceTime 使用你的麥克風）。SCO 會降低音訊品質和音量。使用獨立麥克風（內建 Mac 麥克風或 USB 麥克風），讓 AirPods 保持在高品質 AAC 模式。</p>

<h2>5. 耳機安全設定限制音量</h2>

<p>系統設定 → 聲音 → 耳機安全。如果「降低大聲音訊」已開啟，macOS 正在限制你的耳機音量。停用它或提高閾值。</p>

<h2>6. 重置 Core Audio</h2>

<p>開啟終端機並執行：</p>
<p><code>sudo killall coreaudiod</code></p>
<p>這會重新啟動音訊常駐程式，可以修復卡住的低音量狀態。音訊重新啟動後重新加入 FaceTime 通話。</p>

<h2>7. 將 FaceTime 音量提升超過 100%</h2>

<p>如果所有設定都正確，FaceTime 仍然太安靜——也許對方的麥克風很弱——你需要放大超過 macOS 的限制。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 讓你將 FaceTime 的音量提升到 <strong>200%</strong>。開啟選單列面板，找到 FaceTime，將其滑桿拖到 100% 以上。通話音訊即時放大，不影響任何其他應用程式。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上將 FaceTime 通話音量提升超過 100%" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial 也有助於解決反向問題：如果 FaceTime 的鈴聲或通知聲音在專注時間太大聲，可以將 FaceTime 調低到 20% 或靜音，同時保持音樂播放。一鍵靜音，一鍵取消靜音。</p>

<p>在 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> 上提供——Apple 審查，沙盒化，一次性購買，無訂閱。</p>
`,
  },
  "mac-volume-keyboard-shortcuts": {
    slug: "mac-volume-keyboard-shortcuts",
    title: "你可能不知道的 Mac 音量鍵盤快捷鍵",
    description:
      "除了基本的音量鍵——精細控制、靜音特定應用程式，以及逐應用程式音量快捷鍵。解說每個 Mac 音訊鍵盤技巧。",
    date: "2026-05-06",
    readTime: "5 min read",
    content: `
<p>每個 Mac 使用者都知道音量增加/降低/靜音鍵。按下它們，系統音量就會改變。但 macOS 有幾個隱藏的鍵盤音訊控制技巧，大多數人從未發現——加上讓音量管理大幅加速的第三方快捷鍵。</p>

<h2>每個人都應該知道的內建快捷鍵</h2>

<h3>精細音量調整</h3>
<p>按住 <strong>Option + Shift</strong> 並按音量增加或降低鍵。每次按下音量調整幅度為正常步驟的<strong>四分之一</strong>，讓你有 64 個等級而不是 16 個。這對於深夜找到正確的耳機音量，或者兩個正常步驟之間的跳幅太大時非常重要。</p>

<h3>靜音音量調整</h3>
<p>按住 <strong>Shift</strong> 並按音量增加或降低鍵。音量改變了，但可聽到的反饋「噗」聲被抑制了。當你在通話或簡報期間調整音量，不想讓「噗」聲傳給所有人時很有用。</p>

<h3>跳到聲音設定</h3>
<p>按住 <strong>Option</strong> 並按任何音量鍵，直接開啟系統設定 → 聲音。比手動導覽系統設定更快。</p>

<h3>快速輸出裝置切換</h3>
<p>按住 <strong>Option</strong> 並點擊選單列中的聲音圖示，查看所有可用輸出（和輸入）裝置的列表。點擊一個立即切換。無需開啟系統設定。</p>

<h2>macOS 鍵盤快捷鍵無法做到的事</h2>

<p>以上所有快捷鍵都控制<strong>系統音量</strong>——一個影響所有應用程式的滑桿。沒有以下功能的內建鍵盤快捷鍵：</p>

<ul>
  <li>調整特定應用程式的音量</li>
  <li>在不靜音其他所有東西的情況下靜音一個應用程式</li>
  <li>在已儲存的音量配置之間切換</li>
  <li>切換音量混音器面板</li>
</ul>

<p>macOS 根本沒有逐應用程式音量控制，所以沒有相關的快捷鍵。</p>

<h2>使用 SoundDial 的逐應用程式音量鍵盤快捷鍵</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 新增了兩個全局鍵盤快捷鍵，擴展了 macOS 的功能：</p>

<h3>切換音量混音器：Control + Option + S</h3>
<p>從任何地方按 <strong>⌃⌥S</strong>，SoundDial 的彈出視窗就會在選單列中開啟，顯示每個應用程式及其自己的音量滑桿。調整你需要的內容，再次按下快捷鍵（或點擊外部）關閉它。你不需要離開當前應用程式。</p>

<h3>靜音所有應用程式：Control + Option + M</h3>
<p>按 <strong>⌃⌥M</strong> 立即靜音每個應用程式的音訊。再次按下取消靜音所有東西，將每個應用程式恢復到其之前的音量。這是一個「立即靜音」按鈕，比按靜音鍵還快——而且與系統靜音鍵不同，取消靜音時會恢復逐應用程式音量。</p>

<img src="/apps/sounddial.png" alt="SoundDial 鍵盤快捷鍵——Control+Option+S 切換，Control+Option+M 靜音所有" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>鍵盤驅動的工作流程</h2>

<p>啟用 SoundDial 的快捷鍵後，你可以在不觸碰滑鼠的情況下管理所有音訊：</p>

<ol>
  <li><strong>⌃⌥S</strong>——開啟混音器</li>
  <li>使用方向鍵或滑鼠調整個別滑桿</li>
  <li><strong>⌃⌥S</strong>——關閉混音器</li>
  <li><strong>⌃⌥M</strong>——有人走進房間時立即靜音</li>
  <li><strong>⌃⌥M</strong>——他們離開後取消靜音，一切恢復正常</li>
</ol>

<p>結合<strong>音量配置</strong>（你一鍵切換的已儲存配置），你可以管理十幾個應用程式的音訊，無需單獨開啟其中任何一個。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 上取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "background-music-app-not-working-mac": {
    slug: "background-music-app-not-working-mac",
    title: "Background Music App 在 macOS 上無法使用？試試這些替代方案",
    description:
      "免費的 Background Music 應用程式在 macOS 更新後停止工作了？以下說明它為何損壞、該怎麼做，以及 2026 年真正有效的最佳替代方案。",
    date: "2026-06-08",
    readTime: "5 min read",
    content: `
<p>Background Music 是一款受歡迎的免費開源 Mac 應用程式，提供基本的逐應用程式音量控制。它透過安裝虛擬音訊裝置並透過它路由所有音訊來工作。問題是：它會損壞。而且很頻繁。</p>

<p>幾乎在每次 macOS 更新後——Ventura、Sonoma、Sequoia、Tahoe——使用者都會回報相同的問題：虛擬音訊裝置無法安裝、音訊出現雜音和噼啪聲、部分應用程式未被偵測到，或者應用程式在啟動時崩潰。如果你搜尋「Background Music 無法使用」，你並不孤單。</p>

<h2>為什麼 Background Music 一直損壞</h2>

<p>Background Music 透過安裝<strong>虛擬音訊裝置驅動程式</strong>（Core Audio HAL 外掛程式）來工作。macOS 將所有系統音訊路由透過這個虛擬裝置，Background Music 攔截它以套用逐應用程式音量控制。</p>

<p>問題是 Apple 幾乎在每個主要 macOS 版本都改變了音訊驅動程式的工作方式。安全限制收緊、API 改變，驅動程式載入機制也在演進。由於 Background Music 是志願者維護的開源專案，與 Apple 更改的配合更新並不總是及時的。</p>

<p>macOS 更新後常見問題：</p>
<ul>
  <li><strong>虛擬音訊裝置無法安裝</strong>——macOS 的新安全政策阻止驅動程式</li>
  <li><strong>音訊雜音或卡頓</strong>——虛擬裝置引入的延遲在當前 macOS 版本中處理不佳</li>
  <li><strong>應用程式不出現</strong>——macOS 回報運行中程序的方式更改導致應用程式偵測損壞</li>
  <li><strong>完全沒有音訊</strong>——虛擬裝置被設為預設輸出但沒有傳送音訊</li>
  <li><strong>啟動時崩潰</strong>——與當前 macOS 版本不相容</li>
</ul>

<h2>如何修復 Background Music</h2>

<p>如果 Background Music 目前損壞了：</p>

<ol>
  <li><strong>檢查更新：</strong>訪問 Background Music 的 GitHub 發布頁面，看是否有針對你的 macOS 版本發布的新版本。</li>
  <li><strong>重新安裝：</strong>完全解除安裝 Background Music（包括虛擬音訊裝置），重新啟動，然後安裝最新版本。</li>
  <li><strong>重置音訊：</strong>如果你的音訊卡在虛擬裝置上，前往系統設定 → 聲音 → 輸出並選擇你的真實喇叭/耳機。然後在終端機中執行 <code>sudo killall coreaudiod</code>。</li>
  <li><strong>檢查權限：</strong>系統設定 → 隱私權與安全性——確保 Background Music 擁有必要的權限。</li>
</ol>

<h2>不使用虛擬音訊裝置的替代方案</h2>

<p>Background Music 的根本問題是架構性的：虛擬音訊裝置很脆弱，會隨著 macOS 更新而損壞。現代替代方案使用 Apple 的 <strong>Core Audio Tap API</strong>（在 macOS 14 中引入），讓應用程式可以攔截逐程序音訊，無需安裝系統層級驅動程式。</p>

<h3>SoundDial</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 使用現代 Audio Tap API——沒有虛擬音訊裝置，沒有系統驅動程式，沒有核心擴充功能。它使用 Apple 支援的 API 直接攔截每個應用程式的音訊串流，這意味著它在 macOS 更新時不會損壞。</p>

<img src="/apps/sounddial.png" alt="SoundDial——不安裝虛擬音訊裝置的 Background Music 替代方案" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>相較於 Background Music，你得到的：</p>
<ul>
  <li><strong>沒有虛擬音訊裝置</strong>——使用 Apple 的原生音訊堆疊，更新時不損壞</li>
  <li><strong>音量提升到 200%</strong>——Background Music 上限為 100%</li>
  <li><strong>音量配置</strong>——儲存並切換配置（Background Music 沒有）</li>
  <li><strong>自動閃避</strong>——通話期間自動降低音量（Background Music 只有自動暫停，不是閃避）</li>
  <li><strong>音量記憶</strong>——在重啟之間記住逐應用程式音量</li>
  <li><strong>鍵盤快捷鍵</strong>——切換混音器或靜音所有應用程式</li>
  <li><strong>積極開發</strong>——定期更新以支援最新 macOS</li>
</ul>

<p>取捨：SoundDial 是一次性付費購買，而 Background Music 是免費的。但一個真正有效的應用程式比一個每六個月損壞一次的免費應用程式更有價值。而且因為 SoundDial 在 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> 上，它已經過 Apple 審查、沙盒化保護安全，並且安裝乾淨——無需從 GitHub 下載、無需從源碼編譯、無需授予系統擴充功能權限。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 上取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "soundsource-alternative-mac": {
    slug: "soundsource-alternative-mac",
    title: "SoundSource 替代方案：Mac 上更輕量、更便宜的逐應用程式音量控制",
    description:
      "SoundSource 功能強大但昂貴且複雜。如果你只需要逐應用程式音量控制而不需要音訊工程工具集，以下說明該用什麼替代。",
    date: "2026-06-06",
    readTime: "6 min read",
    content: `
<p>Rogue Amoeba 的 SoundSource 是 Mac 上歷史最悠久的逐應用程式音量控制應用程式。它功能強大、製作精良，並附帶逐應用程式 EQ、音訊效果鏈和逐應用程式輸出路由等功能。它也要 $39，需要系統音訊驅動程式（ACE），且具有大多數人永遠不會用到的功能。</p>

<p>如果你只是想在不影響 Zoom 的情況下調低 Spotify——而你不需要完整的音訊工程工具集——SoundSource 可能超出你的需求。以下是需要考慮的事項。</p>

<h2>SoundSource 的優點</h2>

<p>功勞歸功勞——SoundSource 是一款精緻的專業應用程式：</p>
<ul>
  <li>具有精細滑桿的<strong>逐應用程式音量控制</strong></li>
  <li>具有內建等化器和 Audio Unit 外掛程式支援的<strong>逐應用程式 EQ</strong></li>
  <li><strong>逐應用程式輸出路由</strong>——將不同應用程式傳送到不同喇叭</li>
  <li>超過 100% 的<strong>音量提升</strong></li>
  <li><strong>系統範圍的音訊效果</strong></li>
</ul>

<p>如果你是需要逐應用程式 EQ 和效果鏈的 Podcast 製作者、實況主或音訊專業人員，SoundSource 是專為你設計的。</p>

<h2>SoundSource 對一般使用者的不足之處</h2>

<h3>價格</h3>
<p>$39 美元對於音量控制應用程式來說很貴。如果你不使用 EQ、音訊效果或逐應用程式路由，你為永遠不會用到的功能付費。</p>

<h3>系統驅動程式</h3>
<p>SoundSource 安裝一個名為 ACE（Audio Capture Engine）的自訂系統音訊驅動程式。這運作良好但增加了複雜性——它需要隨著每個 macOS 版本更新，有時可能與其他音訊軟體衝突，這意味著你在系統音訊層面運行第三方程式碼。企業環境中的部分 IT 部門會阻止核心擴充功能和系統層級音訊驅動程式。</p>

<h3>沒有音量配置</h3>
<p>儘管功能豐富，SoundSource 沒有配置系統。你無法儲存「會議」配置和「專注」配置並在它們之間切換。每次情況改變，你都必須手動調整每個滑桿。</p>

<h3>沒有自動閃避</h3>
<p>SoundSource 不會在你加入通話時自動降低背景音訊。沒有通話偵測、沒有自動音量調整、沒有針對逐應用程式混音器最常見使用案例的免手動工作流程。</p>

<h2>SoundDial：專注於大多數人實際需要的功能</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 採用不同的方式：完美地完成核心工作，跳過大多數人不需要的功能，並新增 SoundSource 缺少的工作流程功能。</p>

<table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;">
<thead>
<tr style="border-bottom:2px solid rgba(255,255,255,0.2);">
  <th style="text-align:left;padding:10px 12px;color:rgba(255,255,255,0.6);">功能</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundDial</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundSource</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">逐應用程式音量</td>
  <td style="text-align:center;padding:10px 12px;">是（0-200%）</td>
  <td style="text-align:center;padding:10px 12px;">是</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">逐應用程式靜音</td>
  <td style="text-align:center;padding:10px 12px;">是</td>
  <td style="text-align:center;padding:10px 12px;">是</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">音量配置</td>
  <td style="text-align:center;padding:10px 12px;">是</td>
  <td style="text-align:center;padding:10px 12px;">否</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">自動閃避</td>
  <td style="text-align:center;padding:10px 12px;">是</td>
  <td style="text-align:center;padding:10px 12px;">否</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">音量記憶</td>
  <td style="text-align:center;padding:10px 12px;">是</td>
  <td style="text-align:center;padding:10px 12px;">是</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">逐應用程式 EQ</td>
  <td style="text-align:center;padding:10px 12px;">否</td>
  <td style="text-align:center;padding:10px 12px;">是</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">逐應用程式輸出路由</td>
  <td style="text-align:center;padding:10px 12px;">否</td>
  <td style="text-align:center;padding:10px 12px;">是</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">系統音訊驅動程式</td>
  <td style="text-align:center;padding:10px 12px;">不需要</td>
  <td style="text-align:center;padding:10px 12px;">必需（ACE）</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">鍵盤快捷鍵</td>
  <td style="text-align:center;padding:10px 12px;">是</td>
  <td style="text-align:center;padding:10px 12px;">是</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">價格</td>
  <td style="text-align:center;padding:10px 12px;">€14.99 一次性</td>
  <td style="text-align:center;padding:10px 12px;">$39 美元</td>
</tr>
</tbody>
</table>

<img src="/apps/sounddial.png" alt="SoundDial——具有音量配置和自動閃避的更輕量 SoundSource 替代方案" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>你應該選擇哪個？</h2>

<ul>
  <li><strong>如果你需要逐應用程式 EQ、音訊效果鏈或逐應用程式輸出路由，選擇 SoundSource。</strong>你是 Podcast 製作者、實況主或音訊專業人員。你不介意價格和系統驅動程式。</li>
  <li><strong>如果你想要附帶配置和自動閃避的逐應用程式音量控制，選擇 <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>。</strong>你想要不安裝系統驅動程式的更輕量工具。你想花少一點。你是遠端工作者、遊戲玩家、學生，或任何只想在不影響 Zoom 的情況下調低 Slack 的人。</li>
</ul>

<p>SoundDial 在 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> 上提供——這意味著它已經過 Apple 審查、沙盒化保護安全，並且像任何 App Store 應用程式一樣乾淨地安裝/解除安裝。無需從隨機網站下載 DMG，無需系統驅動程式安裝，無需授予核心擴充功能權限。一次性購買，無訂閱。</p>
`,
  },
  "mac-volume-too-loud-at-lowest-setting": {
    slug: "mac-volume-too-loud-at-lowest-setting",
    title: "Mac 音量在最低設定時仍然太大聲？如何調得更小",
    description:
      "即使在最低音量刻度，你的 Mac 仍然太大聲——尤其是深夜戴著耳機。以下說明如何獲得更精細的音量控制，並降到最小值以下。",
    date: "2026-05-08",
    readTime: "5 min read",
    content: `
<p>現在是午夜。你戴著耳機。你一直按音量降低鍵直到達到最低刻度——一格。仍然太大聲了。再按一下就是靜音。中間沒有任何選項。你想要 3% 的音量，但 macOS 從約 6% 直接跳到 0%。</p>

<p>這是耳機和靈敏喇叭的常見抱怨。macOS 的 16 個音量步驟太粗糙了——最低可聽步驟仍然比你深夜安靜收聽所需的更大聲。</p>

<h2>內建修復方法：四分之一步驟音量調整</h2>

<p>大多數 Mac 使用者不知道這個：你可以使用鍵盤修飾鍵獲得 <strong>4 倍更精細的音量控制</strong>。</p>

<p>按住 <strong>Option + Shift</strong> 並按音量增加/降低鍵。每次按下調整音量的幅度為正常步驟的四分之一——給你 64 個步驟而不是 16 個。</p>

<p>這讓你可以找到正常刻度之間的音量等級。「一格」和「靜音」之間的間隔現在有三個額外的等級可以選擇。對於深夜的耳機收聽，這通常足以找到舒適的音量。</p>

<h2>為什麼某些內容在相同音量下聽起來更大聲</h2>

<p>你可能注意到某些應用程式在相同系統音量下感覺比其他應用程式更大聲。同樣一格音量，Spotify 感覺比 YouTube 影片更大聲。這是因為每個應用程式以不同的等級輸出音訊，系統音量按比例縮放它們。</p>

<p>以 0 dB（最大值）母帶製作的歌曲和以 -15 dB 錄製的 Podcast 在相同系統音量下聽起來會有很大的不同。那首歌大 15 dB——對你的耳朵來說感覺大約是三倍響亮。</p>

<h2>真正的修復方法：精細控制的逐應用程式音量</h2>

<p>四分之一步驟快捷鍵有幫助，但它仍然等量調整所有應用程式。如果 Spotify 在最低步驟太大聲，但你的 Zoom 通話在最低步驟太安靜，你就陷入了困境。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 為你提供精細控制的逐應用程式音量滑桿——每個滑桿以 1% 為增量從 0% 移動到 200%。你可以同時將 Spotify 設為 5%，Zoom 設為 40%。控制精細度比 macOS 的 16 個系統步驟細緻得多。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上以 1% 增量進行精細逐應用程式音量控制" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>對於深夜耳機使用：</p>
<ul>
  <li>將系統音量設為適中等級（40-50%）</li>
  <li>使用 SoundDial 將每個應用程式微調到你想要的確切等級</li>
  <li>Spotify 在 8%——幾乎聽不見的背景音樂</li>
  <li>瀏覽器在 15%——足夠安靜以供深夜影片觀看</li>
  <li>通知靜音——沒有意外的大聲提示音</li>
</ul>

<p>將此儲存為「夜晚」配置，當你深夜戴上耳機時一鍵套用。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 上取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "one-airpod-louder-than-the-other-fix": {
    slug: "one-airpod-louder-than-the-other-fix",
    title: "一個 AirPod 比另一個更大聲？每種修復方法詳解",
    description:
      "左邊的 AirPod 比右邊的安靜（或相反）。以下說明每種原因——從耳垢到 macOS 平衡設定——以及如何修復。",
    date: "2026-05-10",
    readTime: "5 min read",
    content: `
<p>一個 AirPod 聽起來沒問題。另一個明顯更安靜。音樂感覺偏向一側。聲音聽起來像是從一側傳來。這是最常見的 AirPods 抱怨之一，通常有簡單的修復方法。</p>

<h2>1. 清潔你的 AirPods</h2>

<p>最常見的原因是物理性的：耳垢或碎屑部分堵塞了一個 AirPod 上的喇叭網格。即使薄薄一層積累也可能顯著降低那一側的音量。</p>

<p><strong>清潔方法：</strong></p>
<ul>
  <li>使用乾燥的軟毛刷（乾淨的牙刷可以）輕輕刷喇叭網格</li>
  <li>對於 AirPods Pro 的矽膠耳塞：取下耳塞並清潔耳塞和下面的喇叭網格</li>
  <li>用乾燥的無棉絮布料擦拭外部</li>
  <li><strong>不要使用：</strong>水、酒精、壓縮空氣或尖銳物體——這些可能損壞喇叭網格或將碎屑推得更深</li>
</ul>

<p>清潔後，測試兩個 AirPod。在大多數情況下，這會立即修復問題。</p>

<h2>2. 檢查 macOS 中的音訊平衡</h2>

<p>macOS 有一個左右音訊平衡滑桿，可能偏離中心：</p>

<ol>
  <li>前往<strong>系統設定 → 輔助使用 → 音訊</strong></li>
  <li>找到<strong>平衡</strong>滑桿</li>
  <li>確保它完全位於 L 和 R 之間的中心</li>
</ol>

<p>如果滑桿偏向一側，那就是問題所在。將其置中，音量應該在兩側相等。</p>

<p>也請檢查<strong>系統設定 → 聲音</strong>——某些 macOS 版本在輸出裝置設定中也有平衡滑桿。</p>

<h2>3. 重置你的 AirPods</h2>

<p>如果清潔和平衡沒有幫助，嘗試將 AirPods 重置為出廠狀態：</p>

<ol>
  <li>將兩個 AirPod 放入充電盒</li>
  <li>關閉蓋子等待 30 秒</li>
  <li>開啟蓋子</li>
  <li>按住充電盒背面的設定按鈕 15 秒，直到狀態指示燈閃爍琥珀色，然後變白</li>
  <li>重新將 AirPods 與你的 Mac 配對（系統設定 → 藍牙）</li>
</ol>

<p>這會重置任何儲存的音訊校準，可以修復軟體側的音量不平衡。</p>

<h2>4. 檢查單聲道音訊</h2>

<p>如果 macOS 的單聲道音訊輔助功能已啟用，立體聲音訊會被混合成單聲道並平等地傳送到兩個 AirPod。雖然這不應該造成音量差異，但它可能會改變某些內容的聽起來方式，讓一側感覺「不同」。</p>

<p>檢查：系統設定 → 輔助使用 → 音訊 → 確保「單聲道音訊」已關閉（除非你需要它）。</p>

<h2>5. 藍牙干擾</h2>

<p>AirPods 透過藍牙與你的 Mac 通訊，每個 AirPod 也與另一個通訊。如果有顯著的藍牙干擾（WiFi 路由器、USB 3.0 集線器、其他藍牙裝置），一個 AirPod 可能接收到較弱的訊號。</p>

<p><strong>修復方法：</strong>靠近你的 Mac。斷開你不使用的藍牙裝置。如果你靠近 USB 3.0 集線器，嘗試將其移開——USB 3.0 已知會干擾 2.4 GHz 藍牙。</p>

<h2>6. 硬體問題</h2>

<p>如果以上修復方法都無效，一個 AirPod 可能有硬體缺陷——退化的喇叭驅動器或損壞的網格。這在長期大量使用後會發生。</p>

<p><strong>修復方法：</strong>聯絡 Apple 支援或訪問 Apple Store。如果你的 AirPods 在保固期內或有 AppleCare+，Apple 會更換受影響的 AirPod。保固期外也可以購買個別 AirPod 更換服務。</p>

<h2>透過逐應用程式音量控制獲得更好的音訊平衡</h2>

<p>雖然逐應用程式音量控制無法修復 AirPods 之間的硬體不平衡，但它解決了一個相關問題：當某些應用程式在你的 AirPods 中比其他應用程式更大聲時，可能會誇大不平衡的感知。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 讓你將每個應用程式設為一致的音量等級。當 Spotify 在 40%、Zoom 在 100%、Safari 在 60% 時，你確切知道每個應用程式的預期——沒有因為通知剛以 100% 爆炸而讓一個 AirPod 感覺更大聲的突然音量跳動。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 上取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "netflix-streaming-audio-too-quiet-mac": {
    slug: "netflix-streaming-audio-too-quiet-mac",
    title: "Mac 上 Netflix 和串流音訊太安靜？如何修復",
    description:
      "對話輕聲細語，然後爆炸聲震動整個房間。以下說明如何修復 Mac 上的串流音訊等級——並將安靜的內容提升超過 100%。",
    date: "2026-05-17",
    readTime: "5 min read",
    content: `
<p>你在 Netflix 上看電影。兩個角色在對話——你幾乎聽不見他們。你調高音量。動作場景開始了。爆炸聲震耳欲聾。你慌忙去找音量鍵。這是關於串流音訊最常見的抱怨，在 Mac 內建喇叭上更為嚴重。</p>

<p>問題不在你的 Mac。而在於電影和電視節目的母帶製作方式——以及 macOS 沒有給你任何工具來修復它的事實。</p>

<h2>為什麼串流音訊有如此劇烈的音量波動</h2>

<p>電影和電視節目以高<strong>動態範圍</strong>製作母帶——最安靜和最大聲之間的差異。在配備強力喇叭和重低音的電影院中，這聽起來令人驚嘆。耳語是親密的，爆炸是有內臟感的。</p>

<p>在 MacBook 的 2 英寸喇叭上，動態範圍變成了累贅。安靜的部分低於小喇叭可以清晰再現的程度，而大聲的部分達到喇叭的物理極限。你最終不斷調整音量——調高聽對話，調低聽動作。</p>

<h2>修復方法 1：在串流應用程式中啟用「降低大聲聲音」</h2>

<p>某些串流服務有音量標準化功能：</p>
<ul>
  <li><strong>Netflix：</strong>在播放中，點擊喇叭圖示 → 檢查是否有「降低大聲聲音」選項（在瀏覽器和原生應用程式中均可使用）</li>
  <li><strong>Apple TV+：</strong>設定 → 輔助使用 → 「降低大聲聲音」</li>
  <li><strong>Disney+：</strong>目前沒有同等設定</li>
  <li><strong>Amazon Prime Video：</strong>「對話增強」功能（如果該標題可用）</li>
</ul>

<p>這些功能壓縮動態範圍——讓安靜的聲音更響亮，大聲的聲音更安靜。結果是更均勻的音量，在小喇叭和低音量收聽時效果更好。</p>

<h2>修復方法 2：檢查你 Mac 的音效增強器</h2>

<p>在某些 Mac 型號上，macOS 對內建喇叭套用音訊處理。前往系統設定 → 聲音，查看你的輸出裝置是否有任何增強選項。在 MacBook Pro 14" 和 16" 機型上，喇叭系統有空間音訊處理，可能影響感知音量。</p>

<h2>修復方法 3：使用有線耳機</h2>

<p>耳機完全繞過喇叭尺寸問題。即使是便宜的有線耳塞也能清晰地再現安靜的對話，因為驅動器就在你的耳道旁邊。在小喇叭上是問題的動態範圍，在耳機中變成了優勢。</p>

<h2>修復方法 4：將串流音訊提升超過 100%</h2>

<p>如果內容就是太安靜——即使開啟了標準化且音量在最大值——你需要超過 macOS 提供的放大範圍。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 讓你將任何應用程式提升到 <strong>200%</strong>。如果 Safari 或 Netflix 應用程式太安靜，將其滑桿拖過 100%。音訊在到達你的喇叭之前被放大，有效地使該應用程式的最大音量翻倍，並且只針對該應用程式。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 Mac 上將 Netflix 音訊提升到 180% 以獲得更清晰的對話和串流音訊" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>這特別適用於：</p>
<ul>
  <li>觀看對話柔和的安靜外國電影</li>
  <li>串流以較低等級製作母帶的舊內容</li>
  <li>在嘈雜環境中使用 MacBook 喇叭</li>
  <li>一個串流服務比另一個明顯更安靜</li>
</ul>

<p>由於 SoundDial 獨立控制每個應用程式，將 Netflix 提升到 150% 不會讓你的 Spotify 或 Slack 更大聲。每個應用程式保持在自己的等級。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 上取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "mac-audio-setup-remote-work": {
    slug: "mac-audio-setup-remote-work",
    title: "遠端工作的 Mac 音訊設定：完整指南",
    description:
      "通話、音樂、通知和專注時間——全都在一台 Mac 上。以下說明如何設定你的音訊，讓每件事都不互相干擾。",
    date: "2026-05-12",
    readTime: "8 min read",
    content: `
<p>在 Mac 上遠端工作意味著你的電腦同時是你的辦公室電話、收音機、通知中心和深度工作站。這是四種根本不同的音訊模式，macOS 對它們一視同仁：一個音量滑桿，所有東西在同一個等級，沒有辦法排定優先順序。</p>

<p>本指南說明如何為遠端工作設定 Mac 的音訊，讓通話清晰、音樂存在但不分散注意力、通知細微、專注時間真正安靜。</p>

<h2>遠端工作的四種音訊模式</h2>

<h3>1. 會議模式</h3>
<p>你在 Zoom 或 Teams 通話中。通話需要水晶般清晰。音樂應該靜音或幾乎聽不見。Slack 不應該在你耳邊叮叮響。</p>

<h3>2. 專注模式</h3>
<p>你在做深度工作。低音量的背景音樂幫助你集中注意力。通知應該幾乎感覺不到——存在到足以注意到緊急訊息，安靜到不打斷你的心流。</p>

<h3>3. 協作模式</h3>
<p>你可以接收訊息、監控 Slack、也許在看培訓影片。一切都可以在適中的等級。通知音量正常。</p>

<h3>4. 休息模式</h3>
<p>音樂全音量。YouTube 全音量。通知可以等。</p>

<h2>硬體設定</h2>

<h3>麥克風問題</h3>
<p>如果你在通話中使用 AirPods，考慮改用獨立麥克風。當 AirPods 同時作為麥克風和喇叭使用時，macOS 會切換到較低品質的 SCO 藍牙編解碼器，降低音訊品質和音量。使用 Mac 內建麥克風（或 USB 麥克風）同時保留 AirPods 作為輸出，完全避免這個問題。</p>

<p>最佳通話品質：USB 麥克風或內建麥克風的耳機。Blue Yeti、Elgato Wave，甚至基本的 USB 耳機，對你的同事來說聽起來都比 AirPods 的麥克風好得多。</p>

<h3>輸出裝置</h3>
<p>許多遠端工作者使用兩個輸出裝置：</p>
<ul>
  <li><strong>耳機</strong>用於通話——隱私、無回聲、清晰音訊</li>
  <li><strong>喇叭</strong>用於非通話時間的音樂——充滿房間，長時間使用更舒適</li>
</ul>

<p>在選單列的聲音圖示上按 Option 點擊快速切換裝置。或使用 SoundDial 的內建裝置切換器，將你的輸出裝置放在音量控制旁邊。</p>

<h2>軟體設定</h2>

<h3>通知管理</h3>
<p>前往系統設定 → 通知。對每個應用程式決定是否需要聲音通知：</p>
<ul>
  <li><strong>保留聲音：</strong>Slack（如果你需要即時回應）、Calendar（會議）、Messages</li>
  <li><strong>關閉聲音：</strong>Mail（按你的時間表查看）、News、社交應用程式</li>
</ul>

<h3>專注模式</h3>
<p>在系統設定 → 專注中建立至少兩個專注模式：</p>
<ul>
  <li><strong>「會議」</strong>——除日曆應用程式外靜音所有通知</li>
  <li><strong>「專注工作」</strong>——允許來自 Slack 私訊和主管的通知，靜音其他所有</li>
</ul>

<h2>缺少的部分：逐應用程式音量控制</h2>

<p>專注模式控制<em>哪些</em>通知可以通過，但不控制<em>有多大聲</em>。你仍然只有一個所有東西共用的音量滑桿。如果你想要 Slack 在 15%、Spotify 在 35%、Zoom 在 100%——macOS 無法做到。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 透過為每個應用程式提供自己的音量滑桿來填補這個空缺：</p>

<img src="/apps/sounddial.png" alt="SoundDial 遠端工作音訊設定——macOS 上 Zoom、Spotify 和 Slack 的不同音量等級" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>為每種模式儲存配置</h3>

<p><strong>會議配置：</strong></p>
<ul>
  <li>Zoom/Teams：100%</li>
  <li>Spotify：靜音</li>
  <li>Slack：靜音</li>
  <li>瀏覽器：靜音</li>
</ul>

<p><strong>專注工作配置：</strong></p>
<ul>
  <li>Spotify：30%</li>
  <li>Slack：10%</li>
  <li>Zoom：80%（以防有人打電話）</li>
  <li>瀏覽器：40%</li>
</ul>

<p><strong>協作配置：</strong></p>
<ul>
  <li>所有東西在 50-70%</li>
  <li>Slack：30%</li>
</ul>

<p>一鍵切換配置。當通話開始時，SoundDial 的自動閃避會自動降低除通話應用程式外的所有東西。通話結束時，你的配置等級恢復。</p>

<h2>日常工作流程</h2>

<ol>
  <li>開始工作 → 套用「專注工作」配置</li>
  <li>加入會議 → 自動閃避自動處理（或套用「會議」配置）</li>
  <li>會議結束 → 音量恢復到專注工作等級</li>
  <li>午休 → 套用「休息」配置，盡情播放音樂</li>
  <li>下午深度工作 → 回到專注工作</li>
</ol>

<p>每天手動操作：兩到三次配置點擊。其餘都是自動的。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 上取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "stop-browser-tabs-auto-playing-audio-mac": {
    slug: "stop-browser-tabs-auto-playing-audio-mac",
    title: "如何阻止瀏覽器分頁在 Mac 上自動播放音訊",
    description:
      "背景分頁突然開始播放音訊。廣告、影片、新聞網站——以下說明如何在 macOS 上靜音惡意分頁並控制瀏覽器音訊。",
    date: "2026-05-14",
    readTime: "5 min read",
    content: `
<p>你開著二十個分頁。你在其中一個工作。突然——某處開始播放音訊。一個影片廣告。一個自動播放的新聞片段。一個你一小時前開啟的分頁，決定現在開始製造噪音。你開始慌亂地找是哪個分頁，一個一個點擊。</p>

<p>瀏覽器分頁中自動播放的音訊是任何電腦上最惱人的體驗之一，在 Mac 上更嚴重，因為 macOS 沒有辦法在不靜音所有東西的情況下靜音特定應用程式（更別說特定分頁）。</p>

<h2>在 Safari 中停用自動播放</h2>

<p>Safari 擁有所有瀏覽器中最好的內建自動播放控制：</p>

<ol>
  <li>開啟 Safari → 設定（⌘,）→ 網站分頁</li>
  <li>在左側邊欄選擇「自動播放」</li>
  <li>在底部將預設設為「永不自動播放」或「停止有聲媒體」</li>
</ol>

<p>「停止有聲媒體」是最佳選項——它阻止有音訊自動播放的影片，但允許靜音自動播放（許多網站用於裝飾性背景影片）。「永不自動播放」阻止所有東西。</p>

<h2>在 Chrome 中停用自動播放</h2>

<ol>
  <li>前往 <code>chrome://settings/content/sound</code></li>
  <li>切換「網站可以播放聲音」來決定預設行為</li>
  <li>將特定網站加入「靜音」列表以永久靜音它們</li>
</ol>

<p>Chrome 也讓你靜音個別分頁：右鍵點擊分頁 → 「靜音網站」。這會靜音來自該網站的所有音訊，直到你取消靜音。</p>

<h2>快速靜音分頁</h2>

<p>Safari 和 Chrome 都在產生音訊的分頁上顯示喇叭圖示。在 Safari 中，點擊分頁上的喇叭圖示靜音它。在 Chrome 中，右鍵點擊分頁並選擇「靜音網站」。</p>

<h2>更廣泛的問題：瀏覽器音訊與其他所有東西</h2>

<p>即使停用了自動播放並靜音了分頁，你可能仍然想要控制瀏覽器相對於其他應用程式的大小聲。也許你在 Zoom 通話中同時看 YouTube 教學——你想要教學在 30%，Zoom 在 100%。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 為你的瀏覽器提供自己的音量滑桿，獨立於其他所有應用程式。將 Safari 調低到 30%，同時將 Zoom 保持在 100%。一鍵完全靜音 Chrome，同時保持 Spotify 播放。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上獨立於其他應用程式控制瀏覽器音量" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>這是處理意外自動播放分頁的最快方法：不是尋找哪個分頁在製造噪音，而是在選單列點擊 SoundDial 並靜音瀏覽器。其他所有東西繼續播放。當你找到並關閉惱人的分頁後，取消靜音瀏覽器，音量恢復到之前的位置。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 上取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "discord-volume-too-loud-mac": {
    slug: "discord-volume-too-loud-mac",
    title: "Mac 上 Discord 音量太大（或太小）？如何修復",
    description:
      "Discord 蓋過你的遊戲，或者太安靜聽不到隊友。以下說明如何在 macOS 上獨立控制 Discord 音量。",
    date: "2026-05-21",
    readTime: "5 min read",
    content: `
<p>Discord 在 Mac 上有兩個音量問題。要麼太大聲——通知聲蓋過你的遊戲和音樂——要麼太安靜——你聽不到隊友說話，因為遊戲音效蓋住了他們。問題是 macOS 不讓你獨立調整 Discord 的音量。它鎖定在與其他所有東西相同的系統滑桿上。</p>

<h2>Discord 的內建音量控制</h2>

<h3>輸出音量</h3>
<p>前往 Discord → 設定（齒輪圖示）→ 語音和視訊。「輸出音量」滑桿控制 Discord 對你的大小聲。如果 Discord 太安靜，確保這在 100%。如果太大聲，在這裡降低它。</p>

<h3>逐用戶音量</h3>
<p>右鍵點擊語音頻道中的任何用戶 → 「用戶音量」。你可以將個別用戶從 0% 調整到 200%。這對一個人比其他人更大聲或更安靜的情況很有用，但無法解決整體 Discord 與其他應用程式的平衡問題。</p>

<h3>通知音量</h3>
<p>Discord → 設定 → 通知。你可以單獨停用特定通知聲音（訊息、取消靜音、靜音、加入/離開）。這減少了干擾聲音的數量，但不讓你降低它們的音量——只能開或關。</p>

<h2>真正的問題：系統層級的音量平衡</h2>

<p>Discord 的內部控制調整 Discord 自己的混音。但真正的問題是 Discord 與你 Mac 上其他所有東西之間的平衡：你的遊戲、你的音樂、你的瀏覽器。macOS 為它們全部提供一個滑桿。</p>

<h2>用 SoundDial 修復</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 在你的選單列中為 Discord 提供自己的音量滑桿，獨立於其他所有應用程式。將 Discord 設為你想要的確切等級——100% 以獲得清晰的語音聊天、40% 作為細微的背景聲、或完全靜音——而不觸碰你的遊戲、音樂或其他任何東西。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上獨立於遊戲和音樂控制 Discord 音量" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>常見設定</h3>

<p><strong>玩遊戲同時使用 Discord：</strong></p>
<ul>
  <li>Discord：100%（始終清晰聽到隊友）</li>
  <li>遊戲：40%（沉浸但不壓迫）</li>
  <li>Spotify：15%（細微背景音樂）</li>
</ul>

<p><strong>在語音聊天中閒逛：</strong></p>
<ul>
  <li>Discord：80%</li>
  <li>瀏覽器/YouTube：60%</li>
  <li>其他所有：正常</li>
</ul>

<p><strong>專注工作（Discord 在背景）：</strong></p>
<ul>
  <li>Discord：靜音或 10%</li>
  <li>Spotify：50%</li>
  <li>Slack：15%</li>
</ul>

<p>在 SoundDial 中將每個設定儲存為<strong>音量配置</strong>，一鍵切換。每次你改變活動時不需要重新調整六個滑桿。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 上取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "switch-audio-output-quickly-mac": {
    slug: "switch-audio-output-quickly-mac",
    title: "如何在 Mac 上快速切換音訊輸出（不用挖進設定）",
    description:
      "在 Mac 上切換喇叭、耳機和螢幕需要太多次點擊。以下是立即更改音訊輸出裝置的更快方法。",
    date: "2026-05-19",
    readTime: "5 min read",
    content: `
<p>你拔掉耳機，想讓音訊切換到喇叭。或者你連接 AirPods，macOS 選擇了錯誤的裝置。或者你走進會議室，需要切換到會議喇叭。每次都是：系統設定 → 聲音 → 輸出 → 捲動 → 點擊。對於應該只需一步的操作來說太多點擊了。</p>

<h2>方法 1：Option 點擊音量圖示</h2>

<p>這是最快的內建方法，大多數人不知道。</p>

<p>按住 <strong>Option（⌥）</strong>並點擊選單列中的音量/聲音圖示。你不會得到正常的音量滑桿，而是看到所有可用輸出裝置的列表。點擊你想要的那個。完成。</p>

<p>如果你在選單列中看不到聲音圖示，啟用它：系統設定 → 控制中心 → 聲音 → 選擇「一直顯示在選單列中」。</p>

<h2>方法 2：控制中心</h2>

<p>點擊選單列中的控制中心圖示 → 點擊聲音部分 → 點擊當前裝置名稱查看所有可用輸出。</p>

<p><strong>限制：</strong>這需要三次點擊而不是一次。比 Option 點擊音量圖示略慢。</p>

<h2>方法 3：SoundDial 的內建裝置切換器</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 在其選單列彈出視窗中——與逐應用程式音量滑桿並排——包含一個輸出裝置選擇器。一鍵開啟 SoundDial，一鍵切換裝置。無需挖進系統設定。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在一個選單列面板中提供音訊輸出裝置切換和逐應用程式音量控制" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>在 SoundDial 內切換裝置的優點：你可以在同一個面板中切換輸出<em>並且</em>調整逐應用程式音量。切換到 AirPods 並立即調低 Spotify 同時提升通話音量——全部無需離開彈出視窗。</p>

<p>結合 SoundDial 的<strong>音量記憶</strong>功能，每個輸出裝置可以記住自己的逐應用程式音量等級。切換到喇叭，你的「喇叭」音量平衡就套用了。切換到耳機，你的「耳機」平衡就套用了。無需手動重新調整。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 上取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "fix-audio-crackling-popping-mac": {
    slug: "fix-audio-crackling-popping-mac",
    title: "修復 Mac 音訊雜音和噼啪聲：完整指南",
    description:
      "你的 Mac 音訊出現雜音、噼啪聲或卡頓——在音樂、通話或影片播放期間。以下是 macOS 音訊故障的所有已知原因和修復方法。",
    date: "2026-05-16",
    readTime: "8 min read",
    content: `
<p>你在聽音樂時聽到爆裂聲。然後是噼啪聲。然後是音訊短暫中斷然後恢復的卡頓聲。不是歌曲的問題——是你的 Mac。macOS 上的音訊雜音令人沮喪地常見，至少有六種不同的原因。</p>

<h2>1. 重新啟動 Core Audio（快速修復）</h2>

<p>對於突然出現的音訊雜音，最有效的單一修復方法是重新啟動 macOS 的音訊常駐程式。開啟終端機並執行：</p>
<p><code>sudo killall coreaudiod</code></p>

<p>音訊會中斷一秒然後重新啟動。在許多情況下，雜音立即停止。這有效是因為 coreaudiod——管理 macOS 上所有音訊的程序——在睡眠/喚醒循環、藍牙裝置連接或應用程式崩潰後可能進入損壞狀態。</p>

<h2>2. CPU 過載</h2>

<p>音訊雜音通常與高 CPU 使用率相關。當你 Mac 的 CPU 滿載時，它無法足夠快地處理音訊緩衝區，導致聽起來像噼啪聲和雜音的間隙。</p>

<p><strong>檢查：</strong>開啟活動監視器（應用程式 → 工具程式）並查看 CPU 分頁。如果你看到持續的高 CPU 使用率（80%+），這可能是原因。</p>

<h2>3. 藍牙音訊問題</h2>

<p>藍牙是無線耳機和喇叭用戶最常見的雜音來源：</p>

<ul>
  <li><strong>干擾：</strong>WiFi、USB 3.0 裝置和其他藍牙裝置可能干擾你的音訊連接。嘗試靠近你的 Mac 或移除干擾源。</li>
  <li><strong>編解碼器切換：</strong>當應用程式啟動你的麥克風時，macOS 從 AAC 切換到 SCO 編解碼器。這個切換可能導致短暫的雜音或噼啪聲。</li>
  <li><strong>藍牙擁塞：</strong>如果你同時連接了許多藍牙裝置，無線電可能難以應付。斷開你不使用的裝置。</li>
</ul>

<h2>4. 取樣率不匹配</h2>

<p>如果你的音訊輸出裝置以不同於播放音訊的取樣率運行，macOS 必須即時重新取樣。這種重新取樣可能引入偽影——尤其是在較低的緩衝區大小時。</p>

<p><strong>檢查：</strong>開啟音訊 MIDI 設定（應用程式 → 工具程式），選擇你的輸出裝置，並檢查取樣率。常見速率是 44.1 kHz（CD 品質）和 48 kHz（視訊/串流標準）。</p>

<h2>5. USB 音訊裝置緩衝區問題</h2>

<p>如果緩衝區大小對你系統的當前負載來說太小，外接 USB 音訊裝置（DAC、音訊介面、USB 耳機）可能出現雜音。</p>

<p><strong>修復方法：</strong>在音訊 MIDI 設定中，選擇你的 USB 裝置並嘗試增加緩衝區大小（如果有該選項）。在音訊應用程式如 Logic、Ableton 或 GarageBand 中，增加音訊偏好設定中的 I/O 緩衝區大小。更大的緩衝區意味著稍微更多的延遲但更少的音訊故障。</p>

<h2>6. macOS 更新回退</h2>

<p>某些 macOS 更新會引入音訊錯誤。這幾乎在每個主要 macOS 版本初始發布後都有發生——Catalina、Big Sur、Monterey、Ventura、Sonoma、Sequoia 和 Tahoe 都有更新後回報的音訊雜音。</p>

<h2>7. 核心擴充功能或音訊外掛程式</h2>

<p>第三方音訊驅動程式、虛擬音訊裝置或音訊外掛程式可能與 macOS 的原生音訊堆疊衝突。這對使用在最近 macOS 版本中已棄用的核心擴充功能（kext）的舊音訊軟體尤其常見。</p>

<h2>使用 SoundDial 管理音訊品質</h2>

<p>雖然 SoundDial 不能直接修復硬體或系統層級的雜音，但它可以幫助你以減少問題的方式管理音訊：</p>

<ul>
  <li><strong>減少競爭的音訊來源：</strong>使用 SoundDial 靜音你沒有主動使用的應用程式。同時進行的音訊串流越少，音訊處理的 CPU 壓力就越小。</li>
  <li><strong>音量提升而不是系統最大值：</strong>如果你以 100% 系統音量運行且仍然將應用程式推得更大聲，音訊路徑在其極限工作。使用 <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial 的</a>逐應用程式提升，將特定應用程式放大到 200%，同時將系統音量保持在更舒適的 70-80%。這可以減少系統輸出層級的失真。</li>
  <li><strong>快速輸出裝置切換：</strong>如果雜音與特定輸出裝置相關，SoundDial 讓你從其選單列面板切換裝置，無需挖進系統設定。</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 上取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "teams-volume-too-low-mac": {
    slug: "teams-volume-too-low-mac",
    title: "Mac 上 Microsoft Teams 音量太低？每個有效的修復方法",
    description:
      "即使在最大音量下，Teams 上幾乎聽不到人說話？以下列出每個原因——從 Teams 設定到藍牙編解碼器——以及如何將通話音訊提升超過 100%。",
    date: "2026-06-04",
    readTime: "7 min read",
    content: `
<p>你在 Teams 會議中。你的同事正在簡報，但他們的聲音聽起來像是從三個房間外透過鐵罐傳來的。你的 Mac 音量在 100%。Teams 的音量在 100%。你已經調高了所有能找到的東西。還是太安靜。</p>

<p>Microsoft Teams 上音量低是企業環境中 Mac 用戶最常見的音訊抱怨之一。原因與 Zoom 不同，部分修復方法是 Teams 特有的。讓我們逐一解決。</p>

<h2>1. 檢查 Teams 的音訊設定</h2>

<p>在 Teams 中點擊你的個人頭像 → 設定 → 裝置（或新版 Teams 中的設定 → 音訊裝置）。</p>
<ul>
  <li>確保選擇了正確的<strong>喇叭</strong>裝置——不是已斷開的螢幕或非活動的藍牙裝置</li>
  <li>使用「進行測試通話」功能驗證音訊在合理音量下工作</li>
  <li>檢查「雜訊抑制」未設為「高」——強力雜訊抑制可能降低感知的聲音音量</li>
</ul>

<h2>2. 新版 Teams 與舊版 Teams</h2>

<p>Microsoft 用「新版 Teams」（基於不同框架建立）取代了「舊版 Teams」。新版本以不同方式處理音訊。如果你最近遷移了：</p>
<ul>
  <li>音訊裝置設定可能沒有遷移——重新檢查你的喇叭選擇</li>
  <li>新版 Teams 使用 WebRTC 音訊處理，可能與舊版表現不同</li>
  <li>如果已啟用，嘗試關閉「音樂模式」（設定 → 音訊裝置）——它改變了 Teams 處理傳入音訊的方式</li>
</ul>

<h2>3. 藍牙編解碼器切換</h2>

<p>如果你使用 AirPods 或藍牙耳機，加入 Teams 通話會迫使 macOS 從高品質 AAC 編解碼器切換到較低品質的 SCO 編解碼器（因為 Teams 啟動你的麥克風）。SCO 顯著降低音訊品質和音量。</p>

<p><strong>修復方法：</strong>在 Teams → 設定 → 裝置 → 麥克風中選擇「MacBook Pro 麥克風」（或你的 USB 麥克風）作為輸入裝置。這防止編解碼器切換，讓你的耳機保持在高品質 AAC 模式。</p>

<h2>4. 將 Teams 音量提升超過 100%</h2>

<p>如果每個設定都已調到最大，Teams 仍然太安靜——也許參與者的麥克風很差，或者會議音訊本質上就很低——你需要放大超過 macOS 通常允許的範圍。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 讓你將任何應用程式的音量提升到 <strong>200%</strong>，包括 Microsoft Teams。將 Teams 的滑桿拖到 150% 或 180%，音訊即時放大。只有 Teams 變大聲——你的音樂、瀏覽器和其他應用程式保持在當前等級。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上將 Microsoft Teams 通話音量提升超過 100%" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial 也有助於解決反向問題：如果 Teams 通知聲音在專注時間太大聲，將 Teams 調低到 15% 或完全靜音，同時保持音樂播放。一鍵靜音，一鍵取消靜音。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 上取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "how-to-control-per-app-volume-on-mac": {
    slug: "how-to-control-per-app-volume-on-mac",
    title: "如何在 Mac 上控制逐應用程式音量",
    description:
      "macOS 為所有東西提供一個音量滑桿。以下說明如何為每個應用程式獲得獨立的音量控制——以及為什麼它比你想象的更重要。",
    date: "2026-05-20",
    readTime: "7 min read",
    content: `
<p>你在視訊通話中。Slack 一直在叮叮響。背景在播放音樂。你按音量鍵——所有東西都變安靜了。通話、音樂、通知。macOS 只有一個音量滑桿，它同時控制所有東西。</p>

<p>Windows 自 2006 年的 Vista 起就有了逐應用程式音量混音器。二十年後，macOS 仍然沒有。如果你想在不影響 Zoom 通話的情況下調低 Spotify，Apple 沒有內建的解決方案。</p>

<h2>逐應用程式音量實際上意味著什麼</h2>

<p>逐應用程式音量意味著你 Mac 上的每個應用程式都有自己獨立的音量滑桿。你可以同時將 Spotify 設為 30%、保持 Zoom 在 100%、完全靜音 Slack、讓 Safari 在 50%。改變一個應用程式的音量對任何其他應用程式沒有任何影響。</p>

<h2>為什麼 macOS 沒有這個功能</h2>

<p>Apple 的音訊架構（Core Audio）絕對支援框架層面的逐應用程式音量控制。macOS 不在 UI 中公開它的原因是設計哲學選擇：Apple 偏好更少的控制和更簡單的介面。一個滑桿比十二個更簡單。</p>

<h2>內建的解決辦法（及其局限）</h2>

<h3>1. 應用程式內建音量控制</h3>
<p>某些應用程式有自己的音量滑桿——Spotify、VLC、QuickTime。但大多數沒有。Slack 沒有。Chrome 分頁沒有。系統聲音沒有。而且即使應用程式有滑桿，你也必須切換到那個應用程式、找到滑桿、調整它，然後切換回你正在做的事情。</p>

<h3>2. 音訊 MIDI 設定</h3>
<p>macOS 在工具程式資料夾中包含音訊 MIDI 設定。它讓你配置音訊裝置和建立聚合裝置，但它完全沒有逐應用程式音量控制。這是裝置配置工具，不是混音器。</p>

<h2>逐應用程式音量混音器的工作原理</h2>

<p>適當的逐應用程式音量混音器位於你的選單列中，顯示每個目前正在產生音訊的應用程式。每個應用程式都有自己的滑桿。你向上或向下拖動它，只有那個應用程式的音量改變。系統音量保持不變。</p>

<p>在底層，這透過使用 macOS 的 <strong>Core Audio Tap API</strong>（在 macOS 14 中引入）來工作，獨立攔截每個應用程式的音訊串流並在到達喇叭之前縮放其振幅。</p>

<h2>誰需要這個</h2>

<p>任何同時做超過一件音訊事情的人。這是大多數人，但尤其是：</p>

<ul>
  <li><strong>遠端工作者</strong>——通話 + 音樂 + 通知是最常見的衝突</li>
  <li><strong>實況主和 Podcast 製作者</strong>——對觀眾聽到的和你自己聽到的精確控制</li>
  <li><strong>音樂家和製作人</strong>——需要將 DAW 輸出與參考音軌和通訊工具隔離</li>
  <li><strong>遊戲玩家</strong>——遊戲音訊、Discord 和音樂之間是持續的平衡行為</li>
  <li><strong>任何有通知疲勞的人</strong>——靜音 Slack，保留其他所有</li>
</ul>

<h2>SoundDial</h2>

<p>我建立了 <strong>SoundDial</strong>，因為我想要的 Mac 音量混音器不存在。它位於你的選單列，顯示每個正在發出聲音的應用程式，並給每個應用程式自己的滑桿。逐應用程式靜音、音量提升、配置，以及在通話開始時降低音樂的自動閃避。一次性購買，macOS 14+，無訂閱。</p>

<p>macOS 應該內建的音量混音器。</p>
`,
  },
  "mute-slack-notifications-mac-without-muting-everything": {
    slug: "mute-slack-notifications-mac-without-muting-everything",
    title: "如何在 Mac 上靜音 Slack 而不靜音其他所有東西",
    description:
      "Slack 通知不斷打擾你的專注，但你不想讓音樂或通話靜音。以下說明如何在 macOS 上只靜音 Slack。",
    date: "2026-05-24",
    readTime: "5 min read",
    content: `
<p>你深入專注工作中。Spotify 正在播放完美的專注播放清單。然後——<em>叩叩</em>——Slack 叮了一聲。又一聲。又一聲。三十秒內三個頻道、兩個私訊和一個主題通知。你想要靜音 Slack 但保留你的音樂。macOS 說：靜音所有或靜音無。</p>

<h2>選項 1：在 Slack 本身靜音通知</h2>

<p>Slack 有一個「暫停通知」功能：</p>
<ol>
  <li>點擊 Slack 側邊欄中的你的個人頭像</li>
  <li>點擊「暫停通知」</li>
  <li>選擇持續時間（30 分鐘、1 小時、2 小時等）</li>
</ol>

<p><strong>限制：</strong>這是整個頻道的全有或全無。你無法讓 Slack <em>更安靜</em>——只能完全靜音或完全開啟。而且如果你忘記取消暫停，你的專注時段結束後就會錯過訊息。</p>

<h2>選項 2：在 macOS 通知中關閉 Slack 聲音</h2>

<p>前往系統設定 → 通知 → Slack。關閉「播放通知聲音」。</p>

<p><strong>限制：</strong>這永久移除所有 Slack 通知聲音（直到你重新開啟）。而且它只影響 macOS 層級的通知——如果 Slack 透過自己的音訊引擎播放聲音，通知設定可能無法捕捉所有聲音。</p>

<h2>選項 3：使用專注模式</h2>

<p>在系統設定 → 專注中建立「專注」或「工作」專注模式。將 Slack 加入「靜音」列表。當你啟動專注模式時，Slack 通知被抑制。</p>

<p><strong>限制：</strong>專注模式從視覺和聽覺上抑制通知，但不給你精細的音量控制。你無法說「Slack 通知在 10% 音量」——要麼完全允許，要麼完全靜音。</p>

<h2>選項 4：逐應用程式音量控制（真正的修復方法）</h2>

<p>你實際上想要的很簡單：將 Slack 的音量調低到 10-15%，同時保持其他所有東西在正常等級。Slack 叮聲可以聽見（如果你在聽的話），但不打斷你的心流。音樂保持全音量。通話保持全音量。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 為 Slack 提供自己獨立的音量滑桿。將它設為任何適合你的等級——或一鍵完全靜音它。當你準備好再次關注 Slack 時，取消靜音，音量恢復到原來的位置。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上靜音 Slack 同時 Spotify 以正常音量播放" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>理想的 Slack 工作流程</h3>
<ul>
  <li><strong>專注時間：</strong>Slack 在 10% 或靜音。Spotify 在 40%。沒有打擾。</li>
  <li><strong>可用時間：</strong>Slack 在 40%。通知明顯但不嚇人。</li>
  <li><strong>會議時間：</strong>Slack 靜音。Zoom 在 100%。自動閃避處理其餘。</li>
</ul>

<p>在 SoundDial 中將每個設定儲存為<strong>音量配置</strong>，一鍵切換。更好的是，使用自動閃避——當通話開始時，SoundDial 自動降低所有東西（包括 Slack），通話結束時恢復。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 上取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "volume-profiles-for-mac": {
    slug: "volume-profiles-for-mac",
    title: "如何在 Mac 上為不同情境設定音量配置",
    description:
      "會議、專注工作、遊戲和放鬆——不同的音量設定，一鍵切換。以下說明 macOS 上的音量配置如何運作。",
    date: "2026-06-02",
    readTime: "5 min read",
    content: `
<p>早上 9 點你在 Zoom 通話——你想要 Zoom 在 100%、Spotify 靜音、Slack 靜音。10 點通話結束——你想要 Spotify 在 40%、Slack 在 15%、Zoom 無所謂。中午你在打遊戲——遊戲在 60%、Discord 在 100%、其他所有靜音。下午 6 點你在看 YouTube——瀏覽器在 80%、其他所有安靜。</p>

<p>每種情境都有不同的理想音量配置。每次情境改變，你就必須手動調整五或六個應用程式。或者你可以將每個設定儲存為配置，一鍵切換。</p>

<h2>什麼是音量配置？</h2>

<p>音量配置是每個應用程式音量和靜音狀態的已儲存快照。你按你想要的方式配置應用程式——Spotify 在 30%、Zoom 在 100%、Slack 靜音——然後將其儲存為名為「工作」或「會議」的命名配置。之後，你套用配置，每個應用程式立即跳到其儲存的音量等級。</p>

<h2>macOS 沒有音量配置</h2>

<p>macOS 有專注模式（勿擾、工作、個人等）來控制哪些通知可以通過。但專注模式不控制音量等級。它們可以完全抑制通知聲音，但無法將 Spotify 設為 30% 或 Zoom 設為 100%。沒有內建的方法來儲存和恢復逐應用程式音量配置。</p>

<h2>使用 SoundDial 設定配置</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 包含內建的配置系統。以下是設定方法：</p>

<h3>建立配置</h3>
<ol>
  <li>從選單列開啟 SoundDial</li>
  <li>將每個應用程式的音量調整到特定情境的理想值</li>
  <li>點擊配置部分的「+」按鈕</li>
  <li>給它一個名稱（例如「會議」）並選擇一個圖示</li>
  <li>完成——你的當前音量配置已儲存</li>
</ol>

<h3>切換配置</h3>
<p>你已儲存的配置以按鈕形式出現在 SoundDial 的彈出視窗中。點擊一個，每個應用程式立即切換到該配置中儲存的音量。一次點擊取代了五或六次手動調整。</p>

<img src="/apps/sounddial.png" alt="SoundDial 音量配置——在 macOS 上一鍵切換會議、專注和休閒模式" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>範例配置</h3>

<p><strong>會議</strong></p>
<ul>
  <li>Zoom / Teams：100%</li>
  <li>Spotify：靜音</li>
  <li>Slack：靜音</li>
  <li>瀏覽器：靜音</li>
</ul>

<p><strong>專注工作</strong></p>
<ul>
  <li>Spotify：35%</li>
  <li>Slack：10%</li>
  <li>Mail：靜音</li>
  <li>瀏覽器：50%</li>
</ul>

<p><strong>遊戲</strong></p>
<ul>
  <li>遊戲：60%</li>
  <li>Discord：100%</li>
  <li>Spotify：20%</li>
  <li>其他所有：靜音</li>
</ul>

<p><strong>休閒</strong></p>
<ul>
  <li>Spotify：70%</li>
  <li>瀏覽器：60%</li>
  <li>通知：20%</li>
</ul>

<h2>配置 + 自動閃避 = 完全自動</h2>

<p>將配置與 SoundDial 的自動閃避功能結合，你幾乎不需要觸碰音量。早上套用「專注工作」配置。當通話進來時，自動閃避降低除通話應用程式外的所有東西。通話結束時，一切恢復到你的配置等級。一天結束時，一鍵切換到「休閒」。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 上取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "zoom-call-volume-too-low-mac": {
    slug: "zoom-call-volume-too-low-mac",
    title: "Mac 上 Zoom 通話音量太低？如何提升",
    description:
      "即使在最大音量下，你在 Zoom 上也幾乎聽不到人說話。以下列出每個修復方法——從 Zoom 設定到用逐應用程式音量混音器將通話音訊提升超過 100%。",
    date: "2026-05-26",
    readTime: "6 min read",
    content: `
<p>你在 Zoom 通話中。對方在說話，但他們的聲音幾乎聽不見。你的 Mac 音量在最大值。Zoom 的喇叭音量在最大值。你靠向螢幕，努力聽清楚。這不應該這麼困難。</p>

<h2>1. 檢查 Zoom 的音訊輸出設定</h2>

<p>開啟 Zoom → 設定 → 音訊。在「喇叭」下確保：</p>
<ul>
  <li>選擇了正確的輸出裝置（不是非活動的螢幕或已斷開的裝置）</li>
  <li>喇叭音量滑桿在最大值</li>
  <li>點擊「測試喇叭」確認你能清晰聽到測試音</li>
</ul>

<h2>2. 停用 Zoom 的自動音量調整</h2>

<p>Zoom 有一個「自動調整麥克風音量」設定（設定 → 音訊），在某些配置中也可能影響輸出音量。嘗試停用它並再次測試。</p>

<h2>3. 停用背景雜訊抑制（暫時）</h2>

<p>Zoom 的雜訊抑制積極過濾背景雜訊——但這樣做有時可能降低感知的對方聲音響度，尤其是在安靜的環境中。嘗試將「抑制背景雜訊」設為「低」或「自動」而不是「高」。</p>

<h2>4. 檢查藍牙編解碼器</h2>

<p>如果你使用 AirPods 或藍牙耳機，加入 Zoom 通話會迫使 macOS 從高品質 AAC 編解碼器切換到較低品質的 SCO 編解碼器（因為 Zoom 使用你的麥克風）。SCO 降低音訊品質，可能讓通話音訊聽起來更安靜且更壓縮。</p>

<p><strong>修復方法：</strong>使用獨立麥克風（內建 Mac 麥克風或 USB 麥克風），同時保持 AirPods 作為輸出裝置。這防止編解碼器切換——AirPods 保持在具有更好音訊品質和音量的 AAC 模式。</p>

<h2>5. 將 Zoom 音量提升超過 100%</h2>

<p>如果你試過以上所有方法，Zoom 仍然太安靜——問題可能是 Zoom 的音訊輸出對你的設定來說根本不夠大聲。某些參與者的麥克風很安靜，Zoom 能放大他們的訊號的空間有限。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 讓你將任何應用程式的音量提升到 <strong>200%</strong>——包括 Zoom。如果一個參與者太安靜，將 Zoom 的滑桿拖到 150% 或 180%。音訊訊號被放大超過 Zoom 的內建最大值，讓即使最安靜的聲音也變得可聽。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 Mac 上將 Zoom 通話音量提升到 180% 以獲得更清晰的視訊通話音訊" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>關鍵優點：提升 Zoom 不影響任何其他東西。你的音樂、通知和其他應用程式保持在當前等級。只有 Zoom 變大聲。</p>

<p>這也適用於 <strong>Microsoft Teams、Google Meet、FaceTime、Discord、Slack 語音、Webex</strong> 以及任何其他通話應用程式。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 上取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "lower-spotify-without-lowering-everything-mac": {
    slug: "lower-spotify-without-lowering-everything-mac",
    title: "如何在 Mac 上調低 Spotify 而不調低其他所有東西",
    description:
      "你想要 Spotify 作為背景音樂，但用音量鍵調低它同時也讓通話和其他所有東西變安靜。以下是修復方法。",
    date: "2026-05-30",
    readTime: "4 min read",
    content: `
<p>你在工作。Spotify 在播放背景音樂。它有點太大聲了——與另一個分頁的 Podcast 競爭，或讓專注變得困難。你輕點音量降低鍵。Spotify 變安靜了。但其他所有東西也是——你的 Zoom 通話、你的通知聲音、你的瀏覽器音訊。全都更安靜了。這不是你想要的。</p>

<p>這是因為 macOS 只有一個音量滑桿。按音量鍵會調整<em>系統音量</em>，它等比例縮放每個應用程式。沒有辦法用內建控制說「只調低 Spotify」。</p>

<h2>解決辦法：Spotify 的應用程式內音量</h2>

<p>Spotify 在應用程式右下角（或重新設計的播放器底部）有自己的音量滑桿。你可以獨立於系統音量調低它。如果你的系統在 80%，Spotify 的滑桿在 30%，Spotify 實際上以 24% 播放，而其他所有東西保持在 80%。</p>

<p><strong>問題：</strong>你必須切換到 Spotify 視窗、找到滑桿、調整它，然後切換回你正在做的事情。而且 Spotify 的滑桿很小、不精確，且不顯示百分比——只顯示視覺條形。如果你在會議中需要快速調低音樂，在另一個應用程式中摸索一個小滑桿並不理想。</p>

<h2>真正的修復方法：逐應用程式音量控制</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 在你的選單列中為每個應用程式放置一個音量滑桿。要在不影響任何其他東西的情況下調低 Spotify：</p>

<ol>
  <li>點擊選單列中的 SoundDial 圖示</li>
  <li>在列表中找到 Spotify</li>
  <li>向下拖動其滑桿</li>
</ol>

<p>完成。Spotify 更安靜了。Zoom 沒有改變。通知沒有改變。其他所有東西沒有改變。你沒有離開當前應用程式——選單列彈出視窗就在你的位置開啟。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上獨立調低 Spotify 音量，同時保持其他應用程式全音量" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>更好的方法：將它儲存為配置</h2>

<p>如果你定期想要 Spotify 在工作時保持較低的背景等級，將你偏好的音量設定儲存為配置。建立一個「工作」配置，Spotify 在 25%、Zoom 在 100%、Slack 在 15%。下次你坐下來工作時，一鍵套用配置，而不是手動調整每個應用程式。</p>

<h2>更更好的方法：通話期間自動閃避</h2>

<p>SoundDial 可以在你加入通話時自動調低 Spotify。在設定中啟用自動閃避，選擇降低背景音訊多少（預設 30%），SoundDial 處理其餘。通話開始時你的音樂閃避，通話結束時恢復。完全不需要手動調整。</p>

<p>一次性購買在 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> 上。無訂閱。macOS 14.2+。</p>
`,
  },
  "macos-tahoe-per-app-volume-control": {
    slug: "macos-tahoe-per-app-volume-control",
    title: "macOS Tahoe 有逐應用程式音量控制嗎？",
    description:
      "macOS Tahoe（macOS 26）帶來了重大更新，但 Apple 終於新增了音量混音器嗎？以下是答案——以及如何立即獲得逐應用程式音量控制。",
    date: "2026-06-12",
    readTime: "4 min read",
    content: `
<p>每年，Mac 使用者都希望下一個 macOS 版本終於包含音量混音器。每年，他們都失望了。macOS Tahoe（macOS 26）帶來了重新設計的介面、新的系統功能和重大的底層改進。但他們有新增逐應用程式音量控制嗎？</p>

<h2>簡短的回答：沒有</h2>

<p>macOS Tahoe 不包含內建的音量混音器。系統設定、控制中心或選單列中沒有逐應用程式音量控制。音訊體驗與之前每個 macOS 版本相同：一個系統音量滑桿同時控制所有東西。</p>

<p>Apple 的控制中心仍然顯示單一音量滑桿。系統設定中的聲音偏好設定仍然讓你選擇輸出裝置並調整一個主音量。沒有隱藏功能、沒有進階選項，也沒有新的 API 向使用者公開逐應用程式音量。</p>

<h2>macOS Tahoe 在音訊方面確實改進了什麼</h2>

<p>雖然逐應用程式音量仍然缺失，但 Tahoe 確實帶來了一些與音訊相關的改進：</p>

<ul>
  <li><strong>改進的藍牙音訊穩定性</strong>——AirPods 和第三方耳機的斷線和編解碼器切換問題更少</li>
  <li><strong>更好的空間音訊處理</strong>——支援內容的頭部追蹤增強和更精確的空間渲染</li>
  <li><strong>Core Audio 效能</strong>——專業音訊應用程式和音樂製作的更低延遲</li>
</ul>

<p>這些都沒有解決根本請求：「讓我在不影響 Zoom 的情況下調低 Spotify。」</p>

<h2>Apple 會不會在某天新增音量混音器？</h2>

<p>沒有跡象表明 Apple 計劃新增這個功能。它沒有出現在任何 macOS 測試版、WWDC 會議或已知的路線圖中。Apple 的音訊設計哲學繼續偏向簡單——一個滑桿控制所有東西。</p>

<h2>如何在 macOS Tahoe 上獲得逐應用程式音量控制</h2>

<p>由於 Apple 不會建立它，第三方應用程式填補了這個空缺。<a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 是一款原生 macOS 選單列應用程式，為你提供音量混音器——每個運行中應用程式的獨立音量滑桿。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 macOS Tahoe 上提供逐應用程式音量控制" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial 與 macOS Tahoe 完全相容，並使用 Apple 的現代 Core Audio Tap API——不需要第三方音訊驅動程式或核心擴充功能。</p>

<p>你得到的：</p>
<ul>
  <li><strong>逐應用程式音量滑桿</strong>——每個應用程式 0% 到 200%</li>
  <li><strong>逐應用程式靜音</strong>——一鍵靜音任何應用程式</li>
  <li><strong>音量配置</strong>——儲存配置並即時切換</li>
  <li><strong>自動閃避</strong>——通話期間背景音訊自動降低</li>
  <li><strong>音量提升</strong>——將安靜的應用程式放大超過 100%</li>
  <li><strong>音量記憶</strong>——在重啟之間記住每個應用程式的音量</li>
  <li><strong>鍵盤快捷鍵</strong>——從鍵盤切換混音器或靜音所有</li>
</ul>

<p>一次性購買在 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> 上。無訂閱。macOS 14.2+。</p>
`,
  },
  "play-music-speakers-calls-headphones-mac": {
    slug: "play-music-speakers-calls-headphones-mac",
    title: "如何在 Mac 上用喇叭播放音樂同時用耳機接聽電話",
    description:
      "想要同時在桌面喇叭播放 Spotify 和用 AirPods 接 Zoom 通話？macOS 讓這不容易——以下是真正有效的方法。",
    date: "2026-05-15",
    readTime: "5 min read",
    content: `
<p>以下是你可能想做的合理事情：透過桌面喇叭播放音樂，同時用 AirPods 接 Zoom 通話。音樂充滿房間，通話是私密的在你耳中。完全有道理。</p>

<p>macOS 說不。當你選擇音訊輸出裝置時，<em>每個</em>應用程式都使用它。切換到 AirPods 接 Zoom，Spotify 也切換到 AirPods。切換到喇叭播放 Spotify，Zoom 也切換到喇叭。一個輸出裝置用於所有東西。沒有例外。</p>

<h2>為什麼 macOS 原生無法做到這件事</h2>

<p>macOS 透過單一選擇的輸出裝置路由所有音訊。你在系統設定 → 聲音 → 輸出中選擇「MacBook Pro 喇叭」或「AirPods Pro」，每個應用程式都將音訊傳送到那個裝置。沒有內建的逐應用程式音訊路由。</p>

<h2>聚合裝置解決辦法</h2>

<p>macOS 的音訊 MIDI 設定（在應用程式 → 工具程式中）讓你建立將多個輸出合併為一個的「聚合裝置」。然而，聚合裝置將<em>相同的音訊</em>發送到所有合併的輸出——它不讓你選擇哪個應用程式去哪個輸出。</p>

<h2>什麼真正有效：逐應用程式音訊路由應用程式</h2>

<p>要真正將不同的應用程式路由到不同的輸出裝置，你需要第三方音訊路由應用程式，攔截每個應用程式的音訊並將其發送到你指定的輸出。來自 Rogue Amoeba 的 SoundSource 支援這個功能——讓你將特定輸出裝置分配給個別應用程式。</p>

<h2>更簡單的方法：基於音量的分離</h2>

<p>如果你的主要目標是在音樂上清晰聽到通話（而不是將它們路由到物理上不同的裝置），逐應用程式音量控制可以更簡單地解決問題。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 為每個應用程式提供自己的音量滑桿。在通話期間，你可以：</p>

<ul>
  <li>將 Zoom/Teams/FaceTime 設為 <strong>100%</strong></li>
  <li>將 Spotify 調低到 <strong>20%</strong></li>
  <li>靜音其他所有東西</li>
</ul>

<p>你的通話水晶般清晰。音樂是細微的背景。不需要切換裝置。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上顯示 Zoom 在全音量和 Spotify 在通話期間調低" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>更好的是：SoundDial 的<strong>自動閃避</strong>自動完成這個動作。當你加入通話時，它偵測到你的麥克風啟動並將所有背景應用程式調低到你配置的等級（預設 30%）。通話結束時，一切恢復正常。不需要手動調整滑桿。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 上取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "mac-volume-keeps-changing-by-itself": {
    slug: "mac-volume-keeps-changing-by-itself",
    title: "Mac 音量自己一直在改變：如何修復",
    description:
      "你的 Mac 音量隨機跳高、降低或重置到不同的等級。以下列出所有已知原因及如何阻止它。",
    date: "2026-05-18",
    readTime: "6 min read",
    content: `
<p>你將 Mac 音量設定到舒適的等級。你移開視線。當你回來時，它不同了。更大聲。更安靜。重置到最大值。它一直在發生，你找不出原因。</p>

<p>這是最令人沮喪的 Mac 音訊問題之一，因為它感覺是隨機的。但它幾乎從不真正是隨機的——總有一個具體的觸發因素。以下是所有已知原因及如何修復每一個。</p>

<h2>1. 藍牙裝置重新連接</h2>

<p>這是最常見的原因。當藍牙裝置（AirPods、喇叭、耳機）連接或斷開時，macOS 將音量重置為上次使用該裝置時的任何等級。所以如果你在喇叭上是 30%，你的 AirPods 自動連接，音量可能跳到 80%（上次 AirPods 的等級）。</p>

<p><strong>修復方法：</strong>macOS 會記住每個輸出裝置的音量等級。每次切換時，將它設到你想要的位置。隨著時間推移，每個裝置的正確等級將被記住。如果藍牙裝置在意外地自動連接，前往系統設定 → 藍牙並移除你不主動使用的裝置。</p>

<h2>2. HDMI/DisplayPort 輸出</h2>

<p>透過 HDMI 或 DisplayPort 連接或斷開外接顯示器可能導致音量改變。某些顯示器也是音訊輸出裝置，macOS 會自動切換到它們。當顯示器睡眠或斷開時，macOS 切換回喇叭並可能重置音量。</p>

<h2>3. 應用程式正在改變音量</h2>

<p>某些應用程式以程式方式調整系統音量。例如，Zoom 有一個「自動調整麥克風音量」設定，也可能影響輸出音量。音樂應用程式、Podcast 應用程式和某些遊戲在啟動或特定事件發生時也可能調整音量。</p>

<p><strong>修復方法：</strong>在 Zoom 中：設定 → 音訊 → 取消勾選「自動調整麥克風音量」。在 Spotify 中：檢查音量標準化是否導致感知到的音量變化（設定 → 播放 → 標準化音量）。</p>

<h2>4. 鍵盤或 Touch Bar 意外按壓</h2>

<p>如果你有帶音量鍵的鍵盤（每個 Mac 鍵盤都有），意外按壓——或卡住的按鍵——可能改變音量。舊款 MacBook Pro 機型上的 Touch Bar 特別容易因觸碰而意外改變音量。</p>

<h2>5. macOS 音訊常駐程式重置</h2>

<p>在睡眠/喚醒循環後，macOS 的音訊常駐程式（coreaudiod）有時會重新啟動並將音量重置為預設或之前快取的等級。這是各種 macOS 版本中出現的系統層級錯誤。</p>

<h2>使用 SoundDial 鎖定你的逐應用程式音量</h2>

<p>即使你無法阻止 macOS 改變系統音量，你也可以保護你的<em>逐應用程式</em>音量平衡。<a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 獨立記住每個應用程式的音量等級。當應用程式重新啟動或你的 Mac 從睡眠中喚醒時，SoundDial 將每個應用程式恢復到其儲存的音量。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 macOS 重啟之間記住逐應用程式音量等級" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>這意味著即使系統音量改變，你的應用程式等級平衡也保持一致：</p>
<ul>
  <li>Spotify 無論系統音量如何改變都保持在 40%</li>
  <li>Zoom 即使在重新連接藍牙後也保持在 100%</li>
  <li>Slack 即使在重啟後也保持靜音</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 上取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "best-volume-mixer-apps-mac-2026": {
    slug: "best-volume-mixer-apps-mac-2026",
    title: "2026 年 Mac 最佳音量混音器應用程式",
    description:
      "直接比較每個為 Mac 提供逐應用程式音量控制的應用程式。功能、定價，以及哪個真正值得使用。",
    date: "2026-06-12",
    readTime: "10 min read",
    content: `
<p>macOS 沒有內建的音量混音器。如果你想控制個別應用程式的音量——在不影響 Zoom 的情況下調低 Spotify、在不靜音所有東西的情況下靜音 Slack——你需要第三方應用程式。</p>

<p>有幾個選項。本指南根據功能、定價、相容性和實際可用性比較最值得注意的幾個。沒有聯盟連結，沒有贊助推薦。</p>

<h2>你應該尋找什麼</h2>

<ul>
  <li><strong>逐應用程式音量滑桿</strong>——對每個運行中應用程式的獨立控制</li>
  <li><strong>音量範圍</strong>——你可以低於 100% 且高於 100%（提升）嗎？</li>
  <li><strong>逐應用程式靜音</strong>——在不觸碰其音量位置的情況下靜音一個應用程式</li>
  <li><strong>配置</strong>——儲存並切換音量配置</li>
  <li><strong>自動閃避</strong>——通話期間自動降低音樂</li>
  <li><strong>選單列整合</strong>——無需切換應用程式即可快速訪問</li>
  <li><strong>macOS 相容性</strong>——在最新 macOS 版本上工作</li>
  <li><strong>定價模式</strong>——一次性購買對訂閱</li>
</ul>

<h2>各選項</h2>

<h3>SoundDial</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 是一款原生 macOS 選單列應用程式，專注於把一件事做好：逐應用程式音量控制。</p>

<ul>
  <li><strong>逐應用程式音量：</strong>是，0% 到 200%</li>
  <li><strong>逐應用程式靜音：</strong>是，一鍵</li>
  <li><strong>音量提升：</strong>是，最高 200%</li>
  <li><strong>配置：</strong>是，有自訂名稱和圖示</li>
  <li><strong>自動閃避：</strong>是，可配置的閃避等級</li>
  <li><strong>鍵盤快捷鍵：</strong>是（切換混音器、靜音所有）</li>
  <li><strong>輸出裝置切換：</strong>是，從同一個面板</li>
  <li><strong>音量記憶：</strong>是，在重啟之間記住每個應用程式的音量</li>
  <li><strong>價格：</strong>€14.99 一次性購買（無訂閱）——不到 SoundSource 價格的一半</li>
  <li><strong>需要：</strong>macOS 14.2+</li>
  <li><strong>可在：</strong>Mac App Store 上取得（Apple 審查、沙盒化、無系統驅動程式）</li>
</ul>

<img src="/apps/sounddial.png" alt="SoundDial 逐應用程式音量混音器在 macOS 上顯示個別應用程式音量滑桿" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>SoundSource（Rogue Amoeba）</h3>

<p>SoundSource 是最古老且最成熟的 Mac 音訊工具之一。功能強大且功能豐富，針對進階使用者和音訊專業人員。</p>

<ul>
  <li><strong>逐應用程式音量：</strong>是</li>
  <li><strong>逐應用程式 EQ：</strong>是（內建和 AU 外掛程式支援）</li>
  <li><strong>逐應用程式輸出路由：</strong>是</li>
  <li><strong>配置：</strong>否，沒有內建配置系統</li>
  <li><strong>自動閃避：</strong>否</li>
  <li><strong>價格：</strong>$39 美元（一次性，主要升級可能需要額外購買）</li>
  <li><strong>需要：</strong>macOS 12+（安裝系統音訊驅動程式）</li>
</ul>

<h3>Background Music（免費，開源）</h3>

<p>Background Music 是一款免費、開源的應用程式，提供基本的逐應用程式音量控制。因為免費而受歡迎。</p>

<ul>
  <li><strong>逐應用程式音量：</strong>是</li>
  <li><strong>音量提升：</strong>否（僅 0-100%）</li>
  <li><strong>自動暫停音樂：</strong>是（當另一個應用程式播放音訊時暫停音樂）</li>
  <li><strong>配置：</strong>否</li>
  <li><strong>自動閃避：</strong>否（自動暫停與自動閃避不同）</li>
  <li><strong>價格：</strong>免費</li>
  <li><strong>需要：</strong>macOS 10.13+（安裝虛擬音訊裝置）</li>
</ul>

<p>Background Music 對基本逐應用程式音量是個不錯的免費選擇。但它沒有針對較新的 macOS 版本持續更新。使用者在 macOS Sequoia 和 Tahoe 上回報問題——音訊故障、虛擬音訊裝置無法安裝，或應用程式不偵測某些應用程式。它也無法將音量提升超過 100%，沒有配置，也沒有自動閃避。</p>

<h3>eqMac</h3>

<p>eqMac 主要是一個也包含一些音量混音功能的等化器應用程式。</p>

<ul>
  <li><strong>逐應用程式音量：</strong>有限（專注於 EQ，不是混音）</li>
  <li><strong>系統範圍 EQ：</strong>是，有多個頻段選項</li>
  <li><strong>音量提升：</strong>是</li>
  <li><strong>自動閃避：</strong>否</li>
  <li><strong>價格：</strong>免費層 + Pro 訂閱</li>
</ul>

<h2>快速比較表</h2>

<table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;">
<thead>
<tr style="border-bottom:2px solid rgba(255,255,255,0.2);">
  <th style="text-align:left;padding:10px 12px;color:rgba(255,255,255,0.6);">功能</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundDial</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundSource</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">Background Music</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">逐應用程式音量</td>
  <td style="text-align:center;padding:10px 12px;">是</td>
  <td style="text-align:center;padding:10px 12px;">是</td>
  <td style="text-align:center;padding:10px 12px;">是</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">音量提升（200%）</td>
  <td style="text-align:center;padding:10px 12px;">是</td>
  <td style="text-align:center;padding:10px 12px;">是</td>
  <td style="text-align:center;padding:10px 12px;">否</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">音量配置</td>
  <td style="text-align:center;padding:10px 12px;">是</td>
  <td style="text-align:center;padding:10px 12px;">否</td>
  <td style="text-align:center;padding:10px 12px;">否</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">自動閃避</td>
  <td style="text-align:center;padding:10px 12px;">是</td>
  <td style="text-align:center;padding:10px 12px;">否</td>
  <td style="text-align:center;padding:10px 12px;">否</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">逐應用程式 EQ</td>
  <td style="text-align:center;padding:10px 12px;">否</td>
  <td style="text-align:center;padding:10px 12px;">是</td>
  <td style="text-align:center;padding:10px 12px;">否</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">需要系統驅動程式</td>
  <td style="text-align:center;padding:10px 12px;">否</td>
  <td style="text-align:center;padding:10px 12px;">是</td>
  <td style="text-align:center;padding:10px 12px;">是</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">價格</td>
  <td style="text-align:center;padding:10px 12px;">一次性</td>
  <td style="text-align:center;padding:10px 12px;">$39</td>
  <td style="text-align:center;padding:10px 12px;">免費</td>
</tr>
</tbody>
</table>

<h2>你應該選擇哪個？</h2>

<ul>
  <li><strong>如果你想要附帶配置和自動閃避的逐應用程式音量控制：</strong><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>——最具性價比的完整音量混音器，具有更昂貴替代方案所缺少的功能（配置、自動閃避）。</li>
  <li><strong>如果你需要逐應用程式 EQ 和音訊路由：</strong>SoundSource——最強大的選項，針對需要效果鏈和逐應用程式輸出路由的音訊專業人員。</li>
  <li><strong>如果你想要免費的基本功能：</strong>Background Music——基本逐應用程式音量還不錯，但在較新的 macOS 版本上可能有相容性問題，並且缺少提升/配置/閃避功能。</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 上取得 SoundDial</a>。</p>
`,
  },
  "youtube-too-quiet-safari-chrome-mac": {
    slug: "youtube-too-quiet-safari-chrome-mac",
    title: "Mac 上 Safari 或 Chrome 中 YouTube 太安靜？立即修復",
    description:
      "某些 YouTube 影片即使在最大音量下也幾乎聽不見。以下說明為何瀏覽器音訊通常比其他應用程式更安靜——以及如何在 Mac 上將其提升超過 100%。",
    date: "2026-05-22",
    readTime: "5 min read",
    content: `
<p>你點擊一個 YouTube 影片。創作者在說話，但你幾乎聽不到他們的聲音。系統音量在最大值。YouTube 播放器音量在最大值。你靠近喇叭。仍然太安靜。你打開 Spotify——音樂以全音量播放。所以不是你的喇叭問題。是 YouTube。或者更精確地說，是那個影片。</p>

<h2>為什麼某些 YouTube 影片那麼安靜</h2>

<h3>影片以低音量錄製</h3>
<p>不是每個創作者都有專業的音訊設備。用筆記型電腦麥克風從房間另一端錄製的影片會比用適當的電容麥克風錄製的影片安靜得多。YouTube 對音量進行了一定程度的標準化（他們的「響度標準化」目標是 -14 LUFS），但這無法完全補償極其安靜的源音訊。</p>

<h3>瀏覽器音訊在 macOS 上是二等公民</h3>
<p>Safari 和 Chrome 處理音訊的方式與專用媒體應用程式不同。它們透過瀏覽器的音訊引擎輸出，有自己的音量上限。沒有辦法從 macOS 內部提升瀏覽器分頁的音訊。瀏覽器是一個具有一個音量等級的應用程式——即使你有十個分頁以不同等級播放音訊。</p>

<h2>快速修復方法</h2>

<h3>檢查 YouTube 的播放器音量</h3>
<p>將滑鼠懸停在 YouTube 播放器上的喇叭圖示，確保滑桿在最大值。很容易不小心拖低它，而且它獨立於你的系統音量重置。</p>

<h3>嘗試不同的瀏覽器</h3>
<p>Safari 和 Chrome 處理音訊的方式不同。如果影片在一個瀏覽器中太安靜，試試另一個。Chrome 特別是透過單獨的程序（「渲染器」）處理音訊，有時可能導致較低的輸出。</p>

<h2>真正的修復方法：將瀏覽器音量提升超過 100%</h2>

<p>根本問題是 macOS 不讓你將特定應用程式的音量提升超過 100%。你的瀏覽器已達到最大值，但「最大值」不夠大聲。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 透過為每個應用程式——包括 Safari 和 Chrome——提供從 0% 到 <strong>200%</strong> 的獨立音量滑桿來解決這個問題。如果 YouTube 影片太安靜，將你的瀏覽器滑桿拖到 150% 或 180%。音訊即時放大，不影響任何其他應用程式。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 Mac 上將 Safari 瀏覽器音量提升到 180% 以播放安靜的 YouTube 影片" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>這特別有用，因為：</p>
<ul>
  <li><strong>它是即時的。</strong>點擊選單列圖示，拖動滑桿。不需要安裝瀏覽器擴充功能或更改任何設定。</li>
  <li><strong>它是逐應用程式的。</strong>提升 Chrome 不會讓 Spotify 更大聲。每個應用程式保持獨立。</li>
  <li><strong>它適用於任何瀏覽器。</strong>Safari、Chrome、Firefox、Arc、Brave——如果它是你 Mac 上的應用程式，SoundDial 可以控制它。</li>
  <li><strong>它可以達到 200%。</strong>正常音量上限的兩倍。即使最安靜的影片也變得可聽。</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 上取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "mac-notification-sounds-too-loud-headphones": {
    slug: "mac-notification-sounds-too-loud-headphones",
    title: "Mac 通知聲音在耳機中太大聲？以下是修復方法",
    description:
      "Slack 叮聲和 macOS 提示音在你的耳機中痛苦地大聲，而你的音樂沒問題。以下說明為什麼通知音量不同——以及如何控制它。",
    date: "2026-05-25",
    readTime: "5 min read",
    content: `
<p>你戴著耳機，以舒適的 40% 音量聽音樂。Slack 通知響了。<em>叮！</em>與你的音樂相比震耳欲聾。你的耳朵嗡嗡作響。你扯掉耳機。</p>

<p>這是因為 macOS 不讓你分開控制通知音量和媒體音量。你的音樂可能在舒適的等級，但提示音——Slack 叮聲、Mail 通知、Calendar 提醒、macOS 系統聲音——以相對於系統音量的全強度爆出。</p>

<h2>為什麼通知聽起來比音樂更大聲</h2>

<p>通知聲音是設計為引起你注意的短暫、尖銳的音訊爆發。它們在設計上有很高的峰值音量。相比之下，音樂有寬廣的動態範圍——更安靜的段落、更大聲的段落，以及整體母帶等級，用於持續收聽。</p>

<p>當你的系統音量在 40% 時，你的音樂在其母帶等級的 40%——在你的耳機中可能是舒適的 60-70 dB。但在 40% 系統音量下的通知叮聲可能仍然達到 80+ dB，因為通知聲音檔案本身以更高的峰值等級母帶製作。系統音量按百分比等比例縮放兩者，但它們的起始等級非常不同。</p>

<h2>內建的降低通知音量方法</h2>

<h3>降低提示音量</h3>
<p>前往<strong>系統設定 → 聲音</strong>，尋找<strong>提示音量</strong>滑桿。這獨立於主音量控制系統聲音和提示的音量。</p>
<p><strong>限制：</strong>這只影響 macOS 系統提示（如錯誤提示音和垃圾桶聲音）。它不影響來自 Slack、Discord 或 Teams 等應用程式的通知聲音，這些應用程式透過自己的音訊引擎播放聲音。</p>

<h3>逐應用程式停用通知聲音</h3>
<p>前往<strong>系統設定 → 通知</strong>，選擇太大聲的應用程式，關閉「播放通知聲音」。這完全靜音該應用程式的通知聲音。</p>
<p><strong>限制：</strong>這是全有或全無的。你無法讓 Slack 通知<em>更安靜</em>——只能完全開啟或完全關閉。</p>

<h2>真正的修復方法：獨立控制通知應用程式音量</h2>

<p>你實際上想要的很簡單：讓 Slack 更安靜而不讓你的音樂更安靜。將通知應用程式音量調低到 15%，同時將 Spotify 保持在 50%。macOS 不讓你這樣做。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 可以。它為每個應用程式提供自己的音量滑桿，所以你可以將通知頻繁的應用程式如 Slack、Mail 和 Calendar 設為低得多的音量，同時將媒體應用程式保持在舒適的等級。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上顯示 Slack 低音量和 Spotify 正常音量——獨立的通知控制" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>典型的耳機友好設定</h3>
<ul>
  <li><strong>Spotify / Music</strong>——50%（舒適的收聽等級）</li>
  <li><strong>Slack</strong>——15%（明顯但不嚇人）</li>
  <li><strong>Mail</strong>——10%（細微叮聲，不會嚇到你）</li>
  <li><strong>Calendar</strong>——20%（足以注意，不痛苦）</li>
  <li><strong>Zoom / FaceTime</strong>——90%（清晰的通話音訊）</li>
  <li><strong>瀏覽器</strong>——40%（與音樂等級匹配以播放影片）</li>
</ul>

<p>在 SoundDial 中將此儲存為「耳機」配置，每次戴上耳機時一鍵套用。為你在桌子工作時建立一個單獨的「喇叭」配置。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 上取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "stop-zoom-lowering-music-mac": {
    slug: "stop-zoom-lowering-music-mac",
    title: "如何阻止 Zoom 在 Mac 上降低你的音樂音量",
    description:
      "每次你加入 Zoom 通話，你的音樂就會降低或消失。以下說明為什麼會發生這種情況，以及如何按你的意願控制通話期間的音量降低。",
    date: "2026-05-28",
    readTime: "6 min read",
    content: `
<p>你加入了 Zoom 通話。Spotify 在舒適的音量播放。通話連接，你的音樂消失了或幾乎降到零。你什麼都沒碰。Zoom（或 macOS）決定為你降低你的音樂，沒有詢問。</p>

<h2>為什麼你的音樂在 Zoom 通話期間變安靜</h2>

<h3>1. Zoom 的內建音訊閃避</h3>
<p>Zoom 有自己的音訊處理，可能影響系統上的其他音訊。在某些配置中，Zoom 在啟動麥克風時降低系統音訊，讓通話音訊更清晰。</p>

<p>在 Zoom → 設定 → 音訊中檢查：</p>
<ul>
  <li>尋找任何「自動調整麥克風音量」設定並嘗試停用它</li>
  <li>檢查「抑制背景雜訊」——這處理音訊可能影響感知音量</li>
</ul>

<h3>2. macOS 編解碼器切換</h3>
<p>當 Zoom 啟動你的麥克風（特別是使用藍牙耳機如 AirPods 時），macOS 從高品質 AAC 音訊編解碼器切換到較低品質的 SCO 編解碼器。這個編解碼器切換通常降低整體音訊音量和品質。</p>

<h2>真正的修復方法：按你的條件自動閃避</h2>

<p>根本問題是你對<em>你的音樂降低多少</em>沒有控制。系統為你做這個決定，通常太過激進——音樂降到幾乎零，而不是舒適的背景等級。</p>

<p>你實際上想要的是可配置的自動閃避：「當我在通話時，將我的音樂調低到 25%——不是零，不是 50%，恰好 25%。」</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 給你完全這個功能。它的自動閃避功能監控你的麥克風並在通話開始時自動調整背景音訊——但<strong>你控制閃避等級</strong>。</p>

<img src="/apps/sounddial.png" alt="SoundDial 自動閃避設定——Mac 上 Zoom 通話期間可配置的音量降低" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>它如何工作</h3>
<ol>
  <li>你設定你偏好的閃避等級（10% 到 80%）</li>
  <li>你加入 Zoom 通話——你的麥克風啟動</li>
  <li>SoundDial 偵測到通話並將背景應用程式降低到你配置的等級</li>
  <li>你的通話音訊保持全音量</li>
  <li>你掛斷——所有應用程式恢復到它們之前的音量</li>
</ol>

<p>與 Zoom/macOS 方法的區別：</p>
<ul>
  <li><strong>你選擇等級。</strong>30% 是個好的預設——音樂可以聽見但不干擾。你可以在任何地方從 10%（幾乎無聲）到 80%（幾乎未降低）調整。</li>
  <li><strong>它完美恢復。</strong>通話結束時，每個應用程式恢復到它在通話開始之前的確切位置。</li>
  <li><strong>它適用於所有通訊應用程式。</strong>Zoom、Teams、FaceTime、Discord、Slack、Google Meet、Webex、Skype。</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 上取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "airpods-volume-too-low-mac": {
    slug: "airpods-volume-too-low-mac",
    title: "Mac 上 AirPods 音量太低？每個修復方法詳解",
    description:
      "AirPods 在你的 Mac 上即使在最大音量下也聽起來安靜？以下列出所有原因——從耳機安全限制到藍牙特性——以及如何修復它們。",
    date: "2026-06-08",
    readTime: "7 min read",
    content: `
<p>你的 AirPods 在 iPhone 上工作得很好。足夠大聲。但無線連接到你的 Mac——突然一切都太安靜了。系統音量在最大值。Spotify 在最大值。AirPods 就是……不夠大聲。</p>

<h2>1. 耳機安全設定正在限制你的音量</h2>

<p>這是最常見的原因。macOS 有一個內建功能，限制耳機音量以保護你的聽力。</p>

<p>前往<strong>系統設定 → 聲音 → 耳機安全</strong>。</p>

<p>如果「降低大聲音訊」已啟用，macOS 正在積極限制你的 AirPods 可以達到的大小聲。它隨時間測量聲音曝露量，如果認為你收聽太大聲太長時間，就會降低音量。</p>

<p><strong>修復方法：</strong>完全停用「降低大聲音訊」，或將分貝閾值提高到更高的等級。你會立即注意到更多的音量空間。</p>

<h2>2. 藍牙音量不同步</h2>

<p>藍牙音訊有兩個單獨的音量控制：一個在 Mac 端，一個在 AirPods 端。這些本應同步，但有時會不同步——Mac 顯示 100%，但 AirPods 實際上接收到較低的音量訊號。</p>

<p><strong>修復方法：</strong>斷開你的 AirPods（系統設定 → 藍牙 → 點擊 AirPods 旁邊的「i」→ 斷開），等待五秒，然後重新連接。這重置音量同步。</p>

<h2>3. 音訊編解碼器切換到較低品質</h2>

<p>當你使用 AirPods 的麥克風（通話、Siri 或聽寫）時，macOS 從高品質 AAC 編解碼器切換到較低品質的 SCO 編解碼器。SCO 的設計用於電話通話——它降低音訊品質，也可能影響感知音量。</p>

<p><strong>修復方法：</strong>如果你不在通話中但音訊聽起來既安靜又低品質，斷開並重新連接你的 AirPods。macOS 應該切換回 AAC 編解碼器用於音樂播放。</p>

<h2>4. 一個 AirPod 比另一個更安靜</h2>

<p>如果音量感覺低是因為一個 AirPod 明顯更安靜，問題可能是物理性的——堵塞喇叭網格的耳垢或碎屑。</p>

<p><strong>修復方法：</strong>用乾燥的無棉絮布料輕輕清潔你的 AirPods。對於喇叭網格，使用乾燥的軟毛刷。不要使用液體、壓縮空氣或尖銳物體。也請檢查<strong>系統設定 → 輔助使用 → 音訊</strong>——確保左/右音訊平衡滑桿居中。</p>

<h2>5. 應用程式本身輸出低音量</h2>

<p>某些應用程式有自己的內部音量控制，與系統音量分開。Spotify、VLC、YouTube 和 Zoom 都有獨立的音量滑桿。如果應用程式的內部音量在 50%，你只得到一半的音量——即使 macOS 和你的 AirPods 都在 100%。</p>

<h2>6. Core Audio 處於異常狀態</h2>

<p>macOS 的音訊常駐程式（coreaudiod）有時可能卡在藍牙音訊路由不正確或音量降低的狀態，尤其是在睡眠/喚醒或多個音訊裝置之間切換後。</p>

<p><strong>修復方法：</strong>開啟終端機並執行：</p>
<p><code>sudo killall coreaudiod</code></p>
<p>音訊會中斷一秒並重新啟動。你的 AirPods 可能以更正常的音量重新連接。</p>

<h2>還是太安靜？將 AirPods 音量提升超過 100%</h2>

<p>如果你已經檢查了以上所有六個原因，你的 AirPods 仍然不夠大聲，你可能需要音量放大——將音訊訊號推超過 macOS 通常允許的範圍。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 讓你將任何應用程式的音量提升到 <strong>200%</strong>。如果 Spotify 透過你的 AirPods 太安靜，在 SoundDial 中將 Spotify 的滑桿拖到 150% 或 180%。音訊訊號在發送到你的 AirPods 之前被放大，有效地讓它們比 Apple 預期的更大聲。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 Mac 上用最高 200% 的逐應用程式音量滑桿提升 AirPods 的應用程式音量" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 上取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "spotify-volume-too-low-mac": {
    slug: "spotify-volume-too-low-mac",
    title: "Mac 上 Spotify 音量太低？以下是每個修復方法",
    description:
      "Spotify 在最大音量下在你的 Mac 上仍然太安靜？本指南涵蓋每個原因——從 Spotify 的內建限制器到 macOS 設定——以及如何將其提升超過 100%。",
    date: "2026-06-11",
    readTime: "7 min read",
    content: `
<p>Spotify 在全音量。你的 Mac 在全音量。仍然不夠大聲。這是 Mac 上最常見的 Spotify 抱怨之一，有多種原因——大多數不明顯。</p>

<h2>首先檢查 Spotify 自己的音量滑桿</h2>

<p>Spotify 在應用程式右下角（或重新設計的播放器底部）有一個獨立的音量控制。這個滑桿與你 Mac 的系統音量分開。如果它在 50%，Spotify 只輸出其潛在音量的一半——即使系統音量在 100%。</p>

<p><strong>修復方法：</strong>確保 Spotify 的應用程式內音量滑桿一路到右邊（100%）。</p>

<h2>檢查 Spotify 的音量標準化</h2>

<p>Spotify 有一個叫做<strong>音量標準化</strong>的功能，自動調整播放音量，讓所有音軌以大致相同的等級播放。雖然這旨在防止歌曲之間令人不舒服的音量跳動，但它也可能降低較大聲音軌的整體音量。</p>

<p>前往 Spotify → 設定 → 播放 → <strong>標準化音量</strong>。</p>

<p>你有三個選項：</p>
<ul>
  <li><strong>大聲</strong>——最少的標準化，最接近原始母帶等級</li>
  <li><strong>正常</strong>——適中的標準化（預設）</li>
  <li><strong>安靜</strong>——最多的標準化，進一步降低音量</li>
</ul>

<p><strong>修復方法：</strong>如果 Spotify 聽起來太安靜，要麼完全停用標準化，要麼設為「大聲」。這是 Spotify 意外安靜的最常見原因。</p>

<h2>將 Spotify 提升超過 100%（使用 SoundDial）</h2>

<p>如果你已試過以上所有方法，Spotify 仍然太安靜，問題可能是 Spotify 的最大輸出對你的設定來說根本不夠大聲。這在 MacBook 內建喇叭和某些藍牙裝置上很常見。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 讓你將任何應用程式的音量提升到 <strong>200%</strong>——包括 Spotify。它攔截 Spotify 的音訊串流並將其放大超過應用程式的內建最大值，不影響任何其他應用程式的音量。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上將 Spotify 音量提升到 200%，同時保持其他應用程式在正常音量" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>關鍵區別：系統範圍的音量提升會讓<em>所有東西</em>更大聲——通知、通話、系統聲音——不只是 Spotify。SoundDial<em>獨立地</em>提升 Spotify。將 Spotify 設為 160%，同時你的瀏覽器保持在 80%，Zoom 保持在 100%。</p>

<h2>附加功能：通話期間音樂自動閃避</h2>

<p>如果反向問題也適用——Spotify 在視訊通話期間太大聲——SoundDial 的自動閃避功能在你加入 Zoom、Teams 或 FaceTime 通話時自動降低 Spotify。通話結束時，Spotify 恢復到其之前的音量。不需要手動調整。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 上取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "separate-game-audio-from-discord-mac": {
    slug: "separate-game-audio-from-discord-mac",
    title: "如何在 Mac 上將遊戲音訊與 Discord 分開",
    description:
      "遊戲爆炸聲蓋過 Discord 上的隊友說話？以下說明如何在 macOS 上獨立控制遊戲音訊和語音聊天音量。",
    date: "2026-06-10",
    readTime: "6 min read",
    content: `
<p>你在 Mac 上打遊戲。遊戲中發生了爆炸。你的 Discord 隊友在說話，但你聽不到他們，因為槍聲蓋過了他們。你調低音量——現在 Discord 也更安靜了。你調高——爆炸聲又震耳欲聾了。</p>

<p>在 Windows 上，你會開啟音量混音器，將遊戲調低到 40%，讓 Discord 保持在 100%。在 Mac 上，你不能。macOS 為所有東西提供一個音量滑桿，所以遊戲音訊和語音聊天永遠綁在一起。</p>

<p>本指南說明如何在 Mac 上獲得遊戲和 Discord（或任何語音聊天）的獨立音量控制。</p>

<h2>為什麼這是 Mac 特有的問題</h2>

<p>Windows 自 2006 年起就有內建的音量混音器，讓你獨立控制每個應用程式的音量。macOS 從未新增這個功能。每個應用程式的音訊被混合成單一串流，你唯一的控制是一個等量影響所有東西的主滑桿。</p>

<h2>不真正有效的解決辦法</h2>

<h3>使用遊戲內音量設定</h3>
<p>大多數遊戲有一個音訊設定選單，你可以在那裡分別調低主音量、音樂、音效和語音聊天。但你必須暫停遊戲、導覽選單，並在條件改變時每次調整。而且如果你切換遊戲，就要重新開始。</p>

<h3>使用 Discord 的音量控制</h3>
<p>Discord 讓你在設定 → 語音和視訊中調整輸出音量，你可以透過右鍵點擊他們的名字調整個別用戶的音量。但這控制 Discord 的內部混音，不是它相對於其他應用程式的音量。</p>

<h2>真正的解決方案：逐應用程式音量控制</h2>

<p>你需要的是能夠獨立設定遊戲音量和 Discord 音量的能力。這正是逐應用程式音量混音器的功能。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 位於你的選單列，為每個應用程式提供自己的音量滑桿。你可以將遊戲設為 35%，Discord 設為 100%——或任何適合你的比例。改變一個另一個保持不動。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上顯示遊戲和 Discord 的獨立音量滑桿" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>典型的遊戲設定</h3>
<ul>
  <li><strong>遊戲</strong>——30-50%（足夠沉浸但不壓迫）</li>
  <li><strong>Discord / 語音聊天</strong>——90-100%（在遊戲音訊上始終清晰可聽）</li>
  <li><strong>Spotify / 音樂</strong>——15-25%（細微背景，不干擾）</li>
  <li><strong>瀏覽器</strong>——靜音（沒有意外的自動播放影片）</li>
  <li><strong>Slack / 通知</strong>——靜音（專注時間）</li>
</ul>

<h3>將其儲存為配置</h3>
<p>SoundDial 的<strong>音量配置</strong>讓你儲存這個配置，一鍵套用。建立一個帶有你偏好的遊戲/Discord 平衡的「遊戲」配置，一個用於音樂和通話的「工作」配置，並即時切換。每次坐下來玩遊戲時不需要重新調整滑桿。</p>

<h3>安靜語音聊天的音量提升</h3>
<p>有時問題不是遊戲太大聲——而是 Discord 太安靜。某些隊友的麥克風很差，或 Discord 的輸出比其他應用程式低。SoundDial 讓你將任何應用程式的音量提升到 <strong>200%</strong>，所以你可以在不觸碰遊戲音量的情況下放大 Discord 超過其正常最大值。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 上取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "why-doesnt-mac-have-volume-mixer": {
    slug: "why-doesnt-mac-have-volume-mixer",
    title: "為什麼 Mac 沒有像 Windows 那樣的音量混音器？",
    description:
      "Windows 自 2006 年起就有逐應用程式音量控制。2026 年了，macOS 仍然沒有。以下是真正的原因——以及如何無論如何獲得一個。",
    date: "2026-06-09",
    readTime: "6 min read",
    content: `
<p>Vista（2006 年）以後的每個 Windows 版本都包含音量混音器。右鍵點擊喇叭圖示，點擊「音量混音器」，你就會看到每個應用程式及其自己的獨立音量滑桿。你可以在不影響 Spotify 的情況下靜音 Chrome。你可以在不觸碰遊戲的情況下調低 Discord。</p>

<p>在 macOS 上？一個滑桿。這就是你得到的全部。一個同時控制所有東西的滑桿。每個應用程式、每個通知、每個系統聲音——全部鎖定在一起。</p>

<p>人們不斷問這個問題：<em>為什麼 Mac 沒有音量混音器？</em></p>

<h2>這不是技術限制</h2>

<p>先把這個說清楚：macOS 絕對可以做逐應用程式音量控制。底層音訊框架——<strong>Core Audio</strong>——在 API 層面支援逐程序音訊攔截、路由和增益調整。Apple 在 macOS 14（Sonoma）中引入了 <strong>Audio Tap API</strong>，讓開發者更容易攔截和修改個別應用程式的音訊串流。</p>

<p>第三方開發者多年來一直使用這些 API 建立逐應用程式音量混音器。技術存在。Apple 只是沒有建立其使用者介面版本。</p>

<h2>那麼 Apple 為什麼沒有建立它？</h2>

<p>Apple 從未公開解釋過。但看看他們的設計模式，答案相當清楚：<strong>Apple 優先考慮簡單性而非進階使用者功能。</strong></p>

<p>一個音量滑桿比十二個更簡單。更容易解釋、更容易學習、不需要任何配置。對於一次只做一件事的使用者——聽音樂或接通話或看影片——一個滑桿就夠了。Apple 首先為這個使用者設計。</p>

<p>問題是在 2026 年，每個人都同時使用音訊：</p>

<ul>
  <li>工作時播放音樂</li>
  <li>帶著通知叮聲的視訊通話</li>
  <li>瀏覽器分頁自動播放廣告</li>
  <li>在 Discord 上打遊戲</li>
  <li>一耳聽 Podcast，一耳聽 Slack</li>
</ul>

<p>「在每個應用程式中調整」意味著切換六個應用程式，找到六個不同的音量控制（其中一些根本不存在），並且每天做這個多次。這與簡單完全相反。</p>

<h2>Apple 會不會在某天新增它？</h2>

<p>沒有跡象表明 Apple 計劃在任何即將到來的 macOS 版本中新增音量混音器。這個功能沒有出現在任何 macOS 測試版、專利申請或 WWDC 路線圖中。選單列中的 Apple 控制中心仍然只顯示單一系統音量滑桿。</p>

<h2>如何立即在 Mac 上獲得音量混音器</h2>

<p>答案是第三方選單列應用程式。<a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 是一款原生 macOS 音量混音器，完全做到 Windows 音量混音器所做的事——加上更多。</p>

<img src="/apps/sounddial.png" alt="SoundDial——macOS 的音量混音器，在選單列中顯示逐應用程式音量滑桿" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>你得到的：</p>

<ul>
  <li><strong>逐應用程式音量滑桿</strong>——每個運行中應用程式 0% 到 200%</li>
  <li><strong>逐應用程式靜音</strong>——一鍵靜音任何應用程式，再次點擊取消靜音</li>
  <li><strong>音量配置</strong>——為不同情境儲存配置（工作、專注、遊戲）並一鍵切換</li>
  <li><strong>自動閃避</strong>——背景音訊在你加入通話時自動降低，掛斷時恢復</li>
  <li><strong>音量提升到 200%</strong>——將安靜的應用程式放大超過其正常最大值</li>
  <li><strong>鍵盤快捷鍵</strong>——用熱鍵切換混音器或靜音所有應用程式</li>
  <li><strong>輸出裝置切換</strong>——從同一個面板切換喇叭/耳機和外接裝置</li>
  <li><strong>音量記憶</strong>——在重啟之間記住每個應用程式的音量</li>
</ul>

<p>這是 Apple 二十年前應該建立的功能。在 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> 上一次性購買。無訂閱。macOS 14.2+。</p>

<p>macOS 應該內建的音量混音器。</p>
`,
  },
  "boost-mac-volume-beyond-100-percent": {
    slug: "boost-mac-volume-beyond-100-percent",
    title: "Mac 音量太低？如何將聲音提升超過 100%",
    description:
      "你的 Mac 在全音量，但仍然太安靜。以下說明為什麼會發生這種情況，以及如何在不使用外接喇叭的情況下將音訊放大到 200%。",
    date: "2026-06-07",
    readTime: "8 min read",
    content: `
<p>你的 Mac 音量在 100%。滑桿完全向右。仍然不夠大聲。Podcast 太安靜。視訊通話參與者聽起來像在小聲說話。YouTube 影片錄製音量太低。你已達到最大值——還是不夠。</p>

<p>這是 Mac 上最常見的音訊抱怨之一，尤其是 MacBook Air 和舊款 MacBook Pro 機型的內建喇叭。喇叭在物理上很小，某些內容的錄製音量就是比其他內容低。</p>

<h2>為什麼你的 Mac 在全音量下聽起來仍然太安靜</h2>

<h3>1. 內容本身很安靜</h3>
<p>並非所有音訊都以相同等級母帶製作。專業製作的 Podcast 可能峰值在 -3 dB，而隨意的 YouTube 影片或錄製的 Zoom 通話可能峰值在 -20 dB。差異是巨大的。當系統音量在 100% 時，安靜的內容仍然安靜——macOS 只能放大到原始訊號等級。</p>

<h3>2. MacBook 喇叭有物理限制</h3>
<p>MacBook Air 或 13" MacBook Pro 中的內建喇叭很小。它們的設計是為了攜帶性，不是為了音量。Apple 的較大 MacBook Pro 機型（14" 和 16"）有顯著更好的喇叭，但即使它們也有上限。</p>

<h3>3. 個別應用程式音量很低</h3>
<p>某些應用程式有自己的內部音量控制，與系統音量分開。如果 Spotify 的應用程式內音量在 50%，系統音量在 100%，你實際上在 50% 收聽。Zoom 通常預設為保守的通話音量等級。</p>

<h2>首先嘗試的內建修復方法</h2>

<h3>檢查耳機安全限制</h3>
<p>前往<strong>系統設定 → 聲音 → 耳機安全</strong>。如果「降低大聲音訊」已啟用，macOS 正在積極限制你的音量以保護你的聽力。你可以停用它或提高閾值。這只影響耳機——不觸碰喇叭輸出。</p>

<h3>重置 Core Audio</h3>
<p>有時 macOS 音訊系統在睡眠/喚醒循環或裝置更改後進入異常狀態。開啟終端機並執行：</p>
<p><code>sudo killall coreaudiod</code></p>
<p>這重新啟動音訊常駐程式。你的音訊會中斷一秒並恢復，有時以更正常的等級。</p>

<h2>如何將音量提升超過 100%</h2>

<p>如果你已檢查以上所有內容，你的 Mac 仍然太安靜，你需要音量放大——將音訊推<em>超過</em>macOS 強加的 100% 上限的能力。</p>

<h3>SoundDial：逐應用程式音量提升到 200%</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 為你 Mac 上的每個應用程式提供一個從 0% 到 <strong>200%</strong> 的獨立音量滑桿。如果特定應用程式太安靜——Podcast 播放器、瀏覽器分頁、視訊通話——你可以將僅那個應用程式提升超過 100%，而不觸碰任何其他東西。</p>

<img src="/apps/sounddial.png" alt="SoundDial 音量提升——macOS 上具有 200% 放大的逐應用程式音量控制" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>這特別適用於：</p>
<ul>
  <li><strong>安靜的 Podcast 應用程式</strong>——某些播放器達到的最大值太低，尤其是在次優條件下錄製的 Podcast</li>
  <li><strong>有安靜參與者的視訊通話</strong>——當某人的麥克風很低時提升 Zoom 或 Teams，而不讓你的音樂更大聲</li>
  <li><strong>瀏覽器分頁</strong>——YouTube 影片、網頁應用程式和內嵌媒體通常比專用媒體應用程式以更低的音量播放</li>
  <li><strong>舊錄音</strong>——檔案館音訊、老式音樂和舊影片內容通常以更低的等級母帶製作</li>
</ul>

<p>相較於系統範圍音量提升器的關鍵優點是 SoundDial<em>逐應用程式</em>提升。你可以將安靜的應用程式提升到 180%，同時保持其他所有東西在正常等級。系統範圍的提升器會等量放大所有東西，讓你已經大聲的應用程式痛苦地大聲，而安靜的應用程式只稍微不那麼安靜。</p>

<p>一次性購買在 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> 上。無訂閱。macOS 14.2+。</p>
`,
  },
  "auto-lower-music-during-zoom-calls-mac": {
    slug: "auto-lower-music-during-zoom-calls-mac",
    title: "如何在 Mac 上 Zoom 通話期間自動降低音樂音量",
    description:
      "每次 Zoom 通話開始時，你都要慌忙暫停 Spotify。有更好的方法——自動閃避在你的麥克風啟動時自動降低你的音樂。",
    date: "2026-06-05",
    readTime: "7 min read",
    content: `
<p>通話開始了。你正在分享螢幕。你的音樂還在大聲播放。你慌忙切換到 Spotify，點擊暫停，切換回 Zoom——但所有人已經聽到了你的播放清單十秒。這對每個人都發生過，因為 macOS 在「通話剛開始」和「也許降低音樂」之間沒有連接。</p>

<h2>什麼是音訊閃避？</h2>

<p><strong>音訊閃避</strong>意味著在發生更重要的事情時——比如語音通話——自動降低背景音訊的音量。這個術語來自廣播工程，背景音樂「閃避到」播音員的聲音之下。</p>

<p>在實踐中，它這樣工作：</p>
<ol>
  <li>你在 50% 音量收聽音樂</li>
  <li>你加入 Zoom 通話</li>
  <li>你的音樂自動降到 15%</li>
  <li>你可以清楚聽到通話，不需要手動調整任何東西</li>
  <li>通話結束</li>
  <li>你的音樂自動恢復到 50%</li>
</ol>

<p>不需要切換應用程式。不需要暫停。不需要通話後忘記取消靜音你的音樂。完全自動。</p>

<h2>macOS 有內建的音訊閃避嗎？</h2>

<p>沒有。macOS 沒有自動音訊閃避功能。系統設定、輔助使用或專注模式中沒有任何東西將「麥克風正在使用」與「降低背景音訊」連接起來。Apple 根本沒有建立這個功能。</p>

<h2>使用 SoundDial 自動閃避</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 有一個內建的自動閃避功能，完全做到 macOS 應該原生做的事情。以下是它的工作原理：</p>

<h3>它如何偵測通話</h3>
<p>SoundDial 監控你 Mac 的麥克風狀態——與在通訊應用程式使用你的麥克風時在選單列顯示橙色點相同的指示器。當它偵測到通訊應用程式啟動了你的麥克風，它就知道通話已開始。</p>

<p>它適用於所有主要通訊應用程式：</p>
<ul>
  <li><strong>Zoom</strong></li>
  <li><strong>Microsoft Teams</strong></li>
  <li><strong>FaceTime</strong></li>
  <li><strong>Discord</strong></li>
  <li><strong>Slack</strong>（語音和通話）</li>
  <li><strong>Google Meet</strong>（透過 Chrome）</li>
  <li><strong>Cisco Webex</strong></li>
  <li><strong>Skype</strong></li>
</ul>

<h3>通話開始時發生什麼</h3>
<p>你的麥克風一啟動通話，SoundDial 就自動將所有非通訊應用程式的音量降低到你配置的等級——預設是 30%。你的通話音訊保持全音量。背景音樂降到細微的等級。通知聲音變安靜。</p>

<h3>通話結束時發生什麼</h3>
<p>當你掛斷電話，麥克風停用時，SoundDial 將所有應用程式音量恢復到通話開始之前的確切位置。你的音樂恢復到 50%（或你之前的設定）。不需要手動調整。</p>

<h3>配置閃避等級</h3>
<p>在 SoundDial 的設定中，你可以調整<strong>閃避等級</strong>——通話期間背景音訊降低多少。滑桿範圍從 10%（幾乎聽不見）到 80%（仍然相當存在）。30% 的預設對大多數人都很有效：音樂明顯但不干擾對話。</p>

<img src="/apps/sounddial.png" alt="SoundDial 自動閃避功能在 Mac 上的 Zoom 通話期間自動降低音樂音量" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>設定在一分鐘內完成</h2>

<ol>
  <li>從 <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store 安裝 SoundDial</a></li>
  <li>開啟設定 → 自動閃避分頁</li>
  <li>啟用自動閃避</li>
  <li>將閃避等級滑桿調整到你的偏好</li>
  <li>就這樣——自動閃避已啟用</li>
</ol>

<p>下次你加入 Zoom、Teams 或 FaceTime 通話時，你的背景音訊會自動降低。當你掛斷時，它會恢復。一次性購買，無訂閱。</p>
`,
  },
  "how-to-mute-one-app-on-mac": {
    slug: "how-to-mute-one-app-on-mac",
    title: "如何在 Mac 上靜音一個應用程式而不靜音所有東西",
    description:
      "Slack 一直在叮響。你在通話中。你想要靜音 Slack 但繼續聽通話。macOS 不讓你這樣做——以下說明如何無論如何做到。",
    date: "2026-06-03",
    readTime: "6 min read",
    content: `
<p>你在 Zoom 通話中。Slack 一直發出通知聲音。你忘記的一個 YouTube 分頁開始自動播放。你按靜音鍵——現在你也聽不到通話了。macOS 靜音<em>所有東西</em>。沒有內建的方法只靜音一個應用程式。</p>

<p>在 Windows 上，你會右鍵點擊喇叭圖示，開啟音量混音器，點擊 Slack 旁邊的靜音按鈕。完成。Slack 靜音了，其他所有東西繼續播放。macOS 沒有等效功能。</p>

<h2>為什麼 macOS 無法靜音個別應用程式</h2>

<p>macOS 將音訊視為單一串流。每個應用程式的音訊在到達你的喇叭之前被混合在一起，Apple 給你的唯一音量控制操作的是那個最終混合輸出。沒有辦法在那個混合中達到並靜音一個應用程式而不影響其餘的。</p>

<h2>內建的解決辦法（及其限制）</h2>

<h3>1. 關閉應用程式的通知</h3>
<p>前往<strong>系統設定 → 通知</strong>，找到你想靜音的應用程式。你可以停用其通知的聲音，或完全關閉通知。</p>
<p><strong>問題：</strong>這只適用於通知聲音。如果應用程式產生其他聲音——媒體播放、通話音訊、應用程式內聲音——這不會觸碰它們。而且你也失去了視覺通知，不只是聲音。</p>

<h3>2. 使用專注模式</h3>
<p>macOS 專注模式（勿擾、工作、個人等）可以抑制特定應用程式的通知聲音。</p>
<p><strong>問題：</strong>專注模式是關於通知的，不是音訊。它們不會靜音 Slack 語音、正在播放音訊的瀏覽器分頁，或任何媒體播放。它們也需要為每種模式預先配置——你不能只是「立即靜音這個應用程式」。</p>

<h3>3. 關閉應用程式</h3>
<p>核子選項。如果你完全退出 Slack，它就無法發出聲音。顯然這意味著你也看不到任何訊息，直到你重新開啟它。</p>

<h2>真正的解決方案：逐應用程式靜音按鈕</h2>

<p>你實際上想要的很簡單：每個應用程式旁邊的靜音按鈕，立即靜音它，不影響任何其他東西。點擊靜音，再次點擊取消靜音。應用程式繼續運行，你繼續看到其內容——你只是聽不到它。</p>

<p>這正是逐應用程式音量混音器所做的。<a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 位於你的選單列，顯示每個運行中應用程式及其自己的音量滑桿和靜音按鈕。</p>

<img src="/apps/sounddial.png" alt="SoundDial 在 macOS 選單列中為每個應用程式顯示逐應用程式靜音按鈕" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>要靜音一個應用程式：</p>
<ol>
  <li>點擊選單列中的 SoundDial 圖示</li>
  <li>找到你想靜音的應用程式</li>
  <li>點擊旁邊的喇叭圖示</li>
</ol>

<p>就這樣。應用程式被靜音了。其他所有東西繼續以原來的音量播放。再次點擊喇叭圖示取消靜音——音量恢復到靜音之前的確切位置。</p>

<h2>超越靜音：逐應用程式音量控制</h2>

<p>一旦你有了逐應用程式混音器，你就會意識到靜音只是你實際想要的極端端。大多數時候，你不想完全靜音應用程式——你想讓它<em>更安靜</em>。</p>

<ul>
  <li>Slack 通知在 15%——安靜到不打斷，存在到足以注意到</li>
  <li>音樂在 30%——不與對話競爭的背景等級</li>
  <li>瀏覽器在 60%——舒適的影片播放</li>
  <li>Zoom 在 100%——重要通話的全音量</li>
</ul>

<p>SoundDial 為每個應用程式提供從 0% 到 200% 的滑桿。你可以讓應用程式比其內建最小值更安靜，或比其內建最大值更大聲。透過<strong>音量配置</strong>，你可以儲存你偏好的配置，在預設之間切換——「會議」模式、「專注」模式、「音樂」模式——只需一次點擊。</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 上取得 SoundDial</a>——€14.99 一次性購買，無訂閱，macOS 14.2+。</p>
`,
  },
  "volume-mixer-for-mac": {
    slug: "volume-mixer-for-mac",
    title: "Mac 的音量混音器：macOS 仍然沒有的缺失功能",
    description:
      "Windows 自 2006 年起就有音量混音器。以下說明為什麼 macOS 仍然沒有——以及 2026 年在你的 Mac 上獲得逐應用程式音量控制的最佳方法。",
    date: "2026-06-01",
    readTime: "9 min read",
    content: `
<p>右鍵點擊任何 Windows PC 上的喇叭圖示，你會找到音量混音器——一個顯示每個目前發出聲音的應用程式的面板，每個應用程式都有自己的獨立音量滑桿。你可以將 Spotify 調低到 20%，同時將 Zoom 通話保持在 100%。你可以靜音 Chrome 而不觸碰任何其他東西。自 2006 年的 Windows Vista 起就有這個功能了。</p>

<p>現在在 Mac 上做同樣的事情。點擊選單列中的聲音圖示。你得到一個滑桿。就是這樣。一個同時控制所有東西的滑桿。每個應用程式、每個通知、每個系統聲音——全部鎖定在一起。</p>

<h2>音量混音器實際上是做什麼的</h2>

<p>音量混音器為你電腦上的<strong>每個應用程式提供獨立的音量控制</strong>。不是一個主滑桿，而是每個應用程式一個滑桿。每個滑桿只影響那個特定應用程式的音訊輸出。</p>

<p>以下是實踐中的樣子：</p>

<ul>
  <li><strong>Spotify</strong>在 25%——舒適等級的背景音樂</li>
  <li><strong>Zoom</strong>在 100%——聽清楚每個會議詞語</li>
  <li><strong>Slack</strong>靜音——專注時間沒有通知叮聲</li>
  <li><strong>Safari</strong>在 60%——適中音量的 YouTube 影片</li>
  <li><strong>系統聲音</strong>在 10%——細微的反饋而不嚇到你</li>
</ul>

<h2>為什麼 Apple 沒有建立一個</h2>

<p>這不是技術限制。macOS 的音訊框架——Core Audio——在 API 層面完全支援逐程序音訊路由和音量控制。Apple 在內部使用這些功能。他們只是沒有向使用者公開它們。</p>

<p>可能的原因是 Apple 的設計哲學：更少的選項，更簡單的介面。一個滑桿比十二個更簡潔。對於一次只做一件事的人——聽音樂或接通話或看影片——一個滑桿就夠了。</p>

<p>但這不是人們在 2026 年使用電腦的方式。遠端工作意味著你在同時有音樂播放和 Slack 叮叮響的通話中——全部同時。「一個滑桿控制所有」的模式在你有五個音訊來源爭奪你的耳朵時完全崩潰。</p>

<h2>macOS 的解決辦法（及其不足之處）</h2>

<h3>使用每個應用程式的內建音量控制</h3>
<p>Spotify 有音量滑桿。VLC 有。QuickTime 有。但這意味著分別切換到每個應用程式、找到其音量控制、調整它、然後切換回來。它分散在十幾個不同的地方，大多數應用程式——Slack、Mail、Safari、Chrome——根本沒有。</p>

<h3>使用「勿擾」靜音通知</h3>
<p>專注模式可以抑制通知聲音，但它們是二元的——全有或全無。你不能說「保留 Slack 聲音但讓它們更安靜。」而且專注模式根本不觸碰媒體或通話音量。</p>

<h3>使用音訊 MIDI 設定</h3>
<p>這個內建工具管理音訊裝置和取樣率。它與逐應用程式音量毫無關係。這是裝置配置工具，不是混音器。</p>

<h2>在 Mac 音量混音器中尋找什麼</h2>

<p>如果 Apple 不會建立它，第三方應用程式就會。但不是所有音量混音器都是相同的。以下是將好的與平庸的分開的要素：</p>

<h3>實時應用程式偵測</h3>
<p>混音器應該自動偵測每個目前正在產生音訊的應用程式。你不應該必須手動添加應用程式或配置任何東西。開啟應用程式，它出現在混音器中。關閉它，它消失。</p>

<h3>超過 100% 的音量範圍</h3>
<p>某些應用程式即使在最大音量下也太安靜——安靜的 Podcast 播放器、有輕柔音訊的瀏覽器分頁、有人麥克風低的視訊通話。好的混音器讓你<strong>將音量提升到 200%</strong>，有效地放大超過應用程式本身可以產生的音訊。</p>

<h3>每個應用程式一鍵靜音</h3>
<p>你應該能夠一鍵靜音任何應用程式——不移動滑桿。取消靜音時，它應該恢復到確切的位置。這對於在通話期間快速靜音嘈雜的應用程式至關重要。</p>

<h3>不同情境的配置</h3>
<p>你不想每次從「帶音樂工作」切換到「視訊通話」到「遊戲」時手動調整八個滑桿。配置讓你儲存音量配置，一鍵套用。</p>

<h3>通話期間自動閃避</h3>
<p>音量混音器可以擁有的最佳功能：在你加入通話時自動降低背景音訊，通話結束時恢復。不需要手動調整。你的音樂在 Zoom 啟動你的麥克風時變安靜，掛斷時恢復。</p>

<h2>SoundDial：macOS 應該內建的音量混音器</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> 是一款原生 macOS 選單列應用程式，給你 Apple 不會給的——你 Mac 上每個應用程式的獨立音量控制。</p>

<p>它位於你的選單列，顯示每個運行中應用程式及其自己的音量滑桿。拖動滑桿將那個應用程式的音量從 0% 調整到 200%。點擊喇叭圖示立即靜音它。在已儲存的配置之間切換以適應不同情境。啟用自動閃避，通話開始時你的音樂自動變安靜。</p>

<img src="/apps/sounddial.png" alt="SoundDial——macOS 的逐應用程式音量混音器，在選單列中顯示個別應用程式音量滑桿" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>主要功能：</p>
<ul>
  <li><strong>逐應用程式音量滑桿</strong>——每個運行中應用程式 0% 到 200% 範圍</li>
  <li><strong>一鍵靜音</strong>——不移動滑桿靜音任何應用程式</li>
  <li><strong>音量配置</strong>——儲存並切換音量配置</li>
  <li><strong>自動閃避</strong>——通話期間音樂自動降低</li>
  <li><strong>鍵盤快捷鍵</strong>——用熱鍵切換混音器或靜音所有應用程式</li>
  <li><strong>輸出裝置切換</strong>——從同一個面板更改喇叭/耳機</li>
  <li><strong>音量記憶</strong>——在重啟之間記住每個應用程式的音量</li>
</ul>

<p>一次性購買。無訂閱。macOS 14.2+。<a href="https://apps.apple.com/app/sounddial/id6772792641">在 Mac App Store 上取得 SoundDial</a>。</p>
`,
  },
};
