const apiKey = 'BNgDQA0Xs2fEYdNnbMt992Ur2OhMUTFH'
    // https://api.giphy.com/v1/gifs/random?api_key=BNgDQA0Xs2fEYdNnbMt992Ur2OhMUTFH

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then(resp => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original

        const img = document.createElement('img')
        img.src = url

        document.body.append(img)
    })


//Hemos utilizado Fetch para llamar a una url que genera imagenes aleatorias
//Fetch es una Promesa, es decir, necesita de tratamiento de una respuesta
//Esa respuesta la hemos pasado a JSON con .json(), el cual a su vez tambien es una Promesa
//Cuando tenemos los datos de la respuesta de la Promesa JSON, accedemos a la URL de la imagen original y la mostramos por pantalla.