import React, {useState, useEffect } from 'react';

//components
import DeliveryCarousel from './DeliveryCarousel';
import RestaurantCard from "../RestaurantCard";

//redux
import { useSelector } from 'react-redux';


const Delivery = () => {

  const [restaurantList, setrestaurantList] = useState([]);

  const reduxState = useSelector((globalState) => globalState.restaurant.restaurants)

  useEffect(() => {
    reduxState && setrestaurantList(reduxState);
  },[reduxState]);
  
  return (
  <>
    <DeliveryCarousel/>
    <h1 className='text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold'>
    Delivery Restaurants in Bengaluru
    </h1>
    <div className='grid gap-0 md:gap-2 md:grid-cols-2 grid-cols-1 lg:grid-cols-3'>
        {restaurantList.map((restaurant) => (
        <RestaurantCard {...restaurant} key={restaurant._id} />
      ))} 
    </div>
  </>
  )
}

export default Delivery

// {
//   _id: "124ksjf4344555jc56fg5",
//   isPro: true,
//   isOff: true,
//   name: "Empire Restaurant",
//   restaurantReviewValue: "4.0",
//   cuisine: ["North Indian", "Biryani", "Kebab"," Chinese", "South Indian", "Mughlai", "Beverages"],
//   averageCost : "200",
// },
// {
//   _id: "124ksjf435245jc56fg5",
//   isPro: true,
//   isOff: false,
//   name: "Domino's Pizza",
//   restaurantReviewValue: "3.6",
//   cuisine: ["Pizza","Fast Food", "Desserts","Beverages"],
//   averageCost : "300",
// },
// {
//   _id: "124ksjf4357745jc56fg5",
//   isPro: true,
//   isOff: true,
//   name: "Aromas Of Biryani",
//   restaurantReviewValue: "4.0",
//   cuisine: ["Biryani", "North Indian", "Chinese", "Mughlai", "Kebab", "Seafood", "Ice Cream", "Beverages"],
//   averageCost : "300",
// },