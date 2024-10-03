import React from "react";
import { Input, Label } from "@windmill/react-ui";
import { Button } from "@windmill/react-ui";
import { useTranslation } from "react-i18next";
import "./style.module.css"
import 'react-phone-number-input/style.css';
import PhoneInput, { isValidPhoneNumber }  from 'react-phone-number-input';
export const Contact = ({ formData, setForm, navigation, isReviewMode, my_swiper, fRequired, setFRequired, phone, setPhone}) => {
  const { go } = navigation;
  const { formEmail, contactName, nameHide, lastName } = formData;
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4">
      <Label className="mt-4">
        <span>{t("contact name")}:</span>
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
        <div className="flex items-center">
          <Input
            className="mr-2"
            type="checkbox"
            name="nameHide"
            value={nameHide}
            onChange={setForm}
          />
          <span>{t("hide name")}</span>
        </div>
      </Label>
      <Label className="mt-4">
        <span>{t("e-mail")}:</span>
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
      <Label className="mt-4">
        <span>{t("phone number")}:</span>
        { fRequired && <span style={{color: "red"}}>{t("Please Provide A Valid Phone Number!")}</span> }
        <div>
          <PhoneInput
            className="mb-4 mt-1 "
            label="Phone Number"
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullwidth='true'
            name="phone"
            international
            countryCallingCodeEditable={false}
            defaultCountry="DE"
            value={phone}
            onChange={setPhone}
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
                console.log(phone);
                if(contactName.length === 0 || formEmail.length === 0 || lastName.length === 0){
                  setFRequired(true);
                  return;
                }
                if(phone && phone.length >= 4 && !isValidPhoneNumber(phone)){
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
