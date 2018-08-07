const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = [{
  mode: 'production',
  target: 'electron-renderer',
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: 'index_bundle.js',
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
    ],
  },
  devtool: 'source-map',
}]
