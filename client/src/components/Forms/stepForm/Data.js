import React from "react";
import { Input, Label, Select, Button } from "@windmill/react-ui";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { EuroIcon } from "../../../icons";
import { LimitedInput } from "./LimitedText";
export const Data = ({ formData, setForm, navigation, 
        isReviewMode, my_swiper, fRequired, setFRequired, defaultData}) => {
  const { go } = navigation;
  const { listingTitle, listingType, buildingType, rentPrice, listingPrice, contactType } =
    formData;
  function numberWithCommas(x) {
    x = x.replace(/\./g, "");
    var parts = x.toString().split(".");
    parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
    return parts.join(",");
    }
  const { t } = useTranslation();
  useEffect(() => {
    let current = { listingTitle, listingType, buildingType, rentPrice, listingPrice, contactType };
    Object.assign(formData, defaultData, current);
  }, [buildingType]);
  return (
    <div className="container mx-auto px-4">
      <Label className="mt-4">
        <span>{t("listing title")}:</span>
        <span style={{color: "red"}}>*</span>
        <LimitedInput
        limit={100}
        setForm={setForm}
        value={listingTitle}
        name="listingTitle"
        t={t}
        />
      </Label>
      <Label className="lg:flex">
        <span>{t("listing type")}:</span>
        <div className="ml-3 mt-3 sm:mt-0 sm:block">
          <Input
            readOnly={true}
            type="radio"
            value="For Sale"
            checked={listingType === "For Sale"}
            onClick={setForm}
            name="listingType"
          />
          <span className="ml-2">{t("for sale")}</span>
          <Input
            readOnly={true}
            className="ml-2"
            type="radio"
            value="For Rent"
            checked={listingType === "For Rent"}
            onClick={setForm}
            name="listingType"
          />
          <span className="ml-2">{t("for rent")}</span>
        </div>
      </Label>
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
      {listingType === "For Sale" && (
        <Label className="mt-4">
          <span>{t("listing price")}:</span>
          <span style={{color: "red"}}>*</span>
          <div className="relative w-full focus-within:text-blue-400">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <EuroIcon className="w-4 h-4" aria-hidden="true" />
            </div>
            <Input
              className="mb-4 mt-1 p-2 pl-3 border border-solid border-gray-300 focus-within:text-gray-700"
              label="Listing Price"
              placeholder={t("enter the price")}
              name="listingPrice"
              value={numberWithCommas(listingPrice)}
              onChange={setForm}
              onKeyDown={(e)=> !/^\d+$/.test(e.key) && e.key !== 'Backspace' ? e.preventDefault() : true }
              margin="normal"
              type="String"
              variant="outlined"
              autoComplete="off"
              fullwidth='true'
            />
          </div>
        </Label>
      )}
      {listingType === "For Rent" && (
        <Label className="mt-4">
          <span>{t("rent price")}:</span>
          <span style={{color: "red"}}>*</span>
          <div className="relative w-full focus-within:text-blue-400">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <EuroIcon className="w-4 h-4" aria-hidden="true" />
            </div>
            <Input
              className="mb-4 mt-1 p-2 pl-3 border border-solid border-gray-300 focus-within:text-gray-700"
              label="Rent Price"
              placeholder={t("enter rent price")}
              name="rentPrice"
              value={numberWithCommas(rentPrice)}
              onChange={setForm}
              onKeyDown={(e)=> !/^\d+$/.test(e.key) && e.key !== 'Backspace' ? e.preventDefault() : true }
              margin="normal"
              type="String"
              variant="outlined"
              autoComplete="off"
              fullwidth='true'
            />
          </div>
        </Label>
      )}
      <Label className="lg:flex mb-4 mt-1">
        <span>{t("Is it a private or business listing?")}</span>
        <div className="ml-3 mt-3 sm:mt-0 sm:block">
          <Input
            readOnly={true}
            type="radio"
            value="private person"
            checked={contactType === "private person"}
            onClick={setForm}
            name="contactType"
          />
          <span className="ml-2">{t("private person")}</span>
          <Input
            readOnly={true}
            className="ml-2"
            type="radio"
            value="business"
            checked={contactType === "business"}
            onClick={setForm}
            name="contactType"
          />
          <span className="ml-2">{t("business")}</span>
        </div>
      </Label>
        <>
          {fRequired && <div style={{color: "red"}}>{t("Please fill in the required fields *")}</div>}
          <Button
            variant="contained"
            fullwidth='true'
            color="primary"
            style={{ marginTop: "1rem" }}
            onClick={() => {
              if(listingType === "For Sale" && Number(listingPrice.replaceAll(".", "")) <= 50) {
                setFRequired(true);
                return;
              }
              if(listingType === "For Rent" && Number(rentPrice.replaceAll(".", "")) <= 50) {
                setFRequired(true);
                return;
              }
              if(listingTitle.length === 0){
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
    </div>
  );
};
