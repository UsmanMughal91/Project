import mongoose from "mongoose";
//define schema
const ExpertSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
})

//define model
const ExpertModel = mongoose.model("Expert", ExpertSchema)



export default ExpertModel