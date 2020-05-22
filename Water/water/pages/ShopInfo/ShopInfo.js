// pages/ShopInfo/ShopInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 店铺 - 产品 - 订单 - 评价
    currentType:"p",
    // 店铺信息
    shopname:{them:"商家名称",des:"海那边科技"},
    shopadr:{them:"商家地址",des:"深圳市南山区粤海街道大冲国际中心3201"},
    shoptel:{them:"商家电话",des:"13691658693"},
    shoptime:{them:"营业时间",des:"08:30-21:00"},
    shopapttime:{them:"可预约时间",des:"08:30-20:00"},
    // 产品信息
    products:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 店铺产品
    let product = {
      p_type:"pa",
      p_name:"农夫山泉桶装水",
      p_volume:"19L/桶",
      p_amount:"日销量22桶",
      p_price:1,
      p_image:"/images/home_banner.png",
      p_discounts:"一次性购买10桶可免租金租用饮水机一台",
      p_ordercount:0,
    }
    let product1 = {
      p_type:"pa",
      p_name:"农夫山泉桶装水",
      p_volume:"19L/桶",
      p_amount:"日销量22桶",
      p_price:1,
      p_image:"/images/home_banner.png",
      p_discounts:"一次性购买10桶可免租金租用饮水机一台  租金租用饮水机一台",
      p_ordercount:0,
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

  taporder:function (e) {
    let v = e.currentTarget.dataset.value
    this.setData({
      currentType:v
    })
  },

})