import React from 'react';
import AgentLayout from '../layout/AgentLayout';
import MyCard from '../../../shared/MyCard';
import { useAgentProfileStore } from '../store/agentProfile.store';
import VisitsList from '../components/VisitsList';
import MyInputV2 from '../../../shared/MyInputV2';
import Pagination from '../../../shared/Pagination';
import AgentContainer from '../layout/AgentContainer';

const Visits = () => {
    const {searchValue, setSearchValue, hydraPagination} = useAgentProfileStore()
    return (
        <div className='page-container myMarginTop agentVisitsPage'>
            <AgentContainer>
                <AgentLayout>
                    <div className='myPadding'>
                        <MyCard>
                            <div className='flex-container myPadding'>
                                <div className='col-lg-3 colMobile12 mobileAlign'>
                                    <div className=''>
                                        <MyInputV2 placeholder={'חיפוש לפי לקוח'} value={searchValue} onChange={setSearchValue}/>
                                    </div>
                                </div>
                            </div>
                        </MyCard>
                    </div>
                    <div className='myPadding'>
                        <MyCard>
                            <VisitsList/>
                        </MyCard>
                    </div>

                    <div className='myMarginTop'>
                        <Pagination hydraPagination={hydraPagination} />
                    </div>
                </AgentLayout>
            </AgentContainer>
        </div>
    );
};

export default Visits;