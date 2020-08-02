var appInstance = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderdata:[],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.navigateTo({
    //   url: '/pages/Vertify/Vertify',
    // })
    // return;
    
    // 判断是否已登陆
    if (appInstance.globalData.loginstatus == "0"){
      wx.navigateTo({
        url: '/pages/Entry/Entry',
      })
    }

    let order1 = {
      order_id:"300000",
      order_adr:"深圳市宝安区西乡街道1", 
      order_tel:"13691658693", 
      order_mobile:"",
      order_total:"100.68",
      pay_total:"90.88",
      pay_type:"wx", // 支付方式： wx-微信、ali-支付宝
      pay_status:"1", // 支付状态：1-已支付、0-未支付
      order_status:"1", // 订单状态：1-已完成、0-未完成
      order_invoiceid:"2998x799898088900ynm88", // 订单没有发票id
      order_remarkinfo:"送达后请先按门铃",//备注
      order_timestamp:"1590140145",// 订单时间
      order_usrid:"2990090",// 关联用户id
      order_sid:"456789", // 关联店铺id
      order_pids:[{}] // 此次交易所设计产品
    }

    let order2 = {
      order_id:"300000",
      order_adr:"深圳市宝安区西乡街道2", 
      order_tel:"13691658693", 
      order_mobile:"",
      order_total:"100.68",
      pay_total:"90.88",
      pay_type:"wx", // 支付方式： wx-微信、ali-支付宝
      pay_status:"1", // 支付状态：1-已支付、0-未支付
      order_status:"1", // 订单状态：1-已完成、0-未完成
      order_invoiceid:"2998x799898088900ynm88", // 订单没有发票id
      order_remarkinfo:"送达后请先按门铃",//备注
      order_timestamp:"1590140145",// 订单时间
      order_usrid:"2990090",// 关联用户id
      order_sid:"456789", // 关联店铺id
      order_pids:[{}] // 此次交易所设计产品
    }

    let order3 = {
      order_id:"300000",
      order_adr:"深圳市宝安区西乡街道3", 
      order_tel:"13691658693", 
      order_mobile:"",
      order_total:"100.68",
      pay_total:"90.88",
      pay_type:"wx", // 支付方式： wx-微信、ali-支付宝
      pay_status:"1", // 支付状态：1-已支付、0-未支付
      order_status:"1", // 订单状态：1-已完成、0-未完成
      order_invoiceid:"2998x799898088900ynm88", // 订单没有发票id
      order_remarkinfo:"送达后请先按门铃",//备注
      order_timestamp:"1590140145",// 订单时间
      order_usrid:"2990090",// 关联用户id
      order_sid:"456789", // 关联店铺id
      order_pids:[{}] // 此次交易所设计产品
    }

    let order4 = {
      order_id:"300000",
      order_adr:"深圳市宝安区西乡街道4", 
      order_tel:"13691658693", 
      order_mobile:"",
      order_total:"100.68",
      pay_total:"90.88",
      pay_type:"wx", // 支付方式： wx-微信、ali-支付宝
      pay_status:"1", // 支付状态：1-已支付、0-未支付
      order_status:"1", // 订单状态：1-已完成、0-未完成
      order_invoiceid:"2998x799898088900ynm88", // 订单没有发票id
      order_remarkinfo:"送达后请先按门铃",//备注
      order_timestamp:"1590140145",// 订单时间
      order_usrid:"2990090",// 关联用户id
      order_sid:"456789", // 关联店铺id
      order_pids:[{}] // 此次交易所设计产品
    }

    let order5 = {
      order_id:"300000",
      order_adr:"深圳市宝安区西乡街道5", 
      order_tel:"13691658693", 
      order_mobile:"",
      order_total:"100.68",
      pay_total:"90.88",
      pay_type:"wx", // 支付方式： wx-微信、ali-支付宝
      pay_status:"1", // 支付状态：1-已支付、0-未支付
      order_status:"1", // 订单状态：1-已完成、0-未完成
      order_invoiceid:"2998x799898088900ynm88", // 订单没有发票id
      order_remarkinfo:"送达后请先按门铃",//备注
      order_timestamp:"1590140145",// 订单时间
      order_usrid:"2990090",// 关联用户id
      order_sid:"456789", // 关联店铺id
      order_pids:[{}] // 此次交易所设计产品
    }

    let order6 = {
      order_id:"300000",
      order_adr:"深圳市宝安区西乡街道6", 
      order_tel:"13691658693", 
      order_mobile:"",
      order_total:"100.68",
      pay_total:"90.88",
      pay_type:"wx", // 支付方式： wx-微信、ali-支付宝
      pay_status:"1", // 支付状态：1-已支付、0-未支付
      order_status:"1", // 订单状态：1-已完成、0-未完成
      order_invoiceid:"2998x799898088900ynm88", // 订单没有发票id
      order_remarkinfo:"送达后请先按门铃",//备注
      order_timestamp:"1590140145",// 订单时间
      order_usrid:"2990090",// 关联用户id
      order_sid:"456789", // 关联店铺id
      order_pids:[{}] // 此次交易所设计产品
    }

    var sourData = [order1,order2,order3,
                order4,order5,order6
               ]
               
    this.setData({ 
      orderdata:sourData
    })               

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow - 1")

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

  // 查看订单详情
  lookOrderDetail:function(e) {
    console.log("进入该订单详情页:",e)
    wx.navigateTo({
      url: '/pages/OrderDetail/OrderDetail',
    })
  },

})