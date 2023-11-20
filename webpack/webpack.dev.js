const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    compress: true,
    port: 3000,
    historyApiFallback: true,
    hot: true,
    open: true,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.API': JSON.stringify('https://digiaws.net/ceremonitea'),
      'process.env.MEDIA': JSON.stringify('http://ctb2b.co.il'),
    }),
  ],
}