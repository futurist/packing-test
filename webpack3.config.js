const webpack = require('webpack')

module.exports = {
  entry: './src',
  devtool: false,
  output: {
    path: `${__dirname}/dist`,
    filename: 'webpack3.js'
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
}
