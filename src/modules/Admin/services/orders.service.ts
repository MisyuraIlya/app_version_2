import axios from 'axios'

interface orderResponse extends Hydra {
  'hydra:member': IHistory[]
}

interface orderItemsResponse extends Hydra {
  'hydra:member': IHistoryDetailed[]
}

export const AdminOrderService = {
  async getOrders(
    dateFrom: string,
    dateTo: string,
    page: string | number,
    search: string
  ): Promise<orderResponse> {
    const response = await axios.get(
      `${process.env.API}/api/histories?page=${page}&createdAt[after]=${dateFrom}&createdAt[before]=${dateTo}&user.extId=${search}`
    )
    return response.data
  },

  async getOrderItem(orderItem: string | number): Promise<orderItemsResponse> {
    const response = await axios.get(
      `${process.env.API}/api/history_detaileds?history.id=${orderItem}`
    )
    return response.data
  },
}
