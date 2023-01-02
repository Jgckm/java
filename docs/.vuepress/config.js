import { defineUserConfig } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Java',
    description: 'Java Study,坚持努力',
    base: '/java/',
    markdown: {
        lineNumbers: true,
    },
    theme: defaultTheme({
        logo: '/logo/java.png',
        navbar: [
            { text: 'Github', link: 'https://github.com/jgckM/java' },
        ],
        sidebar: {
            '/zh/guide/': [
                {
                    text: 'Java基础',
                    children: [
                        '01-注释和关键字',
                        '02-字面量',
                        '03-变量',
                        '04-数据类型',
                        '05-标识符',
                        '进制转换',
                        "06-键盘录入",
                        "07-运算符",
                        "08-多学一招",
                        "09-流程控制语句",
                        "10-获取随机数",
                        "11-数组",
                        "12-方法",
                        "13-综合练习",
                    ]
                },

            ]
        },
    }),

    head: [
        ['link', { rel: 'icon', href: '/logo/java.png' }],
    ],
    plugins: [
        docsearchPlugin({
            appId: '4GKRFX9WO6',
            apiKey: 'b1688585ac173a1da26f53de06745b47',
            indexName: 'java',
            placeholder: '请输入关键词',
            buttonText: '搜索',
        })
    ],
    home: '/',
})