import { create } from 'zustand'
import { AdminProductService } from '../services/products.service'

interface useProductsEditStoreState {
  loading: boolean
  products: IProduct[]
  setProducts: (arr: IProduct[]) => void
  currentCategoryId: number
  getProducts: (lvl1: number, lvl2: number, lvl3: number) => Promise<void>
  selectedProduct: IProduct | null
  setSelectedProduct: (product: IProduct | null) => void
  deleteImageFunc: (imageId: number) => Promise<void>
  updateProduct: (product: IProduct) => Promise<void>
}

export const useProductsEditStore = create<useProductsEditStoreState>(
  (set, get) => ({
    loading: false,
    products: [],
    setProducts: (arr) => set({ products: arr }),
    currentCategoryId: 0,
    getProducts: async (lvl1, lvl2, lvl3) => {
      const response = await AdminProductService.GetProducts(lvl1, lvl2, lvl3)
      set({ products: response['hydra:member'] })
    },
    selectedProduct: null,
    setSelectedProduct: (product) => set({ selectedProduct: product }),
    deleteImageFunc: async (imageId) => {
      let newSelected = get().selectedProduct
      if (newSelected) {
        let newImages = newSelected?.imagePath.filter(
          (item) => item.id !== imageId
        )
        newSelected.imagePath = newImages
        set({ selectedProduct: newSelected })
      }
      await AdminProductService.deleteImage(imageId)
    },
    updateProduct: async (product) => {
      try {
        const res = await AdminProductService.updateProduct(product)
        set({ selectedProduct: res })
      } catch (e) {
        console.log('error', e)
      }
    },
  })
)
