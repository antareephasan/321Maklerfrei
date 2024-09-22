import React, { useContext, useEffect, useState } from "react";
import InfoCard from "../../components/Cards/InfoCard";
import PageTitle from "../../components/Typography/PageTitle";
import RoundIcon from "../../components/RoundIcon";
// import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import ReactPlayer from "react-player";
// import { MultiStepFormValuation } from "../components/Forms/MultiStepFormValuation";
// import { MultiStepFormEnergy } from "../components/Forms/MultiStepFormEnergy"
// import  LineLeftIcon from "../icons/line-angle-left.svg";
import { HomeIcon } from "../../icons";
import { Button, Badge, Card, CardBody } from "@windmill/react-ui";
// import { AuthContext } from "../context/AuthContext";
// import axios from "axios";
import { config } from "../../assets/config/config";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
// import { PricingCardEnergy } from "../components/Cards/PricingCardEnergy";

function SetTitleTag() {
  return (
    <Helmet>
      <title>Home - 321maklerfrei</title>
    </Helmet>
  );
}

const apiUrl = config.api.url;

function Dashboard() {
  const { t } = useTranslation();
  // const { user } = useContext(AuthContext);
  const user = { 
    name: "Fullname",
    username: "username",
    email: "rayhan@example.com",
    phone: "+88 123 456 789",
    avatar: "https://i.ibb.co.com/xS5TKHj/378-v9-be.jpg",
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
    roles: "user",
  }
  // const email = user.email;
  const history = useHistory();
  const [userLists, setUserLists] = useState([]);

  const [valuation, setValuation ] = useState(false);
  const [energy, setEnergyForm ] = useState(false);
  
  const handlePush = () => {
    history.push("/app/create_ads");
  };

  const viewListings = () => {
    history.push("/app/userLists");
  };

  const [activeListLength, setActiveListLength] = useState(0);
  // useEffect(() => {
  //   let isMounted = true;
  //   if (isMounted) {
  //     axios
  //       .post(`${apiUrl}/v1/userList/get`, { email })
  //       .then((response) => {
  //         setUserLists(response.data);
  //         const activeList = response.data.filter(
  //           (list) =>
  //             list.subscription.subscriptionType === "basic" ||
  //             list.subscription.subscriptionType === "medium" ||
  //             list.subscription.subscriptionType === "premium"
  //         );
  //         setActiveListLength(activeList.length);
  //       })
  //       .catch((error) => console.log(error));
  //   }
  //   return () => {
  //     isMounted = false;
  //   };
  // }, [email]);

  console.log("user=========", user)
  return (
    <>
      {!valuation && !energy &&
        <>
          <div className="flex items-center">
            <SetTitleTag />
            <PageTitle className="mr-5">Home</PageTitle>
            
          </div>

             {/* <!-- Cards --> */}
          <div className="block flex flex-wrap gap-4 mb-10">
             <div className="md:w-5/12 sm:w-12"> 
              <div className="whitespace h-4"></div>
              <InfoCard title={t("active listings")} value={activeListLength}>
                <RoundIcon
                  icon={HomeIcon}
                  iconColorClass="text-blue-500 dark:text-blue-100"
                  bgColorClass="bg-blue-100 dark:bg-blue-500"
                  className="mr-4"
                />
              </InfoCard>
            </div>
            <div className="md:w-5/12 sm:w-12"> 
              <div className="whitespace h-4"></div>
              <InfoCard title={t("active listings")} value={activeListLength}>
                <RoundIcon
                  icon={HomeIcon}
                  iconColorClass="text-blue-500 dark:text-blue-100"
                  bgColorClass="bg-blue-100 dark:bg-blue-500"
                  className="mr-4"
                />
              </InfoCard>
            </div>
            </div>
            
          {/* Welcome Card */}
          <div className="flex flex-wrap gap-4 items-start">
            {userLists.length >= 1 ? (
              <Card className="lg:flex w-full md:w-8/12 mb-8">
                <CardBody className="mt-0 pt-0 pr-4 md:pr-0">
                  <div>
                    <div className="text-gray-600 dark:text-gray-400 pt-4">
                      
                      <p className="mb-6 font-semibold text-gray-600 dark:text-gray-300">
                        Hey {user?.name} 👋, {t("welcome greeting")}
                      </p>
                      <p>
                        {" "}
                        {t(
                          "Just click on the blue button to view, edit or add new images to your current listings."
                        )}{" "}
                      </p>
                      <Button onClick={viewListings} className="mt-6">
                        {t("view listings")}
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ) : (
              <Card className="lg:flex w-full md:w-10/12 mb-8">
                <CardBody className="mt-0 pt-0 pr-0">
                  <div>
                    <div className="md:flex block gap-8">
                      <div className="text-gray-600 dark:text-gray-400 pt-4">
                        <div>
                          <p className="mb-6 font-semibold text-gray-600 dark:text-gray-300">
                            Hey {user?.name} 👋, {t("welcome greeting")}
                          </p>{" "}
                          {t(
                            "You have not created any listings yet. Click on the blue button and create your first listing."
                          )}{" "}
                        </div>
                        <Button onClick={handlePush} className="mt-6">
                          {t("create listing")}
                        </Button>
                      </div>
                      {/* <div className="block md:hidden mt-8">
                        <ReactPlayer
                          controls={true}
                          width="300px"
                          height="168px"
                          url="https://info-at-321maklerfrei.wistia.com/medias/zcyat9qnce"
                          playsinline={true}
                        />
                      </div>
                      <div className="hidden md:block">
                        <ReactPlayer
                          controls={true}
                          width="300px"
                          height="168px"
                          url="https://info-at-321maklerfrei.wistia.com/medias/zcyat9qnce"
                        />
                      </div> */}
                    </div>
                  </div>
                </CardBody>
              </Card>
            )}
          
           
          </div>
         
        </>                        
      }
      {/* {valuation &&
        <>
        <Button onClick={()=> setValuation(false)} className="mt-6 mr-4 text-left w-3/12" layout="link">
             <img className="w-1 mr-2" src={LineLeftIcon}/> {t("Zurück zum Dashboard")}
            </Button>
        <PageTitle className="mr-5">{t("Immobilie bewerten")}</PageTitle>
          <Card className="mt-4 mb-4  md:w-9/12">
            <CardBody>
            <MultiStepFormValuation setValuation={setValuation}/>
            </CardBody>
          </Card>
        </>
      }
       {energy &&
        <>
        <Button onClick={()=> setEnergyForm(false)} className="mt-6 mr-4 text-left w-3/12" layout="link">
             <img className="w-1 mr-2" src={LineLeftIcon}/> {t("Zurück zum Dashboard")}
            </Button>
        <PageTitle className="mr-5">{t("Energieausweis bestellen")}</PageTitle>
          <Card className="mt-4 mb-4  md:w-9/12">
            <CardBody>
            <MultiStepFormEnergy setEnergyForm = {setEnergyForm}/>
            </CardBody>
          </Card>
        </>
      } */}
    </>
  );
}

export default Dashboard;
