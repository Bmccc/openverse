module.exports = {
  env: {
    test: {
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              node: "current",
            },
          },
        ],
        "@babel/preset-typescript",
      ],
      plugins: [
        "@nuxtjs/composition-api/dist/babel-plugin",
        "babel-plugin-replace-ts-export-assignment",
      ],
    },
  },
}
