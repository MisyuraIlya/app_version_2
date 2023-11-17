import React, { useEffect } from 'react'
import AgentLayout from '../layout/AgentLayout'
import MyCard from '../../../shared/MyCard'
import { useAgentProfileStore } from '../store/agentProfile.store'
import VisitsList from '../components/VisitsList'
import MyInputV2 from '../../../shared/MyInputV2'
import Pagination from '../../../shared/Pagination'
import AgentContainer from '../layout/AgentContainer'
import SideButton from '../../../shared/SideButton'
import { useModals } from '../../Modals/provider/ModalProvider'
import { useLocation } from 'react-router-dom'

const Visits = () => {
  const { searchValue, setSearchValue, hydraPagination, getVisits, setPage } =
    useAgentProfileStore()
  const { setVisitModal } = useModals()
  const location = useLocation()
  useEffect(() => {
    const urlSearchParams = new URLSearchParams(location.search)
    const page = urlSearchParams.get('page')
    if (page) {
      setPage(page?.toString())
    }
    getVisits()
  }, [location.search])
  return (
    <div className="page-container myMarginTop agentVisitsPage">
      <AgentContainer>
        <AgentLayout>
          <div className="myPadding">
            <MyCard>
              <div className="flex-container myPadding">
                <div className="col-lg-3 colMobile12 mobileAlign">
                  <div className="">
                    <MyInputV2
                      placeholder={'חיפוש לפי לקוח'}
                      value={searchValue}
                      onChange={setSearchValue}
                    />
                  </div>
                </div>
              </div>
            </MyCard>
          </div>
          <div className="myPadding">
            <MyCard>
              <VisitsList />
            </MyCard>
          </div>

          <div className="myMarginTop">
            <Pagination hydraPagination={hydraPagination} />
          </div>
        </AgentLayout>
        <SideButton onClickBtn={() => setVisitModal(true)} imgLink="" />
      </AgentContainer>
    </div>
  )
}

export default Visits
