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
                  Werdertraße 30<br />
                  12103 Berlin
                </p>
                <p className="text-gray-700 leading-relaxed">
                  E-Mail: <a href="mailto:neovista.construction@gmail.com" className="text-yellow-600 hover:text-yellow-700 underline transition-colors">neovista.construction@gmail.com</a>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Diese Datenschutzerklärung gilt für die Website <strong className="text-gray-900">www.neovistaconstruction.de</strong> sowie die dazugehörige Web-App.
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
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Unsere Website wird auf Servern innerhalb der Europäischen Union gehostet.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Dabei werden automatisch sogenannte Server-Logfiles gespeichert (z. B. IP-Adresse, Datum, Uhrzeit, Browsertyp), um die Stabilität und Sicherheit der Website zu gewährleisten.
                </p>
              </div>
            </section>

            {/* 4. Cookies & Einwilligung nach TTDSG */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-yellow-600 pb-2">
                4. Cookies & Einwilligung nach TTDSG
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Unsere Website verwendet Cookies, um grundlegende Funktionen bereitzustellen und das Nutzerverhalten zu analysieren.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Beim ersten Besuch unserer Website erscheint ein Cookie-Banner, über das Sie der Verwendung nicht-essentieller Cookies zustimmen oder diese ablehnen können.
                </p>
                <div>
                  <p className="text-gray-700 leading-relaxed mb-3 font-medium">Arten von Cookies:</p>
                  <ul className="space-y-2 pl-4">
                    <li className="text-gray-700 flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <strong>Technisch notwendige Cookies</strong> (für den Betrieb erforderlich – keine Einwilligung erforderlich)
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <strong>Analyse-/Tracking-Cookies</strong> (werden nur mit Ihrer ausdrücklichen Einwilligung nach § 25 Abs. 1 TTDSG gesetzt)
                    </li>
                  </ul>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Die Verwaltung erfolgt über unser Cookie-Consent-Tool.
                </p>
              </div>
            </section>

            {/* 5. Kontaktformular */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-yellow-600 pb-2">
                5. Kontaktformular
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Wenn Sie uns über ein Formular kontaktieren, verarbeiten wir Ihre angegebenen Daten (Name, E-Mail-Adresse, Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage.
                </p>
                <div>
                  <p className="text-gray-700 leading-relaxed mb-3 font-medium">Rechtsgrundlage:</p>
                  <ul className="space-y-2 pl-4">
                    <li className="text-gray-700 flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 6. Speicherdauer */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-yellow-600 pb-2">
                6. Speicherdauer
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  Personenbezogene Daten speichern wir nur so lange, wie dies zur Erfüllung des jeweiligen Zwecks erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen. Nach Zweckerreichung oder Fristablauf werden die Daten gelöscht oder anonymisiert.
                </p>
              </div>
            </section>

            {/* 7. Ihre Rechte gemäß DSGVO */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-yellow-600 pb-2">
                7. Ihre Rechte gemäß DSGVO
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <p className="text-gray-700 leading-relaxed mb-3">Sie haben das Recht:</p>
                <ul className="space-y-2 pl-4">
                  <li className="text-gray-700 flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    auf Auskunft über Ihre Daten (Art. 15 DSGVO)
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    auf Berichtigung unrichtiger Daten (Art. 16 DSGVO)
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    auf Löschung Ihrer Daten (Art. 17 DSGVO)
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    auf Einschränkung der Verarbeitung (Art. 18 DSGVO)
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    auf Datenübertragbarkeit (Art. 20 DSGVO)
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">Widerruf Ihrer Einwilligung:</strong> Sie können eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.
                </p>
              </div>
            </section>

            {/* 8. Beschwerderecht bei der Aufsichtsbehörde */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-yellow-600 pb-2">
                8. Beschwerderecht bei der Aufsichtsbehörde
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten rechtswidrig erfolgt, haben Sie das Recht auf Beschwerde bei einer Datenschutzaufsichtsbehörde.
                </p>
                <div>
                  <p className="text-gray-700 leading-relaxed mb-3 font-medium">Zuständig für Berlin:</p>
                  <div className="pl-4">
                    <p className="text-gray-700 leading-relaxed">
                      <strong className="text-gray-900">Berliner Beauftragte für Datenschutz und Informationsfreiheit</strong><br />
                      Alt-Moabit 59-61<br />
                      10555 Berlin<br />
                      E-Mail: <a href="mailto:mailbox@datenschutz-berlin.de" className="text-yellow-600 hover:text-yellow-700 underline transition-colors">mailbox@datenschutz-berlin.de</a><br />
                      <a href="https://www.datenschutz-berlin.de" className="text-yellow-600 hover:text-yellow-700 underline transition-colors">www.datenschutz-berlin.de</a>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 9. Datenschutzbeauftragter */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-yellow-600 pb-2">
                9. Datenschutzbeauftragter
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  Ein Datenschutzbeauftragter ist derzeit nicht benannt, da die gesetzlichen Voraussetzungen gemäß Art. 37 DSGVO nicht erfüllt sind.
                </p>
              </div>
            </section>

            {/* 10. Änderungen dieser Datenschutzerklärung */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-yellow-600 pb-2">
                10. Änderungen dieser Datenschutzerklärung
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte gesetzliche Vorgaben oder technische Entwicklungen anzupassen.
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