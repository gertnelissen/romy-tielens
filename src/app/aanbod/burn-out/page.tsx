import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psycholoog burn-out Hasselt | Romy Tielens",
  description:
    "Last van burn-out of chronische stress? Klinisch psycholoog Romy Tielens in Hasselt helpt je met integratieve psychotherapie om weer in balans te komen.",
};

export default function Burnout() {
  return (
    <>
      <section className="bg-sage-50 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sage-600 text-sm font-medium mb-2">
            <Link href="/aanbod" className="hover:text-sage-700">
              Aanbod
            </Link>{" "}
            / Burn-out &amp; stress
          </p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-sage-800 mb-4">
            Burn-out &amp; stress
          </h1>
          <p className="text-stone-600 text-lg">
            Weer in balans komen — met professionele begeleiding.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Herken je dit?
            </h2>
            <ul className="space-y-3">
              {[
                "Je voelt je voortdurend uitgeput, ook na rust",
                "Je hebt het gevoel dat je niet meer kunt — op het werk, thuis, of allebei",
                "Kleine taken voelen als onoverkomelijke bergen",
                "Je piekert veel en slaapt slecht",
                "Je voelt je cynisch, afstandelijk of emotioneel afgevlakt",
                "Je lichaam geeft signalen: hoofdpijn, spierspanning, hartkloppingen",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-stone-700">
                  <svg
                    className="w-5 h-5 text-sage-400 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Hoe ik je kan helpen
            </h2>
            <div className="text-stone-700 leading-relaxed space-y-3">
              <p>
                Burn-out is meer dan "even moe zijn". Het is een teken dat je
                lichaam en geest al langere tijd over hun grenzen gaan. In
                therapie gaan we samen op zoek naar de onderliggende patronen:
                waarom bleef je doorgaan? Welke overtuigingen drijven je aan?
              </p>
              <p>
                Ik werk vanuit een integratieve benadering, waarbij ik
                cognitieve gedragstherapie (om denkpatronen te herkennen en bij
                te sturen), schematherapie (om diepere patronen te begrijpen)
                en lichaamsgerichte technieken combineer.
              </p>
              <p>
                Vanuit mijn opleiding in orthomoleculaire gezondheidszorg
                (kPNI) kan ik ook kijken naar de rol van voeding, slaap en
                leefstijl in je herstelproces.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Wat kun je verwachten?
            </h2>
            <div className="text-stone-700 leading-relaxed space-y-3">
              <p>
                In een eerste kennismakingsgesprek luister ik naar je verhaal.
                Samen brengen we in kaart wat er speelt en bekijken we welke
                aanpak het best bij jou past.
              </p>
              <p>
                Een burn-out traject duurt doorgaans meerdere maanden. De
                frequentie stemmen we samen af — wekelijks in het begin,
                afbouwend naarmate je je beter voelt.
              </p>
            </div>
          </div>

          <div className="bg-sage-50 border border-sage-200 rounded-xl p-6 text-sm text-stone-700 leading-relaxed">
            <p className="font-semibold text-sage-800 mb-2">Praktisch</p>
            <p>
              Sessies duren 50-60 minuten. Tarief: €75 (individueel) of €85
              (eerstelijnspsychologie met doorverwijzing huisarts).
              Gedeeltelijke terugbetaling via je mutualiteit is mogelijk.
            </p>
          </div>

          <div className="text-center pt-4">
            <Link
              href="/contact"
              className="inline-block bg-sage-600 text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-sage-700 transition-colors"
            >
              Neem contact op
            </Link>
            <p className="text-xs text-stone-500 mt-3">
              Huidige wachttijd: ~1 maand
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
