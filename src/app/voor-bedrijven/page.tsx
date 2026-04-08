import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Voor bedrijven | Romy Tielens",
  description:
    "Psychologische ondersteuning en welzijnsprogramma's voor bedrijven. Workshops, trainingen en individuele begeleiding.",
};

const services = [
  {
    title: "Workshops & trainingen",
    description:
      "Interactieve sessies op maat rond thema's als stressmanagement, burn-outpreventie, veerkracht, assertiviteit en werkgeluk. Geschikt voor teams van elke omvang.",
    icon: (
      <svg className="w-8 h-8 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Individuele begeleiding",
    description:
      "Vertrouwelijke psychologische ondersteuning voor medewerkers die vastlopen. Laagdrempelig en professioneel, met korte wachttijden.",
    icon: (
      <svg className="w-8 h-8 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Welzijnsbeleid & advies",
    description:
      "Ondersteuning bij het opzetten of versterken van een psychosociaal welzijnsbeleid. Advies op maat van jouw organisatie.",
    icon: (
      <svg className="w-8 h-8 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Voeding, leefstijl & vitaliteit",
    description:
      "Vanuit mijn opleiding in orthomoleculaire gezondheidszorg (kPNI) bied ik workshops en advies over de impact van voeding en leefstijl op mentale en fysieke vitaliteit op de werkvloer.",
    icon: (
      <svg className="w-8 h-8 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const topics = [
  "Burn-outpreventie",
  "Stressmanagement",
  "Veerkracht & mentale fitheid",
  "Assertieve communicatie",
  "Work-life balance",
  "Omgaan met verandering",
  "Slaap & herstel",
  "Voeding & energie op de werkvloer",
];

export default function VoorBedrijven() {
  return (
    <>
      <section className="bg-sage-50 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-sage-800 mb-4">
            Voor bedrijven
          </h1>
          <p className="text-stone-600 text-lg">
            Investeer in het welzijn van je medewerkers. Een gezonde werkomgeving
            begint bij mentale en fysieke veerkracht.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map(({ title, description, icon }) => (
              <div
                key={title}
                className="bg-white border border-stone-200 rounded-xl p-8 shadow-sm"
              >
                <div className="mb-4">{icon}</div>
                <h3 className="font-semibold text-sage-800 text-lg mb-3">
                  {title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thema's */}
      <section className="bg-sage-50 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-8 text-center">
            Mogelijke thema&apos;s
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {topics.map((topic) => (
              <div
                key={topic}
                className="bg-white rounded-lg px-4 py-3 text-sm text-stone-700 text-center shadow-sm"
              >
                {topic}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-6 text-center">
            Waarom investeren in welzijn?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              {
                stat: "Minder verzuim",
                text: "Preventie en vroegtijdige ondersteuning verlagen ziekteverzuim aanzienlijk.",
              },
              {
                stat: "Meer betrokkenheid",
                text: "Medewerkers die zich gehoord voelen, zijn meer gemotiveerd en loyaal.",
              },
              {
                stat: "Betere prestaties",
                text: "Mentaal welzijn en fysieke vitaliteit zijn de basis voor duurzame productiviteit.",
              },
            ].map(({ stat, text }) => (
              <div key={stat}>
                <p className="font-semibold text-sage-800 mb-2">{stat}</p>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-sage-50 border border-sage-200 rounded-xl p-10 text-center">
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Op maat van jouw organisatie
            </h2>
            <p className="text-stone-700 mb-6">
              Elk bedrijf is uniek. Ik denk graag mee over een aanbod dat past
              bij de noden en cultuur van jouw organisatie. Neem vrijblijvend
              contact op voor een gesprek.
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
