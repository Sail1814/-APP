var api = require('../../utils/api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: true,
    interval: 3000,
    duration: 800,
    ball:[],
    ballBackgroundImg:'',
    banner:[],
    act2:[],
    act3:[],
    act4:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: api.jindongUrl,
      header: {
        'content-type': 'application/json'
      },
      method: "GET",
      complete: function (res) {
        for (var i = 0; i < res.data.result.data.length; i++) {
          if (res.data.result.data[i].floorStyle==='ball'){
            that.setData({
              ball: res.data.result.data[i].data,
              ballBackgroundImg: res.data.result.data[i].borderImg||''
            });
          } else if (res.data.result.data[i].floorStyle === 'banner'){
            that.setData({
              banner: res.data.result.data[i].data
            });
          } else if (res.data.result.data[i].floorStyle === 'act2') {
            that.setData({
              act2: res.data.result.data[i].data
            });
          } else if (res.data.result.data[i].floorStyle === 'act3') {
            that.setData({
              act3: res.data.result.data[i].data
            });
          }else if (res.data.result.data[i].floorStyle === 'act4') {
            that.setData({
              act4: res.data.result.data[i].data
            });
          }
        }
        if (res == null || res.data == null) {
          console.error('网络请求失败');
          return;
        }
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
    this.setData({
      autoplay: true
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.setData({
      autoplay: false
    });
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