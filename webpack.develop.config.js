/** copied by ge on 6/16/16 from https://github.com/episodeyang/gittor */
var webpack = require('webpack');
var path = require('path');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var md = require('markdown-it')();
var hljs = require('highlight.js');

// to get post-css loader to work with node 0.10.x
require('es6-promise').polyfill();

const port = 5000;

const build_entry = {
  app: "./src/example/index.js",
  vendor: [
    "react",
    "react-dom"
  ]
};

module.exports = {
  entry: build_entry,
  devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
  output: {
    path: '/dist/', //path.join(__dirname, 'gittor'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    noParse: [
      /autoit\.js$/
    ],
    loaders: [
      {
        test: /\.html$/,
        exclude: /(node_modules|bower_components)/,
        loader: "file?[name].[ext]"
      },
      // {
      //   // remove the source-map urls from the rxjs library.
      //   test: /rxjs\/(.*)\.js$/,
      //   loaders: ['source-map']
      // },
      // {
      //   // ES6 modules
      //   test: /luna\-saga\/(.*)\.js$/,
      //   loaders: ['react-hot', 'babel-loader']
      // },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot', 'babel-loader'] // 'regenerator',  for generator syntax
      },
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.s?css$/,
        loaders: ['style', 'css', "postcss-loader", 'sass']
      },
      {
        test: /\.md$/,
        loaders: ["html", "markdown-it"]
      },
      // {
      //   test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: "file"
      // },
      // {
      //   test: /\.(woff|woff2)$/,
      //   loader: "url?prefix=font/&limit=5000"
      // },
      // {
      //   test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: "url?limit=10000&mimetype=application/octet-stream"
      // },
      // {
      //   test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: "url?limit=10000&mimetype=image/svg+xml"
      // },
      // {
      //   test: /\.gif/,
      //   loader: "url-loader?limit=10000&mimetype=image/gif"
      // },
      // {
      //   test: /\.jpg/,
      //   loader: "url-loader?limit=10000&mimetype=image/jpg"
      // },
      // {
      //   test: /\.png/,
      //   loader: "url-loader?limit=10000&mimetype=image/png"
      // }
    ]
  },
  'markdown-it': {
    html: true,
    highlight: false
    // highlight: function (str, lang) {
    //   if (lang && hljs.getLanguage(lang)) {
    //     try {
    //       return '<pre><code class="hljs '+lang+'">' +
    //         hljs.highlight(lang, str, true).value +
    //         '</code></pre>';
    //     } catch (__) {}
    //   }
    //
    //   return '<pre><code class="hljs">' + md.utils.escapeHtml(str) + '</code></pre>';
    // }
  },
  postcss: function () {
    return [precss, autoprefixer];
  },
  devServer: {
    port: port,
    stats: {colors: true},
    contentBase: "./src/example",
    noInfo: true, //  --no-info option
    hot: true,
    inline: true
    // historyApiFallback: {
    //   index: "/index.html"
    // },
    // proxy: {
    //   "/gittor/*": {
    //     target: {
    //       "host": "localhost",
    //       "protocol": 'http:',
    //       "port": 4000
    //     },
    //     rewrite: function (req) {
    //       req.url = req.url.replace(/^\/gittor\//, "/");
    //       if (req.url.match(/\/$/)) req.url += "index.html";
    //       var extension = req.url
    //         .split('/').slice(-1)[0]
    //         .split('.')[1];
    //       if (!extension) req.url += ".html";
    //     }
    //   }
    // }
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"),
    new webpack.NoErrorsPlugin()
  ]
};
