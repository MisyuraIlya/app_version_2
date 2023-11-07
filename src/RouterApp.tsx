import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CategoryEdit from './modules/Admin/pages/CategoryEdit'
import ProductsEdit from './modules/Admin/pages/ProductsEdit'
import Clients from './modules/Admin/pages/Clients'
import Orders from './modules/Admin/pages/Orders'
import OrderItemPage from './modules/Admin/pages/OrderItemPage'
import Home from './modules/Home/pages/Home'
const RouterApp = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/admin1" element={<CategoryEdit />} />
        <Route path="/admin2" element={<ProductsEdit />} />
        <Route path="/admin3" element={<Clients />} />
        <Route path="/admin4" element={<Orders />} />
        <Route path="/admin5" element={<OrderItemPage />} />
      </Route>
    </Routes>
  )
}

export default RouterApp
