
import path from 'path'

export default {
  entry: path.join(__dirname, '/client/index.js'),
  output: {
    path: path.join(__dirname, `./public`),
    filename: 'client.js'
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: { loader: 'babel-loader' }
      }
    ]
  }
}
