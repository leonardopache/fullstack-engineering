const express = require('express')
const router = express.Router()

const usersController = require('../controllers/users.controller')
const postsController = require('../controllers/posts.controller')

const auth = require('../middlewares/auth.middleware')

const upload = require('../config/multer.config')

// Routers
router.get('/', )

router.post('/login', usersController.login)
router.post('/logout', auth.isAuthenticated, usersController.logout)
router.get('/users/:id/activate', usersController.activate)

router.post('/users', usersController.create)
router.get('/users', auth.isAuthenticated, usersController.getAll)
router.get('/users/:id', auth.isAuthenticated, usersController.getById)


router.post('/posts', upload.single('image'), postsController.create)
router.get('/posts', auth.isAuthenticated, postsController.getAll)
router.get('/posts/:id', auth.isAuthenticated, postsController.getById)
router.patch('/posts/:id', auth.isAuthenticated, postsController.update)
router.delete('/posts/:id', auth.isAuthenticated, postsController.delete)

module.exports = router