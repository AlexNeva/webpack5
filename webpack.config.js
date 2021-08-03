const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';
let target = 'web';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
  target = 'browserslist'
}

module.exports = {
  mode: mode,
  target: target,

  output: {
    assetModuleFilename: 'img/[hash][ext][query]'
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|webp|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '' },
          },

          'css-loader',
          'postcss-loader',
          'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }

    ],
  },

  plugins: [
    new MiniCssExtractPlugin()
  ],

  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  }
}