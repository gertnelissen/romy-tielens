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
      "Piekeren, vermijden, paniekaanvallen — angst kan heel veel vormen aannemen.",
    href: "/aanbod/angst",
  },
  {
    title: "Depressie & somberheid",
    description:
      "Alles kost moeite. De motivatie is weg. En 'trek je er niets van aan' helpt niet.",
    href: "/aanbod/depressie",
  },
  {
    title: "Burn-out & stress",
    description:
      "Op. Helemaal op. En toch blijf je doorgaan.",
    href: "/aanbod/burn-out",
  },
  {
    title: "Perfectionisme",
    description:
      "Nooit goed genoeg? Altijd bang om fouten te maken?",
    href: "/aanbod/perfectionisme",
  },
  {
    title: "Trauma",
    description:
      "Ingrijpende ervaringen die je maar niet kunt loslaten.",
    href: "/aanbod/trauma",
  },
  {
    title: "Rouw & verlies",
    description:
      "Verlies verwerken gaat niet volgens een vast schema.",
    href: "/aanbod/rouw",
  },
  {
    title: "Relatieconflicten",
    description:
      "Steeds dezelfde ruzies? Patronen die je niet doorbroken krijgt?",
    href: "/aanbod/relatieconflicten",
  },
  {
    title: "Hoogsensitiviteit",
    description:
      "Snel overprikkeld, alles voelt intenser dan bij anderen.",
    href: "/aanbod/hoogsensitiviteit",
  },
  {
    title: "Vruchtbaarheid & kinderwens",
    description:
      "De emotionele achtbaan van een kinderwenstraject.",
    href: "/aanbod/vruchtbaarheid",
  },
  {
    title: "Postpartum depressie",
    description:
      "Je 'hoort' gelukkig te zijn. En dat maakt het extra zwaar.",
    href: "/aanbod/postpartum",
  },
  {
    title: "Zelfverwonding",
    description:
      "Op zoek naar andere manieren om met pijn om te gaan.",
    href: "/aanbod/zelfverwonding",
  },
  {
    title: "Middelengebruik",
    description:
      "Het middel is zelden het echte probleem.",
    href: "/aanbod/middelengebruik",
  },
];

export default function Aanbod() {
  return (
    <>
      <section className="bg-sage-50 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-sage-800 mb-4">
            Aanbod
          </h1>
          <p className="text-stone-700 text-lg">
            Ik begeleid volwassenen bij uiteenlopende psychische klachten.
            Hieronder vind je een overzicht van de thema&apos;s waarvoor je bij
            mij terecht kunt.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-6">
            {topics.map(({ title, description, href }) => {
              const content = (
                <>
                  <h2 className="font-semibold text-sage-800 mb-2">
                    {title}
                    {href && (
                      <span className="text-sage-400 ml-1">&rarr;</span>
                    )}
                  </h2>
                  <p className="text-base text-stone-600 leading-relaxed">
                    {description}
                  </p>
                </>
              );
              return href ? (
                <Link
                  key={title}
                  href={href}
                  className="bg-white border border-stone-200 rounded-xl p-6 shadow-sm hover:border-sage-300 hover:shadow-md transition-all"
                >
                  {content}
                </Link>
              ) : (
                <div
                  key={title}
                  className="bg-white border border-stone-200 rounded-xl p-6 shadow-sm"
                >
                  {content}
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-sage-50 border border-sage-200 rounded-xl p-8 text-center">
            <p className="text-stone-700 mb-4">
              Vind je je klacht niet in dit overzicht? Neem contact op —
              we bekijken samen of ik je kan helpen.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent-600 text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-accent-700 transition-colors"
            >
              Plan een intakegesprek
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
