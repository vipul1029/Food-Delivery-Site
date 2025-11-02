// import jwt from "jsonwebtoken";

// const authMiddleware = async (req, res, next) => {
// const {token} = req.header;
// if (!token ){
//     return res.json({success:false,message:"Unauthorized"});
// }
// try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.body.userId =token_decode.id;
//     next();
// } catch (error) {
//     console.log(error);
//     res.json({success:false,message:"error"});
// }

// }


// export default authMiddleware;





// //original
// import jwt from "jsonwebtoken";


// const authMiddleware = async (req, res, next) => {
//     const { token } = req.headers;  // fixed req.header → req.headers
//     if (!token) {
//         return res.json({ success: false, message: "Unauthorized" });
//     }
//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.body.userId = decoded.id; // fixed token_decode → decoded
//         next();
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "error" });
//     }
// }

// export default authMiddleware;




import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  try {
    // Get token from Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.json({ success: false, message: "Unauthorized" });

    const token = authHeader.split(" ")[1]; // "Bearer <token>"
    if (!token) return res.json({ success: false, message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = decoded.id; // attach userId
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Invalid token" });
  }
};

export default authMiddleware;





// import jwt from "jsonwebtoken";

// const authMiddleware = async (req, res, next) => {
//     const { token } = req.headers;
//     if (!token) {
//         return res.status(401).json({ success: false, message: "Unauthorized" });
//     }
//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.body.userId = decoded.id;
//         next();
//     } catch (error) {
//         console.log(error);
//         res.status(401).json({ success: false, message: "Invalid token" });
//     }
// };

// export default authMiddleware;





// import jwt from "jsonwebtoken";

// const authMiddleware = async (req, res, next) => {
//     const token = req.headers.token; // read token directly from headers
//     if (!token) {
//         return res.status(401).json({ success: false, message: "Unauthorized" });
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.body.userId = decoded.id; // fix token decoding
//         next();
//     } catch (error) {
//         console.log(error);
//         res.status(401).json({ success: false, message: "Invalid token" });
//     }
// }

// export default authMiddleware;






// import jwt from "jsonwebtoken";

// const authMiddleware = async (req, res, next) => {
//     const token = req.headers.token; // read from headers
//     if (!token) {
//         return res.status(401).json({ success: false, message: "Unauthorized" });
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.body.userId = decoded.id;
//         next();
//     } catch (error) {
//         console.log(error);
//         res.status(401).json({ success: false, message: "Invalid token" });
//     }
// };

// export default authMiddleware;
