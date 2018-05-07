// pages/camera/camera.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        canUse: true
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
        /*处理相机授权问题 */
        wx.authorize({
            scope: 'scope.camera',
            success: (res) => {
                if (res.errMsg === 'authorize:ok') {
                    this.setData({
                        canUse: true
                    })
                }
            },
            fail: (res) => {
                if (res.errMsg === 'authorize:fail auth deny') {
                    this.setData({
                        canUse: false
                    })
                    wx.showModal({
                        title: '提示',
                        content: '请允许使用相机',
                        confirmText: '允许',
                        success: (res) => {
                            wx.openSetting({
                                success: (res) => {
                                }
                            })
                        }
                    })
                }
            }
        })
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

    },
    /**
     * 处理相机选择照片之后的操作
     */
    _onCallBack: function (e) {
        console.log(e.detail.cameraSrc)
    }
})