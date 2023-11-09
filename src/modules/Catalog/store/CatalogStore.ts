import { create } from 'zustand'
import { CatalogServices } from '../services/catalog.service'
import { getClientExtId } from '../../Auth/helpers/auth.helper'
import { HydraHandler } from '../../../helpers/hydraHandler'

interface useCatalogState {
  loading: boolean
  lvl1id: string
  lvl2id: string
  lvl3id: string
  searchParams: string
  setSearchParams: (value: string) => void
  setCatalogParameters: (
    lvl1: string,
    lvl2: string,
    lvl3: string,
    searchParams: string
  ) => void
  activeProdsPerPage: boolean
  setActiveProdsPerPage: (value: boolean) => void
  activeSortPerPage: boolean
  setActiveSortPerPage: (value: boolean) => void
  listView: boolean
  setListView: (value: boolean) => void
  urlSearch: string
  setUrlSearch: (urlSearch: string) => void
  action: string
  searchParam: string
  setSearchParam: (value: string) => void
  categoriesLvl1: ICategory[]
  categoriesLvl2: ICategory[]
  categoriesLvl3: ICategory[]
  filters: IProduct[]
  products: IProduct[]

  // setChoosedFilter:(filterItem: string) => void
  getCatalog: () => void

  toShow: string
  totalItems: string
  hydraPagination: hydraPagination

  goToPage: (updatedUrl: string) => void
  prodsPerPage: string
  setProdsPerPage: (updatedUrl: string, number: string) => void

  attributes: IAttributeMain[]
  getAttributes: (searchValue: string) => void
  sortProdSetting: string
  setSortProdSetting: (value: string) => void
}

export const useCatalog = create<useCatalogState>((set, get) => ({
  // STATES
  loading: false,
  lvl1id: '1',
  lvl2id: '0',
  lvl3id: '0',
  searchParams: '',
  setSearchParams: (value: string) => set({ searchParams: value }),
  setCatalogParameters: (
    lvl1: string = '0',
    lvl2: string = '0',
    lvl3: string = '0',
    searchParams: string
  ) => {
    set({
      lvl1id: lvl1,
      lvl2id: lvl2,
      lvl3id: lvl3,
      searchParams,
    })
  },
  activeProdsPerPage: false,
  setActiveProdsPerPage: (value: boolean) => set({ activeProdsPerPage: value }),
  activeSortPerPage: false,
  setActiveSortPerPage: (value: boolean) => set({ activeSortPerPage: value }),
  listView: false,
  setListView: (value: boolean) => set({ listView: value }),

  urlSearch: '',
  setUrlSearch: (value: string) => set({ urlSearch: value }),
  action: '',
  searchParam: '',
  setSearchParam: (value: string) => set({ searchParam: value }),
  categoriesLvl1: [],
  categoriesLvl2: [],
  categoriesLvl3: [],
  filters: [],
  products: [],

  // setChoosedFilter: (filterItem: string) => {
  //     const arr = get().filters.map((item) => {
  //         item.Values.map((subItem) => {
  //             if(filterItem.Title == subItem.Title) {
  //                 subItem.Selected = !subItem.Selected
  //             }
  //         })
  //         return item
  //     })
  //     set({filters: arr})
  // },
  getCatalog: async () => {
    set({ loading: true })
    try {
      const response = await CatalogServices.GetCatalog(
        get().lvl1id,
        get().lvl2id,
        get().lvl3id,
        get().searchParams
      )
      const products = response['hydra:member']
      const totalItems = response['hydra:totalItems']
      set({ totalItems: totalItems.toString(), products: products })
      const hydraPagination = HydraHandler.paginationHandler(response)
      set({ hydraPagination: hydraPagination })
    } catch (e) {
      console.log('[ERROR] error fetch catalog', e)
    } finally {
      set({ loading: false })
    }
  },
  // PAGINATION
  toShow: '24',
  totalItems: '0',
  hydraPagination: {
    totalPages: '1',
    page: '1',
    lastPage: '1',
    nextPage: '1',
    previous: '1',
  },
  goToPage: (updatedUrl: string) => set({ searchParams: updatedUrl }),
  prodsPerPage: '24',
  setProdsPerPage: (updatedUrl: string, number: string) =>
    set({
      prodsPerPage: number,
      activeProdsPerPage: false,
      searchParams: updatedUrl,
    }),

  // ATTRIBUTES
  attributes: [],
  getAttributes: async (searchValue: string) => {
    try {
      const response = await CatalogServices.GetAttributes(
        get().lvl1id,
        get().lvl2id,
        get().lvl3id,
        searchValue,
        getClientExtId()
      )
      set({ attributes: response['hydra:member'] })
    } catch (e) {
      console.log('[ERROR] fetch attributes', e)
    }
  },

  sortProdSetting: 'שם',
  setSortProdSetting: (value: string) => set({ sortProdSetting: value }),
}))
