// Component/CardCell/CardCell.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    innerText:{
      type:String,
      value:'i love u'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    someData:{}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    customMethod:function(e){
      console.log("customMethod:",e)
      
    }
  },

  testevent:function (e) {
    console.log("testevent:",e);
    
    this.methods.customMethod("testdata")
  },

})
