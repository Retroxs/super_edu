/**
 * Created by HUI on 11/05/2017.
 */
const db = require('../config/db.js'),
  planModel = '../schema/plan.js'
const SupereduDb = db.Superedu; // 引入数据库
const Plan = SupereduDb.import(planModel); // 用sequelize的import方法引入表结构，

const createPlan = async function (date) {
  await SupereduDb.query(`INSERT INTO plan (stu_id,status,create_time) SELECT id,false,'${date}' from student`)
  return true
}

const getPlan = async function (date) {
  const planTable = await SupereduDb.query('SELECT plan.id,create_time,stu_id,name,teacher_sign,content,status from student join plan on student.id = plan.stu_id where create_time=\'' + date + '\'', {type: SupereduDb.QueryTypes.SELECT})
  return planTable
}

const updatePlan = async function (id, data) {
  await Plan.update({
      content: data.content,
      status: data.status,
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
  createPlan,
  getPlan,
  updatePlan
}
