/**
 * Created by HUI on 11/05/2017.
 */
const db = require('../config/db.js'),
  financeModel = '../schema/finance.js';
const SupereduDb = db.Superedu; // 引入数据库

const Finance = SupereduDb.import(financeModel); // 用sequelize的import方法引入表结构，实例化了User。

const createFinance= async function (data) {
  await Finance.create({
    stu_id:data.stu_id,
    should_pay:data.should_pay,
    pay:data.pay,
    status:data.status,
    teacher_sign:data.teacher_sign,
    create_time:data.create_time,
  })
  return true
}

const updateFinance= async function (id,data) {
  await Finance.update(data,
    {
      where:{
        id,
      }})
  return true
}

const getFinances = async function () {
  const financeInfo = await SupereduDb.query('SELECT finance.id,create_time,stu_id,name,should_pay,pay,status,teacher_sign from student join finance on student.id = finance.stu_id', {type: SupereduDb.QueryTypes.SELECT})
  return financeInfo // 返回数据
}

const removeFinance = async function (id) {
  await Finance.destroy({where:{
    id
  }})
}

module.exports = {
  getFinances,
  createFinance,
  updateFinance,
  removeFinance
}
