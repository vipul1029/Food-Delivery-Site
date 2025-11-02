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








import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        //check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User does not exist" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: "Incorrect password" });
        }

        //create token
        const token = createToken(user._id);
        res.json({ success: true, token });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Failed to login user" });
    }
};

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
};

//register user
const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        //check if user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }
        //validate email
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Invalid email" });
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Password must be at least 8 characters" });
        }
        //hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        //create user
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
        });
        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({ success: true, token });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Failed to register user" });
    }
};

export { loginUser, registerUser };
