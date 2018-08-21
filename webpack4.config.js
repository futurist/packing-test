
module.exports = {
  mode: "development",
  devtool: false,
  entry: './src',
  output: {
    path: `${__dirname}/dist`,
    filename: 'webpack4.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: './my-loader',
          query: {
            fn: function(source){
              return `console.log('now run: ${this.resource}');\n` + source
            }
          }
        }
      }
    ]
  }
}

