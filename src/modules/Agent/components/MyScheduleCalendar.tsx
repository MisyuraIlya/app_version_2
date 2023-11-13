import moment from 'moment'
import React, { useEffect, useState } from 'react'
import MobileMyScheduleCalendar from './MobileMyScheduleCalendar'
import { HourOfDay, useMyScheduleCalendar } from '../store/ScheduleCalendar.store'
import Loader from '../../../shared/Loader'
import { ConvertHebrewNameDayToWeekDateByWeekName } from '../helpers/ScheduleCalendar.helper'
import { useModals } from '../../Modals/provider/ModalProvider'
import { useMobile } from '../../Mobile/store/mobile.store'

const MyScheduleCalendar = () => {
  const {
    daysOfWeek,
    hoursOfDay,
    ScheduleCalendarInfo,
    fetchAgentCalendar,
    weekFrom,
    weekTo,
    loading,
  } = useMyScheduleCalendar()
  const { setTaskModal } = useModals()
  const { isMobile } = useMobile()
  useEffect(() => {
    fetchAgentCalendar()
  }, [])

  return (
    <>
      {!isMobile ? (
        <div className="weekly-scheduler myMarginBottom">
          <div className="header">
            <div className="cell img_time">
              <img src={`${process.env.MEDIA}/agentApp/Time.png`} />
            </div>
            {daysOfWeek.map((day, index) => (
              <div key={day} className="cell day">
                <p>
                  {day} -{' '}
                  {ConvertHebrewNameDayToWeekDateByWeekName(index, weekFrom)}
                </p>
              </div>
            ))}
          </div>
          <div className="body">
            {loading ? (
              <div className="myCenterAlign loaderHeightMin">
                <Loader />
              </div>
            ) : (
              hoursOfDay.map((hour) => (
                <div key={hour} className="row">
                  <div className="cell hour">
                    <p>{hour}</p>
                  </div>
                  {daysOfWeek.map((day) => (
                    <div key={`${day}-${hour}`} className="cell">
                      {ScheduleCalendarInfo.map((event) => {
                        if (
                          event.dayOfWeek === day &&
                          event.startHour === hour
                        ) {
                            const eventDuration =
                              hoursOfDay.indexOf(event.endHour as HourOfDay) - 
                              hoursOfDay.indexOf(event.startHour as HourOfDay);
                          return (
                            <div
                              key={`${day}-${hour}-${event.startHour} event`}
                              className={`event_${event.typeId}`}
                              style={{ height: `${eventDuration * 100}px` }}
                              onClick={() => setTaskModal(true)}
                            >
                              <div className={`entire`}>
                                <div className="head">
                                  <div className="hour_card">
                                    {event.endHour}
                                  </div>
                                  <div className="hour_card">
                                    {event.startHour}
                                  </div>
                                </div>
                                <div className="cont_block">
                                  <div className="heading">
                                    {event.subTusk ? (
                                      <h3>{event.subTusk.length} משולב</h3>
                                    ) : (
                                      <h3>{event.type}</h3>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        }
                        return null
                      })}
                    </div>
                  ))}
                </div>
              ))
            )}
          </div>
        </div>
      ) : (
        <MobileMyScheduleCalendar/>
      )}
    </>
  )
}

export default MyScheduleCalendar
