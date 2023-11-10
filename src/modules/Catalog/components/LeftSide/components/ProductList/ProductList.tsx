import React from 'react'
import { useCatalog } from '../../../../store/CatalogStore'
// import useCart from '../../../../../Cart/store/CartStore';
import { useAuth } from '../../../../../Auth/store/useAuthStore'
import PriceBlock from './components/PriceBlock'
import BasicInfo from './components/BasicInfo'
import Tags from './components/Tags'
import { useSearchStore } from '../../../../store/SearchStore'
import { useParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useCart } from '../../../../../Cart/store/cart.store'

const ProductList = () => {
  const { products, toShow, listView, loading } = useCatalog()
  const { documentType } = useParams()
  const { productsFilter } = useSearchStore()
  const { getCartItem } = useCart()
  return (
    <div
      className={
        !listView
          ? 'category-wrapper'
          : 'category-wrapper category-wrapper-list'
      }
    >
      <div id="navFix" className={'flex-container products-view'}>
        {products?.length === 0 && (
          <h1 className="hide-on-desctop no-product">לא קיימים מוצרים</h1>
        )}
        {(productsFilter?.length > 0 && documentType === 'search'
          ? productsFilter
          : products
        )?.map((product, index) => {
          if (index <= +toShow) {
            return (
              <div
                key={index}
                className={
                  product.isPublished
                    ? 'col-lg-3 wrapper-cont unpublished main-product-wrapper-cont'
                    : 'wrapper-cont main-product-wrapper-cont col-lg-3'
                }
              >
                <div className={'wrapper main-product-wrapper'}>
                  <Tags product={product} />
                  <BasicInfo product={product} />

                  {loading ? (
                    <Skeleton style={{ height: '120px' }} />
                  ) : (
                    <>
                      <PriceBlock product={product} />
                    </>
                  )}
                </div>
              </div>
            )
          }
        })}
        {(productsFilter?.length > 0 && documentType === 'search'
          ? productsFilter
          : products
        )?.length == 0 && (
          <div
            style={{
              display: 'flex',
              justifyItems: 'center',
              alignItems: 'center',
            }}
          >
            <h3>לא נמצאו מוצרים</h3>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductList
