module.exports.formatDate = function(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  let formatted_date = `${day}-${month}-${year}`
  return formatted_date
 }