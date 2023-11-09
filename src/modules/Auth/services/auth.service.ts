import axios from 'axios'

export const AuthService = {
  async login(username: string, password: string): Promise<IAuthResponse> {
    const response = await axios.post('http://localhost:8080/api/auth', {
      username,
      password,
    })

    return response.data
  },
  async getAccessToken(refreshToken: string): Promise<IAuthResponse> {
    const response = await axios.post(
      'http://localhost:8080/api/auth/refresh',
      {
        refresh_token: refreshToken,
      }
    )
    return response.data
  },
  async validation(
    userExId: string,
    phone: string
  ): Promise<IValidationResponse> {
    const response = await axios.post('http://localhost:8080/auth/validation', {
      exId: userExId,
      phone,
    })
    return response.data
  },
  async registration(
    extId: string,
    username: string,
    password: string
  ): Promise<IDefaultAuthResponse> {
    const response = await axios.put(
      'http://localhost:8080/auth/registration',
      {
        extId,
        username,
        password,
      }
    )
    return response.data
  },

  async restorePasswordStepOne(email: string): Promise<IDefaultAuthResponse> {
    const response = await axios.post(
      'http://localhost:8080/auth/restorePasswordStepOne',
      {
        email,
      }
    )
    return response.data
  },

  async restorePasswordStepTwo(
    email: string,
    token: string,
    password: string
  ): Promise<IDefaultAuthResponse> {
    const response = await axios.post(
      'http://localhost:8080/auth/restorePasswordStepTwo',
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
