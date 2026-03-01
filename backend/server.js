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





//final
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









// import express from 'express';
// import cors from 'cors';
// import { connectDB } from "./config/db.js";
// import foodRouter from "./routes/foodRoute.js";
// import userRouter from "./routes/userRoute.js";
// import 'dotenv/config';
// import orderRouter from "./routes/orderRoute.js";
// import cartRouter from "./routes/cartRoute.js";
// import serverless from 'serverless-http';  // ✅ added

// // app config
// const app = express();

// // middleware
// app.use(express.json());
// app.use(cors());

// // db connection
// connectDB();

// // api endpoints
// app.use("/api/food", foodRouter);
// app.use("/images", express.static('uploads'));
// app.use("/api/user", userRouter);
// app.use("/api/cart", cartRouter);
// app.use("/api/order", orderRouter);

// app.get("/", (req, res) => {
//   res.send("API is running");
// });

// // ✅ Export for Vercel
// export const handler = serverless(app);








// //final
// import express from 'express';
// import cors from 'cors';
// import { connectDB } from "./config/db.js";
// import foodRouter from "./routes/foodRoute.js";
// import userRouter from "./routes/userRoute.js";
// import 'dotenv/config';
// import orderRouter from "./routes/orderRoute.js";
// import cartRouter from "./routes/cartRoute.js";
// import serverless from 'serverless-http';

// const app = express();
// const PORT = process.env.PORT || 4000;

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Connect DB
// connectDB();

// // API Routes
// app.use("/api/food", foodRouter);
// app.use("/images", express.static('uploads'));
// app.use("/api/user", userRouter);
// app.use("/api/cart", cartRouter);
// app.use("/api/order", orderRouter);

// // Health Check
// app.get("/", (req, res) => {
//   res.send("API is running");
// });

// // ✅ Start server locally (only if not serverless)
// if (process.env.NODE_ENV !== "serverless") {
//   app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
// }

// // ✅ Export for serverless platforms
// export const handler = serverless(app);










// // server.js (or index.js)
// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import foodRouter from "./routes/foodRoute.js";
// // ... other routers

// dotenv.config();
// const app = express();

// // parse
// app.use(express.json());

// // Mount your routers under /api
// app.use("/api/food", foodRouter);
// // app.use("/api/user", userRouter); etc

// // If using local uploads during dev, serve the folder:
// if ((process.env.USE_LOCAL_UPLOADS || "false").toLowerCase() === "true") {
//   app.use("/uploads", express.static("uploads"));
// }

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => console.log("Server started on port", PORT));









// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import { connectDB } from "./config/db.js";

// dotenv.config();
// const app = express();

// // ✅ Allow CORS from your frontend
// app.use(cors({
//   origin: ["http://localhost:5173"], // frontend URL
//   credentials: true,
// }));

// app.use(express.json());

// // your existing routes
// import foodRouter from "./routes/foodRoute.js";
// import userRouter from "./routes/userRoute.js";
// import orderRouter from "./routes/orderRoute.js";
// import cartRouter from "./routes/cartRoute.js";

// // ✅ Route setup
// app.use("/api/food", foodRouter);
// app.use("/api/user", userRouter);
// app.use("/api/order", orderRouter);
// app.use("/api/cart", cartRouter);

// // ✅ Connect to DB
// connectDB();

// // ✅ Start server
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));













// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import { connectDB } from "./config/db.js";

// // Load environment variables
// dotenv.config();

// const app = express();

// // ✅ Allow CORS from your frontend (uses FRONTEND_URL from .env or localhost)
// const frontendOrigin = process.env.FRONTEND_URL || "http://localhost:5173";
// app.use(cors({
//   origin: [frontendOrigin],
//   credentials: true,
// }));

// // Middleware
// app.use(express.json());

// // ✅ Import routes
// import foodRouter from "./routes/foodRoute.js";
// import userRouter from "./routes/userRoute.js";
// import orderRouter from "./routes/orderRoute.js";
// import cartRouter from "./routes/cartRoute.js";

// // ✅ Set up API routes
// app.use("/api/food", foodRouter);
// app.use("/api/user", userRouter);
// app.use("/api/order", orderRouter);
// app.use("/api/cart", cartRouter);

// // ✅ Optional: serve local uploads if you’re using USE_LOCAL_UPLOADS=true
// if ((process.env.USE_LOCAL_UPLOADS || "false").toLowerCase() === "true") {
//   app.use("/uploads", express.static("uploads"));
// }

// // ✅ Health check endpoint
// app.get("/", (req, res) => {
//   res.send("🍽️ Food Delivery API is running successfully!");
// });

// // ✅ Start the server only after successful DB connection
// const startServer = async () => {
//   try {
//     await connectDB();
//     const PORT = process.env.PORT || 4000;
//     app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
//   } catch (err) {
//     console.error("❌ Failed to start server:", err);
//     process.exit(1);
//   }
// };

// startServer();











// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";

// import foodRoutes from "./routes/foodRoute.js";
// import cartRoutes from "./routes/cartRoute.js";
// import userRoutes from "./routes/userRoute.js";
// import orderRoutes from "./routes/orderRoute.js";

// dotenv.config();

// const app = express();

// app.use(
//   cors({
//     origin: ["http://localhost:5173", "http://localhost:5174"],
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

// app.use(express.json());

