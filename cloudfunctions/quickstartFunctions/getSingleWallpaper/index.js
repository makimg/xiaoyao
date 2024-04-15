// 云函数入口文件  
const cloud = require('wx-server-sdk');
cloud.init({env: cloud.DYNAMIC_CURRENT_ENV});
// 云函数入口函数  
exports.main = async (event, context) => {  
  console.log(event,'context----999999999',);
  let {limit=10,skip=0} = event;

  // //1. 实例化数据库
  // const db = cloud.database();
  // // 2.指定查询哪个集合的数据
  // const collectionName = "wallpaper";
  // // 3.查询总条数 count
  // const countResult = await db.collection(collectionName).count();
  // // 4.获取结果中的total总数
  // const total = countResult.total;
  // console.log(`总共有${total}条记录`);
  // // 5.设置每页最多可获取多少条记录
  // const MAX_LIMIT = 20;
  // // 6.计算总共可以分多少页，向上取操作
  // const total_times = Math.ceil(total / MAX_LIMIT);
  // console.log(`总动可以分${total_times}页`);
  // let wallpaperList = [];
  // for(let i=1; i<=total_times; i++){
  //   await db.collection(collectionName).orderBy('create_time','desc').skip((i-1)*MAX_LIMIT).limit(MAX_LIMIT).get().then(result=>{
  //     console.log(`第${i}页数据：`,result);
  //     wallpaperList = wallpaperList.concat(result.data);
  //   })
  // }
  // console.log(wallpaperList);







  try {  
    // 实例化数据库  
    const db = cloud.database()  
    // 指定要查询的集合  
    const collection = db.collection('wallpaper').orderBy('create_time','desc');
    // 设置查询条件  
    if(event.eventInfo) collection.where(event.eventInfo)     // 在这里设置你的查询条件  
    // 设置分页参数  
    console.log(skip * limit);
    // 执行查询  
    const result = await collection.skip(skip * limit).limit(limit).get()  
    // 处理查询结果  
    return {data: result.data};
  } catch (err) {  
    console.error(err)  
    return {errMsg: err};
  }  
}