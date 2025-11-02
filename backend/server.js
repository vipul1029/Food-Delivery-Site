// import express from 'express'
// import cors from 'cors'
// import {connectDB}  from "./config/db.js"
// import foodRouter from "./routes/foodRoute.js"
// import userRouter from "./routes/userRoute.js"
// import 'dotenv/config'

// //app config
// const app=express()
// const port=4000
// //middleware
// app.use(express.json())
// app.use(cors())
// //db connection
// connectDB();
// //api endpoint
// app.use("/api/food",foodRouter)
// app.use("images",express.static('uploads'))
// app.use("/api/user",userRouter)

// app.get("/",(req,res)=>{
// res.send("API is running")
// })
// app.listen(port,()=>{
//     console.log(`Server running on http://localhost:${port}`)
// })






// import express from 'express';
// import cors from 'cors';
// import { connectDB } from "./config/db.js";
// import foodRouter from "./routes/foodRoute.js";
// import userRouter from "./routes/userRoute.js";
// import 'dotenv/config';
// import orderRouter from "./routes/orderRoute.js";
// import cartRouter from "./routes/cartRoute.js";

// // app config
// const app = express();
// const port = 4000;

// // middleware
// app.use(express.json());
// app.use(cors());

// // db connection
// connectDB();

// // api endpoints
// app.use("/api/food", foodRouter);
// app.use("/images", express.static('uploads')); // fixed static path
// app.use("/api/user", userRouter);
// app.use("/api/cart", cartRouter);
// app.use("/api/order", orderRouter);

// app.get("/", (req, res) => {
//   res.send("API is running");
// });


// // app.listen(port, () => {
// //   console.log(`Server running on http://localhost:${port}`);
// // });


// // Export the app (for Vercel serverless)
// export default app;









import express from 'express';
import cors from 'cors';
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config';
import orderRouter from "./routes/orderRoute.js";
import cartRouter from "./routes/cartRoute.js";
import serverless from 'serverless-http';  // ✅ added

// app config
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API is running");
});

// ✅ Export for Vercel
export const handler = serverless(app);
