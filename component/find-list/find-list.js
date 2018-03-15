const app = getApp()
Component({
  properties: {
    list: {
      type: Array,
      value: []
    }
  },
  data: {
    
  },
  methods: {
    toOtherApp: function (e) {
      console.log('find 组件')
      console.log(e)
      var myEventDetail = e.currentTarget.dataset.obj // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('taphandle', myEventDetail, myEventOption)
    }
  }
})