var defaultDuration = 2000


// 成功信息提示
function showSuccess(title,duration){
  let ti = "成功";
  let d = defaultDuration;
  if(title){
    ti = title;
  }
  if(duration){
    d = duration;
  }
  wx.showToast({
    icon:"success",
    title: ti,
    duration: d
  })
}

// 暂不可用
function showFail(title,duration){
  let ti = "操作失败";
  let d = defaultDuration;
  if(title){
    ti = title;
  }
  if(duration){
    d = duration;
  }
  wx.showToast({
    image:"/images/toast_notice.png",
    title: ti,
    duration: d
  })
}

// 信息提示
function showToast(title, duration) {
  let d = defaultDuration;
  if (duration) {
    d = duration;
  }
  wx.showToast({
    icon:"none",
    title: title,
    duration: d
  })
}


// 展示 loading
function showLoading(title){
  let ti = "正在加载..."
  if(title){
    ti = title
  }
  wx.showToast({
    title: ti,
    icon: 'loading',
    duration: 200000,
    mask:true,
  })
}


// 隐藏提示
function hideToast(){
  wx.hideToast();
}


// 隐藏 loading 
function hideLoading(){
  wx.hideToast()
}


module.exports = {
  showSuccess: showSuccess,
  showFail:showFail,
  showToast:showToast,
  hideToast: hideToast,
  hideLoading: hideLoading,
  showLoading: showLoading
}