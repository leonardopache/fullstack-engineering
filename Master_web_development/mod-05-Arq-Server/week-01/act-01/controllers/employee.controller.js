const data = require('../data/employees.json')
const createError = require('http-errors');

function pagination(array, page) {
  const posInit = (2 * (page - 1))
  const posEnd = (2 * (page - 1)) + 2
  return array.slice(posInit, posEnd)
}

module.exports.create = (req, res, next) => {
  const { name, age, phone, privileges, favorites, finished, badges, points } = req.body
  if (name && age && phone && privileges && favorites && finished && badges && points) {
    const employee = req.body
    console.log(employee)
    data.push(employee)
    res.send(employee)
  } else {
    next(createError(400, "{'code':'bad_request'}"))
  }
}

module.exports.get = (req, res, next) => {
  newData = data
  console.log(req.query)
  page = req.query.page ? req.query.page : false
  user = req.query.user ? true : false
  badges = req.query.badges ? req.query.badges : false

  if (user) {
    newData = newData.filter(d => d.privileges === 'user')
  }
  if (badges) {
    newData = newData.filter(d => {
      return (d.badges.indexOf(badges) >= 0);
    })
  }
  if (page) {
    newData = pagination(newData, page)
  }
  res.send(newData)
}

module.exports.getOldest = (req, res, next) => {
  console.log('Oldest one')
  data.sort((a, b) => b.age - a.age);
  res.send(data[0])
}

module.exports.getByBadges = (req, res, next) => {
  console.log(req.params)
  const name = req.params.name
  newData = data.filter(d => d.name.toUpperCase() === name.toUpperCase())
  if (newData.length > 0) {
    res.send(newData)
  } else {
    next(createError(404, 'user not found'))
  }
}