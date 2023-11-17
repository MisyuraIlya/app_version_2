import React, { useEffect } from 'react'
import AgentLayout from '../layout/AgentLayout'
import WeekFilter from '../components/WeekFilter'
import MyCard from '../../../shared/MyCard'
import MyScheduleCalendar from '../components/MyScheduleCalendar'
import AgentContainer from '../layout/AgentContainer'
import { useMyScheduleCalendar } from '../store/ScheduleCalendar.store'
import SideButton from '../../../shared/SideButton'
import { useModals } from '../../Modals/provider/ModalProvider'

const Objectives = () => {
  const { fetchAgentCalendar, weekFrom, weekTo } = useMyScheduleCalendar()
  const { setObjectCreate } = useModals()
  useEffect(() => {
    fetchAgentCalendar()
  }, [weekFrom, weekTo])
  return (
    <div className="page-container myMarginTop">
      <AgentContainer>
        <AgentLayout>
          <div>
            <div className="myCenterAlign myWidth">
              <WeekFilter />
            </div>
            <div className="myMarginTop">
              <MyCard>
                <MyScheduleCalendar />
              </MyCard>
            </div>
          </div>
        </AgentLayout>
        <SideButton onClickBtn={() => setObjectCreate(true)} imgLink="" />
      </AgentContainer>
    </div>
  )
}

export default Objectives
