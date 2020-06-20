let path = require('path');

module.exports = {
  entry: [require.resolve('./polyfills'),'./index.jsx',],
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hotOnly: true
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
      },
      {
        test:/\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },

}