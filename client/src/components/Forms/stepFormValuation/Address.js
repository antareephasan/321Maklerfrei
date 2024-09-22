import React from "react";
import { Input, Label } from '@windmill/react-ui'
import SectionTitle from "../../Typography/SectionTitle";
import { Button } from '@windmill/react-ui'
import { useTranslation } from "react-i18next"


export const Address = ({ formData, setForm, navigation, isReviewMode, my_swiper, fRequired, setFRequired }) => {
  const { go } = navigation;
  const { address, city, state, zip, hideAddress } = formData;
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-4 mt-4">
      <h2 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">{t("Address of the listing")}</h2>
      <Label className="mt-4">
        <span>{t("street and number")}</span>
        <span style={{color: "red"}}>*</span>
          <Input
            label="Address"
            name="address"
            value={address}
            onChange={setForm}
            placeholder={t("enter street and number")}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            className="mt-1"
            fullwidth='true'
            type="text"
          />
      </Label>
      <div className="flex gap-4 mb-4">
      <Label className="mt-4 w-2/5">
        <span>{t("zip")}:</span>
        <span style={{color: "red"}}>*</span>
          <Input
            label="Zip"
            name="zip"
            type="number"
            placeholder={t("enter zip code")}
            value={zip}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            className="w-25 mt-1"
          />
      </Label>
      <Label className="mt-4 w-3/5">
        <span>{t("city")}:</span>
        <span style={{color: "red"}}>*</span>
          <Input
            label="City"
            name="city"
            value={city}
            placeholder={t("enter city")}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            className="mt-1"
          />
      </Label>
      </div>
    
      <div style={{ marginTop: "1rem" }}>
        <>
          {fRequired && <div style={{color: "red"}}>{t("Please fill in the required fields *")}</div>}
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
                if(city.length === 0 || zip.length === 0 || address.length === 0){
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
      </div>
  );
};