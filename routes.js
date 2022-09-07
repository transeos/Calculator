const routes = require('next-routes')();

routes
  .add('/calculate/:address', '/')

module.exports = routes;