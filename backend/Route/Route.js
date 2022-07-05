import express from "express";
import loginUser from "../Controllers/loginUser.js";
import registerUser from "../Controllers/registerUser.js";
import currentUser from "../Controllers/currentUser.js";
import vote from "../Controllers/vote.js"
import result from "../Controllers/result.js";

const router= express.Router();

router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/current-user',currentUser)
router.post("/vote", vote)
router.get("/result",result)

export default router;