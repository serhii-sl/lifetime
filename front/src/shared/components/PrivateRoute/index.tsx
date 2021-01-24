import * as React from 'react'
// libs
import { Redirect, Route } from 'react-router-dom'
// cookies
import { useCookies } from 'react-cookie';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const [cookies] = useCookies(['JWT-Token'])

  return (
    <Route
      {...rest}
      render={(props) =>
        cookies['JWT-Token'] ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
