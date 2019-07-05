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
      DEBUG: false,
      NODE_ENV: 'production',
      'process.env.NODE_ENV': 'production'
    })
  : new webpack.EnvironmentPlugin({
      DEBUG: false,
      NODE_ENV: 'development',
      'process.env.NODE_ENV': 'development'
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
  mode: envType,
  devServer: {
    compress: true,
    contentBase: path.resolve('public'),
    hot: true,
    port: 8081,
    publicPath: '/'
  },
  devtool: envType !== 'production' ? 'source-map' : false,
  entry: './client/index.js',
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
            // inline: true,
            name: 'fetch.worker.js'
          }
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
            ],
            plugins: [
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-proposal-object-rest-spread",
              ["@babel/plugin-transform-runtime", {
                "regenerator": true,
              }]
            ],
          }
        }
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
    new webpack.SourceMapDevToolPlugin(options),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      Promise: 'bluebird'
    }),
    // new webpack.ProvidePlugin({
    //   Promise: "imports-loader?this=>global!exports-loader?global.Promise!bluebird"
    // }),
    prodPlugins,
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve('public'),
    publicPath: '/',
    globalObject: 'this',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname, "client"),
      "node_modules"
    ]
  }
};