import React, { FC, ReactNode, MouseEvent } from 'react';
import AgentsList from '../components/AgentList';
import { useAuth } from '../../Auth/store/useAuthStore';

interface ContainerProps {
  children: ReactNode;
}

const AgentContainer:FC<ContainerProps> = ({children}) => {
    const {isSuperAgent,isAdmin} = useAuth()
    return (
        <div className={'container'}>
            {(isSuperAgent || isAdmin) && <AgentsList/>}
            {children}
        </div>
    );
};

export default AgentContainer;