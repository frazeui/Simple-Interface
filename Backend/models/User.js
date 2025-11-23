const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const { type } = require('os');
const { required } = require('joi');
const { timeStamp } = require('console');


const userSchema=new mongoose.Schema({
    username:{type:String,required:true,minlength:3,maxlength:30,trim:true},
    email:{type:String,required:true,unique:true,match:/^[^\s@]+@[^\s@]+\.[^\s@]+$/},
    password:{type:String,required:true,minlength:6}

},{timestamps:true});

userSchema.pre('save',async function(next){
    if(!this.isModified('password'))return next();
    this.password=await bcrypt.hash(this.password,10);
    next();
});

userSchema.method.comparePassword=async function(comparePassword){
    return await bcrypt.compare(comparePassword,this.password);
};


const User=mongoose.model('User',userSchema);
module.exports=User;
