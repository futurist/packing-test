class MyPlugin {
  constructor(options){
    this.options = options||{}
  }
  apply(compiler) {
    require('fs').writeFileSync(
      this.options.filename,
      JSON.stringify(compiler.options, null, 2),
      'utf8'
    )
  }
}

module.exports = {
  mode: "development",
  devtool: false,
  entry: './src',
  output: {
    path: `${__dirname}/dist`,
    filename: 'webpack4.js'
  },
  plugins:[
    new MyPlugin({
      filename: 'dist/dev.json'
    })
  ]
}

