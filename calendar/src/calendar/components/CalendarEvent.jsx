import React from 'react'

export const CalendarEvent = ({event}) => {
    const {title,user} = event 

  return (
  <>
    <h5>{title}</h5>
    <h6>{user.name}</h6>
  </>
  
  )
}
