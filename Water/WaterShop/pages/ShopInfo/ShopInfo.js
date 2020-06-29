// pages/ShopInfo/ShopInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 店铺 - 产品 
    currentType:"p",

    // 店铺信息:必须（商家名称、地址、电话、资质-营业执照与许可证），可完善（营业时间、可预约配送时间、经营者身份证）
    shopname:{them:"商家名称",des:"海那边科技"},
    shopadr:{them:"商家地址",des:"深圳市南山区粤海街道大冲国际中心3201"},
    shoptel:{them:"商家电话",des:"13691658693"},
    shoptel:{them:"订购电话",des:"13691658693"},
    //shoptime:{them:"营业时间",des:"08:30-21:00"},
    //shopapttime:{them:"可预约时间",des:"08:30-20:00"},
    
    shopbrieftextinfo:[
      {them:"商家名称",des:"海那边科技"},
      {them:"商家地址",des:"深圳市南山区粤海街道大冲国际中心3201"},
      {them:"商家电话",des:"13691658693"},
      {them:"订购电话",des:"13691658693"},
      //{them:"营业时间",des:"08:30-21:00"},
      //{them:"可预约时间",des:"08:30-20:00"},
    ],
    shopbriefidfinfo:[
      {them:"商家资质",img:["/images/58_58.png","/images/58_58.png"]}
      //{them:"店家身份验证",img:["/images/58_58.png","/images/58_58.png"]}
    ],

    // 产品信息
    products:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 店铺产品
    let product1 = {
      pid:"26688",
      pname:"农夫山泉桶装水 a",
      pimage:"/images/home_banner.png",
      pvolume:"19L/桶",
      pprice:1,
      pact:"一次性购买10桶可免租金租用饮水机一台",
    }
    let product2 = {
      pid:"26689",
      pname:"农夫山泉桶装水 b",
      pimage:"/images/home_banner.png",
      pvolume:"19L/桶",
      pprice:1,
      pact:"一次性购买10桶可免租金租用饮水机一台",
    }
    let product3 = {
      pid:"26610",
      pname:"农夫山泉桶装水 c",
      pimage:"/images/home_banner.png",
      pvolume:"19L/桶",
      pprice:1,
      pact:"一次性购买10桶可免租金租用饮水机一台",
    }
    let product4 = {
      pid:"26611",
      pname:"农夫山泉桶装水 d",
      pimage:"/images/home_banner.png",
      pvolume:"19L/桶",
      pprice:1,
      pact:"一次性购买10桶可免租金租用饮水机一台",
    }
    let product5 = {
      pid:"26612",
      pname:"农夫山泉桶装水 e",
      pimage:"/images/home_banner.png",
      pvolume:"19L/桶",
      pprice:1,
      pact:"一次性购买10桶可免租金租用饮水机一台",
    }
    let product6 = {
      pid:"26613",
      pname:"农夫山泉桶装水 f",
      pimage:"/images/home_banner.png",
      pvolume:"19L/桶",
      pprice:1,
      pact:"一次性购买10桶可免租金租用饮水机一台",
    }
    var ps = [product1,product2,product3,
              product4,product5,product6,
              ]

    this.setData({
      products:ps
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

  // 切换- switch 产品/店铺
  tapshop:function (e) {
    let v = e.currentTarget.dataset.value
    this.setData({
      currentType:v
    })
  },

  tapproduct:function (e) {
    let v = e.currentTarget.dataset.value
    this.setData({
      currentType:v
    })
  },

  // 完善店铺信息
  completeshopinfo:function (e) {
    wx.navigateTo({
      url: '/pages/CompleteShop/CompleteShop',
      events:{
        aptdatafrombackedpage:function(e){

        }
      }
    })
  },

  // 产品删除
  deleteproduct:function (e) {
    let value = e.currentTarget.dataset.value
    
    console.log("点击测试:",e)

    var tmp = this.data.products
    for (var cou = 0;cou < tmp.length;cou ++) {
      var f = tmp[cou]
      if (f.pid == value) {
        tmp.splice(f,1)
      }
    }
    this.setData({
      products:tmp
    })
  },

  // 新增产品
  addProduct:function (e){
    wx.navigateTo({
      url: '/pages/ProductLib/ProductLib',
    })
  },

})