// Roles Controllers

const modelsParams = {
  title: 'string',
  abstract: 'string'
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
          data = await di.News.find( filters ).sort(sort) 
        } else {
          data = await di.News.find().sort(sort) 
        }
      } else {
        if (filters) {
          data = await di.News.paginate( filters , options)
        } else {
          data = await di.News.paginate({}, options)
        }
      }
      res.status(200).send(di.response(200, { docs: data } ))

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
      const newsItem = await di.News.findById(id).exec()
      if (newsItem === null) throw new di.CustomError(404, 'Noticia no existe.')
      else res.status(200).send(di.response(200, newsItem))

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
        image: di.Joi.string().empty().required().messages({
          "string.base": `Imagen no es válido.`,
          "string.empty": `Imagen no es válido.`,
          "any.required": `Imagen es requerido.`,
        }),
        title: di.Joi.string().empty().required().messages({
          "string.base": `Título no es válido.`,
          "string.empty": `Título no es válido.`,
          "any.required": `Título es requerido.`,
        }),
        abstract: di.Joi.string().empty().required().messages({
          "string.base": `Resumen no es válido.`,
          "string.empty": `Resumen no es válido.`,
          "any.required": `Resumen es requerido.`,
        }),
        externalurl: di.Joi.string().empty().required().messages({
          "string.base": `Enlace no es válido.`,
          "string.empty": `Enlace no es válido.`,
          "any.required": `Enlace es requerido.`,
        })
      })
      let validate = di.validateSchema(schema, body)
      if (validate != null) {
        throw new di.CustomError(400,`${validate}`)
      }
      const newsItem = await di.News.create({
        userid: req.uid,
        image: req.body.image,
        title: req.body.title,
        abstract: req.body.abstract,
        externalurl: req.body.externalurl
      })

      await di.Logs.create({
        ip: res.connection.remoteAddress,
        userid:  req.uid,
        log: 'NEWS ITEM CREADO',
      })
      res.status(201).send(di.response(201, { newsItem }))

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
      const newsItem = await di.News.findById(id)
      if (newsItem === null) {
        throw new CustomError(400, 'Noticia no existe.')
      }
      const body = req.body
      const schema = di.Joi.object().keys({
        image: di.Joi.string().empty().required().messages({
          "string.base": `Imagen no es válido.`,
          "string.empty": `Imagen no es válido.`,
          "any.required": `Imagen es requerido.`,
        }),
        title: di.Joi.string().empty().required().messages({
          "string.base": `Título no es válido.`,
          "string.empty": `Título no es válido.`,
          "any.required": `Título es requerido.`,
        }),
        abstract: di.Joi.string().empty().required().messages({
          "string.base": `Resumen no es válido.`,
          "string.empty": `Resumen no es válido.`,
          "any.required": `Resumen es requerido.`,
        }),
        externalurl: di.Joi.string().empty().required().messages({
          "string.base": `Enlace no es válido.`,
          "string.empty": `Enlace no es válido.`,
          "any.required": `Enlace es requerido.`,
        })
      })
      let validate = di.validateSchema(schema, body)
      if (validate != null) {
        throw new di.CustomError(400,`${validate}`)
      }
      await newsItem.updateOne({
        userid: req.uid,
        image: req.body.image,
        title: req.body.title,
        abstract: req.body.abstract,
        externalurl: req.body.externalurl
      })
      await di.Logs.create({
        ip: res.connection.remoteAddress,
        userid:  req.uid,
        log: 'NEWS ITEM MODIFICADO',
      })
      res.status(200).send(di.response(200, newsItem))

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
      const newsItem = await di.News.findByIdAndDelete(id)
      if (newsItem === null) {
        throw new CustomError(404, 'Noticia no existe.')
      }
      res.status(200).send(di.response(200, newsItem))

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
