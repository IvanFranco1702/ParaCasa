import React from 'react'
import {Link} from 'react-router-dom'

const CharactersByHero=({alter_ego,characters})=>{

    if(alter_ego === characters)return(<></>);
    return <p>{characters}</p>
}
export const HeroeCard = ({publisher,
    id,superhero,alter_ego,first_appearance,characters}) => {
      const urlHeroe = `/assets/heroes/${id}.jpg`
  return (
<div className="col">
    <div className="card">
      <div className="row no-gutters">
          <div className="col-4 " > 
            <img src={urlHeroe}className="card-img "alt={superhero}/>
              <h5 className='card-title'>{superhero}</h5>
              <p className='card-text'>{alter_ego}</p>
              <p>
              <CharactersByHero characters={characters} alter_ego={alter_ego}></CharactersByHero>
              </p>
              <p className='card-text'>
                <small className='text-muted'>{first_appearance}</small>
              </p>

            <Link to={`/heroe/${id}`}>
              mas info
            </Link>
  
            </div>
      </div>    
    </div>
</div>
  )
}
