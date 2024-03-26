module.exports = {
  presets: ["@babel/preset-env"],
  env: {
    development: {
      plugins: ["dynamic-import-node"],
    },
  },
};
