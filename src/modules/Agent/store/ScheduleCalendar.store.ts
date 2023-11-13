import { create } from 'zustand'

interface ScheduleCalendarState {
  loading: boolean
  weekFrom: string
  weekTo: string
  ScheduleCalendarInfo: IScheduleCalendar[]
  daysOfWeek: DayOfWeek[]
  hoursOfDay: HourOfDay[]
  fetchAgentCalendar: () => void
  switchCalendarBackWeek: () => void
  switchCalendarForwardWeek: () => void
}

type DayOfWeek = 'ראשון' | 'שני' | 'שלישי' | 'רביעי' | 'חמישי' | 'שישי' | 'שבת'

export type HourOfDay =
  | '06:00'
  | '07:00'
  | '08:00'
  | '09:00'
  | '10:00'
  | '11:00'
  | '12:00'
  | '13:00'
  | '14:00'
  | '15:00'
  | '16:00'
  | '17:00'
  | '18:00'
  | '19:00'
  | '20:00'
  | '21:00'

export const useMyScheduleCalendar = create<ScheduleCalendarState>(
  (set, get) => ({
    loading: false,
    weekFrom: '',
    weekTo: '',
    switchCalendarBackWeek: () => {
      console.log('back')
    },
    switchCalendarForwardWeek: () => {
      console.log('forward')
    },

    daysOfWeek: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
    hoursOfDay: [
      '06:00',
      '07:00',
      '08:00',
      '09:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
    ],
    ScheduleCalendarInfo: [],

    fetchAgentCalendar: () => {
      get().weekFrom
      get().weekTo
    },
  })
)
