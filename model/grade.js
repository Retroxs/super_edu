/**
 * Created by HUI on 11/05/2017.
 */
const db = require('../config/db.js'),
  gradeModel = '../schema/grade.js'
const SupereduDb = db.Superedu; // 引入数据库
const Grade = SupereduDb.import(gradeModel); // 用sequelize的import方法引入表结构，

const createGrade = async function (data) {
  await SupereduDb.query(`INSERT INTO grade (stu_id,exam_name,create_time) SELECT id,'${data.exam_name}','${data.create_time}' from student`)
  return true
}

const getGrade = async function (date) {
  const gradeTable = await SupereduDb.query('SELECT create_time,grade.id,stu_id,name,exam_name,score,teacher_sign from student join grade on student.id = grade.stu_id where create_time=\''+date+'\'', {type: SupereduDb.QueryTypes.SELECT})
  return gradeTable
}

const updateGrade = async function (id, data) {
  await Grade.update({
      score: data.score,
      teacher_sign: data.teacher_sign
    },
    {
      where: {
        id: id
      }
    })
  return true
}


module.exports = {
  createGrade,
  getGrade,
  updateGrade
}
