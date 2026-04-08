import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psycholoog depressie Hasselt | Romy Tielens",
  description:
    "Last van depressie of aanhoudende somberheid? Klinisch psycholoog Romy Tielens in Hasselt helpt je met integratieve psychotherapie om weer licht te zien.",
};

export default function Depressie() {
  return (
    <>
      <section className="bg-sage-50 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sage-600 text-sm font-medium mb-2">
            <Link href="/aanbod" className="hover:text-sage-700">
              Aanbod
            </Link>{" "}
            / Depressie &amp; somberheid
          </p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-sage-800 mb-4">
            Depressie &amp; somberheid
          </h1>
          <p className="text-stone-600 text-lg">
            Weer licht zien — met professionele begeleiding.
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
                "Je voelt je al weken of maanden somber, zonder duidelijke reden",
                "Dingen die je vroeger leuk vond, laten je koud",
                "Je bent voortdurend moe, ook al doe je weinig",
                "Je voelt je waardeloos of hebt het gevoel dat je tekortschiet",
                "Je slaapt te veel of juist te weinig, en voelt je nooit uitgerust",
                "Concentreren lukt niet meer — lezen, werken of een gesprek voeren kost enorm veel moeite",
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
                Depressie is geen kwestie van &quot;je moet je gewoon even
                vermannen&quot;. Het is een aandoening die invloed heeft op je
                denken, voelen en doen. In therapie gaan we stap voor stap op
                zoek naar wat je energie wegneemt en hoe we die balans kunnen
                herstellen.
              </p>
              <p>
                Met cognitieve gedragstherapie (CGT) onderzoeken we welke
                negatieve denkpatronen je somberheid in stand houden. Via
                Emotion-Focused Therapy (EFT) maken we ruimte voor de
                onderliggende emoties die je misschien al lang onderdrukt.
                Schematherapie helpt om kernovertuigingen — zoals &quot;ik ben
                niet goed genoeg&quot; — te herkennen en bij te sturen.
              </p>
              <p>
                Daarnaast bied ik psycho-educatie aan, zodat je begrijpt wat er
                in je brein en lichaam gebeurt. Die kennis geeft vaak al
                verlichting en helpt je om milder naar jezelf te kijken.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Wat kun je verwachten?
            </h2>
            <div className="text-stone-700 leading-relaxed space-y-3">
              <p>
                In een eerste gesprek luister ik naar wat je meemaakt en brengen
                we samen je klachten in kaart. We bepalen welke aanpak het best
                bij jou past — er is geen standaardtraject.
              </p>
              <p>
                Herstel van een depressie vraagt tijd en geduld. Verwacht geen
                snelle oplossingen, maar wel een geleidelijke verbetering. De
                frequentie van de sessies passen we aan naarmate je vordert.
              </p>
            </div>
          </div>

          <div className="bg-sage-50 border border-sage-200 rounded-xl p-6 text-sm text-stone-700 leading-relaxed">
            <p className="font-semibold text-sage-800 mb-2">Praktisch</p>
            <p>
              Sessies duren 50-60 minuten. Tarief: &euro;75 (individueel) of &euro;85
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
