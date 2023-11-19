// ExtractTextWebpackPlugin

// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { run } = require("./run-python.js");

run("flask_compile.py")

const webpackData = require("./pages/pages.json");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: {},
  mode: process.env.NODE_ENV,
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./src/static", to: "./static" },
      ],
    }),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          stylesHandler,
          {
            loader: "css-loader",
            options: {
              url: false
            }
          },
          "postcss-loader", "sass-loader"
        ],
      },
      {
        test: /\.css$/i,
        use: [
          stylesHandler,
          {
            loader: "css-loader",
            options: {
              url: false
            }
          }, "postcss-loader"
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      {
        test: /\.(js|mjs|cjs)$/i,
        use: ["babel-loader"],
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  cache: true
};

const menuExists = webpackData["menu-bundler"];
menuExists && (config.entry.menu = webpackData["menu-bundler"].map(
  el => path.resolve("./flask_build/", el)
));

webpackData["html-pages"].forEach(page => {
  page.html
    && config.plugins.push(
      new HtmlWebpackPlugin({
        template: path.resolve("./flask_build/" + page.html),
        filename: page.chunk + ".html",
        meta: webpackData["html-options"].meta || {},
        chunks: menuExists ? ["menu", page.chunk] : [page.chunk],
      })
    );
  page.bundler
    // && (page.bundler = [...page.bundler, ...webpackData["menu-bundler"]])
    && (
      config.entry[page.chunk] = {
        import: page.bundler.map(
          el => path.resolve("./flask_build/", el)
        )
      },
      menuExists && (
        config.entry[page.chunk].dependOn = "menu"
      )
    )
})

module.exports = config;
