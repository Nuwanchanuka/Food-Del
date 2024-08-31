import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatstack:Nuwan2003@projects.7fml0.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}