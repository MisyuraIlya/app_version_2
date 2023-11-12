import { create } from 'zustand';


interface ScheduleCalendarState {
    loading: boolean
    weekFrom: string
    weekTo: string
    switchCalendarBackWeek: () => void
    switchCalendarForwardWeek: () => void
}

export const useMyScheduleCalendar = create<ScheduleCalendarState>((set, get) => ({
    loading: false,
    weekFrom: '',
    weekTo: '',
    switchCalendarBackWeek: () => {
        console.log('back')
    },
    switchCalendarForwardWeek: () => {
        console.log('forward')
    },
}));
