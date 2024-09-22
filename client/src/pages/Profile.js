import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import UpdateUserForm from '../components/Forms/UpdateUserForm'
import UpdatePasswordForm from '../components/Forms/UpdatePasswordForm'
import { AuthContext } from '../context/AuthContext'
import { Helmet } from "react-helmet";

function SetTitleTag () {
  return (
    <Helmet>
      <title>Einstellungen - 123provisionsfrei</title>
    </Helmet>
  )
}

function Profile() {
  const { user } = useContext(AuthContext)
  const { t } = useTranslation();

  return (
    <>
      <SetTitleTag />
      <PageTitle>{t("settings")}</PageTitle>
      <SectionTitle>{t("edit profile")}</SectionTitle>

      <div className="w-full md:w-1/2 p-6 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <UpdateUserForm m_user={user}/>
      </div>

      <SectionTitle>{t("change password")}</SectionTitle>

      <div className="w-full md:w-1/2 p-6 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <UpdatePasswordForm m_user={user}/>
      </div>
    </>
  )
}

export default Profile
