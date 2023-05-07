import {Router} from "express";
// import users_model from "../../database/models/users_model.js";

import departments_model from "../../database/models/enrollmetn_model.js";

import db from "../../database/MongoDBconnection.js";
const router = new Router();

router.get("/",(req,res)=>{
    res.render("adminTemplates/adminHomePage",{layout : false});
   
})

// router.get("/createUser",(req,res)=>{
//     users_model.create({
//         first_name: "ebrahim",
//         last_name: "sayid",
//         password: "200",
//         user_type:"student"
//     })
//     res.send("200 OK")

// })
router.get("/newCourse",(req,res)=>{
    departments_model.create({
        student_name: "mhmd",
        student_id: "2001",
        course_id: "general",
        grade: "0"
    })
    res.send("200 OK")

})




export default router;