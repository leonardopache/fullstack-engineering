const express = require('express')
const router = express.Router()

const postsController = require('../controllers/posts.controller')

// Routers
router.get('/', (req, res, next) => {
    res.json({'app': 'alive'})
})

router.post('/posts', postsController.create)
router.get('/posts', postsController.getAll)
router.get('/posts/:id', postsController.getById)
router.patch('/posts/:id', postsController.update)
router.delete('/posts/:id', postsController.delete)

module.exports = router