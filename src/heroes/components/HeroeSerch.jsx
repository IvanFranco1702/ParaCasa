import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../helper/getHeroesByName';

import { useLocation } from 'react-router-dom';
import queryString from 'query-string'// import queryString from 'query-string'

export const HeroeSerch = () => {
    const navigate =useNavigate()
    const location= useLocation()
    const {q= ''} = queryString.parse(location.search)


    const {searchText,onInputChange}= useForm({
        searchText: q
    }); 

   const  onSearchSubmit = (e)=>{
    e.preventDefault()
    if(searchText.trim().length <= 1)return;
    navigate(`?q=${searchText}`

    )
   }

   
  return (

    <form onSubmit={onSearchSubmit}>
    <input type="text"
     className='form-control' 
     name="searchText"
      placeholder="buscar heroe" 
      autoComplete='off'
      value={searchText}
      onChange={onInputChange}
      
     />
    </form>
  )
}
