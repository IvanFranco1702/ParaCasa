import { useEffect, useMemo } from 'react';
import { useState } from 'react';

export const useForm = ( initialForm = {},formValidation={} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [formValid, setFormValidation] = useState({})
    useEffect(() => {
      createValidators()
    }, [formState])

      const isFormValid = useMemo(()=>{

        for(const formValue of Object.keys(formValid)){
            if(formValid[formValue]!== null) return false; 
        }

        return true 

      },[formValid]) 
    
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
        ...formValid,
        isFormValid
    }
}