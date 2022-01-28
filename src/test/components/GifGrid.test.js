import React from "react";
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe('should test GifsGrid component', () => {

    const category = 'samurai x'; 
    test('should show properly', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow(<GifGrid category={category} />);

        expect( wrapper ).toMatchSnapshot();
    })

    test('should show items when load img useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://img.jpg',
            title: 'Ese es'
        }]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow( <GifGrid category={ category } />);
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    })
    
})
