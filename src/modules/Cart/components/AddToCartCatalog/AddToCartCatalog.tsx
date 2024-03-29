import React, { FC } from 'react'
import { useCart } from '../../store/cart.store'
import { useModals } from '../../../Modals/provider/ModalProvider'

interface AddToCartCatalogProps {
  item: IProduct
}

const AddToCartCatalog: FC<AddToCartCatalogProps> = ({ item }) => {
  const {
    cart,
    addToCart,
    increaseCart,
    decreaseCart,
    deleteFromCart,
    changeQuantity,
    avoidNullInCart,
  } = useCart()
  const { openStockNotify, openAddToCartTotify } = useModals()
  const find = cart?.filter((itemCart) => itemCart?.sku === item?.sku)
  const Quantity = find[0]?.quantity
  const isInCart = find[0]?.sku ? true : false
  //   const selectInput = (id) =>{
  //       setTimeout(() => {
  //           $("#input_"+id).select();
  //       }, 300);
  //   }

  const addToCartFunc = () => {
    if (item?.stock >= item.packQuantity) {
      addToCart(item)
      openAddToCartTotify(true)
    } else {
      openStockNotify(true)
    }
  }

  const increaseCartFunc = () => {
    if (item?.stock > Quantity) {
      increaseCart(item.sku)
    } else {
      openStockNotify(true)
    }
  }

  const onChangeQuantityFunc = (value: number) => {
    if (item?.stock >= value * item.packQuantity) {
      changeQuantity(item.sku, value)
    } else {
      openStockNotify(true)
    }
  }

  return (
    <div className="product-page barcode-pop">
      <div className="wrapp flex-container">
        {isInCart ? (
          <>
            <div className="col-lg-12 flex-container add-to-cont-after">
              <div
                className="col-lg-4 fx-btn MyCenetred"
                onClick={() => increaseCartFunc()}
              >
                <span className="material-symbols-outlined">add</span>
              </div>
              <div className="col-lg-4 input-cont">
                <input
                  id={'input_' + item.sku}
                  type="number"
                  value={Quantity}
                  onChange={(e) =>
                    onChangeQuantityFunc(parseInt(e.target.value))
                  }
                  onBlur={() => avoidNullInCart(item.sku)}
                  // onClick={() => selectInput(find)}
                />
              </div>
              <div
                className="col-lg-4 fx-btn MyCenetred"
                onClick={
                  isInCart && Quantity > 1
                    ? () => decreaseCart(item.sku)
                    : () => deleteFromCart(item.sku)
                }
              >
                <span className="material-symbols-outlined">remove</span>
              </div>
            </div>
          </>
        ) : (
          <div
            className="col-lg-12 flex-container add-to-cont-before"
            onClick={isInCart ? undefined : () => addToCartFunc()}
          >
            <div className="col-lg-12">
              <p>{'הוספה לסל'}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AddToCartCatalog
