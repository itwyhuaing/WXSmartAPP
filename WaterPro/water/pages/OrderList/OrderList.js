// pages/OrderList/OrderList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currenttype:"left",

    orderlists:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let order0 = {
      order_id:"668693474394374968",
      order_timestamp:"15898956",
      order_adr:"深圳市南山区粤海街道大冲国际中心3201",
      order_tel:"13691658693",
      order_status:0, // 0 - 未完成 ，10 - 配货中 ，11 - 运送中，12 - 已完成
      order_remark:"即将外出，请半个小时内送达",
      order_total:"100",//订单总价
      order_invoice:{
        title:"深圳市海那边科技有限公司",
        code:"91440300MA5FGX0W9D",
        type:1, // 1-单位，0-个人 
      },
      order_usrinfo:{
        usr_id:"268086",
        usr_name:"蓝宝石",
        usr_tel:"13691658693",
        usr_adr:"深圳市宝安区西乡街道永康社区6栋88号",
        usr_type:"customer", // 消费者
      },
      order_shop:{
        shop_id:"3456789",
        shop_name:"深圳市腾讯科技",
        products:[
          {
            p_id:"23456789098765",
            p_type:"pa", // 桶装水
            p_name:"怡宝纯净水",
            p_volume:"19L/桶",
            p_amount:"日销量22桶",
            p_price:22,
            p_image:"/images/home_banner.png",
            p_discounts:"首次一次性预定10桶免租金租用净水器一台",
            p_ordercount:1, // 进入该页面之后用户选择了几次该产品
          },
          {
            p_id:"23456789098765",
            p_type:"pb", // 瓶装水
            p_name:"怡宝纯净水",
            p_volume:"19L/桶",
            p_amount:"日销量22桶",
            p_price:22,
            p_image:"/images/home_banner.png",
            p_discounts:"首次一次性预定10桶免租金租用净水器一台",
            p_ordercount:3, // 进入该页面之后用户选择了几次该产品
          },
        ],
      },
    }

    let order1 = {
      order_id:"668693474394374968",
      order_timestamp:"15898956",
      order_adr:"深圳市南山区粤海街道大冲国际中心3201",
      order_tel:"13691658693",
      order_status:10, // 0 - 未完成 ，10 - 配货中 ，11 - 运送中，12 - 已完成
      order_remark:"即将外出，请半个小时内送达",
      order_total:"200",//订单总价
      order_invoice:{
        title:"深圳市海那边科技有限公司",
        code:"91440300MA5FGX0W9D",
        type:1, // 1-单位，0-个人 
      },
      order_usrinfo:{
        usr_id:"268086",
        usr_name:"蓝宝石",
        usr_tel:"13691658693",
        usr_adr:"深圳市宝安区西乡街道永康社区6栋88号",
        usr_type:"customer", // 消费者
      },
      order_shop:{
        shop_id:"3456789",
        shop_name:"深圳市腾讯科技",
        products:[
          {
            p_id:"23456789098765",
            p_type:"pa", // 桶装水
            p_name:"怡宝纯净水",
            p_volume:"19L/桶",
            p_amount:"日销量22桶",
            p_price:22,
            p_image:"/images/home_banner.png",
            p_discounts:"首次一次性预定10桶免租金租用净水器一台",
            p_ordercount:1, // 进入该页面之后用户选择了几次该产品
          },
          {
            p_id:"23456789098765",
            p_type:"pb", // 瓶装水
            p_name:"怡宝纯净水",
            p_volume:"19L/桶",
            p_amount:"日销量22桶",
            p_price:22,
            p_image:"/images/home_banner.png",
            p_discounts:"首次一次性预定10桶免租金租用净水器一台",
            p_ordercount:3, // 进入该页面之后用户选择了几次该产品
          },
        ],
      },
    }

    var list = [order0,order1,order1,order0,order1,order1,order0,order1]
    this.setData({
      orderlists:list
    })

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

  // 切换至左侧
  switchtoleft:function (e) {
    this.setData({
      currenttype:"left"
    })
  },

  // 切换至右侧
  switchtoright:function (e) {
    this.setData({
      currenttype:"right",
    })
  },



})