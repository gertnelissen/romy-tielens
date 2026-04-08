import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-20">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-sage-800 mb-4">
          Pagina niet gevonden
        </h1>
        <p className="text-stone-700 mb-8">
          De pagina die je zoekt bestaat niet of is verplaatst.
        </p>
        <Link
          href="/"
          className="inline-block bg-accent-600 text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-accent-700 transition-colors"
        >
          Terug naar de homepagina
        </Link>
      </div>
    </section>
  );
}
