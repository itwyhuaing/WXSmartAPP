// view/ShopBriefInfo.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    innerText:{
      type:String,
      value:'default value',
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    someData:1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    customMethod:function(){
      console.log('customeMethod')
    }
  }
})
