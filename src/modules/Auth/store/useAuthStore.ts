import { create } from 'zustand'
import { AuthService } from '../services/auth.service'

interface AuthState {
  loading: boolean
  isUser: boolean
  isAdmin: boolean
  isAgent: boolean
  isSuperAgent: boolean
  isUserBlocked: boolean
  user: IUser | null
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
  isUser: false,
  isAdmin: false,
  isAgent: false,
  isSuperAgent: false,
  isUserBlocked: false,
  user: null,

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
    } catch (e) {
      console.error('[ERROR AUTH SERIVEC]', e)
    } finally {
      set({ loading: false })
    }
  },

  getAccessToken: async () => {
    try {
      set({ loading: true })
      const response = await AuthService.getAccessToken('reftesh')
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

  logOut: () => {},
}))
