// import {createContext, useState } from "react"

// import { useEffect } from "react"
// import axios from "axios"

// export const StoreContext=createContext(null)
// const StoreContextProvider=(props)=>{
    
// const[cartItems,setCartItems]=useState({});

// const url="http://localhost:4000"
// const [token,setToken]=useState("");
// const [food_list,setFoodList]=useState([]);
// const addToCart= async (itemId)=>{
// if(!cartItems[itemId]){
//     setCartItems((prev)=>({...prev,[itemId]:1}))
// }
// else{
//     setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
// }
// if(token){
//     await axios.post(url+"/api/cart/add",{itemId},{headers:{token:token}})
//     }
// }
// const removeFromCart=async (itemId)=>{
//     setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
//     if(token){
//         await axios.post(url+"/api/cart/remove",{itemId},{headers:{token:token}})
//     }
// }
// const getTotalCartAmount=()=>{
//     let totalAmount=0;
//     for(const item in cartItems){
//         if(cartItems[item]>0){
//             let itemInfo=food_list.find((product)=>product._id === item);
//             totalAmount += itemInfo.price * cartItems[item];
//         }
//     }
//     return totalAmount;
// }
// const fetchFoodList=async()=>{
//     const response=await axios.get(url+"/api/food/list");
//    setFoodList(response.data.data)
  
//   }

// const loadCartData=async(token)=>{
//     const response=await axios.get(url+"/api/cart/get",{},{headers:{token}});
//     setCartItems(response.data.data);
// }


// useEffect(() => {

//  async function loadData() {
// await fetchFoodList();
//       if(localStorage.getItem("token")) {
//     setToken(localStorage.getItem("token"))
//     await loadCartData(localStorage.getItem("token"));
//  }
//   }
//   loadData();
//   }, []);

//     const contextValue={
//   food_list,
//   cartItems,
//   setCartItems,
//   addToCart,
//   removeFromCart,
// getTotalCartAmount,
// url,
// token,
// setToken
//     }
    
//     return(
//         <StoreContext.Provider value={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     )
// }
// export default StoreContextProvider







// import { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState({});
//   const [food_list, setFoodList] = useState([]);
//   const [token, setToken] = useState("");

//   const url = "http://localhost:4000";

//   // Fetch food list from backend
//   const fetchFoodList = async () => {
//     try {
//       const response = await axios.get(url + "/api/food/list");
//       setFoodList(response.data.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // Fetch user cart from backend
//   const loadCartData = async (userToken) => {
//     if (!userToken) return;
//     try {
//       const response = await axios.get(url + "/api/cart/get", {
//         headers: { token: userToken },
//       });
//       if (response.data.success) {
//         setCartItems(response.data.data);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // Add item to cart
//   const addToCart = async (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] ? prev[itemId] + 1 : 1 }));

//     if (token) {
//       try {
//         await axios.post(
//           url + "/api/cart/add",
//           { itemId },
//           { headers: { token: token } }
//         );
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   };

//   // Remove item from cart
//   const removeFromCart = async (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
//     }));

//     if (token) {
//       try {
//         await axios.post(
//           url + "/api/cart/remove",
//           { itemId },
//           { headers: { token: token } }
//         );
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   };

//   // Get total cart amount
//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         const itemInfo = food_list.find((product) => product._id === item);
//         if (itemInfo) totalAmount += itemInfo.price * cartItems[item];
//       }
//     }
//     return totalAmount;
//   };

//   // Load initial data
//   useEffect(() => {
//     const loadData = async () => {
//       await fetchFoodList();

//       const savedToken = localStorage.getItem("token");
//       if (savedToken) {
//         setToken(savedToken);
//         await loadCartData(savedToken);
//       }
//     };
//     loadData();
//   }, []);

//   const contextValue = {
//     food_list,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//     url,
//     token,
//     setToken,
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;






// import { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState({});
//   const [food_list, setFoodList] = useState([]);
//   const [token, setToken] = useState("");

//   const url = "http://localhost:4000";

//   // Fetch food list from backend
//   const fetchFoodList = async () => {
//     try {
//       const response = await axios.get(url + "/api/food/list");
//       setFoodList(response.data.data);
//     } catch (err) {
//       console.log("Error fetching food list:", err);
//     }
//   };

//   // Load cart from backend using token
//   const loadCartData = async (userToken) => {
//     if (!userToken) return;
//     try {
//       const response = await axios.get(url + "/api/cart/get", {
//         headers: { token: userToken },
//       });
//       if (response.data.success) {
//         setCartItems(response.data.data);
//       }
//     } catch (err) {
//       console.log("Error loading cart:", err);
//     }
//   };

