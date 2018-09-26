var api = require('../../utils/api.js')
Page({
  data: {
    tabs: ["享美食", "惠生活", "爱玩乐", "住酒店", "全部"],
    types : [
      ['热门', '甜点饮品', '外卖', '川湘菜', '小吃快餐', '火锅烧烤', '日韩料理', '自助餐'],
      ['全部', '鲜花', '超市生鲜', '洗车租车', '体验中心', '居家维修', '宠物服务', '家政服务'],
      ['热门', '聚会玩乐', '休闲放松', '健身运动', '电影院', '美发美甲', '亲子游','景点'],
      ['热门', '经济', '舒适', '高档', '民宿'],
      []
    ],
    activeIndex: 0,
    sliderOffset: 0,
    childrenactiveIndex:0,
    foodList:[]
  },
  tabClick: function (e) {
    this.setData({
      childrenactiveIndex:0,
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id,
      foodList: this.shuffle(this.data.foodList)
    });
  },
  chidrenTabClick:function(e){
    this.setData({
      childrenactiveIndex: e.currentTarget.dataset.num,
      foodList: this.shuffle(this.data.foodList)
    });
  },
  //打乱数据,模拟分类
  shuffle:function(arr) {
    let i = arr.length;
    while(i) {
      let j = Math.floor(Math.random() * i--);
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr
  },
  onPullDownRefresh:function(){
    //真实刷新
    this.onLoad()
    //模拟刷新
    this.setData({
      foodList: this.shuffle(this.data.foodList)
    });
  },
  onLoad: function () {
    this.setData({
      menuInfo: api.datalist().menuInfo
    })
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
    wx.request({
      url: api.datalist().recommend,
      header: {
        'content-type': 'application/json'
      },
      method: "GET",
      complete: function (res) {
        for (var i = 0; i < res.data.data.length; i++) {
          res.data.data[i].imgurl = res.data.data[i].imgurl.replace(/w.h/g, '150.0')
        }
        that.setData({
          foodList: res.data.data
        });
        if (res == null || res.data == null) {
          console.error('网络请求失败');
          return;
        }
      }
    })
  }
});