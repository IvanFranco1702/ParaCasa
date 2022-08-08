import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { calendarApi } from '../api';
import { convertEventstoDateEvents } from '../helpers/convertEventstoDateEvents';
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from '../store';


export const useCalendarStore = () => {
  
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector( state => state.calendar );
    const {user} = useSelector( state => state.auth );

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) )
    }




    const startSavingEvent = async( calendarEvent ) => {
        // TODO: llegar al backend
        // Todo bien
        try {
                 if( calendarEvent.id ) {
            // Actualizando
            await calendarApi.put(`events/${calendarEvent.id}`, calendarEvent  )
            dispatch( onUpdateEvent({ ...calendarEvent,user }) );
            return
        }  
         const {data}=await calendarApi.post('/events',calendarEvent)
            dispatch( onAddNewEvent({ ...calendarEvent, id: data.evento.id, user }) );
        
        } catch (error) {
            console.log(error)
            Swal.fire('error al guardar', error.response.data.msg,'error')
        }
   
            // Creando
          
    }



    const startDeletingEvent =async () => {
        // Todo: Llegar al backend
        try {
                await calendarApi.delete(`events/${activeEvent.id}`  )
        dispatch( onDeleteEvent() );
        } catch (error) {
            console.log(error)
            Swal.fire('error al borrar', error.response.data.msg,'error')
        }
    
    }



    const startLoadingEvents=async ()=>{
        try {

            const{data} = await calendarApi.get('/events')
            const events = convertEventstoDateEvents(data.evento)
            dispatch(onLoadEvents(events))            
        } catch (error) {
            console.log('error al cargar los eventos')
            console.log(error)
            
        }
    }



    return {
        //* Propiedades
        activeEvent,
        events,
        hasEventSelected: !!activeEvent,

        //* Métodos
        startDeletingEvent,
        setActiveEvent,
        startSavingEvent,
        startLoadingEvents
    }
}
