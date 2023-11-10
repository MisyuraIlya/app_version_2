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
    page: string | number
  ): Promise<orderResponse> {
    const response = await axios.get(
      `http://localhost:8080/api/histories?page=${page}&createdAt[after]=${dateFrom}&createdAt[before]=${dateTo}`
    )
    return response.data
  },

  async getOrderItem(orderItem: string | number): Promise<orderItemsResponse> {
    const response = await axios.get(
      `http://localhost:8080/api/history_detaileds?history.id=${orderItem}`
    )
    return response.data
  },
}
