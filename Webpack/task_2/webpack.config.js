const path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/dashboard_main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
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
};