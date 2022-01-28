import React from "react";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";


describe('should test AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    
    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    })
    test('should show properly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should chande the text box', () => {
        
        const input = wrapper.find('input');
        const value = 'hola';

        input.simulate('change', { target: { value } });

        expect( wrapper.find('p').text().trim() ).toBe(value);
    });

    test('should not post the info with submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();
    })

    test('should call setCategories and clean the text box', () => {
        const value = 'hola';

        wrapper.find('input').simulate('change', {target: {value} });
        wrapper.find('form').simulate('submit', {preventDefault(){} });
        
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toBeCalledTimes(1);
        expect( setCategories ).toBeCalledWith( expect.any( Function ) );

        expect( wrapper.find('input').prop('value') ).toBe('');
    });
    
});