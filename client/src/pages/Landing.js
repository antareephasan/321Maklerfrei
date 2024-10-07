import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@windmill/react-ui";
import { HashLink } from "react-router-hash-link";
// import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "../components/FAQ/style.css";
import {
  PricingCardSale,
  PricingCardRent,
} from "../components/Cards/PricingCardLanding";
import trustpilot from "../assets/img/trustpilot_breit.svg";
import Explainer from "../assets/img/explainer.svg";
import ReactPlayer from "react-player";
import { AuthContext } from "../context/AuthContext";
import { FlowFactContext } from "../context/FlowFactContext";
import { DesktopNavbar } from "../components/HeaderLanding";
import { MobileNavbar } from "../components/HeaderLanding";
import { FooterLanding } from "../components/FooterLanding";
import { Button, Card, CardBody } from "@windmill/react-ui";
import { Testimonials } from "../components/Testimonials/Testimonials";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { NextStepIcon } from "../icons";

import createIcon from "../assets/img/offering1.png";
import transferIcon from "../assets/img/offering2.png";
import receiveIcon from "../assets/img/offering3.png";
import formIcon from "../assets/img/offering4.png";
import invoiceIcon from "../assets/img/offering5.png";
import chatIcon from "../assets/img/offering6.png";
import { ReactComponent as HeroBg } from "../assets/img/wave.svg";
import PropertySlider from "../components/PropertySlider";
import hero1 from "../assets/img/Thumbnail.png";
import { dictionary } from '../resources/multiLanguages'
import PricingSection from "../components/Pricing/PricingSection";
const StyledSwiper = styled.div`
  position: relative;
  pointer-events: all;
  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
  .btn {
    font-size: 28px;
    border-radius: 10px;
    margin: 5px;
    padding: 0px 10px 0px 5px;
    transition: 0.3s;
  }
  .btn:hover {
    transform: scale(1.2);
  }
  .btn.prev {
    padding: 0px 5px 0px 10px;
  }
  .buttons-swiper {
    display: flex;
    justify-content: space-between;
  }
`;
// SwiperCore.use([Navigation]);

function SetTitleTag() {
  return (
    <Helmet>
      <title>Home - 321maklerfrei</title>
    </Helmet>
  );
}

function SectionTwoBlocks({ children }) {
  return (
    <section className="flex justify-center pt-16 md:pt-8">
      <div className="w-full md:w-11/12 lg:w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">{children}</div>
      </div>
    </section>
  );
}

function SectionCenteredHeader({ children }) {
  return (
    <section className="flex justify-center py-12 md:py-16 hero-bg">
      <div className="flex flex-col text-center items-center w-11/12 lg:w-2/3 text-white">
        {children}
      </div>
    </section>
  );
}