// // ✅ ROUTES (THIS LINE FIXES /api/food/list 404)
// app.use("/api/food", foodRoutes);
// app.use("/api/cart", cartRoutes);
// app.use("/api/user", userRoutes);
// app.use("/api/order", orderRoutes);

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log(`✅ Server running on port ${PORT}`);
// });














// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";

// import connectDB from "./config/db.js";
// import foodRoutes from "./routes/foodRoute.js";
// import cartRoutes from "./routes/cartRoute.js";
// import userRoutes from "./routes/userRoute.js";
// import orderRoutes from "./routes/orderRoute.js";

// dotenv.config();

// const app = express();

// /* ================= CONNECT DB FIRST ================= */
// connectDB();

// /* ================= CORS ================= */
// app.use(
//   cors({
//     origin: ["http://localhost:5173", "http://localhost:5174"],
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

// app.use(express.json());

// /* ================= ROUTES ================= */
// app.use("/api/food", foodRoutes);
// app.use("/api/cart", cartRoutes);
// app.use("/api/user", userRoutes);
// app.use("/api/order", orderRoutes);

// /* ================= SERVER ================= */
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log(`✅ Server running on port ${PORT}`);
// });













// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";

// import connectDB from "./config/db.js";
// import foodRoutes from "./routes/foodRoute.js";

// dotenv.config();

// const app = express();

// // CONNECT DB FIRST
// connectDB();

// // MIDDLEWARE
// app.use(cors());
// app.use(express.json());

// // ROUTES
// app.use("/api/food", foodRoutes);

// // SERVER
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log(`✅ Server running on port ${PORT}`);
// });













// //login fix
// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";

// import connectDB from "./config/db.js";
// import foodRoutes from "./routes/foodRoute.js";
// import userRoutes from "./routes/userRoute.js"; // 👈 ADD THIS

// dotenv.config();

// const app = express();

// // CONNECT DB FIRST
// connectDB();

// // MIDDLEWARE
// app.use(cors());
// app.use(express.json());

// // ROUTES
// app.use("/api/food", foodRoutes);
// app.use("/api/user", userRoutes); // 👈 ADD THIS

// // SERVER
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log(`✅ Server running on port ${PORT}`);
// });









// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";

// import connectDB from "./config/db.js";
// import foodRoutes from "./routes/foodRoute.js";
// import userRoutes from "./routes/userRoute.js";
// import cartRouter from "./routes/cartRoute.js"; // 👈 ADD THIS

// dotenv.config();

// const app = express();

// // CONNECT DB FIRST
// connectDB();

// // MIDDLEWARE
// app.use(cors());
// app.use(express.json());

// // ROUTES
// app.use("/api/food", foodRoutes);
// app.use("/api/user", userRoutes);
// app.use("/api/cart", cartRouter); // 👈 ADD THIS

// // SERVER
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log(`✅ Server running on port ${PORT}`);
// });









// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import path from "path";

// import connectDB from "./config/db.js";
// import foodRoutes from "./routes/foodRoute.js";
// import userRoutes from "./routes/userRoute.js";
// import cartRouter from "./routes/cartRoute.js";

// dotenv.config();

// const app = express();

// // CONNECT DATABASE
// connectDB();

// // MIDDLEWARE
// app.use(cors());
// app.use(express.json());

// // ✅ STATIC FOLDER FOR IMAGES
// app.use("/uploads", express.static("uploads"));

// // OPTIONAL: Root route (so you don’t see "Cannot GET /")
// app.get("/", (req, res) => {
//   res.send("🚀 API is running...");
// });

// // ROUTES
// app.use("/api/food", foodRoutes);
// app.use("/api/user", userRoutes);
// app.use("/api/cart", cartRouter);

// // SERVER
// const PORT = process.env.PORT || 4000;

// app.listen(PORT, () => {
//   console.log(`✅ Server running on port ${PORT}`);
// });














// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import path from "path";
// import { fileURLToPath } from "url";

// import connectDB from "./config/db.js";
// import foodRoutes from "./routes/foodRoute.js";
// import userRoutes from "./routes/userRoute.js";
// import cartRouter from "./routes/cartRoute.js";
// import orderRouter from "./routes/orderRoute.js";

// dotenv.config();

// const app = express();

// // Fix __dirname for ES Modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // CONNECT DATABASE
// connectDB();

// // MIDDLEWARE
// app.use(cors());
// app.use(express.json());

// // ✅ SERVE STATIC UPLOADS FOLDER (ABSOLUTE PATH FIX)
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // OPTIONAL ROOT ROUTE
// app.get("/", (req, res) => {
//   res.send("🚀 API is running...");
// });

// // ROUTES
// app.use("/api/food", foodRoutes);
// app.use("/api/user", userRoutes);
// app.use("/api/cart", cartRouter);
// app.use("/api/order", orderRouter);

// // SERVER
// const PORT = process.env.PORT || 4000;

// app.listen(PORT, () => {
//   console.log(`✅ Server running on port ${PORT}`);
// });













import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/db.js";
import foodRoutes from "./routes/foodRoute.js";
import userRoutes from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js"; // ✅ ADD THIS

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connectDB();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
  res.send("🚀 API is running...");
});

app.use("/api/food", foodRoutes);
app.use("/api/user", userRoutes);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter); // ✅ ADD THIS

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});