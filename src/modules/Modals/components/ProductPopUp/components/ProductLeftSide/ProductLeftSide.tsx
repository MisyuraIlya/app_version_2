import React from 'react'
import WareHouseComponent from './components/WareHouseComponent'
import ProductAttributes from './components/ProductAttributes'
import ProductMainInfo from './components/ProductMainInfo'
import ProductHistoryPurche from './components/ProductHistoryPurche'
import ProductMainInfoTwo from './components/ProductMainInfoTwo'
import ProductAddToCart from './components/ProductAddToCart'
import SubProducts from './components/SubProducts'
import { useSelectedProduct } from '../../../../store/selecterdProduct.store'
const ProductLeftSide = () => {
  const { loading } = useSelectedProduct()
  return (
    <div className="product-details">
      <div className="share"></div>
      <div className="name">
        <ProductMainInfo />
        <ProductAttributes />
        <WareHouseComponent />
        <div className="devider"></div>
        <ProductHistoryPurche />
        <div className="devider"></div>
        <ProductMainInfoTwo />
      </div>

      <ProductAddToCart />
    </div>
  )
}

export default ProductLeftSide
