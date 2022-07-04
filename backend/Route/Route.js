import express from "express";
import loginUser from "../Controllers/loginUser.js";
import registerUser from "../Controllers/registerUser.js";
import currentUser from "../Controllers/currentUser.js";
import { Authenticate } from "../middlewares/index.js";

const router= express.Router();

router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/currentUser',Authenticate,currentUser)

export default router;