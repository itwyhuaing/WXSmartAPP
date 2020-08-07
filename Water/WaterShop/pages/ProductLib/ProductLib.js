var api = require("../../Common_js/api")
var choosedpdts = []

Page({

  /**
   * 页面的初始数据
   */
  data: {
    libs:[
          {
            value:"p_y",status:0,name:"怡宝桶装水1",pimage:"/images/58_58.png",price:"",acts:[
              {actid:"100001",name:"购买优惠1",detail:"单次购满22桶可免租金使用饮水机一台66",status:0},
              {actid:"100002",name:"购买优惠2",detail:"单次订购多于桶可免租金使用饮水机一台",status:0},
            ]
          },
          {
            value:"p_b",status:0,name:"怡宝桶装水2",pimage:"/images/58_58.png",price:"",acts:[]
          },
          {
            value:"p_n",status:0,name:"怡宝桶装水3",pimage:"/images/58_58.png",price:"",acts:[]
          },
          {
            value:"p_w",status:0,name:"怡宝桶装水4",pimage:"/images/58_58.png",price:"",acts:[]
          },
          {
            value:"p_h",status:0,name:"怡宝桶装水5",pimage:"/images/58_58.png",price:"",acts:[]
          },
          {
            value:"p_k",status:0,name:"怡宝桶装水6",pimage:"/images/58_58.png",price:"",acts:[]
          },
          ],

    // 输入的内容
    inputproname:""

  },

  handleDatasource:function(f) {
    /**
     * xml 文件布局产品，其中使用到模版的方式；点击“添加活动”事件中需绑定产品 item 在产品库 libs 中的位置
    */
   var tmp_libs = this.data.libs
   if(f){
    tmp_libs.push(f)
   }
   tmp_libs.map(function(f){
     let idx = tmp_libs.indexOf(f)
     f["location"] = idx
   })

   // 需要更新 UI 层显示的数据
   this.setData({
    libs:tmp_libs,
   })

   console.log("处理之后的产品库数据:",tmp_libs)
  },

  // 页面展示
  onShow: function () {
    this.handleDatasource()
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

  printmethod:function(e){
    console.log("点击测试")
  },

  tapForAddActEvent:function (e){
    
    let that = this
    let location = e.currentTarget.dataset.idx
    var productlibs  = that.data.libs
    var product = productlibs[location]
    console.log("addActs - a :",product)

    wx.navigateTo({
      url: '/pages/ActLib/ActLib',
      
      events:{
        addActs:function(data){
          
          console.log("addActs - x :",data.para)
          console.log("addActs - y :",product.acts)
          if(data.para.length > 0){
            var all_acts = data.para
            if(product.acts.length > 0){
              product.map(function(f){
                all_acts.push(f)
              })
            }
            product.acts = all_acts
            console.log("最新数据：",productlibs)
            that.setData({
              libs:productlibs
            })
          }
          return;
// ====================                                 
          productlibs.splice(location,1)
          console.log("addActs - 1 :",productlibs)
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
// ====================

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
      this.handleDatasource(f)
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
    wx.request({
      url: api.URL.api_operateproduct,
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