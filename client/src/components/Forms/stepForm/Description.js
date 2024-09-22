import React from "react";
import { Label } from "@windmill/react-ui";
import { Button } from "@windmill/react-ui";
import { useTranslation } from "react-i18next";
import { LimitedTextarea } from "./LimitedText";


export const Description = ({
  formData,
  setForm,
  navigation,
  isReviewMode,
  my_swiper
}) => {
  const { go } = navigation;
  const { description, features, location, additionalDescription } = formData;
  const { t } = useTranslation();
  const allDescription = [
    {value: description, text: 'description'},
    {value: features, text: 'features'},
    {value: location, text: 'location'},
    {value: additionalDescription, text: 'additionalDescription'} ];
  return (
    <div className="container mx-auto px-4">
      {allDescription.map((a,i) => (
        <Label className="mt-4" key={i}>
          <span>{t(a.text)}</span>
          <LimitedTextarea
            rows="3"
            limit={3800}
            setForm={setForm}
            value={a.value}
            name={a.text}
            t={t}
            />
        </Label>
      ))}
      <div style={{ marginTop: "1rem" }}>
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
                my_swiper.slideNext();
                return navigation.next()
              }}
            >
              {t("next")}
            </Button>
          </>
      </div>
    </div>
  );
};
