// pages/Home/Home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  onShow: function (res) {
    
    

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
    console.log(" onPullDownRefresh ");
    
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

  clickButtonEvent:function (e){
    console.log(e.currentTarget.dataset.value)
    wx.navigateTo({
      url: '/pages/Detail/Detail?info=8866',
      success:function(res){
        console.log("res",res)
        res.eventChannel.emit("aptdata",{data:e.currentTarget.dataset.value}) 
      }
    })

  },

  callpicker:function (e){
    wx.navigateTo({
      url: '/pages/Picker/Picker',
    })
  },

  clickevent: function(e){
    // 自定义组件触发事件时提供的detail对象
    console.log("onClickevent :",e)
    
  }

})