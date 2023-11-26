// ExtractTextWebpackPlugin

// Generated using webpack-cli https://github.com/webpack/webpack-cli

const { exec, execSync } = require("child_process");
console.log(
  execSync("py flask_compile.py || python3 flask_compile.py").toString().trim()
);

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CopyPlugin = require("copy-webpack-plugin");

const webpackData = require("./pages.json");
let cache = fs.existsSync("./cache.json")
  ? fs.readFileSync("./cache.json", "utf-8")
  : {};
cache = JSON.parse(cache || "{}");

const isProduction = process.env.NODE_ENV == "production";
const stylesHandler = MiniCssExtractPlugin.loader;
let newCache = {};

const config = {
  entry: {},
  mode: process.env.NODE_ENV,
  output: {
    path: path.resolve(__dirname, "dist"),
    // Removed for caching
    // clean: true,
  },
  plugins: [
    // new CopyPlugin({
    //   patterns: [{ from: "./src/static", to: "./static" }],
    // }),

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
              url: false,
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.css$/i,
        use: [
          stylesHandler,
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          "postcss-loader",
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
  cache: true,
};

const menuExists = webpackData["menu-design"];

if (!isProduction) {
  let obj = webpackData["html-options"].meta["Content-Security-Policy"];
  obj.content = obj.content.replace(
    "script-src",
    "script-src 'unsafe-inline' 'unsafe-eval'"
  );
}

let htmlUpdated = false;
webpackData["html-pages"].forEach((page) => {
  // Check cache
  let filepath = path.resolve("./flask_build/" + page.html);
  let contents = fs.readFileSync(filepath, "utf-8");
  let prefix = isProduction ? "PROD-" : "DEV-";
  let htmlHash =
    prefix + crypto.createHash("sha1").update(contents).digest("base64");
  if (page.html && cache[page.html] != htmlHash) {
    htmlUpdated = true;
    config.plugins.push(
      new HtmlWebpackPlugin({
        template: filepath,
        filename: page.chunk + ".html",
        meta: webpackData["html-options"].meta || {},
        chunks: menuExists ? ["menu", page.chunk] : [page.chunk],
      })
    );
  }

  newCache[page.html] = htmlHash;

  if (page.bundler) {
    // && (page.bundler = [...page.bundler, ...webpackData["menu-bundler"]])

    // Check cache
    let bundle = page.bundler
      .map((el) => path.resolve("./src/", el))
      .filter((filepath, i) => {
        let contents = fs.readFileSync(filepath, "utf-8");
        let prefix = isProduction ? "PROD-" : "DEV-";
        let hash =
          prefix + crypto.createHash("sha1").update(contents).digest("base64");
        newCache[page.bundler[i]] = hash;
        return cache[page.bundler[i]] != hash;
      });
    if (bundle.length) {
      config.entry[page.chunk] = { import: bundle };

      // if (menuExists) {
      //   config.entry[page.chunk].dependOn = "menu";
      // }
    }
  }
});

if (menuExists) {
  menuBundle = webpackData["menu-bundler"]
    .map((el) => path.resolve("./src/", el))
    .filter((filepath, i) => {
      let contents = fs.readFileSync(filepath, "utf-8");
      let prefix = isProduction ? "PROD" : "DEV";
      let hash =
        prefix + crypto.createHash("sha1").update(contents).digest("base64");
      newCache[webpackData["menu-bundler"][i]] = hash;
      return htmlUpdated || cache[webpackData["menu-bundler"][i]] != hash;
    });
  if (menuBundle.length) {
    config.entry.menu = menuBundle;
  }
}

fs.writeFileSync(
  "./cache.json",
  JSON.stringify(newCache, null, 2) + "\n",
  "utf-8",
  () => {}
);

exec("py flask_compile.py build-cache || python3 flask_compile.py build-cache");

module.exports = config;
