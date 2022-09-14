import axios from 'axios'


const apiKey = 'BNgDQA0Xs2fEYdNnbMt992Ur2OhMUTFH'
    // `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})

export default giphyApi

// giphyApi.get('/random')
//     .then(resp => {

//         const { data } = resp.data
//         const { url } = data.images.original

//         console.log(url);

//         const img = document.createElement('img')
//         img.src = url

//         document.body.append(img)
//     })