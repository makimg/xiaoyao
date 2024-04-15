const cloud = require('wx-server-sdk');
cloud.init({env: cloud.DYNAMIC_CURRENT_ENV});
const db = cloud.database();

// 修改数据库信息云函数入口函数
exports.main = (event, context) => {
  const wxContext = cloud.getWXContext();
  let {OPENID,UNIONID} = wxContext;
  console.log(event,"context",context,wxContext);
  db.collection('wallpaper').get().then(res => {
    console.log(res)
    return {
      success: true,
      data: event.data
    };
  }).catch (e=>{
    return {
      success: false,
      errMsg: e
    };
  })
};
