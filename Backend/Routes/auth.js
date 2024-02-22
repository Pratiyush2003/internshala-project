import express from 'express'
import User from '../models/User.js';
import jwt from 'jsonwebtoken'
import 'dotenv/config.js'
import bcrypt from "bcryptjs"
import fetchUser from '../middleware/fetchuser.js';


const router = express.Router();

router.post("/signup", async (req, res) => {

     const {name , email , password} = req.body;
     try {
        if(!name || !email || !password){
            return res.status(400).json({error : "required all details"})
         }
    
         if(!email.includes('@')){
            return res.status(400).json({error : "Enter a valid email"})
         }
    
         const user = await User.findOne({email});
         if(user){
            res.status(400).json({error : "User already exists"})
         }

         const salt = await bcrypt.genSalt(10)
         const hashpassword = await bcrypt.hash(password , salt)

         const newUser = await User({
            name,
            email,
            password : hashpassword
         })
         await newUser.save();
         console.log(newUser)
         res.status(200).json({success : "Singnup Succesfully"})
     } catch (error) {
        console.log(error)
        res.status(500).send({error : "internal server error"})
     }    
})

router.post("/login", async (req, res) => {
    const {email, password} = req.body;
    try {
        if(!email || !password) {
            return res.status(400).json({error : "All filed are required"})
        }

        if(!email.includes('@')){
            return res.status(400).json({error : "must input a valid email"})
        }

        const user = await User.findOne({email})

        if(!user){
            res.status(400).json({error : "user not found"})
        }

        const domatch = await bcrypt.compare(password , user.password)

        if(domatch){
            const token = jwt.sign({userId : user.id}, process.env.JWT_SECRET, { expiresIn : '7d'})
            res.status(201).json({token})
            console.log(token)
        }else{
            res.status(404).json({error : "Email and password not found"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal server error")
    }
})

router.post("/getuser", fetchUser, async (req, res) => {
    try {
        const userId = req.userId;
        const user = await User.findById(userId).select("-password")
        res.send(user)
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }
})

export default router