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

  const [privacyAndPolicy, setPrivacyAndPolicy] = useState("")

  useEffect(() => {
    // Fetch Terms and Conditions
    const fetchPrivacyAndPolicy = async () => {
      try {
        const response = await axios.get(`${apiUrl}/manage-web/get-privacy-policy`); // Adjust this URL as needed        console.log("response", response)
        setPrivacyAndPolicy(response.data.data.description);
      } catch (error) {
        console.error("Error fetching terms and conditions:", error);
      }
    };

    fetchPrivacyAndPolicy();

  }, []);

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


        <div dangerouslySetInnerHTML={{  __html: privacyAndPolicy}} />
       

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
