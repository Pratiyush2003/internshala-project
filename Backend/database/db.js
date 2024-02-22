import mongoose from "mongoose";

const connectToDb = async () => {
    try {
        await mongoose.connect('mongodb+srv://mongod400:singh123@cluster0.str6d9i.mongodb.net/authuser?retryWrites=true&w=majority');
        console.log('connected successfully')
    } catch (error) {
        console.log(error)
    }
}

export default connectToDb;