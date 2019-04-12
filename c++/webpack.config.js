module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.c$/,
        loader: "@wasm-tool/emscripten"
      }
    ]
  },
  node: {
    fs: "empty"
  },
};
