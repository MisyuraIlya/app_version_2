import React, { ReactNode, FC } from 'react'
import AgentLayout from '../layout/AgentLayout'
import { useAuth } from '../../Auth/store/useAuthStore'
import AgentsList from '../components/AgentList'
import AgentPerformanceInfo from '../components/AgentPerformanceInfo'
import VisitsDashboard from '../components/VisitsDashboard'
import NearestObjectives from '../components/NearestObjectives'
import TargetsDashboard from '../components/TargetsDashboard'
import { useMobile } from '../../Mobile/store/mobile.store'
import AgentContainer from '../layout/AgentContainer'

const AgentDashboard = () => {
  const { isSuperAgent, isAdmin } = useAuth()
  const { isMobile } = useMobile()
  return (
    <div
      className={
        !isMobile
          ? 'page-container myMarginTop'
          : 'page-container myMarginTop openAgentListMob'
      }
    >
      <AgentContainer>
        {(isSuperAgent || isAdmin) && <AgentsList />}
        <AgentLayout>
          <AgentPerformanceInfo />
          <VisitsDashboard />
          <NearestObjectives />
          <TargetsDashboard />
        </AgentLayout>
      </AgentContainer>
    </div>
  )
}

export default AgentDashboard
