import { create } from 'zustand'
import { AdminClinetsService } from '../services/clients.service'
import { HydraHandler } from '../../../helpers/hydraHandler'
import { onErrorAlert, onSuccessAlert } from '../../../shared/MySweetAlert'

interface useClientStoreState {
  loading: boolean
  clients: IUser[]
  selectedClient: IUser | null
  totalClients: number
  hydraPagination: hydraPagination
  search: string
}

interface useClientStoreActions {
  setClients: (arr: IUser[]) => void
  setSelectedClient: (client: IUser | null) => void
  getClients: (all?: boolean) => Promise<void>
  updateClient: (user: IUser) => Promise<void>
  updateAuth: (username: string, password: string) => Promise<void>
  setSearch: (value: string) => void
  setPage: (page: string) => void
}

export const useClientStore = create<
  useClientStoreState & useClientStoreActions
>((set, get) => ({
  loading: false,
  clients: [],
  search: '',
  setSearch: (value: string) => set({ search: value }),
  setClients: (arr) => set({ clients: arr }),
  selectedClient: null,
  setSelectedClient: (client) => set({ selectedClient: client }),
  getClients: async (all = false) => {
    try {
      set({ loading: true })
      const response = await AdminClinetsService.getClients(
        get().hydraPagination.page,
        all,
        get().search
      )
      set({
        clients: response['hydra:member'],
        totalClients: response['hydra:totalItems'],
      })
      const paginationHydra = HydraHandler.paginationHandler(response)
      set({ hydraPagination: paginationHydra })
    } catch (e) {
      console.log('[error]', e)
    } finally {
      set({ loading: false })
    }
  },
  updateClient: async (user) => {
    set({ loading: true })
    try {
      const response = await AdminClinetsService.updateClient(user)
      set({ selectedClient: response })
    } catch (e) {
      console.log('[error]', e)
    } finally {
      set({ loading: false })
    }
  },
  updateAuth: async (username, password) => {
    set({ loading: true })
    try {
      const response = await AdminClinetsService.updateAuth(
        get().selectedClient?.extId || '',
        username,
        password
      )
      if (response.status === 'success') {
        onSuccessAlert('לקוח נוצר בהצלחה', '')
      } else {
        onErrorAlert('שגיאה ביצירת לקוח', response.message)
      }
    } catch (e) {
      console.log('[error]', e)
    } finally {
      set({ loading: false })
      await get().getClients()
    }
  },
  totalClients: 0,
  //   page: 1,
  setPage: (page: string) => {
    set((state) => ({
      hydraPagination: {
        ...state.hydraPagination,
        page: page,
      },
    }))
  },
  hydraPagination: {
    totalPages: '1',
    page: '1',
    lastPage: '1',
    nextPage: '1',
    previous: '1',
  },
}))
