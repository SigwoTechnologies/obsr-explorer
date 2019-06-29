const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const envType = process.env.NODE_ENV;
console.log(`Compiling code in ${envType} mode.`);

const htmlPlugin = new HtmlWebpackPlugin({
  filename: 'index.html',
  hash: true,
  inject: 'body',
  template: './client/template.html',
});

const envPlugin = envType === 'production'
  ? new webpack.EnvironmentPlugin({
      DEBUG: JSON.stringify(process.env.DEBUG || false),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production'),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    })
  : new webpack.EnvironmentPlugin({
      DEBUG: JSON.stringify(process.env.DEBUG || false),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    });

const prodPlugins = new CompressionPlugin({
      filename: '[path].gz',
      algorithm: 'gzip',
      test: /\.js(\?.*)?$/i,
      deleteOriginalAssets: false,
  });

const options = {
  filename: 'bundle.js.map',
};

module.exports = {
  devServer: {
    compress: true,
    contentBase: path.resolve('public'),
    hot: true,
    port: 8081,
    publicPath: '/'
  },
  entry: './client/index.js',
  mode: envType,
  optimization: {
    minimizer: [new UglifyJsPlugin({
      exclude: /\/node_modules/,
      sourceMap: true,
    })],
  },
  module: {
    rules: [
      {
        test: /\.worker\.js$/,
        use: {
          loader: 'worker-loader',
          options: {
            inline: true,
            name: 'fetch.worker.js'
          }
        }
      },
      {
        test: /\.(js||jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            // options: { minimize: true },
          }
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'img',
            },
          },
        ],
      },
      {
        test: /\.s*css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
    ]
  },
  plugins: [
    htmlPlugin,
    envPlugin,
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      Promise: 'bluebird'
    }),
    prodPlugins,
    new webpack.SourceMapDevToolPlugin(options),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve('public'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'client'), 'node_modules']
  }
};