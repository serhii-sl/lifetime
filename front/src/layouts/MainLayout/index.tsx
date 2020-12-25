import * as React from 'react';
// components
import Header from './Header';
import Container from './Container';
import Footer from './Footer';

interface IMainLayoutProps {
  isHomePage?: boolean;
}

const MainLayout: React.FC<IMainLayoutProps> = ({ children, isHomePage }) => (
  <>
    <Header isHomePage={isHomePage} />
    <Container>{children}</Container>
    <Footer />
  </>
);

export default MainLayout;
