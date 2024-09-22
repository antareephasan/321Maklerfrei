import React from "react";
import { Button, Label, Input, Select } from "@windmill/react-ui";
import BuildingTypeHouse from "./conditionalFormElements/BuildingTypeHouse";
import BuildingTypeFlat from "./conditionalFormElements/BuildingTypeFlat";
import BuildingTypeLand from "./conditionalFormElements/BuildingTypeLand";
import { useTranslation } from "react-i18next";


export const Details = ({ formData, setForm, navigation, isReviewMode,
   my_swiper, fRequired, setFRequired,
   energy, setEnergy,  testEnergy, setTestEnergy, setValuation}) => {
  const { go } = navigation;
  const {
    buildingType,
    listingType,
    energyPassCreationDate,
    energySource,
    contactType,
    commission,
    energyEfficiencyClass,
    additionalCost,
    secuirityCost,
    energyPass,
    typeOfEnergyPass,
    typeOfHeating,
    heatingCostinDetails,
    yearOfBuilding,
    buildingphase,
    totalarea
  } = formData;
  const buildingTypeProps = { formData, setForm };
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-4">
      <h2 className="my-4 text-lg font-semibold text-gray-600 dark:text-gray-300">{t("Daten zur Immobilie eingeben")}</h2>
      <Label className="mt-4">
        <span>{t("building type")}:</span>
        <Select
          className="mb-4 mt-1"
          label="Building Type"
          name="buildingType"
          value={buildingType}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth='true'
        >
          <option value="House">{t("house")}</option>
          <option value="Flat">{t("flat")}</option>
          <option value="Land">{t("land")}</option>
        </Select>
      </Label>
      {buildingType === "House" && <BuildingTypeHouse {...buildingTypeProps} />}
      {buildingType === "Flat" && <BuildingTypeFlat {...buildingTypeProps} />}
      {buildingType === "Land" && <BuildingTypeLand {...buildingTypeProps} />}
      
      {buildingType !== 'Land' &&
      <Label className="mt-4">
        <span>
          {t("year of building")}:
          <span style={{color: "red"}}>*</span>
        </span>
        <Input
          type="number"
          className="mb-4 mt-1"
          label="Year Of Building"
          placeholder={t("enter year of building")}
          name="yearOfBuilding"
          value={yearOfBuilding}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth='true'
        />
      </Label> }
      {buildingType === 'House' &&
          <Label className="mt-4">
            <span>
              {t("Building Phase")}:
              <span style={{color: "red"}}>*</span>
            </span>
            <Select
              className="mb-4 mt-1"
              name="buildingphase"
              value={buildingphase}
              onChange={setForm}
              margin="normal"
              variant="outlined"
              autoComplete="off"
              fullwidth='true'
              readOnly={true}
            > 
              <option value="">{t("Choose an option")}</option>
              <option value="no_information">{t("No information")}</option>
              <option value="completed">{t("Completed")}</option>
              <option value="in_planning">{t("In planning")}</option>
              <option value="under_construction">{t("Under construction")}</option>
            </Select>
          </Label>
      }
      {/* Conditional form elements */}
    
        <>
          {fRequired ? <div style={{color: "red"}}>{t("Please fill in the required fields *")}</div> : false}
          <>
            <Button
              variant="contained"
              fullwidth='true'
              color="primary"
              style={{ marginTop: "1rem" }}
              onClick={() => {
                if(energy && !/\d{2}.\d{2}.\d{4}/.test(formData.energyPassCreationDate)){
                  setFRequired(true);
                  return;
                }
                if((formData.yearOfBuilding === '' || !formData.yearOfBuilding.length === 4 || +formData.yearOfBuilding < 1500) && buildingType !== 'Land'&& buildingType !== 'Commercial'){
                  setFRequired(true);
                  return;
                }
                if( formData.numberOfRooms === '' && buildingType !== 'Land' && buildingType !== 'Commercial' && buildingType !== 'Investment' ){
                  setFRequired(true);
                  return;
                }
                if( formData.specificBuildingType === '' && buildingType !== 'Commercial' && buildingType !== 'Investment'){
                  setFRequired(true);
                  return;
                }
                if( formData.buildingphase === '' && buildingType === 'House' ){
                  setFRequired(true);
                  return;
                }
                if( formData.estatetype === ''  && (buildingType === 'Commercial' || buildingType === 'Investment' )){
                  setFRequired(true);
                  return;
                }
                if( formData.totalarea === ''   && buildingType === 'Commercial' ){
                  setFRequired(true);
                  return;
                }
                if( formData.leasablearea === '' &&  buildingType === 'Investment' ){
                  setFRequired(true);
                  return;
                }
                if(formData.buildingType === 'House' && formData.livingArea.length === 0 && formData.buildingType === 'House' && formData.plotArea.length === 0){
                  setFRequired(true);
                  return;
                }
                if(formData.buildingType === 'House' && formData.buildingphase.length === '' ){
                  setFRequired(true);
                  return;
                }
                if(buildingType === 'Flat'
                && formData.livingArea.length === 0 ){
                  setFRequired(true);
                  return;
                }
                if(buildingType === 'Land' && formData.landArea.length === 0){
                  setFRequired(true);
                  return;
                }
                if(energy && formData.energyPass.length === 0){
                  setFRequired(true);
                  return;
                }
                if(energy && formData.typeOfHeating.length === 0 ){
                  setFRequired(true);
                  return;
                }
                if(energy && formData.typeOfEnergyPass.length === 0 ){
                  setFRequired(true);
                  return;
                }
                setFRequired(false);
                my_swiper.slideNext();
                return navigation.next()
              }}
            >
              {t("next")}
            </Button>
          </>
        </>
    </div>
  );
};
