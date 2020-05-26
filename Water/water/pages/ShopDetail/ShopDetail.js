var util = require('../../utils/util')

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

    shop_info:{},

    products:[],

    // 悬浮按钮信息
    total_ordercount:0,
    totalprice:0,
    expectedTime:"30分钟",
    orderedmodels:[],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面传参
    const eventChannel = this.getOpenerEventChannel()
    var that = this
    eventChannel.on('aptDataFromShopListPage', function(data) {
      console.log("eventChannelon:",data.data)

      let telInfo = [
                      {text:data.data.shop_mobile,value:data.data.shop_mobile},
                      {text:data.data.shop_tel,value:data.data.shop_tel},
                    ]

      that.setData({
        groups:telInfo,
        shop_info:data.data
      })

    });

    // 模拟数据接口返回数据
    let product_buchet = {
      p_type:"pa",
      p_name:"农夫山泉桶装水",
      p_volume:"19L/桶",
      p_amount:"日销量22桶",
      p_price:1,
      p_image:"/images/home_banner.png",
      p_discounts:"一次性购买10桶可免租金租用饮水机一台",
      p_ordercount:0,
    }

    let product_buchet1 = {
      p_type:"pa",
      p_name:"农夫山泉桶装水",
      p_volume:"19L/桶",
      p_amount:"日销量22桶",
      p_price:10,
      p_image:"/images/home_banner.png",
      p_discounts:"一次性购买10桶可免租金租用饮水机一台",
      p_ordercount:0,
    }

    let product_bottle = {
      p_type:"pb",
      p_name:"农夫山泉瓶装水",
      p_volume:"4L*4/箱",
      p_amount:"日销量22箱",
      p_price:200,
      p_image:"/images/home_banner.png",
      p_discounts:"满500减免20",
      p_ordercount:0,
    }
    let ps = [product_buchet1,product_buchet,product_buchet,
              product_buchet,product_buchet1,product_buchet,
              product_buchet,product_buchet,product_buchet1,
              product_bottle,product_bottle,product_bottle,
              product_bottle,product_bottle,product_bottle,]
    this.setData({
      products:ps
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

  // 切换不同类型产品按钮
  switchToLeftEvent:function (e) {
    console.log("switchToLeftEvent:"+e.currentTarget.dataset.status)
    this.setData({
      curSelectedType: e.currentTarget.dataset.status,
    })
  },

  switchToRightEvent:function (e) {
    console.log("switchToRightEvent:"+e.currentTarget.dataset.status)
    this.setData({
      curSelectedType: e.currentTarget.dataset.status,
    })
  },

  // 添加或删除购物车
  addProduct:function (e){
    let model                   = e.currentTarget.dataset.model
    let index                   = e.currentTarget.dataset.index
    let current_product_ordered = model.p_ordercount + 1
    let current_total           =  this.data.total_ordercount + 1 
    let current_total_price     =  this.data.totalprice + model.p_price
    let current_models          = this.data.orderedmodels.concat(model)
    model.p_ordercount          = current_product_ordered
    this.data.products[index]   = model
    let ps = this.data.products
    console.log("addProduct:\n",this.data.totalprice,model.p_price,current_total_price)
    this.setData({
      total_ordercount:current_total,
      totalprice:current_total_price,
      products:ps,
      orderedmodels:current_models,
    })
  },

  removeProduct:function (e){
    // console.log("removeProduct:\n",e)
    let model                   = e.currentTarget.dataset.model
    let index                   = e.currentTarget.dataset.index
    let current_product_ordered = model.p_ordercount - 1
    if(current_product_ordered >= 0){
      let current_total           =  this.data.total_ordercount - 1
      if (current_total >= 0){
        this.data.orderedmodels.splice(index,1)
        let current_models          = this.data.orderedmodels
        let current_total_price     =  this.data.totalprice - model.p_price
        model.p_ordercount          = current_product_ordered
        this.data.products[index]   = model
        let ps = this.data.products
        console.log("removeProduct:\n",this.data.orderedmodels,current_total)
        this.setData({
          total_ordercount:current_total,
          totalprice:current_total_price,
          products:ps,
          orderedmodels:current_models,
        })
      }
    }
  },

  // 核对订单
  gotocheckorder:function(e) {
    console.log(this.data.orderedmodels.length)
    var that = this
    wx.navigateTo({
      url: '/pages/CheckOrder/CheckOrder',
      success:function(res) {
        res.eventChannel.emit("checkOrderAptDataFromShopDetailPage",{products:that.data.orderedmodels,
                                                                      shopinfo:that.data.shop_info})
      }
    })
  },

  // 点击列表查看产品详情 - 延后
  tapLeftProductItem:function (e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/ProductDetail/ProductDetail',
      // success:function(res){
      //   res.eventChannel.emit("aptDataFromShopDetailPage",{data:e.currentTarget.dataset.model})
      // }
    })
  },

})