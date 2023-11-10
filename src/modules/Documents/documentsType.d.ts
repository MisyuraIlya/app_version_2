interface IHistory {
  id: number
  orderExtId: string
  user: IUser
  deliveryDate: string
  discount: number
  total: number
  orderComment: string
  orderStatus: OrderStatus
  createdAt: string
  updatedAt: string
  deliveryPrice: number
  historyDetaildes: IHistoryDetailed
  documentType: IDocumentType
}

interface IHistoryDetailed {
  id: number
  history: IHistory
  product: IProduct
  singlePrice: number
  quantity: number
  discount: number
  total: number
}

type OrderStatus = 'paid' | 'draft' | 'pending' | 'faild'
