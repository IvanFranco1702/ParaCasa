import React from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar } from 'react-big-calendar'

import { Navbar } from '../components/Navbar'
import { addHours} from 'date-fns'
import { localizer,getMessagesES } from '../../helpers'


const events =[{
  title: 'muchachos traigan vino juega la acade',
  notes: 'hay que comprar vino',
  start: new Date(),
  end: addHours(new Date(), 2 ),
  bgcolor: '#fafafa',
  user:{
    id: '123', 
    name: 'ivan'
  }

}]

export const CalendarPage = () => {
  const eventStyleGetter = (event, start, end , isSelected)=>{

  }
  return (
    <>
    <Navbar></Navbar>
    <Calendar
      culture='es'
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: '100vh'}}
      messages={getMessagesES( )}
      eventPropGetter={eventStyleGetter}
    />

    </>
    )
}
