// pages/find/find.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.req.find()
    .then(res => {
      console.log(res)
      this.setData({
        list: res.d.Results
      })
    })
    .catch(err => {
      console.log(err)
    })

    app.req.infofind()
      .then(res => {
        if(res.f===1){
          this.setData({
            list: res.d.Unit
          })
        }
      })
      .catch(err => {
        console.log(err)
      })

    let result = [
      { type:'单行',
        data:{
          AddDate: "0000-00-00 00:00:00",
          AppID: "11",
          AppKey: "wxdfed41646adaf536",
          AppLogo: "https://xcx-album-img.duomai.com/a8f8f659e400e2df575e96ad0d82294c",
          Description: "",
          Name: "每日点灯祈福",
          Username: "peter",
          WeixinID: "gh_9f5a69dafbec",
          WxhID: "1569"
        }
      },
      {
        type:'大图轮播',
        data: [{ imgSrc: './ai.jpg' }, { imgSrc: './ai.jpg' }, { imgSrc: './ai.jpg' }]
      },
      {
        type: '贺卡',
        data:{
          title:'文字的主要标题',
          secondTitle:'文章的二级标题',
          imgSrc: './ai.jpg'
        }
      },
      {
        type: '列表项轮播',
        data: [{ imgSrc: './ai.jpg', describe: '简短文字' },
              { imgSrc: './ai.jpg', describe: '文字描述' },
              { imgSrc: './ai.jpg', describe: '你好世界' },
              { imgSrc: './ai.jpg', describe: '街看数据' }]
      },
      {
        type: '列表项轮播二级标题',
        data: [{ imgSrc: './ai.jpg', describe: '简短文字',secondDescribe:'次要说' },
              { imgSrc: './ai.jpg', describe: '文字描述',secondDescribe:'次要说' },
              { imgSrc: './ai.jpg', describe: '你好世界',secondDescribe:'次要说' },
              { imgSrc: './ai.jpg', describe: '街看数据',secondDescribe:'次要说' }]
      },
      {
        type: '文字',
        data:{
          describe:'这个是单行文字说明的的内容，读书高度计划的时间段/.jd好的计划的塑胶地板会USD计划的'
        }
      },
      {
        type: '贺卡图片在右边',
        data:{
          title:'标题的文字',
          describe:'这里是当前贺卡的一些描述,描述的 内容最好不要太长，具体的多少，我也不知道。哈事故的玉观音的供应商噶就好撒不到傻逼的晚会上的把握',
          imgSrc:'./ai.jpg'
        }
      }
      ]
  },

  tap1: function (e) {
    console.log(e.detail,111)
    let obj = e.detail;
    if(!obj.FactParams1){
      //throw new Error('FactParams1 is must be exist');
      console.log('FactParams1 is must be exist');
    }
    wx.navigateToMiniProgram({
      appId: obj.FactParams1,
      path: '',
      envVersion: 'release',
      extraData: {},
      success(res) {
        // 打开成功
        console.log('打开成功')
      },
      fail(err) {
        console.log('打开失败')
      }
    })
  }
})