import User from "../Models/UserSchema.js";
import jwt from 'jsonwebtoken'
import { comparePassword } from '../Helper/auth.js'

const loginUser = async (req, res) => {
    const { name, password } = req.body;
try {
    const user = await User.findOne({ name });
    if (!user)
        return res.status(400).send("User not found");
    const match= await comparePassword(password,user.password)
    if(!match)
    return res.status(400).send("Please enter valid credentials")
    const token=jwt.sign({_id:user._id}, process.env.JWT_SECRET, {expiresIn:"1d"})
    user.password= undefined;
    user.cpassword= undefined;
    res.json({
        token,user
    })
} catch (error) {
    console.log(error.response.data);
    return res.status(400).send(error.response.data);
}

}

export default loginUser;