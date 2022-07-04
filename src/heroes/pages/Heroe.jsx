import React from 'react'
import { useMemo } from 'react'
import { useParams,Navigate,useNavigate} from 'react-router-dom'

import { getHeroeById } from '../helper'

export const Heroe = () => {
  const {id, ...rest} = useParams()
  const heroId = useMemo(()=>getHeroeById(id), [id]) 
  
  if(heroId === undefined){
      return <Navigate to='/marvel'/>
    }
    const navigate = useNavigate()
    const retorno = ()=>{
     navigate('/')
    }

  return (
    <div className="row mt-5">
      <div className="col-4">
        
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={heroId.superhero}
          
          className="img-thumbnail animate__animated animate__bounce"
        ></img>
      </div>
  <div className="col-8">
    <h3>{heroId.superhero}</h3>
    <ul className="list-group_list-group-flush">
      <li className="list-group-item"><b>Alter ego:</b>{heroId.alter_ego}</li>
      <li className="list-group-item"><b>Publisher:</b>{heroId.publisher}</li>
      <li className="list-group-item"><b>First appearance:</b>{heroId.first_appearance}</li>
    </ul>
      <h5 className="mt-3">Characters</h5>
      <p>{heroId.characters}</p>
      <button 
      className='btn btn-outline-primary'
      onClick={retorno}
      >Volver</button>
  </div>
  </div>
  )
}
