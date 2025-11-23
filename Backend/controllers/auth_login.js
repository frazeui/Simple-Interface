const User=require('../models/User');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
require('dotenv').config();
const compression=require('compression');

const loginUser=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const existinguser=await User.findOne({email});
        if(!existinguser){return res.status(400).json({message:"Invalid Email"})}
        const isPasswordValid=await bcrypt.compare(password,existinguser.password);
        if(!isPasswordValid){return res.status(400).json({message:"Invalid Password "})}
        const token=jwt.sign({id:existinguser._id},process.env.JWT_SECRET,{expiresIn:'1h'});
        res.status(200).json({message:"Login Successful",token});
    } catch (error) {
        return res.status(500).json({message:error.message});   
    }
}

module.exports={loginUser};