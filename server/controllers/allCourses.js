import courses_model from "../database/models/courses_model.js";
import departments_model from "../database/models/departments_model.js";


export const allCourses=async(req,res)=>{
    const courses=await courses_model.find().lean();
    const departments=await departments_model.find().lean();

    res.render("adminTemplates/adminAddCourse",{layout : false,courses,departments});

}


export const store=(req,res)=>{
    console.log(req.body);
    const id=req.body.id;
    const name=req.body.name;
    const code=req.body.code;
    const department=req.body.department;
    const requre_course=req.body.requre_course;



    courses_model.create({
        course_name : name,
        course_code : code,
        department_id : department,
        requre_course : requre_course
    });

}