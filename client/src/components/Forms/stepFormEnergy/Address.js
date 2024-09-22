import React from "react";
import { Input, Label } from "@windmill/react-ui";
import SectionTitle from "../../Typography/SectionTitle";
import Img from "./Img";
import ImageType from "./imageType";
import { Button } from "@windmill/react-ui";
import { useTranslation } from "react-i18next";

export const renderType = (MultiStepForm, t) => {
  return MultiStepForm.showType.map((photo, index, key) => {
    const file = MultiStepForm.selectedType[index];
    const element = MultiStepForm.formValuesType[index];
    return (
      <Img
        key={index}
        file={file}
        element={element}
        index={index}
        photo={photo}
        t={t}
        handleChange={MultiStepForm.handleChange}
        removeImage={MultiStepForm.removeType}
      />
    );
  });
};

export const Address = ({
  formData,
  imgMultiStepForm,
  setForm,
  navigation,
  isReviewMode,
  my_swiper,
  fRequired,
  setFRequired,
}) => {
  const { go } = navigation;
  const { address, city, state, zip, hideAddress } = formData;
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-4">
       <h2 className="mb-4 mt-8 text-lg font-semibold text-gray-600 dark:text-gray-300">
        {t("Address of the listing")}
      </h2>
      <Label className="mt-4">
        <span>{t("street and number")}</span>
        <span style={{ color: "red" }}>*</span>
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
          fullwidth="true"
          type="text"
        />
      </Label>
      <div className="flex gap-4 mb-4">
        <Label className="mt-4 w-2/5">
          <span>{t("zip")}:</span>
          <span style={{ color: "red" }}>*</span>
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
          <span style={{ color: "red" }}>*</span>
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
      <p className="my-4 py-4 text-gray-700 text-sm font-semibold w-2/3">
        Der Gesetzgeber schreibt die Zusendung von Fotos vom Haus für die
        Energieausweiserstellung vor. Bitte fügen Sie die folgenden Fotos hinzu.
      </p>
      <div className="mx-auto mt-4 text-sm">
        <span>{t("Foto Hausaußenansicht")}:</span>
        <span style={{ color: "red" }}>*</span>
        <ImageType
          className="block"
          MultiStepForm={imgMultiStepForm}
          renderPhotos={() => renderType(imgMultiStepForm, t)}
          title={t("Images")}
        />
      </div>
      <div className="mx-auto mt-4 text-sm">
        <span>{t("Foto Heizungsanlage")}:</span>
        <span style={{ color: "red" }}>*</span>
        <ImageType
          className="block"
          MultiStepForm={imgMultiStepForm}
          renderPhotos={() => renderType(imgMultiStepForm, t)}
          title={t("Images")}
        />
      </div>
      <div className="mx-auto mt-4 text-sm">
        <span>{t("Foto Fenster")}:</span>
        <span style={{ color: "red" }}>*</span>
        <ImageType
          className="block"
          MultiStepForm={imgMultiStepForm}
          renderPhotos={() => renderType(imgMultiStepForm, t)}
          title={t("Images")}
        />
      </div>
      <div className="mx-auto mt-4 text-sm">
        <span>{t("Foto Dämmung")}:</span>
        <span style={{ color: "red" }}>*</span>
        <ImageType
          className="block"
          MultiStepForm={imgMultiStepForm}
          renderPhotos={() => renderType(imgMultiStepForm, t)}
          title={t("Images")}
        />
      </div>
      <div style={{ marginTop: "1rem" }}>
        <>
          {fRequired && (
            <div style={{ color: "red" }}>
              {t("Please fill in the required fields *")}
            </div>
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
                if (
                  city.length === 0 ||
                  zip.length === 0 ||
                  address.length === 0
                ) {
                  setFRequired(true);
                  return;
                }
                setFRequired(false);
                my_swiper.slideNext();
                return navigation.next();
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
