import React from 'react'
import {IoMdArrowDropright} from "react-icons/io";

const PictureCarouselCard = (props) => {
  return (
    <div className='w-full h-72 relative px-4 overflow-hidden'>
        <div className='w-full h-full relative'>
            <img src={props.image} alt={props.title} 
            className='w-full h-full object-cover transition duration-700 ease-in-out rounded-lg' />
            <div className='w-full h-full absolute inset-0 rounded-lg' 
            style={{
                background : "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05)50%, rgba(0, 0, 0, 0.05) 85% )"
                }}>

            </div>
            <div className='absolute w-full left-8 bottom-2 text-white'>
                <h4 className='z-10'>{props.title}</h4>
                <h6 className='z-10 flex items-center'>{props.places} <IoMdArrowDropright/></h6>
            </div>
        </div>
    </div>
  )
}

export default PictureCarouselCard