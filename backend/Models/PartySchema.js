import mongoose from "mongoose";

const {Schema}= mongoose;

const PartySchema= Schema({
    bjp:{
        type:Number,
        default:0,
    },
    congress:{
        type:Number,
        default:0,
    },
    shivsena:{
        type:Number,
        default:0,
    },
    bsp:{
        type:Number,
        default:0,
    },
    total:{
        type:Number,
        default:0, 
    }
})

const Party= mongoose.model("Party", PartySchema)
export default Party;