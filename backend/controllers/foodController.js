// import foodModel from "../models/foodModel.js";
// import fs from 'fs'


// //addd food item
// const addFood = async (req, res) => {
//     let image_filename=`${req.file.filename}`;
//     const food= new foodModel({
//         name: req.body.name,
//         description: req.body.description,
//         price: req.body.price,
    
//         category: req.body.category,
//          image: image_filename
//     })
//     try{
//         await food.save();
//         res.json({sucess:true,message:"Food item added successfully"});
//     }catch(error){
//         console.log(error);
//         res.json({sucess:false,message:"Failed to add food item"});
//     }
// }
// //all food list
// const listFood = async (req, res) => {
//     try{
//         const foods =await foodModel.find({});
//         res.json({sucess:true,data:foods});
//     }catch(error){
//         console.log(error);
//         res.json({sucess:false,message:"Failed to get food list"});
//     }
// }
// // remove item
// const removeFood = async (req, res) => {
//     try{
//         const food =await foodModel.findById(req.body.id);
//         fs.unlink(`uploads/${food.image}`,()=>{});
//         await foodModel.findByIdAndDelete(req.body.id);
//         res.json({sucess:true,message:"Food item removed successfully"});
//     }catch(error){
//         console.log(error);
//         res.json({sucess:false,message:"Failed to remove food item"});
//     }
// }
// export {addFood,listFood,removeFood}









// import foodModel from "../models/foodModel.js";
// import fs from 'fs';

// //add food item
// const addFood = async (req, res) => {
//     let image_filename = `${req.file.filename}`;
//     const food = new foodModel({
//         name: req.body.name,
//         description: req.body.description,
//         price: req.body.price,
//         category: req.body.category,
//         image: image_filename
//     });
//     try {
//         await food.save();
//         res.json({ success: true, message: "Food item added successfully" });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Failed to add food item" });
//     }
// };

// //all food list
// const listFood = async (req, res) => {
//     try {
//         const foods = await foodModel.find({});
//         res.json({ success: true, data: foods });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Failed to get food list" });
//     }
// };

// //remove item
// const removeFood = async (req, res) => {
//     try {
//         const food = await foodModel.findById(req.body.id);
//         fs.unlink(`uploads/${food.image}`, () => {});
//         await foodModel.findByIdAndDelete(req.body.id);
//         res.json({ success: true, message: "Food item removed successfully" });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Failed to remove food item" });
//     }
// };

// export { addFood, listFood, removeFood };








// //final code
// import foodModel from "../models/foodModel.js";
// import fs from 'fs';

// // Add food item
// const addFood = async (req, res) => {
//     const image_filename = req.file ? req.file.filename : null; // safer
//     const food = new foodModel({
//         name: req.body.name,
//         description: req.body.description,
//         price: req.body.price,
//         category: req.body.category,
//         image: image_filename
//     });

//     try {
//         await food.save();
//         res.json({ success: true, message: "Food item added successfully" });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Failed to add food item" });
//     }
// };

// // List all food items
// const listFood = async (req, res) => {
//     try {
//         const foods = await foodModel.find({});
//         res.json({ success: true, data: foods });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Failed to get food list" });
//     }
// };

// // Remove food item
// const removeFood = async (req, res) => {
//     try {
//         const food = await foodModel.findById(req.body.id);
//         if (!food) return res.json({ success: false, message: "Food item not found" });

//         // Delete the image safely
//         fs.unlink(`uploads/${food.image}`, (err) => {
//             if (err) console.log("Failed to delete image:", err);
//         });

//         await foodModel.findByIdAndDelete(req.body.id);
//         res.json({ success: true, message: "Food item removed successfully" });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Failed to remove food item" });
//     }
// };

// export { addFood, listFood, removeFood };












// // backend/controllers/foodController.js
// import foodModel from "../models/foodModel.js";
// import cloudinary from "cloudinary";

// const addFood = async (req, res) => {
//   try {
//     // For Cloudinary + multer-storage-cloudinary, req.file.path contains the remote URL.
//     // For local disk (USE_LOCAL_UPLOADS=true), req.file.path may be local path - ensure you handle appropriately.
//     const imageValue = req.file ? (req.file.path || req.file.filename || req.file.location) : null;

//     const food = new foodModel({
//       name: req.body.name,
//       description: req.body.description,
//       price: req.body.price,
//       category: req.body.category,
//       image: imageValue, // store URL (Cloudinary) or filename (local)
//     });

//     await food.save();
//     res.json({ success: true, message: "Food item added successfully" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Failed to add food item" });
//   }
// };

// const listFood = async (req, res) => {
//   try {
//     const foods = await foodModel.find({});
//     res.json({ success: true, data: foods });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Failed to get food list" });
//   }
// };

