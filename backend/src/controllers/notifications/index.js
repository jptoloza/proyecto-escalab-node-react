// Notifications Controllers

const modelsParams = {
  userid: 'string',
  title: 'string',
  notification: 'string',
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
        limit,
        sort: sort,
        page
      }
      const filters = di.queryFilters(req.query, modelsParams)
      let data      
      if (req.query.paginate == 0) {
        if (filters) {
          data = await di.Notifications.find( filters ).sort(sort) 
        } else {
          data = await di.Notifications.find().sort(sort) 
        }
      } else {
        if (filters) {
          data = await di.Notifications.paginate( filters , options)
        } else {
          data = await di.Notifications.paginate({}, options)
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
      const notification = await di.Notifications.findById(id).exec()
      if (notification === null) throw new di.CustomError(404, 'Notificación no existe.')
      else res.status(200).send(di.response(200, notification))

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
        title: di.Joi.string().empty().required().messages({
          "string.base": `Título no es válido.`,
          "string.empty": `Título no es válido.`,
          "any.required": `Título es requerido.`,
        }),
        notification: di.Joi.string().empty().required().messages({
          "string.base": `Notificación no es válido.`,
          "string.empty": `Notificación no es válido.`,
          "any.required": `Notificación es requerido.`,
        }),
      })
      let validate = di.validateSchema(schema, body)
      if (validate != null) {
        throw new di.CustomError(400, `${validate}`)
      }
      let notification = await di.Notifications.create([{
        userid: req.uid,
        title: req.body.title,
        notification: req.body.notification,
      }], { session })
      notification = notification[0]

      const users = await di.Users.find({active: true}).exec()
      users.forEach( async(e) => {
        await di.UserNotifications.create([{
          userid: e.id,
          notificationid: notification.id,
          read: false
        }], { session })    
      })

      await di.Logs.create([{
        ip: res.connection.remoteAddress,
        userid: req.uid,
        log: 'NOTIFICATION CREADA',
      }], { session })

      await session.commitTransaction()
      session.endSession()
      req.app.get("socketService").emiter("notifications", "notificacion", { 
        title: "Nueva Notificación"
      } )

      res.status(201).send(di.response(201, notification))

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
    try {
      const id = req.params.id
      const notification = await di.Notifications.findById(id)
      if (notification === null) {
        throw new di.CurstomError(400, 'Notificación no existe.')
      }
      const body = req.body
      const schema = di.Joi.object().keys({
        title: di.Joi.string().empty().required().messages({
          "string.base": `Título no es válido.`,
          "string.empty": `Título no es válido.`,
          "any.required": `Título es requerido.`,
        }),
        notification: di.Joi.string().empty().required().messages({
          "string.base": `Notificación no es válido.`,
          "string.empty": `Notificación no es válido.`,
          "any.required": `Notificación es requerido.`,
        }),
      })
      di.validateSchema(schema, body)
      notification.userid = req.uid
      notification.title = req.body.title
      notification.notification = req.body.notification
      await notification.updateOne(notification)
      await di.Logs.create({
        ip: res.connection.remoteAddress,
        userid: req.uid,
        log: 'NOTIFICATION MODIFICADA',
      })

      req.app.get("socketService").emiter("notifications", "notificacion", { 
        title: "Nueva Notificación"
      } )

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

  delete: async (req, res) => {
    try {
      const id = req.params.id
      const notification = await di.Notifications.findByIdAndDelete(id)
      if (notification === null) {
        throw new di.CustomError(404, 'Notificación no existe.')
      }
      await di.Logs.create({
        ip: res.connection.remoteAddress,
        userid: req.uid,
        log: 'NOTIFICATION ELIMINADA',
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
  }
  
})

module.exports = handle
