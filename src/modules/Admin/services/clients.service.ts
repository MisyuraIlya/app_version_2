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
  async getClients(
    page: string | number,
    all = false,
    search: string
  ): Promise<UsersResponse> {
    if (all) {
      const response = await axios.get(
        `${process.env.API}/api/users?itemsPerPage=10000&role=ROLE_USER&extId=${search}`
      )
      return response.data
    } else {
      const response = await axios.get(
        `${process.env.API}/api/users?page=${page}&extId=${search}`
      )
      return response.data
    }
  },
  async getAgents(): Promise<UsersResponse> {
    const response = await axios.get(
      `${process.env.API}/api/users?itemsPerPage=10000&role=ROLE_AGENT`
    )
    return response.data
  },

  async getClientItem(userId: string | number): Promise<IUser> {
    const response = await axios.get(`${process.env.API}/api/users/${userId}`)
    return response.data
  },

  async updateClient(user: IUser): Promise<IUser> {
    const response = await axios.patch(
      `${process.env.API}/api/users/${user.id}`,
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
      `${process.env.API}/auth/registration`,
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
