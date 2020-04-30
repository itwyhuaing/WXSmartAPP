// pages/Home/Home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curType:"left",
    tel_login:{acountHolder:"请输入手机号",codeHolder:"请输入验证码",type:"left"},
    acount_login:{acountHolder:"请输入账号",codeHolder:"请输入密码",type:"right"},
    acountpwd:{acount:"",pwd:""},
    telcode:{tel:"",code:""},
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

  // 登录方式切换 ：手机号登录、账号登录
  switchTapEvent:function (e){
    console.log("switchTapEvent:"+e.currentTarget.dataset.status)
    this.setData({
      curType:e.currentTarget.dataset.status
    })

    console.log(this.data.curType)
  },

  // 获取验证码
  tapCodeBtn:function (e) {
    console.log("获取验证码")
  },

  // 捕获输入内容
  blurAcountInput:function (e){
    // console.log(e)
    let v = e.detail.value
    let t = e.currentTarget.dataset.type
    
    if (t == 'left'){
      var rlt = this.data.telcode
      rlt['tel'] = v
      this.setData({
        telcode:rlt
      })
    }else{
      var rlt = this.data.acountpwd
      rlt['acount'] = v
      this.setData({
        acountpwd:rlt
      })
    }
    // console.log('blurAcountInput:',rlt,this.data.telcode)
  },

  blurCodeInput:function (e) {
    // console.log(e)
    let v = e.detail.value
    let t = e.currentTarget.dataset.type
    var rlt = {}
    if (t == 'left'){
      var rlt = this.data.telcode
      rlt['code'] = v
      this.setData({
        telcode:rlt
      })
    }else{
      var rlt = this.data.acountpwd
      rlt['pwd'] = v
      this.setData({
        acountpwd:rlt
      })
    }
    // console.log('blurCodeInput:',rlt)
  },

  // 点击登录
  tapLoginBtn:function (e) {
    if (this.data.curType == 'left') {
      console.log("手机号登录:",this.data.telcode)
    }else {
      console.log("账号密码登录:",this.data.acountpwd)
    }
  },

  // 开店入口
  tapcreateshop:function (e){
    console.log("tapcreateshop")
    wx.navigateTo({
      url: '/pages/Introduce/Introduce',
    })
  },

})