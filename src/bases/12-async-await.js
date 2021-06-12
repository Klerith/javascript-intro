import giphyApi from './bases/11-axios'


const getImagen = async() => {

    try {

        // const { data: { data } } = await giphyApi.get('/random');
        const { data } = (await giphyApi.get('/random')).data;

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );

    } catch (error) {
        // manejo del error
        console.error('Error en la petición')
    }
    
    
    
}

 getImagen();



