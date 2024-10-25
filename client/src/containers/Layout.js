import React, { useContext, Suspense, useEffect, lazy } from 'react'
import { Switch, Route, Redirect, useLocation, useHistory } from 'react-router-dom'
import AdminRoutes from '../routes/adminIndex';
import userRoutes from '../routes/userInex';
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Main from '../containers/Main'
import ThemedSuspense from '../components/ThemedSuspense'
import { SidebarContext } from '../context/SidebarContext'
import { AuthContext } from '../context/AuthContext';

const Page404 = lazy(() => import('../pages/404'))

function Layout() {
  const history = useHistory();
  const { user } = useContext(AuthContext);


  if (!user ) {
    history.push("/auth/login");
  }

  // console.log("LAYOUT: USER> ",user);

  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext)
  let location = useLocation()

  useEffect(() => {
    closeSidebar()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])



  return (
    <div
      className={`flex min-h-screen bg-gray-50 dark:bg-gray-900 ${isSidebarOpen && 'overflow-hidden'}`}
    >
      <Sidebar />

      <div className="flex flex-col flex-1 w-full">
        <Header />
        <Main>
          <Suspense fallback={<ThemedSuspense />}>
            <Switch>
              {
                user?.authId?.role === 'ADMIN' &&
                AdminRoutes.map((route, i) => {
                  return route.component ? (
                    <Route
                      key={i}
                      exact={true}
                      path={`/app${route.path}`}
                    render={(props) => <route.component {...props} />}
                    />
                  ) : null
                })
              }
              {
                user?.authId?.role === 'USER' &&
                userRoutes.map((route, i) => {

                  console.log("Route > ", route)
                  return route.component ? (
                    <Route
                      key={i}
                      exact={true}
                      path={`/app${route.path}`}
                      render={(props) => <route.component {...props} />}
                    />
                  ) : null
                })
              }
              {
                user?.authId?.role === 'ADMIN' &&
                // <Redirect exact from="/app" to="/app/adminDashboard" />
                <Redirect exact from="/app" to="/app/user-list-management" />
              }
              {
                user?.authId?.role === 'USER' &&
                <Redirect exact from="/app" to="/app/create_ads" />
              }
              <Route component={Page404} />
            </Switch>
          </Suspense>
        </Main>
      </div>
    </div>
  )
}

export default Layout
