import React from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Navbar } from '../ui/Navbar';

export const CalendarScreen = () => {

    const localizer = momentLocalizer(moment);

    const events=[{
        title:'mañana es navidad :3',
        start: moment().toDate(),
        end: moment().add(2,'hours').toDate(),
        bgcolor:'#fafafa'
    }]

    return (
        <div className="calendar-screen">
             <Navbar/>
             <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            />
        </div>
    )
}
