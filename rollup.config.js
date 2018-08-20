import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/index.js',
  output:[
    {format: 'iife', name: 'myLib', file: 'dist/rollup.js'}
  ],
  plugins:[
    commonjs()
  ]
}
