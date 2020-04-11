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

function scaleAccordingScreen (size){
  var rlt = {
    w:0.0,
    h:0.0
  };

  wx.getSystemInfo({
    complete: (res) => {
      var sw = res.screenWidth;
      var sh = res.screenHeight;

      var scale = sw / size.width;
      rlt.w = sw;
      rlt.h = size.height * scale;
    },
  })
  return rlt;
}

module.exports = {
  formatTime: formatTime,
  scaleAccordingScreen:scaleAccordingScreen
}
