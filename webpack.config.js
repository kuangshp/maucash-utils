const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'maucash-utils.js',
    path: path.join(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8000,
    compress: true,
    open: true,
  },
  module: {}, // 模块配置
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: './index.html',
    //   title: 'maucash-utils测试',
    // })
  ], // 插件的配置
  mode: 'development',
  resolve: {}, // 配置解析
}
