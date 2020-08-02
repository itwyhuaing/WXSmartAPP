var URL = {}
URL.vtfcode     = "https://www.ifreewater.com/users/vcode"
URL.vtflogin    = "https://www.movead.xyz/user/login"
URL.uploadiage  = "https://www.ifreewater.com/uploads/image"
URL.addshop     = "https://www.ifreewater.com/shops"
URL.addproduct  = "https://www.ifreewater.com/products"

/* ---------------------------------------------------- */
var Parser = {}
Parser.personalinfo = function(info) {
  var rlt = {}
  rlt["id"] = info["id"]
  rlt["name"] = info["name"]
  rlt["address"] = info["address"]
  rlt["detail_address"] = info["detail_address"]
  rlt["mobiles"] = info["mobies"]
  rlt["tels"] = info["tels"]
  return rlt
}



var API = {
  URL:URL,
  Parser:Parser,
}

module.exports = API