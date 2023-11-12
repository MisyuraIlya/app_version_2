import React from 'react';
import AgentLayout from '../layout/AgentLayout';
import Container from '../../../shared/Container';
// import ObjectivesModule from '../modules/Objectives/ObjectivesModule';
import AgentsList from '../components/AgentList';
import { useAuth } from '../../Auth/store/useAuthStore';
import ObjectivesModule from '../components/ObjectivesModule/ObjectivesModule';

const Objectives = () => {
    const {isAdmin, isSuperAgent} = useAuth()
    return (
        <div className='page-container myMarginTop'>
            <Container>
                {(isAdmin || isSuperAgent) && <AgentsList/>}
                <AgentLayout>
                    <ObjectivesModule/>
                </AgentLayout>
            </Container>
        </div>

    );
};

export default Objectives;