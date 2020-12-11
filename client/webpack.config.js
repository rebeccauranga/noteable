const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

// This is only necessary because of the absolute paths setup to make
// it clearer when importing from the shared module between client/server,
// which is setup in the "paths" section within the shared tsconfig.json.
// import App from "@client/components/app";
// import { User } from "@shared/models";
//  -- versus --
// import { User } from "../../../shared/models";
//
// ts-node doesn't resolve these automatically when the TS is transpiled 
// to JS. See (ts-node + tsconfig-paths). 
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');


module.exports = {
  entry: "./client/src/index.tsx",
  devServer: {
    contentBase: "./dist",
    proxy: {
      '/api': {
          target: 'http://localhost:5000',
      },
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ],
    plugins: [new TsconfigPathsPlugin()],
  },
  output: {
    filename: "bundle.js",
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "client/src/index.html",
      filename: "./index.html",
    }),
  ],
};
