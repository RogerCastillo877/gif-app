export const getGifs = async( category ) => {
        
    const URL =  'https://api.giphy.com/v1/gifs/search';
    const apiKey = 'TCW03PyjHaaw6LKmcpI1UvjmLEpCKKns';
    const consulta = `${URL}?q=${ encodeURI( category) }&limit=10&api_key=${apiKey}`;
    const resp = await fetch( consulta );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    
    return gifs;
}