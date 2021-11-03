const express = require('express')
const router = express.Router()
const users  = require('../controllers/users/users')
const user  = require('../controllers/users/user')
const { verifyJWT, validateRole } = require('../middlewares')
const di = require('../services/di')


/**
 * @swagger
 * components:
 *  schemas:
 *    Users:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *          description: email usuario
 *        firstname:
 *          type: string
 *          description: nombre usuario
 *        lastname:
 *          type: string
 *          description: apellido usuario
 *        rut:
 *          type: integer
 *          descripcion: rut usuario sin digito verificador
 *        dv:
 *          type: string
 *          description: digito verificador rut usuario
 *        active: 
 *          type: boolean
 *          description: si el usuario esta activo
 *      required:
 *        - email
 *        - firstname
 *        - lastname
 *        - rut
 *        - dv
 *        - active
 *      example:
 *        email: test@gmail.com
 *        firstname: Pedro Pablo
 *        lastname: Manzur Del Pino
 *        rut: 1
 *        dv: "9"
 *        active: true       
 */


/**
 * Users
 */
const usersController = users({ di })

/**
 * @swagger
 * /api/v1/users:
 *  get:
 *    summary: Listar todos los usuarios
 *    tags: [Users]
 *    parameters:
 *      - in: query
 *        name: paginate
 *        required: false
 *        schema:
 *          type: integer
 *        example: 0 para no paginar y 1 para paginar el resultado
 *    responses:
 *      200:
 *        description: Usuario Creado
 *        content:
 *          application/json:
 *            schema: array
 *            items:
 *              $ref: '#/components/schemas/Users'
 *      UnauthorizedError:
 *        description: Usuario no autorizado
 */
router.get(`/`, [verifyJWT, validateRole('ADMINISTRADOR')], usersController.get)

/**
 * @swagger
 * /api/v1/users/{id}:
 *  get:
 *    summary: Información de un usuario
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *          description: Id de usuario
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema: array
 *            items:
 *              $ref: '#/components/schemas/Users'
 *      UnauthorizedError:
 *        description: Usuario no autorizado
 */
router.get(`/:id([a-zA-Z0-9]+)`, [verifyJWT, validateRole('ADMINISTRADOR')], usersController.show)


/**
 * @swagger
 * /api/v1/users:
 *  post:
 *    summary: Crear un usuario
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            type: object
 *            $ref: '#/components/schemas/Users'
 *    responses:
 *      201:
 *        description: nuevo usuario creado
 *      UnauthorizedError:
 *        description: Usuario no autorizado
 */
router.post(`/`, [verifyJWT, validateRole('ADMINISTRADOR')], usersController.post)


/**
 * @swagger
 * /api/v1/users/{id}:
 *  put:
 *    summary: Actualizar un usuario
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *          description: Id de usuario
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            type: object
 *            $ref: '#/components/schemas/Users'
 *    responses:
 *      200:
 *        description: Usuario actualizado
 *      UnauthorizedError:
 *        description: Usuario no autorizado
 */
router.put(`/:id([a-zA-Z0-9]+)`, [verifyJWT, validateRole('ADMINISTRADOR')], usersController.put)


/**
 * @swagger
 * /api/v1/users/{id}:
 *  delete:
 *    summary: Eliminar un usuario
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *          description: Id de usuario
 *    responses:
 *      201:
 *        description: nuevo usuario creado
 *      UnauthorizedError:
 *        description: Usuario no autorizado
 */
router.delete(`/:id([a-zA-Z0-9]+)`, [verifyJWT, validateRole('ADMINISTRADOR')], usersController.delete)

/**
 * User
 */

const userController = user({ di })
router.post(`/:id([a-zA-Z0-9]+)/account`, [verifyJWT], userController.postImage)
router.put(`/:id([a-zA-Z0-9]+)/account`, [verifyJWT], userController.putAccount)
router.get(`/:id([a-zA-Z0-9]+)/notifications`, [verifyJWT], userController.getNotification)
router.get(`/:id([a-zA-Z0-9]+)/notifications/:nid([a-zA-Z0-9]+)`, [verifyJWT], userController.setNotification)


module.exports = router
