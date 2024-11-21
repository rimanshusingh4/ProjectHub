import React from 'react'
import heartIcon from '../../public/heart.svg';

const Card_Static = ({ imgSrc, title, description, altText }) => {
    return (
      <div className='border w-48 h-48 flex flex-col justify-center items-center gap-3 font-osw bg-white shadow-md rounded-xl cursor-pointer  duration-200 hover:scale-105'>
        <img className='w-16 h-16 rounded-full' src={imgSrc} alt={altText} />
        <h1 className='text-md font-bold text-center'>{title}</h1>
        {description && (
          <p className='text-md flex items-center'>
            {heartIcon && <img className='w-5 h-5 mr-2' src={heartIcon} alt='Favorites' />}
            {description}
          </p>
        )}
      </div>
    );
  };

export default Card_Static