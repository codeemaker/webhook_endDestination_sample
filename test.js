import { Router } from "express"
import LoginModel from "./models/sample.js";
import multer from "multer";
import { extname } from "path";

const loginRoute = Router();

let storage =multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./uploads/")
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname+"-"+Date.now()+"."+extname(file.originalname))
    }
})

const uplaod = multer({
    storage:storage
});


loginRoute.post("/login",uplaod.single("file"),async (req,res)=>{
    try{
    //    await LoginModel.create({
    //         name:"Tony Stark",
    //         role:"Iron man"
    //     })
        res.status(200).json({"login":true})
    }
    catch(err){
        console.log(err)
        res.status(500).json({"login":true})
    }
})

export default loginRoute;