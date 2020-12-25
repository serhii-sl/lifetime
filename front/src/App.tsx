import * as React from 'react';
// containers
import HomePageContainer from './containers/HomePage';
// providers
import { ThemeProvider } from 'styled-components';
// local
import { theme } from './styles/theme';
// global css
import 'normalize.css/normalize.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomePageContainer />
    </ThemeProvider>
  );
};

export default App;
