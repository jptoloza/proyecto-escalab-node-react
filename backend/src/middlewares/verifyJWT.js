const response = require("../helpers/response")
const jwt = require("jsonwebtoken")
const validateJwt = require('../helpers/validateJwt')
const CustomError = require('../classes/CustomError')
const di = require('../services/di')


const verifyJWT = async (req, res, next) => {
  try {
    let token = ""
    const auth = req.header("Authorization")
    if (typeof auth !== "undefined") {
      let _token = auth.split(" ")
      let type = _token[0]
      token = _token[1]
      if (type.toUpperCase() != "BEARER" || !token) {
        throw new CustomError(401, 'Token no válido.')
      }
    } else {
      token = req.query.token
    }
    if (!token) {
      throw new CustomError(401, 'Token no válido.')
    }
    const validate = validateJwt(token)
    if (validate) {
      req.uid = validate
      req.accessToken = token
      next()
    } else {
      throw new CustomError(401, 'Token no válido.')
    }
  } catch (e) {
    let message = e.message
    let code = parseInt(e.code) === 'NaN' || isNaN(e.code) ? 500 : parseInt(e.code)
    await di.Logs.create({
      ip: res.connection.remoteAddress,
      userid: req.uid,
      log: message,
    })
    res.status(code).send(response(code, { messages: message }))
  }
}

module.exports = verifyJWT
