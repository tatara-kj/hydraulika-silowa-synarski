# Kierunek wizualny

Status: kierunek wstępny; brak potwierdzonego logo i identyfikacji firmy.  
Data: **2026-07-23**

## Idea

**Precyzyjny warsztat, kontrolowany przepływ, rzeczowa pomoc.**

Marka ma wyglądać jak kompetentny lokalny serwis hydrauliki siłowej, a nie instalator hydrauliki sanitarnej i nie anonimowy sklep z częściami. Fundamentem wizualnym będą prawdziwe detale metalu, uszczelnień, tłoczysk, przewodów i procesu — dopiero po dostarczeniu materiałów.

## Osobowość

- solidna, bez przesadnych superlatywów;
- techniczna, ale zrozumiała dla rolnika, właściciela firmy i klienta indywidualnego;
- bezpośrednia i lokalna;
- uporządkowana jak czyste stanowisko robocze;
- bez wizualnego udawania „globalnej korporacji”.

## Paleta robocza

Paleta jest **propozycją**, nie odtworzeniem identyfikacji. Po otrzymaniu logo należy ją podporządkować rzeczywistym kolorom.

| Token | Kolor | Zastosowanie |
|---|---|---|
| `graphite-950` | `#171D22` | hero, footer, tekst o najwyższym kontraście |
| `graphite-800` | `#2B343B` | powierzchnie techniczne, karty dark |
| `steel-600` | `#5F6B73` | tekst wtórny, ikony |
| `steel-200` | `#CDD4D9` | obramowania, linie techniczne |
| `offwhite-50` | `#F5F7F8` | główne tło |
| `white` | `#FFFFFF` | karty i tekst na ciemnym tle |
| `hydraulic-700` | `#005A96` | aktywne linki i przyciski na jasnym tle |
| `hydraulic-600` | `#006DB7` | linia przepływu, akcent marki |
| `safety-600` | `#C84E00` | małe oznaczenia ostrzegawcze, focus/alert |
| `safety-400` | `#F28C28` | powierzchnia akcentu z ciemnym tekstem |

Zasady:

- nie używać pomarańczowego jako długiego tekstu na bieli;
- CTA główne: biały tekst na `hydraulic-700`;
- focus: 3 px `safety-400` + 2 px odstępu;
- dekoracyjne gradienty tylko bardzo subtelne: grafit → granat, nie neon.

## Typografia

Propozycja:

- nagłówki: **IBM Plex Sans Condensed**, 600/700;
- treść i UI: **IBM Plex Sans**, 400/500/600;
- liczby techniczne i etykiety: **IBM Plex Mono**, tylko punktowo.

Fallback: `"Arial Narrow", "Roboto Condensed", sans-serif` dla nagłówków i systemowy sans-serif dla tekstu.

Skala:

- display: `clamp(2.5rem, 6vw, 5.5rem)`, line-height 0.98–1.04;
- H1 podstrony: `clamp(2.25rem, 5vw, 4.25rem)`;
- H2: `clamp(1.75rem, 3vw, 3rem)`;
- body large: 18–20 px;
- body: 16–18 px, line-height 1.6;
- label: 14–16 px, nigdy „mikrotekst” 11–12 px.

## Siatka i rytm

- kontener: 1200–1280 px;
- desktop: 12 kolumn, gutter 24–32 px;
- tablet: 8 kolumn;
- mobile: 4 kolumn, margines 20 px;
- odstępy sekcji: 96–144 px desktop, 64–88 px mobile;
- promienie: 4–10 px; żadnych miękkich „appowych” kapsuł na wszystkim;
- obramowania 1 px stalowe, czasem 2 px jako „przekrój techniczny”.

## Kompozycja

### Hero

- lewa strona: lokalizacja, H1, krótki opis, telefon;
- prawa/pełne tło: autentyczne zdjęcie z szerokim detalem pracy;
- techniczna linia SVG prowadzi od CTA do punktu na zdjęciu;
- jeżeli brak mediów: nie budować finalnego hero; można pokazać neutralny szkielet projektu bez publikacji.

### Karty usług

- duży numer `01–03`;
- prosty schematyczny symbol, nie ozdobna zębatka;
- tytuł, 2–3 zdania, link;
- hover: przesunięcie linii/strzałki 4–6 px, bez unoszenia o kilkanaście pikseli.

