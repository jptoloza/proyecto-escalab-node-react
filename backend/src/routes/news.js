const express = require('express')
const router = express.Router()
const news = require('../controllers/news')
const di = require('../services/di')
const { verifyJWT, validateRole } = require('../middlewares')

const newsController = news({ di })

router.get(`/`, [verifyJWT], newsController.get)
router.get(`/:id([a-zA-Z0-9]+)`, [verifyJWT], newsController.show)
router.post(`/`, [verifyJWT, validateRole('ADMINISTRADOR')], newsController.post)
router.put(`/:id([a-zA-Z0-9]+)`, [verifyJWT, validateRole('ADMINISTRADOR')], newsController.put)
router.delete(`/:id([a-zA-Z0-9]+)`, [verifyJWT, validateRole('ADMINISTRADOR')], newsController.delete)

module.exports = router
