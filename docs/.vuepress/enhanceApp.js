// 使用异步函数也是可以的
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer, // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  //iframe 默认720p画质
  router.afterEach((to) => {
    console.log("after navigation");
    const iframe = document.querySelectorAll("iframe");
    for (let i = 0; i < iframe.length; i++) {
        const item = iframe[i];
        if (!item.src.includes("&high_quality=1")) {
          item.src = item.src + "&high_quality=1";
        } 
    }
  });
};
