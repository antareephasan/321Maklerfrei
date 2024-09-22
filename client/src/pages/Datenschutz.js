import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@windmill/react-ui";
import { DesktopNavbar } from "../components/HeaderLanding";
import { MobileNavbar } from "../components/HeaderLanding";
import { FooterLanding } from "../components/FooterLanding";
import { Helmet } from "react-helmet";

function SectionFeaturesGrid({ children }) {
  return (
    <section className="flex justify-center py-8 md:py-16 bg-gray-50">
      <Helmet>
        <title>Datenschutz - 321maklerfrei</title>
      </Helmet>
      <div className="text-left w-11/12 lg:w-3/4 break-words">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-700">
          Datenschutz
        </h1>

        <p>&nbsp;</p>

        <p>
          1. Datenschutz auf einen Blick
          <br />
          Der Schutz Ihrer Daten ist uns ein wichtiges Anliegen. Wir
          erf&uuml;llen die notwendigen Anforderungen der
          Datenschutz-Grundverordnung (EU-DSGVO), um Ihre Privat- und
          Pers&ouml;nlichkeitssph&auml;re zu sch&uuml;tzen.
          <br />
          <br />
          1.1 Allgemeine Hinweise
          <br />
          Die folgenden Hinweise geben einen einfachen &Uuml;berblick
          dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn Sie
          unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit
          denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen.
          Ausf&uuml;hrliche Informationen zum Thema Datenschutz entnehmen Sie
          unserer unter diesem Text aufgef&uuml;hrten Datenschutzerkl&auml;rung.
          <br />
          <br />
          1.2 Datenerfassung auf dieser Website
          <br />
          Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser Website?
          <br />
          Die Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem Impressum
          dieser Website entnehmen.
          <br />
          Wie erfassen wir Ihre Daten?
          <br />
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
          mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein
          Kontaktformular eingeben.
          <br />
          Andere Daten werden automatisch beim Besuch der Website durch unsere
          IT-Systeme erfasst. Das sind vor allem technische Daten (z.B.
          Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die
          Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website
          betreten.
          <br />
          Wof&uuml;r nutzen wir Ihre Daten?
          <br />
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
          der Website zu gew&auml;hrleisten. Andere Daten k&ouml;nnen zur
          Analyse Ihres Nutzerverhaltens verwendet werden.
          <br />
          Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?
          <br />
          Sie haben jederzeit das Recht unentgeltlich Auskunft &uuml;ber
          Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten
          personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein
          Recht, die Berichtigung, Sperrung oder L&ouml;schung dieser Daten zu
          verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz
          k&ouml;nnen Sie sich jederzeit unter der im Impressum angegebenen
          Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht
          bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde zu.
          <br />
          <br />
          1.3 Analyse Tools
          <br />
          Zum Zwecke der bedarfsgerechten Gestaltung und fortlaufenden
          Optimierung unserer Seiten nutzen wir Google Analytics, ein
          Webanalysedienst der Google Inc.
          (https://www.google.de/intl/de/about/) (1600 Amphitheatre Parkway,
          Mountain View, CA 94043, USA; im Folgenden &bdquo;Google&ldquo;). In
          diesem Zusammenhang werden pseudonymisierte Nutzungsprofile erstellt
          und Cookies (siehe unter Ziff. 4) verwendet. Die durch den Cookie
          erzeugten Informationen &uuml;ber Ihre Benutzung dieser Website wie
          <br />
          Browser-Typ/-Version, verwendetes Betriebssystem, Referrer-URL (die
          zuvor besuchte Seite), Hostname des zugreifenden Rechners
          (IP-Adresse), Uhrzeit der Serveranfrage, werden an einen Server von
          Google in den USA &uuml;bertragen und dort gespeichert. Die
          Informationen werden verwendet, um die Nutzung der Website
          auszuwerten, um Reports &uuml;ber die Websiteaktivit&auml;ten
          zusammenzustellen und um weitere mit der Websitenutzung und der
          Internetnutzung verbundene Dienstleistungen zu Zwecken der
          Marktforschung und bedarfsgerechten Gestaltung dieser Internetseiten
          zu erbringen. Auch werden diese Informationen gegebenenfalls an Dritte
          &uuml;bertragen, sofern dies gesetzlich vorgeschrieben ist oder soweit
          Dritte diese Daten im Auftrag verarbeiten. Es wird in keinem Fall Ihre
          IP-Adresse mit anderen Daten von Google zusammengef&uuml;hrt. Die
          IP-Adressen werden anonymisiert, so dass eine Zuordnung nicht
          m&ouml;glich ist (IP-Masking).
          <br />
          Sie k&ouml;nnen die Installation der Cookies durch eine entsprechende
          Einstellung der Browser-Software verhindern; wir weisen jedoch darauf
          hin, dass in diesem Fall gegebenenfalls nicht s&auml;mtliche
          Funktionen dieser Website vollumf&auml;nglich genutzt werden
          k&ouml;nnen.
          <br />
          Sie k&ouml;nnen dar&uuml;ber hinaus die Erfassung der durch das Cookie
          erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl.
          Ihrer IP-Adresse) sowie die Verarbeitung dieser Daten durch Google
          verhindern, indem Sie ein Browser-Add-on herunterladen und
          installieren (https://tools.google.com/dlpage/gaoptout?hl=de).
          <br />
          Alternativ zum Browser-Add-on, insbesondere bei Browsern auf mobilen
          Endger&auml;ten, k&ouml;nnen Sie die Erfassung durch Google Analytics
          zudem verhindern, indem Sie auf diesen Link klicken. Es wird ein
          Opt-out-Cookie gesetzt, das die zuk&uuml;nftige Erfassung Ihrer Daten
          beim Besuch dieser Website verhindert. Der Opt-out-Cookie gilt nur in
          diesem Browser und nur f&uuml;r unsere Website und wird auf Ihrem
          Ger&auml;t abgelegt. L&ouml;schen Sie die Cookies in diesem Browser,
          m&uuml;ssen Sie das Opt-out-Cookie erneut setzen.
          <br />
          Weitere Informationen zum Datenschutz im Zusammenhang mit Google
          Analytics finden Sie etwa in der Google Analytics-Hilfe
          (https://support.google.com/analytics/answer/6004245?hl=de).
          <br />
          <br />
          1.4 Bestandsdaten, Nutzungsdaten Bestandsdaten
          <br />
          Wir erheben Bestandsdaten (z.B. Name, Anschrift und Mail-Adresse, ggf.
          in Anspruch genommene Leistungen) soweit sie f&uuml;r die
          Begr&uuml;ndung, inhaltliche Ausgestaltung oder &Auml;nderung eines
          Vertragsverh&auml;ltnisses zwischen uns und dem Nutzer erforderlich
          sind.
          <br />
          <br />
          Nutzungsdaten
          <br />
          <br />
          Weiter erheben wir Nutzungsdaten (zB Besuche auf der Website,
          Interesse an Produkten), um die Inanspruchnahme der Dienste auf
          unserer Website durch den Nutzer zu erm&ouml;glichen und abzurechnen.
          <br />
          Eine Zusammenf&uuml;hrung von Nutzungsdaten wird von uns nur
          vorgenommen, sofern und soweit dies f&uuml;r Abrechnungszwecke
          erforderlich ist. Ansonsten werden wir Nutzungsdaten nur pseudonym
          erstellen und nur, soweit Sie dem nicht widersprochen haben. Diesen
          Widerspruch k&ouml;nnen Sie jederzeit an die in dem Impressum
          angegebene Anschrift oder den in dieser Datenschutzerkl&auml;rung
          genannten Verantwortlichen senden.
          <br />
          Rechtsgrundlage f&uuml;r diese Datenverarbeitung sind zum einen unsere
          berechtigten Interessen gem. Art. 6 Abs. 1 lit. f DSGVO an der Analyse
          der Website und Ihrer Nutzung, gegebenenfalls auch die gesetzliche
          Erlaubnis zur Speicherung von Daten im Rahmen der Anbahnung eines
          Vertragsverh&auml;ltnisses gem. Art. 6 Abs. 1 lit. b DSGVO.
          <br />
          Weiter speichert unser Provider bei jeder Nutzung dieser Webseite
          Informationen, die sog. Server Log Dateien, die automatisch von Ihrem
          Browser &uuml;bermittelt werden. Dies sind:
          <br />
          <br />
          Ihre IP-Adresse, Typ und Version Ihres Browsers, Hostname,
          Besuchszeitpunkt, die Seite, von der aus Sie unsere Seite besucht
          haben, Name der aufgerufenen Seite, genauer Zeitpunkt des Aufrufes
          sowie die &uuml;bertragene Datenmenge.
          <br />
          <br />
          Diese Daten werden nur f&uuml;r statistische Zwecke verwendet und
          erm&ouml;glichen uns keine Identifikation von Ihnen als Nutzer.
          <br />
          <br />
          2. Allgemeine Hinweise und Pflichtinformationen zum Datenschutz
          <br />
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers&ouml;nlichen
          Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
          vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften
          sowie dieser Datenschutzerkl&auml;rung.
          <br />
          <br />
          Wenn Sie diese Website benutzen, werden verschiedene personenbezogene
          Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
          pers&ouml;nlich identifiziert werden k&ouml;nnen. Die vorliegende
          Datenschutzerkl&auml;rung erl&auml;utert, welche Daten wir erheben und
          wof&uuml;r wir sie nutzen. Sie erl&auml;utert auch, wie und zu welchem
          Zweck das geschieht.
          <br />
          <br />
          Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet
          (z.B. bei der Kommunikation per E-Mail) Sicherheitsl&uuml;cken
          aufweisen kann. Ein l&uuml;ckenloser Schutz der Daten vor dem Zugriff
          durch Dritte ist nicht m&ouml;glich.
          <br />
          <br />
          2.1 Hinweis zur verantwortlichen Stelle
          <br />
          Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser
          Website ist:
          <br />
          321maklerfrei - Inh. Dominik Wagenmann
          <br />
          Porschestr. 2c
          <br />
          38440 Wolfsburg
          <br />
          Telefon: +49 (0) 1522 &ndash; 1453300
          <br />
          E-Mail: hallo@321maklerfrei.de
          <br />
          <br />
          Verantwortliche Stelle ist die nat&uuml;rliche oder juristische
          Person, die allein oder gemeinsam mit anderen &uuml;ber die Zwecke und
          Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen,
          E-Mail-Adressen o. &Auml;.) entscheidet.
          <br />
          <br />
          2.2 Widerruf Ihrer Einwilling zur Datenverarbeitung
          <br />
          Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer
          ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen eine
          bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine
          formlose Mitteilung per E-Mail an uns. Die Rechtm&auml;&szlig;igkeit
          der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
          unber&uuml;hrt.
          <br />
          <br />
          2.3 Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde
          <br />
          Im Falle Datenschutzrechtlicher Verst&ouml;&szlig;e steht dem
          Betroffenen ein Beschwerderecht bei der zust&auml;ndigen
          Aufsichtsbeh&ouml;rde zu. Zust&auml;ndige Aufsichtsbeh&ouml;rde in
          Datenschutzrechtlichen Fragen ist der Landesdatenschutzbeauftragte des
          Bundeslandes, in dem unser Unternehmen seinen Sitz hat. Eine Liste der
          Datenschutzbeauftragten sowie deren Kontaktdaten k&ouml;nnen folgendem
          Link entnommen werden:
          https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html.
          <br />
          <br />
          2.4 Recht auf Daten&uuml;bertragbarkeit
          <br />
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
          oder in Erf&uuml;llung eines Vertrags automatisiert verarbeiten, an
          sich oder an einen Dritten in einem g&auml;ngigen, maschinenlesbaren
          Format aush&auml;ndigen zu lassen. Sofern Sie die direkte
          &Uuml;bertragung der Daten an einen anderen Verantwortlichen
          verlangen, erfolgt dies nur, soweit es technisch machbar ist.
          <br />
          <br />
          2.5 SSL bzw. TLS-Verschl&uuml;sselung
          <br />
          Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der
          &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen
          oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine
          SSL-bzw. TLS-Verschl&uuml;sselung. Eine verschl&uuml;sselte Verbindung
          erkennen Sie daran, dass die Adresszeile des Browsers von
          &ldquo;http://&rdquo; auf &ldquo;https://&rdquo; wechselt und an dem
          Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw.
          TLS-Verschl&uuml;sselung aktiviert ist, k&ouml;nnen die Daten, die Sie
          an uns &uuml;bermitteln, nicht von Dritten mitgelesen werden.
          <br />
          <br />
          2.6 Auskunft, Sperrung, L&ouml;schung
          <br />
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
          das Recht auf unentgeltliche Auskunft &uuml;ber Ihre gespeicherten
          personenbezogenen Daten, deren Herkunft und Empf&auml;nger und den
          Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung,
          Sperrung oder L&ouml;schung dieser Daten. Hierzu sowie zu weiteren
          Fragen zum Thema personenbezogene Daten k&ouml;nnen Sie sich jederzeit
          unter der im Impressum angegebenen Adresse an uns wenden.
          <br />
          <br />
          2.7 Widerspruch gegen Werbemails
          <br />
          Der Nutzung von im Rahmen der Impressumspflicht ver&ouml;ffentlichten
          Kontaktdaten zur &Uuml;bersendung von nicht ausdr&uuml;cklich
          angeforderter Werbung und Informationsmaterialien wird hiermit
          widersprochen. Die Betreiber der Seiten behalten sich
          ausdr&uuml;cklich rechtliche Schritte im Falle der unverlangten
          Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
          <br />
          <br />
          3. Datenerfassung auf unserer Website
          <br />
          Die Internetseiten verwenden teilweise so genannte Cookies. Cookies
          richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren.
          Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und
          sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem
          Rechner abgelegt werden und die Ihr Browser speichert.
          <br />
          <br />
          Die meisten der von uns verwendeten Cookies sind so genannte
          &ldquo;Session-Cookies&rdquo;. Sie werden nach Ende Ihres Besuchs
          automatisch gel&ouml;scht. Andere Cookies bleiben auf Ihrem
          Endger&auml;t gespeichert bis Sie diese l&ouml;schen. Diese Cookies
          erm&ouml;glichen es uns, Ihren Browser beim n&auml;chsten Besuch
          wiederzuerkennen.
          <br />
          <br />
          Sie k&ouml;nnen Ihren Browser so einstellen, dass Sie &uuml;ber das
          Setzen von Cookies informiert werden und Cookies nur im Einzelfall
          erlauben, die Annahme von Cookies f&uuml;r bestimmte F&auml;lle oder
          generell ausschlie&szlig;en sowie das automatische L&ouml;schen der
          Cookies beim Schlie&szlig;en des Browser aktivieren. Bei der
          Deaktivierung von Cookies kann die Funktionalit&auml;t dieser Website
          eingeschr&auml;nkt sein.
          <br />
          <br />
          Cookies, die zur Durchf&uuml;hrung des elektronischen
          Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen
          erw&uuml;nschter Funktionen (z.B. Warenkorbfunktion) erforderlich
          sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert.
          Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung
          von Cookies zur technisch fehlerfreien und optimierten Bereitstellung
          seiner Dienste. Soweit andere Cookies (z.B. Cookies zur Analyse Ihres
          Surfverhaltens) gespeichert werden, werden diese in dieser
          Datenschutzerkl&auml;rung gesondert behandelt.
          <br />
          <br />
          3.1 Server-Log-Dateien
          <br />
          Der Provider der Seiten erhebt und speichert automatisch Informationen
          in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns
          &uuml;bermittelt. Dies sind:
          <br />
          Browsertyp und Browserversion
          <br />
          verwendetes Betriebssystem
          <br />
          Referrer URL
          <br />
          Hostname des zugreifenden Rechners
          <br />
          Uhrzeit der Serveranfrage
          <br />
          IP-Adresse
          <br />
          Eine Zusammenf&uuml;hrung dieser Daten mit anderen Datenquellen wird
          nicht vorgenommen.
          <br />
          <br />
          Grundlage f&uuml;r die Datenverarbeitung ist Art. 6 Abs. 1 lit. f
          DSGVO, der die Verarbeitung von Daten zur Erf&uuml;llung eines
          Vertrags oder vorvertraglicher Ma&szlig;nahmen gestattet.
          <br />
          <br />
          3.2 Kontaktformular
          <br />
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
          Angaben aus dem Anfrageformular inklusive der von Ihnen dort
          angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und f&uuml;r
          den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
          wir nicht ohne Ihre Einwilligung weiter.
          <br />
          <br />
          Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt
          somit ausschlie&szlig;lich auf Grundlage Ihrer Einwilligung (Art. 6
          Abs. 1 lit. a DSGVO). Sie k&ouml;nnen diese Einwilligung jederzeit
          widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns.
          Die Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten
          Datenverarbeitungsvorg&auml;nge bleibt vom Widerruf unber&uuml;hrt.
          <br />
          <br />
          Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei
          uns, bis Sie uns zur L&ouml;schung auffordern, Ihre Einwilligung zur
          Speicherung widerrufen oder der Zweck f&uuml;r die Datenspeicherung
          entf&auml;llt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage).
          Zwingende gesetzliche Bestimmungen &ndash; insbesondere
          Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.
          <br />
          <br />
          3.3 Verarbeiten von Daten
          <br />
          Wir erheben, verarbeiten und nutzen personenbezogene Daten nur, soweit
          sie f&uuml;r die Begr&uuml;ndung, inhaltliche Ausgestaltung oder
          &Auml;nderung des Rechtsverh&auml;ltnisses erforderlich sind
          (Bestandsdaten). Dies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
          DSGVO, der die Verarbeitung von Daten zur Erf&uuml;llung eines
          Vertrags oder vorvertraglicher Ma&szlig;nahmen gestattet.
          Personenbezogene Daten &uuml;ber die Inanspruchnahme unserer
          Internetseiten (Nutzungsdaten) erheben, verarbeiten und nutzen wir
          nur, soweit dies erforderlich ist, um dem Nutzer die Inanspruchnahme
          des Dienstes zu erm&ouml;glichen oder abzurechnen.
          <br />
          <br />
          Die erhobenen Kundendaten werden nach Abschluss des Auftrags oder
          Beendigung der Gesch&auml;ftsbeziehung gel&ouml;scht. Gesetzliche
          Aufbewahrungsfristen bleiben unber&uuml;hrt.
          <br />
          <br />
          3.4 Daten&uuml;bermittlung bei Vertragsschluss oder zur
          &Uuml;bermittlung digitaler Inhalte
          <br />
          Wir &uuml;bermitteln personenbezogene Daten an Dritte nur dann, wenn
          dies im Rahmen der Vertragsabwicklung notwendig ist, etwa an das mit
          der Zahlungsabwicklung beauftragte Kreditinstitut.
          <br />
          <br />
          Eine weitergehende &Uuml;bermittlung der Daten erfolgt nicht bzw. nur
          dann, wenn Sie der &Uuml;bermittlung ausdr&uuml;cklich zugestimmt
          haben. Eine Weitergabe Ihrer Daten an Dritte ohne ausdr&uuml;ckliche
          Einwilligung, etwa zu Zwecken der Werbung, erfolgt nicht.
          <br />
          <br />
          Grundlage f&uuml;r die Datenverarbeitung ist Art. 6 Abs. 1 lit. b
          DSGVO, der die Verarbeitung von Daten zur Erf&uuml;llung eines
          Vertrags oder vorvertraglicher Ma&szlig;nahmen gestattet.
          <br />
          <br />
          Weitergabe in das Ausland, insbesondere USA
          <br />
          <br />
          Unsere Webseite nutzt f&uuml;r verschiedene Funktionen externe
          Anbieter mit Sitz au&szlig;erhalb der EU. Dabei kann es insbesondere
          durch Cookies, aktive Java-Skripte und weitere Techniken zu einer
          Verarbeitung und Speicherung ihrer Daten au&szlig;erhalb der EU
          kommen. Wir werden Ihre Daten jedoch nicht an ein Drittland
          weitergeben, wenn nicht von der EU-Kommission ein vergleichbarer
          Datenschutz wie in der EU festgestellt ist oder Sie uns informiert
          Ihre Einwilligung gegeben haben oder wir mit dem Anbieter die
          Standardvertragsklauseln zum Schutz Ihrer Daten vereinbart haben.
          F&uuml;r die USA ist mit dem Privacy Shield Abkommen (siehe auch
          https://www.privacyshield.gov/welcome ) unter bestimmten
          Voraussetzungen wieder ein ausreichender Datenschutz festgestellt.
          N&auml;here Informationen zu Ihren Rechten bei jeder im folgenden
          erw&auml;hnten Weitergabe von Daten in die USA finden Sie unter
          http://ec.europa.eu/justice/data-protection/document/citizens-guide_en.pdf
          <br />
          <br />
          4. Newsletter
          <br />
          4.1 Newsletterdaten
          <br />
          Wenn Sie den auf der Website angebotenen Newsletter beziehen
          m&ouml;chten, ben&ouml;tigen wir von Ihnen eine E-Mail-Adresse sowie
          Informationen, welche uns die &Uuml;berpr&uuml;fung gestatten, dass
          Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem
          Empfang des Newsletters einverstanden sind. Weitere Daten werden nicht
          bzw. nur auf freiwilliger Basis erhoben. Diese Daten verwenden wir
          ausschlie&szlig;lich f&uuml;r den Versand der angeforderten
          Informationen und geben diese nicht an Dritte weiter.
          <br />
          <br />
          Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen
          Daten erfolgt ausschlie&szlig;lich auf Grundlage Ihrer Einwilligung
          (Art. 6 Abs. 1 lit. a DSGVO). Die erteilte Einwilligung zur
          Speicherung der Daten, der E-Mail-Adresse sowie deren Nutzung zum
          Versand des Newsletters k&ouml;nnen Sie jederzeit widerrufen, etwa
          &uuml;ber den &bdquo;Austragen&ldquo;-Link im Newsletter. Die
          Rechtm&auml;&szlig;igkeit der bereits erfolgten
          Datenverarbeitungsvorg&auml;nge bleibt vom Widerruf unber&uuml;hrt.
          <br />
          <br />
          Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten
          Daten werden von uns bis zu Ihrer Austragung aus dem Newsletter
          gespeichert und nach der Abbestellung des Newsletters gel&ouml;scht.
          Daten, die zu anderen Zwecken bei uns gespeichert wurden (z.B.
          E-Mail-Adressen f&uuml;r den Mitgliederbereich) bleiben hiervon
          unber&uuml;hrt.
          <br />
          <br />
          5. Plugins und Tools
          <br />
          <br />
          5.1 Google Web Fonts
          <br />
          Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so
          genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf
          einer Seite l&auml;dt Ihr Browser die ben&ouml;tigten Web Fonts in
          ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
          <br />
          <br />
          Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu
          den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis
          dar&uuml;ber, dass &uuml;ber Ihre IP-Adresse unsere Website aufgerufen
          wurde. Die Nutzung von Google Web Fonts erfolgt im Interesse einer
          einheitlichen und ansprechenden Darstellung unserer Online-Angebote.
          Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit.
          f DSGVO dar.
          <br />
          <br />
          Wenn Ihr Browser Web Fonts nicht unterst&uuml;tzt, wird eine
          Standardschrift von Ihrem Computer genutzt.
          <br />
          <br />
          Weitere Informationen zu Google Web Fonts finden Sie unter
          https://developers.google.com/fonts/faq und in der
          Datenschutzerkl&auml;rung von Google:
          https://www.google.com/policies/privacy/.
          <br />
          <br />
          5.2 Google Maps
          <br />
          Diese Seite nutzt &uuml;ber eine API den Kartendienst Google Maps.
          Anbieter ist die Google Inc., 1600 Amphitheatre Parkway, Mountain
          View, CA 94043, USA.
          <br />
          <br />
          Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP
          Adresse zu speichern. Diese Informationen werden in der Regel an einen
          Server von Google in den USA &uuml;bertragen und dort gespeichert. Der
          Anbieter dieser Seite hat keinen Einfluss auf diese
          Daten&uuml;bertragung.
          <br />
          <br />
          Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden
          Darstellung unserer Online-Angebote und an einer leichten
          Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies
          stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f
          DSGVO dar.
          <br />
          <br />
          Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der
          Datenschutzerkl&auml;rung von Google:
          https://www.google.de/intl/de/policies/privacy/.
          <br />
          <br />
          5.3 Google Ads
          <br />
          Um die Nutzung unserer Webseite statistisch zu erfassen und zum Zwecke
          der Optimierung unserer Website f&uuml;r Sie auszuwerten, nutzen wir
          ferner das Google Conversion Tracking. Dabei wird von Google Adwords
          ein Cookie (siehe Ziffer 4) auf Ihrem Rechner gesetzt, sofern Sie
          &uuml;ber eine Google-Anzeige auf unsere Webseite gelangt sind.
          <br />
          <br />
          Diese Cookies verlieren nach 30 Tagen ihre G&uuml;ltigkeit und dienen
          nicht der pers&ouml;nlichen Identifizierung. Besucht der Nutzer
          bestimmte Seiten der Webseite des Adwords-Kunden und das Cookie ist
          noch nicht abgelaufen, k&ouml;nnen Google und der Kunde erkennen, dass
          der Nutzer auf die Anzeige geklickt hat und zu dieser Seite
          weitergeleitet wurde.
          <br />
          <br />
          Jeder Adwords-Kunde erh&auml;lt ein anderes Cookie. Cookies
          k&ouml;nnen somit nicht &uuml;ber die Webseiten von Adwords-Kunden
          nachverfolgt werden. Die mithilfe des Conversion-Cookies eingeholten
          Informationen dienen dazu, Conversion-Statistiken f&uuml;r
          Adwords-Kunden zu erstellen, die sich f&uuml;r Conversion-Tracking
          entschieden haben. Die Adwords-Kunden erfahren die Gesamtanzahl der
          Nutzer, die auf ihre Anzeige geklickt haben und zu einer mit einem
          Conversion-Tracking-Tag versehenen Seite weitergeleitet wurden. Sie
          erhalten jedoch keine Informationen, mit denen sich Nutzer
          pers&ouml;nlich identifizieren lassen.
          <br />
          <br />
          Wenn Sie nicht an dem Tracking-Verfahren teilnehmen m&ouml;chten,
          k&ouml;nnen Sie auch das hierf&uuml;r erforderliche Setzen eines
          Cookies ablehnen &ndash; etwa per Browser-Einstellung, die das
          automatische Setzen von Cookies generell deaktiviert. Sie k&ouml;nnen
          Cookies f&uuml;r Conversion-Tracking auch deaktivieren, indem Sie
          Ihren Browser so einstellen, dass Cookies von der Domain
          &bdquo;www.googleadservices.com&ldquo; blockiert werden. Googles
          Datenschutzbelehrung zum Conversion-Tracking finden Sie hier
          (https://services.google.com/sitestats/de.html).
          <br />
          <br />
          5.4 Google Remarketing und &auml;hnliche Zielgruppen
          <br />
          Wir verwenden im Rahmen unseres berechtigten Interesses an einem
          technisch einwandfreien Online Angebot und seiner
          wirtschaftlich-effizienten Gestaltung und Optimierung gem. Art.6 Abs.
          1 lit.f DSGVO auf unserer Website den Remarketing- und &auml;hnliche
          Zielgruppen-Dienst der Google Ireland Limited, Gordon House, Barrow
          Street, Dublin 4, Irland.
          <br />
          <br />
          Diese durch Cookies umgesetzte Technik erm&ouml;glicht es Google,
          Ihnen auf der Basis der von Ihnen vorher besuchten Websites
          zielgerichtet Werbung anzuzeigen. Wir k&ouml;nnen dadurch Nutzer
          unserer Website besser mit Werbung ansprechen. Bei dem Besuch unserer
          Seite wird in Ihrem Browser ein Cookie gesetzt, sofern Sie bei Aufruf
          unserer Seite nicht der Verwendung von Cookies widersprochen haben.
          <br />
          <br />
          Bei dem Cookie handelt es sich um eine kleine Datei mit einem
          Zahlencode, mit dem Ihr Besuch der Website und anonymisierte Daten
          &uuml;ber Ihre Nutzung der Website erfasst werden. Ihre IP-Adresse
          wird bei der &Uuml;bertragung an Google gek&uuml;rzt und so
          anonymisiert. Personenbezogene Daten von Ihnen werden nicht
          gespeichert und von Google auch nicht mit anderen Daten
          zusammengef&uuml;hrt.
          <br />
          <br />
          Die anonymisierten Daten werden in die USA &uuml;bermittelt und bei
          Google gespeichert. Google Google hat sich dem Privacy Shield
          Framework unterworfen, n&auml;here Informationen zu Ihren Rechten
          daraus finden Sie unter
          http://ec.europa.eu/justice/data-protection/document/citizens-guide_en.pdf
          .<br />
          <br />
          Sofern Sie nach Besuch unserer Website andere Websites besuchen, die
          ebenfalls Teil des Google Display Netzwerkes sind, wird Ihnen
          wahrscheinlich interessenbezogene Werbeanzeigen auf der Basis der
          zuvor von Ihnen aufgerufenen Websites angezeigt werden.
          <br />
          <br />
          Die Speicherung von Cookies in Ihrem Browser durch Google k&ouml;nnen
          Sie dauerhaft verhindern, indem sie das anschlie&szlig;end verlinkte
          Plugin herunterladen und installieren.
          <br />
          <br />
          https://www.google.com/settings/ads/plugin?hl=de
          <br />
          <br />
          Ebenso k&ouml;nnen Sie die Nutzung von Cookies durch Drittanbieter
          Ihnen gegen&uuml;ber dadurch verhindern, dass sie auf der
          Deaktivierungsseite der Network Advertising Initiative
          gem&auml;&szlig; der dortigen Anleitung ihren Opt-out erkl&auml;ren.
          <br />
          <br />
          http://www.networkadvertising.org/choices/
          <br />
          <br />
          Erg&auml;nzende Informationen zu dem Google Remarketing-Dienst und die
          Datenschutzerkl&auml;rung von Google finden Sie unter
          <br />
          http://www.google.com/privacy/ads/
          <br />
          <br />
          Zudem verweisen wir f&uuml;r den generellen Umgang mit Cookies und
          ihre Deaktivierung sowie f&uuml;r die Weitergabe von Daten an Dritte,
          insbesondere auch in die USA, auf unsere allgemeine Darstellung in
          dieser Datenschutzerkl&auml;rung.
          <br />
          <br />
          5.5 Google Tag Manager
          <br />
          Mit dem Google Tag Manager k&ouml;nnen Vermarkter Website-Tags
          &uuml;ber eine Oberfl&auml;che verwalten. Der Tag Manager selbst, der
          die Tags einsetzt, funktioniert jedoch ohne Cookies und erfasst keine
          personenbezogenen Daten. Der Tag Manager sorgt lediglich f&uuml;r die
          Ausl&ouml;sung anderer Tags, die ihrerseits unter Umst&auml;nden Daten
          erfassen. Zu diesen jeweiligen Drittanbietern finden sich
          entsprechende Erkl&auml;rungen in dieser Datenschutzerkl&auml;rung.
          Der Google Tag Manager verwendet diese Daten aber nicht. Haben Sie
          eine Deaktivierung von Cookies eingestellt oder sonst vorgenommen,
          wird diese f&uuml;r alle Tracking-Tags beachtet, die mit dem Google
          Tag Manager eingesetzt wurden, das Tool &auml;ndert also Ihre
          Cookie-Einstellungen nicht.
          <br />
          <br />
          M&ouml;glicherweise bittet Google Sie um die Erlaubnis, einige
          Produktdaten (z. B. Ihre Kontoinformationen) an andere Google-Produkte
          weiterzugeben, um bestimmte Funktionen zu aktivieren, z. B. die
          Hinzuf&uuml;gung neuer Conversion-Tracking-Tags f&uuml;r AdWords zu
          vereinfachen. Au&szlig;erdem &uuml;berpr&uuml;fen die Entwickler von
          Google von Zeit zu Zeit Informationen zur Produktnutzung, um das
          Produkt weiter zu optimieren. Google wird jedoch niemals Daten dieser
          Art ohne Ihre Zustimmung an andere Google-Produkte weitergeben.
          <br />
          <br />
          Weitere Informationen finden Sie in den Nutzungsrichtlinien von Google
          und den Datenschutzhinweisen von Google f&uuml;r dieses Produkt.
          <br />
          &nbsp;
        </p>

        <p>
          5.6 Wistia
          <br />
          Wir haben auf unserer Internetseite Komponenten von Wistia
          eingebunden.
          <br />
          Betreibergesellschaft von Wistia ist Wistia, Inc., 17 Tudor Street,
          Cambridge, MA 02139, USA.
          <br />
          Die Einbindung setzt voraus, dass Wistia die IP-Adresse der Nutzer
          wahrnehmen kann. Die IP-Adresse ist erforderlich, um die Inhalte an
          den Browser des Nutzers senden zu k&ouml;nnen. Wenn Sie eine
          Einzelseite unserer Webpr&auml;senz aufrufen, auf welcher sich eine
          Wistia-Komponente (Video) befindet, wird Ihr Internetbrowser durch die
          Komponente veranlasst, eine entsprechende Darstellung der Komponente
          herunterzuladen. Somit wei&szlig; Wistia, welche bestimmten
          Unterseiten Sie besucht haben.
          <br />
          Wenn Sie gleichzeitig bei Wistia eingeloggt sind, kann nachvollzogen
          werden, auf welchen unserer Unterseiten, die ein Video enthalten, Sie
          sich bewegt haben.
          <br />
          Wenn Sie nicht wollen, dass Informationen an Vimeo &uuml;bermittelt
          werden, loggen Sie sich aus Vimeo aus, bevor Sie unsere Internetseite
          aufrufen.
        </p>

        <p>
          Finden Sie weitere Datenschutzinformationen von Wistia unter:&nbsp;
          <a href="http://wistia.com/privacy">http://wistia.com/privacy</a>
          &nbsp;.
          <br />
          &nbsp;
        </p>

        <p>
          5.7 Datenverarbeitung im Zusammenhang mit Buchungen
          <br />
          Bei der Formularabfrage im Zusammenhang mit der Buchung eines
          Anzeigenpakets werden folgende Daten zwingend abgefragt: Name,
          Anschrift, Telefon-Nr., E-Mail-Adresse, Objektdaten (z.B.
          Objektadresse, Vermarktungsart, Objekttyp, Kaufpreis
          etc.).&nbsp;Zus&auml;tzlich werden noch das Datum und die Uhrzeit der
          Registrierung sowie die allgemeinen durch Webseitenaufruf
          registrierten Daten (s. &quot;Datenverarbeitung bei
          Webseitenaufruf&quot;) erhoben.&nbsp;Die Daten werden neben den
          freiwilligen Angaben ausschlie&szlig;lich zum Zwecke der Bearbeitung
          der Buchung sowie zur Erf&uuml;llung der (vor-)vertraglichen
          Verpflichtungen verarbeitet.
        </p>

        <p>
          Eine Weitergabe von Daten an Dritte erfolgt nur, wenn und soweit dies
          zur Erf&uuml;llung der (vor-)vertraglichen Verpflichtungen des
          Betreibers oder auf der Grundlage berechtigter Interessen des
          Betreibers an der wirtschaftlichen und effektiven Abwicklung des
          Buchungs- und Zahlungsvorgangs erforderlich ist.
        </p>

        <p>
          Mit der Auswahl des Buchungspakets bestimmt der Nutzer, an welche
          Immobilienplattformen die o.g. Daten weitergeleitet werden. Optional
          bietet der Betreiber der Webseite u.a. eine Weiterleitung an folgende
          Plattformen an:
        </p>

        <p>
          <u>
            <a href="https://www.immowelt.de/">https://www.immowelt.de</a>
          </u>
          , betrieben von der Immowelt GmbH, Nordostpark 3-5, 90411
          N&uuml;rnberg; Informationen zum Datenschutz:&nbsp;
          <u>
            <a href="https://www.immowelt.de/immoweltag/datenschutz">
              https://www.immowelt.de/immoweltag/datenschutz
            </a>
          </u>
        </p>

        <p>
          <u>
            <a href="https://www.immonet.de/">https://www.immonet.de</a>
          </u>
          , betrieben von der Immowelt Hamburg GmbH, Spaldingstr. 64, 20097
          Hamburg,&nbsp;
          <u>
            <a href="https://www.immonet.de/service/datenschutz.html">
              https://www.immonet.de/service/datenschutz.html
            </a>
          </u>
        </p>

        <p>
          <u>
            <a href="https://www.immobilienscout24.de/">
              https://www.immobilienscout24.de
            </a>
          </u>
          , betrieben von der Immobilien Scout GmbH, Invalidenstra&szlig;e 65,
          10557 Berlin; Informationen zum Datenschutz:&nbsp;
          <u>
            <a href="https://www.immobilienscout24.de/agb/datenschutz.html">
              https://www.immobilienscout24.de/agb/datenschutz.html
            </a>
          </u>
        </p>

        <p>
          <u>
            <a href="https://www.ebay-kleinanzeigen.de/">
              https://www.ebay-kleinanzeigen.de
            </a>
          </u>
          , betrieben von der eBay Kleinanzeigen GmbH, Albert-Einstein-Ring 2-6,
          14532 Kleinmachnow; Informationen zum Datenschutz:&nbsp;
          <u>
            <a href="https://themen.ebay-kleinanzeigen.de/datenschutzerklaerung">
              https://themen.ebay-kleinanzeigen.de/datenschutzerklaerung
            </a>
          </u>
        </p>

        <p>
          Die Datenverarbeitung der zwingend abgefragten Daten erfolgt auf der
          Grundlage des Art. 6 Abs. 1 S. 1 b.) und Art. 6 Abs. 1 S. 1 f.)
          DSGVO,&nbsp;im &Uuml;brigen zus&auml;tzlich aus Art. 6 Abs. 1 S. 1
          a.), 7 DSGVO. Die Weitergabe von Daten an Dritte erfolgt auf der
          Grundlage des Art. 6 Abs. 1 S. 1 b.) und Art. 6 Abs. 1 S. 1 f.) DSGVO.
          Die L&ouml;schung der Daten erfolgt nach allgemeinen Grunds&auml;tzen
          (s. &bdquo;Allgemeines zur L&ouml;schung von Daten&ldquo;).
          <br />
          <br />
          5.8 Paypal
        </p>

        <p>
          Wir nutzen auf unserer Website den Online-Bezahldienst PayPal.
          Dienstanbieter ist das amerikanische Unternehmen PayPal Inc. F&uuml;r
          den europ&auml;ischen Raum ist das Unternehmen PayPal Europe
          (S.&agrave; r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449
          Luxembourg) verantwortlich.
        </p>

        <p>
          PayPal verarbeitet Daten von Ihnen u.a. auch in den USA. Wir weisen
          darauf hin, dass nach Meinung des Europ&auml;ischen Gerichtshofs
          derzeit kein angemessenes Schutzniveau f&uuml;r den Datentransfer in
          die USA besteht. Dies kann mit verschiedenen Risiken f&uuml;r die
          Rechtm&auml;&szlig;igkeit und Sicherheit der Datenverarbeitung
          einhergehen.
        </p>

        <p>
          Als Grundlage der Datenverarbeitung bei Empf&auml;ngern mit Sitz in
          Drittstaaten (au&szlig;erhalb der Europ&auml;ischen Union, Island,
          Liechtenstein, Norwegen, also insbesondere in den USA) oder einer
          Datenweitergabe dorthin verwendet PayPal sogenannte
          Standardvertragsklauseln (= Art. 46. Abs. 2 und 3 DSGVO).
          Standardvertragsklauseln (Standard Contractual Clauses &ndash; SCC)
          sind von der EU-Kommission bereitgestellte Mustervorlagen und sollen
          sicherstellen, dass Ihre Daten auch dann den europ&auml;ischen
          Datenschutzstandards entsprechen, wenn diese in Drittl&auml;nder (wie
          beispielsweise in die USA) &uuml;berliefert und dort gespeichert
          werden. Durch diese Klauseln verpflichtet sich PayPal, bei der
          Verarbeitung Ihrer relevanten Daten, das europ&auml;ische
          Datenschutzniveau einzuhalten, selbst wenn die Daten in den USA
          gespeichert, verarbeitet und verwaltet werden. Diese Klauseln basieren
          auf einem Durchf&uuml;hrungsbeschluss der EU-Kommission. Sie finden
          den Beschluss und die entsprechenden Standardvertragsklauseln u.a.
          hier:{" "}
          <a
            href="https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de"
            rel="follow noopener"
            target="_blank"
          >
            https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de
          </a>
        </p>

        <p>
          Mehr Informationen zu den Standardvertragsklauseln und &uuml;ber die
          Daten, die durch die Verwendung von PayPal verarbeitet werden,
          erfahren Sie in der Datenschutzerkl&auml;rung auf{" "}
          <a href="https://www.paypal.com/webapps/mpp/ua/privacy-full?tid=331673626835">
            https://www.paypal.com/webapps/mpp/ua/privacy-full
          </a>
          .
        </p>
        <br />
        <p>5.9 Stripe</p>

        <p>
          Wir verwenden auf unserer Website ein Zahlungstool des amerikanischen
          Technologieunternehmens und Online-Bezahldienstes Stripe. F&uuml;r
          Kunden innerhalb von der EU ist Stripe Payments Europe (Europe Ltd., 1
          Grand Canal Street Lower, Grand Canal Dock, Dublin, Irland)
          verantwortlich. Das hei&szlig;t, wenn Sie sich f&uuml;r Stripe als
          Zahlungsart entscheiden, wird Ihre Zahlung &uuml;ber Stripe Payments
          abgewickelt. Dabei werden Daten, die f&uuml;r den Zahlungsvorgang
          n&ouml;tig sind, an Stripe weitergeleitet und gespeichert. In dieser
          Datenschutzerkl&auml;rung geben wir Ihnen einen &Uuml;berblick
          &uuml;ber diese Datenverarbeitung und Speicherung durch Stripe und
          erkl&auml;ren, warum wir Stripe auf unserer Website verwenden.
        </p>

        <p>
          Das Technologieunternehmen Stripe bietet Zahlungsl&ouml;sungen
          f&uuml;r Online-Bezahlungen an. Mit Stripe ist es m&ouml;glich Kredit-
          und Debitkartenzahlungen in unserem Webshop zu akzeptieren. Stripe
          &uuml;bernimmt den gesamten Zahlungsvorgang. Ein gro&szlig;er Vorteil
          von Stripe ist etwa, dass Sie w&auml;hrend des Zahlungsvorgangs nie
          unsere Website bzw. den Shop verlassen m&uuml;ssen und die
          Zahlungsabwicklung sehr schnell erfolgt.
        </p>

        <h3>Warum verwenden wir Stripe f&uuml;r unsere Website?</h3>

        <p>
          Wir wollen nat&uuml;rlich mit unserer Website und unserem
          eingebundenen Onlineshop den bestm&ouml;glichen Service bieten, damit
          Sie sich auf unserer Seite wohl f&uuml;hlen und unsere Angebote
          nutzen. Wir wissen, dass Ihre Zeit kostbar ist und daher speziell
          Zahlungsabwicklungen schnell und reibungslos funktionieren
          m&uuml;ssen. Neben unseren anderen Zahlungsanbietern haben wir mit
          Stripe einen Partner gefunden, der eine sichere und schnelle
          Zahlungsabwicklung gew&auml;hrleistet.
        </p>

        <h3>Welche Daten werden von Stripe gespeichert?</h3>

        <p>
          Wenn Sie sich f&uuml;r Stripe als Zahlungsart entscheiden, werden auch
          personenbezogene Daten von Ihnen an Stripe &uuml;bermittelt und dort
          gespeichert. Dabei handelt es sich um Transaktionsdaten. Zu diesen
          Daten z&auml;hlen etwa die Zahlungsmethode (also Kreditkarten-
          Debitkarten oder Kontonummer), Bankleitzahl, W&auml;hrung, der Betrag
          und das Datum der Zahlung. Bei einer Transaktion kann weiters Ihr
          Name, Ihre E-Mail-Adresse, Ihre Rechnungs- oder Versandadresse und
          manchmal auch Ihr Transaktionsverlauf &uuml;bermittelt werden. Diese
          Daten sind zur Authentifizierung n&ouml;tig. Weiters kann Stripe zur
          Betrugsabwehr, der Finanzberichterstattung und um die eigenen Dienste
          vollst&auml;ndig anbieten zu k&ouml;nnen, auch neben technischen Daten
          zu Ihrem Ger&auml;t (wie IP-Adresse)&nbsp; Name, Adresse,
          Telefonnummer und Ihr Land erfassen.
        </p>

        <p>
          Stripe verkauft keine Ihrer Daten an unabh&auml;ngige Dritte, wie etwa
          Marketingagenturen oder andere Unternehmen, die mit dem
          Stripe-Unternehmen nichts zu tun haben. Die Daten k&ouml;nnen aber
          etwa an interne Abteilungen, einer beschr&auml;nkten Anzahl externer
          Stripe-Partner oder zur Einhaltung gesetzlicher Vorschriften
          weitergeleitet werden. Stripe verwendet zur Erfassung von Daten auch
          Cookies. Hier finden Sie eine Auswahl an Cookies, die Stripe
          w&auml;hrend des Zahlungsprozesses setzen kann:
        </p>

        <p>
          <strong>Name:</strong> m<br />
          <strong>Wert:</strong>{" "}
          edd716e9-d28b-46f7-8a55-e05f1779e84e040456331673605183-5
          <br />
          <strong>Verwendungszweck:</strong> Dieses Cookie erscheint, wenn Sie
          die Zahlungsmethode ausw&auml;hlen. Es speichert und erkennt, ob Sie
          &uuml;ber einen PC, ein Tablet oder ein Smartphone auf unsere Website
          zugreifen.
          <br />
          <strong>Ablaufdatum:</strong> nach 2 Jahren
        </p>

        <p>
          <strong>Name:</strong> __stripe_mid
          <br />
          <strong>Wert:</strong>{" "}
          fc30f52c-b006-4722-af61-a7419a5b8819875de9331673605183-1
          <br />
          <strong>Verwendungszweck:</strong> Um eine Kreditkartentransaktion
          durchf&uuml;hren zu k&ouml;nnen, wird dieses Cookie ben&ouml;tigt.
          Dazu speichert das Cookie Ihre Sitzungs-ID.
          <br />
          <strong>Ablaufdatum:</strong> nach einem Jahr
        </p>

        <p>
          <strong>Name:</strong> __stripe_sid
          <br />
          <strong>Wert:</strong> 6fee719a-c67c-4ed2-b583-6a9a50895b122753fe
          <br />
          <strong>Verwendungszweck:</strong> Auch dieses Cookie speichert Ihre
          ID und wird f&uuml;r den Zahlungsprozess auf unserer Website durch
          Stripe verwendet.
          <br />
          <strong>Ablaufdatum</strong>: nach Ablauf der Sitzung
        </p>

        <h3>Wie lange und wo werden die Daten gespeichert?</h3>

        <p>
          Personenbezogene Daten werden grunds&auml;tzlich f&uuml;r die Dauer
          der Diensterbringung gespeichert. Das hei&szlig;t, die Daten werden so
          lange gespeichert, bis wir die Zusammenarbeit mit Stripe
          aufl&ouml;sen. Um allerdings die gesetzlichen und beh&ouml;rdlichen
          Pflichten zu erf&uuml;llen kann Stripe auch &uuml;ber die Dauer der
          Diensterbringung personenbezogene Daten speichern. Da Stripe ein
          weltweit t&auml;tiges Unternehmen ist, k&ouml;nnen die Daten auch in
          jedem Land, wo Stripe Dienstleistungen anbietet, gespeichert werden.
          So k&ouml;nnen auch Daten au&szlig;erhalb Ihres Landes, zum Beispiel
          in den USA gespeichert werden.
        </p>

        <h3>
          Wie kann ich meine Daten l&ouml;schen bzw. die Datenspeicherung
          verhindern?
        </h3>

        <p>
          Bitte beachten Sie, dass bei der Verwendung dieses Tools Daten von
          Ihnen auch au&szlig;erhalb der EU gespeichert und verarbeitet werden
          k&ouml;nnen. Die meisten Drittstaaten (darunter auch die USA) gelten
          nach derzeitigem europ&auml;ischen Datenschutzrecht als nicht sicher.
          Daten an unsichere Drittstaaten d&uuml;rfen also nicht einfach
          &uuml;bertragen, dort gespeichert und verarbeitet werden, sofern es
          keine passenden Garantien (wie etwa EU-Standardvertragsklauseln)
          zwischen uns und dem au&szlig;ereurop&auml;ischen Dienstleister gibt.
        </p>

        <p>
          Sie haben immer das Recht auf Auskunft, Berichtigung und L&ouml;schung
          Ihrer personenbezogenen Daten. Bei Fragen k&ouml;nnen Sie auch
          jederzeit das Stripe-Team &uuml;ber{" "}
          <a
            href="https://support.stripe.com/contact/email"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://support.stripe.com/contact/email
          </a>{" "}
          kontaktieren.
        </p>

        <p>
          Cookies, die Stripe f&uuml;r ihre Funktionen verwenden, k&ouml;nnen
          Sie in Ihrem Browser l&ouml;schen, deaktivieren oder verwalten. Je
          nachdem welchen Browser Sie verwenden, funktioniert dies auf
          unterschiedliche Art und Weise. Unter dem Abschnitt
          &bdquo;Cookies&ldquo; finden Sie die entsprechenden Links zu den
          jeweiligen Anleitungen der bekanntesten Browser.
        </p>

        <h3>Rechtsgrundlage</h3>

        <p>
          Wir bieten also zur Abwicklung von vertraglichen bzw. rechtlichen
          Beziehungen <strong>(Art. 6 Abs. 1 lit. b DSGVO)</strong> neben den
          herk&ouml;mmlichen Bank-/Kreditinstitutionen auch den
          Zahlungsdienstleister Stripe an. Der erfolgreiche Einsatz des Dienstes
          bedarf ferner Ihrer Einwilligung{" "}
          <strong>(Art. 6 Abs. 1 lit. a DSGVO)</strong>, soweit f&uuml;r den
          Einsatz die Zulassung von Cookies notwendig ist.
        </p>

        <p>
          Stripe verarbeitet Daten von Ihnen u.a. auch in den USA. Wir weisen
          darauf hin, dass nach Meinung des Europ&auml;ischen Gerichtshofs
          derzeit kein angemessenes Schutzniveau f&uuml;r den Datentransfer in
          die USA besteht. Dies kann mit verschiedenen Risiken f&uuml;r die
          Rechtm&auml;&szlig;igkeit und Sicherheit der Datenverarbeitung
          einhergehen.
        </p>

        <p>
          Als Grundlage der Datenverarbeitung bei Empf&auml;ngern mit Sitz in
          Drittstaaten (au&szlig;erhalb der Europ&auml;ischen Union, Island,
          Liechtenstein, Norwegen, also insbesondere in den USA) oder einer
          Datenweitergabe dorthin verwendet Stripe sogenannte
          Standardvertragsklauseln (= Art. 46. Abs. 2 und 3 DSGVO).
          Standardvertragsklauseln (Standard Contractual Clauses &ndash; SCC)
          sind von der EU-Kommission bereitgestellte Mustervorlagen und sollen
          sicherstellen, dass Ihre Daten auch dann den europ&auml;ischen
          Datenschutzstandards entsprechen, wenn diese in Drittl&auml;nder (wie
          beispielsweise in die USA) &uuml;berliefert und dort gespeichert
          werden. Durch diese Klauseln verpflichtet sich Stripe, bei der
          Verarbeitung Ihrer relevanten Daten, das europ&auml;ische
          Datenschutzniveau einzuhalten, selbst wenn die Daten in den USA
          gespeichert, verarbeitet und verwaltet werden. Diese Klauseln basieren
          auf einem Durchf&uuml;hrungsbeschluss der EU-Kommission. Sie finden
          den Beschluss und die entsprechenden Standardvertragsklauseln u.a.
          hier:{" "}
          <a
            href="https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de"
            rel="follow noopener"
            target="_blank"
          >
            https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de
          </a>
        </p>

        <p>
          Mehr Informationen zu den Standardvertragsklauseln und &uuml;ber die
          Daten, die durch die Verwendung von Stripe verarbeitet werden,
          erfahren Sie in der Privacy Policy auf{" "}
          <a href="https://stripe.com/at/privacy">
            https://stripe.com/at/privacy
          </a>
          .<br />
          <br />
          5.10 Google Analytics
        </p>

        <p>
          Wir verwenden Google Analytics, um die Website-Nutzung zu analysieren.
          Die daraus gewonnenen Daten werden genutzt, um unsere Website sowie
          Werbema&szlig;nahmen zu optimieren.&nbsp;
        </p>

        <p>
          Google Analytics wird uns von&nbsp;Google Ireland Limited (Gordon
          House, Barrow Street, Dublin 4, Irland) bereitgestellt. Google
          verarbeitet die Daten zur Website-Nutzung in unserem Auftrag und
          verpflichtet sich vertraglich zu Ma&szlig;nahmen, um die Sicherheit
          und Vertraulichkeit der verarbeiteten Daten zu gew&auml;hrleisten.
        </p>

        <p>
          W&auml;hrend Ihres Website-Besuchs werden u.a. folgende Daten
          aufgezeichnet:
        </p>

        <ul>
          <li>Aufgerufene Seiten</li>
          <li>Bestellungen inkl. des Umsatzes und der bestellten Produkte</li>
          <li>
            Die Erreichung von &quot;Website-Zielen&quot;&nbsp;(z.B.
            Kontaktanfragen und Newsletter-Anmeldungen)
          </li>
          <li>
            Ihr Verhalten auf den Seiten&nbsp;(beispielsweise Verweildauer,
            Klicks, Scrollverhalten)
          </li>
          <li>Ihr ungef&auml;hrer Standort (Land und Stadt)</li>
          <li>
            Ihre IP-Adresse (in gek&uuml;rzter Form, sodass keine eindeutige
            Zuordnung m&ouml;glich ist)
          </li>
          <li>
            Technische Informationen wie Browser, Internetanbieter,
            Endger&auml;t und Bildschirmaufl&ouml;sung
          </li>
          <li>
            Herkunftsquelle Ihres Besuchs (d.h. &uuml;ber welche Website bzw.
            &uuml;ber welches Werbemittel Sie zu uns gekommen sind)
          </li>
        </ul>

        <p>
          Es werden niemals pers&ouml;nliche Daten wie Name, Anschrift oder
          Kontaktdaten an Google Analytics &uuml;bertragen.
        </p>

        <p>
          Diese Daten werden an Server von Google in den USA &uuml;bertragen.
          Wir weisen darauf hin, dass in den USA datenschutzrechtlich nicht das
          gleiche Schutzniveau wie innerhalb der EU garantiert werden
          kann.&nbsp;
        </p>

        <p>
          Google Analytics speichert Cookies in Ihrem Webbrowser f&uuml;r die
          Dauer von zwei&nbsp;Jahren seit Ihrem letzten Besuch. Diese Cookies
          enthaltene eine zufallsgenerierte User-ID, mit der Sie bei
          zuk&uuml;nftigen Website-Besuchen wiedererkannt werden k&ouml;nnen.
        </p>

        <p>
          Die aufgezeichneten Daten werden zusammen mit der zufallsgenerierten
          User-ID gespeichert, was die Auswertung pseudonymer Nutzerprofile
          erm&ouml;glicht.&nbsp;Diese nutzerbezogenen Daten werden automatisch
          nach 14 Monaten gel&ouml;scht.&nbsp;Sonstige Daten bleiben in
          aggregierter Form unbefristet gespeichert.
        </p>

        <p>
          Sollten Sie mit der Erfassung nicht einverstanden sein, k&ouml;nnen
          Sie diese mit der einmaligen Installation des&nbsp;
          <a href="https://tools.google.com/dlpage/gaoptout?hl=de">
            Browser-Add-ons zur Deaktivierung von Google Analytics
          </a>
          &nbsp;unterbinden&nbsp;oder durch das Ablehnen der Cookies &uuml;ber
          unseren Cookie-Einstellungs-Dialog.
        </p>
        <br />
        <p>5.11 Facebook Pixel</p>

        <p>
          Wir verwenden auf unserer Website das Facebook-Pixel von Facebook.
          Daf&uuml;r haben wir einen Code auf unserer Webseite implementiert.
          Der Facebook-Pixel ist ein Ausschnitt aus JavaScript-Code, der eine
          Ansammlung von Funktionen l&auml;dt, mit denen Facebook Ihre
          Userhandlungen verfolgen kann, sofern Sie &uuml;ber Facebook-Ads auf
          unsere Webseite gekommen sind. Wenn Sie beispielsweise ein Produkt auf
          unserer Webseite erwerben, wird das Facebook-Pixel ausgel&ouml;st und
          speichert Ihre Handlungen auf unserer Webseite in einem oder mehreren
          Cookies. Diese Cookies erm&ouml;glichen es Facebook Ihre Userdaten
          (Kundendaten wie IP-Adresse, User-ID) mit den Daten Ihres
          Facebook-Kontos abzugleichen. Dann l&ouml;scht Facebook diese Daten
          wieder. Die erhobenen Daten sind f&uuml;r uns anonym und nicht
          einsehbar und werden nur im Rahmen von Werbeanzeigenschaltungen
          nutzbar. Wenn Sie selbst Facebook-User sind und angemeldet sind, wird
          der Besuch unserer Webseite automatisch Ihrem Facebook-Benutzerkonto
          zugeordnet.
        </p>

        <p>
          Wir wollen unsere Dienstleistungen bzw. Produkte nur jenen Menschen
          zeigen, die sich auch wirklich daf&uuml;r interessieren. Mithilfe von
          Facebook-Pixel k&ouml;nnen unsere Werbema&szlig;nahmen besser auf Ihre
          W&uuml;nsche und Interessen abgestimmt werden. So bekommen
          Facebook-User (sofern sie personalisierte Werbung erlaubt haben)
          passende Werbung zu sehen. Weiters verwendet Facebook die erhobenen
          Daten zu Analysezwecken und eigenen Werbeanzeigen.
        </p>

        <p>
          Im Folgenden zeigen wir Ihnen jene Cookies, die durch das Einbinden
          von Facebook-Pixel auf einer Testseite gesetzt wurden. Bitte beachten
          Sie, dass dies nur Beispiel-Cookies sind. Je nach Interaktion auf
          unserer Webseite werden unterschiedliche Cookies gesetzt.
        </p>

        <p>
          <strong>Name:</strong> _fbp
          <br />
          <strong>Wert:</strong> fb.1.1568287647279.257405483-6331673603418-7
          <br />
          <strong>Verwendungszweck:</strong> Dieses Cookie verwendet Facebook,
          um Werbeprodukte anzuzeigen.
          <br />
          <strong>Ablaufdatum:</strong> nach 3 Monaten
        </p>

        <p>
          <strong>Name:</strong>&nbsp;fr
          <br />
          <strong>Wert:</strong> 0aPf312HOS5Pboo2r..Bdeiuf&hellip;1.0.Bdeiuf.
          <br />
          <strong>Verwendungszweck:</strong> Dieses Cookie wird verwendet, damit
          Facebook-Pixel auch ordentlich funktioniert.
          <br />
          <strong>Ablaufdatum:</strong> nach 3 Monaten
        </p>

        <p>
          <strong>Name:</strong>{" "}
          comment_author_50ae8267e2bdf1253ec1a5769f48e062331673603418-3
          <br />
          <strong>Wert:</strong> Name des Autors
          <br />
          <strong>Verwendungszweck:</strong> Dieses Cookie speichert den Text
          und den Namen eines Users, der beispielsweise einen Kommentar
          hinterl&auml;sst.
          <br />
          <strong>Ablaufdatum:</strong> nach 12 Monaten
        </p>

        <p>
          <strong>Name:</strong>{" "}
          comment_author_url_50ae8267e2bdf1253ec1a5769f48e062
          <br />
          <strong>Wert:</strong> https%3A%2F%2Fwww.testseite&hellip;%2F (URL des
          Autors)
          <br />
          <strong>Verwendungszweck:</strong> Dieses Cookie speichert die URL der
          Website, die der User in einem Textfeld auf unserer Webseite eingibt.
          <br />
          <strong>Ablaufdatum:</strong> nach 12 Monaten
        </p>

        <p>
          <strong>Name:</strong>{" "}
          comment_author_email_50ae8267e2bdf1253ec1a5769f48e062
          <br />
          <strong>Wert:</strong> E-Mail-Adresse des Autors
          <br />
          <strong>Verwendungszweck:</strong> Dieses Cookie speichert die
          E-Mail-Adresse des Users, sofern er sie auf der Website bekannt
          gegeben hat.
          <br />
          <strong>Ablaufdatum:</strong> nach 12 Monaten
        </p>

        <p>
          <strong>Anmerkung:&nbsp;</strong>Die oben genannten Cookies beziehen
          sich auf ein individuelles Userverhalten. Speziell bei der Verwendung
          von Cookies sind Ver&auml;nderungen bei Facebook nie
          auszuschlie&szlig;en.
        </p>

        <p>
          Sofern Sie bei Facebook angemeldet sind, k&ouml;nnen Sie Ihre
          Einstellungen f&uuml;r Werbeanzeigen unter{" "}
          <a href="https://www.facebook.com/adpreferences/advertisers/">
            https://www.facebook.com/adpreferences/advertisers/
          </a>
          &nbsp; selbst ver&auml;ndern. Falls Sie kein Facebook-User sind,
          k&ouml;nnen Sie auf{" "}
          <a
            href="https://www.youronlinechoices.com/de/praferenzmanagement/?tid=331673603418"
            rel="follow noopener"
            target="_blank"
          >
            https://www.youronlinechoices.com/de/praferenzmanagement/?tid=331673603418
          </a>{" "}
          grunds&auml;tzlich Ihre nutzungsbasierte Online-Werbung verwalten.
          Dort haben Sie die M&ouml;glichkeit, Anbieter zu deaktivieren bzw. zu
          aktivieren.
        </p>

        <p>
          Facebook verarbeitet Daten von Ihnen u.a. auch in den USA. Wir weisen
          darauf hin, dass nach Meinung des Europ&auml;ischen Gerichtshofs
          derzeit kein angemessenes Schutzniveau f&uuml;r den Datentransfer in
          die USA besteht. Dies kann mit verschiedenen Risiken f&uuml;r die
          Rechtm&auml;&szlig;igkeit und Sicherheit der Datenverarbeitung
          einhergehen.
        </p>

        <p>
          Als Grundlage der Datenverarbeitung bei Empf&auml;ngern mit Sitz in
          Drittstaaten (au&szlig;erhalb der Europ&auml;ischen Union, Island,
          Liechtenstein, Norwegen, also insbesondere in den USA) oder einer
          Datenweitergabe dorthin verwendet Facebook sogenannte
          Standardvertragsklauseln (= Art. 46. Abs. 2 und 3 DSGVO).
          Standardvertragsklauseln (Standard Contractual Clauses &ndash; SCC)
          sind von der EU-Kommission bereitgestellte Mustervorlagen und sollen
          sicherstellen, dass Ihre Daten auch dann den europ&auml;ischen
          Datenschutzstandards entsprechen, wenn diese in Drittl&auml;nder (wie
          beispielsweise in die USA) &uuml;berliefert und dort gespeichert
          werden. Durch diese Klauseln verpflichtet sich Facebook, bei der
          Verarbeitung Ihrer relevanten Daten, das europ&auml;ische
          Datenschutzniveau einzuhalten, selbst wenn die Daten in den USA
          gespeichert, verarbeitet und verwaltet werden. Diese Klauseln basieren
          auf einem Durchf&uuml;hrungsbeschluss der EU-Kommission. Sie finden
          den Beschluss und die entsprechenden Standardvertragsklauseln u.a.
          hier:{" "}
          <a href="https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de">
            https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de
          </a>
        </p>

        <p>
          Die Facebook Datenverarbeitungsbedingung, welche den
          Standardvertragsklauseln entsprechen, finden Sie unter{" "}
          <a href="https://www.facebook.com/legal/terms/dataprocessing">
            https://www.facebook.com/legal/terms/dataprocessing
          </a>
          .
        </p>

        <p>
          Wenn Sie mehr &uuml;ber den Datenschutz von Facebook erfahren wollen,
          empfehlen wir Ihnen die eigenen Datenrichtlinien des Unternehmens auf{" "}
          <a href="https://www.facebook.com/policy.php">
            https://www.facebook.com/policy.php
          </a>
          .
        </p>
        <br />
        <p>
          6. Cookienutzung Erkl&auml;rung
          <br />
          Wir haben Sie im Rahmen des Aufrufes der Website aufgefordert, dass
          Sie in die Speicherung von bestimmten Cookies bei Besuch unserer
          Website einwilligen. Daher nutzt unsere Webseite aufgrund Ihrer
          Einwilligung gem. Art 6 Abs. 1 lit. a DSGVO Cookies, damit unser
          Angebot besser, effektiver und sicherer genutzt werden kann. Cookies
          sind Textdateien, die auf Ihrem Computer gespeichert werden und
          bestimmte Daten &uuml;ber ihr Nutzerverhalten auf unserer Seite
          speichern, damit etwa ein ihrer bisherigen Nutzung entsprechendes
          Angebot gemacht werden kann. Dabei kann es sich einmal umso genannte
          &bdquo;Session-Cookies&rdquo; handeln, die zum Ende Ihres Besuches auf
          unserer Webseite automatisch gel&ouml;scht werden. Es gibt aber auch
          Cookies, die dauerhaft auf ihrem Computer gespeichert werden, sofern
          sie diese nicht l&ouml;schen. Dann ist es uns m&ouml;glich, Ihren
          Browser beim n&auml;chsten Aufruf unserer Webseite wieder zu erkennen
          und ihnen Angebote zu machen, die ihrer bisherigen Nutzung unserer
          Webseite entsprechen.
          <br />
          <br />
          Sie k&ouml;nnen Ihre Einwilligung jederzeit formlos widerrufen, etwa
          durch eine Email an unsere im Impressum angegebene Adresse oder
          &uuml;ber ein Kontaktformular.
          <br />
          <br />
          Ihr Browser erm&ouml;glicht Ihnen, die Verwendung von Cookies ganz
          oder im Einzelfall zu verhindern. Bitte informieren Sie sich dazu in
          der Bedienungsanleitung f&uuml;r ihren Browser. Sie k&ouml;nnen
          Cookies auch l&ouml;schen, einige Anweisungen dazu haben wir hier
          zusammengestellt:
          <br />
          f&uuml;r Chrome:
          https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&amp;hl=de
          <br />
          f&uuml;r Safari:
          https://support.apple.com/de-de/guide/safari/sfri11471/mac
          <br />
          f&uuml;r Firefox:
          https://support.mozilla.org/de/kb/cookies-loeschen-daten-von-websites-entfernen
          <br />
          f&uuml;r Edge:
          https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies
          <br />
          f&uuml;r Internet Explorer:
          https://support.microsoft.com/de-de/help/278835/how-to-delete-cookie-files-in-internet-explorer
          <br />
          Die Sperrung von Cookies kann die Funktion unserer und anderer von
          Ihnen besuchter Webseiten einschr&auml;nken.
          <br />
          Die Speicherung von Cookies in Ihrem Browser k&ouml;nnen Sie dauerhaft
          verhindern, indem sie das anschlie&szlig;end verlinkte Plugin
          herunterladen und installieren.
          <br />
          <br />
          Ebenso k&ouml;nnen Sie die Nutzung von Cookies durch Drittanbieter
          Ihnen gegen&uuml;ber dadurch verhindern, dass sie auf der
          Deaktivierungsseite der Network Advertising Initiative
          gem&auml;&szlig; der dortigen Anleitung ihren Opt-out erkl&auml;ren.
          Ein ebensolches Angebot finden Sie auf dieser US-amerikanischen
          Website.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 mb-16">
          {children}
        </div>
        <div className="flex my-5 justify-center mx-auto">
          <Link to="/auth/create-account">
            <Button size="larger" className="w-full">
              Gratis Registrieren
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Impressum() {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
      <SectionFeaturesGrid />
      <FooterLanding />
    </>
  );
}

export default Impressum;
