import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@windmill/react-ui";
import { DesktopNavbar } from "../components/HeaderLanding";
import { MobileNavbar } from "../components/HeaderLanding";
import { FooterLanding } from "../components/FooterLanding";
import { Helmet } from "react-helmet";
import { config } from "../assets/config/config";
import axios from 'axios'; // Assuming you'll use axios for submitting data

const apiUrl = config.api.url;

function SectionFeaturesGrid({ children }) {
  const [terms, setTerms] = useState('');

  useEffect(() => {
    // Fetch Terms and Conditions
    const fetchTerms = async () => {
      try {
        const response = await axios.get(`${apiUrl}/manage-web/get-terms-conditions`); // Adjust this URL as needed
        console.log("response", response)
        setTerms(response.data.data.description);
      } catch (error) {
        console.error("Error fetching terms and conditions:", error);
      }
    };

    fetchTerms();

  }, []);

  return (
    <section className="flex justify-center py-8 md:py-16 bg-gray-50 break-normal">
      <Helmet>
        <title>Allgemeine Geschäftsbedingungen - 321maklerfrei</title>
      </Helmet>
      <div className="text-left w-11/12 lg:w-3/4">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-700">
          Allgemeine Gesch&auml;ftsbedingungen
        </h1>
        <br />
        <div dangerouslySetInnerHTML={{ __html: terms }} />

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





// <p>
// 321maklerfrei.de Inh. Dominik Wagenmann
// <br />
// Porschestr. 2c, 38440 Wolfsburg
// <br />
// <br />
// - im folgenden Betreiber genannt -<br />
// &nbsp;
// </p>

// <p>
// &sect; 1 Geltungsbereich, Begriffsbestimmungen
// <br />
// <br />
// (1) F&uuml;r Nutzer des Immobilienportals
// https://www.321maklerfrei.de - im folgenden Portal genannt -, die
// Immobilienanzeigen erstellen wollen, - im folgenden Nutzer genannt -
// gelten ausschlie&szlig;lich die nachfolgenden Allgemeinen
// Gesch&auml;ftsbedingungen in ihrer zum Zeitpunkt der Nutzungshandlung
// g&uuml;ltigen Fassung. Abweichende Bedingungen des Nutzers werden
// nicht anerkannt, es sei denn, der Betreiber stimmt ihrer Geltung
// ausdr&uuml;cklich zu.
// <br />
// (2) Der Nutzer ist Verbraucher, soweit der Zweck der georderten
// Lieferungen und Leistungen nicht &uuml;berwiegend seiner gewerblichen
// oder selbst&auml;ndigen beruflichen T&auml;tigkeit zugerechnet werden
// kann. Dagegen ist Unternehmer jede nat&uuml;rliche oder juristische
// Person oder rechtsf&auml;hige Personengesellschaft, die beim Abschluss
// des Vertrags &uuml;berwiegend in Aus&uuml;bung ihrer gewerblichen oder
// selbst&auml;ndigen beruflichen T&auml;tigkeit handelt.
// <br />
// <br />
// <br />
// &sect; 2 Vertragsgegenstand
// <br />
// <br />
// Bei der Webanwendung unter der URL https://www.321maklerfrei.de
// handelt es sich um ein Immobilienportal. Registrierte Nutzer
// k&ouml;nnen &uuml;ber das Portal Immobilienanzeigen erstellen, die
// auch auf weiteren bekannten Immobilienportalen ver&ouml;ffentlicht
// werden. Die Registrierung ist kostenlos. Die Erstellung einer
// Immobilienanzeige dagegen ist kostenpflichtig.
// <br />
// <br />
// <br />
// &sect; 3 Immobilienanzeigen erstellen
// <br />
// <br />
// (1) Die Erstellung einer Immobilienanzeige ist kostenpflichtig. Der
// Nutzer kann zwischen mehreren kostenpflichtigen Buchungspaketen mit
// unterschiedlichem Leistungsumfang w&auml;hlen. Eine &Uuml;bersicht
// nebst Preisliste ist unter&nbsp;
// <a href="https://www.321maklerfrei.de/#preise">
//   https://www.321maklerfrei.de/#Preise
// </a>
// <br />
// abrufbar. Die Buchung erfolgt &uuml;ber entsprechende
// Formulareingaben, die mit der Absendung eines Bestellbuttons
// abschlie&szlig;en.
// <br />
// (2) Mit der Absendung des Buttons erkl&auml;rt der Nutzer sein
// Einverst&auml;ndnis mit der Unterwerfung unter die vorliegenden
// Gesch&auml;ftsbedingungen und gibt ein verbindliches Angebot zum
// Abschluss eines kostenpflichtigen Vertrags ab. Weiterhin erkl&auml;rt
// sich der Nutzer mit Absendung des Buttons damit einverstanden, dass
// seine Immobilienanzeige auf dem Portal sowie ausgew&auml;hlten
// weiteren Immobilienportalen eingestellt und somit &ouml;ffentlich
// zug&auml;nglich gemacht werden. Dies gilt auch f&uuml;r eingestelltes
// Bildmaterial. Mit dem Absenden des Buttons erkl&auml;rt sich der
// Nutzer ferner damit einverstanden, dass seine Kontaktdaten zur
// Kontaktaufnahme - auch zu Werbezwecken &ndash; verwendet werden. Die
// Einwilligung kann jederzeit gegen&uuml;ber dem Betreiber widerrufen
// werden.
// <br />
// (3) Der Betreiber schickt dem Nutzer eine Buchungsbest&auml;tigung per
// E-Mail zu, in welcher die Bestellung des Nutzers nochmals
// aufgef&uuml;hrt wird und die der Nutzer ausdrucken kann. Die
// Bestellbest&auml;tigung dokumentiert lediglich, dass die Bestellung
// des Nutzers beim Betreiber eingegangen ist und stellt keine Annahme
// des Antrags dar. Der Vertrag kommt erst durch Annahmeerkl&auml;rung
// des Betreibers mit gesonderter E-Mail oder durch die Freischaltung der
// Anzeige zustande. Der Betreiber ist nicht verpflichtet, die
// Freischaltung vorzunehmen. Ein Anspruch des Nutzers auf Abschluss
// eines Vertrags besteht ebenfalls nicht.
// <br />
// (4) Der Betreiber beh&auml;lt sich vor, die Freischaltung der Anzeige
// erst dann vorzunehmen, wenn die vereinbarte Zahlung vollst&auml;ndig
// dem Konto des Betreibers gutgeschrieben wurde. Hat der Betreiber
// berechtigte Einw&auml;nde, sieht der Betreiber von einer
// Annahmeerkl&auml;rung oder Freischaltung ab. Ein Vertrag kommt in
// diesem Fall nicht zustande.
// <br />
// (5) Der Nutzer best&auml;tigt mit dem Klicken des Bestellbuttons, dass
// es sich bei der inserierten Immobile nicht um folgendes handelt:&nbsp;
// <br />
// 1. Eine frei erfundene Immobilie, die nicht real existiert.
// <br />
// 2. Ein Neubau Projekt (j&uuml;nger als 3 Jahre) mit mehr als 4
// Wohneinheiten.&nbsp;
// <br />
// Sollte o.g. zutreffen, beh&auml;lt sich der Betreiber vor, eine
// L&ouml;schung der Anzeige vorzunehmen. Die Zahlung wird in diesem
// Falle vollst&auml;ndig r&uuml;ckerstattet, insofern dem Betreiber
// durch Inserierung o.g. Objekts keine Unkosten entstanden sind.
// <br />
// <br />
// <br />
// &sect; 4 Vertragstextspeicherung
// <br />
// <br />
// (1) Der Vertragstext und die Bestelldaten werden von dem Betreiber
// zwar gespeichert, sind jedoch nicht uneingeschr&auml;nkt online
// abrufbar. Die Bestellbest&auml;tigung enth&auml;lt alle wesentlichen
// Bestelldaten.
// <br />
// (2) Der Nutzer hat weiterhin die M&ouml;glichkeit, die Allgemeinen
// Gesch&auml;ftsbedingungen sowie alle eingegebenen Daten w&auml;hrend
// des Bestellvorgangs &uuml;ber die Druckfunktion des Browsers
// auszudrucken oder &uuml;ber die Speicherfunktion des Browsers
// abzuspeichern.
// <br />
// <br />
// <br />
// &sect; 5 Preise, Zahlungsmodalit&auml;ten, Verzug
// <br />
// <br />
// (1) S&auml;mtliche Preise verstehen sich einschlie&szlig;lich der
// jeweils gesetzlich g&uuml;ltigen Mehrwertsteuer, es sei denn, der
// Nutzer hat seinen Sitz au&szlig;erhalb des Gebietes der Bundesrepublik
// Deutschland.
// <br />
// (2) Die Zahlung erfolgt per Vorkasse, soweit dem Nutzer nicht eine
// Zahlung auf Rechnung nachgelassen ist. Dem Nutzer stehen die auf der
// Webseite genannten Zahlungsmodalit&auml;ten zur Verf&uuml;gung.
// <br />
// (3) Ausn&auml;hmlich der Zahlung auf Rechnung hat die Zahlung des
// Kaufpreises innerhalb von 7 Tagen nach Vertragsschluss zu erfolgen.
// Soweit dem Nutzer die Zahlung auf Rechnung nachgelassen wird, ist der
// Betrag innerhalb von 7 Tagen nach Erhalt der Rechnung zu zahlen.
// Ma&szlig;geblich ist die Gutschrift der vollst&auml;ndigen
// Zahlungssumme auf dem Konto des Betreibers.
// <br />
// (4) Im Verzugsfall hat der Nutzer dem Betreiber Verzugszinsen in
// H&ouml;he von 5 Prozentpunkten &uuml;ber dem Basiszinssatz zu zahlen.
// Die Verpflichtung des Nutzers zur Zahlung von Verzugszinsen
// schlie&szlig;t die Geltendmachung weiterer Verzugssch&auml;den durch
// den Betreiber nicht aus. Der Betreiber beh&auml;lt sich vor, eine
// bereits freigeschaltete Anzeige im Verzugsfall zu deaktivieren.
// </p>

// <p>&nbsp;</p>

// <p>&sect; 6 Laufzeit und K&uuml;ndigung</p>
// <br/>
// <p>
// Die Vereinbarung bleibt wirksam, bis sie von Ihnen oder vom Betreiber
// gek&uuml;ndigt werden.
// </p>

// <p>
// Die Vereinbarung kann sowohl durch den Betreiber als auch durch Sie
// jederzeit ohne Fristen zum Monatsende gek&uuml;ndigt werden.
// </p>

// <p>
// Der Betreiber kann die Vereinbarung aus wichtigem Grund k&uuml;ndigen
// oder Ihren Zugang zu den Diensten aus wichtigem Grund sperren,
// insbesondere im Falle einer unberechtigten Nutzung der Dienste
// und/oder der Inhalte und/oder der wesentlichen oder wiederholten
// Nichteinhaltung der Vereinbarung Ihrerseits, wobei wir Ihre
// berechtigten Interessen ber&uuml;cksichtigen werden. F&uuml;r den
// Fall, dass Sie oder der Betreiber die Vereinbarung k&uuml;ndigen oder
// der Betreiber Ihren Zugang zu den Diensten sperrt, erkl&auml;ren Sie
// sich damit einverstanden, dass der Betreiber Ihnen gegen&uuml;ber nur
// nach Ma&szlig;gabe der Bestimmungen haftet. Ihr gesetzliches Recht zur
// K&uuml;ndigung aus wichtigem Grund bleibt unber&uuml;hrt.
// </p>

// <p>
// Eine K&uuml;ndigung ist direkt innerhalb des Nutzerkontos
// m&ouml;glich, unter: Meine Anzeigen / Meine Immobilien. Um die
// K&uuml;ndigung abzuschlie&szlig;en, m&uuml;ssen Sie nur auf den grauen
// Button &quot;Abo k&uuml;ndigen&quot; klicken und dies best&auml;tigen.
// Ihre K&uuml;ndigungsbest&auml;tigung erscheint direkt im Konto. Die
// Anzeige l&auml;uft nach dem gebuchten Zeitraum automatisch aus und es
// erfolgt keine erneute Zahlung.
// </p>

// <p>
// <br />
// <br />
// &sect; 7 Zur&uuml;ckbehaltungsrecht
// <br />
// <br />
// Ein Zur&uuml;ckbehaltungsrecht steht dem Nutzer nur zu, wenn der
// Gegenanspruch auf demselben Vertragsverh&auml;ltnis beruht.
// <br />
// <br />
// <br />
// &sect; 8 Gesetzliches M&auml;ngelhaftungsrecht
// <br />
// <br />
// (1) Soweit das Portal unentgeltlich nutzbar ist und der Betreiber
// gegen&uuml;ber dem Nutzer keiner vertraglichen Verpflichtung
// unterliegt, weist der Betreiber darauf hin, dass er keine Garantie
// f&uuml;r die dauerhafte Verf&uuml;gbarkeit oder Nutzbarkeit des
// Portals &uuml;bernimmt. Der Server ist &uuml;ber eine komplexe
// Systemarchitektur an das Internet angebunden. Einschr&auml;nkungen
// oder Beeintr&auml;chtigungen der Verf&uuml;gbarkeit oder Nutzbarkeit
// k&ouml;nnen insbesondere auf Umst&auml;nden beruhen, die
// au&szlig;erhalb des Einflussbereiches des Betreibers liegen. Darunter
// fallen insbesondere Handlungen Dritter, die nicht im Auftrag des
// Betreibers handeln, von dem Betreiber nicht beeinflussbare technische
// Bedingungen des Internets sowie h&ouml;here Gewalt.
// <br />
// (2) Der Betreiber f&uuml;hrt zur Sicherheit des Netzbetriebs
// regelm&auml;&szlig;ig Wartungsarbeiten durch. Zu diesem Zwecke wird er
// das Portal unter Ber&uuml;cksichtigung der Belange des Nutzers
// vor&uuml;bergehend einstellen oder die Nutzbarkeit beschr&auml;nken.
// <br />
// <br />
// <br />
// &sect; 9 Haftung des Betreibers gegen&uuml;ber dem Nutzer
// <br />
// <br />
// (1) Soweit das Portal unentgeltlich nutzbar ist und der Betreiber
// gegen&uuml;ber dem Nutzer keiner vertraglichen Verpflichtung
// unterliegt, ist eine Haftung des Betreibers ausgeschlossen. Im
// &Uuml;brigen gelten die nachfolgenden Haftungsbestimmungen (Abs. 2 bis
// 6).
// <br />
// (2) Der Betreiber haftet uneingeschr&auml;nkt f&uuml;r
// Schadensersatzanspr&uuml;che des Nutzers aus der Verletzung des
// Lebens, des K&ouml;rpers, der Gesundheit oder aus der
// vors&auml;tzlichen oder grob fahrl&auml;ssigen Verletzung wesentlicher
// Vertragspflichten sowie f&uuml;r sonstige Sch&auml;den, die auf einer
// vors&auml;tzlichen oder grob fahrl&auml;ssigen Pflichtverletzung des
// Betreibers beruhen. Dies gilt auch, soweit die vorgenannten
// Verletzungen durch einen gesetzlichen Vertreter des Betreibers oder
// einen Erf&uuml;llungsgehilfen begangen wurden. Wesentliche
// Vertragspflichten sind solche, deren Erf&uuml;llung zur Erreichung des
// Vertragszwecks notwendig ist.
// <br />
// (3) Wenn die Verletzung wesentlicher Vertragspflichten einfach
// fahrl&auml;ssig verursacht wurde, haftet der Betreiber nur auf den
// vertragstypischen, vorhersehbaren Schaden, es sei denn, es handelt
// sich um Schadensersatzanspr&uuml;che des Nutzers aus einer Verletzung
// des Lebens, des K&ouml;rpers oder der Gesundheit.
// <br />
// (4) Die Einschr&auml;nkungen der Abs. 1 und 2 gelten auch zugunsten
// der gesetzlichen Vertreter und Erf&uuml;llungsgehilfen des Betreibers,
// wenn Anspr&uuml;che unmittelbar gegen diese geltend gemacht werden.
// <br />
// (5) Die Vorschriften des Produkthaftungsgesetzes bleiben
// unber&uuml;hrt.
// <br />
// (6) Im &Uuml;brigen schlie&szlig;t der Betreiber seine Haftung aus.
// Der Betreiber haftet insbesondere nicht f&uuml;r die Aktualit&auml;t
// der Suchanfragen oder die Vollst&auml;ndigkeit und Richtigkeit der
// Kontaktdaten.
// <br />
// <br />
// <br />
// &sect; 10 Haftung des Betreibers gegen&uuml;ber Dritten
// <br />
// <br />
// (1) Im Falle von Vertragsschl&uuml;ssen ist der Betreiber weder
// Vertragspartei noch Handelsmakler oder -vertreter. Die &sect;&sect; 92
// ff., 84ff. HGB finden keine Anwendung. Die in dem Portal eingestellten
// Anzeigen, Angebote, Informationen, Werbeaussagen oder sonstigen
// Inhalte stellen keine Erkl&auml;rungen des Betreibers dar. Jegliche
// Anspr&uuml;che im Zusammenhang mit Inhalten von Nutzern sind
// unmittelbar gegen&uuml;ber dem jeweiligen Nutzer geltend zu machen.
// <br />
// (2) Der Betreiber &uuml;bernimmt keine Gew&auml;hr f&uuml;r die
// Vollst&auml;ndigkeit, Richtigkeit oder Rechtm&auml;&szlig;igkeit der
// Anzeigen von Nutzern. Hierf&uuml;r ist der Nutzer allein
// verantwortlich. Der Betreiber beh&auml;lt sich lediglich vor, Inhalte,
// die &uuml;ber das Portal &uuml;bermittelt werden, zum Zwecke der
// Optimierung der Darstellung auf der Webseite, mobilen Endger&auml;ten
// und/oder &uuml;ber Social-Media-Konten technisch zu bearbeiten.
// <br />
// <br />
// <br />
// &sect; 11 Pflichten des Nutzers
// <br />
// <br />
// (1) Der Nutzer versichert bei der Absendung von Formulareingaben und
// Buchungen, dass er vollj&auml;hrig und voll gesch&auml;ftsf&auml;hig
// ist. Gewerbliche Anbieter von Immobilien sind zudem verpflichtet, die
// unternehmerische T&auml;tigkeit und ggf. den Vermittlungsauftrag
// gegen&uuml;ber dem Betreiber auf Verlangen durch Vorlage
// entsprechender Unterlagen nachzuweisen.
// <br />
// (2) Der Nutzer verpflichtet sich, in seinen Anzeigen stets
// wahrheitsgem&auml;&szlig;e Angaben zu machen. Es ist dem Nutzer
// ausdr&uuml;cklich untersagt, Anzeigen mit Inhalten zu gestalten, die
// gegen gesetzliche Vorschriften oder Rechte Dritter versto&szlig;en
// (z.B. marken-, patent-, urheber-oder
// pers&ouml;nlichkeitsrechtsverletzende Inhalte, Inhalte
// pornographischer oder extremistischer Natur). Es ist dem Nutzer
// weiterhin untersagt, Immobilienangebot zu ver&ouml;ffentlichen, in
// denen eine Courtage oder Vermittlungsprovision verlangt wird. Es ist
// dem Nutzer zuletzt untersagt, in den Anzeigen Firmen oder Webseiten zu
// platzieren.
// <br />
// (3) Der Nutzer verpflichtet sich, den Betreiber von s&auml;mtlichen
// Anspr&uuml;chen Dritter durch eine von ihm begangene Rechtsverletzung
// oder sonstiges vertragswidriges Nutzungsverhalten i.S. des Absatzes 2
// freizustellen und im Streitfalle die angemessenen Kosten der
// Rechtsverteidigung zu &uuml;bernehmen. Der Betreiber beh&auml;lt sich
// vor, Anzeigen, die gegen Absatz 2 versto&szlig;en, umgehend nach
// Kenntniserlangung zu l&ouml;schen und das Nutzerkonto ohne
// Vorank&uuml;ndigung zu sperren.
// <br />
// (4) Der Nutzer ist verpflichtet, die Zugangsdaten zu dem Portal
// gegen&uuml;ber unbefugten Dritten geheimzuhalten und sicher vor dem
// Zugriff durch unbefugte Dritte aufzubewahren. Der Nutzer ist ferner
// verpflichtet, den Betreiber unverz&uuml;glich zu informieren, wenn ihm
// Anhaltspunkte bekannt sind, dass ein Nutzerkonto von Dritten
// missbraucht wurde.
// <br />
// <br />
// <br />
// &sect; 12 Laufzeit, K&uuml;ndigung
// <br />
// <br />
// (1) Die Laufzeit des Vertrags richtet sich nach der Laufzeit des
// vertraglich vereinbarten Buchungspakets. Nach Ablauf der vereinbarten
// Laufzeit erfolgt die automatische Verl&auml;ngerung. Eine
// K&uuml;ndigung des Nutzers ist jederzeit per E-Mail, telefonisch oder
// &uuml;ber den Button unter &quot;Meine Anzeigen&quot; -
// &quot;Abonnement beenden&quot; m&ouml;glich. Wird eine Anzeige aus
// Gr&uuml;nden gel&ouml;scht oder deaktiviert, die der Anbieter nicht zu
// vertreten hat, erfolgt keine anteilige Erstattung bereits geleisteter
// Zahlungen.
// <br />
// (2) Das Recht beider Vertragsparteien zur au&szlig;erordentlichen
// K&uuml;ndigung aus wichtigem Grund bleibt hiervon unber&uuml;hrt.
// </p>

// <p>
// <br />
// &sect; 13 Hinweise zur Datenverarbeitung
// <br />
// <br />
// Der Anbieter misst dem Schutz der Privatsph&auml;re des Nutzers
// h&ouml;chste Bedeutung zu. Die Verarbeitung aller Daten, die dem
// Anbieter zur Verf&uuml;gung gestellt werden, geschieht
// ausschlie&szlig;lich unter strenger Beachtung der
// Datenschutz-Grundverordnung (EU DSGVO) sowie aller sonstigen in den
// Mitgliedstaaten der EU geltenden Datenschutzgesetze bzw. Bestimmungen
// mit datenschutzrechtlichem Charakter. Dies gilt insbesondere f&uuml;r
// die Verarbeitung personenbezogener Daten. Weitere Informationen
// enth&auml;lt die Datenschutzerkl&auml;rung, die unter
// https://www.321maklerfrei.de/datenschutz abrufbar ist.
// <br />
// <br />
// <br />
// &sect; 14 Streitbeilegung
// <br />
// <br />
// (1) Die Europ&auml;ische Kommission stellt unter dem Link
// http://ec.europa.eu/consumers/odr/ eine Plattform zur
// Online-Streitbeilegung (OS) bereit. Verbraucher k&ouml;nnen diese
// Plattform f&uuml;r die Beilegung ihrer Streitigkeiten nutzen. Die
// E-Mail-Adresse des Veranstalters lautet support@321maklerfrei.de.
// <br />
// <br />
// <br />
// &sect; 15 Schlussbestimmungen
// <br />
// <br />
// (1) Auf Vertr&auml;ge zwischen dem Betreiber und den Nutzer findet das
// Recht der Bundesrepublik Deutschland Anwendung. Gegen&uuml;ber
// Verbrauchern gilt diese Rechtswahl nur insoweit, als dadurch nicht der
// gew&auml;hrte Schutz durch zwingende Bestimmungen des Rechts des
// Staates, in dem der Verbraucher seinen gew&ouml;hnlichen Aufenthalt
// hat, entzogen wird. Die Vertragssprache ist Deutsch.
// <br />
// (2) Sofern es sich bei dem Nutzer um einen Kaufmann, eine juristische
// Person des &ouml;ffentlichen Rechts oder um ein
// &ouml;ffentlich-rechtliches Sonderverm&ouml;gen handelt, ist
// Gerichtsstand f&uuml;r alle Streitigkeiten aus
// Vertragsverh&auml;ltnissen zwischen dem Nutzer und dem Betreiber der
// Sitz des Betreibers. Das Recht des Betreibers, das Gericht an einem
// anderen gesetzlichen Gerichtsstand anzurufen, bleibt hiervon
// unber&uuml;hrt.
// <br />
// (3) Die Nutzungsbedingungen bleiben auch bei rechtlicher Unwirksamkeit
// einzelner Punkte in ihren &uuml;brigen Teilen verbindlich.
// </p>
// <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 mb-16">
// {children}
// </div>