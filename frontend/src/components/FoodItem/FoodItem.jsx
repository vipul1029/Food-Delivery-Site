//final code

// import React,{createContext,useState,useContext} from 'react'
// import './FoodItem.css'
// import { assets } from '../../assets/assets'
// import { StoreContext } from '../../context/StoreContext'

// const FoodItem = ({id,name,price,description,image}) => {

//     const { cartItems, addToCart, removeFromCart ,url} = useContext(StoreContext);


//   return (
//     <div className='food-item'>
//       <div className="food-item-img-container">
//         <img className='food-item-image' src={url+"/images/"+image} alt="" />
//         {
//             !cartItems[id]
//             ?<img className='add' onClick={()=>addToCart(id)}src={assets.add_icon_white} alt=""/>
// : <div  className='food-item-counter'>
// <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
// <p>{cartItems[id]}</p>
// <img onClick={()=>addToCart(id)} src={assets.add_icon_green}alt="" />
// </div>

// }
//       </div>
//       <div className="food-item-info">
//         <div className="food-item-name-rating">
//             <p>{name}</p>
//             <img src={assets.rating_starts} alt=""/>
//         </div>
//       <p className="food-item-desc">{description}</p>
//     <p className="food-item-price">${price}</p>
//       </div>
//     </div>
//   )
// }

// export default FoodItem























import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

  const getImageSrc = (img) => {
    if (!img) return '/placeholder.png';
    // already a full URL (Cloudinary or absolute)
    if (img.startsWith('http://') || img.startsWith('https://')) return img;
    // if image stored as "uploads/xxx.jpg" or "/uploads/xxx.jpg"
    if (img.startsWith('uploads/') || img.startsWith('/uploads/')) {
      return `${url}/${img.replace(/^\/+/, '')}`;
    }
    // if image stored as "images/xxx.jpg" or "/images/xxx.jpg"
    if (img.startsWith('images/') || img.startsWith('/images/')) {
      return `${url}/${img.replace(/^\/+/, '')}`;
    }
    // otherwise treat as filename and try both common static endpoints (uploads then images)
    return `${url}/uploads/${img}`;
  };

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img
          className='food-item-image'
          src={getImageSrc(image)}
          alt={name || 'food'}
          onError={(e) => { e.currentTarget.src = '/placeholder.png'; }}
        />
        {
          !cartItems[id] ? (
            <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
          ) : (
            <div className='food-item-counter'>
              <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
              <p>{cartItems[id]}</p>
              <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
          )
        }
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
