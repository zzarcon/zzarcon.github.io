const path = require('path');

module.exports = {
  // resolve: { fallback: path.join(__dirname, "node_modules") },
  // resolveLoader: { fallback: path.join(__dirname, "node_modules") },
  entry: [
    'babel-polyfill',
    './index.js'
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-async-to-generator']
        // plugins: ['babel-plugin-transform-async-to-generator'].map(require.resolve)
      }
    }, {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }, {
      test: /\.(png|jpg|woff)$/,
      loader: 'url-loader?limit=10000000000000'
    }, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=1000000000000&mimetype=application/font-woff"
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=1000000000000&mimetype=application/font-woff"
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=1000000000000&mimetype=application/octet-stream"
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: "file"
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=1000000000000&mimetype=image/svg+xml"
    }, {
      test: /\.html$/,
      loader: "html"
    }]
  },
  output: {
    path: './dist',
    filename: 'app.js'
  }
};