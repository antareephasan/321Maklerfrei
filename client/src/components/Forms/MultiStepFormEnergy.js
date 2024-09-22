import React, { useState, useCallback, useContext, useEffect } from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Contact } from "./stepFormEnergy/Contact"
import { Energypass } from "./stepFormEnergy/Energypass"
import { Building } from "./stepFormEnergy/Building"
import { Floors } from "./stepFormEnergy/Floors" 
import { Parts } from "./stepFormEnergy/Parts" 
import { Heating } from "./stepFormEnergy/Heating" 
import { Additional } from "./stepFormEnergy/Additional"
import { Energyconsumption } from "./stepFormEnergy/Energyconsumption"
import { Billingperiod } from "./stepFormEnergy/Billingperiod"
import { Details } from "./stepFormEnergy/Details";
import { Address } from "./stepFormEnergy/Address"
import { Review } from "./stepFormEnergy/Review";
import { Submit } from "./stepFormEnergy/Submit";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../context/AuthContext";
//import styled componets
import styled from 'styled-components';
//import swiper & css
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
//swiper core & required module
import SwiperCore, {
  Navigation
} from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation]);
//styled swiper
const StyledSwiper = styled.div`
position: relative;
pointer-events:none;
.swiper-button-next, .swiper-button-prev{
    display: none;
    top: 50%;
    background-color: var(--hblue);
    color: var(--b);
    z-index: 999999999;
    position: absolute;
    transform: translateY(-50%);
    margin: 0;
    background-color: #fff;
    &:after{
        font-size: 25px;
        font-weight: bold;
    }
}
.swiper-button-prev{
    left: -5px;
}
.swiper-button-next{
  z-index: 99;
    right: 0px;
}
.swiper-container{
    position: relative;
}
.swiper-wrapper{
  z-index: -1;
  text-align: center;
}
.mySwiper{
  padding: 10px 15px;
  position: relative;
  &::before {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  width: 40px;
  background-color: #fff;
  bottom: 0;
  z-index: 9;
}
}
.swiper-button-next:after, .swiper-button-prev:after {
  font-size: 18px;
}
`;
export const useMultiStepForm = (type) =>{
  const [showType, setShowType] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [formValuesType, setFormValuesType] = useState([]);

  const onDropType = useCallback((accFiles, rejectFiles) => {
    const mappAcc = accFiles.map((file) => {
      setFormValuesType((curr) => [...curr, { imgDetails: "" }]);
      return file;
    });
    setSelectedType((curr) => [...curr, ...mappAcc]);
    if (accFiles) {
      const filesArray = Array.from(accFiles).map((file) =>
        URL.createObjectURL(file)
      );
      setShowType((prevImages) => prevImages.concat(filesArray));
      Array.from(accFiles).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  }, []);

  const removeType = (photo, file, i) => {
    const files = showType.filter((file) => file !== photo);
    setShowType(files);

    selectedType.splice(selectedType.indexOf(file), 1);

    let newFormValues = [...formValuesType];
    newFormValues.splice(i, 1);
    setFormValuesType(newFormValues);
  };
  let handleChange = (i, e) => {
    let newFormValues = [...formValuesType];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValuesType(newFormValues);
  };
  return {
    showType,
    selectedType,
    formValuesType,
    onDropType,
    removeType,
    handleChange
  }
}


export const MultiStepFormEnergy = ({setEnergyForm}) => {
  const { user } = useContext(AuthContext);
  const defaultData = {
    listingTitle: "",
    listingType: "For Sale",
    buildingType: "House",
    contactType: "private person",
    lastName: user.lastname,
    specificBuildingType: "",
    newBuilding: "",
    monumentProtection: "",
    numberOfFloors: "",
    numberOfRooms: "",
    numberOfBedrooms: "",
    numberOfBathrooms: "",
    livingSpace: "",
    livingArea: "",
    usableArea: "",
    plotArea: "",
    numberOfGarages: "",
    numberOfParkingSpaces: "",
    flatType: "",
    floor: "",
    monthlyHousepayment: "",
    parkingSpacePrice: "",
    numberOfParkingLots: "",
    landArea: "",
    stateOfDevelopment: "",
    description: "",
    features: "",
    location: "",
    additionalDescription: "",
    listingPrice: "",
    rentPrice: "",
    nickName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    contactName: user.name,
    phone: "",
    formEmail: user.email,
    nameHide: "",
    carPlacement: "",
    phoneNumberHide: "",
    emailHide: "",
    additionalCost: "",
    secuirityCost: "",
    summaryAdditionalCost: "",
    heatingCostinDetails: "",
    energyPass: "",
    energySource: "",
    weitereEnergieTraeger: "no",
    energyPassCreationDate: "",
    typeOfHeating: "",
    typeOfEnergyPass: "",
    yearOfBuilding: "",
    commission: "",
    energyEfficiencyClass:"",
    hideAddress: true,
    typeOfParkingSpace:'',
    energy: false,
    buildingphase: '',
    estatetype:'',
    leasablearea: '',
    newbuilding: 'no',
    fertiggestelltLetzte5Jahre: 'yes',
    wohneinheiten: 'yes',
    fertigstellungVor1978: 'no',
    klimaanlage: 'no',
    schutzverglasung: 'no',
    außendaemmung: 'no',
    dachdaemmung: 'no',
    led: 'no',
    leerstand: 'no'
  };
  const fixeSteps=[
    { id: "details", Component: Details, tag: "commun" },
    { id: "energypass", Component: Energypass, tag: "commun" },
    { id: "building", Component: Building, tag: "commun" },
    { id: "floors", Component: Floors, tag: "bedar" },
    { id: "parts", Component: Parts, tag: "bedar" },
    { id: "heating", Component: Heating, tag: "bedar" },
    { id: "energyconsumption", Component: Energyconsumption, tag: "verbrau" },
    { id: "billingperiod", Component: Billingperiod, tag: "verbrau" },
    { id: "additional", Component: Additional, tag: "verbrau" },
    { id: "address", Component: Address, tag: "commun" },
    { id: "contact", Component: Contact, tag: "commun" },
    { id: "review", Component: Review, tag: "commun" },
    { id: "submit", Component: Submit, tag: "commun" },
  ];
  const [steps,setSteps] = useState([
    { id: "details", Component: Details, tag: "commun" },
    { id: "energypass", Component: Energypass, tag: "commun" },
    { id: "building", Component: Building, tag: "commun" },
    { id: "floors", Component: Floors, tag: "bedar" },
    { id: "parts", Component: Parts, tag: "bedar" },
    { id: "heating", Component: Heating, tag: "bedar" },
    { id: "energyconsumption", Component: Energyconsumption, tag: "verbrau" },
    { id: "billingperiod", Component: Billingperiod, tag: "verbrau" },
    { id: "additional", Component: Additional, tag: "verbrau" },
    { id: "address", Component: Address, tag: "commun" },
    { id: "contact", Component: Contact, tag: "commun" },
    { id: "review", Component: Review, tag: "commun" },
    { id: "submit", Component: Submit, tag: "commun" },
  ]);
  
  const [ currentPlan, setCurrentPlan ] = useState(null);
  // const [currentSteps,setCurrentSteps]=useState(steps)
  // var currentSteps=steps;
  useEffect(() => {
    if(currentPlan==="price_29"){
      setSteps(fixeSteps.filter((item)=>{
        return item.tag!=="bedar" ;
      }))
      
    }else if(currentPlan==="price_69"){
      setSteps(fixeSteps.filter((item)=>{
        return item.tag!=="verbrau" ;
      }))
    }
  }, [currentPlan])
  
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });
  const { Component } = step;
  const [isReviewMode, setReviewMode] = useState(false);
  const [listData, setListData] = useState(null);
  const imgMultiStepForm = useMultiStepForm('img');
  const planMultiStepForm = useMultiStepForm('plan');
  const [fRequired, setFRequired] = useState(false);
  const [ energy, setEnergy] = useState(false);
  const [ testEnergy, setTestEnergy] = useState('no energy');
  const props = {
    imgMultiStepForm,
    planMultiStepForm,
    setListData,
    listData,
    formData,
    setForm,
    navigation,
    isReviewMode,
    setReviewMode,
    fRequired, 
    setFRequired,
    defaultData,
    energy,
    setEnergy,
    testEnergy,
    setTestEnergy
  };
  const stepColor = {
    color: "blue",
  };
  const { go } = navigation;
  const { t } = useTranslation();
  const [my_swiper, set_my_swiper] = useState({});
  return (
    <div className="grid">
      <StyledSwiper className="text-xs h-10 overflow-x-auto content-center mx-1 font-semibold tracking-wide text-left text-gray-500 uppercase justify-start gap-24 mt-2 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800">
        <Swiper navigation={true} simulateTouch={false} noSwiping={true} spaceBetween={0} className="mySwiper" breakpoints={
                    {
                        900: {
                            slidesPerView: 3 
                        },
                        600: {
                            slidesPerView: 1
                        }
                    }
        } onInit={(ev) => {
          set_my_swiper(ev)
        }}>

          
          <SwiperSlide
            className="menu-item cursor-pointer mySwiper-item"
            key={"details"}
            onClick={() => go("details")}
            style={step.id === "details" ? stepColor : null}
          >
            {t("Details")}
          </SwiperSlide>
          
          <SwiperSlide
            className="menu-item cursor-pointer mySwiper-item"
            key={"energypass"}
            onClick={() => go("energypass")}
            style={step.id === "energypass" ? stepColor : null}
          >
            {t("Energypass")}
          </SwiperSlide>
          
          
          
          <SwiperSlide
            className="menu-item cursor-pointer mySwiper-item"
            key={"building"}
            onClick={() => go("building")}
            style={step.id === "building" ? stepColor : null}
          >
            {t("Building")}
          </SwiperSlide>
          {currentPlan==="price_69" && <SwiperSlide
            className="menu-item cursor-pointer mySwiper-item"
            key={"floors"}
            onClick={() => go("floors")}
            style={step.id === "floors" ? stepColor : null}
          >
            {t("floors")}
          </SwiperSlide>}
          {currentPlan==="price_69" && <SwiperSlide
            className="menu-item cursor-pointer mySwiper-item"
            key={"parts"}
            onClick={() => go("parts")}
            style={step.id === "parts" ? stepColor : null}
          >
            {t("Parts")}
            
          </SwiperSlide>}
          {currentPlan==="price_69" && <SwiperSlide
            className="menu-item cursor-pointer mySwiper-item"
            key={"heating"}
            onClick={() => go("heating")}
            style={step.id === "heating" ? stepColor : null}
          >
            {t("Heating")}
          </SwiperSlide>}
          {currentPlan==="price_29" && <SwiperSlide
            className="menu-item cursor-pointer mySwiper-item"
            key={"energyconsumption"}
            onClick={() => go("energyconsumption")}
            style={step.id === "energyconsumption" ? stepColor : null}
          >
            {t("Energyconsumption")}
          </SwiperSlide>}
          {currentPlan==="price_29" && <SwiperSlide
            className="menu-item cursor-pointer mySwiper-item"
            key={"billingperiod"}
            onClick={() => go("billingperiod")}
            style={step.id === "billingperiod" ? stepColor : null}
          >
            {t("Billingperiod")}
          </SwiperSlide>}
          {currentPlan==="price_29" && <SwiperSlide
            className="menu-item cursor-pointer mySwiper-item"
            key={"additional"}
            onClick={() => go("additional")}
            style={step.id === "additional" ? stepColor : null}
          >
            {t("Additional")}
          </SwiperSlide>}
          <SwiperSlide
            className="menu-item cursor-pointer mySwiper-item"
            key={"address"}
            onClick={() => go("address")}
            style={step.id === "address" ? stepColor : null}
          >
            {t("Address")}
          </SwiperSlide>
          <SwiperSlide
            className="menu-item cursor-pointer mySwiper-item"
            key={"contact"}
            onClick={() => go("contact")}
            style={step.id === "contact" ? stepColor : null}
          >
            {t("Contact")}
          </SwiperSlide>

         
          
          <SwiperSlide
            className="menu-item cursor-pointer mySwiper-item"
            key={"review"}
            onClick={() => go("review")}
            style={step.id === "review" ? stepColor : null}
          >
            {t("Review")}
          </SwiperSlide>
          <SwiperSlide
            className="menu-item cursor-pointer mySwiper-item"
            key={"submit"}
            onClick={() => go("submit")}
            style={step.id === "submit" ? stepColor : null}
          >
            {t("Submit")}
          </SwiperSlide>
        </Swiper> 
      </StyledSwiper>
      <Component {...props} key={step.id} my_swiper={my_swiper} setEnergyForm={setEnergyForm} setCurrentPlan={setCurrentPlan} currentPlan={currentPlan} />
    </div>
  );
};