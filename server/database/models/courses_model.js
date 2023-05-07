import { Schema ,model} from "mongoose";

const courses_schama = new Schema({
  course_name:{ 
    type: String,
    required:true
},
course_code:{ 
    type: String,
    required:true
},
department_id:{ 
    type: String,
    required:true
},
});


export default model("users",courses_schama);
