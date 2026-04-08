# Backlog — romytielens.be

> Gegenereerd uit 7 agent-audits: UX, AI-content, SEO, Copywriting, WCAG Accessibility, GDPR, Performance.
> Items met 🟡 vereisen Romy's input. Items zonder markering kan Gert/Claude zelfstandig doen.

## ✅ Afgerond

- [x] **#1** Crisisinfo (Zelfmoordlijn 1813) op zelfverwonding-pagina + footer.
- [x] **#2** Contact-link in navigatie als opvallende CTA-button.
- [x] **#3** ~~Telefoonnummer in header~~ (teruggedraaid — async communicatie geprefereerd).
- [x] **#4** Homepage-kaartjes klikbaar → linken naar /aanbod/[slug].
- [x] **#5** Tekst body 14px → 16px op alle patiënt-gerichte content.

---

## 🔴 Kritiek — GDPR/Juridisch

- [ ] **#6** Privacybeleid herschrijven per GDPR Art. 13: verwerkingsverantwoordelijke, rechtsgrond, bewaartermijnen, GBA klachtrecht, doorgifte VS (Formspree), bijzondere categorieën (gezondheidsdata). *Volledige tekst beschikbaar uit GDPR-audit.*
- [ ] **#7** Toestemmingscheckbox toevoegen aan contactformulier + link naar privacybeleid.
- [ ] **#8** Google Maps iframe: pas laden na toestemming (click-to-load) óf vervangen door statische afbeelding + link. Cookies worden nu zonder consent geplaatst.

## 🔴 Kritiek — SEO

- [ ] **#9** `metadataBase: new URL("https://romytielens.be")` toevoegen in root layout → canonical URLs + absolute OG image paths.
- [ ] **#10** JSON-LD: relatieve image URL → absoluut, `url` property toevoegen, schema aanvullen met `LocalBusiness`/`MedicalBusiness`.
- [ ] **#11** `FAQPage` structured data toevoegen op Praktisch-pagina.

## 🔴 Kritiek — Accessibility

- [ ] **#12** Skip-to-content link toevoegen (`<a href="#main">Ga naar inhoud</a>`).
- [ ] **#13** Focus-indicators: globale `focus-visible` style toevoegen, form focus ring van sage-300 → sage-600.
- [ ] **#14** Kleurcontrast fixen: stone-600 subtitels → stone-700, sage-400 form hints → sage-600, stone-500 wachttijd → stone-600.
- [ ] **#15** Formulier-errors: `role="alert"` toevoegen zodat screen readers ze aankondigen. Success state: `role="status"`.

## 🔴 Kritiek — Performance

- [ ] **#16** `<img>` → `next/image` met `priority` op hero image. Verwachte LCP-verbetering: 500-1500ms.
- [ ] **#17** AVIF inschakelen: `images: { formats: ["image/avif", "image/webp"] }` in next.config.

---

## 🟠 Hoog — Conversie & Copy

- [ ] **#18** CTA's unificeren: overal "Plan een kennismakingsgesprek" + "vrijblijvend en vertrouwelijk". Niet meer "Neem contact op".
- [ ] **#19** Trust-balk op homepage: "7+ jaar klinische ervaring" · "Erkend psycholoog" · "Jessa Ziekenhuis" · "Terugbetaling mutualiteit".
- [ ] **#20** "Twijfel je?"-sectie op homepage of contactpagina: normaliseer de stap, adresseer "is mijn probleem erg genoeg?", benoem vertrouwelijkheid.
- [ ] **#21** Value proposition in hero versterken: psychiatrie-achtergrond en ervaring noemen, niet alleen "integratief psychotherapeut".
- [ ] **#22** Tarief-blok op aanbod-detailpagina's verplaatsen naar ná de CTA (prijsschok vermijden).
- [ ] **#23** Wachtlijst-info prominenter: "Neem nu contact op zodat je alvast een plek reserveert."
- [ ] **#24** ELP-tarief verduidelijken: "duurder maar meer terugbetaling via mutualiteit".

## 🟠 Hoog — AI-content herschrijven

- [ ] **#25** 🟡 Homepage hero + welkomsttekst herschrijven — persoonlijke stem, weg van clichés.
- [ ] **#26** 🟡 "Over mij" verrijken: waarom psycholoog? Wat drijft haar? Persoonlijk detail.
- [ ] **#27** 🟡 "Voor bedrijven" volledig herschrijven — weg van corporate buzzwords, concreet.
- [ ] **#28** Aanbod-beschrijvingen variëren: niet allemaal "symptoom 1, symptoom 2, vaag afsluitend woord".
- [ ] **#29** "Verboden woorden" elimineren: "op jouw tempo" (7x), "samen op zoek" (6x), "in kaart brengen" (6x), "zonder oordeel" (5x), "gerust" (4x+).
- [ ] **#30** Aanbod-templates doorbreken: variatie in structuur, lengte, toon. Niet overal dezelfde 3 kopjes.
- [ ] **#31** Hoe-ik-help secties: leid met resultaat ("je leert grenzen stellen"), niet met methode ("CGT + EFT + schematherapie").

