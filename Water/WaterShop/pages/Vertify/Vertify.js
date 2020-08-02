var api   = require('../../Common_js/api')
var toast = require('../../Common_js/toast')

// 上传店铺信息参数组装
var recordedinfo_para = {};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 无图片
    name:{title:"店铺名称：",holderTxt:"请输入",type:"name"},
    address:{title:"选择地址：",holderTxt:"点击选择",type:"address"},
    detail_address:{title:"门牌号：",holderTxt:"请输入",type:"detail_address"},
    mobies:{title:"订购电话：",holderTxt:"请输入",type:"mobies"},
    tels:{title:"商家电话：",holderTxt:"请输入",type:"tels"},
    
    // 有图片
    shoplicense:{title:"营业执照",remark:"照片信息需清晰完整",eximg:"",epl:"查看样例",type:"shoplicense"},
    shoppermit:{title:"许可证",remark:"照片信息需清晰完整",eximg:"",epl:"查看样例",type:"shoppermit"},

  },

  valueforinput:function (e){
    let t = e.currentTarget.dataset.type
    let v = e.detail.value
    if(t == "name") {
      recordedinfo_para["name"] = v
    }else if (t == "detail_address"){
      recordedinfo_para["detail_address"] = v
    }else if (t == "mobies"){
      recordedinfo_para["mobies"] = v
    }else if (t == "tels"){
      recordedinfo_para["tels"] = v
    }
    console.log(t+","+v,"recordedinfo_para :",recordedinfo_para)
  },

  chooseAdr:function (e){
    wx.chooseLocation({
      complete: (res) => {
        var tmp = this.data.address
        tmp["holderTxt"] = res.address
        // 记录结果
        recordedinfo_para["address"] = res.address
        // 更新显示
        this.setData({
          address:tmp,
        })

      },
    })

  },

  chooseTheImage:function(e) {
    let t = e.currentTarget.dataset.tp
    var localPath = ""
    wx.chooseImage({
      success(res){
        localPath = res.tempFilePaths[0]
        // 网络图片上传
        wx.uploadFile({
          filePath: localPath,
          name: 'name',
          url: api.URL.uploadiage,
          success(res){
            if (t == "shoplicense"){
              console.log("营业执照图片上传：",res)
              recordedinfo_para["shoplicense"] = "https://www.ifreewater.com/shoplicense"
            }else if (t == "shoppermit"){
              console.log("许可证图片上传：",res)
              recordedinfo_para["shoppermit"] = "https://www.ifreewater.com/shoppermit"
            }
          },fail(res){
            console.log("图片上传-fail：",res)
          },complete(res) {
            
          }
        })

      },complete: (res) => {
        if (localPath.length > 0){
          var info = {}
          if (t == "shoplicense"){
            info = this.data.shoplicense
            info["eximg"] = localPath;
            this.setData({
              shoplicense:info
            })
          }else if (t == "shoppermit"){
            info = this.data.shoppermit
            info["eximg"] = localPath;
            this.setData({
              shoppermit:info
          })
        }
        
        console.log("chooseImage:",t,"   info:",info,"测试结果：",localPath.indexOf('wxfile')>=0)

        }
      },
    })

  },

  lookexample:function(e) {
    let t = e.currentTarget.dataset.tp
    if (t == "shoplicense"){

    }else if (t == "shoppermit"){

    }
    console.log("lookexample:",t)
    wx.navigateTo({
      url: '/pages/VtfExample/VtfExample',
    })
  },

  tapnextoperate:function (e){

    // 网络请求
    console.log(" 发起网络请求 :",recordedinfo_para)
    toast.showLoading()
    wx.request({
      method:"POST",
      url: api.URL.addshop,
      data:recordedinfo_para,
      fail(res){
        console.log(" fail :",res)
      },
      success(res){
        console.log(" success :",res)
      },
      complete(res){
        toast.hideLoading()
        var appInstance = getApp()
        appInstance.globalData.userInfo = api.Parser.personalinfo(res.data.data)
        wx.navigateTo({
          url: '/pages/ProductLib/ProductLib',
        })
        console.log(" complete - res:",res,"appInstance.userInfo :",appInstance.globalData.userInfo)
      }
    })

  },

})