// const removeFood = async (req, res) => {
//   try {
//     const food = await foodModel.findById(req.body.id);
//     if (!food) return res.json({ success: false, message: "Food item not found" });

//     // If you used Cloudinary and stored the URL, you can optionally delete the resource from Cloudinary.
//     // If you want that, you'll need to store the public_id separately (or parse it from the URL).
//     // For simplicity we only delete the DB record here:
//     await foodModel.findByIdAndDelete(req.body.id);
//     res.json({ success: true, message: "Food item removed successfully" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Failed to remove food item" });
//   }
// };

// export { addFood, listFood, removeFood };







// backend/controllers/foodController.js
import foodModel from "../models/foodModel.js";
import cloudinary from "cloudinary";

// Add new food item
const addFood = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;

    if (!name || !price || !category) {
      return res.status(400).json({
        success: false,
        message: "Name, price, and category are required.",
      });
    }

    // Handle image field safely (Cloudinary or local)
    const imageValue = req.file
      ? req.file.path || req.file.filename || req.file.location
      : null;

    const food = new foodModel({
      name,
      description,
      price,
      category,
      image: imageValue,
    });

    await food.save();

    res.status(201).json({
      success: true,
      message: "Food item added successfully",
      data: food,
    });
  } catch (error) {
    console.error("addFood error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add food item",
      error: error.message,
    });
  }
};

// Get all food items
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.status(200).json({ success: true, data: foods });
  } catch (error) {
    console.error("listFood error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to get food list",
      error: error.message,
    });
  }
};

// Remove food item
const removeFood = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ success: false, message: "Food ID is required" });
    }

    const food = await foodModel.findById(id);
    if (!food) {
      return res.status(404).json({ success: false, message: "Food item not found" });
    }

    // Optional: Delete from Cloudinary if image URL stored
    // Uncomment this if you’re storing public_id and want to auto-remove the asset.
    // if (food.image && food.image.includes("cloudinary.com")) {
    //   const publicId = food.image.split("/").pop().split(".")[0];
    //   await cloudinary.v2.uploader.destroy(publicId);
    // }

    await foodModel.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Food item removed successfully",
    });
  } catch (error) {
    console.error("removeFood error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to remove food item",
      error: error.message,
    });
  }
};

export { addFood, listFood, removeFood };





























// import foodModel from "../models/Food.js";

// // ================= ADD FOOD =================
// export const addFood = async (req, res) => {
//   try {
//     const { name, price, description, category } = req.body;

//     const image = req.file?.path || req.file?.filename;

//     if (!name || !price || !image || !description || !category) {
//       return res
//         .status(400)
//         .json({ success: false, message: "All fields are required" });
//     }

//     const food = new foodModel({
//       name,
//       price,
//       description,
//       category,
//       image,
//     });

//     await food.save();

//     res.json({ success: true, message: "Food added successfully" });
//   } catch (error) {
//     console.error("addFood error:", error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// // ================= LIST FOOD =================
// export const listFood = async (req, res) => {
//   try {
//     const foods = await foodModel.find({});
//     res.json({ success: true, data: foods });
//   } catch (error) {
//     console.error("listFood error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Failed to get food list",
//       error: error.message,
//     });
//   }
// };

// // ================= REMOVE FOOD =================
// export const removeFood = async (req, res) => {
//   try {
//     const { id } = req.body;
//     await foodModel.findByIdAndDelete(id);
//     res.json({ success: true, message: "Food removed" });
//   } catch (error) {
//     console.error("removeFood error:", error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// };











// //import foodModel from "../models/Food.js";
// import foodModel from "../models/foodModel.js";


// export const addFood = async (req, res) => {
//   try {
//     const { name, price, description, category } = req.body;
//     const image = req.file?.path || req.file?.filename;

//     if (!name || !price || !image || !description || !category) {
//       return res
//         .status(400)
//         .json({ success: false, message: "All fields are required" });
//     }

//     const food = new foodModel({
//       name,
//       price,
//       description,
//       category,
//       image,
//     });

//     await food.save();
//     res.json({ success: true, message: "Food added successfully" });
//   } catch (error) {
//     console.error("addFood error:", error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// export const listFood = async (req, res) => {
//   try {
//     const foods = await foodModel.find({});
//     res.json({ success: true, data: foods });
//   } catch (error) {
//     console.error("listFood error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Failed to get food list",
//       error: error.message,
//     });
//   }
// };

// export const removeFood = async (req, res) => {
//   try {
//     const { id } = req.body;
//     await foodModel.findByIdAndDelete(id);
//     res.json({ success: true, message: "Food removed" });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };
