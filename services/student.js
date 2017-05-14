/**
 * Created by HUI on 11/05/2017.
 */
const student = require('../model/student');

const createStudent =async function (ctx) {
  const data= ctx.request.body;
  const result = await student.createStudent(data)
  ctx.body={
    success:true
  }
}

const updateStudent = async function (ctx){
  const id = ctx.params.id
  const data= ctx.request.body
  const result = await student.updateStudent(id,data)

  ctx.body = {
    success: true
  }
}

const removeStudent = async function (ctx){
  const id = ctx.params.id;
  const result = await student.removeStudent(id);

  ctx.body = {
    success: true
  }
}

const getStudent =async function (ctx) {
  const result = await student.getStudents()
  ctx.body=result
}

const findStudent = async function (ctx) {
  const data={}
  data.stu_id = ctx.params.id
  data.create_time = ctx.query.time
  const result = await student.findStudent(data)
  if(result){
    ctx.body=result

  }
  else{
    ctx.response.status = 400
    ctx.body={error:'no this student'}
  }
}
module.exports = {
  createStudent,
  getStudent,
  updateStudent,
  removeStudent,
  findStudent
}
