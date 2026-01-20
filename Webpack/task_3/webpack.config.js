const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        type: 'javascript/auto', // disable default asset manager
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
              publicPath: 'assets/',
              esModule: false,
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              // disable: true, // webpack@2.x and newer
              disable: false,
              mozjpeg: {
                progressive: true,
              },
            },
          },
        ],
      },
    ],
  },
  devServer: {
    host: "127.0.0.1",
    port: 8564,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({title: "Task 3"}),
  ],
  devtool: 'inline-source-map',
  optimization: {
    splitChunks: {
      chunks: "all",
      name: 'vendors',
    },
  },
};