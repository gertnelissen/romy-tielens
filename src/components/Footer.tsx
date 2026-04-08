export function Footer() {
  return (
    <footer className="bg-sage-800 text-sage-200 mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold text-white mb-3">Contact</h3>
          <ul className="text-sm space-y-1.5">
            <li>
              <a
                href="mailto:romy@praktijkkadans.be"
                className="hover:text-white transition-colors"
              >
                romy@praktijkkadans.be
              </a>
            </li>
            <li>
              <a
                href="tel:+32497605892"
                className="hover:text-white transition-colors"
              >
                0497 / 60 58 92
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-3">Locatie</h3>
          <p className="text-sm leading-relaxed">
            Zorgpraktijk Kadans
            <br />
            Kempische Steenweg 565
            <br />
            3500 Hasselt
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-3">Openingsuren</h3>
          <ul className="text-sm space-y-1">
            <li>Ma: 13:00 - 17:00</li>
            <li>Wo: 09:00 - 20:00</li>
            <li>Do: 08:00 - 17:00</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-3">Erkenningen</h3>
          <p className="text-sm leading-relaxed">
            Visumnummer: 261431
            <br />
            Psychologencommissie: 942123340
          </p>
        </div>
      </div>
      <div className="border-t border-sage-700 py-4 text-center text-xs text-sage-400">
        &copy; {new Date().getFullYear()} Romy Tielens
      </div>
    </footer>
  );
}
