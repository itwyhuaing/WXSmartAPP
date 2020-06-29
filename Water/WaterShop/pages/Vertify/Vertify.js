// pages/Vertify/Vertify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 无图片
    name:{title:"店铺名称：",holderTxt:"请输入",type:"name"},
    adr1:{title:"选择地址：",holderTxt:"点击选择",type:"adr1"},
    adr2:{title:"门牌号：",holderTxt:"请输入",type:"adr2"},
    tel1:{title:"订购电话：",holderTxt:"请输入",type:"tel1"},
    tel2:{title:"商家电话：",holderTxt:"请输入",type:"tel2"},
    
    // 有图片
    shopdoor:{title:"店铺门面照片",remark:"照片需包含完整的牌匾与门槛",eximg:"",epl:"查看样例",type:"shopdoor"},
    shopinner:{title:"店铺内部照片",remark:"照片需真实反应店铺内部环境",eximg:"",epl:"查看样例",type:"shopinner"},
    // shopperfront:{title:"身份证正面照",remark:"照片需真实反应店铺内部环境",eximg:"",epl:"查看样例",type:"shopperfront"},
    // shopperback:{title:"身份证反面照",remark:"照片需真实反应店铺内部环境",eximg:"",epl:"查看样例",type:"shopperback"},
    // shopperidf:{title:"手持身份证照片",remark:"照片需真实反应店铺内部环境",eximg:"",epl:"查看样例",type:"shopperidf"},
    shoplicense:{title:"营业执照",remark:"照片需真实反应店铺内部环境",eximg:"",epl:"查看样例",type:"shoplicense"},
    shoppermit:{title:"许可证",remark:"照片需真实反应店铺内部环境",eximg:"",epl:"查看样例",type:"shoppermit"},

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


  valueforinput:function (e){
    let t = e.currentTarget.dataset.type
    let v = e.detail.value
    console.log(t+","+v)
  },

  chooseAdr:function (e){
    wx.chooseLocation({
      complete: (res) => {
        var tmp = this.data.adr1
        tmp["holderTxt"] = res.address
        this.setData({
          adr1:tmp,
        })
      },
    })

  },

  tapevent:function (e) {
    console.log(e)

    wx.chooseImage({
      count:1,
      success(res){
        //tempFilePath可以作为img标签的src属性显示图片
        var tmp = res.tempFilePaths

      },
    })

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
        }else if (t == "shoplicense"){
          info = this.data.shoplicense
          info["eximg"] = tmp;
          this.setData({
            shoplicense:info
          })
        }else if (t == "shoppermit"){
          info = this.data.shoppermit
          info["eximg"] = tmp;
          this.setData({
            shoppermit:info
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

    }else if (t == "shoplicense"){

    }else if (t == "shoppermit"){

    }
    console.log("lookexample:",t)
    wx.navigateTo({
      url: '/pages/VtfExample/VtfExample',
    })
  },

  tapnextoperate:function (e){
    wx.navigateTo({
      url: '/pages/ProductLib/ProductLib',
    })
  },

})