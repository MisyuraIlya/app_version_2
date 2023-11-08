import axios from 'axios'

export const AuthService = {
  async login(username: string, password: string) {
    const response = await axios.post(
      'https://digiaws.net/ceremonitea/api/auth',
      {
        username,
        password,
      }
    )

    return response.data
  },
  async getAccessToken(refreshToken: string) {
    const response = await axios.post(
      'https://digiaws.net/ceremonitea/api/auth/refresh',
      {
        refresh_token: refreshToken,
      }
    )
    return response.data
  },
  async validation(userExId: string, phone: string) {
    const response = await axios.post(
      'https://digiaws.net/ceremonitea/auth/validation',
      {
        exId: userExId,
        phone,
      }
    )
    return response.data
  },
  async registration(extId: string, username: string, password: string) {
    const response = await axios.put(
      'https://digiaws.net/ceremonitea/auth/registration',
      {
        extId,
        username,
        password,
      }
    )
    return response.data
  },

  async restorePasswordStepOne(email: string) {
    const response = await axios.post(
      'https://digiaws.net/ceremonitea/auth/restorePasswordStepOne',
      {
        email,
      }
    )
    return response.data
  },

  async restorePasswordStepTwo(email: string, token: string, password: string) {
    const response = await axios.post(
      'https://digiaws.net/ceremonitea/auth/restorePasswordStepTwo',
      {
        email,
        token,
        password,
      }
    )
    return response.data
  },

  // async createNewUser(data){
  //     const response = await axios.post(global.api + '/auth/createUser', data)
  //     return response.data
  // }
}
