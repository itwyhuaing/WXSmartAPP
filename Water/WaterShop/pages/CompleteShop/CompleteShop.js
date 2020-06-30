// pages/CompleteShop/CompleteShop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 无图片
    btime:{title:"营业时间：",holderTxt:"点击选择",type:"businesstime"},
    atime:{title:"预约时间：",holderTxt:"点击选择",type:"apttime"},
    
    // 有图片
    shopdoor:{title:"店铺门面照片",remark:"照片需包含完整的牌匾与门槛",eximg:"",epl:"查看样例",type:"shopdoor"},
    shopinner:{title:"店铺内部照片",remark:"照片需真实反应店铺内部环境",eximg:"",epl:"查看样例",type:"shopinner"},
    shopperfront:{title:"身份证正面照",remark:"照片需真实反应店铺内部环境",eximg:"",epl:"查看样例",type:"shopperfront"},
    shopperback:{title:"身份证反面照",remark:"照片需真实反应店铺内部环境",eximg:"",epl:"查看样例",type:"shopperback"},
    shopperidf:{title:"手持身份证照片",remark:"照片需真实反应店铺内部环境",eximg:"",epl:"查看样例",type:"shopperidf"},
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

  // 设置时间
  changeTimeValue:function(e) {
    console.log("changeTimeValue:",e)
    let tp = e.currentTarget.dataset.tp
    let vtime = e.detail.value
    var tmp = {}
    if (tp == "businesstime") {
      tmp = this.data.btime
      tmp["holderTxt"] = vtime
      this.setData({
        btime:tmp
      })
    } else if (tp = "apttime"){
      tmp = this.data.atime
      tmp["holderTxt"] = vtime
      this.setData({
        atime:tmp
      })
    }
  },


  chooseImage:function(e) {
    var tmp = ""
    wx.chooseImage({

      success(res){
        tmp = res.tempFilePaths[0]
      },

      complete: (res) => {
        if (tmp.length > 0){
          let t = e.currentTarget.dataset.tp
        var info = {}
        if (t == "shopdoor") {
          info = this.data.shopdoor
          info["eximg"] = tmp;
          this.setData({
            shopdoor:info
          })
        }else if (t == "shopinner"){
          info = this.data.shopinner
          info["eximg"] = tmp;
          this.setData({
            shopinner:info
          })
        }else if (t == "shopperfront"){
          info = this.data.shopperfront
          info["eximg"] = tmp;
          this.setData({
            shopperfront:info
          })
        }else if (t == "shopperback"){
          info = this.data.shopperback
          info["eximg"] = tmp;
          this.setData({
            shopperback:info
          })
        }else if (t == "shopperidf"){
          info = this.data.shopperidf
          info["eximg"] = tmp;
          this.setData({
            shopperidf:info
          })
        }
        
        console.log("chooseImage:",t,"   info:",info,"测试结果：",tmp.indexOf('wxfile')>=0)
        }
      },
    })

  },

  lookexample:function(e) {
    let t = e.currentTarget.dataset.tp
    if (t == "shopdoor") {
      
    }else if (t == "shopinner"){

    }else if (t == "shopperfront"){

    }else if (t == "shopperback"){

    }else if (t == "shopperidf"){

    }
    console.log("lookexample:",t)
    wx.navigateTo({
      url: '/pages/VtfExample/VtfExample',
    })
  },

  // 信息确认，提交网络
  confirmToSubmitInfo:function(e){

    wx.showLoading({
      title: '正在提交...',
      mask:true
    })
    setTimeout(function(){
      wx.hideLoading({
        success: (res) => {
          wx.navigateBack({
            delta: 0,
          })
        },
      })
    },2000)
  },

})