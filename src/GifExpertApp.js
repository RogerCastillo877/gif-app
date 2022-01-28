import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export function GifExpertApp( {defaultCategories = []}) {

    // const categories = ['one', 'Samurai', 'Dragón']
    const [ categories, setCategories ] = useState(defaultCategories);

    // const handleAdd = () => {
    //     setCategories([...categories, 'trol']);
    // }
    
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            

            <ol>
                { categories.map( category =>
                    <GifGrid
                        key= { category }
                        category = { category } 
                    /> 
                ) }
            </ol>
        </div>
    )
}