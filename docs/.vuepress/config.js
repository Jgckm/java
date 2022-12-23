import { defineUserConfig } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
    title: 'Java',
    description: 'Java Study,坚持努力',
    base: '/java/',
    markdown: {
        lineNumbers: true,
    },
    theme: defaultTheme({
        lang: 'zh-CN',
        logo: '/logo/java.png',
        nav: [
            { text: 'Github', link: 'https://github.com/jgckM/java' },
        ],
        sidebar: {
            '/': [
                'test',
                'test2',
            ]
        },
        locales: {
            // 键名是该语言所属的子路径
            // 作为特例，默认语言可以使用 '/' 作为其路径。
            '/': {
                lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
            },
            home: '/',
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
})