# Raport QA

Data: **2026-07-23**
Zakres: produkcyjny build oraz publiczna wersja w GitHub Pages

## Wynik

Publiczna wersja bez mediów przeszła automatyczne kontrole jakości i testy podstawowych ścieżek. Nie stwierdzono błędów aplikacji, poziomego przewijania ani brakujących nagłówków H1 na zbudowanych trasach. Warstwa fotograficzna pozostaje wstrzymana do czasu uzyskania potwierdzonego źródła i prawa do publikacji.

## Kontrole automatyczne

| Kontrola | Wynik | Uwagi |
| --- | --- | --- |
| ESLint | PASS | Brak błędów i ostrzeżeń blokujących |
| TypeScript `tsc --noEmit` | PASS | Brak błędów typów |
| Produkcyjny build Next.js | PASS | Wszystkie 13 tras aplikacji i zasoby statyczne wygenerowane |
| `git diff --check` | PASS | Brak błędów białych znaków w zmianach |
| Audyt zależności | PASS | `npm audit` nie wykrywa podatności; przechodnia wersja `postcss` została bezpiecznie ujednolicona przez override |

Końcowe wyniki powyższych poleceń należy zachować jako obowiązujące po ostatnim uruchomieniu `npm run check`.

## Testy przeglądarkowe

| Obszar | Wynik | Uwagi |
| --- | --- | --- |
| Wszystkie trasy | PASS | Unikalne tytuły, dokładnie jeden H1, brak nakładki błędu Next.js |
| Widok mobilny 390 × 844 | PASS | Brak poziomego przewijania; menu i dolny pasek kontaktowy działają |
| Widok tabletowy 834 px | PASS | Hero poprawnie układa się pionowo; brak kolizji tekstu z panelem technicznym |
| Widok desktopowy 1440 px | PASS | Poprawny układ dwukolumnowy i nawigacja |
| Menu mobilne | PASS | Otwieranie, stan `aria-expanded` i przejście do `/kontakt` |
| Checklista poradnika | PASS | Zmiana stanu, licznika i semantyki `aria-checked` |
| Kreator — walidacja | PASS | Blokada pustego kroku, komunikat błędu i `aria-invalid` |
| Kreator — kroki i podsumowanie | PASS | Przejście przez proces; podsumowanie obejmuje oznaczenie komponentu, początek objawów, e-mail, firmę/NIP, datę i porę kontaktu |
| Kreator — pliki lokalne | PASS | Dodanie PNG uruchamia lokalny podgląd i opcję usunięcia; plik nie jest wysyłany |
| Kopiowanie telefonu | PASS | Obsłużono Clipboard API i mechanizm zapasowy; komunikat `aria-live` potwierdza operację |
| Mapa i vCard | PASS | Poprawne adresy; plik vCard zwraca kod 200 |
| `robots.txt`, `sitemap.xml`, OG i ikona | PASS | Poprawne odpowiedzi HTTP i typy treści |
| Log aplikacji | PASS | Brak błędów wykonania podczas testowanych ścieżek |

Sprawdzone trasy: `/`, `/uslugi`, `/naprawa-hydrauliki-silowej`, `/silowniki-hydrauliczne`, `/o-firmie`, `/poradnik`, `/kontakt`, `/zgloszenie`.

## Ograniczenia automatyzacji i testy ręczne

Kontroler przeglądarki potwierdził dodanie poprawnego PNG, lokalny podgląd i brak wysyłki. Nie zastępuje to pełnej emulacji natywnego pola daty ani testów wszystkich wariantów plików, dlatego przed finalną publikacją trzeba ręcznie:

1. dodać pozostałe poprawne typy: JPG/WEBP oraz MP4/MOV;
2. sprawdzić odrzucenie złego typu, pliku powyżej limitu i więcej niż 5 plików;
3. usunąć pojedynczy podgląd i zresetować cały kreator;
4. wybrać datę w natywnym date pickerze na iOS, Androidzie, Safari, Firefox i Chromium;
5. przejść wszystkie interakcje samą klawiaturą i czytnikiem ekranu;
6. zweryfikować animacje przy systemowym `prefers-reduced-motion` na rzeczywistym urządzeniu.

Semantyczne elementy formularzy, widoczne style focus, reguły CSS dla ograniczonego ruchu i użycie `useReducedMotion()` są obecne; powyższe pozycje dotyczą końcowej akceptacji na rzeczywistych urządzeniach.

## Bramka publikacyjna

`MEDIA_READINESS.md` ma status **BLOCKED** wyłącznie dla fotografii, galerii i case studies. Nie użyto zdjęć stockowych, wygenerowanych realizacji ani materiałów bez potwierdzonej zgody. Publiczna strona działa bez tej warstwy; autentyczne media można dodać po potwierdzeniu źródła i prawa do publikacji.
