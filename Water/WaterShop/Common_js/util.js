const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


// 适配系统宽高比
function scaleAccordingScreen (size,exw){
  var rlt = {
    width:0.0,
    height:0.0
  };

  wx.getSystemInfo({
    complete: (res) => {
      var sw = res.screenWidth;
      var sh = res.screenHeight;
      console.log("screen:",sw,"exw:",exw)
      var realW = sw;
      if (exw && exw > 0){
        realW = Math.min(exw,sw);
      }

      rlt.width = realW;
      var scale = realW / size.width;
      rlt.height = size.height * scale;
    },
  })
  return rlt;
}

module.exports = {
  formatTime: formatTime,
  scaleAccordingScreen:scaleAccordingScreen,
}
