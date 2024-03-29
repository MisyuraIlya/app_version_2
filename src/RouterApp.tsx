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
import DocumentsItemPage from './modules/Documents/pages/DocumentsItemPage'
import DocumentsPage from './modules/Documents/pages/DocumentsPage'
import HistoryItemPage from './modules/Documents/pages/HistoryItemPage'
import HistoryPage from './modules/Documents/pages/HistoryPage'
import KartessetPage from './modules/Documents/pages/KartessetPage'
import Header from './modules/Header/Header'
import NotificationPage from './modules/PushNotifications/pages/NotificationPage'
import AgentClinets from './modules/Agent/pages/AgentClinets'
import AgentDashboard from './modules/Agent/pages/AgentDashboard'
import Objectives from './modules/Agent/pages/Objectives'
import Target from './modules/Agent/pages/Target'
import Visits from './modules/Agent/pages/Visits'
import AgentsPage from './modules/Admin/pages/AgentsPage'

const RouterApp = () => {
  return (
    <>
      <Header />
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
          <Route path="/cart" element={<CartPage />} />
          {/* AUTH */}
          <Route path="/profile" element={<ProfilePage />} />

          {/* DOCUMENTS */}
          <Route path="/documentItemPage/:id" element={<DocumentsItemPage />} />
          <Route path="/documentPage" element={<DocumentsPage />} />
          <Route path="/historyItemPage/:id" element={<HistoryItemPage />} />
          <Route path="/historyPage" element={<HistoryPage />} />
          <Route path="/kartessetPage" element={<KartessetPage />} />
          {/* ======================== */}

          {/* ADMINS */}
          <Route
            path="/admin/category-edit/:lvl1/:lvl2/:lvl3"
            element={<CategoryEdit />}
          />
          <Route
            path="/admin/products-edit/:lvl1/:lvl2/:lvl3"
            element={<ProductsEdit />}
          />
          <Route path="/admin/clients" element={<Clients />} />
          <Route path="/admin/approveDoc" element={<Orders />} />
          <Route
            path="/admin/approveDocItems/:id"
            element={<OrderItemPage />}
          />
          <Route path="/admin/notification" element={<NotificationPage />} />
          <Route path="/admin/agents" element={<AgentsPage />} />
          {/* ======================== */}

          {/* AGENTS */}
          <Route path="/agentClients" element={<AgentClinets />} />
          <Route path="/agentDashboard/:id" element={<AgentDashboard />} />
          <Route path="/objectives/:id" element={<Objectives />} />
          <Route path="/target/:id" element={<Target />} />
          <Route path="/visits/:id" element={<Visits />} />
          {/* ======================== */}
        </Route>
      </Routes>
    </>
  )
}

export default RouterApp
