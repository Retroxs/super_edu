/**
 * Created by HUI on 11/05/2017.
 */
const finance = require('../model/finance');

const createFinance =async function (ctx) {
  const data= ctx.request.body;
  const result = await finance.createFinance(data)
  ctx.body={
    success:true
  }
}

const updateFinance = async function (ctx){
  const id = ctx.params.id
  const data= ctx.request.body
  const result = await finance.updateFinance(id,data)

  ctx.body = {
    success: true
  }
}

const removeFinance = async function (ctx){
  const id = ctx.params.id;
  const result = await finance.removeFinance(id);

  ctx.body = {
    success: true
  }
}

const getFinance =async function (ctx) {
  const result = await finance.getFinances()
  ctx.body=result
}

module.exports = {
  createFinance,
  getFinance,
  updateFinance,
  removeFinance
}
