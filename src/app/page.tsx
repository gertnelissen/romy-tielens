import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-sage-50 to-warm-50 py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="font-[var(--font-serif)] text-4xl md:text-5xl text-sage-800 mb-6 leading-tight">
            Ruimte om te groeien,
            <br />
            op jouw tempo
          </h1>
          <p className="text-lg text-sage-700/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Samen ontdekken wat jij nodig hebt om je beter te voelen en het
            leven weer ten volle te omarmen. Als klinisch psycholoog en
            integratief psychotherapeut begeleid ik volwassenen in Hasselt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-sage-600 text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-sage-700 transition-colors"
            >
              Maak een afspraak
            </Link>
            <Link
              href="/aanbod"
              className="inline-block border border-sage-300 text-sage-700 px-8 py-3 rounded-lg text-sm font-semibold hover:bg-sage-50 transition-colors"
            >
              Bekijk het aanbod
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl aspect-[4/5] overflow-hidden">
            <Image
              src="/romy.jpg"
              alt="Romy Tielens — klinisch psycholoog"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div>
            <h2 className="font-[var(--font-serif)] text-3xl text-sage-800 mb-4">
              Welkom
            </h2>
            <p className="text-sage-700/80 leading-relaxed mb-4">
              Iedereen loopt wel eens vast. Soms lukt het om op eigen kracht
              weer verder te gaan, maar soms kan professionele hulp het verschil
              maken. Het is een moedige stap om hulp te zoeken.
            </p>
            <p className="text-sage-700/80 leading-relaxed mb-6">
              In een veilige, warme omgeving gaan we samen op zoek naar wat voor
              jou werkt. Ik werk vanuit een integratieve benadering, wat
              betekent dat ik verschillende therapeutische methoden combineer op
              maat van jouw noden.
            </p>
            <Link
              href="/over-mij"
              className="text-sage-600 font-semibold text-sm hover:text-sage-700 transition-colors"
            >
              Meer over mij &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Waarvoor */}
      <section className="bg-sage-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-[var(--font-serif)] text-3xl text-sage-800 mb-10 text-center">
            Waarvoor kun je bij mij terecht?
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Angst & paniek",
              "Depressie",
              "Burn-out & stress",
              "Perfectionisme",
              "Trauma",
              "Rouw & verlies",
              "Relatieconflicten",
              "Hoogsensitiviteit",
              "Postpartum depressie",
            ].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl p-5 text-sage-700 text-sm shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/aanbod"
              className="text-sage-600 font-semibold text-sm hover:text-sage-700 transition-colors"
            >
              Volledig overzicht &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[var(--font-serif)] text-3xl text-sage-800 mb-4">
            Klaar voor een eerste stap?
          </h2>
          <p className="text-sage-700/80 mb-8">
            Neem gerust contact op voor een kennismakingsgesprek. Samen bekijken
            we of ik de juiste persoon ben om jou te begeleiden.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-sage-600 text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-sage-700 transition-colors"
          >
            Neem contact op
          </Link>
        </div>
      </section>
    </>
  );
}
