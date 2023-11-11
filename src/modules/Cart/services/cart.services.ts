import axios from 'axios'

const CartServices = {
  async CreateOrder(
    comment: string,
    userExtId: string,
    total: number,
    isAgentOrder: boolean,
    isBuyByCreditCard: boolean,
    discount: number,
    documentType: IDocumentType,
    deliveryPrice: number,
    deliveryDate: string,
    products: ICart[]
  ) {
    const obj = {
      comment,
      userExtId,
      total,
      isAgentOrder,
      isBuyByCreditCard,
      discount,
      documentType,
      deliveryPrice,
      deliveryDate,
      products,
    }
    const response = await axios.post(`${process.env.API}/api/send_orders`, obj)
    return response.data
  },
}

export default CartServices
