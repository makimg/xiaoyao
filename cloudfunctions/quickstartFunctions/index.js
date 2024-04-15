
const getOpenId = require('./getOpenId/index');
const getSingleWallpaper = require("./getSingleWallpaper/index");
const getWallpaper = require('./getWallpaper/index');
const getPublic = require('./getPublic/index');

// 云函数入口函数
exports.main = async (event, context) => {
	console.log(event)
  switch (event.type) {
    case 'getOpenId':
		return await getOpenId.main(event, context);
	case 'getSingleWallpaper':
		return await getSingleWallpaper.main(event, context);
	case 'getWallpaper':
		return await getWallpaper.main(event,context);
	case 'getPublic':
		return await getPublic.main(event,context);
  }
};
