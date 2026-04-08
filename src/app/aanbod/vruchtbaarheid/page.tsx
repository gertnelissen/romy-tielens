import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psycholoog vruchtbaarheid en kinderwens Hasselt | Romy Tielens",
  description:
    "Emotioneel zwaar vruchtbaarheidstraject? Klinisch psycholoog Romy Tielens in Hasselt biedt professionele begeleiding bij kinderwens, IVF en miskraam.",
};

export default function Vruchtbaarheid() {
  return (
    <>
      <section className="bg-sage-50 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sage-600 text-sm font-medium mb-2">
            <Link href="/aanbod" className="hover:text-sage-700">
              Aanbod
            </Link>{" "}
            / Vruchtbaarheid &amp; kinderwens
          </p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-sage-800 mb-4">
            Vruchtbaarheid &amp; kinderwens
          </h1>
          <p className="text-stone-600 text-lg">
            Emotionele steun bij een ingrijpend traject.
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
                "Vruchtbaarheidsbehandelingen vreten aan je emotioneel en lichamelijk",
                "Je draagt het verdriet van een miskraam met je mee en vindt er weinig erkenning voor",
                "Je relatie staat onder druk door het kinderwenstraject",
                "Je voelt je ge\u00EFsoleerd — alsof niemand begrijpt wat je doormaakt",
                "Je staat voor moeilijke keuzes en weet niet wat de juiste beslissing is",
                "Je hebt het gevoel de controle over je lichaam en je leven kwijt te zijn",
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
                Een kinderwenstraject is een van de meest ingrijpende ervaringen
                die je kunt meemaken. De hoop, de teleurstelling, het wachten —
                het raakt aan alles. Toch wordt de emotionele kant vaak
                onderschat, ook door je omgeving. In therapie krijg je de ruimte
                die je verdient.
              </p>
              <p>
                Met Emotion-Focused Therapy (EFT) verwerk je het verdriet en
                verlies dat bij dit traject hoort — of het nu gaat om een
                miskraam, een mislukte behandeling of het loslaten van een droom.
                Cli&euml;ntgerichte therapie zorgt ervoor dat je je gehoord en
                begrepen voelt, zonder oordeel.
              </p>
              <p>
                Daarnaast bied ik psycho-educatie over de emotionele impact van
                vruchtbaarheidsbehandelingen, zodat je beter begrijpt waarom dit
                traject zo zwaar kan zijn en hoe je er als koppel doorheen kunt
                navigeren.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
              Wat kun je verwachten?
            </h2>
            <div className="text-stone-700 leading-relaxed space-y-3">
              <p>
                In een eerste gesprek luister ik naar jouw verhaal en waar je nu
                staat in het traject. Er is geen standaardaanpak — we vertrekken
                vanuit wat jij op dit moment nodig hebt.
              </p>
              <p>
                Begeleiding bij vruchtbaarheid kan kort of langer duren,
                afhankelijk van je situatie. Soms heb je een paar gesprekken
                nodig om te verwerken, soms is er meer tijd nodig om de
                emotionele impact een plek te geven.
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
