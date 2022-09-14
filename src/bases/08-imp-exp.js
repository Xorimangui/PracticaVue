import superHeroes from '../data/heroes' //el import funciona sin llaves porque es un export default

export const getHeroById = (id) => superHeroes.find(hero => hero.id === id)

export const getHeroesByOwner = (owner) => superHeroes.filter(hero => hero.owner === owner)

// Así quedaría el import en otro archivo:

// import { getHeroById, getHeroesByOwner } from './bases/08-imp-exp'

// console.log(getHeroById(2)) //Spiderman

// console.log(getHeroesByOwner('Marvel')) //[]