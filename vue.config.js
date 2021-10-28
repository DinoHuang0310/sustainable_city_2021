// vue.config.js
module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '《2021永續城市》台灣最強城市大調查'
        return args
      })
  },
  transpileDependencies: [
    'vue-echarts',
    'resize-detector',
  ],
  publicPath: process.env.NODE_ENV === 'production' ?
    // '/lazyweb/project/economic_report/' : './' // 正式
    // '/edm/dinoTest/economic_report/' : './' // 測試
    './' : './' // localhost
}