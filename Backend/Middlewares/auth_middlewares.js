const jwt=require("jsonwebtoken");
const dotenv=require("dotenv");
dotenv.config();


const authenticate_token=(async(req,res,next)=>{
    const token=req.header("Authorization")?.split(" ")[1];
    if(!token){return res.status(401).json({message:"Access Denied. No Token Provided"})}
    try{
        const verified=jwt.verify(token,process.env.JWT_SECRET);
        req.user=verified;
        next();
    }
    catch(error){
        res.status(401).json({message:"Invalid Token"});
    }
});

module.exports={authenticate_token};