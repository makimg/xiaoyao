const { envList } = require("./envList");
const { showToast, hideToast } = require("./utils");
const db = wx.cloud.database();
function cloudUpLoadFile(cloudName) {
  wx.cloud[cloudName]({
    cloudPath: 'example.png', // 上传至云端的路径
    filePath: '', // 小程序临时文件路径
    success: res => {
      // 返回文件 ID
      console.log(res.fileID)
    },
    fail: console.error
  })
}

// 云数据库获取数据
function cloudDatabase(collectionName, whereData, callBack) {
  const dbF = wx.cloud.database();
  dbF.collection(collectionName).where(whereData).get({
    success: function (res) {
      console.log(res)
    }
  })
}

//云函数调用
let cloudFunction = async (data,callback)=>{
  if(data.showToast) showToast("小默：努力搬砖中~", "none");
  let {envId} = envList[0];
  let wxCloudObj = {name: 'quickstartFunctions',config: {env: envId},data};
  wx.cloud.callFunction(wxCloudObj).then(allResult => {
    console.log(allResult.result)
    callback && callback({msg: "请求成功",data: allResult.result.data,code:200,finallyFlag:true});
  }).catch(err=>{
    callback && callback({msg: "请求失败",data: {},code: 500,finallyFlag:false});
    console.error
  })
}
module.exports = {
  cloudUpLoadFile,
  cloudDatabase,
  cloudFunction,
}















// const cloud = require('wx-server-sdk');

// cloud.init({
//   env: cloud.DYNAMIC_CURRENT_ENV
// });

// // 获取小程序二维码云函数入口函数
// exports.main = async (event, context) => {
//   // 获取小程序二维码的buffer
//   const resp = await cloud.openapi.wxacode.get({
//     path: 'pages/index/index'
//   });
//   const { buffer } = resp;
//   // 将图片上传云存储空间
//   const upload = await cloud.uploadFile({
//     cloudPath: 'code.png',
//     fileContent: buffer
//   });
//   return upload.fileID;
// };
