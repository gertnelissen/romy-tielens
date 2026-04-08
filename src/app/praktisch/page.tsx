import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Praktisch | Romy Tielens",
  description:
    "Tarieven, terugbetaling, locatie en openingsuren van de praktijk in Hasselt.",
};

export default function Praktisch() {
  return (
    <>
      <section className="bg-sage-50 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-[var(--font-serif)] text-4xl text-sage-800 mb-4">
            Praktische info
          </h1>
          <p className="text-sage-700/70 text-lg">
            Alles wat je moet weten voor een eerste afspraak.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-14">
          {/* Tarieven */}
          <div>
            <h2 className="font-[var(--font-serif)] text-2xl text-sage-800 mb-4">
              Tarieven
            </h2>
            <div className="bg-white border border-sage-100 rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-sage-800">
                    Individueel gesprek
                  </p>
                  <p className="text-sm text-sage-600">50 - 60 minuten</p>
                </div>
                <p className="text-2xl font-semibold text-sage-800">
                  &euro;75
                </p>
              </div>
            </div>
          </div>

          {/* Terugbetaling */}
          <div>
            <h2 className="font-[var(--font-serif)] text-2xl text-sage-800 mb-4">
              Terugbetaling
            </h2>
            <div className="space-y-3 text-sage-700/80 leading-relaxed">
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

          {/* Locatie */}
          <div>
            <h2 className="font-[var(--font-serif)] text-2xl text-sage-800 mb-4">
              Locatie
            </h2>
            <div className="bg-white border border-sage-100 rounded-xl p-6 shadow-sm">
              <p className="font-semibold text-sage-800 mb-1">
                Zorgpraktijk Kadans
              </p>
              <p className="text-sage-700/80 text-sm">
                Kempische Steenweg 565
                <br />
                3500 Hasselt
              </p>
            </div>
          </div>

          {/* Openingsuren */}
          <div>
            <h2 className="font-[var(--font-serif)] text-2xl text-sage-800 mb-4">
              Beschikbaarheid
            </h2>
            <div className="bg-white border border-sage-100 rounded-xl overflow-hidden shadow-sm">
              {[
                { day: "Maandag", hours: "13:00 - 17:00" },
                { day: "Woensdag", hours: "09:00 - 20:00" },
                { day: "Donderdag", hours: "08:00 - 17:00" },
              ].map(({ day, hours }, i) => (
                <div
                  key={day}
                  className={`flex justify-between px-6 py-4 ${
                    i > 0 ? "border-t border-sage-100" : ""
                  }`}
                >
                  <span className="text-sage-800 font-medium">{day}</span>
                  <span className="text-sage-600">{hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Verloop */}
          <div>
            <h2 className="font-[var(--font-serif)] text-2xl text-sage-800 mb-4">
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
                    <p className="text-sm text-sage-700/70">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Talen */}
          <div>
            <h2 className="font-[var(--font-serif)] text-2xl text-sage-800 mb-4">
              Talen
            </h2>
            <p className="text-sage-700/80">
              Sessies zijn mogelijk in het <strong>Nederlands</strong> en{" "}
              <strong>Engels</strong>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
