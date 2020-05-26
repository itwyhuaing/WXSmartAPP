// pages/Detail/Detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    extop:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("options:",options.info);
    const etc = this.getOpenerEventChannel()
    etc.on('aptdata',function(info){
      console.log("测试详情页面:",info,";参数:",info.data);
      
    })

    etc.emit("abcdef",{data:"i love you"})

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
    const query = wx.createSelectorQuery()
    var that = this
    query.select('.them').boundingClientRect(function(res){
      console.log("res:",res);
      that.setData({
        extop:res.height
      })
    }).exec()
    

    
    //query.selectViewport().scrollOffset()
    //query.exec(function(res){
    // res[0].top       // #the-id节点的上边界坐标
    // res[1].scrollTop // 显示区域的竖直滚动位置
    //console.log("onShow:",res);
    // })
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