import express from "express";
import { engine } from 'express-handlebars';

import dotenv from "dotenv";
dotenv.config();

import adminrouts from "./routs/adminRouts/adminCreateUser.js"
// import { Collection } from "mongoose";
import User from "./database/models/users_model.js"
const app = express();

// import  Path  from "mongoose";
// app.use(express.json())

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');


app.get("/login",async(req,res)=>{
    res.render("login",{layout:false})
})



app.use("/admin",adminrouts);



app.listen(process.env.Port,()=>{
console.log(`app URL: http://localhost:${process.env.Port}`);
});