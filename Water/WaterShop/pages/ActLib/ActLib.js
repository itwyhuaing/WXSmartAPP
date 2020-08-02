// pages/ActLib/ActLib.js

var choosedacts = []

Page({

  /**
   * 页面的初始数据
   */
  data: {
    acts:[
      {actid:"100001",name:"购买优惠1",detail:"单次购满22桶可免租金使用饮水机一台66",status:0},
      {actid:"100002",name:"购买优惠2",detail:"单次订购多于桶可免租金使用饮水机一台",status:0},
      {actid:"100003",name:"购买优惠3",detail:"单次订购多于桶可免租金使用饮水机一台",status:0},
      {actid:"100004",name:"购买优惠4",detail:"单次订购多于桶可免租金使用饮水机一台",status:0},
      {actid:"100005",name:"购买优惠5",detail:"单次订购多于桶可免租金使用饮水机一台",status:0},
    ],
    customactcontent:""
  },


  choseact:function (e) {
    let v = e.currentTarget.dataset.actid
    var info = this.data.acts
    for (var cou = 0;cou < info.length;cou ++) {
      var act = info[cou]
      if (act["actid"] == v) {
        var tmp = act["status"] == 1 ? 0 : 1
        if(tmp == 0){ // 取消操作
          let idx = choosedacts.indexOf(act)
          choosedacts.splice(idx,1)
        }else{ // 添加操作
          choosedacts.push(act)
        }
        act["status"] = tmp
      }
    }
    this.setData({
      acts:info
    })

    console.log("已选中活动个数：",choosedacts.length,"已选中活动：",choosedacts)
  },

  addActContentConfirm:function(e) {
    let content = e.detail.value
    this.setData({
      customactcontent:content
    })
  },

  addActConfirm:function(e) {
    let detail = this.data.customactcontent
    let maxid  = this.data.acts.length
    var f = {name:"购买优惠",detail:"购买优惠",status:1}
    f["actid"] = maxid + 10
    var n_acts = this.data.acts
    if(detail.length > 0){
      f["detail"] = detail
      n_acts.push(f)
      this.setData({
        acts:n_acts,
        customactcontent:""
      })
    }

    // 添加进选中结果数组
    choosedacts.push(f)

  },

  tapnextoperate:function (e) {
    // 1. 整理选中的活动
    // var rltData = []
    // var info = this.data.acts
    // for (var cou =0;cou < info.length;cou ++){
    //   let f = info[cou]
    //   if (f["status"] == 1) {
    //     rltData.push(f)
    //   }
    // }

    // 2. 数据回传
    //console.log(" --- tapnextoperate 000 --- ")
    const etc = this.getOpenerEventChannel()
    etc.emit("addActs",{para:choosedacts})
    //console.log(" --- tapnextoperate 111 --- ")
    
    // 3. 返回产品库
    wx.navigateBack({
      complete: (res) => {
        //console.log(" --- navigateBack complete --- ")
      },

    })
  },

})