import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psycholoog zelfverwonding Hasselt | Romy Tielens",
  description:
    "Worstel je met zelfverwonding? Klinisch psycholoog Romy Tielens in Hasselt helpt je om andere manieren te vinden om met pijn en emoties om te gaan.",
};

export default function Zelfverwonding() {
  return (
    <>
      <section className="bg-sage-50 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sage-600 text-sm font-medium mb-2">
            <Link href="/aanbod" className="hover:text-sage-700">
              Aanbod
            </Link>{" "}
            / Zelfverwonding
          </p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-sage-800 mb-4">
            Zelfverwonding
          </h1>
          <p className="text-stone-600 text-lg">
            Samen op zoek naar andere manieren om met pijn om te gaan.
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
                "Je gebruikt zelfverwonding als een manier om met overweldigende emoties om te gaan",
                "Je voelt je vaak gevoelloos of afgesloten van jezelf",
                "Je schaamt je voor wat je doet en houdt het verborgen voor anderen",
                "Je vindt het moeilijk om je emoties in woorden uit te drukken",
                "Je hebt het gevoel dat je de controle verliest over je eigen gedrag",
                "De drang om jezelf pijn te doen is sterk en moeilijk te weerstaan",
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
                Zelfverwonding is vaak een manier om om te gaan met emotionele
                pijn die ondraaglijk aanvoelt. Het is geen teken van zwakte,
                maar een signaal dat je betere manieren nodig hebt om met die
                pijn om te gaan. In therapie zoeken we samen naar die andere
                manieren — zonder oordeel en in jouw tempo.
              </p>
              <p>
                Via cognitieve gedragstherapie (CGT) leer je alternatieve
                copingstrategieën ontwikkelen voor momenten van crisis.
                Schematherapie helpt om de diepere patronen en overtuigingen
                te begrijpen die aan de basis liggen. Met Emotion-Focused
                Therapy (EFT) oefen je om je emoties te herkennen, te benoemen
                en op een gezonde manier te reguleren.
              </p>
              <p>
                Veiligheid staat voorop. Samen stellen we een veiligheidsplan
                op, zodat je weet wat je kunt doen wanneer de drang opkomt.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Wat kun je verwachten?
            </h2>
            <div className="text-stone-700 leading-relaxed space-y-3">
              <p>
                Het eerste gesprek is een kennismaking. Je vertelt wat je wilt
                delen, in je eigen tempo. Er is geen druk om alles meteen te
                bespreken.
              </p>
              <p>
                Verandering vraagt tijd en moed. Het gaat er niet om van vandaag
                op morgen te stoppen, maar om stap voor stap andere manieren te
                leren om met moeilijke momenten om te gaan. We bouwen samen aan
                een stevig fundament waar je op kunt terugvallen.
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
