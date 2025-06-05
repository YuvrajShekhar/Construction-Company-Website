import React from "react";

const CopyrightPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Impressum
            </h1>
            <div className="w-20 h-1 bg-yellow-600 mx-auto"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* TMG Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-yellow-600 pb-2">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">Neovista Construction UG</strong><br />
                  Dänenstr. 6<br />
                  10439 Berlin
                </p>
              </div>
            </section>

            {/* Vertreten durch */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-yellow-600 pb-2">
                Vertreten durch:
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">Alexander Schell, Viktor Shevsov</p>
              </div>
            </section>

            {/* Kontakt */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-yellow-600 pb-2">
                Kontakt:
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  E-Mail: <a href="mailto:office@netznavi.net" className="text-yellow-600 hover:text-yellow-700 underline transition-colors">a.schell@neovistaconstruction.de</a>
                </p>
              </div>
            </section>

            {/* Registereintrag */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-yellow-600 pb-2">
                Registereintrag:
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  Eintragung im Handelsregister von Nikosia<br />
                  Registergericht: Nikosia<br />
                  Registernummer: HRB 270861 B
                </p>
              </div>
            </section>

            {/* Umsatzsteuer-ID */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-yellow-600 pb-2">
                Umsatzsteuer-ID:
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: <strong className="text-gray-900">DE451657966</strong>
                </p>
              </div>
            </section>

            {/* Haftung für Inhalte */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-yellow-600 pb-2">
                Haftung für Inhalte:
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                </p>
              </div>
            </section>

            {/* Haftung für Links */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-yellow-600 pb-2">
                Haftung für Links:
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                  Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>
            </section>

            {/* Urheberrecht */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-yellow-600 pb-2">
                Urheberrecht:
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. 
                  Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </section>

            {/* Abmahnung */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-yellow-600 pb-2">
                Abmahnung:
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Falls Sie der Meinung sind, dass Inhalte dieser Seite gegen gesetzliche Bestimmungen verstoßen, bitten wir um eine Nachricht. 
                  Wir werden beanstandete Inhalte prüfen und gegebenenfalls unverzüglich entfernen.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Die Einschaltung eines Anwaltes zur für den Diensteanbieter kostenpflichtigen Abmahnung entspricht nicht dessen wirklichem oder mutmaßlichem Willen und würde damit einen Verstoß gegen § 13 Abs. 5 UWG, 
                  wegen der Verfolgung sachfremder Ziele als beherrschendes Motiv der Verfahrenseinleitung, insbesondere einer Kostenerzielungsabsicht als eigentliche Triebfeder, 
                  sowie einen Verstoß gegen die Schadensminderungspflicht darstellen.
                </p>
              </div>
            </section>
          </div>

          {/* Back to Home Button */}
          <div className="text-center mt-12">
            <a 
              href="/" 
              className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300"
            >
              Zurück zur Startseite
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyrightPage;