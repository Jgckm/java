// 使用异步函数也是可以的
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer, // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  // 解决中文路由无法被正确加载的问题
 /*  const pathArr = router.options.routes;
  for (let i = 0; i < pathArr.length; i++) {
     pathArr[i].path = encodeURI(pathArr[i].path);
    }
    console.log(pathArr); */
};
