import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'

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
  return JSON.parse(localStorage.user) ?? null
}

export const setUserLocalStorage = (user: IUser): void => {
  localStorage.setItem('user', JSON.stringify(user))
}

export const getPayloadToken = () => {
  const token = getAccessToken()
  if (token) {
    const decoded = jwt.decode(token)
    return decoded
  } else {
    return null
  }
}

export const getRole = () => {
  const res = getPayloadToken()
  if (res) {
    if (res?.roles.includes('ROLE_ADMIN')) {
      return 'ADMIN'
    } else if (res?.roles.includes('ROLE_SUPER_AGENT')) {
      return 'SUPER_AGENT'
    } else if (res?.roles.includes('ROLE_AGENT')) {
      return 'AGENT'
    } else if (res?.roles.includes('ROLE_USER')) {
      return 'USER'
    } else {
      return null
    }
  } else {
    return null
  }
}
