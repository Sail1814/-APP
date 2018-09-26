/**
 * 1. 引入store
 */
const Store = require('utils/store.js');
/**
 * 2. 实例化一个Store，且允许初始化一个全局状态
 */
let store = new Store({
  orders:[],
  userInfo: null,
  setUserInfo:{
    radioItems: [
      { name: '男', value: '0', checked: true },
      { name: '女', value: '1' },
      { name: '保密', value: '2'}
    ],
    date: '1995-01-01',
    time: "12:12",
    countryCodeIndex: 0,
    countryIndex: 0,
    accountIndex:0,
    isAgree: false,
    nickName: '大帅逼',
    QQ: 1151335192,
    phoneNum: 19925849560,
    SOSPhone: 15678493692,
    PayNum: 15678493692
  }
})
App({
  onLaunch: function () {
    //登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.store.$state.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  /**
   * 3.Introduction to app
   */
  store: store
})
