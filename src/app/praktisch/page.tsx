import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Praktisch | Romy Tielens",
  description:
    "Tarieven, locaties, terugbetaling en veelgestelde vragen. Psycholoog in Hasselt.",
};

export default function Praktisch() {
  return (
    <>
      <section className="bg-sage-50 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-sage-800 mb-4">
            Praktische info
          </h1>
          <p className="text-stone-600 text-lg">
            Alles wat je moet weten voor een eerste afspraak.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6 space-y-10">
          {/* Tarieven */}
          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Tarieven
            </h2>
            <div className="space-y-3">
              <div className="bg-white border border-stone-200 rounded-xl p-5 flex justify-between items-center">
                <div>
                  <p className="font-semibold text-sage-800">
                    Individueel gesprek
                  </p>
                  <p className="text-base text-stone-600">50 - 60 minuten</p>
                </div>
                <p className="text-2xl font-semibold text-sage-800">
                  &euro;75
                </p>
              </div>
              <div className="bg-white border border-stone-200 rounded-xl p-5 flex justify-between items-center">
                <div>
                  <p className="font-semibold text-sage-800">
                    Eerstelijnspsychologie (ELP)
                  </p>
                  <p className="text-base text-stone-600">
                    Via doorverwijzing huisarts
                  </p>
                </div>
                <p className="text-2xl font-semibold text-sage-800">
                  &euro;85
                </p>
              </div>
            </div>
          </div>

          {/* Terugbetaling */}
          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Terugbetaling
            </h2>
            <div className="text-stone-700 leading-relaxed space-y-3">
              <p>
                Als erkend klinisch psycholoog komen sessies in aanmerking voor
                gedeeltelijke terugbetaling via je mutualiteit. Het bedrag
                verschilt per ziekenfonds.
              </p>
              <p>
                Informeer bij je mutualiteit naar de voorwaarden en het bedrag
                dat je kunt recupereren. Je ontvangt na elke sessie een
                kwitantie.
              </p>
            </div>
          </div>

          {/* Locaties */}
          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Locaties
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white border border-stone-200 rounded-xl p-5">
                <p className="font-semibold text-sage-800 mb-1">
                  Zorgpraktijk Kadans
                </p>
                <p className="text-stone-600 text-sm">
                  Kempische Steenweg 565
                  <br />
                  3500 Hasselt
                </p>
              </div>
              <div className="bg-white border border-stone-200 rounded-xl p-5">
                <p className="font-semibold text-sage-800 mb-1">
                  Jessa Ziekenhuis
                </p>
                <p className="text-stone-600 text-sm">
                  Guffenslaan
                  <br />
                  3500 Hasselt
                </p>
              </div>
              <div className="bg-white border border-stone-200 rounded-xl p-5">
                <p className="font-semibold text-sage-800 mb-1">
                  Thuispraktijk
                </p>
                <p className="text-stone-600 text-sm">
                  Luchtvaartstraat
                  <br />
                  3500 Hasselt
                </p>
              </div>
              <div className="bg-white border border-stone-200 rounded-xl p-5">
                <p className="font-semibold text-sage-800 mb-1">
                  Online sessie
                </p>
                <p className="text-stone-600 text-sm">
                  Via videogesprek, vanuit je eigen
                  vertrouwde omgeving
                </p>
              </div>
            </div>
          </div>

          {/* Beschikbaarheid */}
          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Beschikbaarheid
            </h2>
            <div className="bg-white border border-stone-200 rounded-xl overflow-hidden">
              {[
                { day: "Maandag", hours: "13:00 - 17:00" },
                { day: "Woensdag", hours: "09:00 - 20:00" },
                { day: "Donderdag", hours: "08:00 - 17:00" },
              ].map(({ day, hours }, i) => (
                <div
                  key={day}
                  className={`flex justify-between px-5 py-3 ${
                    i > 0 ? "border-t border-stone-100" : ""
                  }`}
                >
                  <span className="text-sage-800 font-medium">{day}</span>
                  <span className="text-stone-600">{hours}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 bg-sage-50 border border-sage-200 rounded-xl p-4">
              <p className="text-base text-stone-700">
                <strong className="text-sage-800">Wachtlijst:</strong>{" "}
                Momenteel is er een wachttijd van ongeveer 1 maand. Neem gerust
                al contact op zodat ik je op de wachtlijst kan plaatsen.
              </p>
            </div>
          </div>

          {/* Verloop */}
          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Hoe verloopt een eerste afspraak?
            </h2>
            <ol className="space-y-4">
              {[
                {
                  step: "Contact",
                  text: "Je neemt contact op via het contactformulier, e-mail of telefoon.",
                },
                {
                  step: "Kennismaking",
                  text: "In een eerste gesprek luister ik naar jouw verhaal en bekijken we samen wat je nodig hebt.",
                },
                {
                  step: "Traject",
                  text: "We spreken samen een plan af en starten met de begeleiding, op jouw tempo.",
                },
              ].map(({ step, text }, i) => (
                <li key={step} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-sage-100 rounded-full flex items-center justify-center text-sm font-semibold text-sage-700">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-sage-800">{step}</p>
                    <p className="text-base text-stone-600">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Veelgestelde vragen
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Hoe lang duurt een therapietraject?",
                  a: "Dat verschilt per persoon en klacht. Sommige trajecten duren enkele sessies, andere lopen langer. We evalueren regelmatig samen of het traject nog aansluit bij jouw noden.",
                },
                {
                  q: "Heb ik een doorverwijzing nodig?",
                  a: "Voor een gewoon consult niet. Voor eerstelijnspsychologie (ELP) heb je een doorverwijzing van je huisarts nodig.",
                },
                {
                  q: "Worden sessies terugbetaald?",
                  a: "Ja, als erkend klinisch psycholoog komen sessies in aanmerking voor gedeeltelijke terugbetaling via je mutualiteit. Het exacte bedrag verschilt per ziekenfonds.",
                },
                {
                  q: "Kan ik ook online een sessie doen?",
                  a: "Ja, online sessies via videogesprek zijn mogelijk. Dit kan handig zijn als je niet naar de praktijk kunt komen.",
                },
                {
                  q: "Wat als ik een afspraak moet annuleren?",
                  a: "Annuleren kan tot 24 uur op voorhand. Bij laattijdige annulering of het niet opdagen wordt de sessie aangerekend.",
                },
              ].map(({ q, a }) => (
                <div
                  key={q}
                  className="border-b border-stone-200 pb-4"
                >
                  <p className="font-medium text-sage-800 mb-1">{q}</p>
                  <p className="text-base text-stone-600 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Talen */}
          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Talen
            </h2>
            <p className="text-stone-700">
              Sessies zijn mogelijk in het <strong>Nederlands</strong> en{" "}
              <strong>Engels</strong>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
