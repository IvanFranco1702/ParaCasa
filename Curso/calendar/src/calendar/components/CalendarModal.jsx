
import { addHours, differenceInSeconds } from 'date-fns';
import React, { useMemo, useState } from 'react'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import Modal from 'react-modal'
import DatePicker,{registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import es from 'date-fns/locale/es'
import { useUistore } from '../../hooks/useUistore';

registerLocale('es',es)



const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');
  


export const CalendarModal = () => {
  
    const{isDateModalOpen}=useUistore()
    
    // const [adentro ,setAdentro]=useState(true)  
    const [formSubmited,setFormSubmited]=useState(false)


  const [formValue, setFormValue]=useState({
    title:'ivan',
    notes:'franco',
    start:new Date(),
    end: addHours (new Date(), 2)
  })

 const titleclass= useMemo(()=>{
  if(!formSubmited) return '';
  return (formValue.title.length>0)
    ? ' '
    : 'is-invalid'



  },[formValue.title, formSubmited ])
 
  const change =({target})=>{
    setFormValue({
      
      ...formValue,
      [target.name] : target.value
 
    })
    console.log(target) 
  }
  const changeDate=(e,estartend)=>{
    setFormValue({
      ...formValue,
      [estartend] : e 
    })
  }

    
    const onCloseModal= ()=>{
    console.log('cerrando el modal')
  }
  
  const onSubmit=(e)=>{
    e.preventDefault()
    setFormSubmited(true)

    const diference= differenceInSeconds(formValue.end, formValue.start)

    if(isNaN(diference)|| diference<=0){
      Swal.fire('Fechas incorrectas', 'Revisa lo que escribiste flaco', 'error')

      return
    }

    if (formValue.title.length<=0)return
    console.log(formValue)
  }

  return (
    <Modal
        isOpen={isDateModalOpen}
        onRequestClose={onCloseModal}
        style={customStyles}
        className='modal'
        overlayClassName={'modal-fondo'}
        closeTimeoutMS={200}
        >
<h1> Nuevo evento </h1>
<hr />
<form className="container" onSubmit={onSubmit}>

    <div className="form-group mb-2">
        <label>Fecha y hora inicio</label>
        <DatePicker
        selected={formValue.start}
        className='form-control'
        onChange={(e)=>changeDate(e,'start')}
        dateFormat='Pp'
        showTimeSelect
        locale='es'
        timeCaption='Hora'

        ></DatePicker>
    </div>

    <div className="form-group mb-2">
        <label>Fecha y hora fin</label>
        <DatePicker
        minDate={formValue.start}
        selected={formValue.end}
        className='form-control'
        onChange={(e)=>changeDate(e,'end')}
        dateFormat='Pp'
        showTimeSelect
        locale='es'
        timeCaption='Hora'

        ></DatePicker>
    </div>

    <hr />
    <div className="form-group mb-2">
        <label>Titulo y notas</label>
        <input 
            type="text" 
            className={`form-control ${titleclass}`}
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={formValue.title}
            onChange={change}
        />
        <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
    </div>

    <div className="form-group mb-2">
        <textarea 
            type="text" 
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={formValue.notes}
            onChange={change}
        ></textarea>
        <small id="emailHelp" className="form-text text-muted">Información adicional</small>
    </div>

    <button
        type="submit"
        className="btn btn-outline-primary btn-block"
    >
        <i className="far fa-save"></i>
        <span> Guardar</span>
    </button>

</form>

    </Modal>

    )
}
