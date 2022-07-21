import React, { useState } from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar } from 'react-big-calendar'

import { Navbar } from '../components/Navbar'
import { addHours} from 'date-fns'
import { localizer,getMessagesES } from '../../helpers'
import { CalendarEvent } from '../components/CalendarEvent'


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


  const[lastView, setLasView]=useState(localStorage.getItem('lastView')|| 'week')
  const eventStyleGetter = (event, start, end , isSelected)=>{
    // console.log(event, start, end , isSelected)
    const style ={
      backgroundColor:'red',
      borderRadius: '15px',
      opacity: 0.8,
      color:' white'
    }
    return {
      style
    }
   
  }

  const onDobleClick = (e)=>{
      console.log({doubleClick:e})
  }
  const onSelect = (e)=>{
    console.log({click:e})
}
  const onViewChanged = (e)=>{
   localStorage.setItem('lastView',e)
  }
  return (
    <>
    <Navbar></Navbar>
    <Calendar
      culture='es'
      localizer={localizer}
      defaultView={lastView}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: '100vh'}}
      messages={getMessagesES( )}
      eventPropGetter={eventStyleGetter}
      components={{
        event:CalendarEvent
      }}
      onDoubleClickEvent={onDobleClick}
      onSelectEvent={onSelect}
      onView={onViewChanged}
    />

    </>
    )
}
