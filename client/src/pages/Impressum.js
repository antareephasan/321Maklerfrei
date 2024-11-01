import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@windmill/react-ui";
import { DesktopNavbar } from "../components/HeaderLanding";
import { MobileNavbar } from "../components/HeaderLanding";
import { FooterLanding } from "../components/FooterLanding";
import { Helmet } from "react-helmet";
import axios from 'axios'; // Assuming you'll use axios for submitting data
import { config } from "../assets/config/config";

const apiUrl = config.api.url;


function SectionFeaturesGrid({ children }) {

  const [contact, setContact] = useState("")

  useEffect(() => {
    // Fetch Terms and Conditions
    const fetchContact = async () => {
      try {
        const response = await axios.get(`${apiUrl}/manage-web/get-about-us`); // Adjust this URL as needed        console.log("response", response)
        setContact(response.data.data.description);
      } catch (error) {
        console.error("Error fetching contact:", error);
      }
    };

    fetchContact();
  }, []);


  return (
    <section className="flex justify-center py-8 md:py-16 bg-gray-50">
      <Helmet>
        <title>Impressum - 321maklerfrei</title>
      </Helmet>
      <div className="text-left w-11/12 lg:w-3/4">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-700">Impressum</h1>
        
        <div dangerouslySetInnerHTML={{  __html: contact}} />

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


