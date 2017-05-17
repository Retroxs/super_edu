/**
 * Created by HUI on 11/05/2017.
 */
const grade = require('../model/grade');
const student = require('../model/student')

const createGrade = async function (ctx) {
  const data = ctx.request.body;
  await grade.createGrade(data)
  ctx.body={
    success:true
  }
}

const getGrade = async function (ctx) {
  const date = ctx.query.time
  const result = await grade.getGrade(date)
  if (result.length > 0) {
    ctx.body = result
  } else {
    ctx.response.status = 400
    ctx.body = {error: 'today has no grade table'}
  }
}

const Grade = async function (ctx) {
  const id = ctx.params.id
  const data = ctx.request.body
  const result = await grade.updateGrade(id, data)

  ctx.body = {
    success: true
  }
}

const removeGrade = async function (ctx){
  const id = ctx.params.id;
  const result = await grade.removeGrade(id);

  ctx.body = {
    success: true
  }
}

module.exports = {
  createGrade,
  getGrade,
  Grade,
  removeGrade
}
