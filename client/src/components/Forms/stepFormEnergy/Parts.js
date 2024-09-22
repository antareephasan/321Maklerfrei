import React from "react";
import { Button, Label, Input, Select } from "@windmill/react-ui";
import {rechteckig, tfoermig, l, u, rechtecka, rechteckb, rechteckc, rechteckd, ta, tb, tc, td, te, tf, tg, th, la, lb, lc, ld, le, lf, ua, ub, uc, ud, ue, uf, ug, uh} from "../../../assets/img/buildingForms"
import { useTranslation } from "react-i18next";

export const Parts = ({
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
        {t("Informationen zu den Bauteilen Ihres Gebäudes")}
      </h2>
      <p className="text-gray-700 font-regular text-md mb-8">
      Für die Erstellung des Bedarfsausweises benötigen wir in diesem Schritt alle Informationen zu den Fenstern und den bautechnischen Gegebenheiten Ihres Gebäudes.
      </p>
      <Label className="mt-4">
        <span>{t("Fenster")}:</span>
        <Select
          className="mb-4 mt-1"
          label="fenster"
          name="fenster"
          value={fenster}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="kunststoff">{t("Kunststoff")}</option>
          <option value="holzeinfach">{t("Holzfenster (Einfachverglasung)")}</option>
          <option value="holzzweifach">{t("Holzfenster (Zweifachverglasung)")}</option>
          <option value="aluminium">{t("Aluminium/Stahl")}</option>
          <option value="dreifach">{t("Dreifachverglasung")}</option>
        </Select>
      </Label>
      <Label>
        <span>{t("Baujahr der Fenster")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="baujahrderfenster"
          name="baujahrderfenster"
          placeholder="Baujahr eingeben..."
          value={baujahrderfenster}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      {/* U Value bodenplatte */}
      <Label className="mt-4">
        <span>{t("U-Wert Fenster (falls bekannt)")}:</span>
        <Select
          className="mb-4 mt-1"
          label="uValueFenster"
          name="uValueFenster"
          value={uValueFenster}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="nichtbekannt">{t("Nicht bekannt")}</option>
          <option value="0,4">{t("0,4 W/qm*K")}</option>
          <option value="0,5">{t("0,5 W/qm*K")}</option>
          <option value="0,6">{t("0,6 W/qm*K")}</option>
          <option value="0,7">{t("0,7 W/qm*K")}</option>
          <option value="0,8">{t("0,8 W/qm*K")}</option>
          <option value="0,9">{t("0,9 W/qm*K")}</option>
          <option value="1,0">{t("1,0 W/qm*K")}</option>
          <option value="1,1">{t("1,1 W/qm*K")}</option>
          <option value="1,2">{t("1,2 W/qm*K")}</option>
          <option value="1,3">{t("1,3 W/qm*K")}</option>
          <option value="1,4">{t("1,4 W/qm*K")}</option>
          <option value="1,5">{t("1,5 W/qm*K")}</option>
          <option value="1,7">{t("1,7 W/qm*K")}</option>
          <option value="1,9">{t("1,9 W/qm*K")}</option>
          <option value="2,0">{t("2,0 W/qm*K")}</option>
          <option value="2,3">{t("2,3 W/qm*K")}</option>
          <option value="2,7">{t("2,7 W/qm*K")}</option>
          <option value="3,0">{t("3,0 W/qm*K")}</option>
          <option value="3,5">{t("3,5 W/qm*K")}</option>
          <option value="4,0">{t("4,0 W/qm*K")}</option>
          <option value="4,3">{t("4,3 W/qm*K")}</option>
          <option value="5,0">{t("5,0 W/qm*K")}</option>
        </Select>
      </Label>
      {/* U Value bodenplatte */}
      <Label className="mt-4">
        <span>{t("Nachträgliche Außenwanddämmung")}:</span>
        <Select
          className="mb-4 mt-1"
          label="außenwanddämmung"
          name="außenwanddämmung"
          value={außenwanddämmung}
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
      <h3 className="mt-8 text-md font-medium text-gray-600 dark:text-gray-300">
        {t("Solarkollektor")}
      </h3>
      <Label className="mt-4">
        <span>{t("Gibt es einen Solarkollektor")}?</span>
        <Select
          className="mb-4 mt-1"
          label="solarkollektor"
          name="solarkollektor"
          value={solarkollektor}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="nein">{t("Nein")}</option>
          <option value="ungedeckt">{t("Ungedeckter Kollektor")}</option>
          <option value="ungedeckt">{t("Abgedeckter Flach-Kollektor")}</option>
          <option value="ungedeckt">{t("Vakuum Röhrenkollektor mit flachem Absorber")}</option>
          <option value="ungedeckt">{t("Vakuum Röhrenkollektor mit rundem Absorber")}</option>
        </Select>
      </Label>
      <Label className="mt-4">
        <span>{t("Verwendung")}:</span>
        <Select
          className="mb-4 mt-1"
          label="verwendung"
          name="verwendung"
          value={verwendung}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="nein">{t("Nein")}</option>
          <option value="ungedeckt">{t("Warmwasser und Raumheizung")}</option>
          <option value="ungedeckt">{t("Warmwasser - Rest Raumheizung")}</option>
          <option value="ungedeckt">{t("Raumheizung - Rest Warmwasser")}</option>
        </Select>
      </Label>
      <Label>
        <span>{t("Freie Kollektorfläche (in qm)")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="kollektorfläche"
          name="kollektorfläche"
          placeholder="Fläche eingeben..."
          value={kollektorfläche}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      <Label className="mt-4">
        <span>{t("Ausrichtung")}:</span>
        <Select
          className="mb-4 mt-1"
          label="ausrichtung"
          name="ausrichtung"
          value={ausrichtung}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="osten">{t("Osten")}</option>
          <option value="suedosten">{t("Südosten")}</option>
          <option value="sueden">{t("Süden")}</option>
          <option value="suedwesten">{t("Südwesten")}</option>
        </Select>
      </Label>
      <Label>
        <span>{t("Neigung (in °)")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="neigung"
          name="neigung"
          placeholder="Neigung eingeben..."
          value={neigung}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      <Label>
        <span>{t("Größe des Solarwärmespeichers (in Liter)")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="solarwärmespeicher"
          name="solarwärmespeicher"
          placeholder="Größe eingeben..."
          value={solarwärmespeicher}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      <Label>
        <span>{t("Kaltwassertemperatur (in °C)")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="kaltwassertemperatur"
          name="kaltwassertemperatur"
          placeholder="Temperatur eingeben..."
          value={kaltwassertemperatur}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      <h3 className="mt-8 text-md font-medium text-gray-600 dark:text-gray-300">
        {t("Photovoltaikanlage")}
      </h3>
      <Label className="mt-4">
        <span>{t("Gibt es eine Photovoltaikanlage")}?</span>
        <Select
          className="mb-4 mt-1"
          label="photovoltaik"
          name="photovoltaik"
          value={photovoltaik}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="ja">{t("Ja")}</option>
          <option value="nein">{t("Nein")}</option>
        </Select>
      </Label>
      <Label className="mt-4">
        <span>{t("Art")}:</span>
        <Select
          className="mb-4 mt-1"
          label="art"
          name="art"
          value={art}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="monokristallin">{t("Monokristallines Silizium - geringe Leistung (Ppk = 0,12 kW/qm)")}</option>
          <option value="monokristallin1">{t("Monokristallines Silizium - mittlere Leistung (Ppk = 0,15 kW/qm)")}</option>
          <option value="monokristallin2">{t("Monokristallines Silizium - hohe Leistung (Ppk = 0,18 kW/qm)")}</option>
          <option value="multikristallin">{t("Multikristallines Silizium - geringe Leistung (Ppk = 0,10 kW/qm)")}</option>
          <option value="multikristallin1">{t("Multikristallines Silizium - mittlere Leistung (Ppk = 0,13 kW/qm)")}</option>
          <option value="multikristallin2">{t("Multikristallines Silizium - hohe Leistung (Ppk = 0,16 kW/qm)")}</option>
          <option value="dünnschicht">{t("Dünnschichtmodul aus amorphem Silizium - geringe Leistung (Ppk = 0,04 kW/qm)")}</option>
          <option value="dünnschicht1">{t("Dünnschichtmodul aus amorphem Silizium - mittlere Leistung (Ppk = 0,06 kW/qm)")}</option>
          <option value="dünnschicht2">{t("Dünnschichtmodul aus amorphem Silizium - hohe Leistung (Ppk = 0,08 kW/qm)")}</option>
          <option value="dünnschicht3">{t("Sonstige Dünnschichten (Ppk = 0,035 kW/qm)")}</option>
          <option value="dünnschicht4">{t("Kupfer-Indium-Gallium-Diselenid-Dünnschicht (Ppk = 0,105 kW/qm)")}</option>
          <option value="dünnschicht5">{t("Cadmium-Tellurid-Dünnschicht (Ppk = 0,095 kW/qm)")}</option>
        </Select>
      </Label>
      <Label className="mt-4">
        <span>{t("Belüftung")}:</span>
        <Select
          className="mb-4 mt-1"
          label="belüftung"
          name="belüftung"
          value={belüftung}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="unbelüftet">{t("Unbelüftet")}</option>
          <option value="mäßig">{t("Mäßig belüftet")}</option>
          <option value="stark">{t("Stark belüftet oder saugbelüftet")}</option>
        </Select>
      </Label>
      <Label>
        <span>{t("Stromspeicherkapazität (in kW/h)")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="stromspeicherkapazität"
          name="stromspeicherkapazität"
          placeholder="Kapazität eingeben..."
          value={stromspeicherkapazität}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      <Label className="mt-4">
        <span>{t("Ausrichtung")}:</span>
        <Select
          className="mb-4 mt-1"
          label="ausrichtung2"
          name="ausrichtung2"
          value={ausrichtung2}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="osten">{t("Osten")}</option>
          <option value="suedosten">{t("Südosten")}</option>
          <option value="sueden">{t("Süden")}</option>
          <option value="suedwesten">{t("Südwesten")}</option>
        </Select>
      </Label>
      <Label>
        <span>{t("Neigung (in °)")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="neigung2"
          name="neigung2"
          placeholder="Neigung eingeben..."
          value={neigung2}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      <Label>
        <span>{t("Freie Kollektorfläche (in qm)")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="kollektorfläche2"
          name="kollektorfläche2"
          placeholder="Fläche eingeben..."
          value={kollektorfläche2}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
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
