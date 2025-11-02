// import React from 'react'
// import './verify.css'
// import axios from 'axios'
// import {useContext} from 'react'
// import {StoreContext} from '../../context/StoreContext'
// import { useNavigate, useSearchParams } from 'react-router-dom'

// const verify = () => {
//     const [searchParams, setSearchParams] = useSearchParams();
//     const success=searchParams.get("success");
//     const orderId=searchParams.get("orderId");
//    const {url}=useContext(StoreContext);  
//    const navigate=useNavigate();
//    const verifyPayment=async()=>{
//        const response=await axios.post(url+"/api/order/verify",{orderId,success});
//        if(response.data.success){
//            navigate("/myorders")
//        }
//        else{
//         navigate("/")
//        }    
    
//    }
   
//   return (
//     <div className='verify'>
//       <div className="spinner"></div>
//     </div>
//   )
// }

// export default verify






// import React, { useEffect, useContext } from 'react';
// import './verify.css';
// import axios from 'axios';
// import { StoreContext } from '../../context/StoreContext';
// import { useNavigate, useSearchParams } from 'react-router-dom';

// const verify = () => {
//   const [searchParams] = useSearchParams();
//   const success = searchParams.get("success");
//   const orderId = searchParams.get("orderId");
//   const { url } = useContext(StoreContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const verifyPayment = async () => {
//       const response = await axios.post(url + "/api/order/verify", { orderId, success });
//       if (response.data.success) {
//         navigate("/myorders");
//       } else {
//         navigate("/");
//       }
//     };

//     if (orderId) verifyPayment();
//   }, [orderId, success, url, navigate]);

//   return (
//     <div className='verify'>
//       <div className="spinner">
//         hi
//       </div>
//     </div>
//   );
// };

// export default verify;






import React, { useEffect, useContext } from 'react';
import './verify.css';
import axios from 'axios';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Verify = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyPayment = async () => {
      const response = await axios.post(url + "/api/order/verify", { orderId, success });
      if (response.data.success) {
        navigate("/myorders");
      } else {
        navigate("/");
      }
    };

    if (orderId) verifyPayment();
  }, [orderId, success, url, navigate]);

  return (
    <div className='verify'>
      <div className="spinner">
      </div>
    </div>
  );
};

export default Verify;
