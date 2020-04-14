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
    // 测试系统尺寸
    wx.getSystemInfo({
      complete: (res) => {
        console.log(res.screenWidth)
        console.log(res.screenHeight)
      },
    })

    // 测试地图功能
    wx.chooseLocation({
      success:(res) => {},
      fail:(res) => {},
      complete: (res) => {
        console.log(res)

        wx.openLocation({
          latitude: res.latitude,
          longitude: res.longitude,
          scale:20
        })

      },
    })

  }

})
