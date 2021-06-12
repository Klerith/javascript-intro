import axios from 'axios'

const apiKey = 'TILryg8bcoAgdMtRxj5ARtb5nqkJdnMQ';
const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})




// giphyApi.get('/random').then( resp => {
    
//     // console.log(resp)
//     const { data } = resp.data;
//     // console.log(data)
//     const { url } = data.images.original;
    
//     const img = document.createElement('img');
//     img.src = url;

//     document.body.append( img );
    
// })


// Hasta la clase 12
export default giphyApi