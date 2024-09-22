import React from "react";
import { Button, Label, Input, Select } from "@windmill/react-ui";
import BuildingTypeHouse from "./conditionalFormElements/BuildingTypeHouse";
import BuildingTypeFlat from "./conditionalFormElements/BuildingTypeFlat";
import BuildingTypeLand from "./conditionalFormElements/BuildingTypeLand";
import BuildingTypeCommercial from "./conditionalFormElements/BuildingTypeCommercial";
import BuildingTypeInvestment from "./conditionalFormElements/BuildingTypeInvestment";
import { useTranslation } from "react-i18next";

export const Details = ({ formData, setForm, navigation, isReviewMode,
   my_swiper, fRequired, setFRequired,
   energy, setEnergy,  testEnergy, setTestEnergy}) => {
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
      {buildingType === "House" && <BuildingTypeHouse {...buildingTypeProps} />}
      {buildingType === "Flat" && <BuildingTypeFlat {...buildingTypeProps} />}
      {buildingType === "Land" && <BuildingTypeLand {...buildingTypeProps} />}
      {buildingType === "Commercial" && (
        <BuildingTypeCommercial {...buildingTypeProps} />
      )}
      {buildingType === "Investment" && (
        <BuildingTypeInvestment {...buildingTypeProps} />
      )}
      {contactType === "business" && <Label className="mt-4">
        <span>{t("Amount of Commission (incl. Tax)")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="Commission"
          placeholder={t("Enter amount of commission")}
          name="commission"
          value={commission}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth='true'
        />
      </Label>}
      <Label className="lg:flex">
        <span>{t("Energy")}:</span>
        <div className="ml-3 mt-3 sm:mt-0 block md:flex">
          <div className="block md:flex items-center">
            <Input
              readOnly={true}
              type="radio"
              value={true}
              checked={testEnergy === "with energy"}
              onClick={() => {
                setFRequired(false);
                setTestEnergy("with energy");
                setEnergy(true);
              }}
              onChange={setForm}
              name="energy"
            />
            <span className="ml-2">{t("Energy")}</span>
          </div>
          <div className="block md:flex md:mt-0 mt-1 items-center">
            <Input
              readOnly={true}
              className="ml-0 md:ml-2"
              type="radio"
              value={false}
              checked={testEnergy === "no energy"}
              onClick={() => {
                setFRequired(false);
                setTestEnergy("no energy");
                setEnergy(false);
              }}
              onChange={setForm}
              name="energy"
            />
            <span className="ml-2">{t("No Energy")}</span>
          </div>
        </div>
      </Label>
      {
        energy &&
        <>
          <Label className="mt-4">
            <span>{t("energy pass")}:</span>
            <span style={{color: "red"}}>*</span>
            <Input
              type="number"
              className="mb-4 mt-1"
              label="Energy Pass"
              placeholder={t("enter energy pass")}
              name="energyPass"             
              value={energyPass}
              onChange={setForm}
              margin="normal"
              variant="outlined"
              autoComplete="off"
              fullwidth='true'
            />
          </Label>
          <Label className="mt-4">
            <span>{t("Energy Efficiency Class")}:</span>
            <span style={{color: "red"}}>*</span>
            <Select
              className="mb-4 mt-1"
              label="Energy Efficiency Class"
              name="energyEfficiencyClass"
              value={energyEfficiencyClass}
              onChange={setForm}
              margin="normal"
              variant="outlined"
              autoComplete="off"
              fullwidth='true'
              readOnly={true}
            >
              <option value="00">{t("Choose an option")}</option>
              <option value="01">{t("A")}</option>
              <option value="02">{t("A+")}</option>
              <option value="03">{t("B")}</option>
              <option value="04">{t("C")}</option>
              <option value="05">{t("D")}</option>
              <option value="06">{t("E")}</option>
              <option value="07">{t("F")}</option>
              <option value="08">{t("G")}</option>
              <option value="09">{t("H")}</option>
            </Select>
          </Label>
          <Label className="mt-4">
            <span>{t("energy Pass Creation Date")}:</span>
            <span style={{ color: "red" }}>* </span>
            {fRequired && 
            <span style={{ color: "red" }}>{t("(dd.mm.yyyy)")}</span>
            }
            <Input
              type="text"
              className="mb-4 mt-1"
              label="energy Pass Creation Date"
              placeholder={t("enter energy pass creation date | exemple: z.B. 13.01.2012")}
              name="energyPassCreationDate"
              value={energyPassCreationDate}
              onChange={setForm}
              margin="normal"
              variant="outlined"
              autoComplete="off"
              fullwidth='true'
            />
          </Label>
          <Label className="mt-4">
            <span>{t("type of heating")}:</span>
            <span style={{color: "red"}}>*</span>
            <Select
              className="mb-4 mt-1"
              label="Type Of Heating"
              name="typeOfHeating"
              value={typeOfHeating}
              onChange={setForm}
              margin="normal"
              variant="outlined"
              autoComplete="off"
              fullwidth='true'
              readOnly={true}
            >
              <option value="">{t("Choose an option")}</option>
              <option value="02">{t("Furnace heating")}</option>
              <option value="03">{t("Central heating")}</option>
              <option value="01">{t("Floor heating")}</option>
              <option value="FUS">{t("Underfloor heating")}</option>
            </Select>
          </Label>
          <Label className="mt-4">
            <span>{t("type of energypass")}</span>
            <span style={{color: "red"}}>*</span>
            <Select
              className="mb-4 mt-1"
              label="Type Of Energypass"
              name="typeOfEnergyPass"
              value={typeOfEnergyPass}
              onChange={setForm}
              margin="normal"
              variant="outlined"
              autoComplete="off"
              fullwidth='true'
              readOnly={true}
            >
              <option value="1">{t("Choose an option")}</option>
              <option value="3">{t("consumption pass")}</option>
              <option value="2">{t("require pass")}</option>
            </Select>
          </Label>
        </>
      }
      <Label className="mt-4">
        <span>{t("Energy Source")}:</span>
        <Select
          className="mb-4 mt-1"
          label="Energy Source"
          name="energySource"
          value={energySource}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth='true'
          readOnly={true}
        > 
          <option value="">{t("Choose an option")}</option>
          <option value="ol">{t("oil")}</option>
          <option value="ga">{t("Gas")}</option>
          <option value="er">{t("Geothermal energy")}</option>
          <option value="fe">{t("District heating")}</option>
          <option value="so">{t("Solar")}</option>
          <option value="HO2">{t("Wood pellets")}</option>
          <option value="st">{t("Strom")}</option>
          <option value="ko">{t("money")}</option>
          <option value="HO1">{t("wood")}</option>
        </Select>
      </Label>
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
      {listingType === "For Rent" && (
        <div>
          <Label className="mt-4">
            <span>{t("additional costs without heating")}</span>
            <Input
              type="text"
              className="mb-4 mt-1"
              label="Additional Cost"
              placeholder={t("enter additional costs without heating")}
              name="additionalCost"
              value={additionalCost}
              onChange={setForm}
              margin="normal"
              variant="outlined"
              autoComplete="off"
              fullwidth='true'
            />
          </Label>
          <Label className="mt-4">
            <span>{t("heating cost")}</span>
            <Input
              type="text"
              className="mb-4 mt-1"
              label="Heating Cost in Details"
              placeholder={t("enter heating cost")}
              name="heatingCostinDetails"
              value={heatingCostinDetails}
              onChange={setForm}
              margin="normal"
              variant="outlined"
              autoComplete="off"
              fullwidth='true'
            />
          </Label>
          <Label className="mt-4">
            <span>{t("security cost")}</span>
            <Input
              type="number"
              className="mb-4 mt-1"
              label="Secuirity Cost"
              placeholder={t("enter security cost")}
              name="secuirityCost"
              value={secuirityCost}
              onChange={setForm}
              margin="normal"
              variant="outlined"
              autoComplete="off"
              fullwidth='true'
            />
          </Label>
        </div>
      )}
        <>
          {fRequired ? <div style={{color: "red"}}>{t("Please fill in the required fields *")}</div> : false}
          <>
            <Button
              layout="link"
              color="secondary"
              variant="contained"
              style={{ marginRight: "1rem" }}
              onClick={() => {
                my_swiper.slidePrev();
                return navigation.previous()
              }}
            >
              {t("back")}
            </Button>
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
                if((formData.buildingType === 'House' && !formData.livingArea) ||  (formData.buildingType === 'House' && formData.livingArea === '')){
                  setFRequired(true);
                  return;
                }
                if((formData.buildingType === 'House' && !formData.plotArea) ||  (formData.buildingType === 'House' && formData.plotArea === '')){
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
                if((formData.buildingType === 'Land' && !formData.plotArea) ||  (formData.buildingType === 'Land' && formData.plotArea === '')){
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
