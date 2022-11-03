import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import DeliveryCategoryCard from "./DeliveryCategoryCard";

const DeliveryCarousel = () => {

  const categories =[
    {
        image:"https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
        title:"Chicken",
    },
    {
        image:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
        title:"Biriyani",
    },
    {
        image:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
        title:"Pizza",
    },
    {
        image:"https://b.zmtcdn.com/data/dish_images/838c7929dcc09479600f118c9088af7b1614910398.png",
        title:"Bowl",
    },
    {
        image:"https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
        title:"Paratha",
    },
    {
        image:"https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
        title:"Thali",
    },
    {
        image:"https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
        title:"Dosa",
    },
    {
        image:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
        title:"Burger",
    },
    {
        image:"https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
        title:"Sandwich",
    },
    // {
    //     image:"",
    //     title:"",
    // },
    // {
    //     image:"",
    //     title:"",
    // },
    // {
    //     image:"",
    //     title:"",
    // },
  ]
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
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
    modules: [Navigation],
    className: "mySwiper",
    navigation: true,
  };
  return (
    <>
    <h1 className='mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold mb-5'>
        Inspiration for your first Order
    </h1>
    <div className='lg:hidden grid sm:grid-cols-3 md:grid-cols-4 gap-3 lg:gap-0 '>
        {categories.map((food) => (
            <DeliveryCategoryCard {...food} />
        ))}
    </div>
    <div className='hidden lg:block'>
        <Swiper {...slideConfig}>
         {categories.map((food) => (
            <SwiperSlide>
                <DeliveryCategoryCard {...food} />
            </SwiperSlide>
         ))}
        </Swiper>
    </div>
    </>
  )
}

export default DeliveryCarousel