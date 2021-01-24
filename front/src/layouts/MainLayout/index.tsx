import * as React from 'react'
// components
import Header from './Header'
import Container from './Container'
import Footer from './Footer'
import Loader from '../../components/Loader'
// hooks
import { useCurrentUser } from '../../containers/Authorization/SignInContainer/hooks/useCurrentUser'

const MainLayout: React.FC = ({ children }) => {
  const { loading } = useCurrentUser()

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Container>{children}</Container>
          <Footer />
        </>
      )}
    </>
  )
}

export default MainLayout
