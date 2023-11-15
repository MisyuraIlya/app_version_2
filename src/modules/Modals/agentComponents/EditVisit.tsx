import React, { FC, useState } from 'react'
import ModalWrapper from '../components/ModalWrapper/ModalWrapper'
import MyInput from '../../../shared/MyInput'
import Select from 'react-select'
import {
  HEBREW_DAYS,
  ReactSelectOptionsOfFullHour,
} from '../../Agent/helpers/arrayOfMonths'
import { useForm } from 'react-hook-form'
import { useAgentProfileStore } from '../../Agent/store/agentProfile.store'

type EditVisitProps = {
  active: boolean
  setActive: (bool: boolean) => void
}

type EditEditForm = {
  week1: boolean
  week2: boolean
  week3: boolean
  week4: boolean
}

const EditVisit: FC<EditVisitProps> = ({ active, setActive }) => {
  const { selectedVisit } = useAgentProfileStore()
  const [objectWeekChoosed, setObjectWeekChoosed] = useState(
    selectedVisit?.choosedDay
  )
  const [objectFromHour, setObjectFromHour] = useState(selectedVisit?.hourFrom)
  const [objectToHour, setObjectToHour] = useState(selectedVisit?.hourTo)

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<EditEditForm>()

  const handleClick = (data: EditEditForm) => {
    console.log('data', data)
  }

  return (
    <>
      <ModalWrapper
        active={active}
        setActive={setActive}
        height={70}
        width={50}
      >
        <form className="flex-container" onSubmit={handleSubmit(handleClick)}>
          <div className="col-lg-12">
            <h3>עדכון ביקור</h3>
          </div>
          <div className="col-lg-12 ">
            <div className="myPadding">
              <div className="MyInput">
                <div className="flex-container myCenterAlign cardInput">
                  <div className="col-lg-10 input">
                    <input
                      type="text"
                      disabled
                      value={selectedVisit?.client.name}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="myPadding">
              <div className="myCenterAlign">
                <h4>שבוע</h4>
              </div>
              <div className="flex-container days-cont">
                <div className=" col-lg-3">
                  <div className="myCenterAlign">
                    <div>
                      <p className="myCenterAlign numCls">1</p>
                      <label className="switch">
                        <input type="checkbox" {...register('week1')} />
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-3">
                  <div className="myCenterAlign">
                    <div>
                      <p className="myCenterAlign numCls">2</p>
                      <label className="switch">
                        <input type="checkbox" {...register('week2')} />
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-3">
                  <div className="myCenterAlign">
                    <div>
                      <p className="myCenterAlign numCls">3</p>
                      <label className="switch">
                        <input type="checkbox" {...register('week3')} />
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-3">
                  <div className="myCenterAlign">
                    <div>
                      <p className="myCenterAlign numCls">4</p>
                      <label className="switch">
                        <input type="checkbox" {...register('week4')} />
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 modalSelect">
            <div className="myPadding">
              <div className="myCenterAlign">
                <h4>יום בשבוע</h4>
              </div>
            </div>
            <div className="myPadding selectModal">
              <Select
                options={HEBREW_DAYS}
                placeholder={'בחר..'}
                value={{ value: objectWeekChoosed, label: objectWeekChoosed }}
                onChange={(e) => setObjectWeekChoosed(e?.value || '')}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="myPadding">
              <Select
                options={ReactSelectOptionsOfFullHour}
                placeholder={'משעה'}
                value={{ value: objectFromHour, label: objectFromHour }}
                onChange={(e) => setObjectFromHour(e?.value || '')}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="myPadding">
              <Select
                options={ReactSelectOptionsOfFullHour}
                placeholder={'עד שעה'}
                value={{ value: objectToHour, label: objectToHour }}
                onChange={(e) => setObjectToHour(e?.value || '')}
              />
            </div>
          </div>
          <div
            style={{ position: 'absolute', bottom: '60px', left: '60px' }}
            className="MyButton"
          >
            <button>{'עדכן'}</button>
          </div>
        </form>
      </ModalWrapper>
    </>
  )
}

export default EditVisit
