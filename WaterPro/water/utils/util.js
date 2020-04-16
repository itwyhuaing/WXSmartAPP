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
function scaleAccordingScreen (size){
  var rlt = {
    width:0.0,
    height:0.0
  };

  wx.getSystemInfo({
    complete: (res) => {
      var sw = res.screenWidth;
      var sh = res.screenHeight;

      var scale = sw / size.width;
      rlt.width = sw;
      rlt.height = size.height * scale;
    },
  })
  return rlt;
}

// 获取时间戳
function timestamp(){
  var ts = Date.parse(new Date());
  ts = ts / 1000;
  return ts;
}


module.exports = {
  formatTime: formatTime,
  scaleAccordingScreen:scaleAccordingScreen,
  timestamp:timestamp
}
