import type { ArticleSet } from "./index";

export const hiArticles: ArticleSet = {
  "mac-audio-podcasting-setup": {
    slug: "mac-audio-podcasting-setup",
    title: "पॉडकास्टिंग के लिए Mac ऑडियो: रिकॉर्डिंग के दौरान सुनाई देने वाली आवाज़ को नियंत्रित करें",
    description:
      "पॉडकास्ट रिकॉर्ड करते समय लेवल मॉनिटर करना, मेहमान को सुनना और नोटिफिकेशन मैनेज करना — सब एक वॉल्यूम स्लाइडर के लिए होड़ करते हैं। यहाँ एक बेहतर सेटअप है।",
    date: "2026-03-05",
    readTime: "5 min read",
    content: `
<p>आप अपने Mac पर पॉडकास्ट रिकॉर्ड कर रहे हैं। आपको अपने मेहमान को (Zoom, Riverside या SquadCast के ज़रिए) स्पष्ट रूप से सुनना है। आपको अपने DAW की रिकॉर्डिंग लेवल मॉनिटर करनी है। आपको Slack म्यूट रखना है ताकि कोई पिंग रिकॉर्डिंग में न जाए। और सिस्टम नोटिफिकेशन साउंड पूरी तरह बंद होनी चाहिए — इंटरव्यू के बीच में macOS की "डिंग" की आवाज़ बेकार ऑडियो है।</p>

<p>macOS इन सबके लिए आपको एक वॉल्यूम स्लाइडर देता है। यह पर्याप्त नहीं है।</p>

<h2>Mac पर पॉडकास्टिंग की ऑडियो चुनौती</h2>

<p>पॉडकास्ट रिकॉर्डिंग सेशन के दौरान आपके पास आमतौर पर होता है:</p>
<ul>
  <li><strong>कम्युनिकेशन ऐप</strong> (Zoom, Riverside, SquadCast) — मेहमान की आवाज़, स्पष्ट होनी चाहिए</li>
  <li><strong>DAW / रिकॉर्डिंग ऐप</strong> (Logic, GarageBand, Audacity, Hindenburg) — अपने लेवल मॉनिटर करना</li>
  <li><strong>नोटिफिकेशन सोर्स</strong> (Slack, Mail, Calendar, Messages) — रिकॉर्डिंग के दौरान पूरी तरह चुप होने चाहिए</li>
  <li><strong>ब्राउज़र</strong> — इसमें शो नोट्स, रिसर्च टैब या टाइमर चल सकता है</li>
</ul>

<p>ये सब एक ही वॉल्यूम पर होना अराजकता है। आपके मेहमान और सिस्टम डिंग के बीच होड़ है। Slack नोटिफिकेशन एक टेक बर्बाद कर सकती है। और अगर आपको मेहमान की वॉल्यूम बदलनी हो, तो सिस्टम वॉल्यूम बदलने से मॉनिटरिंग लेवल भी बदल जाती है।</p>

<h2>सामान्य वर्कअराउंड</h2>

<p>अधिकांश पॉडकास्टर इनका संयोजन करते हैं:</p>
<ul>
  <li>नोटिफिकेशन दबाने के लिए Focus mode (Do Not Disturb)</li>
  <li>रिकॉर्डिंग से पहले Slack, Mail और अन्य शोरगुल वाले ऐप्स मैन्युअली बंद करना</li>
  <li>मेहमान के लिए कम्युनिकेशन ऐप की इंटरनल वॉल्यूम बदलना</li>
</ul>

<p>यह काम करता है, लेकिन गलती की गुंजाइश है। DND चालू करना भूल जाएं तो नोटिफिकेशन टेक बर्बाद करेगी। Slack बंद करना भूल जाएं तो कोई कॉल आ जाएगी। और आप फिर भी मेहमान की वॉल्यूम और मॉनिटरिंग लेवल को अलग-अलग नियंत्रित नहीं कर सकते।</p>

<h2>पॉडकास्टिंग के लिए प्रति-ऐप ऑडियो</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> आपको हर ऐप को स्वतंत्र रूप से नियंत्रित करके एक साफ रिकॉर्डिंग वातावरण बनाने देता है:</p>

<img src="/apps/sounddial.png" alt="SoundDial podcasting setup — guest audio, monitoring, and notifications at independent levels" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>रिकॉर्डिंग प्रोफाइल</h3>
<ul>
  <li><strong>Zoom / Riverside:</strong> 80-100% — स्पष्ट मेहमान ऑडियो</li>
  <li><strong>Logic / GarageBand:</strong> 60% — थकान के बिना आरामदायक मॉनिटरिंग</li>
  <li><strong>Slack:</strong> म्यूट — कोई नोटिफिकेशन साउंड नहीं</li>
  <li><strong>Mail:</strong> म्यूट</li>
  <li><strong>Messages:</strong> म्यूट</li>
  <li><strong>Calendar:</strong> म्यूट</li>
  <li><strong>Browser:</strong> म्यूट — कोई अचानक ऑटो-प्ले नहीं</li>
</ul>

<p>इसे "Recording" प्रोफाइल के रूप में सेव करें। रिकॉर्ड बटन दबाने से पहले एक क्लिक से प्रोफाइल लागू करें। हर नोटिफिकेशन सोर्स चुप हो जाता है, आपके मेहमान की वॉल्यूम पूरी है, और मॉनिटरिंग आरामदायक स्तर पर है।</p>

<h3>एडिटिंग प्रोफाइल</h3>
<ul>
  <li><strong>Logic / Hindenburg:</strong> 100% — एडिटिंग के लिए पूरी मॉनिटरिंग</li>
  <li><strong>Spotify:</strong> म्यूट — कोई संदर्भ भ्रम नहीं</li>
  <li><strong>Slack:</strong> 20% — ब्रेक के दौरान हल्की नोटिफिकेशन</li>
  <li><strong>Browser:</strong> 40% — शो नोट्स और रिसर्च के लिए</li>
</ul>

<p>दो प्रोफाइल, दो क्लिक, दो बिल्कुल अलग ऑडियो वातावरण। ऐप्स मैन्युअली बंद और खोलने की ज़रूरत नहीं। रिकॉर्डिंग के बाद नोटिफिकेशन दोबारा चालू करना भूलने की चिंता नहीं।</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "mac-too-loud-full-volume-tame-it": {
    slug: "mac-too-loud-full-volume-tame-it",
    title: "पूरी वॉल्यूम पर Mac इतना तेज़ क्यों है? बेहतर नियंत्रण कैसे पाएं",
    description:
      "MacBook Pro के स्पीकर शानदार हैं — जब तक वे धमाके नहीं करते। अगर मध्यम वॉल्यूम सेटिंग भी बहुत तेज़ लगती है, तो यहाँ अधिक सटीक ऑडियो नियंत्रण का तरीका है।",
    date: "2026-03-08",
    readTime: "4 min read",
    content: `
<p>Apple के नए MacBook Pro मॉडल (14" और 16") में लैपटॉप के लिए उल्लेखनीय रूप से शक्तिशाली स्पीकर हैं। इतने शक्तिशाली कि मध्यम वॉल्यूम स्तर वास्तव में तेज़ हो सकते हैं — विशेष रूप से शांत कमरे में, रात को देर से, या हेडफ़ोन के साथ। "आरामदायक" और "बहुत अधिक" के बीच का अंतर कभी-कभी केवल एक या दो वॉल्यूम स्टेप का होता है।</p>

<h2>वॉल्यूम स्टेप बहुत मोटे क्यों लगते हैं</h2>

<p>macOS में कीबोर्ड के ज़रिए <strong>16 वॉल्यूम स्टेप</strong> हैं। हर स्टेप कुल रेंज का लगभग 6.25% है। शक्तिशाली स्पीकर या संवेदनशील हेडफ़ोन पर एक स्टेप महत्वपूर्ण वॉल्यूम परिवर्तन हो सकता है — वॉल्यूम की एक बार टैप से "परफेक्ट" से "बहुत तेज़" हो जाता है।</p>

<h2>बिल्ट-इन फिक्स: क्वार्टर-स्टेप वॉल्यूम</h2>

<p><strong>Option + Shift</strong> दबाकर वॉल्यूम अप/डाउन दबाएं। हर प्रेस एक सामान्य स्टेप के एक चौथाई से एडजस्ट होता है, जिससे आपको 16 के बजाय <strong>64 लेवल</strong> मिलते हैं। यह 4x बेहतर नियंत्रण शक्तिशाली स्पीकर या हेडफ़ोन के साथ सही वॉल्यूम खोजना बहुत आसान बनाता है।</p>

<p>यह सबसे उपयोगी Mac ऑडियो ट्रिक है जो अधिकांश लोग नहीं जानते।</p>

<h2>गहरी समस्या: सब कुछ के लिए एक स्लाइडर</h2>

<p>64 लेवल के साथ भी, आपके पास हर ऐप को नियंत्रित करने वाला एक ही स्लाइडर है। अगर आप आरामदायक नोटिफिकेशन साउंड के लिए वॉल्यूम कम करते हैं, तो संगीत बहुत शांत हो सकता है। अगर आप संगीत के लिए सेट करते हैं, तो नोटिफिकेशन पिंग आपको चौंका सकती है।</p>

<p>असली समस्या यह है कि अलग-अलग ऑडियो सोर्स को अलग-अलग वॉल्यूम की ज़रूरत है। नोटिफिकेशन हल्की होनी चाहिए। संगीत मौजूद होना चाहिए। कॉल स्पष्ट होनी चाहिए। ब्राउज़र वीडियो मध्यम होना चाहिए। एक स्लाइडर इन सभी को अच्छे से सेव नहीं कर सकता।</p>

<h2>सटीक नियंत्रण के लिए प्रति-ऐप वॉल्यूम</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> हर ऐप को अपना वॉल्यूम स्लाइडर देता है जिसमें 0% से 200% तक <strong>1% की वृद्धि</strong> होती है। यह macOS के 16 (या modifier के साथ 64) सिस्टम-वाइड स्टेप की तुलना में प्रति ऐप 200 लेवल की सटीकता है।</p>

<img src="/apps/sounddial.png" alt="SoundDial fine-grained per-app volume control with 1% precision on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>सिस्टम वॉल्यूम को मध्यम बेस लेवल (50-60%) पर सेट करें, फिर SoundDial से हर ऐप को फाइन-ट्यून करें:</p>
<ul>
  <li><strong>Spotify:</strong> 35% — आरामदायक बैकग्राउंड लेवल</li>
  <li><strong>Slack:</strong> 12% — हल्की नोटिफिकेशन पिंग</li>
  <li><strong>Zoom:</strong> 85% — बिना overwhelm के स्पष्ट कॉल ऑडियो</li>
  <li><strong>Safari:</strong> 45% — मध्यम वीडियो प्लेबैक</li>
</ul>

<p>इस तरह, कोई भी एकल ऑडियो सोर्स कभी "बहुत तेज़" नहीं होता। हर एक को अपने आदर्श स्तर पर स्वतंत्र रूप से ट्यून किया जाता है।</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "slack-huddle-volume-issues-mac": {
    slug: "slack-huddle-volume-issues-mac",
    title: "Mac पर Slack Huddle वॉल्यूम समस्याएं: बहुत शांत, बहुत तेज़, या संगीत से लड़ रहा है",
    description:
      "Slack huddle आपके संगीत और नोटिफिकेशन के साथ एक ही वॉल्यूम के लिए प्रतिस्पर्धा करती है। Mac पर huddle ऑडियो को बाकी सब से स्वतंत्र रूप से नियंत्रित करने का तरीका यहाँ है।",
    date: "2026-03-10",
    readTime: "5 min read",
    content: `
<p>Slack huddle सुविधाजनक है — आप एक बटन क्लिक करते हैं और मीटिंग शेड्यूल किए बिना वॉयस कॉल में होते हैं। लेकिन ऑडियो गड़बड़ है। Huddle आपके Spotify जितनी ही वॉल्यूम पर है। Slack नोटिफिकेशन साउंड कॉल जितने ही लेवल पर पिंग करती है। और जब कोई huddle में स्क्रीन या ऑडियो के साथ म्यूज़िक शेयर करता है, तो वह या तो अश्रव्य या बहरा करने वाला होता है।</p>

<p>समस्या Slack की नहीं है। यह macOS की है। सब कुछ एक वॉल्यूम स्लाइडर से चलता है, इसलिए huddle ऑडियो, नोटिफिकेशन साउंड, संगीत और ब्राउज़र ऑडियो सभी एक ही जगह के लिए होड़ करते हैं।</p>

<h2>Slack के आंतरिक ऑडियो नियंत्रण</h2>

<p>Slack के सीमित ऑडियो नियंत्रण हैं:</p>
<ul>
  <li><strong>नोटिफिकेशन प्राथमिकताएं:</strong> Slack → Settings → Notifications → Sound & appearance। आप नोटिफिकेशन साउंड बदल सकते हैं या विशिष्ट साउंड अक्षम कर सकते हैं, लेकिन huddle वॉल्यूम से स्वतंत्र रूप से नोटिफिकेशन वॉल्यूम सेट नहीं कर सकते।</li>
  <li><strong>Huddle वॉल्यूम:</strong> Huddle के दौरान, कॉल बनाम Slack की अन्य साउंड के लिए कोई अलग वॉल्यूम स्लाइडर नहीं है। Slack में सब कुछ macOS के लिए एक ऑडियो स्ट्रीम है।</li>
  <li><strong>Input/output डिवाइस:</strong> Slack → Settings → Audio & Video आपको mic और स्पीकर डिवाइस चुनने देता है, लेकिन प्रति फीचर वॉल्यूम लेवल नहीं।</li>
</ul>

<h2>तीन Slack ऑडियो समस्याएं</h2>

<h3>1. संगीत के सापेक्ष Huddle बहुत शांत</h3>
<p>आपका संगीत आरामदायक स्तर पर है। आप Huddle में शामिल होते हैं। आपके सहकर्मी की आवाज़ आपके संगीत जितनी ही वॉल्यूम पर है — आप शब्द स्पष्ट रूप से नहीं समझ सकते। सिस्टम वॉल्यूम बढ़ाने से संगीत बहुत तेज़ हो जाता है।</p>

<h3>2. Huddle के दौरान नोटिफिकेशन साउंड</h3>
<p>आप Huddle चर्चा में हैं। हर आने वाला Slack संदेश कॉल जितनी ही वॉल्यूम पर पिंग करता है। सक्रिय चैनलों वाले व्यस्त workspace में, लगातार पिंगिंग Huddle को अनुपयोगी बना देती है।</p>

<h3>3. बैकग्राउंड सुनने के लिए Huddle बहुत तेज़</h3>
<p>कभी-कभी आप काम करते हुए निष्क्रिय रूप से सुनने के लिए Huddle में शामिल होते हैं। आप इसे बैकग्राउंड लेवल पर चाहते हैं — ध्यान भटकाने के लिए इतना शांत नहीं, लेकिन अगर कोई आपका नाम कहे तो सुन सकें। macOS आपको ब्राउज़र को 60% पर रखते हुए Slack को 20% पर सेट नहीं करने देता।</p>

<h2>समाधान: Slack की वॉल्यूम स्वतंत्र रूप से नियंत्रित करें</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Slack को अपना वॉल्यूम स्लाइडर देता है, हर दूसरे ऐप से अलग।</p>

<img src="/apps/sounddial.png" alt="SoundDial controlling Slack volume independently during a huddle while music plays at a different level" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Huddle-ऑप्टिमाइज़्ड सेटअप</h3>
<ul>
  <li><strong>Slack:</strong> 90-100% (स्पष्ट huddle ऑडियो)</li>
  <li><strong>Spotify:</strong> 15% (मुश्किल से सुनाई देने वाला बैकग्राउंड)</li>
  <li><strong>Browser:</strong> म्यूट (कोई अचानक टैब ऑडियो नहीं)</li>
</ul>

<h3>निष्क्रिय Huddle सेटअप</h3>
<ul>
  <li><strong>Slack:</strong> 30% (बैकग्राउंड सुनने का स्तर)</li>
  <li><strong>Spotify:</strong> 40% (प्राथमिक ऑडियो आपका संगीत है)</li>
  <li><strong>Browser:</strong> 50% (सामान्य काम का स्तर)</li>
</ul>

<p>प्रत्येक को प्रोफाइल के रूप में सेव करें। जब Huddle शुरू हो, एक क्लिक से सही प्रोफाइल लागू करें। या <strong>auto-ducking</strong> का उपयोग करें — जब Huddle आपका माइक्रोफोन सक्रिय करता है, SoundDial Slack को छोड़कर बाकी सब कुछ स्वचालित रूप से कम कर देता है।</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "set-default-volume-new-apps-mac": {
    slug: "set-default-volume-new-apps-mac",
    title: "Mac पर नए ऐप्स के लिए डिफ़ॉल्ट वॉल्यूम कैसे सेट करें",
    description:
      "नए ऐप्स डिफ़ॉल्ट रूप से पूरी वॉल्यूम पर लॉन्च होते हैं। यहाँ हर नए ऐप को एक आरामदायक स्तर पर शुरू करने का तरीका है — ताकि कुछ भी आपको अचानक न चौंकाए।",
    date: "2026-03-12",
    readTime: "3 min read",
    content: `
<p>आप एक नया ऐप इंस्टॉल करते हैं। यह पहली बार लॉन्च होता है। यह तुरंत ऑडियो चलाता है — एक इंट्रो साउंड, नोटिफिकेशन, ट्यूटोरियल वीडियो — पूरी सिस्टम वॉल्यूम पर। आपको उम्मीद नहीं थी। हेडफ़ोन ऑन थे। कानों में झनझनाहट हुई।</p>

<p>macOS में "नए ऐप्स के लिए डिफ़ॉल्ट वॉल्यूम" की कोई अवधारणा नहीं है क्योंकि macOS में प्रति-ऐप वॉल्यूम नहीं है। हर ऐप को सिस्टम वॉल्यूम मिलती है, और सिस्टम वॉल्यूम वही है जो आपने आखिरी बार सेट की थी।</p>

<h2>यह समस्या क्यों है</h2>

<p>जब आप पहली बार कोई ऐप लॉन्च करते हैं, तो आपको नहीं पता यह कितना तेज़ होगा। कुछ ऐप तुरंत साउंड चलाते हैं (ऑनबोर्डिंग ट्यूटोरियल, नोटिफिकेशन साउंड, वेलकम वीडियो)। यह खासकर इनके साथ चौंकाने वाला है:</p>
<ul>
  <li>कम्युनिकेशन ऐप्स (Slack, Teams) जो स्टार्टअप साउंड चलाते हैं</li>
  <li>पहले लॉन्च पर वीडियो ट्यूटोरियल वाले ऐप्स</li>
  <li>गेम्स जो तुरंत टाइटल स्क्रीन म्यूज़िक बजाते हैं</li>
  <li>ब्राउज़र-आधारित ऐप्स जो ऑटो-प्ले करते हैं</li>
</ul>

<h2>समाधान: नए ऐप्स के लिए डिफ़ॉल्ट वॉल्यूम</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> में नए ऐप्स के लिए एक <strong>कॉन्फ़िगर करने योग्य डिफ़ॉल्ट वॉल्यूम</strong> है। सेटिंग्स में, आप सेट करते हैं कि नए ऐप किस वॉल्यूम लेवल पर शुरू होने चाहिए — उदाहरण के लिए, 70%। जब भी कोई ऐप पहली बार लॉन्च होकर ऑडियो उत्पन्न करता है, SoundDial उसे 100% के बजाय 70% पर सेट करता है।</p>

<img src="/apps/sounddial.png" alt="SoundDial default volume setting — new apps start at a configured level instead of full blast" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>इसका मतलब है:</p>
<ul>
  <li>नए इंस्टॉल किए गए ऐप्स से कोई अचानक पूरी-वॉल्यूम ऑडियो नहीं</li>
  <li>हर नया ऐप एक आरामदायक, अनुमानित स्तर पर शुरू होता है</li>
  <li>फिर आप ज़रूरत के अनुसार डिफ़ॉल्ट से ऊपर या नीचे एडजस्ट कर सकते हैं</li>
  <li>एक बार एडजस्ट करने के बाद, <strong>वॉल्यूम मेमोरी</strong> फीचर भविष्य के लॉन्च के लिए उस ऐप का लेवल याद रखता है</li>
</ul>

<p>यह एक छोटी सुविधा है, लेकिन यह एक वास्तविक दैनिक परेशानी हल करती है।</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "mac-startup-sound-too-loud": {
    slug: "mac-startup-sound-too-loud",
    title: "Mac स्टार्टअप साउंड बहुत तेज़? इसे बंद या कम करने का तरीका",
    description:
      "Mac स्टार्टअप चाइम हर बार रीस्टार्ट पर पूरी वॉल्यूम पर बजती है — मीटिंग और शांत कमरों में खासकर शर्मनाक। इसे चुप करने या नियंत्रित करने का तरीका यहाँ है।",
    date: "2026-03-15",
    readTime: "4 min read",
    content: `
<p>आप एक शांत ऑफिस में अपना Mac रीस्टार्ट करते हैं। मीटिंग रूम बिल्कुल चुप है। फिर — <em>BONG</em> — स्टार्टअप चाइम पूरी वॉल्यूम पर बजती है। सब आपकी तरफ देखते हैं। चाइम प्रतिष्ठित है, लेकिन यह अनियंत्रणीय और अक्सर शर्मनाक रूप से तेज़ भी है।</p>

<h2>स्टार्टअप साउंड बंद करने का तरीका</h2>

<p>macOS आपको स्टार्टअप चाइम पूरी तरह बंद करने देता है:</p>

<ol>
  <li><strong>System Settings → Sound</strong> पर जाएं</li>
  <li><strong>"Play sound on startup"</strong> खोजें</li>
  <li>इसे अनचेक करें</li>
</ol>

<p>हो गया। अब से आपका Mac चुपचाप शुरू होगा। कोई Terminal कमांड की ज़रूरत नहीं — यह सेटिंग macOS Big Sur से उपलब्ध है।</p>

<h3>Terminal तरीका (अगर आप पसंद करते हैं)</h3>
<p>आप इसे Terminal के ज़रिए भी बंद कर सकते हैं:</p>
<p><code>sudo nvram StartupMute=%01</code></p>
<p>दोबारा चालू करने के लिए:</p>
<p><code>sudo nvram StartupMute=%00</code></p>

<h2>क्या स्टार्टअप साउंड को बंद करने के बजाय कम किया जा सकता है?</h2>

<p>सीधे नहीं। स्टार्टअप चाइम एक निश्चित वॉल्यूम पर चलती है जो शटडाउन के समय सिस्टम वॉल्यूम से निर्धारित होती है। अगर आपका Mac 80% वॉल्यूम पर बंद था, तो चाइम लगभग 80% पर चलती है।</p>

<p><strong>वर्कअराउंड:</strong> Mac रीस्टार्ट करने से पहले सिस्टम वॉल्यूम 10-20% तक कम करें। स्टार्टअप चाइम उस कम स्तर पर चलेगी।</p>

<h2>Mac साउंड नियंत्रण की व्यापक समस्या</h2>

<p>स्टार्टअप चाइम macOS के सीमित ऑडियो नियंत्रण का सिर्फ एक उदाहरण है। <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> आपके Mac पर हर ऐप को अपना वॉल्यूम स्लाइडर देता है। नोटिफिकेशन ऐप्स को कम, संगीत को आरामदायक स्तर पर, और कॉल को पूरी वॉल्यूम पर सेट करें — सभी स्वतंत्र रूप से।</p>

<img src="/apps/sounddial.png" alt="SoundDial — per-app volume control for managing all Mac audio sources independently" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "webex-volume-too-low-mac": {
    slug: "webex-volume-too-low-mac",
    title: "Mac पर Cisco Webex वॉल्यूम बहुत कम? इसे कैसे ठीक करें",
    description:
      "Webex कॉल आपके Mac पर मुश्किल से सुनाई देती हैं। यहाँ हर फिक्स है — Webex ऑडियो सेटिंग्स से लेकर प्रति-ऐप मिक्सर से कॉल वॉल्यूम 100% से आगे बढ़ाने तक।",
    date: "2026-03-18",
    readTime: "5 min read",
    content: `
<p>Webex कॉर्पोरेट वातावरण में सबसे अधिक उपयोग किए जाने वाले वीडियो कॉन्फ्रेंसिंग टूल में से एक है — और Mac पर ऑडियो गुणवत्ता के लिए सबसे अधिक शिकायतों में से एक भी। अगर आप Webex कॉल मुश्किल से सुन पाते हैं, तो आप अकेले नहीं हैं।</p>

<h2>1. Webex ऑडियो सेटिंग्स जांचें</h2>

<p>Webex मीटिंग के दौरान, ऑडियो मेनू (स्पीकर आइकन या तीन बिंदु → Audio Settings) क्लिक करें:</p>
<ul>
  <li>सुनिश्चित करें कि सही <strong>Speaker</strong> डिवाइस चुना गया है</li>
  <li>स्पीकर वॉल्यूम स्लाइडर को अधिकतम तक खींचें</li>
  <li>आउटपुट सत्यापित करने के लिए "Test" क्लिक करें</li>
  <li>जांचें कि "Music Mode" सक्षम है या नहीं — इसे अक्षम करें</li>
  <li>नॉइज़ रिमूवल सेटिंग्स जांचें — "Remove Background Noise" आक्रामक मोड पर आवाज़ वॉल्यूम कम कर सकता है</li>
</ul>

<h2>2. macOS आउटपुट जांचें</h2>

<p>System Settings → Sound → Output। सत्यापित करें कि सही डिवाइस चुना गया है और वॉल्यूम अधिकतम है।</p>

<h2>3. Bluetooth कोडेक समस्या</h2>

<p>AirPods या Bluetooth हेडफ़ोन उपयोग कर रहे हैं? Webex द्वारा माइक सक्रिय करने से AAC→SCO कोडेक स्विच होता है, जिससे ऑडियो गुणवत्ता और वॉल्यूम कम हो जाती है। एक अलग माइक्रोफोन (बिल्ट-इन Mac mic या USB) उपयोग करें।</p>

<h2>4. Webex-विशिष्ट ऑडियो प्रोसेसिंग</h2>

<p>Webex में आक्रामक ऑडियो प्रोसेसिंग है। ये Webex सेटिंग्स आज़माएं:</p>
<ul>
  <li>नॉइज़ रिमूवल "High" के बजाय "Low" पर सेट करें</li>
  <li>अगर सक्षम है तो "Optimize for my voice" अक्षम करें</li>
  <li>"Computer Audio" से किसी विशिष्ट डिवाइस पर स्विच करने का प्रयास करें</li>
</ul>

<h2>5. IT/एडमिन समस्या</h2>

<p>कॉर्पोरेट वातावरण में, Webex अक्सर IT द्वारा विशिष्ट ऑडियो नीतियों के साथ प्रबंधित होता है। अगर बुनियादी फिक्स काम नहीं करते, तो अपने IT विभाग से जांचें।</p>

<h2>6. Webex को 100% से आगे बूस्ट करें</h2>

<p>अगर सेटिंग्स अधिकतम हैं और प्रतिभागी अभी भी बहुत शांत हैं, <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Webex को <strong>200%</strong> तक बूस्ट करने देता है। यह Webex के बिल्ट-इन अधिकतम से परे कॉल ऑडियो को amplify करता है।</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting Cisco Webex call volume beyond 100% on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial बैक-टू-बैक Webex मीटिंग के दौरान भी मदद करता है: auto-ducking का उपयोग करके हर मीटिंग शुरू होने पर बैकग्राउंड म्यूज़िक स्वचालित रूप से कम हो जाती है।</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "mac-two-audio-sources-same-time": {
    slug: "mac-two-audio-sources-same-time",
    title: "Mac पर एक साथ दो चीज़ें कैसे सुनें बिना पागल हुए",
    description:
      "संगीत और पॉडकास्ट। लेक्चर और नोट्स वीडियो। कॉल और बैकग्राउंड म्यूज़िक। macOS आपको दोनों के लिए एक वॉल्यूम चुनने पर मजबूर करता है — यहाँ उन्हें बैलेंस करने का तरीका है।",
    date: "2026-03-20",
    readTime: "4 min read",
    content: `
<p>आप एक साथ दो ऑडियो सोर्स सुनना चाहते हैं। कॉल पर रहते हुए संगीत। ट्यूटोरियल देखते हुए पॉडकास्ट। पढ़ाई करते हुए बैकग्राउंड एंबियंस। दो चीज़ें, दो अलग-अलग आदर्श वॉल्यूम। macOS दोनों के लिए एक स्लाइडर देता है।</p>

<p>यह macOS की मूलभूत ऑडियो सीमा है: हर ऐप एक वॉल्यूम शेयर करता है।</p>

<h2>जब आपको वास्तव में दो ऑडियो सोर्स की ज़रूरत हो</h2>

<ul>
  <li><strong>संगीत + वीडियो कॉल</strong> — सबसे सामान्य। Zoom मीटिंग के दौरान बैकग्राउंड म्यूज़िक, लेकिन सहकर्मियों को सुनने के लिए पर्याप्त शांत।</li>
  <li><strong>लेक्चर + संदर्भ सामग्री</strong> — एक छात्र रिकॉर्ड किया गया लेक्चर देखते हुए कभी-कभी संदर्भ के लिए YouTube ट्यूटोरियल देखता है।</li>
  <li><strong>पॉडकास्ट + एंबियंट साउंड</strong> — पॉडकास्ट सुनते हुए एक white noise या rain sounds ऐप धीरे से चलता है।</li>
  <li><strong>दो ब्राउज़र टैब</strong> — एक टैब में ट्रेनिंग वीडियो और दूसरे में डेमो, अलग-अलग वॉल्यूम पर।</li>
  <li><strong>गेम + वॉयस चैट</strong> — गेम ऑडियो immersion के लिए, Discord संचार के लिए।</li>
</ul>

<h2>macOS की सीमा</h2>

<p>macOS में एक वॉल्यूम स्लाइडर है। वॉल्यूम की सब कुछ समान रूप से बदलता है। <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> हर ऐप को एक मेनू बार पैनल में स्वतंत्र वॉल्यूम स्लाइडर के साथ रखता है।</p>

<img src="/apps/sounddial.png" alt="SoundDial showing two audio sources at different volume levels on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>उदाहरण सेटअप:</p>

<p><strong>संगीत + Zoom कॉल:</strong></p>
<ul>
  <li>Zoom: 100% | Spotify: 20%</li>
</ul>

<p><strong>पॉडकास्ट + rain sounds:</strong></p>
<ul>
  <li>Podcast ऐप: 70% | Rain ऐप: 15%</li>
</ul>

<p><strong>लेक्चर + YouTube ट्यूटोरियल:</strong></p>
<ul>
  <li>Zoom (लेक्चर): 90% | Chrome (YouTube): 40%</li>
</ul>

<p>आप जो संयोजन नियमित रूप से उपयोग करते हैं उन्हें <strong>वॉल्यूम प्रोफाइल</strong> के रूप में सेव करें और एक क्लिक से स्विच करें।</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "watch-movies-mac-late-night-volume": {
    slug: "watch-movies-mac-late-night-volume",
    title: "Mac पर सभी को जगाए बिना मूवी कैसे देखें",
    description:
      "डायलॉग सुनाई नहीं देता, फिर विस्फोट दीवारें हिलाते हैं। Mac पर रात को देर से मूवी देखने के लिए ऑडियो को नियंत्रित करने का तरीका — एक शब्द चूके बिना।",
    date: "2026-03-22",
    readTime: "5 min read",
    content: `
<p>रात के 1 बज रहे हैं। आप बिस्तर पर MacBook पर मूवी देख रहे हैं। पात्र फुसफुसा रहे हैं — आप वॉल्यूम बढ़ाते हैं। फिर कार चेस शुरू होता है और अचानक आपके पूरे अपार्टमेंट में सुनाई देता है। यह cycle दो घंटे तक चलती है।</p>

<p>समस्या <strong>dynamic range</strong> है — मूवी के सबसे शांत और सबसे तेज़ क्षणों के बीच का अंतर।</p>

<h2>मूवी संगीत या पॉडकास्ट से तेज़ क्यों होती हैं</h2>

<p>संगीत आमतौर पर compressed dynamic range के साथ mastered होता है। मूवी, विशेष रूप से एक्शन फिल्में, <strong>30-40 dB</strong> की dynamic range हो सकती हैं।</p>

<h2>Fix 1: स्ट्रीमिंग सेवा का night mode उपयोग करें</h2>

<ul>
  <li><strong>Netflix:</strong> प्लेबैक के दौरान ऑडियो सेटिंग में "Reduce Loud Sounds" टॉगल देखें</li>
  <li><strong>Apple TV+:</strong> System Settings → Accessibility → "Reduce Loud Sounds"</li>
  <li><strong>Amazon Prime:</strong> समर्थित शीर्षकों पर "Dialog Boost"</li>
  <li><strong>Disney+:</strong> फिलहाल कोई समकक्ष सुविधा नहीं</li>
</ul>

<h2>Fix 2: हेडफ़ोन का उपयोग करें</h2>

<p>हेडफ़ोन "सभी को जगाने" वाली समस्या हल करते हैं — आपका ऑडियो प्राइवेट है। लेकिन वे dynamic range समस्या हल नहीं करते।</p>

<h2>Fix 3: अपने स्ट्रीमिंग ऐप को एक विशिष्ट वॉल्यूम पर सेट करें</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> आपको परफेक्ट late-night सेटअप बनाने देता है:</p>

<img src="/apps/sounddial.png" alt="SoundDial late-night movie setup — streaming app at moderate volume, notifications muted" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Late-night movie प्रोफाइल</h3>
<ul>
  <li><strong>Netflix / Apple TV / Disney+ / browser:</strong> 40-50% — आरामदायक डायलॉग लेवल</li>
  <li><strong>Slack:</strong> म्यूट — कोई अचानक पिंग नहीं</li>
  <li><strong>Mail:</strong> म्यूट</li>
  <li><strong>iMessage:</strong> म्यूट</li>
  <li><strong>System sounds:</strong> म्यूट</li>
</ul>

<p>इसे "Night" प्रोफाइल के रूप में सेव करें। जब आप रात को देर से मूवी शुरू करें, एक क्लिक से प्रोफाइल लागू करें।</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "mac-volume-resets-after-sleep": {
    slug: "mac-volume-resets-after-sleep",
    title: "Mac वॉल्यूम स्लीप के बाद रीसेट होती है? अपनी ऑडियो सेटिंग्स कैसे बनाए रखें",
    description:
      "हर बार जब आपका Mac स्लीप से जागता है, वॉल्यूम गलत होती है — अधिकतम पर रीसेट, शून्य पर गिरी, या गलत आउटपुट पर स्विच। यहाँ क्यों और कैसे ठीक करें।",
    date: "2026-03-25",
    readTime: "5 min read",
    content: `
<p>आप MacBook का ढक्कन बंद करते हैं। बाद में खोलते हैं। वॉल्यूम अलग है। शायद यह अधिकतम पर है जबकि आपने 40% पर रखी थी। शायद यह हेडफ़ोन से स्पीकर पर स्विच हो गई। यह स्लीप से पहले ठीक था — अब गलत है।</p>

<h2>यह क्यों होता है</h2>

<h3>1. स्लीप के दौरान ऑडियो आउटपुट डिवाइस बदल गया</h3>
<p>अगर स्लीप से पहले Bluetooth हेडफ़ोन connected थे और वे disconnect हो गए (बैटरी खत्म, रेंज से बाहर), तो macOS बिल्ट-इन स्पीकर पर स्विच करता है। चूंकि macOS प्रति डिवाइस वॉल्यूम याद रखता है, वॉल्यूम बदल जाती है।</p>

<h3>2. Core Audio daemon रीस्टार्ट</h3>
<p>macOS का ऑडियो daemon (coreaudiod) कभी-कभी स्लीप/वेक cycles के दौरान रीस्टार्ट होता है। यह डिफ़ॉल्ट वॉल्यूम लेवल के साथ initialize हो सकता है।</p>

<h3>3. HDMI/DisplayPort reconnection</h3>
<p>अगर आप HDMI या DisplayPort के ज़रिए external display उपयोग करते हैं, तो ढक्कन बंद और खोलने से display disconnect और reconnect हो सकती है, जिससे वॉल्यूम बदल सकती है।</p>

<h3>4. Bluetooth re-pairing</h3>
<p>जब Bluetooth डिवाइस स्लीप के बाद reconnect होते हैं, तो वॉल्यूम negotiation पहले से अलग स्तर पर हो सकती है।</p>

<h2>फिक्स</h2>

<h3>AirPods के लिए ऑटो-स्विचिंग अक्षम करें</h3>
<p>System Settings → Bluetooth → AirPods के बगल में "i" → "Connect to This Mac" → "When Last Connected to This Mac" सेट करें।</p>

<h3>Intel Macs के लिए NVRAM रीसेट करें</h3>
<p>Option+Command+P+R 20 सेकंड दबाकर रखें। यह stored ऑडियो सेटिंग्स साफ करता है।</p>

<h2>SoundDial से अपना ऑडियो बैलेंस सुरक्षित रखें</h2>

<p>भले ही स्लीप के बाद सिस्टम वॉल्यूम रीसेट हो, <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> आपका <em>प्रति-ऐप</em> वॉल्यूम बैलेंस सुरक्षित रखता है।</p>

<img src="/apps/sounddial.png" alt="SoundDial preserving per-app volume levels after Mac sleep and wake cycles" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>आपको सिस्टम वॉल्यूम ठीक करनी पड़ सकती है (एक एडजस्टमेंट), लेकिन सभी ऐप्स को फिर से बैलेंस नहीं करना पड़ेगा।</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "mac-audio-music-production-daw": {
    slug: "mac-audio-music-production-daw",
    title: "म्यूज़िक प्रोडक्शन के लिए Mac ऑडियो: DAW और कम्युनिकेशन को अलग-अलग नियंत्रित करें",
    description:
      "Discord कॉल पर रहते हुए Logic Pro या Ableton उपयोग कर रहे हैं? यहाँ पूरी fidelity पर DAW सुनते हुए वॉयस चैट को आरामदायक स्तर पर रखने का तरीका है।",
    date: "2026-03-28",
    readTime: "5 min read",
    content: `
<p>आप Logic Pro (या Ableton, या FL Studio) में संगीत produce कर रहे हैं। आप एक सहयोगी के साथ Discord पर भी हैं। समस्या: आपका DAW आउटपुट और Discord एक ही वॉल्यूम लेवल के लिए लड़ रहे हैं।</p>

<p>यह Mac पर म्यूज़िक producers के लिए एक वास्तविक समस्या है क्योंकि monitoring वॉल्यूम सीधे mixing निर्णयों को प्रभावित करती है।</p>

<h2>प्रोडक्शन के लिए यह क्यों मायने रखता है</h2>

<p>म्यूज़िक प्रोडक्शन के लिए <strong>सटीक monitoring लेवल</strong> आवश्यक है। आपको विश्वसनीय mixing निर्णय लेने के लिए अपने DAW को एक consistent, calibrated वॉल्यूम पर सुनना होगा।</p>

<h2>प्रोडक्शन के लिए प्रति-ऐप वॉल्यूम</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> हर ऐप के लिए exact वॉल्यूम सेट करने देता है:</p>

<img src="/apps/sounddial.png" alt="SoundDial separating DAW output from Discord and reference tracks on macOS for music production" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>प्रोडक्शन सेटअप</h3>
<ul>
  <li><strong>Logic Pro / Ableton:</strong> 80-100% — आपका प्राथमिक monitoring लेवल</li>
  <li><strong>Discord / voice chat:</strong> 40-60% — सुनाई देता है लेकिन mix से स्पष्ट रूप से secondary</li>
  <li><strong>Spotify / reference tracks:</strong> 80% — accurate A/B comparisons के लिए DAW लेवल से match करें</li>
  <li><strong>Slack / notifications:</strong> म्यूट — प्रोडक्शन के दौरान शून्य interference</li>
  <li><strong>Safari / Chrome:</strong> 50% — ट्यूटोरियल देखने के लिए</li>
</ul>

<h3>इसे "Production" प्रोफाइल के रूप में सेव करें</h3>
<p>यह configuration सेव करें और produce करने बैठने पर एक क्लिक से apply करें।</p>

<h2>Latency के बारे में एक नोट</h2>

<p>SoundDial वॉल्यूम नियंत्रण के लिए Apple के Core Audio Tap API का उपयोग करता है। प्रोसेसिंग negligible latency जोड़ती है — monitoring उद्देश्यों के लिए अगोचर।</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "apple-music-volume-too-low-mac": {
    slug: "apple-music-volume-too-low-mac",
    title: "Mac पर Apple Music वॉल्यूम बहुत कम? इसे कैसे ठीक करें और बूस्ट करें",
    description:
      "Mac पर Apple Music अधिकतम वॉल्यूम पर भी बहुत शांत है? Sound Check, EQ सेटिंग्स जांचें और Apple Music को 100% से आगे बूस्ट करना सीखें।",
    date: "2026-03-30",
    readTime: "5 min read",
    content: `
<p>Apple Music पूरी वॉल्यूम पर है। आपका Mac पूरी वॉल्यूम पर है। एक गाना जो जोर से होना चाहिए वह मुश्किल से सुनाई दे रहा है। क्या हो रहा है?</p>

<p>Apple Music में कई सेटिंग्स हैं जो playback वॉल्यूम कम कर सकती हैं, और वे obvious नहीं हैं।</p>

<h2>1. Sound Check जांचें</h2>

<p>Apple Music में <strong>Sound Check</strong> नामक एक फीचर है जो सभी tracks की वॉल्यूम normalize करता है। यह जोरदार tracks की वॉल्यूम <em>कम</em> करके करता है — सब कुछ शांत कर देता है।</p>

<p>जांचने के लिए: Music ऐप → Settings (⌘,) → Playback → <strong>Sound Check</strong>।</p>

<p>अगर Sound Check सक्षम है, तो इसे अक्षम करने का प्रयास करें।</p>

<h2>2. EQ सेटिंग जांचें</h2>

<p>Apple Music में एक बिल्ट-इन equalizer है। कुछ EQ presets clipping को रोकने के लिए overall वॉल्यूम कम करते हैं।</p>

<p>जांचें: Music ऐप → Settings → Playback → <strong>EQ</strong>। "Late Night" EQ dynamic range compress करता है।</p>

<h2>3. Headphone Safety</h2>

<p>System Settings → Sound → Headphone Safety। अगर "Reduce Loud Audio" चालू है, तो macOS आपकी हेडफ़ोन वॉल्यूम globally cap कर रहा है।</p>

<h2>4. Apple Music को 100% से आगे बूस्ट करें</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> आपको Apple Music को <strong>200%</strong> तक बूस्ट करने देता है। ऑडियो सिग्नल को system लेवल पर amplify किया जाता है। केवल Apple Music तेज़ होता है — Zoom, Slack और आपका ब्राउज़र अपने मौजूदा स्तर पर रहते हैं।</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting Apple Music volume beyond 100% on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "free-volume-mixer-mac": {
    slug: "free-volume-mixer-mac",
    title: "Mac के लिए फ्री वॉल्यूम मिक्सर: आपको वास्तव में क्या मिलता है (और क्या नहीं)",
    description:
      "Mac के लिए फ्री प्रति-ऐप वॉल्यूम मिक्सर खोज रहे हैं? फ्री विकल्प क्या offer करते हैं, उनमें क्या कमी है, और कब भुगतान करना उचित है — यहाँ ईमानदार breakdown है।",
    date: "2026-04-03",
    readTime: "6 min read",
    content: `
<p>अगर आप "Mac के लिए फ्री वॉल्यूम मिक्सर" खोजते हैं, तो आपको एक मुख्य परिणाम मिलेगा: <strong>Background Music</strong>। यह macOS के लिए एकमात्र उल्लेखनीय फ्री, open-source प्रति-ऐप वॉल्यूम नियंत्रण ऐप है।</p>

<h2>Background Music: फ्री विकल्प</h2>

<p>Background Music एक फ्री, open-source ऐप है। यह आपको देता है:</p>

<ul>
  <li><strong>प्रति-ऐप वॉल्यूम स्लाइडर</strong> — हर चलने वाले ऐप के लिए बुनियादी वॉल्यूम नियंत्रण</li>
  <li><strong>ऑटो-पॉज़ म्यूज़िक</strong> — जब कोई अन्य ऐप ऑडियो चलाता है तो म्यूज़िक प्लेयर pause होता है</li>
  <li><strong>डिफ़ॉल्ट आउटपुट डिवाइस सेटिंग</strong></li>
</ul>

<h3>Background Music में क्या नहीं है</h3>
<ul>
  <li><strong>100% से आगे वॉल्यूम बूस्ट नहीं</strong></li>
  <li><strong>वॉल्यूम प्रोफाइल नहीं</strong></li>
  <li><strong>Auto-ducking नहीं</strong></li>
  <li><strong>वॉल्यूम मेमोरी नहीं</strong></li>
  <li><strong>कीबोर्ड शॉर्टकट नहीं</strong></li>
</ul>

<h3>विश्वसनीयता की समस्या</h3>
<p>Background Music एक <strong>virtual audio device driver</strong> install करके काम करता है, और यह driver macOS updates के साथ टूट जाता है। चूंकि यह volunteer-maintained open-source project है, fixes हमेशा समय पर नहीं आते।</p>

<h2>भुगतान कब उचित है</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> की कीमत €14.99 है — एकमुश्त, subscription नहीं। यह Spotify subscription के दो महीने से कम है, एक ऐसे tool के लिए जिसे आप हर दिन उपयोग करेंगे।</p>

<img src="/apps/sounddial.png" alt="SoundDial — reliable per-app volume mixer for Mac with profiles, auto-ducking, and 200% boost" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> पर उपलब्ध — Apple-reviewed, sandboxed, कोई system drivers नहीं। €14.99 एकमुश्त, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "balance-music-voice-chat-volume-mac": {
    slug: "balance-music-voice-chat-volume-mac",
    title: "Mac पर संगीत और वॉयस चैट वॉल्यूम को कैसे बैलेंस करें",
    description:
      "Discord पर संगीत बहुत तेज़ है। या Spotify के नीचे कॉल बहुत शांत है। macOS आपको उन्हें बैलेंस नहीं करने देता — परफेक्ट ratio सेट करने का तरीका यहाँ है।",
    date: "2026-04-05",
    readTime: "4 min read",
    content: `
<p>आप Discord (या Zoom, या FaceTime) पर दोस्तों से बात करते हुए संगीत सुनना चाहते हैं। macOS एक system वॉल्यूम के साथ सब कुछ नियंत्रित करके इसे असंभव बना देता है।</p>

<h2>In-ऐप वॉल्यूम वर्कअराउंड</h2>

<p>Spotify और Discord दोनों में internal वॉल्यूम स्लाइडर हैं। व्यवहार में:</p>
<ul>
  <li>आपको हर ऐप पर switch करना होगा</li>
  <li>सिस्टम वॉल्यूम बदलने पर ratio बदल जाती है</li>
  <li>हर ऐप में internal वॉल्यूम स्लाइडर नहीं होता</li>
</ul>

<h2>असली फिक्स: स्वतंत्र प्रति-ऐप वॉल्यूम</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Spotify और Discord दोनों को स्वतंत्र वॉल्यूम स्लाइडर के साथ एक ही पैनल में रखता है:</p>

<img src="/apps/sounddial.png" alt="SoundDial balancing Spotify and Discord at different volume levels on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>संगीत + वॉयस चैट के लिए golden ratio</h3>
<ul>
  <li><strong>Voice chat 85-100% पर</strong> — हमेशा स्पष्ट रूप से सुनाई देता है</li>
  <li><strong>संगीत 20-35% पर</strong> — मौजूद लेकिन आवाज़ों से कभी प्रतिस्पर्धा नहीं</li>
</ul>

<h3>इसे प्रोफाइल के रूप में सेव करें</h3>
<p>"Gaming" प्रोफाइल: Discord 100%, game 50%, Spotify 20%। "Chill" प्रोफाइल: Discord 70%, Spotify 60%।</p>

<h3>कॉल के लिए Auto-ducking</h3>
<p>अगर आप संगीत सुन रहे हैं और कॉल आती है, तो SoundDial का auto-ducking स्वचालित रूप से संगीत को आपके configured स्तर तक कम कर देता है।</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "mac-volume-control-complete-guide": {
    slug: "mac-volume-control-complete-guide",
    title: "Mac वॉल्यूम नियंत्रण: संपूर्ण गाइड (2026)",
    description:
      "macOS पर ऑडियो नियंत्रित करने के बारे में आपको जो कुछ जानना चाहिए — बुनियादी कीबोर्ड शॉर्टकट से लेकर प्रति-ऐप वॉल्यूम, आउटपुट स्विचिंग और ऑटोमेशन तक।",
    date: "2026-06-12",
    readTime: "12 min read",
    content: `
<p>macOS आपको एक वॉल्यूम स्लाइडर और एक म्यूट बटन देता है। यही Apple का बिल्ट-इन ऑडियो नियंत्रण है। लेकिन आपके Mac में surface के सुझाव से कहीं अधिक ऑडियो क्षमताएं हैं।</p>

<p>यह आपके Mac पर ऑडियो नियंत्रित करने की संपूर्ण गाइड है।</p>

<h2>भाग 1: बिल्ट-इन वॉल्यूम नियंत्रण</h2>

<h3>वॉल्यूम keys</h3>
<p>वॉल्यूम अप (F12), वॉल्यूम डाउन (F11), और म्यूट (F10) keys सिस्टम वॉल्यूम को 16 steps में adjust करती हैं।</p>

<h3>Fine-grained वॉल्यूम: Option + Shift</h3>
<p><strong>Option + Shift</strong> दबाकर वॉल्यूम अप/डाउन दबाएं। हर press एक सामान्य step के एक चौथाई से adjust होता है — आपको 16 के बजाय <strong>64 वॉल्यूम लेवल</strong> देता है।</p>

<h3>चुपचाप वॉल्यूम adjust करें: Shift</h3>
<p><strong>Shift</strong> दबाकर वॉल्यूम अप/डाउन दबाएं। वॉल्यूम audible feedback "pop" के बिना बदलती है।</p>

<h2>भाग 2: आउटपुट डिवाइस प्रबंधन</h2>

<h3>आउटपुट डिवाइस स्विच करना</h3>
<p>सबसे तेज़ बिल्ट-इन तरीका: <strong>Option</strong> दबाकर menu bar में Sound आइकन क्लिक करें।</p>

<h2>भाग 3: Alert और नोटिफिकेशन वॉल्यूम</h2>

<h3>System alert वॉल्यूम</h3>
<p>macOS में एक अलग alert वॉल्यूम स्लाइडर है: System Settings → Sound → Alert volume। यह केवल macOS system alerts को प्रभावित करता है — Slack, Discord, या Teams जैसे third-party ऐप्स की नोटिफिकेशन साउंड को नहीं।</p>

<h2>भाग 4: macOS क्या नहीं कर सकता (और कैसे ठीक करें)</h2>

<h3>प्रति-ऐप वॉल्यूम नियंत्रण</h3>
<p>macOS में सभी ऐप्स के लिए एक वॉल्यूम स्लाइडर है। Spotify को 30% और Zoom को 100% पर सेट करने का कोई बिल्ट-इन तरीका नहीं है।</p>

<p>ये सभी पांच <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> के साथ उपलब्ध हैं — एक native macOS menu bar ऐप जो Apple द्वारा कभी नहीं बनाया गया वॉल्यूम मिक्सर जोड़ता है।</p>

<img src="/apps/sounddial.png" alt="SoundDial — per-app volume control, profiles, auto-ducking, and 200% boost for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>भाग 5: SoundDial के साथ प्रति-ऐप वॉल्यूम</h2>

<ul>
  <li><strong>प्रति-ऐप वॉल्यूम:</strong> हर ऐप को अपना स्लाइडर, 0% से 200% तक</li>
  <li><strong>वॉल्यूम बूस्ट:</strong> शांत ऐप्स को 100% से आगे amplify करें</li>
  <li><strong>वॉल्यूम प्रोफाइल:</strong> configurations सेव करें और एक क्लिक से switch करें</li>
  <li><strong>Auto-ducking:</strong> कॉल के दौरान बैकग्राउंड ऑडियो कम होती है, बाद में restore होती है</li>
  <li><strong>कीबोर्ड शॉर्टकट:</strong> मिक्सर toggle करने के लिए ⌃⌥S, सब म्यूट करने के लिए ⌃⌥M</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> पर €14.99 (एकमुश्त खरीद, कोई subscription नहीं), Apple-reviewed और sandboxed। macOS 14.2+।</p>
`,
  },
  "vlc-volume-too-low-mac": {
    slug: "vlc-volume-too-low-mac",
    title: "Mac पर VLC वॉल्यूम बहुत कम? इसे 200% से आगे कैसे बूस्ट करें",
    description:
      "VLC अधिकतम वॉल्यूम पर है लेकिन वीडियो अभी भी बहुत शांत है? VLC में एक बिल्ट-इन 200% बूस्ट है — साथ ही आप प्रति-ऐप वॉल्यूम मिक्सर से और आगे जा सकते हैं।",
    date: "2026-04-08",
    readTime: "4 min read",
    content: `
<p>आप VLC में एक वीडियो देख रहे हैं। डायलॉग शांत है। आप VLC की वॉल्यूम पूरी तरह बढ़ाते हैं। अपने Mac की वॉल्यूम पूरी तरह बढ़ाते हैं। फिर भी ठीक से नहीं सुन पाते।</p>

<p>अच्छी खबर: VLC में वास्तव में एक बिल्ट-इन समाधान है जो अधिकांश लोग नहीं जानते।</p>

<h2>VLC का बिल्ट-इन वॉल्यूम बूस्ट (200% तक)</h2>

<h3>तरीका 1: Scroll wheel</h3>
<p>VLC के वॉल्यूम स्लाइडर पर माउस घुमाएं और ऊपर scroll करें। स्लाइडर 100% से आगे 200% तक जाएगा।</p>

<h3>तरीका 2: कीबोर्ड शॉर्टकट</h3>
<p>वॉल्यूम 100% से ऊपर बढ़ाने के लिए <strong>Command + Up Arrow</strong> (⌘↑) बार-बार दबाएं।</p>

<h3>तरीका 3: Audio menu</h3>
<p>VLC → Audio → Increase Volume।</p>

<h2>VLC के बूस्ट से आगे: system-level amplification</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> VLC को system लेवल पर 0% से 200% तक अपना वॉल्यूम स्लाइडर देता है। यह VLC के internal बूस्ट के साथ stack होता है:</p>

<ul>
  <li>VLC internal: 200% × SoundDial: 200% = प्रभावी 400% amplification</li>
</ul>

<img src="/apps/sounddial.png" alt="SoundDial boosting VLC volume at the system level on macOS for quiet video files" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial VLC को <strong>स्वतंत्र रूप से</strong> बूस्ट करने देता है। आपका म्यूज़िक प्लेयर, ब्राउज़र और कम्युनिकेशन ऐप्स अपने सामान्य स्तर पर रहते हैं जबकि केवल VLC तेज़ होता है।</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "disable-audio-ducking-mac": {
    slug: "disable-audio-ducking-mac",
    title: "Mac पर Audio Ducking कैसे बंद करें (या इसे खुद नियंत्रित करें)",
    description:
      "macOS या आपके ऐप्स बिना पूछे कॉल के दौरान आपका संगीत कम करते रहते हैं। अवांछित audio ducking रोकने का तरीका — या इसे ducking से बदलें जिसे आप वास्तव में नियंत्रित करते हैं।",
    date: "2026-04-10",
    readTime: "5 min read",
    content: `
<p>आप Zoom कॉल में शामिल होते हैं। आपका संगीत लगभग शून्य हो जाता है। आपने कोई वॉल्यूम नियंत्रण नहीं छुआ — किसी चीज़ ने आपके लिए यह किया। यह <strong>audio ducking</strong> है: कॉल के दौरान बैकग्राउंड ऑडियो का स्वचालित कम होना।</p>

<h2>Mac पर audio ducking कहाँ से आती है</h2>

<p>macOS में <strong>बिल्ट-इन audio ducking फीचर नहीं है</strong>। अगर कॉल के दौरान आपका संगीत शांत हो रहा है, तो इनमें से कोई एक इसे कर रहा है:</p>

<h3>1. Zoom की audio processing</h3>
<p>Zoom → Settings → Audio में जाएं और "Automatically adjust microphone volume" अक्षम करें।</p>

<h3>2. Bluetooth कोडेक स्विचिंग</h3>
<p>जब कोई ऐप Bluetooth हेडफ़ोन का माइक्रोफोन activate करता है, तो macOS AAC से SCO कोडेक पर switch करता है। एक अलग माइक्रोफोन का उपयोग करके इसे ठीक करें।</p>

<h3>3. किसी third-party ऐप द्वारा</h3>
<p>Background Music जैसे कुछ ऑडियो ऐप्स में auto-pause या auto-duck फीचर होते हैं।</p>

<h2>बुरी ducking को अच्छी ducking से बदलें</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> में एक बिल्ट-इन auto-ducking फीचर है जो आपको नियंत्रण देता है:</p>

<ul>
  <li><strong>Configurable duck लेवल:</strong> कॉल के दौरान बैकग्राउंड ऑडियो को कितना कम करना है — 10% से 80% तक — ठीक-ठीक चुनें।</li>
  <li><strong>Smart detection:</strong> माइक्रोफोन उपयोग मॉनिटर करके कॉल detect करता है। Zoom, Teams, FaceTime, Discord, Slack, Google Meet, Webex, Skype के साथ काम करता है।</li>
  <li><strong>परफेक्ट restoration:</strong> कॉल समाप्त होने पर हर ऐप ठीक अपनी पिछली वॉल्यूम पर लौटता है।</li>
</ul>

<img src="/apps/sounddial.png" alt="SoundDial configurable auto-ducking — control exactly how much background audio is lowered during calls" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "bluetooth-headphones-too-quiet-mac": {
    slug: "bluetooth-headphones-too-quiet-mac",
    title: "Mac पर Bluetooth हेडफ़ोन बहुत शांत? हर वो फिक्स जो काम करता है",
    description:
      "आपके Bluetooth हेडफ़ोन फोन पर ठीक काम करते हैं लेकिन Mac पर शांत लगते हैं। यहाँ हर कारण — कोडेक समस्याओं से macOS वॉल्यूम सीमाओं तक — और हर एक को कैसे ठीक करें।",
    date: "2026-04-12",
    readTime: "6 min read",
    content: `
<p>आपके Bluetooth हेडफ़ोन फोन पर काफी तेज़ हैं। आप उन्हें Mac से connect करते हैं — और सब कुछ शांत है। क्या हो रहा है?</p>

<h2>1. Headphone Safety आपकी वॉल्यूम cap कर रही है</h2>

<p>macOS में एक बिल्ट-इन फीचर है जो आपकी श्रवण सुरक्षा के लिए हेडफ़ोन वॉल्यूम सीमित करता है।</p>

<p><strong>System Settings → Sound → Headphone Safety</strong> पर जाएं। अगर "Reduce Loud Audio" सक्षम है, तो इसे अक्षम करें या threshold बढ़ाएं। यह Mac पर Bluetooth हेडफ़ोन के शांत होने का नंबर एक कारण है।</p>

<h2>2. Bluetooth कोडेक mismatch</h2>

<p>macOS आमतौर पर Apple डिवाइस के लिए AAC और third-party हेडफ़ोन के लिए SBC उपयोग करता है। अगर आपके हेडफ़ोन aptX या LDAC support करते हैं, तो macOS उनका उपयोग नहीं करेगा।</p>

<h2>3. माइक activation SCO trigger करता है</h2>

<p>जब कोई ऐप Bluetooth हेडफ़ोन का माइक activate करता है, macOS AAC से SCO कोडेक पर switch करता है। <strong>Fix:</strong> एक अलग माइक्रोफोन उपयोग करें।</p>

<h2>4. Bluetooth वॉल्यूम sync समस्या</h2>

<p>Bluetooth ऑडियो में दो वॉल्यूम नियंत्रण हैं: Mac side पर एक और हेडफ़ोन side पर। <strong>Fix:</strong> हेडफ़ोन disconnect करें, 5 सेकंड प्रतीक्षा करें, reconnect करें।</p>

<h2>अभी भी शांत? 100% से आगे बूस्ट करें</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> किसी भी ऐप की वॉल्यूम <strong>200%</strong> तक बूस्ट करता है।</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting app volume for Bluetooth headphones on Mac with per-app sliders to 200%" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>प्रति-ऐप बूस्टिंग system-wide वॉल्यूम बूस्ट से बेहतर है क्योंकि आप केवल शांत ऐप को amplify कर सकते हैं।</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "mac-audio-obs-streaming-setup": {
    slug: "mac-audio-obs-streaming-setup",
    title: "OBS और Streaming के लिए Mac ऑडियो: आपके दर्शक क्या सुनते हैं उसे कैसे नियंत्रित करें",
    description:
      "OBS के साथ Mac पर streaming कर रहे हैं? आपके दर्शक सब कुछ एक ही वॉल्यूम पर सुनते हैं — गेम, संगीत, alerts, Discord। यहाँ ऑडियो सोर्स को ठीक से बैलेंस करने का तरीका है।",
    date: "2026-04-15",
    readTime: "7 min read",
    content: `
<p>आप OBS के साथ Mac पर streaming कर रहे हैं। आपका game ऑडियो blast हो रहा है। Discord कॉल चल रही है। Spotify बैकग्राउंड म्यूज़िक चला रहा है। आपके दर्शक यह सब एक ही वॉल्यूम पर सुनते हैं।</p>

<h2>सरल तरीका: OBS capture करने से पहले लेवल नियंत्रित करें</h2>

<p>OBS के अंदर ऑडियो अलग करने की कोशिश करने के बजाय, हर ऐप की वॉल्यूम OBS के desktop audio capture तक पहुंचने से <em>पहले</em> नियंत्रित करें। यही <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> करता है:</p>

<img src="/apps/sounddial.png" alt="SoundDial balancing game, Discord, and music audio levels for OBS streaming on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>सामान्य streaming ऑडियो सेटअप</h3>
<ul>
  <li><strong>Game:</strong> 50% — मौजूद लेकिन आपकी आवाज़ पर हावी नहीं</li>
  <li><strong>Discord / voice chat:</strong> 80% — आपकी टीम से स्पष्ट callouts</li>
  <li><strong>Spotify / संगीत:</strong> 15% — हल्का बैकग्राउंड vibe</li>
  <li><strong>Stream alerts (browser):</strong> 40% — सुनाई देता है लेकिन चौंकाने वाला नहीं</li>
  <li><strong>Slack / नोटिफिकेशन:</strong> म्यूट — दर्शकों को आपके DM सुनने की ज़रूरत नहीं</li>
</ul>

<h3>इसे "Streaming" प्रोफाइल के रूप में सेव करें</h3>
<p>Live जाने से पहले "Streaming" प्रोफाइल एक क्लिक से apply करें। Streaming खत्म होने पर "Normal" या "Gaming" प्रोफाइल पर switch करें।</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> पर उपलब्ध — Apple-reviewed, €14.99 एकमुश्त खरीद, कोई subscription नहीं, macOS 14.2+।</p>
`,
  },
  "make-mac-remember-volume-per-app": {
    slug: "make-mac-remember-volume-per-app",
    title: "अपने Mac को प्रति ऐप वॉल्यूम याद रखने पर कैसे मजबूर करें",
    description:
      "हर बार जब आप Spotify restart करते हैं या Zoom relaunch करते हैं, आपको वॉल्यूम फिर से adjust करनी पड़ती है। macOS को हर ऐप का वॉल्यूम लेवल स्वचालित रूप से याद रखने का तरीका यहाँ है।",
    date: "2026-04-18",
    readTime: "4 min read",
    content: `
<p>आप अपने ऑडियो लेवल परफेक्ट करने में पांच मिनट लगाते हैं। Spotify 30%, Zoom 100%, Slack 15% पर। फिर आप Mac restart करते हैं। या Slack crash होता है और relaunch होता है। हर ऐप डिफ़ॉल्ट वॉल्यूम पर reset हो जाता है। आप सब कुछ फिर से adjust करते हैं।</p>

<p>macOS restart के दौरान system वॉल्यूम याद रखता है। लेकिन यह प्रति-ऐप वॉल्यूम याद नहीं रखता — क्योंकि macOS में पहले स्थान पर प्रति-ऐप वॉल्यूम नियंत्रण नहीं है।</p>

<h2>SoundDial के साथ वॉल्यूम मेमोरी</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> में एक <strong>Volume Memory</strong> फीचर है। जब सक्षम होता है, यह हर ऐप का वॉल्यूम लेवल उसके bundle identifier से सेव करता है। जब ऐप quit होता है और relaunch होता है — चाहे आप restart करें, crash हो, या Mac restart करें — SoundDial स्वचालित रूप से इसे saved वॉल्यूम पर restore करता है।</p>

<img src="/apps/sounddial.png" alt="SoundDial volume memory — automatically remembers and restores per-app volume levels on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>यह कैसे काम करता है</h3>
<ol>
  <li>SoundDial की settings में "Remember volume per app" सक्षम करें</li>
  <li>हर ऐप को अपनी पसंदीदा वॉल्यूम पर सेट करें</li>
  <li>SoundDial स्वचालित रूप से लेवल सेव करता है</li>
  <li>जब ऐप relaunch होता है, वॉल्यूम ठीक वहाँ restore होती है जहाँ थी</li>
</ol>

<p>पहली बार जब आप वॉल्यूम सेट करते हैं वही आखिरी बार होता है।</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> पर उपलब्ध — Apple-reviewed, €14.99 एकमुश्त खरीद, कोई subscription नहीं, macOS 14.2+।</p>
`,
  },
  "podcast-volume-too-low-mac": {
    slug: "podcast-volume-too-low-mac",
    title: "Mac पर Podcast वॉल्यूम बहुत कम? इसे तेज़ कैसे बनाएं",
    description:
      "कुछ podcasts Mac पर अधिकतम वॉल्यूम पर भी फुसफुसाहट जैसी होती हैं। यहाँ क्यों — और अन्य ऐप्स को प्रभावित किए बिना podcast ऑडियो को 100% से आगे कैसे बूस्ट करें।",
    date: "2026-04-20",
    readTime: "5 min read",
    content: `
<p>आप Mac पर podcast सुन रहे हैं। Host ठीक लगती है, लेकिन guest — अपने किचन में लैपटॉप mic से रिकॉर्डिंग कर रहा है — मुश्किल से सुनाई देता है। आप वॉल्यूम 100% तक बढ़ाते हैं। Host अब बहुत तेज़ है, लेकिन guest अभी भी शांत है।</p>

<h2>कुछ podcasts इतनी शांत क्यों होती हैं</h2>

<ul>
  <li><strong>Guest mic quality:</strong> एक host का professional setup है, guest AirPods पर है। Level का अंतर 15+ dB हो सकता है।</li>
  <li><strong>कोई post-production नहीं:</strong> professionally produced podcasts levels compress और normalize करती हैं। कई नहीं करतीं।</li>
  <li><strong>Podcast apps normalize नहीं करते:</strong> Apple Podcasts और Spotify podcast content पर minimal normalization apply करते हैं।</li>
</ul>

<h2>System-level fix: podcast apps को 100% से आगे बूस्ट करें</h2>

<p>Universal fix आपके podcast ऐप को macOS की 100% सीमा से आगे amplify करना है। <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> हर ऐप को <strong>200%</strong> तक वॉल्यूम स्लाइडर देता है।</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting Apple Podcasts volume to 180% on Mac for quiet podcast episodes" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Apple Podcasts या अपने podcast ऐप को 160-180% पर सेट करें जबकि Spotify म्यूज़िक 40% पर और Slack 15% पर रखें।</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> पर उपलब्ध — Apple-reviewed, €14.99 एकमुश्त खरीद, कोई subscription नहीं, macOS 14.2+।</p>
`,
  },
  "mac-audio-online-classes-lectures": {
    slug: "mac-audio-online-classes-lectures",
    title: "ऑनलाइन कक्षाओं और लेक्चर के लिए Mac ऑडियो सेटअप",
    description:
      "नोट्स लेते हुए, Google पर खोजते हुए और सहपाठियों से चैट करते हुए लेक्चर देखना — सब अलग-अलग वॉल्यूम पर। Mac पर छात्र ऑडियो प्रबंधित करने का तरीका यहाँ है।",
    date: "2026-04-22",
    readTime: "5 min read",
    content: `
<p>आप Zoom पर ऑनलाइन लेक्चर attend कर रहे हैं। संदर्भ के लिए दूसरे टैब में YouTube ट्यूटोरियल खुला है। सहपाठी Discord पर chat कर रहे हैं। Spotify बैकग्राउंड में lo-fi beats चला रहा है। आपका Mac इन सभी को एक वॉल्यूम मानता है।</p>

<h2>प्रति-ऐप ऑडियो के साथ पढ़ाई सेट करना</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> हर ऐप को अपना वॉल्यूम स्लाइडर देता है:</p>

<img src="/apps/sounddial.png" alt="SoundDial student setup — lecture at full volume, study music low, notifications muted" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Lecture प्रोफाइल</h3>
<ul>
  <li><strong>Zoom / Teams / Meet:</strong> 100% — एक शब्द न चूकें</li>
  <li><strong>Spotify:</strong> 15% — मुश्किल से सुनाई देने वाला बैकग्राउंड ambiance</li>
  <li><strong>Discord:</strong> 10% — केवल हल्की नोटिफिकेशन</li>
  <li><strong>Browser:</strong> 40% — ज़रूरत पड़ने पर reference वीडियो के लिए</li>
  <li><strong>iMessage:</strong> म्यूट — कक्षाओं के बीच जांचें</li>
</ul>

<h3>Self-study प्रोफाइल</h3>
<ul>
  <li><strong>Spotify:</strong> 50% — प्रेरक study म्यूज़िक</li>
  <li><strong>Browser:</strong> 70% — स्पष्ट स्तर पर tutorial वीडियो</li>
  <li><strong>Discord:</strong> 20% — study group के लिए उपलब्ध</li>
  <li><strong>बाकी सब:</strong> म्यूट</li>
</ul>

<p>प्रत्येक को वॉल्यूम प्रोफाइल के रूप में सेव करें और दिन बढ़ने के साथ एक क्लिक से switch करें।</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> पर उपलब्ध — Apple-reviewed, €14.99 एकमुश्त खरीद, कोई subscription नहीं, macOS 14.2+।</p>
`,
  },
  "mac-sound-not-working-after-update": {
    slug: "mac-sound-not-working-after-update",
    title: "Update के बाद Mac साउंड काम नहीं कर रही? संपूर्ण फिक्स गाइड",
    description:
      "आपने macOS update किया और अब आपकी साउंड गायब है, crackling है, या गलत वॉल्यूम पर stuck है। यहाँ Mac ऑडियो को दोबारा काम करने के लिए हर फिक्स है।",
    date: "2026-04-25",
    readTime: "7 min read",
    content: `
<p>आपने macOS update किया। सब ठीक लग रहा था — फिर आपने देखा कि कोई साउंड नहीं है। या साउंड crackling है। या वॉल्यूम stuck है। Post-update ऑडियो समस्याएं लगभग हर macOS release के साथ होती हैं।</p>

<h2>Step 1: obvious चीज़ें जांचें</h2>

<h3>क्या यह मम्यूट है?</h3>
<p>वॉल्यूम-अप key दबाएं। जांचें कि screen पर वॉल्यूम indicator दिखता है या नहीं। कभी-कभी updates सिस्टम वॉल्यूम शून्य पर reset करते हैं।</p>

<h3>क्या सही आउटपुट डिवाइस चुना गया है?</h3>
<p>System Settings → Sound → Output। Update के बाद, macOS कभी-कभी एक unexpected आउटपुट डिवाइस पर switch करता है।</p>

<h3>क्या Headphone Safety वॉल्यूम सीमित कर रही है?</h3>
<p>System Settings → Sound → Headphone Safety जांचें।</p>

<h2>Step 2: Core Audio restart करें</h2>

<p>Terminal खोलें और चलाएं:</p>
<p><code>sudo killall coreaudiod</code></p>

<p>ऑडियो थोड़े समय के लिए बंद होगा और restart होगा।</p>

<h2>Step 3: NVRAM/PRAM reset करें</h2>

<p>Intel Macs के लिए: पूरी तरह shutdown करें, फिर लगभग 20 सेकंड के लिए <strong>Option + Command + P + R</strong> दबाकर पावर ऑन करें।</p>

<h2>Step 4: Third-party ऑडियो driver conflicts जांचें</h2>

<p>macOS updates अक्सर third-party ऑडियो drivers तोड़ते हैं:</p>
<ul>
  <li><strong>Soundflower</strong> — बंद हो चुका है, नए macOS के साथ अक्सर conflict करता है</li>
  <li><strong>BlackHole</strong> — macOS updates के बाद update की ज़रूरत हो सकती है</li>
  <li><strong>Background Music</strong> — एक virtual audio device install करता है जो updates पर अक्सर टूटता है</li>
</ul>

<h2>SoundDial के साथ भविष्य की समस्याएं रोकें</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> का एक फायदा: यह system audio driver install नहीं करता। यह Apple के native Core Audio Tap API का उपयोग करता है, जिसका मतलब है यह macOS updates के साथ साफ काम करता है।</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> पर उपलब्ध — Apple-reviewed, €14.99 एकमुश्त खरीद, कोई subscription नहीं, macOS 14.2+।</p>
`,
  },
  "mute-all-apps-keyboard-shortcut-mac": {
    slug: "mute-all-apps-keyboard-shortcut-mac",
    title: "Mac पर एक साथ सभी ऐप्स म्यूट कैसे करें (और उन्हें परफेक्ट तरीके से अनम्यूट करें)",
    description:
      "तत्काल चुप्पी चाहिए? म्यूट key सब कुछ म्यूट करती है — लेकिन अनम्यूट करने से आपकी सावधानी से बैलेंस की गई वॉल्यूम रीसेट हो जाती है। Mac पर म्यूट और restore करने का एक बेहतर तरीका यहाँ है।",
    date: "2026-04-28",
    readTime: "4 min read",
    content: `
<p>कोई कमरे में आता है। आपका बॉस अनायास कॉल करता है। एक client कॉल पर अपनी screen share करता है और आपका संगीत उनके speakers से चलने लगता है। आपको तत्काल चुप्पी चाहिए। अभी।</p>

<p>आप म्यूट key दबाते हैं। सब कुछ शांत हो जाता है। संकट टल गया।</p>

<p>फिर वह क्षण गुज़र जाता है। आप म्यूट key फिर दबाते हैं। सब कुछ वापस आता है — लेकिन system volume level पर, जो याद नहीं रखता कि Spotify 30%, Zoom 100%, और Slack 15% पर था। वे individual levels? गई। आपको सब कुछ manually फिर adjust करना होगा।</p>

<h2>System म्यूट key: blunt instrument</h2>

<p>Mac की म्यूट key (F10) <strong>system audio output</strong> म्यूट करती है। हर ऐप एक साथ चुप हो जाता है। अनम्यूट करना system volume को वहाँ restore करता है जहाँ था — लेकिन चूंकि macOS में केवल एक वॉल्यूम स्लाइडर है, याद रखने या restore करने के लिए कोई per-app levels नहीं हैं।</p>

<h2>एक होशियार म्यूट: per-app mute all</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> में एक "Mute All" कीबोर्ड शॉर्टकट है: <strong>Control + Option + M (⌃⌥M)</strong>।</p>

<p>जब आप इसे दबाते हैं:</p>
<ol>
  <li>हर ऐप individually म्यूट होता है (हर ऐप का volume state save होता है)</li>
  <li>तत्काल चुप्पी — म्यूट key जैसी ही</li>
</ol>

<p>जब आप इसे फिर दबाते हैं:</p>
<ol>
  <li>हर ऐप अनम्यूट होता है</li>
  <li>हर ऐप <strong>ठीक</strong> उस वॉल्यूम पर लौटता है जहाँ म्यूट से पहले था</li>
  <li>Spotify 30%, Zoom 100%, Slack 15% पर वापस — परफेक्ट restore</li>
</ol>

<img src="/apps/sounddial.png" alt="SoundDial mute-all shortcut — Control+Option+M to mute and unmute all apps with volume restore" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>यह कब मायने रखता है</h2>

<ul>
  <li><strong>Screen sharing:</strong> आप screen share कर रहे हैं और Mac को चुप करना है। ⌃⌥M → चुप्पी → काम करें → ⌃⌥M → संगीत ठीक सही level पर वापस।</li>
  <li><strong>अनायास रुकावट:</strong> कोई आता है, तुरंत चुप्पी चाहिए। एक शॉर्टकट, कोई mouse नहीं।</li>
  <li><strong>त्वरित फोन कॉल:</strong> Desk phone बजता है। Mac चुप करें, कॉल लें, हो जाने पर अनम्यूट करें।</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "google-meet-volume-too-low-mac": {
    slug: "google-meet-volume-too-low-mac",
    title: "Mac पर Google Meet वॉल्यूम बहुत कम? इसे कैसे ठीक करें",
    description:
      "Google Meet पर आवाज़ें अधिकतम वॉल्यूम पर भी मुश्किल से सुनाई देती हैं। यहाँ जानें Meet Chrome में क्यों चलता है, इसका ऑडियो पर क्या प्रभाव है, और इसे कैसे बूस्ट करें।",
    date: "2026-05-01",
    readTime: "5 min read",
    content: `
<p>Google Meet का कोई native Mac ऐप नहीं है — यह आपके browser के अंदर चलता है। इसका मतलब Meet का ऑडियो Chrome (या Safari) के audio stream का हिस्सा है।</p>

<h2>1. Meet की खुद की audio settings जांचें</h2>

<p>Meet कॉल के दौरान, तीन dots menu (⋮) → Settings → Audio क्लिक करें। सुनिश्चित करें कि सही speaker device चुना गया है।</p>

<h2>2. अपने browser का tab volume जांचें</h2>

<p>Chrome में: Meet tab पर right-click करें → सुनिश्चित करें "Mute site" चुना नहीं है।</p>

<h2>3. Bluetooth कोडेक समस्या</h2>

<p>अगर आप AirPods या Bluetooth हेडफ़ोन उपयोग कर रहे हैं, Google Meet आपके microphone को activate करने से AAC से SCO कोडेक पर switch होता है। <strong>Fix:</strong> Meet की audio settings में, output के रूप में Bluetooth हेडफ़ोन रखते हुए input device के रूप में Mac का built-in microphone चुनें।</p>

<h2>4. Google Meet (Chrome) को 100% से आगे बूस्ट करें</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Chrome को अपना वॉल्यूम स्लाइडर देता है जो <strong>200%</strong> तक जाता है। चूंकि Google Meet Chrome के अंदर चलता है, Chrome बूस्ट करने से Meet बूस्ट होता है।</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting Google Meet (Chrome) volume beyond 100% on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>यह Safari में भी काम करता है। SoundDial हर browser को independently नियंत्रित करता है।</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> पर उपलब्ध — Apple-reviewed, €14.99 एकमुश्त खरीद, कोई subscription नहीं, macOS 14.2+।</p>
`,
  },
  "mac-alert-volume-separate-from-media": {
    slug: "mac-alert-volume-separate-from-media",
    title: "Mac Alert वॉल्यूम को Media वॉल्यूम से अलग कैसे सेट करें",
    description:
      "macOS में एक छिपा हुआ alert volume slider है, लेकिन यह केवल system sounds को cover करता है। Mac पर नोटिफिकेशन और media volume को सही में अलग करने का तरीका यहाँ है।",
    date: "2026-05-02",
    readTime: "5 min read",
    content: `
<p>आपका संगीत परफेक्ट level पर है। फिर एक macOS alert sound चलती है — "Funk" या "Tink" sound effect — और यह आपके संगीत की तुलना में दर्दनाक रूप से तेज़ है।</p>

<h2>macOS का बिल्ट-इन alert volume</h2>

<p>macOS में एक अलग alert volume है। <strong>System Settings → Sound</strong> पर जाएं और <strong>"Alert volume"</strong> स्लाइडर देखें। यह macOS system sounds की वॉल्यूम नियंत्रित करता है — error beeps, Trash खाली करना, screenshot shutter।</p>

<h3>Alert volume क्या नियंत्रित नहीं करता</h3>
<ul>
  <li>Slack नोटिफिकेशन sounds</li>
  <li>Discord नोटिफिकेशन sounds</li>
  <li>Teams/Zoom sounds</li>
  <li>Mail नोटिफिकेशन sounds</li>
  <li>कोई भी third-party ऐप नोटिफिकेशन sounds</li>
</ul>

<p>Third-party ऐप्स अपनी नोटिफिकेशन sounds अपने audio engine से चलाते हैं — इसलिए alert volume slider का उन पर कोई असर नहीं।</p>

<h2>असली fix: नोटिफिकेशन ऐप्स के लिए per-app volume</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> हर ऐप को अपना वॉल्यूम स्लाइडर देता है। नोटिफिकेशन-heavy ऐप्स को subtle level पर सेट करें।</p>

<img src="/apps/sounddial.png" alt="SoundDial separating notification app volume from media app volume on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>उदाहरण सेटअप</h3>
<p><strong>Media ऐप्स:</strong> Spotify: 50%, Safari/Chrome: 60%</p>
<p><strong>नोटिफिकेशन ऐप्स:</strong> Slack: 15%, Discord: 20%, Mail: 10%</p>
<p><strong>Communication ऐप्स:</strong> Zoom/Teams: 100%</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> पर उपलब्ध — €14.99 एकमुश्त खरीद, कोई subscription नहीं, macOS 14.2+।</p>
`,
  },
  "facetime-volume-too-low-mac": {
    slug: "facetime-volume-too-low-mac",
    title: "Mac पर FaceTime कॉल वॉल्यूम बहुत कम? इसे कैसे ठीक करें",
    description:
      "पूरी वॉल्यूम पर भी Mac पर FaceTime ऑडियो मुश्किल से सुनाई देता है। यहाँ हर fix है — sound settings से लेकर FaceTime को 100% से आगे बूस्ट करने तक।",
    date: "2026-05-04",
    readTime: "5 min read",
    content: `
<p>आपके iPhone पर FaceTime कॉल ठीक है। लेकिन Mac पर, दूसरा व्यक्ति ऐसे लगता है जैसे तीन कमरे दूर से फुसफुसा रहा हो। Mac पर कम FaceTime volume एक सामान्य समस्या है।</p>

<h2>1. Output device जांचें</h2>
<p>System Settings → Sound → Output। सुनिश्चित करें कि सही device चुना गया है।</p>

<h2>2. AirPods ऑटो-स्विचिंग अक्षम करें</h2>
<p>System Settings → Bluetooth → AirPods के बगल में "i" → "Connect to This Mac" → "When Last Connected to This Mac" सेट करें।</p>

<h2>3. Bluetooth कोडेक समस्या</h2>
<p>AirPods के साथ FaceTime उपयोग करने से AAC-to-SCO कोडेक स्विच होता है। एक अलग microphone उपयोग करें।</p>

<h2>4. Core Audio रीसेट करें</h2>
<p>Terminal खोलें और चलाएं: <code>sudo killall coreaudiod</code></p>

<h2>5. FaceTime वॉल्यूम 100% से आगे बूस्ट करें</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> FaceTime की वॉल्यूम <strong>200%</strong> तक बूस्ट करने देता है।</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting FaceTime call volume beyond 100% on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> पर उपलब्ध — Apple-reviewed, sandboxed, एकमुश्त खरीद, कोई subscription नहीं।</p>
`,
  },
  "mac-volume-keyboard-shortcuts": {
    slug: "mac-volume-keyboard-shortcuts",
    title: "Mac वॉल्यूम कीबोर्ड शॉर्टकट जो आप शायद नहीं जानते",
    description:
      "बुनियादी volume keys से परे — fine-grained control, specific apps म्यूट करना, और per-app volume shortcuts। हर Mac audio कीबोर्ड ट्रिक समझाई गई है।",
    date: "2026-05-06",
    readTime: "5 min read",
    content: `
<p>हर Mac उपयोगकर्ता volume up/down/mute keys जानता है। लेकिन macOS में कई hidden keyboard tricks हैं जो अधिकांश लोग कभी नहीं खोजते।</p>

<h2>सभी को पता होने चाहिए ये बिल्ट-इन शॉर्टकट</h2>

<h3>Fine-grained volume adjustment</h3>
<p><strong>Option + Shift</strong> दबाकर volume up या down key दबाएं। हर press सामान्य step का <strong>एक चौथाई</strong> adjust करता है, 16 के बजाय 64 levels देता है।</p>

<h3>चुपचाप volume adjustment</h3>
<p><strong>Shift</strong> दबाकर volume up या down दबाएं। Volume बदलती है लेकिन audible feedback "pop" sound नहीं।</p>

<h3>Sound settings पर जाएं</h3>
<p>किसी भी volume key के साथ <strong>Option</strong> दबाएं → System Settings → Sound सीधे खुलता है।</p>

<h3>त्वरित output device switch</h3>
<p><strong>Option</strong> दबाकर menu bar में Sound icon क्लिक करें → सभी उपलब्ध output devices की सूची देखें।</p>

<h2>SoundDial के साथ per-app volume कीबोर्ड शॉर्टकट</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> दो global keyboard shortcuts जोड़ता है:</p>

<h3>Volume mixer toggle: Control + Option + S</h3>
<p>कहीं से भी <strong>⌃⌥S</strong> दबाएं और SoundDial का popover खुलता है।</p>

<h3>सभी ऐप्स म्यूट: Control + Option + M</h3>
<p><strong>⌃⌥M</strong> दबाएं → हर ऐप का ऑडियो तुरंत म्यूट। फिर दबाएं → सब unmute, हर ऐप अपनी पिछली वॉल्यूम पर।</p>

<img src="/apps/sounddial.png" alt="SoundDial keyboard shortcuts — Control+Option+S to toggle, Control+Option+M to mute all" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "background-music-app-not-working-mac": {
    slug: "background-music-app-not-working-mac",
    title: "Background Music ऐप macOS पर काम नहीं कर रहा? ये alternatives आज़माएं",
    description:
      "macOS update के बाद free Background Music ऐप बंद हो गया? यहाँ जानें यह क्यों टूटता है, क्या करें, और 2026 में वास्तव में काम करने वाले सर्वोत्तम alternatives।",
    date: "2026-06-08",
    readTime: "5 min read",
    content: `
<p>Background Music एक popular free, open-source Mac ऐप है जो basic per-app volume control देता है। यह एक virtual audio device install करके काम करता है। समस्या: यह टूट जाता है। नियमित रूप से।</p>

<h2>Background Music क्यों टूटता रहता है</h2>

<p>Background Music एक <strong>virtual audio device driver</strong> install करके काम करता है। Apple लगभग हर major macOS release के साथ audio drivers के काम करने के तरीके को बदलता है। चूंकि Background Music एक volunteer-maintained open-source project है, Apple के बदलावों से match करने के updates हमेशा समय पर नहीं आते।</p>

<h2>Virtual audio devices उपयोग न करने वाले alternatives</h2>

<p>Background Music की मूलभूत समस्या architectural है: virtual audio devices fragile हैं। Modern alternatives Apple के <strong>Core Audio Tap API</strong> का उपयोग करते हैं।</p>

<h3>SoundDial</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> modern Audio Tap API उपयोग करता है — कोई virtual audio device नहीं, कोई system driver नहीं, कोई kernel extensions नहीं।</p>

<img src="/apps/sounddial.png" alt="SoundDial — a Background Music alternative that doesn't install virtual audio devices" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Background Music पर फायदे:</p>
<ul>
  <li><strong>कोई virtual audio device नहीं</strong></li>
  <li><strong>200% तक volume boost</strong></li>
  <li><strong>Volume profiles</strong></li>
  <li><strong>Auto-ducking</strong></li>
  <li><strong>Volume memory</strong></li>
  <li><strong>Keyboard shortcuts</strong></li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "soundsource-alternative-mac": {
    slug: "soundsource-alternative-mac",
    title: "SoundSource Alternative: Mac के लिए हल्का, सस्ता Per-App Volume Control",
    description:
      "SoundSource शक्तिशाली है लेकिन महंगा और जटिल है। अगर आपको audio engineering toolkit के बिना सिर्फ per-app volume control चाहिए, तो यहाँ क्या उपयोग करें।",
    date: "2026-06-06",
    readTime: "6 min read",
    content: `
<p>Rogue Amoeba का SoundSource Mac के लिए सबसे पुराना per-app volume control ऐप है। यह शक्तिशाली है, per-app EQ, audio effect chains, per-app output routing के साथ। यह $39 भी है, एक system audio driver (ACE) आवश्यक है।</p>

<h2>SoundSource किसके लिए अच्छा है</h2>
<ul>
  <li>Per-app EQ और audio effects के साथ per-app volume control</li>
  <li>Per-app output routing</li>
  <li>Podcaster, streamer, या audio professional के लिए</li>
</ul>

<h2>Regular users के लिए SoundSource की कमियां</h2>

<h3>कोई volume profiles नहीं</h3>
<p>SoundSource में profile system नहीं है। आप "Meeting" configuration और "Focus" configuration save और switch नहीं कर सकते।</p>

<h3>कोई auto-ducking नहीं</h3>
<p>SoundSource कॉल join करने पर background audio automatically कम नहीं करता।</p>

<h2>SoundDial: ज़्यादातर लोगों को वास्तव में क्या चाहिए उस पर focused</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> एक अलग approach लेता है:</p>

<table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;">
<thead>
<tr style="border-bottom:2px solid rgba(255,255,255,0.2);">
  <th style="text-align:left;padding:10px 12px;color:rgba(255,255,255,0.6);">फीचर</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundDial</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundSource</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Per-app volume</td>
  <td style="text-align:center;padding:10px 12px;">हाँ (0-200%)</td>
  <td style="text-align:center;padding:10px 12px;">हाँ</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Volume profiles</td>
  <td style="text-align:center;padding:10px 12px;">हाँ</td>
  <td style="text-align:center;padding:10px 12px;">नहीं</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Auto-ducking</td>
  <td style="text-align:center;padding:10px 12px;">हाँ</td>
  <td style="text-align:center;padding:10px 12px;">नहीं</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Per-app EQ</td>
  <td style="text-align:center;padding:10px 12px;">नहीं</td>
  <td style="text-align:center;padding:10px 12px;">हाँ</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">System audio driver</td>
  <td style="text-align:center;padding:10px 12px;">आवश्यक नहीं</td>
  <td style="text-align:center;padding:10px 12px;">आवश्यक (ACE)</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">कीमत</td>
  <td style="text-align:center;padding:10px 12px;">€14.99 एकमुश्त</td>
  <td style="text-align:center;padding:10px 12px;">$39 USD</td>
</tr>
</tbody>
</table>

<img src="/apps/sounddial.png" alt="SoundDial — a lighter, focused SoundSource alternative with volume profiles and auto-ducking" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> पर उपलब्ध — एकमुश्त खरीद, कोई subscription नहीं।</p>
`,
  },
  "mac-volume-too-loud-at-lowest-setting": {
    slug: "mac-volume-too-loud-at-lowest-setting",
    title: "सबसे कम सेटिंग पर Mac वॉल्यूम बहुत तेज़? और भी शांत कैसे जाएं",
    description:
      "सबसे कम volume notch पर भी आपका Mac बहुत तेज़ है — खासकर रात को हेडफ़ोन के साथ। यहाँ बेहतर volume control कैसे पाएं और minimum से नीचे कैसे जाएं।",
    date: "2026-05-08",
    readTime: "5 min read",
    content: `
<p>आधी रात है। आप हेडफ़ोन पहने हुए हैं। आप volume-down key दबाते हैं जब तक सबसे कम notch पर नहीं आते — एक bar। यह अभी भी बहुत तेज़ है। अगला press mute है। बीच में कुछ नहीं।</p>

<h2>बिल्ट-इन fix: quarter-step volume adjustment</h2>

<p><strong>Option + Shift</strong> दबाकर volume up/down keys दबाएं। हर press एक सामान्य step के एक चौथाई से adjust होता है — 16 के बजाय 64 steps देता है।</p>

<h2>असली fix: fine control के लिए per-app volume</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> आपको per-app volume sliders देता है जिनमें 1% increments में control है। आप Spotify को 5% और Zoom को 40% एक साथ सेट कर सकते हैं।</p>

<img src="/apps/sounddial.png" alt="SoundDial fine-grained per-app volume control with 1% increments on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Late-night headphone उपयोग के लिए: system volume 40-50% पर सेट करें, फिर SoundDial से हर ऐप fine-tune करें।</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "one-airpod-louder-than-the-other-fix": {
    slug: "one-airpod-louder-than-the-other-fix",
    title: "एक AirPod दूसरे से तेज़? हर fix समझाया गया",
    description:
      "बायाँ AirPod दाएँ से शांत है (या उल्टा)। यहाँ हर कारण है — earwax से macOS balance settings तक — और इसे कैसे ठीक करें।",
    date: "2026-05-10",
    readTime: "5 min read",
    content: `
<p>एक AirPod ठीक लगता है। दूसरा ध्यान से शांत है। संगीत off-center लगता है। यह सबसे सामान्य AirPods शिकायतों में से एक है।</p>

<h2>1. AirPods साफ करें</h2>

<p>सबसे सामान्य कारण physical है: एक AirPod पर speaker mesh को partially block करने वाला earwax या debris।</p>
<ul>
  <li>Speaker mesh को धीरे से brush करने के लिए dry, soft-bristled brush उपयोग करें</li>
  <li><strong>उपयोग न करें:</strong> पानी, alcohol, compressed air, या sharp objects</li>
</ul>

<h2>2. macOS में audio balance जांचें</h2>

<ol>
  <li><strong>System Settings → Accessibility → Audio</strong> पर जाएं</li>
  <li><strong>Balance</strong> slider खोजें</li>
  <li>सुनिश्चित करें यह L और R के बीच exactly centered है</li>
</ol>

<h2>3. AirPods reset करें</h2>

<p>दोनों AirPods charging case में रखें → lid बंद करें, 30 सेकंड प्रतीक्षा करें → case के पीछे setup button 15 सेकंड दबाकर रखें।</p>

<h2>4. Hardware समस्या</h2>

<p>अगर ऊपर में से कोई fix काम नहीं करता, Apple Support से संपर्क करें।</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "netflix-streaming-audio-too-quiet-mac": {
    slug: "netflix-streaming-audio-too-quiet-mac",
    title: "Mac पर Netflix और Streaming ऑडियो बहुत शांत? इसे कैसे ठीक करें",
    description:
      "Dialog फुसफुसाहट जैसा है, फिर विस्फोट कमरा हिलाता है। यहाँ Mac पर streaming audio levels कैसे ठीक करें — और शांत content को 100% से आगे कैसे बूस्ट करें।",
    date: "2026-05-17",
    readTime: "5 min read",
    content: `
<p>आप Netflix पर मूवी देख रहे हैं। दो पात्र बातचीत कर रहे हैं — आप मुश्किल से सुन पाते हैं। आप वॉल्यूम बढ़ाते हैं। Action scene शुरू होता है। विस्फोट बहरा करने वाले हैं।</p>

<h2>Fix 1: Streaming ऐप में "Reduce Loud Sounds" सक्षम करें</h2>
<ul>
  <li><strong>Netflix:</strong> Playback के दौरान, speaker icon → "Reduce Loud Sounds" विकल्प</li>
  <li><strong>Apple TV+:</strong> Settings → Accessibility → "Reduce Loud Sounds"</li>
  <li><strong>Amazon Prime Video:</strong> "Dialogue Boost" फीचर</li>
</ul>

<h2>Fix 2: Streaming audio को 100% से आगे बूस्ट करें</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> किसी भी ऐप को <strong>200%</strong> तक बूस्ट करने देता है।</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting Netflix audio to 180% on Mac for clearer dialog and streaming audio" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>चूंकि SoundDial हर ऐप को independently नियंत्रित करता है, Netflix को 150% बूस्ट करने से आपका Spotify या Slack तेज़ नहीं होता।</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "mac-audio-setup-remote-work": {
    slug: "mac-audio-setup-remote-work",
    title: "Remote Work के लिए Mac ऑडियो सेटअप: संपूर्ण गाइड",
    description:
      "कॉल, संगीत, नोटिफिकेशन, और focus time — सब एक Mac पर। यहाँ अपना ऑडियो कैसे सेट करें ताकि कुछ भी आपका ध्यान न भटकाए।",
    date: "2026-05-12",
    readTime: "8 min read",
    content: `
<p>Mac पर remote work का मतलब है आपका computer एक साथ आपका office phone, radio, notification center, और deep work station है। macOS इन सभी को एक ही तरह treat करता है: एक volume slider।</p>

<h2>Remote work के चार audio modes</h2>

<h3>1. Meeting mode</h3>
<p>आप Zoom या Teams कॉल पर हैं। कॉल crystal clear होनी चाहिए। Slack ping नहीं करनी चाहिए।</p>

<h3>2. Focus mode</h3>
<p>आप deep work कर रहे हैं। Background music कम level पर। नोटिफिकेशन barely perceptible।</p>

<h3>3. Collaborative mode</h3>
<p>आप messages के लिए उपलब्ध हैं। सब कुछ moderate levels पर।</p>

<h3>4. Break mode</h3>
<p>पूरी वॉल्यूम पर संगीत। YouTube पूरी वॉल्यूम पर।</p>

<h2>गायब piece: per-app volume control</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> हर mode के लिए profiles सेव करके इस gap को भरता है:</p>

<img src="/apps/sounddial.png" alt="SoundDial remote work audio setup — different volume levels for Zoom, Spotify, and Slack on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><strong>Meeting profile:</strong> Zoom/Teams: 100%, Spotify: मम्यूट, Slack: म्यूट</p>
<p><strong>Focus Work profile:</strong> Spotify: 30%, Slack: 10%, Zoom: 80%, Browser: 40%</p>

<p>एक call शुरू होने पर SoundDial का auto-ducking automatically सब कुछ कम करता है। जब call खत्म होती है, आपके profile levels restore होते हैं।</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "stop-browser-tabs-auto-playing-audio-mac": {
    slug: "stop-browser-tabs-auto-playing-audio-mac",
    title: "Mac पर Browser Tabs को Auto-Playing Audio से कैसे रोकें",
    description:
      "एक background tab कहीं से audio चलाने लगती है। Ads, videos, news sites — यहाँ रogue tabs को चुप करने और macOS पर browser audio control करने का तरीका है।",
    date: "2026-05-14",
    readTime: "5 min read",
    content: `
<p>आपके बीस tabs खुले हैं। आप उनमें से एक में काम कर रहे हैं। अचानक — कहीं से audio चलने लगता है। कोई video ad। आप scramble करते हैं कौन सा tab है।</p>

<h2>Safari में autoplay बंद करें</h2>

<ol>
  <li>Safari → Settings (⌘,) → Websites tab खोलें</li>
  <li>Left sidebar में "Auto-Play" चुनें</li>
  <li>Default "Never Auto-Play" या "Stop Media with Sound" सेट करें</li>
</ol>

<h2>Chrome में autoplay बंद करें</h2>

<ol>
  <li><code>chrome://settings/content/sound</code> पर जाएं</li>
  <li>Default behavior निर्धारित करने के लिए "Sites can play sound" toggle करें</li>
</ol>

<h2>व्यापक समस्या: browser audio बनाम बाकी सब</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> आपके browser को अपना वॉल्यूम स्लाइडर देता है, हर दूसरे ऐप से independent। Safari को 30% पर कम करें जबकि Zoom 100% पर रखें।</p>

<img src="/apps/sounddial.png" alt="SoundDial controlling browser volume independently from other apps on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "discord-volume-too-loud-mac": {
    slug: "discord-volume-too-loud-mac",
    title: "Mac पर Discord वॉल्यूम बहुत तेज़ (या शांत)? इसे कैसे ठीक करें",
    description:
      "Discord आपके game पर blast कर रहा है, या teammates सुनने के लिए बहुत शांत हैं। macOS पर Discord की वॉल्यूम बाकी सब से independently कैसे नियंत्रित करें।",
    date: "2026-05-21",
    readTime: "5 min read",
    content: `
<p>Mac पर Discord की दो volume समस्याएं हैं। या तो यह बहुत तेज़ है — notification sounds game और music पर blast करती हैं — या बहुत शांत है — game audio पर teammates सुनाई नहीं देते।</p>

<h2>Discord के बिल्ट-इन volume controls</h2>

<p>Discord → Settings (gear icon) → Voice & Video। "Output Volume" स्लाइडर Discord आपको कितना तेज़ सुनाई देता है नियंत्रित करता है।</p>

<h3>Per-user volume</h3>
<p>Voice channel में किसी user पर right-click करें → "User Volume"। आप individual users को 0% से 200% तक adjust कर सकते हैं।</p>

<h2>SoundDial से ठीक करें</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Discord को menu bar में अपना volume slider देता है, हर दूसरे ऐप से independent।</p>

<img src="/apps/sounddial.png" alt="SoundDial controlling Discord volume independently from game and music on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>सामान्य setups</h3>
<p><strong>Gaming with Discord:</strong> Discord: 100%, Game: 40%, Spotify: 15%</p>
<p><strong>Hanging out:</strong> Discord: 80%, Browser/YouTube: 60%</p>
<p><strong>Focus work:</strong> Discord: म्यूट या 10%, Spotify: 50%</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "switch-audio-output-quickly-mac": {
    slug: "switch-audio-output-quickly-mac",
    title: "Mac पर Audio Output को जल्दी कैसे Switch करें (Settings में खोदे बिना)",
    description:
      "Mac पर speakers, headphones, और monitors के बीच switching करने में बहुत ज़्यादा clicks लगते हैं। यहाँ अपने audio output device को तुरंत बदलने के तेज़ तरीके हैं।",
    date: "2026-05-19",
    readTime: "5 min read",
    content: `
<p>आप headphones unplug करते हैं और audio speakers पर जाना चाहते हैं। या AirPods connect होते हैं और macOS गलत device चुनता है। हर बार: System Settings → Sound → Output → scroll → click। एक काम के लिए बहुत ज़्यादा clicks।</p>

<h2>तरीका 1: Volume icon पर Option-click करें</h2>

<p>यह सबसे तेज़ बिल्ट-इन तरीका है और अधिकांश लोग इसे नहीं जानते।</p>

<p>अपने menu bar में volume/sound icon पर <strong>Option (⌥)</strong> दबाकर click करें। सभी उपलब्ध output devices की सूची मिलती है।</p>

<h2>तरीका 2: SoundDial का बिल्ट-इन device switcher</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> में अपने menu bar popover में output device picker है — per-app volume sliders के साथ। Device switch करें <em>और</em> per-app volumes एक ही panel में adjust करें।</p>

<img src="/apps/sounddial.png" alt="SoundDial with audio output device switching and per-app volume control in one menu bar panel" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "fix-audio-crackling-popping-mac": {
    slug: "fix-audio-crackling-popping-mac",
    title: "Mac पर Audio Crackling और Popping ठीक करें: संपूर्ण गाइड",
    description:
      "आपके Mac का audio crackle, pop, या stutter करता है — संगीत, calls, या video playback के दौरान। macOS audio glitches के हर ज्ञात कारण और fix यहाँ हैं।",
    date: "2026-05-16",
    readTime: "8 min read",
    content: `
<p>आप संगीत सुन रहे हैं और एक pop सुनाई देता है। फिर एक crackle। Mac पर audio crackling maddeningly सामान्य है, और इसके कम से कम छह अलग-अलग कारण हैं।</p>

<h2>1. Core Audio restart करें (त्वरित fix)</h2>

<p>Terminal खोलें और चलाएं: <code>sudo killall coreaudiod</code></p>

<p>Audio एक second के लिए cut होगा और restart होगा।</p>

<h2>2. CPU overload</h2>

<p>Audio crackling अक्सर high CPU usage के साथ correlate करती है। Activity Monitor में CPU tab देखें।</p>

<h2>3. Bluetooth audio समस्याएं</h2>

<p>WiFi, USB 3.0 devices, और अन्य Bluetooth devices interference कर सकते हैं। Bluetooth reset करने के लिए Shift+Option दबाएं, menu bar में Bluetooth icon क्लिक करें।</p>

<h2>4. Sample rate mismatch</h2>

<p>Audio MIDI Setup खोलें (Applications → Utilities), अपना output device चुनें, और sample rate जांचें।</p>

<h2>5. macOS update regression</h2>

<p>कुछ macOS updates audio bugs introduce करते हैं। Apple के point update की जांच करें।</p>

<h2>SoundDial से audio quality manage करें</h2>

<ul>
  <li><strong>Competing audio sources कम करें:</strong> SoundDial उपयोग करके उन ऐप्स को mute करें जो actively उपयोग नहीं हो रहे।</li>
  <li><strong>System max के बजाय volume boost:</strong> System volume 70-80% पर रखें और specific apps के लिए <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial's</a> per-app boost उपयोग करें।</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "teams-volume-too-low-mac": {
    slug: "teams-volume-too-low-mac",
    title: "Mac पर Microsoft Teams वॉल्यूम बहुत कम? हर वो fix जो काम करता है",
    description:
      "अधिकतम वॉल्यूम पर भी Teams पर लोगों को मुश्किल से सुन पाते हैं? यहाँ हर कारण है — Teams settings से Bluetooth codecs तक — और call audio को 100% से आगे कैसे बूस्ट करें।",
    date: "2026-06-04",
    readTime: "7 min read",
    content: `
<p>आप Teams meeting में हैं। आपका coworker present कर रहा है, लेकिन उनकी आवाज़ ऐसे लग रही है जैसे tin can से आ रही हो। Mac volume 100% पर है। Teams volume 100% पर है। अभी भी बहुत शांत।</p>

<h2>1. Teams की audio settings जांचें</h2>

<p>Profile icon → Settings → Devices क्लिक करें:</p>
<ul>
  <li>सही <strong>Speaker</strong> device चुना है सुनिश्चित करें</li>
  <li>Audio verify करने के लिए "Make a test call" उपयोग करें</li>
  <li>"Noise suppression" "High" पर नहीं होनी चाहिए</li>
</ul>

<h2>2. Bluetooth कोडेक switching</h2>

<p>AirPods या Bluetooth headphones उपयोग करना Teams call में macOS को AAC से SCO codec पर switch करने पर मजबूर करता है। <strong>Fix:</strong> Teams → Settings → Devices → Microphone में "MacBook Pro Microphone" चुनें।</p>

<h2>3. Core Audio reset करें</h2>

<p><code>sudo killall coreaudiod</code> Terminal में चलाएं।</p>

<h2>4. Teams वॉल्यूम 100% से आगे बूस्ट करें</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> किसी भी ऐप की वॉल्यूम <strong>200%</strong> तक बूस्ट करने देता है, Microsoft Teams सहित।</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting Microsoft Teams call volume beyond 100% on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "how-to-control-per-app-volume-on-mac": {
    slug: "how-to-control-per-app-volume-on-mac",
    title: "Mac पर Per-App Volume कैसे नियंत्रित करें",
    description:
      "macOS आपको सब कुछ के लिए एक volume slider देता है। यहाँ हर ऐप के लिए individual volume controls कैसे पाएं — और यह आपकी सोच से ज़्यादा क्यों मायने रखता है।",
    date: "2026-05-20",
    readTime: "7 min read",
    content: `
<p>आप video call पर हैं। Slack डिंग करता रहता है। Background में संगीत चल रहा है। आप volume key दबाते हैं और — सब कुछ शांत हो जाता है। macOS में exactly एक volume slider है, और यह सब कुछ एक साथ नियंत्रित करता है।</p>

<p>Windows में Vista (2006) से per-app volume mixer है। बीस साल बाद, macOS अभी भी नहीं है।</p>

<h2>Per-app volume का वास्तव में क्या मतलब है</h2>

<p>Per-app volume का मतलब है आपके Mac पर हर application को अपना independent volume slider मिलता है। Spotify को 30%, Zoom को 100%, Slack को completely mute, और Safari को 50% — सब एक साथ।</p>

<h2>एक अच्छे mixer की मुख्य विशेषताएं</h2>

<ul>
  <li><strong>Real-time app detection</strong> — जब कोई नया ऐप audio चलाना शुरू करे, automatically दिखे</li>
  <li><strong>Per-app mute</strong> — एक specific ऐप चुप करने के लिए एक click</li>
  <li><strong>Volume boost</strong> — 100% से आगे amplify करें</li>
  <li><strong>Profiles</strong> — अलग-अलग situations के लिए configurations save करें</li>
  <li><strong>Auto-ducking</strong> — call शुरू होने पर automatically संगीत कम करें</li>
</ul>

<h2>SoundDial</h2>

<p>मैंने <strong>SoundDial</strong> इसलिए बनाया क्योंकि जो Mac volume mixer मैं चाहता था वह exist नहीं करता था। यह menu bar में रहता है, हर ऐप को अपना slider देता है। Per-app mute, volume boost, profiles, और auto-ducking। एकमुश्त खरीद, macOS 14+, कोई subscription नहीं।</p>

<p>वह volume mixer जो macOS में built-in होना चाहिए था।</p>
`,
  },
  "mute-slack-notifications-mac-without-muting-everything": {
    slug: "mute-slack-notifications-mac-without-muting-everything",
    title: "Mac पर बाकी सब Mute किए बिना Slack कैसे Mute करें",
    description:
      "Slack notifications आपका focus बाधित करती रहती हैं, लेकिन आप संगीत या calls चुप नहीं करना चाहते। macOS पर सिर्फ Slack को mute करने का तरीका यहाँ है।",
    date: "2026-05-24",
    readTime: "5 min read",
    content: `
<p>आप deep focus work में हैं। Spotify परफेक्ट concentration playlist चला रहा है। फिर — <em>knock brush</em> — Slack ping करता है। और फिर। आप Slack mute करना चाहते हैं लेकिन संगीत रखना चाहते हैं। macOS कहता है: सब mute करो या कुछ मत करो।</p>

<h2>Option 1: Slack में notifications mute करें</h2>

<p>Slack में "Pause notifications" feature है:</p>
<ol>
  <li>Slack के sidebar में profile picture click करें</li>
  <li>"Pause notifications" click करें</li>
  <li>Duration चुनें (30 min, 1 hour, आदि)</li>
</ol>

<h2>Option 2: Per-app volume control (असली fix)</h2>

<p>आप वास्तव में जो चाहते हैं वह simple है: Slack की volume 10-15% पर करें जबकि बाकी सब normal levels पर रखें।</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Slack को अपना independent volume slider देता है।</p>

<img src="/apps/sounddial.png" alt="SoundDial with Slack muted and Spotify playing at normal volume on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>आदर्श Slack workflow</h3>
<ul>
  <li><strong>Focus time:</strong> Slack 10% या muted। Spotify 40%।</li>
  <li><strong>Available time:</strong> Slack 40%।</li>
  <li><strong>Meeting time:</strong> Slack muted। Zoom 100%।</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "volume-profiles-for-mac": {
    slug: "volume-profiles-for-mac",
    title: "Mac पर विभिन्न Situations के लिए Volume Profiles कैसे Setup करें",
    description:
      "Meetings, focus work, gaming, और relaxing के लिए अलग-अलग volume setups — एक click से switchable। macOS पर volume profiles कैसे काम करते हैं यहाँ बताया गया है।",
    date: "2026-06-02",
    readTime: "5 min read",
    content: `
<p>सुबह 9 बजे आप Zoom call पर हैं — Zoom 100%, Spotify muted, Slack muted चाहते हैं। सुबह 10 बजे call खत्म — Spotify 40%, Slack 15% चाहते हैं। दोपहर में gaming — game 60%, Discord 100%, बाकी सब muted। हर situation के लिए एक अलग ideal volume configuration है।</p>

<h2>Volume profiles क्या हैं?</h2>

<p>एक volume profile हर ऐप की volume और mute state का एक saved snapshot है। आप अपने apps configure करते हैं — Spotify 30%, Zoom 100%, Slack muted — फिर उसे "Work" या "Meeting" जैसे named profile के रूप में save करते हैं।</p>

<h2>macOS में volume profiles नहीं हैं</h2>

<p>macOS में Focus modes हैं लेकिन वे volume levels control नहीं करते। वे notification sounds पूरी तरह suppress कर सकते हैं, लेकिन Spotify को 30% या Zoom को 100% सेट नहीं कर सकते।</p>

<h2>SoundDial के साथ profiles setup करना</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> में एक built-in profile system है:</p>

<ol>
  <li>Menu bar से SoundDial खोलें</li>
  <li>एक specific situation के लिए हर app की volume adjust करें</li>
  <li>Profile section में "+" button click करें</li>
  <li>इसे नाम दें (जैसे "Meeting") और icon चुनें</li>
</ol>

<img src="/apps/sounddial.png" alt="SoundDial volume profiles — one-click switching between Meeting, Focus, and Chill modes on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>उदाहरण profiles</h3>

<p><strong>Meeting:</strong> Zoom/Teams: 100%, Spotify: मम्यूट, Slack: म्यूट</p>
<p><strong>Focus Work:</strong> Spotify: 35%, Slack: 10%, Browser: 50%</p>
<p><strong>Gaming:</strong> Game: 60%, Discord: 100%, Spotify: 20%</p>
<p><strong>Chill:</strong> Spotify: 70%, Browser: 60%, Notifications: 20%</p>

<h2>Profiles + auto-ducking = पूरी तरह automatic</h2>

<p>Profiles को SoundDial के auto-ducking feature के साथ मिलाएं और आपको शायद ही volume touch करनी पड़े।</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "zoom-call-volume-too-low-mac": {
    slug: "zoom-call-volume-too-low-mac",
    title: "Mac पर Zoom Call वॉल्यूम बहुत कम? इसे कैसे Boost करें",
    description:
      "अधिकतम वॉल्यूम पर भी Zoom पर लोगों को मुश्किल से सुन पाते हैं? यहाँ हर fix है — Zoom settings से लेकर per-app volume mixer से call audio 100% से आगे बूस्ट करने तक।",
    date: "2026-05-26",
    readTime: "6 min read",
    content: `
<p>आप Zoom call पर हैं। दूसरा व्यक्ति बात कर रहा है, लेकिन उनकी आवाज़ मुश्किल से सुनाई देती है। Mac volume अधिकतम पर है। Zoom का speaker volume अधिकतम पर है। फिर भी सुनना मुश्किल है।</p>

<h2>1. Zoom की audio output settings जांचें</h2>

<p>Zoom → Settings → Audio खोलें:</p>
<ul>
  <li>सही output device चुना गया है सुनिश्चित करें</li>
  <li>Speaker volume slider अधिकतम पर है</li>
  <li>Test tone clearly सुनने के लिए "Test Speaker" click करें</li>
</ul>

<h2>2. Bluetooth कोडेक जांचें</h2>

<p>AirPods या Bluetooth headphones उपयोग करने पर Zoom call macOS को AAC से SCO कोडेक पर switch करने पर मजबूर करता है। <strong>Fix:</strong> Output के रूप में AirPods रखते हुए Mac का built-in mic या USB mic उपयोग करें।</p>

<h2>3. Core Audio Reset करें</h2>

<p><code>sudo killall coreaudiod</code> Terminal में चलाएं।</p>

<h2>4. Zoom की वॉल्यूम 100% से आगे बूस्ट करें</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> किसी भी app की वॉल्यूम <strong>200%</strong> तक बूस्ट करने देता है — Zoom सहित।</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting Zoom call volume to 180% on Mac for clearer audio during video calls" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>यह <strong>Microsoft Teams, Google Meet, FaceTime, Discord, Slack huddles, Webex</strong> के साथ भी काम करता है।</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "lower-spotify-without-lowering-everything-mac": {
    slug: "lower-spotify-without-lowering-everything-mac",
    title: "Mac पर बाकी सब को कम किए बिना Spotify को कैसे कम करें",
    description:
      "आप Spotify को background music के रूप में चाहते हैं, लेकिन volume keys से इसे कम करने पर call और बाकी सब भी शांत हो जाता है। यहाँ fix है।",
    date: "2026-05-30",
    readTime: "4 min read",
    content: `
<p>आप काम कर रहे हैं। Spotify background music चला रहा है। यह थोड़ा तेज़ है। आप volume-down key tap करते हैं। Spotify शांत हो जाता है। लेकिन सब कुछ भी — Zoom call, notification sounds, browser audio। यह नहीं चाहते थे।</p>

<p>ऐसा इसलिए होता है क्योंकि macOS में एक volume slider है।</p>

<h2>असली fix: per-app volume control</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> आपके menu bar में हर app का volume slider रखता है। Spotify कम करने के लिए बाकी सब को प्रभावित किए बिना:</p>

<ol>
  <li>Menu bar में SoundDial icon click करें</li>
  <li>Spotify list में खोजें</li>
  <li>इसका slider नीचे drag करें</li>
</ol>

<img src="/apps/sounddial.png" alt="SoundDial lowering Spotify volume independently while keeping other apps at full volume on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>और भी बेहतर: auto-ducking calls के दौरान</h2>

<p>SoundDial call join करने पर automatically Spotify कम कर सकता है। Auto-ducking enable करें, background audio कितना reduce करना है choose करें, और SoundDial बाकी handle करता है।</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> पर एकमुश्त खरीद। कोई subscription नहीं। macOS 14.2+।</p>
`,
  },
  "macos-tahoe-per-app-volume-control": {
    slug: "macos-tahoe-per-app-volume-control",
    title: "क्या macOS Tahoe में Per-App Volume Control है?",
    description:
      "macOS Tahoe (macOS 26) में बड़े updates आए, लेकिन क्या Apple ने अंततः volume mixer जोड़ा? यहाँ जवाब है — और अभी per-app volume control कैसे पाएं।",
    date: "2026-06-12",
    readTime: "4 min read",
    content: `
<p>हर साल Mac users उम्मीद करते हैं कि अगला macOS release अंततः volume mixer include करेगा। हर साल वे निराश होते हैं। macOS Tahoe (macOS 26) के साथ Apple ने redesigned interface और नए features deliver किए। लेकिन क्या उन्होंने per-app volume control जोड़ा?</p>

<h2>संक्षिप्त जवाब: नहीं</h2>

<p>macOS Tahoe में built-in volume mixer नहीं है। Audio experience हर पहले macOS release जैसी ही है: एक system volume slider जो सब कुछ एक साथ नियंत्रित करता है।</p>

<h2>macOS Tahoe ने audio के लिए क्या improve किया</h2>

<ul>
  <li><strong>बेहतर Bluetooth audio stability</strong></li>
  <li><strong>बेहतर spatial audio processing</strong></li>
  <li><strong>Core Audio performance</strong> — professional audio applications के लिए कम latency</li>
</ul>

<h2>macOS Tahoe पर per-app volume control कैसे पाएं</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> macOS Tahoe के साथ fully compatible है और Apple के modern Core Audio Tap API उपयोग करता है।</p>

<img src="/apps/sounddial.png" alt="SoundDial providing per-app volume control on macOS Tahoe" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> पर एकमुश्त खरीद। कोई subscription नहीं। macOS 14.2+।</p>
`,
  },
  "play-music-speakers-calls-headphones-mac": {
    slug: "play-music-speakers-calls-headphones-mac",
    title: "Headphones पर Calls लेते हुए Speakers पर Music कैसे चलाएं (Mac)",
    description:
      "एक साथ desk speakers पर Spotify और AirPods में Zoom चाहते हैं? macOS यह आसान नहीं बनाता — यहाँ क्या वास्तव में काम करता है।",
    date: "2026-05-15",
    readTime: "5 min read",
    content: `
<p>यह एक उचित चीज़ है जो आप करना चाह सकते हैं: desk speakers के ज़रिए music चलाते हुए AirPods से Zoom call लें। macOS कहता है नहीं। जब आप audio output device select करते हैं, <em>हर</em> app उसका उपयोग करता है।</p>

<h2>macOS यह natively क्यों नहीं कर सकता</h2>

<p>macOS सभी audio को एक single selected output device के ज़रिए route करता है। इसमें built-in per-app audio routing नहीं है।</p>

<h2>एक सरल approach: volume-based separation</h2>

<p>अगर आपका मुख्य लक्ष्य music पर clearly call सुनना है (physically different devices पर route करने के बजाय), per-app volume control समस्या को अधिक simply हल करता है।</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> हर app को अपना volume slider देता है। Call के दौरान:</p>
<ul>
  <li>Zoom/Teams/FaceTime को <strong>100%</strong> सेट करें</li>
  <li>Spotify को <strong>20%</strong> तक कम करें</li>
  <li>बाकी सब mute करें</li>
</ul>

<img src="/apps/sounddial.png" alt="SoundDial showing Zoom at full volume and Spotify lowered during a call on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial का <strong>auto-ducking</strong> यह automatically करता है। Call join करने पर, यह microphone activate होने का detect करता है और background apps को configure level तक कम करता है।</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "mac-volume-keeps-changing-by-itself": {
    slug: "mac-volume-keeps-changing-by-itself",
    title: "Mac वॉल्यूम अपने आप बदलती रहती है: इसे कैसे ठीक करें",
    description:
      "आपके Mac की volume randomly ऊपर जाती है, नीचे आती है, या अलग level पर reset होती है। यहाँ हर ज्ञात कारण और इसे कैसे रोकें।",
    date: "2026-05-18",
    readTime: "6 min read",
    content: `
<p>आप Mac volume आरामदायक level पर सेट करते हैं। आप नज़र हटाते हैं। वापस आने पर यह अलग है। यह random नहीं है — हमेशा एक specific trigger होता है।</p>

<h2>1. Bluetooth device reconnection</h2>

<p>सबसे सामान्य कारण। जब Bluetooth device (AirPods, speakers) connect या disconnect होती है, macOS उस device के साथ last उपयोग किए गए level पर volume reset करता है।</p>

<h2>2. HDMI/DisplayPort output</h2>

<p>External display connect या disconnect करने से volume बदल सकती है। System Settings → Sound → Output जांचें।</p>

<h2>3. कोई app volume बदल रही है</h2>

<p>Zoom → Settings → Audio में "Automatically adjust microphone volume" अनचेक करें।</p>

<h2>4. macOS audio daemon reset</h2>

<p>Sleep/wake cycles के बाद coreaudiod restart होती है और volume reset हो सकती है।</p>

<h2>SoundDial के साथ per-app volumes lock करें</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> हर app का volume level independently याद रखता है। जब app restart होती है या Mac sleep से जागता है, SoundDial हर app को saved volume पर restore करता है।</p>

<img src="/apps/sounddial.png" alt="SoundDial remembering per-app volume levels across restarts on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "best-volume-mixer-apps-mac-2026": {
    slug: "best-volume-mixer-apps-mac-2026",
    title: "2026 में Mac के लिए सर्वोत्तम Volume Mixer Apps",
    description:
      "हर Mac app जो per-app volume control देता है उसकी बिना बकवास तुलना। Features, pricing, और कौन सा वास्तव में उपयोग करने लायक है।",
    date: "2026-06-12",
    readTime: "10 min read",
    content: `
<p>macOS में built-in volume mixer नहीं है। Individual apps की volume control करने के लिए आपको third-party app चाहिए।</p>

<h2>Options</h2>

<h3>SoundDial</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> एक native macOS menu bar app है जो per-app volume control पर focused है।</p>

<ul>
  <li>Per-app volume: हाँ, 0% से 200%</li>
  <li>Volume boost: हाँ, 200% तक</li>
  <li>Profiles: हाँ, custom नाम और icons के साथ</li>
  <li>Auto-ducking: हाँ, configurable duck level के साथ</li>
  <li>Keyboard shortcuts: हाँ</li>
  <li>कीमत: €14.99 एकमुश्त खरीद</li>
  <li>आवश्यकता: macOS 14.2+</li>
</ul>

<img src="/apps/sounddial.png" alt="SoundDial per-app volume mixer showing individual app volume sliders on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>SoundSource (Rogue Amoeba)</h3>
<ul>
  <li>Per-app EQ और audio effect chains के साथ</li>
  <li>Per-app output routing</li>
  <li>Profiles नहीं, Auto-ducking नहीं</li>
  <li>कीमत: $39 USD</li>
</ul>

<h3>Background Music (Free, Open Source)</h3>
<ul>
  <li>बुनियादी per-app volume</li>
  <li>100% से आगे बूस्ट नहीं</li>
  <li>macOS updates के बाद reliability issues</li>
  <li>कीमत: मुफ़्त</li>
</ul>

<h2>Quick comparison table</h2>

<table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;">
<thead>
<tr style="border-bottom:2px solid rgba(255,255,255,0.2);">
  <th style="text-align:left;padding:10px 12px;color:rgba(255,255,255,0.6);">फीचर</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundDial</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundSource</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">Background Music</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Volume boost (200%)</td>
  <td style="text-align:center;padding:10px 12px;">हाँ</td>
  <td style="text-align:center;padding:10px 12px;">हाँ</td>
  <td style="text-align:center;padding:10px 12px;">नहीं</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Volume profiles</td>
  <td style="text-align:center;padding:10px 12px;">हाँ</td>
  <td style="text-align:center;padding:10px 12px;">नहीं</td>
  <td style="text-align:center;padding:10px 12px;">नहीं</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Auto-ducking</td>
  <td style="text-align:center;padding:10px 12px;">हाँ</td>
  <td style="text-align:center;padding:10px 12px;">नहीं</td>
  <td style="text-align:center;padding:10px 12px;">नहीं</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">System driver</td>
  <td style="text-align:center;padding:10px 12px;">नहीं</td>
  <td style="text-align:center;padding:10px 12px;">हाँ</td>
  <td style="text-align:center;padding:10px 12px;">हाँ</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">कीमत</td>
  <td style="text-align:center;padding:10px 12px;">एकमुश्त</td>
  <td style="text-align:center;padding:10px 12px;">$39</td>
  <td style="text-align:center;padding:10px 12px;">मुफ़्त</td>
</tr>
</tbody>
</table>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a>।</p>
`,
  },
  "youtube-too-quiet-safari-chrome-mac": {
    slug: "youtube-too-quiet-safari-chrome-mac",
    title: "Mac पर Safari या Chrome में YouTube बहुत शांत? इसे तुरंत ठीक करें",
    description:
      "कुछ YouTube videos अधिकतम volume पर भी मुश्किल से सुनाई देती हैं। यहाँ browser audio अन्य apps से अक्सर शांत क्यों होता है — और Mac पर इसे 100% से आगे कैसे बूस्ट करें।",
    date: "2026-05-22",
    readTime: "5 min read",
    content: `
<p>आप एक YouTube video click करते हैं। Creator बोल रहा है, लेकिन आप मुश्किल से सुन पाते हैं। System volume अधिकतम पर है। Spotify खोलें — music पूरी volume पर blast होता है। तो speakers की समस्या नहीं है। यह video है।</p>

<h2>कुछ YouTube videos इतनी शांत क्यों होती हैं</h2>

<p>हर creator के पास professional audio equipment नहीं है। YouTube loudness normalization को targets -14 LUFS, लेकिन यह बहुत शांत source audio को fully compensate नहीं करता।</p>

<h2>असली fix: browser volume को 100% से आगे बूस्ट करें</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> हर app को — Safari और Chrome सहित — 0% से <strong>200%</strong> तक independent volume slider देता है।</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting Safari browser volume to 180% for quiet YouTube videos on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "mac-notification-sounds-too-loud-headphones": {
    slug: "mac-notification-sounds-too-loud-headphones",
    title: "Headphones में Mac Notification Sounds बहुत तेज़? यहाँ Fix है",
    description:
      "Slack pings और macOS alerts आपके headphones में दर्दनाक रूप से तेज़ हैं जबकि music ठीक है। यहाँ notification volume क्यों अलग है — और इसे कैसे नियंत्रित करें।",
    date: "2026-05-25",
    readTime: "5 min read",
    content: `
<p>आप headphones पहने हुए हैं, आरामदायक 40% volume पर music सुन रहे हैं। Slack notification चलती है। <em>DING।</em> आपके music की तुलना में बहरा करने वाली तेज़।</p>

<h2>Notifications music से तेज़ क्यों लगती हैं</h2>

<p>Notification sounds छोटे, sharp audio bursts हैं जो आपका ध्यान खींचने के लिए design किए गए हैं। उनका peak volume design से high है। Headphones में यह worse है क्योंकि sound सीधे ear canal में जाती है।</p>

<h2>बिल्ट-इन notification volume कम करने के तरीके</h2>

<h3>Alert volume कम करें</h3>
<p><strong>System Settings → Sound</strong> में <strong>Alert volume</strong> slider। यह केवल macOS system sounds affect करता है — Slack, Discord, Teams नहीं।</p>

<h2>असली fix: notification app volume independently नियंत्रित करें</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> हर app को अपना volume slider देता है।</p>

<img src="/apps/sounddial.png" alt="SoundDial showing Slack at low volume and Spotify at normal volume — independent notification control on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>एक typical headphone-friendly setup</h3>
<ul>
  <li><strong>Spotify / Music</strong> — 50%</li>
  <li><strong>Slack</strong> — 15% (ध्यान देने योग्य लेकिन चौंकाने वाला नहीं)</li>
  <li><strong>Mail</strong> — 10%</li>
  <li><strong>Zoom / FaceTime</strong> — 90%</li>
</ul>

<p>इसे SoundDial में "Headphones" profile के रूप में save करें।</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "stop-zoom-lowering-music-mac": {
    slug: "stop-zoom-lowering-music-mac",
    title: "Zoom को Mac पर आपका Music कम करने से कैसे रोकें",
    description:
      "हर बार जब आप Zoom call join करते हैं, आपका music गायब हो जाता है। यहाँ यह क्यों होता है और calls के दौरान क्या शांत होता है उसे अपनी शर्तों पर कैसे नियंत्रित करें।",
    date: "2026-05-28",
    readTime: "6 min read",
    content: `
<p>आप Zoom call join करते हैं। Spotify आरामदायक volume पर चल रहा था। Call connect होती है और — आपका music गायब हो जाता है। आपने कुछ नहीं छुआ।</p>

<h2>Call के दौरान music शांत क्यों होता है</h2>

<h3>1. Zoom की built-in audio ducking</h3>
<p>Zoom → Settings → Audio जांचें — "Automatically adjust microphone volume" disable करें।</p>

<h3>2. macOS कोडेक switching</h3>
<p>Bluetooth headphones के साथ Zoom call join करने पर macOS AAC से SCO कोडेक पर switch करता है, जिससे overall audio volume कम होती है।</p>

<h2>असली fix: आपकी शर्तों पर auto-ducking</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> में एक built-in auto-ducking feature है जो आपको नियंत्रण देता है। आप <strong>duck level</strong> configure करते हैं — background audio calls के दौरान कितना reduce होता है।</p>

<img src="/apps/sounddial.png" alt="SoundDial auto-ducking settings — configurable volume reduction during Zoom calls on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Call खत्म होने पर, हर app अपनी पिछली volume पर exactly वापस आता है। यह Zoom, Teams, FaceTime, Discord, Slack, Google Meet, Webex, Skype के साथ काम करता है।</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "airpods-volume-too-low-mac": {
    slug: "airpods-volume-too-low-mac",
    title: "Mac पर AirPods वॉल्यूम बहुत कम? हर Fix समझाया गया",
    description:
      "पूरी volume पर भी Mac पर AirPods शांत लगते हैं? यहाँ सभी कारण हैं — headphone safety limits से Bluetooth quirks तक — और उन्हें कैसे ठीक करें।",
    date: "2026-06-08",
    readTime: "7 min read",
    content: `
<p>आपके AirPods iPhone पर ठीक काम करते हैं। Mac से wirelessly connect करें — और अचानक सब कुछ बहुत शांत है।</p>

<h2>1. Headphone Safety आपकी volume limit कर रही है</h2>

<p><strong>System Settings → Sound → Headphone Safety</strong> पर जाएं। अगर "Reduce Loud Audio" enabled है, disable करें या threshold बढ़ाएं।</p>

<h2>2. Bluetooth volume sync से बाहर है</h2>

<p>AirPods disconnect करें, पांच सेकंड प्रतीक्षा करें, फिर reconnect करें। Volume synchronization reset होती है।</p>

<h2>3. Audio कोडेक lower quality पर switch हुआ</h2>

<p>Call या Siri के बाद AirPods disconnect और reconnect करें — macOS music playback के लिए AAC कोडेक पर switch करेगा।</h2>

<h2>4. Core Audio bad state में है</h2>

<p>Terminal में <code>sudo killall coreaudiod</code> चलाएं।</p>

<h2>अभी भी बहुत शांत? AirPods volume को 100% से आगे बूस्ट करें</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> किसी भी app की volume <strong>200%</strong> तक बूस्ट करने देता है।</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting app volume for AirPods on Mac with per-app volume sliders up to 200%" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "spotify-volume-too-low-mac": {
    slug: "spotify-volume-too-low-mac",
    title: "Mac पर Spotify वॉल्यूम बहुत कम? यहाँ हर Fix है",
    description:
      "Spotify अधिकतम volume पर है लेकिन Mac पर अभी भी बहुत शांत है? यह guide हर कारण cover करती है — Spotify के built-in limiter से macOS settings तक — और इसे 100% से आगे कैसे बूस्ट करें।",
    date: "2026-06-11",
    readTime: "7 min read",
    content: `
<p>Spotify पूरी volume पर है। Mac पूरी volume पर है। और यह अभी भी पर्याप्त तेज़ नहीं है।</p>

<h2>Spotify का Volume Normalization जांचें</h2>

<p>Spotify में <strong>Volume Normalization</strong> feature है। Open Spotify → Settings → Playback → <strong>Normalize volume</strong>।</p>

<p>तीन options हैं:</p>
<ul>
  <li><strong>Loud</strong> — कम normalization, original mastering levels के करीब</li>
  <li><strong>Normal</strong> — मध्यम normalization (default)</li>
  <li><strong>Quiet</strong> — सबसे ज़्यादा normalization, volume और कम करता है</li>
</ul>

<p><strong>Fix:</strong> अगर Spotify बहुत शांत लगता है, normalization disable करें या "Loud" सेट करें।</p>

<h2>Headphone Safety limits जांचें</h2>

<p><strong>System Settings → Sound → Headphone Safety</strong>। "Reduce Loud Audio" enabled है तो disable करें।</p>

<h2>SoundDial के साथ Spotify को 100% से आगे बूस्ट करें</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> किसी भी app की volume <strong>200%</strong> तक बूस्ट करने देता है — Spotify सहित।</p>

<img src="/apps/sounddial.png" alt="SoundDial boosting Spotify volume to 200% on macOS while keeping other apps at normal volume" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "separate-game-audio-from-discord-mac": {
    slug: "separate-game-audio-from-discord-mac",
    title: "Mac पर Game Audio को Discord से कैसे अलग करें",
    description:
      "Game explosions Discord पर teammates को दबा रहे हैं? macOS पर game audio और voice chat volume independently कैसे नियंत्रित करें।",
    date: "2026-06-10",
    readTime: "6 min read",
    content: `
<p>आप Mac पर gaming कर रहे हैं। In-game explosion होता है। Discord teammates बात कर रहे हैं, लेकिन gunfire के ऊपर आप उन्हें नहीं सुन सकते। Volume कम करते हैं — Discord भी शांत हो जाता है।</p>

<p>Windows पर, आप volume mixer खोलते, game 40% पर और Discord 100% पर सेट करते। Mac पर नहीं कर सकते।</p>

<h2>असल solution: per-app volume control</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> menu bar में बैठता है और हर app को अपना volume slider देता है।</p>

<img src="/apps/sounddial.png" alt="SoundDial showing independent volume sliders for a game and Discord on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Typical gaming setup</h3>
<ul>
  <li><strong>Game</strong> — 30-50%</li>
  <li><strong>Discord / voice chat</strong> — 90-100%</li>
  <li><strong>Spotify / music</strong> — 15-25%</li>
  <li><strong>Browser</strong> — muted</li>
  <li><strong>Slack / notifications</strong> — muted</li>
</ul>

<p>SoundDial हर game और हर voice chat app के साथ काम करता है।</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "why-doesnt-mac-have-volume-mixer": {
    slug: "why-doesnt-mac-have-volume-mixer",
    title: "Mac में Windows जैसा Volume Mixer क्यों नहीं है?",
    description:
      "Windows में 2006 से per-app volume control है। 2026 है और macOS अभी भी नहीं है। यहाँ असली कारण है — और फिर भी एक कैसे पाएं।",
    date: "2026-06-09",
    readTime: "6 min read",
    content: `
<p>Vista (2006) से Windows के हर version में volume mixer है। macOS पर? एक slider। बस। Twenty years के Mac updates — और Apple ने कभी per-app volume control नहीं जोड़ा।</p>

<h2>यह technical limitation नहीं है</h2>

<p>macOS per-app volume control absolutely कर सकता है। Underlying audio framework — <strong>Core Audio</strong> — per-process audio tapping, routing, और gain adjustment support करता है। Apple ने macOS 14 (Sonoma) में <strong>Audio Tap API</strong> introduce किया, जिससे developers के लिए individual app audio streams intercept करना और भी आसान हो गया।</p>

<h2>तो Apple ने इसे क्यों नहीं बनाया?</h2>

<p>Apple ने कभी publicly नहीं समझाया। लेकिन उनके design patterns देखें तो जवाब clear है: <strong>Apple simplicity को power-user features से ऊपर रखता है।</strong> एक volume slider बारह से simpler है।</p>

<h2>Mac पर अभी volume mixer कैसे पाएं</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> एक native macOS menu bar app है जो आपको वह देता है जो Apple नहीं देगा।</p>

<img src="/apps/sounddial.png" alt="SoundDial — the volume mixer for macOS, showing per-app volume sliders in the menu bar" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Mac App Store पर एकमुश्त खरीद। कोई subscription नहीं। macOS 14.2+।</p>
`,
  },
  "boost-mac-volume-beyond-100-percent": {
    slug: "boost-mac-volume-beyond-100-percent",
    title: "Mac वॉल्यूम बहुत कम? Sound को 100% से आगे कैसे Boost करें",
    description:
      "आपका Mac पूरी volume पर है और यह अभी भी बहुत शांत है। यहाँ यह क्यों होता है और बिना external speakers के audio को 200% तक amplify कैसे करें।",
    date: "2026-06-07",
    readTime: "8 min read",
    content: `
<p>आपका Mac volume 100% पर है। Slider पूरी तरह दाईं ओर है। और अभी भी पर्याप्त तेज़ नहीं है। Podcast बहुत शांत है। Video call participant फुसफुसा रहे लगते हैं।</p>

<h2>100% से आगे volume boost कैसे करें</h2>

<p>अगर आपने सब कुछ check किया है और Mac अभी भी बहुत शांत है, आपको volume amplification चाहिए।</p>

<h3>SoundDial: per-app volume boost 200% तक</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> आपके Mac पर हर app को 0% से <strong>200%</strong> तक independent volume slider देता है।</p>

<img src="/apps/sounddial.png" alt="SoundDial volume boost — per-app volume control with 200% amplification on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>System-wide volume boosters से main फायदा: SoundDial <em>per app</em> boost करता है। शांत app को 180% boost करें जबकि बाकी सब normal levels पर रखें।</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> पर एकमुश्त खरीद। कोई subscription नहीं। macOS 14.2+।</p>
`,
  },
  "auto-lower-music-during-zoom-calls-mac": {
    slug: "auto-lower-music-during-zoom-calls-mac",
    title: "Mac पर Zoom Calls के दौरान Music को Automatically कैसे कम करें",
    description:
      "हर बार Zoom call शुरू होने पर आप Spotify pause करने के लिए scramble करते हैं। एक बेहतर तरीका है — auto-ducking mic activate होने पर automatically music कम कर देता है।",
    date: "2026-06-05",
    readTime: "7 min read",
    content: `
<p>Call शुरू होती है। आप screen share कर रहे हैं। Music अभी भी blast हो रहा है। आप frantically Spotify पर switch करते हैं, pause करते हैं, Zoom पर वापस — लेकिन सभी ने पहले से ही आपकी playlist के दस seconds सुन लिए।</p>

<h2>Audio ducking क्या है?</h2>

<p><strong>Audio ducking</strong> का मतलब है कि जब कोई important चीज़ हो रही हो — जैसे voice call — तो background audio की volume automatically कम होना।</p>

<h2>क्या macOS में built-in audio ducking है?</h2>

<p>नहीं। macOS में कोई automatic audio ducking feature नहीं है।</p>

<h2>SoundDial के साथ Auto-ducking</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> में एक built-in auto-ducking feature है जो वह करता है जो macOS को natively करना चाहिए:</p>

<ol>
  <li>Call आपके microphone को activate करती है</li>
  <li>SoundDial call detect करता है</li>
  <li>Background apps आपके configured level तक कम हो जाते हैं</li>
  <li>Call audio पूरी volume पर रहता है</li>
  <li>Call खत्म होती है — सभी apps अपनी पिछली volume पर वापस</li>
</ol>

<p>यह Zoom, Microsoft Teams, FaceTime, Discord, Slack, Google Meet, Cisco Webex, Skype के साथ काम करता है।</p>

<img src="/apps/sounddial.png" alt="SoundDial auto-ducking feature automatically lowering music volume during a Zoom call on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Duck level configure करना</h3>
<p>SoundDial settings में, आप <strong>duck level</strong> adjust कर सकते हैं — 10% (barely audible) से 80% (still quite present) तक। Default 30% ज़्यादातर लोगों के लिए अच्छा काम करता है।</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "how-to-mute-one-app-on-mac": {
    slug: "how-to-mute-one-app-on-mac",
    title: "Mac पर बाकी सब Mute किए बिना एक App को कैसे Mute करें",
    description:
      "Slack ping कर रहा है। आप call पर हैं। Slack mute करना चाहते हैं लेकिन call सुनना जारी रखना चाहते हैं। macOS यह allow नहीं करता — यहाँ यह कैसे करें।",
    date: "2026-06-03",
    readTime: "6 min read",
    content: `
<p>आप Zoom call पर हैं। Slack notification sounds करता रहता है। आप mute key दबाते हैं — और अब call भी नहीं सुन सकते। macOS <em>सब कुछ</em> mute करता है।</p>

<h2>असली solution: per-app mute button</h2>

<p>आप वास्तव में जो चाहते हैं वह dead simple है: हर app के बगल में एक mute button जो उसे instantly silences करे, बाकी को प्रभावित किए बिना।</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> menu bar में बैठता है और हर running app को अपना volume slider और mute button के साथ दिखाता है।</p>

<img src="/apps/sounddial.png" alt="SoundDial showing per-app mute buttons for each application in the macOS menu bar" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>एक app mute करने के लिए:</p>
<ol>
  <li>Menu bar में SoundDial icon click करें</li>
  <li>वह app खोजें जिसे mute करना है</li>
  <li>उसके बगल में speaker icon click करें</li>
</ol>

<p>Auto-ducking feature और आगे जाता है: जब आप call शुरू करते हैं, SoundDial automatically आपके communication app को छोड़कर सब कुछ lower करता है।</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a> — €14.99 एकमुश्त खरीद, कोई सदस्यता नहीं, macOS 14.2+।</p>
`,
  },
  "volume-mixer-for-mac": {
    slug: "volume-mixer-for-mac",
    title: "Mac के लिए Volume Mixer: वह Missing Feature जो macOS में अभी भी नहीं है",
    description:
      "Windows में 2006 से volume mixer है। यहाँ macOS में अभी भी क्यों नहीं है — और 2026 में अपने Mac पर per-app volume control पाने का सर्वोत्तम तरीका।",
    date: "2026-06-01",
    readTime: "9 min read",
    content: `
<p>किसी भी Windows PC पर speaker icon पर right-click करें और Volume Mixer मिलेगा — एक panel जो हर application को अपना independent volume slider के साथ दिखाता है। Mac पर वही करें। एक slider मिलता है।</p>

<h2>Volume mixer वास्तव में क्या करता है</h2>

<p>Volume mixer आपको <strong>हर application के लिए independent volume control</strong> देता है। एक master slider के बजाय, आपको प्रति app एक slider मिलता है।</p>

<h2>Apple ने इसे क्यों नहीं बनाया</h2>

<p>यह technical limitation नहीं है। macOS का audio framework — Core Audio — API level पर per-process audio routing और volume control support करता है। Likely reason Apple का design philosophy है: fewer options, simpler interface।</p>

<h2>SoundDial: वह volume mixer जो macOS में built-in होना चाहिए था</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> एक native macOS menu bar app है जो आपको exactly वह देता है जो Apple नहीं देगा।</p>

<img src="/apps/sounddial.png" alt="SoundDial — per-app volume mixer for macOS showing individual app volume sliders in the menu bar" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Key features:</p>
<ul>
  <li><strong>Per-app volume sliders</strong> — हर running app के लिए 0% से 200% range</li>
  <li><strong>One-click mute</strong> — slider move किए बिना कोई भी app silence करें</li>
  <li><strong>Volume profiles</strong> — volume configurations save और switch करें</li>
  <li><strong>Auto-ducking</strong> — calls के दौरान music automatically कम होता है</li>
  <li><strong>Keyboard shortcuts</strong> — mixer toggle करें या hotkey से सब mute करें</li>
  <li><strong>Volume memory</strong> — restarts के बीच हर app की volume याद रखता है</li>
</ul>

<p>एकमुश्त खरीद। कोई subscription नहीं। macOS 14.2+। <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store पर SoundDial पाएं</a>।</p>
`,
  },
};