//   // Add item to cart
//   const addToCart = async (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
//     }));

//     if (token) {
//       try {
//         await axios.post(
//           url + "/api/cart/add",
//           { itemId },
//           { headers: { token } }
//         );
//       } catch (err) {
//         console.log("Error adding to cart:", err);
//       }
//     }
//   };

//   // Remove item from cart
//   const removeFromCart = async (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
//     }));

//     if (token) {
//       try {
//         await axios.post(
//           url + "/api/cart/remove",
//           { itemId },
//           { headers: { token } }
//         );
//       } catch (err) {
//         console.log("Error removing from cart:", err);
//       }
//     }
//   };

//   // Get total cart amount
//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         const itemInfo = food_list.find((product) => product._id === item);
//         if (itemInfo) totalAmount += itemInfo.price * cartItems[item];
//       }
//     }
//     return totalAmount;
//   };

//   // Initial load: food list and cart
//   useEffect(() => {
//     const loadData = async () => {
//       await fetchFoodList();

//       const savedToken = localStorage.getItem("token");
//       if (savedToken) {
//         setToken(savedToken);
//         await loadCartData(savedToken);
//       }
//     };
//     loadData();
//   }, []);

//   const contextValue = {
//     food_list,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//     url,
//     token,
//     setToken,
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;









// import { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState({});
//   const [food_list, setFoodList] = useState([]);
//   const [token, setToken] = useState("");

//   const url = "http://localhost:4000";

//   // Fetch food list from backend
//   const fetchFoodList = async () => {
//     try {
//       const response = await axios.get(url + "/api/food/list");
//       setFoodList(response.data.data);
//     } catch (err) {
//       console.log("Error fetching food list:", err);
//     }
//   };

//   // Load cart from backend using token
//   const loadCartData = async (userToken) => {
//     if (!userToken) return;
//     try {
//       const response = await axios.get(url + "/api/cart/get", {
//         headers: { token: userToken },
//       });
//       if (response.data.success) {
//         setCartItems(response.data.data);
//       }
//     } catch (err) {
//       console.log("Error loading cart:", err);
//     }
//   };

//   // Add item to cart
//   const addToCart = async (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
//     }));

//     if (token) {
//       try {
//         await axios.post(
//           url + "/api/cart/add",
//           { itemId },
//           { headers: { token } }
//         );
//       } catch (err) {
//         console.log("Error adding to cart:", err);
//       }
//     }
//   };

//   // Remove item from cart
//   const removeFromCart = async (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
//     }));

//     if (token) {
//       try {
//         await axios.post(
//           url + "/api/cart/remove",
//           { itemId },
//           { headers: { token } }
//         );
//       } catch (err) {
//         console.log("Error removing from cart:", err);
//       }
//     }
//   };

//   // Get total cart amount
//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         const itemInfo = food_list.find((product) => product._id === item);
//         if (itemInfo) totalAmount += itemInfo.price * cartItems[item];
//       }
//     }
//     return totalAmount;
//   };

//   // Initial load: food list and cart
//   useEffect(() => {
//     const loadData = async () => {
//       await fetchFoodList();

//       const savedToken = localStorage.getItem("token");
//       if (savedToken) {
//         setToken(savedToken);
//         await loadCartData(savedToken);
//       }
//     };
//     loadData();
//   }, []);

//   const contextValue = {
//     food_list,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//     url,
//     token,
//     setToken,
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;








// import { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState({});
//   const [food_list, setFoodList] = useState([]);
//   const [token, setToken] = useState("");

//   const url = "http://localhost:4000";

//   // Fetch food list from backend
//   const fetchFoodList = async () => {
//     try {
//       const response = await axios.get(url + "/api/food/list");
//       setFoodList(response.data.data);
//     } catch (err) {
//       console.log("Error fetching food list:", err);
//     }
//   };

//   // Load cart from backend using token
//   const loadCartData = async (userToken) => {
//     if (!userToken) return;
//     try {
//       // ✅ Correct headers placement for GET request
//       const response = await axios.get(url + "/api/cart/get", {
//         headers: { token: userToken },
//       });
//       if (response.data.success) {
//         setCartItems(response.data.data);
//       }
//     } catch (err) {
//       console.log("Error loading cart:", err);
//     }
//   };

//   // Add item to cart
//   const addToCart = async (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
//     }));

//     if (token) {
//       try {
//         await axios.post(
//           url + "/api/cart/add",
//           { itemId },
//           { headers: { token } } // POST headers are fine
//         );
//       } catch (err) {
//         console.log("Error adding to cart:", err);
//       }
//     }
//   };

