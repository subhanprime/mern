import mongoose from "mongoose";

export const userSchema = mongoose.Schema({
    name: String,
    phone: String,
});

const user = mongoose.model('user', userSchema);

export default user;