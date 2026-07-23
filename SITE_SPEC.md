# Specyfikacja strony

Status: research i projekt informacji, **bez implementacji**  
Data: **2026-07-23**  
Warunek rozpoczęcia finalnego projektu wizualnego: rozstrzygnięcie `MEDIA_READINESS.md`.

## Cel

Strona ma ułatwiać właścicielom i użytkownikom maszyn:

1. szybkie ustalenie, czym firma się zajmuje;
2. wykonanie telefonu jednym dotknięciem;
3. przygotowanie informacji potrzebnych do kwalifikacji naprawy;
4. odnalezienie warsztatu;
5. ocenę wiarygodności na podstawie prawdziwych realizacji i zaplecza — po ich dostarczeniu.

Nie może udawać pogotowia 24/7, serwisu mobilnego ani szerokiej oferty, której nie potwierdzono.

## Architektura informacji

### Wersja minimalna możliwa po potwierdzeniu danych

1. **Strona główna**
   - hero: naprawa hydrauliki i siłowników, lokalizacja, telefon;
   - potwierdzone usługi;
   - „Jak przygotować zgłoszenie”;
   - proces kontaktu bez obietnicy czasu;
   - miejsce na zaplecze i realizacje — ukryte do czasu materiałów;
   - godziny, dojazd i CTA.
2. **Naprawa hydrauliki siłowej**
   - zakres potwierdzony na poziomie ogólnym;
   - informacje potrzebne przed rozmową;
   - bezpieczeństwo;
   - CTA telefoniczne.
3. **Siłowniki hydrauliczne**
   - naprawa;
   - produkcja;
   - osobne sekcje z zakresem „do ustalenia po identyfikacji”;
   - bez parametrów, dopóki właściciel ich nie poda.
4. **O firmie**
   - fakty rejestrowe w stopce;
   - właściciel, sposób pracy i zaplecze dopiero po autoryzacji;
   - zero wymyślonych statystyk.
5. **Poradnik / FAQ**
   - czym jest hydraulika siłowa;
   - co przygotować;
   - jak bezpiecznie wyłączyć maszynę i odgrodzić miejsce;
   - bez instrukcji naprawy pod ciśnieniem.
6. **Kontakt / zgłoszenie usterki**
   - telefon, godziny, adres 36B;
   - mapa/link do nawigacji;
   - vCard;
   - formularz demonstracyjny lub produkcyjny zależnie od backendu.

### Podstrony bramkowane

Nie publikować do czasu potwierdzenia:

- Serwis dla przemysłu / utrzymania ruchu;
- maszyny rolnicze i budowlane;
- pompy i rozdzielacze;
- przewody hydrauliczne;
- serwis mobilny;
- kontakt awaryjny;
- realizacje/case studies;
- park maszynowy;
- marki obsługiwane.

Każda podstrona wymaga: zatwierdzonego zakresu, co najmniej jednego dowodu realizacji, mediów z prawem użycia i odpowiedzi na pytania techniczne.

## Strona główna — kolejność sekcji

1. Topbar z godzinami i lokalizacją.
2. Header z logo/nazwą, nawigacją oraz głównym CTA „Zadzwoń: 695 751 002”.
3. Hero z prawdziwym zdjęciem firmy; do czasu mediów hero nie może udawać realizacji.
4. „W czym możemy pomóc” — tylko 3 potwierdzone karty.
5. „Przygotuj się do rozmowy” — interaktywny check-list.
6. „Jak wygląda kontakt” — opis → rozmowa → ustalenie dalszych kroków.
7. Realizacje — ukryte do `READY`.
8. Zaplecze — ukryte do potwierdzenia.
9. Opinie: aktualna średnia i link do Google albo zatwierdzone cytaty; bez fikcyjnych gwiazdek.
10. FAQ.
11. Kontakt: telefon, godziny, adres i nawigacja.
12. Stopka z pełną nazwą, NIP, REGON i politykami.

