// pages/QAnswer/QAnswer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 问题答案顶部起点间距
    extop:0,
    // 问题数据模型
    question:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const etc = this.getOpenerEventChannel()
    var that = this
    etc.on("parasFromClassRoomToQAnswer",function(info){
      console.log("info:",info);
      var tmp = info.data
      that.setData({
        question:tmp
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 计算 .them  标签高度,进而更新 .detailcnt 顶部起点
    const query = this.createSelectorQuery()
    var that = this
    query.select(".them").boundingClientRect(function(res){
      that.setData({
        extop:res.height
      })
    }).exec()
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

  }
})