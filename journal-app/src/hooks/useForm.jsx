import { useEffect } from 'react';
import { useState } from 'react';

export const useForm = ( initialForm = {},formValidation={} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [formValid, setFormValidation] = useState({
         
    })
    useEffect(() => {
      createValidators()
    }, [formState])
    
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );    
    }

    const createValidators= ()=> {
        const formCheck = {}    
        for(const formField of Object.keys(formValidation)){
         const [fn, errorMesage='este campo es requerido'] = formValidation[formField]
        
         formCheck[`${formField}Valid`]= fn(formState[formField]) ? null : errorMesage
        }
        
        setFormValidation(formCheck)
    }
    

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValid
    }
}