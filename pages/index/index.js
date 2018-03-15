// pages/index/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'api',
        name: '开放接口',
        open: false,
        pages: [
          {
            zh: 'login 登录',
            url: ''
          }, {
            zh: 'loginWithUserinfo 授权登录',
            url: ''
          }, {
            zh: 'submitFormId 上传 formId',
            url: ''
          }, {
            zh: 'submitAdvid 上传 Advid',
            url: ''
          }, {
            zh: 'pay 微信支付(需登录)',
            url: ''
          }, {
            zh: 'getConfig 请求 当前小程序 配置文件',
            url: ''
          }, {
            zh: 'getSetting 获取用户是否授权某项功能',
            url: ''
          }, {
            zh: 'getUserClient 获取本地存储用户信息',
            url: ''
          }, {
            zh: 'getUserInfo 获取用户 头像 昵称',
            url: ''
          }
        ]
      }, {
        id: 'component',
        name: '组件',
        open: false,
        pages: [
          {
            zh: 'formid-custom',
            url: 'formid/formid'
          }, {
            zh: 'notify-top',
            url: 'notify/notify'
          }, {
            zh: 'notify-top2',
            url: 'notify2/notify2'
          }
        ]
      }, {
        id: 'demo',
        name: 'demo',
        open: false,
        pages: [
          {
            zh: 'PK 开屏动画',
            url: 'pk/pk'
          }, {
            zh: '发现页',
            url: 'find/find'
          }, {
            zh: 'modal 弹出框',
            url: 'modal/modal'
          }
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('%c Oh my heavens! ', 'background: #222; color: #bada55');
    // req.test().then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })
    app.req.login().then(res => {
      console.log(res)
    }).catch(err => {console.log(err)})
  },
  
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        if (list[i].url) {
          wx.navigateTo({
            url: 'pages/' + list[i].url
          })
          return
        }
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
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