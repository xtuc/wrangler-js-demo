# wrangler-js-demo

## Warning

Currently, and for expirementation purposes, wrangler-js is its own tool. However, we should make only one tool, which is wrangler. Some merging work is required.

## Demos

- [fibonacci in c++ and emscripten (fails currently)](c++/)
- [JavaScript with ESM and a npm package](js/)
- [JavaScript with a wasm module written in wast](js_plus_wasm_wat/)
- [Rust with wasm-pack/wasm-bindgen](rust/)

Golang would also be possible using https://github.com/wasm-tool/golang.

## wrangler-js

It uses Webpack to build the project and will run any loaders (c to wasm compiler with the emscripten loader for instance).
If Wasm modules were generated during the build, wrangler-js will generate the corresponding Worker metadata.json, do some wiring and publish the worker code.

### Usage

Go in the example directories, install dependecies `npm i` and run `wrangler-js`.

Don't forget to provide the keys in your environment:
- `CF_ACCOUNT_ID`
- `CF_API_KEY`
- `CF_ACCOUNT_EMAIL`
