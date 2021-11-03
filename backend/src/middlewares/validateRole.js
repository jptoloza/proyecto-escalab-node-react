const response = require('../helpers/response')
const UsersRoles = require('../models/usersroles')
const CustomError = require('../classes/CustomError')
const Logs = require('../models/logs')

const validateRole = (...roles) => {
  return async (req, res, next) => {
    const uid = req.uid
    try {
      const userRoles = await UsersRoles.find({userid: uid }).populate('roleid').exec()
      if (!userRoles) {
        throw new CustomError(401, 'Rol no válido1.')
      }
      let succeeding = false
      userRoles.forEach((e) => {
        if (roles.includes(e.roleid.role.toString())) {
          succeeding = true
        }
      })
      if (succeeding) {
        next()
      } else {
        throw new CustomError(401, 'Rol no válido.')
      }

    } catch (e) {
      let message = e.message
      let code = parseInt(e.code) === 'NaN' || isNaN(e.code) ? 500 : parseInt(e.code)
      await Logs.create({
        ip: res.connection.remoteAddress,
        userid: req.uid,
        log: message,
      })
      res.status(code).send(response(code, { messages: message }))
    }
  }
}

module.exports = validateRole
