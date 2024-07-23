const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx', // TypeScript 진입점
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // 파일 확장자 처리
  },
  output: {
    path: path.resolve(__dirname, '../react_build'),
    filename: '[name].[contenthash].js',
    publicPath: '/react_build/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // TypeScript 및 TSX 파일 처리
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
          }
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new FileManagerPlugin({
      events: {
        onEnd: {
          copy: [
            { source: '../react_build/index.html', destination: path.resolve(__dirname, '../_includes/react-index.html') },
          ],
        },
      },
    }),
  ],
  watch: true,
};