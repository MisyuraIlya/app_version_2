import React, { useState } from 'react'
import LeftComponent from './components/LeftComponent/LeftComponent'
import { useAuth } from '../Auth/store/useAuthStore'
import MobileHeader from './components/MobileHeader/MobileHeader'
import RightComponent from './components/RightComponent/RightComponent'
import CenterComponent from './components/CenterComponent/CenterComponent'
import CategoryNavBar from './components/CategoryNavBar/CategoryNavBar'

const Header = () => {
  const { user, isAgent, isAdmin } = useAuth()
  const [mobileSearchOn, setMobileSearchOn] = useState(false)
  return (
    <header id="header">
      <div className={user ? 'header-wrapper' : 'header-wrapper no-cats'}>
        <div className="header-wrapper-subcont flex-container">
          <div
            className={
              mobileSearchOn
                ? 'main-menu col-lg-4 closed'
                : 'main-menu col-lg-4 opened'
            }
          >
            <MobileHeader
              mobileSearchOn={mobileSearchOn}
              setMobileSearchOn={setMobileSearchOn}
            />
            <RightComponent />
          </div>
          <div
            className={
              !mobileSearchOn
                ? 'search-li col-lg-4 hide-mob'
                : 'search-li col-lg-4 show-mob'
            }
          >
            <CenterComponent />
          </div>
          <div className="actions col-lg-4">
            <LeftComponent />
          </div>
        </div>
        <CategoryNavBar />
      </div>
    </header>
  )
}

export default Header
