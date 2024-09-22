import React, { useContext, Suspense, useEffect, lazy } from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
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
  // const { user } = useContext(AuthContext);
  
  
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext)
  let location = useLocation()

  useEffect(() => {
    closeSidebar()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])


  const user = {
    role: "user"
  }
  
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
              user.role === 'admin' &&
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
              user.role === 'user' &&
              userRoutes.map((route, i) => {
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
                user.role === 'admin' && 
                <Redirect exact from="/app" to="/app/adminDashboard" />
              }
              {
                user.role === 'user' && 
                <Redirect exact from="/app" to="/app/userDashboard" />
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
