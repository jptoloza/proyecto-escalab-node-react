import React from 'react';
import { Route, Redirect } from 'react-router-dom'



const PublicRoute = ({ page: Component, path, auth, ...props }) => {
  let isLogged = false
  if (auth.uid !== '' && auth.token !== '') {
    isLogged = true
  }

  return (
    <Route
      {...props}
      render={ props =>
        path==='/login' && isLogged ?  ( <Redirect to="/" /> ) : ( <Component {...props} /> )
      }
    />
  )
}

export default PublicRoute
