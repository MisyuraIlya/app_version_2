import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CategoryEdit from './modules/Admin/pages/CategoryEdit'
import ProductsEdit from './modules/Admin/pages/ProductsEdit'
import Clients from './modules/Admin/pages/Clients'
import Orders from './modules/Admin/pages/Orders'
import OrderItemPage from './modules/Admin/pages/OrderItemPage'
import Home from './modules/Home/pages/Home'
import Catalog from './modules/Catalog/pages/Catalog'
import CatalogView from './modules/Catalog/pages/CatalogView'
import CartPage from './modules/Cart/pages/CartPage'
import ProfilePage from './modules/Auth/pages/ProfilePage'
import NotificationPage from './modules/Admin/pages/NotificationPage'
import DocumentsItemPage from './modules/Documents/pages/DocumentsItemPage'
import DocumentsPage from './modules/Documents/pages/DocumentsPage'
import HistoryItemPage from './modules/Documents/pages/HistoryItemPage'
import HistoryPage from './modules/Documents/pages/HistoryPage'
import KartessetPage from './modules/Documents/pages/KartessetPage'
import Header from './modules/Header/Header'

const RouterApp = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <Routes>
        <Route>
          {/* HOME */}
          <Route path="/" element={<Home />} />
          {/* CATALOG */}
          <Route
            path="/client/:documentType/:lvl1/:lvl2/:lvl3"
            element={<Catalog />}
          />
          <Route path="/CatalogView" element={<CatalogView />} />
          {/* CART */}
          <Route path="/CartPage" element={<CartPage />} />
          {/* AUTH */}
          <Route path="/ProfilePage" element={<ProfilePage />} />

          {/* DOCUMENTS */}
          <Route path="/DocumentsItemPage" element={<DocumentsItemPage />} />
          <Route path="/DocumentsPage" element={<DocumentsPage />} />
          <Route path="/HistoryItemPage" element={<HistoryItemPage />} />
          <Route path="/HistoryPage" element={<HistoryPage />} />
          <Route path="/KartessetPage" element={<KartessetPage />} />

          {/* ADMINS */}
          <Route path="/admiCategoryEditn1" element={<CategoryEdit />} />
          <Route path="/ProductsEdit" element={<ProductsEdit />} />
          <Route path="/Clients" element={<Clients />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/OrderItemPage" element={<OrderItemPage />} />
          <Route path="/NotificationPage" element={<NotificationPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default RouterApp
