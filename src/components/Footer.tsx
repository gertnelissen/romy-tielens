export function Footer() {
  return (
    <footer className="bg-sage-800 text-sage-200 mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold text-white mb-3">Contact</h3>
          <p className="text-sm leading-relaxed">
            Kempische Steenweg 565
            <br />
            3500 Hasselt
            <br />
            Zorgpraktijk Kadans
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-3">Openingsuren</h3>
          <ul className="text-sm space-y-1">
            <li>Maandag: 13:00 - 17:00</li>
            <li>Woensdag: 09:00 - 20:00</li>
            <li>Donderdag: 08:00 - 17:00</li>
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
