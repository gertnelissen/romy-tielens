import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psycholoog middelengebruik Hasselt | Romy Tielens",
  description:
    "Worstel je met middelengebruik of verslaving? Klinisch psycholoog Romy Tielens in Hasselt helpt je om de onderliggende oorzaken aan te pakken.",
};

export default function Middelengebruik() {
  return (
    <>
      <section className="bg-sage-50 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sage-600 text-sm font-medium mb-2">
            <Link href="/aanbod" className="hover:text-sage-700">
              Aanbod
            </Link>{" "}
            / Middelengebruik
          </p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-sage-800 mb-4">
            Middelengebruik
          </h1>
          <p className="text-stone-600 text-lg">
            De onderliggende oorzaken aanpakken.
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
                "Je merkt dat je steeds meer nodig hebt om hetzelfde effect te voelen",
                "Je gebruikt alcohol, drugs of medicatie om met moeilijke gevoelens om te gaan",
                "Je werk, relaties of gezondheid lijden onder je gebruik",
                "Je hebt al geprobeerd te stoppen of te minderen, maar het lukt niet lang",
                "Je ervaart lichamelijke klachten door je gebruik, maar gaat toch door",
                "Je schaamt je voor je gebruik en houdt het liever verborgen",
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
                Middelengebruik is zelden het echte probleem — het is vaak een
                manier om iets anders te verdoven: stress, angst, eenzaamheid
                of onverwerkte pijn. In therapie kijken we verder dan het
                gebruik zelf en gaan we op zoek naar wat eronder zit.
              </p>
              <p>
                Met cognitieve gedragstherapie (CGT) brengen we je denkpatronen
                en triggers in kaart: welke situaties of gevoelens leiden tot
                gebruik? Schematherapie helpt om de diepere emotionele behoeften
                te begrijpen die je via middelen probeert te vervullen. De
                aanpak is motiverend en niet-veroordelend — we vertrekken vanuit
                waar jij staat en wat jij wilt veranderen.
              </p>
              <p>
                Psycho-educatie over de werking van middelen op je brein en
                lichaam geeft je inzicht en maakt het makkelijker om bewuste
                keuzes te maken.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Wat kun je verwachten?
            </h2>
            <div className="text-stone-700 leading-relaxed space-y-3">
              <p>
                In een eerste gesprek verkennen we samen je situatie —
                eerlijk en zonder oordeel. Het is niet nodig dat je al klaar
                bent om te stoppen. Ook als je twijfelt, ben je welkom.
              </p>
              <p>
                Verandering in middelengebruik is een proces met ups en downs.
                Terugval hoort daar soms bij en is geen falen. Samen bouwen we
                aan duurzame verandering op jouw tempo.
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
