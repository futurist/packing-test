class BannerPlugin {
  constructor(options){
    this.options = options||{}
  }
  apply(compiler) {
    const {ConcatSource} = require("webpack-sources")

    const handler = (compilation) => {
      const {assets} = compilation
      Object.keys(assets).forEach(name => {
        assets[name] = new ConcatSource(this.options.before, assets[name], this.options.after)
      })
    }

    if (compiler.hooks) {
      compiler.hooks.emit.tap('my-plugin', handler)
    } else {
      compiler.plugin('emit', handler)
    }
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
    new BannerPlugin({
      before: '// Copyright here\n',
      after: '\nconsole.log(1234)'
    })
  ]
}

