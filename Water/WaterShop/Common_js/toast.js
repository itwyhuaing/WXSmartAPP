var defaultDuration = 3000


// 成功信息提示
function showSuccess(title,duration){
  let d = defaultDuration;
  if(duration){
    d = duration;
  }
  wx.showToast({
    icon:"success",
    title: title,
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
    title: title,
    duration: d
  })
}


// 隐藏提示
function hideToast(){
  wx.hideToast();
}

// 展示 loading
function showLoading(title){
  if(title){
    wx.showToast({
      title: title,
      icon: 'loading',
      duration: 200000,
      mask:true,
    })
  }else{
    wx.showToast({
      title: "正在加载...",
      icon: 'loading',
      duration: 200000,
      mask:true,
    })
  }
}

// 隐藏 loading 
function hideLoading(){
  wx.hideToast()
}


module.exports = {
  showSuccess: showSuccess,
  showToast:showToast,
  hideToast: hideToast,
  hideLoading: hideLoading,
  showLoading: showLoading
}