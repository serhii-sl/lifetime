import * as React from 'react'
// components
import Header from './Header'
import Container from './Container'
import Footer from './Footer'

const MainLayout: React.FC = ({ children }) => (
  <>
    <Header />
    <Container>{children}</Container>
    <Footer />
  </>
)

export default MainLayout
