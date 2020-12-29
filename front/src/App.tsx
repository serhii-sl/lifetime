import * as React from 'react';
// layouts
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
// store
import store from './store';
// containers
import SignInContainer from './containers/Authorization/SignInContainer';
import SignUpContainer from './containers/Authorization/SignUpContainer';
import ProfileContainer from './containers/ProfileContainer';
import PostsContainer from './containers/PostsContainer';
// router
import { withRouter, Route, Redirect } from 'react-router-dom';
// providers
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
// local
import { theme } from './styles/theme';
// global css
import 'normalize.css/normalize.css';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Route exact path={['/', '/home', '/friends', '/messenger', '/profile']}>
          <MainLayout>
            <Route path='/home' component={PostsContainer} />
            <Route path='/messenger' render={() => <div>MESSENGER</div>} />
            <Route path='/friends' render={() => <div>FRIENDS</div>} />
            <Route path='/profile' component={ProfileContainer} />
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
    </Provider>
  );
};

export default withRouter(App);
