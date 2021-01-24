import * as React from 'react'
// layouts
import MainLayout from './layouts/MainLayout'
import AuthLayout from './layouts/AuthLayout'
// store
import store from './store'
// containers
import SignInContainer from './containers/Authorization/SignInContainer'
import SignUpContainer from './containers/Authorization/SignUpContainer'
import ProfileContainer from './containers/ProfileContainer'
import PostsContainer from './containers/PostsContainer'
// components
import PrivateRoute from './shared/components/PrivateRoute'
// router
import { withRouter, Route, Redirect } from 'react-router-dom'
// providers
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie'
// local
import { theme } from './styles/theme'
// global css
import 'normalize.css/normalize.css'

const App = () => {
  return (
    <Provider store={store}>
      <CookiesProvider>
        <ThemeProvider theme={theme}>
          <Route
            exact
            path={['/', '/home', '/friends', '/messenger', '/profile']}
          >
            <MainLayout>
              <Redirect to={{ pathname: '/login' }} />
              <PrivateRoute path='/home' component={PostsContainer} />
              <PrivateRoute
                path='/messenger'
                render={() => <div>MESSENGER</div>}
              />
              <PrivateRoute path='/friends' render={() => <div>FRIENDS</div>} />
              <PrivateRoute path='/profile' component={ProfileContainer} />
              <Redirect path='/' to='/home' />
            </MainLayout>
          </Route>
          <Route path={['/login', '/register']}>
            <AuthLayout>
              <Route path='/login' component={SignInContainer} />
              <Route path='/register' component={SignUpContainer} />
            </AuthLayout>
          </Route>
        </ThemeProvider>
      </CookiesProvider>
    </Provider>
  )
}

export default withRouter(App)
