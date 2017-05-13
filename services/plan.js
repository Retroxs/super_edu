/**
 * Created by HUI on 11/05/2017.
 */
const plan = require('../model/plan');
const student = require('../model/student')

const createPlan =async function (ctx) {
  const date= ctx.query.time;
  if(date) {

    const hasCreated = await plan.getPlan(date)
    if(hasCreated.length>0){
      ctx.response.status=400
      ctx.body={error:'today has created an sign table'}
    }
    else{
        await plan.createPlan(date)
      ctx.body = {
        success: true
      }
    }

  }else{
    ctx.response.status=400
    ctx.body={error:'you have no content'}

  }
}


const getPlan = async function (ctx) {
  const date= ctx.query.time
  const result = await plan.getPlan(date)
  if(result.length>0){
    ctx.body=result
  }else {
    ctx.response.status = 400
    ctx.body={error:'today has no plan table'}
  }
}

const Plan = async function (ctx){
  const id = ctx.params.id
  const data= ctx.request.body
  const result = await plan.updatePlan(id,data)

  ctx.body = {
    success: true
  }
}

module.exports = {
  createPlan,
  getPlan,
  Plan
}
