import { create } from 'zustand'
import { setProductLocalstorage } from '../helpers/localstorage'
import {
  getAgentExtId,
  getClientExtId,
  getClientName,
  getUserFromStorage,
} from '../../Auth/helpers/auth.helper'
import CartServices from '../services/cart.services'
import { onErrorAlert, onSuccessAlert } from '../../../shared/MySweetAlert'

interface useCartState {
  loading: boolean
  cart: ICart[]
  selectedMode: IDocumentType
  selectedPriceMode: IPriceMode
  comment: string
  sendNoApproval: boolean
  specialSettingsPop: boolean
  b2bPickupDiscount: number
  deliveryPrice: number
  deliveryDate: string
  discount: number
  Maam: number
  totalBasket: number

  setCart: (data: ICart[]) => void
  getCartItem: (product: { sku: string }) => ICart | null
  addToCart: (product: IProduct) => void
  increaseCart: (sku: string) => void
  decreaseCart: (sku: string) => void
  deleteFromCart: (sku: string) => void
  changeQuantity: (sku: string, quantity: number) => void
  avoidNullInCart: (sku: string) => void
  CartTitle: () => string
  setSendNoApproval: (bool: boolean) => void
  setSpecialSettingsPop: (bool: boolean) => void
  setSelectedMode: (type: IDocumentType) => void
  setSelectedPriceMode: (value: IPriceMode) => void
  setComment: (value: string) => void
  sendOrder: () => Promise<void>
  calculateProductByQuantityAndPackage: (product: ICart) => string | number
  priceBeforeTax: () => number
  calucalteDiscountTotal: () => number
  getTotalDiscountPrecet: () => number
  calculatePriceAfterDiscount: () => number
  calculateTax: () => number
  calculateFinalPrice: () => number
}

