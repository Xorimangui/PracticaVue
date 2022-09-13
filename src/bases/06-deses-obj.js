const person = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman',
}

const { name, age, codeName, power = 'No tiene poder' } = person

// console.log(name)
// console.log(age)
// console.log(codeName)
// console.log('poder:' + power)

const createHero = ({ name, age, codeName, power = 'No tiene poder' }) => {

    return {
        id: 12313123,
        name,
        age,
        codeName,
        power
    }

}

console.log(createHero(person))

//es lo mismo que:

//const createHero = ({ name, age, codeName, power = 'No tiene poder' }) => ({ name, age, codeName, power })