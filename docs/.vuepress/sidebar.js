let config = [
  {
    title: "Java基础",
    path: "/guide/",
    children: [
      "idea快捷键",
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
    ],
  },
];

module.exports = () => {
  for (let i = 0; i < config.length; i++) {
    for (let j = 0; j < config[i].children.length; j++) {
      config[i].children[j] = encodeURI(config[i].path + config[i].children[j]);
    }
  }
  return config;
};
