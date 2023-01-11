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
  head: [["link", { rel: "icon", href: "/logo/java.png" }]],
  themeConfig: {
    logo: "/logo/java.png",
    navbar: [
      { text: "主页", link: "/" },
      { text: "Github", link: "https://github.com/jgckM/java", target: "_blank" },
    ],
    sidebarDepth: 2,
    lastUpdated: "最后更新",
    smoothScroll: true,
    sidebar: [
      {
        title: "Java基础",
        path: "/zh/guide/",
        children: [
          "01-注释和关键字",
          "02-字面量",
          "03-变量",
          "04-数据类型",
          "05-标识符",
          "进制转换",
          "06-键盘录入",
          "07-运算符",
          "08-多学一招",
          "09-流程控制语句",
          "10-获取随机数",
          "11-数组",
          "12-方法",
          "13-综合练习",
          "14-面向对象",
          "idea快捷键",
        ],
      },
    ],

    algolia: {
      apiKey: "b1688585ac173a1da26f53de06745b47",
      indexName: "java",
      // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
      appId: "BH4D9OD16A",
    },
  },
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
