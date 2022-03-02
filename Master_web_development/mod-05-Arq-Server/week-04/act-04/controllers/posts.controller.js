const createError = require('http-errors');
const Post = require('../models/post.model')

module.exports.create = (req, res, next) => {
    //console.log('create one', req.body)
    const newPost = { title, text, author, image } = req.body
    
    if(req.file){
        newPost.image = req.file.path
    }

    Post.create(newPost)
        .then(post => res.status(201).json(post))
        .catch(next)
}

module.exports.getAll = (req, res, next) => {
    //console.log('list all', req)
    Post.find()
        .then(posts => res.json(posts))
        .catch(next)
}

module.exports.getById = (req, res, next) => {
    //console.log('find one by id', req)
    Post.findById(req.params.id)
        .then(post => {
            if (post) {
                res.json(post)
            } else {
                next(createError(404, 'Post not Found'))
            }
        })
        .catch(next)
}

module.exports.update = (req, res, next) => {
    //console.log('patch one', req)
    const newPost = { title, text } = req.body
    Post.findByIdAndUpdate(req.params.id, newPost, { new: true })
        .then(post => {
            if (post) {
                res.json(post)
            } else {
                next(createError(404, 'Post not Found'))
            }
        })
        .catch(next)
}

module.exports.delete = (req, res, next) => {
    //console.log('delete one', req)
    Post.findByIdAndDelete(req.params.id)
        .then(() => {
            res.status(204).send()
        })
        .catch(next)
}