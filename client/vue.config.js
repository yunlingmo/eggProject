module.exports = {
  lintOnSave: false,

  devServer: {
    proxy: {
      '/article': {
        target: 'http://localhost:7001',
        ws: true, //允许websocket服务
        changeOrigin: true //开启虚拟服务器，让虚拟服务器请求代理服务器
      }
    }
  }
}