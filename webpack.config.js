const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

console.log("aaaa", __dirname + "/diysna/public");
module.exports = {
  devtool: "eval-source-map",
  entry: __dirname + "/diysna/static/index.js",
  output: {
    path: __dirname + "/diysna/public",
    filename: "main.js",
    publicPath: __dirname + "/diysna/public"
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"]
  },
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
      template: "./diysna/static/index.html",
      filename: "./diysna/static/index.html"
    })
  ]
};
