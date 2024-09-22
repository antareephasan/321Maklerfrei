import { Button } from "@windmill/react-ui";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { config } from "../assets/config/config";
import PageTitle from "../components/Typography/PageTitle";
import { AuthContext } from "../context/AuthContext";
import { userListService } from "../services";
import UserListDetails from "./UserListDetails";

function SetTitleTag () {
  return (
    <Helmet>
      <title>Meine Immobilien - 123provisionsfrei</title>
    </Helmet>
  )
}
const apiUrl = config.api.url;

export default function UserList() {
  const history = useHistory();
  const handlePush = () => {
    history.push("/app/createListing");
  };
  const { t } = useTranslation();
  const { user } = useContext(AuthContext);
  const email = user.email;

  const handledeleteList = (uniqId) => {
    userListService
      .deleteUserList(uniqId)
      .then((res) => {
        history.push("/app");
        history.replace("/app/userLists");
      })
      .catch((err) => console.log(err));
  };
  const [userLists, setUserLists] = useState([]);
  const [noData, setNoData] = useState(false);
  useEffect(() => {
    axios
      .post(`${apiUrl}/v1/userList/get`, { email })
      .then((response) => {
        if(response.data.message === 'success'){
          setNoData(true);
          setUserLists([]);
          return
        }
        setUserLists(response.data.sort((a,b) => b.listNumber - a.listNumber));
      })
      .catch((error) => console.log(error));
  }, [email]);

  // response.data.sort((a,b) => b.listNumber - a.listNumber)

  return (
    <div>
      <div className="flex gap-4 items-center">
        <SetTitleTag />
        <PageTitle>{t("my listings")}</PageTitle>
        <div>
          <Button
            layout="outline"
            size="small"
            component="span"
            onClick={handlePush}
          >
            {t("create listing")}
          </Button>
        </div>
      </div>
      <div>
        <div>
          {userLists.length === 0 && noData && (
            <div className="p-6 mb-4 w-2/3 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <p className="text-xl font-semibold">Du hast noch keine Immobilienanzeige erstellt.</p>
              <p className="my-5">
                Leg los &amp; erstelle deine erste Immobilienanzeige.
              </p>
              <Button size="regular" component="span" onClick={handlePush}>
                Anzeige erstellen
              </Button>
            </div>
          )}
        </div>
        <div className="grid overflow-hidden grid-cols-1 md:grid-cols-2 auto-rows-auto gap-6">

          {userLists.length > 0 &&
            userLists.map((data) => (
              <UserListDetails
                key={data._id}
                data={data}
                handledeleteList={handledeleteList}
              />
            ))}
        </div>
      </div>
      </div>
  );
}
