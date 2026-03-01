// //final
// // import express from 'express'
// // import {registerUser,loginUser} from '../controllers/userController.js'



// // const userRouter = express.Router()
// // userRouter.post('/register',registerUser)
// // userRouter.post('/login',loginUser)
// // export default userRouter;





// // backend/routes/userRoute.js
// import express from "express";
// import * as userController from "../controllers/userController.js";

// const { registerUser, loginUser } = userController;

// // Fail early with a clear message if the controller doesn't export expected functions
// if (!registerUser || !loginUser) {
//   throw new Error(
//     "controllers/userController.js must export named functions 'registerUser' and 'loginUser'.\n" +
//     "If you export default, either change it to named exports or update this route to import the default."
//   );
// }

// const userRouter = express.Router();
// userRouter.post("/register", registerUser);
// userRouter.post("/login", loginUser);

// export default userRouter;















// backend/routes/userRoute.js
import express from "express";
import * as userControllerModule from "../controllers/userController.js";

const router = express.Router();

// Try to resolve handler functions from different possible export styles
const resolveHandler = (module, names = []) => {
  // 1. Prefer named exports directly on module
  for (const name of names) {
    if (typeof module[name] === "function") return module[name];
  }
  // 2. If module has a default export that's an object, try that
  if (module && typeof module.default === "object") {
    for (const name of names) {
      if (typeof module.default[name] === "function") return module.default[name];
    }
  }
  // 3. If module itself is a function or object with expected props, try those
  if (typeof module === "function" && names.includes("default")) return module;
  if (typeof module === "object") {
    for (const name of names) {
      if (typeof module[name] === "function") return module[name];
    }
  }
  return null;
};

const registerUser = resolveHandler(userControllerModule, ["registerUser", "register", "defaultRegister"]);
const loginUser = resolveHandler(userControllerModule, ["loginUser", "login", "defaultLogin"]);

// If handlers still not found, throw a helpful error
if (!registerUser || !loginUser) {
  throw new Error(
    "controllers/userController.js must export register and login handlers.\n" +
    "Expected to find one of: registerUser/register/defaultRegister and loginUser/login/defaultLogin\n" +
    "You can fix this by exporting named functions:\n\n" +
    "  export const registerUser = (req, res) => { ... }\n" +
    "  export const loginUser = (req, res) => { ... }\n\n" +
    "or by exporting default object:\n\n" +
    "  export default { registerUser, loginUser }\n"
  );
}

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
