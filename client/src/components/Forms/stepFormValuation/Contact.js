import React from "react";
import { Input, Label } from "@windmill/react-ui";
import { Button } from "@windmill/react-ui";
import { useTranslation } from "react-i18next";

export const Contact = ({ formData, setForm, navigation, isReviewMode, my_swiper, fRequired, setFRequired }) => {
  const { go } = navigation;
  const { phone, formEmail, contactName, nameHide, lastName } = formData;
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4">
      <Label className="mt-4">
        <span>{t("contact name")}</span>
        <span style={{color: "red"}}>*</span>
        <div className="flex gap-4">
        <Input
            className="w-1/2 mb-4 mt-1"
            placeholder={t("enter first name")}
            name="contactName"
            value={formData.contactName}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            type="text"
            fullwidth='false'
          />
           <Input
            className="w-1/2 mb-4 mt-1"
            placeholder={t("enter last name")}
            name="lastName"
            value={formData.lastName}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            type="text"
            fullwidth='false'
          />
        </div>
       
      </Label>
      <Label className="mt-4">
        <span>{t("e-mail")}</span>
        <span style={{color: "red"}}>*</span>
        <div>
          <Input
            className="mb-4 mt-1"
            label="E-Mail"
            name="formEmail"
            value={formEmail}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            placeholder={t("enter e-mail")}
            fullwidth='true'
            type="email"
          />
        </div>
      </Label>
     
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
                if(contactName.length === 0 || formEmail.length === 0 || lastName.length === 0){
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
