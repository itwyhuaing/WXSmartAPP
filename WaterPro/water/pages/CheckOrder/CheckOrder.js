// pages/CheckOrder/CheckOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderproducts:[],
    ordershopinfo:{},
    totalprice:0,
    entries:[
             {title:"收货地址",tip:"请确认地址",icon:"/images/arrow_left.png"},
             {title:"发票信息",tip:"请完善发票信息",icon:"/images/arrow_left.png"},
             {title:"备注",tip:"备注信息",icon:"/images/arrow_left.png"},
            ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面传参
    const eventChannel = this.getOpenerEventChannel()
    var that = this
    eventChannel.on('checkOrderAptDataFromShopDetailPage',function(data){ 
      console.log(data.products)
      console.log(data.shopinfo)
      // 计算所选商品的总价
      var total = 0
      for (let i = 0; i < data.products.length; i++){
        var p = data.products[i]
        total += p.p_price
      }
      that.setData({
        orderproducts:data.products,
        ordershopinfo:data.shopinfo,
        totalprice:total
      })
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

  // 地址信息 - 发票信息 - 备注
  tapoperation:function(e) {
    var f = e.currentTarget.dataset.title
    var url = ""
    console.log(e)
    if(f == "收货地址"){
      url = '/pages/Adrinfo/Adrinfo'
    }else if (f == "发票信息"){
      url = '/pages/Invoiceinfo/Invoiceinfo'
    } else if (f == "备注"){
      url = '/pages/Remarkinfo/Remarkinfo'
    }
    console.log(url)
    wx.navigateTo({
      url: url,
    })
  },

  // 去支付
  gotopay:function(e) {

    let timex     = util.timestamp()
    let nonceStrx = "lhklghlghslkghlsh"
    let packagex  = "8978797"
    let paySignx  = "sdgsghdghfghf" 
    wx.requestPayment({
      timeStamp: timex,
      nonceStr: nonceStrx,
      package: packagex,
      signType: 'MD5',
      paySign: paySignx,
      success (res) {
        console.log("success:\n"+res)
       },
      fail (res) { 
        console.log("fail:\n"+res)
      }
    })

  },


})