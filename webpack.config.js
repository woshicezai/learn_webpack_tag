let path = require('path');

module.exports = {
  entry: [require.resolve('./polyfills'),'./index.jsx',],
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {loader: 'babel-loader'},
        resolve: {
          extensions: ['.js', '.jsx']
        }
      }
    ]
  },

}