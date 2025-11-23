const express=require("express");
const router=express.Router();
const path=require("path");
const {register_user}=require('../controllers/auth_register');
const {loginUser}=require('../controllers/auth_login');
const {validate_user}=require('../validators/validator');

router.get('/',(req,res)=>{
    res.sendFile((path.join(__dirname,"../../Frontend/first.html")));
})

router.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../Frontend/register.html'));
    
})
router.post('/register', validate_user, (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Missing credentials' });
  }

  // Simulate success without DB
  res.status(201).json({ message: 'User registered successfully (test mode)' });
});

router.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../Frontend/login.html'));
})

router.use(express.static(path.join(__dirname,'../../Frontend'),{
    setHeaders:(res,path)=>{
        res.set('Cache-Control','no-cache');
    }
}))

router.post('/register',validate_user,register_user);
router.post('/login',loginUser);

module.exports=router;
