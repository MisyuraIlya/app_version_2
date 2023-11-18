interface IUser {
  id?: number
  extId: string
  email: string | null
  isRegistered: boolean
  isBlocked: boolean
  name: string
  phone: string
  createdAt: string
  updatedAt: string
  discount: number
  roles?: Array<'ROLE_ADMIN' | 'ROLE_USER' | 'ROLE_AGENT' | 'ROLE_SUPER_AGENT'>
  role: 'ROLE_ADMIN' | 'ROLE_USER' | 'ROLE_AGENT' | 'ROLE_SUPER_AGENT'
  isAllowOrder: boolean
  isAllowAllClients: boolean
  passwordUnencrypted: string | null
  password?: string
}

interface ITokens {
  token: string
  refresh_token: string
}
interface IAuthResponse extends ITokens {
  status: string
  user: IUser
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
