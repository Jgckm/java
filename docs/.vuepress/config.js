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
                {
                    text: 'Java入门',
                    collapsible: true,
                    children: [
                       '注释',
                    ]
                },
                {
                    text: 'Java进阶',
                    collapsible: true,
                    children: [
                        {
                            text: '面向对象',
                            children: ['']
                        }
                    ]
                },
            ],
        },
    }),
    locales: {
        '/zh/guide/': {
            lang: 'zh-CN',
            title: 'Java',
            description: 'Java学习笔记',
        },
    },
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