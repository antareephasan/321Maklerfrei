import React from "react";
import { MultiStepForm } from "../components/Forms/MultiStepForm";
import PageTitle from "../components/Typography/PageTitle";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { dictionary } from "../resources/multiLanguages";

function SetTitleTag () {
  return (
    <Helmet>
      <title>Create ads - 321maklerfrei</title>
    </Helmet>
  )
}

function Dashboard() {
  const { t } = useTranslation();
  const languageReducer = "de";

  return (
    <div style={{ position: 'relative'}}>
      <SetTitleTag />
      <PageTitle>{dictionary["createAds"][languageReducer]["title"]}</PageTitle>
      <div className="w-full sm:w-11/12 lg:w-3/4 p-6 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <MultiStepForm />
      </div>
    </div>
  );
}

export default Dashboard;
