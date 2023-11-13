import React from 'react'
import Container from '../../../shared/Container'
import Loader from '../../../shared/Loader'
import MyCard from '../../../shared/MyCard'
import { useAgentProfileStore } from '../store/agentProfile.store'
import { useModals } from '../../Modals/provider/ModalProvider'
import BigButton from '../../../shared/BigButton'
const NearestObjectives = () => {
  const { taskToday, handleTask } = useAgentProfileStore()
  const { setTaskModal } = useModals()
  return (
    <div className="myMarginTop">
      <MyCard>
        <div className="objectives-cont">
          <Container>
            <div className="">
              <h4>המשימות שלך להיום</h4>
              {true ? (
                <div className="myCenterAlign loaderHeightMin">
                  <Loader />
                </div>
              ) : (
                <div>
                  {taskToday?.map((item, index) => {
                    return (
                      <div key={index}>
                        <MyCard>
                          <div className="flex-container pointer">
                            <div
                              className="col-lg-1 colMobile1 myCenterAlign"
                              onClick={() => setTaskModal(true)}
                            >
                              {item.typeTask === 'visit' && (
                                <span className="material-symbols-outlined">
                                  location_on
                                </span>
                              )}
                              {item.typeTask === 'objective' && (
                                <span className="material-symbols-outlined">
                                  task
                                </span>
                              )}
                            </div>
                            <div
                              className="col-lg-1 colMobile2"
                              onClick={() => setTaskModal(true)}
                            >
                              <p>{item.type}</p>
                            </div>
                            <div
                              className="col-lg-4 colMobile4 long-text"
                              onClick={() => setTaskModal(true)}
                            >
                              <p>
                                {item.mission} {item.visit}
                              </p>
                            </div>
                            <div
                              className="col-lg-1 colMobile6 myCenterAlign"
                              onClick={() => setTaskModal(true)}
                            >
                              <p>{item.startHour}</p>
                            </div>
                            <div
                              className="col-lg-1 colMobile6 myCenterAlign"
                              onClick={() => setTaskModal(true)}
                            >
                              <p>{item.endHour}</p>
                            </div>
                            <div className="col-lg-3 colMobile6 myCenterAlign btns">
                              {item.completedDate ? (
                                <div>
                                  {item.completed ? (
                                    <div className="myCenterAlign">
                                      <p>בוצע</p>
                                    </div>
                                  ) : (
                                    <div className="myCenterAlign">
                                      <p>לא בוצע</p>
                                    </div>
                                  )}
                                </div>
                              ) : (
                                <div>
                                  <div>
                                    <div className="flex-container">
                                      <div className="BigButton-cont">
                                        <BigButton
                                          googleIcon="check_circle"
                                          imgLink={`${process.env.MEDIA}/icon/VIcon.png`}
                                          color={'suc'}
                                          onClickBtn={() => handleTask(true)}
                                        />
                                      </div>
                                      <div className="BigButton-cont">
                                        <BigButton
                                          googleIcon="block"
                                          imgLink={`${process.env.MEDIA}/icon/+Icon.png`}
                                          color={'fal'}
                                          onClickBtn={() => handleTask(false)}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </MyCard>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </Container>
        </div>
      </MyCard>
    </div>
  )
}

export default NearestObjectives
