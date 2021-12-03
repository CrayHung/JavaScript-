var path = require('path')


module.exports = {
  entry: './jsx/main.jsx',
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'main.js'
  },
  mode: "development",      //開發用 , 之後上線要改成production版本 , <script src的部分也要改成production的版本
  module: {
    rules: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env' , '@babel/preset-react']
                }
            }
        }
    ]
  }
}