// pages/Home/ShopList.js

var util = require('../../utils/util')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerSize:util.scaleAccordingScreen({
      w:750,
      h:406
    }),

    menuList:[
      {
        icon:"/images/home_menu_bake.png",
        text:"百科"
      },
      {
        icon:"/images/home_menu_ym.png",
        text:"移民"
      },
      {
        icon:"/images/home_menu_prj.png",
        text:"交流群"
      },
      {
        icon:"/images/home_menu_fc.png",
        text:"房产"
      }
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

  tapHomeMenuItem:function(){
    console.log("tapHomeMenuItem")
  },

  tapHomeBanner:function(){
    console.log("tapHomeBanner")
  },

  testFun:function(){
    wx.getSystemInfo({
      complete: (res) => {
        console.log(res.screenWidth)
        console.log(res.screenHeight)
      },
    })
  }
  
})