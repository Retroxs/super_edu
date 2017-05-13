/**
 * Created by HUI on 11/05/2017.
 */
const db = require('../config/db.js'),
  signModel = '../schema/sign.js'
const SupereduDb = db.Superedu; // 引入数据库
const Sign = SupereduDb.import(signModel); // 用sequelize的import方法引入表结构，实例化了User。

const createSign = async function (create_time) {
  await SupereduDb.query(`INSERT INTO sign (stu_id,sign,create_time) SELECT id,false,'${create_time}' from student`)
  return true
}

const getSign = async function (date) {
    const signTable=await SupereduDb.query('SELECT create_time,sign.id,sign,stu_id,name from student join sign on student.id = sign.stu_id where create_time=\''+date+'\'',{ type: SupereduDb.QueryTypes.SELECT })
    return signTable
}

const updateSign= async function (id,data) {
  await Sign.update(data,
    {
      where:{
        id:id,
      }})
  return true
}

module.exports = {
  createSign,
  getSign,
  updateSign
}
