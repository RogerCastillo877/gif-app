import { getGifs } from '../../helpers/getGifs';


describe('should test gefGif fecth', () => {

    test('should bring 10 elements', async() => {
        const gifs = await getGifs('samurai x');

        expect( gifs.length ).toBe( 10 );
    });

    test('should bring [] ', async() => {
        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );
    });
    
});