# Raport QA

Data: **2026-07-23**
Zakres: lokalna wersja witryny Hydraulika Siłowa — Seweryn Synarski

## Wynik

Wersja bez mediów przeszła automatyczne kontrole jakości i testy przeglądarkowe podstawowych ścieżek. Nie stwierdzono błędów aplikacji, poziomego przewijania ani brakujących nagłówków H1 na zbudowanych trasach. Publikacja pozostaje zablokowana przez brak zatwierdzonych mediów i danych wymagających potwierdzenia.

## Kontrole automatyczne

| Kontrola | Wynik | Uwagi |
| --- | --- | --- |
| ESLint | PASS | Brak błędów i ostrzeżeń blokujących |
| TypeScript `tsc --noEmit` | PASS | Brak błędów typów |
| Produkcyjny build Next.js | PASS | Wszystkie 14 tras i zasobów wygenerowane |
| `git diff --check` | PASS | Brak błędów białych znaków w zmianach |
| Audyt zależności | UWAGA | 2 ostrzeżenia moderate w przechodniej wersji `postcss` przypiętej przez aktualny Next.js; wysokie ostrzeżenie `sharp` usunięte przez bezpieczny override |

Końcowe wyniki powyższych poleceń należy zachować jako obowiązujące po ostatnim uruchomieniu `npm run check`.

## Testy przeglądarkowe

| Obszar | Wynik | Uwagi |
| --- | --- | --- |
| Wszystkie trasy | PASS | Unikalne tytuły, dokładnie jeden H1, brak nakładki błędu Next.js |
| Widok mobilny 390 × 844 | PASS | Brak poziomego przewijania; menu i dolny pasek kontaktowy działają |
| Widok tabletowy 834 px | PASS | Hero poprawnie układa się pionowo; brak kolizji tekstu z panelem technicznym |
| Widok desktopowy 1440 px | PASS | Poprawny układ dwukolumnowy i nawigacja |
| Menu mobilne | PASS | Otwieranie, stan `aria-expanded` i przejście do `/uslugi` |
| Checklista poradnika | PASS | Zmiana stanu, licznika i semantyki `aria-checked` |
| Kreator — walidacja | PASS | Blokada pustego kroku, komunikat błędu i `aria-invalid` |
| Kreator — kroki i podsumowanie | PASS | Przejście przez proces, wybór pory kontaktu i czytelny komunikat, że nic nie wysłano |
| Kopiowanie telefonu | PASS | Obsłużono Clipboard API i mechanizm zapasowy; komunikat `aria-live` potwierdza operację |
| Mapa i vCard | PASS | Poprawne adresy; plik vCard zwraca kod 200 |
| `robots.txt`, `sitemap.xml`, OG i ikona | PASS | Poprawne odpowiedzi HTTP i typy treści |
| Log aplikacji | PASS | Brak błędów wykonania podczas testowanych ścieżek |

Sprawdzone trasy: `/`, `/uslugi`, `/naprawa-hydrauliki-silowej`, `/silowniki-hydrauliczne`, `/o-firmie`, `/poradnik`, `/kontakt`, `/zgloszenie`.

## Ograniczenia automatyzacji i testy ręczne

Kontroler przeglądarki nie udostępnił systemowego wyboru plików ani pełnej emulacji natywnego pola daty. Kod walidacji typów i rozmiaru pliku, lokalnych podglądów oraz zwalniania adresów `blob:` został sprawdzony, ale przed publikacją trzeba ręcznie:

1. dodać poprawne JPG/PNG/WEBP oraz MP4/MOV;
2. sprawdzić odrzucenie złego typu, pliku powyżej limitu i więcej niż 5 plików;
3. usunąć pojedynczy podgląd i zresetować cały kreator;
4. wybrać datę w natywnym date pickerze na iOS, Androidzie, Safari, Firefox i Chromium;
5. przejść wszystkie interakcje samą klawiaturą i czytnikiem ekranu;
6. zweryfikować animacje przy systemowym `prefers-reduced-motion` na rzeczywistym urządzeniu.

Semantyczne elementy formularzy, widoczne style focus, reguły CSS dla ograniczonego ruchu i użycie `useReducedMotion()` są obecne; powyższe pozycje dotyczą końcowej akceptacji na rzeczywistych urządzeniach.

## Bramka publikacyjna

`MEDIA_READINESS.md` ma status **BLOCKED**. Nie użyto zdjęć stockowych, wygenerowanych realizacji ani materiałów z Google bez potwierdzonej zgody. Hero fotograficzne, galeria i case studies zostały celowo pominięte. Wersja może służyć do lokalnej akceptacji UX i treści, ale nie powinna być publikowana przed dostarczeniem autentycznych mediów, potwierdzeniem danych i wykonaniem testów ręcznych wymienionych wyżej.
