let { showToast, randomRgbColor,} = require("../../utils/utils");

// const {globalData:{userInfo:{nickName}}} = getApp();

// pages/my/my.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{
      nickName: "",
      levelNums: 12,
    },
    ulList:[
      {
        name: "关于默垂眸",
        icon: "warning-o",
        color: randomRgbColor(),
        path: "",
        type: "jump",
      },
      {
        name: "日志",
        icon: "notes-o",
        color: randomRgbColor(),
        path: "",
        type: "jump",
      },
      {
        name: "赞赏支持",
        icon: "balance-o",
        color: randomRgbColor(),
        path: "",
        type: "develop",
      },
      {
        name: "意见反馈",
        icon: "chat-o",
        color: randomRgbColor(),
        path: "",
        type: "current",
      }
    ],
    customStyle: "background: transparent;",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    let that = this;
    if (typeof that.getTabBar === 'function' && that.getTabBar()) {
			that.getTabBar().setData({selected: 1})
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  //项目点击事件
  itemClick(event){
    let that = this;
    let {cliIndex} = event.currentTarget.dataset;
    let {ulList} = that.data;
    let {type} = ulList[cliIndex];
    if(type=="develop") return showToast("努力开发中，敬请期待","none",1500);
  }
})