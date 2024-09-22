/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: "/app/profile",
    icon: "OutlinePersonIcon",
    name: "Profile",
  },
  {
    path: "/app/users",
    icon: "PeopleIcon",
    name: "Users",
  },
  {
    path: "/app/billing",
    icon: "FormsIcon",
    name: "Billing",
  },
  {
    path: "/app/logout",
    icon: "OutlineLogoutIcon",
    name: "Logout",
  },
  {
    icon: "HomeIcon",
    name: "Dashboards",
    routes: [
      {
        path: "/app/adminDashboard", // the url
        name: "Admin Dashboard", // name that appear in Sidebar
      },
      {
        path: "/app/userDashboard",
        name: "User Dashboard",
      },
    ],
  },
  {
    path: "/app/forms",
    icon: "FormsIcon",
    name: "Forms",
  },
  {
    path: "/app/cards",
    icon: "CardsIcon",
    name: "Cards",
  },
  {
    path: "/app/charts",
    icon: "ChartsIcon",
    name: "Charts",
  },
  {
    path: "/app/buttons",
    icon: "ButtonsIcon",
    name: "Buttons",
  },
  {
    path: "/app/modals",
    icon: "ModalsIcon",
    name: "Modals",
  },
  {
    path: "/app/tables",
    icon: "TablesIcon",
    name: "Tables",
  },
  {
    icon: "PagesIcon",
    name: "Pages",
    routes: [
      // submenu
      {
        path: "/app/404",
        name: "404",
      },
      {
        path: "/app/blank",
        name: "Blank",
      },
    ],
  },
];

export default routes;
