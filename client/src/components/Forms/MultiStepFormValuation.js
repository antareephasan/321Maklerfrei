import React, { useState, useCallback, useContext } from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Contact } from "./stepFormValuation/Contact"
import { Details } from "./stepFormValuation/Details";
import { Address } from "./stepFormValuation/Address"
import { Review } from "./stepFormValuation/Review";
import { Submit } from "./stepFormValuation/Submit";
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


export const MultiStepFormValuation = ({setValuation}) => {
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
    leasablearea: ''
  };
  const steps = [
    { id: "details", Component: Details },
    { id: "contact", Component: Contact },
    { id: "address", Component: Address },
    { id: "review", Component: Review },
    { id: "submit", Component: Submit },
  ];

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
            key={"contact"}
            onClick={() => go("contact")}
            style={step.id === "contact" ? stepColor : null}
          >
            {t("Contact")}
          </SwiperSlide>

         
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
      <Component {...props} key={step.id} my_swiper={my_swiper} setValuation={setValuation}/>
    </div>
  );
};