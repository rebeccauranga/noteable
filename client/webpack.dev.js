const { merge } = require("webpack-merge");
const common = require("./webpack.config");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./public",
    proxy: {
      "/api": {
        target: "http://localhost:5000",
      },
    },
  },
});
