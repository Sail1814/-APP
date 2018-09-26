
function datalist(){
  return {
    recommend: 'http://api.meituan.com/group/v1/recommend/homepage/city/1?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=mrUZYo7999nH8WgTicdfzaGjaSQ=&__skno=51156DC4-B59A-4108-8812-AD05BF227A47&__skts=1434530933.303717&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&ci=1&client=iphone&limit=40&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-06-17-14-50363&offset=0&position=39.983497,116.318042&userId=10086&userid=10086&utm_campaign=AgroupBgroupD100Fab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_gxh_82__nostrategy__leftflow___ab_pindaoshenyang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_trip_yidizhoubianyou__b__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___a20141120nanning__m1__leftflow___ab_pind',
    menuInfo: [
      {
        text: '美食',
        icon: '../../img/Home/icon_homepage_foodCategory.png',
        path: { url: 'http://meishi.meituan.com/i/?ci=20&stid_b=1&cevent=imt%2Fhomepage%2Fcategory1%2F1' }
      },
      {
        text: '猫眼电影',
        icon: '../../img/Home/icon_homepage_movieCategory.png',
        path: { url: 'https://m.maoyan.com/imeituan/?_v_=yes&my_traffic_sources=group&ci=20&stid_b=1&cevent=imt%2Fhomepage%2Fcategory1%2F99' }
      },
      {
        text: '酒店',
        icon: '../../img/Home/icon_homepage_hotelCategory.png',
        path: { url: 'https://i.meituan.com/awp/h5/hotel/search/search.html?stid_b=1&cevent=imt%2Fhomepage%2Fcategory1%2F20' }
      },
      { text: 'KTV', icon: '../../img/Home/icon_homepage_KTVCategory.png' },
      { text: '优惠买单', icon: '../../img/Home/icon_homepage_default.png' },
      { text: '周边游', icon: '../../img/Home/icon_homepage_foottreatCategory.png' },
      { text: '生活服务', icon: '../../img/Home/icon_homepage_lifeServiceCategory.png' },
      { text: '休闲娱乐', icon: '../../img/Home/icon_homepage_entertainmentCategory.png' },
      { text: '丽人/美发', icon: '../../img/Home/icon_homepage_beautyCategory.png' },
      { text: '购物', icon: '../../img/Home/icon_homepage_shoppingCategory.png' }
    ]
  }
}

function userList() {
  return {
    carList:[
      {
        text: '我的钱包',
      icon: '../../img/mine/icon_mine_wallet.png',
        dec: '办信用卡'
      },
      {
        text: '余额',
        icon: '../../img/mine/icon_mine_balance.png',
        dec: '￥56487'
      },
      {
        text: '抵用券',
        icon: '../../img/mine/icon_mine_voucher.png',
        dec: '23'
      },
      {
        text: '会员卡',
        icon: '../../img/mine/icon_mine_membercard.png',
        dec: '4'
      },
    ],
    aboutList:[
      {
        text: '好友去哪',
        icon: '../../img/mine/icon_mine_friends.png',
        dec: ''
      },
      {
        text: '我的评价',
        icon: '../../img/mine/icon_mine_comment.png',
        dec: ''
      },
      {
        text: '我的收藏',
        icon: '../../img/mine/icon_mine_collection.png',
        dec: ''
      },
      {
        text: '会员中心',
        icon: '../../img/mine/icon_mine_membercard.png',
        dec: 'v15'
      },
      {
        text: '积分商城',
        icon: '../../img/mine/icon_mine_member.png',
        dec: '好友已上线'
      },
    ]
    }
}

function recommendUrlWithId(id) {
    return 'http://api.meituan.com/group/v1/deal/recommend/collaborative?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=hWCwhGYpNTG7TjXWHOwPykgoKX0%3D&__skno=433ACF85-E134-4FEC-94B5-DA35D33AC753&__skts=1436343274.685593&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&cate=0&ci=1&cityId=1&client=iphone&did=' + id + '&district=-1&fields=id%2Cslug%2Cimgurl%2Cprice%2Ctitle%2Cbrandname%2Crange%2Cvalue%2Cmlls%2Csolds&hasbuy=0&latlng=0.000000%2C0.000000&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-07-08-15-36746&offset=0&scene=view-v4&userId=10086&userid=10086&utm_campaign=AgroupBgroupD100Fab_i550poi_ktv__d__j___ab_i_group_5_3_poidetaildeallist__a__b___ab_gxhceshi0202__b__a___ab_pindaoquxincelue0630__b__b1___ab_i_group_5_6_searchkuang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_i550poi_xxyl__b__leftflow___ab_b_food_57_purepoilist_extinfo__a__a___ab_waimaiwending__a__a___ab_waimaizhanshi__b__b1___ab_i550poi_lr__d__leftflow___ab_i_group_5_5_onsite__b__b___ab_xinkeceshi__b__leftflowGhomepage_guess_27774127&utm_content=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_medium=iphone&utm_source=AppStore&utm_term=5.7&uuid=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&version_name=5.7'
}
var jindongUrl = 'https://daojia.jd.com/client?_djrandom=15377250293231&functionId=indexh5%2FgetIndex&body=%7B%22address%22%3A%22%E9%87%91%E6%B3%B0%E5%95%86%E5%8A%A1%E5%A4%A7%E5%8E%A6%22%2C%22city%22%3A%22%E5%B9%BF%E5%B7%9E%E5%B8%82%22%2C%22longitude%22%3A113.30591%2C%22latitude%22%3A23.22101%2C%22coordType%22%3A%222%22%2C%22h5From%22%3A%22%22%2C%22isglb%22%3A%22%22%2C%22currentPage%22%3A%22%22%2C%22storeId%22%3A%22%22%2C%22activityId%22%3A%22%22%2C%22isIndex%22%3Afalse%2C%22previewDate%22%3A%22%22%7D&jda=122270672.2101536933.1533315243.1536741608.1537253100.16&platCode=H5&appVersion=5.8.0&appName=paidaojia&jdDevice=&signKey=ac7dc95ffa8ab4522afb8483f57e0dad'


var getwxacodeApi = 'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=ACCESS_TOKEN'

module.exports.jindongUrl = jindongUrl
module.exports.datalist = datalist
module.exports.recommendUrlWithId = recommendUrlWithId
module.exports.userList = userList
module.exports.getwxacodeApi = getwxacodeApi