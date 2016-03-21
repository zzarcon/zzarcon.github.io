module.exports = {
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
      }
    }, {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }, {
      test: /\.(png|jpg|woff)$/,
      loader: 'url-loader?limit=10000000000000'
    }]
  },
  output: {
    path: './dist',
    filename: 'app.js'
  }
};