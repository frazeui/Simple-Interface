const express=require("express");
const path=require('path');
const cors=require("cors");
const compression=require("compression");
const winston=require("winston");
const route=require('../Routes/auth_route');
const helmet=require("helmet");

const app=express();
const PORT=process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(compression());
app.use(helmet());
app.use(cors());

const logger=winston.createLogger({
    transports:[
        new winston.transports.Console()
    ],
    level:'info',
    format:winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    )
});
logger.info("Server is starting...")

app.use('/',route);
app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}`)});
