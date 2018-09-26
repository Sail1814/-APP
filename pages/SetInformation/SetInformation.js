const app = getApp()

Page({
  data: {
    showTopTips: false,
    radioItems: [
      { name: '男', value: '0' },
      { name: '女', value: '1'},
      { name: '保密', value: '2', checked: true }
    ],
    refleData:'',
    date: "1990-01-01",
    time: "12:00",
    countryCodes: ["+86", "+80", "+84", "+87"],
    countryCodeIndex: 0,
    countries: ["中国", "美国", "英国"],
    countryIndex: 0,
    accounts: ["微信支付", "财付通支付", "支付宝支付", "银联支付"],
    accountIndex: 0,
    isAgree: false,
    nickName:'',
    QQ:1234,
    phoneNum:17000000000,
    SOSPhone: 17000000000,
    PayNum:111111,
  },
  onLoad:function(){
    var myDate = new Date()
    this.setData({
      refleData:myDate.getFullYear()+'-'+this.pad(myDate.getMonth()+1,2)+'-'+this.pad(myDate.getDate(),2),
      radioItems: app.store.$state.setUserInfo.radioItems,
      date: app.store.$state.setUserInfo.date,
      time: app.store.$state.setUserInfo.time,
      countryCodeIndex: app.store.$state.setUserInfo.countryCodeIndex,
      countryIndex: app.store.$state.setUserInfo.countryIndex,
      accountIndex: app.store.$state.setUserInfo.accountIndex,
      isAgree: app.store.$state.setUserInfo.isAgree,
      nickName: app.store.$state.setUserInfo.nickName,
      QQ: app.store.$state.setUserInfo.QQ,
      phoneNum: app.store.$state.setUserInfo.phoneNum,
      SOSPhone: app.store.$state.setUserInfo.SOSPhone,
      PayNum: app.store.$state.setUserInfo.PayNum
    });
  },
  //补0
  pad:function(num, n) {
    var len = num.toString().length;
    while(len <n) {
      num = "0" + num;
      len++;
    }
  return num;
  },
  //提示
  showTopTips: function () {
    var that = this;
    app.store.$state.setUserInfo = {
      radioItems: this.data.radioItems,
      date:this.data.date,
      time:this.data.time,
      countryCodeIndex: this.data.countryCodeIndex,
      countryIndex: this.data.countryIndex,
      accountIndex: this.data.accountIndex,
      isAgree: this.data.isAgree,
      nickName: this.data.nickName,
      QQ: this.data.QQ,
      phoneNum: this.data.phoneNum,
      SOSPhone: this.data.SOSPhone,
      PayNum: this.data.PayNum
    }
    this.setData({
      showTopTips: true
    });
    setTimeout(function () {
      that.setData({
        showTopTips: false
      });
    }, 3000);
  },

  //性别
  radioChange: function (e) {
    var radioItems = this.data.radioItems;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }
    this.setData({
      radioItems: radioItems
    });
  },
  //昵称
  bindNiceNamechange:function(e){
    this.setData({
      nickName: e.detail.value
    })
  },
  //  qq
  bindQQchange: function (e) {
    this.setData({
      QQ: e.detail.value
    })
  },
  //手机号
  bindphoneNumchange: function (e) {
    this.setData({
      phoneNum: e.detail.value
    })
  },
  //SOSPhone
  bindSOSPhonechange: function (e) {
    this.setData({
      SOSPhone: e.detail.value
    })
  },
  //生日
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  //信息推送时间
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  //国家手机区号
  bindCountryCodeChange: function (e) {
    this.setData({
      countryCodeIndex: e.detail.value
    })
  },

  //国家
  bindCountryChange: function (e) {
    this.setData({
      countryIndex: e.detail.value
    })
  },

  //支付选择
  bindAccountChange: function (e) {
    this.setData({
      accountIndex: e.detail.value
    })
  },
  //支付账号
  bindPayChange: function (e) {
    this.setData({
      PayNum: e.detail.value
    })
  },
  //相关条款
  bindAgreeChange: function (e) {
    this.setData({
      isAgree: !!e.detail.value.length
    });
  }
});