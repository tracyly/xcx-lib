// pages/demo/demo.js
import Player from '../../lib/player/player.js'

var player = new Player()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      dataUrl: 'https://xcx-album-img.duomai.com/lnVvZDO8XhBXCxFjU3XUbxaLh0YH'
    }, {
      dataUrl: 'https://xcx-album-img.duomai.com/lnVvZDO8XhBXCxFjU3XUbxaLh0YH'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    player.list.create(this.data.list)
    player.start()
  },

  change: function (e) {
    player.invoke(1)
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