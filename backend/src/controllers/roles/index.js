// Roles Controllers

const modelsParams = {
  role: 'string'
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
          data = await di.Roles.find( filters ).sort(sort) 
        } else {
          data = await di.Roles.find().sort(sort) 
        }
      } else {
        if (filters) {
          data = await di.Roles.paginate( filters , options)
        } else {
          data = await di.Roles.paginate({}, options)
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
      const user = await di.Roles.findById(id).exec()
      if (user === null) throw new di.CustomError(404, 'Rol no existe.')
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
    try {
      const body = req.body
      const schema = di.Joi.object().keys({
        role: di.Joi.string().empty().required().messages({
          "string.base": `Rol no es válido.`,
          "string.empty": `Rol no es válido.`,
          "any.required": `Rol es requerido.`,
        })
      })
      let validate = di.validateSchema(schema, body)
      if (req.body.email) {
        const old = await di.Roles.findOne({ role: req.body.role.toUpperCase() }).exec()
        if (old !== null) {
          if (validate == null) validate = [`Rol ya existe.`]
          else validate.push(`Rol ya existe.`)
        }
      }
      if (validate != null) {
        throw new di.CustomError(400,`${validate}`)
      }
      const newRole = await di.Roles.create({
        role: req.body.role.toUpperCase()
      })

      await di.Logs.create({
        ip: res.connection.remoteAddress,
        userid:  req.uid,
        log: 'ROLE CREADO',
      })
      res.status(201).send(di.response(201, { newRole }))

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


  put: async (req, res) => {
    try {
      const id = req.params.id
      const role = await di.Roles.findById(id)
      if (role === null) {
        throw new CustomError(400, 'Rol no existe.')
      }
      const body = req.body
      const schema = di.Joi.object().keys({
        role: di.Joi.string().empty().required().messages({
          "string.base": `Rol no es válido.`,
          "string.empty": `Rol no es válido.`,
          "any.required": `Rol es requerido.`,
        }),
      })
      let validate = di.validateSchema(schema, body)
      if (validate != null) {
        throw new di.CustomError(400,`${validate}`)
      }
      role.role = req.body.role.toUpperCase()
      await role.updateOne(role)
      await di.Logs.create({
        ip: res.connection.remoteAddress,
        userid:  req.uid,
        log: 'ROLE MODIFICADO',
      })
      res.status(200).send(di.response(200, role))

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

  delete: async (req, res) => {
    try {
      const id = req.params.id
      const role = await di.Roles.findByIdAndDelete(id)
      if (role === null) {
        throw new CustomError(404, 'Rol no existe.')
      }
      res.status(200).send(di.response(200, role))

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
