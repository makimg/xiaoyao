const { envList } = require("./utils/envList");
import randomName from './utils/randomName';

// app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        env: envList[0].envId,
        traceUser: true,
      });
    }
    this.globalData = {};
    wx.setStorageSync('limit', 30)
  },
  randomName,
  globalData:{
    userInfo: {
      nickName: randomName.getNickName()
    }
  }
});
