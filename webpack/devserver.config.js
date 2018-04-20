/* eslint-env node */
const path = require("path");

module.exports = function (isProd) {
  return {
    port: 3003,
    historyApiFallback: true,
    compress: isProd,
    inline: !isProd,
    hot: !isProd
  };
}