interface IAgentTaget {
  id: number
  agentId: string
  month: string
  year: string
  currentValue: number
  targetValue: number
  completed: boolean
  isPublished: boolean
}

interface IPerformanceInfo {
  totalOrderSum: number
  dailySalesSum: number
  dailySalesQuantity: number
  minDate: string
  maxDate: string
  ordersQuantity: number
  monthsQuantityByOrderDates: number
  monthlyAverage: number
  clientsAssigned: number
  monthlySalesSum: number
  targetPercentage: number
}
type typeTask = 'visit' | 'objective'

interface IAgentTask {
  agentId: string
  uniqueId: number
  typeTask: typeTask
  dayOfWeek: string
  date: string
  endHour: string
  startHour: string
  typeId: string
  type: string
  mission: string
  visit: string
  idDocument: number
  tableName: string
  description: string
  completedDate: string | null
  completed: boolean
}

interface IObjective {
  id: number
  hourFrom: number
  hourTo: number
  compleated: boolean
  compleatedDate: string
  description: string
  agent: IUser
}

interface ITodayObjectives {
  visitsTotal: number
  visitsCompleted: number
  objectiveTotal: number
  objectiveCompleted: number
}

interface IMonthAgenthSale {
  total: number
  month: number
  year: number
}

interface IScheduleCalendar {
  agentId: number
  uniqueId: number
  dayOfWeek: string
  date: string
  endHour: string
  startHour: string
  typeId: number
  type: typeTask
  mission: string
  visit: string
  idDocument: number
  tableName: string
  description: string
  completedDate: string
  completed: boolean
  subTusk: IAgentTask[]
}
