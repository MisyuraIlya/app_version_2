import React from 'react';
import AgentLayout from '../layout/AgentLayout';
import Container from '../../../shared/Container';
// import YearSelectorBanner from '../components/YearSelectorBanner/YearSelectorBanner';
// import TargetModule from '../modules/Targets/TargetModule';
import MyCard from '../../../shared/MyCard';
import AgentsList from '../components/AgentList';
import { useAuth } from '../../Auth/store/useAuthStore';

const Target = () => {
    const {isSuperAgent, isAdmin} = useAuth()
    return (
        <div className='page-container myMarginTop targetPageCls myMarginBottom agentTargetPage'>
            <Container>
                {(isSuperAgent || isAdmin) && <AgentsList/>}

                <AgentLayout>
                    <div className='myMarginTop'>
                        <MyCard>
                            {/* <YearSelectorBanner/> */}
                        </MyCard>
                    </div>
                    <div className='myMarginTop'>
                        <MyCard>
                            {/* <TargetModule/> */}
                        </MyCard>
                    </div>
                </AgentLayout>
            </Container>
        </div>
    );
};

export default Target;