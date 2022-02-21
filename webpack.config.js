/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const pathHelper = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    home: './src/home/home.ts',
  },
  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      title: 'home',
      filename: './home/home.html',
      template: './src/home/home.html',
      chunks: ['home'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
    new ESLintPlugin({
      extensions: ['js', 'ts'],
    }),
  ],
  output: {
    path: pathHelper.resolve(__dirname, 'dist'),
    filename: '[name].js',
    assetModuleFilename: 'assets/[name]-[hash]-[ext][query]',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('postcss-import'),
                  require('tailwindcss'),
                  require('postcss-preset-env')({ stage: 1 }),
                  // require('postcss-font-magician')({
                  //   formats: 'woff2 woff',
                  //   custom: {
                  //     Montserrat: {
                  //       variants: {
                  //         normal: {
                  //           400: {
                  //             url: {
                  //               woff2: '/src/fonts/montserrat-v21-latin-regular.woff2',
                  //               woff: '/src/fonts/montserrat-v21-latin-regular.woff',
                  //             },
                  //           },
                  //           700: {
                  //             url: {
                  //               woff2: '/src/fonts/montserrat-v21-latin-700.woff2',
                  //               woff: '/src/fonts/montserrat-v21-latin-700.woff',
                  //             },
                  //           },
                  //         },
                  //       },
                  //     },
                  //   },
                  // }),
                ],
              },
            },
          },
          {
            loader: 'resolve-url-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(svg|gif|jpe?g|png|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devtool: 'inline-source-map',
  devServer: {
    open: 'home/home.html',
    host: '192.168.1.152',
    port: 44301,
    https: {
      key: fs.readFileSync('C:\\self-signed-certificate\\192.168.1.152.key'),
      cert: fs.readFileSync('C:\\self-signed-certificate\\192.168.1.152.crt'),
    },
    hot: false,
  },
};
