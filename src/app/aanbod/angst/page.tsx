import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psycholoog angst Hasselt | Romy Tielens",
  description:
    "Last van angst, paniek of fobieën? Klinisch psycholoog Romy Tielens in Hasselt biedt integratieve psychotherapie bij angstklachten.",
};

export default function Angst() {
  return (
    <>
      <section className="bg-sage-50 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sage-600 text-sm font-medium mb-2">
            <Link href="/aanbod" className="hover:text-sage-700">
              Aanbod
            </Link>{" "}
            / Angst &amp; paniek
          </p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-sage-800 mb-4">
            Angst &amp; paniek
          </h1>
          <p className="text-stone-600 text-lg">
            Leren omgaan met angst — stap voor stap.
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
                "Je piekert veel en kunt moeilijk stoppen met nadenken",
                "Je vermijdt bepaalde situaties, plaatsen of mensen uit angst",
                "Je ervaart paniekaanvallen: hartkloppingen, ademnood, duizeligheid",
                "Je hebt het gevoel de controle te verliezen",
                "Je lichaam staat constant 'aan' — gespannen spieren, onrustige buik",
                "Je slaap wordt verstoord door zorgen",
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
                Angst is een normale reactie die iedereen kent. Maar wanneer
                angst je dagelijks leven begint te beheersen, is professionele
                hulp zinvol. Samen gaan we op zoek naar wat je angst voedt en
                hoe je er anders mee kunt omgaan.
              </p>
              <p>
                Ik combineer cognitieve gedragstherapie (om angstige gedachten
                te herkennen en uitdagen) met emotion-focused therapy (om de
                emotie zelf beter te begrijpen) en lichaamsgerichte technieken
                (om je zenuwstelsel te leren kalmeren).
              </p>
              <p>
                Afhankelijk van je situatie werken we met exposure (stapsgewijs
                confronteren), ontspanningstechnieken, of dieper op de
                onderliggende schema's die je angst in stand houden.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Wat kun je verwachten?
            </h2>
            <div className="text-stone-700 leading-relaxed space-y-3">
              <p>
                In een eerste gesprek breng ik samen met jou je klachten in
                kaart. We bekijken wanneer de angst begonnen is, welke
                situaties ze uitlokken, en wat je al geprobeerd hebt.
              </p>
              <p>
                De duur van het traject hangt af van de aard en ernst van je
                klachten. Sommige mensen voelen na enkele sessies al
                verbetering, andere trajecten vragen meer tijd.
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
