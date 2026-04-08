import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Romy Tielens",
  description:
    "Neem contact op voor een afspraak of vraag. Psycholoog in Hasselt.",
};

export default function Contact() {
  return (
    <>
      <section className="bg-sage-50 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-[var(--font-serif)] text-4xl text-sage-800 mb-4">
            Contact
          </h1>
          <p className="text-sage-700/70 text-lg">
            Wil je een afspraak maken of heb je een vraag? Neem gerust contact
            op.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Form */}
          <form className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-sage-700 mb-1"
              >
                Naam
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-sage-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-sage-400"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-sage-700 mb-1"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-sage-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-sage-400"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-sage-700 mb-1"
              >
                Telefoon{" "}
                <span className="text-sage-400 font-normal">(optioneel)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full border border-sage-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-sage-400"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-sage-700 mb-1"
              >
                Bericht
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full border border-sage-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-sage-400 resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-sage-600 text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-sage-700 transition-colors w-full"
            >
              Verstuur bericht
            </button>
            <p className="text-xs text-sage-400">
              Ik antwoord meestal binnen 2 werkdagen.
            </p>
          </form>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-semibold text-sage-800 mb-2">
                Rechtstreeks contacteren
              </h2>
              <ul className="text-sm text-sage-700/80 space-y-2">
                <li>
                  <a
                    href="mailto:romy@praktijkkadans.be"
                    className="text-sage-600 hover:text-sage-700 transition-colors"
                  >
                    romy@praktijkkadans.be
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+32497605892"
                    className="text-sage-600 hover:text-sage-700 transition-colors"
                  >
                    0497 / 60 58 92
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-sage-800 mb-2">Locatie</h2>
              <p className="text-sage-700/80 text-sm leading-relaxed">
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
              <ul className="text-sm text-sage-700/80 space-y-1">
                <li>Maandag: 13:00 - 17:00</li>
                <li>Woensdag: 09:00 - 20:00</li>
                <li>Donderdag: 08:00 - 17:00</li>
              </ul>
            </div>

            <div className="bg-warm-50 border border-warm-200 rounded-xl p-5">
              <p className="text-sm text-sage-700/80 leading-relaxed">
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
    </>
  );
}
