// import userModel from "../models/userModel.js";
// import jwt from "jsonwebtoken"
// import bcrypt from "bcrypt"
// import validator from "validator"


// //login user
// const loginUser = async (req, res) => {
//     const { email, password } = req.body;
//     try{
//         //check if user exists
//         const user = await userModel.findOne({ email });
//         if (!user) {
//             return res.json({ sucess: false, message: "User does not exist" });
//         }
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.json({ sucess: false, message: "Incorrect password" });
//         }
    
//         //create token
//         const token = createToken(user._id);
//         res.json({ sucess: true, token });
//     }catch(error){
//         console.log(error);
//         res.json({ sucess: false, message: "Failed to login user" });
//     }
// }

// const createToken = (id) => {
//     return jwt.sign({ id }, process.env.JWT_SECRET);
// }

// //register user
// const registerUser = async (req, res) => {
//     const { name, password, email } = req.body;
//     try{
//         //check if user already exists
//         const exists = await userModel.findOne({ email });
//         if (exists) {
//             return res.json({ sucess: false, message: "User already exists" });
//         }
//         //validate email
//        if(!validator.isEmail(email)){
//         return res.json({ sucess: false, message: "Invalid email" });
//        }
//        if(password.length<8){
//         return res.json({ sucess: false, message: "Password must be at least 8 characters" });
//        }
//        //hashing user password
//        const salt = await bcrypt.genSalt(10);
//        const hashedPassword = await bcrypt.hash(password, salt);
//        //create user
//        const newUser = new userModel({
//         name: name,
//         email: email,
//         password: hashedPassword,
//        })
//        const user = await newUser.save();
//        const token = createToken(user._id);
//         res.json({ sucess: true,  token });
       
       
//     }catch(error){
//         console.log(error);
//          res.json({ sucess: false, message: "Failed to register user" });
//     }
// }
// export { loginUser, registerUser }







// //final code
// import userModel from "../models/userModel.js";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";
// import validator from "validator";

// //login user
// const loginUser = async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         //check if user exists
//         const user = await userModel.findOne({ email });
//         if (!user) {
//             return res.json({ success: false, message: "User does not exist" });
//         }
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.json({ success: false, message: "Incorrect password" });
//         }

//         //create token
//         const token = createToken(user._id);
//         res.json({ success: true, token });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Failed to login user" });
//     }
// };

// const createToken = (id) => {
//     return jwt.sign({ id }, process.env.JWT_SECRET);
// };

// //register user
// const registerUser = async (req, res) => {
//     const { name, password, email } = req.body;
//     try {
//         //check if user already exists
//         const exists = await userModel.findOne({ email });
//         if (exists) {
//             return res.json({ success: false, message: "User already exists" });
//         }
//         //validate email
//         if (!validator.isEmail(email)) {
//             return res.json({ success: false, message: "Invalid email" });
//         }
//         if (password.length < 8) {
//             return res.json({ success: false, message: "Password must be at least 8 characters" });
//         }
//         //hashing user password
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);
//         //create user
//         const newUser = new userModel({
//             name: name,
//             email: email,
//             password: hashedPassword,
//         });
//         const user = await newUser.save();
//         const token = createToken(user._id);
//         res.json({ success: true, token });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Failed to register user" });
//     }
// };

// export { loginUser, registerUser };















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


















// backend/controllers/userController.js
import dotenv from "dotenv";
dotenv.config();

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

// Helper: ensure JWT secret exists
const ensureJwtSecret = () => {
  if (!process.env.JWT_SECRET) {
    console.error("❌ JWT_SECRET missing in .env");
    throw new Error("JWT_SECRET not configured");
  }
};

// Register user
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: "Name, email and password are required" });
    }

    // Check if user exists
    const existing = await userModel.findOne({ email: email.toLowerCase().trim() });
    if (existing) {
      return res.status(409).json({ success: false, message: "User already exists" });
    }

    // Hash password
    const saltRounds = Number(process.env.BCRYPT_SALT_ROUNDS) || 10;
    const hashed = await bcrypt.hash(password, saltRounds);

    // Create user (ensure cartData default if your schema expects it)
    const user = new userModel({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password: hashed,
      cartData: userModel.schema.path("cartData") ? {} : undefined, // keep if schema has cartData
    });

    await user.save();

    // Issue JWT
    ensureJwtSecret();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || "7d",
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: { userId: user._id, name: user.name, email: user.email, token },
    });
  } catch (error) {
    console.error("registerUser error:", error);
    return res.status(500).json({ success: false, message: "Failed to register user" });
  }
};

// Login user
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password are required" });
    }

    const user = await userModel.findOne({ email: email.toLowerCase().trim() });
    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    ensureJwtSecret();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || "7d",
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: { userId: user._id, name: user.name, email: user.email, token },
    });
  } catch (error) {
    console.error("loginUser error:", error);
    return res.status(500).json({ success: false, message: "Failed to login" });
  }
};
