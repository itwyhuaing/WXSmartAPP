var URL = {}
URL.vtfcode           = "https://www.ifreewater.com/users/vcode"
URL.vtflogin          = "https://www.movead.xyz/user/login"
URL.uploadiage        = "https://www.ifreewater.com/uploads/image"
URL.addshop           = "https://www.ifreewater.com/shops"
// URL.completeshop      = "https://www.ifreewater.com/shops"
URL.addproduct        = "https://www.ifreewater.com/products"

/* ---------------------------------------------------- */
var Parser = {}

Parser.personalinfo = function(info) {
  var rlt = {}
  rlt["id"]                     = info["id"]
  rlt["name"]                   = info["name"]
  rlt["tels"]                   = info["tels"]
  rlt["mobies"]                = info["mobies"]
  rlt["cover"]                  = info["cover"]
  rlt["images"]                 = info["images"]
  rlt["business_images"]        = info["business_images"]
  rlt["permit_images"]          = info["permit_images"]
  rlt["id_card_images"]         = info["id_card_images"] // 身份证
  rlt["address"]                = info["address"]
  rlt["detail_address"]         = info["detail_address"]
  rlt["latitude"]               = info["latitude"]
  rlt["longitude"]              = info["longitude"]
  rlt["invoice_status"]         = info["invoice_status"] // 是否可开发票

  // rlt["business_starttime"]     = info["business_starttime"]
  // rlt["business_endtime"]       = info["business_endtime"]
  // rlt["delivery_starttime"]     = info["delivery_starttime"]
  // rlt["delivery_endtime"]       = info["delivery_endtime"]
  return rlt
}


var API = {
  URL:URL,
  Parser:Parser,
}

module.exports = API