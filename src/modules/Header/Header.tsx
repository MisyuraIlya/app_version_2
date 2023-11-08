import React, { useState } from 'react'
import LeftComponent from './components/LeftComponent/LeftComponent'
import { useAuth } from '../Auth/store/useAuthStore'

const Header = () => {
  const { user, isAgent } = useAuth()
  const [mobileSearchOn, setMobileSearchOn] = useState(false)
  return (
    <div className={user ? 'header-wrapper' : 'header-wrapper no-cats'}>
      <div className="header-wrapper-subcont flex-container">
        <div
          className={
            mobileSearchOn
              ? 'main-menu col-lg-4 opened'
              : 'main-menu col-lg-6 closed'
          }
        >
          {/* <MobileHeader mobileSearchOn={mobileSearchOn} setMobileSearchOn={setMobileSearchOn}/> */}
          {/* <RightComponent/> */}
        </div>
        <div
          className={
            mobileSearchOn
              ? 'search-li col-lg-5 hide-mob'
              : 'search-li show-mob'
          }
        >
          {/* <CenterComponent/> */}
        </div>
        <div className="actions col-lg-3">
          <LeftComponent />
        </div>
      </div>
      {/* <CategoryNavBar/> */}
    </div>
  )
}

export default Header
