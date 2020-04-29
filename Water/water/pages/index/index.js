//index.js
var util = require('../../utils/util')

Page({
  data: {
    bannerSize:util.scaleAccordingScreen({
      width:750,
      height:406
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

  tapHomeMenuItem:function(){
    wx.navigateTo({
      url: '/pages/logs/logs',
    })
  },

  tapHomeBanner:function(){
    console.log("tapHomeBanner")
    console.log(this.data.bannerSize.width)
    console.log(this.data.bannerSize.height)
  },

  testFun:function(){

    let timex     = util.timestamp()
    let nonceStrx = "lhklghlghslkghlsh"
    let packagex  = "8978797"
    let paySignx  = "sdgsghdghfghf" 


    wx.requestPayment({
      timeStamp: timex,
      nonceStr: nonceStrx,
      package: packagex,
      signType: 'MD5',
      paySign: paySignx,
      success (res) {
        console.log("success:\n"+res)
       },
      fail (res) { 
        console.log("fail:\n"+res)
      }
    })

  }

})
