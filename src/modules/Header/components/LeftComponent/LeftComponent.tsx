import React, { useState } from 'react'
import { useAuth } from '../../../Auth/store/useAuthStore'
import { useModals } from '../../../Modals/provider/ModalProvider'

const LeftComponent = () => {
  const { user, isAgent, setAction } = useAuth()
  const [openProfile, setOpenProfile] = useState<boolean>(false)
  const { setOpenAuthModal } = useModals()
  return (
    <>
      <ul className={!user ? 'prelogIn' : 'afterLog'}>
        <li
          id="my-profile-cont"
          className={
            !openProfile ? 'my-profile-cont close' : 'my-profile-cont open'
          }
          // onMouseEnter={window.innerWidth > 1150 ? () => setOpenProfile(true) : null}
          onMouseLeave={() => setOpenProfile(false)}
          onClick={() => {
            setOpenProfile(!openProfile)
            setAction('login')
          }}
        >
          {user ? (
            <>
              {window.innerWidth > 1150 ? (
                <div className="img icon">
                  <span className="material-symbols-outlined">person</span>
                  {isAgent ? <p className="agent-title">סוכן</p> : null}
                </div>
              ) : (
                <div className="img icon">
                  <span className="material-symbols-outlined">person</span>
                  {isAgent ? <p className="agent-title">סוכן</p> : null}
                </div>
              )}
            </>
          ) : (
            <div className="img icon" onClick={() => setOpenAuthModal(true)}>
              <span className="material-symbols-outlined">person</span>
            </div>
          )}
          {/* {user && <ProfileMenu />} */}
        </li>

        {isAgent ? (
          <li className={'left'}>
            <span className="material-symbols-outlined">StoreFront</span>
          </li>
        ) : null}
        {/* <NotificationIcon /> */}
        {user && (
          <li>
            <button className="icon">
              {/* {cart.length > 0 && (
                    <div className="cart-counter">{cart.length}</div>
                  )}
                  <span className="material-symbols-outlined">shopping_cart</span> */}
            </button>
          </li>
        )}
      </ul>
      {/* <IdentifyCont/> */}
    </>
  )
}

export default LeftComponent
