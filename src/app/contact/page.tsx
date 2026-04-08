import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import { GoogleMap } from "@/components/GoogleMap";

const ContactForm = dynamic(
  () => import("@/components/ContactForm").then((m) => ({ default: m.ContactForm })),
  { loading: () => <div className="h-96 animate-pulse bg-sage-50 rounded-xl" /> }
);

export const metadata: Metadata = {
  title: "Contact | Romy Tielens",
  description:
    "Neem contact op voor een afspraak of vraag. Psycholoog in Hasselt.",
  openGraph: {
    title: "Contact | Romy Tielens",
    description:
      "Neem contact op voor een afspraak bij psycholoog Romy Tielens in Hasselt.",
  },
};

export default function Contact() {
  return (
    <>
      <section className="bg-sage-50 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-sage-800 mb-4">
            Contact
          </h1>
          <p className="text-stone-700 text-lg">
            Wil je een afspraak maken of heb je een vraag? Neem contact op.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <ContactForm />

          <div className="space-y-8">
            <div>
              <h2 className="font-semibold text-sage-800 mb-2">
                Rechtstreeks contacteren
              </h2>
              <ul className="text-base text-stone-700 space-y-2">
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
              <h2 className="font-semibold text-sage-800 mb-2">
                Locaties &amp; beschikbaarheid
              </h2>
              <p className="text-base text-stone-700 mb-2">
                Sessies vinden plaats in Zorgpraktijk Kadans, Jessa Ziekenhuis,
                thuispraktijk of online.
              </p>
              <Link
                href="/praktisch"
                className="text-sage-600 hover:text-sage-700 text-base font-medium transition-colors"
              >
                Alle locaties &amp; openingsuren &rarr;
              </Link>
            </div>

            <div className="bg-sage-50 border border-sage-200 rounded-xl p-5">
              <p className="text-base text-stone-700 leading-relaxed">
                <strong className="text-sage-800">
                  Eerste keer contact opnemen?
                </strong>{" "}
                Vermeld kort waarvoor je hulp zoekt, zodat ik al een eerste
                idee heb bij ons intakegesprek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map — click-to-load for GDPR compliance */}
      <section className="pb-0">
        <GoogleMap />
      </section>
    </>
  );
}
