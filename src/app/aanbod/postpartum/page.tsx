import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psycholoog postpartum depressie Hasselt | Romy Tielens",
  description:
    "Last van postpartum depressie of moeilijkheden na de bevalling? Klinisch psycholoog Romy Tielens in Hasselt helpt je met professionele begeleiding.",
};

export default function Postpartum() {
  return (
    <>
      <section className="bg-sage-50 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sage-600 text-sm font-medium mb-2">
            <Link href="/aanbod" className="hover:text-sage-700">
              Aanbod
            </Link>{" "}
            / Postpartum depressie
          </p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-sage-800 mb-4">
            Postpartum depressie
          </h1>
          <p className="text-stone-600 text-lg">
            Het mag ook moeilijk zijn.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Herken je dit?
            </h2>
            <ul className="space-y-3">
              {[
                "Je voelt je aanhoudend somber of leeg sinds de geboorte van je kind",
                "De band met je baby voelt niet zoals je had verwacht — en dat maakt je bang",
                "Je bent voortdurend angstig over de gezondheid of veiligheid van je baby",
                "Je voelt je schuldig omdat je niet gelukkig bent terwijl je dat \u201Czo zou moeten zijn\u201D",
                "Je bent uitgeput op een manier die verder gaat dan gewone vermoeidheid",
                "Alles voelt overweldigend — zelfs de kleinste taken kosten enorm veel energie",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-stone-700">
                  <svg
                    className="w-5 h-5 text-sage-400 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
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
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Hoe ik je kan helpen
            </h2>
            <div className="text-stone-700 leading-relaxed space-y-3">
              <p>
                Postpartum depressie treft meer ouders dan je denkt, maar het
                taboe is groot. Je &quot;hoort&quot; gelukkig te zijn met een
                nieuwe baby — en als dat niet zo is, voelt dat als falen. In
                therapie maak ik ruimte voor die tegenstrijdige gevoelens,
                zonder oordeel.
              </p>
              <p>
                Met cognitieve gedragstherapie (CGT) werken we aan
                schuldgevoelens en onrealistische verwachtingen over ouderschap.
                Emotion-Focused Therapy (EFT) helpt je om de onderliggende
                emoties — verdriet, angst, boosheid — te erkennen en te
                verwerken. Psycho-educatie over de postpartumperiode helpt je
                begrijpen wat er hormonaal en emotioneel in je lichaam gebeurt.
              </p>
              <p>
                Vanuit mijn kennis van orthomoleculaire gezondheidszorg (kPNI)
                kan ik ook kijken naar de wisselwerking tussen je fysieke
                herstel en je mentale welzijn. Voeding, slaap en hormonen spelen
                allemaal een rol.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Wat kun je verwachten?
            </h2>
            <div className="text-stone-700 leading-relaxed space-y-3">
              <p>
                In een eerste gesprek luister ik naar hoe het met je gaat — echt.
                We brengen samen in kaart wat je ervaart en wat je nodig hebt.
                Je baby is welkom tijdens de sessies als dat praktisch nodig is.
              </p>
              <p>
                De duur van het traject hangt af van je situatie. Sommige ouders
                hebben baat bij een kortdurend traject, anderen hebben meer tijd
                nodig. We stemmen de aanpak en frequentie samen af.
              </p>
            </div>
          </div>

          <div className="bg-sage-50 border border-sage-200 rounded-xl p-6 text-sm text-stone-700 leading-relaxed">
            <p className="font-semibold text-sage-800 mb-2">Praktisch</p>
            <p>
              Sessies duren 50-60 minuten. Tarief: &euro;75 (individueel) of &euro;85
              (eerstelijnspsychologie met doorverwijzing huisarts).
              Gedeeltelijke terugbetaling via je mutualiteit is mogelijk.
            </p>
          </div>

          <div className="text-center pt-4">
            <Link
              href="/contact"
              className="inline-block bg-sage-600 text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-sage-700 transition-colors"
            >
              Neem contact op
            </Link>
            <p className="text-xs text-stone-500 mt-3">
              Huidige wachttijd: ~1 maand
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
