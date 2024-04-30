const userController = require('../controllers/users');

const userRouter = require('express').Router();

userRouter.post('/register', userController.register)
userRouter.post('/login', userController.login)
userRouter.get('/', userController.getAllUser)

module.exports = userRouter;