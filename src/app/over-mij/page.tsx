import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over mij | Romy Tielens",
  description:
    "Klinisch psycholoog en integratief psychotherapeut met ruime ervaring in psychiatrie, dagtherapie en zelfstandige praktijk.",
  openGraph: {
    title: "Over mij | Romy Tielens",
    description:
      "Klinisch psycholoog en integratief psychotherapeut in Hasselt. Meer dan 7 jaar ervaring in psychiatrie en eerstelijn.",
  },
};

export default function OverMij() {
  return (
    <>
      <section className="bg-sage-50 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-sage-800 mb-4">
            Over mij
          </h1>
          <p className="text-stone-700 text-lg">
            Klinisch psycholoog &amp; integratief psychotherapeut
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6 space-y-10">
          {/* Intro met foto */}
          <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
            <div className="rounded-2xl aspect-square overflow-hidden relative">
              <Image
                src="/romy-bw.jpeg"
                alt="Portret van Romy Tielens, psycholoog in Hasselt"
                fill
                className="object-cover"
                sizes="280px"
              />
            </div>
            <div className="space-y-4 text-stone-700 leading-relaxed">
              <p>
                Ik ben Romy, klinisch psycholoog en integratief
                psychotherapeut. Met meer dan 7 jaar ervaring in de psychiatrie
                en de eerstelijn help ik volwassenen die vastlopen in
                emotionele of psychologische moeilijkheden.
              </p>
              <p>
                Na mijn master Klinische Psychologie aan de KU Leuven werkte ik
                op de spoedpsychiatrie en dagtherapie van het Jessa Ziekenhuis
                in Hasselt, waar ik nog steeds actief ben. Daarnaast bouwde ik
                jarenlang een zelfstandige praktijk uit. Sinds 2025 werk ik
                vanuit Zorgpraktijk Kadans.
              </p>
            </div>
          </div>

          {/* Werkwijze */}
          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Werkwijze
            </h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              Ik werk vanuit een integratieve benadering. Dat betekent dat ik
              niet vastzit aan één stroming, maar verschillende methoden
              combineer op maat van wat bij jou past. De rode draad? Een warme,
              respectvolle relatie als basis voor verandering.
            </p>
            <p className="text-stone-700 leading-relaxed">
              In een eerste intakegesprek luister ik naar jouw verhaal.
              Samen bekijken we of er een goede match is en stippelen we een
              traject uit dat bij jou past.
            </p>
          </div>

          {/* Methoden */}
          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Therapeutische methoden
            </h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              Tijdens mijn postgraduaat Integratieve Psychotherapie aan de
              Universiteit Antwerpen verdiepte ik me in verschillende
              stromingen die ik vandaag combineer:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Schematherapie",
                "Cognitieve gedragstherapie (CGT)",
                "Emotion-Focused Therapy (EFT)",
                "Cliëntgerichte therapie",
                "Psycho-educatie",
                "Assertiviteitstraining",
              ].map((method) => (
                <li
                  key={method}
                  className="bg-sage-50 rounded-lg px-4 py-3 text-base text-sage-700"
                >
                  {method}
                </li>
              ))}
            </ul>
          </div>

          {/* kPNI */}
          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Lichaam &amp; geest als geheel
            </h2>
            <div className="bg-sage-50 border border-sage-200 rounded-xl p-6">
              <p className="text-stone-700 leading-relaxed mb-3">
                Naast psychotherapie behaalde ik het postgraduaat{" "}
                <strong className="text-sage-800">
                  Integrale Orthomoleculaire Gezondheidszorg (kPNI)
                </strong>{" "}
                aan Hogeschool PXL. Deze opleiding verdiepte de wisselwerking
                tussen voeding, leefstijl en psychisch welzijn.
              </p>
              <p className="text-stone-700 leading-relaxed">
                Zo kan ik lichaam en geest nog meer als een geheel benaderen en
                je waar nodig begeleiden met evidence-based advies rond
                voeding, suppletie en leefstijl — als aanvulling op
                psychotherapie.
              </p>
            </div>
          </div>

          {/* Erkenning — compact */}
          <div className="border-t border-stone-200 pt-8">
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Erkenningen
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 text-base text-stone-600">
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-sage-800">Visumnummer</p>
                  <p>261431</p>
                </div>
                <div>
                  <p className="font-medium text-sage-800">
                    Psychologencommissie
                  </p>
                  <p>942123340</p>
                </div>
              </div>
              <div>
                <p className="font-medium text-sage-800 mb-2">Opleiding</p>
                <ul className="space-y-1.5">
                  <li>Master Klinische Psychologie — KU Leuven (2018)</li>
                  <li>
                    Postgraduaat Integratieve Psychotherapie — UAntwerpen
                    (2024)
                  </li>
                  <li>
                    Postgraduaat Orthomoleculaire Gezondheidszorg (kPNI) —
                    Hogeschool PXL
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
            Klaar voor een eerste stap?
          </h2>
          <p className="text-stone-700 mb-6">
            Neem contact op om een intakegesprek in te plannen.
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
