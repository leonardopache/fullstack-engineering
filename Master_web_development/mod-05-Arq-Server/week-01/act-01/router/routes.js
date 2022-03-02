const express = require('express');
const router = express.Router();
const employee = require('../controllers/employee.controller')

/** Routes here*/
router.post('/employees', employee.create)
router.get('/employees', employee.get)
router.get('/employees/oldest', employee.getOldest)
router.get('/employees/:name', employee.getByBadges)

module.exports = router;