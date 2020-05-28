// pages/Home/OrderList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderdata:[],
    filtermsg:"全部",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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

    var data = [order1,order2,order3,
                order4,order5,order6
               ]
    this.setData({
      orderdata:data
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
    var appInstance = getApp()
    if (appInstance.globalData.loginstatus != "1"){
      // 1. 未认证或未登录，进入入口页面
      wx.navigateTo({
        url: '/pages/Entry/Entry',
      })
    }else  {
      if (appInstance.globalData.vtfstatus != "1"){
        wx.navigateTo({
          url: '/pages/Vertify/Vertify',
        })
      }
    }

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

  taporder:function(e){
    let v = e.currentTarget.dataset.value
    console.log("订单选择:",v,",进入该订单详情页");
    wx.navigateTo({
      url: '/pages/OrderDetail/OrderDetail',
    })
  },

  chosedaterlt:function(e){
    console.log("测试date选择结果:",e);
    let rlt = e.detail.value
    this.setData({
      date:rlt
    })
  },


})