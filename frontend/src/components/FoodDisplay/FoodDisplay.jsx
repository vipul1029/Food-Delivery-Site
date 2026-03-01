// import React, {useContext,useState } from 'react'
// import './FoodDisplay.css'
// import { StoreContext } from '../../context/StoreContext'
// import FoodItem from '../FoodItem/FoodItem'

// const FoodDisplay = ({category}) => {
//     const {food_list}=useContext(StoreContext)
//   return (
//     <div className='food-display' id='food-display'>
//       <h2>Top dishes near you</h2>
//       <div className="food-display-list">
//         {food_list.map((item,index)=>{
//       if(category==="All" || category===item.category){
//         return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
//  }
//   })}
      
            
//       </div>
//     </div>
//   )
// }

// export default FoodDisplay









import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // Ensure we have an array (safe default)
  const foods = Array.isArray(food_list) ? food_list : [];

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {foods
          .filter((item) => category === "All" || category === item.category)
          .map((item) => (
            <FoodItem
              key={item._id || item.name} // use stable id; fallback to name if _id missing
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
