import React, {ReactNode, FC } from 'react';
import AgentLayout from '../layout/AgentLayout';
import { useAuth } from '../../Auth/store/useAuthStore';
import AgentsList from '../components/AgentList';
import AgentPerformanceInfo from '../components/AgentPerformanceInfo';

interface AgentDashboardProps {
    children:ReactNode
}
const AgentDashboard:FC<AgentDashboardProps> = ({children}) => {
    const {user, isSuperAgent, isAdmin} = useAuth()
    return (
        <div>
            {(isSuperAgent || isAdmin) &&
                <AgentsList/>
            }
            <AgentLayout>
                <AgentPerformanceInfo/>
            </AgentLayout>
        </div>
    );
};

export default AgentDashboard;