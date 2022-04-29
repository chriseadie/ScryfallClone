const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
      ScryFallApp:"./ScryfallFrontend/index.jsx"
  },
  output: {
    path: path.resolve(__dirname, "Assets/javascript"),
    filename: "ScryFallApp.bundle.js"
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
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./Views/index.html",
      filename: "./Views/index.html"
    })
  ]
};