import React from "react";
import { Button, Label, Input, Select } from "@windmill/react-ui";
import BuildingTypeHouse from "./conditionalFormElements/BuildingTypeHouse";
import BuildingTypeFlat from "./conditionalFormElements/BuildingTypeFlat";
import BuildingTypeLand from "./conditionalFormElements/BuildingTypeLand";
import { useTranslation } from "react-i18next";

export const Building1 = ({
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
  const { buildingType, yearofbuilding, livingArea, baujahrderheizung, keller, lueftung, erneuerbareenergien } = formData;
  const buildingTypeProps = { formData, setForm };
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-4">
      <h2 className="mt-8 text-lg font-semibold text-gray-600 dark:text-gray-300">
        {t("Informationen zum Gebäude")}
      </h2>
      <p className="text-gray-700 font-regular text-md mb-4">
      Im Nachfolgenden können Sie alle relevanten Angaben zu Ihrem Wohngebäude machen.
      </p>
      <p className="text-gray-700 font-regular text-md mb-4">
      <span className="font-semibold text-gray-700">Hinweis: </span>Bitte beachten Sie, dass Energieausweise nur für ganze Gebäude und nicht für einzelne Wohnungen ausgestellt werden können.
      </p>
      <Label className="mt-4">
        <span>{t("building type")}:</span>
        <Select
          className="mb-4 mt-1"
          label="Building Type"
          name="buildingType"
          value={buildingType}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="einfamilienhaus">{t("Einfamilienhaus")}</option>
          <option value="zweifamilienhaus">{t("Zweifamilienhaus")}</option>
          <option value="mehrfamilienhaus">{t("Mehrfamilienhaus")}</option>
          <option value="wohnteil">
            {t("Wohnteil eines gemischt genutzten Gebäudes")}
          </option>
          <option value="sonstiges">{t("Sonstiges")}</option>
        </Select>
      </Label>
      <Label>
        <span>{t("Baujahr")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="Year of Building"
          name="yearofbuilding"
          placeholder="Baujahr eingeben..."
          value={yearofbuilding}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      <Label className="mt-4">
        <span>{t("Anzahl Wohnungen im Gebäude")}:</span>
        <Select
          className="mb-4 mt-1"
          label="Building Type"
          name="buildingType"
          value={buildingType}
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
          <option value="31">{t("31")}</option>
          <option value="32">{t("32")}</option>
          <option value="33">{t("33")}</option>
          <option value="34">{t("34")}</option>
          <option value="35">{t("35")}</option>
          <option value="36">{t("36")}</option>
          <option value="37">{t("37")}</option>
          <option value="38">{t("38")}</option>
          <option value="39">{t("39")}</option>
          <option value="40">{t("40")}</option>
          <option value="41">{t("41")}</option>
          <option value="42">{t("42")}</option>
          <option value="43">{t("43")}</option>
          <option value="44">{t("44")}</option>
          <option value="45">{t("45")}</option>
          <option value="46">{t("46")}</option>
          <option value="47">{t("47")}</option>
          <option value="48">{t("48")}</option>
          <option value="49">{t("49")}</option>
          <option value="50">{t("50")}</option>
          <option value="51">{t("51")}</option>
          <option value="52">{t("52")}</option>
          <option value="53">{t("53")}</option>
          <option value="54">{t("54")}</option>
          <option value="55">{t("55")}</option>
          <option value="56">{t("56")}</option>
          <option value="57">{t("57")}</option>
          <option value="58">{t("58")}</option>
          <option value="59">{t("59")}</option>
          <option value="60">{t("60")}</option>
          <option value="61">{t("61")}</option>
          <option value="62">{t("62")}</option>
          <option value="63">{t("63")}</option>
          <option value="64">{t("64")}</option>
          <option value="65">{t("65")}</option>
          <option value="66">{t("66")}</option>
          <option value="67">{t("67")}</option>
          <option value="68">{t("68")}</option>
          <option value="69">{t("69")}</option>
          <option value="70">{t("70")}</option>
          <option value="71">{t("71")}</option>
          <option value="72">{t("72")}</option>
          <option value="73">{t("73")}</option>
          <option value="74">{t("74")}</option>
          <option value="75">{t("75")}</option>
          <option value="76">{t("76")}</option>
          <option value="77">{t("77")}</option>
          <option value="78">{t("78")}</option>
          <option value="79">{t("79")}</option>
          <option value="80">{t("80")}</option>
          <option value="81">{t("81")}</option>
          <option value="82">{t("82")}</option>
          <option value="83">{t("83")}</option>
          <option value="84">{t("84")}</option>
          <option value="85">{t("85")}</option>
          <option value="86">{t("86")}</option>
          <option value="87">{t("87")}</option>
          <option value="88">{t("88")}</option>
          <option value="89">{t("89")}</option>
          <option value="90">{t("90")}</option>
          <option value="91">{t("91")}</option>
          <option value="92">{t("92")}</option>
          <option value="93">{t("93")}</option>
          <option value="94">{t("94")}</option>
          <option value="95">{t("95")}</option>
          <option value="96">{t("96")}</option>
          <option value="97">{t("97")}</option>
          <option value="98">{t("98")}</option>
          <option value="99">{t("99")}</option>
          <option value="100">{t("100")}</option>
          <option value=">100">{t(">100")}</option>
        </Select>
      </Label>
      <Label className="mt-4">
        <span>
          {t("Living Area")} (m<sup>2</sup>):
          <span style={{ color: "red" }}>*</span>
        </span>
        <Input
          className="mb-4 mt-1"
          label="Living Area"
          placeholder={t("Living Area...")}
          name="livingArea"
          value={livingArea}
          onChange={setForm}
          margin="normal"
          type="number"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      <Label>
        <span>{t("Baujahr der Heizung")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="baujahr der heizung"
          name="baujahrderheizung"
          placeholder="Baujahr eingeben..."
          value={baujahrderheizung}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      <Label className="mt-4">
        <span>{t("Was liegt unterhalb des Erdgeschosses?")}</span>
        <Select
          className="mb-4 mt-1"
          label="Keller"
          name="keller"
          value={keller}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="unbeheizt">{t("Unbeheizter Keller")}</option>
          <option value="beheizt">{t("Beheizter Keller")}</option>
          <option value="bodenplatte">{t("Bodenplatte")}</option>
        </Select>
      </Label>
      <Label className="mt-4">
        <span>{t("Lüftung")}:</span>
        <Select
          className="mb-4 mt-1"
          label="Lueftung"
          name="lueftung"
          value={lueftung}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="fensterlueftung">{t("Fensterlüftung")}</option>
          <option value="schachtlueftung">{t("Schachtlüftung")}</option>
          <option value="anlagewarmegewinnung">{t("Anlage mit Wärmerückgewinnung")}</option>
          <option value="anlageohnewarmegewinnung">{t("Anlage ohne Wärmerückgewinnung")}</option>
          <option value="mechanischgekuehlt">{t("Mechanisch gekühlt")}</option>
        </Select>
      </Label>
      <Label className="mt-4">
        <span>{t("Erneuerbare Energien")}:</span>
        <Select
          className="mb-4 mt-1"
          label="Eneuerbare Energien"
          name="erneuerbareenergien"
          value={erneuerbareenergien}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="keine">{t("Keine")}</option>
          <option value="solarzelle">{t("Solarzelle")}</option>
          <option value="solarkollektor">{t("Solarkollektor")}</option>
          <option value="waermepumpe">{t("Wärmepumpe")}</option>
          <option value="biomasse">{t("Biomasse")}</option>
          <option value="windkraft">{t("Windkraft")}</option>
          <option value="wasserkraft">{t("Wasserkraft")}</option>
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
