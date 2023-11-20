interface ICart {
  discount: number
  price: float
  product: IProduct
  quantity: number
  sku: string
  stock: number
  total: float
}

type IDocumentType = 'order' | 'request' | 'return' | 'draft'

type IPriceMode = 'selfPrice' | 'updatedPrice'
