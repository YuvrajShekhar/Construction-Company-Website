import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Datenschutzerklärung
            </h1>
            <div className="w-20 h-1 bg-yellow-600 mx-auto"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* 1. Verantwortlicher */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-yellow-600 pb-2">
                1. Verantwortlicher
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">Neovista Construction UG</strong><br />
                  Dänenstr. 6<br />
                  10439 Berlin
                </p>
                <p className="text-gray-700 leading-relaxed">
                  E-Mail: <a href="mailto:office@netznavi.net" className="text-yellow-600 hover:text-yellow-700 underline transition-colors">a.schell@bearlocal.de</a>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Diese Datenschutzerklärung gilt für die Website <a href="https://www.netznavi.net" className="text-yellow-600 hover:text-yellow-700 underline transition-colors">www.neovistaconstruction.de</a> sowie die dazugehörige Web-App.
                </p>
              </div>
            </section>

            {/* 2. Allgemeines zur Datenverarbeitung */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-yellow-600 pb-2">
                2. Allgemeines zur Datenverarbeitung
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Wir erheben und verwenden personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung unserer Website, Web-App und unserer Leistungen erforderlich ist.
                </p>
                <div>
                  <p className="text-gray-700 leading-relaxed mb-3 font-medium">Rechtsgrundlagen der Verarbeitung:</p>
                  <ul className="space-y-2 pl-4">
                    <li className="text-gray-700 flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. Hosting */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-yellow-600 pb-2">
                3. Hosting
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  Unsere Website wird auf Servern innerhalb der EU gehostet. Dabei werden automatisch Server-Logfiles gespeichert (z. B. IP-Adresse, Datum, Uhrzeit, Browsertyp), um die Stabilität und Sicherheit zu gewährleisten.
                </p>
              </div>
            </section>

            {/* 4. Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-yellow-600 pb-2">
                4. Cookies
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Unsere Website verwendet Cookies, um Funktionen bereitzustellen und das Nutzerverhalten zu analysieren. Beim ersten Besuch erscheint ein Cookie-Hinweis mit der Möglichkeit, bestimmte Cookies abzulehnen.
                </p>
                <div>
                  <p className="text-gray-700 leading-relaxed mb-3 font-medium">Arten von Cookies:</p>
                  <ul className="space-y-2 pl-4">
                    <li className="text-gray-700 flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      Technisch notwendige Cookies
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      Analyse-/Tracking-Cookies (nur mit Einwilligung)
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 6. Kontaktformular */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-yellow-600 pb-2">
                5. Kontaktformular
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Wenn Sie uns per Formular kontaktieren, verarbeiten wir Ihre Angaben (Name, E-Mail, Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a oder b DSGVO
                </p>
              </div>
            </section>

            {/* 7. Änderungen dieser Erklärung */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-yellow-600 pb-2">
                6. Änderungen dieser Erklärung
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte Rechtslagen oder technische Änderungen anzupassen.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">Letzte Aktualisierung:</strong> Juni 2025
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

export default PrivacyPolicy;