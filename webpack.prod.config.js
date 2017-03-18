const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  inject: 'body',
});
const ExtractTextPluginConfig = new ExtractTextPlugin({
  filename: 'style.css',
});

module.exports = {
  entry: './app/app.jsx',
  output: {
    path: path.resolve('public'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [
      path.resolve(__dirname),
      'node_modules',
      './app/components',
    ],
    alias: {
      styles: 'app/styles/style.sass',
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loaders: [
        'babel-loader',
      ],
      exclude: /node_modules/,
    }, {
      test: /\.sass$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: () => [autoprefixer],
          },
        }, {
          loader: 'sass-loader',
        }],
      }),
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    HtmlWebpackPluginConfig,
    ExtractTextPluginConfig,
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
        screw_ie8: true,
      },
      output: {
        comments: false,
        screw_ie8: true,
      },
      sourceMap: false,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
  externals: {
    // these lines are required for Enzyme
    'react/addons': true,
    'react/lib/ReactContext': 'window',
    'react/lib/ExecutionEnvironment': true,
  },
};
