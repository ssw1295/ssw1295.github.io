const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx', // TypeScript 진입점
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // '@'를 'src' 디렉토리로 매핑
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // 파일 확장자 처리
  },
  output: {
    path: path.resolve(__dirname, '../react_build'),
    filename: '[name].[contenthash].js',
    publicPath: '/react_build/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // TypeScript 및 TSX 파일 처리
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ["@babel/preset-react", {"runtime": "automatic"}],
              '@babel/preset-typescript'
            ],
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
    new ForkTsCheckerWebpackPlugin({
      async: true,  // 타입 검사를 Webpack 빌드 프로세스와 병렬로 수행하지 않고, 동기적으로 수행하도록 설정
      typescript: {
        configOverwrite: {
          include: ['./src/**/*.ts', './src/**/*.tsx'], // 특정 확장자만 포함
        },
      },
    }),
  ],
  watch: true,
};