//previous
// import express from "express"
// import { addFood, listFood ,removeFood} from '../controllers/foodController.js'
// import multer from "multer" 

// const foodRouter = express.Router();



// const storage = multer.diskStorage({
//         destination:"uploads",
//         filename:(req,file,cb)=>{
//             return cb(null,`${Date.now()}${file.originalname}`)
//         }
//     })
    


// const upload = multer({ storage: storage })
// foodRouter.post("/add", upload.single("image"),addFood)
// foodRouter.get("/list",listFood)
// foodRouter.post("/remove",removeFood);
// export default foodRouter;









import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";
import path from "path";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";

const router = express.Router();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// If USE_LOCAL_UPLOADS is true, use disk storage (local dev). Otherwise use Cloudinary.
const useLocal = (process.env.USE_LOCAL_UPLOADS || "false").toLowerCase() === "true";

let upload;

if (useLocal) {
  // local disk storage (only for local dev)
  const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads"),
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
  });
  upload = multer({ storage });
} else {
  // cloudinary storage
  const cloudStorage = new CloudinaryStorage({
    cloudinary,
    params: {
      folder: "food-images",
      allowed_formats: ["jpg", "jpeg", "png", "webp"],
    },
  });
  upload = multer({ storage: cloudStorage });
}

// Routes
router.post("/add", upload.single("image"), addFood);
router.get("/list", listFood);
router.post("/remove", removeFood);

export default router;






// import express from "express";
// import multer from "multer";
// import { addFood, listFood, removeFood } from "../controllers/foodController.js";

// const router = express.Router();

// const storage = multer.diskStorage({
//   destination: "uploads",
//   filename: (req, file, cb) =>
//     cb(null, `${Date.now()}-${file.originalname}`),
// });

// const upload = multer({ storage });

// router.post("/add", upload.single("image"), addFood);
// router.get("/list", listFood);
// router.post("/remove", removeFood);

// export default router;
