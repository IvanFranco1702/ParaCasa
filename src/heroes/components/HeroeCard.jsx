import React from 'react'

export const HeroeCard = ({publisher,
    id,superhero,alter_ego,first_appearance,characters}) => {
      const urlHeroe = `/assets/heroes/${id}.jpg`
  return (
<div className="col">
    <div className="card">

         <div className="row no-gutters">
             <div className="col-4"> 
                <img src={urlHeroe}className="card-img"alt={superhero}/>
                <h5 className='card-title'>{superhero}</h5>
                <p className='card-text'>{alter_ego}</p>
            </div>
        </div>    

    </div>
</div>
  )
}
