interface IUser {
  extId: string
  email: string
  isRegistered: boolean
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
