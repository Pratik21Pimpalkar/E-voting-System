import Party from "../Models/PartySchema.js";
import User from "../Models/UserSchema.js";
import jwt from "jsonwebtoken";

const vote = async (req, res) => {
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
        const id = req.user._id
        console.log(req.user);
        const user = await User.findById(req.user._id)
        console.log(user);
        const { partyname } = req.body;
        // const party = new Party({
        // });
        // party.save()
        if (partyname === "bjp") {
            const exist = await Party.findOneAndUpdate({}, { $inc: { "bjp": 1, "total": 1 } })
            const ifvoted = await User.findByIdAndUpdate(id, { $set: { "voted": true } })
            await exist.save()
            await ifvoted.save()
            return res.status(200).send("Voted Successfully")
        }
        else if (partyname === "congress") {
            const exist = await Party.findOneAndUpdate({}, { $inc: { "congress": 1, "total": 1 } })
            const ifvoted = await User.findByIdAndUpdate(id, { $set: { "voted": true } })

            await exist.save()
            await ifvoted.save()
            return res.status(200).send("Voted Successfully")
        }
        else if (partyname === "shivsena") {
            const exist = await Party.findOneAndUpdate({}, { $inc: { "shivsena": 1, "total": 1 } })
            const ifvoted = await User.findByIdAndUpdate(id, { $set: { "voted": true } })

            await exist.save()
            await ifvoted.save()
            return res.status(200).send("Voted Successfully")
        }
        else if (partyname === "bsp") {
            const exist = await Party.findOneAndUpdate({}, { $inc: { "bsp": 1, "total": 1 } })
            const ifvoted = await User.findByIdAndUpdate(id, { $set: { "voted": true } })

            await ifvoted.save()
            await exist.save()
            return res.status(200).send("Voted Successfully")
        }
    } catch (error) {
        console.log(error);
        return res.status(400).send("Something went wrong")
    }
}

export default vote;