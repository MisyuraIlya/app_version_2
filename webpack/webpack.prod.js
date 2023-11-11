const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'production',
  devtool: false,
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              sourceMap: false,
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
			filename: 'main.css'
		}),
    new webpack.DefinePlugin({
      'process.env.API': JSON.stringify('https://ctb2b.co.il'),
      'process.env.MEDIA': JSON.stringify('https://ctb2b.co.il/src/images'),
    }),
  ],

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
}