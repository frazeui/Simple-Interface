const User=require('../models/User');
const bcrypt=require('bcrypt');

const register_user=async(req,res)=>{
    try{
        const existing_user=await User.findOne({email:req.body.email});
        if(existing_user){return res.status(400).json({message:"User already exists"})}
        else{
            const user=new User({
                username:req.body.username,
                email:req.body.email,
                password:await bcrypt.hash(req.body.password,10)
            });
            if(!req.body.username || !req.body.email || !req.body.password){
                return res. status(400).json({message:"All fields are required"});
            }
            await user.save();
            res.status(200).json({message:"User registered successfully",user:{id:user._id,email:user.email}});
        }
    }
    catch(error){
        res.status(500).json({message:"Internal Server Error"});
    }
}

module.exports={register_user};