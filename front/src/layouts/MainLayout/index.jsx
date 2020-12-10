import * as React from 'react'
// components
import Header from "./Header"
import Container from "./Container"
import Footer from "./Footer";

const MainLayout = ({children, isHomePage}) => (
  <>
    <Header isHomePage={isHomePage} />
    <Container>{children}</Container>
    <Footer />
  </>
)

export default MainLayout
