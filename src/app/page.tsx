import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero with photo */}
      <section className="bg-sage-50">
        <div className="max-w-5xl mx-auto px-6 py-14 md:py-16 grid md:grid-cols-[1fr_340px] gap-10 items-center">
          <div>
            <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl md:text-5xl text-sage-900 mb-5 leading-tight">
              Ruimte om te groeien
            </h1>
            <p className="text-base text-stone-700 max-w-lg mb-8 leading-relaxed">
              Klinisch psycholoog en integratief psychotherapeut met meer dan
              7 jaar ervaring in de psychiatrie. Ik begeleid volwassenen in
              Hasselt bij angst, burn-out, depressie en meer.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-block bg-accent-600 text-white px-7 py-3 rounded-lg text-sm font-semibold hover:bg-accent-700 transition-colors text-center"
              >
                Maak een afspraak
              </Link>
              <Link
                href="/aanbod"
                className="inline-block border border-sage-300 text-stone-700 px-7 py-3 rounded-lg text-sm font-semibold hover:bg-sage-100 transition-colors text-center"
              >
                Bekijk het aanbod
              </Link>
            </div>
          </div>
          <div className="rounded-2xl aspect-[3/4] max-h-[420px] overflow-hidden shadow-lg relative">
            <Image
              src="/romy.jpg"
              alt="Romy Tielens — klinisch psycholoog in Hasselt"
              fill
              priority
              className="object-cover object-top"
              sizes="340px"
            />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm text-stone-500 text-center">
          <span>7+ jaar klinische ervaring</span>
          <span className="hidden sm:inline" aria-hidden="true">&middot;</span>
          <span>Erkend klinisch psycholoog</span>
          <span className="hidden sm:inline" aria-hidden="true">&middot;</span>
          <span>Jessa Ziekenhuis &amp; Kadans</span>
          <span className="hidden sm:inline" aria-hidden="true">&middot;</span>
          <span>Terugbetaling mutualiteit</span>
        </div>
      </section>

      {/* Twijfel je? */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-6 text-center">
            Twijfel je nog?
          </h2>
          <ul className="space-y-4 mb-6">
            {[
              "Je hoeft niet precies te weten wat er aan de hand is — dat zoeken we samen uit.",
              "Geen klacht is te klein of te groot. Als het jou bezighoudt, is het de moeite waard.",
              "In een intakegesprek bekijken we of er een goede klik is.",
              "Alles wat je deelt is strikt vertrouwelijk (beroepsgeheim).",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-stone-700">
                <svg
                  className="w-5 h-5 text-sage-500 shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
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
          <div className="text-center">
            <Link
              href="/praktisch"
              className="text-sage-600 font-semibold text-sm hover:text-stone-700 transition-colors"
            >
              Meer over een eerste sessie &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Waarvoor */}
      <section className="bg-sage-50 py-14">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-8 text-center">
            Waarvoor kun je bij mij terecht?
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Angst & paniek", slug: "angst", icon: "M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { label: "Depressie", slug: "depressie", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
              { label: "Burn-out & stress", slug: "burn-out", icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" },
              { label: "Perfectionisme", slug: "perfectionisme", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
              { label: "Trauma", slug: "trauma", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
              { label: "Rouw & verlies", slug: "rouw", icon: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" },
              { label: "Relatieconflicten", slug: "relatieconflicten", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
              { label: "Hoogsensitiviteit", slug: "hoogsensitiviteit", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" },
              { label: "Postpartum depressie", slug: "postpartum", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
            ].map(({ label, slug, icon }) => (
              <Link
                key={label}
                href={`/aanbod/${slug}`}
                className="bg-white rounded-xl p-4 text-sage-800 text-base shadow-sm flex items-center gap-3 hover:border-sage-300 hover:shadow-md transition-all border border-transparent"
              >
                <svg className="w-5 h-5 text-sage-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
                </svg>
                {label}
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/aanbod"
              className="text-sage-600 font-semibold text-sm hover:text-stone-700 transition-colors"
            >
              Volledig overzicht &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-3">
            Klaar voor een eerste stap?
          </h2>
          <p className="text-stone-700 mb-6">
            Neem contact op voor een intakegesprek. Samen bekijken we
            of ik de juiste persoon ben om jou te begeleiden.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent-600 text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-accent-700 transition-colors"
          >
            Plan een intakegesprek
          </Link>
        </div>
      </section>
    </>
  );
}
