interface IUser {
  extId: string
  email: string
  isRegistered: boolean
  isBlocked: boolean
  name: string
  phone: string
  createdAt: string
  updatedAt: string
  roles: UsersTypes
}

interface UsersTypes {
  USER: 'ROLE_USER'
  AGENT: 'ROLE_AGENT'
  ADMIN: 'ROLE_ADMIN'
}

interface ITokens {
  token: string
  refresh_token: string
}
interface IAuthResponse extends ITokens {
  status: string
  user: User
}

interface IDefaultAuthResponse {
  status: 'success' | 'error'
  data: null
  message: string
}

interface validationData {
  exId: string
  name: string
}
interface IValidationResponse {
  status: 'success' | 'error'
  data: validationData
  message: string
}

interface IRegistrationResponse {
  status: 'success' | 'error'
  data: null
  message: string
}