### Case study

- zdjęcie „przed” i „po” tylko z jednej realizacji;
- cztery pola: problem, diagnoza, wykonane prace, weryfikacja;
- żadnych wymyślonych wyników procentowych;
- dane klienta ukryte.

### Zaplecze

- siatka zdjęć stanowisk;
- karta techniczna urządzenia: nazwa i zastosowanie;
- parametry tylko po potwierdzeniu.

### Kontakt

- telefon jako najsilniejszy element;
- adres i godziny obok lekkiej mapy;
- mobile: sticky CTA;
- formularz ma wyglądać jak karta przyjęcia serwisowego, nie generyczny formularz leadowy.

## Ikonografia i grafika

- proste, monoliniowe ikony 1.75–2 px;
- inspiracje: tłok, przepływ, manometr, przewód, punkt pomiarowy;
- SVG semantycznie ukryte, jeśli dekoracyjne;
- nie używać kręcących zębatek, iskier, płomieni ani neonowych konturów.

## Fotografia

Priorytety:

1. ręce i narzędzia przy bezpiecznej, rzeczywistej pracy;
2. tłoczysko, cylinder, uszczelnienia i powierzchnie po obróbce;
3. czyste stanowisko i maszyny warsztatowe;
4. szerszy kadr zakładu;
5. właściciel jako realna osoba kontaktowa;
6. maszyny klientów tylko za zgodą i po anonimizacji.

Obróbka:

- naturalny kontrast, chłodne stalowe cienie i neutralne światła;
- nie podkręcać HDR;
- nie usuwać realnego charakteru warsztatu, ale eliminować kadry z bałaganem i ryzykiem BHP;
- spójny crop: 16:9 hero, 4:3 realizacje, 3:4 portret/mobile.

## Motion system

### Dozwolone

- „przepływ oleju”: pojedyncza kreska SVG, 600–900 ms;
- wskazówka manometru: jedno wejście do wartości, bez ciągłego drgania;
- reveal: opacity + translate 8–16 px, 350–550 ms;
- zdjęcie: parallax maks. 3–5%, tylko desktop i tylko gdy nie pogarsza LCP;
- mikrointerakcja CTA: strzałka przesuwa się o 4 px;
- progres formularza: płynne przejście 180–240 ms.

### Niedozwolone

- scroll hijacking;
- ciągłe pętle i obracanie zębatek;
- duże rozmycia/glow;
- parallax na mobile;
- automatyczne karuzele;
- animacje ukrywające podstawową treść bez JS.

### Reduced motion

Przy `prefers-reduced-motion: reduce`:

- wyłączyć parallax i animację manometru;
- SVG pokazać od razu w stanie końcowym;
- przejścia ograniczyć do krótkiego zanikania ≤ 100 ms albo usunąć;
- nie zmieniać kolejności ani dostępności treści.

## Komponenty

- `SiteHeader`
- `MobileContactBar`
- `ServiceCard`
- `TechnicalFact`
- `ProcessStep`
- `PreparationChecklist`
- `CaseStudyCard` — gated
- `WorkshopCapability` — gated
- `ReviewSummary`
- `ServiceIntakeWizard`
- `LocalFilePreview`
- `DemoNotice`
- `HoursTable`
- `MapLinkCard`
- `VCardDownload`
- `SafetyCallout`
- `FAQAccordion`
- `SiteFooter`

## Antywzorce

- stockowe zdjęcie pracownika w kasku bez związku z firmą;
- gigantyczne hasło „24/7” bez dowodu;
- niebiesko-pomarańczowy gradient na każdej sekcji;
- glassmorphism i połyskujące karty;
- kopiowanie layoutu Bosch/PONAR/HANSA-FLEX;
- zestaw logo marek bez partnerstwa;
- fikcyjne liczniki realizacji;
- zbyt mały tekst, blokada zoomu, małe ikony telefonu.

## Warunek finalizacji

Przed makietą high-fidelity trzeba otrzymać:

- logo lub decyzję o stworzeniu prostego wordmarku;
- autentyczne zdjęcia;
- zgodę na użycie;
- potwierdzony zakres usług;
- odpowiedzi dotyczące zaplecza, dojazdu i sposobu przyjmowania zleceń.
