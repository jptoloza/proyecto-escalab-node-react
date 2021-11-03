import React from 'react';
import { Route, Redirect } from 'react-router-dom'


const PrivateRoute = ({ page: Component, auth, role, ...props }) => {
  let isLogged = false
  if (auth.uid !== null && auth.token) {
    if (role) {
      if (auth.roles.includes(role)){
        isLogged = true
      } else {
        isLogged = false
      }
    } else {
      isLogged = true
    }

  }

  return (
    <Route
      {...props}
      render={ props =>
        isLogged ? ( <Component {...props} /> ) : ( <Redirect to="/login" /> )
      }
    />
  )
}


export default PrivateRoute
