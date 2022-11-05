import React, {useState} from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

//components
import PictureCarouselCard from'../Dining/PictureCarouselCard';

const DiningCarousel = () => {

    const [Dining] = useState([
        {
            image: 'https://b.zmtcdn.com/data/pictures/7/19672427/fab0f327a0193957ee122f8c72c4d2f9_featured_v2.jpg?output-format=webp',
            title: "Ironhill Bengaluru",
            places:"16 Places",
        },
        {
            image: 'https://b.zmtcdn.com/data/pictures/9/18843699/805a549b3964b3944ebd00504a2bf606_featured_v2.jpg?output-format=webp',
            title: "The Bier Library",
            places:"10 Places",
        },
        {
            image: 'https://b.zmtcdn.com/data/pictures/9/18627369/5b9284ed29595bbf65bb4d85de210448_featured_v2.jpg?output-format=webp',
            title: "Biergarten",
            places:"11 Places",
        },
        {
            image: 'https://b.zmtcdn.com/data/pictures/2/58882/4e7bd603c2962c271a63af57108bf73b_featured_v2.jpg?output-format=webp',
            title: "Byg Brewski Brewing Company",
            places:"17 Places",
        },
        {
            image: 'https://b.zmtcdn.com/data/pictures/5/18537585/d971e1b240e2f40ca903aa1b51252fb3_featured_v2.jpg',
            title: "The Reservoire",
            places:"19 Places",
        },
        {
            image: 'https://b.zmtcdn.com/data/pictures/6/18853706/af9dd4cd1216093fb442bca38f4bf174_featured_v2.jpg',
            title: "Brahma Brews",
            places:"8 Places",
        },
        {
            image: 'https://b.zmtcdn.com/data/pictures/8/20387248/c4fdd428daf83b0a0c82481d17317274_featured_v2.jpg',
            title: "Travellers Bungalow",
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

export default DiningCarousel