import React from 'react'
// import { HeroeSerch } from '../components/HeroeSerch'
import { useLocation } from 'react-router-dom';
import queryString from 'query-string'
import { HeroeCard } from '../components/HeroeCard';
import { getHeroesByName } from '../helper/getHeroesByName';

export const Serch = () => {
  const location= useLocation()
  console.log(location)
const {q= ''} = queryString.parse(location.search)
const heroes = getHeroesByName(q)  

return (
  <>
  
  <hr />
  {(q=== '') 
   ? <h1>Busque un heroe...</h1> 
  :(heroes.length === 0)&&  <h1>No hay heroes con <b>{q}</b></h1> 
  }
 
  { (q.length<2)
    ? ""
    : <div>{heroes.map(heroe=>(
      <HeroeCard key={heroe.id} {...heroe}></HeroeCard>
    ))} </div>
  }
  </>
  )
}
