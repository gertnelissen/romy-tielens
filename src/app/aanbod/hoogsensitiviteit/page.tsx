import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psycholoog hoogsensitiviteit Hasselt | Romy Tielens",
  description:
    "Ben je hoogsensitief en wil je daar beter mee leren omgaan? Klinisch psycholoog Romy Tielens in Hasselt helpt je om je gevoeligheid als kracht te benutten.",
};

export default function Hoogsensitiviteit() {
  return (
    <>
      <section className="bg-sage-50 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sage-600 text-sm font-medium mb-2">
            <Link href="/aanbod" className="hover:text-sage-700">
              Aanbod
            </Link>{" "}
            / Hoogsensitiviteit
          </p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-sage-800 mb-4">
            Hoogsensitiviteit
          </h1>
          <p className="text-stone-600 text-lg">
            Je gevoeligheid als kracht leren zien.
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
                "Je raakt snel overprikkeld door drukte, geluid of licht",
                "Je denkt diep na over dingen en verwerkt ervaringen intenser dan anderen",
                "Je emoties zijn heftig — zowel de positieve als de moeilijke",
                "Je hebt meer alleen-tijd nodig dan de mensen om je heen",
                "Grenzen stellen voelt lastig en je neemt snel te veel op je",
                "Je hebt vaak het gevoel dat je anders bent dan de rest",
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
                Hoogsensitiviteit is geen stoornis, maar een persoonlijkheidstrek
                die voorkomt bij zo&apos;n 15-20% van de bevolking. Toch kan het
                in een drukke, prikkelrijke wereld voor heel wat uitdagingen
                zorgen. In therapie leer je om je gevoeligheid beter te
                begrijpen en er op een gezonde manier mee om te gaan.
              </p>
              <p>
                Via psycho-educatie over hoogsensitiviteit krijg je inzicht in
                hoe jouw zenuwstelsel werkt en waarom bepaalde situaties je meer
                raken. Met cognitieve gedragstherapie (CGT) ontwikkel je
                concrete copingstrategieën voor overprikkeling.
                Schematherapie helpt als je gevoeligheid heeft geleid tot een
                negatief zelfbeeld of het gevoel &quot;niet oké&quot; te zijn.
              </p>
              <p>
                Daarnaast werk ik met praktische tools voor het dagelijkse
                leven: grenzen stellen, prikkels doseren en je energie bewuster
                beheren.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Wat kun je verwachten?
            </h2>
            <div className="text-stone-700 leading-relaxed space-y-3">
              <p>
                We beginnen met een gesprek over hoe hoogsensitiviteit zich bij
                jou uit en welke situaties je als moeilijk ervaart. Dat is voor
                iedereen anders.
              </p>
              <p>
                Het doel is niet om minder gevoelig te worden, maar om je
                gevoeligheid als iets waardevols te leren zien en er beter mee
                om te gaan. Je leert patronen herkennen, grenzen stellen en
                meer balans vinden in je dagelijks leven.
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
