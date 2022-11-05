import React, {useState} from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

//components
import PictureCarouselCard from'../Dining/PictureCarouselCard';

const NightLifeCarousel = () => {

    const [Dining] = useState([
        {
            image: 'https://b.zmtcdn.com/data/collections/f6d732dc7432ad6e80a309cce6f0745a_1665640262.jpg',
            title: "Great Buffets",
            places:"16 Places",
        },
        {
            image: 'https://b.zmtcdn.com/data/collections/b90996d69bfe8d8c7e36d3a56893df74_1657000323.jpg',
            title: "Picturesque Cafes",
            places:"10 Places",
        },
        {
            image: 'https://b.zmtcdn.com/data/collections/4c8e5746cdee9c932ebc99ae999520cf_1665640799.jpg',
            title: "Romantic Dinings",
            places:"11 Places",
        },
        {
            image: 'https://b.zmtcdn.com/data/collections/8a5d8298d4f218d1ae8923419f1af2fb_1667298875.jpg',
            title: "World vegan Month",
            places:"17 Places",
        },
        {
            image: 'https://b.zmtcdn.com/data/collections/06ec1c3471d9d7f7047298eb9ef2de56_1665565737.jpg',
            title: "Best MicroBreweries",
            places:"19 Places",
        },
        {
            image: 'https://b.zmtcdn.com/data/collections/d9eea3ef785def3a1d4e19c89bf19b11_1660816040.jpg',
            title: "World On Your Plate",
            places:"8 Places",
        },
        {
            image: 'https://b.zmtcdn.com/data/collections/1d1e838de3c921a6bdacb382a3d01c62_1667458986.jpg',
            title: "New in Town",
            places:"12 Places",
        },
    ])

    const slideConfig = {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        },
        modules: [Navigation],
        className: "diningSwiper",
        navigation: true,
      };

  return (
    <div className='w-full'>
        <Swiper {...slideConfig}>
         {Dining.map((item, index) => (
            <SwiperSlide key={index}>
                <PictureCarouselCard {...item} />
            </SwiperSlide>
         ))}
        </Swiper>
    </div>
  )
};

export default NightLifeCarousel;