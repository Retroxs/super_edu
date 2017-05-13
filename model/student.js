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

module.exports = {
  getStudents,
  createStudent,
  updateStudent,
  removeStudent
}
