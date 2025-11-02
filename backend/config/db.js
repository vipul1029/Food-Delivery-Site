import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://vipul:311bip%23ul@cluster0.6qlgufz.mongodb.net/food-del').then(()=>console.log("Connected"));
    
}



// import mongoose from "mongoose";

// export const connectDB = async () => {
//   await mongoose
//     .connect(
//       'mongodb+srv://vipul:311bip%23ul@cluster0.6qlgufz.mongodb.net/food-del'
//     )
//     .then(() => console.log("Connected"))
//     .catch((err) => console.log("MongoDB connection error:", err));
// };
