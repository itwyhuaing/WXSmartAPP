var util = require('../../utils/util')
// wx.makePhoneCall

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgSize:util.scaleAccordingScreen({
      width:750,
      height:406
    }),
    imgUrls:[
      "/images/home_banner.png",
      "/images/home_banner.png",
      "/images/home_banner.png",
    ],
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 5000,
    duration: 1000,

    isShow: false,
    groups: [
        { text: '', value: '' },
        { text: '', value: '' },
    ],

    // 切换不同类型产品点击按钮
    curSelectedType:"left",
    // 两列不同产品列表
    curLocation:0,

    shop_info:{},

    products:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('aptDataFromOpenedPage', function(data) {
      console.log("eventChannel.on")

      let telInfo = [
                      {text:data.data.shop_mobile,value:data.data.shop_mobile},
                      {text:data.data.shop_tel,value:data.data.shop_tel},
                    ]

      that.setData({
        groups:telInfo,
        shop_info:data.data
      })
    });


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

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 交互事件
   * */
  // 打电话 - 1
  telCall: function () {
    this.setData({
      isShow: true
    })
  },

  // 打电话 - 2
  actionsheetTap(e) {
    wx.makePhoneCall({
      phoneNumber: e.detail.value,
    })

    this.setData({
      isShow:false
    })
  },
  // 地图显示当前位置
  openMapLocation:function (e){
    wx.openLocation({
      latitude: this.data.shop_info.shop_latitude,
      longitude: this.data.shop_info.shop_longitude,
      scale:20,
    })
  },

  // 
  switchToLeftEvent:function (e) {
    this.setData({
      curSelectedType: e.currentTarget.dataset.status,
      curLocation:0
    })
  },

  switchToRightEvent:function (e) {
    this.setData({
      curSelectedType: e.currentTarget.dataset.status,
      curLocation:1
    })
  },

  productsSwiperChange:function(e) {
    let cur = e.detail.current
    let sur = e.detail.source
    if (sur == "touch") {
      let type = cur == 0 ? "left" : "right"
      this.setData({
        curSelectedType: type
      })
    }

  }

})