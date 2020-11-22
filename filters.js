const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const arabicMonths = ['جانفي', 'فيفري', 'مارس', 'أفريل', 'ماي', 'جوان', 'جويلية', 'أوت', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];

module.exports.formatDate = function(date) {
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  return `${day} ${months[month]} ${year}`
}

module.exports.formatArabicDate = function(date) {
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  return `${day} ${arabicMonths[month]} ${year}`
}