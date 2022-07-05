import Party from "../Models/PartySchema.js";


const result = async (req, res) => {
    try {
        const data = await Party.find();
        const series= [data[0].bjp, data[0].bsp, data[0].shivsena,data[0].congress]
        return res.json(series);
    } catch (error) {
        console.log(error);
    }
}
export default result