import React, { FC } from 'react'
import Loader from '../../../../shared/Loader'
import LoginForm from './components/LoginForm'
import { useAuth } from '../../../Auth/store/useAuthStore'
import RegistrationForm from './components/RegistrationForm'
import ForgotPasswordStepOne from './components/ForgotPasswordStepOne'
import ForgotPasswordStepTwo from './components/ForgotPasswordStepTwo'
import ValidationForm from './components/ValidationForm'
type AuthPopUpProps = {
  active: boolean
  setActive: (bol: boolean) => void
}

const AuthPopUp: FC<AuthPopUpProps> = ({ active, setActive }) => {
  const { loading, action, login, registration, validation } = useAuth()
  return (
    <div className="popup" id="userEntry">
      {loading && <Loader />}
      <div className="popup-wrapper">
        <div className="wrapp">
          <div onClick={() => setActive(false)} className="close-popup">
            <span className="material-symbols-outlined">close</span>
          </div>
          <div className="user-entry-wrapper">
            <div className="user-entry">
              {action === 'login' && <LoginForm />}
              {action === 'register' && <RegistrationForm />}
              {action === 'forgotPassordStepOne' && <ForgotPasswordStepOne />}
              {action === 'forgotPassordStepTwo' && <ForgotPasswordStepTwo />}
              {action === 'validation' && <ValidationForm />}
              {/* {action === 'registerNewClient' &&
                                <NewB2bForm/>
                            } */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthPopUp
