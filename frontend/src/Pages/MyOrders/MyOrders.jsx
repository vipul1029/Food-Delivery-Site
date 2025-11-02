import React from 'react'
import './MyOrders.css'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useContext } from 'react'
import { assets } from '../../assets/assets'

const MyOrders = () => {
      const {url,token}=useContext(StoreContext);
    const [data,setData]=useState([]);
  
    const fetchOrders=async()=>{
        //const response=await axios.post(url+"/api/order/userorders",{},{headers:{token}});
        const response = await axios.post(url + "/api/order/userorders", {}, { headers: { Authorization: `Bearer ${token}` } });

        setData(response.data.data || []);
    }
    useEffect(()=>{
        if(token){
        fetchOrders();
    }
    },[token])

  return (
    <div className='my-orders'>
        <h2>My Orders</h2>
        <div className="container">
            {data.map((order,index)=>{
                return(
                    <div key={index} className="my-orders-order">
   <img src={assets.parcel_icon} alt="" />
   <p>{order.items.map((item,index)=>{
    if(index===order.items.length-1){
        return item.name+" x "+item.quantity;
    }
    else{
        return item.name+" x "+item.quantity+", ";
    }
   })}</p>
   <p>${order.amount}</p>
   <p>Items:{order.items.length}</p>
   <p><span >&#x25cf;</span><b>{order.status}</b></p>
  <button onClick={fetchOrders}>Track Order</button>
                    </div>
                )
            })}
        </div>
      
    </div>
  )
}

export default MyOrders












// import React, { useState, useEffect, useContext } from 'react';
// import './MyOrders.css';
// import axios from 'axios';
// import { StoreContext } from '../../context/StoreContext';
// import { assets } from '../../assets/assets';

// const MyOrders = () => {
//   const [data, setData] = useState([]);
//   const { url, token } = useContext(StoreContext);

//   const fetchOrders = async () => {
//     try {
//       const response = await axios.post(
//         url + "/api/order/userorders",
//         {}, // data
//         { headers: { token } } // FIXED: headers
//       );
//       setData(response.data.data || []);
//     } catch (err) {
//       console.log("Error fetching orders:", err);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, [token]);

//   return (
//     <div className='my-orders'>
//       <h2>My Orders</h2>
//       <div className="container">
//         {data.map((order, index) => (
//           <div key={index} className="my-orders-order">
//             <img src={assets.parcel_icon} alt="" />
//             <p>{order.items.map((item, index) =>
//               index === order.items.length - 1
//                 ? item.name + " x " + item.quantity
//                 : item.name + " x " + item.quantity + ", "
//             )}</p>
//             <p>${order.amount}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyOrders;
