const express = require('express')
const router = express.Router()
const register = require('../controllers/register')
const di = require('../services/di')

const registerController = register({ di })

router.post(`/`, registerController.post)

module.exports = router
