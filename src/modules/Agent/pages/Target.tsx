import React from 'react';
import AgentLayout from '../layout/AgentLayout';
import MyCard from '../../../shared/MyCard';
import YearSelectorBanner from '../components/YearSelectorBanner';
import TargetList from '../components/TargetList';
import AgentContainer from '../layout/AgentContainer';

const Target = () => {
   
    return (
        <div className='page-container myMarginTop targetPageCls myMarginBottom agentTargetPage'>
            <AgentContainer>
                <AgentLayout>
                    <div className='myMarginTop'>
                        <MyCard>
                            <YearSelectorBanner isDashborad={false}/>
                        </MyCard>
                    </div>
                    <div className='myMarginTop'>
                        <MyCard>
                            <div className='TargetListCont'>
                                <TargetList/>
                            </div>
                        </MyCard>
                    </div>
                </AgentLayout>
            </AgentContainer>
        </div>
    );
};

export default Target;