import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ( {setCategories} ) => {
    // Si queremos que el estado sea un string vacío hay que especificarlo, sino nos tira un error en consola.
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = ( e ) => {
        // Prevenimos el comportamiento por default
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
           setCategories( category => [ inputValue, ...category ] );
        //    Este último sirve para que se borre el valor del input
           setInputValue(''); 
        }

        
    }

    return (
        <form onSubmit= { handleSubmit }>  
            <input 
                type="text"
                value= {inputValue}
                onChange={ handleInputChange } 
            />
        </form>
    )
}

AddCategory.propTypes = {

    setCategories: PropTypes.func.isRequired

}