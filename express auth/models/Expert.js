import mongoose from "mongoose";
//define schema
const ExpertSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    parlourName: { type: String,  trim: true,required:true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    phone: { type: Number, trim: true },
    pic: { type: String ,required:true },
    address: { type:String, trim: true },


})



//define model
const ExpertModel = mongoose.model("Expert", ExpertSchema)



export default ExpertModel