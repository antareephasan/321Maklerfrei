import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from "../context/SidebarContext";
import { AuthContext } from "../context/AuthContext";
import { HashLink } from "react-router-hash-link";
import {
  NewTabIcon,
  QuestionMark,
  MenuIcon,
  OutlineCogIcon,
  OutlineLogoutIcon,
} from "../icons";
import { useTranslation } from "react-i18next";
import {
  Badge,
  Dropdown,
  DropdownItem,
  WindmillContext,
} from "@windmill/react-ui";

function Header() {
  const { mode, toggleMode } = useContext(WindmillContext);
  const { toggleSidebar } = useContext(SidebarContext);
  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  function handleNotificationsClick() {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen);
  }

  function handleProfileClick() {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  }

  // const { user } = useContext(AuthContext);

 const user = {
    name: "Antareep Hasan"
  }

  const { t } = useTranslation();
  const _ = require("lodash");

  return (
    <header className="z-40 py-4 bg-white shadow-bottom dark:bg-gray-800">
      <div className="container flex lg:justify-end justify-between h-full px-6 mx-auto text-blue-600 dark:text-gray-200">
        {/* <!-- Mobile hamburger --> */}
        <button
          className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
          onClick={toggleSidebar}
          aria-label="Menu"
        >
          <MenuIcon className="w-6 h-6" aria-hidden="true" />
        </button>
        <ul className="flex items-center flex-shrink-0 space-x-6">
          {/* <!-- Theme toggler --> */}
          <li className="flex">
            {/* <button
              className="rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={toggleMode}
              aria-label="Toggle color mode"
            >
              {mode === "dark" ? (
                <SunIcon className="w-5 h-5" aria-hidden="true" />
              ) : (
                <MoonIcon className="w-5 h-5" aria-hidden="true" />
              )}
            </button> */}
          </li>
          <li className="relative">
            {/* <button
              className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={handleNotificationsClick}
              aria-label="Notifications"
              aria-haspopup="true"
            >
              <BellIcon className="w-5 h-5" aria-hidden="true" />
              <span
                aria-hidden="true"
                className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
              ></span>
            </button> */}
            {/* <!-- Profile menu --> */}
            {/* <Dropdown
              align="right"
              isOpen={isNotificationsMenuOpen}
              onClose={_.debounce(() => setIsNotificationsMenuOpen(false))}
            >
              <DropdownItem tag="a" href="#" className="justify-between">
                <span>Messages</span>
                <Badge type="danger">13</Badge>
              </DropdownItem>
              <DropdownItem tag="a" href="#" className="justify-between">
                <span>Sales</span>
                <Badge type="danger">2</Badge>
              </DropdownItem>
              <DropdownItem onClick={() => alert("Alerts!")}>
                <span>Alerts</span>
              </DropdownItem>
            </Dropdown> */}
          </li>
          {/* <!-- Profile menu --> */}
          <li className="relative">
            <button
              className="rounded-full capitalize h-6 w-6 p-5 flex items-center justify-center font-bold bg-gray-300 dark:text-blue-600 focus:shadow-outline-purple focus:outline-none"
              onClick={handleProfileClick}
              aria-label="Account"
              aria-haspopup="true"
            >
              {user.name[0]}
            </button>
            <Dropdown
              align="right"
              isOpen={isProfileMenuOpen}
              onClose={_.debounce(() => setIsProfileMenuOpen(false))}
            >
              <div className="mb-2">
                <span className="text-gray-400 text-xs font-medium items-center ml-2">
                  {t("Customer ID")}: {user.customerId}
                </span>
              </div>
              <Link to="/app/profile">
                <DropdownItem className="mb-1" tag="a">
                  <OutlineCogIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                  {t("settings")}
                </DropdownItem>
              </Link>
              <Link to="/app/faq">
                <DropdownItem className="" tag="a">
                  <QuestionMark className="w-4 h-4 mr-3" aria-hidden="true" />
                  {t("FAQ")}
                </DropdownItem>
              </Link>
              <div className="border-b my-2"></div>
              <HashLink target="_blank" rel="noopener noreferrer" smooth to="/impressum/#top">
                <DropdownItem className="mb-1" tag="a">
                  {t("Impressum")}
                  <NewTabIcon
                    className="w-4 h-4 ml-2"
                    aria-hidden="true"
                  />
                </DropdownItem>
              </HashLink>
              <HashLink target="_blank" rel="noopener noreferrer" smooth to="/datenschutz/#top">
                <DropdownItem className="" tag="a">
                  {t("Datenschutz")}
                  <NewTabIcon
                    className="w-4 h-4 ml-2"
                    aria-hidden="true"
                  />
                </DropdownItem>
              </HashLink>
              <div className="border-b my-2"></div>
              <Link to="/app/logout">
                <DropdownItem className="mb-1" tag="a">
                  <OutlineLogoutIcon
                    className="w-4 h-4 mr-3"
                    aria-hidden="true"
                  />
                  {t("logout")}
                </DropdownItem>
              </Link>
            </Dropdown>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
