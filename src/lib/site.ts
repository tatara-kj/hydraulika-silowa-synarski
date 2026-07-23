export const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const siteConfig = {
  name: "Hydraulika Siłowa Seweryn Synarski",
  legalName: "HYDRAULIKA SIŁOWA Seweryn Synarski",
  phoneDisplay: "695 751 002",
  phoneHref: "tel:+48695751002",
  addressLine: "Lubinicko 36B",
  postalLine: "66-200 Lubinicko",
  locality: "Lubinicko koło Świebodzina",
  nip: "9271669116",
  regon: "080139135",
  mapsUrl:
    "https://www.google.com/maps/place/Hydraulika+Si%C5%82owa+Seweryn+Synarski.+Naprawa+i+produkcja+si%C5%82ownik%C3%B3w+hydraulicznych./@52.2336844,15.5654846,17z/data=!4m6!3m5!1s0x4706678ca800d7e3:0x67a0c8d9583f850c!8m2!3d52.2336844!4d15.5654846!16s%2Fg%2F11sr459krb",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Lubinicko+36B%2C+66-200+Lubinicko",
  ceidgUrl:
    "https://biznes.gov.pl/pl/wyszukiwarka-firm/wpis/ceidg/8737AC9A-7C5B-4CC9-82A5-FB8210E62B22",
  hours: [
    { days: "Poniedziałek–piątek", value: "08:00–16:00" },
    { days: "Sobota", value: "08:00–13:00" },
    { days: "Niedziela", value: "zamknięte" },
  ],
} as const;

export const navigation = [
  { href: "/uslugi", label: "Usługi" },
  { href: "/poradnik", label: "Poradnik" },
  { href: "/o-firmie", label: "O firmie" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const services = [
  {
    number: "01",
    slug: "naprawa-hydrauliki-silowej",
    href: "/naprawa-hydrauliki-silowej",
    title: "Naprawa hydrauliki siłowej",
    short:
      "Nieprawidłową pracę układu omawiamy na podstawie typu maszyny, objawów i oznaczeń komponentu.",
    description:
      "Zakres naprawy oraz dalsze kroki są ustalane po rozpoznaniu konkretnego przypadku. Nie deklarujemy dojazdu, czasu reakcji ani obsługi każdego typu układu bez wcześniejszej rozmowy.",
    preparation: [
      "typ maszyny lub urządzenia",
      "producent, model i widoczne oznaczenia",
      "opis zachowania układu i moment wystąpienia problemu",
      "informacja, czy maszyna jest bezpiecznie wyłączona",
    ],
  },
  {
    number: "02",
    slug: "naprawa-silownikow",
    href: "/silowniki-hydrauliczne#naprawa",
    title: "Naprawa siłowników hydraulicznych",
    short:
      "Możliwość realizacji ustalamy po identyfikacji siłownika i jego zastosowania.",
    description:
      "Pomocne są bezpiecznie wykonane zdjęcia całego elementu, oznaczeń i widocznego uszkodzenia. Sposób dostarczenia oraz zakres prac wymagają potwierdzenia telefonicznego.",
    preparation: [
      "zdjęcie całego siłownika",
      "oznaczenia i miejsce widocznego uszkodzenia",
      "zastosowanie elementu",
      "informacja o wcześniejszych naprawach, jeśli jest znana",
    ],
  },
  {
    number: "03",
    slug: "produkcja-silownikow",
    href: "/silowniki-hydrauliczne#produkcja",
    title: "Produkcja siłowników hydraulicznych",
    short:
      "Zapytanie zaczyna się od zastosowania, wymiarów, oznaczeń i dostępnej dokumentacji lub elementu wzorcowego.",
    description:
      "Parametry, materiały, sposób wykonania oraz dokumentację odbiorową trzeba uzgodnić dla konkretnego zlecenia.",
    preparation: [
      "przeznaczenie siłownika",
      "podstawowe wymiary i sposób mocowania",
      "rysunek, dokumentacja lub element wzorcowy",
      "oznaczenia, jeśli są dostępne",
    ],
  },
] as const;

export const preparationItems = [
  "Nazwa i typ maszyny lub elementu",
  "Producent, model i widoczne oznaczenia",
  "Krótki opis objawów",
  "Informacja, kiedy pojawił się problem",
  "Lokalizacja maszyny lub elementu",
  "Informacja, czy maszyna jest bezpiecznie wyłączona",
  "Zdjęcia wykonane z bezpiecznego dystansu",
  "Historia wcześniejszych napraw, jeśli jest znana",
] as const;

export const faqs = [
  {
    question: "Czym jest hydraulika siłowa?",
    answer:
      "To układy wykorzystujące ciecz pod ciśnieniem do przenoszenia energii i wykonywania ruchu. Występują między innymi w maszynach i urządzeniach wyposażonych w pompy, zawory, przewody oraz siłowniki.",
  },
  {
    question: "Jakie informacje przyspieszą pierwszą rozmowę?",
    answer:
      "Typ maszyny, producent i model, oznaczenia komponentu, opis objawów, lokalizacja oraz informacja, czy maszyna jest bezpiecznie wyłączona. Pomocne są zdjęcia wykonane bez wchodzenia w strefę zagrożenia.",
  },
  {
    question: "Czy mogę sprawdzić wyciek dłonią?",
    answer:
      "Nie. Cienki strumień cieczy pod wysokim ciśnieniem może przebić skórę i spowodować ciężki uraz. Nie dotykaj wycieku i nie zbliżaj twarzy do przewodu lub złącza.",
  },
  {
    question: "Co zrobić do czasu rozmowy z serwisem?",
    answer:
      "Zatrzymaj maszynę zgodnie z instrukcją producenta, zabezpiecz ją przed przypadkowym uruchomieniem i odgrodź strefę wycieku lub możliwego ruchu. Nie rozłączaj układu i nie uwalniaj ciśnienia, jeśli nie jesteś do tego przeszkolony.",
  },
  {
    question: "Czy firma dojeżdża do klienta?",
    answer:
      "Możliwość dojazdu, lokalizację i sposób realizacji ustalamy telefonicznie dla konkretnego zlecenia.",
  },
] as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "http://localhost:3000";
