import * as React from 'react'
// constants
import { TABS } from './constants'
// styles
import { NavigationTabsWrapper, Tab } from './styles'
// router
import { useLocation, Link } from 'react-router-dom'

const NavigationTabs: React.FC = () => {
  // hooks
  const location = useLocation()

  return (
    <NavigationTabsWrapper>
      {TABS.map(({ title, href }, index) => (
        <Link to={href} key={index}>
          <Tab isActive={location.pathname === href}>{title}</Tab>
        </Link>
      ))}
    </NavigationTabsWrapper>
  )
}

export default NavigationTabs
