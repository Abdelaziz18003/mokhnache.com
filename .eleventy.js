const {formatDate, formatArabicDate} = require('./filters');

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("formatDate", formatDate);
  eleventyConfig.addFilter("formatArabicDate", formatArabicDate);
};