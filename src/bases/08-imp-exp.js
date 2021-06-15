
// import { owners } from './data/heroes'
import superHeroes from '../data/heroes'


// getHeroById ( id ) 
// funciones de Flecha

// const getHeroById = ( id ) => {
//     return superHeroes.find( hero => hero.id === id )
// }
export const getHeroById = ( id ) => superHeroes.find( hero => hero.id === id )


// getHeroesByOwner 'DC', 'Marvel'
export const getHeroesByOwner = ( owner ) => superHeroes.filter( hero => hero.owner === owner )







// import { getHeroById, getHeroesByOwner } from './bases/08-imp-exp'


// console.log( getHeroById(2) ) // Spiderman

// console.log( getHeroesByOwner('Marvel') ) // []
























