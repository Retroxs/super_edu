/**
 * Created by HUI on 11/05/2017.
 */
const db = require('../config/db.js'),
  studentModel = '../schema/student.js';
const SupereduDb = db.Superedu; // 引入数据库

const Student = SupereduDb.import(studentModel); // 用sequelize的import方法引入表结构，实例化了User。

const createStudent= async function (data) {
  await Student.create({
    name:data.name,
    age:data.age,
    sex:data.sex,
    grade:data.grade
  })
  return true
}

const updateStudent= async function (id,data) {
  await Student.update(data,
    {
      where:{
        id,
      }})
  return true
}

const getStudents = async function () {
  const studentInfo = await Student.findAll({});

  return studentInfo // 返回数据
}

const removeStudent = async function (id) {
  await Student.destroy({where:{
    id
  }})
}

const findStudent = async function(data){
  const studentInfo=await SupereduDb.query(`SELECT * from student where id=${data.stu_id}`,{ type: SupereduDb.QueryTypes.SELECT })
  if(studentInfo.length===1){
    const sign = await SupereduDb.query(`SELECT sign from sign where stu_id=${data.stu_id} and create_time='${data.create_time}'`,{ type: SupereduDb.QueryTypes.SELECT })
    const score =await SupereduDb.query(`SELECT exam_name,score,create_time from grade where stu_id=${data.stu_id}`,{ type: SupereduDb.QueryTypes.SELECT })
    const plan =await SupereduDb.query(`SELECT content,status,create_time from plan where stu_id=${data.stu_id}`,{ type: SupereduDb.QueryTypes.SELECT })
    const finance =await SupereduDb.query(`SELECT should_pay,pay,create_time,status from finance where stu_id=${data.stu_id}`,{ type: SupereduDb.QueryTypes.SELECT })
    studentInfo[0].sign=sign[0].sign;
    studentInfo[0].score=score;
    studentInfo[0].plan=plan;
    studentInfo[0].finance=finance;
    studentInfo[0].time=data.create_time;
    return studentInfo
  }
  else{
    return false
  }

}
module.exports = {
  getStudents,
  createStudent,
  updateStudent,
  removeStudent,
  findStudent
}
