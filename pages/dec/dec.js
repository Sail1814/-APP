var api = require('../../utils/api.js')
const app = getApp()
Page({
  data: {
    bannerImg:'',
    oldPrice:0,
    price:0,
    solds:0,
    seeList:[],
    tittle:'',
    mtittle:'',
    id:0
  },
  onLoad: function (options) {
    var that = this
    wx.request({
      url: api.recommendUrlWithId(options.id),
      header: {
        'content-type': 'application/json'
      },
      method: "GET",
      complete: function (res) {
        for (var i = 0; i < res.data.data.deals.length; i++) {
          res.data.data.deals[i].imgurl = res.data.data.deals[i].imgurl.replace(/w.h/g, '150.0')
        }
        that.setData({
          seeList: res.data.data.deals,
          oldPrice: options.oldprice,
          price: options.price,
          bannerImg: options.squareimgurl.replace(/w.h/g, '480.0'),
          solds: options.solds,
          tittle: options.mname,
          id:options.id,
          mtittle: options.mtitle
        });
        if (res == null || res.data == null) {
          console.error('网络请求失败');
          return;
        }
      }
    })
  },
  //生成随机单号
  guid:function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  },
  order:function(){
    let guid = this.guid()
    app.store.$state.orders.push({
      price: this.data.price,
      tittle: this.data.tittle,
      mtittle: this.data.mtittle,
      id: this.data.id,
      oldprice: this.data.oldPrice,
      solds: this.data.solds,
      bannerImg: this.data.bannerImg,
      ordeNumber: guid
    });
    wx.switchTab({
      url: '../order/order',
    });
  },
  onReady: function () {

  },

  onShow: function () {
    
  },
  onHide: function () {

  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})