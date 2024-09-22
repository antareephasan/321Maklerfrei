import React from "react";
import PageTitle from "../components/Typography/PageTitle";
import { Account, Payment, Listings, Other } from "../components/FAQ/FAQ";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  Badge,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Card,
  CardBody,
} from "@windmill/react-ui";
// import "react-tabs/style/react-tabs-faq.css";
import "../components/FAQ/style.css"
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

function SetTitleTag () {
  return (
    <Helmet>
      <title>FAQ - 321maklerfrei</title>
    </Helmet>
  )
}

function Faq() {
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };
  const { t } = useTranslation()

  return (
    <>
      <SetTitleTag />
      <PageTitle>FAQ</PageTitle>
      <div className="flex flex-wrap -mx-2 overflow-hidden dark:text-gray-200">
        <Tabs className="block md:flex w-full">
          <TabList className="w-full md:w-1/5">
            <div className="my-2 px-2 overflow-hidden">
              <TableContainer>
                <Table>
                  <TableBody>
                    <Tab className="cursor-pointer hover:bg-gray-100">
                      <TableRow>
                        <TableCell>{t("Account")}</TableCell>
                      </TableRow>
                    </Tab>
                    <Tab className="cursor-pointer hover:bg-gray-100">
                      <TableRow>
                        <TableCell>{t("Listings")}</TableCell>
                      </TableRow>
                    </Tab>
                    <Tab className="cursor-pointer hover:bg-gray-100">
                      <TableRow>
                        <TableCell>{t("Payment")}</TableCell>
                      </TableRow>
                    </Tab>
                    <Tab className="cursor-pointer hover:bg-gray-100">
                      <TableRow>
                        <TableCell>{t("Others")}</TableCell>
                      </TableRow>
                    </Tab>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </TabList>
          <div className="my-2 w-full px-2 overflow-hidden">
            <TabPanel>
              <Card>
                <CardBody className="p-6">
                  <Account />
                </CardBody>
              </Card>
            </TabPanel>
            <TabPanel>
              <Card>
                <CardBody className="p-6">
                  <Listings />
                </CardBody>
              </Card>
            </TabPanel>
            <TabPanel>
              <Card>
                <CardBody className="p-6">
                  <Payment />
                </CardBody>
              </Card>
            </TabPanel>
            <TabPanel>
              <Card>
                <CardBody className="p-6">
                  <Other />
                </CardBody>
              </Card>
            </TabPanel>
          </div>
        </Tabs>
      </div>

      <div className="md:flex block flex-wrap -mx-2 overflow-hidden my-6 dark:text-gray-200">
        <div className="my-2 px-2 w-full md:w-1/2 overflow-hidden">
          <Card className="flex mb-8">
            <CardBody>
              <Badge type="neutral">Mo.-Fr. 9 bis 18 Uhr</Badge>
              <p className="text-xl my-4 font-semibold text-gray-600 dark:text-gray-300">
                Direkter Telefonsupport
              </p>
              <p className="my-4 text-gray-600 dark:text-gray-400">
                Unverbindlich anrufen unter:
              </p>
              <p className="mt-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
                <a href='tel:+4915221453300'>+49 (0) 1522 – 1453300</a>
              </p>
            </CardBody>
          </Card>
        </div>

        <div className="my-2 px-2 w-full md:w-1/2 overflow-hidden">
          <Card className="flex mb-8">
            <CardBody>
              <Badge type="neutral">Immer erreichbar</Badge>
              <p className="text-xl my-4 font-semibold text-gray-600 dark:text-gray-300">
                Fragen oder Probleme?
              </p>
              <p className="my-4 text-gray-600 dark:text-gray-400">
                Sende uns eine Mail:
              </p>
              <p className="mt-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
                <Mailto
                  email="support@321maklerfrei.de"
                  subject="Problem mit ..."
                  body="Guten Tag, leider habe ich ein Problem mit..."
                >
                  support@321maklerfrei.de
                </Mailto>
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Faq;
