import React from 'react';
import moment from 'moment';
import { useMyScheduleCalendar } from '../../../store/ScheduleCalendar.store';
const WeekFilter = () => {

    const {switchCalendarBackWeek, switchCalendarForwardWeek, weekFrom, weekTo} = useMyScheduleCalendar();
    return (
        <div className='WeekFilter myCenterAlign '>
            <div className='img' onClick={() => switchCalendarBackWeek()}>
                <img src={`${process.env.MEDIA}/agentApp/RightArrow.png`}/>
            </div>
            <div className='filterDates'>
                <p> {moment(weekFrom).format('DD-MM-YYYY')}  -  {moment(weekTo).format('DD-MM-YYYY')} </p>
            </div>
            <div className='img' onClick={() => switchCalendarForwardWeek()}>
                <img src={`${process.env.MEDIA}/agentApp/LeftArrow.png`}/>
            </div>
        </div>
    );
};

export default WeekFilter;