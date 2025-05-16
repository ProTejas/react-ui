import React from 'react'
import './event-time.css'
import calenderTimer from '../../assets/img/calender-timer.svg'

function EventTime() {
    return (
        <div className="event-box">
            <div className='container'>
                <div className="event-time-box">
                    <div className='event-heading'>
                        <h2>
                            Upcoming Examinations
                        </h2>
                        <p>
                            Enquire about the examination & register for the exams
                        </p>
                    </div>
                    <div className='event-dates'>
                        <div className="event-date-box">
                            <img src={calenderTimer} alt="calender" />
                            <div className="event-date-heading">
                                <p className='event-date-month'>02th October 2014</p>
                                <p className='event-exam-level'>Level 1 exam</p>
                            </div>
                        </div>
                        <div className="event-date-box">
                            <img src={calenderTimer} alt="calender" />
                            <div className="event-date-heading">
                                <p className='event-date-month'>Nov-Dec 2016</p>
                                <p className='event-exam-level'>Level 2 eaxm</p>
                            </div>
                        </div>
                        <div className="event-date-box">
                            <img src={calenderTimer} alt="calender" />
                            <div className="event-date-heading">
                                <p className='event-date-month'>Ongoing this year</p>
                                <p className='event-exam-level'> Level 3 (Grad)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EventTime
