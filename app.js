import req from 'lib/request.js'
App({
  onLaunch(options) {
    req.getUserInfo().then(res => {
      this.globalData.userInfo = res.userInfo
    })
  },
  onShow: function (options) {
    if (options && options.scene == 1038) {
      wx.redirectTo({
        url: '/pages/index/index'
      })
    }
  },
  req: req,
  globalData: {
    userInfo: ''
  }
})