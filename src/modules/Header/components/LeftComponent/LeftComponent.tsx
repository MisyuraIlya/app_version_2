import React, { useState } from 'react'
import { useAuth } from '../../../Auth/store/useAuthStore'
import { useModals } from '../../../Modals/provider/ModalProvider'
import ProfileMenu from './components/ProfileMenu'
import { useCart } from '../../../Cart/store/cart.store'
import { Link } from 'react-router-dom'

const LeftComponent = () => {
  const { user, isAgent, setAction } = useAuth()
  const { cart } = useCart()
  const [openProfile, setOpenProfile] = useState<boolean>(false)
  const { setOpenAuthModal, leftSideBar, setLeftSideBar } = useModals()
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
          {user && <ProfileMenu />}
        </li>

        {isAgent ? (
          <li className={'left'}>
            <Link to={'/agentClients'}>
              <span className="material-symbols-outlined">StoreFront</span>
            </Link>
          </li>
        ) : null}
        {user && (
          <li>
            <Link to={'/cart'}>
              <button className="icon">
                {cart.length > 0 && (
                  <div className="cart-counter">{cart.length}</div>
                )}
                <span className="material-symbols-outlined">shopping_cart</span>
              </button>
            </Link>
          </li>
        )}

        {leftSideBar && (
          <div
            onClick={() => setLeftSideBar(false)}
            className="fake-notification"
          ></div>
        )}

        {user && (
          <li className={'left'}>
            <button className="icon" onClick={() => setLeftSideBar(true)}>
              <span className="material-symbols-outlined">campaign</span>
            </button>
          </li>
        )}
      </ul>
      {/* <IdentifyCont/> */}
    </>
  )
}

export default LeftComponent
