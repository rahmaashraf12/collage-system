import {Router} from "express";
import db from "../database/MongoDBconnection.js";
const router = new Router();
import bcrypt from 'bcryptjs';
import User from "../database/models/users_model.js";


router.get("/",async(req,res)=>{
  res.render("login")
})

router.post('/', async (req, res) => {
  const { name, password } = req.body;
  const user = await User.findOne({ name });
  if (!user) {
    return res.status(401).send('Invalid username or password');
  }
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).send('Invalid username or password');
  }
  res.send(`Welcome ${user.name}`);
});

export default router;