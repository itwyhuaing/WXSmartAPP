var api   = require('../../Common_js/api')
var toast = require('../../Common_js/toast')

var appInstance = getApp()
var telCode = {} // 记录输入的手机号与验证码
var totalTimeCount = 0 // 倒计时

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tel_login:{
      acountHolder:"请输入手机号",
        codeHolder:"请输入验证码",
        codeThem:"获取验证码",
        currentType:"1"
      },
  },
  
    /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },
  // 捕获输入内容
  blurAcountInput:function (e){
    //console.log(e)
    let v = e.detail.value
    telCode["tel"] = v
  },

  blurCodeInput:function (e) {
    let v = e.detail.value
    telCode["code"] = v
    console.log("验证码:",v)
  },


  // 获取验证码
  tapCodeBtn:function (e) {

    if(totalTimeCount > 0 && totalTimeCount <= 60){
      return;
    }
    var self = this
    // 发起请求
    toast.showLoading()
    console.log("请求验证码手机号：",telCode.tel)
    wx.request({
      url: api.URL.vtfcode,
      method:"POST",
      data:{
        mobile:telCode.tel
      },
      success (res) {
        console.log("获取到验证码:",res)
        toast.showSuccess("验证码已发送")
        totalTimeCount = 60
        var info = self.data.tel_login
        let timr = setInterval(function(){
          totalTimeCount --
          info.codeThem = totalTimeCount + "秒之后重试"
          info.currentType = "0"
          if(totalTimeCount > 0){
            self.setData({
              tel_login:info
            })
          }else {
            clearInterval(timr)
            info.codeThem = "获取验证码"
            info.currentType = "1"
            self.setData({
              tel_login:info
            })
          }
        },1000)
      },fail(res){
        toast.showToast("验证码获取失败")
      },complete(res) {
      }
    })

  },


  // 点击登录
  tapLoginBtn:function (e) {
    console.log("点击登录:",telCode)

    toast.showLoading()
      wx.request({
        url: api.URL.vtflogin,
        data:{
          "mobile":telCode.tel,
          "vcode":telCode.code
        },
        success(res) {
          console.log("点击登录success:",res)
          appInstance.globalData.loginstatus = "1"
          appInstance.globalData.vtfstatus = "0"
          // 登录成功之后，先验证是否已认证开店
          if (appInstance.globalData.vtfstatus == "0"){
            // 1、未开店则进入开店页
            wx.navigateTo({
              url: '/pages/Vertify/Vertify',
            })
          }else{
            // 2、 已开店铺进入订单首页
          wx.navigateBack()
          }          
        },fail (res){
          console.log("点击登录fail:",res)
        },complete(res){
          toast.hideLoading()
        }
      })
  
  },

})