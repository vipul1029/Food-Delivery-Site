// import orderModel from "../models/orderModel.js";
// import userModel from "../models/userModel.js";
// import Stripe from "stripe"

 
// const stripe=new Stripe(process.env.STRIPE_SECRET_KEY)

// //placing user order from frontend 
// const placeOrder =async (req,res)=>{
//     const frontend_Url = "http://localhost:5173";
// try{
//     const newOrder=new orderModel({
//         userId:req.body.userId,
//         items:req.body.items,
//         amount:req.body.amount,
//         address:req.body.address
//     })
//     await newOrder.save()
//     await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}})
//   const line_items=req.body.items.map((item)=>({
//       price_data:{
//           currency:"inr",
//           product_data:{name:item.name},
//           unit_amount:item.price*100*80
//       },
//       quantity:item.quantity
//   }))
//   line_items.push({
//       price_data:{
//           currency:"inr",
//           product_data:{name:"Delivery Charges"},
//           unit_amount:2*100*80
//       },
//       quantity:1
//   })
//   const session=await stripe.checkout.sessions.create({
//     line_items:line_items,
//     mode:"payment",
//     success_url:`${frontend_Url}/verify?success=true&orderId=${newOrder._id}`,
//     cancel_url:`${frontend_Url}/verify?success=false&orderId=${newOrder._id}`,
//   })
//   res.json({success:true,session_url:session.url})
//       }
  
    
// catch(error){
//   console.log(error);
//   res.json({success:false,message:"Failed to place order"})
// }
// }
// const verifyOrder=async(req,res)=>{
// const {orderId,success}=req.body;
//   try{
//     if(success=="true"){
//       await orderModel.findByIdAndUpdate(orderId,{payment:true})
//       res.json({success:true,message:"Order Placed Successfully"})
//     }
//     else{
//       await orderModel.findByIdAndDelete(orderId)
//       res.json({success:false,message:"Order Cancelled Successfully"})
//     }
//   }
//   catch(error){
//     console.log(error);
//     res.json({success:false,message:"Failed to verify order"})
//   }
// }
// //user order
// const userOrder=async(req,res)=>{
//   try{
//     const orders=await orderModel.find({userId:req.body.userId})
//     res.json({success:true,data:orders})
//   }
//   catch(error){
//     console.log(error);
//     res.json({success:false,message:"Failed to get user orders"})
//   }
// }


// export {placeOrder,verifyOrder,userOrder}












// //final code
// import orderModel from "../models/orderModel.js";
// import userModel from "../models/userModel.js";
// import Stripe from "stripe";




// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// // placing user order from frontend
// const placeOrder = async (req, res) => {



//   //const frontend_Url = "http://localhost:5173";
//   const frontend_Url = process.env.FRONTEND_URL;

//   try {
//     const newOrder = new orderModel({
//       userId: req.body.userId,
//       items: req.body.items,
//       amount: req.body.amount,
//       address: req.body.address,
//     });
//     await newOrder.save();
//     await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

//     const line_items = req.body.items.map((item) => ({
//       price_data: {
//         currency: "inr",
//         product_data: { name: item.name },
//         unit_amount: item.price * 100 * 80,
//       },
//       quantity: item.quantity,
//     }));

//     line_items.push({
//       price_data: {
//         currency: "inr",
//         product_data: { name: "Delivery Charges" },
//         unit_amount: 2 * 100 * 80,
//       },
//       quantity: 1,
//     });

//     // 👇 Add locale here to fix "Cannot find module './en'"
//     const session = await stripe.checkout.sessions.create({
//       line_items: line_items,
//       mode: "payment",
//       success_url: `${frontend_Url}/verify?success=true&orderId=${newOrder._id}`,
//       cancel_url: `${frontend_Url}/verify?success=false&orderId=${newOrder._id}`,
//       locale: "en", // ✅ FIX — specify English locale
//     });

//     res.json({ success: true, session_url: session.url });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Failed to place order" });
//   }
// };

// const verifyOrder = async (req, res) => {
//   const { orderId, success } = req.body;
//   try {
//     if (success == "true") {
//       await orderModel.findByIdAndUpdate(orderId, { payment: true });
//       res.json({ success: true, message: "Order Placed Successfully" });
//     } else {
//       await orderModel.findByIdAndDelete(orderId);
//       res.json({ success: false, message: "Order Cancelled Successfully" });
//     }
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Failed to verify order" });
//   }
// };

// // user order
// const userOrders = async (req, res) => {
//   try {
//     const orders = await orderModel.find({ userId: req.body.userId });
//     res.json({ success: true, data: orders });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Failed to get user orders" });
//   }
// };
// //listing order for admin panel
// const listOrders = async (req, res) => {
//   try {
//     const orders = await orderModel.find({});
//     res.json({ success: true, data: orders });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Failed to list orders" });
//   }
// };
// //api for updating order status
// const updateStatus = async (req, res) => {
//   const { orderId, status } = req.body;
//   try {
//     await orderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status });
//     res.json({ success: true, message: "Order status updated successfully" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Failed to update order status" });
//   }
// };

// export { placeOrder, verifyOrder, userOrders ,listOrders,updateStatus};






























