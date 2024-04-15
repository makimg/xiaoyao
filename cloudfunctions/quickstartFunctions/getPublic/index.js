const cloud = require('wx-server-sdk');
cloud.init({env: cloud.DYNAMIC_CURRENT_ENV});
const db = cloud.database();

// 修改数据库信息云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();
  console.log(event,"context",context,wxContext);
  try {
    let redResult = await db.collection('public').where(event.eventInfo).get();
    console.log(redResult,"云");
    return {
      success: true,
			data: redResult.data[0]
    }
  } catch (error) {
    return {
      success: false,
      data: redResult.data,
      errMsg: error,
    }
  }
};
