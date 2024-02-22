import mongoose, { model } from "mongoose";

const UserSchema = mongoose.Schema({
    name : {
        type : "string",
        required : true,
    },
    email : {
        type : "String",
        unique : true,
        required : true,
    },
    password : {
        type : "String",
        required : true,
    },
    date : {
        type : Date,
        default : Date.now
    },
})

const User = model('user' , UserSchema);
User.createIndexes();
export default User