/**
 * Created by HUI on 11/05/2017.
 */
const user = require('../model/user');
const jwt = require('jsonwebtoken')
const createUser =async function (ctx) {
  const data= ctx.request.body;
  const result = await user.createUser(data)
  ctx.body={
    success:true
  }
}

const updateUser = async function (ctx){
  const id = ctx.params.id
  const data= ctx.request.body
  const result = await user.updateUser(id,data)

  ctx.body = {
    success: true
  }
}

const removeUser = async function (ctx){
  const id = ctx.params.id;
  const result = await user.removeUser(id);

  ctx.body = {
    success: true
  }
}

const getUser =async function (ctx) {
  const result = await user.getUser()
  ctx.body=result
}

const login=async function (ctx) {
  const data= ctx.request.body;
  const userInfo = await user.getUser(data.username)

  if(userInfo!=null){
    if(userInfo.password!=data.password){
      ctx.response.status = 400
      ctx.body = {error: 'username or password is wrong'}
    }else{
      const userToken= {
        name:userInfo.username,
        id:userInfo.id
      }
      const secret = 'super_edu'
      const token = jwt.sign(userToken,secret)
      ctx.body={
        success:true,
        token:token
      }
    }
  }else{
    ctx.response.status = 400
    ctx.body = {error: 'username or password is wrong'}
  }
}

module.exports = {
  createUser,
  getUser,
  updateUser,
  removeUser,
  login
}