## 🟠 Hoog — SEO

- [ ] **#32** Per-pagina OpenGraph metadata (eigen title/description/image per subpagina).
- [ ] **#33** Heading hierarchy fixen: aanbod-overzicht h3 → h2, voor-bedrijven services h2 toevoegen.
- [ ] **#34** Cross-links tussen gerelateerde aanbod-pagina's (burn-out → depressie, etc.).
- [ ] **#35** CTA-links toevoegen op Over mij en Praktisch (funnel naar contact).
- [ ] **#36** Custom 404-pagina aanmaken.

---

## 🟡 Medium — UX & Design

- [ ] **#37** Accent-kleur voor CTA-buttons (warm terracotta/goud) zodat ze opvallen.
- [ ] **#38** FAQ inklapbaar maken (`<details>`/`<summary>`).
- [ ] **#39** "Eerste sessie" verwachtingen uitbreiden: "je hoeft niet alles te weten, niet alles te vertellen".
- [ ] **#40** Sfeer-foto's toevoegen op contentpagina's. 🟡
- [ ] **#41** 🟡 Foto's van praktijkruimte toevoegen.
- [ ] **#42** "Praktisch" hernoemen naar "Tarieven & info" in navigatie.

## 🟡 Medium — Accessibility

- [ ] **#43** `aria-current="page"` op actieve nav link.
- [ ] **#44** `aria-hidden="true"` op alle decoratieve SVG-iconen.
- [ ] **#45** Mobiel menu: Escape-toets handler, focus management.
- [ ] **#46** Formulier: verplichte velden visueel markeren (asterisk).
- [ ] **#47** Success state contactformulier: `role="status"` / `aria-live="polite"`.
- [ ] **#48** Mobiel menu touch targets vergroten (py-1 → py-3).
- [ ] **#49** Heading skip fixen op voor-bedrijven (h1 → h3, geen h2).

## 🟡 Medium — SEO

- [ ] **#50** `openingHoursSpecification` in JSON-LD.
- [ ] **#51** `sameAs` voor externe profielen (vind-een-psycholoog.be, LinkedIn).
- [ ] **#52** `BreadcrumbList` schema op aanbod-detailpagina's.
- [ ] **#53** Image alt text verbeteren (meer beschrijvend).
- [ ] **#54** Boilerplate bestanden verwijderen uit /public (file.svg, globe.svg, etc.).

## 🟡 Medium — Performance

- [ ] **#55** ContactForm lazy loaden (dynamic import, is below fold).
- [ ] **#56** Google Maps iframe: overweeg click-to-load patroon (ook voor GDPR, zie #8).

---

## ⚪ Laag

- [ ] **#57** Font CSS-variabele hernoemen: `--font-geist-sans` → `--font-dm-sans`.
- [ ] **#58** `prefers-reduced-motion` media query toevoegen.
- [ ] **#59** Breadcrumbs semantisch: `<nav aria-label="Breadcrumb">`.
- [ ] **#60** Nav landmark: `aria-label="Hoofdnavigatie"`.
- [ ] **#61** Google Maps fallback-link voor geblokkeerde iframes.
- [ ] **#62** Footer links touch targets vergroten.
- [ ] **#63** Sitemap: echte lastModified dates i.p.v. `new Date()`.
- [ ] **#64** Optioneel dropdown "Waarvoor zoek je hulp?" in contactformulier.
- [ ] **#65** 🟡 Social proof / testimonials (geanonimiseerd).
- [ ] **#66** Domein koppelen (romytielens.be) via Vercel.
- [ ] **#67** Google Business Profile aanmaken.
- [ ] **#68** Blog overwegen (1/maand, Romy spreekt in, wordt uitgewerkt). 🟡
- [ ] **#69** CMS overwegen (Notion als headless CMS). 🟡
- [ ] **#70** Privacybeleid: passage over minderjarigen toevoegen.

---

*Laatst bijgewerkt: 2026-04-08*
*🟡 = Romy's input nodig*
*70 items totaal — 5 afgerond, 12 kritiek, 20 hoog, 20 medium, 13 laag*
