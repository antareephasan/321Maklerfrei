import React from "react";
import { Input, Label, Select } from "@windmill/react-ui";
import { useTranslation } from "react-i18next";

const BuildingTypeFlat = ({ formData, setForm }) => {
  const {
    floor,
    numberOfRooms,
    monthlyHousepayment,
    numberOfBathrooms,
    numberOfBedrooms,
    parkingSpacePrice,
    specificBuildingType,
    livingArea,
    typeOfParkingSpace,
    numberOfParkingSpaces,
  } = formData;

  const { t } = useTranslation();

  return (
    <div>
      <Label className="mt-4">
        <span>
          {t("Specific Flat Type")}:<span style={{ color: "red" }}>*</span>
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
          fullwidth="true"
        >
          <option value="">{t("Choose an option")}</option>
          <option value="01ETAG">{t("Floor")}</option>
          <option value="01SOUT">{t("Basement")}</option>
          <option value="01GERD">{t("Ground Floor")}</option>
          <option value="01DACH">{t("Top Floor")}</option>
          <option value="01PENT">{t("Penthouse")}</option>
          <option value="01MAIS">{t("Maisonette")}</option>
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
      <Label className="mt-4">
        <span>
          {t("Number of Rooms")}:<span style={{ color: "red" }}>*</span>
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
          fullwidth="true"
        />
      </Label>
      
    </div>
  );
};

export default BuildingTypeFlat;
