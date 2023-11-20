import React, { FC } from 'react'
import ModalWrapper from '../components/ModalWrapper/ModalWrapper'
import { useDocuments } from '../../Documents/store/DocumentsStore'
import Loader from '../../../shared/Loader'
import { useCart } from '../../Cart/store/cart.store'
import ClientsSearch from '../../../shared/ClientsSearch'

type RestoreCartModalProps = {
  active: boolean
  setActive: (bool: boolean) => void
}

const RestoreCartModal: FC<RestoreCartModalProps> = ({ active, setActive }) => {
  const { handleRestoreCartFunction, loading } = useDocuments()
  const {
    setSelectedMode,
    selectedMode,
    selectedPriceMode,
    setSelectedPriceMode,
  } = useCart()
  const handleChooseClient = (user: IUser) => {}
  return (
    <ModalWrapper active={active} setActive={setActive} height={60} width={20}>
      <div className="tablePopUp docs findUser">
        {loading && <Loader />}
        <div className="pop-details">
          <div
            className="for-calendar flex-container card"
            style={{ top: '45px' }}
          >
            <div className="golbal-header">
              <h3 className="mainTitle">{'הזרמת מסמך לסל קניות'}</h3>
            </div>
          </div>
          <div className="prod-info-cont">
            <>
              <div className="doc-type">
                <h4>סוג מסמך</h4>
                <div className="col-lg-4 type-cont">
                  <p
                    className={
                      selectedMode === 'order' ? 'active c-title' : 'c-title'
                    }
                    onClick={() => setSelectedMode('order')}
                  >
                    {'הזמנה'}
                  </p>
                </div>
                <div className="col-lg-4 type-cont">
                  <p
                    className={
                      selectedMode == 'request' ? 'active c-title' : 'c-title'
                    }
                    onClick={() => setSelectedMode('request')}
                  >
                    {'ה.מחיר'}
                  </p>
                </div>
                <div className="col-lg-4 type-cont">
                  <p
                    className={
                      selectedMode == 'return' ? 'active c-title' : 'c-title'
                    }
                    onClick={() => setSelectedMode('return')}
                  >
                    {'החזרה'}
                  </p>
                </div>
              </div>
              <div className="price-type">
                <h4>תמחור מוצרים</h4>
                <div className="col-lg-6 type-cont">
                  <p
                    className={
                      selectedPriceMode === 'updatedPrice'
                        ? 'active c-title'
                        : 'c-title'
                    }
                    onClick={() => setSelectedPriceMode('updatedPrice')}
                  >
                    {'חשב מחירים'}
                  </p>
                </div>
                <div className="col-lg-6 type-cont">
                  <p
                    className={
                      selectedPriceMode === 'selfPrice'
                        ? 'active c-title'
                        : 'c-title'
                    }
                    onClick={() => setSelectedPriceMode('selfPrice')}
                  >
                    {'העתק ממסמך'}
                  </p>
                </div>
              </div>
            </>
            <h4>לקוח</h4>
            <ClientsSearch onChooseClient={handleChooseClient} />
          </div>
        </div>
        <div className="MyButton">
          <button onClick={() => handleRestoreCartFunction()}>אישור</button>
        </div>
      </div>
    </ModalWrapper>
  )
}

export default RestoreCartModal
