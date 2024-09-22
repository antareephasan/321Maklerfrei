import React from "react";
import { Select, Input, Label } from "@windmill/react-ui";
import { useTranslation } from "react-i18next";

const BuildingTypeHouse = ({ formData, setForm }) => {
  const {
    numberOfFloors,
    numberOfRooms,
    specificBuildingType,
    numberOfBathrooms,
    numberOfBedrooms,
    usableArea,
    plotArea,
    numberOfGarages,
    numberOfParkingSpaces,
    livingArea,
    typeOfParkingSpace
  } = formData;
  const { t } = useTranslation();

  return (
    <div>
      <Label className="mt-4">
        <span>
          {t("Specific House Type")}:
          <span style={{color: "red"}}>*</span>
        </span>
        <Select
          className="mb-4 mt-1"
          label="Specific Building Type"
          name="specificBuildingType"
          value={specificBuildingType}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullwidth='true'
        >
          <option value="">{t("Choose an option")}</option>
          <option value="02EFH">{t("Detached House")}</option>
          <option value="02DHH">{t("Semi Detached House")}</option>
          <option value="02REH">{t("Town House")}</option>
          <option value="02MFH">{t("Multi Family House")}</option>
          <option value="02ZB">{t("Holiday House")}</option>
          <option value="02BNG">{t("Bungalow")}</option>
        </Select>
      </Label>
      <Label className="mt-4">
        <span>
          {t("Living Area")} (m<sup>2</sup>):
          <span style={{color: "red"}}>*</span>
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
          fullwidth='true'
        />
      </Label>
      <Label className="mt-4">
        <span>
          {t("Plot Area")} (m<sup>2</sup>):
          <span style={{color: "red"}}>*</span>
        </span>
        <Input
          className="mb-4 mt-1"
          label="Plot Area"
          placeholder={t("Plot Area...")}
          name="plotArea"
          value={plotArea}
          onChange={setForm}
          margin="normal"
          type="number"
          variant="outlined"
          autoComplete="off"
          fullwidth='true'
        />
      </Label>
      <Label className="mt-4">
        <span>
          {t("Number of Rooms")}:
          <span style={{color: "red"}}>*</span>
        </span>
        <Input
          className="mb-4 mt-1"
          label="Number Of Rooms"
          placeholder={t("Number of Rooms...")}
          name="numberOfRooms"
          value={numberOfRooms}
          onChange={setForm}
          margin="normal"
          type="number"
          variant="outlined"
          autoComplete="off"
          fullwidth='true'
        />
      </Label>
      
    </div>
  );
};

export default BuildingTypeHouse;
