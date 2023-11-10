import React, { FC } from 'react'
import { useCart } from '../../store/cart.store'
import { useModals } from '../../../Modals/provider/ModalProvider'
import { useSelectedProduct } from '../../../Modals/store/selecterdProduct.store'

interface AddToCartProps {
  item: IProduct
}

const AddToCart: FC<AddToCartProps> = ({ item }) => {
  const {
    cart,
    addToCart,
    increaseCart,
    decreaseCart,
    deleteFromCart,
    changeQuantity,
    avoidNullInCart,
  } = useCart()
  const { selectedProd } = useSelectedProduct()
  const { openStockNotify, openAddToCartTotify } = useModals()
  const find = cart?.filter((itemCart) => itemCart?.sku === item?.sku)
  const Quantity = find[0]?.quantity
  const isInCart = find[0]?.sku ? true : false

  // const selectInput = (id) =>{
  //     setTimeout(() => {
  //         $("#input_"+id).select();
  //     }, 300);
  // }

  const addToCartFunc = () => {
    if (item.stock >= item.packQuantity) {
      addToCart(item)
      openAddToCartTotify(true)
    } else {
      openStockNotify(true)
    }
  }

  const increaseCartFunc = () => {
    if (item.stock > Quantity) {
      increaseCart(item.sku)
    } else {
      openStockNotify(true)
    }
  }

  const onChangeQuantityFunc = (value: number) => {
    if (item.stock >= value * item.packQuantity) {
      changeQuantity(item.sku, value)
    } else {
      openStockNotify(true)
    }
  }
  return (
    <>
      {item?.stock !== 0 ? (
        <div className="product-page barcode-pop">
          <div
            className="wrapp flex-container"
            onClick={isInCart ? undefined : () => addToCartFunc()}
          >
            <div
              className="col-lg-4 fx-btn MyCenetred"
              onClick={() => increaseCartFunc()}
            >
              <span
                className="material-symbols-outlined"
                style={{ color: 'white' }}
              >
                add
              </span>
            </div>
            {isInCart ? (
              <>
                <div className="col-lg-4">
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
                  <span
                    className="material-symbols-outlined"
                    style={{ color: 'white' }}
                  >
                    remove
                  </span>
                </div>
              </>
            ) : (
              <>
                {item?.stock !== 0 ? (
                  <div className="col-lg-8">
                    <p>{'הוספה לסל'}</p>
                  </div>
                ) : (
                  <div className="">
                    <span className="material-symbols-outlined">info</span>
                    <p className="red">{'אזל המלאי'}</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      ) : (
        <div
          className=""
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <span className="material-symbols-outlined">info</span>
          <p
            className="red"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            {'אזל המלאי'}
          </p>
        </div>
      )}
    </>
  )
}

export default AddToCart
