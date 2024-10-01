import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster
const Logout = lazy(() => import('../pages/Logout'))
const Profile = lazy(() => import('../pages/Profile'))
const Users = lazy(() => import('../pages/Users'))
const Billing = lazy(() => import('../pages/Billing'))
const DashboardUser = lazy(() => import('../components/Dashboard/DashboardUser'))
const Forms = lazy(() => import('../pages/Forms'));
const Faq = lazy(() => import('../pages/FAQ'));
const CreateListing = lazy(() => import('../pages/CreateListing'));
const Page404 = lazy(() => import('../pages/404'))
const Buttons = lazy(() => import('../pages/Buttons'))
const UsersList = lazy(() => import('../pages/UsersList'))
const Unsubscribe = lazy(() => import('../pages/Unsubscribe'))
// const Ads = lazy(() => import('../pages/Ads'));
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
  // {
  //   path: '/ads',
  //   component: Ads,
  // },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/create_ads',
    component: CreateListing,
  },
  {
    path: '/faq', 
    component: Faq, 
  },
  {
    path: '/users',
    component: Users,
  },
  {
    path: '/userLists',
    component: UsersList,
  },
  {
    path: '/billing',
    component: Billing,
  },
   {
    path: '/buttons',
    component: Buttons,
  },
  {
    path: '/user_dashboard', // the url
    component: DashboardUser, // view rendered
  },
  {
    path: '/logout',
    component: Logout,
  },
  {
    path: '/forms',
    component: Forms,
  },
  
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/unsubscribe',
    component: Unsubscribe,
  },
]

export default routes
