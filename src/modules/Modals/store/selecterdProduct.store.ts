import { create } from 'zustand'
import { CatalogServices } from '../../Catalog/services/catalog.service'
import { getClientExtId } from '../../Auth/helpers/auth.helper'

interface useSelectedProductState {
  loading: boolean
  selectedProd: IProduct
  purchesHistoryData: PurchaseHistoryItem[]
  isFetchOnline: boolean
}

interface useSelectedProductMethods {
  changeDefaultImage: (imagePath: string) => void
  setSelectedProd: (element: IProduct) => void
  setPurchesHistory: (data: PurchaseHistoryItem[]) => void
  getPurchesHistory: () => Promise<void>
}

export const useSelectedProduct = create<
  useSelectedProductState & useSelectedProductMethods
>((set, get) => ({
  loading: false,
  selectedProd: {} as IProduct,
  changeDefaultImage: (imagePath: string) => {
    const prod = get().selectedProd
    prod.defaultImagePath = imagePath
    set({ selectedProd: prod })
  },
  setSelectedProd: (element: IProduct) => {
    set({ selectedProd: element })
  },
  purchesHistoryData: [],
  setPurchesHistory: (data: PurchaseHistoryItem[]) => {
    set({ purchesHistoryData: data })
  },
  getPurchesHistory: async () => {
    set({ loading: true })
    try {
      const data = await CatalogServices.GetPurchaseHistory(
        getClientExtId(),
        get().selectedProd?.sku
      )
      set({ purchesHistoryData: data['hydra:member'] })
    } catch (e) {
      console.log('[selectedProd', e)
    } finally {
      set({ loading: false })
    }
  },
  isFetchOnline: false,
}))
