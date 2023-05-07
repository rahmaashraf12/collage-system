import {Router} from "express";
import db from "../../database/MongoDBconnection.js";
const router = new Router();

router.get("/",(req,res)=>{
    res.render("studentTemplates/studentHomePage",{layout : false});   
})





export default router;