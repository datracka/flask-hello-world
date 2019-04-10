var path = require("path");

console.log(path.join(__dirname, "/diysna/templates"));
module.exports = {
  output: {
    path: __dirname + "/diysna/static",
    filename: "main.js",
    publicPath: __dirname + "/diysna/static"
  },
  devServer: {
    contentBase: path.join(__dirname, "/diysna/templates"),
    compress: true,
    port: 9000
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
  }
};
