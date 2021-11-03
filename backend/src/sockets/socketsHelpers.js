const di = require('../services/di')

const userOnline = async( uid ) => {
  try{
    return await di.Users.findByIdAndUpdate(uid, { online: true }).exec()
  } catch(e) {
    return false
  }
}

const userDisconnected = async( uid ) => {
  try {
    return await di.Users.findByIdAndUpdate(uid, { online: false }).exec()
  } catch(e) {
    return false
  }
}

const getUsersOnline = async() => {
  try{
    return await di.Users.find({ online: true}).exec()
  } catch(e) {
    return {}
  }
}


module.exports = {
  userOnline,
  userDisconnected,
  getUsersOnline,
}


  