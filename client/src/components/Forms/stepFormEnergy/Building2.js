import React from "react";
import { Button, Label, Input, Select } from "@windmill/react-ui";
import {rechteckig, tfoermig, l, u, rechtecka, rechteckb, rechteckc, rechteckd, ta, tb, tc, td, te, tf, tg, th, la, lb, lc, ld, le, lf, ua, ub, uc, ud, ue, uf, ug, uh} from "../../../assets/img/buildingForms"
import { useTranslation } from "react-i18next";

export const Building2 = ({
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
    massiveWalls,
    uValue,
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
      <h2 className="mt-8 text-lg font-semibold text-gray-600 dark:text-gray-300">
        {t("Informationen zum Gebäude")}
      </h2>
      <p className="text-gray-700 font-regular text-md mb-4">
      Im Nachfolgenden können Sie alle relevanten Angaben zu Ihrem Wohngebäude machen.
      </p>
      <p className="text-gray-700 font-regular text-md mb-4">
      <span className="font-semibold text-gray-700">Hinweis: </span>Bitte beachten Sie, dass Energieausweise nur für ganze Gebäude und nicht für einzelne Wohnungen ausgestellt werden können.
      </p>
      <p className="text-gray-700 font-regular text-md mb-8">
        Wähle die Grundrissform aus:
      </p>
      <div class="grid overflow-hidden my-4 text-center grid-cols-2 grid-rows-2 gap-2 content-center justify-items-center place-items-center place-content-center h-60 w-full md:w-2/3">
        <div class="grid box justify-items-center content-center cursor-pointer border hover:border-gray-300 hover:border-2 w-full h-full rounded-lg ">
          <img className="w-24" src={rechteckig} />
          <p className="text-sm pt-2">Rechteckig</p>
        </div>
        <div class="grid box justify-items-center content-center cursor-pointer border hover:border-gray-300 hover:border-2 w-full h-full rounded-lg ">
          <img className="w-16" src={l} />
          <p className="text-sm pt-2">L-Förmig</p>
        </div>
        <div class="grid box justify-items-center content-center cursor-pointer border hover:border-gray-300 hover:border-2 w-full h-full rounded-lg ">
          <img className="w-24" src={tfoermig} />
          <p className="text-sm pt-2">T-Förmig</p>
        </div>
        <div class="grid box justify-items-center content-center cursor-pointer border hover:border-gray-300 hover:border-2 w-full h-full rounded-lg ">
          <img className="w-32" src={u} />
          <p className="text-sm pt-2">U-Förmig</p>
        </div>
      </div>
      {/* Normal square floorplan */}
      <div className="flex py-4 gap-8">
      <img className="w-36" src={rechtecka}></img>
      <Label>
        <span>{t("Außenwandlänge a")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="Außenwandlänge a"
          name="aussenwandlaenge"
          placeholder="Länge eingeben..."
          value={außenwandlaengea}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      </div>
      <div className="flex py-4 gap-8">
      <img className="w-36" src={rechteckb}></img>
      <Label>
        <span>{t("Außenwandlänge b")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="Außenwandlänge b"
          name="aussenwandlaenge"
          placeholder="Länge eingeben..."
          value={außenwandlaengeb}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      </div>
      <div className="flex py-4 gap-8">
      <img className="w-36" src={rechteckc}></img>
      <Label>
        <span>{t("Außenwandlänge c")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="Außenwandlänge c"
          name="aussenwandlaenge"
          placeholder="Länge eingeben..."
          value={außenwandlaengec}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      </div>
      <div className="flex py-4 gap-8">
      <img className="w-36" src={rechteckd}></img>
      <Label>
        <span>{t("Außenwandlänge d")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="Außenwandlänge d"
          name="aussenwandlaenge"
          placeholder="Länge eingeben..."
          value={außenwandlaenged}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      </div>
       {/* T shape floorplan */}
      <div className="flex py-4 gap-8">
      <img className="w-36" src={ta}></img>
      <Label>
        <span>{t("Außenwandlänge a")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="Außenwandlänge a"
          name="aussenwandlaenge"
          placeholder="Länge eingeben..."
          value={außenwandlaengeta}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      </div>
      <div className="flex py-4 gap-8">
      <img className="w-36" src={tb}></img>
      <Label>
        <span>{t("Außenwandlänge b")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="Außenwandlänge b"
          name="aussenwandlaenge"
          placeholder="Länge eingeben..."
          value={außenwandlaengetb}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      </div>
      <div className="flex py-4 gap-8">
      <img className="w-36" src={tc}></img>
      <Label>
        <span>{t("Außenwandlänge c")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="Außenwandlänge c"
          name="aussenwandlaenge"
          placeholder="Länge eingeben..."
          value={außenwandlaengetc}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      </div>
      <div className="flex py-4 gap-8">
      <img className="w-36" src={td}></img>
      <Label>
        <span>{t("Außenwandlänge d")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="Außenwandlänge d"
          name="aussenwandlaenge"
          placeholder="Länge eingeben..."
          value={außenwandlaengetd}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      </div>
      <div className="flex py-4 gap-8">
      <img className="w-36" src={te}></img>
      <Label>
        <span>{t("Außenwandlänge e")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="Außenwandlänge d"
          name="aussenwandlaenge"
          placeholder="Länge eingeben..."
          value={außenwandlaengete}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      </div>
      <div className="flex py-4 gap-8">
      <img className="w-36" src={tf}></img>
      <Label>
        <span>{t("Außenwandlänge f")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="Außenwandlänge d"
          name="aussenwandlaenge"
          placeholder="Länge eingeben..."
          value={außenwandlaengetf}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      </div>
      <div className="flex py-4 gap-8">
      <img className="w-36" src={tg}></img>
      <Label>
        <span>{t("Außenwandlänge g")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="Außenwandlänge d"
          name="aussenwandlaenge"
          placeholder="Länge eingeben..."
          value={außenwandlaengetg}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      </div>
      <div className="flex py-4 gap-8">
      <img className="w-36" src={th}></img>
      <Label>
        <span>{t("Außenwandlänge h")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="Außenwandlänge d"
          name="aussenwandlaenge"
          placeholder="Länge eingeben..."
          value={außenwandlaengeth}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      </div>
       {/* L shape floorplan */}
       <div className="flex py-4 gap-8">
      <img className="w-36" src={la}></img>
      <Label>
        <span>{t("Außenwandlänge a")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="Außenwandlänge a"
          name="aussenwandlaenge"
          placeholder="Länge eingeben..."
          value={außenwandlaengela}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      </div>
      <div className="flex py-4 gap-8">
      <img className="w-36" src={lb}></img>
      <Label>
        <span>{t("Außenwandlänge b")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="Außenwandlänge b"
          name="aussenwandlaenge"
          placeholder="Länge eingeben..."
          value={außenwandlaengelb}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      </div>
      <div className="flex py-4 gap-8">
      <img className="w-36" src={lc}></img>
      <Label>
        <span>{t("Außenwandlänge c")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="Außenwandlänge c"
          name="aussenwandlaenge"
          placeholder="Länge eingeben..."
          value={außenwandlaengelc}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      </div>
      <div className="flex py-4 gap-8">
      <img className="w-36" src={ld}></img>
      <Label>
        <span>{t("Außenwandlänge d")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="Außenwandlänge d"
          name="aussenwandlaenge"
          placeholder="Länge eingeben..."
          value={außenwandlaengeld}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      </div>
      <div className="flex py-4 gap-8">
      <img className="w-36" src={le}></img>
      <Label>
        <span>{t("Außenwandlänge e")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="Außenwandlänge d"
          name="aussenwandlaenge"
          placeholder="Länge eingeben..."
          value={außenwandlaengele}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      </div>
      <div className="flex py-4 gap-8">
      <img className="w-36" src={lf}></img>
      <Label>
        <span>{t("Außenwandlänge f")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="Außenwandlänge d"
          name="aussenwandlaenge"
          placeholder="Länge eingeben..."
          value={außenwandlaengelf}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      </div>
       {/* U shape floorplan */}
       <div className="flex py-4 gap-8">
      <img className="w-36" src={ua}></img>
      <Label>
        <span>{t("Außenwandlänge a")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="Außenwandlänge a"
          name="aussenwandlaenge"
          placeholder="Länge eingeben..."
          value={außenwandlaengeua}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      </div>
      <div className="flex py-4 gap-8">
      <img className="w-36" src={ub}></img>
      <Label>
        <span>{t("Außenwandlänge b")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="Außenwandlänge b"
          name="aussenwandlaenge"
          placeholder="Länge eingeben..."
          value={außenwandlaengeub}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      </div>
      <div className="flex py-4 gap-8">
      <img className="w-36" src={uc}></img>
      <Label>
        <span>{t("Außenwandlänge c")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="Außenwandlänge c"
          name="aussenwandlaenge"
          placeholder="Länge eingeben..."
          value={außenwandlaengeuc}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      </div>
      <div className="flex py-4 gap-8">
      <img className="w-36" src={ud}></img>
      <Label>
        <span>{t("Außenwandlänge d")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="Außenwandlänge d"
          name="aussenwandlaenge"
          placeholder="Länge eingeben..."
          value={außenwandlaengeud}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      </div>
      <div className="flex py-4 gap-8">
      <img className="w-36" src={ue}></img>
      <Label>
        <span>{t("Außenwandlänge e")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="Außenwandlänge d"
          name="aussenwandlaenge"
          placeholder="Länge eingeben..."
          value={außenwandlaengeue}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      </div>
      <div className="flex py-4 gap-8">
      <img className="w-36" src={uf}></img>
      <Label>
        <span>{t("Außenwandlänge f")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="Außenwandlänge d"
          name="aussenwandlaenge"
          placeholder="Länge eingeben..."
          value={außenwandlaengeuf}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      </div>
      <div className="flex py-4 gap-8">
      <img className="w-36" src={ug}></img>
      <Label>
        <span>{t("Außenwandlänge g")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="Außenwandlänge d"
          name="aussenwandlaenge"
          placeholder="Länge eingeben..."
          value={außenwandlaengeug}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      </div>
      <div className="flex py-4 gap-8">
      <img className="w-36" src={uh}></img>
      <Label>
        <span>{t("Außenwandlänge h")}:</span>
        <Input
          type="text"
          className="mb-4 mt-1"
          label="Außenwandlänge d"
          name="aussenwandlaenge"
          placeholder="Länge eingeben..."
          value={außenwandlaengeuh}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        />
      </Label>
      </div>
      <Label className="mt-4">
        <span>{t("Gebäudeausrichtung")}:</span>
        <Select
          className="mb-4 mt-1"
          label="Gebäudeausrichtung"
          name="gebaudeausrichtung"
          value={gebaudeausrichtung}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="nord">{t("Nord")}</option>
          <option value="nordost">{t("Nordost")}</option>
          <option value="ost">{t("Ost")}</option>
          <option value="suedost">{t("Südost")}</option>
          <option value="sued">{t("Süd")}</option>
          <option value="suedwest">{t("Südwest")}</option>
          <option value="west">{t("West")}</option>
          <option value="nordwest">{t("Nordwest")}</option>
        </Select>
      </Label>
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
          <option value="einfamilienhausfreistehend">{t("Einfamilienhaus, freistehend")}</option>
          <option value="einfamilienhauseinseitig">{t("Einfamilienhaus, einseitig angebaut")}</option>
          <option value="einfamilienhauszweiseitig">{t("Einfamilienhaus, zweiseitig angebaut")}</option>
          <option value="zweifamilienhausfreistehend">{t("Zweifamilienhaus, freistehend")}</option>
          <option value="zweifamilienhauseinseitig">{t("Zweifamilienhaus, einseitig angebaut")}</option>
          <option value="zweifamilienhauzweiseitig">{t("Zweifamilienhaus, zweiseitig angebaut")}</option>
          <option value="mehrfamilienhausfreistehend">{t("Mehrfamilienhaus, freistehend")}</option>
          <option value="mehrfamilienhauseinseitig">{t("Mehrfamilienhaus, einseitig angebaut")}</option>
          <option value="mehrfamilienhauszweiseitig">{t("Mehrfamilienhaus, zweiseitig angebaut")}</option>
        </Select>
      </Label>
      <Label className="mt-4">
        <span>{t("Gebäudeteil")}:</span>
        <Select
          className="mb-4 mt-1"
          label="Gebäudeteil"
          name="gebaeudeteil"
          value={gebaeudeteil}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="wohngebaude">{t("Wohngebäude")}</option>
          <option value="wohnteil">{t("Wohnteil Mischgebäude (Gewerbe u. Wohnen)")}</option>
     
        </Select>
      </Label>
      <Label className="mt-4">
        <span>{t("Way of Building")}:</span>
        <Select
          className="mb-4 mt-1"
          label="wayOfBuilding"
          name="wayOfBuilding"
          value={wayOfBuilding}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="massive">{t("Massive")}</option>
          <option value="wood">{t("Wooden")}</option>
     
        </Select>
      </Label>
      {/* massive walls conditional */}
      <Label className="mt-4">
        <span>{t("Massive Walls")}:</span>
        <Select
          className="mb-4 mt-1"
          label="massiveWalls"
          name="massiveWalls"
          value={massiveWalls}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="sonstige1">{t("Sonstige massive Wandaufbauten über 20cm Wandstärke")}</option>
          <option value="sonstige2">{t("Sonstige massive Wandaufbauten bis 20cm Wandstärke")}</option>
          <option value="zweischalig">{t("Zweischalige Wandaufbauten ohne Dämmschicht")}</option>
          <option value="massiv1">{t("Massivwand aus Vollziegel bis 20cm Wandstärke")}</option>
          <option value="massiv2">{t("Massivwand aus Vollziegel 20cm - 30cm Wandstärke")}</option>
          <option value="massiv3">{t("Massivwand aus Vollziegel über 30cm Wandstärke")}</option>
          <option value="massiv4">{t("Massivwand aus Hochlochziegel")}</option>
          <option value="poroton1">{t("Poroton bis 30cm Wandstärke")}</option>
          <option value="poroton2">{t("Poroton 30cm - 40cm Wandstärke")}</option>
          <option value="poroton3">{t("Poroton über 40cm Wandstärke")}</option>
          <option value="bruchstein1">{t("Bruchstein bis 30cm Wandstärke")}</option>
          <option value="bruchstein2">{t("Bruchstein 30cm - 40cm Wandstärke")}</option>
          <option value="bruchstein3">{t("Bruchstein über 40cm Wandstärke")}</option>
          <option value="porenbeton1">{t("Porenbeton bis 20cm Wandstärke")}</option>
          <option value="porenbeton2">{t("Porenbeton 20cm - 30cm Wandstärke")}</option>
          <option value="porenbeton3">{t("Porenbeton über 30cm Wandstärke")}</option>
        </Select>
      </Label>
       {/* wooden walls conditional */}
       <Label className="mt-4">
        <span>{t("Wooden Walls")}:</span>
        <Select
          className="mb-4 mt-1"
          label="woodenWalls"
          name="woodenWalls"
          value={woodenWalls}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth="true"
        >
          <option value="">{t("- Bitte auswählen -")}</option>
          <option value="massivholz">{t("Massivholzwand")}</option>
          <option value="fachwerk1">{t("Fachwerkwand mit Lehmziegelausfachung")}</option>
          <option value="fachwerk2">{t("Fachwerkwand mit Vollziegelausfachung")}</option>
          <option value="sonstigesholz">{t("Sonstige Holzkonstruktion")}</option>
        </Select>
      </Label>
      <Label>
        {/* U Value Walls */}
       <Label className="mt-4">
        <span>{t("U-Wert Wände (falls bekannt)")}:</span>
        <Select
          className="mb-4 mt-1"
          label="uValue"
          name="uValue"
          value={uValue}
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
      <Label></Label>
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
