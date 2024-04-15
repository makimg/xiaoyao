
const DOMAIN = "https://merckartest.kydev.net"; //测试环境

// const DOMAIN = "https://x2nfqgr3.dongtaiyuming.net"; //本地环境

// const DOMAIN = "https://merckai.kydev.net/"; //正式环境

const DOMAIN_QQLYKM = "https://qqlykm.cn"; //功能大全域名

const DOMAIN_PICASSO = "http://service.picasso.adesk.com";//未知壁纸

const DOMAIN_360 = "http://wallpaper.apc.360.cn"; //360域名

const DOMAIN_WALLPAPER = "http://openbox.mobilem.360.cn";

const DOMAIN_BING = "https://bing.img.run";//Bing壁纸

const DOMAIN_INTERFACE = "https://interface.meiriyiwen.com";//每日一文


const DOMAIN_MAIBAAPP = "https://spare.maibaapp.com";

const categoryList = [
  {
    cid: 1,
    icon: "http://elf-deco.img.maibaapp.com/ugc/category/wallpaper/1.png",
    title: "风景",
  },
  {
    cid: 2,
    icon: "http://elf-deco.img.maibaapp.com/ugc/category/wallpaper/2.png",
    title: "插画",
  },
  {
    cid: 3,
    icon: "http://elf-deco.img.maibaapp.com/ugc/category/wallpaper/3.png",
    title: "文字",
  },
  {
    cid: 4,
    icon: "http://webimg.maibaapp.com/content/img/images/20165613/18/56/23480.jpg",
    title: "古风",
  },
  {
    cid: 5,
    icon: "http://elf-deco.img.maibaapp.com/ugc/category/wallpaper/5.png",
    title: "情侣",
  },
  {
    cid: 6,
    icon: "http://webimg.maibaapp.com/content/img/images/20165613/18/56/15055.jpg",
    title: "欧美",
  },
  {
    cid: 8,
    icon: "http://elf-deco.img.maibaapp.com/ugc/category/wallpaper/8.png",
    title: "小清新",
  },
  {
    cid: 9,
    icon: "http://elf-deco.img.maibaapp.com/ugc/category/wallpaper/9.png",
    title: "电影台词",
  },
  {
    cid: 10,
    icon: "http://elf-deco.img.maibaapp.com/ugc/category/wallpaper/10.jpg",
    title: "锁屏专用",
  },
  {
    cid: 11,
    icon: "http://elf-deco.img.maibaapp.com/ugc/category/wallpaper/11.jpg",
    title: "氢壁纸",
  },
  {
    cid: 12,
    icon: "http://elf-deco.img.maibaapp.com/ugc/category/wallpaper/12.jpg",
    title: "姓氏壁纸",
  },
  {
    cid: 13,
    icon: "http://elf-deco.img.maibaapp.com/ugc/category/wallpaper/12.jpg",
    title: "集福",
  },
  {
    cid: 14,
    icon: "http://elf-deco.img.maibaapp.com/ugc/category/wallpaper/3.png",
    title: "鼠年大吉",
  },
]


const DOMAIN_API = {
  // 小默微服务
  jokebot: "jokebot", //笑话大全
  openai: "openai", //智能问答
  //QQLYKM功能大全
  randtext: `${DOMAIN_QQLYKM}/api/randtext/get`, //随机语录、随机一言
  freeRandom: `${DOMAIN_QQLYKM}/api/free/random/get`,//随机图片
  changya: `${DOMAIN_QQLYKM}/api/changya/`,//随机唱鸭
  fengjing: `${DOMAIN_QQLYKM}/api/fengjing/`,//随机风景图
  joke: `${DOMAIN_QQLYKM}/api/joke/`,//笑话大全
  diary: `${DOMAIN_QQLYKM}/api/diary/`,//舔狗日记
  hotlist: `${DOMAIN_QQLYKM}/api/hotlist/get`,//热榜平台
  tTS: `${DOMAIN_QQLYKM}/api/tTS/get`,//语音化
  acrostic: `${DOMAIN_QQLYKM}/api/acrostic/get`,//诗句
  fanyi: `${DOMAIN_QQLYKM}/api/fanyi/get`,//小默翻译
  lyric: `${DOMAIN_QQLYKM}/api/lyric/get`,//查歌词
  categoryType: `${DOMAIN_PICASSO}/v1/vertical/category`,//手机壁纸  http://service.picasso.adesk.com/v1/vertical/category/4e4d610cdf714d2966000003/vertical?limit=30&adult=false&first=1&order=new

  // 2023-12-25
  getWallpaperType: `${DOMAIN_PICASSO}/v1/vertical/category?adult=false&first=1`, //获取壁纸分类
  getWallpaper: `${DOMAIN_PICASSO}/v1/vertical/category`, //获取壁纸数据

  category: `${DOMAIN_360}/index.php`,//360壁纸分类
  wallpaperHot: `${DOMAIN_WALLPAPER}/html/api/wallpaperhot.html`, //关键词

  
  articleToday: `${DOMAIN_INTERFACE}/article/today?dev=1`, //每日一文 // https://interface.meiriyiwen.com/?dev=1
  articleDay: `${DOMAIN_INTERFACE}/article/day?dev=1`, //特定日期一文   https://interface.meiriyiwen.com/article/day?dev=1&date=20170216
  articleRandom: `${DOMAIN_INTERFACE}/article/random?dev=1`, //随机一文  https://interface.meiriyiwen.com/?dev=1
  
  // Bing 壁纸
  uhd: `${DOMAIN_BING}/uhd.php`,//手机壁纸
  m: `${DOMAIN_BING}/m_302.php`,//手机壁纸
  // https://bing.img.run

  // http://cdn.apc.360.cn/index.php?c=WallPaper&a=getAllCategoriesV2&from=360chrome

  getCateGoryAvatarList: `${DOMAIN_MAIBAAPP}/bbs/newUgc/category/list/0`,
  getCateGoryList: `${DOMAIN_MAIBAAPP}/bbs/newUgc/category/list/1`,
  getNewUgcAvatarList: `${DOMAIN_MAIBAAPP}/bbs/newUgc/category/info/0`,
  getNewUgcList: `${DOMAIN_MAIBAAPP}/bbs/newUgc/category/info/1`,
}

module.exports = {
  DOMAIN,
  DOMAIN_API,
  categoryList,
}
