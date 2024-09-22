import { Button } from "@windmill/react-ui";
import { useTranslation } from "react-i18next";
import Img from "./Img";
import ImageType from "./imageType";
import React from "react";
export const renderType = ( MultiStepForm, t) => {
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
export const Images = ({
  imgMultiStepForm,
  planMultiStepForm,
  navigation,
  isReviewMode,
  my_swiper
}) => {
  const { go } = navigation;
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 mt-4">
      <div className="flex flex-col md:flex-row">
        <ImageType
          className='flex-wrap'
          MultiStepForm={imgMultiStepForm}
          renderPhotos={()=> renderType(imgMultiStepForm, t)}
          title={t("Images")}
        />
        <ImageType
          className='flex-wrap'
          MultiStepForm={planMultiStepForm}
          renderPhotos={()=> renderType(planMultiStepForm, t)}
          title={t("Floorplans")}
        />
      </div>
      <div className="text-sm py-2">Max. 20 Bilder / 10 Grundrisse / 20MB pro Bild</div>
      <div style={{ marginTop: "1rem" }}>
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
              onClick={() => {
                my_swiper.slideNext();
                return navigation.next();
              }}
            >
              {t("next")}
            </Button>
          </>
      </div>
    </div>
  );
};