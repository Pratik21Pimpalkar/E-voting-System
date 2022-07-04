import User from "../Models/UserSchema.js";
import { hashPassword } from "../Helper/auth.js";
const registerUser = async (req, res) => {
    const { name, password, cpassword, age, address } = req.body;
    if (!name || !password || !age || !cpassword || !address)
        return res.status(400).send("Please fill all the fields");

    const exist = await User.findOne({ name });
    if (exist)
        return res.status(400).send("User already exist")
    if (cpassword !== password)
        return res.status(400).send("Check your confirm password.")

    const hashpassword = await hashPassword(password);

    const user = new User({
        name,
        age,
        password: hashpassword,
        cpassword: hashpassword,
        address,
    });
    try {
        user.save();
        return res.status(200).send("User Registered")
    } catch (error) {
        console.log(error.response.data);
    }
}

export default registerUser;