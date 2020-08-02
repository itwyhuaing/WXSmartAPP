var api = require("../../Common_js/api")
var choosedpdts = []

Page({

  /**
   * 页面的初始数据
   */
  data: {
    libs:[
          {value:"p_y",status:0,name:"怡宝桶装水1",pimage:"/images/58_58.png",price:"",acts:["月底前一次性购满100送一同"]},
          {value:"p_b",status:0,name:"怡宝桶装水2",pimage:"/images/58_58.png",price:"",acts:[]},
          {value:"p_n",status:0,name:"怡宝桶装水3",pimage:"/images/58_58.png",price:"",acts:[]},
          {value:"p_w",status:0,name:"怡宝桶装水4",pimage:"/images/58_58.png",price:"",acts:[]},
          {value:"p_h",status:0,name:"怡宝桶装水5",pimage:"/images/58_58.png",price:"",acts:[]},
          {value:"p_k",status:0,name:"怡宝桶装水6",pimage:"/images/58_58.png",price:"",acts:[]},
          ],

    // 输入的内容
    inputproname:""

  },

  // 交互事件
  choseproduct:function (e) {

    // 解析数据
    let v = e.currentTarget.dataset.value
    var info = this.data.libs
    for(var cou = 0;cou < info.length;cou ++) {
      var product = info[cou];
      if (product["value"] == v) {
        var tmp = product["status"] == 0 ? 1 : 0
        if (tmp == 0){ // 取消操作
          console.log("取消操作")
          let idx = choosedpdts.indexOf(product)
          choosedpdts.splice(idx,1)
        }else { // 添加操作
          console.log("添加操作")
          choosedpdts.push(product)
          //console.log("元素位置：",choosedpdts.indexOf(product))
        }
        product["status"] = tmp
      }
    }
    // 更新显示
    this.setData ({
      libs:info
    })

    // 整合选中结果
    console.log("已选中产品个数：",choosedpdts.length,"已选中产品：",choosedpdts)

  },

  tapForAddActEvent:function (e){
    
    let that = this
    let location = e.currentTarget.dataset.idx
    var productlibs  = that.data.libs
    var product = productlibs[location]
    
    wx.navigateTo({
      url: '/pages/ActLib/ActLib',
      
      events:{
        addActs:function(data){
          console.log("productlibs - 0 :",productlibs)
          productlibs.splice(location,1)
          console.log("productlibs - 1 :",productlibs)
          if (data.para.length > 0) {
            var tmp_acts = []
            for(var cou = 0;cou < data.para.length;cou ++){
              var f = data.para[cou]
              tmp_acts.push(f.detail)
            }
            product.acts = tmp_acts
          }
          productlibs.splice(location,0,product)
          console.log("productlibs - 1 :",productlibs,"data.para :",product.detail)
          that.setData({
            libs:productlibs
          })
        }
      }

    })

  },

  // 新增产品名称
  inputProductNameConfirm:function(e){
    let name = e.detail.value
    this.setData({
      inputproname:name
    })
  },

  addProductConfirm:function (e){
    let name = this.data.inputproname
    //console.log("输入测试：",name,"数据源：",this.data.inputproname)
    if(name.length > 0){
      var f = {value:"p_k",status:1,pimage:"/images/58_58.png",price:"",acts:[]}
      f["name"] = name
      var n_libs = this.data.libs
      n_libs.push(f)
      this.setData({
        libs:n_libs,
        inputproname:""
      })

      // 新增进选中结果
      choosedpdts.push(f)

    }
  },

  tapnextoperate:function (e) {
    console.log("tapnextoperate - 选中产品个数:",choosedpdts.length,"具体产品:",choosedpdts);
    // 1. 整理出选中的产品信息
    // var rlt = []
    // for (var cou = 0; cou < this.data.libs.length; cou ++){
    //   var dic = this.data.libs[cou]
    //   if (dic["status"] == 1) {
    //     rlt.push(dic)
    //   }
    // }
    wx.request({
      url: api.URL.addproduct,
      method:"POST",
      data:choosedpdts,
      success(res){

      },fail(res){

      },complete(res){

      }
    })


    // 2. 跳转到我的
    wx.switchTab({
      url: '/pages/Home/OrderList',
    })
    
  },

})