## Funkcje

### Telefon

- desktop: CTA w headerze;
- mobile: sticky dolny pasek 56–64 px;
- tekst: `Zadzwoń: 695 751 002`;
- `href="tel:+48695751002"`;
- mierzenie kliknięć tylko po zgodzie, jeśli zostanie wdrożona analityka.

### Wieloetapowe zgłoszenie serwisowe

Kroki:

1. **Maszyna/element:** typ, producent, model, oznaczenie/zdjęcie tabliczki.
2. **Problem:** objawy, moment wystąpienia, widoczny wyciek, hałas, spadek siły; bez namawiania do uruchomienia.
3. **Miejsce i sytuacja:** lokalizacja, czy maszyna jest bezpiecznie wyłączona, czy stoi; „pilność” oznacza potrzeby klienta, nie SLA.
4. **Zdjęcia/film:** lokalny podgląd, typy JPG/PNG/WebP/MP4/MOV, limity ustalić z backendem; ostrzeżenie, by nie zbliżać się do wycieku pod ciśnieniem.
5. **Kontakt:** imię, telefon wymagany, e-mail opcjonalny, firma/NIP opcjonalnie, preferowana pora kontaktu.
6. **Podsumowanie i zgody.**

Tryb demo:

- stały komunikat nad formularzem: „Wersja demonstracyjna — dane i pliki nie są wysyłane”;
- przycisk końcowy „Zobacz podsumowanie”, nigdy „Wyślij”;
- brak requestów sieciowych i brak trwałego zapisu;
- `URL.createObjectURL()` tylko do podglądu i zawsze `URL.revokeObjectURL()`.

Tryb produkcyjny wymaga backendu, zabezpieczeń antyspamowych, polityki prywatności, retencji plików, potwierdzenia odbioru oraz dostępnego komunikatu sukcesu.

### Termin oględzin/odbioru

- wyłącznie demo do czasu potwierdzenia procesu;
- label: „Wskaż preferowany termin — to nie jest rezerwacja”;
- wybór dnia/pory, bez pokazywania rzekomej dostępności;
- finalny tekst: „Termin wymaga potwierdzenia telefonicznego”.

### Przewodnik „Co przygotować?”

Check-list:

- nazwa i typ maszyny/elementu;
- producent, model i numer/oznaczenie;
- krótki opis objawów;
- kiedy problem wystąpił i czy maszyna jest wyłączona;
- lokalizacja;
- bezpieczne zdjęcia z dystansu;
- wcześniejsze naprawy, jeśli są znane.

### Galeria

- wdrożyć interfejs dopiero po `READY`;
- filtry wyłącznie według potwierdzonych kategorii;
- każde zdjęcie: alternatywa tekstowa, podpis, etap procesu, źródło/zgoda;
- case study: problem, diagnoza, zakres, weryfikacja rezultatu;
- anonimizacja danych klienta, tablic, numerów i lokalizacji.

### Mapa i vCard

- mapa punktu `Lubinicko 36B`; żadnego promienia zasięgu;
- preferować link „Otwórz w Mapach Google” i lekką statyczną reprezentację; iframe dopiero po interakcji/zgodzie;
- vCard: pełna nazwa, telefon, adres; e-mail dopiero po potwierdzeniu;
- przyciski kopiowania z komunikatem `aria-live`.

## SEO

### Intencje i frazy bezpieczne

- hydraulika siłowa Świebodzin;
- naprawa hydrauliki siłowej Świebodzin;
- naprawa siłowników hydraulicznych Świebodzin;
- produkcja siłowników hydraulicznych Świebodzin;
- hydraulika siłowa Lubinicko;
- naprawy hydrauliczne Lubinicko.

Nie targetować jeszcze: serwis mobilny, 24h, zakuwanie węży, pompy, rozdzielacze, rolnictwo, budownictwo, utrzymanie ruchu.