// function ListingsDisplay({ recentImmobilien }) {
//   const [mySwiper, setMySwiper] = useState({});
//   return (
//     <section className="py-8 md:py-32 bg-gray-50">
//       <div className="max-w-4xl text-center justify-content-center mx-auto">
//         <p className="mt-8 text-3xl md:text-4xl font-bold text-gray-700">
//           Zuletzt veröffentlicht
//         </p>
//         <p className="mt-4 text-xl text-center text-gray-600">
//           Immobilien auf 321maklerfrei:
//         </p>
//       </div>
//       {recentImmobilien.length !== 0 && (
//         <>
//           <StyledSwiper className="listingslider gap-4 py-12 max-w-4xl text-center justify-content-center mx-auto">
//             <div className="buttons-swiper">
//               <button
//                 onClick={() => mySwiper.slidePrev()}
//                 title={"prev"}
//                 className="btn prev text-gray-500"
//                 type="button"
//               >
//                 {"<-"}
//               </button>
//               <button
//                 onClick={() => mySwiper.slideNext()}
//                 title={"next"}
//                 className="btn prev text-gray-500"
//                 type="button"
//               >
//                 {"->"}
//               </button>
//             </div>
//             <>
//               <Card>
//                 <Swiper
//                   spaceBetween={0}
//                   slidesPerGroup={1}
//                   loop={true}
//                   loopFillGroupWithBlank={true}
//                   onInit={(ev) => {
//                     setMySwiper(ev);
//                   }}
//                   navigation={true}
//                   modules={[Navigation]}
//                   className="mySwiper"
//                   breakpoints={{
//                     900: {
//                       slidesPerView: 3,
//                     },
//                     600: {
//                       slidesPerView: 1,
//                     },
//                   }}
//                 >
//                   {recentImmobilien.map((immo) => (
//                     <SwiperSlide key={immo.uniqId}>
//                       <CardBody className="">
//                         <div className="listing">
//                           <div className="text-left mx-auto">
//                             <div style={{ height: "200px" }}>
//                               <img
//                                 className="w-full h-full object-fit: cover;"
//                                 src={
//                                   immo.images.length === 0
//                                     ? "data:image/png;base64,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AAACEegAABCIQAcAgEAEOgAABCLQAQAgEIEOAACBCHQAAAhEoAMAQCACHQAAAhHoAAAQiEAHAIBABDoAAAQi0AEAIBCBDgAAgQh0AAAIRKADAEAgAh0AAAIR6AAAEIhABwCAQAQ6AAAEItABACAQgQ4AAIEIdAAACESgAwBAIAIdAAACEegAABCIQAcAgEAEOgAABCLQAQAgEIEOAACBCHQAAAhEoAMAQCACHQAAAhHoAAAQiEAHAIBABDoAAAQi0AEAIBCBDgAAgQh0AAAIRKADAEAgAh0AAAIR6AAAEIhABwCAQAQ6AAAEItABACAQgQ4AAIEIdAAACESgAwBAIAIdAAACEegAABCIQAcAgEAEOgAABCLQAQAgEIEOAACBCHQAAAhEoAMAQCACHQAAAhHoAAAQiEAHAIBABDoAAAQi0AEAIBCBDgAAgQh0AAAIRKADAEAgAh0AAAIR6AAAEIhABwCAQAQ6AAAEItABACAQgQ4AAIEIdAAACESgAwBAIAIdAAACEegAABCIQAcAgEAEOgAABCLQAQAgEIEOAACBCHQAAAhEoAMAQCACHQAAAhHoAAAQiEAHAIBABDoAAAQi0AEAIBCBDgAAgQh0AAAIRKADAEAgAh0AAAIR6AAAEIhABwCAQAQ6AAAEItABACAQgQ4AAIEIdAAACESgAwBAIAIdAAACEegAABCIQAcAgEAEOgAABCLQAQAgEIEOAACBCHQAAAhEoAMAQCACHQAAAhHoAAAQiEAHAIBABDoAAAQi0AEAIIyU/g8I3rkHYhpY9QAAAABJRU5ErkJggg=="
//                                     : immo.images[immo.images.length - 1]
//                                 }
//                                 alt={immo.title}
//                               />
//                             </div>
//                             <p title={immo.title} className="py-4 text-lg">
//                               {immo.title.slice(0, 25)}...
//                             </p>
//                             <p className="text-sm">
//                               Objektnummer: {immo.uniqId}
//                             </p>
//                             <p className="text-sm">Postleitzahl: {immo.zip}</p>
//                             <p className="text-sm">Stadt: {immo.city}</p>
//                             <p className="text-sm">Preis: {immo.price} €</p>
//                             <p className="link pt-4 text-sm font-medium">
//                               <Link
//                                 className="flex"
//                                 to={`/immobilien/id/${immo.uniqId}`}
//                               >
//                                 Mehr erfahren -&gt;
//                               </Link>
//                             </p>
//                           </div>
//                         </div>
//                       </CardBody>
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               </Card>
//             </>
//           </StyledSwiper>
//           <div className="text-center">
//             <Link to="/immobilien/1">
//               <Button layout="outline" size="larger">
//                 Immobilien ansehen -&gt;
//               </Button>
//             </Link>
//           </div>
//         </>
//       )}
//       {recentImmobilien.length === 0 && (
//         <div className="listingslider gap-4 py-12 max-w-4xl text-center justify-content-center mx-auto">
//           Loading...
//         </div>
//       )}
//     </section>
//   );
// }