//   // Remove item from cart
//   const removeFromCart = async (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
//     }));

//     if (token) {
//       try {
//         await axios.post(
//           url + "/api/cart/remove",
//           { itemId },
//           { headers: { token } } // POST headers are fine
//         );
//       } catch (err) {
//         console.log("Error removing from cart:", err);
//       }
//     }
//   };

//   // Get total cart amount
//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         const itemInfo = food_list.find((product) => product._id === item);
//         if (itemInfo) totalAmount += itemInfo.price * cartItems[item];
//       }
//     }
//     return totalAmount;
//   };

//   // Initial load: food list and cart
//   useEffect(() => {
//     const loadData = async () => {
//       await fetchFoodList();

//       const savedToken = localStorage.getItem("token");
//       if (savedToken) {
//         setToken(savedToken);
//         await loadCartData(savedToken); // ✅ headers fixed in loadCartData
//       }
//     };
//     loadData();
//   }, []);

//   const contextValue = {
//     food_list,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//     url,
//     token,
//     setToken,
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;






// import { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState({});
//   const [food_list, setFoodList] = useState([]);
//   const [token, setToken] = useState("");

//   const url = "http://localhost:4000";

//   // Fetch food list from backend
//   const fetchFoodList = async () => {
//     try {
//       const response = await axios.get(url + "/api/food/list");
//       setFoodList(response.data.data);
//     } catch (err) {
//       console.log("Error fetching food list:", err);
//     }
//   };

//   // Load cart from backend using token
//   const loadCartData = async (userToken) => {
//     if (!userToken) return;
//     try {
//       const response = await axios.get(url + "/api/cart/get", {
//         headers: { Authorization: `Bearer ${userToken}` } // ✅ Proper header for auth
//       });
//       if (response.data.success) {
//         setCartItems(response.data.data);
//       }
//     } catch (err) {
//       console.log("Error loading cart:", err);
//     }
//   };

//   // Add item to cart
//   const addToCart = async (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
//     }));

//     if (token) {
//       try {
//         await axios.post(
//           url + "/api/cart/add",
//           { itemId },
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//       } catch (err) {
//         console.log("Error adding to cart:", err);
//       }
//     }
//   };

//   // Remove item from cart
//   const removeFromCart = async (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
//     }));

//     if (token) {
//       try {
//         await axios.post(
//           url + "/api/cart/remove",
//           { itemId },
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//       } catch (err) {
//         console.log("Error removing from cart:", err);
//       }
//     }
//   };

//   // Get total cart amount
//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         const itemInfo = food_list.find((product) => product._id === item);
//         if (itemInfo) totalAmount += itemInfo.price * cartItems[item];
//       }
//     }
//     return totalAmount;
//   };

//   // Initial load: food list and cart
//   useEffect(() => {
//     const loadData = async () => {
//       await fetchFoodList();

//       const savedToken = localStorage.getItem("token");
//       if (savedToken) {
//         setToken(savedToken);
//         await loadCartData(savedToken);
//       }
//     };
//     loadData();
//   }, []);

//   const contextValue = {
//     food_list,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//     url,
//     token,
//     setToken,
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;











// import { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState({});
//   const [food_list, setFoodList] = useState([]);
//   const [token, setToken] = useState("");

//   const url = "http://localhost:4000";

//   // Decode JWT to check expiration
//   const isTokenValid = (token) => {
//     if (!token) return false;
//     try {
//       const payload = JSON.parse(atob(token.split(".")[1]));
//       const now = Math.floor(Date.now() / 1000);
//       return payload.exp && payload.exp > now;
//     } catch (err) {
//       console.log("Invalid token:", err);
//       return false;
//     }
//   };

//   // Fetch food list from backend
//   const fetchFoodList = async () => {
//     try {
//       const response = await axios.get(url + "/api/food/list");
//       setFoodList(response.data.data);
//     } catch (err) {
//       console.log("Error fetching food list:", err);
//     }
//   };

//   // Load cart from backend using token
//   const loadCartData = async (userToken) => {
//     if (!userToken) return;
//     try {
//       const response = await axios.get(url + "/api/cart/get", {
//         headers: { Authorization: `Bearer ${userToken}` },
//       });
//       if (response.data.success) {
//         setCartItems(response.data.data);
//       } else {
//         console.log("Error loading cart:", response.data.message);
//       }
//     } catch (err) {
//       console.log("Error loading cart:", err);
//     }
//   };

//   // Add item to cart
//   const addToCart = async (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
//     }));

