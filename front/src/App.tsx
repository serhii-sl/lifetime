import * as React from 'react';
// layouts
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
// containers
import SignInContainer from './containers/Authorization/SignInContainer';
import SignUpContainer from './containers/Authorization/SignUpContainer';
import ProfileContainer from './containers/ProfileContainer';
import PostsContainer from './containers/PostsContainer';
// router
import { withRouter, Route, Redirect } from 'react-router-dom';
// providers
import { ThemeProvider } from 'styled-components';
// local
import { theme } from './styles/theme';
// global css
import 'normalize.css/normalize.css';

const App = () => {
  return (
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
  );
};

export default withRouter(App);
