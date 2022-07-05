import Party from "../Models/PartySchema.js";


const result = async (req, res) => {
    try {
        const data = await Party.find();
        return res.json(data);
    } catch (error) {
console.log(error);
    }
}
export default result