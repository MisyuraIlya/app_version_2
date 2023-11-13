import { create } from 'zustand'
import { agentService } from '../services/agent.service'
import { HydraHandler } from '../../../helpers/hydraHandler'
import { removeClientStorage, setClientStorage } from '../helpers/localstorage'

interface AgentProfileStoreState {
  loading: boolean
  agentList: IUser[]
  agentPremormence: IPerformanceInfo | null
  objectives: IObjective[]
  objectivesToday: ITodayObjectives | null
  taskToday: IAgentTask[]
  choosedYear: string
  handleTask: (isDone: boolean) => void
  setChoosetYear: (value: string | undefined) => void
  monthAgentSales: IMonthAgenthSale[]

  hydraPagination: hydraPagination
  targets:IAgentTaget[]
  visits:IAgnetVisit[]
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

    choosedYear: '',
    setChoosetYear: (value: string | undefined) =>
      set({ choosedYear: value ?? '' }),

    monthAgentSales: [],

    targets:[],
    visits:[],

    searchValue:'',
    setSearchValue: (value: string) => set({searchValue:value}),


    hydraPagination: {
      totalPages: '1',
      page: '1',
      lastPage: '1',
      nextPage: '1',
      previous: '1',
    },
  })
)
