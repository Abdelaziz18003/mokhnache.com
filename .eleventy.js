const {formatDate} = require('./filters');

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("formatDate", formatDate);
};