export const useCart = create<useCartState>((set, get) => ({
  loading: false,
  cart: [],

  setCart: (data: ICart[]) => {
    set({ cart: data })
    setProductLocalstorage(data)
  },
  getCartItem: (product): ICart | null => {
    const cart = get().cart
    const itemFind = cart.filter((item) => item.sku === product.sku)
    if (itemFind.length > 0) {
      return itemFind[0]
    } else {
      return null
    }
  },
  addToCart: (product: IProduct) => {
    const { cart } = get()
    const cartProduct = {
      sku: product.sku,
      quantity: 1,
      product: product,
      stock: product.stock,
      price: product.finalPrice,
      discount: product.discount,
      total: 1 * product.finalPrice,
    }

    set({ cart: [...cart, cartProduct] })
    setProductLocalstorage([...cart, cartProduct])
  },
  increaseCart: (sku) => {
    const cart = get().cart
    const itemIndex = cart.findIndex((item) => item.sku === sku)
    if (itemIndex !== -1) {
      cart[itemIndex].quantity += 1
      cart[itemIndex].total = cart[itemIndex].quantity * cart[itemIndex].price
    } else {
      console.error('Item not found in cart')
    }
    set({ cart })
    setProductLocalstorage(cart)
  },
  decreaseCart: (sku) => {
    const cart = get().cart
    const itemIndex = cart.findIndex((item) => item.sku === sku)
    if (itemIndex !== -1) {
      cart[itemIndex].quantity -= 1
      cart[itemIndex].total = cart[itemIndex].quantity * cart[itemIndex].price
    } else {
      console.error('Item not found in cart')
    }
    set({ cart })
    setProductLocalstorage(cart)
  },
  deleteFromCart: (sku) => {
    const cart = get().cart
    const filtered = cart.filter((item) => item.sku !== sku)
    set({ cart: filtered })
    setProductLocalstorage(filtered)
  },
  changeQuantity: (sku, quantity) => {
    const cart = get().cart
    const itemIndex = cart.findIndex((item) => item.sku === sku)
    if (itemIndex !== -1) {
      cart[itemIndex].quantity = +quantity
      cart[itemIndex].total = +quantity * cart[itemIndex].price
    } else {
      console.error('Item not found in cart')
    }
    set({ cart })
    setProductLocalstorage(cart)
  },
  avoidNullInCart: (sku) => {
    const cart = get().cart
    const itemIndex = cart.filter((item) => item.sku === sku)
    if (itemIndex[0].quantity == 0) {
      get().deleteFromCart(itemIndex[0].sku)
    }
  },

  selectedMode: 'order', // 1 - order | 2 - Request | 3 - Return
  selectedPriceMode: 'updatedPrice',
  setSelectedPriceMode: (value: IPriceMode) =>
    set({ selectedPriceMode: value }),
  setSelectedMode: (type: IDocumentType) => set({ selectedMode: type }),
  CartTitle: () => {
    let totalTitle = 'סיכום'
    if (get().selectedMode == 'order') {
      totalTitle += ' ' + 'הזמנה'
    } else if (get().selectedMode == 'request') {
      totalTitle += ' ' + 'ה.מחיר'
    } else if (get().selectedMode == 'return') {
      totalTitle += ' ' + 'החזרה'
    }
    totalTitle += ' | ' + getClientName()
    console.log('totalTitle', totalTitle)
    return totalTitle
  },
  priceBefore: 0,
  deliveryPrice: 250,
  deliveryDate: '2023-11-21', //TODO
  discount: 7,
  Maam: 17,
  totalBasket: 0,
  sendNoApproval: false,
  setSendNoApproval: (bool) => ({ sendNoApproval: bool }),
  specialSettingsPop: false,
  setSpecialSettingsPop: (bool) => ({ specialSettingsPop: bool }),
  comment: '',
  setComment: (value) => set({ comment: value }),
  b2bPickupDiscount: 0,

  // ========== MAIN FUNCTIONS ==========

  sendOrder: async () => {
    try {
      set({ loading: true })
      const response = await CartServices.CreateOrder(
        get().comment,
        getClientExtId(),
        get().calculateFinalPrice(),
        getAgentExtId() ? true : false,
        false,
        get().discount,
        get().selectedMode,
        get().deliveryPrice,
        get().deliveryDate,
        get().cart
      )
      if (response?.orderNumber) {
        onSuccessAlert(
          'הזמנה בוצה בהצלחה!',
          `מספר הזמנה ${response?.orderNumber}`
        )
        set({ cart: [] })
        setProductLocalstorage([])
      } else {
        onErrorAlert('הזמנה לא בוצעה', response['hydra:description'])
      }
    } catch (e) {
      console.log('error', e)
    } finally {
      set({ loading: false })
    }
  },

  // ========== ALL CALCULATIONS ==========

  calculateProductByQuantityAndPackage: (cart: ICart) => {
    if (cart?.sku) {
      return (
        parseFloat(cart.product.finalPrice) *
        cart.quantity *
        cart.product.packQuantity
      ).toFixed(1)
    } else {
      return 0
    }
  },

  priceBeforeTax: () => {
    const priceBefore = get().cart.reduce((accumulator, item) => {
      const itemPrice = item.price * item.quantity
      return accumulator + itemPrice
    }, 0)

    return priceBefore
  },

  calucalteDiscountTotal: () => {
    const priceBefore = get().priceBeforeTax()
    let discount = getUserFromStorage().discount
      ? getUserFromStorage().discount
      : 0
    let first = priceBefore * discount
    // if(CART_CONFIG.ADD_DISCOUNT_AFTER_PRICE.ENABLED){
    // 	if(priceBefore >= CART_CONFIG.ADD_DISCOUNT_AFTER_PRICE.PRICE_MAX) {
    // 		let newPrecent = discount + CART_CONFIG.ADD_DISCOUNT_AFTER_PRICE.PRECENT
    // 		first = priceBefore * newPrecent
    // 	}
    // }
    let second = first / 100
    return second
  },

  getTotalDiscountPrecet: () => {
    const priceBefore = get().priceBeforeTax()
    let discount = getUserFromStorage().discount
      ? getUserFromStorage().discount
      : 0
    // if(CART_CONFIG.ADD_DISCOUNT_AFTER_PRICE.ENABLED){
    // 	if(priceBefore >= CART_CONFIG.ADD_DISCOUNT_AFTER_PRICE.PRICE_MAX) {
    // 		discount = discount + CART_CONFIG.ADD_DISCOUNT_AFTER_PRICE.PRECENT
    // 	}
    // }
    return discount
  },

  calculatePriceAfterDiscount: () => {
    const priceBefore = get().priceBeforeTax()
    const discountPrice = get().calucalteDiscountTotal()

    return priceBefore - discountPrice
  },

  calculateTax: () => {
    return (get().calculatePriceAfterDiscount() * get().Maam) / 100
  },

  calculateFinalPrice: () => {
    return (
      get().calculatePriceAfterDiscount() +
      get().calculateTax() +
      get().deliveryPrice
    )
  },
}))
