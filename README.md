# Hydraulika Siłowa — Seweryn Synarski

Wersja online: [https://tatara-kj.github.io/hydraulika-silowa-synarski/](https://tatara-kj.github.io/hydraulika-silowa-synarski/)

Wielostronicowa witryna lokalnej firmy zajmującej się hydrauliką siłową. Projekt powstał na podstawie zweryfikowanych danych CEIDG i wizytówki Google oraz z zachowaniem rygoru: bez dopisywania niepotwierdzonych usług, zasięgu, gwarancji, realizacji i opinii.

Szczegółowe porównanie wdrożenia z oboma promptami znajduje się w [`PROMPT_IMPLEMENTATION_AUDIT.md`](PROMPT_IMPLEMENTATION_AUDIT.md).

## Uruchomienie lokalne

Wymagany jest aktualny Node.js LTS i npm.

```bash
npm install
npm run dev
```

Strona będzie dostępna pod adresem [http://127.0.0.1:3000](http://127.0.0.1:3000).

Pełna kontrola jakości:

```bash
npm run check
```

Polecenie uruchamia kolejno ESLint, kontrolę typów TypeScript i produkcyjny build Next.js.

## Trasy

- `/` — strona główna;
- `/uslugi` — potwierdzony zakres usług;
- `/naprawa-hydrauliki-silowej` — naprawa hydrauliki siłowej;
- `/silowniki-hydrauliczne` — naprawa i produkcja siłowników hydraulicznych;
- `/o-firmie` — informacje o firmie bez nieudokumentowanej historii;
- `/poradnik` — bezpieczne przygotowanie zgłoszenia;
- `/kontakt` — telefon, adres, godziny, mapa i plik vCard;
- `/zgloszenie` — interaktywny kreator przygotowania zgłoszenia.

Nie ma stron „Realizacje”, branżowych landing pages ani galerii. Ich publikacja wymaga autentycznych materiałów i potwierdzenia zakresu działalności.

## Najważniejsze rozwiązania

- Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4 i Motion;
- responsywny układ 320 px–desktop bez poziomego przewijania;
- semantyczna struktura, widoczne stany focus, obsługa `prefers-reduced-motion`;
- warstwowy hero z parallaxem, animowane przejścia sekcji i pasek postępu strony;
- interaktywny mockup kalendarza obłożenia, wyraźnie opisany jako moduł bez backendu;
- dedykowana karta Open Graph i generowana kodem ikona — bez imitowania zdjęć firmy;
- edytowalne dane firmy i treści w `src/lib/site.ts`;
- lokalna checklista przygotowania zgłoszenia;
- kreator zgłoszenia z walidacją, podglądem lokalnych plików i podsumowaniem;
- kopiowanie telefonu z mechanizmem zapasowym, mapa Google i plik vCard;
- metadane, dane strukturalne, `robots.txt`, `sitemap.xml`, Open Graph i strona 404.

## Kreator przygotowania zgłoszenia

Kreator pod `/zgloszenie` porządkuje dane potrzebne do rozmowy telefonicznej. Wybrane pliki pozostają w pamięci przeglądarki i nie są zapisywane na serwerze. Produkcyjna wysyłka formularza wymagałaby osobnego backendu, polityki prywatności, zasad retencji danych i wymaganych zgód.

## Konfiguracja adresu produkcyjnego

Przed produkcyjnym buildem należy ustawić:

```env
NEXT_PUBLIC_SITE_URL=https://docelowa-domena.pl
```

Zmienna zasila kanoniczny adres metadanych, sitemapę i grafiki społecznościowe. Bez niej aplikacja używa lokalnej wartości domyślnej.

## Media: status BLOCKED

W serwisie nie wykorzystano żadnych zdjęć ani filmów. Materiały G-01 i G-02 z Google — mapa dojazdu oraz zdjęcie drogi — zostały świadomie pominięte: nie pokazują usługi i nie ma potwierdzonej zgody na ich ponowną publikację. Typograficzny obraz Open Graph i monogram są generowane z kodu i nie są przedstawiane jako oficjalne materiały marki.

Do zdjęcia blokady potrzebny jest pakiet:

1. oficjalne logo w SVG/PDF/AI oraz PNG o szerokości minimum 2000 px;
2. 4–6 poziomych zdjęć warsztatu i zaplecza, minimum 2400 px szerokości;
3. 8–12 zdjęć prawdziwych prac: przed, w trakcie i po naprawie;
4. co najmniej 3 kompletne przypadki: problem, diagnoza, zakres prac i rezultat;
5. 2–4 pionowe zdjęcia do widoków mobilnych i mediów społecznościowych;
6. zdjęcie właściciela lub zespołu oraz opcjonalnie pojazdu serwisowego;
7. 3–5 krótkich filmów, po 5–20 sekund;
8. informacja o autorze i pisemna zgoda na publikację każdego materiału.

Jeśli istnieją oficjalne profile Facebook lub Instagram, potrzebne są bezpośrednie adresy URL. Samo podobieństwo nazwy profilu nie jest wystarczającym potwierdzeniem.

## Do potwierdzenia z właścicielem przed publikacją

- aktualność adresu, numeru telefonu i godzin otwarcia;
- oficjalny adres e-mail;
- pełny proces przyjmowania i obsługi zgłoszeń;
- szczegółowy zakres usług oraz obsługiwane branże;
- dojazd, obszar działania, serwis mobilny i ewentualna obsługa awaryjna;
- możliwości techniczne, procedury prób, dokumentacja i warunki gwarancji;
- obsługiwane marki, autoryzacje i partnerstwa;
- zgody na opisy realizacji, zdjęcia, cytaty i opinie klientów.

## Lista przed publikacją

- zmienić `MEDIA_READINESS.md` na `READY` dopiero po spełnieniu opisanych warunków;
- wprowadzić zatwierdzone media i opisy realizacji;
- potwierdzić wszystkie dane kontaktowe i twierdzenia handlowe;
- podłączyć uzgodniony kanał zgłoszeń oraz wymagane dokumenty prawne;
- ustawić `NEXT_PUBLIC_SITE_URL` i docelową domenę;
- wykonać ręczny test na rzeczywistych urządzeniach i w popularnych przeglądarkach;
- ponownie uruchomić `npm run check` oraz audyt zależności;
- wykonać końcową akceptację właściciela.

## Status publikacji

Projekt jest opublikowany w GitHub Pages jako kompletna, publiczna witryna bez warstwy fotograficznej i realizacji. Dodanie zdjęć firmy nadal wymaga bezpośredniego, potwierdzonego źródła oraz prawa do publikacji.
