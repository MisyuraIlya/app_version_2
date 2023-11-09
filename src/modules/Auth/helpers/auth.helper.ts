import Cookies from 'js-cookie'

export const getRefreshToken = () => {
  const accessToken = Cookies.get('accessToken')
  return accessToken || null
}

export const getAccessToken = () => {
  const accessToken = Cookies.get('accessToken')
  return accessToken || null
}

export const getUserFromStorage = () => {
  return JSON.parse(localStorage.getItem('user') || '{}')
}

export const updateAccessToken = (data: ITokens) => {
  Cookies.set('accessToken', data.token)
}

export const saveTokensStorage = (data: ITokens) => {
  Cookies.set('accessToken', data.token)
  Cookies.set('refreshToken', data.refresh_token)
}

export const removeFromStorage = () => {
  Cookies.remove('accessToken')
  Cookies.remove('refreshToken')
  localStorage.removeItem('user')
}

export const saveToStorage = (data: IAuthResponse): void => {
  saveTokensStorage(data)
  localStorage.setItem('user', JSON.stringify(data.user))
}

export const getUserLocalStorage = (): IUser | null => {
  return localStorage.user ? JSON.parse(localStorage.user) : null
}

export const setUserLocalStorage = (user: IUser): void => {
  localStorage.setItem('user', JSON.stringify(user))
}

export const getRole = () => {
  const user = getUserLocalStorage()

  if (user) {
    const roles = user?.roles as Array<
      'ROLE_ADMIN' | 'ROLE_USER' | 'ROLE_AGENT' | 'ROLE_SUPER_AGENT'
    >

    if (roles.includes('ROLE_ADMIN')) {
      return 'ADMIN'
    } else if (roles.includes('ROLE_SUPER_AGENT')) {
      return 'SUPER_AGENT'
    } else if (roles.includes('ROLE_AGENT')) {
      return 'AGENT'
    } else if (roles.includes('ROLE_USER')) {
      return 'USER'
    } else {
      return null
    }
  }
}

export const getClientExtId = () => {
  //TODO IMPLEMENT
  return '9999999'
}
