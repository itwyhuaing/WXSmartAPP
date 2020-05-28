// pages/ProductLib/ProductLib.js

var appInstance = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    libs:[
          {value:"p_y",status:1,name:"怡宝桶装水",pimage:"/images/58_58.png",price:"",acts:["月底前一次性购满100送一同"]},
          {value:"p_b",status:1,name:"怡宝桶装水",pimage:"/images/58_58.png",price:"",acts:[]},
          {value:"p_n",status:0,name:"怡宝桶装水",pimage:"/images/58_58.png",price:"",acts:[]},
          {value:"p_w",status:0,name:"怡宝桶装水",pimage:"/images/58_58.png",price:"",acts:[]},
          {value:"p_h",status:0,name:"怡宝桶装水",pimage:"/images/58_58.png",price:"",acts:[]},
          {value:"p_k",status:0,name:"怡宝桶装水",pimage:"/images/58_58.png",price:"",acts:[]},
          ],
    
    chosedrlt:[],
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

  choseproduct:function (e) {
    let v = e.currentTarget.dataset.value
    var info = this.data.libs
    for(var cou = 0;cou < info.length;cou ++) {
      var dic = info[cou];
      if (dic["value"] == v) {
        var tmp = dic["status"] == 0 ? 1 : 0
        dic["status"] = tmp
      }
    }
    this.setData ({
      libs:info
    })
  },

  tapForAddActEvent:function (e){
    console.log(" tapForAddActEvent ");
    wx.navigateTo({
      url: '/pages/ActLib/ActLib',
    })
  },

  tapnextoperate:function (e) {
    // 1. 整理出选中的产品信息
    var rlt = []
    for (var cou = 0; cou < this.data.libs.length; cou ++){
      var dic = this.data.libs[cou]
      if (dic["status"] == 1) {
        rlt.push(dic)
      }
    }
    console.log("tapnextoperate:",rlt);
    appInstance.globalData.loginstatus = "1"
    appInstance.globalData.vtfstatus = "1"


    // 2. 跳转到我的
    wx.switchTab({
      url: '/pages/Home/OrderList',
    })
    
  },

})