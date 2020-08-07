var api   = require('../../Common_js/api')
var toast = require('../../Common_js/toast')

// 完善店铺信息参数组装
var recordedinfo_para = {};
var businesstime = ""
var apttime = ""

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 无图片
    btime:{title:"营业开始时间：",holderTxt:"点击选择",type:"businesstime"},
    btime_end:{title:"营业结束时间：",holderTxt:"点击选择",type:"businesstime_end"},
    atime:{title:"预约开始时间：",holderTxt:"点击选择",type:"apttime"},
    atime_end:{title:"预约结束时间：",holderTxt:"点击选择",type:"apttime_end"},
    
    // 有图片
    shopdoor:{title:"店铺门面照片",remark:"照片需包含完整的牌匾与门槛。",eximg:"",epl:"查看样例",type:"shopdoor"},
    shopinner:{title:"店铺内部照片",remark:"照片需真实反应店铺内部环境。",eximg:"",epl:"查看样例",type:"shopinner"},
    shopperfront:{title:"身份证正面照",remark:"照片信息需清晰完整。",eximg:"",epl:"查看样例",type:"shopperfront"},
    shopperback:{title:"身份证反面照",remark:"照片信息需清晰完整。",eximg:"",epl:"查看样例",type:"shopperback"},
    shopperidf:{title:"手持身份证照片",remark:"本人手持身份证拍摄，正面五官及身份证信息清晰完整。",eximg:"",epl:"查看样例",type:"shopperidf"},
  },

  // 设置时间
  changeTimeValue:function(e) {
    console.log("changeTimeValue:",e)
    let tp = e.currentTarget.dataset.tp
    let vtime = e.detail.value
    var tmp = {}
    if (tp == "businesstime") {
      // 显示
      tmp = this.data.btime
      tmp["holderTxt"] = vtime
      this.setData({
        btime:tmp
      })

      // 字符串拼接
      if(businesstime.length > 0){
        let end = businesstime
        businesstime = vtime +" — "+ end
      }else {
        businesstime = vtime
      }



    } else if (tp == "businesstime_end") {
      tmp = this.data.btime_end
      tmp["holderTxt"] = vtime
      this.setData({
        btime_end:tmp
      })

      if(businesstime.length > 0){
        let start = businesstime
        businesstime = start +" — "+ vtime
      }else {
        businesstime = vtime
      }

    } else if (tp = "apttime"){
      // 显示
      tmp = this.data.atime
      tmp["holderTxt"] = vtime
      this.setData({
        atime:tmp
      })

      // 字符串拼接
      if(apttime.length > 0){
        let end = apttime
        apttime = vtime +"-"+ end
      }else {
        apttime = vtime
      }

    }else if (tp = "apttime_end"){
      tmp = this.data.atime_end
      tmp["holderTxt"] = vtime
      this.setData({
        atime_end:tmp
      })

      if(apttime.length > 0){
        let start = apttime
        apttime = start +"-"+ vtime
      }else {
        apttime = vtime
      }

    }

    recordedinfo_para["businesstime"]      = businesstime
    recordedinfo_para["apttime"]           = apttime
  },


  chooseImage:function(e) {
    var localPath = ""
    let t = e.currentTarget.dataset.tp
    wx.chooseImage({

      success(res){
        localPath = res.tempFilePaths[0]
        // 网络图片上传
        wx.uploadFile({
          filePath: localPath,
          method:"POST",
          name: 'name',
          url: api.URL.uploadiage,
          success(res){
            if (t == "shopdoor"){
              console.log("店铺门脸图片上传：",res)
              recordedinfo_para["shopdoor"] = "https://www.ifreewater.com/shopdoor"
            }else if (t == "shopinner"){
              console.log("店铺内景图片上传：",res)
              recordedinfo_para["shopinner"] = "https://www.ifreewater.com/shopinner"
            }else if (t == "shopperfront"){
              console.log("身份证正面图片上传：",res)
              recordedinfo_para["shopperfront"] = "https://www.ifreewater.com/shopperfront"
            }else if (t == "shopperback"){
              console.log("身份证反面图片上传：",res)
              recordedinfo_para["shopperback"] = "https://www.ifreewater.com/shopperback"
            }else if (t == "shopperidf"){
              console.log("手持身份证图片上传：",res)
              recordedinfo_para["shopperidf"] = "https://www.ifreewater.com/shopperidf"
            }
          },fail(res){
            console.log("图片上传-fail：",res)
          },complete(res) {
            
          }
        })

      },

      complete: (res) => {
        if (localPath.length > 0){
          var info = {}
          if (t == "shopdoor") {
            info = this.data.shopdoor
            info["eximg"] = localPath;
            this.setData({
              shopdoor:info
            })
          }else if (t == "shopinner"){
            info = this.data.shopinner
            info["eximg"] = localPath;
            this.setData({
              shopinner:info
            })
          }else if (t == "shopperfront"){
            info = this.data.shopperfront
            info["eximg"] = localPath;
            this.setData({
              shopperfront:info
            })
          }else if (t == "shopperback"){
            info = this.data.shopperback
            info["eximg"] = localPath;
            this.setData({
              shopperback:info
            })
          }else if (t == "shopperidf"){
            info = this.data.shopperidf
            info["eximg"] = localPath;
            this.setData({
              shopperidf:info
            })
          }
          
          console.log("chooseImage:",t,"   info:",info,"测试结果：",localPath.indexOf('wxfile')>=0)
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
    console.log(" 发起网络请求 - 0 ")
    var appInstance = getApp()
    let turl = api.URL.addshop + "/" + appInstance.globalData.userInfo["id"]
    console.log(" 发起网络请求 :",recordedinfo_para,"网络请求:",turl)
    toast.showLoading()
    wx.request({
      method:"PUT",
      url: turl,
      data:recordedinfo_para,
      fail(res){
        console.log(" fail :",res)
      },
      success(res){
        console.log(" success :",res.data.data)
      },
      complete(res){
        toast.hideLoading()
        appInstance.globalData.userInfo = api.Parser.personalinfo(res.data.data)
        console.log(" complete - app.globalData.userInfo :",app.globalData.userInfo)
        wx.navigateBack()
      }
    })


  },

})