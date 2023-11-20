import { create } from 'zustand'
import { AuthService } from '../services/auth.service'
import {
  getAgentLocalStorage,
  getRefreshToken,
  getRole,
  getUserLocalStorage,
  removeFromStorage,
  saveToStorage,
  updateAccessToken,
} from '../helpers/auth.helper'
import { onErrorAlert, onSuccessAlert } from '../../../shared/MySweetAlert'
import {
  getClientStorage,
  removeClientStorage,
  setClientStorage,
} from '../../Agent/helpers/localstorage'

interface AuthState {
  loading: boolean
  isClient: boolean
  isAdmin: boolean
  isAgent: boolean
  isSuperAgent: boolean
  isUserBlocked: boolean
  user: IUser | null
  client: IUser | null
  setSelectClient: (client: IUser | null) => void
  action: ActionType
  setAction: (value: ActionType) => void
  userExtId: string
  email: string
  setEmail: (value: string) => void
  setUserExtId: (value: string) => void
  login: (username: string, password: string) => void
  registration: (userExId: string, username: string, password: string) => void
  validation: (userExId: string, phone: string) => void
  getAccessToken: () => void
  restorePasswordStepOne: (email: string) => void
  restorePasswordStepTwo: (
    email: string,
    token: string,
    password: string
  ) => void
  registerClient: (email: string, token: string, password: string) => void
  logOut: () => void
}

type ActionType =
  | 'login'
  | 'register'
  | 'validation'
  | 'forgotPassordStepOne'
  | 'forgotPassordStepTwo'
  | 'registerNewClient'

export const useAuth = create<AuthState>((set, get) => ({
  // STATES
  loading: false,
  isClient: getRole() === 'USER',
  isAdmin: getRole() === 'ADMIN',
  isAgent: getRole() === 'AGENT' || getRole() === 'SUPER_AGENT',
  isSuperAgent: getRole() === 'SUPER_AGENT',
  isUserBlocked: getUserLocalStorage()?.isBlocked ?? false,
  user: getUserLocalStorage(),
  client: getClientStorage(),
  setSelectClient: (client: IUser | null) => {
    set({ client: client })
    if (client) {
      setClientStorage(client)
    } else {
      removeClientStorage()
    }
  },
  // states for auth modals
  action: 'login',
  setAction: (value: ActionType) => set({ action: value }),
  userExtId: '',
  setUserExtId: (value) => set({ userExtId: value }),
  email: '',
  setEmail: (value: string) => set({ email: value }),

  // METHODS

  login: async (username: string, password: string) => {
    try {
      set({ loading: true })
      const response = await AuthService.login(username, password)
      if (response.status === 'success') {
        saveToStorage(response)
        onSuccessAlert('ברוכים הבאים', '')
        setTimeout(() => {
          location.reload()
        }, 1000)
      } else {
        onErrorAlert('שגיאה', '')
      }
    } catch (e) {
      console.error('[ERROR AUTH SERIVEC]', e)
    } finally {
      set({ loading: false })
    }
  },

  registration: async (
    userExId: string,
    username: string,
    password: string
  ) => {
    try {
      set({ loading: true })
      const response = await AuthService.registration(
        userExId,
        username,
        password
      )
      if (response.status === 'success') {
        get().login(username, password)
      } else {
        onErrorAlert('שגיאה', response.message)
      }
    } catch (e) {
      console.error('[ERROR AUTH SERIVEC]', e)
    } finally {
      set({ loading: false })
    }
  },

  validation: async (userExId: string, phone: string) => {
    try {
      set({ loading: true })
      const response = await AuthService.validation(userExId, phone)
      if (response.status === 'success') {
        get().setUserExtId(response.data.exId)
        get().setAction('register')
      } else {
        onErrorAlert('שגיאה', response.message)
        return false
      }
    } catch (e) {
      console.error('[ERROR AUTH SERIVEC]', e)
    } finally {
      set({ loading: false })
    }
  },

  getAccessToken: async () => {
    try {
      set({ loading: true })
      const refreshToken = getRefreshToken()
      if (refreshToken) {
        const response = await AuthService.getAccessToken(refreshToken)
        if (response.status === 'success') {
          updateAccessToken(response)
        } else {
          get().logOut()
        }
      }
    } catch (e) {
      console.error('[ERROR AUTH SERIVEC]', e)
    } finally {
      set({ loading: false })
    }
  },

  restorePasswordStepOne: async (email: string) => {
    try {
      set({ loading: true })
      const response = await AuthService.restorePasswordStepOne(email)
      if (response.status === 'success') {
        onSuccessAlert(response.message, '')
      } else {
        onErrorAlert('שגיאה', response.message)
      }
    } catch (e) {
      console.error('[ERROR AUTH SERIVEC]', e)
    } finally {
      set({ loading: false })
    }
  },

  restorePasswordStepTwo: async (
    email: string,
    token: string,
    password: string
  ) => {
    try {
      set({ loading: true })
      const response = await AuthService.restorePasswordStepTwo(
        email,
        token,
        password
      )
      if (response.status === 'success') {
        onSuccessAlert(response.message, '')
      } else {
        onErrorAlert('שגיאה', response.message)
      }
    } catch (e) {
      console.error('[ERROR AUTH SERIVEC]', e)
    } finally {
      set({ loading: false })
    }
  },

  registerClient: async (email: string, token: string, password: string) => {
    try {
      set({ loading: true })
      // const response = await AuthService.crea(email, token, password)
    } catch (e) {
      console.error('[ERROR AUTH SERIVEC]', e)
    } finally {
      set({ loading: false })
    }
  },

  logOut: () => {
    removeFromStorage()
    location.reload()
  },
}))
