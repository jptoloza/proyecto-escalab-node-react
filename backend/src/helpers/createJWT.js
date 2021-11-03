const response = require("./response")
const jwt = require("jsonwebtoken")

const createJWT = (data) => {
  let token = '';
  try {
    token = jwt.sign(data, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_TOKEN_EXPIRES,
    })
  } catch (e) {
    console.log(e)
  }
  return token
};

module.exports = createJWT
