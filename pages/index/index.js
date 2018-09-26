var api = require('../../utils/api.js')
Page({
  data: {
    inputShowed: false,
    inputVal: "",
    foodList:{},
    menuInfo: []
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  showImg:function(img){
    let NewImg = img.replace('w.h', '200.0')
    return NewImg
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  onLoad: function () {
    this.setData({
      menuInfo: api.datalist().menuInfo
    })
   var that = this
    wx.request({
      url:api.datalist().recommend,
      header: {
        'content-type': 'application/json'
      },
      method: "GET",
      complete: function (res) {
        for(var i = 0; i<res.data.data.length;i++){
          res.data.data[i].imgurl = res.data.data[i].imgurl.replace(/w.h/g, '150.0')
        }
        that.setData({
          foodList:res.data.data
        });
        if (res == null || res.data == null) {
          console.error('网络请求失败');
          return;
        }
      }
    })



    // wx.request({
    //   url: api.getwxacodeApi,
    //   data:{
    //     path:'',
    //     width:430,
    //   },
    //   // header: {
    //   //   'content-type': 'application/json'
    //   // },
    //   method: "GET",
    //   complete: function (res) {
    //     for (var i = 0; i < res.data.data.length; i++) {
    //       res.data.data[i].imgurl = res.data.data[i].imgurl.replace(/w.h/g, '150.0')
    //     }
    //     that.setData({
    //       foodList: res.data.data
    //     });
    //     if (res == null || res.data == null) {
    //       console.error('网络请求失败');
    //       return;
    //     }
    //   }
    // })
  },
  onShareAppMessage: function () {
    return {
      title: '新用户1元',
      desc: '新注册用户可以享受最低1元折扣,心动不如行动',
      path: '../index/index'
    }
  }
})
