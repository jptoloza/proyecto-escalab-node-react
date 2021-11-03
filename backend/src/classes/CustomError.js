
class CustomError extends Error {

  constructor(code = 500, ...params) {
    super(...params)  
    this.name = 'CustomError'
    this.customCode = code
  }
}
  

module.exports = CustomError
