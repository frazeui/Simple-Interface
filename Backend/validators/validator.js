const joi=require('joi');
const validate_user=((req,res,next)=>{
    const schema=joi.object({
        username:joi.string().alphanum().min(3).max(30).required(),
        email:joi.string().email().required(),
        password:joi.string().min(6).required(),
        confirm_password:joi.string().valid(joi.ref('password')).required().messages({"any.only":"Password must match"})
    });
    const {error}=schema.validate(req.body);
    if(error){return res.status(400).json({message:error.details[0].message})}
    next();
})


module.exports={validate_user};