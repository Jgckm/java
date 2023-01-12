const creatSidebar = require("./sidebar");

const sidebar = creatSidebar();

module.exports = {
  title: "Java",
  home: "/",
  description: "Java Study,坚持努力",
  base: "/java/",
  markdown: {
    lineNumbers: true,
  },
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  head: [
    ["link", { rel: "icon", href: "/logo/java.png" }],
    ["link", { rel: "stylesheet", href: "/css/index.css" }],
  ],
  themeConfig: {
    logo: "/logo/java.png",
    navbar: [
      { text: "主页", link: "/" },
      { text: "Github", link: "https://github.com/jgckM/java", target: "_blank" },
    ],
    sidebarDepth: 2,
    lastUpdated: "最后更新",
    smoothScroll: true,
    sidebar: sidebar,

    algolia: {
      apiKey: "b1688585ac173a1da26f53de06745b47",
      indexName: "java_doc",
      // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
      //   appId: "BH4D9OD16A",
    },
  },
  plugins: [["@vuepress/back-to-top"], ["@vuepress/nprogress"]],
  /* plugins: [
          docsearchPlugin({
            appId: "4GKRFX9WO6",
            apiKey: "b1688585ac173a1da26f53de06745b47",
            indexName: "java",
            placeholder: "请输入关键词",
            buttonText: "搜索",
            searchParameters: {
              facetFilters: ["tags:v2"],
            },
          }),
        ], */
};
