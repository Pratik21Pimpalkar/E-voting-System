import jwt from "jsonwebtoken";
import User from "../Models/UserSchema.js";

const currentUser = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ msg: "No token, authorization denied" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.status(403).json({ msg: "Token is not valid" });
      req.user = user;
    });

    console.log(req.user);
    const user = await User.findById(req.user._id)
    // res.setHeader('Content-Type', 'application/json');
    if (user)
      return res.json({
        token,user
      })
    next();

  }
  catch (error) {
    console.log(error);
  }
}

export default currentUser;