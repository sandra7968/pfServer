const express = require('express')
const router = new express.Router()
const userController = require('../Controllers/userController')
const projectController = require('../Controllers/projectController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerConfig = require('../Middlewares/multerMiddleware')
// register API
router.post('/user/register',userController.register)
// login
router.post('/user/login',userController.login)
// add-project
router.post('/project/add',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProjects)
// getuserprojects
router.get('/user/all-projects',jwtMiddleware,projectController.AllUserProjects)
// getallprojects
router.get('/projects/all',jwtMiddleware,projectController.getAllProjects)
// gethomeprojects
router.get('/projects/home-projects',projectController.getHomeProjects)
// edit project
router.put('/projects/edit/:id',jwtMiddleware,multerConfig.single("projectImage"),projectController.editProjectController)
// delete project
router.delete('/projects/remove/:id',jwtMiddleware,projectController.deleteProjectController)
// update user
router.put('/user/edit',jwtMiddleware,multerConfig.single("profileImage"),userController.editUser)
// export router
module.exports = router