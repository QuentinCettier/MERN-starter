/*
Imports
*/

const { Router } = require('express')
// Inner
const AuthRouterClass = require('./auth/auth.routes')
const PostRouterClass = require('./post/post.routes')

// const { setAuthentication } = require('./../services/auth.serv')
// setAuthentication(passport)
//

/*
Definition des router
*/
// Parent
const mainRouter = Router()
const apiRouter = Router()

// // Child
const authRouter = new AuthRouterClass()
const postRouter = new PostRouterClass()

/*
Définition des routes
*/
mainRouter.use('/api', apiRouter)
apiRouter.use('/auth', authRouter.init())
apiRouter.use('/post', postRouter.init())
//

/*
Export
*/
module.exports = mainRouter
//
