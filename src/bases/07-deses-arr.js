const characters = ['Goku', 'Vegeta', 'Trunks', 'Goten']

// const g = characters[0]
// const v = characters[1]
// const t = characters[2]

const [g, v, t, goten = 'No tiene valor'] = characters

const returnArray = ([letters, numbers]) => {
    return [letters, numbers]
}

const [letters, numbers] = returnArray(['XYZ', 987])

console.log(letters, numbers)