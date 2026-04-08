export default function Onderhoud() {
  return (
    <div className="min-h-screen bg-sage-50 flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl text-sage-800 mb-4">
          Binnenkort online
        </h1>
        <p className="text-stone-600 mb-6">
          De website is tijdelijk offline. Kom binnenkort terug.
        </p>
        <p className="text-stone-500 text-sm">
          Vragen? Stuur een e-mail naar{" "}
          <a
            href="mailto:romy@praktijkkadans.be"
            className="text-sage-600 hover:text-sage-700 underline"
          >
            romy@praktijkkadans.be
          </a>
        </p>
      </div>
    </div>
  );
}