function SectionFeaturesGrid({ children }) {
  return (
    <section
      id="Leistungen"
      className="flex justify-center py-12 md:py-16 bg-gray-50"
    >
      <div className="text-center w-11/12 lg:w-3/4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700">
          Unsere Leistungen fur unsere Kunden
        </h2>
        <p className="my-4 text-xl text-gray-600">
          Funktionen die du für den Verkauf brauchst.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16 mb-16">
          {children}
        </div>
        {/* <div className="flex my-5 justify-center mx-auto">
          <Link to="/auth/create-account">
            <Button size="larger" className="w-full">
              Immobilie inserieren
            </Button>
          </Link>
        </div> */}
      </div>
    </section>
  );
}

function FeatureCard({ title, description, img }) {
  return (
    <Card colored className="bg-white shadow-lg">
      <CardBody className="p-6 flex h-full">
        <div className="flex flex-row gap-5 justify-around items-center">
          <img
            className="h-12 w-12"
            src={img}
          />
          <div className="flex flex-col gap-2 items-center justify-center">
            <p className="text-lg text-gray-600 font-semibold text-left w-full">{title}</p>
            <p className="text-gray-500 text-left w-full">{description}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

function StepCard({ header, title, description }) {
  return (
    <div className="flex flex-col gap-2 justify-between bg-white  border rounded-3xl p-10 shadow-sm w-full">
      <h1 className="w-full text-left text-2xl text-gray-600 font-bold mb-2">
        {header}
      </h1>
      <h3 className="w-full text-left text-xl text-gray-600 font-semibold ">
        {title}
      </h3>
      <p className="w-full text-left text-sm text-gray-400 font-light">
        {description}
      </p>
    </div>
  )
}

function Landing() {
  const { user } = useContext(AuthContext);
  const { recentImmobilien } = useContext(FlowFactContext);
  const languageReducer = "de"
  return (
    <div>
      <DesktopNavbar />
      <MobileNavbar />

      <main>
        <SetTitleTag />

        <div className="pt-0 bg-gray-50 hero-bg">
          <div className="flex justify-center items-center">
            <div className="w-full md:w-11/12 lg:w-3/4">
              <div className="md:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12">

                <div className="flex flex-col justify-center px-4 lg:px-0">
                  <p className="mb-4 mt-10 leading-36 text-3xl md:text-5xl font-bold text-white text-center md:text-left">
                    {dictionary["hero"][languageReducer]["title"]}
                  </p>
                  <p className="md:mt-2 mb-8 lg:w-5/6 text-xs md:text-md text-white text-center md:text-left">
                    {dictionary["hero"][languageReducer]["description"]}
                  </p>
                  <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center md:justify-start md:items-end">
                    {!user && (
                      <Link to="/auth/create-account">
                        <Button size="larger" className="rounded-xl">
                          {dictionary["hero"][languageReducer]["startedButton"]}
                        </Button>
                      </Link>
                    )}
                    {user && (
                      <Link to="/app">
                        <Button size="larger" className="rounded-xl">
                          {dictionary["hero"][languageReducer]["dashboardButton"]}
                        </Button>
                      </Link>
                    )}
                    <HashLink smooth to="/landing/#Preise">
                      <Button className="bg-gray-100 mt-2 md:mt-0 rounded-2xl" layout="link" size="regular">
                        {dictionary["hero"][languageReducer]["pricesButton"]}

                      </Button>
                    </HashLink>
                  </div>
                </div>

                <div className="flex justify-center md:h-auto md:px-0">
                  <div className="px-5 lg:px-0 hidden lg:mt-10 w-full h-full lg:block">
                    <ReactPlayer
                      controls={true}
                      width="100%"
                      height="360px"
                      url="https://www.youtube.com/embed/J1V4wG7ZgsY?si=i3mnRKZBNOVdAcpP"
                    />
                  </div>
                  <div className="px-5 lg:px-0 hidden md:mt-10 md:block w-full h-full lg:hidden">
                    <ReactPlayer
                      controls={true}
                      width="100%"
                      height="350px"
                      url="https://www.youtube.com/embed/J1V4wG7ZgsY?si=i3mnRKZBNOVdAcpP"
                    />
                  </div>

                  <div className="block md:hidden w-full h-full px-5">
                    <ReactPlayer
                      controls={true}
                      width="100%"
                      height="300px"
                      url="https://www.youtube.com/embed/J1V4wG7ZgsY?si=i3mnRKZBNOVdAcpP"
                      playsinline={true}

                    />

                  </div>
                </div>

              </div>
            </div>
          </div>



          {/* Work flow  or Process or Ablauf or steps */}
          <div className="pb-20 relative bg-transparent steps-bg mt-20">
            <PropertySlider />
            <h2
              id="Ablauf"
              className="pt-10 text-2xl lg:text-3xl text-center md:text-4xl font-bold text-gray-700"
            >
              {dictionary["working"][languageReducer]["title"]}
            </h2>
            <p className="mt-4 text-base lg:text-xl text-center text-gray-600 px-5">
              {dictionary["working"][languageReducer]["description"]}
            </p>

            <div className="flex justify-center items-center py-20">

              <div className="flex flex-col xl:flex-row gap-2 lg:gap-5 xl:gap-10 justify-between items-center w-full md:w-11/12 lg:w-3/4 px-5 lg:px-0">
                <StepCard
                  header={dictionary["working"][languageReducer]["tile1"]["title"]}
                  title={dictionary["working"][languageReducer]["tile1"]["subtitle"]}
                  description={dictionary["working"][languageReducer]["tile1"]["description"]}
                />
                <NextStepIcon className="fill-current text-blue-400 w-20 h-20 xl:w-40 xl:h-40 transform rotate-90 xl:rotate-0" />
                <StepCard
                  header={dictionary["working"][languageReducer]["tile2"]["title"]}
                  title={dictionary["working"][languageReducer]["tile2"]["subtitle"]}
                  description={dictionary["working"][languageReducer]["tile2"]["description"]}
                />
                <NextStepIcon className="fill-current text-blue-400 w-20 h-20 xl:w-40 xl:h-40 transform rotate-90 xl:rotate-0" />
                <StepCard
                  header={dictionary["working"][languageReducer]["tile3"]["title"]}
                  title={dictionary["working"][languageReducer]["tile3"]["subtitle"]}
                  description={dictionary["working"][languageReducer]["tile3"]["description"]}
                />
              </div>
            </div>

          </div>
        </div >



        {/* Leistungen or Our Services */}
        < SectionFeaturesGrid >
          <FeatureCard
            img={createIcon}
            title={
              dictionary["offerings"][languageReducer]["tile1"]["title"]
            }
            description={
              dictionary["offerings"][languageReducer]["tile1"][
              "description"
              ]
            }
          />
          <FeatureCard
            img={transferIcon}
            title={
              dictionary["offerings"][languageReducer]["tile2"]["title"]
            }
            description={
              dictionary["offerings"][languageReducer]["tile2"][
              "description"
              ]
            }
          />
          <FeatureCard
            img={receiveIcon}
            title={
              dictionary["offerings"][languageReducer]["tile3"]["title"]
            }
            description={
              dictionary["offerings"][languageReducer]["tile3"][
              "description"
              ]
            }
          />
          <FeatureCard
            img={formIcon}
            title={
              dictionary["offerings"][languageReducer]["tile4"]["title"]
            }
            description={
              dictionary["offerings"][languageReducer]["tile4"][
              "description"
              ]
            }
          />
          <FeatureCard
            img={invoiceIcon}
            title={
              dictionary["offerings"][languageReducer]["tile5"]["title"]
            }
            description={
              dictionary["offerings"][languageReducer]["tile5"][
              "description"
              ]
            }
          />
          <FeatureCard
            img={chatIcon}
            title={
              dictionary["offerings"][languageReducer]["tile6"]["title"]
            }
            description={
              dictionary["offerings"][languageReducer]["tile6"][
              "description"
              ]
            }
          />

          {/* <Card colored className="bg-white shadow-lg">
            <CardBody className="p-6">
              <div className="flex flex-row gap-5 justify-around items-start">
                <img
                  className="h-12 w-12"
                  src={chatIcon}
                />
                <div className="flex flex-col gap-2 items-center justify-center w-full">

                  <p className="text-lg text-gray-600 font-semibold text-left w-full">{dictionary["offerings"][languageReducer]["tile6"]["title"]}</p>

                  <p className="text-gray-500 text-left w-full">
                    Für jegliche Anliegen sind wir für Sie da.
                    <br />
                    Montag - Freitag 9- 17 Uhr
                    <br />
                    Telefonisch unter:
                    <br />
                    05361 83 44 843
                    <br />
                    per Mail
                    <br />
                    365 Tage im Jahr per Mail:
                    <br />
                    kontakt@321maklerfrei.de
                  </p>
                </div>

              </div>
            </CardBody>
          </Card> */}



        </SectionFeaturesGrid >

        {/* Reviews  or Rezensionen*/}
        < section id="Rezensionen" className="py-8 flex justify-center items-center  bg-gray-50" >
          <div className="w-full md:w-11/12 lg:w-3/4 flex flex-col gap-10 px-5 md:px-0">
            <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-700">
              {dictionary["testimonials"][languageReducer]["title"]}
            </h2>

            <Testimonials />
          </div>
        </section >

        {/* Price or Preise  and FAQ*/}
        < section id="Preise" className="py-8 md:py-16 bg-gray-50" >
          <div className="max-w-4xl text-center justify-content-center mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700">
              {dictionary["prices"][languageReducer]["title"]}

            </h1>
            <p className="my-4 text-xl text-gray-600">
              {dictionary["prices"][languageReducer]["description"]}
            </p>

            <PricingSection />

            <Accordion
              id="FAQ"
              className="text-md text-left font-regular w-full md:w-3/4 mx-auto mb-12"
              allowZeroExpanded="true"
            >
              {/*<AccordionItem id="sparen">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Wie viel spare ich gegenüber den Portalen?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="font-light">
                    Wir reichen unsere Sonderkonditionen an dich als Kunden
                    weiter.
                  </p>
                  <img
                    xmlns="http://www.w3.org/2000/svg"
                    src={sparen}
                    className="w-full md:w-3/4"
                  ></img>
                </AccordionItemPanel>
              </AccordionItem>*/}
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    {dictionary["faq"][languageReducer]["tile1"]["faqTitle"]}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="font-light">
                    {
                      dictionary["faq"][languageReducer]["tile1"][
                      "faqDescription"
                      ]
                    }
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    {dictionary["faq"][languageReducer]["tile2"]["faqTitle"]}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="font-light">
                    {
                      dictionary["faq"][languageReducer]["tile2"][
                      "faqDescription"
                      ]
                    }
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    {dictionary["faq"][languageReducer]["tile3"]["faqTitle"]}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="font-light">
                    {
                      dictionary["faq"][languageReducer]["tile3"][
                      "faqDescription"
                      ]
                    }
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    {dictionary["faq"][languageReducer]["tile4"]["faqTitle"]}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="font-light">
                    {
                      dictionary["faq"][languageReducer]["tile4"][
                      "faqDescription"
                      ]
                    }
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    {dictionary["faq"][languageReducer]["tile5"]["faqTitle"]}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="font-light">
                    {
                      dictionary["faq"][languageReducer]["tile5"][
                      "faqDescription"
                      ]
                    }
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    {dictionary["faq"][languageReducer]["tile6"]["faqTitle"]}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="font-light">
                    {
                      dictionary["faq"][languageReducer]["tile6"][
                      "faqDescription"
                      ]
                    }
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    {dictionary["faq"][languageReducer]["tile7"]["faqTitle"]}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="font-light">
                    {
                      dictionary["faq"][languageReducer]["tile7"][
                      "faqDescription"
                      ]
                    }
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
            {/* <Link to="/auth/create-account">
              <Button size="larger">Immobilie inserieren</Button>
            </Link> */}
          </div>
        </section >

        {/* What are you waiting for? */}
        < SectionCenteredHeader >
          <h2 className="text-3xl md:text-4xl font-semibold mt-8 mb-2">
            {dictionary["waiting"][languageReducer]["title"]}
          </h2>
          <p className="text-gray-50 text-center text-md">
            {dictionary["waiting"][languageReducer]["description"]}
          </p>
          <div className="mt-8">
            <Link to="/auth/create-account">
              <Button size="larger">Jetzt registrieren {"->"}</Button>
            </Link>
          </div>
        </SectionCenteredHeader >
      </main >
      <FooterLanding />
    </div >
  );
}

export default Landing;
