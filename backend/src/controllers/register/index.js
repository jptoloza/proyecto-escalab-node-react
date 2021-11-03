// Register Controller

const { Roles } = require("../../services/di")

const handle = ({ di }) => ({

  post: async (req, res) => {
    const session = await di.mongoose.startSession()
    session.startTransaction()
    try {
      const body = req.body
      const schema = di.Joi.object().keys({
        token: di.Joi.string().required().empty().messages({
          "string.base": `"Token" no es válido.`,
          "string.empty": `"Token" no es válido.`,
          "any.required": `"Token" es requerido.`,
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
      const user = await di.Users.findOne({ email }).session(session).exec()
      if (user) {
        throw new di.CustomError(401, 'Usuario ya esta registrado.')
      }
    
      let newUser = await di.Users.create([{
        email: email,
        firstname: given_name,
        lastname: family_name,
        foto: '',
        rut: 1,
        dv: '9',
        active: true,
      }], { session })

      newUser = newUser[0]
      if (picture){
        let filename = ''
        const request = await di.fetch(picture)
        const buffer = await request.buffer()
        const tmpFile = `${process.cwd()}/${process.env.TMP_FILES}/${newUser.id}.png`
        await di.fs.writeFileSync(tmpFile, buffer, (err) => {
          if (err) console.log(err)
        })

        if (await di.fs.existsSync(tmpFile)) {
          let uuid = di.uuidv1()
          await di.firebase.upload(tmpFile, {
            destination: `imagenes/foto/${newUser.id}.png`,
            uploadType: "media",
              metadata: {
                metadata: {
                  firebaseStorageDownloadTokens: uuid
                }
              }
          })
          .then((data) => {
            let file = data[0]
            filename = "https://firebasestorage.googleapis.com/v0/b/escalab-node-react.appspot.com/o/" + encodeURIComponent(file.name) + "?alt=media&token=" + uuid
          })
          await di.fs.unlink(tmpFile, (err) => { if (err) console.log(err) })

        }

        if (filename) {
          newUser.foto = filename
          await newUser.updateOne(newUser , { session })
        }
      }
      const role = await Roles.findOne({role: 'CLIENTE'}).session(session).exec()
      await di.UsersRoles.create([{
        userid: newUser.id,
        roleid: role.id 
      }], { session})
      
      const token = di.createJWT({
        uid: newUser.id,
        name: `${newUser.firstname} ${newUser.lastname}`,
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        rut: newUser.rut,
        dv: newUser.dv,
        foto: newUser.foto,
        email: newUser.email,
        roles: ['CLIENTE']
      })
      if (!token) {
        throw new di.CustomError(500, 'Token error.')
      }

      await di.Logs.create([{
        ip: res.connection.remoteAddress,
        userid:  newUser.email,
        log: 'USUARIO REGISTRADO',
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
        userid: req.uid,
        log: message,
      })
      res.status(code).send(di.response(code, { messages: message }))
    }
  },
})


module.exports = handle
