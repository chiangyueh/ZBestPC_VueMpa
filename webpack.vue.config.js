const path = require("path");
const { ProvidePlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  mode: "development",
  entry: {
    index: "./src/main.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/i,
        type: 'asset',
        parser : {
            dataUrlCondition : {
                maxSize : 8*1024,
            }
        },
        generator : {
            filename : "images/[name].[hash:6][ext]"
        }
      },
      {
        test: /\.vue$/,
        loader : 'vue-loader'
      }
    ],
  },
  optimization : {
    minimize : true,
    minimizer : [new TerserWebpackPlugin(), new CssMinimizerWebpackPlugin()]
  },
  plugins: [
    new ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "./public/index.html"),
      chunks: ["index"],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./src/img"),
          to: path.resolve(__dirname, "./dist/img"),
        },
      ],
    }),
    new MiniCssExtractPlugin({
        filename : 'css/[name].css',
        chunkFilename : 'css/[name].chunk.css'
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ],
};
