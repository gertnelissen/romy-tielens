import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Romy Tielens",
  description:
    "Neem contact op voor een afspraak of vraag. Psycholoog in Hasselt.",
};

export default function Contact() {
  return (
    <>
      <section className="bg-sage-50 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-sage-800 mb-4">
            Contact
          </h1>
          <p className="text-stone-600 text-lg">
            Wil je een afspraak maken of heb je een vraag? Neem gerust contact
            op.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <ContactForm />

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-semibold text-sage-800 mb-2">
                Rechtstreeks contacteren
              </h2>
              <ul className="text-sm text-stone-700 space-y-2">
                <li>
                  <a
                    href="mailto:romy@praktijkkadans.be"
                    className="text-stone-600 hover:text-stone-700 transition-colors"
                  >
                    romy@praktijkkadans.be
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+32497605892"
                    className="text-stone-600 hover:text-stone-700 transition-colors"
                  >
                    0497 / 60 58 92
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-sage-800 mb-2">Locatie</h2>
              <p className="text-stone-700 text-sm leading-relaxed">
                Zorgpraktijk Kadans
                <br />
                Kempische Steenweg 565
                <br />
                3500 Hasselt
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-sage-800 mb-2">
                Beschikbaarheid
              </h2>
              <ul className="text-sm text-stone-700 space-y-1">
                <li>Maandag: 13:00 - 17:00</li>
                <li>Woensdag: 09:00 - 20:00</li>
                <li>Donderdag: 08:00 - 17:00</li>
              </ul>
            </div>

            <div className="bg-sage-50 border border-sage-200 rounded-xl p-5">
              <p className="text-sm text-stone-700 leading-relaxed">
                <strong className="text-sage-800">
                  Eerste keer contact opnemen?
                </strong>{" "}
                Vermeld kort waarvoor je hulp zoekt, zodat ik al een eerste
                idee heb bij ons kennismakingsgesprek. Alle informatie wordt
                uiteraard vertrouwelijk behandeld.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1258.4!2d5.3520!3d50.9298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c121f6e4b8e8a1%3A0x1!2sZorgpraktijk+Kadans!5e0!3m2!1snl!2sbe!4v1700000000000"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Zorgpraktijk Kadans — Kempische Steenweg 565, Hasselt"
        />
      </section>
    </>
  );
}
