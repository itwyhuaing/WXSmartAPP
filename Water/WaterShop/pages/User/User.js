// pages/User/User.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 我的店铺 -  推荐 - 反馈 - 联系 - 关于
    ds:[
        {icon:"/images/my_shop.png",txt:"我的店铺",arrow:"/images/arrow_left.png"},
        {icon:"/images/my_gift.png",txt:"推荐有礼",arrow:"/images/arrow_left.png"},
        {icon:"/images/my_fankui.png",txt:"意见反馈",arrow:"/images/arrow_left.png"},
        {icon:"/images/my_kefu.png",txt:"联系我们",arrow:"/images/arrow_left.png"},
        ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  taptonext:function(e){
    console.log(e.currentTarget.dataset.model)
    var f = e.currentTarget.dataset.model
    var url = ""
    if (f.txt == "我的店铺") {
      url = "/pages/ShopInfo/ShopInfo"
    }
    else if (f.txt == "推荐有礼") {
      url = "/pages/Recommand/Recommand"
    }else if (f.txt == "意见反馈") {
      url = "/pages/Feedback/Feedback"
    }else if (f.txt == "联系我们") {
      url = "/pages/About/About"
    }

    wx.navigateTo({
      url: url,
    })
  },

})