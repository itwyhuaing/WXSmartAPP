// pages/ActLib/ActLib.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    acts:[
      {value:"act_a",name:"买满就送",detail:"单次购满22桶可免租金使用饮水机一台",status:1},
      {value:"act_b",name:"量大优惠",detail:"单次订购多于桶可免租金使用饮水机一台",status:0},
      {value:"act_c",name:"量大优惠",detail:"单次订购多于桶可免租金使用饮水机一台",status:1},
      {value:"act_d",name:"量大优惠",detail:"单次订购多于桶可免租金使用饮水机一台",status:0},
      {value:"act_f",name:"量大优惠",detail:"单次订购多于桶可免租金使用饮水机一台",status:0},
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

  choseact:function (e) {
    let v = e.currentTarget.dataset.value
    var info = this.data.acts
    for (var cou = 0;cou < info.length;cou ++) {
      var dic = info[cou]
      if (dic["value"] == v) {
        var tmp = dic["status"] == 1 ? 0 : 1
        dic["status"] = tmp
      }
    }
    this.setData({
      acts:info
    })
  },

  tapnextoperate:function (e) {
    // 1. 整理选中的活动


    // 2. 返回产品库
    wx.navigateBack({
      complete: (res) => {
        console.log(" --- navigateBack --- ");
        
      },
    })
  },

})