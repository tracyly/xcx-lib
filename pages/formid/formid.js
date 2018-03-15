// pages/formid/formid.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '../../component/formid-custom/test.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 自定义组件 formid-custom 的绑定事件 taphandle
   * 参数：
   * e:即 event--微信小程序原生事件参数
   */
  tap1: function (e) {
    console.log(`tap1 输出参数 e: 下一行`)
    console.log(e)
    console.log('tap1 输出参数 fromId: ' + e.detail.fromId)
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