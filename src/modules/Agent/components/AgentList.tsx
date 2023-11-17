import React from 'react'
import { useAgentProfileStore } from '../store/agentProfile.store'
import { useAuth } from '../../Auth/store/useAuthStore'
import { Link } from 'react-router-dom'

const AgentsList = () => {
  const { agentList } = useAgentProfileStore()
  const { user } = useAuth()
  let scrollFunc = () => {
    // setTimeout(() => {
    // 	window.scrollTo(0, 0);
    //     triggerAgentListMob(false);
    // }, 200);
  }
  return (
    <>
      <div className="agentsListMainCont">
        <div className="AgentsList">
          <div className="MyDivider"></div>
          <div className="AgentsListCont">
            {agentList && agentList.length
              ? agentList.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      to={'/agentDashboard/' + item.id}
                      onClick={() => scrollFunc()}
                    >
                      <div className={index == 0 ? 'set-border' : ''}>
                        <div
                          className={
                            user?.id == user?.id
                              ? 'AgentsListContRow active'
                              : 'AgentsListContRow'
                          }
                        >
                          <p>{'#' + item.extId}</p>
                          <p>{item.name}</p>
                        </div>
                      </div>
                    </Link>
                  )
                })
              : null}
          </div>
        </div>
      </div>
    </>
  )
}

export default AgentsList
