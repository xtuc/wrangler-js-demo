module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.wat$/,
        loader: "wast-loader",
        type: "webassembly/experimental"
      }
    ]
  }
};
