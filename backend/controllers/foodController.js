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





import foodModel from "../models/foodModel.js";
import fs from 'fs';

// Add food item
const addFood = async (req, res) => {
    const image_filename = req.file ? req.file.filename : null; // safer
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    });

    try {
        await food.save();
        res.json({ success: true, message: "Food item added successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Failed to add food item" });
    }
};

// List all food items
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Failed to get food list" });
    }
};

// Remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        if (!food) return res.json({ success: false, message: "Food item not found" });

        // Delete the image safely
        fs.unlink(`uploads/${food.image}`, (err) => {
            if (err) console.log("Failed to delete image:", err);
        });

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food item removed successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Failed to remove food item" });
    }
};

export { addFood, listFood, removeFood };

