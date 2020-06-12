// Component/CardCell/CardCell.js
Component({

  /**
   * 组件的生命周期
   */
  lifetimes:{
    created:function (){console.log("lifetimes-created");},

    attached:function () {console.log("lifetimes-attached");},

    ready:function (){console.log("lifetimes-ready");},

    moved:function(){console.log("lifetimes-moved");},

    detached:function () {console.log("lifetimes-detached");},

    error:function(){console.log("lifetimes-error");},
  },

  /**
   * 组件所在页面的生命周期
   */
  pageLifetimes:{
    show:function(){console.log("pageLifetimes-show");
    },
    hide:function(){console.log("pageLifetimes-hide");
    },
    resize:function(){console.log("pageLifetimes-resize");
    },
  },

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
  
    onTap: function(){
      var myEventDetail = {detail:"detail"} // detail对象，提供给事件监听函数
      var myEventOption = {option:"option"} // 触发事件的选项
      this.triggerEvent('clickevent', myEventDetail, myEventOption)
    }

  },



})
