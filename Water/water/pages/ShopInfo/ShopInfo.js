// pages/ShopInfo/ShopInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 店铺 - 产品 - 订单 - 评价
    currentType:"p",
    // 店铺信息
    shopname:{them:"商家名称",des:"海那边科技",type:"name"},
    shopadr:{them:"商家地址",des:"深圳市南山区粤海街道大冲国际中心3201",latitude:22.53332,longitude:113.93041,type:"adr"},
    shoptel:{them:"商家电话",des:"13691658693",type:"tel"},
    shoptime:{them:"营业时间",des:"08:30-21:00",type:"time"},
    shopapttime:{them:"可预约时间",des:"08:30-20:00",type:"apttime"},
    // 产品信息
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
    eventChannel.on('aptDataFromShopListPage', function(info) {
      console.log("eventChannelon:",info.data)
      that.setData({
        shop_info:info.data
      })
    })

    // 店铺产品
    let product = {
      p_type:"pa",
      p_name:"农夫山泉桶装水",
      p_volume:"19L/桶",
      p_amount:"日销量22桶",
      p_price:1,
      p_image:"/images/home_banner.png",
      p_discounts:"一次性购买10桶可免租金租用饮水机一台",
      p_orderedcount:0,
    }
    let product1 = {
      p_type:"pa",
      p_name:"农夫山泉桶装水",
      p_volume:"19L/桶",
      p_amount:"日销量22桶",
      p_price:1,
      p_image:"/images/home_banner.png",
      p_discounts:"一次性购买10桶可免租金租用饮水机一台  租金租用饮水机一台",
      p_orderedcount:0,
    }
    var ps = [product1,product,product,
              product,product1,product,
              product,product1,product,
              product,product,product1,
              product,product1,product]

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

  // 切换商家-产品
  tapshop:function (e) {
    let v = e.currentTarget.dataset.value
    this.setData({
      currentType:v
    })
  },

  tapproduct:function (e) {
    let v = e.currentTarget.dataset.value
    this.setData({
      currentType:v
    })
  },

  // 商家信息点击
  tapshopcell:function (e) {
    let v = e.currentTarget.dataset.value
    let t = e.currentTarget.dataset.type
    console.log(" e.currentTarget.dataset.value :",e.currentTarget.dataset.value,"- e:",e,"- t:",t);
    if (t == "tel"){
      wx.makePhoneCall({
        phoneNumber: v
      })
    }else if (t == "adr"){
      wx.openLocation({
        latitude: this.data.shopadr.latitude,
        longitude: this.data.shopadr.longitude,
        scale:20,
      })
    }
  },

  // 添加购物车
  addProduct:function (e){
    let model                   = e.currentTarget.dataset.model
    let index                   = e.currentTarget.dataset.index
    let current_product_ordered = model.p_orderedcount + 1
    let current_total           =  this.data.total_ordercount + 1 
    let current_total_price     =  this.data.totalprice + model.p_price
    let current_models          = this.data.orderedmodels.concat(model)
    model.p_orderedcount          = current_product_ordered
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

  // 删除购物车
  removeProduct:function (e){
    // console.log("removeProduct:\n",e)
    let model                   = e.currentTarget.dataset.model
    let index                   = e.currentTarget.dataset.index
    let current_product_ordered = model.p_orderedcount - 1
    if(current_product_ordered >= 0){
      let current_total           =  this.data.total_ordercount - 1
      if (current_total >= 0){
        this.data.orderedmodels.splice(index,1)
        let current_models          = this.data.orderedmodels
        let current_total_price     =  this.data.totalprice - model.p_price
        model.p_orderedcount          = current_product_ordered
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

  // 去核对订单
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

})