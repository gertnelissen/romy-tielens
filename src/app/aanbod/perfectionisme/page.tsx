import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psycholoog perfectionisme Hasselt | Romy Tielens",
  description:
    "Worstel je met perfectionisme? Klinisch psycholoog Romy Tielens in Hasselt helpt je om los te laten en jezelf meer ruimte te geven.",
};

export default function Perfectionisme() {
  return (
    <>
      <section className="bg-sage-50 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sage-600 text-sm font-medium mb-2">
            <Link href="/aanbod" className="hover:text-sage-700">
              Aanbod
            </Link>{" "}
            / Perfectionisme
          </p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-sage-800 mb-4">
            Perfectionisme
          </h1>
          <p className="text-stone-600 text-lg">
            Leren dat goed genoeg ook goed is.
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
                "Je legt de lat altijd extreem hoog — voor jezelf en soms ook voor anderen",
                "De angst om fouten te maken verlamt je en houdt je tegen",
                "Je stelt taken uit omdat je bang bent dat het resultaat niet perfect zal zijn",
                "Hoe goed iets ook gaat, je bent nooit echt tevreden",
                "Je bent keihard voor jezelf en je innerlijke criticus staat nooit stil",
                "Delegeren voelt onmogelijk — niemand doet het zo goed als jij",
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
                Perfectionisme lijkt soms een kracht, maar het kan je ook
                gevangen houden. De drang om alles perfect te doen leidt vaak
                tot uitputting, uitstelgedrag of het vermijden van nieuwe
                uitdagingen. Samen onderzoeken we waar die hoge eisen vandaan
                komen.
              </p>
              <p>
                Via schematherapie kijken we naar de vroege patronen en
                overtuigingen die aan de basis liggen — vaak aangeleerd in je
                kindertijd. Met cognitieve gedragstherapie (CGT) leer je
                perfectionistisch denken herkennen en bijsturen. We oefenen met
                het loslaten van controle en het toelaten van
                &quot;imperfectie&quot;.
              </p>
              <p>
                Zelfcompassie-technieken helpen je om milder en warmer naar
                jezelf te leren kijken, in plaats van jezelf voortdurend af te
                rekenen op wat beter had gekund.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Wat kun je verwachten?
            </h2>
            <div className="text-stone-700 leading-relaxed space-y-3">
              <p>
                We starten met een kennismakingsgesprek waarin je vertelt wat
                perfectionisme voor jou betekent en hoe het je dagelijks leven
                be&iuml;nvloedt. Samen stellen we doelen op die haalbaar en
                realistisch zijn.
              </p>
              <p>
                Perfectionisme loslaten is een proces. Het gaat niet om slordig
                worden, maar om ruimte maken voor flexibiliteit. Gaandeweg merk
                je dat je minder angst voelt en meer vrijheid ervaart.
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