//     if (token && isTokenValid(token)) {
//       try {
//         await axios.post(
//           url + "/api/cart/add",
//           { itemId },
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//       } catch (err) {
//         console.log("Error adding to cart:", err);
//       }
//     }
//   };

//   // Remove item from cart
//   const removeFromCart = async (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
//     }));

//     if (token && isTokenValid(token)) {
//       try {
//         await axios.post(
//           url + "/api/cart/remove",
//           { itemId },
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//       } catch (err) {
//         console.log("Error removing from cart:", err);
//       }
//     }
//   };

//   // Get total cart amount
//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         const itemInfo = food_list.find((product) => product._id === item);
//         if (itemInfo) totalAmount += itemInfo.price * cartItems[item];
//       }
//     }
//     return totalAmount;
//   };

//   // Load initial data
//   useEffect(() => {
//     const loadData = async () => {
//       await fetchFoodList();

//       const savedToken = localStorage.getItem("token");
//       if (savedToken && isTokenValid(savedToken)) {
//         setToken(savedToken);
//         await loadCartData(savedToken);
//       } else {
//         // Token invalid or expired
//         localStorage.removeItem("token");
//         setToken("");
//         setCartItems({});
//       }
//     };
//     loadData();
//   }, []);

//   const contextValue = {
//     food_list,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//     url,
//     token,
//     setToken,
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;






// import { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState({});
//   const [food_list, setFoodList] = useState([]);
//   const [token, setToken] = useState(localStorage.getItem("token") || "");

//   const url = "http://localhost:4000";

//   // Fetch food list
//   const fetchFoodList = async () => {
//     try {
//       const response = await axios.get(url + "/api/food/list");
//       setFoodList(response.data.data);
//     } catch (err) {
//       console.log("Error fetching food list:", err);
//     }
//   };

//   // Load cart from backend for logged-in user
//   const loadCartData = async (userToken) => {
//     if (!userToken) return;
//     try {
//       const response = await axios.get(url + "/api/cart/get", {
//         headers: { token: userToken },
//       });
//       if (response.data.success) setCartItems(response.data.data);
//     } catch (err) {
//       console.log("Error loading cart:", err);
//     }
//   };

//   // Add item to cart
//   const addToCart = async (itemId) => {
//     setCartItems((prev) => {
//       const updated = { ...prev, [itemId]: prev[itemId] ? prev[itemId] + 1 : 1 };
//       localStorage.setItem("cart", JSON.stringify(updated));
//       return updated;
//     });

//     if (token) {
//       try {
//         await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
//       } catch (err) {
//         console.log("Error adding to cart:", err);
//       }
//     }
//   };

//   // Remove item from cart
//   const removeFromCart = async (itemId) => {
//     setCartItems((prev) => {
//       const updated = { ...prev, [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0 };
//       localStorage.setItem("cart", JSON.stringify(updated));
//       return updated;
//     });

//     if (token) {
//       try {
//         await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
//       } catch (err) {
//         console.log("Error removing from cart:", err);
//       }
//     }
//   };

//   // Get total cart amount
//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         const itemInfo = food_list.find((product) => product._id === item);
//         if (itemInfo) totalAmount += itemInfo.price * cartItems[item];
//       }
//     }
//     return totalAmount;
//   };

//   // Initial load
//   useEffect(() => {
//     const loadData = async () => {
//       await fetchFoodList();

//       // Load token from localStorage
//       const savedToken = localStorage.getItem("token");
//       if (savedToken) {
//         setToken(savedToken);
//         await loadCartData(savedToken);
//       } else {
//         // If not logged in, load cart from localStorage
//         const savedCart = JSON.parse(localStorage.getItem("cart"));
//         if (savedCart) setCartItems(savedCart);
//       }
//     };
//     loadData();
//   }, []);

//   // Save token to localStorage whenever it changes
//   useEffect(() => {
//     if (token) localStorage.setItem("token", token);
//     else localStorage.removeItem("token");
//   }, [token]);

//   const contextValue = {
//     food_list,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//     url,
//     token,
//     setToken,
//   };

//   return <StoreContext.Provider value={contextValue}>{props.children}</StoreContext.Provider>;
// };

// export default StoreContextProvider;



















// import { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState({});
//   const [food_list, setFoodList] = useState([]);
//   const [token, setToken] = useState(localStorage.getItem("token") || "");

//   const url = "http://localhost:4000";

//   // Fetch food list
//   const fetchFoodList = async () => {
//     try {
//       const response = await axios.get(`${url}/api/food/list`);
//       setFoodList(response.data.data);
//     } catch (err) {
//       console.log("Error fetching food list:", err);
//     }
//   };

