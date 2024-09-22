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
        <title>Impressum - 321maklerfrei</title>
      </Helmet>
      <div className="text-left w-11/12 lg:w-3/4">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-700">Impressum</h1>
        <p className="my-4 text-md text-gray-600">
          321maklerfrei.de
          <br />
          Dominik Wagenmann
          <br />
          Porschestr. 2c
          <br />
          38440 Wolfsburg
          <br />
          <br />
          Vertretungsberechtigte Gesellschafter:
          <br />
          Dominik Wagenmann
          <br />
          <br />
          Kontakt:
          <br />
          Tel.: +49 (0) 1522 – 1453300
          <br />
          E-Mail: hallo@321maklerfrei.de
          <br />
          <br />
          Zuständige Aufsichtsbehörde für die Tätigkeit nach § 34c GewO:
          <br />
          Industrie- und Handelskammer Lüneburg-Wolfsburg
          <br />
          Am Sande
          <br />
          121335 Lüneburg
          <br />
          <br />
          Die europäische Kommission stellt eine Plattform zur
          Onlinestreitbeilegung (OS) bereit, die Sie hier finden:
          <br />
          https://ec.europa.eu/consumers/odr/.
          <br />
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
