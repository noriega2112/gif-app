import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';

import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {

   const { data: images, loading } = useFetchGifs(category);

   return (
      <>

         { loading ? <div className="center-loader">
            <div class="loadingio-spinner-ripple-yj09y31vqe"><div class="ldio-9zi3wtv0tk">
               <div></div><div></div>
            </div></div>
         </div> :
            <div>
               <h3 className="group-title animate__animated animate__fadeIn">{category}</h3>
               <div className="card-grid">
                  {images.map(img => (
                     <GifGridItem
                        key={img.id}
                        {...img}
                     />
                  ))}
               </div>
            </div>
         }
      </>
   )
}
