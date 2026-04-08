import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Traumatherapie Hasselt | Romy Tielens",
  description:
    "Traumaverwerking met integratieve psychotherapie in Hasselt. Klinisch psycholoog Romy Tielens begeleidt je bij het verwerken van ingrijpende ervaringen.",
};

export default function Trauma() {
  return (
    <>
      <section className="bg-sage-50 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sage-600 text-sm font-medium mb-2">
            <Link href="/aanbod" className="hover:text-sage-700">
              Aanbod
            </Link>{" "}
            / Trauma
          </p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-sage-800 mb-4">
            Trauma
          </h1>
          <p className="text-stone-600 text-lg">
            Ruimte om te verwerken, in een veilige omgeving.
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
                "Je wordt overvallen door herinneringen aan een ingrijpende gebeurtenis",
                "Je hebt nachtmerries of slaapproblemen gerelateerd aan het verleden",
                "Je vermijdt situaties, plaatsen of mensen die je aan de gebeurtenis herinneren",
                "Je schrikt snel of voelt je voortdurend op je hoede",
                "Je hebt moeite om emoties te voelen of je afgesloten van anderen",
                "Je ervaart schuldgevoelens of schaamte over wat er is gebeurd",
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
                Traumatische ervaringen kunnen lang doorwerken — soms jaren na
                de gebeurtenis. Ze beïnvloeden hoe je naar jezelf kijkt, hoe je
                relaties aangaat, en hoe je je voelt in je dagelijks leven.
              </p>
              <p>
                In therapie creëer ik eerst een veilige basis. Pas wanneer je
                je veilig genoeg voelt, gaan we stap voor stap aan de slag met
                het trauma zelf. Dit gebeurt altijd op jouw tempo.
              </p>
              <p>
                Ik combineer schematherapie (om te begrijpen hoe het trauma je
                zelfbeeld en patronen heeft gevormd), emotion-focused therapy
                (om vastgelopen emoties ruimte te geven) en cognitieve
                technieken (om niet-helpende overtuigingen te herkennen).
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Wat kun je verwachten?
            </h2>
            <div className="text-stone-700 leading-relaxed space-y-3">
              <p>
                Traumatherapie vraagt tijd en is een proces met ups en downs.
                In de eerste gesprekken leren we elkaar kennen en breng ik
                samen met jou je verhaal in kaart. Daarna werken we gericht
                aan verwerking en herstel.
              </p>
              <p>
                Het doel is niet om te vergeten wat er is gebeurd, maar om
                het een plek te geven zodat het je leven minder beheerst.
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
