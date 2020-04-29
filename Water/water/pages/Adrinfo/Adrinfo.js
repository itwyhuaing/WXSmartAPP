// pages/Adrinfo/Adrinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    usr:{title:"联系人：",holderTxt:"请输入",type:"usr"},
    tel:{title:"手机号：",holderTxt:"请输入",type:"tel"},
    adr1:{title:"选择地址：",holderTxt:"点击选择"},
    adr2:{title:"门牌号：",holderTxt:"请输入",type:"adr2"},

    orderinfo:{"usr":"","tel":"","adr1":"","adr2":""},
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

  },

  valueforinput:function (e){
    let t = e.target.dataset.type
    let v = e.detail.value
    var rlt = this.data.orderinfo
    if (t == "usr") {
      rlt["usr"] = v
    }else if (t == "tel") {
      rlt["tel"] = v
    }else if (t == "adr2") {
      rlt["adr2"] = v
    }
    this.setData({
      orderinfo:rlt
    })
  },

  chooseAdr:function (e){
    
    wx.chooseLocation({
      complete: (res) => {
        var rlt = this.data.orderinfo
        var tmp = this.data.adr1
        tmp["holderTxt"] = res.address
        rlt["adr1"] = res.address
        this.setData({
          adr1:tmp,
          orderinfo:rlt
        })

      },
    })
  },

  saveorderinfo:function (e) {
    console.log(this.data.orderinfo)
  },

})