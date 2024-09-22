import React from "react";
import { Input, Label, Select, Button } from "@windmill/react-ui";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { EuroIcon } from "../../../icons";
export const Data = ({ formData, setForm, navigation, 
        isReviewMode, my_swiper, fRequired, setFRequired, defaultData}) => {
  const { go } = navigation;
  const { listingTitle, listingType, buildingType, rentPrice, listingPrice, contactType } =
    formData;

  const { t } = useTranslation();
  useEffect(() => {
    let current = { listingTitle, listingType, buildingType, rentPrice, listingPrice, contactType };
    Object.assign(formData, defaultData, current);
  }, [buildingType]);
  return (
    <div className="container mx-auto px-4">
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
          <option value="Commercial">{t("commercial")}</option>
          <option value="Investment">{t("investment")}</option>
        </Select>
      </Label>
        <>
          {fRequired && <div style={{color: "red"}}>{t("Please fill in the required fields *")}</div>}
          <Button
            variant="contained"
            fullwidth='true'
            color="primary"
            style={{ marginTop: "1rem" }}
            onClick={() => {
             
              setFRequired(false);
              my_swiper.slideNext();
              return navigation.next()
            }}
          >
            {t("next")}
          </Button>
        </>
    </div>
  );
};
