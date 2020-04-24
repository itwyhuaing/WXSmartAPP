// pages/Adrinfo/Adrinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    usr:{title:"联系人：",holderTxt:"请输入",arrow:""},
    tel:{title:"手机号：",holderTxt:"请输入",arrow:""},
    adr1:{title:"选择地址：",holderTxt:"点击选择",arrow:"active"},
    adr2:{title:"门牌号：",holderTxt:"请输入",arrow:""},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // wx.chooseLocation({
    //   complete: (res) => {
    //     console.log(res)
    //   },
    // })

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

  }
})