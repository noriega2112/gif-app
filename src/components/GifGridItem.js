import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ({ title, url }) => {
   // console.log(img);
   return (
      <div className="card animate__animated animate__fadeIn">
         <p>{title}</p>
         <img src={url} alt={title} />
      </div>
   )
}

GifGridItem.propTypes = {
   title: PropTypes.string.isRequired,
   url: PropTypes.string.isRequired
}
