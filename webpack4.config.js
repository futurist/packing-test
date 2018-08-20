
module.exports = {
  mode: "development",
  devtool: false,
  entry: './src',
  output: {
    path: `${__dirname}/dist`,
    filename: 'webpack4.js'
  },
  optimization: {
    //providedExports: true,  // <- default
    usedExports: true  // production ? true : false
  }
}

