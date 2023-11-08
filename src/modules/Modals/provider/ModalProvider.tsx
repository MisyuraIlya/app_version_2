// Global
import React, {
  FC,
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react'
import AuthPopUp from '../components/AuthPopUp/AuthPopUp'

// Defines
interface ModalContextType {
  openAuthModal: boolean
  setOpenAuthModal: (bool: boolean) => void
}
const ModalContext = createContext<ModalContextType | null>(null)

// React hook
const useModals = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('Can not run without "ModalContext Provider"')
  }
  return context
}

interface ModalsProviderProps {
  children: ReactNode
}
const ModalsProvider: FC<ModalsProviderProps> = ({ children }) => {
  const [openAuthModal, setOpenAuthModal] = useState(false)

  const value = {
    openAuthModal,
    setOpenAuthModal,
  }

  return (
    <ModalContext.Provider value={value}>
      {openAuthModal && (
        <AuthPopUp active={openAuthModal} setActive={setOpenAuthModal} />
      )}
      {children}
    </ModalContext.Provider>
  )
}

export { useModals, ModalsProvider }
