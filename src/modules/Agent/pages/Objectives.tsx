import React from 'react';
import AgentLayout from '../layout/AgentLayout';
import WeekFilter from '../components/WeekFilter';
import MyCard from '../../../shared/MyCard';
import MyScheduleCalendar from '../components/MyScheduleCalendar';
import AgentContainer from '../layout/AgentContainer';

const Objectives = () => {
    return (
        <div className='page-container myMarginTop'>
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
            </AgentContainer>
        </div>

    );
};

export default Objectives;