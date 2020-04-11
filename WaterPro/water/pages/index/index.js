//index.js
var util = require('../../utils/util')

Page({
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
  }

})
