import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Voor doorverwijzers",
  description:
    "Informatie voor huisartsen en zorgverleners die patiënten willen doorverwijzen naar psycholoog Romy Tielens in Hasselt.",
};

export default function Doorverwijzers() {
  return (
    <>
      <section className="bg-sage-50 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-sage-800 mb-4">
            Voor doorverwijzers
          </h1>
          <p className="text-stone-600 text-lg">
            Informatie voor huisartsen, specialisten en andere zorgverleners.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6 space-y-10">
          {/* Profiel */}
          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Kort profiel
            </h2>
            <div className="bg-white border border-stone-200 rounded-xl p-6">
              <div className="grid sm:grid-cols-2 gap-6 text-sm">
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sage-800">Naam</p>
                    <p className="text-stone-600">Romy Tielens</p>
                  </div>
                  <div>
                    <p className="font-medium text-sage-800">Titel</p>
                    <p className="text-stone-600">
                      Klinisch psycholoog &amp; integratief psychotherapeut
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-sage-800">Visumnummer</p>
                    <p className="text-stone-600">261431</p>
                  </div>
                  <div>
                    <p className="font-medium text-sage-800">
                      Psychologencommissie
                    </p>
                    <p className="text-stone-600">942123340</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sage-800">Opleiding</p>
                    <p className="text-stone-600">
                      Master Klinische Psychologie — KU Leuven
                      <br />
                      Postgraduaat Integratieve Psychotherapie — UAntwerpen
                      <br />
                      Postgraduaat kPNI — Hogeschool PXL
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-sage-800">Talen</p>
                    <p className="text-stone-600">Nederlands, Engels</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Doelgroep */}
          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Doelgroep &amp; specialisaties
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-sage-800 mb-2">
                  Ik werk met:
                </p>
                <ul className="text-base text-stone-600 space-y-1">
                  <li>Volwassenen (18+)</li>
                  <li>Individuele therapie</li>
                  <li>Online sessies mogelijk</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-sage-800 mb-2">
                  Specialisaties:
                </p>
                <ul className="text-base text-stone-600 space-y-1">
                  <li>Angst &amp; paniek</li>
                  <li>Depressie &amp; somberheid</li>
                  <li>Burn-out &amp; stress</li>
                  <li>Trauma</li>
                  <li>Perfectionisme</li>
                  <li>Hoogsensitiviteit</li>
                  <li>Postpartum depressie</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 bg-sage-50 border border-sage-200 rounded-xl p-4">
              <p className="text-sm text-stone-700">
                <strong className="text-sage-800">Niet geschikt voor:</strong>{" "}
                kinderen en jongeren, koppeltherapie, acute
                suïcidaliteit (verwijs door naar spoedpsychiatrie).
              </p>
            </div>
          </div>

          {/* Hoe doorverwijzen */}
          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Hoe doorverwijzen?
            </h2>
            <ol className="space-y-4">
              {[
                {
                  step: "Neem contact op",
                  text: "De patiënt kan zelf contact opnemen via het contactformulier, e-mail (romy@praktijkkadans.be) of telefoon (0497 / 60 58 92). U kunt ook rechtstreeks contact opnemen om de situatie kort toe te lichten.",
                },
                {
                  step: "Eerste afspraak",
                  text: "Binnen de huidige wachttijd (~1 maand) wordt een kennismakingsgesprek ingepland. Ik bekijk samen met de patiënt of er een goede match is.",
                },
                {
                  step: "Terugkoppeling",
                  text: "Met toestemming van de patiënt koppel ik graag terug over het verloop van het traject.",
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

          {/* ELP */}
          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Eerstelijnspsychologie (ELP)
            </h2>
            <div className="text-stone-700 leading-relaxed space-y-3 text-sm">
              <p>
                Ik werk ook binnen het kader van eerstelijnspsychologie. Hiervoor
                is een doorverwijzing van de huisarts nodig.
              </p>
              <p>
                Het ELP-tarief bedraagt <strong>€85 per sessie</strong> (50-60
                minuten). De patiënt betaalt het volledige bedrag en vraagt
                terugbetaling aan bij de mutualiteit.
              </p>
            </div>
          </div>

          {/* Praktisch */}
          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Praktische info
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-white border border-stone-200 rounded-xl p-5">
                <p className="font-medium text-sage-800 mb-1">Wachttijd</p>
                <p className="text-stone-600">Ongeveer 1 maand</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-xl p-5">
                <p className="font-medium text-sage-800 mb-1">Sessieduur</p>
                <p className="text-stone-600">50 - 60 minuten</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-xl p-5">
                <p className="font-medium text-sage-800 mb-1">Tarief</p>
                <p className="text-stone-600">€75 (individueel) / €85 (ELP)</p>
              </div>
              <div className="bg-white border border-stone-200 rounded-xl p-5">
                <p className="font-medium text-sage-800 mb-1">Locaties</p>
                <p className="text-stone-600">
                  Kadans (Hasselt), Jessa ZH, thuis, online
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="border-t border-stone-200 pt-8 text-center">
            <p className="text-stone-700 mb-4">
              Vragen of een patiënt aanmelden?
            </p>
            <Link
              href="/contact"
              className="inline-block bg-sage-600 text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-sage-700 transition-colors"
            >
              Neem contact op
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
