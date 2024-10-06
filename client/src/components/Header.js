import React, { useContext, useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
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
  Avatar,
  Badge,
  Dropdown,
  DropdownItem,
  WindmillContext,
} from "@windmill/react-ui";
import { dictionary } from "../resources/multiLanguages";

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

  const { user, logout } = useContext(AuthContext);
  const history = useHistory();

  const languageReducer = "de";

  // const user = { 
  //   name: "Fullname",
  //   username: "username",
  //   email: "rayhan@example.com",
  //   phone: "+88 123 456 789",
  //   img: "https://i.ibb.co.com/xS5TKHj/378-v9-be.jpg",
  //   address: {
  //     street: "123 Main St",
  //     city: "New York",
  //     state: "NY",
  //     zip: "10001",
  //   },
  //   roles: "user",
  // }

  const { t } = useTranslation();
  const _ = require("lodash");

  const handleLogout = () => {
    logout();
    history.push("/auth/login");
  }

  return (
    <header className="z-40 py-4 bg-white shadow-bottom dark:bg-gray-800">
      <div className="container flex lg:justify-end justify-between h-full px-6 mx-auto text-blue-600 dark:text-gray-200">
        <button
          className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
          onClick={toggleSidebar}
          aria-label="Menu"
        >
          <MenuIcon className="w-6 h-6" aria-hidden="true" />
        </button>
        <ul className="flex items-center flex-shrink-0 space-x-6">

          <li className="flex">

          </li>

          {/* <!-- Profile menu --> */}
          <li className="relative">
            {user?.profile_image ? (
              <Avatar className="cursor-pointer" onClick={handleProfileClick} size="large" src={user?.profile_image} alt={user?.name?.slice(0, 1)} />
            ) : (
              <button
                className="rounded-full capitalize h-6 w-6 p-5 flex items-center justify-center font-bold bg-gray-300 dark:text-blue-600 focus:shadow-outline-purple focus:outline-none"
                onClick={handleProfileClick}
                aria-label="Account"
                aria-haspopup="true"
              >
                {user?.name?.slice(0, 1)}
              </button>
            )}
            <Dropdown
              align="right"
              isOpen={isProfileMenuOpen}
              onClose={_.debounce(() => setIsProfileMenuOpen(false))}
            >
              <div className="mb-2">
                <span className="text-gray-400 text-xs font-medium items-center ml-2">
                  {dictionary["navbarDropDown"][languageReducer]["customerName"]}: {user?.name}
                </span>
              </div>
              <Link to="/app/profile">
                <DropdownItem className="mb-1" tag="a">
                  <OutlineCogIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                  {dictionary["navbarDropDown"][languageReducer]["settings"]}
                </DropdownItem>
              </Link>
              <Link to="/app/faq">
                <DropdownItem className="" tag="a">
                  <QuestionMark className="w-4 h-4 mr-3" aria-hidden="true" />
                  {dictionary["navbarDropDown"][languageReducer]["faq"]}
                </DropdownItem>
              </Link>
              <div className="border-b my-2"></div>
              <HashLink target="_blank" rel="noopener noreferrer" smooth to="/impressum/#top">
                <DropdownItem className="mb-1" tag="a">
                  {dictionary["navbarDropDown"][languageReducer]["imprint"]}
                  <NewTabIcon
                    className="w-4 h-4 ml-2"
                    aria-hidden="true"
                  />
                </DropdownItem>
              </HashLink>
              <HashLink target="_blank" rel="noopener noreferrer" smooth to="/datenschutz/#top">
                <DropdownItem className="" tag="a">
                  {dictionary["navbarDropDown"][languageReducer]["dataProtection"]}
                  <NewTabIcon
                    className="w-4 h-4 ml-2"
                    aria-hidden="true"
                  />
                </DropdownItem>
              </HashLink>
              <div className="border-b my-2"></div>
              <Link onClick={handleLogout}>
                <DropdownItem className="mb-1" tag="a">
                  <OutlineLogoutIcon
                    className="w-4 h-4 mr-3"
                    aria-hidden="true"
                  />
                  {dictionary["navbarDropDown"][languageReducer]["logoutBtn"]}

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
