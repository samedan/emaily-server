// DEV
if (process.env.NODE_ENV === 'production') {
  // PRODUCTION
  module.exports = require('./prod');
} else {
  // DEV
  module.exports = require('./dev');
}
