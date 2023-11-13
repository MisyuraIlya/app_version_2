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
  })
)
