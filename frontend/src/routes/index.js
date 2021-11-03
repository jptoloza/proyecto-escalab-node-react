import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'


import jwt_decode from 'jwt-decode'
import { useSocket } from '../hooks/useSocket'
import PrivateRoute from './PrivateRoutes'
import PublicRoute from './PublicRoutes'
import Loading from '../components/LoadingComponent/LoadingComponent'
import { signIn } from '../store/Auth/AuthActionsCreator'
import SnackComponent from '../components/SnackComponent/SnackComponent'

const LayoutPage = React.lazy(() => import('../pages/LayoutPage/LayoutPage'))
const LoginPage = React.lazy(() => import('../pages/LoginPage/LoginPage'))
const HomePage = React.lazy(() => import('../pages/HomePage/HomePage'))
const AccountPage = React.lazy(() => import('../pages/AccountPage/AccountPage'))
const DocumentosPage = React.lazy(() => import('../pages/DocumentosPage/DocumentosPage'))
const AsesoriaPage = React.lazy(() => import('../pages/AsesoriaPage/AsesoriaPage'))
const InasistenciaPage = React.lazy(() => import('../pages/InasistenciaPage/InasistenciaPage'))
const EncuestasPage = React.lazy(() => import('../pages/EncuestasPage/EncuestasPage'))
const AyudaPage = React.lazy(() => import('../pages/AyudaPage/AyudaPage'))
const NotificatiosPage = React.lazy(() => import('../pages/NotificationsPage/NotificationsPage'))
 const AdminLayoutPage = React.lazy(() => import('../pages/AdminLayoutPage/AdminLayoutPage'))
const AdminUsersPage = React.lazy(() => import('../pages/AdminPage/AdminUsersPage/AdminUsersPage'))
const AdminUsersAddPage = React.lazy(() => import('../pages/AdminPage/AdminUsersPage/AdminUsersAddPage'))
const AdminUsersEditPage = React.lazy(() => import('../pages/AdminPage/AdminUsersPage/AdminUsersEditPage'))

const AdminNotificationsPage = React.lazy(() => import('../pages/AdminPage/AdminNotificationsPage/AdminNotificationsPage'))
const AdminNotificationsAddPage = React.lazy(() => import('../pages/AdminPage/AdminNotificationsPage/AdminNotificationsAddPage'))


const AdminNewsPage = React.lazy(() => import('../pages/AdminPage/AdminNewsPage/AdminNewsPage'))
const AdminNewsAddPage = React.lazy(() => import('../pages/AdminPage/AdminNewsPage/AdminNewsAddPage'))
const AdminNewsEditPage = React.lazy(() => import('../pages/AdminPage/AdminNewsPage/AdminNewsEditPage'))


const NoMatchPage = React.lazy(() => import('../pages/NoMatchPage/NoMatchPage'))






const AppRoutes = () => {
  const auth = useSelector(state => state.auth)
  const isLoading = useSelector(state => state.nav.loading)
  const dispatch = useDispatch()
  const socket = useSocket(process.env.REACT_APP_SOCKET_HOST)
  try {
    if (auth.token) {
      const jwt = jwt_decode(auth.token)
      const currentTime = Math.floor(Date.now() / 1000)
      if (jwt.exp < currentTime) {
        auth.token = ''
        window.localStorage.removeItem('_token')
      } else {
        if (auth.uid === '') {
          dispatch(signIn(auth.token))
          socket.connectSocket()  
        }
      }
    }
  } catch {
    auth.token = ''
    window.localStorage.removeItem('_token')
  }
  

  const paths = [
    "/",
    "/account",
    "/documentos",
    "/asesoria",
    "/inasistencia",
    "/encuestas",
    "/ayuda",
    "/notifications" 
  ]

  const adminPaths = [
    "/admin",
    "/admin/users",
    "/admin/users/add",
    "/admin/users/edit/:id",
    "/admin/notifications",
    "/admin/notifications/add",
    "/admin/news",
    "/admin/news/add",
    "/admin/news/edit/:id",
    
  ]


  return (
    <BrowserRouter>
      
      {isLoading && <Loading /> }
      <Suspense fallback={<div><Loading /></div>}>
        <Switch>
          <Route exact path={paths}>
            <LayoutPage>
              <Switch>
                <PrivateRoute exact path="/" page={HomePage} auth={auth} />
                <PrivateRoute exact path="/account" page={AccountPage} auth={auth} />
                <PrivateRoute exact path="/documentos" auth={auth} page={DocumentosPage} />
                <PrivateRoute exact path="/asesoria" auth={auth} page={AsesoriaPage} />
                <PrivateRoute exact path="/inasistencia" auth={auth} page={InasistenciaPage} />
                <PrivateRoute exact path="/encuestas" auth={auth} page={EncuestasPage} />
                <PrivateRoute exact path="/ayuda" auth={auth} page={AyudaPage} />              
                <PrivateRoute exact path="/notifications" auth={auth} page={NotificatiosPage} />
              </Switch>
            </LayoutPage>
          </Route>

          <Route exact path={adminPaths}>
            <AdminLayoutPage>
              <Switch>
                <Route exact path="/admin" render={ props => <Redirect to="/admin/users" /> } />
                <PrivateRoute exact path="/admin/users" auth={auth} role="ADMINISTRADOR" page={AdminUsersPage} />  
                <PrivateRoute exact path="/admin/users/add" auth={auth} role="ADMINISTRADOR" page={AdminUsersAddPage} />
                <PrivateRoute exact path="/admin/users/edit/:id" auth={auth} role="ADMINISTRADOR" page={AdminUsersEditPage} />    

                <PrivateRoute exact path="/admin/notifications" auth={auth} role="ADMINISTRADOR" page={AdminNotificationsPage} />  
                <PrivateRoute exact path="/admin/notifications/add" auth={auth} role="ADMINISTRADOR" page={AdminNotificationsAddPage} />

                <PrivateRoute exact path="/admin/news" auth={auth} role="ADMINISTRADOR" page={AdminNewsPage} />  
                <PrivateRoute exact path="/admin/news/add" auth={auth} role="ADMINISTRADOR" page={AdminNewsAddPage} />
                <PrivateRoute exact path="/admin/news/edit/:id" auth={auth} role="ADMINISTRADOR" page={AdminNewsEditPage} />    

              </Switch>

            </AdminLayoutPage>
          </Route>
          <PublicRoute exact path="/login" page={LoginPage} auth={auth} />
          <Route path="*" component={NoMatchPage} />
        </Switch>
      </Suspense>
      <SnackComponent />
    </BrowserRouter>
  )
  
}

export default AppRoutes
