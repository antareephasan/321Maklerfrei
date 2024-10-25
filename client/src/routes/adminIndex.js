import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster
const Logout = lazy(() => import('../pages/Logout'))
const Profile = lazy(() => import('../pages/Profile'))
const Users = lazy(() => import('../pages/Users'))
const Messages = lazy(() => import('../pages/Messages'))
const PackageManagement = lazy(() => import('../pages/PackageManagement'))
const UserListManagement = lazy(() => import('../pages/UserListManagement'))
const TermsAndConditions = lazy(() => import('../pages/TermsAndConditions'))
const PrivacyAndPolicy = lazy(() => import('../pages/PrivacyAndPolicy'))
const Imprint = lazy(() => import('../pages/Imprint'))
const Billing = lazy(() => import('../pages/Billing'))
const Dashboard = lazy(() => import('../pages/Dashboard'))
const DashboardUser = lazy(() => import('../components/Dashboard/DashboardUser'))
const Forms = lazy(() => import('../pages/Forms'))
const Cards = lazy(() => import('../pages/Cards'))
const Charts = lazy(() => import('../pages/Charts'))
const Buttons = lazy(() => import('../pages/Buttons'))
const Modals = lazy(() => import('../pages/Modals'))
const Tables = lazy(() => import('../pages/Tables'))
const Page404 = lazy(() => import('../pages/404'))
const Blank = lazy(() => import('../pages/Blank'))

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/users',
    component: Users,
  },
  {
    path: '/user-list-management',
    component: UserListManagement,
  },
  {
    path: '/messages',
    component: Messages,
  },
  {
    path: '/package-management',
    component: PackageManagement,
  },
  {
    path: '/terms-and-conditions',
    component: TermsAndConditions,
  },
  {
    path: '/privacy-and-policy',
    component: PrivacyAndPolicy,
  },
  {
    path: '/imprint',
    component: Imprint,
  },
  {
    path: '/billing',
    component: Billing,
  },
  {
    path: '/logout',
    component: Logout,
  },
  // {
  //   path: '/adminDashboard', // the url
  //   component: Dashboard, // view rendered
  // },
  // {
  //   path: '/user_dashboard', // the url
  //   component: DashboardUser, // view rendered
  // },
  {
    path: '/forms',
    component: Forms,
  },
  {
    path: '/cards',
    component: Cards,
  },
  {
    path: '/charts',
    component: Charts,
  },
  {
    path: '/buttons',
    component: Buttons,
  },
  {
    path: '/modals',
    component: Modals,
  },
  {
    path: '/tables',
    component: Tables,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
]

export default routes
