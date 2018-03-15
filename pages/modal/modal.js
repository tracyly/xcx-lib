// pages/modal/modal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    maskDisplay: true,
    animation: {}
  },

  close: function (e) {
    this.animation = wx.createAnimation({
      duration: 100,
      timingFunction: 'ease-in-out'
    })
    this.animation.scale3d(.9, .9, .9).step().opacity(1).scale3d(1.3, 1.3, 1.3).step().opacity(0).scale3d(.3, .3, .3).step()
    this.setData({ animation: this.animation.export() })
    setTimeout(() => {
      this.animation = ''
      this.setData({
        maskDisplay: true,
        animation: {}
      })
    }, 400)
  },

  open: function () {
    this.setData({
      maskDisplay: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})