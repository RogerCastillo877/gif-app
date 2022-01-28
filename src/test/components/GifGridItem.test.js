import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('should prube <GifGridItem />', () => {

    const title = 'titulo';
    const url = 'https://miss.com';
    const wrapper = shallow( <GifGridItem title={ title } url={ url } />)
    
    test('should show the component correct', () => {
        
        
        expect( wrapper ).toMatchSnapshot();
    });

    test('should have a paraghraf with title', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe(title);
    });

    test('should have a img same to url and alt of props', () => {
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe(url);
        expect( img.prop('alt') ).toBe(title );
    });

    test('should have animate__fadeIn', () => {
        const div = wrapper.find('div');
        expect( div.prop('className').includes('animate__fadeIn')).toBe(true);
    });
});