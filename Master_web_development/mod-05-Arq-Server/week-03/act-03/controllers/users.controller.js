const createError = require('http-errors');
const User = require('../models/user.model')
const mailer = require('../config/mailer.config')

module.exports.create = (req, res, next) => {
    console.log('create one', req.body)
    const newUser = { name, email, password, bio } = req.body
    User.create(newUser)
        .then(user => {
            mailer.sendValidationEmail(user)
            res.status(201).json(user)
        })
        .catch(next)
}

module.exports.getAll = (req, res, next) => {
    //console.log('list all', req)
    User.find()
        .then(users => res.json(users))
        .catch(next)
}

module.exports.getById = (req, res, next) => {
    //console.log('find one by id', req)
    User.findById(req.params.id)
        .then(user => {
            if (user) {
                res.json(user)
            } else {
                next(createError(404, 'User not Found'))
            }
        })
        .catch(next)
}

module.exports.logout = (req, res, next) => {
    console.log('logout...')
    req.session.destroy()
    res.status(204).send()
}

module.exports.login = (req, res, next) => {
    console.log('login of: ', req.body)
    const login = { email, password } = req.body
    User.findOne({ email, active: true })
        .then(user => {
            if (user) {
                user
                    .checkPassword(password)
                    .then(match => {
                        if (match) {
                            req.session.userId = user.id
                            console.log(user)
                            res.json(user)
                        } else {
                            next(createError(401, 'Error data validation'))
                        }
                    }).catch(next)
            } else {
                next(createError(400, 'Error data validation'))
            }
        }).catch(next)
}

module.exports.activate = (req, res, next) => {
    console.log('activation of id', req.params)
    User.findByIdAndUpdate(req.params.id, { active: true }, { new: true})
        .then(user => {
            if (user) {
                res.json(user)
            } else {
                next(createError(404, 'User not Found'))
            }
        })
        .catch(next)
}
