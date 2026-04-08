# CLAUDE.md — romy-tielens

Website voor Romy Tielens, klinisch psycholoog in Hasselt. Next.js 16 App Router, TypeScript, Tailwind v4, gedeployed op Vercel via GitHub.

## Stack

- **Framework**: Next.js 16 App Router (static generation waar mogelijk)
- **Styling**: Tailwind v4 — kleurenpalet zie `src/app/globals.css`
- **Fonts**: DM Sans (`--font-dm-sans`) + DM Serif Display (`--font-dm-serif`) via `next/font/google`
- **Formulier**: @formspree/react, form ID `xqegjlbk`
- **Content**: markdown via `gray-matter`, bestanden in `content/aanbod/*.md`
- **Deployment**: Vercel, domein `romytielens.be`

## Kleurenpalet

| Token | Gebruik |
|-------|---------|
| `sage-*` | Groen-grijs — UI, navigatie, headings |
| `stone-*` | Warm grijs — body tekst, borders |
| `accent-600` | Terracotta — CTA buttons |

Primaire CTA: `bg-accent-600 text-white hover:bg-accent-700`
Secundaire CTA: `border border-sage-300 text-stone-700 hover:bg-sage-100`

## Bestandsstructuur

```
src/
  app/
    layout.tsx           metadataBase, JSON-LD (MedicalBusiness), skip-link, fonts
    page.tsx             homepage: hero, trust bar, topics grid, CTA
    over-mij/page.tsx
    aanbod/page.tsx      overzicht
    aanbod/[slug]/page.tsx  dynamische route, leest content/aanbod/*.md
    contact/page.tsx     ContactForm + GoogleMap (click-to-load)
    praktisch/page.tsx   tarieven, FAQ, locaties, beschikbaarheid
    privacy/page.tsx     GDPR Art. 13 privacybeleid
    doorverwijzers/page.tsx
    voor-bedrijven/page.tsx
  components/
    Navigation.tsx       sticky header, mobile menu, aria-current, aria-expanded
    ContactForm.tsx      Formspree, consent checkbox, topic dropdown, role="status"
    GoogleMap.tsx        click-to-load (GDPR-compliant)
    Footer.tsx           4 kolommen, crisis line (Zelfmoordlijn 1813)
  lib/
    content.ts           getAanbodPage(), getAanbodSlugs(), parseSection(), parseParagraphs()

content/
  aanbod/               12 markdown files
```

## Content — aanbod markdown

Frontmatter:
```yaml
title: "Angst & paniek"
seoTitle: "Psycholoog angst Hasselt | Romy Tielens"
seoDescription: "..."
subtitle: "..."
```

Secties (exacte headings vereist door content.ts parser):
- `## Herken je dit?` — bullet list — `herkenning[]`
- `## Hoe ik je kan helpen` — paragrafen — `hulp[]`
- `## Wat kun je verwachten?` — paragrafen — `verwachting[]`

Slugs: `angst`, `depressie`, `burn-out`, `perfectionisme`, `trauma`, `rouw`, `relatieconflicten`, `hoogsensitiviteit`, `postpartum`, `zelfverwonding`, `vruchtbaarheid`, `middelengebruik`

## Praktische info (Romy)

- **Praktijk**: Zorgpraktijk Kadans, Kempische Steenweg 565, 3500 Hasselt
- **Jessa Ziekenhuis**: Guffenslaan, 3500 Hasselt
- **Thuispraktijk**: Luchtvaartstraat, 3500 Hasselt
- **Tel**: 0497 / 60 58 92 — `+32497605892`
- **Email**: romy@praktijkkadans.be
- **Beschikbaarheid**: Ma 13–17, Wo 09–20, Do 08–17
- **Tarieven**: EUR 75 (individueel, 50-60 min), EUR 85 (ELP via huisartsverwijzing)
- **Talen**: Nederlands + Engels
- **Visumnummer**: 261431 | Psychologencommissie: 942123340
- **Wachttijd**: ca. 1 maand

## SEO / Schema

- `metadataBase`: `https://romytielens.be` (layout.tsx)
- JSON-LD in layout: `MedicalBusiness` + `LocalBusiness`
- JSON-LD in praktisch/page.tsx: `FAQPage`
- JSON-LD in aanbod/[slug]/page.tsx: `BreadcrumbList`
- Per pagina eigen `metadata` export met `title` + `openGraph`

## Navigatielinks

```ts
{ href: "/", label: "Home" },
{ href: "/over-mij", label: "Over mij" },
{ href: "/aanbod", label: "Aanbod" },
{ href: "/voor-bedrijven", label: "Voor bedrijven" },
{ href: "/praktisch", label: "Tarieven & info" },
// Contact = aparte CTA-knop in header (accent-600)
```

## Stijl & copy

Schrijfstijl: warm, direct, Vlaams. Resultaat eerst, dan proces.

**Verboden woorden/zinnen:**
- "op jouw tempo", "samen op zoek", "ruimte" (als concept), "groeien"
- "heelheid", "veilige omgeving" (als losse zin), "jouw unieke verhaal"

**Nooit**: "vrijblijvend intakegesprek" — het intakegesprek is betalend (EUR 75).

## WCAG / Toegankelijkheid

- Focus-visible op alle interactieve elementen (globals.css)
- Skip-to-content link in layout.tsx (`href="#main"`)
- `aria-current="page"` op actieve navlink
- `aria-expanded` op mobile menu toggle
- `role="status"` op formulier success message
- Geen telefoonnummer in navigatie (bewuste keuze)

## Backlog

Openstaande taken worden bijgehouden in **`BACKLOG.md`** in de root van het project.

- 🟡 = Romy's input nodig
- Items zonder markering kan Gert/Claude zelfstandig uitvoeren
- Na afronding: item aanvinken (`- [x]`) en teller onderaan updaten

## GDPR

- Google Maps: click-to-load via `GoogleMap.tsx`
- Formspree: consent checkbox + melding US-dataverwerking in ContactForm
- Privacy policy op `/privacy`
