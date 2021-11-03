
const noKeys = [
  'page',
  'sort',
  'limit',
  'token',
  'paginate'
]

const queryFilters = (query, model) => {
  let output = []  
  const modelsKeys = Object.keys(model)
  Object.keys(query).forEach((nkey) => {
    const key = nkey.toLowerCase()
    const value = query[nkey]
    if (!noKeys.includes(key)) {      
      if (modelsKeys.includes(key)) {
        let field = {}
        switch(model[key]) {
          case 'boolean':
            field[key] = Boolean(value)
            output.push(field) 
            break
          case 'number':
            const number = Number(value)
            if (!isNan(number)){
              field[key] = Number(value)
              output.push(filed)
            }
            break
          default:
            field[key] = {}
            let re = new RegExp(String(value), 'i')
            field[key]['$regex'] = re
            output.push( field )
            break;
        }
      }
    }
  })

  const finalQuery = {}
  if (output.length) {
    finalQuery['$or'] = output
  }
  return finalQuery
}

module.exports = queryFilters