//   // Load cart data
//   const loadCartData = async (userToken) => {
//     if (userToken) {
//       try {
//         const response = await axios.get(`${url}/api/cart/get`, {
//           headers: { Authorization: `Bearer ${userToken}` },
//         });
//         if (response.data.success && response.data.data) {
//           setCartItems(response.data.data);
//         } else {
//           setCartItems({});
//         }
//       } catch (err) {
//         console.log("Error loading cart from backend:", err);
//         setCartItems({});
//       }
//     } else {
//       const savedCart = JSON.parse(localStorage.getItem("cart")) || {};
//       setCartItems(savedCart);
//     }
//   };

//   // Add item to cart
//   const addToCart = async (itemId) => {
//     setCartItems((prev) => {
//       const updated = { ...prev, [itemId]: prev[itemId] ? prev[itemId] + 1 : 1 };
//       if (!token) localStorage.setItem("cart", JSON.stringify(updated));
//       return updated;
//     });

//     if (token) {
//       try {
//         await axios.post(`${url}/api/cart/add`, { itemId }, { headers: { Authorization: `Bearer ${token}` } });
//       } catch (err) {
//         console.log("Error adding to cart:", err);
//       }
//     }
//   };

//   // Remove item from cart
//   const removeFromCart = async (itemId) => {
//     setCartItems((prev) => {
//       const updated = { ...prev, [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0 };
//       if (!token) localStorage.setItem("cart", JSON.stringify(updated));
//       return updated;
//     });

//     if (token) {
//       try {
//         await axios.post(`${url}/api/cart/remove`, { itemId }, { headers: { Authorization: `Bearer ${token}` } });
//       } catch (err) {
//         console.log("Error removing from cart:", err);
//       }
//     }
//   };

//   // Get total cart amount
//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         const itemInfo = food_list.find((product) => product._id === item);
//         if (itemInfo) totalAmount += itemInfo.price * cartItems[item];
//       }
//     }
//     return totalAmount;
//   };

//   // Initial load: food list + cart
//   useEffect(() => {
//     const loadData = async () => {
//       await fetchFoodList();
//       await loadCartData(token);
//     };
//     loadData();
//   }, [token]);

//   // Save token in localStorage whenever it changes
//   useEffect(() => {
//     if (token) localStorage.setItem("token", token);
//     else localStorage.removeItem("token");
//   }, [token]);

//   const contextValue = {
//     food_list,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//     url,
//     token,
//     setToken,
//   };

//   return <StoreContext.Provider value={contextValue}>{props.children}</StoreContext.Provider>;
// };

// export default StoreContextProvider;








//Final code final code

import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [food_list, setFoodList] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const url = "http://localhost:4000";

  // Fetch food list
  const fetchFoodList = async () => {
    try {
      const response = await axios.get(url + "/api/food/list");
      setFoodList(response.data.data);
    } catch (err) {
      console.log("Error fetching food list:", err);
    }
  };

  // Load cart: logged-in users get from backend, guests from localStorage
  const loadCartData = async (userToken) => {
    if (userToken) {
      try {
        const response = await axios.get(url + "/api/cart/get", {
          headers: { token: userToken },
        });
        if (response.data.success && response.data.data) {
          setCartItems(response.data.data);
        } else {
          setCartItems({});
        }
      } catch (err) {
        console.log("Error loading cart from backend:", err);
        setCartItems({});
      }
    } else {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || {};
      setCartItems(savedCart);
    }
  };

  // Add item to cart
  const addToCart = async (itemId) => {
    setCartItems((prev) => {
      const updated = { ...prev, [itemId]: prev[itemId] ? prev[itemId] + 1 : 1 };
      if (!token) localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });

    if (token) {
      try {
        await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
      } catch (err) {
        console.log("Error adding to cart:", err);
      }
    }
  };

  // Remove item from cart
  const removeFromCart = async (itemId) => {
    setCartItems((prev) => {
      const updated = { ...prev, [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0 };
      if (!token) localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });

    if (token) {
      try {
        await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
      } catch (err) {
        console.log("Error removing from cart:", err);
      }
    }
  };

  // Get total cart amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  // Initial load: food list + cart
  useEffect(() => {
    const loadData = async () => {
      await fetchFoodList();
      await loadCartData(token);
    };
    loadData();
  }, [token]);

  // Save token in localStorage whenever it changes
  useEffect(() => {
    if (token) localStorage.setItem("token", token);
    else localStorage.removeItem("token");
  }, [token]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return <StoreContext.Provider value={contextValue}>{props.children}</StoreContext.Provider>;
};

export default StoreContextProvider;