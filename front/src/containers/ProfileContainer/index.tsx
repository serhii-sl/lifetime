import * as React from 'react'
// components
import HeaderProfile from '../../components/Profile/HeaderProfile'
import ProfileTabs from '../../components/Profile/ProfileTabs'
import ErrorBoundary from '../ErrorBoundary'
// styles
import { ContainerWrapper } from './styles'

const ProfileContainer = () => {
  return (
    <ErrorBoundary>
      <ContainerWrapper>
        <HeaderProfile />
        <ProfileTabs />
      </ContainerWrapper>
    </ErrorBoundary>
  )
}

export default ProfileContainer
