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
    newbuilding,
    fertiggestelltLetzte5Jahre,
    wohneinheiten,
    fertigstellungVor1978
  } = formData;
  const buildingTypeProps = { formData, setForm };
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-4">
      <h2 className="my-8 text-lg font-semibold text-gray-600 dark:text-gray-300">{t("Daten zur Immobilie eingeben")}</h2>
      <Label className="lg:flex mb-4 mt-1">
        <span>{t("Handelt es sich bei der Immobilie um einen Neubau?")}</span>
        <div className="ml-3 mt-3 sm:mt-0 sm:block">
          <Input
            readOnly={true}
            type="radio"
            value="yes"
            checked={newbuilding === "yes"}
            onClick={setForm}
            name="newbuilding"
          />
          <span className="ml-2">{t("Ja")}</span>
          <Input
            readOnly={true}
            className="ml-2"
            type="radio"
            value="no"
            checked={newbuilding === "no"}
            onClick={setForm}
            name="newbuilding"
          />
          <span className="ml-2">{t("Nein")}</span>
        </div>
      </Label>
      { newbuilding === 'yes' && (
      <Label className="lg:flex mb-4 mt-1">
        <span>{t("Wurde der Neubau in den letzten 5 Jahren fertiggestellt?")}</span>
        <div className="ml-3 mt-3 sm:mt-0 sm:block">
          <Input
            readOnly={true}
            type="radio"
            value="yes"
            checked={fertiggestelltLetzte5Jahre === "yes"}
            onClick={setForm}
            name="fertiggestelltLetzte5Jahre"
          />
          <span className="ml-2">{t("Ja")}</span>
          <Input
            readOnly={true}
            className="ml-2"
            type="radio"
            value="no"
            checked={fertiggestelltLetzte5Jahre === "no"}
            onClick={setForm}
            name="fertiggestelltLetzte5Jahre"
          />
          <span className="ml-2">{t("Nein")}</span>
        </div>
      </Label> 
      )}
      { newbuilding === "no" && (
      <Label className="lg:flex mb-4 mt-1">
        <span>{t("Hat die Immobilie 5 oder mehr Wohneinheiten?")}</span>
        <div className="ml-3 mt-3 sm:mt-0 sm:block">
          <Input
            readOnly={true}
            type="radio"
            value="yes"
            checked={wohneinheiten === "yes"}
            onClick={setForm}
            name="wohneinheiten"
          />
          <span className="ml-2">{t("Ja")}</span>
          <Input
            readOnly={true}
            className="ml-2"
            type="radio"
            value="no"
            checked={wohneinheiten === "no"}
            onClick={setForm}
            name="wohneinheiten"
          />
          <span className="ml-2">{t("Nein")}</span>
        </div>
      </Label>
      )}
      { wohneinheiten === 'no' && (
      <Label className="lg:flex mb-4 mt-1">
        <span>{t("Wurde die Immobilie vor 1978 fertiggestellt?")}</span>
        <div className="ml-3 mt-3 sm:mt-0 sm:block">
          <Input
            readOnly={true}
            type="radio"
            value="yes"
            checked={fertigstellungVor1978 === "yes"}
            onClick={setForm}
            name="fertigstellungVor1978"
          />
          <span className="ml-2">{t("Ja")}</span>
          <Input
            readOnly={true}
            className="ml-2"
            type="radio"
            value="no"
            checked={fertigstellungVor1978 === "no"}
            onClick={setForm}
            name="fertigstellungVor1978"
          />
          <span className="ml-2">{t("Nein")}</span>
        </div>
      </Label>
      )}

      {/* Conditional form elements */}
    
        <>
          {fRequired ? <div style={{color: "red"}}>{t("Please fill in the required fields *")}</div> : false}
          <>
            <Button
              variant="contained"
              fullwidth='true'
              color="primary"
              style={{ marginTop: "1rem" }}
              onClick = {() => {my_swiper.slideNext();
              navigation.next()}}
            >
              {t("next")}
            </Button>
          </>
        </>
    </div>
  );
};
