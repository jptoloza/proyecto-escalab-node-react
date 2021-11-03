// Auth Controller

const handle = ({ di }) => ({

  post: async (req, res) => {
    const session = await di.mongoose.startSession()
    await session.startTransaction()
    try {
      const body = req.body
      const schema = di.Joi.object().keys({
        token: di.Joi.string().required().empty().messages({
          "string.base": `Token no es válido.`,
          "string.empty": `Token no es válido.`,
          "any.required": `Token es requerido.`,
        }),
      })
      const validate = di.validateSchema(schema, body)
      if (validate != null) {
        throw new di.CustomError(400,`${validate}`)
      }
      const idToken = body.token
      const client = new di.OAuth2Client(process.env.GOOGLE_CLIENT_ID)
      const verify = await client.verifyIdToken({
        idToken,
        audience: process.env.GOOGLE_CLIENT_ID,
      })
      const data = verify.getPayload()
      const { email, name, picture, given_name, family_name } = data      
      console.log(data)
      const user = await di.Users.findOne({ email, active: true }).session(session).exec()
      if (user === null) {
        throw new di.CustomError(401, 'Usuario no registrado.')
      }
      let update = false
      let firstname = user.firstname
      if (firstname == null || !firstname.trim()) {
        update = true
        user.firstname = given_name
      }
      let lastname = user.lastname
      if (lastname == null || !lastname.trim()) {
        update = true
        user.lastname = family_name
      }
      let foto = user.foto
      if (foto == null || !foto.trim()) {
        update = true
        user.foto = picture
      }
      if (update) {
        await user.updateOne(user, { session })
      }
      const roles = await di.UsersRoles.find({userid: user._id}).populate('roleid').session(session).exec()
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
      await di.Logs.create([{
        ip: res.connection.remoteAddress,
        userid:  user._id,
        log: 'LOGIN',
      }], { session })
      await session.commitTransaction()
      session.endSession()
      res.status(201).send(di.response(201, { access_token: token }))

    } catch (e) {
      await session.abortTransaction()
      session.endSession()
      let message = e.message
      let code = parseInt(e.customCode) === 'NaN' || isNaN(e.customCode) ? 500 : parseInt(e.customCode)
      await di.Logs.create({
        ip: res.connection.remoteAddress,
        userid: 0,
        log: message,
      })
      res.status(code).send(di.response(code, { messages: message }))
    }
  },

  put: async (req, res) => {
    const session = await di.mongoose.startSession()
    await session.startTransaction()
    try {
      const uid = req.uid
      const user = await di.Users.findOne({_id: uid, active: true}).session(session).exec()
      if (user === null) {
        throw new di.CustomError(404,'Usuario no existe.')
      }
      const roles = await di.UsersRoles.find({userid: user._id}).populate('roleid').session(session).exec()
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
        throw new CustomError(500, 'Token error.')
      }
      await di.Logs.create([{
        ip: res.connection.remoteAddress,
        userid:  user.email,
        log: 'UPDATE TOKEN',
      }], { session })
      await session.commitTransaction()
      session.endSession()
      res.status(201).send(di.response(201, { access_token: token }))

    } catch (e) {
      await session.abortTransaction()
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
