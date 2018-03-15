// pages/jump/jump.js
import {
  config
} from '../../lib/config.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgDisplay: false,
    url: `${config.commonHost}/xcxpic/share-qrcode?AppKey=${config.appid}&scene=a=1`
    // url: `${config.commonHost}/xcxpic/share-qrcode?AppKey=wx9b2d0cd989d32fce&scene=a=1`
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    wx.navigateToMiniProgram({
      appId: options.appId,
      path: options.path ? options.path : '',
      envVersion: options.envVersion,
      extraData: options.extraData ? options.extraData : {},
      success: (res) => {
        // 打开成功
        console.log('打开成功')
      },
      fail: (err) => {
        this.setData({ imgDisplay: true })
      }
    })
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