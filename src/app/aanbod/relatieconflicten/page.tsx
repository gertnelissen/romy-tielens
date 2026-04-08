import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psycholoog relatieconflicten Hasselt | Romy Tielens",
  description:
    "Steeds dezelfde conflicten in je relaties? Klinisch psycholoog Romy Tielens in Hasselt helpt je inzicht krijgen in relatiepatronen en gezonder communiceren.",
};

export default function Relatieconflicten() {
  return (
    <>
      <section className="bg-sage-50 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sage-600 text-sm font-medium mb-2">
            <Link href="/aanbod" className="hover:text-sage-700">
              Aanbod
            </Link>{" "}
            / Relatieconflicten
          </p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-sage-800 mb-4">
            Relatieconflicten
          </h1>
          <p className="text-stone-600 text-lg">
            Inzicht in patronen die relaties bemoeilijken.
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
                "Dezelfde conflicten komen steeds weer terug, met je partner, familie of vrienden",
                "Je vindt het moeilijk om je behoeften en grenzen uit te spreken",
                "Vertrouwen geven voelt kwetsbaar en onveilig",
                "Je past je voortdurend aan om conflicten te vermijden of anderen tevreden te houden",
                "Je hebt schrik om verlaten te worden of afgewezen te worden",
                "Je merkt dat je steeds in dezelfde soort ongezonde relaties belandt",
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
                Relatieproblemen gaan zelden alleen over de ander. Vaak spelen
                onbewuste patronen mee die je al van jongs af aan hebt
                ontwikkeld. Die patronen bepalen hoe je reageert op nabijheid,
                conflict en kwetsbaarheid.
              </p>
              <p>
                Met schematherapie onderzoeken we welke relationele
                schema&apos;s je hebt opgebouwd — bijvoorbeeld de overtuiging
                dat je niet belangrijk genoeg bent, of dat je altijd moet zorgen
                voor anderen. Via assertiviteitstraining oefen je met het
                aangeven van je grenzen en behoeften op een respectvolle manier.
              </p>
              <p>
                Emotion-Focused Therapy (EFT) helpt je om de kwetsbare emoties
                onder je gedrag te herkennen en uit te drukken. Zo ontstaat er
                meer ruimte voor eerlijke, verbindende communicatie.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Wat kun je verwachten?
            </h2>
            <div className="text-stone-700 leading-relaxed space-y-3">
              <p>
                In het eerste gesprek breng ik samen met jou in kaart welke
                patronen je herkent in je relaties. We kijken naar hoe je bent
                opgegroeid en welke overtuigingen je hebt meegekregen.
              </p>
              <p>
                Verandering in relatiepatronen vraagt oefening en moed. Het kan
                oncomfortabel voelen om anders te reageren dan je gewend bent.
                Maar gaandeweg merk je dat je relaties dieper en eerlijker
                worden.
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
