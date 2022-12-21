import mongoose from "mongoose";
//define schema
const AboutExpertSchema = new mongoose.Schema({
    aboutMe: { type: String, required: true, trim: true },
    days: { type: String, required: true },
    hours: { type: String, required:true},
    pic: { type: String, required: true },
})



//define model
const AboutExpertModel = mongoose.model("AboutExpert", AboutExpertSchema)



export default AboutExpertModel