import { defineConfig } from 'vitepress'
import MarkdownItCustomAttrs from 'markdown-it-custom-attrs'
import '@fancyapps/ui'

const DOCUMENT_SUFFIX = '/document'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "有条网络",
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js' }]
  ],
  base: '/md/md-perfect/',
  description: "perfect order docs ",
  themeConfig: {
    logo: "public/img/logo/logo-text.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页面', link: '/' },
      { text: '使用教程', link: `${DOCUMENT_SUFFIX}/from/reason` },
      { text: '产品价格', link: `${DOCUMENT_SUFFIX}/other/price` },
      { text: '联系我们', link: `${DOCUMENT_SUFFIX}/other/concat` }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Copyright © 2024 有条（莆田）网络科技有限公司. All rights reserved .',
      copyright: ' 联系方式：13515924007 | <a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备19016370号-3</a>'
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
          { text: '传统运营模式 VS 好管家模式 ', link: `${DOCUMENT_SUFFIX}/from/other` },
          { text: '功能思维导图', link: `${DOCUMENT_SUFFIX}/from/xmind` },
        ]
      },
      {
        text: '快速开始 - 核心功能',
        collapsed: false,
        items: [
          { text: '报货下单', link: `${DOCUMENT_SUFFIX}/core/order` },
          { text: '🔥🔥🔥多仓库配货', link: `${DOCUMENT_SUFFIX}/core/warehouse` },
          { text: '配送列表信息', link: `${DOCUMENT_SUFFIX}/core/express` },
          { text: '处理客户退货', link: `${DOCUMENT_SUFFIX}/core/refund` },
          { text: '全自动化账单', link: `${DOCUMENT_SUFFIX}/core/bill` },
          { text: '结算记录', link: `${DOCUMENT_SUFFIX}/core/reconciliation` },
          { text: '🛠️ 库存管理', link: `${DOCUMENT_SUFFIX}/core/stock` },
        ]
      },

      {
        text: '权限控制及数据安全',
        collapsed: false,
        items: [
          { text: '权限角色', link: `${DOCUMENT_SUFFIX}/safe/role` },
          { text: '页面入口密码', link: `${DOCUMENT_SUFFIX}/safe/password` },
          { text: '工厂打烊/ 一键隐藏 ⛔️', link: `${DOCUMENT_SUFFIX}/safe/close` },
          { text: '🔖 🗑 数据清理', link: `${DOCUMENT_SUFFIX}/safe/clean` },
          { text: '📊 可视化数据分析', link: `${DOCUMENT_SUFFIX}/safe/statistics` },
        ]
      },
      {
        text: 'CMS 工厂管理',
        collapsed: false,
        items: [
          { text: '仓库管理', link: `${DOCUMENT_SUFFIX}/cms/warehouse` },
          { text: '分类管理', link: `${DOCUMENT_SUFFIX}/cms/category` },
          { text: '商品管理', link: `${DOCUMENT_SUFFIX}/cms/goods` },
          { text: '尺码管理', link: `${DOCUMENT_SUFFIX}/cms/size` },
          { text: '用户管理', link: `${DOCUMENT_SUFFIX}/cms/user` },
          { text: '价格管理', link: `${DOCUMENT_SUFFIX}/cms/price` },
          { text: '轮播图管理', link: `${DOCUMENT_SUFFIX}/cms/banner` },
          { text: '热门搜索词管理', link: `${DOCUMENT_SUFFIX}/cms/keywords` },
        ]
      },

      {
        text: '其他辅助功能',
        collapsed: false,
        items: [
          { text: '自主新开工厂', link: `${DOCUMENT_SUFFIX}/assist/factory` },
          { text: '自定义排序', link: `${DOCUMENT_SUFFIX}/assist/rank` },
          { text: '集合尺码图一键生成', link: `${DOCUMENT_SUFFIX}/assist/painter` },
        ]
      }

    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
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
