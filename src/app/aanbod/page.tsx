import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aanbod | Romy Tielens",
  description:
    "Begeleiding bij angst, depressie, burn-out, trauma, perfectionisme en meer. Integratieve psychotherapie in Hasselt.",
};

const topics = [
  {
    title: "Angst & paniek",
    description:
      "Overmatige zorgen, paniekaanvallen, fobieën of een algemeen gevoel van angst dat je dagelijks leven beïnvloedt.",
  },
  {
    title: "Depressie & somberheid",
    description:
      "Aanhoudende somberheid, verlies van interesse of motivatie, vermoeidheid en gevoelens van hopeloosheid.",
  },
  {
    title: "Burn-out & stress",
    description:
      "Uitputting door werk of privé, het gevoel niet meer te kunnen, piekeren en lichamelijke stressklachten.",
  },
  {
    title: "Perfectionisme",
    description:
      "Onrealistische verwachtingen naar jezelf, faalangst, moeite met fouten maken en nooit tevreden zijn.",
  },
  {
    title: "Trauma",
    description:
      "Verwerking van ingrijpende ervaringen, nachtmerries, herbelevingen of vermijdingsgedrag.",
  },
  {
    title: "Rouw & verlies",
    description:
      "Omgaan met het verlies van een dierbare, een relatie, werk of gezondheid.",
  },
  {
    title: "Relatieconflicten",
    description:
      "Terugkerende patronen in relaties, communicatieproblemen of moeilijkheden in de band met anderen.",
  },
  {
    title: "Hoogsensitiviteit",
    description:
      "Leren omgaan met prikkels, grenzen stellen en je kwaliteiten als hoogsensitief persoon benutten.",
  },
  {
    title: "Vruchtbaarheid & kinderwens",
    description:
      "De emotionele impact van fertiliteitstrajecten, miskramen of een onvervulde kinderwens.",
  },
  {
    title: "Postpartum depressie",
    description:
      "Sombere gevoelens, angst of overweldiging na de geboorte van een kind.",
  },
  {
    title: "Zelfverwonding",
    description:
      "Begeleiding bij zelfbeschadigend gedrag en het ontwikkelen van gezondere copingstrategieën.",
  },
  {
    title: "Middelengebruik",
    description:
      "Problematisch gebruik van alcohol, drugs of andere middelen en de onderliggende oorzaken ervan.",
  },
];

export default function Aanbod() {
  return (
    <>
      <section className="bg-sage-50 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-[var(--font-serif)] text-4xl text-sage-800 mb-4">
            Aanbod
          </h1>
          <p className="text-sage-700/70 text-lg">
            Ik begeleid volwassenen bij uiteenlopende psychische klachten.
            Hieronder vind je een overzicht van de thema&apos;s waarvoor je bij
            mij terecht kunt.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-6">
            {topics.map(({ title, description }) => (
              <div
                key={title}
                className="bg-white border border-sage-100 rounded-xl p-6 shadow-sm"
              >
                <h3 className="font-semibold text-sage-800 mb-2">{title}</h3>
                <p className="text-sm text-sage-700/70 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-warm-50 border border-warm-200 rounded-xl p-8 text-center">
            <p className="text-sage-700/80 mb-4">
              Vind je je klacht niet in dit overzicht? Neem gerust contact op —
              samen bekijken we of ik je kan helpen.
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
