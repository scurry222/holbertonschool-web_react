const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '..', 'public'),
    filename: 'bundle.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: './index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        include: /src/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)$/i,
        use: [
          'file-loader',
          { loader: 'image-webpack-loader', options: { disable: true } }
        ]
      }
    ]
  },
  devtool: 'inline-source-map'
};
