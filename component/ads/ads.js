//广告页面,所有防广告页面的逻辑都在本页面完成
//本页面依赖于Promisify  config
const app = getApp();
import {requestPromisify} from '../../lib/Promisify.js';//promise
import {config} from '../../lib/config.js';//基础配置

Component({
  properties: {
    id: {//页面生成时传入的ID号
      type: String,
      value: '',
    }
  },
  data: {
    _id:'',//当前页面的ID
    adsShow:1,//是否展示广告
    data:{},
    showAds7:1,//展示模块6
  },
  methods: {
    init(){
      if(!this.id)
        throw new Error('广告的ID是必须的,不能没有广告的ID');        
    },
    addData(){
      //加载页面信息
      requestPromisify({
          url: `${config.commonHost}/find/position`,
          method: 'GET',
          data: {
            PositionID: this.id
          },
          header: {
            //cookie: `AppKey=${config.appid};Token=${Token}`
          }
        }).then(res => {
        if(res.f===1){
          //判断是否显示
          let adsShow=Date.now()>new Date(res.d.StartDate).valueOf()&&Date.now()<new Date(res.d.EndDate).valueOf();
          if(!res.d){//当没有res.d
            adsShow=0;
          }
          //得到信息存储
          this.setData({
            data: res.d,
            _id: ~~res.d.Type,
            adsShow: adsShow
          });
        }else if(res.f===0){
          this.setData({
            adsShow: 0
          });
        }
      })
    },
    close(){
      this.setData({showAds7:0});
    },
    toOtherApp(e){//跳转到别的小程序
      
      let state=e.currentTarget.dataset.state;
      if (!this.data.data.AttrData[state].FactParams1) {
        throw new Error('FactParams1 is must be exist');
        //console.err('FactParams1 is must be exist');
      }
      wx.navigateToMiniProgram({
        appId: this.data.data.AttrData[state].FactParams1 || 'wxebd55180f2f224e5',
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
  },
  attached(){
    //初始化信息
    this.init();
    //加载  页面的信息
    this.addData();
  }
})