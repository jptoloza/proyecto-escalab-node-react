// Users Controllers

const modelsParams = {
  firstname: 'string',
  lastname: 'string',
  email: 'string',
  rut: 'number',
  dv: 'string',
  active: 'boolean',
  online: 'boolean'
}

const handle = ({ di }) => ({

  get: async (req, res) => {
    try {
      const page = 
        req.query.page && !Number.isNaN(req.query.page)
          ? parseInt(req.query.page)
          : 1
      const limit = 
        req.query.limit && !Number.isNaN(req.query.limit)
          ? parseInt(req.query.limit)
          : process.env.PAGINATE 
      const sort = req.query.sort ? di.orderBy(req.query.sort) : ""
      const options = {
        limit: process.env.PAGINATE,
        sort: sort,
        page
      }
      const filters = di.queryFilters(req.query, modelsParams)
      let data      
      if (req.query.paginate == 0) {
        if (filters) {
          data = await di.Users.find( filters ).sort(sort) 
        } else {
          data = await di.Users.find().sort(sort) 
        }
      } else {
        if (filters) {
          data = await di.Users.paginate( filters , options)
        } else {
          data = await di.Users.paginate({}, options)
        }
      }
      res.status(200).send(di.response(200, { docs: data }))

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


  show: async (req, res) => {

    try {
      const id = req.params.id
      const user = await di.Users.findById(id).exec()
      if (user === null) throw new di.CustomError(404, 'Usuario no existe.')
      else res.status(200).send(di.response(200, user))

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


  post: async (req, res) => {
    const session = await di.mongoose.startSession()
    session.startTransaction()
    try {
      const body = req.body
      const schema = di.Joi.object().keys({
        email: di.Joi.string()
          .email({ minDomainSegments: 2, tlds: { allow: ["com","cl"] } })
          .empty()
          .required()
          .messages({
            "string.base": `Email no es válido.`,
            "string.email": `Email no es válido.`,
            "string.empty": `Email no es válido.`,
            "any.required": `Email es requerido.`,
          }),
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
        rut: di.Joi.number().empty().required().messages({
          "string.base": `RUT no es válido.`,
          "string.empty": `RUT no es válido.`,
          "any.required": `RUT es requerido.`,
        }),
        dv: di.Joi.string().max(1).empty().required().messages({
          "string.base": `RUT no es válido.`,
          "string.empty": `RUT no es válido.`,
          "any.required": `RUT es requerido.`,
        }),
        active: di.Joi.boolean().empty().required().messages({
          "boolean.base": `Activo no es válido.`,
          "string.empty": `Activo no es válido.`,
          "any.required": `Activo es requerido.`,
        }),
      })
      let validate = di.validateSchema(schema, body)
      if (req.body.email) {
        const oldUser = await di.Users.findOne({ email: req.body.email }).session(session).exec()
        if (oldUser !== null) {
          if (validate == null) validate = [`Email ya existe.`]
          else validate.push(`Email ya existe.`)
        }
      }
      if (validate != null) {
        throw new di.CustomError(400,`${validate}`)
      }
      let newUser = await di.Users.create([{
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        foto: '',
        rut: req.body.rut,
        dv: req.body.dv,
        active: req.body.active,
      }], { session })
      newUser = newUser[0]
      const role = await di.Roles.findOne({role: 'CLIENTE'}).session(session).exec()
      await di.UsersRoles.create([{
        userid: newUser.id,
        roleid: role.id 
      }], { session })

      await di.Logs.create([{
        ip: res.connection.remoteAddress,
        userid:  newUser.email,
        log: 'USUARIO CREADO',
      }], { session })

      await session.commitTransaction()
      session.endSession()
      res.status(201).send(di.response(201, { newUser }))

    } catch (e) {
      await session.abortTransaction()
      session.endSession()
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


  put: async (req, res) => {
    const session = await di.mongoose.startSession()
    session.startTransaction()
    try {
      const id = req.params.id
      const user = await di.Users.findById(id).session(session).exec()
      if (user === null) throw new di.CustomError(400, 'Usuario no existe.')
      const body = req.body
      const schema = di.Joi.object().keys({
        email: di.Joi.string()
          .email({ minDomainSegments: 2, tlds: { allow: ["com","cl"] } })
          .empty()
          .required()
          .messages({
            "string.base": `Email no es válido.`,
            "string.email": `Email no es válido.`,
            "string.empty": `Email no es válido.`,
            "any.required": `Email es requerido.`,
          }),
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
        rut: di.Joi.number().empty().required().messages({
          "string.base": `RUT no es válido.`,
          "string.empty": `RUT no es válido.`,
          "any.required": `RUT es requerido.`,
        }),
        dv: di.Joi.string().max(1).empty().required().messages({
          "string.base": `RUT no es válido.`,
          "string.empty": `RUT no es válido.`,
          "any.required": `RUT es requerido.`,
        }),
        active: di.Joi.boolean().empty().required().messages({
          "boolean.base": `Activo no es válido.`,
          "string.empty": `Activo no es válido.`,
          "any.required": `Activo es requerido.`,
        }),
      })
      let validate = di.validateSchema(schema, body)
      if (req.body.email) {
        const oldUser = await di.Users.findOne({ email: req.body.email }).session(session).exec()
        if (oldUser !== null && oldUser.id !== id ) {
          if (validate == null) validate = [`Email ya existe.`]
          else validate.push(`Email ya existe.`)
        }
      }


      if (validate != null) {
        throw new di.CustomError(400,`${validate}`)
      }
      await user.updateOne({
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        rut: req.body.rut,
        dv: req.body.dv,
        foto: user.foto,
        active: req.body.active,
      }, { session })

      await di.Logs.create([{
        ip: res.connection.remoteAddress,
        userid:  user.email,
        log: 'USUARIO MODIFICADO',
      }], { session })

      await session.commitTransaction()
      session.endSession()

      const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
      await delay(4000) /// waiting 1 second.

      
      res.status(200).send(di.response(200, user))

    } catch (e) {
      await session.abortTransaction()
      session.endSession()
      console.log(e)
      console.log(isNaN(e.customCode))
      console.log(parseInt(e.customCode))

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



  delete: async (req, res) => {
    try {
      const id = req.params.id
      const user = await di.Users.findByIdAndDelete(id)
      if (user === null) {
        throw new di.CustomError(400, 'Usuario no existe.')
      }
      await di.Logs.create({
        ip: res.connection.remoteAddress,
        userid: user.email,
        log: 'USUARIO ELIMINADO',
      })
      res.status(200).send(di.response(200, user))
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
  }

})

module.exports = handle
