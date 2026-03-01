// // import mongoose from "mongoose";

// // export const connectDB = async () => {
// //     await mongoose.connect('mongodb+srv://vipul:311bip%23ul@cluster0.6qlgufz.mongodb.net/food-del').then(()=>console.log("Connected"));
    
// // }



// // import mongoose from "mongoose";

// // export const connectDB = async () => {
// //   await mongoose
// //     .connect(
// //       'mongodb+srv://vipul:311bip%23ul@cluster0.6qlgufz.mongodb.net/food-del'
// //     )
// //     .then(() => console.log("Connected"))
// //     .catch((err) => console.log("MongoDB connection error:", err));
// // };










// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("✅ MongoDB Connected");
//   } catch (error) {
//     console.error("❌ MongoDB connection failed:", error.message);
//     process.exit(1);
//   }
// };



// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       dbName: "food-delivery",
//     });

//     console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error("❌ MongoDB connection failed:", error.message);
//     process.exit(1);
//   }
// };

// export default connectDB;










// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("✅ MongoDB Connected");
//   } catch (error) {
//     console.error("❌ MongoDB connection failed:", error.message);
//     process.exit(1);
//   }
// };

// export default connectDB;









import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;