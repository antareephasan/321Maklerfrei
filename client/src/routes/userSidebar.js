/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
 const routes = [
    {
      path: '/app/userDashboard',
      icon: 'OutlinePersonIcon',
      name: 'dashboard',
    },
    {
      path: '/app/createListing',
      icon: 'PlusIcon',
      name: 'create listing',
    },
    {
      path: '/app/userLists',
      icon: 'HomeIcon',
      name: 'my listings',
    },
    {
      path: '/app/profile',
      icon: 'OutlineCogIcon',
      name: 'settings',
    },
    {
      path: '/app/faq',
      icon: 'QuestionMark',
      name: 'FAQ',
    },
  ]
  
  export default routes
  