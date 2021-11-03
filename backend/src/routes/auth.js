const express = require('express')
const router = express.Router()
const verifyJWT = require('../middlewares/verifyJWT')
const auth = require('../controllers/auth')
const di = require('../services/di')

const authController = auth({ di })

router.post(`/`, authController.post)
router.put(`/`, verifyJWT, authController.put)




module.exports = router
