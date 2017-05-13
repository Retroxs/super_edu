/**
 * Created by HUI on 11/05/2017.
 */
const sign = require('../model/sign');
const student = require('../model/student')

const createSign =async function (ctx) {
  const date= ctx.query.time;
  if(date) {
    const hasCreated=await sign.getSign(date)
    if(hasCreated.length>0){
      ctx.response.status=400
      ctx.body={error:'today has created an sign table'}
    }else{
      await sign.createSign(date)
      ctx.body = {
        success: true
      }
    }
  }else{
    ctx.response.status=400
    ctx.body={error:'please select date'}

  }
}


const getSign = async function (ctx) {
  const date= ctx.query.time
    const result = await sign.getSign(date)
  console.log(result.length)
    if(result.length>0){
      ctx.body=result
    }else {
      ctx.response.status = 400
      ctx.body={error:'today has no sign table'}
    }
}

const Sign = async function (ctx){
  const id = ctx.params.id
  const data= ctx.request.body
  const result = await sign.updateSign(id,data)

  ctx.body = {
    success: true
  }
}

// const removeStudent = async function (ctx){
//   const id = ctx.params.id;
//   const result = await student.removeStudent(id);
//
//   ctx.body = {
//     success: true
//   }
// }
//
module.exports = {
  createSign,
  getSign,
  Sign
}
