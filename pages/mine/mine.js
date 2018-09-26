var api = require('../../utils/api.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carList:[],
    aboutList:[],
    files: "../../img/mine/timg.jpg" ,
    userName:'大帅比',
    userInfo: {},
    hasUserInfo: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.store.$state.userInfo) {
      this.setData({
        userInfo: app.store.$state.userInfo,
        userName: app.store.$state.userInfo.nickName||'大帅逼',
        files: app.store.$state.userInfo.avatarUrl,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          files: app.store.$state.userInfo.avatarUrl,
          userName: app.store.$state.userInfo.nickName || '大帅逼',
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.store.$state.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            files: res.userInfo.avatarUrl,
            userName: res.userInfo.nickName,
            hasUserInfo: true
          })
        }
      })
    }
    this.setData({
      carList: api.userList().carList,
      aboutList: api.userList().aboutList
    });
  },
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: res.tempFilePaths
        });
      }
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.store.$state.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  SetInfomation:function(){
    wx.navigateTo({
      url: '../SetInformation/SetInformation',
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

  shareFun:function(e){
  },
  onReachBottom: function () {

  },

  onShareAppMessage: function () {
    return{
      title:'新用户1元',
      desc:'新注册用户可以享受最低1元折扣,心动不如行动',
      path:'../index/index'
    }
  }
})