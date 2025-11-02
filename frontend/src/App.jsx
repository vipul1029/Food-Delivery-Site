import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import {Route, Routes} from 'react-router-dom'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
 import './App.css';

import MyOrders from './Pages/MyOrders/MyOrders'
import Verify from './Pages/verify/verify';  // Make sure the path is correct

// in Routes




const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
      <Navbar setShowLogin={setShowLogin} />

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        {/* <Route path='Verify' element={<verify/>}/> */}
        <Route path='/verify' element={<Verify />} />
        <Route path='/myorders' element={<MyOrders/>}/>
      </Routes>
    
    </div>
    <Footer/>
    </>
  
  )
}

export default App





// import React, { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
// import LoginPopup from './components/LoginPopup/LoginPopup';

// import Home from './Pages/Home/Home';
// import Cart from './Pages/Cart/Cart';
// import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
// import MyOrders from './Pages/MyOrders/MyOrders';
// import Verify from './Pages/verify/verify';

// import './App.css';
// import './components/Navbar/Navbar.css';
// import './components/Footer/Footer.css';
// import './Pages/Home/Home.css';
// import './Pages/Cart/Cart.css';
// import './Pages/PlaceOrder/PlaceOrder.css';
// import './components/LoginPopup/LoginPopup.css';

// const App = () => {
//   const [showLogin, setShowLogin] = useState(false);

//   return (
//     <>
//       {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
//       <div className='app'>
//         <Navbar setShowLogin={setShowLogin} />
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/cart' element={<Cart />} />
//           <Route path='/order' element={<PlaceOrder />} />
//           <Route path='/verify' element={<Verify />} />
//           <Route path='/myorders' element={<MyOrders />} />
//         </Routes>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default App;
