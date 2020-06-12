// pages/Cpm/Cpm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    focus:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      search:this.search.bind(this)
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

  search:function (e){
    console.log(" search :",e);
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve([{text: '搜索结果', value: 1}, {text: '搜索结果2', value: 2}, 
                   {text: '搜索结果3', value: 3}, {text: '搜索结果4', value: 4}, 
                   {text: '搜索结果5', value: 5}, {text: '搜索结果6', value: 6}])
          //resolve([])
      }, 200)
  })
    
  },

  selectResult:function (e){
    console.log("selectResult :",e);
    
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },

})