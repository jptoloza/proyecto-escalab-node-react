// User Controllers

const handle = ({ di }) => ({

  postImage: async (req, res) => {
    const id = req.uid
    const pid = req.params.id
    try {
      if ( id !== pid) {
        throw new di.CustomError(401, 'Usuario no autorizado.')
      }
      const user = await di.Users.findOne({ _id: pid, active: true }).exec()
      if (user === null) {
        throw new di.CustomError(400, 'Usuario no existe.')
      }

      console.log(user._id)
      const body = req.body
      const schema = di.Joi.object().keys({
        foto: di.Joi.string().empty().required().messages({
          "string.base": `Foto no es válido.`,
          "string.empty": `Foto no es válido.`,
          "any.required": `Foto es requerido.`,
        })
      })
      const validate = di.validateSchema(schema, body)
      if (validate != null) {
        throw new di.CustomError(400, `${validate}`)
      }

      user.foto = body.foto
      await await user.updateOne(user)
      const roles = await di.UsersRoles.find({userid: user._id}).populate('roleid').exec()
      let userRoles = []
      if (roles.toString().length) {
        roles.forEach(element => {
          userRoles.push(element.roleid.role)
        })
      }
      const token = di.createJWT({
        uid: user._id,
        name: `${user.firstname} ${user.lastname}`,
        firstname: user.firstname,
        lastname: user.lastname,
        rut: user.rut,
        dv: user.dv,
        foto: user.foto,
        email: user.email,
        roles: userRoles
      })
      if (!token) {
        throw new di.CustomError(500, 'Token error.')
      }
      await di.Logs.create({
        ip: res.connection.remoteAddress,
        userid:  user.email,
        log: 'UPDATE FOTO ACCOUNT',
      })
      res.status(201).send(di.response(201, { user, access_token: token }))

    } catch (e) {
      let message = e.message
      let code = parseInt(e.customCode) === 'NaN' || isNaN(e.customCode) ? 500 : parseInt(e.customCode)
      await di.Logs.create({
        ip: res.connection.remoteAddress,
        userid: req.uid,
        log: message,
      })
      res.status(code).send(di.response(code, { messages: message }))
    }
  },

  putAccount: async (req, res) => {
    const id = req.uid
    const pid = req.params.id
    try {
      if ( id !== pid) {
        throw new di.CustomError(401, 'Usuario no autorizado.')
      }
      const user = await di.Users.findOne({ _id: id, active: true }).exec()
      if (user === null) {
        throw new di.CustomError(404, 'Usuario no existe.')
      }
      const body = req.body
      const schema = di.Joi.object().keys({
        firstname: di.Joi.string().empty().required().messages({
          "string.base": `Nombre no es válido.`,
          "string.empty": `Nombre no es válido.`,
          "any.required": `Nombre es requerido.`,
        }),
        lastname: di.Joi.string().empty().required().messages({
          "string.base": `Apellido no es válido.`,
          "string.empty": `Apellido no es válido.`,
          "any.required": `Apellido es requerido.`,
        }),
        rut: di.Joi.string().empty().required().messages({
          "string.base": `R.U.T. no es válido.`,
          "string.empty": `R.U.T. no es válido.`,
          "any.required": `R.U.T. es requerido.`,
        }),
        dv: di.Joi.string().max(1).empty().required().messages({
          "string.base": `RUT no es válido.`,
          "string.empty": `RUT no es válido.`,
          "any.required": `RUT es requerido.`,
        }),
        email: di.Joi.string().empty().required().messages({
          "string.base": `Correo Electrónico no es válido.`,
          "string.empty": `Correo Electrónico no es válido.`,
          "any.required": `Correo Electrónico es requerido.`,
        })
      })
      const validate = di.validateSchema(schema, body)
      if (validate != null) {
        throw new di.CustomError(400, `${validate}`)
      }

      let logout = 0;
      if ( req.body.email !== user.email) {
        logout = 1      
      }
      user.firstname = req.body.firstname
      user.lastname = req.body.lastname
      user.rut = req.body.rut
      user.dv = req.body.dv
      user.email = req.body.email
      await user.updateOne(user, {upsert: true})

      let responseAccout;
      if (logout) {
        responseAccout = { logout: 1 }
      } else {
          const roles = await di.UsersRoles.find({userid: user._id}).populate('roleid').exec()
          let userRoles = []
          if (roles.toString().length) {
            roles.forEach(element => {
              userRoles.push(element.roleid.role)
            })
          }
          const token = di.createJWT({
            uid: user._id,
            name: `${user.firstname} ${user.lastname}`,
            firstname: user.firstname,
            lastname: user.lastname,
            rut: user.rut,
            dv: user.dv,
            foto: user.foto,
            email: user.email,
            roles: userRoles
          })
          if (!token) {
            throw new di.CustomError(500, 'Token error.')
          }
          responseAccout = { 
            user, 
            access_token: token, 
            logout: 0
          }
      }
      await di.Logs.create({
        ip: res.connection.remoteAddress,
        userid:  user.email,
        log: 'UPDATE ACCOUNT',
      })
      res.status(201).send(di.response(200, responseAccout))

    } catch (e) {

      // console.log(e)

      let message = e.message
      let code = parseInt(e.customCode) === 'NaN' || isNaN(e.customCode) ? 500 : parseInt(e.customCode)
      await di.Logs.create({
        ip: res.connection.remoteAddress,
        userid: req.uid,
        log: message,
      })
      res.status(code).send(di.response(code, { messages: message }))
    }
  },







  getNotification: async (req, res) => {
    try {
      if (req.params.id != req.uid) {
        throw new di.CustomError(401, 'Usuario no autorizado.')
      }
      const page = 
        req.query.page && !Number.isNaN(req.query.page)
          ? parseInt(req.query.page)
          : 1
      const options = {
        limit: process.env.PAGINATE,
        sort: { updatedAt : -1},
        page,
        populate: [{ 
          model: 'Notifications',
          path: 'notificationid'
        }]
      }
      const data = await di.UserNotifications.paginate( { userid: new di.ObjectId(req.params.id) }, options)


      res.status(200).send(di.response(200, data))

    } catch (e) {
      let message = e.message
      let code = parseInt(e.customCode) === 'NaN' || isNaN(e.customCode) ? 500 : parseInt(e.customCode)
      await di.Logs.create({
        ip: res.connection.remoteAddress,
        userid: req.uid,
        log: message,
      })
      res.status(code).send(di.response(code, { messages: message }))
    }
  },

  setNotification: async (req, res) => {
    try {
      if (req.params.id != req.uid) {
        throw new di.CustomError(401, 'Usuario no autorizado.')
      }
      const id = req.params.id
      const nid = req.params.nid  
      let notification = await di.UserNotifications.findOne({ 
        userid: new di.ObjectId(id), _id: new di.ObjectId(nid)
      }).exec()
      if (notification === null) {
        throw new di.CustomError(400, 'Notificación no existe.')
      }
      notification.read = true
      console.log(notification)
      await notification.updateOne(notification)


      await di.Logs.create({
        ip: res.connection.remoteAddress,
        userid: req.uid,
        log: 'NOTIFICATION USUARIO LEÍDA',
      })
      res.status(200).send(di.response(200, notification))

    } catch (e) {
      let message = e.message
      let code = parseInt(e.customCode) === 'NaN' || isNaN(e.customCode) ? 500 : parseInt(e.customCode)
      await di.Logs.create({
        ip: res.connection.remoteAddress,
        userid: req.uid,
        log: message,
      })
      res.status(code).send(di.response(code, { messages: message }))
    }
  },
})

module.exports = handle
