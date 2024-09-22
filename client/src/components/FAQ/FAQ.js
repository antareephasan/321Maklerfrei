import React from "react";
import SectionTitle from "../Typography/SectionTitle";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { useTranslation } from "react-i18next";
import "../FAQ/style.css";

function Account() {
  const { t } = useTranslation();
  return (
    <Accordion className="text-md font-regular" allowZeroExpanded="true">
      <SectionTitle>{t("Account")}</SectionTitle>
      <p className="my-3">
        Hier findest du die häufigsten Fragen und Probleme zu deinem Konto.
      </p>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Wie kann ich mein Passwort ändern?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p className="font-light">
            Um dein Passwort zu ändern, klicke links auf "Einstellungen". Hier
            kannst du ein neues Passwort eingeben und speichern.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Wie viele Konten darf ich haben?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Jeder kann beliebig viele Nutzerkonten erstellen und nutzen. Wir
            empfehlen jedoch alle Anzeigen in einem Nutzerkonto zu erstellen.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Wie kann ich die Kontobenachrichtigungen ausschalten?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p className="font-light">
            Um keine Mails mehr zu empfangen, klicke in einem der E-Mail links
            auf abmelden.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Wie kann ich mein Konto löschen?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p className="font-light">
            Um dein Konto zu löschen, sende uns bitte eine kurze Anfrage an
            support@123provisionsfrei.de
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}

function Payment() {
  const { t } = useTranslation();
  return (
    <Accordion
      className="text-md font-regular bg-white"
      allowZeroExpanded="true"
    >
      <SectionTitle>{t("Payment")}</SectionTitle>
      <p className="my-3">
        Hier findest du die häufigsten Fragen rund um das Thema Zahlung.
      </p>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Wie kann ich das Abonnement kündigen?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p className="font-light">
            Um die automatische Verlängerung zu kündigen, klicke auf "Meine
            Immobilien" und klicke auf den Button "Abo kündigen" und bestätige es. Anschließend wird die Restlaufzeit angezeigt.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Welche Zahlungsarten gibt es?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p className="font-light">
            Die Bezahlung ist mit Paypal, Kreditkarte und SEPA Lastschrift
            möglich.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Bleibt auch bei gestopptem Abonnement die Anzeige aktiv?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p className="font-light">
            Nachdem das Abonnement gestoppt wurde, läuft die Anzeige nach der
            Restlaufzeit ab. Du kannst die Anzeige jedoch jederzeit manuell
            stoppen.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}

function Listings() {
  const { t } = useTranslation();
  return (
    <Accordion
      className="text-md font-regular bg-white"
      allowZeroExpanded="true"
    >
      <SectionTitle>{t("Listings")}</SectionTitle>
      <p className="my-3">
        Hier findest du die häufigsten Fragen zu deinen Immobilienanzeigen.
      </p>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Wann wird meine Anzeige auf den Portalen veröffentlicht?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p className="font-light">
            Nachdem die Anzeige den Status "Aktiv" anzeigt, werden die Daten von
            uns geprüft. Dies dauert in der Regel nicht länger als eine Stunde
            und schon wird die Immobilie auf die Portale übertragen.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Wie nehmen Interessenten Kontakt zu mir auf?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p className="font-light">
            Anfragen von Interessenten werden an deine E-Mail weitergeleitet.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Wie kann ich meine Immobilienanzeige ändern / bearbeiten?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p className="font-light">
            Immobilienanzeigen können jederzeit geändert / bearbeitet werden.
            Klicke einfach auf "Meine Immobilien", gib die gewünschten
            Änderungen ein und klicke auf "Speichern".
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Wie schnell sind die Änderungen auf den Portalen sichtbar?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Bei Immowelt und Immonet kann es bis zu 30 Minuten dauern, bis die
            Änderungen sichtbar sind. Immobilienscout24 und Ebay Kleinanzeigen
            erscheinen die Änderungen schon vorher.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Wie viele Anfragen bekomme ich für meine Immobilie?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p className="font-light">
            Das hängt vorallem von der Lage, dem Preis und dem Exposé ab. Unser
            Formular und die Art der Anzeigen sind auf maximale Sichtbarkeit
            ausgerichtet.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Wie kann ich die Immobilienanzeige pausieren?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p className="font-light">
            Nachdem das Abonnement gestoppt wurde, erscheint der Button "Anzeige
            pausieren". Sobald der Status "Inaktiv" erscheint, wird die Anzeige
            von uns deaktiviert und erscheint nicht mehr auf den Portalen.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Welche persönlichen Daten von mir werden auf den Portalen
            veröffentlicht?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p className="font-light">
            Es erscheinen nur die notwendigsten Daten zu der Immobilie und dir
            als Ansprechpartner. Wenn du das Häkchen "Nicht anzeigen" unter
            einer Angabe anklickst, wird der Datensatz nicht veröffentlicht.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Muss ich die genaue Adresse meines Hauses angeben?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p className="font-light">
            Für die optimale Bewerbung des Objekts ist es von Vorteil die genaue
            Adresse anzugeben. Du kannst aber das Häkchen "Adresse nicht
            anzeigen" anklicken und somit verhindern, dass die Adresse
            veröffentlicht wird.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Wie viele Bilder kann ich in einer Anzeige einstellen?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p className="font-light">
            In der Anzeige kannst du 50 Bilder, 15 Grundrisse und 1 PDF-Datei
            einstellen. Solltest du weniger als 50 Bilder haben und mehr als 15
            Grundrisse einstellen, kannst du die Grundrisse auch unter den
            Bildern hochladen. Manche Portale zeigen jedoch weniger als 50
            Bilder an, eBay Kleinanzeigen unterstützt bspw. nur max. 15 Fotos.
            Wir empfehlen daher, die wichtigsten Fotos auf den vorderen Plätzen
            zu positionieren.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}

function Other() {
  const { t } = useTranslation();
  return (
    <Accordion
      className="text-md font-regular bg-white"
      allowZeroExpanded="true"
    >
      <SectionTitle>{t("Others")}</SectionTitle>
      <p className="my-3">
        Häufige Fragen, die zu keinem Thema passen, werden hier aufgelistet.
      </p>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Wie könnt ihr billiger sein, als die Portale selbst?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p className="font-light">
            Durch die große Anzahl an Anzeigen, erhalten wir spezielle Konditionen. Diese reichen wir an dich als Nutzer weiter.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}

export { Account, Payment, Listings, Other };
