import { cloudFunction } from '../../utils/cloudUtils';
import randomName from '../../utils/randomName';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryList: [],
    swiperUl: [
      {
        name: randomName.getNickName(),
        imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
        id: Math.floor(255 * Math.random()),
      },
      {
        name: randomName.getNickName(),
        imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
        id: Math.floor(255 * Math.random()),
      },
      {
        name: randomName.getNickName(),
        imgUrl: "https://img.yzcdn.cn/vant/cat.jpeg",
        id: Math.floor(255 * Math.random()),
      }
    ],
    noticeValue: `${randomName.getNickName()}对${randomName.getNickName()}说${randomName.getNickFoot()}`,
    tabActive: 0,
    picList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let that = this;
    let tabActive = 0;
    if(options&&options.sIndex&&Number(options.sIndex)>0) tabActive = Number(options.sIndex);
    that.setData({tabActive},()=>{
      // that.getWallpaperCate();
    })
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
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  // 获取壁纸分类
  getWallpaperCate(){
    let that = this;
    let {categoryList} = that.data;
    cloudFunction({showToast:true,type:"getPublic",data:{location:"index",value:"nav-tag"}},result=>{
      console.log("云函数请求结果",result);
      if(result&&result.code===200){
        categoryList = result.data.list;
        that.setData({categoryList})
      }
    })
  }
})