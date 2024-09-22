import React from "react";
import { Button, Label, Input, Select } from "@windmill/react-ui";
import { German } from "flatpickr/dist/l10n/de.js"
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import { Component } from "react";

import { useTranslation } from "react-i18next";
import { useState } from "react";



export const Billingperiod = ({
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
  const [firstDate, setFirstDate] = useState(new Date());
  const [secondDate, setSecondDate] = useState(new Date());
  const { buildingType, yearofbuilding, livingArea, ersteAbrechnungsperiode, energieverbrauch1, energieverbrauch2, energieverbrauch3, warmwasserbereitung, weitereEnergieTraeger, baujahrderheizung, einheit, keller, energySource, lueftung, erneuerbareenergien } = formData;
  const buildingTypeProps = { formData, setForm };
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto px-4">
      <h2 className="mb-4 mt-8 text-lg font-semibold text-gray-600 dark:text-gray-300">
        {t("Daten der Abrechnungsperioden")}
      </h2>
      <p className="text-gray-700 font-regular text-md mb-8">
      Für die Beantragung des Verbrauchsausweises müssen Verbrauchswerte der vergangenen drei Jahre vorliegen – das heißt, die erste Abrechnungsperiode muss mindestens drei Jahre zurückliegen.
      </p>
      <div className="block">
      <Label className="mt-4">
        <span>{t("Erste Abrechnungsperiode")}:</span>
        <Select
          className="mb-4 mt-1"
          label="ersteAbrechnungsperiode"
          name="ersteAbrechnungsperiode"
          value={ersteAbrechnungsperiode}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="1">{t("6.2019 - 5.2020")}</option>
          <option value="2">{t("5.2019 - 4.2020")}</option>
          <option value="3">{t("4.2019 - 3.2020")}</option>
          <option value="4">{t("3.2019 - 2.2020")}</option>
          <option value="5">{t("2.2019 - 1.2020")}</option>
          <option value="6">{t("1.2019 - 12.2019")}</option>
          <option value="7">{t("12.2018 - 11.2019")}</option>
          <option value="8">{t("11.2018 - 10.2019")}</option>
          <option value="9">{t("10.2018 - 9.2019")}</option>
          <option value="10">{t("9.2018 - 8.2019")}</option>
          <option value="11">{t("8.2018 - 7.2019")}</option>
          <option value="12">{t("7.2018 - 6.2019")}</option>

          
        </Select>
      </Label>
      <div className="my-4">
      <p className="mt-8 text-md font-medium text-gray-600 dark:text-gray-300">
        {t("Abrechnungsperiode 1")}:
      </p>
      <div className="flex justify-start mt-4">
        <div className="block">
      <p className="text-xs mb-1">{t("Beginn")}:</p>
      <Flatpickr
        className="rounded-lg cursor-pointer border-gray-300"
        ariaLabel="Beginn..."
        value={firstDate}
        onChange={function ([date]) {
          setFirstDate(date)
        
        }}
        options={
          {
            locale: German,
            dateFormat: "d.m.Y"
          }
        }
      />
      </div>
      <div className="block">
      <p className="text-xs ml-4 mb-1">{t("Ende")}:</p>
       <Flatpickr
       className="rounded-lg ml-4 cursor-pointer border-gray-300"
        value={secondDate}
        onChange={function ([date]) {
          setSecondDate(date)
        
        }}
        options={
          {
            locale: German,
            dateFormat: "d.m.Y"
          }
        }
      />
      </div>
      </div>
      </div>
      <Label>
        <span>{t("Energieverbrauch")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="energieverbrauch1"
          name="energieverbrauch1"
          placeholder="Energieverbrauch eingeben..."
          value={energieverbrauch1}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
        </Label>
      <div className="my-4">
      <p className="mt-8 text-md font-medium text-gray-600 dark:text-gray-300">
        {t("Abrechnungsperiode 2")}:
      </p>
      <div className="flex justify-start mt-4">
        <div className="block">
      <p className="text-xs mb-1">{t("Beginn")}:</p>
      <Flatpickr
        className="rounded-lg cursor-pointer border-gray-300"
        ariaLabel="Beginn..."
        value={firstDate}
        onChange={function ([date]) {
          setFirstDate(date)
        
        }}
        options={
          {
            locale: German,
            dateFormat: "d.m.Y"
          }
        }
      />
      </div>
      <div className="block">
      <p className="text-xs ml-4 mb-1">{t("Ende")}:</p>
       <Flatpickr
       className="rounded-lg ml-4 cursor-pointer border-gray-300"
        value={secondDate}
        onChange={function ([date]) {
          setSecondDate(date)
        
        }}
        options={
          {
            locale: German,
            dateFormat: "d.m.Y"
          }
        }
      />
      </div>
      </div>
      </div>
      <Label>
        <span>{t("Energieverbrauch")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="energieverbrauch2"
          name="energieverbrauch2"
          placeholder="Energieverbrauch eingeben..."
          value={energieverbrauch2}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
        </Label>
      <div className="my-4">
      <p className="mt-8 text-md font-medium text-gray-600 dark:text-gray-300">
        {t("Abrechnungsperiode 3")}:
      </p>
      <div className="flex justify-start mt-4">
        <div className="block">
      <p className="text-xs mb-1">{t("Beginn")}:</p>
      <Flatpickr
        className="rounded-lg cursor-pointer border-gray-300"
        ariaLabel="Beginn..."
        value={firstDate}
        onChange={function ([date]) {
          setFirstDate(date)
        
        }}
        options={
          {
            locale: German,
            dateFormat: "d.m.Y"
          }
        }
      />
      </div>
      <div className="block">
      <p className="text-xs ml-4 mb-1">{t("Ende")}:</p>
       <Flatpickr
       className="rounded-lg ml-4 cursor-pointer border-gray-300"
        value={secondDate}
        onChange={function ([date]) {
          setSecondDate(date)
        
        }}
        options={
          {
            locale: German,
            dateFormat: "d.m.Y"
          }
        }
      />
      </div>
      </div>
      </div>
      <Label>
        <span>{t("Energieverbrauch")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="energieverbrauch3"
          name="energieverbrauch3"
          placeholder="Energieverbrauch eingeben..."
          value={energieverbrauch3}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
        </Label>
      </div>

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
