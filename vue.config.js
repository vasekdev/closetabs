const { defineConfig } = require('@vue/cli-service')

// https://cli.vuejs.org/guide/deployment.html#github-pages

module.exports = defineConfig({
  publicPath: '/closetabs/',
  transpileDependencies: true
})
