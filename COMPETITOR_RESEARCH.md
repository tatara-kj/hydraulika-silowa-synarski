# Research konkurencji i wzorców branżowych

Data analizy: **2026-07-23**  
Zakres: 9 polskich serwisów/firm technologicznych oraz 3 globalne wzorce. Analizowano strukturę usług, kontakt, prezentację kompetencji, formularze, realizacje i zachowanie mobilne. Jest to benchmark UX — żadnego tekstu, layoutu ani identyfikacji nie wolno kopiować.

## Najważniejsze wnioski

1. Najmocniejsze strony dzielą ofertę według **problemu i komponentu**, nie według samego PKD.
2. Dla B2B zaufanie budują: konkretne stanowiska testowe, park maszynowy, protokoły, proces naprawy, dostępność części i prawdziwe realizacje.
3. Telefon musi być widoczny od pierwszego ekranu. Formularz powinien przyjąć objawy, identyfikację maszyny/elementu, lokalizację i zdjęcia.
4. Duże formularze wymagające od razu firmy i NIP-u wykluczają klienta indywidualnego. Lepiej najpierw zebrać informacje techniczne, a dane rozliczeniowe dopiero po kwalifikacji.
5. Serwis 24/7 i promień dojazdu są wartościowe tylko wtedy, gdy firma podaje konkretny numer, obszar i warunki. Nie przenosić tych obietnic na Synarskiego bez potwierdzenia.
6. Galerie bez opisu są słabsze niż case study „problem → diagnoza → działanie → wynik”.
7. W testach mobilnych nie wykryto poziomego overflow na badanych nowoczesnych stronach, ale część ma małe cele dotykowe, brak silnego CTA w pierwszym ekranie albo blokuje powiększanie.

## Polskie benchmarki

