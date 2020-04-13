// pages/Home/ShopList.js

var util = require('../../utils/util')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shop_briefinfo:{
      shop_id:"20200618",
      shop_name:"伟伟水业",
      shop_images:[
          "/images/home_banner.png",
          "/images/home_banner.png",
          "/images/home_banner.png",
          "/images/home_banner.png",
          "/images/home_banner.png"
        ],
      shop_adr:"深圳市南山区粤海街道大冲国际中心006",
      shop_distance:"568m",
      shop_daily_amount:"日销量:300件",
      shop_bussinesstime:"营业时间: 8:00-22:00",
      shop_average_deliver:"6min", //接单到开始配送的时间
      shop_product_varieties:[
        "怡宝",
        "农夫山泉",
        // "百岁山",
        // "屈臣氏",
        "娃哈哈"],
      shop_minprice:"13元",
      shop_maxprice:"26元",
      shop_tel:"2668899", // 固定电话
      shop_mobile:"13691658795",// 移动电话
    },

    shops:[
      {
        shop_id:"20200618",
        shop_name:"伟伟水业",
        shop_images:[
            "/images/home_banner.png",
            "/images/home_banner.png",
            "/images/home_banner.png",
            "/images/home_banner.png",
            "/images/home_banner.png"
          ],
        shop_adr:"深圳市南山区粤海街道大冲国际中心006",
        shop_distance:"568m",
        shop_daily_amount:"日销量:300件",
        shop_bussinesstime:"营业时间: 8:00-22:00",
        shop_average_deliver:"6min", //接单到开始配送的时间
        shop_product_varieties:[
          "怡宝",
          // "农夫山泉",
          // "百岁山",
          "屈臣氏",
          "娃哈哈"],
        shop_minprice:"13元",
        shop_maxprice:"26元",
        shop_tel:"2668899", // 固定电话
        shop_mobile:"13691658795",// 移动电话
      },{
        shop_id:"20200618",
        shop_name:"伟伟水业",
        shop_images:[
            "/images/home_banner.png",
            "/images/home_banner.png",
            "/images/home_banner.png",
            "/images/home_banner.png",
            "/images/home_banner.png"
          ],
        shop_adr:"深圳市南山区粤海街道大冲国际中心006",
        shop_distance:"568m",
        shop_daily_amount:"日销量:300件",
        shop_bussinesstime:"营业时间: 8:00-22:00",
        shop_average_deliver:"6min", //接单到开始配送的时间
        shop_product_varieties:[
          // "怡宝",
          // "农夫山泉",
          "百岁山",
          "屈臣氏",
          "娃哈哈"],
        shop_minprice:"13元",
        shop_maxprice:"26元",
        shop_tel:"2668899", // 固定电话
        shop_mobile:"13691658795",// 移动电话
      },{
        shop_id:"20200618",
        shop_name:"伟伟水业",
        shop_images:[
            "/images/home_banner.png",
            "/images/home_banner.png",
            "/images/home_banner.png",
            "/images/home_banner.png",
            "/images/home_banner.png"
          ],
        shop_adr:"深圳市南山区粤海街道大冲国际中心006",
        shop_distance:"568m",
        shop_daily_amount:"日销量:300件",
        shop_bussinesstime:"营业时间: 8:00-22:00",
        shop_average_deliver:"6min", //接单到开始配送的时间
        shop_product_varieties:[
          "怡宝",
          // "农夫山泉",
          // "百岁山",
          "屈臣氏",
          "娃哈哈"],
        shop_minprice:"13元",
        shop_maxprice:"26元",
        shop_tel:"2668899", // 固定电话
        shop_mobile:"13691658795",// 移动电话
      },{
        shop_id:"20200618",
        shop_name:"伟伟水业",
        shop_images:[
            "/images/home_banner.png",
            "/images/home_banner.png",
            "/images/home_banner.png",
            "/images/home_banner.png",
            "/images/home_banner.png"
          ],
        shop_adr:"深圳市南山区粤海街道大冲国际中心006",
        shop_distance:"568m",
        shop_daily_amount:"日销量:300件",
        shop_bussinesstime:"营业时间: 8:00-22:00",
        shop_average_deliver:"6min", //接单到开始配送的时间
        shop_product_varieties:[
          "怡宝",
          "农夫山泉",
          // "百岁山",
          // "屈臣氏",
          "娃哈哈"],
        shop_minprice:"13元",
        shop_maxprice:"26元",
        shop_tel:"2668899", // 固定电话
        shop_mobile:"13691658795",// 移动电话
      },{
        shop_id:"20200618",
        shop_name:"伟伟水业",
        shop_images:[
            "/images/home_banner.png",
            "/images/home_banner.png",
            "/images/home_banner.png",
            "/images/home_banner.png",
            "/images/home_banner.png"
          ],
        shop_adr:"深圳市南山区粤海街道大冲国际中心006",
        shop_distance:"568m",
        shop_daily_amount:"日销量:300件",
        shop_bussinesstime:"营业时间: 8:00-22:00",
        shop_average_deliver:"6min", //接单到开始配送的时间
        shop_product_varieties:[
          "怡宝",
          "农夫山泉",
          "百岁山",
          // "屈臣氏",
          // "娃哈哈"
        ],
        shop_minprice:"13元",
        shop_maxprice:"26元",
        shop_tel:"2668899", // 固定电话
        shop_mobile:"13691658795",// 移动电话
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
    console.log(this.data.shops.length)
    console.log(this.data.shops)
  },

  /**
   * 点击时间处理
   */
  tapItem: function(e) {

    console.log(e.currentTarget.dataset.sid)

    wx.navigateTo({
      url: '/pages/ShopDetail/ShopDetail',
      // events:{
      //   aptDataFromOpenedPage:function(data){
      //     console.log("aptDataFromOpenedPage")
      //     console.log(data)
      //   },
      // },
      success:function(res){
        res.eventChannel.emit("aptDataFromOpenedPage",{data:e.currentTarget.dataset.sid})
      }
    })
  },
  
})