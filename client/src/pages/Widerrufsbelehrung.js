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
        <title>321maklerfrei | Widerrufsbelehrung</title>
      </Helmet>
      <div className="text-left w-11/12 lg:w-3/4">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-700">
          Widerrufsbelehrung
        </h1>
        <p className="my-5">
          Verbraucher i.S. des &sect; 13 BGB ist jede nat&uuml;rliche Person,
          die ein Rechtsgesch&auml;ft zu Zwecken abschlie&szlig;t, die
          &uuml;berwiegend weder ihrer gewerblichen noch ihrer
          selbst&auml;ndigen beruflichen T&auml;tigkeit zugerechnet werden
          k&ouml;nnen. Verbrauchern i.S. des &sect; 13 BGB stehen nachfolgendes
          Widerrufsrecht zu:
        </p>

        <p className="my-3 text-xl">Widerrufsrecht</p>

        <p className="my-3">
          Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von
          Gr&uuml;nden diesen Vertrag zu widerrufen.
        </p>

        <p className="">
          Die Widerrufsfrist betr&auml;gt vierzehn Tage ab dem Tag des
          Vertragsabschlusses.
        </p>

        <p className="my-3">Um Ihr Widerrufsrecht auszu&uuml;ben, m&uuml;ssen Sie uns(</p>

        <p className="my-3">
          321maklerfrei.de - Inh. Dominik Wagenmann
          <br />
          Telefon: +49 (0) 1522 – 1453300
          <br />
          E-Mail: support@321maklerfrei.de
        </p>

        <p className="my-3">
          ) mittels einer eindeutigen Erkl&auml;rung (z.B. ein mit der Post
          versandter Brief, Telefax oder E-Mail) &uuml;ber Ihren Entschluss,
          diesen Vertrag zu widerrufen, informieren. Sie k&ouml;nnen daf&uuml;r
          das Muster-Widerrufsformular verwenden, das jedoch nicht
          vorgeschrieben ist.
        </p>

        <p className="my-3">
          Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung
          &uuml;ber die Aus&uuml;bung des Widerrufsrechts vor Ablauf der
          Widerrufsfrist absenden.
        </p>

        <p className="my-3 text-xl">Folgen des Widerrufs</p>

        <p className="my-3">
          Wenn Sie diesen Vertrag&nbsp;widerrufen, haben wir Ihnen alle
          Zahlungen, die wir von Ihnen erhalten haben unverz&uuml;glich und
          sp&auml;testens binnen vierzehn Tagen ab dem Tag zur&uuml;ckzuzahlen,
          an dem die Mitteilung &uuml;ber Ihren Widerruf dieses Vertrags bei uns
          eingegangen ist. F&uuml;r diese R&uuml;ckzahlung verwenden wir
          dasselbe Zahlungsmittel, das Sie bei der urspr&uuml;nglichen
          Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde
          ausdr&uuml;cklich etwas anderes vereinbart; in keinem Fall werden
          Ihnen wegen dieser R&uuml;ckzahlung Entgelte berechnet.
        </p>

        <p className="my-3">
          Haben Sie verlangt, dass die Dienstleistungen w&auml;hrend der
          Widerrufsfrist beginnen soll, so haben Sie uns einen angemessenen
          Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie
          uns von der Aus&uuml;bung des Widerrufsrechts hinsichtlich dieses
          Vertrags unterrichten, bereits erbrachten Dienstleistungen im
          Vergleich zum Gesamtumfang der im Vertrag vorgesehenen
          Dienstleistungen entspricht.
        </p>

        <p className="my-3 text-xl">Erl&ouml;schen des Widerrufs</p>

        <p className="my-3">
          Das Widerrufsrecht erlischt bei einem Vertrag zur Erbringung von
          Dienstleistungen auch dann, wenn wir die Dienstleistung
          vollst&auml;ndig erbracht haben und mit der Ausf&uuml;hrung der
          Dienstleistung erst begonnen haben, nachdem Sie dazu Ihre
          ausdr&uuml;ckliche Zustimmung gegeben haben und gleichzeitig Ihre
          Kenntnis davon best&auml;tigt haben, dass Sie Ihr Widerrufsrecht bei
          vollst&auml;ndiger Vertragserf&uuml;llung durch uns verlieren.
        </p>

        <p className="my-3">- Ende der Widerrufsbelehrung -</p>

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

function Widerrufsbelehrung() {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
      <SectionFeaturesGrid />
      <FooterLanding />
    </>
  );
}

export default Widerrufsbelehrung;
