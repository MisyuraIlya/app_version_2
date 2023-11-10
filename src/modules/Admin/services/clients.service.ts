import axios from 'axios'

interface UsersResponse extends Hydra {
  'hydra:member': IUser[]
}

interface updateAuthResponse {
  data: null
  message: string
  status: 'success' | 'error'
}

export const AdminClinetsService = {
  async getClients(page: string | number, all = false): Promise<UsersResponse> {
    if (all) {
      const response = await axios.get(
        `http://localhost:8080/api/users?itemsPerPage=10000`
      )
      return response.data
    } else {
      const response = await axios.get(
        `http://localhost:8080/api/users?page=${page}`
      )
      return response.data
    }
  },

  async getClientItem(userId: string | number): Promise<IUser> {
    const response = await axios.get(
      `http://localhost:8080/api/users/${userId}`
    )
    return response.data
  },

  async updateClient(user: IUser): Promise<IUser> {
    const response = await axios.patch(
      `http://localhost:8080/api/users/${user.id}`,
      user,
      {
        headers: {
          'Content-Type': 'application/merge-patch+json',
        },
      }
    )
    return response.data
  },

  async updateAuth(
    extId: string,
    username: string,
    password: string
  ): Promise<updateAuthResponse> {
    const response = await axios.put(
      `http://localhost:8080/auth/registration`,
      {
        extId,
        username,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/merge-patch+json',
        },
      }
    )
    return response.data
  },
}
