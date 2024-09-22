import React from "react";
import { Button, Label, Input, Select } from "@windmill/react-ui";
import BuildingTypeHouse from "./conditionalFormElements/BuildingTypeHouse";
import BuildingTypeFlat from "./conditionalFormElements/BuildingTypeFlat";
import BuildingTypeLand from "./conditionalFormElements/BuildingTypeLand";
import { useTranslation } from "react-i18next";

export const Energyconsumption = ({
  formData,
  setForm,
  navigation,
  isReviewMode,
  my_swiper,
  fRequired,
  setFRequired,
  energy,
  setEnergy,
  testEnergy,
  setTestEnergy,
  setValuation,
}) => {
  const { go } = navigation;
  const { buildingType, yearofbuilding, livingArea, warmwasserbereitung, weitereEnergieTraeger, baujahrderheizung, einheit, keller, energySource, lueftung, erneuerbareenergien } = formData;
  const buildingTypeProps = { formData, setForm };
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-4">
      <h2 className="mb-4 mt-8 text-lg font-semibold text-gray-600 dark:text-gray-300">
        {t("Informationen zum Energieverbrauch")}
      </h2>
      <Label className="mt-4">
        <span>{t("Energieträger")}:</span>
        <Select
          className="mb-4 mt-1"
          label="Energieträger"
          name="energySource"
          value={energySource}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="erdgas">{t("Erdgas")}</option>
          <option value="biogas">{t("Biogas")}</option>
          <option value="flüssiggas">{t("Flüssiggas")}</option>
          <option value="heizoel">
            {t("Heizöl")}
          </option>
          <option value="biooel">{t("Bioöl")}</option>
          <option value="steinkohle">{t("Steinkohle")}</option>
          <option value="braunkohle">{t("Braunkohle")}</option>
          <option value="stueckholz">{t("Stückholz")}</option>
          <option value="holzhackschnitzel">{t("Holzhackschnitzel")}</option>
          <option value="holzpellets">{t("Holzpellets")}</option>
          <option value="nahfernwaerme">{t("Nah-/Fernwärme")}</option>
          <option value="strom">{t("Strom")}</option>
        </Select>
      </Label>
      <Label className="mt-4">
        <span>{t("Einheit")}:</span>
        <Select
          className="mb-4 mt-1"
          label="einheit"
          name="einheit"
          value={einheit}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="kWh">{t("kwH Heizwert")}</option>
          <option value="m3">m3</option>
        </Select>
      </Label>
      <Label className="lg:flex mb-4 mt-1">
        <span>{t("Sind weitere Energieträger vorhanden?")}</span>
        <div className="ml-3 mt-3 sm:mt-0 sm:block">
          <Input
            readOnly={true}
            type="radio"
            value="yes"
            checked={weitereEnergieTraeger === "yes"}
            onClick={setForm}
            name="weitereEnergieTraeger"
          />
          <span className="ml-2">{t("Ja")}</span>
          <Input
            readOnly={true}
            className="ml-2"
            type="radio"
            value="no"
            checked={weitereEnergieTraeger === "no"}
            onClick={setForm}
            name="weitereEnergieTraeger"
          />
          <span className="ml-2">{t("Nein")}</span>
        </div>
      </Label>
      
      <Label className="mt-4">
        <span>{t("Warmwasserbereitung")}:</span>
        <Select
          className="mb-4 mt-1"
          label="warmwasserbereitung"
          name="warmwasserbereitung"
          value={warmwasserbereitung}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="inverbrauch1">{t("In Verbrauch enthalten - genaue Werte unbekannt")}</option>
          <option value="inverbrauch2">{t("Nicht in Verbrauch enthalten - genaue Werte bekannt")}</option>
          <option value="nichtinverbrauch1">{t("In Verbrauch nicht enthalten - genaue Werte unbekannt")}</option>
          <option value="nichtinverbrauch2">{t("Nicht in Verbrauch enthalten - genaue Werte bekannt")}</option>
        </Select>
      </Label>
      {/* Conditional form elements */}

      <>
        {fRequired ? (
          <div style={{ color: "red" }}>
            {t("Please fill in the required fields *")}
          </div>
        ) : (
          false
        )}
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
            fullwidth="true"
            color="primary"
            style={{ marginTop: "1rem" }}
            onClick={() => {
              my_swiper.slideNext();
              navigation.next();
            }}
          >
            {t("next")}
          </Button>
        </>
      </>
    </div>
  );
};
