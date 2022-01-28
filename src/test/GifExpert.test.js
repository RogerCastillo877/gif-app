import React from "react";
import { shallow } from "enzyme";
import { GifExpertApp } from '../GifExpertApp';

describe('should test GifExpert component', () => {
    
    test('should show the component properly', () => {
        
        const wrapper = shallow(<GifExpertApp />);

        expect( wrapper ).toMatchSnapshot();
    })
    
    test('should show a list of category', () => {
        
        const categories = ['samurai x', 'Dragon Ball']
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories } />);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    })
    
})