// // ✅ Fixed full version — identical logic, just stable Stripe initialization

// import orderModel from "../models/orderModel.js";
// import userModel from "../models/userModel.js";
// import Stripe from "stripe";
// import dotenv from "dotenv";
// dotenv.config(); // ensure .env is loaded

// // ✅ FIX: Prevent Stripe crash if .env key missing
// let stripe;
// if (!process.env.STRIPE_SECRET_KEY) {
//   console.error("❌ STRIPE_SECRET_KEY missing in .env file. Please add it and restart the server.");
// } else {
//   stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
//     apiVersion: "2022-11-15",
//   });
// }

// // placing user order from frontend
// const placeOrder = async (req, res) => {
//   // const frontend_Url = "http://localhost:5173";
//   const frontend_Url = process.env.FRONTEND_URL;

//   try {
//     const newOrder = new orderModel({
//       userId: req.body.userId,
//       items: req.body.items,
//       amount: req.body.amount,
//       address: req.body.address,
//     });
//     await newOrder.save();
//     await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

//     const line_items = req.body.items.map((item) => ({
//       price_data: {
//         currency: "inr",
//         product_data: { name: item.name },
//         unit_amount: item.price * 100 * 80, // unchanged from your code
//       },
//       quantity: item.quantity,
//     }));

//     line_items.push({
//       price_data: {
//         currency: "inr",
//         product_data: { name: "Delivery Charges" },
//         unit_amount: 2 * 100 * 80,
//       },
//       quantity: 1,
//     });

//     // 👇 Add locale here to fix "Cannot find module './en'"
//     const session = await stripe.checkout.sessions.create({
//       line_items: line_items,
//       mode: "payment",
//       success_url: `${frontend_Url}/verify?success=true&orderId=${newOrder._id}`,
//       cancel_url: `${frontend_Url}/verify?success=false&orderId=${newOrder._id}`,
//       locale: "en", // ✅ FIX — specify English locale
//     });

//     res.json({ success: true, session_url: session.url });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Failed to place order" });
//   }
// };

// const verifyOrder = async (req, res) => {
//   const { orderId, success } = req.body;
//   try {
//     if (success == "true") {
//       await orderModel.findByIdAndUpdate(orderId, { payment: true });
//       res.json({ success: true, message: "Order Placed Successfully" });
//     } else {
//       await orderModel.findByIdAndDelete(orderId);
//       res.json({ success: false, message: "Order Cancelled Successfully" });
//     }
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Failed to verify order" });
//   }
// };

// // user order
// const userOrders = async (req, res) => {
//   try {
//     const orders = await orderModel.find({ userId: req.body.userId });
//     res.json({ success: true, data: orders });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Failed to get user orders" });
//   }
// };

// // listing order for admin panel
// const listOrders = async (req, res) => {
//   try {
//     const orders = await orderModel.find({});
//     res.json({ success: true, data: orders });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Failed to list orders" });
//   }
// };

// // api for updating order status
// const updateStatus = async (req, res) => {
//   const { orderId, status } = req.body;
//   try {
//     await orderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status });
//     res.json({ success: true, message: "Order status updated successfully" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Failed to update order status" });
//   }
// };

// export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };










import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

let stripe;

if (!process.env.STRIPE_SECRET_KEY) {
  console.error("❌ STRIPE_SECRET_KEY missing in .env file.");
} else {
  stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-11-15",
  });
}

// ==========================
// PLACE ORDER
// ==========================
const placeOrder = async (req, res) => {
  const frontend_Url = process.env.FRONTEND_URL;

  try {
    // ✅ Use userId from middleware
    const userId = req.userId;

    const newOrder = new orderModel({
      userId: userId, // ✅ FIXED
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });

    await newOrder.save();

    // ✅ Clear user cart
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: { name: item.name },
        unit_amount: item.price * 100 * 80,
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: "inr",
        product_data: { name: "Delivery Charges" },
        unit_amount: 2 * 100 * 80,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      success_url: `${frontend_Url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_Url}/verify?success=false&orderId=${newOrder._id}`,
      locale: "en",
    });

    res.json({ success: true, session_url: session.url });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to place order" });
  }
};

// ==========================
// VERIFY ORDER
// ==========================
const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;

  try {
    if (success == "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      res.json({ success: true, message: "Order Placed Successfully" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: "Order Cancelled Successfully" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to verify order" });
  }
};

// ==========================
// USER ORDERS
// ==========================
const userOrders = async (req, res) => {
  try {
    const userId = req.userId; // ✅ FIXED
    const orders = await orderModel.find({ userId: userId });

    res.json({ success: true, data: orders });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to get user orders" });
  }
};

// ==========================
// LIST ALL ORDERS (ADMIN)
// ==========================
const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to list orders" });
  }
};

// ==========================
// UPDATE ORDER STATUS
// ==========================
const updateStatus = async (req, res) => {
  const { orderId, status } = req.body;

  try {
    await orderModel.findByIdAndUpdate(orderId, { status });
    res.json({ success: true, message: "Order status updated successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to update order status" });
  }
};

export {
  placeOrder,
  verifyOrder,
  userOrders,
  listOrders,
  updateStatus,
};