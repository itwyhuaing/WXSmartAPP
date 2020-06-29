// pages/ActLib/ActLib.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    acts:[
      {actid:"100001",name:"购买优惠",detail:"单次购满22桶可免租金使用饮水机一台66",status:1},
      {actid:"100002",name:"购买优惠",detail:"单次订购多于桶可免租金使用饮水机一台",status:0},
      {actid:"100003",name:"购买优惠",detail:"单次订购多于桶可免租金使用饮水机一台",status:1},
      {actid:"100004",name:"购买优惠",detail:"单次订购多于桶可免租金使用饮水机一台",status:0},
      {actid:"100005",name:"购买优惠",detail:"单次订购多于桶可免租金使用饮水机一台",status:0},
    ],
    customactcontent:""
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
    let v = e.currentTarget.dataset.actid
    var info = this.data.acts
    for (var cou = 0;cou < info.length;cou ++) {
      var dic = info[cou]
      if (dic["actid"] == v) {
        var tmp = dic["status"] == 1 ? 0 : 1
        dic["status"] = tmp
      }
    }
    this.setData({
      acts:info
    })
  },


  addActContentConfirm:function(e) {
    let content = e.detail.value
    this.setData({
      customactcontent:content
    })
  },

  addActConfirm:function(e) {
    let detail = this.data.customactcontent
    let maxid  = this.data.acts.length
    var f = {name:"购买优惠",detail:"单次购满22桶可免租金使用饮水机一台66",status:1}
    f["actid"] = maxid + 10
    var n_acts = this.data.acts
    if(detail.length > 0){
      f["detail"] = detail
      n_acts.push(f)
      this.setData({
        acts:n_acts,
        customactcontent:""
      })
    }
  },

  tapnextoperate:function (e) {
    // 1. 整理选中的活动
    var rltData = []
    var info = this.data.acts
    for (var cou =0;cou < info.length;cou ++){
      let f = info[cou]
      if (f["status"] == 1) {
        rltData.push(f)
      }
    }

    // 2. 数据回传
    //console.log(" --- tapnextoperate 000 --- ")
    const etc = this.getOpenerEventChannel()
    etc.emit("addActs",{para:rltData})
    //console.log(" --- tapnextoperate 111 --- ")
    
    // 3. 返回产品库
    wx.navigateBack({
      
      complete: (res) => {
        //console.log(" --- navigateBack complete --- ")
      },

    })
  },

})