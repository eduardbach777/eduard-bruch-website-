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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial Podcast 設定——來賓音訊、監聽和通知在獨立的音量等級" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上對每個應用程式提供 1% 精確度的精細音量控制" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 Mac 上即時通話期間獨立控制 Slack 音量，同時音樂在不同音量播放" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 預設音量設定——新應用程式以配置的等級開始，而不是全爆" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial——獨立管理所有 Mac 音訊來源的逐應用程式音量控制" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上將 Cisco Webex 通話音量提升超過 100%" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上顯示兩個音訊來源在不同音量等級" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 深夜電影設定——串流應用程式在中等音量，通知靜音" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 Mac 睡眠和喚醒循環後保留逐應用程式音量等級" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上分離 DAW 輸出與 Discord 和參考音軌進行音樂製作" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上將 Apple Music 音量提升超過 100%" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial——可靠的 Mac 逐應用程式音量混音器，具有配置、自動閃避和 200% 提升" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上平衡 Spotify 和 Discord 在不同音量等級" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial——macOS 的逐應用程式音量控制、配置、自動閃避和 200% 提升" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上在系統等級提升 VLC 音量，用於安靜的影片檔案" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 可配置的自動閃避——控制通話期間背景音訊降低多少" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 Mac 上為藍牙耳機提升應用程式音量，逐應用程式滑桿最高 200%" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 Mac 上平衡遊戲、Discord 和音樂音訊等級用於 OBS 直播" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 音量記憶——自動記住並恢復 macOS 上的逐應用程式音量等級" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 Mac 上將 Apple Podcasts 音量提升到 180% 以播放安靜的 Podcast 節目" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 學生設定——講座全音量、學習音樂低音量、通知靜音" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 全部靜音快捷鍵——Control+Option+M 靜音和取消靜音所有應用程式並恢復音量" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上將 Google Meet（Chrome）音量提升超過 100%" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上分開通知應用程式音量和媒體應用程式音量" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上將 FaceTime 通話音量提升超過 100%" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 鍵盤快捷鍵——Control+Option+S 切換，Control+Option+M 靜音所有" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial——不安裝虛擬音訊裝置的 Background Music 替代方案" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial——具有音量配置和自動閃避的更輕量 SoundSource 替代方案" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上以 1% 增量進行精細逐應用程式音量控制" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 Mac 上將 Netflix 音訊提升到 180% 以獲得更清晰的對話和串流音訊" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 遠端工作音訊設定——macOS 上 Zoom、Spotify 和 Slack 的不同音量等級" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上獨立於其他應用程式控制瀏覽器音量" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上獨立於遊戲和音樂控制 Discord 音量" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在一個選單列面板中提供音訊輸出裝置切換和逐應用程式音量控制" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上將 Microsoft Teams 通話音量提升超過 100%" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上靜音 Slack 同時 Spotify 以正常音量播放" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 音量配置——在 macOS 上一鍵切換會議、專注和休閒模式" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 Mac 上將 Zoom 通話音量提升到 180% 以獲得更清晰的視訊通話音訊" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上獨立調低 Spotify 音量，同時保持其他應用程式全音量" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 macOS Tahoe 上提供逐應用程式音量控制" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上顯示 Zoom 在全音量和 Spotify 在通話期間調低" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 macOS 重啟之間記住逐應用程式音量等級" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 逐應用程式音量混音器在 macOS 上顯示個別應用程式音量滑桿" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 Mac 上將 Safari 瀏覽器音量提升到 180% 以播放安靜的 YouTube 影片" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上顯示 Slack 低音量和 Spotify 正常音量——獨立的通知控制" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 自動閃避設定——Mac 上 Zoom 通話期間可配置的音量降低" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 Mac 上用最高 200% 的逐應用程式音量滑桿提升 AirPods 的應用程式音量" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上將 Spotify 音量提升到 200%，同時保持其他應用程式在正常音量" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 macOS 上顯示遊戲和 Discord 的獨立音量滑桿" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial——macOS 的音量混音器，在選單列中顯示逐應用程式音量滑桿" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 音量提升——macOS 上具有 200% 放大的逐應用程式音量控制" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 自動閃避功能在 Mac 上的 Zoom 通話期間自動降低音樂音量" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial 在 macOS 選單列中為每個應用程式顯示逐應用程式靜音按鈕" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial——macOS 的逐應用程式音量混音器，在選單列中顯示個別應用程式音量滑桿" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

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
  "background-music-alternative-mac": {
    slug: "background-music-alternative-mac",
    title: "Mac 上最佳的 Background Music 替代方案（2026）",
    description: "Background Music 在較新的 macOS 上失效？最可靠的個別應用程式音量混音器替代方案就是 SoundDial——一款具備音量增強與設定檔的沙盒化 Mac App Store 應用程式。",
    date: "2026-07-23",
    readTime: "5 分鐘閱讀",
    content: `<p>如果 Background Music 在某次 macOS 更新後停止運作，最可靠的替代方案就是 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>——一款來自 Mac App Store 的選單列個別應用程式音量混音器。它讓每個應用程式都擁有自己的音量滑桿，並加入靜音、音量增強、音量設定檔與自動降音功能，而且完全沙盒化並通過 Apple 審核，因此沒有任何音訊驅動程式會在下一次 macOS 發佈時失效。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac 上最佳的 Background Music 替代方案（2026）" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>為什麼 Background Music 在較新的 macOS 上會失效</h2>

<p>Background Music 是一個真正巧妙的免費開源專案。它為 Mac 使用者提供了 Apple 從未提供過的東西：個別應用程式音量混音器，也就是 Windows 多年來一直擁有的功能。但它的設計方式也正是它一再失效的原因。</p>

<p>為了路由並控制音訊，Background Music 安裝了一個虛擬音訊裝置——一個攔截 Mac 聲音的系統層級驅動程式。這種做法在較舊的 macOS 上運作良好，但每個重大版本都會加強對核心與音訊擴充功能的安全限制。使用者回報的常見症狀有：</p>

<ul>
<li>安裝後或 OS 更新後完全沒有聲音。</li>
<li>虛擬裝置載入失敗，導致音訊路由靜悄悄地停止運作。</li>
<li>應用程式需要重新安裝、重新開機或手動移除驅動程式才能恢復。</li>
<li>開發是由社群主導且以志工步調進行，因此針對新 macOS 的修正可能會延遲。</li>
</ul>

<p>這些都不代表 Background Music「不好」。它只是意味著一個免費、以驅動程式為基礎的工具本質上就是脆弱的，而如果你每天都依賴個別應用程式音量，那種脆弱很快就會讓人厭煩。</p>

<h2>挑選替代方案時該注意什麼</h2>

<p>在挑選任何替代方案之前，先確定你真正需要什麼：</p>

<ul>
<li><strong>跨 macOS 更新的可靠性。</strong>如果它安裝核心或音訊擴充功能，就要預期偶爾會失效。</li>
<li><strong>真正的個別應用程式控制。</strong>每個應用程式獨立的音量與靜音是基本要求。</li>
<li><strong>音量增強。</strong>有些應用程式（安靜的會議工具、某些瀏覽器）就是太小聲——你會想要突破 100%。</li>
<li><strong>便利功能。</strong>設定檔與自動降音是讓一個工具變成你整天都會開著的東西的關鍵。</li>
<li><strong>安全安裝。</strong>沙盒化的 Mac App Store 應用程式無法觸及系統內部，因此解除安裝乾淨俐落，更新也是自動的。</li>
</ul>

<h2>為什麼 SoundDial 是可靠的選擇</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 正是為了解決 Background Music 使用者遇到的問題而打造：他們想要個別應用程式音量，但不想照顧一個驅動程式。它常駐在你的選單列，並把核心工作做得很好：</p>

<ul>
<li><strong>每個應用程式獨立的音量</strong>，並在同一面板中提供個別應用程式靜音。</li>
<li><strong>個別應用程式音量增強</strong>，讓安靜的應用程式大聲到真正聽得見。</li>
<li><strong>音量設定檔</strong>——儲存一組混音（例如「會議」或「遊戲」）並即時切換，不必每次都拖動滑桿。</li>
<li><strong>自動降音</strong>，讓背景音訊在該降低時自動降低。</li>
<li><strong>快速輸出切換</strong>，在喇叭、耳機與其他裝置之間切換。</li>
</ul>

<p>更大的差異在於它的安裝方式。SoundDial 透過 Mac App Store 發佈，這意味著它經過 Apple 審核並沙盒化。沒有 DMG 要拖曳，沒有音訊驅動程式或系統擴充功能，也沒有核心存取權限。這是它不會像 Background Music 那樣在新 macOS 到來時失效的最重要原因——它並沒有接入 Apple 持續鎖定的那些系統部分。</p>

<p>它的價格是 <strong>€14.99 一次性買斷</strong>。不是免費，但沒有訂閱制，而且你付的錢是換來一個持續維護且安裝安全的東西。</p>

<h2>SoundDial vs. Background Music vs. 免費工具</h2>

<p>Background Music 並不是你唯一的免費選項，所以這裡誠實地說明現況：</p>

<ul>
<li><strong>Background Music（免費、開源）：</strong>提供個別應用程式音量，但以驅動程式為基礎，容易在較新的 macOS 上失效，而且缺少音量增強、設定檔與自動降音。</li>
<li><strong>FineTune（免費、開源）：</strong>一款輕量的選單列個別應用程式音量應用程式。如果免費是你唯一的要求，它很不錯，但額外功能較少。</li>
<li><strong>eqMac（免費）：</strong>主要是系統 EQ 與音量增強器，並非真正的個別應用程式混音器。</li>
<li><strong>Rogue Amoeba 的 SoundSource（約 $39）：</strong>專業級選項，具備個別應用程式 EQ 與完整輸出路由。非常出色，但價格是 SoundDial 的兩倍多，而且仍需下載外加一個音訊擷取驅動程式。</li>
<li><strong>SoundDial（€14.99，Mac App Store）：</strong>中間地帶——真正的個別應用程式音量、靜音、音量增強、設定檔與降音，以乾淨的沙盒化安裝方式提供，沒有任何驅動程式。</li>
</ul>

<p>如果你需要個別應用程式 EQ 或複雜的錄音室路由，SoundSource 值得多花那筆錢。如果你想要一個免費的自己動手工具，並且能容忍偶爾的失效，FineTune 或 Background Music 就夠了。但如果你的目標是「讓每個應用程式擁有自己的音量，並且不要每次 macOS 更新都失效」，SoundDial 以最少的麻煩達成這個目標。</p>

<h2>讓這件事變得必要的 macOS 背景</h2>

<p>值得直說：macOS 沒有內建的個別應用程式音量混音器。Windows 多年來在其音量彈出視窗中就有一個，但在 Mac 上，系統滑桿一次控制所有東西。那個缺口正是 Background Music 與 SoundDial 這類工具存在的全部原因。既然 Apple 不填補它，實際的問題就只是你信任哪一種第三方做法——一個對抗 OS 的免費驅動程式，還是一個與它協作的沙盒化應用程式。</p>

<p>準備好不再對抗故障的音訊驅動程式了嗎？以 €14.99 取得 <a href="https://apps.apple.com/app/id6772792641">Mac App Store 上的 SoundDial</a>，用可靠的方式控制每個應用程式的音量。</p>`,
  },
  "soundsource-vs-sounddial-mac": {
    slug: "soundsource-vs-sounddial-mac",
    title: "SoundSource vs SoundDial：哪一款 Mac 音量應用程式勝出？",
    description: "SoundSource（$39，專業級）vs SoundDial（€14.99，App Store）。比較個別應用程式音量、音量增強、設定檔與自動降音，為你挑選合適的 Mac 混音器。",
    date: "2026-07-23",
    readTime: "6 分鐘閱讀",
    content: `<p>如果你只想要安裝乾淨且價格更低的個別應用程式音量控制，對大多數人而言 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 是更划算的選擇：€14.99 一次性買斷，來自 Mac App Store，具備個別應用程式音量、靜音、音量增強、設定檔與自動降音。只有在你特別需要個別應用程式 EQ 與進階輸出路由時，才選擇 Rogue Amoeba 的 SoundSource（約 $39）。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — SoundSource vs SoundDial：哪一款 Mac 音量應用程式勝出？" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>簡短版</h2>
<p>macOS 至今仍沒有內建的個別應用程式音量混音器。Windows 多年來一直有，但在 Mac 上系統音量滑桿會一次移動所有東西。SoundSource 與 SoundDial 的存在都是為了修補那個缺口。它們只是瞄準不同的買家。</p>
<ul>
<li><strong>SoundDial</strong>——€14.99 一次性買斷，Mac App Store，選單列應用程式。每個應用程式獨立音量、個別應用程式靜音、個別應用程式音量增強、已儲存的設定檔、自動降音，以及快速輸出切換。沙盒化並通過 Apple 審核，因此不需安裝驅動程式。</li>
<li><strong>SoundSource</strong>——約 $39，從 Rogue Amoeba 直接下載。以上全部再加上個別應用程式 EQ、進階輸出路由與音訊效果。需要安裝一個小型音訊擷取驅動程式。</li>
</ul>

<h2>價格以及購買方式</h2>
<p>這是最明顯的分野。SoundSource 大約 $39，由 Rogue Amoeba 直接銷售。SoundDial 在 Mac App Store 上為 €14.99 一次性購買——大約是前者價格的三分之一多一點。</p>
<p>由於 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 透過 App Store 發佈，它是沙盒化、經過公證且通過 Apple 審核的。你按下「取得」，它就安裝完成。沒有 DMG 要掛載，沒有需要授權給核心相關元件的權限，也沒有音訊驅動程式或系統擴充功能。它也隨著你一般的 App Store 更新流程一起更新，並同步到你使用同一個 Apple ID 的其他 Mac。</p>
<p>SoundSource 在 App Store 之外下載，並安裝一個音訊擷取驅動程式，以便攔截並處理每個應用程式的音訊。那正是解鎖其專業功能的關鍵，但也意味著多一個安裝步驟，以及一個位於系統更深處的元件。</p>

<h2>SoundSource 能做而 SoundDial 不能做的事</h2>
<p>SoundSource 對某一種特定使用者而言物有所值。如果以下任何一點符合你，那就值得多花那筆錢：</p>
<ul>
<li><strong>個別應用程式 EQ。</strong>你想在例如 Spotify 上開啟 10 頻段等化器，同時讓 Zoom 保持平坦。SoundDial 處理音量，而非 EQ。</li>
<li><strong>進階輸出路由。</strong>把一個應用程式送到你的喇叭，另一個送到耳機或特定介面，並有精細控制。</li>
<li><strong>音訊效果與外掛。</strong>SoundSource 能以個別應用程式為基礎承載效果——這是真正的專業領域。</li>
</ul>
<p>Rogue Amoeba 擁有長久且受信任的紀錄。SoundSource 是一款嚴肅的工具，定價也如此。如果你是音訊專業人士或重度多輸出使用者，它是正確的選擇。</p>

<h2>SoundDial 在日常使用上做得更好的地方</h2>
<p>大多數搜尋「Mac 音量混音器」的人並不需要 EQ。他們需要讓一個應用程式比另一個小聲，而且不想為了達成這件事而對抗安裝程式。SoundDial 乾淨俐落地涵蓋這一點，並加入幾項值得一提的東西：</p>
<ul>
<li><strong>個別應用程式音量增強。</strong>有些應用程式與影片即使在 100% 也就是太小聲。SoundDial 能把單一應用程式推過其正常上限，讓一場安靜的會議或播客終於聽得見。</li>
<li><strong>音量設定檔。</strong>儲存一整套設定——音樂低、瀏覽器靜音、通話應用程式大聲——並即時召回。非常適合在「專注」、「會議」與「遊戲」之間切換，而不必拖動五個滑桿。</li>
<li><strong>自動降音。</strong>當另一個來源開始時，自動降低背景音訊（例如音樂），讓通知、通話或影片不會被淹沒。</li>
<li><strong>快速輸出切換。</strong>從選單列在喇叭、耳機與其他裝置之間跳轉。</li>
</ul>
<p>以上全部都在選單列下拉選單中執行，因此隨手一按即可，其餘時間則不會擋在你面前。</p>

<h2>免費替代方案，簡述</h2>
<p>你會在同樣的搜尋中看到幾個免費選項。值得認識一下：</p>
<ul>
<li><strong>Background Music</strong>——免費且開源，提供基本的個別應用程式音量。但它在較新的 macOS 發佈上可能失效，而且沒有音量增強、設定檔或自動降音。</li>
<li><strong>FineTune</strong>——一款免費開源的選單列音量應用程式。簡單，但範圍有限。</li>
<li><strong>eqMac</strong>——免費的 EQ 與系統音量增強器，比較是全系統 EQ 工具，而非真正的個別應用程式混音器。</li>
</ul>
<p>如果免費對你有用，那很好。取捨在於相容性與支援：開源音訊工具可能落後於 macOS 更新，而設定檔與降音這類功能通常並不存在。如果你的設定對你的工作日很重要，一次性付費換取一個經過審核且持續維護的東西，通常是更平靜的路。</p>

<h2>你該買哪一個？</h2>
<p>回答一個問題：你需要個別應用程式 EQ 或進階輸出路由嗎？</p>
<ul>
<li><strong>需要</strong>——買 SoundSource。它就是為此打造的，而約 $39 對一款具備驅動程式層級引擎的專業工具而言很公道。</li>
<li><strong>不需要，我只想要個別應用程式音量、音量增強與乾淨的安裝</strong>——買 SoundDial。你得到每天真正重要的混音，外加設定檔與自動降音，只需 €14.99 且零驅動程式麻煩。</li>
</ul>
<p>對絕大多數 Mac 使用者而言，第二個類別才是誠實的答案。你付的錢是為了控制音量，而不是為了一間錄音室。</p>

<p><strong>準備好用簡單的方式修好 Mac 音量了嗎？</strong>取得 <a href="https://apps.apple.com/app/id6772792641">Mac App Store 上的 SoundDial</a>——€14.99 一次性買斷，沒有驅動程式，沒有 DMG。個別應用程式音量、音量增強、設定檔與自動降音，一鍵搞定。</p>`,
  },
  "cheaper-soundsource-alternative-mac": {
    slug: "cheaper-soundsource-alternative-mac",
    title: "Mac 上更便宜的 SoundSource 替代方案，用於個別應用程式音量",
    description: "想要 SoundSource 式的個別應用程式音量但不想付 $39？SoundDial 是一款 €14.99 的 Mac App Store 選單列混音器，具備音量增強、設定檔與自動降音。",
    date: "2026-07-23",
    readTime: "5 分鐘閱讀",
    content: `<p>如果你想在 Mac 上擁有 SoundSource 式的個別應用程式音量控制，但覺得 $39 太貴，最快且可靠的解法就是 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>。它是一款來自 Mac App Store 的 €14.99 一次性選單列混音器，讓每個應用程式都擁有自己的音量滑桿、靜音與音量增強——外加設定檔與自動降音——而且不需下載或安裝任何音訊驅動程式。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac 上更便宜的 SoundSource 替代方案，用於個別應用程式音量" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>為什麼人們會尋找 SoundSource 替代方案</h2>
<p>Rogue Amoeba 的 SoundSource 是優秀的軟體。它真的是專業級的：個別應用程式等化器、音訊效果，以及讓你把一個應用程式送到耳機、另一個送到喇叭的輸出路由。但那份強大伴隨著兩個摩擦點。第一，價格——大約 $39。第二，它在 App Store 之外安裝一個系統層級的音訊擷取驅動程式，有些人在工作機器上對此有所顧慮，或者純粹不想在 macOS 更新之間去管理它。</p>
<p>對大多數人而言，真正的需求簡單得多：把 Spotify 調低而不動到 Zoom 通話、把吵鬧瀏覽器分頁的應用程式靜音，或把安靜的影片播放器推過 100%。如果那是你，你就是在花專業級的錢，買你永遠不會打開的功能。</p>

<h2>SoundDial 能做什麼——以及它的價格</h2>
<p>SoundDial 專注於個別應用程式音量這項工作，並乾淨俐落地完成它。打開選單列，你會得到一份所有正在發出聲音的東西的即時清單，每一個都有自己的控制：</p>
<ul>
<li><strong>每個應用程式獨立音量</strong>——每個應用程式一個滑桿，即時調整。</li>
<li><strong>個別應用程式靜音</strong>——即時靜音一個應用程式，而不暫停其他任何東西。</li>
<li><strong>個別應用程式音量增強</strong>——當影片或通話太小聲時，把安靜的應用程式推過其正常最大值。</li>
<li><strong>音量設定檔</strong>——儲存一組混音（例如「專注」、「遊戲」、「會議」）並一鍵切換。</li>
<li><strong>自動降音</strong>——當更重要的東西開始播放時，自動降低其他應用程式。</li>
<li><strong>快速輸出切換</strong>——從同一個選單在喇叭、耳機與其他裝置之間跳轉。</li>
</ul>
<p>價格是 <strong>€14.99，一次付清</strong>——沒有訂閱制。那大約是 SoundSource 成本的三分之一，換來大多數使用者真正會用到的音量功能。</p>

<h2>App Store 的差異</h2>
<p>由於 SoundDial 透過 <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a> 發佈，它經過 Apple 審核並沙盒化。沒有 DMG 要拖曳，沒有核心擴充功能或音訊擷取驅動程式要核准，也沒有獨立的更新程式。你像安裝任何其他 App Store 應用程式一樣安裝它，它就能運作。當 macOS 更新時，你不必去猜想某個低階音訊元件是否還能運作。</p>
<blockquote>macOS 至今仍沒有內建的個別應用程式音量混音器。Windows 多年來一直有，但在 Mac 上系統音量是全有或全無——這正是這些工具填補的缺口。</blockquote>

<h2>它與免費選項的比較</h2>
<p>SoundSource 不是你唯一的替代方案。有一些免費工具，而誠實看待它們很重要：</p>
<ul>
<li><strong>Background Music</strong> 是一款免費、開源的個別應用程式音量應用程式。它對許多人有用，但可能在較新的 macOS 發佈上失效，更新不規律，而且沒有音量增強、沒有設定檔、也沒有自動降音。</li>
<li><strong>FineTune</strong> 是一款免費、開源的選單列音量應用程式——輕量又方便，但同樣缺少設定檔與降音功能。</li>
<li><strong>eqMac</strong> 是一款免費的 EQ 與系統音量增強器。它比較是等化器/音量增強工具，而非真正的個別應用程式混音器，也不專注於個別應用程式滑桿。</li>
</ul>
<p>免費是正當的選擇。取捨在於可靠性與功能：開源音訊工具依賴志工維護，可能落後於 macOS 變更，而且沒有任何免費選項像 SoundDial 那樣同時內建設定檔與自動降音。如果你的設定很簡單，而且不介意偶爾失效，免費應用程式或許就夠了。如果你想要一個持續維護、沙盒化且就是能運作的東西，這 €14.99 正是為你買下這個。</p>

<h2>快速決策指南</h2>
<ul>
<li><strong>你需要個別應用程式 EQ、音訊效果，以及把一個應用程式路由到不同的輸出裝置</strong> → SoundSource 物有所值。這裡沒有東西能完全取代它。</li>
<li><strong>你主要需要個別應用程式音量、靜音、音量增強、設定檔與降音——而且不要驅動程式</strong> → €14.99 的 SoundDial 是更划算的選擇。</li>
<li><strong>你想要免費而且不介意維護風險</strong> → 先試試 Background Music、FineTune 或 eqMac。</li>
</ul>

<h2>設定它</h2>
<p>開始使用大約只要一分鐘：</p>
<ul>
<li>從 Mac App Store 安裝 SoundDial——沒有外部下載。</li>
<li>授予 macOS 在首次啟動時要求的音訊權限。</li>
<li>在幾個應用程式中播放聲音，然後打開選單列圖示；你會看到每一個都有自己的滑桿。</li>
<li>拖動以設定音量、點按以靜音，或推過 100% 以增強音量。</li>
<li>把你的設定儲存為設定檔，如果你想在通話或媒體期間讓其他應用程式安靜下來，就開啟自動降音。</li>
</ul>
<p>這就是整個流程——沒有設定檔案、不必重新啟動、也沒有系統擴充功能要核准。</p>

<h2>結論</h2>
<p>SoundSource 是更強大的工具，但大多數尋找它的人只是想要行為正常的個別應用程式音量。SoundDial 以大約三分之一的價格提供這一點，透過 App Store 安全發佈，並在其上加入設定檔與自動降音——而且不需安裝任何一個驅動程式。</p>

<p>準備好獨立控制每個應用程式的音量了嗎？<a href="https://apps.apple.com/app/id6772792641">以 €14.99 一次性取得 Mac App Store 上的 SoundDial</a>。</p>`,
  },
  "finetune-alternative-mac": {
    slug: "finetune-alternative-mac",
    title: "Mac 的 FineTune 替代方案：一款有支援的個別應用程式音量混音器",
    description: "試過免費的 FineTune 選單列應用程式，想要一個持續維護且 App Store 安全的東西？這裡是 Mac 上個別應用程式音量的最佳 FineTune 替代方案。",
    date: "2026-07-23",
    readTime: "5 分鐘閱讀",
    content: `<p>如果你喜歡 FineTune，但想要一個持續積極維護且從可信賴來源安裝的東西，<a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 是最快且可靠的解法。它是一款 Mac App Store 的選單列個別應用程式音量混音器，具備獨立音量、個別應用程式靜音、音量增強、已儲存的設定檔與自動降音。經過 Apple 審核並沙盒化，價格為 €14.99 一次性，且沒有驅動程式要安裝。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac 的 FineTune 替代方案：一款有支援的個別應用程式音量混音器" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>為什麼要尋找 FineTune 替代方案？</h2>

<p>FineTune 是個好點子：一款免費、開源的選單列應用程式，在 macOS 上提供個別應用程式音量控制，那是 Apple 至今仍拒絕內建的東西（Windows 多年來一直有個別應用程式混音器）。對很多人來說它能完成基本工作。但使用者會去尋找別的東西，確實有真實的原因。</p>

<ul>
<li><strong>維護不確定。</strong>開源的業餘專案存亡取決於單一維護者的空閒時間。當 macOS 推出重大更新時，與音訊相關的應用程式往往最先失效，而你只能等待一個或許永遠不會出現的志工修正。</li>
<li><strong>功能天花板。</strong>FineTune 涵蓋個別應用程式音量，此外幾乎沒有別的。如果你想要突破 100% 的音量增強、已儲存的設定檔或自動降音，你就得再搭配其他工具。</li>
<li><strong>信任與更新。</strong>在 App Store 之外安裝一個原始建置版本，意味著沒有自動審核、沒有沙盒保證，還有你必須自己追蹤的手動更新。</li>
</ul>

<p>這些都不代表 FineTune 不好。它只是意味著，如果你每天都依賴個別應用程式音訊，你大概會想要一個背後有支援模式的東西。</p>

<h2>SoundDial 有何不同</h2>

<p>SoundDial 從同樣的核心想法出發——一款為每個運作中的應用程式提供滑桿的選單列混音器——然後以進階使用者實際要求的功能更進一步。</p>

<ul>
<li><strong>每個應用程式獨立音量。</strong>把 Spotify 調低、讓你的通話保持全音量、把吵鬧瀏覽器分頁的應用程式完全靜音，全部在同一個選單中完成。</li>
<li><strong>個別應用程式音量增強。</strong>當播客或影片母帶做得太低時，把安靜的應用程式推過其正常上限。FineTune 做不到這一點。</li>
<li><strong>音量設定檔。</strong>儲存一組混音——「專注」、「遊戲」、「會議」——並一鍵切換你的整套設定，而不必微調五個滑桿。</li>
<li><strong>自動降音。</strong>當更重要的東西開始播放時，自動降低背景音訊，讓來電時音樂降下來。</li>
<li><strong>快速輸出切換。</strong>在喇叭、耳機與其他輸出之間跳轉，不必深入「系統設定」。</li>
</ul>

<p>由於 <a href="https://apps.apple.com/app/id6772792641">SoundDial 透過 Mac App Store 發佈</a>，它經過 Apple 審核並沙盒化，安裝乾淨俐落，並透過與其他所有 App Store 應用程式相同的機制更新。沒有 DMG 要拖曳，沒有音訊驅動程式或系統擴充功能，也沒有要求你允許核心層級元件的安全提示。</p>

<h2>SoundDial vs. FineTune 與其他免費工具</h2>

<p>FineTune 不是唯一的免費選項，誠實地看清整個局面會有幫助。</p>

<ul>
<li><strong>FineTune</strong>——免費、開源的選單列個別應用程式音量。簡單又輕量，但沒有音量增強、沒有設定檔、沒有降音，而且維護取決於社群。</li>
<li><strong>Background Music</strong>——免費且開源，路由並調整個別應用程式音訊。真的很有用，但可能在較新的 macOS 發佈上失效，而且缺少音量增強、設定檔與降音。</li>
<li><strong>eqMac</strong>——免費的 EQ 與系統音量增強器。如果你主要想要等化器那很棒，但它不是個別應用程式混音器。</li>
<li><strong>SoundSource（Rogue Amoeba）</strong>——約 $39 的專業級選項，具備個別應用程式 EQ 與輸出路由。非常出色，但它需要下載外加一個音訊擷取驅動程式，而且價格是兩倍多。</li>
<li><strong>SoundDial</strong>——€14.99 一次性，App Store 安全，沒有驅動程式。在個別應用程式音量基礎上加入音量增強、設定檔與自動降音。</li>
</ul>

<p>誠實的總結：如果你想要絕對最便宜的東西，而且只需要基本的個別應用程式音量，免費工具可以勝任。如果你想要個別應用程式 EQ 與路由，並且不介意付費和安裝驅動程式，SoundSource 是重量級選手。SoundDial 位於甜蜜點——比免費應用程式更有能力，比 SoundSource 便宜得多，而且比兩者都更安全，因為 Apple 會審核並沙盒化它。</p>

<h2>從 FineTune 轉移過來</h2>

<p>切換只需幾分鐘，而且沒有清理儀式。</p>

<ul>
<li>從 Mac App Store 安裝 SoundDial。沒有安裝程式、沒有驅動程式核准、不必重新開機。</li>
<li>點按選單列中的 SoundDial 圖示，即可看到每個運作中應用程式的滑桿。</li>
<li>設定你的日常混音，然後把它儲存為設定檔，這樣你就能即時召回。</li>
<li>可選擇性地開啟自動降音，讓背景音訊為通話與提示讓路。</li>
<li>當你滿意時，就結束 FineTune。由於兩款應用程式都不安裝系統驅動程式，沒有任何殘留物要解除安裝。</li>
</ul>

<p>你保留了 FineTune 中你喜歡的東西——一個 Apple 從未給過你的乾淨選單列混音器——並獲得音量增強、設定檔、降音，以及一款維護中的 App Store 應用程式所提供的長期支援。</p>

<h2>結論</h2>

<p>FineTune 證明了這個概念：個別應用程式音量屬於選單列。SoundDial 就是這個概念在具備真正支援模式、更多功能與 App Store 安全性之下的樣子，只需一次性 €14.99，而不是押注在志工的維護上。</p>

<p>準備好擁有一個持續維護的個別應用程式混音器了嗎？<a href="https://apps.apple.com/app/id6772792641">取得 Mac App Store 上的 SoundDial</a>，幾秒鐘內就能控制每個應用程式的音量。</p>`,
  },
  "eqmac-alternative-per-app-volume-mac": {
    slug: "eqmac-alternative-per-app-volume-mac",
    title: "Mac 上實現真正個別應用程式音量的 eqMac 替代方案",
    description: "喜歡 eqMac 的音量增強，但需要真正的個別應用程式音量、靜音與設定檔？SoundDial 是最快的 Mac App Store 解法——€14.99、沙盒化、沒有驅動程式。",
    date: "2026-07-23",
    readTime: "5 分鐘閱讀",
    content: `<p>如果你用 eqMac 是為了它的 EQ 與音量增強器，但其實想要每個應用程式獨立的音量——外加靜音、音量增強與已儲存的設定檔——最快且可靠的解法就是 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>。它是一款 Mac App Store 選單列混音器：為每個應用程式設定音量、增強安靜的應用程式，並即時切換設定檔。€14.99 一次性、沙盒化、沒有驅動程式要安裝。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac 上實現真正個別應用程式音量的 eqMac 替代方案" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>eqMac vs. 你真正需要的東西</h2>

<p>eqMac 是一款可靠的免費工具，它的全系統等化器與音量增強器真的很有用。但 eqMac 是圍繞一個主 EQ 與一個主輸出打造的。它並不提供真正的個別應用程式音量混音器——那個 Windows 多年來一直有、而 macOS 至今仍未原生內建的東西。</p>

<p>所以如果你真正的問題是「我在通話時 Spotify 太吵」或「這一款遊戲震破我的耳朵，但其他一切都好」，eqMac 就不是這份工作合適的形狀。你最後只能操縱單一主滑桿，或去擺弄每個應用程式的內部音量。那正是 SoundDial 填補的缺口。</p>

<h2>SoundDial 能做而 eqMac 不能做的事</h2>

<ul>
<li><strong>每個應用程式獨立音量</strong>——音樂 40%、瀏覽器 100%、視訊通話 70%，同時進行，全部記住。</li>
<li><strong>個別應用程式靜音</strong>——即時靜音一個吵鬧的應用程式，而不動到其他任何東西。</li>
<li><strong>個別應用程式音量增強</strong>——把安靜的應用程式推過其正常上限，就像 eqMac 的音量增強器那樣，但瞄準單一應用程式而非整個系統。</li>
<li><strong>音量設定檔</strong>——儲存「專注」、「遊戲」或「會議」這類設定，並一鍵切換整套混音。</li>
<li><strong>自動降音</strong>——當更重要的東西開始時，自動降低背景音訊，讓你不必在通話中途手忙腳亂地找滑桿。</li>
<li><strong>快速輸出切換</strong>——從選單列在喇叭、耳機與其他輸出之間跳轉。</li>
</ul>

<p>與 eqMac 的重疊之處基本上就是音量增強。其他一切——混音器、靜音、設定檔、降音——都是 eqMac 從未被設計來涵蓋的領域。</p>

<h2>你還想要 EQ 嗎？</h2>

<p>誠實面對你正在解決哪個問題。如果你真的需要頻率 EQ——削減低音、馴服刺耳的高音、塑造整個系統的音色——那麼 eqMac 仍有它的位置，而且它是免費的。SoundDial 是一款音量混音器，不是等化器。</p>

<p>但大多數人拿起 eqMac 的音量增強器，並不是因為想要塑造頻率，而是想要某個應用程式更大聲或讓混音平衡。如果那是你，一款專用的混音器才是更乾淨的答案。你甚至可以兩者並用：保留 eqMac 作為全系統 EQ 曲線，並用 SoundDial 處理個別應用程式音量。它們不會爭搶同一份工作。</p>

<h2>它與其他 Mac 音訊工具的比較</h2>

<p>既然你已經在找工具，這裡誠實地說明局面：</p>

<ul>
<li><strong>SoundSource（Rogue Amoeba）</strong>——約 $39 的專業級選項，具備個別應用程式 EQ 與完整輸出路由。強大，但它需要直接下載並安裝一個音訊擷取驅動程式。如果你想要的只是帶設定檔的個別應用程式音量，它就太過頭且較貴。</li>
<li><strong>Background Music</strong>——免費且開源，但可能在較新的 macOS 發佈上失效，而且沒有音量增強、沒有設定檔、也沒有自動降音。能用時很棒，不能用時很惱人。</li>
<li><strong>FineTune</strong>——一款免費開源的選單列應用程式。如果 $0 是硬性要求，值得一看，不過功能與精緻度較輕。</li>
<li><strong>eqMac</strong>——免費的 EQ 加音量增強器，但如上所述，沒有真正的個別應用程式混音器。</li>
</ul>

<p>SoundDial 位於甜蜜點：比 SoundSource 更專注且更便宜，比免費選項更有能力且更可靠，而且它做到了 eqMac 做不到的個別應用程式工作。</p>

<h2>為什麼 Mac App Store 在這裡很重要</h2>

<p>這些工具中有好幾個需要直接下載，以及一個核心層級或擷取型音訊驅動程式。它們能運作，但那種東西可能在 macOS 更新時卡住，或在被鎖定的工作 Mac 上出問題。</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 改為透過 Mac App Store 發佈。這意味著它經過 Apple 審核並沙盒化，安裝乾淨俐落，沒有 DMG 要拖曳，也沒有音訊驅動程式或系統擴充功能要核准。更新像任何其他應用程式一樣透過 App Store 到來，解除安裝就是一般的刪除。對一款會觸及你音訊的選單列工具而言，那種更低摩擦、更低風險的路徑很有價值。</p>

<h2>快速設定</h2>

<ul>
<li>從 Mac App Store 安裝 SoundDial——不必重新開機，沒有驅動程式提示。</li>
<li>打開選單列圖示；每個目前正在發出聲音的應用程式都會帶著自己的滑桿出現。</li>
<li>設定音量、靜音你不需要的、增強任何太安靜的東西。</li>
<li>把這套安排儲存為設定檔，然後為遊戲、通話或專注建立更多設定檔。</li>
<li>開啟自動降音，讓背景音訊自動讓路。</li>
</ul>

<p>這就是整個循環。幾分鐘之內，你就擁有了 eqMac 的音量增強器只能暗示的那種個別應用程式控制。</p>

<p><strong>準備好在你的 Mac 上實現真正的個別應用程式音量了嗎？</strong><a href="https://apps.apple.com/app/id6772792641">取得 Mac App Store 上的 SoundDial</a>——€14.99 一次性、沙盒化、沒有驅動程式，而且它確實做到了一款選單列混音器該做的事。</p>`,
  },
  "cheapest-volume-mixer-mac-2026": {
    slug: "cheapest-volume-mixer-mac-2026",
    title: "2026 年 Mac 上最便宜的好用音量混音器",
    description: "在尋找 2026 年 Mac 上最便宜的好用個別應用程式音量混音器？從價格、安全性與功能比較 SoundDial、SoundSource、Background Music、FineTune 與 eqMac。",
    date: "2026-07-23",
    readTime: "6 分鐘閱讀",
    content: `<p>2026 年 Mac 上最划算的個別應用程式音量混音器是 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>，一款 Mac App Store 上的選單列應用程式，一次性 €14.99。它讓每個應用程式都擁有自己的音量滑桿，外加靜音、音量增強、設定檔與自動降音——沒有驅動程式、沒有訂閱制，也沒有有風險的下載。它是唯一真正可靠運作的最便宜付費選項。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 2026 年 Mac 上最便宜的好用音量混音器" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>為什麼「最便宜」需要一個定義</h2>
<p>Mac 有免費的音量工具，所以如果唯一的目標是花零元，你有選項。但免費通常會在別處讓你付出代價：在新 macOS 版本上的脆弱、缺少音量增強或設定檔這類功能，或是一個需要你去信任的音訊擷取驅動程式安裝流程。「最便宜的好用」意味著：仍能給你一個穩定、功能完整、你會持續使用的混音器的最低價格。這就是我們在這裡採用的視角。</p>

<h2>首先，macOS 做不到的那件事</h2>
<p>Windows 多年來一直有個別應用程式音量混音器——右鍵點按喇叭圖示，就能獨立設定每個應用程式。macOS 至今仍沒有內建任何對等的東西。你得到一個主音量，以及某個應用程式碰巧內建的滑桿（音樂、某些瀏覽器）。沒有全系統的方式讓 Slack 比 Spotify 更安靜，或把一場安靜的視訊通話增強到蓋過一切。以下每個選項的存在都是為了填補那個缺口。</p>

<h2>參賽者，誠實定價</h2>

<h2>SoundDial——€14.99，一次性</h2>
<p>SoundDial 常駐在你的選單列，並為每個運作中的應用程式提供獨立的音量滑桿。在基本功能之外，它加入了人們真正會用到的功能：</p>
<ul>
<li><strong>個別應用程式音量增強</strong>——把一個太安靜的應用程式推過 100%，而不必費力去聽。</li>
<li><strong>個別應用程式靜音</strong>——靜音一個應用程式而不動到其餘的。</li>
<li><strong>音量設定檔</strong>——儲存「工作通話」或「電影之夜」的混音並即時召回。</li>
<li><strong>自動降音</strong>——當更重要的東西播放時，自動降低背景音訊。</li>
<li><strong>快速輸出切換</strong>——從同一個選單在喇叭、耳機與其他裝置之間跳轉。</li>
</ul>
<p>由於它在 Mac App Store 上，它是沙盒化、經過 Apple 審核且安裝乾淨俐落的——沒有 DMG、沒有核心擴充功能、也沒有音訊驅動程式要核准。你付 <a href="https://apps.apple.com/app/id6772792641">€14.99 一次</a>就擁有它。對大多數人而言，這就是甜蜜點：便宜到容易點頭，完整到你不會用膩。</p>

<h2>SoundSource——約 $39，專業選項</h2>
<p>Rogue Amoeba 的 SoundSource 是進階使用者的黃金標準。它像 SoundDial 一樣提供個別應用程式音量與靜音，但更進一步提供個別應用程式等化器與完整輸出路由（把一個應用程式送到耳機、另一個送到喇叭）。它真的很出色——但大約 $39，而且它在 App Store 之外安裝，帶有一個你必須授權的音訊擷取元件。如果你需要個別應用程式 EQ 或複雜的路由，它值這筆錢。如果你只想要一個乾淨又便宜的混音器，你就是在為你可能永遠不會碰的功能付費。</p>

<h2>Background Music——免費、開源</h2>
<p>Background Music 是一款知名的免費開源應用程式，提供個別應用程式音量與自動暫停。缺點是：它透過一個虛擬驅動程式深入接入 CoreAudio，而且它有很長一段在新 macOS 發佈上失效的歷史，有時在更新後需要手動修正或重新安裝。它也缺少音量增強、已儲存的設定檔與自動降音。對不介意維護的愛折騰者很棒；對只想要它能用的人則很惱人。</p>

<h2>FineTune——免費、選單列</h2>
<p>FineTune 是一款免費、開源的選單列音量應用程式。它輕量又討喜，對簡單的個別應用程式調整而言可能就夠了。但作為一個小型免費專案，它在功能深度上比不上——沒有設定檔、沒有自動降音，而且音量增強／輸出處理有限。零成本，但在壽命與支援上較無保證。</p>

<h2>eqMac——免費、EQ + 音量增強器</h2>
<p>eqMac 是一款免費的全系統等化器，帶有音量增強器。它比較著重於塑造整台 Mac 的音色與響度，而非混合個別應用程式，所以它是為不同工作而生的不同工具。如果你特別想要個別應用程式控制，eqMac 並不真的是答案，不過它是一款不錯的免費 EQ。</p>

<h2>價格 vs. 價值：誠實的表格</h2>
<ul>
<li><strong>真正免費，但有取捨：</strong>Background Music（脆弱、驅動程式為基礎）、FineTune（功能單薄）、eqMac（是 EQ，不是混音器）。</li>
<li><strong>最便宜的完整付費應用程式：</strong>SoundDial，€14.99——音量增強、設定檔、降音、App Store 安全性。</li>
<li><strong>高階／專業：</strong>SoundSource，約 $39——EQ 與路由，非 App Store 安裝。</li>
</ul>
<p>換句話說：SoundDial 的成本大約是 SoundSource 的三分之一，卻涵蓋了 90% 的人真正想要的功能。而且不像免費選項，它不會在某次 macOS 更新後悄悄失效，因為它不依賴一個脆弱的系統層級音訊驅動程式。</p>

<h2>你該選哪一個？</h2>
<p>如果你是需要個別應用程式 EQ 並把應用程式路由到不同輸出的專業人士，就買 SoundSource——它值那個價。如果你熱愛開源且不介意偶爾失效，可免費試試 Background Music 或 FineTune。但如果你想要一個就是能用的最便宜選項——獨立音量、音量增強、靜音、可儲存的設定檔與自動降音，並從 App Store 安全安裝——SoundDial 是 2026 年明顯的價值贏家。</p>

<blockquote>最好的混音器不是功能最多或價格最低的那一個——而是你設定一次就能忘掉的那一個。在 €14.99，SoundDial 讓這件事變得容易決定。</blockquote>

<p>準備好讓每個應用程式擁有自己的音量了嗎？<a href="https://apps.apple.com/app/id6772792641">以一次性 €14.99 取得 Mac App Store 上的 SoundDial</a>——沒有訂閱、沒有驅動程式、沒有風險。</p>`,
  },
  "windows-volume-mixer-for-mac": {
    slug: "windows-volume-mixer-for-mac",
    title: "Mac 版 Windows 音量混音器：取得個別應用程式音量控制",
    description: "在你的 Mac 上懷念 Windows 音量混音器？macOS 沒有內建的個別應用程式音量控制。這裡是取得它最快的方式：SoundDial，一款 €14.99 的選單列混音器。",
    date: "2026-07-23",
    readTime: "5 分鐘閱讀",
    content: `<p>macOS 沒有像 Windows 那樣內建的音量混音器，所以你無法從「系統設定」設定個別應用程式音量。最快且可靠的解法是 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>，一款來自 Mac App Store 的 €14.99 選單列應用程式。它讓每個應用程式都擁有自己的音量滑桿、靜音與音量增強——沒有驅動程式、沒有 DMG、沒有有風險的安裝。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac 版 Windows 音量混音器：取得個別應用程式音量控制" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>為什麼 Windows 音量混音器在 Mac 上沒有對等物</h2>

<p>如果你從 Windows 轉過來，你最先會懷念的事情之一就是音量混音器：右鍵點按喇叭圖示，每個運作中的應用程式都有自己的滑桿。把 Chrome 調低、讓 Discord 保持大聲、把 Spotify 靜音——全部在同一個地方。</p>

<p>macOS 就是沒有內建這個。Apple 的音量控制是單一的全系統滑桿。無論你設定什麼音量，都會一次套用到所有東西。「系統設定」裡沒有隱藏的個別應用程式選項，沒有 Terminal 指令，也沒有輔助使用切換開關。這是一個真正的缺口，而且多年來一直如此。</p>

<p>原因在於架構：應用程式透過 CoreAudio 把音訊路由到你的輸出裝置，而 OS 並不為個別串流公開一個面向使用者的混音器。要重現 Windows 的體驗，你需要一款位於那條音訊路徑上的第三方應用程式，提供 Apple 遺漏的控制。</p>

<h2>最接近的對應：SoundDial</h2>

<p>SoundDial 是一款專為此打造的選單列個別應用程式音量混音器。點按它的圖示，你就會得到一份所有正在播放音訊的東西的乾淨清單，每一個都有自己的滑桿。它是你能安裝的最直接的「Mac 版 Windows 音量混音器」，而且它做到了幾件 Windows 混音器從來做不到的事：</p>

<ul>
<li><strong>每個應用程式獨立音量</strong>——核心功能。把 Chrome 設為 40%、Zoom 設為 100%、音樂設為 20%。</li>
<li><strong>個別應用程式靜音</strong>——靜音一個應用程式而不動到其餘的。</li>
<li><strong>個別應用程式音量增強</strong>——當一個應用程式自身的音訊太低時，把它推到 <em>超過</em> 100%。</li>
<li><strong>音量設定檔</strong>——儲存一組混音（例如「工作通話」或「遊戲」）並即時召回，而不必重新拖動滑桿。</li>
<li><strong>自動降音</strong>——當更重要的東西開始時（例如通話），自動降低背景音訊。</li>
<li><strong>快速輸出切換</strong>——從同一個選單在喇叭、耳機與其他裝置之間跳轉。</li>
</ul>

<p>由於它在 <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a> 上，它經過 Apple 審核並沙盒化。它一鍵就能乾淨安裝——沒有 DMG 要拖曳，沒有音訊驅動程式或系統擴充功能要核准，也沒有安全提示。在 €14.99 一次性（沒有訂閱制）之下，它是填補這個缺口最簡單的方式。</p>

<h2>如何在你的 Mac 上設定個別應用程式音量</h2>

<ol>
<li>從 Mac App Store 安裝 SoundDial。</li>
<li>授予它在首次啟動時要求的一次性音訊權限。</li>
<li>點按選單列中的 SoundDial 圖示。</li>
<li>拖動任何應用程式旁邊的滑桿以設定其音量，或按下靜音／音量增強。</li>
<li>可選擇性地把目前的混音儲存為設定檔，這樣你稍後就能還原。</li>
</ol>

<p>這就是整個流程。它的行為就像你已經熟悉的 Windows 混音器，只是從選單列操作，而不是在工作列上右鍵點按。</p>

<h2>SoundDial 與其他選項的比較</h2>

<p>SoundDial 不是這個領域裡唯一的工具，所以這裡誠實地看看替代方案。</p>

<ul>
<li><strong>SoundSource（Rogue Amoeba）</strong>——約 $39，而且真的是專業級的：個別應用程式 EQ、個別應用程式輸出路由、效果。但它需要直接下載外加一個音訊擷取驅動程式，而且如果你只想要個別應用程式音量，它就太過頭（且較貴）。如果你需要 EQ 與路由就選它；如果你想要沒有複雜度或驅動程式的混音器就選 SoundDial。</li>
<li><strong>Background Music</strong>——免費且開源，這很棒。缺點是：它可能在較新的 macOS 版本上失效，而且缺少音量增強、已儲存的設定檔與自動降音。如果你樂於排解開源音訊驅動程式的問題那沒問題；如果你想要就是能用的東西則較不理想。</li>
<li><strong>FineTune</strong>——一款免費開源的選單列應用程式。輕量，如果預算是優先考量值得一看，但你是用精緻度、設定檔與 App Store 安全性去換免費。</li>
<li><strong>eqMac</strong>——一款免費的 EQ 與全系統音量增強器。它首先是一個等化器，而非個別應用程式混音器，所以它解決的是不同的問題。</li>
</ul>

<p>取捨很簡單。免費工具不花錢，但可能脆弱或功能單薄。SoundSource 強大但昂貴且以驅動程式為基礎。SoundDial 位於甜蜜點：一次性 €14.99、App Store 安全性與沙盒化，以及免費選項略過的設定檔 + 自動降音。</p>

<blockquote>如果你想要的只是 Windows 音量混音器的體驗——個別應用程式滑桿、靜音與音量增強，並在數秒內安全安裝——SoundDial 是最直接的對應。</blockquote>

<h2>結論</h2>

<p>macOS 不會給你音量混音器，而且大概永遠不會。但你不必忍受單一的全系統滑桿。一款專用的選單列混音器能還原你在 Windows 上擁有的個別應用程式控制，並在其上加入音量增強、設定檔與自動降音。</p>

<p>準備好用簡單的方式取得個別應用程式音量了嗎？<a href="https://apps.apple.com/app/id6772792641">以 €14.99 取得 Mac App Store 上的 SoundDial</a>——一次性、沙盒化，而且數秒內安裝完成。</p>`,
  },
  "app-volume-like-windows-on-mac": {
    slug: "app-volume-like-windows-on-mac",
    title: "像 Windows 一樣設定應用程式音量——在你的 Mac 上",
    description: "Windows 有個別應用程式音量混音器，但 macOS 沒有。這裡是如何在你的 Mac 上為每個應用程式設定獨立音量——快速、安全、且沒有驅動程式。",
    date: "2026-07-23",
    readTime: "5 分鐘閱讀",
    content: `<p>macOS 沒有像 Windows 那樣內建的個別應用程式音量混音器，所以最快且可靠的解法是 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>，一款 Mac App Store 選單列應用程式，讓每個應用程式都擁有自己的音量滑桿、個別應用程式靜音與音量增強。它沙盒化、經過 Apple 審核、安裝時沒有驅動程式，而且一次性 €14.99。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 像 Windows 一樣設定應用程式音量——在你的 Mac 上" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>為什麼 Windows 能做到而 macOS 不能</h2>
<p>如果你用過 Windows，你懂那套流程：右鍵點按喇叭圖示、開啟音量混音器，然後為 Chrome、Spotify、Discord 以及任何其他正在發出聲音的東西拖動各自的滑桿。它很簡單，而且就是能用。</p>
<p>macOS 從未推出對等物。Apple 的音訊控制是全域的——整個系統只有一個主音量。你可以在某個應用程式內部靜音來源（如果它甚至有控制項），但沒有一個統一的地方讓你說「讓我的音樂維持在 40%，同時讓我的會議維持在 100%」。那個缺口正是第三方混音器存在的原因。</p>

<h2>最快的解法：一款選單列混音器</h2>
<p>最接近 Windows 體驗的是一款會列出你運作中音訊應用程式並為每一個提供滑桿的選單列應用程式。<a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 正是這麼做的。點按選單列中的圖示，你就會得到：</p>
<ul>
<li><strong>每個應用程式獨立音量</strong>——把 Spotify 調低而不動到你的通話。</li>
<li><strong>個別應用程式靜音</strong>——即時靜音一個吵鬧的應用程式，讓其餘的繼續播放。</li>
<li><strong>個別應用程式音量增強</strong>——當一個應用程式自身的最大值仍太小聲時，把它推到 <em>超過</em> 100%。</li>
<li><strong>音量設定檔</strong>——儲存「工作」或「遊戲」混音並一鍵召回。</li>
<li><strong>自動降音</strong>——當更重要的東西開始時，自動降低背景音訊。</li>
<li><strong>快速輸出切換</strong>——從同一個選單在喇叭、耳機與其他輸出之間跳轉。</li>
</ul>
<p>由於它在 Mac App Store 上，它沙盒化並經 Apple 審核，安裝乾淨俐落，沒有 DMG 要拖曳，沒有核心擴充功能，也沒有音訊驅動程式要在「系統設定」中核准。最後那點比聽起來更重要——以驅動程式為基礎的工具正是那些傾向於在 macOS 更新後失效的東西。</p>

<h2>如何設定（約兩分鐘）</h2>
<ul>
<li><strong>1.</strong> 從 Mac App Store 安裝 SoundDial 並啟動它。</li>
<li><strong>2.</strong> 授予 macOS 要求的音訊權限——這正是讓應用程式看見個別應用程式串流的關鍵。</li>
<li><strong>3.</strong> 點按選單列中的 SoundDial 圖示。每個目前正在播放音訊的應用程式都會帶著自己的滑桿出現。</li>
<li><strong>4.</strong> 拖動任何應用程式的滑桿以設定其音量，或按下靜音。當一個應用程式太安靜時，把音量增強到超過 100%。</li>
<li><strong>5.</strong> （可選）把你目前的混音儲存為設定檔，這樣你稍後就能還原；如果你想讓背景音訊自動降低，就開啟自動降音。</li>
</ul>
<p>這就是整個流程。它的行為就像你已經熟悉的 Windows 音量混音器，只是少了設定的摩擦。</p>

<h2>那免費與專業替代方案呢？</h2>
<p>在 Mac 上還有其他取得個別應用程式音量的方式。值得認識它們，好讓你誠實地選擇。</p>
<blockquote>免費工具用金錢換可靠性與功能；專業工具用金錢與設定換你可能不需要的深度。</blockquote>
<p><strong>Background Music</strong> 免費且開源，而且確實提供個別應用程式音量。缺點是：它深入接入音訊系統，並有在較新 macOS 發佈上失效的歷史，而且缺少音量增強、設定檔與自動降音。如果它在你的設定上能用那很好——但跨版本升級是一場賭博。</p>
<p><strong>FineTune</strong> 是一款免費、開源的選單列應用程式，與 SoundDial 精神相同。如果預算是唯一考量，它是不錯的起點，不過它是一個社群專案，沒有設定檔與降音的精緻度。</p>
<p><strong>eqMac</strong> 是一款免費的全系統 EQ 與音量增強器。它非常適合塑造整體聲音，但它不是真正的個別應用程式混音器——你調整的是整個輸出，而非個別應用程式。</p>
<p><strong>SoundSource</strong>（Rogue Amoeba，約 $39）是專業級選項：個別應用程式 EQ、個別應用程式輸出路由，以及嚴肅的音訊工程師功能。它很出色——但它需要直接下載並安裝一個音訊擷取元件，而且成本是 SoundDial 的兩倍多。如果你想要錄音室級的路由與 EQ，它是首選。如果你只想要 Windows 式的混音器，它就太過頭。</p>

<h2>你該選哪一個？</h2>
<p>如果你的目標是「讓我的 Mac 像 Windows 音量混音器一樣運作」而不要下載、驅動程式或風險，SoundDial 是最乾淨的答案。你得到個別應用程式音量、靜音、音量增強、設定檔與自動降音，全部 App Store 安全，只需一次性 €14.99——沒有訂閱制。只有在你特別需要個別應用程式 EQ 與輸出路由時才改選 SoundSource；如果你樂於在 macOS 更新之間排解問題，就試試免費選項。</p>

<p><strong>準備好讓每個應用程式擁有自己的音量了嗎？</strong><a href="https://apps.apple.com/app/id6772792641">取得 Mac App Store 上的 SoundDial</a>，大約兩分鐘就能設定好你的第一組混音。</p>`,
  },
  "make-mac-louder-for-hard-of-hearing": {
    slug: "make-mac-louder-for-hard-of-hearing",
    title: "如何讓你的 Mac 更大聲，以便重聽者聆聽",
    description: "即使在最大音量下也難以聽清 Mac？學習如何為重聽聆聽逐個應用程式增強並清晰化音訊，包括 SoundDial 與內建技巧。",
    date: "2026-07-23",
    readTime: "6 分鐘閱讀",
    content: `<p>如果你的 Mac 即使在最大音量下也不夠大聲，最快且可靠的解法是 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>，一款 Mac App Store 選單列混音器，讓你把任何單一應用程式增強到超過 100%，並把其他一切靜音。這意味著來自 FaceTime、影片或電影播放器的語音更大聲、更清晰，而不必把整個系統音量拉滿。它是 €14.99，一次性。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 如何讓你的 Mac 更大聲，以便重聽者聆聽" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>為什麼把音量滑桿拉滿仍然不夠</h2>
<p>對重聽的聆聽者而言，macOS 音量滑桿有兩個令人沮喪的限制。第一，它以應用程式本身輸出的 100% 為上限。如果播客、影片或通話錄製得很小聲，「全音量」仍然太柔弱。第二，macOS 沒有內建的個別應用程式音量混音器。Windows 多年來一直有，但在 Mac 上每個應用程式共用單一的主音量。所以當你把所有東西調大以聽清一個柔弱的聲音時，背景音樂與通知聲也會變得令人不適地大聲。</p>
<p>你真正需要的能力是：讓 <em>一個</em> 應用程式比其餘的更大聲、把它推過其正常上限，並削減競爭的聲音，好讓語音突出。那正是這些工具填補的缺口。</p>

<h2>首先，使用免費的 macOS 輔助使用設定</h2>
<p>在加入任何應用程式之前，先設定好 macOS 已經提供的東西是值得的。這些有助於清晰度，儘管它們不會增加原始的響度：</p>
<ul>
<li><strong>單聲道音訊：</strong>「系統設定」&rarr;「輔助使用」&rarr;「音訊」，開啟「以單聲道播放立體聲」。如果你一隻耳朵的聽力較強，這會把完整訊號送到兩邊，讓你不會漏掉一半的對白。</li>
<li><strong>平衡調整：</strong>在「系統設定」&rarr;「聲音」中，把左右平衡拖向你較強的那隻耳朵。</li>
<li><strong>減少背景聲音：</strong>在允許的應用程式中降低音樂與環境音，讓聲音不必與配樂搏鬥。</li>
<li><strong>耳機調節：</strong>如果你使用 AirPods 或 Beats，「系統設定」&rarr;「輔助使用」&rarr;「音訊」&rarr;「耳機調節」能放大柔弱的聲音並針對語音調校。</li>
</ul>
<p>這些真的很有用而且完全免費。但它們都無法讓單一安靜的應用程式 <em>大聲超過 100%</em>，而那通常才是真正的問題。</p>

<h2>如何用 SoundDial 把一個應用程式增強到超過 100%</h2>
<p>SoundDial 常駐在你的選單列，並為每個目前正在播放聲音的應用程式顯示一個滑桿。以下是對重聽聆聽最有幫助的流程：</p>
<ul>
<li><strong>增強你正在聆聽的應用程式。</strong>把它的滑桿拖到超過 100%，以放大一個安靜的視訊通話或播客，超過應用程式本身允許的範圍。</li>
<li><strong>靜音或降低其他一切。</strong>把音樂、瀏覽器分頁或通知聲拉下來，讓沒有東西與你想聽清的聲音競爭。</li>
<li><strong>開啟自動降音。</strong>當你在通話中開始說話時，SoundDial 會自動降低其他音訊，讓與你交談的人清晰傳來，之後再還原。</li>
<li><strong>儲存音量設定檔。</strong>建立一個「視訊通話」設定檔，其中你的會議應用程式被增強、其餘一切都很安靜，然後即時切換到它，而不必每次重新調整。</li>
<li><strong>快速切換輸出。</strong>從同一個選單在喇叭、耳機或連接助聽器的裝置之間跳轉，不必翻找「系統設定」。</li>
</ul>
<p>音量增強功能在這裡是關鍵。因為它把應用程式的輸出提高到超過其原生最大值，一段細語般安靜的錄音就變成你真正聽得見的東西，而你系統的其餘部分則維持在舒適的音量。</p>

<h2>關於失真的簡短提醒</h2>
<p>任何軟體音量增強都會放大訊號中的一切，所以把已經很大聲的音訊推到遠超 100% 可能會引入削峰。實務上，把 <em>安靜</em> 的內容增強到舒適、清晰可辨的程度聽起來很乾淨。從溫和開始，提高到語音清晰為止，如果開始變得刺耳就退回一些。保護你僅存的聽力很重要，所以請以清晰度為目標，而非最大響度。</p>

<h2>SoundDial 與替代方案的比較</h2>
<p>你有幾個選項，而誠實有助於你選對那一個：</p>
<ul>
<li><strong>SoundSource（Rogue Amoeba，約 $39）：</strong>真的是專業級的，具備個別應用程式 EQ 與輸出路由。如果你想針對聽力損失雕塑頻率，它很強大。但它的成本是兩倍多，需要直接下載，並安裝一個音訊擷取驅動程式。那對許多人而言是超出所需的設定與系統存取。</li>
<li><strong>Background Music（免費、開源）：</strong>免費提供個別應用程式音量，但缺少音量增強、設定檔與自動降音，而且由於它深入接入音訊系統，可能在較新的 macOS 版本上失效。</li>
<li><strong>FineTune（免費、開源）：</strong>一款輕量的選單列音量應用程式。應付基本需求還行，但沒有重聽聆聽者倚賴的音量增強、設定檔與降音。</li>
<li><strong>eqMac（免費）：</strong>一款帶音量增強器的等化器。對塑造聲音有用，但它是圍繞 EQ 打造，而非乾淨的個別應用程式混音與設定檔。</li>
</ul>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 出眾之處在於價格、安全性，以及在這裡真正重要的特定功能之間的平衡。由於它在 Mac App Store 上，它經過 Apple 審核並沙盒化，安裝乾淨俐落且沒有 DMG，也不需要音訊驅動程式或系統擴充功能。你在一筆 €14.99 一次性購買中，就能得到個別應用程式音量增強、靜音、音量設定檔與自動降音，而且沒有任何東西深入挖進 macOS 音訊堆疊。</p>

<h2>結論</h2>
<p>先設定好免費的 macOS 輔助使用選項，它們值得擁有。但如果真正的問題是某一個應用程式就是太安靜，你就需要一個能把單一應用程式推過 100% 並讓其餘安靜下來的工具。那正是個別應用程式音量增強的全部意義，而 macOS 自己做不到這一點。</p>

<p>準備好真正聽清你的 Mac 了嗎？<a href="https://apps.apple.com/app/id6772792641">以 €14.99 取得 Mac App Store 上的 SoundDial</a>，增強你需要的應用程式，並讓自動降音與設定檔保持語音清晰。</p>`,
  },
  "boost-quiet-apps-mac": {
    slug: "boost-quiet-apps-mac",
    title: "如何在 Mac 上增強安靜的應用程式（超過最大音量）",
    description: "某個應用程式即使在 100% 也太安靜？在 Mac 上用 SoundDial（一款個別應用程式音量混音器）把那個應用程式增強到超過其上限。這裡是最快的解法外加替代方案。",
    date: "2026-07-23",
    readTime: "6 分鐘閱讀",
    content: `<p>如果某個應用程式即使在最大音量下也太安靜，最快且可靠的解法是 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>，一款 macOS 選單列個別應用程式音量混音器。它讓每個應用程式都擁有自己的滑桿，外加一個把單一應用程式推過 100% 的音量 <strong>增強</strong>，讓一個細語般安靜的視訊通話或瀏覽器分頁變大聲，而不必動到你的系統音量。它是 Mac App Store 上一款一次性 €14.99 的應用程式。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 如何在 Mac 上增強安靜的應用程式（超過最大音量）" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>為什麼一個應用程式即使在 100% 也很安靜</h2>
<p>macOS 只有一個主音量。當你把它調大時，所有東西會一起變大聲。但每個應用程式也以自己的內部音量輸出聲音，而那個音量差異極大。一段做得很安靜的 YouTube 短片、一個麥克風不佳的 Zoom 來電者、一款對白混音很低的遊戲，或一個串流很柔弱的瀏覽器分頁，即使你的 Mac 火力全開，都可能遠低於其他一切。</p>
<p>真正的問題是：macOS <strong>沒有內建的個別應用程式音量混音器</strong>。Windows 多年來一直有一個（音量混音器，右鍵點按喇叭圖示）。在 Mac 上，沒有原生的方式在讓其餘部分不變的情況下把一個應用程式調大，更絕對沒有辦法把單一應用程式放大到 <em>超過</em> 其正常最大值。那正是你碰到的缺口。</p>

<h2>最快的解法：只增強那一個應用程式</h2>
<p>個別應用程式混音器透過把自己插入你的應用程式與輸出之間來解決這個問題，因此它能獨立提高或降低每個串流，並把其中一個增強到超過 100%。使用 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>，流程很短：</p>
<ul>
<li>從 Mac App Store 安裝並打開它。它常駐在你的選單列，而非一個浮動視窗。</li>
<li>點按選單列圖示，即可看見每個目前正在播放音訊的應用程式的滑桿。</li>
<li>找到安靜的應用程式，把它的滑桿拖過 100% 以套用音量增強。它只放大那一個應用程式。</li>
<li>其餘一切維持原狀。你的系統音量與其他應用程式都不受影響。</li>
</ul>
<p>由於音量增強是逐個應用程式的，你可以把一個柔弱的視訊通話推到舒適的音量，同時避免音樂或通知變得震耳欲聾。那正是內建的 macOS 控制根本做不到的核心事情。</p>

<h2>關於音量增強與削峰的提醒</h2>
<p>音量增強真的很有用，但它是放大，不是魔法。如果一個應用程式的原始音訊非常安靜或已經失真，用力拉高可能會引入削峰或讓背景嘶聲更明顯。實務上，適度的增強能乾淨地解決絕大多數「這通話太安靜」的情況。把它往上推到應用程式舒適為止，而非把它撞到頂，你就能保持聲音乾淨。</p>

<h2>超越增強：還有什麼有幫助</h2>
<p>一旦你擁有個別應用程式控制，有幾項功能能讓安靜應用程式的問題永久消失：</p>
<ul>
<li><strong>音量設定檔</strong>——儲存一組設定（例如「增強 Zoom、降低 Spotify、靜音 Slack」）並一鍵召回，而不必每次會議都重新拖動滑桿。</li>
<li><strong>自動降音</strong>——當所選應用程式播放時，自動降低其他應用程式，讓一個被增強的通話清晰蓋過背景音訊。</li>
<li><strong>個別應用程式靜音</strong>——靜音一個吵鬧的應用程式而不暫停其他任何東西。</li>
<li><strong>快速輸出切換</strong>——從同一個選單在喇叭、耳機或外接介面之間跳轉。</li>
</ul>

<h2>那免費與專業替代方案呢？</h2>
<p>你有選項，而誠實在這裡很重要，所以這裡是真實的局面。</p>
<p><strong>SoundSource</strong>（Rogue Amoeba）是約 $39 的專業級選擇。它提供個別應用程式音量外加個別應用程式 EQ 與完整輸出路由，比大多數人所需的更強大。取捨：它的成本是兩倍多，它是直接下載而非 App Store，而且它安裝一個音訊擷取驅動程式來完成工作。如果你想要一套音訊工程師的工具組，它很出色。如果你只想要一個應用程式更大聲，它就太過頭。</p>
<p><strong>Background Music</strong> 免費且開源，並能做基本的個別應用程式音量。但它是一個社群專案，有在較新 macOS 版本上失效的歷史，而且缺少超過 100% 的音量增強、設定檔與自動降音。如果免費是唯一的要求而且你不介意偶爾失效，它很棒。</p>
<p><strong>FineTune</strong> 是一款免費開源的選單列應用程式，而 <strong>eqMac</strong> 是一款免費的 EQ 與系統音量增強器。如果你的預算是零，兩者都值得一試。只要知道它們是社群維護的、偏 EQ 或在個別應用程式管理上較輕，而且不會把設定檔加上降音打包在一個精緻的套件裡。</p>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 落腳的位置：它是中間路線。比 SoundSource 便宜，比免費工具更有能力且更可靠，而且它在 <strong>Mac App Store</strong> 上，這意味著經過 Apple 審核、沙盒化，並且安裝乾淨俐落，<strong>沒有 DMG，也沒有音訊驅動程式或擴充功能</strong>要栓進你的系統。對大多數人而言，誠實的建議很簡單：如果你想要最少麻煩、同時又提供音量增強、設定檔與自動降音的解法，它是最划算的選擇，€14.99 一次性。</p>

<h2>快速答案，重述</h2>
<blockquote>要讓一個 Mac 應用程式大聲超過其最大值，使用一款帶音量增強的個別應用程式音量混音器。從選單列打開 SoundDial，找到安靜應用程式的滑桿，並把它拖過 100%。只有那個應用程式會變大聲。</blockquote>

<p>別再為你整台 Mac 對抗單一的音量滑桿了。<a href="https://apps.apple.com/app/id6772792641">以 €14.99 一次性取得 Mac App Store 上的 SoundDial</a>，數秒內把那個安靜的應用程式增強到超過其上限，並儲存一個設定檔，讓你再也不必為它費神。</p>`,
  },
  "amplify-quiet-video-podcast-audio-mac": {
    slug: "amplify-quiet-video-podcast-audio-mac",
    title: "如何在你的 Mac 上放大安靜的影片與播客",
    description: "有些 YouTube 影片、播客與講座即使在 100% 也就是太安靜。這裡是如何在 macOS 上用 SoundDial 把個別應用程式音量增強到超過最大值。",
    date: "2026-07-23",
    readTime: "6 分鐘閱讀",
    content: `<p>最快且可靠的解法是 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>，一款 Mac App Store 選單列混音器，讓每個應用程式都擁有自己的音量滑桿，以及一個真正推過 100% 的 <strong>音量增強</strong>。打開你的瀏覽器或播客播放器，把它的滑桿拖到超過最大值，一個安靜的影片或講座就立即變大聲——沒有驅動程式，不必重新啟動。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 如何在你的 Mac 上放大安靜的影片與播客" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>為什麼有些影片與播客就是太安靜</h2>
<p>你把 Mac 拉到 100%，訪談卻仍然像耳語。這不是你的錯覺。音訊以差異極大的響度層級製作母帶——一場用筆電麥克風錄製的網路研討會、一個安靜的獨立播客，或一段老舊的講座上傳，可能比專業製作的 YouTube 影片低 15–20 dB。你的系統音量已經拉滿，所以沒有餘裕可以再給。</p>
<p>問題來了：macOS <strong>沒有內建的個別應用程式音量混音器</strong>。Windows 多年來一直有一個（系統匣中的音量混音器），但在 Mac 上，音量鍵移動的是所有東西共用的一個全域音量。沒有原生的方式說「只把這個瀏覽器分頁調大」——更別提把單一應用程式推過 100%。</p>

<h2>真正的解法：個別應用程式音量增強</h2>
<p>要讓一個安靜的來源大聲到超過你喇叭正常允許的程度，你需要能對 <em>那個特定應用程式</em> 施加增益、並能放大到超過 100% 上限的軟體。那正是一款帶音量增強功能的個別應用程式混音器所做的事。</p>
<p>使用 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>，每個運作中的應用程式都會出現在選單列清單中，帶著自己的滑桿。把一個安靜的應用程式滑到 150% 或 200%，音訊就會即時放大。由於音量增強是逐個應用程式的，其他一切——你的音樂、通知、另一個視窗中的通話——都維持在正常音量。你不必為了聽清一個柔弱的播客而轟炸你的整個系統。</p>
<blockquote>全域音量問的是「這台 Mac 有多大聲？」個別應用程式混音器問的是「<em>這個</em> 應用程式有多大聲？」——當一個影片很安靜而其餘都正常時，那才是真正重要的問題。</blockquote>

<h2>如何逐步增強一個安靜的影片或播客</h2>
<ul>
<li><strong>安裝 SoundDial</strong>，從 Mac App Store。它沙盒化並經 Apple 審核，因此像任何其他應用程式一樣乾淨安裝——沒有另外的下載、沒有音訊驅動程式、沒有一連串的權限關卡。</li>
<li><strong>開始播放</strong>那個安靜的影片、播客集數或講座，用你使用的任何應用程式——Safari、Chrome、播客用戶端、VLC。</li>
<li><strong>點按 SoundDial 圖示</strong>，在你的選單列中。你會看見每個目前正在發出聲音的應用程式的滑桿。</li>
<li><strong>把那個應用程式的滑桿拖到超過 100%</strong>——先試 150%，如果仍太柔弱就再往上推。變化是即時的。</li>
<li><strong>其餘一切不要動。</strong>只有你增強的應用程式會變大聲；你的系統維持平衡。</li>
</ul>
<p>如果你發現自己每天都在增強同樣的應用程式——例如一個播客播放器與你的瀏覽器——你可以把那套設定儲存為一個 <strong>音量設定檔</strong>，並一鍵召回，而不必每次重新調整。</p>

<h2>關於增強的一句警告</h2>
<p>放大超過 100% 會加入增益，而增益有其限度。把一段非常安靜、低品質的錄音推得夠用力，你可能會聽見削峰或失真——那是來源的乾淨訊號用盡了，而非應用程式的瑕疵。增強到舒適可聽為止，如果開始聽起來刺耳就退回一些。在內建筆電喇叭上，極端的增強也可能使單體吃力，所以在那裡要比在好耳機或外接喇叭上更溫和。</p>

<h2>那免費或內建選項呢？</h2>
<p>你有替代方案，而誠實看待它們是值得的：</p>
<ul>
<li><strong>系統音量 + 應用程式層級滑桿。</strong>有些播放器（VLC、少數透過擴充功能的瀏覽器）讓你增強它們自己的音訊。如果你只在一個應用程式裡需要它那還行——但你被卡在得分別設定每個應用程式，沒有統一的控制、也沒有設定檔。</li>
<li><strong>eqMac</strong> 是一款免費的 EQ 與音量增強器。它能提高全系統的響度，但它是一個全域工具，而非乾淨的個別應用程式混音器，並且在整個輸出層級運作。</li>
<li><strong>Background Music</strong> 免費且開源，而且確實提供個別應用程式音量。但它依賴一個可能在較新版本 macOS 上失效的音訊擷取設定，而且缺少專用的音量增強、設定檔與自動降音。</li>
<li><strong>FineTune</strong> 是一款免費開源的選單列應用程式——如果你想要基本功能且不介意社群維護的軟體，它是輕量的選項。</li>
<li><strong>SoundSource</strong> 由 Rogue Amoeba 出品（約 $39）是專業級重量選手：個別應用程式 EQ、輸出路由，應有盡有。它也需要下載並安裝一個音訊擷取驅動程式，而且成本是 SoundDial 的兩倍多。如果你想要的只是讓安靜的音訊變大聲，它就太過頭。</li>
</ul>

<h2>為什麼 SoundDial 是務實的選擇</h2>
<p>SoundDial 正好落在這個問題的甜蜜點。它是 <strong>€14.99 一次性</strong>——沒有訂閱制——而且它在 <strong>Mac App Store</strong> 上，這意味著它沙盒化、經 Apple 審核，並且不需任何 DMG 或系統擴充功能要信任就能安裝。你得到你真正為之而來的個別應用程式音量增強，外加設定檔、個別應用程式靜音、快速輸出切換，以及在你需要專注於一個來源時降低其他應用程式的 <strong>自動降音</strong>。它把「變大聲」這件事做得簡單，其餘的也做得很好。</p>

<p><strong>厭倦了費力聽清安靜的影片與播客嗎？</strong><a href="https://apps.apple.com/app/id6772792641">以 €14.99 取得 Mac App Store 上的 SoundDial</a>，讓每個應用程式擁有自己的音量——並用音量增強清晰聽見任何東西。</p>`,
  },
  "set-different-volume-for-each-app-mac": {
    slug: "set-different-volume-for-each-app-mac",
    title: "如何在 Mac 上為每個應用程式設定不同的音量",
    description: "macOS 沒有內建的個別應用程式音量混音器。這裡是如何使用 SoundDial 與替代方案，在 Mac 上為每個應用程式設定獨立、持久的音量層級。",
    date: "2026-07-23",
    readTime: "5 分鐘閱讀",
    content: `<p>macOS 沒有內建的方式為每個應用程式設定不同的音量，所以你需要一款選單列音量混音器。最快、最可靠的解法是 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>，一款 Mac App Store 應用程式，讓每個應用程式都擁有自己的音量滑桿、個別應用程式靜音，以及把安靜應用程式推過 100% 的音量增強。設定一次音量，它們就會維持不變。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 如何在 Mac 上為每個應用程式設定不同的音量" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>為什麼 Mac 沒有個別應用程式音量控制</h2>
<p>如果你從 Windows 轉過來，你大概去找過 Windows 音量混音器的對等物，就是那個每個應用程式都有自己滑桿的小面板。它不在那裡。macOS 只提供一個全域系統音量。無論是 YouTube 影片、Zoom 通話、Spotify 還是遊戲，它們全都共用同一個主音量。</p>
<p>那在沒出問題前都還好。Discord 聊天蓋過你的音樂。瀏覽器廣告以全音量轟炸，而你的播客在底下安靜地播放。你的遊戲震耳欲聾，但背景中的語音通話太柔弱。Apple 給你的唯一「解法」是打開每個應用程式並手動調整它的內部音量——如果那個應用程式甚至有的話——而且每次工作階段都要重做。</p>
<p>要取得真正的個別應用程式控制，你需要一個位於你的應用程式與輸出裝置之間的小工具。以下是如何正確地做這件事，外加對替代方案的誠實說明。</p>

<h2>最快的方式：SoundDial（Mac App Store）</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 常駐在你的選單列，並列出每個目前正在播放音訊的應用程式。每一個都有獨立的滑桿。以下是整個流程：</p>
<ul>
<li><strong>從 Mac App Store 安裝。</strong>它經過 Apple 審核並沙盒化，所以沒有 DMG、沒有音訊驅動程式，也沒有核心或系統擴充功能要核准。它像任何一般應用程式一樣安裝，也能以同樣方式移除。</li>
<li><strong>點按選單列圖示。</strong>你會看見每個作用中應用程式的滑桿，外加一個主控制。</li>
<li><strong>拖動以設定音量。</strong>把 Discord 調低、把 Spotify 往上推、一鍵把吵鬧瀏覽器分頁的應用程式完全靜音。</li>
<li><strong>增強安靜的應用程式。</strong>如果一個應用程式即使在 100% 也太柔弱，用個別應用程式音量增強把它推過 100%。</li>
<li><strong>儲存一個設定檔。</strong>儲存你的「遊戲」、「工作通話」或「音樂」混音，並在它們之間即時切換，而不必每天重新拖動滑桿。</li>
</ul>
<p>有兩項功能值得特別提出，因為它們解決了最惱人的情境：</p>
<ul>
<li><strong>自動降音</strong>會在所選應用程式播放時自動降低其他應用程式，所以來電時你的音樂降下來、之後再還原，不必手動擺弄。</li>
<li><strong>快速輸出切換</strong>讓你從同一個選單在耳機與喇叭之間跳轉，不必深入「系統設定」。</li>
</ul>
<p>由於音量是逐個應用程式記住並儲存進設定檔，這正是大多數人真正想要的部分：你設定一次，它就 <em>維持</em> 設定好的狀態。</p>

<h2>免費與付費替代方案，誠實比較</h2>
<p>SoundDial 不是唯一的選項，而且視你的需求而定，一個免費工具或許就夠了。這裡是公平的概覽。</p>

<h2>SoundSource（Rogue Amoeba）</h2>
<p>SoundSource 是專業級重量選手。除了個別應用程式音量之外，它還做個別應用程式 EQ 與完整輸出路由，所以你能把一個應用程式送到耳機、另一個送到喇叭。它真的很出色。取捨：它的成本大約 $39，而且它不是乾淨的 App Store 安裝，而是需要把一個音訊擷取驅動程式加入你系統的直接下載。如果你是需要 EQ 與路由的音訊專業人士，它值得。如果你只想讓每個應用程式維持在正確的音量，它比你所需的更多工具、也更多設定。</p>

<h2>Background Music（開源、免費）</h2>
<p>Background Music 是一款免費、開源的應用程式，提供個別應用程式音量與自動暫停。缺點是可靠性：它安裝一個虛擬音訊裝置，並有在較新 macOS 發佈上失效的歷史，有時在更新後需要重新安裝或修正。它也缺少音量增強、已儲存的設定檔與真正的自動降音。如果你想要免費且不介意偶爾維護，它很棒。</p>

<h2>FineTune 與 eqMac</h2>
<p>FineTune 是一款免費、開源的選單列應用程式，一個輕量的起點。eqMac 是一款帶全系統音量增強器的免費等化器，更著重於 EQ 與整體增益，而非給每個應用程式自己的持久滑桿。如果你的需求很窄，兩者都值得一試，但都不是圍繞「每個應用程式不同音量、儲存為設定檔」這種流程打造的。</p>

<h2>你該選哪一個？</h2>
<ul>
<li><strong>想要它就是能乾淨運作，帶設定檔與自動降音？</strong>SoundDial，€14.99 一次性，來自 App Store，沒有驅動程式要安裝。</li>
<li><strong>需要個別應用程式 EQ 與音訊路由，而且不介意價格或驅動程式？</strong>SoundSource。</li>
<li><strong>想要免費，而且在 macOS 更新時願意折騰？</strong>Background Music、FineTune 或 eqMac。</li>
</ul>
<p>SoundDial 真正的優勢在於這個組合：每個應用程式的獨立音量、靜音與音量增強，儲存進可切換的設定檔，加上自動降音，全部在一個你能信任並一鍵解除安裝的沙盒化 App Store 下載裡，只需一次性 €14.99，而非訂閱制。</p>

<blockquote>沒有驅動程式、沒有擴充功能、沒有 DMG。把每個應用程式的音量設定一次、儲存為設定檔，然後讓自動降音處理其餘的。</blockquote>

<p>準備好讓每個應用程式擁有自己的音量了嗎？<a href="https://apps.apple.com/app/id6772792641">取得 Mac App Store 上的 SoundDial</a>，大約一分鐘就能設定好你完美的混音。</p>`,
  },
  "make-one-app-quieter-than-the-rest-mac": {
    slug: "make-one-app-quieter-than-the-rest-mac",
    title: "在 Mac 上讓一個應用程式比其他所有東西更安靜",
    description: "一個吵鬧的應用程式在你的 Mac 上蓋過其餘一切？這裡是最快、可靠的方式，在不動到其他應用程式的情況下調低單一應用程式的音量。",
    date: "2026-07-23",
    readTime: "5 分鐘閱讀",
    content: `<p>要在其餘一切維持原狀的情況下調低一個應用程式，使用 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>，一款 macOS 選單列個別應用程式音量混音器。打開它、在清單中找到那個吵鬧的應用程式，並把它的滑桿拖下來。那個應用程式立即變安靜，而你的音樂、通話與其他音訊則保持各自的音量。它是最快、最可靠的解法。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 在 Mac 上讓一個應用程式比其他所有東西更安靜" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>為什麼 macOS 讓這件事如此困難</h2>

<p>令人沮喪的事實是：macOS 沒有內建的個別應用程式音量混音器。Windows 多年來一直有一個（右鍵點按音量圖示、開啟音量混音器，搞定），但在 Mac 上，音量鍵與選單列滑桿只控制一件事：主輸出。把它調低，所有東西就一起變安靜。把它調高，那個吵鬧的應用程式仍然吵鬧，只是連同其餘一起更大聲。</p>

<p>所以當一款遊戲的音效在轟炸、一個瀏覽器分頁在自動播放廣告，或通知叮噹聲不斷蓋過你的播客時，你唯一的原生選項都很笨拙：靜音整個系統、深入每個應用程式自己的音量設定（如果它甚至有的話），或完全結束那個罪魁禍首。這些都無法讓你單純地說「把這一個應用程式調安靜，其餘一切不要動」。</p>

<h2>快速解法：一款個別應用程式音量混音器</h2>

<p>個別應用程式音量混音器為每個運作中的應用程式提供自己的獨立滑桿。那正是你缺少的控制。使用 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>，它看起來像這樣：</p>

<ul>
<li><strong>打開選單列混音器。</strong>點按 SoundDial 圖示，你就會看見每個目前正在播放音訊的應用程式的即時清單。</li>
<li><strong>找到那個吵鬧的。</strong>遊戲、瀏覽器、視訊通話、通知聲，無論是什麼在蓋過其餘的。</li>
<li><strong>把它的滑桿拖下來。</strong>設為 40%、20%，或任何感覺平衡的地方。變化是即時的，而且只影響那個應用程式。</li>
<li><strong>其餘一切不要動。</strong>你的音樂播放器、你的通話、你的其他分頁，它們全都保持你為它們設定的音量。</li>
</ul>

<p>你也可以一鍵完全靜音單一應用程式，同時讓其他的繼續播放，或在一個應用程式太柔弱時把它增強到超過 100%。不必重新啟動應用程式，不必翻找選單。</p>

<h2>這能救你的常見情況</h2>

<ul>
<li><strong>一款吵鬧的遊戲蓋過背景音樂。</strong>把遊戲降到舒適的音量，並讓你的播放清單在底下維持全音量。</li>
<li><strong>瀏覽器廣告與影片突然飆高。</strong>把你的瀏覽器釘在較低的音量，讓突如其來的自動播放永遠不會轟炸你。</li>
<li><strong>通知叮噹聲蓋過通話或播客。</strong>調低那個通知繁多的應用程式，而不靜音你真正在乎的音訊。</li>
<li><strong>一個安靜的視訊通話埋在吵鬧的媒體之下。</strong>與其把吵鬧的應用程式調低，不如把通話增強到超過 100%，好讓你清楚聽見人們。</li>
</ul>

<h2>用音量設定檔與自動降音一次搞定</h2>

<p>修好一個吵鬧的應用程式很不錯，但你大概想要它維持修好的狀態。SoundDial 有兩項功能能讓這件事變得永久：</p>

<p><strong>音量設定檔</strong>讓你儲存一組個別應用程式音量並一鍵召回。建立一個「遊戲」設定檔，其中遊戲坐落在 30%、音樂在 100%，以及一個「工作」設定檔，其中通話被增強、其他一切被調低。切換情境而不必每次重新拖動滑桿。</p>

<p><strong>自動降音</strong>會在所選應用程式播放時自動降低其他應用程式，之後再把它們帶回來，所以一個吵鬧的應用程式一開始就永遠不會完全劫持你的音訊。在設定檔、降音與快速輸出切換（在喇叭與耳機之間跳轉而不必開啟「系統設定」）之間，你把你的平衡設定一次，就不必再照顧音量。</p>

<h2>SoundDial 與替代方案的比較</h2>

<p>在 Mac 上還有其他取得個別應用程式音量的方式。這裡是誠實的一瞥：</p>

<ul>
<li><strong>SoundSource（Rogue Amoeba，約 $39）</strong>真的是專業級的：在音量控制之上還有個別應用程式 EQ 與完整輸出路由。但它的成本是兩倍多，而且需要一個獨立的下載外加一個音訊擷取驅動程式。如果你想要一套錄音室級的工具組，它很出色。如果你只想調低一個應用程式，它比你所需的更多。</li>
<li><strong>Background Music</strong> 免費且開源，這很棒，但它可能在較新的 macOS 版本上失效，而且缺少音量增強、設定檔與自動降音。</li>
<li><strong>FineTune</strong> 是一款免費開源的選單列應用程式，而 <strong>eqMac</strong> 是一款帶音量增強器的免費 EQ。如果免費是你的優先考量，兩者都值得一試，但你是用精緻度、可靠性與功能去換價格。</li>
</ul>

<p>SoundDial 位於甜蜜點：€14.99 一次性，沒有訂閱制。由於它在 Mac App Store 上，它經過 Apple 審核並沙盒化，並且安裝乾淨俐落，沒有 DMG、沒有音訊驅動程式，也沒有系統擴充功能要核准。你得到對這個問題真正重要的功能，個別應用程式音量、靜音、音量增強、設定檔與自動降音，而沒有 $39 的價格標籤或一個脆弱的免費工具。</p>

<h2>結論</h2>

<p>macOS 不會讓你單獨調低一個應用程式，但那是一個你能在數秒內填補的缺口。安裝一款個別應用程式混音器、把那個吵鬧應用程式的滑桿拖下來，你其餘的音訊就會維持在你想要的位置。儲存一個設定檔，你就再也不必為這件事奮戰。</p>

<p><strong>準備好讓那個不斷蓋過其餘的應用程式安靜下來了嗎？</strong>以 €14.99 取得 <a href="https://apps.apple.com/app/id6772792641">Mac App Store 上的 SoundDial</a>，一次付款，沒有驅動程式，沒有訂閱制。</p>`,
  },
  "streaming-audio-mixer-mac-mic-game-music": {
    slug: "streaming-audio-mixer-mac-mic-game-music",
    title: "給實況主的 Mac 音訊混音器：平衡麥克風、遊戲與音樂",
    description: "在 Mac 上實況時平衡麥克風、遊戲音效、音樂與提示音的最快方法。SoundDial 為你提供一款具備設定檔與自動降音的每應用程式音量混音器。",
    date: "2026-07-23",
    readTime: "6 分鐘閱讀",
    content: `<p>要在 Mac 上實況時平衡你的麥克風、遊戲、音樂與提示音，最快又可靠的解決方案是 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>，一款選單列的每應用程式音量混音器。macOS 沒有內建混音器，因此 SoundDial 讓你為每個應用程式設定獨立音量、增強過於安靜的音源、儲存實況設定檔，並在你說話時自動降低音樂。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 給實況主的 Mac 音訊混音器：平衡麥克風、遊戲與音樂" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>問題所在：macOS 沒有每應用程式音量控制</h2>
<p>Windows 多年來一直有「音量混合器」。macOS 至今仍未提供。你的系統音量滑桿會一次調整所有東西，這在你直播時毫無用處。實況期間你至少要同時處理四種爭奪同一輸出的音源：</p>
<ul>
<li><strong>你的聲音／麥克風監聽</strong> — 必須高於一切。</li>
<li><strong>遊戲音效</strong> — 響亮、動態，而且在動作場面容易突然飆高。</li>
<li><strong>背景音樂</strong> — 應該保持在你的旁白之下輕聲播放。</li>
<li><strong>提示音與聊天音效</strong> — Discord、Stream Deck、追隨者提示、通知。</li>
</ul>
<p>沒有每應用程式控制，你只能靠遊戲內建的滑桿、手動靜音 Spotify，並祈禱一段響亮的過場動畫不會震爆你的觀眾。那不是混音，而是損害控制。</p>

<h2>一款合格的實況混音器該做到什麼</h2>
<p>Mac 上以創作者為中心的音訊設定應提供四件事：獨立的每應用程式音量、增強過於安靜音源的能力、可立即叫回的已儲存設定，以及讓音樂在你一開口就自動降低的自動降音。SoundDial 從選單列就涵蓋了這四項。</p>

<h3>1. 每個應用程式的獨立音量</h3>
<p>將遊戲設為 60%、音樂 25%、Discord 80%、瀏覽器 40% — 每個應用程式都有自己的滑桿。彼此互不干擾。你也可以在某個音源在實況中出狀況時立即單獨靜音，而無須動到該應用程式本身。</p>

<h3>2. 為安靜音源提供音量增強</h3>
<p>有些應用程式與遊戲即使在 100% 也就是太安靜。SoundDial 的每應用程式增強能將某個音源推過它的正常上限，讓含糊不清的遊戲或低音量影片落在你混音中所需的位置 — 無需重新編碼、無需外掛。</p>

<h3>3. 為不同場景設計的音量設定檔</h3>
<p>這是最能替實況主省時的功能。你的「純聊天」混音（音樂大、遊戲小）不同於你的「首領戰」混音（遊戲大、音樂幾近無聲），也不同於你的「馬上回來」混音。將每一種儲存成設定檔，只需一鍵切換，而不必在直播中拉動四個滑桿。</p>

<h3>4. 讓音樂在你聲音之下自動降音</h3>
<p>自動降音會在你說話時自動降低背景音訊，並在你停下時把它調回來。對單人實況主而言，這是旁白清晰與音樂不斷淹沒你聲音之間的差別 — 由系統自動處理，而非手動操作。</p>

<h2>OBS 的定位在哪</h2>
<p>OBS 是你的直播工具，不是你的桌面音量混音器。OBS 透過它的音訊混音器面板與濾鏡控制進入串流的音量，但它是從它擷取到的音源運作 — 它無法伸進個別 macOS 應用程式並在系統層級把它們調低。在 Mac 上，把乾淨的每應用程式桌面音訊送進 OBS 一直是最痛苦的部分。</p>
<p>實際的工作流程是：用 SoundDial 在你的 Mac 上設定實際的每應用程式音量，讓輸出的內容已經平衡好，然後讓 OBS 擷取並微調直播音量。在源頭把混音設定好一次，OBS 要對付的就少多了。SoundDial 的快速輸出切換也讓你在場景之間無須潛入「系統設定」就能在耳機與喇叭間切換。</p>

<h2>SoundDial 與替代方案的比較</h2>
<p>你有選擇，而誠實很重要：</p>
<ul>
<li><strong>SoundSource（Rogue Amoeba，約 $39）</strong> — 專業級，具備每應用程式 EQ 與完整輸出路由。它很出色，但價格貴了一倍多，需要直接下載，還會安裝一個音訊擷取驅動程式。若你主要需要的是乾淨的每應用程式音量、增強與降音，那就是殺雞用牛刀。</li>
<li><strong>Background Music（免費、開源）</strong> — 確實實用且免費，但在較新的 macOS 版本上可能故障，而且沒有增強、沒有設定檔、沒有自動降音 — 正是實況主倚賴的那些功能。</li>
<li><strong>FineTune（免費、開源的選單列應用程式）</strong> — 輕量的每應用程式控制，但是個社群專案，沒有為直播打造的設定檔加降音組合。</li>
<li><strong>eqMac（免費 EQ ＋ 增強）</strong> — 適合調整音色與增強音量，但它是等化器，不是每應用程式的實況混音器。</li>
</ul>
<p>SoundDial 的切入角度：它是 <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a> 上的<strong>一次性 €14.99</strong> 購買 — 經 Apple 審核、沙盒化，安裝乾淨俐落，沒有 DMG，也沒有音訊驅動或系統擴充。最後這點對實況主很重要：越少內核層級的元件，就越少在你開播前一晚 macOS 更新時突然出狀況。</p>

<h2>誠實的取捨</h2>
<p>若你需要廣播級的 EQ 與複雜的路由鏈，SoundSource 值那個價。若你想要一個免費的可折騰工具，且不介意偶爾故障，Background Music 或 FineTune 就夠用。但若你想要直播真正需要的混音 — 每應用程式音量、增強、已儲存的場景設定檔與自動降音 — 而且來自能挺過 macOS 更新的安全 App Store 安裝，那麼以這個價位而言，SoundDial 是最直接的途徑。</p>

<p><strong>準備好修正你的實況音訊了嗎？</strong>到 <a href="https://apps.apple.com/app/id6772792641">Mac App Store 取得 SoundDial</a>，售價 €14.99 — 一次設定好你的麥克風、遊戲、音樂與提示音量，儲存成設定檔，並讓自動降音把你的聲音保持在最上層。</p>`,
  },
  "macos-tahoe-audio-crackling-popping-fix": {
    slug: "macos-tahoe-audio-crackling-popping-fix",
    title: "如何修正 macOS Tahoe 上的音訊爆音與劈啪聲",
    description: "更新到 macOS Tahoe 26 後出現劈啪或爆音？透過比對取樣率、重設 CoreAudio、檢查你的 Bluetooth 編解碼器，以及清除外掛衝突來修正它。以下是完整的排查順序。",
    date: "2026-07-23",
    readTime: "6 分鐘閱讀",
    content: `<p>更新到 macOS Tahoe 26 後出現劈啪與爆音，幾乎總是取樣率不符、不穩定的 Bluetooth 編解碼器協商，或卡住的 CoreAudio 程序。修正方法是在「音訊 MIDI 設定」中比對輸出取樣率、重設 <code>coreaudiod</code>、忘記並重新配對 Bluetooth 耳機，以及結束音訊外掛主機。請依照下方的順序逐一處理。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 如何修正 macOS Tahoe 上的音訊爆音與劈啪聲" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>先從最省事的修法開始</h2>

<p>在你動任何技術性設定之前，先排除這兩件能在一分鐘內解決多數情況的事：</p>

<ul>
<li><strong>重新啟動 Mac。</strong>Tahoe 更新出乎意料地常讓音訊常駐程式處於半遷移狀態。乾淨重開機會從頭重新載入 CoreAudio，並清除大部分更新後的劈啪聲。</li>
<li><strong>拔除並重新插上輸出裝置。</strong>如果是 USB DAC、擴充座或音訊介面，將它拔掉、等幾秒再接回。也試試不同的 USB 埠，最好直接接在 Mac 上而非透過集線器。會傳遞音訊的集線器與顯示器是常見的爆音來源。</li>
</ul>

<p>如果重開機後噪音仍在，那是設定問題，不是暫時性小故障。繼續往下。</p>

<h2>比對取樣率（最常見的原因）</h2>

<p>經典的 Tahoe 劈啪聲來自你裝置想要的取樣率與 macOS 送出的取樣率不符。當某個應用程式播放 44.1 kHz 音訊而系統鎖定在 48 kHz（或反之），重新取樣就可能卡頓或爆音。</p>

<ul>
<li>開啟<strong>音訊 MIDI 設定</strong>（在「應用程式 → 工具程式」中，或用 Spotlight 搜尋）。</li>
<li>在左側邊欄選取你的輸出裝置。</li>
<li>查看<strong>格式</strong>下拉選單。試著將它設為 <strong>48000.0 Hz、2ch-24bit Integer</strong> 並測試。</li>
<li>如果劈啪聲持續，切換到 <strong>44100.0 Hz</strong> 再測一次。</li>
<li>對於音訊介面，確認取樣率與你 DAW 的專案取樣率一致。</li>
</ul>

<p>切換格式也會強制 CoreAudio 重新協商連線，這一點本身在許多情況下就能修好問題，即使你最後又設回同一個數值。</p>

<h2>重設 CoreAudio</h2>

<p>CoreAudio 以名為 <code>coreaudiod</code> 的背景常駐程式運行。在一次重大 macOS 更新後，它可能保留過時的裝置狀態。重新啟動它很安全，且立即生效，無需重開機。</p>

<p>開啟 Terminal 並執行：</p>

<blockquote><p><code>sudo killall coreaudiod</code></p></blockquote>

<p>系統提示時輸入你的密碼。你的音訊會中斷一秒，接著常駐程式會自動以乾淨狀態重新啟動。對於在更新前一切正常、卻突然無故出現的劈啪聲，這是最有效的單一修法。</p>

<h2>檢查你的 Bluetooth 耳機與編解碼器</h2>

<p>如果劈啪聲只發生在 AirPods 或其他 Bluetooth 耳機上，問題通常是編解碼器協商，而非你的喇叭。當連線壅塞或當 macOS 切入低頻寬的通話模式時，無線音訊品質會下降。</p>

<ul>
<li><strong>忘記並重新配對裝置。</strong>前往「系統設定 → 藍牙」，移除耳機，然後再次配對。這會重設協商出的編解碼器。</li>
<li><strong>留意通話模式的降級。</strong>當某個應用程式開啟麥克風時，macOS 會把 Bluetooth 耳機切換到低品質的雙向設定檔，聽起來就會很粗糙。結束你沒在用的視訊會議與語音應用程式，音質就會恢復。</li>
<li><strong>減少干擾。</strong>遠離擁擠的 2.4 GHz 環境，並斷開你不需要的 Bluetooth 裝置。繁忙的無線頻段會產生間歇性的爆音。</li>
<li>如果你只需要聆聽，就在某個應用程式的設定中<strong>關閉麥克風輸入</strong>，讓 macOS 維持高品質的播放設定檔。</li>
</ul>

<h2>結束音訊外掛主機與虛擬驅動程式</h2>

<p>會安裝系統擴充或虛擬裝置的第三方音訊軟體，是作業系統大版本升級後常見的元凶，因為內核與音訊擴充往往需要針對新的 macOS 版本更新。可疑對象包括虛擬音訊路由器、等化器應用程式、迴路（loopback）工具，以及較舊的驅動程式式工具。</p>

<ul>
<li>結束任何等化器、音訊路由或迴路應用程式，測試劈啪聲是否停止。</li>
<li>檢查「系統設定 → 一般 → 登入項目與擴充功能」中是否有可能需要更新或移除的音訊擴充。</li>
<li>將那些應用程式更新到相容 Tahoe 的版本，或解除安裝你不再使用的。堆疊的音訊驅動程式在重大更新後經常互相衝突。</li>
</ul>

<p>如果結束其中一個應用程式讓爆音消失，你就找到元凶了。重新安裝目前版本，或乾脆保持關閉。</p>

<h2>縮小範圍：全系統還是單一應用程式？</h2>

<p>釐清噪音是到處都有，還是只在特定軟體發生。播放一個本機音訊檔，再播放瀏覽器影片，然後是音樂應用程式。如果只有一個應用程式劈啪作響，修正之道在那個應用程式自己的音訊設定或更新，而非 macOS。如果是全系統的，答案就在上述步驟裡。</p>

<p>當你仍卡關時，開機進入安全模式（在 Apple 晶片上按住電源按鈕，接著按住 Shift 選擇你的啟動磁碟）。安全模式不會載入任何第三方擴充。如果那裡的音訊乾淨，那就是某個登入項目或驅動程式在作怪，你可以逐一重新啟用來找出它。</p>

<h2>一旦你的音訊乾淨了</h2>

<p>劈啪聲是驅動程式與取樣率的問題，所以上面的修法才是真正能解決它的方法。但一旦播放穩定，你可能會注意到另一個限制：macOS 仍然沒有像 Windows 那樣的內建每應用程式音量混音器。你無法在不把所有東西一起調低的情況下，單獨把一個吵鬧的應用程式調小。</p>

<p>那正是 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 填補的空缺。它是一款選單列混音器，為每個應用程式提供自己的音量滑桿、每應用程式靜音，甚至為安靜的應用程式提供音量增強，還有快速輸出切換。它不會修好劈啪聲，但一旦你的音訊恢復健康，它會讓日常控制輕鬆許多。</p>

<p>依序處理上述步驟，並從重開機與取樣率檢查開始。若你之後想在乾淨的音訊環境中取得真正的每應用程式控制，<a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 在 Mac App Store 上是一次性 €14.99 的購買，沙盒化，沒有驅動程式或 DMG 需要安裝。</p>`,
  },
  "airpods-stuttering-cutting-out-mac-tahoe": {
    slug: "airpods-stuttering-cutting-out-mac-tahoe",
    title: "AirPods 在 Mac 上斷斷續續或中斷（Tahoe 修法）",
    description: "AirPods 在 macOS Tahoe 上斷斷續續、中斷或掉音，幾乎總是 Bluetooth 干擾或自動切換的來回擺盪。以下教你重新配對、消除 2.4GHz 壅塞，並停止會破壞播放的裝置交接。",
    date: "2026-07-23",
    readTime: "6 分鐘閱讀",
    content: `<p>AirPods 在 macOS Tahoe 上斷斷續續或中斷，幾乎總是 Bluetooth 干擾，而不是耳機壞了。常見元凶是 2.4GHz Wi-Fi 與路由器壅塞、過於積極的自動裝置切換，以及過時的配對。重新配對 AirPods、關閉自動切換，並遠離擁擠的 2.4GHz 頻道，就能修好大多數情況。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — AirPods 在 Mac 上斷斷續續或中斷（Tahoe 修法）" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>為什麼 AirPods 偏偏在 Mac 上掉音</h2>

<p>AirPods 使用 Bluetooth，而 Bluetooth 與 Wi-Fi、微波爐、USB 3 裝置，以及你家幾乎每個智慧插座共用擁擠的 2.4GHz 無線頻段。你的 Mac 是個繁忙的無線電：它在重疊的天線上同時處理 Wi-Fi、Bluetooth、AirDrop 與「連續互通」功能。當那個頻段壅塞時，Bluetooth 音訊會第一個斷斷續續，因為它無法像檔案傳輸那樣容忍封包遺失。</p>

<p>Tahoe 並沒有神奇地讓你的 AirPods 變差，但全新的 macOS 安裝往往會重設無線行為、重新啟用「連續互通」交接，並重新協商編解碼器。這就是為什麼問題似乎在更新後立刻出現。好消息是：這些修法眾所周知，而且大多免費。</p>

<h2>修法 1：重新配對 AirPods（先做這個）</h2>

<p>過時或損毀的配對會在重開機後仍然存在，並造成看似隨機的間歇性掉音。徹底移除並重新加入連線：</p>

<ul>
<li>開啟<strong>系統設定、藍牙</strong>。</li>
<li>點按你 AirPods 旁的資訊 (i) 按鈕，選擇<strong>忘記此裝置</strong>。</li>
<li>把 AirPods 放進盒子、蓋上蓋子、等 15 秒，然後打開。</li>
<li>按住盒子背面的按鈕，直到燈號閃白。</li>
<li>從藍牙清單重新配對。</li>
</ul>

<p>順便確認 AirPods 韌體是最新的。沒有手動更新程式，但把它們放在盒子裡、靠近一部已連線的 iPhone 或 Mac 一陣子，就能讓它們在背景更新。</p>

<h2>修法 2：關閉自動切換</h2>

<p>對身處 Apple 生態系的人來說，這是「中斷」的最大單一原因。你的 AirPods 會試著跟隨你在 Mac、iPhone 與 iPad 之間移動。每當你的手機認為它該搶走音訊時，你 Mac 上的連線就會打嗝，在播客播到一半時產生半秒的掉音。</p>

<ul>
<li>在 Mac 上：藍牙，點按 AirPods 旁的 (i)，把<strong>連線到此 Mac</strong>設為<strong>上次連線到此 Mac 時</strong>，而非「自動」。</li>
<li>在 iPhone 上：設定，點按你的 AirPods，<strong>連線到此 iPhone</strong>，選擇<strong>上次連線到此 iPhone 時</strong>。</li>
</ul>

<p>這會停止裝置之間的拉鋸戰。你將手動決定音訊要去哪裡，這是換取穩定播放的小小代價。</p>

<h2>修法 3：消除 2.4GHz 壅塞</h2>

<p>如果掉音發生在視訊通話、下載，或其他人正在串流時，你的無線頻段已經飽和。幾個實用的做法：</p>

<ul>
<li>在你的 Mac 上<strong>使用 5GHz Wi-Fi 頻段</strong>。在你的路由器設定中，給 5GHz 網路一個明確的名稱並連上它。這會為 Bluetooth 釋放 2.4GHz 頻段。</li>
<li><strong>把 USB 3 與 Thunderbolt 集線器移離</strong>你的 Mac 與 AirPods。USB 3 是惡名昭彰的 2.4GHz 噪音來源；緊靠著你筆電的集線器能從幾吋外就毀掉 Bluetooth。</li>
<li><strong>把你路由器的 2.4GHz 頻道改成</strong> 1、6 或 11（互不重疊的選項），並避開你鄰居所在的擁擠頻道。</li>
<li><strong>保持視線暢通。</strong>人體與牆壁會吸收 2.4GHz。如果你的 Mac 在你身後或在包包裡，掉音會更嚴重。</li>
</ul>

<blockquote>Wi-Fi 6E 與 Wi-Fi 7 路由器能間接幫上忙：把你的裝置推到 6GHz 上，就能清空 Bluetooth 所依賴的 2.4GHz 頻段。但一個設定不良、不斷把你導回 2.4GHz 的網狀網路可能讓情況更糟。檢查一下你實際在哪個頻段上。</blockquote>

<h2>修法 4：重設 Bluetooth 與「連續互通」堆疊</h2>

<p>如果重新配對沒有持久，就重設無線電本身：</p>

<ul>
<li>從選單列把 Bluetooth 關閉再開啟，然後重新啟動 Mac。重開機能清除出乎意料多的暫時性音訊小故障。</li>
<li>在 Intel Mac 上重設 SMC/NVRAM，或在 Apple 晶片上乾脆完全關機（不是重新啟動）30 秒。</li>
<li>如果你不使用 AirDrop 或 Handoff，在「系統設定、一般、AirDrop 與 Handoff」中停用 Handoff，能減少背景的無線電雜訊。</li>
</ul>

<h2>什麼修不好（以及音量混音器實際上能做什麼）</h2>

<p>把範圍講清楚：這一切都不是軟體音量問題，也沒有任何音量應用程式能修復 Bluetooth 連線。如果你的音訊在<em>掉音</em>，就去追上面的無線電問題。像 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 這樣的應用程式控制的是每應用程式的音量、靜音與輸出切換，它們不會碰 Bluetooth 堆疊，所以無法阻止斷斷續續。混音器真正能幫上忙的，是許多 AirPods 使用者與掉音混為一談的相鄰惱人問題：一個應用程式聲音很大而另一個太小，或需要快速切換輸出。那是音量平衡問題，不是連線問題。</p>

<p>誠實地診斷。如果音訊斷了一拍又恢復，那是干擾或自動切換。如果只是應用程式之間的音量不均，那是你確實能用軟體解決的混音問題。</p>

<h2>快速檢查清單</h2>

<ul>
<li>忘記並重新配對 AirPods。</li>
<li>把 Mac 與 iPhone 都設為<strong>上次連線時</strong>，而非「自動」。</li>
<li>把你的 Mac 移到 5GHz Wi-Fi；讓 USB 3 集線器遠離。</li>
<li>把 2.4GHz 設為頻道 1、6 或 11。</li>
<li>切換 Bluetooth 後重新開機。</li>
</ul>

<p>一旦掉音消失，而你只是想更乾淨地控制每個應用程式播放的音量，<a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 會補上 macOS 至今仍未內建的一款完整每應用程式音量混音器、靜音、增強與快速輸出切換。它在 Mac App Store 上是一次性 €14.99 的購買，沙盒化，沒有驅動程式需要安裝。</p>`,
  },
  "mac-right-speaker-not-working-after-tahoe": {
    slug: "mac-right-speaker-not-working-after-tahoe",
    title: "Tahoe 更新後 Mac 右聲道喇叭沒聲音？如何修正",
    description: "更新到 macOS Tahoe 後某個喇叭或聲道停止運作？先從音訊平衡滑桿開始，接著重設 Core Audio、試試安全模式，然後排除硬體問題。一份清晰的排查指南。",
    date: "2026-07-23",
    readTime: "6 分鐘閱讀",
    content: `<p>如果你的右聲道喇叭在更新到 macOS Tahoe 後變得無聲，先檢查音訊<strong>平衡滑桿</strong> — 它可能在更新期間偏移。前往「系統設定 &gt; 聲音 &gt; 輸出」，確認平衡位在正中央。如果那沒問題，就重新啟動 Core Audio、開機進入安全模式，然後排除硬體。多數情況都是軟體問題。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Tahoe 更新後 Mac 右聲道喇叭沒聲音？如何修正" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>首先：平衡滑桿（修好這問題的機率比你想像的高）</h2>

<p>卡住或偏移的平衡滑桿，是某個聲道變安靜最常見的單一原因 — 而 macOS 更新偶爾會把它挪動。在你往最壞處想之前：</p>

<ul>
<li>開啟<strong>系統設定 &gt; 聲音</strong>。</li>
<li>點按<strong>輸出</strong>標籤頁，選取你的喇叭（內建，或你的外接裝置）。</li>
<li>找到<strong>平衡</strong>滑桿，把它拖到正中央。如果它被拉向左邊，你的右聲道聽起來就會像沒聲音。</li>
</ul>

<p>要<em>對每個輸出裝置</em>都做這件事。平衡設定會分別記憶內建喇叭、耳機與每個外接介面 — 所以如果問題出在你的 USB DAC 上，把內建喇叭的平衡置中並沒有幫助。</p>

<h2>測試它是否真的是硬體聲道問題</h2>

<p>快速判定硬體是否有問題。播放一首你熟悉的立體聲曲目，然後插上一副有線耳機。如果兩個聲道在耳機中都正常、但透過喇叭卻不行，那問題出在音訊引擎的下游（喇叭硬體或輸出路徑）。如果同一個聲道在耳機中也沒聲音，那更可能是軟體，或是主機板的音訊編解碼晶片。</p>

<p>你也可以開啟<strong>音樂</strong>或 QuickTime，播放一些東西，把平衡切到最左，再切到最右。如果音訊在聲道之間乾淨地移動，那兩個喇叭都是好的，這純粹是設定問題。</p>

<h2>重新啟動 Core Audio</h2>

<p>macOS 把所有聲音都經由 <strong>coreaudiod</strong> 程序路由。在一次重大更新後，它的狀態可能卡住 — 輸出消失、聲道掉音，或音量行為異常。重新啟動它很安全，且會強制 macOS 重建音訊圖：</p>

<ul>
<li>開啟 <strong>Terminal</strong>（應用程式 &gt; 工具程式）。</li>
<li>執行：<code>sudo killall coreaudiod</code></li>
<li>輸入你的密碼。音訊常駐程式會在一兩秒內自動重新啟動。</li>
</ul>

<p>不會刪除任何東西 — 這只是重開音訊子系統。之後立刻再測一次你的右聲道喇叭。</p>

<h2>正確地重新開機，然後試試安全模式</h2>

<p>完整重開機能清除 killall 修不掉的暫時性音訊小故障。如果聲道仍然無聲，就開機進入<strong>安全模式</strong>，它會載入最精簡的系統，並略過第三方音訊擴充與登入項目：</p>

<ul>
<li><strong>Apple 晶片：</strong>關機。按住電源按鈕，直到出現「正在載入啟動選項」。選取你的磁碟，然後按住 <strong>Shift</strong> 並點按「在安全模式中繼續」。</li>
<li><strong>Intel：</strong>重新啟動並按住 <strong>Shift</strong>，直到出現登入視窗。</li>
</ul>

<p>如果兩個喇叭在安全模式中都正常，那就是某個在更新前安裝的第三方音訊驅動程式、虛擬裝置或選單列工具，與 Tahoe 的新音訊堆疊發生衝突。開機回到正常狀態，移除或更新近期安裝的音訊軟體（螢幕錄影工具、會議應用程式與音訊路由 kext 是常見元凶）。</p>

<h2>重設 NVRAM（僅限 Intel Mac）</h2>

<p>在 Intel Mac 上，聲音與喇叭設定存在 NVRAM/PRAM 中，過時的數值可能在更新後仍留存。重設它：關機，然後開機並立刻按住 <strong>Option + Command + P + R</strong> 約 20 秒，讓 Mac 重新啟動一次。這不適用於 Apple 晶片 Mac — 它們會自動管理，所以如果你用的是 M 系列機器，就跳過這步。</p>

<h2>再次更新 — 並檢查是否有小版本更新</h2>

<p>任何 macOS 大版本的早期釋出版都會帶著音訊驅動程式錯誤，之後才修正。前往<strong>系統設定 &gt; 一般 &gt; 軟體更新</strong>，安裝任何待處理的 Tahoe 小版本更新（14.x.1、14.x.2 等）。如果有補充更新，它往往正好處理這些更新後的音訊退步問題。</p>

<h2>當它真的是硬體問題時</h2>

<p>如果安全模式、Core Audio 重啟與乾淨重新安裝全都失敗 — 而且同一個聲道在耳機中也沒聲音 — 你面對的可能是硬體故障。與更新的時間點吻合可能只是巧合；喇叭放大器與音訊編解碼晶片確實會壞。執行 <strong>Apple 診斷</strong>（關機，然後在 Apple 晶片上按住電源按鈕並選擇「診斷」，或在 Intel 上開機時按住 <strong>D</strong>）。如果它標示出音訊元件有問題，就聯絡 <strong>Apple 支援</strong>或授權服務供應商。別為一顆壞掉的喇叭花錢買軟體。</p>

<blockquote>簡易判斷法則：如果音訊隨平衡滑桿正確地左右移動，那兩個喇叭實體上都沒問題，你的修法就在軟體裡。如果它從不移動到沒聲音的那一側，就懷疑硬體。</blockquote>

<h2>音量軟體的定位（以及它不能做什麼）</h2>

<p>講清楚：喇叭聲道沒聲音不是音量應用程式能修的問題 — 上面的檢查才是你的途徑。話雖如此，一旦你的音訊恢復健康，macOS 仍然缺少 Windows 多年前就有的東西：一款真正的每應用程式音量混音器。如果你發現自己因為一個應用程式聲音很大、另一個又太小而在聲音設定裡翻找，那麼像 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 這樣的選單列混音器，能讓你為每個應用程式設定獨立音量、靜音，甚至增強，而無須動到你的系統平衡。它是日常混音的便利工具，不是本文問題的修復方案。</p>

<h2>簡短版</h2>

<ul>
<li>把<strong>平衡</strong>滑桿置中 — 對每個輸出裝置。</li>
<li>用耳機測試以判定硬體問題。</li>
<li>執行 <code>sudo killall coreaudiod</code>，然後重新啟動。</li>
<li>試試<strong>安全模式</strong>來揪出驅動程式衝突。</li>
<li>在 Intel 上重設 NVRAM；安裝任何 Tahoe 小版本更新。</li>
<li>在耳機中仍然沒聲音？執行 Apple 診斷並致電 Apple。</li>
</ul>

<p>一旦你的喇叭恢復正常，如果每天都要為每應用程式音量而煩，<a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 會補上 macOS 一直缺少的那款混音器 — €14.99，一次性，沙盒化，沒有驅動程式。</p>`,
  },
  "airpods-stuck-at-half-volume-mac-fix": {
    slug: "airpods-stuck-at-half-volume-mac-fix",
    title: "AirPods 在你的 Mac 上卡在半音量？這是修法",
    description: "為什麼 AirPods 連到你的 Mac 時只有半音量 — 通常是 Bluetooth 編解碼器切換到免持麥克風設定檔 — 以及重新配對的修法，還有如何把音量永久拉回來。",
    date: "2026-07-23",
    readTime: "6 分鐘閱讀",
    content: `<p>AirPods 在 Mac 上通常掉到半音量，是因為 macOS 把它們從高品質的 A2DP 音訊設定檔切換到低品質的免持（HFP）設定檔 — 那個為電話麥克風而生的設定檔。那個模式會限制輸出與音質。修法是強制 Mac 切回純耳機音訊，然後增強音量讓它維持。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — AirPods 在你的 Mac 上卡在半音量？這是修法" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>為什麼會發生：編解碼器切換</h2>

<p>像 AirPods 這樣的 Bluetooth 音訊裝置有兩種模式。當你只是聆聽時，macOS 使用 A2DP — 完整立體聲、完整音量、乾淨音質。但一旦某個應用程式想要你的麥克風，macOS 就把整個連線切換到 HFP（免持設定檔）。HFP 是雙向電話編解碼器。它聽起來單薄、偏單聲道，而且明顯較安靜，因為它是為語音通話而設計，不是為音樂。</p>

<p>問題在於，即使搶走麥克風的應用程式已經結束，macOS 常常仍卡在 HFP — 或者你一打開 Zoom、FaceTime、Teams、Discord，或某個有麥克風權限的瀏覽器分頁，它就立刻切進去。所以你的 AirPods 聽起來像是在「半音量」，並不是因為音量滑桿動了，而是因為整個音訊設定檔在你不知不覺間降級了。</p>

<p>你會認出這個現象：音訊突然變得又小又悶，AirPods 在你的聲音設定中出現兩次（一次是輸出，一次是麥克風），而且把系統音量開到底也幾乎沒幫助。</p>

<h2>重新配對與編解碼器的變通做法</h2>

<p>這些是誠實的第一步。依序處理 — 通常前面幾個之一就能解決它。</p>

<ul>
<li><strong>更改你的輸入裝置。</strong>開啟「系統設定 → 聲音 → 輸入」，選擇你 Mac 的內建麥克風而非 AirPods。這會阻止 macOS 把 AirPods 保持在 HFP 模式，讓輸出能爬回完整的 A2DP 音質。這是最有效的單一修法。</li>
<li><strong>把 Bluetooth 關掉再開啟。</strong>快速重設連線通常能乾淨地重新協商 A2DP，尤其是在通話結束後 AirPods 卡住時。</li>
<li><strong>重新連接 AirPods。</strong>蓋上盒子、等幾秒、在 Mac 附近重新打開，並重新選取它們作為輸出裝置。</li>
<li><strong>結束搶走麥克風的應用程式。</strong>徹底結束 Zoom、Teams、Discord，或那個瀏覽器分頁。有些應用程式會在背景保留麥克風工作階段，並把 HFP 釘住直到它們被關閉。</li>
<li><strong>從頭重新配對。</strong>在「系統設定 → 藍牙」中移除 AirPods（點按資訊按鈕 → 忘記此裝置），然後再次配對。這能清除單靠切換無法修復的損毀設定檔協商。</li>
<li><strong>重設 AirPods。</strong>盒蓋打開、AirPods 在盒中，按住背面的設定按鈕，直到燈號閃琥珀色再閃白色。之後重新配對。這是對付韌體層級怪異狀況的終極手段。</li>
<li><strong>更新 macOS 與 AirPods 韌體。</strong>Apple 曾在小版本更新中推送 Bluetooth 音訊修正。AirPods 韌體會在靠近一部已連線裝置充電時悄悄更新 — 所以就把它們放在盒子裡、靠近你的 Mac 過夜。</li>
</ul>

<blockquote><p>要留意的規律：如果音量在你加入通話的瞬間掉下來、在通話結束時恢復，那就是 HFP 切換 — 不是喇叭壞了，也不是設定小故障。</p></blockquote>

<h2>為什麼這些修法不總是持久</h2>

<p>這是令人沮喪的部分。即使重新配對後，下次只要有任何應用程式碰到麥克風，macOS 還是會樂於把你的 AirPods 切回那個安靜的免持模式。你無法在系統設定裡永久停用這個行為 — Apple 把它當作自動處理。所以你一天下來得重做好幾次那個更改輸入裝置的技巧，而任何時刻只要你的 AirPods 在通話中或在一個渴求麥克風的應用程式裡，它們就又被限制在那個較低的音量。</p>

<p>還有第二個、與此不同、但人們常混為一談的問題：有些應用程式在系統最大音量下就是比其他的安靜。播客播放器或瀏覽器分頁的音量可能遠低於你耳朵想要的程度，即使 AirPods 正跑著乾淨的 A2DP。macOS 只給你一個管所有東西的音量滑桿，且沒有每應用程式控制，所以沒有原生方法能把單一安靜的應用程式推回去。</p>

<h2>把音量拉回來 — 並讓它維持</h2>

<p>這正是每應用程式音量混音器發揮價值的地方。<a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 是一款 macOS 的選單列應用程式，為每個運行中的應用程式提供各自獨立的音量滑桿 — 包括超過 100% 的增強。所以當你的 AirPods 從通話回來、實際音量變低，或某個特定應用程式就是太安靜時，你把那個應用程式拉過正常上限，它就會維持在那裡。</p>

<p>具體來說，那意味著：</p>

<ul>
<li><strong>每應用程式音量增強。</strong>把安靜的應用程式推過標準上限，而不必在「滿格」系統音量下費力聆聽。</li>
<li><strong>音量設定檔。</strong>儲存一組音量 — 增強的瀏覽器、較柔和的音樂、響亮的視訊通話 — 並一鍵切換整套配置，這樣你就不必在每次重新連線後重新調整。</li>
<li><strong>快速輸出切換。</strong>從選單列在 AirPods、筆電喇叭與外接 DAC 之間切換，無須翻找系統設定，這在你強制重新協商一個新設定檔時很有幫助。</li>
<li><strong>每應用程式靜音與自動降音。</strong>在不動到其他的情況下靜音一個應用程式，並讓媒體在更重要的東西播放時自動降低。</li>
</ul>

<p>值得把它能做與不能做的講清楚。<a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 不會強迫 macOS 維持在 A2DP — 上面那個更改輸入裝置的技巧仍是你處理編解碼器本身的工具。它做的是把降級偷走的音量按應用程式還給你，讓安靜的 AirPods 工作階段或頑固地太小聲的應用程式，變成一拖即解，而非無解。而且因為它是沙盒化的 Mac App Store 應用程式，沒有音訊驅動程式要安裝、沒有 DMG、沒有內核擴充 — 它就是能跑。</p>

<h2>簡短版</h2>

<p>如果你的 AirPods 在 Mac 上聽起來又小又悶，就把你的輸入裝置切離 AirPods，強制它們脫離免持模式，若無效就重新配對。當音量仍然到不了你想要的地方 — 或某個單一應用程式就是太小聲 — 就用每應用程式增強，設定一次然後往前走。</p>

<p>厭倦了每次接電話都要跟音量滑桿搏鬥？<a href="https://apps.apple.com/app/id6772792641">到 Mac App Store 取得 SoundDial</a> — 一次性 €14.99，無訂閱、無驅動程式 — 讓每個應用程式都有自己的音量。</p>`,
  },
  "mac-volume-resets-itself-tahoe-bug": {
    slug: "mac-volume-resets-itself-tahoe-bug",
    title: "Mac 音量在 Tahoe 上不斷自己重設？如何永久鎖定它",
    description: "自 macOS Tahoe 以來，許多 Mac 會突然自行改變或重設音量。以下說明為什麼會發生、如何停止內建的成因，以及如何為每個應用程式鎖定固定音量讓它維持不變。",
    date: "2026-07-23",
    readTime: "6 分鐘閱讀",
    content: `<p>如果你的 Mac 音量自 macOS Tahoe 以來不斷自己重設，修法就是排除那些自動調整器：停用音訊降音與「開機時播放聲音」、重設聲音設定，並乾淨地重新連接任何 Bluetooth 輸出。至於會亂跳的每應用程式音量，就用混音器為每個應用程式鎖定一個固定音量，讓它再也不會漂移。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac 音量在 Tahoe 上不斷自己重設？如何永久鎖定它" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>為什麼你的音量在 Tahoe 後會自己改變</h2>

<p>一個沒被你碰過就移動的音量，感覺像是硬體故障，但它幾乎總是軟體在替你決定音量。macOS 有好幾個會悄悄推動或重設輸出的自動行為，而 Tahoe 的音訊堆疊變更讓其中幾個更明顯了。在你認定應用程式或 Mac 壞掉之前，先搞清楚到底是哪個系統在搶你的滑桿會有幫助。</p>

<ul>
<li><strong>音訊降音：</strong>當 macOS 認為有更重要的東西在播放時（Siri、輔助使用宣告、通知），會降低其他音訊。觸發結束後，音量有時不會完全回到原位。</li>
<li><strong>Bluetooth 交握重設：</strong>AirPods 與其他 Bluetooth 裝置會在連線時重新協商音量。在工作階段中途重新連線可能把輸出突然拉到預設值，或拉到高很多／低很多的音量。</li>
<li><strong>輸出裝置切換：</strong>當你拔掉耳機、擴充座，或切換到顯示器喇叭時，每個輸出都會記住自己的音量。來回切換看起來就像「隨機」重設。</li>
<li><strong>每應用程式預設值：</strong>有些應用程式（瀏覽器、影片播放器、視訊會議工具）會在啟動時、或當新串流開始時，自行設定增益，覆蓋你原本的設定。</li>
<li><strong>開機聲與登入狀態：</strong>開機提示音與登入可能把系統音量推回你沒選過的某個預設值。</li>
</ul>

<h2>先修好內建的成因</h2>

<p>依序處理這些。多數「自己重設」的抱怨在排除降音與 Bluetooth 之後就消失了。</p>

<ul>
<li><strong>關閉開機聲。</strong>「系統設定 → 聲音 → 取消勾選<em>開機時播放聲音</em>」。這能阻止開機提示音重設你的基準音量。</li>
<li><strong>減少或停用降音觸發。</strong>在「系統設定 → 輔助使用 → 語音內容與 Siri」中，關閉你不需要的語音宣告。越少觸發，就越少出現 macOS 降低音訊卻忘了恢復的時刻。</li>
<li><strong>重新配對有問題的 Bluetooth 裝置。</strong>把 AirPods 或耳機從藍牙設定移除並重新配對。過時的設定檔是連線時音量突然變動的常見成因。</li>
<li><strong>刻意設定每個輸出裝置。</strong>連接你會用的每個輸出（內建、顯示器、耳機），並各設定一次音量。macOS 會為每個裝置分別儲存音量，所以全部設定好就能消除切換時的意外。</li>
<li><strong>如果卡住就重設 Core Audio。</strong>開啟 Terminal 並執行 <code>sudo killall coreaudiod</code>。這會在不重開機的情況下重新啟動音訊常駐程式，並清除可能造成音量不穩的當機狀態。</li>
<li><strong>更新，然後重新啟動。</strong>早期的 Tahoe 小版本更新帶了音訊修正。確認你在最新版本上，並在更新後重開機一次。</li>
</ul>

<p>如果重設停止了，就是上述某一項在作怪。如果你的<em>系統</em>音量穩定、但個別應用程式一直比其他東西飄得更大或更小，那你就碰到了內建控制能做到的極限。</p>

<h2>真正的空缺：macOS 無法為每個應用程式鎖定音量</h2>

<p>這是令人沮喪的部分。Windows 多年來一直有每應用程式音量混音器 — 你打開它、拖動一個應用程式的滑桿，它就維持在那裡。macOS 從未推出過一個。只有一個系統音量滑桿，而每個應用程式都在搶它。所以當某個瀏覽器分頁播出自動播放廣告、或某個視訊通話的音量是你音樂的兩倍時，你唯一的選擇就是手動操控主音量 — 而那正是你想逃離的「為什麼這個一直在變」循環。</p>

<blockquote>系統滑桿是一個共用的單一旋鈕。沒有每應用程式混音器，在原版 macOS 上「設定好就不管」是不可能的 — 總會有東西覆蓋你。</blockquote>

<h2>用 SoundDial 為每個應用程式鎖定固定音量</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 補上了 macOS 缺少的每應用程式混音器。它常駐在你的選單列，為每個運行中的應用程式提供獨立於主音量的音量滑桿。因為它會記住你為每個應用程式設定的音量，它直接解決了「自己重設」的問題：你決定一次，那個應用程式每次都以那個音量開啟。</p>

<ul>
<li><strong>每個應用程式的獨立音量：</strong>同時把音樂維持在 40%、視訊通話在 80%，無須操控主滑桿。</li>
<li><strong>每應用程式靜音與增強：</strong>立即靜音一個吵鬧的應用程式，或在某個應用程式自己的音訊太弱時把它推過 100%。</li>
<li><strong>音量設定檔：</strong>為「工作」、「遊戲」或「專注」儲存設定，一鍵切換整套混音。</li>
<li><strong>由你掌控的自動降音：</strong>在你說話時、或當某個選定應用程式啟用時，自動降低背景應用程式 — 而不是由 macOS 決定。</li>
<li><strong>快速輸出切換：</strong>從選單列在喇叭、耳機與顯示器音訊之間切換，無須潛入設定。</li>
</ul>

<p>它是 Mac App Store 上一次性 €14.99 的購買 — 無訂閱、無驅動程式、無 DMG，也無內核擴充。因為它完全沙盒化並經 App Store 發佈，你不會安裝到 Tahoe 可能在下次更新時封鎖的老式音訊 kext。<a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 使用受支援的 API 來設定音量，所以你記住的音量能挺過更新與重開機。</p>

<h2>你到底需要哪種做法？</h2>

<p>如果你的整個系統音量都在跳，就從上面的內建修法開始 — 降音、Bluetooth 與開機聲佔了大多數情況。如果反過來，問題是某一個應用程式總是格格不入，或你厭倦了主滑桿老是妥協，那麼每應用程式混音器就是唯一真正的答案。macOS 不會加上一個，所以選單列工具是通往真正維持在你設定位置的混音的實用途徑。</p>

<p>厭倦了在 Tahoe 上追著音量滑桿跑？<a href="https://apps.apple.com/app/id6772792641">到 Mac App Store 取得 SoundDial</a>，為每個應用程式鎖定一個記住的音量 — €14.99 一次性，無訂閱、無驅動程式。</p>`,
  },
  "control-daw-and-system-volume-separately-mac": {
    slug: "control-daw-and-system-volume-separately-mac",
    title: "在 Mac 上將你的 DAW 監聽音量與系統音訊分開控制",
    description: "macOS 沒有內建的每應用程式音量混音器，所以你的 DAW 與系統聲音共用同一個音量。以下教你如何將 Logic、Ableton 或 GarageBand 的監聽音量與你的瀏覽器和通知獨立控制。",
    date: "2026-07-23",
    readTime: "6 分鐘閱讀",
    content: `<p>macOS 沒有內建的每應用程式音量混音器，所以你的 DAW 與其他一切共用一個系統滑桿。要把你的監聽音量與瀏覽器、Slack 和通知獨立設定，你需要每應用程式音量控制。像 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 這樣的選單列混音器，能讓 Logic、Ableton 與 GarageBand 擁有各自獨立於系統音訊的音量。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 在 Mac 上將你的 DAW 監聽音量與系統音訊分開控制" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>為什麼單一音量滑桿會毀掉你的監聽</h2>

<p>當你在製作時，你的 DAW 只是眾多發聲來源之一。一個瀏覽器分頁在播參考曲。Slack 提示不斷傳來。第二台顯示器上跑著一段 YouTube 教學。在 Windows 上，音量混合器讓你能獨立平衡這一切。在 macOS 上，Apple 從未推出對等的東西 — 音量鍵與選單列滑桿會<em>一次</em>移動所有東西。</p>

<p>這對任何靠耳朵混音的人都造成真正的問題。你在 Logic 裡調到一個舒適的監聽音量，接著一則通知以同樣的音量炸進來，震爆你的耳朵。或者你在一段響亮的段落把系統調低以保護聽力，結果你的參考曲現在又太安靜、無法比對。你的監聽參考不再穩定，而穩定的參考正是混音的全部意義。</p>

<blockquote>以一致的音量監聽，是少數能實質改善你混音的習慣之一。如果系統聲音不斷逼你去移動主滑桿，你就失去了那份一致性。</blockquote>

<h2>「獨立的 DAW 音量」實際上是什麼意思</h2>

<p>這裡有兩件製作者常混為一談的事，值得分開來看：</p>

<ul>
<li><strong>介面／主輸出音量</strong> — 你音訊介面上的硬體旋鈕，或你的監聽控制器。這決定你的絕對聆聽響度，一旦校準好就應該固定不動。</li>
<li><strong>每應用程式軟體音量</strong> — 每個應用程式在抵達那個輸出<em>之前</em>有多大聲。這是 macOS 缺少的部分。它讓你把 DAW 維持在單位增益（unity），同時把 Chrome、音樂或通知聲降到它底下的墊底音量。</li>
</ul>

<p>你要的是第二個。目標不是把你的 DAW 調低 — 而是把其他一切相對於它調低，讓 DAW 維持為你最響亮、最一致的音源，而干擾則安靜地待在背景。</p>

<h2>如何用每應用程式混音器做到</h2>

<p>像 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 這樣的選單列混音器會列出每個正在播放音訊的應用程式，並給每個各自的滑桿。製作者的工作流程看起來像這樣：</p>

<ul>
<li><strong>把你的介面校準一次。</strong>把你的音訊介面或監聽控制器設到一個舒適、可重複的參考音量並保持不動。這是你的固定錨點。</li>
<li><strong>把你的 DAW 設為 100%。</strong>在混音器裡，把 Logic、Ableton 或 GarageBand 留在完整的軟體音量，讓它以單位增益通過。你 DAW 自己的主推桿仍在做精細混音。</li>
<li><strong>把其他一切拉低。</strong>把 Chrome、Safari、音樂與 Slack 降到較低音量 — 例如 40–60% — 讓參考曲與訊息待在你混音之下，而非與它競爭。</li>
<li><strong>把吵鬧的東西靜音。</strong>每應用程式靜音讓你能完全靜音一個瀏覽器或聊天應用程式，而不動到你的監聽鏈。一鍵搞定，你的 DAW 繼續毫不受影響地播放。</li>
</ul>

<p>因為 DAW 的滑桿從不移動，你的監聽參考在整個工作階段中都穩如磐石。你可以把一段參考曲開大做快速 A/B 比對，然後把它靜音，而你的混音音量一分貝都沒變。</p>

<h2>增強一個安靜的應用程式，而不是把其他調低</h2>

<p>有時問題是反過來的。一份粗略的 demo 匯出、一段語音備忘錄，或一段安靜的參考，播放時遠低於你的工作階段音量。把你的介面調大來聽它，意味著其他一切現在都太響。每應用程式<strong>音量增強</strong>讓你把單一安靜的應用程式推過 100%，使它符合你的工作音量 — 而不動到你已校準的輸出。這是 Windows 的混合器從未擁有的一環，也是你在試聽 DAW 之外素材時更有用的工具之一。</p>

<h2>為不同工作階段類型設定的設定檔</h2>

<p>你理想的平衡並非每項任務都相同。錄音、混音與隨意聆聽各自需要不同的應用程式音量組合。音量設定檔讓你儲存一組設定並立即叫回：</p>

<ul>
<li><strong>混音：</strong>DAW 100%，瀏覽器與音樂調低，聊天靜音。</li>
<li><strong>參考聆聽：</strong>音樂或串流應用程式調高，DAW 調低。</li>
<li><strong>通話／協作：</strong>視訊會議應用程式調高，DAW 拉回，避免它滲入通話。</li>
</ul>

<p>切換設定檔勝過每次換工作模式都手動調整五個滑桿。</p>

<h2>自動降音與快速輸出切換</h2>

<p>錄音室裡還有兩件事很重要。<strong>自動降音</strong>能在優先音源說話或播放時自動降低背景應用程式，讓通話或重要音訊總能穿透出來。而從選單列<strong>快速輸出切換</strong>讓你在介面、監聽喇叭與耳機之間切換，無須翻找系統設定 — 這在你於不同系統上檢查混音時是個持續不斷的任務。</p>

<h2>為什麼不用虛擬音訊驅動程式？</h2>

<p>有些路由工具靠安裝內核層級的虛擬音訊驅動程式來解決這個問題。那些很強大但很笨重：它們可能在 macOS 更新後故障、增加延遲，並需要深層的系統權限。<a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 是沙盒化的，並經由 Mac App Store 發佈 — 沒有驅動程式、沒有 DMG、沒有聚合裝置設定。特別針對每應用程式音量控制而言，那比重新架構你的音訊路由簡單得多。</p>

<p>準備好在其他一切各就各位的同時保持你的監聽音量穩定嗎？<a href="https://apps.apple.com/app/id6772792641">到 Mac App Store 取得 SoundDial</a>，一次性 €14.99，讓你的 DAW 擁有自己的音量。</p>`,
  },
  "audio-hijack-alternative-simple-volume-mac": {
    slug: "audio-hijack-alternative-simple-volume-mac",
    title: "更簡單的 Audio Hijack 替代方案：在 Mac 上做每應用程式音量",
    description: "如果你只想要 macOS 上每個應用程式的獨立音量，Audio Hijack 就殺雞用牛刀了。以下是一個更輕、更便宜的選單列替代方案，做每應用程式音量、靜音與增強，而不含音訊路由。",
    date: "2026-07-23",
    readTime: "5 分鐘閱讀",
    content: `<p>如果你要的只是 macOS 上每個應用程式的獨立音量，Audio Hijack 就超出你所需了。它是一套專業的音訊路由與錄音套件（約 $79），為擷取、效果與工作階段圖而打造。要單純把一個應用程式調低、另一個調高，像 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 這樣的輕量選單列混音器更快、更便宜，而且隨時就緒。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 更簡單的 Audio Hijack 替代方案：在 Mac 上做每應用程式音量" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>為什麼人們一開始會找上 Audio Hijack</h2>

<p>macOS 沒有內建的每應用程式音量混音器。Windows 的音量混合器多年來一直有這功能，但在 Mac 上，音量鍵與選單列滑桿只移動一件事：系統主音量。沒有第一方的方法能說「把 Spotify 維持在 40%，但讓我的視訊通話保持在 100%」。</p>

<p>所以人們搜尋變通做法，最後找到了 Audio Hijack。它<em>可以</em>做每應用程式音量，因為它能攔截並處理任何單一應用程式的音訊。但那個能力是它實際設計目的的副產品：從應用程式與硬體錄製音訊、串接效果、在虛擬裝置間路由，以及建立可重複使用的工作階段管線。它在那方面真的很出色。它只是對一個輕量問題給出的沉重答案。</p>

<h2>Audio Hijack 何時變成殺雞用牛刀</h2>

<p>有幾件事往往讓只想要一個音量滑桿的人感到沮喪：</p>

<ul>
<li><strong>價格。</strong>Audio Hijack 約在 $79。對一套錄音室等級的應用程式而言那算合理；但對調低一個瀏覽器分頁來說，那是一大筆錢。</li>
<li><strong>它必須一直運行。</strong>它的每應用程式處理只在該應用程式開啟、且相關工作階段啟用時才有效。關掉它，你的音量就會回復。你為了維持一個滑桿位置，就得讓一整套音訊工作站常駐。</li>
<li><strong>以工作階段為中心的思維。</strong>你用區塊與連線建立工作階段。對擷取而言很強大，但當你的目標只是「這個應用程式安靜些、那個大聲些」時，這是一大堆概念上的額外負擔。</li>
<li><strong>介面很深。</strong>效果、路由、儀表、區塊佈線 — 如果你從不錄任何東西，這一大片功能表面你大多都會忽略。</li>
</ul>

<blockquote>經驗法則：如果你想<em>錄製或路由</em>音訊，Audio Hijack 值那個價。如果你只想在應用程式之間<em>平衡</em>音訊，那你是在需要一個旋鈕時卻買下了一整間工作坊。</blockquote>

<h2>更簡單的替代方案：選單列音量混音器</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 只做多數人真正為之而來的那一件工作。它常駐在你的選單列。點按圖示，你就得到一份每個正在播放音訊的應用程式的即時清單，每個都有自己的滑桿。把 Spotify 拖到 30%、讓你的通話維持在 100%、把 Slack 完全靜音 — 搞定，不用建立任何工作階段。</p>

<p>它涵蓋的內容：</p>

<ul>
<li><strong>每個應用程式的獨立音量</strong> — 每個音源都有自己的滑桿，可即時調整。</li>
<li><strong>每應用程式靜音</strong> — 一鍵靜音一個吵鬧的應用程式，而不動到其他任何東西。</li>
<li><strong>每應用程式音量增強</strong> — 當某個應用程式自己的最大音量仍然太小時，把它推過 100%。這是系統滑桿永遠做不到的一環。</li>
<li><strong>音量設定檔</strong> — 儲存整套混音（音樂調低、通話調大、通知靜音），並為某個情境一鍵叫回。</li>
<li><strong>自動降音</strong> — 在更重要的東西開始時自動降低背景音訊，讓通話或影片不被你的播放清單淹沒。</li>
<li><strong>快速輸出切換</strong> — 從同一個選單在耳機、喇叭與其他輸出之間切換。</li>
</ul>

<h2>實際操作：在一分鐘內取得每應用程式控制</h2>

<p>設定上的差異正是重點。用路由工具你得建立一個工作階段、加入一個音源區塊、把它接起來，並讓應用程式持續運行。這裡則基本上是：</p>

<ul>
<li>從 Mac App Store 安裝 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>。</li>
<li>在幾個應用程式中播放音訊，讓它們出現在清單裡。</li>
<li>點按選單列圖示，把每個應用程式的滑桿拖到你想要的位置。</li>
<li>可選：把那套混音儲存成設定檔，或把太安靜的應用程式增強過 100%。</li>
</ul>

<p>因為它經由 Mac App Store 發佈，它是沙盒化的，安裝起來就像任何一般應用程式 — 沒有 <code>.dmg</code> 要拖、沒有內核擴充、沒有要在安全性設定中核准的音訊驅動程式，也沒有任何在 macOS 更新後需要重新核准的東西。最後這點很重要：驅動程式式的混音器過去在作業系統升級時就會故障，並需要重新安裝一個系統層級元件。沙盒化的 App Store 應用程式避開了整整一類的維護。</p>

<h2>你該選哪一個？</h2>

<p>對這份工作誠實一點。如果你需要錄製應用程式或硬體音訊、套用即時效果，或在虛擬裝置間建立路由圖，就選 <strong>Audio Hijack</strong>。那是它的主場，在那裡它值每一分錢。</p>

<p>如果你實際的需求是「讓我獨立設定每個應用程式的音量」，就選一款專門的選單列混音器。你會一次花 €14.99 而非約 $79，省去建立工作階段，並在一個從選單列打開的面板裡得到增強、靜音、設定檔與降音。沒有你永遠用不到的錄音功能，也沒有一套為了維持滑桿位置而在背景運行的工作站。</p>

<p>多數為了平衡音量而試用 Audio Hijack 的人，都是在用一個大工具解決一個小問題。如果那就是你，小工具更合適 — 而且只要一小部分的價錢。</p>

<p><a href="https://apps.apple.com/app/id6772792641">到 Mac App Store 取得 SoundDial</a>，€14.99，一次性 — 每應用程式音量、增強、靜音、設定檔與自動降音，就在你的選單列。</p>`,
  },
  "boom-3d-alternative-per-app-volume-mac": {
    slug: "boom-3d-alternative-per-app-volume-mac",
    title: "Boom 3D 替代方案：不含冗贅的每應用程式音量（Mac）",
    description: "如果你用 Boom 3D 主要是為了增強音訊、但其實想要每應用程式音量控制，SoundDial 是更精簡的 Mac 替代方案：每個應用程式獨立音量、每應用程式靜音與增強、一次性價格，沒有全系統 EQ 或驅動程式。",
    date: "2026-07-23",
    readTime: "5 分鐘閱讀",
    content: `<p>如果你拿 Boom 3D 來增強音量、但實際上想要分別控制每個應用程式，那你需要不同的工具。Boom 3D 是全系統的音量增強器與 EQ。<a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 是專注的每應用程式音量混音器：為每個應用程式提供獨立音量、靜音與增強，一次性 €14.99，沒有 EQ、沒有驅動程式。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Boom 3D 替代方案：不含冗贅的每應用程式音量（Mac）" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Boom 3D 實際上能做什麼（以及不能做什麼）</h2>
<p>Boom 3D 圍繞三件事打造：全系統音量增強、一個 31 段等化器，以及 3D「環繞」效果。它把這些<em>一次</em>套用到你 Mac 播放的所有東西上。如果你的目標是讓筆電更大聲，或整體都想要一條你喜歡的低音曲線，那確實實用。</p>
<p>Boom 3D 不擅長的，是把應用程式當作獨立聲道處理。沒有乾淨的方法能說「Spotify 40%、我的視訊通話 100%，而這個瀏覽器分頁靜音」。它的滑桿移動的是整套混音。而且因為它安裝了一個音訊驅動程式來坐進訊號路徑，它在比沙盒化工具更低的層級碰觸你的系統。它也被定位為一款有升級週期的付費產品，而非小型的一次性工具。</p>
<blockquote><p>常見的故事：人們安裝 Boom 3D 來讓一個安靜的應用程式更大聲，然後才發現真正的問題是 macOS 根本沒有每應用程式音量混音器。</p></blockquote>

<h2>那個空缺：macOS 沒有音量混音器</h2>
<p>這讓從 Windows 來的人很意外。Windows 多年來一直有每應用程式的音量混合器 — 右鍵點喇叭、分別設定每個應用程式的音量。macOS 就是沒有推出這個。你得到一個主音量，以及每個應用程式碰巧提供的內建滑桿。沒有作業系統層級的方法能把 Slack、一個 YouTube 分頁與一個遊戲之間做平衡。</p>
<p>所以當一個音樂應用程式淹沒你的通話時，你唯一的原生選擇很粗糙：把主音量調低（那會讓所有東西變安靜），或翻找每個應用程式自己的設定、期望它有音量控制。Boom 3D 也沒有填補那個空缺 — 它讓整套混音更大聲，而非讓每個應用程式各自調整。</p>

<h2>SoundDial 的定位</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 就是那個缺失的混音器。它常駐在你的選單列，為每個運行中的應用程式提供各自一列、各自的滑桿。那就是它與 Boom 3D 的核心差別：你得到的是每音源控制，而非一個全域效果。</p>
<ul>
<li><strong>每個應用程式的獨立音量</strong> — 把 Spotify 設為 30%，同時讓你的視訊通話維持在 100%。</li>
<li><strong>每應用程式靜音</strong> — 立即靜音一個吵鬧的應用程式，而不動到其他任何東西。</li>
<li><strong>每應用程式增強</strong> — 如果你喜歡 Boom 3D 那個超過 100% 的技巧，SoundDial 保留了它，但瞄準單一應用程式而非整個系統。安靜的應用程式會被單獨推過它們的正常上限。</li>
<li><strong>音量設定檔</strong> — 儲存一套混音器佈局（例如「遊戲」、「會議」、「音樂」），並一鍵叫回，而不必每次重新平衡滑桿。</li>
<li><strong>自動降音</strong> — 在重要的東西開始時自動降低背景音訊，讓通話或遊戲提示不被音樂淹沒。</li>
<li><strong>快速輸出切換</strong> — 從同一個選單在耳機、喇叭與其他輸出之間切換。</li>
</ul>
<p>SoundDial 刻意不做的，是 Boom 3D 其餘那些功能蔓延。沒有 31 段 EQ、沒有仿環繞處理、沒有全系統效果鏈。如果你想要一個母帶等級的 EQ，Boom 3D 或一套專門的音訊套件才是對的選擇。如果你其實一直打開 Boom 3D 是為了<em>音量</em>，那片功能表面就是你付錢背負的冗贅。</p>

<h2>增強，不含驅動程式</h2>
<p>「增強」這個問題值得直接回答，因為它通常正是 Boom 3D 使用者尋找替代方案的原因。Boom 3D 的增強是全域且驅動程式式的。SoundDial 的增強是每應用程式的，並在 Apple 的應用程式沙盒模型內運行 — 它經由 Mac App Store 發佈，所以沒有另外的安裝程式、沒有內核層級驅動程式，也沒有日後要解除安裝的殘留系統元件。你得到「讓這一個安靜的應用程式更大聲」的結果，而不必把你整條音訊路徑的控制權交給一個驅動程式。</p>

<h2>價格：一次性 vs. 持續</h2>
<p>Boom 3D 是一款有自己升級與授權模式的付費應用程式，價格因平台與版本而異。<a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 是單次一次性購買，售價 €14.99 — 買一次、留著，沒有訂閱、也沒有為了讓混音器繼續運作而需要的每版本重購。對一個你每天會留在選單列運行的工具而言，固定價格往往比一個你得不斷重新購買的產品更耐得住時間。</p>

<h2>你該選哪一個？</h2>
<ul>
<li><strong>選 Boom 3D</strong>，如果你真正的需求是一個認真的等化器與全系統音訊效果，而且你不介意混音路徑裡有一個音訊驅動程式。</li>
<li><strong>選 SoundDial</strong>，如果你想要 Windows 使用者視為理所當然的東西 — 一款真正的每應用程式音量混音器 — 外加瞄準式增強、設定檔與自動降音，一次性價格，且沒有驅動程式要安裝。</li>
</ul>
<p>多數對 Boom 3D 感到不合適的人都落在第二群。他們不是想調整頻率；他們是想讓瀏覽器比通話安靜。那正是 SoundDial 為之打造的工作。</p>

<p><strong>想在你的 Mac 上取得每應用程式音量控制，而不含 EQ 冗贅或訂閱？</strong><a href="https://apps.apple.com/app/id6772792641">到 Mac App Store 取得 SoundDial</a> — €14.99 一次性，沙盒化，沒有驅動程式，而且每個應用程式都有自己的滑桿。</p>`,
  },
  "mute-everything-except-one-app-mac": {
    slug: "mute-everything-except-one-app-mac",
    title: "如何在你的 Mac 上靜音除了一個應用程式以外的所有東西",
    description: "macOS 沒有每應用程式音量混音器，所以要靜音除一個以外的所有應用程式需要一個輔助工具。以下教你如何只聽你的通話、實況或遊戲，同時讓其他一切保持靜音。",
    date: "2026-07-23",
    readTime: "5 分鐘閱讀",
    content: `<p>macOS 沒有內建的方法能靜音個別應用程式，所以要只聽一個應用程式，你需要一款每應用程式音量混音器。安裝 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>、打開它的選單列混音器、把你想聽的那一個以外的每個應用程式都靜音，那個應用程式就會繼續播放，而其餘的立即靜音。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 如何在你的 Mac 上靜音除了一個應用程式以外的所有東西" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>為什麼 macOS 自己做不到這件事</h2>
<p>Windows 有音量混合器已超過十年：右鍵點喇叭圖示，每個運行中的應用程式都有自己的滑桿。macOS 從未推出這個。你 Mac 上的音量鍵只控制一件事，就是主輸出音量。當你把系統調低，所有東西一起降低。當你靜音，所有東西一起靜音。</p>
<p>在你有五樣東西同時發聲之前，那都沒問題。你正在視訊通話，但一個瀏覽器分頁在自動播放廣告、Spotify 還在跑、一個遊戲在背景嗶嗶叫，而 Slack 在響。你唯一的原生選擇是結束應用程式、在每個應用程式自己的設定裡逐一靜音它們（如果它有那個選項的話），或拔掉你的耳機。那些都無法讓你說「留這一個、把其餘靜音」。</p>

<h2>直接的做法：用混音器把其餘靜音</h2>
<p>每應用程式混音器坐在你的應用程式與輸出裝置之間，給每個應用程式各自的音量與靜音控制。一旦你有一個在運行，隔離單一應用程式只需幾秒：</p>
<ul>
<li>從你的選單列打開混音器。你會看到一份每個正在產生音訊的應用程式的即時清單。</li>
<li>找到你想聽的那一個應用程式，你的通話、你的實況、你的遊戲。</li>
<li>把其他一切靜音。點按其他每個應用程式旁的靜音切換，或把它的滑桿拉到零。</li>
<li>就這樣。你留著沒動的那一個應用程式繼續全音量播放，而其餘保持靜音。</li>
</ul>
<p>使用 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 時，清單裡每個應用程式都有自己的滑桿與自己的靜音按鈕，所以這只是幾下點按。之後才開始播放的新應用程式會自動出現，所以如果有個通知聲想偷溜進來，你可以當場把它靜音，而不必動到你專注的應用程式。</p>

<blockquote>訣竅在於，靜音「除了一個以外的所有東西」正是靜音一個應用程式的反向操作。你不是在讓你的 Mac 靜音，你是在讓你真正在乎的東西周圍的噪音靜音。</blockquote>

<h2>儲存成設定檔，這樣你就不用重做</h2>
<p>如果這是你常會用到的設定，每次手動做就會變得很煩。比方說你在開會時總想讓通話應用程式大聲、其他一切關掉，或你想讓你的實況居於正中央、而遊戲與瀏覽器保持安靜。音量設定檔會儲存那些確切的每應用程式設定，並一鍵重新套用。</p>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 讓你儲存像「會議」或「僅實況」這樣的設定檔，然後在你需要時立刻切換到它們。設定一次，隔離你的那一個應用程式就變成單一的選單列動作，而非五個滑桿的苦差事。</p>

<h2>更聰明的版本：自動降音，而非硬性靜音</h2>
<p>有時你不想讓其他應用程式完全消失，你只是想讓它們在更重要的東西開始時讓路。那就是自動降音。當你的優先應用程式播放時，背景應用程式會自動降到低音量，然後在它停止時再升回來。</p>
<p>這對通話與實況很理想。當有人開始說話時，你的音樂會降低讓你能聽見他們，而當通話結束時，音樂會自己升回來。你得到「清楚地聽見一個應用程式」的結果，而不必每次狀況改變都手動靜音與取消靜音。<a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 在手動混音器之外還包含自動降音，所以你可以為徹底安靜選擇硬性靜音，或為較柔和的背景選擇降音。</p>

<h2>增強你留下的那一個應用程式</h2>
<p>隔離單一應用程式還有個附加好處：你也可以讓它比你 Mac 通常允許的更大聲。有些應用程式，尤其是安靜的視訊通話或製作不良的實況，即使在最大音量下也幾乎聽不見。每應用程式增強能把個別應用程式推過 100%，而不必開大你的系統輸出，那樣只會把你已經靜音的應用程式放大。</p>
<p>所以完整的操作是：把噪音靜音、留著你的那一個應用程式，如果那個應用程式太安靜，就增強它。<a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 在同一個混音器視窗裡處理這全部三件事。</p>

<h2>你不用簽下什麼</h2>
<p>對 Mac 音訊工具常見的一個顧慮是，它們需要內核擴充、虛擬音訊驅動程式，或從某個隨機網站下載的可疑安裝程式。那是個合理的顧慮，也是為什麼有些人完全避開這類應用程式。</p>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 在 Mac App Store 上、沙盒化，安裝起來就像任何一般應用程式，沒有驅動程式、沒有 DMG、沒有要核准的系統擴充。它是一次性 €14.99 的購買，而非訂閱，所以你付一次就一直擁有。對一個你會整天留在選單列運行的東西而言，那很重要。</p>

<h2>快速回顧</h2>
<ul>
<li>macOS 沒有原生的每應用程式音量控制，所以你需要一個混音器來做這件事。</li>
<li>打開混音器、留著你的那一個應用程式、把其他一切靜音或歸零。</li>
<li>為你常做的通話或實況把它儲存成設定檔。</li>
<li>如果你想讓背景應用程式變安靜而非被消滅，就用自動降音。</li>
<li>如果你留下的應用程式自己太安靜，就增強它。</li>
</ul>

<p>想只聽重要的東西、並讓其餘靜音？<a href="https://apps.apple.com/app/id6772792641">到 Mac App Store 取得 SoundDial</a>，在一分鐘內設定好你的第一個「靜音其餘」設定檔。</p>`,
  },
  "different-volume-per-output-device-mac": {
    slug: "different-volume-per-output-device-mac",
    title: "在 Mac 上為喇叭與耳機保持不同的音量",
    description: "macOS 在你於喇叭與耳機之間切換時會忘記你的應用程式層級音量混音。以下說明為什麼會發生、手動的極限，以及每應用程式音量記憶如何修正它。",
    date: "2026-07-23",
    readTime: "5 分鐘閱讀",
    content: `<p>其實 macOS 會為每個輸出裝置記住各自的系統音量，但每次你切換時它會忘記你的應用程式層級平衡。所以耳機與喇叭保有它們各自的整體音量，然而你一拔掉，某個應用程式就變得很大聲、另一個卻消失了。修法是能挺過裝置切換的每應用程式音量記憶，而 macOS 沒有這方面的原生工具。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 在 Mac 上為喇叭與耳機保持不同的音量" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>macOS 記得什麼、又不記得什麼</h2>

<p>有個常見的迷思認為 macOS 對每個輸出裝置一視同仁。它並非如此。每個輸出裝置都儲存自己的系統音量。把你的 MacBook 喇叭設為 30%、AirPods 設為 80%，macOS 會把這兩個數字分開保存。插上、拔掉、重新連接，每個裝置都會回到你留下它的位置。</p>

<p>那為什麼體驗仍然感覺很糟？因為那份記憶止於那個單一的全域滑桿。macOS 對某個裝置上播放的所有東西，只有一個音量控制。它不記得個別應用程式各有多大聲。當你從喇叭切換到耳機時，Spotify、一個 Zoom 通話與一個 YouTube 分頁之間的平衡不會被保留，因為那個平衡從不存在。每個應用程式共用同一個滑桿。</p>

<p>結果就是人們描述的「喇叭與耳機的音量不同」這種挫折。他們通常想要的，不只是每個裝置一個不同的主音量，而是一份記住的混音：安靜的音樂、大聲的通話、調低的通知，而那份混音無論在桌面喇叭還是耳機上都保持不變。</p>

<h2>手動變通做法及其不足之處</h2>

<p>你可以用內建工具走到一半的路，而在轉向其他東西之前，先了解它的上限是值得的。</p>

<ul>
<li><strong>把每個裝置的系統音量各設定一次。</strong>透過你的喇叭播放音訊、設好音量，然後把輸出切換到耳機並設好那個音量。macOS 會保留兩者。這處理了每個裝置的主音量，但無關乎每應用程式。</li>
<li><strong>在應用程式有提供的地方使用每應用程式音量。</strong>Spotify、VLC 與大多數瀏覽器都有自己的內建音量。你可以在應用程式本身裡把一個大聲的應用程式調小。問題是：這個設定住在應用程式裡、不在裝置裡，所以當你切換到耳機時它不會改變，而且大多數應用程式（Slack、Zoom、系統通知、Mail）根本沒有這種控制。</li>
<li><strong>從控制中心或選單列切換輸出。</strong>按住 Option 點選單列的音量圖示，就能快速在裝置間切換。很快，但它只移動主音量，並不會恢復每應用程式的混音。</li>
</ul>

<p>這些能給你每個裝置的主音量。它們沒有一個能給你的，是一份記住的、能跟著你跨裝置的每應用程式平衡。那個空缺正是惱人之處所在，而且它是結構性的：作業系統就是沒有每應用程式混音器，不像 Windows，多年來一直有一個。</p>

<h2>每應用程式音量記憶，以及為什麼裝置切換才是真正的問題</h2>

<p>更深層的修法是給每個應用程式各自的音量，並讓那些設定持續存在。那正是像 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 這樣的每應用程式混音器為之打造的。它坐在你的選單列，列出每個正在產生聲音的應用程式，並給每一個一個獨立的滑桿、一個靜音切換，甚至為安靜的應用程式提供超過 100% 的增強。</p>

<p>對喇叭與耳機的問題而言重要的部分是：那些音量會被記住。把你的音樂設為 40%、通話設為 90%、一個多話的應用程式設為靜音，<a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 就會保留那套混音。當你拔掉耳機、退回喇叭時，你不用每次都手動重新平衡三個應用程式。</p>

<p>音量設定檔更進一步。你可以儲存一組具名的每應用程式音量並一鍵叫回，這樣一套「耳機、專注工作」的混音與一套「喇叭、會議」的混音，就各是單一選擇，而非手動重設。</p>

<blockquote><p>心態的轉變：別再想著一個你不斷拖動的主滑桿，開始想著每種情境一套已儲存的混音。裝置切換就不再是重新平衡的苦差事。</p></blockquote>

<h2>快速輸出切換而不失去你的混音</h2>

<p>切換裝置應該既快又不具破壞性。從同一個選單列面板，你可以更改你的輸出裝置，所以從喇叭移到耳機是一鍵搞定，而你的每應用程式音量會一起帶過來，而不是崩回單一的全域數字。</p>

<p>值得一提的相關功能是自動降音：當音訊從你的麥克風進來時（你開始說話，或一通電話開始），其他應用程式會自動降低讓你能被聽見，之後再回到它們設定的音量。這是把同一原則套用在注意力而非裝置上，又是一件 macOS 自己不會做的事。</p>

<h2>如何設定</h2>

<ul>
<li>從 Mac App Store 安裝 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>。它是沙盒化的，所以沒有驅動程式、沒有 DMG，也沒有要核准的內核擴充。</li>
<li>在你最常用的應用程式中播放音訊，讓它們出現在混音器裡。</li>
<li>設定每個應用程式的音量、靜音任何你不想要的，並增強任何太安靜的。</li>
<li>把那套配置儲存成設定檔，例如一套為耳機調校、一套為喇叭調校。</li>
<li>當你切換裝置時，叫回對應的設定檔，或乾脆讓你已儲存的每應用程式音量跟著過來。</li>
</ul>

<p>誠實的總結：macOS 確實會在主音量層級記住每個輸出裝置的音量，但它永遠不會記住你的每應用程式混音，因為它沒有每應用程式混音器。如果你真正的目標是一份能挺過每一次喇叭與耳機切換、在音樂、通話與通知之間保持一致的平衡，你就需要在作業系統之上加一層每應用程式記憶。</p>

<p>想讓喇叭與耳機各自保有自己的混音，而不必重新調整每個應用程式？<a href="https://apps.apple.com/app/id6772792641">到 Mac App Store 取得 SoundDial</a>，一次性 €14.99，無訂閱、無驅動程式。</p>`,
  },
  "sound-control-alternative-mac": {
    slug: "sound-control-alternative-mac",
    title: "Sound Control 停產了嗎？最佳 Mac 每應用卷替換 (2026)",
    description: "Static Z Software 的 Sound Control 已停產，並在現代 macOS 上中斷。以下是它停止工作的原因、它做了什麼，以及 2026 年最好切換到的每個應用程式音量混合器。",
    date: "2026-07-23",
    readTime: "5 分鐘閱讀",
    content: `<p>Static Z Software 的 Sound Control 已停產，不再銷售或更新，而且它在現代 macOS 上越來越失敗，因為它依賴於 Apple 鎖定的核心級音訊驅動程式。如果您今天需要每個應用程式的數量，最乾淨的替代品是 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>，一個沒有驅動程式的沙盒 Mac App Store 混音器。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Sound Control 停產了嗎？最佳 Mac 每應用卷替換 (2026)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Sound Control實際上做了什麼</h2>
<p>多年來，Sound Control 一直是解決 macOS 真正差距的首選答案：Mac 上仍然沒有內建的每個應用程式音量混合器。自 Vista 以來，Windows 的音量混音器中就有一個，但 macOS 只為您提供一個主滑桿。 Sound Control 用整齊的選單欄面板填補了這個漏洞，讓您：</p>
<ul>
<li>為每個正在執行的應用程式設定獨立的音量等級。</li>
<li>將單一應用程式靜音，而不影響系統音訊的其餘部分。</li>
<li>將安靜的應用程式提升到 100% 以上。</li>
<li>應用每個應用程式的均衡器和平衡調整。</li>
<li>將音訊和固定應用程式路由到特定的輸出設備。</li>
</ul>
<p>對於任何曾經經歷過 Zoom 呼叫爆炸而背景 YouTube 選項卡竊竊私語的人來說，每個應用程式的控制是變革性的。它成為許多 Mac 高級用戶機器上的安靜主食。</p>

<h2>為什麼它停止工作</h2>
<p>誠實的技術故事在這裡很重要，因為它解釋了為什麼這不是一個可以簡單修補的錯誤。 Sound Control 的工作原理是安裝系統音訊驅動程式 - 一個核心擴展 (kext)，它將自身插入到 macOS 音訊管道中，以便它可以攔截和重塑每個應用程式的輸出。正是這種深鉤使 EQ 和增強功能成為可能。</p>
<p>從 macOS 10.15 Catalina 開始，並透過 Big Sur 和 Apple Silicon 過渡加速，Apple 開始棄用內核擴展，轉而採用用戶空間替代方案。在 Apple Silicon Mac 上，載入第三方 kext 需要降低恢復模式下的系統安全性，且 Apple 已明確表示傳統音訊 kext 已處於借用時間。 Static Z Software 最終停止銷售和開發 Sound Control。結果是：在最近的 macOS 版本上，安裝失敗，音訊出現故障，或者驅動程式只是拒絕加載，而沒有安全降級，這是大多數人不想做的。</p>
<blockquote>這並不是開發商的疏忽。這是一個平台層級的轉變。 Apple 關閉了圍繞 Sound Control 構建的低階音訊驅動程式的大門，並且沒有任何更新可以完全重新打開它。</blockquote>

<h2>現代macOS發生了什麼變化</h2>
<p>蘋果確實添加了一項相關內容：Core Audio 現在提供了一個 Tap API（在 macOS 14.2 Sonoma 中引入），允許應用程式從用戶空間捕獲和處理每個進程的音訊 - 沒有 kext，沒有安全降級，沒有重新啟動到恢復。這是每個應用程式音訊的認可現代路徑，也是當前混音器應該建立的基礎。權衡是誠實的：用戶空間點擊比舊的核心驅動程式受到更多限制，因此您應該期望乾淨的每個應用程式音量、靜音和增強，而不是提供完整的每個應用程式參數 EQ Sound Control。</p>

<h2>最佳替代品：SoundDial</h2>
<p>如果您想要 Sound Control 所做的核心 - 每個應用程式的獨立卷 - 在 Mac 上您實際上可以保持安全和最新， <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 是 2026 年最接近的乾淨遷移選項。它是一個選單列每個應用音量混合器，專為現代 macOS 音訊堆疊而構建。 Sound Control 工作流程的繼承內容：</p>
<ul>
<li><strong>每個應用程式的獨立音量</strong> — 每個正在執行的應用程式都有一個滑桿，位於功能表列中。</li>
<li><strong>每個應用程式靜音</strong> — 使一個應用程式靜音，而其他所有應用程式繼續運作。</li>
<li><strong>每個應用程式的音量提升</strong> — 將安靜的應用程式推到其正常上限之上。</li>
<li><strong>體積曲線</strong> — 儲存不同環境（通話、音樂、遊戲）的混音器設定並在它們之間切換。</li>
<li><strong>自動閃避</strong> - 自動降低背景應用程式音量，當您開始講話或有電話打入時非常有用。</li>
<li><strong>快速輸出切換</strong> — 在揚聲器、耳機和其他裝置之間跳轉，無需深入系統設定。</li>
</ul>
<p>對於遷移來說重要的實際差異： <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 透過 Mac App Store 發貨，經過沙箱處理，不安裝任何驅動程序，也不安裝 DMG。這意味著無需批准內核擴展，無需恢復模式，也不會降低 Mac 的安全狀況——這正是殺死 Sound Control 的痛點。這是一次性購買，價格為 14.99 歐元，而不是訂閱。</p>

<h2>如何切換，一步一步</h2>
<ul>
<li><strong>乾淨地卸載Sound Control。</strong> 因為它安裝了驅動程序，所以如果它仍然運行，請使用自己的卸載程序，或者在安裝任何新內容之前刪除其音訊驅動程式組件。兩個競爭的音訊掛鉤可能會導致故障。</li>
<li><strong>從 App Store 安裝 SoundDial。</strong> 無需重新啟動或進行安全更改。</li>
<li><strong>授予它請求的音訊權限。</strong> 這就是讓它讀取和控制現代 macOS 上每個應用程式輸出的原因。</li>
<li><strong>打開選單列面板並設定等級。</strong> 您正在執行的應用程式會顯示單獨的滑桿；根據需要進行調整、靜音或增強。</li>
<li><strong>儲存個人資料。</strong> 如果您有最喜歡的 Sound Control 設置，請將它們重新建立為配置文件，以便您可以一鍵切換。</li>
</ul>

<h2>誠實的期望</h2>
<p>如果您使用 Sound Control 的唯一原因是每個應用程式的音量、靜音和增強，那麼現代的沙盒混音器可以完全滿足您的需求。如果您嚴重依賴其每個應用程式的均衡器，請注意深度均衡器與舊的驅動程式模型相關，並且是在蘋果當前規則下最難乾淨地重現的功能。相應地設定期望，就不會感到驚訝。</p>

<p>準備好恢復每個應用程式的音量了嗎？ <a href="https://apps.apple.com/app/id6772792641">在 Mac App Store 上取得 SoundDial</a> — 一次性 14.99 歐元，沙盒，無需訂閱，無需驅動程式。</p>`,
  },
  "soundbunny-alternative-mac": {
    slug: "soundbunny-alternative-mac",
    title: "SoundBunny 已不存在 — 現代 Mac Per-App Volume 應用程式將取代它",
    description: "Prosoft 的 SoundBunny 已停產。這是目前積極維護的 macOS 每個應用程式音量混合器來替換它 - 以及如何在沒有核心驅動程式的情況下遷移每個應用程式音訊設定。",
    date: "2026-07-23",
    readTime: "5 分鐘閱讀",
    content: `<p>如果 SoundBunny 停止工作或不再出售，則現代替代品是 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>，專為目前 macOS 構建的選單列每個應用程式音量混合器。它為您提供與一次性購買 Mac App Store 相同的核心功能（每個應用程式的獨立音量、靜音和增強），無需管理核心驅動程式、DMG 或訂閱，只需 14.99 歐元。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — SoundBunny 已消失 — 現代 Mac 每應用卷應用程式將取代它" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>SoundBunny怎麼了？</h2>
<p>SoundBunny 是 Prosoft Engineering 針對 macOS 的每個應用程式捲實用程式。它允許您直接從選單列為每個正在運行的應用程式設定不同的音量等級 - 音樂安靜，通話大聲，瀏覽器介於兩者之間。多年來，它是填補蘋果從未填補空白的少數工具之一。</p>
<p>問題是 SoundBunny 是遺留軟體。它沒有跟上蘋果對 macOS 音訊和安全性所做的深刻改變——Apple Silicon、強化的運行時、收緊的系統擴展規則以及刪除舊的音頻掛鉤。當像這樣的實用程式停止接收更新時，它最終會崩潰：無法啟動，在作業系統更新後失去對應用程式流的控制，或者根本無法在現代 Mac 上乾淨地安裝。如果那是你的處境，那你就沒有做錯任何事。落後的是應用程序，而不是你。</p>

<h2>為什麼macOS仍然需要第三方混音器</h2>
<p>這是誠實的部分：這是 macOS 中的真正差距，而不是您可以在「設定」中修復的錯誤。 Windows 十多年來一直為每個應用程式提供音量混合器。 macOS從來沒有。系統音量滑桿和聲音設定控制您的 <em>輸出裝置</em> 作為一個整體——每個應用程式都有相同的大師等級。沒有內建方法可以說「將 Safari 保持在 40%，但將 Zoom 保持在 100%」。</p>
<p>這就是像 SoundBunny 這樣的工具存在的原因，也是今天仍然需要更換的原因。當應用程式出現時，這種需求並沒有消失——蘋果只是還沒有解決這個問題。</p>

<h2>現代替代品：SoundDial</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 是一個每個應用程式的音量混合器，位於選單列中，可以執行 SoundBunny 用戶所依賴的功能，是針對今天的 macOS 而不是昨天的 macOS 構建的。功能重疊涵蓋了要點：</p>
<ul>
<li><strong>每個應用程式的獨立音量</strong> — 每個正在運行的應用程式一個滑塊，正是 SoundBunny 心理模型。</li>
<li><strong>每個應用程式靜音</strong> — 使一個嘈雜的應用程式靜音，而不影響其他所有應用程式。</li>
<li><strong>每個應用程式的音量提升</strong> — 推送一個安靜的應用程式 <em>上面</em> 當視訊或通話錄音太低時為 100%。 SoundBunny 無法可靠地放大現代 macOS 上過去的系統最大值； boost在這裡是真正的升級。</li>
<li><strong>體積曲線</strong> - 保存一組每個應用程式的等級（「工作」組合，「遊戲」組合）並在它們之間切換，而不是一次輕推一個滑桿。</li>
<li><strong>自動閃避</strong> - 當另一個音訊來源（例如通話中的麥克風）處於活動狀態時，自動降低背景應用程式音量。</li>
<li><strong>快速輸出切換</strong> — 從同一選單在揚聲器、耳機和其他輸出之間跳轉。</li>
</ul>

<h2>遷移實際上是什麼樣子</h2>
<p>沒有導入步驟 - 每個應用程式的音量等級不是您保留的檔案 - 但切換很快：</p>
<ul>
<li><strong>正確刪除SoundBunny。</strong> 退出它，然後刪除該應用程式。如果它安裝了任何幫助程式或登入項，請將其也刪除，這樣兩個實用程式就不會爭奪相同的音訊串流。</li>
<li><strong>從 Mac App Store 安裝 SoundDial。</strong> 它是沙盒化的，並透過商店分發，因此不需要安裝 DMG，也沒有「身份不明的開發人員」警告。一次購買，與您的 Apple ID 綁定。</li>
<li><strong>首次啟動時授予音訊存取權限。</strong> macOS 將請求 SoundDial 允許查看應用程式音訊。這是蘋果公司提供的現代的、經過認可的途徑——無需內核擴展，無需重新啟動，也不會降低系統安全性。授予它，您正在運行的應用程式將顯示為滑桿。</li>
<li><strong>重建你的混音。</strong> 設定常用應用程序，然後將該安排儲存為設定文件，這樣您就無需重做。</li>
</ul>

<h2>與SoundBunny的實際差異</h2>
<p>最重要的區別是 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 是當前軟體。它在 Apple Silicon 上本地運行，使用 Apple 支援的音訊 API，並且是一個 Mac App Store 應用程式 - 這意味著更新通過商店到達，並且它的構建是為了在作業系統升級中生存而不是破壞它們。沙盒化也意味著它無法超出其通道，這對於位於應用程式和揚聲器之間的東西來說是令人放心的。</p>
<p>一些誠實的警告，所以期望是正確的。由於 SoundDial 在 Apple 的音訊框架內運作，因此控制最適合透過正常系統輸出路由的標準應用程式。一些軟體透過自己的路徑或專用設備播放音頻，並且沒有菜單欄混音器（包括 SoundBunny）可以完全控制這些。每個應用程式的體積本質上是 macOS 之上的軟體層；它不是硬體混音器。在這些實際限制內，它可以完成 SoundBunny 過去所做的工作。</p>

<blockquote>如果您從 Windows 切換到 Mac，並期望每個應用程式都有音量混合器，那麼這個工具可以填補這一空白 - 現在它實際上是一個正在維護的工具。</blockquote>

<p>SoundBunny 運作良好，但它是遺產。如果您需要現代 Mac 上的每個應用程式音量、靜音和增強， <a href="https://apps.apple.com/app/id6772792641">在 Mac App Store 上取得 SoundDial</a> — 一次 14.99 歐元，無需訂閱，無需驅動程式。</p>`,
  },
  "boom-2-alternative-per-app-volume-mac": {
    slug: "boom-2-alternative-per-app-volume-mac",
    title: "Boom 2 Mac 的替代方案：每個應用程式數量，無需 Boom 3D 追加銷售",
    description: "Boom 2 是傳統的，並且不斷將您推向 Boom 3D。如果您只想提高每個應用程式的數量並在現代 macOS 上進行簡單的提升，這裡有一個集中的替代方案及其工作原理。",
    date: "2026-07-23",
    readTime: "5 分鐘閱讀",
    content: `<p>如果您喜歡 Boom 2 進行系統範圍的提升但想要簡單 <strong>每個應用程式</strong> 目前 Mac 的音量，誠實的答案是 Boom 2 是遺留的，不再是正確的工具。一個集中的替代方案是 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>，一個選單列混音器，為每個應用程式提供自己的音量滑桿、靜音和增強功能，一次價格為 14.99 歐元，無需推送更大的捆綁包。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac 的 Boom 2 替代方案：無需 Boom 3D 追加銷售的按應用程式數量" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>為什麼Boom 2不再適合</h2>
<p>Boom 2 成為一款深受喜愛的應用程式有一個特定的原因：它將 Mac 的整體音量提高到超出系統最大音量，並添加了均衡器。它在整個系統範圍內執行此操作，而不是每個應用程式。 2015 年還好。到了 2026 年，就會出現兩個問題。</p>
<p>首先，它是遺產。 Global Delight 顯然已將其精力轉移到了 Boom 3D 上，如果您打開 Boom 2 產品頁面，您會發現自己幾乎立即轉向更新、價格更高的應用程式。 Boom 2仍然存在，但它是供應商用來銷售Boom 3D的墊腳石，而不是受到積極喜愛的產品。</p>
<p>其次，也是更重要的一點：Boom 2 從來都不是每個應用程式的音量混合器。它提高並塑造了一個主輸出。如果您真正的痛苦是 Slack ping 的聲音比您的音樂更大，或者瀏覽器選項卡淹沒了通話，那麼 Boom 2 無法解決這個問題。它讓一切都變得更加響亮。那是不同的工作。</p>

<h2>macOS 上的「每個應用程式數量」實際上意味著什麼</h2>
<p>這是大多數替代綜述都會跳過的誠實背景：macOS 根本沒有內建的每個應用程式音量混合器。 Windows 已經使用多年了 - 右鍵單擊揚聲器，打開音量混合器，然後將 Chrome 設定為 40%，將 Spotify 設定為 80%。蘋果從未出貨過。 macOS 音量鍵只能移動一級。</p>
<p>因此，當您尋找“Boom 2 替代品”時，您通常真正尋找的並不是聲音更大的 Mac，而是用戶認為理所當然的每個應用程式控制 Windows。這是作業系統中真正的差距，而不是 Boom 2 或任何單一應用程式忘記建構的東西。</p>

<h2>SoundDial 適合的地方</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 是專門針對這一差距而設計的。它位於選單欄中，列出了當前播放音訊的應用程序，每個應用程式都有自己的滑桿。您可以為每個應用程式設定級別，而不是輕推一個主控制器並希望獲得最好的結果。</p>
<p>它的作用：</p>
<ul>
<li><strong>每個應用程式的獨立音量</strong> — 讓瀏覽器安靜，將音樂保存在您想要的地方，沒有全局妥協。</li>
<li><strong>每個應用程式靜音</strong> — 使一個嘈雜的應用程式靜音，而不接觸其他任何東西。</li>
<li><strong>每個應用程式的提升</strong> — 當視訊或通話錄製得太安靜時，單一應用程式就會超過其正常上限。這是 Boom 2 粉絲通常會錯過的部分，只不過這裡它針對的是一個應用程式而不是整個系統。</li>
<li><strong>體積曲線</strong> — 儲存「焦點」、「會議」或「遊戲」等佈局並一鍵切換。</li>
<li><strong>自動閃避</strong> — 當您開始講話時自動降低其他應用程式的音量，這對於通話和錄音非常有用。</li>
<li><strong>快速輸出切換</strong> — 從同一選單在揚聲器、耳機和其他輸出之間跳轉。</li>
</ul>

<h2>如何設定</h2>
<p>工作流程很短：</p>
<ul>
<li>安裝 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 從 Mac App Store — 沒有 DMG，沒有驅動程序，無需重新啟動。</li>
<li>點擊功能表列圖示以查看目前發出聲音的每個應用程式。</li>
<li>將每個應用程式的滑桿拖曳到您想要的等級；根據需要單獨靜音或增強。</li>
<li>如果您想稍後重複使用，請將排列另存為設定檔。</li>
</ul>
<p>因為它是透過 App Store 提供的，所以它是沙盒的並且可以乾淨地安裝。這是值得指出的，因為一些較舊的音訊工具依賴於核心擴展或虛擬音訊驅動程式——現代 macOS 越來越抵制這種東西。 SoundDial 不會要求您安裝驅動程式或降低任何安全性設定。</p>

<h2>誠實的限制</h2>
<p>每個應用程式的提升是真實的，但不是魔法。如果應用程式的來源音訊確實很安靜或錄製得很糟糕，則增強它會提高本底雜訊以及訊號，因此非常安靜的材料在用力推動時可能會發出嘶嘶聲。這是放大的物理極限，而不是任何特定應用程式的缺陷 - Boom 2 的系統增強也有同樣的權衡。將增強視為實際情況的餘量，而不是損壞音訊的救援。</p>

<h2>Boom 2 與對焦混音器對比</h2>
<p>如果您喜歡 Boom 2 的是系統範圍的響度加上 EQ，並且您不關心每個應用程式的控制，那麼 Boom 3D 就是供應商的預期繼任者 - 這是一條公平的道路，我們不會假裝不是這樣。但是，如果您嘗試過 Boom 2 並意識到您真正想要的是調低或調高一個應用程式而不移動所有內容，那麼 EQ 和增強捆綁包就是錯誤的工具形式。</p>
<blockquote>Boom 2讓整個Mac聲音更大。每個應用程式的混音器可讓您決定哪個應用程式聲音更大。這些解決不同的問題。</blockquote>
<p>價格差異也值得明確指出。 SoundDial 一次 14.99 歐元。沒有訂閱，沒有試用會變成更大的計劃，也沒有應用程式內路徑引導您進入更昂貴的關卡。您購買了攪拌機，您就擁有了攪拌機。</p>

<p>如果每個應用程式的音量（而不是系統範圍的均衡器）才是您真正想要的， <a href="https://apps.apple.com/app/id6772792641">在 Mac App Store 上嘗試 SoundDial</a> 並按照 macOS 應該讓您一直進行的方式設定您的等級。</p>`,
  },
  "finetune-vs-sounddial-mac": {
    slug: "finetune-vs-sounddial-mac",
    title: "FineTune 與 SoundDial：Mac 上的免費開源與按應用程式付費量",
    description: "FineTune 是一款針對 Mac 的免費開源按應用批量應用； SoundDial 是一款付費沙盒 App Store 應用程序，具有增強功能、配置文件和支援。這是一個誠實的比較，可以幫助您選擇。",
    date: "2026-07-23",
    readTime: "6 分鐘閱讀",
    content: `<p>FineTune 是一款適用於 macOS 的免費開源每應用程式音量混合器，因此，如果價格是您唯一關心的問題，那麼它是一個真正的選擇。 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 是一款付費（14.99 歐元，一次性）Mac App Store 應用程序，增加了每個應用程式的音量提升、保存的配置文件、自動閃避和供應商支援。真正的選擇是免費和 DIY，而不是沙盒和支持。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — FineTune 與 SoundDial：Mac 上的免費開源與付費按應用程式量" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>兩個應用程式解決的問題</h2>

<p>macOS 仍然沒有內建的每個應用程式音量混合器。 Windows 多年來一直擁有這一功能 - 右鍵單擊揚聲器圖標，打開音量混合器，每個應用程式都有自己的滑桿。在 Mac 上，您可以使用一個系統音量滑桿來處理所有事情：您的音樂、視訊通話、YouTube、通知鈴聲和遊戲都共用它。如果您的通話太安靜而 Spotify 太大聲，您唯一的「解決方案」就是完全靜音 Spotify。</p>

<p>FineTune 和 SoundDial 的存在就是為了填補這一空白。他們為每個正在運行的應用程式提供了自己的音量控制，這樣您就可以將會議音量保持在 100%，同時將背景音樂調低至 20%，而無需觸摸主滑桿。</p>

<h2>FineTune 的正確之處</h2>

<p>FineTune 是一款秉承 SoundSource 精神的更新、免費、開源應用程式。讓我們公平地對待它的優勢，因為它們是真實的：</p>

<ul>
  <li><strong>它不需要任何成本。</strong> 無需許可證，無需試用，無需升級。</li>
  <li><strong>來源是開放的。</strong> 你可以準確地閱讀它的作用，審核它的隱私，並且 - 如果你了解 Swift - 修改或分叉它。</li>
  <li><strong>它是社區驅動的。</strong> 任何人都可以修復錯誤，而且程式碼的壽命比任何一家公司都長。</li>
  <li><strong>它涵蓋了核心需求。</strong> 每個應用獨立的音量，這是 90% 的人真正在尋找的功能。</li>
</ul>

<p>如果您唯一的要求是“讓我關閉一個應用程式而不關閉所有應用程式”，並且您對沒有正式支援台的軟體感到滿意，那麼 FineTune 是一個合理的答案。在這裡推薦它並不是一種讓步——而是誠實的。</p>

<h2>DIY路線的誠實權衡</h2>

<p>免費和開源帶來的實際成本不會顯示在價格標籤上。這些並不是專門針對 FineTune 的，而是該方法的本質：</p>

<ul>
  <li><strong>安裝是手動的。</strong> 開源音訊工具通常作為下載的版本或 Homebrew 公式分發，而不是透過 App Store。你在蘋果審查之外進行安裝，並且你有責任保持它的更新。</li>
  <li><strong>每個應用程式的音訊攔截本質上是脆弱的。</strong> 路由另一個應用程式的音訊是一項深層系統工作。當 Apple 發布更改音訊堆疊的 macOS 更新時，這些工具可能會損壞，直到有人修補它們。對於志工項目，「某人」那個月可能很忙。</li>
  <li><strong>盡最大努力提供支援。</strong> 如果出現問題，您可以求助於 GitHub 問題並等待。沒有保證的回應，也沒有人有義務修復它。</li>
  <li><strong>功能範圍是維護者提供的任何內容。</strong> 核心音量控制可能已涵蓋；額外費用完全取決於貢獻者的時間。</li>
</ul>

<blockquote>誠實的框架：FineTune 用金錢換取維護責任。您節省了 14.99 歐元，並承擔了作業系統更新導致系統損壞的風險，直到社區趕上。</blockquote>

<h2>其中SoundDial不同</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 採取相反的貿易。您支付一次，作為回報，您將獲得 App Store 產品，背後有供應商，以及基於每個應用程式數量構建的更廣泛的功能集：</p>

<ul>
  <li><strong>每個應用程式的音量和靜音</strong> — 兩個應用程式提供的共用基線。</li>
  <li><strong>每個應用程式的音量提升</strong> — 將過於安靜的應用程式推至超過 100%。對於音訊輸出較弱的應用程式很有用，在這種情況下，拒絕其他輸出仍然不夠。</li>
  <li><strong>體積曲線</strong> — 儲存整個混音（「會議」、「焦點」、「遊戲」）並一鍵切換，而不是每次都重置滑桿。</li>
  <li><strong>自動閃避</strong> - 當您說話或選定的應用程式處於活動狀態時，請自動降低背景應用程式的運行速度，因此無需手動操作即可接通通話。</li>
  <li><strong>快速輸出切換</strong> — 從選單列在揚聲器、耳機和其他輸出之間跳轉。</li>
</ul>

<p>同樣重要的是 <em>如何</em> 它發貨了。 SoundDial 是沙盒化的，並透過 Mac App Store 分發 - 沒有單獨的 DMG，沒有內核驅動程序，沒有安裝音訊驅動程式。像任何其他應用程式一樣透過 App Store 進行更新，並且當出現問題時可以向真正的開發人員發送電子郵件。這就是 14.99 歐元的具體價值：不僅僅是更多的功能，還有人負責讓它們在 macOS 版本中正常運作。</p>

<h2>一個適用於兩者的誠實警告</h2>

<p>沒有第三方應用程式可以將 macOS 的音訊系統變成 Windows 的音量混合器，因為 Apple 沒有為每個應用程式音訊公開乾淨的公共 API。此類別中的每個工具（免費或付費、開放或封閉）都使用系統級音訊技術來解決該限制。這意味著 FineTune 和 SoundDial 都會受到 macOS 音訊重大變化的影響。差別在於誰負責事後修復：志工社區，還是產品依賴它的付費供應商。</p>

<h2>你該選擇哪一個？</h2>

<ul>
  <li><strong>選擇 FineTune 如果</strong> 您想要零成本，重視開源透明度，只需要基本的每個應用程式數量，並且可以輕鬆地安裝在 App Store 之外，並在出現問題時能夠自我支援。</li>
  <li><strong>選擇 SoundDial 如果</strong> 您想要一鍵式 App Store 安裝、增強、設定檔和自動閃避等附加功能，以及參與遊戲的供應商的更新和支援保證。</li>
</ul>

<p>兩者都有效。這實際上取決於您是否願意花錢或花注意力。如果您寧願購買受支援的沙盒應用程式並且不再考慮它， <a href="https://apps.apple.com/app/id6772792641">在 Mac App Store 上取得 SoundDial</a> 一次性 14.99 歐元 — 無需訂閱，無需驅動程序，無需 DMG。</p>`,
  },
  "background-music-vs-sounddial-mac": {
    slug: "background-music-vs-sounddial-mac",
    title: "Background Music vs SoundDial：免費的 Mac 音量混合器夠用嗎？",
    description: "免費 Background Music 應用程式和付費 SoundDial 之間的公平競爭。免費虛擬驅動程式方法在哪裡有效，在哪裡失效，以及 14.99 歐元的本機混音器何時值得。",
    date: "2026-07-23",
    readTime: "6 分鐘閱讀",
    content: `<p>Background Music 是免費的，並且真正擅長基礎知識：它為每個應用程式提供了自己的音量滑塊，並且可以在另一個應用程式播放時自動暫停音樂。如果這就是您所需要的，請使用它。但它依賴虛擬音訊驅動程序，該驅動程式可能會在 macOS 更新後中斷，並且缺乏每個應用程式的增強、設定檔和輸出切換。 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 用金錢換取無駕駛、沙盒、受支持的替代方案。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Background Music 與 SoundDial：免費的 Mac 音量混合器夠嗎？" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>首先，關於macOS的誠實事實</h2>
<p>macOS 沒有內建的每個應用程式音量混合器。 Windows 的音量混合器已經有十多年了，但在 Mac 上，系統滑桿可以同時移動所有內容。沒有 Apple 支援的 API 可以讓第三方應用程式乾淨地攔截和重新平衡各個應用程式流。這個差距就是 Background Music 和 SoundDial 等工具存在的原因，也是以下大多數權衡的根本原因。</p>

<h2>Background Music 擅長什麼</h2>
<p>Background Music 是一款開源功能表列應用程序，已經存在多年，並且有充分的理由擁有忠實的追隨者。它為您提供：</p>
<ul>
<li><strong>每個應用程式的獨立音量</strong> ——核心特徵。在保持通話聲音的同時調低 Spotify 的音量。</li>
<li><strong>自動暫停</strong> - 當其他地方開始出現音訊時，它可以暫停您的音樂播放器，這對於會議來說是一個很好的選擇。</li>
<li><strong>跟隨您的裝置音量</strong> 以及一個簡單、嚴肅的介面。</li>
<li><strong>零成本</strong> — 它是免費的，代碼是公開的。</li>
</ul>
<p>對很多人來說這就夠了。如果您的整個願望清單是“讓一個嘈雜的應用程式變得更安靜而不影響其他應用程式”，Background Music 涵蓋了它，並且您不應該為不需要的東西付費。公平在這裡很重要：這是一個合法有用的工具。</p>

<h2>自由方法的缺陷在哪裡</h2>
<p>問題是 <em>如何</em> Background Music 實現每個應用程式的數量。由於 macOS 沒有提供官方路徑，因此它會安裝一個虛擬音訊驅動程式（舊 Soundflower 方法的修改版本），透過自身路由系統音訊。這種架構很聰明，但它也帶來了實際成本：</p>
<ul>
<li><strong>macOS 更新後它會中斷。</strong> 虛擬音訊驅動程式位於系統深處，主要的 macOS 版本歷史上已停用或不穩定它們。使用者經常報告升級後出現無聲、失真或需要重新安裝的情況。當它破裂時，你通常只能靠自己。</li>
<li><strong>安裝較重。</strong> 您正在為 Mac 添加一個與核心相鄰的音訊設備，而不僅僅是一個應用程式。乾淨地卸載可能很麻煩。</li>
<li><strong>它成為您的預設輸出設備。</strong> 由於所有內容都透過虛擬設備路由，因此某些專業音訊、會議或遊戲應用程式可能會表現得很奇怪，並且切換真實輸出是一個額外的步驟。</li>
<li><strong>發展是社區節奏的。</strong> 沒有支援台。當志工有時間時，修復就會到來，這對於突然靜音的音訊工具來說是一個有意義的風險。</li>
</ul>
<p>這些都不會讓 Background Music 變得糟糕。它使其成為一個具有免費工具權衡的免費工具。</p>

<h2>您使用 SoundDial 實際支付的費用</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 是一個 Mac App Store 應用程序，它塑造了它的本質。由於 App Store 應用程式是沙盒的，無法提供 Background Music 使用的低階虛擬驅動程序，因此 SoundDial 無需安裝單獨的音訊設備或 DMG 即可運行。這意味著：</p>
<ul>
<li><strong>沒有虛擬驅動程式的怪癖。</strong> 沒有額外的輸出設備劫持您的音訊鏈，並且在系統更改時無需重新安裝任何內容。</li>
<li><strong>它在 macOS 更新中更加優雅地生存。</strong> App Store 分發和沙箱意味著它是根據支援的路徑構建的，並透過商店進行更新，因此作業系統升級不太可能讓您保持沉默。</li>
<li><strong>每個應用程式的音量提升。</strong> 這是一個真正的功能差異：SoundDial 可以推送應用程式 <em>上面</em> 100% 適用於安靜的來源——錄音太低的播客、低沉的視訊通話。 Background Music 僅衰減。</li>
<li><strong>音量設定檔。</strong> 儲存一組每個應用程式等級（「會議」、「音樂」、「遊戲」）並點擊一次即可切換，而不是每次都拖曳滑桿。</li>
<li><strong>自動閃避。</strong> 當選定的來源播放時，自動降低其他應用程式的音量——這是自動暫停理念的一種更可配置的方式。</li>
<li><strong>快速輸出切換</strong> 烘焙到選單列中，加上每個應用程式的靜音。</li>
<li><strong>真正的支持。</strong> 這是一種付費產品，出現問題時有人負責。</li>
</ul>

<h2>誠實的決定</h2>
<blockquote>如果您想要免費並且只需要基本的每個應用程式數量，並且您可以在 macOS 更新後輕鬆排除故障，那麼 Background Music 是一個不錯的選擇。如果你想要升壓、設定檔、閃避、輸出切換、沒有虛擬驅動程式的脆弱性，以及在故障時有人發電子郵件，SoundDial 值 14.99 歐元。</blockquote>
<p>一些具體的決勝局。如果您經常處理過於安靜的音源，僅使用增強功能就證明了其價格合理——Background Music 根本無法使音訊比音源更響亮。如果您害怕每年一度的「我的音訊能否在更新後倖存下來」的賭博，那麼沙盒商店應用程式可以消除這種焦慮。如果您喜歡一勞永逸的場景，設定檔可以節省真正的麻煩。而且它是一次性的 14.99 歐元，而不是訂閱，因此比較的是單次購買與維護免費驅動程式所花費的時間。</p>
<p>相反，如果您是一位喜歡開源的修補匠，想要閱讀程式碼，並且大多數情況下只是拒絕一個應用程式 - 省錢。這兩種工具都解決相同的核心問題；它們在魯棒性、功能深度以及當 macOS 在它們下面發生變化時誰會抓住你方面有所不同。</p>

<p>想要每個應用程式的容量而不需要虛擬驅動程式的賭博嗎？ <a href="https://apps.apple.com/app/id6772792641">在 Mac App Store 上取得 SoundDial</a> — 一次性 14.99 歐元，沙盒，無驅動程序，內建增強、設定檔和自動閃避功能。</p>`,
  },
  "is-soundsource-worth-it-mac": {
    slug: "is-soundsource-worth-it-mac",
    title: "SoundSource 值 39 美元嗎？更便宜的一次性 Mac 替代品",
    description: "SoundSource 是一款功能強大的 Mac 音訊工具，售價約為 39 美元，但如果您只需要每個應用程式的音量和增強，那麼它就太過分了。這是一個誠實的比較和 14.99 歐元的一次性替代品。",
    date: "2026-07-23",
    readTime: "5 分鐘閱讀",
    content: `<p>如果您需要完整的工具包，SoundSource 是值得的：每個應用程式的音量、每個應用程式的 10 頻段均衡器、裝置之間的音訊路由以及系統範圍的效果。但如果你主要想要每個應用程式的音量、每個應用程式的靜音和音量增強，那麼 39 美元左右的價格就顯得有些過分了。對於那個範圍較窄的工作， <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 一次費用為 14.99 歐元。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — SoundSource 值 39 美元嗎？一種更便宜的一次性 Mac 替代品" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>SoundSource 實際上做了什麼</h2>
<p>Rogue Amoeba 的 SoundSource 是一款真正優秀的軟體，公平地對待這一點很重要。它不僅僅是一個音量混合器。它為您提供：</p>
<ul>
<li><strong>每個應用程式的音量控制</strong> 從選單列中，這是大多數人喜歡的功能。</li>
<li><strong>完整的 10 頻段均衡器</strong> 您可以在每個應用程式或系統範圍內應用，以及其他音訊效果（透過音訊單元插件）。</li>
<li><strong>輸出/輸入路由</strong>，包括將單一應用程式傳送到與系統其他部分不同的輸出裝置。</li>
<li><strong>快速設備切換</strong> 和耳機特定的等化器預設。</li>
</ul>
<p>如果您是播客、串流媒體主播或音訊迷，想要調整耳機上的均衡器、將應用程式的聲音重新導向到單獨的揚聲器或堆疊音訊單元效果，那麼 SoundSource 就物有所值。這裡沒有什麼是敲門的。</p>

<h2>價格問題</h2>
<p>SoundSource 是一種付費的一次性許可證，價格約為 39 美元（價格因版本和促銷活動而異）。它不是 Netflix 意義上的定期訂閱，但它遵循經典的付費應用程式模式：您購買主要版本，未來的主要升級通常是折扣的付費升級，而不是永久免費。幾年來，這不僅僅是一次購買。對於許多 Mac 用戶來說，誠實的問題是：當我真正接觸到的只是每個應用程式的音量滑桿時，我是否要為路由和均衡器套件支付 39 美元？</p>

<blockquote>如果您打開了 SoundSource 並且只使用過音量滑桿和靜音按鈕，那麼您就需要支付一套套件的費用來使用其中的一個抽屜。</blockquote>

<h2>為什麼這個問題存在</h2>
<p>這是誠實的根本原因：macOS 沒有內建的每個應用程式音量混合器。 Windows已經有好幾年了，但在Mac上，系統體積是全有或全無。 Apple 沒有提供任何方法可以讓 Spotify 在視訊通話聲音很大時保持安靜，或者在不接觸其他所有內容的情況下將一個應用程式靜音。這種差距正是 SoundSource 等工具的原因 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 存在。這是一個真正的作業系統限制，而不是任何一個應用程式發明的問題來解決。</p>

<h2>更輕、更便宜的選擇適合的地方</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 是一個選單列每個應用程式音量混合器，專為常見情況而不是專業音訊情況而構建。它涵蓋：</p>
<ul>
<li><strong>每個應用程式的獨立音量</strong> — 當會議保持最高音量時，請放下音樂。</li>
<li><strong>每個應用程式靜音</strong> — 使一個應用程式靜音，而不會使 Mac 靜音。</li>
<li><strong>每個應用程式的音量提升</strong> — 當訊號源太弱時，將安靜的應用程式推至正常的 100% 以上。</li>
<li><strong>體積曲線</strong> — 儲存一組每個應用程式等級（例如「焦點」或「呼叫」佈局）並點擊即可切換。</li>
<li><strong>自動閃避</strong> — 當您開始講話或播放所選應用程式時，請自動降低其他應用程式的音量。</li>
<li><strong>快速輸出切換</strong> — 從選單列在揚聲器、耳機和其他裝置之間跳轉。</li>
</ul>
<p>這是 <strong>€14.99 一次性</strong>，透過 Mac App Store 出售，因此它是沙盒的，沒有單獨的 DMG，沒有內核擴展，也不需要安裝音訊驅動程式。您可以像任何 App Store 應用程式一樣下載它，並透過商店進行更新。</p>

<h2>誠實的比較</h2>
<p>對權衡保持清醒的認識。 SoundSource 比 SoundDial 具有更多功能，如果以下任何一項對您來說很重要，那麼 SoundSource 是更好的選擇：</p>
<ul>
<li>您想要一個真正的每個應用程式或系統 <strong>均衡器</strong> 和音訊單元效果。</li>
<li>你需要 <strong>將單一應用程式路由到不同的輸出設備</strong> 比其他一切都重要。</li>
<li>你依靠 <strong>耳機特定的 EQ 預設</strong> 和細粒度的音頻處理。</li>
</ul>
<p>SoundDial 不執行 EQ 或每個應用程式裝置路由。故意把它弄窄了。它給你帶來的回報是更低的價格、更輕的佔用空間以及針對大多數人真正想要的東西的集中式選單欄介面：將每個應用程式保持在你選擇的級別，並在頂部提供增強和設定檔。</p>

<h2>那麼，SoundSource值得嗎？</h2>
<p>是的，如果您使用均衡器和路由。它是由受人尊敬的開發商提供的成熟且得到良好支援的軟體，而且價格反映了真實的功能。但「值得」取決於你會觸摸什麼。如果您打開應用程式並且僅調整音量滑桿、將應用程式靜音或希望一個安靜的應用程式聲音更大，那麼您就需要為基本混音器需求支付高級套件費用。在這種情況下，一次性 14.99 歐元的工具是更明智的選擇，如果您的需求擴展到 EQ 和路由，您可以隨時升級到 SoundSource。</p>

<p>如果您只需要每個應用程式的音量、增強、靜音、設定檔和自動閃避， <a href="https://apps.apple.com/app/id6772792641">在 Mac App Store 上取得 SoundDial</a> — 一次 14.99 歐元，無需訂閱，無需驅動程式。</p>`,
  },
  "chrome-too-loud-mac": {
    slug: "chrome-too-loud-mac",
    title: "Chrome Mac 聲音太大？關閉一個瀏覽器而不將所有內容靜音",
    description: "Chrome 比 Mac 上的其他應用程式更響亮嗎？了解內建修復（每個標籤靜音、網站聲音設定）以及如何為 Chrome 設定真正的每個應用程式音量，使其保持比其他任何東西都更安靜。",
    date: "2026-07-23",
    readTime: "5 分鐘閱讀",
    content: `<p>macOS 沒有內建的每個應用程式音量，因此您無法在本機調低 Chrome，同時讓其他應用程式保持最大音量。您最快的免費修復是將嘈雜的標籤靜音，降低每個影片播放器內的音量，或在 Chrome 的設定中阻止每個網站的聲音。要獲得真正、持久的 Chrome 音量級別，您需要每個應用程式混音器。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Chrome 在 Mac 上聲音太大？關閉一個瀏覽器而不將所有內容靜音" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>為什麼Chrome聽起來比其他一切都響亮</h2>
<p>Chrome 在設計上不一定「響亮」——Chrome 路由來自許多獨立來源的音訊：YouTube、自動播放廣告、視訊通話、背景音樂標籤和每個都有自己響度的網路應用程式。有些網站的製作很熱門，廣告也非常響亮，而 Chrome 會以系統的最大輸出電平播放所有這些內容。同時，您的音樂應用程式或通話可能會更安靜，因此 Chrome 在混音中佔據主導地位。</p>
<p>在 Windows 上，您只需打開音量混合器並向下拖曳 Chrome 滑桿即可。 macOS 根本不包含該功能。系統音量鍵可同時控制所有內容，因此調低 Chrome 也會調低音樂、通知和通話的音量。這是核心限制——這是作業系統的差距，而不是你做錯了什麼。</p>

<h2>無需花費任何費用的內建修復</h2>
<p>在安裝任何東西之前，請嘗試這些。他們不會給你一個 Chrome 音量旋鈕，但他們解決了大多數「一個響亮的標籤」問題。</p>
<ul>
<li><strong>將吵雜的標籤靜音。</strong> 右鍵單擊該標籤並選擇“靜音網站”，或按一下播放音訊的標籤上顯示的小揚聲器圖示。這會使該選項卡完全靜音，而不會影響 Chrome 的其餘部分。</li>
<li><strong>降低播放器內部的音量。</strong> 最可靠的技巧：在 YouTube、Netflix 或任何正在播放的內容中向下拖曳音量滑桿。網路玩家會記住每個網站自己的級別，因此安靜的 YouTube 下次會保持安靜。</li>
<li><strong>每個站點阻止聲音。</strong> 前往 <em>chrome://設定/內容/聲音</em>。您可以在「允許」和「靜音」之間切換站點，並將特定網域新增至靜音清單。非常適合永久靜音自動播放的網站。</li>
<li><strong>殺死自動播放廣告。</strong> 廣告音訊往往是真正的罪魁禍首。內容攔截器或將選項卡靜音直到您準備好觀看，可以消除最令人驚訝的響度。</li>
</ul>
<blockquote>這些確實有用且免費。但請注意他們不能做什麼：他們靜音或管理單一選項卡。他們都不會讓你說「將所有 Chrome 保持在 40%，而我的音樂保持在 100%」。</blockquote>

<h2>誠實的限制：macOS 中沒有每個應用程式的數量</h2>
<p>如果您的實際目標是“Chrome 應該始終比我的其他應用程式更安靜”，那麼內建工具就達不到要求。每個選項卡的靜音要么全有要么全無。當網站不記得播放器滑桿且必須不斷重做時，播放器滑桿會重設。系統體積將所有東西移動在一起。</p>
<p>這是一個真正的 macOS 限制，而不是一個可以被設定掉的錯誤。 Apple 從未推出過 Windows 風格的音量混音器。為 Chrome 獲得持久、獨立的音量等級的唯一方法是使用位於您的應用程式和輸出裝置之間並應用每個應用程式增益的第三方應用程式。</p>

<h2>為 Chrome 設定每個應用程式的實際音量</h2>
<p>選單列混音器，例如 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 為 macOS 提供了它所缺少的每個應用程式的音量控制。它列出了目前正在播放音訊的每個應用程序，並為每個應用程式提供了自己的滑桿 - 因此您可以將 Chrome 拉至舒適的水平，並將 Spotify、您的通話和系統聲音保留在原處。</p>
<p>以下是如何用它來馴服大聲的 Chrome：</p>
<ul>
<li>打開選單列混音器並在活動應用程式清單中找到 Chrome。</li>
<li>將 Chrome 的滑桿向下拖曳到 40% 到 50%。其他應用程式保持不變。</li>
<li>如果某個特定應用程式太 <em>安靜</em> 相反 - 一個低聲通話的應用程式 - 使用 <a href="https://apps.apple.com/app/id6772792641">每個應用程式的音量提升</a> 將其推至 100% 以上，同時保持 Chrome 較低。</li>
<li>當您需要靜音而不關閉選項卡時，可以使用每個應用程式靜音立即將 Chrome 靜音。</li>
</ul>
<p>因為關卡與應用程式相關，所以它會被保留。 Chrome 在各個分頁、網站和重新啟動時都保持您選擇的音量 - 每次開啟新影片時都無需重新拖曳播放器滑桿。</p>

<h2>更進一步：設定檔、閃避和輸出切換</h2>
<p>一旦您擁有了每個應用程式的控制權，一些額外的功能就值得保留。 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 讓您節省音量 <strong>簡介</strong> — 例如，Chrome 安靜而音樂響亮的“焦點”配置文件，以及 Chrome 占主導地位的“觀看”配置文件 — 只需單擊即可在它們之間切換。當選定的來源啟動時，自動閃避可以自動隱藏其他應用程式（很方便，因此呼叫永遠不會被喧鬧的瀏覽器標籤淹沒）。快速輸出切換讓您可以在揚聲器、耳機和其他裝置之間切換，而無需深入了解系統設定。</p>
<p>Mac App Store 一次性購買價格為 14.99 歐元——無需訂閱，無需安裝驅動程序，無需 DMG 或內核擴展。因為它是沙箱並透過 App Store 分發，所以不需要粗略的音訊驅動程式安裝所依賴的舊混音器工具。</p>

<h2>您應該使用哪個修復程序？</h2>
<p>如果您偶爾只有一個令人討厭的選項卡，請使用 Chrome 的內建靜音和網站聲音設定 - 它們是免費的並且有效。如果你經常發現自己希望 Chrome 可以簡單地被關閉，而其他一切都保持不變，那麼這正是 macOS 留下的空白，而每個應用程式的混合器就是一個乾淨的解決方案。</p>

<p>想要 Chrome 永久安靜而不將音樂或通話靜音嗎？ <a href="https://apps.apple.com/app/id6772792641">在 Mac App Store 上取得 SoundDial</a> 並為每個應用程式提供自己的音量滑桿。</p>`,
  },
  "whatsapp-telegram-notifications-too-loud-mac": {
    slug: "whatsapp-telegram-notifications-too-loud-mac",
    title: "WhatsApp 和 Telegram 通知在 Mac 上聽起來太大聲？拒絕他們",
    description: "修正 WhatsApp 和 Telegram 桌面通知聲音在 Mac 上太大的問題。從每個應用程式的內建設定開始，然後在 macOS 不為您提供每個應用程式控制時降低或靜音整個應用程式。",
    date: "2026-07-23",
    readTime: "5 分鐘閱讀",
    content: `<p>從每個應用程式內部開始：WhatsApp 和 Telegram 都允許您在自己的設定中靜音或更改通知聲音，這是最乾淨的修復。但 macOS 沒有每個應用程式的通知音量滑塊，因此如果應用程式自己的聲音仍然太大，您唯一真正的槓桿是使用每個應用程式的音量工具降低或靜音整個應用程式的音訊。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — WhatsApp 和 Telegram 通知在 Mac 上聽起來太大聲？拒絕他們" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>首先，使用應用程式自帶的通知設置</h2>

<p>WhatsApp 和 Telegram 都附帶了自己的聲音控制，這是您應該始終開始的地方。這是最精確的修復，並且不會影響 Mac 上的任何其他內容。</p>

<p><strong>WhatsApp 桌上型電腦：</strong> 開啟WhatsApp，點選 <em>設定</em> （齒輪圖示），然後 <em>通知</em>。您可以關閉 <em>聲音</em> 完全同時保留橫幅，或停用通知預覽。 WhatsApp 不提供音量滑桿，因此它本質上是聲音本身的開啟或關閉。</p>

<p><strong>Telegram 桌上型電腦：</strong> 打開 <em>設定 → 通知和聲音</em>。 Telegram 這裡比較靈活。您可以全域關閉通知聲音、將各個聊天靜音或設定自訂（更安靜）的鈴聲。您也可以透過開啟單一雜訊的群組並選擇將其靜音 <em>靜音</em>。對大多數人來說，將最吵鬧的聊天靜音可以解決問題，而不必在任何地方保持沉默。</p>

<p>如果聲音很好但太頻繁，請將最常觸發的特定聊天或頻道靜音，而不是在整個應用程式範圍內殺死聲音。這使重要警報保持清晰可聽。</p>

<h2>在macOS系統設定中關閉通知聲音</h2>

<p>macOS 有第二層控制，在某些情況下會覆蓋應用程式。前往 <em>系統設定 → 通知</em>，在清單中選擇WhatsApp或Telegram，然後關閉 <em>播放通知聲音</em>。這會靜音該應用程式的警報鈴聲，同時仍顯示橫幅。</p>

<p>如果您只想讓應用程式在通知時保持安靜，而不關心其他音訊（通話、視訊），那麼這確實是一個很好的解決方案。結合應用程式本身的設置，它涵蓋了大多數「ping 不和諧」的投訴。</p>

<h2>真正的限制：macOS 沒有每個應用程式的數量</h2>

<p>這是誠實的部分。上述步驟是開/關開關。他們不能做的是轉 WhatsApp 或 Telegram <em>向下</em> 比如說 40%，同時將其他所有內容保持在最大音量。 Windows 多年來一直擁有每個應用程式的音量混合器。 macOS 根本不包含它，並且沒有隱藏設定或 Terminal 命令來添加它。</p>

<p>當問題不是具體的通知鈴聲而是整個應用程式聲音太大時，這一點很重要：</p>

<ul>
<li>WhatsApp 或 Telegram <strong>語音和視訊通話</strong> 與您的音樂或會議相關的最大音量</li>
<li>您想要保留但處於較低級別而不是完全關閉的通知聲音</li>
<li>鈴聲的聲音遠遠超過您正在聽的任何其他聲音</li>
<li>當您專注於其他事情時，希望應用程式在背景安靜地發出聲音</li>
</ul>

<p>這些都無法透過內建工具解決，因為它們只提供靜音，而不提供等級。這個差距是一個真正的 macOS 限制，而不是你忽略的東西。</p>

<h2>使用 SoundDial 設定每個應用程式的音量</h2>

<p>要真正關閉而不是關閉單個應用程序，您需要每個應用程式的音量混合器。 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 是一個選單欄應用程序，為 macOS 提供了它從未附帶過的每個應用程式的音量控制。它列出了當前播放音訊的每個應用程序，並為每個應用程式提供了自己的滑桿。</p>

<p>對於這個具體問題：</p>

<ul>
<li>打開 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 從選單列中找到 WhatsApp 或 Telegram 在清單中。</li>
<li>將其滑桿向下拖曳到舒適的水平，例如 30-40%，同時保持您的音樂、瀏覽器或視訊通話不變。</li>
<li>使用每個應用程式 <strong>靜音</strong> 按鈕可在通話或會議期間立即使應用程式靜音，然後稍後取消靜音，而無需深入了解設定。</li>
<li>如果您需要相反的，一個太軟的安靜應用程序，每個應用程序 <strong>提升</strong> 可以將其推至100%以上。</li>
</ul>

<p>因為它為每個應用程式設定了一個級別，所以 SoundDial 會保持通知鈴聲和呼叫音訊可聽但相稱，而不是內建選項強加給您的全有或全無的選擇。您也可以儲存 <strong>體積分佈</strong>，因此只需單擊即可實現使聊天應用程式保持低功耗的“焦點”設定。</p>

<blockquote>一個誠實的警告：在 SoundDial 中降低應用程式的整體音量也會降低其通知鈴聲，因為對於 macOS 它們是同一應用程式的音訊。如果您希望完全關閉通知但以最大音量通話，請使用應用程式自己的靜音加上鈴聲的系統設置，並保留 SoundDial 來設定一般等級。</blockquote>

<p>SoundDial 是 Mac App Store 的一次性購買產品，售價為 14.99 歐元，沙盒化，無需訂閱，無核心驅動程序，也無需側載 DMG。當您真正想要的修復（關閉而不是關閉）macOS 本身無法做到時，這就是實際的答案。</p>

<h2>您應該使用哪個修復程序？</h2>

<p>從上到下工作。首先嘗試應用程式自己的通知設置，然後嘗試 macOS 系統設置來消除鈴聲。如果您真正想要的是將 WhatsApp 或 Telegram 降低到特定音量，或者在通話期間即時靜音該應用程序，那麼每個應用程式混音器就可以發揮作用。</p>

<p>厭倦了在聊天應用程式的完全靜音和完全靜音之間進行選擇？ <a href="https://apps.apple.com/app/id6772792641">在 Mac App Store 上取得 SoundDial</a> 並為每個應用程式提供自己的音量旋鈕。</p>`,
  },
  "game-too-loud-vs-voice-chat-mac": {
    slug: "game-too-loud-vs-voice-chat-mac",
    title: "Mac 上的遊戲音訊比 Discord 大聲嗎？如何平衡遊戲音量和語音音量",
    description: "您的遊戲淹沒了 Mac 上的 Discord 語音聊天，並且沒有內建音量混合器。這就是為什麼 macOS 缺乏 Windows 風格的每個應用程式音量，以及如何在保持聲音調高的同時調低遊戲音量。",
    date: "2026-07-23",
    readTime: "5 分鐘閱讀",
    content: `<p>macOS 沒有內建的每個應用程式音量混合器，因此您無法在保持 Discord 大聲的同時本機限制遊戲。解決方案是一個選單列應用程序，它可以為每個應用程式設定獨立的音量。將遊戲速度調低至 40-50%，將語音聊天保持在 100%，兩者都保持平衡，無需觸摸遊戲內滑桿。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac 上的遊戲音訊比 Discord 響亮？如何平衡遊戲音量和語音音量" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>為什麼這種情況發生在 Mac 上（而不是 Windows 上）</h2>

<p>如果您玩過 Windows 遊戲，您就會知道音量混合器：右鍵單擊揚聲器圖標，每個正在運行的應用程式都會有自己的滑桿。你放棄遊戲，加註 Discord，完成。 macOS 根本就沒有提供該功能。有一個主輸出音量和一些應用程式層級的切換隱藏在系統設定中，但沒有針對任意應用程式的每個應用程式層級控制。</p>

<p>因此，當遊戲的混音掌握得很好時，它的爆炸、音樂和槍聲就會以與朋友的聲音相同的輸出水平出現。有些遊戲會提供主音量滑桿，但許多遊戲的音量滑桿都不夠低，而且許多啟動器、瀏覽器和獨立遊戲根本不提供有用的控制。 Discord本身只能讓你調整傳入使用者的音量，而無法調整與他們競爭的遊戲。</p>

<p>老實說，這是作業系統層級的差距，而不是可以切換掉的錯誤。 Apple 的音訊堆疊將所有內容路由到單一輸出流，並且沒有第一方 UI 可以將其拆分為每個應用程式。這就是為什麼您需要位於應用程式和輸出裝置之間的第三方工具。</p>

<h2>手動解決方法（以及它們為何不足）</h2>

<p>在使用軟體之前，有必要了解免費選項及其限制：</p>

<ul>
<li><strong>降低遊戲的應用程式內音量。</strong> 如果遊戲有一個具有足夠精細步長的主滑塊，則可以使用。許多會以 10% 的增量停止，或將音樂和效果捆綁在一起，因此您無法僅抑制響亮的部分。</li>
<li><strong>在Discord中培養你的朋友。</strong> 右鍵單擊每個用戶並提高他們的音量。這有一點幫助，但效果最好，而且並沒有觸及遊戲的實際問題。</li>
<li><strong>使用硬體音量旋鈕的耳機。</strong> 只會改變整體水平，不會改變遊戲和語音之間的平衡。</li>
<li><strong>透過虛擬設備路由音訊。</strong> 像 Loopback 或 BlackHole 這樣的工具可以分割流，但它們針對的是專業人士，需要真正的設置，並且對於「讓遊戲更安靜」來說有些過分了。</li>
</ul>

<p>這些都沒有給你 Windows 用戶認為理所當然的一件事：每個應用程式都有一個快速滑桿。這就是差距 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 是為了填充而建造的。</p>

<h2>直接修復：每個應用程式獨立的音量</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 是 macOS 的選單列每個應用程式音量混合器。它顯示當前正在播放聲音的每個應用程序，並為每個應用程式提供自己的滑塊，就像 Windows 音量混合器一樣。對於遊戲與語音問題，工作流程很短：</p>

<ul>
<li>當遊戲和 Discord 都運行時，請點擊選單列中的 SoundDial 圖示。</li>
<li>在清單中找到該遊戲並將其滑桿拉至大約 40-50%。</li>
<li>將 Discord（或 Slack、Zoom 或您的語音應用程式）保留為 100%。</li>
<li>在遊戲過程中進行動態調整－在喧鬧的交火中進一步降低遊戲速度，在安靜的探索過程中將遊戲速度調高。</li>
</ul>

<p>由於等級是針對每個應用程式的，因此您只需設定一次即可保留。無論遊戲本身的混音有多熱門，遊戲都會保持上限，並且您的朋友也能清楚地聽到它的聲音。</p>

<h2>其餘設定的增強、靜音和配置文件</h2>

<p>相同的工具涵蓋了語音遊戲帶來的鄰近煩惱：</p>

<ul>
<li><strong>每個應用程式的提升。</strong> 如果隊友的麥克風即使在 Discord 的最大值下也很安靜，您可以推送語音應用程式 <em>上面</em> 100%，所以它會貫穿遊戲而不是被埋沒。</li>
<li><strong>每個應用程式靜音。</strong> 立即將背景瀏覽器標籤或音樂應用程式靜音，無需按 Alt 鍵或終止播放。</li>
<li><strong>音量設定檔。</strong> 儲存遊戲進度為 45% 且 Discord 增強的「遊戲」設定文件，然後一鍵切換回「正常」設定檔以供日常使用 - 每次會話時無需重新拖曳滑桿。</li>
<li><strong>自動閃避。</strong> 當有人說話時，遊戲會自動下降，這樣標註總是會出現在動作之上。</li>
<li><strong>快速輸出切換。</strong> 從同一選單在耳機和揚聲器之間跳轉，無需深入系統設定。</li>
</ul>

<blockquote><p>思維模型很簡單：每個應用程式一個滑塊，Windows 多年來一直這樣做。 macOS 只是從未提供過它，因此一個小實用程式可以恢復奇偶校驗。</p></blockquote>

<h2>誠實地期待什麼</h2>

<p>每個應用程式的混合器乾淨地解決了平衡問題，但正確設定了期望。它控制軟體輸出電平——它無法修復音訊掌握不好的遊戲，也無法發出從未捕獲的信號（真正損壞的麥克風仍然需要硬體修復）。 Boost 增加了實際增益，因此將安靜的來源推到遠超過 100% 會導致失真，就像將任何擴大機調得太高一樣。不過，如果使用得當，大多數設定都需要適度的遊戲上限和小幅語音增強。</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 是沙盒的，直接從 Mac App Store 安裝 - 沒有驅動程序，沒有內核擴展，沒有值得信任的 DMG。一次性售價 14.99 歐元，無需訂閱，支援 28 種語言的 macOS 音量控制。</p>

<p>別再與遊戲中的滑桿對抗了。搶 <a href="https://apps.apple.com/app/id6772792641">Mac App Store 上的 SoundDial</a>，把遊戲調低，讓你的隊伍保持大聲，最後得到Windows風格的音量混合器macOS忘記發貨了。</p>`,
  },
  "external-monitor-speaker-volume-too-loud-mac": {
    slug: "external-monitor-speaker-volume-too-loud-mac",
    title: "外接顯示器揚聲器聲音太大或卡在 Mac 上？修復 HDMI/DisplayPort 音量",
    description: "為什麼 Mac 的音量鍵無法控制 HDMI 或 DisplayPort 顯示器揚聲器，以及如何使用顯示器 OSD、音訊 MIDI 設定和更好的輸出路由來修復聲音太大、卡住或無法調整的音訊。",
    date: "2026-07-23",
    readTime: "6 分鐘閱讀",
    content: `<p>如果您的 Mac 的音量鍵顯示為灰色，或者對透過 HDMI 或 DisplayPort 連接的顯示器沒有任何反應，這通常不是錯誤。數位顯示音訊通常以固定電平發送，顯示器本身的硬體控制音量。解決方法是調整顯示、重新路由輸出或使用不同的音訊設備。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 外部顯示器揚聲器聲音太大或卡在 Mac 上？修復 HDMI/DisplayPort 音量" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>為什麼 Mac 音量鍵在 HDMI/DisplayPort 上停止運作</h2>

<p>HDMI 和 DisplayPort 將音訊作為數位串流傳輸。許多顯示器以固定的輸出電平接收該流，並希望您控制顯示器本身的響度，而不是來源設備上的響度。當 macOS 偵測到此情況時，它會停用螢幕上的音量滑桿並使 F11/F12 鍵變灰，在按下這些按鍵時顯示「禁止輸入」符號。</p>

<p>這是硬體和協定限制，Mac 上的軟體無法覆蓋。音訊永遠不會經過允許 macOS 衰減的階段。任何應用程式、驅動程式或設定都無法將音量控制注入顯示器堅持以最高等級接收的串流中。誠實地對待這一點可以節省您尋找錯誤解決方案的時間。</p>

<h2>修復 1：使用顯示器自帶的控制 (OSD)</h2>

<p>對大多數人來說，這才是真正的解決方案。幾乎所有內建揚聲器的顯示器都有一個螢幕顯示選單，由面板背面或底部的實體按鈕或操縱桿驅動。</p>

<ul>
<li>按 OSD/選單按鈕開啟顯示器的設定。</li>
<li>尋找音訊或音量部分。</li>
<li>降低那裡的電平——這是透過 HDMI/DP 實際工作的控制。</li>
</ul>

<p>有些顯示器還提供配套應用程式或 DDC/CI 支持，以便您可以從 macOS 驅動 OSD。使用 DDC 的第三方實用程式可以將 Mac 的音量鍵對應到顯示器的硬體音量，如果您討厭觸控面板按鈕，則值得嘗試。</p>

<h2>修復 2：檢查音訊 MIDI 設定</h2>

<p>打開 <strong>音訊 MIDI 設定</strong> （在/應用程式/實用程式中）。在設備清單中選擇您的顯示器。如果右側出現音量滑桿，請將其向下拖曳 - 有時即使功能表列鍵已停用，顯示幕也會顯示軟體可控制的等級。如果滑桿遺失或變灰，則表示顯示器確認它只接受固定等級的音​​頻，您應該返回 OSD。</p>

<p>當您在這裡時，請確認選擇了正確的輸出設備。將音訊無聲地路由到您忘記已連接的顯示器是很常見的，這解釋了聲音突然響亮或消失的原因。</p>

<h2>修復 3：將音訊路由到您可以實際控制的位置</h2>

<p>如果你的顯示器的揚聲器無論如何都是平庸的（大多數都是）並且其音量控制很笨拙，最乾淨的解決方法是停止使用它們：</p>

<ul>
<li>將揚聲器或耳機插入顯示器的耳機輸出插孔（如果有）－類比輸出通常可以透過顯示器控制音量。</li>
<li>使用 USB DAC、USB 揚聲器或 Bluetooth 輸出。 USB 和類比輸出為 macOS 提供完整的軟體音量控制，讓您的按鍵再次正常運作。</li>
<li>選擇 Mac 的內建揚聲器以獲得快速聲音，並保留顯示器僅用於視訊。</li>
</ul>

<p>一旦您使用 macOS 實際上可以衰減的輸出，系統音量鍵就會起作用，您將重新獲得精細控制，而不是在顯示器的粗略 OSD 步驟之間跳轉。</p>

<h2>輸出工作後，控制每個應用程式的音量</h2>

<p>恢復可控制輸出可以解決「聲音太大/卡住」的問題。但macOS仍然只提供您所有內容的一個主磁碟區。 Mac 上沒有內建的每個應用程式混音器 - Windows 多年來一直有這樣的混音器，但 Apple 從未推出過類似產品。因此，大聲的視訊、遊戲和安靜的通話都共享同一個滑桿。</p>

<p>這就是差距 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 填充。它是一個選單列混音器，為每個應用程式提供了自己獨立的音量，因此您可以在不觸摸音樂的情況下調低瀏覽器選項卡，立即將一個應用程式靜音，或者將安靜的應用程式提高到正常上限以上。您可以儲存不同設定的音量設定文件，並從功能表列快速切換輸出。</p>

<p>明確範圍： <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 控制流經 macOS 的音訊的軟體音量。它無法覆蓋透過 HDMI 忽略系統音量的顯示器——這是顯示器的固定等級行為，只有 OSD 或不同的輸出才能修復它。一旦您獲得可控輸出，每個應用程式的控制就是應用程式的亮點。</p>

<h2>快速清單</h2>

<ul>
<li>HDMI/DP 上的按鍵呈灰色？使用顯示器的 OSD 音量 — 這是預期的行為。</li>
<li>檢查音訊 MIDI 設定中是否有隱藏的軟體滑桿。</li>
<li>確認選擇了正確的輸出設備。</li>
<li>如需真正控制，請將音訊路由至耳機輸出、USB 或 Bluetooth。</li>
<li>然後使用每個應用程式混合器來平衡各個應用程式。</li>
</ul>

<p>一旦你的輸出得到控制，給出 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 一看。從 Mac App Store 一次性購買 14.99 歐元——無需訂閱、無需驅動程式、無需 DMG——它最終為 macOS 帶來了真正的每應用音量混合器。</p>`,
  },
  "usb-dac-volume-control-not-working-mac": {
    slug: "usb-dac-volume-control-not-working-mac",
    title: "USB DAC Mac 音量無法調整？恢復軟體音量控制",
    description: "為什麼 macOS 使許多 USB DAC 的音量滑桿變灰，這意味著什麼，以及如何在不損害音訊品質的情況下在 Mac 上恢復工作軟體音量控制。",
    date: "2026-07-23",
    readTime: "6 分鐘閱讀",
    content: `<p>如果您的 USB DAC 的音量滑桿在 Mac 上呈現灰色，通常不是錯誤。當DAC報告其沒有可控音量時，macOS會停用其軟體音量，希望您使用DAC自己的硬體旋鈕。若要恢復軟體音量，請使用應用程式級衰減器，例如 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — USB DAC Mac 上的音量無法調整？恢復軟體音量控制" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>為什麼 macOS 讓某些 USB DAC 的音量變灰</h2>

<p>當您插入 USB 音訊裝置時，macOS 會詢問它可以透過 USB 音訊類別 (UAC) 協定執行哪些操作。此握手的一部分是一組「功能單元」控件，包括音量控件。如果 DAC 聲明了音量控制，則 macOS 將其連接到鍵盤音量鍵和選單列滑桿。如果 DAC 聲明它沒有主機可調整的音量，則 macOS 會將滑桿完全變灰。</p>

<p>許多高品質的 DAC 和擴大機都故意採用後者。設計人員的假設是，您將為 DAC 提供全量程、位元完美的數位訊號，並使用裝置本身的類比音量旋鈕控制響度。模擬衰減發生在數位類比轉換之後，因此它可以避免丟棄比特，並且確實是發燒友的首選路徑。這是一個特點，而不是一個缺點。</p>

<blockquote>經驗法則：如果您的 DAC 有實體音量旋鈕，並且 Mac 滑桿呈現灰色，則製造商希望您使用該旋鈕。訊號按設計以 100% 發送。</blockquote>

<h2>當灰色滑桿實際上是一個問題時</h2>

<p>「只需使用旋鈕」的答案在實際設定中會崩潰：</p>

<ul>
<li><strong>DAC 沒有旋鈕。</strong> 大量緊湊型 USB DAC、適配器和專業介面不提供音量控制，也不提供主機控制。無論下游擴大機或主動式揚聲器設定為何種級別，您都會陷入困境。</li>
<li><strong>旋鈕夠不著。</strong> 顯示器後面的桌面 DAC 或為固定增益放大器供電的設備，意味著調整音量變成了一項體力活，而不是按鍵。</li>
<li><strong>您需要每個應用程式的平衡，而不僅僅是大師級別。</strong> 即使是完美的硬體旋鈕也是單一的全域控制。它無法使 Zoom 通話比音樂更安靜，也無法在通知觸發時閃避遊戲。</li>
</ul>

<p>macOS 沒有修復這些問題，因為從作業系統的角度來看，設備運作正常。這是誠實的限制：它是設備報告的功能，並且系統設定中沒有切換來覆蓋它。</p>

<h2>安裝任何東西之前誠實的解決方法</h2>

<p>首先嘗試這些，因為它們不需要任何成本：</p>

<ul>
<li><strong>使用硬體旋鈕或下游音量。</strong> 如果您的 DAC 或主動式揚聲器/擴大機具有控制功能，那麼這是最乾淨的選項，並保留完整的數位解析度。</li>
<li><strong>檢查DAC自帶的應用程式或韌體。</strong> 某些 DAC（以及面向遊戲的裝置）隨附控制面板或可啟用主機音量的韌體設定。如果存在「USB 磁碟區」或「軟體磁碟區」選項，將其開啟會使 macOS 滑桿再次運作。</li>
<li><strong>嘗試不同的 USB 模式。</strong> 一些設備報告“類別相容”與專有驅動程式模式的功能不同。安裝或刪除供應商驅動程式可以變更 macOS 是否看到音量控制。</li>
<li><strong>查看音訊 MIDI 設定。</strong> 開啟音訊 MIDI 設置，選擇設備，然後檢查主音量或每通道音量是否出現。有時，即使功能表列呈現灰色顯示，該面板中也會有一個滑桿可用。</li>
</ul>

<p>如果這些都不適用，則需要在 Mac 側進行軟體衰減。</p>

<h2>軟體音量控制與每個應用程式衰減</h2>

<p>當硬體不接受音量命令時，剩下的選項是在軟體中衰減音頻，然後再到達 DAC。這正是 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 確實如此。它位於您的選單列中，為每個正在運行的應用程式提供自己的獨立音量、靜音甚至增強，無論您的 DAC 是否公開硬體控制。</p>

<p>要將其用於灰顯的 DAC：</p>

<ul>
<li>安裝 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 從 Mac App Store 並從功能表列打開它。</li>
<li>保持您的 DAC 選擇為系統輸出；您還可以使用 SoundDial 的快速輸出切換在 DAC、揚聲器和耳機之間切換，而無需深入系統設定。</li>
<li>設定每個應用程式的等級：放下瀏覽器，打開音樂播放器，將您不想要的任何內容靜音。每個應用程式都以您選擇的音量進行串流傳輸，混合結果將發送至 DAC。</li>
<li>儲存不同場景（通話與聆聽）的音量設定文件，並在更重要的內容開始播放時自動閃避較低的背景應用程式。</li>
</ul>

<h2>音頻品質的誠實權衡</h2>

<p>軟體衰減會降低轉換前的數位電平，因此理論上與 DAC 本身的類比音量相比，它會丟棄少量的解析度。實際上，在正常聆聽水平下的現代 24 位元和更高路徑上，衰減量遠低於任何可聽見的聲音，並且您可以保持 DAC 的完整動態範圍，以接近全音階播放任何內容。如果您是純粹主義者，並且手邊有一個好的模擬旋鈕，請使用該旋鈕。如果您沒有可用的硬體控制，或者您需要 macOS 根本無法提供的每個應用程式的平衡，那麼軟體音量是正確的權衡，並且它擊敗了不執行任何操作的滑桿。</p>

<p>SoundDial 是一次性購買產品，售價 14.99 歐元，沙盒化，不含驅動程式、核心擴充或 DMG 安裝程式。如果您的 USB DAC 的音量顯示為灰色且無法使用旋鈕， <a href="https://apps.apple.com/app/id6772792641">在 Mac App Store 上取得 SoundDial</a> 並將工作音量控制放回功能表列。</p>`,
  },
  "cap-max-volume-of-one-app-mac": {
    slug: "cap-max-volume-of-one-app-mac",
    title: "限制 Mac 上一個大聲應用程式的最大音量（保護您的聽力）",
    description: "macOS 沒有每個應用程式的音量上限，因此一個大聲的應用程式可以以整個系統音量讓您震驚。以下是如何使用每個應用程式混合器為 Mac 上的單一應用程式設定最大音量上限，以及為什麼硬體限制很重要。",
    date: "2026-07-23",
    readTime: "5 分鐘閱讀",
    content: `<p>macOS 沒有內建方法來限制一個應用程式的最大音量，因此無論您的系統滑桿設定如何，大聲的程式都會播放。若要為單一應用程式設定上限，請使用功能表列每個應用程式混合器，例如 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>：將應用程式保持在 40%，同時系統音量對於其他所有內容都保持較高。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 限制 Mac 上一個大聲應用程式的最大音量（保護您的聽力）" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>為什麼一個應用程式可以突然讓你在 Mac 上爆炸</h2>

<p>在 macOS 上，功能表列或控制中心中的音量滑桿是單一系統範圍的控制項。每個應用程式都會在同一層級注入相同的輸出。作業系統中沒有內建每個應用程式的音量混合器，而 Windows 的音量混合器面板多年來已經內建了每個應用程式的音量混合器。</p>

<p>這種設計對您的耳朵有真正的影響。如果您將系統音量設置得較高，以便可以聽到安靜的播客或輕柔的視頻通話，然後切換到遊戲、Discord 通知、廣告較多的網站或音量大得多的視頻，則該應用程序也會在整個系統級別播放。結果就是經典的驚嚇：突然出現的音牆，其音量是您從未為該特定應用程式設計的。</p>

<p>對於任何有耳鳴、聲音敏感或只重視聽力的人來說，不可預測性就是問題所在。你並不是想讓一切變得更安靜。您試圖保證某個特定的響亮應用程式永遠不會超過您確定的安全等級。</p>

<h2>macOS 在這裡可以做什麼和不能做什麼</h2>

<p>在推薦任何東西之前，讓我誠實地了解一下限制。</p>

<ul>
<li><strong>系統體積</strong> 立刻降低一切。將其調低以馴服一個應用程序，您的安靜應用程式將變得聽不見。</li>
<li><strong>應用內音量滑桿</strong> 存在於某些應用程式（媒體播放器、每個選項卡的某些瀏覽器）中，但不是大多數。遊戲、視訊通話或本機應用程式通常根本沒有獨立的音量控制。</li>
<li><strong>硬體天花板是真實存在的。</strong> 沒有軟體可以將訊號發出的聲音超過輸出裝置的最大音量。相反，應用程式自己的響度母帶，加上您的 DAC 和耳機，可以設定「100%」實際感覺的響度。軟體可以可靠地降低每個應用程式的級別，但它無法重寫耳機的物理原理。</li>
</ul>

<p>因此，誠實的目標不是在驅動器層級限製神奇的響度。這是一個實用、可靠的按應用程式衰減：將所選應用程式保持在系統輸出的固定部分，這樣它就不會令您感到驚訝。</p>

<h2>如何使用每個應用程式混合器限制單一應用程式的音量</h2>

<p>每個應用程式的音量混合器會攔截每個應用程式的音頻，並讓您獨立設定其等級。這是工作流程 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>，位於選單列：</p>

<ul>
<li><strong>打開攪拌機。</strong> 點選 SoundDial 選單列圖示。您將看到目前正在播放音訊的每個應用程式的列表，每個應用程式都有自己的滑桿。</li>
<li><strong>找到響亮的應用程式。</strong> 找到您想要限制的應用程序，例如遊戲、瀏覽器或視訊會議工具。</li>
<li><strong>設定其上限。</strong> 將該應用程式的滑桿向下拖曳到您的安全水平，例如 35% 到 50%。該應用程式現在只使用系統輸出的一小部分進行播放，而其他所有應用程式都保持原樣。</li>
<li><strong>將系統磁碟區保留在您需要的位置。</strong> 保持系統滑塊足夠高，以適應安靜的應用程式。不管怎樣，受限制的應用程式仍然受到控制。</li>
</ul>

<p>由於該級別是針對每個應用程式的，因此您實際上是為該一個程式設定了最大值。即使當它嘗試播放其最大聲的內容時，其最大聲現在也是您選擇的全部內容的一部分。</p>

<h2>用型材製作蓋子</h2>

<p>一次手動調整會有所幫助，但當您退出並重新啟動時，應用程式等級可能會重設。若要進行重新啟動後仍能維持聽力安全的設置，請使用 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>的音量設定檔。保存您喜歡的每個應用程式層級的配置文件，例如“安靜的遊戲之夜”，遊戲為 40%，音樂應用程式為 70%，通話應用程式為 90%。每當您坐下時，只需單擊一下即可回憶起來。您的大聲應用程式的上限會完全按照您設定的那樣恢復。</p>

<p>對於聽力保護，還有兩個值得了解的功能：</p>

<ul>
<li><strong>每個應用程式靜音</strong> 讓您可以立即讓單個罪犯保持沉默，而無需觸摸其他任何東西，這對於發送垃圾通知的應用程式很有用。</li>
<li><strong>自動閃避</strong> 當更重要的事情開始時，會自動降低背景音頻，這樣您就不會同時陷入兩個大聲源之間。</li>
</ul>

<blockquote><p>軟體衰減對於限制應用程式確實有效，但它只是一層保護，而不是醫療保障。如果您有耳鳴或聲音敏感性，請將每個應用程式的上限與合理的整體聽力水平和休息時間配對。沒有任何應用程式可以取代謹慎的音量習慣。</p></blockquote>

<h2>關於 boost 的說明以及為什麼它是獨立的</h2>

<p>相同的每個應用程式混音器可以限制大聲的應用程序，也可以將太安靜的應用程式提高到 100% 以上，這對於本身音量控制得太低的應用程式來說非常方便。這是同一控制項的兩個方面：您決定每個應用程式的級別，向上或向下。為了保護聽力，您只需選擇“向下”方向並保持在那裡即可。</p>

<h2>簡短版本</h2>

<p>macOS 不會讓您自行限制單一應用程式的音量，這是真正的作業系統差距，而不是使用者錯誤。每個應用程式的選單列混合器將其關閉：將大聲的應用程式設定為固定分數，將其保存在設定檔中，並且當您的其他應用程式保持可聽狀態時，它永遠不會再次讓您感到震驚。</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> Mac App Store 是一次性購買，售價為 14.99 歐元，沙盒化，無需安裝驅動程式或 DMG。如果保護您的耳朵免受不可預測的應用程式的侵害是您的目標，那麼這是設定並保持該上限的最簡單方法。</p>`,
  },
  "set-left-right-balance-per-app-mac": {
    slug: "set-left-right-balance-per-app-mac",
    title: "Mac 上每個應用程式的左/右平衡不同 - 這可能嗎？",
    description: "您可以為macOS上的每個應用程式設定不同的左/右立體聲平衡嗎？老實說，不 - 本身不是，大多數工具也不是。以下是實際可能的情況以及真正的限制。",
    date: "2026-07-23",
    readTime: "6 分鐘閱讀",
    content: `<p>老實說，不 - macOS 不允許您為每個應用程式設定不同的左/右立體聲平衡，而且幾乎沒有第三方工具公開真正的每個應用程式平移。您可以為輸出設備設定一個全域平衡，並且可以控制每個應用程式 <em>體積</em>，但每個應用程式獨立 <em>平底鍋</em> 不是 macOS 提供的功能。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac 上每個應用程式的左/右平衡不同 — 有可能嗎？" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>平衡與音量——它們不是同一回事</h2>

<p>有必要區分兩個經常被混淆的想法：</p>
<ul>
  <li><strong>體積</strong> — 應用程式的整體聲音有多大。這是應用於兩個通道的單一層級。</li>
  <li><strong>天平（平底鍋）</strong> — 音訊如何在左右揚聲器之間分配。 「全左」平衡將所有內容傳送到左聲道並使右聲道靜音。</li>
</ul>

<p>要求「每個應用程式不同的平衡」的人通常想要以下兩件事之一：將一個應用程式的聲音推送到一隻耳朵（例如，左耳聽到電話，右耳聽到音樂），或者糾正一側的聽力差異或揚聲器不良 - 但僅限於某些應用程式。這些都是合法的目標。問題在於控制項所在的位置。</p>

<h2>為什麼 macOS 本身不能做到這一點</h2>

<p>macOS 只有一個平衡控制，它位於輸出設備層級。你會在下面找到它 <strong>系統設定→聲音→輸出</strong>，其中一個 <em>平衡</em> 滑桿將整個混音向左或向右移動。滑桿設定的任何內容都適用 <em>一切</em> 路由到該設備 - 每個應用程式、每個系統聲音，全部同時發送。</p>

<p>標準 macOS 音訊堆疊中沒有 API 表示「將此應用程式的音訊渲染到左側，該應用程式的音訊渲染到右側」。應用程式將已混合的音訊傳遞給系統，系統在傳遞到揚聲器的過程中應用一個主平衡。因此，作業系統不會公開您想要按應用程式平移的層。這是一個真正的作業系統限制，不是選單列實用程式可以禮貌地解決的問題。</p>

<blockquote>與每個應用程式不同 <em>體積</em> - macOS 本身也缺乏，但哪些應用程式可以透過點擊音訊串流來實現 - 每個應用程式 <em>平衡</em> 需要獨立地重新平移每個應用程式的流，並且該掛鉤不適用於沙盒應用程式。</blockquote>

<h2>SoundDial 做什麼——老實說，它不做什麼</h2>

<p><a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">SoundDial</a> 為您提供每個應用程式控制 macOS 缺失：獨立 <strong>體積</strong> 對於每個正在運行的應用程序，每個應用程式 <strong>靜音</strong>，每個應用程式的體積 <strong>提升</strong> 100%以上，可保存容量 <strong>簡介</strong>、自動閃避以及從選單列快速切換輸出。</p>

<p>跟你說實話： <a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">SoundDial</a> 每個應用程式的控制 <em>響度和靜音</em>，不是每個應用程式立體聲 <em>平移</em>。它不會將 Safari 發送到您的左耳，將 Spotify 發送到您的右耳。如果有人告訴您選單列混音器在 macOS 上實現了真正的每個應用程式 L/R 平衡，請持懷疑態度 - 這不是作業系統提供的控制。 SoundDial 真正解決的是更常見的挫折感：一個應用程式相對於另一個應用程式來說太大聲或太安靜。</p>

<h2>每個應用平衡的真正解決方法</h2>

<p>如果您確實需要並排音訊分割，這裡有一些誠實的選擇，大致從最簡單到最複雜：</p>

<ul>
  <li><strong>全球平衡（所有應用程式）：</strong> 使用系統設定→聲音→輸出→平衡。這是您唯一的內建選項，它會影響每個應用程式。對於糾正房間或聽力不對稱很有用，但對於隔離一個應用程式毫無用處。</li>
  <li><strong>獨立的輸出設備：</strong> 這是最接近真實的每個應用平衡的東西。將應用程式 A 路由到一個輸出設備，將應用程式 B 路由到另一台輸出設備，然後獨立設定每個設備的平衡。 macOS 可讓您在某些應用程式中選擇輸出裝置（瀏覽器/通訊應用程式通常會公開自己的輸出選擇器）。如果應用程式 A 指向向左平移的設備，而應用程式 B 指向向右平移的設備，則您可以有效地獲得每個應用程式的平衡 - 只要這兩個應用程式都允許您選擇其輸出。</li>
  <li><strong>虛擬音訊路由工具：</strong> 在某些配置中，建立虛擬設備和內部混音器的實用程式可以將特定應用程式路由到特定通道。這很強大，但很繁瑣，添加了一個驅動程式風格的組件，對大多數人來說有點過分了。這是主播和音訊工程師的領域，而不是隨意的“一隻耳朵通話”修復。</li>
  <li><strong>硬體分割：</strong> 如果涉及物理揚聲器或聽力差異，則硬體混音器或具有每通道控制的音訊介面可以完全迴避軟體問題。</li>
</ul>

<h2>當每個應用程式的數量確實滿足您的需求時</h2>

<p>很多“我想要每個應用程式有不同的餘額”請求實際上是“一個應用程式淹沒了另一個應用程式”。如果目標是您可以在音樂中聽到視訊通話，或者是在 Discord 聊天旁邊太大聲的遊戲，那麼平衡不是工具，獨立音量才是。這正是每個應用程式混合器可以乾淨地處理的事情，無需虛擬驅動程式或路由體操。</p>

<p>所以誠實的總結是：真正的每個應用程式左/右平衡不是 macOS 功能，並且沒有任何混合器應用程式能夠令人信服地偽造它。您的真實路線是全域平衡滑桿或每個應用程式輸出路由到單獨平移的裝置。但如果潛在的痛苦是相對響度，那麼問題就解決了。</p>

<p>想要 Mac 上的每個應用程式都有獨立的音量、靜音和增強功能，並且具有可保存的配置文件且無需驅動程式？ <a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">在 Mac App Store 上取得 SoundDial</a> — €14.99，一次性，沙盒。</p>`,
  },
  "why-are-some-apps-louder-than-others-mac": {
    slug: "why-are-some-apps-louder-than-others-mac",
    title: "為什麼 Mac 上有些應用程式的聲音比其他應用程式大得多？ （以及如何平衡他們）",
    description: "Mac 上的應用程式聽起來截然不同，因為每個應用程式都掌握了自己的響度目標，而 macOS 沒有內建的每個應用程式音量控制。以下是發生這種情況的原因以及如何調整您的應用程式。",
    date: "2026-07-23",
    readTime: "6 分鐘閱讀",
    content: `<p>您的 Mac 上的應用程式聽起來截然不同，因為每個應用程式都是根據自己的響度目標創作、掌握和標準化的，而 macOS 沒有內建的每個應用程式音量控制來協調它們。 Spotify、YouTube、Zoom 和系統警報都通過同一個主滑塊，因此您只能不斷地上下滑動。</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — 為什麼 Mac 上的某些應用程式比其他應用程式聲音大得多？ （以及如何平衡他們）" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>這不是你的 Mac — 這是音訊本身</h2>

<p>macOS 上的單系統音量滑桿控制所有內容的最終輸出電平。它不會影響每個應用程式音訊串流中的相對響度。這個基線是在聲音到達揚聲器之前很久就設定的，並且不同來源的基線差異很大。</p>

<p>三件事導致了這些差異：</p>

<ul>
<li><strong>掌握水平。</strong> 一首強而有力的流行歌曲比安靜的錄音或口語播客要熱得多。為電影院混音的電影故意保持低語聲和爆炸聲——這就是動態範圍，這意味著平均電平很低。</li>
<li><strong>響度標準化目標。</strong> 串流平台將播放調整為以 LUFS（相對於滿刻度的響度單位）測量的目標。 Spotify 的目標約為 -14 LUFS，YouTube 的目標約為 -14 LUFS，Apple Music 的目標約為 -16 LUFS。視訊會議應用程式或遊戲完全應用自己的增益。兩個「標準化」到不同目標的應用程式永遠不會相互匹配。</li>
<li><strong>沒有跨應用程式平整。</strong> 每個應用程式僅標準化其自己的內容。在瀏覽器遊戲中，沒有任何東西可以協調 Spotify 與 Zoom 的對抗。 macOS 只是將它們相加並將混音發送出去。</li>
</ul>

<h2>為什麼 LUFS 很重要（簡單來說）</h2>

<p>峰值電平告訴您訊號中最大的單一瞬間。 LUFS 告訴您某件事實際上有多大 <em>感覺</em> 隨著時間的推移，根據人類聽力的工作原理進行加權。這種差異就是為什麼播客和舞曲可以達到相同的峰值，但在響度上卻感覺截然不同——曲目在接近上限的時間要長得多。</p>

<blockquote>更安靜的 LUFS 目標意味著更多的動態餘裕和更大的動態範圍。響亮的目標意味著更一致、「始終充滿」的聲牆。兩者都沒有錯，但當應用程式針對不同的數字時，你會感覺到一個應用程式在尖叫，另一個應用程式在咕噥。</blockquote>

<p>這就是誠實的根本原因。這不是一個可以修補的錯誤。這是音訊如何產生和傳遞的物理原理，在十幾個從未設計為彼此一致的應用程式中倍增。</p>

<h2>間隙 macOS 保持開啟狀態</h2>

<p>這是真正令人沮喪的部分：Windows 多年來一直為每個應用程式提供音量混合器。您可以直接從工作列向下拉一個應用程式並將另一個應用程式向上推。 macOS從來沒有包含過這個。聲音首選項僅提供主滑桿和輸出裝置選擇。</p>

<p>因此，在 Mac 上，您的選擇傳統上是有限的：</p>

<ul>
<li>調整每個應用程式自己的內部音量滑桿 - 如果它有的話。許多應用程式（Zoom、大多數遊戲、系統鈴聲）不會公開可用的應用程式。</li>
<li>每次切換上下文時手動控制主滑桿。</li>
<li>完全靜音一件事，這是一個生硬的解決方案，實際上並不能平衡任何事情。</li>
</ul>

<p>這些都不記得您的偏好。退出並重新啟動應用程序，您將回到第一個方塊。</p>

<h2>實際修復：每個應用程式記住的音量</h2>

<p>由於您無法強制每個服務重新掌握其目錄，因此可行的解決方案是添加從未發布的缺失層 macOS：每個應用程式的獨立、記住的捲。正是如此 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 確實如此。它位於您的選單欄中，並為每個正在運行的應用程式提供了自己的滑桿，因此您可以將大聲的應用程式拉低並將安靜的應用程式向上推，直到它們處於您感覺均勻的水平。</p>

<p>為了在實踐中平衡您的應用程式：</p>

<ul>
<li>打開 <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> 從功能表列中，您將看到每個活動的應用程式都有自己的控制項。</li>
<li>將任何爆炸性的內容（通常是熱門音樂或視訊應用程式）調低至 60-70% 左右。</li>
<li>將安靜的參考應用程式（通常是通話應用程式或播客）保持在 100%，並使用每個應用程式 <strong>提升</strong> 如果仍然太軟，請將其推至 100% 以上。</li>
<li>設定級別一次。 SoundDial 會記住每個應用程式的音量，因此下次開啟它時餘額會保持不變。</li>
</ul>

<p>這裡有兩個功能完成了大部分的平整工作。 <strong>升壓</strong> 這很重要，因為許多應用程式即使在最大音量下也太安靜了——每個應用程式的滑桿只能降低音量無法挽救它們，但可以放大超過 100% 的應用程式可以。並且 <strong>體積分佈</strong> 讓您保存一整套級別 - 例如，工作時的“音樂焦點低，聲音大”配置文件與遊戲的不同組合 - 並立即在它們之間切換，而不是逐個應用程序重新調整。</p>

<h2>這最有幫助的地方</h2>

<p>最常見的緩解方法是音樂與會議的跳躍：串流音樂聲音很大，而相比之下，通話應用程式聽起來微弱。將通話應用程式調高（或增強），將音樂調低，驚人的音量波動就會消失。這同樣適用於安靜的瀏覽器遊戲對抗大聲的視訊播放器，或跳出所有內容的系統警報。</p>

<p>要明確限制：SoundDial 平衡應用程式的輸出。它不會重新掌握製作不良的曲目，也無法在與非常寬的動態範圍混合的音訊中創造細節。它的作用是為您提供 macOS 所遺漏的一個控制項 - 穩定的、按應用程式保持不變的等級。</p>

<p>厭倦了每次切換應用程式時都乘坐主滑桿？ <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> Mac App Store 的一次性價格為 14.99 歐元——沙盒化，無驅動程序，無 DMG——它最終為每個應用程式提供了自己的記憶音量。</p>`,
  },
};
