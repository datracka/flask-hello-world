const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: __dirname + "/diysna/static/src",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./diysna/static/src/index.html",
      filename: "./index.html"
    })
  ]
};

/*
 entry: __dirname + "/diysna/static/index.js",
  output: {
    path: __dirname + "/diysna/public",
    filename: "main.js",
    publicPath: __dirname + "/diysna/public"
  },
  */
