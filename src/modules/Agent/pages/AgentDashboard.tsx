import React, {ReactNode, FC } from 'react';
import AgentLayout from '../layout/AgentLayout';
import { useAuth } from '../../Auth/store/useAuthStore';
import AgentsList from '../components/AgentList';
import AgentPerformanceInfo from '../components/AgentPerformanceInfo';
import VisitsDashboard from '../components/VisitsDashboard';
import NearestObjectives from '../components/NearestObjectives';
import TargetsDashboard from '../components/TargetsDashboard';
import EditModal from '../components/Modals/EditModal';
import Container from '../../../shared/Container';
import { useMobile } from '../../Mobile/store/mobile.store';

interface AgentDashboardProps {
    children:ReactNode
}
const AgentDashboard:FC<AgentDashboardProps> = () => {
    const {user, isSuperAgent, isAdmin} = useAuth()
    const {isMobile} = useMobile()
    return (
        <div className={!isMobile ? 'page-container myMarginTop': 'page-container myMarginTop openAgentListMob'}>
            <Container>
                {(isSuperAgent || isAdmin) &&
                    <AgentsList/>
                }
                <AgentLayout>
                    <AgentPerformanceInfo/>
                    <VisitsDashboard/>
                    <NearestObjectives/>
                    {/* <EditModal/> */}
                    <TargetsDashboard/>
                </AgentLayout>
            </Container>
        </div>
    );
};

export default AgentDashboard;