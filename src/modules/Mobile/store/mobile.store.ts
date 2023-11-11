import { create } from 'zustand'

interface useMobileState {
  loading: boolean
  isIPhone: boolean
  isAndroid: boolean
  isPwa: boolean
}

export const useMobile = create<useMobileState>((set, get) => ({
  // STATES
  loading: false,
  isIPhone: /iPhone/i.test(navigator.userAgent),
  isAndroid: /Android/i.test(navigator.userAgent),
  isPwa: window.matchMedia('(display-mode: standalone)').matches,
}))
