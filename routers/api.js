/**
 * restful api 子路由
 */
const student = require('../services/student');
const sign = require('../services/sign');
const grade = require('../services/grade');
const plan = require('../services/plan');
const finance = require('../services/finance');
const user = require('../services/user');
const router = require('koa-router')()

//student api
router.post('/student/add',student.createStudent)
router.get('/student/info',student.getStudent)
router.delete('/student/del/:id',student.removeStudent)
router.post('/student/update/:id',student.updateStudent)

//sign api
router.post('/sign/create',sign.createSign)
router.get('/getsign',sign.getSign)
router.post('/sign/:id',sign.Sign)

//grade api
router.post('/grade/create',grade.createGrade)
router.get('/grade/info',grade.getGrade)
router.post('/grade/update/:id',grade.Grade)
router.delete('/grade/del/:id',grade.removeGrade)


//plan api
router.post('/plan/create',plan.createPlan)
router.get('/plan/info',plan.getPlan)
router.post('/plan/update/:id',plan.Plan)

//finance api
router.post('/finance/add',finance.createFinance)
router.get('/finance/info',finance.getFinance)
router.delete('/finance/del/:id',finance.removeFinance)
router.post('/finance/update/:id',finance.updateFinance)
router.delete('/finance/del/:id',finance.removeFinance)

//login
router.post('/user/login',user.login)

//student
router.get('/student/:id',student.findStudent)

module.exports = router
