import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import ReactStars from "react-rating-stars-component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

// components
import MenuCollection from "./MenuCollection";
import MenuSimilarRestaurantCard from "./MenuSimilarRestaurantCard";
import ReviewCard from "../Reviews/ReviewCard";
import MapView from "./MapView";

const Overview = () => {
  const [restaurant, setRestaurant] = useState({
    _id: "124ksjf435245jv34fg3",
    isPro: true,
    isOff: true,
    name: "Biriyani Blues",
    restaurantReviewValue: "3.7",
    cuisine: [
      "South Indian",
      "Chinese",
      "Biriyani",
      "Kebab",
      "Street Food",
      "Fast Food",
      "Desserts",
      "North Indian",
    ],
    averageCost: "450",
  });
  const [menuImages, setMenuImages] = useState([
    "https://b.zmtcdn.com/data/menus/931/931/d40e86a957d1ed6e6fabe5a67a161904.jpg",
    "https://b.zmtcdn.com/data/menus/931/931/36f8a3b9e5dbf6435f903c9a8745bcc8.jpg",
    "https://b.zmtcdn.com/data/menus/931/931/8d6623791860b054953b6c2c14d61bcb.jpg",
    "https://b.zmtcdn.com/data/menus/931/931/6d462a04051c0eabb0067149aa84cc64.jpg",
  ]);
  const [reviews, setReviews] = useState([
    {
      rating: 3.5,
      isRestaurantReview: false,
      createdAt: "Tue Nov 08 2022 11:08:19 GMT+0530 (India Standard Time)",
      reviewText: "Nice Experience"
    },
    {
      rating: 4.5,
      isRestaurantReview: false,
      createdAt: "Tue Nov 08 2022 09:30:19 GMT+0530 (India Standard Time)",
      reviewText: "Very Good Experience"
    }
  ]);
  const { id } = useParams;

  const slideConfig = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
    },
    modules: [Navigation],
    className: "diningSwiper",
    navigation: true,
  };

  const getLatLong = (mapAddress) => {
    return mapAddress?.split(",").map((item) => parseFloat(item));
  };

  return (
    <div className="flex flex-col gap-5 md:flex-row relative">
      <div className="w-full md:w-8/12">
        <h2 className="font-semibold text-lg md:text-xl my-4">
          About this place
        </h2>
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-medium">Menu</h4>
          <Link to={`/restaurant/${id}/menu`}>
            <span className="flex items-center gap-1 text-zomato-400">
              See all menu <IoMdArrowDropright />
            </span>
          </Link>
        </div>

        <div className="flex flex-wrap gap-3 my-4">
          <MenuCollection
            menuTitle="Menu"
            pages={menuImages.length}
            images={menuImages}
          />
        </div>

        <h4 className="text-lg font-medium my-4">Cuisines</h4>
        <div className="flex flex-wrap gap-2">
          {restaurant?.cuisine.map((cuisineName, index) => (
            <span
              key={index}
              className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full"
            >
              {cuisineName}
            </span>
          ))}
        </div>

        <div className="my-4">
          <h4 className="text-lg font-medium">Average Cost</h4>
          <h6>₹{restaurant.averageCost} for one order (approx.)</h6>
          <small className="text-gray-500">
            Exclusive of applicable taxes and charges, if any.
          </small>
        </div>

        <div className="flex flex-col-reverse">
          <div className="my-4">
            <h4 className="text-lg font-medium">
              {restaurant.name} Reviews
            </h4>
            {/* <ReactStars
              count={5}
              onChange={(newRating) => console.log(newRating)}
              size={24}
              activeColor="#ffd700"
            /> */}
            {reviews.map((review, index) => (
              <ReviewCard {...review} key={index} />
            ))}
          </div>

          <div className="my-4">
            <h4 className="text-lg font-medium">Similar Restaurants</h4>
            <div>
              <Swiper {...slideConfig}>
              <SwiperSlide>
            <MenuSimilarRestaurantCard 
            image="https://b.zmtcdn.com/data/pictures/chains/0/59680/030bb0ac1ded5f7e1b6558b5289c4b45_o2_featured_v2.jpg"
            title="Paradise Biryani"/>
          </SwiperSlide>

          <SwiperSlide>
            <MenuSimilarRestaurantCard 
            image="https://b.zmtcdn.com/data/pictures/chains/6/18613656/210f70f0baecddad033670d733634d07_o2_featured_v2.jpg"
            title="Sharief Bhai"/>
          </SwiperSlide>

          <SwiperSlide>
            <MenuSimilarRestaurantCard 
            image="https://b.zmtcdn.com/data/pictures/8/19882628/c1fc8a4e56027805965c694bb752f089_o2_featured_v2.jpg"
            title="Sri Udupi Food Hub"/>
          </SwiperSlide>
          <SwiperSlide>
            <MenuSimilarRestaurantCard 
            image="https://b.zmtcdn.com/data/pictures/chains/0/55400/dece41a2ffa479cc6f19d5632f180b2d_o2_featured_v2.jpg"
            title="Paakashala"/>
          </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="my-4 w-full md:hidden flex flex-col gap-4">
          <MapView 
          title="McDonald's" 
          phno='+911234512345' 
          mapLocation = {getLatLong("12.930288992056179, 77.58311132165434")}
          latAndLong={"12.930288992056179, 77.58311132165434"}
          address="1218/A, 34th Cross, 4th T Block, Jayanagar, Bangalore"
      />
          </div>
        </div>
      </div>
      <aside
        style={{ height: "fit-content" }}
        className="hidden md:flex md:w-4/12 sticky rounded-xl top-20 bg-white p-3 shadow-md flex-col gap-4"
      >
         <MapView 
         title="McDonald's" 
         phno='+911234512345' 
         mapLocation = {getLatLong("12.930288992056179, 77.58311132165434")}
         latAndLong={"12.930288992056179, 77.58311132165434"}
        address="1218/A, 34th Cross, 4th T Block, Jayanagar, Bangalore"
      />
      </aside>
    </div>
  );
};

export default Overview;