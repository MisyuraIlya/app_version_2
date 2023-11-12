import React, {useEffect} from 'react';
import AgentLayout from '../layout/AgentLayout';
import Container from '../../../shared/Container';
import { useLocation } from 'react-router-dom';
// import VisitsModule from '../modules/Visits/VisitsModule';
// import MySideButton from '../ui/MySideButton/MySideButton';
// import VisitsFilter from '../modules/Visits/components/VisitsFilter';
// import MyPagination from '../ui/MyPagination/MyPagination';
// import { useMyVisits } from '../store/VIsitsStore';
// import { fetchPage } from '../services/localstorage/pagination.service';
// import { useHistory } from 'react-router-dom';
import MyCard from '../../../shared/MyCard';
import AgentsList from '../components/AgentList';
import { useAuth } from '../../Auth/store/useAuthStore';

const Visits = () => {
    const {isSuperAgent, isAdmin} = useAuth()
    const location = useLocation()
    // const history = useHistory()
    // const {paginationObject,searchValue,searchValueDebounced,MyVisitsMethods} = useMyVisits()
    useEffect(() => {
        if(!searchValueDebounced){
            MyVisitsMethods.fetchVisitsList()
        }
    },[searchValueDebounced,location.pathname])

    return (
        <div className='page-container myMarginTop agentVisitsPage'>
            <Container>
                {(isSuperAgent || isAdmin)&& <AgentsList/>}
                <AgentLayout>
                    <div className='myPadding'>
                        {/* <VisitsFilter/> */}
                    </div>
                    <div className='myPadding'>
                        <MyCard>
                            {/* <VisitsModule/> */}
                        </MyCard>
                    </div>

                    <div className='myMarginTop'>
                        {/* <MyPagination
                            paginateObj={paginationObject}
                            headProps={{page:fetchPage(history), lang:'he'}}
                            headLocation={searchValue} 
                            lang={'he'}
                        /> */}
                    </div>
                </AgentLayout>
            </Container>
        </div>
    );
};

export default Visits;