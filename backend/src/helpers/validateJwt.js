const jwt = require("jsonwebtoken")

const validateJWT = (token) => {
  try {
    const { uid } = jwt.verify(token, process.env.JWT_SECRET)
    return uid
  } catch (error) {
    return false
  }
}

module.exports = validateJWT
