import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAanbodPage, getAanbodSlugs } from "@/lib/content";

const relatedTopics: Record<string, string[]> = {
  "burn-out": ["depressie", "perfectionisme"],
  angst: ["perfectionisme", "hoogsensitiviteit"],
  depressie: ["burn-out", "rouw"],
  trauma: ["angst", "zelfverwonding"],
  perfectionisme: ["burn-out", "angst"],
  rouw: ["depressie", "trauma"],
  relatieconflicten: ["hoogsensitiviteit", "perfectionisme"],
  hoogsensitiviteit: ["angst", "burn-out"],
  vruchtbaarheid: ["rouw", "postpartum"],
  postpartum: ["depressie", "vruchtbaarheid"],
  zelfverwonding: ["trauma", "depressie"],
  middelengebruik: ["trauma", "depressie"],
};

export async function generateStaticParams() {
  return getAanbodSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getAanbodPage(slug);
  if (!page) return {};
  return {
    title: page.seoTitle,
    description: page.seoDescription,
  };
}

export default async function AanbodDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getAanbodPage(slug);
  if (!page) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://romytielens.be",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Aanbod",
        item: "https://romytielens.be/aanbod",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.title,
        item: `https://romytielens.be/aanbod/${slug}`,
      },
    ],
  };

  const related = (relatedTopics[slug] ?? [])
    .map((s) => {
      const p = getAanbodPage(s);
      return p ? { slug: s, title: p.title } : null;
    })
    .filter(Boolean) as { slug: string; title: string }[];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="bg-sage-50 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <nav aria-label="Breadcrumb">
            <p className="text-sage-600 text-sm font-medium mb-2">
              <Link href="/aanbod" className="hover:text-sage-700">
                Aanbod
              </Link>{" "}
              / {page.title}
            </p>
          </nav>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-sage-800 mb-4">
            {page.title}
          </h1>
          <p className="text-stone-700 text-lg">{page.subtitle}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          {slug === "zelfverwonding" && (
            <div className="bg-stone-100 border-l-4 border-sage-600 p-4 rounded-r-lg">
              <p className="text-base text-sage-800 font-semibold mb-1">
                In nood?
              </p>
              <p className="text-base text-stone-700">
                Bel de Zelfmoordlijn:{" "}
                <a
                  href="tel:1813"
                  className="font-semibold text-sage-700 hover:text-sage-800"
                >
                  1813
                </a>{" "}
                (gratis, 24/7). Je kunt ook chatten via{" "}
                <a
                  href="https://www.zelfmoord1813.be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage-600 hover:text-sage-700 underline"
                >
                  zelfmoord1813.be
                </a>
                .
              </p>
            </div>
          )}

          {page.herkenning.length > 0 && (
            <div>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
                Herken je dit?
              </h2>
              <ul className="space-y-3">
                {page.herkenning.map((item) => (
                  <li key={item} className="flex gap-3 text-stone-700">
                    <svg
                      className="w-5 h-5 text-sage-400 shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
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
          )}

          {page.hulp.length > 0 && (
            <div>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
                Hoe ik je kan helpen
              </h2>
              <div className="text-stone-700 leading-relaxed space-y-3">
                {page.hulp.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          )}

          {page.verwachting.length > 0 && (
            <div>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-sage-800 mb-4">
                Wat kun je verwachten?
              </h2>
              <div className="text-stone-700 leading-relaxed space-y-3">
                {page.verwachting.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          )}

          <div className="bg-sage-50 border border-sage-200 rounded-xl p-6 text-base text-stone-700 leading-relaxed">
            <p className="font-semibold text-sage-800 mb-2">Praktisch</p>
            <p>
              Sessies duren 50-60 minuten. Tarief: €75 (individueel) of €85
              (eerstelijnspsychologie met doorverwijzing huisarts).
              Gedeeltelijke terugbetaling via je mutualiteit is mogelijk.
            </p>
          </div>

          {related.length > 0 && (
            <div>
              <p className="text-base text-stone-600">
                Lees ook:{" "}
                {related.map((r, i) => (
                  <span key={r.slug}>
                    {i > 0 && ", "}
                    <Link
                      href={`/aanbod/${r.slug}`}
                      className="text-sage-600 hover:text-sage-700 underline"
                    >
                      {r.title}
                    </Link>
                  </span>
                ))}
              </p>
            </div>
          )}

          <div className="text-center pt-4">
            <Link
              href="/contact"
              className="inline-block bg-accent-600 text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-accent-700 transition-colors"
            >
              Neem contact op
            </Link>
            <p className="text-sm text-stone-600 mt-3">
              Huidige wachttijd: ~1 maand
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
