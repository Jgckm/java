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
        nav: [
            { text: 'Github', link: 'https://github.com/jgckM/java' },
        ],
        sidebar: {
            '/zh/guide/': [
                '01-注释和关键字',
                '02-字面量',
                '03-变量'
            ]
        },
    }),

    head: [
        ['link', { rel: 'icon', href: '/logo/java.png' }],
    ],
    plugins: [
        docsearchPlugin({
            // 配置项
        }),
    ],
    home: '/',
})