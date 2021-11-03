
/**
 * 
 * @param {*} sort 
 * @returns 
 * 
 * url: /api/v1/controller?sort=(-)attrinute
 */
const orderBy = (sort) => {

  let output = {}
  const order = sort.split(/,/)
  order.forEach((el) => {
    if (el) {
      if (el.match(/^\-/)) {
        const key = el.replace(/^-/, "")
        output[key] = -1
      } else {
        output[el] = 1
      }
    }
  })
  return output 
};

module.exports = orderBy