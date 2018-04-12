const path = require('path');
//const bootstrap = require('bootstrap-loader');

module.exports = {
  //entry: './src/index.js',
  entry: [
    //'webpack-dev-server/client?http://127.0.0.1:8080/',
    //'webpack/hot/only-dev-server',
    //'bootstrap-loader',
    './src'
  ],
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["env"]
          }
        }
      },
      {
        test: /\.html$/,
        use:{
          loader:'raw-loader'
        }
      },
      {
        test: /\.css$/,
        use:['style-loader','css-loader']  
      },
      {
        test: /\.(woff2?|ttf|eot|svg)$/,
        use: {
          loader:'url?limit=10000'
        }
      },
      {
        test: /bootstrap\/assets\/javascripts\//,
        use: {
          loader: 'imports?jQuery=jquery'
        }
      }
    ]
  }
};