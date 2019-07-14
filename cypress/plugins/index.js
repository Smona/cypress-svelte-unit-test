const webpack = require('@cypress/webpack-preprocessor')
const webpackConfig = require('../webpack.config.js')

// Sapper support. Sapper's webpack config exports multiple configs as
// { client, server, serviceWorker }. Here we want to use the client config.
const webpackOptions = webpackConfig.client || webpackConfig;

module.exports = on => {
  const options = {
    // send in the options from your webpack.config.js, so it works the same
    // as your app's code
    webpackOptions 
  }

  on('file:preprocessor', webpack(options))
}
