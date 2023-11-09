import { create } from 'zustand'
import { CatalogServices } from '../services/catalog.service'
import { getClientExtId } from '../../Auth/helpers/auth.helper'
import { HydraHandler } from '../../../helpers/hydraHandler'

interface useSearchStoreState {
  loading: boolean
  categoriesAll: ICategory[]
  categories: ICategory[]
  categoriesLvl1: ICategory[]
  categoriesLvl2: ICategory[]
  setCategories: (arr: ICategory[]) => void
  getCategories: () => void
  getAllCategories: () => void
}

export const useCategories = create<useSearchStoreState>((set, get) => ({
  // STATES
  loading: false,
  categoriesAll: [],
  categories: [],
  categoriesLvl1: [],
  categoriesLvl2: [],
  setCategories: (arr) => set({ categories: arr }),
  getCategories: async () => {
    try {
      set({ loading: true })
      const response = await CatalogServices.GetCategories(getClientExtId())
      set({
        categories: response['hydra:member'],
        categoriesLvl1: response['hydra:member'].filter(
          (item) => item.lvlNumber === 1
        ),
        categoriesLvl2: response['hydra:member'].filter(
          (item) => item.lvlNumber === 2
        ),
      })
    } catch (e) {
      console.log('[ERROR]', e)
    } finally {
      set({ loading: false })
    }
  },

  getAllCategories: async () => {
    try {
      set({ loading: true })
      const response = await CatalogServices.GetCategoriesAll()
      set({
        categoriesAll: response['hydra:member'],
      })
    } catch (e) {
      console.log('[ERROR]', e)
    } finally {
      set({ loading: false })
    }
  },
}))
