import mongoose from "mongoose";
const Schema = mongoose.Schema;
let userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true, 
    },
    phone: {
        type: String,
        required:true, 
    },
    message: {
        type: String,
        required: true, 
    },
    date: {
        type: Date,
        default: Date.now
    }
})
export default mongoose.model('User', userSchema);