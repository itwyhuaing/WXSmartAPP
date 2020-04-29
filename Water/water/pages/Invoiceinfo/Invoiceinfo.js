// pages/Invoiceinfo/Invoiceinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputs:[
            {"title":"抬头","holderTex":"请输入准确的发票抬头","type":"t"},
            {"title":"税号","holderTex":"请输入准确的发票税号","type":"c"}, 
          ],

    invoice:{},
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

  // 
  valueforinput:function (e) {
    let t = e.target.dataset.type
    let v = e.detail.value
    var rlt = this.data.invoice
    if (t == 't'){
      rlt['title'] = v
    }else if (t == 'c'){
      rlt['code'] = v
    }
    this.setData({
      invoice:rlt
    })
  },

  // 
  saveinvoiceinfo:function (e){
    console.log(this.data.invoice)
  },
})