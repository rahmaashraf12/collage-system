# project ERD
 
 
##  Storage
we 'll use a nosql database 

### Schema: ###
we 'll need at least the following collections to implement the service:

**1-Users table:**

| column | type |
|--------|------|
| user_id (pk)| int |
| first name | string |
| last name | string |
| password | string |
| user_type | string |

**2-Departments table:**

| column | type |
|--------|------|
| department_id (pk)| int |
| department_name | string |
| department_code | string |

**3-Courses table:**

| column | type |
|--------|------|
| course_id (pk)| int  |
| course_name | string |
| course_code | string |
| department_id (FK->2) | int |

**4-Materials table:**

| column | type |
|--------|------|
| material_id (pk)| int |
| material_name | string |
| material_code | string |
| course_id (FK->3)| int |

**5-Enrollments table:**

| column | type |
|--------|------|
| enrollment_id (pk)| int |
| student_id (FK->1)| string |
| course_id (FK->3)| string |
| grade | int |

**6-Attendance table:**

| column | type |
|--------|------|
| attendance_id (pk)| int |
| date | string |
| material_id (FK->4)| string |
| present_students | JSON array |

**7-Files table:**

| column | type |
|--------|------|
| file_id (pk)| int |
| file_name | string |
| file_path | string |
| material_id( FK->4 ) | int |

**8-success cources:**

| column | type |
|--------|------|
| studint id | int |
| course id| string |


**9-requiers of cources:**

| column | type |
|--------|------|
| courses ids | int |
