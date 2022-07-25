// import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { onOpenDateModal } from '../store/ui/uiSlice'

export const useUistore = () => {

    const dispatch = useDispatch


    const{isDateModalOpen}=useSelector(state=>state.ui)

    const OpenDateModal=()=>{
        
        dispatch(onOpenDateModal())
    }



    return{
        isDateModalOpen,
        OpenDateModal
    
    }
        
    
 
}
