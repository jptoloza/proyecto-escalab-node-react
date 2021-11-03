const express = require('express')
const router = express.Router()
const roles = require('../controllers/roles')
const di = require('../services/di')
const { verifyJWT, validateRole } = require('../middlewares')

const rolesController = roles({ di })

router.get(`/`, [verifyJWT, validateRole('ADMINISTRADOR')], rolesController.get)
router.get(`/:id([a-zA-Z0-9]+)`, [verifyJWT, validateRole('ADMINISTRADOR')], rolesController.show)
router.post(`/`, [verifyJWT, validateRole('ADMINISTRADOR')], rolesController.post)
router.put(`/:id([a-zA-Z0-9]+)`, [verifyJWT, validateRole('ADMINISTRADOR')], rolesController.put)
router.delete(`/:id([a-zA-Z0-9]+)`, [verifyJWT, validateRole('ADMINISTRADOR')], rolesController.delete)

module.exports = router
