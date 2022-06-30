import { heroes } from "../data/heroes";


export const getHeroeByPublisher =  (valor) => {
  
  const valoresaceptados= ['DC Comics','Marvel Comics']
  if(!valoresaceptados.includes(valor)){
    throw new Error(`${valor} no existe como resultado`)

  }
  
    return (
            heroes.filter(heroe=>heroe.publisher === valor)
  )
}
