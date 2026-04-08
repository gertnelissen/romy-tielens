import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over mij | Romy Tielens",
  description:
    "Klinisch psycholoog en integratief psychotherapeut met ruime ervaring in psychiatrie, dagtherapie en zelfstandige praktijk.",
};

export default function OverMij() {
  return (
    <>
      <section className="bg-sage-50 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-sage-800 mb-4">
            Over mij
          </h1>
          <p className="text-sage-600 text-lg">
            Klinisch psycholoog &amp; integratief psychotherapeut
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6 space-y-10">
          <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
            <div className="rounded-2xl aspect-square overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/romy-bw.jpeg"
                alt="Romy Tielens"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4 text-sage-700 leading-relaxed">
              <p>
                Ik ben Romy Tielens, klinisch psycholoog en integratief
                psychotherapeut. Ik werk met volwassenen die vastlopen in
                emotionele of psychologische moeilijkheden.
              </p>
              <p>
                Met jarenlange ervaring in zowel de psychiatrie als de
                zelfstandige praktijk, help ik je om te ontdekken wat je nodig
                hebt om je weer beter te voelen en het leven ten volle te
                omarmen. In therapie creëer ik een veilige, warme ruimte waar
                je op jouw tempo kunt werken aan wat voor jou belangrijk is.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Werkwijze
            </h2>
            <p className="text-sage-700 leading-relaxed mb-4">
              Ik werk vanuit een integratieve benadering. Dit betekent dat ik
              verschillende therapeutische stromingen combineer, afgestemd op
              wat bij jou past. De rode draad is steeds een warme, respectvolle
              relatie als basis voor verandering.
            </p>
            <p className="text-sage-700 leading-relaxed">
              In een eerste kennismakingsgesprek luister ik naar jouw verhaal en
              bekijken we samen of er een goede match is. Daarna stippelen we
              samen een traject uit.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Therapeutische methoden
            </h2>
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
                  className="bg-sage-50 rounded-lg px-4 py-3 text-sm text-sage-700"
                >
                  {method}
                </li>
              ))}
            </ul>
          </div>

          {/* KPNI */}
          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Orthomoleculaire gezondheidszorg (kPNI)
            </h2>
            <div className="bg-warm-50 border border-warm-200 rounded-xl p-6">
              <p className="text-sage-700 leading-relaxed mb-3">
                Naast psychotherapie volg ik momenteel de postgraduaat{" "}
                <strong className="text-sage-800">
                  Integrale Orthomoleculaire Gezondheidszorg volgens de kPNI
                </strong>{" "}
                aan Hogeschool PXL. Deze opleiding richt zich op de
                wisselwerking tussen voeding, leefstijl en psychisch welzijn.
              </p>
              <p className="text-sage-700 leading-relaxed">
                Met deze extra expertise kan ik lichaam en geest nog meer als
                een geheel benaderen en je begeleiden met evidence-based advies
                rond voeding, suppletie en leefstijl als aanvulling op
                psychotherapie.
              </p>
            </div>
          </div>

          {/* Ervaring */}
          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Ervaring
            </h2>
            <div className="space-y-4">
              {[
                {
                  role: "Klinisch psycholoog / Psychotherapeut",
                  place: "Zorgpraktijk Kadans, Hasselt",
                  period: "2025 - heden",
                },
                {
                  role: "Klinisch psycholoog — PAAZ & dagtherapie",
                  place: "Jessa Ziekenhuis, Hasselt",
                  period: "2019 - heden",
                },
                {
                  role: "Oncopsycholoog",
                  place: "Jessa Ziekenhuis, Hasselt",
                  period: "2021",
                },
                {
                  role: "Zelfstandig klinisch psycholoog",
                  place: "Groepspraktijk Manshoven, Borgloon",
                  period: "2019 - 2024",
                },
                {
                  role: "Eerstelijns klinisch psycholoog",
                  place: "Huisartsenpraktijk PArel, Borgloon",
                  period: "2019 - 2021",
                },
              ].map(({ role, place, period }) => (
                <div
                  key={role + place}
                  className="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-sage-100 pb-3"
                >
                  <div>
                    <p className="font-medium text-sage-800">{role}</p>
                    <p className="text-sm text-sage-600">{place}</p>
                  </div>
                  <p className="text-sm text-sage-500 sm:text-right shrink-0">
                    {period}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Opleiding */}
          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Opleiding
            </h2>
            <div className="space-y-4">
              {[
                {
                  degree: "Integrale Orthomoleculaire Gezondheidszorg (kPNI)",
                  school: "Hogeschool PXL",
                  period: "Lopend",
                },
                {
                  degree: "Postgraduaat Integratieve Psychotherapie",
                  school: "Universiteit Antwerpen",
                  period: "2020 - 2024",
                },
                {
                  degree: "Master Klinische Psychologie",
                  school: "KU Leuven",
                  period: "2012 - 2018",
                },
              ].map(({ degree, school, period }) => (
                <div
                  key={degree}
                  className="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-sage-100 pb-3"
                >
                  <div>
                    <p className="font-medium text-sage-800">{degree}</p>
                    <p className="text-sm text-sage-600">{school}</p>
                  </div>
                  <p className="text-sm text-sage-500 sm:text-right shrink-0">
                    {period}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Erkenning */}
          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Erkenningen
            </h2>
            <ul className="space-y-2 text-sage-700 text-sm">
              <li>Klinisch psycholoog — visumnummer 261431</li>
              <li>Erkend door de Psychologencommissie — 942123340</li>
              <li>Integratief psychotherapeut</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
