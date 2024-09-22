import React from "react";
import { Button, Label, Input, Select } from "@windmill/react-ui";
import {rechteckig, tfoermig, l, u, rechtecka, rechteckb, rechteckc, rechteckd, ta, tb, tc, td, te, tf, tg, th, la, lb, lc, ld, le, lf, ua, ub, uc, ud, ue, uf, ug, uh} from "../../../assets/img/buildingForms"
import { useTranslation } from "react-i18next";

export const Floors = ({
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
  const {
    buildingType,
    yearofbuilding,
    vollgeschosse,
    vollgeschosshoehe,
    uValueBodenplatte,
    dachgeschossAusbau,
    kellerfläche,
    kellergeschosshöhe,
    überstand,
    livingArea,
    baujahrderheizung,
    keller,
    lueftung,
    gebaudeausrichtung,
    gebaeudeart,
    gebaeudeteil,
    bauweise,
    uwert,
    numberofunits,
    erneuerbareenergien,
    unterEG,
    dachform,
    dachbodenDaemmung,
    massiveWalls,
    uValue,
    kellerdeckendämmung,
    kellerfenster,
    bodenplatte,
    woodenWalls,
    wayOfBuilding,
    außenwandlaengea,
    außenwandlaengeb,
    außenwandlaengec,
    außenwandlaenged,
    außenwandlaengeta,
    außenwandlaengetb,
    außenwandlaengetc,
    außenwandlaengetd,
    außenwandlaengete,
    außenwandlaengetf,
    außenwandlaengetg,
    außenwandlaengeth,
    außenwandlaengela,
    außenwandlaengelb,
    außenwandlaengelc,
    außenwandlaengeld,
    außenwandlaengele,
    außenwandlaengelf,
    außenwandlaengeua,
    außenwandlaengeub,
    außenwandlaengeuc,
    außenwandlaengeud,
    außenwandlaengeue,
    außenwandlaengeuf,
    außenwandlaengeug,
    außenwandlaengeuh
  } = formData;
  const buildingTypeProps = { formData, setForm };
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-4">
      <h2 className="mb-4 mt-8 text-lg font-semibold text-gray-600 dark:text-gray-300">
        {t("Informationen zu den Geschossen")}
      </h2>
      <p className="text-gray-700 font-regular text-md mb-8">
      Für die Erstellung des Bedarfsausweises benötigen wir in diesem Schritt alle Informationen zu den bautechnischen Gegebenheiten Ihres Gebäudes.
      </p>
      <h3 className="mt-8 text-md font-medium text-gray-600 dark:text-gray-300">
        {t("Vollgeschosse")}
      </h3>
      <Label className="mt-4">
        <span>{t("Anzahl Vollgeschosse")}:</span>
        <Select
          className="mb-4 mt-1"
          label="Vollgeschosse"
          name="vollgeschosse"
          value={vollgeschosse}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="1">{t("1")}</option>
          <option value="2">{t("2")}</option>
          <option value="3">{t("3")}</option>
          <option value="4">{t("4")}</option>
          <option value="5">{t("5")}</option>
          <option value="6">{t("6")}</option>
          <option value="7">{t("7")}</option>
          <option value="8">{t("8")}</option>
          <option value="9">{t("9")}</option>
          <option value="10">{t("10")}</option>
          <option value="11">{t("11")}</option>
          <option value="12">{t("12")}</option>
          <option value="13">{t("13")}</option>
          <option value="14">{t("14")}</option>
          <option value="15">{t("15")}</option>
          <option value="16">{t("16")}</option>
          <option value="17">{t("17")}</option>
          <option value="18">{t("18")}</option>
          <option value="19">{t("19")}</option>
          <option value="20">{t("20")}</option>
          <option value="21">{t("21")}</option>
          <option value="22">{t("22")}</option>
          <option value="23">{t("23")}</option>
          <option value="24">{t("24")}</option>
          <option value="25">{t("25")}</option>
          <option value="26">{t("26")}</option>
          <option value="27">{t("27")}</option>
          <option value="28">{t("28")}</option>
          <option value="29">{t("29")}</option>
          <option value="30">{t("30")}</option>
          <option value="30+">{t(">30")}</option>
        </Select>
      </Label>
      <Label className="mt-4">
        <span>{t("Mittlere Vollgeschosshöhe (inkl. Decke)")}:</span>
        <Select
          className="mb-4 mt-1"
          label="Vollgeschosshoehe"
          name="vollgeschosshoehe"
          value={vollgeschosshoehe}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="2,00">{t("2,00 m")}</option>
          <option value="2,05">{t("2,05 m")}</option>
          <option value="2,10">{t("2,10 m")}</option>
          <option value="2,15">{t("2,15 m")}</option>
          <option value="2,20">{t("2,20 m")}</option>
          <option value="2,25">{t("2,25 m")}</option>
          <option value="2,30">{t("2,30 m")}</option>
          <option value="2,35">{t("2,35 m")}</option>
          <option value="2,40">{t("2,40 m")}</option>
          <option value="2,45">{t("2,45 m")}</option>
          <option value="2,50">{t("2,50 m")}</option>
          <option value="2,55">{t("2,55 m")}</option>
          <option value="2,60">{t("2,60 m")}</option>
          <option value="2,65">{t("2,65 m")}</option>
          <option value="2,70">{t("2,70 m")}</option>
          <option value="2,75">{t("2,75 m")}</option>
          <option value="2,80">{t("2,80 m")}</option>
          <option value="2,85">{t("2,85 m")}</option>
          <option value="2,90">{t("2,90 m")}</option>
          <option value="2,95">{t("2,95 m")}</option>
          <option value="3,00">{t("3,00 m")}</option>
          <option value="3,05">{t("3,05 m")}</option>
          <option value="3,10">{t("3,10 m")}</option>
          <option value="3,15">{t("3,15 m")}</option>
          <option value="3,20">{t("3,20 m")}</option>
          <option value="3,25">{t("3,25 m")}</option>
          <option value="3,30">{t("3,30 m")}</option>
          <option value="3,35">{t("3,35 m")}</option>
          <option value="3,40">{t("3,40 m")}</option>
          <option value="3,45">{t("3,45 m")}</option>
          <option value="3,50">{t("3,50 m")}</option>
          <option value="3,55">{t("3,55 m")}</option>
          <option value="3,60">{t("3,60 m")}</option>
          <option value="3,65">{t("3,65 m")}</option>
          <option value="3,70">{t("3,70 m")}</option>
          <option value="3,75">{t("3,75 m")}</option>
          <option value="3,80">{t("3,80 m")}</option>
          <option value="3,85">{t("3,85 m")}</option>
          <option value="3,90">{t("3,90 m")}</option>
          <option value="3,95">{t("3,95 m")}</option>
          <option value="4,00">{t("4,00 m")}</option>
        </Select>
      </Label>
      <h3 className="mt-8 text-md font-medium text-gray-600 dark:text-gray-300">
        {t("Kellergeschoss")}
      </h3>
      <Label className="mt-4">
        <span>{t("Was liegt unterhalb des Erdgeschosses")}?</span>
        <Select
          className="mb-4 mt-1"
          label="untereg"
          name="untereg"
          value={unterEG}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="unbeheizt">{t("Unbeheizter Keller")}</option>
          <option value="teilweisebeheizt">{t("Teilweise beheizter Keller")}</option>
          <option value="vollbeheizt">{t("Vollbeheizter Keller")}</option>
           <option value="bodenplatte">{t("Bodenplatte")}</option>
        </Select>
      </Label>
      <Label>
        <span>{t("Wie groß ist die beheizte Fläche im Keller (in qm)?")}</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="kellerfläche"
          name="kellerfläche"
          placeholder="Fläche eingeben..."
          value={kellerfläche}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      <Label className="mt-4">
        <span>{t("Kellergeschosshöhe (inkl. Decke)")}:</span>
        <Select
          className="mb-4 mt-1"
          label="kellergeschosshöhe"
          name="kellergeschosshöhe"
          value={kellergeschosshöhe}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="2,00">{t("2,00m")}</option>
          <option value="2,05">{t("2,05m")}</option>
          <option value="2,10">{t("2,10m")}</option>
          <option value="2,15">{t("2,15m")}</option>
          <option value="2,20">{t("2,20m")}</option>
          <option value="2,25">{t("2,25m")}</option>
          <option value="2,30">{t("2,30m")}</option>
          <option value="2,35">{t("2,35m")}</option>
          <option value="2,40">{t("2,40m")}</option>
          <option value="2,45">{t("2,45m")}</option>
          <option value="2,50">{t("2,50m")}</option>
          <option value="2,55">{t("2,55m")}</option>
          <option value="2,60">{t("2,60m")}</option>
          <option value="2,65">{t("2,65m")}</option>
          <option value="2,70">{t("2,70m")}</option>
          <option value="2,75">{t("2,75m")}</option>
          <option value="2,80">{t("2,80m")}</option>
          <option value="2,85">{t("2,85m")}</option>
          <option value="2,90">{t("2,90m")}</option>
          <option value="2,95">{t("2,95m")}</option>
          <option value="3,00">{t("3,00m")}</option>
          <option value="3,05">{t("3,05m")}</option>
          <option value="3,10">{t("3,10m")}</option>
          <option value="3,15">{t("3,15m")}</option>
          <option value="3,20">{t("3,20m")}</option>
        </Select>
      </Label>
      <Label className="mt-4">
        <span>{t("Überstand Keller Erdreich")}:</span>
        <Select
          className="mb-4 mt-1"
          label="überstand"
          name="überstand"
          value={überstand}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="0,00">{t("0,00m")}</option>
          <option value="0,20">{t("0,20m")}</option>
          <option value="0,40">{t("0,40m")}</option>
          <option value="0,60">{t("0,60m")}</option>
          <option value="0,80">{t("0,80m")}</option>
          <option value="1,00">{t("1,00m")}</option>
          <option value="1,20">{t("1,20m")}</option>
          <option value="1,40">{t("1,40m")}</option>
          <option value="1,60">{t("1,60m")}</option>
          <option value="1,80">{t("1,80m")}</option>
          <option value="2,00">{t("2,00m")}</option>
          <option value="2,20">{t("2,20m")}</option>
          <option value="2,40">{t("2,40m")}</option>
        </Select>
      </Label>
      <Label className="mt-4">
        <span>{t("Kellerdeckendämmung")}:</span>
        <Select
          className="mb-4 mt-1"
          label="kellerdeckendämmung"
          name="kellerdeckendämmung"
          value={kellerdeckendämmung}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="0">{t("0cm")}</option>
          <option value="1">{t("1cm")}</option>
          <option value="2">{t("2cm")}</option>
          <option value="3">{t("3cm")}</option>
          <option value="4">{t("4cm")}</option>
          <option value="5">{t("5cm")}</option>
          <option value="6">{t("6cm")}</option>
          <option value="7">{t("7cm")}</option>
          <option value="8">{t("8cm")}</option>
          <option value="9">{t("9cm")}</option>
          <option value="10">{t("10cm")}</option>
          <option value="12">{t("12cm")}</option>
          <option value="14">{t("14cm")}</option>
          <option value="16">{t("16cm")}</option>
          <option value="18">{t("18cm")}</option>
          <option value="20">{t("20cm")}</option>
          <option value="22">{t("22cm")}</option>
          <option value="24">{t("24cm")}</option>
          <option value="26">{t("26cm")}</option>
          <option value="28">{t("28cm")}</option>
          <option value="30">{t("30cm")}</option>
          <option value="35">{t("35cm")}</option>
          <option value="40">{t("40cm")}</option>
        </Select>
      </Label>
      <Label className="mt-4">
        <span>{t("Kellerfenster")}:</span>
        <Select
          className="mb-4 mt-1"
          label="kellerfenster"
          name="kellerfenster"
          value={kellerfenster}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="keine">{t("keine oder kaum Sonneneinstrahlung")}</option>
          <option value="stark">{t("starke Sonneneinstrahlung")}</option> 
        </Select>
      </Label>
      <Label className="mt-4">
        <span>{t("Bodenplatte")}:</span>
        <Select
          className="mb-4 mt-1"
          label="bodenplatte"
          name="bodenplatte"
          value={bodenplatte}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="1">{t("Boden gegen Erdreich, Stahlbeton massiv")}</option>
          <option value="2">{t("Boden gegen Erdreich, Hohlraum als Holzkonstruktion")}</option> 
          <option value="3">{t("Boden gegen Erdreich als Ziegel- oder Hohlsteinkonstrukt")}</option> 
        </Select>
      </Label>
       {/* U Value bodenplatte */}
       <Label className="mt-4">
        <span>{t("U-Wert Bodenplatte (falls bekannt)")}:</span>
        <Select
          className="mb-4 mt-1"
          label="uValueBodenplatte"
          name="uValueBodenplatte"
          value={uValueBodenplatte}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="nichtbekannt">{t("Nicht bekannt")}</option>
          <option value="0,2">{t("0,2 W/qm*K")}</option>
          <option value="0,25">{t("0,25 W/qm*K")}</option>
          <option value="0,3">{t("0,3 W/qm*K")}</option>
          <option value="0,35">{t("0,35 W/qm*K")}</option>
          <option value="0,4">{t("0,4 W/qm*K")}</option>
          <option value="0,45">{t("0,45 W/qm*K")}</option>
          <option value="0,5">{t("0,5 W/qm*K")}</option>
          <option value="0,6">{t("0,6 W/qm*K")}</option>
          <option value="0,7">{t("0,7 W/qm*K")}</option>
          <option value="0,8">{t("0,8 W/qm*K")}</option>
          <option value="0,9">{t("0,9 W/qm*K")}</option>
          <option value="1,0">{t("1,0 W/qm*K")}</option>
          <option value="1,3">{t("1,3 W/qm*K")}</option>
          <option value="1,7">{t("1,7 W/qm*K")}</option>
          <option value="2,0">{t("2,0 W/qm*K")}</option>
          <option value="2,3">{t("2,3 W/qm*K")}</option>
          <option value="2,7">{t("2,7 W/qm*K")}</option>
          <option value="3,0">{t("3,0 W/qm*K")}</option>
        </Select>
      </Label>
      <h3 className="mt-8 text-md font-medium text-gray-600 dark:text-gray-300">
        {t("Dachgeschoss")}
      </h3>
      <Label className="mt-4">
        <span>{t("Dachgeschoss")}:</span>
        <Select
          className="mb-4 mt-1"
          label="dachgeschossausbau"
          name="dachgeschossausbau"
          value={dachgeschossAusbau}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="ausgebaut">{t("Ausgebaut")}</option>
          <option value="nicht ausgebaut">{t("Nicht ausgebaut")}</option>
     
        </Select>
      </Label>
      <Label className="mt-4">
        <span>{t("Dachform")}:</span>
        <Select
          className="mb-4 mt-1"
          label="dachform"
          name="dachform"
          value={dachform}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="flachdach">{t("Flachdach")}</option>
          <option value="flachdach">{t("Flachdach")}</option>
          <option value="flachdach">{t("Flachdach")}</option>
          <option value="flachdach">{t("Flachdach")}</option>
          <option value="flachdach">{t("Flachdach")}</option>
          <option value="flachdach">{t("Flachdach")}</option>
          <option value="flachdach">{t("Flachdach")}</option>
     
        </Select>
      </Label>
      <Label className="mt-4">
        <span>{t("Dachbodendämmung")}:</span>
        <Select
          className="mb-4 mt-1"
          label="dachbodendaemmung"
          name="dachbodendaemmung"
          value={dachbodenDaemmung}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="0">{t("0 cm")}</option>
          <option value="1">{t("1 cm")}</option>
          <option value="2">{t("2 cm")}</option>
          <option value="3">{t("3 cm")}</option>
          <option value="4">{t("4 cm")}</option>
          <option value="5">{t("5 cm")}</option>
          <option value="6">{t("6 cm")}</option>
          <option value="7">{t("7 cm")}</option>
          <option value="8">{t("8 cm")}</option>
          <option value="9">{t("9 cm")}</option>
          <option value="10">{t("10 cm")}</option>
          <option value="12">{t("12 cm")}</option>
          <option value="14">{t("14 cm")}</option>
          <option value="16">{t("16 cm")}</option>
          <option value="18">{t("18 cm")}</option>
          <option value="20">{t("20 cm")}</option>
          <option value="22">{t("22 cm")}</option>
          <option value="24">{t("24 cm")}</option>
          <option value="26">{t("26 cm")}</option>
          <option value="28">{t("28 cm")}</option>
          <option value="30">{t("30 cm")}</option>
          <option value="32">{t("32 cm")}</option>
          <option value="34">{t("34 cm")}</option>
          <option value="36">{t("36 cm")}</option>
          <option value="38">{t("38 cm")}</option>
          <option value="40">{t("40 cm")}</option>
        </Select>
      </Label>
      
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
