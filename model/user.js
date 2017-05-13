/**
 * Created by HUI on 11/05/2017.
 */
const db = require('../config/db.js'),
  userModel = '../schema/user.js';
const SupereduDb = db.Superedu; // 引入数据库

const User = SupereduDb.import(userModel); // 用sequelize的import方法引入表结构，实例化了User。

const createUser= async function (data) {
  await User.create({
    name:data.name,
    age:data.age,
    sex:data.sex,
    grade:data.grade
  })
  return true
}

const updateUser= async function (id,data) {
  await User.update(data,
    {
      where:{
        id,
      }})
  return true
}

const getUsers = async function () {
  const userInfo = await User.findAll({});

  return userInfo // 返回数据
}

const removeUser = async function (id) {
  await User.destroy({where:{
    id
  }})
}

module.exports = {
  getUsers,
  createUser,
  updateUser,
  removeUser
}
