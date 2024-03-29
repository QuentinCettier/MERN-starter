/*
Import & config
*/
const express = require('express')
const postRouter = express.Router()

/*
Definition
*/
class PostRouterClass {
  routes () {
    // Create
    postRouter.post('/', (req, res) => {
      res.json({ msg: 'Create Post', data: req.body })
    })

    // Read
    postRouter.get('/', (req, res) => {
      res.json({ msg: 'Read Post', data: 'slr' })
    })

    // Update
    postRouter.put('/', (req, res) => {
      res.json({ msg: 'Update Post' })
    })

    // Delete
    postRouter.delete('/', (req, res) => {
      res.json({ msg: 'Delete Post' })
    })
  }

  init () {
    this.routes()
    return postRouter
  }
}

module.exports = PostRouterClass
