import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {

   const [categories, setCategories] = useState(defaultCategories);

   // const handleAdd = () => {
   //    setCategories(['Hunterxhunter', ...categories]);
   // }

   return (
      <>
         <h1>Buscador de Gifs</h1>
         <AddCategory setCategories={setCategories} />
         <hr />

         {categories.map((category, key) => (
            <GifGrid category={category} key={key} />
         ))}
      </>
   )
}

