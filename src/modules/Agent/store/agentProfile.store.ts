import { create } from 'zustand'
import { agentService } from '../services/agent.service'
import { HydraHandler } from '../../../helpers/hydraHandler'
import { removeClientStorage, setClientStorage } from '../helpers/localstorage'
import { MONTH_HEBREW_1 } from '../helpers/arrayOfMonths'
import { agentProfileService } from '../services/agentProfile.service'
import {
  getAgentExtId,
  getUserFromStorage,
} from '../../Auth/helpers/auth.helper'
import moment from 'moment'

interface AgentProfileStoreState {
  loading: boolean
  agentList: IUser[]
  agentPremormence: IPerformanceInfo | null
  objectives: IAgentObjective[]
  objectivesToday: ITodayObjectives | null
  taskToday: IAgentTask[]
  choosedYear: string
  handleTask: (isDone: boolean) => void
  setChoosetYear: (value: string | undefined) => void
  monthAgentSales: IMonthAgenthSale[]

  hydraPagination: hydraPagination
  setPage: (page: string) => void

  //targets
  targets: IAgentTaget[]
  getTargets: () => void
  selectedTarget: IAgentTaget | null
  setSelectedTarget: (target: IAgentTaget | null) => void
  createTarget: (object: IAgentTaget) => void
  updateTarget: (object: IAgentTaget) => void
  //

  //visits
  selectedVisit: IAgentObjective | null
  setSelectedVisit: (visit: IAgentObjective | null) => void
  visits: IAgentObjective[]
  getVisits: () => void
  createVisit: (visit: IAgentObjective) => void
  updateVisit: (visit: IAgentObjective) => void
  //
  searchValue: string
  setSearchValue: (value: string) => void
}

export const useAgentProfileStore = create<AgentProfileStoreState>(
  (set, get) => ({
    loading: false,
    agentList: [],
    agentPremormence: null,
    objectives: [],
    objectivesToday: null,
    taskToday: [],

    handleTask: (isDone: boolean) => {},

    monthAgentSales: [],
    // =========== target ===========
    choosedYear: moment().year().toString(),
    setChoosetYear: (value: string | undefined) => {
      set({ choosedYear: value ?? '' })
      get().getTargets()
    },
    targets: [],
    selectedTarget: null,
    setSelectedTarget: (target: IAgentTaget | null) =>
      set({ selectedTarget: target }),
    getTargets: async () => {
      let res: IAgentTaget[] = MONTH_HEBREW_1.map((item) => {
        return {
          id: null,
          agent: getUserFromStorage(),
          month: item.name,
          year: get().choosedYear,
          currentValue: 0,
          targetValue: 0,
          isCompleted: false,
        }
      })
      try {
        set({ loading: true })
        const response = await agentProfileService.getAgentTargets(
          getAgentExtId(),
          get().choosedYear
        )
        res.map((item) => {
          response['hydra:member'].map((sub) => {
            if (item.month == sub.month) {
              item.id = sub.id
              item.currentValue = sub.currentValue
              item.targetValue = sub.targetValue
              item.year = sub.year
              item.isCompleted = sub.isCompleted
            }
          })
        })
        set({ targets: res })
      } catch (e) {
        console.log('[ERROR] fetch targets', e)
      } finally {
        set({ loading: false })
      }
    },

    createTarget: async (object: IAgentTaget) => {
      try {
        set({ loading: true })
        const response = await agentProfileService.createAgentTarget(object)
        get().getTargets()
      } catch (e) {
        console.log('[ERROR] fetch targets', e)
      } finally {
        set({ loading: false })
      }
    },

    updateTarget: async (object: IAgentTaget) => {
      try {
        set({ loading: true })
        const response = await agentProfileService.updateAgentTarget(object)
        get().getTargets()
      } catch (e) {
        console.log('[ERROR] fetch targets', e)
      } finally {
        set({ loading: false })
      }
    },
    //==========================

    // =========== vists ===========

    visits: [],
    selectedVisit: null,
    setSelectedVisit: (visit: IAgentObjective | null) =>
      set({ selectedVisit: visit }),
    getVisits: async () => {
      try {
        set({ loading: true })
        const response = await agentProfileService.getAgentObjective(
          get().hydraPagination.page,
          'visit'
        )
        const hydraHandler = HydraHandler.paginationHandler(response)
        set({ visits: response['hydra:member'], hydraPagination: hydraHandler })
      } catch (e) {
        console.log('[ERROR FETCH]', e)
      } finally {
        set({ loading: false })
      }
    },

    createVisit: async (visit: IAgentObjective) => {
      try {
        set({ loading: true })
        const response = await agentProfileService.createAgentObjective(visit)
        get().getVisits()
      } catch (e) {
        console.log('[ERROR] fetch targets', e)
      } finally {
        set({ loading: false })
      }
    },

    updateVisit: async (visit: IAgentObjective) => {
      try {
        set({ loading: true })
        const response = await agentProfileService.updateAgentObjective(visit)
        get().getVisits()
      } catch (e) {
        console.log('[ERROR] fetch targets', e)
      } finally {
        set({ loading: false })
      }
    },

    //========================
    searchValue: '',
    setSearchValue: (value: string) => set({ searchValue: value }),

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
  })
)
