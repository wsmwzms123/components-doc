import { defineConfig } from 'vitepress'
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import nav from './configs/nav'
import sidebar from './configs/sidebar'

export default defineConfig({
  title: 'QN-DESIGN',
  description: '青能科技大前端官方站点',

  lastUpdated: true,
  cleanUrls: true,

  base: process.env.BASE || '/',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],

  markdown: {
    theme: { light: 'github-light', dark: 'github-dark' },

    config: (md) => {
      md.use(demoblockPlugin, {
        customClass: 'demoblock-custom',
      })
    },
  },

  vite: {
    plugins: [demoblockVitePlugin(), vueJsx()],
    resolve: {
      alias: {
        '@alias': path.resolve(__dirname, '../'),
      },
    },
  },

  themeConfig: {
    outlineTitle: '本页目录',
    lastUpdatedText: '上次更新',
    logo: '/logo.svg',

    search: {
      provider: 'local',
    },
    nav,
    sidebar,
    editLink: {
      pattern: 'http://192.168.2.218:9898/',
      text: '在 gitlab 上编辑此页',
    },

    socialLinks: [{ icon: 'github', link: 'http://192.168.2.218:9898/' }],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright© 2019-2023 湖南中青能科技有限公司',
    },
  },
})