| Firma / URL | Mocne wzorce | Słabości / czego nie kopiować | Kontakt i mobile |
|---|---|---|---|
| [Hydropress](https://hydropress.pl/) | klarowny podział: sprzedaż, serwis, projektowanie, produkcja; referencje i centrum B+R; treści eksperckie | bardzo szeroka oferta rozmywa ścieżkę małego zlecenia; strona ma starsze elementy i słabą czytelność mobilną | kontakt jest w nawigacji, ale brak prostego zgłoszenia awarii w pierwszym kroku |
| [PONAR Wadowice — serwis](https://www.ponar-wadowice.pl/serwis-hydrauliki-silowej) | rozdzielenie naprawy/diagnostyki, montażu, doradztwa i wynajmu; techniczne dowody testów i protokołów | gęsty tekst, błędy składu, karty mają nieintuicyjne cele linków | responsywna bez overflow; część linków ma cele dotykowe ok. 13–21 px, poniżej dobrego standardu |
| [BIBUS MENOS — serwis hydrauliki](https://www.bibusmenos.pl/oferta/serwis/serwis-hydrauliki-silowej-1/) | stacja prób, wyposażenie pomiarowe, magazyn, partnerstwa poparte nazwami; osobny formularz serwisowy | stary adres przekierowuje do ogólnej strony „Serwis”, przez co kontekst hydrauliki jest słabszy | nowa wersja mobilna ma czytelny przycisk formularza 52 px; [formularz](https://formularze.bibusmenos.pl/serwisowy/) wymaga firmy i NIP-u, co jest zbyt ciężkie dla małego zlecenia |
| [Tubes International — przewody](https://www.tubes-international.pl/zakuwanie-wezy-hydraulicznych/) | osobne numery 24h dla konkretnych oddziałów; informacje o testowaniu, czyszczeniu i znakowaniu; lokalizator oddziałów | mnogość produktów i oddziałów zwiększa obciążenie informacyjne | brak overflow; menu 46 px; link „najbliższy oddział” jest zbyt mały, ale model lokalnego kontaktu jest wzorcowy |
| [BlobTech — utrzymanie ruchu](https://blobtech.pl/utrzymanie-ruchu/) | język B2B: prewencja, przeglądy, modele umów stałych i sezonowych; rozdzielenie biura i oddziału serwisowego | duplikacja treści i rozbudowana długość; brak szybkiego kwalifikatora zgłoszenia | responsywna; w pierwszym ekranie mobilnym brak mocnego tekstowego CTA |
| [HYDRO INO](https://www.hydroino.pl/) | trzy kroki obsługi zdalnej: zapytanie, wysyłka, odbiór; realizacje i specjalizacja w siłownikach; duże karty usług | eksponowane statystyki wymagają ciągłej aktualizacji i dowodów; ogólne zdjęcia technologiczne nie zastępują realizacji | brak overflow; karty usług mają duże cele ok. 67 px |
| [Hyddar](https://hyddar.pl/) | bogaty katalog komponentów i diagnostyki; jasna specjalizacja w siłownikach | pierwszy ekran oparty na dużym sliderze, a nie na decyzji użytkownika; słabo widoczny kontakt mobilny | responsywna bez overflow, lecz w pierwszym ekranie brak czytelnego tekstowego CTA |
| [Hydrosilni](https://hydrosilni.pl/) | telefon i e-mail w hero, prosta lokalna obietnica, sekcja realizacji | stary wizualnie slider; `user-scalable=no` blokuje powiększanie; hasła typu „nie ma rzeczy niemożliwych” są nieweryfikowalne | brak overflow; telefon widoczny, ale jego wysokość ok. 27 px jest za mała |
| [PressControl](https://presscontrol.pl/) | podział według branż/maszyn, linki do realizacji przy każdej kategorii, telefon w pierwszym ekranie | nadmiar absolutnych obietnic „natychmiast”; sekcje SEO są powtarzalne; logowanie/sklep odciągają od serwisu | brak overflow; telefon 34 px, menu 18 px — poniżej rekomendowanych 44 px |

## Globalne wzorce technologiczne

| Firma / URL | Wzorzec do adaptacji |
|---|---|
| [Bosch Rexroth — Repairs](https://www.boschrexroth.com/en/us/service-and-support/service/repairs/) | krokowe zgłoszenie: producent → kategoria → identyfikacja produktu → opis naprawy; jasne oczekiwanie finalnych testów i statusu; centrum kontaktu zamiast ogólnego formularza |
| [HANSA-FLEX — Mobile Hydraulic Service](https://nl.hansa-flex.com/mobiele-hydrauliek-service/) | pokazuje, jakie dane przygotować: osoba kontaktowa, uszkodzony komponent, zdjęcia sytuacji i prawdopodobne części; opisuje proces planowania, wyposażenie pojazdu i dokumentację |
| [Danfoss Power Solutions — parts and service](https://www.danfoss.com/en-us/about-danfoss/our-businesses/power-solutions/danfoss-power-solutions-parts-and-service/power-solutions-genuine-parts/) | łączy identyfikację części, lokalnego przedstawiciela, materiały naprawcze i formularz „poproś o kontakt”; użytkownik wybiera cel zamiast wpisywać wszystko w jedno pole |

## Formularze i szybkość kontaktu

### Wzorzec rekomendowany dla Synarskiego

1. **Szybki kontakt:** stały przycisk telefonu.
2. **Kwalifikacja techniczna:** rodzaj maszyny/elementu, objawy, producent/model/oznaczenie, lokalizacja, czy maszyna stoi.
3. **Materiały:** zdjęcia i krótki film z lokalnym podglądem.
4. **Kontakt zwrotny:** imię, telefon, opcjonalny e-mail; firma/NIP opcjonalnie.
5. **Podsumowanie:** wyraźne „To wersja demonstracyjna — dane nie zostaną wysłane” do czasu backendu.

Nie wymagać NIP-u, nie obiecywać terminu i nie używać pola „pilność” jako obietnicy awaryjnego dojazdu.

## Prezentacja parku maszynowego i realizacji

Najlepszy standard:

- zdjęcie stanowiska + nazwa urządzenia;
- jakie czynności umożliwia, bez przesadnych deklaracji;
- zakres parametrów wyłącznie po otrzymaniu danych;
- dowód końcowego testu lub odbioru;
- w case study: typ komponentu, objaw, diagnoza, wykonane prace, weryfikacja po naprawie;
- poufność: anonimizacja klienta i numerów seryjnych.

Dla Synarskiego ten moduł pozostaje niepublikowany, dopóki właściciel nie dostarczy mediów i parametrów.

## Wzorce mobilne i dostępność

- minimalny aktywny obszar 44×44 px; główny telefon 48–56 px;
- nie blokować zoomu (`user-scalable=no` jest niedopuszczalne);
- sticky bar: „Zadzwoń” + opcjonalnie „Opisz usterkę”;
- formularz jedną kolumną, duże kontrolki, zachowany stan między krokami;
- brak automatycznych sliderów i scroll hijackingu;
- zdjęcia z prawidłowym `aspect-ratio`, by uniknąć CLS;
- pełne wsparcie `prefers-reduced-motion`.

## Źródła techniczne i bezpieczeństwo

- [HSE — high pressure fluid injection hazards](https://www.hse.gov.uk/agriculture/topics/machinery/fluid.htm)
- [HSE — hydraulic injection injury](https://www.hse.gov.uk/safetybulletins/hydraulic-injection-injury.htm)
- [HSE — safe maintenance and stored hydraulic energy](https://www.hse.gov.uk/work-equipment-machinery/maintenance.htm)
- [Parker Safety Guide](https://www.parker.com/content/dam/Parker-com/Literature/Polymer-Hose-Division-Europe/Catalogs/Parker-Safety-Guide/Parker-Safety-Guide_PHDE.pdf)
- [OSHA — control of hazardous energy](https://www.osha.gov/control-hazardous-energy)

W treściach dla użytkownika wolno zalecić wyłączenie maszyny, odgrodzenie strefy i kontakt z przeszkolonym serwisem. Nie publikować instrukcji samodzielnego rozszczelniania układu ani prób pod ciśnieniem.
