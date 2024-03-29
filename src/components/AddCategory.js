import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories, categories }) => {

   const [inputValue, setInputValue] = useState('');

   const handleInputChange = (e) => {
      setInputValue(e.target.value);

      console.log('handleInputChange llamado');

   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (inputValue.trim().length >= 2) {
         setCategories(catgs => [inputValue, ...catgs]);
         setInputValue('');
      }
   }

   return (
      <form onSubmit={handleSubmit}>
         <input type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder='Ingresa el nombre de la categoria'
         />
      </form>
   )
}

AddCategory.propTypes = {
   setCategories: PropTypes.func.isRequired
}
