import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('handleSubmit', inputValue);

        if( inputValue.trim().length > 2) {
            setCategories( categ => [ inputValue, ...categ ] );
            setInputValue('');
        }

    };
     
    return (
        <form onSubmit={ handleSubmit }>
            <p>{ inputValue }</p>
            <input
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
