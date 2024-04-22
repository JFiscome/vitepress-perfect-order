// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './custom.css'

import IndexItems from './components/IndexItems/index.vue'
import ConcatUs from './components/ConcatUs/index.vue'
import PriceInfo from './components/PriceInfo/PriceInfo.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('IndexItems', IndexItems)
    app.component('ConcatUs', ConcatUs)
    app.component('PriceInfo', PriceInfo)
  }
}
