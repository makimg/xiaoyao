import { hideToast, showToast } from "../../utils/utils";

const { cloudFunction } = require("../../utils/cloudUtils");
const { DOMAIN_API } = require("../../utils/urlConfig");
const { getWxRequest } = require("../../utils/utils");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    wallpaperLabel: [],
    limit:10,
    skip: 0,
    wallpaperList: [],
    isEndOfList: false,
    loading: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    that.getSingleLabel();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let that = this;
    if (typeof that.getTabBar === 'function' && that.getTabBar()) {
			that.getTabBar().setData({selected: 0})
    }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    !this.data.isEndOfList && this.getSingleWapppaper();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  // 获取壁纸分类标签
  getSingleLabel(){
    let that = this;
    let {limit,skip} = that.data;
    cloudFunction({type:"getPublic",eventInfo:{type:"wallpaper",value:"tab"}},result=>{
      console.log("云函数请求结果-获取壁纸分类标签",result);
      if(result&&result.code===200){
        let {list} = result.data;
        that.setData({wallpaperLabel:list},()=>{
          that.getSingleWapppaper();
        });
      }
    })
  },
  // 分页获取壁纸
  getSingleWapppaper(flag=false){
    let that = this;
    let {limit,skip,isEndOfList,active,wallpaperLabel} = that.data;
    let {ename} = wallpaperLabel[active];
    showToast("加载中","none");
    cloudFunction({type:"getSingleWallpaper",limit,skip,eventInfo:{cType:ename}},result=>{
      console.log("云函数请求结果-单页壁纸",result);
      if(flag) that.setData({wallpaperList:[]});
      let {wallpaperList} = that.data;
      if(result&&result.code===200){
        if(result.data.length>0){
          result.data.forEach((element,elemIndex)=>{
            let setIndex = Number(wallpaperList.length);
            element["id"] = setIndex + 1; 
            element["objectFit"] = "widthFix";
            that.setData({
              [`wallpaperList[${setIndex}]`]: element
            })
          })
        } 
        skip+=1;
        isEndOfList = result.data.length < limit ? true : false //判断是否结束
        that.setData({skip,isEndOfList,})
      }
      setTimeout(function(){
        hideToast();
      },1500)
    })
  },
  // 图片滚动
  onChangeTab(event){
    let that = this;
    console.log(event);
    let {active} = that.data;
    let {index} = event.detail;
    if(active===index) return;
    active = index;
    that.setData({active,limit:10,skip: 1,wallpaperList: [],isEndOfList:false,},()=>{
      that.getSingleWapppaper(true);
    })
  }
})