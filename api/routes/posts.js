const express = require('express')
// router
const router = express.Router()
// models
const controller = require('../controllers/post')
// middleware
const checkAuth = require('../middleware/checkAuth')

router.get('/', checkAuth, controller.getAllPosts)
router.get('/:id', checkAuth, controller.getOnePost)
router.post('/', checkAuth, controller.addPost)
router.put('/:id', checkAuth, controller.updatePost)
router.delete('/:id', checkAuth, controller.deletePost)

module.exports = router
