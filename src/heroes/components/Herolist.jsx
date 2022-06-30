import React from 'react'
import { getHeroeByPublisher } from '../helper'
import { HeroeCard } from './HeroeCard'

export const Herolist = ({valor}) => {
    const heroesfiltrados =getHeroeByPublisher(valor)
  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
      {heroesfiltrados.map((elemento)=>(
        <HeroeCard key={elemento.id}
        {...elemento}></HeroeCard>
     ))}  
    </div>
  )
}
