import type { ArticleSet } from "./index";

export const plArticles: ArticleSet = {
  "mac-audio-podcasting-setup": {
    slug: "mac-audio-podcasting-setup",
    title: "Audio Mac do podcastowania: kontroluj to, co słyszysz podczas nagrywania",
    description:
      "Nagrywasz podcast i musisz jednocześnie monitorować poziomy, słyszeć gościa i zarządzać powiadomieniami — wszystko przez jeden suwak głośności. Oto lepsze rozwiązanie.",
    date: "2026-03-05",
    readTime: "5 min read",
    content: `
<p>Nagrywasz podcast na swoim Macu. Musisz wyraźnie słyszeć gościa (przez Zoom, Riverside lub SquadCast). Musisz monitorować poziomy nagrywania w DAW. Slack musi być wyciszony, żeby żadne pingi nie trafiły do nagrania. I musisz całkowicie wyciszyć dźwięki powiadomień systemowych — macOS "ding" w środku wywiadu to bezużyteczne audio.</p>

<p>macOS daje ci jeden suwak głośności dla tego wszystkiego. To nie wystarczy.</p>

<h2>Wyzwanie audio podczas podcastowania na Macu</h2>

<p>Podczas sesji nagrywania podcastu masz zazwyczaj:</p>
<ul>
  <li><strong>Aplikację komunikacyjną</strong> (Zoom, Riverside, SquadCast) — audio gościa, musi być wyraźne</li>
  <li><strong>DAW / aplikację nagrywającą</strong> (Logic, GarageBand, Audacity, Hindenburg) — monitorowanie własnych poziomów</li>
  <li><strong>Źródła powiadomień</strong> (Slack, Mail, Kalendarz, Wiadomości) — muszą być całkowicie wyciszone podczas nagrywania</li>
  <li><strong>Przeglądarkę</strong> — mogą być otwarte notatki do programu, zakładki z badaniami lub timer</li>
</ul>

<p>Wszystko to na tej samej głośności to chaos. Twój gość konkuruje z dźwiękami systemowymi. Powiadomienie Slack może zrujnować nagranie. A jeśli musisz dostosować głośność gościa, zmiana głośności systemowej zmienia też twoje poziomy monitorowania.</p>

<h2>Typowe obejście</h2>

<p>Większość podcasterów używa kombinacji:</p>
<ul>
  <li>Trybu skupienia (Nie przeszkadzać), aby wyciszyć powiadomienia</li>
  <li>Ręcznego zamykania Slack, Mail i innych hałaśliwych aplikacji przed nagrywaniem</li>
  <li>Dostosowywania wewnętrznej głośności aplikacji komunikacyjnej dla gościa</li>
</ul>

<p>To działa, ale jest podatne na błędy. Zapomnisz włączyć DND i powiadomienie zrujnuje twoje nagranie. Zapomnisz zamknąć Slack i przychodzi telefon. A i tak nie możesz niezależnie kontrolować głośności gościa od poziomów monitorowania.</p>

<h2>Audio dla każdej aplikacji w podcastowaniu</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> pozwala zbudować czyste środowisko nagrywania, sterując każdą aplikacją niezależnie:</p>

<img src="/apps/sounddial.png" alt="SoundDial — konfiguracja nagrywania podcastu z niezależnymi poziomami dla audio gościa, monitorowania i powiadomień" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Profil nagrywania</h3>
<ul>
  <li><strong>Zoom / Riverside:</strong> 80-100% — wyraźne audio gościa</li>
  <li><strong>Logic / GarageBand:</strong> 60% — komfortowe monitorowanie bez zmęczenia</li>
  <li><strong>Slack:</strong> wyciszony — zero dźwięków powiadomień</li>
  <li><strong>Mail:</strong> wyciszony</li>
  <li><strong>Wiadomości:</strong> wyciszone</li>
  <li><strong>Kalendarz:</strong> wyciszony</li>
  <li><strong>Przeglądarka:</strong> wyciszona — żadnego niespodziewanego autoodtwarzania</li>
</ul>

<p>Zapisz to jako profil "Nagrywanie". Przed wciśnięciem nagrywania zastosuj profil jednym kliknięciem. Każde źródło powiadomień jest wyciszone, twój gość jest na pełnej głośności, a monitorowanie na komfortowym poziomie.</p>

<h3>Profil edycji</h3>
<ul>
  <li><strong>Logic / Hindenburg:</strong> 100% — pełne monitorowanie do edycji</li>
  <li><strong>Spotify:</strong> wyciszony — brak zakłóceń referencyjnych</li>
  <li><strong>Slack:</strong> 20% — subtelne powiadomienia podczas przerw</li>
  <li><strong>Przeglądarka:</strong> 40% — do notatek i badań</li>
</ul>

<p>Dwa profile, dwa kliknięcia, dwa zupełnie różne środowiska audio. Żadnego ręcznego zamykania i ponownego otwierania aplikacji. Żadnego zapominania o ponownym włączeniu powiadomień po nagraniu.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Pobierz SoundDial z Mac App Store</a> — jednorazowy zakup za €14,99, bez subskrypcji, macOS 14.2+.</p>
`,
  },
  "mac-too-loud-full-volume-tame-it": {
    slug: "mac-too-loud-full-volume-tame-it",
    title: "Dlaczego mój Mac jest tak głośny na pełnej głośności? Jak uzyskać precyzyjniejszą kontrolę",
    description:
      "Głośniki MacBook Pro są świetne — dopóki nie zaczną grzmieć. Jeśli nawet umiarkowane ustawienia głośności brzmią zbyt głośno, oto jak uzyskać dokładniejszą kontrolę audio.",
    date: "2026-03-08",
    readTime: "4 min read",
    content: `
<p>Nowsze modele MacBook Pro Apple (14" i 16") mają wyjątkowo mocne głośniki jak na laptopa. Tak mocne, że umiarkowane poziomy głośności mogą być naprawdę głośne — szczególnie w cichym pokoju, późno w nocy lub przy słuchawkach. Różnica między "komfortowym" a "za dużo" to czasem tylko jeden lub dwa stopnie głośności.</p>

<h2>Dlaczego stopnie głośności wydają się zbyt grube</h2>

<p>macOS ma <strong>16 stopni głośności</strong> przez klawiaturę. Każdy stopień to około 6,25% całego zakresu. Przy mocnych głośnikach lub wrażliwych słuchawkach pojedynczy stopień może oznaczać znaczną zmianę postrzeganej głośności — przejście od "idealnej" do "zbyt głośnej" jednym naciśnięciem klawisza.</p>

<h2>Wbudowana poprawka: regulacja głośności o ćwierć stopnia</h2>

<p>Przytrzymaj <strong>Option + Shift</strong> i naciśnij klawisz zwiększania/zmniejszania głośności. Każde naciśnięcie dostosowuje o jedną czwartą normalnego stopnia, dając ci <strong>64 poziomy</strong> zamiast 16. Ta 4-krotnie precyzyjniejsza kontrola znacznie ułatwia znalezienie dokładnie właściwej głośności, szczególnie przy mocnych głośnikach lub słuchawkach.</p>

<p>To najbardziej przydatna sztuczka audio na Macu, o której większość ludzi nie wie.</p>

<h2>Głębszy problem: jeden suwak dla wszystkiego</h2>

<p>Nawet przy 64 poziomach nadal masz jeden suwak kontrolujący każdą aplikację. Jeśli ustawisz głośność wystarczająco nisko dla komfortowych dźwięków powiadomień, muzyka może być zbyt cicha. Jeśli ustawisz ją dla muzyki, dźwięk powiadomienia może sprawić, że podskoczycie.</p>

<p>Prawdziwym problemem jest to, że różne źródła audio potrzebują różnych głośności. Powiadomienia powinny być subtelne. Muzyka powinna być wyraźna. Rozmowy powinny być czyste. Wideo w przeglądarce powinno być umiarkowane. Jeden suwak nie może dobrze obsłużyć tego wszystkiego.</p>

<h2>Głośność dla każdej aplikacji dla precyzyjnej kontroli</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> daje każdej aplikacji własny suwak głośności z <strong>przyrostami 1%</strong> od 0% do 200%. To 200 poziomów precyzji na aplikację, w porównaniu z 16 (lub 64 z modyfikatorem) ogólnosystemowymi stopniami macOS.</p>

<img src="/apps/sounddial.png" alt="SoundDial — precyzyjna kontrola głośności dla każdej aplikacji z przyrostami 1% na macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Ustaw głośność systemową na umiarkowany poziom bazowy (50-60%), a następnie użyj SoundDial do precyzyjnego dostrojenia każdej aplikacji:</p>
<ul>
  <li><strong>Spotify:</strong> 35% — komfortowy poziom tła</li>
  <li><strong>Slack:</strong> 12% — subtelne powiadomienie ping</li>
  <li><strong>Zoom:</strong> 85% — wyraźne audio rozmów bez przytłaczania</li>
  <li><strong>Safari:</strong> 45% — umiarkowane odtwarzanie wideo</li>
</ul>

<p>W ten sposób żadne pojedyncze źródło audio nie jest nigdy "zbyt głośne". Każde jest dostrojone do idealnego poziomu niezależnie. Ping Slack na 12% jest ledwo zauważalny, podczas gdy twoja rozmowa Zoom na 85% jest krystalicznie czysta — wszystko przy tym samym ustawieniu głośności systemowej.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Pobierz SoundDial z Mac App Store</a> — jednorazowy zakup za €14,99, bez subskrypcji, macOS 14.2+.</p>
`,
  },
  "slack-huddle-volume-issues-mac": {
    slug: "slack-huddle-volume-issues-mac",
    title: "Problemy z głośnością Slack Huddle na Macu: zbyt cicho, zbyt głośno lub walka z muzyką",
    description:
      "Huddle Slack konkuruje z twoją muzyką i powiadomieniami o ten sam suwak głośności. Oto jak niezależnie kontrolować audio huddle od wszystkiego innego na Macu.",
    date: "2026-03-10",
    readTime: "5 min read",
    content: `
<p>Huddle Slack są wygodne — klikasz przycisk i jesteś na rozmowie głosowej bez planowania spotkania. Ale audio to bałagan. Huddle jest na tej samej głośności co twój Spotify. Dźwięki powiadomień Slack pingają na tym samym poziomie co rozmowa. A gdy ktoś udostępnia muzykę lub ekran z dźwiękiem w huddle, jest albo niesłyszalny, albo ogłuszający.</p>

<p>Problem nie leży w Slack. Leży w macOS. Wszystko przechodzi przez jeden suwak głośności, więc audio huddle, dźwięki powiadomień, muzyka i audio przeglądarki walczą o tę samą przestrzeń.</p>

<h2>Wewnętrzne kontrole audio Slack</h2>

<p>Slack ma ograniczone kontrole audio:</p>
<ul>
  <li><strong>Preferencje powiadomień:</strong> Slack → Ustawienia → Powiadomienia → Dźwięk i wygląd. Możesz zmienić dźwięk powiadomień lub wyłączyć określone dźwięki, ale nie możesz ustawić głośności powiadomień niezależnie od głośności huddle.</li>
  <li><strong>Głośność huddle:</strong> Podczas huddle nie ma oddzielnego suwaka głośności dla rozmowy w porównaniu do innych dźwięków Slack. Wszystko w Slack to jeden strumień audio do macOS.</li>
  <li><strong>Urządzenie wejścia/wyjścia:</strong> Slack → Ustawienia → Audio i wideo pozwala wybrać urządzenia mikrofonu i głośnika, ale nie poziomy głośności na funkcję.</li>
</ul>

<h2>Trzy problemy z audio Slack</h2>

<h3>1. Huddle zbyt cichy w stosunku do muzyki</h3>
<p>Twoja muzyka jest na komfortowym poziomie. Dołączasz do huddle. Głos współpracownika jest na tej samej głośności co twoja muzyka — nie możesz wyraźnie zrozumieć słów. Podkręcenie głośności systemowej sprawia, że muzyka jest zbyt głośna.</p>

<h3>2. Dźwięki powiadomień podczas huddle</h3>
<p>Jesteś w dyskusji w huddle. Każda wiadomość Slack, która przychodzi, pinguje na tej samej głośności co rozmowa. W ruchliwym miejscu pracy z aktywnymi kanałami ciągłe pingowanie sprawia, że huddle jest bezużyteczny.</p>

<h3>3. Huddle zbyt głośny do pasywnego słuchania</h3>
<p>Czasem dołączasz do huddle, żeby pasywnie słuchać podczas pracy. Chcesz mieć go na poziomie tła — wystarczająco cicho, żeby nie rozpraszać, wystarczająco głośno, żeby usłyszeć, gdy ktoś mówi twoje imię. macOS nie pozwoli ci ustawić Slack na 20%, zachowując przeglądarkę na 60%.</p>

<h2>Rozwiązanie: niezależna kontrola głośności Slack</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> daje Slack własny suwak głośności, oddzielony od każdej innej aplikacji. Ponieważ audio huddle Slack i dźwięki powiadomień są częścią tej samej aplikacji, suwak kontroluje oba — ale to właśnie tego chcesz przez większość czasu.</p>

<img src="/apps/sounddial.png" alt="SoundDial kontrolujący głośność Slack niezależnie podczas huddle, podczas gdy muzyka gra na innym poziomie" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Konfiguracja zoptymalizowana pod huddle</h3>
<ul>
  <li><strong>Slack:</strong> 90-100% (wyraźne audio huddle, powiadomienia są głośne, ale aktywnie korzystasz ze Slack)</li>
  <li><strong>Spotify:</strong> 15% (ledwo słyszalne tło, nie konkuruje z głosami)</li>
  <li><strong>Przeglądarka:</strong> wyciszona (brak niespodziewanego audio z zakładek)</li>
</ul>

<h3>Konfiguracja pasywnego huddle</h3>
<ul>
  <li><strong>Slack:</strong> 30% (poziom słuchania w tle)</li>
  <li><strong>Spotify:</strong> 40% (główne audio to twoja muzyka)</li>
  <li><strong>Przeglądarka:</strong> 50% (normalny poziom pracy)</li>
</ul>

<p>Zapisz każdy jako profil. Gdy startuje huddle, zastosuj odpowiedni profil jednym kliknięciem. Lub użyj <strong>automatycznego tłumienia</strong> — gdy huddle aktywuje twój mikrofon, SoundDial automatycznie obniża wszystko oprócz Slack.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Pobierz SoundDial z Mac App Store</a> — jednorazowy zakup za €14,99, bez subskrypcji, macOS 14.2+.</p>
`,
  },
  "set-default-volume-new-apps-mac": {
    slug: "set-default-volume-new-apps-mac",
    title: "Jak ustawić domyślną głośność dla nowych aplikacji na Macu",
    description:
      "Nowe aplikacje domyślnie uruchamiają się na pełnej głośności. Oto jak sprawić, by każda nowa aplikacja startowała na komfortowym poziomie — żeby nic cię nie zaskoczyło.",
    date: "2026-03-12",
    readTime: "3 min read",
    content: `
<p>Instalujesz nową aplikację. Uruchamia się po raz pierwszy. Natychmiast odtwarza audio — dźwięk intro, powiadomienie, film tutorialowy — na pełnej głośności systemowej. Nie spodziewałeś się tego. Masz słuchawki. Uszy dzwonią.</p>

<p>macOS nie ma pojęcia "domyślna głośność dla nowych aplikacji", ponieważ macOS nie ma głośności dla poszczególnych aplikacji. Każda aplikacja otrzymuje głośność systemową, a głośność systemowa jest taka, jaka była ostatnio ustawiona. Nowe aplikacje nie otrzymują specjalnego traktowania — po prostu grają na tym samym poziomie co wszystko inne.</p>

<h2>Dlaczego to jest problemem</h2>

<p>Gdy uruchamiasz aplikację po raz pierwszy, nie wiesz, jak głośna będzie. Niektóre aplikacje od razu odtwarzają dźwięki (tutoriale wprowadzające, dźwięki powiadomień, filmy powitalne). Jeśli głośność systemowa wynosi 80%, bo słuchałeś muzyki, dźwięk tej nowej aplikacji też wynosi 80% — co może być o wiele głośniejsze niż komfortowe dla nieoczekiwanego źródła audio.</p>

<p>Jest to szczególnie nieprzyjemne w przypadku:</p>
<ul>
  <li>Aplikacji komunikacyjnych (Slack, Teams) odtwarzających dźwięk startowy</li>
  <li>Aplikacji z tutorialami wideo przy pierwszym uruchomieniu</li>
  <li>Gier, które natychmiast grzmią muzyką z ekranu tytułowego</li>
  <li>Aplikacji przeglądarkowych z autoodtwarzaniem treści</li>
</ul>

<h2>Rozwiązanie: domyślna głośność dla nowych aplikacji</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> ma <strong>konfigurowalną domyślną głośność</strong> dla nowych aplikacji. W ustawieniach określasz, na jakim poziomie głośności nowo wykryte aplikacje powinny startować — na przykład 70%. Za pierwszym razem, gdy jakakolwiek aplikacja uruchomi się i wyprodukuje audio, SoundDial ustawia ją na 70% zamiast 100%.</p>

<img src="/apps/sounddial.png" alt="Ustawienie domyślnej głośności SoundDial — nowe aplikacje startują na skonfigurowanym poziomie zamiast na pełnej głośności" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Oznacza to:</p>
<ul>
  <li>Żadnego niespodziewanego audio na pełnej głośności od nowo zainstalowanych aplikacji</li>
  <li>Każda nowa aplikacja startuje na komfortowym, przewidywalnym poziomie</li>
  <li>Możesz następnie dostosować go w górę lub w dół od domyślnego w razie potrzeby</li>
  <li>Po dostosowaniu funkcja <strong>pamięci głośności</strong> zapamiętuje poziom tej aplikacji na przyszłe uruchomienia</li>
</ul>

<p>To mała funkcja, ale rozwiązuje prawdziwe codzienne irytujące — "niespodziewane uderzenie głośności nowej aplikacji", które wszyscy doświadczają przynajmniej raz.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Pobierz SoundDial z Mac App Store</a> — jednorazowy zakup za €14,99, bez subskrypcji, macOS 14.2+.</p>
`,
  },
  "mac-startup-sound-too-loud": {
    slug: "mac-startup-sound-too-loud",
    title: "Dźwięk startowy Maca zbyt głośny? Jak go wyłączyć lub zmniejszyć",
    description:
      "Dźwięk startowy Maca wybucha na pełnej głośności za każdym razem, gdy restartujesz — szczególnie niekomfortowy podczas spotkań i w cichych pomieszczeniach. Oto jak go wyciszyć lub kontrolować.",
    date: "2026-03-15",
    readTime: "4 min read",
    content: `
<p>Restartujesz Maca w cichym biurze. Sala konferencyjna jest kompletnie cicha. Potem — <em>BONG</em> — dźwięk startowy wybucha na pełnej głośności. Wszyscy patrzą na ciebie. Dźwięk jest kultowy, ale też niekontrolowany i często żenująco głośny.</p>

<h2>Jak wyłączyć dźwięk startowy</h2>

<p>macOS pozwala całkowicie wyłączyć dźwięk startowy:</p>

<ol>
  <li>Przejdź do <strong>Ustawień systemowych → Dźwięk</strong></li>
  <li>Znajdź <strong>"Odtwarzaj dźwięk przy uruchomieniu"</strong></li>
  <li>Odznacz tę opcję</li>
</ol>

<p>Gotowe. Twój Mac będzie od teraz startować w ciszy. Żadnych poleceń Terminala — to ustawienie jest dostępne od macOS Big Sur.</p>

<h3>Metoda przez Terminal (jeśli wolisz)</h3>
<p>Możesz też wyłączyć go przez Terminal:</p>
<p><code>sudo nvram StartupMute=%01</code></p>
<p>Aby ponownie włączyć:</p>
<p><code>sudo nvram StartupMute=%00</code></p>

<h2>Czy można zmniejszyć dźwięk startowy zamiast go wyłączać?</h2>

<p>Nie bezpośrednio. Dźwięk startowy jest odtwarzany na stałej głośności określonej przez głośność systemową w momencie wyłączania. Jeśli twój Mac był na 80% głośności gdy go wyłączałeś, dźwięk startowy gra na mniej więcej 80%. Jeśli był na 20%, dźwięk jest cichszy.</p>

<p><strong>Obejście:</strong> Przed restartem Maca zmniejsz głośność systemową do 10-20%. Dźwięk startowy zagra na tym niższym poziomie. Nie idealne — wymaga pamiętania — ale działa, jeśli chcesz dźwięk startowy na rozsądnej głośności zamiast go całkowicie wyciszać.</p>

<h2>Szerszy problem z kontrolą dźwięku na Macu</h2>

<p>Dźwięk startowy to tylko jeden przykład ograniczonej kontroli audio w macOS. Dźwięki systemowe, dźwięki powiadomień i audio aplikacji są wszystkie mieszane razem z minimalną niezależną kontrolą. Jeśli regularnie dostosowujesz głośność, żeby zarządzać różnymi źródłami audio w ciągu dnia, kontrola głośności dla poszczególnych aplikacji rozwiązuje szerszy problem.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> daje każdej aplikacji na twoim Macu własny suwak głośności. Ustaw aplikacje powiadomień nisko, muzykę na komfortowym poziomie, a rozmowy na pełnej głośności — wszystko niezależnie. Zapisz konfiguracje jako profile i przełączaj jednym kliknięciem.</p>

<img src="/apps/sounddial.png" alt="SoundDial — kontrola głośności dla każdej aplikacji, zarządzanie wszystkimi źródłami audio Mac niezależnie" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Pobierz SoundDial z Mac App Store</a> — jednorazowy zakup za €14,99, bez subskrypcji, macOS 14.2+.</p>
`,
  },
  "webex-volume-too-low-mac": {
    slug: "webex-volume-too-low-mac",
    title: "Cisco Webex zbyt cichy na Macu? Jak to naprawić",
    description:
      "Rozmowy Webex są ledwo słyszalne na Macu. Oto każda poprawka — od ustawień audio Webex do zwiększenia głośności rozmów powyżej 100% za pomocą miksera głośności dla aplikacji.",
    date: "2026-03-18",
    readTime: "5 min read",
    content: `
<p>Webex jest jednym z najczęściej używanych narzędzi do wideokonferencji w środowiskach korporacyjnych — i jednym z najczęściej krytykowanych za jakość audio na Macu. Niska głośność rozmów, przytłumione głosy i audio, które wydaje się cichsze niż Zoom lub Teams przy tej samej głośności systemowej. Jeśli ledwo słyszysz swoje rozmowy Webex, nie jesteś sam.</p>

<h2>1. Sprawdź ustawienia audio Webex</h2>

<p>Podczas spotkania Webex kliknij menu audio (ikona głośnika lub trzy kropki → Ustawienia audio):</p>
<ul>
  <li>Upewnij się, że wybrane jest właściwe urządzenie <strong>Głośnikowe</strong></li>
  <li>Przeciągnij suwak głośności głośnika do maksimum</li>
  <li>Kliknij "Test", aby odtworzyć dźwięk testowy i zweryfikować wyjście</li>
  <li>Sprawdź, czy "Tryb muzyczny" jest włączony — wyłącz go, chyba że konkretnie prezentujesz muzykę</li>
  <li>Sprawdź ustawienia tłumienia szumów — "Usuń szum w tle" na trybie agresywnym może zmniejszyć postrzeganą głośność głosu</li>
</ul>

<h2>2. Sprawdź wyjście macOS</h2>

<p>Ustawienia systemowe → Dźwięk → Wyjście. Zweryfikuj, że wybrane jest właściwe urządzenie i głośność jest na maksimum. Po aktualizacji macOS lub przełączeniu urządzenia Webex może używać nieoczekiwanego wyjścia.</p>

<h2>3. Problem z kodekiem Bluetooth</h2>

<p>Używasz AirPods lub słuchawek Bluetooth? Aktywacja mikrofonu przez Webex wymusza przełączenie kodeków AAC→SCO, zmniejszając jakość i głośność audio. Użyj osobnego mikrofonu (wbudowany mikrofon Mac lub USB) i zachowaj słuchawki Bluetooth tylko jako wyjście.</p>

<h2>4. Specyficzne przetwarzanie audio Webex</h2>

<p>Webex ma agresywne przetwarzanie audio, które może zmniejszyć postrzeganą głośność uczestników rozmowy. Wypróbuj te ustawienia Webex:</p>
<ul>
  <li>Ustaw tłumienie szumów na "Niskie" zamiast "Wysokie"</li>
  <li>Wyłącz "Optymalizuj dla mojego głosu", jeśli jest włączone</li>
  <li>Spróbuj przełączyć z "Audio komputerowe" na określone urządzenie</li>
</ul>

<h2>5. Problem IT/administratora</h2>

<p>W środowiskach korporacyjnych Webex jest często zarządzany przez IT z określonymi politykami audio. Niektóre ustawienia mogą być zablokowane lub wstępnie skonfigurowane. Jeśli podstawowe poprawki nie działają, skontaktuj się z działem IT w sprawie polityk audio Webex.</p>

<h2>6. Wzmocnij Webex powyżej 100%</h2>

<p>Jeśli ustawienia są na maksimum, a uczestnicy nadal są zbyt cicho, <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> pozwala wzmocnić Webex do <strong>200%</strong>. Amplifikuje to audio rozmowy poza wbudowane maksimum Webex — przydatne gdy uczestnik ma słaby mikrofon lub gdy przetwarzanie audio Webex zbyt bardzo redukuje sygnał.</p>

<img src="/apps/sounddial.png" alt="SoundDial zwiększający głośność rozmów Cisco Webex powyżej 100% na macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial pomaga też podczas kolejnych spotkań Webex: użyj automatycznego tłumienia, aby automatycznie obniżyć muzykę w tle gdy każde spotkanie się rozpoczyna, i przywrócić ją podczas przerw. Zapisz profil głośności "Spotkania", aby natychmiast ustawić preferowany balans audio na dzień roboczy.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Pobierz SoundDial z Mac App Store</a> — jednorazowy zakup za €14,99, bez subskrypcji, macOS 14.2+.</p>
`,
  },
  "mac-two-audio-sources-same-time": {
    slug: "mac-two-audio-sources-same-time",
    title: "Jak słuchać dwóch rzeczy jednocześnie na Macu bez szaleństwa",
    description:
      "Muzyka i podcast. Wykład i film z notatkami. Rozmowa i muzyka w tle. macOS zmusza cię do wyboru jednej głośności dla obu — oto jak je zbalansować.",
    date: "2026-03-20",
    readTime: "4 min read",
    content: `
<p>Chcesz słuchać dwóch źródeł audio jednocześnie. Muzyki podczas rozmowy. Podcastu podczas oglądania tutorialu. Ambientu podczas nauki. Dwie rzeczy, dwa różne idealne poziomy głośności. macOS daje ci jeden suwak dla obu.</p>

<p>To fundamentalne ograniczenie audio macOS: każda aplikacja dzieli jedną głośność. Nie możesz powiedzieć "to na 30%, tamto na 80%". Wszystko na jednym poziomie lub nic.</p>

<h2>Kiedy naprawdę potrzebujesz dwóch źródeł audio</h2>

<p>To nie jest przypadek brzegowy. Tak większość ludzi używa swoich komputerów:</p>

<ul>
  <li><strong>Muzyka + rozmowa wideo</strong> — najczęstszy. Muzyka w tle podczas spotkania Zoom, ale wystarczająco cicha, żeby słyszeć współpracowników.</li>
  <li><strong>Wykład + materiał referencyjny</strong> — student oglądający nagrany wykład podczas okazjonalnego oglądania tutorialu YouTube dla kontekstu.</li>
  <li><strong>Podcast + dźwięki otoczenia</strong> — słuchanie podcastu podczas gdy aplikacja z białym szumem lub odgłosami deszczu gra cicho.</li>
  <li><strong>Dwie zakładki przeglądarki</strong> — film szkoleniowy w jednej zakładce i demo w drugiej, na różnych głośnościach.</li>
  <li><strong>Gra + czat głosowy</strong> — audio gry dla immersji, Discord do komunikacji.</li>
</ul>

<p>W każdym przypadku jedno źródło jest "pierwotne" (głośniejsze, ważniejsze), a drugie "wtórne" (cichsze, wspierające). Idealny stosunek jest różny dla każdej kombinacji i zmienia się w ciągu dnia.</p>

<h2>Ograniczenie macOS</h2>

<p>macOS ma jeden suwak głośności. Naciśnij klawisz głośności i wszystko zmienia się równo. Jeśli ustawisz głośność dla komfortowego słuchania podcastu, aplikacja z odgłosami deszczu też jest na tym poziomie — albo zbyt głośna (rozpraszająca), albo nie dostosowałeś jej w jej własnej aplikacji (jeśli w ogóle ma kontrolę głośności).</p>

<p>Niektóre aplikacje mają wewnętrzne suwaki głośności (Spotify, VLC), ale większość nie. I nawet gdy je mają, przełączanie między aplikacjami, aby dostosować dwie osobne kontrole głośności, jest niezgrabne i powolne.</p>

<h2>Rozwiązanie: głośność dla każdej aplikacji w jednym panelu</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> umieszcza każdą aplikację w jednym panelu paska menu z niezależnymi suwakami głośności. Oba źródła audio, obok siebie, każde z własnym poziomem. Dostosuj jedno bez dotykania drugiego.</p>

<img src="/apps/sounddial.png" alt="SoundDial pokazujący dwa źródła audio na różnych poziomach głośności na macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Przykładowe konfiguracje:</p>

<p><strong>Muzyka + rozmowa Zoom:</strong></p>
<ul>
  <li>Zoom: 100% | Spotify: 20%</li>
</ul>

<p><strong>Podcast + odgłosy deszczu:</strong></p>
<ul>
  <li>Aplikacja podcastów: 70% | Aplikacja deszczu: 15%</li>
</ul>

<p><strong>Wykład + tutorial YouTube:</strong></p>
<ul>
  <li>Zoom (wykład): 90% | Chrome (YouTube): 40%</li>
</ul>

<p>Każda kombinacja to inny balans. Zapisz te, których regularnie używasz, jako <strong>profile głośności</strong> i przełączaj jednym kliknięciem. Automatyczne tłumienie obsługuje scenariusz muzyki+rozmowy automatycznie — gdy rozmowa startuje, muzyka opada do skonfigurowanego poziomu bez dotykania czegokolwiek.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Pobierz SoundDial z Mac App Store</a> — jednorazowy zakup za €14,99, bez subskrypcji, macOS 14.2+.</p>
`,
  },
  "watch-movies-mac-late-night-volume": {
    slug: "watch-movies-mac-late-night-volume",
    title: "Jak oglądać filmy na Macu bez budzenia wszystkich",
    description:
      "Dialog niesłyszalny, a potem eksplozje trzęsą ścianami. Oto jak ujarzmić audio filmowe do nocnego oglądania na Macu — bez przegapiania słowa.",
    date: "2026-03-22",
    readTime: "5 min read",
    content: `
<p>Jest godzina 1 w nocy. Oglądasz film na MacBooku w łóżku. Postacie szepczą — podkręcasz głośność. Potem startuje pościg samochodowy i nagle cały twój apartament słyszy to wszystko. Rzucasz się do klawisza głośności. Ten cykl powtarza się przez dwie godziny.</p>

<p>Problem to <strong>zakres dynamiczny</strong> — różnica między najciszejszymi i najgłośniejszymi momentami filmu. W kinie z potężnym systemem nagłośnienia ten zakres tworzy wciągające doświadczenie. Na MacBooku o północy tworzy ciągłą walkę między "nie słyszę dialogu" a "budzę sąsiadów".</p>

<h2>Dlaczego filmy są głośniejsze niż muzyka lub podcasty</h2>

<p>Muzyka jest zazwyczaj masterowana z kompresją zakresu dynamicznego — różnica między najciszejszymi i najgłośniejszymi częściami jest stosunkowo mała (może 10-15 dB). Podcasty są jeszcze bardziej skompresowane. Filmy, szczególnie akcji, mogą mieć zakres dynamiczny <strong>30-40 dB</strong> — ciche części są szeptem, a głośne są zaprojektowane tak, żeby trzęsły fotelami kinowymi.</p>

<p>Gdy ustawiasz głośność MacBooka, żeby słyszeć dialog, sceny akcji są 100 razy głośniejsze pod względem ciśnienia akustycznego. Nie ma komfortowej głośności systemowej, która działa dla obu.</p>

<h2>Poprawka 1: Użyj trybu nocnego serwisu streamingowego</h2>

<p>Niektóre serwisy streamingowe mają funkcję kompresji zakresu dynamicznego specjalnie do tego:</p>
<ul>
  <li><strong>Netflix:</strong> Poszukaj przełącznika "Zmniejsz głośne dźwięki" w ustawieniach audio podczas odtwarzania</li>
  <li><strong>Apple TV+:</strong> Ustawienia systemowe → Dostępność → "Zmniejsz głośne dźwięki"</li>
  <li><strong>Amazon Prime:</strong> "Dialog Boost" na obsługiwanych tytułach</li>
  <li><strong>Disney+:</strong> Brak odpowiedniej funkcji obecnie</li>
</ul>

<p>Te funkcje kompresują zakres dynamiczny, więc ciche części są głośniejsze, a głośne cichsze. Wynik to bardziej równomierne audio, które działa przy niskich głośnościach.</p>

<h2>Poprawka 2: Użyj słuchawek</h2>

<p>Słuchawki rozwiązują część "budzenia wszystkich" — twoje audio jest prywatne. Ale nie rozwiązują problemu zakresu dynamicznego. Cykl dialog-eksplozja nadal się zdarza, tylko w twoich uszach. Tu pomaga kontrola głośności dla poszczególnych aplikacji: ustaw głośność aplikacji streamingowej precyzyjnie dla słuchania przez słuchawki.</p>

<h2>Poprawka 3: Ustaw aplikację streamingową na określoną głośność</h2>

<p>Prawdziwym problemem dla nocnego oglądania jest to, że twoja aplikacja streamingowa, dźwięki powiadomień i inne audio są wszystkie na tej samej głośności systemowej. Ping Slack o 2 w nocy na tej samej głośności co dialog filmowy to niespodzianka na poziomie ataku serca.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> pozwala stworzyć idealną konfigurację na noc:</p>

<img src="/apps/sounddial.png" alt="SoundDial — nocna konfiguracja filmowa z umiarkowaną głośnością streamingu i wyciszonymi powiadomieniami" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Nocny profil filmowy</h3>
<ul>
  <li><strong>Netflix / Apple TV / Disney+ / przeglądarka:</strong> 40-50% — komfortowy poziom dialogu bez ogłuszających scen akcji</li>
  <li><strong>Slack:</strong> wyciszony — żadnych niespodziewanych pingów</li>
  <li><strong>Mail:</strong> wyciszony</li>
  <li><strong>iMessage:</strong> wyciszony</li>
  <li><strong>Dźwięki systemowe:</strong> wyciszone</li>
</ul>

<p>Zapisz to jako profil "Noc". Gdy zaczynasz nocny film, zastosuj profil jednym kliknięciem. Każde źródło powiadomień jest wyciszone, a twoja aplikacja streamingowa jest na kontrolowanej głośności. Gdy skończysz, wróć do profilu dziennego.</p>

<p>Połącz to z funkcją "Zmniejsz głośne dźwięki" serwisu streamingowego dla maksymalnego efektu: serwis kompresuje zakres dynamiczny, a SoundDial zapewnia, że nic innego na twoim Macu nie wydaje dźwięku.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Pobierz SoundDial z Mac App Store</a> — jednorazowy zakup za €14,99, bez subskrypcji, macOS 14.2+.</p>
`,
  },
  "mac-volume-resets-after-sleep": {
    slug: "mac-volume-resets-after-sleep",
    title: "Głośność Maca resetuje się po uśpieniu? Jak zachować ustawienia audio",
    description:
      "Za każdym razem gdy Mac budzi się ze snu, głośność jest zła — zresetowana do maksimum, zerowa lub przełączona na złe wyjście. Oto dlaczego i jak to naprawić.",
    date: "2026-03-25",
    readTime: "5 min read",
    content: `
<p>Zamykasz pokrywę MacBooka. Otwierasz ją później. Głośność jest inna. Może jest na maksimum, gdy miałeś ją na 40%. Może przełączyła się ze słuchawek na głośniki. Może wynosi zero. Przed snem było dobrze — teraz jest źle.</p>

<p>Resetowanie głośności po uśpieniu to trwały błąd macOS, który pojawia się w różnych formach w różnych wersjach macOS. Oto co go powoduje i jak sobie z tym radzić.</p>

<h2>Dlaczego to się dzieje</h2>

<h3>1. Urządzenie wyjścia audio zmieniło się podczas snu</h3>
<p>Jeśli miałeś podłączone słuchawki Bluetooth przed snem i rozłączyły się podczas snu Maca (bateria wyczerpana, wyjście poza zasięg), macOS przełącza się na wbudowane głośniki przy budzeniu. Ponieważ macOS zapamiętuje głośność dla każdego urządzenia, głośność zmienia się do tego, co było ostatnio ustawione dla głośników — co może być bardzo inne od głośności słuchawek.</p>

<h3>2. Restart demona Core Audio</h3>
<p>Demon audio macOS (coreaudiod) czasami restartuje się podczas cykli uśpienia/budzenia. Przy restarcie może inicjalizować się z domyślnymi poziomami głośności zamiast ostatnich ustawień. To błąd systemowy, który Apple częściowo naprawił w różnych aktualizacjach, ale nigdy całkowicie nie wyeliminował.</p>

<h3>3. Ponowne podłączenie HDMI/DisplayPort</h3>
<p>Jeśli używasz zewnętrznego wyświetlacza przez HDMI lub DisplayPort, zamknięcie i otwarcie pokrywy może spowodować rozłączenie i ponowne podłączenie wyświetlacza. Niektóre wyświetlacze są też urządzeniami wyjścia audio, a macOS może przełączać się do lub z głośników wyświetlacza podczas tego procesu.</p>

<h3>4. Ponowne parowanie Bluetooth</h3>
<p>Gdy urządzenia Bluetooth ponownie się łączą po uśpieniu, negocjacja głośności może skutkować innym poziomem niż przed snem. Jest to szczególnie powszechne z zewnętrznymi słuchawkami Bluetooth (mniej z AirPods, które Apple zoptymalizował).</p>

<h2>Poprawki</h2>

<h3>Zapobiegaj rozłączaniu Bluetooth podczas snu</h3>
<p>Ustawienia systemowe → Bluetooth → Zaawansowane (lub kliknij "i" na urządzeniu). Niektóre ustawienia kontrolują, czy Bluetooth pozostaje aktywny podczas snu. Utrzymywanie połączenia aktywnym zapobiega cyklowi rozłącz/ponownie połącz, który resetuje głośność.</p>

<h3>Wyłącz automatyczne przełączanie dla AirPods</h3>
<p>Ustawienia systemowe → Bluetooth → kliknij "i" obok AirPods → "Połącz z tym Makiem" → ustaw na "Gdy ostatnio połączono z tym Makiem". Zapobiega to automatycznemu łączeniu AirPods z innego urządzenia podczas snu.</p>

<h3>Ustaw stałe urządzenie wyjścia</h3>
<p>Po budzeniu ze snu przytrzymaj Option i kliknij ikonę Dźwięku na pasku menu. Wybierz preferowane urządzenie wyjścia. Rób to konsekwentnie, a macOS powinien w końcu "przykleić się" do twojej preferencji.</p>

<h3>Resetuj NVRAM (Macy Intel)</h3>
<p>Jeśli resetowanie głośności jest chroniczne, zresetuj NVRAM: wyłącz → włącz trzymając Option+Command+P+R przez 20 sekund. Czyści to przechowywane ustawienia audio i może naprawić trwałe problemy z głośnością.</p>

<h2>Chroń balans audio z SoundDial</h2>

<p>Nawet jeśli głośność systemowa resetuje się po uśpieniu, <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> chroni twój <em>balans</em> głośności dla poszczególnych aplikacji. Jego funkcja <strong>pamięci głośności</strong> zapisuje głośność każdej aplikacji niezależnie i przywraca ją po budzeniu, restarcie lub ponownym uruchomieniu aplikacji.</p>

<img src="/apps/sounddial.png" alt="SoundDial zachowujący poziomy głośności dla poszczególnych aplikacji po cyklach uśpienia i budzenia Maca" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Więc nawet jeśli macOS resetuje głośność systemową do 80% po uśpieniu, twój balans dla poszczególnych aplikacji pozostaje nienaruszony:</p>
<ul>
  <li>Spotify nadal na 30% głośności systemowej</li>
  <li>Zoom nadal na 100%</li>
  <li>Slack nadal wyciszony</li>
</ul>

<p>Może być konieczne naprawienie głośności systemowej (jedno dostosowanie), ale nie musisz ponownie balansować wszystkich aplikacji (co byłoby sześć lub siedem dostosowań). A z <strong>profilami głośności</strong> nawet pełne przywrócenie to jedno kliknięcie.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Pobierz SoundDial z Mac App Store</a> — jednorazowy zakup za €14,99, bez subskrypcji, macOS 14.2+.</p>
`,
  },
  "mac-audio-music-production-daw": {
    slug: "mac-audio-music-production-daw",
    title: "Audio Mac do produkcji muzycznej: niezależna kontrola DAW i komunikacji",
    description:
      "Używasz Logic Pro lub Abletona podczas rozmowy na Discord? Oto jak słyszeć DAW z pełną wernością, zachowując czat głosowy na komfortowym poziomie.",
    date: "2026-03-28",
    readTime: "5 min read",
    content: `
<p>Produkujesz muzykę w Logic Pro (lub Ableton, lub FL Studio). Jesteś też na Discord ze współpracownikiem. Problem: wyjście DAW i Discord walczą o ten sam poziom głośności. Podkręć Logic, żeby wyraźnie słyszeć swój miks, a Discord ryczy w uszach. Zmniejsz dla Discord i twój miks jest zbyt cichy do właściwej oceny.</p>

<p>To prawdziwy problem dla producentów muzycznych na Macu, ponieważ poziom monitorowania bezpośrednio wpływa na decyzje miksowania. Jeśli twój DAW jest zbyt cichy przez Discord, będziesz miksować głośniej niż zamierzasz. Jeśli Discord zagłusza detale, przegapisz problemy w miksie.</p>

<h2>Dlaczego to ma znaczenie dla produkcji</h2>

<p>Produkcja muzyczna wymaga <strong>dokładnych poziomów monitorowania</strong>. Musisz słyszeć swój DAW na stałym, skalibrowanym poziomie głośności, żeby podejmować wiarygodne decyzje miksowania. Aplikacje komunikacyjne, powiadomienia i inne źródła audio zakłócają to — ale często musisz je uruchamiać jednocześnie do zdalnej współpracy.</p>

<p>Profesjonalne studia rozwiązują to oddzielnymi ścieżkami monitorowania i systemami talkback. Na laptopie potrzebujesz oprogramowania.</p>

<h2>Wewnętrzne podejście DAW</h2>

<p>Możesz użyć wewnętrznego poziomu monitorowania DAW, żeby zachować stałe wyjście, a następnie dostosować wewnętrznie głośność Discord. Ale:</p>
<ul>
  <li>Suwak głośności wyjścia Discord jest nieprecyzyjny i ograniczony do 0-100%</li>
  <li>Nadal nie możesz zapobiec zakłóceniom dźwięków systemowych i powiadomień na nieoczekiwanych poziomach</li>
  <li>Jeśli potrzebujesz odsłuchać ścieżkę w Spotify lub YouTube, te też są na głośności systemowej</li>
</ul>

<h2>Głośność dla każdej aplikacji do produkcji</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> pozwala ustawić dokładne głośności dla każdej aplikacji niezależnie:</p>

<img src="/apps/sounddial.png" alt="SoundDial oddzielający wyjście DAW od Discord i ścieżek referencyjnych na macOS do produkcji muzycznej" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Konfiguracja produkcyjna</h3>
<ul>
  <li><strong>Logic Pro / Ableton:</strong> 80-100% — twój podstawowy poziom monitorowania</li>
  <li><strong>Discord / czat głosowy:</strong> 40-60% — słyszalny, ale wyraźnie wtórny do twojego miksu</li>
  <li><strong>Spotify / ścieżki referencyjne:</strong> 80% — dopasuj poziom DAW do dokładnych porównań A/B</li>
  <li><strong>Slack / powiadomienia:</strong> wyciszone — zero zakłóceń podczas produkcji</li>
  <li><strong>Safari / Chrome:</strong> 50% — do oglądania tutoriali bez niszczenia słuchu</li>
</ul>

<h3>Zapisz jako profil "Produkcja"</h3>
<p>Zapisz tę konfigurację i zastosuj jednym kliknięciem gdy siadasz do produkcji. Gdy skończyłeś i przełączasz się do zwykłego użytkowania, zastosuj profil "Normalny". Żadnego ponownego dostosowywania ośmiu aplikacji.</p>

<h3>Automatyczne tłumienie do sesji zdalnych</h3>
<p>Jeśli jesteś na rozmowie ze współpracownikiem, automatyczne tłumienie SoundDial może obniżyć aplikacje niekomunikacyjne gdy mikrofon jest aktywny. Ale do produkcji możesz chcieć <em>wyłączyć</em> automatyczne tłumienie — potrzebujesz DAW na stałych poziomach niezależnie od tego, czy mówisz. Przełącznik to jedno kliknięcie w ustawieniach.</p>

<h2>Uwaga o latencji</h2>

<p>SoundDial używa API Core Audio Tap Apple do kontroli głośności. Przetwarzanie dodaje nieistotną latencję — niezauważalną do celów monitorowania. Jeśli nagrywasz i monitorujesz przez DAW z włączonym bezpośrednim monitorowaniem, SoundDial nie zakłóca ścieżki audio DAW. Dostosowuje tylko poziom wyjścia docierający do twoich głośników/słuchawek.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Pobierz SoundDial z Mac App Store</a> — jednorazowy zakup za €14,99, bez subskrypcji, macOS 14.2+.</p>
`,
  },
  "apple-music-volume-too-low-mac": {
    slug: "apple-music-volume-too-low-mac",
    title: "Apple Music zbyt cicha na Macu? Jak naprawić i wzmocnić dźwięk",
    description:
      "Apple Music na maksimum głośności na Macu, a nadal zbyt cicha? Sprawdź Sound Check, ustawienia EQ i naucz się wzmacniać Apple Music powyżej 100%.",
    date: "2026-03-30",
    readTime: "5 min read",
    content: `
<p>Apple Music jest na pełnej głośności. Twój Mac jest na pełnej głośności. Piosenka, która powinna brzmieć głośno, jest ledwo słyszalna. Tymczasem przełączając się na Spotify — ta sama piosenka, ta sama głośność — jest zauważalnie głośniejsza. Co się dzieje?</p>

<p>Apple Music ma kilka ustawień, które mogą zmniejszyć głośność odtwarzania, i nie są one oczywiste. Omówmy każde z nich.</p>

<h2>1. Sprawdź Sound Check</h2>

<p>Apple Music ma funkcję o nazwie <strong>Sound Check</strong>, która normalizuje głośność wszystkich ścieżek, żeby odtwarzały się na mniej więcej tym samym postrzeganym poziomie głośności. Zapobiega to gwałtownym skokom głośności między piosenkami, ale robi to przez <em>zmniejszanie</em> głośności głośniejszych ścieżek — sprawiając, że wszystko jest cichsze ogólnie.</p>

<p>Aby sprawdzić: Otwórz aplikację Muzyka → Ustawienia (⌘,) → Odtwarzanie → <strong>Sound Check</strong>.</p>

<p>Jeśli Sound Check jest włączony, spróbuj go wyłączyć. Piosenki, które były redukowane dopasowując się do cichszych ścieżek, będą teraz odtwarzane na oryginalnym masterowanym poziomie — który jest często znacznie głośniejszy.</p>

<h2>2. Sprawdź ustawienie EQ</h2>

<p>Apple Music ma wbudowany korektor graficzny. Niektóre ustawienia EQ zmniejszają ogólną głośność, żeby zapobiec przesterowaniu przy wzmacnianiu określonych częstotliwości.</p>

<p>Sprawdź: Aplikacja Muzyka → Ustawienia → Odtwarzanie → <strong>EQ</strong>. Jeśli wybrane jest ustawienie EQ (szczególnie "Słowo mówione", "Późna noc" lub "Małe głośniki"), spróbuj ustawić na "Wyłączone" i sprawdź, czy głośność się poprawi.</p>

<p>EQ "Późna noc" w szczególności kompresuje zakres dynamiczny — sprawiając, że ciche części są głośniejsze, a głośne cichsze. Może to sprawić, że wszystko brzmi "płasko" i cichej w głośności.</p>

<h2>3. Sprawdź ustawienia Lossless Audio</h2>

<p>Jeśli masz włączone Apple Music Lossless (Ustawienia → Jakość audio), strumień wyższej jakości może faktycznie być na niższym postrzeganym poziomie głośności niż standardowy strumień AAC dla niektórych ścieżek. Dzieje się tak, ponieważ lossless nie ma tych samych regulacji masterowania, które Apple stosuje do wersji AAC.</p>

<p>Spróbuj tymczasowo przełączyć na jakość AAC, żeby sprawdzić, czy różnica głośności jest zauważalna.</p>

<h2>4. Bezpieczeństwo słuchawek</h2>

<p>Ustawienia systemowe → Dźwięk → Bezpieczeństwo słuchawek. Jeśli "Zmniejsz głośne audio" jest włączone, macOS globalnie ogranicza głośność słuchawek — wpływając na Apple Music wraz ze wszystkim innym.</p>

<h2>5. Wzmocnij Apple Music powyżej 100%</h2>

<p>Jeśli sprawdziłeś wszystko i Apple Music nadal jest zbyt cicha — czy to przez agresywny Sound Check, cichą płytę, czy głośniki MacBooka po prostu niewystarczająco głośne — wzmocnienie głośności dla poszczególnych aplikacji rozwiązuje problem.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> pozwala wzmocnić Apple Music do <strong>200%</strong>. Sygnał audio jest amplifikowany na poziomie systemowym przed dotarciem do głośników lub słuchawek. Tylko Apple Music staje się głośniejsza — Zoom, Slack i przeglądarka pozostają na swoich aktualnych poziomach.</p>

<img src="/apps/sounddial.png" alt="SoundDial zwiększający głośność Apple Music powyżej 100% na macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Jest to też przydatne dla odwrotnego problemu: jeśli Apple Music jest zbyt głośna w stosunku do rozmowy Zoom, zmniejsz Apple Music do 25% w SoundDial zachowując Zoom na 100%. Kontrola dla każdej aplikacji oznacza, że nigdy nie musisz kompromitować głośności jednej aplikacji dla drugiej.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Pobierz SoundDial z Mac App Store</a> — jednorazowy zakup za €14,99, bez subskrypcji, macOS 14.2+.</p>
`,
  },
  "free-volume-mixer-mac": {
    slug: "free-volume-mixer-mac",
    title: "Darmowy mikser głośności dla Maca: co naprawdę dostajesz (i czego nie)",
    description:
      "Szukasz darmowego miksera głośności dla poszczególnych aplikacji na Macu? Oto uczciwe omówienie tego, co oferują darmowe opcje, czego brakuje, i kiedy warto płacić.",
    date: "2026-04-03",
    readTime: "6 min read",
    content: `
<p>Jeśli szukasz "darmowy mikser głośności dla Mac", znajdziesz jeden główny wynik: <strong>Background Music</strong>. To jedyna znana darmowa, open-source'owa aplikacja kontroli głośności dla poszczególnych aplikacji na macOS. Przyjrzyjmy się, co naprawdę dostajesz — i co oddajesz.</p>

<h2>Background Music: darmowa opcja</h2>

<p>Background Music to darmowa, open-source'owa aplikacja dostępna na GitHub. Daje ci:</p>

<ul>
  <li><strong>Suwaki głośności dla poszczególnych aplikacji</strong> — podstawowa kontrola głośności dla każdej uruchomionej aplikacji</li>
  <li><strong>Automatyczne zatrzymywanie muzyki</strong> — zatrzymuje odtwarzacz muzyki gdy inna aplikacja odtwarza audio, wznawia gdy się zatrzyma</li>
  <li><strong>Ustawienie domyślnego urządzenia wyjścia</strong> — nadpisanie urządzenia używanego przez aplikacje domyślnie</li>
</ul>

<h3>Czego Background Music nie ma</h3>
<ul>
  <li><strong>Brak wzmocnienia powyżej 100%</strong> — suwaki od 0% do 100% tylko. Nie można amplifikować cichych aplikacji.</li>
  <li><strong>Brak profili głośności</strong> — nie można zapisywać i przełączać między konfiguracjami</li>
  <li><strong>Brak automatycznego tłumienia</strong> — automatyczne zatrzymywanie to nie to samo co automatyczne tłumienie. Pauza całkowicie zatrzymuje muzykę; tłumienie obniża ją do komfortowego poziomu tła.</li>
  <li><strong>Brak pamięci głośności</strong> — nie zapamiętuje głośności dla poszczególnych aplikacji między restartami</li>
  <li><strong>Brak skrótów klawiszowych</strong> — bez hotkeya do przełączania miksera lub wyciszania wszystkich aplikacji</li>
  <li><strong>Brak przełączania urządzenia wyjścia</strong> — nie można przełączać głośników/słuchawek z tego samego panelu</li>
</ul>

<h3>Problem z niezawodnością</h3>
<p>Największym problemem Background Music nie są funkcje — to stabilność. Działa przez instalację <strong>wirtualnego sterownika urządzenia audio</strong>, i ten sterownik się psuje. Regularnie.</p>
<ul>
  <li>Wirtualne urządzenie nie instaluje się</li>
  <li>Trzeszczące i glitchujące audio</li>
  <li>Aplikacje nie są wykrywane</li>
  <li>Całkowity brak wyjścia audio</li>
  <li>Awaria aplikacji przy uruchomieniu</li>
</ul>

<p>Ponieważ jest to projekt open-source utrzymywany przez wolontariuszy, poprawki nie zawsze są terminowe. Możesz być bez kontroli głośności dla poszczególnych aplikacji przez tygodnie po aktualizacji macOS.</p>

<h2>Inne "darmowe" opcje</h2>

<h3>eqMac (poziom darmowy)</h3>
<p>Darmowy poziom eqMac zapewnia systemowy korektor graficzny, ale nie kontrolę głośności dla poszczególnych aplikacji. Funkcje dla poszczególnych aplikacji wymagają eqMac Pro (subskrypcja). Darmowa wersja jest przydatna, jeśli głównie potrzebujesz EQ, nie miksowania głośności.</p>

<h3>macOS wbudowany</h3>
<p>macOS nie ma wbudowanego miksera głośności. Najbliższe jest to suwak głośności alertu w Ustawieniach systemowych → Dźwięk, który wpływa tylko na dźwięki systemowe — nie na audio aplikacji.</p>

<h2>Kiedy darmowe wystarczy</h2>

<p>Background Music może być w porządku, jeśli:</p>
<ul>
  <li>Potrzebujesz tylko podstawowej głośności dla poszczególnych aplikacji (0-100%)</li>
  <li>Nie potrzebujesz profili, automatycznego tłumienia ani wzmocnienia głośności</li>
  <li>Jesteś komfortowy z naprawianiem tego po aktualizacjach macOS</li>
  <li>Akceptujesz wirtualne urządzenie audio w swojej ścieżce audio</li>
</ul>

<h2>Kiedy warto płacić</h2>

<p>Płatny mikser głośności jest wart tego, jeśli potrzebujesz:</p>
<ul>
  <li><strong>Niezawodności</strong> — działa po aktualizacjach macOS bez czekania na wolontariackie poprawki</li>
  <li><strong>Wzmocnienia głośności do 200%</strong> — amplifikacja cichych aplikacji powyżej ich wbudowanego maksimum</li>
  <li><strong>Profili</strong> — zapisuj konfiguracje i przełączaj między Spotkaniami/Skupieniem/Grami jednym kliknięciem</li>
  <li><strong>Automatycznego tłumienia</strong> — automatyczna redukcja głośności podczas rozmów, nie tylko auto-pauza</li>
  <li><strong>Bez sterowników systemowych</strong> — działa z natywnym API Apple, bez wirtualnych urządzeń audio, które mogą się psuć</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> kosztuje €14,99 — jednorazowo, nie subskrypcja. Dla kontekstu, to mniej niż dwa miesiące subskrypcji Spotify, za narzędzie, którego będziesz używać każdego dnia. To mniej niż połowa ceny SoundSource ($39), i zawiera funkcje (profile, automatyczne tłumienie), których SoundSource nie ma.</p>

<img src="/apps/sounddial.png" alt="SoundDial — niezawodny mikser głośności dla Maca z profilami, automatycznym tłumieniem i wzmocnieniem 200%" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Dostępny w <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — przeglądany przez Apple, w piaskownicy, bez sterowników systemowych. Jednorazowy zakup €14,99, bez subskrypcji, macOS 14.2+.</p>
`,
  },
  "balance-music-voice-chat-volume-mac": {
    slug: "balance-music-voice-chat-volume-mac",
    title: "Jak zbalansować muzykę i głośność czatu głosowego na Macu",
    description:
      "Muzyka jest zbyt głośna na Discord. Albo rozmowa jest zbyt cicha pod Spotify. macOS nie pozwala ich zbalansować — oto jak ustawić idealny stosunek.",
    date: "2026-04-05",
    readTime: "4 min read",
    content: `
<p>Chcesz słuchać muzyki podczas rozmowy ze znajomymi na Discord (lub Zoom, lub FaceTime). Muzyka musi być obecna, ale nie przytłaczająca. Czat głosowy musi być wyraźny i dominujący. Proste żądanie. macOS czyni je niemożliwym.</p>

<p>Z jedną głośnością systemową kontrolującą wszystko, jesteś uwięziony: podkręć dla rozmowy i muzyka jest zbyt głośna. Zmniejsz dla muzyki i nie słyszysz znajomych. Nie ma wbudowanego sposobu na ustawienie tych dwóch rzeczy na różnych poziomach.</p>

<h2>Obejście z wewnętrzną głośnością aplikacji</h2>

<p>Zarówno Spotify jak i Discord mają wewnętrzne suwaki głośności. Teoretycznie możesz zmniejszyć suwak Spotify do 30% i zachować wyjście Discord na 100%. To tworzy stosunek 30/100.</p>

<p>W praktyce:</p>
<ul>
  <li>Musisz przełączać się do każdej aplikacji, żeby dostosować jej suwak</li>
  <li>Stosunek zmienia się gdy dostosowujesz głośność systemową (oba skalują się proporcjonalnie)</li>
  <li>Nie każda aplikacja ma wewnętrzny suwak głośności</li>
  <li>Jest nieprecyzyjny — mały suwak Spotify, brak wyświetlanego procentu</li>
  <li>Jeśli zamkniesz i ponownie otworzysz Spotify, suwak może się zresetować</li>
</ul>

<h2>Prawdziwa poprawka: niezależna głośność dla każdej aplikacji</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> umieszcza zarówno Spotify jak i Discord w tym samym panelu z niezależnymi suwakami głośności. Ustaw stosunek, który chcesz i zostaw go:</p>

<img src="/apps/sounddial.png" alt="SoundDial balansujący Spotify i Discord na różnych poziomach głośności na macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Złoty stosunek dla muzyki + czat głosowy</h3>
<p>Na podstawie tego, jak większość ludzi tego używa:</p>
<ul>
  <li><strong>Czat głosowy na 85-100%</strong> — zawsze wyraźnie słyszalny, dominujący w miksie</li>
  <li><strong>Muzyka na 20-35%</strong> — obecna, ale nigdy nie konkurująca z głosami</li>
</ul>

<p>Dokładny stosunek zależy od muzyki, słuchawek i osobistych preferencji. Chodzi o to, że możesz znaleźć idealny balans raz i zachować go — zamiast ciągłego dostosowywania.</p>

<h3>Zapisz jako profil</h3>
<p>Zapisz swój balans muzyki/czatu głosowego jako profil. Profil "Gaming": Discord 100%, gra 50%, Spotify 20%. Profil "Chill": Discord 70%, Spotify 60%. Przełączaj się między nimi jednym kliknięciem.</p>

<h3>Automatyczne tłumienie dla rozmów</h3>
<p>Jeśli słuchasz muzyki i przychodzi rozmowa, automatyczne tłumienie SoundDial automatycznie obniża muzykę do skonfigurowanego poziomu. Gdy rozmowa się kończy, muzyka wraca. Bez dotykania czegokolwiek.</p>

<p>Problem z balansem audio to coś, z czym boryka się każdy użytkownik Maca w momencie, gdy ma muzykę i rozmowę uruchomione jednocześnie. To jednorazowa poprawka za €14,99.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Pobierz SoundDial z Mac App Store</a> — jednorazowy zakup za €14,99, bez subskrypcji, macOS 14.2+.</p>
`,
  },
  "mac-volume-control-complete-guide": {
    slug: "mac-volume-control-complete-guide",
    title: "Kontrola głośności na Macu: kompletny przewodnik (2026)",
    description:
      "Wszystko, co musisz wiedzieć o kontrolowaniu audio na macOS — od podstawowych skrótów klawiszowych po głośność dla poszczególnych aplikacji, przełączanie wyjścia i automatyzację.",
    date: "2026-06-12",
    readTime: "12 min read",
    content: `
<p>macOS daje ci suwak głośności i przycisk wyciszenia. To cały zakres wbudowanej kontroli audio Apple. Ale twój Mac ma w rzeczywistości o wiele więcej możliwości audio niż sugeruje powierzchnia — ukryte skróty klawiszowe, narzędzia do głośności dla poszczególnych aplikacji, zarządzanie urządzeniami wyjścia i funkcje automatyzacji, których większość użytkowników nigdy nie odkrywa.</p>

<p>To jest kompletny przewodnik po kontrolowaniu audio na Macu. Od podstaw po funkcje zaawansowanych użytkowników, wszystko w jednym miejscu.</p>

<h2>Część 1: Wbudowane kontrolki głośności</h2>

<h3>Klawisze głośności</h3>
<p>Klawisze zwiększania (F12), zmniejszania (F11) i wyciszania (F10) głośności dostosowują głośność systemową w 16 krokach. Każdy krok to około 6,25% całkowitego zakresu. Bieżąca głośność jest wyświetlana jako nakładka na ekranie.</p>

<h3>Precyzyjna głośność: Option + Shift</h3>
<p>Przytrzymaj <strong>Option + Shift</strong> i naciśnij klawisze zwiększania/zmniejszania głośności. Każde naciśnięcie dostosowuje o jedną czwartą normalnego kroku — dając ci <strong>64 poziomy głośności</strong> zamiast 16. Niezbędne do znalezienia idealnej głośności słuchawek gdy normalne kroki są zbyt grube.</p>

<h3>Ciche dostosowywanie głośności: Shift</h3>
<p>Przytrzymaj <strong>Shift</strong> i naciśnij klawisze zwiększania/zmniejszania głośności. Głośność zmienia się bez słyszalnego "pop" zwrotnego. Używaj tego podczas dostosowywania głośności podczas rozmowy lub prezentacji.</p>

<h3>Suwak głośności na pasku menu</h3>
<p>Jeśli ikona Dźwięku jest na pasku menu (włącz ją w Ustawieniach systemowych → Centrum sterowania → Dźwięk → Zawsze pokazuj na pasku menu), kliknięcie jej pokazuje suwak głośności. To jest ciągły suwak, nie stopniowy jak klawisze klawiatury, więc możesz ustawić dowolny precyzyjny poziom.</p>

<h3>Centrum sterowania</h3>
<p>Kliknij ikonę Centrum sterowania (ikona dwóch przełączników) na pasku menu → kliknij sekcję Dźwięku dla suwaka głośności i szybkiego dostępu do wyboru urządzenia wyjścia.</p>

<h2>Część 2: Zarządzanie urządzeniami wyjścia</h2>

<h3>Przełączanie urządzeń wyjścia</h3>
<p>Najszybsza wbudowana metoda: przytrzymaj <strong>Option</strong> i kliknij ikonę Dźwięku na pasku menu. Zobaczysz listę wszystkich dostępnych urządzeń wyjścia i wejścia. Kliknij jedno, aby natychmiast przełączyć.</p>

<h3>Zarządzanie urządzeniami Bluetooth</h3>
<p>macOS zapamiętuje poziom głośności oddzielnie dla każdego urządzenia wyjścia. Gdy przełączasz się z głośników (przy 70%) na AirPods (przy 40%), głośność dostosowuje się do tego, co było ostatnio używane z tym urządzeniem.</p>

<h3>Agreguj i urządzenia wielowyjściowe</h3>
<p>Dla zaawansowanych konfiguracji otwórz Konfiguracja Audio MIDI (Aplikacje → Narzędzia), aby tworzyć urządzenia agregowane (łączenie wielu wejść) lub urządzenia wielowyjściowe (wysyłanie audio do wielu wyjść jednocześnie).</p>

<h2>Część 3: Głośność alertów i powiadomień</h2>

<h3>Głośność alertów systemowych</h3>
<p>macOS ma oddzielny suwak głośności alertu: Ustawienia systemowe → Dźwięk → Głośność alertu. Kontroluje to głośność dźwięków systemowych (Funk, Tink, Butelka, itp.) niezależnie od głównej głośności. Jednak wpływa to tylko na alerty macOS — nie na dźwięki powiadomień z aplikacji zewnętrznych jak Slack, Discord lub Teams.</p>

<h3>Zarządzanie dźwiękami powiadomień</h3>
<p>Przejdź do Ustawień systemowych → Powiadomienia. Dla każdej aplikacji możesz przełączyć "Odtwarzaj dźwięk dla powiadomień" włącz lub wyłącz. To jest binarne — nie możesz sprawić, że powiadomienia aplikacji będą cichsze, tylko w pełni włączone lub w pełni wyłączone.</p>

<h2>Część 4: Kontrolki specyficzne dla słuchawek</h2>

<h3>Bezpieczeństwo słuchawek</h3>
<p>Ustawienia systemowe → Dźwięk → Bezpieczeństwo słuchawek. "Zmniejsz głośne audio" ogranicza głośność słuchawek na podstawie skumulowanej ekspozycji. Możesz to wyłączyć lub dostosować próg.</p>

<h3>Spatial Audio</h3>
<p>Dla obsługiwanych słuchawek (AirPods Pro, AirPods Max, niektóre Beats), macOS obsługuje Spatial Audio ze śledzeniem głowy.</p>

<h3>Balans audio</h3>
<p>Ustawienia systemowe → Dostępność → Audio → Balans. Suwak lewo-prawo dostosowujący balans stereo. Upewnij się, że jest wyśrodkowany, jeśli jedna strona brzmi ciszej od drugiej.</p>

<h2>Część 5: Czego macOS nie może zrobić (i jak to naprawić)</h2>

<h3>Kontrola głośności dla poszczególnych aplikacji</h3>
<p>macOS ma jeden suwak głośności dla wszystkich aplikacji. Nie ma wbudowanego sposobu na ustawienie Spotify na 30% i Zoom na 100%.</p>

<h3>Wzmocnienie głośności powyżej 100%</h3>
<p>Głośność macOS kończy się na 100%. Jeśli treść jest zbyt cicha nawet przy maksymalnej głośności, nie ma wbudowanego sposobu na dalsze amplifikowanie.</p>

<h3>Profile głośności</h3>
<p>Nie ma sposobu na zapisanie konfiguracji głośności i przełączanie między ustawieniami wstępnymi.</p>

<h3>Automatyczne tłumienie</h3>
<p>macOS nie obniża automatycznie audio w tle gdy dołączasz do rozmowy.</p>

<h3>Pamięć głośności dla każdej aplikacji</h3>
<p>macOS nie zapamiętuje poziomów głośności dla poszczególnych aplikacji, ponieważ głośność dla poszczególnych aplikacji nie istnieje.</p>

<p>Wszystkie pięć z tych opcji jest dostępnych w <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> — natywna aplikacja paska menu macOS, która dodaje mikser głośności, którego Apple nigdy nie zbudował.</p>

<img src="/apps/sounddial.png" alt="SoundDial — kontrola głośności dla każdej aplikacji, profile, automatyczne tłumienie i wzmocnienie 200% dla macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>Część 6: Głośność dla każdej aplikacji z SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> wypełnia każdą lukę wymienioną powyżej:</p>

<ul>
  <li><strong>Głośność dla każdej aplikacji:</strong> Każda aplikacja ma własny suwak, 0% do 200%</li>
  <li><strong>Wyciszanie dla każdej aplikacji:</strong> Jedno kliknięcie, aby wyciszyć dowolną aplikację</li>
  <li><strong>Wzmocnienie głośności:</strong> Amplifikuj ciche aplikacje powyżej 100%</li>
  <li><strong>Profile głośności:</strong> Zapisuj konfiguracje i przełączaj jednym kliknięciem</li>
  <li><strong>Automatyczne tłumienie:</strong> Audio w tle obniża się podczas rozmów, przywraca po</li>
  <li><strong>Pamięć głośności:</strong> Głośność każdej aplikacji jest zapamiętywana między restartami</li>
  <li><strong>Przełączanie urządzenia wyjścia:</strong> Zmieniaj głośniki/słuchawki z tego samego panelu</li>
  <li><strong>Skróty klawiszowe:</strong> ⌃⌥S aby przełączyć mikser, ⌃⌥M aby wyciszyć wszystko</li>
</ul>

<p>Używa nowoczesnego API Core Audio Tap Apple — bez sterowników systemowych, bez wirtualnych urządzeń audio, bez rozszerzeń jądra. Dostępny w <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> za €14,99 (jednorazowy zakup, bez subskrypcji), przeglądany przez Apple i w piaskownicy. macOS 14.2+.</p>
`,
  },
  "vlc-volume-too-low-mac": {
    slug: "vlc-volume-too-low-mac",
    title: "VLC zbyt cichy na Macu? Jak zwiększyć głośność powyżej 200%",
    description:
      "VLC na maksymalnej głośności, ale film nadal za cichy? VLC ma wbudowane wzmocnienie do 200% — a możesz pójść jeszcze dalej z mikserem głośności per aplikacja.",
    date: "2026-04-08",
    readTime: "4 min read",
    content: `
<p>Oglądasz film w VLC. Dialog jest cichy. Ustawiasz głośność VLC na maksimum. Ustawiasz głośność Maca na maksimum. Nadal nie słyszysz wyraźnie. Film po prostu został nagrany zbyt cicho.</p>

<p>Dobra wiadomość: VLC ma wbudowane rozwiązanie, o którym większość ludzi nie wie. Jeszcze lepsze: możesz je połączyć ze wzmocnieniem na poziomie systemu, by uzyskać jeszcze więcej głośności.</p>

<h2>Wbudowane wzmocnienie VLC (do 200%)</h2>

<p>VLC może samo przekroczyć 100% głośności. Suwak głośności na pasku odtwarzacza VLC zatrzymuje się na 100%, ale można go dalej zwiększać:</p>

<h3>Metoda 1: Kółko myszy</h3>
<p>Najedź myszą na suwak głośności VLC i przewijaj w górę. Suwak przejdzie za widoczny poziom 100% aż do 200%. Podczas przewijania zobaczysz wyświetlany procent.</p>

<h3>Metoda 2: Skrót klawiszowy</h3>
<p>Naciśnij <strong>Command + Strzałka w górę</strong> (⌘↑) wielokrotnie, aby zwiększyć głośność powyżej 100%. Każde naciśnięcie dodaje jeden krok. <strong>Command + Strzałka w dół</strong> (⌘↓) zmniejsza.</p>

<h3>Metoda 3: Menu Audio</h3>
<p>Przejdź do VLC → Audio → Zwiększ głośność. Powtarzaj, aż głośność będzie wystarczająca. Bieżący poziom jest wyświetlany w prawym dolnym rogu odtwarzacza.</p>

<p>200% wzmocnienie VLC działa przez wzmacnianie sygnału audio w dekoderze VLC. Przy ekstremalnych poziomach może pojawić się zniekształcenie, ale dla naprawdę cichych plików wideo jest bardzo skuteczne.</p>

<h2>Poza wzmocnieniem VLC: wzmacnianie na poziomie systemu</h2>

<p>Jeśli VLC przy 200% nadal nie jest wystarczająco głośny — lub chcesz wzmocnić VLC bez zmiany jego wewnętrznych ustawień audio — mikser głośności per aplikacja na poziomie systemu dodaje kolejną warstwę wzmocnienia.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> daje VLC własny suwak głośności od 0% do 200% na poziomie systemu. Sumuje się to z wewnętrznym wzmocnieniem VLC:</p>

<ul>
  <li>VLC wewnętrzny: 200% × SoundDial: 200% = efektywne 400% wzmocnienie</li>
  <li>VLC wewnętrzny: 150% × SoundDial: 150% = efektywne 225% wzmocnienie</li>
</ul>

<p>To ekstremalne wzmocnienie i wprowadzi zniekształcenie na niektórych treściach, ale dla ekstremalnie cichego materiału źródłowego może być tym, czego potrzebujesz.</p>

<img src="/apps/sounddial.png" alt="SoundDial wzmacniający głośność VLC na poziomie systemu na macOS dla cichych plików wideo" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Co ważniejsze, SoundDial pozwala wzmocnić VLC <strong>niezależnie</strong>. Twój odtwarzacz muzyki, przeglądarka i aplikacje komunikacyjne pozostają na normalnych poziomach, podczas gdy tylko VLC staje się głośniejszy. Jeśli wzmocnisz VLC do 180% w SoundDial, Spotify się nie zmieni. To coś, czego wbudowane wzmocnienie VLC nie potrafi — wzmocnienie VLC wpływa tylko na VLC, ale systemowa głośność macOS nadal łączy wszystko inne razem.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Pobierz SoundDial z Mac App Store</a> — €14,99 jednorazowy zakup, bez subskrypcji, macOS 14.2+.</p>
`,
  },
  "disable-audio-ducking-mac": {
    slug: "disable-audio-ducking-mac",
    title: "Jak wyłączyć audio ducking na Macu (lub samemu go kontrolować)",
    description:
      "macOS lub aplikacje ciągle ściszają muzykę podczas połączeń bez pytania. Oto jak zatrzymać niechciane audio ducking — lub zastąpić je dukowaniem, które sam kontrolujesz.",
    date: "2026-04-10",
    readTime: "5 min read",
    content: `
<p>Dołączasz do rozmowy Zoom. Twoja muzyka spada do prawie zera. Nie dotknąłeś żadnego suwaka głośności — coś zrobiło to za ciebie. To jest <strong>audio ducking</strong>: automatyczne ściszanie dźwięku w tle, gdy aktywne jest połączenie lub ważne źródło audio.</p>

<p>Niektórzy to kochają. Inni nienawidzą — szczególnie gdy ducking jest zbyt agresywny (muzyka spada do zera zamiast do komfortowego poziomu tła) lub gdy jest wyzwalany nieoczekiwanie.</p>

<p>Oto jak wyłączyć niechciany ducking na Macu i jak zastąpić go dukowaniem działającym tak, jak chcesz.</p>

<h2>Skąd pochodzi audio ducking na Macu</h2>

<p>macOS sam <strong>nie</strong> ma wbudowanej funkcji audio ducking. Jeśli muzyka ścisza się podczas połączeń, jedną z tych rzeczy jest przyczyną:</p>

<h3>1. Przetwarzanie audio Zoom</h3>
<p>Zoom może redukować dźwięk systemowy podczas aktywacji. Sprawdź Zoom → Ustawienia → Audio i wyłącz "Automatycznie dostosuj głośność mikrofonu". Spróbuj też zmniejszyć tłumienie szumów z "Wysokie" na "Niskie".</p>

<h3>2. Przełączanie kodeków Bluetooth</h3>
<p>Gdy aplikacja aktywuje mikrofon słuchawek Bluetooth, macOS przełącza się z AAC na kodek SCO. To nie jest właściwy "ducking" — to zmiana kodeka, która sprawia, że wszystko brzmi ciszej i gorzej. Napraw to, używając oddzielnego mikrofonu.</p>

<h3>3. Aplikacja zewnętrzna to robi</h3>
<p>Niektóre aplikacje audio (jak Background Music) mają funkcje auto-pauzy lub auto-duck. Niektóre aplikacje medialne same redukują głośność, gdy wykryją inne źródło audio. Sprawdź zainstalowane narzędzia audio.</p>

<h3>4. Aplikacje komunikacyjne dostosowujące audio</h3>
<p>Discord, Teams i inne aplikacje komunikacyjne mają własne przetwarzanie audio, które może wpływać na postrzeganą głośność innych aplikacji. Sprawdź ustawienia audio każdej aplikacji w poszukiwaniu opcji "automatycznie dostosuj" i wyłącz je.</p>

<h2>Jak zatrzymać niechciany ducking</h2>

<ol>
  <li><strong>Sprawdź ustawienia audio Zoom/Teams/Discord</strong> — wyłącz automatyczne dostosowanie głośności/mikrofonu</li>
  <li><strong>Używaj oddzielnego mikrofonu do połączeń</strong> — zapobiega przełączaniu kodeka Bluetooth</li>
  <li><strong>Usuń narzędzia audio</strong> — Background Music, Soundflower lub aplikacje przechwytujące audio</li>
  <li><strong>Sprawdź Dostępność macOS</strong> — Ustawienia systemowe → Dostępność → Audio w poszukiwaniu nieoczekiwanych ustawień</li>
</ol>

<h2>Zastąp zły ducking dobrym</h2>

<p>Idea audio ducking jest właściwie świetna — automatycznie ściszaj dźwięk w tle podczas połączeń, żebyś wyraźnie słyszał. Problem polega na tym, gdy jest zbyt agresywny (muzyka spada do zera), niekonfigurowalny (nie możesz wybrać, ile ściszyć) lub wyzwalany przez coś nieodpowiedniego.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> ma wbudowaną funkcję auto-duckingu, która daje ci kontrolę:</p>

<ul>
  <li><strong>Konfigurowalny poziom duckingu:</strong> Wybierz dokładnie, ile ściszyć dźwięk w tle podczas połączeń — od 10% (prawie cisza) do 80% (ledwo zmniejszony). Domyślnie 30%, co sprawia, że muzyka jest słyszalna, ale nie rozpraszająca.</li>
  <li><strong>Inteligentne wykrywanie:</strong> Wykrywa połączenia przez monitorowanie użycia mikrofonu — ten sam wskaźnik co pomarańczowa kropka macOS. Działa z Zoom, Teams, FaceTime, Discord, Slack, Google Meet, Webex, Skype.</li>
  <li><strong>Idealne przywracanie:</strong> Po zakończeniu połączenia każda aplikacja wraca do dokładnie poprzedniej głośności. Bez ponownego dostosowywania.</li>
  <li><strong>Łatwy przełącznik:</strong> Włącz lub wyłącz auto-ducking w ustawieniach SoundDial. Gdy go nie chcesz, wyłącz. Gdy chcesz z powrotem, włącz.</li>
</ul>

<img src="/apps/sounddial.png" alt="SoundDial konfigurowalny auto-ducking — kontroluj dokładnie, ile ściszany jest dźwięk w tle podczas połączeń" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Różnica: zamiast jakiejś aplikacji decydującej, że twoja muzyka ma spaść do zera podczas każdego połączenia, ty decydujesz, że ma spaść do 25%. Zamiast tracić kontrolę, ją zyskujesz. I zamiast próbować wyłączyć ukrytą funkcję w trzech różnych aplikacjach, masz jeden przełącznik w jednym miejscu.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Pobierz SoundDial z Mac App Store</a> — €14,99 jednorazowy zakup, bez subskrypcji, macOS 14.2+.</p>
`,
  },
  "bluetooth-headphones-too-quiet-mac": {
    slug: "bluetooth-headphones-too-quiet-mac",
    title: "Słuchawki Bluetooth za ciche na Macu? Wszystkie skuteczne metody",
    description:
      "Twoje słuchawki Bluetooth działają dobrze na telefonie, ale są ciche na Macu. Oto każda przyczyna — od problemów z kodekiem po limity głośności macOS — i jak naprawić każdą z nich.",
    date: "2026-04-12",
    readTime: "6 min read",
    content: `
<p>Twoje słuchawki Bluetooth są wystarczająco głośne na telefonie. Łączysz je z Makiem — i wszystko jest cichsze. Muzyka brzmi stłumiono. Połączenia trudno usłyszeć. Wkręciłeś głośność na maksimum, ale nadal nie wystarczy. Dlaczego?</p>

<p>Audio Bluetooth na Macu ma kilka czynników redukujących głośność, które nie istnieją na telefonach. Oto każdy z nich i jak go naprawić.</p>

<h2>1. Bezpieczeństwo słuchawek ogranicza głośność</h2>

<p>macOS ma wbudowaną funkcję ograniczającą głośność słuchawek, aby chronić słuch. Mierzy ekspozycję na dźwięk w czasie i redukuje maksymalną głośność, jeśli uzna, że słuchałeś zbyt głośno.</p>

<p>Przejdź do <strong>Ustawienia systemowe → Dźwięk → Bezpieczeństwo słuchawek</strong>. Jeśli włączone jest "Redukuj głośny dźwięk", wyłącz to lub podnieś próg. To główna przyczyna, dla której słuchawki Bluetooth są cichsze na Macu niż na telefonie.</p>

<h2>2. Niezgodność kodeków Bluetooth</h2>

<p>Twój telefon może łączyć się ze słuchawkami używając kodeka wyższej jakości (aptX, LDAC, AAC), podczas gdy Mac domyślnie używa SBC (podstawowego kodeka Bluetooth). Różne kodeki mają różne charakterystyki maksymalnej głośności.</p>

<p>macOS generalnie używa AAC dla urządzeń Apple i SBC dla słuchawek innych producentów. Jeśli twoje słuchawki obsługują aptX lub LDAC, macOS ich nie użyje — Apple obsługuje tylko AAC i SBC.</p>

<p><strong>Rozwiązanie:</strong> Niewiele można zrobić z wyborem kodeków na macOS. Wiedza o tym wyjaśnia jednak, dlaczego te same słuchawki mogą brzmieć inaczej (i potencjalnie ciszej) na Macu niż na telefonie z Androidem używającym LDAC.</p>

<h2>3. Aktywacja mikrofonu wyzwala SCO</h2>

<p>Gdy dowolna aplikacja aktywuje mikrofon słuchawek Bluetooth (Zoom, FaceTime, Siri, dyktowanie), macOS przełącza z AAC na kodek SCO. SCO został zaprojektowany do rozmów telefonicznych w 2004 roku — brzmi okropnie i jest znacznie cichszy.</p>

<p><strong>Rozwiązanie:</strong> Użyj oddzielnego mikrofonu (wbudowany mikrofon Maca lub USB) i zachowaj słuchawki Bluetooth tylko jako wyjście. W ustawieniach aplikacji do połączeń ustaw wejście na mikrofon Maca, a wyjście na słuchawki. To zapobiega przełączaniu na SCO.</p>

<h2>4. Problem synchronizacji głośności Bluetooth</h2>

<p>Audio Bluetooth ma dwa suwaki głośności: jeden po stronie Maca i jeden po stronie słuchawek. Powinny pozostawać zsynchronizowane, ale mogą się rozejść — Mac pokazuje 100%, ale słuchawki faktycznie nie są na pełnej głośności.</p>

<p><strong>Rozwiązanie:</strong> Odłącz słuchawki (Ustawienia systemowe → Bluetooth → kliknij "i" → Rozłącz), poczekaj 5 sekund, ponownie połącz. To zsynchronizuje głośność. Niektóre słuchawki mają też własne przyciski głośności — upewnij się, że są na maksimum.</p>

<h2>5. Słabej jakości połączenie Bluetooth</h2>

<p>Odległość, zakłócenia (routery WiFi, urządzenia USB 3.0) i przeszkody między Makiem a słuchawkami mogą zmniejszyć jakość sygnału Bluetooth. Gdy sygnał jest słaby, macOS może zmniejszyć przepływność audio, co wpływa na postrzeganą głośność i jakość.</p>

<p><strong>Rozwiązanie:</strong> Przesuń się bliżej Maca. Odłącz nieużywane urządzenia Bluetooth. Przesuń huby USB 3.0 dalej od Maca (USB 3.0 generuje zakłócenia w paśmie 2,4 GHz używanym przez Bluetooth).</p>

<h2>6. Same słuchawki</h2>

<p>Niektóre słuchawki Bluetooth mają niższą maksymalną głośność niż inne. Nauszne słuchawki z większymi przetworниками generalnie grają głośniej niż słuchawki douszne. Słuchawki z redukcją szumów mogą mieć wbudowane ograniczenia głośności w firmware.</p>

<p>Sprawdź aplikację producenta słuchawek (Sony Headphones Connect, Bose Music, Sennheiser Smart Control itp.) w poszukiwaniu ustawień ograniczających głośność. Niektóre słuchawki mają tryb "bezpiecznego słuchania", który ogranicza głośność.</p>

<h2>Nadal cicho? Wzmocnij powyżej 100%</h2>

<p>Jeśli sprawdziłeś wszystko powyżej, a słuchawki są nadal zbyt ciche na Macu, potrzebujesz wzmocnienia głośności.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> wzmacnia głośność dowolnej aplikacji do <strong>200%</strong>. Jeśli Spotify przez twoje słuchawki Bluetooth jest zbyt cichy, przeciągnij suwak do 160%. Sygnał audio jest wzmacniany przed dotarciem do słuchawek, skutecznie podwajając dostępną głośność dla tej aplikacji.</p>

<img src="/apps/sounddial.png" alt="SoundDial wzmacniający głośność aplikacji dla słuchawek Bluetooth na Macu z suwakami per aplikacja do 200%" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Wzmocnienie per aplikacja jest lepsze niż ogólnosystemowe wzmocnienie głośności, ponieważ możesz wzmocnić tylko cichą aplikację. Jeśli podcast jest cichy, ale muzyka jest w porządku, wzmocnij aplikację do podcastów do 170%, zachowując Spotify na 80%. Każda aplikacja pozostaje na właściwym poziomie.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Pobierz SoundDial z Mac App Store</a> — €14,99 jednorazowy zakup, bez subskrypcji, macOS 14.2+.</p>
`,
  },
  "mac-audio-obs-streaming-setup": {
    slug: "mac-audio-obs-streaming-setup",
    title: "Audio Mac dla OBS i streamowania: jak kontrolować to, co słyszy widownia",
    description:
      "Streamujesz na Macu z OBS? Twoi widzowie słyszą wszystko na tej samej głośności — grę, muzykę, alerty, Discord. Oto jak odpowiednio zbalansować źródła audio.",
    date: "2026-04-15",
    readTime: "7 min read",
    content: `
<p>Streamujesz na Macu z OBS. Dźwięk gry huczy. Trwa rozmowa na Discord. Spotify gra muzykę w tle. Dźwięki alertów uruchamiają się, gdy ktoś subskrybuje. Twoi widzowie słyszą to wszystko na tej samej głośności — chaotyczny misz-masz, gdzie nawoływania na Discord konkurują z wybuchami, a muzyka zagłusza twój komentarz.</p>

<p>Podstawowy problem: macOS daje jedno wyjście audio, a OBS przechwytuje je jako jeden połączony strumień. Nie możesz powiedzieć OBS "przechwyć grę na 40%, Discord na 80%, a Spotify na 20%", bo macOS ich nie rozdziela.</p>

<h2>Problem audio przy streamowaniu na Macu</h2>

<p>Na Windows OBS może przechwytywać audio poszczególnych aplikacji natywnie. Każdą aplikację dodajesz jako oddzielne źródło audio i miksuj je niezależnie wewnątrz OBS. Na Macu nie jest to wbudowane. OBS na macOS może przechwytywać:</p>

<ul>
  <li><strong>Desktop Audio</strong> — wszystko grające na Macu, połączone w jeden strumień</li>
  <li><strong>Mikrofon/Aux</strong> — wejście mikrofonu</li>
  <li><strong>Application Audio Capture (macOS 13+)</strong> — przechwytywanie audio konkretnej aplikacji, ale konfiguracja jest ręczna i ograniczona</li>
</ul>

<p>Źródło Application Audio Capture (dodane w OBS 30+) działa do izolowania jednej aplikacji, ale zarządzanie pięcioma źródłami audio z oddzielnymi poziomami wewnątrz OBS jest skomplikowane i nie każda aplikacja współpracuje.</p>

<h2>Prostsze podejście: kontroluj poziomy zanim OBS je przechwyci</h2>

<p>Zamiast próbować rozdzielać audio wewnątrz OBS, kontroluj głośność każdej aplikacji <em>zanim</em> dotrze do przechwytywania desktop audio OBS. Jeśli obniżysz Spotify do 20% i wzmocnisz Discord do 90% na poziomie systemu, przechwytywanie desktop audio OBS pobierze już zbalansowany miks.</p>

<p>Dokładnie to robi <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a>. Ustaw każdą aplikację na poziom, który chcesz, żeby słyszeli widzowie:</p>

<img src="/apps/sounddial.png" alt="SoundDial balansujący poziomy audio gry, Discord i muzyki dla streamowania OBS na Macu" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Typowa konfiguracja audio do streamowania</h3>
<ul>
  <li><strong>Gra:</strong> 50% — obecna, ale nie zagłuszająca głosu</li>
  <li><strong>Discord / czat głosowy:</strong> 80% — wyraźne nawoływania drużyny</li>
  <li><strong>Spotify / muzyka:</strong> 15% — subtelny klimat tła</li>
  <li><strong>Alerty streamu (przeglądarka):</strong> 40% — słyszalne, ale nie irytujące</li>
  <li><strong>Slack / powiadomienia:</strong> wyciszony — widzowie nie muszą słyszeć twoich DM</li>
</ul>

<h3>Zapisz jako profil "Streaming"</h3>
<p>Zapisz tę konfigurację jako profil głośności w SoundDial. Przed wejściem na żywo zastosuj profil "Streaming" jednym kliknięciem. Każda aplikacja przeskakuje do zoptymalizowanego poziomu streamingu. Po zakończeniu streamowania wróć do profilu "Normalny" lub "Gaming".</p>

<h2>Co słyszysz vs. co słyszą widzowie</h2>

<p>Gdy SoundDial dostosowuje głośność per aplikacja na poziomie systemu, zarówno ty, jak i widzowie słyszą ten sam zbalansowany miks. To prostsze niż próba utrzymania oddzielnych miksów (jeden dla ciebie, jeden dla streamu) — co wymaga wirtualnych urządzeń audio i złożonego routingu, który jest zawodny na Macu.</p>

<p>Jeśli potrzebujesz całkowicie oddzielnego miksu dla streamu i słuchawek (np. chcesz słyszeć Discord głośniej niż widzowie), potrzebujesz bardziej złożonej konfiguracji z wirtualnymi urządzeniami audio. Ale dla większości streamerów jeden dobrze zbalansowany miks — łatwo kontrolowany z paska menu — jest dokładnie tym, czego potrzeba.</p>

<h2>Dlaczego kontrola per aplikacja bije miksowanie tylko w OBS</h2>

<ul>
  <li><strong>Natychmiastowe korekty:</strong> W trakcie streamu widz mówi, że gra jest za głośna. Kliknij pasek menu, przeciągnij jeden suwak. Gotowe. Bez pauzowania, bez otwierania ustawień OBS.</li>
  <li><strong>Działa poza OBS:</strong> Zbalansowana konfiguracja audio działa nawet gdy nie streamujesz. Te same profile, ta sama wygoda.</li>
  <li><strong>Bez wirtualnych urządzeń audio:</strong> SoundDial używa natywnego API Audio Tap Apple — bez Soundflower, BlackHole, bez sterowników łamiących się po aktualizacjach macOS.</li>
</ul>

<p>Dostępny w <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — sprawdzony przez Apple, €14,99 jednorazowy zakup, bez subskrypcji, macOS 14.2+.</p>
`,
  },
  "make-mac-remember-volume-per-app": {
    slug: "make-mac-remember-volume-per-app",
    title: "Jak sprawić, żeby Mac zapamiętywał głośność per aplikacja",
    description:
      "Za każdym razem, gdy restartujesz Spotify lub ponownie uruchamiasz Zoom, musisz dostosowywać głośność. Oto jak sprawić, żeby macOS automatycznie zapamiętywał poziom głośności każdej aplikacji.",
    date: "2026-04-18",
    readTime: "4 min read",
    content: `
<p>Spędzasz pięć minut na idealnym ustawieniu poziomów audio. Spotify na 30%, Zoom na 100%, Slack na 15%. Potem restartujesz Maca. Albo Slack się zawiesza i restartuje. Albo zamykasz Spotify i otwierasz go później. Każda aplikacja resetuje się do domyślnej głośności. Znowu wszystko dostosujesz. Znowu.</p>

<p>macOS zapamiętuje głośność systemową między restartami. Ale nie zapamiętuje głośności per aplikacja — bo macOS w ogóle nie ma kontroli głośności per aplikacja. Nie ma czego zapamiętywać.</p>

<h2>Dlaczego aplikacje nie pamiętają własnej głośności</h2>

<p>Niektóre aplikacje (jak Spotify i VLC) mają wewnętrzne suwaki głośności zapisywane między sesjami. Ale większość aplikacji — przeglądarki, narzędzia komunikacyjne, narzędzia systemowe — nie ma własnych kontrolek głośności. A nawet aplikacje, które zapisują wewnętrzną głośność, pamiętają tylko własne ustawienie suwaka, a nie głośność względem innych aplikacji.</p>

<p>To, czego naprawdę chcesz, to żeby <em>system</em> pamiętał: "Spotify powinien być na 30% głośności systemowej, zawsze." macOS nie obsługuje tej koncepcji.</p>

<h2>Pamięć głośności z SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> ma funkcję <strong>Pamięci głośności</strong>. Po włączeniu zapisuje poziom głośności każdej aplikacji według jej identyfikatora bundle. Gdy aplikacja kończy pracę i restartuje — czy ją restartujesz, zawiesza się, czy restartujesz Maca — SoundDial automatycznie przywraca ją do zapisanej głośności.</p>

<img src="/apps/sounddial.png" alt="SoundDial pamięć głośności — automatycznie zapamiętuje i przywraca poziomy głośności per aplikacja na macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Jak to działa</h3>
<ol>
  <li>Włącz "Zapamiętuj głośność per aplikacja" w ustawieniach SoundDial</li>
  <li>Ustaw każdą aplikację na preferowaną głośność</li>
  <li>SoundDial zapisuje poziom automatycznie</li>
  <li>Gdy aplikacja restartuje, głośność jest przywracana do dokładnie tego miejsca</li>
</ol>

<p>Bez ręcznego zapisywania. Bez ponownego dostosowywania. Pierwszy raz, gdy ustawisz głośności, jest ostatnim.</p>

<h3>Co jest zapamiętywane</h3>
<ul>
  <li><strong>Poziom głośności</strong> — dokładny procent (0% do 200%)</li>
  <li><strong>Stan wyciszenia</strong> — jeśli wyciszyłeś aplikację, pozostaje wyciszona po restarcie</li>
  <li><strong>Per aplikacja</strong> — głośność każdej aplikacji jest przechowywana niezależnie według bundle ID</li>
</ul>

<h3>Nowe aplikacje dostają domyślną głośność</h3>
<p>Gdy aplikacja uruchamia się po raz pierwszy (ta, której SoundDial jeszcze nie widział), dostaje konfigurowalną domyślną głośność. Możesz ustawić to domyślne w ustawieniach SoundDial — żeby nowe aplikacje startowały na 80% (lub jak wolisz) zamiast potencjalnie huczeć na 100%.</p>

<h2>Pamięć głośności + profile = ustaw i zapomnij</h2>

<p>Pamięć głośności obsługuje codzienność: aplikacje zachowują poziomy między restartami. Profile obsługują przełączanie sytuacyjne: tryb "Spotkanie", tryb "Skupienie", tryb "Gaming" — zastosuj jednym kliknięciem i każda aplikacja przeskakuje na właściwy poziom dla tej sytuacji.</p>

<p>Razem prawie nigdy nie dostosujesz ręcznie suwaka głośności. Aplikacja pamięta ostatni poziom, a gdy zmieniasz kontekst, profil ustawia wszystko naraz.</p>

<p>Dostępny w <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — sprawdzony przez Apple, €14,99 jednorazowy zakup, bez subskrypcji, macOS 14.2+.</p>
`,
  },
  "podcast-volume-too-low-mac": {
    slug: "podcast-volume-too-low-mac",
    title: "Podcast za cichy na Macu? Jak go głośniej",
    description:
      "Niektóre podcasty są szeptem ciche na Macu nawet przy maksymalnej głośności. Oto dlaczego — i jak wzmocnić audio podcastu powyżej 100% bez wpływu na inne aplikacje.",
    date: "2026-04-20",
    readTime: "5 min read",
    content: `
<p>Słuchasz podcastu na Macu. Prowadzący brzmi dobrze, ale gość — nagrywający z laptopem w kuchni — jest ledwo słyszalny. Kręcisz głośność do 100%. Prowadzący jest teraz za głośny, ale gość nadal cichy. Nie ma szans wygrać, bo problem leży w nagraniu, a nie w twoim Macu.</p>

<p>Jakość audio podcastów mocno się różni. Profesjonalne audycje są masterowane na spójnych poziomach. Ale wywiady, niezależne podcasty i nagrania na żywo często mają gości na -20 dB lub niżej — znacznie ciszej niż prowadzący lub muzyka intro.</p>

<h2>Dlaczego niektóre podcasty są tak ciche</h2>

<ul>
  <li><strong>Jakość mikrofonu gościa:</strong> Jeden prowadzący ma profesjonalny sprzęt, gość jest na AirPodach. Różnica poziomów może wynosić 15+ dB.</li>
  <li><strong>Brak postprodukcji:</strong> Profesjonalne podcasty kompresują i normalizują poziomy. Wiele nie robi tego.</li>
  <li><strong>Aplikacje podcastowe nie normalizują:</strong> Apple Podcasts i Spotify stosują minimalną lub żadną normalizację głośności do treści podcastów (w przeciwieństwie do muzyki).</li>
  <li><strong>Dynamika:</strong> Niektórzy producenci podcastów celowo utrzymują wysoką dynamikę dla "naturalnego" brzmienia — co oznacza, że ciche części są bardzo ciche.</li>
</ul>

<h2>Rozwiązania w aplikacji</h2>

<h3>Apple Podcasts</h3>
<p>Apple Podcasts nie ma funkcji normalizacji ani wzmocnienia głośności. Dostajesz to, co daje podcast. Kontrolka głośności w aplikacji w starszych wersjach została usunięta — teraz używa tylko głośności systemowej.</p>

<h3>Spotify</h3>
<p>Ustawienie "Normalizuj głośność" Spotify (Ustawienia → Odtwarzanie) może pomóc w spójności głośności między różnymi podcastami, ale jego wpływ na dynamikę wewnątrz odcinka jest ograniczony. Spróbuj ustawić je na "Głośno" dla maksymalnej normalizacji.</p>

<h3>Overcast (przeglądarka)</h3>
<p>Jeśli używasz Overcast (przez internet na overcast.fm), ma funkcję "Voice Boost", która znacznie wzmacnia i kompresuje audio podcastu, czyniąc ciche głosy głośniejszymi. To jedno z najlepszych wbudowanych rozwiązań — ale działa tylko w Overcast.</p>

<h2>Rozwiązanie systemowe: wzmocnij aplikacje podcastowe powyżej 100%</h2>

<p>Uniwersalnym rozwiązaniem jest wzmocnienie aplikacji podcastowej powyżej limitu 100% macOS. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> daje każdej aplikacji suwak głośności do <strong>200%</strong>.</p>

<img src="/apps/sounddial.png" alt="SoundDial wzmacniający głośność Apple Podcasts do 180% na Macu dla cichych odcinków podcastów" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Ustaw Apple Podcasts lub aplikację podcastową na 160-180%, zachowując muzykę Spotify na 40% i Slack na 15%. Podcast staje się głośniejszy bez sprawiania, że wszystko inne jest boleśnie głośne. Gdy wrócisz do muzyki, po prostu obniż aplikację podcastową z powrotem do normy — lub pozwól pamięci głośności SoundDial zapamiętać to automatycznie.</p>

<p>Podejście per aplikacja jest lepsze niż ogólnosystemowe wzmocnienie głośności, ponieważ:</p>
<ul>
  <li>Tylko cicha aplikacja podcastowa staje się głośniejsza</li>
  <li>Muzyka pozostaje na preferowanym poziomie</li>
  <li>Audio połączeń pozostaje na preferowanym poziomie</li>
  <li>Dźwięki powiadomień nie stają się nagle ogłuszające</li>
</ul>

<p>Dostępny w <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — sprawdzony przez Apple, €14,99 jednorazowy zakup, bez subskrypcji, macOS 14.2+.</p>
`,
  },
  "mac-audio-online-classes-lectures": {
    slug: "mac-audio-online-classes-lectures",
    title: "Konfiguracja audio Mac do zajęć online i wykładów",
    description:
      "Oglądasz wykład, robiąc notatki, szukając informacji w Google i rozmawiając ze znajomymi — wszystko na różnych głośnościach. Oto jak zarządzać audio studenta na Macu.",
    date: "2026-04-22",
    readTime: "5 min read",
    content: `
<p>Jesteś studentem uczestniczącym w wykładzie online na Zoom. Masz otwarty tutorial YouTube w innej karcie dla odniesienia. Twoi znajomi rozmawiają na Discord. Spotify gra lo-fi w tle. Twój Mac traktuje to wszystko jako jedną głośność. Ścisz lo-fi i nie słyszysz profesora. Wkręć wykład, a pingi Discord rozbijają twoją koncentrację.</p>

<p>macOS ma jeden suwak głośności dla wszystkiego. Dla studentów żonglujących wieloma źródłami audio to ciągłe utrudnienie.</p>

<h2>Typowy stos audio studenta</h2>

<ul>
  <li><strong>Platforma wykładów</strong> (Zoom, Teams, Google Meet, Webex) — musi być krystalicznie wyraźna, zawsze słyszalna</li>
  <li><strong>Materiały referencyjne</strong> (tutoriale YouTube, nagrane wykłady) — umiarkowana głośność, musi być wstrzymywalna/regulowalna</li>
  <li><strong>Muzyka do nauki</strong> (Spotify, Apple Music) — niski poziom tła, nie powinien konkurować z wykładem</li>
  <li><strong>Czat</strong> (Discord, iMessage, Slack) — subtelne dźwięki powiadomień, nie rozpraszające</li>
  <li><strong>Karty przeglądarki</strong> — okazjonalne treści automatycznie odtwarzane, które muszą być natychmiast wyciszane</li>
</ul>

<h2>Ograniczenie macOS</h2>

<p>Przy jednej głośności systemowej jesteś zmuszony do kompromisów. Ustaw ją wystarczająco wysoko dla cichego mikrofonu profesora, a Spotify jest za głośny. Ustaw ją dla komfortowej muzyki, a wykład jest niesłyszalny. Wycisz Spotify i tracisz korzyść muzyki w tle dla skupienia. Nie ma komfortowej równowagi, bo każda aplikacja jest zablokowana na tym samym poziomie.</p>

<h2>Konfigurowanie audio per aplikacja do nauki</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> daje każdej aplikacji własny suwak głośności, dzięki czemu możesz zbudować idealną konfigurację audio do nauki:</p>

<img src="/apps/sounddial.png" alt="Konfiguracja studenta SoundDial — wykład na pełnej głośności, muzyka do nauki cicho, powiadomienia wyciszone" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Profil wykładowy</h3>
<ul>
  <li><strong>Zoom / Teams / Meet:</strong> 100% — nie omiń żadnego słowa</li>
  <li><strong>Spotify:</strong> 15% — ledwo słyszalne tło</li>
  <li><strong>Discord:</strong> 10% — tylko subtelne powiadomienia</li>
  <li><strong>Przeglądarka:</strong> 40% — dla filmów referencyjnych gdy potrzeba</li>
  <li><strong>iMessage:</strong> wyciszony — sprawdzaj między zajęciami</li>
</ul>

<h3>Profil samodzielnej nauki</h3>
<ul>
  <li><strong>Spotify:</strong> 50% — motywująca muzyka do nauki</li>
  <li><strong>Przeglądarka:</strong> 70% — filmy tutorialowe na wyraźnym poziomie</li>
  <li><strong>Discord:</strong> 20% — dostępny dla grupy naukowej</li>
  <li><strong>Wszystko inne:</strong> wyciszone</li>
</ul>

<h3>Profil przerwy</h3>
<ul>
  <li><strong>Wszystko:</strong> 60-80% — relaks między zajęciami</li>
</ul>

<p>Zapisz każdy jako profil głośności i przełączaj jednym kliknięciem w miarę postępu dnia. Gdy zaczyna się wykład, zastosuj "Wykład" — auto-ducking zajmie się resztą, automatycznie ściszając muzykę, gdy profesor mówi przez twój mikrofon.</p>

<h2>Dlaczego to ważne dla skupienia</h2>

<p>Badania konsekwentnie pokazują, że właściwe środowisko audio poprawia koncentrację i zapamiętywanie. Zły miks — muzyka zbyt głośna, powiadomienia zbyt częste, wykład zbyt cichy — tworzy obciążenie poznawcze, które nie ma nic wspólnego z materiale do nauki. Poprawne ustawienie audio raz, zapisanie jako profil i nigdy więcej nie myślenie o tym usuwa stałe źródło rozproszenia.</p>

<p>Dostępny w <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — sprawdzony przez Apple, €14,99 jednorazowy zakup, bez subskrypcji, macOS 14.2+.</p>
`,
  },
  "mac-sound-not-working-after-update": {
    slug: "mac-sound-not-working-after-update",
    title: "Dźwięk Mac nie działa po aktualizacji? Kompletny przewodnik naprawy",
    description:
      "Zaktualizowałeś macOS i teraz nie ma dźwięku, trzeszczy lub utkwił na złej głośności. Oto każda naprawa, by przywrócić działanie audio Mac.",
    date: "2026-04-25",
    readTime: "7 min read",
    content: `
<p>Zaktualizowałeś macOS. Wszystko wyglądało dobrze — aż zauważyłeś, że nie ma dźwięku. Albo dźwięk trzeszczy. Albo głośność utkwiła. Albo twoje urządzenie wyjścia audio zniknęło. Problemy z audio po aktualizacji zdarzają się przy prawie każdym wydaniu macOS, i wahają się od miernie irytujących do całkowicie niemych.</p>

<p>Oto systematyczny przewodnik naprawy audio Mac po aktualizacji macOS, obejmujący każdy znany problem i rozwiązanie.</p>

<h2>Krok 1: Sprawdź oczywiste rzeczy</h2>

<h3>Czy jest wyciszony?</h3>
<p>Naciśnij klawisz zwiększania głośności. Sprawdź, czy na ekranie pojawia się wskaźnik głośności. Czasem aktualizacje resetują głośność systemową do zera lub włączają wyciszenie.</p>

<h3>Czy wybrane jest właściwe urządzenie wyjścia?</h3>
<p>Przejdź do Ustawienia systemowe → Dźwięk → Wyjście. Po aktualizacji macOS czasem przełącza na nieoczekiwane urządzenie wyjścia — głośniki podłączonego monitora, urządzenie Bluetooth, które nie jest podłączone, lub wbudowane głośniki gdy chcesz zewnętrznych. Wybierz właściwe urządzenie.</p>

<h3>Czy Bezpieczeństwo słuchawek ogranicza głośność?</h3>
<p>Aktualizacje czasem resetują Bezpieczeństwo słuchawek do domyślnego (włączonego). Sprawdź Ustawienia systemowe → Dźwięk → Bezpieczeństwo słuchawek i wyłącz "Redukuj głośny dźwięk", jeśli zostało włączone przez aktualizację.</p>

<h2>Krok 2: Zrestartuj Core Audio</h2>

<p>Demon audio (coreaudiod) często wpada w zły stan po aktualizacji. Jego restart jest najskuteczniejszą pojedynczą naprawą.</p>

<p>Otwórz Terminal i uruchom:</p>
<p><code>sudo killall coreaudiod</code></p>

<p>Audio na chwilę przerwie i zrestartuje się. Sprawdź, czy dźwięk działa. Jeśli to naprawia, problem był ze starym stanem demona audio — częstym po aktualizacjach.</p>

<h2>Krok 3: Zresetuj NVRAM/PRAM</h2>

<p>Dla Maców Intel: wyłącz całkowicie, potem włącz trzymając <strong>Option + Command + P + R</strong> przez około 20 sekund. Resetuje to NVRAM, który przechowuje ustawienia głośności, wybór dysku startowego i inne preferencje niskiego poziomu.</p>

<p>Dla Maców Apple Silicon (M1/M2/M3/M4): NVRAM resetuje się automatycznie gdy potrzeba. Pełny restart (nie tylko sen/wybudzenie) jest zazwyczaj wystarczający.</p>

<h2>Krok 4: Sprawdź konflikty sterowników audio zewnętrznych</h2>

<p>Aktualizacje macOS często łamią sterowniki audio zewnętrznych firm i rozszerzenia jądra. Jeśli masz zainstalowane którekolwiek z tych, mogą być przyczyną:</p>

<ul>
  <li><strong>Soundflower</strong> — przestarzały, często konfliktuje z nowszym macOS</li>
  <li><strong>BlackHole</strong> — wirtualne urządzenie audio, może wymagać aktualizacji po aktualizacjach macOS</li>
  <li><strong>Loopback</strong> — może potrzebować nowej wersji dla zaktualizowanego macOS</li>
  <li><strong>Background Music</strong> — instaluje wirtualne urządzenie audio, które często łamie się przy aktualizacjach</li>
  <li><strong>Sterowniki interfejsu audio</strong> — Focusrite, Universal Audio itp. sprawdź zaktualizowane sterowniki</li>
</ul>

<p><strong>Naprawa:</strong> Usuń lub zaktualizuj kolidujące oprogramowanie. W przypadku wirtualnych urządzeń audio sprawdź, czy urządzenie zainstalowane przez aplikację pojawia się w Ustawienia systemowe → Dźwięk → Wyjście — jeśli tak i jest wybrane, przełącz na prawdziwe głośniki. Potem zaktualizuj lub odinstaluj aplikację zewnętrzną.</p>

<h2>Krok 5: Uruchom w trybie bezpiecznym</h2>

<p>Uruchom w trybie bezpiecznym, by określić, czy problem jest spowodowany przez element startowy lub rozszerzenie zewnętrzne:</p>

<ul>
  <li><strong>Apple Silicon:</strong> Wyłącz → trzymaj przycisk zasilania aż pojawi się "Ładowanie opcji uruchamiania" → wybierz dysk startowy → trzymaj Shift → kliknij "Kontynuuj w trybie bezpiecznym"</li>
  <li><strong>Intel:</strong> Zrestartuj → trzymaj Shift podczas uruchamiania aż pojawi się okno logowania</li>
</ul>

<p>Jeśli audio działa w trybie bezpiecznym, rozszerzenie jądra lub element logowania zewnętrzny jest przyczyną. Zbadaj niedawno zainstalowane oprogramowanie.</p>

<h2>Krok 6: Utwórz nowe konto użytkownika</h2>

<p>Jeśli problem nadal występuje, utwórz tymczasowe nowe konto użytkownika (Ustawienia systemowe → Użytkownicy i grupy → Dodaj użytkownika). Zaloguj się na nowe konto i przetestuj audio. Jeśli dźwięk działa na nowym koncie, problem dotyczy twojego profilu użytkownika — uszkodzonego pliku preferencji lub konfiguracji audio.</p>

<h2>Zapobieganie przyszłym problemom z SoundDial</h2>

<p>Jedną z zalet <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> nad innymi narzędziami audio: nie instaluje sterownika systemowego audio. Używa natywnego API Core Audio Tap Apple, co oznacza, że działa czysto z aktualizacjami macOS bez konfliktów, które trapią aplikacje z wirtualnymi urządzeniami audio.</p>

<p>Jeśli używałeś Background Music lub Soundflower i zepsuli się po aktualizacji, SoundDial jest zamiennikiem, który nie będzie miał tego samego problemu. Kontrola głośności per aplikacja, wzmocnienie głośności do 200%, profile, auto-ducking — wszystko bez rozszerzenia jądra lub wirtualnego urządzenia audio.</p>

<p>Dostępny w <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — sprawdzony przez Apple, €14,99 jednorazowy zakup, bez subskrypcji, macOS 14.2+.</p>
`,
  },
  "mute-all-apps-keyboard-shortcut-mac": {
    slug: "mute-all-apps-keyboard-shortcut-mac",
    title: "Jak wyciszyć wszystkie aplikacje na Macu jednocześnie (i przywrócić je idealnie)",
    description:
      "Potrzebujesz natychmiastowej ciszy? Klawisz wyciszenia wycisza wszystko — ale wyłączenie wyciszenia resetuje starannie zbalansowane głośności. Oto lepszy sposób wyciszania i przywracania na Macu.",
    date: "2026-04-28",
    readTime: "4 min read",
    content: `
<p>Ktoś wchodzi do pokoju. Szef dzwoni niespodziewanie. Klient udostępnia ekran podczas połączenia, a twoja muzyka zaczyna grać przez jego głośniki. Potrzebujesz natychmiastowej ciszy. Teraz.</p>

<p>Naciskasz klawisz wyciszenia. Wszystko cichnie. Kryzys zażegnany.</p>

<p>Potem chwila mija. Naciskasz klawisz wyciszenia ponownie. Wszystko wraca — ale na poziomie głośności systemowej, która nie pamięta, że Spotify było na 30%, Zoom na 100%, a Slack na 15%. Te indywidualne poziomy? Przepadły. Musisz wszystko ręcznie ponownie dostosować.</p>

<h2>Klawisz wyciszenia systemu: tępe narzędzie</h2>

<p>Klawisz wyciszenia Maca (F10 lub klawisz głośnik-slash) wycisza <strong>wyjście audio systemu</strong>. Każda aplikacja milknie jednocześnie. Wyłączenie wyciszenia przywraca głośność systemową do poprzedniego poziomu — ale ponieważ macOS ma tylko jeden suwak głośności, nie ma poziomów per aplikacja do zapamiętania ani przywrócenia.</p>

<p>To jest w porządku, jeśli używasz tylko jednej aplikacji na raz. To jest problem, jeśli masz sześć aplikacji starannie zbalansowanych na różnych poziomach i potrzebujesz je wszystkie wyciszyć i przywrócić.</p>

<h2>Sprytniejsze wyciszenie: wycisz wszystko per aplikacja</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> ma skrót klawiszowy "Wycisz wszystko": <strong>Control + Option + M (⌃⌥M)</strong>.</p>

<p>Gdy go naciśniesz:</p>
<ol>
  <li>Każda aplikacja jest indywidualnie wyciszana (stan głośności każdej aplikacji jest zapisywany)</li>
  <li>Natychmiastowa cisza — jak klawisz wyciszenia</li>
</ol>

<p>Gdy naciśniesz ponownie:</p>
<ol>
  <li>Każda aplikacja jest wyłączona z wyciszenia</li>
  <li>Każda aplikacja wraca do <strong>dokładnie</strong> tej głośności, którą miała przed wyciszeniem</li>
  <li>Spotify wraca do 30%, Zoom do 100%, Slack do 15% — idealnie przywrócone</li>
</ol>

<img src="/apps/sounddial.png" alt="Skrót wyciszenia wszystkich SoundDial — Control+Option+M do wyciszania i wyłączania wyciszenia wszystkich aplikacji z przywracaniem głośności" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Różnica od klawisza wyciszenia systemu:</p>
<ul>
  <li><strong>Wyciszenie systemowe:</strong> wycisza wyjście → wyłączenie wyciszenia przywraca jedną głośność systemową → balans per aplikacja nie istnieje</li>
  <li><strong>Wycisz wszystko SoundDial:</strong> wycisza każdą aplikację indywidualnie → wyłączenie wyciszenia przywraca indywidualną głośność każdej aplikacji → twój balans jest zachowany</li>
</ul>

<h2>Kiedy to ma znaczenie</h2>

<ul>
  <li><strong>Udostępnianie ekranu:</strong> Udostępniasz ekran i musisz uciszyć Maca zanim druga osoba usłyszy twoją muzykę. ⌃⌥M → cisza → zrób swoje → ⌃⌥M → muzyka wraca na dokładnie właściwym poziomie.</li>
  <li><strong>Nieoczekiwane przerwanie:</strong> Ktoś wchodzi, potrzebujesz ciszy natychmiast. Jeden skrót, bez myszy, bez szukania na pasku menu.</li>
  <li><strong>Szybki telefon:</strong> Telefon stacjonarny dzwoni. Ucisz Maca, odbierz, wyłącz wyciszenie gdy skończysz. Wszystko wraca.</li>
</ul>

<p>W połączeniu ze skrótem <strong>⌃⌥S</strong> (przełącz popover SoundDial), możesz zarządzać całym audio z klawiatury — otworzyć mikser, dostosować poziomy, zamknąć i wyciszyć/wyłączyć wyciszenie wszystkiego bez dotykania myszy.</p>

<p>Dostępny w <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — €14,99 jednorazowy zakup, bez subskrypcji, macOS 14.2+.</p>
`,
  },
  "google-meet-volume-too-low-mac": {
    slug: "google-meet-volume-too-low-mac",
    title: "Google Meet za cichy na Macu? Jak naprawić",
    description:
      "Głosy na Google Meet są ledwo słyszalne nawet przy maksymalnej głośności. Oto dlaczego Meet działa przez Chrome, co to znaczy dla audio i jak to wzmocnić.",
    date: "2026-05-01",
    readTime: "5 min read",
    content: `
<p>Google Meet nie ma natywnej aplikacji Mac — działa wewnątrz przeglądarki. Oznacza to, że audio Meet jest częścią strumienia audio Chrome (lub Safari), a wszelkie problemy z głośnością są powiązane ze sposobem obsługi audio przez przeglądarkę. Rozplatajmy to.</p>

<h2>1. Sprawdź własne ustawienia audio Meet</h2>

<p>Podczas połączenia Meet kliknij menu z trzema kropkami (⋮) → Ustawienia → Audio. Upewnij się, że wybrane jest właściwe urządzenie głośnika. Meet czasem domyślnie wybiera nieoczekiwane urządzenie, zwłaszcza jeśli niedawno podłączyłeś lub odłączyłeś sprzęt audio.</p>

<h2>2. Sprawdź głośność karty przeglądarki</h2>

<p>W Chrome: kliknij prawym przyciskiem myszy na karcie Meet → upewnij się, że "Wycisz witrynę" NIE jest zaznaczone. Wyciszona witryna nie produkuje audio niezależnie od innych ustawień.</p>

<p>W Safari: kliknij ikonę głośnika na karcie, aby upewnić się, że nie jest wyciszona.</p>

<h2>3. Sprawdź wyjście systemowe</h2>

<p>Ustawienia systemowe → Dźwięk → Wyjście. Zweryfikuj, że wybrane jest właściwe urządzenie i głośność jest na maksimum. Sprawdź też Bezpieczeństwo słuchawek, jeśli używasz słuchawek.</p>

<h2>4. Problem audio Chrome</h2>

<p>Google Meet działa jako karta Chrome, a wyjście audio Chrome może być niższe niż dedykowane aplikacje. Chrome przetwarza audio przez własny renderer, który ma własny pułap głośności. Jeśli ogólne audio Chrome jest niskie, Meet jest niski — nawet jeśli głośność macOS jest na 100%.</p>

<p>Nie ma wbudowanego sposobu na wzmocnienie audio Chrome powyżej maksimum. macOS traktuje Chrome jako jedną aplikację z jednym poziomem głośności, który maksymalnie wynosi 100%.</p>

<h2>5. Problem z kodekiem Bluetooth</h2>

<p>Jeśli używasz AirPodów lub słuchawek Bluetooth, Google Meet aktywujący mikrofon wymusza przełączenie kodeka Bluetooth z AAC na SCO. To znacznie obniża jakość i głośność audio.</p>

<p><strong>Naprawa:</strong> W ustawieniach audio Meet wybierz wbudowany mikrofon Maca jako urządzenie wejścia, zachowując słuchawki Bluetooth jako wyjście. To zapobiega przełączeniu kodeka i utrzymuje wysokiej jakości audio.</p>

<h2>6. Wzmocnij Google Meet (Chrome) powyżej 100%</h2>

<p>Jeśli Meet jest nadal zbyt cichy po sprawdzeniu wszystkiego, musisz wzmocnić audio Chrome powyżej tego, co pozwala macOS.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> daje Chrome własny suwak głośności do <strong>200%</strong>. Ponieważ Google Meet działa wewnątrz Chrome, wzmocnienie Chrome wzmacnia Meet. Przeciągnij suwak do 150% lub 180%, a audio połączenia jest wzmacniane w czasie rzeczywistym.</p>

<img src="/apps/sounddial.png" alt="SoundDial wzmacniający głośność Google Meet (Chrome) powyżej 100% na macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Działa też z Safari, jeśli używasz Meet w Safari. SoundDial kontroluje każdą przeglądarkę niezależnie — wzmocnij Safari dla Meet, zachowując Chrome na normalnej głośności dla wszystkiego innego.</p>

<p>A z auto-duckingiem, twoja muzyka w tle automatycznie ścisza się gdy połączenie Meet rozpoczyna się (gdy twój mikrofon się aktywuje) i przywraca gdy połączenie kończy się.</p>

<p>Dostępny w <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — sprawdzony przez Apple, €14,99 jednorazowy zakup, bez subskrypcji, macOS 14.2+.</p>
`,
  },
  "mac-alert-volume-separate-from-media": {
    slug: "mac-alert-volume-separate-from-media",
    title: "Jak ustawić głośność alertów Mac osobno od głośności mediów",
    description:
      "macOS ma ukryty suwak głośności alertów, ale obejmuje tylko dźwięki systemowe. Oto jak naprawdę oddzielić głośność powiadomień i mediów na Macu.",
    date: "2026-05-02",
    readTime: "5 min read",
    content: `
<p>Twoja muzyka jest na idealnym poziomie. Potem odzywa się dźwięk alertu macOS — efekt dźwiękowy "Funk" lub "Tink" — i jest boleśnie głośny w porównaniu z muzyką. Albo odwrotnie: twoje alerty są niesłyszalne, bo głośność systemowa jest niska dla cichej muzyki w tle.</p>

<p>Chcesz dwóch osobnych suwakow głośności: jeden dla mediów (muzyka, połączenia, wideo) i jeden dla alertów i powiadomień. macOS częściowo to obsługuje, ale pełne rozwiązanie wymaga narzędzia zewnętrznego.</p>

<h2>Wbudowana głośność alertów macOS</h2>

<p>macOS ma osobną głośność alertów. Przejdź do <strong>Ustawienia systemowe → Dźwięk</strong> i poszukaj suwaka <strong>"Głośność alertów"</strong>. Kontroluje to głośność systemowych dźwięków macOS — piknięcia błędów, opróżnianie Kosza, migawka zrzutu ekranu — niezależnie od głównej głośności systemu.</p>

<p>Możesz też wybrać, który dźwięk alertu użyć i czy "Odtwarzaj efekty dźwiękowe przez" wybrane urządzenie wyjścia lub wbudowane głośniki.</p>

<h3>Co kontroluje głośność alertów</h3>
<ul>
  <li>Dźwięki alertów systemowych macOS (Funk, Tink, Bottle itp.)</li>
  <li>Dźwięki Findera (Kosz, zakończenie kopiowania pliku)</li>
  <li>Niektóre dźwięki wbudowanych aplikacji</li>
</ul>

<h3>Czego nie kontroluje</h3>
<ul>
  <li>Dźwięki powiadomień Slack</li>
  <li>Dźwięki powiadomień Discord</li>
  <li>Dźwięki Teams/Zoom</li>
  <li>Dźwięki powiadomień Mail</li>
  <li>Dźwięki powiadomień żadnej aplikacji zewnętrznej</li>
  <li>Dźwięki powiadomień przeglądarki</li>
</ul>

<p>Aplikacje zewnętrzne odtwarzają dźwięki powiadomień przez własny silnik audio — są traktowane jako zwykłe audio aplikacji, a nie alerty systemowe. Suwak głośności alertów nie ma na nie wpływu. Oznacza to, że aplikacje robiące najbardziej irytujące dźwięki powiadomień (Slack, Discord, Teams) to właśnie te, których głośność alertów macOS nie może kontrolować.</p>

<h2>Prawdziwa naprawa: głośność per aplikacja dla aplikacji z powiadomieniami</h2>

<p>Aby naprawdę oddzielić głośność powiadomień od głośności mediów, potrzebujesz kontroli głośności per aplikacja. Ustaw Slack na 15%, Discord na 20% i Mail na 10% — zachowując Spotify na 50% i przeglądarkę na 60%.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> daje każdej aplikacji własny suwak głośności. Możesz ustawić aplikacje obfite w powiadomienia na subtelny poziom, który jest zauważalny, ale nie irytujący, zachowując aplikacje medialne na komfortowym poziomie słuchania.</p>

<img src="/apps/sounddial.png" alt="SoundDial oddzielający głośność aplikacji z powiadomieniami od głośności aplikacji medialnych na macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Przykładowa konfiguracja</h3>
<p><strong>Aplikacje medialne:</strong></p>
<ul>
  <li>Spotify: 50%</li>
  <li>Safari/Chrome: 60%</li>
  <li>QuickTime/VLC: 70%</li>
</ul>

<p><strong>Aplikacje z powiadomieniami:</strong></p>
<ul>
  <li>Slack: 15%</li>
  <li>Discord: 20%</li>
  <li>Mail: 10%</li>
  <li>Kalendarz: 25%</li>
</ul>

<p><strong>Aplikacje komunikacyjne:</strong></p>
<ul>
  <li>Zoom/Teams: 100%</li>
  <li>FaceTime: 100%</li>
</ul>

<p>Zapisz to jako profil i zastosuj jednym kliknięciem. Rozdzielenie głośności powiadomień i mediów, którego macOS nie zapewnia natywnie — gotowe w mniej niż minutę.</p>

<p>Dostępny w <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — sprawdzony przez Apple, €14,99 jednorazowy zakup, bez subskrypcji, macOS 14.2+.</p>
`,
  },
  "facetime-volume-too-low-mac": {
    slug: "facetime-volume-too-low-mac",
    title: "Głośność połączeń FaceTime za niska na Macu? Jak naprawić",
    description:
      "Audio FaceTime jest ledwo słyszalne na Macu nawet przy pełnej głośności. Oto każda naprawa — od ustawień dźwięku po wzmocnienie FaceTime powyżej 100%.",
    date: "2026-05-04",
    readTime: "5 min read",
    content: `
<p>Połączenia FaceTime na iPhone są w porządku. Ale na Macu druga osoba brzmi jakby szeptała z trzech pokoi dalej. Głośność jest na maksimum. Sprawdziłeś wszystko, co przyszło ci do głowy. Nadal za cicho.</p>

<p>Niska głośność FaceTime na Macu jest częstym problemem i ma kilka możliwych przyczyn. Omówmy każdą z nich.</p>

<h2>1. Sprawdź urządzenie wyjścia</h2>

<p>Przejdź do Ustawienia systemowe → Dźwięk → Wyjście. Upewnij się, że wybrane jest właściwe urządzenie. Jeśli niedawno podłączyłeś lub odłączyłeś słuchawki, wyświetlacz lub urządzenia Bluetooth, macOS mógł automatycznie przełączyć na nieoczekiwane wyjście — jak monitor ze słabiutkimi wbudowanymi głośnikami.</p>

<h2>2. Sprawdź ustawienia audio FaceTime</h2>

<p>Podczas połączenia FaceTime kliknij pasek menu i sprawdź FaceTime → Wideo → wybierz właściwe urządzenie wyjścia w sekcji Wyjście audio. FaceTime może czasem używać innego urządzenia wyjścia niż domyślne systemowe, zwłaszcza po przełączeniu urządzenia.</p>

<h2>3. Wyłącz automatyczne przełączanie AirPodów</h2>

<p>Jeśli masz AirPody sparowane z wieloma urządzeniami Apple, mogą automatycznie przełączyć się na inne urządzenie w trakcie połączenia. Sprawdź Ustawienia systemowe → Bluetooth → kliknij "i" obok AirPodów → "Połącz z tym Makiem" → ustaw na "Gdy ostatnio podłączone do tego Maca" zamiast "Automatycznie", aby zapobiec przełączeniu podczas połączenia.</p>

<h2>4. Problem z kodekiem Bluetooth</h2>

<p>Używanie AirPodów lub słuchawek Bluetooth z FaceTime wyzwala przełączenie kodeka AAC-na-SCO (ponieważ FaceTime używa mikrofonu). SCO znacznie obniża jakość i głośność audio. Użyj oddzielnego mikrofonu (wbudowany mikrofon Mac lub USB), aby utrzymać AirPody w trybie wysokiej jakości AAC.</p>

<h2>5. Bezpieczeństwo słuchawek ogranicza głośność</h2>

<p>Ustawienia systemowe → Dźwięk → Bezpieczeństwo słuchawek. Jeśli włączone jest "Redukuj głośny dźwięk", macOS ogranicza głośność słuchawek. Wyłącz to lub podnieś próg.</p>

<h2>6. Zresetuj Core Audio</h2>

<p>Otwórz Terminal i uruchom:</p>
<p><code>sudo killall coreaudiod</code></p>
<p>To restartuje demona audio i może naprawić stany niskiej głośności. Ponownie dołącz do połączenia FaceTime po restarcie audio.</p>

<h2>7. Wzmocnij głośność FaceTime powyżej 100%</h2>

<p>Jeśli wszystkie ustawienia są na maksimum, a FaceTime jest nadal zbyt cichy — być może druga osoba ma słaby mikrofon — musisz wzmocnić powyżej limitu macOS.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> pozwala wzmocnić głośność FaceTime do <strong>200%</strong>. Otwórz panel paska menu, znajdź FaceTime i przeciągnij suwak powyżej 100%. Audio połączenia jest wzmacniane w czasie rzeczywistym bez wpływu na żadną inną aplikację.</p>

<img src="/apps/sounddial.png" alt="SoundDial wzmacniający głośność połączenia FaceTime powyżej 100% na macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial pomaga też w odwrotnym problemie: jeśli dźwięk dzwonka lub powiadomienia FaceTime jest za głośny podczas czasu skupienia, obniż FaceTime do 20% lub wycisz zachowując grającą muzykę. Jedno kliknięcie do wyciszenia, jedno do wyłączenia wyciszenia.</p>

<p>Dostępny w <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — sprawdzony przez Apple, w piaskownicy, jednorazowy zakup, bez subskrypcji.</p>
`,
  },
  "mac-volume-keyboard-shortcuts": {
    slug: "mac-volume-keyboard-shortcuts",
    title: "Skróty klawiszowe głośności Mac, o których pewnie nie wiesz",
    description:
      "Poza podstawowymi klawiszami głośności — precyzyjna kontrola, wyciszanie konkretnych aplikacji i skróty głośności per aplikacja. Każda sztuczka audio Mac wyjaśniona.",
    date: "2026-05-06",
    readTime: "5 min read",
    content: `
<p>Każdy użytkownik Mac zna klawisze zwiększania/zmniejszania/wyciszania głośności. Naciśnij je, a głośność systemowa się zmienia. Ale macOS ma kilka ukrytych sztuczek klawiszowych dla kontroli audio, których większość ludzi nigdy nie odkrywa — plus skróty zewnętrzne, które drastycznie przyspieszają zarządzanie głośnością.</p>

<h2>Wbudowane skróty, które każdy powinien znać</h2>

<h3>Precyzyjne dostosowanie głośności</h3>
<p>Trzymaj <strong>Option + Shift</strong> i naciśnij klawisz głośności w górę lub w dół. Każde naciśnięcie dostosowuje głośność o <strong>jedną czwartą</strong> normalnego kroku, dając 64 poziomy zamiast 16. To jest niezbędne do znalezienia właściwej głośności słuchawek późno w nocy lub gdy skok między dwoma normalnymi krokami jest zbyt duży.</p>

<h3>Ciche dostosowanie głośności</h3>
<p>Trzymaj <strong>Shift</strong> i naciśnij głośność w górę lub w dół. Głośność zmienia się, ale audytywny "pop" jest wytłumiany. Przydatne gdy dostosowujesz głośność podczas połączenia lub prezentacji i nie chcesz, żeby pop transmitował się do wszystkich.</p>

<h3>Skok do ustawień Dźwięku</h3>
<p>Trzymaj <strong>Option</strong> i naciśnij dowolny klawisz głośności, aby bezpośrednio otworzyć Ustawienia systemowe → Dźwięk. Szybsze niż ręczna nawigacja przez Ustawienia systemowe.</p>

<h3>Szybkie przełączenie urządzenia wyjścia</h3>
<p>Trzymaj <strong>Option</strong> i kliknij ikonę Dźwięku na pasku menu, by zobaczyć listę wszystkich dostępnych urządzeń wyjścia (i wejścia). Kliknij jedno, by natychmiastowo przełączyć. Bez otwierania Ustawień systemowych.</p>

<h2>Czego skróty klawiszowe macOS nie potrafią</h2>

<p>Wszystkie powyższe skróty kontrolują <strong>głośność systemową</strong> — jeden suwak wpływający na wszystkie aplikacje jednakowo. Nie ma wbudowanych skrótów klawiszowych do:</p>

<ul>
  <li>Dostosowania głośności konkretnej aplikacji</li>
  <li>Wyciszenia jednej aplikacji bez wyciszania wszystkiego</li>
  <li>Przełączania między zapisanymi konfiguracjami głośności</li>
  <li>Przełączania panelu miksera głośności</li>
</ul>

<p>macOS po prostu nie ma kontroli głośności per aplikacja, więc nie ma dla niej skrótów.</p>

<h2>Skróty głośności per aplikacja z SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> dodaje dwa globalne skróty klawiszowe rozszerzające możliwości macOS:</p>

<h3>Przełącz mikser głośności: Control + Option + S</h3>
<p>Naciśnij <strong>⌃⌥S</strong> z dowolnego miejsca, a popover SoundDial otwiera się na pasku menu, pokazując każdą aplikację z własnym suwakiem głośności. Dostosuj co potrzebujesz, naciśnij skrót ponownie (lub kliknij gdzie indziej), żeby zamknąć. Nigdy nie opuszczasz bieżącej aplikacji.</p>

<h3>Wycisz wszystkie aplikacje: Control + Option + M</h3>
<p>Naciśnij <strong>⌃⌥M</strong>, żeby natychmiast wyciszyć audio każdej aplikacji. Naciśnij ponownie, żeby wyłączyć wyciszenie wszystkiego, przywracając każdą aplikację do poprzedniej głośności. To jest przycisk "natychmiastowej ciszy" szybszy niż sięganie po klawisz wyciszenia — i w przeciwieństwie do klawisza wyciszenia systemu, przywraca głośności per aplikacja przy wyłączeniu wyciszenia.</p>

<img src="/apps/sounddial.png" alt="Skróty klawiszowe SoundDial — Control+Option+S aby przełączyć, Control+Option+M aby wyciszyć wszystko" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>Workflow sterowany klawiaturą</h2>

<p>Z włączonymi skrótami SoundDial możesz zarządzać całym audio bez dotykania myszy:</p>

<ol>
  <li><strong>⌃⌥S</strong> — otwórz mikser</li>
  <li>Używaj klawiszy strzałek lub myszy do dostosowania poszczególnych suwaków</li>
  <li><strong>⌃⌥S</strong> — zamknij mikser</li>
  <li><strong>⌃⌥M</strong> — natychmiastowe wyciszenie gdy ktoś wchodzi do pokoju</li>
  <li><strong>⌃⌥M</strong> — wyłącz wyciszenie gdy wyjdzie, wszystko wraca do normy</li>
</ol>

<p>W połączeniu z <strong>profilami głośności</strong> (zapisane konfiguracje przełączane jednym kliknięciem), możesz zarządzać audio tuzina aplikacji bez potrzeby otwierania żadnej z nich indywidualnie.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Pobierz SoundDial z Mac App Store</a> — €14,99 jednorazowy zakup, bez subskrypcji, macOS 14.2+.</p>
`,
  },
  "background-music-app-not-working-mac": {
    slug: "background-music-app-not-working-mac",
    title: "Aplikacja do muzyki w tle nie działa na macOS? Wypróbuj te alternatywy",
    description:
      "Darmowa aplikacja Background Music przestała działać po aktualizacji macOS? Oto dlaczego się psuje, co robić i jakie są najlepsze alternatywy, które faktycznie działają w 2026 roku.",
    date: "2026-06-08",
    readTime: "5 min read",
    content: `
<p>Background Music to popularna, darmowa, otwartoźródłowa aplikacja Mac, która pozwala na podstawową kontrolę głośności w zależności od aplikacji. Działa to poprzez instalację wirtualnego urządzenia audio i kierowanie całego dźwięku przez nie. Problem: psuje się. Regularnie.</p>

<p>Po niemal każdej aktualizacji macOS — Ventura, Sonoma, Sequoia, Tahoe — użytkownicy zgłaszają te same problemy: wirtualne urządzenie audio nie uruchamia się, pojawiają się błędy i trzaski dźwięku, niektóre aplikacje nie są wykrywane lub aplikacja po prostu się zawiesza przy uruchomieniu. Jeśli szukałeś "Muzyka w tle nie działa", nie jesteś sam.</p>

<h2>Dlaczego muzyka w tle ciągle się pojawia</h2>

<p>Muzyka tła działa poprzez instalację <strong>Sterownik wirtualnego urządzenia audio</strong> (wtyczka Core Audio HAL). macOS kieruje cały dźwięk systemowy przez to wirtualne urządzenie, a Background Music przechwytuje go, aby zastosować regulację głośności w zależności od aplikacji.</p>

<p>Problem polega na tym, że Apple zmienia sposób działania sterowników audio niemal przy każdej większej macOS wydaniu. Ograniczenia bezpieczeństwa się zaostrzają, API się zmieniają, a mechanizmy ładowania sterowników ewoluują. Ponieważ Background Music to projekt open-source prowadzony przez wolontariuszy, aktualizacje dopasowane do zmian Apple nie zawsze są aktualne.</p>

<p>Typowe problemy po macOS aktualizacjach:</p>
<ul>
  <li><strong>Wirtualne urządzenie audio się nie instaluje</strong> — Nowe polityki bezpieczeństwa macOS blokują kierowcę</li>
  <li><strong>Trzaski lub zacięcia dźwięku</strong> — urządzenie wirtualne wprowadza opóźnienia, które obecna wersja macOS radzi sobie słabo</li>
  <li><strong>Aplikacje się nie pojawiają</strong> — zmiany w sposobie macOS jak raporty uruchamiane procesy zakłócają wykrywanie aplikacji</li>
  <li><strong>Brak dźwięku</strong> — urządzenie wirtualne jest ustawione jako domyślne wyjście, ale nie przekazuje dźwięku</li>
  <li><strong>Katastrofa przy starcie</strong> — niekompatybilność z obecną wersją macOS</li>
</ul>

<h2>Jak naprawić muzykę tła</h2>

<p>Jeśli muzyka w tle jest obecnie zepsuta:</p>

<ol>
  <li><strong>Sprawdź aktualizacje:</strong> Odwiedź stronę wydań na GitHub, aby zobaczyć muzykę w tle i sprawdź, czy wydano nową wersję dla twojej macOS wersji.</li>
  <li><strong>Ponowna instalacja:</strong> Odinstaluj całkowicie Background Music (w tym wirtualne urządzenie audio), zrestartuj i zainstaluj najnowszą wersję.</li>
  <li><strong>Resetuj dźwięk:</strong> Jeśli dźwięk utknął na wirtualnym urządzeniu, przejdź do Ustawień Systemowych → Dźwięk → Wyjście i wybierz prawdziwe głośniki/słuchawki. To uciekaj <code>Sudo Killall Coreaudiod</code> w Terminal.</li>
  <li><strong>Sprawdź uprawnienia:</strong> Ustawienia systemowe → Prywatność i bezpieczeństwo — upewnij się, że Background Music ma odpowiednie uprawnienia.</li>
</ol>

<h2>Alternatywy, które nie wykorzystują wirtualnych urządzeń audio</h2>

<p>Podstawowy problem Background Music jest architektoniczny: wirtualne urządzenia audio są delikatne i łamią się przy macOS aktualizacjach. Nowoczesne alternatywy wykorzystują Apple <strong>Core Audio Tap API</strong> (wprowadzonej w macOS 14), która pozwala aplikacjom przechwytywać dźwięk pojedynczego procesu bez instalowania sterownika systemowego.</p>

<h3>SoundDial</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> korzysta z nowoczesnego API Audio Tap — bez wirtualnego urządzenia audio, bez sterownika systemowego, bez rozszerzeń jądra. Bezpośrednio podłącza się do strumienia audio każdej aplikacji, korzystając z obsługiwanego API Apple, co oznacza, że nie psuje się podczas aktualizacji macOS.</p>

<img src="/apps/sounddial.png" alt="SoundDial — alternatywa dla muzyki w tle, która nie instaluje wirtualnych urządzeń audio" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Co zyskujesz po muzyce w tle:</p>
<ul>
  <li><strong>Brak wirtualnego urządzenia audio</strong> — działa z natywnym stosem audio Apple, nie psuje się podczas aktualizacji</li>
  <li><strong>Zwiększenie głośności do 200%</strong> — Muzyka w tle gra na 100%</li>
  <li><strong>Profile objętości</strong> — zapisz i przełączaj się między konfiguracjami (Muzyka w tle nie ma takich)</li>
  <li><strong>Auto-ducking</strong> — automatyczne zmniejszanie głośności podczas rozmów (muzyka w tle ma tylko automatyczne pauzowanie, nie ducking)</li>
  <li><strong>Pamięć woluminowa</strong> — zapamiętuje wolumeny w poszczególnych aplikacjach między restartami</li>
  <li><strong>Skróty klawiaturowe</strong> — przełącz mikser lub wycisi wszystkie aplikacje</li>
  <li><strong>Aktywny rozwój</strong> — regularnie aktualizowane na najnowsze macOS</li>
</ul>

<p>Cena: SoundDial to jednorazowy płatny zakup, podczas gdy Background Music jest darmowy. Ale aplikacja, która faktycznie działa, jest warta więcej niż darmowa aplikacja, która psuje się co pół roku. I ponieważ SoundDial jest na <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>, został sprawdzony przez Apple, poddany piaskownicy pod kątem bezpieczeństwa i instaluje się bez zarzutu — brak pobierania z GitHuba, brak kompilacji ze źródła, brak uprawnień do rozszerzenia systemu.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Sprawdź SoundDial w Mac App Store</a> — jednorazowy zakup 14,99 €, bez subskrypcji macOS 14,2+.</p>
`,
  },
  "soundsource-alternative-mac": {
    slug: "soundsource-alternative-mac",
    title: "Alternatywa dla SoundSource: lżejsza, tańsza regulacja głośności w aplikacji dla Mac",
    description:
      "SoundSource jest potężny, ale drogi i złożony. Jeśli potrzebujesz tylko kontroli głośności w aplikacji bez zestawu narzędzi inżynierii dźwięku, oto co warto użyć.",
    date: "2026-06-06",
    readTime: "6 min read",
    content: `
<p>SoundSource od Rogue Amoeba to najdłużej działająca aplikacja do regulacji głośności w aplikacji Mac. Jest potężny, solidny i oferuje funkcje takie jak korektor dla aplikacji, łańcuchy efektów audio oraz routing wyjścia dla aplikacji. Kosztuje też 39 dolarów, wymaga sterownika audio systemowego (ACE) i ma więcej funkcji, niż większość osób kiedykolwiek użyje.</p>

<p>Jeśli chcesz jedynie wyłączyć Spotify bez wpływu na Zoom — i nie potrzebujesz pełnego zestawu narzędzi inżynierii dźwięku — SoundSource może być za dużo więcej, niż potrzebujesz. Oto co warto rozważyć.</p>

<h2>Co SoundSource robi dobrze</h2>

<p>Trzeba oddać — SoundSource to dopracowana, profesjonalna aplikacja:</p>
<ul>
  <li><strong>Kontrola głośności w zależności od aplikacji</strong> z drobnoziarnistymi suwakami</li>
  <li><strong>Korektor per app</strong> z wbudowanymi korektorami i wsparciem dla wtyczek Audio Unit</li>
  <li><strong>Routowanie wyjść w poszczególnych aplikacjach</strong> — wysyłać różne aplikacje do różnych głośników</li>
  <li><strong>Zwiększenie głośności</strong> ponad 100%</li>
  <li><strong>Efekty dźwiękowe obejmujące cały system</strong></li>
</ul>

<p>Jeśli jesteś podcasterem, streamerem lub profesjonalistą audio, który potrzebuje EQ i łańcuchów efektów w każdej aplikacji, SoundSource jest stworzony specjalnie dla Ciebie.</p>

<h2>Tam, gdzie SoundSource zawodzi dla zwykłych użytkowników</h2>

<h3>Cena</h3>
<p>39 USD to wysoka cena za aplikację do regulacji głośności. Jeśli nie używasz korektoru, efektów dźwiękowych ani routingu w aplikacji, płacisz za funkcje, których nigdy nie dotkniesz.</p>

<h3>Sterownik systemowy</h3>
<p>SoundSource instaluje niestandardowy sterownik dźwięku systemowego o nazwie ACE (Audio Capture Engine). To działa dobrze, ale dodaje złożoność — musi być aktualizowane z każdą macOS wersją, czasem może kolidować z innymi programami audio i oznacza, że uruchamiasz kod firm trzecich na poziomie dźwięku systemowego. Niektóre działy IT w środowiskach korporacyjnych blokują rozszerzenia jądra i sterowniki audio na poziomie systemowym.</p>

<h3>Brak profili objętości</h3>
<p>Pomimo rozbudowanego zestawu funkcji, SoundSource nie posiada systemu profili. Nie możesz zapisać konfiguracji "Spotkanie" i "Skupienia" i przełączać się między nimi. Za każdym razem, gdy sytuacja się zmienia, zmieniasz każdy suwak ręcznie.</p>

<h3>Brak automatycznego duckingu</h3>
<p>SoundSource nie obniża automatycznie dźwięku tła po dołączeniu do połączenia. Nie ma wykrywania połączeń, automatycznej regulacji głośności, nie ma pracy bez rąk w najczęstszym przypadku miksera pojedynczego aplikacji.</p>

<h2>SoundDial: skupiam się na tym, czego większość ludzi naprawdę potrzebuje</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Wybiera inne podejście: wykonuj główną pracę perfekcyjnie, pomija funkcje, których większość ludzi nie potrzebuje, i dodaje funkcje workflow, których SoundSource nie potrafi.</p>

<table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;">
<thead>
<tr style="border-bottom:2px solid rgba(255,255,255,0.2);">
  <th style="text-align:left;padding:10px 12px;color:rgba(255,255,255,0.6);">Cechy</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundDial</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundSource</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Liczba na aplikację</td>
  <td style="text-align:center;padding:10px 12px;">Tak (0-200%)</td>
  <td style="text-align:center;padding:10px 12px;">Tak</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Wycisz w każdej aplikacji</td>
  <td style="text-align:center;padding:10px 12px;">Tak</td>
  <td style="text-align:center;padding:10px 12px;">Tak</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Profile objętości</td>
  <td style="text-align:center;padding:10px 12px;">Tak</td>
  <td style="text-align:center;padding:10px 12px;">Nie</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Auto-ducking</td>
  <td style="text-align:center;padding:10px 12px;">Tak</td>
  <td style="text-align:center;padding:10px 12px;">Nie</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Pamięć woluminowa</td>
  <td style="text-align:center;padding:10px 12px;">Tak</td>
  <td style="text-align:center;padding:10px 12px;">Tak</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Korektor per app</td>
  <td style="text-align:center;padding:10px 12px;">Nie</td>
  <td style="text-align:center;padding:10px 12px;">Tak</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Routowanie wyjść w poszczególnych aplikacjach</td>
  <td style="text-align:center;padding:10px 12px;">Nie</td>
  <td style="text-align:center;padding:10px 12px;">Tak</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Sterownik dźwięku systemowego</td>
  <td style="text-align:center;padding:10px 12px;">Nie jest potrzebne</td>
  <td style="text-align:center;padding:10px 12px;">Wymagany (ACE)</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Skróty klawiaturowe</td>
  <td style="text-align:center;padding:10px 12px;">Tak</td>
  <td style="text-align:center;padding:10px 12px;">Tak</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Cena</td>
  <td style="text-align:center;padding:10px 12px;">14,99 € jednorazowy</td>
  <td style="text-align:center;padding:10px 12px;">39 USD</td>
</tr>
</tbody>
</table>

<img src="/apps/sounddial.png" alt="SoundDial — lżejsza, skupiona alternatywa dla SoundSource z profilami głośności i automatycznym duckingiem" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>Który powinieneś wybrać?</h2>

<ul>
  <li><strong>Wybierz SoundSource, jeśli:</strong> Potrzebujesz EQ dla aplikacji, łańcuchów efektów audio lub routingu wyjścia dla aplikacji. Jesteś podcasterem, streamerem lub profesjonalistą audio. Nie przeszkadza ci cena ani sterownik systemowy.</li>
  <li><strong>Wybierz <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> jeśli:</strong> Chcesz kontrolować głośność w zależności od aplikacji z profilami i automatycznym duckingiem. Chcesz coś lżejszego, co nie instaluje sterownika systemowego. Chcesz wydawać mniej. Jesteś pracownikiem zdalnym, graczem, studentem lub kimkolwiek, kto po prostu chce odciszyć Slacka bez wpływu na Zooma.</li>
</ul>

<p>SoundDial jest dostępny na <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a> — co oznacza, że została zweryfikowana przez Apple, poddany piaskownicy pod kątem bezpieczeństwa i instaluje/odinstalowuje się tak jak każda aplikacja App Store. Nie pobieram DMG z przypadkowych stron internetowych, nie instaluję sterowników systemowych, nie można przyznawać uprawnień do rozszerzenia jądra. Jednorazowy zakup, bez subskrypcji.</p>
`,
  },
  "mac-volume-too-loud-at-lowest-setting": {
    slug: "mac-volume-too-loud-at-lowest-setting",
    title: "Mac głośność jest za wysoka przy najniższym ustawieniu? Jak być jeszcze ciszejszym",
    description:
      "Nawet przy najniższym poziomie głośności twój Mac jest zbyt głośny — zwłaszcza późno w nocy ze słuchawkami. Oto jak uzyskać precyzyjniejszą kontrolę głośności i zejść poniżej minimum.",
    date: "2026-05-08",
    readTime: "5 min read",
    content: `
<p>Jest północ. Masz słuchawki. Naciskasz klawisz ściszania głośności, aż osiągniesz najniższy poziom — jeden takt. Wciąż jest za głośno. Następne wyciszanie jest ciche. Nie ma nic pomiędzy. Chcesz mieć objętość na 3%, ale macOS skacze z ~6% do 0%.</p>

<p>To częsta skarga dotycząca słuchawek i czułych głośników. 16 kroków głośności macOS jest zbyt grubych — najniższy dźwiękowy ton jest nadal głośniejszy niż to, czego potrzebujesz do cichego słuchania późno w nocy.</p>

<h2>Wbudowana poprawka: regulacja głośności o ćwierć kroku</h2>

<p>Większość użytkowników Mac o tym nie wie: możesz uzyskać <strong>4x precyzyjniejsza regulacja głośności</strong> używając modyfikatora klawiatury.</p>

<p>Zatrzymaj <strong>Opcja + Shift</strong> i naciskać klawisze głośności/w dół. Każde naciśnięcie reguluje głośność o jedną czwartą normalnego kroku — dając 64 kroki zamiast 16.</p>

<p>Pozwala to znaleźć poziomy głośności między normalnymi nacięciami. Ta przerwa między "jednym paskiem" a "wyciszeniem" ma teraz trzy dodatkowe poziomy, na które możesz wylądować. Do słuchania w słuchawkach późno w nocy to często wystarcza, by znaleźć komfortowy poziom.</p>

<h2>Dlaczego niektóre treści są głośniejsze od innych przy tej samej głośności</h2>

<p>Możesz zauważyć, że niektóre aplikacje są głośniejsze nawet przy tej samej głośności systemu. Spotify na jednym takcie wydaje się głośniejsze niż film na YouTube na jednym takcie. Wynika to z faktu, że każda aplikacja generuje dźwięk na różnych poziomach, a głośność systemu skaluje je proporcjonalnie.</p>

<p>Piosenka zmasterowana na 0 dB (maksymalnie) i podcast nagrany na -15 dB będą brzmiały zupełnie inaczej przy tej samej głośności systemu. Piosenka jest o 15 dB głośniejsza — co dla twoich uszu wydaje się mniej więcej trzykrotnie głośniejsze.</p>

<h2>Prawdziwe rozwiązanie: głośność w zależności od aplikacji dla precyzyjnej kontroli</h2>

<p>Skrót ćwierćkrokowy pomaga, ale nadal dostosowuje wszystkie aplikacje równomiernie. Jeśli Spotify na najniższym stopniu jest za głośne, a twoje połączenie na Zoomie na najniższym jest zbyt ciche, jesteś uwięziony.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Daje suwaki głośności w każdej aplikacji z precyzyjną kontrolą — każdy suwak przesuwa się w krokach 1% od 0% do 200%. Możesz jednocześnie ustawić Spotify na 5% i Zoom na 40%. Poziom kontroli jest znacznie bardziej precyzyjny niż w 16 etapach systemowych macOS.</p>

<img src="/apps/sounddial.png" alt="SoundDial precyzyjną kontrolę głośności w każdej aplikacji z przyrostami 1% na macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Do nocnego używania słuchawek:</p>
<ul>
  <li>Ustaw objętość systemu na umiarkowany poziom (40-50%)</li>
  <li>Użyj SoundDial, aby dopracować każdą aplikację dokładnie do pożądanego poziomu</li>
  <li>Spotify na 8% — ledwo słyszalna muzyka w tle</li>
  <li>Przeglądarka na 15% — wystarczająco cicho, by oglądać późno w nocy</li>
  <li>Powiadomienia wyciszone — nic dziwnego, głośne pingi</li>
</ul>

<p>Zapisz to jako profil "Nocny" i zastosuj jednym kliknięciem, gdy założysz słuchawki po godzinach.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Sprawdź SoundDial w Mac App Store</a> — jednorazowy zakup 14,99 €, bez subskrypcji macOS 14,2+.</p>
`,
  },
  "one-airpod-louder-than-the-other-fix": {
    slug: "one-airpod-louder-than-the-other-fix",
    title: "Czy jedna AirPods jest głośniejsza od drugiej? Każde wyjaśnienie każdej poprawki",
    description:
      "Lewy AirPod jest cichszy od prawego (albo odwrotnie). Oto każda przyczyna — od woskowiny usznej po ustawienia macOS równowagi — i jak ją naprawić.",
    date: "2026-05-10",
    readTime: "5 min read",
    content: `
<p>Jeden AirPod brzmi dobrze. Drugi jest wyraźnie cichszy. Muzyka wydaje się nie w centrum centra. Głosy brzmią, jakby dochodziły z jednej strony. To jedna z najczęstszych skarg na AirPods i zwykle daje się ją łatwo rozwiązać.</p>

<h2>1. Wyczyść AirPods</h2>

<p>Najczęstszą przyczyną jest sytuacja fizyczna: woskowina lub zanieczyszczenia częściowo blokują siatkę głośnika w jednym AirPodsie. Nawet cienka warstwa nagromadzenia może znacząco zmniejszyć objętość po tej stronie.</p>

<p><strong>Jak sprzątać:</strong></p>
<ul>
  <li>Użyj suchej, miękkiej szczoteczki (czysta szczoteczka do zębów) delikatnie szczotkując siatkę głośnika</li>
  <li>Jeśli chodzi o silikonowe końcówki AirPods Pro: zdejmij końcówkę i wyczyść zarówno końcówkę, jak i siatkę głośnika pod spodem</li>
  <li>Użyj suchej, wolnej od kłaczków ściereczki na zewnątrz</li>
  <li><strong>Nie używaj:</strong> Woda, alkohol, sprężone powietrze lub ostre przedmioty — mogą one uszkodzić siatkę głośnika lub popchnąć zanieczyszczenia głębiej</li>
</ul>

<p>Po wyczyszczeniu przetestuj oba AirPody. W większości przypadków problem rozwiązuje to natychmiast.</p>

<h2>2. Sprawdź balans dźwięku w macOS</h2>

<p>macOS ma suwak balansowania dźwięku w lewo-prawo, który może być przesunięty na bok:</p>

<ol>
  <li>Przejdź do <strong>Ustawienia systemowe → dostępność → dźwięku</strong></li>
  <li>Znajdź <strong>Równowaga</strong> suwak</li>
  <li>Upewnij się, że jest dokładnie wyśrodkowany między L a R</li>
</ol>

<p>Jeśli suwak został przesunięty na jedną stronę, to jest twoja winowajca. Wycentruj go, a objętość powinna być równa po obu stronach.</p>

<p>Sprawdź też <strong>Ustawienia systemu → dźwięk</strong> — niektóre wersje macOS mają również suwak balansowania w ustawieniach urządzenia wyjściowego.</p>

<h2>3. Zresetuj AirPods</h2>

<p>Jeśli czyszczenie i balans nie pomagają, spróbuj zresetować AirPods do stanu fabrycznego:</p>

<ol>
  <li>Włóż oba AirPods do etui ładowarki</li>
  <li>Zamknij pokrywę i poczekaj 30 sekund</li>
  <li>Otwórz pokrywę</li>
  <li>Naciśnij i przytrzymaj przycisk konfiguracji na tylnej części obudowy przez 15 sekund, aż kontrolka statusu zacznie migać na pomarańczowo, a potem na biało</li>
  <li>Ponownie sparuj AirPods z Mac (Ustawienia systemowe → Bluetooth)</li>
</ol>

<p>To resetuje każdą zapisaną kalibrację dźwięku i może naprawić nierównowagę głośności po stronie oprogramowania.</p>

<h2>4. Sprawdź Mono Audio</h2>

<p>Jeśli funkcja dostępności Mono Audio w macOS jest włączona, dźwięk stereo jest miksowany w jednym kanale i przesyłany równomiernie do obu AirPods. Chociaż nie powinno to powodować różnic w głośności, może zmienić brzmienie niektórych treści i sprawić, że jedna strona będzie wyglądać "inaczej".</p>

<p>Sprawdź: Ustawienia systemowe → Dostępność → Audio → upewnij się, że "Mono Audio" jest wyłączone (chyba że jest to konieczne).</p>

<h2>5. Zakłócenia Bluetooth</h2>

<p>AirPods komunikują się z twoimi Mac przez Bluetooth, a każdy AirPod komunikuje się także z drugim. Jeśli występują poważne zakłócenia Bluetooth (routery WiFi, huby USB 3.0, inne urządzenia Bluetooth), jeden AirPod może odbierać słabszy sygnał.</p>

<p><strong>Poprawka:</strong> Przesuń się bliżej Mac. Odłącz urządzenia Bluetooth, których nie używasz. Jeśli jesteś blisko huba USB 3.0, spróbuj go odsunąć — wiadomo, że USB 3.0 zakłóca Bluetooth 2.4 GHz.</p>

<h2>6. Problem sprzętowy</h2>

<p>Jeśli żadna z powyższych poprawek nie zadziała, jeden AirPod może mieć wadę sprzętową — uszkodzony sterownik głośnika lub uszkodzoną siatkę. Dzieje się to z czasem przy intensywnym użytkowaniu.</p>

<p><strong>Poprawka:</strong> Skontaktuj się z pomocą techniczną Apple lub odwiedź sklep Apple. Jeśli Twoje AirPods są objęte gwarancją lub AppleCare+, Apple wymieni uszkodzony AirPod. Indywidualne zamienniki AirPods są również dostępne do zakupu poza gwarancją.</p>

<h2>Lepsza równowaga dźwięku przy regulacji głośności w aplikacji</h2>

<p>Chociaż kontrola głośności w poszczególnych aplikacjach nie rozwiązuje sprzętowej nierównowagi między AirPods, rozwiązuje powiązany problem: gdy niektóre aplikacje są głośniejsze od innych w AirPods, może to wyolbrzymiać postrzeganie nierównowagi.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Pozwala ustawić każdą aplikację na stały poziom głośności. Gdy Spotify jest na 40%, Zoom na 100%, a Safari na 60%, dokładnie wiesz, czego się spodziewać po każdej aplikacji — żadnych nagłych skoków głośności, które sprawiają, że AirPod wydaje się głośniejszy, bo powiadomienie właśnie wybuchło na 100%.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Sprawdź SoundDial w Mac App Store</a> — jednorazowy zakup 14,99 €, bez subskrypcji macOS 14,2+.</p>
`,
  },
  "netflix-streaming-audio-too-quiet-mac": {
    slug: "netflix-streaming-audio-too-quiet-mac",
    title: "Netflix i streaming audio na Mac są zbyt ciche? Jak to naprawić",
    description:
      "Dialogi są ciche, po czym eksplozja wstrząsa salą. Oto jak poprawić poziom dźwięku strumieniowego na Mac — i zwiększyć ciche treści powyżej 100%.",
    date: "2026-05-17",
    readTime: "5 min read",
    content: `
<p>Oglądasz film na Netflixie. Dwie postacie rozmawiają — ledwo ich słyszysz. Podkręcasz głośność. Zaczyna się scena akcji. Eksplozje są ogłuszające. Szybko sięgasz po klawisz głośności. To najczęstsza skarga na streaming audio, a jest gorsza na wbudowanych głośnikach Mac.</p>

<p>Problemem nie jest twoja Mac. Tak masteruje się filmy i seriale — i fakt, że macOS nie daje narzędzi, by to naprawić.</p>

<h2>Dlaczego streaming audio ma gwałtowne wahania głośności</h2>

<p>Filmy i seriale są masterowane z wysokim poziomem <strong>Zakres dynamiczny</strong> — różnica między najcichszymi a najgłośniejszymi dźwiękami. W kinie z mocnymi głośnikami i subwooferem brzmi to niesamowicie. Szepty są intymne, eksplozje są instynktowne.</p>

<p>W 2-calowych głośnikach MacBooka ten zakres dynamiczny staje się problemem. Ciche części są poniżej tego, co małe głośniki są w stanie odtworzyć wyraźnie, podczas gdy głośniejsze elementy osiągają fizyczne granice głośnika. Ciągle regulujesz głośność — podkręcasz dźwięk dla dialogów, ściszając dla akcji.</p>

<h2>Poprawka 1: Włącz "Reduk głośnych dźwięków" w aplikacji streamingowej</h2>

<p>Niektóre serwisy streamingowe mają funkcję normalizacji głośności:</p>
<ul>
  <li><strong>Netflix:</strong> Podczas odtwarzania kliknij ikonę głośnika → sprawdź, czy jest opcja "Reduce Loud Sounds" (dostępna w przeglądarce i aplikacji natywnej)</li>
  <li><strong>Apple TV+:</strong> Ustawienia → dostępności → "Ogranicz głośne dźwięki"</li>
  <li><strong>Disney+:</strong> Obecnie nie ma dostępnego odpowiednika ustawienia</li>
  <li><strong>Amazon Prime Video:</strong> Funkcja "Dialogue Boost" (jeśli jest dostępna w tytule)</li>
</ul>

<p>Te funkcje kompresują zakres dynamiczny — sprawiając, że ciche dźwięki są głośniejsze, a głośniejsze cichsze. Efektem jest bardziej równomierna głośność, która lepiej działa na małych głośnikach i przy niskich poziomach odsłuchu.</p>

<h2>Poprawka 2: Sprawdź wzmacniacz dźwięku w Mac</h2>

<p>W niektórych modelach Mac macOS stosuje przetwarzanie dźwięku na wbudowanych głośnikach. Sprawdź Ustawienia Systemowe → Dźwięku, czy są jakieś opcje ulepszenia dla urządzenia wyjściowego. W modelach MacBook Pro 14" i 16" system głośnikowy ma przetwarzanie dźwięku przestrzennego, które może wpływać na postrzeganą głośność.</p>

<h2>Poprawka 3: Używaj przewodowych słuchawek</h2>

<p>Słuchawki całkowicie omijają problem rozmiaru głośnika. Nawet tanie przewodowe słuchawki potrafią wyraźnie odtwarzać cichą rozmowę, ponieważ przetwornik jest tuż obok błony bębenkowej. Zakres dynamiczny, który jest problemem w malutkich głośnikach, staje się zaletą w słuchawkach.</p>

<h2>Poprawka 4: Zwiększ poziom dźwięku ze strumienia powyżej 100%</h2>

<p>Jeśli treść jest po prostu zbyt cicha — nawet przy włączonej normalizacji i maksymalnej głośności — potrzebujesz wzmocnienia poza tym, co macOS zapewnia.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> pozwala ci wzmocnić dowolną aplikację do <strong>200%</strong>. Jeśli Safari lub aplikacja Netflix są zbyt ciche, przeciągnij suwak powyżej 100%. Dźwięk jest wzmacniany zanim dotrze do głośników, co skutecznie podwaja maksymalną głośność tylko w tej aplikacji.</p>

<img src="/apps/sounddial.png" alt="SoundDial podbijanie dźwięku Netflix do 180% na Mac dla wyraźniejszych dialogów i strumieniowania dźwięku" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Jest to szczególnie przydatne, gdy:</p>
<ul>
  <li>Oglądanie cichego obcego filmu, gdzie dialogi są ciche</li>
  <li>Streamowanie starszych treści zmasterowanych na niższych poziomach</li>
  <li>Używanie głośników MacBooka w hałaśliwym środowisku</li>
  <li>Jedna usługa streamingowa jest znacznie cichsza od drugiej</li>
</ul>

<p>A ponieważ SoundDial steruje każdą aplikacją osobno, podniesienie Netflixa do 150% nie sprawia, że Spotify czy Slack są głośniejsze. Każda aplikacja pozostaje na swoim poziomie.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Sprawdź SoundDial w Mac App Store</a> — jednorazowy zakup 14,99 €, bez subskrypcji macOS 14,2+.</p>
`,
  },
  "mac-audio-setup-remote-work": {
    slug: "mac-audio-setup-remote-work",
    title: "Mac Ustawienia audio do pracy zdalnej: Kompletny przewodnik",
    description:
      "Połączenia, muzyka, powiadomienia i czas na skupienie — wszystko w jednym Mac. Oto jak ustawić dźwięk, żeby nic nie walczyło o Twoją uwagę.",
    date: "2026-05-12",
    readTime: "8 min read",
    content: `
<p>Praca zdalna na Mac oznacza, że komputer jest jednocześnie telefonem biurowym, radiem, centrum powiadomień i głęboką stacją pracy. To cztery zasadniczo różne tryby audio i macOS traktuje je wszystkie tak samo: jeden suwak głośności, wszystko na tym samym poziomie, brak możliwości ustalania priorytetów.</p>

<p>Ten przewodnik pokazuje, jak ustawić dźwięk Mac do pracy zdalnej, aby połączenia były wyraźne, muzyka obecna, ale nie rozpraszająca, powiadomienia subtelne, a czas skupienia był naprawdę cichy.</p>

<h2>Cztery tryby audio pracy zdalnej</h2>

<h3>1. Tryb spotkania</h3>
<p>Jesteś na rozmowie Zoom lub Teams. Decyzja musi być krystalicznie jasna. Muzyka powinna być cicha lub ledwo słyszalna. Luz nie powinien dzwonić ci do ucha.</p>

<h3>2. Tryb ostrości</h3>
<p>Robisz głęboką pracę. Muzyka w tle na niskim poziomie pomaga się skoncentrować. Powiadomienia powinny być ledwo zauważalne — na tyle obecne, by zauważyć pilną wiadomość, na tyle ciche, by nie przerywały przepływu.</p>

<h3>3. Tryb współpracy</h3>
<p>Jesteś dostępny na wiadomości, monitorowanie Slacka, może oglądanie filmu szkoleniowego. Wszystko może być na umiarkowanym poziomie. Powiadomienia na normalnej głośności.</p>

<h3>4. Tryb przerwy</h3>
<p>Muzyka na pełną głośność. YouTube na pełnych głosach. Powiadomienia mogą poczekać.</p>

<h2>Konfiguracja sprzętu</h2>

<h3>Pytanie o mikrofon</h3>
<p>Jeśli używasz AirPods do rozmów, rozważ osobny mikrofon. Gdy AirPods są używane zarówno jako mikrofon, jak i głośniki, macOS przełącza się na niższej jakości kodek Bluetooth SCO, który obniża zarówno jakość dźwięku, jak i głośność. Używanie wbudowanego mikrofonu Mac (lub USB micha) przy jednoczesnym zachowaniu AirPods jako wyjścia całkowicie tego unika.</p>

<p>Dla najlepszej jakości rozmów: mikrofon USB lub słuchawki z wbudowanym mikrofonem. Blue Yeti, Elgato Wave, a nawet zwykły zestaw słuchawkowy USB będą brzmiały znacznie lepiej niż mikrofon AirPods dla Twoich współpracowników.</p>

<h3>Urządzenia wyjściowe</h3>
<p>Wielu pracowników zdalnych korzysta z dwóch urządzeń wyjściowych:</p>
<ul>
  <li><strong>Słuchawki</strong> Do rozmów — prywatność, brak echa, czysty dźwięk</li>
  <li><strong>Prelegenci</strong> Do muzyki w czasie nieobecnym — wypełnia pokój, jest wygodniej przez dłuższy czas</li>
</ul>

<p>Użyj opcji – kliknij ikonę dźwięku w pasku menu, aby szybko przełączać się między urządzeniami. Albo użyj wbudowanego przełącznika urządzeń SoundDial, który umieszcza urządzenia wyjściowe tuż obok regulatorów głośności.</p>

<h2>Konfiguracja oprogramowania</h2>

<h3>Zarządzanie powiadomieniami</h3>
<p>Przejdź do ustawień systemu → powiadomień. Dla każdej aplikacji zdecyduj, czy potrzebujesz powiadomień dźwiękowych:</p>
<ul>
  <li><strong>Utrzymuj dźwięki włączone:</strong> Slack (jeśli jesteś responsywny), Kalendarz (spotkania), Wiadomości</li>
  <li><strong>Wyłącz dźwięki:</strong> Poczta (sprawdź swój grafik), wiadomości, aplikacje społecznościowe</li>
</ul>

<p>Zmniejsza to liczbę aplikacji wydarzyających niespodziewane dźwięki, ale nie daje kontroli głośności — tylko włącz/wyłącz.</p>

<h3>Tryby ostrości</h3>
<p>Stwórz co najmniej dwa tryby ostrości w ustawieniach systemowych → Focus:</p>
<ul>
  <li><strong>"Spotkanie"</strong> — wycisz wszystkie powiadomienia oprócz aplikacji kalendarza</li>
  <li><strong>"Skup się na pracy"</strong> — pozwól na powiadomienia od wiadomości prywatnych na Slacku i od menedżera, wycisz wszystko inne</li>
</ul>

<p>Tryby ostrości obsługują tłumienie powiadomień. Do kontroli głośności audio potrzebujesz czegoś więcej.</p>

<h2>Brakujący element: kontrola głośności w zależności od aplikacji</h2>

<p>Sterowanie trybami ostrości <em>która</em> powiadomienia docierają do nich, ale nie <em>jak głośno</em> wszystko jest. Wciąż masz jeden suwak głośności dla wszystkiego. Jeśli chcesz Slacka na 15%, Spotify na 35% i Zooma na 100% — macOS tego nie da się zrobić.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> wypełnia tę lukę, nadając każdej aplikacji własny suwak głośności. Ustaw dźwięk do pracy zdalnej dokładnie tak, jak chcesz:</p>

<img src="/apps/sounddial.png" alt="SoundDial konfiguracja audio do pracy zdalnej — różne poziomy głośności dla Zooma, Spotify i Slacka na macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Profile zapisu dla każdego trybu</h3>

<p><strong>Profil spotkania:</strong></p>
<ul>
  <li>Zoom/Drużyny: 100%</li>
  <li>Spotify: wyciszony</li>
  <li>Luz: wyciszony</li>
  <li>Przeglądarka: wyciszona</li>
</ul>

<p><strong>Profil pracy na koncentracji:</strong></p>
<ul>
  <li>Spotify: 30%</li>
  <li>Luz: 10%</li>
  <li>Zoom: 80% (na wypadek, gdyby ktoś zadzwonił)</li>
  <li>Przeglądarka: 40%</li>
</ul>

<p><strong>Profil współpracy:</strong></p>
<ul>
  <li>Wszystko na poziomie 50-70%</li>
  <li>Luz: 30%</li>
</ul>

<p>Przełączaj się między profilami jednym kliknięciem. Gdy połączenie się zaczyna, automatyczne duckowanie SoundDial automatycznie obniża wszystko oprócz aplikacji do połączeń. Po zakończeniu przywraca się poziom profilu.</p>

<h2>Codzienny przepływ pracy</h2>

<ol>
  <li>Rozpocznij pracę → zastosuj profil "Skup się na pracy"</li>
  <li>Dołącz do spotkania→ automatyczne duckowanie automatycznie je obsługuje (lub zastosuj profil "Spotkanie")</li>
  <li>Spotkanie kończy się → tomy wracają do poziomu Focus Work</li>
  <li>Przerwa na lunch → nałożenie profilu "Przerwa", podkręcenie muzyki</li>
  <li>Popołudniowa głęboka praca → powrót do pracy skupionej</li>
</ol>

<p>Całkowity wysiłek ręczny: dwa lub trzy kliknięcia profilowe dziennie. Wszystko inne jest automatyczne.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Sprawdź SoundDial w Mac App Store</a> — jednorazowy zakup 14,99 €, bez subskrypcji macOS 14,2+.</p>
`,
  },
  "stop-browser-tabs-auto-playing-audio-mac": {
    slug: "stop-browser-tabs-auto-playing-audio-mac",
    title: "Jak zatrzymać automatyczne odtwarzanie dźwięku w kartach przeglądarki na Mac",
    description:
      "Zakładka w tle zaczyna nagle odtwarzać dźwięk. Reklamy, filmy, serwisy informacyjne — oto jak wyciszyć nieuczciwe karty i kontrolować dźwięk w przeglądarce na macOS.",
    date: "2026-05-14",
    readTime: "5 min read",
    content: `
<p>Masz dwadzieścia otwartych zakładek. Pracujesz w jednym z nich. Nagle — dźwięk zaczyna się odtwarzać skądś. Reklama wideo. Automatycznie odtwarzany klip wiadomości. Zakładka, którą otworzyłaś godzinę temu, która zdecydowała, że teraz jest czas, by zacząć robić hałas. Gorączkowo szukasz, która to zakładka, klikając po kolei.</p>

<p>Automatyczne odtwarzanie dźwięku w zakładkach przeglądarki to jedno z najbardziej irytujących doświadczeń na każdym komputerze, a na Mac jest gorsze, bo nie macOS możliwości wyciszenia konkretnej aplikacji (nie mówiąc już o konkretnej karcie) bez wyciszania wszystkiego.</p>

<h2>Wyłącz automatyczne odtwarzanie w Safari</h2>

<p>Safari ma najlepsze wbudowane sterowanie autoplay spośród wszystkich przeglądarek:</p>

<ol>
  <li>Otwórz Safari → Ustawieniach (⌘,) → zakładce Strony internetowe</li>
  <li>Wybierz "Auto-Play" w lewym pasku bocznym</li>
  <li>Ustaw domyślne na dole na "Nigdy nie odtwarzaj automatycznie" lub "Zatrzymaj media z dźwiękiem"</li>
</ol>

<p>"Stop Media with Sound" to najlepsza opcja — blokuje filmy odtwarzające się automatycznie z dźwiękiem, ale pozwala na wyciszone automatyczne odtwarzanie (co wiele stron wykorzystuje do dekoracyjnych filmów w tle). "Nigdy nie odtwarzaj auto" blokuje wszystko.</p>

<p>Możesz też skonfigurować ustawienia dla każdej lokalizacji w tym samym panelu, jeśli chcesz pozwolić na automatyczne odtwarzanie na konkretnych stronach, takich jak YouTube czy Netflix.</p>

<h2>Wyłącz automatyczne odtwarzanie w Chrome</h2>

<p>Automatyczne sterowanie Chrome jest mniej szczegółowe:</p>

<ol>
  <li>Przejdź do <code>chrome://settings/content/sound</code></li>
  <li>Przełącznik "Strony mogą odtwarzać dźwięk", aby określić domyślne zachowanie</li>
  <li>Dodaj konkretne miejsca do listy "Wyciszaj", aby trwale je wyciszyć</li>
</ol>

<p>Chrome pozwala także wyciszyć poszczególne karty: kliknij prawym przyciskiem myszy na zakładkę → "Wycisz stronę". To wycisza cały dźwięk z tej strony, dopóki go nie odciszysz.</p>

<h2>Szybko wycisz zakładkę</h2>

<p>Zarówno Safari, jak i Chrome pokazują ikonę głośnika na zakładkach produkujących dźwięk. W Safari kliknij ikonę głośnika w zakładce, aby wyciszyć go. W Chrome kliknij prawym przyciskiem myszy na zakładkę i wybierz "Wycisz stronę".</p>

<p>To działa na jedną zakładkę naraz, ale jeśli masz kilka głośnych kart, klikasz je po kolei.</p>

<h2>Szerszy problem: dźwięk przeglądarki kontra wszystko inne</h2>

<p>Nawet przy wyłączonym autoplayu i wyciszonych kartach, możesz nadal chcieć kontrolować, jak głośna jest przeglądarka w porównaniu do innych aplikacji. Może oglądasz tutorial na YouTube podczas rozmowy na Zoomie — chcesz mieć samouczek na 30%, a Zoom na 100%. Albo odtwarzasz muzykę w tle w zakładce przeglądarki i konkuruje ona z twoim Spotify.</p>

<p>macOS traktuje całą przeglądarkę jak jedną aplikację z jednym woluminem. Nie da się uczynić jednej karty cichszą od drugiej na poziomie systemowym. Ale ty <em>czy</em> Spraw, by cała przeglądarka była cichsza niż inne aplikacje.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Nadaje Twojej przeglądarce własny suwak głośności, niezależny od innych aplikacji. Obniż Safari do 30%, a Zoom pozostaje na 100%. Wycisz Chrome całkowicie, zostawiając odtwarzane Spotify. Jedno kliknięcie.</p>

<img src="/apps/sounddial.png" alt="SoundDial kontrolować głośność przeglądarki niezależnie od innych aplikacji na macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>To najszybszy sposób na niespodziewaną kartę automatycznie odtwarzaną: zamiast szukać, która karta wydaje dźwięk, kliknij SoundDial w pasku menu i wycisz przeglądarkę. Wszystko inne gra dalej. Gdy znajdziesz i zamkniesz problematyczną kartę, odcisz przeglądarkę i jej wolumin wróci do poprzedniego stanu.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Sprawdź SoundDial w Mac App Store</a> — jednorazowy zakup 14,99 €, bez subskrypcji macOS 14,2+.</p>
`,
  },
  "discord-volume-too-loud-mac": {
    slug: "discord-volume-too-loud-mac",
    title: "Czy głośność Discorda jest zbyt głośna (lub cicha) na Mac? Jak to naprawić",
    description:
      "Discord rozbrzmiewa przez twoją grę albo jest zbyt cichy, by usłyszeć współgraczy. Oto jak kontrolować głośność Discorda niezależnie od wszystkiego innego na macOS.",
    date: "2026-05-21",
    readTime: "5 min read",
    content: `
<p>Discord ma dwa problemy z głośnością na Mac. Albo jest za głośno — dźwięki powiadomień przebijają się przez grę i muzykę — albo jest zbyt cicho — nie słyszysz swoich kolegów z drużyny przez dźwięk gry. Problem w tym, że macOS nie pozwala samodzielnie regulować głośności Discorda. Jest zablokowany na tym samym suwaku systemowym co wszystko inne.</p>

<h2>Wbudowane regulatory głośności w Discordzie</h2>

<p>Discord ma kilka wewnętrznych ustawień głośności. Zanim zaczniesz szukać zewnętrznych rozwiązań, upewnij się, że są one skonfigurowane:</p>

<h3>Objętość produkcji</h3>
<p>Przejdź do ustawień Discorda → (ikona trybika) → Voice & Video. Suwak "Output Volume" kontroluje, jak głośno Discord brzmi dla ciebie. Jeśli Discord jest zbyt cichy, upewnij się, że jest na 100%. Jeśli jest za głośno, ścisz tutaj.</p>

<p><strong>Ograniczenia:</strong> To steruje wewnętrznym miksem Discorda, ale nie zmienia głośności Discorda <em>w porównaniu do innych aplikacji</em>. Jeśli twoja gra jest na 80% systemowej głośności, a Discord też na 80%, regulacja wewnętrznego suwaka Discorda zmienia balans — ale nadal jesteś ograniczony do jednej systemowej głośności dla wszystkiego.</p>

<h3>Woluminacja na użytkownika</h3>
<p>Kliknij prawym przyciskiem myszy dowolnego użytkownika na kanale głosowym → "User Volume". Możesz dostosować indywidualnych użytkowników od 0% do 200%. To przydatne, jeśli jedna osoba jest głośniejsza lub cichsza od innych, ale nie rozwiązuje ogólnej równowagi między Discordem a innymi aplikacjami.</p>

<h3>Głośność powiadomień</h3>
<p>Ustawienia → Discord → powiadomienia. Możesz wyłączyć konkretne dźwięki powiadomień (wiadomość, ogłuszający, wyciszona, dołącz/odejdź) indywidualnie. Zmniejsza to liczbę zakłócających dźwięków, ale nie pozwala na ich ściszenie — wystarczy je włączyć lub wyłączyć.</p>

<h2>Prawdziwy problem: balans głośności na poziomie systemu</h2>

<p>Wewnętrzne sterowanie Discorda dostosowuje jego własny miks. Ale prawdziwym problemem jest równowaga między Discordem a wszystkim innym na twoim Mac: twoją grą, muzyką, przeglądarką. macOS daje ci jeden suwak dla wszystkich.</p>

<p>Aby dostosować głośność Discorda względem gry, potrzebujesz regulacji głośności w każdej aplikacji — czego macOS nie zapewnia natywnie.</p>

<h2>Napraw to SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Daje Discordowi własny suwak głośności w pasku menu, niezależny od innych aplikacji. Ustaw Discord dokładnie na poziom, jaki chcesz — 100% dla wyraźnego czatu głosowego, 40% dla subtelnego tła lub całkowicie wyciszony — bez dotykania gry, muzyki czy czegokolwiek innego.</p>

<img src="/apps/sounddial.png" alt="SoundDial kontrolować głośność Discorda niezależnie od gry i muzyki na macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Typowe ustawienia</h3>

<p><strong>Granie na Discordzie:</strong></p>
<ul>
  <li>Discord: 100% (zawsze wyraźnie słyszę członków drużyny)</li>
  <li>Gra: 40% (immersyjna, ale nie przytłaczająca)</li>
  <li>Spotify: 15% (subtelna muzyka w tle)</li>
</ul>

<p><strong>Spędzanie czasu na czacie głosowym:</strong></p>
<ul>
  <li>Discord: 80%</li>
  <li>Przeglądarka/YouTube: 60%</li>
  <li>Wszystko inne: normalne</li>
</ul>

<p><strong>Praca skupienia (Discord w tle):</strong></p>
<ul>
  <li>Discord: wyciszony lub 10%</li>
  <li>Spotify: 50%</li>
  <li>Slack: 15%</li>
</ul>

<p>Zapisz każdy jako <strong>Profil objętości</strong> Włącz SoundDial i przełącz jednym kliknięciem. Nie trzeba było zmieniać sześciu suwaków za każdym razem, gdy zmieniasz aktywność.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Sprawdź SoundDial w Mac App Store</a> — jednorazowy zakup 14,99 €, bez subskrypcji macOS 14,2+.</p>
`,
  },
  "switch-audio-output-quickly-mac": {
    slug: "switch-audio-output-quickly-mac",
    title: "Jak szybko zmienić wyjście audio na Mac (bez grzebania w ustawieniach)",
    description:
      "Przełączanie między głośnikami, słuchawkami i monitorami na Mac wymaga zbyt wielu kliknięć. Oto szybsze sposoby na natychmiastową zmianę urządzenia audio na wyjściu.",
    date: "2026-05-19",
    readTime: "5 min read",
    content: `
<p>Odłączasz słuchawki i chcesz, żeby dźwięk trafiał do głośników. Albo podłączasz AirPods i macOS wybiera złe urządzenie. Albo wchodzisz do sali konferencyjnej i musisz przełączyć się na prelegenta konferencyjnego. Za każdym razem to: Ustawienia systemowe → Dźwięk → Wyjście → przewiń → kliknij. Za dużo kliknięć, żeby coś, co powinno wystarczyć.</p>

<p>Oto wszystkie sposoby na szybsze przełączanie się na dźwięk na Mac — od wbudowanych skrótów po narzędzia na pasku menu, które całkowicie eliminują klikanie.</p>

<h2>Metoda 1: Kliknij ikonę głośności</h2>

<p>To najszybsza metoda wbudowana i większość ludzi o niej nie wie.</p>

<p>Zatrzymaj <strong>Opcja (⌥)</strong> I kliknij ikonę głośności/dźwięku w pasku menu. Zamiast zwykłego suwaka głośności, pojawia się lista wszystkich dostępnych urządzeń wyjściowych. Kliknij ten, który chcesz. Gotowe.</p>

<p>Jeśli nie widzisz ikony dźwięku w pasku menu, włącz ją: Ustawienia systemowe → Centrum sterowania → dźwięk → wybierz "Zawsze pokaż w pasku menu".</p>

<p><strong>Ograniczenia:</strong> Pokazuje tylko urządzenia wyjściowe — nie możesz regulować głośności w zależności od aplikacji ani zobaczyć, co aktualnie odtwarza w tym menu.</p>

<h2>Metoda 2: Centrum Sterowania</h2>

<p>Kliknij ikonę Centrum sterowania (ikonę dwóch przełączników) w pasku menu → sekcję Dźwięk → kliknij aktualną nazwę urządzenia, aby zobaczyć wszystkie dostępne wyjścia.</p>

<p><strong>Ograniczenia:</strong> To trzy kliknięcia zamiast jednego. Trochę wolniej niż kliknięcie ikony głośności w opcję.</p>

<h2>Metoda 3: Skrót ustawień systemowych</h2>

<p>Możesz przypiąć Dźwięk do najwyższego poziomu ustawień systemu, ale nadal trzeba przejść do zakładki Wyjście i wybrać urządzenie. Nie szybko.</p>

<h2>Metoda 4: Skrót klawiaturowy (z konfiguracją)</h2>

<p>macOS nie ma wbudowanego skrótu klawiaturowego do przełączania urządzeń audio. Możesz jednak stworzyć taki za pomocą Automatora lub Skrótów:</p>
<ol>
  <li>Otwórz aplikację Shortcuts</li>
  <li>Stwórz nowy skrót, który uruchamia skrypt powłoki: <code>SwitchAudioSource -s "Nazwa urządzenia"</code> (wymaga <code>SwitchAudio-OSX</code> Narzędzie wiersza poleceń z Homebrew)</li>
  <li>Przypisz skrót klawiaturowy do skrótu</li>
</ol>
<p>To działa, ale wymaga homebrew, narzędzia wiersza poleceń i ręcznej konfiguracji dla każdego urządzenia. Dla większości użytkowników to niepraktyczne.</p>

<h2>Metoda 5: wbudowany przełącznik urządzeń SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Zawiera wybieracz urządzeń wyjściowych bezpośrednio w wyskakującym panelu menu — obok suwaków głośności w poszczególnych aplikacjach. Jedno kliknięcie, by otworzyć SoundDial, drugie, by zmienić urządzenie. Nie trzeba grzebać w ustawieniach systemu.</p>

<img src="/apps/sounddial.png" alt="SoundDial z przełączaniem urządzeń audio wyjściowych i regulacją głośności w zależności od aplikacji w jednym panelu menu" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Zaletą przełączania urządzeń wewnątrz SoundDial: możesz przełączać wyjście <em>oraz</em> Dostosowuj głośność w poszczególnych aplikacjach w tym samym panelu. Przełącz się na AirPods i natychmiast wyłącz Spotify, wzmacniając rozmowę — wszystko to bez opuszczania popovera.</p>

<p>W połączeniu z SoundDial's <strong>Pamięć woluminowa</strong> każde urządzenie wyjściowe może zapamiętywać własne poziomy głośności w aplikacji. Przełącz na głośniki i balansuje głośność twoich "głośników". Przełącz się na słuchawki i równowaga "słuchawki" się obowiązuje. Nie trzeba było ręcznie regulować.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Sprawdź SoundDial w Mac App Store</a> — jednorazowy zakup 14,99 €, bez subskrypcji macOS 14,2+.</p>
`,
  },
  "fix-audio-crackling-popping-mac": {
    slug: "fix-audio-crackling-popping-mac",
    title: "Napraw trzaski i trzaski dźwięku na Mac: Kompletny przewodnik",
    description:
      "Dźwięk twojego Mac trzaska, trzaska lub zacina się — podczas muzyki, rozmów lub odtwarzania wideo. Oto wszystkie znane przyczyny i rozwiązania macOS błędów dźwiękowych.",
    date: "2026-05-16",
    readTime: "8 min read",
    content: `
<p>Słuchasz muzyki i słyszysz "p" dźwięk. Potem trzeszcz. Potem zacinanie się, podczas którego dźwięk na ułamek sekundy się przerywa i wraca. To nie jest piosenka — to twoja Mac. Trzaski dźwiękowe na macOS są irytująco powszechne i mają co najmniej sześć różnych przyczyn.</p>

<p>Ten przewodnik omawia wszystkie znane przyczyny trzaskania, trzaskania i zacinania się dźwięku na Mac, od poprawek programowych po jeden sprzętowy problem, o którym powinieneś wiedzieć.</p>

<h2>1. Restart Core Audio (szybkie rozwiązanie)</h2>

<p>Najskuteczniejszym rozwiązaniem nagłego trzaskania dźwięku jest restart demona dźwięku macOS. Otwórz terminal i biegnij:</p>
<p><code>Sudo Killall Coreaudiod</code></p>

<p>Dźwięk przerywa się na sekundę i potem się restartuje. W wielu przypadkach trzaski ustępują natychmiast. To działa, ponieważ coreaudiod — proces zarządzający wszystkimi dźwiękami na macOS — może wejść w stan uszkodzenia po cyklach uśpienia/pobudzenia, połączeniach z urządzeniami Bluetooth lub awariach aplikacji.</p>

<p>Jeśli to rozwiąże problem, to trzaski były spowodowane tymczasowym problemem z demonem. Jeśli problem wraca regularnie, czytaj dalej, aby znaleźć trwałe rozwiązania.</p>

<h2>2. Przeciążenie CPU</h2>

<p>Trzaski dźwięku często korelują z wysokim obciążeniem CPU. Gdy procesor twojego Mac jest maksymalnie obciążony, nie jest w stanie wystarczająco szybko przetwarzać buforów audio, co powoduje przerwy przypominające trzaski i trzaski.</p>

<p><strong>Sprawdzone:</strong> Otwórz Monitor aktywności (Aplikacje → Narzędzia) i spójrz na zakładkę CPU. Jeśli widzisz stale wysokie zużycie CPU (80%+), to prawdopodobnie jest przyczyną.</p>

<p><strong>Poprawka:</strong> Zamykaj niepotrzebne aplikacje, zwłaszcza te wymagające dużych zasobów, jak przeglądarki z wieloma kartami, edytory wideo czy maszyny wirtualne. Jeśli dany proces zużywa nadmierne obciążenie CPU, zastanów się, czy zachowuje się normalnie, czy trzeba go restartować.</p>

<h2>3. Problemy z dźwiękiem Bluetooth</h2>

<p>Bluetooth jest najczęstszym źródłem trzasków wśród bezprzewodowych słuchawek i głośników. Kilka czynników może to powodować:</p>

<ul>
  <li><strong>Zakłócenia:</strong> WiFi, urządzenia USB 3.0 i inne urządzenia Bluetooth mogą zakłócać połączenie audio. Spróbuj zbliżyć się do Mac lub usunąć źródła zakłóceń.</li>
  <li><strong>Przełączanie kodekiem:</strong> Gdy aplikacja aktywuje mikrofon, macOS przełącza się z kodeka AAC na SCO. To przejście może powodować krótki trzask lub trzask.</li>
  <li><strong>Przeciążenie Bluetooth:</strong> Jeśli masz podłączonych jednocześnie wiele urządzeń Bluetooth, radio może mieć problemy. Odłącz urządzenia, których nie używasz.</li>
</ul>

<p><strong>Poprawka:</strong> Zresetuj Bluetooth, przytrzymując Shift+Option, klikając ikonę Bluetooth w pasku menu i wybierając "Zresetuj moduł Bluetooth" (jeśli jest dostępne). Alternatywnie, usuń urządzenie z ustawień Bluetooth i ponownie je sparuj.</p>

<h2>4. Niedopasowanie częstotliwości próbkowania</h2>

<p>Jeśli urządzenie wyjściowe audio pracuje na innej częstotliwości próbkowania niż odtwarzane nagranie, macOS musi próbkować w czasie rzeczywistym. To ponowne próbkowanie może wprowadzać artefakty — zwłaszcza przy niższych rozmiarach buforów.</p>

<p><strong>Sprawdzone:</strong> Otwórz Audio MIDI Setup (Aplikacje → Narzędzia), wybierz urządzenie wyjściowe i sprawdź częstotliwość próbkowania. Typowe częstotliwości to 44,1 kHz (jakość CD) oraz 48 kHz (standard wideo/streaming).</p>

<p><strong>Poprawka:</strong> Ustaw częstotliwość próbkowania tak, aby odpowiadała twojemu najczęściej używanemu przypadku. Do muzyki: 44,1 kHz. Do wideo/streamingu: 48 kHz. Jeśli używasz interfejsu audio USB, sprawdź jego dokumentację w celu uzyskania optymalnej częstotliwości próbkowania i rozmiaru bufora.</p>

<h2>5. Problemy z buforem urządzenia audio USB</h2>

<p>Zewnętrzne urządzenia audio USB (DAC-y, interfejsy audio, słuchawki USB) mogą trzaskać, jeśli rozmiar bufora jest zbyt mały do aktualnego obciążenia systemu.</p>

<p><strong>Poprawka:</strong> W Audio MIDI Setup wybierz urządzenie USB i spróbuj zwiększyć rozmiar bufora (jeśli taka opcja jest dostępna). W aplikacjach audio takich jak Logic, Ableton czy GarageBand zwiększ rozmiar bufora I/O w preferencjach audio. Większy bufor oznacza nieco większe opóźnienia, ale mniej błędów dźwiękowych.</p>

<h2>6. macOS regresja aktualizacji</h2>

<p>Niektóre macOS aktualizacje wprowadzają błędy dźwiękowe. To zdarzało się niemal przy każdej dużej macOS premierze — Catalina, Big Sur, Monterey, Ventura, Sonoma, Sequoia i Tahoe również zgłaszały trzaski dźwiękowe po premierze.</p>

<p><strong>Poprawka:</strong> Sprawdź, czy Apple wydało aktualizację punktową (np. 15.0.1, 15.1), która rozwiązuje problemy z dźwiękiem. Możesz też sprawdzić fora deweloperskie Apple i Reddit, czy inni użytkownicy mają ten sam problem. Jeśli to znany błąd macOS, poprawka zwykle pojawia się w ciągu jednego lub dwóch wydań punktowych.</p>

<h2>7. Rozszerzenia jądra lub wtyczki audio</h2>

<p>Sterowniki audio firm trzecich, wirtualne urządzenia audio lub wtyczki audio mogą kolidować z natywnym stosem audio macOS. Jest to szczególnie powszechne w starszym oprogramowaniu audio wykorzystującym rozszerzenia jądra (kexty), które były wycofane z nowszych macOS wersji.</p>

<p><strong>Poprawka:</strong> Sprawdź, czy masz zainstalowane oprogramowanie audio firm trzecich: Soundflower, BlackHole, Loopback lub starsze sterowniki interfejsu audio. Spróbuj je tymczasowo wyłączyć lub odinstalować, żeby zobaczyć, czy trzaski ustaną. Jeśli tak, sprawdź zaktualizowane wersje kompatybilne z twoją macOS wersją.</p>

<h2>Zarządzanie jakością dźwięku za pomocą SoundDial</h2>

<p>Chociaż SoundDial nie rozwiązuje bezpośrednio problemów sprzętowych ani systemowych, może pomóc zarządzać dźwiękiem w sposób zmniejszający problem:</p>

<ul>
  <li><strong>Ogranicz konkurencyjne źródła dźwięku:</strong> Użyj SoundDial, aby wyciszyć aplikacje, których nie używasz aktywnie. Mniej jednoczesnych strumieni audio oznacza mniejsze obciążenie CPU przy przetwarzaniu dźwięku.</li>
  <li><strong>Boost głośności zamiast maksymalnego systemu:</strong> Jeśli masz systemową głośność na 100% i nadal podsycasz aplikacje, ścieżka dźwiękowa działa na granicy możliwości. Zastosowanie <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Zwiększenie liczby aplikacji na aplikację, by wzmocnić konkretne aplikacje do 200%, jednocześnie utrzymując głośność systemu na komfortowym poziomie 70-80%. Może to zmniejszyć zniekształcenia na poziomie wyjściowym systemu.</li>
  <li><strong>Szybkie przełączanie urządzeń wyjściowych:</strong> Jeśli trzaski są związane z konkretnym urządzeniem wyjściowym, SoundDial pozwala przełączać urządzenia z panelu menu bez konieczności przeglądania ustawień systemowych.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Sprawdź SoundDial w Mac App Store</a> — jednorazowy zakup 14,99 €, bez subskrypcji macOS 14,2+.</p>
`,
  },
  "teams-volume-too-low-mac": {
    slug: "teams-volume-too-low-mac",
    title: "Czy wolulet Microsoft Teams jest zbyt niski na Mac? Każda poprawka, która działa",
    description:
      "Ledwo słyszysz ludzi na Teams nawet przy maksymalnej głośności? Oto każdy powód — od ustawień Teams po kodeki Bluetooth — oraz jak poprawić dźwięk rozmów powyżej 100%.",
    date: "2026-06-04",
    readTime: "7 min read",
    content: `
<p>Jesteś na spotkaniu Teams. Twój współpracownik prezentuje się, ale jego głos brzmi, jakby dochodził przez puszkę z trzech pokoi dalej. Twój Mac objętość jest na 100%. Wolulet zespołów jest na 100%. Znalazłeś wszystko, co udało ci się znaleźć. Wciąż zbyt cicho.</p>

<p>Niska głośność w Microsoft Teams to jedna z najczęstszych skarg Mac dźwięku w środowiskach korporacyjnych. Przyczyny różnią się od Zooma, a niektóre poprawki są specyficzne dla Teams. Przejdźmy przez wszystkie z nich.</p>

<h2>1. Sprawdź ustawienia audio w Teams</h2>

<p>Kliknij ikonę profilu w Teams → Ustawieniach → Urządzenia (lub Ustawienia → Urządzenia audio w nowym Teams).</p>
<ul>
  <li>Upewnij się, że masz właściwe <strong>Przewodniczący</strong> urządzenie jest wybierane — nie jest to odłączony monitor ani nieaktywne urządzenie Bluetooth</li>
  <li>Użyj funkcji "Wykonaj połączenie testowe", aby sprawdzić, czy dźwięk działa na rozsądnej głośności</li>
  <li>Sprawdź, czy "Tłumienie szumów" nie jest ustawione na "Wysoki" — agresywne tłumienie może zmniejszyć odczuwalną głośność głosu</li>
</ul>

<h2>2. Nowe drużyny kontra klasyczne drużyny</h2>

<p>Microsoft zastąpił "Classic Teams" "New Teams" (zbudowanym na innym frameworku). Nowa wersja inaczej obsługuje dźwięk. Jeśli niedawno się przeniosłeś:</p>
<ul>
  <li>Ustawienia urządzenia audio mogły się nie przenieść — sprawdź ponownie wybór głośnika</li>
  <li>Nowy Teams wykorzystuje przetwarzanie dźwięku WebRTC, które może zachowywać się inaczej niż klasyczna wersja</li>
  <li>Spróbuj wyłączyć "Tryb muzyczny", jeśli jest włączony (Ustawienia → urządzenia audio) — zmienia to sposób, w jaki Teams przetwarza przychodzący dźwięk</li>
</ul>

<h2>3. Przełączanie kodeków Bluetooth</h2>

<p>Jeśli używasz AirPods lub słuchawek Bluetooth, dołączenie do połączenia Teams zmusza macOS do przełączenia z wysokiej jakości kodeka AAC na niższej jakości kodek SCO (ponieważ Teams aktywuje mikrofon). SCO znacząco obniża jakość i głośność dźwięku.</p>

<p><strong>Poprawka:</strong> Użyj wbudowanego mikrofonu Mac lub mikrofonu USB, zachowując słuchawki Bluetooth jako urządzenie wyjściowe. Wejdź do Teams → Ustawienia → Urządzenia → mikrofon i wybierz "MacBook Pro Microphone" (lub swój mikrofon USB). To uniemożliwia przełączanie kodeków, utrzymując słuchawki w trybie wysokiej jakości AAC.</p>

<h2>4. Sprawdź macOS urządzenie wyjściowe i głośność</h2>

<p>Przejdź do ustawień systemowych → Dźwięk → wyjście. Sprawdź, czy wybrano właściwe urządzenie, a głośność wyjściowa jest maksymalna. Sprawdź też:</p>
<ul>
  <li><strong>Bezpieczeństwo słuchawek:</strong> Ustawienia systemowe → bezpieczeństwo dźwięku → słuchawek. Jeśli włączone jest "Reduce Loud Audio", ogranicza to głośność słuchawek.</li>
  <li><strong>Równowaga:</strong> Upewnij się, że suwak równowagi lewo-prawo jest wyśrodkowany — jeśli jest przekrzywiony, jedna strona będzie cichsza.</li>
</ul>

<h2>5. Reset Core Audio</h2>

<p>Demon dźwięku macOS czasem zatrzymuje się na niskim poziomie wyjściowym po uśpiewaniu, przełączaniu urządzeń lub aktualizacjach Teams. Otwórz terminal i biegnij:</p>
<p><code>Sudo Killall Coreaudiod</code></p>
<p>Dźwięk uruchamia się ponownie po krótkiej przerwie. Wróć do spotkania Teams i sprawdź, czy liczba osób się poprawiła.</p>

<h2>6. Zwiększyć objętość Teams powyżej 100%</h2>

<p>Jeśli wszystkie ustawienia są na maksa, a Teams nadal jest zbyt cichy — może uczestnik ma uszkodzony mikrofon lub dźwięk ze spotkania jest z natury niski — musisz wzmocnić ponad to, na co macOS normalnie pozwala.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Pozwala podnieść głośność dowolnej aplikacji do poziomu <strong>200%</strong>, w tym Microsoft Teams. Suwak Drag Teams do 150% lub 180% i dźwięk jest wzmacniany w czasie rzeczywistym. Only Teams robi się głośniejszy — muzyka, przeglądarka i inne aplikacje pozostają na obecnym poziomie.</p>

<img src="/apps/sounddial.png" alt="SoundDial zwiększenie liczby połączeń w Microsoft Teams powyżej 100% na macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial też pomaga w odwrotnym problemie: jeśli dźwięki powiadomień Teams są zbyt głośne podczas skupienia, obniż Teams do 15% lub całkowicie wycisz, jednocześnie utrzymując muzykę włączoną. Jedno kliknięcie wyciszyć, jedno odciszać.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Sprawdź SoundDial w Mac App Store</a> — jednorazowy zakup 14,99 €, bez subskrypcji macOS 14,2+.</p>
`,
  },
  "how-to-control-per-app-volume-on-mac": {
    slug: "how-to-control-per-app-volume-on-mac",
    title: "Jak kontrolować głośność w aplikacji na Mac",
    description:
      "macOS daje jeden suwak głośności dla wszystkiego. Oto jak uzyskać indywidualne regulatory głośności dla każdej aplikacji — i dlaczego to ma większe znaczenie, niż myślisz.",
    date: "2026-05-20",
    readTime: "7 min read",
    content: `
<p>Jesteś na wideorozmowie. Luz ciągle dzwoni. W tle gra muzyka. Sięgasz po klawisz głośności i — wszystko robi się cichsze. Telefon, muzyka, powiadomienia. macOS ma dokładnie jeden suwak głośności i steruje wszystkim naraz.</p>

<p>Windows ma mikser głośności w każdej aplikacji od czasów Visty w 2006 roku. Dwadzieścia lat później macOS nadal nie działa. Jeśli chcesz wyłączyć Spotify bez wpływu na rozmowę na Zoomie, Apple nie ma dla Ciebie wbudowanego rozwiązania.</p>

<p>Ten przewodnik wyjaśnia, czym jest kontrola głośności w poszczególnej aplikacji, dlaczego macOS jej nie ma i jak ją uzyskać.</p>

<h2>Co tak naprawdę oznacza wolumen na aplikację</h2>

<p>Wolulet na aplikację oznacza, że każda aplikacja na twoim Mac ma własny, niezależny suwak głośności. Możesz ustawić Spotify na 30%, utrzymać Zoom na 100%, całkowicie wyciszyć Slacka i zostawić Safari na 50% — wszystko jednocześnie. Zmiana głośności w jednej aplikacji nie ma żadnego wpływu na inne aplikacje.</p>

<p>To różni się od systemowej głośności, która jest jednym suwakiem głównym skalującym wszystko proporcjonalnie. Jeśli głośność systemu jest ustawiona na 50%, a Spotify gra na pełnych obrotach, nie da się ściszyć tylko Spotify bez miksera aplikacji dla aplikacji.</p>

<h2>Dlaczego macOS tego nie zawiera</h2>

<p>Architektura audio Apple (Core Audio) zdecydowanie obsługuje regulację głośności w poszczególnych aplikacjach na poziomie frameworka. Powodem macOS którego nie pokazuje w interfejsie, jest kwestia filozofii projektowania: Apple woli mniej kontrolerów i prostszą powierzchnię. Jeden suwak jest prostszy niż dwanaście.</p>

<p>Problem polega na tym, że "prostsze" przestaje być prostsze w momencie, gdy masz więcej niż jedno źródło dźwięku rywalizujące o twoją uwagę. Pojedynczy klawisz głośności, który kontroluje wszystko, jest elegancki, gdy robisz jedną rzecz. Jest aktywnie wrogi, gdy rozmawiasz jednocześnie z muzyką i powiadomieniami — tak większość ludzi faktycznie korzysta ze swoich Mac.</p>

<h2>Wbudowane obejścia (i dlaczego nie działają)</h2>

<h3>1. Regulacje głośności w aplikacji</h3>
<p>Niektóre aplikacje mają własne suwaki głośności — Spotify, VLC, QuickTime. Ale większość tego nie robi. Slack nie. Karty Chrome nie działają. Dźwięki systemowe nie działają. A nawet gdy aplikacja ma suwak, musisz ją otworzyć, znaleźć suwak, zmienić go, a potem wrócić do tego, co robiłeś. To pięć kliknięć, żeby coś, co powinno być jeden.</p>

<h3>2. Konfiguracja MIDI audio</h3>
<p>macOS zawiera konfigurację MIDI audio w folderze Narzędzia. Pozwala konfigurować urządzenia audio i tworzyć agregatywne urządzenia, ale nie ma żadnych regulacji głośności w zależności od aplikacji. To narzędzie do konfiguracji urządzeń, a nie mikser.</p>

<h3>3. Urządzenia z wieloma wyjściami</h3>
<p>Teoretycznie można by przekierować różne aplikacje do różnych urządzeń wyjściowych (słuchawki vs głośniki) i sterować nimi osobno. Ale to wymaga dodatkowego sprzętu, ręcznego routingu dla każdej aplikacji i nie daje niezależnej głośności — tylko niezależne włączanie/wyłączanie na każdym urządzeniu.</p>

<h2>Jak działa mikser głośności w aplikacji</h2>

<p>Odpowiedni mikser głośności w aplikacji znajduje się w pasku menu i pokazuje każdą aplikację, która aktualnie produkuje dźwięk. Każda aplikacja ma swój własny suwak. Przeciągasz ją w górę lub w dół, a tylko głośność tej aplikacji się zmienia. Głośność systemu pozostaje niezmieniona.</p>

<p>Pod maską działa to dzięki macOS <strong>Core Audio Tap API</strong> (wprowadzonej w macOS 14) lub starszych technik wirtualnych urządzeń audio służących do niezależnego przechwytywania strumienia audio każdej aplikacji i skalowania jego amplitudy zanim dotrze do głośników.</p>

<p>Kluczowe cechy, które odróżniają dobry mikser od złego:</p>

<ul>
  <li><strong>Wykrywanie aplikacji w czasie rzeczywistym.</strong> Gdy nowa aplikacja zaczyna odtwarzać dźwięk, powinien on pojawić się automatycznie w mikserze. Nie trzeba było ręcznie ustawiać.</li>
  <li><strong>Wycisz w każdej aplikacji.</strong> Jedno kliknięcie, by wyciszyć konkretną aplikację bez dotykania pozycji suwaka.</li>
  <li><strong>Podwyższenie głośności.</strong> Niektóre aplikacje (patrzę na ciebie, ciche odtwarzacze podcastów) osiągają za niski poziom. Dobry mikser pozwala podbić powyżej 100%.</li>
  <li><strong>Profile.</strong> Różne konfiguracje głośności w zależności od sytuacji — "Focus" z wyciszonym wszystkim oprócz muzyki, "Spotkanie" z Zoomem na 100% i resztą na 20%, "Gaming" z podkręconym dźwiękiem z gry.</li>
  <li><strong>Automatyczne kaczowanie.</strong> Automatycznie ścisz muzykę po rozpoczęciu rozmowy i przywracasz ją po zakończeniu rozmowy. To samo w sobie jest warte całej aplikacji.</li>
  <li><strong>Natywne na pasku menu.</strong> Powinno to być w pasku menu, a nie w oknie doku. Podnosisz wzrok, poprawiasz się i wracasz do pracy. Nie można przełączać aplikacji.</li>
</ul>

<h2>Kto tego potrzebuje</h2>

<p>Każdy, kto robi więcej niż jedną rzecz audio naraz. To większość osób, ale szczególnie:</p>

<ul>
  <li><strong>Pracownicy zdalni</strong> — połączenia + muzyka + powiadomienia to najczęstsza kolizja</li>
  <li><strong>Streamerzy i podcasterzy</strong> — precyzyjną kontrolę nad tym, co słyszy publiczność, a co ty słyszysz</li>
  <li><strong>Muzycy i producenci</strong> — potrzeba izolowania wyjścia DAW od ścieżek referencyjnych i narzędzi komunikacyjnych</li>
  <li><strong>Gracze</strong> — dźwięk z gry vs. Discord kontra muzyka to ciągły balans</li>
  <li><strong>Czy ktoś ma zmęczenie powiadomieniami</strong> — wycisz Slacka, zachowaj wszystko inne</li>
</ul>

<h2>SoundDial</h2>

<p>Zbudowałem <strong>SoundDial</strong> bo mikser Mac głośności, którego chciałem, nie istniał. Znajduje się w pasku menu, pokazuje każdą aplikację wydającą dźwięk i przypisuje każdej osobny suwak. Wyciszanie w aplikacji, podbijanie głośności, profile i automatyczne wyciszanie muzyki, które zmniejszają muzykę na początku połączenia. Jednorazowy zakup, macOS 14+, bez subskrypcji.</p>

<p>Mikser głośności macOS powinien być wbudowany.</p>
`,
  },
  "mute-slack-notifications-mac-without-muting-everything": {
    slug: "mute-slack-notifications-mac-without-muting-everything",
    title: "Jak wyciszyć Slack na Mac bez wyciszania wszystkiego innego",
    description:
      "Powiadomienia ze Slacka ciągle przerywają twoją koncentrację, ale nie chcesz wyciszać muzyki ani rozmów. Oto jak wyciszyć tylko Slack na macOS.",
    date: "2026-05-24",
    readTime: "5 min read",
    content: `
<p>Jesteś głęboko pochłonięty koncentracją. Spotify odtwarza playlistę idealnej koncentracji. Potem — <em>Szczoteczka stukająca</em> — Dźwięki luzu. I znowu. I znowu. Trzy kanały, dwa wiadomości prywatne i powiadomienie o wątku w trzydzieści sekund. Chcesz wyciszyć Slacka, ale zachować muzykę. macOS mówi: wycisz wszystko albo nic nie wycisz.</p>

<p>Dźwięki powiadomień Slacka to jedna z najczęstszych skarg audio dla pracowników zdalnych na Mac. Są zaprojektowane, by przyciągnąć twoją uwagę, co jest właśnie problemem, gdy musisz się skupić.</p>

<h2>Opcja 1: Wycisz powiadomienia w samym Slacku</h2>

<p>Slack ma funkcję "Pauzuj powiadomienia":</p>
<ol>
  <li>Kliknij zdjęcie profilowe w pasku bocznym Slacka</li>
  <li>Kliknij "Wstrzymaj powiadomienia"</li>
  <li>Wybierz czas trwania (30 min, 1 godzina, 2 godziny itd.)</li>
</ol>

<p>To tłumi powiadomienia i dźwięki na wybrany czas. Możesz też wyciszyć poszczególne kanały, klikając prawym przyciskiem → "Wycisz kanał".</p>

<p><strong>Ograniczenia:</strong> To wszystko albo nic na kanał. Nie da się zmusić Slacka <em>ciszej.</em> — tylko całkowicie cicha lub całkowicie włączona. A jeśli zapomnisz odpauzować, przegapisz wiadomości po zakończeniu sesji skupienia. Nie tłumi też dźwięków w aplikacji Slacka, jeśli masz otwartą aplikację.</p>

<h2>Opcja 2: Wyłącz dźwięki ze Slacka w macOS powiadomieniach</h2>

<p>Przejdź do ustawień systemu → powiadomień → Slacka. Wyłącz "Odtworzenie dźwięku dla powiadomień."</p>

<p><strong>Ograniczenia:</strong> To usuwa wszystkie dźwięki powiadomień ze Slacka na stałe (dopóki nie włączysz go ponownie). I dotyczy to tylko powiadomień na poziomie macOS — jeśli Slack odtwarza dźwięki przez własny silnik audio, ustawienie powiadomień może nie wychwycić wszystkich.</p>

<h2>Opcja 3: Użyj trybu ostrości</h2>

<p>Utwórz tryb "Focus" lub "Work" w ustawieniach systemowych → Focus. Dodaj Slack do listy "wyciszonych". Po aktywacji trybu Focus powiadomienia ze Slacka są tłumione.</p>

<p><strong>Ograniczenia:</strong> Tryby ostrości tłumią powiadomienia wizualnie i dźwiękowo, ale nie dają precyzyjnej regulacji głośności. Nie możesz powiedzieć "Powiadomienia ze Slacka na 10% głośności" — jest albo całkowicie dozwolone, albo całkowicie wyciszene.</p>

<h2>Opcja 4: Kontrola głośności w każdej aplikacji (prawdziwe rozwiązanie)</h2>

<p>To, czego naprawdę chcesz, jest proste: ścisz głośność Slacka do 10-15%, a resztę utrzymujesz na normalnym poziomie. Dźwięki luzu są słyszalne, jeśli ich słuchasz, ale nie przerywają płynności. Muzyka gra na pełnej głośności. Połączenia są na pełnej głośności.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Slack daje własny, niezależny suwak głośności. Ustaw ją na poziomie, który ci odpowiada — albo wycisz ją całkowicie jednym kliknięciem. Gdy będziesz gotowy, by znów skupić się na Slacku, wyłącz go i głośność wróci do poprzedniego poziomu.</p>

<img src="/apps/sounddial.png" alt="SoundDial z wyciszonym Slackiem i odtwarzającym Spotify na normalnej głośności na macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Idealny workflow Slacka</h3>
<ul>
  <li><strong>Czas skupienia:</strong> Luz na 10% lub wyciszony. Spotify na 40%. Bez przerw.</li>
  <li><strong>Dostępny czas:</strong> Luz na poziomie 40%. Powiadomienia są zauważalne, ale nie zaskakujące.</li>
  <li><strong>Czas spotkania:</strong> Slack wyciszony. Zoom na 100%. Automatyczne duckowanie zajmuje się resztą.</li>
</ul>

<p>Zapisz każdą z tych opcji jako <strong>Profil objętości</strong> w SoundDial i przełączaj się między nimi jednym kliknięciem. Jeszcze lepiej używaj automatycznego duckingu — gdy połączenie się zaczyna, SoundDial automatycznie obniża wszystko (w tym Slack) i przywraca je po zakończeniu połączenia.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Sprawdź SoundDial w Mac App Store</a> — jednorazowy zakup 14,99 €, bez subskrypcji macOS 14,2+.</p>
`,
  },
  "volume-profiles-for-mac": {
    slug: "volume-profiles-for-mac",
    title: "Jak ustawić profile głośności dla różnych sytuacji na Mac",
    description:
      "Różne ustawienia głośności na spotkania, skupienie się, pracę w grach i relaks — można je przełączać jednym kliknięciem. Oto jak działają profile objętości na macOS.",
    date: "2026-06-02",
    readTime: "5 min read",
    content: `
<p>O 9 rano jesteś na rozmowie na Zoomie — chcesz mieć Zoom na 100%, Spotify wyciszyć, Slack wyciszyć. O 10 rano połączenie się kończy — chcesz Spotify na 40%, Slack na 15%, Zoom nie ma znaczenia. W południe grasz — gra na 60%, Discord na 100%, wszystko inne wyciszone. O 18:00 oglądasz YouTube — przeglądarka działa w 80%, reszta jest cicha.</p>

<p>Każda sytuacja ma inną idealną konfigurację objętości. A za każdym razem, gdy sytuacja się zmienia, trzeba było ręcznie dostosować pięć lub sześć aplikacji. Albo możesz zapisać każdą konfigurację jako profil i przełączyć się jednym kliknięciem.</p>

<h2>Czym są profile objętościowe?</h2>

<p>Profil głośności to zapisany migawkowy obraz każdej aplikacji o głośności i stanie wyciszenia. Konfigurujesz aplikacje tak, jak chcesz — Spotify na 30%, Zoom na 100%, Slack wyciszony — a potem zapisujesz to jako nazwany profil, np. "Praca" lub "Spotkanie". Później aplikujesz profil i każda aplikacja natychmiast przeskakuje do zapisanego poziomu głośności.</p>

<p>Pomyśl o tym jak o presetach wyświetlacza dla audio: tak jak możesz mieć układ wyświetlacza dla "ustawienia biurka" i "trybu prezentacji", tak profile głośności pozwalają przełączać się między konfiguracjami audio bez ręcznej zmiany aplikacji.</p>

<h2>macOS nie ma profili głośności</h2>

<p>macOS ma tryby Focus (Nie przeszkadzaj, Praca, Prywatne itd.), które kontrolują, które powiadomienia dotrwają. Ale tryby ostrości nie kontrolują poziomu głośności. Mogą całkowicie stłumić dźwięki powiadomień, ale nie mogą ustawić Spotify na 30% ani Zooma na 100%. Nie ma wbudowanego sposobu zapisywania i przywracania konfiguracji wolumin w aplikacji.</p>

<h2>Zakładanie profili z SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> zawiera wbudowany system profilowania. Oto jak to skonfigurować:</p>

<h3>Tworzenie profilu</h3>
<ol>
  <li>Otwórz SoundDial z paska menu</li>
  <li>Dostosuj głośność każdej aplikacji do własnych potrzeb dla konkretnej sytuacji</li>
  <li>Kliknij przycisk "+" w sekcji profilu</li>
  <li>Nadaj mu nazwę (np. "Spotkanie") i wybierz ikonę</li>
  <li>Gotowe — Twoja obecna konfiguracja objętości jest zapisana</li>
</ol>

<h3>Profile przełączające</h3>
<p>Twoje zapisane profile pojawiają się jako przyciski w wyskakującym okienku SoundDial. Kliknij jedną i każda aplikacja natychmiast przełącza się na objętości zapisane w tym profilu. Jedno kliknięcie zastępuje pięć lub sześć ręcznych regulacji.</p>

<img src="/apps/sounddial.png" alt="SoundDial profile głośności — jednym kliknięciem przełączasz się między trybami Spotkania, Skupienia i Relaksu na macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Przykładowe profile</h3>

<p><strong>Spotkanie</strong></p>
<ul>
  <li>Zoom / Drużyny: 100%</li>
  <li>Spotify: wyciszony</li>
  <li>Luz: wyciszony</li>
  <li>Przeglądarka: wyciszona</li>
</ul>

<p><strong>Praca skupiająca się na koncentracji</strong></p>
<ul>
  <li>Spotify: 35%</li>
  <li>Luz: 10%</li>
  <li>Poczta: wyciszona</li>
  <li>Przeglądarka: 50%</li>
</ul>

<p><strong>Gry</strong></p>
<ul>
  <li>Gra: 60%</li>
  <li>Discord: 100%</li>
  <li>Spotify: 20%</li>
  <li>Wszystko inne: wyciszone</li>
</ul>

<p><strong>Chill</strong></p>
<ul>
  <li>Spotify: 70%</li>
  <li>Przeglądarka: 60%</li>
  <li>Powiadomienia: 20%</li>
</ul>

<h3>Aktualizacja profili</h3>
<p>Jeśli Twoje preferowane głośności zmieniają się z czasem, po prostu dostosuj suwaki i zaktualizuj profil. Następnym razem, gdy go zastosujesz, używa nowych ustawień.</p>

<h2>Profile + automatyczne kaczowanie = w pełni automatyczne</h2>

<p>Połącz profile z funkcją automatycznego duckingu w SoundDial i rzadko musisz dotykać głośności. Rano zastosuj swój profil "Focus Work". Gdy przychodzi połączenie, automatyczne duckowanie obniża wszystko oprócz aplikacji do połączeń. Po zakończeniu rozmowy wszystko wraca do poziomu twojego profilu. Na koniec dnia jednym kliknięciem przełącz się na "Chill".</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Sprawdź SoundDial w Mac App Store</a> — jednorazowy zakup 14,99 €, bez subskrypcji macOS 14,2+.</p>
`,
  },
  "zoom-call-volume-too-low-mac": {
    slug: "zoom-call-volume-too-low-mac",
    title: "Głośność rozmów na Zoomie jest zbyt niska na Mac? Jak go wzmocnić",
    description:
      "Na Zoomie ledwo słychać ludzi nawet przy maksymalnej głośności. Oto wszystkie rozwiązania — od ustawień Zooma po podkręcenie dźwięku rozmowy powyżej 100% za pomocą miksera głośności w aplikacji.",
    date: "2026-05-26",
    readTime: "6 min read",
    content: `
<p>Jesteś na rozmowie na Zoomie. Druga osoba mówi, ale jej głos jest ledwo słyszalny. Twoja głośność Mac jest maksymalna. Głośność głośników w Zoomie jest na maksymalnym poziomie. Pochylasz się w ekran, wysilając się, by usłyszeć. To nie powinno być takie trudne.</p>

<p>Niska liczba połączeń na Zoomie jest bardzo powszechna i ma wiele przyczyn. Przejdźmy przez każdą poprawkę, od prostych ustawień po podbijanie dźwięku w Zoomie powyżej normalnego limitu.</p>

<h2>1. Sprawdź ustawienia wyjścia audio w Zoomie</h2>

<p>Otwórz Zoom → Ustawienia → Audio. W sekcji "Speaker" upewnij się:</p>
<ul>
  <li>Wybierane jest właściwe urządzenie wyjściowe (nie nieaktywny monitor ani urządzenie odłączone)</li>
  <li>Suwak głośności głośnika jest ustawiony na maksimum</li>
  <li>Kliknij "Test Speaker", aby upewnić się, że wyraźnie słyszysz ton testu</li>
</ul>

<p>Jeśli testowy ton jest również cichy, problem dotyczy Zooma i głośników — kontynuuj poprawki poniżej. Jeśli testowy ton jest w porządku, ale faktyczne rozmowy są ciche, to drugi uczestnik prawdopodobnie ma problem z mikrofonem po swojej stronie.</p>

<h2>2. Sprawdź urządzenie wyjściowe Mac</h2>

<p>Przejdź do ustawień systemowych → Dźwięk → wyjście. Upewnij się, że wybrano odpowiednie urządzenie. Jeśli niedawno podłączyłeś lub odłączyłeś słuchawki, wyświetlacz lub urządzenia Bluetooth, mogło macOS automatycznie przełączyć na nieoczekiwane wyjście.</p>

<h2>3. Wyłącz automatyczną regulację głośności w Zoomie</h2>

<p>Zoom ma ustawienie "Automatycznie dostosuj głośność mikrofonu" (Ustawienia → Audio), które również może wpływać na postrzegane poziomy wyjściowe w niektórych konfiguracjach. Spróbuj go wyłączyć i przetestować ponownie.</p>

<h2>4. Tymczasowe wyłączenie tłumienia szumu tła</h2>

<p>Tłumienie szumów w Zoomie agresywnie filtruje szum tła — ale czasem może zmniejszyć postrzeganą głośność głosu drugiej osoby, zwłaszcza w cichych warunkach. Spróbuj ustawić "Tłumić szum tła" na "Niski" lub "Auto" zamiast "Wysoki".</p>

<h2>5. Sprawdź kodek Bluetooth</h2>

<p>Jeśli używasz AirPods lub słuchawek Bluetooth, dołączenie do rozmowy Zoom zmusza macOS do przejścia z wysokiej jakości kodeka AAC na niższej jakości kodek SCO (bo Zoom używa mikrofonu). SCO obniża jakość dźwięku i może sprawić, że dźwięk rozmowy będzie cichszy i bardziej skompresowany.</p>

<p><strong>Poprawka:</strong> Używaj osobnego mikrofonu (wbudowanego Mac mikrofonu lub mikrofonu USB), zachowując AirPods jako urządzenie wyjściowe. To uniemożliwia przełączanie kodeków — AirPods pozostają w trybie AAC z lepszą jakością dźwięku i głośnością.</p>

<h2>6. Reset Core Audio</h2>

<p>Demon dźwięku macOS czasem wchodzi w stan, w którym poziom wyjściowy jest obniżony, zwłaszcza po zmianie uśpienia/pobudki lub przełączaniu urządzeń. Otwórz terminal i biegnij:</p>
<p><code>Sudo Killall Coreaudiod</code></p>
<p>Dźwięk wznowi się po krótkiej przerwie. Ponownie dołącz do rozmowy na Zoomie i sprawdź, czy głośność się poprawiła.</p>

<h2>7. Podnieś głośność Zooma powyżej 100%</h2>

<p>Jeśli próbowałeś wszystkiego powyżej i Zoom nadal jest za cichy, problem może polegać na tym, że wyjście audio Zooma jest po prostu za mało głośne dla twojego zestawu. Niektórzy uczestnicy mają ciche mikrofony, a Zoom może tylko tyle wzmocnić ich sygnał.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Pozwala podnieść głośność dowolnej aplikacji do poziomu <strong>200%</strong> — w tym Zoom. Jeśli uczestnik jest zbyt cichy, przeciągnij suwak Zooma do 150% lub 180%. Sygnał audio jest wzmacniany ponad wbudowany maksimum Zooma, dzięki czemu nawet najcichsze głosy są słyszalne.</p>

<img src="/apps/sounddial.png" alt="SoundDial zwiększenie głośności rozmów na Zoomie do 180% na Mac dla czystszego dźwięku podczas rozmów wideo" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Kluczowa zaleta: zwiększenie Zoomu nie wpływa na nic innego. Twoja muzyka, powiadomienia i inne aplikacje pozostają na obecnym poziomie. Tylko Zoom robi się głośniejszy.</p>

<p>To działa także dla <strong>Microsoft Teams, Google Meet, FaceTime, Discord, Slack huddles, Webex</strong>, oraz dowolnej innej aplikacji do rozmów. Jeśli to słyszysz, SoundDial może to wzmocnić.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Sprawdź SoundDial w Mac App Store</a> — jednorazowy zakup 14,99 €, bez subskrypcji macOS 14,2+.</p>
`,
  },
  "lower-spotify-without-lowering-everything-mac": {
    slug: "lower-spotify-without-lowering-everything-mac",
    title: "Jak obniżyć poziom Spotify bez obniżania wszystkiego innego na Mac",
    description:
      "Chcesz mieć Spotify jako muzykę w tle, ale ściszanie tego klawiszami głośności sprawia, że połączenie i reszta są cichsze. Oto rozwiązanie.",
    date: "2026-05-30",
    readTime: "4 min read",
    content: `
<p>Pracujesz. Spotify odtwarza muzykę w tle. Jest trochę za głośny — konkuruje z podcastem w innej karcie albo utrudnia skupienie. Naciskasz klawisz ściszania głośności. Spotify cichnie. Ale tak samo jest ze wszystkim innym — rozmową na Zoomie, dźwiękami powiadomień, dźwiękiem przeglądarki. Ciszej. To nie było to, czego chciałeś.</p>

<p>Dzieje się tak, ponieważ macOS ma jeden suwak głośności. Naciśnij klawisz głośności i dostosowuje <em>Objętość systemu</em>, który skaluje każdą aplikację jednakowo. Nie da się powiedzieć "po prostu obniż Spotify" przy wbudowanych ustawieniach.</p>

<h2>Obejście: głośność w aplikacji Spotify</h2>

<p>Spotify ma własny suwak głośności w prawym dolnym rogu aplikacji (lub na dole odtwarzacza). Możesz obniżyć tę wartość niezależnie od objętości systemu. Jeśli Twój system ma 80%, a suwak Spotify 30%, Spotify będzie odtwarzać praktycznie 24%, a reszta pozostaje na 80%.</p>

<p><strong>Problem:</strong> Musisz przełączyć się do okna Spotify, znaleźć suwak, go wyregulować, a potem wrócić do tego, co robiłeś. Suwak Spotify jest malutki, nieprecyzyjny i nie pokazuje procentu — tylko pasek wizualny. Jeśli jesteś na spotkaniu i musisz szybko ściszyć muzykę, nieporadne manipulowanie małym suwakiem w innej aplikacji nie jest idealne.</p>

<h2>Prawdziwe rozwiązanie: kontrola głośności w zależności od aplikacji</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Ustawia suwak głośności dla każdej aplikacji w pasku menu. Aby obniżyć poziom Spotify bez wpływu na cokolwiek innego:</p>

<ol>
  <li>Kliknij ikonę SoundDial w pasku menu</li>
  <li>Znajdź Spotify na liście</li>
  <li>Przeciągnij suwak w dół</li>
</ol>

<p>Gotowe. Spotify jest cichsze. Zoom pozostał bez zmian. Powiadomienia pozostają bez zmian. Wszystko inne pozostaje bez zmian. Nie opuściłeś swojej obecnej aplikacji — wyskakujący panel paska menu otwiera się dokładnie tam, gdzie jesteś.</p>

<img src="/apps/sounddial.png" alt="SoundDial niezależne obniżanie głośności Spotify, podczas gdy inne aplikacje są na pełnej głośności na macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>Jeszcze lepiej: zapisz to jako profil</h2>

<p>Jeśli regularnie chcesz używać Spotify na niższym poziomie tła podczas pracy, zapisz preferowany zestaw głośności jako profil. Utwórz profil "Praca" z Spotify na 25%, Zoom na 100%, a Slack na 15%. Następnym razem, gdy zaczniesz pracować, zastosuj profil jednym kliknięciem, zamiast dostosowywać każdą aplikację osobno.</p>

<h2>Jeszcze lepiej: automatyczne duckowanie podczas rozmów</h2>

<p>SoundDial automatycznie obniża Spotify, gdy dołączysz do rozmowy. Włącz automatyczne duckowanie w ustawieniach, wybierz ile zmniejszyć dźwięk w tle (domyślnie 30%), a SoundDial zajmie się resztą. Twoja muzyka unika na początku rozmowy i wraca, gdy się kończy. Nie ma żadnej ręcznej regulacji.</p>

<p>To jest workflow, który macOS powinien wspierać natywnie: "Spotify na tym poziomie, wszystko inne na tamtym." Ponieważ Apple jeszcze tego nie stworzyło, <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> wypełnia lukę.</p>

<p>Jednorazowy zakup na <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Brak subskrypcji. macOS 14,2+.</p>
`,
  },
  "macos-tahoe-per-app-volume-control": {
    slug: "macos-tahoe-per-app-volume-control",
    title: "Czy macOS Tahoe ma regulację głośności w każdej aplikacji?",
    description:
      "macOS Tahoe (26 macOS) przyniosło duże aktualizacje, ale czy Apple w końcu dodało mikser głośności? Oto odpowiedź — i jak uzyskać kontrolę głośności w każdej aplikacji już teraz.",
    date: "2026-06-12",
    readTime: "4 min read",
    content: `
<p>Co roku Mac użytkownicy mają nadzieję, że kolejne macOS wydanie w końcu będzie zawierać mikser głośności. Co roku są rozczarowani. Wraz z macOS Tahoe (macOS 26) Apple wprowadziło przeprojektowany interfejs, nowe funkcje systemowe oraz znaczące ulepszenia pod maską. Ale czy dodali kontrolę głośności w zależności od aplikacji?</p>

<h2>Krótka odpowiedź: nie</h2>

<p>macOS Tahoe nie posiada wbudowanego miksera głośności. Nie ma żadnej regulacji głośności w poszczególnych aplikacjach w Ustawieniach Systemu, Centrum Sterowania ani na pasku menu. Doświadczenie audio jest takie samo jak w każdej poprzedniej macOS wydaniu: jeden suwak głośności systemowej, który kontroluje wszystko naraz.</p>

<p>Centrum sterowania Apple nadal pokazuje pojedynczy suwak głośności. Preferencje dźwięku w Ustawieniach systemu nadal pozwalają wybrać urządzenie wyjściowe i regulować jeden główny poziom głośności. Nie ma ukrytej funkcji, nie ma zaawansowanej opcji ani nowego API, które udostępniałoby użytkownikom objętość aplikacji dla poszczególnych aplikacji.</p>

<h2>Co macOS Tahoe poprawiło pod względem dźwięku</h2>

<p>Chociaż wciąż brakuje głośności w każdej aplikacji, Tahoe wprowadziło pewne ulepszenia związane z dźwiękiem:</p>

<ul>
  <li><strong>Poprawiona stabilność dźwięku Bluetooth</strong> — mniej rozłączeń i problemów z przełączaniem kodeków w AirPods i słuchawkach firm trzecich</li>
  <li><strong>Lepsze przetwarzanie dźwięku przestrzennego</strong> — ulepszone śledzenie głowy i dokładniejsze renderowanie przestrzenne dla wspieranych treści</li>
  <li><strong>Wydajność Core Audio</strong> — niższe opóźnienia dla profesjonalnych zastosowań audio i produkcji muzycznej</li>
</ul>

<p>Żadne z nich nie odpowiada na podstawową prośbę: "Pozwól mi wyłączyć Spotify bez wpływu na Zoom."</p>

<h2>Czy Apple kiedykolwiek doda mikser głośności?</h2>

<p>Nie ma żadnych wskazówek, by Apple planowało dodać tę funkcję. Nie pojawił się w żadnej macOS betze, sesji WWDC ani znanej mapie drogowej. Filozofia projektowania dźwięku Apple nadal stawia na prostotę — jeden suwak na wszystko.</p>

<p>Ironią jest to, że własny framework Core Audio Apple w pełni obsługuje tapowanie dźwięku i kontrolę głośności dla poszczególnych procesów. API Audio Tap wprowadzone w macOS 14 roku (Sonoma) jeszcze bardziej ułatwiło deweloperom tworzenie narzędzi audio dostosowanych do aplikacji. Apple zbudowało infrastrukturę — po prostu nie zbudowało jeszcze interfejsu użytkownika do niej.</p>

<h2>Jak uzyskać kontrolę głośności w zależności od aplikacji macOS Tahoe</h2>

<p>Ponieważ Apple nie zamierza go zbudować, lukę wypełniają aplikacje firm trzecich. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> to natywna aplikacja macOS menu paska, która daje mikser głośności — niezależne suwaki głośności dla każdej działającej aplikacji.</p>

<img src="/apps/sounddial.png" alt="SoundDial zapewnienie regulacji głośności w zależności od aplikacji na macOS Tahoe" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>SoundDial jest w pełni kompatybilny z macOS Tahoe i korzysta z nowoczesnego API Apple Core Audio Tap — nie wymaga żadnych zewnętrznych sterowników audio ani rozszerzeń jądra. Działa to czysto z modelem bezpieczeństwa macOS i nie zakłóca innych aplikacji audio.</p>

<p>Co dostajesz:</p>
<ul>
  <li><strong>Suwaki woluminów w zależności od aplikacji</strong> — 0% do 200% dla każdej aplikacji</li>
  <li><strong>Wycisz w każdej aplikacji</strong> — jednym kliknięciem, aby wyciszyć dowolną aplikację</li>
  <li><strong>Profile objętości</strong> — zapisz konfiguracje i natychmiast przełącz</li>
  <li><strong>Auto-ducking</strong> — dźwięk tła automatycznie się obniża podczas rozmów</li>
  <li><strong>Zwiększenie głośności</strong> — wzmocnić ciche aplikacje ponad 100%</li>
  <li><strong>Pamięć woluminowa</strong> — zapamiętuje głośność każdej aplikacji między restartami</li>
  <li><strong>Skróty klawiaturowe</strong> — przełączanie miksera lub wyciszanie wszystkiego z klawiatury</li>
</ul>

<p>Jednorazowy zakup na <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Brak subskrypcji. macOS 14,2+.</p>
`,
  },
  "play-music-speakers-calls-headphones-mac": {
    slug: "play-music-speakers-calls-headphones-mac",
    title: "Jak odtwarzać muzykę na głośnikach podczas odbierania rozmów przez słuchawki (Mac)",
    description:
      "Chcesz mieć Spotify na głośnikach biurkowych i jednocześnie powiększać AirPods? macOS nie ułatwia tego — oto co faktycznie działa.",
    date: "2026-05-15",
    readTime: "5 min read",
    content: `
<p>Oto rozsądna rzecz, którą możesz zrobić: odtwarzaj muzykę przez głośniki biurkowe podczas rozmowy na Zoomie przez AirPods. Muzyka wypełnia pokój, a rozmowa jest prywatna w twoich uszach. Ma to sens.</p>

<p>macOS mówi nie. Gdy wybierasz urządzenie wyjściowe audio, <em>każdy</em> Aplikacja go używa. Przełącz się na AirPods do Zooma, a Spotify też przełącza się na AirPods. Przełącz na głośniki do Spotify i Zoom też przechodzi do głośników. Jedno urządzenie wyjściowe dla wszystkiego. Bez wyjątków.</p>

<h2>Dlaczego macOS nie potrafi tego zrobić natywnie</h2>

<p>macOS kieruje cały dźwięk przez jedno wybrane urządzenie wyjściowe. W ustawieniach systemu → Dźwięk → Wyjście wybierasz "MacBook Pro Speakers" lub "AirPods Pro", a każda aplikacja wysyła dźwięk do tego urządzenia. Nie ma wbudowanego routingu audio dla aplikacji.</p>

<p>Taki projekt ma sens ze względu na prostotę — większość ludzi chce, aby cały ich dźwięk pochodził z tego samego miejsca. Ale wszystko się rozpada w momencie, gdy chcesz mieć różne aplikacje na różnych wyjściach.</p>

<h2>Obejście agregowanego urządzenia</h2>

<p>Konfiguracja Audio MIDI w macOS (dostępna w Aplikacjach → Narzędziach) pozwala stworzyć "Urządzenie agregowane", które łączy wiele wyjść w jedno. Jednak urządzenie agregujące wysyła <em>Ten sam dźwięk</em> Dla wszystkich połączonych wyjść — nie pozwala wybrać, która aplikacja trafi do którego wyjścia. Jest zaprojektowany do konfiguracji z wieloma głośnikami, a nie do routingu w poszczególnych aplikacjach.</p>

<h2>Obejście urządzenia wielowyjściowego</h2>

<p>Podobnie jak w przypadku urządzeń agregacyjnych, możesz stworzyć "Multi-Output Device" w konfiguracji Audio MIDI. Wysyła to identyczny dźwięk na wiele wyjść jednocześnie. Znowu, wszędzie jest ten sam dźwięk — nie da się w ten sposób przekierować Spotify na głośniki i Zooma do słuchawek.</p>

<h2>Co faktycznie działa: aplikacje do routingu audio w poszczególnych aplikacjach</h2>

<p>Aby naprawdę kierować różne aplikacje do różnych urządzeń wyjściowych, potrzebujesz zewnętrznej aplikacji do routingu audio, która przechwytuje dźwięk każdej aplikacji i przesyła go na określony przez Ciebie wyjście. Aplikacje takie jak SoundSource (od Rogue Amoeba) to obsługują — pozwalają przypisać konkretne urządzenia wyjściowe do poszczególnych aplikacji.</p>

<h2>Prostsze podejście: separacja oparta na objętości</h2>

<p>Jeśli Twoim głównym celem jest wyraźne słyszenie połączenia przez muzykę (zamiast kierować je na różne urządzenia), regulacja głośności w aplikacji rozwiązuje ten problem prostiej.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> każdej aplikacji daje własny suwak głośności. Podczas rozmowy możesz:</p>

<ul>
  <li>Ustaw Zoom/Teams/FaceTime na <strong>100%</strong></li>
  <li>Niżej Spotify do <strong>20%</strong></li>
  <li>Wycisz wszystko inne</li>
</ul>

<p>Twoja decyzja jest krystalicznie jasna. Muzyka to subtelne tło. Nie trzeba przełączać się między urządzeniami.</p>

<img src="/apps/sounddial.png" alt="SoundDial pokazywał Zoom na pełnej głośności i obniżony Spotify podczas rozmowy na macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Jeszcze lepiej: SoundDial's <strong>automatyczne kaczowanie</strong> robi to automatycznie. Gdy dołączasz do połączenia, wykrywa aktywację mikrofonu i obniża wszystkie aplikacje w tle do poziomu, który sam skonfigurujesz (domyślnie 30%). Gdy połączenie się kończy, wszystko wraca do normy. Nie trzeba ręcznie regulować suwaków.</p>

<p>Dla większości osób rozwiązuje to faktyczny problem — "nie słyszę połączenia przez muzykę" — bez konieczności kierowania różnych aplikacji na różne fizyczne urządzenia.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Sprawdź SoundDial w Mac App Store</a> — jednorazowy zakup 14,99 €, bez subskrypcji macOS 14,2+.</p>
`,
  },
  "mac-volume-keeps-changing-by-itself": {
    slug: "mac-volume-keeps-changing-by-itself",
    title: "Mac Głośność ciągle zmienia się sama: jak to naprawić",
    description:
      "Głośność twojego Mac losowo wzrasta, spada lub resetuje się do innego poziomu. Oto wszystkie znane przyczyny i jak temu zapobiec.",
    date: "2026-05-18",
    readTime: "6 min read",
    content: `
<p>Ustawiasz głośność Mac na komfortowy poziom. Odwracasz wzrok. Kiedy wracasz, jest inaczej. Głośniej. Ciszej. Zresetuj do maksimum. To ciągle się powtarza i nie możesz zrozumieć dlaczego.</p>

<p>To jeden z najbardziej frustrujących problemów Mac dźwiękiem, bo wydaje się losowy. Ale prawie nigdy nie jest to faktycznie losowe — zawsze jest jakiś konkretny bodziec. Oto wszystkie znane przyczyny i sposoby, jak je naprawić.</p>

<h2>1. Ponowne połączenie urządzenia Bluetooth</h2>

<p>To najczęstsza przyczyna. Gdy urządzenie Bluetooth (AirPods, głośniki, słuchawki) łączy się lub rozłącza, macOS resetuje głośność do poziomu, którego ostatnio używano na tym urządzeniu. Więc jeśli głośniki mają 30% i AirPods automatycznie się łączą, głośność może skoczyć do 80% (ostatni poziom AirPods).</p>

<p><strong>Poprawka:</strong> macOS zapamiętuje poziomy głośności dla każdego urządzenia wyjściowego. Za każdym razem, gdy przełączasz się, ustaw to tam, gdzie chcesz. Z czasem odpowiednie poziomy będą zapamiętane dla każdego urządzenia. Jeśli urządzenie Bluetooth niespodziewanie łączy się automatycznie, przejdź do Ustawień Systemowych → Bluetooth i usuń urządzenia, których nie używasz aktywnie.</p>

<h2>2. Wyjście HDMI/DisplayPort</h2>

<p>Podłączenie lub odłączenie zewnętrznego wyświetlacza przez HDMI lub DisplayPort może powodować zmiany głośności. Niektóre wyświetlacze są także urządzeniami wyjściowymi audio i macOS przełączają się na nie automatycznie. Gdy wyświetlacz przechodzi w stan uśpienia lub się rozłącza, macOS przełącza się z powrotem na głośniki i może zresetować głośność.</p>

<p><strong>Poprawka:</strong> Wejdź do ustawień systemowych → Dźwięk → wyjście i sprawdź, czy macOS automatycznie przełącza się na głośniki wyświetlacza. Jeśli nie chcesz przesyłać dźwięku przez wyświetlacz, wybierz ręcznie preferowane urządzenie wyjściowe. Niektóre wyświetlacze mogą mieć wyłączone wyjście audio w swoich własnych ustawieniach OSD (ekran).</p>

<h2>3. Aplikacja zmienia głośność</h2>

<p>Niektóre aplikacje programowo regulują głośność systemu. Na przykład Zoom ma ustawienie "Automatycznie dostosuj głośność mikrofonu", które również może wpływać na głośność wyjściową. Aplikacje muzyczne, podcastowe i niektóre gry mogą również regulować głośność podczas uruchamiania lub podczas określonych wydarzeń.</p>

<p><strong>Poprawka:</strong> Sprawdź swoje ostatnio otwarte aplikacje pod kątem ustawień dźwiękowych. W Zoomie: Ustawienia → dźwięku → odznacz "Automatycznie dostosuj głośność mikrofonu." W Spotify: sprawdź, czy normalizacja głośności powoduje postrzegane zmiany głośności (Ustawienia → Odtwarzanie → Normalizacja głośności).</p>

<h2>4. Przypadkowe naciśnięcia klawiatury lub paska dotykowego</h2>

<p>Jeśli masz klawiaturę z klawiszami głośności (Mac każda klawiatura), przypadkowe naciśnięcia — lub zablokowany klawisz — mogą zmienić głośność. Touch Bar w starszych modelach MacBooka Pro jest szczególnie podatny na przypadkowe zmiany głośności podczas ocierania się o niego.</p>

<p><strong>Poprawka:</strong> Sprawdź, czy klawisz głośności się zaciął, obserwując wskaźnik głośności i nie dotykając niczego. W przypadku modeli z Touch Barem dostosuj Touch Bar w ustawieniach systemowych → klawiatury → Touch Bar, aby usunąć suwak głośności lub przesunąć go w mniej dostępne miejsce.</p>

<h2>5. macOS reset demona audio</h2>

<p>Po cyklach uśpienia/pobudki demon audio macOS (coreaudiod) czasem się restartuje i resetuje głośność do domyślnego lub wcześniej buforowanego poziomu. To błąd na poziomie systemowym, który pojawia się w różnych wersjach macOS.</p>

<p><strong>Poprawka:</strong> Jeśli głośność resetuje się konsekwentnie po przebudzeniu ze stanu uśpienia, spróbuj ręcznie zrestartować coreaudiod:</p>
<p><code>Sudo Killall Coreaudiod</code></p>
<p>Jeśli problem utrzymuje się przez macOS aktualizacji, może zostać rozwiązany w kolejnej aktualizacji. Tymczasem korzystanie z narzędzia, które zapamiętuje i przywraca poziomy objętości w poszczególnych aplikacjach, może to zrekompensować.</p>

<h2>6. Ustawienia dostępności</h2>

<p>Niektóre funkcje dostępności mogą zakłócać dźwięk. Sprawdź ustawienia systemu → dostępność → dźwięk, czy nie ma nieoczekiwanych ustawień. Sprawdź też, czy VoiceOver lub Switch Control są częściowo włączone — mogą powodować nieoczekiwane zachowania głośności.</p>

<h2>Zablokuj swoje woluminy w każdej aplikacji SoundDial</h2>

<p>Nawet jeśli nie możesz zapobiec macOS zmianie głośności systemu, możesz chronić swoje <em>Na aplikację</em> Równowaga objętości. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Zapamiętuje poziom głośności każdej aplikacji osobno. Gdy aplikacja się restartuje lub gdy Mac budzi się ze stanu uśpienia, SoundDial przywraca każdą aplikację do zapisanej głośności.</p>

<img src="/apps/sounddial.png" alt="SoundDial zapamiętywanie poziomów objętości w zależności od aplikacji przy wznowieniu macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Oznacza to, że nawet jeśli zmieni się głośność systemu, równowaga na poziomie aplikacji pozostaje stała:</p>
<ul>
  <li>Spotify pozostaje na poziomie 40% niezależnie od zmian głośności systemu</li>
  <li>Zoom pozostaje na 100% nawet po ponownym połączeniu Bluetooth</li>
  <li>Luz pozostaje wyciszony nawet po restarcie</li>
</ul>

<p>Połączone z <strong>Profile objętości</strong>, możesz natychmiast przywrócić preferowaną konfigurację głośności w każdej sytuacji — jednym kliknięciem, by wrócić dokładnie tam, gdzie chcesz być, niezależnie od tego, co macOS robił, gdy nie patrzyłeś.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Sprawdź SoundDial w Mac App Store</a> — jednorazowy zakup 14,99 €, bez subskrypcji macOS 14,2+.</p>
`,
  },
  "best-volume-mixer-apps-mac-2026": {
    slug: "best-volume-mixer-apps-mac-2026",
    title: "Najlepsze aplikacje do miksera głośności dla Mac w 2026 roku",
    description:
      "Bezpośrednie porównanie wszystkich Mac aplikacji, które dają kontrolę głośności w poszczególnych aplikacjach. Funkcje, ceny i która z nich faktycznie jest warta użycia.",
    date: "2026-06-12",
    readTime: "10 min read",
    content: `
<p>macOS nie ma wbudowanego miksera głośności. Jeśli chcesz kontrolować głośność poszczególnych aplikacji — ściszyć Spotify bez wpływu na Zoom, wyciszyć Slacka bez wyciszania wszystkiego — potrzebujesz aplikacji firm trzecich.</p>

<p>Jest kilka opcji. Ten przewodnik porównuje najbardziej znane modele pod względem funkcji, cen, kompatybilności oraz rzeczywistej użyteczności. Brak linków afiliacyjnych, brak sponsorowanych typów.</p>

<h2>Na co powinieneś zwracać uwagę</h2>

<p>Zanim porównamy aplikacje, oto co ma znaczenie w mikserze Mac głośności:</p>

<ul>
  <li><strong>Suwaki woluminów w zależności od aplikacji</strong> — niezależna kontrola każdej działającej aplikacji</li>
  <li><strong>Zakres objętości</strong> — czy można zejść poniżej 100% I powyżej 100% (boost)?</li>
  <li><strong>Wycisz w każdej aplikacji</strong> — wyciszyć jedną aplikację bez dotykania jej pozycji głośności</li>
  <li><strong>Profile</strong> — zapisz i przełączaj konfiguracje głośności</li>
  <li><strong>Auto-ducking</strong> — automatycznie ściszając muzykę podczas rozmów</li>
  <li><strong>Integracja z paskiem menu</strong> — szybki dostęp bez konieczności zmiany aplikacji</li>
  <li><strong>macOS kompatybilność</strong> — pracuje na najnowszej wersji macOS</li>
  <li><strong>Model cenowy</strong> — jednorazowy zakup kontra subskrypcja</li>
</ul>

<h2>Opcje</h2>

<h3>SoundDial</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> to natywna aplikacja macOS menu bar, skupiona na jednej rzeczy dobrze: regulacji głośności w zależności od aplikacji.</p>

<ul>
  <li><strong>Liczba na aplikację:</strong> Tak, od 0% do 200%</li>
  <li><strong>Wycisz w każdej aplikacji:</strong> Tak, jednym kliknięciem</li>
  <li><strong>Zwiększenie głośności:</strong> Tak, do 200%</li>
  <li><strong>Profile:</strong> Tak, z niestandardowymi nazwami i ikonami</li>
  <li><strong>Automatyczne ducking:</strong> Tak, z konfigurowalnym poziomem kaczki</li>
  <li><strong>Skróty klawiaturowe:</strong> Tak (mikser przełączający, wyciszaj wszystko)</li>
  <li><strong>Przełączanie urządzeń wyjściowych:</strong> Tak, z tego samego panelu</li>
  <li><strong>Pamięć woluminowa:</strong> Tak, zapamiętuje głośność każdej aplikacji między restartami</li>
  <li><strong>Cena:</strong> Jednorazowy zakup za 14,99 € (bez subskrypcji) — mniej niż połowa ceny SoundSource</li>
  <li><strong>Wymaga:</strong> macOS 14,2+</li>
  <li><strong>Dostępne na:</strong> Mac App Store (recenzowane przez Apple, w sandboxie, bez sterowników systemowych)</li>
</ul>

<p>SoundDial korzysta z nowoczesnego API Apple Core Audio Tap do czystej kontroli dźwięku na proces. Jest lekki, działa całkowicie na pasku menu i nie wymaga skomplikowanych konfiguracji. Za 14,99 € jest znacznie tańszy niż SoundSource (39 USD), a zawiera funkcje, których SoundSource nie ma — profile głośności i automatyczne ducking. A ponieważ jest dostępny w Mac App Store, jest recenzowany przez Apple, sandboxowany i instaluje się bez konieczności pobierania DMG czy instalowania sterowników dźwięku systemowego.</p>

<img src="/apps/sounddial.png" alt="SoundDial mikser głośności w aplikacji pokazujący suwaki głośności w aplikacji na macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>SoundSource (Rogue Ameba)</h3>

<p>SoundSource jest jednym z najstarszych i najbardziej ugruntowanych narzędzi Mac audio. Jest potężny i bogaty w funkcje, skierowany do zaawansowanych użytkowników i profesjonalistów audio.</p>

<ul>
  <li><strong>Liczba na aplikację:</strong> Tak</li>
  <li><strong>Wycisz w każdej aplikacji:</strong> Tak</li>
  <li><strong>Zwiększenie głośności:</strong> Tak</li>
  <li><strong>Korekcja poszczególna w aplikacji:</strong> Tak (wbudowane i wsparcie dla wtyczek AU)</li>
  <li><strong>Routowanie wyjść w zależności od aplikacji:</strong> Tak (wysyłaj różne aplikacje do różnych głośników)</li>
  <li><strong>Profile:</strong> Brak wbudowanego systemu profilowania</li>
  <li><strong>Automatyczne ducking:</strong> Nie</li>
  <li><strong>Cena:</strong> 39 USD (jednorazowe, większe ulepszenia mogą wymagać dodatkowego zakupu)</li>
  <li><strong>Wymaga:</strong> macOS 12+ (instaluje sterownik dźwięku systemowego)</li>
</ul>

<p>SoundSource to najpotężniejsza opcja, jeśli potrzebujesz EQ i łańcuchów efektów audio w poszczególnych aplikacjach. Instaluje sterownik audio na poziomie systemowym (ACE) do przechwytywania dźwięku, co czyni go bardzo wydajnym, ale też bardziej inwazyjnym. Cena 39 dolarów jest wyższa niż w większości alternatyw, a do tego nie ma automatycznego duckingu ani systemu profilowania.</p>

<h3>Muzyka w tle (darmowa, open source)</h3>

<p>Background Music to darmowa, otwartoźródłowa aplikacja, która zapewnia podstawową regulację głośności w zależności od aplikacji. To popularny wybór, bo jest darmowy.</p>

<ul>
  <li><strong>Liczba na aplikację:</strong> Tak</li>
  <li><strong>Wycisz w każdej aplikacji:</strong> Tak</li>
  <li><strong>Zwiększenie głośności:</strong> Nie (tylko 0-100%)</li>
  <li><strong>Muzyka z automatycznym pauzowaniem:</strong> Tak (zatrzymuje muzykę, gdy inna aplikacja odtwarza dźwięk)</li>
  <li><strong>Profile:</strong> Nie</li>
  <li><strong>Automatyczne ducking:</strong> Nie (autopauza różni się od automatycznego kaczania)</li>
  <li><strong>Cena:</strong> Wolne</li>
  <li><strong>Wymaga:</strong> macOS 10.13+ (instaluje wirtualne urządzenie audio)</li>
</ul>

<p>Muzyka w tle to solidna, darmowa opcja na podstawową głośność w aplikacji. Jednak nie był konsekwentnie aktualizowany w nowszych wersjach macOS. Użytkownicy zgłaszają problemy na macOS Sequoia i Tahoe — błędy dźwięku, nieprawidłową instalację wirtualnego urządzenia audio lub niewykrywanie niektórych aplikacji przez aplikację. Nie może też podnieść głośności powyżej 100%, nie ma profili ani automatycznego duckingu.</p>

<h3>eqMac</h3>

<p>eqMac to przede wszystkim aplikacja do korektora, która oferuje także funkcję miksowania głośności.</p>

<ul>
  <li><strong>Liczba na aplikację:</strong> Limited (skupiam się na EQ, nie na miksowaniu)</li>
  <li><strong>Układ EQ dla całego systemu:</strong> Tak, z wieloma opcjami pasm</li>
  <li><strong>Zwiększenie głośności:</strong> Tak</li>
  <li><strong>Profile:</strong> Presety EQ (nie profile głośności)</li>
  <li><strong>Automatyczne ducking:</strong> Nie</li>
  <li><strong>Cena:</strong> Darmowy pakiet + subskrypcja Pro</li>
  <li><strong>Wymaga:</strong> macOS 10.14+</li>
</ul>

<p>eqMac jest lepszym wyborem, jeśli Twoim głównym celem jest systemowa korekta (podbicie basu, regulacja wysokich tonów itp.) niż kontrola głośności w aplikacji. Jego możliwości miksowania głośności są drugorzędne wobec funkcji EQ.</p>

<h2>Szybka tabela porównawcza</h2>

<table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;">
<thead>
<tr style="border-bottom:2px solid rgba(255,255,255,0.2);">
  <th style="text-align:left;padding:10px 12px;color:rgba(255,255,255,0.6);">Cechy</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundDial</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">SoundSource</th>
  <th style="text-align:center;padding:10px 12px;color:rgba(255,255,255,0.6);">Muzyka tła</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Liczba na aplikację</td>
  <td style="text-align:center;padding:10px 12px;">Tak</td>
  <td style="text-align:center;padding:10px 12px;">Tak</td>
  <td style="text-align:center;padding:10px 12px;">Tak</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Wzrost głośności (200%)</td>
  <td style="text-align:center;padding:10px 12px;">Tak</td>
  <td style="text-align:center;padding:10px 12px;">Tak</td>
  <td style="text-align:center;padding:10px 12px;">Nie</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Profile objętości</td>
  <td style="text-align:center;padding:10px 12px;">Tak</td>
  <td style="text-align:center;padding:10px 12px;">Nie</td>
  <td style="text-align:center;padding:10px 12px;">Nie</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Auto-ducking</td>
  <td style="text-align:center;padding:10px 12px;">Tak</td>
  <td style="text-align:center;padding:10px 12px;">Nie</td>
  <td style="text-align:center;padding:10px 12px;">Nie</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Korektor per app</td>
  <td style="text-align:center;padding:10px 12px;">Nie</td>
  <td style="text-align:center;padding:10px 12px;">Tak</td>
  <td style="text-align:center;padding:10px 12px;">Nie</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Routowanie wyjść w poszczególnych aplikacjach</td>
  <td style="text-align:center;padding:10px 12px;">Nie</td>
  <td style="text-align:center;padding:10px 12px;">Tak</td>
  <td style="text-align:center;padding:10px 12px;">Nie</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Skróty klawiaturowe</td>
  <td style="text-align:center;padding:10px 12px;">Tak</td>
  <td style="text-align:center;padding:10px 12px;">Tak</td>
  <td style="text-align:center;padding:10px 12px;">Nie</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Wymagany sterownik systemowy</td>
  <td style="text-align:center;padding:10px 12px;">Nie</td>
  <td style="text-align:center;padding:10px 12px;">Tak</td>
  <td style="text-align:center;padding:10px 12px;">Tak</td>
</tr>
<tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
  <td style="padding:10px 12px;">Cena</td>
  <td style="text-align:center;padding:10px 12px;">Jednorazowy</td>
  <td style="text-align:center;padding:10px 12px;">$39</td>
  <td style="text-align:center;padding:10px 12px;">Wolne</td>
</tr>
</tbody>
</table>

<h2>Którą opcję wybrać?</h2>

<ul>
  <li><strong>Jeśli chcesz mieć kontrolę głośności w pojedynczej aplikacji, profile i automatyczne duckowanie:</strong> <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> — najbardziej kompletny mikser głośności w tej cenie, z funkcjami (profile, automatyczne ducking), których brakuje nawet droższym alternatywom.</li>
  <li><strong>Jeśli potrzebujesz korekcji EQ i routingu audio w poszczególnej aplikacji:</strong> SoundSource — najpotężniejsza opcja, skierowana do profesjonalistów audio, którzy potrzebują łańcuchów efektów i routingu wyjścia dla aplikacji.</li>
  <li><strong>Jeśli chcesz coś darmowego i podstawowego:</strong> Muzyka w tle — całkiem dobra do prostego głośności w aplikacji, ale może mieć problemy z kompatybilnością w nowszych wersjach macOS i brakuje podświetlenia/profilów/wyciszania.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Sprawdź SoundDial w Mac App Store</a>.</p>
`,
  },
  "youtube-too-quiet-safari-chrome-mac": {
    slug: "youtube-too-quiet-safari-chrome-mac",
    title: "Czy YouTube jest zbyt cichy w Safari czy Chrome na Mac? Napraw to natychmiast",
    description:
      "Niektóre filmy na YouTube są ledwo słyszalne nawet przy maksymalnej głośności. Oto dlaczego dźwięk w przeglądarce jest często cichszy niż w innych aplikacjach — i jak podbić go powyżej 100% na Mac.",
    date: "2026-05-22",
    readTime: "5 min read",
    content: `
<p>Klikasz na film na YouTube. Twórca mówi, ale ledwo go słyszysz. Głośność systemu jest na maksa. Głośność odtwarzaczy na YouTube jest na maksymalnym poziomie. Pochylasz się bliżej głośników. Wciąż zbyt cicho. Otwierasz Spotify — muzyka gra na pełnych obrotach. Więc to nie są twoje głośniki. To YouTube. A dokładniej, to wideo.</p>

<p>To jest niezwykle powszechne i nie jest to błąd. Niektóre filmy na YouTube są po prostu masterowane na niższej głośności niż inne i nie daje macOS możliwości selektywnego podbijania dźwięku w przeglądarce.</p>

<h2>Dlaczego niektóre filmy na YouTube są tak ciche</h2>

<h3>Teledysk został nagrany przy cichej głośności</h3>
<p>Nie każdy twórca ma profesjonalny sprzęt audio. Nagranie wideo mikrofonem laptopa z drugiego końca pokoju będzie znacznie cichsze niż nagrane z odpowiednim mikrofonem kondensatorowym. YouTube normalizuje głośność do pewnego stopnia (ich "normalizacja głośności" celuje w -14 LUFS), ale to nie rekompensuje w pełni bardzo cichego dźwięku źródłowego.</p>

<h3>Normalizacja głośności na YouTube</h3>
<p>YouTube automatycznie reguluje głośność wideo, więc głośne i ciche filmy odtwarzają się mniej więcej na tym samym poziomie. W przypadku głośnych filmów oznacza to ich ściszenie. Dla cichych filmów oznacza to podgłośnienie — ale tylko do pewnego stopnia. Jeśli dźwięk źródłowy jest bardzo cichy, normalizacja może zrobić tylko tyle bez wprowadzania zakłóceń.</p>

<h3>Dźwięk w przeglądarce to obywatel drugiej kategorii na macOS</h3>
<p>Safari i Chrome obsługują dźwięk inaczej niż dedykowane aplikacje multimedialne. Przesyłają one dźwięk przez silnik audio przeglądarki, który ma własny limit głośności. Nie ma sposobu, by podbić dźwięk w zakładce przeglądarki z samego macOS. Przeglądarka to jedna aplikacja z jednym poziomem głośności — nawet jeśli masz dziesięć kart odtwarzających dźwięk na różnych poziomach.</p>

<h2>Szybkie rozwiązania do wypróbowania</h2>

<h3>Sprawdź głośność odtwarzacza na YouTube</h3>
<p>Najedź kursorem na ikonę głośnika w odtwarzaczu YouTube i upewnij się, że suwak jest maksymalnie ustawiony. Łatwo przypadkowo to obniżyć i resetuje się niezależnie od głośności systemu.</p>

<h3>Wyłącz normalizację głośności na YouTube</h3>
<p>YouTube nie oferuje przełącznika normalizacji głośności dla użytkownika. Jednak niektóre rozszerzenia przeglądarek mogą to omijać. Przeszukaj sklep rozszerzenia swojej przeglądarki pod kątem "YouTube volume normalizer" lub "YouTube audio enhancer".</p>

<h3>Spróbuj innej przeglądarki</h3>
<p>Safari i Chrome obsługują dźwięk inaczej. Jeśli film jest zbyt cichy w jednej przeglądarce, spróbuj drugiej. Chrome w szczególności obsługuje dźwięk przez osobny proces ("renderer"), co czasem skutkuje niższym wynikiem.</p>

<h2>Prawdziwe rozwiązanie: zwiększyć głośność przeglądarki powyżej 100%</h2>

<p>Podstawowym problemem jest to, że macOS nie pozwala zwiększyć głośności konkretnej aplikacji powyżej 100%. Twoja przeglądarka jest maksymalnie ustawiona, ale "maksymalnie ustawiona" to za mało.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> rozwiązuje to, nadając każdej aplikacji — w tym Safari i Chrome — niezależny suwak głośności od 0% do <strong>200%</strong>. Jeśli film na YouTube jest zbyt cichy, przeciągnij suwak przeglądarki na 150% lub 180%. Dźwięk jest wzmacniany w czasie rzeczywistym, nie wpływając na żadną inną aplikację.</p>

<img src="/apps/sounddial.png" alt="SoundDial zwiększenie głośności przeglądarki Safari do 180% dla cichych filmów na YouTube na Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Jest to szczególnie przydatne, ponieważ:</p>
<ul>
  <li><strong>To natychmiastowe.</strong> Kliknij ikonę paska menu, przeciągnij suwak. Nie musisz instalować rozszerzenia do przeglądarki ani zmieniać żadnych ustawień.</li>
  <li><strong>To jest w każdej aplikacji.</strong> Wzmacnianie Chrome nie sprawia, że Spotify jest głośniejsze. Każda aplikacja pozostaje niezależna.</li>
  <li><strong>Działa z każdą przeglądarką.</strong> Safari, Chrome, Firefox, Arc, Brave — jeśli to aplikacja na twoim Mac, SoundDial możesz nią sterować.</li>
  <li><strong>Wzrasta do 200%.</strong> Podwójnie przewyższa normalny limit głośności. Nawet najcichsze wideo staje się słyszalne.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Sprawdź SoundDial w Mac App Store</a> — jednorazowy zakup 14,99 €, bez subskrypcji macOS 14,2+.</p>
`,
  },
  "mac-notification-sounds-too-loud-headphones": {
    slug: "mac-notification-sounds-too-loud-headphones",
    title: "Mac powiadomienie brzmi zbyt głośno w słuchawkach? Oto jak to naprawić",
    description:
      "Dźwięki slacka i alerty macOS są boleśnie głośne w słuchawkach, podczas gdy muzyka jest w porządku. Oto dlaczego głośność powiadomień jest inna — i jak ją opanować.",
    date: "2026-05-25",
    readTime: "5 min read",
    content: `
<p>Masz słuchawki i słuchasz muzyki na komfortowej głośności 40%. Powiadomienie ze Slacka się uruchamia. <em>DING.</em> Jest ogłuszająco głośno w porównaniu do twojej muzyki. Dzwoni ci w uszach. Zrywasz słuchawki.</p>

<p>Dzieje się tak, ponieważ macOS nie pozwala osobno kontrolować głośności powiadomień w porównaniu do mediów. Twoja muzyka może być na komfortowym poziomie, ale dźwięki alarmowe — pingi Slacka, powiadomienia z Maila, przypomnienia z kalendarza macOS dźwięki systemu — grają z pełną intensywnością względem głośności systemu.</p>

<h2>Dlaczego powiadomienia brzmią głośniej niż muzyka</h2>

<p>Dźwięki powiadomień to krótkie, ostre wybuchy dźwiękowe, które mają na celu zwrócenie twojej uwagi. Mają one dużą objętość szczytową z założenia. Muzyka, w przeciwieństwie do niej, ma szeroki zakres dynamiczny — cichsze fragmenty, głośniejsze fragmenty i ogólnie opanowany poziom stworzony do długotrwałego słuchania.</p>

<p>Gdy głośność systemu jest na 40%, muzyka jest na poziomie 40% poziomu masteringu — co może być komfortowe 60-70 dB w słuchawkach. Ale dźwięk powiadomienia przy 40% głośności systemu może nadal osiągać 80+ dB, ponieważ sam plik dźwiękowy powiadomienia jest masterowany na znacznie wyższym poziomie szczytowym. Objętość systemu skaluje się równo pod względem procentu, ale ich poziomy początkowe są bardzo różne.</p>

<p>W słuchawkach jest to gorsze. Dźwięk trafia bezpośrednio do kanału słuchowego bez możliwości rozpraszania się, więc różnica głośności między cichą muzyką a ostrym sygnałem powiadomienia jest wzmocniona.</p>

<h2>Wbudowane sposoby na zmniejszenie liczby powiadomień</h2>

<h3>Zmniejsz głośność alarmów</h3>
<p>macOS ma osobny suwak "Alert volume" ukryty w ustawieniach. Przejdź do <strong>Ustawienia systemu → dźwięk</strong> i szukaj <strong>Głośność alarmu</strong> Suwak. Steruje ona głośnością dźwięków systemowych i alertów oddzielnie od głównego głośności.</p>
<p><strong>Ograniczenia:</strong> Dotyczy to tylko macOS alertów systemowych (takich jak sygnały dźwiękowe błędu i dźwięki śmieci). Nie wpływa to na dźwięki powiadomień z aplikacji takich jak Slack, Discord czy Teams, które odtwarzają własny dźwięk przez własny silnik dźwiękowy.</p>

<h3>Wyłącz dźwięki powiadomień w każdej aplikacji</h3>
<p>Przejdź do <strong>Ustawienia systemowe → powiadomienia</strong>, wybierz aplikację, która jest zbyt głośna, i wyłącz "Odtwórz dźwięk dla powiadomień." To całkowicie wycisza powiadomienia tej aplikacji.</p>
<p><strong>Ograniczenia:</strong> To wszystko albo nic. Nie możesz tworzyć powiadomień na Slacku <em>ciszej.</em> — tylko całkowicie włączonym lub całkowicie wyłączonym. I tracisz sygnał dźwiękowy, który mówi, że coś się wydarzyło, bez patrzenia na ekran.</p>

<h3>Użyj trybów ostrości</h3>
<p>Tryby ostrości (Nie przeszkadzać, Praca itp.) mogą tłumić dźwięki powiadomień ze wszystkich lub wybranych aplikacji. To działa podczas sesji głębokiego skupienia, ale nie jest praktyczne przez cały dzień — przegapisz ważne powiadomienia.</p>

<h2>Prawdziwe rozwiązanie: kontroluj głośność w aplikacji powiadomień niezależnie</h2>

<p>To, czego naprawdę chcesz, jest proste: spraw, by Slack był cichszy, ale nie wyciszając muzyki. Obniż liczbę powiadomień do 15%, a Spotify utrzymuj na poziomie 50%. macOS ci na to nie pozwala.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Robi. Każda aplikacja daje własny suwak głośności, dzięki czemu możesz ustawić aplikacje z dużą ilością powiadomień, takie jak Slack, Mail czy Kalendarz, na znacznie niższy poziom, jednocześnie utrzymując aplikacje multimedialne na komfortowym poziomie.</p>

<img src="/apps/sounddial.png" alt="SoundDial wyświetlanie Slacka na niskim poziomie i Spotify na normalnej głośności — niezależna kontrola powiadomień na macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Typowy zestaw przyjazny słuchawkom</h3>
<ul>
  <li><strong>Spotify / Muzyka</strong> — 50% (komfortowy poziom słuchania)</li>
  <li><strong>Luz</strong> — 15% (zauważalne, ale nie zaskakujące)</li>
  <li><strong>Poczta</strong> — 10% (subtelny dźwięk, nie wytrząsnie cię)</li>
  <li><strong>Kalendarz</strong> — 20% (wystarczająco, by zauważyć, nie boli)</li>
  <li><strong>Zoom / FaceTime</strong> — 90% (dźwięk wyraźnego połączenia)</li>
  <li><strong>Przeglądarka</strong> — 40% (odpowiadający poziom muzyki do odtwarzania wideo)</li>
</ul>

<p>Zapisz to jako profil "Słuchawki" w SoundDial i zastosuj jednym kliknięciem za każdym razem, gdy podłączasz podłączanie. Stwórz osobny profil "Speakers" z różnymi proporcjami, gdy pracujesz przy biurku.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Sprawdź SoundDial w Mac App Store</a> — jednorazowy zakup 14,99 €, bez subskrypcji macOS 14,2+.</p>
`,
  },
  "stop-zoom-lowering-music-mac": {
    slug: "stop-zoom-lowering-music-mac",
    title: "Jak powstrzymać Zoom przed obniżaniem muzyki na Mac",
    description:
      "Za każdym razem, gdy dołączasz do rozmowy na Zoomie, muzyka znika lub znika. Oto dlaczego tak się dzieje i jak kontrolować, co robi się cichiejsze podczas rozmów — na własnych warunkach.",
    date: "2026-05-28",
    readTime: "6 min read",
    content: `
<p>Dołączasz do rozmowy na Zoomie. Spotify grało na przyjemnej głośności. Połączenie łączy się i — twoja muzyka znika lub prawie znika do zera. Nic nie dotknąłeś. Zoom (lub macOS) postanowił obniżyć twoją muzykę bez pytania.</p>

<p>To doprowadza ludzi do szaleństwa, bo jest niewidzialne i automatyczne. Nic nie wyciszyłeś. Nie zmieniłeś suwaka. Coś w systemie zdecydowało, że muzyka powinna być cichsza, a ty nie masz oczywistego sposobu, by to kontrolować.</p>

<p>Oto, co się naprawdę dzieje i jak odzyskać kontrolę.</p>

<h2>Dlaczego Twoja muzyka cichnie podczas rozmów na Zoomie</h2>

<p>Istnieją dwie możliwe przyczyny:</p>

<h3>1. Wbudowane ducking audio w Zoomie</h3>
<p>Zoom ma własne przetwarzanie dźwięku, które może wpływać na inne dźwięki na twoim systemie. W niektórych konfiguracjach Zoom redukuje dźwięk systemowy podczas aktywacji mikrofonu, dzięki czemu dźwięk rozmowy jest wyraźniejszy. Nie zawsze jest to oczywiste w ustawieniach Zooma.</p>

<p>Sprawdź ustawienia Zoom → → Audio:</p>
<ul>
  <li>Sprawdź jakieś ustawienie "Automatycznie dostosuj głośność mikrofonu" i spróbuj je wyłączyć</li>
  <li>Sprawdź "Suppress background noise" — to przetwarza dźwięk i może wpływać na postrzeganą głośność</li>
  <li>Upewnij się, że "Użyj osobnego urządzenia audio do jednoczesnej interpretacji" jest odznaczone, chyba że jest to konieczne</li>
</ul>

<h3>2. macOS przełączanie kodeków</h3>
<p>Gdy Zoom aktywuje mikrofon (szczególnie w słuchawkach Bluetooth takich jak AirPods), macOS przełącza się z wysokiej jakości kodeka audio AAC na niższej jakości kodek SCO. Ta zmiana kodeka często obniża ogólną głośność i jakość dźwięku. To nie wina Zooma — dzieje się tak w każdej aplikacji, która korzysta z mikrofonu przez Bluetooth.</p>

<p>Jeśli używasz AirPods lub innych słuchawek Bluetooth i głośność spada po rozpoczęciu rozmowy, to prawdopodobnie jest to przyczyna.</p>

<h2>Wbudowane poprawki</h2>

<h3>Używaj słuchawek przewodowych</h3>
<p>Problem przełączania kodeka Bluetooth całkowicie znika przy słuchawkach przewodowych. Adapter słuchawkowy USB-C lub słuchawki z wbudowanym mikrofonem całkowicie eliminują przełączanie AAC→SCO. Jakość dźwięku pozostaje stała przed, w trakcie i po połączeniach.</p>

<h3>Użyj osobnego mikrofonu</h3>
<p>Jeśli używasz wbudowanego mikrofonu w Mac (lub zewnętrznego mikrofonu USB) zamiast mikrofonu w AirPods, nie macOS trzeba zmieniać kodeka Bluetooth. Ustaw urządzenie wejściowe na wbudowany mikrofon w Ustawieniach System → Sound → Input, zostawiając AirPods jako wyjście. Dzięki temu AirPods pozostają w trybie AAC, a głośność nie jest zmieniona.</p>

<h3>Dostosuj ustawienia audio w Zoomie</h3>
<p>W Zoom → ustawieniach → Audio eksperymentuj z wyłączeniem automatycznej regulacji mikrofonu i tłumienia szumów tła. Te funkcje mogą zakłócać poziom dźwięku w innych aplikacjach.</p>

<h2>Prawdziwe rozwiązanie: automatyczne duckowanie na własnych warunkach</h2>

<p>Podstawowym problemem jest to, że nie masz nad tym kontroli <em>ile</em> Muzyka jest ściszona podczas rozmów. System podejmuje tę decyzję za ciebie i zwykle jest zbyt agresywny — muzyka spada niemal do zera zamiast komfortowego poziomu tła.</p>

<p>Tak naprawdę chcesz konfigurowalne automatyczne ducking: "gdy jestem na połączeniu, obniż muzykę do 25% — nie do zera, nie do 50%, dokładnie do 25%."</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Daje ci dokładnie to. Funkcja automatycznego duckingu monitoruje mikrofon i automatycznie koryguje dźwięk tła na początku rozmowy — ale <strong>Kontrolujesz poziom kaczki</strong>.</p>

<img src="/apps/sounddial.png" alt="SoundDial ustawienia automatycznego duckingu — konfigurowalne zmniejszenie głośności podczas rozmów Zoom na Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Jak to działa</h3>
<ol>
  <li>Ustawiasz preferowany poziom kaczki (10% do 80%)</li>
  <li>Dołączasz do rozmowy na Zoomie — aktywuje się mikrofon</li>
  <li>SoundDial wykrywa połączenie i obniża aplikacje w tle do Twojego skonfigurowanego poziomu</li>
  <li>Dźwięk połączenia pozostaje na pełnej głośności</li>
  <li>Odkładasz słuchawkę — wszystkie aplikacje wracają do poprzedniej głośności</li>
</ol>

<p>Różnica w stosunku do podejścia Zoom/macOS:</p>
<ul>
  <li><strong>Ty wybierasz poziom.</strong> 30% to dobry domyślny — muzyka jest słyszalna, ale nie przeszkadza. Możesz ustawić od 10% (prawie bezgłośnie) do 80% (prawie zmniejszone).</li>
  <li><strong>Odtwarza się idealnie.</strong> Gdy połączenie się kończy, każda aplikacja wraca dokładnie tam, gdzie była.</li>
  <li><strong>Działa ze wszystkimi aplikacjami komunikacyjnymi.</strong> Zoom, Teams, FaceTime, Discord, Slack, Google Meet, Webex, Skype.</li>
  <li><strong>Możesz go wyłączyć.</strong> Jeśli chcesz ręcznie zarządzać głośnością dla konkretnego połączenia, po prostu wyłącz automatyczne duckowanie w ustawieniach SoundDial.</li>
</ul>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Sprawdź SoundDial w Mac App Store</a> — jednorazowy zakup 14,99 €, bez subskrypcji macOS 14,2+.</p>
`,
  },
  "airpods-volume-too-low-mac": {
    slug: "airpods-volume-too-low-mac",
    title: "Czy głośność AirPods jest zbyt niska na Mac? Każde wyjaśnienie każdej poprawki",
    description:
      "AirPods brzmią cicho na Mac nawet przy pełnej głośności? Oto wszystkie przyczyny — od ograniczeń bezpieczeństwa słuchawek po dziwactwa Bluetooth — oraz jak je naprawić.",
    date: "2026-06-08",
    readTime: "7 min read",
    content: `
<p>Twoje AirPods działają dobrze na iPhonie. Są całkiem głośne. Ale podłącz je do Mac — oczywiście bezprzewodowo — i nagle wszystko staje się zbyt ciche. Głośność systemu jest na maksa. Spotify jest na maksa. AirPods po prostu... nie są wystarczająco głośne.</p>

<p>To jedna z najczęstszych skarg audio od użytkowników Mac z AirPods. Dobra wiadomość: prawie zawsze da się to naprawić. Zła wiadomość: istnieje około sześciu różnych rzeczy, które mogą to wywołać, i być może będziesz musiał sprawdzić wszystkie.</p>

<h2>1. Bezpieczeństwo słuchawek to ograniczenie głośności</h2>

<p>To najczęstsza przyczyna. macOS posiada wbudowaną funkcję ograniczającą głośność słuchawek, chroniąc słuch.</p>

<p>Przejdź do <strong>Ustawienia systemowe → Bezpieczeństwo dźwięku → słuchawek</strong>.</p>

<p>Jeśli włączono "Reduce Loud Audio", aktywnie macOS ogranicza głośność AirPods. Mierzy ekspozycję dźwięku w czasie i obniża głośność, jeśli uważa, że słuchałeś zbyt głośno przez zbyt długi czas.</p>

<p><strong>Poprawka:</strong> Wyłącz całkowicie "Ogranicz głośny dźwięk" lub podnieś próg decybeli do wyższego poziomu. Od razu zauważysz większy zapas na głośność.</p>

<h2>2. Głośność Bluetooth jest niesynchronizowana</h2>

<p>Bluetooth audio ma dwa oddzielne regulatory głośności: jeden po stronie Mac, drugi po stronie AirPods. Powinny być zsynchronizowane, ale czasem się rozchodzą — Mac pokazuje 100%, ale AirPods faktycznie odbierają sygnał o niższej głośności.</p>

<p><strong>Poprawka:</strong> Odłącz AirPods (Ustawienia systemu → Bluetooth → kliknij "i" obok AirPods → Odłącz się), odczekaj pięć sekund, a potem ponownie połącz. To resetuje synchronizację głośności. Spróbuj też schować AirPods z powrotem do etui, zamknąć pokrywę, odczekać dziesięć sekund, a potem je znowu wyjąć.</p>

<h2>3. Kodek audio zmienił się na niższą jakość</h2>

<p>Gdy używasz mikrofonu w AirPods (do rozmowy, Siri lub dyktowania), macOS przełącza się z wysokiej jakości kodeka AAC na niższej jakości kodek SCO. SCO zostało zaprojektowane do rozmów telefonicznych — obniża jakość dźwięku i może również wpływać na odczuwalną głośność.</p>

<p><strong>Poprawka:</strong> Jeśli nie jesteś na połączeniu, ale dźwięk brzmi cicho i niskiej jakości, rozłącz i podłącz ponownie AirPods. macOS powinno wrócić do kodeka AAC do odtwarzania muzyki. Jeśli jesteś na połączeniu, to jest oczekiwane zachowanie — kodek automatycznie przełącza się z powrotem po zakończeniu połączenia.</p>

<h2>4. Jeden AirPod jest cichszy od drugiego</h2>

<p>Jeśli głośność wydaje się niska, bo jeden AirPod jest wyraźnie cichszy, problem może być fizyczny — woskowina lub zanieczyszczenia blokujące siatkę głośnika.</p>

<p><strong>Poprawka:</strong> Delikatnie czyść AirPods suchą, wolną od kłaczków szmatką. Do siatki głośnikowej użyj suchej szczotki z miękkim włosiem. Nie używaj płynów, sprężonego powietrza ani ostrych przedmiotów. Sprawdź też <strong>Ustawienia systemowe → dostępność → dźwięku</strong> — upewnij się, że suwak balansu dźwięku w lewej/prawej stronie jest wyśrodkowany.</p>

<h2>5. Sama aplikacja generuje niską objętość</h2>

<p>Niektóre aplikacje mają własne wewnętrzne regulatory głośności, które są oddzielne od systemowego głośności. Spotify, VLC, YouTube i Zoom mają niezależne suwaki głośności. Jeśli wewnętrzna głośność aplikacji wynosi 50%, otrzymujesz tylko połowę — nawet jeśli macOS i AirPods są na 100%.</p>

<p><strong>Poprawka:</strong> Sprawdź regulację głośności w aplikacji, której używasz, i upewnij się, że jest ustawiona na maksa.</p>

<h2>6. Core Audio jest w złym stanie</h2>

<p>Demon audio macOS (coreaudiod) czasem utknie w stanie, gdzie dźwięk Bluetooth jest kierowany nieprawidłowo lub na niższym poziomie, zwłaszcza po uśpiewaniu/wybudzeniu lub przełączaniu się między wieloma urządzeniami audio.</p>

<p><strong>Poprawka:</strong> Otwórz terminal i biegnij:</p>
<p><code>Sudo Killall Coreaudiod</code></p>
<p>Dźwięk na sekundę się zrywa i potem się restartuje. Twoje AirPods mogą ponownie podłączyć się na bardziej normalnym poziomie głośności.</p>

<h2>Wciąż za cicho? Zwiększ głośność AirPods powyżej 100%</h2>

<p>Jeśli sprawdziłeś wszystkie powyższe przyczyny, a AirPods nadal nie są wystarczająco głośne, może być potrzebne wzmocnienie głośności — wzmocnienie sygnału audio ponad to, na co macOS normalnie pozwala.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Pozwala podnieść głośność dowolnej aplikacji do poziomu <strong>200%</strong>. Jeśli Spotify jest zbyt ciche przez AirPods, przeciągnij suwak Spotify na 150% lub 180% w SoundDial. Sygnał audio jest wzmacniany zanim trafi do AirPods, co sprawia, że są głośniejsze niż Apple zamierzało.</p>

<img src="/apps/sounddial.png" alt="SoundDial zwiększenie głośności aplikacji AirPods na Mac z suwakami głośności dostosowanymi do aplikacji do 200%" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Zaletą boostingu w poszczególnych aplikacjach jest to, że możesz podbić cichą aplikację bez poddawania głośności całej innej aplikacji. Jeśli twoja rozmowa wideo działa dobrze na 100%, ale Spotify potrzebuje 170%, SoundDial pozwala ustawić je osobno.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Sprawdź SoundDial w Mac App Store</a> — jednorazowy zakup 14,99 €, bez subskrypcji macOS 14,2+.</p>
`,
  },
  "spotify-volume-too-low-mac": {
    slug: "spotify-volume-too-low-mac",
    title: "Czy głośność Spotify jest za niska na Mac? Oto wszystkie poprawki",
    description:
      "Spotify na maksymalnej głośności, ale nadal za cicho na Mac? Ten przewodnik obejmuje każdą przyczynę — od wbudowanego limitera Spotify po ustawienia macOS — oraz jak zwiększyć jego poziom powyżej 100%.",
    date: "2026-06-11",
    readTime: "7 min read",
    content: `
<p>Spotify gra na pełnej głośności. Twój Mac jest na pełnej głośności. A i tak nie jest wystarczająco głośny. To jedna z najczęstszych skarg na Spotify na Mac i ma wiele przyczyn — z których większość nie jest oczywista.</p>

<p>Ten przewodnik wyjaśnia wszystkie powody, dla których Spotify może być zbyt ciche na Mac oraz jak naprawić każdy z nich. W tym jak podbić głośność Spotify powyżej 100%, jeśli nic innego nie działa.</p>

<h2>Najpierw sprawdź suwak głośności Spotify</h2>

<p>Spotify ma niezależną regulację głośności w prawym dolnym rogu aplikacji (lub na dole ekranu przeprojektowanego odtwarzacza). Ten suwak jest oddzielny od systemowej głośności twojego Mac. Jeśli jest na 50%, to Spotify emituje tylko połowę potencjalnej głośności — nawet jeśli twój system jest na 100%.</p>

<p><strong>Poprawka:</strong> Upewnij się, że suwak głośności w aplikacji Spotify jest całkowicie po prawej stronie (100%).</p>

<h2>Sprawdź normalizację głośności w Spotify</h2>

<p>Spotify ma funkcję o nazwie <strong>Normalizacja objętości</strong> To automatycznie reguluje głośność odtwarzania, żeby wszystkie utwory były odtwarzane mniej więcej na tym samym poziomie. Ma to zapobiegać gwałtownym skokom głośności między utworami, ale może też obniżyć ogólną głośność głośniejszych utworów.</p>

<p>Aby to sprawdzić: otwórz Spotify → Ustawienia → odtwarzanie → <strong>Normalizuj objętość</strong>.</p>

<p>Masz trzy opcje:</p>
<ul>
  <li><strong>Głośno</strong> — najmniejsza normalizacja, najbliższa oryginalnym poziomom masteringu</li>
  <li><strong>Normalne</strong> — umiarkowana normalizacja (domyślna)</li>
  <li><strong>Cisza</strong> — większość normalizacji dodatkowo zmniejsza objętość</li>
</ul>

<p><strong>Poprawka:</strong> Jeśli Spotify brzmi zbyt cicho, albo całkowicie wyłącz normalizację, albo ustaw ją na "Głośno". To najczęstsza przyczyna niespodziewanej cichości na Spotify.</p>

<h2>Sprawdź ustawienia jakości dźwięku w Spotify</h2>

<p>Niższe ustawienia jakości dźwięku czasem powodują cichsze odtwarzanie, zwłaszcza na starszym sprzęcie audio. Wejdź do ustawień Spotify → Ustawienia → jakości dźwięku i upewnij się, że używasz "Bardzo wysokiego" (320 kbps), jeśli masz subskrypcję Premium, lub "Wysokiego" (256 kbps) w darmowym poziomie.</p>

<h2>Sprawdź macOS granice bezpieczeństwa słuchawek</h2>

<p>Jeśli używasz słuchawek (przewodowych lub Bluetooth), macOS może ograniczać głośność. Przejdź do <strong>Ustawienia systemowe → Bezpieczeństwo dźwięku → słuchawek</strong>. Jeśli włączone jest "Reduce Loud Audio", macOS ogranicza głośność słuchawek na poziomie, który uważa za bezpieczny.</p>

<p><strong>Poprawka:</strong> Wyłącz "Redukuj głośny dźwięk" lub podnieś próg decybeli. Uwaga: to ustawienie dotyczy tylko wyjścia słuchawkowego, nie głośników.</p>

<h2>Sprawdź głośność Bluetooth</h2>

<p>Jeśli używasz AirPods lub głośników Bluetooth, jest osobna warstwa głośności. Urządzenia Bluetooth mają własną głośność, którą negocjują Mac i urządzenie. Czasem to się wymyka.</p>

<p><strong>Poprawka:</strong> Odłącz i ponownie podłącz urządzenie Bluetooth. Sprawdź też, czy urządzenie ma własne przyciski głośności — upewnij się, że są one ustawione na maksa.</p>

<h2>Reset Core Audio</h2>

<p>System audio macOS czasem może utknąć w stanie niskiej głośności, zwłaszcza po cyklach uśpienia/pobudki lub przełączaniu się między urządzeniami wyjściowymi. Restartowanie demona audio często to naprawia.</p>

<p>Otwórz terminal i biegnij:</p>
<p><code>Sudo Killall Coreaudiod</code></p>

<p>Dźwięk na chwilę się przerywa i uruchamia ponownie. Spróbuj ponownie na Spotify — może być głośniej.</p>

<h2>Zwiększ Spotify ponad 100% dzięki SoundDial</h2>

<p>Jeśli próbowałeś wszystkiego powyżej i Spotify nadal jest za ciche, problem może polegać na tym, że maksymalna moc Spotify po prostu nie jest wystarczająco głośna dla twojego zestawu. Jest to powszechne w przypadku wbudowanych głośników MacBook oraz niektórych urządzeń Bluetooth.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Pozwala podnieść głośność dowolnej aplikacji do poziomu <strong>200%</strong> — w tym Spotify. Przechwytuje strumień audio Spotify i wzmacnia go ponad wbudowane maksymalne wartości aplikacji, nie wpływając na głośność innych aplikacji.</p>

<img src="/apps/sounddial.png" alt="SoundDial podbijanie głośności Spotify do 200% na macOS podczas normalnej głośności innych aplikacji" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Oto kluczowa różnica: system podwyższenia głośności dałby <em>wszystko</em> głośniej — powiadomienia, połączenia, dźwięki systemowe — nie tylko Spotify. SoundDial wspiera Spotify <em>niezależnie</em>. Ustaw Spotify na 160%, podczas gdy przeglądarka pozostaje na 80%, a Zoom na 100%.</p>

<h2>Bonus: automatyczne duckowanie muzyki podczas rozmów</h2>

<p>Jeśli problem odwrotny pojawi się — Spotify jest zbyt głośne podczas rozmów wideo — funkcja automatycznego duckingu w SoundDial automatycznie zmniejsza poziom Spotify podczas dołączania do rozmowy Zoom, Teams lub FaceTime. Po zakończeniu rozmowy Spotify wraca do poprzedniej głośności. Nie trzeba ręcznie regulować.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Sprawdź SoundDial w Mac App Store</a> — jednorazowy zakup 14,99 €, bez subskrypcji macOS 14,2+.</p>
`,
  },
  "separate-game-audio-from-discord-mac": {
    slug: "separate-game-audio-from-discord-mac",
    title: "Jak oddzielić dźwięk gry od Discorda na Mac",
    description:
      "Eksplozje w grze zagłuszające twoich towarzyszy na Discordzie? Oto jak niezależnie sterować dźwiękiem i głośnością czatu głosowego w grze na macOS.",
    date: "2026-06-10",
    readTime: "6 min read",
    content: `
<p>Grasz na Mac. W grze wybucha eksplozja. Twoi koledzy z Discorda rozmawiają, ale nie słychać ich przez strzały. Ściszasz głośność — teraz Discord jest też cichszy. Podkręcasz z powrotem — eksplozje znów są ogłuszające.</p>

<p>Na Windowsie otwierasz mikser głośności, ściszasz grę na 40%, a Discord zostaje na 100%. Na Mac nie możesz. macOS daje jeden suwak głośności dla wszystkiego, więc dźwięk gry i czat głosowy są na stałe połączone.</p>

<p>Ten przewodnik pokazuje, jak uzyskać niezależną regulację głośności dla gry i Discorda (lub dowolnego czatu głosowego) na Mac.</p>

<h2>Dlaczego jest to problem specyficzny dla Mac</h2>

<p>Windows ma wbudowany mikser głośności od 2006 roku, który pozwala kontrolować głośność każdej aplikacji niezależnie. macOS nigdy nie dodał tej funkcji. Dźwięk każdej aplikacji jest miksowany w jeden strumień, a jedyną kontrolą jest jeden główny suwak, który wpływa na wszystko jednakowo.</p>

<p>Oznacza to:</p>
<ul>
  <li>Jeśli twoja gra jest za głośna, ściszenie jej również obniża Discord</li>
  <li>Jeśli Discord jest zbyt cichy, podgłośnienie gry też podkręca grę</li>
  <li>Nie możesz znaleźć balansu, bo obie aplikacje są zablokowane do tej samej głośności</li>
</ul>

<h2>Obejścia, które tak naprawdę nie działają</h2>

<h3>Używaj ustawień głośności w grze</h3>
<p>Większość gier ma menu ustawień dźwięku, gdzie można niezależnie ściszyć głośność master, muzykę, efekty dźwiękowe i czat głosowy. To pomaga, ale zmieniasz ustawienia w grze — czyli musisz pauzować rozgrywkę, nawigować po menu i dostosowywać za każdym razem, gdy zmieniają się warunki. A jeśli zmienisz grę, zaczynasz od nowa.</p>

<h3>Użyj regulacji głośności Discorda</h3>
<p>Discord pozwala regulować głośność wyjściową w ustawieniach → Voice & Video, a głośność poszczególnych użytkowników można dostosować, klikając prawym przyciskiem myszy ich imię. Ale to kontroluje wewnętrzny miks Discorda, a nie jego głośność względem innych aplikacji. Jeśli gra jest za głośna, to głośniejsze wewnętrzne Discord nie pomaga, bo głośność systemu wpływa na oba te elementy jednakowo.</p>

<h3>Używaj różnych urządzeń wyjściowych</h3>
<p>Niektórzy próbują przesyłać dźwięk z gry do głośników, a Discord do słuchawek (lub odwrotnie). macOS nie ułatwia tego — potrzebowałbyś wirtualnego urządzenia audio i ręcznego routingu dla aplikacji. A noszenie słuchawek z jednoczesnymi głośnikami jest co najwyżej niezręczne.</p>

<h2>Właściwe rozwiązanie: kontrola głośności w zależności od aplikacji</h2>

<p>Potrzebujesz możliwości ustawienia głośności gry niezależnie od głośności Discorda. Dokładnie to robi mikser głośności w aplikacji aplikującej.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Znajduje się w pasku menu i nadaje każdej aplikacji własny suwak głośności. Możesz ustawić grę na 35%, a Discord na 100% — lub dowolny dla ciebie stosunek. Zmień jedną, a drugą zostaje.</p>

<img src="/apps/sounddial.png" alt="SoundDial wyświetlanie niezależnych suwaków głośności dla gry i Discorda na macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h3>Typowy zestaw do gier</h3>
<ul>
  <li><strong>Gra</strong> — 30-50% (wystarczająco głośno, by się zanurzyć, nie przytłaczające)</li>
  <li><strong>Discord / czat głosowy</strong> — 90-100% (zawsze wyraźnie słyszalne przez dźwięk gry)</li>
  <li><strong>Spotify / muzyka</strong> — 15-25% (subtelne tło, nie przeszkadza)</li>
  <li><strong>Przeglądarka</strong> — wyciszony (bez zaskoczenia automatyczne odtwarzanie wideo)</li>
  <li><strong>Slack / powiadomienia</strong> — wyciszony (czas ostrości)</li>
</ul>

<h3>Zapisz to jako profil</h3>
<p>SoundDial <strong>Profile objętości</strong> Pozwalamy zapisać tę konfigurację i zastosować ją jednym kliknięciem. Stwórz profil "Gaming" z preferowanym balansem gry/Discord, profil "Work" dla muzyki i rozmów i przełączaj się między nimi natychmiast. Nie trzeba regulować suwaków za każdym razem, gdy siadasz do gry.</p>

<h3>Podwyższenie głośności dla cichego czatu głosowego</h3>
<p>Czasem problemem nie jest to, że gra jest za głośna — tylko że Discord jest zbyt cichy. Niektórzy współpracownicy mają słabe mikrofony albo wyjście Discorda jest niższe niż w innych aplikacjach. SoundDial pozwala podnieść głośność dowolnej aplikacji do poziomu <strong>200%</strong>, więc możesz wzmocnić Discorda powyżej normalnego maksimum bez dotykania głośności gry.</p>

<h2>Działa z każdą grą i każdym czatem głosowym</h2>

<p>SoundDial działa ze wszystkimi aplikacjami, które produkują dźwięk na macOS. Nie ma znaczenia, czy grasz przez Steam, App Store, Epic Games czy grę przeglądarkową. Nie ma znaczenia, czy korzystasz z Discorda, TeamSpeak, Mumble czy FaceTime. Jeśli wydaje dźwięk, SoundDial może nim sterować.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Sprawdź SoundDial w Mac App Store</a> — jednorazowy zakup 14,99 €, bez subskrypcji macOS 14,2+.</p>
`,
  },
  "why-doesnt-mac-have-volume-mixer": {
    slug: "why-doesnt-mac-have-volume-mixer",
    title: "Dlaczego Mac nie ma miksera głośności jak Windows?",
    description:
      "Windows ma kontrolę głośności w zależności od aplikacji od 2006 roku. Jest rok 2026 i macOS nadal nie ma. Oto prawdziwy powód — i jak w ogóle go zdobyć.",
    date: "2026-06-09",
    readTime: "6 min read",
    content: `
<p>Każda wersja Windows od czasów Visty (2006) zawierała mikser głośności. Kliknij prawym przyciskiem myszy na ikonę głośnika, kliknij "Volume Mixer" i zobaczysz każdą aplikację z własnym suwakiem głośności. Możesz wyciszyć Chrome bez wpływu na Spotify. Możesz obniżyć Discorda bez dotykania gry.</p>

<p>Na macOS? Jeden suwak. To wszystko, co dostajesz. Dwadzieścia lat aktualizacji Mac — Ventura, Sonoma, Sequoia, Tahoe — i Apple nigdy nie wprowadziło kontroli głośności w zależności od aplikacji.</p>

<p>Ludzie ciągle zadają sobie to pytanie: <em>Dlaczego Mac nie ma miksera głośności?</em></p>

<h2>To nie jest ograniczenie techniczne</h2>

<p>Wyjaśnijmy to od razu: macOS zdecydowanie można regulować głośność w zależności od aplikacji. Podstawowa struktura audio — <strong>Core Audio</strong> — obsługuje podsłuchiwanie audio dla poszczególnych procesów, routing i regulację wzmocnienia na poziomie API. Apple wprowadziło <strong>Audio Tap API</strong> w macOS 14 (Sonoma), co jeszcze bardziej ułatwia deweloperom przechwytywanie i modyfikowanie pojedynczych strumieni audio aplikacji.</p>

<p>Deweloperzy zewnętrzni od lat tworzą miksery głośności dla aplikacji z wykorzystaniem tych API. Technologia istnieje. Apple po prostu nie stworzyło jeszcze wersji skierowanej do użytkownika.</p>

<h2>Dlaczego więc Apple tego nie stworzyło?</h2>

<p>Apple nigdy publicznie nie wyjaśniło dlaczego. Ale patrząc na ich wzorce projektowe, odpowiedź jest dość jasna: <strong>Apple stawia na prostotę ponad funkcje wymagające użytkowników.</strong></p>

<p>Jeden suwak głośności jest prostszy niż dwanaście. Łatwiej to wyjaśnić, łatwiej się nauczyć i nie wymaga żadnej konfiguracji. Dla użytkownika, który robi tylko jedną rzecz naraz — słucha muzyki LUB odbiera połączenie LUB ogląda film — jeden suwak działa bez problemu. Apple projektuje najpierw dla tego użytkownika.</p>

<p>Istnieje też argument filozoficzny: Apple uważa, że aplikacje powinny same zarządzać swoim dźwiękiem. Jeśli Spotify jest za głośne, ścisz je w Spotify. Jeśli Zoom jest zbyt cichy, podgłośnij go w Zoomie. System operacyjny nie powinien pośredniczyć w mediach.</p>

<p>Problem w tym, że ta filozofia nie odpowiada rzeczywistości. W 2026 roku wszyscy mają wiele zadań naraz z dźwiękiem:</p>

<ul>
  <li>Muzyka grana podczas pracy</li>
  <li>Połączenia wideo z powiadomieniami pingającymi</li>
  <li>Karty przeglądarki automatycznie odtwarzają reklamy</li>
  <li>Gry z włączonym Discordem</li>
  <li>Podcasty w jednym uchu, Slack w drugim</li>
</ul>

<p>"Po prostu dostosuj to w każdej aplikacji" oznacza przełączanie się między sześcioma aplikacjami, znalezienie sześciu różnych regulatorów głośności (niektóre z nich nie istnieją) i robienie tego kilka razy dziennie. To przeciwieństwo prostoty.</p>

<h2>Czy Apple kiedykolwiek go doda?</h2>

<p>Nie ma żadnych wskazówek, by Apple planowało dodać mikser głośności w którejkolwiek z najbliższych macOS premier. Funkcja ta nie pojawiła się w żadnej macOS betze, zgłoszeniu patentowym ani mapie drogowej WWDC. Centrum sterowania Apple w pasku menu nadal pokazuje tylko jeden suwak głośności systemowej.</p>

<p>Możliwe, że Apple w końcu go doda — przyjęli funkcje, które wcześniej odrzucili (widżety, kafelki okien, wielookienny iPad). Ale czekanie na Apple oznacza czekanie w nieskończoność.</p>

<h2>Jak włączyć mikser głośności Mac teraz</h2>

<p>Odpowiedź to aplikacja na pasku menu firm trzecich. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> to natywny mikser macOS głośności, który robi dokładnie to, co mikser głośności Windows — i to jeszcze więcej.</p>

<img src="/apps/sounddial.png" alt="SoundDial — mikser głośności dla macOS, pokazujący suwaki głośności w zależności od aplikacji na pasku menu" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Co dostajesz:</p>

<ul>
  <li><strong>Suwaki woluminów w zależności od aplikacji</strong> — każda aplikacja do biegania ma swój własny suwak, od 0% do 200%</li>
  <li><strong>Wycisz w każdej aplikacji</strong> — jedno kliknięcie, by wyciszyć dowolną aplikację, kliknąć ponownie, aby odciszyć</li>
  <li><strong>Profile objętości</strong> — zapisz konfiguracje dla różnych sytuacji (Praca, Skupienie, Gry) i przełącz jednym kliknięciem</li>
  <li><strong>Auto-ducking</strong> — dźwięk w tle automatycznie się zmniejsza, gdy dołączasz do połączenia, a przywraca po rozłączeniu</li>
  <li><strong>Zwiększenie głośności do 200%</strong> — wzmocnić ciche aplikacje ponad ich normalne maksimum</li>
  <li><strong>Skróty klawiaturowe</strong> — przełączaj mikser lub wycisz wszystkie aplikacje za pomocą skrótu klawiszowego</li>
  <li><strong>Przełączanie urządzeń wyjściowych</strong> — przełączanie się między głośnikami, słuchawkami i urządzeniami zewnętrznymi z tego samego panelu</li>
  <li><strong>Pamięć woluminowa</strong> — głośność każdej aplikacji jest zapamiętywana między restartami</li>
</ul>

<p>To funkcja, którą Apple powinno było zbudować dwadzieścia lat temu. Jednorazowy zakup na <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Brak subskrypcji. macOS 14,2+.</p>

<p>Mikser głośności macOS powinien być wbudowany.</p>
`,
  },
  "boost-mac-volume-beyond-100-percent": {
    slug: "boost-mac-volume-beyond-100-percent",
    title: "Mac głośność za niska? Jak podbić dźwięk ponad 100%",
    description:
      "Twój Mac jest na pełnej głośności, a nadal jest zbyt cichy. Oto dlaczego tak się dzieje i jak wzmocnić dźwięk do 200% bez zewnętrznych głośników.",
    date: "2026-06-07",
    readTime: "8 min read",
    content: `
<p>Twój Mac objętość jest na 100%. Suwak jest całkowicie po prawej. A i tak nie jest wystarczająco głośny. Podcast jest zbyt cichy. Uczestnik rozmowy wideo brzmi, jakby szeptał. Film na YouTube został nagrany zbyt nisko. Osiągnąłeś maksimum — i to za mało.</p>

<p>To jedna z najczęstszych skarg na dźwięk w Mac, zwłaszcza w przypadku wbudowanych głośników w MacBooku Air i starszych modelach MacBooka Pro. Głośniki są fizycznie małe, a część treści jest po prostu nagrywana na niższym poziomie niż inne.</p>

<p>Oto dlaczego tak się dzieje i jak to naprawić — w tym jak zwiększyć głośność Mac powyżej 100% limitu.</p>

<h2>Dlaczego twoje Mac brzmi zbyt cicho przy pełnej głośności</h2>

<p>Istnieje kilka powodów, dla których twoje Mac może nie być wystarczająco głośne nawet przy maksymalnej głośności:</p>

<h3>1. Sama treść jest cicha</h3>
<p>Nie cały dźwięk jest masterowany na tym samym poziomie. Profesjonalnie wyprodukowany podcast może osiągnąć szczyt do -3 dB, podczas gdy zwykły film na YouTube lub nagranie rozmowy na Zoomie mogą osiągnąć szczyt do -20 dB. Różnica jest ogromna. Gdy głośność systemu jest ustawiona na 100%, cicha zawartość pozostaje cicha — macOS może tylko wzmocnić do poziomu oryginalnego sygnału.</p>

<h3>2. Głośniki MacBooka mają fizyczne ograniczenia</h3>
<p>Wbudowane głośniki w MacBooku Air lub MacBooku Pro 13" są małe. Są zaprojektowane pod kątem przenośności, a nie objętości. Większe modele MacBooka Pro od Apple (14" i 16") mają znacznie lepsze głośniki, ale nawet one mają sufit. Jeśli jesteś przyzwyczajony do zewnętrznych głośników lub słuchawek, wbudowane głośniki będą wydawać się słabe.</p>

<h3>3. Głośność Bluetooth jest ograniczona</h3>
<p>Niektóre słuchawki i głośniki Bluetooth mają własny sufit głośności, który jest oddzielny od macOS. Nawet jeśli macOS pokazuje 100%, urządzenie Bluetooth może nie być na maksymalnym poziomie. Jest to szczególnie powszechne w przypadku AirPods, gdzie ogranicznik głośności EU lub funkcja bezpieczeństwa słuchawek w ustawieniach → Dźwięk → Bezpieczeństwo słuchawek może ograniczyć wyjście.</p>

<h3>4. Liczba aplikacji indywidualnych jest niska</h3>
<p>Niektóre aplikacje mają własną wewnętrzną kontrolę głośności, oddzielną od systemowej regulacji głośności. Jeśli głośność w aplikacji Spotify jest na 50%, a systemowa na 100%, to w praktyce słuchasz na 50%. Zoom często domyślnie przyjmuje konserwatywny poziom głośności podczas rozmów.</p>

<h2>Wbudowane poprawki do wypróbowania na początku</h2>

<h3>Sprawdź granice bezpieczeństwa słuchawek</h3>
<p>Przejdź do <strong>Ustawienia systemowe → Bezpieczeństwo dźwięku → słuchawek</strong>. Jeśli włączone jest "Reduce Loud Audio", aktywnie ogranicza macOS głośność, aby chronić słuch. Możesz to wyłączyć lub podnieść próg. Dotyczy to tylko słuchawek — nie dotyka wyjścia głośnikowego.</p>

<h3>Sprawdź głośność urządzenia Bluetooth</h3>
<p>Niektóre urządzenia Bluetooth mają niezależne regulatory głośności. W przypadku AirPods upewnij się, że głośność zarówno Mac, jak i AirPods jest na maksa. W przypadku głośników Bluetooth firm trzecich sprawdź, czy mają własny przycisk głośności lub aplikację.</p>

<h3>Sprawdź głośność w aplikacji</h3>
<p>Otwórz aplikację, która jest zbyt cicha, i poszukaj jej własnego suwaka głośności. Spotify ma taki na pasku odtwarzacza. VLC ma taki w kontrolerze odtwarzania. YouTube ma taki na odtwarzaczu wideo. Upewnij się, że są na 100%, zanim uznasz, że problemem jest Mac.</p>

<h3>Reset Core Audio</h3>
<p>Czasami system audio macOS wpada w zły stan po cyklach uśpienia/pobudzenia lub zmianie urządzenia. Otwórz terminal i biegnij:</p>
<p><code>Sudo Killall Coreaudiod</code></p>
<p>To restartuje demona audio. Twój dźwięk na chwilę się przerywa, a potem wraca, czasem na bardziej normalnym poziomie.</p>

<h2>Jak zwiększyć głośność powyżej 100%</h2>

<p>Jeśli sprawdziłeś wszystko powyżej i twój Mac nadal jest zbyt cichy, potrzebujesz wzmocnienia głośności — możliwości wypychania dźwięku <em>powyżej</em> 100% sufit, który macOS narzuca.</p>

<p>Podgłośnienie działa poprzez przechwytywanie sygnału audio zanim dotrze do głośników i mnoży jego amplitudę. Przy 150% każda próbka audio jest 1,5 razy głośniejsza od oryginału. Przy 200% jest podwajony. Może to powodować lekkie zniekształcenia na ekstremalnych poziomach przy niektórych treściach, ale dla cichego dźwięku to jedyny sposób, by był naprawdę słyszalny.</p>

<h3>SoundDial: wzrost liczby głosów na aplikację do 200%</h3>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Każdej aplikacji na twoim Mac daje niezależny suwak głośności od 0% do <strong>200%</strong>. Jeśli konkretna aplikacja jest zbyt cicha — odtwarzacz podcastów, zakładka przeglądarki, rozmowa wideo — możesz podnieść napięcie samej aplikacji powyżej 100% bez dotykania czegokolwiek innego.</p>

<img src="/apps/sounddial.png" alt="SoundDial Volume Boost — regulacja głośności w zależności od aplikacji z 200% wzmocnieniem na macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Jest to szczególnie przydatne dla:</p>
<ul>
  <li><strong>Ciche aplikacje podcastowe</strong> — niektórzy gracze osiągają maksimum zbyt nisko, zwłaszcza przy podcastach nagrywanych w nieoptymalnych warunkach</li>
  <li><strong>Rozmowy wideo z cichymi uczestnikami</strong> — wzmacniaj Zoom lub Teams, gdy czyjś mikrofon jest niski, nie podbijając przy tym muzyki</li>
  <li><strong>Zakładki przeglądarki</strong> — Filmy na YouTube, aplikacje webowe i media wbudowane często odtwarzają się na niższej głośności niż dedykowane aplikacje multimedialne</li>
  <li><strong>Stare nagrania</strong> — archiwalne nagranie audio, muzyka vintage oraz starsze materiały wideo są często masterowane na niższych poziomach</li>
</ul>

<p>Kluczową zaletą nad systemowymi wzmacniaczami głośności jest to, że SoundDial zwiększa <em>per app</em>. Możesz podnieść aplikację cichą do 180%, a resztę utrzymując na normalnym poziomie. Wzmacniacz systemowy wzmocniłby wszystko równomiernie, sprawiając, że już głośne aplikacje byłyby boleśnie głośne, podczas gdy cicha byłaby nieco cichsza.</p>

<h2>Gdy zewnętrzne rozwiązania są lepsze</h2>

<p>Podbijanie głośności ma swoje ograniczenia. Jeśli próbujesz wypełnić pomieszczenie dźwiękiem z wbudowanych głośników MacBooka Air, żadne oprogramowanie nie poradzi sobie z fizycznym rozmiarem tych głośników. W takim przypadku:</p>

<ul>
  <li><strong>Słuchawki przewodowe</strong> — całkowicie omijają ograniczenia głośników, a większość słuchawek może być głośniejsza niż wbudowane głośniki</li>
  <li><strong>Głośniki zewnętrzne</strong> — nawet tanie głośniki USB lub Bluetooth przewyższą wbudowane głośniki MacBooka pod względem czystej głośności</li>
  <li><strong>Interfejs audio USB</strong> — do użytku profesjonalnego dedykowany interfejs audio zapewnia czysty, mocny sygnał do monitorów studyjnych lub słuchawek</li>
</ul>

<p>Ale w codziennym przypadku — zakładka przeglądarki zbyt cicha, rozmowa, w której ktoś coś mamrocze, podcast nagrany w szafie — zwiększanie głośności oprogramowania <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> to najszybsza naprawa. Kliknij ikonę paska menu, przeciągnij suwak za 100%, gotowe.</p>

<p>Jednorazowy zakup na <a href="https://apps.apple.com/app/sounddial/id6772792641">Mac App Store</a>. Brak subskrypcji. macOS 14,2+.</p>
`,
  },
  "auto-lower-music-during-zoom-calls-mac": {
    slug: "auto-lower-music-during-zoom-calls-mac",
    title: "Jak automatycznie ściszyć muzykę podczas rozmów na Zoomie na Mac",
    description:
      "Za każdym razem, gdy zaczyna się rozmowa na Zoomie, gorączkowo próbujesz zatrzymać Spotify. Jest lepszy sposób — automatyczne duckowanie automatycznie obniża muzykę, gdy mikrofon się aktywuje.",
    date: "2026-06-05",
    readTime: "7 min read",
    content: `
<p>Rozmowa się zaczyna. Dzielisz ekran. Twoja muzyka wciąż gra na pełnych plecach. Gorączkowo przełączasz się na Spotify, wciszasz pauzę, wracasz do Zooma — ale wszyscy już usłyszeli dziesiąt sekund twojej playlisty. Zdarza się to każdemu, i dzieje się dlatego, że macOS nie ma związku między "rozmowa właśnie się zaczęła" a "może ścisz muzykę".</p>

<p>W niektórych telefonach jest to automatyczne — muzyka zatrzymuje się lub zrywa, gdy przychodzi połączenie. Na Mac jesteś zdany na siebie. Chyba że ustawisz automatyczne duckowanie.</p>

<h2>Czym jest audio ducking?</h2>

<p><strong>Audio ducking</strong> oznacza automatyczne obniżenie głośności dźwięku w tle, gdy dzieje się coś ważniejszego — na przykład rozmowa głosowa. Termin pochodzi od inżynierii nadawczej, gdzie muzyka w tle "przenika się" głosem spikera.</p>

<p>W praktyce działa to tak:</p>
<ol>
  <li>Słuchasz muzyki na 50% głośności</li>
  <li>Dołączasz do rozmowy na Zoomie</li>
  <li>Twoja muzyka automatycznie spada do 15%</li>
  <li>Połączenie jest wyraźnie słyszalne bez ręcznej regulacji</li>
  <li>Połączenie się kończy</li>
  <li>Twoja muzyka automatycznie wraca do 50%</li>
</ol>

<p>Nie przełączam aplikacji. Nie robisz pauz. Nie zapomnij odcisnąć muzyki po rozmowie. To jest całkowicie automatyczne.</p>

<h2>Czy macOS ma wbudowane ducking audio?</h2>

<p>Nie. macOS nie ma funkcji automatycznego wygaszania dźwięku. W ustawieniach systemu, dostępności czy ostrości nie ma nic, co łączy "mikrofon jest aktywny" z "niższym dźwiękiem tła". Apple po prostu tego nie zbudowało.</p>

<p>Jest opcja dostępności o nazwie "Odtwórz dźwięk stereo jako mono" oraz opcje wizualnych alertów błyskowych, ale nic, co automatycznie dostosowuje głośność w zależności od tego, czy jesteś w rozmowie.</p>

<h2>Alternatywy manualne (i dlaczego są bolesne)</h2>

<h3>Zatrzymaj muzykę ręcznie przed każdym połączeniem</h3>
<p>Tak robi większość ludzi. To działa — dopóki nie zapomnisz. Albo dopóki ktoś nie zadzwoni niespodziewanie. Albo dopóki nie będziesz miał kolejnych rozmów i nie zatrzymujesz i nie odłączasz Spotify dwanaście razy dziennie. Oznacza to też brak muzyki w tle podczas rozmów, nawet gdy chciałbyś cichej głośności.</p>

<h3>Użyj trybu Focus, aby wyciszyć wszystko</h3>
<p>Możesz stworzyć tryb skupienia "Spotkanie", który blokuje dźwięki powiadomień. Ale tryby ostrości nie kontrolują głośności odtwarzania mediów. Twoja muzyka gra na pełnych obrotach nawet w trybie Nie przeszkadzać — Focus tłumi tylko powiadomienia.</p>

<h3>Ręcznie ustawiam profile głośności</h3>
<p>Stwórz ustawienie "rozmowy", gdzie ręcznie wyłączasz wszystko oprócz aplikacji komunikacyjnej przed każdą rozmową. To działa, ale wymaga zapamiętania i ręcznego przełączania za każdym razem. A potem musisz wrócić do pracy.</p>

<h2>Automatyczne duckowanie z SoundDial</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Ma wbudowaną funkcję automatycznego duckingu, która robi dokładnie to, co macOS powinien robić natywnie. Oto jak to działa:</p>

<h3>Jak wykrywa połączenia</h3>
<p>SoundDial monitoruje status mikrofonu twojego Mac — ten sam wskaźnik, który pokazuje pomarańczową kropkę na pasku menu, gdy aplikacja korzysta z mikrofonu. Gdy wykryje, że aplikacja komunikacyjna aktywowała Twój mikrofon, wie, że rozmowa się rozpoczęła.</p>

<p>Działa ze wszystkimi głównymi aplikacjami komunikacyjnymi:</p>
<ul>
  <li><strong>Zoom</strong></li>
  <li><strong>Microsoft Teams</strong></li>
  <li><strong>FaceTime</strong></li>
  <li><strong>Discord</strong></li>
  <li><strong>Luz</strong> (zgromadzenie i wołanie)</li>
  <li><strong>Google Meet</strong> (przez Chrome)</li>
  <li><strong>Cisco Webex</strong></li>
  <li><strong>Skype</strong></li>
</ul>

<h3>Co się dzieje, gdy rozmowa się zaczyna</h3>
<p>W momencie, gdy mikrofon aktywuje się podczas rozmowy, SoundDial automatycznie zmniejsza głośność wszystkich aplikacji niekomunikacyjnych do poziomu, który sam konfigurujesz — domyślnie 30%. Dźwięk połączenia pozostaje na pełnej głośności. Muzyka w tle spada do subtelnego poziomu. Dźwięki powiadomień milkną.</p>

<p>W nagłówku SoundDial pojawia się mały zielony wskaźnik, potwierdzający aktywne automatyczne duckowanie.</p>

<h3>Co się stanie, gdy połączenie się kończy</h3>
<p>Gdy się rozłączysz i mikrofon się dezaktywuje, SoundDial przywraca głośność aplikacji dokładnie do poziomu sprzed rozpoczęcia połączenia. Twoja muzyka wraca do 50% (albo tam, gdzie ją miałeś). Nie trzeba ręcznie regulować.</p>

<h3>Konfiguracja poziomu kaczki</h3>
<p>W ustawieniach SoundDial możesz dostosować <strong>poziom kaczki</strong> — o ile dźwięku tła jest redukowane podczas rozmowy. Suwak waha się od 10% (ledwo słyszalne) do 80% (wciąż dość widoczny). Domyślne 30% sprawdza się dobrze dla większości osób: muzyka jest zauważalna, ale nie przeszkadza w rozmowie.</p>

<img src="/apps/sounddial.png" alt="SoundDial funkcja automatycznego kaczenia automatycznie obniża głośność muzyki podczas rozmowy Zoom na Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<h2>Dlaczego automatyczne duckowanie jest lepsze niż pauzowanie</h2>

<p>Zatrzymanie muzyki przed rozmową wydaje się proste, ale automatyczne duckowanie jest lepsze na kilka sposobów:</p>

<ul>
  <li><strong>To automatyczna.</strong> Nigdy się nie zapomina. Nie ma żadnego zamieszania, gdy przychodzi niespodziewany telefon.</li>
  <li><strong>Trzymasz muzykę w tle.</strong> Wiele osób woli cichą muzykę w tle podczas rozmów niż ciszę. Auto-ducking pozwala utrzymać komfortowy poziom.</li>
  <li><strong>Obsługuje wiele aplikacji.</strong> To nie tylko muzyka — dźwięki powiadomień, karty przeglądarki i inne źródła dźwięku są jednocześnie wyciskane.</li>
  <li><strong>Odtwarza się idealnie.</strong> Po zakończeniu rozmowy każda aplikacja wraca do dokładnie poprzedniej głośności. Nie trzeba było regulować.</li>
  <li><strong>Działa to przy połączeniach jeden po drugim.</strong> Jeśli masz trzy spotkania z rzędu, automatyczne duckowanie obsługuje wszystkie bez dotykania czegokolwiek.</li>
</ul>

<h2>Przygotowanie w mniej niż minutę</h2>

<ol>
  <li>Instalacja <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial z Mac App Store</a></li>
  <li>Otwórz Ustawienia → zakładce Auto-Duck</li>
  <li>Włącz automatyczne kaczowanie</li>
  <li>Dostosuj suwak poziomu kaczki według własnych preferencji</li>
  <li>To wszystko — automatyczne ducking jest aktywne</li>
</ol>

<p>Następnym razem, gdy dołączysz do rozmowy Zoom, Teams lub FaceTime, dźwięk w tle automatycznie się obniży. Kiedy się rozłączasz, sygnał wraca. Jednorazowy zakup, bez subskrypcji.</p>
`,
  },
  "how-to-mute-one-app-on-mac": {
    slug: "how-to-mute-one-app-on-mac",
    title: "Jak wyciszyć jedną aplikację na Mac bez wyciszania wszystkiego",
    description:
      "Luz pinguje. Jesteś na telefonie. Chcesz wyciszyć Slacka, ale nadal słyszeć swoje wezwanie. macOS ci nie pozwala — oto jak to zrobić.",
    date: "2026-06-03",
    readTime: "6 min read",
    content: `
<p>Jesteś na rozmowie na Zoomie. Slack ciągle wydaje dźwięki powiadomień. Zakładka YouTube, o której zapomniałeś, zaczyna się automatycznie odtwarzać. Naciskasz przycisk wyciszenia — i teraz nie słyszysz też swojego połączenia. macOS niemy <em>wszystko</em>. Nie ma wbudowanego sposobu na wyciszenie tylko jednej aplikacji.</p>

<p>Na Windowsie klikałeś prawym przyciskiem ikony głośnika, otwierał mikser głośności i klikał przycisk wyciszenia obok Slacka. Gotowe. Slack milknie, wszystko inne gra dalej. macOS nie ma odpowiednika.</p>

<p>Ten przewodnik obejmuje każdą dostępną metodę wyciszenia konkretnej aplikacji na Mac — od wbudowanych obejść po jedno rozwiązanie, które faktycznie działa jak prawdziwy przycisk wyciszenia.</p>

<h2>Dlaczego macOS nie mogą wyciszyć pojedynczych aplikacji</h2>

<p>macOS traktuje dźwięk jak jeden strumień. Dźwięk każdej aplikacji jest miksowany zanim dotrze do głośników, a jedyna regulacja głośności, którą daje Apple, działa na końcowym miksie wyjściowym. Nie da się wejść w ten miks i wyciszyć jedną aplikację, nie wpływając na resztę.</p>

<p>To nie jest ograniczenie sprzętowe — to wybór projektowy oprogramowania. Framework Core Audio firmy macOS wspiera kontrolę audio dla poszczególnych procesów na poziomie API. Apple po prostu nie stworzyło skierowanego do użytkownika sposobu dostępu.</p>

<h2>Wbudowane obejścia (i ich ograniczenia)</h2>

<h3>1. Wyłącz powiadomienia dla aplikacji</h3>
<p>Przejdź do <strong>Ustawienia systemowe → powiadomienia</strong> I znajdź aplikację, którą chcesz wyciszyć. Możesz wyłączyć dźwięki w powiadomieniach lub całkowicie wyłączyć powiadomienia.</p>
<p><strong>Haczyk:</strong> To działa tylko w przypadku dźwięków powiadomień. Jeśli aplikacja wydaje inne dźwięki — odtwarzanie mediów, dźwięk połączeń, dźwięki w aplikacji — to nie będzie ich dotykać. I tracisz też powiadomienia wizualne, nie tylko dźwięk.</p>

<h3>2. Użyj trybu ostrości</h3>
<p>macOS tryby ostrości (Nie przeszkadzaj, Praca, Prywatne itd.) mogą tłumić dźwięki powiadomień z konkretnych aplikacji. Możesz ustawić, które aplikacje mogą cię powiadomić w każdym trybie Focus.</p>
<p><strong>Haczyk:</strong> Tryby ostrości dotyczą powiadomień, nie dźwięku. Nie wyciszą Slack huddle, zakładki przeglądarki odtwarzającej dźwięk ani żadnego odtwarzania multimediów. Wymagają też konfiguracji na początku dla każdego trybu — nie możesz po prostu "wyciszyć tej aplikacji teraz."</p>

<h3>3. Zamknij aplikację</h3>
<p>Opcja nuklearna. Jeśli całkowicie zrezygnujesz ze Slacka, nie będzie wydawać dźwięków. Oczywiście oznacza to, że nie zobaczysz żadnych wiadomości, dopóki nie otworzysz go ponownie.</p>
<p><strong>Haczyk:</strong> Nie chcesz rezygnować z aplikacji — chcesz <em>Używaj go dalej</em> nie słysząc tego. Jest ogromna różnica między "milczeniem" a "bliskim".</p>

<h3>4. Korzystaj z ustawień aplikacji</h3>
<p>Niektóre aplikacje mają w swoich preferencjach ukryte ustawienia "wycisz dźwięki" lub "wyciszone powiadomienia". Na Slacku jest to w Preferencjach → Powiadomienia → Dźwięk i wygląd. Spotify ma ikonę głośnika w odtwarzaczu.</p>
<p><strong>Haczyk:</strong> Musisz znaleźć i nawigować po ustawieniach każdej aplikacji indywidualnie. Wiele aplikacji w ogóle nie ma takiej opcji. Przełączanie się między "wyciszone" a "odciśnięte" oznacza za każdym razem wracanie do preferencji, zamiast klikać jeden przycisk.</p>

<h2>Prawdziwe rozwiązanie: przycisk wyciszenia w każdej aplikacji</h2>

<p>To, czego naprawdę chcesz, jest bardzo proste: przycisk wyciszenia obok każdej aplikacji, który natychmiast ją wyciszy, nie wpływając na nic innego. Kliknij, aby wyciszyć, kliknij ponownie, aby odcisnąć. Aplikacja działa dalej, widzisz jej zawartość — po prostu jej nie słyszysz.</p>

<p>Dokładnie to robi mikser głośności w aplikacji aplikującej. <a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> Znajduje się w pasku menu i pokazuje każdą działającą aplikację z własnym suwakiem głośności i przyciskiem wyciszenia.</p>

<img src="/apps/sounddial.png" alt="SoundDial wyświetlanie przycisków wyciszania każdej aplikacji dla każdej aplikacji na pasku menu macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Aby wyciszyć jedną aplikację:</p>
<ol>
  <li>Kliknij ikonę SoundDial w pasku menu</li>
  <li>Znajdź aplikację, którą chcesz wyciszyć</li>
  <li>Kliknij ikonę głośnika obok</li>
</ol>

<p>To wszystko. Aplikacja jest wyciszona. Wszystko inne grało dalej na tej samej głośności. Kliknij ponownie ikonę głośnika, aby odciszyć — głośność wraca dokładnie do poprzedniego poziomu.</p>

<h2>Poza wyciszaniem: kontrola głośności w zależności od aplikacji</h2>

<p>Gdy masz mikser dla aplikacji, zdajesz sobie sprawę, że wyciszanie to po prostu skrajny koniec tego, czego naprawdę chcesz. Najczęściej nie chcesz całkowicie wyciszać aplikacji — chcesz ją zrobić <em>ciszej.</em>.</p>

<ul>
  <li>Powiadomienia ze Slacka na poziomie 15% — na tyle subtelne, by nie przeszkadzać, a jednocześnie na tyle obecne, by zauważyć</li>
  <li>Muzyka na poziomie 30% — poziom tła, który nie konkuruje z rozmową</li>
  <li>Przeglądarka na 60% — wygodna do odtwarzania wideo</li>
  <li>Zoom na 100% — pełna głośność dla rozmowy, która ma znaczenie</li>
</ul>

<p>SoundDial każdej aplikacji daje suwak od 0% do 200%. Możesz uczynić aplikacje cichszymi niż ich wbudowane minimum lub głośniejszymi niż ich wbudowane maksimum. I z <strong>Profile objętości</strong>, możesz zapisać preferowaną konfigurację i przełączać się między presetami — tryb "Meeting", tryb "Focus", tryb "Music" — jednym kliknięciem.</p>

<p>Funkcja automatycznego duckingu idzie jeszcze dalej: gdy zaczynasz połączenie, SoundDial automatycznie wyłącza wszystko oprócz aplikacji komunikacyjnej. Gdy połączenie się kończy, wszystko wraca do normy. Nigdy nie dotykasz suwaka.</p>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">Sprawdź SoundDial w Mac App Store</a> — jednorazowy zakup 14,99 €, bez subskrypcji macOS 14,2+.</p>
`,
  },
  "volume-mixer-for-mac": {
    slug: "volume-mixer-for-mac",
    title: "Mikser głośności dla Mac: brakującej funkcji macOS której nadal nie ma",
    description:
      "Windows ma mikser głośności od 2006 roku. Oto dlaczego macOS nadal nie robi — oraz jak najlepiej kontrolować głośność w pojedynczej aplikacji na Mac w 2026 roku.",
    date: "2026-06-01",
    readTime: "9 min read",
    content: `
<p>Kliknij prawym przyciskiem myszy ikonę głośnika na dowolnym komputerze z Windows, a znajdziesz Volume Mixer — panel, który pokazuje każdą aplikację aktualnie generującą dźwięk, z własnym, niezależnym suwakiem głośności. Możesz zmniejszyć Spotify do 20%, utrzymując rozmowę na Zoomie na 100%. Możesz wyciszyć Chrome bez dotykania czegokolwiek innego. Jest tam od Windows Vista w 2006 roku.</p>

<p>Teraz zrób to samo na Mac. Kliknij ikonę dźwięku w pasku menu. Masz jeden suwak. To wszystko. Jeden suwak, który kontroluje wszystko naraz. Każda aplikacja, każde powiadomienie, każdy dźwięk systemowy — wszystko to było powiązane razem.</p>

<p>To nie jest niszowa skarga. To najczęściej wymawiana funkcja audio w macOS, a Apple ignoruje ją przez dwadzieścia lat.</p>

<h2>Co faktycznie robi mikser głośności</h2>

<p>Mikser głośności daje ci to <strong>Niezależna regulacja głośności dla każdego zastosowania</strong> na komputerze. Zamiast jednego suwaka głównego, dostajesz jeden suwak na aplikację. Każdy suwak wpływa tylko na wyjście audio danej aplikacji.</p>

<p>Oto jak to wygląda w praktyce:</p>

<ul>
  <li><strong>Spotify</strong> przy 25% — muzyka w tle na komfortowym poziomie</li>
  <li><strong>Zoom</strong> Na 100% — usłysz każde słowo spotkania</li>
  <li><strong>Luz</strong> wyciszone — brak powiadomień podczas skupienia</li>
  <li><strong>Safari</strong> przy 60% — film na YouTube o umiarkowanej głośności</li>
  <li><strong>System Sounds</strong> przy 10% — subtelna informacja zwrotna, ale bez zaskoczenia</li>
</ul>

<p>Wszystkie te nastrojki działają jednocześnie, każdy na własnej głośności. Zmień jedną i nic innego się nie rusza. To właśnie robi mikser głośności, a tego macOS nie ma.</p>

<h2>Dlaczego Apple jeszcze nie stworzyło takiego</h2>

<p>To nie jest ograniczenie techniczne. Framework audio macOS — Core Audio — w pełni obsługuje routing audio dla poszczególnych procesów oraz kontrolę głośności na poziomie API. Apple wykorzystuje te możliwości wewnętrznie. Po prostu nie wystawili ich użytkownikom.</p>

<p>Prawdopodobnym powodem jest filozofia projektowania Apple: mniej opcji, prostszy interfejs. Jeden suwak jest czystszy niż dwanaście. A dla kogoś, kto zawsze robi tylko jedną rzecz naraz — słucha muzyki ALBO odbiera telefon LUB ogląda wideo — jeden suwak jest w porządku.</p>

<p>Ale w 2026 roku ludzie nie korzystają z komputerów w ten sposób. Praca zdalna oznacza, że jesteś na rozmowie z muzyką, pingiem na Slacku i automatycznie odtwarzanym filmem w zakładce przeglądarki. Model "jeden suwak na wszystko" całkowicie się psuje, gdy masz pięć źródeł dźwięku rywalizujących o uszy.</p>

<h2>macOS obejść (i dlaczego zawodzą)</h2>

<h3>Korzystaj z wbudowanej regulacji głośności w każdej aplikacji</h3>
<p>Spotify ma suwak głośności. VLC ma taki. QuickTime ma taki. Ale oznacza to przełączanie się na każdą aplikację osobno, znalezienie jej regulacji głośności, regulację i ponowne przełączanie. Jest rozsiana w kilkunastu różnych miejscach, a większość aplikacji — Slack, Mail, Safari, Chrome — nawet takiej nie ma.</p>

<h3>Użyj opcji "Nie przeszkadzać", aby wyciszyć powiadomienia</h3>
<p>Tryby ostrości mogą tłumić dźwięki powiadomień, ale są one binarne — albo wszystko albo nic. Nie możesz powiedzieć "zachowaj dźwięki Slacka, ale cichzej". Tryby Focus w ogóle nie dotykają głośności mediów ani połączeń.</p>

<h3>Użyj konfiguracji MIDI audio</h3>
<p>To wbudowane narzędzie zarządza urządzeniami audio i częstotliwościami próbkowania. To nie ma nic wspólnego z liczbą w aplikacji. To narzędzie do konfiguracji urządzeń, a nie mikser.</p>

<h3>Tworzenie urządzeń wielowyjściowych</h3>
<p>Możesz łączyć wyjścia audio w urządzeniu zbiorczym, ale to wysyła ten sam dźwięk do wielu wyjść — nie daje kontroli w każdej aplikacji. To przydatne, jeśli chcesz mieć dźwięk jednocześnie na głośnikach i słuchawkach, ale to zupełnie inny problem.</p>

<p>Żadne z tych obejść nie rozwiązuje podstawowego problemu: macOS nie ma wbudowanego sposobu, by powiedzieć "zrób tę aplikację ciszej, nie wpływając na nic innego".</p>

<h2>Na co zwracać uwagę przy mikserze Mac volume</h2>

<p>Jeśli Apple tego nie zbuduje, zrobią to aplikacje firm trzecich. Ale nie wszystkie miksery głośności są takie same. Oto, co odróżnia dobry film od przeciętnego:</p>

<h3>Wykrywanie aplikacji w czasie rzeczywistym</h3>
<p>Mikser powinien automatycznie wykrywać każdą aplikację, która aktualnie produkuje dźwięk. Nie powinieneś musieć ręcznie dodawać aplikacji ani niczego konfigurować. Otwórz aplikację, a pojawia się w mikserze. Zamknij je, a znika.</p>

<h3>Zakres głośności przekracza 100%</h3>
<p>Niektóre aplikacje są zbyt ciche nawet przy maksymalnej głośności — ciche odtwarzacze podcastów, karty przeglądarki z cichym dźwiękiem, rozmowy wideo, gdzie czyjś mikrofon jest cichy. Dobry mikser pozwala na to <strong>Zwiększ głośność do 200%</strong>, skutecznie wzmacniając dźwięk poza możliwością samej aplikacji.</p>

<h3>Wyciszenie jednym kliknięciem na aplikację</h3>
<p>Powinieneś móc wyciszyć dowolną aplikację jednym kliknięciem — bez przesuwania suwaka. Po odciszeniu powinno wrócić dokładnie do poprzedniego miejsca. To kluczowe dla szybkiego wyciszenia głośnej aplikacji podczas rozmowy.</p>

<h3>Profile dla różnych sytuacji</h3>
<p>Nie chcesz ręcznie zmieniać ośmiu suwaków za każdym razem, gdy przełączasz się z "pracy z muzyką" na "wideorozmowę" i "granie". Profile pozwalają zapisać konfigurację woluminów i zastosować ją jednym kliknięciem. Profil "Spotkania" może ustawić Zoom na 100%, muzykę na 15%, a powiadomienia na 0%. Profil "Focus" może wyciszyć wszystko oprócz Spotify.</p>

<h3>Automatyczne duckowanie podczas wywołań</h3>
<p>Najlepsza funkcja, jaką może mieć mikser głośności: automatyczne obniżanie dźwięku w tle po dołączaniu do połączenia i przywracanie go po zakończeniu połączenia. Nie trzeba ręcznie regulować. Muzyka cichnie, gdy Zoom aktywuje mikrofon, a wraca, gdy się rozłączysz.</p>

<h3>Integracja z paskiem menu</h3>
<p>Mikser głośności powinien znajdować się w pasku menu — jedno kliknięcie, aby otworzyć, wyregulować i zamknąć. Nie powinno to być pełne okno, nie powinno zajmować miejsca na stacji dokującej i nie powinno wymagać przejścia z obecnej aplikacji. Powinieneś móc regulować głośność bez tracenia koncentracji na tym, co robisz.</p>

<h2>SoundDial: mikser głośności macOS powinien być wbudowany</h2>

<p><a href="https://apps.apple.com/app/sounddial/id6772792641">SoundDial</a> to natywna aplikacja macOS menu, która daje dokładnie to, czego Apple nie oferuje — niezależną regulację głośności dla każdej aplikacji na Twoim Mac.</p>

<p>Znajduje się w pasku menu i pokazuje każdą działającą aplikację z własnym suwakiem głośności. Przeciągnij suwak, aby dostosować głośność aplikacji z 0% do 200%. Kliknij ikonę głośnika, aby natychmiast wyciszyć dźwięk. Przełącz się między zapisanymi profilami w zależności od sytuacji. Włącz automatyczne duckowanie, a muzyka automatycznie cichnie, gdy rozpoczęje się rozmowę.</p>

<img src="/apps/sounddial.png" alt="SoundDial — mikser głośności w aplikacji macOS wyświetlający suwaki głośności poszczególnych aplikacji na pasku menu" style="max-width:100%;border-radius:12px;margin:24px 0;" />

<p>Kluczowe cechy:</p>
<ul>
  <li><strong>Suwaki woluminów w zależności od aplikacji</strong> — zakres od 0% do 200% dla każdej aplikacji biegowej</li>
  <li><strong>Wycisz jednym kliknięciem</strong> — wyciszyć dowolną aplikację bez przesuwania suwaka</li>
  <li><strong>Profile objętości</strong> — zapisz i przełączaj konfiguracje głośności</li>
  <li><strong>Auto-ducking</strong> — muzyka automatycznie cichnie podczas rozmów</li>
  <li><strong>Skróty klawiaturowe</strong> — przełączaj mikser lub wycisz wszystkie aplikacje za pomocą skrótu klawiszowego</li>
  <li><strong>Przełączanie urządzeń wyjściowych</strong> — wymienia głośniki/słuchawki z tego samego panelu</li>
  <li><strong>Pamięć woluminowa</strong> — zapamiętuje głośność każdej aplikacji między restartami</li>
</ul>

<p>Jednorazowy zakup. Brak subskrypcji. macOS 14,2+. <a href="https://apps.apple.com/app/sounddial/id6772792641">Sprawdź SoundDial w Mac App Store</a>.</p>
`,
  },
};
