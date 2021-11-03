const express = require('express')
const router = express.Router()
const notifications = require('../controllers/notifications')
const di = require('../services/di')
const { verifyJWT, validateRole } = require('../middlewares')


const notificationsController = notifications({ di })

router.get(`/`, [verifyJWT, validateRole('ADMINISTRADOR')], notificationsController.get)
router.get(`/:id([a-zA-Z0-9]+)`, [verifyJWT, validateRole('ADMINISTRADOR')], notificationsController.show)
router.post(`/`, [verifyJWT, validateRole('ADMINISTRADOR')], notificationsController.post)
router.put(`/:id([a-zA-Z0-9]+)`, [verifyJWT, validateRole('ADMINISTRADOR')], notificationsController.put)
router.delete(`/:id([a-zA-Z0-9]+)`, [verifyJWT, validateRole('ADMINISTRADOR')], notificationsController.delete)

module.exports = router
