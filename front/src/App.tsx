import * as React from 'react';
// containers
import MainPageContainer from './containers/MainPage';
// providers
import { ThemeProvider } from 'styled-components';
// local
import { theme } from './styles/theme';
// global css
import 'normalize.css/normalize.css';
import NavigationTabsContainer from './context/HeaderNavigation';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationTabsContainer>
        <MainPageContainer />
      </NavigationTabsContainer>
    </ThemeProvider>
  );
};

export default App;
