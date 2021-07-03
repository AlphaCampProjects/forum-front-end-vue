// 避免github page抓不到正確路由
module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/forum-front-end-vue/' : '/',
}
