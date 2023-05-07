import express from "express";
import { engine } from 'express-handlebars';

import dotenv from "dotenv";
dotenv.config();

import adminrouts from "./routs/adminRouts/adminCreateUser.js"
import doctorrouts from "./routs/doctorRouts/doctor-routs.js"
import studentrouts from "./routs/studentRouts/student-routs.js"


import User from "./database/models/users_model.js"
const app = express();



app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');



app.get("/login",async(req,res)=>{
    res.render("login",{layout:false})
})


//routing
app.use("/admin",adminrouts);
app.use("/doctor",doctorrouts);
app.use("/student",studentrouts);




app.listen(process.env.Port,()=>{
console.log(`app URL: http://localhost:${process.env.Port}`);
});