import {Router} from "express";
import users_model from "../../database/models/users_model.js";
import db from "../../database/MongoDBconnection.js";
const router = new Router();

router.get("/",(req,res)=>{
    res.render("adminHomePage",{layout : false});
   
})

router.get("/createUser",(req,res)=>{
    users_model.create({
        fist_name: "mhmd",
        last_name: "ahmd",
        password: "100",
        user_type:"admin"
    })
    res.send("200 OK")

})




export default router;