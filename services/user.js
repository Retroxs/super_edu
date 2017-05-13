/**
 * Created by HUI on 11/05/2017.
 */
const user = require('../model/user');

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
  const result = await user.getUsers()
  ctx.body=result
}

const login=async function (ctx) {
  const result = await user.getUsers()
  const username = result[0].username
  const password =result[0].password
  const data= ctx.request.body;

  if(data.username===username&&data.password===password){
    ctx.body={
      success: 'login success'
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
