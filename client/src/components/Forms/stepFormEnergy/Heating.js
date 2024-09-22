import React from "react";
import { Button, Label, Input, Select } from "@windmill/react-ui";
import {rechteckig, tfoermig, l, u, rechtecka, rechteckb, rechteckc, rechteckd, ta, tb, tc, td, te, tf, tg, th, la, lb, lc, ld, le, lf, ua, ub, uc, ud, ue, uf, ug, uh} from "../../../assets/img/buildingForms"
import { useTranslation } from "react-i18next";

export const Heating = ({
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
    lüftung,
    heizungsanlage,
    nachtabschaltung,
    stellplatz,
    heizungspumpe,
    wärmeübergabe,
    warmwasserbereitung,
    luftwechselrate,
    baujahrderheizung2,
    kollektorfläche,
    kollektorfläche2,
    verwendung,
    ausrichtung,
    ausrichtung2,
    neigung,
    neigung2,
    solarwärmespeicher,
    kaltwassertemperatur,
    art,
    belüftung,
    stromspeicherkapazität,
    außenwanddämmung,
    solarkollektor,
    photovoltaik,
    baujahrderfenster,
    uValueFenster,
    dachgeschossAusbau,
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
    fenster
  } = formData;
  const buildingTypeProps = { formData, setForm };
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-4">
      <h2 className="mb-4 mt-8 text-lg font-semibold text-gray-600 dark:text-gray-300">
        {t("Informationen zur Heizung")}
      </h2>
      <p className="text-gray-700 font-regular text-md mb-8">
      Bitte machen Sie hier detaillierte Angaben zum Heizungstyp in Ihrem Gebäude. Gibt es mehrere unterschiedliche Heizungsanlagen, vermerken Sie dies bitte auf der letzten Seite unter "Sonstige Informationen".
      </p>
      <Label>
        <span>{t("Baujahr der Heizung")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="baujahrderheizung"
          name="baujahrderheizung"
          placeholder="Baujahr eingeben..."
          value={baujahrderheizung2}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      {/* heizungsanlage */}
      <Label className="mt-4">
        <span>{t("Heizungsanlage")}:</span>
        <Select
          className="mb-4 mt-1"
          label="heizungsanlage"
          name="heizungsanlage"
          value={heizungsanlage}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="gas">{t("Gas")}</option>
          <option value="öl">{t("Öl")}</option>
          <option value="holz">{t("Pellets/Holz/Feststoffe")}</option>
          <option value="fernwärme">{t("Fernwärme")}</option>
          <option value="wärmepumpe">{t("Wärmepumpe")}</option>
          <option value="elektrische">{t("Elektrische Heizung")}</option>
          <option value="einzelofen">{t("Einzelöfen")}</option>
        </Select>
      </Label>
      <Label className="mt-4">
        <span>{t("Nachtabschaltung")}:</span>
        <Select
          className="mb-4 mt-1"
          label="nachtabschaltung"
          name="nachtabschaltung"
          value={nachtabschaltung}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="nachtabschaltung">{t("Nachtabschaltung")}</option>
          <option value="nachtabsenkung">{t("Nachtabsenkung")}</option>
          <option value="keine">{t("Keine Abschaltung/Absenkung")}</option>
        </Select>
      </Label>
      <Label className="mt-4">
        <span>{t("Wärmeerzeuger-Stellplatz")}:</span>
        <Select
          className="mb-4 mt-1"
          label="stellplatz"
          name="stellplatz"
          value={stellplatz}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="wohnraum">{t("Im Wohnraum")}</option>
          <option value="heizraum">{t("Im Heizraum")}</option>
        </Select>
      </Label>
      <Label className="mt-4">
        <span>{t("Heizungspumpe")}:</span>
        <Select
          className="mb-4 mt-1"
          label="heizungspumpe"
          name="heizungspumpe"
          value={heizungspumpe}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="mehrstufig">{t("Mehrstufig geregelt")}</option>
          <option value="hocheffizienz">{t("Hocheffizienzpumpe")}</option>
          <option value="ungeregelt">{t("Ungeregelt")}</option>
        </Select>
      </Label>
      <Label className="mt-4">
        <span>{t("Wärmeübergabe (Heizung)")}:</span>
        <Select
          className="mb-4 mt-1"
          label="wärmeübergabe"
          name="wärmeübergabe"
          value={wärmeübergabe}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="heizkörper">{t("Heizkörper")}</option>
          <option value="fußboden">{t("Fußbodenheizung")}</option>
          <option value="heizundfußboden1">{t("Heizkörper & Fußbodenheizung 30/70")}</option>
          <option value="heizundfußboden2">{t("Heizkörper & Fußbodenheizung 50/50")}</option>
        </Select>
      </Label>
      <Label className="mt-4">
        <span>{t("Warmwasserbereitung")}:</span>
        <Select
          className="mb-4 mt-1"
          label="warmwasserbereitung"
          name="warmwasserbereitung"
          value={warmwasserbereitung}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="heizungsanlage">{t("Mit Heizungsanlage")}</option>
          <option value="zusatz">{t("Zusätzliche Warmwasserbereitung")}</option>
        </Select>
      </Label>
      <Label className="mt-4">
        <span>{t("Lüftung")}:</span>
        <Select
          className="mb-4 mt-1"
          label="lüftung"
          name="lüftung"
          value={lüftung}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="fenster">{t("Fensterlüftung")}</option>
          <option value="ohne">{t("Lüftungsanlage ohne Wärmerückgewinnung")}</option>
          <option value="zentral">{t("Lüftungsanlage mit Wärmerückgewinnung (zentral)")}</option>
          <option value="dezentral">{t("Lüftungsanlage mit Wärmerückgewinnung (dezentral)")}</option>
        </Select>
      </Label>
      <Label className="mt-4">
        <span>{t("Luftwechselrate")}:</span>
        <Select
          className="mb-4 mt-1"
          label="luftwechselrate"
          name="luftwechselrate"
          value={luftwechselrate}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="ohne">{t("Ohne Luftdichtheitsprüfung (0,7/h)")}</option>
          <option value="mit">{t("Mit Luftdichtheitsprüfung (0,6/h)")}</option>
          <option value="undicht">{t("Undicht (1/h)")}</option>
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
