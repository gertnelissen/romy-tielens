import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacybeleid",
};

export default function Privacy() {
  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto px-6 space-y-6">
        <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl text-sage-800 mb-2">
          Privacybeleid
        </h1>

        <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
          <p>
            Romy Tielens hecht veel belang aan de bescherming van je
            persoonsgegevens. Dit privacybeleid legt uit welke gegevens worden
            verzameld en hoe ze worden gebruikt.
          </p>

          <h2 className="font-semibold text-sage-800 text-base pt-2">
            Welke gegevens?
          </h2>
          <p>
            Via het contactformulier op deze website worden je naam, e-mailadres,
            telefoonnummer (optioneel) en bericht verzameld. Deze gegevens
            worden uitsluitend gebruikt om je vraag te beantwoorden of een
            afspraak in te plannen.
          </p>

          <h2 className="font-semibold text-sage-800 text-base pt-2">
            Verwerking
          </h2>
          <p>
            Je gegevens worden niet gedeeld met derden, tenzij dit wettelijk
            verplicht is. Het contactformulier wordt verwerkt via Formspree.
            Je gegevens worden niet langer bewaard dan nodig.
          </p>

          <h2 className="font-semibold text-sage-800 text-base pt-2">
            Beroepsgeheim
          </h2>
          <p>
            Als klinisch psycholoog is Romy Tielens gebonden aan het
            beroepsgeheim. Alle informatie die je deelt tijdens sessies wordt
            strikt vertrouwelijk behandeld.
          </p>

          <h2 className="font-semibold text-sage-800 text-base pt-2">
            Je rechten
          </h2>
          <p>
            Je hebt het recht om je gegevens in te zien, te corrigeren of te
            laten verwijderen. Neem hiervoor contact op via{" "}
            <a
              href="mailto:romy@praktijkkadans.be"
              className="text-sage-600 hover:text-sage-700"
            >
              romy@praktijkkadans.be
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
