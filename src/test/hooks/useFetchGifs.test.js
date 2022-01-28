import { useFetchGifs } from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks'

describe('should test hook useFetchGif', () => {
    
    test('should return initial state', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'samurai x' ));
        const { data, loading } = result.current;

        // console.log( data, loading );
        await waitForNextUpdate();

        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );
    })

    test('should return an array of images and loading false', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'samurai x' ));
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );
    })
    
})
