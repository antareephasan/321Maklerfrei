import React from "react";
import { Button, Label, Input, Select } from "@windmill/react-ui";
import BuildingTypeHouse from "./conditionalFormElements/BuildingTypeHouse";
import BuildingTypeFlat from "./conditionalFormElements/BuildingTypeFlat";
import BuildingTypeLand from "./conditionalFormElements/BuildingTypeLand";
import { useTranslation } from "react-i18next";

export const Additional = ({ formData, setForm, navigation, isReviewMode,
   my_swiper, fRequired, setFRequired,
   energy, setEnergy,  testEnergy, setTestEnergy, setValuation}) => {
  const { go } = navigation;
  const {
    klimaanlage,
    schutzverglasung,
    außendaemmung,
    dachdaemmung,
    led,
    leerstand
  } = formData;
  const buildingTypeProps = { formData, setForm };
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-4">
      <h2 className="my-8 text-lg font-semibold text-gray-600 dark:text-gray-300">{t("Weitere Informationen")}</h2>
      <Label className="lg:flex mb-4 mt-1">
        <span>{t("Gibt es eine Klimaanlage?")}</span>
        <div className="ml-3 mt-3 sm:mt-0 sm:block">
          <Input
            readOnly={true}
            type="radio"
            value="yes"
            checked={klimaanlage === "yes"}
            onClick={setForm}
            name="klimaanlage"
          />
          <span className="ml-2">{t("Ja")}</span>
          <Input
            readOnly={true}
            className="ml-2"
            type="radio"
            value="no"
            checked={klimaanlage === "no"}
            onClick={setForm}
            name="klimaanlage"
          />
          <span className="ml-2">{t("Nein")}</span>
        </div>
      </Label>
      <Label className="lg:flex mb-4 mt-1">
        <span>{t("Wärmeschutz-/Isolierverglasung")}</span>
        <div className="ml-3 mt-3 sm:mt-0 sm:block">
          <Input
            readOnly={true}
            type="radio"
            value="yes"
            checked={schutzverglasung === "yes"}
            onClick={setForm}
            name="schutzverglasung"
          />
          <span className="ml-2">{t("Ja")}</span>
          <Input
            readOnly={true}
            className="ml-2"
            type="radio"
            value="no"
            checked={schutzverglasung === "no"}
            onClick={setForm}
            name="schutzverglasung"
          />
          <span className="ml-2">{t("Nein")}</span>
        </div>
      </Label>
      <Label className="lg:flex mb-4 mt-1">
        <span>{t("Außenwanddämmung")}</span>
        <div className="ml-3 mt-3 sm:mt-0 sm:block">
          <Input
            readOnly={true}
            type="radio"
            value="yes"
            checked={außendaemmung === "yes"}
            onClick={setForm}
            name="außendaemmung"
          />
          <span className="ml-2">{t("Ja")}</span>
          <Input
            readOnly={true}
            className="ml-2"
            type="radio"
            value="no"
            checked={außendaemmung === "no"}
            onClick={setForm}
            name="außendaemmung"
          />
          <span className="ml-2">{t("Nein")}</span>
        </div>
      </Label>
      <Label className="lg:flex mb-4 mt-1">
        <span>{t("Dach- / Dachbodendämmung")}</span>
        <div className="ml-3 mt-3 sm:mt-0 sm:block">
          <Input
            readOnly={true}
            type="radio"
            value="yes"
            checked={dachdaemmung === "yes"}
            onClick={setForm}
            name="dachdaemmung"
          />
          <span className="ml-2">{t("Ja")}</span>
          <Input
            readOnly={true}
            className="ml-2"
            type="radio"
            value="no"
            checked={dachdaemmung === "no"}
            onClick={setForm}
            name="dachdaemmung"
          />
          <span className="ml-2">{t("Nein")}</span>
        </div>
      </Label>
      <Label className="lg:flex mb-4 mt-1">
        <span>{t("LED- / Energiesparlampen")}</span>
        <div className="ml-3 mt-3 sm:mt-0 sm:block">
          <Input
            readOnly={true}
            type="radio"
            value="yes"
            checked={led === "yes"}
            onClick={setForm}
            name="led"
          />
          <span className="ml-2">{t("Ja")}</span>
          <Input
            readOnly={true}
            className="ml-2"
            type="radio"
            value="no"
            checked={led === "no"}
            onClick={setForm}
            name="led"
          />
          <span className="ml-2">{t("Nein")}</span>
        </div>
      </Label>
      <Label className="lg:flex mb-4 mt-1">
        <span>{t("Mehr als 30% Leerstand?")}</span>
        <div className="ml-3 mt-3 sm:mt-0 sm:block">
          <Input
            readOnly={true}
            type="radio"
            value="yes"
            checked={leerstand === "yes"}
            onClick={setForm}
            name="leerstand"
          />
          <span className="ml-2">{t("Ja")}</span>
          <Input
            readOnly={true}
            className="ml-2"
            type="radio"
            value="no"
            checked={leerstand === "no"}
            onClick={setForm}
            name="leerstand"
          />
          <span className="ml-2">{t("Nein")}</span>
        </div>
      </Label>
      {/* Conditional form elements */}
    
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
                return navigation.previous();
              }}
            >
              {t("back")}
            </Button>
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
