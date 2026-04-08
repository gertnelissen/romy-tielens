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

        <div className="space-y-5 text-stone-700 text-base leading-relaxed">
          <div>
            <h2 className="font-semibold text-sage-800 text-lg pt-2 mb-1">
              Verwerkingsverantwoordelijke
            </h2>
            <p>
              Romy Tielens, klinisch psycholoog
              <br />
              Kempische Steenweg 565, 3500 Hasselt
              <br />
              <a href="mailto:romy@praktijkkadans.be" className="text-sage-600 hover:text-sage-700">
                romy@praktijkkadans.be
              </a>
              {" — "}
              <a href="tel:+32497605892" className="text-sage-600 hover:text-sage-700">
                0497 / 60 58 92
              </a>
              <br />
              Visumnummer: 261431 · Psychologencommissie: 942123340
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-sage-800 text-lg pt-2 mb-1">
              Welke gegevens worden verzameld?
            </h2>
            <p>
              Via het contactformulier op deze website worden je naam,
              e-mailadres, telefoonnummer (optioneel) en bericht verzameld.
              Deze gegevens worden uitsluitend gebruikt om je vraag te
              beantwoorden of een afspraak in te plannen.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-sage-800 text-lg pt-2 mb-1">
              Rechtsgrond
            </h2>
            <p>
              De verwerking van je gegevens via het contactformulier is
              gebaseerd op je toestemming (Art. 6.1.a GDPR). Je kunt deze
              toestemming op elk moment intrekken. Indien je in je bericht
              gezondheidsgerelateerde informatie deelt, verwerken wij deze op
              basis van Art. 9.2.h GDPR (verwerking in het kader van
              gezondheidszorg door een beroepsbeoefenaar die gebonden is aan
              het beroepsgeheim).
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-sage-800 text-lg pt-2 mb-1">
              Ontvangers en doorgifte
            </h2>
            <p>
              Je gegevens worden niet gedeeld met derden, tenzij wettelijk
              verplicht. Het contactformulier wordt verwerkt via Formspree Inc.
              (VS). Formspree verwerkt je gegevens onder het EU-US Data Privacy
              Framework.
            </p>
            <p className="mt-2">
              Op de contactpagina kan een kaart van Google Maps worden
              weergegeven. Deze wordt pas geladen na jouw toestemming. Bij het
              laden kan Google (VS) cookies plaatsen en gegevens verwerken.
              Google Fonts worden lokaal gehost en vereisen geen verbinding met
              Google-servers.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-sage-800 text-lg pt-2 mb-1">
              Bewaartermijnen
            </h2>
            <p>
              Contactformuliergegevens worden maximaal 12 maanden na het
              laatste contact bewaard, tenzij een therapeutische relatie wordt
              opgestart. In dat geval gelden de wettelijke bewaartermijnen
              voor patiëntendossiers.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-sage-800 text-lg pt-2 mb-1">
              Beroepsgeheim
            </h2>
            <p>
              Als klinisch psycholoog is Romy Tielens gebonden aan het
              beroepsgeheim (Art. 458 Strafwetboek) en de deontologische code
              van de Psychologencommissie. Alle informatie die je deelt tijdens
              sessies wordt strikt vertrouwelijk behandeld.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-sage-800 text-lg pt-2 mb-1">
              Je rechten
            </h2>
            <p>Je hebt recht op:</p>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>inzage in je persoonsgegevens</li>
              <li>rectificatie van onjuiste gegevens</li>
              <li>wissing van je gegevens</li>
              <li>beperking van de verwerking</li>
              <li>overdraagbaarheid van je gegevens</li>
              <li>bezwaar tegen de verwerking</li>
            </ul>
            <p className="mt-2">
              Om een van deze rechten uit te oefenen, stuur een e-mail naar{" "}
              <a href="mailto:romy@praktijkkadans.be" className="text-sage-600 hover:text-sage-700">
                romy@praktijkkadans.be
              </a>
              . Je ontvangt binnen 30 dagen een reactie.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-sage-800 text-lg pt-2 mb-1">
              Klacht indienen
            </h2>
            <p>
              Je hebt het recht om een klacht in te dienen bij de
              toezichthoudende autoriteit:
            </p>
            <p className="mt-1">
              Gegevensbeschermingsautoriteit (GBA)
              <br />
              Drukpersstraat 35, 1000 Brussel
              <br />
              +32 2 274 48 00 —{" "}
              <a href="mailto:contact@apd-gba.be" className="text-sage-600 hover:text-sage-700">
                contact@apd-gba.be
              </a>
              <br />
              <a
                href="https://www.gegevensbeschermingsautoriteit.be"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage-600 hover:text-sage-700"
              >
                www.gegevensbeschermingsautoriteit.be
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-sage-800 text-lg pt-2 mb-1">
              Cookies
            </h2>
            <p>
              Deze website maakt geen gebruik van analytische of
              marketingcookies. De ingebedde Google Maps-kaart op de
              contactpagina kan functionele cookies plaatsen. Deze kaart wordt
              pas geladen na je toestemming.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-sage-800 text-lg pt-2 mb-1">
              Minderjarigen
            </h2>
            <p>
              Deze website is niet gericht op minderjarigen onder 16 jaar.
              Gegevens van minderjarigen worden niet bewust verzameld zonder
              toestemming van een ouder of voogd.
            </p>
          </div>

          <p className="text-stone-500 text-sm pt-4">
            Laatst bijgewerkt: april 2026
          </p>
        </div>
      </div>
    </section>
  );
}
