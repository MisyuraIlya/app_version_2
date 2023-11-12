// Global
import React, {
  FC,
  createContext,
  useState,
  useContext,
  ReactNode,
} from 'react'
import AuthPopUp from '../components/AuthPopUp/AuthPopUp'
import AddToCartNotify from '../components/AddToCartNotify/AddToCartNotify'
import StockNotify from '../components/StockNotify/StockNotify'
import OrderSettings from '../components/OrderSettings/OrderSettings'
import ProductPopUp from '../components/ProductPopUp/ProductPopUp'
import TablePopUp from '../components/TablePopUp/TablePopUp'
import PayPopUp from '../components/PayPopUp/PayPopUp'
import ClientRightSideBar from '../adminComponents/ClientRightSideBar/ClientRightSideBar'
import LeftSideBar from '../components/LeftSideBar/LeftSideBar'
import Gallery from '../adminComponents/Galerry/Gallery'
import ClientsInfo from '../adminComponents/ClientsInfo/ClientsInfo'
import ClientOptions from '../adminComponents/ClientOptions/ClientOptions'
import AdminRightSideBar from '../adminComponents/AdminRightSideBar/AdminRightSideBar'
import { useSelectedProduct } from '../store/selecterdProduct.store'
// Defines
interface ModalContextType {
  openAuthModal: boolean
  setOpenAuthModal: (bool: boolean) => void
  stockNotify: boolean
  addToCartNotify: boolean
  openStockNotify: (bool: boolean) => void
  openAddToCartTotify: (bool: boolean) => void
  openCartSettings: boolean
  setOpenCartSettings: (bool: boolean) => void
  selectedProduct: boolean
  setSelectedProduct: (bool: boolean) => void
  selectProduct: (product: IProduct) => void
  setActiveTablePopUp: (bool: boolean) => void
  openPopUpPay: boolean
  setOpenPopUpPay: (bool: boolean) => void
  openMobileSideBar: boolean
  setOpenMobileSideBar: (bool: boolean) => void
  openSideBar: boolean
  setOpenSideBar: (bool: boolean) => void
  adminRightSideBar: boolean
  setAdminRightSideBar: (bool: boolean) => void
  gallery: boolean
  setGallery: (bool: boolean) => void
  clientsInfo: boolean
  setClientsInfo: (bool: boolean) => void
  clientOptions: boolean
  setClientOptions: (bool: boolean) => void
  clientRightSideBar: boolean
  setClientRightSideBar: (bool: boolean) => void
  leftSideBar: boolean
  setLeftSideBar: (bool: boolean) => void
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
  const { setSelectedProd, loading } = useSelectedProduct()
  const [stockNotify, setStockNotify] = useState(false)
  const [addToCartNotify, setAddToCartNotify] = useState(false)
  const [openCartSettings, setOpenCartSettings] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(false)
  const [activeTablePopUp, setActiveTablePopUp] = useState(false)
  const [openPopUpPay, setOpenPopUpPay] = useState(false)
  const [openMobileSideBar, setOpenMobileSideBar] = useState(false)
  const [openSideBar, setOpenSideBar] = useState(false)
  const [adminRightSideBar, setAdminRightSideBar] = useState(false)
  const [clientRightSideBar, setClientRightSideBar] = useState(false)
  const [leftSideBar, setLeftSideBar] = useState(false)

  //ADMINS
  const [gallery, setGallery] = useState(false)
  const [clientsInfo, setClientsInfo] = useState(false)
  const [clientOptions, setClientOptions] = useState(false)

  const openStockNotify = () => {
    setStockNotify(true)
    setTimeout(() => {
      setStockNotify(false)
    }, 3000)
  }

  const openAddToCartTotify = () => {
    setAddToCartNotify(true)
    setTimeout(() => {
      setAddToCartNotify(false)
    }, 3000)
  }

  const selectProduct = (product: IProduct) => {
    setSelectedProd(product)
    setSelectedProduct(true)
  }

  const onCloseSelectedProduct = (bool: boolean) => {
    setSelectedProduct(bool)
    if (!bool) {
      // clearSubProducts()
    }
  }

  const value = {
    stockNotify,
    addToCartNotify,
    openStockNotify,
    openAddToCartTotify,
    openCartSettings,
    setOpenCartSettings,
    selectedProduct,
    setSelectedProduct,
    selectProduct,
    setActiveTablePopUp,
    openPopUpPay,
    setOpenPopUpPay,
    openMobileSideBar,
    setOpenMobileSideBar,
    openSideBar,
    setOpenSideBar,
    openAuthModal,
    setOpenAuthModal,
    adminRightSideBar,
    setAdminRightSideBar,
    gallery,
    setGallery,
    clientsInfo,
    setClientsInfo,
    clientOptions,
    setClientOptions,
    clientRightSideBar,
    setClientRightSideBar,
    leftSideBar,
    setLeftSideBar,
  }

  return (
    <ModalContext.Provider value={value}>
      <div style={{ position: 'fixed', width: '100%', zIndex: 99 }}>
        <StockNotify />
        <AddToCartNotify />
      </div>

      <OrderSettings
        active={openCartSettings}
        setActive={setOpenCartSettings}
      />
      <ProductPopUp
        active={selectedProduct}
        setActive={onCloseSelectedProduct}
      />
      {openAuthModal && (
        <AuthPopUp active={openAuthModal} setActive={setOpenAuthModal} />
      )}
      {/* <MobileSideBar active={openMobileSideBar} setActive={setOpenMobileSideBar}/> */}
      {/* {!loading && */}
      <TablePopUp active={activeTablePopUp} setActive={setActiveTablePopUp} />
      {/* } */}
      {openPopUpPay && (
        <PayPopUp active={openPopUpPay} setActive={setOpenPopUpPay} />
      )}

      {/* SIDEBARDS */}
      <AdminRightSideBar
        active={adminRightSideBar}
        setActive={setAdminRightSideBar}
      />
      <ClientRightSideBar
        active={clientRightSideBar}
        setActive={setClientRightSideBar}
      />

      <LeftSideBar active={leftSideBar} setActive={setLeftSideBar} />
      {/* ADMINS */}
      <Gallery active={gallery} setActive={setGallery} />
      <ClientsInfo active={clientsInfo} setActive={setClientsInfo} />
      <ClientOptions active={clientOptions} setActive={setClientOptions} />
      {children}
    </ModalContext.Provider>
  )
}

export { useModals, ModalsProvider }
