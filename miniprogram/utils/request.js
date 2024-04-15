
function requestPro(method, url, data){
  let userInfoSy = wx.getStorageSync('userInfo');
  let openid;
  if (userInfoSy){
    openid = userInfoSy.openid;
  } else {
    openid = "";
  }
let promise = new Promise((resolve, reject) => {
    //网络请求
    wx.request({
      url,
      data: data?data:{},
      method,
      header: {
        openid,
      },
      dataType: 'json',
      success: function (res) {//服务器返回数据
        //res.data 为 后台返回数据，格式为{"data":{...}, "info":"成功", "status":true}, 
        //后台规定：如果status为true,既是正确结果。可以根据自己业务逻辑来设定判断条件
        if (res.statusCode == 200 && res.data.status) {
          resolve(res.data);
        } else if (res.statusCode == 500) {
          wx.hideToast();
          wx.showToast({
            title: "服务器内部错误，请稍后重试",
            icon:"none",
            mask: true,
            duration: 2000,
          })
        } else {//返回错误提示信息
          console.log(res)
          wx.hideToast();
          wx.showToast({
            title: res.data.info,
            icon:"none",
            mask: true,
            duration: 2000,
          })
          reject( res.data.info );
        }
      },
      fail: function (e) {
          reject('网络请求失败：',e);
      },
    })
});
return promise;
}


function requestGet(url, data){
console.log(url,data);
return requestPro("GET", url, data);
}

function requestPost(url, data){
console.log(url,data);
return requestPro("POST", url, data);
}

module.exports = {
requestGet,
requestPost,
}