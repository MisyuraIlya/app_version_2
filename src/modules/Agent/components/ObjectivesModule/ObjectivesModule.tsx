import React, { useState } from 'react'
import moment from 'moment'
import WeekFilter from './components/WeekFilter'
import MyCard from '../../../../shared/MyCard'
import MyScheduleCalendar from './components/MyScheduleCalendar'

const ObjectivesModule = () => {
  // const {MyObjectiveMethods} = useMyObjective()
  // const {MyScheduleCalendarMethods} = useMyScheduleCalendar()
  // const [openCreateModal, setOpenCreateModal] = useState(false)
  // const [openEditModal, setOpenEditModal] = useState(false)
  // const {MyModalMethods} = useMyModal()

  // const openEditHandler = (event) => {
  //     MyModalMethods.setModalOpen(true)
  //     setOpenEditModal(true)
  //     // MyScheduleCalendarMethods.fetchInfoModal(event.tableName, event.idDocument)
  //     MyScheduleCalendarMethods.fetchInfoModal2(event)
  // }

  // const closeEditHandler = () => {
  //     setOpenEditModal(false)
  //     MyModalMethods.setModalOpen(false)
  // }

  // const createMissionHandler = (data) => {
  //     if(data.HoursFromSelect.value < data.HoursToSelect.value){
  //         MyObjectiveMethods.createObjective(data)
  //         setOpenCreateModal(false)
  //         MyScheduleCalendarMethods.fetchAgentCalendar()
  //     } else {
  //         onErrorAlert('שגיאה','השעה צריכה להיות הפוכה')
  //     }

  // }

  return (
    <div>
      <div className="myCenterAlign myWidth">
        <WeekFilter />
      </div>
      <div className="myMarginTop">
        <MyCard>
          <MyScheduleCalendar />
        </MyCard>
      </div>
      {/* {!openCreateModal && <MySideButton imgLink={globalFileServer + 'agentApp/+Icon.png'} onClickBtn={() => setOpenCreateModal(true)}/>} */}
      {/* {openCreateModal && <CreateModal closePopUpHandler={() => setOpenCreateModal(false)} createMissionHandler={createMissionHandler}/>} */}
      {/* {openEditModal && <EditModal closeEditHandler={closeEditHandler}/>} */}
    </div>
  )
}

export default ObjectivesModule
