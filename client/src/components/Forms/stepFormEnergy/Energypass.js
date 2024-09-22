import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
} from "@windmill/react-ui";
import { useTranslation } from "react-i18next";
import {
  Verbrauchsausweis,
  Bedarfsausweis,
} from "../../Cards/PricingCardEnergy";

export const Energypass = ({
  formData,
  setCurrentPlan,
  navigation,
  my_swiper,
  fRequired
}) => {
  const {
    newbuilding,
    fertiggestelltLetzte5Jahre,
    wohneinheiten,
    fertigstellungVor1978,
  } = formData;
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-4">
      <h2 className="my-8 text-lg font-semibold text-gray-600 dark:text-gray-300">
        {t("Folgende Energieausweise sind geeignet")}
      </h2>
      {newbuilding === "yes" && fertiggestelltLetzte5Jahre === "yes" && (
        <Card className="mb-8">
          <CardBody>
            Den Ausweis erhalten Sie bei jungen Neubauten in der Regel von Ihrem
            zuständigen Architekten oder Planer.
          </CardBody>
        </Card>
      )}
      {newbuilding === "yes" && fertiggestelltLetzte5Jahre === "no" && (
        <div className="md:flex mx-auto block md:w-full w-8/12 gap-4 justify-start">
          <Verbrauchsausweis setCurrentPlan={setCurrentPlan} my_swiper={my_swiper} navigation={navigation} />
        </div>
      )}
      {newbuilding === "no" && wohneinheiten === "yes" && (
        <div className="md:flex mx-auto block md:w-full w-8/12 gap-4 justify-start">
          <Verbrauchsausweis setCurrentPlan={setCurrentPlan} my_swiper={my_swiper} navigation={navigation} />
          <Bedarfsausweis setCurrentPlan={setCurrentPlan} my_swiper={my_swiper} navigation={navigation} />
        </div>
      )}
       {newbuilding === "no" && wohneinheiten === "no" && fertigstellungVor1978 === "no" && (
        <div className="md:flex mx-auto block md:w-full w-8/12 gap-4 justify-start">
          <Verbrauchsausweis setCurrentPlan={setCurrentPlan} my_swiper={my_swiper} navigation={navigation} />
          <Bedarfsausweis setCurrentPlan={setCurrentPlan} my_swiper={my_swiper} navigation={navigation} />
        </div>
      )}
      {newbuilding === "no" && wohneinheiten === "no" && fertigstellungVor1978 === "yes" && <Bedarfsausweis setCurrentPlan={setCurrentPlan} my_swiper={my_swiper} navigation={navigation} />}

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
        </>
      </>
    </div>
  );
};
