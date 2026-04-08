import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psycholoog rouw en verlies Hasselt | Romy Tielens",
  description:
    "Moeilijk om te gaan met rouw of verlies? Klinisch psycholoog Romy Tielens in Hasselt biedt een veilige ruimte om je verdriet te verwerken.",
};

export default function Rouw() {
  return (
    <>
      <section className="bg-sage-50 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sage-600 text-sm font-medium mb-2">
            <Link href="/aanbod" className="hover:text-sage-700">
              Aanbod
            </Link>{" "}
            / Rouw &amp; verlies
          </p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-sage-800 mb-4">
            Rouw &amp; verlies
          </h1>
          <p className="text-stone-600 text-lg">
            Ruimte voor wat je verloren hebt.
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
                "Het verdriet overvalt je in golven en je weet niet hoe je ermee om moet gaan",
                "Je vindt het moeilijk om te aanvaarden dat iemand er niet meer is",
                "Je draagt schuldgevoelens met je mee — over wat je wel of niet hebt gedaan",
                "Je hebt het gevoel dat je vastzit in je rouw en niet vooruit komt",
                "Je vermijdt plaatsen, mensen of herinneringen die aan je verlies doen denken",
                "Je voelt je afgesloten van de mensen om je heen, alsof niemand het begrijpt",
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
                Rouw heeft geen vast tijdschema en geen &quot;juiste&quot;
                manier. Iedereen rouwt anders, en dat is oké. In therapie
                bied ik je een veilige plek waar je verdriet er mag zijn —
                zonder oordeel, zonder druk om &quot;erover te komen&quot;.
              </p>
              <p>
                Via Emotion-Focused Therapy (EFT) help ik je om de intense
                emoties die bij rouw horen — verdriet, woede, schuld, gemis —
                toe te laten en te verwerken. Cli&euml;ntgerichte therapie vormt
                de basis: ik luister naar jouw verhaal en volg jouw tempo.
              </p>
              <p>
                Samen zoeken we naar een manier om het verlies een plek te geven
                in je leven, zonder dat het je volledig overneemt. Het doel is
                niet om te vergeten, maar om verder te kunnen met wat je
                meedraagt.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Wat kun je verwachten?
            </h2>
            <div className="text-stone-700 leading-relaxed space-y-3">
              <p>
                In een eerste gesprek vertel je in alle rust wat je hebt
                meegemaakt. Er is geen verwachting — je hoeft niet sterk te zijn
                of je verhaal &quot;goed&quot; te vertellen.
              </p>
              <p>
                Een rouwtraject verloopt in jouw tempo. Soms zijn er weken waarin
                het beter gaat, gevolgd door moeilijkere periodes. Dat is
                normaal. We stemmen de frequentie af op wat jij nodig hebt.
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
