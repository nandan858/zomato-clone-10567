import React from 'react';

const NutritionCarouselCard = ({image, title}) => {
  return (
  <div className='h-full '>
    <div className='rounded-md w-24 h-full px-3 md:px-4 md:w-56'>
        <img src={image} alt={title}
        className='w-full h-full object-cover rounded-t-md'/>
    </div>
    <div>
        <h3 className='text-sm my-1 text-center font-light md:text-xl'>
            {title}
        </h3>
    </div> 
  </div>
  )
}

export default NutritionCarouselCard