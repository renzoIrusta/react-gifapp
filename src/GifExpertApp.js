import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



const GifExpertApp = () => {

    // const categories= ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['']);

    // const handleAdd = () => {
        // setCategories([...categories,'Hunter']);
        // también se puede hacer de la siguiente forma, que es usando un call back al que se le pasa de argumento el estado anterior, que necesariamente tiene que tener el mismo nombre
        // setCategories( category => [...category, 'lo que sea'] )
    // }

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ol>
            {
                categories.map( (category) => (
                    // ESto de poner así la key no va, se usa los ids que te dan las bases de datos, no poner el índice del map porque puede generar problemas si el arreglo cambia.
                    <GifGrid
                        category={ category }
                        key={ category }     
                    />
                ) )
            }
            </ol>
        </>
    )

};

export default GifExpertApp;