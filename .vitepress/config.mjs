import { defineConfig } from 'vitepress'
import MarkdownItCustomAttrs from 'markdown-it-custom-attrs'
import '@fancyapps/ui'

const DOCUMENT_SUFFIX = '/src/document'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "有条网络",
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js' }]
  ],
  description: "perfect order docs ",
  themeConfig: {
    logo: "logo.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页面', link: '/' },
      { text: '使用教程', link: '/document' },
      { text: '产品价格', link: '/price' },
      { text: '联系我们', link: '/markdown-examples' }
    ],
    search: {
      provider: 'local'
    },
    docFooter: {
      prev: '上一个',
      next: '下一个'
    },
    returnToTopLabel: true,
    sidebar: [
      {
        text: '引言',
        collapsed: false,
        items: [
          { text: '好管家的 由来？', link: `${DOCUMENT_SUFFIX}/from/reason` },
          { text: '传统配货模式', link: `${DOCUMENT_SUFFIX}/from/other` },
          { text: '🚀🚀🚀 好管家配货模式', link: `${DOCUMENT_SUFFIX}/from/us` },
          { text: '功能思维导图', link: `${DOCUMENT_SUFFIX}/from/xmind` },
        ]
      },
      {
        text: '快速开始',
        collapsed: false,
        items: [
          { text: '用户下单 / 管理员代报', link: `${DOCUMENT_SUFFIX}/core/order` },
          { text: '🔥🔥🔥多仓库配货', link: `${DOCUMENT_SUFFIX}/core/warehouse` },
          { text: '配送列表信息', link: `${DOCUMENT_SUFFIX}/core/express` },
          { text: '退货上报', link: '/item-d' },
          { text: '全自动化账单', link: '/item-d' },
          { text: '库存管理', link: '/item-d' },
        ]
      },
      { text: 'example', link: '/markdown-examples' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    enhanceAppFiles: [
      'node_modules/@fancyapps/ui/dist/fancybox.umd.js'
    ],
  },

  markdown: {
    config: (md) => {
      md.use(MarkdownItCustomAttrs, 'image', {
        class: 'fancybox',
        'data-fancybox': 'gallery'
      })
    }
  }
})