### Metadane robocze

- Home title: `Hydraulika siłowa Świebodzin | Seweryn Synarski`
- Home description: `Naprawa hydrauliki siłowej oraz naprawa i produkcja siłowników hydraulicznych w Lubinicku koło Świebodzina. Zadzwoń: 695 751 002.`
- Siłowniki title: `Naprawa i produkcja siłowników hydraulicznych | Świebodzin`
- Kontakt title: `Kontakt i dojazd | Hydraulika Siłowa Seweryn Synarski`

### Techniczne SEO

- jeden opisowy H1 na stronę, logiczne H2/H3;
- canonical, `sitemap.xml`, `robots.txt`, poprawne statusy 404/301;
- przyjazne adresy: `/naprawa-hydrauliki-silowej`, `/silowniki-hydrauliczne`, `/kontakt`;
- dane NAP identyczne wszędzie: **Lubinicko 36B**;
- `LocalBusiness`/`ProfessionalService` JSON-LD z telefonem, adresem i godzinami po finalnym potwierdzeniu;
- `Service` tylko dla opublikowanych usług;
- `sameAs` tylko do potwierdzonego Google/profile social;
- nie dodawać `aggregateRating`, jeśli ocena nie jest widoczna i aktualizowana na stronie;
- FAQ w semantycznym HTML; nie zakładać gwarancji rich results;
- Open Graph z autentycznym zdjęciem po uzyskaniu praw.

## Dostępność

Cel: **WCAG 2.2 AA**.

- pełna obsługa klawiatury i widoczny focus;
- skip link;
- cel dotykowy minimum 44×44 px, główne CTA co najmniej 48 px;
- tekst bazowy minimum 16 px; linia 1.5–1.7;
- kontrast 4.5:1 dla tekstu i 3:1 dla dużego tekstu/elementów UI;
- formularz ma etykiety, instrukcje i błędy powiązane przez `aria-describedby`;
- błędy nie tylko kolorem; podsumowanie błędów na początku kroku;
- brak blokady zoomu;
- multimedia z napisami/transkrypcją;
- mapę uzupełniać tekstowym adresem i linkiem;
- wszystkie animacje reagują na `prefers-reduced-motion`.

## Wydajność i prywatność

Budżety:

- LCP ≤ 2,5 s na typowym mobilnym 4G;
- CLS ≤ 0,1;
- INP ≤ 200 ms;
- JS początkowy możliwie < 150 kB gzip;
- hero AVIF/WebP z `srcset`, wymiarami i sensownym fallbackiem;
- lazy-load poniżej pierwszego ekranu;
- brak autoplay video z dźwiękiem;
- lokalne lub privacy-friendly fonty, maksymalnie 2 rodziny/4 kroje;
- mapy, analityka i zewnętrzne media zgodnie z zgodami;
- formularz nie wysyła plików do podmiotów trzecich bez informacji.

## Kryteria ukończenia etapu wdrożenia

1. Wszystkie publiczne usługi są zatwierdzone przez właściciela i mają źródło.
2. Adres 36B, telefon, e-mail i godziny są ponownie potwierdzone.
3. `MEDIA_READINESS` ma status `READY`.
4. Nie ma stocków/generowanych realizacji ani nieuprawnionych logo marek.
5. Telefon działa na każdym breakpointcie; demo nie udaje wysłania.
6. Formularz przechodzi test klawiaturą, walidację, podgląd plików i tryb reduced motion.
7. Lighthouse/axe nie wykazują krytycznych błędów; ręczne testy mobile/desktop są zapisane.
8. `lint`, `typecheck`, testy i build kończą się powodzeniem.
9. Schema i NAP są zgodne z CEIDG/GUS/Google.
10. Brak treści `24/7`, „natychmiast”, „cała Polska”, marek partnerskich, fikcyjnych opinii i stażu bez podstawy.
